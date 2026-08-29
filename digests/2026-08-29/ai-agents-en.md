# OpenClaw Ecosystem Digest 2026-08-29

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-08-29 05:09 UTC

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

# OpenClaw Project Digest — 2026-08-29

---

## 1. Today's Overview

OpenClaw shows **extremely high velocity** with 500 issues and 500 PRs updated in the last 24 hours (415 open issues, 272 open PRs). The project released **v2026.9.1-beta.1** today, focusing on gateway restart recovery and config-write reliability. However, the issue backlog reveals **multiple P0/P1 critical bugs** — notably a severe memory leak (growing to 15.5GB RSS), session lane starvation, silent message loss, and zombie process accumulation — indicating stability challenges beneath the rapid development pace. The PR queue shows active work on cloud worker policy enforcement, A2A/ACP protocol hardening, and UI improvements, but many high-severity issues lack fix PRs.

---

## 2. Releases

### v2026.9.1-beta.1 — *Released today*

**Highlights:**
- **Gateway restart recovery** (#130491): Preserves admitted turns across repeated Gateway restarts so restart-safe runs continue through each checkpoint and deliver their final response. (Thanks @jalehman)
- **Gateway config-write reliability**: Keeps committed config writable across restarts.

**No breaking changes or migration notes documented in the release summary.** This is a beta release; production users should validate restart recovery behavior in staging before upgrading.

---

## 3. Project Progress (Merged/Closed PRs Today)

228 PRs were merged/closed in the last 24h. Key merged fixes (from top-commented PRs):

| PR | Title | Area | Impact |
|----|-------|------|--------|
| [#116489](https://github.com/openclaw/openclaw/pull/116489) | feat(security): require acknowledgement for install policy warnings | Security, CLI, Gateway | Adds interactive confirmation for suspicious plugin/skill installs; hardens supply chain |
| [#128995](https://github.com/openclaw/openclaw/pull/128995) | feat: make full session actions available from chat header | Web UI | Exposes pin, mark unread, set icon, copy session ID, move to group from header menu |
| [#123535](https://github.com/openclaw/openclaw/pull/123535) | fix(ui): avoid session catalog refresh storms | Web UI | Reduces redundant sidebar refreshes on focus/presence changes |
| [#125471](https://github.com/openclaw/openclaw/pull/125471) | fix(models): keep Claude CLI OAuth available in Control UI | Auth, Web UI | Prevents loss of OAuth refresh ownership after gateway restart with legacy auth profiles |
| [#128223](https://github.com/openclaw/openclaw/pull/128223) | fix(cli): resolve alias targets from the write snapshot | CLI | Fixes `openclaw models aliases add` resolving from stale read snapshot |
| [#132200](https://github.com/openclaw/openclaw/pull/132200) | refactor(tests): reuse approval-binding temporary directory helper | Tests | DRY cleanup across 13 test cases |

**Themes:** Security hardening, UI/UX polish, auth reliability, test infrastructure.

---

## 4. Community Hot Topics (Most Active Issues/PRs)

| Item | Comments | 👍 | Labels | Core Need |
|------|----------|-----|--------|-----------|
| [#91588](https://github.com/openclaw/openclaw/issues/91588) Critical: Gateway Memory Leak | 23 | 1 | P0, impact:crash-loop, 🐚 platinum hermit | **RSS grows 350MB → 15.5GB over 2–3 days; OOM kills trigger launchd restart loops.** No fix PR linked. |
| [#48788](https://github.com/openclaw/openclaw/issues/48788) Centralized filename encoding utility | 20 | 1 | P3, clawsweeper:needs-product-decision | Multi-encoding Content-Disposition handling (Shift-JIS, EUC-KR, GB18030) across all channel adapters. |
| [#68596](https://github.com/openclaw/openclaw/issues/68596) Configurable streaming watchdog timeout | 15 | 8 | P2, impact:ux-friction | Extended-reasoning models (kimi-k2.5, DeepSeek-R1) trigger false watchdog warnings at 30s. |
| [#96834](https://github.com/openclaw/openclaw/issues/96834) WhatsApp 1:1 inbound image wedges lane ~3min | 14 | 1 | P1, impact:session-state, impact:message-loss | Image injection as native multimodal blocks main lane before processing starts (post-#95039). |
| [#84516](https://github.com/openclaw/openclaw/issues/84516) Codex app-server truncates replies at ~1000 chars | 13 | 2 | P1, impact:session-state, impact:message-loss | Silent truncation (`stop=null, aborted=false`); assistantText ends mid-sentence. |
| [#51429](https://github.com/openclaw/openclaw/issues/51429) Hardcoded working path `/Users/wangtao` | 12 | 0 | P2, bug:behavior, 🦞 diamond lobster | Fresh install creates `/Users/wangtao` and sets workspace there — hardcoded path shipped. |
| [#132273](https://github.com/openclaw/openclaw/pull/132273) fix(a2a): bound outbound JSON response bodies | — | 0 | P2, 🐚 platinum hermit, channel:a2a | **PR**: Prevents peer-controlled large JSON bodies from buffering unbounded in gateway. |

**Underlying needs:**  
- **Stability over features**: Memory leak, lane wedging, silent truncation, and zombie processes are production-blocking.  
- **Observability**: Plugin hooks lack trace context (#50291), making distributed debugging hard.  
- **Multi-encoding/channel parity**: Feishu, WhatsApp, Telegram, Discord all have media/mention handling gaps.

---

## 5. Bugs & Stability (Ranked by Severity)

| Severity | Issue | Summary | Fix PR? |
|----------|-------|---------|---------|
| **P0 — Critical** | [#91588](https://github.com/openclaw/openclaw/issues/91588) | Gateway RSS leak 350MB → 15.5GB → OOM kill → restart loop | ❌ No linked PR |
| **P1 — Crash/Message Loss** | [#96834](https://github.com/openclaw/openclaw/issues/96834) | WhatsApp image wedges main lane ~3min before processing | ❌ |
| **P1 — Silent Data Loss** | [#84516](https://github.com/openclaw/openclaw/issues/84516) | Codex replies truncated at ~1000 chars, no error signal | ❌ |
| **P1 — Session Corruption** | [#87711](https://github.com/openclaw/openclaw/issues/87711) | Empty assistant delivery (footer-only) on first turn after `/new` on Telegram | ✅ Closed (stale) |
| **P1 — Zombie Processes** | [#97616](https://github.com/openclaw/openclaw/issues/97616) | Unreaped hook/tool child processes accumulate as zombies | ❌ |
| **P1 — Silent Drop** | [#112259](https://github.com/openclaw/openclaw/issues/112259) | Inbound channel turn accepted then silently discarded (zero payload, no run, no transcript) | ❌ |
| **P2 — Regression** | [#87756](https://github.com/openclaw/openclaw/issues/87756) | Lobster workflow hangs on nested `/tools/invoke` when prompt-launched | ❌ |
| **P2 — Tool Failure Loop** | [#55694](https://github.com/openclaw/openclaw/issues/55694) | Agent retries failed tool calls indefinitely, spamming duplicate messages | ❌ |
| **P2 — Windows Regression** | [#105528](https://github.com/openclaw/openclaw/issues/105528) | `exec`/`read` tools return empty output on Windows (v2026.6.x) | ❌ |
| **P2 — Backup Corruption** | [#89257](https://github.com/openclaw/openclaw/issues/89257) | `backup create --verify` exits 13, leaves corrupt `.tmp` archive | ❌ |
| **P2 — Cron Stall** | [#91892](https://github.com/openclaw/openclaw/issues/91892) | Cron jobs stall during model calls (`model_call:stream_progress` never completes) | ❌ |

**Pattern:** Most P0/P1 bugs are **open with no fix PR**, and several carry `clawsweeper:needs-live-repro` — indicating reproduction difficulty or maintainer bandwidth constraints.

---

## 6. Feature Requests & Roadmap Signals

| Issue | Votes | Signal | Likelihood for Next Version |
|-------|-------|--------|----------------------------|
| [#68596](https://github.com/openclaw/openclaw/issues/68596) Configurable streaming watchdog timeout | 8 | High — reasoning models need longer windows | **High** — low-risk config flag, clear user pain |
| [#53654](https://github.com/openclaw/openclaw/issues/53654) Discord `messageUpdate`/`messageDelete` support | 3 | Medium — enables edit-to-reprocess, delete-to-cancel | **Medium** — channel-specific, but common pattern |
| [#88154](https://github.com/openclaw/openclaw/issues/88154) Slack Modal support for interactive workflows | 1 | Medium — first-class Slack UX | **Low–Medium** — requires Slack API integration work |
| [#71058](https://github.com/openclaw/openclaw/issues/71058) Multiple Azure/Teams bots per gateway | 1 | Medium — enterprise multi-tenant need | **Medium** — schema change (`channels.msteams` from object to array) |
| [#9912](https://github.com/openclaw/openclaw/issues/9912) `maxTurns`/`maxToolCalls` config to limit iterations | 1 | Low — niche but safety-critical for runaway agents | **Low** — new config surface, needs design |
| [#14438](https://github.com/openclaw/openclaw/issues/14438) Plugin hot-reload without container restart (jiti cache invalidation) | 4 | High — developer experience | **Medium** — infra work, but high leverage for plugin authors |
| [#54373](https://github.com/openclaw/openclaw/issues/54373) Context Provenance: source/volatility metadata on injected context | 1 | Low — advanced agent observability | **Low** — research/RFC stage |

**Predictions:** Watchdog timeout config (#68596) and plugin hot-reload (#14438) are the most actionable near-term features. Multi-bot Teams (#71058) may land if enterprise demand grows.

---

## 7. User Feedback Summary

**Pain Points (from issue narratives):**
- **"Gateway becomes unusable after 2–3 days"** — memory leak forces manual restarts (#91588)
- **"Agent spams 20+ duplicate messages when a tool fails"** — no circuit breaker on tool retries (#55694, #78865)
- **"Images sent to agent vanish before reply"** — Feishu/WhatsApp media loss (#41744, #96834, #120735)
- **"Replies cut off at 1000 chars with no error"** — silent truncation erodes trust (#84516)
- **"Hardcoded path `/Users/wangtao` created on fresh install"** — basic QA gap (#51429)
- **"Cron jobs silently stall during model calls"** — background automation unreliable (#91892)
- **"Windows: `exec`/`read` return empty"** — platform regression (#105528)
- **"Subagent tool calls emit with no result, silently dropped"** — ~3.8% historical drop rate (#88856)

**Positive Signals:**
- Active PR velocity (228 merged/closed today) shows maintainer engagement.
- Security hardening (#116489) and UI polish (#128995, #123535) indicate product maturity focus.
- Beta release includes restart recovery — addressing a top operational pain point.

---

## 8. Backlog Watch (Long-Unanswered Important Items)

| Item | Age | Severity | Why It Matters | Status |
|------|-----|----------|----------------|--------|
| [#91588](https://github.com/openclaw/openclaw/issues/91588) Memory Leak | 81 days | P0 | **Production-blocking**; causes OOM restarts daily | Open, no fix PR, `clawsweeper:needs-live-repro` |
| [#48788](https://github.com/openclaw/openclaw/issues/48788) Filename Encoding Utility | 165 days | P3 | Architectural gap affecting all non-UTF-8 channels | Open, `clawsweeper:needs-product-decision` |
| [#54488](https://github.com/openclaw/openclaw/issues/54488) Session Lane Starvation | 157 days | P1 | Followup drain blocks inbound for 20–30min | Open, `clawsweeper-recovery-stuck` |
| [#50291](https://github.com/openclaw/openclaw/issues/50291) Plugin Hooks Trace Context | 163 days | P2 | Blocks observability/distributed tracing | Open, `clawsweeper:fix-shape-clear` |
| [#41744](https://github.com/openclaw/openclaw/issues/41744) Feishu Image Media Loss | 172 days | P1 | Media silently dropped in outbound payload | Open, `clawsweeper:linked-pr-open` |
| [#14438](https://github.com/openclaw/openclaw/issues/14438) Plugin Hot-Reload | 199 days | P3 | Major DX friction for plugin developers | Open, `clawsweeper-recovery-stuck`

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: Personal AI Agent Ecosystem (2026-08-29)

---

## 1. Ecosystem Overview

The open-source personal AI agent landscape shows **extreme polarization**: three projects (OpenClaw, CoPaw, ZeroClaw) operate at **>500 daily issue/PR updates** with dedicated teams, while six projects (NullClaw, TinyClaw, ZeptoClaw, Moltis, PicoClaw, LobsterAI) see minimal or maintenance-only activity. A clear **bimodal maturity split** emerges: "platform-grade" projects (OpenClaw, IronClaw, CoPaw, Hermes, ZeroClaw, NanoClaw, NanoBot) invest in multi-channel gateways, plugin ecosystems, and enterprise features; "tool-grade" projects focus on single-user CLI/TUX experiences. **No project has reached 1.0 stable**—all are in beta/RC cycles with frequent breaking changes. The ecosystem is converging on **MCP/A2A protocol standardization**, **session persistence off event loops**, and **configurable sandbox policies** as shared infrastructure concerns.

---

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Release Status | Health Score* |
|---------|--------------|-----------|----------------|---------------|
| **OpenClaw** | 415 open / 500 updated | 272 open / 500 updated | **v2026.9.1-beta.1** today | 🟡 High velocity, critical P0 bugs |
| **CoPaw** | 45 updated | 36 updated | **v2.2.0-beta.3 & beta.2** today | 🟢 High velocity, beta iterating fast |
| **ZeroClaw** | 36 updated | 50 updated | None (RFC phase) | 🟡 Architectural churn, review bottleneck |
| **Hermes Agent** | 50 updated | 50 updated | None (v0.20.6 latest) | 🟡 High maintenance, OAuth cluster |
| **NanoClaw** | 3 new / 50 PR updates | 5 merged | None (accumulating) | 🔴 Critical regressions unfixed |
| **IronClaw** | 13 updated | 28 updated | **v1.4.0 stable** (2026-08-27) | 🟢 Healthy, perf-focused, shipping |
| **NanoBot** | 8 updated | 20 updated | None | 🟢 High velocity, stability focus |
| **LobsterAI** | 2 open | 9 merged | **2026.8.28** (patch) | 🟢 Stabilizing, regular cadence |
| **PicoClaw** | 1 updated | 1 merged | None | 🟡 Low velocity, incremental |
| **Moltis** | 1 new | 0 | None | 🔴 Dormant, 1 blocker bug |
| **NullClaw / TinyClaw / ZeptoClaw** | 0 | 0 | None | ⚫ Inactive |

*Health Score: 🟢 = shipping + stability focus; 🟡 = high velocity but open critical issues; 🔴 = blocking regressions; ⚫ = inactive

---

## 3. OpenClaw's Position

**Advantages vs Peers:**
- **Largest scale & velocity**: 10× issue/PR volume of next project; 228 PRs merged in 24h
- **Broadest channel coverage**: WhatsApp, Feishu, Discord, Slack, Telegram, Teams, A2A/ACP — only CoPaw matches breadth
- **Gateway architecture**: Centralized multi-tenant gateway with restart recovery (shipped today), config-write reliability
- **Security hardening**: Supply-chain acknowledgements (#116489), plugin install policies — ahead of most peers

**Technical Approach Differences:**
- **Gateway-centric** vs. NanoBot/IronClaw's embedded-agent model; enables multi-user, multi-channel from single process
- **Session lanes & turn admission** — unique concurrency control for channel fairness (but source of P1 bugs #96834, #54488)
- **Plugin/skill sandboxing** with WASM trajectory (shared with ZeroClaw, NanoClaw)

**Community Size**: Largest by contributor count (implied by PR throughput); however, **P0/P1 bug backlog with no fix PRs** (memory leak 81 days, lane starvation 157 days) signals maintainer bandwidth saturation despite velocity.

---

## 4. Shared Technical Focus Areas

| Requirement | Projects | Specific Needs |
|-------------|----------|----------------|
| **MCP Protocol Hardening** | OpenClaw (#132273), CoPaw (#7330, #7329), Hermes (5+ OAuth deadlock issues), ZeroClaw (#8396), NanoClaw (Codex provider #2361) | Streamable-HTTP dual-protocol, session resilience, auth-flow lock fixes, provider wire-protocol abstraction |
| **Session Persistence Off Event Loop** | NanoBot (#5579 merged), OpenClaw (implied by gateway restart recovery), IronClaw (compaction fixes #7975, #7976) | Cancellation-safe async writes, WebUI latency elimination, SQLite contention reduction |
| **Configurable Sandbox / Path Policies** | ZeroClaw (#6996 RFC), NanoClaw (#216 blocked 6mo), IronClaw (executor sandbox spike #7903), OpenClaw (plugin sandbox) | Unified policy layer, `/proc` secret leak fixes, filesystem/network granularity, OS sandbox backend parity |
| **Token/Context Budget Control** | NanoBot (#5388, #5584), IronClaw (#7891, #7981), CoPaw (#7331), Hermes (#97595, #97602) | MCP schema budgeting, reasoning-content replay bounds, tool-result size caps, model window metadata |
| **Provider Fallback & Model Discovery** | NanoBot (#5574), CoPaw (#7320, #7392), Hermes (#90031), ZeroClaw (#8396), NanoClaw (#2361) | Explicit fallback resolution, custom OpenAI-compatible discovery, reasoning_effort propagation |
| **Multi-Tenant / Hub Architecture** | CoPaw (#7318 — "coming in 2.2.0"), OpenClaw (gateway multi-user), IronClaw (notification inbox per-user), ZeroClaw (provenance RFC #6954) | RBAC, shared workspaces, admin skill mgmt, billing, conversation binding for agent-initiated turns |

---

## 5. Differentiation Analysis

| Dimension | Platform-Grade (Gateway/Server) | Tool-Grade (CLI/Local) |
|-----------|--------------------------------|------------------------|
| **Projects** | OpenClaw, CoPaw, Hermes, IronClaw, ZeroClaw, NanoClaw | NanoBot, PicoClaw, LobsterAI, Moltis |
| **Target Users** | Teams, enterprises, multi-channel deployments | Individual developers, power users |
| **Architecture** | Persistent gateway + channel adapters + plugin sandbox | Embedded agent loop + TUI/WebUI + local providers |
| **Key Features** | Multi-user sessions, channel parity, admin consoles, audit logs, Hub/RBAC | Fast startup, offline-first, editable installs, hackable config |
| **Release Cadence** | Frequent betas/RCs (OpenClaw, CoPaw, IronClaw) | Irregular patches (LobsterAI, PicoClaw) |
| **Pain Points** | Channel adapter bugs, gateway memory/scale, OAuth at scale | Windows regressions, local model timeouts, editable install leaks |

**Notable Outliers:**
- **IronClaw**: Only project with **stable promotion** (v1.4.0) and **Rust/Cargo** stack; focuses on **payload discipline** (projection, schema hints) and **NEAR AI integration**.
- **NanoBot**: **TypeScript/Python hybrid** with **Herdr TUI** and **WebUI**; unique **session-manager thread migration** and **explicit memory recall** design.
- **ZeroClaw**: **RFC-driven governance** (10+ concurrent RFCs); **WASM plugin observer** capability; **SSE streaming for webhooks**.
- **CoPaw**: **China-network resilience** (TLS/OpenSSL upgrade #7298); **multi-tenant Hub** as flagship v2.2 feature; **DingTalk/Feishu/WeChat** channel depth.

---

## 6. Community Momentum & Maturity

| Tier | Projects | Signals |
|------|----------|---------|
| **Rapid Iteration (Beta/RC Weekly)** | OpenClaw, CoPaw, NanoClaw, NanoBot | >20 PRs/day; multiple betas; conflict-labeled PR stacks; "good first issue" labeling |
| **Stabilizing / Hardening** | IronClaw, LobsterAI, Hermes | Stable/RC releases; perf bug clusters with production traces; CI hardening; design system landings |
| **Architectural Refactoring (Pre-Feature)** | ZeroClaw | RFC-dominated (top 10 issues all RFCs); maintainer decision queue bottleneck (#8692); 48 open PRs, 2 merged |
| **Maintenance / Low Velocity** | PicoClaw, Moltis | Single-digit updates; feature requests > bug fixes; no releases |
| **Dormant** | NullClaw, TinyClaw, ZeptoClaw | Zero 24h activity |

**Key Insight**: Velocity ≠ maturity. OpenClaw/CoPaw/ZeroClaw have highest velocity but also highest **unfixed P0/P1 density**. IronClaw/LobsterAI show **lower velocity but shipping stable artifacts** with clear migration paths.

---

## 7. Trend Signals for AI Agent Developers

| Trend | Evidence | Actionable Takeaway |
|-------|----------|---------------------|
| **MCP 2026-07-28 / Streamable-HTTP is the new baseline** | CoPaw (#7330), OpenClaw (#132273), Hermes (SDK lock fixes), ZeroClaw (#8396) | Implement dual-protocol clients with legacy fallback; test auth-flow lock resilience |
| **Session persistence must leave the event loop** | NanoBot (#5579 merged), IronClaw (compaction fixes), OpenClaw (gateway restart recovery) | Design async, cancellation-safe session stores; expect SQLite/contention issues at scale |
| **Sandbox policy is converging on "agent risk profile" model** | ZeroClaw (#6996), NanoClaw (#216), IronClaw (#7903), OpenClaw (plugin sandbox) | Define policy as data (not code); separate app-level from OS-backend; mark all API key headers sensitive |
| **Token observability = cost control** | CoPaw (#7335: 81% vs 96% cache hit), IronClaw (#7891: 49KB MIME → 19s), NanoBot (#5388, #5584) | Expose cache-hit metrics; budget MCP schemas; bound reasoning-content replay; project tool-result sizes |
| **Multi-tenancy is the next product frontier** | CoPaw Hub (#7318), OpenClaw gateway, IronClaw notification inbox, ZeroClaw provenance RFC | Plan for RBAC, shared workspaces, admin skill mgmt, per-user executors — even if single-user today |
| **Windows & China-network are hard requirements** | OpenClaw (#105528 exec/read empty), NanoClaw (#3645 startup hang), CoPaw (#7298 TLS/DPI), Hermes (#97288 UnicodeEncodeError) | CI on Windows + restricted networks; OpenSSL 3.2+/Python 3.12+ for desktop/Docker; surrogate-safe encoding |
| **Agent-initiated turns need first-class identity** | ZeroClaw (#6954 provenance), Hermes (delegation lifecycle #68499), IronClaw (hooks epic #7770) | Design conversation binding, reply contracts, and lifecycle hooks for non-user turns now — retrofit is costly |

---

**Bottom Line for Decision-Makers**: 
- **For production multi-channel deployments**: **IronClaw** (stable, Rust, perf-hardened) or **CoPaw** (beta but Hub-ready, China-network aware) lead.
- **For hackable local agent**: **NanoBot** (best DX, thread-safe persistence, explicit memory) or **LobsterAI** (regular patches, safety-tested).
- **For platform builders**: **OpenClaw** (reference scale) or **ZeroClaw** (cleanest RFC governance) — but budget for P0 bug triage.
- **Watch**: NanoClaw's setup driver stack (GUI installer path) and Hermes' Claude Agent SDK provider — both signal distribution model shifts.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-08-29

## 1. Today's Overview
NanoBot shows **high development velocity** with 20 PRs and 8 issues updated in the last 24 hours. The project is in an active refactoring and stabilization phase — 8 PRs were merged/closed today, focusing on session persistence off the event loop, memory architecture redesign, tool execution boundaries, and provider fallback logic. No new release was cut. The open PR queue (12) includes several priority-1 fixes (session persistence, cron sanitization, retry-event surfacing) that are likely to land soon. Community engagement is moderate: most issues/PRs have 0–2 comments and 0 reactions, indicating core-team-driven work rather than broad external discussion.

## 2. Releases
**No new releases today.** The latest published version remains whatever was shipped prior to 2026-08-29.

## 3. Project Progress — Merged / Closed PRs (8)

| PR | Type | Summary | Impact |
|----|------|---------|--------|
| [#5579](https://github.com/HKUDS/nanobot/pull/5579) | **bug, perf, p1** | Move session persistence off the event loop; add cancellation-safe async `SessionManager` APIs; migrate AgentLoop, compaction, recovery, slash-commands, SDK, WebUI to threaded persistence. | Eliminates event-loop stalls during large-session writes; fixes WebUI latency spikes. |
| [#5578](https://github.com/HKUDS/nanobot/pull/5578) | **test** | Stabilize Windows TUI clipboard-image test by waiting for composer placeholder instead of transient status line. | Reduces CI flakiness on Windows. |
| [#5577](https://github.com/HKUDS/nanobot/pull/5577) / [#5576](https://github.com/HKUDS/nanobot/pull/5576) | **bug, p2** | Run Herdr panes through full alternate-screen TUI layout; strip lifecycle/session/model/branch metadata reporting. | Restores full TUI fidelity inside Herdr; simplifies integration surface. |
| [#5574](https://github.com/HKUDS/nanobot/pull/5574) | **refactor, p2** | Introduce immutable `ProviderAttempt`; make fallback resolution explicit before execution; single source of truth for provider/model/transport/context-window/retry-policy. | Cleaner fallback semantics; easier debugging of provider selection. |
| [#5569](https://github.com/HKUDS/nanobot/pull/5569) | **refactor, p2** | Extract tool-call preparation, execution, batching, error observation, safety classification into `nanobot.agent.tools.execution`. | Decouples ReAct loop from tool mechanics; improves testability. |
| [#5575](https://github.com/HKUDS/nanobot/pull/5575) | **refactor, p2** | Remove `consolidationRatio` config; archive one deterministic old prefix while retaining latest 8 messages (extended to user turn). | Simplifies memory consolidation; predictable archive behavior. |
| [#5560](https://github.com/HKUDS/nanobot/pull/5560) | **feat, cli** | Make bare `nanobot` launch the native terminal agent; accept agent flags at root (`-m`, `--workspace`, `--session`, `--classic`). | Improves CLI ergonomics; matches user muscle memory. |
| [#4429](https://github.com/HKUDS/nanobot/issues/4429) | **issue closed** | Allow custom provider to configure thinking style (non-standard params like VolcEngine/Doubao). | Unblocks custom-provider reasoning-mode support. |

## 4. Community Hot Topics — Most Active Items

| Item | Activity | Underlying Need |
|------|----------|-----------------|
| [#5251](https://github.com/HKUDS/nanobot/issues/5251) **MCP Apps host support in WebUI** | 2 comments, created 2026-08-05, updated 2026-08-28 | Users want to render MCP server-attached UIs (per `io.modelcontextprotocol/ui` spec) inside NanoBot WebUI, not just receive text/image artifacts. Signals demand for richer MCP app integration. |
| [#5504](https://github.com/HKUDS/nanobot/pull/5504) **Surface model retry status (NAN-34)** | Conflict label, updated 2026-08-28 | Publish sanitized retry lifecycle events to WebSocket clients; render countdown in TUI/WebUI. Need: visibility into provider back-off so users aren’t left wondering why the model “hangs.” |
| [#5571](https://github.com/HKUDS/nanobot/pull/5571) **Require explicit memory recall by default** | Conflict label, p1 | Stop auto-injecting `MEMORY.md`, raw history, archived summaries into system prompt; route to opt-in `recall_memory` tool. Need: token-budget control & privacy — users don’t want entire history sent every turn. |
| [#5388](https://github.com/HKUDS/nanobot/pull/5388) **Budget model-visible MCP schemas** | Conflict label, created 2026-08-13 | Opt-in byte budget for MCP tool schemas sent to model; deterministic subset selection. Need: prevent context-window explosion when many MCP tools are registered. |

## 5. Bugs & Stability — Reported Today (Ranked by Severity)

| Severity | Issue | Description | Fix PR |
|----------|-------|-------------|--------|
| **P1 — Crash / Data Loss** | [#5582](https://github.com/HKUDS/nanobot/issues/5582) | Cron jobs created from WebUI quote/@mention turn crash at add/fire time because live `RuntimeContextBlock` objects are serialized into cron origin metadata. | [#5587](https://github.com/HKUDS/nanobot/pull/5587) (open, p2, security) — sanitizes persisted origin metadata, excludes live blocks. |
| **P1 — Event-loop Block** | [#5580](https://github.com/HKUDS/nanobot/pull/5580) (duplicate of merged #5579) | Session persistence runs on event loop, causing latency spikes. | Merged via [#5579](https://github.com/HKUDS/nanobot/pull/5579). |
| **P2 — Silent Retry** | [#5585](https://github.com/HKUDS/nanobot/issues/5585) | `RetryWaitEvent` (provider back-off notice) is CLI-only; `ChannelManager` discards it, so WebUI/TUI users see no retry feedback. | [#5504](https://github.com/HKUDS/nanobot/pull/5504) (open, conflict) — surfaces retry status to WebSocket clients. |
| **P2 — Unbounded Reasoning Replay** | [#5584](https://github.com/HKUDS/nanobot/issues/5584) | `Session.get_history` copies `reasoning_content`/`thinking_blocks` for **every** message indefinitely, bloating context. | No fix PR yet. |
| **P2 — Tool Exception Hint Missing** | [#5583](https://github.com/HKUDS/nanobot/issues/5583) | Recovery hint (“try a different approach”) appended only to error-shaped tool *results*, not raised exceptions. | [#5588](https://github.com/HKUDS/nanobot/pull/5588) (open, p2) — adds hint to raised exceptions, idempotent. |
| **P2 — Discarded Session Revival** | [#5589](https://github.com/HKUDS/nanobot/pull/5589) (open, p1) | Messages in pending/deferred queues of a discarded session can still publish to global bus during cleanup, reviving dead session. | Fix in progress. |
| **P2 — Oversized Tool Result Preview** | [#5590](https://github.com/HKUDS/nanobot/pull/5590) (open, p2) | Persisted JSON tool results previewed with first 1,200 chars; root-level fields (`ok`, `status`, `error`) may be truncated. | Fix summarizes JSON to preserve outcome fields. |
| **P3 — Doc Bug** | [#5592](https://github.com/HKUDS/nanobot/issues/5592) | `edit_file` doc implies `occurrence`, `line_hint`, `replace_all`, `expected_replacements` can be used together; they’re mutually exclusive. | No fix PR yet. |

## 6. Feature Requests & Roadmap Signals

| Signal | Source | Likelihood for Next Version |
|--------|--------|-----------------------------|
| **MCP Apps host support in WebUI** | [#5251](https://github.com/HKUDS/nanobot/issues/5251) (enhancement) | High — MCP ecosystem push; WebUI is a showcase surface. |
| **Explicit memory recall (opt-in)** | [#5571](https://github.com/HKUDS/nanobot/pull/5571) + [#5570](https://github.com/HKUDS/nanobot/pull/5570) (pluggable backend) | High — PRs are p1/p2, conflict-labeled but actively iterated; aligns with token-budget & privacy trends. |
| **Provider retry visibility in UI** | [#5504](https://github.com/HKUDS/nanobot/pull/5504), [#5585](https://github.com/HKUDS/nanobot/issues/5585) | High — UX gap; fix PR exists but conflicted. |
| **Bounded reasoning/history replay** | [#5584](https://github.com/HKUDS/nanobot/issues/5584) | Medium — clear perf win; no PR yet but low implementation risk. |
| **Ephemeral runtime-context blocks** | [#5586](https://github.com/HKUDS/nanobot/issues/5586) | Medium — enables transient context (e.g., one-shot citations) without polluting history. |
| **Custom provider thinking-style config** | [#4429](https://github.com/HKUDS/nanobot/issues/4429) (closed) | Done — merged via provider fallback refactor ([#5574](https://github.com/HKUDS/nanobot/pull/5574)). |
| **CLI ergonomics (`nanobot` = `nanobot agent`)** | [#5560](https://github.com/HKUDS/nanobot/pull/5560) | Done — merged. |

## 7. User Feedback Summary
- **Pain points**:  
  - WebUI cron reminders crash when created from quoted/mentioned messages ([#5582](https://github.com/HKUDS/nanobot/issues/5582)).  
  - No visible feedback during provider retry/back-off in WebUI/TUI ([#5585](https://github.com/HKUDS/nanobot/issues/5585)).  
  - Unbounded reasoning-content replay inflates context window ([#5584](https://github.com/HKUDS/nanobot/issues/5584)).  
  - `edit_file` parameter docs are misleading ([#5592](https://github.com/HKUDS/nanobot/issues/5592)).  
- **Use cases driving work**:  
  - MCP Apps (interactive server UIs) in WebUI.  
  - Custom providers with non-OpenAI reasoning params (VolcEngine/Doubao).  
  - Large-session persistence without UI jank.  
  - Token-budget control via explicit memory recall.  
- **Sentiment**: Core contributors are rapidly addressing stability (session persistence, cron safety, retry visibility) and architecture (memory, tool execution, provider fallback). External community signal is quiet — most issues/PRs are internally authored.

## 8. Backlog Watch — Stale / High-Impact Items Needing Attention

| Item | Age | Why It Matters | Status |
|------|-----|----------------|--------|
| [#5388](https://github.com/HKUDS/nanobot/pull/5388) **Budget model-visible MCP schemas** | 16 days (created 2026-08-13) | Prevents context-window OOM when many MCP tools registered; conflict-labeled, needs rebase/review. | Open, conflict |
| [#5504](https://github.com/HKUDS/nanobot/pull/5504) **Surface model retry status** | 5 days (created 2026-08-24) | UX critical for WebUI/TUI; conflict-labeled, blocks [#5585](https://github.com/HKUDS/nanobot/issues/5585). | Open, conflict |
| [#5571](https://github.com/HKUDS/nanobot/pull/5571) / [#5570](https://github.com/HKUDS/nanobot/pull/5570) **Explicit memory recall + pluggable backend** | 2 days | Major memory architecture shift; conflict-labeled, p1/p2, likely to land together. | Open, conflict |
| [#5584](https://github.com/HKUDS/nanobot/issues/5584) **Bounded reasoning replay** | 1 day | No PR yet; easy win for context-window hygiene. | Open, no PR |
| [#5586](https://github.com/HKUDS/nanobot/issues/5586) **Ephemeral runtime-context blocks** | 1 day | Enables transient citations/quotes without history pollution; no PR yet. | Open, no PR |

---

**Project Health Indicators**  
- 🟢 **Velocity**: High (20 PRs, 8 merged in 24h)  
- 🟢 **Stability Focus**: 5/8 merged PRs are bug/perf/test fixes  
- 🟡 **Community Engagement**: Low (mostly internal authors, 0–2 comments)  
- 🟡 **Release Cadence**: No cut today; backlog of p1 fixes suggests a patch release soon  
- 🔴 **Conflict Debt**: 5 open PRs carry `conflict` label — need maintainer triage to unblock

*Data sourced from GitHub API snapshot 2026-08-29; all links point to live HKUDS/nanobot items.*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-08-29

## 1. Today's Overview
Hermes Agent shows **high maintenance velocity** with 100 total issue/PR updates in the last 24 hours (50 issues, 50 PRs). The project is actively addressing a cluster of OAuth-backed MCP server deadlocks, desktop backend stability on Linux/Windows, context compression regressions, and provider-specific edge cases (Z.AI GLM, OpenAI-compatible endpoints). No new release was cut today, but multiple fix PRs are open targeting P1/P2 bugs. The volume of "duplicate" labels on MCP auth issues suggests a systemic root cause still being chased across several tickets.

## 2. Releases
**No new releases today.** The latest tagged version remains `v0.20.6` (per issue #97635). Users on `main` are running commits up to `c30ac90a` (2026-08-27).

## 3. Project Progress (Merged/Closed in Last 24h)
| PR / Issue | Type | Summary | Link |
|---|---|---|---|
| #38193 | Bug fix (closed) | OAuth-backed MCP server deadlock after keepalive reconnect — root cause: auth-flow generator lock released cross-task | [Issue #38193](https://github.com/NousResearch/hermes-agent/issues/38193) |
| #81051 | Bug fix (closed, duplicate) | OAuth MCP connections permanently stuck ("parked") after teardown lock race in MCP SDK 1.26.0 | [Issue #81051](https://github.com/NousResearch/hermes-agent/issues/81051) |
| #49543 | Bug fix (closed) | OAuth MCP servers (Honeycomb) drop mid-session with lock error + 120s hangs | [Issue #49543](https://github.com/NousResearch/hermes-agent/issues/49543) |
| #93562 | Bug fix (closed, duplicate) | `hermes mcp test`/`login` fail with empty error (SDK lock deadlock); patch not applied | [Issue #93562](https://github.com/NousResearch/hermes-agent/issues/93562) |
| #84132 | Bug fix (closed, duplicate) | OAuth HTTP MCP server parks forever after auth-flow lock corruption; cached provider reused | [Issue #84132](https://github.com/NousResearch/hermes-agent/issues/84132) |
| #68824 | Feature (closed) | Cron `NO_WORK` wake-gate parity with OpenClaw precheck | [PR #68824](https://github.com/NousResearch/hermes-agent/pull/68824) |
| #36624 | Bug fix (closed) | Auto compression exhausting context in tool-heavy sessions | [Issue #36624](https://github.com/NousResearch/hermes-agent/issues/36624) |
| #76820 | Feature (closed, not planned) | Per-subagent model routing + API key pooling for delegation | [Issue #76820](https://github.com/NousResearch/hermes-agent/issues/76820) |

> **Note:** 4 PRs merged/closed, 7 issues closed. Several MCP OAuth issues closed as duplicates pointing to a common SDK-level lock corruption (#2644 / #2847 in python-sdk).

## 4. Community Hot Topics (Most Comments/Reactions)
| Item | Type | Comments | 👍 | Core Pain Point | Link |
|---|---|---|---|---|---|
| **#66616** | Issue (open) | 115 | 0 | **Skills index stale/degraded** — automated freshness probe failing; index 29.8h old (limit 26h). Blocks `/docs/skills` hub. | [#66616](https://github.com/NousResearch/hermes-agent/issues/66616) |
| **#38193** | Issue (closed) | 9 | 0 | MCP OAuth deadlock after keepalive reconnect — cross-task lock release | [#38193](https://github.com/NousResearch/hermes-agent/issues/38193) |
| **#96266** | Issue (open) | 6 | 1 | **Desktop Linux: profile backend killed ~10s after READY** — "Hermes couldn't start", retry/repair fail | [#96266](https://github.com/NousResearch/hermes-agent/issues/96266) |
| **#71998** | Issue (open) | 6 | 0 | `pre_llm_call` plugin context dropped for multimodal image turns | [#71998](https://github.com/NousResearch/hermes-agent/issues/71998) |
| **#89241** | Issue (open) | 4 | 0 | GLM-5 reasoning models killed by 90s non-stream stale detector during thinking phase | [#89241](https://github.com/NousResearch/hermes-agent/issues/89241) |
| **#90031** | Issue (open) | 4 | 1 | `reasoning_effort` dropped for custom OpenAI-compatible providers (llama.cpp) | [#90031](https://github.com/NousResearch/hermes-agent/issues/90031) |
| **#68499** | PR (open) | — | 0 | **Delegation lifecycle fix** — separate child lifecycle from task outcome; propagate fail-closed states | [#68499](https://github.com/NousResearch/hermes-agent/pull/68499) |
| **#65982** | PR (open) | — | 0 | **claude-agent-sdk provider** — official Agent SDK as first-class runtime under subscription OAuth (fail-closed) | [#65982](https://github.com/NousResearch/hermes-agent/pull/65982) |
| **#97676** | PR (open) | — | 0 | **Perf: route 39 pure-read SessionDB methods off writer lock** — SQLite contention fix (Pattern C) | [#97676](https://github.com/NousResearch/hermes-agent/pull/97676) |

**Underlying needs:**  
- **Reliability of long-running OAuth MCP connections** (5+ issues/PRs, all P2, same root cause in SDK lock handling)  
- **Desktop backend stability** on Linux (backend crash) and Windows (WebSocket UnicodeEncodeError, background delivery silent failure)  
- **Context/compression correctness** for 1M-context models (GLM-5.3 missing metadata, mid-turn pre-API compression bypass)  
- **Provider parity** for custom/OpenAI-compatible endpoints (reasoning_effort, streaming type safety)

## 5. Bugs & Stability (Ranked by Severity)
| Severity | Issue | Summary | Fix PR? | Link |
|---|---|---|---|---|
| **P1** | #96266 | Desktop Linux: forced-local backend killed ~10s after `HERMES_BACKEND_READY`; retry/repair fail | No | [#96266](https://github.com/NousResearch/hermes-agent/issues/96266) |
| **P2** | #97288 | Desktop Windows: WebSocket disconnect on every message — `UnicodeEncodeError` on surrogate `\ud83d` (fresh install) | No | [#97288](https://github.com/NousResearch/hermes-agent/issues/97288) |
| **P2** | #97635 | Desktop Windows: `/background` results silently not delivered (response generated+persisted, no error) | No | [#97635](https://github.com/NousResearch/hermes-agent/issues/97635) |
| **P2** | #89241 | GLM-5.3 killed by 90s non-stream stale detector during thinking; Coding endpoint reroutes 5.2→5.3 | No | [#89241](https://github.com/NousResearch/hermes-agent/issues/89241) |
| **P2** | #90031 | `reasoning_effort` dropped for custom OpenAI-compatible providers (llama.cpp) | No | [#90031](https://github.com/NousResearch/hermes-agent/issues/90031) |
| **P2** | #97382 | `AttributeError: 'int' object has no attribute 'lstrip'` in `_provider_stream_text_may_be_sse` during streaming | No | [#97382](https://github.com/NousResearch/hermes-agent/issues/97382) |
| **P2** | #97595 | `_STATIC_CONTEXT_LENGTHS` missing `glm-5.3` — falls back to 202K, premature compaction on 1M model | No | [#97595](https://github.com/NousResearch/hermes-agent/issues/97595) |
| **P2** | #97596 | BWS secret injection uses hardcoded `_EXTRA_ENV_KEYS` — custom provider API keys never injected | No | [#97596](https://github.com/NousResearch/hermes-agent/issues/97596) |
| **P2** | #97602 | Mid-turn Pre-API compression bypasses checkpoint-pruned estimate (regression from #96155 fix) | No | [#97602](https://github.com/NousResearch/hermes-agent/issues/97602) |
| **P2** | #93911 | Desktop relay abandons `bot_relay.deliver` after generic 30s timeout (Computer Use bot turns) | No | [#93911](https://github.com/NousResearch/hermes-agent/issues/93911) |
| **P2** | #65038 | `delegation.fallback_providers` ignored; delegated workers inherit parent fallback chain | No | [#65038](https://github.com/NousResearch/hermes-agent/issues/65038) |
| **P2** | #96416 | Weixin (iLink) adapter misclassifies stale session (-14/-2) as rate limit; blocks cron delivery | No | [#96416](https://github.com/NousResearch/hermes-agent/issues/96416) |
| **P2** | #97675 | MCP reconnect retries unsafe for write tools — needs bounded wait + retry for read-only | **Yes** (#97675) | [#97675](https://github.com/NousResearch/hermes-agent/pull/97675) |
| **P2** | #97677 | Teams: pasted images 401 — Bot Framework connector attachment downloads need auth | **Yes** (#97677) | [#97677](https://github.com/NousResearch/hermes-agent/pull/97677) |
| **P2** | #97680 | Desktop: isolate local backend from public dashboard auth (cookie/OAuth vs session-token conflict) | **Yes** (#97680) | [#97680](https://github.com/NousResearch/hermes-agent/pull/97680) |
| **P3** | #71998 | `pre_llm_call` plugin context dropped for multimodal image turns | No | [#71998](https://github.com/NousResearch/hermes-agent/issues/71998) |
| **P3** | #77423 | `search_files` silently returns 0 results for non-glob pattern with `target="files"` | No | [#77423](https://github.com/NousResearch/hermes-agent/issues/77423) |
| **P3** | #86571 | Windows TUI: mouse wheel/selection fail under Windows Terminal/ConPTY | No | [#86571](https://github.com/NousResearch/hermes-agent/issues/86571) |
| **P3** | #96153 | Create bot button disabled when name contains CJK characters | No | [#96153](https://github.com/NousResearch/hermes-agent/issues/96153) |
| **P3** | #97597 | Feishu adapter passes `extra_ua_tags` unconditionally — hard crash on `lark-oapi < 1.6.8` | No | [#97597](https://github.com/NousResearch/hermes-agent/issues/97597) |
| **P3** | #97639 | Honcho Session Summary persists model reasoning + stale cache reinjects it | No | [#97639](https://github.com/NousResearch/hermes-agent/issues/97639) |
| **P3** | #97321 | Compression summary message inserted twice in single cycle (race preflight vs tool-loop tail) | No | [#97321](https://github.com/NousResearch/hermes-agent/issues/97321) |

**Critical cluster:** MCP OAuth deadlock/parking (issues #38193, #81051, #49543, #93562, #84132, #91265, #77369) — all closed as duplicates or fixed, but #97675 addresses reconnect safety for write tools. The SDK-level lock corruption (python-sdk#2847) appears to be the root cause.

## 6. Feature Requests & Roadmap Signals
| Request | Category | Signals | Likelihood Next Version |
|---|---|---|---|
| **Per-subagent model routing + API key pooling** (#76820) | Delegation | Closed as `needs-decision` / `not-planned`; author asks for `delegation.model`/`provider` per subagent + key pooling | Low (explicitly not planned) |
| **Desktop Debug MCP server** (#95489) | Developer Tools / MCP | "LLM agents are first-class users" — native UI debugging tools for agents | Medium (innovation label, P3) |
| **Claude Agent SDK provider** (#65982) | Provider / Auth | First-class `claude-agent-sdk` runtime under subscription OAuth, fail-closed billing | High (large PR, addresses #25267, multiple related PRs merged) |
| **Native cross-platform approval delegation** (#47863) | Approval / Security | Config-driven approval routing (WeChat/WeCom → Feishu), replaces monkey-patch | Medium (P2, blast-moderate) |
| **Gateway route context for plugins** (#88832) | Plugin SDK | Stable session key + source metadata through lifecycle/LLM/tool middleware; inherited by delegated children | Medium (P3, needs-decision) |
| **Confirm agent model routing changes** (#97673) | Config / Safety | Default-on confirmation gate for agent-originated model routing changes | Medium (P3, needs-decision) |
| **Cron NO_WORK wake-gate parity** (#97679) | Cron / OpenClaw compat | OpenClaw-compatible `NO_WORK` stdout token for shared pre-check scripts | High (salvage of closed #68824) |
| **Kanban attachment preview in Desktop** (#84297, #84299) | Desktop / Kanban | Clickable filenames, image preview, generic plugin SDK capability | Medium (P3, TDD tests) |
| **Sanitized rich HTML email replies** (#93294) | Email / Gateway | `multipart/alternative` with Markdown canonical + sanitized HTML | Low (P3, needs-decision) |
| **Repository changes through Delegate Wave** (#97631) | Delegation / Safety | Opt-in fail-closed repo-routing policy; provenance-aware manifest for built-ins/plugins/MCP | Low (P3, needs-decision, broad scope) |

**Strongest signals:** Claude Agent SDK provider (#65982), Cron NO_WORK parity (#97679), Desktop auth isolation (#97680), MCP reconnect safety (#97675), SessionDB read-path performance (#97676).

## 7. User Feedback Summary
| Pain Point | Evidence | Affected Users |
|---|---|---|
| **Desktop Linux backend crashes** | "Profile backend killed ~10s after HERMES_BACKEND_READY — retry/repair fail" (#96266, 👍1) | Linux Desktop users on local backend |
|

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-08-29

---

## 1. Today's Overview
PicoClaw showed light but focused activity over the last 24 hours: one merged pull request expanding QQ Channel attachment handling and one open feature request proposing an "after-turn" steering mode to avoid interrupting in-progress agent turns. No new releases were published. The merged PR reflects ongoing investment in multi-modal QQ Channel support, while the open issue signals growing demand for more predictable message-queue semantics when users send rapid follow-ups. Overall project health appears steady with incremental platform enhancements and active design discussions.

---

## 2. Releases
**No new releases in the last 24 hours.**

---

## 3. Project Progress
| PR | Status | Domain | Summary |
|----|--------|--------|---------|
| [#1349](https://github.com/sipeed/picoclaw/pull/1349) | **Closed (merged)** | `channel` · `go` · `enhancement` | **feat(qq): support parsing and replying to more attachment types** — Adds parsing of QQ Channel emoji structures; handles incoming voice, image, video, and file messages; enables replying with local voice/image/video/file attachments (upload-before-send); prefers Markdown replies with graceful fallback. Merged 2026-08-29. |

*This PR closes a multi-month effort (opened 2026-03-11) to bring PicoClaw’s QQ Channel adapter to parity with richer media workflows.*

---

## 4. Community Hot Topics
| Item | Type | Activity | Link |
|------|------|----------|------|
| **#3342** | Issue (Feature) | 1 comment, 0 👍, updated 2026-08-28 | [View](https://github.com/sipeed/picoclaw/issues/3342) |
| **#1349** | PR (Enhancement) | Merged today, 0 👍 | [View](https://github.com/sipeed/picoclaw/pull/1349) |

**Analysis:**  
- **#3342** is the sole active discussion. The author (`unedtamps`) proposes an opt-in *“after-turn”* steering mode: instead of interrupting a running turn when a second user message arrives, queue the new message and process it after the current turn completes. This addresses a real UX pain point—users sending quick follow-ups currently cause the first task’s remaining tool calls to be skipped (“Skipped due to queued user message”). The request reflects a need for **deterministic, non-lossy message ordering** in interactive agent sessions.  
- **#1349** generated no public discussion but represents a significant platform capability expansion for QQ Channel users.

---

## 5. Bugs & Stability
**No bug reports, crashes, or regressions were filed or updated in the last 24 hours.**

---

## 6. Feature Requests & Roadmap Signals
| Request | Source | Signal Strength | Likelihood for Next Version |
|---------|--------|-----------------|-----------------------------|
| **Opt-in “after-turn” steering mode** (queue busy-session messages instead of interrupting) | [#3342](https://github.com/sipeed/picoclaw/issues/3342) | Medium — single advocate, clear use case, marked `[stale]` but recently updated | Moderate. The feature touches core steering logic; maintainers may want design consensus before implementation. Could appear as an experimental flag first. |
| **Richer QQ Channel media support** (emoji, voice, video, file upload/reply) | [#1349](https://github.com/sipeed/picoclaw/pull/1349) — **already merged** | High — completed, broadens platform parity | Already delivered. |

**Prediction:** The next minor release will likely include the merged QQ Channel media enhancements. The “after-turn” steering mode may be prototyped behind a config flag if maintainers prioritize multi-turn UX improvements.

---

## 7. User Feedback Summary
- **Pain point:** Users experience **message loss / task interruption** when sending a follow-up while the agent is still processing. The current behavior aborts remaining tool calls, which breaks workflows where users naturally send rapid clarifications.  
- **Use case:** Interactive chat scenarios (e.g., user asks a question, immediately adds a constraint) where preserving the first turn’s completion is critical.  
- **Satisfaction signal:** No explicit satisfaction/dissatisfaction metrics in the data, but the feature request’s existence and the `[stale]` tag suggest the issue has lingered without resolution—indicating **unmet need**.

---

## 8. Backlog Watch
| Item | Type | Age | Why It Needs Attention |
|------|------|-----|------------------------|
| [#3342](https://github.com/sipeed/picoclaw/issues/3342) | Feature Request | Opened 2026-08-21 (8 days), updated 2026-08-28 | Marked `[stale]` but recently revived; touches core steering semantics. Needs maintainer triage: accept/close/design-review. Long-unresolved UX issue affecting interactive usage. |

*No other long-unanswered PRs or critical issues surfaced in the 24-hour window.*

---

**Digest generated:** 2026-08-29 · **Data window:** 2026-08-28 → 2026-08-29 · **Source:** GitHub (sipeed/picoclaw)

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-08-29

## 1. Today's Overview
NanoClaw shows **high development velocity** with 50 PRs updated in the last 24 hours (5 merged/closed), though no new releases were cut. The project is in an active refactoring phase focused on the **setup driver protocol**, **machine-mode automation**, and **container/agent runtime stability**. Three new issues surfaced today, including a critical startup hang (`nanoclaw.sh` hanging indefinitely) and a hardcoded timeout killing long local-model turns. The PR queue is dominated by a large stacked series (39 PRs) modernizing the setup flow for machine-driven (GUI) installations, plus fixes for Slack DM privacy, approval adapter caching, and skill update reporting.

## 2. Releases
**No new releases today.** The project appears to be accumulating changes in `main` for a future cut. Watch for a release once the setup driver stack (PRs #3633–#3640) and critical bug fixes (#3642, #3645) land.

## 3. Project Progress — Merged/Closed PRs (Last 24h)
| PR | Title | Type | Impact |
|----|-------|------|--------|
| [#2361](https://github.com/nanocoai/nanoclaw/pull/2361) | `[codex] tighten codex provider contracts` | Refactor/Provider | Modernizes Codex provider to current `codex app-server` JSON-RPC contract; makes `CODEX_MODEL` optional; removes stale 40K context guidance. |
| [#2363](https://github.com/nanocoai/nanoclaw/pull/2363) | `fix(credential-proxy): proactively refresh expiring Anthropic OAuth tokens` | Fix/Security | Ports v1 fix (#1102) to v2; adds proactive token refresh for native credential proxy users (non-OneCLI). Prevents silent 401s after ~1 hour. |
| [#1102](https://github.com/nanocoai/nanoclaw/pull/1102) | `fix(credential-proxy): auto-refresh OAuth token, handle keychain-only auth` | Fix/Security | Original fix for OAuth token expiration; now superseded by #2363 for v2. |
| [#216](https://github.com/nanocoai/nanoclaw/pull/216) | `security: fix secret sanitization bypass via /proc and Read tool` | Security | **Blocked** — Addresses `unset` bypass via `/proc/self/environ`, `Read` tool, and subshells. Still open after 6+ months; needs maintainer decision. |
| [#2326](https://github.com/nanocoai/nanoclaw/pull/2326) | `docs: add issue templates (bug, enhancement, skill)` | Docs | Adds structured issue forms (bug, enhancement, skill) to `.github/ISSUE_TEMPLATE/`. Superseded by newer #3644. |

**Net progress:** Core authentication hardening (OAuth refresh) landed; Codex provider modernized; issue hygiene improved. The long-stalled secret-sanitization fix (#216) remains blocked.

## 4. Community Hot Topics — Most Active Items
| Item | Type | Comments | Signal |
|------|------|----------|--------|
| [#3645](https://github.com/nanocoai/nanoclaw/issues/3645) | Issue | 2 | **Critical startup regression** — `bash nanoclaw.sh` hangs with ASCII art but no logs/feedback. User reports zero output after banner. Blocks all new users. |
| [#2361](https://github.com/nanocoai/nanoclaw/pull/2361) | PR | (high historical) | Provider contract overhaul — indicates active Codex integration maintenance. |
| [#216](https://github.com/nanocoai/nanoclaw/pull/216) | PR | (high historical) | **Security bypass** — 3-vector secret leak via `/proc`, `Read` tool, subshells. Stalled 6+ months; "Blocked" status suggests architectural disagreement. |
| [#3633–#3640](https://github.com/nanocoai/nanoclaw/pull/3633) | PR Stack | — | **39-PR setup driver rewrite** — Machine-mode (GUI) setup protocol, auth gating, renderer parity tests, uninstall path. Core-team driven; high strategic priority. |

**Underlying needs:** 
- **Reliable onboarding** — #3645 suggests the entrypoint script is broken for newcomers.
- **Machine-first architecture** — The setup driver stack reveals a push to support native macOS app / GUI installers as first-class citizens.
- **Security closure** — #216's longevity indicates a hard trade-off between container isolation and host-side secret handling.

## 5. Bugs & Stability — Today's Reports (Ranked by Severity)
| Severity | Issue | Description | Fix PR? |
|----------|-------|-------------|---------|
| **Critical** | [#3645](https://github.com/nanocoai/nanoclaw/issues/3645) | `nanoclaw.sh` hangs indefinitely on startup; shows ASCII banner then zero output/logs. Blocks all new installs. | No |
| **High** | [#3643](https://github.com/nanocoai/nanoclaw/issues/3643) | Hardcoded `ABSOLUTE_CEILING_MS=1800000` (30 min) kills long local-model turns mid-stream. No config seam; affects OpenCode → local OpenAI-compatible servers. | No |
| **Medium** | [#3642](https://github.com/nanocoai/nanoclaw/pull/3642) | `update-skills` fails or silently reverts instead of reporting local adapter state. | **Yes** — #3642 (open) |
| **Medium** | [#3427](https://github.com/nanocoai/nanoclaw/pull/3427) | Agent runner: `send_card` drops callback actions (Slack/interactive surfaces). | **Yes** — #3427 (open) |
| **Medium** | [#3392](https://github.com/nanocoai/nanoclaw/pull/3392) | Slack: 1:1 DMs exposed to other channel members/owners/admins via "connect this DM" card. | **Yes** — #3392 (open) |
| **Medium** | [#3387](https://github.com/nanocoai/nanoclaw/pull/3387) | Approval flows reuse sibling adapter's cached DM in multi-instance installs → wrong bot identity. | **Yes** — #3387 (open) |

**No fix PRs yet for the two critical issues (#3645, #3643).** These should be triaged immediately.

## 6. Feature Requests & Roadmap Signals
| Request | Source | Likelihood for Next Release |
|---------|--------|-----------------------------|
| **Persist rate-limit/quota classification on task runs** | [#3599](https://github.com/nanocoai/nanoclaw/issues/3599) | Medium — Clear ops need; auto-retry on capacity return is high-value for scheduled tasks. |
| **Configurable `ABSOLUTE_CEILING_MS`** | [#3643](https://github.com/nanocoai/nanoclaw/issues/3643) | High — Blocking for local-model users; simple config seam. |
| **Machine-mode setup driver (GUI installer support)** | PRs [#3633](https://github.com/nanocoai/nanoclaw/pull/3633)–[#3640](https://github.com/nanocoai/nanoclaw/pull/3640) | **Very High** — 39-PR stack in progress; core-team driven; includes auth gating, renderer parity, uninstall path. |
| **Voice transcription V2 (container-side, sovereign)** | [#2003](https://github.com/nanocoai/nanoclaw/pull/2003) | Medium — Re-submission per maintainer feedback; moved to container. Depends on skill/runtime stability. |
| **Issue forms (GitHub native)** | [#3644](https://github.com/nanocoai/nanoclaw/pull/3644) | High — Follows #2326; improves triage. |

**Predicted next version:** Setup driver stack + OAuth refresh + Codex provider fixes + critical bug fixes (#3645, #3643, #3642). Voice V2 likely later.

## 7. User Feedback Summary
| Pain Point | Evidence | Affected Segment |
|------------|----------|------------------|
| **Broken first-run experience** | #3645: "hangs indefinitely with no feedback or logging" | New users / CI / automation |
| **Local model turns killed arbitrarily** | #3643: 30-min hard ceiling, no config, "WARN Killing container past absolute ceiling" | Self-hosted / local LLM users |
| **Silent task failures (no retry signal)** | #3599: Rate-limit failures indistinguishable from code bugs in `ncl tasks list` | Scheduled task operators |
| **Slack DM privacy leaks** | #3392: Private DMs exposed to channel admins/owners | Slack workspace admins |
| **OAuth tokens expire mid-session** | #2363 / #1102: 401s after ~1 hour, "silent and permanent" | Native credential proxy users |
| **Secret sanitization bypass** | #216: `/proc/self/environ`, `Read` tool, subshells leak `ANTHROPIC_API_KEY` | Security-conscious deployments |

**Sentiment:** Frustration on onboarding (#3645) and local-model viability (#3643). Positive signal on proactive security work (OAuth refresh) and GUI installer investment.

## 8. Backlog Watch — Stalled High-Value Items
| Item | Age | Status | Why It Matters |
|------|-----|--------|----------------|
| [#216](https://github.com/nanocoai/nanoclaw/pull/216) | 6+ months | **Blocked** | Security: 3-vector secret leak (`/proc`, `Read` tool, subshells). Affects all container runs. Needs architectural decision. |
| [#2003](https://github.com/nanocoai/nanoclaw/pull/2003) | 4 months | Open | Voice V2 — Sovereign, container-side transcription. Re-submitted per maintainer direction; blocked on skill/runtime readiness. |
| [#1879](https://github.com/nanocoai/nanoclaw/issues/1879) | (closed) | Closed → #2003 | Original voice transcription request; superseded. |
| [#3645](https://github.com/nanocoai/nanoclaw/issues/3645) | **Today** | Open | **Critical regression** — Zero-day for new installs. Needs immediate triage/fix. |
| [#3643](https://github.com/nanocoai/nanoclaw/issues/3643) | 1 day | Open | Hardcoded timeout killing valid workloads. Simple config fix; high impact for local-model users. |

**Maintainer attention needed now:** #3645 (startup hang), #3643 (configurable ceiling), #216 (security — unblock or close with rationale). The setup driver stack (#3633–#3640) is progressing well but should not distract from critical regressions.

---

**Project Health Indicators**
- 🟢 **Velocity:** Very high (50 PR updates/24h)
- 🟡 **Release Cadence:** None recently; changes accumulating
- 🔴 **Critical Bugs:** 2 unfixed (startup hang, hardcoded timeout)
- 🟢 **Security:** OAuth refresh landed; one major bypass stalled
- 🟢 **Strategic Direction:** Clear (machine-mode setup, container sovereignty, provider modernization)

**Recommendation:** Prioritize fixes for #3645 and #3643 before next cut. Resolve #216 (security) or document mitigation. The setup driver stack is the right long-term investment for GUI distribution.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-08-29

## 1. Today's Overview

IronClaw shipped **v1.4.0** (stable promotion of `1.4.0-rc.1`) on 2026-08-27, delivering a durable notification inbox and 81 commits since v1.3.0. The project shows **high velocity**: 28 PRs and 13 issues updated in the last 24h, with 15 PRs merged/closed — indicating strong maintainer throughput. The dominant theme is **performance & reliability hardening**: multiple PRs target tool-result size bounding, compaction fixes, loop termination, and extension payload projection. A parallel track is advancing **agent lifecycle hooks** (epic #7770) and **NEAR AI model capability surfacing** (issues #7969–#7971).

---

## 2. Releases

### `ironclaw-v1.4.0` (2026-08-27)
- **Scope**: Stable promotion of `1.4.0-rc.1`; 81 commits since `v1.3.0`.
- **Key Addition**: **Durable notification inbox** — runs publish authoritative outcomes and actionable gates to a per-user inbox, surfaced by the WebUI notification center.
- **Breaking Changes**: None documented in release notes (RC promoted without noted breakage).
- **Migration Notes**: No explicit migration steps; inbox is additive.
- **Link**: [Release notes](https://github.com/nearai/ironclaw/releases/tag/ironclaw-v1.4.0)

---

## 3. Project Progress (Merged/Closed PRs Today)

| PR | Title | Type | Impact |
|----|-------|------|--------|
| [#7899](https://github.com/nearai/ironclaw/pull/7899) | `feat(notifications): publish automation pre-run failures` | Feature | Durable `RunFailed` inbox notifications for automation fires that fail before run submission. |
| [#7901](https://github.com/nearai/ironclaw/pull/7901) | `fix(notifications): persist auth gates before enrichment` | Fix | Ensures `AuthenticationRequired` notifications survive auth-provider/enrichment outages. |
| [#7900](https://github.com/nearai/ironclaw/pull/7900) | `feat(notifications): publish durable resource blocks` | Feature | Maps `BlockedResource` run states to `RunBlocked` notifications with deduplication. |
| [#7982](https://github.com/nearai/ironclaw/pull/7982) | `fix(tools): stop sending the model after a result_read budget it cannot reach` | Fix | Corrects misleading error message that caused 5 retries on unreachable budget (prod run `13bad7f5`). |
| [#7979](https://github.com/nearai/ironclaw/pull/7979) | `test(extensions): enforce encoded output ownership` | Test/Architecture | Fail-closed gate inventories encoded/encrypted/binary/JSON-RPC output boundaries across extensions. |
| [#7980](https://github.com/nearai/ironclaw/pull/7980) | `ci: validate integration group topology` | CI | Pre-flight validation of Cargo group registrations against `tests/integration/group_*` directories. |
| [#7965](https://github.com/nearai/ironclaw/pull/7965) | `perf(tool-search, github): stop offering tools that match one incidental query term` | Perf | Raises BM25 threshold to avoid false-positive tool matches; prevents model from chasing phantom results. |
| [#5563](https://github.com/nearai/ironclaw/pull/5563) | `feat(webui): design system tokens + /playground` | Feature (long-running) | Design system for WebUI v2; tokens, playground — merged after 2-month review. |
| [#5084](https://github.com/nearai/ironclaw/pull/5084) | `Redesign the automations page` | Feature (long-running) | Ground-up UX redesign of Automations page aligned with new design system. |

**Summary**: 15 PRs closed/merged — heavy on **notifications durability**, **tool-result budgeting fixes**, **extension output contracts**, and **CI hardening**. Two long-running WebUI PRs finally landed.

---

## 4. Community Hot Topics (Most Active Issues/PRs)

| Item | Comments | Signals |
|------|----------|---------|
| [#7891](https://github.com/nearai/ironclaw/issues/7891) `perf(extensions): unprojected capability payloads + blind 24 KiB head-slice cost 14.3s of inference` | 10 👍 | **Critical perf regression**: 49 KB raw MIME headers pushed unasked into prompt → 19.2s model inference on two emails. Core team engaged; root cause = missing projection + head-slice fallback. |
| [#7770](https://github.com/nearai/ironclaw/issues/7770) `Epic: hook the agent lifecycle — after-turn, before-turn, compaction, and tool-result seams` | 4 👍 | **Architectural epic** to externalize "when X, do Y" into hook registrations. Phased, independently landable. High strategic value for extensibility. |
| [#7981](https://github.com/nearai/ironclaw/issues/7981) `perf(github, tools): raw list_repos payload + unhinted result_read schema cost 64 tool calls / 3m01s` | 3 👍 | **Tool-chain amplification**: 519 KB raw GitHub response → model issues 61 `result_read` calls. Highlights need for projection + schema hints. |
| [#7903](https://github.com/nearai/ironclaw/issues/7903) `Decision spike: persistent per-user sandboxed executor behind trusted host kernel` | 2 👍 | **Architecture decision**: move `CanonicalAgentLoopExecutor` into user Docker sandbox. PR [#7908](https://github.com/nearai/ironclaw/pull/7908) is the spike. |

**Underlying Needs**:
- **Payload discipline**: Extensions/tools must project/trim results *before* they hit the model context.
- **Schema honesty**: `result_read` and tool schemas must communicate real budgets/capabilities to avoid retry loops.
- **Lifecycle extensibility**: Teams want to inject logic (audit, policy, learning) without forking core.

---

## 5. Bugs & Stability (Reported Today, Ranked by Severity)

| Severity | Issue | Summary | Fix PR? |
|----------|-------|---------|---------|
| **Critical** | [#7891](https://github.com/nearai/ironclaw/issues/7891) | Unprojected MIME headers (49 KB) cause 19.2s inference on 2 emails | No PR yet; root cause identified |
| **High** | [#7981](https://github.com/nearai/ironclaw/issues/7981) | `github.list_repos` 519 KB → 64 tool calls / 3 min to list repos | Related: [#7986](https://github.com/nearai/ironclaw/issues/7986) (projection unused), [#7982](https://github.com/nearai/ironclaw/pull/7982) (budget messaging) |
| **High** | [#7987](https://github.com/nearai/ironclaw/issues/7987) | `flatten_top_level` rebuilds schema from whitelist, silently discards non-forbidden constraints | No PR |
| **Medium** | [#7930](https://github.com/nearai/ironclaw/issues/7930) | No way to reference prior tool result by reference → model re-emits payload verbatim | No PR |
| **Medium** | [#7985](https://github.com/nearai/ironclaw/pull/7985) | Missing document → misleading "input could not be encoded" error | PR open (fixes error classification) |
| **Low** | Loop non-termination (fixed) | [#7977](https://github.com/nearai/ironclaw/pull/7977) caps interactive wall-clock & repeated-output termination | PR open |

**Stability Note**: v1.4.0 shipped with notification inbox; no regressions reported against it yet. The bugs above are pre-existing surfaced by production traces.

---

## 6. Feature Requests & Roadmap Signals

| Signal | Source | Likelihood for Next Version |
|--------|--------|-----------------------------|
| **Agent lifecycle hooks** (after-turn, before-turn, compaction, tool-result) | Epic [#7770](https://github.com/nearai/ironclaw/issues/7770) | **High** — phased, each phase independently landable; core team authored |
| **NEAR AI model capability tags in UI** (modalities, input/output types) | Issues [#7969](https://github.com/nearai/ironclaw/issues/7969), [#7970](https://github.com/nearai/ironclaw/issues/7970), [#7971](https://github.com/nearai/ironclaw/issues/7971) | **High** — backend preserves capabilities; UI work scoped, 3 issues filed same day |
| **Persistent per-user sandboxed executor** | Spike [#7903](https://github.com/nearai/ironclaw/issues/7903) + PR [#7908](https://github.com/nearai/ironclaw/pull/7908) | **Medium** — spike open; architecture decision pending |
| **Tool result referencing** (avoid re-emitting payloads) | [#7930](https://github.com/nearai/ironclaw/issues/7930) | **Medium** — clear ROI, no PR yet |
| **Shared review router for post-run learning** | PR [#7958](https://github.com/nearai/ironclaw/pull/7958) (open) | **Medium** — replaces hidden skill installer; provider-neutral |
| **Compaction threshold derived from model window** | PR [#7976](https://github.com/nearai/ironclaw/pull/7976) (open) | **High** — PR open, core author, low risk |

---

## 7. User Feedback Summary (Pain Points & Use Cases)

| Pain Point | Evidence | Use Case |
|------------|----------|----------|
| **"List my GitHub repos" takes 3 minutes** | [#7981](https://github.com/nearai/ironclaw/issues/7981) — 519 KB raw payload, 64 tool calls | Developer productivity; simple read ops become multi-minute waits |
| **Email processing costs 20s inference** | [#7891](https://github.com/nearai/ironclaw/issues/7891) — 49 KB MIME headers unprojected | Email triage/summarization agents |
| **Model retries wrong budget 5×** | [#7982](https://github.com/nearai/ironclaw/pull/7982) — misleading `result_read` error message | Any tool returning large results |
| **Tool search returns false positives** | [#7965](https://github.com/nearai/ironclaw/pull/7965) — BM25 > 0 admits single-term matches | Agent tool discovery reliability |
| **Missing document → "input encode error"** | [#7985](https://github.com/nearai/ironclaw/pull/7985) | Memory/document read paths |
| **No visibility into model capabilities (image, audio, etc.)** | [#7969](https://github.com/nearai/ironclaw/issues/7969) | Model selection in WebUI/workspace config |

**Satisfaction Signal**: High engagement on perf issues (10+ comments on #7891) shows users *depend* on these paths and feel pain acutely. Quick merges on notification PRs (#7899, #7900, #7901) suggest the inbox feature is valued.

---

## 8. Backlog Watch (Long-Unanswered / Needing Maintainer Attention)

| Item | Age | Why It Matters |
|------|-----|----------------|
| [#7930](https://github.com/nearai/ironclaw/issues/7930) `perf(tools): allow tool arguments to cite a prior result by reference` | 2 days (0 comments) | **High leverage**: eliminates redundant output tokens across tool chains; no PR yet |
| [#7987](https://github.com/nearai/ironclaw/issues/7987) `tool schemas: flatten_top_level silently discards constraints` | 1 day (0 comments) | **Correctness risk**: schema constraints vanish without warning; affects all tool providers |
| [#7903](https://github.com/nearai/ironclaw/issues/7903) `Decision spike: persistent per-user sandboxed executor` | 3 days (2 comments) | **Architectural pivot**: needs explicit maintainer decision; spike PR [#7908](https://github.com/nearai/ironclaw/pull/7908) open |
| [#7958](https://github.com/nearai/ironclaw/pull/7958) `feat(learning): add shared review router` | 2 days (open, XL) | **New learning subsystem**; replaces hidden skill flag — needs review bandwidth |
| [#7977](https://github.com/nearai/ironclaw/pull/7977) `fix(loop): terminate on dominant repeated output, cap interactive wall clock` | 1 day (open, XL) | **Production stability**: addresses 70-min/593-call runaway; core author, needs review |

---

## Health Indicators

| Metric | Status |
|--------|--------|
| **Release Cadence** | ✅ v1.4.0 shipped (RC → stable in 2 days) |
| **PR Throughput** | ✅ 15 merged/closed in 24h |
| **Issue Triage** | ✅ 3 closed, 10 active; perf bugs get immediate attention |
| **Architectural Investment** | ✅ Epic #7770, spike #7903, learning router #7958 |
| **Technical Debt Paydown** | ✅ Compaction fixes (#7975, #7976, #7978), loop termination (#7977), CI topology (#7980) |
| **Documentation** | ✅ PRs explicitly tagged `scope: docs`; design system landed |

**Overall**: **Healthy, high-velocity project** with clear focus on **production hardening** (payload size, loop safety, error clarity) and **extensibility foundations** (hooks, sandbox executor, learning). The notification inbox in v1.4.0 completes a durability story; next cycle likely delivers lifecycle hooks and NEAR AI capability UI.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-08-29

## 1. Today's Overview
LobsterAI shipped a new patch release **2026.8.28** and closed 9 pull requests in the last 24 hours, indicating a focused stabilization sprint. Activity is heavily skewed toward maintenance: 3 stale issues were closed, 2 stale PRs merged, and several renderer/account fixes landed. Only 1 new PR and 2 open issues remain active, suggesting the team is clearing technical debt and preparing the next feature cycle. Overall project health appears strong—regular releases, high PR throughput, and systematic test coverage improvements.

## 2. Releases
### **2026.8.28** (2026-08-28)
| Change | PR | Author |
|--------|-----|--------|
| Login guide updates | [#2525](https://github.com/netease-youdao/LobsterAI/pull/2525) | @liuzhq1986 |
| Add plan model catalog in settings | [#2530](https://github.com/netease-youdao/LobsterAI/pull/2530) | @liuzhq1986 |

**Notes**: Minor feature enhancement (model catalog) and documentation. No breaking changes or migration steps mentioned.

---

## 3. Project Progress (Merged/Closed PRs Today)
| PR | Title | Area | Status |
|----|-------|------|--------|
| [#2572](https://github.com/netease-youdao/LobsterAI/pull/2572) | Release/2026.8.24 | renderer, build, docs, main, openclaw, cowork, windows, artifacts | **Merged** |
| [#2571](https://github.com/netease-youdao/LobsterAI/pull/2571) | Fix phone nickname | renderer | **Merged** |
| [#2570](https://github.com/netease-youdao/LobsterAI/pull/2570) | Resolve phone masking merge conflict | renderer | **Merged** |
| [#2569](https://github.com/netease-youdao/LobsterAI/pull/2569) | Fix phone nickname (duplicate) | renderer | **Merged** |
| [#2568](https://github.com/netease-youdao/LobsterAI/pull/2568) | Collapse more models + sync sidebar banner schedules | renderer, docs, main | **Merged** |
| [#2567](https://github.com/netease-youdao/LobsterAI/pull/2567) | Fix 2026.8.24 | renderer | **Merged** |
| [#1153](https://github.com/netease-youdao/LobsterAI/pull/1153) | Fix Gemini `/v1` URL concatenation bug | main (coworkFormatTransform) | **Merged** |
| [#1155](https://github.com/netease-youdao/LobsterAI/pull/1155) | In-session find (Ctrl+F) | renderer (cowork) | **Merged** |
| [#1156](https://github.com/netease-youdao/LobsterAI/pull/1156) | Vitest unit tests for commandSafety & coworkMemoryJudge | main (libs) | **Merged** |

**Highlights**:
- **URL bug fixed**: Gemini baseURLs ending in `/v1` now compose correctly (was missing `/`).
- **In-session search**: Ctrl/Cmd+F now works inside a conversation with precise highlight & navigation.
- **Safety net expanded**: Core safety (`commandSafety`) and memory-quality (`coworkMemoryJudge`) modules now have Vitest coverage.
- **UI polish**: Model list collapsible section + server-driven sidebar banners with version gating & cache recovery.

---

## 4. Community Hot Topics
| Item | Type | Comments | 👍 | Signal |
|------|------|----------|----|--------|
| [#2489](https://github.com/netease-youdao/LobsterAI/issues/2489) | Issue | 3 | 0 | User impatience for **v4 Pro** release—indicates strong anticipation for next major version. |
| [#2536](https://github.com/netease-youdao/LobsterAI/issues/2536) | Issue | 2 | 0 | **WeChat community full**—users want another official channel; community scaling pain point. |
| [#1154](https://github.com/netease-youdao/LobsterAI/issues/1154) | Issue | 2 | 0 | Stale test-coverage request finally **closed via PR #1156**—shows maintainer responsiveness to old tech-debt tickets. |
| [#1156](https://github.com/netease-youdao/LobsterAI/pull/1156) | PR | — | 0 | Merged test PR for two critical modules—community values reliability hardening. |

**Underlying needs**: Faster major releases, larger community capacity, and continued hardening of safety-critical paths.

---

## 5. Bugs & Stability
| Severity | Issue / PR | Description | Fix Status |
|----------|------------|-------------|------------|
| **High** | [#1151](https://github.com/netease-youdao/LobsterAI/issues/1151) / [#1153](https://github.com/netease-youdao/LobsterAI/pull/1153) | `buildOpenAIChatCompletionsURL` dropped `/` when baseURL ended with `/v1` → broken Gemini calls | ✅ **Fixed & merged** |
| Medium | [#1146](https://github.com/netease-youdao/LobsterAI/pull/1146) | New agent with duplicate name fails to load task records until re-switch | 🟡 **Open (stale)** — needs triage |
| Low | [#2570](https://github.com/netease-youdao/LobsterAI/pull/2570) | Phone-number masking merge conflict in account menu | ✅ **Fixed & merged** |

No new crashes or regressions reported today.

---

## 6. Feature Requests & Roadmap Signals
| Request | Source | Likelihood for Next Version |
|---------|--------|-----------------------------|
| **v4 Pro release** | [#2489](https://github.com/netease-youdao/LobsterAI/issues/2489) | High — explicit user demand, likely marketing-driven milestone |
| **Additional WeChat/Discord community** | [#2536](https://github.com/netease-youdao/LobsterAI/issues/2536) | Medium — ops/ community task, not code |
| **Agent task-record hydration on create** | [#1146](https://github.com/netease-youdao/LobsterAI/pull/1146) | Medium — UX bug, fix PR exists but stale |
| **More model-catalog granularity** | Release 2026.8.28 | High — already shipped incrementally |

---

## 7. User Feedback Summary
- **Pain points**:  
  - Community channels saturated (WeChat full).  
  - Agent creation UX glitch (duplicate-name race).  
  - Desire for next major version (v4 Pro).  
- **Positive signals**:  
  - In-session search (Ctrl+F) landed—directly addresses “find in long conversation” need.  
  - Model catalog & collapsible UI improve discoverability.  
  - Safety/test investments show commitment to reliability.  
- **Sentiment**: Impatient but engaged; users track releases closely and file actionable bugs.

---

## 8. Backlog Watch
| Item | Age | Why It Matters | Action Needed |
|------|-----|----------------|---------------|
| [#1149](https://github.com/netease-youdao/LobsterAI/issues/1149) | 151 days | `coworkMemoryExtractor` — core memory extraction, **zero tests**, complex regex logic | Assign owner; merge companion PR if ready |
| [#1151](https://github.com/netease-youdao/LobsterAI/issues/1151) | 151 days | Gemini URL bug — **fixed in #1153**, but issue still open | Close issue (fixed) |
| [#1146](https://github.com/netease-youdao/LobsterAI/pull/1146) | 151 days | Agent task-record regression — PR open, stale | Review & merge or close with reason |
| [#1154](https://github.com/netease-youdao/LobsterAI/issues/1154) | 151 days | Stale test request — **already merged via #1156** | Close issue (done) |

**Recommendation**: Clean up the three stale issues (#1149, #1151, #1154) and decide on #1146 this week to keep backlog hygiene high.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-08-29

## 1. Today's Overview
Moltis showed minimal activity in the past 24 hours with only **1 open issue** updated and **no pull requests or releases**. The sole activity is a newly filed bug report (#1246) describing a sandbox execution failure after adding a node. No merges, closes, or version bumps occurred. The project appears in a quiet maintenance phase with no active development velocity visible today.

## 2. Releases
**No new releases** published today. The latest release information is not provided in the current data snapshot.

## 3. Project Progress
**No merged or closed PRs** in the last 24 hours. No feature advancements or bug fixes were delivered via pull requests today.

## 4. Community Hot Topics
| Item | Type | Activity | Link |
|------|------|----------|------|
| **[Bug]: can't run on sandbox after a node is added** | Issue | 0 comments, 0 reactions, created & updated 2026-08-28 | [#1246](https://github.com/moltis-org/moltis/issues/1246) |

*Analysis*: The only community signal is a fresh bug report with no discussion yet. The issue suggests a regression or configuration gap in the sandbox execution path when the node topology changes — a scenario likely relevant for dynamic agent workflows.

## 5. Bugs & Stability
| Severity | Issue | Description | Fix PR |
|----------|-------|-------------|--------|
| **High (inferred)** | [#1246](https://github.com/moltis-org/moltis/issues/1246) | Sandbox execution fails after a node is added; blocks dynamic agent deployment workflows. Reporter confirms latest version, searched existing issues. | None yet |

*No other bugs, crashes, or regressions reported today.*

## 6. Feature Requests & Roadmap Signals
**No feature requests or roadmap discussions** captured in today’s data. The sole issue is a defect, not an enhancement.

## 7. User Feedback Summary
- **Pain point**: Inability to run agents in sandbox after modifying the node graph — indicates friction in iterative development or dynamic scaling scenarios.
- **Use case implied**: Users are actively modifying node configurations and expecting seamless sandbox re-execution.
- **Sentiment**: Neutral/technical — no frustration expressed, but the issue is filed as a blocker ("can't run"), suggesting functional impact.

## 8. Backlog Watch
| Item | Age | Status | Why It Matters |
|------|-----|--------|----------------|
| [#1246](https://github.com/moltis-org/moltis/issues/1246) | <1 day | Open, unassigned, no comments | Core sandbox functionality broken after node mutation; likely affects CI/CD, testing, and live agent updates. Needs triage and reproduction. |

*No long-stale PRs or issues surfaced in today’s window. This new bug should be prioritized for investigation to prevent workflow disruption.*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (QwenPaw) Project Digest — 2026-08-29

---

## 1. Today's Overview

CoPaw (QwenPaw) shows **very high velocity** with 81 total issue/PR updates in the last 24 hours. The project is in active beta for v2.2.0, with two beta releases shipped today (v2.2.0-beta.3 and v2.2.0-beta.2). The 73% issue closure rate (33/45) and 44% PR merge rate (16/36) indicate a team rapidly iterating toward a stable release. Major themes: MCP protocol upgrades, multi-tenant "Hub" preparation, provider model discovery fixes, and desktop/Docker TLS stack modernization.

---

## 2. Releases

### v2.2.0-beta.3 ([Release](https://github.com/agentscope-ai/QwenPaw/releases/tag/v2.2.0-beta.3))
| Change | Type | PR |
|--------|------|----|
| Add Streamable-HTTP dual-protocol MCP client with legacy fallback | Feature | [#7330](https://github.com/agentscope-ai/QwenPaw/pull/7330) |
| Abort hung session RPCs on teardown; recover stale `list_tools` | Bug Fix | [#7329](https://github.com/agentscope-ai/QwenPaw/pull/7329) |

**Migration note**: MCP clients using `streamable_http` transport will now auto-negotiate MCP 2026-07-28 protocol and fall back to legacy handshake-era clients. No breaking changes expected.

### v2.2.0-beta.2 ([Release](https://github.com/agentscope-ai/QwenPaw/releases/tag/v2.2.0-beta.2))
| Change | Type | PR |
|--------|------|----|
| Make startup failure cleanup cancellation-safe | Bug Fix | [#7194](https://github.com/agentscope-ai/QwenPaw/pull/7194) |
| Boost console E2E coverage: 23 targeted cases + extended assertions | Test | [#7327](https://github.com/agentscope-ai/QwenPaw/pull/7327) |

---

## 3. Project Progress — Merged/Closed PRs (Last 24h)

| PR | Title | Category | Linked Issue |
|----|-------|----------|--------------|
| [#7330](https://github.com/agentscope-ai/QwenPaw/pull/7330) | feat(mcp): Streamable-HTTP dual-protocol client with legacy fallback | MCP/Protocol | — |
| [#7329](https://github.com/agentscope-ai/QwenPaw/pull/7329) | fix(mcp): abort hung session RPCs on teardown, recover stale `list_tools` | MCP/Stability | [#6524](https://github.com/agentscope-ai/QwenPaw/issues/6524) |
| [#7320](https://github.com/agentscope-ai/QwenPaw/pull/7320) | fix(providers): restore reliable model discovery for custom OpenAI-compatible providers | Providers | [#7305](https://github.com/agentscope-ai/QwenPaw/issues/7305) |
| [#7386](https://github.com/agentscope-ai/QwenPaw/pull/7386) | fix(providers): migrate discovered model output limits | Providers | — |
| [#7388](https://github.com/agentscope-ai/QwenPaw/pull/7388) | fix(acp): use `max_completion_tokens` for explicit runtime limits | ACP/Providers | — |
| [#7381](https://github.com/agentscope-ai/QwenPaw/pull/7381) | fix(dingtalk): detect stale stream connections, bound SDK requests | Channels/DingTalk | [#5757](https://github.com/agentscope-ai/QwenPaw/issues/5757) |
| [#7331](https://github.com/agentscope-ai/QwenPaw/pull/7331) | fix(context): bound oversized single-line tool results | Context/Token Mgmt | [#6512](https://github.com/agentscope-ai/QwenPaw/issues/6512) |
| [#7384](https://github.com/agentscope-ai/QwenPaw/pull/7384) | perf(app): shared A-tier deferred startup architecture | Performance/Startup | — |
| [#7380](https://github.com/agentscope-ai/QwenPaw/pull/7380) | test: cut suite wall-clock 41%, drop zero-value tests | CI/Testing | — |
| [#7393](https://github.com/agentscope-ai/QwenPaw/pull/7393) | chore: bump version to v2.2.0b3 | Release | — |

**Key advances**: MCP session resilience (auto-reconnect + RPC abort), provider model discovery reliability, DingTalk channel stability, tool-result size bounding, and a deferred-startup architecture that makes the app "chat-ready" before full initialization.

---

## 4. Community Hot Topics

| Issue/PR | Comments | Reactions | Core Need |
|----------|----------|-----------|-----------|
| [#7318](https://github.com/agentscope-ai/QwenPaw/issues/7318) **QwenPaw Hub (multi-tenant) coming in 2.2.0 — what next?** | 13 | 1 👍 | Community shaping multi-tenant roadmap: RBAC, shared workspaces, admin skill mgmt, billing |
| [#7298](https://github.com/agentscope-ai/QwenPaw/issues/7298) **Desktop/Docker ship OpenSSL 3.0.x (Python 3.11) — carrier DPI resets handshakes** | 9 | — | TLS stack upgrade (Python 3.12+/OpenSSL 3.2+) for desktop & Docker to bypass carrier interference |
| [#5757](https://github.com/agentscope-ai/QwenPaw/issues/5757) **Feishu: first message replies, then silence (Docker & Platform)** | 15 | — | Channel connection lifecycle bug; fixed in [#7381](https://github.com/agentscope-ai/QwenPaw/pull/7381) for DingTalk, Feishu likely similar |
| [#6314](https://github.com/agentscope-ai/QwenPaw/issues/6314) **RemoteProtocolError: peer closed connection without complete message body** | 9 | — | Upstream connection management; qwenpaw sends FIN prematurely |
| [#7335](https://github.com/agentscope-ai/QwenPaw/issues/7335) **Prompt cache hit rate observability — 81% vs OpenCode 96%** | 3 | — | Cost optimization visibility; users want cache metrics dashboard |

**Underlying signals**: 
- **Multi-tenancy** is the #1 community ask (Hub launch imminent)
- **Network/TLS resilience** in restricted environments (China carrier DPI) blocks adoption
- **Observability** (cache hits, token usage, command streaming) is a growing pain point for production use

---

## 5. Bugs & Stability — Reported Today (Ranked by Severity)

| Severity | Issue | Status | Fix PR |
|----------|-------|--------|--------|
| **Critical** | [#7298](https://github.com/agentscope-ai/QwenPaw/issues/7298) Desktop/Docker TLS stack causes carrier DPI handshake resets (OpenSSL 3.0.x) | Open | — |
| **High** | [#7379](https://github.com/agentscope-ai/QwenPaw/issues/7379) PDF with 10+ Chinese chars in filename → `UNKNOWN_AGENT_ERROR` (no connection adapter) | Open | — |
| **High** | [#6427](https://github.com/agentscope-ai/QwenPaw/issues/6427) WebView2 render crash at `msedge.dll+0x36c7f6d` ~7s after start (v2.0.0+post.4) | Closed | — |
| **Medium** | [#7288](https://github.com/agentscope-ai/QwenPaw/issues/7288) Large MCP results bypass scroll compaction, overflow model context | Closed | — |
| **Medium** | [#6524](https://github.com/agentscope-ai/QwenPaw/issues/6524) MCP backend restart → client can't auto-recover, needs manual `list mcp` | Closed | [#7329](https://github.com/agentscope-ai/QwenPaw/pull/7329) ✅ |
| **Medium** | [#5757](https://github.com/agentscope-ai/QwenPaw/issues/5757) Feishu channel: first msg replies, then silence | Closed | [#7381](https://github.com/agentscope-ai/QwenPaw/pull/7381) (DingTalk fix, Feishu pending) |
| **Low** | [#7305](https://github.com/agentscope-ai/QwenPaw/issues/7305) Custom OpenAI-compatible provider: model discovery succeeds but UI not auto-populated | Closed | [#7320](https://github.com/agentscope-ai/QwenPaw/pull/7320) ✅ |

**Critical gap**: No PR yet for TLS stack upgrade (#7298) — blocks desktop/Docker users on restricted networks.

---

## 6. Feature Requests & Roadmap Signals

| Request | Issue | Likelihood for v2.2.0/v2.3.0 | Notes |
|---------|-------|------------------------------|-------|
| **Multi-tenant Hub (RBAC, shared workspaces, admin skills)** | [#7318](https://github.com/agentscope-ai/QwenPaw/issues/7318) | **High** — "coming in 2.2.0" per maintainer | Community voting on priorities |
| **Fallback model switching (auto on quota/error)** | [#5718](https://github.com/agentscope-ai/QwenPaw/issues/5718), [#4011](https://github.com/agentscope-ai/QwenPaw/issues/4011) | **High** — PR [#7392](https://github.com/agentscope-ai/QwenPaw/pull/7392) adds dedicated UI | Auto-switch on 429/5xx is the missing piece |
| **Prompt cache hit rate dashboard** | [#7335](https://github.com/agentscope-ai/QwenPaw/issues/7335) | **Medium** — "good first issue" labeled | Direct cost impact documented (81% vs 96%) |
| **System tray icon (Windows minimize-to-tray)** | [#3751](https://github.com/agentscope-ai/QwenPaw/issues/3751), [#5622](https://github.com/agentscope-ai/QwenPaw/issues/5622) | **Medium** — long-standing, desktop UX basics | Two duplicate issues, 4+ 👍 combined |
| **Steer mode / in-flight message injection (Codex-style)** | [#1775](https://github.com/agentscope-ai/QwenPaw/issues/1775) | **Low-Medium** — "good first issue", open since Mar | Requires backend + frontend coordination |
| **Session archiving (move inactive chats out of list)** | [#3187](https://github.com/agentscope-ai/QwenPaw/issues/3187) | **Low** — UI-only, closed but no PR merged | |
| **Real-time shell command output streaming** | [#4986](https://github.com/agentscope-ai/QwenPaw/issues/4986), [#4237](https://github.com/agentscope-ai/QwenPaw/issues/4237) | **Medium** — UX parity with Cursor/Warp | Partial: approval cards exist, streaming pending |

**Prediction**: v2.2.0 will ship Hub (multi-tenant) + fallback model UI + MCP 2026-07-28 support. v2.3.0 likely targets TLS upgrade, cache observability, and steer mode.

---

## 7. User Feedback Summary

| Pain Point | Evidence | Frequency |
|------------|----------|-----------|
| **Channel reliability (Feishu/DingTalk/WeChat)** | [#5757](https://github.com/agentscope-ai/QwenPaw/issues/5757) 15 comments, [#5030](https://github.com/agentscope-ai/QwenPaw/issues/5030) duplicate replies | High — multiple channels, Docker deployments |
| **TLS/Network blocking in China** | [#7298](https://github.com/agentscope-ai/QwenPaw/issues/7298) 9 comments, carrier DPI resets | High — blocks desktop & Docker adoption |
| **MCP session fragility** | [#6524](https://github.com/agentscope-ai/QwenPaw/issues/6524) 6 comments, [#7329](https://github.com/agentscope-ai/QwenPaw/pull/7329) fix merged | Medium — fixed in beta.3 |
| **Large output handling (shell, MCP, PDF)** | [#6512](https://github.com/agentscope-ai/QwenPaw/issues/6512) 4 comments, [#7288](https://github.com/agentscope-ai/QwenPaw/issues/7288) 2 comments, [#7379](https://github.com/agentscope-ai/QwenPaw/issues/7379) new | Medium — truncation, crashes, filename encoding |
| **Model discovery UX (custom providers)** | [#7305](https://github.com/agentscope-ai/QwenPaw/issues/7305) 2 comments, [#2777](https://github.com/agentscope-ai/QwenPaw/issues/2777) GPT-5 hardcoded list | Medium — fixed in [#7320](https://github.com/agentscope-ai/QwenPaw/pull/7320) |
| **Startup memory/performance** | [#6124](https://github.com/agentscope-ai/QwenPaw/issues/6124) 3 comments, 48GB+ leak on editable install | Low — niche (editable install), but severe |

**Satisfaction signals**: Users actively engage on Hub roadmap (#7318), contribute fixes (16 PRs merged), and file detailed bugs with packet captures/logs. Dissatisfaction centers on **network resilience** and **channel stability** — infrastructure issues, not core agent logic.

---

## 8. Backlog Watch — Stale/Important Items Needing Attention

| Item | Age | Why It Matters | Status |
|------|-----|----------------|--------|
| [#7298](https://github.com/agentscope-ai/QwenPaw/issues/7298) **TLS stack upgrade (OpenSSL 3.0.x → 3.2+/Python 3.12+)** | 4 days | Blocks users on carrier networks; affects desktop + Docker | **Open, no PR** — Critical |
| [#1775](https://github.com/agentscope-ai/QwenPaw/issues/1775) **Steer mode / in-flight correction** | 5 months | "Good first issue", high user value (Codex parity), 2 comments | **Open** — Needs design + frontend work |
| [#3751](https://github.com/agentscope-ai/QwenPaw/issues/3751) / [#5622](https://github.com/agentscope-ai/QwenPaw/issues/5622) **Windows system tray icon** | 4 months | Basic desktop UX, two duplicate issues | **Open** — No PR |
| [#7335](https://github.com/agentscope-ai/QwenPaw/issues/7335) **Prompt cache hit rate observability** | 2 days | "Good first issue", documented cost impact (81% vs 96%) | **Closed** but no PR merged — labeled for contribution |
| [#6874](https://github.com/agentscope-ai/QwenPaw/pull/6874) **Configurable MCP tool-call timeout** | 19 days | "Under Review", closes [#6724](https://github.com/agentscope-ai/QwenPaw/issues/6724), related to [#3997](https://github.com/agentscope-ai/QwenPaw/issues

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-08-29

## 1. Today's Overview

ZeroClaw is in a **high-velocity architectural refactoring phase** with no new releases but intense RFC and implementation activity. The project shows 36 issue updates and 50 PR updates in 24 hours, dominated by **design-level RFCs** (memory lifecycle, sandbox policy, provider wire protocol, computer-use, WASM plugins) and **runtime stabilization work** (skill-review crashes, concurrent turn handling, transcription language hints). Two PRs were merged/closed while 48 remain open — indicating a **heavy review backlog** with multiple XL-sized changes awaiting maintainer decisions. Security hardening (path policies, API key sensitivity) and multi-channel reliability (Telegram, WhatsApp, voice) are concurrent priorities.

## 2. Releases

**No new releases** in the last 24 hours. The project appears to be between release cycles, focusing on merging foundational RFC implementations before cutting a new version.

---

## 3. Project Progress — Merged/Closed Today

| PR / Issue | Type | Summary | Link |
|------------|------|---------|------|
| #8654 | Bug fix (closed) | **Skill-review fork panic** (out-of-range slice at `skills/review.rs:159`) causing daemon SIGSEGV after tool-heavy turns — root cause identified, fix in progress | [#8654](https://github.com/zeroclaw-labs/zeroclaw/issues/8654) |
| #9815 | Bug fix (closed) | **`forbidden_paths` unreachable** under `allowed_roots`/`workspace` — config logic flaw where allow-check short-circuits forbid-check | [#9815](https://github.com/zeroclaw-labs/zeroclaw/issues/9815) |
| #9425 | Bug fix (closed) | **Running SOP jobs lack operator cancellation** in web dashboard — no Stop/Cancel action for active runs | [#9425](https://github.com/zeroclaw-labs/zeroclaw/issues/9425) |
| #10329 | Bug fix (closed) | **Resilient wrapper truncation shadows loop-level context overflow recovery** for OpenAI-compatible providers — wrapper handles overflow before loop recovery engages | [#10329](https://github.com/zeroclaw-labs/zeroclaw/issues/10329) |
| #9711 | Bug fix (closed) | **Arduino flash temp directories not cleaned** on every exit — minor cleanup | [#9711](https://github.com/zeroclaw-labs/zeroclaw/issues/9711) |
| #10180 | Bug fix (closed) | **ZeroCode paste mutates hidden composer** while another surface owns input — bracketed-paste routing fix | [#10180](https://github.com/zeroclaw-labs/zeroclaw/issues/10180) |
| #10175 | Bug fix (closed) | **Google TTS API key header not marked sensitive** — `x-goog-api-key` exposed in logs | [#10175](https://github.com/zeroclaw-labs/zeroclaw/issues/10175) |

**Net progress**: 7 bugs closed (3 P1, 2 P2, 2 P3), all with fixes either merged or in-progress. No feature PRs merged today — the pipeline is RFC/design-heavy.

---

## 4. Community Hot Topics — Most Active Issues/PRs

| Item | Comments | Type | Core Tension / Need |
|------|----------|------|---------------------|
| [#6850](https://github.com/zeroclaw-labs/zeroclaw/issues/6850) **RFC: Decouple memory lifecycle policy from storage backends** | 21 | RFC (P2, high risk) | **Architectural boundary**: Memory trait owns storage ops; consolidation/governance should not be reimplemented per gateway/channel. 21 comments = deep design debate. |
| [#6954](https://github.com/zeroclaw-labs/zeroclaw/issues/6954) **RFC: Provenance, conversation binding, reply contract for internally initiated agent turns** | 16 | RFC (accepted, high risk) | **Agent autonomy semantics**: How to attribute/bind agent-initiated turns to conversations — identity stability, binding concurrency, reply lifecycle. Rev 2 after ratification correction. |
| [#6996](https://github.com/zeroclaw-labs/zeroclaw/issues/6996) **RFC: Granular sandbox policy — filesystem & network restrictions** | 15 | RFC (in-progress, high risk) | **Security drift**: Two policy layers (app-level `SecurityPolicy` + OS sandbox backends) have diverged. Need unified, agent-risk-profile-driven policy. |
| [#8396](https://github.com/zeroclaw-labs/zeroclaw/issues/8396) **RFC: Make wire protocol first-class in provider construction/onboarding** | 15 | RFC (high risk) | **Provider abstraction**: Current provider construction couples to specific wire protocols; need protocol-agnostic onboarding for multi-provider routing. |
| [#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) **Tracker: Maintainer decision queue for RFCs/design issues** | 14 | Tracker (accepted) | **Governance bottleneck**: 14 comments on the *decision queue itself* — maintainers are the rate-limiter for RFC ratification. |
| [#6909](https://github.com/zeroclaw-labs/zeroclaw/issues/6909) **RFC: Computer-use support for desktop screen interaction & input control** | 12 | RFC (high risk, desktop) | **New capability surface**: Bounded approval units, execution-time revalidation, session arming, sidecar trust — security-first design for desktop automation. |
| [#9975](https://github.com/zeroclaw-labs/zeroclaw/issues/9975) **RFC: Web bundle/daemon compatibility for `web_dist_dir`** | 8 | RFC (high risk, web) | **Deployment contract**: Capability negotiation as compatibility contract for gateway web bundles — Rev 3, central negotiation. |
| [#7822](https://github.com/zeroclaw-labs/zeroclaw/issues/7822) **RFC: WASM plugin lifecycle observer subscriptions** | 8 | RFC (high risk) | **Plugin observability**: Use reserved `PluginCapability::Observer` for host-owned completion sources — maintainer takeover Rev 2. |
| [#9330](https://github.com/zeroclaw-labs/zeroclaw/issues/9330) **RFC: AI-assisted PR pre-review and re-review** | 8 | RFC (accepted, high risk) | **Process automation**: Ratify AI review as comment-only SOP pipeline with human approval — folds production `pr-review-pilot` behavior. |
| [#10419](https://github.com/zeroclaw-labs/zeroclaw/issues/10419) **Feature: Stream agent-loop tokens from POST /webhook (SSE)** | 3 | Feature (high risk) | **Real-time UX**: Hosted Path A workers need token streaming via SSE instead of awaiting full JSON response. |

**Pattern**: Top 10 most-commented items are **all RFCs/trackers** — zero bug reports or feature requests. The community is debating **foundational architecture**, not incremental features. Maintainer decision queue (#8692) is itself a hot topic, confirming **review capacity is the primary constraint**.

---

## 5. Bugs & Stability — Today's Reports (Ranked by Severity)

| Severity | Issue | Component | Status | Fix PR? |
|----------|-------|-----------|--------|---------|
| **S1 / P1** | [#10408](https://github.com/zeroclaw-labs/zeroclaw/issues/10408) **Second message during active turn starts parallel run** → duplicate work/reply | runtime/daemon, channel:core | In-progress | [#10411](https://github.com/zeroclaw-labs/zeroclaw/pull/10411) (serialize same-session messages) |
| **S1 / P1** | [#10429](https://github.com/zeroclaw-labs/zeroclaw/issues/10429) **Deepgram/OpenAI transcription drops language hint** → non-English voice notes return empty, skipped | provider, channel:telegram | Open | [#10431](https://github.com/zeroclaw-labs/zeroclaw/pull/10431) (forward transcription language hints) |
| **S2 / P1** | [#10427](https://github.com/zeroclaw-labs/zeroclaw/issues/10427) **CI advisory scan failed** — yanked crate `chacha20 0.10.0` detected | dependencies, security | In-progress | Auto-fix via `cargo update -p chacha20` |
| **S2 / P2** | [#10432](https://github.com/zeroclaw-labs/zeroclaw/issues/10432) **ElevenLabs TTS API key header not marked sensitive** (`xi-api-key`) | channel, security | Accepted | No PR yet |
| **P2** | [#10195](https://github.com/zeroclaw-labs/zeroclaw/issues/10195) **Manifest schema validators recompile on every config resolution** — perf regression | config, runtime:wasm, tool:schema | Open | No PR yet |
| **P3** | [#9711](https://github.com/zeroclaw-labs/zeroclaw/issues/9711) Arduino flash temp dirs not cleaned on exit | hardware/peripherals | Closed | Fix merged |
| **P3** | [#10180](https://github.com/zeroclaw-labs/zeroclaw/issues/10180) ZeroCode paste mutates hidden composer | zerocode/tui | Closed | Fix merged |

**Critical path**: #10408 (concurrent turn handling) and #10429 (transcription i18n) are **active user-facing regressions** with fix PRs open. #10427 (yanked crate) blocks CI. Security issues (#10432, #10175) follow a pattern: **API key headers not marked sensitive** — systemic across TTS providers.

---

## 6. Feature Requests & Roadmap Signals

| Signal | Source | Likelihood for Next Version | Rationale |
|--------|--------|----------------------------|-----------|
| **SSE token streaming for `/webhook`** | [#10419](https://github.com/zeroclaw-labs/zeroclaw/issues/10419) (new, 3 comments) | **High** | Direct hosted-path requirement; small scope (SSE on existing endpoint); high-risk label suggests security review needed but design is clear. |
| **Telegram user-facing agent progress** | [#10426](https://github.com/zeroclaw-labs/zeroclaw/issues/10426) (new) | **Medium** | UX gap for long-running tools; "optional" flag suggests low-risk incremental add. |
| **AnySearch as built-in `web_search_tool` provider** | [#10336](https://github.com/zeroclaw-labs/zeroclaw/issues/10336) (proposal) | **Low-Medium** | External contributor proposal; limited scope (routing addition); P3 priority; depends on maintainer bandwidth for provider review. |
| **WASM plugin observer capability** | [#7822](https://github.com/zeroclaw-labs/zeroclaw/issues/7822) (RFC, 8 comments) | **Medium** | Maintainer takeover Rev 2; uses reserved capability; tracked for implementation. |
| **Gemini speech-to-speech broker channel** | [#10406](https://github.com/zeroclaw-labs/zeroclaw/issues/10406) (tracker, accepted) | **High** | Accepted RFC (#8780); implementation tracker created; bounded scope. |
| **Memory lifecycle / storage decoupling** | [#6850](https://github.com/zeroclaw-labs/zeroclaw/issues/6850) (RFC, 21 comments) | **Low (this cycle)** | High-risk, high-comment RFC — likely needs multiple review cycles before merge. |
| **Granular sandbox policy unification** | [#6996](https://github.com/zeroclaw-labs/zeroclaw/issues/6996) (RFC, in-progress) | **Medium** | In-progress, needs maintainer review; security-critical; blocks consistent policy enforcement. |

**Roadmap read**: Next version will likely ship **SSE streaming**, **Gemini Live broker**, **Telegram progress UX**, and **sandbox policy fixes** — all have implementation PRs or trackers. Major RFCs (memory, provenance, wire protocol) are **architectural debt paydown** for future cycles.

---

## 7. User Feedback Summary — Pain Points & Use Cases

| Pain Point | Evidence | Affected Users |
|------------|----------|----------------|
| **Silent transcription failures for non-English voice** | [#10429](https://github.com/zeroclaw-labs/zeroclaw/issues/10429): "Italian voice notes always silently dropped… skipping" | Telegram voice users (multilingual) |
| **No visibility into long-running agent work** | [#10426](https://github.com/zeroclaw-labs/zeroclaw/issues/10426): "Telegram conversation appears silent until final response… looks stalled" | Telegram chat users |
| **Cannot cancel running SOP jobs** | [#9425](https://github.com/zeroclaw-labs/zeroclaw/issues/9425): "Web dashboard provides no Stop/Cancel for actively running SOP" | Web dashboard operators |
| **Concurrent messages cause duplicate work** | [#10408](https://github.com/zeroclaw-labs/zeroclaw/issues/10408): "Second message starts parallel run → duplicate reply" | All channel users (core runtime) |
| **Skill-review crashes daemon after tool-heavy turns** | [#8654](https://github.com/zeroclaw-labs/zeroclaw/issues/8654): "Background fork panics… pod exits with 139/SIGSEGV" | Users with skill-review enabled |
| **Forbidden paths config ineffective** | [#9815](https://github.com/zeroclaw-labs/zeroclaw/issues/9815): "`forbidden_paths` has no effect under `allowed_roots`" | Security-conscious deployments |
| **API keys leak in logs** | [#10432](https://github.com/zeroclaw-labs/zeroclaw/issues/10432), [#10175](https://github.com/zeroclaw-labs/zeroclaw/issues/10175): ElevenLabs/Google TTS headers not marked sensitive | All TTS users (compliance risk) |

**Satisfaction signal**: Users are **filing concrete, reproducible bugs** (not vague complaints) — indicates active production use. The **Telegram/Web dashboard** surfaces show strongest user-facing friction. **Security config bugs** (#9815, #10432, #10175) suggest policy enforcement is a trust concern.

---

## 8. Backlog Watch — Stalled High-Value Items Needing Maintainer Attention

| Item | Age | Blockers | Why It Matters |
|------|-----|----------|----------------|
| [#6850](https://github.com/zeroclaw-labs/zeroclaw/issues/6850) **RFC: Memory lifecycle / storage decoupling** | 99 days (since 2026-05-22) | 21-comment design debate; high risk; no implementation PR | **Foundational**: Affects all memory-using components; unblocks consistent consolidation/governance. |
| [#6996](https://github.com/zeroclaw-labs/zeroclaw/issues/6996) **RFC: Granular sandbox policy** | 93 days | In-progress, needs maintainer review; two policy layers drifted | **Security foundation**: Current drift = inconsistent enforcement; blocks zero-trust deployments. |
| [#8396](https://github.com/zeroclaw-labs/zeroclaw/issues/8396) **RFC: Wire protocol first-class in providers** | 63 days | Needs maintainer review; high risk; architectural | **Provider ecosystem**: Enables clean multi-provider routing; currently coupled to wire specifics. |
| [#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) **Tracker: Maintainer decision queue** | 56 days | 14

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/DenisZheng/agents-radar).*