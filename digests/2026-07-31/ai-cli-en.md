# AI CLI Tools Community Digest 2026-07-31

> Generated: 2026-07-31 02:09 UTC | Tools covered: 9

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

# AI CLI Tools Ecosystem — Cross-Tool Comparison Report (2026-07-31)

---

## 1. Ecosystem Overview

The AI CLI landscape is maturing along two axes: **reliability hardening** and **multi-session/multi-provider orchestration**. All major tools report zero or nightly-only releases today, with engineering capacity absorbed by critical bugs—Windows instability, provider overload handling, session corruption, and sandbox/security regressions dominate every tracker. Concurrently, communities are converging on **persistent cross-session memory**, **granular agent/resource control**, and **provider-agnostic local/LAN model discovery** as the next differentiation frontier. The market splits between **vendor-tied CLIs** (Claude Code, Codex, Gemini CLI, Kimi) optimizing for their model ecosystems, and **polyglot/extensible frameworks** (OpenCode, Pi, Qwen Code, CodeWhale) investing in protocol neutrality and headless/remote agent runtimes.

---

## 2. Activity Comparison

| Tool | Repo | Issues (Hot) | PRs (Active) | Release Today | Release Notes |
|------|------|--------------|--------------|---------------|---------------|
| **Claude Code** | anthropics/claude-code | 10 | 1 (closed, noise) | ❌ None | — |
| **OpenAI Codex** | openai/codex | 10 | 10 | ❌ None | — |
| **Gemini CLI** | google-gemini/gemini-cli | 10 | 11 (several merged) | ❌ None | — |
| **GitHub Copilot CLI** | github/copilot-cli | — | — | — | ⚠️ Digest generation failed |
| **Kimi Code CLI** | MoonshotAI/kimi-cli | 3 | 1 | ❌ None | — |
| **OpenCode** | anomalyco/opencode | 10 | 10 | ✅ **v1.18.10** | Modal model discovery, Desktop UX polish |
| **Pi** | earendil-works/pi | 10 | 10 | ❌ None | — |
| **Qwen Code** | QwenLM/qwen-code | 10 | 10 | ✅ **Nightly** v0.21.1-nightly.20260731 | CI hardening, web-shell tweaks |
| **CodeWhale (DeepSeek TUI)** | Hmbown/CodeWhale | 10 | 10 | ✅ **v0.9.2** | Rebrand complete, permission fixes, sub-agent supervision, LaTeX math |

**Signal Density**: OpenCode, Pi, Qwen Code, CodeWhale show highest PR throughput (10+ each) with substantive architectural work. Claude Code and Kimi exhibit notably low PR velocity relative to issue severity.

---

## 3. Shared Feature Directions

