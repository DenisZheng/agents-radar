# OpenClaw Ecosystem Digest 2026-06-21

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-06-21 00:43 UTC

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

# OpenClaw Project Digest — 2026-06-21

---

## 1. Today's Overview

OpenClaw is experiencing extremely high activity with **500 issues** and **500 PRs** updated in the last 24 hours, signaling a large and highly engaged contributor base but also a significant maintenance burden. The project is deep in a **session-state and message-delivery stabilization cycle**, with the majority of top-discussed issues clustering around SQLite migration fallout, compaction regressions, and cross-channel delivery reliability. No new releases were published today, suggesting the team is accumulating fixes for a future release. The volume of P1-labeled open issues (many tagged `clawsweeper:needs-product-decision` or `clawsweeper:needs-maintainer-review`) indicates that **triage bandwidth is a critical bottleneck** — the project's pace of issue resolution is struggling to keep pace with incoming reports.

---

## 2. Releases

**None.** No new versions were published on 2026-06-21. The most recent referenced versions in issues range from `2026.5.19` through `2026.6.6`, with several issues still open against `2026.6.1` regressions. The accumulation of 29 merged/closed PRs and 20 closed issues in the last 24 hours suggests a release may be forthcoming once the current batch of session-state and delivery fixes is validated.

---

## 3. Project Progress

### Merged / Closed PRs (notable)

| PR | Summary |
|---|---|
| **#94087** [CLOSED] | Fix: prevent heartbeat runner from leaking private replies in `message_tool_only` mode on Telegram |
| **#68936** [CLOSED] | Autofix: add PR review autofix pipeline + Windows daemon (large infrastructure contribution) |

### Active PRs Advancing Key Fixes

- **#95432** [OPEN, P1, 🐚 ready for maintainer look] — `fix(reply): suppress per-message finals across multi-message block streaming` — addresses duplicate message delivery during block streaming, a high-visibility UX bug.
- **#95356** [OPEN, P1] — `fix(telegram): release stuck ingress claims on timeout` — directly targets Telegram session deadlocks from hung event processing.
- **#95278** [OPEN, P1, 🚀 automerge armed] — `Avoid copying process.env in ingress queue state DB opens` — performance/security hardening for SQLite ingress queue, auto-merge queued.
- **#95154** [OPEN, P1] — `fix(agents): write unresumable notice to transcript for non-deliverable channels` — improves UX for WebChat sessions interrupted by gateway restart.
- **#92957** [OPEN, P2, 🐚 ready for maintainer look] — `feat(gateway): add agents.setDefault RPC method` — fills a gap in the Gateway RPC API for changing the default agent programmatically.
- **#88504** [OPEN, P2, 🐚 ready for maintainer look] — `feat(memory): add multi-slot memory role architecture` — significant refactor of the memory plugin architecture to separate factual recall, auto-capture, and search responsibilities.
- **#95267** [OPEN, P1] — `fix(memory): repair Windows QMD paths whose backslashes were stripped by JSON parsing` — makes QMD memory backend usable on Windows.

---

## 4. Community Hot Topics

The most commented and reacted issues reveal **three dominant pain clusters**:

### 🔴 Cluster A: Session State & SQLite Migration Risks

- **#88838** (31 comments) — [Track core session/transcript SQLite migration via accessor seam](https://github.com/openclaw/openclaw/issues/88838) — The single most-discussed issue. Users and maintainers are coordinating a branch-by-abstraction migration strategy to avoid a high-risk monolithic rewrite of session/transcript storage. This is the **architectural backbone issue** that many other bugs depend on.
- **#85333** (13 comments) — [`openclaw doctor --fix` 4-5x slower on 2026.5.20](https://github.com/openclaw/openclaw/issues/85333) — Performance regression in session snapshot path traversal, directly tied to the SQLite migration path.
- **#92043** (8 comments) — [180s compaction timeout too aggressive](https://github.com/openclaw/openclaw/issues/92043) — The lowered timeout from 900s→180s converts slow-but-recoverable compaction into permanent failure.

### 🔴 Cluster B: Message Delivery & Channel Reliability

- **#86519** (10 comments) — [Agent repeats identical replies 2-10x on Telegram after 5.20 update](https://github.com/openclaw/openclaw/issues/86519) — Regression causing duplicate replies; partially mitigated but not fully resolved.
- **#92201** (10 comments) — [Embedded runner: Anthropic thinking signatures invalid on replay](https://github.com/openclaw/openclaw/issues/92201) — Signature validation failure with recovery wrapper never firing.
- **#92460** (8 comments) — [Isolated cron completion announcer drops delivery.channel](https://github.com/openclaw/openclaw/issues/92460) — Explicit channel config ignored in isolated cron announce path.
- **#90325** (7 comments, 2 👍) — [Matrix channel dispatch broken in v2026.6.1](https://github.com/openclaw/openclaw/issues/90325) — Complete Matrix channel regression.

### 🟡 Cluster C: Subagent & Cron Orchestration

- **#84583** (9 comments, 3 👍) — [Cron announce triggers EmbeddedAttemptSessionTakeoverError during active chat](https://github.com/openclaw/openclaw/issues/84583) — Session file contention between cron delivery and active user sessions.
- **#92076** (7 comments) — [Subagent completion delivery fails when requester run is inactive](https://github.com/openclaw/openclaw/issues/92076)
- **#91363** (6 comments, 4 👍) — [Isolated cron consistently fails with "LLM request failed"](https://github.com/openclaw/openclaw/issues/91363) — Highest-liked bug in the cron category.

**Underlying need:** Users are hitting fundamental reliability limits in OpenClaw's session management and multi-channel delivery architecture. The SQLite migration is the right long-term investment, but the transition period is producing cascading regressions that erode user trust. The community needs **clearer communication about migration timelines and interim stabilization milestones**.

---

## 5. Bugs & Stability

### 🔴 Critical / P1 — Data Loss & Crash Loops

