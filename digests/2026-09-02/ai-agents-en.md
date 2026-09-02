# OpenClaw Ecosystem Digest 2026-09-02

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-09-02 02:22 UTC

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

# OpenClaw Project Digest — 2026-09-02

## 1. Today's Overview
OpenClaw shows **very high velocity** with 500 issues and 500 PRs updated in the last 24 hours (331 open issues, 325 open PRs). The project just released **v2026.8.2**, but the issue tracker reveals significant post-release instability: multiple P1 crash-loop regressions, upgrade migration failures, and resource leaks. The community is actively triaging — 169 issues and 175 PRs closed/merged today — yet critical bugs around session state, gateway startup, and SQLite contention dominate discussion. Project health is **mixed**: strong contributor engagement but a concerning cluster of stability regressions in the latest stable line.

---

## 2. Releases

### v2026.8.2 — *openclaw 2026.8.2* ([Release Notes](https://github.com/openclaw/openclaw/releases/tag/v2026.8.2))
**Highlights:**
- **Dockable Home agent** — Open Home in a right/bottom dock via `Cmd/Ctrl+Shift+H`, keeping the current page in view; preview/remove work-context snapshots or attach selected text to messages. ([#133676](https://github.com/openclaw/openclaw/pull/133676), related [#133632](https://github.com/openclaw/openclaw/issues/133632))
- **Desktop companion improvements** (details truncated in feed)

**Migration Notes:**  
The v2026.8.1 → v2026.8.2 upgrade path has generated **multiple P0/P1 regression reports** (see Bugs & Stability). Users on 2026.7.x should expect manual repair steps; `openclaw doctor --fix` currently **does not perform config-key migrations non-interactively** ([#133984](https://github.com/openclaw/openclaw/issues/133984)).

---

## 3. Project Progress (Merged/Closed PRs Today — 175)
Key merged work (from top-comment PRs):

| PR | Area | Summary |
|----|------|---------|
| [#116489](https://github.com/openclaw/openclaw/pull/116489) | Security/CLI | **Install policy warnings now require operator acknowledgement** — external `security.installPolicy` can return `warn` with interactive CLI confirmation. |
| [#123535](https://github.com/openclaw/openclaw/pull/123535) | Web UI | **Session catalog refresh storms fixed** — redundant full refreshes on focus/presence changes eliminated. |
| [#123975](https://github.com/openclaw/openclaw/pull/123975) | Scripts | **`tsgo` process trees cleaned on timeout/signal** — managed-process owner + optional `OPENCLAW_TSGO_TIMEOUT_MS` watchdog. |
| [#134431](https://github.com/openclaw/openclaw/pull/134431) | Auth/Providers | **Unified provider login flow** across chat, Telegram, Control UI, setup wizard; `/login <provider>` resolves all eligible methods. |
| [#135137](https://github.com/openclaw/openclaw/pull/135137) | Active Memory | **Portuguese (PT-BR) recall intent detection** added for escalation gate. |
| [#135318](https://github.com/openclaw/openclaw/pull/135318) | Agents | **`sessions_yield` rejected in isolated automation turns** before recording yield intent — prevents silent child completion loss. |
| [#135417](https://github.com/openclaw/openclaw/pull/135417) | Channels | **Manifest-only channel inventory now respects `enabled: false`** on named accounts. |
| [#135582](https://github.com/openclaw/openclaw/pull/135582) | CUA/Desktop | **Computer control fixes**: desktop frames, text input line breaks, Settings sizing on compact displays. |
| [#135738](https://github.com/openclaw/openclaw/pull/135738) | Web UI | **Transcript composition refactor** — simplifies stable rows, canvas lifting, live queued prompts (follow-up to queued-prompt ordering fix). |
| [#135791](https://github.com/openclaw/openclaw/pull/135791) | Plugins/Doctor | **Preserve external plugin payloads during doctor repair** — fixes bundled-to-external relocation leaving empty npm projects ([#134353](https://github.com/openclaw/openclaw/issues/134353)). |

---

## 4. Community Hot Topics (Most Active Issues/PRs)

| Issue/PR | Comments | Reactions | Core Need |
|----------|----------|-----------|-----------|
| [#116201](https://github.com/openclaw/openclaw/issues/116201) | 59 | 0 | **Realtime voice resource bounds** — unbounded provider/consult state retention under slow/bursty conditions; needs hard ownership limits. |
| [#112423](https://github.com/openclaw/openclaw/issues/112423) | 16 | 0 | **SQLite transcript cleanup blocks gateway event loop** — full materialization/compression/I/O on gateway thread during session cleanup. |
| [#96834](https://github.com/openclaw/openclaw/issues/96834) | 14 | 1 | **WhatsApp image inbound wedges main lane ~3 min** — multimodal run strands stuck in `active_reply_work`/`queued_work_without_active_run`. |
| [#69208](https://github.com/openclaw/openclaw/issues/69208) | 14 | 0 | **Umbrella: duplicate transcript/replay/context assembly** across MSTeams, webchat, Telegram, followup queue, delivery-mirror paths. |
| [#53763](https://github.com/openclaw/openclaw/issues/53763) | 12 | 0 | **Built-in headless browser** — bundle Chromium for reliable JS/login page access without user Chrome or third-party APIs. |
| [#133984](https://github.com/openclaw/openclaw/issues/133984) | 11 | 0 | **2026.7.1-2 → 2026.8.1 leaves Gateway unstartable** — `doctor --fix` skips config-key migrations; ~dozen manual repair steps. |
| [#97616](https://github.com/openclaw/openclaw/issues/97616) | 10 | 1 | **Unreaped hook/tool child processes → zombie accumulation** — `openclaw-hooks`, `bash`, `codex` zombies degrade runtime. |
| [#127229](https://github.com/openclaw/openclaw/issues/127229) | 10 | 0 | **Telegram watchdog-released durable update falsely tombstoned** before transport tracker settles (context-overflow compaction). |

**Pattern:** Top issues cluster around **session-state integrity**, **upgrade/migrations**, **resource leaks**, and **gateway event-loop stalls** — all P1/diamond-lobster severity.

---

## 5. Bugs & Stability (Ranked by Severity)

| Severity | Issue | Status | Fix PR? |
|----------|-------|--------|---------|
| **P0 / Crash-loop** | [#135171](https://github.com/openclaw/openclaw/issues/135171) — 2026.8.1/8.2 gateway crash-loop: bundled Perplexity requires capability consent but cannot be inspected/enabled/disabled | OPEN | No |
| **P0 / Crash-loop** | [#134331](https://github.com/openclaw/openclaw/issues/134331) — `doctor --fix` reports legacy workspace conflict every run, silently dead-letters Discord messages | CLOSED | No (workaround only) |
| **P1 / Crash-loop** | [#135347](https://github.com/openclaw/openclaw/issues/135347) — Forced memory reindex inflates shared agent DB to 35 GB; deleting it destroys sessions | OPEN | No |
| **P1 / Crash-loop** | [#115424](https://github.com/openclaw/openclaw/issues/115424) — Gateway V8 heap OOM during main-session turn; restart-recovery converts 1 crash into 7-core-dump loop | OPEN | No |
| **P1 / Startup** | [#133984](https://github.com/openclaw/openclaw/issues/133984) — 2026.7.1-2 → 2026.8.1 Gateway unstartable; `doctor --fix` skips config migrations | OPEN | No |
| **P1 / Startup** | [#134353](https://github.com/openclaw/openclaw/issues/134353) — Xiaomi provider left with empty install payload after upgrade; Gateway refuses to start | CLOSED | [#135791](https://github.com/openclaw/openclaw/pull/135791) |
| **P1 / Data-loss** | [#124343](https://github.com/openclaw/openclaw/issues/124343) — `yield-owned settle-wake` parks completed subagent forever — no delivery, retry, or reason | CLOSED | Implied in [#135318](https://github.com/openclaw/openclaw/pull/135318) |
| **P1 / Perf** | [#117262](https://github.com/openclaw/openclaw/issues/117262) — SQLite contention: 3 concurrent write handles cause ~33s event-loop stalls | OPEN | No |
| **P1 / Perf** | [#134925](https://github.com/openclaw/openclaw/issues/134925) — Gateway main thread ~100% CPU on every agent turn on ARM64/Pi | OPEN | No |
| **P1 / Resource Leak** | [#97616](https://github.com/openclaw/openclaw/issues/97616) — Unreaped hook/tool child processes → zombie accumulation | OPEN | No |
| **P1 / Message-loss** | [#125764](https://github.com/openclaw/openclaw/issues/125764) — Telegram network-failed sends dead-lettered after single attempt (no retry/reconcile) | OPEN | No |
| **P1 / Message-loss** | [#116512](https://github.com/openclaw/openclaw/issues/116512) — Telegram progress duplicates first commentary when snapshot IDs change | OPEN | No |

---

## 6. Feature Requests & Roadmap Signals

| Issue | Votes/Comments | Signal |
|-------|----------------|--------|
| [#53763](https://github.com/openclaw/openclaw/issues/53763) — **Built-in headless browser** (Chromium bundle) | 12 comments | High demand; would eliminate fragile 3-layer web access (user Chrome → CDP → agent). Likely candidate for 2026.9.x. |
| [#13219](https://github.com/openclaw/openclaw/issues/13219) — **Per-model usage logging** for cost tracking | 8 comments, 1 👍 | Native aggregated usage logs requested; session JSONL has data but no dedicated view. |
| [#44309](https://github.com/openclaw/openclaw/issues/44309) — **One-way A2A dispatch mode** (no reply-back ping-pong) | 9 comments, 1 👍 | Architectural need for fire-and-forget agent handoffs. |
| [#66252](https://github.com/openclaw/openclaw/issues/66252) — **Per-agent TTS/STT overrides** (multi-language) | 8 comments, 1 👍 | Global-only TTS/STT config blocks multi-agent voice deployments. |
| [#45508](https://github.com/openclaw/openclaw/issues/45508) — **Self-hosted STT/TTS in webchat** (route via gateway) | 7 comments, 2 👍 | Webchat ignores `openclaw.json` voice config; blocks self-hosted voice. |
| [#49259](https://github.com/openclaw/openclaw/issues/49259) — **Prune stale orphaned sessions** from Dashboard | 7 comments | Dashboard hygiene for deleted Telegram/Discord channels. |
| [#39406](https://github.com/openclaw/openclaw/issues/39406) — **Suppress transient tool error warnings** | 7 comments, 1 👍 | Retried tool errors still surface as visible warnings → confusing UX. |
| [#46058](https://github.com/openclaw/openclaw/issues/46058) — **Chat-first Android surface** (discussion) | 6 comments, 1 👍 | Independent fork validation; maintainers evaluating upstreaming path. |

**Prediction:** Headless browser (#53763) and per-model usage logging (#13219) have strongest maintainer engagement signals (labels: `clawsweeper:needs-maintainer-review`, `clawsweeper:needs-product-decision`). A2A dispatch (#44309) and per-agent TTS (#66252) are architectural but lack recent movement.

---

## 7. User Feedback Summary

**Pain Points (from issue descriptions):**
- **Upgrade trauma**: Multiple users report 2026.7.x → 2026.8.x upgrades leaving Gateway unstartable, requiring manual SQLite/config surgery ([#133984](https://github.com/openclaw/openclaw/issues/133984), [#134570](https://github.com/openclaw/openclaw/issues/134570), [#134353](https://github.com/openclaw/openclaw/issues/134353)). `doctor --fix` is perceived as unreliable.
- **Crash loops & data loss**: V8 OOM → restart-recovery → core-dump loops ([#115424](https://github.com/openclaw/openclaw/issues/115424)); forced reindex destroys sessions ([#135347](https://github.com/openclaw/openclaw/issues/135347)).
- **Silent message loss**: Telegram sends dead-lettered after 1 network failure ([#125764](https://github.com/openclaw/openclaw/issues/125764)); Discord messages dead-lettered by `doctor --fix` loop ([#134331](https://github.com/openclaw/openclaw/issues/134331)).
- **ARM64/Raspberry Pi degradation**: 100% CPU on every agent turn post-202

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: Open-Source AI Agent & Personal AI Assistant Ecosystem (2026-09-02)

---

## 1. Ecosystem Overview

The open-source personal AI assistant landscape shows a **bifurcated maturity spectrum**: a cluster of high-velocity, production-grade platforms (OpenClaw, Hermes Agent, IronClaw, CoPaw) pushing architectural boundaries on multi-agent orchestration, session durability, and channel extensibility, contrasted with maintenance-mode or early-stage projects (ZeptoClaw, NullClaw, TinyClaw) and several build failures (PicoClaw, NanoClaw, Moltis). **Session-state integrity, upgrade migration reliability, and MCP/tool ecosystem scalability** have emerged as cross-cutting pain points. The ecosystem is consolidating around **gateway-daemon architectures** with pluggable channels (Telegram, Slack, Discord, Matrix, custom), **WASM/plugin sandboxes** for tool execution, and **long-term memory subsystems** (ReMe, Active Memory, PowerContext). Commercial backing (NearAI, NetEase, HKUDS, NousResearch) correlates with sustained velocity and design-system investment.

---

## 2. Activity Comparison

| Project | Issues Updated (24h) | PRs Updated (24h) | Release Status | Health Score | Key Signal |
|---------|---------------------|-------------------|----------------|--------------|------------|
| **OpenClaw** | 500 (331 open) | 500 (325 open) | **v2026.8.2 released** (regressions) | 🟡 Mixed | Highest raw velocity; post-release stability crisis |
| **Hermes Agent** | 50 | 50 | No release (v0.21.x pending) | 🟢 High | 100 items/day; session durability & bot continuity focus |
| **ZeroClaw** | ~40 (est.) | ~42 (est.) | No release (v0.8.x) | 🟡 High Churn | 82 updates; architectural RFC storm, review bottleneck |
| **IronClaw** | 14 | 19 | No release | 🟢 High | 8 PRs merged (4 XL); design-system convergence, MCP scalability bug |
| **CoPaw (QwenPaw)** | 32 | 35 | **v2.2.0-beta.6** | 🟢 High | 67 updates; beta stabilization, ReMe bundling fixed |
| **NanoBot** | 6 | 19 | No release | 🟢 High | Agent-loop hygiene, ephemeral context, copy-file PR open |
| **LobsterAI** | 9 closed | 5 merged | No release | 🟢 Stabilizing | Maintenance burst; stale PR backlog (5mo), security PR open |
| **ZeptoClaw** | 0 | 2 (Dependabot) | No release | 🔴 Dormant | Only automated dependency updates |
| **NullClaw** | 0 | 0 | — | 🔴 Inactive | No activity |
| **TinyClaw** | 0 | 0 | — | 🔴 Inactive | No activity |
| **PicoClaw** | — | — | — | ⚫ Build Fail | Summary generation failed |
| **NanoClaw** | — | — | — | ⚫ Build Fail | Summary generation failed |
| **Moltis** | — | — | — | ⚫ Build Fail | Summary generation failed |

*Health Score: 🟢 High (sustained velocity + merge throughput), 🟡 Mixed/Churn (velocity with instability/bottlenecks), 🔴 Low (dormant/inactive), ⚫ Unknown (build failure)*

---

## 3. OpenClaw's Position

### Advantages vs. Peers
| Dimension | OpenClaw | Peer Comparison |
|-----------|----------|-----------------|
| **Community Scale** | 1,000+ daily issue/PR touches | 2–10× next closest (Hermes, ZeroClaw) |
| **Channel Breadth** | Telegram, Discord, Matrix, Webchat, Control UI, CUA/Desktop | Most projects support 1–3 channels; IronClaw adds Slack, LobsterAI adds DingTalk |
| **Release Cadence** | Calendar-versioned (v2026.8.x) | Only CoPaw has recent beta; others pre-release or stalled |
| **Desktop Integration** | CUA/Computer Control, Dockable Home, Companion | Hermes (Electron), CoPaw (desktop), IronClaw (WebUI-first) |
| **Security Model** | Install policy warnings, `doctor --fix` (flawed) | ZeroClaw (principal-based, RFC), IronClaw (sandbox policy), NanoBot (Tool Guard) |

### Technical Approach Differences
- **Monolithic Gateway + Plugin Channels** vs. Hermes/ZeroClaw's **daemon-owned session/runtime split**
- **SQLite Transcript Store** (contention issues) vs. ZeroClaw's **append-only event history** (RFC), IronClaw's **model capability metadata** preservation
- **Built-in Provider Fleet** (Perplexity, Xiaomi, etc.) vs. CoPaw/IronClaw's **provider-agnostic discovery** + BYOM focus
- **Active Memory / Work-Context Snapshots** as first-class UX vs. ReMe (CoPaw), PowerContext (CoPaw PR), MemGPT-style (NanoBot)

### Community Size
- **Largest active contributor base** by GitHub metrics (issues/PRs/comments)
- **Highest user-reported pain volume** (upgrade trauma, crash loops, data loss) — correlates with install base
- **Maintainer responsiveness** visible (175 PRs merged today) but **regression throughput exceeds fix velocity**

---

## 4. Shared Technical Focus Areas

| Requirement | Projects Affected | Specific Need |
|-------------|-------------------|---------------|
| **Session Durability Across Restarts/Devices** | OpenClaw (#133984, #115424), Hermes (#93888, #97948), ZeroClaw (#9487, #10526), CoPaw (#7447) | Survive gateway crashes, desktop disconnects, upgrades; prevent silent ID rotation |
| **Upgrade/Migration Reliability** | OpenClaw (#133984, #134353), CoPaw (#7474), LobsterAI (#1587) | Non-interactive config-key migration, schema versioning, rollback safety |
| **MCP / Tool Catalog Scalability** | IronClaw (#8012: 47k tools), CoPaw (#7470, #7481), ZeroClaw (#8850 WASM plugins), NanoBot (#5251 MCP Apps) | Search/indexing beyond 2k tools; per-tool auth/whitelist; WASM sandboxing |
| **Long-Term Memory Subsystems** | CoPaw (ReMe, #7446, #7469), OpenClaw (Active Memory), NanoBot (ephemeral context, #5586), ZeroClaw (event history #10526), Hermes (compression #97948) | Pluggable backends, background embedding reliability, context compaction without loss |
| **Multi-Agent Orchestration** | CoPaw (#7450 proactive polling), OpenClaw (#135318 yield-owned), Hermes (#97681 bot group chats), ZeroClaw (delegate tool #8279) | Sub-agent lifecycle, failure propagation, cross-agent consultation |
| **Cross-Platform Desktop/Terminal Resilience** | Hermes (#62169 CWD deletion), NanoBot (#5617 WebSocket macOS/BSD), CoPaw (#7481 macOS MCP spawn), IronClaw (#8015 rootless Docker) | Sandbox stability, stdio MCP, WebSocket portability |
| **Observability & Cost Tracking** | OpenClaw (#13219 per-model usage), IronClaw (OTel #9352), ZeroClaw (cross-turn correlation), Hermes (cron lateness #99919) | Native usage dashboards, token/cost attribution, distributed tracing |

---

## 5. Differentiation Analysis

| Project | Primary Differentiator | Target User | Architectural Signature |
|---------|------------------------|-------------|-------------------------|
| **OpenClaw** | **Broadest channel + desktop integration**; calendar releases | Power users, developers, desktop automation | Monolithic gateway, SQLite transcripts, built-in provider fleet |
| **Hermes Agent** | **Bot Mode group chat continuity**; remote gateway + desktop sync | Teams, multi-device bot operators | Daemon-owned sessions, Electron renderer, Matrix/Telegram/Weixin |
| **IronClaw** | **Design-system unification + Slack-first agent UX**; NEAR AI model discovery | Enterprise/team Slack deployments | Rust crate modularity, WebUI component library, capability metadata |
| **CoPaw (QwenPaw)** | **ReMe memory + PawPort migration**; Chinese/English bilingual UX | Chinese-market developers, Codex/Qoder migrators | Python/React, ReMe bundling, pluggable LTM (PowerContext PR) |
| **ZeroClaw** | **Principal-based auth + WASM plugin runtime + append-only event log** | Security-first, extensible platform builders | Rust, capability-based security, RFC-driven redesign, no releases |
| **NanoBot** | **Lightweight gateway + ephemeral runtime context + TUI/WebUI parity** | Self-hosters, CLI-first developers | Python, agent-loop hygiene, channel-agnostic core |
| **LobsterAI** | **Enterprise IM (DingTalk) + onboarding analytics + video artifacts** | Chinese enterprise teams | React/TS, OpenClaw backend option, scheduled-task polling |
| **ZeptoClaw** | **Minimalist Rust CLI** | Embedded/edge, minimal dependency | Docker-only, Dependabot-maintained |

---

## 6. Community Momentum & Maturity

| Tier | Projects | Characteristics |
|------|----------|-----------------|
| **Rapid Iteration (High Velocity + Merge Throughput)** | OpenClaw, IronClaw, CoPaw, Hermes Agent, ZeroClaw | 30–1000+ daily updates; stacked PRs; RFCs; multiple XL refactors in flight |
| **Active Stabilization (Feature-Complete, Bug-Focus)** | NanoBot, LobsterAI | 10–20 updates/day; closing stale issues; security hardening; UX polish |
| **Maintenance / Dormant** | ZeptoClaw, NullClaw, TinyClaw | ≤2 automated PRs; no human activity >24h |
| **Build/Infra Issues** | PicoClaw, NanoClaw, Moltis | Summary generation failed — likely CI/docs/config issues |

**Key Insight**: The top 5 projects (OpenClaw, Hermes, ZeroClaw, IronClaw, CoPaw) represent **~95% of ecosystem activity**. OpenClaw alone generates ~50% of total issue/PR volume. ZeroClaw's "high churn" reflects architectural rewrites, not feature velocity. CoPaw and Hermes show the healthiest **beta-to-stable pipelines** (regular betas, focused regression hunts).

---

## 7. Trend Signals for AI Agent Developers

| Trend | Evidence Across Projects | Strategic Value |
|-------|-------------------------|-----------------|
| **Gateway-Daemon Split with Durable Sessions** | Hermes (remote gateway), ZeroClaw (daemon-owned RFC #9487), OpenClaw (gateway crash-loops), IronClaw (agent-loop decomposition) | **Standardizing**: Separate stateful daemon from stateless clients; enables multi-device, crash recovery, horizontal scaling |
| **WASM / Capability-Based Sandboxing for Tools** | ZeroClaw (WASM plugins RFC #10076, sandbox policy #6996), IronClaw (rootless Docker #8015), NanoBot (Tool Guard #7472), CoPaw (MCP stdio #7481) | **Security baseline**: Move from process isolation to capability tokens; enables untrusted plugin ecosystems |
| **MCP as Universal Tool Protocol — But Scalability Broken** | IronClaw (#8012 47k tools), CoPaw (#7470 whitelist, #7481 spawn), NanoBot (#5251 MCP Apps UI), ZeroClaw (#8850 tracker) | **Critical gap**: Search/indexing, per-tool auth, and sandboxing at scale are unsolved; opportunity for middleware layer |
| **Long-Term Memory = Pluggable Backend + Background Jobs** | CoPaw (ReMe, PowerContext PR), OpenClaw (Active Memory), NanoBot (ephemeral blocks), ZeroClaw (event replay), Hermes (compression failures) | **Converging**: Decouple memory store from agent loop; require async embedding pipelines with observability |
| **Upgrade/Migration as Product Feature** | OpenClaw (doctor --fix failures), CoPaw (config schema migration #7474), LobsterAI (crash on update #1587), Hermes (profile-cloned OAuth #100339) | **Differentiator**: Projects investing in non-interactive, idempotent migrations will retain users; others leak installs |
| **Multi-Agent = First-Class Orchestration, Not Chat Hacks** | CoPaw (#7450 proactive polling), OpenClaw (#135318 yield-owned), Hermes (#97681 gateway-owned bots), ZeroClaw (delegate bypass #8279) | **Architectural shift**: Sub-agents need lifecycle APIs, failure domains, and cross-agent consultation tools (`consult` PR in Hermes) |
| **Observability → Cost Governance** | OpenClaw (#13219 per-model usage), IronClaw (OTel #9352), ZeroClaw (cross-turn correlation), Hermes (cron lateness) | **Enterprise requirement**: Token/cost attribution per agent/session/provider is becoming table stakes |

---

## Summary for Decision-Makers

- **Build on**: OpenClaw

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-09-02

## 1. Today's Overview

NanoBot shows **high development velocity** with 19 PRs and 6 issues updated in the last 24 hours. The project is actively addressing core agent-loop stability (empty task-group cleanup, background-task error reporting), expanding filesystem tooling (`copy_file`/`move_file`), and refining the WebUI onboarding flow. Two issues were closed with fixes merged, while four remain open — including a long-standing file-copy bug (#2061 from March) and a new MCP Apps WebUI integration request (#5251). No new release was published today.

## 2. Releases

**No new releases today.** The latest published version remains prior to 2026-09-02.

---

## 3. Project Progress — Merged/Closed PRs (9)

| PR | Title | Type | Impact |
|----|-------|------|--------|
| [#5623](https://github.com/HKUDS/nanobot/pull/5623) | `fix(agent): drop empty active-task groups after tasks finish` | Bug fix, perf, test (p2) | Resolves #5428 — prevents memory leak in long-running `AgentLoop` by cleaning up empty `_active_tasks` sets. |
| [#5430](https://github.com/HKUDS/nanobot/pull/5430) | `fix(agent): release completed task groups` | Bug fix | Alternative fix for #5428; removes session entry when final dispatch task completes. |
| [#5622](https://github.com/HKUDS/nanobot/pull/5622) | `fix(dream): stop duplicating SOUL/USER/MEMORY into the Dream prompt` | Bug fix, test (p2) | Eliminates duplicate context injection in dream consolidation, reducing token waste. |
| [#5621](https://github.com/HKUDS/nanobot/pull/5621) | `fix(tui): preserve input typed after submit` | Bug fix, test (p2) | Fixes TUI input loss after submission; 163 tests pass. |
| [#5617](https://github.com/HKUDS/nanobot/pull/5617) | `fix(websocket): stop treating SO_ACCEPTCONN as portable in listener health check` | Bug fix, regression, channel, webui (p1) | **Critical portability fix** — macOS/BSD `OSError` on non-portable socket option. |
| [#5615](https://github.com/HKUDS/nanobot/pull/5615) | `feat(agent): support ephemeral runtime context` | Feature, test (p2) | Implements `ephemeral` flag on `RuntimeContextBlock` (part of #5586). |
| [#5619](https://github.com/HKUDS/nanobot/pull/5619) | `feat(runtime-context): allow blocks to opt out of history persistence` | Feature, test (p2) | **Closes #5586** — ephemeral blocks visible to current request only, excluded from session history. |
| [#5604](https://github.com/HKUDS/nanobot/pull/5604) | `docs(edit_file): state that match selectors are mutually exclusive` | Documentation (p2) | Clarifies `occurrence`, `line_hint`, `replace_all` cannot be combined. |
| [#5569](https://github.com/HKUDS/nanobot/pull/5569) | `refactor(agent): extract tool execution boundary` | Refactor, test (p2) | Moves tool-call prep/execution/batching/error handling out of `AgentRunner` into functional boundary. |

**Key advancement:** Agent-loop hygiene (task-group cleanup, background-task error surfacing), runtime-context lifecycle control (ephemeral blocks), and cross-platform WebSocket stability.

---

## 4. Community Hot Topics

| Item | Activity | Underlying Need |
|------|----------|-----------------|
| [#2061](https://github.com/HKUDS/nanobot/issues/2061) — *Unable to Copy File Inside Workspace* | **3 comments**, open since Mar 2026 | **Core filesystem gap** — agent cannot copy files; loops `list_dir`/`read_file` without writing. Blocks real-world workspace automation. |
| [#5251](https://github.com/HKUDS/nanobot/issues/5251) — *Add MCP Apps host support to WebUI* | **3 comments**, created Aug 2026 | **MCP ecosystem integration** — users want WebUI to render MCP Apps (interactive UI from MCP servers), not just text/image artifacts. |
| [#5614](https://github.com/HKUDS/nanobot/pull/5614) — *feat(tg): add support for streaming rich messages* | **Recently updated**, author notes "dr..." (draft) | **Telegram UX parity** — streaming rich messages (markdown, media) for responsive bot feel. |
| [#5626](https://github.com/HKUDS/nanobot/pull/5626) — *feat(tools): add copy_file and move_file filesystem tools* | **New, 0 comments** | Directly addresses #2061 — first-class copy/move primitives to replace read→write chains. |

**Signal:** Filesystem operations and MCP Apps integration are the top user-facing gaps. The copy-file bug (#2061) has persisted 6+ months; PR #5626 is the likely fix.

---

## 5. Bugs & Stability — Reported/Fixed Today

| Severity | Issue / PR | Status | Notes |
|----------|------------|--------|-------|
| **Critical (p1)** | [#5617](https://github.com/HKUDS/nanobot/pull/5617) WebSocket `SO_ACCEPTCONN` portability | **Fixed & merged** | macOS/BSD crash in WebSocket listener health check. |
| **High** | [#5428](https://github.com/HKUDS/nanobot/issues/5428) AgentLoop retains empty active-task groups | **Fixed** via [#5623](https://github.com/HKUDS/nanobot/pull/5623) & [#5430](https://github.com/HKUDS/nanobot/pull/5430) | Memory leak in long-running gateways; two complementary fixes merged. |
| **High** | [#5622](https://github.com/HKUDS/nanobot/pull/5622) Dream prompt duplicates SOUL/USER/MEMORY | **Fixed & merged** | 2× token bloat in consolidation requests. |
| **Medium** | [#2061](https://github.com/HKUDS/nanobot/issues/2061) Copy file never completes | **Open** — PR [#5626](https://github.com/HKUDS/nanobot/pull/5626) proposes fix | Agent loops reading but never writes; blocks workspace workflows. |
| **Medium** | [#5624](https://github.com/HKUDS/nanobot/pull/5624) WebUI: delete unpersisted pane sessions | **Open (fix ready)** | Regression: new panes couldn't be deleted before first message persist. |
| **Medium** | [#5621](https://github.com/HKUDS/nanobot/pull/5621) TUI input lost after submit | **Fixed & merged** | Input preservation restored. |

**Stability trend:** Core agent-loop and channel bugs are being resolved rapidly; the longest-standing user-facing bug (#2061) now has a targeted PR.

---

## 6. Feature Requests & Roadmap Signals

| Request | Source | Likelihood for Next Version |
|---------|--------|-----------------------------|
| **MCP Apps host in WebUI** | [#5251](https://github.com/HKUDS/nanobot/issues/5251) (3👍, active discussion) | **High** — MCP is strategic; WebUI is primary interface. |
| **Ephemeral runtime-context blocks** | [#5586](https://github.com/HKUDS/nanobot/issues/5586) → [#5615](https://github.com/HKUDS/nanobot/pull/5615), [#5619](https://github.com/HKUDS/nanobot/pull/5619), [#5627](https://github.com/HKUDS/nanobot/pull/5627) | **Done** — three PRs merged/closed implementing the feature. |
| **Copy/Move file tools** | [#2061](https://github.com/HKUDS/nanobot/issues/2061) → [#5626](https://github.com/HKUDS/nanobot/pull/5626) | **High** — PR opened today, directly solves 6-month bug. |
| **Per-session sandbox isolation (non-WebUI)** | [#5283](https://github.com/HKUDS/nanobot/pull/5283) (open since Aug 7) | **Medium** — security hardening for multi-tenant deployments. |
| **HTML/TXT/MD preview in channels** | [#5493](https://github.com/HKUDS/nanobot/issues/5493) | **Medium** — UX polish for document-heavy workflows. |
| **Cron results routing + batch archive** | [#5513](https://github.com/HKUDS/nanobot/issues/5513) (closed, feat merged?) | **Likely done** — issue closed Sep 1. |
| **Zalo channel refactor** | [#2078](https://github.com/HKUDS/nanobot/pull/2078) (open since Mar) | **Low** — long-stalled, modular plugin architecture migration. |

**Roadmap pulse:** MCP Apps WebUI support and filesystem tool completeness are the next visible milestones. Ephemeral context is already landing.

---

## 7. User Feedback Summary

| Pain Point | Evidence | Impact |
|------------|----------|--------|
| **File copy/move broken** | #2061 (Mar 2026, 3 comments): "operation never completes… file never created" | Blocks workspace automation; forces manual workarounds. |
| **MCP Apps not renderable in WebUI** | #5251: "MCP call results treated mainly as model-facing text… want interactive UI" | Limits MCP server utility; WebUI users can't leverage UI-capable MCP servers. |
| **WebSocket crashes on macOS/BSD** | #5617 (p1): `OSError` on `SO_ACCEPTCONN` | Breaks WebUI/websocket channel on non-Linux hosts. |
| **TUI input loss** | #5621: "input typed after submit merged and cleared" | Degrades CLI UX for power users. |
| **Dream token bloat** | #5622: SOUL/USER/MEMORY sent twice | Unnecessary cost/latency in consolidation. |
| **Cron noise in chat** | #5513: "mixes automation noise into personal conversations" | Operational hygiene for scheduled jobs. |

**Satisfaction signals:** Rapid fix turnaround (p1 WebSocket, TUI, dream dup) shows maintainer responsiveness. Long-standing #2061 indicates some workspace-tool gaps persist.

---

## 8. Backlog Watch — Stale / Needs Attention

| Item | Age | Why It Matters |
|------|-----|----------------|
| [#2061](https://github.com/HKUDS/nanobot/issues/2061) Bug: Unable to Copy File Inside Workspace | **~6 months** (Mar 15) | Core filesystem capability; PR #5626 now open — needs review/merge. |
| [#2078](https://github.com/HKUDS/nanobot/pull/2078) Fix/zalo integration refactor | **~5.5 months** (Mar 16) | Channel plugin architecture migration; blocked on maintainer review. |
| [#5283](https://github.com/HKUDS/nanobot/pull/5283) Per-session sandbox isolation | **~1 month** (Aug 7) | Security hardening for multi-tenant; opt-in, well-tested. |
| [#5431](https://github.com/HKUDS/nanobot/pull/5431) Fix: report background task failures | **~2 weeks** (Aug 18, conflict) | Improves observability; conflicts with #5623/#5430 — needs resolution. |
| [#5568](https://github.com/HKUDS/nanobot/pull/5568) Refactor: runner owns context compaction | **~1 week** (Aug 27) | Architectural cleanup; moves compaction logic to `AgentRunner`. |

**Action items for maintainers:**
1. **Review & merge #5626** (copy/move tools) to close the 6-month #2061.
2. **Triage #2078** (Zalo) — decide on plugin-architecture merge or close.
3. **Resolve conflicts** on #5431 vs. #5623/#5430 for background-task error reporting.
4. **Advance #5283** (sandbox) toward merge for security-conscious deployments.

---

*Digest generated from GitHub API data as of 2026-09-02. All links point to live GitHub items.*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-09-02

## 1. Today's Overview
Hermes Agent shows **high velocity with 100 total items updated** (50 issues, 50 PRs) in the last 24 hours, but **no new releases**. The project is in active development with significant focus on **Bot Mode group chat continuity**, **session state reliability**, **cross-platform terminal fixes**, and **provider authentication resilience**. Critical bugs around session corruption, compression timeouts, and SQLite WAL corruption indicate stability pressure on long-running sessions. The community is actively debating architecture for persistent multi-bot group chats that survive desktop disconnects.

## 2. Releases
**No new releases today.** The last release appears to be v0.21.0 (referenced in issues #100339, #100792). Several PRs (#100600, #99919) target release infrastructure and cron catch-up tagging, suggesting a v0.21.x patch may be imminent.

## 3. Project Progress — Merged/Closed Today
| PR/Issue | Type | Summary |
|----------|------|---------|
| [#99919](https://github.com/NousResearch/hermes-agent/pull/99919) | **Fix (Merged)** | Cron catch-up dispatches now tagged with scheduled vs actual time + lateness; late runs surface in UI (fixes #99879) |
| [#93888](https://github.com/NousResearch/hermes-agent/issues/93888) | **Bug (Closed)** | Desktop sending local runtime ID to Remote Gateway, breaking session restore — root cause identified |
| [#94906](https://github.com/NousResearch/hermes-agent/issues/94906) | **Bug (Closed, Duplicate)** | Windows native stdio MCP client discovers tools but calls fail with 'subprocess has exited' |
| [#100336](https://github.com/NousResearch/hermes-agent/issues/100336) | **Perf (Closed)** | Prefix-cache invalidation on model switch nulled system prompt, forcing full re-prefill (2%→99% cache hit) |
| [#99879](https://github.com/NousResearch/hermes-agent/issues/99879) | **Bug (Closed)** | Routines run late after gateway downtime with no missed-run status — addressed by #99919 |
| [#100708](https://github.com/NousResearch/hermes-agent/issues/100708) | **Bug (Closed, Duplicate)** | Matrix gateway not streaming replies — no m.replace edits emitted |
| [#100794](https://github.com/NousResearch/hermes-agent/issues/100794) | **Feature (Closed, Duplicate)** | `session.dmScope` — shared DM session across channels (like OpenClaw) |

**Key advancement:** Cron lateness observability (#99919) and session restore root cause (#93888) are now resolved. Bot Mode group chat continuity work continues across multiple PRs (#98307, #98073, #100603).

## 4. Community Hot Topics — Most Active Discussions

| Item | Comments | Reactions | Core Need |
|------|----------|-----------|-----------|
| [#66616](https://github.com/NousResearch/hermes-agent/issues/66616) Skills index stale/degraded | **138** | 0 | **Automated freshness probe failing** — skills index 29.8h old (limit 26h). Blocks documentation/site deploy. High comment count suggests CI/CD flakiness or workflow scheduling issues. |
| [#97681](https://github.com/NousResearch/hermes-agent/issues/97681) Bot Group Chats persist after Desktop closes | **18** | 0 | **Multi-device bot continuity** — users want group chats with bots from laptop/homelab/VPS to survive desktop disconnect. Gateway-owned authority + scoped cross-gateway transport on `main`, needs UI/dashboard integration. |
| [#89995](https://github.com/NousResearch/hermes-agent/issues/89995) Expose Bot Mode group chats in web dashboard | **16** | **2** | **Desktop-only feature parity** — group chats locked to Electron renderer (`hermes-bots` plugin). Web dashboard/gateway only expose 1:1 chat. |
| [#97948](https://github.com/NousResearch/hermes-agent/issues/97948) `/compress` 120s timeout + large-session failures | **12** | 0 | **Context compression reliability** — manual command times out while background worker succeeds minutes later, silently rotating session ID. Lease lost / session_split_failed on large sessions. |
| [#62169](https://github.com/NousResearch/hermes-agent/issues/62169) Deleted CWD breaks terminal sandbox | **7** | 0 | **Terminal resilience** — `cd || exit 126` fails permanently when CWD deleted (worktree cleanup, npm restructure). PR #100823 addresses local backend variant. |

**Underlying theme:** **Session durability across restarts, devices, and failures** — whether it's bot group chats, compression, cron catch-up, or terminal CWD — is the dominant architectural challenge.

## 5. Bugs & Stability — Ranked by Severity

| Severity | Issue | Status | Fix PR | Impact |
|----------|-------|--------|--------|--------|
| **P0/Critical** | [#98077](https://github.com/NousResearch/hermes-agent/issues/98077) `state.db` physical cross-B-tree corruption (SQLite 3.50.4 WAL) | Open | — | **Data loss risk** — FTS + structural corruption in production; canonical writes continued after malformed detection. Multiple processes/connections involved. |
| **P1** | [#97948](https://github.com/NousResearch/hermes-agent/issues/97948) `/compress` timeout + lease lost / session_split_failed | Open | — | **Large-session compression broken** — UI reports timeout, background succeeds late, session ID rotates silently. Windows 11, v0.20.6. |
| **P1** | [#100339](https://github.com/NousResearch/hermes-agent/issues/100339) Profile-cloned Anthropic OAuth strands siblings after rotation (single-use refresh token) | Open | — | **Multi-profile auth breakage** — 10 profiles as local agent team; hard-fail on init instead of refresh. v0.21.0, Windows. |
| **P1** | [#100788](https://github.com/NousResearch/hermes-agent/issues/100788) `load_transcript()` returns `[]` on failed read — corrupt `state.db` silently resumes as new conversation | Open | — | **Silent data loss** — exception swallowed, caller can't distinguish failure from empty session. Gap in #82616 fix. |
| **P2** | [#62169](https://github.com/NousResearch/hermes-agent/issues/62169) Deleted CWD permanently breaks terminal (exit 126) | Open | [#100823](https://github.com/NousResearch/hermes-agent/pull/100823) (local backend) | **Terminal unusable after CWD deletion** — common in worktree/npm workflows. Wrapper-level fallback in #62189. |
| **P2** | [#99984](https://github.com/NousResearch/hermes-agent/issues/99984) Cloudflare MCP connector auth fails: (1) strict RFC 9207 iss check, (2) concurrent OAuth flows collide on callback port | Open | — | **Built-in MCP connector broken** — fresh install fails. Two distinct bugs in OAuth flow. |
| **P2** | [#89166](https://github.com/NousResearch/hermes-agent/issues/89166) Cross-process session lease wait floods gateways every 15s, starves delivery | Open | — | **Gateway spam + delivery starvation** — shared durable conversation (Desktop + Weixin) causes status message flood. |
| **P2** | [#100688](https://github.com/NousResearch/hermes-agent/issues/100688) Kimi fallback bypasses Moonshot `anyOf` tool-schema sanitization | Open | — | **Tool schema rejection on fallback** — HTTP 400 from Kimi K3 when falling back from OpenAI Codex. |
| **P3** | [#100792](https://github.com/NousResearch/hermes-agent/issues/100792) `hermes doctor` hangs in `threading._shutdown` after diagnostics (v0.21) | Open | — | **CLI non-exit** — process never returns; Ctrl+C raises ignored threading exception. Not the PRAGMA hang from #72527. |
| **P3** | [#82052](https://github.com/NousResearch/hermes-agent/issues/82052) xAI 403 classified non-retryable — expired OAuth never refreshed | Open | — | **Long-lived worker auth failure** — 243 msgs/182k tokens session fails permanently on 403. |

## 6. Feature Requests & Roadmap Signals

| Feature | Source | Likelihood (Next Version) | Notes |
|---------|--------|---------------------------|-------|
| **Bot Group Chat continuity across devices** | [#97681](https://github.com/NousResearch/hermes-agent/issues/97681), [#98307](https://github.com/NousResearch/hermes-agent/pull/98307), [#98073](https://github.com/NousResearch/hermes-agent/pull/98073), [#100603](https://github.com/NousResearch/hermes-agent/pull/100603) | **High** — Multiple PRs open, foundation on `main` | Gateway-owned authority, same-gateway runner, scoped cross-gateway transport done. Remaining: connect to Desktop/files/control from messaging. |
| **Web dashboard exposure for Bot Mode group chats** | [#89995](https://github.com/NousResearch/hermes-agent/issues/89995) | **Medium** — Needs decision, 2 👍 | Currently desktop-only (`hermes-bots` plugin). Requires gateway + dashboard work. |
| **`consult` tool — agent-initiated second opinion from reference model** | [#100821](https://github.com/NousResearch/hermes-agent/pull/100821), [#82103](https://github.com/NousResearch/hermes-agent/pull/82103) | **High** — New PR opened today, salvage of older work | Opt-in `auxiliary.consult` config. Inspired by Perplexity advisor escalation. |
| **Config toggles for hardcoded system prompt blocks** | [#99940](https://github.com/NousResearch/hermes-agent/pull/99940) | **High** — Closes #37253, 4 new `agent:` keys | `help_guidance`, `profile_hint`, `tool_guidance`, `memory_guidance` — all opt-out. |
| **Unified package manager (`pm`)** | [#95281](https://github.com/NousResearch/hermes-agent/pull/95281) | **Medium** — Large refactor, needs decision | Single dependency tree across 3 files (packages.py, lock.json, resolver). Platform gaps declared. |
| **`session.dmScope` — shared DM session across channels** | [#100794](https://github.com/NousResearch/hermes-agent/issues/100794) | **Low** — Closed as duplicate | Like OpenClaw; would unify CLI/Telegram/etc. sessions. |
| **Per-profile WhatsApp config (require_mention, dm_policy, allowlists)** | [#100604](https://github.com/NousResearch/hermes-agent/pull/100604) | **High** — Fixes global env pollution | Currently written to `os.environ` globally; should use `PlatformConfig.extra`. |
| **Exponential backoff for upstream-capacity 429s** | [#100589](https://github.com/NousResearch/hermes-agent/pull/100589) | **High** — Targeted fix | Extends retry ceiling to 10 with progressive backoff (10s→300s) for Nous Portal capacity 429s. |

## 7. User Feedback Summary — Real Pain Points

| Pain Point | Evidence | User Impact |
|------------|----------|-------------|
| **Session restore broken on Remote Gateway** | [#93888](https://github.com/NousResearch/hermes-agent/issues/93888) (19 comments) | "Permanently stuck on 'Restore failed — Session not found'" — Desktop sends 8-char local runtime ID instead of durable session ID. |
| **Bot group chats die when Desktop closes** | [#97681](https://github.com/NousResearch/hermes-agent/issues/97681) (18 comments) | Users run bots from laptop/homelab/VPS; expect continuity. "Remaining production work is to connect foundation to Desktop." |
| **Compression silently fails on large sessions** | [#97948](https://github.com/NousResearch/hermes-agent/issues/97948) (12 comments) | UI says timeout, background succeeds later, session ID rotates — user loses context continuity. Windows 11. |
| **Terminal breaks forever after `npm install` / worktree cleanup** | [#62169](https://github.com/NousResearch/hermes-agent/issues/62169) (7 comments) | CWD deleted → all subsequent commands exit 126. Common in dev workflows. |
| **Database corruption in production** | [#98077](https://github.com/NousResearch/hermes-agent/issues/98077) (6 comments) | Physical SQLite corruption (WAL mode, multi-process) — FTS + structural. "Canonical writes continued after malformed detection." |
| **Anthropic OAuth breaks multi-profile teams** | [#100339](https://github.com/NousResearch/hermes-agent/issues/100339) (3 comments) | 10 profiles as local agent team; profile-cloned credentials strand siblings after first rotation. Hard-fail instead of refresh. |
| **`hermes doctor` hangs on exit (v0.21)** | [#100792](https://github.com/NousResearch/hermes-agent/issues/100792) (3 comments) | Diagnostics print

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

⚠️ Summary generation failed.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

⚠️ Summary generation failed.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-09-02

## 1. Today's Overview
IronClaw shows **high velocity** with 33 total updates (14 issues, 19 PRs) in the last 24 hours. The project is actively addressing a mix of **performance regressions**, **UI component unification**, **agent-loop refactoring**, and **Slack integration fixes**. Eight PRs were merged/closed today, indicating strong review throughput. No new release was cut, but several XL-sized refactors and features are in the merge pipeline. The backlog includes a critical MCP catalog scalability bug (#8012) and an OpenAI prompt-caching collapse (#7921) that remain open.

## 2. Releases
**No new releases** published today. The last release appears to have introduced encoding changes that may be related to the special-character bug (#8025).

## 3. Project Progress — Merged/Closed PRs Today

| PR | Title | Size | Scope | Status |
|----|-------|------|-------|--------|
| [#8031](https://github.com/nearai/ironclaw/pull/8031) | refactor(agent-loop): decompose capability stage mechanics | XL | executor, agent-loop | **Closed** |
| [#7997](https://github.com/nearai/ironclaw/pull/7997) | feat(webui): show model capability icons across Inference | XL | webui, llm | **Closed** |
| [#8013](https://github.com/nearai/ironclaw/pull/8013) | ci: parallelize affected crate tests with nextest | XL | ci, testing | **Closed** |
| [#8028](https://github.com/nearai/ironclaw/pull/8028) | refactor(agent-loop): align state and stage ownership | XL | agent-loop | **Closed** |
| [#8027](https://github.com/nearai/ironclaw/pull/8027) | fix(live-qa): find the Slack run by message identity | L | slack, qa | **Closed** |
| [#7998](https://github.com/nearai/ironclaw/pull/7998) | feat(llm): preserve NEAR AI model capabilities through discovery | XL | llm, model-discovery | **Closed** |
| [#8014](https://github.com/nearai/ironclaw/pull/8014) | fix(slack): preserve explicit mentions across callback dedup | M | slack | **Closed** |
| [#7996](https://github.com/nearai/ironclaw/pull/7996) | perf(github): compact repository list responses | L | github, performance | **Closed** |

**Key advances:**
- **Agent-loop architecture** significantly decomposed (#8031, #8028) — `executor/capabilities.rs` reduced from 2,938 → 890 lines
- **Model capability metadata** now preserved end-to-end from NEAR AI discovery through WebUI rendering (#7998, #7997)
- **CI test parallelization** via nextest should cut feedback loops (#8013)
- **GitHub `list_repos` payload** cut from 519 KB → model-useful projection (#7996, resolves #7986)
- **Slack canary flakiness** fixed after 33 consecutive failures (#8027, #8014)

## 4. Community Hot Topics

| Item | Activity | Underlying Need |
|------|----------|-----------------|
| [#8006](https://github.com/nearai/ironclaw/pull/8006) — feat(channels): durable progressive replies & native Slack Agent UI | XL, core contributor, updated today | **First-class Slack agent experience** — provider-neutral reply document, progressive streaming, native Block Kit UI |
| [#8010](https://github.com/nearai/ironclaw/pull/8010) — feat(webui): session-event transport unification & run-completion notifications | XL, core contributor | **Real-time WebUI ↔ backend sync** — typed WebSocket stream, durable notifications, run-completion toasts |
| [#8012](https://github.com/nearai/ironclaw/issues/8012) — 47k-tool MCP catalog ingests but tools unreachable | New issue, 0 comments, high severity | **MCP catalog scalability** — search index / vector store breaks at ~2k tools; blocks large-scale deployments |
| [#7921](https://github.com/nearai/ironclaw/issues/7921) — OpenAI prompt cache collapse 82%→29% | Open since 08-27, 0 comments | **Prompt caching parity** — only Anthropic transports send `prompt_cache_key`; OpenAI-family backends (Codex, Chat Completions) silently drop cache hints |
| [#8016](https://github.com/nearai/ironclaw/issues/8016) — CI lock-free turn-state test intermittently times out | New issue, CI blocker | **Test reliability** — flaky integration test blocks merge queue |

## 5. Bugs & Stability — Ranked by Severity

| Severity | Issue | Description | Fix PR? |
|----------|-------|-------------|---------|
| **Critical** | [#8012](https://github.com/nearai/ironclaw/issues/8012) | 47,337-tool MCP catalog fully ingests but **zero tools searchable**; works at 2k tools | ❌ No PR yet |
| **High** | [#7921](https://github.com/nearai/ironclaw/issues/7921) | OpenAI-family backends send **no `prompt_cache_key`** → cache hit rate drops 82%→29% past 200 calls | ❌ No PR yet |
| **High** | [#8015](https://github.com/nearai/ironclaw/issues/8015) | Rootless Docker sandbox **workspace not writable** — UID/GID namespace mismatch | ❌ No PR yet |
| **Medium** | [#8025](https://github.com/nearai/ironclaw/issues/8025) | Special characters in input **stripped or cause errors** — possibly encoding regression | ❌ No PR yet |
| **Medium** | [#8016](https://github.com/nearai/ironclaw/issues/8016) | CI test `reborn_user_submit_completes_while_another_turn_state_write_is_blocked` **intermittently times out** | ❌ No PR yet |
| **Low** | [#7986](https://github.com/nearai/ironclaw/issues/7986) | `github.list_repos` returns 81 raw fields (519 KB/98 repos) | ✅ Fixed by [#7996](https://github.com/nearai/ironclaw/pull/7996) |

## 6. Feature Requests & Roadmap Signals

| Signal | Evidence | Likelihood for Next Version |
|--------|----------|----------------------------|
| **Design-system unification** | 4 parallel PRs (#8024, #8023, #8022, #8021) migrating Workspace, Logs, Automations, Settings, Extension Configure to shared `SearchField`, `InlineNotice`, `Input`, `SelectMenu` | **Very High** — all open, core contributor, low risk |
| **Slack as first-class channel** | #8006 (XL), #8027, #8014, #8029 all merged/active — progressive replies, Block Kit UI, mention preservation, run identity fix | **High** — core team investing heavily |
| **WebUI real-time event bus** | #8010 (XL) implements approved design for typed WebSocket + run-completion notifications | **High** — design doc exists, core contributor |
| **Agent-loop modularization** | Two XL refactors merged today (#8031, #8028) — capability stage decomposition, state/stage ownership alignment | **Ongoing** — more decomposition likely |
| **Model capability metadata everywhere** | #7998 (backend) + #7997 (frontend) both merged — modalities preserved from discovery to UI | **Complete** for this cycle |

## 7. User Feedback Summary

| Pain Point | Source | Impact |
|------------|--------|--------|
| **MCP catalog unusable at scale** | [#8012](https://github.com/nearai/ironclaw/issues/8012) — "not one of its tools is ever reachable through `tool_search`" | Blocks enterprise/large-catalog adopters |
| **Prompt caching broken for OpenAI** | [#7921](https://github.com/nearai/ironclaw/issues/7921) — measured 82%→29% cache-hit collapse | Direct cost increase, latency regression for OpenAI/Codex users |
| **Rootless Docker broken** | [#8015](https://github.com/nearai/ironclaw/issues/8015) — workspace ownership mismatch | Blocks non-root, rootless deployments (common in CI/secured envs) |
| **Special-char input regression** | [#8025](https://github.com/nearai/ironclaw/issues/8025) — "characters are stripped or cause errors" | Data integrity risk, likely from recent encoding changes |
| **CI flakiness** | [#8016](https://github.com/nearai/ironclaw/issues/8016) — lock-free test times out | Slows merge velocity, erodes confidence |

**Positive signals:** Rapid closure of GitHub payload bloat (#7986→#7996), Slack canary flakiness (#8027), model capability gaps (#7970→#7998, #7971→#7997), and CI parallelization (#8013) show responsive maintenance.

## 8. Backlog Watch — Stale/Important Items Needing Attention

| Item | Age | Why It Matters | Suggested Action |
|------|-----|----------------|------------------|
| [#7921](https://github.com/nearai/ironclaw/issues/7921) — OpenAI prompt cache collapse | 6 days | Affects all OpenAI-family backends (Codex, Chat Completions, Responses API); measurable cost/latency impact | Assign to LLM transport owner; add `prompt_cache_key` to OpenAI-family request builders |
| [#8012](https://github.com/nearai/ironclaw/issues/8012) — 47k MCP catalog search broken | 1 day (new but critical) | Scalability ceiling at ~2k tools; blocks large deployments | Triage: determine if vector index, BM25, or pagination limit; likely needs search infra work |
| [#8015](https://github.com/nearai/ironclaw/issues/8015) — Rootless Docker workspace writable | 1 day | Common deployment pattern; security best practice | Investigate UID/GID mapping in sandbox init; may need `--userns=keep-id` or explicit chown |
| [#8016](https://github.com/nearai/ironclaw/issues/8016) — CI flaky turn-state test | 1 day | Blocks merge queue; indicates possible race in lock-free submit path | Quarantine or increase timeout; add deterministic scheduling to test |
| [#7020](https://github.com/nearai/ironclaw/pull/7020) — tokio-tungstenite 0.30.0 bump | 31 days | Dependabot PR, low risk but stale; may block other updates | Review & merge or close if superseded |

---

**Project Health Indicators**
- ✅ **Merge throughput**: 8 PRs closed/merged today (4 XL, 1 L, 3 M)
- ✅ **Design-system convergence**: 4 component-migration PRs in flight
- ✅ **Performance fixes landing**: GitHub payload, CI parallelization
- ⚠️ **Critical scalability bug** (#8012) with no PR yet
- ⚠️ **OpenAI caching regression** (#7921) unaddressed for 6 days
- ⚠️ **CI flakiness** emerging in agent-loop tests

**Next expected milestone**: Design-system unification PRs (#8024, #8023, #8022, #8021) + Slack channel feature (#8006) + WebUI event bus (#8010) likely to land together, possibly triggering a minor release. MCP catalog fix (#8012) and OpenAI caching (#7921) are the highest-leverage unaddressed items.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-09-02

## 1. Today's Overview
LobsterAI saw a significant maintenance burst on 2026-09-01 with **9 stale issues closed** and **5 PRs merged**, primarily focused on UI polish, onboarding analytics, video artifact sharing, and Windows installer fixes. No new release was cut. The project maintains **3 open stale issues** (UI table whitespace, DingTalk notification routing, scheduled task polling reliability) with corresponding fix PRs pending review. Activity signals a stabilization phase: clearing backlog, hardening security boundaries, and refining first-run experience.

## 2. Releases
**No new releases** in the last 24 hours.

## 3. Project Progress — Merged/Closed PRs (2026-09-01)
| PR | Area | Summary |
|----|------|---------|
| [#2595](https://github.com/netease-youdao/LobsterAI/pull/2595) | `platform: windows` | Fixed NSIS web staging drive preflight for Windows installer reliability. |
| [#2594](https://github.com/netease-youdao/LobsterAI/pull/2594) | `renderer`, `cowork` | Polished onboarding guide transitions: reduced cursor size, sped up result popover, smoothed entrance animation, unified CTA styling, eliminated layout flash. |
| [#2593](https://github.com/netease-youdao/LobsterAI/pull/2593) | `renderer`, `docs`, `main`, `artifacts` | **Feature**: Model-generated video sharing support — preserves task ID & output index for traceability, restricts sharing to model-generated videos (blocks local bypass), adds source query, asset prep polling, share creation flow, URL hash parsing for legacy sessions, reuses permission/state management, blocks immutable video replacement, improves remote preview, localized errors, tests, and docs. |
| [#2592](https://github.com/netease-youdao/LobsterAI/pull/2592) | `renderer`, `cowork` | User guide fixes (details not expanded in summary). |
| [#2591](https://github.com/netease-youdao/LobsterAI/pull/2591) | `renderer`, `docs`, `cowork` | Added first-run analytics funnel: tracks onboarding steps, login handoff, welcome task creation, welcome stream lifecycle via existing usage analytics; documents events, limits fields to structured states (no prompt text/content/paths uploaded). |

**Net effect**: Onboarding UX sharpened, video artifact sharing shipped, Windows install hardened, telemetry foundation laid for activation metrics.

## 4. Community Hot Topics
| Item | Type | Comments | 👍 | Signal |
|------|------|----------|----|--------|
| [#1614](https://github.com/netease-youdao/LobsterAI/issues/1614) | Issue | 3 | 0 | Request to add **Hermes-Agent** as an optional AI engine (like OpenClaw) — indicates demand for multi-engine extensibility. |
| [#1622](https://github.com/netease-youdao/LobsterAI/issues/1622) | Issue | 3 | 0 | **Custom model addition fails** during test — configuration/validation gap for BYOM (Bring Your Own Model) flow. |
| [#1627](https://github.com/netease-youdao/LobsterAI/issues/1627) | Issue | 3 | 0 | **Client crash on complex task** — OpenClaw websocket logs show session activity before crash; stability concern for long-running agent loops. |
| [#1105](https://github.com/netease-youdao/LobsterAI/issues/1105) + [#1106](https://github.com/netease-youdao/LobsterAI/pull/1106) | Issue+PR | 1 | 0 | **DingTalk scheduled task notification routing broken** — `conversationId` prefix (`direct:`/`group:`) not stripped before `primeConversationReplyRoute()`. PR fixes by passing stripped ID. |
| [#1107](https://github.com/netease-youdao/LobsterAI/issues/1107) + [#1108](https://github.com/netease-youdao/LobsterAI/pull/1108) | Issue+PR | 1 | 0 | **Scheduled task `pollOnce()` lacks reentrancy guard** and emits ghost events after `stopPolling()`. PR adds `pollInFlight` flag + `pollGeneration` counter. |

**Underlying needs**: Users want **engine pluralism** (Hermes-Agent), **reliable BYOM**, **crash-free complex tasks**, and **correct IM integration** for enterprise channels (DingTalk). The polling bug is a silent reliability killer for scheduled automation.

## 5. Bugs & Stability — Ranked by Severity
| Severity | Issue | Status | Fix PR |
|----------|-------|--------|--------|
| **Critical** | [#1587](https://github.com/netease-youdao/LobsterAI/issues/1587) — App crashes on first launch after update (macOS, full log attached) | Closed (stale) | — |
| **Critical** | [#1627](https://github.com/netease-youdao/LobsterAI/issues/1627) — Client crash on complex task (OpenClaw stdout logs) | Closed (stale) | — |
| **High** | [#1589](https://github.com/netease-youdao/LobsterAI/issues/1589) — Session & scheduled task functions both broken (macOS, screenshots) | Closed (stale) | — |
| **High** | [#1107](https://github.com/netease-youdao/LobsterAI/issues/1107) — `pollOnce()` reentrancy + ghost events after stop | **Open (stale)** | [#1108](https://github.com/netease-youdao/LobsterAI/pull/1108) ✅ |
| **Medium** | [#1622](https://github.com/netease-youdao/LobsterAI/issues/1622) — Custom model add fails test | Closed (stale) | — |
| **Medium** | [#1617](https://github.com/netease-youdao/LobsterAI/issues/1617) — Skill deletion UI not syncing (backend deletes, frontend stale, restart doesn't fix) | Closed (stale) | — |
| **Medium** | [#1105](https://github.com/netease-youdao/LobsterAI/issues/1105) — DingTalk notification routing fails due to `conversationId` prefix | **Open (stale)** | [#1106](https://github.com/netease-youdao/LobsterAI/pull/1106) ✅ |
| **Low** | [#1112](https://github.com/netease-youdao/LobsterAI/issues/1112) — Table component unexplained top/bottom whitespace | **Open (stale)** | — |
| **Low** | [#1586](https://github.com/netease-youdao/LobsterAI/issues/1586) — Partial i18n missing after language switch (Terms, Tool Style) | Closed (stale) | — |

**Note**: 7/9 closed issues carry `[stale]` label — likely auto-closed by bot after inactivity. Root causes may persist. The two open bugs with fix PRs (#1106, #1108) are **ready for merge** and address core scheduled-task reliability.

## 6. Feature Requests & Roadmap Signals
| Request | Source | Likelihood for Next Version |
|---------|--------|-----------------------------|
| **Hermes-Agent as optional AI engine** | [#1614](https://github.com/netease-youdao/LobsterAI/issues/1614) | Medium — aligns with OpenClaw pluggable architecture; needs maintainer bandwidth. |
| **System notifications for scheduled task completion** | [#1620](https://github.com/netease-youdao/LobsterAI/issues/1620) | High — detailed spec (opt-in, permission guide, create-time preview, click-through to logs); fits recent onboarding/analytics push. |
| **Skill install guidance after switching to local model** | [#1632](https://github.com/netease-youdao/LobsterAI/issues/1632) | Medium — UX gap when model backend changes; may need skill compatibility matrix. |
| **Video artifact sharing (model-generated only)** | [#2593](https://github.com/netease-youdao/LobsterAI/pull/2593) | **Delivered** — merged today. |
| **First-run onboarding analytics** | [#2591](https://github.com/netease-youdao/LobsterAI/pull/2591) | **Delivered** — merged today. |
| **MCP stdio command/URL security hardening** | [#2590](https://github.com/netease-youdao/LobsterAI/pull/2590) | High — security PR open, addresses shell injection & openExternal risks; likely fast-tracked. |

## 7. User Feedback Summary
| Pain Point | Evidence | Sentiment |
|------------|----------|-----------|
| **Update instability** | #1587: crash on first launch post-update; #1589: sessions & cron both broken | 😡 Frustration — breaks trust in auto-update. |
| **UI state desync** | #1617: deleted skills persist in list until manual cache clear; restart ineffective | 😕 Confusion — frontend/backend contract mismatch. |
| **BYOM friction** | #1622: custom model test fails with opaque error | 😕 Blocked — power users can't validate own models. |
| **Enterprise IM integration broken** | #1105: DingTalk notifications never deliver due to ID prefix bug | 😡 Critical for team adoption. |
| **Local model breaks skill ecosystem** | #1632: skills unusable after model switch, no install path | 😕 Workflow disruption. |
| **Positive** | Onboarding polish (#2594), video sharing (#2593), analytics (#2591) show investment in **first-mile experience** and **shareable outputs**. | 🙂 Encouraging. |

## 8. Backlog Watch — Items Needing Maintainer Attention
| Item | Age | Why It Matters |
|------|-----|----------------|
| [#1106](https://github.com/netease-youdao/LobsterAI/pull/1106) — DingTalk notification fix | Open since 2026-03-31 (5 months) | Blocks enterprise DingTalk users; trivial one-line fix; PR ready. |
| [#1108](https://github.com/netease-youdao/LobsterAI/pull/1108) — Scheduled task polling reliability | Open since 2026-03-31 (5 months) | Silent duplicate runs & ghost events corrupt task state; fix is minimal (flag + counter). |
| [#1113](https://github.com/netease-youdao/LobsterAI/pull/1113) — OpenClaw deferred config sync flush | Open since 2026-03-31 (5 months) | Prevents config staleness after cowork/cron drain; architectural improvement. |
| [#2590](https://github.com/netease-youdao/LobsterAI/pull/2590) — MCP security hardening | Opened 2026-09-01 (1 day) | **Critical security**: shell metacharacter validation + URL protocol allowlist for third-party code execution surface. |
| [#1112](https://github.com/netease-youdao/LobsterAI/issues/1112) — Table whitespace bug | Open since 2026-03-31 (5 months) | Visual regression in core UI component; low effort, high visibility. |
| [#1614](https://github.com/netease-youdao/LobsterAI/issues/1614) — Hermes-Agent engine request | Closed stale, but valid feature ask | Signals ecosystem extensibility demand; consider reopening or tracking in roadmap. |

---

**Health Indicators**
- ✅ **Active maintenance**: 5 PRs merged in one day, security PR opened.
- ⚠️ **Stale backlog**: 5-month-old fix PRs (#1106, #1108, #1113) unmerged — review bottleneck.
- ⚠️ **Stale closures**: 9 issues auto-closed; verify fixes exist or reopen if regressed.
- ✅ **Feature velocity**: Video sharing, onboarding analytics, Windows installer fixes shipped.
- 🔴 **Security exposure**: MCP stdio/URL validation gap open until #2590 lands.

**Recommended Actions**: Merge #1106, #1108, #1113 this week; fast-track #2590; audit stale-closed issues for regression risk; schedule Hermes-Agent engine RFC.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

⚠️ Summary generation failed.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (QwenPaw) Project Digest — 2026-09-02

## 1. Today's Overview
CoPaw/QwenPaw is in an **active beta stabilization phase** for v2.2.0, with **67 total updates** (32 issues + 35 PRs) in the last 24 hours. The project released **v2.2.0-beta.6** today, focusing on ReMe memory bundling fixes and console test expansion. High issue velocity (17 open) signals ongoing regression hunting around memory indexing, cron scheduling, MCP tooling, and multi-agent orchestration. The codebase shows healthy contributor engagement with 20 open PRs under review, including first-time contributors.

---

## 2. Releases

### **v2.2.0-beta.6** (Released 2026-09-01)
| Change | Details | PR |
|--------|---------|-----|
| **fix(desktop)** | Bundle ReMe entry-point plugins for PyInstaller onedir builds | [#7458](https://github.com/agentscope-ai/QwenPaw/pull/7458) |
| **test(console)** | Expand console unit tests: +617 cases, +10.61pp statement coverage | [#7452](https://github.com/agentscope-ai/QwenPaw/pull/7452) |
| **test(inte...** | (truncated in source) | — |

**Migration Notes**: This beta primarily addresses the **ReMe bundling regression** (#7446) where `Rebuild Memory Index` returned 500 errors due to missing Python modules in the packaged desktop app. No breaking API changes noted.

---

## 3. Project Progress — Merged/Closed PRs Today (15 total)

| PR | Type | Summary | Impact |
|----|------|---------|--------|
| [#7468](https://github.com/agentscope-ai/QwenPaw/pull/7468) | **fix** | Start ReMe *before* model configuration to avoid `ProviderError` on fresh installs | Critical for new-user onboarding |
| [#7472](https://github.com/agentscope-ai/QwenPaw/pull/7472) | **security** | Prevent shell line-continuation bypasses in sensitive path checks (Tool Guard) | Security hardening |
| [#7453](https://github.com/agentscope-ai/QwenPaw/pull/7453) | **fix** | Bundle `reme-ai` Python core in PyInstaller onedir (fixes #7446) | Restores memory indexing on Windows desktop |
| [#7466](https://github.com/agentscope-ai/QwenPaw/pull/7466) | **docs** | Link Daily Paper to QwenPaw docs instead of upstream ReMe cookbook | UX consistency |
| [#7432](https://github.com/agentscope-ai/QwenPaw/pull/7432) | **fix** | Expand `~` in agent workspace dirs for trend aggregation | Telemetry accuracy |
| [#7439](https://github.com/agentscope-ai/QwenPaw/pull/7439) | **fix** | Save screenshots in active project directory (fixes preview errors) | Desktop UX |
| [#7446](https://github.com/agentscope-ai/QwenPaw/issues/7446) | **issue closed** | Embedding index rebuild 500 error (ReMe instance None) | Resolved by #7453 |
| [#7449](https://github.com/agentscope-ai/QwenPaw/issues/7449) | **issue closed** | Agent communication in existing sessions | Likely UX clarification |
| [#7379](https://github.com/agentscope-ai/QwenPaw/issues/7379) | **issue closed** | PDF filename with Chinese chars causes error | Encoding fix |
| [#7463](https://github.com/agentscope-ai/QwenPaw/issues/7463) | **issue closed** | Bundled llama.cpp cannot load Spark-X2.5 GGUF | Architecture detection |
| [#7404](https://github.com/agentscope-ai/QwenPaw/issues/7404) | **issue closed** | Surface `card_auto_layout` in DingTalk channel settings | Feature exposure |
| [#7428](https://github.com/agentscope-ai/QwenPaw/issues/7428) | **issue closed** | Avoid bundling optional GPL Pylint provider | License compliance |
| [#7477](https://github.com/agentscope-ai/QwenPaw/issues/7477) | **test** | Cron duplicate trigger test (label verification) | CI validation |
| [#7478](https://github.com/agentscope-ai/QwenPaw/issues/7478) | **test** | Cron duplicate trigger v2 test | CI validation |

**Key Advancement**: The **ReMe memory subsystem** is now correctly bundled for desktop distribution, unblocking long-term memory features for Windows users. Security hardening for Tool Guard and onboarding fixes improve reliability.

---

## 4. Community Hot Topics — Most Active Issues/PRs

| Item | Comments | Type | Core Need |
|------|----------|------|-----------|
| [#7420](https://github.com/agentscope-ai/QwenPaw/issues/7420) | 8 | 🐛 **Bug** | Tool results lost + command re-dispatch → doom-loop protection triggers; stalls agent on v2.2.0-beta.1 (Windows) |
| [#7450](https://github.com/agentscope-ai/QwenPaw/issues/7450) | 5 | 🐛 **Bug** | Main agent doesn't poll sub-agent status proactively; only checks when user asks "progress?" — breaks autonomous multi-agent workflows |
| [#7443](https://github.com/agentscope-ai/QwenPaw/issues/7443) | 4 | 🐛 **Security** | Dangerous instructions can evade detection (Zhihu link references bypass) |
| [#7464](https://github.com/agentscope-ai/QwenPaw/issues/7464) | 3 | 🐛 **Bug** | DashScope embedding index rebuild disabled — config always detected as "unsaved" |
| [#7446](https://github.com/agentscope-ai/QwenPaw/issues/7446) | 3 | ✅ **Fixed** | ReMe instance None → 500 on index rebuild (resolved by #7453) |
| [#7080](https://github.com/agentscope-ai/QwenPaw/pull/7080) | — | 🚀 **Feature** | **PowerContext** pluggable long-term memory backend (first-time contributor, under review) |
| [#6960](https://github.com/agentscope-ai/QwenPaw/pull/6960) | — | 🚀 **Feature** | **PawPort**: Import flow from Codex/Qoder (instructions, settings, skills, plugins, projects) |

**Underlying Themes**:
1. **Multi-agent autonomy** (#7450) — users expect proactive coordination, not reactive polling
2. **Memory reliability** (#7420, #7464, #7469) — ReMe/DashScope indexing regressions block long-context workflows
3. **Migration friction** (#7474, #6960) — config schema changes (`max_tokens` → `max_output_length`) break custom providers; users want seamless import from rival agents

---

## 5. Bugs & Stability — Today's Reports (Ranked by Severity)

| Severity | Issue | Status | Fix PR | Description |
|----------|-------|--------|--------|-------------|
| **Critical** | [#7420](https://github.com/agentscope-ai/QwenPaw/issues/7420) | Open | — | Tool results lost + command re-dispatch → doom-loop; 5 stalls/session on Windows desktop beta.1 |
| **Critical** | [#7481](https://github.com/agentscope-ai/QwenPaw/issues/7481) | Open | — | macOS StdIO MCP spawn re-enters `backend_guard`, kills active backend (v2.2.0-beta.6, Apple Silicon) |
| **High** | [#7450](https://github.com/agentscope-ai/QwenPaw/issues/7450) | Open | — | Main agent ignores sub-agent failures until user prompts; silent stalls in multi-agent tasks |
| **High** | [#7469](https://github.com/agentscope-ai/QwenPaw/issues/7469) | Open | — | ReMe background embedding job fails: `as_embedding:default` accessed before `start()` (OpenAI-compatible backend) |
| **High** | [#7474](https://github.com/agentscope-ai/QwenPaw/issues/7474) | Open | — | Custom provider load fails post-#7337: `ModelInfo.max_tokens` migration breaks config parsing |
| **High** | [#7476](https://github.com/agentscope-ai/QwenPaw/issues/7476) | Open | — | Cron tasks double-trigger in `misfire_grace` window (backup script runs 2×, 17-48s apart) |
| **High** | [#7480](https://github.com/agentscope-ai/QwenPaw/issues/7480) | Open | — | Cron non-scheduled re-fire after upgrade restart; cancelled tasks skip inbox; console auto-marks read |
| **Medium** | [#7464](https://github.com/agentscope-ai/QwenPaw/issues/7464) | Open | — | DashScope embedding index "unsaved" false positive blocks rebuild |
| **Medium** | [#7447](https://github.com/agentscope-ai/QwenPaw/issues/7447) | Open | — | Early context records vanish in long sessions (~160-page docs, 1M token limit) |
| **Medium** | [#7470](https://github.com/agentscope-ai/QwenPaw/issues/7470) | Open | — | MCP per-tool whitelist not enforced on agent runtime path (security gap) |
| **Low** | [#7471](https://github.com/agentscope-ai/QwenPaw/issues/7471) | Open | [#7473](https://github.com/agentscope-ai/QwenPaw/pull/7473) | MCP section renders white background in dark mode (PR ready) |
| **Low** | [#7479](https://github.com/agentscope-ai/QwenPaw/issues/7479) | Open | — | Misspelled commands (e.g., `/mew`) forwarded to agent instead of rejected |

**Critical Cluster**: Memory/indexing (#7420, #7469), multi-agent orchestration (#7450), and MCP/desktop stability (#7481, #7474) dominate. Several have **no fix PR yet** — maintainers should prioritize #7420, #7450, #7481.

---

## 6. Feature Requests & Roadmap Signals

| Request | Source | Likelihood for v2.2.0 / Next |
|---------|--------|------------------------------|
| **Proactive sub-agent monitoring** | [#7450](https://github.com/agentscope-ai/QwenPaw/issues/7450) (5💬) | High — core multi-agent UX gap; likely v2.2.1+ |
| **PowerContext memory backend** | [#7080](https://github.com/agentscope-ai/QwenPaw/pull/7080) (first-time contributor) | Medium — under review, adds pluggable LTM alternative to ReMe |
| **PawPort: Import from Codex/Qoder** | [#6960](https://github.com/agentscope-ai/QwenPaw/pull/6960) | Medium — migration aid, strategic for adoption |
| **Per-session model overrides** | [#5992](https://github.com/agentscope-ai/QwenPaw/pull/5992) | Medium — long-open (Jul), under review; enables per-chat LLM switching |
| **In-round queued user events** | [#7461](https://github.com/agentscope-ai/QwenPaw/issues/7461) | Low — architectural; mid-tool user injection |
| **Disable all built-in cloud providers** | [#7455](https://github.com/agentscope-ai/QwenPaw/issues/7455) (closed) | Low — closed but signals demand for provider parity |
| **Agent Kanban localization (zh/en)** | [#7482](https://github.com/agentscope-ai/QwenPaw/pull/7482) | High — PR open today, trivial merge candidate |
| **Chat scroll lock during streaming** | [#7356](https://github.com/agentscope-ai/QwenPaw/pull/7356) | High — UX polish, ready for review |

**Predicted Next Version (v2.2.0 stable / v2.2.1)**: Kanban i18n, scroll lock, ReMe bundling fixes, custom provider migration fix, MCP whitelist enforcement. Multi-agent polling and PowerContext likely post-v2.2.0.

---

## 7. User Feedback Summary — Pain Points & Use Cases

| Pain Point | Evidence | User Impact |
|------------|----------|-------------|
| **Agent stalls silently on long tasks** | #7420 (5 stalls/session), #7450 (sub-agent failures hidden), #7447 (context loss) | High — developers lose trust in autonomy; manual babysitting required |
| **Memory/indexing broken on desktop** | #7446 (500 error), #7464 (DashScope false unsaved), #7469 (embedding job crash) | High — long-term memory unusable for Windows/macOS desktop users |
| **Config migrations break custom setups** | #7474 (`max_tokens` → `max_output_length`), #7464 (DashScope dims) | Medium — power users blocked on upgrade |
| **Cron unreliability** | #7476 (double-run), #7480 (re-fire on restart, cancelled→no inbox) | Medium — automation unreliable for scheduled workflows |
| **MCP tooling gaps** | #7481 (macOS backend kill), #7470 (whitelist bypass), #7471 (dark mode) | Medium — MCP power users hit platform-specific bugs |
| **Desire for rival-agent migration** | #6960 (Codex/Qoder import), #7003 (ViBo memory pitch) | Strategic — switching cost is adoption barrier |

**Positive Signals**: Users actively test betas (Windows/macOS/console), file detailed repros, and contribute fixes (first-time PRs #7080, #6960, #5992). The **PawPort import flow** (#6960) directly addresses migration friction.

---

## 8. Backlog Watch — Stale/Important Items Needing Attention

| Item | Age | Status | Why It Matters |
|------|-----|--------|----------------|
| [#5992](https://github.com/agentscope-ai/QwenPaw/pull/5992) | 52 days | Open, Under Review | Per-session model overrides — highly requested, enables multi-LLM workflows per agent |
| [#7080](https://github.com/agentscope-ai/QwenPaw/pull/7080) | 16 days | Open, Under Review | PowerContext memory backend — architectural extensibility for LTM |
| [#6960](https://github.com/agentscope-ai/QwenPaw/pull/6960) | 20 days | Open | PawPort import — strategic for user acquisition from Codex/Qoder |
| [#7401](https://github.com/agentscope-ai/QwenPaw/pull/7401) | 4 days | Open, Under Review | Windows ACP agent stalls during bootstrap — blocks Windows ACP users |
| [#7163](https://github.com/agentscope-ai/QwenPaw/pull/7163) | 13 days | Open | Session thinking & model management refactor — UX foundation |
| [#6399](https://github.com/agentscope-ai/QwenPaw/pull/6399) | 41 days | Open, Under Review | Reranker UI for ReMe — completes memory config UX |
| [#7378](https://github.com/agentscope-ai/QwenPaw/pull/7378) | 5 days | Open, DO NOT MERGE | Native mobile (Expo/RN) — long-term strategic, draft only |



</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw Project Digest — 2026-09-02

---

## 1. Today's Overview
ZeptoClaw shows **minimal active development** in the last 24 hours. No new issues, releases, or human-authored pull requests were recorded. The only activity consists of two automated Dependabot PRs updating the Rust toolchain in Docker base images from 1.95 → 1.97 (merged) and 1.95 → 1.98 (open). The project appears to be in a **maintenance-only mode** with no feature work or community-driven contributions visible today.

---

## 2. Releases
**No new releases** published today or in the recent period covered by the data.

---

## 3. Project Progress
| PR | Status | Description | Impact |
|----|--------|-------------|--------|
| [#649](https://github.com/qhkm/zeptoclaw/pull/649) | **Closed/Merged** | `chore(deps): bump rust from 1.95-slim-trixie to 1.97-slim-trixie` (Dependabot) | Routine Docker base-image update; keeps CI/build environment current. |
| [#658](https://github.com/qhkm/zeptoclaw/pull/658) | **Open** | `chore(deps): bump rust from 1.95-slim-trixie to 1.98-slim-trixie` (Dependabot) | Next sequential Rust update; awaits review/merge. No code changes beyond `Dockerfile`/`docker-compose.yml`. |

*No feature PRs, bug fixes, or documentation updates were merged today.*

---

## 4. Community Hot Topics
**None.**  
- Zero issues updated in 24h.  
- Both PRs are automated Dependabot entries with **0 comments / 0 reactions**.  
- No user discussions, feature debates, or support threads surfaced.

---

## 5. Bugs & Stability
**No bugs, crashes, or regressions reported today.**  
- Issue tracker shows no new or updated entries.  
- No “bug”-labeled PRs or regression reports in the feed.

---

## 6. Feature Requests & Roadmap Signals
**No feature requests or roadmap signals detected today.**  
- No new issues labeled `enhancement`, `feature`, or similar.  
- No community PRs proposing new functionality.  
- Project direction remains opaque; only dependency hygiene is visible.

---

## 7. User Feedback Summary
**No direct user feedback captured in the last 24h.**  
- No issue comments, PR reviews, or discussion threads from end-users.  
- Satisfaction/dissatisfaction signals absent.  
- If you maintain a separate feedback channel (Discord, forum, surveys), consider cross-referencing it for a fuller picture.

---

## 8. Backlog Watch
**No long-unanswered high-priority items surfaced in today’s data slice.**  
- The sole open PR ([#658](https://github.com/qhkm/zeptoclaw/pull/658)) is a low-risk Dependabot update; it should be reviewed/merged promptly to avoid version drift.  
- Recommend a periodic sweep of older open issues/PRs (beyond the 24h window) to identify stalled work.

---

### Key Takeaway
ZeptoClaw’s GitHub pulse for 2026-09-02 is **quiet** — only automated dependency maintenance. If the project aims for active community growth or feature velocity, consider:
1. Triage stale issues/PRs weekly.  
2. Publish a lightweight roadmap or “good first issue” list to invite contributions.  
3. Enable GitHub Discussions or a community chat to surface user pain points not captured in issues.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-09-02

## 1. Today's Overview

ZeroClaw shows **high architectural churn** with 82 total issue/PR updates in 24 hours, but **no new release**. The project is deep in a **security & runtime overhaul**: principal-based authentication (RFC #7141), WASM plugin migration, conversation/session architecture redesign, and granular sandbox policies. Most activity centers on **stacked PR chains** (#10248→#10321) rewriting the auth/session layer, plus multiple concurrent RFCs for conversation surfaces, file attachments, and provider wire protocols. Bug velocity is notable—several P0/P1 issues around config loss, delegate tool bypass, and SOP execution gaps. The project appears in a **"major version prep" phase** with heavy design review but limited merge throughput (13 PRs closed/merged vs 37 open).

---

## 2. Releases

**No new releases** in the last 24 hours. The project remains on v0.8.x (implied by issue #9896 referencing v0.8.4). All current work targets architectural foundations for a future major release.

---

## 3. Project Progress — Merged/Closed PRs (13)

| PR | Title | Area | Status |
|----|-------|------|--------|
| [#9352](https://github.com/zeroclaw-labs/zeroclaw/pull/9352) | feat(observability): cross-turn conversation correlation to OTel export | observability, OTel | **CLOSED** |
| [#10063](https://github.com/zeroclaw-labs/zeroclaw/pull/10063) | fix: Anthropic-compatible gateways reject image_url in tool results | provider | **CLOSED** |
| [#10040](https://github.com/zeroclaw-labs/zeroclaw/pull/10040) | ci: restore Lint timeout headroom for fork PRs | CI | **CLOSED** |
| [#10306](https://github.com/zeroclaw-labs/zeroclaw/pull/10306) | ci: gate web/ TypeScript in required CI | CI, web | **CLOSED** |
| [#9395](https://github.com/zeroclaw-labs/zeroclaw/pull/9395) | Bug: plugin wasi:http egress has no destination policy | security, WASM | **CLOSED** |

**Key advances**: Observability now correlates turns via `conversation_id`; provider image handling fixed for compatible gateways; CI stability improved for forks and web type-checking; WASI HTTP egress policy gap closed.

---

## 4. Community Hot Topics — Most Active Discussions

| Item | Type | Comments | Core Debate |
|------|------|----------|-------------|
| [#9487](https://github.com/zeroclaw-labs/zeroclaw/issues/9487) | RFC | 31 | **Runtime-owned conversation sessions & transport adapters** — Revision 5 proposing daemon-owned session lifecycle, replacing agent-owned model. High risk, architecture-wide impact. |
| [#9488](https://github.com/zeroclaw-labs/zeroclaw/issues/9488) | RFC | 25 | **Unified file/attachment architecture** — Revision 10 standardizing how files flow across channels (web, ACP, Discord, etc.). Coupled to #9487. |
| [#6996](https://github.com/zeroclaw-labs/zeroclaw/issues/6996) | RFC | 20 | **Granular sandbox policy** — Unifying app-layer path admission with OS sandboxes (Bubblewrap, Landlock, Seatbelt). Stalled since May, updated today. |
| [#8396](https://github.com/zeroclaw-labs/zeroclaw/issues/8396) | RFC | 17 | **Wire protocol as first-class in provider construction** — Decoupling provider identity from model alias; enables multi-provider routing. |
| [#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) | Tracker | 14 | **Maintainer decision queue** — 14 comments show backlog of RFCs awaiting verdict. Signals review bottleneck. |
| [#10050](https://github.com/zeroclaw-labs/zeroclaw/issues/10050) | RFC | 12 | **Verbatim channel send via gateway** — Bypass agent turn for raw channel messaging. Security-sensitive (risk:high). |
| [#10076](https://github.com/zeroclaw-labs/zeroclaw/issues/10076) | RFC | 8 | **Composable WASM plugin runtime** — Core APIs, typed extension points, replaceable providers. Depends on #10526 for event vocabulary. |
| [#10526](https://github.com/zeroclaw-labs/zeroclaw/issues/10526) | RFC | 1 (new) | **Append-only session event history & deterministic replay** — Foundational for branching, derived agents, audit. Authored same person as #9487/#9488. |

**Underlying needs**: Contributors are **re-architecting the conversation/session substrate** (sessions, events, files, channels) while simultaneously hardening **security boundaries** (principals, sandboxes, auth). The volume of RFCs (7 active, all `risk:high`) suggests a **coordinated platform reset**—likely targeting v1.0. Maintainer review capacity is the visible constraint (#8692 tracker has 14 comments but no resolution).

---

## 5. Bugs & Stability — Ranked by Severity

| Severity | Issue | Component | Fix PR? | Summary |
|----------|-------|-----------|---------|---------|
| **S0 (data loss)** | [#10495](https://github.com/zeroclaw-labs/zeroclaw/issues/10495) | config/onboarding | ❌ | `Config::save()` overwrites populated `config.toml` with near-empty file (109 KB → 702 B). **Critical for operators**. |
| **S0 (security)** | [#8279](https://github.com/zeroclaw-labs/zeroclaw/issues/8279) | tool/delegate | ❌ | Delegate tool bypasses parent tool allowlist — sub-agent invokes excluded tools. |
| **S1 (workflow blocked)** | [#10063](https://github.com/zeroclaw-labs/zeroclaw/issues/10063) | provider | ✅ **Closed** | Anthropic-compatible gateways reject `image_url` in tool results. |
| **S2 (degraded)** | [#10523](https://github.com/zeroclaw-labs/zeroclaw/issues/10523) | runtime/daemon | ❌ | Bootstrap files (`AGENTS.md`, `SOUL.md`, etc.) silently truncated at 6,000 chars when `compact_context` enabled. |
| **S2** | [#10513](https://github.com/zeroclaw-labs/zeroclaw/issues/10513) | runtime/daemon (SOP) | ❌ | `sops.run` RPC returns run ID but no driver executes steps — silent no-op. |
| **S2** | [#9779](https://github.com/zeroclaw-labs/zeroclaw/issues/9779) | daemon, SOP | ❌ | Documented default `sops_dir` ignored; SOP subsystem never loads, no error/log. |
| **S2** | [#7899](https://github.com/zeroclaw-labs/zeroclaw/issues/7899) | channel (STT) | ❌ | OpenAI Whisper provider ignores env-based credentials; only reads config file. |
| **S2** | [#9850](https://github.com/zeroclaw-labs/zeroclaw/issues/9850) | tools (llm_task) | ❌ | `llm_task` uses legacy provider factory, loses alias-specific config (Azure/OAuth). |
| **Medium** | [#9896](https://github.com/zeroclaw-labs/zeroclaw/issues/9896) | memory, CLI | ❌ | Startup banner reports `Memory: none` when SQLite backend active — misleading status. |

**Pattern**: Config persistence, delegate security, and SOP execution have **multiple concurrent S0/S2 bugs** with no fix PRs visible. The config overwrite (#10495) and delegate bypass (#8279) are the most operator-impacting.

---

## 6. Feature Requests & Roadmap Signals

| Signal | Source | Likelihood for Next Major Version |
|--------|--------|-----------------------------------|
| **Principal-owned sessions & storage isolation** | PR stack #10248→#10321 (9 PRs, 7 stacked) | **Very High** — Actively being merged in stages; RFC #7141 Rev 8 ratified. |
| **WASM plugins replacing compile-time features** | [#8850](https://github.com/zeroclaw-labs/zeroclaw/issues/8850) (tracker), [#10076](https://github.com/zeroclaw-labs/zeroclaw/issues/10076) (RFC) | **High** — Tracker accepted, RFC in review; shrinks binary, enables runtime extensibility. |
| **Runtime-owned conversation sessions** | [#9487](https://github.com/zeroclaw-labs/zeroclaw/issues/9487) (RFC Rev 5) | **High** — 31 comments, Revision 5, author also driving #9488 & #10526. |
| **Unified file/attachment architecture** | [#9488](https://github.com/zeroclaw-labs/zeroclaw/issues/9488) (RFC Rev 10) | **High** — Coupled to session redesign; needed for multi-channel parity. |
| **Append-only event history & replay** | [#10526](https://github.com/zeroclaw-labs/zeroclaw/issues/10526) (RFC, new) | **Medium-High** — Foundational for branching/derived agents; same author as session RFCs. |
| **Wire protocol first-class in providers** | [#8396](https://github.com/zeroclaw-labs/zeroclaw/issues/8396) (RFC) | **Medium** — 17 comments, enables multi-provider routing; depends on auth stack landing. |
| **Granular sandbox policy unification** | [#6996](https://github.com/zeroclaw-labs/zeroclaw/issues/6996) (RFC, stale) | **Low-Medium** — Stalled since May; OS sandbox backends need alignment. |
| **Verbatim channel send via gateway** | [#10050](https://github.com/zeroclaw-labs/zeroclaw/issues/10050) (RFC) | **Low** — Security-sensitive (`risk:high`); likely deferred until auth/session stable. |

**Prediction**: The **principal/session/auth stack (#10248→#10321)** and **WASM plugin migration (#8850)** will land first. Conversation surface RFCs (#9487, #9488, #10526) are design-phase but tightly coupled — expect a combined "v1.0 conversation platform" milestone.

---

## 7. User Feedback Summary — Pain Points & Use Cases

| Pain Point | Evidence | Affected Users |
|------------|----------|----------------|
| **Config silently destroyed** | [#10495](https://github.com/zeroclaw-labs/zeroclaw/issues/10495): 109 KB config → 702 B on test run | Operators with complex multi-agent configs |
| **Delegate tool ignores security policy** | [#8279](https://github.com/zeroclaw-labs/zeroclaw/issues/8279): Sub-agent invokes parent-excluded tools | Security-conscious deployments, multi-tenant |
| **SOP subsystem dead by default** | [#9779](https://github.com/zeroclaw-labs/zeroclaw/issues/9779): Documented default `sops_dir` ignored | Cron/channel users expecting SOPs |
| **Bootstrap context truncated invisibly** | [#10523](https://github.com/zeroclaw-labs/zeroclaw/issues/10523): 6K char limit on `AGENTS.md`/`SOUL.md` | Users with large workspace instructions |
| **Misleading memory status** | [#9896](https://github.com/zeroclaw-labs/zeroclaw/issues/9896): Reports `none` when SQLite active | All daemon operators relying on `zeroclaw status` |
| **WASI HTTP egress unconstrained** | [#9395](https://github.com/zeroclaw-labs/zeroclaw/issues/9395): No destination policy for plugin egress | WASM plugin authors, sandboxed workloads |
| **OpenAI STT ignores env vars** | [#7899](https://github.com/zeroclaw-labs/zeroclaw/issues/7899): Requires config file for API key | Container/12-factor deployments |
| **Nix install path undocumented** | [#5269](https://github.com/zeroclaw-labs/zeroclaw/issues/5269): `cargo binstall zeroclaw` path not validated | Nix users, new adopters |

**Satisfaction signals**: Low — multiple S0/S2 bugs with **silent failure modes** (no errors, no logs, no warnings). Users discover issues via audit or unexpected behavior. The "good first issue" label on #5269 (open since April) suggests onboarding friction.

---

## 8. Backlog Watch — Stalled High-Value Items Needing Maintainer Attention

| Item | Type | Age | Why It Matters | Blockers |
|------|------|-----|----------------|----------|
| [#6996](https://github.com/zeroclaw-labs/zeroclaw/issues/6996) | RFC | 3+ months | Unifies dual sandbox layers; critical for supply-chain security | Needs maintainer review; `risk:high`, `priority:p2` |
| [#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) | Tracker | ~2 months | **Maintainer decision queue** — 14 comments, no resolutions visible | Review bandwidth; gate for all RFCs |
| [#8288](https://github.com/zeroclaw-labs/zeroclaw/issues/8288) | Tracker | 2+ months | SOP milestone (daemon-owned control plane to 5/5) — 13 capabilities | Depends on #9779, #10513 fixes; no recent PR movement |
| [#5269](https://github.com/zeroclaw-labs/zeroclaw/issues/5269) | Bug/Help Wanted | 5 months | Nix install path validation — "good first issue" but stale | Needs docs/runtime owner to verify `cargo binstall` path |
| [#9402](https://github.com/zeroclaw-labs/zeroclaw/pull/9402) | PR | 1+ month | Fix: Avoid nesting Docker sandbox in Docker runtime | `needs-maintainer-review`, `risk:high`; safety-critical |
| [#9338](https://github.com/zeroclaw-labs/zeroclaw/pull/9338) | PR | 1+ month | Add Crusoe as OpenAI-compatible provider | `status:blocked`, `do-not-merge`; needs provider review |
| [#10220](https://github.com/zeroclaw-labs/zeroclaw/pull/10220) | PR | 12 days | Cron `pre_hook` precondition gate — deterministic scheduling | `size:XL`, `risk:high`; distinguished contributor but no review |

**Critical observation**: The **maintainer decision queue (#8692)** is the system bottleneck. 7 active RFCs + multiple stacked PR chains + security-critical fixes all await verdict. The project's "high activity" metric masks a **review throughput crisis** — 50 PR updates but only 13 closures, with several high-risk PRs (#10220, #9402) aging without maintainer action.

---

## Health Indicators Summary

| Metric | Status | Trend |
|--------|--------|-------|
| **Architectural velocity** | 🟢 High | ↑ Multiple RFC

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/DenisZheng/agents-radar).*