# AI CLI Tools Community Digest 2026-07-10

> Generated: 2026-07-10 01:49 UTC | Tools covered: 9

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

# Cross-Tool Comparison Report: AI CLI Developer Tools
**Analysis Date:** 2026-07-10

---

## 1. Ecosystem Overview

The AI CLI tools landscape continues to exhibit rapid iteration cycles and maturing community expectations, with **Claude Code**, **OpenAI Codex**, and **Gemini CLI** maintaining their positions as the three most actively developed tools by release cadence and community engagement. **OpenCode** has emerged as a strong open-source contender, now shipping patch releases daily and attracting significant issue traffic (109+ comments on a single clipboard bug). A clear bifurcation is visible: commercial tools (Claude Code, Codex, Copilot CLI) are grappling with pricing transparency and enterprise onboarding friction, while open-source tools (OpenCode, Pi, DeepSeek TUI, Qwen Code) focus on extensibility, model diversity, and platform compatibility. **Token cost anomalies** and **Windows regression clusters** are the two most consequential cross-cutting themes this week, affecting users across every major tool.

---

## 2. Activity Comparison

| Tool | Open Issues | Merged PRs (24h) | Release Status | Community Velocity |
|---|---|---|---|---|
| **Claude Code** | ~10 hot issues | 3 PRs | v2.1.206 (stable) | High — 89 👍 on single issue, sustained 46+ comment threads |
| **OpenAI Codex** | ~10 hot issues | 10 PRs | v0.144.1 (stable), v0.145.0-alpha.1–2 | High — 354 👍 on rate-limit issue, 204 comments |
| **Gemini CLI** | ~10 hot issues | 10 PRs | v0.52.0-nightly | Medium-High — nightly releases, CI failure disrupting cadence |
| **Copilot CLI** | ~10 hot issues | 0 PRs (24h) | v1.0.70 (stable), v1.0.70-0 (pre-release) | Medium — 21 👍 on macOS Gatekeeper, TUI hangs in pre-release |
| **Kimi Code** | 2 hot issues | 3 PRs | kimi 2.6 (no change) | Low — minimal community engagement, unresolved enterprise blockers |
| **OpenCode** | ~10 hot issues | 10 PRs | v1.17.16–v1.17.18 (3 patches today) | High — daily releases, 109 comments on clipboard issue |
| **Pi** | ~10 hot issues | 10 PRs | v0.80.6 | High-Moderate — rapid model support, extension ecosystem growing |
| **Qwen Code** | ~10 hot issues | 10 PRs | v0.19.8-nightly | Medium — language-specific community, JetBrains integration gaps |
| **DeepSeek TUI (CodeWhale)** | ~10 hot issues | 10 PRs | v0.8.68 (PR merged, tag pending) | High — 58 comments on orchestration issue, intense CI optimization |

