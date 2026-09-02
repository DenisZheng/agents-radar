# AI CLI Tools Community Digest 2026-09-02

> Generated: 2026-09-02 02:22 UTC | Tools covered: 9

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

# Cross-Tool AI CLI Comparison Report — 2026-09-02

---

## 1. Ecosystem Overview

The AI CLI ecosystem is in a **high-velocity stabilization phase** across all major tools. Every project shipped patches or alphas in the last 24 hours, but the dominant theme is **fixing regressions** (Windows crashes, config loss, model-access bugs) rather than launching new capabilities. Windows Desktop reliability has emerged as a cross-cutting crisis for Claude Code, Codex, and Copilot CLI. Meanwhile, **MCP protocol maturity**, **sub-agent orchestration**, and **enterprise governance** (SSO, RBAC, audit trails) are the three shared investment vectors. Community engagement is high—top issues regularly exceed 50 comments and 75 👍—indicating these tools are now production dependencies, not experiments.

---

## 2. Activity Comparison

| Tool | Releases (24h) | Hot Issues Tracked | Top Issue Engagement | PRs Updated (24h) | Release Channel Health |
|------|----------------|-------------------|----------------------|-------------------|------------------------|
| **Claude Code** | 2 patches (v2.1.258, v2.1.257) | 10 | 99 comments, 15 👍 (#80444) | 2 (plugin-only) | Stable + unstable split causing model-access confusion |
| **OpenAI Codex** | 1 patch + 3 alphas (rust-v0.152.1 → 0.153.0) | 10 | 56 comments, **77 👍** (#39903) | **15 merged** (high velocity) | Alpha series advancing rapidly; stable lagging |
| **GitHub Copilot CLI** | 1 (v1.0.83-1) | 10 | 5 comments, 75 👍 (#13, closed) | 0 | Monthly cadence; SEA bundle stability concerns |
| **Kimi Code CLI** | 1 (v1.50.0 — migration release) | 2 (both closed) | Low (0–1 comments) | 4 (2 merged) | Brand migration in progress; low issue volume |
| **Pi** | 0 | 10 | 54 👍, 21 comments (#2870) | 10 (feat/fix mix) | No release; heavy refactor/cleanup sprint |
| **Qwen Code** | 1 (cua-driver-rs v0.20.3) | 10 | 17 comments (#8662) | 10 (mostly open) | OpenTUI migration milestone; daemon stability focus |
| **DeepSeek TUI** | 0 | 10 (8 closed) | Low (fresh #5806) | 10 (7 open "wave slice") | Coordinated batch PRs; backlog purge |
| **Gemini CLI** | — | — | — | — | Data unavailable |
| **OpenCode** | — | — | — | — | Data unavailable |

**Key takeaway**: Codex leads in PR throughput (15 merges/day); Claude Code and Copilot CLI ship user-facing patches; Pi, Qwen, DeepSeek run internal refactor waves with batched PRs.

---

## 3. Shared Feature Directions

| Requirement | Tools Affected | Specific Community Needs |
|-------------|----------------|--------------------------|
| **Windows Desktop stability** | Claude Code, Codex, Copilot CLI | GPU crash + MSIX corruption (Claude #80444), `codex.exe` relocation failure (Codex #40700), PowerShell ConstrainedLanguage spam (Copilot #4683), WSL path deserialization (Codex #41463, Copilot #3688) |
| **MCP protocol maturity** | Claude Code, Codex, Copilot CLI, Pi, Qwen Code, DeepSeek TUI | draft-07 outputSchema support (Claude #86142), OAuth refresh coordination (Codex #42128), protocol version skew (Copilot #4525), proxy-aware MCP (Pi #8134), ACP+MCP unification (DeepSeek #2535) |
| **Sub-agent / fleet orchestration** | Codex, Copilot CLI, Pi, Qwen Code, DeepSeek TUI | Structured async user input (Codex #42178), load-aware concurrency limiter (Copilot #4688), per-invocation model overrides (Pi #8969), ACP multi-backend routing (Qwen #10617), fleet pinning UX (DeepSeek #5815) |
| **Enterprise governance & SSO** | Copilot CLI, Claude Code, Codex, DeepSeek TUI | `forceLoginOrgs` (Copilot v1.0.83-1), web4-governance plugin R6 audit trails (Claude #20448), early rate-limit warnings for Plus/Team (Codex #42142), PKCE browser flow for ChatGPT (DeepSeek #5784) |
| **TUI/terminal UX modernization** | Claude Code, Codex, Pi, Qwen Code, DeepSeek TUI | Command-output collapsing toggle (Codex #39903, 77 👍), OpenTUI migration (Qwen #8662), diff word-level highlight (DeepSeek #5813), ANSI color preservation (DeepSeek #5812), inline/fullscreen toggle (DeepSeek #5814) |
| **Model/entitlement transparency** | Claude Code, Codex, Copilot CLI | Fable 5.1 channel mismatch (Claude #91345), "model at capacity" opacity (Codex #41790), BYOK model ID ignored (Copilot #4680), usage UI showing relative not absolute (Claude #91282) |
| **Session persistence & resume** | Codex, Pi, Qwen Code, DeepSeek TUI | Symlinked session roots (Codex #42135), session file corruption mid-run (Pi #8939), killed-turn output not restored (Qwen #10710), goal rehydration across restarts (DeepSeek #5816) |

---

## 4. Differentiation Analysis

| Dimension | Claude Code | OpenAI Codex | GitHub Copilot CLI | Pi | Qwen Code | DeepSeek TUI | Kimi Code |
|-----------|-------------|--------------|-------------------|-----|-----------|--------------|-----------|
| **Primary differentiator** | Anthropic model integration (Fable, Opus), governance plugins | OpenAI model access (GPT-5, o-series), ACP protocol leadership | GitHub-native (Copilot Chat, PR actions), enterprise SSO | Provider-agnostic runtime, multi-model fleet, extension API | OpenTUI terminal stack, CUA desktop automation, ACP multi-backend | Design-agent bridge (OpenDesign), progressive onboarding, goal persistence | Brand migration (kimi-cli → Kimi Code), deprecation-aware updates |
| **Target user** | Anthropic Max/Pro subscribers, governance-heavy teams | OpenAI Pro/Plus/Team, ACP integrators | GitHub Enterprise orgs, Copilot seat holders | Power users wanting model flexibility, extension authors | Local-model developers, desktop automation builders, Chinese-market devs | Design-to-code workflow users, multi-provider power users | Moonshot/Kimi ecosystem users, migration path seekers |
| **Technical approach** | Electron + Rust CLI, internal branches for core, plugin architecture | Rust (sea bundle), Bazel build, ACP-first protocol | Node.js SEA bundle, GitHub API deep integration | Go + TypeScript, provider abstraction layer, RPC architecture | TypeScript/Node + Rust (cua-driver), ink→OpenTUI migration | Go + Bubble Tea TUI, batched "wave slice" PRs, MCP-first | Node.js, CDN-driven migration flow, kosong dependency |
| **Enterprise features** | web4-governance (R6 audit), Max plan entitlements | Plus/Team rate-limit warnings, header injection policies | `forceLoginOrgs`, constrained-language compat | Proxy auth, credential locking, workspace IDs | Bubblewrap sandbox, DingTalk permission cards | PKCE auth, ZenMux/Neuralwatt providers, compaction contract | One-key migration, deprecation notices |
| **Weakness exposed** | Windows GPU crash, config regressions, hook bypasses | Windows startup, Remote Control loops, rate-limit opacity | SEA memory leaks, MCP version skew, BYOK regressions | Silent agent stalls, session fragility, proxy hostility | llama.cpp grammar regressions, undocumented config flips | Windows flag parsing, stale model catalog, flaky CI | Low community volume, blocking UX during tasks |

---

## 5. Community Momentum & Maturity

| Tier | Tools | Evidence |
|------|-------|----------|
| **High momentum, production-grade** | **OpenAI Codex**, **Claude Code** | Codex: 15 PRs merged/day, 77 👍 on top issue, alpha cadence weekly. Claude: 2 patches/24h, 99-comment critical issue, governance plugin investment. Both have dedicated enterprise tiers. |
| **High momentum, stabilizing** | **GitHub Copilot CLI**, **Pi** | Copilot: Monthly releases, 75 👍 on vi-mode (now shipped), but SEA memory leaks are systemic. Pi: 50+ issues closed, 20 PRs merged in batch, XDG compliance, but no release yet. |
| **Focused iteration, niche strength** | **Qwen Code**, **DeepSeek TUI** | Qwen: OpenTUI milestone, CUA driver notarized macOS, ACP multi-backend — strong on local/desktop automation. DeepSeek: Coordinated 7-PR wave, OpenDesign partnership, progressive onboarding — strong on design-agent fusion. |
| **Early/transition phase** | **Kimi Code CLI** | v1.50.0 is a migration release; issue volume low; core UX gaps (blocking tasks, sub-agent hangs) acknowledged but not yet resolved. |
| **Data unavailable** | **Gemini CLI**, **OpenCode** | Summary generation failed; cannot assess. |

**Maturity signals**: Codex and Claude Code show "platform" maturity (governance, entitlements, multi-channel releases). Copilot CLI is "enterprise-integrated" but carries technical debt (SEA bundle). Pi, Qwen, DeepSeek are "power-user runtimes" with deep protocol work but smaller communities.

---

## 6. Trend Signals for Technical Decision-Makers

| Trend | Signal Strength | Implication |
|-------|-----------------|-------------|
| **ACP (Agent Client Protocol) becoming the interop standard** | High — Codex, Qwen, Pi, DeepSeek all investing | Teams building custom agents/UIs should adopt ACP; expect MCP→ACP bridging tools. |
| **Windows is the new battleground** | Critical — 3/5 major tools have blocking Windows regressions | Any org standardizing on Windows must budget for CLI instability; WSL2 ≠ native fix. |
| **Model entitlement opacity eroding trust** | High — Claude (Fable channel mismatch), Codex (capacity errors), Copilot (BYOK regressions) | Procurement must verify model-access SLAs; "Max/Pro/Plus" tiers behave inconsistently across vendors. |
| **Sub-agent orchestration moving from "spawn" to "fleet management"** | Rising — Pi (model overrides), DeepSeek (fleet pinning), Codex (structured input), Copilot (load-aware limiter) | Next 6 months: expect declarative fleet configs, cost-aware routing, and observability dashboards. |
| **Governance/audit as differentiator** | Emerging — Claude (web4-governance R6), Copilot (forceLoginOrgs), Codex (header injections) | Regulated industries will favor tools with built-in audit trails and policy enforcement. |
| **Terminal UX renaissance via OpenTUI / Bubble Tea** | Medium — Qwen (OpenTUI), DeepSeek (Bubble Tea), Pi (custom TUI) | Ink/React-based TUIs being replaced; expect smoother scrolling, true color, and mouse support. |
| **Local-model / privacy-first workflows gaining first-class support** | Medium — Qwen (llama.cpp, Bubblewrap), Pi (provider-agnostic), DeepSeek (ZenMux/Neuralwatt) | Air-gapped and cost-sensitive teams have viable CLI paths now; evaluate sandboxing maturity. |
| **Session resilience = competitive moat** | Rising — All tools fixing resume/corruption bugs | Tools that survive crashes, network flaps, and compaction without data loss will win enterprise adoption. |

---

## Recommendation Summary

| If your priority is… | Lean toward… |
|----------------------|--------------|
| **OpenAI model access + protocol leadership** | OpenAI Codex |
| **Anthropic models + governance/audit** | Claude Code |
| **GitHub-native enterprise workflow** | GitHub Copilot CLI |
| **Multi-model flexibility + extension platform** | Pi |
| **Local models + desktop automation (CUA)** | Qwen Code |
| **Design-to-code + progressive UX** | DeepSeek TUI |
| **Kimi/Moonshot ecosystem + smooth migration** | Kimi Code CLI |

**Watchlist**: Gemini CLI and OpenCode — re-evaluate once data available.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

⚠️ Skills summary generation failed.

---

# Claude Code Community Digest — 2026-09-02

---

## 1. Today's Highlights

Two patch releases shipped in the last 24 hours: **v2.1.258** restores macOS 12 (Monterey) launch support and fixes a regression where re-sent permission approvals broke remote/scheduled sessions. **v2.1.257** promotes **Claude Fable 5.1** to the default Fable model (1M context, $10/$50 per Mtok with $0.25/Mtok cache reads) and adds configurable time formats/time zones for the turn-end clock. Meanwhile, the top community issue remains the **Windows Desktop GPU-process crash (#80444, 99 comments)** leaving the MSIX package unlaunchable until repair, and a **Max-plan entitlement bug (#79337, 76 comments)** where Fable 5 incorrectly demands usage credits on the day it became standard on Max.

---

## 2. Releases

### v2.1.258 — 2026-09-02
- **Fixed**: Claude Code failing to launch on macOS 12 Monterey (regression from 2.1.255).
- **Fixed**: Remote/scheduled sessions failing with "user messages must have non-empty content" after a re-sent permission approval could not be applied.

### v2.1.257 — 2026-09-01
- **New default model**: **Claude Fable 5.1** (`claude-fable-5-1`) — 1M context window, pricing at $10/$50 per Mtok with $0.25/Mtok cache reads.
- **New settings**: `timeFormat` (12-hour, 24-hour, 24-hour UTC, or strftime pattern) and `timeZone` for the turn-end clock and transcript timestamps.

---

## 3. Hot Issues (Top 10 by Community Impact)

| # | Issue | Why It Matters | Community Reaction |
|---|-------|----------------|-------------------|
| [#80444](https://github.com/anthropics/claude-code/issues/80444) | **Windows Desktop: fatal GPU-process crash (0x060C201E) via in-app Browser tab; MSIX unlaunchable until Repair** | Blocks all Windows Store users on v1.24012.1; crash corrupts appx state. | 99 comments, 15 👍 — highest engagement; users report reproducible across two NVIDIA driver versions. |
| [#79337](https://github.com/anthropics/claude-code/issues/79337) | **Fable 5 prompts "usage credits required" on Max plan (day it became standard on Max)** | Entitlement regression: Max subscribers silently downgraded to Opus 4.8 on launch day. | 76 comments, 23 👍 — closed but high signal; suggests billing/feature-flag sync issue. |
| [#85891](https://github.com/anthropics/claude-code/issues/85891) | **Windows 11: Desktop window stays always-on-top, no setting to disable** | UX regression; window occludes other apps persistently. | 58 comments, 128 👍 — highest 👍 count; Windows counterpart to macOS issue #66516. |
| [#86142](https://github.com/anthropics/claude-code/issues/86142) | **MCP servers declaring draft-07 outputSchema rejected client-side: "unsupported dialect"** | Breaks MCP ecosystem adoption of newer spec; client-side validation blocks dispatch. | 41 comments, 13 👍 — closed; indicates schema-negotiation gap. |
| [#61682](https://github.com/anthropics/claude-code/issues/61682) | **GitHub connector shows "Connected" but exposes no tools in Cowork (Windows)** | Cowork integration non-functional on Windows despite apparent success. | 32 comments, 24 👍 — long-standing (since May); cross-platform parity gap. |
| [#66020](https://github.com/anthropics/claude-code/issues/66020) | **macOS kernel zone leak (data.kalloc.1024) from CLI — panic at ~20GB, leak scales with agent load** | Memory leak in CLI process; crash risk under heavy multi-agent workloads. | 26 comments, 5 👍 — technical depth; leak rate 21→1027/sec with agents. |
| [#27474](https://github.com/anthropics/claude-code/issues/27474) | **`claude --worktree` overwrites `core.hooksPath` of `$GIT_COMMON_DIR/config`** | Git config corruption for users relying on shared hooks across worktrees. | 14 comments, 16 👍 — persistent since Feb; workflow-breaking for git power users. |
| [#91345](https://github.com/anthropics/claude-code/issues/91345) | **Fable 5.1 requires unstable release of Claude Code** | New default model (from v2.1.257) not usable on stable channel. | 3 comments, fresh (Sep 1) — release-channel mismatch. |
| [#91296](https://github.com/anthropics/claude-code/issues/91296) | **`defaultMode: bypassPermissions` in `.claude/settings.local.json` silently ignored, missing from Shift+Tab cycle** | Project-level permission bypass broken; UI cycle incomplete. | 1 comment, 2 👍 — config regression affecting team workflows. |
| [#89251](https://github.com/anthropics/claude-code/issues/89251) | **Permission-mode system prompt instructs model to edit files via Bash, routing writes around PreToolUse hooks** | Security/control bypass: model directed to circumvent Write/Edit hooks via Bash. | 3 comments, 1 👍 — architectural concern for hook-based governance. |

---

## 4. Key PR Progress

| # | PR | Status | Summary |
|---|----|--------|---------|
| [#20448](https://github.com/anthropics/claude-code/pull/20448) | Add web4-governance plugin for AI governance with R6 workflow | Open (Jan 23, updated Sep 2) | Introduces **T3 trust tensors**, entity witnessing, and R6 audit trails for AI governance — "trust-native internet infrastructure for the AI agent era." |
| [#78371](https://github.com/anthropics/claude-code/pull/78371) | Harden ralph-wiggum plugin: bounded iterations, push/publish guard, stop-hook fixes | Closed (Jul 17, updated Sep 1) | Safety hardening: adds iteration bounds, blocks unattended push/merge/publish/deploy, fixes stop-hook handling. |

> Only 2 PRs updated in the last 24h — both plugin-focused. Core CLI/Desktop work appears to ship via internal branches.

---

## 5. Feature Request Trends (from Issues)

1. **Cross-platform UI parity** — Windows always-on-top (#85891), macOS kernel leak (#66020), WSL branch selector (#80088), terminal flash on Windows (#66540).
2. **MCP protocol maturity** — draft-07 schema support (#86142), `requiresUserInteraction` UX (#89063), GitHub connector tool exposure (#61682).
3. **Permission/hook governance** — bypassPermissions config ignored (#91296, #75235), Bash bypassing hooks (#89251), subagent prompt accessibility (#91368).
4. **Model/entitlement transparency** — Fable 5.1 channel mismatch (#91345), Max-plan credit errors (#79337), usage-limits UI showing relative not absolute values (#91282).
5. **Observability/telemetry** — OTLP metrics exporter silent failure (#91165, regression of #50567), Background Tasks panel showing deleted cron jobs (#90804).
6. **Vim/TUI ergonomics** — cursor shape for vim mode (#32469, 42 👍), SSH login URL display (#91358).

---

## 6. Developer Pain Points (Recurring Frustrations)

| Pain Point | Evidence |
|------------|----------|
| **Windows Desktop stability** | GPU crash + MSIX corruption (#80444), always-on-top window (#85891, 128 👍), terminal flashing (#66540), kernel BSODs (#91366), Cowork GitHub connector broken (#61682). |
| **Config/setting regressions** | `bypassPermissions` ignored in local settings (#91296, #75235), `core.hooksPath` overwritten (#27474), time format settings newly added but not retrofitted to all surfaces. |
| **Model access opacity** | Fable 5.1 default but requires unstable (#91345), Max plan credit errors on launch day (#79337), silent downgrades to Opus 4.8 (#91369), usage UI shows "50% higher" without baseline (#91282). |
| **Hook/permission bypasses** | System prompt directs Bash writes around PreToolUse hooks (#89251), MCP `requiresUserInteraction` doesn't suppress "don't ask again" (#89063), subagent prompts indistinguishable for colorblind users (#91368). |
| **Telemetry blind spots** | OTLP metrics exporter opens no socket silently (#91165), Background Tasks panel shows stale state (#90804), no diagnostics surfaced for exporter failures. |
| **MCP ecosystem friction** | draft-07 outputSchema rejected client-side (#86142), GitHub connector connected but tool-less (#61682), Bedrock `getContextUsage` fans out billed Haiku calls per context item (#86628). |

---

*Digest generated from github.com/anthropics/claude-code data as of 2026-09-02. Links point to live issues/PRs.*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-09-02

---

## 1. Today's Highlights

The Codex team shipped **rust-v0.152.1** with a targeted fix for Guardian approval reviews to respect Node REPL policies from model metadata, while the v0.153.0 alpha series continues advancing. Community attention remains concentrated on **Windows Desktop stability** (startup failures, WSL path handling, remote control loops), **rate-limit errors** affecting Pro/Plus users, and a highly-upvoted request (**77 👍**) to make command-output collapsing configurable in the TUI.

---

## 2. Releases

| Version | Type | Key Changes |
|---------|------|-------------|
| **rust-v0.152.1** | Patch | **Bug fix:** Guardian approval review now honors Node REPL policies provided through model metadata. |
| **rust-v0.153.0-alpha.4** | Alpha | Iteration on the 0.153.0 pre-release series. |
| **rust-v0.153.0-alpha.2** | Alpha | Iteration on the 0.153.0 pre-release series. |
| **rust-v0.153.0-alpha.1** | Alpha | Initial 0.153.0 pre-release. |

[Full changelog for 0.152.1](https://github.com/openai/codex/compare/rust-v0.152.0...rust-v0.152.1)

---

## 3. Hot Issues (Top 10 by Community Signal)

| # | Issue | Why It Matters | Community Reaction |
|---|-------|----------------|-------------------|
| **[#39903](https://github.com/openai/codex/issues/39903)** | Add option to disable “Ran N commands” collapsing | TUI users lose visibility of executed commands; high demand for configurability. | **56 comments, 77 👍** — strongest signal in this batch. |
| **[#37403](https://github.com/openai/codex/issues/37403)** | macOS Desktop: Remote Control / CLI thread resume broken (`already has an active writer`) | Blocks mobile→desktop handoff workflow; regression from Aug 7 update. | **47 comments, 34 👍** — core remote workflow broken. |
| **[#40700](https://github.com/openai/codex/issues/40700)** | Windows Desktop fails to start: `codex.exe` relocation from `WindowsApps` fails | App entirely unusable on Windows 26.820; affects Plus subscribers. | **43 comments** — critical startup regression. |
| **[#39954](https://github.com/openai/codex/issues/39954)** | Windows + Android Remote Control enters reconnect loop | Remote Control unusable from Android on Windows hosts. | **18 comments** — mobile remote workflow broken. |
| **[#41463](https://github.com/openai/codex/issues/41463)** | Windows + WSL: `AbsolutePathBuf` deserialized without base path | Prevents project creation in WSL2 environments. | **15 comments, 7 👍** — WSL integration gap. |
| **[#41790](https://github.com/openai/codex/issues/41790)** | Repeated “Selected model is at capacity” errors on Pro | Capacity errors interrupting normal agent tasks since Aug 31. | **13 comments, 9 👍** — quota/capacity regression. |
| **[#41088](https://github.com/openai/codex/issues/41088)** | Windows: Local execution fails to start after Desktop update | Post-update regression blocking local runs. | **12 comments** — Windows stability. |
| **[#41433](https://github.com/openai/codex/issues/41433)** | GitHub connector: `mark_pull_request_ready_for_review` queries invalid `fullDatabaseId` | Official connector broken for “Ready for review” action. | **12 comments, 7 👍** — connector API mismatch. |
| **[#25934](https://github.com/openai/codex/issues/25934)** | TUI markdown hyperlinks not clickable in OSC 8 terminals | Announced feature (0.136.0) not working across terminals. | **8 comments, 4 👍** — long-standing TUI gap. |
| **[#34263](https://github.com/openai/codex/issues/34263)** | macOS Desktop: Browser/`node_repl` tools not provisioned to Remote SSH tasks | Remote SSH sessions lack browser tooling available locally. | **7 comments** — feature parity gap. |

---

## 4. Key PR Progress (Notable Merges in Last 24h)

| PR | Area | Summary |
|----|------|---------|
| **[#42178](https://github.com/openai/codex/pull/42178)** | Agent UX | **Structured async user input** — replaces `send_user_message_async` with `request_user_input_async` supporting questions + suggested answers while the turn continues. |
| **[#42174](https://github.com/openai/codex/pull/42174)** | Build/Infra | **Cacheable Bazel app-server schema bundle** — generates stable/experimental schema dirs as Bazel actions; includes pinned `zstd` for JSON normalization. |
| **[#42173](https://github.com/openai/codex/pull/42173)** | Networking | **Header injections in network requirements** — parses `experimental_network.header_injections` rules (host, method, path-prefix, headers) into `NetworkConstraints`. |
| **[#42164](https://github.com/openai/codex/pull/42164)** | Analytics | **Record result sources in app tool analytics** — adds `analytics_result_source` per tool; attaches host-generated source IDs from accepted results. |
| **[#42161](https://github.com/openai/codex/pull/42161)** | Code Health | **Split tool JSON Schema code** — moves types, traversal, compaction into dedicated `json_schema` submodules with colocated tests. |
| **[#42151](https://github.com/openai/codex/pull/42151)** | Thread Metadata | **Expose model settings in app-server thread metadata** — adds nullable `model` and `reasoningEffort` fields to `Thread` object. |
| **[#42150](https://github.com/openai/codex/pull/42150)** | Plugins | **Remote marketplaces in plugin CLI** — `codex plugin list` now shows remote catalog entries; supports add/remove remote plugins. |
| **[#42147](https://github.com/openai/codex/pull/42147)** | Permissions | **Skip Guardian reviews in Full Access** — detects Full Access (`approvalPolicy: never` + unrestricted perms) consistently to avoid redundant model reviews. |
| **[#42146](https://github.com/openai/codex/pull/42146)** | Permissions | **Resolve permission requests in executor context** — evaluates paths/grants against selected environment (path convention, home, workspace roots, temp dirs). |
| **[#42142](https://github.com/openai/codex/pull/42142)** | Rate Limits | **Early rate-limit warnings for Plus/Team** — warns at <50% of ~5-hour window remaining; preserves 75/90/95% thresholds for other plans. |
| **[#42140](https://github.com/openai/codex/pull/42140)** | Editor UX | **Redo support in Vim composer history** — bounded redo stack (`Ctrl+R` in normal mode); configurable `vim_no_redo`. |
| **[#42137](https://github.com/openai/codex/pull/42137)** | Performance | **Prewarm shell snapshots** — starts async snapshot capture after turn hooks accept, removing latency from command path. |
| **[#42135](https://github.com/openai/codex/pull/42135)** | Sessions | **Thread forks from symlinked session roots** — validates rollout lineage against canonical `sessions` dir, fixing fork failures with symlinks. |
| **[#42133](https://github.com/openai/codex/pull/42133)** | MCP/Auth | **Scope session MCP approvals to app account links** — includes `link_id` in approval keys to prevent cross-account reuse. |
| **[#42128](https://github.com/openai/codex/pull/42128)** | MCP/Auth | **Prepare MCP connections for coordinated OAuth refresh** — adds `mcp_oauth_refresh_coordination` feature; pins refresh mode to connection identity. |

---

## 5. Feature Request Trends

| Theme | Representative Issues | Signal |
|-------|----------------------|--------|
| **TUI/CLI output control** | [#39903](https://github.com/openai/codex/issues/39903) (disable command collapsing), [#25934](https://github.com/openai/codex/issues/25934) (clickable links) | **77 👍** on collapsing; long-standing link issue |
| **Remote parity (SSH / Mobile / Desktop)** | [#37403](https://github.com/openai/codex/issues/37403), [#39954](https://github.com/openai/codex/issues/39954), [#34263](https://github.com/openai/codex/issues/34263), [#22844](https://github.com/openai/codex/issues/22844) | Multiple platforms; browser/tools missing in remote |
| **Windows + WSL first-class support** | [#40700](https://github.com/openai/codex/issues/40700), [#41463](https://github.com/openai/codex/issues/41463), [#41088](https://github.com/openai/codex/issues/41088), [#41809](https://github.com/openai/codex/issues/41809) | Startup, path handling, sandbox command-line length |
| **Rate-limit / quota transparency** | [#41790](https://github.com/openai/codex/issues/41790), [#41810](https://github.com/openai/codex/issues/41810), [#41969](https://github.com/openai/codex/issues/41969), [#41520](https://github.com/openai/codex/issues/41520) | Pro/Plus/Pro Lite users hitting opaque limits |
| **GitHub connector completeness** | [#41433](https://github.com/openai/codex/issues/41433) | Core PR workflow (ready-for-review) broken |
| **Session/history persistence** | [#41995](https://github.com/openai/codex/issues/41995), [#42176](https://github.com/openai/codex/issues/42176), [#42177](https://github.com/openai/codex/issues/42177) | Notifications disappearing, cross-device sync loss |

---

## 6. Developer Pain Points (Recurring High-Frequency Frustrations)

1. **Windows Desktop reliability** — startup failures (`codex.exe` relocation), WSL path deserialization, sandbox command-line overflow, “Open in” menu latency. Multiple distinct regressions in recent builds.

2. **Remote Control fragility** — macOS resume broken (`active writer`), Windows+Android reconnect loops, missing browser/`node_repl` tooling on remote SSH. Mobile↔desktop handoff is a core workflow that keeps breaking.

3. **Opaque rate limiting** — “Model at capacity” errors interrupting long tasks, sudden quota depletion, `gpt-reserve` unavailable, no graceful recovery. Pro/Plus/Pro Lite users all affected; messaging is unclear.

4. **TUI visibility losses** — command collapsing hides executed commands (no opt-out), markdown links announced but not clickable. Developers feel the TUI is removing information they rely on.

5. **Connector/API mismatches** — GitHub connector using non-existent GraphQL field (`fullDatabaseId`); MCP approvals not scoped to account links. Eroding trust in built-in integrations.

6. **Session data loss** — scheduled notifications vanishing after pagination/reload, cross-device project chat desync, entire chat history disappearing on Windows. Persistence bugs feel like regressions.

---

*Generated from github.com/openai/codex data as of 2026-09-02. All links point to live GitHub items.*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

⚠️ Summary generation failed.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-09-02

## 1. Today's Highlights
Version **1.0.83-1** ships session-sidebar sorting (Recent, Created, Name) with persisted preferences and an enterprise `forceLoginOrgs` setting to pin sign-in to approved organizations. The community is actively debugging a cluster of **Node.js OOM crashes** on long-lived sessions (handle leaks, heap exhaustion) and **MCP protocol mismatches** that break initialization against modern servers. BYOK/custom-model regressions and Windows PowerShell ConstrainedLanguage friction round out the top pain points.

## 2. Releases
### v1.0.83-1 (2026-09-01)
| Category | Changes |
|---|---|
| **Added** | Split Sessions sidebar now supports **Recent, Created, Name, and classic None** sorting; selection persists across restarts. Enterprise admins can enforce sign-in to approved GitHub orgs via `forceLoginOrgs` managed setting. |
| **Improved** | `/mcp config` and MCP add/edit flows polished. |

---

## 3. Hot Issues (10 Noteworthy)

| # | Title | Why It Matters | Community Signal |
|---|---|---|---|
| [#13](https://github.com/github/copilot-cli/issues/13) | **CLI input should have a vi/vim input mode** | Long-standing request (75 👍) for modal editing in interactive CLI; now **closed** — likely shipped in recent builds. | 9 comments, 75 👍 |
| [#4664](https://github.com/github/copilot-cli/issues/4664) | **Copilot CLI crashes with JS heap OOM when resuming long-standing session** | Critical stability blocker: large sessions exhaust V8 heap on resume, preventing work continuation. | 5 comments |
| [#4686](https://github.com/github/copilot-cli/issues/4686) | **Node.js OOM after ~37 min — 31,965 leaked async libuv handles (SEA ignores NODE_OPTIONS)** | Fresh report of systemic handle leak in embedded Node (v24.20.0 SEA) causing predictable crashes; `NODE_OPTIONS` ignored. | 1 comment |
| [#4525](https://github.com/github/copilot-cli/issues/4525) | **1.0.81-1 sends legacy `initialize` after modern `server/discover`, causing -32022** | MCP protocol version mismatch: CLI falls back to legacy initialize after successful modern probe, breaking Python MCP SDK 2.0+ servers. | 4 comments |
| [#4438](https://github.com/github/copilot-cli/issues/4438) | **`disable-model-invocation: true` makes skill unreachable, not manual-only** | Skills marked model-invocation-disabled vanish from `skill()` tool entirely, defeating explicit slash invocation. | 3 comments, 6 👍 |
| [#4680](https://github.com/github/copilot-cli/issues/4680) | **CLI sends wrong model ID (`gpt-5.4-nano`) to custom OpenAI-compatible endpoint** | BYOK regression: configured non-OpenAI model name ignored; hard-coded fallback kills custom-provider sessions. | 2 comments |
| [#4672](https://github.com/github/copilot-cli/issues/4672) | **1.0.82 Regression: Unknown command: `/model` with BYOK** | `/model` CLI command broken when model set via env vars (Azure AI Foundry multi-model scenarios). | 2 comments, 1 👍 |
| [#3688](https://github.com/github/copilot-cli/issues/3688) | **Repository-level custom agents resolved relative to git root, but skills & `.mcp.json` relative to cwd** | Inconsistent base directories for three repo-scoped customization sources breaks portable configs. | 3 comments, 3 👍 |
| [#4688](https://github.com/github/copilot-cli/issues/4688) | **Subagent concurrency limiter is load-blind: parallel fleets saturate host and freeze UI** | Static concurrency counter ignores CPU pressure; fleet launches oversubscribe cores on laptops, stalling main CLI. | 0 comments (new) |
| [#4683](https://github.com/github/copilot-cli/issues/4683) | **Every shell command emits spurious error under PowerShell ConstrainedLanguage (AppLocker/WDAC)** | Enterprise Windows environments: `$host.SetShouldExit()` appended by CLI triggers permission errors on *every* shell call. | 1 comment (new) |

---

## 4. Key PR Progress
**No pull requests updated in the last 24 hours.**

---

## 5. Feature Request Trends
| Theme | Representative Issues | Signal |
|---|---|---|
| **Modal editing / vi keybindings** | #13 (closed, 75 👍) | Highest community demand; likely delivered. |
| **Session UX & persistence** | #13 (sidebar sorting), #3971 (repo-backed file tree), #4687 (instruction files lost on `/compact`) | Strong push for IDE-parity session management. |
| **MCP ecosystem maturity** | #4525, #3421, #4681, #4678, #4203 | Protocol versioning, OAuth refresh, Azure DevOps, startup timeouts. |
| **BYOK / custom model parity** | #4680, #4672, #4414 (closed) | Enterprises need first-class support for non-OpenAI endpoints. |
| **Skills & agent extensibility** | #4438, #4637, #4655 | Slash invocation, discovery, plugin-spec compliance. |
| **Enterprise governance** | `forceLoginOrgs` (released), #4683 (ConstrainedLanguage), #4682 (path-scoped approvals) | Admin controls & locked-down env compatibility. |

---

## 6. Developer Pain Points (Recurring Frustrations)

1. **Memory stability on long sessions** — Two independent OOM reports (#4664, #4686) with handle leaks in the SEA bundle; blocks multi-hour coding workflows.
2. **MCP integration fragility** — Protocol version skew (#4525), OAuth token refresh gaps (#4203), missing `User-Agent` on init (#4681), and 192 s startup hangs (#4678).
3. **BYOK/custom provider regressions** — Wrong model ID sent (#4680), `/model` CLI broken (#4672), local 403 before request leaves machine (#4414).
4. **Path-resolution inconsistency** — Git-root vs. cwd for agents/skills/MCP config (#3688) breaks monorepo and worktree setups.
5. **Windows enterprise friction** — PowerShell ConstrainedLanguage mode spam (#4683), sandbox `enabled: false` ignored (#4679), AppLocker/WDAC compatibility.
6. **Skills system bugs** — `disable-model-invocation` hides skills entirely (#4438), duplicate lookup noise (#4637), plugin agent discovery failing (#4655).
7. **Subagent resource management** — No load-aware throttling (#4688) causes CPU saturation and UI freezes.
8. **Context/compaction losses** — Repo instruction files (AGENTS.md, CLAUDE.md) dropped after `/compact` (#4687).

---

*Digest generated from github.com/github/copilot-cli data as of 2026-09-02 00:00 UTC.*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-09-02

## Today's Highlights
The project released **v1.50.0**, introducing a deprecation-aware update flow that guides users through a one-key migration from the legacy `kimi-cli` package to the new `Kimi Code` branding. The release also fixes an edge case in the `kosong` dependency where an empty `anthropic-beta` header was incorrectly sent. Two long-standing issues around task queuing and Task sub-task hangs were closed, signaling progress on core UX stability.

---

## Releases
### **v1.50.0** ([PR #2632](https://github.com/MoonshotAI/kimi-cli/pull/2632))
- **Migration flow**: New deprecation-aware shell update that detects CDN-published migration notices and drives a one-key migration to `Kimi Code` ([PR #2630](https://github.com/MoonshotAI/kimi-cli/pull/2630))
- **kosong fix**: Omit empty `anthropic-beta` header when no beta features are declared ([PR #2580](https://github.com/MoonshotAI/kimi-cli/pull/2580))
- **Dependency bump**: `kosong` updated to `0.56.0` ([PR #2581](https://github.com/MoonshotAI/kimi-cli/pull/2581))
- **Version sync**: `packages/kimi-code` wrapper version aligned with `kimi-cli==1.50.0` dependency pin

---

## Hot Issues
| Issue | Status | Why It Matters | Community Reaction |
|-------|--------|----------------|-------------------|
| [#1287](https://github.com/MoonshotAI/kimi-cli/issues/1287) — *Unable to write next task prompt while current task executes* | **Closed** | Blocks sequential workflow; users cannot queue or prepare follow-up prompts during long-running tasks. | 1 comment, 0 👍 — Low visibility but high workflow impact. |
| [#1292](https://github.com/MoonshotAI/kimi-cli/issues/1292) — *Task sub-task calls sometimes hang* | **Closed** | Intermittent hangs in `Task` tool (sub-agent delegation) break reliability of multi-step automation. | 0 comments, 0 👍 — Reported on v1.16.0 (Darwin arm64); likely fixed in later releases. |

---

## Key PR Progress
| PR | Status | Summary |
|----|--------|---------|
| [#2630](https://github.com/MoonshotAI/kimi-cli/pull/2630) | **Closed** | **feat(shell)**: Deprecation-aware update flow with one-key migration to Kimi Code. Reads `migration.json` from CDN and automates package rename + config migration. |
| [#2632](https://github.com/MoonshotAI/kimi-cli/pull/2632) | **Closed** | **chore(release)**: Bumps CLI to 1.50.0, moves release notes, syncs wrapper package version. |
| [#2614](https://github.com/MoonshotAI/kimi-cli/pull/2614) | **Open** | **docs(plugins)**: Documents security model and persistent data handling for plugin contract (`plugin.json`, command tools, `inject`, `~/.kimi/plugins/`). |
| [#742](https://github.com/MoonshotAI/kimi-cli/pull/742) | **Closed** | **feat**: Add `$ list skills` command (Codex parity). Closed without merge — likely superseded or deferred. |

---

## Feature Request Trends
From the limited recent issue activity, two clear directions emerge:
1. **Task/queue orchestration** — Users want non-blocking prompt input during task execution (issue #1287), suggesting demand for a **task queue or background execution model**.
2. **Sub-task reliability** — The `Task` tool hang (#1292) points to a need for **better observability and timeout/retry semantics** in agent delegation.

---

## Developer Pain Points
- **Blocking UX during long tasks** — Inability to prepare the next prompt while a task runs forces idle waiting (issue #1287).
- **Flaky sub-agent delegation** — `Task` tool hangs without clear error surfacing, making complex multi-agent flows unreliable (issue #1292).
- **Migration friction** — The v1.50.0 migration flow acknowledges that the `kimi-cli` → `Kimi Code` transition has been a source of confusion, now addressed with automated one-key migration.

---

*Data sourced from `github.com/MoonshotAI/kimi-cli` — releases, issues, and PRs updated in the last 24 hours.*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

⚠️ Summary generation failed.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-09-02

## Today's Highlights
No new releases in the last 24 hours, but the project saw intense issue triage and PR activity across provider compatibility, TUI polish, and extension APIs. The community closed 50+ issues and merged 20 PRs, with major fixes landing for Gemini 3.x tool calls, HTTP proxy handling, subagent model overrides, and XDG Base Directory compliance. Several high-impact bugs around session management, credential locking, and RPC compaction remain open.

---

## Releases
*None in the last 24h.*

---

## Hot Issues (Top 10 by Impact & Community Signal)

| # | Issue | Why It Matters | Community Reaction |
|---|-------|----------------|-------------------|
| [#2870](https://github.com/earendil-works/pi/issues/2870) | **Follow XDG Base Directory** | Fixes config clutter in `$HOME`; aligns with Linux standards. | **54 👍, 21 comments** — highest engagement; closed with fix. |
| [#4338](https://github.com/earendil-works/pi/issues/4338) | **Agent stuck “working” with no progress** | Core UX blocker: agent loops silently, requiring session restart. | 2 👍, 8 comments; closed as “weekend/refactor” — likely addressed in recent refactors. |
| [#5931](https://github.com/earendil-works/pi/issues/5931) | **Copy-paste adds extra spaces/line breaks** | Breaks workflow for developers copying code/output from TUI. | 1 👍, 8 comments; closed “no-action” — may need revisit. |
| [#6996](https://github.com/earendil-works/pi/issues/6996) | **Gemini 3.x fails on tool use (missing `thought_signature`)** | Blocks newest Google models; regression in tool-call history. | 7 comments; **open** — active blocker for Gemini 3.5/3.6 users. |
| [#8134](https://github.com/earendil-works/pi/issues/8134) | **Agent hangs after first tool call via HTTP proxy** | Breaks enterprise/proxied setups since v0.84.0. | 6 comments; **open** — critical for corporate environments. |
| [#6374](https://github.com/earendil-works/pi/issues/6374) | **Model catalog reasoning-level metadata errors** | Affects model selection accuracy across providers. | 1 👍, 5 comments; closed with fixes. |
| [#8938](https://github.com/earendil-works/pi/issues/8938) | **Wide short inline images stretched vertically** | TUI rendering bug for non-square images (new, 2026-09-01). | 3 comments; **open** — visual regression. |
| [#8973](https://github.com/earendil-works/pi/issues/8973) | **Grok 4.6 re-issues identical tool call endlessly** | Infinite loop on tool results; regression in xAI Responses routing (v0.84.3). | 2 comments; closed — fix likely in `#8941`. |
| [#8920](https://github.com/earendil-works/pi/issues/8920) | **RPC `abort` lies: returns success but compaction continues** | Breaks automation relying on abort semantics. | 2 comments; **open** — session-state integrity issue. |
| [#8939](https://github.com/earendil-works/pi/issues/8939) | **Session file deleted mid-run recreated without header; resume fails** | Data-loss risk: corrupt session files on crash/interrupt. | 2 comments; closed “no-action” — may need stronger guarantee. |

---

## Key PR Progress (10 Most Impactful)

| # | PR | Type | Summary |
|---|----|------|---------|
| [#8969](https://github.com/earendil-works/pi/pull/8969) | **feat** | Subagent tool now accepts `model` and `thinking` overrides at dispatch time — enables cheap scout / heavy planner patterns. |
| [#8966](https://github.com/earendil-works/pi/pull/8966) | **fix** | `--provider` without `--model` now selects provider’s default; auth failures name the failing provider. |
| [#8898](https://github.com/earendil-works/pi/pull/8898) | **fix** | Wraps `SIGWINCH` self-signal so restricted `seccomp` policies don’t crash TUI (fixes #8897). |
| [#8941](https://github.com/earendil-works/pi/pull/8941) | **fix** | Adds `supportsMaxOutputTokens` compat flag for OpenAI Responses — unblocks Codex-protocol proxies rejecting the param. |
| [#8957](https://github.com/earendil-works/pi/pull/8957) | **fix** | Wraps UI prompt context to prevent prototype loss — stabilizes extension host. |
| [#8950](https://github.com/earendil-works/pi/pull/8950) | **fix** | Keeps theme markers visible in TUI selections (follow-up to #8900). |
| [#8951](https://github.com/earendil-works/pi/pull/8951) | **feat** | Hides headless/RPC/subagent sessions from `/resume` picker by default — reduces noise. |
| [#8737](https://github.com/earendil-works/pi/pull/8737) | **fix** | Proper `NO_PROXY` parsing: wildcards, bare domains, IPv6 (bracketed/unbracketed). |
| [#8900](https://github.com/earendil-works/pi/pull/8900) | **feat** | Two-column selection layout (`→ ✓ xhigh`) for `/thinking`, `/model`, `/scoped-model` — clearer active state. |
| [#8799](https://github.com/earendil-works/pi/pull/8799) | **feat** | Prettier “Working…” spinner in input border, matches thinking color, handles retry — **open**, polished UX. |

---

## Feature Request Trends
1. **Config/state separation** — Split `settings.json` into user-owned config + Pi-owned state (#4758, #2870).
2. **Provider auth flexibility** — First-class support for `CLAUDE_CODE_OAUTH_TOKEN` (#3591), Anthropic workspace IDs (#8948), and proxy-aware credential handling (#8737).
3. **Subagent granularity** — Per-invocation model/effort overrides (#8970, #8969) and fresh context windows without compaction (#8972).
4. **TUI layout control** — Optional whole-document scrolling (#8953), footer min-size=0 (#8919), image aspect-ratio preservation (#8938).
5. **Extension API maturity** — Callbacks for preflight results (#8975), documented `pi.setModel()` session-scoping (#8976), cwd-aware tool execution (#8627).

---

## Developer Pain Points (Recurring Frustrations)
- **Silent agent stalls** — “Working…” with zero output/logs (#4338, #8973 loop), often provider-specific.
- **Session fragility** — File deletion mid-run corrupts resume (#8939); headless sessions pollute resume picker (#8951).
- **Proxy/enterprise hostility** — HTTP providers + forward proxy = hang after first tool (#8134); `NO_PROXY` parsing broken (#8737); credential store lock contention under concurrency (#8927).
- **Model catalog opacity** — Providers vanish silently when API key missing (#8968); reasoning metadata wrong (#6374).
- **TUI copy/render bugs** — Extra whitespace on copy (#5931), image stretch (#8938), focus-in repaint failure (#8923), spinner UX (#8799).
- **RPC/automation gaps** — `abort` doesn’t cancel compaction (#8920); extension `renderResult` undefined crashes process (#8933); duplicate extension update ignored (#8971).

---

*Digest generated from `earendil-works/pi` GitHub activity (2026-09-01 → 2026-09-02). Links point to live issues/PRs.*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-09-02

---

## 1. Today's Highlights

The **OpenTUI migration** reached a major milestone with PR #10739 activating the new renderer behind `QWEN_TUI_RENDERER`, addressing the structural flicker/input-latency issues tracked in #8662 (17 comments). Simultaneously, the **CUA Driver v0.20.3** shipped prebuilt, notarized macOS binaries plus Linux/Windows payloads — unblocking desktop automation workflows. On the stability front, a cluster of `llama.cpp` grammar-parsing regressions (#10520, #10530) and a `permissions.allow` semantic shift (#10218) are disrupting local-model users on v0.22.3.

---

## 2. Releases

| Release | Key Changes |
|---------|-------------|
| **cua-driver-rs v0.20.3** ([GitHub](https://github.com/QwenLM/qwen-code/releases/tag/cua-driver-rs-v0.20.3)) | • **macOS**: codesigned + notarized universal binary + `QwenCuaDriver.app`<br>• **Linux**: unsigned x86_64/arm64 (glibc ≥ 2.31)<br>• **Windows**: unsigned UIAccess worker + native SDK (x86_64/arm64)<br>Vendored under `packages/cua-driver` for desktop automation integrations. |

---

## 3. Hot Issues (Top 10 by Impact & Discussion)

| Issue | Why It Matters | Community Signal |
|-------|----------------|------------------|
| **[#8662](https://github.com/QwenLM/qwen-code/issues/8662)** Migrate TUI from ink → OpenTUI (tracking) | 1037-line ink patch causing flicker, input latency, viewport corruption; blocks terminal UX roadmap | 17 comments, active migration batches (#10739 latest) |
| **[#10218](https://github.com/QwenLM/qwen-code/issues/10218)** `permissions.allow` semantic change breaks tool approval | v0.22.1+ treats `allow` as registry whitelist — uncovered tools *disabled without prompt*; undocumented, requires restart | 5 comments, P1, Windows users heavily affected |
| **[#10530](https://github.com/QwenLM/qwen-code/issues/10530)** 400 "failed to parse grammar" with Qwen 3.8/3.6 on llama.cpp | Regression in 0.22.3; Gemma 4 12B works; Pi/OpenCode unaffected — blocks local-model adopters | 5 comments, P2, multiple reproductions |
| **[#10520](https://github.com/QwenLM/qwen-code/issues/10520)** `toolSearch.threshold > 0` triggers llama.cpp grammar error | Same root cause as #10530 but specific to MCP tool search; threshold=0 works | 7 comments, **CLOSED** (likely fixed in-flight) |
| **[#10162](https://github.com/QwenLM/qwen-code/issues/10162)** ACP NDJSON queue saturation tears down channel | `qwen serve` fails closed on backpressure instead of degrading — kills active daemon sessions | 5 comments, P2, daemon reliability |
| **[#10710](https://github.com/QwenLM/qwen-code/issues/10710)** Session reload hides persisted assistant messages after mid-turn kill | Turn killed by queue limit (#10162) lacks terminal event; output *is persisted* but not restored | 4 comments, P2, web-shell + daemon |
| **[#10583](https://github.com/QwenLM/qwen-code/issues/10583)** Add Bubblewrap sandbox backend for Linux | Lightweight alternative to Docker/Podman; strong OS isolation without container runtime dependency | 4 comments, P2, security + Linux focus |
| **[#10400](https://github.com/QwenLM/qwen-code/issues/10400)** `tools.eager` key colliding with `Object.prototype` crashes `PermissionManager` | Edge case from #10098 decoupling; prototype pollution vector in config | 4 comments, P1, core stability |
| **[#2339](https://github.com/QwenLM/qwen-code/issues/2339)** Telegram Bot Mode (`--telegram` flag) | Long-standing feature request (3 👍); enables remote CLI interaction via messenger | 4 comments, community-driven |
| **[#10749](https://github.com/QwenLM/qwen-code/issues/10749)** TUI scroll loads old prompts into input instead of scrolling history | Basic navigation broken — mouse wheel/trackpad inserts prior commands | 3 comments, P2, UX regression |

---

## 4. Key PR Progress (High-Impact Merges & Open Work)

| PR | Status | Summary |
|----|--------|---------|
| **[#10739](https://github.com/QwenLM/qwen-code/pull/10739)** feat(opentui): Activate OpenTUI backend behind `QWEN_TUI_RENDERER` | OPEN | Batch 6 of ink→OpenTUI migration; backend bootable on Bun/Node with FFI; opt-in via env flag |
| **[#10617](https://github.com/QwenLM/qwen-code/pull/10617)** feat(qwen-live): ACP backend adaptor + multi-backend routing (M4) | OPEN | Voice daemon can now drive any ACP agent (`qwen --acp`, `claude-code-acp`, custom JSON-RPC) |
| **[#10183](https://github.com/QwenLM/qwen-code/pull/10183)** feat(memory): Structured on-demand recall | OPEN | Replaces flat prompt with push/pull protocol: ref/title tree, query-focused subtree, dedicated recall tool |
| **[#9590](https://github.com/QwenLM/qwen-code/pull/9590)** feat: Provider-aware reasoning controls | OPEN | DeepSeek V4, GLM 5.2, Kimi models get matched controls (toggle-only, effort tiers, mandatory thinking) |
| **[#10713](https://github.com/QwenLM/qwen-code/pull/10713)** feat(channels): Add `/btw` side questions to Channel conversations | OPEN | Extends interactive `/btw` to channels; validates auth, resolves task, returns correlation ID |
| **[#10752](https://github.com/QwenLM/qwen-code/pull/10752)** fix(core): Validate git pull options & detached HEAD | OPEN | Post-merge hardening for dirty-worktree git update; rejects invalid combos (`fetchOnly`+`stash`) |
| **[#10754](https://github.com/QwenLM/qwen-code/pull/10754)** fix(web-shell): Disable Push while branch behind upstream | OPEN | Closes sandboxed verification gaps from #10397; adds upstream-ahead guard |
| **[#10732](https://github.com/QwenLM/qwen-code/pull/10732)** fix(serve): Prevent `[object Object]` log degradation | OPEN | Handles non-Error rejections (bare JSON-RPC error objects) in prompt-turn failure logging |
| **[#10575](https://github.com/QwenLM/qwen-code/pull/10575)** ci: Give seconds-long jobs dedicated `ecs-light` lane | OPEN | Moves 8 fast jobs off `ecs-qwen` pool; reduces release critical-path contention |
| **[#10672](https://github.com/QwenLM/qwen-code/pull/10672)** fix(vscode): Raise webview bundle test timeout on ECS runners | OPEN | 60s on self-hosted ECS, 15s elsewhere; matches existing pattern in core/cli |

---

## 5. Feature Request Trends

| Direction | Evidence (Issues/PRs) |
|-----------|----------------------|
| **Terminal UX modernization** | OpenTUI migration (#8662, #10739, #10728), scroll/rendering fixes (#7713, #10749, #10718), rewind anchoring (#9466) |
| **Daemon / Web Shell session resilience** | Queue backpressure handling (#10162, #10710), turn navigation (#10750), artifact snapshots (#10639, #10747), scheduled-task titles (#10717) |
| **Lightweight sandboxing** | Bubblewrap backend request (#10583), Docker/Podman alternative for Linux |
| **Multi-backend / multi-agent orchestration** | ACP adaptor routing (#10617), Agent Board sharing (#9402), `/btw` side questions in channels (#10711, #10713) |
| **Provider-aware model controls** | Reasoning tiers per provider (#9590), memory recall protocol (#10183) |
| **Platform integrations** | Telegram bot mode (#2339), DingTalk interactive permission cards (#10457) |
| **CI/CD velocity** | ECS lane splitting (#10575), test stabilization (#10758, #10672), review-run salvage (#10123) |

---

## 6. Developer Pain Points (Recurring Frustrations)

| Pain Point | Frequency | Representative Items |
|------------|-----------|----------------------|
| **Local-model compatibility regressions** | High (3+ issues in 24h) | #10520, #10530, #4711 — grammar parsing, body timeouts, threshold config breaking llama.cpp |
| **Undocumented/breaking config changes** | High | #10218 — `permissions.allow` semantic flip (allowlist → registry whitelist) without docs or migration path |
| **Daemon session data loss on failure** | Medium | #10162 (queue saturation kills channel), #10710 (killed turns hide persisted output), #10732 (opaque error logs) |
| **TUI usability basics broken** | Medium | #10749 (scroll → input pollution), #7713 (prompt line off-by-one scroll), #10718 (Ctrl+C banner overflow) |
| **Extension install silent failures** | Medium | #10741, #10742 — `.zip` URL installs exit 0 with no output on Windows |
| **CI flakiness blocking releases** | Medium | #10734 (CPU-time vs wall-clock budget mismatch), #10422 (Quality Checks 44 min critical path), #10758 (fontless host test) |
| **Missing observability for tool permissions** | Low-Medium | #10457 (DingTalk cards), #10218 (no prompt for denied tools), #10745 (editor option shown when unavailable) |

---

*Digest generated from GitHub data as of 2026-09-02. Links point to live issues/PRs on github.com/QwenLM/qwen-code.*

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-09-02

---

## 1. Today's Highlights
The project shipped a coordinated **"0.9.12 shell wave slice"** — seven PRs (#5810–#5816) landing together that overhaul settings, fleet/model management, fullscreen/inline modes, diff rendering, ANSI color preservation, the session info line, and goal persistence across host restarts. Simultaneously, 28 stale issues were closed (mostly `needs-info` bugs and completed follow-ups), clearing the backlog. One new feature request opened: native **OpenDesign (nexu-io/open-design)** compatibility via MCP today, native runtime adapter upstream (#5806).

---

## 2. Releases
*No new releases in the last 24 hours.*

---

## 3. Hot Issues (10 Noteworthy)

| # | Title | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#5806](https://github.com/Hmbown/CodeWhale/issues/5806) | **feat: OpenDesign compatibility — MCP today, native runtime adapter upstream** | Opens integration with a 93k★ design-studio CLI that turns coding agents into design engines (prototypes, decks, DESIGN.md, HTML/PDF/PPTX/MP4 export). Strategic upstream partnership. | 🆕 OPEN, 0 comments — fresh strategic request |
| [#5778](https://github.com/Hmbown/CodeWhale/issues/5778) | **Native ChatGPT/Codex subscription sign-in without Codex CLI** | Removes hard dependency on `~/.codex/auth.json`; enables PKCE browser flow for `openai-codex` route. Unblocks users who don’t want Codex CLI installed. | ✅ CLOSED via [#5784](https://github.com/Hmbown/CodeWhale/pull/5784) (merged) |
| [#5519](https://github.com/Hmbown/CodeWhale/issues/5519) | **Web: isZh migration losing ground — add one-way ceiling** | i18n tech debt: `locale === "zh"` branches grew from 12→31 files in 90 days. Ceiling test (max 28) now enforced to force convergence. | ✅ CLOSED via [#5805](https://github.com/Hmbown/CodeWhale/pull/5805) (merged) |
| [#5759](https://github.com/Hmbown/CodeWhale/issues/5759) | **Keep MCP boot diagnostics out of chat transcript** | Failed MCP servers spam raw errors above composer, obscuring conversation. Fix: move diagnostics to dedicated surface, keep chat clean. | ✅ CLOSED (merged) |
| [#5522](https://github.com/Hmbown/CodeWhale/issues/5522) | **v0.9.10: make first run progressive instead of front-loading configuration** | Non-English users hit English telemetry disclosure + settings wall before useful work. Progressive onboarding now accepted for release. | ✅ CLOSED (merged) |
| [#4720](https://github.com/Hmbown/CodeWhale/issues/4720) | **Provider/model setup and auto-switching feel under-baked** | Runtime silently switched `deepseek → zai` (model `deepseek-v4-pro → GLM-5.2`) without clear surfacing. Audit of when/why switches occur. | ✅ CLOSED (audit complete) |
| [#4394](https://github.com/Hmbown/CodeWhale/issues/4394) | **Compaction: publish and enforce a structured survival contract** | Compaction has cache-aligned summaries, retries, pruning — but no explicit contract for what survives compaction. Now formalized. | ✅ CLOSED (contract published) |
| [#2535](https://github.com/Hmbown/CodeWhale/issues/2535) | **ACP+MCP 支持 & exec 模式流式输出 + 角色分离** | ACP mode cannot use MCP tools (mutually exclusive flags). Blockers for Feishu IM / custom chat UIs needing tool use via ACP. | ✅ CLOSED (design resolved) |
| [#1330](https://github.com/Hmbown/CodeWhale/issues/1330) | **Zenmux as primary provider for Deepseek-V4-Pro & Flash** | First-class ZenMux integration (vs. generic OpenAI-compatible override). High-demand provider for flagship models. | ✅ CLOSED (integrated) |
| [#3751](https://github.com/Hmbown/CodeWhale/issues/3751) | **Neuralwatt Provider** | Popular non-token-based pricing (GLM 5.2). Request for native provider support. | ✅ CLOSED (provider added) |

---

## 4. Key PR Progress (10 Important)

| PR | Status | Summary |
|----|--------|---------|
| [#5816](https://github.com/Hmbown/CodeWhale/pull/5816) | OPEN | **Runtime API: rehydrate persisted goals & host-managed continuation loop** — `PUT /v1/threads/{id}/goal` now injects goal into cached engine and dispatches kickoff turn while idle (previously only persisted). |
| [#5815](https://github.com/Hmbown/CodeWhale/pull/5815) | OPEN | **Fleet: your fleet = models you added, comes first** — `⇧F` in `/model` adds/removes exact route (provider+model) to fleet; fleet models pinned at top of picker. |
| [#5814](https://github.com/Hmbown/CodeWhale/pull/5814) | OPEN | **TUI: `/fullscreen` and `/inline` switch screen at runtime** — `/inline` uses `Viewport::Inline` (no alt screen, shell scrollback survives); `/fullscreen` returns to alt-screen mode. |
| [#5813](https://github.com/Hmbown/CodeWhale/pull/5813) | OPEN | **TUI: diff cards emphasize changed words within a line** — word-level bold+reverse highlight on replaced lines (rendering wave R5). |
| [#5812](https://github.com/Hmbown/CodeWhale/pull/5812) | OPEN | **TUI: tool output keeps its colours** — ANSI colour preserved in shell tool output (`cargo`, `git`, PTY) instead of stripping (rendering wave R4). |
| [#5811](https://github.com/Hmbown/CodeWhale/pull/5811) | OPEN | **TUI: honest info line lives under composer** — single-row session facts (`owner/repo · branch · model · context%`) now last row under posture row; nothing paints above transcript. |
| [#5810](https://github.com/Hmbown/CodeWhale/pull/5810) | OPEN | **Settings: one schema; `/settings` is its projection** — tabs + groups column (≥100 col), label+value rows, description band, preview line; every row has a sentence behind it. |
| [#5784](https://github.com/Hmbown/CodeWhale/pull/5784) | MERGED | **Native ChatGPT PKCE sign-in for `openai-codex`** — browser PKCE with localhost callback, refreshable tokens in CodeWhale-owned storage (mirrors xAI device flow). |
| [#5805](https://github.com/Hmbown/CodeWhale/pull/5805) | MERGED | **Web i18n: one-way ceiling on `isZh` branching** — vitest gate: files branching on `isZh` outside `web/lib/i18n` ≤ 28 (today’s count); ratchets down as migration progresses. |
| [#5799](https://github.com/Hmbown/CodeWhale/pull/5799) | MERGED | **TUI: tool cells carry their own state** — running/failed/warned tools render with state-driven borders (like oh-my-pi output blocks); fixes `wrap_card_rail` using `Span::raw`. |

---

## 5. Feature Request Trends
1. **Provider diversification & first-class integrations** — ZenMux (#1330), Neuralwatt (#3751), OpenDesign (#5806), native `openai-codex` PKCE (#5778). Users want curated, zero-config access to flagship models and emerging platforms.
2. **ACP + MCP unification** — ACP transport currently excludes MCP tools (#2535); demand for `serve --acp` to auto-load `.cursor/mcp.json` like `exec --auto`.
3. **Progressive onboarding & reduced first-run friction** — Telemetry disclosure, settings wall, key hints all front-loaded (#5522); shift to “start in selected/default mode, configure later.”
4. **Fleet/model ownership UX** — “Your fleet = models you added, comes first” (#5815); explicit add/remove via `⇧F`, pinned at picker top.
5. **Runtime transparency** — Provider auto-switching audit (#4720), compaction survival contract (#4394), goal persistence across restarts (#5816).

---

## 6. Developer Pain Points (Recurring)
| Pain Point | Evidence |
|------------|----------|
| **Flaky tests under parallel CI load** | #5605 (`remote_control` predispatch crash), #5735 (`runtime_chat_relay` owner-lock conflict) — both “full-suite/parallel-load flake” class. |
| **Provider connection fragility** | #4956 (WSL2 network error), #4720 (silent auto-switch), #5807 (bundled model catalog TTL 10 yr → stale forever). |
| **Windows CLI flag parsing** | #4564: `--model`/`--toolsets` before `exec` consumed as single concatenated arg on Windows npm global install. |
| **Slash command performance regression** | #4568: `/xxx` commands noticeably slower vs. previous version (Windows 10). |
| **MCP diagnostic noise in chat** | #5759: disconnected MCP servers print raw failure detail above composer, obscuring conversation. |
| **Configuration front-loading** | #5522: non-English users hit English telemetry + settings wall before first useful action. |
| **Stale bundled model catalog** | #5807: July 6 snapshot presented as current forever (TTL 10 yr, no staleness check on bundled path). |

---

*Data source: `github.com/Hmbown/DeepSeek-TUI` (mirrored as `Hmbown/CodeWhale` in issue/PR URLs). Digest covers activity updated 2026-09-01 → 2026-09-02.*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/DenisZheng/agents-radar).*