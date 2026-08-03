# AI CLI Tools Community Digest 2026-08-03

> Generated: 2026-08-03 02:09 UTC | Tools covered: 9

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

# Cross-Tool AI CLI Ecosystem Comparison Report
**Date:** 2026-08-03 | **Tools Analyzed:** 9 major AI CLI tools

---

## 1. Ecosystem Overview

The AI CLI landscape is in a **high-velocity stabilization phase** — all nine tools shipped nightlies or major dependency updates in the past week, but **zero stable releases** in the last 24 hours. Community energy is concentrated on **reliability debt paydown** (resource leaks, session corruption, cross-platform regressions) rather than new capabilities. A clear bifurcation is emerging: **enterprise-grade tools** (Claude Code, Codex, Copilot CLI, Gemini CLI) are hardening authentication, permissions, and audit surfaces, while **experimental/agent-first tools** (OpenCode, Pi, Qwen Code, DeepSeek TUI, Kimi) are iterating on session architecture, subagent orchestration, and multi-device continuity. Windows remains a **second-class citizen** for 7/9 tools; Linux-native tooling (Gemini, Qwen, DeepSeek) shows faster terminal rendering iteration.

---

## 2. Activity Comparison (Last 24 Hours)

| Tool | Releases | Hot Issues (≥1) | PRs Updated | Top Community Signal (👍) | Dominant Theme |
|------|----------|-----------------|-------------|---------------------------|----------------|
| **Claude Code** | 0 | 10 | 3 (all docs) | #66504: Opt-in session URLs in git (44 👍) | Cross-platform bugs, silent data loss |
| **OpenAI Codex** | 0 | 10 | 6 (3 fixes, 2 features, 1 sec) | #11023: Linux Desktop App (906 👍) | Windows instability, token burn, diff broken |
| **Gemini CLI** | 1 nightly | 10 | 10 (major deps) | #21409: Generalist agent hangs (8 👍) | Subagent false success, agent hangs, deps churn |
| **GitHub Copilot CLI** | 0 | 10 | 0 | #4202: `view` tool regression (new) | Regression fatigue, silent data loss, ACP gaps |
| **Kimi Code CLI** | 0 | 4 | 1 (closed) | #1282: Remote session control (24 👍) | Session persistence, swarm resilience |
| **OpenCode** | 0 | 10 | 10 (4 features, 6 fixes) | #4695: Speech-to-Text (170 👍) | Resource leaks (disk/RAM), v2 service instability |
| **Pi** | 0 | 10 | 11 (arch refactor) | #6879: Auto-compaction never triggers (10 👍) | Session architecture rewrite, compaction reliability |
| **Qwen Code** | 1 nightly | 10 | 10 (6 features, 4 fixes) | #8400: Windows session auto-deletion (new) | Daemon/Web Shell maturity, Windows desktop loss |
| **DeepSeek TUI** | 0 (v0.9.x pre) | 10 | 10 (8 WIP features) | #5123: Release blocker — agent spawn complexity (new) | Fleet config overhaul, subagent durability, Termux |

**Key Observations:**
- **Gemini, OpenCode, Pi, Qwen, DeepSeek** show highest PR velocity (10+ PRs/day) — active internal development
- **Copilot CLI** has **zero PR updates** despite 10 new issues — concerning signal
- **Claude Code** and **Kimi** have lowest PR activity; Claude's PRs are documentation-only
- **Nightly releases** from Gemini and Qwen indicate daily cadence; others on slower cycles

---

## 3. Shared Feature Directions (Cross-Tool Convergence)

