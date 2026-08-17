# OpenClaw Ecosystem Digest 2026-08-17

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-08-17 00:53 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [PicoClaw](https://github.com/sipeed/picoclaw)
- [NanoClaw](https://github.com/qwibitai/nanoclaw)
- [NullClaw](https://github.com/nullclaw/nullclaw)
- [IronClaw](https://github.com/nearai/ironclaw)
- [LobsterAI](https://github.com/netease-youdao/LobsterAI)
- [TinyClaw](https://github.com/TinyAGI/tinyagi)
- [Moltis](https://github.com/moltis-org/moltis)
- [CoPaw](https://github.com/agentscope-ai/CoPaw)
- [ZeptoClaw](https://github.com/qhkm/zeptoclaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## OpenClaw Deep Dive

# OpenClaw Project Digest — 2026-08-17

## 1. Today's Overview

OpenClaw shows **extremely high velocity** with 500 issues and 500 PRs updated in the last 24 hours — a 1:1 issue-to-PR ratio suggesting active triage and remediation cycles. The 460 open/active issues (92% of updated) indicate a substantial backlog, while 106 merged/closed PRs (21% of PR activity) show meaningful throughput. The single release (PR #124528) is a performance profiling artifact rather than a user-facing version. Priority distribution skews heavily toward **P1** (critical reliability: message loss, session state corruption, delivery failures) across channels (Telegram, WhatsApp, Feishu, Discord) and core subsystems (gateway event loop, subagent orchestration, memory system). The project is in a **stabilization phase** — fixing regressions from recent releases (2026.3.x–2026.6.x) rather than shipping new features.

---

## 2. Releases

### PR #124528 — Gateway Profile Evidence (Profiling Artifact)
- **Type**: Performance benchmarking data, not a semantic version release
- **Content**: CPU profiles from a bounded 3-node, 12-concurrent-turn Gateway rig comparing before/after event-loop hotspots for PR #124528
- **Purpose**: Evidence for event-loop optimization validation
- **Migration notes**: None — internal profiling data
- **Link**: [openclaw/openclaw#124528](https://github.com/openclaw/openclaw/issues/124528)

> **No user-facing version released today.** The project appears to be between stable releases, with maintainers focused on regression fixes.

---

## 3. Project Progress — Merged/Closed PRs (106 today)

Key merged fixes advancing stability:

| PR | Area | Fix Summary | Link |
|----|------|-------------|------|
| #124837 | Channels | Route targetless DM replies to sender (fixes Reef direct-message misrouting) | [#124837](https://github.com/openclaw/openclaw/pull/124837) |
| #124838 | Media | Bound image-optimize fetch headroom to attachment cap (prevents 100MB buffer bloat on 5MB-capped channels) | [#124838](https://github.com/openclaw/openclaw/pull/124838) |
| #124791 | Runners | Align `sessions.reclaim` results with runtime (fixes protocol mismatch: `local` vs `reclaimed`) | [#124791](https://github.com/openclaw/openclaw/pull/124791) |
| #124823 | CI | Render only aggregate QA evidence (fixes strict-input validation rejecting valid payloads) | [#124823](https://github.com/openclaw/openclaw/pull/124823) |
| #124824 | Web UI | Show session changes in Review panel (fixes empty-state bug) | [#124824](https://github.com/openclaw/openclaw/pull/124824) |
| #124814 | Web UI | Fix light-theme diff syntax readability | [#124814](https://github.com/openclaw/openclaw/pull/124814) |
| #124810 | Tools | Prompt proactive widget use in Discord (front-loads `show_widget` guidance) | [#124810](https://github.com/openclaw/openclaw/pull/124810) |
| #124808 | Validation | Type producers, drop internal re-validation (reduces duplicated runtime checks) | [#124808](https://github.com/openclaw/openclaw/pull/124808) |
| #124695 | i18n | Refresh native app locales (Android/iOS/macOS) | [#124695](https://github.com/openclaw/openclaw/pull/124695) |
| #124715 | i18n | Refresh Control UI locales | [#124715](https://github.com/openclaw/openclaw/pull/124715) |

**Pattern**: Most merges are **small, targeted fixes** (size XS–M) for UI polish, protocol alignment, and validation hygiene — not major features. Several carry `merge-risk: 🚨 compatibility` labels, indicating careful gating.

---

## 4. Community Hot Topics — Most Active Issues/PRs

### Top 5 Issues by Comment Count (Deep-Dive)

| Issue | Comments | Priority | Core Problem | Link |
|-------|----------|----------|--------------|------|
| **#121058** | 97 | P1 | **Silent reply failures recurring** after #116277 closed — monitoring cron still logs new occurrences (latest 2026-08-09). No queued reply payload. | [#121058](https://github.com/openclaw/openclaw/issues/121058) |
| **#44925** | 31 | P1 | **Subagent completion silently lost** — no retry, notification, or auto-restart on timeout. Multiple failure modes (E31, E42, E45). | [#44925](https://github.com/openclaw/openclaw/issues/44925) |
| **#42475** | 26 | P2 | **Per-agent cost budget enforcement** at gateway level — feature request to prevent runaway spend. | [#42475](https://github.com/openclaw/openclaw/issues/42475) |
| **#48003** | 21 | P1 | **Steer mode doesn't inject messages mid-turn** — messages queued until turn completes instead of steering at tool boundaries. Root cause: `KeyedAsyncQueue` commit 9889c6da5. | [#48003](https://github.com/openclaw/openclaw/issues/48003) |
| **#22438** | 19 | P2 | **Tiered bootstrap file loading** for progressive context control — large workspaces waste tokens loading unused files. | [#22438](https://github.com/openclaw/openclaw/issues/22438) |

### Underlying Needs Analysis
1. **Reliability over features**: Top issues are all **P1 message/session-state loss** — users experience silent failures (replies not delivered, subagent results lost, steer mode broken).
2. **Observability gaps**: Issues #121058 and #44925 reveal **no visibility** into failure modes — monitoring cron catches what the system doesn't surface.
3. **Architectural debt**: #48003 (steer mode) and #22438 (bootstrap loading) point to **core scheduling/context-model limitations** affecting all channels.
4. **Operational maturity**: #42475 (cost budgets) signals production operators need **governance controls** missing from the platform.

---

## 5. Bugs & Stability — Ranked by Severity

### Critical (P1, Message/Session Loss, Active Regression)

| Issue | Severity | Symptoms | Fix PR? | Link |
|-------|----------|----------|---------|------|
| **#121058** | 🔴 **Critical** | Silent reply failures **recurring after fix closed** — monitoring shows new occurrences daily. No payload queued. | ❌ No fix PR linked | [#121058](https://github.com/openclaw/openclaw/issues/121058) |
| **#44925** | 🔴 **Critical** | Subagent completions **silently lost** (E31/E42/E45) — no retry, no notification, no auto-restart. | ❌ `clawsweeper:no-new-fix-pr` | [#44925](https://github.com/openclaw/openclaw/issues/44925) |
| **#87744** | 🔴 **Critical** | Codex-backed Telegram turns **timeout waiting for `turn/completed`** — work done but no terminal state (since 2026.5.27). | ❌ `clawsweeper:no-new-fix-pr` | [#87744](https://github.com/openclaw/openclaw/issues/87744) |
| **#96834** | 🔴 **Critical** | WhatsApp 1:1 **inbound image wedges main lane ~3min** — multimodal run strands active work (post-#95039). | ❌ `clawsweeper:no-new-fix-pr` | [#96834](https://github.com/openclaw/openclaw/issues/96834) |
| **#115908** | 🔴 **Critical** | Session transcript projection **livelocks under sustained writes**, blocking main thread & stalling all transports. | ❌ `clawsweeper:source-repro` only | [#115908](https://github.com/openclaw/openclaw/issues/115908) |
| **#112423** | 🔴 **Critical** | Large SQLite transcript cleanup **blocks gateway event loop** — full materialization/compression on main thread. | ❌ `clawsweeper:no-new-fix-pr` | [#112423](https://github.com/openclaw/openclaw/issues/112423) |
| **#87561** | 🔴 **Critical** | **No durable final fallback delivery semantics** — channels suppress/drop final payloads, users see silence. | ❌ `clawsweeper:no-new-fix-pr` | [#87561](https://github.com/openclaw/openclaw/issues/87561) |
| **#100941** | 🔴 **Critical** | Gateway **drops concurrent tool-to-gateway WS connections (1006)** under parallel fan-out (~48 concurrent). | ❌ `clawsweeper:no-new-fix-pr` | [#100941](https://github.com/openclaw/openclaw/issues/100941) |

### High (P1/P2, State Corruption, Crashes)

| Issue | Severity | Symptoms | Fix PR? | Link |
|-------|----------|----------|---------|------|
| **#38327** | 🟠 High | `"Cannot convert undefined or null to object"` with `google-vertex/gemini-3.1-pro-preview` (regression 2026.3.2). | ❌ `clawsweeper:no-new-fix-pr` | [#38327](https://github.com/openclaw/openclaw/issues/38327) |
| **#74586** | 🟠 High | AM embedded run **aborts `memory_search`**, classifies as timeout despite model completion. | ❌ `clawsweeper:no-new-fix-pr` | [#74586](https://github.com/openclaw/openclaw/issues/74586) |
| **#53408** | 🟠 High | `write`/`exec` tool params **silently dropped after long conversations** (15+ turns). | ❌ `clawsweeper:no-new-fix-pr` | [#53408](https://github.com/openclaw/openclaw/issues/53408) |
| **#97616** | 🟠 High | **Leaks unreaped hook/tool child processes** → zombie accumulation & runtime degradation. | ❌ `clawsweeper:no-new-fix-pr` | [#97616](https://github.com/openclaw/openclaw/issues/97616) |
| **#46786** | 🟠 High | `tools.elevated.enabled: true` **breaks exec routing** — all exec calls route to gateway host, not sandbox. | ❌ `clawsweeper:no-new-fix-pr` | [#46786](https://github.com/openclaw/openclaw/issues/46786) |
| **#117609** | 🟠 High | Transient LLM/socket errors **not retried at embedded-assistant stage** — long turns die whole. | ❌ `clawsweeper:no-new-fix-pr` | [#117609](https://github.com/openclaw/openclaw/issues/117609) |
| **#90361** | 🟠 High | Intermittent `memory_search` **"index metadata is missing"** despite valid index — search/reindex race. | ❌ `clawsweeper:no-new-fix-pr` | [#90361](https://github.com/openclaw/openclaw/issues/90361) |

### Notable Fix PRs in Progress
- **#124947** — Fix: plugin tools disappear from Codex/restricted profiles (plugin snapshot dropped before dynamic-tool construction) — *waiting on author*
- **#124910** — Fix: deliver requested image artifacts across agent runtimes (users get completed reply but no attached image) — *waiting on author*
- **#124773** — Fix: report settled delivery outcomes once (reply visibility inferred from queued admissions, inconsistently repaired) — *waiting on author*
- **#115138** — Perf: memory-map reads on local SQLite databases (fixes event-loop blocking on disk I/O) — *ready for maintainer look*
- **#124308** — Fix: skip gateway port-release assertion when stopping node-host LaunchAgent (false-positive collision guard) — *waiting on author*

---

## 6. Feature Requests & Roadmap Signals

### High-Signal Requests (P1/P2, Maintainer-Tagged, Community Interest)

| Issue | Request | Priority | Signals | Likelihood (Next Version) |
|-------|---------|----------|---------|---------------------------|
| **#42475** | Per-agent cost budget enforcement at gateway | P2 | 👍1, `clawsweeper:linked-pr-open`, operator need | 🟡 Medium — PR linked but needs product decision |
| **#22438** | Tiered bootstrap file loading (progressive context) | P2 | 19 comments, `clawsweeper:linked-pr-open` | 🟡 Medium — architectural, may need design review |
| **#6757** | Agent-triggered context compaction (self-compact tool) | P2 | 9 comments, filed by agent autonomously! | 🟢 High — unique "dogfooding" signal, low risk |
| **#88154** | Slack Modal support for interactive workflows | P2 | 8 comments, clear UX value | 🟡 Medium — channel-specific, needs design |
| **#45508** | Self-hosted STT/TTS provider support in WebChat | P2 | 8 comments, 👍2, ignores `openclaw.json` config | 🟡 Medium — plugin SDK work may unblock |
| **#45565** | Route gateway lifecycle warnings to dedicated channel | P2 | 8 comments, 👍1, noise reduction | 🟢 High — simple config, high operator value |
| **#95553** | Preflight compaction hard-capped at ~60s, ignores `compaction.timeoutSeconds` | P1 | 8 comments, 👍2, config ignored | 🟢 High — clear bug in config handling |
| **#48709** | Gemini 2.5 Pro: textSignature bloat + think tags + mixed text/tool | P2 | 6 comments, session failures | 🟡 Medium — provider-specific, may need upstream fix |

### Roadmap Prediction
**Next version (likely 2026.8.x or 2026.9.x) will prioritize:**
1. **Stability triage**: Fix the P1 silent-failure cluster (#121058, #44925, #87744, #96834, #115908)
2. **Config honor**: Fix ignored timeouts (#95553), routing bugs (#46786), WebChat provider config (#45508)
3. **Operator tooling**: Cost budgets (#42475), dedicated warning channel (#45565), self-compact (#6757)
4. **Performance**: SQLite mmap (#115

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: Personal AI Assistant / Agent Open-Source Ecosystem
**Date:** 2026-08-17 | **Scope:** 12 projects from GitHub community digests

---

## 1. Ecosystem Overview

The personal AI agent open-source landscape is bifurcating into **two distinct tiers**: a handful of high-velocity "platform" projects (OpenClaw, ZeroClaw, NanoBot, Hermes Agent, NanoClaw) operating at 50–500+ daily issue/PR updates with dedicated core teams, and a larger group of "specialist" projects (PicoClaw, IronClaw, LobsterAI, Moltis, CoPaw) maintaining steady 5–20 item cadences with focused feature sets. Three projects (NullClaw, TinyClaw, ZeptoClaw) show zero recent activity. The ecosystem is in a **consolidation phase**—platform projects are fixing regressions from rapid 2026 H1 feature shipping, while specialists harden security, improve UX, and expand protocol support (MCP, ACP, OpenAI Chat Completions). No project released a user-facing version today; all are between stable cuts.

---

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Merged/Closed PRs | Release Today | Health Score* |
|---------|--------------|-----------|-------------------|---------------|---------------|
| **OpenClaw** | 500 | 500 | 106 | No (profiling artifact only) | 🟡 Stabilizing |
| **ZeroClaw** | 48 | 50 | 4 | No | 🟡 RFC-heavy |
| **NanoBot** | 15 | 500 | 1 | No | 🟠 Conflict backlog |
| **Hermes Agent** | 50 | 50 | 3 | **Yes** (v0.20.2 patch) | 🟢 Active |
| **NanoClaw** | 1 | 19 | 13 | No | 🟢 Strong core velocity |
| **Moltis** | 3 | 8 | 8 | No | 🟢 Healthy |
| **CoPaw** | 9 | 9 | 0 | No | 🟡 Review bottleneck |
| **LobsterAI** | 10 | 17 | 9 | No | 🟡 Caution |
| **PicoClaw** | 3 | 5 | 1 | No | 🟢 Steady |
| **IronClaw** | 1 | 9 | 2 | No | 🟢 Stable |
| **NullClaw** | 0 | 0 | 0 | No | 🔴 Inactive |
| **TinyClaw** | 0 | 0 | 0 | No | 🔴 Inactive |
| **ZeptoClaw** | 0 | 0 | 0 | No | 🔴 Inactive |

*Health Score: 🟢 = active merges + clear direction; 🟡 = high activity but integration/regression risks; 🟠 = structural bottlenecks; 🔴 = no recent activity.*

---

## 3. OpenClaw's Position

**Advantages vs Peers:**
- **Scale of operation**: 10× issue/PR volume of next project (ZeroClaw); only project with triple-digit daily merges
- **Multi-channel maturity**: Production-grade Telegram, WhatsApp, Feishu, Discord, Slack support with dedicated gateway event-loop optimization
- **Observability investment**: Monitoring cron detecting silent failures (#121058) that other projects only discover via user reports
- **Subagent orchestration**: Explicit orchestration layer with completion tracking, retry, and timeout semantics (though currently broken per #44925)

**Technical Approach Differences:**
- **Gateway-centric architecture**: Centralized event loop, session projection, and delivery pipeline vs. NanoClaw's channel-adapter registry or Hermes' multi-profile design
- **Stabilization-over-features**: 92% of updated issues are P1 regressions from 2026.3.x–2026.6.x releases; peers are still shipping features
- **Compatibility gating**: `merge-risk: 🚨 compatibility` labels on small fixes indicate rigorous regression prevention

**Community Size:** Largest by activity metrics; 460 open active issues suggest extensive production deployments. However, comment density on top issues (97 on #121058) indicates **deep engagement from a smaller power-user base** rather than broad community.

---

## 4. Shared Technical Focus Areas

| Requirement | Projects Affected | Specific Needs |
|-------------|-------------------|----------------|
| **Message/Session Reliability** | OpenClaw (#121058, #44925, #87744), Hermes (#87644, #85957), NanoClaw (#3254, #3255), CoPaw (#7063, #7065) | Silent failure elimination, delivery acknowledgment, session-state integrity, crash recovery |
| **Token/Cost Observability** | NanoBot (#5266, #5402, #5377), OpenClaw (#42475), LobsterAI (#1797), ZeroClaw (#9621) | Per-call logging, consolidation accuracy, budget enforcement, telemetry opt-in |
| **Security Hardening** | PicoClaw (#3322–3324 SSRF), LobsterAI (#1831–1833 IPC/log sanitization), Moltis (#1180 path traversal), ZeroClaw (#9580 egress guard), IronClaw (#7681 Slack privacy) | SSRF prevention, credential leakage, IPC sandboxing, private onboarding flows |
| **Protocol Interoperability** | ZeroClaw (#8603 Chat Completions), PicoClaw (#3302 OAuth 2.1 MCP), Moltis (#1204 ACP), NanoBot (#5251 MCP Apps), Hermes (#88037 handoff) | OpenAI-compatible API, MCP/OAuth 2.1, ACP agents, cross-profile handoff |
| **Multi-Session/Context Management** | OpenClaw (#22438 tiered bootstrap), NanoClaw (#3257 cross-session), ZeroClaw (#6954 internal turn provenance), Hermes (#53480 updater guards) | Progressive context loading, cross-session memory, agent-initiated turn identity, update-time session safety |
| **Desktop/Client Stability** | Hermes (#87652 audio WS, #87703 Windows update), CoPaw (#7074 crashes), LobsterAI (#1714 Win11 icons, #1698 macOS conflict) | WebSocket deduplication, installer UAC handling, crash diagnostics, multi-app coexistence |

---

## 5. Differentiation Analysis

| Project | Primary Focus | Target User | Architecture Signature |
|---------|---------------|-------------|------------------------|
| **OpenClaw** | Multi-channel gateway platform | Enterprises / power users running bots across 5+ chat platforms | Centralized gateway event loop, subagent orchestration, SQLite transcript projection |
| **ZeroClaw** | Protocol-native agent runtime | Developers building OpenAI-compatible / MCP / ACP integrations | RFC-driven, WASM plugin lifecycle, capability-based security, parallel test gate |
| **NanoBot** | Personal AI assistant with skill ecosystem | Individual developers / researchers | Python gateway + TypeScript CLI (OpenTUI) + WebUI, skill "Dream" system, token consolidation |
| **Hermes Agent** | Desktop-first multi-profile agent | Desktop power users, multi-project workflows | Profile isolation, Kanban task board, cron/delegate subsystems, cross-profile handoff |
| **NanoClaw** | Channel-adapter framework with MCP tooling | Bot operators needing custom channel integrations | Hot-start adapter registry, delivery batch hooks, MCP document memory epic |
| **PicoClaw** | Lightweight multi-protocol bot | Chinese-market deployments (WeCom, Weixin, QQ, Simplex) | SSRF-hardened media pipeline, native Exa search, OAuth 2.1 MCP prep |
| **IronClaw** | Automation & workflow engine | Teams running scheduled/triggered automations | Deterministic result suppression, IronLoop config, Rust/WASM tooling |
| **LobsterAI** | Desktop client with IM integrations | Chinese enterprise users (DingTalk, Lark, QQ) | Electron + OpenClaw gateway, Cowork UI, managed agent avatars |
| **Moltis** | Secure messaging + AI agent hub | Privacy-focused teams | Vault unsealing, CalDAV, activity log visibility, ACP agent registry |
| **CoPaw** | Multi-agent workspace with DataPaw | Enterprise analysts / data workflows | DataPaw runtime, background task API, plugin system, video analysis |

**Key Architectural Split:** *Gateway-centric* (OpenClaw, LobsterAI) vs. *Adapter/Registry-centric* (NanoClaw, Moltis) vs. *Profile/Workspace-centric* (Hermes, CoPaw, NanoBot) vs. *Protocol-Native* (ZeroClaw, PicoClaw).

---

## 6. Community Momentum & Maturity

| Tier | Projects | Characteristics |
|------|----------|-----------------|
| **Rapid Iteration (Platform)** | OpenClaw, ZeroClaw, NanoBot, Hermes Agent | 50–500 daily items; core-team driven; RFC/architecture phases; regression backlogs from fast feature cycles |
| **Steady Delivery (Specialist)** | NanoClaw, Moltis, PicoClaw, IronClaw | 5–20 daily items; high merge rates (NanoClaw 13/19, Moltis 8/8); focused feature completion; security/UX polish |
| **Integration Bottleneck** | CoPaw, LobsterAI | High contributor influx (CoPaw 7/9 PRs from first-timers) but low merge throughput; review bandwidth limited |
| **Dormant** | NullClaw, TinyClaw, ZeptoClaw | Zero activity; likely archived or pre-launch |

**Maturity Indicators:**
- **Most production-hardened**: OpenClaw (monitoring cron, multi-channel), NanoClaw (delivery fixes merged same-day), Moltis (security fix merged same-day)
- **Best contributor onboarding**: CoPaw (7 first-time PRs in 24h), ZeroClaw (dependabot + RFC process)
- **Clearest release discipline**: Hermes Agent (v0.20.2 patch with 397 PR rollup), NanoClaw (v2 milestone tracking)

---

## 7. Trend Signals for AI Agent Developers

| Trend | Evidence | Strategic Value |
|-------|----------|-----------------|
| **Protocol convergence > proprietary APIs** | ZeroClaw Chat Completions RFC (22 comments), PicoClaw OAuth 2.1 MCP, Moltis ACP, NanoBot MCP Apps | Build once for OpenAI/MCP/ACP; avoid vendor lock-in; expect gateway projects to add compatibility layers |
| **Security hardening as default** | 5 projects merged critical fixes today (SSRF, IPC, path traversal, log sanitization, egress guard) | Treat credential leakage, SSRF, and sandbox escape as table stakes; audit IPC boundaries and media pipelines |
| **Observability shifting left** | OpenClaw monitoring cron, NanoBot token logging demand, ZeroClaw telemetry RFC, Hermes health endpoint bugs | Instrument delivery acknowledgment, token accounting, and session-state transitions *before* user reports |
| **Multi-session/context as core primitive** | OpenClaw tiered bootstrap, NanoClaw cross-session, ZeroClaw internal turn provenance, Hermes updater guards | Design for concurrent sessions, agent-initiated turns, and update-time migration from day one |
| **Desktop/client stability = retention** | Hermes/CoPaw/LobsterAI crash reports, Windows UAC, macOS port conflicts | Invest in crash diagnostics, installer testing, and multi-app coexistence; web-only avoids this but limits adoption |
| **Skill/Plugin ecosystems maturing** | NanoBot Dream skill updates, CoPaw plugin system prompts, OpenClaw plugin tool regression, ZeroClaw WASM lifecycle | Standardize skill versioning, hidden system prompts, and plugin approval flows; avoid duplicate loading bugs |

**Recommendation for Developers:** Target **OpenAI Chat Completions + MCP + ACP** as the interoperability baseline. Prioritize **delivery acknowledgment** and **session-state durability** over new model features. Expect the next 6 months to consolidate around **gateway/adapter patterns** with **protocol-native cores**—projects that haven't started RFC processes for interoperability (OpenClaw, NanoClaw, Hermes) will face integration pressure.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-08-17

## 1. Today's Overview
NanoBot shows **exceptionally high pull request activity** (500 PRs updated in 24h, 499 open) alongside moderate issue churn (15 updated, 11 open). The PR volume suggests a large backlog of long-running feature branches and experimental work rather than daily merge velocity — only 1 PR was merged/closed today. No new releases were published. The project is in a **heavy parallel development phase** with major architectural efforts underway (TypeScript CLI rewrite, WebUI collaboration, subagent control plane, safety module), but integration bottlenecks are evident from the number of `[conflict]`-marked PRs.

## 2. Releases
**No new releases** in the last 24 hours. The last release version is not indicated in the data.

---

## 3. Project Progress (Merged/Closed Today)
| PR / Issue | Title | Type | Summary |
|------------|-------|------|---------|
| #2185 | Upgrade nanobot from 0.1.4 to 0.1.4post5 breaks gemini-3-flash-preview | Regression (Closed) | Config migration issue with provider `openai/gemini-3-flash-preview:cloud` via Ollama endpoint. Closed without fix details visible. |
| #5275 | Matrix "reply in thread" should form dedicated context | Enhancement (Closed) | Thread context handling for Matrix aligned with Discord/Slack behavior. |
| #5305 | `exec.allowPatterns` allowlist bypass — chained shell command execution | Security (Closed) | **Critical security fix**: allowlist bypass enabling command injection via OpenAI-compatible API. |
| #5373 | Cron scheduler dies permanently after job-store persistence failure | Bug (Closed) | Scheduler timer task crashes on single persistence error; `_arm_timer()` not in `try/finally`. |
| #5358 | feat(webui): add session collaboration via mentions | Feature (Open, updated today) | WebUI: stable `@name` per session, mention picker for peer sessions, identity colors. |
| #5406 | feat(cli): add native TypeScript terminal UI | Feature (Open, created today) | Supersedes #4329; rebuilds `nanobot agent` as TypeScript/OpenTUI client, preserves Python gateway. |

**Key insight**: Only 1 PR merged/closed today (#5305 security fix likely fast-tracked). The 4 closed issues include 1 security advisory, 1 regression, 1 Matrix threading fix, and 1 scheduler crash — all stability-critical.

---

## 4. Community Hot Topics (Most Active Issues/PRs)

| Item | Comments | 👍 | Core Need |
|------|----------|-----|-----------|
| [#2463](https://github.com/HKUDS/nanobot/issues/2463) Architectural issue: prompt prefix not preserved | 15 | 0 | **Fundamental conversation fidelity** — history persisted ≠ actual prompt sent; breaks OpenAI prompt caching. |
| [#5266](https://github.com/HKUDS/nanobot/issues/5266) Token consumption logging (millions of tokens in 2h) | 14 | 0 | **Cost observability** — users cannot trace which calls burn tokens; need per-call logging. |
| [#4864](https://github.com/HKUDS/nanobot/issues/4864) Endless loop on `complete_goal` (JSON parsing bug) | 6 | 1 | **Tool execution reliability** — gateway parses `recap` as bare string vs JSON object. |
| [#5402](https://github.com/HKUDS/nanobot/issues/5402) Token consolidation never triggers (tiktoken underestimates) | 3 | 0 | **Context window management** — estimation drift prevents auto-consolidation, causing overflow. |
| [#5377](https://github.com/HKUDS/nanobot/issues/5377) Consolidation truncates archive but advances past full batch | 3 | 0 | **Data loss in consolidation** — messages dropped by truncation are skipped permanently. |
| [#4467](https://github.com/HKUDS/nanobot/issues/4467) Dream creates duplicate skills instead of updating | 3 | 1 | **Skill lifecycle** — iterative skill improvement workflow broken; users maintain custom skills daily. |

**Underlying theme**: **Token economy & conversation integrity** dominate. Users hit hard limits: uncontrolled spend (#5266), broken caching (#2463), failed consolidation (#5402, #5377), and tool loops (#4864). These are not nice-to-haves — they block production use.

---

## 5. Bugs & Stability (Reported/Updated Today)

| Severity | Issue | Description | Fix PR? |
|----------|-------|-------------|---------|
| **Critical** | [#5305](https://github.com/HKUDS/nanobot/issues/5305) | `exec.allowPatterns` bypass → chained shell command execution via OpenAI-compatible API | Closed (fix likely merged) |
| **High** | [#4864](https://github.com/HKUDS/nanobot/issues/4864) | `complete_goal` endless loop: gateway parses `recap` as string not JSON | No PR linked |
| **High** | [#5402](https://github.com/HKUDS/nanobot/issues/5402) | Token consolidation never triggers — tiktoken underestimates actual API tokens | No PR linked |
| **High** | [#5377](https://github.com/HKUDS/nanobot/issues/5377) | Consolidation truncates input but advances `last_consolidated` past full batch → message loss | No PR linked |
| **Medium** | [#2463](https://github.com/HKUDS/nanobot/issues/2463) | Conversation history persisted ≠ actual prompt prefix sent — breaks provider caching | No PR linked |
| **Medium** | [#5373](https://github.com/HKUDS/nanobot/issues/5373) | Cron scheduler dies permanently on single persistence failure | Closed (fix likely merged) |
| **Medium** | [#2185](https://github.com/HKUDS/nanobot/issues/2185) | Version upgrade breaks `gemini-3-flash-preview` via Ollama endpoint | Closed (workaround?) |

**Pattern**: Token accounting bugs (#5402, #5377, #2463) are systemic — they compound each other. The `complete_goal` loop (#4864) suggests tool parameter serialization regression.

---

## 6. Feature Requests & Roadmap Signals

| Request | Source | Signal Strength | Likelihood for Next Version |
|---------|--------|-----------------|----------------------------|
| **Native TypeScript CLI (OpenTUI)** | [#5406](https://github.com/HKUDS/nanobot/pull/5406), [#4329](https://github.com/HKUDS/nanobot/pull/4329) | Very High — active PR created today, supersedes major prior effort | **High** — architectural direction set; Python gateway preserved |
| **WebUI Session Collaboration (mentions, stable @names)** | [#5358](https://github.com/HKUDS/nanobot/pull/5358) | High — PR updated today, extensive scope | **High** — multi-user workflow priority |
| **Token Consumption Logging** | [#5266](https://github.com/HKUDS/nanobot/issues/5266) | High — 14 comments, direct cost impact | **High** — observability gap blocking adoption |
| **MCP Apps Host Support in WebUI** | [#5251](https://github.com/HKUDS/nanobot/issues/5251) | Medium — emerging MCP ecosystem need | **Medium** — depends on MCP Apps spec maturity |
| **Telegram Stickers & Agent-Initiated Reactions** | [#5289](https://github.com/HKUDS/nanobot/issues/5289) | Medium — platform parity gap | **Medium** — UI polish, not core |
| **Budget Model-Visible MCP Schemas** | [#5298](https://github.com/HKUDS/nanobot/issues/5298) | Medium — large tool set context cost | **Medium** — optimization, not correctness |
| **Skill `disable-model-invocation` Flag** | [#5404](https://github.com/HKUDS/nanobot/issues/5404) | Low-Medium — UX parity with Cursor/Claude Code | **Medium** — low complexity, high user value |
| **Dream: Update Existing Skills (No Duplicates)** | [#4467](https://github.com/HKUDS/nanobot/issues/4467) | Medium — daily workflow pain | **Medium** — requires skill versioning/resolution |
| **Subagent Control Plane (list/kill, profiles, model override)** | [#1032](https://github.com/HKUDS/nanobot/pull/1032), [#1024](https://github.com/HKUDS/nanobot/pull/1024), [#1015](https://github.com/HKUDS/nanobot/pull/1015) | High — multiple PRs, foundational for autonomy | **Medium** — `[conflict]` status suggests merge friction |

**Roadmap prediction**: Next version will likely ship **TypeScript CLI**, **WebUI collaboration**, **token logging**, and **security hardening**. Subagent control plane and MCP Apps support are tracking but blocked by merge conflicts.

---

## 7. User Feedback Summary

| Pain Point | Evidence | Impact |
|------------|----------|--------|
| **Uncontrolled token spend** | #5266: "millions of tokens in 2 hours without noticeable activity" | Blocks production use; no visibility |
| **Broken conversation fidelity** | #2463: history ≠ actual prompt sent; breaks OpenAI caching | Increases cost & latency; architectural |
| **Consolidation data loss** | #5377, #5402: truncation + pointer advance = lost messages | Silent context corruption |
| **Tool execution loops** | #4864: `complete_goal` endless error loop | Agent unusable for goal completion |
| **Skill workflow friction** | #4467: Dream creates duplicates daily; users maintain custom skills | Discourages skill iteration |
| **Security anxiety** | #5305: allowlist bypass for shell injection | Trust blocker for multi-user deployments |
| **Platform parity gaps** | #5289 (Telegram stickers), #5275 (Matrix threads) | Inconsistent UX across channels |

**Positive signals**: Users invest deeply — custom skills daily (#4467), multi-channel deployments, cost monitoring. They file detailed bugs with reproduction steps. This is a **power-user community** hitting scaling limits.

---

## 8. Backlog Watch (Stale but Critical)

| Item | Age | Why It Matters | Status |
|------|-----|----------------|--------|
| [#1306](https://github.com/HKUDS/nanobot/pull/1306) Voice/audio support (Discord TTS, transcription) | ~6 months | `[conflict]` — reusable voice layer for multiple channels | Stalled, needs rebase |
| [#1205](https://github.com/HKUDS/nanobot/pull/1205) KV cache reuse with batch prompt rollover | ~6 months | `[conflict]` — performance optimization for long contexts | Stalled, needs rebase |
| [#1149](https://github.com/HKUDS/nanobot/pull/1149) PromptGuard (prompt injection detection) | ~6 months | `[conflict]` — safety layer, increasingly relevant | Stalled, needs rebase |
| [#1073](https://github.com/HKUDS/nanobot/pull/1073) Preserve unknown config keys on save | ~6 months | `[conflict]` — prevents data loss for custom providers | Stalled, needs rebase |
| [#1072](https://github.com/HKUDS/nanobot/pull/1072) Catch `CancelledError` in tool execution | ~6 months | `[conflict]` — prevents process crash on MCP timeout | Stalled, needs rebase |
| [#1026](https://github.com/HKUDS/nanobot/pull/1026) Delete media files after processing | ~6 months | `[conflict]` — unbounded disk growth in `~/.nanobot/media/` | Stalled, needs rebase |
| [#1025](https://github.com/HKUDS/nanobot/pull/1025) Persist OAuth tokens + preserve unknown fields | ~6 months | `[conflict]` — fixes `provider login openai-codex` token loss | Stalled, needs rebase |

**Maintainer action needed**: **7 critical PRs from February** remain `[conflict]` — they address security (PromptGuard, OAuth), stability (CancelledError, media cleanup, config preservation), and performance (KV cache, voice). The conflict burden suggests a **merge strategy gap**: long-lived branches diverge from `main` faster than they can be rebased. Consider:
- Short-lived feature branches + feature flags
- Regular rebase days
- CI conflict detection on `main` updates

---

## Health Assessment
| Dimension | Score | Rationale |
|-----------|-------|-----------|
| **Velocity** | 🟡 Medium | High PR count but low merge rate; conflict backlog |
| **Stability** | 🟠 Concerning | Critical token/accounting bugs + security advisory in same week |
| **Community Engagement** | 🟢 Strong | Detailed issues, power-user workflows, multi-platform |
| **Architectural Clarity** | 🟢 Strong | Clear separation: Python gateway + TypeScript CLI + WebUI |
| **Release Cadence** | 🔴 Low | No releases visible; integration bottlenecks |

**Recommendation**: Prioritize merging the 7 stale `[conflict]` PRs (security/stability) and the token accounting fixes (#5402, #5377, #2463) before advancing new features. The TypeScript CLI (#5406) is the flagship — unblock it first.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-08-17

## 1. Today's Overview
Hermes Agent is in a high-velocity stabilization phase following the v0.20.2 patch release (v2026.8.16), which rolled up ~397 PRs since v0.20.1. In the last 24 hours, **50 issues** and **50 PRs** were updated — all issues remain open, and only 3 PRs were closed/merged, indicating active triage and development rather than closure. The project is surfacing a cluster of regressions in Desktop (Windows installer stalls, duplicate audio WebSockets, session sidebar flicker), gateway/cron reliability (scheduler stalls after EMFILE, kanban dispatcher task loss), and provider/tool integration (vision tool disappearance, Groq reasoning leakage, MCP approval gaps). Multiple PRs target session-state integrity, compression safety valves, and cross-profile handoff — signaling a roadmap push toward multi-profile, multi-session robustness.

## 2. Releases
### v2026.8.16 — Hermes Agent v0.20.2 (2026-08-16)
**Patch release** consolidating ~397 PRs since v0.20.1 into a stable tag for Docker images, hosted deployments, and fresh installs. No breaking changes noted in the release summary; it is a rollup for downstream consumers.  
**Migration notes:** None explicitly stated. Users on v0.20.1 should update via standard channels (`hermes update`, Docker pull, or installer).  
**Release link:** [NousResearch/hermes-agent/releases/tag/v2026.8.16](https://github.com/NousResearch/hermes-agent/releases/tag/v2026.8.16)

---

## 3. Project Progress (Merged/Closed PRs Today)
| PR | Title | Area | Impact |
|----|-------|------|--------|
| [#6410](https://github.com/NousResearch/hermes-agent/pull/6410) | **feat(codex-chat): native multimodal vision, /fast mode, /contextlimit…** | `comp/agent`, `comp/cli`, `comp/gateway`, `tool/vision`, `provider/openai` | **Closed** — Major feature: native vision support in Codex chat, fast mode, context limit commands. Likely shipped in v0.20.2 rollup. |
| [#88031](https://github.com/NousResearch/hermes-agent/pull/88031) | **fix(tools): route openai-api through native vision and fail closed on vision refusals** | `comp/agent`, `tool/vision`, `provider/openai` | **Closed** — Fixes silent demotion of `vision_analyze` calls to auxiliary text model on OpenAI-compatible path. Critical for vision cron jobs. |
| [#88034](https://github.com/NousResearch/hermes-agent/pull/88034) | **fix(cron): clear inherited delegate_task lineage at scheduled-job start** | `comp/agent`, `comp/cron`, `tool/delegate` | **Open (created today)** — Prevents spurious "delegate_task child contexts cannot mutate Kanban" errors on scheduled cron jobs. |

*Only 3 PRs closed/merged in 24h; the bulk of merged work is embedded in the v0.20.2 release tag.*

---

## 4. Community Hot Topics (Most Active Issues/PRs)
| Item | Comments | Reactions | Core Need |
|------|----------|-----------|-----------|
| [#66616](https://github.com/NousResearch/hermes-agent/issues/66616) Skills index stale/degraded | 45 | 0 | **Automation reliability** — Skills Hub index rebuild cron (6/18 UTC) not running frequently enough; index 29.8h old vs 26h limit. Blocks skill discovery. |
| [#53480](https://github.com/NousResearch/hermes-agent/issues/53480) Updater should guard active Desktop sessions | 5 | 0 | **Session safety** — Updates can terminate/mutate running Desktop agent sessions. Need detection + block/defer/force flow. |
| [#87652](https://github.com/NousResearch/hermes-agent/issues/87652) Duplicate `/api/audio/speak-stream` WebSockets | 3 | 0 | **Desktop audio regression** — v0.20.1 reads every assistant response twice. User-visible duplication. |
| [#87654](https://github.com/NousResearch/hermes-agent/issues/87654) Vision tools disappear after first probe | 3 | 0 | **Tool availability caching bug** — `_AuxProbeClientStub` cached in `_get_cached_client`; vision tools silently drop from sessions. |
| [#87703](https://github.com/NousResearch/hermes-agent/issues/87703) Windows `hermes update` hangs 11 min on cua-driver | 3 | 0 | **Windows installer UX** — Non-interactive PowerShell invokes UAC prompt invisibly; update stalls. |
| [#47803](https://github.com/NousResearch/hermes-agent/issues/47803) Improve session title regeneration | 2 | 1 | **UX enhancement** — "Regenerate Title" button using LLM, multi-language, periodic refresh. |
| [#88037](https://github.com/NousResearch/hermes-agent/pull/88037) First-class cross-profile handoff tool | 0 | 0 | **Architecture** — New `handoff` tool for cross-profile task dispatch with durable Kanban linkage. High strategic value. |

**Underlying theme:** Users are hitting **session-state integrity** and **multi-profile isolation** gaps as they scale usage (Desktop, gateway, cron, skills, MCP). The "sweeper" labels (`sweeper:risk-session-state`, `sweeper:risk-message-delivery`, `sweeper:risk-security-boundary`) on many issues/PRs confirm maintainers are systematically categorizing these risks.

---

## 5. Bugs & Stability (Ranked by Severity)
| Severity | Issue | Description | Fix PR? |
|----------|-------|-------------|---------|
| **P1** | [#87644](https://github.com/NousResearch/hermes-agent/issues/87644) Cron scheduler permanently stalls after EMFILE | Gateway survives FD leak but cron never runs again; heartbeat stays healthy → false-positive monitoring. | No |
| **P1** | [#87694](https://github.com/NousResearch/hermes-agent/issues/87694) Autostash produces orphan commit | `hermes update` leaves orphan commit; HEAD diverges from origin; all subsequent updates fail. | No |
| **P2** | [#87652](https://github.com/NousResearch/hermes-agent/issues/87652) Duplicate audio WebSockets | Desktop v0.20.1 opens two `/api/audio/speak-stream` per reply → double speech. | No |
| **P2** | [#87654](https://github.com/NousResearch/hermes-agent/issues/87654) Vision tools disappear after probe | `vision_analyze`/`browser_vision` vanish from sessions after first availability check. | No |
| **P2** | [#87703](https://github.com/NousResearch/hermes-agent/issues/87703) Windows update hangs on cua-driver UAC | Hidden non-interactive PowerShell triggers invisible UAC prompt; 11-min stall. | No |
| **P2** | [#70233](https://github.com/NousResearch/hermes-agent/issues/70233) Groq `reasoning_details` leaks into next request | Prior reasoning call's non-standard field breaks non-reasoning Groq models. | No |
| **P2** | [#87724](https://github.com/NousResearch/hermes-agent/issues/87724) `computer_use` mutations fail open without approval | Headless execution bypasses approval callback; security boundary breach. | No |
| **P2** | [#85957](https://github.com/NousResearch/hermes-agent/issues/85957) API server self-POSTs delegate result as user turn | Background delegation completion starts unsent model turn; corrupts session history. | [#86011](https://github.com/NousResearch/hermes-agent/pull/86011) |
| **P3** | [#87692](https://github.com/NousResearch/hermes-agent/issues/87692) Nix renderer build fails (test fixture import) | `tsc -b` fails on `src/app/session/hooks/use-session-actions.test.tsx` importing repo-root test fixture not in packaged source. | No |
| **P3** | [#87776](https://github.com/NousResearch/hermes-agent/issues/87776) Kanban dispatcher watcher task vanishes | Background task silently disappears from event loop; restart only briefly fixes. | No |
| **P3** | [#87631](https://github.com/NousResearch/hermes-agent/issues/87631) Cyrillic Shift+letter leaks CSI in CLI | WeZTerm + modifyOtherKeys level 2: non-Latin uppercase inserts literal escape sequences. | [#87785](https://github.com/NousResearch/hermes-agent/pull/87785) |
| **P3** | [#88038](https://github.com/NousResearch/hermes-agent/issues/88038) MEDIA tags dropped after CJK punctuation | `MEDIA:<path>` followed by full-width punctuation silently drops attachment. | No |
| **P3** | [#88036](https://github.com/NousResearch/hermes-agent/issues/88036) Desktop transcript stops rendering | Backend completes turn, writes to `state.db`, but UI stays blank until restart. | No |

**Pattern:** Multiple P1/P2 bugs are **regressions in v0.20.1** (released ~2026-08-16 per issue dates), explaining the rapid v0.20.2 patch. Windows Desktop update path, vision tooling, and cron reliability are the hottest fire zones.

---

## 6. Feature Requests & Roadmap Signals
| Request | Source | Likelihood for Next Version |
|---------|--------|-----------------------------|
| **Cross-profile handoff tool** (`handoff_task`, `handoff_profile`) | [#88037](https://github.com/NousResearch/hermes-agent/pull/88037) (PR opened today) | **High** — First-class tool with durable Kanban linkage; addresses multi-profile workflow gap. |
| **Portable handoff workflow (markdown-based)** | [#47320](https://github.com/NousResearch/hermes-agent/pull/47320) (open since June) | **Medium** — Document-based session context packaging; complement to new `handoff` tool. |
| **Session title regeneration (LLM-powered, multi-lang)** | [#47803](https://github.com/NousResearch/hermes-agent/issues/47803) | **Medium** — UX polish; 1 👍, low complexity.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-08-17

## 1. Today's Overview
PicoClaw shows steady maintenance activity with **3 active issues** and **5 PRs updated** in the last 24 hours. No new releases were published. The project is currently focused on **security hardening** (four SSRF-related PRs for Weixin, WeCom, and generic channels), **platform integrations** (Exa web search, Simplex channel), and **media handling bugs** (Slack image upload failure, Telegram table rendering). The closed Simplex channel PR (#3193) indicates a recent feature merge, while the open PRs suggest ongoing review cycles for security and integration work.

## 2. Releases
**No new releases** in the last 24 hours. The latest version remains `picoclaw 0.3.x` (per issue #3338).

## 3. Project Progress
| PR | Status | Summary | Impact |
|----|--------|---------|--------|
| [#3193](https://github.com/sipeed/picoclaw/pull/3193) | **Closed** | Added Simplex channel type | New protocol support merged |
| [#3299](https://github.com/sipeed/picoclaw/pull/3299) | Open | Add native Exa web search provider | New `tools.web`/`web_search` provider with API key auth & date filters |
| [#3322](https://github.com/sipeed/picoclaw/pull/3322) | Open | Block private targets on inbound media downloads (channels) | SSRF hardening for QQ/Telegram/Discord/LINE/Slack |
| [#3323](https://github.com/sipeed/picoclaw/pull/3323) | Open | fix(wecom): use CreateSafeHTTPClient for media downloads | SSRF fix for WeCom inbound/outbound media |
| [#3324](https://github.com/sipeed/picoclaw/pull/3324) | Open | fix(weixin): use CreateSafeHTTPClient for media downloads | SSRF fix for Weixin CDN/remote media |

**Key advancement**: A coordinated security push — four PRs (#3322–#3324) apply `utils.CreateSafeHTTPClient` + `ValidateSafeHTTPURL` across Weixin, WeCom, and generic channel inbound media paths to prevent SSRF via redirect to loopback/RFC1918 addresses.

## 4. Community Hot Topics
| Item | Type | Activity | Core Need |
|------|------|----------|-----------|
| [#3302](https://github.com/sipeed/picoclaw/issues/3302) | Issue | 3 comments, created 2026-07-30 | **OAuth 2.1 for MCP servers** — aligns with #2546; users need modern auth for Model Context Protocol integrations |
| [#3325](https://github.com/sipeed/picoclaw/issues/3325) | Issue | 1 comment, created 2026-08-09 | **Telegram native table rendering** — Bot API 10.1 supports visual tables; current Markdown degrades to plain text/code blocks |
| [#3338](https://github.com/sipeed/picoclaw/issues/3338) | Bug | 0 comments, created today | **Slack image upload broken** — `SendMedia` omits `FileSize` causing `file.upload.v2: file size cannot be 0` |

**Analysis**: OAuth 2.1 (#3302) reflects growing MCP adoption; Telegram tables (#3325) is a UX polish request; Slack media (#3338) is a blocking regression for media-rich workflows.

## 5. Bugs & Stability
| Severity | Issue | Description | Fix PR? |
|----------|-------|-------------|---------|
| **High** | [#3338](https://github.com/sipeed/picoclaw/issues/3338) | Slack `SendMedia` fails: `slack.UploadFileParameters` missing `FileSize` → SDK rejects before network call | No PR yet |
| **Medium** | SSRF exposure (inbound media) | QQ/Telegram/Discord/LINE/Slack/WeCom/Weixin inbound media downloads followed redirects to private IPs | **Yes** — #3322 (generic), #3323 (WeCom), #3324 (Weixin) |

**Note**: The SSRF fixes are proactive hardening; no active exploits reported. Slack bug is a regression in current `0.3.x`.

## 6. Feature Requests & Roadmap Signals
| Feature | Source | Likelihood for Next Version |
|---------|--------|-----------------------------|
| **OAuth 2.1 for MCP servers** | [#3302](https://github.com/sipeed/picoclaw/issues/3302) (Core Feature checkbox ticked) | High — labeled "Core Feature", aligns with #2546 |
| **Exa native web search provider** | [#3299](https://github.com/sipeed/picoclaw/pull/3299) | High — PR open, adds `tools.web`/`web_search` with highlights & date filters |
| **Telegram native table rendering** | [#3325](https://github.com/sipeed/picoclaw/issues/3325) | Medium — Bot API 10.1 support, low complexity |
| **Simplex channel** | [#3193](https://github.com/sipeed/picoclaw/pull/3193) | **Already merged** (closed today) |

**Prediction**: Next release will likely include Exa search, Simplex channel, and the SSRF hardening batch. OAuth 2.1 for MCP is a strong candidate given "Core Feature" tag.

## 7. User Feedback Summary
- **Pain points**: 
  - Slack media uploads completely broken (`file size cannot be 0`) — blocks image/file sharing workflows.
  - Telegram tables render as plain text/code — degrades structured data presentation.
  - Need for OAuth 2.1 to connect MCP servers securely (modern auth standard).
- **Use cases**: 
  - Multi-platform bot deployments (Slack, Telegram, WeCom, Weixin, QQ, Discord, LINE, now Simplex).
  - AI agent tooling via `tools.web`/`web_search` (Exa integration).
  - Secure media ingestion from untrusted URLs (SSRF concerns).
- **Satisfaction**: Security hardening PRs show maintainer responsiveness; Slack bug indicates a regression in media pipeline.

## 8. Backlog Watch
| Item | Age | Status | Why It Needs Attention |
|------|-----|--------|------------------------|
| [#3302](https://github.com/sipeed/picoclaw/issues/3302) | 18 days | Open, 3 comments | **Core Feature** for MCP/OAuth 2.1 — strategic for AI agent interop; no PR yet |
| [#3322](https://github.com/sipeed/picoclaw/pull/3322) | 8 days | Open, stale | Generic channel SSRF fix — covers 5 platforms; should be prioritized for merge |
| [#3323](https://github.com/sipeed/picoclaw/pull/3323) / [#3324](https://github.com/sipeed/picoclaw/pull/3324) | 8 days | Open, stale | WeCom/Weixin SSRF fixes — sibling PRs, review together |
| [#3338](https://github.com/sipeed/picoclaw/issues/3338) | 0 days | Open, 0 comments | **Regression** — Slack media broken; needs quick fix (likely 1-line `FileSize` addition) |

**Recommendation**: Maintainers should triage #3338 immediately (blocking bug), batch-review the three SSRF PRs (#3322–#3324), and assign OAuth 2.1 (#3302) to a milestone given its "Core Feature" designation.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-08-17

## 1. Today's Overview
NanoClaw shows **high core-team velocity** with 13 PRs merged/closed and 19 open PRs updated in the last 24 hours, all authored by maintainers (`gavrielc`, `Koshkoshinsk`, `adar666`, etc.). No community issues were raised; the single issue (#3271) was a misfiled ticket closed immediately. Activity centers on **cross-session context plumbing**, **delivery pipeline hardening**, **channel-adapter capabilities**, and **MCP tooling for document memory** — indicating the project is in a heavy infrastructure/refinement sprint ahead of a likely v2 milestone. Project health appears strong: rapid, focused merges with clear architectural intent and minimal external friction.

## 2. Releases
**No new releases** published today.

## 3. Project Progress — Merged / Closed PRs (2026-08-16)

| PR | Type | Summary | Link |
|----|------|---------|------|
| #3284 | Core Infra | **Mid-turn streaming as single delivery door** — providers declaring `emitsMidTurnText` now stream `<message>` blocks as the sole content path; final result never delivers content. Adds DB-backed echo suppression, cross-segment assembly. | [#3284](https://github.com/nanocoai/nanoclaw/pull/3284) |
| #3283 | Fix | **Preserve structured chat links** — formatter now appends hidden, deduplicated URLs from `links[]` when platform display text is shortened. | [#3283](https://github.com/nanocoai/nanoclaw/pull/3283) |
| #3262 | Feature | **Chat SDK bridge: agent-mode DM surface** — caches thread-started/context-changed events per (instance, channel, user), attaches as `app_context` to next inbound; normalizes DM thread IDs. | [#3262](https://github.com/nanocoai/nanoclaw/pull/3262) |
| #3261 | Feature | **Optional adapter capabilities** — `setTyping` gains optional `status` + `statusKind` ('auto' vs 'agent'); `setThreadTitle`, `setSuggestedPrompts` added; registry passthroughs. | [#3261](https://github.com/nanocoai/nanoclaw/pull/3261) |
| #3260 | Feature | **`decline_notify` unknown-sender policy** — polite DM decline to sender + one-line owner FYI; no approval card. | [#3260](https://github.com/nanocoai/nanoclaw/pull/3260) |
| #3259 | Fix/Tooling | **skill-apply heading-ordinal strip**, headless browser URL surfacing, inherit-script extraction. | [#3259](https://github.com/nanocoai/nanoclaw/pull/3259) |
| #3263 | Infra | **Channel registry hot-start** — `startChannelAdapter(key)` replays boot steps for newly registered adapters without restart. | [#3263](https://github.com/nanocoai/nanoclaw/pull/3263) |
| #3264 | Infra | **Delivery batch preview hook** — `registerDeliveryBatchPreview` lets modules inspect full undelivered batch (fast, try/catch wrapped). | [#3264](https://github.com/nanocoai/nanoclaw/pull/3264) |
| #3265 | Feature | **Agent-to-agent: `suppressCreatedNotify`** — silences success toast only; errors still surface. | [#3265](https://github.com/nanocoai/nanoclaw/pull/3265) |
| #3266 | Infra | **Channel card interceptor seam** — modules can intercept registration approval flow pre-card (`handled` / `pass` / `decline`). | [#3266](https://github.com/nanocoai/nanoclaw/pull/3266) |
| #3278 | Feature (MCP) | **`save_document` MCP tool** — persists Word/PDF to `memory/documents/files/<slug>/`; Story 1.1 of Document Memory epic. | [#3278](https://github.com/nanocoai/nanoclaw/pull/3278) |
| #1251 | Feature (Skill) | **`/add-openmail` skill** — OpenMail email channel (monitor inbox, CLI tool, notify). Open since 2026-03-18, finally merged. | [#1251](https://github.com/nanocoai/nanoclaw/pull/1251) |

**Pattern:** All 13 closed PRs are **core-team authored**, labeled `follows-guidelines` or `core-team`, and map to a coherent set of architectural tickets (A1–A4, C4, etc.). No community PRs merged today.

## 4. Community Hot Topics
**No high-comment / high-reaction items today.** All PRs show `Comments: undefined` and `👍: 0`. The only issue (#3271) was a misfile.  
**Signal:** Development is internally driven; external engagement is currently low. Watch for community pick-up once v2 surfaces or the OpenMail skill (#1251) is announced.

## 5. Bugs & Stability — Reported / Fixed Today

| Severity | Item | Status | Fix PR |
|----------|------|--------|--------|
| **Medium** | Outbound delivery resolved arbitrary adapter-instance row when multiple identities share a channel/platform address | Fixed | [#3255](https://github.com/nanocoai/nanoclaw/pull/3255) |
| **Medium** | `getPendingMessages` let newer context rows (trigger=0) crowd out due task rows, causing missed turns | Fixed | [#3254](https://github.com/nanoclaw/pull/3254) |
| **Low** | Telegram pairing code pasted with spaces rejected | Open (fix PR) | [#3282](https://github.com/nanocoai/nanoclaw/pull/3282) |
| **Low** | `ncl groups config update --model ""` stores empty string instead of `NULL` | Open (fix PR) | [#3280](https://github.com/nanocoai/nanoclaw/pull/3280) |
| **Medium** | Agent-scoped `ncl tasks` blind to pre-2.1.54 legacy sessions (`thread_id LIKE 'sys_%'` filter) | Open (fix PR) | [#3281](https://github.com/nanocoai/nanoclaw/pull/3281) |
| **Medium** | Discord inbound attachments (text/images) never staged — agent sees bare `[file:]`/`[image:]` | Open (old PR) | [#2752](https://github.com/nanocoai/nanoclaw/pull/2752) (updated today) |

**Note:** The two medium-severity delivery bugs (#3254, #3255) were **fixed and merged today**. The Discord attachment bug (#2752) has lingered since June — merits maintainer review.

## 6. Feature Requests & Roadmap Signals

| Signal | Evidence | Likelihood for Next Version |
|--------|----------|----------------------------|
| **Cross-session context / agent groups** | #3257 (open, large): fan-out, DM backfill, echo pruning, `ncl sessions history` | High — core architectural piece |
| **Detached conversation handling** | #3256 (open): `messaging_groups.detached_at` + delivery refusal | High — migration 022 ready |
| **Document memory & fill-in editing** | #3278 merged (Story 1.1 `save_document`); epic specs exist | High — active epic |
| **OpenMail email channel** | #1251 merged after 5 months | Medium — skill now available |
| **Rich adapter capabilities (typing status, thread title, prompts)** | #3261 merged | Medium — incremental adoption |
| **Hot-start adapters / registry dynamism** | #3263 merged | Medium — enables plugin-style ops |

**Prediction:** Next release will bundle **cross-session context**, **detached groups**, **document memory (save + read tools)**, and the **OpenMail skill** — a "v2.0" class milestone.

## 7. User Feedback Summary
**No direct user feedback captured today** (no issues, no comments on PRs).  
**Inferred pain points from fix PRs:**
- Users running **multi-identity bots in same room** hit arbitrary delivery routing (#3255).
- **Backlogged context** could starve agent turns (#3254) — likely surfaced in high-volume group chats.
- **Telegram pairing UX** fragile around copy-paste (#3282).
- **Legacy session migration** gap for `ncl tasks` (#3281) — affects upgraders.
- **Discord attachments unreadable** (#2752) — long-standing, impacts rich-media users.

## 8. Backlog Watch — Stale / Needing Attention

| Item | Age | Why It Matters | Link |
|------|-----|----------------|------|
| #2752 Discord attachment staging | **66 days** (opened 2026-06-12) | Blocks rich-media Discord workflows; PR updated today but still open | [#2752](https://github.com/nanocoai/nanoclaw/pull/2752) |
| #3281 Legacy session filter for `ncl tasks` | **1 day** (opened today) but fixes #3233 (older) | Upgrade blocker for pre-2.1.54 users | [#3281](https://github.com/nanocoai/nanoclaw/pull/3281) |
| #3280 `ncl groups config` nullable scalar clearing | **1 day** | CLI UX gap; empty string ≠ NULL | [#3280](https://github.com/nanocoai/nanoclaw/pull/3280) |
| #3282 Telegram pairing code spaces | **1 day** | Minor but user-visible papercut | [#3282](https://github.com/nanocoai/nanoclaw/pull/3282) |
| #3257 Cross-session context (open, large) | **2 days** | Flagship v2 feature; needs review bandwidth | [#3257](https://github.com/nanocoai/nanoclaw/pull/3257) |
| #3256 Detached groups migration (open) | **2 days** | Schema change; migration 022 ready | [#3256](https://github.com/nanocoai/nanoclaw/pull/3256) |

**Recommendation:** Prioritize review of #2752 (oldest functional gap) and the two open architectural PRs (#3257, #3256) to unblock the v2 train. The small fix PRs (#3280–3282) are trivial merges.

---

**Digest generated** from GitHub data as of 2026-08-17 00:00 UTC. All links point to `github.com/nanocoai/nanoclaw`.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-08-17

## 1. Today's Overview
IronClaw saw moderate maintenance activity over the past 24 hours with **1 new enhancement issue** and **9 pull requests** (7 open, 2 closed/merged). The project is in a **steady dependency-upgrade and polish phase** — no new releases, no critical bugs reported, and the majority of PRs are automated Dependabot updates for Rust crates, GitHub Actions, and WASM tooling. A notable user-facing improvement is underway: PR #7682 addresses a Slack UX issue where unlinked users received a public connect notice in shared channels, now being fixed with a private one-click connect link. Overall project health appears stable with active CI/infrastructure upkeep.

---

## 2. Releases
**No new releases published today.** The latest version remains unchanged. Monitor the [Releases page](https://github.com/nearai/ironclaw/releases) for upcoming cuts.

---

## 3. Project Progress — Merged / Closed PRs Today
| PR | Title | Scope | Status | Key Change |
|----|-------|-------|--------|------------|
| [#7683](https://github.com/nearai/ironclaw/pull/7683) | chore: remove retired IronLoop network settings | config / cleanup | **Closed** | Removes obsolete `network_access` fields from trusted IronLoop repo config; retains Implement, Tester, auto-Review/Resolve roles. Validated against IronLoop v1 schema. |
| [#7632](https://github.com/nearai/ironclaw/pull/7632) | chore(deps): bump everything-else group (4 updates) | dependencies (Rust) | **Closed** | Updates `base64` 0.22.1→0.23.1, `toml` 0.9.12→1.1.4, `rstest`, `jsonschema`. Merged after CI pass. |

*No feature PRs merged today — progress is on dependency hygiene and config cleanup.*

---

## 4. Community Hot Topics
| Item | Type | Activity | Summary | Underlying Need |
|------|------|----------|---------|-----------------|
| [#7681](https://github.com/nearai/ironclaw/issues/7681) | Issue (enhancement) | 0 comments, 0 👍 | Slack unlinked-user connect message is **public in shared channels** and forces a manual round-trip (user must go to web app, then message again). | **Privacy & onboarding friction** — users expect private, contextual guidance; current flow leaks intent to entire channel and lacks deep-link continuity. |
| [#7682](https://github.com/nearai/ironclaw/pull/7682) | PR (fix) | 0 comments, 0 👍 | Fixes #7681: delivers connect nudge **privately (ephemeral)** with a **one-click connect link** carrying context. | Directly addresses the reported UX gap; high user-impact for Slack-heavy teams. |
| [#7651](https://github.com/nearai/ironclaw/pull/7651) | PR (feat) | 0 comments, 0 👍 | Adds **deterministic no-result suppression** for automations: `trigger_create` must declare `result_delivery`; neutral wording defaults to `deliver`, explicit “notify only on match/change” selects suppression. | Reduces notification noise; gives automation authors precise control over when results surface. |

*All three items are fresh (created/updated today) and represent the most visible product-facing work.*

---

## 5. Bugs & Stability
**No new bugs, crashes, or regressions reported in the last 24 hours.**  
The only issue (#7681) is a UX/enhancement, not a defect. Dependency PRs (#7684, #7406, #7020, #7262, #7632) are routine upgrades with `risk: low` labels and passing CI — no stability concerns signaled.

---

## 6. Feature Requests & Roadmap Signals
| Signal | Source | Likelihood for Next Release |
|--------|--------|-----------------------------|
| **Private, one-click Slack connect for unlinked users** | #7681 + #7682 | **High** — PR is open, scoped `size: L`, `risk: low`, authored by core contributor `sergeiest`; directly resolves a documented onboarding pain point. |
| **Deterministic automation result suppression** | #7651 | **Medium-High** — `size: XL`, `risk: low`, core-authored (`serrrfirat`); adds explicit `result_delivery` model to `trigger_create`. May need design review due to scope. |
| **WASM tooling updates (`wit-component`, `wit-parser`)** | #7262 | **Low-Medium** — maintenance; will land when CI validates. |
| **Tokio-tungstenite 0.30 upgrade** | #7020 | **Low** — older PR (Aug 2), still open; may wait for downstream compatibility. |

*Roadmap implication: Near-term focus is **Slack UX polish** and **automation control granularity** — both align with "agent assistant" usability.*

---

## 7. User Feedback Summary
- **Pain point (Slack):** Unlinked users @-mentioning the bot in a shared channel get a **public “go connect in web app” reply**, visible to all channel members, and must manually re-message after connecting. No context carried.  
  → *Fix in progress (#7682): ephemeral reply + deep link.*
- **Pain point (Automations):** No way to declaratively suppress “no result” notifications; teams get noise from silent runs.  
  → *Feature in PR #7651: `result_delivery` field with deterministic defaulting.*
- **No explicit dissatisfaction** in comments today — issues/PRs are maintainer-driven or bot-driven.

---

## 8. Backlog Watch — Stale / Needing Attention
| Item | Age | Why It Matters | Suggested Action |
|------|-----|----------------|------------------|
| [#7020](https://github.com/nearai/ironclaw/pull/7020) | 15 days | `tokio-tungstenite` 0.30 may bring WebSocket perf/fixes; blocked on CI validation. | Review CI logs; merge if green or rebase. |
| [#7406](https://github.com/nearai/ironclaw/pull/7406) | 8 days | GitHub Actions updates (`claude-code-action`, `setup-node`, `rust-cache`, `docker/login-action`) — security/maintenance. | Low risk; merge once dependabot CI passes. |
| [#7262](https://github.com/nearai/ironclaw/pull/7262) | 12 days | WASM component model upgrades; may unblock future Wasm agent features. | Validate `wit-component` 0.256 compatibility; merge. |
| [#7651](https://github.com/nearai/ironclaw/pull/7651) | 3 days | Large scope (`XL`), touches automation trigger model — needs design review. | Assign reviewer; ensure docs/examples updated. |

*All are low-risk dependency or infrastructure PRs except #7651, which warrants a focused review session.*

---

**Bottom line:** IronClaw is in a healthy maintenance cadence. The most user-visible change coming is a **private, one-click Slack onboarding flow** (#7682), and the next notable feature is **deterministic automation notification control** (#7651). No stability red flags. Maintainers should prioritize reviewing #7651 and clearing the dependabot backlog (#7020, #7406, #7262).

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-08-17

## 1. Today's Overview
LobsterAI shows **moderate maintenance activity** with 17 PRs and 10 issues updated in the last 24 hours, though nearly all items carry the `[stale]` label and were originally created in April 2026. The project is in a **stabilization and security-hardening phase**: 9 PRs were closed/merged today, dominated by security fixes (log sanitization, IPC access control, `shell.openExternal` scheme whitelisting) and UX polish (agent avatars, import/export, skeleton loading, empty states). No new release was published. Open PRs (#2452, #1682, #1683, #1707, #1769, #1770, #1773) focus on model-provider handling, Cowork UX (TTS, agent-switch draft clearing, loading skeletons), and i18n. Open issues highlight persistent installation conflicts on Windows/macOS, DeepSeek V4 schema rejection, write-tool failures, and missing OAuth2 email support.

## 2. Releases
**No new releases** in the last 24 hours.

## 3. Project Progress — Merged/Closed PRs Today
| PR | Area | Summary | Impact |
|----|------|---------|--------|
| [#1831](https://github.com/netease-youdao/LobsterAI/pull/1831) | main, im, security | Sanitize sensitive logs (Bearer tokens, API keys, auth codes, user profiles) from main process and IM modules | **Critical security fix** — prevents credential leakage to user-accessible log files |
| [#1832](https://github.com/netease-youdao/LobsterAI/pull/1832) | main, security | Restrict `store:*` IPC channels with key-level ACL; narrow generic `ipcRenderer` bridge | **Critical security fix** — blocks XSS/compromised renderer from reading/writing `auth_tokens`, `github_copilot_github_token` |
| [#1833](https://github.com/netease-youdao/LobsterAI/pull/1833) | main, security | Add scheme whitelist to `shell.openExternal` (block `file:`, `javascript:`, `data:`) | **High security fix** — mitigates local file exposure / protocol handler abuse via malicious markdown or model output |
| [#1835](https://github.com/netease-youdao/LobsterAI/pull/1835) | renderer, cowork | Remove duplicate system error messages on `continueSession` failure | UX polish — eliminates double error toast in conversation flow |
| [#1760](https://github.com/netease-youdao/LobsterAI/pull/1760) | renderer, main, openclaw | Add managed image avatar support for custom agents (alongside emoji) | Feature — improves agent recognizability in sidebar/lists |
| [#1691](https://github.com/netease-youdao/LobsterAI/pull/1691) | renderer | Agent template import/export (`.agent.json`) with UI modals | Feature — enables cross-device/team sharing of agent configs |
| [#1690](https://github.com/netease-youdao/LobsterAI/pull/1690) | renderer, im | Confirmation modal before deleting IM instances (DingTalk, Lark, QQ) | UX safety — prevents accidental loss of high-cost IM config |
| [#1693](https://github.com/netease-youdao/LobsterAI/pull/1693) | renderer, cowork | Improve model-setup entry (one-click to settings) + preserve draft input on send | Onboarding + UX — reduces new-user friction, prevents input loss |
| [#1715](https://github.com/netease-youdao/LobsterAI/pull/1715) | main, openclaw, cowork | Fix OpenClaw proxy missing `session_id` in forwarded requests | Bug fix — enables server-side session routing for concurrent Cowork sessions |

**Net velocity:** 9 PRs closed (7 security/UX fixes, 2 features) vs. 8 open — project is **paying down technical debt and hardening security** before feature expansion.

## 4. Community Hot Topics
| Item | Activity | Core Need |
|------|----------|-----------|
| [#1813](https://github.com/netease-youdao/LobsterAI/issues/1813) (Closed) | 8 comments | **DeepSeek V4 schema/tool payload rejection** — provider-side incompatibility blocking LLM calls; users need either provider config update or fallback handling |
| [#1698](https://github.com/netease-youdao/LobsterAI/issues/1698) (Open) | 3 comments | **Port/process conflict** between LobsterAI (有道龙虾) and 智企帝王蟹 on macOS (launchd gateway clash) — multi-app coexistence requirement |
| [#1796](https://github.com/netease-youdao/LobsterAI/issues/1796) (Closed) | 3 comments | **Write/Edit tool execution failing persistently** — core agent tooling regression |
| [#1783](https://github.com/netease-youdao/LobsterAI/issues/1783) (Open) | 2 comments | **Diff rendering broken** — root-caused to `extractDiffFromToolInput` only checking top-level `old_str`/`new_str`; needs nested payload handling |
| [#1797](https://github.com/netease-youdao/LobsterAI/issues/1797) (Closed) | 2 comments, 1 👍 | **Bulk conversation deletion** — context hygiene / token budget management |

**Signal:** Users are hitting **provider compatibility edges (DeepSeek V4)**, **multi-app runtime conflicts**, and **core tooling regressions (write, diff)** — areas where robustness lags behind feature surface.

## 5. Bugs & Stability — Ranked by Severity
| Severity | Issue | Status | Fix PR? |
|----------|-------|--------|---------|
| **Critical** | [#1813](https://github.com/netease-youdao/LobsterAI/issues/1813) DeepSeek V4 request schema rejected | Closed (stale) | No — likely provider-side; needs adapter update |
| **High** | [#1796](https://github.com/netease-youdao/LobsterAI/issues/1796) Write/Edit tools always fail | Closed (stale) | No linked PR; may be fixed in unmerged changes |
| **High** | [#1698](https://github.com/netease-youdao/LobsterAI/issues/1698) Gateway port conflict with 智企帝王蟹 (必现) | Open | No — requires runtime port coordination or namespacing |
| **Medium** | [#1783](https://github.com/netease-youdao/LobsterAI/issues/1783) Diff rendering broken (nested `old_str`/`new_str`) | Open | No — root cause identified in `extractDiffFromToolInput` |
| **Medium** | [#1714](https://github.com/netease-youdao/LobsterAI/issues/1714) Win11 install yields white/invalid icons | Open | No — installer/packaging issue |
| **Low** | [#1751](https://github.com/netease-youdao/LobsterAI/issues/1751) Scheduled task notification copy incorrect | Open | No — i18n/copy bug |

**Note:** Three security PRs (#1831–#1833) were merged today addressing **credential leakage** and **IPC sandbox escape** — these were latent critical vulnerabilities, not user-reported bugs.

## 6. Feature Requests & Roadmap Signals
| Request | Source | Likelihood for Next Version |
|---------|--------|-----------------------------|
| **OAuth2 / Modern Auth for Outlook/Exchange** | [#1745](https://github.com/netease-youdao/LobsterAI/issues/1745) | Medium — enterprise email integration gap; requires IMAP/SMTP OAuth flow implementation |
| **Dynamic `temperature` adjustment per conversation** | [#1688](https://github.com/netease-youdao/LobsterAI/issues/1688) | Low — niche; could be a model-settings UI enhancement |
| **Bulk conversation deletion** | [#1797](https://github.com/netease-youdao/LobsterAI/issues/1797) | High — closed but with 👍; aligns with context-management UX; easy SQLite + UI addition |
| **TTS read-aloud for AI replies (Cowork)** | [#1682](https://github.com/netease-youdao/LobsterAI/pull/1682) | **High** — PR open, zero-dep Web Speech API, UX polish |
| **Skeleton loading / empty-state polish** | [#1769](https://github.com/netease-youdao/LobsterAI/pull/1769), [#1770](https://github.com/netease-youdao/LobsterAI/pull/1770) | **High** — PRs open, design-system consistent, low risk |
| **Agent-switch clears home draft input** | [#1707](https://github.com/netease-youdao/LobsterAI/pull/1707) | **High** — PR open, clear UX bug fix |
| **Model-provider prefix preservation for slashed IDs** | [#2452](https://github.com/netease-youdao/LobsterAI/pull/2452) | **High** — newest PR (Aug 7), fixes DeepSeek/custom provider routing |

**Prediction:** Next patch will likely ship **Cowork UX polish batch** (TTS, skeletons, empty states, draft preservation, i18n fix) + **provider routing fix (#2452)**. OAuth2 email and bulk delete are longer-horizon.

## 7. User Feedback Summary
| Pain Point | Evidence | Sentiment |
|------------|----------|-----------|
| **Installation & coexistence fragility** | #1698 (macOS gateway conflict), #1714 (Win11 white icons) | 😠 Frustrated — "必现" (100% repro), blocks multi-app workflows |
| **Core tooling reliability** | #1796 (write tool fail), #1783 (diff broken) | 😠 Frustrated — "last few days", "update the app, still the same" |
| **Provider compatibility lag** | #1813 (DeepSeek V4 schema reject) | 😟 Concerned — blocks access to new models |
| **Context management gaps** | #1797 (bulk delete), #1688 (dynamic temperature) | 😐 Neutral — power-user asks, not blockers |
| **Email integration ceiling** | #1745 (OAuth2 blocked, app passwords disabled) | 😟 Concerned — "完全禁止了", no workaround |
| **Security awareness** | No direct user reports, but 3 critical security PRs merged | 👍 Positive signal — maintainers proactively hardening |

**Overall:** **Mixed** — power users hit sharp edges on installation, tooling, and provider support; maintainers responding with security/UX debt paydown rather than new features.

## 8. Backlog Watch — Stale Items Needing Maintainer Attention
| Item | Age | Why It Matters |
|------|-----|----------------|
| [#1698](https://github.com/netease-youdao/LobsterAI/issues/1698) Port conflict (LobsterAI + 智企帝王蟹) | 4 months | **100% repro on macOS**; blocks enterprise dual-app deployment; needs launchd port namespacing or single-gateway architecture |
| [#1783](https://github.com/netease-youdao/LobsterAI/issues/1783) Diff rendering root cause identified | 4 months | **Detailed technical analysis provided** by user; fix is localized to `extractDiffFromToolInput` — low effort, high visibility |
| [#1745](https://github.com/netease-youdao/LobsterAI/issues/1745) OAuth2 email support | 4 months | **Hard blocker for Microsoft 365/Outlook users**; app passwords deprecated; requires auth flow redesign |
| [#1688](https://github.com/netease-youdao/LobsterAI/issues/1688) Dynamic temperature | 4 months | Simple model-settings enhancement; good "good first issue" candidate |
| [#1765](https://github.com/netease-youdao/LobsterAI/pull/1765) `@headlessui/react` 1.7 → 2.2 (dependabot) | 4 months | **Major version bump**; may break UI components; needs test pass before merge |
| [#2452](https://github.com/netease-youdao/LobsterAI/pull/2452) Provider prefix for slashed model IDs | 10 days | **Newest PR**, fixes custom/DeepSeek provider routing; should be fast-tracked for next release |

---

**Health Score:** 🟡 **Caution** — Strong security posture improvement, but **user-facing stability regressions** (write tool, diff, install, provider compat) and **multi-app coexistence** remain unresolved. Velocity is skewed toward debt paydown; feature throughput is low. Recommend prioritizing #1783, #1698, #2452, and the Cowork UX PR batch for next patch.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-08-17

## 1. Today's Overview
Moltis shows high maintenance velocity with **8 PRs closed/merged and 3 issues updated** in the last 24 hours, despite zero new releases. The project is actively resolving CI failures, flaky tests, and security hardening while integrating a new AI agent provider (MiniMax Code). Two open issues indicate immediate attention needs: a heartbeat scheduling bug and a CI gate blocked by oversized files. Overall project health appears strong—rapid PR turnover, active dependency management, and systematic test stabilization.

## 2. Releases
No new releases published today.

## 3. Project Progress — Merged/Closed PRs (8 total)

| PR | Type | Summary | Impact |
|----|------|---------|--------|
| [#1147](https://github.com/moltis-org/moltis/pull/1147) | **Fix** | CalDAV `list_events` now honors time ranges via RFC 4791 `calendar-query` REPORT instead of fetching all resources | Reduces unnecessary data transfer; improves sync performance for calendars with large histories |
| [#1093](https://github.com/moltis-org/moltis/pull/1093) | **Feature** | Per-account/channel/user `activity_log` visibility settings (`all`, `errors_only`, `off`) with override precedence | Gives operators fine-grained control over channel reply logging noise |
| [#1201](https://github.com/moltis-org/moltis/pull/1201) | **Fix** | Threads `start_background_tasks` into memory runtime builder; unblocks compilation on `main` | Restores buildability; prerequisite for test fix in #1203 |
| [#1203](https://github.com/moltis-org/moltis/pull/1203) | **Test Fix** | Runs flaky push fanout test on a paused clock (closes [#1193](https://github.com/moltis-org/moltis/issues/1193)) | Eliminates intermittent CI failures under full-suite load |
| [#1186](https://github.com/moltis-org/moltis/pull/1186) | **Fix** | Normalizes recovery phrase (strip dashes, uppercase) before hashing for vault unsealing | Fixes mismatch between stored hash and input normalization; improves UX for phrase entry |
| [#1180](https://github.com/moltis-org/moltis/pull/1180) | **Security** | Hardens model/zip path handling: prevents directory traversal via malicious zip or HuggingFace repo | Mitigates arbitrary file write → code execution risk; critical security fix |
| [#1200](https://github.com/moltis-org/moltis/pull/1200) | **Chore** | Dependabot: bumps `postcss` (web/ui, docs) and `js-yaml` (docs) | Routine dependency hygiene |

**Net progress**: Core gateway runtime stabilized, CalDAV efficiency improved, vault UX smoothed, security surface reduced, and CI flakiness addressed—all in one day.

## 4. Community Hot Topics
No issues or PRs have comments or reactions (`👍: 0` across all items). Activity is maintainer-driven; community discussion is minimal in this window. The most structurally significant items are:
- **[#1202](https://github.com/moltis-org/moltis/issues/1202)** — CI gate blocked on main (2 files >1500 lines); requires refactor or config adjustment
- **[#1204](https://github.com/moltis-org/moltis/pull/1204)** — New AI agent integration (MiniMax Code ACP); expands provider ecosystem

## 5. Bugs & Stability — Ranked by Severity

| Rank | Issue | Severity | Status | Fix PR |
|------|-------|----------|--------|--------|
| 1 | [#1180](https://github.com/moltis-org/moltis/pull/1180) — Zip/HF model path traversal → arbitrary file write | **Critical (Security)** | **Fixed & Merged** | #1180 |
| 2 | [#1205](https://github.com/moltis-org/moltis/issues/1205) — Heartbeat ignores `active_hours`, runs continuously | **High (Functional)** | **Open** | None yet |
| 3 | [#1193](https://github.com/moltis-org/moltis/issues/1193) — Flaky push fanout timeout test under full suite | **Medium (CI Stability)** | **Closed** | [#1203](https://github.com/moltis-org/moltis/pull/1203) |
| 4 | [#1202](https://github.com/moltis-org/moltis/issues/1202) — Format CI fails: 2 files exceed 1500-line limit | **Medium (CI Gate)** | **Open** | None yet |
| 5 | [#1186](https://github.com/moltis-org/moltis/pull/1186) — Vault recovery phrase hash mismatch | **Low (UX)** | **Fixed & Merged** | #1186 |

**Note**: Critical security fix (#1180) and flaky test (#1193) resolved same day. Heartbeat bug (#1205) is the only unregressed functional regression.

## 6. Feature Requests & Roadmap Signals
- **[#1204](https://github.com/moltis-org/moltis/pull/1204)** — **MiniMax Code ACP agent** (open, authored by `hetaoBackend`). Adds `acp-minimax-code` external-agent kind, executable detection, registry entry, docs, and UI fixtures. Signals continued expansion of **ACP (Agent Client Protocol)** provider support alongside existing agents. Likely to land in next minor release.
- **Implicit**: File-size lint (#1202) may drive modularization of `store.rs` (1799 lines) and `admin.rs` (1531 lines)—architectural refactor signal.

## 7. User Feedback Summary
No direct user comments in this window. Inferred pain points from issues:
- **Heartbeat scheduling** (#1205): Users configuring `active_hours` expect quiet periods; daemon ignores config → resource waste, noise.
- **Vault unsealing** (#1186): Users entering recovery phrases with dashes/lowercase faced silent failures; now fixed.
- **CalDAV sync** (#1147): Large calendars caused full fetches; time-range filtering now works per spec.
- **Activity log noise** (#1093): Operators wanted per-channel/user log verbosity control; delivered.

## 8. Backlog Watch — Items Needing Maintainer Attention
| Item | Age | Risk | Suggested Action |
|------|-----|------|------------------|
| [#1202](https://github.com/moltis-org/moltis/issues/1202) — Format CI red on main | 1 day | Blocks merge pipeline; two oversized files from commit 9b47001a | Split `store.rs`/`admin.rs` or adjust `check-file-size.sh` threshold; high priority to unblock CI |
| [#1205](https://github.com/moltis-org/moltis/issues/1205) — Heartbeat ignores active hours | 1 day | Functional regression affecting all scheduled users | Assign investigation; likely in heartbeat scheduler logic |
| [#1204](https://github.com/moltis-org/moltis/pull/1204) — MiniMax Code ACP agent | 1 day | New feature PR; needs review for config validation, UI fixtures, detection logic | Review & merge to expand agent registry |
| [#1093](https://github.com/moltis-org/moltis/pull/1093) — Activity log visibility | 75 days | Long-lived PR finally merged; verify no follow-up issues | Monitor for edge-case reports post-merge |

---

**Bottom line**: Moltis is in a healthy, high-throughput maintenance phase—security, stability, and CI hygiene are being systematically addressed. The two open issues (#1202, #1205) are the only immediate blockers; both are tractable. Next release will likely include MiniMax Code agent and the accumulated fixes.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (QwenPaw) Project Digest — 2026-08-17

## 1. Today's Overview
CoPaw showed **high contributor activity** with 9 open PRs updated in the last 24 hours — all from first-time contributors — though none were merged yet. Issue velocity remains steady (9 updated, 3 closed), dominated by crash reports, UI regressions, and plugin/API extensibility requests. The project is in a **feature-hardening phase** with multiple small fixes targeting video handling, OAuth token rotation, cron job sync, and chat history rendering. No release was cut today; the next version will likely bundle these fixes alongside the larger provider-unification work (PR #6302) and the new DataPaw runtime (PR #6940).

## 2. Releases
**No new releases today.** Current stable remains `v2.1.0` (referenced in crash reports #7063, #7065).

## 3. Project Progress
*No PRs were merged or closed in the last 24h.* All 9 updated PRs remain open. Notable advances in review:

| PR | Area | Status | Key Change |
|----|------|--------|------------|
| [#6940](https://github.com/agentscope-ai/QwenPaw/pull/6940) | **Core/Infra** | Ready for review | Adds native **DataPaw app runtime** + durable analysis workspace (major new capability) |
| [#6302](https://github.com/agentscope-ai/QwenPaw/pull/6302) | **Providers/Models** | Open | Unifies provider discovery, model metadata, routing, fallback, and agent-level model controls |
| [#7072](https://github.com/agentscope-ai/QwenPaw/pull/7072) | **Console/API** | New | Background chat **task list API** (enables multi-agent coordination) |
| [#7071](https://github.com/agentscope-ai/QwenPaw/pull/7071) | **Agents/Video** | New | Makes `view_video` inline cap **configurable** (was hardcoded 2 MB) |
| [#7070](https://github.com/agentscope-ai/QwenPaw/pull/7070) | **Agents/Video** | New | Fixes silent failure of `view_video` on **OpenAI Responses API** path |
| [#7069](https://github.com/agentscope-ai/QwenPaw/pull/7069) | **Console/UI** | New | Renders **data-URL images** in historical messages on session reload |
| [#7067](https://github.com/agentscope-ai/QwenPaw/pull/7067) | **Console/Routing** | New | Adds `/chat/:agentId/:sessionId` deep-link support for multi-agent workspaces |
| [#7066](https://github.com/agentscope-ai/QwenPaw/pull/7066) | **Auth/Drivers** | New | Persists **rotated refresh tokens** for OAuth2 auth-code providers (e.g., XMind) |
| [#7064](https://github.com/agentscope-ai/QwenPaw/pull/7064) | **CLI/Cron** | New | Syncs top-level `text` field on `cron update --text` for agent jobs |

## 4. Community Hot Topics
| Item | Type | Comments | Core Need |
|------|------|----------|-----------|
| [#7063](https://github.com/agentscope-ai/QwenPaw/issues/7063) | Bug (Closed) | 3 | **Critical crash** in `_execute_tool_call`: `async for` used on a coroutine instead of async generator — fixed by correcting the iteration pattern |
| [#7003](https://github.com/agentscope-ai/QwenPaw/issues/7003) | Proposal (Closed) | 3 | **External memory layer (ViBo)** pitch: encrypted, session-persistent memory with 97.5% token reduction — reflects demand for **long-term agent memory** without context stuffing |
| [#7052](https://github.com/agentscope-ai/QwenPaw/issues/7052) | Enhancement | 2 | **Plugin `system_prompt` permission** — enterprise users need to inject proprietary prompts without exposing them in the chat UI |
| [#7073](https://github.com/agentscope-ai/QwenPaw/issues/7073) | Feature | 1 | **Skill name deduplication** — workspace skills with same name as built-ins load both, causing conflicts |
| [#7068](https://github.com/agentscope-ai/QwenPaw/issues/7068) | Enhancement | 1 | **File viewer language support** — C# and shader formats (`.shader`, `.gdshader`, `.hlsl`) for game-dev workflows |

**Underlying themes:**  
- **Stability** (crashes, history loss, video handling)  
- **Enterprise/plugin extensibility** (hidden prompts, skill isolation)  
- **Developer experience** (deep links, multi-agent task visibility, broader language rendering)

## 5. Bugs & Stability (Ranked by Severity)
| Severity | Issue | Description | Fix PR |
|----------|-------|-------------|--------|
| **Critical** | [#7063](https://github.com/agentscope-ai/QwenPaw/issues/7063) | Agent **crashes on every tool call** (`TypeError: async for requires async generator, got coroutine`) | Closed (fix implied in closure) |
| **High** | [#7065](https://github.com/agentscope-ai/QwenPaw/issues/7065) | **Chat history truncation** after ~7 rounds — only last 3–4 messages visible, scroll doesn’t load earlier | None yet |
| **High** | [#7074](https://github.com/agentscope-ai/QwenPaw/issues/7074) | **Frequent crashes requiring page refresh** to restart — high recurrence reported | None yet |
| **Medium** | [#6471](https://github.com/agentscope-ai/QwenPaw/issues/6471) | **Cron misfire** after event-loop idle (APScheduler `AsyncIOScheduler` doesn’t trigger) | None yet |
| **Medium** | [#7059](https://github.com/agentscope-ai/QwenPaw/issues/7059) | `view_video` **silent failure** on OpenAI Responses API (Volcengine Ark) | [#7070](https://github.com/agentscope-ai/QwenPaw/pull/7070) |
| **Medium** | [#7060](https://github.com/agentscope-ai/QwenPaw/issues/7060) | `view_video` **hardcoded 2 MB inline cap** overrides provider config | [#7071](https://github.com/agentscope-ai/QwenPaw/pull/7071) |
| **Medium** | [#7051](https://github.com/agentscope-ai/QwenPaw/issues/7051) | **Data-URL images break** in history on session reload | [#7069](https://github.com/agentscope-ai/QwenPaw/pull/7069) |
| **Medium** | [#7053](https://github.com/agentscope-ai/QwenPaw/issues/7053) | **Rotated OAuth refresh tokens not persisted** (XMind, etc.) | [#7066](https://github.com/agentscope-ai/QwenPaw/pull/7066) |
| **Low** | [#7048](https://github.com/agentscope-ai/QwenPaw/issues/7048) | `cron update --text` **doesn’t sync top-level `text`** field for agent jobs | [#7064](https://github.com/agentscope-ai/QwenPaw/pull/7064) |

## 6. Feature Requests & Roadmap Signals
| Request | Issue/PR | Likelihood for Next Release | Rationale |
|---------|----------|-----------------------------|-----------|
| **Per-agent/session `reasoning_effort` override** | [#7062](https://github.com/agentscope-ai/QwenPaw/issues/7062) | High | Aligns with PR #6302’s agent-level model controls; low implementation risk |
| **Plugin `system_prompt` permission (hidden from UI)** | [#7052](https://github.com/agentscope-ai/QwenPaw/issues/7052) | Medium | Enterprise need; requires plugin API surface change |
| **Skill name deduplication (workspace vs built-in)** | [#7073](https://github.com/agentscope-ai/QwenPaw/issues/7073) | High | Simple fix in `builder.py`; prevents silent conflicts |
| **File viewer: C# + shader language support** | [#7068](https://github.com/agentscope-ai/QwenPaw/issues/7068) | Medium | Adds lexers to existing viewer; game-dev niche but vocal |
| **Background task list API** | [#7072](https://github.com/agentscope-ai/QwenPaw/pull/7072) | High | Already implemented; unblocks multi-agent UIs |
| **DataPaw native runtime & workspace** | [#6940](https://github.com/agentscope-ai/QwenPaw/pull/6940) | Medium (major) | Large feature; likely targets a minor version bump (v2.2) |
| **Unified provider/model catalog & routing** | [#6302](https://github.com/agentscope-ai/QwenPaw/pull/6302) | Medium (major) | Foundational refactor; may ship behind flag first |

## 7. User Feedback Summary
| Pain Point | Evidence | Sentiment |
|------------|----------|-----------|
| **Tool-call crashes block all agent workflows** | #7063 (consistent crash on every tool call) | 😡 Critical blocker |
| **Chat history disappears mid-conversation** | #7065 (only last 3–4 messages visible after 7 rounds) | 😡 High frustration |
| **App crashes frequently, requires manual refresh** | #7074 (high-frequency “normal operation crash”) | 😡 Unstable feel |
| **Cron jobs silently stop after idle periods** | #6471 (misfire on APScheduler/WSL2) | 😐 Reliability gap |
| **Video analysis broken on major provider paths** | #7059, #7060 (silent failure, hardcoded limits) | 😐 Feature gap |
| **OAuth re-auth needed due to token rotation bug** | #7053 (rotated refresh token not saved) | 😐 Enterprise friction |
| **Enterprise plugins leak proprietary prompts in UI** | #7052 (no `system_prompt` privacy control) | 😐 Adoption blocker |
| **Skill conflicts when naming matches built-ins** | #7073 (both workspace + built-in load) | 😐 Developer annoyance |
| **No syntax highlighting for C#/shaders** | #7068 (game-dev workflow gap) | 😐 Niche but real |

**Positive signals:** Rapid first-time contributor response to bugs (7 fix PRs opened today), active maintainer triage (3 issues closed), and architectural PRs (#6302, #6940) progressing.

## 8. Backlog Watch — Items Needing Maintainer Attention
| Item | Age | Why It Matters |
|------|-----|----------------|
| [#6471](https://github.com/agentscope-ai/QwenPaw/issues/6471) | **22 days** | Cron misfire on idle event loops — affects scheduled agents in production; no fix PR yet |
| [#6302](https://github.com/agentscope-ai/QwenPaw/pull/6302) | **27 days** | Massive provider/model unification — blocks per-agent `reasoning_effort` (#7062) and cleaner model UX; needs review/merge decision |
| [#6940](https://github.com/agentscope-ai/QwenPaw/pull/6940) | **5 days** | DataPaw runtime — flagship feature; marked “ready-for-human-review” but no maintainer comments yet |
| [#7065](https://github.com/agentscope-ai/QwenPaw/issues/7065) | **1 day** | Chat history truncation — high user impact, no fix PR; may relate to session serialization or virtual scrolling |
| [#7074](https://github.com/agentscope-ai/QwenPaw/issues/7074) | **1 day** | Frequent crashes requiring refresh — needs stack trace analysis; could be same root as #7063 or separate |

---

**Health Indicators**  
- 🟢 **Contributor influx**: 7/9 PRs from first-time contributors in 24h  
- 🟢 **Bug fix velocity**: 6 fix PRs opened for 7 reported bugs (same day)  
- 🟡 **Merge throughput**: 0 merges in 24h — review bandwidth may be bottleneck  
- 🟡 **Critical bugs open**: #7065, #7074 unaddressed  
- 🔴 **No release cadence**: Last release `v2.1.0`; fixes accumulating without ship

**Recommendation**: Prioritize merging the 6 bug-fix PRs (#7064–#7071) and triaging #7065/#7074 for a `v2.1.1` patch. Schedule review for #6302 and #6940 to unblock roadmap features.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-08-17

## 1. Today's Overview

ZeroClaw shows **exceptionally high development velocity** with 98 total items (48 issues + 50 PRs) updated in the last 24 hours. The project is in a heavy **RFC and architecture-refactoring phase** — 15+ open RFCs cover chat completions compatibility, unified attachments, security posture, WASM plugin lifecycle, telemetry, and agent swarms. No new releases were published, indicating the team is consolidating foundational changes before the next version. Test infrastructure stability is a visible concern: multiple flaky tests under the new "Parallel Runtime Test" gate are blocking unrelated PRs. Security hardening (egress policy, proxy handling, provider fallback circuit breakers) and provider ecosystem expansion (Hailo-Ollama, OpenAI Responses) are parallel tracks.

---

## 2. Releases

**No new releases** in the last 24 hours. Current version remains `0.8.4` (per RFC #6808 tracker). The project appears to be accumulating changes for a significant 0.9 or 1.0 milestone given the volume of RFCs in progress.

---

## 3. Project Progress — Merged/Closed PRs (Last 24h)

| PR | Title | Type | Impact |
|----|-------|------|--------|
| [#9580](https://github.com/zeroclaw-labs/zeroclaw/pull/9580) | **fix(security): harden built-in HTTP egress on shared network guard** | Security, XL | Hardens HTTP egress boundary; moves network-classification primitives to `zeroclaw-infra::net_guard` for reuse by plugin egress work. **Closed** (merged into dependent PRs). |
| [#9416](https://github.com/zeroclaw-labs/zeroclaw/pull/9416) | **docs(tools): document `AllToolsResult.tools` as pre-filter registry** | Docs, XS | Clarifies that `tools` is the filtered view vs `unfiltered_tool_arcs`. **Closed** (merged). |
| [#9953](https://github.com/zeroclaw-labs/zeroclaw/issues/9953) | **Bug: SOP step schema validation rejects double-encoded output** | Bug, Runtime/SOP | SOP validation now correctly unwraps double-encoded JSON strings. **Closed** (fixed). |
| [#9808](https://github.com/zeroclaw-labs/zeroclaw/pull/9808) | **chore(deps): bump rust-all group (46 updates)** | Dependencies, L | Updates `clap`, `tokio`, `serde`, `tracing`, `reqwest`, `tonic`, `wasmtime`, etc. **Open** (dependabot, awaiting review). |

> **Note:** Only 4 PRs show "merged/closed" status in the data; the majority (46) remain open, reflecting the RFC-heavy, pre-merge-review state.

---

## 4. Community Hot Topics — Most Active Issues/PRs

| Item | Comments | Category | Core Need |
|------|----------|----------|-----------|
| [#6808](https://github.com/zeroclaw-labs/zeroclaw/issues/6808) **RFC: Work Lanes, Board Automation, Label Cleanup** | 23 | Governance/Process | **Ratified & rolling out** — streamlines work routing without manual overhead. Tracker for 0.8.0-beta-1 → 0.8.4. |
| [#8603](https://github.com/zeroclaw-labs/zeroclaw/issues/8603) **RFC: ZeroClaw Chat Completions Profile** | 22 | Gateway/Architecture | **High priority** — enables OpenAI-compatible clients (Open WebUI, LobeChat, Continue.dev, Aider, LangChain, OpenAI SDK) to connect natively. |
| [#9488](https://github.com/zeroclaw-labs/zeroclaw/issues/9488) **RFC: Unified Attachment Architecture** | 17 | Channel/Gateway/Web | Unifies file/image handling across web chat and channels (Telegram, Matrix, etc.). |
| [#6954](https://github.com/zeroclaw-labs/zeroclaw/issues/6954) **RFC: Provenance & Reply Contract for Internal Agent Turns** | 14 | Runtime/Architecture | Defines identity, binding, and reply lifecycle for agent-initiated turns (cron, webhooks, etc.). |
| [#6971](https://github.com/zeroclaw-labs/zeroclaw/issues/6971) **RFC: Security Posture & Credential Boundaries** | 14 | Security/Architecture | Holistic security model: credential handling, runtime isolation, ingress trust, sandboxing, tool approval. |
| [#6165](https://github.com/zeroclaw-labs/zeroclaw/issues/6165) **RFC: Lighter Core via External Integrations** | 14 | Architecture/MCP | Moves long-tail integrations out of core; prefers MCP/standard protocols. |
| [#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) **Tracker: Maintainer Decision Queue for RFCs** | 13 | Process | Active decision queue for RFCs/design issues needing maintainer attention. |
| [#8780](https://github.com/zeroclaw-labs/zeroclaw/issues/8780) **RFC: Realtime Speech-to-Speech for Gemini Live** | 13 | Channel/Voice | Optional feature-gated realtime voice channel (Gemini Live first). v2 rewrites as broker contract. |

**Underlying themes:**  
- **Interoperability** — OpenAI Chat Completions, MCP, standard protocols  
- **Governance scaling** — Automated board management, decision queues  
- **Security hardening** — Egress policy, credential boundaries, circuit breakers  
- **Real-time multimodal** — Voice, attachments, unified UX across channels  

---

## 5. Bugs & Stability — Reported Today (Ranked by Severity)

| Issue | Severity | Component | Status | Fix PR? |
|-------|----------|-----------|--------|---------|
| [#9965](https://github.com/zeroclaw-labs/zeroclaw/issues/9965) **ETXTBSY on runtime-written executable test fixtures** | P1 (medium risk) | Cron/Runtime/Tests | Accepted | Tracking task; no fix PR yet |
| [#10013](https://github.com/zeroclaw-labs/zeroclaw/issues/10013) **Edge TTS cancellation test misses fake child startup** | P1 (S1 - workflow blocked) | Channel/TTS | Accepted | No fix PR yet |
| [#9655](https://github.com/zeroclaw-labs/zeroclaw/issues/9655) **Approval cards carry no position → indistinguishable** | P1 (high risk) | Agent/Channel/Telegram/WASM | Accepted | No fix PR yet |
| [#10006](https://github.com/zeroclaw-labs/zeroclaw/issues/10006) **`endpoint_lock_is_held_through_guard_cleanup` flakes under parallel gate** | P1 (high risk) | Runtime/Tests | In Progress | No fix PR yet (task to harden test) |
| [#9811](https://github.com/zeroclaw-labs/zeroclaw/issues/9811) **`/health` reports channel healthy that never connected** | P1 (high risk) | Channel/Daemon/Gateway/Telegram | Accepted | No fix PR yet |
| [#10020](https://github.com/zeroclaw-labs/zeroclaw/issues/10020) **Agentic independent delegates ignore target thinking policy** | P2 (S2) | Runtime/Delegate | In Progress | No fix PR yet |
| [#10037](https://github.com/zeroclaw-labs/zeroclaw/issues/10037) **`POST /api/cron` silently stores invalid `session_target`** | P2 (S2) | Gateway/API | In Progress | No fix PR yet |
| [#9953](https://github.com/zeroclaw-labs/zeroclaw/issues/9953) **SOP schema validation rejects double-encoded output** | P1 (S2) | Runtime/SOP | **Closed** | Fixed (merged) |

**Pattern:** Test flakiness under the new **Parallel Runtime Test gate** is the dominant stability issue (3+ P1 tasks). Channel health reporting and approval UX are user-visible regressions.

---

## 6. Feature Requests & Roadmap Signals

| Signal | Source | Likelihood for Next Version |
|--------|--------|----------------------------|
| **OpenAI Chat Completions API compatibility** | [#8603](https://github.com/zeroclaw-labs/zeroclaw/issues/8603) (22 comments, P2, high risk) | **Very High** — enables entire ecosystem of clients; active RFC |
| **Unified attachment architecture** | [#9488](https://github.com/zeroclaw-labs/zeroclaw/issues/9488) (17 comments, P2, high risk) | **High** — crosses web, Telegram, Matrix; UX critical |
| **Realtime speech-to-speech (Gemini Live)** | [#8780](https://github.com/zeroclaw-labs/zeroclaw/issues/8780) (13 comments, P2, high risk) | **Medium-High** — v2 broker contract design; feature-gated |
| **Provider fallback circuit breakers** | [#7881](https://github.com/zeroclaw-labs/zeroclaw/issues/7881) (accepted, P2, medium risk) | **High** — operational resilience; small scope |
| **Intra-family provider fallback notices** | [#7883](https://github.com/zeroclaw-labs/zeroclaw/issues/7883) (accepted, P3, medium risk) | **Medium** — observability improvement |
| **Date-range conditional cron schedules** | [#7887](https://github.com/zeroclaw-labs/zeroclaw/issues/7887) (accepted, P3, high risk) | **Medium** — niche but accepted |
| **WASM plugin lifecycle hooks** | [#7822](https://github.com/zeroclaw-labs/zeroclaw/issues/7822) (5 comments, P2, high risk) | **Medium** — extends plugin ABI; needs author action |
| **Schema-validated memory consolidation** | [#6998](https://github.com/zeroclaw-labs/zeroclaw/issues/6998) (accepted, P2, high risk) | **High** — fixes fragile JSON parsing; 5 comments |
| **Ephemeral agent swarms (zeroclaw swarm)** | [#10025](https://github.com/zeroclaw-labs/zeroclaw/issues/10025) (1 comment, new RFC) | **Low-Medium** — early RFC; orchestration vision |
| **Staged opt-in product telemetry** | [#9621](https://github.com/zeroclaw-labs/zeroclaw/issues/9621) (6 comments, P2, high risk) | **Medium** — maintainers need usage data for decisions |

**Strongest signals:** Chat Completions profile, unified attachments, memory consolidation, provider fallback hardening — all have maintainer engagement and accepted/status:accepted labels.

---

## 7. User Feedback Summary

| Pain Point / Use Case | Evidence |
|------------------------|----------|
| **Cannot use ZeroClaw with standard OpenAI-compatible clients** | [#8603](https://github.com/zeroclaw-labs/zeroclaw/issues/8603) lists Open WebUI, LobeChat, Continue.dev, Aider, LangChain, OpenAI SDK — "clients that speak OpenAI Chat Completions protocol" |
| **Attachment handling inconsistent across web vs channels** | [#9488](https://github.com/zeroclaw-labs/zeroclaw/issues/9488) — "unified attachment architecture for web chat and channels" |
| **Telegram group sessions don't support per-user context** | [#9772](https://github.com/zeroclaw-labs/zeroclaw/pull/9772) — "hardcoded to `ChannelConversationScope::Sender`" blocks collaborative group workflows |
| **Health endpoint lies about channel status** | [#9811](https://github.com/zeroclaw-labs/zeroclaw/issues/9811) — `/health` shows "healthy" for Telegram channel that gets 404 on every poll |
| **Approval cards ambiguous when multiple tools pending** | [#9655](https://github.com/zeroclaw-labs/zeroclaw/issues/9655) — "back-to-back cards from one message are indistinguishable before tapping" |
| **SOP validation too strict on double-encoded JSON** | [#9953](https://github.com/zeroclaw-labs/zeroclaw/issues/9953) — fixed; shows real-world schema mismatch |
| **Memory/knowledge graph not scoped per agent** | [#9745](https://github.com/zeroclaw-labs/zeroclaw/pull/9745) — "shared SQLite graph… any agent could read/mutate any other agent's captured knowledge" |
| **CI flakiness blocks unrelated PRs** | [#9965](https://github.com/zeroclaw-labs/zeroclaw/issues/9965), [#10006](https://github.com/zeroclaw-labs/zeroclaw/issues/10006), [#10011](https://github.com/zeroclaw-labs/zeroclaw/issues/10011) — parallel test gate issues |

**Satisfaction signals:** Active RFC participation, detailed bug reports with reproduction steps, maintainers responding quickly (multiple "in-progress" P1/P2 bugs).  
**Dissatisfaction signals:** Test infrastructure regressions, health endpoint misleading, approval UX gaps, cross-agent memory leakage.

---

## 8. Backlog Watch — Long-Unanswered Important Items

| Item | Age | Why It Matters | Blockers |
|------|-----|----------------|----------|
| [#6165](https://github.com/zeroclaw-labs/zeroclaw/issues/6165) **RFC: Lighter Core via External Integrations** | ~113 days (since 2026-04-27) | Strategic direction: move integrations to MCP/standards; reduces core surface area. 14 comments, needs maintainer review. | Requires maintainer bandwidth; architectural scope. |
| [#6954](https://github.com/zeroclaw-labs/zeroclaw/issues/6954) **RFC: Provenance & Reply Contract for Internal Turns** | ~83 days (since 2026-05-26) | Foundational for cron, webhooks, delegated agents. Revision 2 posted 2026-08-05. | Complex lifecycle semantics; needs ratification. |
| [#6971](https://github.com/zeroclaw-labs/zeroclaw/issues/6971) **RFC: Security Posture & Credential Boundaries** | ~82 days (since 2026-05-27) | Holistic security model; prerequisite for compliance/enterprise. | Cross-cutting; touches every subsystem. |
| [#7822](https://github.com/zeroclaw-labs/zeroclaw/issues/7822) **RFC: WASM Plugin Lifecycle Hooks** | ~61 days (since 2026-06-17) | Enables third-party plugins to subscribe to agent events without core patches. | Needs author action; ABI stability concerns. |
| [#8396](https://github.com/zeroclaw-labs/zeroclaw/issues/8396) **RFC: Wire Protocol First-Class in Provider Construction** | ~51 days (since 2026-06-27) | Cleaner provider onboarding; supports Chat Completions RFC. | Needs author action; design complexity. |
| [#8691](https://github.com/zeroclaw-labs/zeroclaw/issues/8691) **Tracker: Restore ADR Baseline & Audit RFC Decisions** | ~44 days (since 2026

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/DenisZheng/agents-radar).*