| Requirement | Tools Demanding It | Specific Needs |
|-------------|-------------------|----------------|
| **Persistent Cross-Session Memory / Context** | Claude Code (#79217), Gemini CLI (#26522, #26525), Kimi (#1283), OpenCode (#39747, #39748), Qwen Code (#8056, #8171), Pi (#7163, #7148) | Configurable memory index limits, workspace-isolated storage, secret redaction before model send, searchable session history, loadout/skill persistence |
| **Granular Sub-Agent Control & Observability** | Claude Code (#82104, #78217), Gemini CLI (#22323, #21409, #22093), OpenCode (#4022), Qwen Code (#8128, #8168), CodeWhale (#4022, #4989) | Token/billing caps, turn-limit transparency, CLI-accessible subagent status/cancellation, config-respecting spawn, telemetry normalization |
| **Provider-Agnostic Local/LAN Model Discovery** | OpenCode (#27554, #37762), Qwen Code (#8169), CodeWhale (#3306, #4747), Pi (#6216), Gemini CLI (#24246) | mDNS/UPnP auto-discovery, unified credential store, OpenAI-compatible / Responses API support, Bedrock/Ollama/Zen/LM Studio parity |
| **Windows Parity & Stability** | **All tools except Pi** (Claude #72377, Codex #31035/#29317, Gemini #28551, Kimi #2570, OpenCode #37628, Qwen #7972/#8146, CodeWhale #2369/#6300) | BSOD/kernel fixes, 16-bit binary resolution, AltGr/keyboard layout handling, OneDrive/WSL2 resilience, DevContainer support, installer integrity |
| **Session/Workspace Continuity Across Devices** | Codex (#34804, #36251), Gemini CLI (#28596), OpenCode (#27837, #39655), Pi (#7348, #7344), Qwen Code (#8132) | Runtime-neutral session protocol, searchable session storage, web/desktop/CLI state sync, worktree-isolated settings |
| **Rate-Limit / Quota Observability** | Codex (#32707, #24080, #36213), OpenCode (#39771, #39790), Claude Code (#82104) | CLI status-line reset timestamps, per-bucket visibility, quota-aware retry/backoff, tier-specific limit transparency |
| **Extensible Rendering / Protocol Neutrality** | Pi (#6747, #7348, #7344), CodeWhale (#4981), Qwen Code (#8132), OpenCode (#39764) | Markdown mutation API, CBOR/length-prefixed wire protocol, discriminated-union connection lifecycle, plugin request interception |

---

## 4. Differentiation Analysis

| Dimension | Vendor-Tied CLIs | Polyglot/Extensible Frameworks |
|-----------|------------------|--------------------------------|
| **Core Focus** | Optimize for proprietary model family (Claude, GPT, Gemini, Kimi) | Model-agnostic orchestration, protocol standards, headless/remote runtimes |
| **Target User** | Individual developers / teams already on vendor platform | Power users, platform engineers, teams needing multi-provider fallback, cloud/remote agent deployments |
| **Technical Approach** | Deep vertical integration (hooks, Cowork, sub-agents tied to vendor API) | Horizontal: ACP/MCP support, runtime-neutral session protocol (Pi), plugin hook systems (OpenCode, CodeWhale), Tauri/Web-Shell desktop convergence (Qwen) |
| **Session Model** | Ephemeral, vendor-cloud sync (Cowork, Codex sync) | Durable, queryable, migratable sessions (Pi `pi-protocol`, OpenCode SQLite, Qwen workspace-qualified memory) |
| **Extension Surface** | Limited to vendor-blessed MCP/skills | First-class plugin APIs (OpenCode `session.request`, Pi markdown API, CodeWhale loadout management), custom provider adapters |
| **Release Cadence** | Slow, gated by vendor infra (Claude, Codex, Gemini: 0 releases today) | Faster, community-driven (OpenCode, CodeWhale, Qwen nightly shipping fixes) |

**Notable Outliers**:
- **CodeWhale**: Only tool executing a **full rebrand + crate decomposition** (771k → modular) to enable single-binary distribution.
- **Pi**: Only tool building a **formal wire protocol (`pi-protocol`) + client SDK (`pi-client`)** for remote/headless agent workflows.
- **OpenCode**: Most aggressive on **Desktop/Web/CLI parity** and **local provider auto-discovery** (mDNS/UPnP).

---

## 5. Community Momentum & Maturity

| Tier | Tools | Evidence |
|------|-------|----------|
| **High Momentum / Rapid Iteration** | **OpenCode, CodeWhale, Qwen Code, Pi** | 10+ PRs/day with architectural scope (crate splits, protocol design, desktop packaging, provider adapters); releases shipping today (OpenCode v1.18.10, CodeWhale v0.9.2, Qwen nightly); maintainer-led epics with tracked milestones |
| **Moderate Momentum / Stabilizing** | **Gemini CLI** | Strong PR volume (11) with security/SSRF triage, Docker Node upgrades, MCP OAuth fixes, auto-compress feature; but no release today and subagent reliability backlog persists |
| **Low Momentum / Vendor-Gated** | **Claude Code, OpenAI Codex, Kimi Code** | Critical bugs open for months (Claude mobile multi-account 530👍 since Mar, Codex Windows BSOD, Kimi 429 outage); PR velocity ≤1; communities vocal but vendor response opaque |
| **Unknown** | **GitHub Copilot CLI** | Digest generation failed — no visibility |

**Maturity Indicators**:
- **Protocol/Architecture Investment**: Pi (`pi-protocol`, `pi-client`), CodeWhale (crate decomposition), OpenCode (plugin hook, mDNS discovery) signal platform-level ambition.
- **Security Posture**: Gemini CLI (SSRF CVE triage), Qwen Code (credential sanitization PR), Pi (RPC JSON guard) show proactive hardening.
- **Windows Commitment**: CodeWhale (DevContainer Windows support), Qwen Code (file-paste UX, LM Studio debug), OpenCode (16-bit fix) vs. Claude/Codex/Kimi where Windows blockers remain open.

---

## 6. Trend Signals for Technical Decision-Makers

| Trend | Signal Strength | Implication |
|-------|-----------------|-------------|
| **Session as a Durable, Portable Resource** | 🔥🔥🔥 (Pi, OpenCode, Qwen, Codex, Gemini) | Tooling that treats sessions as queryable, migratable, protocol-addressable assets will win enterprise/remote adoption. Invest in session storage/schema now. |
| **Local-First / Multi-Provider Orchestration** | 🔥🔥🔥 (OpenCode, CodeWhale, Qwen, Pi, Gemini) | Vendor lock-in is a top pain point. Tools enabling seamless fallback to Ollama, LM Studio, Bedrock, vLLM via auto-discovery gain strategic leverage. |
| **Sub-Agent Economics & Governance** | 🔥🔥 (Claude, Gemini, OpenCode, Qwen, CodeWhale) | Runaway billing (750k tokens), silent failures, and config-ignored spawns demand **hard caps, observability, and CLI-accessible control** — not just vendor dashboards. |
| **Windows Is a Tier-1 Blockers, Not Afterthought** | 🔥🔥🔥 (Every tool except Pi) | BSODs, 16-bit binaries, AltGr conflicts, OneDrive sync breaks, DevContainer gaps — teams evaluating CLIs must validate Windows CI/CD pipelines *before* adoption. |
| **Protocol Neutrality > Vendor SDKs** | 🔥🔥 (Pi `pi-protocol`, OpenCode plugin hooks, CodeWhale loadout, Qwen ACP) | The winning integration surface is **open wire protocols + plugin extension points**, not proprietary MCP/skill ecosystems. |
| **Desktop Convergence via Tauri/Web-Shell** | 🔥🔥 (Qwen `#8132`, OpenCode Desktop, CodeWhale TUI) | CLI-only is insufficient; native desktop packaging with shared web-shell runtime is the emerging standard for UX parity. |
| **Security Surface Hardening** | 🔥🔥 (Gemini SSRF, Qwen credential leak, Pi RPC guard) | As CLIs gain filesystem/shell/network access, supply-chain and SSRF vulnerabilities become critical. Expect sandboxing, capability-based permissions, and audit trails to become table stakes. |

---

## Bottom Line for Developers & Teams

| If You Need… | Lean Toward |
|--------------|-------------|
| **Deep integration with one model family, minimal config** | Claude Code (Anthropic), Codex (OpenAI), Gemini CLI (Google), Kimi (Moonshot) — *accept vendor gating & Windows risk* |
| **Multi-provider fallback, local models, offline capability** | OpenCode, Qwen Code, CodeWhale, Pi |
| **Headless/remote agents, session portability, protocol standards** | Pi (`pi-protocol`), OpenCode (plugin hooks), CodeWhale (single-binary) |
| **Rapid desktop UX iteration, Tauri/Web-Shell convergence** | Qwen Code, OpenCode, CodeWhale |
| **Windows-native reliability today** | CodeWhale (v0.9.2 fixes), Qwen Code (active Windows PRs), OpenCode (16-bit fix) — *avoid Claude/Codex/Kimi until BSOD/429 resolved* |
| **Enterprise session governance, audit, compliance** | Pi (searchable SQLite FTS5, protocol), OpenCode (SQLite session store), Gemini (auto-compress, memory config) |

**Watch List**: Pi’s `pi-client`/`pi-protocol` maturation, CodeWhale’s crate decomposition (v0.9.3), OpenCode’s LAN provider discovery, Qwen’s workspace-qualified memory — these will define the **interoperable agent runtime layer** for 2027.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
*Data as of 2026-07-31 | Source: github.com/anthropics/skills*

---

## 1. Top Skills Ranking (Most-Discussed PRs)

| # | Skill | Functionality | Discussion Highlights | Status |
|---|-------|---------------|----------------------|--------|
| **[#1298](https://github.com/anthropics/skills/pull/1298)** | **skill-creator: run_eval.py fix** | Fixes core evaluation pipeline — `run_eval.py` reported 0% recall for all skills, breaking the description-optimization loop (`run_loop.py`, `improve_description.py`). Addresses Windows stream reading, trigger detection, and parallel workers. | 10+ independent reproductions of the 0% recall bug (#556); blocks skill quality iteration | **Open** (updated 2026-06-23) |
| **[#556](https://github.com/anthropics/skills/issues/556)** | **run_eval.py trigger detection** | *Issue (not PR)* — `claude -p` never triggers skills/commands during evaluation, yielding 0% trigger rate across all queries. Root cause for #1298, #1323, #1169. | 12 comments, 7 👍; multiple PRs attempting fixes | **Open** |
| **[#1367](https://github.com/anthropics/skills/pull/1367)** | **self-audit** | Mechanical file verification + four-dimension reasoning quality gate (v1.3.0). Universal — works with any project, stack, model. Step 0 verifies claimed output files exist; Steps 1–4 audit reasoning in damage-severity order. | Novel meta-skill for output quality assurance; recent activity (updated 2026-07-02) | **Open** |
| **[#514](https://github.com/anthropics/skills/pull/514)** | **document-typography** | Typographic quality control for AI-generated documents: prevents orphan/widow lines, numbering misalignment, header stranding. Triggers on any document generation. | Addresses universal pain point in AI doc output; 9-day discussion window | **Open** |
| **[#723](https://github.com/anthropics/skills/pull/723)** | **testing-patterns** | Comprehensive testing skill: Testing Trophy philosophy, AAA pattern, React Testing Library, contract testing, E2E, property-based, mutation testing, CI integration. | Full-stack testing coverage; 30-day discussion | **Open** |
| **[#1302](https://github.com/anthropics/skills/pull/1302)** | **color-expert** | Self-contained color expertise: naming systems (ISCC-NBS, Munsell, XKCD, RAL), color spaces (OKLCH, OKLAB, CAM16), accessibility (WCAG, APCA), gamut mapping, color harmony algorithms. | Niche but deep domain skill; 41-day discussion | **Open** |
| **[#486](https://github.com/anthropics/skills/pull/486)** | **odt** | OpenDocument (.odt, .ods) creation, template filling, parsing to HTML. Triggers on ODT/ODS/ODF/LibreOffice mentions. | Open-standard document format support; 105-day discussion | **Open** |
| **[#525](https://github.com/anthropics/skills/pull/525)** | **pyxel** | Retro/pixel-art/8-bit game development via Pyxel MCP server. Workflow: write → run_and_capture → inspect → iterate. | Game dev niche; longest-running open PR (136 days) | **Open** |

> **Note**: All top PRs show `Comments: undefined` in the raw data. Ranking weighted by: related issue comment counts, discussion duration, cross-references, and ecosystem impact.

---

## 2. Community Demand Trends (From Issues)

| Rank | Demand Signal | Evidence | Implication |
|------|---------------|----------|-------------|
| **1** | **Skill distribution & trust model** | [#492](https://github.com/anthropics/skills/issues/492) (43 comments, 2 👍): Community skills distributed under `anthropic/` namespace — trust boundary abuse risk | **Critical infrastructure need**: Namespace isolation, verification, signing |
| **2** | **Org-wide skill sharing** | [#228](https://github.com/anthropics/skills/issues/228) (16 comments, 8 👍): No native sharing; manual .skill file transfer via Slack/Teams | **Product gap**: Shared skill library, direct sharing links, team workspaces |
| **3** | **Evaluation pipeline reliability** | [#556](https://github.com/anthropics/skills/issues/556) (12 comments, 7 👍) + [#1169](https://github.com/anthropics/skills/issues/1169) (3 comments): `run_eval.py` 0% recall blocks skill optimization | **Developer experience**: Core toolchain broken on Windows & Unix |
| **4** | **Windows compatibility** | [#1061](https://github.com/anthropics/skills/issues/1061) (3 comments, 2 👍) + PRs #1099, #1050, #1298: PATHEXT, cp1252, select-on-pipes bugs | **Platform parity**: Windows is second-class for skill development |
| **5** | **Duplicate skill installation** | [#189](https://github.com/anthropics/skills/issues/189) (6 comments, 9 👍): `document-skills` + `example-skills` install identical content | **Packaging hygiene**: Plugin deduplication, clearer boundaries |
| **6** | **Context window explosion** | [#1487](https://github.com/anthropics/skills/issues/1487) (4 comments): `claude-api` skill injects ~156k tokens in one call | **Performance**: Token budget management, lazy loading |
| **7** | **Bedrock / enterprise deployment** | [#29](https://github.com/anthropics/skills/issues/29) (4 comments): Skills on AWS Bedrock | **Cloud integration**: Non-Anthropic model provider support |
| **8** | **MCP exposure** | [#16](https://github.com/anthropics/skills/issues/16) (4 comments): Expose skills as MCPs for API standardization | **Interoperability**: Skills → MCP servers for external consumption |

---

## 3. High-Potential Pending Skills (Active PRs, Not Merged)

| PR | Skill | Why It May Land Soon |
|----|-------|---------------------|
| **[#1479](https://github.com/anthropics/skills/pull/1479)** | **plan-file-hygiene** | Addresses tracked issue [#1417](https://github.com/anthropics/skills/issues/1417); solves planning artifact accumulation with lifecycle management; recent (created 2026-07-25) |
| **[#1367](https://github.com/anthropics/skills/pull/1367)** | **self-audit** | Meta-skill for quality gates; mechanical + reasoning audit; universal applicability; active iteration (v1.3.0) |
| **[#1298](https://github.com/anthropics/skills/pull/1298)** | **skill-creator eval fixes** | Unblocks entire skill optimization pipeline; 10+ reproductions; multiple contributors converging |
| **[#514](https://github.com/anthropics/skills/pull/514)** | **document-typography** | Universal need (every AI-generated doc); well-scoped; clear trigger definition |
| **[#723](https://github.com/anthropics/skills/pull/723)** | **testing-patterns** | Comprehensive, well-structured; covers modern testing stack; high utility for dev teams |
| **[#1302](https://github.com/anthropics/skills/pull/1302)** | **color-expert** | Deep domain coverage; self-contained; no external deps; design-system relevant |
| **[#83](https://github.com/anthropics/skills/pull/83)** | **skill-quality-analyzer / skill-security-analyzer** | Meta-skills for skill development itself; 5-dimension quality rubric; security scanning |
| **[#210](https://github.com/anthropics/skills/pull/210)** | **frontend-design (improved)** | Clarity/actionability overhaul; addresses skill usability guidelines; long discussion (62 days) |

---

## 4. Skills Ecosystem Insight

> **The community's most concentrated demand is fixing the skill development toolchain itself — particularly the broken evaluation pipeline (`run_eval.py` 0% recall) and Windows compatibility — while simultaneously demanding trust-safe distribution (namespace isolation) and org-level sharing primitives to make skills viable for team adoption.**

---

## Quick Reference Links

| Category | Links |
|----------|-------|
| **Core Toolchain Fixes** | [#1298](https://github.com/anthropics/skills/pull/1298) · [#1323](https://github.com/anthropics/skills/pull/1323) · [#1099](https://github.com/anthropics/skills/pull/1099) · [#1050](https://github.com/anthropics/skills/pull/1050) |
| **Trust & Distribution** | [#492](https://github.com/anthropics/skills/issues/492) · [#228](https://github.com/anthropics/skills/issues/228) · [#189](https://github.com/anthropics/skills/issues/189) |
| **New Skill Proposals** | [#514](https://github.com/anthropics/skills/pull/514) · [#723](https://github.com/anthropics/skills/pull/723) · [#1302](https://github.com/anthropics/skills/pull/1302) · [#486](https://github.com/anthropics/skills/pull/486) |
| **Meta-Skills** | [#1367](https://github.com/anthropics/skills/pull/1367) · [#83](https://github.com/anthropics/skills/pull/83) · [#1479](https://github.com/anthropics/skills/pull/1479) |

--- 

*Report generated from github.com/anthropics/skills PR/Issue data (2026-07-31 snapshot). Comment counts reflect GitHub UI at time of collection; "undefined" in PR data indicates API limitation, not zero activity.*

---

# Claude Code Community Digest — 2026-07-31

## 1. Today's Highlights
No new releases shipped today. The community spotlight falls on **long-standing core reliability issues** gaining renewed traction: the hook system remains broken for many (Issue #6305, 38 comments), auto-updates have caused data loss (#43719), and sub-agent runaway billing consumed 750k+ tokens after a `TaskStop` (#82104). Meanwhile, the #1 community request—**multi-account switching on mobile** (#36151)—sits at 530 👍 with 148 comments, still unaddressed since March.

## 2. Releases
*No releases published in the last 24 hours.*

## 3. Hot Issues (Top 10 by Impact & Community Signal)

| Issue | Title | Why It Matters | Community Signal |
|-------|-------|----------------|------------------|
| [#36151](https://github.com/anthropics/claude-code/issues/36151) | **Multi-account switching in Claude Mobile app** | Top-voted feature request (530 👍); blocks users with personal + work accounts from seamless mobile use. Open since Mar 2026. | 148 comments, 530 👍 |
| [#6305](https://github.com/anthropics/claude-code/issues/6305) | **Post/PreToolUse Hooks Not Executing** | Core extensibility mechanism broken on macOS; prevents custom workflows, linting, audit trails. Has repro. | 38 comments, 16 👍 |
| [#43719](https://github.com/anthropics/claude-code/issues/43719) | **Auto-update wiped Cowork session disk — data loss** | Silent auto-update destroyed local project state; no recovery path. Critical trust/reliability issue. | 5 comments, 2 👍 |
| [#82104](https://github.com/anthropics/claude-code/issues/82104) | **TaskStop does not stop subagent children** | Runaway sub-agents billed 750k tokens after parent kill; no visibility, no cap, no stop control. | 2 comments |
| [#59854](https://github.com/anthropics/claude-code/issues/59854) | **Cowork GitHub connector unusable** | OAuth DCR unsupported, misleading UI, dead Disconnect button—blocks team collaboration via GitHub. | 5 comments, 12 👍 |
| [#72377](https://github.com/anthropics/claude-code/issues/72377) | **Cowork regression: KERNEL_MODE_HEAP_CORRUPTION (BSOD) on Windows** | Driver-level crash (`storvsp.sys`) triggered by Cowork since build 1.15962.0; unfixed in .1. High-severity regression. | 1 comment |
| [#78834](https://github.com/anthropics/claude-code/issues/78834) | **Bundled ugrep allocates 4–17 GB on trivial search** | Regex `.{N}` pattern triggers 230 MB/s allocation in bundled grep; OOM risk on Linux/WSL2. Has repro. | 3 comments |
| [#77549](https://github.com/anthropics/claude-code/issues/77549) | **`AskUserQuestion` breaks after web/async session resume** | Permission prompts either abort instantly or require 2–7 answers to register; breaks human-in-the-loop flows. | 1 comment, 1 👍 |
| [#82408](https://github.com/anthropics/claude-code/issues/82408) | **Stale "auto-update failed" status misleads; `claude doctor` silent** | Failed background updates show remediation text that `claude doctor` doesn’t surface; users stuck in false-error state. | 4 comments, 1 👍 |
| [#79217](https://github.com/anthropics/claude-code/issues/79217) | **Make auto-memory MEMORY.md index limit (200 lines/25KB) configurable** | Hardcoded cap forces context truncation for large projects; simple config flag would unblock power users. | 2 comments, 1 👍 |

## 4. Key PR Progress
Only **one PR** updated in the last 24h:
- [#82555](https://github.com/anthropics/claude-code/pull/82555) — *Closed* — “Claude/youtube instagram mcp yn2u6s” — appears to be a low-signal/noise PR (no description, 0 👍). **No substantive feature or fix PRs in flight today.**

## 5. Feature Request Trends
From the issue landscape, developers are coalescing around four themes:

1. **Multi-tenancy & Account Management** — Mobile multi-account (#36151), enterprise gateway IP allowlisting (#82762), unified approval panels across worktrees (#82764).
2. **Granular Resource Control** — Configurable memory index limits (#79217), autocompact overrides (#82761), sub-agent model defaults (#78217), token/billing caps on background agents (#82104).
3. **Cross-Platform Session Continuity** — Cowork sync repair (#81658, #59854), iOS auto-archive fix (#71616), web/async resume reliability (#77549).
4. **Observability & Debuggability** — Hook execution visibility (#6305), auto-update failure transparency (#82408), LaTeX rendering in VS Code (#82758), non-English prompt support (#82763).

## 6. Developer Pain Points (Recurring Frustrations)

| Pain Point | Evidence | Impact |
|------------|----------|--------|
| **Auto-update instability** | Data loss (#43719), misleading status (#82408), Windows BSOD regression (#72377) | Erodes trust; users disable updates → security/compat risk |
| **Sub-agent runaway billing** | `TaskStop` doesn’t kill children (#82104), no live usage visibility, no spend caps | Unbounded cost exposure; 750k tokens in one incident |
| **Hook system unreliable** | Pre/PostToolUse hooks silently skipped (#6305, macOS) | Breaks CI gates, auto-formatters, audit logging, custom toolchains |
| **Cowork collaboration broken** | GitHub OAuth broken (#59854), cross-platform sync loss (#81658), Windows kernel crash (#72377) | Teams cannot rely on shared sessions; blocks adoption |
| **Mobile/web parity gaps** | Auto-archive on iOS (#71616), no multi-account (#36151), AskUserQuestion broken on web resume (#77549) | Mobile is a second-class citizen; workflows don’t transfer |
| **Windows-specific regressions** | HCS services missing (#80584), BSOD in `storvsp` (#72377), scheduler ghost fires (#74055) | Windows developers hit platform-blockers disproportionately |
| **Memory/context opacity** | Hardcoded MEMORY.md cap (#79217), ugrep OOM (#78834), `/claude-api` context spike (#63566) | No knobs to tune context window; surprises at scale |

---

*Digest generated from GitHub data (anthropics/claude-code) for 2026-07-31. Issues/PRs filtered to last 24h updates.*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-07-31

## 1. Today's Highlights
- **Windows stability crisis deepens**: Multiple critical issues report BSODs linked to SysmonDrv reinstallation (#31035), 185GB memory leaks in PowerShell AST parser (#29317), and corrupted workspace bundles halting shell execution (#35803).
- **Rate-limit transparency remains a top demand**: Pro users report missing 5-hour usage buckets (#32707), while Plus users protest unfair GPT-SOL 5.6 limits (#36213); CLI status line still lacks reset-time exposure (#24080).
- **Multi-agent V2 regressions surface**: gpt-5.6-luna incorrectly marked as V1 causing spawn_agent rejection (#35097), and evicted subagents resume with parent model settings (#34821).

---

## 2. Releases
*No new releases in the last 24 hours.*

---

## 3. Hot Issues (Top 10 by Impact & Community Signal)

| # | Issue | Why It Matters | Community Reaction |
|---|-------|----------------|-------------------|
| [#31035](https://github.com/openai/codex/issues/31035) | **Windows: SysmonDrv v13.22 reinstall triggers BSODs** | Codex Desktop forcibly reinstalls Sysinternals Sysmon driver after uninstall; WinDbg confirms `SysmonDrv.sys` as crash source. Blocks Windows users entirely. | 22 comments, active investigation; users forced to disable Codex on Windows |
| [#26478](https://github.com/openai/codex/issues/26478) | **Windows spellcheck: "No Guesses Found" despite detections** | Spellcheck UI detects errors but provides zero suggestions; works in Notepad. Persistent for 2+ months. | 18 comments, 25 👍 — high visibility, low fix velocity |
| [#35420](https://github.com/openai/codex/issues/35420) | **OneDrive-backed workspaces cause stream disconnects** | ChatGPT Work/Codex fails repeatedly when OneDrive degraded; breaks cloud-synced workflows. | 17 comments; affects enterprise/remote devs heavily |
| [#32177](https://github.com/openai/codex/issues/32177) | **Text-log attachment triggers "Request blocked", poisons session** | Attaching plain logs causes safety false-positive; subsequent turns fail. macOS, ChatGPT Team. | 12 comments, 11 👍 — session corruption risk |
| [#13200](https://github.com/openai/codex/issues/13200) | **MCP login fails for Slack: "Dynamic client registration not supported"** | Enterprise OAuth flow broken for official Slack MCP; blocks connector adoption. | 10 comments, **58 👍** — highest community signal in dataset |
| [#32707](https://github.com/openai/codex/issues/32707) | **Pro: 5-hour usage bucket vanished from App & API** | Rate-limit UI and `account/rateLimits/read` missing critical bucket; users blind to quota. | 8 comments, 3 👍; Pro-tier visibility gap |
| [#26930](https://github.com/openai/codex/issues/26930) | **Reasoning level resets to "low" after delegations/continuations** | xhigh/high reasoning silently downgraded mid-thread; breaks complex task continuity. | 8 comments, 1 👍; silent regression |
| [#23257](https://github.com/openai/codex/issues/23257) | **Desktop compaction embeds full image base64 in checkpoints** | Storage amplification: each compaction duplicates full image payloads; disk growth unbounded. | 8 comments, 5 👍; performance + cost impact |
| [#31754](https://github.com/openai/codex/issues/31754) | **CLI 0.143.0 regression: "Unknown parameter: input[...].namespace"** | Existing conversations fail to resume; 0.142.0 works. Blocks CLI users on current version. | 7 comments, 3 👍; release-blocking regression |
| [#34306](https://github.com/openai/codex/issues/34306) | **CLI safety false-positive: "extra caution with cybersecurity requests"** | Legitimate coding tasks blocked by overzealous filter; gpt-5.6-sol-xhigh. | 7 comments, 5 👍; productivity blocker |

---

## 4. Key PR Progress (Top 10 by Technical Significance)

| # | PR | Summary | Category |
|---|----|---------|----------|
| [#31817](https://github.com/openai/codex/pull/31817) | **Automated models.json update** | Model registry refresh (likely gpt-5.6-sol variants) | Maintenance |
| [#31458](https://github.com/openai/codex/pull/31458) | **exec-server: route remote network policy decisions** | Proxy policy misses routed to core Guardian decider; fail-closed on disconnect | Security / Sandbox |
| [#31922](https://github.com/openai/codex/pull/31922) | **core: add tool-free thread mode** | Opt-in lightweight threads skip MCP/skill/tool startup; for title generation, etc. | Performance |
| [#31471](https://github.com/openai/codex/pull/31471) | **[faster-connectors] Extract apps cache into ConnectorRuntimeManager** | Immutable snapshot caching scoped by account/workspace; stale-context discard | Connectors / Perf |
| [#31591](https://github.com/openai/codex/pull/31591) | **Enable parallel tool calls for Codex Apps** | Feature-flagged parallel `tools/call` for host-owned MCP server | Connectors / Perf |
| [#31472](https://github.com/openai/codex/pull/31472) | **codex-mcp: serialize connector runtime refreshes** | Per-context async lock prevents duplicate `tools/list` storms | Connectors / Reliability |
| [#36237](https://github.com/openai/codex/pull/36237) | **Ignore symbolic slash-tmp permissions on Windows** | Fixes Windows sandbox policy incorrectly evaluating Unix `/tmp` entry | Windows / Sandbox |
| [#36228](https://github.com/openai/codex/pull/36228) | **Support Enterprise automation account plans** | Recognizes `enterprise_cbp_automation` plan type across auth, backend, app-server | Enterprise |
| [#36218](https://github.com/openai/codex/pull/36218) | **Expose connector candidates in external agent detection** | Adds `connectors[]` with name, session count, detection source to detection response | Connectors / API |
| [#36217](https://github.com/openai/codex/pull/36217) | **Run code mode exclusively through standalone host** | Moves V8 runtime to dedicated `codex-code-mode-host` crate; removes embedded fallback | Architecture / Code Mode |

---

## 5. Feature Request Trends (Distilled from Issues)

1. **Rate-limit observability** — Reset timestamps, balance, plan type as status-line tokens (#24080); per-bucket visibility in App (#32707); tier-specific limit adjustments (#36213).
2. **Multi-agent V2 maturity** — Correct model capability tagging (#35097), subagent state preservation on eviction (#34821), delegation reasoning-level persistence (#26930).
3. **Cross-device workspace continuity** — Seamless session handoff between machines with full context (#34804); model/reasoning recommendations in ChatGPT→Codex handoffs (#36251).
4. **Windows parity & stability** — Spellcheck suggestions (#26478), OneDrive resilience (#35420), sandbox filesystem fixes (#35864), MSIX integrity (#35681).
5. **Session storage efficiency** — Delta-only fork storage (#35647), compaction without base64 image duplication (#23257), malformed rollout resilience (#36188).

---

## 6. Developer Pain Points (Recurring Frustrations)

| Pain Point | Evidence | Frequency |
|------------|----------|-----------|
| **Windows instability** | BSODs (#31035), 185GB leaks (#29317), corrupted bundles (#35803), MSIX corruption (#35681), spellcheck broken (#26478), OneDrive disconnects (#35420) | 6+ critical issues |
| **Rate-limit opacity** | Missing buckets (#32707), no reset times in CLI (#24080), tier inequality protests (#36213), silent downgrades (#26930) | 4+ high-engagement issues |
| **Session corruption / loss** | Attachment poisoning (#32177), fork storage amplification (#35647), compaction bloat (#23257), resume regression (#31754), 400 errors mid-session (#33011) | 5+ data-integrity issues |
| **MCP / Connector friction** | Slack OAuth broken (#13200, 58 👍), Chrome backend missing (#27962), parallel calls disabled by default (#31591), refresh storms (#31472) | 4+ integration blockers |
| **Safety false-positives** | Cybersecurity filter blocking legit code (#34306), request blocked on log attach (#32177) | 2+ productivity killers |

---

*Digest generated from github.com/openai/codex data as of 2026-07-31. Links point to live GitHub items.*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-07-31

## 1. Today's Highlights
No new release shipped in the last 24 hours. The team is actively triaging a critical **SSRF vulnerability (CVSS 8.6)** in the `web-fetch` tool (#28555) while merging a batch of stability fixes: Docker base images upgraded to Node 22/24, MCP OAuth refresh repaired, and context-window auto-compression landed behind a flag. Subagent reliability (hangs, turn-limit misreporting, skill adoption) and Auto Memory quality remain the top open investigation areas.

## 2. Releases
*None in the last 24 hours.*

## 3. Hot Issues (Top 10 by Impact & Discussion)

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| **#28555** | **[Security] SSRF via DNS Resolution Bypass in `web-fetch`** (CVSS 8.6) | `isPrivateIp()` checks synchronous IPs only; attackers can bypass with domains resolving to private IPs. | 🔒 Maintainer-only, fresh (created 2026-07-28), 1 comment — urgent triage. |
| **#22323** | Subagent (`codebase_investigator`) reports `GOAL` success after hitting `MAX_TURNS` | Masks real failures; users think task completed when it was cut off. | 12 comments, 👍2, `status/need-retesting` — fix validation pending. |
| **#21409** | Generalist agent hangs indefinitely on simple tasks (folder creation, etc.) | Blocks core workflows; workaround is disabling subagents entirely. | 8 comments, 👍8 — high user pain. |
| **#25166** | Shell execution UI stuck on “Waiting input” after command completes | False “awaiting” state confuses users and stalls agent loops. | 4 comments, 👍3, `effort/medium`. |
| **#26522** | Auto Memory retries low-signal sessions forever | Wastes background cycles; no back-off or quarantine for noise. | 5 comments, `priority/p2`. |
| **#26525** | Auto Memory redacts secrets *after* sending to model; logs skills | Secrets briefly in model context; skill data leaked in logs. | 4 comments, `area/security`. |
| **#21983** | Browser subagent fails on Wayland | Blocks Linux/Wayland users from browser automation. | 4 comments, 👍1, `agent/browser`. |
| **#24246** | 400 error when >128 tools registered (observed at 400+) | Tool explosion from MCP/skills breaks model calls. | 3 comments, `priority/p2`. |
| **#22093** | Subagents auto-spawn despite `agents: disabled` in config (since v0.33.0) | Config ignored; unexpected agent behavior. | 3 comments, `status/need-retesting`. |
| **#22745** | EPIC: Assess AST-aware file reads/search/mapping for precision | Long-term investment: could cut turns & token noise significantly. | 7 comments, 👍1, tracking multiple spikes. |

## 4. Key PR Progress (Top 10 by Impact)

| # | PR | Summary | Status |
|---|----|---------|--------|
| **#28566** | `fix(core,cli): propagate InvalidStreamError details to UI` | Surfaces actionable guidance (e.g., “run `/compress`”) on empty responses. | Open |
| **#28581** | `fix(cli): skip diff hunk markers during @ processing` | Stops recursive glob searches on diff markers; prevents heap growth. | Open |
| **#28603** | `fix(docker): upgrade sandbox Dockerfile to Node 22` | Node 20 EOL (2026-04-30); sandbox runs model-directed commands. | Open |
| **#28602** | `chore(docker): update base image to node:24-slim` | Modernizes builder/runtime images; fixes copy step. | Open |
| **#28481** | `fix(core): refresh MCP OAuth tokens with stored client ID` | Fixes re-auth loop on dynamic client registration. | Open |
| **#28599** | `fix(core): classify capacity exhaustion as terminal` | Stops retry hangs on `MODEL_CAPACITY_EXHAUSTED` (429) for preview models. | **Closed** |
| **#28551** | `fix(cli): fall back to embedded macOS seatbelt profiles` | Resolves sandbox startup crash when `.sb` profiles missing. | Open |
| **#28596** | `feat(cli): add --list-all-sessions` | Lists sessions across all workspaces, grouped by path. | Open |
| **#28597** | `fix(cli): load env vars before resolving settings placeholders` | Fixes race where `.env` values unavailable during settings parse. | Open |
| **#28485** | `fix(cli): add gemini-3.5-flash to model selector for all users` | Unblocks model selection for users on v0.51.0+. | Open |
| **#28488** | `feat(cli): auto-compress chat history on context overflow` | New `model.autoCompressOnOverflow` setting; cancels submit, compresses, retries. | Open |

## 5. Feature Request Trends
1. **Subagent Observability & Control** — Shareable trajectories (`/chat share` #22598), config respect (#22093), settings propagation (#22267), bug-report context (#21763).
2. **Auto Memory Hardening** — Quarantine invalid patches (#26523), deterministic redaction (#26525), back-off on low-signal (#26522), quality dashboard (#26516).
3. **AST-Aware Tooling** — Precision reads, symbol search, codebase mapping to reduce turns/tokens (#22745, #22746).
4. **Model/Context Management** — Auto-compress on overflow (#28488), better model selector (#28485), capacity-exhaustion handling (#28599).
5. **Browser Agent Resilience** — Session takeover, lock recovery, Wayland support, config overrides (#22232, #21983, #22267).

## 6. Developer Pain Points (Recurring Frustrations)
- **Silent Subagent Failures** — Agents report success when cut by turn limits (#22323) or hang without logs (#21409).
- **Config Ignored** — `agents: disabled` overridden (#22093), browser `maxTurns` ignored (#22267), symlinked agents not loaded (#20079).
- **Shell/Terminal UX** — “Waiting input” ghost state (#25166), interactive prompts stall agent (#22465), resize flicker (#21924).
- **Tool/Context Explosion** — 400-tool limit hits hard (#24246); model creates scattered temp scripts (#23571).
- **Auto Memory Noise** — Infinite retries, secret leakage risk, unquarantined bad patches (#26522, #26523, #26525).
- **Security Surface** — SSRF in `web-fetch` (#28555), supply-chain PoC in CI (#28594), EOL runtimes in sandbox (#28603).

---

*Data sourced from `google-gemini/gemini-cli` GitHub activity (issues/PRs updated 2026-07-31). Links point to live GitHub entries.*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

⚠️ Summary generation failed.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-07-31

## Today's Highlights
No new releases in the last 24 hours. The community is actively discussing a long-standing feature request for a persistent **Memory System** (#1283, 7 comments), while two fresh bug reports highlight service instability: an LLM **429 overload error** blocking all usage (#2571) and a **CLI freeze** correlated with browser tab state on Windows (#2570). A critical hook-engine fix (#2565) addresses a race condition where fire-and-forget async tasks were garbage-collected before completion.

---

## Releases
*No new releases published in the last 24 hours.*

---

## Hot Issues (3 total in last 24h)

| # | Title | Type | Why It Matters | Community Signal |
|---|-------|------|----------------|------------------|
| [#1283](https://github.com/MoonshotAI/kimi-cli/issues/1283) | **Memory System – Persistent context across sessions** | Enhancement | Top-voted feature request (open since Feb). Enables cross-session project awareness, user preferences, and AI-managed notes—critical for real-world workflow continuity. | 7 comments, ongoing design discussion; no 👍 count shown but sustained engagement over 5 months. |
| [#2571](https://github.com/MoonshotAI/kimi-cli/issues/2571) | **LLM Overloaded! 429 error – Can't use Kimi at all** | Bug (v1.49.0, Moderato, Kimi K3, macOS Tahoe) | Hard service outage: 429 responses from provider block all CLI usage. Affects paying subscribers on latest model. | 1 comment, just filed; high urgency for production users. |
| [#2570](https://github.com/MoonshotAI/kimi-cli/issues/2570) | **CLI intermittently freezes with spinning moon; correlated with browser tab state** | Bug (v0.29.2, KIMI Login, KIMI K3 HIGH, Windows 11) | UI-thread or event-loop stall tied to browser-process lifecycle. Reproducible on Windows; impacts interactive sessions. | 0 comments, fresh report; needs triage for root cause (likely Electron/pty interaction). |

---

## Key PR Progress (1 total in last 24h)

| # | Title | Author | Status | Impact |
|---|-------|--------|--------|--------|
| [#2565](https://github.com/MoonshotAI/kimi-cli/pull/2565) | **fix(hooks): keep a strong reference to fire-and-forget hook triggers** | LHMQ878 | Open (updated 2026-07-30) | Fixes #2564. Prevents `asyncio` WeakSet from dropping in-flight hook tasks before they resolve, eliminating silent hook failures. Critical for reliability of tool-call callbacks and integrations. |

---

## Feature Request Trends
From the available issue data, the dominant community ask is **stateful, cross-session intelligence**:
- **Persistent memory** (auto + manual) for project patterns, conventions, and user preferences (#1283).
- Implied need for **offline/local-first operation** to avoid provider rate-limits/outages (#2571).
- **Stability on Windows** (electron/pty integration) surfacing as a platform gap (#2570).

---

## Developer Pain Points
1. **Provider reliability** – 429 overload errors render the CLI unusable for paid tiers; no fallback or local-model path evident.
2. **Session amnesia** – Every session starts from zero; users manually re-inject context (memory system request).
3. **Windows instability** – CLI freezes linked to browser tab state suggest fragile subprocess/PTY handling on non-macOS platforms.
4. **Silent hook failures** – Fire-and-forget async tasks GC’d mid-execution (#2564/#2565), breaking custom tooling silently.

---

*Data sourced from `github.com/MoonshotAI/kimi-cli` (issues & PRs updated 2026-07-30 → 2026-07-31).*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-07-31

## Today's Highlights
OpenCode v1.18.10 ships with automatic Modal model discovery and a polished Desktop experience (better toasts, tab interactions, duplicate-attachment guard). The issue tracker is dominated by provider connectivity problems—especially **Sol/GPT-5.6 overload errors** (16 comments) and **Ollama/Zen/Go integration friction**—while the PR queue shows heavy investment in TUI workflow refinements (session picker, tabs, hot-reload) and a new plugin hook for request interception.

---

## Releases
### v1.18.10
- **Core**: Automatic discovery of available Modal models (@devennavani)
- **Desktop**: Prevent duplicate attachments; always-visible new-session button; improved toast stacking/dismissal/mobile layout; refined tab hover/active states

---

## Hot Issues (Top 10 by Engagement)

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#39653](https://github.com/anomalyco/opencode/issues/39653) | **GPT-5.6 Sol: server overloaded errors** | Highest-comment issue today; blocks paid-tier users on a flagship model while Pi/Codex work fine. | 16 comments, 10 👍 — urgent for Go/Zen subscribers |
| [#37762](https://github.com/anomalyco/opencode/issues/37762) | **Ollama integration problems on Windows** | Users hitting resource/config walls with local models; 64 GB RAM / 4 GB VRAM suggests non-trivial setups. | 8 comments — recurring local-provider pain point |
| [#39288](https://github.com/anomalyco/opencode/issues/39288) | **AutoScroller plugin dependency error post-upgrade** | Breaks Desktop main screen on 1.18.8+; plugin load-order regression. | 6 comments, 1 👍 — upgrade blocker |
| [#38655](https://github.com/anomalyco/opencode/issues/38655) | **Cannot switch Plan ↔ Build mode** | Core workflow broken; Build mode stuck as default after update. | 5 comments — UX regression |
| [#37628](https://github.com/anomalyco/opencode/issues/37628) | **Windows 16-bit compatibility error on global install** | `opencode.exe` flagged as incompatible on Node 26.5.0; blocks CLI adoption on Windows. | 5 comments — installer/packaging issue |
| [#39491](https://github.com/anomalyco/opencode/issues/39491) | **Plan mode writes files via bash** | Safety bypass: model ignores write-tool restriction and uses `cat >` heredocs. | 4 comments — security/control concern |
| [#27837](https://github.com/anomalyco/opencode/issues/27837) | **Web UI session list empty in `--web` mode** | Long-standing (May); SSE-driven frontend fails to hydrate despite correct API data. | 4 comments, 2 👍 — web-mode reliability |
| [#39655](https://github.com/anomalyco/opencode/issues/39655) | **Web shows “No folders found” despite valid API response** | Frontend rendering mismatch; projects returned but not displayed. | 4 comments — new web regression |
| [#39771](https://github.com/anomalyco/opencode/issues/39771) | **Fast failure on network errors & concise errors** | 60–120s timeouts on flaky networks (China/GitHub HTTPS); no fallback. | 3 comments — resilience gap |
| [#39790](https://github.com/anomalyco/opencode/issues/39790) | **Session retries fixed-window quota errors until reset** | Retries 429s that *cannot* succeed before quota window resets; wastes cycles. | 1 comment (filed today) — retry policy flaw |

---

## Key PR Progress (Top 10 by Impact)

| # | PR | Type | Summary |
|---|----|------|---------|
| [#39787](https://github.com/anomalyco/opencode/pull/39787) | fix(core) | Map xAI native options (reasoning effort, storage, prompt cache key, include) with validation; omit unsupported keys. |
| [#39764](https://github.com/anomalyco/opencode/pull/39764) | feat(plugin) | Add `session.request` hook on Effect/Promise boundaries — plugins can mutate final LLM URLs, headers, bodies post-serialization. |
| [#27554](https://github.com/anomalyco/opencode/pull/27554) | feat(core) | **Local LAN provider discovery + auto-model discovery** via mDNS/UPnP; closes #6231, #27553. |
| [#39788](https://github.com/anomalyco/opencode/pull/39788) | fix(github) | Honor `GITHUB_ENTERPRISE_URL` / `GITHUB_GRAPHQL_URL` for GHES; fixes Actions clients ignoring enterprise endpoints. |
| [#39767](https://github.com/anomalyco/opencode/pull/39767) | fix(app) | **Prevent stale session tab reads** — fixes “Stale read from `<Show>`” crashes when switching/closing sessions (closes #39704, #39766). |
| [#39776](https://github.com/anomalyco/opencode/pull/39776) | feat(tui) | **Hot-reload local TUI plugins** — edits apply without restart; crashes contained to plugin (closes #39777). |
| [#39783](https://github.com/anomalyco/opencode/pull/39783) | fix(tui) | Default tabs to **global scope** (single tab set); per-directory opt-in via settings. |
| [#39752](https://github.com/anomalyco/opencode/pull/39752) | feat(tui) | Add **Open menu (Ctrl+O)** — unified session/project jump dialog; fixes all-projects toggle persistence. |
| [#39747](https://github.com/anomalyco/opencode/pull/39747) | feat(session) | **Optional generated titles** — sessions stay `NULL`-titled until auto-generation succeeds or user renames. |
| [#39781](https://github.com/anomalyco/opencode/pull/39781) | feat(app) | **Select base branch for new workspaces** — `git worktree add` now accepts start point (closes #39778, #39779). |

---

## Feature Request Trends
1. **Provider-agnostic local/LAN discovery** — #27554 (PR), #37762 (Ollama), #37666 (NVIDIA), #29935 (LiteLLM proxy) all point to demand for unified local-model onboarding.
2. **Configuration clarity** — #39256 (camelCase vs snake_case for `variants`), #39787 (xAI option mapping) show friction in provider-specific schemas.
3. **Network resilience** — #39771 (fast failure/fallback), #39790 (quota-aware retry), #39316 (stuck LAN connections) demand smarter HTTP policies.
4. **Web/Desktop parity** — #27837, #39655, #38655, #39704 highlight gaps between CLI, Desktop, and Web UIs.
5. **Session/tab workflow polish** — TUI PRs (#39752, #39753, #39783, #39784) and Desktop fixes (#39767, #39770) reveal heavy investment in multi-session UX.

---

## Developer Pain Points
- **Provider reliability**: Sol overload, Zen/Go 401/429/Upstream errors, NVIDIA 429 mismatch, DeepSeek “giving up”, Gemini 3.6 flash failures — all within 24h.
- **Windows friction**: 16-bit binary error (#37628), Win+A keybinding reserved by OS (#38585), theme sync requiring restart (#38506).
- **Upgrade regressions**: Plugin dependency crashes (#39288), Plan/Build mode lock (#38655), stale-read crashes (#39704).
- **Session integrity**: SQLite `NOT NULL` on `seq` after `/model` switch (#39165), title generation failures (#39529 → #39748), quota retry loops (#39790).
- **Web-mode gaps**: Empty session list (#27837), phantom “No folders” (#39655) — API works, frontend doesn’t render.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-07-31

## 1. Today's Highlights
The Pi ecosystem is converging on three fronts: hardening the TUI against rendering regressions (Wayland clipboard, Windows input, flicker), expanding provider interoperability (Bedrock, Anthropic OAuth, Gemini tool-call IDs), and introducing a runtime-neutral session protocol with searchable session storage. A new `pi-client` package and `pi-protocol` wire format lay groundwork for remote/headless agent workflows.

## 2. Releases
No new releases in the last 24 hours.

## 3. Hot Issues (Top 10 by Impact & Discussion)

| Issue | Why It Matters | Community Signal |
|-------|----------------|------------------|
| [#6747](https://github.com/earendil-works/pi/issues/6747) **API for enhancing agent message markdown** (12 💬, closed) | Enables extensions to mutate message presentation (e.g., formula rendering) without altering LLM payload. | High engagement; PR [#7231](https://github.com/earendil-works/pi/pull/7231) merged. |
| [#5871](https://github.com/earendil-works/pi/issues/5871) **Anthropic OAuth-token detection hardcoded** (8 💬, closed) | Removes hardcoded `sk-ant-oat` check; providers can declare OAuth credentials explicitly. | Unblocks custom Anthropic-compatible gateways. |
| [#7194](https://github.com/earendil-works/pi/issues/7194) **Full re-render every 1s when tool card scrolls out of viewport** (7 💬, closed) | Major performance regression in remote sandbox scenarios; fixed by avoiding unnecessary transcript repaints. | Critical for PTY-forwarding use-cases. |
| [#7153](https://github.com/earendil-works/pi/issues/7153) **`/scoped-models` stalls ~5 min awaiting catalog refresh** (6 💬, open) | UX blocker: command shows no loading state while synchronously awaiting refresh. | Needs async/non-blocking catalog UX. |
| [#7161](https://github.com/earendil-works/pi/issues/7161) **anthropic-messages missing `x-client-request-id`** (6 💬, open) | Breaks session affinity in proxies that round-robin Claude accounts. | Directly impacts multi-account gateway setups. |
| [#6300](https://github.com/earendil-works/pi/issues/6300) **Windows: input line redrawn on every keystroke** (6 💬, open) | Each character appears on a new line in cmd.exe/Windows Terminal; renders Pi unusable on Windows. | High-severity platform bug. |
| [#5990](https://github.com/earendil-works/pi/issues/5990) **TUI flickers when dialog taller than viewport** (6 💬, closed) | Continuous repaint loop when confirm/select overflows terminal; fixed via layout guard. | Common friction point for small terminals. |
| [#7047](https://github.com/earendil-works/pi/issues/7047) **Gemini 3.x tool-call IDs stripped** (5 💬, open) | Function call/response IDs dropped in history replay, breaking multi-turn tool flows with Gemini 3.x. | Provider compatibility gap. |
| [#7301](https://github.com/earendil-works/pi/issues/7301) **Stalled availability refresh permanently unrecoverable** (2 💬, open) | `ModelRuntime` chains `forceRefreshAvailability()` onto stuck promise; runtime never recovers. | Core resilience issue affecting all providers. |
| [#7248](https://github.com/earendil-works/pi/issues/7248) **Ctrl+V paste silently fails on Wayland** (4 💬, open) | `readClipboardText()` uses X11-only clipboard-rs; fixed in [#7261](https://github.com/earendil-works/pi/pull/7261) via `wl-paste`. | Linux Wayland adoption blocker. |

## 4. Key PR Progress (Top 10 by Significance)

| PR | Status | Summary |
|----|--------|---------|
| [#7348](https://github.com/earendil-works/pi/pull/7348) | Open | **feat(client): runtime-neutral session client** — New `@earendil-works/pi-client` package with discriminated-union connection lifecycle, typed requests, multi-session handles, detached listeners. Foundation for remote/headless agents. |
| [#7344](https://github.com/earendil-works/pi/pull/7344) | Closed | **feat(protocol): remote session wire protocol** — `@earendil-works/pi-protocol` with validated commands/events/snapshots, bounded CBOR encoding, length-prefixed framing. |
| [#7346](https://github.com/earendil-works/pi/pull/7346) | Closed | **feat(ai): share runtime schemas with protocol** — TypeBox schemas in `pi-ai`, reused in `pi-protocol`; aligns tool-call/stop-reason values. |
| [#6216](https://github.com/earendil-works/pi/pull/6216) | Open | **feat: Amazon Bedrock Mantle OpenAI Responses provider** — Adds Bedrock Mantle via OpenAI Node SDK; supersedes earlier attempt. |
| [#7148](https://github.com/earendil-works/pi/pull/7148) | Open | **feat(coding-agent): Experimental loadout management** — `/loadout` command to enable/disable extensions mid-session; overrides persisted in session. |
| [#7163](https://github.com/earendil-works/pi/pull/7163) | Open | **feat: search index sqlite** — `SessionRepo.search()` with FTS5 virtual table for SQLite; JSONL/memory fall back to in-memory scan. |
| [#7231](https://github.com/earendil-works/pi/pull/7231) | Closed | **Markdown API** — Implements [#6747](https://github.com/earendil-works/pi/issues/6747); extensions can mutate agent message markdown representation. |
| [#7011](https://github.com/earendil-works/pi/pull/7011) | Closed | **fix(coding-agent): share host modules with native ESM extensions** — Intercepts native imports so extensions reuse host’s Pi packages, preventing state divergence. |
| [#7261](https://github.com/earendil-works/pi/pull/7261) | Closed | **fix(coding-agent): read clipboard via `wl-paste` on Wayland** — Fixes [#7248](https://github.com/earendil-works/pi/issues/7248); prefers `wl-paste`/`xclip`/`xsel` over clipboard-rs. |
| [#7309](https://github.com/earendil-works/pi/pull/7309) | Closed | **fix(server): guard `JSON.parse` in RPC stdout handler** — Prevents stray log lines/deprecation warnings from crashing RPC child process handling. |

## 5. Feature Request Trends
1. **Extensible message rendering** — Markdown API ([#6747](https://github.com/earendil-works/pi/issues/6747)), developer message role ([#6534](https://github.com/earendil-works/pi/pull/6534)), and background/async responses ([#7339](https://github.com/earendil-works/pi/pull/7339)) point to richer, non-blocking agent output.
2. **Provider-agnostic configuration** — OAuth declaration ([#5871](https://github.com/earendil-works/pi/issues/5871)), Bedrock Mantle ([#6216](https://github.com/earendil-works/pi/pull/6216)), and request-ID headers ([#7161](https://github.com/earendil-works/pi/issues/7161)) show demand for gateway/proxy-friendly provider contracts.
3. **Session as a first-class resource** — Loadout management ([#7148](https://github.com/earendil-works/pi/pull/7148)), runtime-neutral client ([#7348](https://github.com/earendil-works/pi/pull/7348)), search index ([#7163](https://github.com/earendil-works/pi/pull/7163)), and shutdown lifecycle ([#7343](https://github.com/earendil-works/pi/pull/7343)) treat sessions as durable, queryable, migratable entities.
4. **ACP/remote agent integration** — [#7320](https://github.com/earendil-works/pi/issues/7320) requests ACP agents as stateful extension backends with invocation-scoped UI/permissions.

## 6. Developer Pain Points
- **TUI fragility on non-Linux/non-X11**: Windows input corruption ([#6300](https://github.com/earendil-works/pi/issues/6300)), Wayland clipboard silence ([#7248](https://github.com/earendil-works/pi/issues/7248)), flicker on overflow ([#5990](https://github.com/earendil-works/pi/issues/5990)), 1 Hz full repaint ([#7194](https://github.com/earendil-works/pi/issues/7194)).
- **Model catalog stalls cascade into UI hangs**: `/scoped-models` blocks 5 min ([#7153](https://github.com/earendil-works/pi/issues/7153)), `/login` hangs after key save ([#7027](https://github.com/earendil-works/pi/issues/7027)), availability refresh unrecoverable ([#7301](https://github.com/earendil-works/pi/issues/7301)).
- **Provider streaming quirks break tool loops**: Anthropic block parser drops initial content ([#7283](https://github.com/earendil-works/pi/issues/7283)), Gemini 3.x strips call IDs ([#7047](https://github.com/earendil-works/pi/issues/7047)), Fireworks instant timeouts ([#7315](https://github.com/earendil-works/pi/issues/7315)), OpenAI array content stringified ([#7061](https://github.com/earendil-works/pi/pull/7061)).
- **Extension/host module isolation**: JITI native ESM imports bypass aliasing, causing duplicate Pi package instances ([#7011](https://github.com/earendil-works/pi/pull/7011)).
- **Session affinity for proxied multi-account setups**: Missing `x-client-request-id` on Anthropic prevents conversation grouping ([#7161](https://github.com/earendil-works/pi/issues/7161)).

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-07-31

## Today's Highlights
The nightly `v0.21.1-nightly.20260731` ships CI hardening and web-shell tweaks. Meanwhile, the Anthropic content converter receives a concentrated bug-fix wave (5 issues + 1 PR) addressing tool-call ordering, ID sanitization, and orphan stripping — critical for multi-provider reliability. CI flakiness persists across permission-control and model-switching E2E suites, with three autofix PRs already in progress.

---

## Releases
**v0.21.1-nightly.20260731.702932cc7** — Nightly build  
- `fix(ci)`: Default bash shell for container jobs in qwen-triage (#7838)  
- `fix(web-shell)`: Partial notes (truncated in feed)  
[Release link](https://github.com/QwenLM/qwen-code/releases/tag/v0.21.1-nightly.20260731.702932cc7)

---

## Hot Issues (10 Noteworthy)

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#8124](https://github.com/QwenLM/qwen-code/issues/8124) | **Startup banner missing top lines on first paint (Windows, intermittent)** | Visual regression in TUI header; correlates with pending provider update — affects first-impression UX. | 9 comments, P2, `welcome-pr` |
| [#7966](https://github.com/QwenLM/qwen-code/issues/7966) | **How to list files created during a session?** | Gap in session introspection; users cannot distinguish workspace files by originating session. | 6 comments, Chinese dev ask |
| [#8136](https://github.com/QwenLM/qwen-code/issues/8136) | **Provider warning sanitizer truncates at port, leaks password with `@`** | Security bug: credential redaction logic fails on URLs containing ports or `@` in passwords. | 4 comments, P2, `category/security` |
| [#8162](https://github.com/QwenLM/qwen-code/issues/8162) | **Anthropic converter: stale thinking signatures not pruned after sibling tool_use removal** | History compaction leaves orphaned `thinking` blocks → malformed Anthropic payloads. | 4 comments, P2, `welcome-pr` |
| [#8138](https://github.com/QwenLM/qwen-code/issues/8138) | **Worktree settings.json writes to project root instead of worktree `.qwen`** | Breaks isolation model for git worktrees; settings leak across worktree boundaries. | 4 comments, P2, `welcome-pr` |
| [#8146](https://github.com/QwenLM/qwen-code/issues/8146) | **Desktop app fails to connect to LM Studio on Windows** | Blocks local-model workflow on Windows; no API traffic observed despite 5-min hang. | 4 comments, P2, `scope/windows` |
| [#8102](https://github.com/QwenLM/qwen-code/issues/8102) | **Proposal: deterministic tool-execution boundaries for trustworthy agent runtime** | Architectural RFC to move LLM outside trust boundary; high-design discussion. | 4 comments, P3, `need-discussion` |
| [#7972](https://github.com/QwenLM/qwen-code/issues/7972) | **v0.21.1 crashes 3× on Windows** | Regression report with Node 24.18; no stack yet — needs repro. | 4 comments, P2 |
| [#8172](https://github.com/QwenLM/qwen-code/issues/8172) | **Agent Team: teammate messages queue for entire long multi-tool turn** | Message delivery latency in multi-agent flows; blocks real-time coordination. | 3 comments, P2, fresh (created today) |
| [#8161](https://github.com/QwenLM/qwen-code/issues/8161) | **Anthropic converter: tool_result not guaranteed first in mixed-content user messages** | Spec violation: Anthropic requires `tool_result` blocks before text in user messages. | 3 comments, P2, `welcome-pr` |

---

## Key PR Progress (10 Important PRs)

| # | PR | Type | Summary |
|---|----|------|---------|
| [#8163](https://github.com/QwenLM/qwen-code/pull/8163) | **fix(anthropic)** | Bug fix | Stops stripping trailing `tool_use` without subsequent message; dedupes duplicate `tool_result` blocks. Fixes #8159. |
| [#8137](https://github.com/QwenLM/qwen-code/pull/8137) | **fix(cli)** | Security fix | Scopes credential stripping to URL authority only; deletes bespoke heuristics. Fixes #8136. |
| [#8176](https://github.com/QwenLM/qwen-code/pull/8176) | **feat(core)** | Telemetry | Normalizes tool-call terminal telemetry: unified contract, `unknown` for soft errors, derived `success` field. |
| [#8169](https://github.com/QwenLM/qwen-code/pull/8169) | **feat(core)** | New provider | Adds OpenAI Responses API content generator — expands provider ecosystem. |
| [#8171](https://github.com/QwenLM/qwen-code/pull/8171) | **feat(memory)** | Config | Adds `memory.agentMaxTurns` setting (default 8, 0 = unlimited) for dream/auto-skill agents. Fixes #8168. |
| [#8056](https://github.com/QwenLM/qwen-code/pull/8056) | **fix(serve)** | Architecture | Workspace-qualified memory ops (remember/forget/dream) via selected trusted workspace runtime; opt-in exact-workspace storage. |
| [#8032](https://github.com/QwenLM/qwen-code/pull/8032) | **feat(core)** | Safety | Optional in-process host guard for final tool invocation (receives call ID, tool name, params, abort signal). |
| [#8132](https://github.com/QwenLM/qwen-code/pull/8132) | **feat(desktop)** | Desktop | Packages Web Shell as release-ready Tauri app (replaces PoC); native lifecycle, workspace recovery, shared Web Shell. |
| [#7957](https://github.com/QwenLM/qwen-code/pull/7957) | **feat(cli)** | Windows UX | Paste copied Windows files from Explorer: images → attachments, other files → path inserts. |
| [#8156](https://github.com/QwenLM/qwen-code/pull/8156) | **fix(test)** | CI stabilization | Scopes auto-edit `canUseTool` assertion to write/edit tools only; records invoked tools for precise failure diagnosis. |

---

## Feature Request Trends
1. **Memory & agent configurability** — `#8168` (max turns), `#8056` (workspace-isolated memory), `#8128` (subagent status monitoring) show demand for granular control over background agents.
2. **Multi-provider parity** — Anthropic converter fixes (`#8159`, `#8160`, `#8161`, `#8162`) + new OpenAI Responses generator (`#8169`) indicate active investment in non-Gemini provider fidelity.
3. **Session introspection & hooks** — `#7966` (file provenance), `#8059` (SessionDelete hook), `#8155` (session source in hooks) point to growing need for auditability and automation.
4. **Desktop/Web Shell convergence** — `#8132` (Tauri packaging), `#8098` (composer animations), `#8174` (plugin UI polish) signal desktop as a first-class target.
5. **Deterministic runtime boundaries** — `#8102` (trustworthy agent runtime RFC) reflects architectural appetite for sandboxed, auditable tool execution.

---

## Developer Pain Points
- **Windows instability**: Crashes (`#7972`), installer hash failures (`#7118`), LM Studio connection (`#8146`), banner rendering (`#8124`), file paste (`#7957` fix pending) — Windows remains a friction surface.
- **CI flakiness in E2E suites**: 4+ autofix issues (`#8153`, `#8133`, `#8108`, `#8072`, `#8076`) in permission-control, model-switching, and ACP cron tests — slows merge velocity.
- **Anthropic converter correctness**: 5 open bugs on tool-call ordering, ID sanitization, orphan stripping, thinking-block pruning, `tool_result` positioning — blocks reliable non-Gemini usage.
- **Worktree isolation gaps**: Settings write to wrong `.qwen` (`#8138`); memory not workspace-scoped (`#8056` WIP) — breaks monorepo/multi-worktree workflows.
- **Session observability**: No native way to list session-created files (`#7966`), subagent status opaque (`#8128`), hook payloads lack source context (`#8155` fixing).

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI (CodeWhale) Community Digest — 2026-07-31

## 1. Today's Highlights
The project has officially rebranded from **DeepSeek TUI** to **CodeWhale** (Shannon Labs' public product), with the legacy `deepseek-tui` npm package deprecated. Version **v0.9.2** shipped today, finalizing handoff fixes across permissions, Fleet persistence, compaction errors, sub-agent supervision, and ambient UI polish. Meanwhile, the v0.9.3 refactor epic is accelerating: the massive `codewhale-tui` crate (771k lines, 87% of workspace) is being split into library-backed modules to enable single-binary distribution and faster compiles.

---

## 2. Releases
### **v0.9.2** — *Released 2026-07-30*
- **Rebrand complete**: `codewhale` CLI, npm package, and release assets now lowercase; legacy `deepseek-tui` deprecated.
- **Critical fixes**: Permission authorization order locked with contract tests (#4980), foreground shell detach-before-steer (#4979), provider credential store unification (#4987), compaction failure receipts (#4988), subagent steering canonical targets (#4989).
- **UX polish**: Ambient jellyfish silhouette redesigned (#4807), AltGr `/` key conflict resolved (#4977), LaTeX math rendering extended (#4981).
- **Migration**: DevContainer now supports Windows with named volumes (#4990).

> 🔗 [Release PR #4982](https://github.com/Hmbown/CodeWhale/pull/4982) | [v0.9.2 Release Notes](https://github.com/Hmbown/CodeWhale/releases/tag/v0.9.2)

---

## 3. Hot Issues (Top 10 by Impact & Activity)

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#2870](https://github.com/Hmbown/CodeWhale/issues/2870) | **EPIC: Staged command-boundary refactor** | Core architecture work to decouple command dispatch; blocks v0.9.3 CLI/TUI parity. 19 comments, active since June. | 🔥 High — 19 comments, tracked by maintainers |
| [#3306](https://github.com/Hmbown/CodeWhale/issues/3306) | **v0.9.3: Converge runtime ownership, ship one executable** | 771k-line `codewhale-tui` monolith owns parallel runtimes; goal is library-backed TUI + in-process dispatch. | 🔥 High — Umbrella epic for v0.9.3 |
| [#2369](https://github.com/Hmbown/CodeWhale/issues/2369) | **Config paths fragmented across OS/Cygwin + silent migration bug** | Windows/Cygwin home-directory divergence breaks config/secret loading; migration can silently fail. | 🐛 Critical — Affects cross-platform reliability |
| [#4022](https://github.com/Hmbown/CodeWhale/issues/4022) | **CLI/TUI parity for subagent & runtime control surfaces** | Subagent status/cancellation trapped in TUI sidebar; must expose via CLI for cloud/remote workflows. | 🎯 Strategic — Product shape decision |
| [#4991](https://github.com/Hmbown/CodeWhale/issues/4991) | **Compilation times & TUI crate monolith — are others feeling this?** | Contributors report slow compiles during command refactor; signals crate-split urgency. | 💬 Discussion — 1 comment, resonates with #3306 |
| [#4747](https://github.com/Hmbown/CodeWhale/issues/4747) | **Single-binary distribution: library-backed TUI with in-process dispatch** | Companion executable friction; prior spike proved viable library seam. | 🎯 Strategic — Directly enables #3306 |
| [#4949](https://github.com/Hmbown/CodeWhale/issues/4949) | **Chinese translation of "Constitution": "宪法" vs "协作准则"** | i18n debate: "宪法" (constitution) carries political weight in CN; "协作准则" (collaboration guidelines) safer. | 🌐 Cultural — 4 comments, native-speaker input sought |
| [#4906](https://github.com/Hmbown/CodeWhale/issues/4906) | **Show, don't tell: record real CodeWhale session for site/README** | Zero visual demo on codewhale.net or README; terminal agent is motion-heavy product. | 📹 Marketing — 3 comments, maintainer-authored |
| [#3921](https://github.com/Hmbown/CodeWhale/issues/3921) | **perf(skills): full multi-root recursive rescan on every prompt/build** | Skill discovery walks 10 roots (depth 8, `canonicalize`) on *every* prompt, `/skills`, `load_skill` — data rarely changes. | ⚡ Performance — 0 comments but high leverage |
| [#4704](https://github.com/Hmbown/CodeWhale/issues/4704) | **Context diet: minimize every model-facing prompt, schema, payload** | Stable prompt ~29KB before project context; target is portable behavior across model families, not just token count. | 🧠 Architecture — 0 comments, parent of #4707–#4710 |

---

## 4. Key PR Progress (Top 10 by Impact)

| # | PR | Status | Summary |
|---|----|--------|---------|
| [#4982](https://github.com/Hmbown/CodeWhale/pull/4982) | `release: finalize Codewhale v0.9.2` | **MERGED** | Final v0.9.2 handoff: permission truth, Fleet setup/persistence, reasoning inspection, compaction errors, sub-agent supervision, sandbox truth, provider credential UX, ambient silhouettes. |
| [#4980](https://github.com/Hmbown/CodeWhale/pull/4980) | `docs(permissions): publish and lock authorization order` | **MERGED** | Authorization precedence (tool admission → hooks → requirements → auto-review → repo law → approval → sandbox) now documented + contract-tested. |
| [#4979](https://github.com/Hmbown/CodeWhale/pull/4979) | `fix(tui): detach foreground shell before steering` | **MERGED** | Enter during blocking Bash (`sleep 30`, `cargo build`) now moves job to `/jobs` before enqueueing steer — fixes #4930. |
| [#4992](https://github.com/Hmbown/CodeWhale/pull/4992) | `Layer 5.2: User command dispatch precedence, shadowing, error semantics` | **OPEN** | Gherkin acceptance tests for user-command shadowing built-ins (canonical + alias), fallback, invalid-command errors. Part of #2870 epic. |
| [#4990](https://github.com/Hmbown/CodeWhale/pull/4990) | `fix(devcontainer): support Windows development` | **OPEN** | Dedicated dev image with Rust toolchain, rustfmt, pkg-config, DBus; named volumes for CodeWhale state + Cargo artifacts (avoids Windows HOME expansion). |
| [#4981](https://github.com/Hmbown/CodeWhale/pull/4981) | `feat(tui): LaTeX environments, text, and command support for math rendering` | **OPEN** | Full environment-block support, inline/accent commands, command-aware sub/superscripts, case-insensitive env matching. |
| [#4984](https://github.com/Hmbown/CodeWhale/pull/4984) | `fix runtime config persistence and workspace task scoping` | **MERGED** | Rebased GUI-facing TUI runtime API; `GET /v1/tasks` accepts `workspace` filter, includes workspace paths in summaries. |
| [#4985](https://github.com/Hmbown/CodeWhale/pull/4985) | `feat(runtime-api): scope task listing by workspace` | **OPEN** | Companion to #4984: workspace filter + regression test for filtering before limit truncation. |
| [#4983](https://github.com/Hmbown/CodeWhale/pull/4983) | `test(tui): remove skills viewport ordering assumption` | **MERGED** | Flaky test fix: wait for owned-scan receipt instead of assuming row position in bounded viewport. Release-blocking. |
| [#4977](https://github.com/Hmbown/CodeWhale/pull/4977) | `fix(tui): let AltGr-typed "/" reach composer instead of opening help` | **OPEN** | Fixes #4723: Windows AltGr reported as `Ctrl+Alt`; Brazilian ABNT2 `/` = `AltGr+Q` → `Ctrl+Alt+Q` triggered help chord. AZERTY also affected. |

---

## 5. Feature Request Trends (Distilled from Issues)

| Theme | Representative Issues | Signal Strength |
|-------|----------------------|-----------------|
| **Single-binary / crate decomposition** | #3306, #4747, #3948, #4991 | 🔥🔥🔥 — 4+ issues, maintainer-led, blocks v0.9.3 |
| **CLI/TUI parity for subagents & runtime control** | #4022, #4989, #3950 | 🔥🔥 — Product-shape decision, cloud/remote readiness |
| **Config & credential unification across OS** | #2369, #4987 | 🔥🔥 — Windows/Cygwin pain, silent migration bugs |
| **Context/prompt minimization ("context diet")** | #4704, #4707, #4709, #4710, #4394 | 🔥🔥 — 5 linked issues, token/portability focus |
| **Compilation speed / dev ergonomics** | #4991, #3306, #4747 | 🔥 — Contributor friction, drives crate split |
| **Visual demo / onboarding** | #4906, #4910 | 📹 — Maintainer + community ask for real session recording |
| **i18n & cultural sensitivity** | #4949 | 🌐 — Active translation debate, CN community engaged |
| **Ambient UI polish (jellyfish, math, help chords)** | #4807, #4981, #4977 | ✨ — Quality-of-life, shows dogfooding depth |

---

## 6. Developer Pain Points (Recurring Frustrations)

| Pain Point | Evidence | Frequency |
|------------|----------|-----------|
| **Slow compilation / monolithic crate** | #4991 ("waiting for compiles"), #3306 (771k lines in one crate), #3948 (main.rs 14.8k lines) | 🔴 High — Multiple contributors, blocks refactor velocity |
| **Config/secret path fragmentation on Windows/Cygwin** | #2369 (patch attached), #4987 (keys appear missing), #4990 (devcontainer HOME bind mount broken) | 🔴 High — Cross-platform reliability gap |
| **Foreground shell blocks steer/input** | #4930 (Enter during `sleep 30` fails confusingly), fixed by #4979 | 🟡 Medium — UX papercut, now addressed |
| **Subagent control trapped in TUI** | #4022 (sidebar primary, no CLI/cloud access), #4989 (steering explicit/durable) | 🟡 Medium — Architectural limitation for non-terminal use |
| **Skill discovery re-scans on every prompt** | #3921 (10 roots, depth 8, `canonicalize` per prompt/build/`/skills`) | 🟡 Medium — Performance leak, low-hanging fruit |
| **Compaction failures without diagnostics** | #4988 (trigger unknown: quota? context? malformed transcript?), #4394 (no survival contract) | 🟡 Medium — Reliability blind spot |
| **AltGr/keyboard layout conflicts** | #4977 (Brazilian ABNT2, AZERTY), #4723 | 🟢 Low — Specific but real for non-US layouts |
| **No visual product demo** | #4906 (site/README show zero motion), #4910 (onboarding draft PR) | 🟢 Low — Marketing/onboarding gap |

---

*Data source: `github.com/Hmbown/CodeWhale` — Issues/PRs updated 2026-07-30. Digest generated 2026-07-31.*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/DenisZheng/agents-radar).*