| Requirement | Tools Demanding It | Specific Needs |
|-------------|-------------------|----------------|
| **Session Persistence & Portability** | Claude Code, Codex, Kimi, OpenCode, Pi, Qwen, DeepSeek | Resume across devices (Kimi #1282 24👍), survive restarts (Qwen #8400), fork from any point (Qwen #8274), in-memory + durable backends (Pi #7503/#7396) |
| **Subagent/Delegation Observability** | Claude Code, Gemini, OpenCode, Qwen, DeepSeek | Real-time hierarchy dashboard (Claude #24537 17👍), resume chains (DeepSeek #425), advisor watcher (DeepSeek #3982), structured review artifacts (Qwen #8402) |
| **Token/Cost Transparency & Control** | Codex, OpenCode, Qwen, DeepSeek, Kimi | Background polling burn (Codex #13733), per-model caps (Claude #81940), dry-run preview (DeepSeek #1004), turn limits (Qwen #8171), swarm token waste (Kimi #2578) |
| **Windows/WSL2 First-Class Support** | Claude Code, Codex, Copilot CLI, Qwen, Gemini | BSOD fix (Claude #32870), sandbox CreateProcessAsUserW (Codex #10090), WSL Git detection (Codex #35119), ConEmu flicker (Qwen #8385), keybinding leaks (Copilot #4328) |
| **Authentication & Enterprise SSO** | Claude Code, Codex, Copilot CLI, Pi, OpenCode | OAuth loops (Claude #77966), DeviceCheck failures (Codex #33463), Copilot GHE compaction (Pi #7413), per-MCP trust (OpenCode #40125) |
| **Terminal Rendering & TUI Polish** | Gemini, Qwen, DeepSeek, Copilot CLI, Pi | Virtualized lists (Gemini #27070), synchronized output (Qwen #8406), kitty/iTerm2 images (Pi #7482), tmux light theme (Copilot #4292) |
| **Plugin/Extension Ecosystem Maturity** | Claude Code, Gemini, OpenCode, Pi, Qwen | Hook documentation (Claude #83374), A2A/ACP SDK 1.0 (Gemini #28628/#28627), request-scoped model hooks (OpenCode #40188), skill compatibility (Pi #7468) |

---

## 4. Differentiation Analysis

| Dimension | Enterprise/Platform Tools | Agent-First/Experimental Tools |
|-----------|---------------------------|--------------------------------|
| **Primary Focus** | Reliability, compliance, IDE integration, team workflows | Autonomy, session architecture, multi-agent orchestration, novel UX |
| **Target Users** | Professional dev teams, enterprise, IDE power users | Early adopters, AI researchers, solo devs building agent workflows |
| **Technical Approach** | Monolithic binaries, controlled plugin APIs, cloud-backed services | Modular runtimes, local-first, protocol-driven (ACP/A2A), runtime APIs |
| **Session Model** | Cloud-synced, conversation-centric | Local-first, forkable, repository-backed (Pi), daemon/WebSocket (Qwen) |
| **Subagent Philosophy** | Controlled delegation (Cowork), approval gates | Autonomous swarms (Kimi, DeepSeek), resume chains, advisor watchers |
| **Release Cadence** | Monthly/quarterly stable, nightlies for insiders | Daily nightlies (Gemini, Qwen), pre-release series (DeepSeek) |
| **Differentiator** | **Claude:** Cowork team settings, Hook system<br>**Codex:** GPT-5.6 Sol integration, Ultra mode<br>**Copilot:** GitHub-native, ACP server<br>**Gemini:** Native bash affinity, massive dep automation | **OpenCode:** Air-gap mode, per-request model hooks<br>**Pi:** Composable session repositories, LLM Gateway<br>**Qwen:** Daemon/Web Shell, Plan & Review workflow<br>**DeepSeek:** Named fleets, Termux-native, runtime API parity<br>**Kimi:** Remote control, external wake channel, swarm resilience |

---

## 5. Community Momentum & Maturity

| Tier | Tools | Evidence |
|------|-------|----------|
| **High Momentum / Rapid Iteration** | **Gemini CLI, Qwen Code, DeepSeek TUI, OpenCode, Pi** | 10+ PRs/day, daily nightlies, major architectural PRs open (Pi session rewrite, DeepSeek fleet overhaul, OpenCode air-gap), high issue engagement (OpenCode #20695 121 comments) |
| **Steady / Enterprise-Grade** | **Claude Code, OpenAI Codex** | High issue counts but lower PR velocity; focus on hardening existing surfaces; strong 👍 on privacy/UX issues (Claude #66504 44👍, Codex #11023 906👍) |
| **Concerning Signals** | **GitHub Copilot CLI, Kimi Code CLI** | Copilot: 10 new issues, **0 PRs** — regression backlog growing; Kimi: only 4 issues, 1 closed PR, low community volume despite 24👍 on remote control |

**Maturity Markers:**
- **Gemini** and **Qwen** ship nightlies with structured changelogs — closest to "continuous delivery"
- **Pi** executing a **coordinated 4-PR session architecture refactor** — rare engineering discipline
- **DeepSeek TUI** has **8 Copilot-authored WIP PRs** — heavy AI-assisted development dogfooding
- **OpenCode** leading on **operational hardening** (air-gap, per-MCP trust, persistence write amplification)

---

## 6. Trend Signals for Technical Decision-Makers

| Trend | Signal Strength | Implication for Developers |
|-------|-----------------|----------------------------|
| **Local-First Session Ownership** | 🔥🔥🔥 (7/9 tools) | Cloud sync is becoming **opt-in**, not default. Expect portable session formats (JSONL, SQLite) and forkable histories. Build tooling around local session stores. |
| **ACP / A2A as Interop Layer** | 🔥🔥🔥 (Gemini, Copilot, Qwen, DeepSeek, Pi) | **Agent Client Protocol** and **Agent-to-Agent** SDKs hitting 1.0. Tools exposing runtime HTTP

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
*Data as of 2026-08-03 | Source: github.com/anthropics/skills*

---

## 1. Top Skills Ranking
*Most-discussed PRs by community engagement (sorted by comment activity)*

| # | Skill / PR | Functionality | Discussion Highlights | Status |
|---|------------|---------------|----------------------|--------|
| 1 | **[#1298](https://github.com/anthropics/skills/pull/1298)** `skill-creator`: fix `run_eval.py` 0% recall | Fixes core evaluation pipeline that reports 0% recall for all skill descriptions, breaking the description-optimization loop (`run_loop.py`, `improve_description.py`) | 10+ independent reproductions; blocks skill quality iteration; Windows subprocess & trigger detection fixes bundled | **Open** |
| 2 | **[#514](https://github.com/anthropics/skills/pull/514)** `document-typography` | Prevents orphan words, widow paragraphs, numbering misalignment in AI-generated documents | Addresses universal pain point: "users rarely ask for good typography but always notice bad typography" | **Open** |
| 3 | **[#1367](https://github.com/anthropics/skills/pull/1367)** `self-audit` (v1.3.0) | Mechanical file verification → four-dimension reasoning audit (correctness, completeness, consistency, safety) in damage-severity priority order | Universal, stack-agnostic quality gate; frames audit as pre-delivery mandatory step | **Open** |
| 4 | **[#723](https://github.com/anthropics/skills/pull/723)** `testing-patterns` | Comprehensive testing stack: Testing Trophy model, AAA pattern, React Testing Library, contract testing, property-based, mutation testing, CI integration | Fills gap: no existing skill covers end-to-end testing philosophy + implementation patterns | **Open** |
| 5 | **[#486](https://github.com/anthropics/skills/pull/486)** `odt` (OpenDocument) | Create, fill, read, convert `.odt`/`.ods`; template filling; ODT→HTML parsing | Targets open-standard document workflows (LibreOffice, ISO/IEC 26300) | **Open** |
| 6 | **[#1302](https://github.com/anthropics/skills/pull/1302)** `color-expert` | Color naming systems (ISCC-NBS, Munsell, XKCD, RAL), color spaces (OKLCH, OKLAB, CAM16), accessibility contrast, gamut mapping | Self-contained color science reference; "what to use when" decision tables | **Open** |
| 7 | **[#1479](https://github.com/anthropics/skills/pull/1479)** `plan-file-hygiene` | Lifecycle management for planning artifacts (creation, update, archival, cleanup) | Addresses #1417: planning docs accumulate with no expiration/cleanup mechanism | **Open** |
| 8 | **[#83](https://github.com/anthropics/skills/pull/83)** `skill-quality-analyzer` + `skill-security-analyzer` | Meta-skills: 5-dimension quality scoring (structure, examples, resources, triggers, maintainability) + security scanning (secrets, permissions, injection) | Enables automated skill review; published to `example-skills` marketplace | **Open** |

---

## 2. Community Demand Trends
*Distilled from top Issues (by comments + 👍)*

| Trend | Evidence | Community Signal |
|-------|----------|------------------|
| **Trust & Security Hardening** | [#492](https://github.com/anthropics/skills/issues/492) (43 comments, 2👍): community skills masquerading under `anthropic/` namespace; [#189](https://github.com/anthropics/skills/issues/189) (6 comments, 9👍): duplicate skills from `document-skills`/`example-skills` plugins | **Critical** — namespace impersonation enables privilege escalation; users demand clear official vs. community boundaries |
| **Org-Level Skill Distribution** | [#228](https://github.com/anthropics/skills/issues/228) (16 comments, 8👍): "download → Slack → manual upload" workflow is broken; need shared library or direct sharing links | **High** — enterprise adoption blocked by friction |
| **`skill-creator` Toolchain Reliability** | [#556](https://github.com/anthropics/skills/issues/556) (12 comments, 7👍), [#1169](https://github.com/anthropics/skills/issues/1169) (3 comments, 1👍), [#1061](https://github.com/anthropics/skills/issues/1061) (3 comments, 2👍): 0% recall on Windows, subprocess/encoding failures, PATHEXT issues | **High** — core authoring loop non-functional on Windows; blocks skill contribution |
| **Quality Gates / Reasoning Verification** | [#1385](https://github.com/anthropics/skills/issues/1385) (4 comments): 3-gate pipeline (calibration → adversarial review → delivery verification); [#1367](https://github.com/anthropics/skills/pull/1367) PR implements self-audit | **Emerging** — shift from "generate" to "verify before deliver" |
| **MCP / Bedrock Integration** | [#16](https://github.com/anthropics/skills/issues/16) (4 comments): expose skills as MCP endpoints; [#29](https://github.com/anthropics/skills/issues/29) (4 comments): AWS Bedrock compatibility | **Niche but persistent** — platform interoperability demand |
| **Compact State / Memory Management** | [#1329](https://github.com/anthropics/skills/issues/1329) (9 comments): `compact-memory` skill using symbolic notation for agent state compression | **Emerging** — context window pressure drives notation innovation |

---

## 3. High-Potential Pending Skills
*Active-comment PRs with strong merge signals (fixes, clear scope, community backing)*

| PR | Skill | Why It May Land Soon |
|----|-------|----------------------|
| **[#1298](https://github.com/anthropics/skills/pull/1298)** | `skill-creator` eval pipeline fix | **Blocker fix**: 10+ reproductions, breaks core authoring loop; Windows fixes bundled (#1099, #1050, #1323) |
| **[#514](https://github.com/anthropics/skills/pull/514)** | `document-typography` | Universal need, no dependencies, high upvote potential |
| **[#538](https://github.com/anthropics/skills/pull/538)** | `pdf` case-sensitivity fix | Trivial 8-line fix; breaks on Linux/CI; author has 3 other merged fixes |
| **[#1367](https://github.com/anthropics/skills/pull/1367)** | `self-audit` | Implements [#1385](https://github.com/anthropics/skills/issues/1385) proposal; universal applicability |
| **[#723](https://github.com/anthropics/skills/pull/723)** | `testing-patterns` | Fills documented gap; comprehensive scope; no competing PR |
| **[#1302](https://github.com/anthropics/skills/pull/1302)** | `color-expert` | Self-contained, well-scoped, cross-domain utility (design, a11y, data viz) |
| **[#1479](https://github.com/anthropics/skills/pull/1479)** | `plan-file-hygiene` | Addresses explicit issue [#1417](https://github.com/anthropics/skills/issues/1417); community-named problem |
| **[#83](https://github.com/anthropics/skills/pull/83)** | `skill-quality-analyzer` / `skill-security-analyzer` | Meta-tooling for ecosystem health; enables automated review |

---

## 4. Skills Ecosystem Insight

> **The community's most concentrated demand is making the skill authoring loop reliable and trustworthy: fixing the broken `skill-creator` evaluation pipeline (0% recall on Windows), establishing security boundaries against namespace impersonation, and building automated quality gates so skills can be verified before distribution.**

---

# Claude Code Community Digest — 2026-08-03

## Today's Highlights
No new releases shipped in the last 24 hours. Community attention is concentrated on two critical platform bugs: a long-standing **Windows line-ending regression on Linux** (Issue #2805, 44 comments, 33 👍) and a **Windows BSOD triggered by directory enumeration** (Issue #32870, 38 comments). Meanwhile, the **Cowork global-instructions revert bug** (Issue #40175, 32 comments, 20 👍) and an **OAuth loop on IntelliJ** (Issue #77966, 20 comments, 14 👍) continue to disrupt team workflows.

---

## Releases
*No releases published in the last 24 hours.*

---

## Hot Issues (Top 10 by Impact & Community Signal)

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#2805](https://github.com/anthropics/claude-code/issues/2805) | **Windows line endings (CRLF) created on Linux** — breaks shell scripts with "No such file or directory" | Long-standing cross-platform regression (open since Jul 2025); affects every Linux user writing executable files | 44 comments · 33 👍 |
| [#32870](https://github.com/anthropics/claude-code/issues/32870) | **claude.exe triggers Windows BSOD via Wof.sys during NtQueryDirectoryFileEx** | Kernel-level crash; blocks Windows developers entirely; reproducible with directory listing | 38 comments · 1 👍 |
| [#40175](https://github.com/anthropics/claude-code/issues/40175) | **Cowork: Global instructions silently revert to older version after saving** | Team collaboration feature loses configuration silently; undermines trust in shared settings | 32 comments · 20 👍 |
| [#77966](https://github.com/anthropics/claude-code/issues/77966) | **OAuth loop on IntelliJ — state parameter dropped after "sign in again" redirect** | Blocks IDE authentication flow; affects JetBrains users on Linux | 20 comments · 14 👍 |
| [#66504](https://github.com/anthropics/claude-code/issues/66504) | **Session URL appended to commit messages/PRs by default — should be opt-in** | Privacy/UX concern; pollutes git history; strong consensus for opt-in behavior | 11 comments · **44 👍** |
| [#76689](https://github.com/anthropics/claude-code/issues/76689) | **400 "effort 'xhigh' not supported when thinking disabled" on Opus 4.8 despite `alwaysThinkingEnabled: true`** | Model-config mismatch breaks high-effort workflows on VS Code | 10 comments · 11 👍 |
| [#83411](https://github.com/anthropics/claude-code/issues/83411) | **Desktop app session worktrees don't initialize git submodules (CLI `--worktree` does)** | Silent failure: `CLAUDE.md` imports from submodules resolve to nothing; breaks project hooks | 1 comment · 0 👍 (new, high severity) |
| [#83364](https://github.com/anthropics/claude-code/issues/83364) | **WebSearch always returns HTTP 400 at `xhigh`/`max` effort on Opus 5 (v2.1.220 regression)** | Tool completely non-functional at high effort levels; regression from default flip | 1 comment · 0 👍 (new, blocks search) |
| [#83421](https://github.com/anthropics/claude-code/issues/83421) | **`bypassPermissions` mode doesn't propagate to Task/Agent subagents** | Subagents prompt for permissions despite parent session running unbypassed; breaks automation | 1 comment · 0 👍 (new, architecture gap) |
| [#24537](https://github.com/anthropics/claude-code/issues/24537) | **Feature: Agent Hierarchy Dashboard — real-time multi-agent visualization (TUI + Desktop)** | High-demand observability for multi-agent workflows; 17 👍 shows strong appetite | 14 comments · 17 👍 |

---

## Key PR Progress (All 3 Active PRs)

| # | PR | Summary | Status |
|---|----|---------|--------|
| [#83374](https://github.com/anthropics/claude-code/pull/83374) | **docs(plugin-dev): add MessageDisplay hook guidance** | Documents the missing `MessageDisplay` hook event in the bundled Hook Development skill (trigger description, event guidance, quick-reference table) | Open · Updated 2026-08-02 |
| [#26056](https://github.com/anthropics/claude-code/pull/26056) | **Fix code-review plugin posting to GitHub without `--comment` flag** | Strengthens guardrails: top-level behavioral rule, conditional gating of steps 8–9, reinforced stop instruction at step 7, `NEVER-post` note | Open · Updated 2026-08-02 (created 2026-02-16) |
| [#48343](https://github.com/anthropics/claude-code/pull/48343) | **fix(plugin-dev): make skill-reviewer frontmatter valid YAML** | Rewrites frontmatter description as a YAML block scalar to fix parsing; part of #40370 | Open · Updated 2026-08-02 (created 2026-04-15) |

> **Note:** Only 3 PRs updated in the last 24h — all documentation/plugin-maintenance fixes. No core feature or bug-fix PRs in this window.

---

## Feature Request Trends (from Issues)

1. **Multi-Agent Observability** — Dashboard for agent hierarchies, real-time visualization (Issue #24537, 17 👍)
2. **Privacy-First Defaults** — Opt-in for session URLs in git/PR metadata (Issue #66504, 44 👍)
3. **Persistent UI State** — "Keep sidebar open" setting, discoverable pinned state (Issue #75523)
4. **Slash-Command Customization** — Pin/reorder `/` autocomplete menu (Issue #83441)
5. **Scoped Rate-Limit Telemetry** — Per-model weekly caps exposed to statusline (Issue #81940)
6. **Delegation Control** — `ultracode`/`enableWorkflows` should suppress default "don't delegate" system prompts (Issue #83439)
7. **Full-History Search** — Restore classic renderer's exact-search in TUI `Ctrl+R` (Issue #83444)

---

## Developer Pain Points (Recurring Themes)

| Pain Point | Evidence |
|------------|----------|
| **Cross-platform file encoding** | #2805 (CRLF on Linux, 13 months open), #83342 (ugrep memory balloon on Linux) |
| **Windows stability** | #32870 (BSOD), #76689 (effort config mismatch), #48078 (startup toggle stuck) |
| **Authentication fragility** | #77966 (OAuth loop IntelliJ), #80058 (Dispatch broken on macOS Desktop) |
| **Silent data loss** | #40175 (Cowork instructions revert), #77010 (queued messages lost on session switch), #71603 (mobile drafts discarded) |
| **Submodule/worktree gaps** | #83411 (Desktop worktrees skip submodules), #73673 (plugins never auto-update) |
| **Model/tooling mismatches** | #83364 (WebSearch broken at high effort), #82803 (32k token repetition loop), #82588 (Opus 5 Hangul substitution) |
| **Permission model leakage** | #83421 (`bypassPermissions` not inherited by subagents), #83445 (false-positive safety flags on markdown) |
| **Mobile/remote-control gaps** | #82854 (`/context` broken, `/usage` freezes session), #71603 (draft loss on background) |

---

*Digest generated from github.com/anthropics/claude-code data as of 2026-08-03 00:00 UTC. Links point to live issues/PRs.*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-08-03

## 1. Today's Highlights
No new releases shipped in the last 24 hours. The issue tracker shows intense community focus on **Windows Desktop stability** (multiple crash/disconnect reports), **token/cost efficiency** (background polling burning credits), and **VS Code extension diff failures** on macOS and Windows. A critical context-window regression on GPT-5.6 Sol (capped at 372K vs 1.05M spec) and Linux desktop app demand (900+ 👍) remain top community priorities.

## 2. Releases
*None in the last 24 hours.*

## 3. Hot Issues (Top 10 by Impact & Community Signal)

| # | Issue | Why It Matters | Community Reaction |
|---|-------|----------------|-------------------|
| **#11023** | **[Linux Desktop App](https://github.com/openai/codex/issues/11023)** | Most-upvoted open issue (906 👍). Users blocked on macOS power issues need Linux native support. | 197 comments; sustained since Feb 2026 |
| **#35058** | **[VS Code Diff Crash on macOS](https://github.com/openai/codex/issues/35058)** | Core review workflow broken — "Oops, an error" on every diff open. Affects all repos, fresh workspaces. | 45 comments, 115 👍; updated today |
| **#13733** | **[Background Polling Burns Tokens](https://github.com/openai/codex/issues/13733)** | Each `write_stdin` poll sends full history to API — silent credit drain during long builds/tests. | 35 comments, 30 👍; updated today |
| **#31860** | **[GPT-5.6 Sol Context Cap at 372K](https://github.com/openai/codex/issues/31860)** | Model spec promises 1.05M; Codex caps at 372K (353K effective). Critical for large codebases. | 12 comments, 25 👍; updated today |
| **#23198** | **[Windows Desktop Extreme Slowness](https://github.com/openai/codex/issues/23198)** | App-level perf regression isolated to Codex; machine otherwise fine. Blocks daily Windows usage. | 21 comments, 47 👍 |
| **#35259** | **[Desktop Re-enters Model During Wait Polling](https://github.com/openai/codex/issues/35259)** | 19.8% of token volume from idle wait/status polling in Ultra/multi-agent mode. | 11 comments, 2 👍; updated today |
| **#35420** | **[OneDrive Workspace Disconnects](https://github.com/openai/codex/issues/35420)** | Windows ChatGPT Work/Codex stream fails repeatedly on OneDrive-backed workspaces when sync degraded. | 26 comments; updated yesterday |
| **#10090** | **[Windows Sandbox CreateProcessAsUserW Failed](https://github.com/openai/codex/issues/10090)** | Elevated sandbox breaks all agent commands with `(no output)`; error code 5 (access denied). | 22 comments, 7 👍 |
| **#35119** | **[WSL Repos Marked Non-Git](https://github.com/openai/codex/issues/35119)** | Regression in 26.721.3404: valid WSL2 ext4 repos reported as "Git unavailable." | 13 comments, 13 👍 |
| **#35481** | **[VS Code Diff Crash on Windows (CLOSED)](https://github.com/openai/codex/issues/35481)** | Same "Oops" diff error as macOS #35058; closed but may indicate cross-platform root cause. | 14 comments, 46 👍 |

## 4. Key PR Progress (All 6 PRs Updated in Last 24h)

| # | PR | Type | Summary |
|---|----|------|---------|
| **#36641** | [Capture rollout budget units](https://github.com/openai/codex/pull/36641) | **Fix** (closed) | Parses `codex_rollout_budget_units` from Responses API usage into `TokenUsage`; keeps provider-only value out of serialized protocol. |
| **#31817** | [Update models.json](https://github.com/openai/codex/pull/31817) | **Maintenance** (open) | Automated model catalog update — likely includes GPT-5.6 Sol context window fix tracking. |
| **#36635** | [Expose onboarding hints in login](https://github.com/openai/codex/pull/36635) | **Feature** (closed) | Accepts `.onboarding_entrypoint=life_sciences` OAuth suffix; returns parsed callback metadata for tailored onboarding flows. |
| **#36632** | [Preserve SQLite thread metadata](https://github.com/openai/codex/pull/36632) | **Fix** (closed) | Prevents goal mutations from overwriting SQLite-only thread metadata (previews, etc.) during rollout reconciliation. |
| **#31781** | [Bound executor HTTP response buffering](https://github.com/openai/codex/pull/31781) | **Security** (open, code-reviewed) | Limits streamed HTTP response buffering in remote exec-server — prevents untrusted peer from forcing large memory retention via oversized frames. |
| **#36544** | [Support portable Agent Plugins](https://github.com/openai/codex/pull/36544) | **Feature** (closed) | Fixes packaging/install for Agent Plugins with `plugin.json` schema, dotted names, and non-directory-safe versions. |

## 5. Feature Request Trends
From the issue corpus, the strongest community demand signals are:

1. **Linux Native Desktop App** (#11023, 906 👍) — #1 most-requested platform feature
2. **OpenAI Service Tier Control** (#2916, 54 👍) — Cost/latency optimization via `service_tier` config
3. **Claude Code-like Remote Control** (#27565, 12 👍) — Mobile↔CLI sync without SSH tunnels
4. **Custom Session Retention Policies** (#6015, 15 👍) — Auto-cleanup of old conversation history
5. **Max Reasoning Effort in VS Code** (#35763) — Parity with Desktop app for GPT-5.6-Sol
6. **Agent Plugin Portability** (PR #36544) — Schema-driven, version-flexible plugin distribution

## 6. Developer Pain Points (Recurring High-Friction Themes)

| Pain Point | Evidence | Affected Surfaces |
|------------|----------|-------------------|
| **Windows Desktop Instability** | 5+ distinct issues: slowness (#23198), sandbox failures (#10090), WSL Git detection (#35119), OneDrive disconnects (#35420), browser tab crash (#34239, #35210) | Desktop App, App Server |
| **VS Code Diff View Broken** | macOS (#35058) + Windows (#35481) — "Oops, an error" on every diff open; core review workflow blocked | IDE Extension |
| **Silent Token/Credit Burn** | Background polling sends full history (#13733), wait/status re-entries consume ~20% tokens (#35259), app-server loads all sessions on every call (#22411) | CLI, Desktop, App Server |
| **Context Window Regression** | GPT-5.6 Sol capped at 372K vs 1.05M spec (#31860) — impacts large-repo reasoning | Desktop App, Model Catalog |
| **Session/History Corruption** | Paginated history drops records/reuses ordinals (#35746), compacted rollouts grow to 10GB+ with inline PNGs (#34863) | CLI, App Server |
| **Authentication/DeviceCheck Failures** | macOS 26.5 "DeviceCheck token generation unavailable" (#33463) | Desktop App |
| **Undo/Redo Broken in Extension** | Long-standing Chinese-language issue (#12978) — Git-tracked files cannot be reverted | IDE Extension |

---

*Digest generated from github.com/openai/codex data as of 2026-08-03. Links point to live GitHub issues/PRs.*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-08-03

## 1. Today's Highlights
The project shipped its daily nightly (`v0.55.0-nightly.20260803`) alongside a massive dependency refresh (75+ npm packages), including a major `@google/genai` SDK jump to v2.13.0 and a breaking `chalk@6` update requiring Node.js 22. Meanwhile, the issue backlog highlights two critical P1 agent regressions: subagents falsely reporting `GOAL` success after hitting turn limits (#22323) and the generalist agent hanging indefinitely on simple tasks (#21409).

## 2. Releases
**v0.55.0-nightly.20260803.gf47d6c6f7** — Automated nightly build.  
Full changelog: [compare](https://github.com/google-gemini/gemini-cli/compare/v0.55.0-nightly.20260802.gf47d6c6f7...v0.55.0-nightly.20260803.gf47d6c6f7)

## 3. Hot Issues (Top 10)

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) | **Subagent recovery after MAX_TURNS reported as GOAL success** | Subagents silently mask turn-limit exhaustion as successful completion, breaking trust in autonomous workflows. | 12 comments, 2 👍, P1, `status/need-retesting` |
| [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) | **Generalist agent hangs** | Generalist delegation causes hour-long stalls on trivial ops (e.g., folder creation); workaround is disabling subagents entirely. | 8 comments, 8 👍, P1 |
| [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) | **Shell command stuck at “Waiting input” after completion** | CLI shows active “awaiting user input” for finished commands, blocking subsequent turns. | 4 comments, 3 👍, P1, `effort/medium` |
| [#24353](https://github.com/google-gemini/gemini-cli/issues/24353) | **Robust component-level evaluations** | Epic to harden the 76 behavioral evals across 6 model variants; foundational for release confidence. | 7 comments, P1, `aiq/eval_infra` |
| [#19873](https://github.com/google-gemini/gemini-cli/issues/19873) | **Leverage model’s bash affinity via zero-dependency sandboxing** | Strategic shift to native POSIX toolchains (`grep`, `sed`, `awk`) for faster, cheaper code exploration. | 8 comments, 1 👍, P2, `effort/large` |
| [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) | **Assess AST-aware file reads, search, mapping** | Investigation into AST tooling (tilth/glyph) to reduce token noise and misaligned reads. | 7 comments, 1 👍, P2 |
| [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) | **Gemini under-utilizes skills & sub-agents** | Model rarely invokes custom skills/sub-agents autonomously; requires explicit user prompting. | 6 comments, P2 |
| [#26522](https://github.com/google-gemini/gemini-cli/issues/26522) | **Auto Memory retries low-signal sessions indefinitely** | Extraction agent re-queues unread transcripts, causing unbounded retry loops. | 5 comments, P2 |
| [#26525](https://github.com/google-gemini/gemini-cli/issues/26525) | **Deterministic redaction & reduced Auto Memory logging** | Secrets enter model context before redaction; service logs skill data insecurely. | 4 comments, P2, `area/security` |
| [#22465](https://github.com/google-gemini/gemini-cli/issues/22465) | **CLI stuck at interactive prompt creating Vite app** | Behavioral eval gap: agent cannot handle interactive scaffolding prompts. | 2 comments, P2 |

## 4. Key PR Progress (Top 10)

| # | PR | Summary | Impact |
|---|----|---------|--------|
| [#28638](https://github.com/google-gemini/gemini-cli/pull/28638) | **chore/release: bump to 0.55.0-nightly.20260803** | Automated nightly cut. | Release pipeline |
| [#28631](https://github.com/google-gemini/gemini-cli/pull/28631) | **chore(deps): bump @google/genai 1.30.0 → 2.13.0** | Major SDK upgrade; likely includes new model capabilities & API changes. | Core dependency |
| [#28635](https://github.com/google-gemini/gemini-cli/pull/28635) | **chore(deps): bump undici 7.10.0 → 8.9.0** | High-severity security fixes in HTTP client. | Security |
| [#28634](https://github.com/google-gemini/gemini-cli/pull/28634) | **chore(deps): bump chalk 4.1.2 → 6.0.0** | **Breaking:** requires Node.js 22; update CI/runtime matrices. | Build/Infra |
| [#28626](https://github.com/google-gemini/gemini-cli/pull/28626) | **chore(deps): 75 npm updates (group)** | Bulk refresh: `simple-git`, `@modelcontextprotocol/sdk`, `ink`, etc. | Maintenance |
| [#28628](https://github.com/google-gemini/gemini-cli/pull/28628) | **chore(deps): bump @a2a-js/sdk 0.3.11 → 1.0.0** | A2A protocol SDK hits 1.0; potential breaking changes in agent interop. | Agent protocol |
| [#28627](https://github.com/google-gemini/gemini-cli/pull/28627) | **chore(deps): bump @agentclientprotocol/sdk 0.16.1 → 1.3.0** | Agent Client Protocol SDK major update. | Agent protocol |
| [#28526](https://github.com/google-gemini/gemini-cli/pull/28526) | **fix(vscode-ide-companion): stop leaking disposables** | Fixes #27790; stray parentheses caused `gemini.diff.accept` & workspace listeners to leak. | VS Code extension stability |
| [#28624](https://github.com/google-gemini/gemini-cli/pull/28624) | **fix(core): prevent boolean thought parts leaking as `[Thought: true]`** | Fixes #23525; internal `thought: true` fields no longer render as user-visible text. | UX polish |
| [#27070](https://github.com/google-gemini/gemini-cli/pull/27070) | **branch optimize virtual list2** | Large refactor: virtualized list perf, scrolling checkpoints, test fixes. | Terminal rendering performance |

## 5. Feature Request Trends
1. **Subagent observability & control** — Trajectory sharing (`/chat share` #22598), settings.json overrides (#22267), symlink support (#20079), and autonomous invocation (#21968).
2. **Native bash-first tooling** — Zero-dependency sandboxing (#19873), AST-aware reads (#22745), and reducing custom tool surface area.
3. **Evaluation & quality infrastructure** — Component-level evals (#24353), behavioral evals for interactive prompts (#22465), and subagent-inclusive bug reports (#21763).
4. **Memory system hardening** — Deterministic redaction (#26525), inbox quarantine (#26523), and retry-loop elimination (#26522).
5. **Browser agent resilience** — Session takeover (#22232), Wayland support (#21983), and config adherence (#22267).

## 6. Developer Pain Points
- **False success signals**: Subagents report `GOAL` success after hitting `MAX_TURNS` (#22323), misleading users and evals.
- **Agent hangs**: Generalist delegation freezes on trivial commands (#21409); shell tool shows “awaiting input” post-execution (#25166).
- **Permission bypass**: Subagents activate despite `agents.mode: disabled` config (#22093).
- **Resource leaks**: VS Code extension disposables leak (#28526); terminal corrupts after external editors (#24935).
- **Tool explosion**: 400+ tools trigger 400 errors; no smart scoping (#24246).
- **Security gaps**: Auto Memory sends unredacted transcripts to model (#26525); destructive commands (`git reset --force`) used without safeguards (#22672).
- **Workspace pollution**: Model scatters temp scripts across repo during shell-only modes (#23571).

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-08-03

---

## 1. Today's Highlights

No new releases shipped in the last 24 hours, but the issue tracker saw a surge of fresh regressions and UX bugs filed against the 1.0.7x series. The most impactful reports involve a **file-access regression in the built-in `view` tool** (#4202), **autopilot state loss on session resume** (#4329), and **model-endpoint mismatches breaking aggregator tooling** (#4337). Several new input-handling and session-management defects (#4334, #4335, #4336, #4328) point to growing friction in the interactive loop.

---

## 2. Releases

*No releases published in the last 24 hours.*

---

## 3. Hot Issues

| # | Title & Link | Why It Matters | Community Signal |
|---|--------------|----------------|------------------|
| 1 | **[#4202](https://github.com/github/copilot-cli/issues/4202)** Built-in `view` reports “Path does not exist” for existing files in 1.0.73; 1.0.71 succeeds | Core file-reading tool broken since 1.0.72; blocks basic code-navigation workflows. | 3 comments, active repro; regression confirmed. |
| 2 | **[#4337](https://github.com/github/copilot-cli/issues/4337)** `gpt-5.6-luna` advertised in `/models` but inaccessible via `/chat/completions` | Breaks MoA/aggregator tooling that expects OpenAI-compatible chat endpoint; model discovery vs. execution mismatch. | Filed today, zero comments yet — high severity for plugin authors. |
| 3 | **[#4336](https://github.com/github/copilot-cli/issues/4336)** Cancelled user input still delivered to agent in autopilot mode | Cancelled keystrokes reappear later with stale timestamps; agent processes them as valid turns — silent data corruption. | New, no comments; critical for autopilot trust. |
| 4 | **[#4335](https://github.com/github/copilot-cli/issues/4335)** ACP `toolCall.title` shows summary, not executable command | Editor clients (Zed, etc.) show vague titles in approval modals; users can’t see actual shell command before approving. | New; blocks safe human-in-the-loop review. |
| 5 | **[#4334](https://github.com/github/copilot-cli/issues/4334)** Stashed (`ctrl+S`) prompt discarded on session switch | Input loss when switching sessions; `ctrl+S` pop restores nothing — direct data-loss bug. | New; affects multi-session workflows. |
| 6 | **[#4329](https://github.com/github/copilot-cli/issues/4329)** Autopilot not actually enabled when resuming a session that had it on | Statusline shows enabled, but approval-required actions fail; silent permission downgrade. | Regression in 1.0.77; undermines autopilot reliability. |
| 7 | **[#4328](https://github.com/github/copilot-cli/issues/4328)** `Ctrl+H` (delete char) misinterpreted as `Ctrl+Backspace` (delete word) under WSL2 | `WT_SESSION` env leak from Windows Terminal corrupts keybinding map; breaks documented shortcut. | New; WSL2 is a primary dev environment. |
| 8 | **[#2286](https://github.com/github/copilot-cli/issues/2286)** Support git symlinks in plugin install on Windows | `core.symlinks=false` default leaves text stubs instead of resolved files; plugin installs break on Windows. | Long-standing (Mar), updated today; 2 comments — Windows parity gap. |
| 9 | **[#4292](https://github.com/github/copilot-cli/issues/4292)** Colors completely off in tmux with light theme | Light theme unreadable inside tmux; works fine outside. Terminal-detection/rendering bug. | Updated today; screenshot attached; affects tmux-heavy users. |
| 10 | **[#4332](https://github.com/github/copilot-cli/issues/4332)** Provide a way to silence the once-per-session “Memory is disabled” notice | No config to suppress the info line when `memory: false`; noise for users who intentionally disable memory. | New; small but sharp UX papercut. |

---

## 4. Key PR Progress

*No pull requests updated in the last 24 hours.*

---

## 5. Feature Request Trends

| Trend | Representative Issues | Notes |
|-------|----------------------|-------|
| **Model-endpoint parity & discoverability** | #4337 | Users expect `/models` list to match `/chat/completions` capabilities; breaking change for aggregator frameworks. |
| **Session persistence & state fidelity** | #4329, #4334 | Autopilot flag, stashed input, and memory notices not surviving session boundaries. |
| **ACP/editor integration polish** | #4335 | Need executable command surfaced in `toolCall` for safe approval UX in host editors. |
| **Windows/WSL2 first-class support** | #2286, #4328 | Symlink handling, keybinding leaks, terminal env interference. |
| **Terminal rendering robustness** | #4292 | Theme detection inside multiplexers (tmux) remains fragile. |
| **Noise reduction / configurability** | #4332 | Granular control over informational banners. |

---

## 6. Developer Pain Points

1. **Regression fatigue** — Multiple core tools (`view`, autopilot, session resume) broken in recent 1.0.7x releases; users pinning to 1.0.71.
2. **Silent data loss** — Cancelled input reappearing (#4336), stashed prompts vanishing (#4334) erode trust in the interactive loop.
3. **Editor-client blind spots** — ACP `toolCall.title` hides the actual command (#4335), forcing “approve blindly” workflows.
4. **Windows/WSL2 as second-class** — Symlink stubs, keybinding corruption, and terminal env leaks persist months after reporting.
5. **Model surface inconsistency** — New models appear in discovery but not in the standard chat endpoint (#4337), breaking downstream tooling.
6. **Theme/rendering fragility** — Light mode broken in tmux (#4292) with no workaround; accessibility impact.

---

*Digest generated from github.com/github/copilot-cli data as of 2026-08-03 00:00 UTC. Links point to live GitHub items.*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-08-03

## Today's Highlights
No new releases in the past 24 hours. Community activity centers on **session persistence** and **resilience**: a highly-upvoted request for remote session continuation (#1282, 24 👍), a new proposal for an external wake channel to drive interactive TUI sessions (#2579), and a critical swarm reliability report detailing partial-work loss and token waste on 403/timeout errors (#2578). A streaming `Monitor` tool PR (#2471) was closed without merge.

---

## Releases
*None in the last 24h.*

---

## Hot Issues

| # | Title | Why It Matters | Community Reaction |
|---|-------|----------------|-------------------|
| [#1282](https://github.com/MoonshotAI/kimi-cli/issues/1282) | **Remote Control – Continue local sessions from any device** | Enables mobile/browser access to a running local TUI, preserving full environment (files, processes, auth). High impact for developers who context-switch across devices. | **24 👍**, 11 comments — strong signal this is a top-voted workflow gap. |
| [#1283](https://github.com/MoonshotAI/kimi-cli/issues/1283) | **Memory System – Persistent context across sessions** | Requests both AI-managed automatic memory and user-defined manual memory (`.kimi/memory/`). Addresses the “goldfish” problem of losing project conventions, preferences, and learned patterns between invocations. | 14 comments, ongoing design discussion; no 👍 yet but deep technical engagement. |
| [#2579](https://github.com/MoonshotAI/kimi-cli/issues/2579) | **External wake channel for running interactive sessions** | Allows headless agents to inject tasks into a live TUI via filesystem inbox (inotify). Unlocks multi-agent orchestration and async hand-off without restarting the CLI. | New (0 comments), but represents an emerging **agent-to-agent** integration pattern. |
| [#2578](https://github.com/MoonshotAI/kimi-cli/issues/2578) | **Swarm 403/timeout mid-batch → partial work lost, tokens re-spent, broken tree blocks others** | Critical reliability bug: quota errors or timeouts leave subagent workspaces in corrupted state, waste paid tokens on retry, and block dependent tasks. Directly affects cost and trust for parallel workloads. | New, 0 comments — high severity for teams using swarm/parallel execution. |

---

## Key PR Progress

| # | Title | Status | Summary |
|---|-------|--------|---------|
| [#2471](https://github.com/MoonshotAI/kimi-cli/pull/2471) | `feat(tools): add Monitor tool for per-line stdout streaming` | **Closed (unmerged)** | Introduced a `Monitor` tool to stream background-command output line-by-line (counterpart to existing background tool). Closed without merge; rationale not disclosed in thread. May resurface as a separate feature PR. |

---

## Feature Request Trends
1. **Session continuity & mobility** — Remote control (#1282), persistent memory (#1283), and external wake (#2579) all point to a single theme: *the CLI must survive context switches, device changes, and multi-agent hand-offs without losing state*.
2. **Structured memory layer** — Explicit demand for a versioned, queryable memory store (auto + manual) that survives upgrades and works across machines.
3. **Observability & control for background work** — The `Monitor` tool PR and wake-channel request show developers want fine-grained streaming I/O and event-driven control over long-running or headless sessions.
4. **Swarm/parallel resilience** — First-class retry, checkpointing, and workspace isolation for subagents to prevent cascade failures and token waste.

---

## Developer Pain Points
| Pain Point | Evidence | Impact |
|------------|----------|--------|
| **State loss between sessions** | #1283 (memory system), #1282 (remote continue) | Re-learning project conventions, re-authenticating, re-opening files every launch. |
| **No mobile/remote access to local TUI** | #1282 (24 👍) | Forces developers to stay at desk or lose momentum; no “pick up where I left off” on phone/tablet. |
| **Swarm failures are expensive & sticky** | #2578 (403/timeout → broken workspaces, double billing) | Wasted API spend, manual cleanup, blocked dependent tasks; erodes confidence in parallel execution. |
| **Limited background-process visibility** | #2471 (Monitor tool proposed), #2579 (wake channel) | Can’t tail, inject into, or orchestrate long-running TUI sessions programmatically. |
| **No standardized agent-to-agent IPC** | #2579 (filesystem inbox + inotify) | Ad-hoc workarounds (mail directories, polling) instead of a supported protocol. |

---

*Digest generated from GitHub data as of 2026-08-03 00:00 UTC. Links point to live issues/PRs on `MoonshotAI/kimi-cli`.*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-08-03

## Today's Highlights
The community is heavily focused on stability and resource management: a **Memory Megathread** (#20695, 121 comments) centralizes scattered OOM reports, while two critical leaks—temporary `.so` files filling `/tmp` (#28089) and `libopentui` copies consuming 200+ GiB (#39876)—are under active investigation. On the feature side, a new `OPENCODE_AIRGAP` kill-switch (#39994) landed for air-gapped deployments, and a request-scoped `chat.model` plugin hook (#40188) enables per-request model swapping.

## Releases
No new releases in the last 24 hours.

## Hot Issues

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#20695](https://github.com/anomalyco/opencode/issues/20695) | **Memory Megathread** | Central tracking for all OOM/heap issues; asks users for heap snapshots rather than LLM guesses. | 121 comments, 94 👍 — highest engagement in repo |
| [#4695](https://github.com/anomalyco/opencode/issues/4695) | **Speech-to-Text Voice Input** | Community-built STT feature; closed after implementation. | 36 comments, 170 👍 — strong demand for voice UX |
| [#39845](https://github.com/anomalyco/opencode/issues/39845) | **DeepSeek V4 Flash requires China opt-in mid-session** | Sudden policy enforcement breaks active sessions; affects Go subscribers. | 11 comments, 18 👍 — urgent for paying users |
| [#39861](https://github.com/anomalyco/opencode/issues/39861) | **Zero-data-retention policy removed from docs** | Policy change without announcement raises compliance concerns. | 8 comments, 15 👍 — trust/transparency issue |
| [#28089](https://github.com/anomalyco/opencode/issues/28089) | **Leaks temporary `.so` files in `/tmp` (hundreds of GB)** | Disk exhaustion on long-running Linux instances; no cleanup. | 7 comments, 7 👍 — severe ops impact |
| [#39876](https://github.com/anomalyco/opencode/issues/39876) | **`libopentui` temp copies consume 207 GiB** | 58k+ dylib copies in `$TMPDIR`; near-fatal disk pressure. | 2 comments — critical resource leak |
| [#37495](https://github.com/anomalyco/opencode/issues/37495) | **SQLite WAL grows 10–15 GB, fills disk** | Multiple SQLite connections block WAL checkpointing; only full quit recovers. | 2 comments — Desktop stability blocker |
| [#37239](https://github.com/anomalyco/opencode/issues/37239) | **Service restart spawns silent retry loop (16× in 2.5 min)** | `opencode2 service restart` loops `serve --service` with no logs; requires manual kill. | 5 comments — v2 reliability |
| [#33884](https://github.com/anomalyco/opencode/issues/33884) | **TUI npm-spec plugins silently fail (OpenTUI 0.4.2 regression)** | Dual-entry loader regression; mitigated by pinning 0.3.4 on `dev`. | 5 comments, 1 👍 — plugin ecosystem breakage |
| [#23595](https://github.com/anomalyco/opencode/issues/23595) | **`<system-reminder>` moves, breaks llama.cpp cache** | Prompt history mutation invalidates KV cache, wasting compute. | 7 comments, 11 👍 — perf regression for local models |

## Key PR Progress

| # | PR | Type | Summary |
|---|----|------|---------|
| [#39994](https://github.com/anomalyco/opencode/pull/39994) | **feat: `OPENCODE_AIRGAP=1` kill-switch** | New feature (closed) | Disables all automatic internet access for air-gapped/intranet deployments. |
| [#40188](https://github.com/anomalyco/opencode/pull/40188) | **feat(plugin): request-scoped `chat.model` hook** | New feature | Allows plugins to swap model per request before provider/auth resolution. |
| [#40197](https://github.com/anomalyco/opencode/pull/40197) | **fix(app): eliminate persistence write amplification** | Bug fix | Replaces setter-coupled writes with shared repo + 500 ms checkpoint; SQLite WAL + IndexedDB parity. |
| [#40199](https://github.com/anomalyco/opencode/pull/40199) | **fix(opencode): handle removed OpenAI OAuth auth** | Bug fix (bot) | Guards mid-session OAuth removal race; adds regression test. |
| [#40198](https://github.com/anomalyco/opencode/pull/40198) | **fix(opencode): canonical Unicode equivalence in patches** | Bug fix | Adds NFC/NFD matching pass to `seekSequence()`; closes #31651. |
| [#40202](https://github.com/anomalyco/opencode/pull/40202) | **fix(app): search all known projects in Open Project dialog** | Bug fix | Dialog now searches beyond 5 most recent; empty state still shows 5. Closes #39142. |
| [#40163](https://github.com/anomalyco/opencode/pull/40163) | **fix(tui): Down arrow reaches end of prompt text** | Bug fix | Corrects `cursorOffset` column math for newlines/tabs. Closes #40161. |
| [#40125](https://github.com/anomalyco/opencode/pull/40125) | **feat(opencode): per-MCP-server trust configuration** | New feature | Granular trust per server; addresses #40111, #23506, #14696, #26862, #1694. |
| [#40184](https://github.com/anomalyco/opencode/pull/40184) | **feat(teach): Teach mode for pedagogical workflows** | New feature (closed) | Draft implementation of Teach mode per #36521; opened for design discussion. |
| [#38200](https://github.com/anomalyco/opencode/pull/38200) | **feat: Solidity syntax highlighting** | New feature | Adds `.sol` file type support and highlighting. |

## Feature Request Trends
1. **Voice & multimodal input** — STT (#4695), mobile composer fixes (#40204) show demand for non-keyboard workflows.  
2. **Granular control & transparency** — Per-MCP trust (#40125), air-gap switch (#39994), policy change visibility (#39861).  
3. **Plugin extensibility** — Request-scoped model hook (#40188), npm-spec TUI plugins (#33884), teach mode (#40184).  
4. **Session resilience** — `--resume` picker (#35023), subagent steer/cancel (#38966), queue drain on Esc (#35008).  
5. **Local model optimization** — Static `<system-reminder>` (#23595), cache write accounting (#37745), Unicode patch parity (#40198).

## Developer Pain Points
- **Resource leaks dominate**: temp `.so` files (#28089), `libopentui` copies (#39876), SQLite WAL bloat (#37495), memory pressure (#20695) — all cause disk/ram exhaustion on long sessions.  
- **Silent failures**: service retry loops without logs (#37239), plugin load failures (#33884), concurrent VS Code crashes (#38849), corrupted DB crashes (#37821).  
- **Auth/session friction**: re-prompting for stored keys (#33775, #40183), Copilot refresh token issues, mid-session model policy changes (#39845).  
- **Desktop/TUI polish**: splash hangs (#38222, #40170), Cmd+W race (#37610), mobile UI overlap (#40204), project picker prefix collision (#40094).  
- **v2 service instability**: restart loops, silent spawns, and process leaks indicate the new architecture needs hardening.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-08-03

## 1. Today's Highlights
The Pi codebase is undergoing a **major session architecture refactor** with four interconnected PRs (#7503, #7396, #7478, #7455) introducing experimental in-memory sessions, a durable server backend, and repository-based storage composition. Simultaneously, **compaction reliability** remains a top pain point: auto-compaction fails to trigger past 100% context (#6879, 10 👍), sessions stall after compaction (#7020), and enterprise Copilot users hit "unknown stamp" errors (#7413). A new **LLM Gateway provider** (#7480) and **DeepInfra support** (#7501) expand the provider ecosystem.

## 2. Releases
*No new releases in the last 24 hours.*

## 3. Hot Issues (10 Noteworthy)

| Issue | Why It Matters | Community Signal |
|-------|----------------|------------------|
| [#6879](https://github.com/earendil-works/pi/issues/6879) **Auto-compaction never triggers past 100% context** | Context grows until provider rejects at 373k tokens; compaction only kicks in on API failure. Critical for long agentic runs. | 10 comments, 10 👍 — highest engagement |
| [#7020](https://github.com/earendil-works/pi/issues/7020) **Pi doesn't continue after compaction** | Long-running "coordinator" sessions frequently stall post-compaction; marked `inprogress`. | 7 comments, 2 👍 |
| [#7062](https://github.com/earendil-works/pi/issues/7062) **OpenAI-completions: array content & missing finish_reason** | Breaks Databricks Qwen3/gpt-oss models returning typed arrays; affects tool-use streaming. | 6 comments |
| [#7113](https://github.com/earendil-works/pi/issues/7113) **TUI freezes on `/login` when pi.dev catalog unreachable** | `ModelRuntime.login()` awaits refresh with no timeout/AbortSignal; blocks 5+ min. | 4 comments, updated today |
| [#7505](https://github.com/earendil-works/pi/issues/7505) **Remote-catalog refresh after `/login` has no timeout** | Duplicate of #7113; login freezes ~5 min when pi.dev API unresponsive across multiple providers. | 1 comment, closed today |
| [#7504](https://github.com/earendil-works/pi/issues/7504) **IPv6 blackhole hangs Pi for ~5 min** | Undici dispatcher lacks `autoSelectFamily`; no IPv4 fallback on AAAA blackhole. Affects all network ops. | 1 comment, closed today |
| [#7413](https://github.com/earendil-works/pi/issues/7413) **Compaction fails on GitHub Copilot GHE.com** | Enterprise accounts get "unknown stamp" error during summarization; normal chat works. | 3 comments, closed |
| [#7321](https://github.com/earendil-works/pi/issues/7321) **Multi-line paste broken on Termux (no bracketed paste)** | First `\r` triggers submit instead of inserting pasted block; affects Android users. | 2 comments, 1 👍, still open |
| [#7481](https://github.com/earendil-works/pi/issues/7481) **WezTerm: kitty images degrade to 1-row sliver in scrolling transcripts** | Pasted screenshots render then progressively erase; root cause: capability detection maps WezTerm to kitty. | 2 comments, fixed in #7482 |
| [#7499](https://github.com/earendil-works/pi/issues/7499) **auth.json with UTF-8 BOM silently disables all credentials** | Windows Notepad saves BOM; all providers report "No API key found"; `/login` fails to save new keys. | 1 comment, closed |

## 4. Key PR Progress (10 Important)

| PR | Status | Summary |
|----|--------|---------|
| [#7503](https://github.com/earendil-works/pi/pull/7503) | Open | **Experimental in-memory sessions** — adds `Session`, `SessionStorage`, `SessionRepository` contracts with full backend (entries, lanes, facts, queries, logs, forks) exposed via `@earendil-works/pi-agent-core/experimental`. |
| [#7396](https://github.com/earendil-works/pi/pull/7396) | Open | **Server session backend** — durable `@earendil-works/pi-coding-agent/server` persisting sessions as JSONL with cross-process locking, crash recovery, and protocol snapshots. |
| [#7478](https://github.com/earendil-works/pi/pull/7478) | Closed | **Compose session storage through repositories** — replaces composed stores with resource-owning repositories; consolidates JSONL/in-memory indexing, fork selection, operation serialization. |
| [#7455](https://github.com/earendil-works/pi/pull/7455) | Closed | **Simplify session storage composition** — replaces `SessionReader`/`StoreSession` split with concrete `Session` facade and faceted `SessionStore`; preserves backend-native queries. |
| [#7498](https://github.com/earendil-works/pi/pull/7498) | Open | **Defer idle compaction until next prompt** — avoids unnecessary compaction wasting tokens; related to #6879 context-window issues with recent GPT models. |
| [#7480](https://github.com/earendil-works/pi/pull/7480) | Closed | **Add LLM Gateway provider** — OpenRouter-style router (~151 tool-capable models) with API key + OAuth login; contributed by LLM Gateway team. |
| [#7501](https://github.com/earendil-works/pi/pull/7501) | Closed | **Add DeepInfra provider** — standard OpenAI-compatible endpoint; no `developer` role support. |
| [#7494](https://github.com/earendil-works/pi/pull/7494) | Open | **Preserve Gemini 3 tool call IDs** — Gemini 3 returns IDs on function calls and expects same IDs on responses; extends `requiresToolCallId()` to Gemini ≥3. |
| [#7496](https://github.com/earendil-works/pi/pull/7496) | Closed | **Cycle execution duration + `/copy cycle`** — prints wall-clock time from user message to `agent_settled`; adds copy command for cycle transcripts (REQ-046). |
| [#7482](https://github.com/earendil-works/pi/pull/7482) | Closed | **Prefer iTerm2 inline images over kitty on WezTerm** — fixes progressive image erasure in scrolling transcripts (#7481) by correcting capability detection. |
| [#7468](https://github.com/earendil-works/pi/pull/7468) | Closed | **Accept Claude Code SKILL.md frontmatter** — both skill loaders now compatible with Claude Code skill reference; enables portable skill definitions. |
| [#7471](https://github.com/earendil-works/pi/pull/7471) | Closed | **Retry transient errors in Google adapters** — adds retry logic for 429/5xx before first token in `google-vertex` and `google-generative-ai`; prevents agent thread

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-08-03

## 1. Today's Highlights
The v0.21.3 nightly shipped with TUI keyboard shortcut documentation and a core pagination fix. Critical session-management bugs surfaced on Windows Desktop (auto-deletion on restart, #8400) and in OpenAI-compatible providers (abort-error misclassification, #8398; transcript gaps after cancellation, #8356). Meanwhile, the daemon/Web Shell track advances: Plan & Review workflow is now gated behind an experimental flag (#8391), and ConEmu/Cmder flicker gets a synchronized-output fix (#8406).

## 2. Releases
**v0.21.3-nightly.20260803.e1e5b42ce**  
- `docs`: Complete TUI keyboard shortcut reference ([#8327](https://github.com/QwenLM/qwen-code/pull/8327))  
- `fix(core)`: Unblock history pagination (partial note)  
→ [Release notes](https://github.com/QwenLM/qwen-code/releases/tag/v0.21.3-nightly.20260803.e1e5b42ce)

## 3. Hot Issues (10 noteworthy)

| # | Title | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#8400](https://github.com/QwenLM/qwen-code/issues/8400) | **Desktop 0.0.5/Windows: Sessions silently auto-deleted after restart when ACP load fails (cwd mismatch)** | P1 data-loss risk; users lose all local session mirrors without confirmation. | 2 comments, recent, Windows-specific severity. |
| [#8398](https://github.com/QwenLM/qwen-code/issues/8398) | **`isAbortError` doesn’t recognize OpenAI SDK’s `APIUserAbortError`** | Most common provider path (`auth_type=openai`); user cancellations misclassified → broken UX/telemetry. | 2 comments, P2, core utility. |
| [#8356](https://github.com/QwenLM/qwen-code/issues/8356) | **After `APIUserAbortError`, subsequent turns not written to local transcript** | Session history becomes incomplete after any user cancellation in daemon/ACP flows. | 2 comments, P2, session-management + daemon. |
| [#7164](https://github.com/QwenLM/qwen-code/issues/7164) | **Concurrent session writers fork transcript history and hide responses** | Two processes appending to same JSONL create divergent parent chains; recovery picks only one. | P1, long-standing (Jul 18), 2 comments, “welcome-pr”. |
| [#8389](https://github.com/QwenLM/qwen-code/issues/8389) | **Experimental Plan & Review workflow for daemon sessions (in progress)** | Turns Todo DAG into opt-in approval UX; unblocks safer daemon automation. | 2 comments, `status/in-progress`, follows #7525/#7580. |
| [#8382](https://github.com/QwenLM/qwen-code/issues/8382) | **Duplicate provider tool call id** | Recurring “not recorded” errors stall tool execution; affects reliability. | 3 comments, P2, core. |
| [#8376](https://github.com/QwenLM/qwen-code/issues/8376) | **Change process name from `node.exe` to `qwen-code.exe` for reliable identification** | Enables external tooling (profilers, monitors, firewall rules) to target Qwen specifically. | 4 comments, P3, packaging/Windows/macOS/Linux. |
| [#8385](https://github.com/QwenLM/qwen-code/issues/8385) | **ConEmu/Cmder: full-screen flicker on Windows (`node.exe`)** | Blocks usable TUI on popular terminals; only workaround is `CI=true`. | 2 comments, P3, `roadmap/terminal-ux`, `welcome-pr`. |
| [#8333](https://github.com/QwenLM/qwen-code/issues/8333) | **Main CI failed: E2E `cli/acp-cron.test.ts` (cron job streams via sessionUpdate)** | Flaky cron integration test blocks merges; auto-fix in progress. | 2 comments, `autofix/in-progress`, CI health. |
| [#8281](https://github.com/QwenLM/qwen-code/issues/8281) | **Add Email channel with IMAP/SMTP support** | New interaction modality: communicate with agent via dedicated mailbox. | 4 comments, P3, `roadmap/background-automation`, `need-discussion`. |

## 4. Key PR Progress (10 important)

| # | Title | Type | Status | Impact |
|---|-------|------|--------|--------|
| [#8391](https://github.com/QwenLM/qwen-code/pull/8391) | `feat(web-shell): gate Session Workflow behind experimental setting` | Feature | Open | Adds `experimental.sessionWorkflow` flag; Plan & Review opt-in for daemon WebShell. |
| [#8406](https://github.com/QwenLM/qwen-code/pull/8406) | `fix(cli): enable synchronized output for ConEmu/Cmder` | Fix | Open | Eliminates flicker (#8385) via DEC mode 2026; adds Windows Terminal detection. |
| [#8393](https://github.com/QwenLM/qwen-code/pull/8393) | `feat(web-shell): bind plan approval to its Todo revision` | Feature | Open | Approval DAG resolves only when plan ID + tool-call ID match transcript → safer reviews. |
| [#8332](https://github.com/QwenLM/qwen-code/pull/8332) | `feat(cli): add audio bridge for attachments` | Feature | Open | Transcribes user-supplied audio via batch voice model when primary model lacks audio support. |
| [#8408](https://github.com/QwenLM/qwen-code/pull/8408) | `fix(serve): authority-scoped credential stripping in provider warning sanitizer` | Fix | Open | Stops port truncation & password leaks in sanitized URLs. |
| [#8171](https://github.com/QwenLM/qwen-code/pull/8171) | `feat(memory): configure background agent turn limits` | Feature | Open | Shared `memory.agentMaxTurns` for extraction/dream/remember/skill-review agents (fixes #8168). |
| [#8320](https://github.com/QwenLM/qwen-code/pull/8320) | `feat(workflows): add cooperative pause and resume` | Feature | Open | Per-run scheduler stops new dispatches, converges in-flight work, gates results until resume. |
| [#8402](https://github.com/QwenLM/qwen-code/pull/8402) | `feat(review): Add structured Web Shell review results` | Feature | Open | Persists canonical findings/verdict as versioned session artifact; Web Shell renders it. |
| [#8383](https://github.com/QwenLM/qwen-code/pull/8383) | `fix(serve): detect lineEnding across the file, not the returned slice` | Fix | Open | Corrects `meta.lineEnding` detection (CRLF vs LF) for partial reads. |
| [#8213](https://github.com/QwenLM/qwen-code/pull/8213) | `feat(serve): establish workspace runtime ownership` | Feature | Open | Authoritative 5-state runtime snapshot, monotonic epochs, work leases, bounded startup/teardown. |

## 5. Feature Request Trends
1. **Daemon/Web Shell maturity** — Plan & Review gating (#8391), structured review artifacts (#8402), pause/resume workflows (#8320), native Live Voice (#7859), image drag-and-drop (#8321).  
2. **Session reliability & UX** — Fork from any conversation (#8274), workspace runtime ownership (#8213), transcript integrity (#7164, #8356), process naming (#8376).  
3. **Background/automation channels** — Email IMAP/SMTP (#8281), safe cloud deployment (#8291), cron/ACP integration (#8333).  
4. **Model/provider polish** — Fast-model defaults for `/chat/completions` (#8384), chat compression via prompt-cache fork (#8279), abort-error classification (#8398).  
5. **Terminal/rendering quality** — ConEmu/Cmder flicker fix (#8406), statusline preset colors/preview (#8363), table dialog scroll jump (#8407).

## 6. Developer Pain Points
- **Windows Desktop session loss** — Auto-deletion on restart without warning (#8400) is a top P1 blocker.  
- **Transcript corruption under concurrency** — Forked history (#7164) and post-abort gaps (#8356) erode trust in session replay.  
- **Provider error taxonomy gaps** — OpenAI `APIUserAbortError` unrecognized (#8398); duplicate tool-call IDs (#8382) cause silent failures.  
- **Terminal rendering on Windows** — ConEmu/Cmder flicker (#8385) forces `CI=true` workaround; process name `node.exe` hinders tooling (#8376).  
- **CI flakiness** — Recurring E2E failures on cron/ACP tests (#8333, #8375) and stale ECS runner versions (#8371) slow merge velocity.  
- **File reference reliability** — Desktop `@` search misses existing files (#8123), Maven generated sources pollute review prioritization (#8405).

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-08-03

---

## 1. Today's Highlights

The v0.9.4 development cycle is in full swing with **50+ active issues and PRs updated today**, focusing on session management (sidebar sessions panel), subagent resilience (resume chains, advisor watcher), fleet configuration overhaul (named fleets, layer shadowing fixes), and Termux/Android arm64 validation. A **release-blocker** was filed today (#5123) citing agent spawn surface complexity causing "read-only/self-BLOCKED" delegate failures. Meanwhile, v0.9.3 refactors (config splitting, main.rs thinning, subagent runtime extraction) and Termux QA have closed, clearing the path for the next stable.

---

## 2. Releases

**No new releases in the last 24 hours.** Current latest remains v0.9.x pre-release series.

---

## 3. Hot Issues (10 Noteworthy)

| # | Issue | Why It Matters | Community Reaction |
|---|-------|----------------|-------------------|
| [#2934](https://github.com/Hmbown/CodeWhale/issues/2934) | **Sidebar sessions panel with auto-resume & history browsing** | Core UX gap: users currently need `Ctrl+R` popup or CLI flag to switch sessions. Persistent sidebar = major workflow improvement. | 12 comments, opened by contributor `cy2311` — active design discussion |
| [#5123](https://github.com/Hmbown/CodeWhale/issues/5123) | **v0.9.4 release-blocker: agent spawn surface too many knobs** | **Critical**: delegates ship "BLOCKED — read-only tool contract" failure mode. Blocks v0.9.4 release. | Filed by maintainer `Hmbown` today — highest priority |
| [#5098](https://github.com/Hmbown/CodeWhale/issues/5098) | **Fleet config has one layer too many — silent shadowing** | Config precedence bug: personal `~/.codewhale/agents/builder.toml` ignored when workspace config exists — no warning. | Maintainer-reported, 1 comment — silent footgun |
| [#5099](https://github.com/Hmbown/CodeWhale/issues/5099) | **Sub-agent spawn rejects unpinned model when session route provider differs** | Cross-provider fleet dispatch broken: `deepseek-v4-flash` fails on xai/moonshot session route. | Maintainer-reported, blocks multi-provider workflows |
| [#425](https://github.com/Hmbown/CodeWhale/issues/425) | **Subagents: add `resume_from` continuation chains** | Enables durable subagent workflows — critical for long-running coding tasks that span sessions. | 4 comments, 1 👍, maintainer-owned |
| [#3982](https://github.com/Hmbown/CodeWhale/issues/3982) | **Subagents: optional advisor watcher for live turns** | Adds continuous review during long turns — reduces manual reviewer launches. | 3 comments, maintainer-owned |
| [#689](https://github.com/Hmbown/CodeWhale/issues/689) | **`deepseek doctor` passes but `deepseek run` fails** | **Reliability**: health check green but TUI won't start. User-facing blocker. | 10 comments, persists since May |
| [#4236](https://github.com/Hmbown/CodeWhale/issues/4236) | **Epic: official Termux / Android arm64 support** | Strategic: native Termux support (not Linux arm64 ABI mismatch). QA issue #4242 closed today. | 7 comments, 2 sub-issues, maintainer epic |
| [#1004](https://github.com/Hmbown/CodeWhale/issues/1004) | **`/dryrun` — preview next chat completion request** | Cost/latency control for V4 Pro users with large contexts (cached files, tools, @mentions). | 8 comments, `needs-human` label |
| [#5134](https://github.com/Hmbown/CodeWhale/issues/5134) | **How to adjust context length from 128K to 1M** | User asks to leverage model's 1M context vs auto-compaction at 128K. | Created today, 2 comments — signals context pressure |

---

## 4. Key PR Progress (10 Important)

| # | PR | Status | Description |
|---|----|--------|-------------|
| [#5141](https://github.com/Hmbown/CodeWhale/pull/5141) | **Sidebar sessions panel** | Open (WIP) | Implements #2934: `SidebarFocus::Sessions`, auto-resume, history browsing |
| [#5142](https://github.com/Hmbown/CodeWhale/pull/5142) | **Subagent `resume_from` (task_id)** | Open (WIP) | Implements #425: resume prior subagent by ID, rehydrates session |
| [#5139](https://github.com/Hmbown/CodeWhale/pull/5139) | **Advisor watcher for live turns** | Open (WIP) | Implements #3982: `AdvisorWatcher`, bounded summaries, rate limiting |
| [#5137](https://github.com/Hmbown/CodeWhale/pull/5137) | **Named Fleet configurations (`[fleets.<name>]`)** | Open | Replaces single `[fleet]` with operator-scoped named fleets, backward compatible |
| [#5125](https://github.com/Hmbown/CodeWhale/pull/5125) | **Surface fleet layer shadowing + deprecate `[fleet.profiles]`** | Open | Fixes #5098: warns on silent shadowing, removes redundant 4th config layer |
| [#5136](https://github.com/Hmbown/CodeWhale/pull/5136) | **Fix Fleet named agents binding to roles** | Open (WIP) | Validates `model`/`model_strength` only for `general` profiles, adds `fleet_profile` to spawn receipt |
| [#5131](https://github.com/Hmbown/CodeWhale/pull/5131) | **Runtime API memory endpoints** | Open | Adds `/v1/memory` bounded inspection & lifecycle controls for managed clients |
| [#5129](https://github.com/Hmbown/CodeWhale/pull/5129) | **Runtime API skill lifecycle endpoints** | Open | Install/update/uninstall/trust/audit skills via HTTP (previously TUI-only) |
| [#5126](https://github.com/Hmbown/CodeWhale/pull/5126) | **Goal-loop: configurable safety backstop** | **Closed** | Replaces hardcoded 10-continuation cap with configurable limit |
| [#5086](https://github.com/Hmbown/CodeWhale/pull/5086) | **Fix `/undo` scope + add `/redo`** | **Closed** | `/undo` now scoped to current session (prevented cross-conversation workspace rollback) |

> **Note**: 8 of 10 PRs above are from `Copilot` (AI-assisted) and marked `[WIP]` — indicates heavy automation in v0.9.4 feature implementation.

---

## 5. Feature Request Trends (Distilled from Issues)

| Trend | Evidence (Issues) | Priority Signal |
|-------|-------------------|-----------------|
| **Session persistence & navigation** | #2934 (sidebar), #5134 (context length), #1004 (dry-run preview) | High — core daily workflow |
| **Subagent durability & observability** | #425 (resume), #3982 (advisor), #3950 (refactor), #1425 (timeout hangs) | High — 4+ issues, maintainer-owned |
| **Fleet/config multi-tenancy** | #5098 (shadowing), #5099 (provider mismatch), #5137 (named fleets), #4851 (dual resolution) | High — 4 issues today, maintainer-driven |
| **Termux / mobile-native support** | #4236 (epic), #4242 (QA closed), #1097 (FreeBSD) | Medium — strategic, nearing closure |
| **i18n completion (zh-Hant)** | #790, #5143 (PR) | Medium — 750 missing keys tracked |
| **Runtime API parity with TUI** | #5131 (memory), #5129 (skills), #5133 (goals) | Medium — managed client enablement |
| **Cost/token transparency** | #4939 (cost decomposition), #4319 (cache pricing), #1004 (dry-run) | Medium — V4 Pro user pain |

---

## 6. Developer Pain Points (Recurring Frustrations)

| Pain Point | Frequency | Representative Issues |
|------------|-----------|----------------------|
| **Silent config shadowing / precedence bugs** | High (3+ issues today) | #5098 (fleet layers), #4851 (dual model resolution), #5099 (provider mismatch) |
| **Subagent timeouts & unrecoverable hangs** | High | #1425 (3M-char novel → 10 subagents → `agent_wait` timeout), #1732 (merge report cache miss) |
| **Health check lies: `doctor` passes, `run` fails** | Persistent | #689 (since May, 10 comments), no resolution |
| **Context compaction at 128K vs 1M model support** | Emerging | #5134 (created today), users hitting ceiling |
| **Cross-provider fleet dispatch broken** | Acute | #5099 (xai session + deepseek model = fail), #1482 (NIM 404) |
| **VS Code integration instability** | Niche but severe | #1651 (YOLO agent crashes VS Code), #1829 (SSH exit 255 from sandbox) |
| **No dry-run for expensive V4 Pro turns** | Explicit request | #1004 (8 comments), cost anxiety for large contexts |

---

## Quick Links

- **Release blocker**: [#5123](https://github.com/Hmbown/CodeWhale/issues/5123)
- **Termux QA complete**: [#4242](https://github.com/Hmbown/CodeWhale/issues/4242)
- **All v0.9.4 labeled issues**: [GitHub query](https://github.com/Hmbown/CodeWhale/issues?q=label%3Av0.9.4+is%3Aopen)
- **Copilot WIP PRs**: [#5133](https://github.com/Hmbown/CodeWhale/pull/5133), [#5136](https://github.com/Hmbown/CodeWhale/pull/5136), [#5137](https://github.com/Hmbown/CodeWhale/pull/5137), [#5139](https://github.com/Hmbown/CodeWhale/pull/5139), [#5141](https://github.com/Hmbown/CodeWhale/pull/5141), [#5142](https://github.com/Hmbown/CodeWhale/pull/5142), [#5143](https://github.com/Hmbown/CodeWhale/pull/5143), [#5144](https://github.com/Hmbown/CodeWhale/pull/5144), [#5145](https://github.com/Hmbown/CodeWhale/pull/5145)

---

*Digest generated from GitHub data as of 2026-08-03. Repository: [Hmbown/CodeWhale](https://github.com/Hmbown/CodeWhale) (DeepSeek TUI).*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/DenisZheng/agents-radar).*