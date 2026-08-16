# OpenClaw Ecosystem Digest 2026-08-16

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-08-16 00:55 UTC

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

# OpenClaw Project Digest — 2026-08-16

## 1. Today's Overview

OpenClaw shows **extremely high activity** with 500 issues and 500 PRs updated in the past 24 hours. The project is in a **beta release cycle** (v2026.8.1-beta.2 shipped today) with heavy focus on stability fixes for session management, message delivery, and provider integrations. The open/closed ratios (480 open issues, 445 open PRs) indicate a large active backlog with maintainers processing ~55 PRs daily. Key themes: secret egress hardening, GPT-5.6 Ultra support, subagent reliability, and Windows/CI compatibility fixes.

---

## 2. Releases

### v2026.8.1-beta.2 — OpenClaw 2026.8.1-beta.2
**Released today** — Highlights from release notes:

| Change | Impact |
|--------|--------|
| **Secret egress host binding** — Each shared-store secret now bound to exact HTTPS destination hosts across CLI, Gateway RPC, and Control UI. Unbound sentinel substitution fails closed before plaintext egress. | 🔒 **Security hardening** — Prevents accidental secret leakage; breaking change for configs using unbound secrets |
| **GPT-5.6 Ultra and runtime switching** — Support for latest OpenAI model with dynamic model switching at runtime | 🤖 **Provider update** — New model capability; may require config updates for fallback chains |

> **Migration note**: The secret egress binding is a **breaking change** — existing deployments using shared secrets without explicit host allowlists will see sentinel substitution fail closed. Review `secrets.targets` in `openclaw.json` before upgrading production.

---

## 3. Project Progress (Merged/Closed PRs Today)

55 PRs merged/closed in last 24h. Notable completions:

