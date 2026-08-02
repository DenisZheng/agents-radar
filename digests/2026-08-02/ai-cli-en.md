# AI CLI Tools Community Digest 2026-08-02

> Generated: 2026-08-02 02:07 UTC | Tools covered: 9

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
**Date:** 2026-08-02 | **Scope:** 9 major AI CLI tools

---

## 1. Ecosystem Overview

The AI CLI landscape is in a **consolidation-and-hardening phase**. All nine tools show zero major feature launches today; instead, every repository is fixing critical regressions in session persistence, context compaction, agent delegation reliability, and platform-specific stability (WSL2, macOS, Windows). A clear convergence is emerging around **multi-model orchestration (BYOK), deterministic session compaction, agent/subagent contracts, and production-grade observability**. The market is splitting into two tiers: **IDE-integrated assistants** (Claude Code, Codex, Copilot CLI, Gemini CLI) optimizing for developer workflow embedding, and **standalone TUI/daemon-first tools** (OpenCode, Pi, Qwen Code, DeepSeek TUI, Kimi Code) targeting autonomous agent fleets, CI/CD gates, and enterprise deployment.

---

## 2. Activity Comparison (2026-08-01 → 2026-08-02)

| Tool | Issues Updated (24h) | PRs Updated (24h) | Release Today | Top Community Signal (👍) |
|------|---------------------|-------------------|---------------|---------------------------|
| **Claude Code** | 50 active | 3 (all closed, maintenance) | — | 197 👍 (#24726: VS Code auto-attach control) |
| **OpenAI Codex** | ~10 high-severity | 10 (9 closed, 1 open) | — | 112 👍 (#35058: macOS VS Code diff crash) |
| **Gemini CLI** | 10 hot | 10 active | **v0.55.0-nightly** | 8 👍 (#21409: generalist agent hang) |
| **GitHub Copilot CLI** | 19 active | 0 | **v1.0.78-2** | 19 👍 (#3282: multi-model BYOK) |
| **Kimi Code CLI** | 5 hot | 5 open | — | 10 comments (#1283: Memory System) |
| **OpenCode** | 10 hot | 10 active | **v1.18.11** | 37 👍 (#37012: keep legacy layout) |
| **Pi** | **44 updated** | **24 updated** | — | 6 👍 (#6879: auto-compaction late trigger) |
| **Qwen Code** | 10 hot | 10 active | **v0.21.3 stable + nightly** | 7 👍 (#176: local model tool calling broken) |
| **DeepSeek TUI** | 10 noteworthy | 10 active | v0.9.4 source candidate (PR) | 6 comments (#5007: creator awareness gap) |

**Maturity Indicators:** Pi leads raw velocity (68 total updates). Qwen Code and OpenCode ship releases with substantive fixes. Copilot CLI maintains steady patch cadence. Claude Code and Codex show high-impact bugs but low PR throughput—suggesting larger internal review cycles.

---

## 3. Shared Feature Directions (Cross-Tool Convergence)

| Requirement | Tools Affected | Specific Needs |
|-------------|----------------|----------------|
| **Session/Context Reliability** | All 9 | Compaction triggering late (Pi, Claude, Codex, OpenCode, Qwen); session corruption/loss (Claude, Copilot, OpenCode, Gemini); fork safety (Copilot, Qwen, DeepSeek); V8 string limits (Copilot) |
| **Multi-Model BYOK & Per-Agent Config** | Claude, Codex, Copilot, OpenCode, Pi, Qwen, DeepSeek | Declarative model profiles (Copilot #3282); per-agent reasoning effort (Copilot #2904); provider switching w/ model retention (DeepSeek #5034); local model tool calling (Qwen #176); prompt cache reuse across providers (Qwen #8277, Pi) |
| **Agent/Subagent Contracts & Observability** | Claude, Codex, Gemini, Copilot, OpenCode, Qwen | Delegation status misreporting (Gemini #22323, Claude #74113); subagent hang/timeouts (OpenCode #33028, Gemini #21409); autopilot ghost state (Copilot #4329); sub-session concurrency caps (Qwen #8341); deterministic continuation (DeepSeek #5064, #5067) |
| **Terminal/TUI Polish & Accessibility** | All 9 | Unicode/complex script rendering (Pi #7402, DeepSeek Hindi); keyboard chords (Codex #36511, Qwen shortcuts); collapsible output (OpenCode #40096); lazy scroll (OpenCode #26861); Wayland support (Gemini #21983); screen-reader/voice (Claude #42700) |
| **MCP/Tool Protocol Hardening** | Codex, Copilot, OpenCode, Pi, Qwen, DeepSeek | Lazy MCP loading (Copilot #2901); SSE reconnect loops (OpenCode v1.18.11); cert validation override (OpenCode #23506); catalog limits (Codex #36534); deferred tool cache busting (Qwen #4777); web retrieval unification (DeepSeek #5065) |
| **Usage Transparency & Cost Control** | Claude, Codex, Copilot, OpenCode, Qwen | Quota drainage visibility (Claude #83205); metering anomalies (Codex #36528); premium usage misreporting (Copilot #2632); free tier policy clarity (OpenCode #40078); prompt cache hit-rate telemetry (Qwen #8284) |
| **Cross-Session Memory & Learning** | Gemini, OpenCode, Kimi, Qwen, DeepSeek | Auto Memory redaction/retry loops (Gemini #26522, #26525); native auto-memory (OpenCode #20322); persistent Memory System (Kimi #1283); session forking w/ context (Qwen #8274); compaction contract preservation (DeepSeek #5064) |

---

## 4. Differentiation Analysis

| Dimension | IDE-Integrated Tier | Standalone/TUI-First Tier |
|-----------|---------------------|---------------------------|
| **Primary Interface** | VS Code extension, IntelliJ plugin, desktop app | Native TUI, daemon (`serve`), Web Shell, headless CLI |
| **Target User** | Individual developers, enterprise IDE seats | Power users, agent-fleet operators, CI/CD pipelines, self-hosted deployments |
| **Session Model** | Ephemeral, sidebar-bound, git-linked | Persistent, forkable, branchable, SQLite/DB-backed |
| **Agent Architecture** | Single-threaded with background agents | First-class subagents, parallel worktrees (DeepSeek Fleet), daemon-managed concurrency |
| **Model Strategy** | Proprietary-first (Claude, GPT, Gemini), BYOK secondary | Provider-agnostic, local-model-first (Qwen, DeepSeek, Pi), multi-gateway routing |
| **Extensibility** | MCP servers, VS Code extensions, slash commands | Skills/agents marketplace (

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report  
*Data as of 2026-08-02 | Source: github.com/anthropics/skills*

---

## 1. Top Skills Ranking  
*Most-discussed PRs (by comment activity), representing the Skills attracting the most community attention*

| # | Skill / PR | Functionality | Discussion Highlights | Status |
|---|------------|---------------|----------------------|--------|
| 1 | **[#1298](https://github.com/anthropics/skills/pull/1298)** `fix(skill-creator): run_eval.py recall=0%` | Core fix for the skill-creator evaluation loop; resolves Windows stream reading, trigger detection, and parallel worker issues that caused `run_eval.py` to report 0% recall for every skill. | 10+ independent reproductions; blocks the entire description-optimization pipeline (`run_loop.py`, `improve_description.py`). | **Open** |
| 2 | **[#514](https://github.com/anthropics/skills/pull/514)** `document-typography` | Typographic quality control for AI-generated documents: prevents orphan/widow lines, heading stranding, and numbering misalignment. | Addresses a universal pain point—“users rarely ask for good typography but always notice bad typography.” | **Open** |
| 3 | **[#486](https://github.com/anthropics/skills/pull/486)** `odt` (OpenDocument Text) | Create, fill, read, and convert `.odt`/`.ods` files; trigger on “ODT”, “OpenDocument”, “LibreOffice”, ISO-standard document requests. | First-class support for the open-source ODF ecosystem; enables round-trip editing with LibreOffice. | **Open** |
| 4 | **[#83](https://github.com/anthropics/skills/pull/83)** `skill-quality-analyzer` & `skill-security-analyzer` | Meta-skills that audit other Skills across 5 dimensions (structure, examples, resources, security, maintainability) and surface vulnerabilities. | “Quality gate for the Skills marketplace itself”; security analyzer catches prompt-injection, excessive permissions, and supply-chain risks. | **Open** |
| 5 | **[#723](https://github.com/anthropics/skills/pull/723)** `testing-patterns` | Comprehensive testing skill: Testing Trophy philosophy, AAA pattern, React Testing Library, contract testing, property-based testing, E2E with Playwright. | Fills a gap—no existing skill covers the *full* testing stack with opinionated, actionable patterns. | **Open** |
| 6 | **[#1367](https://github.com/anthropics/skills/pull/1367)** `self-audit` | Mechanical file verification → four-dimension reasoning audit (correctness, completeness, consistency, security) in damage-severity order. | Universal, stack-agnostic; designed as a pre-delivery quality gate for any agent output. | **Open** |
| 7 | **[#1302](https://github.com/anthropics/skills/pull/1302)** `color-expert` | Color naming systems (ISCC-NBS, Munsell, XKCD, RAL, CSS), color-space selection guide (OKLCH, OKLAB, CAM16), accessibility contrast, gamut mapping. | “Self-contained color expertise for any task involving color knowledge.” | **Open** |
| 8 | **[#1479](https://github.com/anthropics/skills/pull/1479)** `plan-file-hygiene` | Lifecycle management for planning artifacts (creation, update, archival, deletion) to prevent context-window bloat from stale plans. | Addresses #1417: “planning artifacts accumulate with no lifecycle.” | **Open** |

> **Note**: Several high-comment PRs (#538, #541, #539, #1099, #1050, #1323, #1261) are *fixes* to the `skill-creator` toolchain (Windows compatibility, YAML parsing, trigger detection) rather than new Skills. They are critical enablers but not user-facing Skills.

---

## 2. Community Demand Trends  
*Distilled from the most-commented Issues (👍 = community upvotes)*

| Trend | Evidence (Issues) | Signal Strength |
|-------|-------------------|-----------------|
| **Trust & Namespace Security** | [#492](https://github.com/anthropics/skills/issues/492) (43 comments, 2👍): Community skills masquerading under `anthropic/` namespace; trust-boundary abuse. | 🔴 **Critical** |
| **Organizational Skill Sharing** | [#228](https://github.com/anthropics/skills/issues/228) (16 comments, 8👍): No org-wide library; manual file sharing via Slack/Teams. | 🟠 **High** |
| **Skill-Creator Toolchain Reliability** | [#556](https://github.com/anthropics/skills/issues/556) (12 comments, 7👍), [#1169](https://github.com/anthropics/skills/issues/1169), [#1061](https://github.com/anthropics/skills/issues/1061): `run_eval.py` 0% recall on Windows; encoding/subprocess bugs block authors. | 🟠 **High** |
| **Meta-Skills for Skill Quality** | [#83](https://github.com/anthropics/skills/pull/83) (PR), [#202](https://github.com/anthropics/skills/issues/202) (8 comments): Skill to *create* skills needs to be a first-class operational skill, not documentation. | 🟡 **Medium** |
| **Agent Governance / Safety Patterns** | [#412](https://github.com/anthropics/skills/issues/412) (6 comments): Policy enforcement, threat detection, trust scoring, audit trails for agent systems. | 🟡 **Medium** |
| **Context-Window Efficiency** | [#1487](https://github.com/anthropics/skills/issues/1487) (4 comments): `claude-api` skill injects 156k tokens in one call; [#1329](https://github.com/anthropics/skills/issues/1329) (9 comments): `compact-memory` symbolic notation for agent state. | 🟡 **Medium** |
| **Interoperability (MCP / Bedrock)** | [#16](https://github.com/anthropics/skills/issues/16) (4 comments): Expose Skills as MCPs; [#29](https://github.com/anthropics/skills/issues/29) (4 comments): AWS Bedrock support. | 🟢 **Emerging** |

---

## 3. High-Potential Pending Skills  
*Active-comment PRs not yet merged; strong likelihood of landing soon*

| PR | Skill | Why It’s Poised to Land |
|----|-------|------------------------|
| **[#514](https://github.com/anthropics/skills/pull/514)** | `document-typography` | Universal need, zero dependencies, high upvote potential; only open since Mar 2026. |
| **[#486](https://github.com/anthropics/skills/pull/486)** | `odt` | Open-standard format support; clear trigger spec; author responsive (updated Jul 2026). |
| **[#723](https://github.com/anthropics/skills/pull/723)** | `testing-patterns` | Fills a documented gap; comprehensive scope; author active (updated Apr 2026). |
| **[#83](https://github.com/anthropics/skills/pull/83)** | `skill-quality-analyzer` / `skill-security-analyzer` | Meta-skill that *improves the ecosystem itself*; aligns with maintainer priorities. |
| **[#1302](https://github.com/anthropics/skills/pull/1302)** | `color-expert` | Niche but well-scoped; self-contained; author engaged (updated Jul 2026). |
| **[#1479](https://github.com/anthropics/skills/pull/1479)** | `plan-file-hygiene` | Directly addresses a filed issue (#1417); small surface area; recent (Jul 2026). |
| **[#525](https://github.com/anthropics/skills/pull/525)** | `pyxel` (retro game dev) | Novel domain; MCP-backed; author is Pyxel maintainer (kitao); updated Jul 2026. |

> **Blocker cluster**: PRs #1298, #1099, #1050, #1323, #1261 are *prerequisites* for the above—until the `skill-creator` eval loop works on Windows, new Skill authors cannot reliably iterate.

---

## 4. Skills Ecosystem Insight  

> **The community’s most concentrated demand is for *trustworthy, shareable, and self-improving Skills*—starting with a secure namespace, org-level distribution, and a working skill-creator toolchain that lets authors reliably build and validate new Skills.**

---

# Claude Code Community Digest — 2026-08-02

## Today's Highlights
No new releases shipped in the last 24 hours. The issue tracker shows **50 active items**, dominated by a long-standing VS Code extension request (#24726, 197 👍) and a critical **WSL2 memory regression** (#54394) where the embedded `ugrep` wrapper triggers 8 GB V8 heap OOMs on regex backtracking. A cluster of new bugs filed today highlights session corruption, quota drainage, and hook-streaming regressions in v2.1.220.

---

## Hot Issues (Top 10 by Impact & Engagement)

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#24726](https://github.com/anthropics/claude-code/issues/24726) | **VS Code: setting to disable auto-attach of open file/selection** | Highest-voted open enhancement (197 👍); users want control over sidebar context injection | 63 comments, **197 👍** |
| [#54394](https://github.com/anthropics/claude-code/issues/54394) | **WSL2: embedded ugrep regex backtracking → 8 GB V8 OOM / host freeze** | Regression in v2.1.117; every `grep` routes through `claude.exe` → catastrophic memory amplification | 19 comments, 1 👍 |
| [#77966](https://github.com/anthropics/claude-code/issues/77966) | **OAuth loop on Linux/IntelliJ: `state` param dropped after “sign in again” redirect** | Blocks authentication for IntelliJ plugin users on Linux | 19 comments, 13 👍 |
| [#42700](https://github.com/anthropics/claude-code/issues/42700) | **TTS readback + voice mode for Remote Control sessions** | Top accessibility ask; enables hands-free coding workflows | 13 comments, 22 👍 |
| [#80279](https://github.com/anthropics/claude-code/issues/80279) | **Regression 2.1.217: “Last Activity” filter missing when grouping by Project** | Sidebar filter vanished after auto-update; still works in other groupings | 10 comments, 13 👍 |
| [#73638](https://github.com/anthropics/claude-code/issues/73638) | **Session rename mid-tool-call corrupts transcript (400 on every future prompt)** | Data-corruption bug: synthetic `system-reminder` inserted between `server_tool_use` and result | 8 comments |
| [#82466](https://github.com/anthropics/claude-code/issues/82466) | **Default model in `settings.json` ignored at session start; `/model` unreliable** | Config drift: `claude-fable-5[1m]` set but sessions launch on different model | 6 comments, 1 👍 |
| [#74113](https://github.com/anthropics/claude-code/issues/74113) | **Background agents go idle without final `SendMessage` report (re-ping recovers)** | Agent reliability gap; silent failure requires manual intervention | 6 comments, 5 👍 |
| [#81306](https://github.com/anthropics/claude-code/issues/81306) | **Windows MSIX crash wedges package; recovery deletes local app data (tabs, crash dumps)** | Destructive recovery path; users lose session state & diagnostics | 4 comments |
| [#82230](https://github.com/anthropics/claude-code/issues/82230) | **Embedded ugrep allocates ~29 GB on `.{0,N}(alt).{0,M}` regex (OOM-kills host)** | Companion to #54394; specific regex pattern triggers massive allocation in `grep` shim | 1 comment, 1 👍 |

---

## Key PR Progress (Last 24h)
*All three PRs closed — internal maintenance / documentation sync.*

| PR | Summary | Status |
|----|---------|--------|
| [#77442](https://github.com/anthropics/claude-code/pull/77442) | Fix issue-automation telemetry timestamps (1970 epoch) & `days_back` input | Closed |
| [#77439](https://github.com/anthropics/claude-code/pull/77439) | Sync `security-guidance` plugin marketplace listing to v2.0.0 manifest | Closed |
| [#77443](https://github.com/anthropics/claude-code/pull/77443) | Make `ralph-wiggum` stop-hook `jq` error handling reachable under `set -e` | Closed |

---

## Feature Request Trends
1. **IDE Integration Polish** — Disable auto-attach (#24726), IntelliJ OAuth fix (#77966), Chrome incognito support (#83219), scrollback history (#69799).
2. **Accessibility & Voice** — TTS readback + voice mode for Remote Control (#42700).
3. **Token & Usage Transparency** — Read-only `usage:read` scope for `setup-token` (#81015), visibility into credit consumption (#80750, #83231).
4. **Session & Context Control** — Partial compaction UI (#83225), reliable model switching (#82466), session-link opt-out from git (#83226).
5. **Diagnosability** — Better errors for context limits, custom base URLs, and quota anomalies (#82931, #83205).

---

## Developer Pain Points (Recurring Themes)
- **Embedded tooling regressions**: The `ugrep`/`bfs` shim (v2.1.117+) causes OOMs on WSL2 (#54394) and pathological regex allocations (#82230) — developers want a kill-switch or fallback to system `grep`.
- **Auth fragility**: OAuth loops on Linux/IntelliJ (#77966), MSIX package corruption on Windows (#81306), and token scope mismatches (#81015) erode trust in “just works” setup.
- **Silent agent/subagent failures**: Background agents dropping final reports (#74113), subagents served wrong model without warning (#83224), permission prompts never emitted (#81607, #69790).
- **Session integrity**: Renaming mid-flight corrupts transcripts (#73638), blocking `Stop` hooks re-stream entire answers (#83229), compaction summaries ignored by desktop app (#83225).
- **Opacity on usage/cost**: No visibility into Cloud spend triggered by Claude Code (#83231), quota draining abnormally (#83205), credits consumed while plan allowance remains (#80750).

---

*Data sourced from `github.com/anthropics/claude-code` — issues/PRs updated 2026-08-01 → 2026-08-02.*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-08-02

---

## 1. Today's Highlights

The Codex ecosystem shows **zero new releases** in the last 24 hours, but high-severity platform stability issues dominate community attention. A critical VS Code extension crash (#35058, 112 👍, 44 comments) renders Codex Diff unusable on macOS, while Windows users face process storms from `taskkill.exe`/`conhost.exe` (#33776, 26 👍) and OneDrive-related stream disconnects (#35420). On the PR front, automated maintenance continues with model catalog updates and MCP catalog limits doubled to 2,048 items.

---

## 2. Releases

**No new releases in the last 24 hours.**

---

## 3. Hot Issues (Top 10 by Impact & Community Signal)

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| **[#35058](https://github.com/openai/codex/issues/35058)** | **Codex Diff crashes with “Oops, an error has occurred” in VS Code on macOS** | Core review workflow broken for all macOS VS Code users; affects every repository including fresh workspaces. | 👍 112 · 44 comments · **Critical** |
| **[#33776](https://github.com/openai/codex/issues/33776)** | **Windows: ChatGPT.exe spawns hundreds of taskkill.exe/conhost.exe, causing WMI storms & DWM degradation** | Resource exhaustion degrades entire Windows desktop; 287+ orphaned processes observed in one session. | 👍 26 · 28 comments |
| **[#32149](https://github.com/openai/codex/issues/32149)** | **Windows setup fails before UAC prompt; both install options non-functional** | Blocks new Windows users entirely; affects ChatGPT Plus subscribers on latest Windows 11 builds. | 👍 6 · 29 comments |
| **[#35420](https://github.com/openai/codex/issues/35420)** | **Work/Codex stream disconnects when Windows workspace is on degraded OneDrive** | Cloud-synced workspaces cause repeated `stream disconnected before completion` failures. | 22 comments |
| **[#32297](https://github.com/openai/codex/issues/32297)** | **Built-in image generation fails with network error after July 9 desktop update** | Regression in desktop app breaks DALL·E integration for ChatGPT subscribers. | 👍 7 · 21 comments |
| **[#20864](https://github.com/openai/codex/issues/20864)** | **Desktop app lags by scanning all `~/.codex/sessions` instead of using session index** | Startup/reconciliation scales poorly with history; affects Pro & Business users on macOS. | 👍 5 · 18 comments |
| **[#28103](https://github.com/openai/codex/issues/28103)** | **MSIX build missing Linux `codex` binary in `app/resources` — breaks “Run agent in WSL”** | WSL integration broken on Microsoft Store distribution; binary absent from packaged resources. | 👍 23 · 7 comments |
| **[#34268](https://github.com/openai/codex/issues/34268)** | **Multi-agent V2 forks duplicate compaction snapshots & inline images → 110 GiB session growth** | Storage explosion threatens disk capacity; multiplicative growth from subagent history duplication. | 👍 3 · 5 comments |
| **[#34873](https://github.com/openai/codex/issues/34873)** | **`model_reasoning_summary="detailed"` yields heading-only summaries with no prose** | Reasoning transparency feature regressed; CLI 0.145.0 returns empty detailed summaries. | 👍 5 · 4 comments |
| **[#36528](https://github.com/openai/codex/issues/36528)** | **URGENT: Prolite account weekly usage 0% → 97% in one day with unstable reset windows** | Metering anomaly burns near-total weekly allowance; operational blocker for active users. | 2 comments · **Just filed** |

---

## 4. Key PR Progress (Last 24h)

| # | PR | Description | Status |
|---|----|-------------|--------|
| **[#36534](https://github.com/openai/codex/pull/36534)** | Raise MCP catalog item limit to 2,048 | Doubles paginated discovery ceiling for tools/resources/templates from 1,024 → 2,048. | **Closed** |
| **[#36511](https://github.com/openai/codex/pull/36511)** | Support two-stroke TUI key chords | Enables `ctrl-x ctrl-s` style chords in keymap config with pending-chord hints & cancellation. | **Closed** |
| **[#36507](https://github.com/openai/codex/pull/36507)** | Retain attempted tool metadata across prompts | Reattaches `executed_tool_calls` (32 KiB cap, recent-first) for context continuity. | **Closed** |
| **[#36485](https://github.com/openai/codex/pull/36485)** | Increase remote plugin bundle size limits | Download limit 50→100 MiB; extracted bundle 250→512 MiB. | **Closed** |
| **[#36482](https://github.com/openai/codex/pull/36482)** | Avoid querying terminal size on every TUI redraw | Caches dimensions on resize events; refreshes on settle/resume/exec. | **Closed** |
| **[#36440](https://github.com/openai/codex/pull/36440)** | Extract exec-server request dispatching | Moves JSON-RPC handling into dedicated `RequestDispatcher` for cleaner connection loop. | **Closed** |
| **[#30977](https://github.com/openai/codex/pull/30977)** | Drop parent MCP lifecycle events from forked agent history | Excludes inherited `McpToolCallBegin/End` from child rollouts; preserves parent history. | **Closed** |
| **[#31817](https://github.com/openai/codex/pull/31817)** | Update models.json | Automated model catalog refresh via GitHub Actions. | **Open** |
| **[#31471](https://github.com/openai/codex/pull/31471)** | [faster-connectors] Extract apps cache logic into ConnectorRuntimeManager | Scopes runtime context by account/workspace; discards stale contexts on change. | **Open** |
| **[#15261](https://github.com/openai/codex/pull/15261)** | Store guardian transcript boundary on review session | Checkpoints parent transcript for incremental guardian reviews; avoids full rollout reconstruction. | **Open** |

---

## 5. Feature Request Trends

From the issue corpus, developers are consistently asking for:

1. **Session & context control** — Compact (not clear) context before plan execution ([#18490](https://github.com/openai/codex/issues/18490)); retain reasoning summaries with prose ([#34873](https://github.com/openai/codex/issues/34873)); fix automatic compaction ruining sessions ([#31033](https://github.com/openai/codex/issues/31033)).
2. **Custom model/provider ergonomics** — Desktop custom providers unusable with existing chats/model picker ([#29156](https://github.com/openai/codex/issues/29156)); allow custom presets in model picker power slider ([#32665](https://github.com/openai/codex/issues/32665)).
3. **TUI/CLI polish** — Disable composer placeholder ([#13466](https://github.com/openai/codex/issues/13466)); two-stroke key chords (now merged in [#36511](https://github.com/openai/codex/pull/36511)).
4. **Approval & safety UX** — Auto-review converts explicit approval into consent loops ([#36501](https://github.com/openai/codex/issues/36501)); Full Access session reverts to per-action approval after restart ([#34453](https://github.com/openai/codex/issues/34453)).
5. **Subagent visibility** — VS Code background-agent panel doesn't update for native subagents ([#33859](https://github.com/openai/codex/issues/33859)).

---

## 6. Developer Pain Points (Recurring Frustrations)

| Pain Point | Evidence | Affected Surfaces |
|------------|----------|-------------------|
| **Platform instability on macOS** | Diff view crashes universally ([#35058](https://github.com/openai/codex/issues/35058), [#36016](https://github.com/openai/codex/issues/36016)); app blinking on Tahoe ([#34773](https://github.com/openai/codex/issues/34773)) | VS Code extension, Desktop app |
| **Windows process/resource leaks** | `taskkill.exe`/`conhost.exe` storms ([#33776](https://github.com/openai/codex/issues/33776)); native crashes `0xc0000409` ([#31989](https://github.com/openai/codex/issues/31989)); setup broken pre-UAC ([#32149](https://github.com/openai/codex/issues/32149)) | Desktop app, Installer |
| **Network/sync fragility** | OneDrive-backed workspaces disconnect streams ([#35420](https://github.com/openai/codex/issues/35420)); image gen network errors post-update ([#32297](https://github.com/openai/codex/issues/32297)); transport decode errors ([#29087](https://github.com/openai/codex/issues/29087)) | Web, Desktop, CLI |
| **Session storage bloat** | 110 GiB from multi-agent duplication ([#34268](https://github.com/openai/codex/issues/34268)); unbounded thread metadata crashes startup ([#29007](https://github.com/openai/codex/issues/29007)); full `~/.codex/sessions` scan on launch ([#20864](https://github.com/openai/codex/issues/20864)) | Desktop, CLI |
| **Metering & rate-limit opacity** | Weekly usage 0→97% in one day ([#36528](https://github.com/openai/codex/issues/36528)); 50% drop during subagent wait ([#35816](https://github.com/openai/codex/issues/35816)); context auto-compaction burns resets ([#31033](https://github.com/openai/codex/issues/31033)) | All surfaces |
| **Auth persistence failures** | “Refresh token already used” survives logout + `auth.json` deletion ([#36525](https://github.com/openai/codex/issues/36525)) | Windows Desktop |

---

*Digest generated from `github.com/openai/codex` data as of 2026-08-02 00:00 UTC. Links point to live GitHub issues/PRs.*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-08-02

## 1. Today's Highlights
The project shipped nightly **v0.55.0-nightly.20260802** with a critical fix for the `thoughtSignature` regression that broke function calling in v0.53.0. Meanwhile, the issue backlog reveals systemic pressure on the agent subsystem: subagent recovery logic misreports `MAX_TURNS` as success, the generalist agent hangs on simple tasks, and Auto Memory’s retry loop surfaces low-signal sessions indefinitely. A daemon-mode PR (long-requested for headless/CI workflows) remains open but inactive.

## 2. Releases
**v0.55.0-nightly.20260802.gf47d6c6f7** — Automated nightly bump.  
**Notable fix included** (via PR #28607): preserves `functionCall.thoughtSignature` when stripping thought parts, resolving the 400 error `Function call is missing a thought_signature` introduced in v0.53.0.  
[Full Changelog](https://github.com/google-gemini/gemini-cli/compare/v0.55.0-nightly.20260801.gf47d6c6f7...v0.55.0-nightly.20260802.gf47d6c6f7)

## 3. Hot Issues (Top 10 by Signal)

| # | Issue | Why It Matters | Community Reaction |
|---|-------|----------------|-------------------|
| [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) | **Subagent reports GOAL success after hitting MAX_TURNS** | Silent failure mask: the `codebase_investigator` subagent claims success while actually doing zero work, breaking trust in delegation. | 12 comments, 👍2 — P1, `status/need-retesting` |
| [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) | **Generalist agent hangs indefinitely on simple ops** | Core delegation path broken; folder creation stalls for hours. Workaround: explicitly disable subagents. | 8 comments, 👍8 — P1, `status/need-retesting` |
| [#24353](https://github.com/google-gemini/gemini-cli/issues/24353) | **Robust component-level evaluations (EPIC)** | Scaling behavioral evals from 76 tests across 6 models; critical for preventing regressions like #28604. | 7 comments — P1, `aiq/eval_infra` |
| [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) | **Assess AST-aware file reads/search/mapping (EPIC)** | Potential step-change in token efficiency & precision for large codebases; evaluates tools like `tilth`/`glyph`. | 7 comments, 👍1 — P2 |
| [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) | **Gemini under-uses custom skills & subagents** | Discoverability gap: agents/skills require explicit invocation, limiting autonomy. | 6 comments — P2 |
| [#26522](https://github.com/google-gemini/gemini-cli/issues/26522) | **Auto Memory retries low-signal sessions forever** | Resource leak: unread sessions stay in inbox, re-surfaced repeatedly, wasting extraction cycles. | 5 comments — P2 |
| [#26525](https://github.com/google-gemini/gemini-cli/issues/26525) | **Auto Memory: secrets sent to model before redaction** | Security risk: transcript content reaches model context prior to redaction; logs may retain secrets. | 4 comments — P2, `area/security` |
| [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) | **Shell exec stuck at "Waiting input" after command exits** | UX breakage: simple commands (ls, mkdir) leave CLI in hung state showing active shell. | 4 comments, 👍3 — P1, `effort/medium` |
| [#22232](https://github.com/google-gemini/gemini-cli/issues/22232) | **Browser agent: fail-fast on locked profile** | Persistent sessions crash instead of recovering; blocks long-running browser automation. | 4 comments — P3, `kind/feature` |
| [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) | **Browser subagent fails on Wayland** | Platform gap: Linux Wayland users cannot use browser agent at all. | 4 comments, 👍1 — P1, `agent/browser` |

## 4. Key PR Progress (10 Active)

| PR | Summary | Impact |
|----|---------|--------|
| [#28623](https://github.com/google-gemini/gemini-cli/pull/28623) | **chore: bump to v0.55.0-nightly.20260802** | Automated nightly release |
| [#28607](https://github.com/google-gemini/gemini-cli/pull/28607) | **fix(core): preserve `thoughtSignature` in functionCall** | **Critical fix** for v0.53.0 regression causing 400 errors on tool calls |
| [#28597](https://github.com/google-gemini/gemini-cli/pull/28597) | **fix(cli): load env vars before resolving settings placeholders** | Fixes race where `.env` values weren’t available for `settings.json` expansion |
| [#21307](https://github.com/google-gemini/gemini-cli/pull/21307) | **feat: daemon mode (size/l, help wanted)** | Headless, context-preserving daemon + lightweight client for shell/CI integration — **high community demand** |
| [#28619](https://github.com/google-gemini/gemini-cli/pull/28619) | **Update .gitignore for .env/.ai; add unit tests** | Hygiene: prevents secret commits |
| [#28617](https://github.com/google-gemini/gemini-cli/pull/28617) | **Script: connect GitHub repo to GCP project** | Internal tooling for CI/CD setup |
| [#28618](https://github.com/google-gemini/gemini-cli/pull/28618) | **Docs: approving workflows from forks** | Contributor onboarding |
| [#28613](https://github.com/google-gemini/gemini-cli/pull/28613) | **fix: replace `console.error` with `debugLogger` in SDK** | Logging consistency |
| [#28526](https://github.com/google-gemini/gemini-cli/pull/28526) | **fix(vscode): stop leaking disposables in IDE companion** | Fixes memory leak in VS Code extension (#27790) |
| [#28616](https://github.com/google-gemini/gemini-cli/pull/28616) | **Codespace pending changes export** | Internal workflow |

## 5. Feature Request Trends
1. **Agent observability & control** — Share subagent trajectories (`#22598`), include subagent context in bug reports (`#21763`), configure browser agent via `settings.json` (`#22267`).
2. **AST-aware code navigation** — Two EPICs (`#22745`, `#22746`) exploring structural code tools to replace line-based reads.
3. **Daemon/headless mode** — Long-standing PR `#21307` for non-TTY, shell-friendly operation.
4. **Memory system hardening** — Quarantine invalid patches (`#26523`), deterministic redaction (`#26525`), stop infinite retries (`#26522`).
5. **Self-documenting CLI** — Agent should know its own flags/hotkeys (`#21432`).

## 6. Developer Pain Points
- **Delegation unreliability**: Subagents misreport status (`#22323`), hang (`#21409`), run without permission (`#22093`), and ignore config (`#22267`).
- **Shell integration fragility**: Commands complete but CLI stays in “awaiting input” (`#25166`); interactive prompts (Vite, etc.) stall agents (`#22465`).
- **Platform gaps**: Wayland browser support missing (`#21983`); symlinked agents not loaded (`#20079`); tool count >128 causes 400 errors (`#24246`).
- **Memory opacity**: Auto Memory logs secrets pre-redaction (`#26525`), silently drops invalid patches (`#26523`), and loops on noise (`#26522`).
- **Terminal rendering**: Resize causes flicker/perf issues (`#21924`); external editor exit corrupts buffer (`#24935`).

---

*Digest generated from `google-gemini/gemini-cli` GitHub data as of 2026-08-02 00:00 UTC.*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-08-02

## Today's Highlights
- **v1.0.78-2 released** with UX improvements to the split-view sidebar close confirmation and a fix for duplicate slash-command handler invocations.  
- **19 active issues** updated in the last 24h, surfacing critical session-persistence bugs (V8 string-length limit), BYOK streaming regressions, and autopilot state-loss on resume.  
- Community demand centers on **multi-model BYOK support**, **per-agent reasoning effort**, and **lazy MCP server loading**—all high-engagement feature requests.

---

## Releases
### v1.0.78-2 (2026-08-01)
| Category | Changes |
|----------|---------|
| **Improved** | Split-view sidebar close prompt now reads `x again to close` (or `x again to exit CLI` on last session) for clearer double-press semantics. |
| **Fixed** | Extension slash commands now invoke their handler exactly once per invocation, eliminating duplicate executions when multiple extensions register the same command. |

[View release on GitHub](https://github.com/github/copilot-cli/releases/tag/v1.0.78-2)

---

## Hot Issues (Top 10 by Impact & Community Signal)

| # | Title | Area | Status | 👍 | Why It Matters |
|---|-------|------|--------|----|----------------|
| [#3282](https://github.com/github/copilot-cli/issues/3282) | Add multiple BYOK model capability | models, configuration | OPEN | 19 | Users cannot switch BYOK models mid-session; requires env-var swap + restart. Blocking for multi-provider workflows. |
| [#2904](https://github.com/github/copilot-cli/issues/2904) | Custom Agent YAML frontmatter should support reasoning effort | agents, models | OPEN | 16 | Reasoning effort is global-only today; per-agent control needed for cost/latency tuning in agent fleets. |
| [#2901](https://github.com/github/copilot-cli/issues/2901) | Lazy-load MCP servers on first tool invocation | mcp | OPEN | 14 | Startup latency grows linearly with configured MCP servers; lazy connect would cut cold-start time significantly. |
| [#4325](https://github.com/github/copilot-cli/issues/4325) | Session unloadable after events.jsonl exceeds V8 max string length | sessions | OPEN | 1 | **Data-loss risk**: long-running sessions become permanently unrecoverable despite intact DB rows and log files. |
| [#4327](https://github.com/github/copilot-cli/issues/4327) | BYOK Responses streaming drops `apply_patch` input | models, tools | OPEN | 0 | **Regression**: streamed BYOK via OpenAI-compatible `wireApi: "responses"` loses patch arguments, breaking code-apply. |
| [#4329](https://github.com/github/copilot-cli/issues/4329) | Autopilot not actually enabled on session resume | sessions | OPEN | 0 | Status line shows enabled but approvals fail; undermines trust in persistent autopilot workflows. |
| [#4328](https://github.com/github/copilot-cli/issues/4328) | Ctrl+H misinterpreted as Ctrl+Backspace under WSL2 | input-keyboard | OPEN | 0 | Keybinding collision due to `WT_SESSION` leak; breaks documented `ctrl+h` = delete-char behavior. |
| [#4324](https://github.com/github/copilot-cli/issues/4324) | Loses todos / edits wrong plan after forked session | sessions, context-memory | OPEN | 0 | Forked sessions mutate parent session’s plan file; todo state desyncs, causing silent data corruption. |
| [#4323](https://github.com/github/copilot-cli/issues/4323) | Comments in `.mcp.json` cause full parse rejection | configuration, mcp | OPEN | 0 | Strict JSON parsing blocks documented/shared MCP configs; forces minified configs or workarounds. |
| [#4299](https://github.com/github/copilot-cli/issues/4299) | Increasing typing latency over long sessions | sessions, input-keyboard | OPEN | 1 | Latency grows unbounded in background-agent sessions, eventually making CLI unusable. |

---

## Key PR Progress
*No pull requests updated in the last 24 hours.*

---

## Feature Request Trends
1. **Multi-model BYOK orchestration** — #3282 (19 👍): users want declarative model profiles & in-session switching without restarts.  
2. **Per-agent reasoning control** — #2904 (16 👍): frontmatter field for `reasoning_effort` to avoid global flag proliferation.  
3. **Lazy MCP initialization** — #2901 (14 👍): connect servers on first tool call, not at CLI startup.  
4. **Session durability & fork safety** — #4325, #4324: V8 string limit, plan/todo corruption on fork.  
5. **Autopilot state persistence** — #4329, #4318: resume should restore autopilot + respect explicit “research-only” instructions.

---

## Developer Pain Points
| Pain Point | Evidence | Frequency |
|------------|----------|-----------|
| **Session corruption / unrecoverable state** | V8 string limit (#4325), forked plan mutation (#4324), autopilot ghost-enabled (#4329) | 3 critical bugs in 24h |
| **BYOK streaming regressions** | `apply_patch` args dropped (#4327), premium-usage misreporting (#2632) | 2 BYOK-specific regressions |
| **Input/keyboard quirks on WSL2** | Ctrl+H → word delete (#4328), latency creep (#4299) | Platform-specific UX debt |
| **MCP config fragility** | Comments break entire file (#4323), no lazy load (#2901) | Config DX gaps |
| **Version pinning broken** | Installer ignores explicit version (#4317) | Release-management trust issue |

---

*Generated from github/copilot-cli data as of 2026-08-02 00:00 UTC. Links point to live GitHub items.*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-08-02

## Today's Highlights
No new releases were published in the last 24 hours. The project saw active issue triage and PR work focused on Web UI stability, tool-call argument handling, and shell command execution fixes. A long-standing feature request for a persistent **Memory System** (#1283) continues to gather community interest with 10 comments.

---

## Releases
*No new releases in the last 24 hours.*

---

## Hot Issues
| # | Title | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#1283](https://github.com/MoonshotAI/kimi-cli/issues/1283) | **Memory System — Persistent context across sessions** | Top-voted enhancement; enables project-level context retention (patterns, preferences, auto-learned notes) across CLI invocations. | 10 comments, open since Feb 2026 — strong ongoing demand |
| [#2526](https://github.com/MoonshotAI/kimi-cli/issues/2526) | **StrReplaceFile undercounts replacements for chained edits** | Correctness bug: sequential edits count against original content, causing false “too few replacements” errors when later edits depend on earlier ones. | 1 comment; blocks reliable multi-step refactors |
| [#2576](https://github.com/MoonshotAI/kimi-cli/issues/2576) | **Document OmniRoute OpenAI-compatible provider setup** | Docs gap: users misconfigure base URL, model name, and env vars for OmniRoute gateway. | New issue; clear reproducibility ask |
| [#2574](https://github.com/MoonshotAI/kimi-cli/issues/2574) | **Kimi Code stuck on “Processing” (Unity MCP + VS Code)** | UX blocker: agent becomes unresponsive after successful MCP session; may indicate event-loop or transport hang. | New; no workaround reported |
| [#2573](https://github.com/MoonshotAI/kimi-cli/issues/2573) | **Web UI infinite “Connecting to session…” spinner on session switch** | Technical Preview regression on macOS/Chrome; session handoff fails silently. | New; affects Web UI adopters |

---

## Key PR Progress
| # | Title | Status | Impact |
|---|-------|--------|--------|
| [#2577](https://github.com/MoonshotAI/kimi-cli/pull/2577) | **fix(web,vis): don’t crash printing startup banner on legacy codecs (GBK)** | Open | Fixes crash on Windows consoles that can’t render U+279C (➜); resolves #2532 |
| [#2572](https://github.com/MoonshotAI/kimi-cli/pull/2572) | **fix(kosong): recursively unwrap double-encoded JSON in tool-call arguments** | Open | Unblocks providers that double-encode nested arrays/objects (e.g., `SetTodoList`, `StrReplaceFile`); Pydantic validation errors eliminated |
| [#2554](https://github.com/MoonshotAI/kimi-cli/pull/2554) | **fix(tools): count StrReplaceFile replacements against running content** | Open | Directly addresses #2526; ensures chained edits report accurate replacement counts |
| [#2530](https://github.com/MoonshotAI/kimi-cli/pull/2530) | **fix(shell): stop blocking until timeout when detached child holds pipes** | Open | Resolves #2468; prevents `cmd & echo done` from hanging the foreground shell path |
| [#2575](https://github.com/MoonshotAI/kimi-cli/pull/2575) | **fix(hooks): fire PostToolUse hooks via fire_and_forget_trigger** | Open | Fixes #2564; prevents hook tasks from being GC’d prematurely and adds structured error handling |

---

## Feature Request Trends
1. **Persistent Memory / Context** (#1283) — Highest community demand; users want project-scoped, cross-session recall (auto-learned + user-defined).
2. **Provider Ecosystem Extensibility** (#2576) — Need for turnkey docs & config templates for OpenAI-compatible gateways (OmniRoute, LiteLLM, etc.).
3. **Web UI Maturity** (#2573) — Session management, connection resilience, and parity with CLI workflows.
4. **MCP / Agent Integration Reliability** (#2574) — Stability when bridging to external tool servers (Unity, etc.).

---

## Developer Pain Points
| Area | Recurring Friction |
|------|-------------------|
| **Tool-call argument encoding** | Double-encoded JSON from certain providers breaks `StrReplaceFile`, `SetTodoList`, `ExitPlanMode` (fixed in #2572). |
| **Shell command handling** | Backgrounded processes holding stdout/stderr cause indefinite hangs (#2530). |
| **Web UI session switching** | Spinner hangs with no error surface; requires full page reload (#2573). |
| **StrReplaceFile chaining** | Replacement count validated against stale file snapshot, yielding false negatives (#2526 / #2554). |
| **Hook execution guarantees** | `PostToolUse`/`PostToolUseFailure` hooks dropped silently if not awaited (#2575). |

---

*Data sourced from `MoonshotAI/kimi-cli` — Issues & PRs updated 2026-08-01 → 2026-08-02.*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-08-02

---

## 1. Today's Highlights

OpenCode shipped **v1.18.11** with critical fixes for MCP SSE reconnect loops and provider model configs using interleaved reasoning fields. The community is fiercely debating the removal of the legacy layout (#37012, 37 👍) and silent privacy policy changes affecting Go subscribers (#39875, 35 👍). A new unified marketplace PR (#40108) and system prompt debug command (#39905) signal expanding extensibility.

---

## 2. Releases

### **v1.18.11** — 2026-08-02
| Area | Changes |
|------|---------|
| **Core** | • Fixed MCP SSE connections stuck in reconnect loops after server errors<br>• Fixed provider model configs using interleaved reasoning fields (`reasoning_text`, custom field names) |
| **Desktop** | • Open external links in system browser (partial note) |

[View Release](https://github.com/anomalyco/opencode/releases/tag/v1.18.11)

---

## 3. Hot Issues (Top 10 by Community Signal)

| # | Issue | Why It Matters | Community Reaction |
|---|-------|----------------|-------------------|
| [#37012](https://github.com/anomalyco/opencode/issues/37012) | **Keep legacy layout option** | Users lose one-click access to workspace, sessions, settings; new UI requires deep navigation | 34 comments, **37 👍** — highest engagement in 24h |
| [#39875](https://github.com/anomalyco/opencode/issues/39875) | **Revert silent removal of Go privacy wording & provider attribution** | Two commits stripped privacy assurances and provider attribution; Go subscribers demand transparency | 5 comments, **35 👍** — strong privacy concern |
| [#39847](https://github.com/anomalyco/opencode/issues/39847) | **Information on where models are hosted** | User signed up for EU-hosted models; DeepSeek V4 stopped working, raising data residency questions | 5 comments, **17 👍** |
| [#23595](https://github.com/anomalyco/opencode/issues/23595) | **`<system-reminder>` keeps moving, breaking llama.cpp cache** | Prompt cache invalidation on every turn wastes compute; affects local model performance | 6 comments, **11 👍** |
| [#20322](https://github.com/anomalyco/opencode/issues/20322) | **Native auto-memory for cross-session learning** | No built-in mechanism to persist learnings; manual workarounds required | 8 comments, **5 👍** |
| [#33028](https://github.com/anomalyco/opencode/issues/33028) | **Subagents hang indefinitely after quick bash tool call** | Stream never times out; only `Esc` or process kill unblocks; affects multiple models | 8 comments, **5 👍** |
| [#32149](https://github.com/anomalyco/opencode/issues/32149) | **Opencode stops processing requests without response** | "Thinking" state appears then stalls silently; no error, no completion | 9 comments, **4 👍** |
| [#23506](https://github.com/anomalyco/opencode/issues/23506) | **MCP client: skip certificate validation** | Dev environments need TLS verification override for self-signed certs | 2 comments, **5 👍** |
| [#40096](https://github.com/anomalyco/opencode/issues/40096) | **Collapsible tool output (code/diff/blocks) in TUI** | Long sessions become noisy; chain-of-thought hard to follow | 2 comments, new request |
| [#40078](https://github.com/anomalyco/opencode/issues/40078) | **Free usage exceeded on Aug 1 — terms changed?** | Free DeepSeek access suddenly blocked; unclear if bug or policy change | 3 comments, **2 👍** |

---

## 4. Key PR Progress (Top 10 by Impact)

| # | PR | Type | Description |
|---|----|------|-------------|
| [#40108](https://github.com/anomalyco/opencode/pull/40108) | **feat** | **Unified marketplace** for skills/agents — shared runtime across Desktop, TUI, CLI, API; closes #28696 |
| [#39905](https://github.com/anomalyco/opencode/pull/39905) | **feat** | **System prompt debug command**: `opencode debug prompt` prints resolved system prompt for troubleshooting |
| [#40110](https://github.com/anomalyco/opencode/pull/40110) | **fix** | Prevent `Enter` on empty input from sending/interrupting (desktop/web) — fixes #40106 |
| [#35838](https://github.com/anomalyco/opencode/pull/35838) | **fix** | `webfetch` now decodes response bodies using declared `charset` via `iconv-lite` (was hardcoded UTF-8) |
| [#26861](https://github.com/anomalyco/opencode/pull/26861) | **fix** | **TUI lazy-scroll loading**: loads older messages on scroll-up (50 at a time), fixes disappearing messages in long sessions (#7380) |
| [#40115](https://github.com/anomalyco/opencode/pull/40115) | **fix** | Retry `SQLITE_BUSY/LOCKED` on parallel `todowrite` calls (subagents via `task background:true`) — closes #40020 |
| [#35696](https://github.com/anomalyco/opencode/pull/35696) | **fix** | `grep` now enforces deny rules by filtering matched **file paths** (was passing regex only) — closes #35503 |
| [#37889](https://github.com/anomalyco/opencode/pull/37889) | **fix** | Handle new GitHub OIDC token format (`repo:org@123...`) and improve error handling — closes #37823 |
| [#34785](https://github.com/anomalyco/opencode/pull/34785) | **feat** | Add RFC 8628 device-flow OAuth provider type for custom gateways |
| [#40109](https://github.com/anomalyco/opencode/pull/40109) | **docs** | Add `oc-supermemory-redux` plugin to ecosystem documentation |

---

## 5. Feature Request Trends

| Trend | Representative Issues | Signal |
|-------|----------------------|--------|
| **Layout/UI customization** | #37012 (legacy layout), #40096 (collapsible output), #34764 (model picker grouping) | High — 37+ 👍 on legacy layout alone |
| **Cross-session memory & learning** | #20322 (auto-memory), #32658 (persistent memory), #40109 (supermemory plugin) | Recurring — multiple years of requests |
| **Privacy, transparency & data residency** | #39875 (privacy policy), #39847 (model hosting), #23506/#40111 (MCP TLS trust) | Rising — Go subscriber backlash |
| **Session reliability** | #17340 (compaction failure), #21960 (infinite retry), #34722 (compaction token count) | Persistent — core workflow blocker |
| **MCP / tooling maturity** | #23506 (cert skip), #40111 (per-server trust), #35838 (charset decode), #35696 (grep deny rules) | Steady — enterprise/adoption needs |
| **TUI/CLI power-user features** | #26672 (session review), #26861 (lazy scroll), #33421 (list truncation), #34740 (prompt area status) | Niche but vocal |

---

## 6. Developer Pain Points

| Pain Point | Frequency | Impact |
|------------|-----------|--------|
| **Session compaction failures** — "context exceeds model limit" even at 128k tokens | Multiple issues (#17340, #34722) | Blocks long-running tasks |
| **Subagent/agent hangs** — no timeout on quick tool calls, infinite retries | #33028, #21960 | Requires manual kill; silent failure |
| **No cross-session memory** — learnings lost on restart | #20322, #32658 | Forces manual context reconstruction |
| **Privacy policy changes without notice** — Go subscribers feel bait-and-switched | #39875, #39860, #39857 | Trust erosion; compliance risk |
| **Model hosting opacity** — EU hosting promised, DeepSeek V4 fails | #39847, #39872 | Data residency violations |
| **TUI message loss** — old messages vanish in long sessions | #26861, #7380 | Context loss mid-task |
| **Web UI session list empty** in `--web` mode despite API working | #27837 | Broken primary workflow for web users |
| **Subscription/payment failures** — Go/Zen plans blocked, recurring payments fail | #40064, #40078, #40107 | Revenue impact; user lockout |

---

*Generated from GitHub data (anomalyco/opencode) covering 2026-08-01 to 2026-08-02.*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-08-02

## Today's Highlights
The Pi codebase saw 44 issues and 24 PRs updated in the last 24 hours, with no new releases. Major themes include fixing the Anthropic provider's missing `x-client-request-id` header (critical for session affinity), resolving auto-compaction failures that let contexts exceed 100% before API rejection, and a wave of TUI rendering fixes for Unicode text, copy-paste, and scrollback preservation. Infrastructure work continues on session storage refactoring, SQLite branch caching scalability, and bounded model catalog refreshes to prevent login freezes.

---

## Releases
No new releases in the last 24 hours.

---

## Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|----------------|-------------------|
| [#7161](https://github.com/earendil-works/pi/issues/7161) | **Anthropic `x-client-request-id` missing** | Gateways relying on this header for session affinity (e.g., multi-account proxies) can't group Anthropic conversations. Affects all Anthropic users behind load balancers. | 8 comments, active discussion; PR #7438 proposed as fix |
| [#6879](https://github.com/earendil-works/pi/issues/6879) | **Auto-compaction triggers only on provider overflow** | Context grows past 100% (373k tokens in report) before compaction runs, causing API rejections. Core reliability issue for long agentic sessions. | 8 comments, 6 👍 — high impact |
| [#7402](https://github.com/earendil-works/pi/issues/7402) | **Bengali paste + Space duplicates line (renderer desync)** | Differential renderer drifts from terminal cursor on complex scripts. Blocks non-Latin language users. | 6 comments, quick triage |
| [#7010](https://github.com/earendil-works/pi/issues/7010) | **Normalize optional object tool schemas for OpenAI-compatible providers** | Missing `required` normalization breaks tool calling on strict OpenAI-compatible gateways. | 6 comments, 1 👍 |
| [#7315](https://github.com/earendil-works/pi/issues/7315) | **Fireworks instant "Request timed out" failures** | Requests fail before HTTP response; auto-retry masks but doesn't fix root cause. Affects Fireworks users. | 4 comments |
| [#7121](https://github.com/earendil-works/pi/issues/7121) | **Three core tool bugs: byte count, find limit, surrogate split** | `write` reports UTF-16 length not bytes; `find` false limit warning; `truncateLine` splits surrogates. Data integrity risk. | 4 comments, fix branch linked |
| [#7048](https://github.com/earendil-works/pi/issues/7048) | **Compaction summary truncated mid-word on `stopReason: length`** | Summarization output capped but only `error` stop reason checked; `length` yields partial words persisted. | 4 comments |
| [#6600](https://github.com/earendil-works/pi/issues/6600) | **`pi update --extensions` broken by npm 11.16.0 script blocking** | New npm blocks install scripts by default; extension updates fail silently. Impacts all extension users. | 4 comments |
| [#7301](https://github.com/earendil-works/pi/issues/7301) | **Stalled availability refresh permanently unrecoverable** | `forceRefreshAvailability()` chains onto stuck promise; runtime never recovers even after cause clears. | 3 comments, critical for reliability |
| [#7385](https://github.com/earendil-works/pi/issues/7385) | **Keystroke lag scales with conversation length (350-520ms/char)** | `tool-result-renderer` bypasses `Text` component cache, reprocessing all tool results on every keystroke. | 3 comments, performance regression |

---

## Key PR Progress

| # | PR | Type | Summary |
|---|----|------|---------|
| [#7467](https://github.com/earendil-works/pi/pull/7467) | **feat** | Add MiniMax video generation (text-to-video) with global/CN providers, v2/v1 endpoints, task/status/download handling. |
| [#7466](https://github.com/earendil-works/pi/pull/7466) | **feat** | Opt-in pre-dispatch durability barrier: persist session before provider request starts, enabling at-most-once semantics for embedders. |
| [#7463](https://github.com/earendil-works/pi/pull/7463) | **fix** | `SessionManager._persist` now ensures parent directory exists before write, fixing ENOENT crashes on workspace reset. |
| [#7462](https://github.com/earendil-works/pi/pull/7462) | **feat** | Add `PI_JITI_CACHE` env var for persistent jiti transpile cache — required for Nix/packagers with read-only stores. |
| [#7455](https://github.com/earendil-works/pi/pull/7455) | **feat** | Simplify session storage: replace `SessionReader`/`StoreSession` split with concrete `Session` facade + faceted `SessionStore`. |
| [#7459](https://github.com/earendil-works/pi/pull/7459) | **feat** | Compose experimental CLI commands: unified parser for server/client modes, typed dispatch, validation. |
| [#7456](https://github.com/earendil-works/pi/pull/7456) | **fix** | OAuth: refresh only when <1 min remains (was refreshing on every request for 5-min tokens). |
| [#7453](https://github.com/earendil-works/pi/pull/7453) | **feat** | Add Cline API (usage-billing) and ClinePass (flat-rate) providers — OpenAI-compatible at `api.cline.bot`. |
| [#7451](https://github.com/earendil-works/pi/pull/7451) | **fix** | Bound model catalog refreshes with cancellation/queuing — fixes #7027, #7113, #7153, #7418, #7443 (login freezes, hang on unreachable catalog). |
| [#7440](https://github.com/earendil-works/pi/pull/7440) | **feat** | Switchable terminal renderers at runtime — preserve terminal, focus, input, renderer state across UI modes. |

---

## Feature Request Trends
1. **Provider parity & observability** — Multiple issues/PRs around missing headers (`x-client-request-id`), OAuth token handling, WebSocket error codes, and new provider integrations (MiniMax, Cline, Fireworks reliability).
2. **Session durability & recovery** — Pre-dispatch persistence, bounded refreshes, crash-safe SQLite writes, compaction provider override (#7447), and subagent transcript bloat (#7452).
3. **TUI/renderer extensibility** — Switchable renderers (#7440), scroll lock/reading mode (#4679), bracketed paste fallback (#7321), and Unicode-aware width calculation (#7402).
4. **Performance at scale** — SQLite branch caching (#7431), tool-result renderer caching (#7385), compaction discovery via type index (#7450), and connection attempt timeouts (#7435).
5. **Configuration granularity** — Per-provider/model concurrency limits (#7460), compaction model override, JITI cache directory, and experimental CLI composition.

---

## Developer Pain Points
| Area | Recurring Frustrations |
|------|------------------------|
| **Provider reliability** | Missing headers break session affinity; Fireworks/Codex WebSocket errors hard-stop turns; OAuth 5-min tokens refresh every request; catalog API timeouts freeze login/model switching. |
| **Compaction & context** | Auto-compaction doesn't trigger until provider rejects; summaries truncated mid-word; no override for small/local models; subagent transcripts bloat parent sessions. |
| **TUI usability** | Copy-paste adds spaces/line breaks; Bengali/complex scripts desync renderer; scrollback destroyed on startup (ESC[3J); no scroll lock during agent output; multi-line paste broken on Termux. |
| **Tool correctness** | Byte vs char counting; surrogate pair splitting; false limit warnings; hard-coded 30s RPC timeout kills long compactions. |
| **Windows support** | Path utilities assume POSIX separators; `ignore` library crashes on `\` paths. |
| **Extension ecosystem** | npm 11.16+ blocks install scripts by default, breaking `pi update --extensions` with no clear workaround. |

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-08-02

## Today's Highlights
Qwen Code shipped v0.21.3 with a significantly enhanced `/review` command featuring test-plan validation, measured failure attribution, and new verification lenses for deeper code-change analysis. The team also released a nightly build (v0.21.3-nightly) completing the TUI keyboard shortcut reference and unblocking history pagination. Active development continues on session forking, daemon resource bounding, prompt-cache optimization, and desktop/Web Shell packaging.

---

## Releases

### v0.21.3 (Stable)
**Key Changes:**
- **Enhanced `/review` command** — Added test plan validation, measured failure attribution, and new verification lenses to improve code change analysis ([#8215](https://github.com/QwenLM/qwen-code/pull/8215), [#8218](https://github.com/QwenLM/qwen-code/pull/8218))
- Core review workflow improvements for more reliable verification

### v0.21.3-nightly.20260802.184365390
**Key Changes:**
- **docs**: Complete TUI keyboard shortcut reference ([#8327](https://github.com/QwenLM/qwen-code/pull/8327))
- **fix(core)**: Unblock history pagination on `o` key

### v0.21.2-nightly.20260801.bc382c3ff
**Key Changes:**
- **feat(hooks)**: Include session source in lifecycle hook payloads ([#8155](https://github.com/QwenLM/qwen-code/pull/8155))
- **feat(review)**: Cache identity improvements

---

## Hot Issues (Top 10 by Community Impact)

| # | Issue | Why It Matters | Community Reaction |
|---|-------|----------------|-------------------|
| [#176](https://github.com/QwenLM/qwen-code/issues/176) | **Tool calling broken with local qwen3-30b-a3b model** | Blocks local-model users; model emits tool calls but they aren't executed — no errors surfaced | 23 comments, 7 👍 — high visibility for local inference |
| [#7585](https://github.com/QwenLM/qwen-code/issues/7585) | **Direct External Context Provider Profile proposal** | Architectural request for private monorepo integration with admin-bound external memory; enables enterprise context sharing | 11 comments, needs-discussion — design-level conversation |
| [#8051](https://github.com/QwenLM/qwen-code/issues/8051) | **Bound multi-workspace daemon resource usage** | `qwen serve` daemon lacks byte-level bounds on request bodies, WS assembly, sessions — production risk | 9 comments, P2 priority — operational concern |
| [#8279](https://github.com/QwenLM/qwen-code/issues/8279) | **Chat compression reusing main prompt-cache via fork** | Design discussion: could compression reuse prompt-cache prefix through fork-like request to cut latency/cost | 3 comments, roadmap/context-performance — performance architecture |
| [#8277](https://github.com/QwenLM/qwen-code/issues/8277) | **Better Prompt Caching (tracking issue)** | Cross-cutting effort: stabilize reusable prompt prefix across provider adapters, tool discovery, KV-cache, forks, telemetry | 2 comments, 1 👍 — meta-issue for caching strategy |
| [#4777](https://github.com/QwenLM/qwen-code/issues/4777) | **Deferred-tools listing busts prompt cache on every MCP discovery** | MCP deferred tools baked into system prompt; any tool-set change invalidates cache — major cost/latency driver | 2 comments — core caching bug |
| [#8286](https://github.com/QwenLM/qwen-code/issues/8286) | **Voice: support trusted private ASR base URLs** | Security-scoped opt-in for internal/private voice endpoints (HTTP in isolated nets) — enterprise voice enablement | 3 comments, needs-discussion |
| [#8330](https://github.com/QwenLM/qwen-code/issues/8330) | **`@` completion tab switching broken in Warp (Ctrl+Tab conflict)** | Terminal shortcut collision makes completion picker unusable in Warp — UX regression for popular terminal | 3 comments, P2 — terminal compatibility |
| [#8284](https://github.com/QwenLM/qwen-code/issues/8284) | **Telemetry: expose prompt cache hit rate** | Request to surface cache hit rate as first-class metric alongside token counts — observability for caching | 2 comments — telemetry gap |
| [#8328](https://github.com/QwenLM/qwen-code/issues/8328) | **Preserve Todo compatibility outside Session Workflow views** | Post-#7580, all `todo_write` calls persist `planId`/workflow metadata — breaks non-workflow sessions | 2 comments — regression in agent contract |

---

## Key PR Progress (Top 10 by Significance)

| # | PR | Summary | Status |
|---|----|---------|--------|
| [#8349](https://github.com/QwenLM/qwen-code/pull/8349) | **feat(review): drive — readiness polled, completion proven, cleanup guaranteed** | Adds `qwen review drive`: start service, wait for real readiness, drive it, capture facts — replaces sleep-based verification | Open |
| [#8346](https://github.com/QwenLM/qwen-code/pull/8346) | **feat(review): teach verifier falsify-not-verify asymmetry** | Adds rule block to Step 4 verifier: "I could not verify it" and "evidence somewhere I didn't look" are not rejection grounds | Open |
| [#8351](https://github.com/QwenLM/qwen-code/pull/8351) | **feat(review): publish evidence images to user-designated assets repo** | `/review` can host screenshots/rendered comparisons in a user repo and embed via commit-pinned URLs (GitHub API limitation workaround) | Open |
| [#8341](https://github.com/QwenLM/qwen-code/pull/8341) | **feat(serve): make sub-session concurrency caps configurable** | `serve.maxConcurrentSubSessionsPerCaller` (default 16) and `serve.maxConcurrentSubSessionsTotal` (default 24) — raised from 5/20 | Open |
| [#8318](https://github.com/QwenLM/qwen-code/pull/8318) | **feat(autofix): require isolated targeted E2E proof** | Fail-closed verification chain for Autofix: immutable failure metadata, maintainer approval bound to exact issue, verifies candidate commit | Open |
| [#8274](https://github.com/QwenLM/qwen-code/pull/8274) | **feat: fork from any conversation** | Session branching now targets any earlier Assistant response (not just latest) — handles tool calls, cancellations, pagination, rewinds safely | Open |
| [#8344](https://github.com/QwenLM/qwen-code/pull/8344) | **fix(core): redact sibling directives from forked subagent history** | Forked subagents no longer see other forks' directives from same turn — prevents cross-contamination in parallel forks | **Closed** |
| [#8350](https://github.com/QwenLM/qwen-code/pull/8350) | **feat(voice): support trusted private ASR base URLs** | Implements `security.allowedInsecureVoiceBaseUrls` exact allowlist for private/HTTP voice endpoints — addresses [#8286](https://github.com/QwenLM/qwen-code/issues/8286) | Open |
| [#8132](https://github.com/QwenLM/qwen-code/pull/8132) | **feat(desktop): package Web Shell as release-ready desktop app** | Tauri shell packages existing Web Shell: native lifecycle, workspace recovery, shared Web Shell — replaces separate desktop UI | Open |
| [#8348](https://github.com/QwenLM/qwen-code/pull/8348) | **docs: document compaction and image model selection** | Documents auxiliary model selectors for chat compression & built-in image generation; shows how to select/clear compression override | Open |

---

## Feature Request Trends (Distilled from Issues)

1. **Prompt Caching & Context Performance** — Multiple issues ([#8277](https://github.com/QwenLM/qwen-code/issues/8277), [#8279](https://github.com/QwenLM/qwen-code/issues/8279), [#4777](https://github.com/QwenLM/qwen-code/issues/4777), [#8284](https://github.com/QwenLM/qwen-code/issues/8284)) converge on stabilizing prompt prefixes, reusing cache across forks/compression, and exposing hit-rate telemetry. This is the top architectural theme.

2. **Enterprise/Managed Deployment Hardening** — Private ASR endpoints ([#8286](https://github.com/QwenLM/qwen-code/issues/8286)), external context provider profiles ([#7585](https://github.com/QwenLM/qwen-code/issues/7585)), daemon resource bounding ([#8051](https://github.com/QwenLM/qwen-code/issues/8051)), and session forking ([#8274](https://github.com/QwenLM/qwen-code/pull/8274)) signal push toward production-grade multi-tenant operation.

3. **Review/Verification Automation** — Three PRs in one day ([#8349](https://github.com/QwenLM/qwen-code/pull/8349), [#8346](https://github.com/QwenLM/qwen-code/pull/8346), [#8351](https://github.com/QwenLM/qwen-code/pull/8351)) extend `/review` with drive-based verification, falsification logic, and evidence publishing — making review a first-class CI/CD gate.

4. **Terminal/Shell Compatibility** — Warp `@` completion conflict ([#8330](https://github.com/QwenLM/qwen-code/issues/8330)), TUI scroll/repaint bugs ([#5971](https://github.com/QwenLM/qwen-code/issues/5971)), statusline selection in virtualized history ([#8131](https://github.com/QwenLM/qwen-code/issues/8131)) — terminal UX polish remains active.

5. **Voice & Multimodal Input** — Voice input requested since [#3110](https://github.com/QwenLM/qwen-code/issues/3110); now evolving toward secure private ASR ([#8286](https://github.com/QwenLM/qwen-code/issues/8286), [#8350](https://github.com/QwenLM/qwen-code/pull/8350)) and image model selection docs ([#8348](https://github.com/QwenLM/qwen-code/pull/8348)).

---

## Developer Pain Points (Recurring Frustrations)

| Pain Point | Evidence | Frequency |
|------------|----------|-----------|
| **Local model tool calling broken** | [#176](https://github.com/QwenLM/qwen-code/issues/176) (23 comments, 7 👍) — model emits calls but nothing executes, no errors | High — blocks local inference users |
| **Prompt cache thrashing** | [#4777](https://github.com/QwenLM/qwen-code/issues/4777) (deferred tools bust cache), [#8277](https://github.com/QwenLM/qwen-code/issues/8277) (tracking), [#8279](https://github.com/QwenLM/qwen-code/issues/8279) (design) — every MCP discovery invalidates cache | High — cost/latency impact |
| **TUI rendering/scrolling regressions** | [#5971](https://github.com/QwenLM/qwen-code/issues/5971) (scroll repaint from top), [#938](https://github.com/QwenLM/qwen-code/issues/938) (settings flicker), [#8131](https://github.com/QwenLM/qwen-code/issues/8131) (statusline unselectable) | Medium — daily UX friction |
| **Session/agent contract instability** | [#8328](https://github.com/QwenLM/qwen-code/issues/8328) (Todo `planId` forced on all sessions), [#7966](https://github.com/QwenLM/qwen-code/issues/7966) (track files per session), [#2329](https://github.com/QwenLM/qwen-code/issues/2329) (AskUserQuestion array wrapping) | Medium — breaks workflow assumptions |
| **Daemon resource unboundedness** | [#8051](https://github.com/QwenLM/qwen-code/issues/8051) — no byte limits on request bodies, WS frames, sessions in `qwen serve` | Medium — production deployment blocker |
| **Extension installation from repo fails** | [#2635](https://github.com/QwenLM/qwen-code/issues/2635) — `/extensions install` from qwen-code repo errors out | Low — but blocks dogfooding |
| **Random "User cancelled" false positives** | [#651](https://github.com/QwenLM/qwen-code/issues/651) — CLI stops with cancellation message despite no user action | Low — intermittent, hard to repro |

---

*Digest generated from GitHub data as of 2026-08-02. Links point to live issues/PRs on github.com/QwenLM/qwen-code.*

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-08-02

## 1. Today's Highlights
The project is finalizing **v0.9.4 source candidate** (PR #5044) with eight release-blocker fixes including xAI device-login recovery and provider/model resolution coherence. Concurrently, the TUI layer receives **notification quiet-mode controls**, **model capability badges in Fleet roster**, and a **deterministic continuation contract** for compaction summaries. Localization expansion continues with Hindi (Devanagari shaping), Ukrainian, French, German, and Catalan packs shipping in v0.9.2.

---

## 2. Releases
**No new releases in the last 24h.**  
The v0.9.4 source candidate is open (PR #5044) and incorporates fixes for: xAI OAuth dangling pointer (#5032), provider-switch model retention (#5034), permission posture liveness (#5025), and composer draft restoration (#5029).

---

## 3. Hot Issues (10 Noteworthy)

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#5007](https://github.com/Hmbown/CodeWhale/issues/5007) | Youtuber uses Codex instead of CodeWhale for DeepSeek | Visibility gap: influential creators bypass the official TUI despite DeepSeek integration | 6 comments — branding/awareness discussion |
| [#4085](https://github.com/Hmbown/CodeWhale/issues/4085) | macOS File Provider (Dropbox/iCloud) read/write failure | Blocks users on modern macOS default cloud storage paths; not a sandbox issue | 5 comments — reliability blocker |
| [#4683](https://github.com/Hmbown/CodeWhale/issues/4683) | Wrong DeepSeek completions URL (flaky) | Intermittent API failures due to malformed endpoint; affects production reliability | 3 comments — Open |
| [#4684](https://github.com/Hmbown/CodeWhale/issues/4684) | `danger-full-access` doesn't disable tools-layer boundary check | Security flag doesn't fully unlock cross-workspace tool access; breaks global skills | 3 comments — Closed |
| [#4716](https://github.com/Hmbown/CodeWhale/issues/4716) | TUI exits immediately on launch (macOS) | **Stop-ship** regression: binary returns `[Process completed]` without starting UI | 2 comments — Open |
| [#4564](https://github.com/Hmbown/CodeWhale/issues/4564) | Windows: `--model`/`--toolsets` flags consumed as single arg | Breaks CLI usability on Windows; only `exec --auto --max-steps N prompt` works | 2 comments — Open |
| [#5034](https://github.com/Hmbown/CodeWhale/issues/5034) | Provider switch retains unrelated default model | Release blocker for v0.9.4: model resolution not coherently updated with provider | 1 comment — Open, release-blocker |
| [#3093](https://github.com/Hmbown/CodeWhale/issues/3093) | Ship Korean, Spanish, Brazilian Portuguese locales | README localization landed; part of v0.9.2 global reach push | 4 comments — Closed |
| [#4790](https://github.com/Hmbown/CodeWhale/issues/4790) | Add Hindi localization with Devanagari terminal shaping | First Indic language; requires terminal shaping spike for Devanagari | 3 comments — Closed |
| [#4791](https://github.com/Hmbown/CodeWhale/issues/4791) | Add Ukrainian alongside Russian | Geopolitical/developer-community sensitivity; cheaper to ship together | 3 comments — Closed |

---

## 4. Key PR Progress (10 Important)

| # | PR | Type | Summary |
|---|----|------|---------|
| [#5044](https://github.com/Hmbown/CodeWhale/pull/5044) | Release | **v0.9.4 source candidate** — reconciled with `main`, includes 8 release-blocker fixes (#5032, #5034, #5025, #5030, #5029, #5024, #5021, #5018) |
| [#5066](https://github.com/Hmbown/CodeWhale/pull/5066) | Feature | **Notification quiet mode**: per-category switches, action-first copy, shared emission gate for all desktop protocols |
| [#5069](https://github.com/Hmbown/CodeWhale/pull/5069) | Feature | **Model capability badges** in Fleet setup/roster — provider-aware resolver with Models.dev provenance |
| [#5067](https://github.com/Hmbown/CodeWhale/pull/5067) | Fix | **Operate goals run to completion gate**; continuation cap (default 100) becomes configurable backstop |
| [#5064](https://github.com/Hmbown/CodeWhale/pull/5064) | Feature | **Deterministic continuation contract** in compaction: preserves working contract, intent, decisions, verification, in-flight tools |
| [#5068](https://github.com/Hmbown/CodeWhale/pull/5068) | Refactor | **Centralized DeepSeek Pro effort mapping** in dated table (`client/deepseek_effort.rs`), shared by Chat & Responses paths |
| [#5065](https://github.com/Hmbown/CodeWhale/pull/5065) | Fix | **Coherent web retrieval path**: unified search result-count/timeouts, shared scraper UA, `CARGO_PKG_VERSION` injection |
| [#5051](https://github.com/Hmbown/CodeWhale/pull/5051) | Feature | **Turn-scoped tool restrictions** + env-gated sampling overrides for external benchmark drivers |
| [#5063](https://github.com/Hmbown/CodeWhale/pull/5063) | Fix | **8-issue burn-down batch**: Anthropic wire, sandbox, workflow, config scoping, session layer, input, TUI — each with regression tests |
| [#4990](https://github.com/Hmbown/CodeWhale/pull/4990) | Fix | **DevContainer Windows support**: dedicated dev image, named volumes for state/Cargo, avoids invalid HOME expansion |

---

## 5. Feature Request Trends
1. **Global Localization** — Systematic rollout of 10+ locales (KO, ES-419, PT-BR, HI, UK, FR, DE, CA, with Galician/Basque assessed) — see #3093, #4788, #4790, #4791, #4749
2. **Fleet/Parallel Worktree Ergonomics** — Cross-worktree claim visibility, shared build cache, branch-to-PR promotion (#5061)
3. **Provider/Model Abstraction** — Auto-routing across providers with consent flow (#4411), coherent provider-switch model resolution (#5034), capability badges (#5069)
4. **Deterministic Compaction/Continuation** — Contract preservation across context compaction (#5064), configurable continuation caps (#5067)
5. **Notification/UX Polish** — Quiet mode, per-category control, action-first copy (#5066), ambient life visual fidelity (#4807)

---

## 6. Developer Pain Points
| Pain Point | Evidence | Frequency |
|------------|----------|-----------|
| **macOS File Provider (iCloud/Dropbox) broken** | #4085 — `~/Library/CloudStorage/` unreadable despite no sandbox | High (5 comments, reliability label) |
| **TUI launch crash on macOS** | #4716 — immediate `[Process completed]` in fresh terminal | Critical (stop-ship label, Open) |
| **Windows CLI flag parsing** | #4564 — `--model`/`--toolsets` concatenated as single arg | Medium (Open, Windows-specific) |
| **Flaky DeepSeek API endpoint** | #4683 — malformed URL `api.deepse▏ek.com` intermittently | Medium (Open, network error) |
| **`danger-full-access` incomplete** | #4684 — tools-layer boundary persists despite flag | Medium (Closed, but architectural gap) |
| **Custom provider launch failure** | #4682 — setting custom provider name breaks startup | Low (Closed, but config UX fragility) |
| **Missing `/rc` runner enrollment command** | #4936 — product docs reference command runtime lacks | Low (Closed, docs/runtime drift) |
| **Hardcoded concurrency limits** | #5060 — `WORKFLOW_SEARCH_MAX_CONCURRENT=16` not reading Fleet config | Low (Open, experimental search) |

---

*Data source: github.com/Hmbown/DeepSeek-TUI (CodeWhale repo) — Issues/PRs updated 2026-08-01 to 2026-08-02*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/DenisZheng/agents-radar).*