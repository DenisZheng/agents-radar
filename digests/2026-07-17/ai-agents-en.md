# OpenClaw Ecosystem Digest 2026-07-17

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-07-17 02:04 UTC

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

# OpenClaw Project Digest — 2026-07-17

## 1. Today's Overview
OpenClaw shows **very high activity** with 500 issues and 500 PRs updated in the last 24 hours (329 open issues, 322 open PRs). The project is in an active stabilization phase following the 2026.7.1 release, with numerous regressions reported around session management, gateway stability, and provider integrations. No new releases today, but 178 PRs were merged/closed, indicating rapid fix throughput. The issue backlog includes several P0/P1 release-blocker class bugs affecting gateway startup, session continuity, and multi-platform support.

## 2. Releases
**No new releases today.** The latest version appears to be **2026.7.1** (referenced in multiple regression reports). Users report upgrade friction when Node.js version requirements change ([#107930](https://github.com/openclaw/openclaw/issues/107930)).

## 3. Project Progress — Merged/Closed PRs (178 today)
Key merged fixes advancing stability:

| PR | Area | Summary |
|----|------|---------|
| [#107220](https://github.com/openclaw/openclaw/pull/107220) | Gateway | Fixed fatal crash-loop on startup from legacy memory sidecar `meta`/`chunks` conflicts (P0, release-blocker) |
| [#107694](https://github.com/openclaw/openclaw/pull/107694) | Gateway | Fixed strict `startupMigrationWarnings` guard blocking startup on benign legacy migration skips (P0) |
| [#106920](https://github.com/openclaw/openclaw/pull/106920) | Gateway | Fixed gateway restart failure after 2026.7.1 update (P0, 5 👍) |
| [#104721](https://github.com/openclaw/openclaw/pull/104721) | Core | Fixed tool results returning literal `"(see attached image)"` instead of actual output (P0) |
| [#102206](https://github.com/openclaw/openclaw/pull/102206) | Codex | Fixed Codex app-server stamping internal turns as `webchat`-bound, blocking Discord heartbeats |
| [#95833](https://github.com/openclaw/openclaw/pull/95833) | Sessions | Fixed subagent abort-settle not releasing `.jsonl.lock`, permanently breaking sessions |
| [#95915](https://github.com/openclaw/openclaw/pull/95915) | Memory | Fixed heap not released on embedded run abort; session write lock persists |
| [#107449](https://github.com/openclaw/openclaw/pull/107449) | Tools | Fixed cron tool JSON Schema incompatibility with llama.cpp (`pattern: "\S"`) |
| [#108233](https://github.com/openclaw/openclaw/pull/108233) | iOS | Fixed "New Chat" disappearing after phone lock; orphan sessions on reconnect |

**Infrastructure hardening PRs open/ready:**
- [#96250](https://github.com/openclaw/openclaw/pull/96250) — Prevent gateway OOM crash loops under sustained load (P0, closes #96203)
- [#101429](https://github.com/openclaw/openclaw/pull/101429) — Bound ignore-file reads during workspace scans (prevents memory exhaustion)
- [#104552](https://github.com/openclaw/openclaw/pull/104552) — Reject oversized Admin HTTP RPC request bodies
- [#109233](https://github.com/openclaw/openclaw/pull/109233) — Fix `denyPaths` not denying listing of denied directory itself (file-transfer plugin)

## 4. Community Hot Topics (Most Comments/Reactions)

| Issue | Comments | 👍 | Core Need |
|-------|----------|-----|-----------|
| [#75](https://github.com/openclaw/openclaw/issues/75) **Linux/Windows Clawdbot Apps** | 114 | 81 | **Platform parity** — macOS/iOS/Android apps exist; Linux/Windows users wait years for native apps with similar feature set |
| [#88312](https://github.com/openclaw/openclaw/issues/88312) **Codex turn-completion stall (2026.5.27 regression)** | 21 | 5 | **Reliability** — Multi-tool agent turns fail with "Codex stopped before confirming turn complete"; blocks Codex app-server users |
| [#7707](https://github.com/openclaw/openclaw/issues/7707) **Memory Trust Tagging by Source** | 17 | 0 | **Security** — Prevent memory poisoning from untrusted sources (web scrapes, third-party skills) |
| [#104721](https://github.com/openclaw/openclaw/issues/104721) **Tool results return placeholder string** | 17 | 1 | **Data integrity** — File reads return `"(see attached image)"` literal instead of content (P0, closed) |
| [#87744](https://github.com/openclaw/openclaw/issues/87744) **Codex Telegram turns timeout** | 15 | 3 | **Integration stability** — Codex-backed Telegram sessions fail to reach `turn/completed` |
| [#91009](https://github.com/openclaw/openclaw/issues/91009) **CPU-bound hook relay processes** | 14 | 2 | **Performance** — `openclaw-hooks` relay spawns consume 100%+ CPU, stall gateway RPC |
| [#10659](https://github.com/openclaw/openclaw/issues/10659) **Masked Secrets** | 13 | 4 | **Security** — Agents should use API keys without seeing raw values (prevent leaks/prompt injection) |
| [#94518](https://github.com/openclaw/openclaw/issues/94518) **DeepSeek cache hit rate <10%** | 11 | 10 | **Cost/performance** — Boundary-aware caching breaks prefix matching after 6.x upgrade (closed) |
| [#11665](https://github.com/openclaw/openclaw/issues/11665) **Webhook session reuse for multi-turn** | 11 | 0 | **Developer experience** — `sessionKey` documented for multi-turn but always generates new session |

**Underlying themes:** Platform gaps (Linux/Windows), post-2026.5.27 regression cluster around Codex/turn completion, security hardening demand (memory tagging, masked secrets, filesystem sandboxing), and session/subagent reliability.

## 5. Bugs & Stability — Ranked by Severity

### P0 / Release Blockers (Active)
| Issue | Component | Status | Fix PR |
|-------|-----------|--------|--------|
| [#108182](https://github.com/openclaw/openclaw/issues/108182) Control UI missing navigation (Skill Proposals, Dreaming) | Web UI | Open | — |
| [#108075](https://github.com/openclaw/openclaw/issues/108075) Agent failed: provider rejected request schema/tool payload | Core/Gateway | Open | — |
| [#107873](https://github.com/openclaw/openclaw/issues/107873) Embedded prompt-lock takeover aborts WebChat turns | Sessions | Open | — |
| [#106231](https://github.com/openclaw/openclaw/issues/106231) Loop detection blocks exec but doesn't terminate stuck run | Loop detection | Open | — |
| [#108473](https://github.com/openclaw/openclaw/issues/108473) Cron tool schema breaks llama.cpp tool-calling | Tools/llama.cpp | Open | — |

### P1 Regressions (2026.5.27 → 2026.7.1)
| Issue | Regression | Impact |
|-------|------------|--------|
| [#88312](https://github.com/openclaw/openclaw/issues/88312) | Codex turn-completion stall | Codex app-server multi-tool turns fail |
| [#87744](https://github.com/openclaw/openclaw/issues/87744) | Codex Telegram timeout | Telegram sessions fail to complete |
| [#91009](https://github.com/openclaw/openclaw/issues/91009) | Hook relay CPU spin | Gateway RPC stalls |
| [#92769](https://github.com/openclaw/openclaw/issues/92769) | Reasoning dropped for MiniMax via OpenRouter `:floor` | Message history incomplete |
| [#86684](https://github.com/openclaw/openclaw/issues/86684) | `sessions_yield` compacts parent at low context | Unexpected context loss |
| [#102206](https://github.com/openclaw/openclaw/issues/102206) | Codex heartbeats stamped `webchat` | Discord notifications silently denied |
| [#107464](https://github.com/openclaw/openclaw/issues/107464) | Telegram `message_tool_only` premature turn release | Incomplete Codex responses |

### Stability Patterns
- **Gateway crash-loops** on startup from migration guards (#107220, #107694, #106920 — all fixed)
- **Session lock leaks** on subagent abort (#95833, #95915 — fixed)
- **Zombie process accumulation** from hook/tool children ([#97616](https://github.com/openclaw/openclaw/issues/97616) — open)
- **WebSocket reconnects terminating sessions** ([#38091](https://github.com/openclaw/openclaw/issues/38091) — open, 7 comments)

## 6. Feature Requests & Roadmap Signals

| Issue | Priority | Signals | Likelihood Next Version |
|-------|----------|---------|-------------------------|
| [#75](https://github.com/openclaw/openclaw/issues/75) Linux/Windows Apps | P2 | 81 👍, 114 comments, 6+ months open | Medium — high demand but "needs-product-decision" |
| [#7707](https://github.com/openclaw/openclaw/issues/7707) Memory Trust Tagging | P2 | Security-focused, "diamond lobster" rating | Medium — architectural, needs design |
| [#10659](https://github.com/openclaw/openclaw/issues/10659) Masked Secrets | P1 | 4 👍, security-critical, "diamond lobster" | High — clear threat model, active discussion |
| [#7722](https://github.com/openclaw/openclaw/issues/7722) Filesystem Sandboxing Config | P2 | 4 👍, config-driven, partial impl attempted | Medium — config exists but doesn't work |
| [#6757](https://github.com/openclaw/openclaw/issues/6757) Agent-triggered Compaction | P2 | 2 👍, agent autonomy theme | Low — niche, "needs-product-decision" |
| [#90916](https://github.com/openclaw/openclaw/issues/90916) Topic-Session Families | P2 | 2 👍, complex multi-context model | Low — "off-meta tidepool", exploratory |
| [#10944](https://github.com/openclaw/openclaw/issues/10944) Telegram `parseMode` config | P2 | Simple, UX friction | High — small scope, clear fix |
| [#7476](https://github.com/openclaw/openclaw/issues/7476) WhatsApp Sticker Send | P2 | Clear gap (inbound works, outbound doesn't) | Medium |
| [#8355](https://github.com/openclaw/openclaw/issues/8355) Streaming TTS Pipeline | P2 | Voice call latency reduction | Low — "XL" effort, needs product decision |
| [#9986](https://github.com/openclaw/openclaw/issues/9986) Fallback on Context Exceeded | P2 | Logical gap in fallback chain | Medium — extends existing fallback infra |

**New PR signals:** [#109520](https://github.com/openclaw/openclaw/pull/109520) adds **AgentMail** as official external channel plugin (XL, docs+code). [#109329](https://github.com/openclaw/openclaw/pull/109329) adds **Android inline dictation** (XL, video proof). [#109411](https://github.com/openclaw/openclaw/pull/109411) refactors **external conversations vs local sessions** (XL, Reef-related).

## 7. User Feedback Summary

### Pain Points (Direct Quotes)
- **"Control UI is worse"** — Missing navigation to Skill Proposals, Dreaming after 2026.7.1 ([#108182](https://github.com/openclaw/openclaw/issues/108182))
- **"Gateway fails to start"** — Strict migration guard blocks startup on benign skips ([#107694](https://github.com/openclaw/openclaw/issues/107694))
- **"Tool results return '(see attached image)' literal string"** — Data loss, not display bug ([#104721](https://github.com/openclaw/openclaw/issues/104721))
- **"iOS New Chat disappears after locking phone"** — Orphan sessions on reconnect ([#108233](https://github.com/openclaw/openclaw/issues/108233))
- **"DeepSeek cache hit rate <10% after 6.x upgrade"** — Cost impact from broken prefix matching ([#94518](https://github.com/openclaw/openclaw/issues/94518))
- **"Linux/Windows apps missing for years"** — Platform parity with macOS/iOS/Android ([#75](https://github.com/openclaw/openclaw/issues/75))

### Positive Signals
- Rapid fix turnaround: 178 PRs merged/closed in 24h
- Multiple P0 gateway crash-loop fixes landed same day
- Community contributes fixes (e.g., [#109262](https://github.com/openclaw/openclaw/pull/109262) Docker stats bound, [#109088](https://github.com/openclaw/openclaw/pull/109088) provider read timeouts)
- Detailed repros with version bisects (e.g., #88312 identifies 2026.5.27 as regression point)

### Use Cases Emerging
- **Multi-platform agent deployment** (Telegram, Matrix, Discord, Slack, WhatsApp, Signal, Feishu, LINE, Reef)
- **Codex app-server as primary backend** for ChatGPT Plus users
- **Local llama.cpp / llama-swap** for privacy/cost
- **Subagent orchestration** with `sessions_spawn` + `sessions_yield`
- **Cron/isolated sessions** for scheduled/background work
- **Voice calls** via Twilio + ElevenLabs (streaming TTS requested)

## 8. Backlog Watch — Stale/Important Items Needing Maintainer Attention

| Issue | Age | Priority | Blockers | Why It Matters |
|-------|-----|----------|----------|----------------|
| [#75](https://github.com/openclaw/openclaw/issues/75) Linux

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: Personal AI Assistant / Agent Open-Source Ecosystem (2026-07-17)

---

## 1. Ecosystem Overview

The personal AI assistant/agent open-source landscape comprises **13 active projects** exhibiting a **bimodal distribution**: a cluster of 5 high-velocity platforms (OpenClaw, Hermes Agent, ZeroClaw, IronClaw, CoPaw) processing 50–500+ daily issue/PR updates, and a second tier of 6 specialized or maintenance-mode projects (NanoBot, Moltis, LobsterAI, NullClaw, ZeptoClaw, NanoClaw) with focused, lower-volume activity. **No project released a new version today**, but 7 have release candidates or patch trains queued. The ecosystem is in a **post-release stabilization sprint** — major versions landed mid-July (OpenClaw 2026.7.1, IronClaw Reborn, CoPaw v2.0.0) and teams are now resolving regression clusters around session management, gateway stability, provider integrations, and cross-platform parity. Community engagement is strong on flagship projects (100+ comment issues on OpenClaw, Hermes) but thin on newer entrants.

---

## 2. Activity Comparison

| Project | Issues Updated (24h) | PRs Updated (24h) | Open Issues | Open PRs | Release Status | Health Score |
|---------|---------------------|-------------------|-------------|----------|----------------|--------------|
| **OpenClaw** | 500 | 500 | 329 | 322 | v2026.7.1 (stabilizing) | 🟢 **Very High** — rapid fix throughput (178 merged), P0 resolution |
| **Hermes Agent** | 50 | 50 | ~50 | 44 | Pre-release (Reborn migration) | 🟢 **Very High** — 100 items/day, architectural investment |
| **ZeroClaw** | 24 | 50 | ~24 | ~50 | v0.8.3 frozen, v0.8.4 by 2026-07-31 | 🟢 **High** — feature-heavy, stacked PRs, S1 bugs tracked |
| **IronClaw** | 18 | 39 | 15 | 28 | v0.24→0.29 pending Reborn | 🟢 **High** — refactoring velocity, auth/test hardening |
| **CoPaw** | 43 | 46 | ~43 | ~21 | v2.0.0.post2, post3 imminent | 🟢 **High** — 25 merged, regression remediation focus |
| **NanoBot** | 1 | 12 | ~1 | 11 | Patch release imminent | 🟡 **Medium-High** — 7 P1 fixes open, review bottleneck |
| **LobsterAI** | 3 | 14 | 3 | 0 | v2026.7.16 RC ready | 🟡 **Medium** — high merge velocity (14/day), stale PR backlog |
| **Moltis** | 0 | 3 | 0 | 0 | **v20260716.01 released** | 🟢 **Stable** — zero issues, preventive fixes, E2E coverage |
| **NullClaw** | 1 | 0 | 1 | 0 | v2026.5.29 (crash-looping) | 🔴 **Critical** — aarch64 SIGSEGV blocks Telegram inbound |
| **ZeptoClaw** | 5 | 0 | 0 | 0 | No release | 🟢 **Stable** — maintenance/docs only, single contributor |
| **NanoClaw** | — | — | — | — | — | ⚪ **Unknown** — digest incomplete |
| **PicoClaw** | — | — | — | — | — | ⚪ **Unknown** — digest failed |
| **TinyClaw** | 0 | 0 | 0 | 0 | No activity | ⚪ **Dormant** — no 24h activity |

*Health Score Legend: 🟢 Healthy/Active • 🟡 Stabilizing/Review-Bound • 🔴 Critical Blocker • ⚪ Insufficient Data*

---

## 3. OpenClaw's Position

**Advantages vs Peers:**
- **Scale & Throughput**: 10× PR merge rate (178/24h) vs next closest (LobsterAI 14, CoPaw 25). Only project with triple-digit daily issue/PR volume.
- **Platform Breadth**: Native apps for macOS/iOS/Android + gateway channels for Telegram, Matrix, Discord, Slack, WhatsApp, Signal, Feishu, LINE, Reef. Linux/Windows gap (#75, 81 👍) is a known parity debt, not architectural limit.
- **Provider Agnosticism**: First-class support for Codex, OpenRouter, llama.cpp, DeepSeek, MiniMax, Z.ai, xAI, Grok, Vertex, Moonshot/Kimi — with active regression tracking per provider.
- **Session/Subagent Maturity**: `sessions_spawn`/`sessions_yield` orchestration, cron/isolated sessions, memory sidecar — features peers are still designing (IronClaw #6168, ZeroClaw #8891).

**Technical Approach Differences:**
- **Gateway-Centric Architecture**: Central `openclaw-gateway` manages WebSocket lifecycle, session persistence, provider routing, and channel adapters. Peers (Hermes, ZeroClaw, IronClaw) embed gateway logic in CLI or split across crates.
- **External Conversation Model**: PR #109411 refactors "external conversations vs local sessions" — a unified abstraction for multi-platform continuity that Hermes (#4335) and CoPaw (#5995) treat as open problems.
- **Memory Sidecar**: Dedicated `openclaw-memory` process with `.jsonl.lock` coordination — peers use in-process stores (NanoBot LRU, ZeroClaw pgvector/Lucid) or external DBs.

**Community Size**: Largest visible community — 114-comment issue (#75), 41 👍 on Hermes-equivalent request (#25267), multiple "diamond lobster" (high-priority) security tags. Contributor base includes external fixes (Docker stats, provider timeouts).

---

## 4. Shared Technical Focus Areas

| Requirement | Projects Affected | Specific Need |
|-------------|-------------------|---------------|
| **Session Continuity & Multi-Platform Sync** | OpenClaw (#108233, #38091), Hermes (#4335), CoPaw (#5995, #6047), ZeroClaw (#8134, #9048) | Unified conversation history across CLI, Telegram, Discord, WebUI; survive gateway restarts, device lock, profile switches |
| **Gateway/Service Stability** | OpenClaw (#107220, #106920), Hermes (#56770), ZeroClaw (#9085), IronClaw (#6155), NullClaw (#976) | Crash-loop prevention, OOM guards, graceful degradation, headless/server deployment reliability |
| **Provider Integration Hardening** | OpenClaw (#88312, #87744, #94518), Hermes (#53002, #65481), ZeroClaw (#5937, #8966), NanoBot (#4959, #4952) | Rate-limit retry correctness, model discovery, schema compatibility (llama.cpp), OAuth flows (Claude, Codex), cache efficiency |
| **Security & Isolation** | OpenClaw (#7707, #10659, #7722), NanoBot (#4955), ZeroClaw (#7960, #8398), IronClaw (#6170), CoPaw (#6048) | Memory trust tagging, masked secrets, filesystem sandboxing, tool-access policies, CIDR allowlists, plugin permission models |
| **WebUI/UX Polish** | OpenClaw (#108182), Hermes (#6126, #6127, #66008), IronClaw (#6117, #6145, #6146), LobsterAI (#1317, #1319), CoPaw (#6202) | Loading states, streaming render, keyboard shortcut discoverability, skeleton screens, toast accessibility, mobile/responsive |
| **Background/Scheduled Work** | OpenClaw (#107449, #109233), Hermes (#6171), ZeroClaw (#8134), CoPaw (#4818), Moltis (#1155) | Cron tool schema, session TTL enforcement, agent-triggered compaction, external-agent session persistence |

---

## 5. Differentiation Analysis

| Dimension | OpenClaw | Hermes Agent | ZeroClaw | IronClaw | CoPaw | NanoBot | Moltis | LobsterAI |
|-----------|----------|--------------|----------|----------|-------|---------|--------|-----------|
| **Primary Focus** | Multi-platform gateway + session orchestration | Local-first, Codex/Ollama integration, Desktop UX | Modular runtime, plugin architecture, A2A | Reborn rewrite: crate decomposition, WebUI v2 | Chinese-market desktop, channel integrations (Feishu/QQ) | Lightweight, Render/self-host, WebUI visibility | External-agent ecosystem, sandbox abstraction | Enterprise cowork, steer/attachment pipeline, Windows native |
| **Target Users** | Power users, self-hosters, multi-channel bot operators | Developers, local-model enthusiasts, Codex subscribers | Platform builders, plugin authors, inter-agent workflows | Teams, near.ai ecosystem, WebUI-first users | Chinese enterprise, Qwen/Feishu ecosystem | Solo devs, hobbyists, low-friction self-host | Agent marketplace vision, sandbox-heavy workflows | Enterprise collaboration, multi-agent steer workflows |
| **Architecture** | Monorepo: Gateway + Memory + Channels + CLI | Monorepo: CLI + Gateway + Desktop (Tauri) | Workspace: Crates (runtime, channels, providers, memory) | Workspace: 50+ crates, Reborn composition god-crate | Monorepo: Tauri + Go channels + Python core | Single binary (Rust), embedded SQLite, minimal deps | Modular: Core + Providers + Sandbox + External Agents | Monorepo: React/Redux frontend + Rust backend |
| **Channel Strategy** | 10+ first-party channels (Telegram, Matrix, Discord, Slack, WhatsApp, Signal, Feishu, LINE, Reef, WebChat) | Discord, Telegram, Slack, WebChat, CLI | Plugin-based: WASM, Webhook, WebSocket, TCP, Matrix, Slack (inbound/outbound) | Slack, Telegram (extension), WebUI, CLI | Feishu, QQ, OneBot, Mattermost, XiaoYi, DingTalk | WebUI only (no external channels) | WebUI + External Agent backends | WebUI + Scheduled Tasks (no IM channels) |
| **Provider Model** | OpenRouter, Codex, llama.cpp, local, 10+ APIs via adapters | Codex (OAuth), Ollama, OpenAI-compatible, Anthropic | Unified provider trait, reqwest client mgmt, subprocess (Grok CLI) | OpenAI-compatible, Anthropic, custom `models_url` | DashScope/Qwen, DeepSeek, OpenAI-compatible | OpenAI-compatible, Anthropic, Nimble (new) | Moonshot/Kimi, Anthropic, OpenAI, custom | OpenClaw gateway as backend (OpenRouter, etc.) |
| **Memory/Knowledge** | Sidecar process, JSONL, trust tagging (proposed) | In-process, skill persistence issues (#15985) | pgvector + Lucid, authoritative vs enrichment split (RFC) | Conversation history + long-term memory separation (#9048) | Auto-Memo, embedding config (regression #6155) | LRU cache + weak overflow, 2k msg cap | External-agent history merge, session store | Compaction retry, steer follow-up context |

---

## 6. Community Momentum & Maturity

| Tier | Projects | Signals |
|------|----------|---------|
| **Rapidly Iterating (High Velocity, Pre-Stable)** | OpenClaw, Hermes Agent, ZeroClaw, CoPaw | 50–500 daily updates; regression clusters post-major-release; stacked PRs; RFC-driven architecture; high comment counts on pain points |
| **Stabilizing / Patch-Ready** | NanoBot, LobsterAI, IronClaw | 10–40 daily updates; P1 fixes queued; release candidates cut; review bottlenecks; maintainer-driven triage |
| **Mature / Low-Friction** | Moltis, ZeptoClaw | Zero new issues; preventive merges; E2E coverage; single-contributor or tight core; date-based releases |
| **Critical / Blocked** | NullClaw | Single P0 crash with no fix PR; aarch64 users blocked; needs immediate hotfix |
| **Dormant / Unknown** | TinyClaw, PicoClaw, NanoClaw | No activity, failed digest, or incomplete data |

**Key Insight**: The ecosystem splits between **platform plays** (OpenClaw, Hermes, ZeroClaw, IronClaw, CoPaw) investing in gateway/channel/provider breadth, and **specialized tools** (NanoBot, Moltis, LobsterAI, ZeptoClaw) optimizing depth in self-host UX, sandboxing, enterprise cowork, or security metadata. Platform plays show higher volatility; specialized tools show higher stability.

---

## 7. Trend Signals for AI Agent Developers

| Trend | Evidence | Strategic Value |
|-------|----------

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-07-17

## 1. Today's Overview
NanoBot shows **high development velocity** with 12 PRs updated in the last 24 hours (11 open, 1 closed) and 1 new critical issue. The project is in active maintenance mode with a strong focus on **stability fixes** (session caching, provider retries, cancellation handling, WebUI visibility) and **operational hardening** (Docker security, Render deployment). No new release was cut today, but the volume of P1/P2 PRs suggests a patch release is imminent. Community contributions are diverse — covering providers, WebUI, session management, and infrastructure — indicating healthy multi-area engagement.

## 2. Releases
**No new releases today.** The latest release remains prior to this reporting window. Given 7 P1/P2 PRs open and ready for review, a patch release (likely `vX.Y.Z+1`) is expected within days once CI passes.

## 3. Project Progress (Merged/Closed Today)
| PR | Type | Summary | Link |
|----|------|---------|------|
| **#4950** | `docs` | Updated README to reflect community-driven maintenance model | [#4950](https://github.com/HKUDS/nanobot/pull/4950) |

*Only one PR closed today — a documentation-only change. All 11 other active PRs remain open, awaiting review/merge.*

## 4. Community Hot Topics
| Item | Type | Activity | Core Need |
|------|------|----------|-----------|
| **#4948** | Issue | 0 comments, 0 👍, updated 2026-07-16 | **Critical WebUI UX regression**: Late subagent completions spawn invisible `system` turns, breaking user visibility into agent activity. Directly blocks trust in WebUI for long-running multi-agent workflows. | [#4948](https://github.com/HKUDS/nanobot/issues/4948) |
| **#4954** | PR (fix) | 0 comments, 0 👍, opened 2026-07-16 | **Fix for #4948**: Preserves WebUI delivery metadata across subagent boundaries, assigns fresh turn IDs, routes streaming/progress/idle states through recovered WebSocket. High reviewer interest expected. | [#4954](https://github.com/HKUDS/nanobot/pull/4954) |
| **#4937** | PR (feat) | Updated 2026-07-16 (2 days old) | **One-click Render deploy**: Adds Render Blueprint for gateway + WebUI as single service with persisted sessions. Lowers self-hosting barrier; community demand for managed deploy paths. | [#4937](https://github.com/HKUDS/nanobot/pull/4937) |
| **#4955** | PR (security) | 0 comments, 0 👍, opened 2026-07-16 | **Docker hardening**: Removes `SYS_ADMIN`/unconfined defaults, adds `bwrap` opt-in compose file. Addresses supply-chain/security posture concerns for production deployments. | [#4955](https://github.com/HKUDS/nanobot/pull/4955) |

**Analysis**: The WebUI visibility bug (#4948/#4954) is the highest-impact user-facing issue. Deploy/ops improvements (#4937, #4955) signal growing production adoption. Low comment counts suggest reviewers haven't yet engaged — maintainer triage needed.

## 5. Bugs & Stability (Ranked by Severity)
| Severity | Issue/PR | Description | Fix PR Exists? |
|----------|----------|-------------|----------------|
| **P1 (Critical)** | **#4948** / **#4954** | WebUI loses visibility when late subagent completion starts a `system` turn — user sees no progress, streaming, or final output. Breaks core UX for multi-agent tasks. | ✅ **#4954** (open, ready for review) |
| **P1 (Critical)** | **#4959** | Provider retry logic uses exact `retry_after` from 429 responses, but some providers (e.g., Anthropic) return `retry_after=25` meaning *25s from now*, not *wait 25s*. Causes immediate re-retry → rate limit loops. | ✅ **#4959** (open, adds +1s buffer) |
| **P1 (Critical)** | **#4960** | MCP/AnyIO leaks `CancelledError` not tied to task cancellation, silently swallowed → masks real failures in tool execution paths. | ✅ **#4960** (open, adds `task_is_cancelling()` guard + logging) |
| **P1 (Critical)** | **#4957** | `SessionManager._cache` unbounded strong ref → OOM risk in long-running servers with many sessions. | ✅ **#4957** (open, adds 128-entry LRU + weak overflow cache) |
| **P1 (Critical)** | **#4956** | Agent raw-memory archiver bypasses 2,000-msg file cap at persistence boundary → disk bloat. | ✅ **#4956** (open, enforces cap at `save()` + SDK ingest test) |
| **P1 (Critical)** | **#4952** | UTF-16 surrogates in emoji-heavy content (post JSON round-trip) cause `UnicodeEncodeError` at provider request boundary, blocking LLM calls. | ✅ **#4952** (open, sanitizes at provider boundary) |
| **P1 (Security)** | **#4955** | Default `docker-compose.yml` grants `SYS_ADMIN` + unconfined AppArmor/seccomp — excessive privilege. | ✅ **#4955** (open, removes defaults, adds `bwrap` opt-in) |
| **P2** | **#4958** | zh-TW locale translations feel unnatural (machine-translated tone). | ✅ **#4958** (open, quality improvements) |

**Stability Signal**: 7 P1 fixes open simultaneously — strong indicator of recent regression cluster or pre-release hardening sprint. All have fix PRs; merge velocity will determine next patch stability.

## 6. Feature Requests & Roadmap Signals
| Signal | Source | Likelihood for Next Version |
|--------|--------|-----------------------------|
| **Nimble Search Provider** | PR **#4951** (new provider, follows existing REST pattern) | **High** — additive, low risk, follows established pattern |
| **Native Folder Picker Bridge (WebUI)** | PR **#4953** (external host bridge, token-auth, loopback-only) | **High** — enhances desktop/WebUI integration, security-conscious design |
| **One-Click Render Deploy** | PR **#4937** (Blueprint, persisted sessions, no secrets) | **Medium** — docs/infra only, but enables new user segment; may wait for 1-click doc update |
| **Community Maintenance Badging** | PR **#4950** (README update, merged) | **Done** — signals governance maturity |

**Roadmap Prediction**: Next minor release will likely bundle: Nimble provider, folder picker bridge, and Render deploy docs. WebUI visibility fix (#4954) and session/provider stability fixes (#4956, #4957, #4959, #4960) will drive a patch first.

## 7. User Feedback Summary
| Pain Point | Evidence | Impact |
|------------|----------|--------|
| **WebUI "goes dark" during subagent work** | Issue #4948: "does not inherit WebUI delivery lifecycle" — users see no output, progress, or completion | **High** — erodes trust in WebUI for complex tasks; blocks adoption for multi-agent workflows |
| **Rate limit retry loops** | PR #4959: "consistently seeing log messages... retrying in 25s" then immediate re-fail | **High** — wastes quota, delays responses, noisy logs |
| **Silent MCP cancellation leaks** | PR #4960: "swallowing `CancelledError` signals leaked by MCP/AnyIO" | **Medium** — masks tool failures, hard to debug |
| **Session memory growth** | PR #4957: "unbounded in-memory cache" → OOM in production | **High** — ops risk for long-running deployments |
| **Emoji/Unicode crashes** | PR #4952: "surrogates not allowed" on emoji-heavy content post JSON round-trip | **Medium** — breaks LLM calls unpredictably |
| **Docker security defaults** | PR #4955: "`SYS_ADMIN` and unconfined AppArmor/seccomp" in default compose | **High** — production blocker for security-conscious teams |

**Satisfaction Signal**: Users are hitting **production-grade issues** (OOM, security, Unicode, rate limits) — indicates NanoBot is being used seriously, not just prototyped. Fix PRs exist for all; responsiveness now defines project health.

## 8. Backlog Watch (Needs Maintainer Attention)
| Item | Age | Why It Matters | Suggested Action |
|------|-----|----------------|------------------|
| **#4937** — Render Deploy Blueprint | 3 days (updated today) | Lowers self-host barrier; enables new user segment; CC'd `@Re-bin` | **Review + merge** — infra-only, low risk, high leverage |
| **#4954** — WebUI Late Subagent Visibility Fix | 1 day | Fixes #4948 (critical UX regression); touches WebSocket routing, turn IDs, streaming | **Prioritize review** — user-facing, blocks multi-agent WebUI use |
| **#4955** — Docker Security Hardening | 1 day | Default compose is insecure; `bwrap` opt-in path needs docs validation | **Security review + merge** — production deployment blocker |
| **#4957 / #4956** — Session Cache & Persistence Bounds | 1 day (pair) | Core stability: OOM + disk bloat risks; both have regression tests | **Review together** — session subsystem changes, test coverage good |
| **#4959 / #4960 / #4952** — Provider/Encoding/Cancellation Fixes | 1 day (cluster) | Three independent P1s in provider/tool chain; all have tests | **Batch review** — related surface area, merge as stability pack |

**Maintainer Triage Priority**:  
1. **#4954** (user-visible WebUI fix) → 2. **#4955** (security default) → 3. **#4937** (growth enabler) → 4. **Session/Provider stability pack (#4956, #4957, #4959, #4960, #4952)** → 5. **#4953 / #4951 / #4958** (features/polish)

---

**Project Health Score**: 🟡 **Active / Hardening Phase**  
- ✅ High contributor throughput (12 PRs/24h)  
- ✅ Fixes exist for all critical bugs  
- ⚠️ Review bottleneck: 11 open PRs, 0 merged (except docs)  
- ⚠️ Zero community discussion on critical issues — maintainers must drive triage  

**Next Milestone**: Patch release with 7+ stability fixes + WebUI visibility restore, followed by minor with Nimble/Folder-Picker/Render.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-07-17

## 1. Today's Overview
Hermes Agent shows **very high development velocity** with 100 items (50 issues, 50 PRs) updated in the last 24 hours. The project is in active maintenance and feature expansion phase with **no new release** today. Critical stability work dominates: MCP connection leaks, gateway crash loops, session isolation bugs, and Desktop performance regressions. Simultaneously, major feature requests around multi-gateway support, cross-platform session sharing, and provider flexibility (Claude subscription OAuth, custom provider model discovery) indicate strong community demand for enterprise/team workflows. The 44 open PRs suggest a healthy contributor pipeline but also potential review bottleneck.

## 2. Releases
**No new releases today.** The last release data is not provided in the current dataset.

## 3. Project Progress — Merged/Closed PRs & Issues (Last 24h)
| PR/Issue | Title | Type | Impact |
|----------|-------|------|--------|
| [#53222](https://github.com/NousResearch/hermes-agent/pull/53222) | fix(memory): gate auto recall + scrub inline-echoed recall block | Bug fix | **Security/Privacy**: Prevents internal `<memory-context>` blocks from leaking to customer-facing channels (reported in #40170). Two-layer fix: inbound injection control + outbound stream containment. |
| [#52470](https://github.com/NousResearch/hermes-agent/issues/52470) | Dashboard auto-restart silently fails — inherits `_HERMES_GATEWAY=1` | Bug fix | **Reliability**: Dashboard webhook/Telegram QR onboarding now works; subprocess no longer inherits gateway env var causing silent failure. |
| [#54489](https://github.com/NousResearch/hermes-agent/issues/54489) | `hermes setup` disables basic plugin → dashboard auth fails on non-loopback | Bug fix | **Auth/Setup**: Setup wizard no longer incorrectly disables `basic` plugin, restoring dashboard auth for `0.0.0.0` binds. |
| [#41904](https://github.com/NousResearch/hermes-agent/issues/41904) | Codex app-server runtime loses thread context across turns | Bug fix | **Gateway/Codex**: Gateway now maintains one Codex thread per Hermes session instead of starting fresh each message. |
| [#61284](https://github.com/NousResearch/hermes-agent/issues/61284) | Dashboard chat sessions fail to render due to WebSocket regression | Bug fix | **Dashboard**: Fixed "Silent WebSocket" on session switch (v2026.7.7.2+); PTY terminal now updates correctly. |
| [#66019](https://github.com/NousResearch/hermes-agent/issues/66019) | `hermes -z` oneshot ignores `terminal.backend` — sandbox bypass | Bug fix | **Security**: Oneshot mode now respects configured terminal backend (ssh/docker/daytona/modal) instead of silently using local backend. |
| [#66022](https://github.com/NousResearch/hermes-agent/issues/66022) | `/branch` should open new thread on Discord/Telegram/Slack | Feature (dup) | **UX**: Duplicate closed; original request for thread-aware branching on gateway platforms remains open. |

## 4. Community Hot Topics — Most Active Issues/PRs
| Item | Comments | Reactions | Core Need |
|------|----------|-----------|-----------|
| [#25267](https://github.com/NousResearch/hermes-agent/issues/25267) **Claude Agent SDK with subscription OAuth** | 11 | 41 👍 | **Highest demand**: Users want to use Claude subscription (not API key) with Hermes — avoid double billing. Codex-style OAuth flow requested. |
| [#61265](https://github.com/NousResearch/hermes-agent/issues/61265) **Huge prompts to local models → multi-minute stalls** | 6 | 1 👍 | **Performance blocker**: Prompt construction sends excessive context to local OpenAI-compatible models across all sizes. |
| [#4335](https://github.com/NousResearch/hermes-agent/issues/4335) **Cross-platform session context sharing (CLI ↔ Telegram)** | 6 | 1 👍 | **Workflow continuity**: Gateway platforms (CLI, Telegram, Discord) have isolated sessions; users want unified conversation history. |
| [#15985](https://github.com/NousResearch/hermes-agent/issues/15985) **Hermes forgets skills with Ollama/Gemma 4** | 5 | 0 | **Skill persistence**: Skills disappear mid-session when using local models via `ollama launch hermes`. |
| [#65384](https://github.com/NousResearch/hermes-agent/issues/65384) **Desktop: new session per message on non-default profile (remote backend)** | 4 | 0 | **Session regression**: Non-default profiles (e.g., "coder") create `history=0` sessions on every message; default profile works. |
| [#45779](https://github.com/NousResearch/hermes-agent/issues/45779) **Multi-gateway connections with per-gateway tabs in Desktop** | 4 | 4 👍 | **Multi-device UX**: Users run agents on VPS, home server, Mac Mini — want single Desktop view with tabs per gateway. |
| [#65787](https://github.com/NousResearch/hermes-agent/issues/65787) **MCP keepalive uses `list_tools()` — O(tool-count) timeout loop** | 4 | 0 | **MCP stability**: Keepalive calls `list_tools()` every 30s; large MCP servers (>30s response) get stuck in reconnect loop. |
| [#65746](https://github.com/NousResearch/hermes-agent/issues/65746) **MoA/local calls crash after 30s: `float infinity` to integer** | 2 | 1 👍 | **Crash**: Mixture-of-Agents path triggers 30s heartbeat with non-finite timeout → `OverflowError`. |

**Underlying themes**: 
- **Provider flexibility** (Claude OAuth, custom provider model discovery [#65481](https://github.com/NousResearch/hermes-agent/issues/65481), Z.ai 429 handling [#53002](https://github.com/NousResearch/hermes-agent/issues/53002))
- **Session/context continuity** across platforms, profiles, and gateway restarts
- **Local model performance** (prompt size, MCP keepalive, MoA timeouts)
- **Desktop UX** for multi-gateway, multi-profile workflows

## 5. Bugs & Stability — Today's Reports (Ranked by Severity)

### 🔴 Critical / Crash / Data Loss
| Issue | Severity | Fix PR? | Description |
|-------|----------|---------|-------------|
| [#65746](https://github.com/NousResearch/hermes-agent/issues/65746) MoA crash: `cannot convert float infinity to integer` | **Critical** | No | Mixture-of-Agents path aborts with `OverflowError` when stale timeout becomes non-finite. Blocks MoA users. |
| [#56770](https://github.com/NousResearch/hermes-agent/pull/56770) Gateway crashes on unhandled exceptions in fatal error handlers | **Critical** | [PR #56770](https://github.com/NousResearch/hermes-agent/pull/56770) | Discord liveness probe failure → unhandled exception in error notification path → gateway process crash. |
| [#66019](https://github.com/NousResearch/hermes-agent/issues/66019) `hermes -z` ignores `terminal.backend` — sandbox bypass | **High (Security)** | Closed (fixed) | Oneshot mode silently uses local backend regardless of configured ssh/docker/daytona — potential sandbox escape. |

### 🟠 High / Major Regression
| Issue | Severity | Fix PR? | Description |
|-------|----------|---------|-------------|
| [#61265](https://github.com/NousResearch/hermes-agent/issues/61265) Huge prompts → multi-minute stalls on local models | **High** | No | Prompt construction sends excessive tokens to local OpenAI-compatible endpoints; stalls across all model sizes. |
| [#65787](https://github.com/NousResearch/hermes-agent/issues/65787) MCP keepalive `list_tools()` O(tool-count) → timeout/reconnect loop | **High** | [PR #66039](https://github.com/NousResearch/hermes-agent/pull/66039) | Keepalive calls full `tools/list` every 30s; large MCP servers timeout → guaranteed reconnect loop. PR fixes OOM from swallowing `TimeoutError`. |
| [#65384](https://github.com/NousResearch/hermes-agent/issues/65384) Desktop: new session per message on non-default profile (remote) | **High** | No | Non-default profiles create `history=0` sessions on every message; breaks conversation continuity. |
| [#65854](https://github.com/NousResearch/hermes-agent/issues/65854) Uninstall deletes other packages from shared Python folder | **High** | No | Uninstall treats shared `site-packages` as Hermes-owned; removes unrelated packages. |

### 🟡 Medium / Functional Bugs
| Issue | Severity | Fix PR? | Description |
|-------|----------|---------|-------------|
| [#15985](https://github.com/NousResearch/hermes-agent/issues/15985) Hermes forgets skills with Ollama/Gemma 4 | **Medium** | No | Skills disappear mid-session when using `ollama launch hermes` with Gemma 4. |
| [#53002](https://github.com/NousResearch/hermes-agent/issues/53002) Z.ai 429/code 1305 persists on chat/completions path | **Medium** | No | Fix in #47685 only covers Anthropic adapter; OpenAI-compatible path still hits rate limit. |
| [#58345](https://github.com/NousResearch/hermes-agent/issues/58345) xAI grok-4.3 drops optional multiline string args in MCP calls | **Medium** | No | AgentMail sends blank emails; xAI model omits optional multiline string parameters from tool calls. |
| [#54115](https://github.com/NousResearch/hermes-agent/issues/54115) BG Review causes OOM/slowdown with local llama.cpp | **Medium** | No | Background Review mechanism triggers OOM and severe slowdown on local llama.cpp servers. |
| [#66008](https://github.com/NousResearch/hermes-agent/issues/66008) Desktop "Read aloud" times out on long replies (15s fetch timeout) | **Medium** | No | TTS synthesis >15s fails; regression in fetch timeout handling. |
| [#66012](https://github.com/NousResearch/hermes-agent/issues/66012) Desktop ignores per-profile `tts/voice` config | **Medium** | No | Per-profile TTS settings ignored; always uses global/default provider. |

### 🟢 Low / UX / Config
| Issue | Severity | Description |
|-------|----------|-------------|
| [#65650](https://github.com/NousResearch/hermes-agent/issues/65650) `/model` picker slow (~5s) with `discover_models: true` | Low | Sequential `/v1/models` fetches from each custom provider on every picker open. |
| [#65949](https://github.com/NousResearch/hermes-agent/issues/65949) `hermes setup` doesn't recognize Google Cloud Vertex provider | Low | Vertex AI (Gemini/Gemma/Claude) not in provider list; blocks GCP users. |
| [#65714](https://github.com/NousResearch/hermes-agent/issues/65714) Desktop: no setting to disable auto-scroll during streaming | Low | Continuous auto-scroll forces viewport to bottom; users can't read earlier parts while streaming. |

## 6. Feature Requests & Roadmap Signals
| Request | Source | Signals | Likelihood for Next Version |
|---------|--------|---------|----------------------------|
| **Claude subscription OAuth (Codex-style)** | [#25267](https://github.com/NousResearch/hermes-agent/issues/25267) (41 👍) | Highest community demand; avoids double-billing; PR exploration likely | **High** — Strong user pain, clear precedent (Codex) |
| **Cross-platform session context sharing** | [#4335](https://github.com/NousResearch/hermes-agent/issues/4335) | Gateway architecture supports it; isolation is current limitation | **Medium-High** — Architectural fit, multiple platform users |
| **Multi-gateway tabs in Desktop** | [#45779](https://github.com/NousResearch/hermes-agent/issues/45779) (4 👍) | Desktop is active focus; PR #65935 shows update-hand-off work | **High** — Desktop UX investment ongoing |
| **Custom provider `models_url` decoupling** | [#65481](https://github.com/NousResearch/hermes-agent/issues/65481) | Clean config improvement; enables proxy/routing patterns | **Medium** — Low risk, high utility for power users |
| **Context-aware orchestrator model routing** | [#66020](https://github.com/NousResearch/hermes-agent/issues/66020) | Advanced feature; "agent self-routes tasks to optimal models" | **Low** — Requires significant orchestrator redesign |
| **Configurable gateway agent executor workers** | [PR #65740](https://github.com/NousResearch/hermes-agent/pull/65740) | Already in PR; makes pool size configurable (default 10) | **High** — Merged-ready, operational need |
| **ACP honor `max_turns` / `disabled_toolsets`** | [PR #66035](https://github.com/NousResearch/hermes-agent/pull/66035) | In PR; adds `agent.acp_toolsets` config | **High** — ACP compliance, already implemented |
| **Structured session tracing (start/end timestamps)** | [#6

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

⚠️ Summary generation failed.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

The user wants me<unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk>

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest — 2026-07-17

## 1. Today's Overview
NullClaw saw minimal GitHub activity in the past 24 hours: one critical issue (#976) was opened and remains unresolved, with zero pull requests or releases. The project is currently in a **high-severity regression state** — a SIGSEGV on every inbound Telegram message causes the `nullclaw gateway` service to crash-loop on aarch64 Linux, dropping all incoming messages. No mitigation or fix has been merged. Community engagement is low (1 comment, 0 reactions), suggesting limited visibility or triage capacity. Immediate maintainer attention is required to unblock aarch64 deployments.

## 2. Releases
**No new releases** in the last 24 hours. Latest known version: `v2026.5.29` (referenced in #976).

## 3. Project Progress
**No merged or closed PRs** today. No feature advancement or bug fixes landed.

## 4. Community Hot Topics
| Issue | Title | Activity | Link |
|-------|-------|----------|------|
| **#976** | SIGSEGV on every inbound Telegram message — inbound worker thread spawned with a ~512 KB stack overflows | 1 comment, 0 👍, updated 2026-07-16 | [nullclaw/nullclaw#976](https://github.com/nullclaw/nullclaw/issues/976) |

**Analysis**: The sole active issue is a **blocking crash** affecting all aarch64 users receiving Telegram messages. The single comment may indicate early triage or reproduction attempt. Zero reactions suggest low community awareness — possibly because aarch64 is a minority platform, or users are silently experiencing crash-loops without filing duplicates. Underlying need: **stack size configuration or thread spawn logic fix for ARM64** to prevent stack overflow in the inbound worker.

## 5. Bugs & Stability
| Severity | Issue | Description | Fix PR? |
|----------|-------|-------------|---------|
| **Critical (P0)** | [#976](https://github.com/nullclaw/nullclaw/issues/976) | SIGSEGV on *every* inbound Telegram message on aarch64 Linux; worker thread spawned with ~512 KB stack → overflow → process crash → systemd restart loop → message loss. Affects `v2026.5.29`. | **No** |

**Note**: This is a **regression** (implies prior versions worked on aarch64) and a **data-loss bug** (messages dropped on crash). No workaround documented. Highest priority for next patch.

## 6. Feature Requests & Roadmap Signals
**No new feature requests** in the last 24 hours. The crash in #976 may delay any planned features until stability is restored. If the root cause is thread stack sizing, a fix may involve:
- Configurable stack size for inbound workers
- Platform-specific defaults (larger stack on aarch64)
- Stack guard pages or overflow detection

These could appear in `v2026.7.x` or a hotfix `v2026.5.30`.

## 7. User Feedback Summary
**Pain points** (from #976):
- **Complete service unavailability** on aarch64 for Telegram inbound
- **Message loss** — no retry, no dead-letter, no user notification
- **Operational burden** — crash-loops fill logs, consume resources, require manual intervention

**Use case**: Running `nullclaw gateway` as a systemd service (`Restart=always`) on ARM64 servers (common in edge/self-hosted deployments).

**Sentiment**: Frustrated but technical — reporter provides precise diagnostics (stack size, architecture, version, service config). No satisfaction signals; issue is fresh.

## 8. Backlog Watch
| Item | Type | Age | Status | Why It Matters |
|------|------|-----|--------|----------------|
| [#976](https://github.com/nullclaw/nullclaw/issues/976) | Bug (Critical) | <24h | Open, unassigned | **Blocks all aarch64 Telegram inbound traffic**. No fix PR. Needs immediate triage, reproduction, and patch. High risk of silent user churn on ARM64. |

**Recommendation**: Maintainers should:
1. Assign #976 to a core contributor familiar with the inbound worker/thread pool
2. Reproduce on aarch64 (CI or local)
3. Test stack size increase (e.g., `pthread_attr_setstacksize` to 1–2 MB)
4. Ship hotfix `v2026.5.30` within 48h
5. Add aarch64 to CI matrix to prevent regression

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-07-17

---

## 1. Today's Overview

IronClaw is in a **high-velocity refactoring and stabilization phase** centered on the "Reborn" architecture. Over the past 24 hours, the project saw **18 issue updates** (15 open, 3 closed) and **39 PR updates** (28 open, 11 merged/closed), with zero new releases. Activity is heavily concentrated on: (a) decomposing the oversized `ironclaw_reborn_composition` god-crate (#6168, #4471), (b) hardening OAuth/auth flow lifecycle (#6130 reverted via #6166, re-applied in #6169), (c) promoting the Reborn CLI to the canonical `ironclaw` binary (#6143), (d) shipping a Telegram channel extension (#6159), and (e) a major WebUI v2 redesign split into workspace shell (#6162) and chat-first onboarding (#6163). The CI pipeline is gaining self-governance gates (composition mass ratchet, dev metrics #6167). Overall health signals are **positive but complex** — large stacked PRs, reverts, and architectural boundary work indicate a codebase in deliberate transition rather than steady-state feature delivery.

---

## 2. Releases

**No new releases published today.** The most recent release activity is tracked in PR #5598 (opened 2026-07-03, still open), which proposes version bumps for `ironclaw_common` (0.4.2 → 0.5.0, breaking), `ironclaw_skills` (0.3.0 → 0.4.0, breaking), and the main `ironclaw` crate (0.24.0 → 0.29.1). That PR remains unmerged; watch for its integration once Reborn migration milestones (#6143, #6142) land.

---

## 3. Project Progress (Merged / Closed PRs Today)

| PR | Title | Scope | Outcome |
|----|-------|-------|---------|
| **#6166** | OAuth Reversion | auth, dependencies | **Closed (merged revert).** Fully reverted #6130 to restore pre-change OAuth flow lifecycle, PKCE handling, and extension installation-state behavior. |
| **#6130** | fix(auth): OAuth flow-lifecycle hygiene | auth, docs | **Closed (merged then reverted).** Introduced supersede-on-start, durable PKCE verifiers, expiry-honest projections — later reverted via #6166 for reconsideration. |
| **#6114** | test(auth): shared OAuth-flow conformance suite | auth, dependencies, docs | **Closed (merged).** Added conformance tests across fake (`InMemoryAuthProductServices`) and durable (`FilesystemAuthProductServices`) implementations, closing a test-gap that allowed behavioral divergence. |
| **#6115** | build(deps): bump everything-else group (25 updates) | dependencies, rust | **Closed (merged).** Routine dependabot update including `agent-client-protocol 0.10.4 → 1.2.0`, `rustls 0.23.41 → 0.23.42`. |
| **#6117** | Workspace displays untranslated region names and raw file sizes | channel/web, docs | **Closed (merged).** Fixed localization of region identifiers (`home`, `memory`) and human-readable file sizes. |
| **#6118** | Add per-user secrets management to Admin user details | channel/web, docs | **Closed (merged).** Exposed existing frontend API for user-scoped secrets in Admin UI. |
| **#5565** | feat(gateway): onboarding/NUX demo | channel/web, docs | **Closed (merged).** Full intent-URL → sign-in → onboarding → agentic-chat experience; now split into #6162 + #6163 for Reborn. |

**Net progress:** Auth test infrastructure hardened (#6114), WebUI polish items shipped (#6117, #6118), but the flagship OAuth hygiene fix (#6130) was reverted — indicating **stability prioritized over velocity** on the auth boundary.

---

## 4. Community Hot Topics (Most Active Issues/PRs)

| Item | Type | Comments | Signals |
|------|------|----------|---------|
| **[#6168](https://github.com/nearai/ironclaw/issues/6168)** | Issue | 2 | **Architectural debt:** `ironclaw_reborn_composition` at 156k LOC (24% of workspace) violates its assembly-only charter. Active discussion on crate-minimal carve-out. |
| **[#6155](https://github.com/nearai/ironclaw/issues/6155)** | Issue | 2 | **P2 bug:** Follow-up messages after a failed run receive **zero response** — chat becomes unresponsive. High user-impact regression. |
| **[#6126](https://github.com/nearai/ironclaw/issues/6126)** | Issue | 2 | **P3 UX:** First message in new chat shows **no loading/streaming state** — appears frozen. |
| **[#6127](https://github.com/nearai/ironclaw/issues/6127)** | Issue | 2 | **P3 UX:** Routine first run incorrectly shows "Previous run still in progress". |
| **[#4471](https://github.com/nearai/ironclaw/issues/4471)** | Issue | 1 (updated today) | **Long-running tracking:** Runtime decomposition of `ironclaw_reborn_composition/src/runtime.rs` (>3k lines, multiple concerns). |
| **[#6159](https://github.com/nearai/ironclaw/pull/6159)** | PR | — | **Telegram channel extension** — first-class entrypoint on Reborn stack, admin bot setup, DM entrypoint. Large scope (XL). |
| **[#6167](https://github.com/nearai/ironclaw/pull/6167)** | PR | — | **CI governance:** Dev metrics script + composition mass ratchet gate — makes codebase health measurable and self-limiting. |
| **[#6172](https://github.com/nearai/ironclaw/pull/6172)** | PR | — | **Background service install** (launchd/systemd) for `ironclaw-reborn` — extracted from #6157. |
| **[#6169](https://github.com/nearai/ironclaw/pull/6169)** | PR | — | **Re-apply of reverted #6130** + Slack connection-epoch deletion — stacked on reconsideration. |

**Underlying needs:** (1) **Architectural decomposition** is the dominant technical theme — the god-crate is blocking boundary enforcement and team velocity. (2) **Chat resilience** after failures is a visible user pain point (#6155). (3) **First-load UX** (#6126, #6127) remains rough. (4) **Auth/OAuth stability** is still being negotiated (#6130 → #6166 → #6169).

---

## 5. Bugs & Stability (Reported Today, Ranked by Severity)

| Severity | Issue | Description | Fix PR? |
|----------|-------|-------------|---------|
| **High (P2)** | **[#6155](https://github.com/nearai/ironclaw/issues/6155)** | Follow-up messages after a failed run (e.g., model provider unavailable) receive **no response at all** — conversation stuck, no error indication. | No PR linked yet |
| **Medium (P3)** | **[#6126](https://github.com/nearai/ironclaw/issues/6126)** | First message in brand-new chat: **zero loading/streaming feedback** — UI appears frozen until full response arrives. | No PR linked yet |
| **Medium (P3)** | **[#6127](https://github.com/nearai/ironclaw/issues/6127)** | Routine first execution shows **"Previous run still in progress"** falsely; detail panel says "No runs yet". | No PR linked yet |
| **Medium** | **[#6149](https://github.com/nearai/ironclaw/issues/6149)** | Workspace file download failures **silently ignored** — no toast/error, user cannot tell if download failed. | No PR linked yet |
| **Medium** | **[#6161](https://github.com/nearai/ironclaw/pull/6161)** (PR) | WASM tool returning plain text (not JSON) caused **`OutputDecode` crash** before model saw content — **fix open**. | **Yes: #6161** |
| **Low** | **[#6117](https://github.com/nearai/ironclaw/issues/6117)** | Untranslated region names (`home`, `memory`) + raw byte sizes (e.g., `5242880 bytes`). | **Fixed in #6117 (merged)** |
| **Security** | **[#6170](https://github.com/nearai/ironclaw/issues/6170)** | Multi-tenant users can execute shell commands via agent (`ls -all` unbounded) — **file system access escalation**. | No PR linked yet |

**Critical watch:** #6170 (shell access in multi-tenant) and #6155 (chat deadlock after failure) are the highest-risk open items with no visible fix PRs yet.

---

## 6. Feature Requests & Roadmap Signals

| Request | Source | Likelihood for Next Version | Notes |
|---------|--------|-----------------------------|-------|
| **Promote `ironclaw-reborn` → `ironclaw` CLI** | [#6143](https://github.com/nearai/ironclaw/issues/6143) | **High** | Explicit follow-up to v1 retirement (#6077, #6122, #6123); pure naming/packaging change. |
| **Serve WebUI v2 at root path (not `/v2`)** | [#6142](https://github.com/nearai/ironclaw/issues/6142) | **High** | Directly enables #6143; routing/static mounting change. |
| **Telegram channel extension (admin bot, DM entrypoint)** | [#6159](https://github.com/nearai/ironclaw/pull/6159) | **High** | XL PR, designed for unified extension arch (#6116); first-class channel parity with Slack. |
| **Background service install (launchd/systemd) + restart** | [#6172](https://github.com/nearai/ironclaw/pull/6172) | **High** | Extracted from #6157; `full` feature bundle + libsql; enables production daemons. |
| **Traditional Chinese (zh-TW) locale** | [#6158](https://github.com/nearai/ironclaw/issues/6158) | **Medium** | Low-effort i18n; zh-CN exists, browser fallback issue. |
| **Theme selection in Appearance settings** | [#6146](https://github.com/nearai/ironclaw/issues/6146) | **Medium** | Theming exists (localStorage + sidebar toggle); just needs UI exposure. |
| **Toast lifecycle/accessibility improvements** | [#6145](https://github.com/nearai/ironclaw/issues/6145) | **Medium** | Manual dismiss, hover-pause, longer error duration, timer cleanup. |
| **Multi-arch binary builds in release pipeline** | [#6160](https://github.com/nearai/ironclaw/issues/6160) | **Medium** | Audit of existing release run; needed for `ironclaw` CLI promotion. |
| **Unified generic extension runtime (Option A state machine)** | [#6116](https://github.com/nearai/ironclaw/pull/6116) | **Medium-High** | Massive reconciliation PR (92 commits merged); blocks Telegram (#6159) and Slack epoch cleanup (#6164). |

**Prediction:** The next version will almost certainly include **CLI promotion (#6143)**, **root-path WebUI (#6142)**, **background service install (#6172)**, and **Telegram extension (#6159)** — all are large, merged-adjacent, and unblock the "Reborn as default" narrative. The unified extension runtime (#6116) is the linchpin; once it lands, Slack epoch deletion (#6164/#6169) and further channel parity follow.

---

## 7. User Feedback Summary (Real Pain Points)

| Pain Point | Evidence | Impact |
|------------|----------|--------|
| **Chat becomes unusable after a failed run** | #6155: "conversation becomes completely unresponsive… leaving the chat stuck without any indication" | High — blocks recovery, no error surfacing |
| **No feedback on first message** | #6126: "UI remains completely blank… application appears frozen" | High — new-user perception of brokenness |
| **Misleading routine status** | #6127: "Previous run still in progress" on first run | Medium — erodes trust in automation UI |
| **Silent download failures** | #6149: "error is caught without displaying a message" | Medium — data loss risk perception |
| **Shell access escape in multi-tenant** | #6170: "user can access the file system… unbounded to the user's workspace" | **Critical** — security boundary violation |
| **Toast UX too aggressive** | #6145: "cannot be manually dismissed… error messages disappear after only 2.6 seconds" | Low-Medium — accessibility + frustration |
| **Unlocalized workspace metadata** | #6117: "`home`/`memory` labels, `5242880 bytes`" | Low — polish, now fixed |

**Sentiment:** Users (internal + early adopters) are hitting **core loop failures** (chat, routines, downloads) that make the product feel unstable, while **security boundaries** (#6170) are demonstrably porous in multi-tenant mode. The team is responding with WebUI polish PRs (#6117, #6118 merged; #6145, #6146, #6149 open) but the chat resilience bugs (#6155, #6126) lack fix PRs.

---

## 8. Backlog Watch (Long-Unanswered / Needs Maintainer Attention)

| Item | Age / Status | Why It Matters |
|------|--------------|----------------|
| **[#4471](https://github.com/nearai/ironclaw/issues/4471)** | Open since 2026-06-04 (43 days), updated today | **Runtime decomposition tracking** — `runtime.rs` >3k lines, mixes trigger poller, descendant cancellation, skill activation, auth helpers. Blocks architectural boundary tests. PR #6168 is the active carve-out attempt. |
| **[#6116](https://github.com/nearai/ironclaw/pull/6116)** | Open since 2026-07-15, XL, 92-commit reconciliation | **Unified extension runtime** — merges `origin/main` into `nea25/unified-vs-main`. Blocks Telegram (#6159), Slack epoch cleanup (#6164/#6169), and generic extension architecture. Needs maintainer review/merge decision. |
| **[#6164](https://github.com/nearai/ironclaw/issues/6164)** | Closed but linked to #6169 (re-apply) | **Slack connection epoch deletion** — redundant state machine duplicating auth-flow guarantees. Fix depends on #6116 landing. |
| **[#5602](https://github.com/nearai/ironclaw/issues/5602)** | Open since 2026-07-03 (14 days) | **Slack connect from chat broken** — agent reports connected but DM returns pairing link. User-facing integration gap. |
| **[#6157](https://github.com/nearai/ironclaw/pull/6157)** | Open since 2026-07-16, XL | **TUI + service install** — now split: service half → #6172 (open), TUI half parked. Decision needed on TUI scope. |
| **[#5598](https://github.com/nearai/ironclaw/pull/5598)** | Open since 2026-07-03 (14 days) | **Release PR** — version bumps with breaking changes in `ironclaw_common`/`ironclaw_skills`. Held pending Reborn migration milestones. |
| **[#6170](https://github.com/nearai/ironclaw/issues/6

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-07-17

## 1. Today's Overview
LobsterAI showed **high merge velocity** on 2026-07-16 with **14 PRs merged/closed** in a single day, including a release candidate PR (#2344). The project is in active stabilization phase — most merged PRs target the `cowork` (agent collaboration) subsystem, addressing streaming UX, steer follow-up routing, attachment handling, and Windows title-bar integration. No new release was published today, but the `Release/2026.7.16` PR suggests a version cut is imminent. Community issue activity is low (3 stale issues updated), indicating maintainers are focused on clearing the PR backlog rather than new feature intake.

## 2. Releases
**No new releases published today.**  
The closed PR [#2344](https://github.com/netease-youdao/LobsterAI/pull/2344) `Release/2026.7.16` (author: liuzhq1986) prepares a version bump spanning renderer, docs, main, and cowork areas. Expect a `v2026.7.16` tag shortly. No breaking changes or migration notes are visible in the PR summary.

## 3. Project Progress — Merged/Closed PRs (2026-07-16)
| PR | Area | Summary |
|----|------|---------|
| [#2344](https://github.com/netease-youdao/LobsterAI/pull/2344) | renderer, docs, main, cowork | Release candidate 2026.7.16 |
| [#2343](https://github.com/netease-youdao/LobsterAI/pull/2343) | renderer, cowork | Extract clipboard attachment file extraction into testable helper |
| [#2339](https://github.com/netease-youdao/LobsterAI/pull/2339) | renderer | Fix update card header alignment; show full titles in narrow sidebars |
| [#2329](https://github.com/netease-youdao/LobsterAI/pull/2329) | renderer, cowork | Prevent conversation scroll jumps during streaming; respect manual scroll |
| [#2289](https://github.com/netease-youdao/LobsterAI/pull/2289) | main | Clear stalled compaction retry maintenance; reuse recoverable retry path |
| [#2292](https://github.com/netease-youdao/LobsterAI/pull/2292) | renderer, docs, main, cowork | Stabilize steer follow-up routing: queued steer follow-ups, real session reuse, scoped streaming state |
| [#2300](https://github.com/netease-youdao/LobsterAI/pull/2300) | renderer, cowork | Support attachments in steer queue (files, dragged/pasted files, images, selected text) |
| [#2302](https://github.com/netease-youdao/LobsterAI/pull/2302) | renderer, cowork | Windows-only branded title bar with logo, native controls; move collapsed-sidebar actions there |
| [#2313](https://github.com/netease-youdao/LobsterAI/pull/2313) | renderer, cowork | Submit only selected queued steer; preserve FIFO, add regression tests & logs |
| [#2310](https://github.com/netease-youdao/LobsterAI/pull/2310) | renderer, main, cowork | Folder context attachments: show dropped folders as removable prompt attachments, send path to OpenClaw |
| [#2307](https://github.com/netease-youdao/LobsterAI/pull/2307) | renderer, cowork | Refine prompt modes & steer follow-up: remove Plan Mode switch, move Goal/Steer bars above input, fix queued steer |
| [#1362](https://github.com/netease-youdao/LobsterAI/pull/1362) | cowork | Add ESC key to close permission modal (cleanup listener on unmount) |
| [#1364](https://github.com/netease-youdao/LobsterAI/pull/1364) | cowork | Add model selector to Home page input toolbar (duplicate of header selector, shared Redux state) |
| [#1367](https://github.com/netease-youdao/LobsterAI/pull/1367) | scheduled-task | Validate duplicate task names: normalization helpers, IPC blocking, form validation, regression tests |

**Theme:** The batch overwhelmingly improves **cowork reliability** (streaming scroll, steer queue, compaction retries, attachment handling) and **Windows desktop polish** (native title bar). Two older PRs (#1362, #1364, #1367) from April were finally merged, clearing stale contributions.

## 4. Community Hot Topics
| Item | Type | Activity | Signal |
|------|------|----------|--------|
| [#1317](https://github.com/netease-youdao/LobsterAI/issues/1317) / [#1318](https://github.com/netease-youdao/LobsterAI/pull/1318) | Issue+PR | 1 comment, 0 👍 | **Discoverability of keyboard shortcuts** — users miss Ctrl+N / Ctrl+F because no on-screen hint. PR adds `<kbd>` badges with platform-aware symbols (⌘/Ctrl). |
| [#1319](https://github.com/netease-youdao/LobsterAI/issues/1319) / [#1320](https://github.com/netease-youdao/LobsterAI/pull/1320) | Issue+PR | 1 comment, 0 👍 | **Session list loading UX** — “暂无会话” flashes on startup before data arrives. PR adds `sessionsLoaded` flag + skeleton screen. |
| [#1361](https://github.com/netease-youdao/LobsterAI/issues/1361) | Issue | 2 comments, 0 👍 | **i18n regression** — “Delete” button shows English in Chinese UI. Closed today (likely fixed in merged batch). |

**Underlying need:** Polish & discoverability. Contributors (MaoQianTu) are submitting paired Issue+PR for small but high-visibility UX gaps. Maintainers should prioritize merging #1318 and #1320 to unblock these contributors.

## 5. Bugs & Stability
| Severity | Issue/PR | Status | Fix PR |
|----------|----------|--------|--------|
| **High** | Conversation scroll jumps during streaming ([#2329](https://github.com/netease-youdao/LobsterAI/pull/2329)) | ✅ Merged | #2329 |
| **High** | Stalled compaction retry leaks maintenance state ([#2289](https://github.com/netease-youdao/LobsterAI/pull/2289)) | ✅ Merged | #2289 |
| **Medium** | Steer follow-up routing could lose attachments / use stale session ([#2292](https://github.com/netease-youdao/LobsterAI/pull/2292), [#2300](https://github.com/netease-youdao/LobsterAI/pull/2300)) | ✅ Merged | #2292, #2300 |
| **Medium** | Permission modal not closable via ESC ([#1362](https://github.com/netease-youdao/LobsterAI/pull/1362)) | ✅ Merged | #1362 |
| **Low** | Update card header truncation in narrow sidebar ([#2339](https://github.com/netease-youdao/LobsterAI/pull/2339)) | ✅ Merged | #2339 |
| **Low** | “Delete” button shows English in Chinese UI ([#1361](https://github.com/netease-youdao/LobsterAI/issues/1361)) | ✅ Closed | Likely fixed in merged batch |

**No new critical bugs reported today.** The merged PRs resolve several stability risks in the cowork streaming/steer pipeline.

## 6. Feature Requests & Roadmap Signals
| Request | Source | Likelihood for Next Release |
|---------|--------|-----------------------------|
| Keyboard shortcut badges on sidebar buttons | [#1317](https://github.com/netease-youdao/LobsterAI/issues/1317) + [#1318](https://github.com/netease-youdao/LobsterAI/pull/1318) | **High** — PR ready, low risk, high UX value |
| Skeleton loading for session list | [#1319](https://github.com/netease-youdao/LobsterAI/issues/1319) + [#1320](https://github.com/netease-youdao/LobsterAI/pull/1320) | **High** — PR ready, eliminates confusing flash |
| Model selector in Home input toolbar | [#1364](https://github.com/netease-youdao/LobsterAI/pull/1364) | ✅ **Already merged** |
| Duplicate scheduled-task name validation | [#1367](https://github.com/netease-youdao/LobsterAI/pull/1367) | ✅ **Already merged** |
| Settings overlay dismissal on tab switch | [#1321](https://github.com/netease-youdao/LobsterAI/pull/1321) | **Medium** — PR open since April, fixes modal leak |

**Prediction:** Next release (v2026.7.16 or .17) will include the two UX polish PRs (#1318, #1320) and the settings overlay fix (#1321). The steer/attachment/completion pipeline is now well-tested.

## 7. User Feedback Summary
- **Pain points:**  
  - Hidden keyboard shortcuts (new users discover them only in Settings)  
  - Session list shows “empty” flash on startup, causing confusion/history-loss fear  
  - Non-localized “Delete” button in Chinese UI  
  - Permission modal trapped focus (no ESC dismiss)  
- **Positive signals:**  
  - Contributors submitting complete Issue+PR pairs for small UX wins  
  - Windows title-bar work shows desktop-native investment  
  - Folder attachment support enables new workflow (drag folder → context)  
- **Satisfaction:** No explicit praise/complaints in last 24h; activity is maintainer-driven stabilization.

## 8. Backlog Watch — Items Needing Maintainer Attention
| Item | Age | Why It Matters |
|------|-----|----------------|
| [#1318](https://github.com/netease-youdao/LobsterAI/pull/1318) Shortcut `<kbd>` badges | 106 days | Ready-to-merge UX polish; contributor (MaoQianTu) has 2 other PRs pending |
| [#1320](https://github.com/netease-youdao/LobsterAI/pull/1320) Session skeleton screen | 106 days | Same contributor; eliminates startup flash; low risk |
| [#1321](https://github.com/netease-youdao/LobsterAI/pull/1321) Settings overlay dismissal | 106 days | Fixes modal leak when switching tabs; affects Settings UX |
| [#1317](https://github.com/netease-youdao/LobsterAI/issues/1317) / [#1319](https://github.com/netease-youdao/LobsterAI/issues/1319) | 106 days | Stale issues with ready PRs — closing them cleans backlog |

**Recommendation:** Merge #1318, #1320, #1321 this week to reward contributor effort and ship visible UX improvements alongside the v2026.7.16 release.

---

*Data source: GitHub API (issues, PRs, releases) for netease-youdao/LobsterAI, 2026-07-16 00:00–23:59 UTC. Links point to live GitHub items.*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-07-17

---

## 1. Today's Overview
Moltis delivered a focused maintenance and capability-expansion cycle on 2026-07-16, merging three pull requests and cutting a single date-based release (`20260716.01`). All changes were authored by core maintainer `penso`, indicating a tightly coordinated internal push rather than community-driven activity. Zero issues were opened or updated in the last 24 hours, suggesting the project is currently in a stable, low-friction state with no visible user-reported regressions or feature demands surfacing through the issue tracker. The merged work spans provider expansion (Kimi K3/K2.7), sandbox/status UX hardening, and a defensive web UI fix for fallback execution paths — collectively improving both breadth of model support and reliability of agent/sandbox state signaling.

---

## 2. Releases
### `20260716.01` (2026-07-16)
**Changes included via merged PRs:**
- **Provider support:** Added Kimi K3 and Kimi K2.7 Code Highspeed to Moonshot/Kimi catalogs; updated model capabilities, reasoning-effort handling, provider defaults, config template, docs, and key-help link. Onboarding e2e test added for Moonshot setup verification. ([#1156](https://github.com/moltis-org/moltis/pull/1156))
- **Agent/sandbox feedback:** External-agent session metadata now broadcast after external session IDs are available; persisted external-agent history returned from full-context requests; web session store made merge-safe. Installed external agents treated as available chat backends; Apple Container status integrated. ([#1155](https://github.com/moltis-org/moltis/pull/1155))
- **Web UI sandbox fallback:** Chat header sandbox toggle now shows "direct" mode when no real sandbox backend is available; sandbox toggle and image selector disabled in fallback-only scenarios. E2E coverage added. ([#1154](https://github.com/moltis-org/moltis/pull/1154))

**Breaking changes / migration notes:** None explicitly documented in PR summaries. The release appears additive and backward-compatible. Users upgrading should verify Moonshot/Kimi provider config if previously customized, and confirm external-agent session persistence behavior aligns with expectations.

---

## 3. Project Progress
| PR | Status | Focus Area | Key Advancement |
|----|--------|------------|-----------------|
| [#1155](https://github.com/moltis-org/moltis/pull/1155) | Merged | Agent/Sandbox Observability | External-agent session metadata broadcast timing fixed; history persistence + merge-safe session store; external agents now first-class chat backends; Apple Container status surfaced |
| [#1156](https://github.com/moltis-org/moltis/pull/1156) | Merged | Provider Expansion | Kimi K3 / K2.7 Code Highspeed added to catalog; reasoning-effort, defaults, config, docs, onboarding e2e all updated in sync |
| [#1154](https://github.com/moltis-org/moltis/pull/1154) | Merged | Web UX / Fallback Handling | Sandbox toggle correctly reflects "direct" mode when isolated backend unavailable; toggle + image selector disabled appropriately; E2E guard added |

**Net progress:** Three orthogonal improvements landed atomically — provider breadth, backend observability, and defensive UI — with test coverage accompanying each. No open PRs remain from today’s batch.

---

## 4. Community Hot Topics
**No issues or PRs with comments/reactions in the last 24h.** All three merged PRs show `Comments: undefined` and `👍: 0`, indicating internal review without public discussion. The absence of community-threaded activity suggests either:
- High maintainer velocity on well-scoped, low-controversy changes, or
- Limited external contributor engagement at this time.

**Underlying need signal:** The changes reflect *proactive* hardening (fallback UI, session merge safety) and *strategic* provider expansion (Kimi) — not reactive bug fixes. This implies the project is investing in completeness and polish ahead of broader adoption.

---

## 5. Bugs & Stability
**No bugs, crashes, or regressions reported today via issues.**  
The merged PRs include defensive fixes that *prevent* potential UX bugs:
- [#1154](https://github.com/moltis-org/moltis/pull/1154) eliminates misleading "sandboxed" label when only direct execution is available — a correctness fix for fallback paths.
- [#1155](https://github.com/moltis-org/moltis/pull/1155) addresses session-store merge safety, which could have caused state corruption under concurrent external-agent usage.

**Severity:** None critical. All fixes are preventive or UX-corrective, merged with E2E coverage.

---

## 6. Feature Requests & Roadmap Signals
**No new feature requests filed today.**  
However, the merged work signals active roadmap execution:
- **Multi-provider parity:** Kimi addition follows pattern of rapid provider onboarding (Moonshot, Anthropic, OpenAI, etc.) — expect continued catalog expansion.
- **External-agent ecosystem:** Treating installed external agents as first-class chat backends + Apple Container integration suggests a push toward *agent marketplace / plugin* architecture.
- **Sandbox abstraction maturity:** The direct-mode fallback UI implies sandbox backends (Docker, Apple Container, etc.) are being normalized behind a stable interface — future work may include sandbox profiling, resource limits, or snapshot/restore.

**Predicted next version candidates:**
1. External-agent registry / discovery UI
2. Sandbox backend health/status API
3. Additional reasoning-model providers (e.g., DeepSeek-R1, Qwen3)

---

## 7. User Feedback Summary
**No direct user feedback (issues, discussions, reactions) captured in the last 24h.**  
Indirect signals from merged PRs:
- **Pain point addressed:** Users on systems without sandbox backends (e.g., no Docker/Apple Container) previously saw a misleading "sandboxed" toggle — now corrected. ([#1154](https://github.com/moltis-org/moltis/pull/1154))
- **Use case enabled:** Developers integrating external agents (custom tools, specialized models) now get reliable session persistence and status visibility. ([#1155](https://github.com/moltis-org/moltis/pull/1155))
- **Model access:** Kimi K3/K2.7 users gain native onboarding and config support. ([#1156](https://github.com/moltis-org/moltis/pull/1156))

**Satisfaction proxy:** High — changes are polished, tested, and solve concrete gaps without disruption.

---

## 8. Backlog Watch
**No long-unanswered issues or PRs identified in today’s data slice.**  
The project shows zero open issues updated recently and zero open PRs — all three PRs from 2026-07-16 were merged same-day. This suggests either:
- A very clean backlog, or
- Issues/PRs exist but were not updated in the last 24h (outside this digest’s window).

**Recommendation:** Scan the full issue/PR list for items with `updated_at < 2026-07-10` and `state: open` to surface stale work. Current velocity indicates maintainers can absorb review load quickly.

---

*Digest generated from GitHub data for `moltis-org/moltis` covering 2026-07-16 activity. All links point to GitHub.*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (QwenPaw) Project Digest — 2026-07-17

---

## 1. Today's Overview

CoPaw is in a **high-velocity stabilization phase** following the v2.0.0.post2 release. In the last 24 hours, 43 issues and 46 PRs were updated — a 1:1 ratio of issue triage to code changes — with 25 PRs merged/closed. The dominant theme is **regression remediation**: Windows admin-privilege regressions, session/message loss, token accounting anomalies, and timezone/logging inconsistencies. No new release was cut today, but the merge cadence suggests a **v2.0.0.post3** is imminent.

---

## 2. Releases

**No new releases published today.**  
Current latest: `v2.0.0.post2` (desktop) / `v2.0.0` (pip).  
Maintainers are batching fixes; expect a patch release once the Windows UAC, session-index, and memory-corruption fixes land.

---

## 3. Project Progress — Merged/Closed PRs (Last 24h)

| PR | Type | Summary | Linked Issue |
|----|------|---------|--------------|
| [#6142](https://github.com/agentscope-ai/QwenPaw/pull/6142) | fix(console) | `auto_memory_interval` validation: required, `min:0`, i18n across 7 locales | — |
| [#6166](https://github.com/agentscope-ai/QwenPaw/pull/6166) | fix(chat) | Preserve whitespace/line-feeds in streaming thinking deltas (delta chunks no longer trimmed) | [#6129](https://github.com/agentscope-ai/QwenPaw/issues/6129) |
| [#6180](https://github.com/agentscope-ai/QwenPaw/pull/6180) | fix(chat) | Refresh `updated_at` on user messages; invalidate stale message cache | [#6131](https://github.com/agentscope-ai/QwenPaw/issues/6131) |
| [#6200](https://github.com/agentscope-ai/QwenPaw/pull/6200) | fix(cli) | `cron update` preserves untouched `runtime`/`request` fields (no longer resets to create defaults) | — |
| [#6171](https://github.com/agentscope-ai/QwenPaw/pull/6171) | fix(memory) | Add `dream_cron_enabled` toggle to prevent default cron from running when cleared | — |
| [#6168](https://github.com/agentscope-ai/QwenPaw/pull/6168) | fix(channels) | Bound unbounded state sets (`_seen_sessions`, `_participated_threads`) + track fire-and-forget tasks in Mattermost/OneBot/XiaoYi | — |
| [#6192](https://github.com/agentscope-ai/QwenPaw/pull/6192) | fix(deploy) | Mount host `/etc/localtime` & `/usr/share/zoneinfo` into Docker container for timezone sync | [#6188](https://github.com/agentscope-ai/QwenPaw/issues/6188), [#6196](https://github.com/agentscope-ai/QwenPaw/issues/6196) |
| [#6185](https://github.com/agentscope-ai/QwenPaw/pull/6185) | test(e2e) | Adapt selectors for v2.0.0 UI redesigns (test-only) | — |
| [#6194](https://github.com/agentscope-ai/QwenPaw/pull/6194) | test(ci) | Run console `vitest` with coverage in nightly full sweep | — |

**Net signal:** 9 merged PRs directly address user-reported regressions from v2.0. Remaining open PRs (e.g., [#6127](https://github.com/agentscope-ai/QwenPaw/pull/6127) UAC conditional elevation, [#6198](https://github.com/agentscope-ai/QwenPaw/pull/6198) bounded multi-agent startup) target the highest-comment issues.

---

## 4. Community Hot Topics (Most Comments/Engagement)

| Issue | Comments | Core Pain Point | Status |
|-------|----------|-----------------|--------|
| [#6116](https://github.com/agentscope-ai/QwenPaw/issues/6116) | 6 | **Doom loop**: agent repeats same tool call ~6×/turn before detection; wastes API/tokens | Closed (wontfix — detection logic exists but late) |
| [#6161](https://github.com/agentscope-ai/QwenPaw/issues/6161) | 5 | **Windows post-update**: desktop app hangs at `Waiting for HTTP ready...` unless **Run as Administrator** | Open — blocker for non-admin users |
| [#6158](https://github.com/agentscope-ai/QwenPaw/issues/6158) | 5 | **Token anomaly**: 28M DeepSeek tokens billed in a week with near-zero usage; demands backend call logs | Open — possible background cron/agent leak |
| [#5995](https://github.com/agentscope-ai/QwenPaw/issues/5995) | 5 | **Silent message drop** when session busy (Feishu webhook receives but never enqueues) | Open — data-loss risk |
| [#6196](https://github.com/agentscope-ai/QwenPaw/issues/6196) | 5 | **Container logs stuck in UTC** despite `user_timezone` config | Closed — fixed by [#6192](https://github.com/agentscope-ai/QwenPaw/pull/6192) |
| [#6048](https://github.com/agentscope-ai/QwenPaw/issues/6048) | 5 | **Feature**: CIDR support for unauthenticated host whitelist | Open — security/infra need |
| [#6155](https://github.com/agentscope-ai/QwenPaw/issues/6155) | 4 | **1.x→2.0 upgrade**: embedding config bug (`use_dimensions`/`pass_dimensions` mapping) + Auto-Memo issues | Open — migration friction |
| [#5998](https://github.com/agentscope-ai/QwenPaw/issues/5998) | 4 | **Memory inconsistency**: agent uses stale plan after user confirms new one | Closed (invalid — likely session isolation bug) |
| [#6169](https://github.com/agentscope-ai/QwenPaw/issues/6169) | 3 | **pip install forces UAC** on `qwenpaw app` startup; exit on refusal | Open — same root as #6161 |

**Underlying needs:**  
- **Trust & predictability**: users expect v2.0 to *not* regress v1.x behaviors (admin, memory, tokens).  
- **Observability**: token billing anomalies demand audit logs.  
- **Non-admin Windows**: a hard blocker for enterprise/locked-down environments.

---

## 5. Bugs & Stability — Ranked by Severity

| Severity | Issue | Symptoms | Fix PR? |
|----------|-------|----------|---------|
| **Critical** | [#6161](https://github.com/agentscope-ai/QwenPaw/issues/6161) / [#6169](https://github.com/agentscope-ai/QwenPaw/issues/6169) | Windows desktop & CLI **require Admin** post v2.0; UAC prompt blocks non-admin users entirely | [#6127](https://github.com/agentscope-ai/QwenPaw/pull/6127) (open, conditional elevation) |
| **Critical** | [#5995](https://github.com/agentscope-ai/QwenPaw/issues/5995) | Messages **silently dropped** under load (Feishu, likely others) — no queue, no error | None yet |
| **High** | [#6158](https://github.com/agentscope-ai/QwenPaw/issues/6158) | **Unexplained token burn** (28M tokens/week idle) — possible runaway cron/agent | None yet |
| **High** | [#6116](https://github.com/agentscope-ai/QwenPaw/issues/6116) | **Doom loop** repeats tool calls 6× before circuit-breaker; costly | Closed wontfix — but detection delay is the bug |
| **High** | [#6155](https://github.com/agentscope-ai/QwenPaw/issues/6155) | **Embedding config regression** (`pass_dimensions` missing, 400 on unsupported models) | None yet |
| **Medium** | [#6131](https://github.com/agentscope-ai/QwenPaw/issues/6131) | Session list `updatedAt` stale after upgrade | Fixed in [#6180](https://github.com/agentscope-ai/QwenPaw/pull/6180) (merged) |
| **Medium** | [#6129](https://github.com/agentscope-ai/QwenPaw/issues/6129) | Streaming thinking blocks lose spaces/newlines | Fixed in [#6166](https://github.com/agentscope-ai/QwenPaw/pull/6166) (merged) |
| **Medium** | [#6196](https://github.com/agentscope-ai/QwenPaw/issues/6196) / [#6188](https://github.com/agentscope-ai/QwenPaw/issues/6188) | Container logs/cron in UTC despite `user_timezone` | Fixed in [#6192](https://github.com/agentscope-ai/QwenPaw/pull/6192) (merged) |
| **Medium** | [#6152](https://github.com/agentscope-ai/QwenPaw/issues/6152) | QQ channel crashes on send when reply references local image path (Pydantic `AnyUrl`) | Closed — fix likely in [#6191](https://github.com/agentscope-ai/QwenPaw/pull/6191) (open) |
| **Low** | [#6202](https://github.com/agentscope-ai/QwenPaw/issues/6202) | Desktop skill nav progressive render stops at 20 (IntersectionObserver root mismatch) | None yet |

---

## 6. Feature Requests & Roadmap Signals

| Issue | Request | Likelihood for Next Patch/Minor |
|-------|---------|--------------------------------|
| [#6048](https://github.com/agentscope-ai/QwenPaw/issues/6048) | CIDR notation for unauthenticated host whitelist | **High** — backend-only, security-relevant, 5 comments |
| [#6163](https://github.com/agentscope-ai/QwenPaw/issues/6163) | Reusable workflow orchestration with audit trail (multi-step, multi-agent) | **Medium** — architectural, aligns with `chat_with_agent`/`spawn_subagent`/`cron` |
| [#6165](https://github.com/agentscope-ai/QwenPaw/issues/6165) | Disable input-suggestion popup in chat (macOS M1) | **High** — trivial UI toggle, 4 comments |
| [#5880](https://github.com/agentscope-ai/QwenPaw/issues/5880) | Policy UI: revoke/delete "always allow" rules (stored in `policy.yaml`) | **Medium** — console-only, security hygiene |
| [#6159](https://github.com/agentscope-ai/QwenPaw/pull/6159) (PR) | Refactor channel base: move token/context settlement to `BaseChannel` | **High** — already in review, enables per-turn usage for all channels |
| [#6195](https://github.com/agentscope-ai/QwenPaw/pull/6195) (PR) | Console: session-level context/token indicator (Zustand store) | **High** — UX polish, in review |

**Prediction:** v2.0.1 will ship CIDR whitelist, input-suggestion toggle, and channel-base refactor. Workflow orchestration is a v2.1+ epic.

---

## 7. User Feedback Summary

| Theme | Representative Voices | Sentiment |
|-------|----------------------|-----------|
| **v2.0 regression fatigue** | "Upgrade to 2.0 — severe amnesia: forgets context, shows 'truncated', `/compact` does nothing" ([#6148](https://github.com/agentscope-ai/QwenPaw/issues/6148)) | 😡 Frustrated |
| **Windows admin wall** | "Post Windows update, *only* Run as Administrator works; .bat hangs, .vbs silent, autostart broken" ([#6161](https://github.com/agentscope-ai/QwenPaw/issues/6161)) | 🚨 Blocked |
| **Token billing panic** | "28M tokens in a week with *zero* chats — where are the backend call logs?" ([#6158](https://github.com/agentscope-ai/QwenPaw/issues/6158)) | 😰 Anxious |
| **Message reliability** | "Feishu messages silently dropped when session busy — no queue, no error" ([#5995](https://github.com/agentscope-ai/QwenPaw/issues/5995)) | 😤 Angry |
| **Migration friction** | "1.x→2.0: embedding config bug, Auto-Memo broken, memory loss" ([#6155](https://github.com/agentscope-ai/QwenPaw/issues/6155)) | 😞 Disappointed |
| **Positive** | "Great project — need Win7 support (Tauri blocks it)" ([#6076](https://github.com/agentscope-ai/QwenPaw/issues/6076)) | 🙏 Hopeful |

**Net:** Users *want* to love v2.0 but feel **betrayed by regressions** in areas that worked in v1.x (Windows, memory, tokens, message delivery). Trust recovery depends on v2.0.1 quality.

---

## 8. Backlog Watch — Stale but Important

| Issue/PR | Age | Why It Matters | Current State |
|----------|-----|----------------|---------------|
| [#4818](https://github.com/agentscope-ai/QwenPaw/issues/4818) | 50 days | Cron `share_session=true` → empty traces, 0.1s exec, `success` status but **agent never runs** | Open, 4 comments, no PR |
| [#6047](https://github.com/agentscope-ai/QwenPaw/issues/6047) | 4 days | New chat reopens **stale session** after upgrade (`chats.json` ordering + missing index sync) | Open, 3 comments, no PR |
| [#6074](https://github.com/agentscope-ai/QwenPaw/issues/6074) | 3 days | Switching agents in Console **drops entire session context** (multi-agent mode) | Open, 3 comments, no PR |
| [#6160](https://github.com/agentscope-ai/QwenPaw/issues/6160) | 1 day | Request: **bundled Python** for script execution (Conda/venv users lack system Python) | Open, 3 comments, no PR |
| [#6027](https://github.com/agentscope-ai/QwenPaw/pull/6027) | 4 days | **CodeQL + Dependabot**

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw Project Digest — 2026-07-17

## 1. Today's Overview
ZeptoClaw showed focused documentation activity on 2026-07-16 with **5 security-classification issues closed** by contributor YLChen-007. All work centered on classifying "D2 trigger ways" for specific historical issues (264, 268, 271, 329, 466) — analyzing CSV-sourced prompt-to-tool execution paths and updating corresponding JSON security records. No pull requests, releases, or new feature work occurred. The project appears to be in a **maintenance/documentation phase** with systematic security metadata enrichment.

## 2. Releases
**No new releases** published today.

## 3. Project Progress
All closed items are documentation/security-classification tasks (no code PRs merged):

| Issue | Scope | Status | Link |
|-------|-------|--------|------|
| #631 | Classify D2 trigger for Issue 264 (CSV row 121) | ✅ Closed | [#631](https://github.com/qhkm/zeptoclaw/issues/631) |
| #632 | Classify D2 trigger for Issue 268 (`Issue-zeptoclaw-268.json`) | ✅ Closed | [#632](https://github.com/qhkm/zeptoclaw/issues/632) |
| #633 | Classify D2 trigger for Issue 271 (CSV row 123) | ✅ Closed | [#633](https://github.com/qhkm/zeptoclaw/issues/633) |
| #634 | Classify D2 trigger for Issue 329 (CSV row 124) | ✅ Closed | [#634](https://github.com/qhkm/zeptoclaw/issues/634) |
| #635 | Classify D2 trigger for Issue 466 (CSV row 125) | ✅ Closed | [#635](https://github.com/qhkm/zeptoclaw/issues/635) |

**Pattern**: Each issue follows a repeatable workflow — source verification → JSON update → validation → receipt recording — suggesting an automated or semi-automated classification pipeline.

## 4. Community Hot Topics
**No high-engagement discussions** today. All 5 issues have exactly **1 comment** (likely automated workflow logs) and **0 reactions**. The sole active contributor is YLChen-007. This indicates **internal maintenance work** rather than community-driven debate.

## 5. Bugs & Stability
**No bugs, crashes, or regressions reported** in the last 24h. All closed items are documentation/classification tasks, not defect fixes.

## 6. Feature Requests & Roadmap Signals
**No new feature requests** surfaced. The current workstream — systematic `d2_xclaw_trigger_way` classification across historical issues — signals a **roadmap priority on security metadata completeness**, likely for:
- Audit/compliance reporting
- Automated risk scoring
- LLM-agent trigger taxonomy standardization

Expect continuation until backlog of unclassified issues is cleared.

## 7. User Feedback Summary
**No end-user feedback** visible. Activity is entirely maintainer-driven (single contributor). Pain points/use cases from external users are absent from today’s data.

## 8. Backlog Watch
**No stale/long-unanswered issues or PRs** highlighted in today’s dataset. However, the existence of 5 sequentially numbered classification issues (#631–#635) for older CVEs (264–466) implies a **larger backlog of unclassified security issues** awaiting similar treatment. Maintainers should monitor:
- Classification completion rate vs. total historical issue count
- Whether automation can accelerate the per-issue workflow
- Downstream consumers of `issue-security/*.json` (if any) needing updated schemas

---

**Project Health Indicator**: 🟢 **Stable, maintenance-focused** — structured, reproducible documentation work with zero open defects or community friction. Velocity is low (5 issues/day by 1 contributor) but consistent.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-07-17

---

## 1. Today's Overview

ZeroClaw shows **high development velocity** with 50 PRs and 24 issues updated in the last 24 hours. The project is in a **feature-heavy phase** with multiple large RFCs and stacked PRs underway—particularly around the **channel-plugin runtime**, **gateway webhook ingress**, **provider architecture unification**, and **persistent memory parity**. No new release shipped today; v0.8.3 close-out (#7320) and v0.8.4 maintenance train (#8357) trackers remain open. Several **S1/P1 bugs** (pgvector startup panic, browser_open hang, model cache never written) are actively being fixed. The community is actively debating **A2A outbound support**, **memory backend separation**, and **realtime speech-to-speech** via Gemini Live.

---

## 2. Releases

**No new releases today.**  
- Latest milestone: **v0.8.3** (feature-frozen, close-out tracker #7320)  
- Next target: **v0.8.4 maintenance train** by **2026-07-31** (#8357)

---

## 3. Project Progress (Merged/Closed in Last 24h)

| PR / Issue | Type | Summary |
|------------|------|---------|
| **#7320** | Tracker (CLOSED) | v0.8.3 milestone index closed; all child trackers done, final validation pending |
| **#8798** | RFC (CLOSED, wontfix) | Consolidate `/ws/chat` and `/acp` onto single wire protocol — rejected |
| *4 other PRs merged/closed* | — | Details not enumerated in feed; likely small fixes/docs |

**Key advances in open PRs (high comment/activity):**
- **#8949, #8863, #8862, #8855, #8852, #8923** — Stacked **channel-plugin runtime** (webhook ingress, WASM plugins, WebSocket/TCP egress, mirror channels)
- **#8486** — **OpenAI Chat Completions endpoint** for gateway (enables LangChain, Continue.dev, Aider)
- **#8966** — Fix `max_context_tokens` fallback to provider `context_window`
- **#8902** — Bidirectional RPC for `ask_user` / `poll` in zerocode runtime
- **#9104** — New `grok_cli` subprocess model provider
- **#9105** — Lucid ARM cold-start timeout fixes (500 ms → 3 s)

---

## 4. Community Hot Topics (Most Active Issues/PRs)

| Item | Comments | Core Need |
|------|----------|-----------|
| **#5937** Provider architecture unification & reqwest client management | 11 | Reduce code duplication, unify model construction, fix fragmented config across providers |
| **#7952** Optional `channels-full` prebuilt bundle | 7 | Ship all channel binaries in one optional artifact; avoid confusion when users enable non-default channels |
| **#9101** Consolidate 3× release attestation mechanisms (cosign, GH attestations, SLSA) | 5 | Cut CI time & asset count (53 → ~20); single signing story |
| **#8832** Gateway-local Kanban board for agent work | 5 | Visualize/coordinate agent tasks in web dashboard (opt-in) |
| **#9048** Separate conversation history from long-term memory | 5 | Clean lifecycle split; stop mixing `MemoryCategory::Conversation` into general memory backend |
| **#8170** In-app upgrade with env-aware restart from web dashboard | 4 | One-click update without leaving UI |
| **#8134** Reset stale channel sessions per `session_ttl_hours` | 4 | Auto-truncate history to cut token use & latency |
| **#8560** `browser_open` hang on headless/no-display hosts (S1) | 3 | Unbounded subprocess wait blocks agent turn |
| **#9085** Nested runtime panic in `try_enable_pgvector` (S1) | 2 | Postgres + pgvector startup panic in Tokio context |
| **#9106** RFC: A2A outbound client (`A2ATool`) | 0 (new) | Enable proactive calls to external A2A agents (today only inbound server exists) |
| **#9103** RFC: Separate authoritative memory storage from enrichment connectors | 0 (new) | Lucid modeled as full backend but isn’t authoritative; conflation blocks clean architecture |

**Underlying themes:**  
- **Operational maturity** (release signing, prebuilt bundles, in-app upgrade)  
- **Architectural cleanup** (provider unification, memory separation, plugin/runtime boundaries)  
- **Multi-modal & inter-agent** (Gemini Live realtime, A2A outbound, Kanban coordination)

---

## 5. Bugs & Stability (Ranked by Severity)

| Severity | Issue | Status | Fix PR |
|----------|-------|--------|--------|
| **S1** | **#8560** `browser_open` hangs agent turn on headless/no-display (unbounded wait) | `in-progress`, `accepted` | — |
| **S1** | **#9085** Nested runtime panic in `try_enable_pgvector` with Postgres + pgvector | `accepted` | — |
| **S2** | **#9046** `models_cache.json` read but never written; `zeroclaw models refresh` hint useless | `in-progress`, `accepted` | — |
| **S2** | **#9089** Tool output `[AUDIO:]` markers not parsed (only `[IMAGE:]` supported) | `accepted` | — |
| **S2** | **#7960** `execute_pipeline` bypasses per-agent `ToolAccessPolicy` | `needs-author-action` | **#7960** (open) |
| **Low** | **#8536** Hardware timeout handlers drop inner `Elapsed` error | Open | **#8536** (open) |
| **Low** | **#8851** Native tools shadow same-named plugin tools in registry | Open | **#8851** (open) |
| **High** | **#8966** `max_context_tokens` fallback regression (fixed in PR) | `needs-author-action` | **#8966** (open) |
| **High** | **#8902** Bidirectional RPC missing for `ask_user`/`poll` (fixed in PR) | Open | **#8902** (open) |

---

## 6. Feature Requests & Roadmap Signals

| Feature | Source | Likelihood for v0.8.4 / Next |
|---------|--------|------------------------------|
| **Channel-plugin runtime (WASM, webhook, WebSocket, TCP)** | #8862, #8863, #8855, #8852, #8923 | **Very High** — stacked PRs, large scope, active review |
| **OpenAI Chat Completions endpoint on gateway** | #8486 | **High** — closes #8550, enables ecosystem tools |
| **In-app upgrade with restart from dashboard** | #8170 | **High** — `in-progress`, `accepted`, web + security labels |
| **Session TTL enforcement (`session_ttl_hours`)** | #8134 | **High** — `in-progress`, `accepted` |
| **Persistent memory parity (curation, relevance, operability)** | #8891 (tracker) | **Medium** — multi-PR rollout, needs maintainer review |
| **zerorelay standalone nominated relay** | #8358 (tracker) | **Medium** — milestone tracker, blind forwarder design |
| **Realtime speech-to-speech channel (Gemini Live)** | #8780 | **Medium** — RFC accepted, backend-agnostic design |
| **A2A outbound client (`A2ATool`)** | #9106 | **Medium** — new RFC, splits from #3566 |
| **Separate authoritative memory from enrichment connectors** | #9103 | **Medium** — new RFC, architectural cleanup |
| **Grok CLI subprocess provider** | #9104 | **Low/Medium** — PR open, niche provider |
| **Kanban board in gateway dashboard** | #8832 | **Low** — RFC, opt-in, UI work |
| **Capability-aware documentation** | #8367 | **Low** — blocked, needs maintainer review |

---

## 7. User Feedback Summary (Pain Points & Use Cases)

| Pain Point | Evidence |
|------------|----------|
| **Headless/server deployments broken** — `browser_open` hangs indefinitely, also affects `robot-kit` TTS & `ffmpeg` in channels | #8560 (S1, 3 comments) |
| **Model discovery broken** — `models_cache.json` never written; users told to run `zeroclaw models refresh` which does nothing | #9046 (S2, 2 comments) |
| **Memory backend startup crashes** — pgvector + Postgres panics in Tokio context on gateway/agent start | #9085 (S1, 2 comments) |
| **Audio tool results not rendered** — `[AUDIO:]` markers pass through as literal text | #9089 (S2, 1 comment) |
| **Pipeline tool bypasses permissions** — sub-tools ignore `allowed_tools`/`excluded_tools` | #7960 (S1, needs author) |
| **Release artifacts bloated/confusing** — 53 assets, 3 signing mechanisms, no `channels-full` bundle | #9101, #7952 |
| **No in-app upgrade path** — must leave dashboard to update | #8170 |
| **Conversation history pollutes long-term memory** — no clean lifecycle separation | #9048 |
| **A2A only inbound** — cannot call external agents proactively | #9106 |

**Positive signals:**  
- Active RFC process with maintainer sponsorship (multiple `status:accepted`)  
- Stacked PRs show coordinated engineering (channel-plugin stack)  
- Quick fixes for regressions (#8966, #8902)  
- New provider integrations (Grok CLI, Gemini Live) expanding ecosystem

---

## 8. Backlog Watch (Stale / Needs Maintainer Attention)

| Item | Age | Why It Matters |
|------|-----|----------------|
| **#8367** RFC: Capability-aware documentation | 21 days | Blocked, `needs-maintainer-review`; docs can’t reflect actual enabled features |
| **#8398** RFC: Plugin permission/config/secrets model | 20 days | `needs-author-action`; two failed permission models, coarse-grained enum remains |
| **#8541** Matrix thread-scoped history | 17 days | `blocked`, `needs-maintainer-review`; Matrix channel treats threads as delivery anchor only |
| **#7960** `execute_pipeline` bypasses `ToolAccessPolicy` | 28 days | `needs-author-action`; security hole in tool gating |
| **#8486** OpenAI Chat Completions endpoint | 18 days | `needs-author-action`; large PR (XL), enables major ecosystem integrations |
| **#8571** Delegate: skip global credential fallback for OAuth providers | 16 days | `needs-author-action`; auth bug in sub-agent delegation |
| **#8384** Inkbox native channel (email/SMS/voice/iMessage) | 20 days | `needs-author-action`, `quickstart`; large PR (XL), new channel family |
| **#8337** Herdr agent reporting integration | 21 days | Observability for CLI interactive mode; no recent movement |
| **#8692** Tracker: Active RFC review queue | 13 days | Meta-tracker; 0 comments — RFC backlog visibility may be low |
| **#9107** Remove departed maintainer `@singlerider` from CODEOWNERS | 1 day | Cleanup; 44 entries, some sole-owner paths now unowned |

---

## Links Index

- Issues: https://github.com/zeroclaw-labs/zeroclaw/issues
- Pull Requests: https://github.com/zeroclaw-labs/zeroclaw/pulls
- Milestone v0.8.3: #7320
- Milestone v0.8.4: #8357
- RFC Process: `docs/book/src/contributing/rfcs.md`

---

*Digest generated 2026-07-17 from GitHub API data (issues/PRs updated in last 24h). All links point to zeroclaw-labs/zeroclaw.*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/DenisZheng/agents-radar).*