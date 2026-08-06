# OpenClaw Ecosystem Digest 2026-08-06

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-08-06 01:58 UTC

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

# OpenClaw Project Digest — 2026-08-06

## 1. Today's Overview

OpenClaw shows **extremely high activity** with 500 issues and 500 PRs updated in the last 24 hours, indicating a very active development cycle. The project has **435 open issues** and **438 open PRs**, suggesting a substantial backlog. Notably, **65 issues were closed** and **62 PRs merged/closed** today, showing good throughput. The absence of new releases suggests the team is in a stabilization or feature-development phase. The issue/PR volume and the prevalence of `clawsweeper` automation labels indicate heavy reliance on automated triage and bot-assisted maintenance.

## 2. Releases

**No new releases** in the last 24 hours. The latest mentioned versions in issues are `2026.7.2-beta.7` and `2026.7.2 (b4f01af)`, indicating active beta testing for the 2026.7.2 line.

---

## 3. Project Progress (Merged/Closed Today)

| Item | Type | Summary | Link |
|------|------|---------|------|
| #118846 | Issue (CLOSED) | Gateway main thread saturated by plugin-metadata snapshot + fs statting; starves accept loop (local RPC dies at ws_upgrade with 1006) | [#118846](https://github.com/openclaw/openclaw/issues/118846) |
| #106779 | Issue (CLOSED) | Issue with 2026.7.1: local llama.cpp provider fails with parser generation error | [#106779](https://github.com/openclaw/openclaw/issues/106779) |
| #92369 | Issue (CLOSED) | Subagent orchestration in cron isolated sessions: no reliable way to spawn, wait, and aggregate results | [#92369](https://github.com/openclaw/openclaw/issues/92369) |
| #91564 | Issue (CLOSED) | Telegram forum topic becomes permanent inbound black hole after stuck-session recovery | [#91564](https://github.com/openclaw/openclaw/issues/91564) |
| #119090 | Issue (CLOSED) | Managed media cleanup fails open on unreadable session store, permanently deletes session's generated media | [#119090](https://github.com/openclaw/openclaw/issues/119090) |
| #92672 | Issue (CLOSED) | Rate-limit fallback: user-visible error + immediate switch notification | [#92672](https://github.com/openclaw/openclaw/issues/92672) |
| #112278 | Issue (CLOSED) | diagnostics-otel: root span mints new OTel traceId instead of adopting diagnostic trace context | [#112278](https://github.com/openclaw/openclaw/issues/112278) |
| #119534 | Issue (CLOSED) | Bundled skills reference own support files skill-relative, `read` cannot open them | [#119534](https://github.com/openclaw/openclaw/issues/119534) |

**Key progress areas**: Gateway performance fixes, Telegram/QQBot channel stability, session recovery improvements, media cleanup safety, and telemetry/tracing correctness.

---

## 4. Community Hot Topics (Most Active Issues/PRs)

### Top Issues by Comment Count

