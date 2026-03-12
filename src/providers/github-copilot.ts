/**
 * GitHub Copilot provider — OpenAI-compatible endpoint via GitHub Models.
 *
 * Env vars:
 *   GITHUB_TOKEN     - GitHub token (PAT or GitHub Actions `GITHUB_TOKEN`)
 *   COPILOT_MODEL    - model name (default: gpt-5-mini)
 */

import { OpenAICompatibleProvider } from "./openai-compatible.ts";

const GITHUB_COPILOT_BASE_URL = "https://models.github.ai/inference";

export class GitHubCopilotProvider extends OpenAICompatibleProvider {
  readonly name = "github-copilot";

  constructor(opts?: { apiKey?: string; model?: string }) {
    super({
      apiKey: opts?.apiKey ?? process.env["GITHUB_TOKEN"],
      baseURL: GITHUB_COPILOT_BASE_URL,
      model: opts?.model ?? process.env["COPILOT_MODEL"] ?? "gpt-5-mini",
    });
  }
}
