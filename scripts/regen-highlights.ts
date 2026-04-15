/**
 * One-off script: regenerate highlights.json from existing reports
 * and optionally resend Telegram notification.
 *
 * Usage:
 *   npx tsx scripts/regen-highlights.ts [--notify]
 *
 * Env vars:
 *   ANTHROPIC_API_KEY (or LLM_PROVIDER + matching key)
 *   TELEGRAM_BOT_TOKEN + TELEGRAM_CHAT_ID (only if --notify)
 */

import fs from "node:fs";
import path from "node:path";
import { callLlm } from "../src/report.ts";
import { buildHighlightsPrompt, type ReportHighlights } from "../src/prompts-data.ts";
import { buildMessage } from "../src/notify.ts";
import type { Lang } from "../src/i18n.ts";

const DATE = process.argv[2] && !process.argv[2].startsWith("-") ? process.argv[2] : null;
const NOTIFY = process.argv.includes("--notify");

async function main() {
  // Find latest date
  const digestsDir = "digests";
  const dateStr =
    DATE ??
    fs
      .readdirSync(digestsDir)
      .filter((d) => /^\d{4}-\d{2}-\d{2}$/.test(d))
      .sort()
      .reverse()[0];

  if (!dateStr) {
    console.error("No digest date found");
    process.exit(1);
  }

  console.log(`Regenerating highlights for ${dateStr}...`);

  const reportIds = [
    "ai-cli",
    "ai-agents",
    "ai-web",
    "ai-trending",
    "ai-hn",
    "ai-ph",
    "ai-arxiv",
    "ai-hf",
    "ai-community",
  ];

  // Read reports
  const zhReports: Record<string, string> = {};
  const enReports: Record<string, string> = {};
  for (const id of reportIds) {
    const zhPath = path.join(digestsDir, dateStr, `${id}.md`);
    const enPath = path.join(digestsDir, dateStr, `${id}-en.md`);
    if (fs.existsSync(zhPath)) zhReports[id] = fs.readFileSync(zhPath, "utf-8");
    if (fs.existsSync(enPath)) enReports[id] = fs.readFileSync(enPath, "utf-8");
  }

  console.log(`  ZH reports: ${Object.keys(zhReports).length}, EN reports: ${Object.keys(enReports).length}`);

  // Generate highlights
  const highlights: Record<Lang, ReportHighlights> = { zh: {}, en: {} };
  const [zhRaw, enRaw] = await Promise.all([
    callLlm(buildHighlightsPrompt(zhReports, "zh"), 2048),
    callLlm(buildHighlightsPrompt(enReports, "en"), 2048),
  ]);

  highlights.zh = JSON.parse(
    zhRaw
      .replace(/```json?\n?/g, "")
      .replace(/```/g, "")
      .trim(),
  );
  highlights.en = JSON.parse(
    enRaw
      .replace(/```json?\n?/g, "")
      .replace(/```/g, "")
      .trim(),
  );

  const outPath = path.join(digestsDir, dateStr, "highlights.json");
  fs.writeFileSync(outPath, JSON.stringify(highlights, null, 2) + "\n");
  console.log(`  Saved ${outPath}`);
  console.log(`  ZH keys: ${Object.keys(highlights.zh).join(", ")}`);
  console.log(`  EN keys: ${Object.keys(highlights.en).join(", ")}`);

  if (NOTIFY) {
    const BOT_TOKEN = process.env["TELEGRAM_BOT_TOKEN"] ?? "";
    const CHAT_ID = process.env["TELEGRAM_CHAT_ID"] || "@agents_radar";

    if (!BOT_TOKEN) {
      console.error("  TELEGRAM_BOT_TOKEN not set, cannot send notification.");
      process.exit(1);
    }

    const allReports = [...Object.keys(zhReports), ...Object.keys(enReports).map((k) => `${k}-en`)];
    const text = buildMessage(dateStr, allReports, undefined, highlights);

    console.log(`  Sending Telegram notification...`);
    const res = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text,
        parse_mode: "HTML",
        disable_web_page_preview: true,
      }),
    });

    if (!res.ok) {
      const body = await res.text();
      console.error(`  Telegram API ${res.status}: ${body}`);
      process.exit(1);
    }
    console.log("  Telegram notification sent!");
  }

  console.log("Done!");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
