# OpenClaw Ecosystem Digest 2026-06-24

> Issues: 187 | PRs: 500 | Projects covered: 13 | Generated: 2026-06-24 00:34 UTC

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

# OpenClaw Project Digest — 2026-06-24

## 1. Today's Overview

OpenClaw is experiencing a surge of community activity, with 187 issues and 500 PRs updated in the last 24 hours — a sign of a highly engaged contributor base and active maintainer review pipeline. The project remains in an active development cycle on the 2026.6.x line, with no new tagged releases today. The overwhelming focus of both issues and PRs is **session state integrity, completion delivery reliability, and compaction correctness** — indicating that the 2026.6.x migration (SQLite conversation stores, new compaction timeouts, stuck-session recovery) is generating significant real-world friction that the community is actively patching.

## 2. Releases

No new releases today.

## 3. Project Progress

### Merged / Closed PRs (notable)

| PR | Author | Summary |
|---|---|---|
| [#96226](https://github.com/openclaw/openclaw/pull/96226) | vincentkoc | **macOS**: Dropped Textual dependency from chat packaging in favor of native `AttributedString(markdown:)` — simplifies SwiftPM resolution and removes obsolete resource bundle requirements. |
| [#68936](https://github.com/openclaw/openclaw/pull/68936) | shadowleaf-studios | Added a PR review autofix pipeline using Claude Agent SDK, plus a Windows background daemon for supervising the gateway. |
| [#96230](https://github.com/openclaw/openclaw/pull/96230) | zhangguiping-xydt | **Fix**: Gateway restart recovery now durably reserves retry budget before dispatching resume, preventing wedged sessions from retrying across restarts. |

### Active PR Themes

- **Codex/ACP runtime hardening**: Multiple PRs ([96231](https://github.com/openclaw/openclaw/pull/96231), [95611](https://github.com/openclaw/openclaw/pull/95611), [96212](https://github.com/openclaw/openclaw/pull/96212), [96229](https://github.com/openclaw/openclaw/pull/96229)) address Codex plugin registry reuse, native post-tool middleware, remote image delivery, and per-agent environment variable contracts.
- **Compaction & session timeout correctness**: PRs [#95590](https://github.com/openclaw/openclaw/pull/95590) (preflight compaction now uses compaction timeout instead of inheriting outer reply signal) and [#96230](https://github.com/openclaw/openclaw/pull/96230) directly address long-standing timeout and retry issues.
- **Gateway diagnostics & readiness**: [#96128](https://github.com/openclaw/openclaw/pull/96128) fails readiness when storage can't be written (PVC/shared storage fix); [#96227](https://github.com/openclaw/openclaw/pull/96227) emits `model.usage` for HTTP ingress paths.
- **Memory & vector store dedup**: [#95724](https://github.com/openclaw/openclaw/issues/95724) (issue) and related work signal demand for workspace-scoped rather than agent-scoped vector indexes.

## 4. Community Hot Topics

### Top Issues by Engagement

| # | Issue | Comments | Signal |
|---|---|---|---|
| 1 | [#88838](https://github.com/openclaw/openclaw/issues/88838) — SQLite session/transcript migration via accessor seam | 35 💬 | Core architectural change; Path 3 file-backed seam adoption mostly complete. High maintainer attention. |
| 2 | [#96148](https://github.com/openclaw/openclaw/issues/96148) — iMessage source-reply latency instrumentation | 17 💬 | Performance investigation; tied to PRs #95621 and #95942. |
| 3 | [#92201](https://github.com/openclaw/openclaw/issues/92201) — Anthropic thinking signature invalid on replay; recovery wrapper never fires | 14 💬 | Critical correctness bug in embedded runner; "diamond lobster" rating. |
| 4 | [#90991](https://github.com/openclaw/openclaw/issues/90991) — Cron trigger contaminates global runtime state | 14 💬 | Closed; was a P1 systemic stability issue. |
| 5 | [#92043](https://github.com/openclaw/openclaw/issues/92043) — 180s compaction timeout too aggressive for legitimate long compactions | 10 💬 | 2 👍; user demand for configurable or partial-progress timeout. |

### Underlying Needs

- **Compaction reliability** is the dominant theme — users want partial-progress reuse, correct timeout scoping, and preflight compaction that doesn't inherit unrelated abort signals.
- **Session durability** — the SQLite migration (#88838) and stuck-session abort issues (#88870, #95833) reflect demand for crash-recoverable, long-lived sessions that don't silently lose state.
- **Multi-provider compatibility** — DeepSeek V4 Flash (#88657), NVIDIA Build (#95760), and Ollama (#94251) all have streaming/turn-completion bugs, suggesting the provider abstraction layer needs stronger integration test coverage.

## 5. Bugs & Stability

### Critical / P1 Bugs (Open)

| Issue | Severity | Status | Fix PR? |
|---|---|---|---|
| [#92201](https://github.com/openclaw/openclaw/issues/92201) — Anthropic thinking block signature invalid on replay | 🔴 P1 | Open, needs maintainer review | No |
| [#94228](https://github.com/openclaw/openclaw/issues/94228) — Native Anthropic path bricks long tool-use threads with invalid thinking signatures | 🔴 P1 | Open, needs live repro | No |
| [#92043](https://github.com/openclaw/openclaw/issues/92043) — 180s compaction timeout fails legitimate long compactions every turn | 🔴 P1 | Open | [#95590](https://github.com/openclaw/openclaw/pull/95590) partially addresses |
| [#95833](https://github.com/openclaw/openclaw/issues/95833) — Subagent abort-settle fails to release `.jsonl.lock`, permanently breaking session | 🔴 P1 | Open | No |
| [#92076](https://github.com/openclaw/openclaw/issues/92076) — Subagent completion delivery fails when requester session is inactive/locked | 🔴 P1 | Open | No |
| [#92057](https://github.com/openclaw/openclaw/issues/92057) — Gateway slow/timeouts under multi-session load | 🔴 P1 | Open | No |
| [#94939](https://github.com/openclaw/openclaw/issues/94939) — 6.x migration leaves channel conversation-store SQLite empty, breaks MS Teams | 🔴 P1 | Open | No |
| [#94251](https://github.com/openclaw/openclaw/issues/94251) — Ollama remote streaming not consumed; `model_call:started` never progresses | 🟡 P1 | Open | No |
| [#90288](https://github.com/openclaw/openclaw/issues/90288) — Non-Anthropic models output tool calls as plain text `[tool: exec]` | 🟡 P1 | Open | No |

### Recently Closed Bugs

| Issue | Resolution |
|---|---|
| [#90991](https://github.com/openclaw/openclaw/issues/90991) | Cron global state contamination — closed (fix shipped) |
| [#90404](https://github.com/openclaw/openclaw/issues/90404) | ACPX TypeError on `sessions_spawn(runtime="acp")` — closed |
| [#93465](https://github.com/openclaw/openclaw/issues/93465) | Windows ACPX `spawn EINVAL` — closed |
| [#95760](https://github.com/openclaw/openclaw/issues/95760) | NVIDIA Build provider stream cut mid-tool-call — closed |
| [#76729](https://github.com/openclaw/openclaw/issues/76729) | Feishu replies disappear after compaction rotation — closed |
| [#92273](https://github.com/openclaw/openclaw/issues/92273) | Tool Search breaks pre-compaction memory flush — closed |

## 6. Feature Requests & Roadmap Signals

### High-Signal Feature Requests

| Issue | 👍 | Likelihood | Notes |
|---|---|---|---|
| [#96156](https://github.com/openclaw/openclaw/issues/96156) — Let compaction providers be MCP servers | 0 | Medium | Aligns with MCP-first architecture trend |
| [#95793](https://github.com/openclaw/openclaw/pull/95793) (PR) — Opt-in self-evolving SOUL.md via reflection sub-turn | — | High | PR already open with `soul_update` tool |
| [#93422](https://github.com/openclaw/openclaw/issues/93422) — `/label` slash command & session naming for WebChat | 2 | Medium | UX improvement, low implementation cost |
| [#93068](https://github.com/openclaw/openclaw/issues/93068) — Global SSRF policy configuration | 2 | Medium | Security hardening; per-subsystem opt-in is fragmented |
| [#91945](https://github.com/openclaw/openclaw/issues/91945) — Upgrade Cloudflare AI Gateway to REST API | 1 | Low | Maintenance; Cloudflare deprecating Unified API |
| [#79047](https://github.com/openclaw/openclaw/issues/79047) — Preserve conversation context across cross-backend model switches | 1 | Low | Complex; requires session transcript normalization |
| [#42840](https://github.com/openclaw/openclaw/issues/42840) — MathJax/LaTeX support in Control UI | 7 | Low | Popular but low-complexity-impact request |

### Predicted Next Version Focus (2026.6.x patch or 2026.7.0)

1. **Compaction timeout & partial-progress fixes** — PRs like #95590 are stepping stones; expect a comprehensive compaction overhaul.
2. **SQLite conversation store stabilization** — migration bugs (#94939) and the accessor seam work (#88838) need to land fully.
3. **Thinking block / signature correctness** — both #92201 and #94228 are P1 diamond-lobster issues that will block stable Anthropic usage.
4. **SOUL.md self-evolution** — PR #95793 is a marquee feature that may anchor a minor release.

## 7. User Feedback Summary

### Pain Points

- **Session state loss during compaction** is the single most reported category — messages disappear, memory flushes are interrupted, and long sessions brick permanently. Users with long histories or slow providers are disproportionately affected.
- **Provider-specific streaming bugs** (DeepSeek, Ollama, NVIDIA Build) erode trust in multi-provider setups. Users report silent failures with no user-facing notification.
- **6.x migration regressions** — the conversation-store SQLite migration and stuck-session recovery changes introduced regressions that are still being tracked down. Users who upgraded from 5.x are hitting empty SQLite files and stuck sessions.
- **Tool call rendering inconsistency** — non-Anthropic models falling back to plain-text `[tool: exec]` instead of structured blocks degrades UX.

### Satisfaction Indicators

- High PR volume (500 in 24h) and active maintainer labeling (`clawsweeper:*` tags) suggest a responsive triage process.
- The "diamond lobster" rating system is being used to flag the most critical issues, helping maintainers prioritize.
- Users are providing detailed environment info, patches, and even video proof — indicating a technically sophisticated user base willing to contribute.

## 8. Backlog Watch

### Long-Open P1 / Critical Issues Needing Maintainer Attention

| Issue | Age | Status | Why It Matters |
|---|---|---|---|
| [#92201](https://github.com/openclaw/openclaw/issues/92201) — Anthropic thinking signature invalid on replay | 43 days | Needs maintainer review | Blocks reliable embedded Anthropic usage |
| [#88838](https://github.com/openclaw/openclaw/issues/88838) — SQLite session migration | 23 days | In progress, large scope | Core architecture; blocking other fixes |
| [#92043](https://github.com/openclaw/openclaw/issues/92043) — 180s compaction timeout too short | 44 days | Needs product decision | Affects all users with long sessions |
| [#88657](https://github.com/openclaw/openclaw/issues/88657) — DeepSeek V4 Flash incomplete turn | 54 days | Needs maintainer review | Provider compatibility regression |
| [#88870](https://github.com/openclaw/openclaw/issues/88870) — Stuck-session recovery aborts legitimate long runs | 53 days | Needs product decision | False-positive abort kills productive agents |
| [#85844](https://github.com/openclaw/openclaw/issues/85844) — Auto-update leaves stale hashed bundle imports | 31 days | Needs live repro | Silent post-update breakage |
| [#73910](https://github.com/openclaw/openclaw/issues/73910) — Codex ACP isolated COEX_HOME without auth bridge | 86 days | Needs product decision | Blocks Codex ACP usage |
| [#71712](https://github.com/openclaw/openclaw/issues/71712) — Agent-facing scheduling API with non-forgeable provenance | 90 days | Stale | Important for multi-agent setups |

### Stale but High-Value PRs

| PR | Age | Status |
|---|---|---|
| [#77828](https://github.com/openclaw/openclaw/pull/77828) — Sync/hermes arbiter mainline | 50 days | Needs proof |
| [#78664](https://github.com/openclaw/openclaw/pull/78664) — Cache provider tool schema normalization | 49 days | Ready for maintainer look |
| [#78574](https://github.com/openclaw/openclaw/pull/78574) — GitHub Copilot native web search | 49 days | Waiting on author |

---

**Summary**: OpenClaw is in a high-activity stabilization phase on the 2026.6.x line. The community is deeply engaged, but the backlog of P1 session/compaction bugs and the incomplete SQLite migration suggest the next patch release will be critical for restoring confidence in long-session reliability. The Codex/ACP runtime and self-evolving SOUL.md are the most exciting feature tracks to watch.

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: Personal AI Assistant & Agent Open-Source Ecosystem

**Date:** 2026-06-24 | **Generated by:** OWL

---

## 1. Ecosystem Overview

The personal AI agent open-source ecosystem is in a period of rapid, parallel maturation across a dozen actively maintained projects. The landscape is converging around a shared architectural stack — SQLite-backed session stores, MCP tool integration, multi-provider LLM routing, and gateway-mediated channel adapters — while diverging sharply in target deployment environments (cloud-native, desktop, mobile/embedded) and extensibility models (plugin systems, fork-friendly seams, WASM sandboxes). Community activity is exceptionally high: the nine active projects collectively processed **~220 issues and ~270 PRs** in a single 24-hour window, signaling a developer base that is stress-testing these frameworks in production-like configurations. The dominant pain vector across the ecosystem is **session state durability** — compaction correctness, migration reliability, and multi-turn consistency are the shared technical debt that will define which projects earn long-term user trust.

---

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Releases (24h) | Health Score | Notes |
|---|---|---|---|---|---|
| **OpenClaw** | 187 | 500 | None | 🔴 Active / Strained | Highest absolute volume; 500 PRs signals massive contributor engagement but also review bottleneck risk |
| **Hermes Agent** | 50 | 50 | None | 🟡 Active / Stabilizing | Post-v0.17.0 polish phase; credential/auth fragility is the critical weakness |
| **CoPaw** | 38 | 50 | v1.1.12.post2 | 🟡 Active / Regression-heavy | AgentScope 2.0 merge generating new bugs faster than fixes; 3 critical bugs open |
| **ZeroClaw** | 34 | 50 | None | 🟢 Active / Architectural expansion | Strong RFC process; plugin security hardening is the headline track |
| **NanoBot** | 11 | 39 | **v0.2.2** | 🟢 Healthy / Shipping | 140 PRs merged in release; 21 new contributors; best release velocity |
| **NanoClaw** | 1 | 12 | None | 🟢 Healthy / Low noise | Chat SDK 4.29.0 migration complete; Slack Socket Mode merged; minimal issue backlog |
| **IronClaw** | 21 | 42 | None | 🟡 Active / Transitioning | Reborn engine rewrite in progress; flaky CI and scheduler deadlock are blockers |
| **PicoClaw** | 3 | 17 | None | 🟢 Stable / Niche | Security hardening focus; Android/Termux crash is the critical open bug |
| **LobsterAI** | 1 | 11 | None | 🟡 Stale / Bottlenecked | 6 PRs stale 85+ days; critical upgrade-blocker issue (#1400) unresolved for 80+ days |
| **NullClaw** | 0 | 0 | None | ⚪ Minimal activity | Effectively in maintenance-only mode |
| **Moltis** | 0 | 1 | None | ⚪ Minimal activity | Near-zero community engagement |
| **TinyClaw** | 0 | 0 | None | ⚪ No activity | Dormant |
| **ZeptoClaw** | 0 | 0 | None | ⚪ No activity | Dormant |

**Health Score Key:** 🟢 Healthy — shipping, low backlog | 🟡 Active but strained — high volume or aging issues | 🔴 Critical pressure — review bottleneck or unresolved P1s | ⚪ Low/dormant activity

---

## 3. OpenClaw's Position

**Scale & Community Dominance.** OpenClaw is the ecosystem's reference implementation by sheer volume: its 500 PRs and 187 issues in 24 hours dwarf all peers. This reflects both its role as the most widely deployed agent framework and the friction that comes with that scale — the 2026.6.x migration (SQLite conversation stores, new compaction timeouts, stuck-session recovery) is generating the highest absolute count of regression reports in the ecosystem.

**Advantages vs. Peers:**
- **Breadth of channel integration**: OpenClaw supports the widest range of messaging channels (iMessage, Telegram, MS Teams, Feishu, WhatsApp, Slack) with the deepest per-channel feature sets (e.g., per-sender thinking overrides, rich message formatting).
- **Compaction sophistication**: Despite the current pain, OpenClaw's compaction system is the most architecturally advanced — preflight compaction, partial-progress reuse, and timeout scoping are features peers have not yet implemented.
- **Self-evolving SOUL.md** (PR #95793): A marquee capability no other project has attempted — opt-in agent self-reflection that modifies its own system prompt.
- **Diamond lobster rating system**: A structured severity classification that helps maintainers triage at scale.

**Technical Approach Differences:**
- OpenClaw uses a **monolithic gateway architecture** with SQLite-backed session stores, whereas ZeroClaw is pursuing a **WASM/plugin-sandboxed model** with capability-gated execution, and IronClaw is migrating to a **Reborn WebUI v2 stack** that lifts kernel functionality into userland extensions.
- OpenClaw's **Codex/ACP runtime** is the most mature multi-agent orchestration layer, rivaled only by Hermes Agent's emerging ACP client (Issue #5257, 16 👍).
- Compared to NanoBot's lightweight, fast-shipping approach (140 PRs in v0.2.2), OpenClaw's release cadence is slower and more cautious — appropriate for its scale but frustrating for users facing P1 bugs.

**Community Size Comparison:**
OpenClaw's contributor base is 5–10× larger than any peer. NanoBot's 21 new contributors in a single release is the closest competitor signal, but OpenClaw's sustained daily volume (500 PRs) suggests an order-of-magnitude larger active maintainer pool.

---

## 4. Shared Technical Focus Areas

The following requirements are emerging simultaneously across multiple projects, indicating ecosystem-wide convergence:

### 4.1 Session State Durability & Compaction Correctness
**Projects:** OpenClaw, NanoBot, Hermes Agent, CoPaw, IronClaw
- **Specific needs**: Partial-progress compaction reuse, correct timeout scoping (not inheriting outer abort signals), crash-recoverable session stores, and migration-safe conversation history.
- **OpenClaw** (#92043, #95590): 180s compaction timeout too aggressive; preflight compaction now uses dedicated timeout.
- **NanoBot**: v0.2.2 "durability release" — segmented conversation transcripts, forked chat reply preservation.
- **Hermes Agent** (#47237): Duplicate user turns persisted after transient provider failures.
- **CoPaw** (#5401): Frontend crashes on large tool-use history — session rendering scalability.
- **IronClaw** (#5148): Scheduler heartbeat self-deadlock during turn lifecycle transitions.

### 4.2 Multi-Provider LLM Compatibility
**Projects:** OpenClaw, NanoBot, Hermes Agent, CoPaw, PicoClaw, ZeroClaw
- **Specific needs**: Streaming completion correctness across non-OpenAI providers, thinking/reasoning block handling for diverse model families, and tool-call schema normalization.
- **OpenClaw**: DeepSeek V4 Flash (#88657), Ollama (#94251), NVIDIA Build (#95760) all have streaming/turn-completion bugs.
- **NanoBot**: Kimi Coding endpoint `tool_use` ID dedup (#4474); custom provider thinking style configuration (#4822).
- **CoPaw** (#5345): Custom OpenAI-compatible providers silently lose function calling.
- **PicoClaw** (#3154): Doubao Seed model embeds tool calls as raw XML.
- **ZeroClaw** (#8219): gpt-oss-120b on Groq fails multi-turn tool loops due to null `tool_call_id` serialization.

### 4.3 Plugin/Extension Security & Sandboxing
**Projects:** ZeroClaw, OpenClaw, PicoClaw, Hermes Agent
- **Specific needs**: Environment variable isolation, SSRF protection, capability-gated execution, and supply-chain signing.
- **ZeroClaw** (#5919, #5918, #8187, #8177): Most advanced — env-read allowlisting, SSRF protection, capability-gated WASI, SLSA supply-chain signing RFC.
- **PicoClaw** (#3160, #3161): Cross-site launcher rejection; deny-pattern bypass prevention in exec sandbox.
- **OpenClaw** (#93068): Global SSRF policy configuration requested.
- **Hermes Agent** (#51589): `static_context` plugin hook for prompt injection.

### 4.4 Cron / Scheduled Task Reliability
**Projects:** OpenClaw, NanoBot, CoPaw, NullClaw, LobsterAI
- **Specific needs**: Persistent job state across restarts, session key normalization for repeated runs, and reliable dispatch without silent failures.
- **OpenClaw** (#90991): Cron trigger contaminated global runtime state (closed/fixed).
- **NanoBot** (#4410): Heartbeat sent messages when instructed not to (closed in v0.2.2).
- **CoPaw** (#5064, #5398): Agent-created scheduled tasks fail to trigger; cron scheduler silently stops dispatching.
- **NullClaw** (PR #783): Cron subagent engine with DB-backed scheduler — open 80+ days.
- **LobsterAI** (PRs #2189–#2191): Cron session synchronization, startup state clarity, legacy storage migration.

### 4.5 Mobile & Multi-Platform UX
**Projects:** CoPaw, NanoBot, PicoClaw, Hermes Agent
- **Specific needs**: Responsive web UI, mobile-native features (PWA, swipe gestures), and Android/Termux compatibility.
- **CoPaw**: Coordinated sprint across ~10 PRs for mobile-responsive console (Agent Config, Models, Chat header).
- **NanoBot**: PWA support merged (#4458); iOS Safari zoom fix (#4471); mobile sidebar gestures (#4479).
- **PicoClaw** (#3164): Gateway crashes on Android/Termux within 2s — critical mobile blocker.
- **Hermes Agent**: Desktop app polish gaps across macOS and Windows.

---

## 5. Differentiation Analysis

| Dimension | OpenClaw | NanoBot | Hermes Agent | ZeroClaw | IronClaw | CoPaw | PicoClaw | NanoClaw |
|---|---|---|---|---|---|---|---|---|
| **Primary Target** | Power users, multi-channel deployments | Developers wanting fast iteration | Multi-platform desktop + gateway | Enterprise/security-conscious | NEAR AI ecosystem / WebUI-first | AgentScope ecosystem users | Embedded/mobile (Go-based) | Lightweight, fork-extensible |
| **Extensibility Model** | Plugin registry + Codex ACP runtime | Provider plugins + MCP | Plugin hooks + Photon sidecar | WASM sandbox (Extism/wasmtime debate) | Userland extensions (Reborn) | AgentScope 2.0 integration | Tool-based (ADB, etc.) | Generic inert seams (`registerX`/`applyX`) |
| **Channel Breadth** | Widest (8+ channels) | Telegram-focused + WebUI | Telegram + iMessage + WeChat + Feishu | Matrix + DingTalk + Telegram | Slack (migrating to WebUI) | QQ + web console | WhatsApp + Telegram + LINE + QQ + Web | Slack (Socket Mode) + generic |
| **Deployment Target** | Cross-platform gateway | Node.js / lightweight | Docker + Desktop app | Rust daemon + WebUI | WebUI v2 + cloud (Railway) | Tauri desktop + web | Go binary (incl. ARM/mobile) | Container-based |
| **Key Differentiator** | Compaction sophistication, SOUL.md self-evolution | Release velocity, low barrier to entry | Desktop app + multi-platform auth | Plugin security sandboxing | Progressive tool disclosure, memory as userland | AgentScope integration, mobile-first UI | Small footprint, embedded use | Fork-friendly architecture |
| **Maturity** | High (production-scale) | Medium (rapidly maturing) | Medium (post v0.17.0 stabilization) | Medium (architectural transition) | Medium (Reborn rewrite) | Medium (post-2.0 migration) | Low-Medium (niche) | Low (early but clean) |

---

## 6. Community Momentum & Maturity

### Tier 1: Rapidly Iterating (High Velocity, Active Shipping)
- **NanoBot**: Best-in-class release cadence. v0.2.2 merged 140 PRs with 21 new contributors. The project is shipping features faster than any peer while maintaining low issue backlog.
- **OpenClaw**: Highest absolute activity (500 PRs, 187 issues) but release cadence is slower — accumulating fixes for a coordinated patch. The "diamond lobster" triage system and `clawsweeper` labeling indicate mature process at scale.

### Tier 2: Active Development with Architectural Transitions
- **ZeroClaw**: Strong RFC-driven development. Plugin security hardening, supply-chain signing, and multi-agent delegation are being designed in the open. The Extism vs. wasmtime decision (#6943) is the key architectural fork.
- **IronClaw**: Reborn engine rewrite is the most ambitious architectural migration in the ecosystem. Progressive tool disclosure (#5149) addresses a concrete production latency problem (25.8k tokens/turn). Flaky CI (#5147) and scheduler deadlock (#5148) are transition costs.
- **CoPaw**: Post-AgentScope 2.0 merge cleanup is generating regressions faster than fixes. The mobile responsive sprint (~10 coordinated PRs) shows strong execution on UX, but 3 critical bugs without fix PRs signal triage pressure.
- **Hermes Agent**: Post-v0.17.0 stabilization with concentrated desktop UX improvements (ValentinSergief's PR batch). Credential/auth subsystem is the critical fragility point.

### Tier 3: Stable / Niche
- **NanoClaw**: Clean, low-noise development. Chat SDK migration and Slack Socket Mode shipped cleanly. The extension-point seams (#2842) signal architectural foresight. Low issue count suggests either excellent stability or small user base.
- **PicoClaw**: Security-conscious niche project (Go-based, embedded/mobile focus). Android/Termux crash (#3164) is the critical gap for its target use case.

### Tier 4: Stale / Dormant
- **LobsterAI**: 6 PRs stale 85+ days, critical upgrade-blocker issue (#1400) open 80+ days. Reviewer bottleneck is eroding contributor trust.
- **NullClaw**: Effectively maintenance-only. One long-running PR (#783, 80+ days) for cron subagent.
- **Moltis, TinyClaw, ZeptoClaw**: No meaningful activity in the reporting period.

---

## 7. Trend Signals

### Trend 1: The Compaction Crisis Is the Defining Technical Challenge
Session compaction — the process of summarizing long conversation history to fit within context windows — is the single most reported source of user-facing failures across the ecosystem. OpenClaw (#92043, #95590), NanoBot (v0.2.2 durability theme), and CoPaw (#5401) are all investing heavily. **Implication for developers**: Any agent framework that solves compaction correctness (partial-progress reuse, timeout scoping, crash recovery) will have a significant competitive advantage. This is the ecosystem's equivalent of the "memory management" problem in operating systems.

### Trend 2: Plugin Security Is Becoming a First-Class Concern
ZeroClaw's env-read allowlisting (#5919), SSRF protection (#5918), capability-gated WASI (#8187), and SLSA supply-chain signing (#8177) represent the most advanced plugin security model in the ecosystem. PicoClaw's sandbox escape prevention (#3161) and OpenClaw's SSRF policy request (#93068) confirm this is a universal need. **Implication**: The "run untrusted plugins safely" problem is the next major architectural differentiators. Projects that solve this (likely ZeroClaw first) will capture enterprise and security-conscious deployments.

### Trend 3: Multi-Provider Fragility Is Eroding User Trust
Every project with more than 2–3 provider integrations is reporting provider-specific streaming, tool-call, and thinking-block bugs. The LLM provider landscape is fragmenting (Kimi Coding, Doubao, DeepSeek, Ollama, Groq, etc.) and the OpenAI-compatible API surface is not actually compatible across providers. **Implication**: Projects need provider-specific integration test suites and a "provider compatibility matrix" as a first-class documentation artifact. NanoBot's approach of adding providers rapidly (Kimi Coding, OpenCode Zen/Go) without corresponding test infrastructure will create a growing bug backlog.

### Trend 4: Mobile Is No Longer Optional
CoPaw's coordinated mobile-responsive sprint (~10 PRs), NanoBot's PWA support, and PicoClaw's Android/Termux targeting all signal that users expect agent management from mobile devices. The Hermes Agent desktop app's polish gaps on Windows and macOS further confirm that multi-platform UX is a baseline expectation. **Implication**: Projects that remain desktop-only or have mobile as an afterthought will lose users to projects with responsive web UIs or native mobile experiences.

### Trend 5: Self-Evolution and Reflection Are Emerging as Differentiating Features
OpenClaw's self-evolving SOUL.md (PR #95793), NanoBot's eager memory consolidation (#4402), and ZeroClaw's relationship memory as user-facing workflows (#8251) all point toward agents that modify their own behavior over time. **Implication**: The next wave of agent framework differentiation will be in meta-cognitive capabilities — agents that reflect on their own performance, update their instructions, and maintain persistent memory across sessions. This is where the "personal AI assistant" vision becomes technically realizable.

### Trend 6: The Monolith-to-Plugin Architecture Migration Is Underway
IronClaw (Reborn userland extensions), ZeroClaw (WASM sandboxing), OpenClaw (Codex/ACP runtime), and NanoClaw (generic inert seams) are all moving functionality out of core and into extensible, sandboxed, or userland components. **Implication**: The "monolithic agent framework" model is giving way to a "kernel + extensions" model. Projects that complete this transition cleanly will be more maintainable and secure; those that don't will accumulate technical debt that slows feature delivery.

---

**Bottom Line for Technical Decision-Makers**: The ecosystem is at an inflection point. OpenClaw remains the reference implementation by scale and feature breadth, but its compaction and migration issues create opening for alternatives. NanoBot is the fastest-shipping project and the best choice for developers who want rapid iteration. ZeroClaw is the most architecturally forward-looking on security. IronClaw's Reborn rewrite is the highest-risk, highest-reward bet. For production deployments today, evaluate on **compaction correctness**, **provider compatibility test coverage**, and **plugin security model** — these are the dimensions where the ecosystem's technical debt is most exposed and where the next generation of differentiation will emerge.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-06-24

---

## 1. Today's Overview

NanoBot is in a period of intense, high-quality iteration. Over the past 24 hours the project saw **39 PR updates** (32 still open, 7 merged/closed) and **11 issue updates** (7 open, 4 closed), alongside a **new release (v0.2.2)** that merged 140 PRs and welcomed 21 new contributors. The release's headline theme is **durability** — conversation transcripts are now segmented, forked chats preserve replies more reliably, and tool-call robustness has improved. The volume of open PRs (32) signals a healthy but potentially backlogged review pipeline, with several contributors (notably `zpljd258`, `yu-xin-c`, and `axelray-dev') driving parallel work across providers, WebUI, memory, and cron subsystems.

---

## 2. Releases

### 🐈 v0.2.2 — Durability Release

- **140 PRs merged**, **21 new contributors** onboarded.
- **Core theme: durability.** WebUI conversation transcripts are now segmented rather than stored in a single fragile file, reducing corruption risk. Forked chat branches preserve replies more reliably.
- **Tool-call robustness:** Fixes for duplicate `tool_use` IDs in Anthropic-compatible providers (directly relevant to the new Kimi Coding endpoint support).
- **Provider expansion:** New `kimi_coding` provider added for Kimi Coding Plan subscription users.
- **WebUI improvements:** PWA support for mobile home screen installation landed alongside this release cycle.
- **No explicit breaking changes** noted in the release notes, though users on older heartbeat/cron configurations should verify behavior (see Bug #4410 below, which was closed in this cycle).

---

## 3. Project Progress

### Merged / Closed PRs (7)

| PR | Summary |
|---|---|
| **#4474** | `fix(provider)`: Deduplicate parallel `tool_use` IDs in `AnthropicProvider` — prevents 400 errors from Kimi Coding and similar Anthropic-compatible endpoints. |
| **#4458** | `feat(webui)`: PWA support for mobile home screen installation (manifest.json + service worker). |
| **#4393** | `test(exec)`: End-to-end regression tests for git commands in workspace subdirectories under `restrictToWorkspace`. |
| **#4387** | `fix(context)`: Fall back to default workspace for missing `SOUL.md`/`USER.md` while preserving project-local overrides. |
| **#4417** | `test(mcp)`: Use resolvable timeout regression URL in streamable HTTP tests to avoid hostname validation flakiness. |

### Key Open PRs Advancing

- **#4482** — Allow custom providers to configure thinking/reasoning style (e.g., VolcEngine/Doubao non-standard thinking params). Unblocks users of providers that don't follow the standard `thinking` injection pattern.
- **#4441** — Force-close `streamable_http` generator on MCP server reconnect failure, fixing a `RuntimeError` crash in cancel scope handling.
- **#4480 / #4479** — PWA support and mobile swipe gesture for sidebar (follow-up to the merged PWA PR, adding UX polish).
- **#4476** — New providers: **OpenCode Zen** and **OpenCode Go**, expanding the coding-agent model catalog.
- **#4402** — Opt-in eager memory consolidation: archives completed conversation slices into `memory/history.jsonl` after responses (disabled by default).
- **#4416** — Cron job model presets: per-run provider/model/context-window overrides for scheduled jobs without mutating the live agent model.
- **#4415** — Subagent spawn model override: optional `model` parameter in the `spawn` tool.

---

## 4. Community Hot Topics

### Most Active Issues (by comment count)

1. **#2298 — Breaking endless tool calling loops** (5 comments, 👍: 0)
   🔗 [HKUDS/nanobot#2298](https://github.com/HKUDS/nanobot/issues/2298)
   - **Underlying need:** Users running smaller/local models frequently hit infinite tool-call loops where the model repeats the same call endlessly. This is a **core agent reliability** issue. The community needs a circuit-breaker or repetition-detection mechanism. No fix PR is linked yet — this is a significant gap given how fundamental the problem is.

2. **#4410 — Heartbeat sends messages when it shouldn't after upgrade** (2 comments, 👍: 0) — **CLOSED**
   🔗 [HKUDS/nanobot#4410](https://github.com/HKUDS/nanobot/issues/4410)
   - **Underlying need:** Regression in `agent/loop.py` (lines 1008–1009) where heartbeat cron jobs that explicitly instruct the LLM not to send a message still trigger one. This was closed in the v0.2.2 cycle, suggesting it was addressed in the release.

3. **#4470 — Telegram display bug: line breaks ignored + message flickering** (1 comment, 👍: 0)
   🔗 [HKUDS/nanobot#4470](https://github.com/HKUDS/nanobot/issues/4470)
   - **Underlying need:** Two regressions introduced by the `sendRichMessage` integration (Bot API 10.1): newlines stripped and constant message editing during streaming. **Fix PR #4472** is already open and targets this directly.

4. **#4465 — WebUI renders `<thinking/>` tags as visible text** (1 comment, 👍: 0)
   🔗 [HKUDS/nanobot#4465](https://github.com/HKUDS/nanobot/issues/4465)
   - **Underlying need:** Model reasoning/thinking content leaks into the chat UI as raw text. This is a UX polish issue that affects perceived quality, especially for models that emit thinking blocks. Related to the closed feature request #2305 (reasoning step display toggle).

### Analysis

The community's most pressing needs cluster around **agent reliability** (tool loop breaking, heartbeat regressions), **messaging fidelity** (Telegram rendering), and **provider extensibility** (custom thinking styles, new providers). The project is actively addressing most of these, but the endless tool-call loop issue (#2298) remains open without a linked fix — notable given it has the highest comment count and affects the core agent loop.

---

## 5. Bugs & Stability

### Ranked by Severity

| Severity | Issue | Status | Fix PR |
|---|---|---|---|
| 🔴 **High** | **#4441** — Gateway crash: `RuntimeError` on MCP server reconnect failure | Open PR | **#4441** (open, targets the crash) |
| 🔴 **High** | **#2298** — Endless tool calling loops with smaller models | Open, no fix | None linked |
| 🟡 **Medium** | **#4470** — Telegram: line breaks ignored + message flickering after v0.2.2 | Open | **#4472** (open) |
| 🟡 **Medium** | **#4465** — WebUI leaks `<thinking/>` tags as visible text | Open | None yet |
| 🟡 **Medium** | **#4473** — Duplicate `tool_use` IDs with Kimi Coding endpoint | **Closed** | **#4474** (merged) |
| 🟢 **Low** | **#4410** — Heartbeat sends messages when instructed not to | **Closed** | Fixed in v0.2.2 cycle |
| 🟢 **Low** | **#4478** — Dream cron config silently removed on save | Open PR | **#4478** (open) |
| 🟢 **Low** | **#4481** — Dream cursor not advanced when disabled, causing prompt bloat | Open PR | **#4481** (open) |

### Key Observations

- The **MCP reconnect crash** (#4441) is the most severe open stability issue — it can take down the gateway. The fix PR is open and well-scoped.
- The **Telegram rendering regression** (#4470) is a v0.2.2 regression affecting a major messaging channel. Fix PR #4472 is already in flight.
- **Three Dream-related bugs** (#4467, #4478, #4481) suggest the Dream subsystem needs a stability pass — config persistence, cursor advancement, and skill deduplication are all being addressed in parallel PRs.

---

## 6. Feature Requests & Roadmap Signals

### User-Requested Features (Open Issues)

| Issue | Request | Likelihood of Next Version |
|---|---|---|
| **#4463** | Kimi Coding Plan support for subscription users | ✅ **Already landed** (provider added in v0.2.2 cycle) |
| **#4475** | OpenCode Zen + OpenCode Go providers | 🟡 **High** — PR #4476 is open and well-scoped |
| **#4467** | Dream should update existing workspace skills instead of creating duplicates | 🟡 **Medium** — No PR yet, but related Dream PRs are active |
| **#2305** | Toggle to hide reasoning step display | ✅ **Closed** — addressed in v0.2.2 cycle |
| **#4429** | Custom provider thinking style configuration | 🟡 **High** — PR #4482 is open |

### Roadmap Signals

The project is clearly investing in three strategic areas:
1. **Provider ecosystem expansion** — OpenCode Zen/Go, Kimi Coding, custom provider thinking styles. Expect more providers in the next minor release.
2. **Memory system maturation** — Eager consolidation (#4402), wiki memory writer (#4477), provenance-gated archiving (#4424), and delivery-context preservation (#4373) all point toward a more sophisticated memory architecture.
3. **Mobile/WebUX** — PWA support, iOS Safari zoom fix (#4471), and mobile sidebar gestures indicate a push toward first-class mobile experience.

**Prediction for v0.2.3 or v0.3.0:** Expect OpenCode providers, custom provider thinking styles, Telegram rendering fixes, and at least one Dream stability fix to land. The memory consolidation work may take longer to mature.

---

## 7. User Feedback Summary

### Pain Points

- **Local/small model reliability:** Users running smaller models (Issue #2298) face fundamental agent-loop instability with no mitigation. This is the most commented issue and represents a trust gap for the local-model use case.
- **Telegram as a second-class citizen:** The v0.2.2 `sendRichMessage` integration introduced regressions (#4470) that degrade the Telegram experience — a channel that many users rely on as their primary interface.
- **Dream skill management fatigue:** Users who maintain custom workspace skills are frustrated by Dream creating duplicates instead of updating existing ones (#4467). This is a workflow friction issue for power users.
- **Thinking content leakage:** The WebUI showing raw `<thinking/>` tags (#4465) undermines the polished feel of the product, especially for models with verbose reasoning.

### Satisfaction Signals

- The v0.2.2 release's "durability" theme directly addresses long-standing pain points around conversation transcript fragility — users have been asking for this.
- Rapid provider expansion (Kimi Coding, OpenCode Zen/Go) shows the project is responsive to the ecosystem and gives users more model choices.
- The volume of contributors (21 new in this release) and the breadth of subsystems being improved suggest a project that is scaling well.

---

## 8. Backlog Watch

### Issues Needing Maintainer Attention

| Issue | Age | Why It Matters |
|---|---|---|
| **#2298** — Endless tool calling loops | **~3 months** (created 2026-03-20) | Highest comment count (5), affects core agent reliability, no fix PR. This is the most impactful open issue. |
| **#2305** — Hide reasoning step display | **~3 months** (created 2026-03-20) | Closed, but the related #4465 (thinking tag leakage) remains open — suggests the original fix may be incomplete. |
| **#4465** — WebUI `<thinking/>` tag leakage | **1 day** | Fresh issue, no PR yet. Quick win for UX quality. |
| **#4467** — Dream skill duplication | **1 day** | No PR yet. Related to active Dream PRs (#4478, #4481) — could be bundled. |

### PRs Aging Without Merge

| PR | Age | Notes |
|---|---|---|
| **#4373** — Preserve delivery context during consolidation | **8 days** | Memory subsystem fix, well-scoped, no comments. |
| **#4402** — Opt-in eager consolidation | **6 days** | Larger architectural change, may need more review. |
| **#4415** — Subagent spawn model override | **5 days** | Useful feature, straightforward implementation. |
| **#4416** — Cron job model presets | **5 days** | Includes tests, ready for review. |

### Recommendation

The review backlog (32 open PRs) is manageable but growing. The maintainers should prioritize:
1. **#4441** (MCP crash fix) — stability-critical.
2. **#4472** (Telegram fix) — regression in a major channel.
3. **#2298** — assign or create a fix PR for the tool-loop issue; it's been open for 3 months with community engagement but no resolution path.

---

*Data source: [github.com/HKUDS/nanobot](https://github.com/HKUDS/nanobot) — snapshot 2026-06-24.*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent — Project Digest

**Date:** 2026-06-24 | **Repository:** NousResearch/hermes-agent

---

## 1. Today's Overview

Hermes Agent is in a period of exceptionally high community activity with **50 issues** and **50 pull requests** updated in the last 24 hours, signaling a vibrant and rapidly evolving project. No new releases were published today. Issue volume skews heavily toward bugs and stability concerns — particularly around the Telegram gateway, credential/auth handling, and Windows platform support — while the PR queue shows active maintainer engagement across desktop UX, Docker, plugins, and gateway infrastructure. The project appears to be in a stabilization and polish phase following the recent **v0.17.0** (2026.06.19) release, with the community surfacing edge cases across a growing multi-platform, multi-provider, multi-channel surface area.

---

## 2. Releases

**None.** The latest release remains **v0.17.0** (2026-06-19). No new releases shipped today.

---

## 3. Project Progress

### Closed/Merged PRs
- **#14** — `[updates for stability and speed]` (merged/closed): Early January PR covering agent/tool/web performance. Its closure and update today suggests it was fully merged or superseded after a long review cycle.

### Open PRs Advancing Today (20 total visible, all still open)

| PR | Scope | Description |
|---|---|---|
| [#51594](https://github.com/NousResearch/hermes-agent/pull/51594) | CLI / Config | Fixes `fallback_providers` silently broken when set via `hermes config set` (targets Issue #51560) |
| [#51592](https://github.com/NousResearch/hermes-agent/pull/51594) | Docker | Eliminates three full recursive overlayfs permission passes in Docker image build to avoid copy-up storms |
| [#51590](https://github.com/NousResearch/hermes-agent/pull/51590) | Gateway / Telemetry | Adds structured crash-loop telemetry to `/api/status` for gateway start blocker visibility |
| [#51593](https://github.com/NousResearch/hermes-agent/pull/51593) | Plugins / Photon | Restarts Photon sidecar on Spectrum stream interruptions rather than only on unexpected exits |
| [#51161](https://github.com/NousResearch/hermes-agent/pull/51161) | Gateway / Photon | Recovers degraded upstream iMessage stream; fixes wire-channel bug in primary reporting |
| [#8427](https://github.com/NousResearch/hermes-agent/pull/8427) | Agent / Auth | Adds Google Vertex AI as first-class provider for Gemini models (since Apr 2026) |
| [#51589](https://github.com/NousResearch/hermes-agent/pull/51589) | Plugins | Adds `static_context` plugin hook for static prompt documentation injection |
| [#51591](https://github.com/NousResearch/hermes-agent/pull/51591) | Memory | Turso database support as an external memory backend plugin |

**Notable pattern:** ValentinSergief has a concentrated batch of PRs (#43310, #43340, #48525, #45755, #45769, #39968, #39891, #39845, #43233) advancing Desktop UI stability, session management, security approval gates, and cron rendering — suggesting a focused desktop experience improvement sprint.

---

## 4. Community Hot Topics

### Most Commented Issues (by engagement depth)

| Issue | Comments | 👍 | Topic |
|---|---|---|---|
| **[#5257](https://github.com/NousResearch/hermes-agent/issues/5257)** | 11 | **16** | Generalized ACP client for multi-agent CLI orchestration |
| **[#43083](https://github.com/NousResearch/hermes-agent/issues/43083)** | 8 | 0 | Password redaction / credential safety in conversation history |
| **[#38387](https://github.com/NousResearch/hermes-agent/issues/38387)** | 8 | 1 | Windows gateway Scheduled Task leaves blank console window |
| **[#19566](https://github.com/NousResearch/hermes-agent/issues/19566)** | 8 | 1 | OpenAI-Codex credential pool drops newly added credential after stale auth.json rewrite |

### Analysis

The **#5257 ACP orchestration feature** stands out with the highest comment count (11) *and* the highest reaction count (16), indicating it is the most community-valued signal in the entire issue list. The underlying need is clear: users want Hermes to act as an orchestrator — not just a server — for all ACP-compatible coding agents (Claude Code, Codex, etc.), mirroring how coding-agent power users chain multiple agents together. This is a **multi-agent AI workflow** maturity signal.

The next three most-commented issues (#43083, #38387, #19566) all deal with **security and credential surface area durability** — secret redaction, credential rotation races, and platform service management. Together they reveal a growing gap between Hermes's expanding provider/credential matrix and the hardening required to keep multi-credential production deployments safe and stable.

---

## 5. Bugs & Stability

### P1 — Critical / Data Delivery Failures

| Issue | Title | Fix PR |
|---|---|---|
| **[#48648](https://github.com/NousResearch/hermes-agent/issues/48648)** | Telegram streamed message duplication loop on 4096-char overflow | None yet |
| **[#19566](https://github.com/NousResearch/hermes-agent/issues/19566)** | OpenAI-Codex credential pool drops credential after stale auth.json rewrite | None yet |
| **[#47237](https://github.com/NousResearch/hermes-agent/issues/47237)** | Gateway persists duplicate user turns after transient provider failures | None yet |
| **[#51579](https://github.com/NousResearch/hermes-agent/issues/51579)** | `gateway run` auto-migration strips `$HERMES_HOME/.env` on every Docker container start | None yet |
| **[#49106](https://github.com/NousResearch/hermes-agent/issues/49106)** | Web/WeChat sessions leak cross-session conversation history | None yet |
| **[#51587](https://github.com/NousResearch/hermes-agent/issues/51587)** | MCP server tools connect but never surface into agent's callable toolset | None yet |

### P2 — Significant Impact

| Issue | Title | Fix PR |
|---|---|---|
| **[#43083](https://github.com/NousResearch/hermes-agent/issues/43083)** | Passwords replaced by `***` but model reads redacted conversation history and fails on 2nd tool call | None yet |
| **[#38387](https://github.com/NousResearch/hermes-agent/issues/38387)** | Windows gateway Scheduled Task leaves blank console window (uv venv pythonw redirect) | None yet |
| **[#28004](https://github.com/NousResearch/hermes-agent/issues/28004)** | Telegram typing indicator stuck indefinitely (race condition in `_keep_typing`) | None yet |
| **[#25758](https://github.com/NousResearch/hermes-agent/issues/25758)** | `agent.reasoning_effort: none` silently ignored on Ollama | None yet |
| **[#51535](https://github.com/NousResearch/hermes-agent/issues/51535)** | OAuth MCP connection fails with 405 Method Not Allowed | None yet |
| **[#42083](https://github.com/NousResearch/hermes-agent/issues/42083)** | 502/503/504 and gRPC "UNAVAILABLE" not matched as payment errors | None yet |
| **[#51560](https://github.com/NousResearch/hermes-agent/issues/51560)** | `fallback_providers` as JSON string silently empties fallback chain | **PR #51594** |
| **[#51583](https://github.com/NousResearch/hermes-agent/issues/51583)** | Feishu approval card clicks rejected when `FEISHU_ALLOW_ALL_USERS=true` | None yet |
| **[#51573](https://github.com/NousResearch/hermes-agent/issues/51573)** | Silent fallback cascade hides model identity from user | None yet |
| **[#51578](https://github.com/NousResearch/hermes-agent/issues/51578)** | `computer_use` cannot find Qt6 apps (FreeCAD) | None yet |

### P3 — Polish / Platform / Edge Cases

| Issue | Title | Notes |
|---|---|---|
| **[#35357](https://github.com/NousResearch/hermes-agent/issues/35357)** | Tirith approval gate bypassed by non-shell tools (send_message, write_file) | Security scope gap |
| **[#51045](https://github.com/NousResearch/hermes-agent/issues/51045)** | Nous Portal `openai/gpt-5.5` 500 error since June 20 | Provider-side or API change |
| **[#38146](https://github.com/NousResearch/hermes-agent/issues/38146)** | Desktop installer fails with 389 TypeScript errors on Windows | Build chain regression |
| **[#39721](https://github.com/NousResearch/hermes-agent/issues/39721)** | Long user prompts pinned top-0 hide assistant response in macOS Desktop | Layout regression |
| **[#39558](https://github.com/NousResearch/hermes-agent/issues/39558)** | Intermediate assistant text disappears before tool call in Desktop | Rendering regression |
| **[#31599](https://github.com/NousResearch/hermes-agent/issues/31599)** | Telegram adapter httpx connection pool leak behind HTTP proxy | **CLOSED** today |

### Closed Today

| Issue | Resolution |
|---|---|
| **#31599** | Telegram adapter httpx general-pool socket leak (macOS fd limit) — **Closed** |
| **#51575** | Desktop stop-button popup references non-existent `/interrupt` slash command — **Closed** |
| **#45599** | Windows gateway doesn't survive reboot (Scheduled Task XML settings) — **Closed** |

---

## 6. Feature Requests & Roadmap Signals

| Issue/Motivation | Description | Likelihood of Near-Term |
|---|---|---|
| **#5257** — Generalized ACP Client | Extend ACP support from server-only to full multi-agent CLI orchestration (Claude Code, Codex, etc.) | **High** — 16 👍 and 11 comments signals strong community demand and clear scope |
| **#8427** — Vertex AI Provider | First-class GCP Vertex AI provider for Gemini models | **High** — PR already open since April, actively updated |
| **#29299** — HTTPS OAuth Callback URLs | Support non-localhost HTTPS redirect URIs for (e.g.) Salesforce MCP | **Medium** — PR not yet linked; increasingly important as MCP OAuth adoption grows |
| **#47959** — Pet Generation in Cmd+K | Hatch-and-adopt animated pet workflow in Desktop | **Low** — cosmetic/engagement feature |
| **#51589** — Static Context Plugin Hook | Add a `static_context` hook for plugin-owned prompt documentation injection | **High** — PR already open today |
| **#51590** — Structured Crash-Loop Telemetry | Gateway start-blocker diagnostics on `/api/status` | **High** — PR already open today |

**Roadmap prediction:** The v0.18.0 release candidate is likely to include: (a) the generalized ACP client for multi-agent orchestration (if PR materializes), (b) Turso memory backend and static context plugin hooks via the new plugin hook system, (c) Vertex AI provider, and (d) Docker build optimization and gateway telemetry improvements.

---

## 7. User Feedback Summary

### Pain Points Identified Today

1. **Docker self-destruction on restart.** Users running Hermes in Docker (Issue #51579) report that the `gateway run` auto-migration silently strips `$HERMES_HOME/.env` on every container start — effectively killing Telegram and all configured credentials on every reboot. This is a **regression of #26804** and a serious operational reliability issue for production Docker deployments.

2. **Credential/auth fragility across providers.** Three independent issues (#43083, #19566, #51559) reveal a pattern: credential redaction leaks tokens into conversation history, credential rotation race conditions drop valid credentials, and Anthropic OAuth login is broken on a dead redirect URL. The auth/credential surface is the project's most fragile area.

3. **Telegram gateway is a quality-of-life concern vector.** Issues #48648, #28004, #47237, and now the closed #31599 all touch Telegram behavior — infinite duplication loops, stuck typing indicators, duplicate turns, socket leaks. Users deploying Telegram as a primary interface are experiencing a consistency problem that erodes trust.

4. **Windows is second-class.** Issues #38387, #45599, #26044, #42289, and #38146 all highlight Windows-specific failures: broken scheduled tasks, Tirith scanner installation failures, TS build crashes, and Kanban worker crashes. Windows support gap is a recurring community complaint.

5. **Desktop app polish gaps.** The long list of Desktop-specific P3 bugs (#39721, #39558, #51575, #51576, #51578) suggests the Desktop app shipped with enough gaps to generate a constant stream of cosmetic and rendering bug reports. Positive signal: ValentinSergief's concentrated fix PRs indicate responsive ongoing maintenanc

### Satisfaction Signals

- MCP (#51587), Ollama (#25758), and multi-provider auth issues are being reported at high velocity — meaning users are actively deploying Hermes in increasingly complex, production-style configurations rather than just trying it out.
- The pet generation feature (#47959) and high engagement on ACP orchestration (#5257 with 16 👍) suggest a user base that is both enthusiastic and pushing the platform into genuinely advanced usage patterns.

---

## 8. Backlog Watch

### Important Issues Needing Maintainer Attention

| Issue | Age | Why It Matters |
|---|---|---|
| **[#19566](https://github.com/NousResearch/hermes-agent/issues/19566)** — OpenAI-Codex credential pool loss | ~51 days (May 4) | P1 security boundary bug; credentials silently vanish after rotation. Affects any user rotating OpenAI-Codex credentials across processes. No fix PR, minimal maintainer response. |
| **[#25758](https://github.com/NousResearch/hermes-agent/issues/25758)** — reasoning_effort ignored on Ollama | ~41 days (May 14) | Token usage can spiral to 65k/28 min because `none` is silently ignored. Affects the entire Ollama + thinking-model user segment. |
| **[#26044](https://github.com/NousResearch/hermes-agent/issues/26044)** — Tirith security scanner Windows failure | ~40 days (May 15) | Security scanner (a key differentiator for Hermes) simply doesn't install on Windows. Blocks a Windows security use case entirely. |
| **#35357** — Tirith gate bypass for non-shell tools | ~25 days (May 30) | Approval/shell-gate system has a scope gap that lets `send_message`, `write_file`, and MCP tools execute without human approval. This is a security design gap, not just a bug. |
| **#38387** — Windows Scheduled Task console window | ~21 days (Jun 3) | Gateway doesn't actually run as a durable background process on Windows. No fix has been merged despite a clear root cause (uv venv pythonw redirect). |
| **[#38146](https://github.com/NousResearch/hermes-agent/issues/38146)** — Desktop installer 389 TS errors | ~21 days (Jun 3) | Users cannot install the Desktop app on Windows at all from `main`. 389 TypeScript errors suggests a build toolchain or dependency declaration regression. |

### PRs at Risk of Staleness

| PR | Age | Risk |
|---|---|---|
| **#8427** — Vertex AI Provider | ~73 days (Apr 12) | Long-open provider PR; architectural shifts may have introduced drift requiring re-review. |
| **#22648** — Ollama Cloud web search plugin | ~46 days (May 9) | Rebase from scratch was needed due to architectural shifts; now open with no comments. |

---

*Project health assessment: **Active but strained.** Issue and PR velocity are high and community engagement is strong, but the ratio of P1/P2 open bugs (~15 visible) to closed fixes today (3 closed, 1 clear fix PR) suggests maintainer bandwidth is a bottleneck. The credential/auth subsystem and Telegram gateway deserve targeted stabilization sprints.*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-06-24

## 1. Today's Overview

PicoClaw shows high activity with 17 PRs and 3 issues updated in the last 24 hours, signaling active development despite no new releases. The project is focused on security hardening, bug fixes, and expanding channel integrations. Key themes include sandbox security improvements, WhatsApp stability fixes, and new model provider support. The backlog of open PRs (11) and issues (2) suggests ongoing community engagement.

## 2. Releases

No new releases today.

## 3. Project Progress

**Merged/Closed PRs (6):**

- **#3162** — WhatsApp: reconnection and async message processing ([link](https://github.com/sipeed/picoclaw/pull/3162))
  - Adds goroutine-based message processing, pong handler, read deadline, and exponential backoff auto-reconnection
  - Fixes automatic WebSocket disconnection issues

- **#3154** — fix(openai_compat): recover Doubao Seed tool calls leaked as XML ([link](https://github.com/sipeed/picoclaw/pull/3154))
  - Fixes #3153 where Volcengine Doubao Seed model embeds tool calls as raw `<seed:tool_call>` XML in content

- **#3059** — fix: explicitly ignore Close() errors in error paths ([link](https://github.com/sipeed/picoclaw/pull/3059))
  - Linter cleanup for resource cleanup in shell.go and http_retry.go

- **#3054** — fix(line): add ok checks for sync.Map type assertions in Send ([link](https://github.com/sipeed/picoclaw/pull/3054))
  - Prevents panics from unchecked type assertions in LINE channel

- **#3047** — fix(web): restore full JSONL history for session detail ([link](https://github.com/sipeed/picoclaw/pull/3047))
  - Adds detail-only JSONL reader so archived messages display in session detail view

- **#2888** — Fix/tool config load image reaction ([link](https://github.com/sipeed/picoclaw/pull/2888))
  - Stale PR closed after extended review period

## 4. Community Hot Topics

**Most Active PRs by recency and significance:**

- **#3163** — feat(bedrock): leverage Converse prompt caching via cache points ([link](https://github.com/sipeed/picoclaw/pull/3163))
  - New PR adding AWS Bedrock prompt caching support for cost optimization
  - Addresses growing demand for LLM cost reduction

- **#3160** — fix(auth): reject cross-site launcher setup requests ([link](https://github.com/sipeed/picoclaw/pull/3160))
  - Security-focused: adds browser provenance checks for setup endpoint
  - Uses Sec-Fetch-Site, Origin, and Referer headers

- **#3161** — fix(exec): keep deny patterns active for custom allow rules ([link](https://github.com/sipeed/picoclaw/pull/3161))
  - Critical security fix: prevents allow rules from bypassing deny patterns
  - Previously `^jq\b` could allow payloads reading process environment variables

- **#3118** — Add remote Pico WebSocket mode to picoclaw agent ([link](https://github.com/sipeed/picoclaw/pull/3118))
  - Enables remote agent execution via WebSocket connection
  - New use case: distributed agent deployments

- **#3157** — feat: add Android ADB remote operations tool ([link](https://github.com/sipeed/picoclaw/pull/3157))
  - Experimental tool for Android device control (screenshots, UI hierarchy, tap/swipe/input)
  - Does not expose arbitrary shell execution by design

**Dependency Updates (3 PRs):**
- #3104: shadcn 4.7.0 → 4.11.0
- #3103: typescript-eslint 8.59.3 → 8.62.0
- #3100: @vitejs/plugin-react 6.0.1 → 6.0.2

## 5. Bugs & Stability

**Open Issues (2):**

| # | Severity | Issue | Status | Fix PR |
|---|----------|-------|--------|--------|
| #3164 | 🔴 **Critical** | Process hooks crash gateway on Android/Termux within 2s of startup ([link](https://github.com/sipeed/picoclaw/issues/3164)) | Open, no fix | None yet |
| #3159 | 🟡 **Medium** | Duplicate task execution — second query repeats first query's work ([link](https://github.com/sipeed/picoclaw/issues/3159)) | Open, no fix | None yet |

**Closed Issues (1):**

| # | Severity | Issue | Resolution |
|---|----------|-------|------------|
| #3015 | 🟡 **Medium** | QQ channel connection failure on Windows (token timeout) ([link](https://github.com/sipeed/picoclaw/issues/3015)) | Closed as stale |

**Notable Fix Merged Today:**
- **#3154** fixes Doubao Seed model tool call parsing regression — users of Volcengine Doubao were experiencing broken tool calls

## 6. Feature Requests & Roadmap Signals

**Likely candidates for next release (v0.3.0 or v0.2.10):**

1. **AWS Bedrock Prompt Caching** (#3163) — Cost optimization for AWS users, aligns with growing multi-provider support
2. **Android ADB Remote Operations** (#3157) — New tool surface for mobile automation use cases
3. **Remote Agent WebSocket Mode** (#3118) — Distributed/multi-device agent deployments
4. **Telegram Reply-as-Mention** (#2975) — Stale but addresses real UX gap in group chats
5. **Inline Data URL Media Extraction Fix** (#3115) — Fixes session-history corruption from false-positive media detection

**Security hardening trend:** Multiple PRs (#3160, #3161) focused on sandbox/auth security suggest a security-focused release may be prioritized.

## 7. User Feedback Summary

**Pain Points:**
- **Android/Termux compatibility** (#3164): Gateway crashes immediately with process hooks — blocks mobile/headless users entirely
- **Task deduplication** (#3159): AI re-executes previous tasks when handling sequential queries — suggests session/context management issue
- **QQ channel on Windows** (#3015): Token retrieval timeout — Windows-specific networking or build issue, now stale
- **Doubao Seed tool call leakage** (#3153, fixed by #3154): Model-specific parsing failures affecting Chinese cloud provider users

**Positive Signals:**
- Active contribution from multiple authors (danmobot, jp39, loafoe, Jh123x) indicates healthy contributor base
- Security-conscious user base identifying and reporting sandbox escape vectors (#3161)
- Demand for cost optimization features (Bedrock prompt caching) shows production-scale usage

**Use Cases Observed:**
- Mobile/headless deployments (Android/Termux, ADB)
- Multi-provider LLM setups (Doubao, Bedrock, OpenAI-compat)
- Multi-channel messaging (WhatsApp, Telegram, LINE, QQ, Web UI)

## 8. Backlog Watch

**Items needing maintainer attention:**

| # | Age | Item | Concern |
|---|-----|------|---------|
| #2975 | 25 days | feat(telegram): treat reply to bot message as mention ([link](https://github.com/sipeed/picoclaw/pull/2975)) | Stale; simple UX improvement, low risk to merge or close |
| #3164 | 1 day | Process hooks crash on Android/Termux ([link](https://github.com/sipeed/picoclaw/issues/3164)) | Critical crash, new report, no assignee |
| #3159 | 1 day | Duplicate task execution ([link](https://github.com/sipeed/picoclaw/issues/3159)) | Core functionality bug, needs triage |
| #3118 | 12 days | Remote Pico WebSocket agent mode ([link](https://github.com/sipeed/picoclaw/pull/3118)) | Significant feature, needs review bandwidth |
| #3115 | 12 days | Fix inline data URL media extraction ([link](https://github.com/sipeed/picoclaw/pull/3115)) | Session corruption bug, should prioritize |

**Stale items at risk of closure:** #2888, #3059, #3054, #3047, #2975 — all marked stale, some with merged equivalents or superseded by other work.

---

*Data source: [sipeed/picoclaw](https://github.com/sipeed/picoclaw) — Digest generated 2026-06-24*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-06-24

## 1. Today's Overview

NanoClaw saw robust activity over the past 24 hours with 12 PRs touched (8 merged/closed, 4 open) and 1 new issue filed. The project is in an active development phase centered on three major threads: a **Chat SDK version migration to 4.29.0** (core, channels, and providers branches), the introduction of **Slack Socket Mode** for webhook-free connectivity, and a set of **generic inert extension-point seams** to improve fork extensibility. No new releases were published today, suggesting the team is batching changes for a coordinated cut. Overall project health is strong — high merge velocity, low issue count, and multiple contributors shipping features in parallel.

## 2. Releases

No new releases in the last 24 hours.

## 3. Project Progress

### Chat SDK 4.29.0 Migration (Complete)
A coordinated four-PR effort landed to move the entire codebase to the 4.29.0 Chat SDK generation:

- **PR #2834** — Core `main` branch pins `chat` + `@chat-adapter/*` to 4.29.0. This is the foundational move; version-locking is required because the adapter `ChatInstance` must match the bridge or `createChatSdkBridge()` fails to typecheck.
- **PR #2835** — `channels` branch: bumps all 8 channel adapter SKILL.md install pins and matching `setup/*.sh` scripts from 4.26.0 → 4.29.0.
- **PR #2836** — `providers` branch: companion bump keeping the registry branch on the matched 4.29.0 generation (21 files, lockfile regenerated).
- **PR #2839** — Retroactively brings Slack Socket Mode (#2837) into the `channels` branch after a race condition where #2835 merged the bump branch ~12 minutes before #2837 landed.

### Slack Socket Mode (Merged)
- **PR #2837** — Adds Socket Mode adapter + guided setup. Setting `SLACK_APP_TOKEN` (`xapp-…`) switches the bot to an outbound WebSocket connection (`mode: 'socket'`), eliminating the need for a public HTTPS endpoint. Ideal for local dev and NAT-traversing hosts.

### Extension-Point Architecture (In Review)
- **PR #2841** (closed) and **PR #2842** (open) — Introduces generic, inert `registerX()` / `applyX()` extension-point seams across host and container runtime. With no registrant, behavior is byte-identical to upstream (no-op pass-through). This enables downstream forks to attach custom behavior without forking core logic.

### Skill Update Reliability
- **PR #2826** — Fixes `/update-nanoclaw` Step 7 which framed skill updates as optional. Since channel/provider code ships on branches the host merge never touches, users could silently miss critical upstream skill fixes. Now nudges users into skill updates and rebuilds the container on re-apply.

### Hook Surface Guard
- **PR #2833** — Adds a guard for the hook surface, following the project's contributing guidelines framework.

### Container Performance (Open)
- **PR #2771** — Adds `--shm-size=1g` and `--init` to agent container `docker run` args. Docker defaults `/dev/shm` to 64MB which is insufficient for headless Chromium renderer buffers shipped in every agent image.

## 4. Community Hot Topics

| Item | Type | Activity | Link |
|------|------|----------|------|
| PR #2842 — Generic inert extension-point seams | Open PR | Architectural change enabling fork extensibility | [PR #2842](https://github.com/nanocoai/nanoclaw/pull/2842) |
| PR #2832 — Reject with reason on approval cards | Open PR | Adds a third "Reject with reason…" button to module approval cards so agents receive actionable feedback | [PR #2832](https://github.com/nanocoai/nanoclaw/pull/2832) |
| PR #2838 — Manifest model router provider | Open PR | New provider integration adding model routing capability | [PR #2838](https://github.com/nanocoai/nanoclaw/pull/2838) |
| Issue #2840 — Slack port 3000 binding | Open Issue | Security concern: nanoclaw binds port 3000 on external host IP, defeating the purpose of tunneling | [Issue #2840](https://github.com/nanocoai/nanoclaw/issues/2840) |

**Analysis:** The extension-point seams (#2842) represent a significant architectural investment, signaling the project is maturing toward a plugin/fork-friendly model. The "reject with reason" feature (#2832) addresses a real agent-loop feedback gap — agents that receive only "declined" cannot adapt their requests, leading to retry loops. The Manifest router provider (#2838) suggests expanding LLM provider flexibility is a community priority.

## 5. Bugs & Stability

| Severity | Description | Status | Link |
|----------|-------------|--------|------|
| 🔴 **Medium-High** | **Slack port 3000 binding on external host IP** — nanoclaw v2 binds port 0.0.0.0:3000 when configuring Slack, which defeats the security model of using a tunnel. This is a security regression for Slack users. | Open, no fix PR yet | [Issue #2840](https://github.com/nanocoai/nanoclaw/issues/2840) |
| 🟡 **Low** | **Skill update silently skipped** — `/update-nanoclaw` framed skill updates as optional, causing users to miss upstream fixes on channels/providers branches. | Fixed in PR #2826 (merged) | [PR #2826](https://github.com/nanocoai/nanoclaw/pull/2826) |
| 🟡 **Low** | **Branch merge race on Slack Socket Mode** — PR #2837 targeted a bump branch that had already been merged, requiring a follow-up PR #2839 to reconcile. | Fixed in PR #2839 (merged) | [PR #2839](https://github.com/nanocoai/nanoclaw/pull/2839) |

## 6. Feature Requests & Roadmap Signals

| Feature | Signal Strength | Likelihood | Notes |
|---------|----------------|------------|-------|
| **Extension-point seams (registerX/applyX)** | 🟢 Strong — open PR, architectural scope | High — likely next minor version | Enables plugin ecosystem; inert by default so low risk |
| **Slack Socket Mode** | 🟢 Strong — merged | Shipped in upcoming release | Eliminates public endpoint requirement; high demand for local dev |
| **Approval "Reject with reason"** | 🟡 Moderate — open PR, clear use case | High — straightforward UX improvement | Closes a feedback-loop gap in agent workflows |
| **Manifest model router provider** | 🟡 Moderate — open PR, new integration | Medium — depends on review bandwidth | Expands provider flexibility; may need iteration |
| **Container shm-size + init flags** | 🟡 Moderate — open since June 15 | Medium — simple change, no controversy | Addresses Chromium crashes in headless agent containers |

**Prediction:** The next release (likely a minor version) will include the Chat SDK 4.29.0 migration, Slack Socket Mode, and the extension-point seams. The container performance fix (#2771) is a strong candidate given its simplicity and clear impact.

## 7. User Feedback Summary

- **Security concern (Issue #2840):** A user installing nanoclaw v2 with Slack discovered that port 3000 is bound on the external host IP (0.0.0.0), which directly contradicts the documented tunnel-based setup and creates an unintended public exposure. This is a concrete security regression that needs a response — either binding to 127.0.0.1 by default or documenting an explicit opt-in for external binding.
- **Agent workflow gap (PR #2832):** The approval card's binary approve/reject left agents without actionable feedback. The "reject with reason" feature reflects real-world agent-loop scenarios where an agent needs to understand *why* a request was declined to reformulate its approach.
- **Local dev friction (PR #2837):** The Socket Mode addition reflects user demand for easier local development without exposing public endpoints — a common pain point for home-lab and NAT-traversing deployments.
- **Overall satisfaction** appears positive based on merge velocity and low issue count, but the port-binding issue (#2840) is a trust-eroding finding if left unaddressed.

## 8. Backlog Watch

| Item | Age | Risk | Recommendation |
|------|-----|------|----------------|
| **Issue #2840** — Slack port 3000 external binding | 1 day | 🔴 Security regression | Needs maintainer acknowledgment and a fix or documentation update urgently |
| **PR #2771** — Container `--shm-size=1g` + `--init` | 9 days | 🟡 Performance/stability fix, no controversy | Stale for a simple, well-justified change — consider fast-tracking |
| **PR #2832** — Approval "reject with reason" | 2 days | 🟡 Active, no blockers | Awaiting review; straightforward change |
| **PR #2838** — Manifest model router provider | 1 day | 🟡 New feature, needs review | Early stage; monitor for maintainer feedback |
| **PR #2842** — Generic inert extension-point seams | 1 day | 🟢 Architectural, inert by default | High-value but needs thorough review given scope |

**Maintainer attention needed:** Issue #2840 should be triaged promptly given its security implications. PR #2771 has been open for over a week despite being a low-risk, high-impact fix — a review or merge would signal responsiveness to contributor work.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest — 2026-06-24

---

## 1. Today's Overview

NullClaw shows minimal activity over the past 24 hours, with only one issue closed and one long-running pull request receiving updates. The project appears to be in a stabilization phase, with no new releases or significant feature merges today. The closed issue (#967) addresses a recurring `NoResponseContent` error affecting Windows users, suggesting ongoing reliability concerns with certain model integrations. The continued activity on PR #783 indicates sustained development effort around the cron subagent system, though it remains unmerged after nearly three months. Overall, the project health signals a period of incremental maintenance rather than active feature delivery.

---

## 2. Releases

No new releases in the reporting period.

---

## 3. Project Progress

- **Issue #967 [CLOSED]** — `NoResponseContent` error on Windows with Agnes-2.0-Flash model. Closed on 2026-06-23 after 2 comments. No linked fix PR identified; resolution may have been a workaround or documentation update rather than a code fix.
- **PR #783 [OPEN]** — `feat(cron): cron subagent, run history, JSON output, security hardening` — Updated 2026-06-23. This substantial feature PR adds a DB-backed cron scheduler with history tracking, multi-type job support (skill/agent/shell), timezone offsets, delivery routing, and JSON CLI output. Still open after ~80 days, suggesting it may be awaiting review, revision, or maintainer bandwidth.

---

## 4. Community Hot Topics

| Item | Type | Engagement | Link |
|------|------|-----------|------|
| #967 `NoResponseContent` bug | Issue | 2 comments, high reproduction rate (>50%) | [nullclaw/nullclaw#967](https://github.com/nullclaw/nullclaw/issues/967) |
| #783 Cron subagent engine | PR | Long-running, multi-feature | [nullclaw/nullclaw#783](https://github.com/nullclaw/nullclaw/pull/783) |

**Analysis:** The `NoResponseContent` error is a critical reliability signal — the reporter notes it occurs in over 50% of conversations (12 of 21) with a specific model (Agnes-2.0-Flash) on Windows. This points to a potential integration fragility with certain model providers or response parsing logic. The cron subagent PR (#783) represents a significant architectural feature that would expand NullClaw's automation capabilities, but its prolonged open status may indicate scope complexity or maintainer resource constraints.

---

## 5. Bugs & Stability

| Severity | Issue | Status | Details |
|----------|-------|--------|---------|
| 🔴 **High** | [#967](https://github.com/nullclaw/nullclaw/issues/967) `NoResponseContent` error | Closed (2026-06-23) | Windows 11, v2026.5.29, Agnes-2.0-Flash model. Reproducible in >50% of conversations. User reports same model/key works in another tool (picoclaw), suggesting a NullClaw-specific parsing or timeout issue. |

**Fix PR status:** No linked fix PR identified. The issue was closed without an obvious code-level resolution — users should verify whether this was resolved via configuration guidance or if it persists in newer builds.

---

## 6. Feature Requests & Roadmap Signals

- **Cron Subagent Engine (PR #783):** This is the most significant pending feature. If merged, it would introduce scheduled task execution with persistent history, multi-type job support, timezone awareness, and JSON output for scripting. Given its scope and update activity as recent as yesterday, it is likely a candidate for inclusion in the next minor or major release — contingent on review completion.
- **JSON CLI Output:** Part of PR #783, this would improve programmatic usability and automation workflows, addressing a common need for headless/CI integrations.

**Prediction:** The next release (likely v2026.7.x) may focus on cron/scheduling capabilities and CLI improvements, assuming PR #783 clears review.

---

## 7. User Feedback Summary

- **Pain Point:** The `NoResponseContent` error is a severe usability blocker for at least one Windows user, with >50% failure rate in normal conversation flow. The fact that the same model and API key works in a competing tool (picoclaw) is a notable dissatisfaction signal — it implies NullClaw's response handling or timeout logic may be less robust than alternatives.
- **Use Case:** Users are running NullClaw as a CLI agent on Windows with third-party model providers (Agnes-2.0-Flash), suggesting the project is used as a flexible multi-model agent wrapper.
- **Sentiment:** Mixed — the project attracts users who value model flexibility, but reliability issues with specific provider integrations risk driving users to alternatives.

---

## 8. Backlog Watch

| Item | Age | Risk | Recommendation |
|------|-----|------|----------------|
| [PR #783](https://github.com/nullclaw/nullclaw/pull/783) — Cron subagent engine | ~80 days open | 🟡 Medium — Large PRs risk merge conflicts and scope creep; prolonged open status may discourage contributor | Consider breaking into smaller incremental PRs or scheduling a maintainer review sprint |
| [Issue #967](https://github.com/nullclaw/nullclaw/issues/967) — `NoResponseContent` | Closed but no fix PR | 🔴 High — If the root cause is not addressed, similar reports will recur; the picoclaw comparison is a competitive risk | Reopen or create a tracking issue with a dedicated fix PR; investigate response parsing for non-OpenAI model providers |

---

*Generated by OWL for 2026-06-24 | Data source: github.com/nullclaw/nullclaw*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-06-24

## 1. Today's Overview

IronClaw is in a period of very high development velocity and architectural transition. Over the past 24 hours, 42 pull requests were updated (23 still open, 19 merged or closed) and 21 issues were touched, reflecting active work across multiple system rewrites rather than incremental maintenance. The dominant theme is the Reborn engine initiative: PR #5163 ("model memory as a userland extension"), PR #5149 ("progressive tool disclosure"), and the Slack setup migration (PR #5152) all move functionality out of the V1 kernel and into the Reborn WebUI v2 stack. Stability concerns are surfacing — a merge-queue-blocking flaky test (#5147), a self-deadlock in the scheduler heartbeat (#5148), and a series of Google/Gmail auth UX bugs (#3733, #3732, #4991) indicate that the new turn/scheduler engine still needs hardening. No new releases shipped today.

## 2. Releases

None.

## 3. Project Progress

Key PRs merged or closed in the last 24 hours:

- **Reborn automation delete support** (#5133, closed) — adds `DELETE /api/webchat/v2/automations/{id}` and a delete control in the WebUI v2 automations panel, closing out issue #5122. This completes the basic CRUD surface alongside the previously shipped pause/resume (#5121).
- **Slack setup migration into WebUI** (#5152, closed) — the Slack TOML config is hard-cut to `[slack].enabled`; setup (workspace, bot token, signing secret, channels) now flows through the Reborn secret store and WebUI v2. Complementary PRs #5164 (restore outbound targets), #5162 (env override gate), and #5166 (dynamic Slack routine delivery) remain open, rounding out the feature.
- **Google WASM auth-required errors** (#4969, closed) — drives structured `auth_required` guest errors for 401 responses in Drive, Docs, Sheets, and Slides, with a host-runtime regression test. This directly addresses the confusing `operation_failed` dead-end from issue #4991.
- **Reborn emulate full-path calendar E2E** (#5155, closed) — ships shared Emulate provider helpers and a full-install/auth/chat/run E2E harness through a scripted mock LLM. This is test infrastructure but signals investment in integration-level regression coverage.

Open PRs advancing architectural work:

- **PR #5163 (memory as userland extension)** — lifts Reborn memory into a provider-neutral `ironclaw_memory` contract crate plus `ironclaw_memory_native`, routing first-party tools through a `MemoryService` facade. Stacked PR #5165 adds optional native seeding.
- **PR #5149 (progressive tool disclosure)** — cuts ~91 tool schemas from every model call and gates the feature behind a flag. Log evidence shows current behavior sends ≈25.8k tokens per call, 4× per turn, pushing NEAR AI past its 120s timeout. This is a high-impact latency fix if it ships cleanly.
- **PR #5170 (subagent spawn run failure)** — adds `LoopInlineMessageBody` for host-approved inline messages and verifies `AwaitDependentRun` exits against the gate store.
- **PR #5145 (activity gate identity handling)** — adds stable activity identity through capability candidates/invocations so gates update the correct parked row instead of synthesizing UI-only rows.

## 4. Community Hot Topics

No single issue carries heavy community signal (all 👍 counts are zero), but by comment activity and cross-referencing these are the most discussed threads:

- **Scheduler heartbeat self-deadlock** (#5148, [link](https://github.com/nearai/ironclaw/issues/5148)) — a running turn can hang forever when the heartbeat fires during a transition-state lock hold. The specific observation path is a GitHub extension install, suggesting this is hitting real users. The underlying need is robust turn lifecycle coordination as the scheduler matures.
- **Trigger reaches Completed for unpaired actor (flaky test)** (#5147, [link](https://github.com/nearai/ironclaw/issues/5147)) — flagged as merge-queue-blocking ("~1 in 3 fails", actively dequeuing PRs). This is a developer-experience issue that also signals the trigger model's lifecycle transitions are racy. Note this has been open less than 24 hours; resolution speed will indicate CI health priority.
- **Claude fails to create Reborn automation after pause/resume tools are exposed** (#5151, [link](https://github.com/nearai/ironclaw/issues/5151)) — `anthropic/claude-sonnet-4-5` calls `capability_info` / `time` / `echo` / `shell` instead of `builtin.trigger_create`. This points to a prompt / tool-description conflict introduced by the new automation surface area.
- **Bundled skills trip prompt-safety vocabulary denylist** (#5169, [link](https://github.com/nearai/ironclaw/issues/5169)) — a clean-setup repro where normal API vocabulary ("Authorization", "Bearer", "access token") in skill instructions causes a fatal rejection that is misreported as a "temporary system issue". The underlying need is honest error surfacing.
- **Unify gate-declined semantics** (#5120, [link](https://github.com/nearai/ironclaw/issues/5120)) — Reborn currently uses `Declined`, `Deny`, `Denied`, and `Canceled` in nearby code paths. PR #5145 may partially address this.

## 5. Bugs & Stability

| # | Severity | Summary | Fix / Status |
|---|----------|---------|--------------|
| #5147 | **High** (merge-gate) | `trigger_poller_does_not_submit_turn_for_unpaired_actor` flaky ~1-in-3; blocks CI merges | Open since yesterday, no owner assignment visible |
| #5148 | **High** (correctness) | Scheduler heartbeat can self-deadlock a running turn on store-lock contention | Open, new today |
| #5169 | **High** (user-visible) | Bundled skills cause terminal failure on clean setup due to vocabulary denylist false-positive | Open, new today |
| #5151 | **Medium** | Claude diverges from `trigger_create` tool after pause/resume tools are exposed | Open, new today |
| #3733 | **Medium** | Invalid Gmail token shows success toast instead of error | Open since 2026-05-17, updated yesterday |
| #3732 | **Medium** | Gmail auth gate shows different UIs (OAuth link vs. manual token) across threads | Open since 2026-05-17, updated yesterday |
| #4640 | **Medium** | `google-calendar.list_events` returns oldest/unordered events (no `timeMin`, no `singleEvents`) | Open since 2026-06-09, updated yesterday |
| #4991 | **Medium** | WASM Google Drive auth 401 dead-ends as `operation_failed` | Closed today; fixed by PR #4969 |
| #5167 | **Low** | `dist` folder tracked in git, causing churn on every PR | Open today |
| #5157 | **Low** | Inference section intermittent in Settings on Railway hosting | Open today |
| #5146 | **Low** | No deactivate button on Extensions page | Open today |

## 6. Feature Requests & Roadmap Signals

- **Progressive tool disclosure** (PR #5149) — flag-gated but backed by specific production latency data (25.8k tokens × 4 per turn, NEAR AI 120s timeout). This is the clearest candidate for the next release; remaining work is likely flag-flipping and regression testing.
- **Memory as userland extension** (PR #5163 + #5165) — stacked PRs indicate planned sequencing. This is a refactor that enables third-party memory backends and is a precondition for broader Reborn extensibility.
- **Slack native integration** (#5152, #5164, #5162, #5166) — multiple interlocking PRs suggest a targeted push to ship this within 1–2 weeks.
- **Nightly E2E failures** (#4108, [link](https://github.com/nearai/ironclaw/issues/4108)) — open since 2026-05-27; repeated nightly failures without visible triage may signal under-resourced CI maintenance.
- **Reborn first-run setup API** (#4592, closed) — landed via PR, indicating Reborn onboarding is still a priority.

## 7. User Feedback Summary

Pain points cluster around three vectors:

1. **Auth UX confusion** — Gmail, Google Drive, and Google Calendar all surface auth failures inconsistently: false success toasts (#3733), missing refresh-retry (#4991, now fixed), and UI inconsistency (#3732). These are open for 30+ days and represent unresolved end-to-end auth lifecycle gaps.
2. **Tool descriptions misleading the LLM** — the Claude/automation bug (#5151) and the vocabulary denylist false positive (#5169) both reveal that as Reborn's tool surface grows, prompt-assembly becomes a fragility point. Progressive tool disclosure (#5149) is a direct response.
3. **Missing management controls** — the inability to deactivate extensions (#5146) and intermittent Inference settings (#5157) point to WebUI v2 polish gaps that affect daily usability.

Satisfaction indicators are hard to read from the data (no stars or explicit positive feedback in the 24h window), but commit velocity itself is a signal: 42 active PRs suggests maintainer and contributor confidence in the Reborn direction.

## 8. Backlog Watch

- **Issue #3733 and #3732** (Gmail auth UX) — open 37+ days, both updated yesterday, neither has a linked fix PR. These are user-facing and aging.
- **Issue #4640** (google-calendar ordering) — open 15 days with no assignee or fix PR.
- **Issue #4108** (Nightly E2E) — open 28 days, bot-reported, no maintainer comment visible in the data; may need triage or closure if stale.
- **PR #5160 (tool activity SSE drain)** — new contributor, live activity not propagating past the first tool in multi-tool runs; directly degrades user experience in WebChat v2.
- **PR #4997 (download_file binary extraction)** — open 8 days, addresses PDF/PPTX/DOCX/XLSX support; useful capability, currently stalled.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-06-24

---

## 1. Today's Overview

LobsterAI remains moderately active today with **1 new issue** (both reopened/stale-related) and **11 pull requests** updated, of which 5 were merged and 6 remain open. The project is in active development with a clear focus on **Cowork scheduling/task management polish**, **security hardening**, and **AI gateway extensibility**. No new releases were published today, indicating the team may be accumulating fixes and features for a patch or minor release. Activity is healthy but concentrated in a small number of maintainers/reviewers.

---

## 2. Releases

None — no new tagged versions were published on this date.

---

## 3. Project Progress

Five PRs were merged today, representing solid feature and fix throughput:

| # | PR | Description |
|---|---|---|
| #2188 | [feat(rlog)](https://github.com/netease-youdao/LobsterAI/pull/2188) | Logging infrastructure additions by maintainer liuzhq1986 |
| #2189 | [fix: migrate legacy cron storage on startup](https://github.com/netease-youdao/LobsterAI/pull/2189) | Ensures smooth OpenClaw cron path migration during gateway startup, preserving run logs |
| #2190 | [fix: sync cron run sessions](https://github.com/netease-youdao/LobsterAI/pull/2190) | Normalizes run-scoped cron session keys so repeated runs reuse a single Cowork session, reducing state fragmentation |
| #2191 | [fix(scheduled-task): clarify startup state](https://github.com/netease-youdao/LobsterAI/pull/2191) | Distinguishes startup / loading / ready / error states in task and history tabs; refreshes cron data immediately after handshake |
| #2192 | [feat(cowork): persistent plan confirmation flow](https://github.com/netease-youdao/LobsterAI/pull/2192) | Keeps Plan Mode active per session until user confirms execution or adjusts the plan |

**The dominant theme is OpenClaw Cowork scheduling infrastructure hardening** — session synchronization, startup state visibility, and legacy data migration are all being addressed in lockstep, suggesting a concerted push to stabilize the scheduled-tasks subsystem ahead of a planned release.

---

## 4. Community Hot Topics

- **Issue #1400** — [4.1版本严重bug，网关反复启动失败（6 comments, stale since April）](https://github.com/netease-youdao/LobsterAI/issues/1400): This is the most commented item and the only open issue updated in the last 24h. The user reports a **critical regression**: upgrading from 3.30 to 4.1 causes the OpenClaw gateway to enter an infinite restart loop. They also raise a secondary issue about custom LLM config (qwen3.5-plus) being blocked by a `web-extractor` dependency check. Despite 6 comments and direct contact info, it remains open for over 80 days, suggesting it may be complex to reproduce or deprioritized. This represents a **severely negative upgrade experience** for at least one user.

- **PR #2193 — [feat: add LiteLLM as AI gateway provider](https://github.com/netease-youdao/LobsterAI/pull/2193)**: This open PR would let users point at a LiteLLM proxy for access to 100+ LLM providers via a single OpenAI-compatible endpoint — **zero new dependencies**, reusing the existing `chatWithOpenAICompatible` handler. This signals growing demand for **multi-provider AI gateway flexibility** and aligns with LiteLLM's explosive adoption in the OSS community.

---

## 5. Bugs & Stability

### 🔴 Critical
- **Issue #1400 — Gateway infinite restart loop on v4.1 upgrade** [[link](https://github.com/netease-youdao/LobsterAI/issues/1400)]
  - **Impact**: Complete application bricking on upgrade from 3.30 → 4.1. User reports total service outage.
  - **Stale for 80+ days** with 6 discussion comments but no linked fix PR.
  - **Root cause likely**: OpenClaw gateway config or environment incompatibility introduced in v4.x.
  - **⚠️ No fix PR identified** — this deserves immediate maintainer triage.

### 🟡 Medium
- **PR #1401 — Request ID using `Math.random()` for SSE streams (predictable) [[link](https://github.com/netease-youdao/LobsterAI/pull/1401)**: Security vulnerability where session hijacking could be possible. Fix replaces with `crypto.randomUUID()`. **Still open/stale since April** — needs merge or review.
- **PR #2190 — Cron run session key normalization**: Fixes state fragmentation where repeated cron runs don't share session context. **Merged today** ✅.
- **PR #2189 — Legacy cron storage migration on startup**: Prevents data loss during OpenClaw upgrades. **Merged today** ✅.

### 🟢 Low
- **PR #2191 — Scheduled-task startup state clarity + PR #2192 — Persistent plan confirmation UI**: UX improvements. **Both merged today** ✅.

---

## 6. Feature Requests & Roadmap Signals

| Signal | Likelihood in next version | Rationale |
|---|---|---|
| **LiteLLM integration** (#2193) | 🟡 Medium | Clean PR, zero deps, but needs review cycle. Multi-provider demand is high community-wide. |
| **Custom time picker for scheduled tasks** (#1404) | 🟢 High | PR exists, addresses UX inconsistency (`<input type="time">` + native `<select>` vs. app theme). Would improve scheduled-task creation UX. |
| **i18n completeness** (#1403) | 🟢 High | Small fix, already has Chinese/English strings. Low-hanging fruit — likely to be merged quickly. |
| **Multi-select file attachment fix** (#1402) | 🟢 High | Regression fix for a clear bug (only last file shown). Already has a targeted fix. |
| **Plan Mode UX improvements** (#2192) | 🔵 Already shipped | Merged today ✅ — persistent plan confirmation flow will appear in next release. |

---

## 7. User Feedback Summary

**Primary Pain Points:**
- **Upgrade blocker (v3.30 → v4.1)**: The most severe user-reported issue. Gateway entirely unusable post-upgrade. This is a **retention risk** — if users cannot safely upgrade, they will stay on or abandon v3.x. (Issue #1400)
- **LLM configuration confusion**: Users report that custom LLM configs (specifically qwen3.5-plus) conflict with LobsterAI's automatic default LLM configuration when logged in. The error message about `web-extractor` requiring `web-search` is surfaced to the end user in an unclear way. (Issue #1400)
- **UI inconsistency in scheduled-task creation**: Native `<input type="time">` and `<select>` elements don't integrate with the app's custom theme (border-radius, colors), creating a disjointed experience. (PR #1404 summary)

**Satisfaction Indicators:**
- Strong and consistent contributor activity — multiple contributors (btc69m979y-dotcom, liuzhq1986, kayo5994, flowell) actively fixing bugs and polishing UX.
- The Cowork/scheduled-task UX is receiving sustained attention (state management, plan persistence, session sync), suggesting the team values this subsystem.
- Security-conscious patches (CSPRNG fix, session isolation) show maturity.

**Dissatisfaction Indicators:**
- Long-stale critical bugs (#1400) and PRs (#1401–#1406) going unanswered for **~85+ days** signals reviewer bottleneck or prioritization gap.
- The user in #1400 provided **direct contact info** (email + WeChat) out of desperation — indicating they felt the standard issue process wasn't yielding results.

---

## 8. Backlog Watch

| # | Age | Item | Why It Matters |
|---|---|---|---|
| **Issue #1400** | ⚠️ 80+ days | [v4.1 gateway infinite restart](https://github.com/netease-youdao/LobsterAI/issues/1400) | **Critical block** — user cannot use the product. Stale but reopened. Needs triage or closing with explanation. Highest priority for maintainer attention. |
| **PR #1401** | ⚠️ 85+ days | [Security: replace Math.random() with crypto.randomUUID()](https://github.com/netease-youdao/LobsterAI/pull/1401) | **Security vulnerability** — predictable SSE session IDs. Well-scoped, easy fix. Should be merged or explicitly closed. |
| **PR #1402** | ⚠️ 85+ days | [Fix multi-select file attachments](https://github.com/netease-youdao/LobsterAI/pull/1402) | Clear regression fix. Merge-ready. |
| **PR #1403** | ⚠️ 85+ days | [Add delete translation key](https://github.com/netease-youdao/LobsterAI/pull/1403) | Trivial i18n fix. Should take <1 minute to approve. |
| **PR #1404** | ⚠️ 85+ days | [Custom time picker for scheduled tasks](https://github.com/netease-youdao/LobsterAI/pull/1404) | Larger UI refactor. Needs review bandwidth but addresses real UX pain. |
| **PR #1406** | ⚠️ 85+ days | [Fallback notify channel list](https://github.com/netease-youdao/LobsterAI/pull/1406) | Edge case where IM channels disappear from dropdown. Well-scoped fix. |

**Summary**: There are **6 stale PRs** from April that appear merge-ready or nearly so. Collectively addressing these would significantly reduce the signal-to-noise floor and demonstrate responsiveness to contributors. The oldest open **issue** (#1400) is a critical regression that has lingered far too long without resolution or official communication.

---

*Generated by OWL · Data based on LobsterAI GitHub activity as of 2026-06-24*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-04-10

---

## 1. Today's Overview

Moltis is a personal AI assistant framework with extensible skills and multi-channel support. Today's activity was minimal, with no new issues or PRs opened in the last 24 hours. The sole PR was a modification to the Telegram skill — an incremental update with minor scope. All open issues are currently closed, leaving a clean queue. The project lacks fresh releases and visible community engagement this period.

---

## 2. Releases

**No new releases.** The latest release information is unavailable in the provided data. No version information or changelog was captured today.

---

## 3. Project Progress

| PR | Status | Description |
|----|--------|-------------|
| [#215](https://github.com/moltis-org/moltis/pull/215) — feat(tools): add send_image tool for channel image delivery | **Closed** (updated 2026-06-23, comment by maximilize) | Add `send_image` tool that lets skills send local image files (PNG, JPEG, GIF, WebP) to channel targets like Telegram. Reuses the existing screenshot pipeline and supports an optional `caption` parameter. |

**Summary:** One PR was maximally active in recent days, aiming to expand channel imaging. It could be a bug-fix iteration or a small functional change; the modification volume appears low. No merged PRs signify that no full feature shipped today.

---

## 4. Community Hot Topics

No issues or PRs received meaningful comments, reactions, or discussion in the last 24 hours. The open issue count is **0**. Activity signals a quiet community period, which could be typical for a stable release or low season. Without external signals, no rising topic can be definitively identified.

---

## 5. Bugs & Stability

No bug reports, crash logs, or regression reports in the last 24 hours. Overall stability signals are clean today, with no identified issues requiring immediate attention. The trend suggests either safe usage or insufficient testing feedback.

---

## 6. Feature Requests & Roadmap Signals

Based on the closed PRs like **#215** (image sending capabilities), a clear focus area is **multi-channel content delivery**. Potential upcoming features could include richer media types (audio, file attachments) or tighter integration with messaging APIs. No other recent feature requests are visible in the data.

---

## 7. User Feedback Summary

No user feedback, including feature requests, complaints, or usage scenarios, has been recorded in the provided period. Satisfaction cannot be quantified today. The absence suggests either satisfying early-stage product‑market fit or a very quiet user base.

---

## 8. Backlog Watch

- The open issue count is **0**, and no urgent unaddressed patches were flagged today.
- The lone **#215** PR, updated on 2026‑06‑23, was closed and likely incorporated, so no longer in the backlog.
- No trends indicate neglect or maintainer bottlenecks at this light activity level. Backlog may be under control, but further development pace could be modest.

---

**Overall Health Signal:** Low activity with a healthy issue queue. The project is stable, but future momentum is unclear without more contributors or maintainers pushing releases.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-06-24

## 1. Today's Overview

CoPaw (github.com/agentscope-ai/CoPaw) remains in a **high-activity phase** with a substantial post-merge cleanup cycle following the AgentScope 2.0 migration. In the last 24 hours, the project saw **38 issues** (28 open, 10 closed) and **50 pull requests** (30 open, 20 merged/closed), plus **one patch release** (v1.1.12.post2). The dominant theme is **stability fixes and UX polish**: mobile responsive layout PRs ballooned across nearly every console settings page, while several regression bugs surfaced from the 2.0 merge. Core functionality — cron scheduling, shell command parsing, memory management, and custom provider tool calling — continues to attract significant bug attention with repeated reports. Project health is moderate: high engagement but a growing backlog of user-facing regressions that need triage.

---

## 2. Releases

### v1.1.12.post2
- **Type:** Patch release (post-release fix)
- **Key changes:**
  - **fix(console):** navigate to new chat after deleting the current session
  - **feat(console, chat):** enhance file preview to support relative paths
  - **fix:** (additional fixes from the release notes, partially truncated in data)
- **Breaking changes:** None
- **Migration notes:** No migration required; standard patch upgrade.

---

## 3. Project Progress

The following merged/closed PRs represent actual progress landed today:

| PR | Title | Type | Significance |
|---|---|---|---|
| [#5366](https://github.com/agentscope-ai/QwenPaw/pull/5366) | feat(console): mobile responsive layout for Agent Config page | UI/UX | Mobile adaptation for workspace → ReAct agent / LLM retry / rate limiter tabs |
| [#5397](https://github.com/agentscope-ai/QwenPaw/pull/5397) | feat(console): adapt Settings-Models page for mobile view | UI/UX | Provider card stacking and group card overflow fixes on narrow screens |
| [#5350](https://github.com/agentscope-ai/QwenPaw/pull/5350) | feat(ui): improve mobile responsiveness of Chat header | UI/UX | Collapses secondary actions (Plan, History, WideMode) into dropdown below 700px |
| [#5435](https://github.com/agentscope-ai/QwenPaw/pull/5350) | refactor(memory): remove language parameter from get_memory_prompt | Refactor | Simplifies memory API surface |
| [#5440](https://github.com/agentscope-ai/QwenPaw/pull/5440) | fix: agentscope 2.0 post-merge bugs (Ponytail cleanup) | Bug fix | Fixes CancelledError handling and removes 1493 lines of dead code from `_coordinator.py` |
| [#5437](https://github.com/agentscope-ai/QwenPaw/pull/5437) | [CLOSED/Setup] frontend M3-B unit tests (Inbox + 11 API modules) | Testing | 14 test files / 171 cases; zero source changes; monitoring coverage gap |

**Overall theme:** The project is aggressively pursuing **mobile-first responsive redesign** across every console surface. This work spans ~10 concurrent PRs, suggesting a coordinated sprint. The post-merge agent-scope 2.0 bug cleanup is also ongoing but appears to be generating *new* bugs faster than it resolves old ones.

---

## 4. Community Hot Topics

### Most Active Issues by Comments

1. **[#5262 [BUG] Builtin skills re-enable after every upgrade (12 comments)](https://github.com/agentscope-ai/QwenPaw/issues/5262)**
   - *User need:* Persistent configuration state across upgrades. Users want to disable unused built-in skills (docx, xlsx) once and have that preference survive updates.
   - *Underlying issue:* State migration or config reset logic overwrites per-skill `enabled/disabled` flags during upgrade.

2. **[#5064 [INVALID] Agent-created scheduled tasks fail to trigger (12 comments)](https://github.com/agentscope-ai/QwenPaw/issues/5064)**
   - *User need:* Reliable cron/task scheduling for agent-automated workflows.
   - *Underlying issue:* Tasks created by agents are not editable and don't fire. Marked invalid, but multiple users affected.

3. **[#5317 [QUESTION] Tauri window can't find Python after Conda changes (6 comments)](https://github.com/agentscope-ai/QwenPaw/issues/5317)**
   - *User need:* Consistent Python path resolution in Tauri desktop app.

4. **[#5345 [BUG] Custom OpenAI-compatible providers don't support function calling (6 comments)](https://github.com/agentscope-ai/QwenPaw/issues/5345)**
   - *User need:* Bring-your-own-model with full tool-call support beyond OEM providers.
   - *Impact:* Affects any provider with custom OpenAI-compatible endpoints (e.g., OMLX). Ollama works; custom providers don't.

5. **[#5398 [BUG] Cron scheduler stops dispatching enabled jobs while app stays alive (5 comments)](https://github.com/agentscope-ai/QwenPaw/issues/5398)**
   - *User need:* Reliable long-running cron background service.
   - *Note:* Separate from #5064 — this is an in-process scheduler crash/freeze.

### Hot PRs Under Review

| PR | Focus | Status |
|---|---|---|
| [#5321](https://github.com/agentscope-ai/QwenPaw/pull/5321) | feat: scroll context manager — durable history + recall REPL | Under Review | [first-time-contributor] |
| [#5443](https://github.com/agentscope-ai/QwenPaw/pull/5443) | fix(tui): restore ACP commands and inline approvals | Open | Post-ACS migration |
| [#5407](https://github.com/agentscope-ai/QwenPaw/pull/5407) | fix: cap file size of send_file_to_user | Open | Security-adjacent |

---

## 5. Bugs & Stability

### Ranked by Severity

| Severity | Issue | Summary | Fix PR? |
|---|---|---|---|
| 🔴 **Critical** | [#5437 → #5401](https://github.com/agentscope-ai/QwenPaw/issues/5401) | Frontend crashes/white-screen when opening chats with large tool-use history (`type: "data"` content blocks unhandled) | ❌ |
| 🔴 **Critical** | [#5398](https://github.com/agentscope-ai/QwenPaw/issues/5398) | Cron scheduler silently stops dispatching enabled jobs while app process is alive | ❌ |
| 🔴 **Critical** | [#5456](https://github.com/agentscope-ai/QwenPaw/issues/5456) | Wrong agent identity for channel-built requests (v2.0.0b1: `agent_id` field missing from `AgentRequest`, defaults to `default`) | ❌ |
| 🟠 **High** | [#5262](https://github.com/agentscope-ai/QwenPaw/issues/5262) | Builtin skills revert to enabled on every upgrade — user preference not persisted | ❌ |
| 🟠 **High** | [#5345](https://github.com/agentscope-ai/QwenPaw/issues/5345) | Custom OpenAI-compatible providers silently disable function calling | ❌ |
| 🟠 **High** | [#5373](https://github.com/agentscope-ai/QwenPaw/issues/5373) | Shell command tool fails on pipes, redirects, stderr merging — only basic commands work | ❗ [#5321] (partial, REPL-based) |
| 🟠 **High** | [#5379](https://github.com/agentscope-ai/QwenPaw/issues/5379) | Internal Server Error on startup after pip install (`get_remote_addr(transport)`) | ❌ |
| 🟡 **Medium** | [#5416](https://github.com/agentscope-ai/QwenPaw/issues/5416) | Reasoning content (`thinking`/`reasoning_content`) displayed but `content` field empty — user sees no reply | ❌ |
| 🟡 **Medium** | [#5328](https://github.com/agentscope-ai/QwenPaw/issues/5328) | DeepSeek models hang during thinking phase; requires manual stop/resume | ❌ |
| 🟡 **Medium** | [#5403](https://github.com/agentscope-ai/QwenPaw/issues/5403) | Browser autofill hijacks search input in Model Configuration page | ❌ |
| 🟡 **Medium** | [#5295](https://github.com/agentscope-ai/QwenPaw/issues/5295) | Subagent approval requests not pushed to external channel (e.g., QQ) | ❌ |
| 🟡 **Medium** | [#5421](https://github.com/agentscope-ai/QwenPaw/issues/5421) | Severe UI lag when switching between agents and chat windows | ❌ |

### Severity Summary
- **3 critical bugs** — frontend crash, scheduler death, and wrong agent identity are production-blocking
- **Zero of the critical bugs have fix PRs yet opened**
- Shell tool parsing (affecting core agent capability) and custom provider function calling are the highest-impact regressions for multi-model deployments

---

## 6. Feature Requests & Roadmap Signals

| Feature | Issue | Signal Strength | Likely Version |
|---|---|---|---|
| **Mobile-first responsive console** | [PRs #5350, #5366, #5397, #5444–#5452 (coordinated sprint)](https://github.com/agentscope-ai/QwenPaw/pull/5350) | 🔥🔥🔥 Very Strong (multiple active PRs) | v1.1.13 or v1.2.0 |
| **Scroll context manager** (durable SQLite history + REPL recall) | [PR #5321](https://github.com/agentscope-ai/QwenPaw/pull/5321) | 🔥🔥 Strong (under review, first-time contributor) | v1.2.0+ |
| **Mobile web UI access point** (no app installation) | [#4635](https://github.com/agentscope-ai/QwenPaw/issues/4635) (closed, incremental progress) | 🔥 Moderate (being addressed via CSS PRs) | In progress |
| **Memory lifecycle & recency ranking** | [#3995](https://github.com/agentscope-ai/QwenPaw/issues/3995), [#5316](https://github.com/agentscope-ai/QwenPaw/issues/5316) | 🔥 Moderate (consistent long-tail requests) | v1.2.0 or v2.0 |
| **Agent-scoped project directories in TUI** | [PR #5448](https://github.com/agentscope-ai/QwenPaw/pull/5448) | 🔥 Moderate (active PR) | v1.2.0 |
| **KaTeX/LaTeX rendering in desktop app** | [#5453](https://github.com/agentscope-ai/QwenPaw/issues/5453) | 🔥 Low (single request) | Unlikely in v1.x |
| **Memory usage optimization** (currently 1.4 GB at idle) | [#5441](https://github.com/agentscope-ai/QwenPaw/issues/5441), [#5439](https://github.com/agentscope-ai/QwenPaw/issues/5439) | 🔥 Low (2 duplicates, no PR) | Needs investigation first |
| **Provider: Kimi Coding Plan (Anthropic API)** | [#5427](https://github.com/agentscope-ai/QwenPaw/issues/5427) | 🔥 Low (single, recent) | Depends on multi-provider refactor |

**Roadmap prediction:** Expect the next release wave (v1.1.13 or v1.2.0) to bundle **mobile responsive improvements** as the headline feature, with **scroll context manager** and **memory lifecycle tools** as secondary additions. The v2.0.0 beta suggests a parallel track with breaking-agent architecture changes.

---

## 7. User Feedback Summary

### Pain Points

1. **"Update anxiety"** — Users actively disable built-in skills to prevent accidental invocations, but every upgrade overrides their preferences ([#5262](https://github.com/agentscope-ai/QwenPaw/issues/5262), 12+ comments). This erodes trust in the upgrade process and creates real risk of accidental data operations.

2. **"Agent scheduling is broken"** — Multiple users report that agent-created cron tasks silently fail to fire ([#5064](https://github.com/agentscope-ai/QwenPaw/issues/5262), [#5235](https://github.com/agentscope-ai/QwenPaw/issues/5235), [#5398](https://github.com/agentscope-ai/QwenPaw/issues/5398)). For users building automated workflows, this is a **core value proposition failure**.

3. **"The tool just doesn't work"** — Shell tool can't handle pipes, redirects, or stderr ([#5373](https://github.com/agentscope-ai/QwenPaw/issues/5373)); custom providers lose function calling ([#5345](https://github.com/agentscope-ai/QwenPaw/issues/5373)). These are fundamental agent capability regressions that drive users to alternatives.

4. **"Mobile is unusable"** — Without the current responsive sprint, the console is effectively desktop-only. Users wanting phone/tablet access can't use the web UI natively ([#4635](https://github.com/agentscope-ai/QwenPaw/issues/4635), [#5441](https://github.com/agentscope-ai/QwenPaw/issues/5441)).

### Satisfaction Indicators
- Active contributors submitting PRs across new contributors (`niceIrene`, `ekzhu`'s TUI work)
- Responsive issue triage (issues getting comments/engagement within 24h)
- Memory/thoughtfulness around configuration design ([#5455](https://github.com/agentscope-ai/QwenPaw/issues/5455) on timestamp injection shows users engaging deeply with agent behavior)

---

## 8. Backlog Watch

### Items Needing Maintainer Attention (>48h without response)

| Item | Age | Issue | Risk |
|---|---|---|---|
| [#5262 Builtin skills revert on upgrade](https://github.com/agentscope-ai/QwenPaw/issues/5262) | 7 days | 12 comments, no assignee, no label beyond `bug` | **High** — Repeated issue (previous #4807 closed without resolution), erosion of user trust |
| [#5345 Custom provider function calling](https://github.com/agentscope-ai/QwenPaw/issues/5345) | 4 days | No maintainer comment, `bug` label only | **High** — Blocks multi-provider deployments; 6 comments, no investigation |
| [#5373 Shell tool special characters](https://github.com/agentscope-ai/QwenPaw/issues/5373) | 2 days | Root cause identified in issue, no fix PR | **High** — Core agent capability regression, affects all shell-dependent workflows |
| [#5328 DeepSeek thinking hang](https://github.com/agentscope-ai/QwenPaw/issues/5328) | 5 days | 2 comments, no maintainer response | **Medium** — Affects all DeepSeek users; may be model-side or timeout config |
| [#5360 Stabilize core before adding features](https://github.com/agentscope-ai/QwenPaw/issues/5360) | 3 days | Meta-issue, no maintainer acknowledgment | **Strategic** — User raising the alarm about stability-first priority |
| [#5316 memory_search recency ranking](https://github.com/agentscope-ai/QwenPaw/issues/5316) | 6 days | 2 comments, related to long-running #3995 | **Low-Medium** — User contribution welcome but needs design alignment |
| [#5401 Frontend crash on large tool history](https://github.com/agentscope-ai/QwenPaw/issues/5401) | <1 day | Reported today, **crash-level severity** | **Critical** — This will hit every active user; needs immediate fix |

### Emerging V2.0 Concerns
- [#5456 Wrong agent identity](https://github.com/agentscope-ai/QwenPaw/issues/5456) (v2.0.0b1) — no `agent_id` in `AgentRequest`, multi-agent setups silently default. This is a **design-level bug in the v2 channel** and needs resolution before beta widens.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-06-24

## 1. Today's Overview

ZeroClaw shows high activity with 34 issues and 50 pull requests updated in the last 24 hours, indicating a fast-moving codebase with heavy community engagement. Development focus clusters around **plugin security hardening** (env-read allowlisting, SSRF protection, capability-gated WASI), **multi-agent delegation**, **supply-chain signing (SLSA)**, and **TUI/gateway stability fixes**. No new releases were shipped today; work is accumulating toward the v0.9.0 milestone (Issue [#7432](https://github.com/zeroclaw-labs/zeroclaw/issues/7432)). The volume of open RFCs (~12) and concurrent PRs (~31) signals the project is in an active architectural expansion phase.

## 2. Releases

No new releases today.

## 3. Project Progress (Merged / Closed PRs)

| PR | Description |
|---|---|
| [#8068](https://github.com/zeroclaw-labs/zeroclaw/pull/8068) | **Restored Matrix room management tools** — adds `RoomCreationOptions`, room creation & invite support on current master. |
| [#8011](https://github.com/zeroclaw-labs/zeroclaw/pull/8011) | **Restored per-sender /thinking overrides** — `/thinking off|minimal|low|medium|high|max|reset` for per-session reasoning control. |
| [#8074](https://github.com/zeroclaw-labs/zeroclaw/pull/8074) | **Cascade provider and channel alias deletes** — fixes a config-delete mismatch that left dangling references. |

These closed PRs recovered previously reverted functionality (from the bulk revert tracked in [#6074](https://github.com/zeroclaw-labs/zeroclaw/issues/6074)) and hardened the gateway configuration API.

## 4. Community Hot Topics

| # | Item | Comments | Topic |
|---|---|---|---|
| 1 | [#5919](https://github.com/zeroclaw-labs/zeroclaw/issues/5919) (closed) | 6 | Plugin env-read allowlist — restricting plugin access to environment variables |
| 2 | [#8193](https://github.com/zeroclaw-labs/zeroclaw/issues/8193) (closed) | 4 | MCP tools missing from TUI sessions while gateway sees them |
| 3 | [#8177](https://github.com/zeroclaw-labs/zeroclaw/issues/8177) (open) | 4 | RFC: Supply chain signing — hardware PGP, hermetic builds, SLSA provenance |
| 4 | [#8043](https://github.com/zeroclaw-labs/zeroclaw/issues/8043) (open) | 3 | RFC: Retire standalone aardvark-sys crate into zeroclaw-hardware |
| 5 | [#6943](https://github.com/zeroclaw-labs/zeroclaw/issues/6943) (open) | 3 | RFC: Deconflict plugin system goals in FND-001 (Extism vs. wasmtime component model) |

**Analysis:** The top two commented issues (#5919, #8193) address **security isolation for plugins** and **tool discovery parity across interfaces**. The community is pushing hard on the plugin security surface — SSAF protection, env-read restriction, capability-gated WASI (#8187), and supply-chain signing all form a coherent cluster aimed at making the plugin system enterprise-ready. Issue #8193 reveals a real UX gap where TUI users couldn't access MCP tools that the web/gateway UI showed, suggesting the multi-surface tool registry RFC (#7929) is urgently needed.

The plugin architecture debate (#6943 — Extism vs. native wasmtime component model) is a foundational decision that will affect the entire ecosystem. With three competing RFCs touching plugin runtime (#6943, #5919, #8187), the project needs convergence soon to avoid implementation paralysis.

## 5. Bugs & Stability

| Severity | Issue | Description | Fix PR? |
|---|---|---|---|
| **S1** | [#8151](https://github.com/zeroclaw-labs/zeroclaw/issues/8151) | Deferred image attachment loses reloadable reference in cached history; bot later denies seeing it | — |
| **S1** | [#8202](https://github.com/zeroclaw-labs/zeroclaw/issues/8202) | `refreshed_new_session_system_prompt` missing bundled-skill loading — new sessions exclude skill bundle skills | — |
| **S1** | [#8054](https://github.com/zeroclaw-labs/zeroclaw/issues/8054) | System prompt tool-availability mismatches per-turn effective tools via channels, gateway, WebSocket, multimodal | — |
| **P1** | [#8219](https://github.com/zeroclaw-labs/zeroclaw/issues/8219) | gpt-oss-120b on Groq fails multi-turn tool loops — tool_result tool_call_id serialized null; reasoning_content rejected | — |
| **S2** | [#8236](https://github.com/zeroclaw-labs/zeroclaw/issues/8236) | `voice_wake.rs` ChannelMessage literal missing `subject` field — breaks `--all-features` build | — |
| **S2** | [#8186](https://github.com/zeroclaw-labs/zeroclaw/issues/8186) (closed) | zerocode should detect daemon/TUI version mismatch during connect | — |
| **S3** | [#2091](https://github.com/zeroclaw-labs/zeroclaw/issues/2091) (closed) | Telegram poll errors can log Bot API token URL segments | Fixed |

**Concern:** Three S1/blocker bugs are open with no linked fix PRs. Issue #8054 (P1, but S1-level impact) — tool availability mismatch in system prompts — was reported 4 days ago and is marked blocked. Issue #8151 (image attachment persistence) and #8202 (skill bundle loading) represent broken user-facing workflows.

## 6. Feature Requests & Roadmap Signals

**Likely candidates for next version:**

| Feature | Signals |
|---|---|
| **Per-agent custom env vars** ([#8226](https://github.com/zeroclaw-labs/zeroclaw/issues/8226)) | New, clear spec for declarative env injection per agent — addresses security isolation |
| **Independent delegate mode** ([#8238](https://github.com/zeroclaw-labs/zeroclaw/issues/8238)) | Specialist agent handoffs under own policy/toolset; in-progress, builds on #7590 |
| **Zero-downtime config reload** ([#7897](https://github.com/zeroclaw-labs/zeroclaw/issues/7897)) | Scoped reload for security policy without daemon restart — accepted, no fix yet |
| **In-app upgrade with supervised restart** ([#8170](https://github.com/zeroclaw-labs/zeroclaw/issues/8170)) | Web dashboard upgrade UX — RFC stage |
| **DingTalk streaming messages** ([#8228](https://github.com/zeroclaw-labs/zeroclaw/issues/8228)) | Reduces latency for long-running completions on DingTalk |
| **Relationship memory as user-facing workflows** ([#8251](https://github.com/zeroclaw-labs/zeroclaw/issues/8251)) | Surfaces knowledge graph memory as documented operator workflows |

**Roadmap prediction:** The v0.9.0 tracker ([#7432](https://github.com/zeroclaw-labs/zeroclaw/issues/7432)) is the primary coordination surface. Given the volume of security hardening work (plugin allowlisting, SSRF protection, supply-chain signing, capability-gated WASI), the next release will likely be **security-focused** with the plugin system as the headline feature. The independent delegate mode (#8238) and per-agent env vars (#8226) are strong candidates for inclusion.

## 7. User Feedback Summary

**Pain points expressed:**

- **TUI users feel second-class:** MCP tools don't appear in TUI sessions ([#8193](https://github.com/zeroclaw-labs/zeroclaw/issues/8193)), slash-command registries are fragmented across surfaces ([#7929](https://github.com/zeroclaw-labs/zeroclaw/issues/7929)), and keybinds conflict with OS globals on macOS ([#8075](https://github.com/zeroclaw-labs/zeroclaw/issues/8075)).
- **Plugin trust is a concern:** Multiple issues demand env-var isolation ([#5919](https://github.com/zeroclaw-labs/zeroclaw/issues/5919)), SSRF protection ([#5918](https://github.com/zeroclaw-labs/zeroclaw/issues/5918)), and hardware access control ([#8187](https://github.com/zeroclaw-labs/zeroclaw/issues/8187)) — users want to run untrusted plugins safely.
- **Multi-agent workflows are immature:** Users want specialist agents with independent policy ([#8238](https://github.com/zeroclaw-labs/zeroclaw/issues/8238)) and per-agent environment isolation ([#8226](https://github.com/zeroclaw-labs/zeroclaw/issues/8226)).
- **Channel latency:** DingTalk and other channels need streaming support ([#8228](https://github.com/zeroclaw-labs/zeroclaw/issues/8228), [#7531](https://github.com/zeroclaw-labs/zeroclaw/issues/7531)) — users find full-response waits anxiety-inducing.

**Positive signals:** The community is actively contributing RFCs, writing test coverage (PRs [#8252](https://github.com/zeroclaw-labs/zeroclaw/pull/8252), [#8250](https://github.com/zeroclaw-labs/zeroclaw/pull/8250), [#8248](https://github.com/zeroclaw-labs/zeroclaw/pull/8248), [#8246](https://github.com/zeroclaw-labs/zeroclaw/pull/8246), [#8245](https://github.com/zeroclaw-labs/zeroclaw/pull/8245), [#8244](https://github.com/zeroclaw-labs/zeroclaw/pull/8244)), and recovering previously lost functionality from the bulk revert. The project's RFC process is being used effectively for architectural decisions.

## 8. Backlog Watch

| Item | Age | Risk | Note |
|---|---|---|---|
| [#6074](https://github.com/zeroclaw-labs/zeroclaw/issues/6074) — Audit 153 commits lost in bulk revert | ~80 days | High | Critical recovery work; 153 commits need individual triage. Stale recovery would permanently lose bug fixes. |
| [#6943](https://github.com/zeroclaw-labs/zeroclaw/issues/6943) — Deconflict plugin system goals (Extism vs. wasmtime) | ~29 days | High | Foundational architecture decision. Three related RFCs (#6943, #5919, #8187) need resolution to unblock plugin development. |
| [#8054](https://github.com/zeroclaw-labs/zeroclaw/issues/8054) — System prompt tool-availability mismatch | 4 days | High | Marked **blocked** — needs unblocking or escalation. Affects all non-direct-runtime entry points. |
| [#8151](https://github.com/zeroclaw-labs/zeroclaw/issues/8151) — Deferred image attachment loses reference | 2 days | High | S1 workflow-blocking; no fix PR yet. |
| [#8202](https://github.com/zeroclaw-labs/zeroclaw/issues/8202) — Skill bundle skills missing from new sessions | 1 day | High | S1 workflow-blocking; no fix PR yet. |
| [#8219](https://github.com/zeroclaw-labs/zeroclaw/issues/8219) — gpt-oss-120b on Groq multi-turn failure | 1 day | High | P1 bug affecting a specific but popular model/provider combo. |

**Maintainer attention needed:** Issues #8054, #8151, and #8202 are all S1/blocker-severity with no fix PRs and are 1–4 days old. The plugin architecture RFC (#6943) has been open for nearly a month without resolution — delaying this decision risks cascading work on incompatible foundations.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/DenisZheng/agents-radar).*