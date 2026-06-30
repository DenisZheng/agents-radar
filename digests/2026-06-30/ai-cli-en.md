# AI CLI Tools Community Digest 2026-06-30

> Generated: 2026-06-30 00:38 UTC | Tools covered: 9

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Gemini CLI](https://github.com/google-gemini/gemini-cli)
- [GitHub Copilot CLI](https://github.com/github/copilot-cli)
- [Kimi Code CLI](https://github.com/MoonshotAI/kimi-cli)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Pi](https://github.com/badlogic/pi-mono)
- [Qwen Code](https://github.com/QwenLM/qwen-code)
- [DeepSeek TUI](https://github.com/Hmbown/DeepSeek-TUI)
- [Claude Code Skills](https://github.com/anthropics/skills)

---

## Cross-Tool Comparison

# AI CLI Tools Ecosystem — Cross-Tool Comparison Report

**Date: 2026-06-30 | Sources: GitHub community digests for 9 major AI CLI tools**

---

## 1. Ecosystem Overview

The AI CLI tool ecosystem in mid-2026 is in a phase of rapid divergence and hardening. What began in 2024–2025 as a wave of terminal-based AI chat wrappers has stratified into two tiers: **full-featured agentic development platforms** (Claude Code, OpenAI Codex, Gemini CLI, Qwen Code, OpenCode) that orchestrate multi-agent workflows, sandboxing, and IDE integration, and **lightweight TUI clients** (Pi, DeepSeek TUI, Kimi Code CLI) that prioritize streaming quality, provider flexibility, and terminal UX polish. The dominant themes across all projects are **context management** (compaction, caching, token budgeting), **multi-agent orchestration**, and **enterprise readiness** (org policy, audit trails, managed config). No single tool has achieved clear feature parity with all others; each is optimizing for a different slice of the developer workflow.

---

## 2. Activity Comparison

| Tool | Open Issues (notable) | PRs Active (24h) | Latest Release | Release Cadence |
|---|---|---|---|---|
| **Claude Code** | 10 highlighted (3,800+ total) | 3 updated | v2.1.196 (2026-06-30) | ~Daily patches |
| **OpenAI Codex** | 10 highlighted (3,000+ total) | 10 active | rust-v0.143.0-alpha.31 | Daily alphas |
| **Gemini CLI** | 10 highlighted (2,600+ total) | 10 open | v0.51.0-nightly.20260629 | Nightly |
| **GitHub Copilot CLI** | 10 highlighted (400+ total) | 0 visible | v1.0.66-2 | Weekly patches |
| **Kimi Code CLI** | 1 active | 0 | None recent | Sporadic |
| **OpenCode** | 3 highlighted (3,400+ total) | Multiple merged (V2 branch) | None (24h) | Rolling |
| **Pi** | 10 highlighted (600+ total) | 7 total | None (24h) | As-needed |
| **Qwen Code** | 10 highlighted (600+ total) | 10 open | None (24h) | Nightly pipeline |
| **DeepSeek TUI** | 10 highlighted (3,800+ total) | 9 active | v0.8.66 RC | Bi-weekly |

**Key takeaway:** OpenAI Codex and Gemini CLI show the highest PR velocity. Claude Code leads in raw issue volume and community engagement (616 👍 on #18435 alone). GitHub Copilot CLI and Kimi Code CLI are the quietest, with Copilot CLI showing regression-heavy maintenance and Kimi in near-maintenance mode.

---

## 3. Shared Feature Directions

The following requirements appear across **3 or more** tool communities simultaneously:

| Direction | Tools | Specific Needs |
|---|---|---|
| **Context compaction that preserves task state** | OpenAI Codex (#5957, #25792), OpenCode (#30680), Qwen Code (#5957), Claude Code (session resume) | Users demand compaction that doesn't discard progress metadata; proposals include preserving last N operational steps verbatim |
| **Multi-account / profile switching** | Claude Code (#18435, 616👍), Copilot CLI (enterprise vs. personal), DeepSeek TUI (Fleet loadout) | Developers juggling work and personal accounts need first-class profile management |
| **Token cost transparency & cache optimization** | DeepSeek TUI (#1177, #743), Qwen Code (#5942), OpenAI Codex (#14593, #28224), Claude Code (#23000) | Cache hit rates, rolling-window quota accounting, and per-token cost visibility are universal pain points |
| **Org/enterprise managed configuration** | Copilot CLI (#3909), Claude Code (org defaults shipped), Pi (#6159), Qwen Code (daemon mode) | Admin consoles, centrally pushed env vars, policy-as-code for CLI installs |
| **Sub-agent orchestration reliability** | Gemini CLI (#21409, #22323), Claude Code (#72343), DeepSeek TUI (#1425, #3800-family), Qwen Code (#6027) | Agent hangs, false-success reporting, and fanout concurrency are systemic across all multi-agent tools |
| **TUI scroll/streaming stability** | Pi (#5825), Qwen Code (#5941, #5971), Copilot CLI (#3964), DeepSeek TUI (Hotbar) | Scroll hijack, auto-scroll conflicts, and rendering regressions are endemic to terminal-based tools |
| **MCP (Model Context Protocol) hardening** | OpenAI Codex (10+ security PRs), Copilot CLI (#3958, #3973), Claude Code (#3433), Qwen Code (#6004) | OAuth flows, stdio transport, Windows .bat handling, and sandbox isolation are shared infrastructure challenges |
| **Permission model clarity** | DeepSeek TUI (#3795, #3797, #1186), Claude Code (sandbox #64061), Gemini CLI (#22093), OpenCode (V2) | Users struggle with approval fatigue, mode-vs-policy conflicts, and sandbox boundary enforcement |

---

## 4. Differentiation Analysis

### Full-Featured Agentic Platforms

| Tool | Primary Target User | Technical Differentiator | Weakness |
|---|---|---|---|
| **Claude Code** | Professional developers, teams | Deepest feature set (sandbox, hooks, MCP, subagents, IDE extensions) | Sandbox perf in large repos; safety filter false positives |
| **OpenAI Codex** | Developers wanting autonomous long-running agents | Rust-based, strongest security PR velocity, Responses API integration | Context compaction reliability; Windows quality |
| **Gemini CLI** | Google Cloud / multi-model developers | Caretaker-agent infrastructure, multi-model evals, tight GCP integration | Agent hangs; silent failures; cross-platform gaps |
| **Qwen Code** | Chinese / mobile-first developers | Daemon/serve mode, mobile web shell, multi-channel bots (DingTalk, Feishu) | Streaming regressions; auth persistence bugs |
| **OpenCode** | Go ecosystem developers | V2 TUI migration, Go gateway, MCP prompts/logging/stdio | GLM-5.x cache instability; Ollama provider hang |

### Lightweight TUI Clients

| Tool | Primary Target User | Technical Differentiator | Weakness |
|---|---|---|---|
| **Pi** | Minimalist terminal users | Provider-agnostic, streaming reliability focus, extension ecosystem | No daemon mode; smaller community |
| **DeepSeek TUI** | Cost-sensitive / local-model users | Hotbar UX, approval-gated shell, Codex-token-parity optimization | Cache hit rate; sub-agent scalability |
| **Kimi Code CLI** | Mobile / casual users | Lightweight wrapper, minimal config | Near-zero activity; limited features |
| **GitHub Copilot CLI** | GitHub ecosystem enterprise users | Native `gh` integration, plugin skills, attachment variants | Stuck sessions; terminal regressions; no enterprise config |

---

## 5. Community Momentum & Maturity

### 🟢 High Momentum, Rapidly Iterating

- **OpenAI Codex** — 10 active PRs in 24h, daily alpha releases, aggressive security hardening. The team is shipping faster than the community can file issues. Strongest signal of active investment.
- **Gemini CLI** — 10 open PRs, nightly releases, caretaker-agent infrastructure being built from scratch. Google is investing heavily in automated issue triage.
- **Claude Code** — Daily releases, 616 👍 top issue, large comment volumes. Anthropic is iterating on features but struggling with sandbox perf and safety filter regressions.

### 🟡 Steady Maturity, Focused Hardening

- **DeepSeek TUI** — v0.8.66 RC with a large batch of merged PRs. Active sub-agent scalability work. Community is vocal about cache issues but the team is responding.
- **Qwen Code** — 10 active PRs, daemon/TLS/mobile focus. Strong feature velocity but quality regressions (streaming, scroll) are eroding trust.
- **OpenCode** — V2 branch activity is high but no releases. The TUI migration is a significant architectural bet.

### 🟠 Niche or Stagnant

- **Pi** — Small but active community. PRs are merging, but the project lacks the resources of larger competitors. Focused on streaming reliability and provider diversity.
- **GitHub Copilot CLI** — Regression-heavy (stuck sessions, terminal bugs, web_fetch broken). No PRs merged in 24h. Appears to be in maintenance mode despite enterprise demand signals.
- **Kimi Code CLI** — Near-zero activity. One issue in 24h. Effectively dormant between development cycles.

---

## 6. Trend Signals

### 1. Context Compaction Is the Next Battleground
Every major tool is grappling with the same fundamental problem: **how do you compress a long agent session without losing the model's understanding of what it's doing?** OpenAI Codex has the most public pain (#5957, #25792), but Claude Code, Qwen Code, and OpenCode all have related issues. The winning implementation will be the one that solves this without requiring manual checkpointing.

### 2. Security Hardening Is Becoming Table Stakes
OpenAI Codex's 10+ security PRs in a single day (Git sandboxing, fake-shell approval bypass, PowerShell parser hardening) set a new bar. Claude Code's cyber safety filter false positives (#72373, #72256) show the opposite risk: **overly aggressive safety blocks that alienate legitimate users**. The industry needs a nuanced approach that blocks real threats without halting drone telemetry or security review workflows.

### 3. Enterprise CLI Is an Unmet Demand
GitHub Copilot CLI's org-managed config request (#3909), Claude Code's org-level defaults (shipped in v2.1.196), and Pi's machine-level config request (#6159) all point to the same gap: **companies want to manage AI CLI tools the way they manage IDEs and cloud infrastructure — centrally, with policy enforcement and audit trails**. No tool has fully solved this yet.

### 4. Multi-Agent Orchestration Is Still Broken at Scale
Gemini CLI's subagent hangs (#21409), DeepSeek TUI's 10-agent session freeze (#1425), and Claude Code's tmux teammate crash (#72343) all confirm that **multi-agent workflows are not yet reliable enough for production use**. The tools that solve fanout concurrency, false-success reporting, and agent idle recovery will capture the "autonomous development" market.

### 5. The "Good Enough" TUI Is a Moving Target
Scroll hijacks (Qwen Code #5941, Pi #5825), rendering regressions (Copilot CLI #3964), and mobile input issues (Kimi #2479, Qwen Code #6003) show that **terminal-based AI UX is still surprisingly fragile**. Developers expect IDE-quality rendering from CLI tools, and the gap between expectation and reality remains wide.

### 6. Provider Agnosticism Is a Competitive Moat
Pi's requests for Xiaomi MiMo and Scaleway, DeepSeek TUI's multi-model routing (#2300), and Qwen Code's Anthropic cache parity (#5942) all signal that **developers increasingly refuse to be locked into a single model provider**. Tools that can route intelligently across providers while maintaining cache efficiency and cost transparency will have a structural advantage.

---

*Report compiled from 9 GitHub repository community digests, 2026-06-30. Data reflects a 24-hour snapshot and may not represent full project state.*

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report

**Data as of 2026-06-30 | Source: anthropics/skills**

---

## 1. Top Skills by Community Attention

Most attention clusters around the `skill-creator` evaluation pipeline — a multi-PR focus area that has effectively become the community's de facto working group (#1099, #1050, #1323, #362, #1169, #556). Below are the individual skills that stand out.

**Document Typography** [#514](https://github.com/anthropics/skills/pull/514) — OPEN
Prevents orphan word wrap, widow paragraphs, and numbering misalignment in Claude-generated documents. First touch-quality skill submitted; framed as a universal need (“users rarely ask for good typography but always notice its absence”).

**OpenDocument (ODT/ODS) Support** [#486](https://github.com/anthropics/skills/pull/486) — OPEN
Create, fill, read, and convert OpenDocument Format files. Extends the document-skills family into ISO-standard open formats (LibreOffice ecosystem).

**Tracked-Changes ID Collision Fix** [#541](https://github.com/anthropics/skills/pull/541) — OPEN
Fixes DOCX corruption when adding tracked changes to documents that already contain bookmarks. Addresses shared `w:id` namespace collisions in OOXML — a subtle, high-impact correctness fix.

**Testing Patterns** [#723](https://github.com/anthropics/skills/pull/723) — OPEN
Comprehensive testing skill covering the Testing Trophy model, AAA pattern, React component testing, and edge-case strategies. One of the most pedagogically complete skills proposed.

**Codebase Inventory Audit** [#147](https://github.com/anthropics/skills/pull/147) — OPEN
Ten-step workflow producing a `CODEBASE-STATUS.md` single source of truth — orphaned code, unused files, documentation gaps, infrastructure bloat.

**Skill Quality & Security Analyzers** [#83](https://github.com/anthropics/skills/pull/83) — OPEN
Two meta-skills: one scores skills across five quality dimensions, the other performs security analysis. Not yet merged; represents a “skills about skills” meta-layer.

**Self-Audit Reasoning Gate** [#1367](https://github.com/anthropics/skills/pull/1367) — OPEN (newest)
Four-dimension pre-delivery audit (completeness, consistency, grounding, safety). Explicitly frames itself as a universal quality gate for any project or model.

**SAP RPT-1-OSS Predictor** [#181](https://github.com/anthropics/skills/pull/181) — OPEN
Bridges Claude to SAP's open-source tabular foundation model for predictive analytics on business data. Signals enterprise interest in the skills 2. Community Demand Trends (from Issues)

| Demand Signal | Representative Issues | Theme |
|---|---|---|
| **Organizational distribution** | [#228](https://github.com/anthropics/skills/issues/228) (14 comments, 7 👍) | Shared skill libraries, team/on-prem deployment |
| **Trust & namespace security** | [#492](https://github.com/anthropics/skills/issues/492) (32 comments, 2 👍) | Preventing unofficial skills from masquerading as `anthropic/`-namespaced |
| **Cross-platform reliability** | [#1061](https://github.com/anthropics/skills/issues/1061), [#189](://github.com/anthropics/skills/issues/189) (9 👍) | Windows support, deduplication across plugins |
| **Agent memory & state** | [#1298](https://github.com/anthropics/skills/pull/1298), [#1329](https://github.com/anthropics/skills/issues/1329) | Persistent context across sessions, symbolic memory compression |
| **MCP interop** | [#16](https://github.com/anthropics/skills/issues/16) | Exposing skills as standard MCP tool surfaces |
| **Multi-cloud portability** | [#29](https://github.com/anthropics/skills/issues/29) | Running the skills catalog on AWS Bedrock |

The loudest single issue is **namespace trust** (#492), reflecting a maturing user base that increasingly relies on perceived provenance for permission grants.

---

## 3. High-Potential Pending Skills

These PRs show active development or recent discussion that suggests they may land in upcoming review passes.

| PR | Author | Last Updated | Why It's Close |
|---|---|---|---|
| **run_eval.py cross-platform reliability** [#1298](https://github.com/anthropics/skills/pull/1298) | MartinCajiao | 2026-06-23 | Directly unblocks the description-optimization loop; backed by 10+ repros in #556 |
| **run_eval trigger detection** [#1323](https://github.com/anthropics/skills/pull/1323) | Polluelo978 | 2026-06-25 | Recent PR fixing root cause of 0% recall detection |
| **UTF-8 / panic fix** [#362](https://github.com/anthropics/skills/pull/362) | Mr-Neutr0n | 2026-06-10 | Small, well-scoped, fixes real Rust panics |
| **Self-audit gate** [#1367](https://github.com/anthropics/skills/pull/1367) | YuhaoLin2005 | 2026-06-29 | Freshly opened, explicit replacement of prior closed attempt (#1361) |
| **SAP RPT-1-OSS** [#181](https://github.com/anthropics/skills/pull/181) | amitlals | 2026-03-16 | Enterprise partner activity often accelerates review |

---

## 4. Ecosystem Insight

> **The single most concentrated community demand is for a trustworthy, cross-platform evaluation pipeline for skills themselves** — evidenced by five concurrent PRs and two high-engagement issues focused on the `skill-creator` `run_eval.py` suite — revealing that users have moved beyond authoring skills to demanding measurable quality gates before they trust a skill in production.

---

# Claude Code Community Digest — 2026-06-30

---

## 1. Today's Highlights

Claude Code shipped **v2.1.196** with org-level default model management and improved session naming. The community's most-discussed topic remains **multi-account/profile switching** (#18435, 616 👍), while a wave of **cyber safety-filter false positives** is blocking legitimate drone/telemetry UI development workflows. On the infrastructure side, a sandbox OOM bug (#72367) and full-tree directory walk (#68587) continue to plague large-workspace Linux users.

---

## 2. Releases

### v2.1.196 (2026-06-30)

- **Organization default models** — Admins can set a default model in the org console; it surfaces as "Org default" (or "Role default") in `/model` when no personal override is selected.
- **Readable default session names** — Sessions now get human-friendly names at start, making them easier to identify and resume.

---

## 3. Hot Issues

| # | Issue | Status | Why It Matters |
|---|-------|--------|----------------|
| [#18435](https://github.com/anthropics/claude-code/issues/18435) | Multi-account / profile switching in Claude Desktop | OPEN · 616 👍, 122 comments | The single most upvoted open issue. Developers juggling work and personal Anthropic accounts need first-class profile switching. No native solution exists. |
| [#3433](https://github.com/anthropics/claude-code/issues/3433) | Cannot connect to GitHub remote MCP server via OAuth on Linux | OPEN · 138 👍, 57 comments | Long-running auth bug preventing Linux users from leveraging GitHub's MCP integration. Stale workaround threads keep appearing. |
| [#38993](https://github.com/anthropics/claude-code/issues/38993) | Cowork: virtiofs FUSE mount serves truncated/stale files on Windows | OPEN · 25 👍, 32 comments | Host-side file changes not reflected inside the Cowork VM. Breaks the core "edit locally, run remotely" promise on Windows. |
| [#23030](https://github.com/anthropics/claude-code/issues/23030) | Rate limit triggered at 71% session usage on Max plan | OPEN · 13 👍, 10 comments | Usage meter and actual rate-limit enforcement disagree. Users on expensive plans are confused by premature cutoffs. |
| [#72343](https://github.com/anthropics/claude-code/issues/72343) | Agent Teams: tmux/auto teammates crash on spawn (v2.1.195) | OPEN · 3 comments | Regression in multi-agent workflows. Non-TTY stdin triggers `--print` with no prompt, killing every teammate pane. Fresh report (yesterday). |
| [#72367](https://github.com/anthropics/claude-code/issues/72367) | Sandbox recursively enumerates nested `node_modules` → OOM | CLOSED · 3 comments | Previously reported as #27863 and auto-closed as stale. Still reproduces on 2.1.195. Sandbox mode is effectively unusable in JS monorepos. |
| [#64061](https://github.com/anthropics/claude-code/issues/64061) | VS Code extension ignores `settings.json` sandbox config | OPEN · 3 👍, 4 comments | The IDE extension silently ignores sandbox settings, making the approval-fatigue fix unreachable for VS Code users. |
| [#72256](https://github.com/anthropics/claude-code/issues/72256) | API safeguards block legitimate security code reviews via subagents | OPEN · 1 comment | `skip-publish-guard` false positive prevents spawning a defensive security-reviewer subagent on own code. |
| [#72373](https://github.com/anthropics/claude-code/issues/72373) | Cyber safety filter blocks drone telemetry sensor data work | OPEN · 3 comments | Part of a cluster of false positives (also #72357, #72358) where building drone/telemetry UIs triggers session-halting cyber blocks. |
| [#68587](https://github.com/anthropics/claude-code/issues/68587) | `sandbox.enabled: true` triggers synchronous full-tree walk → multi-minute hang | OPEN · 1 comment | Sandbox startup blocks the JS main thread on every prompt. Doesn't respect `.gitignore`. Makes Claude Code unusable in large monorepos. |

---

## 4. Key PR Progress

| # | PR | Status | Description |
|---|-----|--------|-------------|
| [#72363](https://github.com/anthropics/claude-code/pull/72363) | Gateway GCP example: Agent Platform rebrand & README cleanup | CLOSED | Prose-only update renaming Vertex AI → Agent Platform references in the GCP gateway example. |
| [#72361](https://github.com/anthropics/claude-code/pull/72361) | Add Claude Gateway on GCP example deployment assets | CLOSED | Terraform + script reference deployment artifacts accompanying the published GCP walkthrough. |
| [#72264](https://github.com/anthropics/claude-code/pull/72264) | docs(examples/hooks): document Bash `tool_input` fields | OPEN | Adds a comment to `bash_command_validator_example.py` noting that `PreToolUse` Bash payloads also expose `run_in_background`, `description`, and `timeout` — not just `command`. |

> **Note:** Only 3 PRs were updated in the last 24h. The project is currently in a release-cadence pattern with most activity flowing through issues rather than open PRs.

---

## 5. Feature Request Trends

Based on issue labels, voting patterns, and community discussion volume:

1. **Multi-account / profile switching** (#18435, 616 👍) — By far the most requested feature. Developers want work and personal Anthropic accounts managed simultaneously with easy switching.

2. **Per-subagent observability** (#72287) — Live model, effort, and status columns in `/agents Running`. Currently no way to inspect subagent configuration without blocking the main loop.

3. **Improved session management UI** (#72366) — Left sidebar with Pinned, Current Works, and Recents. Users want IDE-like session navigation in the CLI/Desktop.

4. **Enterprise APIM gateway support** (#62973) — Custom paths, payload injection, SSE fallbacks for strict enterprise API gateways. Closed but signals enterprise demand.

5. **Org-level default model** — Shipped in v2.1.196. Admins can now set org-wide defaults, reducing per-developer configuration overhead.

---

## 6. Developer Pain Points

### 🔴 Sandbox Performance in Large Workspaces
Two related issues (#72367, #68587) describe sandbox mode as effectively broken for JavaScript monorepos and large codebases. The synchronous full-tree walk and unbounded `node_modules` enumeration cause multi-minute hangs and OOM kills. Both have been previously auto-closed as stale, frustrating users who feel the problem is being ignored.

### 🟠 Cyber Safety False Positives
A cluster of issues (#72373, #72357, #72358, #72256) report that building drone telemetry UIs, video processing pipelines, and even defensive security review subagents triggers session-halting blocks. Developers working on legitimate hardware/IoT and security tooling are being blocked by the safety filter with no override path.

### 🟡 Rate Limit / Usage Meter Discrepancy
Issue #23030 (71% usage but rate-limited) and #72372 (Opus-specific sub-quota not surfaced in UI) both point to a transparency problem. Users on paid plans don't understand *which* limit they've hit or why, eroding trust in the metering system.

### 🟡 IDE Extension Parity Gaps
The VS Code extension continues to lag CLI capabilities — sandbox settings ignored (#64061), and multiple Desktop-specific bugs (session tab flicker #72388, shell default ignored #72389, stale task indicator #72122) suggest the Desktop/IDE codebase needs dedicated QA investment.

### 🟢 Agent Teams / Multi-Agent Stability
The tmux teammate crash (#72343) is a fresh regression in 2.1.195, and subagent idle hangs (#71644) point to ongoing reliability issues in Claude Code's multi-agent orchestration layer.

---

*Generated from `github.com/anthropics/claude-code` data as of 2026-06-30.*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-06-30

---

## 1. Today's Highlights

The Codex team shipped two releases (`rust-v0.142.4` maintenance and `rust-v0.143.0-alpha.31`) and is pushing a large batch of security-hardening PRs around Git command sandboxing and approval boundaries. Community attention is dominated by **rate-limit/quota accounting bugs** (Issues #14593 and #30002), **context compaction reliability** (#5957, #29356, #25792), and the long-standing **Linux desktop app request** (#11023, 658 👍). On the PR side, OpenAI engineers are actively hardening the fake-shell approval path, isolating Git transport from untrusted workspace config, and adding distributed tracing for remote first-turn latency.

---

## 2. Releases

| Version | Type | Notes |
|---|---|---|
| [`rust-v0.142.4`](https://github.com/openai/codex/releases/tag/rust-v0.142.4) | Patch | No user-facing changes. Chore/release-belt update. |
| [`rust-v0.143.0-alpha.31`](https://github.com/openai/codex/releases/tag/rust-v0.143.0-alpha.31) | Alpha | Routine alpha rollup; no detailed changelog provided. |

No significant user-facing features landed in these releases.

---

## 3. Hot Issues

### 1. [ Burning tokens very fast](https://github.com/openai/codex/issues/14593) — #14593 | 626 💬 · 276 👍
**Tags:** bug, rate-limits
Business-plan VS Code users report extreme token consumption rates. The thread has been open since March and remains the single most-commented issue, indicating widespread frustration with quota/rate-limit transparency.

### 2. [Codex desktop app for Linux](https://github.com/openai/codex/issues/11023) — #11023 | 132 💬 · 658 👍
**Tags:** enhancement, app
The most upvoted feature request on the repo. Users want a native Linux desktop client, partly because the macOS app has power-management issues (#10432). Strong signal of cross-platform demand.

### 3. [SQLite feedback logs can write ~640 TB/year](https://github.com/openai/codex/issues/28224) — #28224 | 107 💬 · 407 👍
**Tags:** bug, CLI, performance
Codex's feedback logging was causing extreme SSD write amplification. The author confirmed three merged PRs (#29432, #29457) reduced log volume by ~85 %, and the issue was closed. A good example of community-driven performance fixes.

### 4. [Auto compaction causes GPT-5-Codex to lose the plot](https://github.com/openai/codex/issues/5957) — #5957 | 32 💬 · 9 👍
**Tags:** bug, context
Long-running tasks with GPT-5-Codex fail when automatic context compaction discards mid-task state. The model forgets it has edited files and stops mid-task. A recurring theme across multiple issues.

### 5. [Server-side quota over-reports consumption after 5h reset](https://github.com/openai/codex/issues/30002) — #30002 | 29 💬 · 6 👍
**Tags:** bug, rate-limits, app
Pro users hit `usage_limit_reached` within 41 minutes on ~1.35 M tokens after a reset, versus ~156 M tokens needed before the reset. Suggests a server-side accounting bug in the rolling-window quota logic.

### 6. [Context compaction forgets AGENTS rules — task jumps from 97 % back to 42 %](https://github.com/openai/codex/issues/25792) — #25792 | 11 💬
**Tags:** bug, model-behavior, context, app
Compaction discards structured progress metadata, causing the model to regress significantly. Related to #59356 and #29356 — compaction reliability is a systemic pain point.

### 7. [Codex requires verification of inaccessible legacy phone number](https://github.com/openai/codex/issues/25749) — #25749 | 65 💬 · 43 👍
**Tags:** bug, auth, app
Users who signed up with a phone number they can later access (e.g., old carrier) are locked out with no recovery path, even when Google OAuth + MFA is in place. An auth UX gap.

### 8. [This model is not supported when using X-OpenAI-Internal-Codex-Responses-Lite](https://github.com/openai/codex/issues/30224) — #30224 | 57 💬 · 20 👍
**Tags:** bug, custom-model, app, config
Plus subscribers on Windows get opaque "model not supported" errors when using the internal lite header. Likely a config/entitlement mismatch.

### 9. [macOS accumulates Computer Use / MCP zombie processes](https://github.com/openai/codex/issues/25744) — #25744 | 10 💬 · 3 👍
**Tags:** bug, mcp, app, computer-use, performance
Long-running macOS sessions leak child processes, causing HID lag and WindowServer stalls. A resource-leak bug that degrades the OS session over time.

### 10. [Customizable status line](https://github.com/openai/codex/issues/17827) — #17827 | 20 💬 · 78 👍
**Tags:** enhancement, TUI, config
Users want Claude Code–style configurable status line (token usage, model, rate limits, git branch). Second most-upvoted enhancement request.

---

## 4. Key PR Progress

### 1. [Fail closed on executable Git worktree helpers](https://github.com/openai/codex/pull/27914) — @evawong-oai
Hardens Git worktree operations against repository-selected content filters and merge drivers (PSEC-4394). Prevents patch preflight/application/revert from executing untrusted helpers.

### 2. [Require approval for generic Git commands](https://github.com/openai/codex/pull/28714) — @evawong-oai
Closes a command-allowlist gap (PSECOP-111): an argv-only "read-only Git" classification was unsafe because commands like `git stat` can mutate state depending on repo config, attributes, or TTY state.

### 3. [Deny implicit transport for local-only Git operations](https://github.com/openai/codex/pull/29470) — @bookholt-oai
Local Git commands can cross network boundaries when a partial clone fetches missing objects from a promisor remote. This PR blocks implicit transport helpers for local-only operations.

### 4. [Harden fake shell approval boundaries](https://github.com/openai/codex/pull/30631) — @bookholt-oai
A model-selected or nested `shell` wrapper could be reduced to its inner command during approval analysis, inheriting the inner command's trust. This PR prevents fake-shell wrappers from bypassing approval.

### 5. [Trust only system PowerShell parsers on Windows](https://github.com/openai/codex/pull/30628) — @bookholt-oai
On Windows, PowerShell safety classification recognized `argv[0]` by basename and launched a repository-controlled `pwsh.exe` as the AST parser. Now restricted to system PowerShell only.

### 6. [Prevent tool-search rollout poisoning](https://github.com/openai/codex/pull/30618) — @apanasenko-oai
Malformed `tool_search_call.arguments` returned by the Responses service were persisted verbatim and replayed on every follow-up, permanently bricking sessions. This fix prevents persistence of malformed calls.

### 7. [Trace and reduce remote first-turn latency](https://github.com/openai/codex/pull/30632) — @apanasenko-oai
Propagates W3C trace context across Core, exec-server RPC, and the encrypted Noise relay. Adds stage-level spans for tool dispatch and RPC to make remote latency attributable end-to-end.

### 8. [Add generated token auth to app-server WebSockets](https://github.com/openai/codex/pull/30315) — @mikhail-oai
Generates a 256-bit URL-safe connection token for app-server WebSocket listeners and requires it as a query param. Adds `--no-token-check` escape hatch for development.

### 9. [Elicitations: Move to shared ElicitationService](https://github.com/openai/codex/pull/30627) — @cconger
Code-mode tool results could return to the model while an MCP elicitation was still awaiting user input, letting the model continue before the user resolved the request. A single session-level view of outstanding elicitations fixes the race.

### 10. [Apply current permissions before goal continuations](https://github.com/openai/codex/pull/30604) — @ssetty-oai
Extends `thread/goal/set` with approval policy, reviewer, sandbox policy, and named permissions profile context, resolving them before goal state becomes visible to idle lifecycle hooks.

---

## 5. Feature Request Trends

| Direction | Representative Issues | Signal |
|---|---|---|
| **Linux desktop app** | #11023 (658 👍) | By far the most-requested platform expansion |
| **Context compaction reliability** | #5957, #29356, #25792, #29356 | Users want compaction to preserve task progress verbatim (e.g., last 5 operational steps) |
| **Customizable TUI status line** | #17827 (78 👍) | Claude Code parity; real-time token/model/rate-limit/git info |
| **Remote control / mobile bridge** | #27565 (5 👍) | Claude Code's `/remote-control` pattern; start Codex from mobile without SSH |
| **Background event monitor tool** | #29922 | Agent-callable `monitor` tool that wakes Codex on logs, file changes, builds, CI — without polling |
| **Disable autoscroll** | #23517 (3 👍) | UX polish for long responses |
| **Memory/sandbox interaction** | #30615 | Memory Phase 2 should respect `danger-full-access` sandbox mode instead of nesting `sandbox-exec` |

---

## 6. Developer Pain Points

1. **Rate-limit & quota opacity** — Issues #14593 (626 comments) and #30002 show developers cannot predict or understand token consumption. The rolling-window reset accounting appears buggy, eroding trust in plan limits.

2. **Context compaction breaks long tasks** — Multiple issues (#5957, #25792, #29356) describe the model "forgetting" it is mid-task after compaction. For a tool designed for long autonomous runs, this is a critical reliability gap. The community has proposed preserving the last N operational steps verbatim.

3. **Windows-specific quality** — At least 7 open issues are Windows-specific: blank VS Code panel (#21863), empty `.git` folder + repeated `git.exe` spawning (#29492), stuck git polling (#29408), thread-switching slowness (#29187), sandbox runner error (#20570), and missing Computer Use MCP tools (#30486). Windows is clearly the least-polished platform.

4. **Auth recovery dead-ends** — #25749 highlights a scenario where valid OAuth+MFA users are blocked by an inaccessible legacy phone number with no replacement path. This is a support nightmare and a blocker for affected users.

5. **Resource leaks on macOS** — #25744 (zombie processes, HID lag) and #25744 show that long-running sessions degrade OS stability. Developers running extended Codex sessions are hitting this regularly.

6. **Security hardening is active but complex** — The sheer volume of Git-sandboxing PRs (#27914, #28714, #29470, #28761, #28760, #30631, #30628) indicates the team is actively closing supply-chain attack vectors from untrusted repositories. This is good, but the complexity of the approval/sandbox system is a surface area unto itself.

---

*Data source: [github.com/openai/codex](https://github.com/openai/codex) · Digest generated 2026-06-30*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-06-30

---

## 1. Today's Highlights

The project shipped **v0.51.0-nightly.20260629** with a batch of security and stability fixes. The most active area of community discussion remains **agent reliability** — subagent hangs, false-success reporting, and runaway recursive reasoning dominate the issue tracker. On the PR side, contributors are pushing hard on **caretaker-agent infrastructure** (Cloud Run webhook ingestion + triage worker) and hardening file-write permissions to prevent sandbox escapes.

---

## 2. Releases

**v0.51.0-nightly.20260629.gae0a3aa7b** (released 2026-06-29)

- Full changelog: [compare link](https://github.com/google-gemini/gemini-cli/compare/v0.51.0-nightly.20260628.gae0a3aa7b...v0.51.0-nightly.20260629.gae0a3aa7b)

Key changes bundled in this nightly include the closed PRs listed below (signal forwarding, auth URL sanitization, session file resilience, web search timeout, trust dialog fix, and more).

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) | Subagent reports GOAL success after MAX_TURNS | Silent failure masking — users think investigation completed when it never started. Critical for `codebase_investigator` reliability. | 8 comments, 👍2 |
| [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) | Generalist agent hangs indefinitely | Core UX blocker — even simple operations like folder creation hang. Workaround (disabling subagents) defeats the purpose of the tool. | 7 comments, 👍8 (highest engagement) |
| [#24353](https://github.com/google-gemini/gemini-cli/issues/24353) | Robust component-level evaluations (EPIC) | Meta-issue tracking the quality assurance strategy across 76 behavioral evals on 6 Gemini models. Signals maturity push. | 7 comments |
| [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) | AST-aware file reads/search/mapping (EPIC) | Could reduce token usage and turn count by precisely reading method bounds. Long-running investigation into tooling improvements. | 7 comments, 👍1 |
| [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) | Shell command execution stuck on "Waiting input" | CLI hangs after simple commands complete. Recurring report from multiple users — terminal state desync. | 4 comments, 👍3 |
| [#26525](https://github.com/google-gemini/gemini-cli/issues/26525) | Deterministic redaction for Auto Memory logging | Security concern: secrets enter model context *before* redaction. Sensitive data could be logged or persisted. | 5 comments |
| [#26522](https://github.com/google-gemini/gemini-cli/issues/26522) | Auto Memory retries low-signal sessions indefinitely | Resource waste — the extraction agent loops on sessions it has already judged as low-value. | 5 comments |
| [#24246](https://github.com/google-gemini/gemini-cli/issues/24246) | 400 error with >128 tools | Tool-scaling limitation — users with large MCP tool sets hit hard errors. Expectation is graceful scoping. | 3 comments |
| [#22672](https://github.com/google-gemini/gemini-cli/issues/22672) | Agent should stop/discourage destructive behavior | Safety concern — model uses `git reset --force` when safer alternatives exist. Relevant for production/DB workflows. | 3 comments, 👍1 |
| [#22093](https://github.com/google-gemini/gemini-cli/issues/22093) | Subagents running without permission since v0.33.0 | Regression — agents mode disabled in config but subagents still activate. Trust/permission model regression. | 2 comments |

---

## 4. Key PR Progress

| # | PR | Status | Description |
|---|-----|--------|-------------|
| [#28164](https://github.com/google-gemini/gemini-cli/pull/28164) | Limit recursive reasoning turns | **OPEN** | Caps recursive reasoning at 15 turns per user request (configurable via `maxSessionTurns`). Protects CPU/API quotas from infinite loops. |
| [#27971](https://github.com/google-gemini/gemini-cli/pull/27971) | Strip thoughts from scrubbed history turns | **OPEN** | Fixes "thought leakage" — model reasoning bleeding into plain-text history, causing infinite monologue loops. |
| [#28015](https://github.com/google-gemini/gemini-cli/pull/28015) | Cloud Run webhook ingestion service (caretaker) | **OPEN** | Implements the webhook entry point for the Caretaker Agent — signature verification, Firestore transactions, Pub/Sub publishing. |
| [#28163](https://github.com/google-gemini/gemini-cli/pull/28163) | Caretaker triage worker core foundation (pt 1/2) | **OPEN** | Foundational modules for automated issue triage. Part of the caretaker-agent pipeline. |
| [#28053](https://github.com/google-gemini/gemini-cli/pull/28053) | Defensive path resolution for @-reference files | **OPEN** | Fixes "File not found" errors when model passes `@`-prefixed paths to filesystem tools. Also fixes macOS test failures. |
| [#28215](https://github.com/google-gemini/gemini-cli/pull/28215) | Harden file-write scope to .gemini and .gitconfig | **CLOSED** | Security fix — prevents sandbox escape via prompt injection that writes to `.gemini/` config or `.gitconfig`. |
| [#28202](https://github.com/google-gemini/gemini-cli/pull/28202) | Forward SIGINT/SIGTERM to child process on relaunch | **CLOSED** | Fixes orphaned child processes when Ctrl+C is pressed during update/relaunch. |
| [#28200](https://github.com/google-gemini/gemini-cli/pull/28200) | Sanitize trailing periods from auth error URLs | **CLOSED** | Fixes broken terminal hyperlink detection when auth docs URL has trailing punctuation. |
| [#27915](https://github.com/google-gemini/gemini-cli/pull/27915) | Trust dialog discloses correct hook shape | **CLOSED** | Security UX fix — trust dialog was showing the *inverse* of hooks that actually run. |
| [#27910](https://github.com/google-gemini/gemini-cli/pull/27910) | Bound web search tool latency (120s timeout) | **CLOSED** | Prevents agent from hanging indefinitely on web search. Returns recoverable tool error instead. |

---

## 5. Feature Request Trends

Based on issue labels, summaries, and community engagement:

1. **Agent Reliability & Observability** — The dominant theme. Users want subagents that don't hang ([#21409](https://github.com/google-gemini/gemini-cli/issues/21409)), report accurate status ([#22323](https://github.com/google-gemini/gemini-cli/issues/22323)), and whose trajectories are debuggable via `/chat share` ([#22598](https://github.com/google-gemini/gemini-cli/issues/22598)). The caretaker-agent PRs ([#28015](https://github.com/google-gemini/gemini-cli/pull/28015), [#28163](https://github.com/google-gemini/gemini-cli/pull/28163)) represent the maintainer investment in this direction.

2. **Smarter Tool Use** — AST-aware file operations ([#22745](https://github.com/google-gemini/gemini-cli/issues/22745), [#22746](https://github.com/google-gemini/gemini-cli/issues/22746)) to reduce token waste, and tool-scaling beyond 128 tools ([#24246](https://github.com/google-gemini/gemini-cli/issues/24246)) are recurring requests for efficiency.

3. **Safety Guardrails** — Destructive git operations ([#22672](https://github.com/google-gemini/gemini-cli/issues/22672)), file-write sandbox escapes ([#28215](https://github.com/google-gemini/gemini-cli/pull/28215)), and Auto Memory secret redaction ([#26525](https://github.com/google-gemini/gemini-cli/issues/26525)) all reflect demand for tighter safety boundaries.

4. **Memory System Quality** — Multiple issues ([#26525](https://github.com/google-gemini/gemini-cli/issues/26525), [#26522](https://github.com/google-gemini/gemini-cli/issues/26522), [#26523](https://github.com/google-gemini/gemini-cli/issues/26523), [#26516](https://github.com/google-gemini/gemini-cli/issues/26516)) track bugs in Auto Memory — from secret leakage to infinite retries on low-signal sessions to invalid patch handling.

5. **Terminal/UI Polish** — Flicker-free resize ([#21924](https://github.com/google-gemini/gemini-cli/issues/21924)), editor exit corruption ([#24935](https://github.com/google-gemini/gemini-cli/issues/24935)), and shell command hang ([#25166](https://github.com/google-gemini/gemini-cli/issues/25166)) are persistent quality-of-life complaints.

---

## 6. Developer Pain Points

- **Agent hangs are the #1 frustration.** Three separate high-engagement issues ([#21409](https://github.com/google-gemini/gemini-cli/issues/21409) 👍8, [#22323](https://github.com/google-gemini/gemini-cli/issues/22323), [#22465](https://github.com/google-gemini/gemini-cli/issues/22465)) describe scenarios where the agent becomes unresponsive with no clear recovery path. This erodes trust in autonomous workflows.

- **Silent failures are worse than loud ones.** The MAX_TURNS false-success bug ([#22323](https://github.com/google-gemini/gemini-cli/issues/22323)) and the shell "waiting input" hang ([#25166](https://github.com/google-gemini/gemini-cli/issues/25166)) both involve the CLI appearing functional while actually being stuck — users waste time before realizing nothing is happening.

- **Security boundaries feel porous.** The `.gemini/` write escape ([#22093](https://github.com/google-gemini/gemini-cli/issues/22093) config bypass, [#28215](https://github.com/google-gemini/gemini-cli/pull/28215) sandbox escape) and Auto Memory secret handling ([#26525](https://github.com/google-gemini/gemini-cli/issues/26525)) suggest the permission model needs deeper hardening, especially for headless/CI contexts.

- **Tool sprawl causes errors.** Hitting 400 errors at >128 tools ([#24246](https://github.com/google-gemini/gemini-cli/issues/24246)) indicates the tool registration/scoping mechanism doesn't gracefully handle real-world MCP-heavy setups.

- **Cross-platform inconsistencies.** Wayland browser agent failures ([#21983](https://github.com/google-gemini/gemini-cli/issues/21983)), macOS-specific test failures ([#28053](https://github.com/google-gemini/gemini-cli/pull/28053)), and terminal rendering bugs ([#21924](https://github.com/google-gemini/gemini-cli/issues/21924), [#24935](https://github.com/google-gemini/gemini-cli/issues/24935)) point to platform-specific testing gaps.

---

*Data source: [github.com/google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli) — snapshot at 2026-06-30.*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest  
**Date: 2026-06-20**  
*Repository: [github.com/github/copilot-cli](https://github.com/github/copilot-cli)*

---

## 1. Today's Highlights

The Copilot CLI shipped **v1.0.66-2**, a notable stabilization release that allows plugins to register identically‑named skills without clashing, adds `read_agent` LSP log capture, installs `gh` automatically when missing, and supports attachment variants in prompts. Concurrently, the issue tracker shows **regression symptoms**: users report broken stdio MCP servers on Windows (`.bat`/.`cmd`) and tab completion failures in Bash. A large share of new feature requests revolves around **enterprise/org-managed configuration and session lifecycle controls**.

---

## 2. Releases

**v1.0.66-2** ([release](https://github.com/github/copilot-cli/releases))  
This incremental preview release focuses on plugin extensibility, observability, and prompt fidelity:

- **Added** – Skills with the same name can now coexist when sourced from different plugins  
- **Added** – Integrations can read and write CLI user settings  
- **Added** – View LSP server logs via `/lsp logs` and the `read_agent` interface  
- **Added** – Prompts to install `gh` CLI are shown automatically when missing in GitHub repos  
- **Added** – Support for GitHub attachment variants in prompt rendering  

The release hints at a future where richer agent attachments, better LSP observability, and plugin parity are first‑class.

---

## 3. Hot Issues (10 of 28)

All issues below were updated in the last 24 hours and represent the most pressing, controversial, or widely-discussed topics.

### 1. `[Critical] Session keep running indefinitely` – #2364  
**Why it matters:** Copilot Coding Agent sessions in org repositories become stuck permanently; users can’t stop them or send replies.  
**Impact:** Blocks adoption in enterprise workflows; lingering sessions waste seats and quota.  
**Community:** Author explicitly notes they had to file here because no other channel exists — plus reproducible complaints.  
 [Issue #2364](https://github.com/github/copilot-cli/issues/2364)

### 2. `Ability to remove orphaned sessions` – #3600  
**Related pain:** Sessions can survive for ~2 months and cannot be deleted through the UI.  
**Why it matters:** Storage bloat, stale quota usage, and confusion about which sessions are active.  
🔗 [Issue #3600](https://github.com/github/copilot-cli/issues/3600)

### 3. `Enterprise/server-managed settings (incl. env)` – #3909  
**Why it matters:** Org admins cannot centrally push configuration — especially environment variables — to CLI installs. The only existing org-managed mechanism covers Codespaces secrets, not the local CLI.  
**Trend signal:** Indicates strong enterprise uptake and the need for an admin console equivalent for CLI config.  
🔗 [Issue #3909](https://github.com/github/copilot-cli/issues/3909)

### 4. `Web fetch: TypeError: fetch failed` – #3948  
**Why it matters:** `web_fetch` tool calls fail universally, regardless of proxy or model access.  
**Impact:** Breaks any agent workflow that depends on fetching URLs — including documentation lookups and custom retrieval plugins.  
🔗 [Issue #3948](https://github.com/github/copilot-cli/issues/3948)

### 5. `Window jump-scroll regression (in Bash)` – a widely-upvoted adjacent discussion  
**Why it matters:** Regression in v1.0.66 where mouse‑wheel / scrollbar interactions cause unintended cursor movement in Bash‑based terminals instead of scrolling output.  
**Impact:** Severely degrades usability on Linux/macOS workstations that default to Bash.  
🔗 [Issue #3964](https://github.com/github/copilot-cli/issues/3964)

### 6. `Windows: .bat MCP server regressions link to #3958` – adjacent context  
**Why it matters:** v1.0.66 broke stdio MCP servers on Windows when command is `.bat`/`.cmd` (regression from v1.0.65).  
**Impact:** Affects many MCP tool chains commonly installed via batch wrappers.  
 [Issue #3958](https://github.com/github/copilot-cli/issues/3958)

### 7. `Bash tab/arrow regressions link to #1799` – adjacent context  
**Why it matters:** Echo disruptions, blurry typing, and cursor misbehavior in Bash terminals across sessions.  
**Impact:** Reduces trust in the terminal’s rendering fidelity for long prompts and multiline editing.  
🔗 [Issue #1799](https://github.com/github/copilot-cli/issues/1799)

### 8. `GUI bug: modal dialogs off-screen or inaccessible` – #3959  
**Why it matters:** UI rendering failures block core workflows, especially on first run.  
**Community:** Users post screen recordings showing zero functional buttons and navigation issues.  
**Impact:** First‑time UX regression that hurts new user activation.  
🔗 [Issue #3959](https://github.com/github/copilot-cli/issues/3959)

### 9. `Feature: user-defined tags for sessions` – #3970  
**Why it matters:** Users juggling multiple repos and workstreams cannot categorize or search sessions.  
**Trend:** Part of a larger feature request cluster around session discoverability (#3963, #3969, #3971).  
🔗 [Issue #3970](https://github.com/github/copilot-cli/issues/3970)

### 10. `MCP OAuth re-auth failure on Windows port exclusion` – #3973  
**Why it matters:** HTTP MCP servers using OAuth get stuck in a loopback redirect bind failure on Windows.  
**Impact:** Affects enterprise- and security‑minded users integrating identity‑protected tool servers.  
🔗 [Issue #3973](https://github.com/github/copilot-cli/issues/3973)

---

## 4. Key PR Progress

No pull requests were updated in the last 24 hours. The repository’s recent activity is concentrated on hotfixes and user-facing regressions rather than new feature merges. The v1.0.66-2 patch suggests fixes are being delivered via preview release tags; corresponding PRs may land shortly.

---

## 5. Feature Request Trends

From the current issue set, five dominant feature themes emerge:

1. **Enterprise & org-managed configuration**  
   - Centrally pushed env/settings (#3909), as well as attendance in plugin conflict handling (#3893). Companies want a cloud‑side source of truth for Copilot CLI policy — mirroring VS Code/Copilot IDE controls.

2. **Session lifecycle & storage**  
   - Session expiration visibility (#3963), session cleanup/orphan removal (#3960, #3971), and user‑defined tags (#3970). Users increasingly treat sessions as long‑lived projects and need proper CRUD semantics.

3. **Enhanced prompt affordances**  
   - Like attachment variants already shipped in v1.0.66‑2, users demand inline file references, richer paste semantics (#3936), and the ability to disable alt‑screen (#1799) for predictable terminal behavior.

4. **Terminal rendering & portability**  
   - Repeated requests around TUI behavior: arbitrary alt‑screen toggling (#1799), reliable history timestamps (#2376), and first‑session rendering (#3959). Also Windows symlink support (#2286) and per‑platform stability.

5. **MCP & multi‑plugin composability**  
   - Support for duplicate skill names across plugins (now in v1.0.66‑2), MCP‑specific diagnostics, and OAuth flows that respect OS port reservations (#3973). The community expects plug‑and‑play MCP without platform‑specific surprises.

---

## 6. Developer Pain Points

Summarizing the most‑frequently raised frustrations and recurring requests:

- **Stuck or zombie sessions** – No good way to stop orphaned sessions (#2364, #3600), leading to quota waste and confusion.  
- **Terminal regressions** – Window jump‑scroll in Bash shells; widespread tab‑completion and cursor movement failures after recent updates.  
- **Missing enterprise controls** – No org‑side config push, no managed env, no centralized policy for users running the CLI locally (#3909).  
- **MCP reliability on Windows** – Broken `.bat`/`.cmd` stdio servers (#3958), OAuth loopback port failures (#3973), and install‑time symlink issues (#2286).  
- **UI rendering bugs** – Disabled buttons on first launch, session list timestamp confusion (#2376), and incomplete redraw on delete operations (#3959).  
- **Web tooling failures** – `web_fetch` unusable for all users in some environments (#3948).  
- **Session organization** – No tags, no search, anemic file‑tree access for repo‑backed sessions (#3963, #3969, #3970, #3971).  
- **Quota & billing transparency** – Surprise charges during free trial (#2619), unclear quota‑reset behavior (#2340).  
- **Past‑copy UX** – Pasted token collapses break parity with competitors like Claude Code (#3936).  
- **Lack of escape hatches** – Users can’t disable alt‑screen (#1799) or easily toggle TUI features.

---

**Subscribe** to [github.com/github/copilot-cli](https://github.com/github/copilot-cli) for daily updates on releases, regressions, and roadmap signals.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-06-30

---

## 1. Today's Highlights

It was a quiet day on the MoonshotAI/kimi-cli repo overnight — no new releases and no new PRs in the last 24 hours. One freshly opened enhancement issue about mobile and desktop input UX gained attention, highlighting friction in the Enter/Return key behavior on handheld devices. The project remains in maintenance mode between broader development cycles.

---

## 2. Releases

No new releases in the past 24 hours.

---

## 3. Hot Issues

Only one issue was activity-worthy in the last day:

1. **#2479 — Bad usage of Return/Enter on desktop & mobile**  
   *Opened 2026-06-29 by Dealazer* [.github.com/MoonshotAI/kimi-cli/issues/2479](https://github.com/MoonshotAI/kimi-cli/issues/2479)  
   The reporter asks that the Enter key compose a newline (requiring a separate Send/Meta-Enter to submit), rather than the current arrangement where plain Enter sends the prompt. This is a recurring UX complaint for any CLI chat wrapper and directly affects mobile usability where long-form composition is painful.

---

## 4. Key PR Progress

No pull requests were opened or updated in the last 24 hours.

---

## 5. Feature Request Trends

The lone open item filed today nudges the project toward richer input-handling ergonomics:

- **Alternative send/compose semantics for Enter vs. newlines** – frequently requested across CLI assistants; a toggle (e.g. "multiline mode") is a natural feature-surface expansion.
- **Mobile-first input ergonomics** – on-screen keyboards don't expose Shift cleanly, so send-on-Enter can trap users in prompt pipelines.

---

## 6. Developer Pain Points

- **Enter vs. newline on mobile** – small-screen users currently can't compose multi-step prompts without awkward workarounds.
- **Discoverability of send shortcuts** – desktop users unaware of `Shift+Enter` (or unsure which terminal forwards it) encounter silent failures or premature sends.

*MoonshotAI/kimi-cli* continues to be a lightweight wrapper; most feature pressure centers on prompt-input ergonomics and low-friction configuration, rather than upstream model capabilities.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-06-30

---

## 1. Today's Highlights

No new releases landed in the last 24 hours, but the V2 branch is seeing intense activity: the TUI migration to `@opencode-ai/client` is underway, MCP OAuth token-refresh races are being tracked as a known concurrency gap, and a wave of GLM-5.x prompt-cache instability reports is putting the OpenCode Go gateway under scrutiny. On the contributor side, a large batch of automated cleanup PRs (Wayland paste, keyboard nav, CLI help formatting) finally merged, and several core MCP PRs (prompts, logging, stdio cleanup) are moving fast.

---

## 2. Releases

None in the last 24 hours.

---

## 3. Hot Issues

| # | Issue | Why it matters | Community reaction |
|---|-------|----------------|--------------------|
| 1 | **#30680** — Auto-compaction loop & response stoppage ([link](https://github.com/anomalyco/opencode/issues/30680)) | A hard failure mode where OpenCode burns tokens in a compaction loop and then stops responding entirely, even in a fresh folder. | 10 comments, no 👍 — likely under-investigated; severity is high. |
| 2 | **#22132** — Hang with local Ollama provider ([link](https://github.com/anomalyco/opencode/issues/22132)) | OpenCode 1.4.3 hangs on simple prompts via `@ai-sdk/openai-compatible` while raw `/v1/chat/completions` works — points to a provider-integration bug. | 10 comments, 5 👍; long-lived (since April) and still open. |
| 3 | **#33998** — GLM-5.2 prompt

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-06-30

## 1. Today's Highlights

This week's activity centers on **streaming reliability and provider error surfacing**: multiple long-standing bugs around forced scroll-to-bottom during streaming, dropped provider HTTP error bodies, and mid-stream retryable failures all closed. Meanwhile, the community is pushing for **provider diversity** (Xiaomi MiMo, Scaleway, Bedrock bearer-token auth) and better **multi-language support** in compaction summaries.

## 2. Releases
None in the last 24h. The latest tagged release remains at the 0.80.x line; several closed issues (Cloudflare 404 regression, base64 corruption on Kimi) suggest a patch release may be imminent.

## 3. Hot Issues (Top 10)

| # | Issue | Why It Matters |
|---|-------|----------------|
| 1 | [#5825](https://github.com/badlogic/pi-mono/issues/5825) — Streaming markdown forces scroll to bottom | 42 comments, the most active issue of the week. User-initiated scroll-up is overridden by auto-scroll when `clear on shrink` is enabled, ruining the reading experience during long responses. Closed with a fix PR. |
| 2 | [#4877](https://github.com/badlogic/pi-mono/issues/4877) — Session folder collision | Path sanitization loses separators, so `/a/b/c/d` and `/a-b/c-d` map to the same hash folder. Low severity but a correctness foot-gun for users with similarly-named directories. Closed. |
| 3 | [#6083](https://github.com/badlogic/pi-mono/issues/6083) — LLM cache not working with z.ai GLM coding plan | 👍 9. Multi-step tool calls burn 10–20% of the context window because cache breakpoints are ignored by GLM. A concrete ceiling on long agent sessions. Closed. |
| 4 | [#5871](https://github.com/badlogic/pi-mono/issues/5871) — Anthropic OAuth-token detection hardcoded to `sk-ant-oat` | Open, in-progress. Claude-Code scoped keys (`sk-ant-api03-…`) aren't recognized as OAuth, forcing manual workarounds. |
| 5 | [#6019](https://github.com/badlogic/pi-mono/issues/6019) — OpenAI Responses mid-stream retryable error not retried | Pi finalizes with `stopReason: "error"` even when the provider explicitly says "retryable." Costs users a session turn. Closed. |
| 6 | [#5763](https://github.com/badlogic/pi-mono/issues/5763) — Providers swallow HTTP error body | Gateway/proxy 403s surface differently per provider (Bedrock `UnknownError`, OpenAI `403 no body`), making auth debugging nearly impossible. Fixed by PR #5832 (merged). |
| 7 | [#6157](https://github.com/badlogic/pi-mono/issues/6157) — Compaction summary should be in session's language | Non-English users get English `## Goal` / `## Progress` headers in their context. Open; small fix, high UX impact. |
| 8 | [#6124](https://github.com/badlogic/pi-mono/issues/6124) — Devanagari breaks the TUI harness | Complex scripts that require Unicode-width handling crash or corrupt the UI. Open; internationalization gap. |
| 9 | [#6133](https://github.com/badlogic/pi-mono/issues/6133) — Uncaught `ECONNRESET` crashes Pi during streaming | Upstream TCP reset mid-SSE should be retried, not crash the whole process. Open; reliability issue for any flaky network. |
| 10 | [#6138](https://github.com/badlogic/pi-mono/issues/6138) — Incorrect Xiaomi MiMo pricing | Hardcoded cost table mismatches mimo.mi.com official rates. Open; affects cost visibility for budget-conscious developers. |

## 4. Key PR Progress (Top 7 available)

| PR | Status | Description |
|----|--------|-------------|
| [#6170](https://github.com/badlogic/pi-mono/pull/6170) | Merged | **Stop replaying historical inline images** — past tool results now render as lightweight `[Image: …]` labels instead of re-emitting terminal image escape sequences, reducing context bloat. |
| [#6169](https://github.com/badlogic/pi-mono/pull/6169) | Open (draft) | **Disable padding for assistant messages** — closes long-standing padding zero-request #6168; visual density improvement. |
| [#6051](https://github.com/badlogic/pi-mono/pull/6051) | Merged | **Recover from hung Bedrock/Anthropic streams** — adds configurable `streamIdleTimeoutMs` (240 s default) and `connectTimeoutMs`; retries "unmodeled" Bedrock errors that were previously fatal. |
| [#5832](https://github.com/badlogic/pi-mono/pull/5832) | Merged | **Surface provider HTTP error bodies** — parsing-failure fallback now keeps the raw body so users can see the real gateway/proxy message. Fixes #5763. |
| [#6026](https://github.com/badlogic/pi-mono/pull/6026) | Merged | **Stabilize TUI working-status row** — addressed jitter in the status row that accompanied the scroll-to-bottom fix. |
| [#6161](https://github.com/badlogic/pi-mono/pull/6161) | Merged | **Map Bedrock `apiKey` → `AWS_BEARER_TOKEN_BEDROCK` env** — enables AWS bearer-token workflow without leaking the key in two option fields. |
| [#6156](https://github.com/badlogic/pi-mono/pull/6161) | Merged | **Return `''` for empty tool results** — fixes the `(see attached image)` ghost label on successful edits/updates that returned no text and no image. Fixes #6103. |

## 5. Feature Request Trends

1. **Provider expansion** — Requests for Xiaomi MiMo (#6138), Scaleway Generative APIs (#6165), and better Bedrock/Azure auth flows indicate developers want Pi to be cloud-agnostic across the EU and emerging model providers.
2. **Enterprise/admin settings** — A machine-level config source (`/etc`, `/Library`, `%ProgramData%`) to override user and project settings was requested (#6159). Signals growing adoption in org-standardized environments.
3. **Navigating context via extensions** — Exposing `ctx.navigateTree()` on `ExtensionContext` (#5932) points to more sophisticated custom `/goal`-style agents that read session history tree.
4. **Steering-message control** — Letting a steering message opt out of re-waking the agent (#5895, already merged) reflects demand for fine-grained orchestration in multi-agent workflows.
5. **Internationalization for TUI + compaction scripts** — Both Devanagari UI support (#6124) and locale-aware compaction summaries (#6157) are recurring asks as Pi's user base globalizes.

## 6. Developer Pain Points

- **Silent provider errors:** HTTP bodies dropped by SDKs (#5763) and non-retried mid-stream failures (#6019) waste tokens and user time. PR #5832 and #6051 begin addressing this, but more providers need the same treatment.
- **Uncaught stream termination:** `ECONNRESET` and half-open sockets still crash the process (#6133) rather than triggering a retry or graceful degradation.
- **Authentication hard-coding:** Multiple issues (#5871, #6093, #6163) tied to prefix-based key-type detection show that OAuth and scoped-key workflows keep breaking because recognition logic is brittle.
- **Tool-loop lockups:** Repeated identical tool calls without interruption (#6158) reduce trust in autonomous sessions — developers want a circuit-breaker or explicit max-retry per tool.
- **Context-window surprise:** Cache misses on GLM (#6083), oversized thinking blocks surviving compaction (#6166), and stale inline images in history (#6170) all contribute to unpredictable context consumption.
- **Package ecosystem trust:** Back-to-back reports of malicious/abandoned npm packages squatted under the `pi-*` namespace (#6152–#6155) suggest the registry needs a verification or trust signal.

— *Compiled 2026-06-29 | Data via github.com/badlogic/pi-mono*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-06-30

**Data source:** [QwenLM/qwen-code](https://github.com/QwenLM/qwen-code)

---

## 1. Today's Highlights

No new releases in the last 24 hours. Activity was heavily concentrated in bug reports around streaming stability (stalls, timeouts, scroll hijack) and authentication persistence after `/auth`. On the PR side, the biggest themes are **daemon/serve maturity** (channels, HTTPS/TLS, runtime context injection), **UI polish** (mobile sidebar, emoji↔glyph replacement, scroll virtualization default)**, and a surprising amount of infrastructure work on `/subagent`/ACP session recovery and tag sanitization.

---

## 2. Releases

None in the last 24h. There was a release-pipeline failure (nightly `v0.19.3-nightly.20260629.ee375c6a4`) flagged in [Issue #5969](https://github.com/QwenLM/qwen-code/issues/5969); the `integration_docker` job did not pass.

---

## 3. Hot Issues

| # | Issue | Why it matters |
|---|---|---|
| Stream timeout | [#5975](https://github.com/QwenLM/qwen-code/issues/5975) *No stream activity for 120000ms after 19 chunks* | Upgrading to **v0.19.3** introduced intermittent streaming stalls. Affected users see 2-min timeouts that kill productivity. 👍=1, 5 comments — early signal of a regression worth pinning. |
| Scroll hijack on output | [#5941](https://github.com/QwenLM/qwen-code/issues/5941) *Up-scroll during generation jumps to top* | Windows TUI bug — mouse-wheel scroll during long responses snaps the view to the top. Severely disrupts reading. Welcome-PR labelled. |
| Prompt-cache misses vs Claude Code | [#5942](https://github.com/QwenLM/qwen-code/issues/5942) *Anthropic-provider cache misses inflate cost* | Competitive cost story: on an Anthropic-protocol endpoint Claude Code stays ~100% per-turn cache hit, Qwen Code does not. Dual root cause (side-query prefix + moving last-message breakpoint). |
| Auto Plan mode in YOLO | [#5970](https://github.com/QwenLM/qwen-code/issues/5970) *YOLO auto-switch to Plan mode is back* | Users relying on `-y` (YOLO) to bypass permission prompts are being downgraded to Plan mode — regression in workflow expectations. |
| GLM-5.2 thinks out loud | [#6007](https://github.com/QwenLM/qwen-code/issues/6007) *GLM-5.2 leaks thinking text as normal output* | Provider-specific provider/compat issue: raw `<think>` tags exposed to the user when default `max_tokens=131072`. |
| MCP install crash | [#6004](https://github.com/QwenLM/qwen-code/issues/6004) *MCP install crashes (heap OOM 4 GB)* | Direct process crash during MCP install via GC pressure — under-investigated but serious MCP-heavy workflows. |
| Hidden file names in read | [#6014](https://github.com/QwenLM/qwen-code/issues/6014) *New version no longer shows file names after read_file* — regression from UI change that now collapses "read 1 file" without the path. Frequent user annoyance. |
| Daemon memory missing on cold start | [#5968](https://github.com/QwenLM/qwen-code/issues/5968) *Server-mode memory stays empty after first turn* | In `qwen serve` the memory system doesn't persist/auto-store like the interactive TUI, breaking cross-turn continuity in daemon deployments. |
| `/auth` not persisted for new sessions | [#5979](https://github.com/QwenLM/qwen-code/issues/5979) *Changes via /auth don't apply to new sessions (401 error)* | `/auth` modifies current session, but **new sessions still use old env state** — root-cause is env-var priority in `packages/cli/src/config/environment.ts`. Welcomed fix in progress (see PR #5980). |
| Daemon TUI furiously re-scrolling | [#5971](https://github.com/QwenLM/qwen-code/issues/5971) *TUI re-scrolling to top every new output chunk in Linux* | Scroll-stability regression on Anolis Linux; effectively unusable for long sessions on that OS. |

---

## 4. Key PR Progress

| # | PR | Summary |
|---|---|---|
| Mobile sidebar | [#6003](https://github.com/QwenLM/qwen-code/pull/6003) *Web-shell mobile sidebar drawer* | Replaces `display:none` with a slide-in drawer at ≤760px; hamburger toggle + existing sidebar overlay. |
| TUI glyph cleanup | [#5999](https://github.com/QwenLM/qwen-code/pull/5999) *Replace all emoji with Unicode text symbols in TUI* | Completes the emoji→glyph rollout (follow-up to #5787/#5788). Fixes width-2 emoji column drift in terminals. |
| ACP read-file root handling | [#6021](https://github.com/QwenLM/qwen-code/pull/6021) *Handle ACP read_file local roots* | Workaround for ACP-backed reads failing silently on skill instructions / temp outputs / subagent transcripts that don't live under serve-time workspace root. |
| Auto `/loop` mode | [#5991](https://github.com/QwenLM/qwen-code/pull/5991) *Autonomous mode for bare /loop* | Bare `/loop` (no prompt, no interval) now arms a self-paced autonomous loop reading from `LoopWakeup` with a `prompt: <<autonomous-loop-dynamic>>` sentinel; interval-only variant also supported. |
| `/auth` persistence fix | [#5980](https://github.com/QwenLM/qwen-code/pull/5980) *Prioritize auth-modified env vars over system* | Addresses [#5797] 401-on-new-session bug: moves auth-session-write to take precedence over stale process env. |
| Daemon TLS/HTTPS | [#6001](https://github.com/QwenLM/qwen-code/pull/6001) *Serve TLS via --tls-cert/--tls-key* | Enables mobile-voice-input (getUserMedia requires a secure context) when accessing `qwen serve` over a LAN IP. |
| Runtime context injection | [#5847](https://github.com/QwenLM/qwen-code/pull/5847) *Per-turn system-reminders via RuntimeContext* | Adds a per-session mutable KV store that daemon/SDK clients can seed; entries are injected as `<system-reminder>` on every turn. |
| Subagent tag sanitization | [#6027](https://github.com/QwenLM/qwen-code/pull/6027) *Sanitize `<analysis>`/`<summary>` tags from subagent results* | Feeds only the post-`</summary>` model-visible text back to the parent. Closes leak vector behind #6023. |
| ACP resumable session stream | [#5852](https://github.com/QwenLM/qwen-code/pull/5852) *Resumable /acp session stream (Last-Event-ID)* | Wires existing event-replay engine so SSE reconnects resume from last bus id. Also exports SDK transports. |
| Compression threshold fix | [#5957](https://github.com/QwenLM/qwen-code/pull/5957) *Subtract reserved output tokens from ctx window* | Prevents 400 errors when `max_tokens=65536` by correctly shrinking the auto-compression threshold. |

---

## 5. Feature Request Trends

1. **Daemon & channel polish is top-of-mind** — hot-reloadable workers (`[#6010](https://github.com/QwenLM/qwen-code/issues/6010)`, `[#5976](https://github.com/QwenLM/qwen-code/issues/5976)`), per-channel `qwen serve --channel`, and expanded DingTalk/Feishu/WeChat/QQ bot surface.
2. **Session & config portability** — project-local todos directory (`[#5928](https://github.com/QwenLM/qwen-code/pull/5928)` PR live), hot-reload for skills/extension/MCP (`[#3696](https://github.com/QwenLM/qwen-code/issues/3696)`), configurable compaction model (`[#5956](https://github.com/QwenLM/qwen-code/issues/5956)`).
3. **Mobile-first web shell** — mobile sidebar (`[#6000](https://github.com/QwenLM/qwen-code/issues/6000)`), TLS (`[#6001](https://github.com/QwenLM/qwen-code/pull/6001)`), better responsive UX.
4. **Inline model switching** — command-level `/model <id> <prompt>` single-step override (`[#5967](https://github.com/QwenLM/qwen-code/issues/5967)`).
5. **Autonomy affordances** — bare `/loop` autonomous mode (`[#5990](https://github.com/QwenLM/qwen-code/issues/5990)`), steward preamble for unattended agent sessions.
6. **Testability & debugging** — `--safe-mode` flag to disable all customisations (`[#4883](https://github.com/QwenLM/qwen-code/issues/4883)`, already CLOSED but indicative of broader interest).

---

## 6. Developer Pain Points

- **Streaming reliability back-and-forth** — v0.19.3 regressions on both timeout (`#5975`) and idle stall behaviour. Community wants the "Thought for …" thinking phase to **produce output or die** cleanly, not hang until the API kills it.
- **Auth/session leakage across runs** — `/auth` and serve-mode env vars don't persist (`#5797`, `#5968`). Daemon deployments feel brittle: memory and credentials reset unexpectedly.
- **TUI scroll & rendering** — four scroll-related issues (`#5941` jump-to-top, `#5971` re-scroll spam, `#6024` line-number-on-copy, `#6014` missing file names) suggest the interactive terminal is over-due for a rendering stability pass.
- **Provider parity (cost & compatibility)** — prompt-cache hit-rate against Anthropic (`#5942`) and GLM-5.2 think-tag leakage (`#6007`) both erode confidence for users on non-Qwen models.
- **Opacity of failures** — MCP install crashes (`#6004`), "release failed" CI jobs (`#5969`), and silent `[object Object]` errors from `read_file` (`#6020`) show that error surfacing lags behind feature velocity.

---

*Digest auto-generated at 2026-06-06T00:00Z from GitHub `QwenLM/qwen-code` data.*

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-06-30

## 1. Today's Highlights

The project shipped a massive batch of fixes and features for the **v0.8.66** release, headlined by the **Hotbar** (a new MMO-style quick-action bar), **approval-gated shell by default** for Agent mode, and a sweeping set of **sub-agent fanout concurrency fixes**. The community's most heated discussion remains **input cache hit rate**, with users comparing DeepSeek-TUI unfavorably to DeepSeek-Reasonix (95%+). Multiple benchmark-driven issues target **Codex CLI token-parity** as the explicit optimization goal.

---

## 2. Releases

No new releases in the last 24 hours. The repository is in the **v0.8.66 release candidate** phase, with numerous PRs merged to `main` in preparation for the cut.

---

## 3. Hot Issues

### 🔴 #1177 — Input cache hit rate far below DeepSeek-Reasonix
**24 comments** | [Link](https://github.com/Hmbown/CodeWhale/issues/1177)

The single most-discussed open issue. Users report dramatically lower input-cache命中率 compared to DeepSeek-Reasonix's 95%+, making repeated conversations significantly more expensive. This is a recurring theme — see also #1120 and #1747.

### 🔴 #1120 — Cache hit problems persist across versions
**21 comments** | [Link](https://github.com/Hmbown/CodeWhale/issues/1120)

A long-running investigation into why cache misses remain high even after prior fixes. The issue questions whether the `input_cache_miss` bug fix actually landed in v0.8.17, suggesting possible regression or false-positive reporting.

### 🟡 #743 — Token consumption spike (400M tokens in half a session)
**13 comments** | [Link](https://github.com/Hmbown/CodeWhale/issues/743)

A user reports an eye-watering 400M token burn in a single half-day session. The root cause is suspected to be overly verbose tool-call interaction payloads. This connects directly to the v0.8.56 "Codex-parity" optimization epics (#2953, #2956).

### 🟡 #1186 — Typed persistent permission rules for exec policy
**10 comments** | [Link](https://github.com/Hmbown/CodeWhale/issues/1186)

Proposes structured, durable allow/deny/ask rules scoped by tool name, command prefix, and path pattern. Would replace ad-hoc approval flows with a declarative config layer — a significant UX improvement for power users.

### 🟡 #2300 — Multi-model compatibility & Fleet loadout auto-selection
**7 comments** | [Link](https://github.com/Hmbown/CodeWhale/issues/2300)

Tracks improved docs and UX for `provider = vllm` vs `provider = openai` routing, plus automatic Fleet model selection. Important for the growing local-model and multi-provider user base.

### 🟡 #1641 — Agent mode: fallback strategy when tool calls fail
**3 comments** | [Link](https://github.com/Hmbown/CodeWhale/issues/1641)

Agent currently retries the same failing tool call (e.g., web search blocked by anti-bot) until the entire task fails. Requests automatic degradation to alternative tools or strategies.

### 🟡 #1425 — Session freeze on large text-processing tasks (100M+ chars)
**1 comment** | [Link](https://github.com/Hmbown/CodeWhale/issues/1425)

Processing a 300万字 novel by spawning 10 sub-agents caused `agent_wait` timeouts and session hangs. Highlights scalability limits of the current sub-agent orchestration.

### 🟡 #2024 — Agent routing: delegate to scouts/RLM for broad discovery
**1 comment** | [Link](https://github.com/Hmbown/CodeWhale/issues/2024)

Long-running sessions stay in the parent thread even when work is clearly parallelizable. Proposes automatic delegation to scout sub-agents or RLM for discovery/inspection tasks.

### 🟡 #2117 — Multi-skills / group skills manager
**1 comment** | [Link](https://github.com/Hmbown/CodeWhale/issues/2117)

Currently skills must be loaded individually. Requests the ability to group and batch-load skills — useful for project onboarding.

### 🟡 #2061 / #3807 — Hotbar: hidden by default until opt-in
**3 + 1 comments** | [Links](https://github.com/Hmbown/CodeWhale/issues/2061) · [Link](https://github.com/Hmbown/CodeWhale/issues/3807)

Product decision: the new Hotbar feature should not appear on fresh installs. Users must explicitly enable it via `/hotbar on` or config. Keeps v0.8.66 focused on reliability.

---

## 4. Key PR Progress

### ✅ #3756 — Default interactive Agent shell to approval-gated on
**Merged** | [Link](https://github.com/Hmbown/CodeWhale/pull/3756)

Shell tools are now exposed by default in interactive Agent-mode sessions, with approval gates protecting execution. Explicit `allow_shell=false` is still respected. This is a major UX shift — users no longer need to manually opt-in to shell access.

### ✅ #3795 — Mode is now authoritative for approval prompts
**Merged** | [Link](https://github.com/Hmbown/CodeWhale/pull/3795)

Previously, the `auto_review` safety floor could override YOLO mode and still fire approval prompts for publish-like actions. Now the selected mode is the single source of truth: YOLO = zero prompts.

### ✅ #3797 — YOLO mode: drop publish prompt carve-out
**Merged** | [Link](https://github.com/Hmbown/CodeWhale/pull/3797)

Companion to #3795. Specifically eliminates the `git push` and publish-action approval prompts that leaked through in YOLO.

### ✅ #3788 — Hotbar: introduced, configurable, easy to disable
**Merged** | [Link](https://github.com/Hmbown/CodeWhale/pull/3788)

Completes the Hotbar story for v0.8.66: panel shows `⌥+1-8` / `alt+1-8` modifier hints, slot hover-tips, and a once-only Fleet+Hotbar launch nudge.

### ✅ #3773 — Honest session-scoped approval labeling
**Merged** | [Link](https://github.com/Hmbown/CodeWhale/pull/3773)

The "Approve always for this kind" option now correctly reads as session-scoped, not permanent. Fixes misleading UX that implied cross-session persistence.

### 🔴 #3812 — Allow agent starts to join parallel dispatch batches
**Open** | [Link](https://github.com/Hmbown/CodeWhale/pull/3812)

Fixes serialization of `agent` tool calls in high-fanout scenarios (e.g., 20 concurrent launches). The `agent` tool spec didn't override `supports_parallel()`, defaulting to `false`.

### 🔴 #3813 — Non-blocking send for ListSubAgents refresh events
**Open** | [Link](https://github.com/Hmbown/CodeWhale/pull/3813)

High sub-agent fanout creates status storms on bounded channels (32 op / 256 event). Switches from `.send().await` to non-blocking sends to prevent engine/TUI stalls.

### 🔴 #3809 — Render sub-agent sidebar from read-only snapshot
**Open** | [Link](https://github.com/Hmbown/CodeWhale/pull/3809)

Eliminates write-lock contention on `SubAgentManager` during UI refresh, which was causing sidebar contention with completion updates and JSON persistence.

### 🔴 #3808 — try_lock shell manager in async UI refresh paths
**Open** | [Link](https://github.com/Hmbown/CodeWhale/pull/3808)

Replaces blocking `std::sync::Mutex::lock()` with `try_lock()` in render-only paths, preventing UI stalls when the shell manager lock is contended.

---

## 5. Feature Request Trends

| Trend | Representative Issues | Direction |
|---|---|---|
| **Codex CLI token parity** | #2953, #2956, #2957, #2954 | Aggressively reduce input/output tokens to match Codex CLI — slimmer base prompts, reduced repeated transcripts, shell-only benchmark mode, output discipline |
| **Hotbar & quick-action UX** | #2061, #3389, #3731, #3807, #3397 | 8-slot action bar with MMO-style ergonomics; hidden by default; progressive rollout across v0.8.66–v0.8.68 |
| **Remote workbench (US/global)** | #1990, #1984, #2964, #2967 | Telegram bridge hardening, DigitalOcean setup guide, CNB/Lighthouse/Feishu unification |
| **Multi-model & provider routing** | #2300, #2026 | Better docs for vllm vs openai providers, auto Fleet loadout selection, whale-size model tier naming |
| **Agent delegation & routing** | #2024, #1641, #1425 | Auto-detect delegable work for scouts/RLM, fallback strategies for failing tools, large-task scalability |
| **Permission & policy expressiveness** | #1186, #3789 | Typed persistent rules (tool/path/decision), safety policy in `/status` |
| **Skills management** | #2117 | Group/batch skill loading for project onboarding |

---

## 6. Developer Pain Points

1. **Cache hit rate is the #1 complaint.** Issues #1177, #1120, #1747, and #1732 all report the same symptom: input cache misses are far too frequent, making the tool significantly more expensive than alternatives (DeepSeek-Reasonix). This has been open since May with no resolution.

2. **Token consumption opacity.** Multiple users (#743, #1818) report shock at token usage without clear visibility into *why* so many tokens are burned. The v0.8.56 Codex-parity epic is the architectural response, but it's still in progress.

3. **Sub-agent scalability.** Issue #1425 (10 sub-agents → session hang) and the entire #3800 PR family (#3808–#3813) reveal that high-fanout agent dispatch is fragile — bounded channels stall, write locks contend, and the UI freezes.

4. **Approval UX confusion.** #3766, #3790, #3795, and #3797 all cluster around the same pain: the mode system and the approval system were not consistent, with YOLO still prompting and "session" approvals labeled as "always." Being actively fixed.

5. **Documentation drift.** Issues #2300, #3787, and PRs #3775/#3776/#3777 all highlight that docs, install snippets, and generated facts drift from the actual codebase. CI guards exist but have been bypassed or misordered.

---

*Generated from GitHub data for Hmbown/CodeWhale on 2026-06-30. All links point to the upstream repository.*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/DenisZheng/agents-radar).*