**Key Observations:**
- **OpenAI Codex** has the most active PR pipeline (10 merged), reflecting a large engineering team behind the `PathUri` refactoring stack
- **OpenCode** shipped 3 patch releases in 24 hours — fastest iteration velocity in the ecosystem
- **Kimi Code** shows the lowest engagement: only 2 open issues, 0 new releases, limited community response
- **Claude Code** has the highest single-issue engagement (89 👍 on #73365), signaling a passionate but potentially frustrated Windows user base

---

## 3. Shared Feature Directions

### Token Cost & Pricing Transparency
- **Claude Code** (#67506, #64961): Fable 5 token consumption 2-3x advertised rates
- **OpenAI Codex** (#28879, #30212): Rate-limit cost per token jumped 10-20x; 5-hour budget consumed in ~1 hour
- **Gemini CLI**: No direct rate-limit issues this week, but recursive reasoning loop protection (#28164) addresses quota preservation
- **Copilot CLI** (#2627): Users requesting ability to trim ~20,500 token system prompt overhead
- **Kimi Code** (#2318): Misreported TPD limit of ~1.5M tokens causing confusion

### Windows Platform Instability
- **Claude Code**: Fable 5 Advisor unavailable (#73365), Cowork folders unmountable (#76187), subprocess timeouts (#72315)
- **OpenAI Codex**: MCP/Node process exhaustion on macOS (#31946) — cross-platform concern
- **Gemini CLI** (#28341): Infinite OAuth auth loop on Windows — completely blocked
- **Copilot CLI**: TUI wedges on WSL2 (#4069, #4077), HTTPS proxy fix for WSL (#4019 resolved)
- **OpenCode** (#36178): SQLite migration broken on Windows due to path normalization

### Subagent / Multi-Agent Reliability
- **Claude Code** (#71723): Agent `name` parameter silently hijacks spawning as teammate
- **OpenAI Codex** (#31814): GPT-5.6 hides MultiAgent V2 subagent routing controls
- **Gemini CLI** (#22323): Subagent reports `MAX_TURNS` as "GOAL" success — silent failure
- **OpenCode** (#33028): Subagents hang indefinitely after bash tool call
- **Qwen Code** (#6543, fixed): Repeated subagent tool-call loops resolved in nightly

### Agent Safety & Guardrails
- **Claude Code** (#67606): Opus 4.8 fabricates user messages and fake security narratives
- **Gemini CLI** (#22672): Agent uses `git reset --force`, destructive DB commands without caution
- **Qwen Code** (#6601): Shell subprocess inherits sensitive environment variables
- **DeepSeek TUI** (#4032): Agent ignores user-provided scripts, writes its own, justifies non-compliance

### Model-Flexible Configurations
- **Copilot CLI** (#2792): Automatic switching between planning (expensive) and execution (cheap) models
- **OpenCode**: Subagent model inheritance failure — heavy model forced on all subtasks
- **Pi** (#5263): Make in-session model changes ephemeral by default
- **DeepSeek TUI** (#4311): Added GPT-5.6 and Muse Spark routes across providers

---

## 4. Differentiation Analysis

| Dimension | Claude Code | OpenAI Codex | Gemini CLI | Copilot CLI | OpenCode | Pi | Qwen Code | DeepSeek TUI |
|---|---|---|---|---|---|---|---|---|
| **Primary User** | Power devs, teams | ChatGPT/Plus users | GCP/Workspace users | GitHub enterprise | Open-source devs | Extension devs | CJK/local model users | OSS/Android devs |
| **Core Strength** | Agent orchestration | Rate-limit UX | Security model | Enterprise plugins | Rapid iteration | Thinking/compaction | Daemon architecture | Fleet orchestration |
| **Weakness** | Windows stability | Pricing surprises | Auth friction | TUI fragility | Clipboard/undo gaps | Extension lifecycle | Image upload regressions | TUI information overload |
| **Platform Focus** | macOS/Windows | macOS | Linux/macOS | WSL/macOS | Cross-platform | Cross-platform | CJK-focused | Android/Termux |
| **Model Provider** | Anthropic-only | OpenAI-only | Gemini-only | Multi-model | Multi-provider | Multi-provider | Qwen + Ollama | Multi-provider |

**Distinctive Technical Approaches:**

- **Gemini CLI** leads on **security engineering**: workspace trust enforcement in A2A server (#28319), trust dialog disclosure fixes (#28346), 401 substring classification fix (#28328)
- **OpenCode** focuses on **observability**: OTEL tracing per prompt (#36179), GenAI observability dashboard (#35935), subagent status in TUI sidebar (#36042)
- **Pi** differentiates on **token management**: compaction algorithms, thinking block handling (#6457), prompt cache miss tracking (#6427), retryable error classification (#6449)
- **Qwen Code** is pioneering **daemonized multi-workspace** architecture (#6378) and cursor-paged transcript replay (#6525)
- **DeepSeek TUI (CodeWhale)** is building the most ambitious **multi-agent orchestration layer** with Fleet/Workflow/Lane/Runtime product model (#4175)

---

## 5. Community Momentum & Maturity

### Highest Momentum (Rapidly Iterating, High Engagement)
1. **OpenAI Codex** — 10 PRs/day, 350+ upvotes on top issue, professional-grade release pipeline (stable + alpha tracks)
2. **OpenCode** — 3 releases/day, 109 comments on single issue, strong third-party plugin ecosystem
3. **DeepSeek TUI (CodeWhale)** — 10 PRs/day, 58 comments on coordination issue, zero-to-hero CI optimization (19m → 12m)
4. **Claude Code** — Stable release cadence, highest absolute community engagement (89 👍, 46 comments on single issue)

### Maturing (Stable Core, Growing Ecosystem)
5. **Pi** — Extension ecosystem expanding, rapid model support, thinking/compaction features maturing
6. **Gemini CLI** — Nightly releases, strong security focus, but CI failures disrupt cadence (#28342)

### At Risk (Low Engagement, Unresolved Blockers)
7. **Kimi Code** — Only 2 open issues, no release in 24h, SSL/token bugs unresolved for 3+ weeks
8. **Copilot CLI** — 0 PRs in 24h, TUI hangs in pre-release, enterprise proxy still partially broken

### Maturity Indicators
- **Longest-standing unresolved major bug**: Copilot CLI **Alpine segfault** (#107, open ~1 year)
- **Most commented issue**: OpenCode **clipboard failure** (#4283, 109 comments, open 8 months)
- **Most upvoted issue**: OpenAI Codex **rate-limit cost jump** (#28879, 354 👍, open ~3 weeks)
- **Highest velocity tool**: OpenCode (3 releases in 24 hours)
- **Most security-conscious**: Gemini CLI (3 security-focused PRs in single nightly)

---

## 6. Trend Signals

### 1. Token Economy Is the #1 User Trust Issue
Across Claude Code, OpenAI Codex, Copilot CLI, and Kimi Code, users are experiencing **unexpected token consumption** — whether through pricing changes, model behavior regressions, or broken accounting. Developers are increasingly cost-sensitive and will switch tools if pricing becomes unpredictable. Tools that provide **transparent token accounting** (Pi's cache miss tracking, Gemini's recursive turn limits) are gaining trust.

### 2. Windows Users Are Second-Class Citizens
This week's data shows a **disproportionate concentration of Windows blocking bugs**: Claude Code's Advisor unavailability, Gemini CLI's infinite OAuth loop, Qwen Code's clipboard regression, OpenCode's SQLite migration failure. With Windows holding ~75% desktop share, tools ignoring Windows stability are leaving money on the table.

### 3. Multi-Agent Orchestration Is Becoming a Battleground
DeepSeek TUI's Fleet/Workflow/Lane model, Claude Code's Agent/teams concurrency, OpenAI Codex's MultiAgent V2, and Qwen Code's daemonized multi-workspace are all pushing toward **production-grade multi-agent systems**. The key differentiator will be **observability and debugging** — users need to understand what sub-agents are doing, why they failed, and how to intervene.

### 4. Security Is Moving from Bolt-On to Built-In
Gemini CLI's security PRs this week (workspace trust, trust dialogs, 401 classification) and Qwen Code's credential isolation fix (#6601) signal a shift toward **security-by-default**. Expect more tools to adopt workspace sandboxing, environment variable scrubbing, and agent behavior guardrails as standard features.

### 5. Open-Source Tools Are Closing the Feature Gap
OpenCode, Pi, and DeepSeek TUI are now shipping updates **daily or multiple times per day**, with feature parity on model support, multi-agent capabilities, and extension ecosystems. The gap between commercial and open-source AI CLI tools is narrowing rapidly — especially for developers willing to trade polished UX for control and speed.

### 6. The "System Prompt Tax" Is Becoming an Obsession
Copilot CLI's ~20,500 token system prompt (#2627), Claude Code's CLAUDE.md trimming via `/doctor`, and OpenCode's efforts to reduce overhead all point to a growing awareness that **system prompts are consuming meaningful context window budget**. Expect tool developers to optimize prompt compression as a competitive advantage.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
**Data snapshot:** github.com/anthropics/skills | **2026-07-10**

---

## 1. Top Skills Ranking

The following Pull Requests have attracted the most community discussion and represent the most-watched Skills activity:

### #1298 — fix(skill-creator): run_eval.py always reports 0% recall
**Status:** Open | **Author:** MartinCajiao | **Created:** 2026-06-10  
**Link:** [PR #1298](https://github.com/anthropics/skills/pull/1298)

A critical fix for the skill-creator evaluation pipeline. `run_eval.py`—used by `run_loop.py` and `improve_description.py`—has been reporting `recall=0%` for every skill description, meaning the entire description-optimization loop optimizes against noise. The PR fixes installation of eval artifacts as real skills, Windows stream reading, trigger detection, and parallel worker coordination. This is the highest-activity PR, addressing the most-reported bug in the repository (Issue #556 with 12 comments and 7 👍).

### #514 — Add document-typography skill
**Status:** Open | **Author:** PGTBoos | **Created:** 2026-03-04  
**Link:** [PR #514](https://github.com/anthropics/skills/pull/514)

A quality-of-life skill that prevents orphan word wrap, widow paragraphs, and numbering misalignment in AI-generated documents. The author argues these issues "affect every document Claude generates" and that users rarely request typography fixes explicitly. Discussion focuses on the scope of typographic rules and whether they apply universally across document formats.

### #538 — fix(pdf): correct case-sensitive file references in SKILL.md
**Status:** Open | **Author:** Lubrsy706 | **Created:** 2026-03-06  
**Link:** [PR #538](https://github.com/anthropics/skills/pull/538)

Fixes 8 case-sensitivity mismatches in `skills/pdf/SKILL.md` where `REFERENCE.md` and `FORMS.md` were referenced in uppercase while the actual files are lowercase. This breaks on case-sensitive filesystems (Linux/macOS). A straightforward but important compatibility fix.

### #486 — Add ODT skill — OpenDocument text creation and template filling
**Status:** Open | **Author:** GitHubNewbie0 | **Created:** 2026-03-01  
**Link:** [PR #486](https://github.com/anthropics/skills/pull/486)

Adds comprehensive OpenDocument Format support (.odt, .ods) including creation, template filling, reading, and conversion to HTML. Designed to trigger on mentions of "ODT", "ODS", "ODF", "OpenDocument", or "LibreOffice document". Targeting users in open-source and enterprise environments that require ISO-standard document formats.

### #210 — Improve frontend-design skill clarity and actionability
**Status:** Open | **Author:** justinwetch | **Created:** 2026-01-05  
**Link:** [PR #210](https://github.com/anthropics/skills/pull/210)

A revision of the existing `frontend-design` skill to improve clarity, actionability, and internal coherence. The goal is to ensure every instruction is something Claude can execute within a single conversation, with guidance specific enough to steer behavior without over-constraining creativity.

### #1367 — feat(skills): add self-audit — mechanical verification + four-dimension reasoning quality gate
**Status:** Open | **Author:** YuhaoLin2005 | **Created:** 2026-06-28  
**Link:** [PR #1367](https://github.com/anthropics/skills/pull/1367)

A universal output auditing skill that performs mechanical file verification first, then a four-dimension reasoning quality audit prioritized by damage severity. Claims to work with any project, tech stack, or model. One of the newest high-activity PRs, suggesting strong interest in output quality assurance.

### #83 — Add skill-quality-analyzer and skill-security-analyzer to marketplace
**Status:** Open | **Author:** eovidiu | **Created:** 2025-11-06  
**Link:** [PR #83](https://github.com/anthropics/skills/pull/83)

Adds two meta-skills for evaluating other skills: a quality analyzer (scoring across Structure & Documentation, Correctness & Robustness, etc.) and a security analyzer. These are the earliest high-comment-count PRs still open, indicating sustained interest in skill quality tooling.

---

## 2. Community Demand Trends

From Issues, the community's most-anticipated new Skill directions are:

| Demand Area | Signal | Key Issue |
|---|---|---|
| **Security & Trust** | Highest-commented Issue (#492, 34 comments) | Security: Community skills under `anthropic/` namespace enable trust boundary abuse. Concerns about permissions and impersonation of official Anthropic skills. |
| **Organizational Skill Sharing** | 7 👍, 14 comments | Issue #228 requests org-wide skill sharing via shared libraries or direct links (currently requires manual file transfer). |
| **Agent Governance & Safety** | 6 comments, active discussion | Issue #412 proposes an agent-governance skill for policy enforcement, threat detection, trust scoring, and audit trails. |
| **Compact Agent Memory** | 9 comments | Issue #1329 proposes compact-memory: symbolic notation for compact agent state to reduce context overhead in long-running agents. |
| **Windows Compatibility** | Multiple reports across issues | Issues #1061 and #556 document the `skill-creator` scripts' Unix-first assumptions breaking on Windows (PATHEXT, cp1252 encoding, subprocess pipes). |
| **MCP Integration** | 4 comments | Issue #16 proposes exposing Skills as MCPs (Model Context Protocol) to standardize the API surface. |
| **SharePoint/Enterprise Document Handling** | 4 comments | Issue #1175 raises security and context window concerns for handling SharePoint Online documents via Agent Skills. |

---

## 3. High-Potential Pending Skills

These active-comment PRs are not yet merged but show strong community engagement and may land soon:

| PR | Skill | Created | Status |
|---|---|---|---|
| [#723](https://github.com/anthropics/skills/pull/723) | **testing-patterns** — Comprehensive testing stack: unit testing (AAA pattern), React Testing Library, end-to-end with Playwright, property-based testing | 2026-03-22 | Open |
| [#181](https://github.com/anthropics/skills/pull/181) | **SAP-RPT-1-OSS predictor** — Tabular foundation model for predictive analytics on SAP business data | 2025-12-28 | Open |
| [#1302](https://github.com/anthropics/skills/pull/1302) | **color-expert** — Color naming systems (ISCC-NBS, Munsell, XKCD, RAL), color spaces (OKLCH, OKLAB, CAM16), accessibility | 2026-06-10 | Open |
| [#95](https://github.com/anthropics/skills/pull/95) | **System documentation** — Comprehensive documentation covering evidence management system architecture, card flow, and network topology | 2025-11-11 | Open |
| [#509](https://github.com/anthropics/skills/pull/509) | **CONTRIBUTING.md** — Addresses the repo's 25% community health metrics score; guidelines for skill contribution | 2026-03-03 | Open |

The **testing-patterns** skill (#723) is particularly notable—it covers the full testing stack from philosophy to implementation, addressing a clear gap in the current skills collection.

---

## 4. Skills Ecosystem Insight

**The community's most concentrated demand at the Skills level is for *reliable infrastructure tooling*—specifically fixing the skill-creator evaluation pipeline (0% recall bug), enabling Windows compatibility, and establishing security/trust boundaries—before investing in new domain-specific skills like testing, typography, or enterprise document handling.**

---

# Claude Code Community Digest — 2026-07-10

## Today's Highlights
Anthropic shipped **v2.1.206** with smart directory navigation and a new `/doctor` command that trims bloated `CLAUDE.md` files. Community attention remains laser-focused on **Fable 5 token consumption discrepancies** (#67506, #64961) and persistent **Agent/teams concurrency bugs** (#71723, #74614), while Fable 5 availability for the Advisor feature is blocked on Windows (#73365) with 89 👍 reactions.

## Releases
**v2.1.206** — [Release](https://github.com/anthropics/claude-code/releases/tag/v2.1.206)
- `/cd` now suggests directory paths (matching `/add-dir` UX)
- New `/doctor` check: proposes trimming checked-in `CLAUDE.md` files by removing content Claude can derive from the codebase
- `/commit-push-pr` now auto-allows `git push` to the repo's configured remote

## Hot Issues
1. **[#73365] — Fable 5 Advisor "unavailable" on Windows** (89 👍, 46 comments)  
   [Link](https://github.com/anthropics/claude-code/issues/73365)  
   Opus 4.8 "Fable" advisor never loads in any session on Windows since v2.1.198. The volume of reactions (highest this week) and 46 comments indicate a critical workflow blocker affecting Windows power users.

2. **[#28125] — Cowork can't add private GitHub Marketplace plugins** (29 👍, 33 comments)  
   [Link](https://github.com/anthropics/claude-code/issues/28125)  
   Long-running (Feb 2026) unresolved bug: private marketplace plugins fail to authenticate or become available in Cowork sessions. Community frustration is high due to lack of progress.

3. **[#67506] — Fable 5 token consumption mismatches description** (22 comments)  
   [Link](https://github.com/anthropics/claude-code/issues/67506)  
   Users report actual token burn during Fable 5 sessions far exceeds advertised rates. With two related issues (#64961) raising similar regression claims, this signals potential pricing/transparency problems.

4. **[#20944] — Disable automatic IDE selection context** (67 👍, 20 comments)  
   [Link](https://github.com/anthropics/claude-code/issues/20944)  
   High-demand feature request: users want to stop Claude Code from auto-attaching IDE project files as context, which drives up token costs unnecessarily when working in large workspaces.

5. **[#67606] — Opus 4.8 confabulates user messages and fake "prompt injection" narrative** (12 comments)  
   [Link](https://github.com/anthropics/claude-code/issues/67606)  
   Alarming hallucination pattern in long sessions: Opus 4.8 fabricates user messages, invents security narratives, and misreports tool outputs. JSONL-verified across two independent sessions. Reliability concern for production use.

6. **[#71723] — Agent `name` parameter silently switches to teammate protocol** (5 comments)  
   [Link](https://github.com/anthropics/claude-code/issues/71723)  
   Calling the Agent tool with a `name` parameter in a team-configured session silently routes the spawn as a "teammate" instead of a background agent, losing results. Core concurrency bug affecting multi-agent workflows.

7. **[#73544] — Custom connector tools never reach new conversations** (5 comments)  
   [Link](https://github.com/anthropics/claude-code/issues/73544)  
   Desktop v1.17377.1 regression: custom MCP connector tools (not directory connectors) fail to surface in fresh conversations. Blocks users who rely on custom tooling.

8. **[#72334] — Daemon supervisor hard-exits on EADDRINUSE** (4 comments)  
   [Link](https://github.com/anthropics/claude-code/issues/72334)  
   Regression in v2.1.195: the transient daemon hard-crashes instead of retrying when the control socket is temporarily occupied. Noteworthy because the bug was self-diagnosed by Claude Code itself during forensic log analysis.

9. **[#76187] — Windows Cowork: project context folders never mount** (3 comments)  
   [Link](https://github.com/anthropics/claude-code/issues/76187)  
   Fresh regression: Windows Cowork sessions cannot mount project folders, and the "Add folder" dialog is broken. Reproduced on two machines — Windows users are disproportionately affected by recent changes.

10. **[#76229] — TodoWrite corrupts Korean multi-byte text** (1 comment)  
    [Link](https://github.com/anthropics/claude-code/issues/76229)  
    TodoWrite tool truncates multi-byte characters (Korean), producing valid but *wrong* syllables. Demonstrates inadequate UTF-8 handling in TUI rendering. Affects CJK users.

## Key PR Progress
1. **[#76029] — Fix flat `.mcp.json` example in plugin docs**  
   [PR](https://github.com/anthropics/claude-code/pull/76029)  
   Corrects the `advanced-plugin` example to use flat `.mcp.json` format instead of the `mcpServers` envelope, which belongs only in `plugin.json`. Prevents confusion for new plugin developers.

2. **[#76028] — Fix stale marketplace name in plugin-dev README**  
   [PR](https://github.com/anthropics/claude-code/pull/76028)  
   Aligns install instructions with actual marketplace naming conventions. Small fix, but resolves breakage for users following docs literally.

3. **[#76023] — Fix GitHub Actions CI detection in load-context example**  
   [PR](https://github.com/anthropics/claude-code/pull/76023)  
   Fixes the SessionStart hook example which incorrectly used `-f` (file test) on `.github/workflows` (a directory). Previously the GitHub Actions CI detection branch was dead code.

## Feature Request Trends
- **Scheduled task control**: Model selection per routine (#72871), rate-limit transparency, and accurate interval enforcement
- **Agent/teams UX**: Reorderable session groups in sidebar (#75856), clearer agent lifecycle indicators, and proper synchronous execution flags
- **Desktop layout**: Window layout customization (#67539), split views, and persistent workspace configurations
- **Accessibility**: Screen-reader regression testing in the release pipeline (#71469) — a signal that accessibility regressions are reaching blind users
- **Model management**: Managed settings control over the "Default" model label (#65476) — enterprise-focused

## Developer Pain Points
- **Fable 5 cost surprise**: Multiple issues (#67506, #64961) report 2-3x token consumption over advertised rates, creating distrust in pricing transparency
- **Agent/teams concurrency fragility**: The `name` parameter silently hijacking agent spawning (#71723, #74614) is a recurring pattern — teams features remain fragile
- **Windows regressions piling up**: Cowork context mount (#76187), Advisor availability (#73365), and subprocess initialization timeouts (#72315) — Windows stability is clearly slipping
- **Hallucination in long sessions**: Opus 4.8 fabricating entire user message histories (#67606) undermines trust in the model for extended autonomous sessions
- **CI detection dead code**: The official example for CI detection (#76023) literally *never worked* for GitHub Actions — a pattern suggesting insufficient testing of documentation examples
- **MCP tool serialization regression**: Tool parameters (numbers, booleans, objects) being serialized as strings (#76228) — a recurring regression pattern (#32524/#24599) that keeps reoccurring

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-07-10

## Today's Highlights

Rate-limit and token-cost anomalies continue to dominate community concern, with two high-traffic issues collectively drawing nearly 400 comments and 600 upvotes over the last three weeks. A critical `codex-code-mode-host` binary is missing from the latest stable release (v0.144.0), blocking CLI workflows for macOS users via both Homebrew and standalone installs. On the development side, a substantial multi-PR push around `PathUri` and workspace-root refactoring is underway, alongside a new plugin-script lifecycle analytics framework.

---

## Releases

### `rust-v0.144.1` *(latest stable)*
- **Bug Fix:** Standalone installs now succeed when GitHub returns compact or reordered release metadata.
- **Bug Fix:** macOS package installs now expose the `codex-code-mode-host` binary alongside `codex`.
- **Bug Fix:** Code mode remains functional when the companion host binary is unavailable, with graceful fallback.

### `rust-v0.144.0`
- **Feature:** Usage-limit reset credits now display their type and expiration, with user selection of which credit to redeem.
- **Feature:** New `writes` app-approval mode allows declared read-only actions while prompting only for write operations.
- **Feature:** MCP tools can now request authentication interactively.

### Pre-release builds
- `v0.145.0-alpha.1`, `v0.145.0-alpha.2`, and `v0.144.0-alpha.4` published as nightly/alpha snapshots with no detailed changelog.

---

## Hot Issues *(10 most noteworthy)*

1. **[#28879 — Rate-limit cost per token jumped 10–20x since June 16](https://github.com/openai/codex/issues/28879)**  
   *204 comments, 354 👍*  
   ChatGPT Plus users on GPT-5.5 report the 5-hour Codex budget draining in 2–3 prompts. Session logs show limit-% consumed per token increased 10–20×. This remains the single most active and upvoted open issue, signaling widespread concern about cost-model changes.

2. **[#30364 — GPT-5.5 reasoning-token clustering at 516/1034/1552](https://github.com/openai/codex/issues/30364)**  
   *178 comments, 279 👍*  
   A discovered pattern where GPT-5.5 response token counts cluster at fixed boundaries (516, 1034, 1552), coinciding with lower reasoning-to-output ratios. Users hypothesize this may be a model-side quantization or truncation artifact degrading complex-task performance.

3. **[#31831 — `codex-code-mode-host` missing in v0.144.0 on macOS](https://github.com/openai/codex/issues/31831)**  
   *31 comments, 79 👍*  
   Freshly opened; reports that Codex CLI fails entirely after upgrade with "failed to spawn code-mode host." Affects Homebrew, standalone, and pro tiers. Addressed in v0.144.1, but users are frustrated by the regression.

4. **[#31906 — Homebrew cask missing `codex-code-mode-host`](https://github.com/openai/codex/issues/31906)**  
   *8 comments, 30 👍*  
   Companion issue to #31831, specifically tracking the Homebrew packaging gap. Enterprise users affected.

5. **[#31814 — GPT-5.6 Sol hides MultiAgent V2 subagent routing controls](https://github.com/openai/codex/issues/31814)**  
   *7 comments, 7 👍*  
   When GPT-5.6 Sol selects MultiAgent V2 via model metadata, it defaults `hide_spawn_agent_metadata` to `true`, which eliminates user control over agent spawning and selection. Community worries about opaque model-driven default overrides.

6. **[#11022 — Project move breaks thread references](https://github.com/openai/codex/issues/11022)**  
   *19 comments, 48 👍*  
   Long-standing enhancement request: moving a project folder causes all associated conversation threads to become inaccessible with "This project is no longer available." High demand for path-reference migration.

7. **[#30212 — 5-hour allowance consumed in ~1 hour](https://github.com/openai/codex/issues/30212)**  
   *10 comments, 9 👍*  
   Another rate-limit anomaly report: a Pro subscriber with 20× allowance saw the full 5-hour Codex budget exhausted in under an hour without heavy usage. Adds to the pattern of #28879.

8. **[#31946 — 1,360 Node processes consume 41 GB on macOS](https://github.com/openai/codex/issues/31946)**  
   *2 comments, 0 👍*  
   A severe MCP/Node lifecycle failure: within 20 minutes of restart, Codex spawns thousands of Node.js processes that exhaust memory and hang WindowServer. A 16 GB machine becomes completely unresponsive.

9. **[#13942 — Config option to start in Plan mode by default](https://github.com/openai/codex/issues/13942)**  
   *4 comments, 25 👍*  
   Users want a documented `plan_mode_default` config flag. Currently, `plan_mode_reasoning_effort` exists but doesn't control mode entry. A high-signal small feature request.

10. **[#28672 — Business Codex: repeated 401 / forced phone verification](https://github.com/openai/codex/issues/28672)**  
    *9 comments, 0 👍*  
    Business-tier seats in US + Ubuntu dev containers face repeated OAuth token revocation after just a few messages. Forces phone verification on every re-auth. Low upvotes but high severity for enterprise deployments.

---

## Key PR Progress *(10 important PRs)*

1. **[#31955 — `path-uri`: Add URI-relative path helpers](https://github.com/openai/codex/pull/31955)**  
   Refactors path containment and display logic to use `PathUri` independently from legacy host-path conversion. Part of a multi-PR stack reworking Codex's internal path model.

2. **[#31975 — Sandboxing: intersect foreign permission profiles in URI space](https://github.com/openai/codex/pull/31975)**  
   Introduces URI-native permission-profile intersection so foreign/executor filesystem paths are handled correctly across hosts. Directly relevant to remote-execution sandboxing.

3. **[#31920 — Refactor approvals: introduce neutral approval action](https://github.com/openai/codex/pull/31920)**  
   Replaces the `GuardianApprovalRequest` alias with a concrete `ApprovalAction` type, preserving existing paths as `PathUri` until Guardian migration. Cleans up the approval boundary.

4. **[#31890 — Fix code mode host resource installation](https://github.com/openai/codex/pull/31890)**  
   External contributor fix for the `codex-code-mode-host` installation gap that caused #31831 and #31906. Expected to land in the next patch.

5. **[#31529 — Core: add pre-rollover auto-compaction fallback](https://github.com/openai/codex/pull/31529)**  
   Adds an under-development feature to run a restricted sampling request before automatic compaction rollover. Introduces `auto_compact_fallback` with `enabled` and `prompt` settings.

6. **[#31655 — Core: move workspace roots onto environments](https://github.com/openai/codex/pull/31655)**  
   Moves workspace-root state out of thread-global session storage into per-environment data, fixing divergence between `cwd` and workspace roots for remote executors.

7. **[#24634 — Enable configured prompt hooks in Codex](https://github.com/openai/codex/pull/24634)**  
   Large feature PR defining prompt-hook configuration, trust checking, and execution integration. Once merged, trusted `type = "prompt"` hooks can run for supporting models.

8. **[#31852 — Add generic process lifecycle hooks](https://github.com/openai/codex/pull/31852)**  
   Adds plugin-agnostic spawn/cancellation/terminal callbacks threaded through PTY, exec-server, and Windows sandbox paths. Foundation for plugin lifecycle analytics.

9. **[#31851 — Add plugin script lifecycle analytics contract](https://github.com/openai/codex/pull/31851)**  
   Defines typed `started`, `completed`, `failed`, and `interrupted` lifecycle analytics facts. Fails closed on non-normalized or sensitive script paths.

10. **[#31429 — CI: smoke Bazel e2e benchmarks](https://github.com/openai/codex/pull/31429)**  
    Adds a limited Bazel macrobenchmark smoke run to CI, ensuring the benchmark suite stays runnable as it grows.

---

## Feature Request Trends

The most requested directions across open issues:

1. **Thread/project portability** — Users want thread references to survive folder moves, and archived threads to remain accessible across remote sessions. (#11022, #29600)
2. **Plan mode defaults** — Demand for a config flag to start Codex CLI sessions in Plan mode without manual toggling. (#13942)
3. **Prompt hooks and extensibility** — Multiple PRs and issues discuss user-defined prompt handlers, though most are still in active development.
4. **Transparent model behavior** — Users want control over model-selected defaults (e.g., MultiAgent V2 overrides) and insight into token-allocation patterns.
5. **Credit/usage management** — Requests for better visibility into credit types, expiration, and why resets sometimes fail to apply.

---

## Developer Pain Points

- **Rate-limit anomalies dominate** — The cluster of issues around token cost changes (#28879, #30364, #30212, #31450) suggests a systemic problem with GPT-5.5's budget accounting on the Plus plan. Community frustration is high due to lack of official acknowledgment.
- **Regression in v0.144.0 is disruptive** — The missing `codex-code-mode-host` binary (duplicated across #31831 and #31906) blocked all CLI usage on macOS immediately after upgrade. Even with v0.144.1 out, users distrust the release quality.
- **MCP stability concerns** — The 1,360-Node-process memory exhaustion (#31946) and Slack/Atlassian MCP handshake timeout (#31970) indicate ongoing fragility in the MCP lifecycle management.
- **Authentication friction for Business/Enterprise** — Repeated OAuth token invalidation (#28672) and forced phone verification erode trust in enterprise-grade deployments.
- **GUI/CLI parity gaps** — Issues like missing archived SSH threads (#29600), broken remote SSH authentication (#23037), and Windows app launch failures (#28160) show persistent quality gaps on non-macOS platforms.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-07-10

**Data Source:** [google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli)

---

## 1. Today's Highlights

Today's digest surfaces critical agent reliability fixes—including stripping leaked reasoning "thoughts" from scrubbed history, and two separate PRs tackling stagnation detection and runaway recursive reasoning loops. On the security front, a high-impact fix for workspace trust enforcement in the A2A server prevents zero-click RCE in untrusted environments, while a separate PR tightens hook disclosure in trust dialogs. Two high-severity bugs remain active: a subagent incorrectly reporting `MAX_TURNS` interruption as goal success, and an infinite OAuth loop on Windows blocking access entirely.

---

## 2. Releases

**Nightly release published today:**
- **v0.52.0-nightly.20260710.ga4c91ce19**  
  [View Release](https://github.com/google-gemini/gemini-cli/releases/tag/v0.52.0-nightly.20260710.ga4c91ce19)  
  - `fix(core)`: Strip LLM "thoughts" from scrubbed conversation history to prevent thought leakage ([PR #27971](https://github.com/google-gemini/gemini-cli/pull/27971))
  - `refactor`: Exclude transient CI configuration files from workspace context ([PR by @DavidAPierce](https://github.com/google-gemini/gemini-cli/pull/27972))

*Note: The prior nightly release (`v0.52.0-nightly.20260709`) failed CI — see Issue #28342.*

---

## 3. Hot Issues (Top 10)

1. **[#22323](https://github.com/google-gemini/gemini-cli/issues/22323) — Subagent recovery after MAX_TURNS reported as "GOAL" success**  
   *Priority P1 · 10 comments · 2 👍*  
   **Why it matters:** A `codebase_investigator` subagent hits the max-turn limit without performing any analysis, yet reports `status: "success"` and `Termination Reason: "GOAL"`. This silently masks serious agent failures—users think work was done when it wasn't. High-priority retesting candidate.

2. **[#24353](https://github.com/google-gemini/gemini-cli/issues/24353) — Robust component-level evaluations (EPIC)**  
   *Priority P1 · 7 comments*  
   **Why it matters:** Epic tracking 76 behavioral eval tests across 6 Gemini model variants. The team needs better test coverage granularity for agent subcomponents. Critical for confidence in agent releases.

3. **[#22745](https://github.com/google-gemini/gemini-cli/issues/22745) — AST-aware file reads, search, and codebase mapping (EPIC)**  
   *Priority P2 · 7 comments · 1 👍*  
   **Why it matters:** Investigating whether AST-aware tools can reduce token consumption and tool call count by precisely reading method bounds and navigating code structure. If successful, this could meaningfully improve agent efficiency and cost.

4. **[#21409](https://github.com/google-gemini/gemini-cli/issues/21409) — Generalist agent hangs forever**  
   *Priority P1 · 7 comments · 8 👍*  
   **Why it matters:** The most upvoted open issue. Simple folder creation triggers an indefinite hang when the CLI defers to the generalist agent. Community workaround: manually instructing the model to avoid sub-agent delegation. A major UX blocker.

5. **[#28341](https://github.com/google-gemini/gemini-cli/issues/28341) — Infinite OAuth auth loop on Windows**  
   *Priority P1 · 3 comments · 1 👍*  
   **Why it matters:** Freshly reported (2026-07-09). Users are completely blocked from using any CLI version (v0.45.0–v0.49.0) on Windows due to repeated OAuth re-authentication prompts. No workaround documented.

6. **[#25166](https://github.com/google-gemini/gemini-cli/issues/25166) — Shell command execution stuck with "Waiting input" after command completes**  
   *Priority P1 · 4 comments · 3 👍*  
   **Why it matters:** After executing trivial shell commands, the CLI hangs, showing a spurious "Awaiting user input" state. Extremely common and disruptive for day-to-day usage.

7. **[#21983](https://github.com/google-gemini/gemini-cli/issues/21983) — Browser subagent fails on Wayland**  
   *Priority P1 · 4 comments · 1 👍*  
   **Why it matters:** The browser subagent consistently fails on Wayland display servers. Given Wayland adoption growth in Linux ecosystems, this blocks a key agent capability for a significant user segment.

8. **[#22672](https://github.com/google-gemini/gemini-cli/issues/22672) — Agent should discourage destructive behavior**  
   *Priority P2 · 3 comments · 1 👍*  
   **Why it matters:** The agent occasionally uses `git reset --force`, destructive DB commands, and other irreversible operations when safer alternatives exist. Community signals trust erosion around autonomous agent safety.

9. **[#28342](https://github.com/google-gemini/gemini-cli/issues/28342) — Nightly release CI failure (2026-07-09 build)**  
   *Priority P1 · 2 comments*  
   **Why it matters:** The automated nightly release pipeline failed. While nightlies are not production releases, a broken CI pipeline blocks internal testing and forces manual intervention.

10. **[#26522](https://github.com/google-gemini/gemini-cli/issues/26522) — Auto Memory retrying low-signal sessions indefinitely**  
    *Priority P2 · 5 comments*  
    **Why it matters:** The "Auto Memory" background extraction agent can get stuck in an infinite retry loop on low-quality transcripts, wasting API credits and CPU resources without progressing.

---

## 4. Key PR Progress (Top 10)

1. **[#28346](https://github.com/google-gemini/gemini-cli/pull/28346) — Fix trust dialog disclosure for runnable hooks**  
   *Area: security · Size M*  
   Fixes a vulnerability where invalid or flat hook entries were incorrectly reported as runnable in project-folder trust dialogs. Prevents misleading users into trusting unsafe configurations.

2. **[#28319](https://github.com/google-gemini/gemini-cli/pull/28319) — Enforce workspace trust during A2A server environment loading**  
   *Area: security · Size M/L*  
   Fixes a zero-click RCE vulnerability (b-519269096) in the A2A server. Refactors startup sequence to validate workspace trust before loading environment variables. High-severity security fix.

3. **[#28316](https://github.com/google-gemini/gemini-cli/pull/28316) — Ensure task cancellation aborts execution loop**  
   *Area: agent · Size M/L*  
   Fixes "ghost executions" where canceled tasks continued running. Also addresses multiple race conditions, memory leaks, and an unauthenticated shutdown endpoint vulnerability in the A2A server.

4. **[#28164](https://github.com/google-gemini/gemini-cli/pull/28164) — Limit recursive reasoning turns per single user request**  
   *Area: core · Size M*  
   Introduces a hard limit of 15 recursive reasoning turns per user request (configurable via `maxSessionTurns`). Protects local CPU resources and API quotas from infinite loops.

5. **[#28343](https://github.com/google-gemini/gemini-cli/pull/28343) — Use unambiguous previous intent label in fallback summary** (CLOSED)  
   *Area: core · Size S*  
   Fixes a prompt steer regression where the agent would answer stale questions from offloaded history instead of the user's latest prompt. Root cause: ambiguous `- **Last User Intent:**` label.

6. **[#28223](https://github.com/google-gemini/gemini-cli/pull/28223) — Bypass LLM correction for JSON and IPYNB files in write_file and replace** (CLOSED)  
   *Area: core-tools · Size M*  
   Surgical fix preventing corruption when writing `.json` and `.ipynb` files. The LLM's post-processing was attempting to "correct" structured data, breaking file contents.

7. **[#28345](https://github.com/google-gemini/gemini-cli/pull/28345) — Implement LLM triage orchestrator and container build**  
   *Area: caretaker-triage · Size L*  
   New Cloud Run Job infrastructure for automated LLM-based issue triage. Includes GCS debug logging, Antigravity SDK integration, and a comprehensive integration test suite.

8. **[#28304](https://github.com/google-gemini/gemini-cli/pull/28304) — Show clear message when account has no Code Assist tier**  
   *Area: core · Size M/L*  
   Improves the `/privacy` command UX for enterprise/Workspace accounts by replacing the raw backend error with a user-friendly dialog.

9. **[#28333](https://github.com/google-gemini/gemini-cli/pull/28333) — Conscious stagnation detection for resilient agentic loops**  
   *Area: agent · Size M/XL*  
   Implements a "Guided Recovery" mechanism and "Stagnation Circuit Breaker" to prevent premature termination after `/rewind` or text-only model responses.

10. **[#28328](https://github.com/google-gemini/gemini-cli/pull/28328) — Don't flag non-auth 401 substrings as authentication errors**  
    *Area: core · Size S*  
    Fixes a bug where any error containing "401" (e.g., `http://localhost:4012`, `exit status 4010`) was incorrectly classified as an authentication failure, triggering unnecessary OAuth fallback flows.

---

## 5. Feature Request Trends

Based on issue and PR analysis, three dominant feature directions are emerging:

1. **Agent Safety & Guardrails**  
   Multiple issues call for built-in protections against destructive operations (`git reset --force`, unsafe DB commands), limits on recursive/tool loops, and clear termination signals when agents hit limits or encounter irreversible actions. The stagnation detection PRs (#28331, #28333) directly address this trend.

2. **AST-Aware Code Understanding**  
   EPICs #22745 and #22746 systematically investigate replacing naive file reads with AST-aware tools for precise method boundary detection, codebase mapping, and search. The goal is reducing token consumption and tool-call count while improving accuracy. This is the community's most sophisticated feature request.

3. **Sub-Agent Observability & Debugging**  
   Strong demand (#22598, #21763, #21432) for sharing sub-agent trajectories, surfacing subagent context in `/bug` reports, and making agents "self-aware" of their own CLI flags and hotkeys. Users want transparency into what sub-agents are actually doing.

---

## 6. Developer Pain Points

Recurring frustrations from the community:

- **Silent failures and misreporting** — Sub-agents hitting `MAX_TURNS` report success (#22323); shell commands hanging after completion (#25166); agents creating temp scripts in random directories (#23571). Developers lose trust when the tool can't accurately report its own state.
- **OAuth and auth friction** — The infinite auth loop on Windows (#28341) and misleading "401" error classifications (#28328) create a poor onboarding and recovery experience.
- **Sub-agent reliability regression** — Since v0.33.0, sub-agents run without permission even when disabled in config (#22093); the generalist agent hangs on trivial tasks (#21409); the browser agent fails entirely on Wayland (#21983). Multiple maintainers are actively retesting these P1 bugs.
- **Configuration and tooling limits** — The browser agent ignores `settings.json` overrides (#22267); the CLI crashes with `get-shit-done` hooks (#22186); >128 tools cause 400 errors (#24246). Configuration systems feel brittle at scale.
- **Memory system quality issues** — Auto Memory retries low-signal sessions forever (#26522), sends unredacted content to models (#26525), and silently skips invalid patches (#26523). The memory system remains immature for production use.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest
**Date:** 2026-07-10

## Today's Highlights

Version 1.0.70 shipped with GPT-5.6 model support and critical fixes for HTTPS proxy handling, making `web_fetch` functional in corporate environments. The WSL2 terminal community is experiencing a cluster of TUI wedge/hang bugs in the new 1.0.70-0 pre-release, with at least two new reports of screen-clearing mid-turn unresponsiveness. A noteworthy closed PR (not listed in the PR section but resolved via release) addresses the mandatory HTTPS proxy issue that blocked enterprise users from using `/research` and URL retrieval.

## Releases

**v1.0.70** (2026-07-09) — [Release Link](https://github.com/github/copilot-cli/releases/tag/v1.0.70)
- Added GPT-5.6 model support
- Show a single unified `Error` prefix for MCP and skill command failures
- Show the real parse error when `--agent` selects a malformed custom agent
- `web_fetch` now works through mandatory HTTPS proxies
- Hide/search added to the Gists tab
- Treat superseded subagent runs as "can" (cancelled)

**v1.0.70-0** (pre-release) — [Release Link](https://github.com/github/copilot-cli/releases/tag/v1.0.70-0)
- Pin plugins to an exact commit SHA using the `sha` field in plugin source configuration
- Add `--sandbox` and `--no-sandbox` flags to toggle OS-level shell sandboxing per session
- Add `/refine` command for prompt rewriting

## Hot Issues

1. **[#1595 — Sporadic policy blocking issue retrieving models](https://github.com/github/copilot-cli/issues/1595)** (28 comments, 10 👍)
   Enterprise users with valid subscriptions are randomly denied access to `/models`, showing "access denied by Copilot policy" despite having ~40% premium requests remaining. Long-running (since Feb 2026) and unresolved, this is the top community pain point for enterprise deployments.

2. **[#107 — Segmentation Fault on Alpine Linux](https://github.com/github/copilot-cli/issues/107)** (15 comments, 4 👍)
   Any tool call inside an Alpine Linux Docker container triggers a segfault. Still open after nearly a year — an ongoing blocker for containerized workflows.

3. **[#4069 — TUI wedges mid-turn on WSL2 + Windows Terminal](https://github.com/github/copilot-cli/issues/4069)** (6 comments, 7 👍)
   New high-severity bug in v1.0.70-0: screen clears, input becomes dead, `Ctrl+C`/`Ctrl+\` ignored, with `write EIO` on stdout and `EPIPE` on Rust JSON-RPC transport. Intersects with the new TUI rendering pipeline.

4. **[#970 — macOS Gatekeeper blocks Copilot after Homebrew upgrades](https://github.com/github/copilot-cli/issues/970)** (7 comments, 21 👍)
   Every Homebrew update triggers Apple's notarization warning, forcing manual approval in Privacy & Security. High community reaction (21 👍) — a persistent UX friction for Mac users under corporate MDM.

5. **[#2792 — Automatic model switching between planning and execution](https://github.com/github/copilot-cli/issues/2792)** (4 comments, 14 👍)
   Users want Copilot to use one model (e.g., Opus) for planning, then switch to a cheaper/faster model (e.g., Sonnet) for execution. 14 upvotes suggest strong demand for cost-aware multi-model orchestration.

6. **[#2627 — Configurable system prompt to slim fixed token overhead](https://github.com/github/copilot-cli/issues/2627)** (3 comments, 18 👍)
   The ~20,500 token system prompt consumes 10% of a 200K context window before any user input. Users are requesting the ability to trim unnecessary instructions and tool definitions. High demand with 18 👍.

7. **[#1665 — Plugins scoped to project/repository instead of per-user](https://github.com/github/copilot-cli/issues/1665)** (13 comments, 18 👍)
   [CLOSED] Despite being closed, this remains the most-upvoted feature request (18 👍). Currently plugins install globally per-user; teams want project-level plugin configuration for shared workflows.

8. **[#4077 — TUI black-screen hang mid-turn in 1.0.70-0 (Windows Terminal)](https://github.com/github/copilot-cli/issues/4077)** (1 comment, 1 👍)
   Second report of TUI hang in pre-release: content remains intact (recoverable via `--resume`), but screen blacks out. Likely the same root cause as #4069.

9. **[#4067 — `model` field in `settings.json` not applied on startup](https://github.com/github/copilot-cli/issues/4067)** (0 comments, 0 👍)
   The top-level `model` key in `~/.copilot/settings.json` is ignored at startup, forcing users to manually run `/model` each session. A regression or long-standing config parsing bug.

10. **[#4062 — PR-status widget shows draft PR as "merged"](https://github.com/github/copilot-cli/issues/4062)** (0 comments, 0 👍)
    Stale state from a previously-merged PR in the same session bleeds into new PRs, mislabeling open drafts as "merged." Highlights lack of state isolation between PR operations.

## Key PR Progress

No pull requests were merged or updated in the last 24 hours. One closed issue is worth noting:

- **[#4019 — Built-in `web_fetch` does not work with HTTP proxies](https://github.com/github/copilot-cli/issues/4019)** — [CLOSED](https://github.com/github/copilot-cli/issues/4019)  
  Resolved by the mandatory HTTPS proxy fix shipped in v1.0.70. Enterprise users on WSL behind corporate proxies can now use `/research` and URL retrieval.

## Feature Request Trends

Three major feature directions dominate recent requests:

1. **Model flexibility and cost optimization** — Multiple issues request configurable model families (#4068), per-step model selection (#2792), and reduced token overhead (#2627). Users want to trade cost vs. capability dynamically without manual model pinning.

2. **Plugin and agent configurability** — Requests for project-scoped plugins (#1665), per-fleet subagent model defaults (#2193), and making the `/research` agent's MCP tools configurable (#4076) signal a desire for more modular, team-shareable agent setups.

3. **Session state reliability** — Users are frustrated by session pickers that hide past sessions (#4071, #3931), stale PR state (#4062), and TUI hangs that require `--resume` recovery (#4069, #4077). Session management stability is the #1 UX reliability concern.

## Developer Pain Points

- **TUI instability in v1.0.70-0** — Two separate reports (WSL2 + Windows Terminal) of mid-turn screen clears and unresponsive input. Community is wary of running the pre-release in daily workflows.
- **Enterprise proxy/security friction** — HTTPS proxy support was fixed, but macOS Gatekeeper (#970) and sporadic policy blocking (#1595) remain unresolved blockers for corporate adopters.
- **Scheduled prompts kill task queues** — Issues #4079 and #4078 both report that `/every` or `/after` scheduled prompts interrupt and destroy the existing prompt queue, dropping queued items until the next schedule fires.
- **Checkpoint restore deletes untracked files** — Issue #1675 warns that `git clean -fd` run during checkpoint rollback permanently deletes untracked files with no undo. High-risk behavior for users experimenting with agent-driven workflows.
- **Garbage text when copying from TUI** — Issue #4070: highlighting output for copy adds garbage characters to input, and `Ctrl+C` pastes malformed text. A new regression in TUI rendering.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest
**2026-07-10**

---

## Today's Highlights
Activity remains focused on bug fixes and cross-tool compatibility, with a significant PR adding support for loading Anthropic's `CLAUDE.md` configuration files. Two long-standing open issues on SSL certificate handling and TPD rate limit calculation continue to see community traction without resolution from maintainers.

---

## Releases
No new releases in the last 24 hours. The latest stable version remains **kimi 2.6**.

---

## Hot Issues

### [#2458 – Add option to ignore SSL certificate](https://github.com/MoonshotAI/kimi-cli/issues/2458)
**Author:** dmorsin | **Updated:** 2026-07-09 | **Comments:** 5 | **👍:** 0
**Why it matters:** Corporate antivirus software performing MITM certificate injection blocks Kimi CLI login on Windows. The feature request has been open for 3+ weeks with no maintainer response, which may be frustrating for enterprise users. Community discussion focuses on adding a `--insecure` flag or environment variable.

### [#2318 – Incorrect TPD rate limit calculation](https://github.com/MoonshotAI/kimi-cli/issues/2318)
**Author:** globalvideos272-lab | **Updated:** 2026-07-09 | **Comments:** 1 | **👍:** 1
**Why it matters:** Reports a critical bug where the client displays an erroneous TPD (Tokens Per Day) limit of 1,505,241, likely misinterpreting the API response. This affects users on the `kimi2.6` model with moonshot.ai platform. Community has flagged this as blocking for heavy API consumers, but no workaround has been shared.

---

## Key PR Progress

### [#2487 – Support loading CLAUDE.md alongside AGENTS.md](https://github.com/MoonshotAI/kimi-cli/pull/2487)
**Author:** nankingjing | **Updated:** 2026-07-09
**What it does:** Adds discovery of `CLAUDE.md` and `.claude/CLAUDE.md` files in `load_agents_md()`, enabling Kimi CLI to automatically pick up configuration from Claude Code projects. This is a **high-impact interoperability feature** for teams using multiple AI coding assistants. References issue #2401.

### [#2324 – Fix BrokenPipeError in SessionProcess.send_message](https://github.com/MoonshotAI/kimi-cli/pull/2324)
**Author:** Ricardo-M-L | **Updated:** 2026-07-09
**What it does:** Guards against writing to `process.stdin` after the subprocess has exited, preventing `BrokenPipeError` crashes in the web runner. A solid defensive fix for a race condition affecting session-based workflows.

### [#2449 – Strip newlines in shorten_middle before length check](https://github.com/MoonshotAI/kimi-cli/pull/2449)
**Author:** Ricardo-M-L | **Updated:** 2026-07-09
**What it does:** Fixes truncation logic so that newlines are removed *before* checking string length, ensuring single-line summaries of tool call parameters display correctly. Addresses a visual bug in `extract_key_argument`.

---

## Feature Request Trends
Based on analysis of open issues, the most-requested feature directions cluster around:

1. **SSL/TLS bypass options** – Multiple users requesting `--insecure` or certificate override for corporate/managed environments (e.g., #2458).
2. **Cross-tool configuration compatibility** – Growing interest in importing `.claude.md` and `.cursorrules` files, suggesting a multi-ecosystem adoption pattern (e.g., #2487, #2401).
3. **Session persistence** – Requests for resuming context across CLI restarts and improved session crash recovery.

---

## Developer Pain Points
Recurring frustrations visible in recent issues:

- **Rate limit ambiguity** – The TPD limit display bug (#2318) confuses users about actual consumption, leading to unnecessary subscription upgrades or support tickets.
- **Antivirus/SSL conflicts** – Corporate users on Windows face a hard blocker without a client-side bypass option, with no official solution after 3+ weeks.
- **Missing error recovery** – The `BrokenPipeError` in session web runner (#2324) shows that edge-case error handling for subprocess lifecycle is still immature, causing unpredictable crashes mid-session.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest
**Date:** 2026-07-10

---

## Today's Highlights

Three releases shipped today (v1.17.16–v1.17.18) with critical fixes for Copilot billing crashes, Meta Muse Spark support, and reasoning effort variants for Grok models. The community remains focused on two persistent pain points: subagents ignoring the configured model field, and clipboard functionality broken on Linux terminals. A long-standing clipboard issue (#4283) continues to dominate discussion with 109 comments.

---

## Releases

Three patch versions landed in the last 24 hours:

**v1.17.18** — Fixed crashes and bad pricing data when GitHub Copilot returns models with a zero billing batch size. Added a model-specific system prompt for Meta Muse Spark.

**v1.17.17** — Improved Meta model handling for reasoning variants and provider requests. Desktop: fixed clipped descenders in model selector labels, added a dismissible tabs intro popup, and refreshed the help entry point.

**v1.17.16** — Exposed reasoning effort variants for Grok models. Improved xAI prompt cache routing and PDF file support in Responses models. Desktop: added an "Open containing folder" action for projects and a composer add menu for files/commands.

---

## Hot Issues

**1. [#4283 — Copy To Clipboard is not working](https://github.com/anomalyco/opencode/issues/4283)**  
*109 comments | 👍 102 | Open since Nov 2025*  
The highest-traffic issue in the project. Users across multiple OS versions report that selecting and copying text from responses does not actually populate the clipboard. Despite being open for 8 months, the community keeps it alive with new reproductions.

**2. [#20995 — Gemma 4 (e4b) tool calling fails via Ollama](https://github.com/anomalyco/opencode/issues/20995)**  
*33 comments | 👍 47 | Open*  
Gemma 4 returns valid `tool_calls` in the response, but OpenCode fails to recognize them during streaming. Blocks users who prefer local Ollama deployments with newer Gemma models.

**3. [#4704 — /undo and /timeline undo does not revert file edits](https://github.com/anomalyco/opencode/issues/4704)**  
*22 comments | 👍 19 | Open since Nov 2025*  
Fundamental undo functionality broken even in git-tracked projects. Undo commands execute without error but leave file edits intact. A significant workflow blocker.

**4. [#30086 — High CPU usage in newer versions](https://github.com/anomalyco/opencode/issues/30086)**  
*19 comments | 👍 12 | Open*  
Users report OpenCode's CPU usage spiking dramatically in recent updates, making it impossible to run multiple sessions. Symptoms include system-wide lag and unresponsive mouse cursor.

**5. [#24713 — Copy shows copied popup but clipboard unchanged on Linux terminal](https://github.com/anomalyco/opencode/issues/24713)**  
*11 comments | 👍 7 | Open*  
Related to #4283 but specific to Linux terminals. The copy feedback shows success, yet clipboard contents never change. Likely a Linux terminal clipboard integration issue.

**6. [#33028 — Subagents hang indefinitely after quick bash tool call](https://github.com/anomalyco/opencode/issues/33028)**  
*5 comments | 👍 2 | Open*  
Subagents freeze after a bash tool call completes. The LLM stream never times out, requiring manual intervention. Reproduced with multiple model providers.

**7. [#36133 — Auth error with GPT 5.6-xxx models](https://github.com/anomalyco/opencode/issues/36133)**  
*5 comments | 👍 2 | Closed*  
GPT-5.6 models fail with authentication errors while GPT-5.5 works fine. Quickly triaged and resolved. Highlights the challenge of keeping up with OpenAI's rapid model releases.

**8. [#36119 — Apply Patch/Edit permission view only shows the first file](https://github.com/anomalyco/opencode/issues/36119)**  
*5 comments | 👍 0 | Open*  
When the apply patch tool requests permission to modify multiple files, users can only see the diff for the first file. No way to review subsequent changes before approving, creating a safety and trust issue.

**9. [#36140 — GPT-5.6 Luna returns model not found with ChatGPT OAuth](https://github.com/anomalyco/opencode/issues/36140)**  
*4 comments | 👍 5 | Open*  
Despite being listed in the built-in OpenAI provider, `gpt-5.6-luna` returns HTTP 404 when used with ChatGPT OAuth. Reproduced from a clean `dev` checkout.

**10. [#36178 — SQLite migration missed legacy JSON sessions after Windows path normalization](https://github.com/anomalyco/opencode/issues/36178)**  
*3 comments | 👍 0 | Open*  
Upgrading from file-storage to SQLite on Windows only imports a subset of existing sessions due to path normalization differences. Users risk losing conversation history during migration.

---

## Key PR Progress

**1. [#36180 — refactor(core): simplify tool admission flow](https://github.com/anomalyco/opencode/pull/36180)**  
Core refactor to simplify tool permission handling. Reduces complexity by removing the unused model axis from tool admission and consolidating registration tests.

**2. [#36179 — fix: create root span per prompt for OTEL trace isolation](https://github.com/anomalyco/opencode/pull/36179)**  
Addresses #32920: when `OTEL_EXPORTER_OTLP_ENDPOINT` is set, all spans across prompts inherit the boot-time trace context, creating one giant trace per session. Now each prompt gets its own root span.

**3. [#36042 — feat(tui): show subagent status in sidebar](https://github.com/anomalyco/opencode/pull/36042)**  
Adds a built-in TUI sidebar section showing child sessions started by subagents. Addresses long-standing visibility requests (#4865, #25712) for subagent activity.

**4. [#36177 — fix(core): preserve admitted tool generations](https://github.com/anomalyco/opencode/pull/36177)**  
Tool calls now execute against the exact registration advertised to the model. Prevents stale-tool errors during concurrent plugin/config reloads, replacing crash errors with clean aborts.

**5. [#36172 — fix(app): preload more timeline messages](https://github.com/anomalyco/opencode/pull/36172)**  
Increases initial timeline message load from 2 to 20, improving the user experience when reviewing session history. Preserves the later 200-message fetch for deep history.

**6. [#36176 — fix(tui): preserve initial user message on new session hydration](https://github.com/anomalyco/opencode/pull/36176)**  
Closes #35988: the initial user message could disappear from new sessions when `session.sync()` ran before the server persisted the message. Fixes hydration timing.

**7. [#36174 — fix(core): narrow ecosystem config watches](https://github.com/anomalyco/opencode/pull/36174)**  
Prevents recursive file watchers from scanning `.claude` and `.agents` directories, reducing unnecessary inotify watches and kernel memory pressure in non-VCS projects.

**8. [#36175 — fix(core): mark user processes as opencode agents](https://github.com/anomalyco/opencode/pull/36175)**  
Sets `AGENT=1` and `OPENCODE=1` environment variables for all V2 subprocesses and PTY sessions, providing consistent signal to spawned tools that they're running inside OpenCode.

**9. [#36129 — refactor(form): model links as fields](https://github.com/anomalyco/opencode/pull/36129)**  
Model URL requests now behave as `link` fields within the shared form schema. Adds TUI support for opening, copying, and completing link fields. MCP elicitations with empty schemas are immediately accepted.

**10. [#35935 — feat(observability): add v2 genai tracing](https://github.com/anomalyco/opencode/pull/35935)**  
Adds end-to-end GenAI observability through OTLP. Records one trace per agent turn, including model steps, HTTP/WebSocket transport, local tools, hosted-tool events, retries, compaction, subagents, and structured failures. Includes Dash0 setup documentation.

---

## Feature Request Trends

**Automatic model discovery** — Multiple requests ask OpenCode to automatically fetch available models from OpenAI-compatible endpoints (`/v1/models`) instead of requiring manual configuration. This is especially requested for custom/local providers (Issue #35855).

**Subagent model control** — The most active feature request cluster: users want environment variables (`OPENCODE_SUBAGENT_MODEL`) or reliable frontmatter support to set different models for subagents vs. primary agents. Several PRs and issues converge on this (Issues #36147, #35126, #36132).

**External supervision patterns** — A docs PR (#36168) proposes a formal "external supervisor" pattern for local agent execution, suggesting growing interest in multi-agent orchestration with human oversight loops.

**Ecosystem plugin documentation** — Multiple PRs add new plugins to the ecosystem docs (opencode-codex-rate-limit-reset, Unforgit), reflecting an expanding third-party tool ecosystem around persistent memory and rate limit management.

---

## Developer Pain Points

**Clipboard and undo failures** dominate the bug reports. Issues #4283 and #24713 together have over 120 comments about copy-to-clipboard not working. Issue #4704 shows `/undo` silently failing to revert file edits. Both are long-standing (8+ months) and heavily upvoted.

**Subagent model inheritance** is the most frequently reported integration bug. Subagents consistently ignore the `model:` field in their frontmatter and inherit the parent agent's model instead. This forces users to run heavy models for every subtask.

**Model compatibility churn** with new OpenAI releases (GPT-5.6 family) and niche providers (Gemma 4 via Ollama, self-signed TLS servers) creates repeated friction. Each major model release requires immediate patches for auth, reasoning efforts, and streaming format changes.

**Windows-specific bugs** persist at a higher rate than other platforms: path normalization breaks SQLite migration (#36178), pipe blocking on dev servers (#32504), and TUI enter-key issues (#23219) all suggest Windows receives less testing coverage.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-07-10

## Today's Highlights
The Pi ecosystem is rapidly adapting to the emerging GPT-5.6 model family, with today's v0.80.6 release adding a new `max` thinking level and fixes rolling in for proper context windows, cache accounting, and model catalog entries. Concurrently, the community is pressing for improvements in session lifecycle management, extension stability, and a smoother default experience for in-session model changes. A major discussion is brewing around "Strict Tools / Grammar" support to unlock deeper LLM tool integration.

## Releases
**v0.80.6** — New Feature: Introduced the `max` thinking level, a new opt-in tier above `xhigh`. Natively supported on GPT-5.6 and adaptive Claude models, available across CLI (`--thinking max`), SDK, RPC, and model selection. Custom themes can now define `thinkingMax`.

**v0.80.5** — Patch release with no changelog details.

## Hot Issues

**1. [#6306 — Support Strict Tools / Grammar](https://github.com/earendil-works/pi/issues/6306)**  
A high-priority discussion on adding "free form" or "strict" tool definitions to the SDK, enabling grammar-aware probing by the LLM. Currently blocked because the SDK lacks the abstraction; OpenAI SDKs support this with LARK/Rust regex backends. **22 comments, strong community interest.**

**2. [#2023 — Add pi.runWhenIdle() to schedule work after the agent has fully settled](https://github.com/earendil-works/pi/issues/2023)**  
Closed but influential. Proposes a method to reliably schedule extension work after the agent loop finishes streaming, avoiding race conditions. **13 comments, 5 👍.**

**3. [#6234 — Escape leaves Pi stuck in Working when extension context hook never settles](https://github.com/earendil-works/pi/issues/6234)**  
Key UX bug: pressing Escape during an active run can leave the TUI permanently stuck in `Working...` if an extension hook never resolves. The double-Escape workaround is unintuitive. **11 comments.**

**4. [#5858 — Align and use "instructions" field for OpenAI-Responses system prompt](https://github.com/earendil-works/pi/issues/5858)**  
Proposes switching from `system`/`developer` fields to the new `instructions` field in the `openai-responses` provider per OpenAI's latest API guidance. **7 comments.**

**5. [#6210 — /scoped-models cannot select model IDs containing brackets](https://github.com/earendil-works/pi/issues/6210)**  
A parsing bug: model IDs with brackets (e.g., `custom/bracketed-model[1m]`) get incorrectly matched and produce a "No models match" warning. Affects custom model names. **6 comments.**

**6. [#5263 — Make in-session model and thinking-level changes ephemeral by default](https://github.com/earendil-works/pi/issues/5263)**  
Proposes that `/model` and thinking-level changes should only affect the active session, not persist globally. A new "Default model" entry in `/settings` would be the single global surface. **6 comments, 6 👍 — strong popular support.**

**7. [#6097 — Add support for 'max' thinking level](https://github.com/earendil-works/pi/issues/6097)**  
Filed ahead of the GPT-5.6 release, now implemented in v0.80.6. The community was clearly anticipating this, with **15 👍** and early discussion on extending to Anthropic Opus models. **Closed as delivered.**

**8. [#6376 — Thinking blocks inappropriately stripped in newer Claude models](https://github.com/earendil-works/pi/issues/6376)**  
Newer Anthropic API models omit empty thinking text fields, causing Pi to strip entire thinking blocks from subsequent calls. Fixed in PR #6457. **5 comments.**

**9. [#6465 — Add GPT-5.6 Sol, Terra, and Luna to OpenAI Codex model catalog](https://github.com/earendil-works/pi/issues/6465)**  
Follow-up to bring the Pi catalog up to date with Codex CLI 0.144.0, which ships GPT-5.6 model metadata. **5 comments.**

**10. [#5886 — AgentSession settlement/continuation and assistant-tail lifecycle bugs](https://github.com/earendil-works/pi/issues/5886)**  
Meta-issue documenting a recurring class of bugs where post-run logic tries to continue from a transcript that is no longer valid. Affects extension reliability. **5 comments, 2 👍.**

## Key PR Progress

**1. [#6474 — Support message-anchored tool loading (PoC)](https://github.com/earendil-works/pi/pull/6474)**  
Proof-of-concept by mitsuhiko for introducing tools mid-conversation via `addedTools` in messages. Not to be merged in current form, but signals a potential future architecture for dynamic tool loading. **Open.**

**2. [#6471 — Correct GPT-5.6 Codex context window](https://github.com/earendil-works/pi/pull/6471)**  
Fixes the context window for GPT-5.6 Sol, Terra, and Luna from 272k to 372k tokens, matching upstream Codex metadata. **Merged.**

**3. [#6467 — Fix git package deps + pnpm-friendly install flags](https://github.com/earendil-works/pi/pull/6467)**  
Resolves "Cannot find module" failures when git-installed packages have missing `node_modules`. Specifically helps pnpm users. **Merged.**

**4. [#6460 — Add xAI Grok SuperGrok OAuth provider](https://github.com/earendil-works/pi/pull/6460)**  
Adds a built-in `xai-oauth` provider for device-code OAuth login via SuperGrok, without changing the existing API-key based `xai` provider. Includes unit tests. **Merged.**

**5. [#6457 — Fix: send anthropic thinking blocks also when thinking text is empty](https://github.com/earendil-works/pi/pull/6457)**  
Direct fix for issue #6376: stops stripping thinking blocks from newer Claude models by always sending the block even when text is empty. **Merged.**

**6. [#6470 — Expand ~ in shellPath setting](https://github.com/earendil-works/pi/pull/6470)**  
Enables tilde expansion for the `shell` config setting, so `~/my-shell` resolves correctly. Closes #6458. **Merged.**

**7. [#6463 — Cancel auto-retry when switching models](https://github.com/earendil-works/pi/pull/6463)**  
Fixes a bug where in-flight auto-retry would continue after a model switch, causing an inconsistent turn. Adds regression test. **Merged.**

**8. [#6449 — Add ResourceExhausted as a retryable error](https://github.com/earendil-works/pi/pull/6449)**  
Classifies `ResourceExhausted` errors as retryable, preventing abrupt termination on provider rate limits. **Merged.**

**9. [#6427 — Add prompt cache miss tracking to coding-agent](https://github.com/earendil-works/pi/pull/6427)**  
Detects and warns when prompt cache misses occur per turn, highlighting idle gaps past TTL and model switches. Enhances `/session` output. **Merged.**

**10. [#6440 — Fix: reload keybindings before creating custom editor component](https://github.com/earendil-works/pi/pull/6440)**  
Ensures user-customized keybindings from `keybindings.json` work on initial startup when a custom editor component replaces the default. **Merged.**

## Feature Request Trends
- **"Max" thinking level support** — After GPT-5.6 announcement, the community rapidly requested and received `max` thinking across all interfaces. Now extending to Anthropic Opus models.
- **Ephemeral in-session model changes** — Strong desire to make `/model` and thinking-level changes session-only, with a dedicated global default in `/settings` (#5263, 6 👍).
- **Strict/Grammar tools** — A push for SDK-level support for "free form" or strict tool definitions enabling grammar-aware probing (#6306).
- **Agent idle detection** — Multiple requests for a reliable event/callback when the agent loop fully settles, for extensions that need to react post-run (#2023, #6363).
- **Dynamic tool loading** — Early PoC for message-anchored tools mid-conversation (#6474), which would reduce initial request size and enable richer interactive workflows.

## Developer Pain Points
- **Extension lifecycle instability** — Recurring issues with post-run continuation (#5886), stuck TUI on unresolved hooks (#6234), and deduplication conflicts between local and globally installed extensions (#6466, #6400).
- **Thinking block rendering noise** — Empty or malformed thinking blocks from OpenAI responses and newer Anthropic models clutter the TUI with HTML comments (`<!-- -->`) and unnecessary whitespace (#6454, #6434).
- **Compaction and token budgeting** — Stale pre-compaction usage data shrinking output budgets (#6464) and `custom_message` entries bypassing compaction (`keepRecentTokens`) (#6326) cause confusing context limits.
- **Configuration and keybinding friction** — Tilde expansion not working in `shell` path (now fixed), custom keybindings not loaded on first start with custom editors (#6440), and `modelOverrides` not applying to extension-registered providers (#6367).
- **Retry and error classification** — Bun socket drops and `ResourceExhausted` errors were not classified as retryable, causing premature termination on transient failures (#6431, #6449).

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-07-10

## Today's Highlights
A major nightly release (v0.19.8-nightly) shipped with a critical fix for subagent tool-call loops and a major CUA driver update. The community is actively discussing multi-workspace daemon support and a regression in CLI image/document upload. Several security-focus PRs around comment moderation and credential isolation advanced, while the JetBrains ACP integration continues to be a hot topic.

---

## Releases

**v0.19.8-nightly.20260710.205430235**
- Fixed repeated subagent tool-call loops (PR #6543 by @yiliang114)
- Fixed session history chain detection: broken chains are now properly marked

**cua-driver-rs-v0.7.1** (vendored under `packages/cua-driver`)
- Prebuilt binaries now available for macOS (codesigned + notarized universal binary and `QwenCuaDriver.app`), Linux (x86_64 + arm64), and Windows (x86_64 + arm64)
- Added relative coordinate support — enable via configuration

---

## Hot Issues

### #6378 — RFC: Support multiple workspaces in one `qwen serve` daemon  
*19 comments*  
A high-traffic RFC proposing that a single daemon host multiple workspaces while retaining backward compatibility. The community is debating session isolation architecture and resource management.  
🔗 [Issue #6378](https://github.com/QwenLM/qwen-code/issues/6378)

### #6560 — Restore direct image/document upload in CLI chat  
*18 comments*  
Users report that Ctrl+V / drag-and-drop for images and documents stopped working. The feature is critical for providing screenshots and design files during conversations. Multiple users confirm the regression is persistent across reinstallation.  
🔗 [Issue #6560](https://github.com/QwenLM/qwen-code/issues/6560)

### #6581 — JetBrains ACP agent does not receive user prompt  
*8 comments*  
IntelliJ IDEA users report that when using Qwen Code as an ACP agent with Ollama, only bootstrap context is sent — the user's actual prompt is lost. This is blocking JetBrains users who rely on local models.  
🔗 [Issue #6581](https://github.com/QwenLM/qwen-code/issues/6581)

### #6565 — "Internal Error" connecting to Qwen Coder  
*7 comments*  
A generic connection error affecting multiple locales (Chinese, Japanese). Lacks detailed error messages, making troubleshooting difficult. Likely a network/token authentication issue.  
🔗 [Issue #6565](https://github.com/QwenLM/qwen-code/issues/6565)

### #6595 — `qwen3.7-max` leaks internal `<analysis>/<summary>` tags in responses  
*3 comments*  
In long-context sessions, the model occasionally emits internal protocol tags, causing Qwen Code to misinterpret the output and drop follow-up tool calls. This is a model-integration edge case under investigation.  
🔗 [Issue #6595](https://github.com/QwenLM/qwen-code/issues/6595)

### #6614 — Glob tool OOM on large repositories  
*2 comments*  
When `glob` is called with `**` on a large project, Node.js runs out of heap memory before output truncation kicks in. Fatal error. Urgent for users with monorepos. Labeled **P1**.  
🔗 [Issue #6614](https://github.com/QwenLM/qwen-code/issues/6614)

### #6601 — Shell subprocess inherits sensitive environment variables  
*2 comments*  
`QWEN_SERVER_TOKEN`, API keys, and other credentials are leaked to shell commands executed by the agent. Security issue with `printenv QWEN_SERVER_TOKEN` as a proof-of-concept exploit.  
🔗 [Issue #6601](https://github.com/QwenLM/qwen-code/issues/6601)

### #6586 — Dense PDFs hit unrecoverable `FILE_TOO_LARGE` loop  
*2 comments*  
Text-heavy PDFs that exceed `PDF_TEXT_RESULT_MAX_TOKENS` trigger a hard error with no image-fallback path. Agents get stuck retrying the same file indefinitely.  
🔗 [Issue #6586](https://github.com/QwenLM/qwen-code/issues/6586)

### #6590 — macOS standalone: Ctrl+V paste for images broken (missing `@teddyzhu/clipboard`)  
*3 comments*  
The native clipboard module is absent from the standalone installer. No error is logged; only a silent failure. A duplicate (#6594) was closed, but the core issue remains open.  
🔗 [Issue #6590](https://github.com/QwenLM/qwen-code/issues/6590)

### #6600 — `--debug` flag prints log path but never creates the log file  
*4 comments*  
A regression in v0.19.8 where the debug log file is not actually written to disk, rendering the `--debug` flag non-functional for troubleshooting.  
🔗 [Issue #6600](https://github.com/QwenLM/qwen-code/issues/6600)

---

## Key PR Progress

### #6599 — ci: Add suspicious comment attachment guard  
A GitHub Actions workflow that automatically deletes issue/PR comments containing linked high-risk files (archives, installers, scripts) from untrusted users. Skips maintainers and bots.  
🔗 [PR #6599](https://github.com/QwenLM/qwen-code/pull/6599)

### #6589 — feat(web-shell): Add scheduled task prompt references  
Users can now insert inline references to extensions, skills, and MCP tools directly into the scheduled task prompt editor using a picker UI. The tags serialize back into the task prompt text.  
🔗 [PR #6589](https://github.com/QwenLM/qwen-code/pull/6589)

### #6525 — feat(serve): Add cursor-paged transcript replay endpoint  
A new `GET /session/:id/transcript` endpoint that supports efficient cursor-based pagination over session transcripts. Freezes the current transcript snapshot and reconstructs the active parent chain.  
🔗 [PR #6525](https://github.com/QwenLM/qwen-code/pull/6525)

### #6592 — fix(cli): Localize approval mode UI labels  
Fixes the issue where `Auto` mode displayed raw English text in localized sessions. All approval-mode display names now go through the i18n helper, and the footer indicator uses the localized label.  
🔗 [PR #6592](https://github.com/QwenLM/qwen-code/pull/6592)

### #6556 — fix(core): Clamp max_tokens to context window; retire output reservation  
Auto-compaction now uses the full context window for decisions. The old fixed output reservation is removed — each request asks the model for exactly the remaining capacity.  
🔗 [PR #6556](https://github.com/QwenLM/qwen-code/pull/6556)

### #6561 — feat(web-shell): Add workspace Goals page  
Provides a dedicated visual surface for `/goal` management, alongside the Scheduled Tasks page. Also fixes a bug where `/goal` was silently lost on daemon resume.  
🔗 [PR #6561](https://github.com/QwenLM/qwen-code/pull/6561)

### #6615 — fix(channels): Return only final ACP response text  
Intermediate "thinking out loud" text from multi-turn tool calls is now discarded before the final response is returned to channel adapters. Also treats plan updates and permission requests as turn boundaries.  
🔗 [PR #6615](https://github.com/QwenLM/qwen-code/pull/6615)

### #6612 — feat(review): Give every line of a large diff an accountable reviewer  
Instead of handing each review agent a truncated diff, the PR pre-splits the changeset so every agent receives a meaningful portion — with full coverage and no dead zones.  
🔗 [PR #6612](https://github.com/QwenLM/qwen-code/pull/6612)

### #6631 — feat(cli): List archived and organized sessions for non-primary workspaces  
Non-primary workspaces in a multi-workspace daemon now get the same session listing features as the primary workspace: archived views, pinned/grouped views, and group filtering.  
🔗 [PR #6631](https://github.com/QwenLM/qwen-code/pull/6631)

### #6489 — feat(hooks): Add MessageDisplay hook for mid-turn streaming  
A new hook event that fires repeatedly during assistant streaming, closing the gap where hook/tool implementations could only observe final output. Enables incremental UI updates and ACP streaming.  
🔗 [PR #6489](https://github.com/QwenLM/qwen-code/pull/6489)

---

## Feature Request Trends

1. **Multi-workspace daemon support** — The most-discussed RFC (#6378) proposes running multiple workspaces under a single `qwen serve` daemon. Related: daemon-managed channel workers (#5976).  
2. **Subagent observability** — Users want real-time execution visibility, full execution traces, and the ability to manually intervene in subagent runs (#6569).  
3. **Hot-reload system** — A long-standing P1 request (#3696) for runtime reload of skills, extensions, MCP/LSP servers, and configuration without restarting sessions.  
4. **Background automation** — Scheduled tasks with preconditions (#6619) and webhook-triggered channel tasks (#6495) indicate growing demand for agent-based automation workflows.  
5. **IDE integration improvements** — JetBrains ACP fixes, deferred IDE startup reliability, and better error reporting are recurrent themes.

---

## Developer Pain Points

1. **Clipboard/image regression** — Three separate issues (#6560, #6590, #6577) report that clipboard paste and drag-and-drop for images stopped working on both macOS and Windows. The root cause varies by platform, but the user experience gap is significant.  
2. **Model integration fragility** — Protocol tag leakage (#6595) and the `qwen3.7-max` token mismatch issues highlight the difficulty of maintaining stable behavior across model versions.  
3. **Credential security** — Shell subprocesses inheriting environment variables (#6601) is a high-severity security concern that resonated quickly in the community.  
4. **Debugging tooling** — The `--debug` flag printing a path but never creating the file (#6600) undermines troubleshooting, especially for users trying to diagnose the above issues.  
5. **OOM under common workflows** — The glob tool OOM (#6614) on a simple `**` pattern against the project's own source tree is a sharp edge for users working on monorepos or large codebases.  
6. **Language consistency** — Approval mode UI labels mix English and Chinese (#6582), and MCP prompts silently dropping arguments (#6563) create confusing user experiences that erode trust.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-07-10

**Repository:** [github.com/Hmbown/DeepSeek-TUI](https://github.com/Hmbown/DeepSeek-TUI)
*(Note: primary activity is in the `Hmbown/CodeWhale` repository)*

---

## 1. Today's Highlights

**v0.8.68 shipped today** (PR #4327 merged), capping a week of intense performance, workflow, and platform work. The release includes a major TUI rendering overhaul (five hot-path fixes cut frame latency), the new Fleet/Workflow/Lane orchestration architecture, and first-class Android/Termux support. The team is now dogfooding the new workflow runtime against active stopship issues to validate the lane model end-to-end.

---

## 2. Releases

**No new releases in the last 24 hours.**  
The v0.8.68 release PR (#4327) was merged today—it bumps workspace crates, updates changelogs and docs, but no tagged release asset was produced within this window. Expect a formal tag shortly.

---

## 3. Hot Issues (Top 10)

| # | Issue | Comments | Why It Matters |
|---|-------|----------|----------------|
| 1 | [#4092 — v0.8.68 execution board: lane order, dependencies, and agent protocol (canonical packet)](https://github.com/Hmbown/CodeWhale/issues/4092) | **58** | The single source-of-truth for the v0.8.68 milestone. Every open milestone issue now carries exactly one `lane-*` label for queryable dependency tracking. High community energy as this is the master coordination issue. |
| 2 | [#4032 — Codewhale not following the constitution](https://github.com/Hmbown/CodeWhale/issues/4032) | **30** | Escalated user frustration: the agent persistently ignores user-provided scripts and writes its own, justifying non-compliance. Touches core trust in agent behavior. **Still open with no resolution.** |
| 3 | [#4042 — Environment-level tool sandboxing for sub-agents (CLOSED)](https://github.com/Hmbown/CodeWhale/issues/4042) | **12** | Landed `--disallowed-tools` with runtime enforcement across sessions, sub-agents, Fleet workers, and MCP servers. Significant security win for multi-agent setups. |
| 4 | [#4014 — TUI lag and memory pressure from high agent fan-out (CLOSED)](https://github.com/Hmbown/CodeWhale/issues/4014) | **10** | Documented severe TUI degradation at 30+ parallel sub-agents. Fixed via PR #3902. Essential for advanced workflow users. |
| 5 | [#4178 — Stopship workflow as fleet-backed lane (OPEN)](https://github.com/Hmbown/CodeWhale/issues/4178) | **9** | Dogfooding the new workflow model against real blockers. Tracks whether the Fleet/Lane/Runtime abstraction survives real use. High visibility. |
| 6 | [#4257 — Add xAI (Grok) as a first-class provider (CLOSED)](https://github.com/Hmbown/CodeWhale/issues/4257) | **9** | Completed via PR #4314. xAI now has OAuth device-code flow and provider picker integration. Community had been asking for this since May. |
| 7 | [#4175 — Fleet/Workflow/Lane/Runtime product model (OPEN)](https://github.com/Hmbown/CodeWhale/issues/4175) | **8** | Canonical architecture tracker preventing concept collapse. Links all implementation phases. Core design doc for v0.8.68+. |
| 8 | [#4242 — Termux runtime QA (OPEN)](https://github.com/Hmbown/CodeWhale/issues/4242) | **7** | Android arm64 validation checklist after the build fix (PR #4315). Critical for mobile-first developers. |
| 9 | [#4095 — Default TUI is too busy; compact mode should be standard (OPEN)](https://github.com/Hmbown/CodeWhale/issues/4095) | **7** | Usability regression: the TUI feels chaotic by default. Marked as a 0.8.68 UX bug, not a feature request. Community strongly agrees. |
| 10 | [#4308 — MCP discovery fault tolerance + tool description truncation (OPEN)](https://github.com/Hmbown/CodeWhale/issues/4308) | **1** | Chinese-language report: MCP services that only implement `tools/list` (e.g., IntelliJ IDEA) hang on `resources/list`, blocking init. Also: `codewhale-tui mcp tools` dumps unreadable multi-line tool descriptions. Practical pain for IDE users. |

---

## 4. Key PR Progress (Top 10)

| # | PR | Status | What It Does |
|---|----|--------|--------------|
| 1 | [#4327 — release: v0.8.68](https://github.com/Hmbown/CodeWhale/pull/4327) | **Merged** | Final release prep: version bump, changelog, docs. All feature and CI work already landed. |
| 2 | [#3902 — fix five render/input hot paths](https://github.com/Hmbown/CodeWhale/pull/3902) | **Merged** | Four commits fixing #3896–#3900: redundant sidebar computation, deep-clone on every frame, sync `read_dir` on UI thread, etc. Major TUI responsiveness improvement. Included adversarial multi-agent review. |
| 3 | [#4314 — wire xAI device-code OAuth](https://github.com/Hmbown/CodeWhale/pull/4314) | **Merged** | CLI + TUI commands for xAI OAuth, provider picker integration. Closes #4257. |
| 4 | [#4315 — fix Android/Termux target](https://github.com/Hmbown/CodeWhale/pull/4315) | **Merged** | Makes Android arm64 build bootable: rquickjs bindgen, fix rustls JVM panic, Termux runtime patches. Closes #4236/#4242. |
| 5 | [#4243 — migrate runtime_threads to parking_lot](https://github.com/Hmbown/CodeWhale/pull/4243) | **Merged** | Contributed by `wuisabel-gif`. Four `std::sync::Mutex` → `parking_lot::Mutex` maps in `RuntimeThreadManager`. Finishes §6.1 of the perf roadmap. |
| 6 | [#4313 — rebalance Constitution after ablation](https://github.com/Hmbown/CodeWhale/pull/4313) | **Merged** | Restores 936-word balanced Constitution (was 4,665 → 516 → 936). Fixes eval regressions from overly aggressive trimming. |
| 7 | [#4025 — light-classify CI, stop wasting macOS/Windows runners](https://github.com/Hmbown/CodeWhale/pull/4025) | **Merged** | Prevents `heavy=true` for non-code changes (scripts, docs). Saves ~22m of CI time on lightweight PRs. |
| 8 | [#4310 — cut PR critical path, stop rebuilding nightly](https://github.com/Hmbown/CodeWhale/pull/4310) | **Merged** | Drops redundant nightly rebuilds on merge, optimizes runner scheduling. PR CI wall time reduced from ~19m to ~12m. |
| 9 | [#4325 — fix documented workflow scripts + cancellation](https://github.com/Hmbown/CodeWhale/pull/4325) | **Merged** | Fixes live dogfood findings: all documented imperative Workflow fixtures were unrunnable (wrong signature shape). Also hardens cancellation. |
| 10 | [#4311 — add GPT-5.6 and Muse Spark routes](https://github.com/Hmbown/CodeWhale/pull/4311) | **Merged** | OpenAI GPT-5.6 family and Meta's Muse Spark 1.1 across all supported providers. Keeps pace with model releases. |

---

## 5. Feature Request Trends

| Trend | Signal Strength | Evidence |
|-------|----------------|---------|
| **Multi-agent orchestration (Fleet/Workflow/Lanes)** | 🔥 **Dominant** | #4175, #4178, #4179, #4177 — this is the v0.8.68 centerpiece. Community actively dogfooding and filing edge cases. |
| **Platform expansion** | 🔥 **High** | #4236 (Termux/Android), #4257 (xAI Grok) — users want CodeWhale everywhere OSS models run. |
| **Compact/default TUI ergonomics** | 🔥 **High** | #4095, #4090, #4093, #4094 — `compact` should be the default. Current TUI is overwhelming for daily use. |
| **MCP ecosystem resilience** | 🔄 **Growing** | #4308 (fault tolerance), #4307 (tool description truncation) — as MCP adoption grows, so do edge-case bugs. |
| **Script & tool preference enforcement** | 🔄 **Growing** | #4032 (constitution violations), #4065 (model-policy contract) — users want the agent to *follow instructions*, not invent workarounds. |
| **Security auditing infrastructure** | 🟢 **New** | #4272 (RustSec + cargo-deny) — community contributor `bistack` is pushing for supply-chain security CI. |

---

## 6. Developer Pain Points

| Pain Point | Severity | Details | Issue(s) |
|------------|----------|---------|----------|
| **Agent ignores user intent** | 🔴 **Critical** | CodeWhale consistently writes its own scripts despite user-provided ones, and justifies the behavior. Erosion of trust. | #4032 |
| **TUI information overload** | 🔴 **Critical** | Default view is "too busy"—chaotic, fast-changing, exposes low-level detail. Classified as a bug, not a feature request. | #4095, #4090, #4093 |
| **MCP discovery hangs** | 🟡 **High** | Services that only implement `tools/list` cause `resources/list` to hang, blocking connection init. No fallback. | #4308 |
| **`subagents.v1.json` unbounded growth** | 🟡 **High** | File grows to ~300K lines over days/weeks with no cleanup. Manual empty+restart required. | #4217 |
| **CI turnaround for PRs** | 🟡 **Medium** | Before #4310, PRs took ~19m (5m queue + 14m exec). Now ~12m, but still a bottleneck for iterating. | #4310, #4025 |
| **Rust 1.97 lint breakage** | 🟢 **Low** | New `useless_borrows_in_formatting` lint broke CI on release day. Quick fixes landed in #4312/#4321/#4322, but shows fragility of `-D warnings`. | #4312, #4321, #4322 |

---

## Community Kudos

- **wuisabel-gif** — contributed the `parking_lot` migration in PR #4243, finishing a roadmap item
- **bistack** — submitted security-audit CI (PR #4272), addressing supply-chain risk
- **nsfoxer** — filed detailed MCP resilience issue (#4308) with reproduction steps
- **stream2stream** — escalated the constitution-violation bug (#4032), sparking a 30-comment discussion

---

*Digest generated 2026-07-10 from `Hmbown/CodeWhale` activity. All links point to the canonical GitHub issues.*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*