| PR | Type | Summary |
|----|------|---------|
| [#116489](https://github.com/openclaw/openclaw/pull/116489) | **Security feat** | Require acknowledgement for install policy warnings — operators must explicitly approve suspicious plugin/skill installs |
| [#119777](https://github.com/openclaw/openclaw/pull/119777) | **CLI fix** | `openclaw health` now reports resolved SQLite session store path |
| [#120900](https://github.com/openclaw/openclaw/pull/120900) | **UI security** | Control UI: authenticated admins can review install-policy warnings and deliberately continue plugin installs |
| [#124037](https://github.com/openclaw/openclaw/pull/124037) | **Architecture** | Workers: run device sessions from Gateway bundles (not local package) — fixes provisioning boundary defects |
| [#124145](https://github.com/openclaw/openclaw/pull/124145) | **Gateway fix** | Keep same-sequence history rows reachable — fixes HTTP/SSE clients missing visible rows on page splits |

**Velocity signal**: High merge throughput on security, session integrity, and gateway availability fixes — consistent with beta stabilization.

---

## 4. Community Hot Topics (Most Active Issues/PRs)

### Top 5 Issues by Comment Count

| Issue | Comments | Type | Core Need |
|-------|----------|------|-----------|
| [#121058](https://github.com/openclaw/openclaw/issues/121058) | 96 | **P1 Bug** | Silent reply failures **regressed** after #116277 closed — monitoring cron still logging occurrences. Users losing messages in production. |
| [#116201](https://github.com/openclaw/openclaw/issues/116201) | 66 | **P1 Bug** | Realtime voice sessions retain **unbounded provider/consult state** — memory/frame leaks under slow/bursty conditions. |
| [#7707](https://github.com/openclaw/openclaw/issues/7707) | 53 | **P2 Feature** | **Memory Trust Tagging by Source** — prevent memory poisoning from untrusted content (web scrapes, third-party skills). Security-critical. |
| [#25592](https://github.com/openclaw/openclaw/issues/25592) | 49 | **P1 Bug** | Text between tool calls **leaks to messaging channels** (Slack, iMessage) — internal narration visible to users. Major UX break. |
| [#44925](https://github.com/openclaw/openclaw/issues/44925) | 29 | **P1 Bug** | Subagent completion **silently lost** — no retry, notification, or auto-restart on timeout. Data loss for long-running tasks. |

### Top PRs by Engagement (awaiting review)

| PR | Status | Risk Tags | Summary |
|----|--------|-----------|---------|
| [#121764](https://github.com/openclaw/openclaw/pull/121764) | Ready for maintainer | 🚨 compatibility, 🚨 auth-provider | Prepared cancellable OAuth refresh hooks — fixes stale provider after credential rotation |
| [#123356](https://github.com/openclaw/openclaw/pull/123356) | Ready for maintainer | 🚨 compatibility | Control UI: stage slash command arguments in composer |
| [#123874](https://github.com/openclaw/openclaw/pull/123874) | Waiting on author | 🚨 compatibility, 🚨 session-state | Unify chat side rails in tabbed panel — major UI refactor |
| [#124302](https://github.com/openclaw/openclaw/pull/124302) | Waiting on author | 🚨 compatibility, 🚨 availability | Gateway: make core readiness independent of sidecars — prevents optional sidecar failures from blocking HTTP core |
| [#124300](https://github.com/openclaw/openclaw/pull/124300) | Waiting on author | 🚨 compatibility | Preserve Claude CLI prompt cache reuse across turns — 99.9% → 22% hit rate regression |

---

## 5. Bugs & Stability (Ranked by Severity)

### 🔴 Critical (P1 — Data Loss / Message Loss / Crash Loop)

| Issue | Severity | Fix PR? | Summary |
|-------|----------|---------|---------|
| [#121058](https://github.com/openclaw/openclaw/issues/121058) | **P1 — Message Loss** | ❌ | Silent reply failures **recurring** after prior fix closed. Monitoring shows new occurrences daily. |
| [#44925](https://github.com/openclaw/openclaw/issues/44925) | **P1 — Data Loss** | ❌ | Subagent completion silently lost — no retry/notification/auto-restart. |
| [#86684](https://github.com/openclaw/openclaw/issues/86684) | **P1 — Data Loss** | ✅ [#86684 linked] | `sessions_yield` parent branch compacted at low context usage (65k/1.05M) — regression. |
| [#90944](https://github.com/openclaw/openclaw/issues/90944) | **P1 — Message Loss** | ✅ [#90944 linked] | `sessions_yield` resume reply recorded but not delivered; user gets child raw summary instead. |
| [#80498](https://github.com/openclaw/openclaw/issues/80498) | **P1 — Message Loss** | ❌ | Subagent completion announcements premature/duplicated after tool-use turns. |
| [#94939](https://github.com/openclaw/openclaw/issues/94939) | **P1 — Data Loss** | ❌ | 6.x state migration leaves channel conversation-store SQLite empty (0 bytes) — breaks MS Teams proactive sends. |
| [#119087](https://github.com/openclaw/openclaw/issues/119087) | **P1 — Crash/Perf** | ❌ | Gateway cold start **regressed ~2.5x** (2026.7.1-beta.1 → 2026.7.2-beta.7) on 1-vCPU. |
| [#43374](https://github.com/openclaw/openclaw/issues/43374) | **P1 — Message Loss** | ❌ | All LLM API calls timeout simultaneously under multi-agent concurrency (not provider issue). |

### 🟠 High (P2 — Session State / Security / UX)

| Issue | Severity | Fix PR? | Summary |
|-------|----------|---------|---------|
| [#116201](https://github.com/openclaw/openclaw/issues/116201) | **P2 — Session State** | ❌ | Realtime voice: unbounded provider/consult state retention. |
| [#25592](https://github.com/openclaw/openclaw/issues/25592) | **P2 — UX/Security** | ❌ | Inter-tool-call text leaks to messaging channels. |
| [#67419](https://github.com/openclaw/openclaw/issues/67419) | **P2 — Session State** | ❌ | Bootstrap files re-injected every turn (20-30% token waste). |
| [#41744](https://github.com/openclaw/openclaw/issues/41744) | **P2 — Message Loss** | ✅ [#41744 linked] | Feishu: read image tool result loses media before final outbound payload. |
| [#121953](https://github.com/openclaw/openclaw/issues/121953) | **P2 — Perf** | ❌ | Cron agent turns stall on DeepSeek — `[cron:...]` prefix deprioritized by provider edge. |
| [#82662](https://github.com/openclaw/openclaw/issues/82662) | **P2 — Availability** | ❌ | Isolated cron `agentTurn` fails with "setup timed out before runner start" — all fallbacks exhausted. |
| [#123073](https://github.com/openclaw/openclaw/issues/123073) | **P2 — Install/Update** | ✅ [#124322](https://github.com/openclaw/openclaw/pull/124322) | `dev-channel update` fails: `EUNSUPPORTEDPROTOCOL` on `workspace:*` (updater uses npm, repo requires pnpm). |
| [#91223](https://github.com/openclaw/openclaw/issues/91223) | **P2 — Perf** | ❌ | Active memory injection breaks prompt cache hit rate (99.9% → 22%). |

### 🟡 Medium (P3 — UX / Enhancement)

| Issue | Summary |
|-------|---------|
| [#79902](https://github.com/openclaw/openclaw/issues/79902) | Add SQLite transcript/session seams for companion tools |
| [#6599](https://github.com/openclaw/openclaw/issues/6599) | `/models test-fallback` command to verify fallback chain |
| [#45758](https://github.com/openclaw/openclaw/issues/45758) | YAML config file format support |
| [#91455](https://github.com/openclaw/openclaw/issues/91455) | Kubernetes deployment docs improvement |
| [#66252](https://github.com/openclaw/openclaw/issues/66252) | Per-agent TTS/STT config overrides for multi-language |

---

## 6. Feature Requests & Roadmap Signals

### High-Signal Requests (Multiple 👍, Active Discussion)

| Feature | Issue | Signals | Likelihood for Next Version |
|---------|-------|---------|----------------------------|
| **Memory Trust Tagging by Source** | [#7707](https://github.com/openclaw/openclaw/issues/7707) | 53 comments, security-labeled, long-standing | 🟡 Medium — needs security review, product decision |
| **Subagent Completion Isolation** | [#96975](https://github.com/openclaw/openclaw/issues/96975) | 11 comments, diamond lobster rating | 🟢 High — aligns with current subagent stability push |
| **One-Way Dispatch for A2A Handoffs** | [#44309](https://github.com/openclaw/openclaw/issues/44309) | 9 comments, diamond lobster | 🟡 Medium — needs product decision |
| **Graceful Sub-Agent Timeout (Pre-warning)** | [#6625](https://github.com/openclaw/openclaw/issues/6625) | 7 comments, diamond lobster | 🟢 High — directly addresses #44925 data loss |
| **Built-in Pace-Aware Rate Limiting** | [#45771](https://github.com/openclaw/openclaw/issues/45771) | 7 comments, 2 👍, tidepool | 🟡 Medium — autonomous agent ops need |
| **SecretRef Docs Auto-Generation** | [#44289](https://github.com/openclaw/openclaw/issues/44289) | 7 comments, 1 👍, PR [#120138](https://github.com/openclaw/openclaw/pull/120138) open | 🟢 High — PR ready for maintainer |
| **Per-Agent TTS/STT Overrides** | [#66252](https://github.com/openclaw/openclaw/issues/66252) | 8 comments, 1 👍 | 🟡 Medium — multi-language deployments |

### Predicted Next-Version Candidates
1. **Subagent reliability fixes** (#44925, #80498, #90944, #50165) — multiple P1 data loss bugs
2. **Gateway sidecar independence** ([#124302](https://github.com/openclaw/openclaw/pull/124302)) — availability blocker
3. **Secret egress binding polish** — follow-up to today's release
4. **Prompt cache preservation for Claude CLI** ([#124300](https://github.com/openclaw/openclaw/pull/124300)) — 78% hit rate regression
5. **Dev-channel pnpm fix** ([#124322](https://github.com/openclaw/openclaw/pull/124322)) — blocks contributors

---

## 7. User Feedback Summary

### Real Pain Points (from issue descriptions)

| Area | User Voice | Frequency |
|------|------------|-----------|
| **Message reliability** | "Silent reply failures keep happening — monitoring cron logs new occurrences daily" ([#121058](https://github.com/openclaw/openclaw/issues/121058)) | 🔴 Critical |
| **Subagent trust** | "Subagents appear finished before work actually complete — task state unreliable for long-running jobs" ([#50165](https://github.com/openclaw/openclaw/issues/50165)) | 🔴 Critical |
| **Token waste** | "Bootstrap files re-injected every turn, wasting 20-30% tokens" ([#67419](https://github.com/openclaw/openclaw/issues/67419)) | 🟠 High |
| **Channel UX** | "Internal processing text leaks to Slack/iMessage as visible messages" ([#25592](https://github.com/openclaw/openclaw/issues/25592)) | 🟠 High |
| **Voice memory leaks** | "Realtime voice retains unbounded provider frames under bursty conditions" ([#116201](https://github.com/openclaw/openclaw/issues/116201)) | 🟠 High |
| **Windows dev experience** | "CLI commands remain alive as node.exe after execution; vitest teardown fails with EBUSY on SQLite" ([#74378](https://github.com/openclaw/openclaw/issues/74378), [#119796](https://github.com/openclaw/openclaw/issues/119796)) | 🟡 Medium |
| **Upgrade friction** | "sudo openclaw update creates mixed ownership; doctor then overwrites config after EACCES" ([#78

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: Personal AI Assistant / Agent Open-Source Ecosystem (2026-08-16)

---

## 1. Ecosystem Overview

The open-source personal AI agent landscape is **fragmented but highly active**, with 11 of 13 tracked projects showing meaningful development velocity. A clear bifurcation exists: **reference-grade platforms** (OpenClaw, ZeroClaw, Hermes Agent, IronClaw, NanoClaw) executing structured release cycles with deep architectural investment, and **specialized/derivative forks** (NanoBot, Moltis, CoPaw, LobsterAI, PicoClaw, NullClaw) targeting specific UX surfaces, channel integrations, or regional provider ecosystems. No dominant standard has emerged—interoperability efforts (OpenAI Chat Completions profile in ZeroClaw, ACP in CoPaw, provider unification in NanoBot/IronClaw) are nascent. Security hardening (secret egress, credential boundaries, supply-chain) and **session/message reliability** are universal preoccupations, reflecting production deployment pressure.

---

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Merged/Closed PRs | Release Today | Health Score* |
|---------|--------------|-----------|-------------------|---------------|---------------|
| **OpenClaw** | 500 | 500 | 55 | ✅ v2026.8.1-beta.2 | 🟢 **9/10** |
| **ZeroClaw** | 50 | 50 | 6 | ❌ | 🟢 **8/10** |
| **Hermes Agent** | 50 | 50 | 4 | ❌ | 🟢 **7/10** |
| **IronClaw** | 27 | 12 | 5 | ❌ | 🟢 **8/10** |
| **NanoClaw** | 0 | 22 | 3 | ❌ | 🟡 **7/10** |
| **Moltis** | 2 | 12 | 12 | ❌ | 🟢 **8/10** |
| **CoPaw (QwenPaw)** | 10 | 11 | 0 | ❌ | 🟡 **6/10** |
| **NanoBot** | 2 | 16 | 7 | ❌ | 🟢 **8/10** |
| **LobsterAI** | 2 active | 6 | 2 | ❌ | 🔴 **4/10** |
| **NullClaw** | 1 | 1 | 0 | ❌ | 🟡 **5/10** |
| **PicoClaw** | 0 | 0 | 0 | ❌ | 🔴 **3/10** |
| **TinyClaw** | 0 | 0 | 0 | ❌ | ⚫ **1/10** |
| **ZeptoClaw** | 0 | 0 | 0 | ❌ | ⚫ **1/10** |

*Health Score: Composite of velocity, release cadence, bug resolution, community engagement, architectural coherence (1-10).

**Key Observations:**
- **OpenClaw** is the only project shipping a release today; its 55 merged PRs dwarf all others combined.
- **ZeroClaw, Hermes, IronClaw** form a "high-velocity core" with 50+ issue/PR updates each but divergent release discipline.
- **NanoClaw, Moltis, NanoBot** demonstrate strong **internal execution** (high PR merge rates, low issue noise).
- **CoPaw, LobsterAI** show **community engagement without merge throughput**—review bottlenecks or triage gaps.
- **PicoClaw, TinyClaw, ZeptoClaw** are effectively dormant.

---

## 3. OpenClaw's Position

### Advantages vs. Peers
| Dimension | OpenClaw | Nearest Peers |
|-----------|----------|---------------|
| **Release Discipline** | Beta cycle with daily merges, explicit migration notes | ZeroClaw (RFC-gated), IronClaw (optimization sprint), NanoClaw (internal sprint) |
| **Security Posture** | Secret egress host binding (breaking change shipped today), install-policy acknowledgements | ZeroClaw (credential boundaries RFC), Moltis (zip/HF path traversal hardening), Hermes (approval attribution) |
| **Provider Velocity** | GPT-5.6 Ultra + runtime switching landed same day | NanoBot (OrcaRouter), ZeroClaw (Anthropic fallback stack), IronClaw (OMP coding tools) |
| **Scale of Operation** | 500 issues/PRs/day, 480 open issues, 445 open PRs | ZeroClaw (50/50), Hermes (50/50) — 10x smaller |

### Technical Approach Differences
- **Monolithic core with plugin/skill boundary** vs. ZeroClaw's **runtime-owned sessions + transport adapters**, IronClaw's **unbound-turns execution model**, NanoClaw's **channel-adapter architecture**.
- **Shared-store secret model with host allowlists** vs. NanoBot's **per-session FileStateStore**, Moltis's **vault recovery phrases**, ZeroClaw's **risk-profile allowed_tools**.
- **Gateway-centric message delivery** (SSE/HTTP) with sidecar independence work underway vs. Hermes's **desktop gateway reap/relaunch**, CoPaw's **Console WebUI polling**, LobsterAI's **IM Bot vs. Desktop divergence**.

### Community Size
- **Largest active contributor base** evidenced by PR throughput (55 merges/day) and issue volume.
- **Enterprise/production user signals**: Windows/CI compatibility fixes, MS Teams proactive send breakage, Kubernetes deployment docs requests—absent in smaller projects.
- **Downstream dependency**: LobsterAI, PicoClaw, NanoClaw (org rename to `openclaw`) directly consume OpenClaw artifacts.

---

## 4. Shared Technical Focus Areas

| Requirement | Projects | Specific Needs |
|-------------|----------|----------------|
| **Session/Message Reliability** | OpenClaw (#121058, #44925, #90944), Hermes (#82001, #69107), ZeroClaw (#9002, #9320), CoPaw (#7051), LobsterAI (#1849) | Silent reply loss, subagent completion loss, compression handoff gaps, dashboard disconnect survival, image persistence |
| **Secret/Credential Security** | OpenClaw (secret egress binding), ZeroClaw (#6971, #9753, #9995), Moltis (#1179, #1180), Hermes (#81048, #83565), NanoBot (#5369) | Host-bound egress, risk-profile empty-list fail-open, webhook audit scrubbing, node pairing signatures, plugin revalidation |
| **Provider Abstraction & Fallback** | OpenClaw (GPT-5.6 Ultra, runtime switch), ZeroClaw (Anthropic fallback stack), NanoBot (OrcaRouter, DashScope native), IronClaw (OMP coding tools), CoPaw (#6302), Hermes (#83379) | Dynamic model switching, server-side fallback detection, unified tool contracts, fake tool-call parsing |
| **Multi-Session / Cross-Session Context** | NanoBot (#5358, #5364, #5389), NanoClaw (#3257), ZeroClaw (#9487), OpenClaw (#79902), CoPaw (#7001) | Session collaboration/mentions, side conversations, context fan-out, runtime-owned sessions, Matrix per-sender isolation |
| **Memory Architecture** | OpenClaw (#7707 trust tagging, #67419 bootstrap waste), NanoBot (#5377 consolidation truncation), ZeroClaw (#9103 storage/enrichment split), Moltis (#1158 zvec/redb), LobsterAI (#2046) | Trust tagging by source, lossless consolidation, authoritative storage vs. connectors, vector backend pluggability, auto-consolidation |
| **Windows/macOS/Linux Install & Update Reliability** | OpenClaw (#74378, #119796), Hermes (#83569, #77394, #51327, #87129), CoPaw (#7057), LobsterAI (#1993, #2017) | CLI process leakage, cryptography .pyd locking, launchd spawn loops, Electron sandbox setuid, PATH for daemon envs |

---

## 5. Differentiation Analysis

| Project | Primary Focus | Target User | Architectural Signature |
|---------|---------------|-------------|-------------------------|
| **OpenClaw** | **Reference platform** — stability, security, provider breadth, enterprise readiness | Platform builders, enterprise deployers, downstream forks | Gateway + workers + shared-store secrets + plugin/skill marketplace |
| **ZeroClaw** | **Interoperability & protocol standards** — OpenAI API profile, runtime-owned sessions, unified attachments | Developers integrating agents into existing UIs (Open WebUI, Continue, Aider) | Transport adapters, chat completions profile, SOP capability contracts |
| **Hermes Agent** | **Desktop-first multi-platform messaging** — WeChat/QQ/Telegram/Discord gateway reliability | Power users needing unified messaging bridge + local agent | Electron desktop, launchd/Windows service management, god-file decomposition mandate |
| **IronClaw** | **Execution model optimization** — unbound turns, DB write reduction, deterministic automation | High-throughput agent operators, benchmark-driven teams | Prepared-context turns, coalesced thread indexes, trigger pruning, OMP coding tools |
| **NanoClaw** | **Channel infrastructure & delivery guarantees** — Telegram-first, multi-session agent groups | Teams running concurrent agent fleets on messaging platforms | Channel adapters, two-phase delivery, heartbeat stall fixes, DM backfill |
| **NanoBot** | **WebUI-centric multi-session workspace** — collaboration, side conversations, spatial org | Individual power users, researchers needing parallel task contexts | Session mentions, ephemeral side chats, drag-drop groups, reconnect-safe mutations |
| **Moltis** | **Connector & sandbox ecosystem** — CalDAV/Gmail/Slack/Coder, vector memory backends | Automation builders needing durable external integrations | Provider-neutral connectors, redb/zvec memory, Coder remote sandboxes, ClawHub skills |
| **CoPaw (QwenPaw)** | **Console UX & provider unification** — video/OAuth2 fixes, Matrix isolation, DataPaw runtime | Chinese-market users, Matrix/Enterprise WeChat adopters, plugin developers | ACP protocol, native DataPaw app, catalog-driven provider system |
| **LobsterAI** | **NetEase model integration + OpenClaw downstream** — auth, memory, Dreaming persistence | Chinese users of NetEase paid models, OpenClaw downstream consumers | Fork of OpenClaw with localized auth, memory-core dependency, skill-self-evolver |
| **NullClaw** | **Network accessibility & runtime hygiene** — proxy support, loop compression | Users behind corporate proxies, long-running local tool agents | HTTP/SOCKS5h proxy, prompt caching split, tool output compression |
| **PicoClaw** | **WhatsApp native channel maintenance** — whatsmeow version tracking | WhatsApp-dependent deployments | Minimal fork, single-channel focus, dependency-driven updates |

---

## 6. Community Momentum & Maturity

| Tier | Projects | Characteristics |
|------|----------|-----------------|
| **Rapidly Iterating (Pre-v1 / Beta)** | OpenClaw, ZeroClaw, Hermes Agent, NanoClaw, Moltis | Daily merges, RFC-driven design, breaking changes accepted, high issue churn, no semantic versioning stability |
| **Stabilizing / Optimization Sprint** | IronClaw, NanoBot | Performance-focused merges, low new feature PRs, systematic bug closure, release imminent feel |
| **Community-Driven / Review-Bottlenecked** | CoPaw, LobsterAI | Active issue filing, first-time contributor PRs, **zero merges today**, critical bugs unaddressed (auth, video, OAuth2) |
| **Maintenance / Dependency-Driven** | NullClaw, PicoClaw | Sporadic PRs for specific blockers (proxy, WhatsApp), no feature velocity |
| **Dormant** | TinyClaw, ZeptoClaw | No GitHub activity in 24h+ |

**Maturity Signals:**
- **OpenClaw** alone demonstrates **sustainable beta velocity** (releases + merges + migration docs).
- **ZeroClaw** shows **architectural maturity** via RFC governance (10+ concurrent RFCs, maintainer decision queue tracking).
- **IronClaw** exhibits **engineering discipline**—50% DB write reduction via measurable optimizations, conformance audits.
- **LobsterAI/CoPaw** risk **community trust erosion**—stale closures on security/auth bugs without resolution.

---

## 7. Trend Signals for AI Agent Developers

| Trend | Evidence Across Projects | Strategic Implication |
|-------|-------------------------|----------------------|
| **Protocol Standardization over Proprietary APIs** | ZeroClaw (OpenAI Chat Completions), CoPaw (ACP), NanoBot (OrcaRouter), OpenClaw (provider switching) | **Build to standard interfaces**; expect OpenAI-compatible surface to become baseline for agent interoperability. |
| **Session Ownership Moving to Runtime** | ZeroClaw (RFC #9487), NanoClaw (cross-session fan-out), NanoBot (session collaboration), OpenClaw (Gateway bundles) | **Decouple conversation lifecycle from transport**; design for multi-client, durable, migratable sessions. |
| **Security as a Product Feature, Not Afterthought** | OpenClaw (secret egress binding), ZeroClaw (credential boundaries), Moltis (path traversal), Hermes (approval attribution) | **Invest in supply-chain, credential isolation, audit trails**—enterprise adoption requires it. |
| **Memory Architecture Converging on Storage/Enrichment Split** | ZeroClaw (#9103), Moltis (#1158 zvec/redb), OpenClaw (#7707 trust tagging), NanoBot (consolidation fixes) | **Separate authoritative storage from vector enrichment**; pluggable backends (redb, Qdrant, pgvector) will be expected. |
| **Channel Adapters as First-Class Extension Points** | NanoClaw (Telegram), Moltis (CalDAV/Gmail/Slack/Coder), Hermes (WeChat/QQ/Telegram), CoPaw (Matrix) | **Design channel-agnostic cores**; messaging platforms are delivery substrates, not architectural centers. |
| **Subagent/Tool Reliability is the Next Quality Frontier** | OpenClaw (#44925, #80498, #90944), ZeroClaw (SOP capabilities), IronClaw (OMP tools), NanoBot (cron resilience) | **Invest in completion guarantees, timeout handling, result delivery**—silent data loss is the #1 production blocker. |
| **Desktop/Install Reliability Remains Unsolved** | OpenClaw (Windows), Hermes (Win/macOS/Linux), CoPaw (PATH), LobsterAI (Desktop vs. Bot) | **Cross-platform agent distribution needs dedicated effort**—Electron sandbox, updater locking, daemon PATH are shared pain. |
| **Chinese-Market Forks Creating Parallel Ecosystem** | LobsterAI (NetEase), CoPaw (Qwen/Volcengine), Pico

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-08-16

## 1. Today's Overview
NanoBot shows **high development velocity** with 16 PRs updated and 2 issues touched in the last 24 hours. The project is actively addressing both **core stability bugs** (consolidation truncation, stale background task saves, cron scheduler resilience) and **WebUI UX enhancements** (session collaboration, side conversations, drag-and-drop organization). Seven PRs were merged/closed today, indicating steady delivery cadence. No new releases were cut, suggesting changes are accumulating for a future batch release. Overall project health appears strong with balanced focus on reliability and feature expansion.

## 2. Releases
**No new releases** published today. The 7 merged PRs (see Project Progress) will likely be bundled in the next version.

---

## 3. Project Progress — Merged/Closed PRs Today

| PR | Type | Summary | Impact |
|----|------|---------|--------|
| [#5328](https://github.com/HKUDS/nanobot/pull/5328) | **Feature** | Add **OrcaRouter** as named gateway provider (150+ models, single endpoint, zero-trust security) | Expands provider ecosystem; enterprise-ready routing |
| [#5371](https://github.com/HKUDS/nanobot/pull/5371) | **Bug Fix (WebUI)** | Hide assistant copy/fork actions until `turn_end` received | Fixes conflicting completion signals during generation |
| [#5369](https://github.com/HKUDS/nanobot/pull/5369) | **Security + Bug Fix** | Revalidate cached skill roots after package changes | Prevents stale plugin reads after in-place replacement |
| [#5370](https://github.com/HKUDS/nanobot/pull/5370) | **Bug Fix + Performance** | Bound per-session `FileStateStore` lifecycle | Fixes unbounded memory growth from high-cardinality sessions |
| [#5376](https://github.com/HKUDS/nanobot/pull/5376) | **Bug Fix** | Keep cron scheduler alive when job-store persistence fails | Prevents silent scheduler death on disk/permission errors |
| [#5399](https://github.com/HKUDS/nanobot/pull/5399) | **UX Fix (WebUI)** | Clarify model preset display names vs. stable command names | Reduces confusion when renaming presets |
| [#5397](https://github.com/HKUDS/nanobot/pull/5397) | **UX Fix (WebUI)** | Preserve range selection & turn timing in sidebar | Improves bulk-delete UX and turn identity consistency |

**Key advances:** Provider expansion (OrcaRouter), WebUI turn-state consistency, plugin security hardening, memory leak prevention, cron resilience.

---

## 4. Community Hot Topics

| Item | Activity | Underlying Need |
|------|----------|-----------------|
| [#5358](https://github.com/HKUDS/nanobot/pull/5358) **feat(webui): session collaboration via mentions** | Open 4 days, updated today | **Multi-user/session workflows** — users want to reference & share context across sessions without exposing raw keys |
| [#5364](https://github.com/HKUDS/nanobot/pull/5364) **feat(webui): temporary side conversations** | Open 3 days, updated today, **conflict** flag | **Parallel task handling** — need isolated scratchpads alongside main conversation |
| [#5389](https://github.com/HKUDS/nanobot/pull/5389) **feat(webui): drag-and-drop session organization** | Open 2 days, updated today, **conflict** flag | **Session management at scale** — users accumulating many sessions need spatial organization |
| [#5377](https://github.com/HKUDS/nanobot/issues/5377) **Bug: consolidation truncates archive input** | 2 comments, opened 3 days ago | **Data integrity** — silent message loss during consolidation is a correctness blocker |

**Signal:** WebUI is evolving from single-session chat → **multi-session workspace** with collaboration, side threads, and spatial organization. The consolidation bug (#5377) is the only open issue with discussion, marking it as a **community-validated priority**.

---

## 5. Bugs & Stability — Ranked by Severity

| Severity | Issue / PR | Status | Fix PR |
|----------|------------|--------|--------|
| **P0 (Critical)** | [#5377](https://github.com/HKUDS/nanobot/issues/5377) Consolidation truncates archive but advances `last_consolidated` past full batch → **silent message loss** | Open | [#5379](https://github.com/HKUDS/nanobot/pull/5379) (open, lossless chunking) |
| **P0 (Critical)** | [#5271](https://github.com/HKUDS/nanobot/pull/5271) Stale background task saves overwrite session after `/new` | Open (conflict) | PR open, needs rebase/resolution |
| **P2 (High)** | [#5369](https://github.com/HKUDS/nanobot/pull/5369) Cached plugin skill dirs not revalidated after package change → **security bypass** | **Merged** | Fixed in #5369 |
| **P2 (High)** | [#5370](https://github.com/HKUDS/nanobot/pull/5370) `FileStateStore` unbounded growth + survives lifecycle boundaries | **Merged** | Fixed in #5370 |
| **P2 (High)** | [#5376](https://github.com/HKUDS/nanobot/pull/5376) Cron scheduler dies silently on persistence error | **Merged** | Fixed in #5376 |
| **P2** | [#5368](https://github.com/HKUDS/nanobot/issues/5368) WebUI shows copy/fork during active turn → conflicting signals | **Closed** | Fixed in [#5371](https://github.com/HKUDS/nanobot/pull/5371) |

**Note:** The two P0 items (#5377, #5271) are **open with fix PRs in progress** — maintainers should prioritize review.

---

## 6. Feature Requests & Roadmap Signals

| Feature | Evidence | Likelihood for Next Release |
|---------|----------|----------------------------|
| **Session collaboration / mentions** | PR [#5358](https://github.com/HKUDS/nanobot/pull/5358) — stable `@name` identity, mention picker, peer sessions | High — core infrastructure, active development |
| **Side conversations (ephemeral tabs)** | PR [#5364](https://github.com/HKUDS/nanobot/pull/5364) — `/side` command, parallel composers | High — UX parity with modern AI interfaces |
| **Drag-and-drop session organization** | PR [#5389](https://github.com/HKUDS/nanobot/pull/5389) — groups, reorder, create group by drop | Medium — conflict flag suggests merge complexity |
| **Unified model preset names** | PR [#5400](https://github.com/HKUDS/nanobot/pull/5400) — canonical keys across config/WebUI/commands | High — foundational for provider UX |
| **DashScope native protocol** | PR [#5398](https://github.com/HKUDS/nanobot/pull/5398) — native thinking budget, tool calling | Medium — provider-specific, but expands China-market support |
| **Reconnect-safe WebUI mutations** | PR [#5401](https://github.com/HKUDS/nanobot/pull/5401) — retry with original request ID, replay cache | High — reliability for flaky networks |

**Prediction:** Next release will likely ship **session collaboration**, **side conversations**, **preset unification**, and **reconnect safety** — all WebUI-centric. Provider additions (OrcaRouter merged, DashScope native pending) continue steadily.

---

## 7. User Feedback Summary

| Pain Point / Use Case | Source | Sentiment |
|-----------------------|--------|-----------|
| **"Copy/fork buttons appear while agent still generating — confusing"** | Issue [#5368](https://github.com/HKUDS/nanobot/issues/5368) | 😠 Frustration — fixed in #5371 |
| **"Subagent conversations vanish after completion — no audit trail"** | PR [#5291](https://github.com/HKUDS/nanobot/pull/5291) | 😐 Gap — fix in progress (persist transcripts) |
| **"Need to reference other sessions without sharing keys"** | PR [#5358](https://github.com/HKUDS/nanobot/pull/5358) | 💡 Feature request — active development |
| **"Want scratchpad conversations alongside main thread"** | PR [#5364](https://github.com/HKUDS/nanobot/pull/5364) | 💡 Feature request — active development |
| **"Too many sessions, hard to organize"** | PR [#5389](https://github.com/HKUDS/nanobot/pull/5389) | 😐 Scaling pain — active development |
| **"Consolidation silently drops messages"** | Issue [#5377](https://github.com/HKUDS/nanobot/issues/5377) | 😱 Data loss — fix in progress (#5379) |

**Overall:** Users are pushing NanoBot toward **multi-session, collaborative workflows** while core memory/consolidation reliability remains a trust concern.

---

## 8. Backlog Watch — Items Needing Maintainer Attention

| Item | Stale Since | Why It Matters |
|------|-------------|----------------|
| [#5271](https://github.com/HKUDS/nanobot/pull/5271) **fix(session): prevent stale background task saves** | 2026-08-06 (10 days) | **P0 conflict** — blocks `/new` safety; needs rebase/conflict resolution |
| [#5291](https://github.com/HKUDS/nanobot/pull/5291) **fix(agent): persist subagent conversation transcripts** | 2026-08-07 (9 days) | **Observability gap** — subagents are black boxes today |
| [#5358](https://github.com/HKUDS/nanobot/pull/5358) **feat(webui): session collaboration via mentions** | 2026-08-12 (4 days) | **Major UX feature** — cross-session workflows; large scope needs review bandwidth |
| [#5364](https://github.com/HKUDS/nanobot/pull/5364) **feat(webui): temporary side conversations** | 2026-08-13 (3 days) | **Conflict flag** — architectural implications for session model |
| [#5379](https://github.com/HKUDS/nanobot/pull/5379) **fix(memory): preserve full consolidation input** | 2026-08-13 (3 days) | **Direct fix for #5377 (P0 data loss)** — should be fast-tracked |
| [#5389](https://github.com/HKUDS/nanobot/pull/5389) **feat(webui): drag-and-drop session organization** | 2026-08-14 (2 days) | **Conflict flag** — interacts with #5358, #5364 session model changes |

**Recommendation:** Prioritize review of **#5379 (consolidation fix)** and **#5271 (session safety)** as they address critical correctness. Then batch-review the WebUI session-model PRs (#5358, #5364, #5389) together since they share architectural surface.

---

*Digest generated from GitHub API data for HKUDS/nanobot on 2026-08-16. All links point to live GitHub items.*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-08-16

## 1. Today's Overview

Hermes Agent shows **high velocity with zero releases** — 50 issues and 50 PRs updated in the last 24 hours, but no new version shipped. The project is in a heavy refactoring and stabilization phase: a major "god-file decomposition" epic (#78647) just closed after 20/20 files sharded, while Windows update failures (#83569, #77394, #75584), gateway restart regressions (#83683, #87295), and session-memory gaps (#8457, #82001) dominate the open bug queue. Four PRs merged/closed today, mostly infrastructure fixes (launchd propagation, config validation, test flake elimination). Community engagement is strong on platform-specific bugs (Windows, macOS launchd, Telegram, Discord) and security-hardening items.

## 2. Releases

**No new releases today.** The last release remains v0.20.1 (per issue #87329 reference). Given the volume of open P1/P2 bugs on update/install paths and gateway stability, a patch release (v0.20.2) is likely imminent once the Windows `cryptography._rust.pyd` lock fix (#84409) and launchd spawn-loop fix (#87129) land.

## 3. Project Progress — Merged/Closed Today

| PR / Issue | Type | Summary | Link |
|------------|------|---------|------|
| #78647 | Epic/Refactor | **CLOSED** — Large-file decomposition: 20/20 god-files sharded into clean modules. Standing policy: "all god files are sharded, never reverted." | [#78647](https://github.com/NousResearch/hermes-agent/issues/78647) |
| #83683 | Bug (P1) | **CLOSED** — Desktop restart reaps live gateway but never relaunches it (WeChat/QQ/Telegram go silent). Regression in 0.20.0. | [#83683](https://github.com/NousResearch/hermes-agent/issues/83683) |
| #82001 | Bug (P1) | **CLOSED** — Agent flush doesn't adopt live continuation after compression; turns die with misleading "full disk" dialog. Session-identity handoff gap fixed. | [#82001](https://github.com/NousResearch/hermes-agent/issues/82001) |
| #50530 | Bug (P3) | **CLOSED** — google-antigravity (Gemini) legacy integration issues: sub-agent crashes, concurrent disconnects, 400 errors. Marked cannot-reproduce. | [#50530](https://github.com/NousResearch/hermes-agent/issues/50530) |
| #83569 | Bug (P1) | **CLOSED** — Windows `hermes update` self-locks `cryptography._rust.pyd`; updater process holds `.pyd` mapped. | [#83569](https://github.com/NousResearch/hermes-agent/issues/83569) |
| #69107 | Bug (P2) | **CLOSED** — TUI `prompt.submit` truncate rejects valid ordinals when another client wrote to session (stale in-memory history). | [#69107](https://github.com/NousResearch/hermes-agent/issues/69107) |
| #83569 | Bug (P1) | **CLOSED** — Duplicate entry for Windows update self-lock. | [#83569](https://github.com/NousResearch/hermes-agent/issues/83569) |
| #70031 | Bug (P2) | **CLOSED** — TUI/CLI status lines repeat mid-turn with `streaming=false`. Needs-repro, closed. | [#70031](https://github.com/NousResearch/hermes-agent/issues/70031) |
| #87129 | Bug (P2) | **MERGED** — Fix launchd infinite spawn→refuse→respawn loop on macOS by propagating supervisor marker through `stderr_timestamp` wrapper. | [#87129](https://github.com/NousResearch/hermes-agent/pull/87129) |
| #87337 | Test | **OPEN** — Deterministic worker start kills sequential-timeout flake in `test_sequential_tool_timeout`. | [#87337](https://github.com/NousResearch/hermes-agent/pull/87337) |
| #87334 | Bug (P2) | **OPEN** — Enforce read-only config check at shared `config.yaml` write chokepoint. | [#87334](https://github.com/NousResearch/hermes-agent/pull/87334) |

> **Note:** Only 4 PRs show as merged/closed in the 24h window; most "closed" items above are issues closed by PRs not in the top-20 PR list.

## 4. Community Hot Topics — Most Active Issues/PRs

| Item | Comments | Type | Core Need / Signal |
|------|----------|------|---------------------|
| **#78647** God-file decomposition epic | 79 | Refactor (Closed) | **Architectural hygiene** — Team completed a repo-wide sharding mandate. Signals strong internal discipline; external contributors should expect modular, small-file PRs. |
| **#66616** Skills index stale/degraded | 37 | Bug (Automated) | **Documentation freshness** — Cron job (`skills-index.yml`) runs 6/18 UTC but index is 29.8h old (limit 26h). Docs site `/docs/skills` depends on `/docs/api/skills-index.json`. |
| **#83683** Desktop restart kills gateway (P1) | 32 | Bug (Closed) | **Windows desktop reliability** — Every restart force-kills messaging gateway (WeChat/QQ/Telegram) and never relaunches. Regression in 0.20.0. |
| **#8457** Persistent session memory + cross-session search | 21 | Feature (Open) | **Long-term memory** — Users want session context to survive gateway restarts, with auto-compression and cross-session search. High engagement since April. |
| **#82001** Agent flush loses continuation after compression (P1) | 19 | Bug (Closed) | **Compression reliability** — Session-identity handoff gap causes misleading "full disk" errors. Fixed but reveals fragile compression pipeline. |
| **#51327** Linux `.desktop` launcher silent fail (P1) | 9 | Bug (Open) | **Linux install UX** — Electron `chrome-sandbox` lacks setuid 4755; app aborts silently. Affects all `.desktop` launches. |
| **#81048** Approval timeout misattributed as user denial (P2, Security) | 8 | Bug (Open) | **Security semantics** — Timeout → `deny` surfaces as "User denied this command" with no human action. Red-decision semantics violated. |
| **#79564** Discord feature parity meta-issue (API v10) | 6 | Feature (Open) | **Platform completeness** — Campaign to align Discord surface with discord.py 2.7.1 / REST v10. Tracks multiple sub-issues/PRs. |
| **#82591** Kanban zero-authority workers tracker | 5 | Feature (Open) | **Plugin/worker architecture** — Durable publication, safe reclaim, large-file eradication. Part 1 of 3 implementation plan. |
| **#83379** Models write fake tool invocations as text (P2) | 4 | Bug (Open) | **Provider compliance** — Some models (esp. Qwen) emit XML/JSON prose instead of structured `tool_calls`. Need robust parsing/fallback. |

**Underlying themes:**  
- **Platform-specific reliability** (Windows update, macOS launchd, Linux sandbox, Telegram/WeChat/QQ gateways)  
- **Session/memory continuity** (compression handoff, cross-session persistence, TUI stale history)  
- **Security-decision integrity** (approval attribution, credential leakage to child processes)  
- **Architectural cleanup** (god-file sharding, config validation, test determinism)

## 5. Bugs & Stability — Ranked by Severity

### P1 — Critical (Data loss, Security, Complete Failure)
| Issue | Component | Status | Fix PR? |
|-------|-----------|--------|---------|
| **#87183** CLI approval panel never renders — `HERMES_EXEC_ASK=1` env leak hijacks approvals into gateway path with no `notify_cb` | CLI, Gateway, Auth | **Open** (2026-08-15) | No |
| **#83683** Desktop restart reaps gateway, never relaunches (WeChat/QQ/Telegram silent) | Desktop, Gateway, Windows | **Closed** | Likely via #84409 |
| **#82001** Agent flush loses live continuation after compression → misleading "full disk" | Agent, Gateway, Sessions | **Closed** | Yes (implied) |
| **#83569** Windows `hermes update` self-locks `cryptography._rust.pyd` (updater holds `.pyd`) | CLI, Update, Windows | **Closed** | #84409 (open) |
| **#51327** Linux `.desktop` launcher silent fail — Electron `chrome-sandbox` not setuid 4755 | CLI, Desktop, Linux | **Open** | No |
| **#87295** Second Desktop launch silently kills running backend, breaks connection | Desktop | **Open** (2026-08-15) | No |

### P2 — High (Functionality Broken, Security Semantics)
| Issue | Component | Status | Fix PR? |
|-------|-----------|--------|---------|
| **#81048** Approval timeout misattributed as explicit user denial (Tier 1 security) | CLI, Auth | **Open** | No |
| **#49543** OAuth MCP servers (Honeycomb) drop mid-session — `RuntimeError: lock not held` + 120s hangs | Tools, MCP, Auth | **Open** | No |
| **#87329** `hermes mcp login` OAuth callback port collision on headless host (v0.20.1) | CLI, MCP, Auth | **Open** (2026-08-16) | No |
| **#87292** Timeout with slow local models (>16 TPS) — WinError 10053 / provider unresponsive | Agent, Local, Streaming | **Open** (2026-08-15) | No |
| **#85315** `auxiliary.free_only` gate rejects explicit `:free` models, misreports as payment error | Agent, OpenRouter, Config | **Open** | No |
| **#66746** Telegram rich messages parse bare `$` as inline LaTeX, garbles financial figures | Gateway, Telegram | **Open** | No |
| **#77394** Windows update still fails — paused gateway keeps `_rust.pyd` locked (fix #73684 incomplete) | CLI, Update, Windows | **Open** | #84409 (partial) |
| **#75584** Windows update fails after interrupted install — `hermes.exe` missing + `ENOTEMPTY` | CLI, Desktop, Update, Windows | **Open** | No |
| **#70694** Gateway drops semantic turn finality & logical delivery identity at platform-adapter boundary | Gateway, Message Delivery | **Open** | No |
| **#83379** Models write fake tool invocations as text (XML/JSON prose) instead of `tool_calls` | Agent, Qwen | **Open** | No |

### P3 — Medium (Usability, Features, Non-blocking)
| Issue | Component | Status |
|-------|-----------|--------|
| **#66616** Skills index stale (29.8h > 26h limit) | Docs, Skills | Open |
| **#8457** Persistent session memory with cross-session search & auto-compression | Agent, Memory | Open |
| **#79564** Discord feature parity (API v10) meta-issue | Gateway, Discord | Open |
| **#82591** Kanban zero-authority workers tracker | Cron, Plugins | Open |
| **#83565** Child-process credential-inheritance closure (campaign) | Tools, Auth | Open |
| **#84350** `hermes kanban show` crashes: `Cannot operate on a closed database` | Cron | Open |
| **#73890** Desktop Artifacts/Preview leak context across Projects | Desktop, Sessions | Open |
| **#40306** Auto reasoning mode (ChatGPT-style) | Feature | Open |
| **#86986** Termux: make native pkg install first-class Android path | CLI, Install, Android | Open |
| **#87093** Debian install broken: `uv.lock` & `npm install` failed | CLI, Install | Open |

> **Fix PRs tracking:** #84409 (Windows update escape via schtasks), #87129 (launchd marker propagation, merged), #87334 (config read-only check), #87337 (test flake fix), #87338 (Electron 41.10.3 + nanoid pin).

## 6. Feature Requests & Roadmap Signals

| Feature | Source | Signals | Likelihood Next Version |
|---------|--------|---------|-------------------------|
| **Persistent session memory + cross-session search + auto-compression** | #8457 (21 comments, open since Apr) | High user demand; "survive gateway restarts without re-prompting"; compression recall eval harness just added in #87326 | **High** — eval harness (#87326) suggests active work; `tail_mode="lean"` shows +22.5pts recall at 0.30x tokens |
| **Discord API v10 full parity** | #79564 (meta-issue, 6 comments) | Campaign structure with sub-issues; discord.py 2.7.1 verified in-tree | **Medium** — ongoing campaign, not blocked |
| **Auto reasoning mode (ChatGPT-style)** | #40306 (2 comments) | `reasoning_effort: auto` to detect think vs respond | **Low** — no active PR, low engagement |
| **Termux native pkg install as first-class Android path** | #86986 (2 comments, new) | Distribution-level fix for rolling Termux env | **Medium** — installer pain point, PR #87339 addresses version crash |
| **Kanban zero-authority workers + durable publication** | #82591 (5 comments, tracker) | 3-part plan posted; Part 1 complete | **Medium** — architectural, multi-PR |
| **Child-process credential-inheritance closure** | #83565 (3 comments, campaign) | Security campaign anchored by #77027 | **High** — security-critical, multiple PRs linked |
| **URL toolbar for in-app browser preview** | #87332 (PR, new) | Desktop UX gap after layout rewrite | **High** — PR open, straightforward |
| **Sender avatar + full body on inter-agent message cards** | #87341 (PR, new) | Desktop UX fix for #87212 | **High** — PR open, UI polish |

**Predicted next version (v0.20.2/v0.21.0) focus:**  
1. **Windows/macOS/Linux update & launch stability** (P1 blockers)  
2. **Session continuity & compression reliability** (eval harness + lean tail mode)  
3. **Security-decision integrity** (approval attribution, credential leakage)  
4. **Desktop UX polish** (avatar cards, URL toolbar, second-launch fix)  
5. **Termux/Debian install fixes** (version crash, npm/uv failures)

## 7. User Feedback Summary — Real Pain Points

| Pain Point | Evidence | User Impact |
|------------|----------|-------------|
| **Windows updates consistently fail** | #83569, #77394, #75584, #84409 — multiple users, 100% repro on `cryptography` bump | Cannot update; manual workarounds required; gateway process locking |
| **Desktop app restarts kill messaging gateways** | #83683 (32 comments), #87295 (new) | WeChat/QQ/Telegram go silent; manual gateway restart needed daily |
| **Session context lost on restart/compression** | #8457

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-08-16

---

## 1. Today's Overview
PicoClaw shows **very low recent activity** with zero issues or merged PRs in the past 24 hours. Only two pull requests remain open—both authored by `grrowl` on 2026-08-07 and last updated 2026-08-15—and both carry the `stale` label, indicating they have not received maintainer attention for over a week. No new releases have been published. The project appears to be in a **maintenance lull**, with critical dependency and performance fixes pending review.

---

## 2. Releases
**No new releases** in the last 24 hours. The latest published version remains whatever was shipped prior to this period. Users should continue on the current stable release; no migration steps are required.

---

## 3. Project Progress
**No PRs were merged or closed today.** The two open PRs represent the only recent movement:
- **#3321** – Reorders dynamic context blocks (time, runtime, session, sender) to appear *after* conversation history, enabling prefix-caching efficiency for LLM calls.
- **#3320** – Bumps `go.mau.fi/whatsmeow` to resolve a hard blocker where WhatsApp rejects connections with `Client outdated (405)` after ~5 seconds.

Neither has been reviewed or merged, so no user-facing features or fixes have landed today.

---

## 4. Community Hot Topics
| PR | Title | Author | Updated | 👍 | Comments | Link |
|----|-------|--------|---------|-----|----------|------|
| #3320 | `fix(deps): bump whatsmeow to unblock WhatsApp "client outdated (405)"` | grrowl | 2026-08-15 | 0 | 0 | [sipeed/picoclaw#3320](https://github.com/sipeed/picoclaw/pull/3320) |
| #3321 | `fix(agent): move dynamic context after history to preserve prefix caching` | grrowl | 2026-08-15 | 0 | 0 | [sipeed/picoclaw#3321](https://github.com/sipeed/picoclaw/pull/3321) |

**Analysis**:  
- **#3320** addresses a **complete outage of the native WhatsApp channel**—a production-blocking regression caused by upstream WhatsApp version enforcement. Zero community discussion suggests limited visibility; maintainers should prioritize this.  
- **#3321** is a **performance optimization** for LLM token usage. While not urgent, it reduces latency/cost for every agent call and should be low-effort to validate.

---

## 5. Bugs & Stability
| Severity | Issue | Status | Fix PR |
|----------|-------|--------|--------|
| **Critical** | WhatsApp native channel fails to connect (405 Client outdated) | Open, unassigned | [#3320](https://github.com/sipeed/picoclaw/pull/3320) |
| **Medium** | Suboptimal prefix caching increases token usage & latency | Open, unassigned | [#3321](https://github.com/sipeed/picoclaw/pull/3321) |

No new crashes or regressions reported today. The WhatsApp bug is the only user-visible breakage.

---

## 6. Feature Requests & Roadmap Signals
No new feature requests or issues filed in the last 24 hours. The two open PRs hint at near-term priorities:
1. **WhatsApp compatibility maintenance** – ongoing cat-and-mouse with WhatsApp’s client-version checks; expect periodic `whatsmeow` bumps.
2. **LLM cost/latency optimization** – prefix-caching awareness suggests the team is tuning for production-scale agent workloads.

If maintainers merge these, the next patch release will likely be a **stability + efficiency** drop rather than a feature release.

---

## 7. User Feedback Summary
**No direct user feedback (issues, discussions, reactions) captured today.**  
Indirect signals:
- The WhatsApp breakage (#3320) would affect *every* user relying on the native WA channel—likely high dissatisfaction until fixed.
- Zero comments on either PR suggests either low community engagement or that users are unaware of the pending fixes.

---

## 8. Backlog Watch
| Item | Type | Age | Why It Matters | Link |
|------|------|-----|----------------|------|
| #3320 | PR | 9 days | **Production blocker**: WhatsApp channel completely non-functional. Requires urgent maintainer review/merge. | [#3320](https://github.com/sipeed/picoclaw/pull/3320) |
| #3321 | PR | 9 days | **Performance debt**: Every agent request wastes tokens/latency. Low risk, high ROI. | [#3321](https://github.com/sipeed/picoclaw/pull/3321) |

**Recommendation**: Maintainers should triage and merge #3320 immediately, then #3321. Consider tagging a patch release (e.g., `vX.Y.Z+1`) once both land to unblock users.

---

*Digest generated from GitHub data as of 2026-08-16. Links point to live GitHub items.*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-08-16

## 1. Today's Overview
NanoClaw shows **intense development velocity** with 22 PRs updated in the last 24 hours (19 open, 3 closed), but **zero issue activity** — indicating work is driven by internal roadmap execution rather than external bug reports. The PR batch is heavily oriented toward **channel infrastructure, delivery guarantees, and agent-container stability**, with a major theme of hardening Telegram as a first-class channel (replacing the legacy WhatsApp integration). No new releases were cut today.

## 2. Releases
**No new releases** published today. The project appears to be in a rapid feature/fix accumulation phase ahead of a likely version bump.

## 3. Project Progress — Merged/Closed PRs Today
| PR | Title | Type | Summary |
|----|-------|------|---------|
| [#3268](https://github.com/nanocoai/nanoclaw/pull/3268) | `fix(poll-loop): stopped loops leaked their active query's follow-up poller` | **Bug fix (core)** | Fixed a resource leak where aborted poll loops left their active query stream and a 500 ms follow-up poller running, causing duplicate work and memory growth. |
| [#37](https://github.com/nanocoai/nanoclaw/pull/37) | `Rename to DotClaw and switch from WhatsApp to Telegram` | **Major refactor (closed)** | Repository-wide rename `nanoclaw → dotclaw`; WhatsApp removed, Telegram bot (Telegraf) added; launchd plist, setup scripts, and test group introduced. Closed after 6+ months — likely superseded by the newer Telegram work in #3269. |
| *[Third closed PR not explicitly listed in top-20]* | — | — | Data indicates 3 total closed/merged; the third may be a minor cleanup merged outside the comment-ranked view. |

## 4. Community Hot Topics
**No GitHub Issues were updated today**, so community discussion is absent from the issue tracker. All visible activity is in PRs, nearly all authored by **core-team members** (`gavrielc`, `rudysmets7-strid`, `chiptoe-svg`, `DawoudIO`, `simonechecchia`). This suggests a **tightly coordinated internal sprint** rather than community-driven debate.

The highest-signal PRs (by scope) are:
- **[#3269](https://github.com/nanocoai/nanoclaw/pull/3269)** — Telegram channel adapter (`@chat-adapter/telegram`), pairing flow, Markdown sanitizer; 1,483 tests pass, clean build. *This is the flagship channel integration for the cycle.*
- **[#3257](https://github.com/nanocoai/nanoclaw/pull/3257)** — Cross-session context fan-out, DM backfill, echo pruning, new `ncl sessions history` CLI. *Enables multi-session agent groups.*
- **[#3251](https://github.com/nanocoai/nanoclaw/pull/3251)** — Heartbeat stall fix during Claude API rate-limiting (prevents false stale-container kills). *Critical for production reliability.*

## 5. Bugs & Stability — Today’s Reports & Fixes
| Severity | PR | Bug | Fix Status |
|----------|-----|-----|------------|
| **Critical** | [#3251](https://github.com/nanocoai/nanoclaw/pull/3251) | Heartbeat stops during rate-limiting → container falsely marked stale → killed | **Fix PR open** (touches `agent-runner`) |
| **High** | [#3268](https://github.com/nanocoai/nanoclaw/pull/3268) | Stopped poll loops leak query stream + follow-up poller | **Merged/Closed** |
| **High** | [#3255](https://github.com/nanocoai/nanoclaw/pull/3255) | Outbound delivery picks wrong channel row when multiple adapter instances share `(channel_type, platform_id)` | **Fix PR open** |
| **Medium** | [#3250](https://github.com/nanocoai/nanoclaw/pull/3250) | Telegram legacy-Markdown sanitizer downgrades `**bold**` → `_italic_` | **Fix PR open** (remove sanitizer) |
| **Medium** | [#2752](https://github.com/nanocoai/nanoclaw/pull/2752) | Discord inbound attachments (text/images) never reach agent — only `[file: …]` placeholder | **Fix PR open** (staged since 2026-06-12) |
| **Medium** | [#3252](https://github.com/nanocoai/nanoclaw/pull/3252) | Idle container without `.heartbeat` file exempt from absolute-ceiling kill *forever* | **Fix PR open** (adjusts `decideStuckAction`) |
| **Low** | [#3259](https://github.com/nanocoai/nanoclaw/pull/3259) | Skill-apply step numbers wrong when headings contain ordinals (`2.`, `2)`) | **Fix PR open** (strips leading ordinal) |

## 6. Feature Requests & Roadmap Signals
The open PR cluster reveals a **cohesive next-version theme**: *“Make channels, delivery, and multi-session context bulletproof.”* Likely candidates for the next release:

| Area | PR(s) | Signal |
|------|-------|--------|
| **Telegram as primary channel** | [#3269](https://github.com/nanocoai/nanoclaw/pull/3269), [#3250](https://github.com/nanocoai/nanoclaw/pull/3250), [#3261](https://github.com/nanocoai/nanoclaw/pull/3261) | Adapter + capabilities (typing status, thread title, suggested prompts) + sanitizer cleanup |
| **Delivery reliability & observability** | [#3264](https://github.com/nanocoai/nanoclaw/pull/3264) (batch preview hook), [#3254](https://github.com/nanocoai/nanoclaw/pull/3254) (two-phase batch selection), [#3255](https://github.com/nanocoai/nanoclaw/pull/3255) (correct sender resolution) | Prevents context crowding out tasks; enables prefetching |
| **Multi-session / agent-group context** | [#3257](https://github.com/nanocoai/nanoclaw/pull/3257) (fan-out, backfill, `ncl sessions history`), [#3263](https://github.com/nanocoai/nanoclaw/pull/3263) (hot-start adapter), [#3262](https://github.com/nanocoai/nanoclaw/pull/3262) (DM thread normalization) | Foundation for concurrent agent teams |
| **Permissions UX** | [#3260](https://github.com/nanocoai/nanoclaw/pull/3260) (`decline_notify` policy), [#3266](https://github.com/nanocoai/nanoclaw/pull/3266) (interceptor seam) | Reduces admin interruption for unknown senders |
| **Agent-to-agent control** | [#3265](https://github.com/nanocoai/nanoclaw/pull/3265) (`suppressCreatedNotify`) | Cleaner programmatic agent spawning |

## 7. User Feedback Summary
**No direct user feedback** (issues, discussions, reactions) appears in today’s data. All PRs carry `👍: 0` and `Comments: undefined`, reinforcing the **internal-team-driven** nature of this sprint. Pain points are inferred from fix PRs:
- **Container instability under API rate limits** (#3251) — operators likely saw unexpected kills.
- **Telegram formatting breakage** (#3250) — agents’ bold text rendered as italic.
- **Discord attachment black hole** (#2752) — users couldn’t send files/images to agents.
- **Multi-bot channel confusion** (#3255) — messages routed to wrong bot identity in shared rooms.

## 8. Backlog Watch — Stale / Needing Attention
| Item | Age | Concern |
|------|-----|---------|
| **[#2752](https://github.com/nanocoai/nanoclaw/pull/2752)** `fix: stage inbound attachments that expose only a url (Discord)` | **65 days** (opened 2026-06-12) | Longest-open PR in the set; core Discord usability gap. No merge signal yet. |
| **[#37](https://github.com/nanocoai/nanoclaw/pull/37)** `Rename to DotClaw and switch from WhatsApp to Telegram` | **195 days** | Closed today but superseded by #3269; ensure no residual `dotclaw` references conflict with current branding. |
| **[#3253](https://github.com/nanocoai/nanoclaw/pull/3253)** `fix(opencode): honor the group reasoning effort in the model config` | Fresh but **template-unfilled** (checkboxes empty) | May lack proper classification; verify scope before review. |

---

**Bottom line:** NanoClaw is in a **high-throughput hardening sprint** targeting Telegram parity, delivery correctness, and multi-session agent groups. The 19 open PRs form a coherent stack; if CI stays green, a feature-rich release is imminent. The main risk is **#2752 (Discord attachments)** lingering without review — it’s the oldest user-facing defect in the queue.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest — 2026-08-16

## 1. Today's Overview
NullClaw saw modest but focused activity over the last 24 hours: one new enhancement issue requesting proxy support and one open pull request addressing loop hygiene for long-running, tool-heavy agent sessions. No releases were published, and no PRs were merged or closed. The project appears to be in a steady maintenance and incremental-improvement phase, with contributors targeting both infrastructure (proxy connectivity) and runtime stability (memory/compression hygiene).

## 2. Releases
**None** — No new versions published today.

## 3. Project Progress
No PRs were merged or closed in the last 24 hours. The sole open PR (#987) is under review and aims to improve long-running agent stability; once merged it will advance:
- **Prompt caching efficiency** via stable/variable prompt splitting
- **History compression** for tool outputs to curb memory growth
- **Deduplication** of identical consecutive tool calls

## 4. Community Hot Topics
| Item | Type | Activity | Link |
|------|------|----------|------|
| **#988** Proxy support (HTTP/SOCKS5h) | Issue | 0 comments, 0 reactions | [nullclaw/nullclaw#988](https://github.com/nullclaw/nullclaw/issues/988) |
| **#987** Loop hygiene for long local tool-heavy runs | PR | 0 comments, 0 reactions | [nullclaw/nullclaw#987](https://github.com/nullclaw/nullclaw/pull/987) |

**Analysis**: Both items are fresh (created 2026-08-15) and have not yet attracted community discussion. The proxy request signals a need for enterprise/controlled-network deployments, while the PR addresses a core reliability pain point for heavy local tool usage—both are strategic rather than cosmetic.

## 5. Bugs & Stability
**No new bug reports, crashes, or regressions filed today.** The open PR (#987) proactively targets stability (memory bloat, duplicate tool calls) but is not tied to a reported incident.

## 6. Feature Requests & Roadmap Signals
| Request | Source | Likelihood for Next Release |
|---------|--------|-----------------------------|
| **HTTP(S) & SOCKS5h proxy support for providers** | Issue #988 | Medium — single request, no discussion yet; may require design review for multi-provider proxy config. |
| **Prompt caching, output compression, call deduplication** | PR #987 | High — PR already implements the feature set; once reviewed/merged it will likely ship in the next minor release. |

## 7. User Feedback Summary
- **Pain point**: Users operating behind corporate proxies cannot reach providers (Issue #988).  
- **Use case**: Long-running, tool-intensive local agent sessions suffer from history bloat and redundant calls (PR #987).  
- **Sentiment**: Too early to gauge satisfaction; both items are uncontested and lack community commentary.

## 8. Backlog Watch
| Item | Status | Age | Why It Needs Attention |
|------|--------|-----|------------------------|
| **#988 Proxy support** | Open, 0 comments | 1 day | First proxy request; defines network accessibility for enterprise users. Maintainer triage needed to scope config surface (per-provider? global? auth?). |
| **#987 Loop hygiene PR** | Open, 0 reviews | 1 day | Core runtime improvement; awaits code review. Merging unblocks memory/performance gains for heavy users. |

---
*Data sourced from GitHub API for nullclaw/nullclaw on 2026-08-16. All links point to live GitHub items.*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-08-16

## 1. Today's Overview
IronClaw shows **high maintenance velocity** with 27 issues and 12 PRs updated in the last 24 hours. The project is in a **stabilization and optimization phase**: 21 issues were closed (mostly performance/hygiene tickets from Epic #7591), while 6 new issues opened today focus on test reliability, architecture boundaries, and core runtime refinements. No new releases were cut. The merged PRs (#7628, #7629, #7676, #7634, #7670) deliver measurable performance wins—coalesced DB writes, removed heartbeat journal churn, and completion of the "unbound-turns" execution model switchover. Open PRs (#7651, #7491, #7679, #7678, #7516, #7677, #7641) signal upcoming features: deterministic automation suppression, unified coding tool surface, live QA harness fixes, capability persistence, WebUI operator surface, and message index folding.

## 2. Releases
**No new releases** in the last 24 hours.

## 3. Project Progress — Merged/Closed PRs (Last 24h)

| PR | Title | Type | Key Changes |
|----|-------|------|-------------|
| [#7628](https://github.com/nearai/ironclaw/pull/7628) | `perf(processes): remove heartbeat journal churn` | Perf | Stops appending `ProcessJournalKind::Heartbeat` rows; keeps lease timestamps on materialized process row; ships 15s turn-running heartbeat interval. Implements conservative subset of Epic #7591. |
| [#7629](https://github.com/nearai/ironclaw/pull/7629) | `perf: reduce trigger and outbound state writes` | Perf | Moves trigger run-history pruning from every Running-row update to initial fire claim; retains completion-time pruning on recovery path. |
| [#7676](https://github.com/nearai/ironclaw/pull/7676) | `perf(threads): coalesce thread index touches` | Perf | Coalesces bursty per-thread activity touches into bounded thread-index writes; flushes newest pending timestamp after interval; preserves multi-worker correctness with monotonic CAS. |
| [#7634](https://github.com/nearai/ironclaw/pull/7634) | `feat(unbound-turns): complete the switchover to prepared-context turns` | Feature | Completes migration to unbound-turns model; 71-clause conformance audit against design docs; all divergences closed or documented. Stacked on #7562/#7633. |
| [#7670](https://github.com/nearai/ironclaw/pull/7670) | `chore(agents): refresh codebase knowledge graph` | CI/Infra | Nightly automated refresh of committed codebase-memory bootstrap snapshot. |

**Net impact**: ~50% reduction in per-turn DB write volume (heartbeat journal rows, thread-index CAS rewrites, trigger pruning DELETEs); execution model now fully on prepared-context turns.

## 4. Community Hot Topics — Most Active Items

| Item | Activity | Underlying Need |
|------|----------|-----------------|
| [#467](https://github.com/nearai/ironclaw/issues/467) *Trajectory benchmark system* | 4 comments, open since Mar | **Eval infrastructure**: Team wants real-scenario, real-LLM benchmark with hard assertions + LLM-as-judge for agent quality gates. Blocked on harness maturity. |
| [#3236](https://github.com/nearai/ironclaw/issues/3236) *Same-thread follow-up & steering policy* | 3 comments, closed | **Reborn UX policy**: Defines how follow-ups, `/btw` steering, queue ordering, promotion/cancellation interact while a turn holds the thread lock. Now resolved. |
| [#6821](https://github.com/nearai/ironclaw/issues/6821) *IronHub search returns phantom catalog entries* | 1 comment, closed | **Search integrity**: Free-text query matched entire catalog instead of relevant subset; fixed in PR #6780 lineage. |
| [#7679](https://github.com/nearai/ironclaw/pull/7679) *fix(live-qa): stop harness bugs reddening green canary runs* | Open XL PR | **CI reliability**: 30/30 live canary runs red due to 3 harness defects + 1 liveness proxy false positive. Fix unblocks green signal for real regressions. |
| [#7491](https://github.com/nearai/ironclaw/pull/7491) *feat(coding): omp core-tool contract + engines + benchmark arm* | Open XL PR, 11 Aug | **Unified coding surface**: Consolidates 6 bare tool names (`read`/`write`/`edit`/`glob`/`grep`/`bash`); removes legacy file tools, derived spellings, mixed surfaces. Core for agent coding loops. |

## 5. Bugs & Stability — Reported Today (2026-08-15)

| Severity | Issue | Summary | Fix PR |
|----------|-------|---------|--------|
| **High** | [#7675](https://github.com/nearai/ironclaw/issues/7675) | `qa_6c_gmail_to_sheet_live_chat` flake cascades across provider-contracts session; intermittent resource-class capability failure + generic error masking root cause. | None yet |
| **Medium** | [#7671](https://github.com/nearai/ironclaw/issues/7671) | Capability dispatch stack pressure: kernel sandbox path near 2 MiB test-thread stack edge; `LoopCapabilityPort` decorator chain overflows. Partial fix in f1f396cd8 (chain-boxes delegation). | None yet |
| **Medium** | [#7673](https://github.com/nearai/ironclaw/issues/7673) | BudgetLedger: truncated-launch windows double-charge (`try_charge_invocations` before `invoke_begin`); charge durability gap at gate/terminal edges. | Related: [#7678](https://github.com/nearai/ironclaw/pull/7678) (persists invocation state at gate/terminal) |
| **Low** | [#7672](https://github.com/nearai/ironclaw/issues/7672) | `LoopModelRequest.tool_choice: Option<String>` overloads mode strings (`auto`/`required`/`none`) and tool names across 6+ provider encoders; needs typed `ToolChoice` enum. | None yet |
| **Low** | [#7674](https://github.com/nearai/ironclaw/issues/7674) | Architecture test only gates crate-level edges; `ironclaw_openai_compat → ironclaw_threads` symbol-level allowlist missing for accept-door seed vocabulary + validator. | None yet |

**Note**: Several high-impact bugs (#6835 MCP auth gate, #5239 scheduler stale heartbeat, #5237 debug log flood) were closed yesterday with fixes in merged PRs.

## 6. Feature Requests & Roadmap Signals

| Signal | Source | Likelihood for Next Version |
|--------|--------|-----------------------------|
| **Deterministic automation result suppression** | [#7651](https://github.com/nearai/ironclaw/pull/7651) (Open XL) | High — PR ready, requires `trigger_create` to declare `result_delivery` intent; explicit suppress/notify-on-match/change/result modes. |
| **Unified coding tool contract (OMP)** | [#7491](https://github.com/nearai/ironclaw/pull/7491) (Open XL) | High — 6 bare tools, benchmark arm, removes legacy surface; core for agent coding loops. |
| **Live QA harness hardening** | [#7679](https://github.com/nearai/ironclaw/pull/7679) (Open XL) | High — 30/30 canary red; fixes 3 harness bugs + 1 liveness proxy. Unblocks CI signal. |
| **Capability invocation persistence at gate/terminal** | [#7678](https://github.com/nearai/ironclaw/pull/7678) (Open XL) | High — Keeps state worker-local, materializes atomically at completed/failed/approval-blocked/auth-blocked; preserves lease-fenced cross-worker resume. |
| **WebUI operator surface for IronHub agent link** | [#7516](https://github.com/nearai/ironclaw/pull/7516) (Open XL, new contributor) | Medium — Adds register URL + shared key install to Extensions page; unblocks WebUI-only deployments. |
| **Message lookup indexes folded into message rows** | [#7677](https://github.com/nearai/ironclaw/pull/7677) (Open XL) | Medium — Eliminates 1-3 sibling entry rows per message; legacy fallback preserved. |
| **Archive parity-blocked skill bundles** | [#7641](https://github.com/nearai/ironclaw/pull/7641) (Open M) | Low — Housekeeping: moves 17 blocked bundles to `docs/internal/archived-skills/`. |

## 7. User Feedback Summary
- **Pain point**: Live canary has been **red 30/30 runs** due to harness bugs, not product regressions ([#7679](https://github.com/nearai/ironclaw/pull/7679)). Engineers lose trust in CI signal.
- **Pain point**: **IronHub search** returned phantom catalog entries (3 reported vs 18 actual; 21 skills listed with 20 bogus) — fixed but indicates search index/catalog sync fragility ([#6821](https://github.com/nearai/ironclaw/issues/6821)).
- **Pain point**: **Telegram forum-topic delivery** lacked whole-path coverage; replies missing `message_thread_id` land in supergroup ([#6829](https://github.com/nearai/ironclaw/issues/6829)).
- **Pain point**: **Scheduler** misclassifies stale terminal heartbeat as runner failure, emits false terminal-failure path ([#5239](https://github.com/nearai/ironclaw/issues/5239)).
- **Positive**: Reborn local-dev SSO mismatch causing Railway automation pre-run failures resolved ([#4992](https://github.com/nearai/ironclaw/issues/4992)).
- **Positive**: Performance hygiene tickets (Tier 1/2) from Epic #7591 systematically closed with measurable DB write reductions.

## 8. Backlog Watch — Stale/Important Items Needing Attention

| Item | Age | Why It Matters |
|------|-----|----------------|
| [#467](https://github.com/nearai/ironclaw/issues/467) *Trajectory benchmark system* | 5+ months (Mar 2) | **Critical for release quality**: No automated agent-quality gate exists; blocker for confident releases. 4 comments, no PR. |
| [#5672](https://github.com/nearai/ironclaw/issues/5672) *perf(webui_v2): replace SSE drain-and-poll with real subscription* | 1.5 months (Jul 6) | **WebUI scalability**: Every browser polls 1-3s, each poll drains projection store (Postgres). Acknowledged liability, no PR. |
| [#4775](https://github.com/nearai/ironclaw/issues/4775) *Epic: Automated QA for Reborn binary* | 2 months (Jun 11) | **Regression safety**: 8 manual QA journeys need automation across hermetic/fixture/e2e/live layers. 1 comment, no PR. |
| [#4407](https://github.com/nearai/ironclaw/issues/4407) *Design model-visible capability selection for provider tool-count limits* | 2.5 months (Jun 3) | **Model compatibility**: Reborn surfaces enough capabilities to exceed provider `tools` array limits (observed with gpt-5.4-nano). No PR. |
| [#4922](https://github.com/nearai/ironclaw/issues/4922) *Extract local-dev capability composition out of runtime hot paths* | 2 months (Jun 15) | **Architecture hygiene**: Composition logic in hot path (`runtime/local_dev.rs` etc.); acceptable as scoped fix but needs extraction. No PR. |

---

**Health Indicators**
- ✅ **Velocity**: 21 issues closed, 5 PRs merged in 24h — strong maintenance cadence.
- ✅ **Performance**: Systematic Tier 1/2 optimizations landing (DB writes, heartbeat churn, thread-index coalescing).
- ⚠️ **Test Reliability**: Live canary 30/30 red; new E2E flake (#7675) blocks provider-contracts session.
- ⚠️ **Eval Gap**: No trajectory benchmark (#467) after 5+ months — release confidence relies on manual QA.
- ⚠️ **Backlog Drift**: Several 2-5 month old architectural/performance issues lack PRs.

**Next Watch**: Merge of #7679 (live QA fix) and #7651/#7491 (automation suppression + coding tools) will signal whether the project shifts from optimization back to feature delivery.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-08-16

## 1. Today's Overview
LobsterAI shows **low active development velocity** with no new releases and most recent activity centered on stale issue cleanup. In the last 24 hours, 16 issues were closed (all marked `[stale]`), 2 PRs were merged, and 4 dependabot PRs remain open for CI dependency upgrades. Only 2 issues remain open/active, both concerning authentication and memory architecture. The project appears in a maintenance/stabilization phase with core contributors focused on upstream OpenClaw integration fixes rather than new feature delivery.

## 2. Releases
**No new releases** published in the last 24 hours.

## 3. Project Progress
### Merged / Closed PRs (2)
| PR | Area | Summary | Impact |
|----|------|---------|--------|
| [#1879](https://github.com/netease-youdao/LobsterAI/pull/1879) | main, openclaw | **Fix: preserve manually-added plugin load paths on config sync** — Prevents `OpenClawConfigSync.sync()` from overwriting user-installed community plugin paths (e.g., `memory-lancedb-pro`). | 🔧 **Stability/Config** — Resolves silent loss of custom plugin installations during config synchronization. |
| [#2234](https://github.com/netease-youdao/LobsterAI/pull/2234) | docs, openclaw | **Fix: cron yield descendant finalization** — Ensures child agent completion events correctly resume parent agent after `sessions_yield`; adds yield continuation loop for multi-round descendant completion in cron jobs. | 🧩 **Core Engine** — Fixes agent orchestration deadlock in parallel/serial sub-agent workflows (critical for Cowork/cron automation). |

### Open PRs (4) — All Dependabot CI Updates
- [#2164](https://github.com/netease-youdao/LobsterAI/pull/2164): `trufflesecurity/trufflehog` 3.88.30 → 3.95.5 (secret scanning)
- [#2165](https://github.com/netease-youdao/LobsterAI/pull/2165): `actions/checkout` v4 → v6 (breaking changes in v6)
- [#2166](https://github.com/netease-youdao/LobsterAI/pull/2166): `dorny/paths-filter` v3 → v4
- [#2167](https://github.com/netease-youdao/LobsterAI/pull/2167): `actions/stale` 9.1.0 → 10.3.0

> **Note:** No feature PRs open; all open PRs are automated dependency bumps awaiting review/merge.

## 4. Community Hot Topics
| Issue | Comments | Reactions | Core Need |
|-------|----------|-----------|-----------|
| [#1903](https://github.com/netease-youdao/LobsterAI/issues/1903) **Member login frequently failing** | 3 | 0 | **Auth reliability** — Users cannot access paid NetEase models; blocks core value proposition. Screenshot shows login UI error. |
| [#2046](https://github.com/netease-youdao/LobsterAI/issues/2046) **Product suggestion: Agent memory system** | 2 | 0 | **Long-term memory** — Request for persistent session metadata, cross-session retrieval, and automatic memory consolidation (high priority). |
| [#1849](https://github.com/netease-youdao/LobsterAI/issues/1849) **Infinite NO_REPLY / truncated output on follow-up** (closed stale) | 4 | 0 | **Streaming reliability** — Task marked complete prematurely while model still streaming; causes blank UI. |
| [#1885](https://github.com/netease-youdao/LobsterAI/issues/1885) **[Security] Email skill path traversal** (closed stale) | 2 | 0 | **Security hardening** — Unsanitized attachment filenames in `imap.js` allow directory traversal. |

**Underlying signal:** Users are blocked by **authentication instability** and **missing memory persistence** — two foundational gaps for a "personal AI assistant" positioning. Security issue (#1885) indicates need for supply-chain audit of bundled skills.

## 5. Bugs & Stability
| Severity | Issue | Status | Fix PR? | Description |
|----------|-------|--------|---------|-------------|
| 🔴 **Critical** | [#1903](https://github.com/netease-youdao/LobsterAI/issues/1903) Member login failing | **Open** | No | Paid model access blocked; affects monetization path. |
| 🔴 **Critical** | [#1885](https://github.com/netease-youdao/LobsterAI/issues/1885) Email skill path traversal | Closed (stale) | No | CVE-class vulnerability in bundled skill; requires immediate patch + skill review. |
| 🟠 **High** | [#1849](https://github.com/netease-youdao/LobsterAI/issues/1849) Infinite NO_REPLY / truncated output | Closed (stale) | No | Streaming race condition: task completion flag set before model finishes. |
| 🟠 **High** | [#1993](https://github.com/netease-youdao/LobsterAI/issues/1993) AI engine connection lost (desktop) | Closed (stale) | No | Desktop app unstable; IM Bot works — suggests gateway/websocket issue. |
| 🟡 **Medium** | [#1971](https://github.com/netease-youdao/LobsterAI/issues/1971) Chat scroll breakage with long elements (Mermaid) | Closed (stale) | No | Virtual list height miscalculation on large nodes → infinite re-render. |
| 🟡 **Medium** | [#1988](https://github.com/netease-youdao/LobsterAI/issues/1988) Aliyun Bailian qwen3.6-plus forced to NetEase model | Closed (stale) | No | Config override ignores user provider selection for specific models. |

> **Action needed:** Critical auth bug (#1903) and security vuln (#1885) have **no associated fix PRs** despite being known for months. Stale closure ≠ resolution.

## 6. Feature Requests & Roadmap Signals
| Request | Source | Priority Signal | Likelihood for Next Version |
|---------|--------|-----------------|----------------------------|
| **Agent memory system** (persistent sessions, cross-session retrieval, auto-consolidation) | [#2046](https://github.com/netease-youdao/LobsterAI/issues/2046) (user), [#2041](https://github.com/netease-youdao/LobsterAI/issues/2041) (internal analysis) | 🔥 **High** — Multiple detailed proposals; aligns with "self-evolver" roadmap | **Medium** — Requires schema changes in `memory-core` (upstream); partial work in `skill-self-evolver` |
| **Hermes Agent integration** (OpenWebUI-style agent marketplace) | [#1880](https://github.com/netease-youdao/LobsterAI/issues/1880) | 🟡 Medium | Low — Depends on OpenClaw plugin architecture maturity |
| **OpenHuman engine support** | [#2016](https://github.com/netease-youdao/LobsterAI/issues/2016) | 🟢 Low | Low — Niche request; no upstream momentum |
| **Dreaming switch fix** (persistent `dreaming` config) | [#2039](https://github.com/netease-youdao/LobsterAI/issues/2039) | 🟡 Medium | **High** — Upstream OpenClaw bug; fix requires `memory-core` schema merge |

**Prediction:** Next version will likely include **Dreaming persistence fix** (upstream dependency) and **plugin path preservation** (merged #1879). Full memory system overhaul remains 2+ cycles out.

## 7. User Feedback Summary
| Pain Point | Frequency | User Impact | Representative Quote |
|------------|-----------|-------------|----------------------|
| **Login/auth instability** | 2+ issues (#1903, #2017) | Cannot use paid models; desktop app unusable | "会员登录不进去，无法使用网易付费的模型" (#1903) |
| **Streaming/output truncation** | 1 critical (#1849) | Follow-up questions fail silently | "任务被提前complate，但是模型还在输出，造成页面无数据响应" |
| **Config overridden by app** | 1 (#1988) | Custom provider settings ignored | "系统会强制改成错误的" (model config forced to NetEase) |
| **UI/UX roughness** | 3+ (#1836, #1920, #1921) | Feels "unfinished" vs competitors | "相比起其他竞品过于丑了，用起来不太舒服" (#1836) |
| **Local dev environment broken** | 1 (#2017) | Contributors cannot run locally | "未检测到内置 OpenClaw runtime…请先执行打包前构建脚本" |

**Sentiment:** **Frustrated but invested** — Users file detailed bugs with logs/screenshots, propose architectural improvements, but hit stale closures without resolution. Core complaint: **"Works for IM Bot, broken on Desktop"** — suggesting gateway/transport layer divergence.

## 8. Backlog Watch — Stale but Critical Items Needing Maintainer Attention
| Item | Age | Why It Matters | Recommended Action |
|------|-----|----------------|-------------------|
| [#1885](https://github.com/netease-youdao/LobsterAI/issues/1885) **Email skill path traversal** | 102 days | **Security vulnerability** in shipped code; affects all users enabling email skill. | 🔴 **Immediate**: Patch `imap.js` sanitization; run full skill security audit; publish advisory. |
| [#1903](https://github.com/netease-youdao/LobsterAI/issues/1903) **Member login failing** | 101 days | Blocks revenue path (paid models); high user visibility. | 🔴 **Urgent**: Assign auth team; add login telemetry; provide workaround doc. |
| [#2039](https://github.com/netease-youdao/LobsterAI/issues/2039) **Dreaming config lost on restart** | 85 days | Core automation feature broken; upstream dependency. | 🟠 **Track upstream**: Monitor `memory-core` schema PR; backport when merged. |
| [#2046](https://github.com/netease-youdao/LobsterAI/issues/2046) **Agent memory system design** | 83 days | Strategic differentiator; detailed community proposal. | 🟡 **Roadmap**: Create RFC; break into phases (session metadata → cross-session retrieval → consolidation). |
| [#2017](https://github.com/netease-youdao/LobsterAI/issues/2017) **Local dev broken (missing cfmind runtime)** | 88 days | Blocks contributor onboarding; CI may pass but local fails. | 🟡 **DX**: Document `pre-build` script; add `dev` script to `package.json`; verify in CI. |
| [#1879](https://github.com/netease-youdao/LobsterAI/pull/1879) **Plugin path preservation** | **Merged** | ✅ **Resolved** — but verify no regression in config sync edge cases. | 🟢 **Verify**: Test community plugin install → restart → config sync cycle. |

---

### Health Indicators Summary
| Metric | Status | Trend |
|--------|--------|-------|
| **Release Cadence** | ❌ None in 24h | ⬇️ Stalled |
| **Issue Throughput** | 16 closed / 2 open | ⚠️ Stale cleanup, not resolution |
| **PR Throughput** | 2 merged (fixes) / 4 open (deps) | ➡️ Maintenance only |
| **Critical Bugs Open** | 1 (auth) + 1 (security, closed stale) | 🔴 **Unaddressed** |
| **Community Engagement** | Detailed proposals, no maintainer response | ⬇️ Declining trust |
| **Upstream Dependency** | High (OpenClaw, memory-core) | ⚠️ Blocking key features |

**Bottom line:** LobsterAI is **accumulating technical debt** in auth, security, and memory architecture while relying on stale-closure for issue management. The two merged PRs show capability for deep engine fixes, but without a triage process that distinguishes "stale" from "unresolved," user-blocking bugs persist. Recommended: **Declare a "stabilization sprint"** targeting the 6 backlog-watch items above before new feature work.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-08-16

## 1. Today's Overview
Moltis shows high velocity with **12 PRs merged/closed** and **2 issues resolved** in the last 24 hours, indicating a focused stabilization and feature-delivery sprint. No new release was cut today. The merged work spans security hardening (zip/HF path traversal, node pairing signatures), a new **zvec/redb vector memory backend**, durable **CalDAV/Gmail/channel connectors**, **Slack native live task cards**, **Coder remote workspace sandbox support**, and multiple dependency/organization-rename fixes (openclaw org for gogcli/wacrawl). Four PRs remain open, including a security hardening for model/zip paths and the Coder sandbox backend.

## 2. Releases
No new releases published today.

## 3. Project Progress — Merged/Closed PRs (12)

| PR | Type | Summary | Link |
|----|------|---------|------|
| #1158 | Feature | **zvec vector database memory backend** (feature-gated `zvec`, enabled in `full`); uses `redb` + independent llama.cpp embeddings server | [#1158](https://github.com/moltis-org/moltis/pull/1158) |
| #1190 | Feature | **Durable calendar, channel, email connectors**: provider-neutral persistence, atomic snapshots, scheduling, projections, bounded local full-text search; read-only CalDAV, Gmail, Himalaya v2, channel-history datasets | [#1190](https://github.com/moltis-org/moltis/pull/1190) |
| #1195 | Feature | **Slack native live task cards**: channel-neutral tool lifecycle updates rendered as Slack plan/task cards; opaque per-run IDs, registered canonical tool names, terminal error cleanup | [#1195](https://github.com/moltis-org/moltis/pull/1195) |
| #1199 | Feature | **Coder remote workspace sandbox support**: ephemeral workspaces via REST API, PTY WebSockets, template IDs/names, presets, rich params, TTLs, env aliases, auto backend selection | [#1199](https://github.com/moltis-org/moltis/pull/1199) |
| #1196 | Fix | **ClawHub skill search**: stop per-result metadata requests blowing RPC timeout; consume search metadata directly; owner-qualified refs through detail/scan/download/install | [#1196](https://github.com/moltis-org/moltis/pull/1196) |
| #1197 | Feature | **Start agent chats from command palette**: “Ask agent” appended to palette results; creates fresh chat session, sends query, captures originating session | [#1197](https://github.com/moltis-org/moltis/pull/1197) |
| #1198 | Fix | **Route OpenAI reasoning tool calls through Responses API** when `reasoning_effort` + function tools present; preserve Chat Completions otherwise; shared request construction | [#1198](https://github.com/moltis-org/moltis/pull/1198) |
| #1182 | Fix | **Allow deleting/archiving `main` session** (fixes #1132): drop `main` guard in `delete_impl` and `is_archivable_entry`; current-active-channel-session restriction stays | [#1182](https://github.com/moltis-org/moltis/pull/1182) |
| #1191 | Fix | **Sandbox build**: point `gogcli` module path at `openclaw` org (was `steipete`); fixes `moltis sandbox build` on pre-built images | [#1191](https://github.com/moltis-org/moltis/pull/1191) |
| #1192 | Fix | **Skills**: point `wacrawl` install metadata at `openclaw` org (was `steipete`); fixes Go install fallback | [#1192](https://github.com/moltis-org/moltis/pull/1192) |
| #1194 | Fix | **Scripts**: guard empty bash array expansions for macOS bash 3.2 (`just local-validate-full`) | [#1194](https://github.com/moltis-org/moltis/pull/1194) |
| #1179 | Security | **Gateway**: verify node pairing signatures; bind `node.pair.verify` to server-issued pending request (prevents caller-supplied key/challenge) | [#1179](https://github.com/moltis-org/moltis/pull/1179) |

## 4. Community Hot Topics
No issues or PRs with significant comment threads or reactions in the last 24h (all show 0 comments/👍). The highest-signal activity is the **cluster of 8 PRs from `penso` merged within hours** (#1190, #1195–#1198, #1199), suggesting a coordinated feature drop for connectors, Slack UX, OpenAI reasoning routing, and Coder sandbox. The security-focused PRs from `tsauvajon` (#1179, #1180) also signal maintainer priority on supply-chain/privilege-escalation hardening.

## 5. Bugs & Stability — Resolved Today
| Severity | Issue | Fix PR | Status |
|----------|-------|--------|--------|
| High (RCE risk) | Zip/HF model path traversal → arbitrary file write, code execution | #1180 (open) | **Open** — hardening in review |
| High (Auth bypass) | Node pairing: caller could supply own key/challenge | #1179 | **Merged** |
| Medium | `main` session undeletable/unarchivable | #1182 | **Merged** (fixes #1132) |
| Medium | Sandbox build fails: `gogcli` moved to `openclaw` org | #1191 | **Merged** (fixes #1189) |
| Medium | `wacrawl` skill install broken (org rename) | #1192 | **Merged** |
| Low | macOS bash 3.2: unbound variable in `just local-validate-full` | #1194 | **Merged** |
| Low | Vault recovery phrase hash mismatch (normalization vs raw) | #1186 (open) | **Open** — normalization fix pending |

## 6. Feature Requests & Roadmap Signals
- **Vector memory backends** (#1158 merged): zvec/redb added; suggests pluggable memory architecture — expect more backends (Qdrant, pgvector) soon.
- **Durable connectors framework** (#1190): provider-neutral persistence, snapshots, projections — foundation for Outlook, Notion, Linear connectors.
- **Native Slack UX** (#1195): live task cards — likely extending to Teams/Discord native blocks.
- **Coder sandbox** (#1199 open): remote workspace execution — signals multi-backend sandbox strategy (local, Docker, Coder, possibly Kubernetes).
- **OpenAI Responses API routing** (#1198): reasoning + tools — will extend to Anthropic, Gemini equivalents.
- **Command-palette agent launch** (#1197): UX streamlining — expect more palette-driven workflows.

## 7. User Feedback Summary
No direct user comments in the last 24h. Indirect signals:
- **Security concerns** drive immediate PRs from `tsauvajon` (external contributor) — users auditing before adoption.
- **Org rename breakage** (gogcli/wacrawl → openclaw) affected all sandbox/skill users — quick fixes merged.
- **`main` session friction** (#1132) reported by user `vvuk` — resolved same day as fix PR.
- **macOS bash 3.2** edge case (#1194) caught in CI/local validation — indicates contributor base on older macOS.

## 8. Backlog Watch — Open PRs Needing Attention
| PR | Age | Concern | Link |
|----|-----|---------|------|
| #1180 | 16 days | **Security hardening** (zip/HF path traversal) — critical RCE vector; still open, no merge | [#1180](https://github.com/moltis-org/moltis/pull/1180) |
| #1186 | 7 days | Vault recovery phrase hash normalization — low-risk but affects unseal UX | [#1186](https://github.com/moltis-org/moltis/pull/1186) |
| #1199 | 1 day | Coder sandbox backend — new feature, needs review/testing | [#1199](https://github.com/moltis-org/moltis/pull/1199) |
| #1200 | 0 days | Dependabot: postcss, js-yaml bumps — routine | [#1200](https://github.com/moltis-org/moltis/pull/1200) |

**Maintainer action suggested**: Prioritize #1180 (security), then #1199 (feature), #1186 (bug).

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (QwenPaw) Project Digest — 2026-08-16

---

## 1. Today's Overview

CoPaw shows **high community velocity** with 21 total items updated in the last 24 hours (10 issues, 11 PRs), though **no PRs were merged** and **no releases shipped**. The project is in an active development phase with multiple first-time contributors submitting fixes and features. Critical bugs around video handling, OAuth2 token rotation, and image persistence in Console chats were reported today, while PRs address provider unification, cron job UX, Matrix session isolation, and skill-system dynamics. Overall project health appears strong with responsive triage, but the zero-merge rate today suggests a review bottleneck or deliberate batching.

---

## 2. Releases

**No new releases** in the last 24 hours. The latest version remains **v2.1.0** (per issue reports). Users on v2.1.0 should be aware of the open bugs listed below, particularly around video handling and OAuth2 refresh.

---

## 3. Project Progress

**No PRs merged or closed today.** All 11 PRs remain open. Notable PRs advancing key areas:

| PR | Area | Status | Summary |
|----|------|--------|---------|
| [#6940](https://github.com/agentscope-ai/QwenPaw/pull/6940) | **DataPaw Runtime** | Ready for review | Adds native DataPaw app runtime + durable analysis workspace (first-time contributor) |
| [#6302](https://github.com/agentscope-ai/QwenPaw/pull/6302) | **Provider Unification** | Open | Unifies provider discovery, model metadata, routing, and agent controls — catalog-driven model system |
| [#7061](https://github.com/agentscope-ai/QwenPaw/pull/7061) | **Video Fix** | Open | Fixes `view_video` tool-result delivery on OpenAI Responses API (addresses #7059, #7060) |
| [#7055](https://github.com/agentscope-ai/QwenPaw/pull/7055) | **Cron CLI** | Open | Fixes `cron update --text` silently failing for agent-type jobs (#7048) |
| [#7001](https://github.com/agentscope-ai/QwenPaw/pull/7001) | **Matrix Isolation** | Open | Isolates session/memory per sender in group rooms (first-time contributor) |
| [#7050](https://github.com/agentscope-ai/QwenPaw/pull/7050) | **Cron Model Override** | Open | Adds per-cron-job model picker in Console (first-time contributor) |
| [#7049](https://github.com/agentscope-ai/QwenPaw/pull/7049) | **Chat Pagination** | Open | Adds `limit`/`before` pagination to `GET /chats/{chat_id}` |
| [#7033](https://github.com/agentscope-ai/QwenPaw/pull/7033) | **Skill System** | Open | Dynamic skill loading, auto-unload, frontmatter fixes |
| [#7057](https://github.com/agentscope-ai/QwenPaw/pull/7057) | **Shell PATH** | Open | Adds user-local bin dirs to subprocess PATH for daemon environments |
| [#7054](https://github.com/agentscope-ai/QwenPaw/pull/7054) | **Chrome Bridge** | Open | Supports remote bridge endpoint for LAN/network browsers (first-time contributor) |
| [#6623](https://github.com/agentscope-ai/QwenPaw/pull/6623) | **ACP Race Fix** | Under Review | Prevents final text loss when notifications race prompt response |

---

## 4. Community Hot Topics

| Item | Type | Comments | Reactions | Core Need |
|------|------|----------|-----------|-----------|
| [#3915](https://github.com/agentscope-ai/QwenPaw/issues/3915) | Issue | 3 | 👍 1 | **Virtual scrolling in Console WebUI** — severe lag with long conversations; frontend performance blocker |
| [#6476](https://github.com/agentscope-ai/QwenPaw/issues/6476) | Issue (Closed) | 3 | 0 | **Matrix E2E encryption** — `matrix-nio` requires `olm`/`vodozemac`; installation friction on Linux |
| [#7060](https://github.com/agentscope-ai/QwenPaw/issues/7060) | Issue | 1 | 0 | **Hardcoded 2 MB video inline cap** — provider setting ignored; needs configurable limit + Files API |
| [#7059](https://github.com/agentscope-ai/QwenPaw/issues/7059) | Issue | 1 | 0 | **Video frames silently dropped** — `view_video` succeeds but model receives no frames (OpenAI Responses API) |
| [#7053](https://github.com/agentscope-ai/QwenPaw/issues/7053) | Issue | 1 | 0 | **OAuth2 refresh token rotation broken** — rotated refresh tokens not persisted; remote MCP degrades to manual re-auth |

**Analysis**: The hottest topic (#3915) is a **frontend scalability issue** affecting all Console users with long histories. Video handling (#7059, #7060) and OAuth2 (#7053) are **critical integration bugs** blocking enterprise/remote MCP use cases. Matrix E2E (#6476) was closed but reveals ongoing dependency friction.

---

## 5. Bugs & Stability

| Severity | Issue | Description | Fix PR |
|----------|-------|-------------|--------|
| **Critical** | [#7059](https://github.com/agentscope-ai/QwenPaw/issues/7059) | `view_video` tool-result video blocks silently dropped; model receives **zero frames** on OpenAI Responses API / Volcengine Ark | [#7061](https://github.com/agentscope-ai/QwenPaw/pull/7061) |
| **Critical** | [#7053](https://github.com/agentscope-ai/QwenPaw/issues/7053) | OAuth2 **refresh token rotation not persisted**; remote MCP servers (e.g., XMind) permanently degrade to manual re-auth | — |
| **High** | [#7060](https://github.com/agentscope-ai/QwenPaw/issues/7060) | `view_video` **hardcoded 2 MB inline cap**; provider `max_inline_media_bytes` ignored; no Files API fallback | [#7061](https://github.com/agentscope-ai/QwenPaw/pull/7061) (partial) |
| **High** | [#7051](https://github.com/agentscope-ai/QwenPaw/issues/7051) | **Image attachments lost on session reload** — backend serves data URL, frontend shows broken thumbnail | — |
| **High** | [#7048](https://github.com/agentscope-ai/QwenPaw/issues/7048) | `qwenpaw cron update --text` **returns success but prompt not updated** for agent-type cron jobs | [#7055](https://github.com/agentscope-ai/QwenPaw/pull/7055) |
| **Medium** | [#6476](https://github.com/agentscope-ai/QwenPaw/issues/6476) | Matrix E2E encryption unusable — `olm`/`vodozemac` install friction (closed, but workaround needed) | — |

**Note**: Two critical bugs (#7059, #7060) have a fix PR (#7061) open. OAuth2 rotation (#7053) and image persistence (#7051) lack fix PRs — **maintainer attention needed**.

---

## 6. Feature Requests & Roadmap Signals

| Issue/PR | Feature | Likelihood for Next Version | Rationale |
|----------|---------|----------------------------|-----------|
| [#7058](https://github.com/agentscope-ai/QwenPaw/issues/7058) | **Restore native context strategy selector** in Web UI (scroll vs native) | **High** | Backend already supports it; UI removal was regression; 1 comment, clear demand |
| [#7056](https://github.com/agentscope-ai/QwenPaw/issues/7056) | **Background task callback/notification** (webhook/push vs polling) | **Medium** | Architectural gap; `check_agent_task` polling only; PR would need API design |
| [#7052](https://github.com/agentscope-ai/QwenPaw/issues/7052) | **Plugin API: system_prompt permission** (hide company prompts from users) | **Medium** | Enterprise plugin use case; security/privacy need; backend change required |
| [#7050](https://github.com/agentscope-ai/QwenPaw/pull/7050) | **Per-cron-job model override picker** in Console | **High** | PR open, backend contract exists, first-time contributor, UX polish |
| [#7049](https://github.com/agentscope-ai/QwenPaw/pull/7049) | **Chat pagination** (`limit`/`before` on `GET /chats/{chat_id}`) | **High** | PR open, enables virtual scrolling (#3915), first-time contributor |
| [#7001](https://github.com/agentscope-ai/QwenPaw/pull/7001) | **Matrix session/memory isolation per sender** in group rooms | **High** | PR open, fixes fundamental Matrix UX bug, first-time contributor |
| [#6940](https://github.com/agentscope-ai/QwenPaw/pull/6940) | **Native DataPaw app runtime + durable workspace** | **Medium** | Large feature, infra dependency, ready for review but likely next major |
| [#6302](https://github.com/agentscope-ai/QwenPaw/pull/6302) | **Unified provider discovery, routing, model metadata** | **Medium** | Foundational refactor; touches core; under active development |

**Prediction**: Next patch (v2.1.1) will likely include #7055, #7061, #7050, #7049, #7001. Next minor (v2.2) may land #6302, #7033, #6940.

---

## 7. User Feedback Summary

| Pain Point | Evidence | Impact |
|------------|----------|--------|
| **Console WebUI unusable with long chats** | #3915 (3 comments, 1 👍) — "severe lag caused by full DOM rendering" | High — affects all power users |
| **Video analysis broken on major providers** | #7059, #7060 — silent frame drop + hardcoded 2 MB cap | High — blocks video use cases on OpenAI/Ark |
| **OAuth2 remote MCP requires manual re-auth** | #7053 — refresh token rotation not persisted | High — breaks automated workflows |
| **Images disappear after session reload** | #7051 — data URL served but thumbnail broken | Medium — data loss perception |
| **Cron job prompt updates silently fail** | #7048 — CLI returns success but no change | Medium — automation reliability |
| **Matrix group chats share single context** | #7001 — all members share session/memory | Medium — privacy/confusion in teams |
| **No push notifications for background tasks** | #7056 — polling only via `check_agent_task` | Low-Medium — UX friction for async workflows |
| **Plugin system exposes system prompts** | #7052 — company prompts visible to end users | Low — enterprise plugin blocker |

**Sentiment**: Users are **technically sophisticated** (detailed bug reports with API paths, version numbers). Frustration centers on **silent failures** (video, cron, OAuth) and **performance regressions** (Console lag). Positive signal: multiple first-time contributors stepping up with targeted fixes.

---

## 8. Backlog Watch

| Item | Age | Type | Why It Needs Attention |
|------|-----|------|------------------------|
| [#3915](https://github.com/agentscope-ai/QwenPaw/issues/3915) | **~4 months** (opened 2026-04-28) | Enhancement | Virtual scrolling is prerequisite for Console scalability; blocks #7049 pagination value; 1 👍, 3 comments — **stalled** |
| [#6302](https://github.com/agentscope-ai/QwenPaw/pull/6302) | **~1 month** (opened 2026-07-21) | PR (feat) | Massive provider unification refactor; **zero comments/reviews** in 26 days — risk of bitrot; foundational for routing |
| [#6623](https://github.com/agentscope-ai/QwenPaw/pull/6623) | **~2 weeks** (opened 2026-08-01) | PR (fix) | ACP race condition fix; marked "Under Review" but **no reviewer activity** in 15 days; affects protocol correctness |
| [#6940](https://github.com/agentscope-ai/QwenPaw/pull/6940) | **~4 days** (opened 2026-08-12) | PR (feat) | DataPaw runtime — **ready for human review** but no reviewer assigned; large infra dependency |
| [#7053](https://github.com/agentscope-ai/QwenPaw/issues/7053) | **Today** | Bug | OAuth2 refresh token rotation — **critical for remote MCP**; no fix PR yet; enterprise blocker |
| [#7051](https://github.com/agentscope-ai/QwenPaw/issues/7051) | **Today** | Bug | Image persistence — **user-visible data loss**; no fix PR; Console desktop UX |

**Recommendation**: Assign reviewers to #6302, #6623, #6940 immediately. Prioritize fix PRs for #7053 and #7051. Triaging #3915 with a "good first issue" label could unblock Console performance.

---

*Digest generated from GitHub data as of 2026-08-16. All links point to agentscope-ai/QwenPaw repository.*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-08-16

## 1. Today's Overview

ZeroClaw is in a **high-velocity design and stabilization phase** with no new releases but intense RFC activity across architecture, security, and integration boundaries. The project shows 50 issue updates and 50 PR updates in 24 hours — a healthy signal of active development. However, the ratio skews heavily toward *open* items (46 issues, 44 PRs) with only 6 merged/closed PRs, suggesting a backlog of design discussions and in-flight work exceeding merge throughput. No releases today; the team appears focused on landing foundational RFCs (chat completions profile, runtime-owned sessions, unified attachments, security posture, memory architecture) and hardening CI/runtime stability.

---

## 2. Releases

**No new releases** in the last 24 hours. The project remains on the current pre-v0.9.0 development cycle.

---

## 3. Project Progress — Merged/Closed PRs (Last 24h)

| PR | Title | Type | Impact |
|----|-------|------|--------|
| [#9268](https://github.com/zeroclaw-labs/zeroclaw/pull/9268) | feat(channels): surface safeguard fallback notices | Enhancement | Completes Anthropic refusal/fallback stack — surfaces safeguard notices to users in channel orchestrator |
| [#9266](https://github.com/zeroclaw-labs/zeroclaw/pull/9266) | feat(providers): detect anthropic server-side fallback responses | Enhancement | Reads native `model` and `iterations` fields from Anthropic responses for accurate fallback attribution |
| [#9265](https://github.com/zeroclaw-labs/zeroclaw/pull/9265) | feat(providers): opt-in anthropic server-side fallback requests | Enhancement | Adds `server_fallback_models` config for Anthropic server-side fallback (single API call, multiple models) |
| [#9263](https://github.com/zeroclaw-labs/zeroclaw/pull/9263) | feat(providers): route refusals through client-side fallback entries | Enhancement | Makes reliability layer act on typed `AnthropicRefusalError` — classifies as non-retryable, triggers fallback chain |
| [#9262](https://github.com/zeroclaw-labs/zeroclaw/pull/9262) | feat(providers): surface native anthropic refusals as typed errors | Enhancement | Converts HTTP 200 `stop_reason: "refusal"` into typed `AnthropicRefusalError` at provider boundary |
| [#4760](https://github.com/zeroclaw-labs/zeroclaw/issues/4760) | [Feature]: use schema-validated tool calls for memory consolidation | Feature (closed as duplicate) | Redirects to tool-calling approach for memory consolidation — schema validation over prompt-constrained JSON |

**Net progress**: A **stacked Anthropic fallback/refusal series (#9262–#9268)** landed, completing a major provider reliability improvement. Memory consolidation tool-calling was recognized as duplicate (existing work). CI and config fixes remain open.

---

## 4. Community Hot Topics — Most Active Discussions

| Item | Comments | Core Topic | Underlying Need |
|------|----------|------------|-----------------|
| [#8603](https://github.com/zeroclaw-labs/zeroclaw/issues/8603) RFC: ZeroClaw Chat Completions profile | 21 | **OpenAI-compatible API surface** | Enable ZeroClaw agents to work with Open WebUI, LobeChat, Continue.dev, Aider, LangChain, OpenAI SDK — critical for ecosystem adoption |
| [#9487](https://github.com/zeroclaw-labs/zeroclaw/issues/9487) RFC: Runtime-owned conversation sessions & transport surface adapters | 17 | **Session ownership & transport abstraction** | Decouple conversation lifecycle from transport (WebSocket, ACP, webhooks) — enable multi-client, durable sessions |
| [#9488](https://github.com/zeroclaw-labs/zeroclaw/issues/9488) RFC: Unified attachment architecture | 16 | **Cross-channel attachment handling** | Consistent file/media handling across web chat, Discord, Slack, etc. — reduce channel-specific code |
| [#6954](https://github.com/zeroclaw-labs/zeroclaw/issues/6954) RFC: Provenance & reply contract for internally initiated agent turns | 13 | **Agent autonomy & auditability** | Cron/scheduled/triggered agent runs need identity, binding, and reply semantics — critical for automation trust |
| [#6971](https://github.com/zeroclaw-labs/zeroclaw/issues/6971) RFC: Security posture, credential boundaries, universal ingress policy | 13 | **Holistic security model** | Operators need inspectable, maintainable security controls across credentials, sandboxing, tool approval, channel auth |
| [#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) Tracker: Maintainer decision queue for RFCs | 13 | **Governance bottleneck** | 10+ RFCs awaiting maintainer review — process overload risk |
| [#9103](https://github.com/zeroclaw-labs/zeroclaw/issues/9103) RFC: Separate authoritative memory storage from enrichment connectors | 12 | **Memory architecture refactor** | Lucid/Qdrant conflation blocks connector flexibility — need clean storage vs. enrichment separation |
| [#8780](https://github.com/zeroclaw-labs/zeroclaw/issues/8780) RFC: Realtime speech-to-speech channel for Gemini Live | 11 | **Voice interaction** | First-class realtime voice channel — expanding beyond text to speech-to-speech models |
| [#6909](https://github.com/zeroclaw-labs/zeroclaw/issues/6909) RFC: Computer-use support for desktop screen interaction | 9 | **Desktop automation** | Secure, maintained screen perception + input control — gap in local agent capabilities |
| [#9621](https://github.com/zeroclaw-labs/zeroclaw/issues/9621) RFC: Staged opt-in product telemetry | 5 | **Usage observability** | Maintainers lack production usage data for feature investment decisions |

**Pattern**: The top 10 discussions are **all RFCs** — ZeroClaw is architecting its next major boundaries (API surface, session model, security, memory, voice, desktop, telemetry). The maintainer decision queue (#8692) with 13 comments signals **review bandwidth as a constraint**.

---

## 5. Bugs & Stability — Active Issues (Last 24h)

| Issue | Severity | Component | Status | Fix PR? |
|-------|----------|-----------|--------|---------|
| [#9965](https://github.com/zeroclaw-labs/zeroclaw/issues/9965) cron custom-shell test hits `ETXTBSY` under parallel runtime gate | **P1** (blocks unrelated PRs) | Cron / Tests | Accepted | No |
| [#7527](https://github.com/zeroclaw-labs/zeroclaw/issues/7527) macOS desktop app reopens blank / window disappears | **P1** (S1 - workflow blocked) | Runtime / Desktop | Needs repro / Author action | No |
| [#9002](https://github.com/zeroclaw-labs/zeroclaw/pull/9002) fix(gateway): keep agent turns alive after viewer disconnect | **P1** | Gateway / Runtime | **Open PR** (needs author action) | **Yes** (#9002) |
| [#9320](https://github.com/zeroclaw-labs/zeroclaw/pull/9320) fix(cron): bound agent job runs with wall-clock timeout | **P1** | Cron / Runtime | **Open PR** (needs author action) | **Yes** (#9320) |
| [#9753](https://github.com/zeroclaw-labs/zeroclaw/pull/9753) fix(config): distinguish absent vs empty risk-profile allowed_tools | **P1** | Config / Security | **Open PR** (needs author action) | **Yes** (#9753) |
| [#9995](https://github.com/zeroclaw-labs/zeroclaw/pull/9995) fix(hooks): harden webhook audit exports | **P1** | Security / Secrets | **Open PR** (needs author action) | **Yes** (#9995) |
| [#9281](https://github.com/zeroclaw-labs/zeroclaw/pull/9281) fix(config): roll back auto-created map aliases when config set fails | **P1** | Config / CLI | **Open PR** (needs author action) | **Yes** (#9281) |
| [#9954](https://github.com/zeroclaw-labs/zeroclaw/pull/9954) fix(sop): unwrap double-encoded step output before schema validation | **P1** | SOP / Runtime | **Open PR** (needs maintainer review) | **Yes** (#9954) |
| [#9470](https://github.com/zeroclaw-labs/zeroclaw/issues/9470) Correct Reliable fallback telemetry attribution | **P2** | Provider / Observability | Accepted | No |
| [#9193](https://github.com/zeroclaw-labs/zeroclaw/pull/9193) fix(providers): replace unsupported native env var guidance in missing-credential errors | **P3** | Providers / UX | **Open PR** | **Yes** (#9193) |

**Critical cluster**: **5 P1 bugs with open fix PRs** awaiting author/maintainer action — gateway session survival, cron job hangs, config security logic, webhook secret leakage, SOP double-encoding. The `ETXTBSY` test flake (#9965) is actively poisoning CI for unrelated PRs. macOS desktop regression (#7527) remains unreproducible but severe.

---

## 6. Feature Requests & Roadmap Signals

| Signal | Source | Likelihood for Next Version |
|--------|--------|----------------------------|
| **OpenAI Chat Completions API profile** | [#8603](https://github.com/zeroclaw-labs/zeroclaw/issues/8603) (21 comments, P2, high risk) | **Very High** — ecosystem compatibility blocker; multiple client integrations waiting |
| **Runtime-owned conversation sessions** | [#9487](https://github.com/zeroclaw-labs/zeroclaw/issues/9487) (17 comments, P2, high risk) | **High** — foundational for multi-transport, durable sessions; ratification in progress |
| **Unified attachment architecture** | [#9488](https://github.com/zeroclaw-labs/zeroclaw/issues/9488) (16 comments, P2, high risk) | **High** — reduces channel-specific debt; pairs with #9487 |
| **Anthropic fallback/refusal handling** | [#9262–#9268](https://github.com/zeroclaw-labs/zeroclaw/pull/9262) (merged stack) | **Done** — landed in last 24h |
| **Memory storage / enrichment separation** | [#9103](https://github.com/zeroclaw-labs/zeroclaw/issues/9103) (12 comments, P2, needs author action) | **Medium-High** — architectural cleanup; Lucid connector blocked |
| **Realtime voice (Gemini Live) channel** | [#8780](https://github.com/zeroclaw-labs/zeroclaw/issues/8780) (11 comments, P2, needs author action, v2 rewrite) | **Medium** — feature-gated, broker contract redesign; post-v0.9.0 likely |
| **Computer-use / desktop automation** | [#6909](https://github.com/zeroclaw-labs/zeroclaw/issues/6909) (9 comments, P2, needs author action) | **Low-Medium** — security-hardened design needed; sidecar prototype exists |
| **Staged opt-in telemetry** | [#9621](https://github.com/zeroclaw-labs/zeroclaw/issues/9621) (5 comments, P2, needs maintainer review) | **Medium** — maintainers explicitly want usage data for decisions |
| **Agent Plugins 1.0 (skills + MCP) support** | [#9810](https://github.com/zeroclaw-labs/zeroclaw/issues/9810) (3 comments, P2, needs author action) | **Medium** — vendor-neutral standard; plugin ecosystem enablement |
| **SOP capability permission contract** | [#9598](https://github.com/zeroclaw-labs/zeroclaw/issues/9598) (4 comments, P2, needs maintainer review) | **High** — tracker #8288 targets 5/5 SOP capabilities for v0.9.0 |

**Prediction**: v0.9.0 will likely ship **Chat Completions profile**, **runtime-owned sessions**, **unified attachments**, **SOP control plane (5/5)**, and **Anthropic fallback stack** (done). Voice, desktop automation, and telemetry are strong candidates for v0.10+.

---

## 7. User Feedback Summary — Pain Points & Use Cases

| Pain Point | Evidence | Affected Users |
|------------|----------|----------------|
| **Cannot use ZeroClaw with Open WebUI / LobeChat / Continue.dev / Aider / LangChain** | [#8603](https://github.com/zeroclaw-labs/zeroclaw/issues/8603): "Clients that speak the OpenAI Chat Completions protocol... cannot use ZeroClaw agents" | **All external tool users** — major adoption blocker |
| **Cron jobs hang indefinitely, lock DB, block scheduler** | [#9320](https://github.com/zeroclaw-labs/zeroclaw/pull/9320): "hung run never returned... `locked_at` lock held until daemon restart" | **Automation/ops users** running scheduled agents |
| **Dashboard disconnect kills agent turn** | [#9002](https://github.com/zeroclaw-labs/zeroclaw/pull/9002): "navigation, browser sleep, transient network loss detach client without cancelling work" | **Web dashboard users** — loss of long-running work |
| **macOS app unusable — blank window, permission detection broken** | [#7527](https://github.com/zeroclaw-labs/zeroclaw/issues/7527): "can't detect granted permissions... loose response, display empty page... window disappeared" | **macOS desktop users** — S1 severity |
| **Risk profile `allowed_tools: []` fails open (allows all tools)** | [#9753](https://github.com/zeroclaw-labs/zeroclaw/pull/9753): "explicit empty list fail open" | **Security-conscious operators** — config logic bug |
| **Webhook audit logs leak credentials** | [#9995](https://github.com/zeroclaw-labs/zeroclaw/pull/9995): "scrub common credentials, provider-token patterns... from webhook audit arguments" | **All webhook users** — security exposure |
| **Leak detector redacts public blockchain addresses** | [#9825](https://github.com/zeroclaw-labs/zeroclaw/issues/9825): "payment-request URLs undeliverable... false positive" | **Crypto/payment integration users** |
| **No cron documentation; cannot pin cron to specific model** | [#7762](https://github.com/zeroclaw-labs/zeroclaw/issues/7762): "Cron documentation missing... no way to set a cron to run with a specific model" | **Cron users** — docs + config gap |
| **CI takes 15-20 min even for small changes** | [#7108](https://github.com/zeroclaw-labs/zeroclaw/issues/7108): "critical path usually Rust build caching" | **All contributors** — velocity drag |

**Satisfaction signals**: Users are **filing detailed RFCs and bug reports with reproduction steps** — indicates investment in the project. The **Anthropic fallback stack merge** shows responsive maintainer action on provider reliability. However, **P1 bugs with open PRs stagnating** (gateway, cron, config, SOP) and **macOS desktop regression unresolved** suggest release quality risk.

---

## 8. Backlog Watch — Stalled High-Value Items Needing Maintainer Attention

| Item | Age | Type | Why It Matters | Blocked On |
|------|-----|------|----------------|------------|
| [#8692](https://github.com

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/DenisZheng/agents-radar).*