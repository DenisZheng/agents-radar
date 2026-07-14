/**
 * LLM invocation, file I/O, and GitHub issue creation helpers.
 */

import fs from "node:fs";
import path from "node:path";
import { type Lang, FOOTER } from "./i18n.ts";
import { sleep } from "./date.ts";

// ---------------------------------------------------------------------------
// LLM token budget constants
// ---------------------------------------------------------------------------

export const LLM_TOKENS_DEFAULT = 4096;
export const LLM_TOKENS_TRENDING = 6144;
export const LLM_TOKENS_WEB = 8192;
export const LLM_TOKENS_ROLLUP = 8192;
import { type LlmProvider, createProvider } from "./providers/index.ts";

const provider: LlmProvider = createProvider();

// ---------------------------------------------------------------------------
// Concurrency limiter — prevents rate-limit (429) errors when many LLM calls
// are fired in parallel. At most LLM_CONCURRENCY requests are in-flight at
// any given time; the rest queue and run as slots free up.
// ---------------------------------------------------------------------------

const LLM_CONCURRENCY = 5;
let llmSlots = LLM_CONCURRENCY;
const llmQueue: Array<() => void> = [];

function acquireSlot(): Promise<void> {
  if (llmSlots > 0) {
    llmSlots--;
    return Promise.resolve();
  }
  return new Promise((resolve) => llmQueue.push(resolve));
}

function releaseSlot(): void {
  const next = llmQueue.shift();
  if (next) {
    next();
  } else {
    llmSlots++;
  }
}

// ---------------------------------------------------------------------------
// LLM
// ---------------------------------------------------------------------------

const MAX_RETRIES = 3;
const RETRY_BASE_MS = 5_000; // 5 s, 10 s, 20 s

export function is429(err: unknown): boolean {
  return (err as { status?: number })?.status === 429 || String(err).includes("429");
}

export async function callLlm(prompt: string, maxTokens = LLM_TOKENS_DEFAULT): Promise<string> {
  for (let attempt = 0; ; attempt++) {
    await acquireSlot();
    let released = false;
    try {
      return await provider.call(prompt, maxTokens);
    } catch (err) {
      if (attempt < MAX_RETRIES && is429(err)) {
        releaseSlot();
        released = true;
        const wait = RETRY_BASE_MS * 2 ** attempt;
        console.error(`[llm] 429 — retry ${attempt + 1}/${MAX_RETRIES} in ${wait / 1000}s...`);
        await sleep(wait);
        continue;
      }
      throw err;
    } finally {
      if (!released) releaseSlot();
    }
  }
}

// Matches ASCII control characters U+0000–U+001F. Built from a string so no
// literal control character appears in the source (keeps it readable + lint-clean).
// eslint-disable-next-line no-control-regex
const CONTROL_CHARS = new RegExp("[\\u0000-\\u001F]", "g");

/**
 * Parse JSON returned by an LLM. Strips markdown code fences and replaces raw
 * control characters with spaces before parsing. The model occasionally emits
 * an unescaped control character (e.g. a bare newline) inside a string literal,
 * which is illegal in JSON and makes `JSON.parse` throw "Bad control character
 * in string literal". Control chars outside strings are only insignificant
 * whitespace, so replacing them is safe either way.
 *
 * If the strict parse still fails, the payload is repaired once (drop any prose
 * wrapper around the JSON, strip trailing commas) and retried — a single stray
 * character (e.g. a trailing comma before `}`) used to wipe an entire language's
 * highlights.json.
 */
export function parseLlmJson<T = unknown>(raw: string): T {
  const cleaned = raw
    .replace(/```json?\n?/g, "")
    .replace(/```/g, "")
    .replace(CONTROL_CHARS, " ")
    .trim();
  try {
    return JSON.parse(cleaned) as T;
  } catch (err) {
    const repaired = repairJson(cleaned);
    if (repaired !== cleaned) return JSON.parse(repaired) as T;
    throw err;
  }
}

/**
 * Best-effort repair of common LLM JSON defects: narrow to the outermost
 * object/array (dropping surrounding prose) and remove trailing commas before a
 * closing brace or bracket. Returns the input unchanged when nothing applies.
 */
function repairJson(s: string): string {
  const first = s.search(/[{[]/);
  const lastBrace = s.lastIndexOf("}");
  const lastBracket = s.lastIndexOf("]");
  const last = Math.max(lastBrace, lastBracket);
  const narrowed = first >= 0 && last > first ? s.slice(first, last + 1) : s;
  return narrowed.replace(/,(\s*[}\]])/g, "$1");
}

// ---------------------------------------------------------------------------
// File output
// ---------------------------------------------------------------------------

export function saveFile(content: string, ...segments: string[]): string {
  const filepath = path.posix.join("digests", ...segments);
  fs.mkdirSync(path.posix.dirname(filepath), { recursive: true });
  fs.writeFileSync(filepath, content, "utf-8");
  return filepath;
}

export function autoGenFooter(lang: Lang = "zh"): string {
  const digestRepo = process.env["DIGEST_REPO"] ?? "";
  if (!digestRepo) return "";
  return `\n\n---\n*${FOOTER.autoGen[lang]} [agents-radar](https://github.com/${digestRepo})${lang === "en" ? "." : " 自动生成。"}*`;
}