| Issue | Comments | Priority | Core Problem |
|-------|----------|----------|--------------|
| [#116201](https://github.com/openclaw/openclaw/issues/116201) | 59 | P1 | Realtime voice sessions retain unbounded provider/consult state — resource limits expressed as item counts rather than hard ownership bounds |
| [#7707](https://github.com/openclaw/openclaw/issues/7707) | 27 | P2 | **Memory Trust Tagging by Source** — prevent memory poisoning from untrusted content (web scrapes, third-party skills) |
| [#44925](https://github.com/openclaw/openclaw/issues/44925) | 25 | P1 | Subagent completion silently lost — no retry, no notification, no auto-restart on timeout |
| [#118846](https://github.com/openclaw/openclaw/issues/118846) | 19 | P1 | Gateway main thread 100% CPU from plugin-metadata snapshotting + fs statting at boot |
| [#86519](https://github.com/openclaw/openclaw/issues/86519) | 13 | P1 | Agent repeats identical replies 2-10x on Telegram after 5.20 update (regression) |

### Top PRs by Activity (All Open)

| PR | Status | Risk Areas | Summary |
|----|--------|------------|---------|
| [#89040](https://github.com/openclaw/openclaw/pull/89040) | OPEN | compatibility, security, availability | Perf: avoid event-loop stall during `embedded_run` bootstrap-context (14-22s stalls) |
| [#118830](https://github.com/openclaw/openclaw/pull/118830) | OPEN | message-delivery | Fix: preserve signed generation URLs across delivery retries |
| [#119342](https://github.com/openclaw/openclaw/pull/119342) | OPEN | session-state, availability | Feat: host QR setup steps for system-agent |
| [#119341](https://github.com/openclaw/openclaw/pull/119341) | OPEN | compatibility, security, availability | Feat: define system-agent QR contract |
| [#118169](https://github.com/openclaw/openclaw/pull/118169) | OPEN | compatibility, security, availability | Feat: link Signal accounts from setup QR |

**Underlying needs**: 
- **Session reliability** — multiple issues around lost completions, stuck sessions, duplicate messages
- **Gateway performance** — CPU saturation, event-loop stalls, bootstrap bottlenecks
- **Security hardening** — memory trust tagging, exec-approval denylists, QR/session ownership
- **Multi-channel consistency** — Telegram, Discord, QQBot, Signal all showing delivery/retry bugs

---

## 5. Bugs & Stability (Ranked by Severity)

### 🔴 Critical (P0 / Crash-Loop / Data-Loss)

| Issue | Severity | Status | Fix PR? | Summary |
|-------|----------|--------|---------|---------|
| [#119263](https://github.com/openclaw/openclaw/issues/119263) | P0 | OPEN | [#119230](https://github.com/openclaw/openclaw/pull/119230) | Agent DB v14→v15 migration fails: `no such column: entry_valid`; gateway refuses to start |
| [#119090](https://github.com/openclaw/openclaw/issues/119090) | P0 | CLOSED | — | Managed media cleanup fails open on unreadable session store, permanently deletes generated media |
| [#70903](https://github.com/openclaw/openclaw/issues/70903) | P0 | OPEN | — | Persistent file-based provider cooldown blocks user for hours after billing recovery |

### 🟠 High (P1 / Session-State / Message-Loss / Crash-Loop)

| Issue | Severity | Status | Fix PR? | Summary |
|-------|----------|--------|---------|---------|
| [#116201](https://github.com/openclaw/openclaw/issues/116201) | P1 | OPEN | — | Realtime voice: unbounded provider/consult state retention |
| [#44925](https://github.com/openclaw/openclaw/issues/44925) | P1 | OPEN | — | Subagent completion silently lost — no retry/notification/auto-restart |
| [#118846](https://github.com/openclaw/openclaw/issues/118846) | P1 | CLOSED | — | Gateway main thread saturated at boot by plugin-metadata snapshot + fs statting |
| [#86519](https://github.com/openclaw/openclaw/issues/86519) | P1 | OPEN | — | Telegram duplicate replies 2-10x after 5.20 update (regression) |
| [#113306](https://github.com/openclaw/openclaw/issues/113306) | P1 | OPEN | — | SQLite snapshot restore lacks end-to-end crash/identity guarantees |
| [#112423](https://github.com/openclaw/openclaw/issues/112423) | P1 | OPEN | — | Large SQLite transcript cleanup blocks gateway event loop |
| [#85251](https://github.com/openclaw/openclaw/issues/85251) | P1 | OPEN | — | Codex app-server emits turn/started then goes silent; embedded run wedges |
| [#106231](https://github.com/openclaw/openclaw/issues/106231) | P1 | OPEN | — | Loop detection blocks exec but doesn't terminate stuck agent run |
| [#109490](https://github.com/openclaw/openclaw/issues/109490) | P1 | OPEN | — | Codex: turn interrupted after client-delegated message tool (terminate:true) — promised work never executes |
| [#96692](https://github.com/openclaw/openclaw/issues/96692) | P1 | OPEN | — | Slack thread replies generated but not delivered after origin tuple lost |
| [#116022](https://github.com/openclaw/openclaw/issues/116022) | P1 | OPEN | — | `/new` reuses stable session ID, cannot recover retired Codex binding tombstone |
| [#90098](https://github.com/openclaw/openclaw/issues/90098) | P1 | OPEN | — | Stack-safe large attachment handling for Control UI and gateway |
| [#53540](https://github.com/openclaw/openclaw/issues/53540) | P1 | OPEN | — | Embedded runner "Network connection lost" on large tool call params (param generation latency > timeout) |
| [#85844](https://github.com/openclaw/openclaw/issues/85844) | P1 | OPEN | — | Auto-update leaves running gateway with stale hashed bundle imports |
| [#97616](https://github.com/openclaw/openclaw/issues/97616) | P1 | OPEN | — | Leaks unreaped hook/tool child processes → zombie accumulation |
| [#107873](https://github.com/openclaw/openclaw/issues/107873) | P1 | OPEN | — | Embedded prompt-lock session takeover aborts WebChat turns after tool failure |
| [#115642](https://github.com/openclaw/openclaw/issues/115642) | P1 | OPEN | — | Billing cooldown outlives outage on subscription auth |
| [#119742](https://github.com/openclaw/openclaw/pull/119742) | P1 | PR OPEN | Self | Gateway: keep chat startup off catalog discovery (252-339s startup calls) |
| [#119687](https://github.com/openclaw/openclaw/pull/119687) | P1 | PR OPEN | Self | Stage inbound media into reused SSH sandbox workspaces via remote fs bridge |
| [#119596](https://github.com/openclaw/openclaw/pull/119596) | P1 | PR OPEN | Self | Remove bodyless 400/413 from overflow patterns to prevent false compaction |
| [#117400](https://github.com/openclaw/openclaw/pull/117400) | P1 | PR OPEN | Self | Compaction: use canonical session context projection for post-turn estimator |
| [#118792](https://github.com/openclaw/openclaw/pull/118792) | P1 | PR OPEN | Self | Never persist cumulative usage as session context snapshot |
| [#114199](https://github.com/openclaw/openclaw/pull/114199) | P1 | PR OPEN | Self | ACP: stop cancelled turns before provider start |
| [#118359](https://github.com/openclaw/openclaw/pull/118359) | P1 | PR OPEN | Self | Auto-reply: retire queued cancellation ownership when execution freezes |
| [#119398](https://github.com/openclaw/openclaw/pull/119398) | P1 | PR OPEN | Self | Media: forward caller abort signal to retry backoff sleep |

### 🟡 Medium (P2 / UX / Security / Auth)

| Issue | Severity | Status | Summary |
|-------|----------|--------|---------|
| [#7707](https://github.com/openclaw/openclaw/issues/7707) | P2 | OPEN | Memory Trust Tagging by Source (security) |
| [#6615](https://github.com/openclaw/openclaw/issues/6615) | P2 | OPEN | Denylist support for exec-approvals (security) |
| [#67419](https://github.com/openclaw/openclaw/issues/67419) | P2 | OPEN | Session context bloat: bootstrap files re-injected every turn (20-30% tokens) |
| [#44134](https://github.com/openclaw/openclaw/issues/44134) | P2 | OPEN | Google Antigravity ban: frequent tool schema reloading causes false positive anti-abuse detection |
| [#46031](https://github.com/openclaw/openclaw/issues/46031) | P2 | OPEN | `auth.order` ignored for GitHub Copilot — first profile always wins |
| [#106786](https://github.com/openclaw/openclaw/issues/106786) | P1 | OPEN | `gpt-5.6-*` advertised on ChatGPT-OAuth, silently falls back on provider reject |
| [#77306](https://github.com/openclaw/openclaw/issues/77306) | P2 | OPEN | QQBot duplicate message sending (regression) |
| [#77930](https://github.com/openclaw/openclaw/issues/77930) | P2 | OPEN | Discord channel not loaded in 2026.5.4+ (regression) |
| [#96007](https://github.com/openclaw/openclaw/issues/96007) | P2 | OPEN | Discord: subsequent message content truncated after inline error text |
| [#116512](https://github.com/openclaw/openclaw/issues/116512) | P2 | OPEN | Telegram progress duplicates first commentary when snapshot IDs change |

---

## 6. Feature Requests & Roadmap Signals

| Issue | Priority | Signal | Likelihood for Next Version |
|-------|----------|--------|----------------------------|
| [#7707](https://github.com/openclaw/openclaw/issues/7707) | P2 | **Memory Trust Tagging by Source** — security hardening against memory poisoning | High (security-labeled, 27 comments, needs-security-review) |
| [#6615](https://github.com/openclaw/openclaw/issues/6615) | P2 | **Denylist support for exec-approvals** — "allow everything except X" policies | High (8 👍, linked PR open, security-labeled) |
| [#50798](https://github.com/openclaw/openclaw/issues/50798) | P2 | **Visible agent-to-agent messaging for ACP thread-bound sessions** | Medium (proxy-only delivery without main session creation) |
| [#53654](https://github.com/openclaw/openclaw/issues/53654) | P2 | **Discord messageUpdate/messageDelete events** — edit-to-reprocess, delete-to-cancel | Medium (3 👍, real user request from ScaleWithSystems) |
| [#15022](https://github.com/openclaw/openclaw/issues/15022) | P2 |

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: Personal AI Agent Ecosystem (2026-08-06)

---

## 1. Ecosystem Overview

The personal AI assistant/agent open-source ecosystem exhibits a **bimodal maturity distribution**: a cluster of high-velocity "Claw-family" frameworks (OpenClaw, Hermes, ZeroClaw, IronClaw, NanoClaw) engaged in deep architectural refactoring and protocol standardization, alongside product-oriented derivatives (LobsterAI, CoPaw, NanoBot) shipping user-facing features on faster release cadences. Three projects show zero recent activity (TinyClaw, Moltis, ZeptoClaw), suggesting consolidation around 4–5 primary codebases. Cross-cutting themes include **gateway/runtime stabilization**, **multi-channel delivery hardening**, **MCP/tool protocol compliance**, and **security/isolation boundaries** — indicating the ecosystem is transitioning from prototype to production-grade infrastructure.

---

## 2. Activity Comparison

| Project | Issues Updated (24h) | PRs Updated (24h) | PRs Merged (24h) | Latest Release | Release Date | Health Score* |
|---------|---------------------|-------------------|------------------|----------------|--------------|---------------|
| **OpenClaw** | 500 | 500 | 62 | 2026.7.2-beta.7 | Pre-release | 🟢 **High** (volume + throughput) |
| **Hermes Agent** | 50 | 50 | 1 | None (pre-release) | — | 🟡 **High velocity, critical bugs** |
| **ZeroClaw** | 50 | 50 | 1 | v0.8.3 | Pre-v0.9.0 | 🟡 **Design-heavy, governance bottleneck** |
| **IronClaw** | 43 | 50 | 7 | v1.1.0-rc.1 | 2026-08-03 | 🟢 **Stabilizing RC** |
| **CoPaw (QwenPaw)** | 22 | 50 | 11 | v2.1.0-beta.2 | Pre-release | 🟢 **Beta hardening** |
| **NanoClaw** | 2 | 12 | 2 | None | — | 🟢 **Efficient review cycles** |
| **NanoBot** | 4 | 15 | 7 | None | — | 🟢 **Balanced bug/feature** |
| **LobsterAI** | 3 | 12 | 12 | v2026.8.5 | 2026-08-05 | 🟢 **Shipping user features** |
| **NullClaw** | 0 | 2 | 0 | Unknown | — | 🔴 **Stalled maintenance** |
| **PicoClaw** | — | — | — | — | — | ⚪ **Data unavailable** |
| **TinyClaw** | 0 | 0 | 0 | — | — | ⚫ **Inactive** |
| **Moltis** | 0 | 0 | 0 | — | — | ⚫ **Inactive** |
| **ZeptoClaw** | 0 | 0 | 0 | — | — | ⚫ **Inactive** |

*Health Score: 🟢 Healthy velocity + throughput | 🟡 High velocity but blockers | 🔴 Stalled | ⚪ Unknown | ⚫ Inactive

---

## 3. OpenClaw's Position

**Advantages vs. Peers:**
- **Scale of automation**: 500+ daily issue/PR updates driven by `clawsweeper` bot infrastructure — unmatched triage/automation investment
- **Gateway/runtime maturity**: Deepest investment in event-loop performance, session recovery, and multi-channel delivery (Telegram, Discord, QQBot, Signal, Slack)
- **Ecosystem gravity**: Referenced as upstream by LobsterAI, NanoClaw, and others; de facto "kernel" for Claw-family derivatives

**Technical Approach Differences:**
- **Monolithic gateway + plugin architecture** vs. Hermes/ZeroClaw's runtime decomposition epics
- **Bot-assisted maintenance** as first-class workflow (clawsweeper labels pervasive) vs. manual triage elsewhere
- **Session/channel ownership model** with strict single-writer DB invariants (enforced in NanoClaw downstream)

**Community Size Indicators:**
- Highest absolute issue/PR volume (435 open issues, 438 open PRs)
- 59-comment thread on realtime voice limits (#116201) shows deep technical engagement
- Security-labeled features (Memory Trust Tagging #7707, exec-approval denylists #6615) attract sustained discussion

---

## 4. Shared Technical Focus Areas

| Requirement | Projects | Specific Needs |
|-------------|----------|----------------|
| **Gateway/event-loop performance** | OpenClaw (#118846, #89040), Hermes (#54962), IronClaw (#741) | Eliminate bootstrap stalls (14–339s), CPU saturation at startup, streaming token latency |
| **Multi-channel delivery reliability** | OpenClaw (#86519, #91564, #96692), NanoClaw (#3191), IronClaw (#7249), CoPaw (#6696, #6684) | Duplicate message suppression, retry/backoff, health checks, protocol-specific edge cases (WeChat context_token, Matrix empty body) |
| **MCP/tool protocol compliance** | NanoBot (#5237), ZeroClaw (#8642, #9328), IronClaw (#7248, #7250, #7251), CoPaw (#6732) | Error envelope handling (`isError:false` treated as success), auth discovery, memory growth from schema cloning, connection lifecycle |
| **Session/state isolation & recovery** | OpenClaw (#113306, #116022), Hermes (#71941), ZeroClaw (#9487), NanoClaw (#2528) | Crash-safe SQLite restore, delegated context leakage, container file access, runtime-owned session boundaries |
| **Security/isolation boundaries** | OpenClaw (#7707, #6615), ZeroClaw (#7155, #8424), IronClaw (#7141), NanoClaw (#3175) | Memory trust tagging, exec-approval denylists, shell confirmation tiers, workspace-relative forbidden paths, single-writer DB enforcement |
| **Provider/model abstraction & fallback** | OpenClaw (#106786), CoPaw (#5597, #6436), ZeroClaw (#9631, #9775), LobsterAI (#2440) | Capability caching with TTL, automatic routing, prompt caching via session_id, system-prompt deduplication |

---

## 5. Differentiation Analysis

| Dimension | OpenClaw / Hermes / ZeroClaw | IronClaw / NanoClaw | LobsterAI / CoPaw / NanoBot |
|-----------|------------------------------|---------------------|----------------------------|
| **Primary Focus** | Framework/runtime infrastructure | Skills/extension ecosystem + standardization | Product UX: desktop, onboarding, enterprise features |
| **Target User** | Framework adopters, integrators, power users | Operators building deployable agents | End-users, teams, enterprise |
| **Architecture** | Monolithic gateway + plugins (OpenClaw); Runtime decomposition (Hermes/ZeroClaw) | Standardized messaging framework (Reborn), IronHub marketplace | Tauri/Electron desktop, native platform integrations |
| **Release Cadence** | Pre-release betas, stabilization phases | RC → stable (IronClaw v1.1.0-rc.1) | Frequent user-facing releases (LobsterAI 2026.8.5) |
| **Key Differentiator** | Scale of automation, channel breadth | Declarative config (CaC), model-driven skills, marketplace | Daily check-in, enterprise auth isolation, title-bar search |

**Notable Architectural Forks:**
- **Session ownership**: OpenClaw (gateway-owned) vs. ZeroClaw (runtime-owned, RFC #9487) vs. IronClaw (standardized messaging framework #6831)
- **Skill activation**: IronClaw moving to model-chosen skills (#6938) vs. OpenClaw's keyword/approval hybrid
- **Desktop strategy**: LobsterAI/CoPaw invest heavily in Tauri/Electron UX; OpenClaw/NanoClaw remain headless-first

---

## 6. Community Momentum & Maturity

| Tier | Projects | Characteristics |
|------|----------|-----------------|
| **Rapid Iteration (Pre-1.0, High Flux)** | OpenClaw, Hermes, ZeroClaw, CoPaw | 50–500 daily updates; architectural epics in flight (god-file sharding, RFC storms); P1 bugs block releases |
| **Stabilizing Release Candidates** | IronClaw, NanoClaw | RC/beta phases; focused on hardening (E2E tests, CI, delivery fixes); efficient PR throughput |
| **Shipping Product Increments** | LobsterAI, NanoBot | Monthly/bi-weekly releases; user-visible features (check-in, search, temporary chat); dependency hygiene |
| **Maintenance / Low Activity** | NullClaw | Critical fixes pending review >24h; no community discussion |
| **Dormant** | TinyClaw, Moltis, ZeptoClaw | Zero 24h activity; likely archived or superseded |

**Maturity Signal**: Only **IronClaw** and **LobsterAI** have cut named releases in the last week. The Claw-family cores remain in extended pre-1.0 stabilization, suggesting the ecosystem has not yet reached "stable API" consensus.

---

## 7. Trend Signals for AI Agent Developers

1. **Gateway/Runtime Split is the Next Major Refactor**  
   Three independent projects (Hermes #54962, ZeroClaw #9487, IronClaw #6831) are extracting platform routing from monolithic entry points. Expect **standardized admission/transport interfaces** to emerge as a cross-project compatibility layer.

2. **MCP is Hardening from "Protocol" to "Runtime Contract"**  
   Silent error handling (#5237 NanoBot), memory leaks (#8642 ZeroClaw), and connection lifecycle (#6732 CoPaw) are now **P0/P1 bugs** — not spec issues. Tool-use reliability requires runtime guards (timeouts, retries, schema caching with TTL).

3. **Declarative Configuration-as-Code (CaC) is Operator Table Stakes**  
   IronClaw (#3036), ZeroClaw (#9246), and OpenClaw (implied by skill config issues) all track CaC epics. **Schema-validated, diff-auditable, git-managed tenant blueprints** will replace `.env`/JSON hand-editing.

4. **Security Boundaries Moving from "Approval" to "Policy Engine"**  
   OpenClaw (#6615 denylists), ZeroClaw (#7155 shell tiers, #8424 forbidden paths), IronClaw (#7141 pluggable auth) converge on **structured policy languages** (allow/ask/deny, workspace-relative globs, canonical principals) replacing ad-hoc prompts.

5. **Desktop/UX Polish is a Competitive Moat for Derivatives**  
   LobsterAI (title-bar search, daily check-in), CoPaw (responsive console, artifact canvas), NanoBot (temporary chat, shared terminal) demonstrate that **headless cores need product-grade shells** to capture end-users. Expect more Tauri/Electron investment.

6. **Multi-Channel is a Compatibility Tax, Not a Feature**  
   Every active project has **P1/P2 channel-specific bugs** (Telegram duplicates, WeChat context_token, Matrix empty body, Slack metadata leakage). Channel adapters are becoming **thin, well-tested shims** over a shared delivery core — not bespoke integrations.

---

**Bottom Line for Decision-Makers**: The ecosystem is consolidating around **3–4 viable framework cores** (OpenClaw, IronClaw, ZeroClaw, Hermes) with distinct architectural bets. Downstream products (LobsterAI, CoPaw, NanoBot) are the current best bet for deployable agents. Invest in **gateway/runtime separation**, **MCP runtime guards**, and **CaC tooling** — these are the shared infrastructure gaps the next 6 months will fill.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-08-06

---

## 1. Today's Overview

NanoBot shows **high development velocity** with 19 total updates (4 issues + 15 PRs) in the last 24 hours. The project is actively addressing **critical bugs** (audio sending, MCP error handling, goal loop regression) while simultaneously advancing **WebUI enhancements** (temporary chat, shared terminal, provider-native switches). Seven PRs were merged/closed today, indicating strong maintainer responsiveness. No new release was cut, suggesting changes are accumulating for a future batch release. Overall project health appears **robust** with balanced bug-fix and feature work.

---

## 2. Releases

**No new releases** published today. The latest version remains unchanged; all merged PRs will be included in the next version bump.

---

## 3. Project Progress — Merged / Closed PRs (7)

| PR | Type | Summary | Impact |
|----|------|---------|--------|
| [#5234](https://github.com/HKUDS/nanobot/pull/5234) | **Feature (P1)** | Integrated **mst-python** as a metasearch provider (multi-engine search with RRF ranking) | Richer web search coverage for agents |
| [#5203](https://github.com/HKUDS/nanobot/pull/5203) | **Bug Fix (P2)** | WhatsApp: detect outbound media by file content (libmagic) instead of extension; send unsupported audio as documents | Fixes audio sending reliability (related to #5149) |
| [#5238](https://github.com/HKUDS/nanobot/pull/5238) | **Refactor / Bug Fix (P1)** | Removed request-scoped tool access grants; simplified session authorization | Reduces complexity, fixes regression from #5211 |
| [#5254](https://github.com/HKUDS/nanobot/pull/5254) | **Feature (P2)** | Added WebUI switches for provider-native features (OpenAI Codex Fast, web_search, x_search) | Direct control over model provider capabilities |
| [#5249](https://github.com/HKUDS/nanobot/pull/5249) | **Refactor (P2)** | WebUI visual consistency: unified elevation, flattened layouts, removed replay animations | UX polish, reduced visual noise |
| [#5250](https://github.com/HKUDS/nanobot/pull/5250) | **Bug Fix (P2)** | Fixed feather-clipped edges on agent activity panes (direction-aware fading) | Improves readability of streaming output |
| [#5184](https://github.com/HKUDS/nanobot/pull/5184) | **Feature (Conflict)** | Quick Chat + Temporary Chat (closed due to conflict, superseded by #5252) | Foundation for ephemeral chat modes |

**Key advancement**: Web search capability significantly upgraded via mst-python; WhatsApp media handling hardened; WebUI gaining production-grade polish.

---

## 4. Community Hot Topics — Most Active Discussions

| Item | Activity | Core Need |
|------|----------|-----------|
| [#5149](https://github.com/HKUDS/nanobot/issues/5149) **Bug: No audio on WhatsApp** | 4 comments, 7 days open | Users cannot **send** audio files (receive works). Blocking for voice-memo workflows. |
| [#5237](https://github.com/HKUDS/nanobot/issues/5237) **MCP tool "data not found" silent failure** | 2 comments, 2 days open | MCP servers returning business errors (`isError=false`) are treated as success → agent cannot recover. **Protocol compliance gap**. |
| [#5248](https://github.com/HKUDS/nanobot/pull/5248) **Matrix: empty POST body on join (Continuwuity compat)** | Open PR, P2 | Homeserver compatibility — empty body rejected with `M_BAD_JSON`. Affects Matrix channel reliability. |
| [#5252](https://github.com/HKUDS/nanobot/pull/5252) **feat: Temporary Chat mode** | Open PR, stacked with #5259 | **Privacy/ephemeral sessions** — in-memory only, no persistence. High user demand for throwaway conversations. |

**Underlying theme**: **Multi-channel reliability** (WhatsApp audio, Matrix join, MCP error semantics) and **session privacy controls** (temporary/quick chat).

---

## 5. Bugs & Stability — Ranked by Severity

| Severity | Issue | Status | Fix PR |
|----------|-------|--------|--------|
| **Critical** | [#5149](https://github.com/HKUDS/nanobot/issues/5149) WhatsApp audio send fails (ffmpeg warning) | Open | Partially addressed by [#5203](https://github.com/HKUDS/nanobot/pull/5203) (merged) — libmagic detection helps, but root cause may remain |
| **High** | [#5237](https://github.com/HKUDS/nanobot/issues/5237) MCP business errors (`isError=false`) treated as success → agent hangs until timeout | Open | No fix PR yet. Requires MCP result validation layer. |
| **High** | [#5256](https://github.com/HKUDS/nanobot/issues/5256) `/goal` produces dozens of repeated replies while waiting for user | Open | Fix PR [#5257](https://github.com/HKUDS/nanobot/pull/5257) open — bounds goal continuation on idle turns |
| **Medium** | [#5248](https://github.com/HKUDS/nanobot/pull/5248) Matrix join fails on Continuwuity (empty POST body) | Open PR (P2) | Fix ready: send `{}` instead of `null` body |
| **Low** | [#5250](https://github.com/HKUDS/nanobot/pull/5250) Feather clipping on activity panes (visual) | Merged | Fixed in #5250 |

**Stability note**: Two high-severity agent-loop bugs (#5237, #5256) discovered same week — suggests recent changes to tool/goal handling introduced regressions.

---

## 6. Feature Requests & Roadmap Signals

| Request | Source | Likelihood for Next Release |
|---------|--------|-----------------------------|
| **MCP Apps host support in WebUI** (render server-provided UI) | [#5251](https://github.com/HKUDS/nanobot/issues/5251) | Medium — aligns with MCP ecosystem push, but requires WebUI iframe/embed work |
| **Temporary Chat mode** (ephemeral, in-memory) | [#5252](https://github.com/HKUDS/nanobot/pull/5252), [#5259](https://github.com/HKUDS/nanobot/pull/5259) | **High** — PR open, stacked, addresses privacy demand |
| **Shared interactive project terminal** (PTY in WebUI) | [#5253](https://github.com/HKUDS/nanobot/pull/5253) | High — PR open with xterm.js, persistent per-project |
| **Provider-native request switches** (Codex Fast, web_search, x_search) | [#5254](https://github.com/HKUDS/nanobot/pull/5254) | **Done** — merged today |
| **Truthful API status for external `nanobot serve`** | [#5255](https://github.com/HKUDS/nanobot/pull/5255) | Medium — draft PR, improves ops visibility |
| **Memory runtime file ignore rules** | [#5260](https://github.com/HKUDS/nanobot/pull/5260) | High — open PR, prevents workspace pollution |

**Roadmap signal**: Strong push toward **WebUI parity with CLI** (terminal, ephemeral chats, provider controls) and **MCP ecosystem depth** (Apps, error handling).

---

## 7. User Feedback Summary — Pain Points & Use Cases

| Pain Point | Evidence | User Impact |
|------------|----------|-------------|
| **WhatsApp audio broken** | #5149: "nanobot will not send audio message… it does receive them" | Voice-memo workflows blocked; ffmpeg warnings in logs |
| **MCP silent failures** | #5237: "LLM never learns the call failed… waits until tool_timeout" | Agents stuck on failed tool calls; no automatic retry |
| **Goal loop spam** | #5256: "dozens of near-identical replies… waiting for user's answer" | Chat flooded, user must intervene manually |
| **Matrix join fails on some homeservers** | #5248: Continuwuity rejects empty POST body | Channel unavailable for affected users |
| **No ephemeral chat option** | #5251, #5252: Requests for temporary/quick chat | Privacy-sensitive conversations forced into history |

**Positive signals**: Quick merge of WebUI polish (#5249, #5250) and provider switches (#5254) shows responsiveness to UX feedback.

---

## 8. Backlog Watch — Items Needing Maintainer Attention

| Item | Age | Why It Matters |
|------|-----|----------------|
| [#5149](https://github.com/HKUDS/nanobot/issues/5149) **WhatsApp audio send** | 9 days | Core channel feature broken; #5203 merged but issue still open — verify fix completeness |
| [#5237](https://github.com/HKUDS/nanobot/issues/5237) **MCP error envelope handling** | 2 days | Protocol-level bug; affects all MCP integrations; no PR yet |
| [#5248](https://github.com/HKUDS/nanobot/pull/5248) **Matrix Continuwuity compat** | 2 days | Small fix (send `{}`), unblocks a homeserver; ready for review |
| [#5257](https://github.com/HKUDS/nanobot/pull/5257) **Goal continuation bound** | 1 day | Fixes #5256 spam loop; needs review & merge |
| [#5251](https://github.com/HKUDS/nanobot/issues/5251) **MCP Apps host support** | 1 day | Strategic feature for MCP ecosystem leadership; design discussion needed |

**Recommendation**: Prioritize #5237 (MCP error handling) and #5257 (goal loop) as they affect agent correctness. Review #5248 for quick Matrix win. Schedule design review for #5251 (MCP Apps).

---

*Digest generated from GitHub data as of 2026-08-06. All links point to live HKUDS/nanobot issues/PRs.*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-08-06

---

## 1. Today's Overview

Hermes Agent shows **extremely high velocity** with 50 issues and 50 PRs updated in the last 24 hours. The project is in the midst of a **repo-wide "god-file decomposition" epic** (#78647) — a standing policy to shard all 20+ oversized files into clean modules. Simultaneously, a **Telegram Bot API 10.2 parity campaign** (#78791) has spawned 15+ feature-tracking issues. Critical bugs affect terminal command execution (null-byte crash in `lifecycle_guard`), gateway update staleness causing `ImportError`, and delegated child context leaking through shared terminal snapshots. No releases were cut today; the codebase is in heavy refactoring flux.

---

## 2. Releases

**No new releases today.** The project appears to be in a pre-release stabilization window while the god-file sharding and Telegram parity work land.

---

## 3. Project Progress — Merged / Closed Today

| PR | Type | Summary |
|----|------|---------|
| [#74562](https://github.com/NousResearch/hermes-agent/pull/74562) | **Bug fix (closed)** | Resolves `model.key_env` → `model.api_key` at config load time, preventing HTTP 401 for custom providers using env-var references. |

*Only one PR closed/merged in the last 24h — the bulk of activity is open PRs undergoing review.*

---

## 4. Community Hot Topics (Most Comments / Reactions)

| Item | Comments | Area | Core Need |
|------|----------|------|-----------|
| [#78647](https://github.com/NousResearch/hermes-agent/issues/78647) **Epic: Shard all 20 god files** | 14 | Architecture / Refactor | **Mandatory decomposition** of 20+ oversized files (some >800 KB). Policy: "all god files are sharded, never reverted." Drives 10+ open PRs today. |
| [#77780](https://github.com/NousResearch/hermes-agent/issues/77780) **`lifecycle_guard` crashes on embedded null byte** | 12 | Tools / Terminal / Cron | **Production crash** — every terminal command fails when heredoc/`-c` payloads contain null bytes. Blocks all terminal-tool usage. |
| [#54962](https://github.com/NousResearch/hermes-agent/issues/54962) **Extract Gateway Platform Routing from `gateway/run.py` (858 KB)** | 11 | Gateway / Refactor | Long-standing god-file; centralizes event loop + payload parsing. Extraction blocked on shared interface design. |
| [#78791](https://github.com/NousResearch/hermes-agent/issues/78791) **Telegram Feature Parity & Alignment (Bot API 10.2)** | 5 | Plugins / Telegram | Meta-issue tracking 15+ granular feature gaps (inline buttons, reply keyboards, Web Apps, Passport, paid broadcasts, etc.). |
| [#79220](https://github.com/NousResearch/hermes-agent/issues/79220) **Cost label formats at 2dp → sub-cent shows $0.00** | 5 | Agent / DeepSeek / Usage-cost | Display bug: correct internal cost, but UI rounds to `~$0.00` for cheap models. Undermines cost observability. |
| [#71941](https://github.com/NousResearch/hermes-agent/issues/71941) **Delegated child context persists via shared terminal snapshots** | 5 | Agent / Terminal / Delegate | `HERMES_DELEGATED_CHILD_CONTEXT` leaks across invocations because terminal envs are cached/shared. Breaks isolation guarantees. |

**Underlying theme:** The project is simultaneously **paying down massive architectural debt** (god-files) and **chasing a moving platform target** (Telegram Bot API 10.2), while critical runtime bugs in terminal/gateway paths remain open.

---

## 5. Bugs & Stability — Ranked by Severity

| Severity | Issue | Status | Fix PR? |
|----------|-------|--------|---------|
| **P1 — Crash / Data loss** | [#77780](https://github.com/NousResearch/hermes-agent/issues/77780) `lifecycle_guard` `ValueError: embedded null byte` crashes all terminal commands | Open | No PR yet |
| **P1 — Update breakage** | [#78574](https://github.com/NousResearch/hermes-agent/issues/78574) `hermes update` leaves stale gateway → `ImportError` on next turn | Open | [#78590](https://github.com/NousResearch/hermes-agent/pull/78590) (open) |
| **P1 — Cron deadlock** | [#79768](https://github.com/NousResearch/hermes-agent/issues/79768) Unbounded `TERMINAL_CWD` lock acquire wedges concurrent jobs | Open | [#79813](https://github.com/NousResearch/hermes-agent/pull/79813) (open) |
| **P2 — Session corruption** | [#79101](https://github.com/NousResearch/hermes-agent/issues/79101) API server persists virtual model alias (`hermes-agent`) as real model ID | Open | [#79824](https://github.com/NousResearch/hermes-agent/pull/79824) (open) |
| **P2 — Context leak** | [#71941](https://github.com/NousResearch/hermes-agent/issues/71941) Delegated child context persists via shared terminal snapshots | Open | No PR yet |
| **P2 — TTS voice ignored** | [#79459](https://github.com/NousResearch/hermes-agent/issues/79459) Piper/KittenTTS ignore configured `voice` param | Open | No PR yet |
| **P2 — Telegram spinner** | [#78788](https://github.com/NousResearch/hermes-agent/issues/78788) Unknown callback queries never answered → client spinner hangs | Open | No PR yet |
| **P3 — Cost display** | [#79220](https://github.com/NousResearch/hermes-agent/issues/79220) Sub-cent costs render as `$0.00` (2dp formatting) | Open | No PR yet |
| **P3 — Negative limit bug** | [#79302](https://github.com/NousResearch/hermes-agent/pull/79302) `session.list`/`spawn_tree.list` accept negative `limit` → drops newest entries | PR open | [#79302](https://github.com/NousResearch/hermes-agent/pull/79302) |
| **P3 — Email read marking** | [#79823](https://github.com/NousResearch/hermes-agent/pull/79823) Gmail marks polled messages read (uses `RFC822` not `BODY.PEEK[]`) | PR open | [#79823](https://github.com/NousResearch/hermes-agent/pull/79823) |

---

## 6. Feature Requests & Roadmap Signals

| Signal | Evidence | Likelihood for Next Version |
|--------|----------|----------------------------|
| **Telegram Bot API 10.2 full parity** | 15+ issues filed 2026-08-04 under #78791 meta-issue (inline buttons, reply keyboards, Web Apps, Passport, paid broadcasts, business accounts, managed bots, suggested posts, chat menu buttons, message reactions, forward/copy/delete batch, default admin rights, identity/profile APIs) | **High** — campaign is active, meta-issue links to methodology PR #79609 |
| **God-file decomposition completion** | Epic #78647 + 10+ sharding PRs opened 2026-08-05/06 (kanban_db, discord adapter, main.py, gateway/run.py) | **High** — standing policy "never reverted" |
| **Memory lifecycle management UX** | [#78307](https://github.com/NousResearch/hermes-agent/issues/78307) — inspection, health, deduplication, consolidation, conflict detection for `MEMORY.md`/`USER.md` | **Medium** — tagged `needs-decision`, narrower than vector retrieval |
| **Minimize-to-tray (Win/Linux)** | [#79803](https://github.com/NousResearch/hermes-agent/pull/79803) — opt-in, off by default, macOS excluded | **Medium** — desktop UX polish, ready PR |
| **Email send tool + Keychain convention** | [#79132](https://github.com/NousResearch/hermes-agent/pull/79132) — AgentMail/SMTP, Keychain secret resolution, documents convention | **Medium** — touches auth/security boundary |
| **CJK-aware BM25 tokenization** | [#79202](https://github.com/NousResearch/hermes-agent/pull/79202) — bigram tokenization for tool_search (#78985) | **Medium** — i18n search quality |
| **Auxiliary LLM plugin hooks** | [#79826](https://github.com/NousResearch/hermes-agent/pull/79826) — fire hooks for approval, title_gen, compression, vision, web_extract, session_search, MoA | **Medium** — plugin extensibility |
| **JSON-wrapped tool output decode** | [#79825](https://github.com/NousResearch/hermes-agent/pull/79825) — fix persisted terminal output (escaped newlines break `read_file` offset/limit) | **Medium** — tooling correctness |

---

## 7. User Feedback Summary — Pain Points & Use Cases

| Pain Point | Source | User Impact |
|------------|--------|-------------|
| **"Every terminal command crashes"** | #77780 | Complete block on terminal tool — heredoc/`-c` payloads with null bytes trigger unhandled `ValueError` in `lifecycle_guard`. |
| **"Update breaks my gateway silently"** | #78574 👍1 | `hermes update` exits 0 ✓ but leaves systemd gateway on old modules → next Telegram turn `ImportError`. No auto-restart, no warning. |
| **"Delegated tasks leak context into my next session"** | #71941 | Terminal env cache shares `HERMES_DELEGATED_CHILD_CONTEXT` across invocations — breaks isolation for `delegate_task` children. |
| **"I can't see per-turn costs for cheap models"** | #79220 | All reads show `~$0.00` even though internal calc is correct. Undermines cost monitoring for high-volume/low-cost models. |
| **"TTS voice setting does nothing (Piper/KittenTTS)"** | #79459 | Configured/requested `voice` ignored; default voice always used. No error, silent failure. |
| **"Telegram inline keyboard spinner never stops"** | #78788 | Unknown callback queries unanswered → client shows loading spinner indefinitely. |
| **"Preview links don't open in file tabs"** | #41736 | Assistant-message preview links (`[Preview: foo.md]`) bypass file-tab system; only file-browser/manual opens use tabs. |
| **"Negative limit drops my latest sessions"** | #79302 | `session.list limit=-5` silently drops newest 5 entries from resume picker. |

**Positive signal:** The god-file decomposition epic (#78647) has **community buy-in** (policy documented, 10+ PRs in flight). Users/developers appear aligned on architectural cleanup.

---

## 8. Backlog Watch — Stale / High-Impact Items Needing Maintainer Attention

| Item | Age | Why It Matters | Current State |
|------|-----|----------------|---------------|
| [#54962](https://github.com/NousResearch/hermes-agent/issues/54962) **Extract Gateway Platform Routing from `gateway/run.py` (858 KB)** | ~38 days (2026-06-29) | Largest god-file; centralizes event loop + payload parsing. Blocked on shared interface design. | Open, 11 comments, no PR linked |
| [#41736](https://github.com/NousResearch/hermes-agent/issues/41736) **Route assistant-message Preview links through file tabs** | ~59 days (2026-06-08) | Desktop UX inconsistency — preview links bypass tab system. | Open, 3 comments, `needs-decision` |
| [#71941](https://github.com/NousResearch/hermes-agent/issues/71941) **Delegated child context persists via shared terminal snapshots** | ~11 days (2026-07-26) | Security/isolation bug — context leaks across agent invocations. Tagged `sweeper:risk-session-state`. | Open, 5 comments, no PR |
| [#77780](https://github.com/NousResearch/hermes-agent/issues/77780) **`lifecycle_guard` null-byte crash** | ~3 days (2026-08-03) | **P1 crash** — blocks all terminal usage. High comment count (12) but no fix PR yet. | Open, 12 comments |
| [#78574](https://github.com/NousResearch/hermes-agent/issues/78574) **Stale gateway after `hermes update`** | ~2 days (2026-08-04) | **P1 update breakage** — user-facing, causes `ImportError`. Fix PR #78590 open but unmerged. | Open, 2 comments, 👍1, PR #78590 |
| [#79101](https://github.com/NousResearch/hermes-agent/issues/79101) **API server persists virtual model alias** | ~1 day (2026-08-05) | Session model corruption — virtual alias `hermes-agent` stored as real model ID. Fix PR #79824 open. | Open, 2 comments, PR #79824 |
| [#78307](https://github.com/NousResearch/hermes-agent/issues/78307) **Memory lifecycle management UX** | ~2 days (2026-08-04) | First-class maintenance for built-in memory stores. Tagged `needs-decision`. | Open, 2 comments |

---

## Project Health Indicators

| Metric | Signal |
|--------|--------|
| **Velocity** | Very high — 100 items (issues+PRs) updated in 24h |
| **Refactor depth** | Epic-scale god-file decomposition (20 files) + platform parity campaign (15+ Telegram features) running in parallel |
| **Critical bug backlog** | 3 P1 bugs open (terminal crash, update breakage, cron deadlock) — all have fix PRs *except* the terminal crash |
| **Release cadence** | No release today; likely batching post-refactor stabilization |
| **Community engagement** | High comment counts on architectural epics (14, 12, 11) — contributors aligned on direction |
| **Technical debt payment** | Explicit policy: "all god files are sharded, never reverted" — rare clarity |

**Bottom line:** Hermes Agent is in a **major architectural transition window**. The god-file sharding and Telegram 10.2 parity work are progressing visibly (10+ PRs each), but three P1 runtime bugs remain unfixed or unmerged. The next release will likely be a **stabilization cut** after the current refactor wave lands. Maintainers should prioritize merging #78590 (update fix), #79813 (cron deadlock), #79824 (model alias), and assigning a fix for #77780 (terminal crash) to unblock users.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

⚠️ Summary generation failed.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-08-06

## 1. Today's Overview

NanoClaw shows **high development velocity** with 12 PRs updated in the last 24 hours (10 open, 2 merged/closed) and 2 long-standing issues receiving fresh attention. No new releases were cut. The PR queue reflects a healthy mix of **core stability fixes** (database write invariants, WhatsApp session hangs, container env propagation), **skill ecosystem expansion** (Tavily MCP, "add-why" diagnostic skill, Dial channel), and **architectural refactors** (host seams for skill-owned capabilities, attachment handling in agent-runner). Two merged PRs (#3175, #3187) directly address data-corruption risks and agent-to-agent messaging regressions, signaling maintainer focus on hardening the runtime before feature work.

## 2. Releases

No new releases published today.

## 3. Project Progress — Merged/Closed PRs (2026-08-05)

| PR | Type | Summary | Impact |
|----|------|---------|--------|
| [#3175](https://github.com/qwibitai/nanoclaw/pull/3175) | **Fix (Core)** | Reroutes command-gate denial notices through the delivery adapter instead of writing directly into a session's `outbound.db`. Eliminates a second-writer violation of the single-writer invariant documented in `docs/db.md`. | **High** — Prevents SQLite corruption in multi-session deployments. |
| [#3187](https://github.com/qwibitai/nanoclaw/pull/3187) | **Fix (Agent Runner)** | Disallows the built-in `SendMessage` tool so that agent-to-agent messaging uses the proper channel adapters instead of short-circuiting. | **Medium** — Restores correct inter-agent communication flow. |

Both PRs were authored by core contributors (Joi, dim0627) and closed same-day, indicating efficient review cycles.

## 4. Community Hot Topics — Most Active Items

| Item | Activity | Underlying Need |
|------|----------|-----------------|
| [#3192](https://github.com/qwibitai/nanoclaw/pull/3192) (replaces #3175) | Opened 2026-08-05, same-day updates | **Re-validation of the db-write fix** — likely surfaced edge cases in CI or staging; maintainers re-opening to ensure the delivery-adapter path covers all denial-notice code paths. |
| [#3156](https://github.com/qwibitai/nanoclaw/pull/3156) | Open since 2026-07-30, updated 2026-08-05 | **Structured attachment handling** — carries channel attachments (images, PDFs) to LLM providers as typed parts instead of opaque blobs. Critical for multimodal skills (Signal, WhatsApp, future channels). |
| [#2528](https://github.com/qwibitai/nanoclaw/issues/2528) | Created 2026-05-18, updated 2026-08-05 (1 comment) | **Signal media accessibility** — attachments land on host but containerized agent cannot read them. Blocks real-world Signal usage; likely needs volume-mount or file-server helper (related to #3156). |
| [#3050](https://github.com/qwibitai/nanoclaw/pull/3050) | Open since 2026-07-14, updated 2026-08-05 | **Dial channel integration** — adds a new communication channel (Dial) to the picker/wizard. Signals community interest in expanding beyond Signal/WhatsApp. |

## 5. Bugs & Stability — Today's Reports & Fixes

| Severity | Issue / PR | Status | Fix PR |
|----------|------------|--------|--------|
| **Critical** | [#3175/#3192](https://github.com/qwibitai/nanoclaw/pull/3192) — `outbound.db` double-write corruption risk | Fix merged (#3175), re-validated (#3192) | #3175 (merged), #3192 (open) |
| **High** | [#3191](https://github.com/qwibitai/nanoclaw/pull/3191) — WhatsApp `setup()` hangs indefinitely on logged-out session | Open, fix authored | #3191 (open) |
| **High** | [#2528](https://github.com/qwibitai/nanoclaw/issues/2528) — Signal images/PDFs unreachable in agent container | Open since May | None yet (blocked on #3156?) |
| **Medium** | [#3188](https://github.com/qwibitai/nanoclaw/pull/3188) — MCP servers miss `HTTPS_PROXY`/CA-trust env vars | Open, fix authored | #3188 (open) |
| **Medium** | [#2006](https://github.com/qwibitai/nanoclaw/issues/2006) — Debian 12 LXC docker socket permission denied post-install | Open since April | None yet |
| **Low** | [#2346](https://github.com/qwibitai/nanoclaw/pull/2346) — Unknown slash commands dropped silently | Open since May | #2346 (open) |

**Pattern:** Core runtime bugs (DB, session hangs, container env) get same-day fix PRs; older install/environment issues (#2006, #2528) linger, suggesting they require deeper infra changes or are lower priority for the core team.

## 6. Feature Requests & Roadmap Signals

| Feature | Source | Likelihood for Next Release |
|---------|--------|-----------------------------|
| **Tavily MCP tool skill** | [#3190](https://github.com/qwibitai/nanoclaw/pull/3190) (utility skill) | **High** — standalone skill, no core changes, follows guidelines. |
| **"add-why" diagnostic skill** | [#3189](https://github.com/qwibitai/nanoclaw/pull/3189) (utility skill) | **High** — self-contained, high dev-tool value. |
| **Dial channel integration** | [#3050](https://github.com/qwibitai/nanoclaw/pull/3050) (feature skill) | **Medium** — requires wizard/skill plumbing, but active since July. |
| **Host seams for skill-owned capabilities** | [#3186](https://github.com/qwibitai/nanoclaw/pull/3186) (refactor) | **Medium** — architectural, enables future skills; may need more review. |
| **Stale skill removal (qodo, Google MCP)** | [#3172](https://github.com/qwibitai/nanoclaw/pull/3172) (chore) | **High** — cleanup, low risk. |

**Roadmap inference:** Next version will likely ship **3–4 new utility skills** (Tavily, add-why, Dial) plus the **WhatsApp hang fix** and **MCP env propagation**. The host-seams refactor may land if review completes; Signal media fix (#2528) probably slips unless #3156 merges quickly.

## 7. User Feedback Summary

| Pain Point | Evidence | User Impact |
|------------|----------|-------------|
| **Signal media broken in containers** | [#2528](https://github.com/qwibitai/nanoclaw/issues/2528) — "images/PDFs arrive at host but agent can't open them" | Blocks primary Signal use case; users cannot analyze shared screenshots or documents. |
| **Fresh install fails on Debian LXC** | [#2006](https://github.com/qwibitai/nanoclaw/issues/2006) — docker socket permission denied after `usermod` | New users on Proxmox/VE hit immediate wall; recovery path doesn't fire. |
| **WhatsApp session hang on startup** | [#3191](https://github.com/qwibitai/nanoclaw/pull/3191) — unbounded `await` on logged-out session | Host startup stalls indefinitely; requires manual QR re-scan. |
| **Unknown slash commands silently dropped** | [#2346](https://github.com/qwibitai/nanoclaw/pull/2346) — categorized as `passthrough`, response lost | Confusing UX; users think command executed when it was ignored. |
| **MCP servers lack proxy/CA env** | [#3188](https://github.com/qwibitai/nanoclaw/pull/3188) — spawned stdio MCP servers miss `HTTPS_PROXY` | Breaks enterprise deployments with egress proxies or custom CAs. |

**Sentiment:** Users encounter **install/environment friction** (LXC, container file access, proxy env) and **channel reliability gaps** (Signal media, WhatsApp hang). Core contributors respond quickly to runtime bugs; environment issues accumulate.

## 8. Backlog Watch — Stale Items Needing Attention

| Item | Age | Why It Matters | Suggested Action |
|------|-----|----------------|------------------|
| [#2006](https://github.com/qwibitai/nanoclaw/issues/2006) — Debian 12 LXC docker permission denied | 103 days | Blocks onboarding for Proxmox/VE users; recovery path broken. | Add `newgrp docker` or `sg docker` step in install script; document LXC-specific notes. |
| [#2528](https://github.com/qwibitai/nanoclaw/issues/2528) — Signal attachments unreachable in container | 80 days | Core Signal feature broken; affects all containerized deployments. | Pair with #3156 merge; ensure volume mount or file-server helper for media. |
| [#2346](https://github.com/qwibitai/nanoclaw/pull/2346) — Unknown slash commands dropped | 90 days | Silent failure confuses users; easy fix (fall through to `category: 'none'`). | Merge — low risk, high UX value. |
| [#3172](https://github.com/qwibitai/nanoclaw/pull/3172) — Remove stale qodo/Google MCP skills | 5 days | Dead code increases maintenance surface; cleanup. | Merge — trivial, follows guidelines. |

---

**Health Indicators:**  
✅ **High PR throughput** (12/24h) with same-day merges for critical fixes  
✅ **Clear architectural guardrails** (single-writer DB, delivery adapter) being enforced  
⚠️ **Two 3-month-old environment/install issues** unresolved — risk to new-user adoption  
⚠️ **Signal media path** still broken despite related PR (#3156) open for a week  

**Next-milestone watch:** #3156 (attachments), #3191 (WhatsApp timeout), #3188 (MCP env), and the three utility skills (#3190, #3189, #3050) are the highest-probability candidates for the next release cut.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest — 2026-08-06

## 1. Today's Overview
NullClaw shows **low community activity** in the past 24 hours with zero new issues, zero merged PRs, and no releases. Development momentum is carried by **two open bug-fix PRs** (#985, #984) authored by core contributor `raskevichai`, both targeting stability regressions in the agent runtime stack and channel polling supervisor. The project remains in a **maintenance/bug-fix phase** with no feature work visible today.

## 2. Releases
**No new releases** published today. The latest release information is unavailable in the provided data.

## 3. Project Progress
**No PRs were merged or closed today.** Both active PRs remain in open/review state:

| PR | Title | Target | Status |
|----|-------|--------|--------|
| [#985](https://github.com/nullclaw/nullclaw/pull/985) | `fix(runtime): give the agent turn path a 16 MiB stack` | Runtime stack size for `SessionManager.processMessage*()` / `Agent.turn()` | Open |
| [#984](https://github.com/nullclaw/nullclaw/pull/984) | `fix(channels): let poll failures age out a dead polling thread` | Telegram/Matrix channel polling supervisor | Open |

Both PRs reference and aim to close pre-existing issues (#976, #972), indicating **reactive bug-fixing** rather than proactive feature development.

## 4. Community Hot Topics
With **zero issues updated** and only **two PRs** (both with 0 comments, 0 reactions), there are no community-driven discussions today. The sole activity comes from a single maintainer (`raskevichai`) addressing internal stability concerns. This suggests:
- **Low external contributor engagement**
- **Issues #976 and #972** (referenced by the PRs) are the current technical pain points but lack public discussion
- Community feedback channels (Discord, forums, etc.) may be where real user pain surfaces

## 5. Bugs & Stability
Two **high-severity stability bugs** are being addressed via open PRs:

| Severity | Bug | PR | Impact |
|----------|-----|----|--------|
| **High** | Agent turn path uses only 2 MiB stack (`SESSION_TURN_STACK_SIZE` aliased to `HEAVY_RUNTIME_STACK_SIZE`), risking stack overflow in deep recursive agent turns | [#985](https://github.com/nullclaw/nullclaw/pull/985) | Potential crashes during complex agent reasoning loops |
| **High** | Channel polling threads (Telegram, Matrix) go silent after idle periods; supervisor fails to detect dead threads, requiring full gateway restart | [#984](https://github.com/nullclaw/nullclaw/pull/984) | **Silent channel outages** — users lose messaging connectivity without logs/alerts |

**Both have fix PRs open but unmerged.** No new crashes or regressions reported today.

## 6. Feature Requests & Roadmap Signals
**No feature requests or roadmap signals** visible in today's data. The two PRs are pure stability fixes. If the project follows a "stabilize → release" cadence, the next version will likely be a **patch release (vX.Y.Z+1)** containing these two fixes. No evidence of upcoming major features (multi-agent, tooling, UI, etc.).

## 7. User Feedback Summary
**No direct user feedback** (issues, comments, reactions) captured in the last 24h. The referenced bugs (#976, #972) imply:
- **Agent developers** hit stack limits during complex turns (PR #985)
- **Gateway operators** experience silent channel failures overnight (PR #984) — a **critical reliability gap** for production deployments
- Users currently **must restart the entire gateway** to recover channels, indicating poor operational ergonomics

## 8. Backlog Watch
| Item | Type | Age | Concern |
|------|------|-----|---------|
| [#976](https://github.com/nullclaw/nullclaw/issues/976) | Issue | Referenced by PR #985 (2026-08-05) | Stack size too small for agent turn path — **PR #985 open, unmerged** |
| [#972](https://github.com/nullclaw/nullclaw/issues/972) | Issue | Referenced by PR #984 (2026-08-05) | Channel polling supervisor blindness — **PR #984 open, unmerged** |
| **No other stale issues/PRs** visible in data | | | |

**Maintainer attention needed:** Both fix PRs (#985, #984) have been open since 2026-08-05 with **zero review activity**. Given their high severity (silent outages, potential crashes), they should be prioritized for review/merge to unblock a patch release.

---

### Project Health Indicators (2026-08-06)
| Metric | Status |
|--------|--------|
| **Issue velocity** | ⚪ Zero (0 new, 0 updated) |
| **PR throughput** | 🟡 Low (2 open, 0 merged) |
| **Release cadence** | ⚪ None today |
| **Community engagement** | 🔴 None visible |
| **Critical bug backlog** | 🟠 2 high-severity fixes pending merge |

**Bottom line:** NullClaw is in a **quiet maintenance window** with two critical stability fixes awaiting review. The project would benefit from faster PR turnaround on high-severity bugs and more visible community channels to surface user pain earlier.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-08-06

## 1. Today's Overview
IronClaw is in a high-velocity stabilization phase following the **v1.1.0-rc.1 release (2026-08-03)**. The project shows **43 issue updates** and **50 PR updates** in 24 hours, with a 3:1 open-to-closed ratio on PRs indicating active development. Core workstreams converge on **skills architecture maturation**, **WebUI/Reborn stabilization**, **CI reliability**, and **extensibility via IronHub/MCP**. A cluster of "bug_bash" issues (P1/P2) filed today suggests an active QA cycle targeting cross-channel delivery, MCP auth, and agent hallucination problems.

## 2. Releases
### **ironclaw-v1.1.0-rc.1** (2026-08-03)
First release candidate since 1.0.0. Headline features:
- **Extension reach**: Register arbitrary hosted MCP servers; install from IronHub deep links
- **Durable file attachments** that cross channels
- **Slack `/ironclaw` slash commands**
- Broad pass on making failures legible

> **Migration note**: No breaking changes documented in release notes; this is a release candidate for validation.  
> **Link**: [Release v1.1.0-rc.1](https://github.com/nearai/ironclaw/releases/tag/ironclaw-v1.1.0-rc.1)

## 3. Project Progress (Merged/Closed PRs Today)
| PR | Scope | Impact |
|----|-------|--------|
| [#7261](https://github.com/nearai/ironclaw/pull/7261) | CI: release canary temp path | Fixed zero-job failure in tag-only release workflow |
| [#7196](https://github.com/nearai/ironclaw/pull/7196) | deps: WASM group (wasmtime-wasi, wit-component, wit-parser) | Routine dependency updates |
| [#6831](https://github.com/nearai/ironclaw/pull/6831) | **feat(reborn): standardized messaging framework** | 16 core ops, 13 reserved names, canonical JSON schemas, 12-code error taxonomy — foundational for host-owned messaging |
| [#7053](https://github.com/nearai/ironclaw/pull/7053) | E2E: critical coverage gaps | First-run LLM onboarding, project lifecycle, automation lifecycle |
| [#7056](https://github.com/nearai/ironclaw/pull/7056) | E2E: automation lifecycle | Create → rename → pause → resume → delete coverage |
| [#7244](https://github.com/nearai/ironclaw/pull/7244) | CI: main branch failures | Stabilization |
| [#741](https://github.com/nearai/ironclaw/pull/741) | LLM: Bedrock streaming via `converse_stream()` | Real-time token streaming for web gateway/TUI |
| [#6892, #6394, #4632](https://github.com/nearai/ironclaw/issues/6892) | Dogfooding/QA epics | Closed — end-to-end gaps stabilized |

**Key advancement**: The standardized messaging framework (#6831) and E2E coverage (#7053, #7056) unblock reliable delivery and automation workflows for v1.1.0.

## 4. Community Hot Topics (Most Active Issues/PRs)
| Item | Type | Comments | Core Need |
|------|------|----------|-----------|
| [#3036](https://github.com/nearai/ironclaw/issues/3036) | **Epic: Configuration-as-Code** | 7 👍1 | Declarative tenant blueprints & use-case harnesses — replace hand-edited `.env`, `.system/`, settings JSON, extension installs, runtime flags with schema, diff, audit trail, source control |
| [#7194](https://github.com/nearai/ironclaw/issues/7194) | **feat: shared channel as outbound target** | 3 | Agents can enumerate/post to Slack channels but cannot designate them as *delivery targets* for final replies — blocks host delivery layer routing |
| [#7230](https://github.com/nearai/ironclaw/pull/7230) | **feat(inspector): bounded diagnostic session storage** | — | XL PR adding typed diagnostic contracts (prompt, model calls, tool exec, activity, stats, snapshots) + LRU-evicted store scoped by tenant/user/thread/run — enables Web Debug Inspector |
| [#7171](https://github.com/nearai/ironclaw/pull/7171) | **fix(skills): DB-backed skill tree + runnable commands** | — | Fixes skills disappearing after install; part of epic #6941 (model-chosen skills) |
| [#6938](https://github.com/nearai/ironclaw/pull/6938) | **fix(skills): model chooses skill, not keyword scorer** | — | Removes host-side keyword scoring; only model `builtin.skill_activate` activates skills — shifts control to LLM |
| [#7038](https://github.com/nearai/ironclaw/issues/7038) | **Epic: Storybook + AI-first Design System** | 0 | Theming, assets, interactions, IA — backed by full proposal package (PR #7257) and APDD governance kit |

**Underlying theme**: Operators want **declarative, auditable configuration** (#3036) and **model-driven skill selection** (#6938) — moving away from host-centric heuristics toward agent autonomy with guardrails.

## 5. Bugs & Stability (Reported Today, Ranked by Severity)
| Issue | Severity | Area | Fix PR? |
|-------|----------|------|---------|
| [#7247](https://github.com/nearai/ironclaw/issues/7247) | **P1** | GitHub auth hallucination | Agent claims GitHub connected without verification; next GitHub request fails |
| [#7246](https://github.com/nearai/ironclaw/issues/7246) | **P1** | Automation status hallucination | Agent fabricates running automation (BTC digest) while UI shows "No automations yet" |
| [#7248](https://github.com/nearai/ironclaw/issues/7248) | **P2** | MCP endpoint validation | Invalid custom MCP endpoint accepted → run fails on tool discovery |
| [#7250](https://github.com/nearai/ironclaw/issues/7250) | **P2** | DeepWiki MCP error reporting | Network errors misreported as auth/URL issues |
| [#7251](https://github.com/nearai/ironclaw/issues/7251) | **P2** | MCP auth discovery | Agent guesses auth type instead of inspecting endpoint or initiating flow |
| [#7249](https://github.com/nearai/ironclaw/issues/7249) | **P2** | Cross-channel delivery leak | Slack DM execution summary delivered to Telegram with Slack metadata/JSON |
| [#7254](https://github.com/nearai/ironclaw/issues/7254) | **P2** | Slack feedback attachments | Cannot download/read files attached to Slack feedback threads |
| [#6257](https://github.com/nearai/ironclaw/issues/6257) | **Bug** | PDF mime_type | `Invalid value (attachments.mime_type)` on PDF send/generate — suspected type registration gap |
| [#7209](https://github.com/nearai/ironclaw/issues/7209) | **Bug** | CI regression gate | Gate cannot detect `node:assert` style used in 99% of frontend tests → blocks valid PRs |
| [#7204](https://github.com/nearai/ironclaw/issues/7204) | **Bug** | WebUI composer focus | Composer not focused on "+ New"/thread open; stray accent ring — **CLOSED** |

**Pattern**: Multiple **agent hallucination/state sync** bugs (P1) and **MCP integration reliability** issues (P2) — likely surfaced by v1.1.0-rc.1 dogfooding. No fix PRs linked yet for today's bug_bash issues.

## 6. Feature Requests & Roadmap Signals
| Signal | Source | Likelihood for v1.1.0 / Next |
|--------|--------|------------------------------|
| **Configuration-as-Code (tenant blueprints)** | [#3036](https://github.com/nearai/ironclaw/issues/3036) (epic, 7 comments) | High — operator demand, architectural prerequisite for multi-tenant ops |
| **Model-chosen skills (remove keyword scorer)** | [#6938](https://github.com/nearai/ironclaw/pull/6938), [#6941](https://github.com/nearai/ironclaw/issues/6941) | High — PR stacked on #6745, part of v1.1.0 epic |
| **IronHub integration (runtime tool/skill marketplace)** | [#6731](https://github.com/nearai/ironclaw/issues/6731) (epic, v1.1.0) | High — mentioned in v1.1.0-rc.1 release notes ("installing from IronHub deep links") |
| **Admin-managed agents as UserId subjects** | [#6578](https://github.com/nearai/ironclaw/issues/6578) (epic) | Medium — non-human subjects for product agents/automations |
| **Web Debug Inspector (`?debug=true`)** | [#7218](https://github.com/nearai/ironclaw/issues/7218) (epic), [#7230](https://github.com/nearai/ironclaw/pull/7230) | Medium — diagnostic store PR open; three-view inspector (Prompt, Activity, Tools) |
| **Storybook + AI-first Design System** | [#7038](https://github.com/nearai/ironclaw/issues/7038) (epic), [#7039](https://github.com/nearai/ironclaw/pull/7039) | Medium — Phase 1 PR open; governance evaluation [#7255](https://github.com/nearai/ironclaw/pull/7255) |
| **Virtual filesystem mount for skill execution** | [#7203](https://github.com/nearai/ironclaw/issues/7203) | Medium — spin-out from #7171; needed for runnable skill scripts |
| **Bedrock streaming (`converse_stream`)** | [#741](https://github.com/nearai/ironclaw/issues/741) (closed) | Done — merged for v1.1.0 |

**Prediction**: v1.1.0 will ship **IronHub marketplace**, **model-driven skills**, **standardized messaging**, and **Slack slash commands**. CaC (#3036) and Design System (#7038) likely target v1.2+.

## 7. User Feedback Summary
| Pain Point | Evidence | Impact |
|------------|----------|--------|
| **Agent hallucinates state** (GitHub connected, automations running) | [#7247](https

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-08-06

## 1. Today's Overview
LobsterAI shipped **version 2026.8.5** yesterday, delivering a native daily check-in experience and enterprise-grade account isolation. The repository saw **high merge velocity** today: 12 PRs closed/merged in the last 24 hours, spanning activity polish, window-lifecycle hardening, OpenClaw gateway lock fixes, and a new title-bar conversation search. Three active bugs were updated, two filed today around system-prompt duplication and skill-switch persistence — signals that the agent-runtime layer is under active scrutiny.

## 2. Releases
### **LobsterAI 2026.8.5** (2026-08-05)
| Change | PR | Type |
|---|---|---|
| Native daily check-in experience (startup credit poster, close icon, localized error messages, retry binding) | [#2408](https://github.com/netease-youdao/LobsterAI/pull/2408), [#2439](https://github.com/netease-youdao/LobsterAI/pull/2439), [#2433](https://github.com/netease-youdao/LobsterAI/pull/2433), [#2432](https://github.com/netease-youdao/LobsterAI/pull/2432) | **Feature** |
| Enterprise: isolate account-scoped auth & service flows | [#2409](https://github.com/netease-youdao/LobsterAI/pull/2409) | **Feature** |
| Style / asset polish | — | **Chore** |

**Breaking changes / migration notes:** None documented. The enterprise auth isolation is internal; plugin / skill authors should see no API change.

## 3. Project Progress (Merged / Closed PRs Today)
| PR | Area | Summary |
|---|---|---|
| [#2437](https://github.com/netease-youdao/LobsterAI/pull/2437) | main, cowork | Harden window lifecycle & shutdown: drain timer + hard deadline for proxy/preview servers; gate main-window activation on first render. |
| [#2436](https://github.com/netease-youdao/LobsterAI/pull/2436) | main, openclaw | Prevent OpenClaw gateway lock-file poisoning from self-restart races (Windows `TerminateProcess` mid-write, gateway-initiated restarts). |
| [#2435](https://github.com/netease-youdao/LobsterAI/pull/2435) | renderer, docs, cowork | **Title-bar conversation search** button beside artifact toggle; responsive UI, shared init path. |
| [#2434](https://github.com/netease-youdao/LobsterAI/pull/2434) / [#2431](https://github.com/netease-youdao/LobsterAI/pull/2431) | renderer, docs, main, cowork | `rlog` fixes (details sparse). |
| [#1279](https://github.com/netease-youdao/LobsterAI/pull/1279), [#1280](https://github.com/netease-youdao/LobsterAI/pull/1280), [#1281](https://github.com/netease-youdao/LobsterAI/pull/1281) | deps | Dependabot: `cross-env 7→10`, `react-dom 18→19.2.4`, `vite 5→8.0.9` (all stale, finally closed). |

**Net advancement:** Stability (shutdown, gateway lock), UX (search, activity), and dependency hygiene.

## 4. Community Hot Topics
| Item | Activity | Underlying Need |
|---|---|---|
| [#2441](https://github.com/netease-youdao/LobsterAI/issues/2441) — Skill switch persists by directory name, OpenClaw matches by front-matter `name`; `openclaw.json` overwritten whole-file | **New today, 0 comments** | **Persistable, granular skill enable/disable** without losing user edits; developers want a stable key (front-matter `name`) and merge-style config writes. |
| [#2440](https://github.com/netease-youdao/LobsterAI/issues/2440) — Desktop system prompt duplicates 78 % of `AGENTS.md` content (4,425 chars) | **New today, 0 comments** | **Deduplicate system-instruction injection**; users see token waste & confusing double-instructions. |
| [#1200](https://github.com/netease-youdao/LobsterAI/issues/1200) — NIM super-large-group `teamTypeNum` hard-coded wrong (stale since Apr) | **1 comment, 0 👍** | Correct group-name resolution in IM gateway; fix is trivial (one-line enum map) but unmerged. |

## 5. Bugs & Stability (Ranked by Severity)
| Severity | Issue | Fix PR? |
|---|---|---|
| **High** | [#2441](https://github.com/netease-youdao/LobsterAI/issues/2441) — Skill toggle silently fails; config file clobbered | No |
| **High** | [#2440](https://github.com/netease-youdao/LobsterAI/issues/2440) — System prompt duplicated in every new session | No |
| **Medium** | [#1200](https://github.com/netease-youdao/LobsterAI/issues/1200) — NIM super-group name lookup broken | **Yes**: [#1201](https://github.com/netease-youdao/LobsterAI/pull/1201) (open, stale) |
| **Low** | Gateway lock poisoning (fixed in [#2436](https://github.com/netease-youdao/LobsterAI/pull/2436)) | Merged |
| **Low** | App hang on quit due to keep-alive sockets (fixed in [#2437](https://github.com/netease-youdao/LobsterAI/pull/2437)) | Merged |

## 6. Feature Requests & Roadmap Signals
| Signal | Likelihood for Next Release |
|---|---|
| **Skill config merge + stable key** (from #2441) | **High** — blocks plugin ecosystem usability |
| **System-prompt deduplication** (from #2440) | **High** — token cost & UX clarity |
| **Conversation search in title bar** (delivered in [#2435](https://github.com/netease-youdao/LobsterAI/pull/2435)) | **Done** |
| **Enterprise multi-account isolation** (delivered in [#2409](https://github.com/netease-youdao/LobsterAI/pull/2409)) | **Done** |
| **Daily check-in / credit campaign** (delivered in 2026.8.5) | **Done** |

## 7. User Feedback Summary
- **Pain points:**  
  1. **Silent skill-toggle failure** — users enable a skill, UI shows “on”, but agent ignores it.  
  2. **Config file overwrite** — manual `openclaw.json` edits lost on any toggle.  
  3. **Bloated system prompt** — duplicate instructions waste context window & confuse model.  
  4. **Stale IM bug** — group names show as raw IDs for months.  
- **Positive signals:**  
  - Title-bar search landed fast (requested → merged same day).  
  - Activity campaign polish shows attention to onboarding delight.  
  - Dependency upgrades finally merged after months.

## 8. Backlog Watch
| Item | Age | Why It Matters |
|---|---|---|
| [#1200](https://github.com/netease-youdao/LobsterAI/issues/1200) / [#1201](https://github.com/netease-youdao/LobsterAI/pull/1201) | 4 months | One-line fix for enterprise IM correctness; PR ready but stale. |
| [#2441](https://github.com/netease-youdao/LobsterAI/issues/2441) | 1 day | Core plugin/skill UX; needs design decision: merge strategy & stable key. |
| [#2440](https://github.com/netease-youdao/LobsterAI/issues/2440) | 1 day | Token-budget & clarity; likely a prompt-assembly refactor. |

---
*Generated from GitHub data (issues, PRs, releases) as of 2026-08-06 00:00 UTC. All links point to `github.com/netease-youdao/LobsterAI`.*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (QwenPaw) Project Digest — 2026-08-06

## 1. Today's Overview
CoPaw shows **high velocity** with 72 total issue/PR updates in the last 24 hours (22 issues, 50 PRs). The project is in active beta stabilization (v2.1.0-beta.x) with simultaneous work on: desktop/Tauri packaging fixes, provider resilience (SSE retries, capability caching), MCP tool reliability, and console UX improvements. Eleven PRs were merged/closed today, including long-running model-fallback work and several critical bug fixes. No new release shipped; the focus remains on hardening v2.1.0-beta.

## 2. Releases
**No new releases today.** Current latest: `v2.1.0-beta.2` (pre-release). The team is iterating on beta blockers (desktop env injection, browser SDK crashes, MCP tool stability) before a stable v2.1.0.

## 3. Project Progress — Merged / Closed Today
| PR / Issue | Type | Summary | Link |
|------------|------|---------|------|
| #5597 / #5598 | **Feature** | **Per-agent & global LLM model fallback** with safe retry boundaries + Console UI for configuring fallback chains. Major resilience feature. | [#5597](https://github.com/agentscope-ai/QwenPaw/pull/5597) · [#5598](https://github.com/agentscope-ai/QwenPaw/pull/5598) |
| #6675 | **Bug Fix** | Force relay `reasoning_content` for DeepSeek thinking-mode models; fixes multi-turn stripping of `ThinkingBlock`s. | [#6675](https://github.com/agentscope-ai/QwenPaw/pull/6675) |
| #5447 | **Bug Fix** | Console channel now yields failed `AgentResponse` on errors instead of leaving UI in perpetual waiting state. | [#5447](https://github.com/agentscope-ai/QwenPaw/pull/5447) |
| #5462 | **Feature** | Global responsive utility classes for Console mobile adaptation. | [#5462](https://github.com/agentscope-ai/QwenPaw/pull/5462) |
| #6718 | **Feature** | Unified app market listings UI. | [#6718](https://github.com/agentscope-ai/QwenPaw/pull/6718) |
| #6690 | **Bug Fix** | Cron `pause`/`resume` now persist `enabled` state to repo (survives restart). | [#6690](https://github.com/agentscope-ai/QwenPaw/issues/6690) |
| #6700 | **Bug Fix** | Large tool-output truncation & history pagination to prevent UI freeze & context-window overflow. | [#6700](https://github.com/agentscope-ai/QwenPaw/issues/6700) |
| #6413 | **UX Decision** | Closed: “完整模式” (full mode) retained; team decided against removing the toggle. | [#6413](https://github.com/agentscope-ai/QwenPaw/issues/6413) |
| #6392 | **Feature Request** | Closed: Agent-level token stats deferred; suggested via plugin/extension. | [#6392](https://github.com/agentscope-ai/QwenPaw/issues/6392) |

## 4. Community Hot Topics (Most Comments / Reactions)
| Item | Type | Comments | Core Need / Signal |
|------|------|----------|-------------------|
| **#6684** | Enhancement | 4 | **Channel auto-retry / health-check** — self-hosted Matrix channels fail on startup because QwenPaw boots faster than the homeserver; no automatic reconnect. |
| **#6436** | Enhancement | 3 | **Automatic model routing** — route each request to best-fit model (local/fast for simple, vision for images, large for reasoning) instead of fixed per-agent model. |
| **#6732** | Bug | 2 (new today) | **MCP tools stop working after hours** — require container restart; suggests connection/lease expiration or state drift in MCP client. |
| **#6697** | Bug | 2 | **Desktop v2.1.0b1 injects `PYTHONHOME`** → every Python subprocess crashes (`ModuleNotFoundError: encodings`). Blocker for Windows desktop users. |
| **#6696** | Bug | 2 | **WeChat iLink `context_token` consumed by typing indicator** → replies rejected (ret=-2), “working” stuck. Channel-specific protocol bug. |
| **#6721** | PR (open) | — | Retry reasoning-content errors for AgentScope messages; active review. |
| **#6525** | PR (open) | — | **User-context transparent pass-through** (Chat API → Agent → Tool → MCP → SKILL CLI); high architectural impact. |

**Underlying theme:** Users are pushing CoPaw into **production multi-channel, multi-model, long-running** scenarios — reliability (retries, health checks, connection lifecycle) now outweighs new feature requests.

## 5. Bugs & Stability — Today’s Reports (Ranked by Severity)
| Severity | Issue | Summary | Fix PR? |
|----------|-------|---------|---------|
| 🔴 **Critical** | **[#6697](https://github.com/agentscope-ai/QwenPaw/issues/6697)** | Desktop v2.1.0b1 sets `PYTHONHOME` → **all Python subprocesses crash** on Windows. Blocks desktop beta. | No PR yet |
| 🔴 **Critical** | **[#6698](https://github.com/agentscope-ai/QwenPaw/issues/6698)** | Browser SDK `open()` always fails with `WireProtocolError: Target crashed` (isolated Playwright session). | No PR yet |
| 🟠 **High** | **[#6732](https://github.com/agentscope-ai/QwenPaw/issues/6732)** | MCP tools **periodically become unresponsive** (nightly/hours); only container restart recovers. | No PR yet |
| 🟠 **High** | **[#6731](https://github.com/agentscope-ai/QwenPaw/issues/6731)** | `execute_shell_command` crashes with `TypeError: replace() should be called on dataclass instances` when `sandbox_config` passed. | No PR yet |
| 🟠 **High** | **[#6696](https://github.com/agentscope-ai/QwenPaw/issues/6696)** | WeChat iLink: one-time `context_token` consumed by typing indicator → replies rejected, indicator stuck. | No PR yet |
| 🟡 **Medium** | **[#6726](https://github.com/agentscope-ai/QwenPaw/issues/6726)** | Long console sessions (20–30+ tool calls) → 400 “tool message must follow tool_calls” due to history compaction. | No PR yet |
| 🟡 **Medium** | **[#6708](https://github.com/agentscope-ai/QwenPaw/issues/6708)** | Upstream 503 inside SSE stream (HTTP 200) not retried; request fails immediately. | **PR #6714** (open) |
| 🟡 **Medium** | **[#6707](https://github.com/agentscope-ai/QwenPaw/issues/6707)** | Thinking-mode upstream + tool-call history → 400 `reasoning_content` relay failure. | **PR #6721** (open) |
| 🟡 **Medium** | **[#6687](https://github.com/agentscope-ai/QwenPaw/issues/6687)** | OpenRouter multimodal probe overwrites true capabilities with `false`. | No PR yet |
| 🟢 **Low** | **[#6480](https://github.com/agentscope-ai/QwenPaw/issues/6480)** | `nohup`/`&` background commands hang agent (shell process never returns to idle). | No PR yet |

## 6. Feature Requests & Roadmap Signals
| Request | Source | Likelihood for Next Version | Rationale |
|---------|--------|----------------------------|-----------|
| **Channel auto-retry / health-check** | #6684 (4 💬) | **High** | Directly blocks self-hosted Matrix/Slack/DingTalk reliability; simple retry/backoff + health endpoint. |
| **Automatic model routing** | #6436 (3 💬) | **Medium** | Aligns with merged model-fallback infra (#5597); needs routing policy engine. |
| **Configurable MCP tool-call timeout** | #6724 (1 💬) | **High** | Zero-config timeout = indefinite hang; PR-ready scope (add `timeout` to `MCPClientConfig` + call-level guard). |
| **Live artifact canvas (side-panel HTML render)** | #6730 (1 💬) | **Medium** | UX win for dashboard/report workflows; builds on new workspace artifact cards (#6719 merged). |
| **WeChat approval prompts in Chinese** | #6728 (1 💬) | **High** | Trivial i18n fix; follows #6695 (WeChat approval notifications). |
| **User-context pass-through (API→Agent→Tool→MCP→SKILL)** | #6525 (PR) | **High** | Large PR open; enables multi-tenant/enterprise authz; architectural priority. |
| **Capability cache TTL & model-switch invalidation** | #6723 (PR) | **High** | Fixes stale `rejects_media`/`needs_reasoning_content` cache causing permanent capability mis-detection. |

## 7. User Feedback Summary
| Pain Point | Frequency | User Quote / Context |
|------------|-----------|----------------------|
| **Desktop beta unusable on Windows** | 2 critical issues | “Every python subprocess crashes… `PYTHONHOME` injected by Tauri bundle” (#6697) |
| **MCP tools die silently overnight** | 1 report, high impact | “Restart docker container → works again” (#6732) — suggests connection pooling / lease issue. |
| **No retry on channel connect failure** | 1 enhancement, 4 comments | “Self-hosted Matrix starts slower than QwenPaw → manual re-save channel every boot” (#6684). |
| **Large tool output freezes UI / blows context** | 1 bug (closed + fix merged) | “Page unresponsive for minutes… triggers model context limit” (#6700). |
| **Cron pause/resume not persisted** | 1 bug (closed + fix merged) | “Restart → tasks run again despite pause” (#6690). |
| **WeChat typing indicator breaks reply flow** | 1 bug, 2 comments | “`context_token` consumed by typing → ret=-2, stuck ‘working’” (#6696). |
| **Background `nohup` commands hang agent** | 1 question, 2 comments | “Shell process detached via `&`/`nohup` never returns to idle” (#6480). |

**Satisfaction signal:** Users appreciate rapid fixes (cron, large-output, DeepSeek reasoning, model fallback UI) but are **blocked by desktop/Tauri regressions** and **MCP/channel reliability gaps** in v2.1.0-beta.

## 8. Backlog Watch — Stale / Unanswered Important Items
| Item | Age | Why It Matters | Status |
|------|-----|----------------|--------|
| **[#6436](https://github.com/agentscope-ai/QwenPaw/issues/6436)** Automatic model routing | 13 days | Strategic feature; builds on fallback infra. No maintainer triage yet. | Open, 3 💬 |
| **[#6684](https://github.com/agentscope-ai/QwenPaw/issues/6684)** Channel retry/health-check | 2 days | High user pain; simple fix. No PR assigned. | Open, 4 💬 |
| **[#6480](https://github.com/agentscope-ai/QwenPaw/issues/6480)** `nohup`/`&` background command hang | 11 days | Blocks long-running shell workflows. No reproduction/fix yet. | Open, 2 💬 |
| **[#3874](https://github.com/agentscope-ai/QwenPaw/pull/3874)** Refine retry logic (model) | 101 days | Marked “Ready for Merge” since April; superseded by #5597? Needs closure. | Closed today (merged?) |
| **[#6302](https://github.com/agentscope-ai/QwenPaw/pull/6302)** Unify provider discovery / routing / agent controls | 16 days | Large architectural PR; touches #6436 routing. Stalled in review. | Open, 0 💬 |
| **[#6525](https://github.com/agentscope-ai/QwenPaw/pull/6525)** User-context pass-through | 9 days | Cross-cutting change; needs security/perf review. | Open, 0 💬 |

---

**Bottom line:** CoPaw is **shipping fixes fast** (11 merges today) but the **v2.1.0-beta critical path** is blocked by Windows desktop crashes (#6697, #6698) and MCP/channel reliability (#6732, #6684, #6696). The merged model-fallback system (#5597/5598) unlocks the automatic routing request (#6436). Next 48h should prioritize: (1) Tauri `PYTHONHOME` fix, (2) MCP connection lifecycle, (3) channel retry logic — then cut v2.1.0-rc.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-08-06

---

## 1. Today's Overview

ZeroClaw shows **intense design-stage activity** with 50 issues and 50 PRs updated in the last 24 hours, but **no new releases**. The project is dominated by RFCs (15+ open) covering governance, authentication, tool security, gateway protocols, and agent runtime architecture — indicating a **pre-v0.9.0 architectural overhaul** rather than feature shipping. High-priority bugs (P1) in daemon reliability, MCP memory growth, and OpenRouter streaming are being actively triaged. The maintainer decision queue (#8692) tracks 11 RFCs awaiting ratification, suggesting a **governance bottleneck** where design decisions outpace implementation capacity.

---

## 2. Releases

**No new releases** in the last 24 hours. Current version remains at `0.8.3` (per #6808). The v0.9.0 milestone tracker (#7432) lists auth, security, gateway, and breaking-change work as pending.

---

## 3. Project Progress — Merged/Closed Today

Only **1 PR merged/closed** in the last 24h:
- **#9462** (closed): Fixed CI gap where `zeroclaw-plugins` unit tests gated behind `plugins-wasmtime` feature never executed. [PR #9462](https://github.com/zeroclaw-labs/zeroclaw/pull/9462)

**Notable PRs advanced (updated today, still open):**
- **#9778** — Docs: reconcile foundation RFC revision histories (governance hygiene) [PR #9778](https://github.com/zeroclaw-labs/zeroclaw/pull/9778)
- **#9777** — Fix: accept Signal `sourceUuid` for phone-number-private senders [PR #9777](https://github.com/zeroclaw-labs/zeroclaw/pull/9777)
- **#9776** — Security: extend `forbidden_paths` with workspace-relative glob patterns (addresses #8424) [PR #9776](https://github.com/zeroclaw-labs/zeroclaw/pull/9776)
- **#9748** — Runtime: prevent stale provider refreshes from mutating replacement sessions (#9719) [PR #9748](https://github.com/zeroclaw-labs/zeroclaw/pull/9748)
- **#9737** — Security: enforce agent tool policy in pipelines [PR #9737](https://github.com/zeroclaw-labs/zeroclaw/pull/9737)
- **#9717** — CI: adopt direct release attestation action (supply-chain hardening) [PR #9717](https://github.com/zeroclaw-labs/zeroclaw/pull/9717)

---

## 4. Community Hot Topics — Most Active Discussions

| Issue/PR | Comments | Core Theme | Underlying Need |
|----------|----------|------------|-----------------|
| **[#6808](https://github.com/zeroclaw-labs/zeroclaw/issues/6808)** RFC: Work Lanes, Board Automation, Label Cleanup | 18 | Governance / Project management | Reduce maintainer overhead in routing work; automate board hygiene |
| **[#8303](https://github.com/zeroclaw-labs/zeroclaw/issues/8303)** RFC: Goal Mode v1 — bounded foreground Matrix work | 18 | Agent runtime / Multi-turn objectives | Durable, bounded pursuit of user goals across agent turns without runaway scope |
| **[#8603](https://github.com/zeroclaw-labs/zeroclaw/issues/8603)** RFC: ZeroClaw Chat Completions profile | 16 | Gateway / Interop | Enable OpenAI-compatible clients (Open WebUI, Continue.dev, LangChain, etc.) to use ZeroClaw |
| **[#7155](https://github.com/zeroclaw-labs/zeroclaw/issues/7155)** RFC: Per-execution confirmation for high-risk shell commands | 16 | Security / Tool policy | Claude Code-style allow/ask/deny for shell — prevent accidental destructive actions |
| **[#7141](https://github.com/zeroclaw-labs/zeroclaw/issues/7141)** RFC: Pluggable inbound authentication & canonical principals | 12 | Security / Architecture | OIDC + pluggable providers; unify identity across channels (Matrix, Slack, WhatsApp, etc.) |
| **[#9487](https://github.com/zeroclaw-labs/zeroclaw/issues/9487)** RFC: Runtime-owned conversation sessions & transport adapters | 10 | Architecture / Gateway | Clean ownership boundary between runtime and channel adapters; durable admission |
| **[#6954](https://github.com/zeroclaw-labs/zeroclaw/issues/6954)** RFC: Provenance & reply contract for internally initiated agent turns | 9 | Agent runtime / Cron/SOPs | Cryptographic binding of agent-initiated turns to conversation; prevent spoofing |
| **[#9246](https://github.com/zeroclaw-labs/zeroclaw/issues/9246)** RFC: Preserve Todo tracker config during ZeroCode migration | 9 | Config / ZeroCode | Avoid data loss when migrating ownership of config to ZeroCode UI |
| **[#8424](https://github.com/zeroclaw-labs/zeroclaw/issues/8424)** RFC: Workspace-relative forbidden paths & `.zeroclawignore` | 9 | Security / Config | Protect `.env`, `config.yaml`, `rust-toolchain.toml` inside workspace from agent access |
| **[#8832](https://github.com/zeroclaw-labs/zeroclaw/issues/8832)** RFC: Plugin-owned Kanban board for agent work | 8 | Agent / Plugin architecture | Opt-in Kanban as plugin on generic host capabilities — coordinate multi-agent work |

**Pattern:** The top discussions are **all RFCs** — the community is debating *architecture and contracts*, not reporting bugs or requesting features. This is a **design-heavy phase**.

---

## 5. Bugs & Stability — Ranked by Severity

| Severity | Issue | Component | Status | Fix PR |
|----------|-------|-----------|--------|--------|
| **S1 (workflow blocked)** | [#9775](https://github.com/zeroclaw-labs/zeroclaw/issues/9775) OpenRouter streaming drops `provider_extra` | Provider (OpenRouter) | Open | — |
| **S2 (degraded)** | [#9768](https://github.com/zeroclaw-labs/zeroclaw/issues/9768) Daemon reload not on SIGUSR1; docs tell operators to send signal that kills daemon | Runtime / Daemon | Accepted, follow-up | — |
| **S2 (degraded)** | [#9697](https://github.com/zeroclaw-labs/zeroclaw/issues/9697) ZeroCode cannot connect to daemon launched by Windows Task Scheduler | ZeroCode / Daemon | Accepted | — |
| **S2 (degraded)** | [#6350](https://github.com/zeroclaw-labs/zeroclaw/issues/6350) WhatsApp Web: `allowed_numbers` bypassed for LID contacts (silent drops) | Channel (WhatsApp) | Closed | — |
| **High (memory)** | [#8642](https://github.com/zeroclaw-labs/zeroclaw/issues/8642) MCP/tool-schema cloning drives unbounded RSS growth in agent loop | Runtime / MCP | Accepted, in-progress | — |
| **High (security)** | [#9328](https://github.com/zeroclaw-labs/zeroclaw/issues/9328) `verifiable-intent` evaluates constraints without verifying credential chain | Tool / Security | Accepted | — |
| **Medium** | [#9769](https://github.com/zeroclaw-labs/zeroclaw/issues/9769) Withheld-capability notice invisible when log persistence disabled | Observability / Security | Accepted, follow-up | — |
| **Medium** | [#9652](https://github.com/zeroclaw-labs/zeroclaw/issues/9652) `config set` rejects cron key with hyphen alias; `config get/list` reads it | Config / CLI | Closed | — |

**Observation:** Two **S1/P1 bugs** (#9775, #9768) opened in the last 3 days — regression risk in provider streaming and daemon signal handling. The MCP memory leak (#8642) remains open despite being split from #5542 weeks ago.

---

## 6. Feature Requests & Roadmap Signals

**Strong signals for v0.9.0+** (from RFCs with maintainer engagement):

| Feature | RFC | Priority | Likelihood |
|---------|-----|----------|------------|
| **Chat Completions API compatibility** | [#8603](https://github.com/zeroclaw-labs/zeroclaw/issues/8603) | P2, High risk | High — unblocks Open WebUI, Continue.dev, Aider, LangChain |
| **Pluggable authentication (OIDC)** | [#7141](https://github.com/zeroclaw-labs/zeroclaw/issues/7141) | P1, High risk | High — tracked in v0.9.0 auth milestone (#7432) |
| **Per-execution shell confirmation (allow/ask/deny)** | [#7155](https://github.com/zeroclaw-labs/zeroclaw/issues/7155) | P1, High risk | High — security-critical, Claude Code parity |
| **Workspace-relative forbidden paths / `.zeroclawignore`** | [#8424](https://github.com/zeroclaw-labs/zeroclaw/issues/8424) | P2, High risk | Medium — PR #9776 implements core logic |
| **Goal Mode (bounded multi-turn objectives)** | [#8303](https://github.com/zeroclaw-labs/zeroclaw/issues/8303) | P2, High risk | Medium — depends on session/runtime redesign (#9487) |
| **Runtime-owned conversation sessions** | [#9487](https://github.com/zeroclaw-labs/zeroclaw/issues/9487) | P2, High risk | High — foundational for Goal Mode & ACP |
| **OpenRouter prompt caching via `session_id`** | [#9631](https://github.com/zeroclaw-labs/zeroclaw/issues/9631) | P2, High risk | Medium — cost optimization, clear ROI |
| **Computer-use (desktop screen/input control)** | [#6909](https://github.com/zeroclaw-labs/zeroclaw/issues/6909) | P2, High risk | Low — exploratory, no maintained implementation |

**Predicted next-version themes:** Authentication overhaul, Chat Completions gateway, shell safety policy, session/runtime boundaries.

---

## 7. User Feedback Summary — Pain Points & Use Cases

| Pain Point | Evidence | Impact |
|------------|----------|--------|
| **OpenRouter streaming broken** — `provider_extra` dropped, prompt caching unusable | [#9775](https://github.com/zeroclaw-labs/zeroclaw/issues/9775) (S1), [#9631](https://github.com/zeroclaw-labs/zeroclaw/issues/9631) | Blocks cost-effective long conversations; workaround: avoid streaming |
| **Daemon unreliable on Windows** — Task Scheduler launches fail ZeroCode connect | [#9697](https://github.com/zeroclaw-labs/zeroclaw/issues/9697) | Windows users cannot use ZeroCode UI with scheduled daemon |
| **WhatsApp silent message drops** — LID contacts bypass allowlist | [#6350](https://github.com/zeroclaw-labs/zeroclaw/issues/6350) (closed but recent) | Messages lost without error; trust issue for business channels |
| **MCP memory explosion** — unbounded RSS in agent loop | [#8642](https://github.com/zeroclaw-labs/zeroclaw/issues/8642) | OOM kills in WSL2; limits agent session length |
| **No HTTP in cron SOPs** — docs promise watch-loops, but no network capability | [#9780](https://github.com/zeroclaw-labs/zeroclaw/issues/9780) (new today) | Cron-triggered automation cannot call APIs — docs/runtime mismatch |
| **SOP directory default ignored** — daemon silently skips loading SOPs | [#9779](https://github.com/zeroclaw-labs/zeroclaw/issues/9779) (new today) | Configuration appears to work but SOPs never run — silent failure |
| **Config CLI inconsistency** — `config set` rejects hyphen aliases that `get/list` accept | [#9652](https://github.com/zeroclaw-labs/zeroclaw/issues/9652) | Workflow friction; erodes trust in config system |

**Positive signals:** Active contributors (vrurg, Audacity88, NiuBlibing, wangmiao0668000666) driving RFCs and fixes; PR velocity high; security hardening prioritized.

---

## 8. Backlog Watch — Stalled High-Value Items Needing Maintainer Attention

| Item | Type | Age | Why It Matters | Blockers |
|------|------|-----|----------------|----------|
| **[#6808](https://github.com/zeroclaw-labs/zeroclaw/issues/6808)** Work Lanes / Board Automation | RFC (Tracker) | 78 days | Governance debt — maintainers manually triage; automation would scale review | Ratification deferred; needs maintainer time |
| **[#7141](https://github.com/zeroclaw-labs/zeroclaw/issues/7141)** Pluggable Auth / Canonical Principals | RFC | 64 days | v0.9.0 milestone dependency; unblocks multi-tenant, enterprise | Rev 8 open; needs security review |
| **[#7155](https://github.com/zeroclaw-labs/zeroclaw/issues/7155)** Shell Confirmation Tier | RFC | 64 days | Critical safety feature; P1 security | Scope narrowed per maintainer; awaiting final ratification |
| **[#8303](https://github.com/zeroclaw-labs/zeroclaw/issues/8303)** Goal Mode v1 | RFC | 43 days | Core agent UX — bounded objectives | Coupled to session/runtime redesign (#9487) |
| **[#8603](https://github.com/zeroclaw-labs/zeroclaw/issues/8603)** Chat Completions Profile | RFC | 35 days | Highest ecosystem impact — enables all OpenAI-compatible tools | Gateway/runtime boundary unresolved |
| **[#9487](https://github.com/zeroclaw-labs/zeroclaw/issues/9487)** Runtime-owned Sessions | RFC | 9 days | Foundational for Goal Mode, ACP, multi-agent | Ownership boundary with #9488/#9600 under debate |
| **[#8642](https://github.com/zeroclaw-labs/zeroclaw/issues/8642)** MCP Memory Leak | Bug | 34 days | Production OOM risk | Root cause isolated; fix pending |
| **[#9328](https://github.com/zeroclaw-labs/zeroclaw/issues/9328)** Verifiable-Intent Chain Verification | Bug | 13 days | Security: constraint eval without crypto proof | Deep in VI impl; needs crypto review |
| **[#9775](https://github.com/zeroclaw-labs/zeroclaw/issues/9775)** OpenRouter Streaming Regression | Bug | 1 day | S1 — workflow blocked for OpenRouter users | Fresh; needs provider maintainer |
| **[#9768](https://github.com/zeroclaw-labs/zeroclaw/issues/9768)** Daemon SIGUSR1 Doc/Impl Mismatch | Bug | 1 day | S2 — operators told to kill daemon | Fresh; needs runtime maintainer |

**Meta-issue:** **[#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692)** Maintainer Decision Queue — 11 RFCs tracked, updated today. This is the **single point of contention**: design decisions accumulate faster than maintainers can ratify.

---

## Summary Health Indicators

| Indicator | Status | Note |
|-----------|--------|------|
|

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/DenisZheng/agents-radar).*