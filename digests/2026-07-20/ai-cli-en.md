# AI CLI Tools Community Digest 2026-07-20

> Generated: 2026-07-20 03:28 UTC | Tools covered: 9

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

# Cross-Tool AI CLI Ecosystem Comparison Report — 2026-07-20

---

## 1. Ecosystem Overview

The AI CLI landscape is bifurcating into **desktop-app-first** (OpenAI Codex, GitHub Copilot CLI) and **daemon/TUI-native** (Gemini CLI, Qwen Code, Pi, DeepSeek TUI) architectures. All tools are converging on **sub-agent orchestration**, **MCP integration**, and **session durability** as core differentiators. Windows stability remains a systemic crisis for Electron-based desktop apps, while daemon-based tools invest heavily in cold-start latency, token-cost reduction, and worktree-isolated parallelism. Enterprise/ACP integration is driving protocol standardization across the board.

---

## 2. Activity Comparison

| Tool | Hot Issues (Tracked) | PRs Updated (24h) | Release Status | Top Community Signal |
|------|---------------------|-------------------|----------------|---------------------|
| **OpenAI Codex** | 10 (8+ Windows-critical) | 17 (all TUI/CLI perf) | None | 261 👍 on macOS `syspolicyd` runaway (#25719) |
| **Gemini CLI** | 10 | 10 (5 closed/merged) | **v0.52.0-nightly.20260720** | 12 comments on OAuth quota exhaustion (#22493) |
| **GitHub Copilot CLI** | 10 (21 updated total) | 1 (stale ownership.yaml) | None | 24 👍 on cancel enqueued messages (#1857) |
| **Pi** | 10 | 10 (several merged) | None | 9 comments on terminal scroll regression (#5023) |
| **Qwen Code** | 10 | 10 | **v0.20.0 stable** + **v0.20.1-preview.7215** | 11 comments on subagent model leakage (#7156) |
| **DeepSeek TUI** | 8 | **40** (v0.9.1 polish) | None (v0.9.0 latest) | 16 comments on sub-agent sandboxing (#4042) |
| *Claude Code* | *Summary failed* | *Summary failed* | *Summary failed* | — |
| *Kimi Code / OpenCode* | *Summary failed* | *Summary failed* | *Summary failed* | — |

**Velocity Leaders:** DeepSeek TUI (40 PRs), OpenAI Codex (17 PRs), Qwen Code (2 releases + 10 PRs).  
**Community Engagement Leaders:** OpenAI Codex (highest 👍), Gemini CLI (broad comment depth).

---

## 3. Shared Feature Directions

| Direction | Tools | Specific Needs |
|-----------|-------|----------------|
| **Sub-Agent Reliability & Observability** | All 6 | Real-time trace streaming (Qwen #6569), MAX_TURNS misreporting fix (Gemini #22323), sandboxing enforcement (DeepSeek #4042), worktree isolation (Qwen #7221, Pi #5341), model leakage prevention (Qwen #7156) |
| **MCP Ecosystem Maturation** | Codex, Gemini, Pi, Qwen, DeepSeek | Tool-only server support (Codex #14242), >128 tool limits (Gemini #24246), hot-reload (Pi #4588, DeepSeek #4588), discovery timeout fixes (Qwen #7147), malformed call handling (Gemini #22179) |
| **Session Durability & Memory Management** | Codex, Gemini, Copilot, Pi, Qwen, DeepSeek | Unbounded memory growth fixes (Pi #6841, Gemini #19590), SSE subscriber leaks (Qwen #7238), auto-compaction vs. request-body limits (Copilot #4183), iterative export (Pi #6843), prompt compression (DeepSeek #4597, #4600) |
| **Windows Platform Parity** | Codex, Gemini, Qwen, DeepSeek | HID/serialport main-thread blocks (Codex #33375, #33780), Shift+Tab binding (Gemini #20929), Docker sandbox cwd (Qwen #7139), flag parsing/PowerShell hardening (DeepSeek #4564, #4593) |
| **Enterprise/ACP Integration** | Copilot, Pi, Gemini, Qwen | ACP token/context exposure (Copilot #4174), ACP mode for Zed/JetBrains (Pi #836), Vertex AI/OAuth reliability (Gemini #22501, #22241), Git forge polling adapters (Qwen #7266) |
| **Evaluation Infrastructure** | Gemini, Qwen, DeepSeek | Component-level behavioral evals (Gemini #24353), goal/judge reliability (Qwen #7205, #4228), per-model facts centralization (DeepSeek #4599) |

---

## 4. Differentiation Analysis

| Tool | Architectural Focus | Target User | Technical Approach |
|------|-------------------|-------------|-------------------|
| **OpenAI Codex** | Desktop app (Electron) stability crisis resolution; TUI/CLI performance hardening | Individual devs + VS Code extension users | Aggressive main-thread deblocking, process-storm mitigation, sandbox integrity; TUI caching/borrowing optimizations |
| **Gemini CLI** | Nightly iteration cadence; evaluation-first release confidence; AST-aware tooling R&D | Google ecosystem users, enterprise (Vertex AI), OSS contributors | Deep config merges, AbortSignal leak prevention, eval infrastructure (`npm run eval:report`), AST navigation EPIC (#22745) |
| **GitHub Copilot CLI** | Plan-mode/voice/ACP integration reliability; queue control UX | GitHub/GitHub Enterprise users, Copilot subscribers | Model-agnostic plan-mode gates, ACP protocol compliance, skill-level OpenTelemetry spans, enqueued-message cancellation |
| **Pi** | Provider abstraction breadth; ACP editor integration; remote/distributed execution | Polyglot LLM users, editor-integrated workflows (Zed/JetBrains), remote dev | Built-in provider registry (Upstage, OpenCode Go), ExecutionEnv+SSH, ACP `--mode acp`, iterative session export |
| **Qwen Code** | Daemon architecture (SSE, worktree isolation, hot-reload); native web search; channel automation | Chinese/APAC devs, Bailian/DashScope users, web-shell operators | Bounded log rotation, worktree-isolated sessions, label-driven autofix, Git forge polling adapters, SSE transport fencing |
| **DeepSeek TUI** | Token-cost reduction at infrastructure level; model metadata centralization; Windows hardening | Cost-sensitive power users, multi-agent pipeline builders, Windows devs | Prompt compression (18%), prefix caching across sub-agents, single source of truth for model facts, PowerShell-safe invocation |

---

## 5. Community Momentum & Maturity

| Tier | Tools | Signals |
|------|-------|---------|
| **High Velocity / Rapid Iteration** | **DeepSeek TUI**, **Qwen Code**, **Gemini CLI** | 40 PRs/24h (DeepSeek), dual release channels (Qwen), nightly cadence + eval infra (Gemini), architectural cleanup tracked (DeepSeek v0.9.2) |
| **Stability-Crisis Mode** | **OpenAI Codex**, **GitHub Copilot CLI** | 8+ critical Windows issues (Codex), plan-mode/voice regressions (Copilot), desktop-app blockers dominating tracker, low PR velocity on desktop fixes |
| **Platform Maturation** | **Pi** | ACP integration completed after 6 months, provider ecosystem expanding rapidly, remote execution foundations laid, retry/resilience patterns standardized |
| **Data Gaps** | **Claude Code**, **Kimi Code**, **OpenCode** | Summary generation failed — unable to assess |

**Maturity Indicators:** Pi (ACP shipped), Qwen Code (daemon + worktree isolation + web search), Gemini CLI (eval infra + nightly discipline), DeepSeek TUI (model-facts centralization + prompt compression pipeline).

---

## 6. Trend Signals for Technical Decision-Makers

1. **Desktop Apps Are a Liability for Stability** — Electron-based tools (Codex, Copilot) suffer platform-specific main-thread blocks, process storms, and sandbox failures. Daemon/TUI architectures (Qwen, Gemini, Pi, DeepSeek) avoid these classes of bugs entirely.

2. **Sub-Agent Orchestration Is the New Core Primitive** — Every tool is investing in: sandboxing (DeepSeek #4042), observability (Qwen #6569), worktree isolation (Qwen #7221, Pi #5341), model leakage prevention (Qwen #7156), and prefix caching (DeepSeek #4600). This is where differentiation will occur.

3. **MCP Is Moving from Experimental → Production Requirements** — Hot-reload (Pi, DeepSeek), tool visibility under trust modes (DeepSeek #4582), >128 tool limits (Gemini #24246), and discovery reliability (Qwen #7147) are now table stakes.

4. **Token/Cost Optimization Has Reached Infrastructure Layer** — Prompt compression (DeepSeek 18%), prefix reuse across sub-agents (DeepSeek #4600), bounded log rotation (Qwen #6969), and iterative export (Pi #6843) are no longer application-level concerns.

5. **Windows Is a Strategic Investment, Not an Afterthought** — 4/6 tools have active Windows-specific fixes this cycle. Tools ignoring Windows (or delegating to WSL) will lose enterprise adoption.

6. **Evaluation Infrastructure = Release Confidence** — Gemini’s component-level eval EPIC (#24353) and Qwen’s goal/judge reliability work (#7205, #4228) signal that behavioral testing is becoming a prerequisite for shipping agentic features.

7. **ACP/Enterprise Integration Drives Protocol Standardization** — Copilot’s ACP token exposure gap (#

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
*Data as of 2026-07-20 | Repository: [anthropics/skills](https://github.com/anthropics/skills)*

---

## 1. Top Skills Ranking (Most-Discussed PRs)

| Rank | Skill / PR | Functionality | Discussion Highlights | Status |
|------|------------|---------------|----------------------|--------|
| 1 | **[skill-creator: fix run_eval.py 0% recall](#1298)** | Core tooling fix — the description-optimization loop was optimizing against noise; fixes Windows stream reading, trigger detection, parallel workers | 10+ independent reproductions of the recall=0% bug; blocks all skill description optimization | [Open](https://github.com/anthropics/skills/pull/1298) |
| 2 | **[document-typography](#514)** | Typographic quality control for AI-generated documents: prevents orphans, widows, numbering misalignment | Addresses universal pain point in every document Claude generates; users rarely request but always need | [Open](https://github.com/anthropics/skills/pull/514) |
| 3 | **[self-audit (v1.3.0)](#1367)** | Mechanical file verification + four-dimension reasoning quality gate; universal across projects/stacks/models | Novel "damage-severity priority" audit approach; combines mechanical checks with reasoning evaluation | [Open](https://github.com/anthropics/skills/pull/1367) |
| 4 | **[testing-patterns](#723)** | Comprehensive testing skill: Testing Trophy, AAA pattern, React Testing Library, contract testing, E2E, property-based | Covers full stack from philosophy to CI integration; addresses testing gaps in AI-generated code | [Open](https://github.com/anthropics/skills/pull/723) |
| 5 | **[color-expert](#1302)** | Color expertise for any task: naming systems (ISCC-NBS, Munsell, XKCD, RAL), color spaces, accessibility, gradients | Unusually broad domain coverage; includes OKLCH/OKLAB/CAM16 guidance and vision deficiency simulation | [Open](https://github.com/anthropics/skills/pull/1302) |
| 6 | **[pyxel (retro game dev)](#525)** | MCP server for Pyxel retro game engine: write → run_and_capture → inspect → iterate workflow | First game-dev skill; leverages MCP for interactive pixel-art/8-bit game creation | [Open](https://github.com/anthropics/skills/pull/525) |
| 7 | **[skill-quality-analyzer & security-analyzer](#83)** | Meta-skills: 5-dimension quality scoring (structure, examples, resources, security, maintainability) + threat modeling | Enables skill-on-skill evaluation; security analyzer covers prompt injection, data exfiltration, supply chain | [Open](https://github.com/anthropics/skills/pull/83) |
| 8 | **[ODT skill](#486)** | OpenDocument creation, template filling, ODT→HTML parsing; triggers on ODT/ODS/ODF/LibreOffice mentions | Fills open-format gap alongside existing DOCX/PDF skills; ISO standard compliance focus | [Open](https://github.com/anthropics/skills/pull/486) |

> **Note**: Multiple high-comment PRs cluster around **skill-creator tooling fixes** (#1298, #1099, #1050, #1323, #362, #361, #539) — indicating the skill authoring pipeline is the community's #1 friction point.

---

## 2. Community Demand Trends (From Issues)

| Trend | Evidence | Demand Signal |
|-------|----------|---------------|
| **Skill distribution security & trust** | [#492](https://github.com/anthropics/skills/issues/492) (39 comments, 2👍): Community skills masquerading as official `anthropic/` namespace | **Critical** — users granting elevated permissions to unvetted skills |
| **Org-wide skill sharing** | [#228](https://github.com/anthropics/skills/issues/228) (14 comments, 7👍): Manual .skill file sharing via Slack/Teams; need shared library or direct links | **High** — team adoption blocked by distribution friction |
| **Skill authoring pipeline reliability** | [#556](https://github.com/anthropics/skills/issues/556) (12 comments, 7👍), [#1169](https://github.com/anthropics/skills/issues/1169), [#1061](https://github.com/anthropics/skills/issues/1061): `run_eval.py` 0% recall on Windows; subprocess/encoding bugs | **High** — creators cannot iterate on skill descriptions |
| **Duplicate skill installation** | [#189](https://github.com/anthropics/skills/issues/189) (6 comments, 9👍): `document-skills` + `example-skills` install identical content | **Medium** — wastes context window; namespace confusion |
| **Advanced reasoning/quality gates** | [#1385](https://github.com/anthropics/skills/issues/1385), [#1367](https://github.com/anthropics/skills/pull/1367): Proposals for pre-task calibration → adversarial review → delivery verification | **Emerging** — community building meta-cognitive skills |
| **Compact memory / context efficiency** | [#1329](https://github.com/anthropics/skills/issues/1329) (9 comments): Symbolic notation for compact agent state | **Niche but growing** — long-running agent context management |
| **Agent governance & safety** | [#412](https://github.com/anthropics/skills/issues/412) (closed): Policy enforcement, threat detection, trust scoring, audit trails | **Latent** — enterprise demand for AI agent guardrails |

---

## 3. High-Potential Pending Skills (Active Discussion, Not Merged)

| Skill | PR | Why It's Poised to Land |
|-------|-----|-------------------------|
| **document-typography** | [#514](https://github.com/anthropics/skills/pull/514) | Universal need, zero dependencies, solves silent quality degradation in all generated docs |
| **testing-patterns** | [#723](https://github.com/anthropics/skills/pull/723) | Comprehensive coverage; aligns with community's code-quality focus; no competing skill exists |
| **color-expert** | [#1302](https://github.com/anthropics/skills/pull/1302) | Self-contained, broad applicability (design, data viz, accessibility), well-scoped domain |
| **self-audit** | [#1367](https://github.com/anthropics/skills/pull/1367) | Novel mechanical+reasoning dual-gate; addresses rising demand for output verification |
| **ODT skill** | [#486](https://github.com/anthropics/skills/pull/486) | Completes open-format trilogy (DOCX/PDF/ODT); ISO standard; active maintainer (kitao) |
| **skill-quality-analyzer** | [#83](https://github.com/anthropics/skills/pull/83) | Meta-skill enabling ecosystem self-regulation; security analyzer addresses #492 concerns |
| **pyxel** | [#525](https://github.com/anthropics/skills/pull/525) | First game-dev skill; MCP-native; demonstrates skills-as-MCP-servers pattern |
| **frontend-design (improved)** | [#210](https://github.com/anthropics/skills/pull/210) | Refines existing high-use skill; improves actionability/token efficiency |

---

## 4. Skills Ecosystem Insight

> **The community's most concentrated demand is fixing the skill authoring pipeline (skill-creator) so creators can reliably build, test, and optimize skills — while simultaneously demanding trust-safe distribution (namespace security, org sharing) and meta-skills that verify other skills' quality and reasoning.**

This dual pressure — **maker tooling reliability** + **consumer trust infrastructure** — defines the current evolution phase of the Claude Code Skills ecosystem.

---

*Report generated from GitHub data (50 PRs, 50 Issues) as of 2026-07-20. All links point to anthropics/skills repository.*

---

⚠️ Summary generation failed.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-07-20

---

## 1. Today's Highlights

**No new releases** in the last 24 hours. The issue tracker shows intense activity around **Windows Desktop stability** — multiple high-engagement issues report freezes, crashes, HID enumeration blocks, and runaway `taskkill.exe`/`powershell.exe` process spawns. On macOS, `syspolicyd`/`trustd` CPU runaway remains the top-voted bug (261 👍). The PR pipeline is dominated by TUI performance optimizations: markdown rendering, history caching, and subagent metadata handling.

---

## 2. Releases

*None in the last 24 hours.*

---

## 3. Hot Issues (Top 10 by Impact & Community Signal)

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#25719](https://github.com/openai/codex/issues/25719) | **macOS: `syspolicyd`/`trustd` CPU & memory runaway** | Codex Desktop triggers macOS security daemons into runaway loops, making machines unusable. Affects all Apple Silicon users on 26.527.60818+. | **261 👍, 67 comments** — highest engagement in tracker |
| [#20214](https://github.com/openai/codex/issues/20214) | **Windows 11: App freezes/stutters despite resources** | Persistent UI hangs on capable hardware (32 GB RAM, Ryzen 5600). Blocks daily workflow. | **68 👍, 55 comments** — long-standing (since Apr 29) |
| [#33375](https://github.com/openai/codex/issues/33375) | **Windows: `serialport.node` delay-load failures → severe UI lag** | Native module loading stalls main thread. Regression in 26.707.9981.0. | **30 👍, 46 comments** — recent spike (Jul 15) |
| [#33780](https://github.com/openai/codex/issues/33780) | **Windows: HID enumeration blocks main thread on unresponsive device** | Single bad HID device freezes entire app at launch. Electron main process blocks in `hid.dll`. | **8 👍, 39 comments** — root cause identified |
| [#33776](https://github.com/openai/codex/issues/33776) | **Windows: `taskkill.exe`/`conhost.exe` storms → WMI/DWM degradation** | Hundreds of orphaned processes per session. System-wide UI stutter. | **9 👍, 10 comments** — 287 processes observed |
| [#32683](https://github.com/openai/codex/issues/32683) | **Windows: Crash in `CrBrowserMain` (0xC0000005 @ chrome.dll)** | Browser-use feature crashes main process. Blocks web-dependent workflows. | **7 👍, 25 comments** |
| [#30009](https://github.com/openai/codex/issues/30009) | **Windows: `apply_patch` fails with sandbox error** | Core file-editing tool broken in sandbox. Directly blocks coding tasks. | **7 👍, 24 comments** |
| [#29532](https://github.com/openai/codex/issues/29532) | **macOS: SQLite TRACE log churn persists after rust-v0.142.0** | `logs_2.sqlite` grows unbounded despite partial fix. Disk pressure on long sessions. | **8 👍, 42 comments** |
| [#25319](https://github.com/openai/codex/issues/25319) | **VS Code Extension: Scope chats to current workspace** | Top feature request — users want per-project chat isolation like Claude Code. | **47 👍, 15 comments** |
| [#20951](https://github.com/openai/codex/issues/20951) | **VS Code Extension: Open sessions as full editor tabs** | UX parity request; current side-panel model feels cramped. | **30 👍, 10 comments** |

---

## 4. Key PR Progress (Last 24h)

All 17 PRs updated yesterday are **TUI/CLI performance & correctness fixes** — mostly from `copyberry[bot]` (automated/internal tooling). No desktop/app PRs in this batch.

| PR | Area | Change |
|----|------|--------|
| [#34234](https://github.com/openai/codex/pull/34234) | TUI | Skip redundant subagent metadata backfills for fresh/forked threads |
| [#34232](https://github.com/openai/codex/pull/34232) | TUI | Remeasure dynamic transcript cells to prevent clipping on content change |
| [#34229](https://github.com/openai/codex/pull/34229) | TUI | Persist explicit names for paginated threads (vs. derived titles) |
| [#34226](https://github.com/openai/codex/pull/34226) | TUI | Backfill completions only for active exec turn — avoids spurious `thread/read` |
| [#34224](https://github.com/openai/codex/pull/34224) | TUI | Eliminate `FileChange` cloning in diff rendering; borrow paths & share line counts |
| [#34223](https://github.com/openai/codex/pull/34223) | TUI | Cache finalized Markdown rendering; invalidate on width/content change |
| [#34222](https://github.com/openai/codex/pull/34222) | TUI | Drop replay-irrelevant notifications (raw responses, realtime audio) from buffers |
| [#34218](https://github.com/openai/codex/pull/34218) | TUI | Track command completion separately from output — fixes early-stream interruption |
| [#34216](https://github.com/openai/codex/pull/34216) | TUI | Bulk-allocate Markdown table widths; reuse styled-line data; cross-span URL detection |
| [#34206](https://github.com/openai/codex/pull/34206) | TUI | Don't retain decoded MCP images in history cells (placeholder-only render) |

**Theme:** Aggressive memory/CPU reduction in TUI transcript rendering — caching, borrowing, and avoiding clones across the hot path.

---

## 5. Feature Request Trends

| Direction | Evidence |
|-----------|----------|
| **Per-workspace chat isolation** | [#25319](https://github.com/openai/codex/issues/25319) (47 👍) — "Scope chats to current workspace/project" |
| **Full-tab session UX in VS Code** | [#20951](https://github.com/openai/codex/issues/20951) (30 👍) — "Open sessions as editor tabs like Claude Code" |
| **Remote-SSH parity** | [#27597](https://github.com/openai/codex/issues/27597) — Extension fails in Remote-SSH while CLI works |
| **MCP tool-only server support** | [#14242](https://github.com/openai/codex/issues/14242) — Codex stalls at `list_mcp_resources` for tool-only servers (Context7) |
| **Session/thread management** | [#34229](https://github.com/openai/codex/pull/34229), [#34198](https://github.com/openai/codex/pull/34198) — Paginated thread naming, side-conversation forking without history replay |

---

## 6. Developer Pain Points (Recurring Themes)

| Pain Point | Frequency | Representative Issues |
|------------|-----------|----------------------|
| **Windows Desktop instability** | Very High (8+ hot issues) | Freezes (#20214, #34065, #19923), crashes (#32683, #33541), HID/serialport blocks (#33375, #33780, #33912), process storms (#33776, #25453), sandbox tool failures (#30009, #31220) |
| **macOS system-daemon runaway** | High | `syspolicyd`/`trustd` CPU/memory leak (#25719 — 261 👍), SQLite log churn (#29532, #30236) |
| **VS Code Extension reliability** | Medium | Grey panel (#8197), load failure in Remote-SSH (#27597), blank/hang on Apple Silicon (#34187) |
| **Session continuity & tool regression** | Medium | Resumed threads miss new tools (#25990), MCP discovery broken (#14242), side-conversation liveness races (#34199) |
| **Rate-limit/account confusion** | Low | Weekly reset date shift after Plus upgrade (#30816) |

---

**Bottom line:** The desktop apps (especially Windows) are in a **stability crisis** — multiple independent root causes hitting main-thread responsiveness, process management, and sandbox integrity. The TUI/CLI is receiving focused performance hardening, but desktop blockers dominate community attention.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-07-20

## 1. Today's Highlights
The project shipped nightly **v0.52.0-nightly.20260720** with core fixes for config merging, shell execution leaks, and NixOS path trust. Community attention remains focused on **authentication regressions** (OAuth/Vertex AI hangs, silent `.env` failures), **sub-agent reliability** (MAX_TURNS misreporting, MCP 400 errors), and **security gaps** (proxy credential logging, privacy opt-in persistence). Evaluation infrastructure and AST-aware tooling are emerging as strategic investment areas.

## 2. Releases
**v0.52.0-nightly.20260720.gacae7124b** — Automated nightly build. Notable merged changes since last nightly:
- **Deep-merge user model config over defaults** (#28364) — fixes shallow-merge loss of nested `generateContentConfig`.
- **Prevent AbortSignal listener leak in ShellExecutionService** (#28363) — addresses memory leak during long sessions.
- **Add `/nix/store` to trusted system paths** (#28256) — unblocks Ripgrep/other binaries on NixOS.
- **Optimize slash command resolution with pre-computed map** (#28262) — O(1) lookup for CLI commands.
- **Clean up legacy profile selector logic** (#28268) — removes dead config code.
- **Evals: local report command & developer docs** (#28369) — `npm run eval:report` aggregates pass rates by model from Vitest output.

[Full Changelog](https://github.com/google-gemini/gemini-cli/compare/v0.52.0-nightly.20260719.gacae7124b...v0.52.0-nightly.20260720.gacae7124b)

## 3. Hot Issues (Top 10 by Community Impact)

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#22493](https://github.com/google-gemini/gemini-cli/issues/22493) | **Account hits limit without usage** (OAuth/Enterprise) | Users report sudden quota exhaustion; suggests metering bug or policy change. Blocks paid/Enterprise workflows. | 12 comments, 9 👍, `priority/p2`, `area/enterprise` |
| [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) | **Subagent reports GOAL success after MAX_TURNS** | Silent misreporting hides agent failures; undermines trust in autonomous workflows. | 11 comments, 2 👍, `priority/p1`, `area/agent`, `workstream-rollup` |
| [#19997](https://github.com/google-gemini/gemini-cli/issues/19997) | **API key credentials logged in proxy URLs** | Security: `http://api-key@proxy` credentials appear in telemetry unredacted. | 10 comments, `priority/p1`, `area/security` |
| [#20005](https://github.com/google-gemini/gemini-cli/issues/20005) | **Silent .env omission in untrusted workspaces** | UX regression: CLI fails to load `GEMINI_API_KEY` from `.env` without warning, surfacing misleading auth errors. | 9 comments, `priority/p2`, `area/core` |
| [#22241](https://github.com/google-gemini/gemini-cli/issues/22241) | **CLI hangs indefinitely on all API calls (Google One AI Ultra)** | Complete block for Ultra subscribers; no error/output, hits Node 5-min timeout. | 7 comments, 1 👍, `priority/p1`, `area/enterprise` |
| [#24353](https://github.com/google-gemini/gemini-cli/issues/24353) | **Robust component-level evaluations (EPIC)** | Strategic: scaling behavioral evals from 76 tests across 6 models; needed for release confidence. | 7 comments, `priority/p1`, `area/agent`, `aiq/eval_infra` |
| [#20857](https://github.com/google-gemini/gemini-cli/issues/20857) | **Gemini 3.0/3.1 not responding** | Model-specific regression; users on v0.31.0 report total unresponsiveness. | 7 comments, 1 👍, `priority/p2`, `area/agent` |
| [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) | **Assess AST-aware file reads, search, mapping (EPIC)** | Investigating whether AST tooling reduces turns/tokens for code navigation; could unlock major agent efficiency. | 7 comments, 1 👍, `priority/p2`, `area/agent`, `kind/feature` |
| [#20929](https://github.com/google-gemini/gemini-cli/issues/20929) | **Windows: Shift+Tab doesn’t cycle approval mode** | Core UX broken on PowerShell/CMD; footer shows binding but key does nothing. | 6 comments, `priority/p2`, `area/platform` |
| [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) | **Shell command stuck at “Waiting input” after completion** | Agent hangs post-execution on simple commands; shows active spinner despite finished process. | 4 comments, 3 👍, `priority/p1`, `area/core` |

## 4. Key PR Progress (Top 10 by Impact)

| # | PR | Status | Summary |
|---|----|--------|---------|
| [#28364](https://github.com/google-gemini/gemini-cli/pull/28364) | **fix(core): deep-merge user model config over defaults** | Open | Fixes shallow-merge bug where nested `generateContentConfig` overrides were lost. Critical for custom model params. |
| [#28363](https://github.com/google-gemini/gemini-cli/pull/28363) | **fix(core): prevent AbortSignal listener leak in ShellExecutionService** | Open | Removes listener on natural process exit; prevents memory growth in long-running sessions. Fixes #28280. |
| [#28369](https://github.com/google-gemini/gemini-cli/pull/28369) | **feat(evals): add local report command and developer documentation** | Open | Adds `npm run eval:report` to aggregate Vitest `report.json` by model/policy; includes dev guide for behavioral evals. |
| [#28256](https://github.com/google-gemini/gemini-cli/pull/28256) | **fix(core): add /nix/store to trusted system paths** | **Closed** | Allows NixOS/nix-darwin binaries (e.g., `rg`) to pass `isTrustedSystemPath()`; unblocks Nix users. |
| [#28262](https://github.com/google-gemini/gemini-cli/pull/28262) | **refactor(cli): optimize slash command resolution with pre-computed map** | **Closed** | Replaces linear search with `WeakMap` for O(1) command lookup; reduces startup/input latency. |
| [#28268](https://github.com/google-gemini/gemini-cli/pull/28268) | **refactor(cli): clean up profile selector logic and remove legacy config** | **Closed** | Removes dead profile-selection code; simplifies config surface. |
| [#28465](https://github.com/google-gemini/gemini-cli/pull/28465) | **chore/release: bump version to 0.52.0-nightly.20260720.gacae7124b** | Open | Automated nightly version bump. |
| [#28459](https://github.com/google-gemini/gemini-cli/pull/28459) | **chore(deps): bump @google/genai from 1.30.0 to 2.11.0** | **Closed** | Major GenAI SDK upgrade; includes new model APIs, safety controls, and breaking changes. |
| [#28458](https://github.com/google-gemini/gemini-cli/pull/28458) | **chore(deps): bump vitest from 3.1.1 to 4.1.10** | **Closed** | Test runner major version; new reporter APIs, parallelism improvements, V8 coverage v4. |
| [#28461](https://github.com/google-gemini/gemini-cli/pull/28461) | **chore(deps-dev): bump typescript from 5.8.3 to 7.0.2** | **Closed** | TypeScript 7.x upgrade; stricter checks, new language features, potential build breaks. |

> **Note:** 11 dependabot PRs (dependency updates) were merged/closed today; listed above are the highest-impact ones.

## 5. Feature Request Trends
1. **AST-aware code navigation** (#22745) — Precision file reads, symbol search, and call-graph mapping to cut token usage and turns.
2. **Component-level evaluation infrastructure** (#24353) — Scaling behavioral evals with per-model pass rates, flakiness tracking, and CI integration.
3. **MCP/Tooling robustness** — Support for spec-optional fields (e.g., missing `instructions` #2015), >128 tool limits (#24246), and malformed call handling (#22179).
4. **Auto Memory hardening** — Deterministic redaction (#26525), invalid patch quarantine (#26523), and low-signal session backoff (#26522).
5. **Enterprise auth parity** — Vertex AI timeout fixes (#22501), OAuth/Ultra subscription reliability (#22241, #22493), and proxy credential safety (#19997).

## 6. Developer Pain Points (Recurring Frustrations)
- **Silent failures**: `.env` ignored without warning (#20005), privacy opt-in not persisted (#21851), sub-agent hangs on interactive prompts (#21052).
- **Hanging/timeout loops**: API calls stall indefinitely (Ultra #22241, Vertex #22501), shell commands show “Waiting input” post-exit (#25166), context compression OOM crashes app (#19590).
- **Inconsistent file I/O**: Truncation despite explicit “no truncate” requests (#19066), tmp scripts scattered across workspace (#23571).
- **Windows UX gaps**: Shift+Tab binding broken (#20929), PowerShell/CMD parity issues.
- **Knowledge freshness**: Model stuck on 2025 package versions despite corrections (#27254).
- **Migration anxiety**: Antigravity CLI transition announced; open-source status unclear (#27304, 35 👍) — community investment at risk.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-07-20

## Today's Highlights
No new releases shipped in the last 24 hours. The issue tracker saw a surge of **21 updated issues**, with several critical regressions reported around **plan-mode reliability**, **voice transcription failures**, and **ACP/token observability gaps**. The highest-engagement item remains a long-standing request to **cancel enqueued messages** (24 👍), while new regressions in GPT-5.6 plan-mode exit and Claude sub-agent dispatch with `--add-dir` signal integration friction with latest model rollouts.

---

## Releases
*No new releases published in the last 24 hours.*

---

## Hot Issues (Top 10 by Impact & Community Signal)

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#1857](https://github.com/github/copilot-cli/issues/1857) | **Allow cancel/remove enqueued messages** | Users cannot abort queued slash commands or prompts during `/compact` or agent busy states — blocks workflow control. | 24 👍 • 8 comments • Open since Mar 2026 |
| [#4024](https://github.com/github/copilot-cli/issues/4024) | **Voice mode: all ASR models fail silently** | `/voice` captures audio but returns empty transcriptions for all three Nemotron models — core voice feature broken. | 13 comments • Updated Jul 19 |
| [#4188](https://github.com/github/copilot-cli/issues/4188) | **Regression: plan-mode blocks shell commands** | Plan mode now rejects `gh` CLI and other shell commands previously used to enrich plans (e.g., issue creation). | Filed Jul 20 • 0 comments (new) |
| [#4185](https://github.com/github/copilot-cli/issues/4185) | **`--add-dir` breaks Claude sub-agent dispatch (400: cache_control blocks >4)** | Every `--add-dir` flag adds a cache_control block; Anthropic allows max 4 — blocks all Claude sub-agents. | Filed Jul 19 • 0 comments (new) |
| [#4183](https://github.com/github/copilot-cli/issues/4183) | **Auto-compaction doesn’t prevent CAPI 5 MB request limit** | Long tool-heavy sessions hit 5 MB serialized request ceiling despite token headroom — compaction logic gap. | Filed Jul 19 • 0 comments (new) |
| [#4172](https://github.com/github/copilot-cli/issues/4172) | **Exiting plan mode unreliable with GPT-5.6 models** | Plan saves but no prompt to continue — agent stalls after “Plan saved to plan.md”. | 1 comment • Updated Jul 19 |
| [#4180](https://github.com/github/copilot-cli/issues/4180) | **TUI ignores all PTY keystrokes (breaks automation/orchestration)** | Programmatic input via `tmux send-keys`, `expect`, `pty.fork()` — only `Ctrl+C` works. | Filed Jul 19 • 0 comments (new) |
| [#4174](https://github.com/github/copilot-cli/issues/4174) | **ACP server exposes no token/context usage** | `--acp` mode lacks any usage/cost telemetry in protocol — blocks observability for enterprise/ACP integrators. | Filed Jul 18 • 0 comments (new) |
| [#4177](https://github.com/github/copilot-cli/issues/4177) | **Desktop app routes public github.com links to enterprise host** | Clicking public issue links in desktop app hits enterprise API → “We couldn’t load this issue”. | 1 comment • Filed Jul 19 |
| [#3725](https://github.com/github/copilot-cli/issues/3725) | **Add skill-level spans to OpenTelemetry traces** | Skill invocations emit flat tool calls under root span — no attribution to skill for debugging/observability. | 1 comment • Open since Jun 2026 |

---

## Key PR Progress
*Only one PR updated in the last 24h: [#1](https://github.com/github/copilot-cli/pull/1) (ownership.yaml, created 2023, closed). No active feature/fix PRs in the window.*

---

## Feature Request Trends
1. **Queue Control & Interruptibility** — Users want granular control over enqueued messages (cancel, edit, reorder) — see #1857, #4179, #4182.
2. **Observability & Telemetry** — Demand for token usage, cost, skill-level spans, and ACP protocol exposure — #3725, #4174, #4178.
3. **Model Transparency** — Show effective model in background agents, plan-mode, and voice picker — #4178, #4172, #4024.
4. **Automation-First TUI** — PTY/stdio compatibility for orchestration tooling — #4180.
5. **Session/Workspace Reliability** — Cloud sessions without repo checkout, Windows startup perf, `--add-dir` side effects — #4175, #4176, #4185.

---

## Developer Pain Points
- **Plan-mode regressions** with new model families (GPT-5.6, Claude) — blocking commands, stale write gates, unreliable exits (#4188, #4173, #4172).
- **Voice feature non-functional** across all bundled ASR models — silent failure, no fallback (#4024).
- **Context window vs. request body limits** — Auto-compaction doesn’t respect CAPI 5 MB ceiling (#4183).
- **Enterprise routing bugs** — Public links misrouted to enterprise endpoints (#4177).
- **Windows desktop startup latency** — 1–2 min with multiple CLI spawns (#4176).
- **Hook permission UX** — `ask` decisions from hooks render raw JSON instead of diff view (#4135).
- **ACP/integration blind spots** — No token/context exposure in ACP protocol (#4174).

---

*Generated from github/copilot-cli issue/PR activity (2026-07-19 → 2026-07-20).*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

⚠️ Summary generation failed.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

⚠️ Summary generation failed.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-07-20

---

## 1. Today's Highlights
The Pi team closed a significant batch of stability and provider-compatibility fixes today, including a memory-leak regression in long-running sessions (#6841), a session-breaking `assistant.usage` undefined crash (#6819), and Copilot Enterprise compaction failures (#6768). Two new built-in providers landed—Upstage Solar LLMs (#6824) and OpenCode Go Responses models (#6828)—while the self-update path gained retry resilience (#6675). ACP editor-integration support (#836) also reached completion after six months of iteration.

---

## 2. Releases
*No new releases in the last 24 hours.*

---

## 3. Hot Issues (Top 10 by Impact & Discussion)

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#5023](https://github.com/earendil-works/pi/issues/5023) | **Terminal randomly scrolls to buffer start** | Core UX regression affecting daily workflow; closed with fix after 9 comments. | 9 comments, 👍0 |
| [#6210](https://github.com/earendil-works/pi/issues/6210) | **`/scoped-models` fails on model IDs with brackets** | Blocks custom model registration for bracketed names (e.g., `custom/model[1m]`). | 8 comments, 👍0 |
| [#6792](https://github.com/earendil-works/pi/issues/6792) | **100% CPU on ≥500-line file writes/edits** | Performance cliff on large files; profile attached, closed with fix. | 7 comments, 👍0 |
| [#1871](https://github.com/earendil-works/pi/issues/1871) | **Misleading “No API key” error during parallel startup lock contention** | Causes false auth failures in `pi-subagents` parallel mode; root cause identified. | 6 comments, 👍0 |
| [#6774](https://github.com/earendil-works/pi/issues/6774) | **Ctrl+G external editor slow when `os.tmpdir()` crowded** | Temp-file creation bottleneck; fix uses private `mkdtemp` subdirectory. | 5 comments, 👍0 |
| [#6675](https://github.com/earendil-works/pi/issues/6675) | **`pi update --self` aborts on single transient network failure** | Self-update lacks retry; PR adding exponential backoff in progress. | 5 comments, 👍0 |
| [#5341](https://github.com/earendil-works/pi/issues/5341) | **Port coding-agent to ExecutionEnv + SSH remote containers** | Enables remote development (SSH/container); foundational for distributed workflows. | 5 comments, 👍0 |
| [#6768](https://github.com/earendil-works/pi/issues/6768) | **Compaction fails with Copilot Enterprise (421 Misdirected Request)** | Enterprise users blocked; fixed via provider-specific request routing. | 4 comments, 👍2 |
| [#6305](https://github.com/earendil-works/pi/issues/6305) | **Beginner-friendly local model server connection** | UX gap for newcomers; auto-discovery + manual URL entry implemented. | 4 comments, 👍0 |
| [#6841](https://github.com/earendil-works/pi/issues/6841) | **Unbounded memory growth in long sessions (300–650 MB RSS, swap thrashing)** | Critical stability issue for week-long sessions; iterative export fix landed in #6843. | 1 comment, 👍0 |

---

## 4. Key PR Progress (Top 10)

| # | PR | Type | Summary |
|---|----|------|---------|
| [#6843](https://github.com/earendil-works/pi/pull/6843) | **fix** | Replaces recursive session-tree traversals in HTML export with iterative stacks (20k-entry regression test). Fixes #6841 memory growth. |
| [#6828](https://github.com/earendil-works/pi/pull/6828) | **fix** | Registers OpenAI Responses API impl for OpenCode Zen Go; explicit provider API union for type-safe catalog generation. |
| [#6840](https://github.com/earendil-works/pi/pull/6840) | **feat** | Adds shared `contentText` utility across `pi-ai`; closes #6839. |
| [#6834](https://github.com/earendil-works/pi/pull/6834) | **fix** | Moves UUIDv7 to `pi-ai`, adopts as default for Codex requests without session ID. Closes #6831. |
| [#6837](https://github.com/earendil-works/pi/pull/6837) | **fix** | Aligns GPT-5.6 Sol/Terra/Luna context to 272K for `openai-codex` provider (was 372K). Keeps long-context pricing tiers. |
| [#6775](https://github.com/earendil-works/pi/pull/6775) | **feat** | Adds retry logic for compaction/branch summarization on transient failures (fixes #6647). Open: asks if UI indication needed. |
| [#836](https://github.com/earendil-works/pi/pull/836) | **feat** | Implements ACP (`--mode acp`) for Zed/JetBrains integration; adds `@agentclientprotocol/sdk`, `PiAgent` class. Tested in Zed. |
| [#6824](https://github.com/earendil-works/pi/pull/6824) | **feat** | Adds Upstage (Solar LLMs) as built-in provider: `solar-mini`, `solar-pro2`, `solar-pro`, `solar-1m`. |
| [#6818](https://github.com/earendil-works/pi/pull/6818) | **fix** | Guards `assistant.usage` access in context token calculations; prevents session crashes from providers omitting usage (e.g., DeepSeek V4). |
| [#6827](https://github.com/earendil-works/pi/pull/6827) | **fix** | Forwards `willRetry` flag to extension-visible `agent_end` event (mirrors #4716). |

---

## 5. Feature Request Trends
1. **Remote & Distributed Execution** — SSH/container support (#5341), ACP editor integration (#836), and ExecutionEnv abstraction are converging to enable “Pi runs locally, OS ops run remotely.”  
2. **Provider Ecosystem Expansion** — Rapid addition of new built-in providers (Upstage, OpenCode Go, Copilot Enterprise fixes) signals a strategy to reduce “bring your own config” friction.  
3. **Session Durability & Observability** — Iterative export (#6843), retry lifecycle hooks (#6836, #6827), and manual retry command (#6810) address long-running session reliability.  
4. **Onboarding & Local Model UX** — Auto-discovery for local servers (#6305), clearer error messages (#1871), and bracketed model-id support (#6210) lower the entry barrier.  
5. **Extensibility Surface Growth** — Requests for raw-response hooks (#3605), batch tool-call judgment (#6816), and message-renderer swap API (#6821) indicate maturing extension platform.

---

## 6. Developer Pain Points (Recurring Themes)
- **Session longevity limits**: Memory leaks (#6841), orphan tool-result corruption (#6832), and queued-message drops during compaction (#6820) make multi-week sessions fragile.  
- **Provider-specific quirks**: Copilot Enterprise 421 errors (#6768), missing `usage` fields (#6819), Codex context-window drift (#6837), and bracketed model IDs (#6210) require constant provider-specific patches.  
- **Startup & update flakiness**: Parallel lock contention masquerading as auth errors (#1871), single-shot self-update failures (#6675), and tmpdir crowding slowing Ctrl+G (#6774) degrade perceived reliability.  
- **Large-file performance**: CPU spikes on 500+ line edits (#6792) and find-tool glob failures on Windows (#6817) remain sharp edges.  
- **Extension API gaps**: Missing batch hooks (#6816), retry visibility (#6836), and renderer customization (#6821) block advanced editor integrations.

--- 

*Generated from github.com/badlogic/pi-mono activity on 2026-07-20.*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-07-20

## 1. Today's Highlights
- **Two releases in 24h**: v0.20.0 stable shipped with daemon log rotation and subagent fixes, followed by v0.20.1-preview.7215 adding label-driven autofix takeover.
- **Daemon reliability sprint**: Multiple PRs land fixes for SSE subscriber leaks, workspace trust hot-reload, worktree isolation on resume, and ACP writer fencing — addressing core stability pain points.
- **Web search tool nears merge**: PR #7215 introduces an opt-in, DashScope-backed `web_search` tool (off by default), closing a long-standing gap vs. other code-agent CLIs.

---

## 2. Releases

### v0.20.0 (Stable)
**Full Changelog**: [Release v0.20.0](https://github.com/QwenLM/qwen-code/releases/tag/v0.20.0)
- **feat(cli)**: Bounded daemon log rotation ([#6969](https://github.com/QwenLM/qwen-code/pull/6969))
- **feat(review)**: Subagent resilience and worktree reuse improvements
- **fix(core)**: Plan-mode entry boundary enforcement; model-switching regressions
- **ci**: Consolidated overlapping issue-triage workflows ([#4786](https://github.com/QwenLM/qwen-code/issues/4786))

### v0.20.1-preview.7215 (Preview)
**Full Changelog**: [Release v0.20.1-preview.7215](https://github.com/QwenLM/qwen-code/releases/tag/v0.20.1-preview.7215)
- **feat(autofix)**: Label-driven takeover and release; fixed forced-dispatch green no-op ([#7165](https://github.com/QwenLM/qwen-code/pull/7165))

---

## 3. Hot Issues (10 Noteworthy)

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#7156](https://github.com/QwenLM/qwen-code/issues/7156) | **Subagent mutates main session model** — context overflow recurrence after #7119 | P1 bug: silent model switch during subagent execution breaks user intent; regression from prior fix. | 11 comments, active triage |
| [#4748](https://github.com/QwenLM/qwen-code/issues/4748) | **Optimize daemon cold start & `qwen serve` fast-path latency** | 2.5s vs 0.7s cold-start gap; 17.24 MiB eager import closure identified. Critical for DX. | 11 comments, follow-up [#7264](https://github.com/QwenLM/qwen-code/issues/7264) filed |
| [#7147](https://github.com/QwenLM/qwen-code/issues/7147) | **MCP server never gets tool/resource listing** (Fastmail MCP) | Blocks MCP ecosystem adoption; auth works but tool discovery times out. | 5 comments, `welcome-pr` |
| [#6569](https://github.com/QwenLM/qwen-code/issues/6569) | **Improve subagent observability** — real-time visibility & manual intervention | Top UX gap: subagents run as black boxes; no streaming trace, no interrupt. | 3 comments, `roadmap/subagents-tools` |
| [#6237](https://github.com/QwenLM/qwen-code/issues/6237) | **Plan Mode content leakage** in subsequent responses | Plan content bleeds into assistant replies after `exit_plan_mode`; breaks trust in planning flow. | 3 comments, `coding-plan` |
| [#7139](https://github.com/QwenLM/qwen-code/issues/7139) | **Windows `qwen serve` Docker sandbox: invalid workspace cwd** | Shell tools fail with `chdir(2) failed` on Windows 11; bind mounts correct but cwd wrong. | 2 comments, P1, `scope/windows` |
| [#7238](https://github.com/QwenLM/qwen-code/issues/7238) | **RestSseTransport leaks SSE subscribers** → daemon unusable (HTTP 429) | Normal iterator exit doesn't close connection; easy to trigger, causes daemon-wide outage. | 1 comment, `daemon`, `scope/sdk` |
| [#7205](https://github.com/QwenLM/qwen-code/issues/7205) | **`/goal` accepts verdicts with missing transcript evidence** | Goal clears prematurely; follow-up to judge-reliability work (#4228). | 1 comment, P0, `status/ready-for-agent` |
| [#7181](https://github.com/QwenLM/qwen-code/issues/7181) | **`/goal` loop blocks user input** — cannot clear/replace/interrupt | Active goal queues all input ("排到下一轮"); Ctrl+C only escape. Breaks interactive control. | 2 comments, P1, `welcome-pr` |
| [#7252](https://github.com/QwenLM/qwen-code/issues/7252) | **`token-plan.ap-southeast-1` not selectable in `/auth`** | Regional token plan unavailable in auth flow; blocks APAC users on Model Studio. | 1 comment, `welcome-pr` |

---

## 4. Key PR Progress (10 Important)

| # | PR | Type | Summary |
|---|----|------|---------|
| [#7268](https://github.com/QwenLM/qwen-code/pull/7268) | **feat(serve): Hot-reload workspace trust changes** | Feature | Trust-policy snapshots + monitoring; reconciles workspaces into new runtime generations without daemon restart. |
| [#7237](https://github.com/QwenLM/qwen-code/pull/7237) | **fix(core): Fence concurrent ACP session writers** | Fix (P0a) | Atomic hard-link lease per `(runtime, session)`; owner reloads authoritative transcript after acquisition. |
| [#7257](https://github.com/QwenLM/qwen-code/pull/7257) / [#7269](https://github.com/QwenLM/qwen-code/pull/7269) | **fix(sdk): Abort/close SSE on iterator exit** | Fix | Transport-owned request lifecycle; composes caller cancellation; aborts on every iterator exit path. |
| [#7262](https://github.com/QwenLM/qwen-code/pull/7262) | **feat(daemon): Restore worktree isolation on session load/resume** | Fix | Fixes restart-persistence gap: `sessionBelongsToCurrentProject` now matches project hash correctly post-restart. |
| [#7215](https://github.com/QwenLM/qwen-code/pull/7215) | **feat(core): Opt-in built-in `web_search` via DashScope Responses API** | Feature | Zero-config search for Bailian users; off by default; no MCP server or extra key needed. |
| [#7248](https://github.com/QwenLM/qwen-code/pull/7248) | **fix(core): Enforce Plan mode entry boundary** | Fix | `enter_plan_mode` becomes execution boundary in multi-tool batches; siblings denied, model must observe new mode. |
| [#7221](https://github.com/QwenLM/qwen-code/pull/7221) | **feat(web-shell): Worktree-isolated sessions for parallel tasks** | Feature | Create sessions in isolated git worktrees from Web Shell; parallel tasks without polluting main workdir. |
| [#7258](https://github.com/QwenLM/qwen-code/pull/7258) | **fix(cli): Yield to single-slot background agents** | Fix | Main agent saves tool result and waits when subagent takes only background slot; resumes on completion. |
| [#7265](https://github.com/QwenLM/qwen-code/pull/7265) | **fix(cli): Repaint TUI after OS sleep/wake or SIGCONT** | Fix | `useWakeRepaint` hook detects resume from suspend/lid-close/`fg`; forces full terminal repaint via `refreshStatic`. |
| [#7266](https://github.com/QwenLM/qwen-code/pull/7266) | **feat(channels): GitHub/GitLab/Gitea polling adapters + cursor fix + docs** | Feature | Three new channel adapters with configurable polling; complete user/developer documentation included. |

---

## 5. Feature Request Trends

1. **Native Web Search** — 3+ issues ([#3841](https://github.com/QwenLM/qwen-code/issues/3841), [#4801](https://github.com/QwenLM/qwen-code/issues/4801), [#7215](https://github.com/QwenLM/qwen-code/pull/7215)): "Only mainstream CLI without it"; DashScope server-side search exists but unexposed.
2. **Subagent Observability & Control** — [#6569](https://github.com/QwenLM/qwen-code/issues/6569), [#7254](https://github.com/QwenLM/qwen-code/issues/7254): Real-time trace streaming, manual intervention, resource-aware scheduling (main agent shouldn't "think" while waiting).
3. **Channel/Background Automation Maturity** — [#7209](https://github.com/QwenLM/qwen-code/issues/7209), [#7266](https://github.com/QwenLM/qwen-code/pull/7266), [#7222](https://github.com/QwenLM/qwen-code/issues/7222): Full Web Shell management, Git forge polling adapters, leak-free completion handling.
4. **Model/Token Management Polish** — [#7198](https://github.com/QwenLM/qwen-code/issues/7198) (new model), [#7252](https://github.com/QwenLM/qwen-code/issues/7252) (regional token plan), [#7236](https://github.com/QwenLM/qwen-code/issues/7236) (thinking tokens in stats), [#7156](https://github.com/QwenLM/qwen-code/issues/7156) (subagent model isolation).
5. **Plan Mode Reliability** — [#6949](https://github.com/QwenLM/qwen-code/issues/6949), [#7248](https://github.com/QwenLM/qwen-code/pull/7248), [#6237](https://github.com/QwenLM/qwen-code/issues/6237): Read-only shell classification, entry boundaries, content leakage.

---

## 6. Developer Pain Points (Recurring Frustrations)

| Area | Symptoms | Representative Issues |
|------|----------|----------------------|
| **Daemon Cold Start** | 2.5s boot + first session; 17 MB / 2420 modules eager-loaded | [#4748](https://github.com/QwenLM/qwen-code/issues/4748), [#7264](https://github.com/QwenLM/qwen-code/issues/7264) |
| **Subagent Model Leakage** | Main session model silently overwritten by subagent; context overflow | [#7156](https://github.com/QwenLM/qwen-code/issues/7156), [#7254](https://github.com/QwenLM/qwen-code/issues/7254) |
| **SSE/Transport Leaks** | Normal iterator exit → unsubscribed but connection open → HTTP 429 daemon outage | [#7238](https://github.com/QwenLM/qwen-code/issues/7238), [#7257](https://github.com/QwenLM/qwen-code/pull/7257), [#7269](https://github.com/QwenLM/qwen-code/pull/7269) |
| **Plan Mode UX** | Read-only commands blocked; content leaks into replies; entry not atomic | [#6949](https://github.com/QwenLM/qwen-code/issues/6949), [#6237](https://github.com/QwenLM/qwen-code/issues/6237), [#7248](https://github.com/QwenLM/qwen-code/pull/7248) |
| **Windows `qwen serve`** | Docker sandbox cwd invalid; `chdir(2) failed` on every shell tool | [#7139](https://github.com/QwenLM/qwen-code/issues/7139) |
| **Goal Loop Control** | Active goal queues *all* input; cannot clear/replace/interrupt without Ctrl+C | [#7181](https://github.com/QwenLM/qwen-code/issues/7181) |
| **MCP Integration** | Auth succeeds but tool/resource listing times out (Fastmail, others) | [#7147](https://github.com/QwenLM/qwen-code/issues/7147) |
| **Token/Region Gaps** | New models (qwen3.8-max-preview) and regions (ap-southeast-1) missing from built-in config | [#7198](https://github.com/QwenLM/qwen-code/issues/7198), [#7252](https://github.com/QwenLM/qwen-code/issues/7252) |

---

*Generated from GitHub data as of 2026-07-20. All links point to live issues/PRs on `QwenLM/qwen-code`.*

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI (CodeWhale) Community Digest — 2026-07-20

## 1. Today's Highlights
No new releases shipped today, but the project saw intense maintenance velocity: **40 PRs merged or updated** in 24 hours, focusing on v0.9.1 polish (prompt compression, token-cost reduction, Windows hardening, MCP hot-reload, Blue Stage theming). Two critical bugs were fixed: Full Access mode incorrectly prompting on routine `git push` (#4595), and Windows `codewhale exec --auto` flag parsing (#4564). A new v0.9.2 tracking issue (#4599) was opened to consolidate per-model facts (context window, max output) into a single source of truth.

## 2. Releases
**No new releases in the last 24 hours.** The latest tagged release remains v0.9.0; v0.9.1 changes are landing via PRs.

## 3. Hot Issues (All 8 Updated Today)

| # | Title | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#4042](https://github.com/Hmbown/CodeWhale/issues/4042) | **Environment-level tool sandboxing for sub-agents** (CLOSED) | Runtime enforcement of `tool_restrictions` across sessions, sub-agents, Fleet workers, MCP servers — foundational for secure multi-agent workflows. | 16 comments, cross-cutting security/enhancement label; indicates deep design review. |
| [#1425](https://github.com/Hmbown/CodeWhale/issues/1425) | **Large-text processing hangs on sub-agent timeout** (OPEN) | 3M-char novel split into 10 sub-agents; `agent_wait` times out, session stalls. Blocks long-context / batch workloads. | 3 comments, user-impact high; reproduction details provided. |
| [#4594](https://github.com/Hmbown/CodeWhale/issues/4594) | **Top bar / sidebar cannot scroll to bottom (10-item To-do)** (OPEN) | UI regression: lists longer than viewport are truncated. Affects daily workflow visibility. | Filed by maintainer (Hmbown), 1 comment — likely quick fix. |
| [#4568](https://github.com/Hmbown/CodeWhale/issues/4568) | **Slash-command (`/xxx`) latency regression** (OPEN) | New version shows noticeable delay vs. prior instant response. UX regression on primary command surface. | Windows 10, latest version; 1 comment. |
| [#4564](https://github.com/Hmbown/CodeWhale/issues/4564) | **`--model` / `--toolsets` flags consumed as single arg on Windows** (OPEN) | npm global install on Windows breaks pre-exec flags; only `--auto --max-steps` works. Blocks CI / scripted usage. | 1 comment; env-var fallback proposed. |
| [#4595](https://github.com/Hmbown/CodeWhale/issues/4595) | **Full Access prompts on feature-branch `git push`** (CLOSED) | Safety gate misclassifies routine pushes as "publish-like", prompting under Full Access. Fixed in #4596. | 0 comments; maintainer-filed, same-day fix. |
| [#4599](https://github.com/Hmbown/CodeWhale/issues/4599) | **Single source of truth for per-model facts (v0.9.2)** (OPEN) | Context window, max output, capabilities scattered across constants, hardcoded match arms, route overrides, tests. Tech debt driving inconsistencies. | 0 comments; architectural cleanup tracked for v0.9.2. |
| [#4598](https://github.com/Hmbown/CodeWhale/issues/4598) | **Operate mode under-delegates: policy says delegation "not mandatory"** (OPEN) | Operate mode designed for aggressive sub-agent use but parent grinds sequentially. Mode contract vs. implementation mismatch. | 0 comments; design-level issue. |

## 4. Key PR Progress (Top 10 by Impact)

| # | Title | Type | Impact |
|---|-------|------|--------|
| [#4600](https://github.com/Hmbown/CodeWhale/pull/4600) | **Auto-fork read-only same-route children onto parent's cached prefix** | Perf/Arch | Eliminates ~100K token cold-start per sub-agent by reusing parent's prefilled system prompt + tools + context crawl. Major cost driver fix. |
| [#4597](https://github.com/Hmbown/CodeWhale/pull/4597) | **Compress Agent mode prompt 18% (661→542 words) without losing invariants** | Perf | Reduces static prefix size → cheaper cold starts & cache writes. Part of v0.9.1 prompt-reduction queue. |
| [#4593](https://github.com/Hmbown/CodeWhale/pull/4593) | **Harden PowerShell invocation for safe Windows execution** | Fix/Win | Adds `-NoLogo -NoProfile -NonInteractive`, captures `$LASTEXITCODE`. Fixes flaky Windows shell spawns. |
| [#4596](https://github.com/Hmbown/CodeWhale/pull/4596) | **Make Full Access truly full access for publish-like shell** | Fix | Ref-aware `git push` classification (force/delete/tags/mirror/all/prune, wildcard refspecs). Closes #4595. |
| [#4592](https://github.com/Hmbown/CodeWhale/pull/4592) | **Align every K3 route with verified per-route contract** | Fix/Config | Corrects Kimi K3 routing: open-platform vs. membership vs. vendor mirrors are per-route, not global. Verified via models.dev, pricing docs. |
| [#4588](https://github.com/Hmbown/CodeWhale/pull/4588) | **MCP hot-reload live tool pool** | Feat/MCP | `/mcp reload` atomically adopts config changes, reconnects unchanged, recovers malformed init, redacts failures. Zero-downtime tool updates. |
| [#4585](https://github.com/Hmbown/CodeWhale/pull/4585) | **Coalesce repeated read-only calls** | Perf | Deduplicates same-batch read-only tool calls by (tool, arg-hash); preserves one result/event/provider-ID per request. Cuts redundant API hits. |
| [#4584](https://github.com/Hmbown/CodeWhale/pull/4584) | **Keep debt gate out of system prefix** | Perf | Moves SlopLedger completion gate from fingerprinted system prompt → per-turn tail. Enables mid-turn steer reuse, shrinks prefix fingerprint churn. |
| [#4583](https://github.com/Hmbown/CodeWhale/pull/4583) | **Make Blue Stage the default grammar** | UI/Design | Action blue (`#6AAEF2`) primary accent; Signal Gold reserved for whale/human attention; Plan gets ice identity. Semantic token system replaces literals. |
| [#4582](https://github.com/Hmbown/CodeWhale/pull/4582) | **Bypass MCP tool deferral when trust_mode / Bypass approval active** | Fix/MCP | In Full Access (trust_mode + auto_approve), MCP tools now appear in model tool list instead of being hidden behind `defer_loading`. |

## 5. Feature Request Trends (Distilled from Issues)

1. **Sub-agent / Fleet reliability at scale** — Timeouts, sandboxing, token reuse (#4042, #1425, #4600). Users push multi-agent pipelines; infra must keep up.
2. **Model metadata centralization** — Single source of truth for context window, max output, capabilities (#4599). Eliminates drift between config, constants, routes, tests.
3. **Operate mode delegation aggression** — Policy says "not mandatory" but users expect default parallelism (#4598). Mode contracts need alignment with UX intent.
4. **Windows parity** — Flag parsing (#4564), PowerShell hardening (#4593), slash-command latency (#4568). Windows is a first-class target but lags in polish.
5. **MCP ergonomics** — Hot-reload (#4588), tool visibility under trust modes (#4582). MCP moving from experimental → production workflow.

## 6. Developer Pain Points (Recurring Frustrations)

| Pain Point | Evidence | Frequency |
|------------|----------|-----------|
| **Sub-agent timeout / hang on large workloads** | #1425 (3M-char novel, 10 sub-agents, `agent_wait` timeout) | High — blocks batch/long-context use cases |
| **Slash-command latency regression** | #4568 (new version "noticeably slower" vs. prior instant) | Medium — core UX surface |
| **Windows flag parsing broken** | #4564 (`--model`/`--toolsets` consumed as single arg) | Medium — breaks scripts/CI |
| **UI list scrolling broken** | #4594 (10-item To-do cannot reach bottom) | Low but visible — daily workflow friction |
| **Full Access over-prompts on routine git** | #4595 (feature-branch push triggers publish gate) | Low — fixed same day, but erodes trust in permission modes |
| **Scattered model constants cause drift** | #4599 (context window, max output in 4+ places) | Architectural — drives subtle bugs |

---

*Digest generated from GitHub data (Hmbown/CodeWhale) for 2026-07-20. All links point to live issues/PRs.*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/DenisZheng/agents-radar).*