| Issue | Severity | Description | Fix PR? |
|---|---|---|---|
| [#92273](https://github.com/openclaw/openclaw/issues/92273) | 🔴 Data loss | Tool Search silently breaks pre-compaction memory flush; durable memories lost | No |
| [#92415](https://github.com/openclaw/openclaw/issues/92415) | 🔴 Data loss | `AgentSession.this.model` never refreshed after `/model` switch; affects context window, reasoning | No |
| [#93375](https://github.com/openclaw/openclaw/issues/93375) | 🔴 Crash loop | Telegram polling enters silent crash loop after network timeout; health monitor can't recover | [#95356](https://github.com/openclaw/openclaw/pull/95356) |
| [#90840](https://github.com/openclaw/openclaw/issues/90840) | 🔴 Data loss | Subagent completion delivered as raw worker output instead of parent summary (regression) | No |
| [#91804](https://github.com/openclaw/openclaw/issues/91804) | 🔴 Security | Internal reasoning leakage exposed to users in every response (regression in 2026.6.5) | No |
| [#90325](https://github.com/openclaw/openclaw/issues/90325) | 🔴 Crash | Matrix channel dispatch completely broken in 2026.6.1 (TypeError) | No |

### 🟠 High / P1 — Performance & Delivery Failures

| Issue | Severity | Description | Fix PR? |
|---|---|---|---|
| [#85333](https://github.com/openclaw/openclaw/issues/85333) | 🟠 Perf regression | `doctor --fix` 4-5x slower (55s → 229s+) | No |
| [#92043](https://github.com/openclaw/openclaw/issues/92043) | 🟠 Reliability | 180s compaction timeout causes legitimate long compactions to fail identically every turn | No |
| [#91363](https://github.com/openclaw/openclaw/issues/91363) | 🟠 Reliability | Isolated cron consistently fails; model requests never reach provider | No |
| [#91212](https://github.com/openclaw/openclaw/issues/91212) | 🟠 Delivery | Delivery-recovery starts before channel transport ready; messages silently lost on gateway restart | No |
| [#90082](https://github.com/openclaw/openclaw/issues/90082) | 🟠 UX | Active-memory circuit breaker too aggressive; fallback prompt pollutes main session | No |
| [#90639](https://github.com/openclaw/openclaw/issues/90639) | 🟠 Reliability | Safeguard compaction mode allows sessions to grow to context ceiling; no in-channel recovery | No |

### 🟡 Medium / P2 — Functional Regressions

| Issue | Description | Fix PR? |
|---|---|---|
| [#90711](https://github.com/openclaw/openclaw/issues/90711) | launchd plist `StandardErrorPath` hardcoded to `/dev/null`, hides all gateway stderr | No |
| [#91223](https://github.com/openclaw/openclaw/issues/91223) | Active memory injection breaks prompt cache hit rate (99.9% → 22%) | No |
| [#92094](https://github.com/openclaw/openclaw/issues/92094) | `message` tool `action=send` returns "unsupported channel: telegram" | No |
| [#92582](https://github.com/openclaw/openclaw/issues/92582) | Doctor falsely warns local memory embeddings not ready | [#95393](https://github.com/openclaw/openclaw/pull/95393) |

---

## 6. Feature Requests & Roadmap Signals

| Issue | Description | Likelihood of near-term implementation |
|---|---|---|
| [#90916](https://github.com/openclaw/openclaw/issues/90916) | Topic-session families for one assistant across multiple named context lanes | 🟡 Medium — architecturally significant, needs product decision |
| [#90354](https://github.com/openclaw/openclaw/issues/90354) | Bounded/validated append semantics for pre-compaction memory flush | 🟢 High — directly related to active data-loss bugs |
| [#14785](https://github.com/openclaw/openclaw/issues/14785) | Reduce tool schema token overhead (~3,500 tok/session) | 🟢 High — clear optimization with measurable impact |
| [#92105](https://github.com/openclaw/openclaw/issues/92105) | Configurable page groups for memory-wiki with custom index directories | 🟡 Medium — P3, needs product decision |
| [#91455](https://github.com/openclaw/openclaw/issues/91455) | Documentation update for Kubernetes deployment | 🟢 High — docs-only, low effort |
| [#92957](https://github.com/openclaw/openclaw/pull/92957) | `agents.setDefault` Gateway RPC method | 🟢 High — PR already ready for maintainer look |
| [#88504](https://github.com/openclaw/openclaw/pull/88504) | Multi-slot memory role architecture | 🟡 Medium — large PR (XL), ready for maintainer look but needs careful review |

**Prediction for next release:** The next release will likely be a **stabilization-focused patch** (e.g., `2026.6.7` or `2026.7.0`) centered on: (1) compaction timeout fixes, (2) Telegram delivery reliability, (3) subagent completion delivery, (4) the `agents.setDefault` RPC, and (5) Windows QMD path repair. The multi-slot memory architecture and topic-session families are more likely targeted at a subsequent minor release.

---

## 7. User Feedback Summary

### Pain Points

1. **"Silent failures are the worst kind."** — Multiple issues (#91212, #92273, #93375) describe failures that produce no visible error to the user — messages lost, memories corrupted, sessions deadlocked. Users report having to manually inspect SQLite databases or gateway logs to diagnose problems. There is a strong demand for **observable, actionable failure notifications**.

2. **"The 5.20 update broke my production setup."** — Several issues (#86519, #85333, #86519) trace regressions to the `2026.5.20` release. Users on production VPS deployments (Oracle Cloud, Hetzner) report degraded performance and duplicate message delivery. The community would benefit from a **more conservative release cadence or better beta testing pipeline** for session-state changes.

3. **"Cron jobs are unreliable."** — At least 5 distinct issues (#91363, #84583, #92460, #90595, #92369) target cron/subagent orchestration. Users building automated workflows (parallel subagents, scheduled reports, heartbeat monitors) find the isolated session model fragile. This is a **key differentiator feature for OpenClaw** that needs hardening.

4. **"Reasoning leakage is a dealbreaker."** — Issue #91804 reports internal agent reasoning exposed to end users. For users deploying OpenClaw in professional/team contexts, this is a **privacy and professionalism concern**.

5. **"Token costs are too high."** — Issue #14785 quantifies ~3,500 tokens/session wasted on tool schema overhead. Cost-sensitive users (especially those using paid providers) want **lazy tool schema injection** or **per-agent tool filtering**.

### Satisfaction Signals

- The `clawsweeper` bot's automerge pipeline (#95278) is actively merging small fixes, which the community appreciates.
- The maintainer team is responsive in comments (many issues have maintainer replies within days).
- The branch-by-abstraction approach to SQLite migration (#88838) is seen as a mature, low-risk strategy.

---

## 8. Backlog Watch

These important issues and PRs have been open for extended periods without resolution and need maintainer attention:

| Item | Age | Why It Matters |
|---|---|---|
| [#14785](https://github.com/openclaw/openclaw/issues/14785) — Reduce tool schema token overhead | **4+ months** (Feb 2026) | Quantified 3,500 tok/session waste; clear optimization; P2 but stagnant |
| [#84583](https://github.com/openclaw/openclaw/issues/84583) — Cron announce triggers SessionTakeoverError | **1+ month** (May 2026) | 3 👍, affects core cron use case, has linked PR open |
| [#85333](https://github.com/openclaw/openclaw/issues/85333) — `doctor --fix` 4-5x slower | **1+ month** (May 2026) | Performance regression with clear before/after measurements |
| [#90325](https://github.com/openclaw/openclaw/issues/90325) — Matrix channel broken | **2+ weeks** (Jun 2026) | Complete channel regression, no fix PR |
| [#91804](https://github.com/openclaw/openclaw/issues/91804) — Internal reasoning leakage | **11 days** (Jun 2026) | Security/privacy regression, no fix PR |
| [#90916](https://github.com/openclaw/openclaw/issues/90916) — Topic-session families | **2+ weeks** (Jun 2026) | Architecturally significant feature, needs product decision |
| **PR #88504** — Multi-slot memory architecture | **3+ weeks** (May 2026) | XL refactor, ready for maintainer look, needs dedicated review time |
| **PR #86655** — Claude bridge app-server harness | **4+ weeks** (May 2026) | Large PR, waiting on author but represents important Anthropic parity work |

---

*Data source: [github.com/openclaw/openclaw](https://github.com/openclaw/openclaw) — snapshot 2026-06-21. Issue/PR counts reflect activity in the last 24 hours. Analysis generated by OWL.*

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: Personal AI Assistant & Agent Open-Source Ecosystem

**Date:** 2026-06-21 | **Projects Analyzed:** 14 | **Generated by:** OWL

---

## 1. Ecosystem Overview

The personal AI agent open-source ecosystem is in a period of **rapid expansion and architectural maturation**, with 14 tracked projects spanning the spectrum from lightweight embedded runtimes (PicoClaw, ZeptoClaw) to full-featured multi-channel agent platforms (OpenClaw, ZeroClaw, Hermes Agent). The dominant theme across the ecosystem is the **transition from proof-of-concept to production readiness** — projects are grappling with session-state reliability, multi-channel delivery, provider abstraction fragmentation, and security hardening. A clear stratification is emerging: a handful of high-activity projects (OpenClaw, ZeroClaw, Hermes Agent, IronClaw) are pushing architectural boundaries while mid-tier projects (NanoBot, CoPaw, NanoClaw) focus on stability and feature depth, and smaller projects (PicoClaw, TinyClaw, LobsterAI, Moltis) occupy niche or early-stage positions. The ecosystem collectively faces a **provider compatibility crisis** as the proliferation of OpenAI-incompatible reasoning models, diverse tool-calling behaviors, and provider-specific streaming formats strains abstraction layers.

---

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Releases | Health Score | Assessment |
|---|---|---|---|---|---|
| **OpenClaw** | 500 | 500 | None (accumulating) | 🔴 6/10 | Extreme volume, triage bottleneck, cascading regressions |
| **ZeroClaw** | 50 | 50 | None (v0.9.0 dev) | 🟢 8/10 | Healthy mid-cycle, strong RFC process, growing P1 backlog |
| **Hermes Agent** | 50 | 50 | None (v0.17.0 broken) | 🔴 5/10 | v0.17.0 regressions, reactive firefighting, Docker pain |
| **IronClaw** | 1 | 22 | None | 🟢 8/10 | High throughput, manifest-driven refactor, low community signal |
| **NanoBot** | 5 new | 18 (14 open) | None | 🟡 7/10 | Strong contributor base, growing PR backlog, concurrency bugs |
| **CoPaw** | 6 | 9 | None | 🟢 8/10 | Active, responsive maintainers, strong first-time contributors |
| **NanoClaw** | 1 | 6 | None | 🟡 6/10 | Security fix unmerged, review bottleneck, low engagement |
| **NullClaw** | 2 | 0 | None (v2026.5.29) | 🟡 5/10 | Quiet, stale closures, provider reliability debt |
| **PicoClaw** | 2 | 1 | Nightly only | 🟡 5/10 | Low activity, stale items, token leak bug unaddressed |
| **TinyClaw** | 1 | 0 | None | 🔴 4/10 | Single security issue, zero maintainer response |
| **LobsterAI** | 0 | 0 | None | 🟡 4/10 | Dormant, stale UX issues closed unresolved |
| **Moltis** | 0 | 2 (dependabot) | None | 🟢 7/10 | Stable, maintenance-only, no user-facing issues |
| **ZeptoClaw** | 0 | 0 | None | ⚪ N/A | No activity |

*Health score: 🔴 needs attention (<6) · 🟡 moderate (6-7) · 🟢 healthy (8-10)*

---

## 3. OpenClaw's Position

### Advantages vs Peers

- **Scale of engagement**: OpenClaw's 500/500 issue/PR volume in 24 hours is unmatched — roughly **10× the activity** of the next most active projects (ZeroClaw, Hermes Agent at ~50 each). This signals the largest and most engaged contributor base in the ecosystem.
- **Multi-channel breadth**: OpenClaw supports Telegram, WhatsApp, Matrix, WebChat, and more — comparable to Hermes Agent and ZeroClaw, but with more active channel-specific debugging.
- **Clawsweeper automation**: The automerge pipeline (#95278) and structured triage labels (`clawsweeper:needs-product-decision`, `clawsweeper:needs-maintainer-review`) represent a **more mature project governance** model than most peers.
- **Branch-by-abstraction migration strategy** (#88838): The SQLite session storage migration is being handled with a disciplined architectural seam approach — more methodological than Hermes Agent's reactive fix pattern.

### Technical Approach Differences

| Dimension | OpenClaw | ZeroClaw | Hermes Agent | IronClaw |
|---|---|---|---|---|
| **Session storage** | SQLite migration in progress | Multi-DB (Postgres, Oracle, MySQL) | File-based | Rust-native |
| **Channel architecture** | Per-channel adapters | Per-channel + RFC-governed | Per-channel, fragile | Manifest-driven (innovative) |
| **Auth model** | Basic | OIDC RFC in progress (v0.9.0) | OAuth (broken in v0.17.0) | Typed auth verifier |
| **Memory system** | Multi-slot role arch (PR #88504) | Dream Mode RFC, SOP store | Workspace memory | Reborn learning system |
| **Runtime** | Node.js/TypeScript | TypeScript | Python + TypeScript | Rust (Reborn) |

### Community Size Comparison

OpenClaw's raw activity volume (500+500) dwarfs all peers. However, **activity quality is a concern**: the triage bottleneck means many issues go unaddressed, and the 29 merged PRs in 24 hours, while substantial, represent a small fraction of the total queue. ZeroClaw and IronClaw show higher *merge efficiency* (more closed/merged PRs relative to open volume), suggesting more focused contributor bases with better review throughput.

---

## 4. Shared Technical Focus Areas

The following requirements are emerging as **ecosystem-wide priorities**, each affecting 3+ projects:

### 🔴 Session State & Storage Reliability (OpenClaw, ZeroClaw, NanoBot, CoPaw, NanoClaw)

The dominant architectural challenge. OpenClaw's SQLite migration, ZeroClaw's multi-database session backends, NanoBot's concurrency-unsafe hooks, CoPaw's memory runtime migration to ReMe4, and NanoClaw's container runner cleanup all reflect the same fundamental need: **durable, performant, concurrency-safe session state management**. No project has fully solved this yet.

### 🔴 Multi-Channel Delivery Reliability (OpenClaw, Hermes Agent, ZeroClaw, IronClaw, NanoBot)

Every project with more than one messaging channel is fighting delivery regressions. OpenClaw has Telegram duplicate replies and Matrix completely broken. Hermes Agent has WhatsApp bridge path issues and Telegram rendering bugs. ZeroClaw has QQ command gaps and streaming decode errors. IronClaw had Slack reconnect loops. NanoBot has Telegram rich-message capability errors. The shared need is a **unified channel abstraction with end-to-end CI testing per provider**.

### 🟡 Provider Abstraction Fragmentation (OpenClaw, NanoBot, CoPaw, ZeroClaw, Hermes Agent)

The explosion of OpenAI-incompatible providers (VolcEngine/Doubao, Xiaomi mimo, LongCat, OMLX, Zhipu AI, Groq) is straining every project's provider layer. NanoBot needs custom thinking-style configuration. CoPaw has reasoning block type mismatches and function-calling failures. ZeroClaw loses `reasoning_content` with Xiaomi models. OpenClaw has Anthropic thinking signature issues. The ecosystem needs a **standardized provider capability negotiation protocol**.

### 🟡 Cron / Scheduled Task Orchestration (OpenClaw, ZeroClaw, CoPaw, NanoBot, Hermes Agent)

Five projects have active cron reliability issues. OpenClaw has session contention between cron and active chats. ZeroClaw has double-launching jobs. CoPaw has cron interrupting main chat. NanoBot has cron model preset needs. Hermes Agent has cron scheduler module missing (v0.17.0 regression). The shared need is **isolated session execution with reliable delivery back to the requester channel**.

### 🟡 Security Hardening (NanoClaw, TinyClaw, CoPaw, IronClaw, ZeroClaw)

Security is becoming a first-class concern. NanoClaw has an unmerged CVE (arbitrary file read). TinyClaw has unauthenticated API access. CoPaw is adding file tool sandboxing and Docker tool execution. IronClaw has fail-close auth verification. ZeroClaw is building pluggable auth with OIDC. The ecosystem is collectively moving from "localhost-only trust" to **production-grade security boundaries**.

### 🟢 Context Management & Token Efficiency (OpenClaw, NanoBot, CoPaw, ZeroClaw, Hermes Agent)

Long-running sessions are hitting context limits everywhere. OpenClaw has compaction timeout and safeguard mode issues. NanoBot has redundant token encoding. CoPaw is building scroll context managers and KV cache optimizations. ZeroClaw has context budget overflow on iteration 1. Hermes Agent has tool-output bloat degrading session throughput. The shared need is **adaptive context compression with configurable strategies**.

---

## 5. Differentiation Analysis

### Feature Focus

| Project | Primary Focus | Secondary Focus | Unique Angle |
|---|---|---|---|
| **OpenClaw** | Multi-channel delivery, session reliability | Memory architecture, cron orchestration | Largest ecosystem, clawsweeper automation |
| **ZeroClaw** | Auth/observability infrastructure | Skills platform, multi-DB sessions | RFC-driven governance, enterprise deployment |
| **Hermes Agent** | Platform coverage (WhatsApp, Telegram, Matrix, QQ) | Desktop app, profile templates | Broadest platform support, desktop-first UX |
| **IronClaw** | Channel manifest system, Reborn runtime | Learning system, concurrent execution | Rust performance, declarative channel onboarding |
| **NanoBot** | SDK extensibility, provider flexibility | Subagent orchestration, CLI/TUI | Clean Python SDK, multi-provider reasoning |
| **CoPaw** | Context management, observability | Memory runtime, tool sandboxing | Langfuse integration, scroll context strategy |
| **NanoClaw** | Containerized agent execution | Security sandboxing | Docker-native, workspace-isolated |
| **PicoClaw** | Embedded/edge deployment | WebSocket API, evolution mode | Lightweight, FreeBSD-compatible |
| **TinyClaw** | Minimal agent runtime | HTTP management API | Ultra-minimal footprint |
| **NullClaw** | Desktop agent (Windows) | Local model integration | Windows-native desktop client |
| **LobsterAI** | Web-based agent management | MCP server integration | Visual agent builder |
| **Moltis** | Documentation site | — | Astro-based docs (likely a meta/tooling project) |

### Target Users

- **Developers / Power Users**: OpenClaw, NanoBot, ZeroClaw, IronClaw — CLI-first, self-hosted, highly configurable
- **Teams / Enterprises**: ZeroClaw (multi-tenancy RFC), IronClaw (workspace entities), CoPaw (observability)
- **End Users / Non-Technical**: Hermes Agent (desktop app), NullClaw (Windows desktop), LobsterAI (web UI)
- **Embedded / Edge**: PicoClaw, TinyClaw — resource-constrained environments
- **Container-Native DevOps**: NanoClaw — Docker-first agent sandboxing

### Technical Architecture Spectrum

```
Lightweight ◄─────────────────────────────────────────────► Full-Stack

TinyClaw → PicoClaw → ZeptoClaw → NullClaw → NanoClaw → NanoBot → CoPaw → Hermes → ZeroClaw → OpenClaw → IronClaw
  (HTTP)    (WS)       (?)        (Desktop)  (Docker)   (SDK)   (ReAct)  (Multi)   (RFC)     (Channel)   (Rust)
```

---

## 6. Community Momentum & Maturity

### Tier 1: High Velocity, Active Development

| Project | Signal |
|---|---|
| **OpenClaw** | 🔥 Extreme volume (1,000 updates/24h), but triage-constrained. Accumulating fixes for next release. |
| **IronClaw** | 🔥 22 PRs closed/merged in 24h, systematic architectural refactor. Low community chatter but high code throughput. |
| **ZeroClaw** | 🔥 100 updates/24h, RFC-driven development, clear v0.9.0 roadmap. Best-in-class governance. |

### Tier 2: Active, Focused Iteration

| Project | Signal |
|---|---|
| **NanoBot** | 📈 23 updates/24h, strong contributor diversity, overlapping PRs need coordination. |
| **CoPaw** | 📈 15 updates/24h, responsive maintainers, healthy first-time contributor pipeline. |
| **Hermes Agent** | 📈 100 updates/24h, but reactive — firefighting v0.17.0 regressions rather than forward development. |

### Tier 3: Maintenance / Stabilization

| Project | Signal |
|---|---|
| **NanoClaw** | 📊 7 updates/24h, 0 merges, review bottleneck. Security fix languishing. |
| **NullClaw** | 📊 2 updates/24h, stale closures, no forward development visible. |
| **PicoClaw** | 📊 3 updates/24h, nightly builds only, stale PRs. |

### Tier 4: Dormant / Early Stage

| Project | Signal |
|---|---|
| **TinyClaw** | ⚠️ 1 security issue, 0 maintainer response. Pre-1.0, needs attention. |
| **LobsterAI** | ⚠️ 0 activity, stale issues closed without resolution. |
| **Moltis** | ✅ Dependabot-only activity. Stable but no user-facing development. |
| **ZeptoClaw** | ⚪ No detectable activity. |

---

## 7. Trend Signals

### For AI Agent Developers: Key Industry Trends

1. **The Session Storage Wars Are Just Beginning**
   Every major project is rethinking session state. OpenClaw is migrating to SQLite, ZeroClaw is supporting Postgres/Oracle/MySQL/Db2, IronClaw is building a Rust-native store, and CoPaw is migrating memory to ReMe4. **Takeaway**: Session storage is the new battleground — expect pluggable, database-agnostic session backends to become a standard architectural pattern. Developers should design agent runtimes with storage abstraction seams from day one.

2. **Provider Abstraction Is Breaking — Capability Negotiation Is the Next Frontier**
   The assumption that "OpenAI-compatible" means "just work" is failing across every project. Reasoning block formats, tool-calling behaviors, streaming terminators, and auth mechanisms vary wildly. **Takeaway**: The ecosystem needs a standardized provider capability detection and negotiation layer (similar to LSP's capability model). Projects that build this first will have a significant extensibility advantage.

3. **Security Is No Longer Optional**
   CVE-2026-29611 (NanoClaw), unauthenticated API access (TinyClaw), file tool path traversal (CoPaw), and reasoning leakage (OpenClaw) are forcing the ecosystem to treat security as a core feature. **Takeaway**: Every agent project needs authentication on management APIs, input validation on file paths, sandboxing for tool execution, and reasoning content filtering. Users are deploying these agents in production — the trust bar is rising.

4. **Cron / Scheduled Agents Are a First-Class Use Case**
   Five projects have active cron issues, and users are building automated workflows (parallel subagents, scheduled reports, heartbeat monitors). **Takeaway**: Reliable scheduled execution with isolated session contexts and guaranteed delivery back to the requester channel is a key differentiator. This is the "cron kernel" problem — projects that solve it cleanly will win the automation use case.

5. **Observability Is Becoming Table Stakes**
   ZeroClaw has an entire observability RFC (trace correlation, cost logging, payload capture). CoPaw integrated Langfuse. OpenClaw users are demanding actionable failure notifications. **Takeaway**: Agent developers should build in structured tracing, per-call cost attribution, and configurable payload capture from the start. Debugging agent behavior without observability is becoming untenable.

6. **The Rust Factor**
   IronClaw's Rust-based Reborn runtime is the only non-Node/Python project in the top tier, and it's showing strong architectural discipline (manifest-driven channels, typed auth, concurrent turn execution). **Takeaway**: Rust-based agent runtimes may gain traction for performance-critical and security-sensitive deployments, especially as the ecosystem matures beyond prototyping.

7. **Desktop / End-User Clients Are an Emerging Frontier**
   Hermes Agent's desktop app (despite v0.17.0 regressions), NullClaw's Windows client, and LobsterAI's web UI represent the first wave of non-CLI agent interfaces. **Takeaway**: The ecosystem is developer-heavy today, but the next growth wave will come from non-technical users. Projects that invest in polished desktop/web UX while maintaining CLI power will capture the broadest audience.

---

*This report was generated by OWL based on community digest snapshots from 14 open-source AI agent projects as of 2026-06-21. Data sources: respective GitHub repositories. For questions or corrections, refer to individual project digests.*

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-06-21

---

## 1. Today's Overview

NanoBot remains in a highly active development phase with no new releases but significant churn at the issue and PR level. In the last 24 hours, **5 new issues were opened and 18 PRs were updated** (14 still open, 4 merged/closed), driven by a broad set of contributors rather than a single maintainer — a sign of healthy community participation. The dominant themes are **concurrency safety in the core SDK**, **token-estimation performance**, and **reasoning/thinking-mode support across providers**. Multiple contributors are independently working on overlapping fixes for the token-caching problem (#4420, #4421, #4428), indicating a real user-facing pain point. Overall project velocity is strong, but the open:merged PR ratio (~3.5:1) suggests the backlog is growing and may need maintainer triage.

---

## 2. Releases

No new releases in the reporting window.

---

## 3. Project Progress (Merged / Closed PRs)

| PR | Author | Summary |
|---|---|---|
| [#4426](https://github.com/HKUDS/nanobot/pull/4426) | morandot | **feat(channels): add iMessage channel via Photon Spectrum** — Adds an iMessage chat channel following the same Python-channel + Node-sidecar pattern as WhatsApp. Closed without merge (likely pending review). |
| [#4427](https://github.com/HKUDS/nanobot/pull/4427) | alexray-dev | **fix(webui): prevent iOS Safari auto-zoom** — Merged. Switches textarea to `16px` on mobile Safari to prevent auto-zoom on input focus; desktop unaffected. |
| [#4303](https://github.com/HKUDS/nanobot/pull/4303) | michaelxer | **fix(mcp): close tracked generators in _close_server to prevent GC crash** — Merged. Resolves a `RuntimeError` on `streamableHttp` MCP session reconnect caused by cancel scopes spanning different asyncio tasks. Fixes [#4302](https://github.com/HKUDS/nanobot/issues/4302). |
| [#4321](https://github.com/HKUDS/nanobot/pull/4321) | michaelxer | **fix: advance dream cursor when Dream is disabled** — Merged. Prevents prompt bloat when `dream.enabled = false` by advancing the `.dream_cursor` even when the cron job is not registered. |

**Key takeaway:** The merged PRs address two stability bugs (MCP crash, Dream cursor) and one UX polish item (iOS Safari). The iMessage channel PR was closed without merge — likely needs further iteration.

---

## 4. Community Hot Topics

### 🔥 Concurrency Safety of `Nanobot.run()` Hooks
- **Issue [#4408](https://github.com/HKUDS/nanobot/issues/4408)** (2 comments) — Bug report identifying that `Nanobot.run()` mutates shared `self._loop._extra_hooks`, causing race conditions when concurrent `run()` calls execute on the same instance.
- **PR [#4425](https://github.com/HKUDS/nanobot/pull/4425)** — Fix using `contextvars` for per-call hooks.
- **PR [#4409](https://github.com/HKUDS/nanobot/pull/4409)** — Alternative fix passing per-run hooks to `process_direct` instead of mutating shared state (draft, touches public API).

**Analysis:** Two independent contributors submitted competing fixes on the same day, signaling this is a critical correctness issue for any user running concurrent sessions. The `contextvars` approach (#4425) is less invasive and likely the preferred path.

### 🔥 Token Estimation Performance
- **Issue [#4420](https://github.com/HKUDS/nanobot/issues/4420)** (1 comment) — User reports slow response times traced to redundant `tiktoken` encoding of tool definitions on every agent turn.
- **PR [#4421](https://github.com/HKUDS/nanobot/pull/4421)** — Caches serialized JSON of tool definitions.
- **PR [#4428](https://github.com/HKUDS/nanobot/pull/4428)** — Caches the `cl100k_base` encoding accessor and adds a bounded identity cache for stable tool schema token counts.

**Analysis:** Three contributors independently identified and are fixing the same performance bottleneck. The overlap between #4421 and #4428 will need coordination to avoid merge conflicts. This is clearly a high-impact optimization for any agent with many tools.

### 🔥 Reasoning / Thinking Mode Support
- **Issue [#4429](https://github.com/HKUDS/nanobot/issues/4429)** (1 comment) — Request to allow custom providers to configure non-standard thinking parameters (e.g., VolcEngine/Doubao's `{"thinking": {"type": "enabled"}}`).
- **Issue [#4419](https://github.com/HKUDS/nanobot/issues/4419)** (1 comment) — Request for automatic reasoning effort escalation (default + escalated levels).

**Analysis:** Both issues reflect growing demand for multi-provider reasoning model support. As reasoning models proliferate across providers with incompatible parameter schemas, NanoBot's abstraction layer needs to accommodate provider-specific thinking configurations.

---

## 5. Bugs & Stability

| Severity | Issue / PR | Description | Fix Status |
|---|---|---|---|
| 🔴 **High** | [#4408](https://github.com/HKUDS/nanobot/issues/4408) | `Nanobot.run()` per-run hooks are not concurrency-safe; shared `_extra_hooks` is clobbered under concurrent execution | Two PRs open: [#4425](https://github.com/HKUDS/nanobot/pull/4425) (contextvars approach), [#4409](https://github.com/HKUDS/nanobot/pull/4409) (API change, draft) |
| 🟡 **Medium** | [#4420](https://github.com/HKUDS/nanobot/issues/4420) | `estimate_prompt_tokens` redundantly re-encodes tool definitions every turn, causing measurable latency | Two PRs open: [#4421](https://github.com/HKUDS/nanobot/pull/4421), [#4428](https://github.com/HKUDS/nanobot/pull/4428) |
| 🟡 **Medium** | [#4423](https://github.com/HKUDS/nanobot/pull/4423) | Telegram `_is_rich_capability_error` matching too broad — `"not found"` matches transient per-chat errors, permanently disabling rich send | PR open: [#4423](https://github.com/HKUDS/nanobot/pull/4423) |
| 🟢 **Low** | [#4427](https://github.com/HKUDS/nanobot/pull/4427) | iOS Safari auto-zoom on textarea focus in WebUI | ✅ Merged |

**Note:** The concurrency bug (#4408) is the most critical open issue — it can cause silent data corruption (wrong hooks firing for wrong sessions) in any multi-session deployment. It should be prioritized for merge.

---

## 6. Feature Requests & Roadmap Signals

| Request | Issue | Likelihood of Near-Term Inclusion |
|---|---|---|
| Custom provider thinking style configuration | [#4429](https://github.com/HKUDS/nanobot/issues/4429) | **High** — Aligns with existing `reasoningEffort` config; likely a small extension to the custom provider schema |
| Automatic reasoning effort escalation | [#4419](https://github.com/HKUDS/nanobot/issues/4419) | **Medium** — More complex; requires defining escalation policies and failure detection heuristics |
| Telegram Bot API 10.1 `sendRichMessage` support | [#4422](https://github.com/HKUDS/nanobot/issues/4422) | **High** — Already has an associated PR; incremental feature on existing channel |
| Subagent aggregated result mode | [#4414](https://github.com/HKUDS/nanobot/pull/4414) | **High** — PR already open with implementation; natural extension of existing subagent system |
| Cron job model presets | [#4416](https://github.com/HKUDS/nanobot/pull/4416) | **High** — PR open, references issue #4378, includes tests |
| Inline TUI for `nanobot agent` | [#4329](https://github.com/HKUDS/nanobot/pull/4329) | **Medium** — Larger UX change; may need design review |
| Memory archive provenance gating | [#4424](https://github.com/HKUDS/nanobot/pull/4424) | **Medium** — Improves memory quality but is a refinement, not a user-facing feature |

**Prediction for next release:** Token-estimation caching, concurrency-safe hooks, Telegram rich messaging, and subagent aggregated results are the strongest candidates. Reasoning escalation is a longer-horizon feature.

---

## 7. User Feedback Summary

**Pain Points:**
- **Performance at scale:** A user building a "digital employee" project ([nanobee](https://github.com/HKUDS/nanobot/issues/4420)) traced slow response times to redundant token encoding — this is a real-world production concern, not a micro-optimization.
- **Concurrency correctness:** The hooks race condition (#4408) suggests users are deploying NanoBot with concurrent sessions and hitting subtle, hard-to-debug bugs.
- **Provider fragmentation:** Users working with non-OpenAI providers (VolcEngine/Doubao) are hitting walls with thinking/reasoning mode configuration (#4429), indicating NanoBot's provider abstraction needs more flexibility.

**Satisfaction Signals:**
- Multiple contributors are submitting PRs, not just filing issues — a strong indicator of developer investment and satisfaction with the project's direction.
- The iMessage channel contribution (#4426) shows users are extending NanoBot to new platforms organically.

**Dissatisfaction Signals:**
- The overlapping PRs (#4421 and #4428) suggest contributors may not be fully aware of each other's work, pointing to a need for better issue/PR coordination (e.g., assignees or draft claims).

---

## 8. Backlog Watch

| Item | Age | Status | Risk |
|---|---|---|---|
| [#4256](https://github.com/HKUDS/nanobot/pull/4256) — fix(memory): keep history cursor monotonic | 13 days open | Open, no review comments | Memory cursor bugs can cause data loss; needs review |
| [#4296](https://github.com/HKUDS/nanobot/pull/4296) — feat(sdk): expand Python SDK runtime controls | 10 days open | Open, no review comments | Significant SDK surface-area change; needs maintainer eyes |
| [#4329](https://github.com/HKUDS/nanobot/pull/4329) — feat(cli): add inline TUI | 8 days open | Open, no review comments | UX-facing; may need design discussion |
| [#4373](https://github.com/HKUDS/nanobot/pull/4373) — fix(memory): preserve delivery context during consolidation | 5 days open | Open, no review comments | Correctness fix for memory consolidation; should be reviewed before #4256 to avoid conflicts |
| [#4407](https://github.com/HKUDS/nanobot/pull/4407) — feat(whatsapp): seed LID→phone mappings on startup | 3 days open | Open, no review comments | Fixes first-message resolution for WhatsApp; straightforward |

**Recommendation:** PRs #4256 and #4373 both touch memory cursor logic and should be reviewed together to avoid semantic conflicts. PR #4296 is the highest-risk open PR due to its scope (SDK public API changes) and would benefit from early maintainer feedback.

---

*Data source: [HKUDS/nanobot](https://github.com/HKUDS/nanobot) — Digest generated 2026-06-21.*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-06-21

---

## 1. Today's Overview

Hermes Agent remains in a period of intense development activity, with **100 contributions** (50 issues + 50 PRs) updated in the last 24 hours and two separate P1 gateway startup crashes reported for **v0.17.0** on this very day. The project is showing significant churn — 32 open issues and 37 open PRs in active discussion — concentrated around Docker deployments, WhatsApp/Telegram platform integrations, and the v0.17.0 regression surface. Multiple fix PRs were merged today, but the severity and volume of newly opened P1 bugs suggest the latest release cycle was pushed without sufficient platform-integration testing. No new tagged release has been published to address the v0.17.0 regressions yet.

---

## 2. Releases

None. The latest known release is **v0.17.0** (visible in multiple bug reports dated today and yesterday), but no new release has been tagged as of 2026-06-21.

---

## 3. Project Progress

The following PRs were **merged or closed** on 2026-06-21:

| # | Title | Significance |
|---|---|---|
| [PR #49850](https://github.com/NousResearch/hermes-agent/pull/49850) | fix(telegram): replace table-to-bullet with monospaced code block | Fixes Telegram MarkdownV2 rendering where GFM pipe tables were being garbled into bullet lists |
| [PR #49840](https://github.com/NousResearch/hermes-agent/pull/49840) | fix(chat-completions): strip internal timestamp before strict providers | Resolves `extra_forbidden` errors on Fireworks/Mistral with `messages[N].timestamp` |
| [PR #49839](https://github.com/NousResearch/hermes-agent/pull/49839) | fix(whatsapp): resolve bridge dir with HERMES_HOME mirror in read-only Docker | WordPress/Docker Whatsapp bridge fix |
| [PR #49654](https://github.com/NousResearch/hermes-agent/pull/49654) | fix(whatsapp): resolve bridge dir with HERMES_HOME mirror | Companion fix to #49839 |
| [PR #49584](https://github.com/NousResearch/hermes-agent/pull/49584) | fix(whatsapp): use writable HERMES_HOME for bridge in Docker | Earlier round of the same WhatsApp Docker fix |
| [PR #47875](https://github.com/NousResearch/hermes-agent/pull/47875) | fix(chat-completions): strip timestamp from messages before sending | Dup of the timestamp fix, merged independently |
| [PR #39923](https://github.com/NousResearch/hermes-agent/pull/39923) | fix(matrix): check is_direct flag instead of member count for DM detection | Core Matrix bot improvement from June 5 |
| [PR #22275](https://github.com/NousResearch/hermes-agent/pull/22275) | feat(installer): add minimal install modes and feature installers | Installer UX improvement merged |

---

## 4. Community Hot Topics

**[Issue #29846](https://github.com/NousResearch/hermes-agent/issues/29846)** — *Feature: Option to disable/customize gateway shutdown notifications* (7 comments, 👍5)
Production users running automated cron-based Hermes Gateway restarts are notified with an intrusive ⚠️ system message: `Gateway shutting down — Your current task will be interrupted`. There is currently no configuration toggle to disable this message. The 5 upvotes and 7 discussion comments signal a real pain point for users in long-running task contexts where automated reconnections are routine.

**[Issue #48061](https://github.com/NousResearch/hermes-agent/issues/48061)** — *P1 Bug: Hermes Agent v0.16.0 still sends empty runtime model/provider on Linux pipx install* (4 comments)
Requests fail with `MODEL: ''` and `PROVIDER: None`. Despite being reported against v0.16.0, no fix or workaround has been confirmed, suggesting a deeper install-path configuration issue specific to pipx-based installs.

**[Issue #43784](https://github.com/NousResearch/hermes-agent/issues/43784)** — *Feature: Shareable Profile Templates* (4 comments)
Users want to share and reuse complete Hermes Profiles (configurations, skills, MCP, soul.md) across teams or publicly. Starting from scratch every time is tedious. This is a natural step toward an ecosystem/community profile marketplace.

**[Issue #49673](https://github.com/NousResearch/hermes-agent/issues/49673)** — *Bug: Gateway/front-door sessions become multi-minute slow from retained tool-output bloat* (3 comments)
Tool-heavy sessions accumulate large raw outputs in context/history, compress slowly, and degrade normal conversation throughput. This is a performance/architectural issue affecting any long-running complex task in a live chat session.

**[Issue #49816](https://github.com/NousResearch/hermes-agent/pull/49816)** — *PR: fix(dashboard): resolve CPU busy-loop in PTY reader and Windows test compatibility* (open)
An actively discussed PR fixing a critical 100% CPU consumption bug in the Dashboard when context compression or long-running tasks execute. This directly impacts usability of the desktop experience.

**Underlying Pattern:** The community is pushing hard on **production stability** (pipx, Docker, session longevity), **platform coverage** (WhatsApp, Telegram, Matrix, QQ Bot), and **shareability/ecosystem** (profile templates). The volume of Docker-specific issues (#49569, #49584/#49839) signals that Docker is now a deployment-first use class, not a niche.

---

## 5. Bugs & Stability

### 🔴 P1 — Critical / Data Loss / Broken Upgrade Path

| # | Description | Fix Status |
|---|---|---|
| [Issue #48061](https://github.com/NousResearch/hermes-agent/issues/48061) | Empty model/provider on Linux pipx — requests completely fail | **No fix PR**; still open against v0.16.0, likely present in v0.17.0 |
| [Issue #49824](https://github.com/NousResearch/hermes-agent/issues/49824) | v0.17.0 gateway crashes on startup: `ModuleNotFoundError: cron.scheduler_provider` | **No fix PR yet.** Deploy-blocking regression. Likely a missing module in the published package/editable install |
| [Issue #49821](https://github.com/NousResearch/hermes-agent/issues/49821) | Anthropic OAuth login 404s — token exchange uses migrated `console.anthropic.com` endpoint | **No fix PR yet.** Blocks all fresh Claude Pro/Max OAuth logins |

### 🟠 P2 — Broken Features / Workarounds Exist

| # | Description | Fix Status |
|---|---|---|
| [Issue #49831](https://github.com/NousResearch/hermes-agent/issues/49831) | WhatsApp bridge path off-by-one in adapter.py — `parents[2]` resolves one level too shallow on editable installs | **No fix PR.** Blocks WhatsApp on git source installs |
| [Issue #49852](https://github.com/NousResearch/hermes-agent/issues/49852) | TUI `session.close` leaks AIAgent resources (process, sandbox, browser, HTTP) under concurrent build | **No fix PR.** Resource leak under session churn |
| [Issue #42685](https://github.com/NousResearch/hermes-agent/issues/42685) | macOS launchd gateway crash loop — root-owned `gateway.lock` causes PermissionError on restart | **No fix PR.** Blocks macOS persistent gateway deployments |
| [Issue #49673](https://github.com/NousResearch/hermes-agent/issues/49673) | Session slowdown from tool-output bloat after long-running tasks | **No fix PR.** Architectural/performance issue |
| [Issue #17144](https://github.com/NousResearch/hermes-agent/issues/17144) | Docker: agent memory writes create root-owned files unreadable by gateway user | **No fix PR.** Blocks persistent memory in Docker |
| [Issue #49569](https://github.com/NousResearch/hermes-agent/issues/49569) | WhatsApp Docker bridge: npm install EACCES + wrong log path | **Fix PRs merged today** (#49584, #49654, #49839) |
| [Issue #49787](https://github.com/NousResearch/hermes-agent/issues/49787) | Desktop app shows reinstall/setup prompt on every launch despite valid config (macOS) | **No fix PR.** Desktop UX regression in v0.17.0 |
| [Issue #47868](https://github.com/NousResearch/hermes-agent/issues/47868) | Strict providers reject `messages[].timestamp` metadata | **Fix PR merged today** (#47875, #49840) |

### 🟡 P3 — Annoyances / Niche Platforms

| # | Description | Fix Status |
|---|---|---|
| [Issue #49788](https://github.com/NousResearch/hermes-agent/issues/49788) | Duplicate of #49787 (closed as dup) | — |
| [Issue #45834](https://github.com/NousResearch/hermes-agent/issues/45834) | Duplicate patch files applied twice | Closed (fix exists) |
| [Issue #20815](https://github.com/NousResearch/hermes-agent/issues/20815) | Dashboard shows API key warning for local providers that don't need one | **No fix PR.** Minor UX annoyance |

### Stability Assessment

The v0.17.0 release introduced at least **three new regressions** reported on the same day (cron scheduler module missing, WhatsApp bridge path, desktop config prompt loop). This is concerning — the pattern suggests the v0.17.0 package may have been published without running the full integration test suite across install modes (pipx, Docker, editable, desktop DMG). The WhatsApp Docker fix was rapidly iterated on with **three separate PRs** merged the same day, indicating reactive firefighting.

---

## 6. Feature Requests & Roadmap Signals

| Feature | Issue | Likelihood in Next Release | Rationale |
|---|---|---|---|
| **Disable/customize gateway shutdown notifications** | [#29846](https://github.com/NousResearch/hermes-agent/issues/29846) (7 comments, 👍5) | 🔶 Medium-High | Labeled `sweeper:implemented-on-main`; may already be on a branch |
| **Shareable Profile Templates** | [#43784](https://github.com/NousResearch/hermes-agent/issues/43784) (4 comments) | 🟡 Medium | Natural ecosystem growth feature; aligns with skill/plugin direction |
| **WhatsApp Cloud API message template support** | [#45935](https://github.com/NousResearch/hermes-agent/issues/45935) (2 comments, 👍2) | 🟡 Medium | Plugins exist but docs acknowledge gap; "waiting on demand signal" — this issue is that signal |
| **Add qwen3.7-plus to alibaba-coding-plan** | [#44662](https://github.com/NousResearch/hermes-agent/issues/44662) (2 comments) | 🔶 Medium-High | Tiny, self-contained change; likely easy to merge |
| **Automated Workspace Memory** | [#38552](https://github.com/NousResearch/hermes-agent/issues/38552) (2 comments) | 🔶 Medium-High | Complements existing memory feature (#33856); addresses a real session-startup token waste pattern |
| **Android app (Capacitor thin client)** | [PR #49834](https://github.com/NousResearch/hermes-agent/pull/49834) | 🔴 Low (next release) | Explicitly a draft/concept; too early but signals mobile platform interest |
| **Kanban Linear integration** | [PR #49856](https://github.com/NousResearch/hermes-agent/pull/49856) | 🟡 Medium | Open draft; Kanban feature area is actively being extended |

**Prediction:** The next release (likely v0.17.1 or v0.18.0) will be **stability-first**, focused on fixing the cron scheduler crash, the Anthropic OAuth endpoint, and any remaining WhatsApp/desktop regressions. Profile templates and qwen3.7-plus are the most merge-ready features that could ship alongside fixes.

---

## 7. User Feedback Summary

**Primary Pain Points:**

- **Broken upgrades:** Users report that upgrading to v0.17.0 literally breaks their gateway (`cron.scheduler_provider` ModuleNotFoundError) and their desktop app (reinstall loop). This is the most urgent dissatisfaction signal. Users expect upgrades to be safe; a completely broken gate-out-of-the-box experience erodes trust.
- **Docker is painful:** Three separate Docker-related issues (#49569, #17144, #42685) reveal that Docker is a first-class deployment target but treated as an afterthought in packaging. WhatsApp bridge npm install failures, root-owned files, and lock file permission errors are all Docker-specific deployment friction.
- **Platform integration fragility:** Every messaging platform (Telegram, WhatsApp, WeChat, Matrix, QQ Bot) has at least one open bug. The pattern suggests platform adapters are being developed without end-to-end CI testing against real accounts.
- **No control over system notifications:** The gateway shutdown notification issue (#29846) with 5 upvotes shows that informed, production-sophisticated users want fine-grained control over system-level messaging — not intrusive notifications during routine operations.

**Use Cases Emerging:**
- Integration bridge from LINE and other platforms to Hermes (mentioned in WhatsApp template feature, QQ Bot issues)
- Small business automation via WhatsApp (the machine shop owner use case in #45935)
- Team-based profile sharing and standardized agent deployments (#43784)
- Persistent Docker deployments for always-on agents (#17144, #42685)

---

## 8. Backlog Watch

These are long-unanswered items that deserve maintainer triage:

| # | Age | Description | Why It Matters |
|---|---|---|---|
| [Issue #20815](https://github.com/NousResearch/hermes-agent/issues/20815) | **56 days** (since 2026-05-06) | Dashboard shows false API key warning for local providers | Minor but confusing to new users; trivial fix |
| [Issue #17144](https://github.com/NousResearch/hermes-agent/issues/17144) | **53 days** (since 2026-04-28) | Docker root-owned files block persistent memory | Blocks Docker production use; fundamental deployment issue |
| [PR #13336](https://github.com/NousResearch/hermes-agent/pull/13336) | **61 days** (since 2026-04-21) | fix(webhook): cap chunked request bodies (security) | **Security fix** sitting for two months; should not languish |
| [PR #18507](https://github.com/NousResearch/hermes-agent/pull/18507) | **51 days** (since 2026-05-01) | feat(matrix): harden rendering, media, E2EE and diagnostics | Large, complex PR; needs maintainer bandwidth but touches core Matrix stability |
| [Issue #32528](https://github.com/NousResearch/hermes-agent/issues/32528) | **26 days** (since 2026-05-26) | QQ Bot private chat approvals always rejected as unauthorized | Niche platform but 26 days with no response signals community may be ignored |
| [Issue #42685](https://github.com/NousResearch/hermes-agent/issues/42685) | **12 days** (since 2026-06-09) | macOS launchd crash loop | macOS users on launchd cannot maintain persistent gateway |

**Top priority for maintainer attention:**
1. **PR #13336** — Security fix, 61 days old, should be merged or closed with explanation.
2. **Issue #17144** — Docker persistent memory, 53 days old, fundamental for Docker users.
3. **Issue #49824 / #49821** — Both opened today, both P1, both v0.17.0 regressions. These need immediate triage and a hotfix release.

---

*Data source: github.com/NousResearch/hermes-agent | Digest generated: 2026-06-21*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

**PicoClaw Project Digest – 2026-06-21**

---

### 1. **Today's Overview**  
PicoClaw shows moderate activity with 2 open issues and 1 open PR updated in the last 24 hours, alongside a new nightly release (`v0.3.0-nightly.20260620.287853ab`). All tracked items are marked as stale, indicating limited recent maintainer engagement. The project appears to be in a stabilization phase ahead of its next stable release, with community contributions focused on protocol clarity and media handling. No critical regressions or urgent fixes were reported today.

---

### 2. **Releases**  
- **Nightly Build**: `v0.3.0-nightly.20260620.287853ab`  
  This automated build includes all changes merged into `main` since the last stable `v0.3.0` release. As a nightly, it may contain unstable features or incomplete fixes. Users are advised to test cautiously in non-production environments.  
  🔗 [Full Changelog](https://github.com/sipeed/picoclaw/compare/v0.3.0...main)

---

### 3. **Project Progress**  
No PRs were merged or closed today. The only active PR (#2964) proposes **configurable inbound image compression** for the vision pipeline—a meaningful enhancement to reduce token usage and improve performance when handling high-resolution media. However, it remains stale with no recent discussion, suggesting it may need maintainer review or author updates to progress.

---

### 4. **Community Hot Topics**  
- **Issue #3012**: *Continuous token consumption every minute when evolution is enabled*  
  🔗 [sipeed/picoclaw#3012](https://github.com/sipeed/picoclaw/issues/3012)  
  This bug report highlights a resource leak in the evolution loop under specific configurations (Draft mode, Code Path Trigger). With 4 comments and no resolution, it signals a non-trivial stability concern for long-running agents.

- **Issue #2984**: *Add explicit turn completion signal for Pico WebSocket clients*  
  🔗 [sipeed/picoclaw#2984](https://github.com/sipeed/picoclaw/issues/2984)  
  A protocol-level feature request with 2 👍 reactions and 3 comments. It reflects a real need from external integrators for deterministic agent state signaling—critical for building reliable UIs or automation atop PicoClaw’s WebSocket API.

---

### 5. **Bugs & Stability**  
- **High Severity**:  
  - **#3012** – Unbounded token consumption during evolution mode. This could lead to unexpected costs or service degradation, especially on metered AI providers. No fix PR exists; investigation needed.

- **Low Severity**:  
  No other new bugs reported today. Existing open issues remain unresolved but show no signs of escalation.

---

### 6. **Feature Requests & Roadmap Signals**  
- **Explicit turn completion signal** (#2984) is a strong candidate for inclusion in `v0.3.0` or a patch release, given its clear use case and community support.
- **Image input compression** (PR #2964) addresses efficiency in vision workflows—likely to be prioritized if maintainers resume active PR reviews.
- Evolution mode reliability (#3012) may prompt internal refactoring of the agent loop scheduler in upcoming versions.

---

### 7. **User Feedback Summary**  
Users are actively deploying PicoClaw in production-like environments (e.g., FreeBSD servers) and integrating it via custom WebSocket clients. Pain points center on **resource efficiency** (token leaks, large image payloads) and **integration reliability** (lack of deterministic agent state events). Satisfaction appears moderate, but frustration is growing over stale issues and slow feedback cycles.

---

### 8. **Backlog Watch**  
- **PR #2964** (*Image input compression*): Open since May 28, stale, no maintainer comments. High-value optimization that risks being abandoned without intervention.
- **Issue #3012** (*Token leak in evolution*): Critical bug with no triage. Requires immediate attention to prevent user churn.
- **Issue #2984** (*Turn completion signal*): Well-articulated protocol gap. Could be fast-tracked as a minor API addition.

Maintainer responsiveness has declined recently—reviving engagement on these items would significantly improve project health and community trust.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-06-21

---

## 1. Today's Overview

NanoClaw shows **high PR activity** with 6 open pull requests updated in the last 24 hours, but **zero merges or closures** — indicating a bottleneck in review/merge throughput. No new releases have shipped recently, meaning all this work is accumulating in the open-PR queue. The single open issue (#2768) is a performance optimization request that has been sitting for a week with minimal engagement. Overall, the project appears to be in an **active development phase with a growing review backlog** that warrants maintainer attention.

---

## 2. Releases

**None.** No new releases were published in the reporting period. The open PRs contain several fixes and refactors that would logically feed into the next release.

---

## 3. Project Progress

No PRs were merged or closed today. However, the following open PRs represent the most advanced work:

| # | PR | Author | Focus |
|---|-----|--------|-------|
| [#2824](https://github.com/nanocoai/nanoclaw/pull/2824) | Drop stale "Global Memory" instruction from main seed prompt | CutSnake01 | Prompt hygiene |
| [#2823](https://github.com/nanocoai/nanoclaw/pull/2823) | Remove `groups/global/CLAUDE.md` (host deletes it on every startup) | CutSnake01 | Container lifecycle fix |
| [#2822](https://github.com/nanocoai/nanoclaw/pull/2822) | Drop dead `/workspace/global` mount | CutSnake01 | Container runner refactor |
| [#2821](https://github.com/nanocoai/nanoclaw/pull/2821) | Document assistant-name environment variables | chandrameenamohan | Documentation |
| [#2799](https://github.com/nanocoai/nanoclaw/pull/2799) | Confine `send_file` reads to `/workspace` (CVE-2026-29611) | sturdy4days | **Security fix** |
| [#2801](https://github.com/nanocoai/nanoclaw/pull/2801) | Guard `safeParseContent` against non-object JSON | sturdy4days | Router robustness |

A notable pattern: contributor **CutSnake01** has 3 related PRs (#2822, #2823, #2824) that form a **cohesive cleanup pass** on the container runner's global memory architecture — removing dead mounts, stale prompt instructions, and a CLAUDE.md file that gets deleted on every startup. These are likely interdependent and should be reviewed together.

---

## 4. Community Hot Topics

**Issue [#2768](https://github.com/nanocoai/nanoclaw/issues/2768)** — *"Enable prompt caching by default in Claude provider"*
- **Author:** galmorduku | **Created:** 2026-06-14 | **Comments:** 1 | **👍:** 0
- **Underlying need:** The Claude provider calls `sdkQuery()` without setting `enablePromptCaching`, so the Anthropic Agent SDK defaults to `false`. This means **every agent turn re-sends the full system prompt uncached**, increasing token costs and latency — especially painful for agents with rich context windows. This is a **cost/performance optimization** that power users and production deployments would benefit from immediately. The low engagement (1 comment, 0 reactions in a week) suggests it hasn't gained community traction yet, but the impact is significant for anyone running agents at scale.

---

## 5. Bugs & Stability

**🔴 High — Security Vulnerability**

| # | Issue | PR | Severity | Status |
|---|-------|-----|----------|--------|
| CVE-2026-29611 | `send_file` accepts arbitrary absolute paths with no root restriction or canonicalization, allowing a prompt-injected or compromised agent to read any container-visible file (credential state, files under `/workspace/extra/*` mounts) | [#2799](https://github.com/nanocoai/nanoclaw/pull/2799) | **Critical** | Fix PR open, unmerged |

**🟡 Medium — Robustness**

| # | Issue | PR | Severity | Status |
|---|-------|-----|----------|--------|
| Router crash on primitive JSON | `safeParseContent` returns `JSON.parse(raw)` directly; for primitive payloads (`"5"`, `"true"`, bare strings) callers reading `.text`/`.sender` get `undefined` instead of raw-text fallback | [#2801](https://github.com/nanocoai/nanoclaw/pull/2801) | **Medium** | Fix PR open, unmerged |

**🟢 Low — Dead code / prompt hygiene**

| # | Issue | PR | Severity | Status |
|---|-------|-----|----------|--------|
| Stale "Global Memory" instruction in seed prompt | Outdated instruction persists in main seed prompt | [#2824](https://github.com/nanocoai/nanoclaw/pull/2824) | **Low** | Fix PR open, unmerged |
| `groups/global/CLAUDE.md` recreated then deleted on every startup | Wasted I/O and potential race conditions | [#2823](https://github.com/nanocoai/nanoclaw/pull/2823) | **Low** | Fix PR open, unmerged |
| Dead `/workspace/global` mount | Unused mount point in container runner | [#2822](https://github.com/nanocoai/nanoclaw/pull/2822) | **Low** | Fix PR open, unmerged |

> ⚠️ **Key concern:** The security fix for CVE-2026-29611 (PR #2799) was opened on 2026-06-17 and has been updated as recently as 2026-06-20, but remains **unmerged**. Given that this is a container escape / credential exposure vector, this should be prioritized for immediate review and merge.

---

## 6. Feature Requests & Roadmap Signals

**Issue [#2768](https://github.com/nanocoai/nanoclaw/issues/2768)** — Enable prompt caching by default in Claude provider
- **Signal strength:** Moderate. The request is well-scoped, targets a specific code location (`container/agent-runner/src/providers/claude.ts`), and addresses a clear cost/performance gap. However, the lack of community reactions or maintainer response after a week suggests it may not be on the immediate roadmap.
- **Prediction:** Likely to be addressed in a future release, possibly as part of a broader provider optimization pass. The fix is low-risk (flipping a default flag) but the team may be waiting to evaluate implications across different agent session types before enabling it globally.

**Roadmap inference from PR patterns:** The cluster of PRs from CutSnake01 (#2822–#2824) suggests the team is actively **simplifying the container runner's global memory architecture**. This could signal an upcoming release focused on container runtime cleanup and prompt system refactoring.

---

## 7. User Feedback Summary

- **Security-conscious users** are actively auditing the codebase: contributor `sturdy4days` has identified and submitted fixes for both a container escape vulnerability (CVE-2026-29611) and a router parsing edge case. This indicates a user base that runs NanoClaw in **production or security-sensitive environments** and expects robust sandboxing.
- **Cost-conscious users** want prompt caching enabled by default (#2768), suggesting that **token expenditure is a tangible pain point** for users running agents with large system prompts.
- **Contributors are doing cleanup work** (CutSnake01's 3 PRs) that reflects real operational friction — dead mounts, stale files, and redundant prompt instructions that degrade the developer experience.
- **Documentation gaps** exist: PR #2821 to document assistant-name environment variables suggests users are discovering configuration options through source code rather than docs.

**Overall satisfaction signal:** Neutral-to-positive. Users are actively contributing fixes rather than filing complaints, but the lack of merges and maintainer engagement on PRs may be causing contributor fatigue.

---

## 8. Backlog Watch

| # | Item | Age | Risk | Recommendation |
|---|------|-----|------|----------------|
| [#2799](https://github.com/nanocoai/nanoclaw/pull/2799) | CVE-2026-29611 security fix for `send_file` | 4 days open | **Critical** — security vulnerability | **Merge immediately** or provide status update |
| [#2801](https://github.com/nanocoai/nanoclaw/pull/2801) | `safeParseContent` non-object JSON guard | 4 days open | **Medium** — data loss / undefined behavior | Review and merge |
| [#2768](https://github.com/nanocoai/nanoclaw/issues/2768) | Enable prompt caching by default | 7 days old, 1 comment | **Low** — no maintainer engagement | Acknowledge and triage |
| [#2822](https://github.com/nanocoai/nanoclaw/pull/2822)–[#2824](https://github.com/nanocoai/nanoclaw/pull/2824) | Global memory architecture cleanup (3 PRs) | 1 day open | **Low** — but interdependent | Review as a batch |

> 📌 **Maintainer action needed:** 6 open PRs with 0 merges in 24 hours signals a **review bottleneck**. The security fix (#2799) should be the top priority. Consider whether the project needs additional reviewers or a more structured triage process to prevent contributor drop-off.

---

*Data source: [github.com/qwibitai/nanoclaw](https://github.com/qwibitai/nanoclaw) | Digest generated by OWL for 2026-06-21*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest — 2026-06-21

---

## 1. Today's Overview
NullClaw shows **low-moderate activity** today with two issues updated in the last 24 hours (one closed, one newly opened; zero PRs merged or opened). No new releases were published. The project appears to be in a maintenance phase between releases, focusing on bug triage rather than active feature development. Monthly-cycle version naming (last release: v2026.5.29) suggests regular cadence, with roughly June elapsed without a follow-up patch. Overall health is stable but frictionless issue resolution remains a concern given current response gaps.

---

## 2. Releases
**None.** The latest known release is **v2026.5.29** (Windows build available). No change-log entries were included in the data; reusers should refer to the release page for details. No breaking-change or migration notes are indicated.

---

## 3. Progress / Merged Closures
| # | Type | Title | Status | Link |
|---|------|-------|--------|------|
| — | Bug | Local-model Ollama incomplete answers | Closed (3 comments) | [Issue #952](https://github.com/nullclaw/nullclaw/issues/952) |

The closed Ollama/gemme issue (#952) involved a **local-model Ollama integration Ollama responses returning truncated or incomplete sentences** after the author reported that "the agent doesn't answer in complete sentences." The  issue was closed without an explicit code change, suggesting it may have been triaged as an upstream Ollama issue, documentation-guidance, or environment configuration rather than a core NullClaw bug. No merge-PR attached to the resolution was visible in the data.

No merged PRs or new releases accompanied today's activity; the closed bug represents reactive housekeeping.

---

## 4. Community Hot Topics
| # | Type | Engagement | Link |
|---|------|------------|------|
| 952 | Bug | 👍 × 0 · 💬 3 | [Issue #952](https://github.com/nullclaw/nullclaw/issues/952) |
| 967 | Bug | 👍 × 0 · 💬 0 | [Issue #967](https://github.com/nullclaw/nullclaw/issues/967) |

**Underlying needs:**
- **Reliable response completeness** (#952): Users expect end-to-end sentence integrity when routing through external/local model backends (Ollama). The issue hints at NullClaw possibly not handling streaming-response terminators or ctx-length truncation markers from Ollama correctly.
- **Graceful error responses instead of crashes** (#967): "NoResponseContent" failures are surfaced as raw `error:` without retry or fallback UX — indicating a larger pattern of brittle provider error handling in the agent runtime.

**Roadmap signal**: Provider reliability and error UX for multi-model backends (Ollama, proprietary APIs) is becoming a visible pain surface.

---

## 5. Bugs & Stability
> ⚠️ Rankings are inferred from frequencies + reporter-provided context; no severity-triage labels were attached by maintainers.

| Severity | Issue | Status | Frequency | Fix PR? | Link |
|----------|-------|--------|-----------|---------|------|
| 🔴 Medium–High | `NoResponseContent` error | OPEN | >50% of turns | ❌ None visible | [Issue #967](https://github.com/nullclaw/nullclaw/issues/967) |
| 🟡 Medium | Incomplete answers (Ollama) | CLOSED | Local-model only | ❌ None visible | [Issue #952](https://github.com/nullclaw/nullclaw/issues/952) |

**#967 — `NoResponseContent` crash**
- **Reporter**: svier0 (Windows 11, v2026.5.29)
- **Trigger**: Calling `nullclaw agent -m "你好！"` with Agnes-2.0-Flash via API — fails consistently (12/21 turns, >50 %).
- **Negative signal**: Same model + API key works in picoNullClaw (alternative NullClaw desktop), so provider-side is fine. Points strongly to NullClaw's response-parsing or HTTP-handler path.
- **No comments/acknowledgment yet** — triage backlog concern.

Both bugs share a common root: fragility in NullClaw's **LLM provider abstraction layer**, specifically around:
1. Incomplete or empty HTTP response bodies
2. Provider-specific streaming or encoding differences
3. Error propagation without user-friendly messages

---

## 6. Feature Requests & Roadmap Signals
No explicit feature requests were surfaced today, but latent signals suggest:

| Signal | Frequency | Likely next-version target | Confidence |
|--------|-----------|---------------------------|------------|
| Robust provider/error handling | 2 related bugs open/closed | **v2026.6.x** (error UX, retry logic) | Medium–High |
| Multi-model comparison / switching | User testing across pico/NullClaw / Agnes / Ollama | Longer-term agent-config surface | Low |

Prediction: The next release (likely **v2026.6.??**) will prioritize fixing `NoResponseContent` and related provider reliability, possibly adding configurable retry/fallback behavior.

---

## 7. User Feedback Summary

| Pain point | User quotes / evidence | Satisfaction signal |
|------------|----------------------|-------------------|
| Provider call failures crash agent | `"error: NoResponseContent"` (no retry, no tip) | 🔴 Frustrated |
| Answer truncation (Ollama) | "the agent doesn't answer in complete sentences" | 🟡 Resolved via closure, but root cause unclear |
| Windows desktop stability | User testing two NullClaw desktop clients side-by-side; NullClaw fails where pico works | 🔴 Dissatisfied |
| Silent failures | "Same model + NullClaw key works in pico" → NullClaw-specific regression | 🔴 Confidence drop |
| Non-English inputs | Chinese query `"你好！"` surfaces encoding / i18n issues | 🟡 Regional UX gap |

**Use cases observed:**
- Local LLM agent (Ollama + gemme) on personal dev box
- Cloud API agent (Agnes-2.0-Flash) via CLI on Windows 11 desktop
- Side-by-side NullClaw vs. picoNullClaw comparison testing

---

## 8. Backlog Watch

| Issue | Age | Comments | Risk | Action needed |
|-------|-----|----------|------|---------------|
| [#967](https://github.com/nullclaw/nullclaw/issues/967) — NoResponseContent | < 24 h | 0 | 🔴 High (no triage yet) | Triage, assign, reproduce on Windows + Agnes |
| [#952](https://github.com/nullclaw/nullclaw/issues/952) — Ollama incomplete answers | 10 d (closed) | 3 | 🟡 Medium (closed without visible fix; may resurface) | Add regression test for Ollama streaming truncation; link to Ollama upstream if applicable |

---

**Summary**: NullClaw is in a quiet release cycle but accumulating provider-reliability debt. The `NoResponseContent` bug (#967) is the most urgent open item — high-frequency, no triage, and a direct regression vs. picoNullClaw. Expect the next patch release to target this class of error-handling issues. Community engagement is low (zero 👍 across both issues), suggesting the project may benefit from more visible triage and contributor outreach.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-06-21

## 1. Today's Overview

IronClaw is experiencing a high-velocity development day with **22 PRs updated** in the last 24 hours (13 open, 9 closed/merged) and 1 active issue. The project is deep in two major architectural pushes: **manifest-driven channel ingress** (consolidating Slack/Telegram/provider-specific Rust into a declarative manifest system) and **Reborn runtime maturation** (concurrent turn execution, learning system, CI closure, and a hosted Postgres profile). A nightly E2E failure reported on June 20 remains unaddressed. No new releases were published. Overall project health is strong — high PR throughput, active review loops, and systematic CI improvements — but the volume of concurrent XL-sized PRs from a small number of core contributors represents a review bottleneck risk.

## 2. Releases

**None.** No new versions were published in the last 24 hours.

## 3. Project Progress

The following PRs were merged or closed today, indicating meaningful advancement:

- **[#2548](https://github.com/nearai/ironclaw/pull/2548) [CLOSED] — Workspace entities with membership and cross-workspace sharing (XL, high-risk, DB migration)**
  Author: standardtoaster. Rebases and completes PR #1734 onto current staging. Adds `users`, `api_tokens`, `workspaces`, `workspace_members` tables with nullable `workspace_id` scoping across conversations and full stack. This is a **foundational multi-tenancy enabler** — a long-running, high-risk effort finally landing.

- **[#5103](https://github.com/nearai/ironclaw/pull/5103) [CLOSED] — Manifest-projected ingress policy + typed auth + transport discriminator**
  Author: serrrfirat. The keystone of the manifest-driven-channels initiative. Consolidates what were originally split PRs (#5103, #5102, #5104, #5106) into a unified contract where inbound policy, auth, and transport are typed manifest data rather than Rust-side selectors.

- **[#5102](https://github.com/nearai/ironclaw/pull/5102) [CLOSED] — Cross-contract credential coherence in v2 manifest projection**
  Author: serrrfirat. Adds a single invariant ensuring credential references are coherent across all `[[host_api]]` contracts in the manifest, eliminating a class of misconfiguration bugs.

- **[#5104](https://github.com/nearai/ironclaw/pull/5104) [CLOSED] — Typed auth verifier + transport discriminator (Move 2)**
  Author: serrrfirat. Fail-closes the auth verifier — a security-relevant refinement ensuring the ingress contract defaults to deny when auth is ambiguous. Net −54 lines of indirection.

- **[#5106](https://github.com/nearai/ironclaw/pull/5106) [CLOSED] — Collapse per-channel host-ingress mount sprawl into one generic plan (Move 4)**
  Author: serrrfirat. Replaces near-identical Slack and Telegram mount blocks and the `#[cfg]` permutation matrix with a single generic serve path. The payoff of the manifest-driven-channels refactor.

- **[#4777](https://github.com/nearai/ironclaw/pull/4777) [CLOSED] — Persist Slack connected state in WebUI**
  Author: serrrfirat. Fixes a Slack reconnect loop where the WebUI always treated Slack as disconnected regardless of actual delivery state. Improves UX for Slack channel users.

- **[#4829](https://github.com/nearai/ironclaw/pull/4829) [CLOSED] — Retire dormant reborn-integration workflow, add Reborn suites to nightly deep CI**
  Author: serrrfirat. Deletes a dead workflow and consolidates Reborn test suites into the nightly deep CI pipeline, improving coverage without redundant runs.

- **[#5105](https://github.com/nearai/ironclaw/pull/5105) [CLOSED] — Fix three stale provider/OAuth guard tests broken on main**
  Author: serrrfirat. Three security-relevant tests were failing on `main` but went undetected because the crates were outside the Reborn CI closure. Investigation confirmed these are stale test assertions (not guard regressions) — all fixed.

- **[#5086](https://github.com/nearai/ironclaw/pull/5086) [CLOSED] — Experimental full-suite gate (nextest archive + mold + sccache + sharding)**
  Author: serrrfirat. Non-blocking measurement spike to determine whether the full test suite can run on the merge gate. Provides real performance numbers for compile/test pipeline optimization.

## 4. Community Hot Topics

**Note:** No PRs in the last 24h have comments or reactions recorded (all show `undefined` or `0`). Activity is high but community engagement signals (comments, 👍) are absent — this is a core-contributor-driven cadence.

- **[#5107](https://github.com/nearai/ironclaw/pull/5107) — Manifest-driven channel ingress contract (consolidated)**
  serrrfirat's consolidation PR covering ingress policy, auth, transport, secrets, and connect onboarding into manifest-defined form. This is the architectural centerpiece for IronClaw's channel extensibility. Underlying need: **reducing the marginal cost of adding new channel providers from "write Rust + handle permutations" to "add a manifest entry."**

- **[#5085](https://github.com/nearai/ironclaw/pull/5085) — Concurrent turn execution via TurnRunScheduler + per-user/per-type caps**
  henrypark133's PR addresses a critical scalability bottleneck — the Reborn runtime currently executes LLM inference runs strictly serially. Underlying need: **throughput for multi-user deployments where concurrent conversations are queued but not concurrently processed.**

- **[#5065](https://github.com/nearai/ironclaw/pull/5065) — One-shot scheduled triggers via `TriggerSchedule::Once{at}`**
  henrypark133 adds fire-once triggers as a first-class schedule variant alongside recurring cron. Underlying need: **users need to schedule single future actions (e.g., "run this agent at 3pm tomorrow") without creating and cleaning up cron jobs.**

- **[#4937](https://github.com/nearai/ironclaw/pull/4937) — Reborn learning system WS-1: memory learning semantics + A/B gate**
  serrrfirat launches the "learn from mistakes, never repeat" initiative with Hermes-parity design. Underlying need: **agent reliability — reducing repeated failures by persisting learned memory documents with confidence scoring.**

## 5. Bugs & Stability

| Severity | Item | Status | Fix PR |
|----------|------|--------|--------|
| **High** | [#4108](https://github.com/nearai/ironclaw/issues/4108) — Nightly E2E failure (Full E2E / features) | ⚠️ OPEN, stale (created 2026-05-27, updated 2026-06-20) | None identified |
| **Medium** | [#5108](https://github.com/nearai/ironclaw/pull/5108) — Reborn-closure tail failures (3 remaining) | 🔧 Fix PR open | Self-authored fix in PR #5108 |
| **Medium** | [#5081](https://github.com/nearai/ironclaw/pull/5081) — Hosted single-tenant Postgres profile gaps | 🔧 PR open | In progress |
| **Low** | [#5105](https://github.com/nearai/ironclaw/pull/5105) — Three stale provider/OAuth guard tests | ✅ Closed/fixed today | PR #5105 |
| **Low** | [#4777](https://github.com/nearai/ironclaw/pull/4777) — Slack reconnect loop in WebUI | ✅ Closed/fixed today | PR #4777 |

**Key concern:** Issue [#4108](https://github.com/nearai/ironclaw/issues/4108) (nightly E2E failure) has been open for nearly a month with no comments or fix PR. The failure is in the Full E2E suite, which suggests a regression in an end-to-end integration path. This is the most significant open stability item.

## 6. Feature Requests & Roadmap Signals

| Signal | PR/Issue | Likelihood of Next Version |
|--------|----------|---------------------------|
| **Manifest-driven channel ingress** (declarative provider onboarding) | [#5107](https://github.com/nearai/ironclaw/pull/5107) (consolidated) | 🟡 Medium — large XL PR, needs review consolidation |
| **Concurrent turn execution** (Reborn throughput) | [#5085](https://github.com/nearai/ironclaw/pull/5085) | 🟡 Medium — addresses clear scalability bottleneck |
| **One-shot scheduled triggers** | [#5065](https://github.com/nearai/ironclaw/pull/5065) | 🟢 High — well-scoped, first-class API addition |
| **Reborn learning system** (memory-based mistake learning) | [#4937](https://github.com/nearai/ironclaw/pull/4937) | 🟡 Medium — multi-PR stack, WS-1 of likely several |
| **Hosted single-tenant Postgres** (managed deployment path) | [#5081](https://github.com/nearai/ironclaw/pull/5081) | 🟡 Medium — "narrow hosted preview path" suggests staged rollout |
| **Proactive Google OAuth token refresh** | [#5087](https://github.com/nearai/ironclaw/pull/5087) | 🟢 High — closes a UX pain point (manual reconnect) |
| **Subagent inline prompt body budget fix** | [#4765](https://github.com/nearai/ironclaw/pull/4765) | 🟢 High — targeted fix for a constraint bug |

**Prediction:** The next release will likely include the **one-shot triggers** (#5065), **Google OAuth refresh** (#5087), and **subagent body budget fix** (#4765) — all are well-scoped, low-risk PRs addressing clear user-facing needs. The manifest-driven channel consolidation (#5107) and concurrent turn execution (#5085) are candidates for a follow-on release pending review bandwidth.

## 7. User Feedback Summary

Direct user feedback is not available in the dataset (no community comments, reactions, or user-authored issues in the 24h window). However, **inferred pain points** from PR content include:

- **Slack reconnect loops** (#4777): Users experienced repeated disconnections in Slack channel integrations, requiring manual intervention. ✅ Now fixed.
- **Google OAuth expiry** (#5087): Users with Google-integrated agents faced credential expiry requiring manual reconnect. 🔧 Fix in progress.
- **Subagent context constraints** (#4765): Subagent goals and directions were artificially truncated to 512 bytes by the `LoopSafeSummary` budget, degrading agent quality. 🔧 Fix in progress.
- **Serial Reborn execution** (#5085): Multi-user deployments face throughput bottlenecks as LLM runs execute one-at-a-time. 🔧 Fix in progress.
- **Nightly E2E failures** (#4108): Silent CI failures suggest undetected regressions in end-to-end flows affecting real users. ⚠️ Unresolved.

**Satisfaction signal:** The rapid closure of long-standing UX bugs (Slack reconnect, OAuth expiry) and the systematic approach to CI quality (Reborn closure, full-suite gate experiments) suggest a responsive core team. However, the absence of community comments may indicate the user base is still small or that feedback channels are elsewhere (Discord, etc.).

## 8. Backlog Watch

| Item | Age | Risk | Recommendation |
|------|-----|------|----------------|
| **[#4108](https://github.com/nearai/ironclaw/issues/4108)** — Nightly E2E failure | ~26 days open | 🔴 High — E2E failures indicate real integration regressions | Needs triage assignment; no comments or owner in 26 days |
| **[#4002](https://github.com/nearai/ironclaw/pull/4002)** — Dependabot: 16 action bumps (checkout v4→v7, etc.) | ~58 days open | 🟡 Medium — stale dependency updates, potential security surface | Needs rebase/merge or close + re-open; dependabot PRs rot quickly |
| **[#4765](https://github.com/nearai/ironclaw/pull/4765)** — Subagent inline prompt body budget | ~10 days open | 🟡 Medium — affects agent quality for subagent use cases | XL-sized fix for a real bug; prioritize review |
| **[#4937](https://github.com/nearai/ironclaw/pull/4937)** — Reborn learning system WS-1 | ~6 days open | 🟢 Low — early-stage feature work | Normal cadence for a multi-PR initiative |

**Primary concern:** Issue [#4108](https://github.com/nearai/ironclaw/issues/4108) has been open for nearly a month with zero comments. Nightly E2E failures that go unaddressed for this long risk becoming normalized ("alert fatigue") and masking real regressions. **Recommend:** assign an owner, post a status update, or close with an explanation if the failure is a known flaky test.

---

*Data source: [github.com/nearai/ironclaw](https://github.com/nearai/ironclaw) — Digest generated 2026-06-21*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-06-21

## 1. Today's Overview

LobsterAI saw minimal activity over the past 24 hours, with no new pull requests, no new releases, and five stale issues closed by maintainers. The closed issues are all from early April 2026 and were marked as stale, suggesting the project is in a maintenance or low-activity phase. No active open issues or PRs remain, indicating either a quiet period or that the community has not yet engaged with recent changes. The absence of any merged PRs or new features signals that development momentum is currently slow.

## 2. Releases

No new releases were published in the reporting window.

## 3. Project Progress

No PRs were merged or opened today. There is no visible feature advancement or code-level fix activity to report.

## 4. Community Hot Topics

All five recently updated issues were closed as stale, with no open items remaining. The most discussed closed issues (by comment count) are:

- **[Issue #1496](https://github.com/netease-youdao/LobsterAI/issues/1496)** — Task shows as completed but returns no result (3 comments). This touches on a core UX concern: users cannot distinguish between a successful silent failure and an actual completion.
- **[Issue #1468](https://github.com/netease-youdao/LobsterAI/issues/1468)** — Agent creation modal discards input silently on close (2 comments).
- **[Issue #1469](https://github.com/netease-youdao/LobsterAI/issues/1469)** — Agent settings panel discards edits silently on close (2 comments).
- **[Issue #1470](https://github.com/netease-youdao/LobsterAI/issues/1470)** — MCP server config modal discards configuration silently on close (2 comments).

**Underlying pattern:** Issues #1468, #1469, and #1470 form a clear cluster — all filed by the same reporter (MaoQianTu) on the same day, all describing the same UX defect across different modals. This signals a systemic UX gap: LobsterAI lacks a universal "unsaved changes" guard across its form-heavy interface. Issue #1496 points to a separate but equally critical reliability concern around task execution feedback.

## 5. Bugs & Stability

| Severity | Issue | Status | Fix PR |
|----------|-------|--------|--------|
| 🔴 High | [#1496](https://github.com/netease-youdao/LobsterAI/issues/1496) — Task completes silently with no return value; user cannot determine if the task succeeded or failed | Closed (stale) | None |
| 🟡 Medium | [#1468](https://github.com/netease-youdao/LobsterAI/issues/1468) — Agent creation modal silently discards user input on close | Closed (stale) | None |
| 🟡 Medium | [#1469](https://github.com/netease-youdao/LobsterAI/issues/1469) — Agent settings panel silently discards edits on close | Closed (stale) | None |
| 🟡 Medium | [#1470](https://github.com/netease-youdao/LobsterAI/issues/1470) — MCP server config modal silently discards configuration on close | Closed (stale) | None |

**Note:** All issues were closed as stale rather than resolved. No fix PRs have been linked. Issue #1496 received 1 👍 reaction, indicating at least one other user experienced the same problem.

## 6. Feature Requests & Roadmap Signals

No explicit feature requests were filed in the reporting window. However, the cluster of UX issues (#1468–#1470) implicitly requests a **global unsaved-changes confirmation dialog** — a reusable guard component for all modals and panels in the application. If maintainers prioritize this, it would address three issues with a single architectural improvement. Issue #1496 implicitly requests **explicit task result feedback** (success/failure/timeout states) in the task execution UI.

## 7. User Feedback Summary

- **Pain point 1 — Data loss on navigation:** Multiple users reported frustration that filling out complex forms (Agent configs, MCP server settings) results in total data loss if they accidentally close a modal. This is especially painful for fields like environment variables and system prompts that are time-consuming to write.
- **Pain point 2 — Silent task failures:** Users report that tasks appear to complete but produce no output, with no error message or diagnostic information. This erodes trust in the system's reliability.
- **Sentiment:** The stale closures without resolution or response risk signaling to the community that these concerns are deprioritized, which could discourage future contributions and issue reports.

## 8. Backlog Watch

All five recently closed issues date from **April 4–7, 2026** — over two months without resolution before being marked stale. Key items needing maintainer attention:

1. **[Issue #1496](https://github.com/netease-youdao/LobsterAI/issues/1496)** — Silent task completion is a core reliability bug. Even though closed as stale, the underlying problem likely persists and should be re-opened or tracked internally.
2. **Unsaved-changes UX pattern (#1468, #1469, #1470)** — These three issues describe a single architectural gap. A maintainer response acknowledging the pattern and outlining a fix plan would significantly improve community confidence, even if the fix is not yet scheduled.

**Recommendation:** Consider re-opening or triaging #1496 and the unsaved-changes cluster, as they represent high-impact UX and reliability issues that affect daily usage of the product.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

# TinyClaw Project Digest — 2026-06-21

---

## 1. Today's Overview

TinyClaw (TinyAGI/tinyagi) shows minimal activity over the past 24 hours: one new issue was opened, zero pull requests were submitted or merged, and no new releases were published. The project appears to be in a quiet maintenance phase, with the sole activity being a security advisory filed by community contributor YLChen-007. Overall, the project's public-facing momentum is low, and there is no evidence of active feature development or release cadence at this time.

---

## 2. Releases

No new releases in the past 24 hours. The latest known version referenced in the security advisory is **TinyAGI `<= 0.0.20`**, suggesting the project is still in early-stage (pre-1.0) development.

---

## 3. Project Progress

No pull requests were opened, merged, or closed today. There is no observable feature advancement or bug-fix activity to report.

---

## 4. Community Hot Topics

- **[#285 — [Security] Unauthenticated `prompt_file` update allows arbitrary local file read into provider-bound prompts](https://github.com/TinyAGI/tinyagi/issues/285)**
  - **Author:** YLChen-007 | **Opened:** 2026-06-20 | **Comments:** 0 | **Reactions:** 0
  - **Analysis:** This is the only active issue and it carries significant weight. The reporter identifies that any client reaching the HTTP management API can set an agent's `prompt_file` to an arbitrary local filesystem path, causing TinyClaw to read that file and inject its contents into prompts sent to AI providers. This is a **server-side request forgery (SSRF) / arbitrary file read** vulnerability. The underlying community need is clear: the management API requires authentication and input validation on file-path parameters before the project can be considered safe for any network-exposed deployment.

---

## 5. Bugs & Stability

| Severity | Issue | Fix PR? |
|----------|-------|---------|
| 🔴 **High — Security** | Unauthenticated arbitrary local file read via `prompt_file` API parameter ([Issue #285](https://github.com/TinyAGI/tinyagi/issues/285)) | ❌ None |

This is the sole bug report in the past 24 hours. Its severity is elevated because it involves **unauthenticated access** and **arbitrary file read**, which could expose credentials, API keys, or other sensitive local files to an attacker. No fix PR has been opened as of this digest.

---

## 6. Feature Requests & Roadmap Signals

No new feature requests were filed today. However, the security advisory in #285 implicitly signals a critical roadmap priority:

- **Authentication & authorization on the HTTP management API** — Until this is addressed, TinyClaw should not be considered production-ready for any environment where the API is network-accessible. This is likely to be the most urgent item for the next release (potentially a **0.0.21 security patch**).

---

## 7. User Feedback Summary

- **Pain point:** The project's HTTP management API lacks authentication, creating a direct path to local file disclosure. This is a fundamental trust boundary failure.
- **Use case context:** Users appear to be deploying TinyClaw with its management API reachable over the network (not just localhost), which is a reasonable deployment pattern but currently unsafe.
- **Satisfaction signal:** The fact that a community member took the time to file a detailed security advisory (rather than simply opening a vague bug report) suggests engaged, technically capable users who want the project to succeed — but who expect baseline security guarantees.

---

## 8. Backlog Watch

| Item | Age | Note |
|------|-----|------|
| **[#285 — Security: Unauthenticated `prompt_file` update](https://github.com/TinyAGI/tinyagi/issues/285)** | ~1 day | High-severity security issue with zero maintainer response so far. Needs triage and a fix PR urgently. |

This issue is the only backlog item visible in the 24-hour window, but its severity makes it the top priority for maintainer attention. If it remains unaddressed, it may discourage further community adoption.

---

*Generated by OWL — Project Digest for TinyClaw (TinyAGI/tinyagi) — 2026-06-21*

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-06-21

---

## 1. Today's Overview

Moltis saw minimal activity on 2026-06-21, with no new issues opened or updated in the last 24 hours. Two pull requests were updated, both automated dependency bumps from `dependabot[bot]`, indicating the project is in a maintenance-focused phase rather than active feature development. One PR was merged/closed and one remains open, suggesting routine dependency hygiene is being kept up. No new releases were published today. Overall, the project appears stable but quiet, with no community-driven contributions or bug reports surfacing in the last day.

---

## 2. Releases

**None.** No new versions were published on or around 2026-06-21.

---

## 3. Project Progress

- **PR #1133** — *chore(deps): bump astro from 6.3.3 to 6.4.8 in /docs* — **CLOSED/MERGED**
  This automated dependency update bumps the Astro framework used in the `/docs` directory from 6.3.3 to 6.4.8. The merge indicates the maintainers are keeping documentation tooling current.
  → [moltis-org/moltis#1133](https://github.com/moltis-org/moltis/pull/1133)

- **PR #1134** — *chore(deps): bump the npm_and_yarn group across 2 directories with 2 updates* — **OPEN**
  This broader dependency bump covers both the `/docs` directory (Astro 6.3.3 → 6.4.8) and the `/website` directory (undici update). It remains open and likely awaits review or CI validation.
  → [moltis-org/moltis#1134](https://github.com/moltis-org/moltis/pull/1134)

---

## 4. Community Hot Topics

**None.** There are no open issues or community-discussed PRs with meaningful comment or reaction activity in the last 24 hours. All activity is limited to automated dependency management.

---

## 5. Bugs & Stability

**None.** No bugs, crashes, or regressions were reported in the last 24 hours. The absence of issues suggests the current release is stable from a user-facing perspective.

---

## 6. Feature Requests & Roadmap Signals

**None.** No new feature requests or roadmap-related discussions were initiated today. The project's signal for upcoming priorities is currently dormant.

---

## 7. User Feedback Summary

**None.** No user feedback, pain points, or use-case discussions were recorded in the last 24 hours. The project's community engagement is at a low ebb, which is typical for periods between major releases or during maintenance windows.

---

## 8. Backlog Watch

With zero open issues and only one open PR (the dependabot PR #1134, which is routine), there is no backlog requiring urgent maintainer attention today. However, it is worth monitoring whether the open PR #1134 receives timely review, as accumulated dependency updates can compound and create merge conflicts or security exposure if left unaddressed.

---

*Generated by OWL — 2026-06-21*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-06-21

---

## 1. Today's Overview

CoPaw shows **high activity** with 6 issues and 9 PRs updated in the last 24 hours, though no new releases were published. The project is in an active development phase: contributors are pushing significant infrastructure changes (memory runtime migration, context management strategies, Docker tool execution) while the community surfaces stability bugs around message handling, cron scheduling, and provider compatibility. Three issues and one PR were closed today, indicating maintainers are responsive. The volume of first-time contributors (5 of 9 PRs) signals healthy community growth.

---

## 2. Releases

**None.** No new versions were published today.

---

## 3. Project Progress

### Closed PRs

| PR | Summary |
|---|---|
| [#5128](https://github.com/agentscope-ai/CoPaw/pull/5128) | **Langfuse observability improvement** — Groups one full agent ReAct loop into a single Langfuse trace, fixing the issue where each LLM call appeared as a disconnected trace. Merged after 9 days. |

### Key Open PRs Advancing

| PR | Summary |
|---|---|
| [#5349](https://github/agentscope-ai/CoPaw/pull/5349) | **[WIP] Memory runtime migration to ReMe4** — Upgrades from legacy `reme-ai`/`ReMeLight` to `reme[core]==0.4.0.0`. Maintains backward-compatible class names. This is a significant infrastructure modernization. |
| [#5321](https://github/agentscope-ai/CoPaw/pull/5321) | **Scroll context manager** — New retrieval-driven context management strategy as an alternative to native compression, plus a durable history + recall REPL. Also fixes agent-config resolution for non-default agents. Under review. |
| [#5348](https://github/agentscope-ai/CoPaw/pull/5348) | **KV cache prefix preservation** — Freezes `env_context` date per session so that crossing midnight doesn't invalidate the entire KV cache. Clever performance optimization. |
| [#5346](https://github.com/agentscope-ai/CoPaw/pull/5346) | **Tool execution in Docker** — New feature enabling tools to run inside Docker containers. |
| [#5341](https://github.com/agentscope-ai/CoPaw/pull/5341) | **File tool sandboxing** — Constrains built-in file tools (`read_file`, `write_file`, etc.) to the agent workspace, preventing path traversal outside the workspace. Important security fix. |
| [#5347](https://github.com/agentscope-ai/CoPaw/pull/5347) | **Cron jobs.json migration** — Drops invalid entries on startup (migration approach for [#4835](https://github.com/agentscope-ai/CoPaw/issues/4835)). |
| [#5339](https://github.com/agentscope-ai/CoPaw/pull/5339) | **Zhipu AI connection test fix** — Fixes `check_model_connection` sending array content instead of plain string, which caused all Zhipu AI model connection tests to fail ([#5330](https://github.com/agentscope-ai/CoPaw/issues/5330)). |
| [#5340](https://github.com/agentscope-ai/CoPaw/pull/5340) | **Model factory formatter fix** — Switches formatter drop detection from blacklist to whitelist, fixing issues when users interrupt agent generation (stop button) and empty messages are written to memory. |

---

## 4. Community Hot Topics

### Most Discussed Issues

| Issue | Comments | Signal |
|---|---|---|
| [#5208](https://github.com/agentscope-ai/CoPaw/issues/5208) — Assistant message count mismatch with reasoning blocks | **6** | Highest engagement. Users need robust handling of non-standard reasoning block types (`"reasoning"` vs `"thinking"`) from OpenAI-compatible providers. Reflects growing diversity of model providers. |
| [#5250](https://github.com/agentscope-ai/CoPaw/issues/5250) — Cron tasks interrupt main chat | **2** | Cron task injection into the active chat stream is a UX problem — users expect background scheduling without conversation disruption. |

### Analysis of Underlying Needs

- **Provider compatibility fragmentation**: Issues [#5208](https://github.com/agentscope-ai/CoPaw/issues/5208) and [#5345](https://github.com/agentscope-ai/CoPaw/issues/5345) both point to a systemic challenge — CoPaw's OpenAI-compatible provider abstraction doesn't gracefully handle the growing diversity of reasoning block formats and function-calling behaviors across providers (LongCat, OMLX, Zhipu AI). The project likely needs a more adaptive provider capability detection layer.
- **Context management is a major focus area**: With PRs [#5321](https://github.com/agentscope-ai/CoPaw/pull/5321) (scroll context), [#5348](https://github.com/agentscope-ai/CoPaw/pull/5348) (KV cache), and [#5342](https://github.com/agentscope-ai/CoPaw/issues/5342) (tool result size cap), the community is actively investing in solving context explosion — a critical pain point for long-running agent sessions.

---

## 5. Bugs & Stability

### Ranked by Severity

| Severity | Issue | Description | Fix PR? |
|---|---|---|---|
| 🔴 **High** | [#5344](https://github.com/agentscope-ai/CoPaw/issues/5344) — `/api/console/chat` silently drops messages | HTTP 200 returned but message is discarded when agent is busy. **Silent data loss** — the most dangerous kind of bug. Duplicate of closed [#5343](https://github.com/agentscope-ai/CoPaw/issues/5343), suggesting the fix may not have fully resolved it. | ❌ None yet |
| 🔴 **High** | [#5342](https://github.com/agentscope-ai/CoPaw/issues/5342) — No hard cap on tool result size | When LLM calls fail (502), the pruning hook is skipped, causing unbounded context growth and cascading failures. Defense-in-depth gap. | ❌ None yet (filed as feature request) |
| 🟡 **Medium** | [#5345](https://github.com/agentscope-ai/CoPaw/issues/5345) — Custom OpenAI providers lack function calling | OMLX provider returns text only, no tool calls. Limits extensibility for users with custom model endpoints. | ❌ None yet |
| 🟡 **Medium** | [#5208](https://github.com/agentscope-ai/CoPaw/issues/5208) — Reasoning block type mismatch | Warning on every turn with LongCat-2.0-Preview. Degrades UX and may cause silent reasoning content loss. | ✅ Closed (fix presumably merged) |
| 🟢 **Low** | [#5250](https://github.com/agentscope-ai/CoPaw/issues/5250) — Cron interrupts chat | UX disruption but no data loss. | ✅ Closed (fix presumably merged) |

---

## 6. Feature Requests & Roadmap Signals

| Request | Likelihood of Next Version | Rationale |
|---|---|---|
| **Tool result size hard cap** ([#5342](https://github.com/agentscope-ai/CoPaw/issues/5342)) | **High** | Addresses a real cascading failure pattern; aligns with the context management focus visible across multiple PRs. |
| **Docker tool execution** ([#5346](https://github.com/agentscope-ai/CoPaw/pull/5346)) | **High** | PR already open; sandboxing tools in containers is a natural complement to the file tool sandboxing PR [#5341](https://github.com/agentscope-ai/CoPaw/pull/5341). |
| **Scroll context manager** ([#5321](https://github.com/agentscope-ai/CoPaw/pull/5321)) | **Medium-High** | Under active review; retrieval-driven context is a strategic direction for long-session agents. |
| **KV cache prefix freezing** ([#5348](https://github.com/agentscope-ai/CoPaw/pull/5348)) | **Medium** | Performance optimization with clear rationale; small scope makes it mergeable. |
| **ReMe4 memory migration** ([#5349](https://github.com/agentscope-ai/CoPaw/pull/5349)) | **Medium** | Marked WIP; infrastructure modernization that may need more testing before release. |
| **Improved provider capability detection** | **Emerging** | Not explicitly requested as a single issue, but the pattern across [#5208](https://github.com/agentscope-ai/CoPaw/issues/5208), [#5345](https://github.com/agentscope-ai/CoPaw/issues/5345), and [#5339](https://github.com/agentscope-ai/CoPaw/pull/5339) suggests a systemic need. |

---

## 7. User Feedback Summary

### Pain Points

1. **Silent failures erode trust**: The `/api/console/chat` returning HTTP 200 while silently dropping messages ([#5344](https://github.com/agentscope-ai/CoPaw/issues/5344)) is the most critical UX issue. Users cannot distinguish between "message received" and "message lost." This pattern — also seen in the reasoning content injection skip in [#5208](https://github.com/agentscope-ai/CoPaw/issues/5208) — suggests CoPaw needs a broader audit of silent-failure paths.

2. **Provider diversity is outpacing compatibility**: Users are connecting CoPaw to LongCat, OMLX, Zhipu AI, and other OpenAI-compatible endpoints. Each brings subtle API differences (reasoning block types, content array vs. string, function calling behavior). Users expect "OpenAI-compatible" to mean "just work."

3. **Cron scheduling UX**: Users want background task execution that doesn't hijack their active conversation ([#5250](https://github.com/agentscope-ai/CoPaw/issues/5250)). This reflects real-world usage patterns where agents handle both interactive and scheduled workloads.

### Satisfaction Signals

- Strong first-time contributor pipeline (5 of 9 PRs) suggests the project is approachable and well-documented.
- Active PR review and issue closure (3 issues + 1 PR closed today) indicates responsive maintainers.
- Users are filing detailed, reproducible bug reports with environment info — a sign of an engaged, technical user base.

---

## 8. Backlog Watch

| Item | Age | Risk | Action Needed |
|---|---|---|---|
| [#5344](https://github.com/agentscope-ai/CoPaw/issues/5344) — Silent message drop | 1 day (but duplicate of closed [#5343](https://github.com/agentscope-ai/CoPaw/issues/5343)) | **Critical** — If the prior fix didn't fully resolve this, it needs immediate re-investigation. Silent data loss in the main chat API is a trust-breaking bug. | Maintainer should confirm whether the fix for #5343 covers #5344's reproduction steps. |
| [#5342](https://github.com/agentscope-ai/CoPaw/issues/5342) — Tool result size cap | 1 day | **High** — Cascading context failure pattern. No PR yet. | Needs triage and assignment. Defense-in-depth gap. |
| [#5345](https://github.com/agentscope-ai/CoPaw/issues/5345) — Custom provider function calling | 1 day | **Medium** — Blocks users with custom model backends. | Needs investigation into why OMLX tools aren't being invoked despite correct API. |
| [#4835](https://github.com/agentscope-ai/CoPaw/issues/4835) — Invalid cron jobs (root issue for PR [#5347](https://github.com/agentscope-ai/CoPaw/pull/5347)) | Older | **Medium** — PR #5347 addresses this via migration. | Monitor PR #5347 merge progress. |

---

*CoPaw is in a healthy, active state with strong community contributions and responsive maintainers. The most urgent action item is resolving the silent message drop bug ([#5344](https://github.com/agentscope-ai/CoPaw/issues/5344)), which risks user trust if left unaddressed. The project's strategic direction — better context management, provider compatibility, and execution sandboxing — is well-aligned with real user needs.*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-06-21

---

## 1. Today's Overview

ZeroClaw shows **high activity** with 50 issues and 50 PRs updated in the last 24 hours, signaling a project in active development toward its v0.9.0 milestone. The majority of issues remain open (44/50) and PRs are still in-flight (40/50), indicating the team is mid-cycle rather than in a release crunch. Key themes dominating today's activity are **authentication/authorization architecture (RFC #7141)**, **observability improvements**, **memory/context reliability**, and **multi-channel support expansion**. No new releases were published, suggesting the project is still accumulating changes for an upcoming beta or RC.

---

## 2. Releases

**No new releases in the last 24 hours.** The latest releases section is empty. The project appears to be in a development accumulation phase targeting v0.9.0 (tracked in [#7432](https://github.com/zeroclaw-labs/zeroclaw/issues/7432)) and v0.8.2 (tracked in [#7852](https://github.com/zeroclaw-labs/zeroclaw/issues/7852)).

---

## 3. Project Progress

### Merged / Closed PRs (10 total)

| PR | Summary | Significance |
|---|---|---|
| [#7932](https://github.com/zeroclaw-labs/zeroclaw/pull/7932) | Fix Node 24 digest pins in Dockerfiles | CI/infra stability |
| [#8036](https://github.com/zeroclaw-labs/zeroclaw/pull/8036) | Pin system prompt in cache-hit test to eliminate date flake | Test reliability |
| [#7616](https://github.com/zeroclaw-labs/zeroclaw/pull/7616) | Strip assistant reasoning on outbound replay for Groq provider | Provider compatibility fix |
| [#7877](https://github.com/zeroclaw-labs/zeroclaw/issues/7877) | External coding tools resolve relative working_directory from daemon cwd (closed) | Tool path resolution |
| [#7795](https://github.com/zeroclaw-labs/zeroclaw/issues/7795) | static_voice_peers SSOT violation in Telegram channel (closed) | Config consistency |
| [#6243](https://github.com/zeroclaw-labs/zeroclaw/issues/6243) | Streaming decode error causing hangs (closed) | Runtime stability |
| [#5883](https://github.com/zeroclaw-labs/zeroclaw/issues/5883) | Service start failure on macOS (closed) | Daemon reliability |
| [#5686](https://github.com/zeroclaw-labs/zeroclaw/issues/5686) | QQ message command documentation gap (closed) | Docs/channel coverage |

### Notable In-Progress Work

- **Authentication overhaul**: PR [#8063](https://github.com/zeroclaw-labs/zeroclaw/pull/8063) landed the `Principal` type and `AuthProvider` seam — the foundational spine for pluggable auth. This is the first concrete delivery against RFC [#7141](https://github.com/zeroclaw-labs/zeroclaw/issues/7141) (OIDC support, target v0.9.0).
- **Observability**: PRs [#8065](https://github.com/zeroclaw-labs/zeroclaw/pull/8065) (trace_id correlation + per-call cost logging) and [#8066](https://github.com/zeroclaw-labs/zeroclaw/pull/8066) (opt-in LLM request payload capture) are advancing the observability RFC [#7232](https://github.com/zeroclaw-labs/zeroclaw/issues/7232).
- **SOP durability**: PR [#8001](https://github.com/zeroclaw-labs/zeroclaw/pull/8001) introduces the `SopRunStore` trait — a durable run-state store contract for future SOP reliability work.
- **Multi-database sessions**: PR [#6893](https://github.com/zeroclaw-labs/zeroclaw/pull/6893) adds Postgres, Oracle, MySQL, and Db2 session backends (feature-gated), targeting multi-agent fleet deployments.
- **Cost config reload**: PR [#8004](https://github.com/zeroclaw-labs/zeroclaw/pull/8004) makes budget config reloadable instead of frozen at boot — a quality-of-life improvement for operators.

---

## 4. Community Hot Topics

### Top Issues by Comment Count

1. **[#5849](https://github.com/zeroclaw-labs/zeroclaw/issues/5849) — Dream Mode: Periodic Memory Consolidation & Reflective Learning** (18 comments)
   - **Underlying need**: Users want ZeroClaw to autonomously consolidate memories and reflect during idle periods — essentially a "sleep cycle" for the agent. This signals demand for more intelligent, self-maintaining long-term memory rather than passive storage.

2. **[#5862](https://github.com/zeroclaw-labs/zeroclaw/issues/5862) — ZeroClaw doesn't know it can add cron jobs** (13 comments)
   - **Underlying need**: The agent fails to self-discover its own `zeroclaw cron` capability when users ask for scheduled tasks. This is a tool-discovery / self-awareness gap that undermines user trust in the agent's competence.

3. **[#6808](https://github.com/zeroclaw-labs/zeroclaw/issues/6808) — RFC: Work Lanes, Board Automation, and Label Cleanup** (11 comments)
   - **Underlying need**: As the project scales, issue/PR routing and project board maintenance is becoming a bottleneck. Community wants automated lane assignment and label governance.

4. **[#7141](https://github.com/zeroclaw-labs/zeroclaw/issues/7141) — OIDC Authentication Provider support** (6 comments)
   - **Underlying need**: Enterprise and security-conscious users need pluggable auth (OIDC, SSH-key, etc.) beyond the current model. The follow-up [#8076](https://github.com/zeroclaw-labs/zeroclaw/issues/8076) for local username/password auth shows demand for IdP-less options too.

5. **[#5844](https://github.com/zeroclaw-labs/zeroclaw/issues/5844) — Too much emphasis on memory** (6 comments)
   - **Underlying need**: The system prompt over-prioritizes recalled memories, especially in cron jobs, causing the agent to ignore current prompt instructions. Users want better balance between memory retrieval and task focus.

6. **[#6672](https://github.com/zeroclaw-labs/zeroclaw/issues/6672) — reasoning_content not passed back in agentic loops with Xiaomi mimo models** (5 comments, severity S0)
   - **Underlying need**: Provider compatibility for thinking/reasoning models — data loss in multi-turn tool-call loops is a critical correctness issue.

---

## 5. Bugs & Stability

### Critical / S0 Bugs

| Issue | Severity | Status | Fix PR? |
|---|---|---|---|
| [#6672](https://github.com/zeroclaw-labs/zeroclaw/issues/6672) — `reasoning_content` lost in agentic loops (Xiaomi mimo models) | S0 — data loss | Open, blocked on author | None |
| [#6558](https://github.com/zeroclaw-labs/zeroclaw/issues/6558) — All providers/models failed (Qwen custom endpoint 405) | S0 — data loss | Open, blocked on author | None |

### High / S1 Bugs

| Issue | Severity | Status | Fix PR? |
|---|---|---|---|
| [#5808](https://github.com/zeroclaw-labs/zeroclaw/issues/5808) — Default 32k context budget exceeded by system prompt + tool defs on iteration 1 | S1 — workflow blocked | Open, accepted | None |
| [#6037](https://github.com/zeroclaw-labs/zeroclaw/issues/6037) — Cron jobs launch repeatedly while still running | S1 — workflow blocked | Open, accepted | None |
| [#6036](https://github.com/zeroclaw-labs/zeroclaw/issues/6036) — Infinite tool-call loop on Termux/Android | S1 — workflow blocked | Closed | None |
| [#5883](https://github.com/zeroclaw-labs/zeroclaw/issues/5883) — Service start fails on macOS | S1 — workflow blocked | Closed | None |
| [#8047](https://github.com/zeroclaw-labs/zeroclaw/issues/8047) — ReadSkillTool looks in `data_dir` but skills live in agent workspace | S2 — degraded behavior | Open (new, 1 comment) | None |
| [#6517](https://github.com/zeroclaw-labs/zeroclaw/issues/6517) — Context overflow causes hallucination / topic drift | S2 — degraded behavior | Open, needs repro | None |

### Notable Fix PRs Addressing Bugs

- [#8048](https://github.com/zeroclaw-labs/zeroclaw/pull/8048) — Keeps tool-result content under context pressure; honors `history_pruning` config (open)
- [#8014](https://github.com/zeroclaw-labs/zeroclaw/pull/8014) — Stops duplicating streamed narration before native tool calls (open)
- [#7973](https://github.com/zeroclaw-labs/zeroclaw/pull/7973) — Self-contained context-compression summary provider (open)
- [#7921](https://github.com/zeroclaw-labs/zeroclaw/pull/7921) — Deterministic same-timestamp pagination via byte-offset cursor (open)
- [#7345](https://github.com/zeroclaw-labs/zeroclaw/pull/7345) — Gates path-listing tool results from vision routing (open)

---

## 6. Feature Requests & Roadmap Signals

### Likely in v0.9.0 (based on tracker [#7432](https://github.com/zeroclaw-labs/zeroclaw/issues/7432))

- **Pluggable Authentication Providers** (OIDC, SSH-key, local username/password) — RFC [#7141](https://github.com/zeroclaw-labs/zeroclaw/issues/7141) with foundational PR [#8063](https://github.com/zeroclaw-labs/zeroclaw/pull/8063) already merged. Follow-up [#8076](https://github.com/zeroclaw-labs/zeroclaw/issues/8076) for IdP-less browser login is a new child issue.
- **Structured Observability** — RFC [#7232](https://github.com/zeroclaw-labs/zeroclaw/issues/7232) with multiple PRs landing (trace correlation, cost logging, payload capture).
- **Work Lanes & Board Automation** — RFC [#6808](https://github.com/zeroclaw-labs/zeroclaw/issues/6808) accepted and in rollout.

### Likely in v0.8.2 (based on tracker [#7852](https://github.com/zeroclaw-labs/zeroclaw/issues/7852))

- **Skills platform improvements** — registries, effective-skill resolution, plugin-bundled skill behavior.
- **LSP support for coding workflows** — RFC [#5907](https://github.com/zeroclaw-labs/zeroclaw/issues/5907) (opt-in LSP) is accepted but still blocked.

### Emerging / Unscheduled

- **Dream Mode** ([#5849](https://github.com/zeroclaw-labs/zeroclaw/issues/5849)) — High engagement (18 comments) but no RFC or assignee yet. Could be a v0.10+ feature.
- **Voice satellite support** ([#7944](https://github.com/zeroclaw-labs/zeroclaw/issues/7944)) — ESP32/smartphone PWA as voice peripheral. Novel hardware integration use case.
- **Streaming card messages for QQ/DingTalk/WeChat/Feishu** ([#7531](https://github.com/zeroclaw-labs/zeroclaw/issues/7531)) — Reducing user wait time on Chinese IM platforms.
- **Multi-database session backends** ([#6893](https://github.com/zeroclaw-labs/zeroclaw/pull/6893)) — Enterprise deployment enabler.

---

## 7. User Feedback Summary

### Pain Points

1. **Memory over-reliance**: Users report the agent prioritizes recalled memories over current instructions, especially in cron jobs ([#5844](https://github.com/zeroclaw-labs/zeroclaw/issues/5844)). This degrades task reliability.
2. **Context window misconfiguration**: The default 32k context budget is exceeded on the first iteration by system prompt + tool definitions alone ([#5808](https://github.com/zeroclaw-labs/zeroclaw/issues/5808)). Users with large tool sets hit this immediately.
3. **Agent self-awareness gaps**: The agent doesn't know it can create cron jobs ([#5862](https://github.com/zeroclaw-labs/zeroclaw/issues/5862)), undermining confidence in autonomous operation.
4. **Cron reliability**: Jobs can fire repeatedly while still running ([#6037](https://github.com/zeroclaw-labs/zeroclaw/issues/6037)), and the agent can't self-discover cron capability.
5. **Provider compatibility**: Multiple reports of failures with specific providers — Xiaomi mimo reasoning content loss ([#6672](https://github.com/zeroclaw-labs/zeroclaw/issues/6672)), Qwen custom endpoint 405 errors ([#6558](https://github.com/zeroclaw-labs/zeroclaw/issues/6558)), Groq reasoning rejection (fixed in [#7616](https://github.com/zeroclaw-labs/zeroclaw/pull/7616)).
6. **Documentation gaps**: Docker images lack built-in docs ([#7950](https://github.com/zeroclaw-labs/zeroclaw/issues/7950)), QQ channel commands undocumented ([#5686](https://github.com/zeroclaw-labs/zeroclaw/issues/5686), closed).

### Positive Signals

- Active PR pipeline with maintainers landing security, observability, and auth infrastructure.
- RFC process is functioning well — structured proposals with clear DoD items.
- Multi-channel expansion (WeCom, Feishu, QQ, DingTalk, Slack, Telegram) shows broad platform commitment.

---

## 8. Backlog Watch

### High-Priority Items Needing Maintainer Attention

| Issue | Age | Status | Concern |
|---|---|---|---|
| [#5808](https://github.com/zeroclaw-labs/zeroclaw/issues/5808) — Default 32k context exceeded on iteration 1 | ~2 months | Open, accepted, no PR | **P1 severity, no fix in progress.** Affects every new user with default config. |
| [#6037](https://github.com/zeroclaw-labs/zeroclaw/issues/6037) — Cron jobs launch repeatedly while running | ~2 months | Open, accepted, no PR | **P1 severity, no fix in progress.** Data integrity risk for scheduled tasks. |
| [#6672](https://github.com/zeroclaw-labs/zeroclaw/issues/6672) — reasoning_content lost in agentic loops | ~1 month | Open, blocked on author | **S0 data loss.** Needs maintainer triage or community PR. |
| [#5862](https://github.com/zeroclaw-labs/zeroclaw/issues/5862) — Agent doesn't know it can cron | ~2 months | Open, blocked on author | High community engagement (13 comments) but stale. |
| [#6517](https://github.com/zeroclaw-labs/zeroclaw/issues/6517) — Context overflow causes hallucination | ~1.5 months | Open, needs repro | S2 severity but affects trust in long conversations. |
| [#5844](https://github.com/zeroclaw-labs/zeroclaw/issues/5844) — Too much emphasis on memory | ~2 months | Open, accepted, no PR | Recurring complaint, affects cron job reliability. |

### Stale Candidates (flagged `stale-candidate`)

- [#5862](https://github.com/zeroclaw-labs/zeroclaw/issues/5862) — Agent can't discover cron capability
- [#6672](https://github.com/zeroclaw-labs/zeroclaw/issues/6672) — reasoning_content data loss
- [#6558](https://github.com/zeroclaw-labs/zeroclaw/issues/6558) — Qwen provider errors
- [#6517](https://github.com/zeroclaw-labs/zeroclaw/issues/6517) — Context overflow hallucination

---

**Summary Assessment**: ZeroClaw is in a **healthy mid-development cycle** with strong community engagement and a clear architectural direction (auth, observability, multi-channel). The main risk is a growing backlog of **P1/S0 bugs without assigned fixes** — particularly the default context budget overflow ([#5808](https://github.com/zeroclaw-labs/zeroclaw/issues/5808)) and cron double-launch ([#6037](https://github.com/zeroclaw-labs/zeroclaw/issues/6037)). Addressing these before v0.9.0 ships should be a priority to maintain user trust.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/DenisZheng/agents-radar).*