# AI CLI Tools Community Digest 2026-07-11

> Generated: 2026-07-11 01:28 UTC | Tools covered: 9

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

Here is the cross-tool comparison report based on the provided community digest summaries for July 11, 2026.

---

## Cross-Tool AI CLI Ecosystem Comparison Report
**Date:** 2026-07-11

### 1. Ecosystem Overview

The AI CLI tool ecosystem on July 11, 2026, is experiencing a phase of rapid iteration and significant growing pains. Across all major tools, the community is intensely focused on **agentic control**—managing sub-agent spawning, preventing runaway token/credit consumption, and achieving reliable multi-step workflows. The rollout of next-generation models (e.g., GPT-5.6 Sol/Terra/Luna, Fable 5) is a double-edged sword, bringing powerful new capabilities alongside integration friction, model availability inconsistencies, and unexpected behavioral regressions. A notable undercurrent is a renewed emphasis on security, with several tools shipping critical fixes for path traversal, prompt injection, and TOCTOU vulnerabilities, suggesting that the pace of feature development has outpaced security hardening in some codebases.

### 2. Activity Comparison

| Tool | Hot Issues Updated (24h) | Key PRs Updated (24h) | Release Status (24h) | Key Community Pulse |
|---|---|---|---|---|
| **Claude Code** | 10 | 7 | **2 releases** (v2.1.206, v2.1.207) | High; dominated by unresolved session limit bug (#38335, 792 comments). |
| **OpenAI Codex** | 10 | 10 | **2 alpha releases** (Rust v0.145.0) | High; GPT-5.6 Sol rollout friction and a model-level reasoning bug. |
| **Gemini CLI** | 10 | 10 | **1 nightly release** (v0.52.0-nightly) | High; security hardening and agent reliability regressions are top of mind. |
| **GitHub Copilot CLI** | 10 | 1 | **2 releases** (v1.0.70, v1.0.71-0) | Moderate; TUI stability on Windows/WSL2 is the critical pain point. |
| **Kimi Code CLI** | 0 | 4 | **None** | Low; focused on closing QoL fixes, no major community eruption. |
| **OpenCode** | 10 | 10 | **None** | High; V2 TUI managed service issues and new model integration bugs. |
| **Pi (pi-mono)** | 10 | 10 | **None** | Moderate; GPT-5.6 catalog additions and provider-specific behavior fixes. |
| **Qwen Code** | 10 | 10 | **1 Nightly** (v0.19.8); **v0.19.9 failed** | Moderate; release pipeline fragility and multi-workspace demand. |
| **DeepSeek TUI** | 10 | 10 | **None** (v0.8.68 in integration) | Moderate-high; intense focus on Fleet/Workflow architecture and release blockers. |

### 3. Shared Feature Directions

Several recurring themes appear across multiple tool communities, indicating widespread demand:

1.  **Granular Agent & Sub-agent Control (All Major Tools)**
    - **Pain:** Runaway sub-agents, lack of cancellation, silent cost/token burn, model lock-in for sub-agents.
    - **Specifics:**
        - **Claude Code:** Recursive unbounded sub-agents (#68110); ESC kills all background tasks (#21167).
        - **OpenAI Codex:** GPT-5.6 Sol forces all subagents to be Sol (#31814); request for `escape-to-interrupt` debounce (#12582).
        - **Gemini CLI:** Subagent recovery masking failure (#22323); agents not using user-defined skills autonomously (#21968).
        - **OpenCode:** Request for "Interactive Steering" to intervene mid-task (#19205).
        - **Pi:** Subagent-to-subagent delegation (PR #7756 merged).

2.  **Cross-Platform & Desktop Stability (Claude Code, OpenAI Codex, Copilot CLI, OpenCode, Pi)**
    - **Pain:** Windows/WSL2 terminal issues, macOS regressions, Linux (Wayland) compatibility.
    - **Specifics:**
        - **Claude Code:** Cowork broken on Windows (#74649); console window flashing (#14828).
        - **OpenAI Codex:** Windows app freezes (#20214, #16374); macOS crash on 15.7.7 (#32032).
        - **Copilot CLI:** TUI black-screen on WSL2 (#4069, #4077).
        - **OpenCode:** Windows TUI fails on existing project (#35828); NFS SQLite corruption (#14970).
        - **Pi:** Input line redrawn on every keystroke on Windows (#6300).

3.  **Model Integration & Provider Friction (OpenAI Codex, Copilot CLI, OpenCode, Pi, Qwen Code)**
    - **Pain:** New models (GPT-5.6, Luna, Sol) not uniformly available; OAuth/API key confusion; provider-specific bugs.
    - **Specifics:**
        - **OpenAI Codex:** GPT-5.6 Sol not available on Plus subscriptions (#32023); reasoning token clustering bug (#30364).
        - **Copilot CLI:** Model switching mid-session desired (#3709); BYOK/local provider issues.
        - **Pi:** New model catalogs needed for Copilot/Codex (#6475); compaction fails on Codex models (#6477).

4.  **Security & Safety Hardening (Gemini CLI, Claude Code, DeepSeek TUI)**
    - **Pain:** Path traversal, prompt injection, data corruption, destructive agent behavior.
    - **Specifics:**
        - **Gemini CLI:** Major PR push for path trust, prompt injection sanitization, TOCTOU fixes (#28319, #28353, #28352, #28330).
        - **Claude Code:** Flagging `innerHTML+=` as an XSS sink (PR #76475).
        - **DeepSeek TUI:** Security vulnerability churn (RUSTSEC-2026-0204, RUSTSEC-2026-0187).

### 4. Differentiation Analysis

| Tool | Primary Differentiator | Target User | Technical Approach |
|---|---|---|---|
| **Claude Code** | **Agentic orchestration & multi-model support.** First-class sub-agents, MCP ecosystem, Cowork feature. | Advanced developers & teams needing autonomous task decomposition. | Proprietary, closed-source agent loop with a rich plugin interface. |
| **OpenAI Codex** | **Deep model integration & reasoning.** Tight coupling with GPT-5.x, Computer Use, and VS Code. | Developers deep in the OpenAI ecosystem, seeking maximum model capability. | Proprietary, closed-source; focuses on API-driven agent behavior and IDE integration. |
| **Gemini CLI** | **Security & enterprise alignment.** Heavy focus on vulnerability fixes, structured PRs, and compliance. | Enterprise developers, Google Cloud/Workspace users. | Open-source; emphasizes security, policy engines, and structured agent workflows. |
| **GitHub Copilot CLI** | **GitHub ecosystem integration.** Tight coupling with Copilot, GitHub MCP servers, and GPT-5.6. | GitHub-centric developers, PR workflows, and voice/copilot users. | Closed-source; focuses on GitHub-native features, voice mode, and MCP server connectivity. |
| **Kimi Code CLI** | **Stability & focused UX.** Smaller community, less noise; focuses on fixing core bugs and Web UI polish. | Developers seeking a stable, lower-friction experience. | Open-source; prioritizes fixing long-standing bugs (IME, onboarding) over new features. |
| **OpenCode** | **V2 TUI & managed service architecture.** Heavy investment in a new TUI (V2) and a managed service model. | Developers wanting a modern, web-like terminal experience and hierarchical tasks. | Open-source; building a complex managed service architecture for session and agent management. |
| **Pi (pi-mono)** | **Provider-agnostic & library-first.** Supports many backends (OpenAI, Copilot, Bedrock, OpenRouter) and is embeddable as a library. | Developers needing multi-provider support or embedding a CLI as a library. | Open-source; Bun-based, focuses on provider abstraction, constrained sampling, and RPC. |
| **Qwen Code** | **QwenLM ecosystem & YOLO mode.** Tightly coupled with the Qwen model family; emphasizes headless "YOLO" mode. | Developers using the Qwen model ecosystem, especially for headless/automation tasks. | Open-source; focuses on daemon-based architecture, workspace management, and headless execution. |
| **DeepSeek TUI** | **Fleet/Workflow orchestration.** Cutting-edge "Fleet" product model for structured, multi-agent workflows. | Developers building complex, multi-role software engineering pipelines. | Open-source (Rust); pioneering a formal lane/workflow/runtime architecture. |

### 5. Community Momentum & Maturity

- **Highest Momentum (Fast Iteration, High Engagement):** **DeepSeek TUI** is undergoing a major architectural shift (Fleet/Workflow), with intense triage and release-blocker fixes. **OpenCode** is heavily investing in a V2 TUI, indicating a major product pivot. **Qwen Code** is iterating rapidly on nightly releases and a multi-workspace daemon.
- **High Maturity & Established Communities:** **Claude Code** and **OpenAI Codex** have the most commented issues and largest communities, but this also signals deep frustration with unresolved critical bugs (e.g., Claude Max session limits, Codex Windows stability). They are mature but are testing the patience of their user bases.
- **Rapidly Maturing & Focused:** **Pi** and **Gemini CLI** are showing steady, professional-grade development. Pi’s focus on provider abstraction and library usage suggests a mature architectural vision. Gemini CLI's hard push on security brings a level of rigor not seen in other projects.
- **Niche & Stable:** **Kimi Code CLI** operates in a smaller, quieter corner of the ecosystem, focusing on fundamental quality-of-life fixes rather than chasing the latest model hype.

### 6. Trend Signals

The data from July 11, 2026, reveals several key signals for developers and decision-makers:

- **The "Agentic Control" Gap is the Primary Bottleneck.** The most significant pain point is not model capability, but the ability to manage and control autonomous agents. The demand for granular sub-agent cancellation, cost budgets, and runtime intervention tools is a clear signal that the industry has crossed a threshold: models are powerful enough, but the software engineering for safe agent execution is not yet mature.
- **Cross-Platform Reliability is a Market Differentiator.** Windows and Linux (Wayland) support remains a persistent weakness for all major CLI tools. A tool that delivers a truly stable, first-class experience across all three major operating systems (macOS, Windows, Linux) will have a significant competitive advantage.
- **Model Ecosystem Lock-in is a Growing Friction Point.** The GPT-5.6 Sol rollout has created headaches across the ecosystem, from model unavailability to broken OAuth links. Developers are increasingly seeking provider-agnostic tools (like Pi) or demanding `/model` hot-switching (Copilot CLI) to mitigate the risk of being locked into a single model provider’s issues.
- **Security is Becoming a First-Class Feature, Not an Afterthought.** The flurry of security PRs in Gemini CLI and DeepSeek TUI, coupled with Claude Code’s XSS fix, signals that the community is becoming more sensitive to the attack surface of agentic tools. Supply-chain security (dependency checks) is also gaining traction.
- **The "Productive Headless" Workflow is the Next Frontier.** Qwen Code’s YOLO mode and DeepSeek TUI’s dual workflow feature point to a future where developers want to set a complex task in motion and be notified of the outcome, without needing to baby-sit the terminal. The ability to support reliable, headless execution over long durations will be a key differentiator.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
**Data as of 2026-07-11 | Source: github.com/anthropics/skills**

---

## 1. Top Skills Ranking

The following pull requests represent the most-discussed Skill submissions by community engagement (comments, cross-references, and sustained discussion threads).

### #1298 – `fix(skill-creator): run_eval.py always reports 0% recall`
**Functionality:** Fixes the core evaluation script that powers `run_loop.py` and `improve_description.py`. The bug causes every skill description to score `recall=0%`, rendering the optimization loop effectively random. Patch addresses eval artifact installation, Windows stream reading, trigger detection, and parallel worker isolation.
**Discussion highlights:** Referenced issue #556 (12 comments, 7 👍) — multiple independent reproductions confirm the bug. Debate centers on root cause: missing artifact installation vs. trigger detection logic vs. subprocess pipe handling.
**Status:** OPEN (created 2026-06-10)
🔗 [PR #1298](https://github.com/anthropics/skills/pull/1298)

### #514 – `Add document-typography skill`
**Functionality:** Prevents orphan word wrap, widow paragraphs, and numbering misalignment in AI-generated documents. Targets common typographic defects Claude produces without explicit guidance.
**Discussion highlights:** Strong positive reception — users confirm these issues affect every generated document. Some debate on whether this should be an opt-in skill or built-in default behavior.
**Status:** OPEN (created 2026-03-04)
🔗 [PR #514](https://github.com/anthropics/skills/pull/514)

### #538 – `fix(pdf): correct case-sensitive file references in SKILL.md`
**Functionality:** Fixes 8 case-sensitivity mismatches between SKILL.md references and actual file names (`REFERENCE.md` → `reference.md`, `FORMS.md` → `forms.md`). Critical for Linux/macOS users with case-sensitive filesystems.
**Discussion highlights:** Low controversy — clearly a correctness fix. Attention stems from the fact this broke PDF skill usage entirely on non-Windows systems.
**Status:** OPEN (created 2026-03-06)
🔗 [PR #538](https://github.com/anthropics/skills/pull/538)

### #486 – `Add ODT skill — OpenDocument text creation and template filling`
**Functionality:** Enables creation, reading, filling, and conversion of OpenDocument Format files (.odt, .ods). Supports LibreOffice document workflows and ISO-standard open formats.
**Discussion highlights:** Community demand for open-source office format support is clear. Discussion focuses on template variable syntax and compatibility with LibreOffice versions.
**Status:** OPEN (created 2026-03-01)
🔗 [PR #486](https://github.com/anthropics/skills/pull/486)

### #210 – `Improve frontend-design skill clarity and actionability`
**Functionality:** Rewrites the existing frontend-design skill to ensure every instruction is executable within a single conversation, with specific behavioral guidance rather than abstract principles.
**Discussion highlights:** Meta-discussion about skill design philosophy — how prescriptive should a skill be? The author argues for "actionable specificity" over "educational generality."
**Status:** OPEN (created 2026-01-05)
🔗 [PR #210](https://github.com/anthropics/skills/pull/210)

### #1367 – `feat(skills): add self-audit — mechanical verification + four-dimension reasoning quality gate`
**Functionality:** A universal audit skill that performs mechanical file verification (do claimed outputs exist?) followed by a four-dimension reasoning audit prioritized by damage severity. Works across any project, stack, or model.
**Discussion highlights:** High engagement from power users. Discussion of whether "self-audit" should be a skill or a core framework feature. Related issue #1385 proposes a three-gate pipeline extending this concept.
**Status:** OPEN (created 2026-06-28)
🔗 [PR #1367](https://github.com/anthropics/skills/pull/1367)

### #723 – `feat: add testing-patterns skill`
**Functionality:** Covers full testing stack: Testing Trophy philosophy, AAA pattern, React Testing Library, Playwright E2E, and mocking strategies.
**Discussion highlights:** Broad community interest — testing is a universal need. Debate on scope: some argue for splitting into unit/e2e sub-skills, others prefer comprehensive single skill.
**Status:** OPEN (created 2026-03-22)
🔗 [PR #723](https://github.com/anthropics/skills/pull/723)

### #1302 – `Add color-expert skill`
**Functionality:** Comprehensive color expertise skill covering naming systems (ISCC-NBS, Munsell, XKCD, RAL, Ridgway), color space selection (OKLCH for scales, OKLAB for gradients, CAM16 for vision), accessibility contrast, and color harmony.
**Discussion highlights:** Specialized but enthusiastically received. Community appreciates the depth of color science — references authoritative sources for each recommendation.
**Status:** OPEN (created 2026-06-10)
🔗 [PR #1302](https://github.com/anthropics/skills/pull/1302)

---

## 2. Community Demand Trends

From the Issues tracker, the most-anticipated new Skill directions cluster in five areas:

| Trend | Signal | Key Issues |
|-------|--------|------------|
| **Skill creation tooling** | 5+ issues/PRs about `run_eval.py` bugs, Windows compat, trigger detection | #556, #1169, #1061, #202, #1261 |
| **Security & governance** | Trust boundary abuse (#492), agent safety patterns (#412), access control in document skills (#1175) | #492 (34 comments), #412 |
| **Organizational sharing** | Skills should be shareable at org-level without manual file transfer | #228 (14 comments, 7 👍) |
| **Cross-platform compatibility** | Windows subprocess, encoding, PATHEXT failures | #1061, #1298, #1099, #1050 |
| **Quality assurance** | Self-audit, reasoning gates, output verification | #1385, #1367, #1329 (compact-memory) |

**Emerging pattern:** The community is shifting from "what skills can Claude run" to "how do I trust what Claude produces" — security, auditing, and verification skills are the fastest-growing demand signal.

---

## 3. High-Potential Pending Skills

These open PRs have active discussion and are likely to merge soon:

| PR | Skill | Reason for High Potential |
|----|-------|--------------------------|
| [#514](https://github.com/anthropics/skills/pull/514) | `document-typography` | Addresses universal pain point; no major objections |
| [#723](https://github.com/anthropics/skills/pull/723) | `testing-patterns` | Broadly useful; discussion is about scope refinement, not rejection |
| [#1367](https://github.com/anthropics/skills/pull/1367) | `self-audit` | Novel concept with strong power-user backing; related issue #1385 shows continued development |
| [#1302](https://github.com/anthropics/skills/pull/1302) | `color-expert` | Deep, well-researched; specialized but no opposition |
| [#486](https://github.com/anthropics/skills/pull/486) | `odt` | Addresses clear gap in open-format support |
| [#83](https://github.com/anthropics/skills/pull/83) | `skill-quality-analyzer` + `skill-security-analyzer` | Meta-tools for skill ecosystem health; slow but no blockers |

**Risk factor:** Several skill PRs (#1298, #1323, #1261, #1099) are blocked on the `run_eval.py` reliability issue — until that's resolved, the skill optimization loop is effectively broken for all contributors.

---

## 4. Skills Ecosystem Insight

**The community's most concentrated demand is for tooling that makes Skill creation reliable and trustworthy, rather than for individual domain-specific Skills — with the `skill-creator` evaluation pipeline defects (#556, #1298, #1169) acting as the single largest bottleneck blocking the entire contribution ecosystem.**

---

# Claude Code Community Digest — 2026-07-11

## Today's Highlights
Two minor releases shipped today (v2.1.206, v2.1.207), bringing auto-mode to Bedrock/Vertex/Foundry without opt-in and adding `/doctor` checks for bloated `CLAUDE.md` files. The community remains laser-focused on the still-unresolved Claude Max session limit bug (#38335, 792 comments, 468 👍), while emerging reports of sub-agent runaway token burn and Windows Cowork failures signal growing pains in the agentic and cross-platform features.

---

## Releases

### v2.1.207
[GitHub Release](https://github.com/anthropics/claude-code/releases/tag/v2.1.207)
- **Auto mode now GA on Bedrock, Vertex AI, and Foundry** — the `CLAUDE_CODE_ENABLE_AUTO_MODE` opt-in is no longer required. Can be disabled via `disableAutoMode` in settings.
- Fixed **terminal freezing and keystroke lag** when streaming responses containing long lists, tables, or paragraphs.

### v2.1.206
[GitHub Release](https://github.com/anthropics/claude-code/releases/tag/v2.1.206)
- **`/cd` now suggests directory paths**, matching `/add-dir` behavior.
- **New `/doctor` command** — detects and proposes trimming checked-in `CLAUDE.md` files by cutting content that Claude could derive from the codebase itself.
- **`/commit-push-pr` now auto-allows `git push`** to the repo's configured remote.

---

## Hot Issues (10 selected)

### 1. Claude Max session limits exhausted abnormally fast — #38335
[Issue](https://github.com/anthropics/claude-code/issues/38335)
- **Status:** OPEN | **Comments:** 792 | **👍:** 468
- **Why it matters:** The most-commented issue in the repo, unresolved since March. Users on Claude Max plans report hitting session limits far faster than expected when using the CLI. Persistent community frustration and no confirmed fix yet.

### 2. No response from API error when Advisor triggers — #69238
[Issue](https://github.com/anthropics/claude-code/issues/69238)
- **Status:** OPEN | **Comments:** 47 | **👍:** 76
- **Why it matters:** Advisor (using Opus 4.8) frequently returns `No response from API — Retrying in 2m 25s`, even on healthy networks. Affects users with Sonnet as their base model.

### 3. Missing HCS services: vfpext — Cowork not working on Windows 11 — #74649
[Issue](https://github.com/anthropics/claude-code/issues/74649)
- **Status:** OPEN | **Comments:** 43 | **👍:** 0
- **Why it matters:** Cowork feature completely broken on Windows 11 Pro due to missing HCS virtualization services. Significant blocker for Windows-based team collaboration.

### 4. Console window flashing when executing tools on Windows — #14828
[Issue](https://github.com/anthropics/claude-code/issues/14828)
- **Status:** OPEN | **Comments:** 40 | **👍:** 33
- **Why it matters:** A 7-month-old Windows bug — each tool execution causes a console window to flash, severely disrupting UX. Has a reproduction case, but no fix yet.

### 5. Sub-agents recursively spawn unbounded child agents — #68110
[Issue](https://github.com/anthropics/claude-code/issues/68110)
- **Status:** OPEN | **Comments:** 10 | **👍:** 8
- **Why it matters:** General-purpose sub-agents can recursively call the `Agent` tool, creating exponential fan-out with no depth/count limits. Massive token burn with no cancellation path.

### 6. Fable 5: 16 min of silent tool calls followed by user question — #66960
[Issue](https://github.com/anthropics/claude-code/issues/66960)
- **Status:** OPEN | **Comments:** 9 | **👍:** 5
- **Why it matters:** During incident response, Fable 5 spent 16 minutes on silent tool calls, then asked the user a question about never-shared findings. Raises concerns about model behavior under pressure.

### 7. Mouse click to refocus triggers permission prompt — #71539
[Issue](https://github.com/anthropics/claude-code/issues/71539)
- **Status:** OPEN | **Comments:** 8 | **👍:** 17
- **Why it matters:** On Linux, clicking into the terminal to regain focus accidentally fires permission prompts. Simple UX regression that breaks workflow flow.

### 8. ESC key kills ALL background tasks — #21167
[Issue](https://github.com/anthropics/claude-code/issues/21167)
- **Status:** OPEN | **Comments:** 7 | **👍:** 9
- **Why it matters:** Pressing ESC kills all running sub-agents simultaneously. No granular cancellation — one accidental keypress destroys parallel workflows.

### 9. Task output files grow unboundedly, filling entire disk — #41737
[Issue](https://github.com/anthropics/claude-code/issues/41737)
- **Status:** OPEN | **Comments:** 7 | **👍:** 1
- **Why it matters:** Critical severity — tasks in `/private/tmp/claude/` can grow to 278 GB in minutes, causing complete disk exhaustion on macOS.

### 10. Assistant text blocks silently dropped with adaptive thinking — #74260
[Issue](https://github.com/anthropics/claude-code/issues/74260)
- **Status:** OPEN | **Comments:** 5 | **👍:** 0
- **Why it matters:** With Fable 5 adaptive thinking, text blocks that follow thinking blocks can be silently dropped — not rendered and missing from transcript JSONL. Data-loss bug.

---

## Key PR Progress

### 1. feat: open source claude code ✨ — #41447
[PR](https://github.com/anthropics/claude-code/pull/41447)
Closes five long-standing feature requests (#59, #456, #2846, #22002, #41434). A community open-source wrapper/launcher for Claude Code. Still open after 3+ months.

### 2. Flag innerHTML/outerHTML += append sink — #76475
[PR](https://github.com/anthropics/claude-code/pull/76475)
Fixes a security-guidance plugin bug where `innerHTML +=` patterns were missed by substring matching. Prevents XSS detection gaps.

### 3. Add Claude Code Launcher — Windows CLI — #76394
[PR](https://github.com/anthropics/claude-code/pull/76394)
A standalone PowerShell-based Windows CLI launcher with 14 interactive menu options. Community-driven Windows UX improvement.

### 4. Document Remote Control background-task panel — #76298
[PR](https://github.com/anthropics/claude-code/pull/76298)
Updates docs for the web/mobile background-task panel introduced in v2.1.205. Covers task status sync behavior.

### 5. Compound-command pre-flight bash validator — #76289
[PR](https://github.com/anthropics/claude-code/pull/76289)
Extends the bash command validator example to detect chaining (`;`, `&&`, `||`), pipelines (with read-only allowlist), active command substitution, and `find -exec`. Demonstrates deny-and-steer patterns.

### 6. Harden security-guidance findings contract — #76274
[PR](https://github.com/anthropics/claude-code/pull/76274)
Security-guidance reviewers now resolve paths against the repo root and validate the findings array contract. Prevents path-based false positives/negatives in agentic reviews.

### 7. (Additional PRs from data) — Additional items from the 6-PR set cover documentation, security hardening, and Windows support.

---

## Feature Request Trends

1. **Configurable mouse interaction levels** — Multiple requests (#70539, #76528) ask for scroll-only mouse modes, click-to-focus without triggering actions, and granular permission dialogs that don't steal focus.

2. **Granular background task management** — Users want selective sub-agent cancellation (#21167), the ability to cancel runaway agents (#75314), and per-task controls in the background-task panel.

3. **MCP channel/trace propagation** — Requests (#76391, #71792) ask for session trace context injection into MCP tool calls and proper `claude/channel` support in development channels.

4. **Cross-platform parity** — Persistent Windows-specific requests for console stabilization (#14828), Cowork support (#74649), and OAuth refresh fixes (#76544).

5. **Cost controls and guardrails** — Recursive agent loops (#68110), unbounded disk usage (#41737), and session limit exhaustion (#38335) drive demand for better cost budgeting and runaway-detection.

---

## Developer Pain Points

| Pain Point | Related Issues | Frequency |
|---|---|---|
| **Session/plan limits drain too fast** | #38335 (792 comments) | 🔴 Critical |
| **Runaway agents (recursive, stuck, token burn)** | #68110, #75314, #21167 | 🔴 High |
| **Windows console / Cowork broken** | #14828, #74649 | 🟡 Medium |
| **Mouse interaction UX regressions** | #71539, #70539, #76528 | 🟡 Medium |
| **Data loss (silent text drops)** | #74260 | 🟡 Medium |
| **Advisor/Opus API reliability** | #69238, #76189 | 🟡 Medium |
| **Login/auth failures (magic link, org policies)** | #68861, #74714 | 🟢 Low |
| **Plugin/extension rendering bugs** | #70438, #73939 | 🟢 Low |

The dominant theme this week: **agentic control**. The community is deeply frustrated by models that spawn unbounded sub-agents, burn through session limits without warning, and offer no granular cancellation. The Claude Max limit issue (#38335) remains the single most impactful unresolved problem, now in its fourth month with 792 comments.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest
**Date:** 2026-07-11

---

## Today's Highlights

The community is buzzing around **GPT-5.6 Sol** rollout friction, with major issues on subagent model selection and CLI compatibility. A potent bug report reveals possible **reasoning-token clustering** in GPT-5.5 Codex at fixed boundaries (516/1034/1552), which may degrade complex task performance. Meanwhile, several pull rolls from the `copyberry` bot are shipping critical fixes for subagent environment restrictions, reasoning summaries, and model capacity retries.

---

## Releases

Two alpha releases were published for the Rust package:

- **[rust-v0.145.0-alpha.4](https://github.com/openai/codex/releases/tag/rust-v0.145.0-alpha.4)**
- **[rust-v0.145.0-alpha.3](https://github.com/openai/codex/releases/tag/rust-v0.145.0-alpha.3)**

No changelogs or descriptions were provided beyond the version bump.

---

## Hot Issues (Top 10)

1. **[#30364](https://github.com/openai/codex/issues/30364) — GPT-5.5 reasoning-token clustering at fixed boundaries**  
   **Why it matters:** Users report that `reasoning_output_tokens` spike unnaturally at 516, 1034, and 1552, coinciding with degraded performance on complex tasks. This is a *model-behavior* bug that could indicate a hard truncation or quantization issue on OpenAI’s side.  
   **Community:** 183 comments, 283 👍 – highest engagement this week.

2. **[#31814](https://github.com/openai/codex/issues/31814) — GPT-5.6 Sol forces all subagents to be Sol instances**  
   **Why it matters:** MultiAgent V2 automatically locks subagent models to Sol, ignoring user configuration. This breaks workflows that need heterogeneous agent teams (e.g., cheap models for subtasks).  
   **Community:** 34 comments, 83 👍.

3. **[#28982](https://github.com/openai/codex/issues/28982) — Windows native sandbox setup fails with missing module**  
   **Why it matters:** A regression in the Windows app (26.616.3309.0) prevents sandbox from launching entirely, blocking all Computer Use workflows for affected users.  
   **Community:** 33 comments.

4. **[#20214](https://github.com/openai/codex/issues/20214) — Codex app freezes/stutters on Windows 11**  
   **Why it matters:** Long-standing performance degradation on high-spec machines (Ryzen 5, 32GB RAM) remains unresolved, eroding trust in the desktop app’s reliability.  
   **Community:** 32 comments, 45 👍.

5. **[#28969](https://github.com/openai/codex/issues/28969) — Auto-resolve for questions after 60 seconds is undesirable**  
   **Why it matters:** The CLI auto-closes interactive questions, preventing users from providing context or clarifications. This feature is heavily requested as a configurable toggle.  
   **Community:** 22 comments, 104 👍.

6. **[#32032](https://github.com/openai/codex/issues/32032) — Computer Use 1.0.1000366 crashes on macOS 15.7.7**  
   **Why it matters:** A Swift Concurrency symbol resolution failure crashes the MCP/UI control at launch, rendering Computer Use entirely unusable on the latest macOS.  
   **Community:** 14 comments.

7. **[#16374](https://github.com/openai/codex/issues/16374) — Codex desktop app freezes Windows shell/UI**  
   **Why it matters:** A bizarre bug where the entire Windows UI freezes until Codex Settings is opened. This suggests a resource lock or DWM interaction issue.  
   **Community:** 26 comments.

8. **[#18993](https://github.com/openai/codex/issues/18993) — Unable to open past conversation history in VS Code extension**  
   **Why it matters:** A regression breaking session persistence. Now closed but the volume (49 comments) indicates this was a widespread blocker for IDE users.  
   **Community:** 49 comments (CLOSED).

9. **[#24069](https://github.com/openai/codex/issues/24069) — Regression: subagent spawning broken for Ollama in CLI 0.133.0**  
   **Why it matters:** The CLI update broke local model providers (Ollama, Google Vertex), forcing users to pin to an older version. No fix yet.  
   **Community:** 8 comments.

10. **[#32023](https://github.com/openai/codex/issues/32023) — "Why I cannot use 5.6 Sol" on Windows Plus subscription**  
    **Why it matters:** Users with unlocked subscriptions see model errors or the model is simply not available. This reflects a broader rollout/policy gap.  
    **Community:** Low comments but high frustration signal.

---

## Key PR Progress (Top 10)

1. **[#32302](https://github.com/openai/codex/pull/32302) — Prefer Codex home socket for Unix IDE context**  
   **Summary:** Moves the IPC socket to `CODEX_HOME/ipc/ipc.sock` with fallback to legacy paths. Improves reliability for per-user and root UID 0 setups.

2. **[#32301](https://github.com/openai/codex/pull/32301) — Trust hooks from materialized workspace plugins**  
   **Summary:** Carries plugin metadata through refresh callbacks so hook hashes are recorded automatically, reducing manual trust steps.

3. **[#32290](https://github.com/openai/codex/pull/32290) — Respect model support for reasoning summaries**  
   **Summary:** Adds `supports_reasoning_summary_parameter` to model metadata to avoid sending `reasoning.summary` to models that reject it (e.g., Spark). Backward compatible.

4. **[#32288](https://github.com/openai/codex/pull/32288) — Make GPT-5.6 Sol the default Bedrock model**  
   **Summary:** Promotes Sol, Terra, and Luna variants over GPT-5.5/5.4 in the Amazon Bedrock catalog. Ships with bundled descriptions.

5. **[#31662](https://github.com/openai/codex/pull/31662) — Allow restricting subagent environments**  
   **Summary:** Adds `environment_ids` to `spawn_agent` for both v1 and v2, enabling fine-grained control over which environments child agents can access. Addresses core Sol subagent override.

6. **[#31058](https://github.com/openai/codex/pull/31058) — Retry model capacity errors**  
   **Summary:** Treats model-capacity failures as recoverable, adding up to three retry attempts (30s, 2min, 5min). Keeps the turn alive instead of aborting.

7. **[#30463](https://github.com/openai/codex/pull/30463) — Fix autocomplete targeting between mentions**  
   **Summary:** Corrects cursor placement logic so unbound skill mentions are properly targeted when cursor sits between two mentions. Reviewed and merged.

8. **[#30882](https://github.com/openai/codex/pull/30882) — Preserve line endings when applying patches**  
   **Summary:** Disabled by default behind a feature flag. When enabled, preserves LF/CRLF/CR per line during patch application — significant for Windows cross-platform dev.

9. **[#31437](https://github.com/openai/codex/pull/31437) — Require elevated-only Windows policy for network proxies**  
   **Summary:** Fixes UAC prompt spam by ensuring proxy enforcement only promotes to elevated sandbox when the sandbox level itself is elevated.

10. **[#32274](https://github.com/openai/codex/pull/32274) — Remove the personality migration**  
    **Summary:** Removes the automatic `personality = "pragmatic"` migration for existing sessions. Stops the TUI and app-server from inspecting past sessions at startup.

---

## Feature Request Trends

- **Configurable auto-resolve timeout** ([#28969](https://github.com/openai/codex/issues/28969), 104 👍) – Users want to disable or extend the 60-second auto-resolve for interactive CLI questions.
- **Subagent model flexibility** ([#31814](https://github.com/openai/codex/issues/31814), [#17598](https://github.com/openai/codex/issues/17598)) – Strong demand for allowing different models per subagent, especially for cost/performance trade-offs and local models.
- **Escape-to-interrupt debounce** ([#12582](https://github.com/openai/codex/issues/12582)) – A simple UX ask: require double-press Escape to prevent accidental interruptions.
- **Desktop performance parity** – Multiple issues ([#20214](https://github.com/openai/codex/issues/20214), [#16374](https://github.com/openai/codex/issues/16374)) plead for the Windows app to match macOS in smoothness.

---

## Developer Pain Points

1. **Windows desktop stability** — The app freezes, stutters, and crashes with alarming frequency (5+ distinct issues), even on high-end hardware. Several issues involve shell/UI lock-ups.
2. **CLI regression velocity** — Updates (0.133.0, 0.141.0) consistently break local model providers, subagent spawning, and custom hooks. Developers are forced to pin old versions.
3. **GPT-5.6 Sol rollout friction** — The model is not uniformly available across subscriptions (Plus vs. Pro), CLI versions, and platforms. Subagent lock-in to Sol is the biggest blocker.
4. **Hook and tool dispersal issues** — `codex exec` does not dispatch hooks, thread tools lose handlers mid-session, and automation tools are exposed without handlers. This suggests a fractured tool registration architecture.
5. **macOS regressions** — Swift Concurrency symbol resolution failures and missing MCP handlers on macOS 15.x indicate insufficient pre-release testing on the latest Apple OS.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-07-11

## Today's Highlights

The team pushed a nightly release with a critical fix for thought leakage in scrubbed conversation history, alongside a refactor to exclude transient CI files from workspace context. Meanwhile, a concentrated wave of security-focused pull requests landed, addressing path traversal, TOCTOU race conditions, and prompt injection vectors. Community tension remains high around subagent reliability, with several long-standing bugs (MAX_TURNS misreporting as success, agent hangs, and browser subagent failures on Wayland) still open for retesting.

## Releases

**v0.52.0-nightly.20260710.ga4c91ce19** — [Release link](https://github.com/google-gemini/gemini-cli/releases/tag/v0.52.0-nightly.20260710.ga4c91ce19)

- `fix(core)`: Strip thoughts from scrubbed history turns and resolve thought leakage (PR #27971 by @amelidev)
- `refactor`: Exclude transient CI configuration files from workspace context (by @DavidAPierce)

## Hot Issues

1. **[#25693 — Skills discovery fails when 'description' in SKILL.md frontmatter is a single line](https://github.com/google-gemini/gemini-cli/issues/25693)**  
   *Priority p2, area/extensions, good first issue*  
   A niche but blocking bug: skill discovery completely breaks if the YAML frontmatter `description` field is a single line (vs. a multi-line block). With 21 comments and flagged as "good first issue," this is the most actively discussed open issue. Community impact is moderate — anyone authoring skills with simple descriptions will silently fail to register them.

2. **[#22323 — Subagent recovery after MAX_TURNS is reported as GOAL success, hiding interruption](https://github.com/google-gemini/gemini-cli/issues/22323)**  
   *Priority p1, area/agent*  
   A deceptive bug where a subagent that hits its turn limit still reports `status: "success"` with `Termination Reason: "GOAL"`. This undermines trust in agent output, as failures are silently masked. With 10 comments and 2 👍, the community clearly wants this resolved — it's been open since March.

3. **[#21409 — Generalist agent hangs](https://github.com/google-gemini/gemini-cli/issues/21409)**  
   *Priority p1, area/agent*  
   Users report the generalist agent hangs indefinitely on simple tasks like folder creation. Workaround: disable subagent delegation. With 8 👍, this is the most upvoted open bug. The hang can last up to an hour, making the tool effectively unusable for many workflows.

4. **[#25166 — Shell command execution gets stuck with "Waiting input" after command completes](https://github.com/google-gemini/gemini-cli/issues/25166)**  
   *Priority p1, area/core*  
   After executing trivial shell commands, Gemini CLI hangs, falsely showing "Awaiting user input." This is a high-friction UX failure for anyone relying on shell automation. 3 👍 and 4 comments suggest this is a frequent annoyance.

5. **[#21983 — Browser subagent fails on Wayland](https://github.com/google-gemini/gemini-cli/issues/21983)**  
   *Priority p1, area/agent, agent/browser*  
   The browser subagent crashes on Wayland display servers with a false "GOAL" termination. Linux users on modern desktops are directly affected, and the issue has been pending retesting since March.

6. **[#21968 — Gemini does not use skills and sub-agents enough](https://github.com/google-gemini/gemini-cli/issues/21968)**  
   *Priority p2, area/agent*  
   Anecdotal but damning: even with custom skills and sub-agents defined, Gemini rarely uses them autonomously. Users must explicitly instruct it, defeating the purpose of skill discovery. This speaks to a fundamental gap in the agent orchestration layer.

7. **[#22672 — Agent should stop/discourage destructive behavior](https://github.com/google-gemini/gemini-cli/issues/22672)**  
   *Priority p2, area/agent, customer-issue*  
   The agent occasionally runs `git reset --force` or other destructive commands when safer alternatives exist. Community asks for built-in safeguards, especially for database and git operations. 1 👍 signals growing concern over safety, not just reliability.

8. **[#22465 — Gemini CLI gets stuck at interactive prompt creating vite app](https://github.com/google-gemini/gemini-cli/issues/22465)**  
   *Priority p2, area/agent*  
   Creating a Vite app triggers an interactive prompt that the agent can't handle. This is a common real-world workflow that breaks entirely, highlighting the agent's fragility with interactive subprocesses.

9. **[#22093 — Subagents running without permission since v0.33.0](https://github.com/google-gemini/gemini-cli/issues/22093)**  
   *Priority p2, area/agent*  
   After an automatic update, subagents began executing despite all configurations disabling them. Users expecting only MCP functionality were surprised by unauthorized agent delegation — a clear regression in permission enforcement.

10. **[#20079 — Symlinked agent files not recognized](https://github.com/google-gemini/gemini-cli/issues/20079)**  
    *Priority p2, area/agent*  
    `~/.gemini/agents/filename.md` symlinks are silently ignored. This blocks users who manage their agent definitions in version-controlled directories and use symlinks to activate them. Simple to fix, but open since February.

## Key PR Progress

1. **[#28316 — Fix task cancellation in a2a-server to stop ghost executions](https://github.com/google-gemini/gemini-cli/pull/28316)**  
   *size/m/l, open*  
   Fixes a critical bug where canceling a task in Agent Mode left the execution stream running, causing "ghost executions." Also addresses race conditions, memory leaks, and a use-after-free vulnerability.

2. **[#28319 — Enforce path trust check before environment loading in a2a-server](https://github.com/google-gemini/gemini-cli/pull/28319)**  
   *size/m/l/xl, open*  
   Refactors `CoderAgentExecutor` to check workspace path trust before loading environment variables, using `AsyncLocalStorage` for isolation. Hardens the agent against malicious workspace configs.

3. **[#28353 — Prevent path traversal in restore command](https://github.com/google-gemini/gemini-cli/pull/28353)**  
   *size/s, open*  
   Defense-in-depth fix: the `restore` command in a2a-server now normalizes and validates paths, blocking `../../../etc/passwd` attacks.

4. **[#28352 — Sanitize issue titles against prompt injection in caretaker agent](https://github.com/google-gemini/gemini-cli/pull/28352)**  
   *size/s, open*  
   Escapes `</untrusted_context>` tags in issue titles before passing them to the ingestion service. Closes a prompt injection gap in the caretaker automation pipeline.

5. **[#28345 — Implement LLM triage orchestrator for caretaker](https://github.com/google-gemini/gemini-cli/pull/28345)**  
   *size/l, open*  
   New `triage_orchestrator.py` using Antigravity SDK with structured GCS logging. Aims to automate issue triage via LLM inference — a move toward self-maintaining bot infrastructure.

6. **[#28304 — Show clear message when account has no Code Assist tier on /privacy](https://github.com/google-gemini/gemini-cli/pull/28304)**  
   *priority/p1, area/core, closed*  
   Previously, `/privacy` on Workspace/enterprise accounts showed a raw backend error. Now displays a user-friendly message explaining the missing tier.

7. **[#28330 — Set token file mode atomically to close TOCTOU window](https://github.com/google-gemini/gemini-cli/pull/28330)**  
   *priority/p2, area/security, open*  
   Fixes a time-of-check/time-of-use vulnerability where auth-token port files were briefly world-readable between `writeFile` and `chmod`.

8. **[#28349 — Guard customDeepMerge against circular references](https://github.com/google-gemini/gemini-cli/pull/28349)**  
   *priority/p2, area/core, open*  
   Fixes a crash (`RangeError: Maximum call stack size exceeded`) when settings contain circular references. Adds cycle detection to the merge function.

9. **[#28348 — Fix MaxListenersExceededWarning and infinite auth loop on Windows](https://github.com/google-gemini/gemini-cli/pull/28348)**  
   *area/core, open*  
   Addresses two critical issues: runaway listener warnings causing potential infinite API retry loops, and an infinite OAuth loop on Windows after successful authentication.

10. **[#28240 — Add support for AGENTS.md out of the box](https://github.com/google-gemini/gemini-cli/pull/28240)**  
    *priority/p1/p2, area/core/agent, open*  
    Previously, `AGENTS.md` was ignored unless explicitly listed in `settings.json`. This PR adds it to the default context file array alongside `GEMINI.md`, making agent definitions accessible by default.

## Feature Request Trends

- **AST-aware codebase understanding**: Several issues (e.g., #22745, #22746) push for Abstract Syntax Tree-aware file reads and codebase mapping to reduce turn count and noise. This is a recurring theme — the community wants semantic, not just lexical, context.
- **Component-level evaluation infrastructure**: Issue #24353 and related EPICs call for structured, automated evaluation pipelines for agent behavior, beyond the current 76 behavioral tests. The goal is reliable regression detection across all supported Gemini models.
- **Self-awareness and introspection**: Issues like #21432 and #22598 ask the agent to understand its own mechanics — accurate CLI flags, hotkeys, and subagent trajectory visibility via `/chat share`. The community wants the tool to be its own documentation.
- **Policy and safety layer**: #22672 and the policy engine docs PR (#28244) indicate growing demand for declarative safety rules — preventing destructive commands (`git reset --force`, `rm -rf /`) without explicit user confirmation.
- **Memory system robustness**: Issues #26522, #26525, and #26523 from @SandyTao520 highlight demand for deterministic redaction, quarantine of invalid patches, and preventing infinite retries on low-signal sessions in Auto Memory.

## Developer Pain Points

1. **Agent reliability regressions**: Multiple P1 bugs (generalist hangs, MAX_TURNS masking, shell command stuck) erode trust. Users report the agent works initially but degrades after updates, with subagent permissions flipping unexpectedly.
2. **Subagent coordination failure**: The agent's reluctance to use custom skills autonomously (#21968) and its inability to handle interactive prompts (#22465) make it unreliable for multi-step workflows.
3. **Terminal and display issues**: High-priority bugs on Wayland (#21983), terminal resize flicker (#21924), and corruption after exiting external editors (#24935) suggest the terminal integration layer is fragile.
4. **Silent failures**: Issues like symlinks not being recognized (#20079), skills failing on single-line descriptions (#25693), and ignored `settings.json` overrides (#22267) all result in silent misbehavior — no error, just unexpected results.
5. **Security concerns**: The flurry of security PRs today (path traversal, TOCTOU, prompt injection, circular reference crash) suggests the codebase has accumulated technical debt in input validation and state management.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-07-11

## Today's Highlights
Two rapid releases landed in the last 24 hours (v1.0.71-0, hot on the heels of v1.0.70), bringing **GPT-5.6 model support**, a redesigned `/settings` dashboard with pinned prompts and repo-scoped tabs, and lighter default install guidance. However, the community is ablaze with **TUI stability issues** on Windows Terminal and WSL2 — multiple critical reports describe mid-session black screens and unresponsive terminals that require `--resume` recovery, with 8+ upvotes and urgent triage tags.

---

## Releases
### v1.0.71-0 (2026-07-11)
- **Added**: Pinned prompts setting in `/settings`; Repo and Repo (local) scope tabs on dashboard
- **Improved**: Uses targeted validation commands and lighter install guidance by default; closes sessions with `ctrl+x → x` and hides with `ctrl+x → h`

### v1.0.70 (2026-07-09)
- **Added**: GPT-5.6 model support
- **Improved**: Single `Error` prefix for MCP/skill failures; shows real parse errors for malformed custom agents; `web_fetch` works through mandatory HTTPS proxies; hides `/search` on Gists tab; treats superseded subagent runs cleanly

---

## Hot Issues (Top 10 Noteworthy)

1. **#4069 — TUI wedges mid-turn on WSL2 + Windows Terminal** [OPEN] [👍 8]
   Screen clears, input dies, `Ctrl+C` ignored. `write EIO` on stdout + `EPIPE` on Rust JSON-RPC transport. A top-priority triage issue affecting WSL2 users running `claude-opus-4.7`.  
   [github/copilot-cli Issue #4069](https://github.com/github/copilot-cli/issues/4069)

2. **#2739 — `xhigh` reasoning removed for GPT-5.4 and GPT-5.3-codex** [CLOSED] [👍 12]
   Hotly contested: users call the removal “unacceptable” and models “useless without xhigh reasoning.” High community engagement with 12 upvotes.  
   [github/copilot-cli Issue #2739](https://github.com/github/copilot-cli/issues/2739)

3. **#4024 — Voice mode: all bundled ASR models fail silently** [OPEN]
   `nemotron-3.5-asr-streaming-0.6b` and `nemotron-speech-streaming` return empty transcriptions. Root cause suspected in `MultiModalProcessor` routing bug for `RNNT`.  
   [github/copilot-cli Issue #4024](https://github.com/github/copilot-cli/issues/4024)

4. **#4077 — TUI black-screen hang mid-turn in 1.0.70-0 (Windows Terminal)** [OPEN] [👍 3]
   Content is intact but invisible; recoverable via `--resume`. Linked to #4069, suggesting a broader terminal-rendering regression on Windows.  
   [github/copilot-cli Issue #4077](https://github.com/github/copilot-cli/issues/4077)

5. **#3709 — Allow `/model` to switch between BYOK/local providers mid-session** [OPEN] [👍 17]
   Most-upvoted open feature request. BYOK pins to a single model; `/model` excludes local providers. Users want to hot-swap between GitHub-hosted and self-hosted models.  
   [github/copilot-cli Issue #3709](https://github.com/github/copilot-cli/issues/3709)

6. **#4091 — Standalone binary removed from `linuxmusl-x64` release tarballs** [CLOSED]
   Breaking change for Alpine Linux users — v1.0.70 tarballs no longer contain a precompiled binary. Critical for containerized workflows.  
   [github/copilot-cli Issue #4091](https://github.com/github/copilot-cli/issues/4091)

7. **#3024 — Too many MCP servers causes continuous context compaction** [OPEN]
   94k out of 128k context used. Agent enters degenerate state without warning. Users need detection and graceful degradation.  
   [github/copilot-cli Issue #3024](https://github.com/github/copilot-cli/issues/3024)

8. **#3331 — Feature request: auto-update plugins on CLI startup** [OPEN] [👍 4]
   Marketplace plugins require manual `copilot plugin update`. Teams can’t guarantee consumers are on the latest version.  
   [github/copilot-cli Issue #3331](https://github.com/github/copilot-cli/issues/3331)

9. **#4089 — Atlassian MCP server: OAuth succeeds but zero tools exposed** [OPEN]
   Other HTTP MCP servers (LeanIX, Lucid) work fine. OAuth flow seems incomplete — tools never load.  
   [github/copilot-cli Issue #4089](https://github.com/github/copilot-cli/issues/4089)

10. **#4093 — `web_search` tool returns fabricated hallucinated answers** [OPEN]
    When retrieval finds nothing, the tool emits confident, detailed, entirely fabricated responses with citations. Dangerous for production use.  
    [github/copilot-cli Issue #4093](https://github.com/github/copilot-cli/issues/4093)

---

## Key PR Progress

1. **#2565 — `install: guard against duplicate PATH entries on reinstall`** [OPEN]
   Running installer twice appends duplicate `copilot` PATH lines. Fix checks for existing entry before appending.  
   [github/copilot-cli PR #2565](https://github.com/github/copilot-cli/pull/2565)

*(Only 1 PR was updated in the last 24h. Additional active PRs from prior days are not shown due to data constraints. Check the repo for the full list.)*

---

## Feature Request Trends

- **Cross-app session sync** (#4082): Users want CLI sessions visible in Copilot Desktop and vice versa. High-value for multi-surface workflows.
- **Auto-update plugins** (#3331): Marketplace plugin consumers want automatic updates — teams currently have no rollout guarantees.
- **Mid-session model switching** (#3709): `/model` should include BYOK/local providers, not just GitHub-hosted models. 17 upvotes.
- **Dynamic context injection in Skills** (#4088): Proposes `!command` placeholders inside `SKILL.md` for injecting shell output.
- **Voice mode enhancements** (#4090, #4092): Auto-submit on spacebar release (PTT); temporary mute of system playback during voice capture.
- **Configurable MCP tools for built-in agents** (#4076): Research agent should expose user-configured MCP servers, not just hardcoded `github/*` and `web/grep/glob/view`.

---

## Developer Pain Points

1. **TUI instability on Windows/WSL2** (#4069, #4077): Mid-session black screens, dead input, ignored `Ctrl+C`. Requires `--resume` recovery — a critical reliability issue for daily drivers.
2. **MCP server OAuth failures** (#4084, #4085, #4086, #4089): OAuth flow either doesn’t complete, drops after ~90s, or completes silently without exposing tools. Multiple reports across different MCP servers.
3. **Voice mode broken on corporate proxies** (#4083, #4024): ASR download fails `ENOTFOUND` behind proxies; bundled ASR models return empty transcriptions.
4. **Context compaction with many MCP servers** (#3024): No warning when context window is exceeded — agent enters degenerate state silently.
5. **`web_search` hallucination** (#4093): The tool fabricates answers with confidence when retrieval yields nothing, undermining trust in AI-powered search.
6. **Session picker regression** (#4071): `/session` and `/resume` only show the current session due to experimental flight `copilot_cli_remove_cwd_listing`. Prior sessions exist on disk but are hidden.
7. **Scheduled prompts kill queue** (#4078): `/every` or `/after` firing discards the pending prompt queue — queued items are lost.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

Here is the **Kimi Code CLI Community Digest** for **2026-07-11**.

***

## Kimi Code CLI Community Digest – 2026-07-11

### 1. Today's Highlights
The project remains stable with no new releases in the last 24 hours, but the engineering team is actively closing out long-standing quality-of-life fixes. A critical bug fix landed regarding Safari IME composition (PR #1815), while a new batch of PRs targets core developer setup pain points, including a more actionable error message for fresh installs and a fix for tools breaking during the `/init` process.

### 2. Releases
**None.** No new versions were published in the last 24 hours.

### 3. Hot Issues
*No new *Issues* were created or updated in the last 24 hours (Total: 0 items).* The community's recent focus has been on bug reports that are now being addressed via PRs (see below).

### 4. Key PR Progress
The following pull requests have been updated in the last 24 hours:

- **PR #2353 [CLOSED] – fix(web): tighten app layout spacing** (Author: anxndsgn)
    - *What:* Removes the app-level outer gutter while preserving safe-area insets, and refines sidebar list spacing and search input display.
    - *Why it matters:* A purely visual fix to make the Web UI feel less "floating" and more native. This closes a long-standing layout polish request.
    - [View PR #2353](https://github.com/MoonshotAI/kimi-cli/pull/2353)

- **PR #2489 [OPEN] – fix(soul): restore plan-mode tool bindings after /init creates throwaway soul** (Author: nankingjing)
    - *What:* Fixes a bug (#2478) where running `/init` creates a throwaway `KimiSoul`. The shared `_bind_plan_mode_tools()` call corrupts tool bindings (`ExitPlanMode`, `EnterPlanMode`, `Write`) for the active session.
    - *Why it matters:* This is a high-impact bug fix for users who rely on "plan mode" workflows, as previously they would lose access to critical plan navigation commands after initiating a new chat.
    - [View PR #2489](https://github.com/MoonshotAI/kimi-cli/pull/2489)

- **PR #2488 [OPEN] – fix(soul): make LLMNotSet error message actionable for fresh installs** (Author: nankingjing)
    - *What:* Changes the generic `LLM not set` error to a more helpful message guiding users to run `kimi login`.
    - *Why it matters:* Addresses a major onboarding friction point for Homebrew users. Previously, fresh installs would hit a confusing dead-end without clear next steps. This is a direct fix for Issue #2456.
    - [View PR #2488](https://github.com/MoonshotAI/kimi-cli/pull/2488)

- **PR #1815 [CLOSED] – fix(web): prevent Enter from sending message during IME composition on Safari** (Author: qianqiuqiu)
    - *What:* Fixes a bug on Safari (macOS) where pressing Enter to commit text from a Chinese/Japanese IME candidate bar would immediately send the message instead of committing the text.
    - *Why it matters:* This was a long-standing bug (since April) specifically breaking the experience for East Asian language users on Safari. The closure signals a significant accessibility win for non-Latin input methods.
    - [View PR #1815](https://github.com/MoonshotAI/kimi-cli/pull/1815)

### 5. Feature Request Trends
*No new feature-oriented Issues were updated in this 24-hour window.* The current trend visible from the PRs is a heavy focus on **Onboarding UX** (better error messages for `LLMNotSet`) and **Session Stability** (fixing tool bindings after `/init`).

### 6. Developer Pain Points
Based on the fixes currently in flight, two recurring developer frustrations stand out:

1.  **Confusing Fresh Install Experience:** The `LLM Not Set` error has been a persistent point of confusion for developers installing via `brew`. Users expected a guided setup or a link to documentation, not a dead-end terminal error.
2.  **Session State Corruption:** The `/init` command breaking "plan-mode" tools (PR #2489) highlights fragility in the `Soul` object lifecycle. Developers who frequently reset their context (using `/init`) found that their workflow tools would silently break, forcing a full restart.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

Here is the OpenCode community digest for July 11, 2026.

---

## OpenCode Community Digest
**Date:** 2026-07-11
**Data Source:** [anomalyco/opencode](https://github.com/anomalyco/opencode)

### 1. Today's Highlights

The community is heavily focused on the V2 terminal UI (TUI) and its managed service architecture. A significant bug report reveals that automatic restarts during updates trigger a "reconnect herd" that degrades performance. Concurrently, a high-priority fix has been merged to resolve session forking issues when agent attachments are present, and the V2 branch is seeing a major port of the GitHub Copilot OAuth integration. On the model front, users are reporting issues with the new GPT-5.6 "Luna" and "Sol" models via OAuth and reasoning endpoints.

### 2. Releases

No new releases were detected in the last 24 hours.

### 3. Hot Issues

- **[#4283 - Copy To Clipboard is not working](https://github.com/anomalyco/opencode/issues/4283)** (112 comments, 103 👍)
  - **Status:** OPEN
  - **Why it matters:** This is the most active issue by a wide margin and a core UX blocker for many users. The inability to copy text from the terminal is a fundamental pain point that has simmered for months.
- **[#2632 - Default permissions allow editing files and executing any commands](https://github.com/anomalyco/opencode/issues/2632)** (22 comments)
  - **Status:** CLOSED
  - **Why it matters:** A long-standing security concern. The fact that this was closed suggests a fix or design decision was implemented, which is relevant for all users concerned about agent safety.
- **[#10288 - Feature Request: Mobile version of OpenCode](https://github.com/anomalyco/opencode/issues/10288)** (14 comments, 89 👍)
  - **Status:** OPEN
  - **Why it matters:** A massive number of upvotes signals strong demand for mobile/tablet access, likely from developers wanting to review code or run simple prompts on the go.
- **[#26772 - [FEATURE]: Integrated browser for desktop](https://github.com/anomalyco/opencode/issues/26772)** (12 comments)
  - **Status:** OPEN
  - **Why it matters:** This suggests users want OpenCode Desktop to directly inspect and interact with web applications, extending its utility beyond static file editing.
- **[#36140 - GPT-5.6 Luna returns model not found with ChatGPT OAuth](https://github.com/anomalyco/opencode/issues/36140)** (11 comments, 46 👍)
  - **Status:** OPEN
  - **Why it matters:** A high-impact bug blocking users from accessing the latest models. The high upvote count indicates many users are eager to try GPT-5.6.
- **[#14970 - SQLite database corruption with concurrent sessions on NFS](https://github.com/anomalyco/opencode/issues/14970)** (10 comments)
  - **Status:** OPEN
  - **Why it matters:** A critical reliability issue for teams or users running OpenCode in shared/networked environments like home directories on NFS.
- **[#35828 - Windows TUI fails when project .opencode already exists](https://github.com/anomalyco/opencode/issues/35828)** (3 comments)
  - **Status:** OPEN
  - **Why it matters:** A specific version regression (v1.17.15) on Windows that completely prevents the TUI from starting in existing projects.
- **[#36137 - Unexpected server error on Opencode CLI](https://github.com/anomalyco/opencode/issues/36137)** (4 comments)
  - **Status:** CLOSED
  - **Why it matters:** This non-descript error was closed, indicating a quick fix was found and deployed, but its vagueness initially caused confusion for users.
- **[#36241 - gpt-5.6-sol-fast/high fails with reasoning part rs_*:0 not found](https://github.com/anomalyco/opencode/issues/36241)** (3 comments)
  - **Status:** OPEN
  - **Why it matters:** A specific streaming bug with the high-reasoning variant of the new Sol model on macOS, pointing to an integration issue with the new model architecture.
- **[#36305 - provider/github-copilot: every model rejected on /chat/completions](https://github.com/anomalyco/opencode/issues/36305)** (3 comments)
  - **Status:** CLOSED
  - **Why it matters:** This was a complete breakage for the GitHub Copilot provider. The quick closure implies a hotfix was shipped, but it caused a brief outage for Copilot users.

### 4. Key PR Progress

- **[#36338 - fix(tui): fork messages with agent attachments](https://github.com/anomalyco/opencode/pull/36338)**
  - **Status:** CLOSED
  - **Summary:** A targeted fix for the V2 TUI that resolves `DataCloneError` when forking sessions that have agent-based attachments.
- **[#36339 - feat(codemode): support Promise.any and new Promise construction](https://github.com/anomalyco/opencode/pull/36339)**
  - **Status:** OPEN
  - **Summary:** Adds missing JavaScript primitives (Promise.any, new Promise) to the sandboxed CodeMode interpreter, bringing it closer to ECMAScript compliance.
- **[#36337 - fix(tui): make composer close action discoverable](https://github.com/anomalyco/opencode/pull/36337)**
  - **Status:** CLOSED
  - **Summary:** Improves UX by adding an `esc` hint to the composer header, fixing a usability bug where users couldn't figure out how to close a sub-agent's view.
- **[#36336 - feat(core): port GitHub Copilot OAuth](https://github.com/anomalyco/opencode/pull/36336)**
  - **Status:** CLOSED
  - **Summary:** A major port bringing GitHub Copilot OAuth into the V2 integration registry. This is crucial for maintaining parity with the v1.x branch.
- **[#7756 - feat(task): Add subagent-to-subagent delegation](https://github.com/anomalyco/opencode/pull/7756)**
  - **Status:** CLOSED (Merged)
  - **Summary:** A massive feature that has been in development for six months. It adds complex hierarchical session navigation and budget management, representing a significant architectural advance for multi-agent tasks.
- **[#36333 - fix(core): cap session output tokens](https://github.com/anomalyco/opencode/pull/36333)**
  - **Status:** OPEN
  - **Summary:** Addresses a potential runaway cost issue in V2 by explicitly capping the output token budget for providers, aligning with existing runtime behavior.
- **[#36304 - feat(codemode): support promise chaining](https://github.com/anomalyco/opencode/pull/36304)**
  - **Status:** CLOSED
  - **Summary:** Adds `.then`/`.catch`/`.finally` to the CodeMode sandbox, which is essential for running realistic, modern JavaScript within the agent environment.
- **[#36321 - refactor(core): combine git discovery queries](https://github.com/anomalyco/opencode/pull/36321)**
  - **Status:** CLOSED
  - **Summary:** A performance refactor that consolidates multiple `git rev-parse` calls into one, reducing startup time for projects in git repositories.
- **[#36143 - fix(opencode): support GPT-5.6 Responses Lite](https://github.com/anomalyco/opencode/pull/36143)**
  - **Status:** OPEN
  - **Summary:** A direct attempt to fix the "Model not found" error for GPT-5.6 Luna by switching from the legacy envelope to the newer Codex API, which correctly handles the new model.
- **[#34794 - feat(provider): add --model free](https://github.com/anomalyco/opencode/pull/34794)**
  - **Status:** OPEN
  - **Summary:** A user-requested feature to randomly select a free, zero-cost model, catering to developers on a budget or for simple, low-cost tasks.

### 5. Feature Request Trends

The most requested feature directions, based on recent issues and high upvote counts, are:

- **Mobile and Multi-Platform Access:** The high upvote count on the mobile version request ([#10288](https://github.com/anomalyco/opencode/issues/10288)) indicates a strong desire to extend OpenCode beyond the terminal and into mobile/tablet or web-based UIs.
- **Rich Desktop UI / Integrated Browser:** Issues like [#26772](https://github.com/anomalyco/opencode/issues/26772) request a more powerful desktop experience, including an integrated browser for inspecting and interacting with web apps.
- **Interactive Steering & Agent Control:** The request for "Interactive Steering" ([#19205](https://github.com/anomalyco/opencode/issues/19205)) suggests users want more real-time control over the agent's execution flow, such as intervening when tasks are queued.
- **Improved Plugin & Ecosystem Discoverability:** Multiple PRs and issues (e.g., [#36325](https://github.com/anomalyco/opencode/issues/36325), [#36295](https://github.com/anomalyco/opencode/issues/36295)) focus on adding new plugins to the ecosystem page, highlighting a growing community of plugin authors and a need for better discovery.

### 6. Developer Pain Points

Recurring frustrations and high-frequency issues are:

- **V2 TUI Managed Service Instability:** Issue [#36285](https://github.com/anomalyco/opencode/issues/36285) highlights a painful user experience where automatic updates lead to service restarts, causing the UI to become unresponsive and partially rendered.
- **SQLite Database Fragility:** Multiple open issues ([#14970](https://github.com/anomalyco/opencode/issues/14970), [#33320](https://github.com/anomalyco/opencode/issues/33320)) report "malformed" or "locked" databases, particularly in concurrent or NFS-mounted environments. This is a significant reliability concern.
- **New Model Integration Failures:** The appearance of GPT-5.x models (Luna, Sol) has brought new bugs related to authentication ([#36140](https://github.com/anomalyco/opencode/issues/36140)) and streaming ([#36241](https://github.com/anomalyco/opencode/issues/36241)), indicating the provider/OAuth layer needs more testing against the latest API changes.
- **Config & State Persistence Confusion:** Issue [#36326](https://github.com/anomalyco/opencode/issues/36326) shows a user was misled about conversation persistence, losing work when shutting down their PC. This points to a UX failure in communicating the tool's state management.
- **Windows & Specific Environment Instability:** Issues like [#35828](https://github.com/anomalyco/opencode/issues/35828) (TUI on Windows) and issues related to NFS highlight that platform-specific bugs continue to be a source of friction for non-macOS/Linux users.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest – 2026-07-11

## Today's Highlights

GPT-5.6 model support dominates today's activity, with multiple PRs adding Sol/Terra/Luna to the GitHub Copilot and OpenAI Codex catalogs, plus a new `ultra` thinking level. A critical regression in self-hosted provider timeout handling has been traced to a Bun-level limitation, with a fix already landed. The community also shipped constrained sampling support and OpenRouter session affinity, addressing long-standing requests for provider-specific behaviors.

---

## Releases

No new releases in the last 24 hours.

---

## Hot Issues

**1. #6475 – Add GPT-5.6 (Sol/Terra/Luna) to GitHub Copilot provider catalog**  
*Author: rob-balfre | Comments: 8 | 👍: 6*  
Request to add the three new GPT-5.6 models to the Copilot catalog following GitHub's announcement. High community interest given the new "max" thinking level availability.  
[Link](https://github.com/earendil-works/pi/issues/6475)

**2. #6476 – Regression: httpIdleTimeoutMs not respected for self-hosted OpenAI-compatible providers (v0.80.6)**  
*Author: hoho51 | Comments: 5*  
Requests to self-hosted vLLM instances timeout despite explicit configuration. Root cause traced to Bun's built-in 5-minute HTTP idle timeout, which bypasses Pi's settings. Downgrading to v0.80.3 works around the issue.  
[Link](https://github.com/earendil-works/pi/issues/6476)

**3. #6206 – Clamping to context window prevents artificial context limits**  
*Author: DanielThomas | Comments: 8*  
A prior fix clamps `max_tokens` to the model's context window, breaking users who intentionally set lower limits (e.g., for cost control or latency). Contradicts the intended semantics of `max_tokens` vs. context window.  
[Link](https://github.com/earendil-works/pi/issues/6206)

**4. #6366 – Support session IDs for OpenRouter**  
*Author: farid-fari | Comments: 7*  
OpenRouter expects session identifiers via `x-session-id` header or `session_id` in JSON body, but Pi only sends `session_id` as an HTTP header. Breaks cache affinity and prompt caching for OpenRouter users.  
[Link](https://github.com/earendil-works/pi/issues/6366)

**5. #6477 – Compaction summary requests omit session ID, breaking compaction on Codex models**  
*Author: valtterimelkko | Comments: 2 | 👍: 2*  
Compaction fails with "Model not found" for new GPT-5.6 models on Codex provider because the session ID is not sent during summarization requests. Affects both manual and automatic compaction.  
[Link](https://github.com/earendil-works/pi/issues/6477)

**6. #6300 – Windows: Input line redrawn on every keystroke**  
*Author: polemotionkor-arch | Comments: 5*  
Each keystroke appears on a new line in the terminal. Reported on both cmd.exe and Windows Terminal with Node.js v22.x. Significant UX degradation for Windows users.  
[Link](https://github.com/earendil-works/pi/issues/6300)

**7. #6472 – compaction.enabled=false bypassed by overflow recovery path**  
*Author: CanarinhoPistolaa | Comments: 2*  
Setting compaction to disabled is ignored when overflow recovery triggers compaction. The `shouldCompact()` check is not consulted during overflow handling, making the setting unreliable.  
[Link](https://github.com/earendil-works/pi/issues/6472)

**8. #6097 – Add support for 'max' thinking level**  
*Author: mattiacerutti | Comments: 2 | 👍: 17*  
OpenAI's new GPT-5.6 Sol introduces a sixth thinking level, similar to Anthropic's recent Opus update. Currently missing from Pi's model catalog; the most upvoted open feature request.  
[Link](https://github.com/earendil-works/pi/issues/6097)

**9. #6459 – Custom keybindings not applied on initial session start**  
*Author: IstPlayer | Comments: 2*  
User-defined keybindings from `keybindings.json` only work after `/reload`. Impacts custom editor components like pi-powerline-footer's BashModeEditor.  
[Link](https://github.com/earendil-works/pi/issues/6459)

**10. #6324 – /tree branch summarization throws "No API key found" for ambient-credential providers**  
*Author: yuval-shimoni-cyera | Comments: 2 | 👍: 1*  
The `/tree` command fails with Bedrock and Vertex AI because the summarization code path requires an explicit API key rather than using ambient credentials (IAM roles, service accounts).  
[Link](https://github.com/earendil-works/pi/issues/6324)

---

## Key PR Progress

**1. #6341 – feat(ai): support constrained sampling**  
*Author: mitsuhiko*  
Adds opt-in `constrainedSampling` config for tools, enabling provider-side JSON schema-constrained tool argument generation (exposed as `strict`). Currently open for discussion on implementation details.  
[Link](https://github.com/earendil-works/pi/pull/6341)

**2. #6474 – feat(ai): support message-anchored tool loading**  
*Author: mitsuhiko*  
Enables dynamic tool loading mid-conversation via `addedTools` in messages, eliminating the need to declare all tools upfront. Supports Anthropic's tool-reference system.  
[Link](https://github.com/earendil-works/pi/pull/6474)

**3. #6503 – bump bun to 1.3.14**  
*Author: davidbrai*  
Addresses the httpIdleTimeoutMs regression (#6476) by updating Bun to a version supporting `BUN_CONFIG_HTTP_IDLE_TIMEOUT`, providing a workaround for the built-in 5-minute timeout.  
[Link](https://github.com/earendil-works/pi/pull/6503)

**4. #6496 – fix(ai): support OpenRouter session affinity**  
*Author: petrroll*  
Fixes #6366 by sending OpenRouter-compatible session headers (`x-session-id`) in addition to the OpenAI-style `session_id` header, restoring prompt caching for OpenRouter users.  
[Link](https://github.com/earendil-works/pi/pull/6496)

**5. #6489 – feat(ai): add ultra thinking level**  
*Author: heestolee*  
Introduces `ultra` as a first-class thinking level across AI types, coding-agent selector, settings, CLI, and SDK. Maps `ultra` to `reasoning.effort: "ultra"` for Codex, caps Luna at Max.  
[Link](https://github.com/earendil-works/pi/pull/6489)

**6. #6501 – fix(extensions,theme): support embedded library hosts**  
*Author: wloonis*  
Fixes two embedded library issues: theme initialization failure (#6102) and stale extension runtime poisoning across sessions (#6101). Essential for applications embedding Pi as a library.  
[Link](https://github.com/earendil-works/pi/pull/6501)

**7. #6490 – add xhigh and max to all fable-5 providers**  
*Author: davidbrai*  
Adds missing `xhigh` and `max` thinking levels to fable-5 model catalogs, partially fixing catalog metadata inconsistencies.  
[Link](https://github.com/earendil-works/pi/pull/6490)

**8. #6481 – fix openrouter models: use context length from top provider**  
*Author: davidbrai*  
Fixes #6378 by using the top provider's context length for OpenRouter models, ensuring accurate context window reporting.  
[Link](https://github.com/earendil-works/pi/pull/6481)

**9. #6506 – feat: add configurable auto-update on new session**  
*Author: ArihantDeva*  
Adds `autoUpdateOnNewSession` setting for automatic `pi update --all` on session start. Disabled by default; targets power users who want bleeding-edge tools.  
[Link](https://github.com/earendil-works/pi/pull/6506)

**10. #6111 – fix(coding-agent): report settings write failures in install/remove**  
*Author: jiangge*  
Fixes silent failures where `pi install` reports success but packages are not registered in `settings.json` (e.g., read-only config). Now reports write failures explicitly.  
[Link](https://github.com/earendil-works/pi/pull/6111)

---

## Feature Request Trends

**GPT-5.6 Model Ecosystem** dominates current requests: adding Sol/Terra/Luna to all provider catalogs (Copilot, Codex, OpenRouter), supporting the new `ultra` thinking level, and enabling Responses Lite API for reasoning models. Multiple PRs and issues cluster around this release.

**Provider-Specific Behavior** is a recurring theme: OpenRouter session affinity (#6366), Bedrock stop reason preservation (#6485), Cloudflare provider compatibility (#6494), and ambient-credential support for `/tree` (#6324) all demand per-provider adjustments rather than universal abstractions.

**Embedded/Library Usage** is gaining momentum: requests for opaque attachments in RPC (#6493), multi-agent foreground switching (#6480), and extension-reported usage costs (#6509) all target embedding Pi as a library rather than standalone TUI.

---

## Developer Pain Points

**Configuration Ignored** – Multiple settings (compaction.enabled, httpIdleTimeoutMs, custom keybindings) are silently bypassed by specific code paths, causing user frustration and forcing workarounds like downgrades or manual reloads.

**Provider Inconsistency** – Ambient-credential providers (Bedrock, Vertex) fail on features like `/tree` branch summarization and compaction because code hardcodes API key expectations. Each new model release (GPT-5.6) requires provider-specific catalog updates.

**Windows UX Degradation** – The TUI input redrawing bug (#6300) persists, making Pi nearly unusable on Windows for interactive work. No fix has been proposed despite multiple confirmations.

**Retry Behavior Unbounded** – Exponential backoff in retry logic (#6303) can cause multi-minute delays, as `maxDelayMs` is not propagated from settings to the retry implementation, despite the setting existing.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-07-11

## 1. Today's Highlights

The release of **v0.19.9** was attempted but failed due to Docker sandbox integration test issues; a hotfix (package size limit bump) is already merged. The community is rallying around **multi-workspace support** for the `qwen serve` daemon, with multiple new PRs and issues proposing Web Shell UI components for workspace switching, git branch display, and session context selectors. Several critical bugs around **OOM on `glob` tool**, **leaked protocol tags** from qwen3.7-max, and **broken history chains** have been addressed in the nightly release.

## 2. Releases

**v0.19.8-nightly.20260711.0ef3a76bd** (released today)
- Fix: YOLO mode is preserved when the model calls `enter_plan_mode`
- Feat: `ask_user` forwarding in CLI

**v0.19.9** (release attempt, workflow failed)
- Stop repeated subagent tool-call loops (PR #6543)
- Fix: detect and mark broken history chains instead of silent truncation
- Release blocked by `integration_docker` job (fixed in PR #6691 & #6692)

## 3. Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|----------------|-------------------|
| #6378 | [RFC] Support multiple workspaces in one daemon | Foundation for IDE-like workspace management; spawned 4+ follow-up PRs | 20 comments, active design discussion |
| #5975 | API error: no stream activity for 120000ms | Major UX regression in v0.19.3; users stuck with silent failures | 10 comments, 1 👍, high frustration |
| #5970 | Auto-enter Plan mode from YOLO mode regression | YOLO workflow broken; users cannot trust headless operation | 5 comments, closed as fixed |
| #6384 | Hard limit: 0 when env-configured model reserves full context | Prevents any request from sending; total blocker for certain configs | 5 comments, need retesting |
| #6590 | Ctrl+V paste image broken on macOS standalone | Native clipboard module missing from standalone installer | 4 comments, macOS-specific pain |
| #6629 | Cron parser drops step in single-value expressions | Silent misbehavior in automation: `5/15` matches only `5` | 4 comments, fixed |
| #6654 | tool_use blocks missing corresponding tool_result | API compliance error; breaks core agent loop | 4 comments, needs triage |
| #6582 | UI language mixing Chinese/English in approval mode switch | Polarity issue in internationalization | 3 comments, closed |
| #6595 | qwen3.7-max leaks `<analysis>/<summary>` tags | Long-context model produces malformed responses, stops follow-up actions | 3 comments, closed with fix in PR #6683 |
| #6614 | Glob tool OOM on large path | Node process crashes; blocks subagent working on large repos | 2 comments, fixed |

## 4. Key PR Progress

| PR | Description | Status |
|----|-------------|--------|
| #6682 | **fix(cli): periodic memory-pressure check** — Prevents OOM on quit by adding pressure checks during TUI idle moments | ✅ Merged |
| #6683 | **fix(core): retry leaked protocol turns** — Extends leak guard to retry `<analysis>/<summary>` turns even when they contain tool calls | Open |
| #6697 | **feat(web-shell): resume stopped sessions on load** — Automatically invokes daemon continuation endpoint after session load/restart | Open |
| #6681 | **fix(core): goal evaluation lifecycle-safe** — Waits for background agents/shell jobs before evaluating `/goal` | Open |
| #6678 | **feat(cli): full reasoning content on Alt+T expand** — Uses MarkdownDisplay instead of 4-line truncation for streaming thinking blocks | Open |
| #6580 | **feat(cli): subagent observability** — Untruncated live commands, transcript path, approval context | Open |
| #6579 | **fix(cli): keep model switches session-scoped** — `/model` only updates active session; default requires `--default` | Open |
| #6692 | **fix(interactive): Docker sandbox networking** — Fixes fake server binding for protocol tag retry test | ✅ Merged |
| #6691 | **fix(release): raise package size limit to 96 MB** — Unblocks v0.19.9 release | ✅ Merged |
| #6696 | **fix(channels): suppress nested subagent output** — Prevents channel delivery from collecting nested agent chunks | ✅ Merged |

## 5. Feature Request Trends

- **Multi-workspace & daemon lifecycle**: The dominant theme. RFC #6378 and follow-ups (#6646, #6700, #6699, #6695, #6697, #6680) propose workspace selectors, execution context selectors (local vs worktree), git branch displays, and automatic session recovery after daemon restarts. This is the top-priority architectural direction.
- **Security & moderation**: Growing demand for GitHub Actions moderation guards (#6597) and OAuth recovery for MCP servers (#6639).
- **SDK interactivity**: Users want `ask_user_question` support in TypeScript and Python SDKs (#6647) and runtime context injection for per-turn system reminders (#5847).
- **Skill/learning system**: `/learn` command (#6440) for user-initiated skill creation from knowledge sources — follows the `/remember` pattern.
- **Configurable compression model**: `/model --compaction` (#6019) to let users choose a dedicated model for chat compression.

## 6. Developer Pain Points

- **Release pipeline fragility**: v0.19.9 failed twice due to Docker sandbox integration tests and package size limits (#6690, #6687). CI reliability remains a concern.
- **Model-switching side effects**: Users report that model switches leak across sessions (#6579) and context window limits are misconfigured (#6384), causing hard failures before any request is sent.
- **Silent data corruption**: History chain truncation (#6543 fix) and protocol tag leaks (#6595) can cause subtle behavioral issues that are hard to diagnose.
- **macOS packaging gaps**: Standalone installers missing native clipboard modules (#6590) — a recurring pain for Apple Silicon users.
- **Memory management**: OOM remains a top issue — glob tool (#6614), long TUI sessions without tool calls (#6682), and orphan child processes from SDK (#6636) all point to systemic memory safety gaps.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-07-11

## Today's Highlights

The v0.8.68 release is in final integration, with multiple stopship bugs closed today via PR #4332 (TUI state/routing truthfulness) and PR #4336 (workflow lane dispatch without root model). The Fleet/Workflow/Lane/Runtime architecture is solidifying as the canonical orchestration model, and **Termux/Android arm64** official support (epic #4236) is progressing through QA. **Three critical release-blocker bugs** were identified and fixed today, including a provider configuration emptiness check that was causing false "configured" states in the TUI.

---

## Releases

No new releases in the last 24 hours. Active integration for v0.8.68 is ongoing across multiple PRs.

---

## Hot Issues

1. **[#4092 – v0.8.68 execution board: lane order, dependencies, and agent protocol (CLOSED)](https://github.com/Hmbown/CodeWhale/issues/4092)**  
   The master coordination issue for the entire v0.8.68 milestone. 60 comments across a week of intense triage. Defines the “one label per issue” lane model that makes every open milestone issue queryable. Closed and replaced by the canonical tracker (#4175).

2. **[#4032 – Codewhale not following the constitution (OPEN)](https://github.com/Hmbown/CodeWhale/issues/4032)**  
   A community user reports the agent consistently ignores user-provided scripts and writes its own temporary scripts instead. 33 comments of back-and-forth. Touches on constitutional alignment – a high-interest topic for agent reliability. No resolution yet.

3. **[#4333 – Configured picker treats empty provider headers as configured (OPEN, release-blocker)](https://github.com/Hmbown/CodeWhale/issues/4333)**  
   A zero-comment bug filed today, but labeled **release-blocker** for v0.8.68. The TUI’s “Model · configured” view considers an empty `[providers.anthropic.http_headers]` block as configured, breaking provider selection UX. Fixed in PR #4332.

4. **[#4175 – v0.8.68 architecture: Fleet / Workflow / Lane / Runtime product model (OPEN)](https://github.com/Hmbown/CodeWhale/issues/4175)**  
   The canonical vocabulary tracker preventing concept collapse. Links to implementation phases and the `docs/AGENT_WORKFLOWS_0868.md` document. Foundation for all workflow/lane issues filed this week.

5. **[#4236 – Epic: official Termux / Android arm64 support (OPEN)](https://github.com/Hmbown/CodeWhale/issues/4236)**  
   Tracked as a full epic. Users want native Android builds via Termux. Includes follow-up to closed discussion #1135. Child issue #4242 defines the concrete QA matrix (shell dispatch, PTY, TUI startup, resize handling).

6. **[#4095 – Default TUI presentation is too busy; compact mode should be standard (CLOSED)](https://github.com/Hmbown/CodeWhale/issues/4095)**  
   UX bug treated as a 0.8.68 release blocker: the default TUI exposes too much low-level churn. Community sentiment agrees the UI feels “chaotic.” Fixed by making compact mode the default – a pragmatic UX win.

7. **[#4329 – Anthropic API error: mismatched tool_use blocks (OPEN)](https://github.com/Hmbown/CodeWhale/issues/4329)**  
   A fresh user report of HTTP 400 errors from Anthropic where `tool_use` IDs lack corresponding `tool_result` blocks. Low comment count but a real protocol-level mismatch — likely a prompt construction or sub-agent response shape issue.

8. **[#2934 – Sidebar sessions panel with auto-resume and session history browsing (OPEN)](https://github.com/Hmbown/CodeWhale/issues/2934)**  
   A long-standing feature request from a community contributor. Users want a persistent session sidebar instead of relying on `Ctrl+R` or `--continue`. Scheduled for v0.8.69. The absence of this causes daily friction for power users.

9. **[#4038 – v0.8.68 Workflow: product-readiness tracker (CLOSED)](https://github.com/Hmbown/CodeWhale/issues/4038)**  
   Umbrella issue listing what makes Workflow “product-ready”: stable model-facing tool, normal TUI/CLI run path, compact run view, high-fan-out resource story. Closed today, signaling the v0.8.68 workflow foundations are considered complete.

10. **[#4334 – Preserve exact custom provider identity across session restore (OPEN)](https://github.com/Hmbown/CodeWhale/issues/4334)**  
    A reliability bug: custom providers like `lm-studio` or `my-openai-proxy` collapse to a generic `custom` enum on session restore, breaking re-resolution. Filed today with zero comments but important for local-model users.

---

## Key PR Progress

1. **[#4332 – fix: make v0.8.68 TUI state and routing truthful (CLOSED)](https://github.com/Hmbown/CodeWhale/pull/4332)**  
   The v0.8.68 stopship repair batch: fixes blank provider configs showing as configured, restores lane-level sub-agent isolation, fixes null-selection picker artifacts, and removes a crash path from the workflow activity view. Landed today.

2. **[#4336 – feat(workflow): dispatch durable lanes without root model (CLOSED)](https://github.com/Hmbown/CodeWhale/pull/4336)**  
   Enables `codewhale workflow run` to dispatch directly through the host-owned Workflow tool without consuming an operator-model turn. Preserves all profile, approval, sandbox, and MCP settings. Core architectural work for lane execution.

3. **[#4337 – fix(release): integrate v0.8.68 TUI and Android QA (CLOSED)](https://github.com/Hmbown/CodeWhale/pull/4337)**  
   Lands final v0.8.68 cancelled-shell transcript state, PTY regression coverage, and authenticates Android loaded images before updater replacement on Termux. Concrete progress toward Termux support.

4. **[#4331 – docs(release): align v0.8.68 mode FAQ and workflow commands (CLOSED)](https://github.com/Hmbown/CodeWhale/pull/4331)**  
   Fixes mismatched doc examples (`workflow status` → `lane status`, `workflow logs` → `lane logs`). Adds `--fleet` argument to workflow run examples. Critical for developers relying on README accuracy.

5. **[#4328 – fix: upgrade dependencies to resolve cargo-audit vulnerabilities (CLOSED)](https://github.com/Hmbown/CodeWhale/pull/4328)**  
   Fixes RUSTSEC-2026-0204 (crossbeam-epoch pointer dereference) and RUSTSEC-2026-0187 (lopdf stack overflow). Also upgrades pdf-extract and ttf-parser. A security-focused cleanup by community contributor `bistack`.

6. **[#4272 – ci: add RustSec security audit and cargo-deny checks (CLOSED)](https://github.com/Hmbown/CodeWhale/pull/4272)**  
   Adds CI infrastructure: `cargo-audit` for known vulnerabilities and `cargo-deny` for advisories, license bans, and dependency source checks. Non-blocking audit mode. Another `bistack` contribution strengthening supply-chain security.

7. **[#4330 – fix: update cargo-deny advisory ignore list (CLOSED)](https://github.com/Hmbown/CodeWhale/pull/4330)**  
   Companion to #4328: removes the now-fixed `RUSTSEC-2026-0187` ignore entry, adds transient dependency ignores for `derivative` and `fxhash`. Keeps CI green while transitive issues remain.

8. **[#4343 – chore(deps): bump colored from 3.0.0 to 3.1.1 (OPEN)](https://github.com/Hmbown/CodeWhale/pull/4343)**  
   Routine dependency bump for the terminal coloring crate (`colored`). Adds `on_*` style methods and implements `Colorize` for `&str`. Dependabot automation.

9. **[#4342 – chore(deps): bump rmcp from 1.8.0 to 2.2.0 (OPEN)](https://github.com/Hmbown/CodeWhale/pull/4342)**  
   Major version bump for the MCP (Model Context Protocol) Rust SDK. Jumps from 1.8.0 to 2.2.0 – may bring breaking changes. Needs maintainer review before merge.

10. **[#3969 – Add per-sub-agent provider routing (CLOSED)](https://github.com/Hmbown/CodeWhale/pull/3969)**  
    Held since July 3 – the branch is dirty and targets a pre-fleet spawn path. Maintainer suggests rebase and reroute through fleet profile fields. Community PR waiting on architectural alignment (see #4137 for the target approach).

---

## Feature Request Trends

- **Persistence and session management** – #2934 (sidebar + auto-resume) and #4334 (custom provider identity across restore) both point to a growing need for robust session lifecycle: users want to pick up exactly where they left off, including custom provider configurations.
- **Termux / Android native support** – #4236 and its child QA issue #4242 are a clear community signal. The request went from closed discussion (#1135) to official epic, indicating maintainer buy-in.
- **Project-scoped memory** – #3976 seeds lightweight per-project recall surfaces before the full external-memory backend lands. A pragmatic stepping-stone for context management.
- **Permission profiles and non-blocking execution** – #3211 proposes first-class permission profiles decoupled from TUI mode, approval behavior, and sandbox state. Addresses confusion between Plan/Agent/YOLO modes.
- **Fleet role-to-role handoffs** – #4179 defines workflow gates with block/approve semantics (scout → implementer → reviewer → verifier → release_lead). This moves beyond simple sub-agent spawning toward structured software engineering pipelines.

---

## Developer Pain Points

- **TUI visual noise** – Issue #4095 (“default TUI too busy”) resonated across the community. The chaotic default experience was treated as a **bug**, not new feature work. The fix (compact mode by default) is now landed.
- **Agent constitution adherence** – #4032 shows deep frustration: the agent actively ignores user-provided scripts and always writes its own, despite a written constitution. Community comments indicate this is a trust-breaking pattern.
- **Provider config confusion** – #4333 (empty headers treated as configured) and #4334 (custom provider identity lost on restore) both erode user confidence in provider setup. The fixes in #4332 are welcome, but the pattern suggests provider configuration UX needs a broader audit.
- **Anthropic tool-use protocol errors** – #4329 reports a concrete HTTP 400 with mismatched `tool_use`/`tool_result` blocks. While low in volume, this is a protocol-level failure that can stall workflows silently.
- **Security vulnerability churn** – The flurry of activity around `cargo-audit` (PRs #4272, #4328, #4330) highlights transitive dependency risk. Two unmaintained crates (`derivative`, `fxhash`) are still in the dependency tree, and the maintainer is investing in CI guardrails to catch these proactively.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*