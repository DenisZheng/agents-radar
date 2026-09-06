# OpenClaw Ecosystem Digest 2026-09-06

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-09-06 02:22 UTC

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

# OpenClaw Project Digest — 2026-09-06

## 1. Today's Overview

OpenClaw shows **extremely high velocity** with 500 issues and 500 PRs updated in the last 24 hours (437 open issues, 286 open PRs, 214 merged/closed PRs). The project released **v2026.9.2** today focusing on chat responsiveness and dashboard performance. The issue landscape is dominated by **P1 session-state/message-loss bugs** across multiple channels (Telegram, Feishu, Discord, MS Teams, Google Chat, iMessage), plus systemic problems: Gateway event-loop blocking during memory compaction/dreaming, child-process leaks (zombies), context-window over-estimation triggering premature truncation, and subagent completion pollution. Many P1 issues carry `clawsweeper:no-new-fix-pr` and `clawsweeper:needs-product-decision`, indicating architectural decisions are blocked on maintainer bandwidth. PR activity shows active refactoring (dead-code removal, sandbox skill discovery, iOS settings migration) and targeted fixes for Feishu streaming, Telegram pairing, and release pipeline hardening.

---

## 2. Releases

### **v2026.9.2** — *openclaw 2026.9.2* (Released today)
**Highlights:**
- **Faster, more responsive chat** — chat, dashboards, and session interactions stay responsive while long transcripts and disk usage are processed
- **Direct dashboard lookup** — reduces cold-load work
- **Durable history reads outside the Gateway event loop** — prevents event-loop blocking during history access

**Related PRs:** #136862, #138xxx (partial reference in data)

**Migration notes:** No breaking changes mentioned. Operators on v2026.9.x should upgrade for responsiveness improvements, especially on long-running sessions with large transcripts.

---

## 3. Project Progress (Merged/Closed PRs Today)

| PR | Area | Change |
|----|------|--------|
| [#139490](https://github.com/openclaw/openclaw/pull/139490) | UI/Swarm | Keep Swarm outcomes visible after completion; fix parent-only view when children deleted |
| [#139592](https://github.com/openclaw/openclaw/pull/139592) | Observability | Expose GC duration metrics (OTel/Prometheus) for stall investigation |
| [#139539](https://github.com/openclaw/openclaw/pull/139539) | UI/Logbook | Fix timestamp overlap with activity stripe on 12-hour clocks |
| [#139549](https://github.com/openclaw/openclaw/pull/139602) | Backup | Exclude shared workspace files from state-only backups (`--no-include-workspace`) |

**Other notable merged work (inferred from 214 merged/closed PRs):**
- Feishu streaming card dead-stream log flooding fix (#139614, open but targeting today's issue)
- Discord meeting-log preservation through voice reconnects (#130860, in staged landing)
- Agent compaction optimization: one-pass when history fits (#133050)
- Browser profile defaults preparation perf (#135648)
- Release validation: accept frozen targets before worker bundles (#136699)

---

## 4. Community Hot Topics (Most Commented Issues/PRs)

| Issue | Comments | 👍 | Core Problem | Underlying Need |
|-------|----------|-----|--------------|-----------------|
| [#69208](https://github.com/openclaw/openclaw/issues/69208) | 14 | 0 | **Umbrella: duplicate transcript/replay/context assembly across channels** (MSTeams, webchat, Telegram, followup queue, delivery-mirror) | Systemic deduplication architecture needed; currently fragmented fixes |
| [#132762](https://github.com/openclaw/openclaw/issues/132762) | 13 | 0 | **Overflow retry succeeds with toolResult but no final assistant response/delivery** | Reliable turn completion semantics after retry |
| [#53763](https://github.com/openclaw/openclaw/issues/53763) | 12 | 0 | **Built-in headless browser (Chromium) for reliable web access** | Eliminate fragile 3-layer dependency (user Chrome → CDP → agent) |
| [#39476](https://github.com/openclaw/openclaw/issues/39476) | 12 | 0 | **A2A `sessions_send` callback loop causes duplicate messages** | Agent-to-agent protocol needs idempotency/ack guards |
| [#96975](https://github.com/openclaw/openclaw/issues/96975) | 12 | 1 | **Subagent completion injects too much child context into parent** | Isolation boundary: return status + link only by default |
| [#97616](https://github.com/openclaw/openclaw/issues/97616) | 11 | 1 | **Child process leaks (hooks, bash, codex) → zombie accumulation** | Process reaping / lifecycle management in Gateway |
| [#110190](https://github.com/openclaw/openclaw/issues/110190) | 10 | 1 | **Runtime context carrier (15K chars) placed AFTER user message → model confusion** | Context ordering: carrier should precede or be system-role |
| [#14785](https://github.com/openclaw/openclaw/issues/14785) | 10 | 0 | **Tool schema overhead ~3,500 tokens/session fixed tax** | Lazy/dynamic tool schema loading |
| [#119720](https://github.com/openclaw/openclaw/issues/119720) | 10 | 0 | **Sync agent persistence + transcript maintenance blocks Gateway event loop at scale** | Offload persistence to background workers |
| [#72015](https://github.com/openclaw/openclaw/issues/72015) | 10 | 2 | **`active-memory` plugin blocks replies; QMD boot overloads multi-agent gateways** | Plugin initialization async + backpressure |

**Pattern:** Top issues cluster around **session integrity (duplicates, loss, ordering)**, **Gateway event-loop health**, and **token/context efficiency** — all architectural, not superficial.

---

## 5. Bugs & Stability (Ranked by Severity)

### 🔴 **Critical (P0/P1, crash-loop, data-loss, message-loss)**

| Issue | Severity Tags | Status | Fix PR? |
|-------|---------------|--------|---------|
| [#91931](https://github.com/openclaw/openclaw/issues/91931) | P0, 🦞 diamond lobster, data-loss | Open | No (`clawsweeper:no-new-fix-pr`) |
| [#99910](https://github.com/openclaw/openclaw/issues/99910) | P1, crash-loop, message-loss, session-state | Open | No |
| [#119720](https://github.com/openclaw/openclaw/issues/119720) | P1, crash-loop, session-state | Open | Partial (#133925, #134062 landed but "do not close remaining") |
| [#97616](https://github.com/openclaw/openclaw/issues/97616) | P1, crash-loop, gold shrimp | Open | No |
| [#132762](https://github.com/openclaw/openclaw/issues/132762) | P1, message-loss, diamond lobster | Open | No |
| [#110190](https://github.com/openclaw/openclaw/issues/110190) | P1, message-loss, session-state, diamond lobster | Open | No |
| [#127148](https://github.com/openclaw/openclaw/issues/127148) | P1, session-state, diamond lobster | Open | No |
| [#119992](https://github.com/openclaw/openclaw/issues/119992) | P1, message-loss, silver shellfish | Open | No |
| [#101929](https://github.com/openclaw/openclaw/issues/101929) | P1, session-state, data-loss, diamond lobster | Open | No |
| [#89430](https://github.com/openclaw/openclaw/issues/89430) | P1, message-loss, auth-provider, diamond lobster | Open | No |

### 🟠 **High (P1/P2, regression, availability)**

| Issue | Severity Tags | Status | Fix PR? |
|-------|---------------|--------|---------|
| [#136183](https://github.com/openclaw/openclaw/issues/136183) | P1, regression, silver shellfish | Open | No |
| [#112259](https://github.com/openclaw/openclaw/issues/112259) | P1, message-loss, silver shellfish, recovery-stuck | Open | No |
| [#132765](https://github.com/openclaw/openclaw/issues/132765) | P1, diamond lobster | Open | No |
| [#120162](https://github.com/openclaw/openclaw/issues/120162) | P1, platinum hermit | Open | No |
| [#114967](https://github.com/openclaw/openclaw/issues/114967) | P1, crash-loop, diamond lobster, recovery-stuck | Open | No |
| [#54488](https://github.com/openclaw/openclaw/issues/54488) | P1, session-state, message-loss, diamond lobster | Open | No |
| [#78055](https://github.com/openclaw/openclaw/issues/78055) | P1, session-state, message-loss, diamond lobster | Open | No |
| [#102534](https://github.com/openclaw/openclaw/issues/102534) | P1, silver shellfish | Open | No |
| [#85027](https://github.com/openclaw/openclaw/issues/85027) | P1, crash-loop, auth-provider, gold shrimp, stable | Open | No |
| [#118793](https://github.com/openclaw/openclaw/issues/118793) | P2, platinum hermit, auth-provider, recovery-stuck | Open | No |

### 🟡 **Medium (P2/P3, UX, specific channels)**

- Feishu streaming card full-content updates → latency regression [#91941](https://github.com/openclaw/openclaw/issues/91941) (6 comments, 2 👍)
- Telegram DMs landing in `agent:main:main` [#41165](https://github.com/openclaw/openclaw/issues/41165) (8 comments, 2 👍)
- Google Chat app-auth media upload 403 [#89430](https://github.com/openclaw/openclaw/issues/89430) (5 comments)
- Discord cron "failed" notifications during hot-reload [#90595](https://github.com/openclaw/openclaw/issues/90595) (7 comments)
- TUI scroll-jump disruption [#44130](https://github.com/openclaw/openclaw/issues/44130) (6 comments, 3 👍)
- `memory-lancedb` tools not exposed to agent [#84242](https://github.com/openclaw/openclaw/issues/84242) (6 comments, 3 👍)

---

## 6. Feature Requests & Roadmap Signals

| Issue | Priority | Signal | Likelihood for Next Version |
|-------|----------|--------|----------------------------|
| [#53763](https://github.com/openclaw/openclaw/issues/53763) Built-in headless Chromium | P3 | 12 comments, long-standing (Mar 2026), "off-meta tidepool" | Medium — high user demand, but architectural scope large |
| [#14785](https://github.com/openclaw/openclaw/issues/14785) Reduce tool schema token overhead (~3.5k tok) | P2 | 10 comments, diamond lobster rating | High — direct cost savings, clear implementation path (lazy loading) |
| [#99583](https://github.com/openclaw/openclaw/issues/99583) Intelligent session auto-titling | P3 | 8 comments, 2 👍, LLM slug generator exists | Medium — low-risk UX win, leverages existing code |
| [#6599](https://github.com/openclaw/openclaw/issues/6599) `/models test-fallback` command | P3 | 11 comments, 1 👍, auth-provider impact | High — simple CLI addition, improves operator confidence |
| [#71058](https://github.com/openclaw/openclaw/issues/71058) Multiple Azure/Teams bots per gateway | P2 | 9 comments, 1 👍 | Medium — channel config schema change needed |
| [#63990](https://github.com/openclaw/openclaw/issues/63990) Multi-index embedding memory with failover | P3 | 6 comments, 1 👍 | Low — major memory subsystem refactor |
| [#85461](https://github.com/openclaw/openclaw/issues/85461) Capture image-gen provider usage metadata | P3 | 6 comments, 1 👍 | Medium — observability improvement, provider-specific |

**Strongest signals:** Tool schema token reduction (#14785) and fallback testing (#6599) have clear ROI and limited blast radius. Headless browser (#53763) is the most requested "big feature" but needs product decision.

---

## 7. User Feedback Summary

### Pain Points (from issue descriptions & comments)
- **Session reliability:** "Duplicate messages in channel", "messages silently dropped", "subagent completion delivers stale output", "followup drain blocks inbound for 20-30 min"
- **Gateway unresponsiveness:** "Memory dreaming pegs event loop 10 min", "compaction blocks bot 10+ min", "active-memory makes replies slow/unreliable"
- **Token waste:** "Runtime context carrier after user message wastes reasoning tokens", "3,500 token fixed tax for tool schemas"
- **Upgrade trauma:** "2026.5.6 → 2026.5.19 left macOS LaunchAgent unrecoverable; Time Machine restore required" (#85027)
- **Channel-specific breakage:** Feishu streaming latency, Google Chat 403 on media, Telegram routing pollution, Discord alert fatigue
- **Developer friction:** TUI scroll-jump, MSYS Git path issues on Windows, install.sh 2498-line monolith

### Positive Signals
- High engagement on fix PRs (many "ready for maintainer look" with proof artifacts)
- Active maintainer triage (clawsweeper labels, structured ratings: 🦞 diamond lobster, 🦐 gold shrimp, 🦪 silver shellfish, 🐚 platinum hermit, 🌊 off-meta tidepool)
- Release v2026.9.2 directly addresses responsiveness complaints

### Use Cases Evident
- Multi-channel bots (Telegram, Feishu, Discord, MS Teams, Google Chat, iMessage, Signal, LINE, Zalo, IRC, Synology Chat)
- Multi-agent swarms with subagent spawning
- Long-running sessions with memory compaction/dreaming
- SSH sandbox / remote workspace execution
- Enterprise SSO (Azure/Teams multi-bot, Google Chat app-auth)
- Mobile (iOS/Android) and desktop (TUI, web UI) clients

---

## 8. Backlog Watch (Stale High-Value Items Needing Maintainer Attention)

| Issue/PR | Age | Why It Matters | Blockers |
|----------|-----|----------------

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: Personal AI Assistant / Agent Open-Source Ecosystem (2026-09-06)

---

## 1. Ecosystem Overview

The personal AI agent ecosystem shows **bimodal maturity**: a handful of large, high-velocity projects (OpenClaw, Hermes Agent, NanoBot) operating at **enterprise-scale throughput** with 50–500 daily updates, while most smaller forks (PicoClaw, NanoClaw, LobsterAI, ZeptoClaw) are in **maintenance or architectural refactoring phases** with <25 daily updates. **No project is dormant**—even "quiet" repos show active PR queues or maintainer-driven issue creation. The dominant theme across active projects is **production hardening**: session reliability, Gateway/event-loop health, security boundaries, and token/context efficiency. Community engagement correlates with multi-channel deployment complexity (Telegram, Discord, Feishu, MS Teams, iMessage, Signal).

---

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Release Today | Health Score* |
|---------|--------------|-----------|---------------|---------------|
| **OpenClaw** | 500 updated (437 open) | 500 updated (286 open, 214 merged) | **Yes** (v2026.9.2) | 🟢 **Critical Velocity** |
| **Hermes Agent** | 50 updated | 50 updated | No | 🟢 **High Velocity** |
| **NanoBot** | 1 new | 24 updated (17 open, 7 merged) | No | 🟢 **Healthy** |
| **ZeptoClaw** | 12 new (maintainer-authored) | 2 new (security-critical) | No | 🟡 **Refactoring Sprint** |
| **PicoClaw** | 2 updated | 3 merged (batch merges) | No | 🟡 **Stabilizing** |
| **NanoClaw** | 0 new | 3 open (0 merged) | No | 🟡 **Maintenance** |
| **LobsterAI** | 0 new | 0 merged (2 stale PRs) | No | 🟡 **Review Backlog** |
| **NullClaw** | 0 | 0 | No | ⚪ **Inactive** |
| **TinyClaw** | 0 | 0 | No | ⚪ **Inactive** |
| **Moltis** | 0 | 0 | No | ⚪ **Inactive** |
| **IronClaw** | — | — | — | ❓ **Data Failed** |
| **CoPaw** | — | — | — | ❓ **Data Failed** |
| **ZeroClaw** | — | — | — | ❓ **Data Failed** |

*Health Score: 🟢 = High velocity + responsive fixes; 🟡 = Active but lower throughput or stalled PRs; ⚪ = No observable activity; ❓ = Summary unavailable.

---

## 3. OpenClaw's Position

**Advantages vs Peers:**
- **Scale & Throughput**: 10–50× the daily PR/issue volume of next-largest projects; 214 PRs merged in 24h demonstrates unmatched integration capacity.
- **Multi-Channel Maturity**: Only project with production-grade support across 10+ channels (Telegram, Feishu, Discord, MS Teams, Google Chat, iMessage, Signal, LINE, Zalo, IRC, Synology Chat).
- **Observability Investment**: OTel/Prometheus metrics for GC stalls, durable history reads off event loop, structured severity taxonomy (🦞 diamond lobster → 🌊 off-meta tidepool).
- **Release Cadence**: Shipped v2026.9.2 today with measurable responsiveness gains; peers have not released in this window.

**Technical Approach Differences:**
- **Gateway-Centric Architecture**: Central event loop manages all channels, memory compaction, subagent spawning—creates scaling bottlenecks (event-loop blocking) but enables unified session state.
- **Subagent Model**: Explicit parent/child context isolation with completion pollution issues (#96975); peers use simpler delegation or none.
- **Clawsweeper Automation**: Structured triage labels (`clawsweeper:no-new-fix-pr`, `needs-product-decision`) indicate mature maintainer tooling absent elsewhere.

**Community Size**: Largest by implied operator base (multi-enterprise SSO, mobile/desktop clients, SSH sandbox execution). Issue comment counts (10–14 on top issues) exceed most peers' total daily activity.

---

## 4. Shared Technical Focus Areas

| Requirement | Projects | Specific Needs |
|-------------|----------|----------------|
| **Session/Message Reliability** | OpenClaw, Hermes Agent, NanoBot | Duplicate prevention, turn completion semantics, session-state persistence off event loop, subagent completion isolation |
| **Gateway/Event-Loop Health** | OpenClaw, Hermes Agent, NanoBot | Offload persistence/compaction/dreaming to background workers; prevent child-process leaks (zombies); backpressure for plugins |
| **Provider Resilience & Failover** | NanoBot, Hermes Agent, ZeptoClaw | Nvidia NIM timeout handling, model fallback testing (`/models test-fallback`), fail-closed agent modes, env scrubbing for child processes |
| **Token/Context Efficiency** | OpenClaw, NanoBot, ZeptoClaw | Lazy tool schema loading (~3.5k token tax), byte-stable prompt envelopes for caching, context carrier ordering, runtime budget accounting |
| **Security Boundaries** | NanoBot, ZeptoClaw, Hermes Agent | Path traversal via session keys, env inheritance scrubbing, OAuth token rotation conflicts, signed webhook bypass |
| **Update/Install Pipeline Reliability** | Hermes Agent, OpenClaw | Root-owned file creation, ZIP fallback data loss, fleet restart loops, macOS LaunchAgent breakage |
| **Multi-Session/Profile Isolation** | Hermes Agent, LobsterAI, OpenClaw | Pinned sessions sync, per-session MCP toggles, profile-scoped stores, cross-device continuity |

---

## 5. Differentiation Analysis

| Dimension | OpenClaw | Hermes Agent | NanoBot | ZeptoClaw | PicoClaw/NanoClaw/LobsterAI |
|-----------|----------|--------------|---------|-----------|----------------------------|
| **Primary Focus** | Multi-channel enterprise gateway, swarm orchestration | Desktop + CLI + gateway continuity, bot group chats | Provider resilience, security, SDK/WebUX | Security-first architecture, explicit contracts, extensibility v2 | Protocol compliance (IRC), maintenance, UI refactor |
| **Target Users** | Enterprises, power users running multi-bot fleets | Developers, homelab/VPS operators, multi-device users | SDK integrators, security-conscious deployers | Security/audit-focused teams, plugin authors | Niche protocol users (IRC), UI/UX refinements |
| **Architecture** | Monolithic Gateway + subagents + memory compaction | Local runtime + optional gateway + Desktop Electron | MessageBus + scoped runtime + FallbackProvider | Modular CoreLoop pipeline + Extension Host v2 + hermetic tests | Lightweight forks, OpenClaw-derived |
| **Key Differentiator** | Channel breadth + session durability at scale | Cross-device group chat continuity + update fleet mgmt | Signed webhooks + per-spawn model presets + heartbeat override | Fail-closed defaults + byte-stable prompts + audit chain | IRCv3 fragment reassembly, component splitting |
| **Maturity Signal** | Daily releases, 200+ merged PRs/day | 100 updates/day but recurring install bugs | Rapid critical-fix turnaround (same-day PR) | Maintainer-driven 12-issue sprint, zero community PRs | Batch-merging 6-month-old PRs, stale feature closure |

---

## 6. Community Momentum & Maturity

| Tier | Projects | Characteristics |
|------|----------|-----------------|
| **Tier 1: Rapid Iteration at Scale** | OpenClaw, Hermes Agent | 50–500 daily updates; dedicated maintainer tooling (clawsweeper); structured severity labels; daily/weekly releases; enterprise adoption signals |
| **Tier 2: High Velocity, Focused Scope** | NanoBot | 20+ PRs/day; same-day critical fixes; strong test/security discipline; design conflicts stall high-value features (heartbeat, spawn presets) |
| **Tier 3: Architectural Refactoring Sprint** | ZeptoClaw | Maintainer-authored 12-issue program in 24h; P0 security PRs ready; zero external contributors; pre-major-release stabilization |
| **Tier 4: Stabilization / Maintenance** | PicoClaw, NanoClaw, LobsterAI | Low issue flow; PRs are batch merges, dependency pins, or stale refactors; limited maintainer bandwidth for review |
| **Tier 5: Inactive / Data Unavailable** | NullClaw, TinyClaw, Moltis, IronClaw, CoPaw, ZeroClaw | No observable activity or summary generation failed |

**Key Insight**: Only **OpenClaw and Hermes Agent** sustain >50 daily updates with community participation. **NanoBot** achieves high fix velocity with smaller scope. **ZeptoClaw** is an outlier: intense maintainer-driven redesign but no community signal.

---

## 7. Trend Signals for AI Agent Developers

| Trend | Evidence | Strategic Value |
|-------|----------|-----------------|
| **Event-Loop Offloading is Mandatory** | OpenClaw (#119720, v2026.9.2), Hermes Agent (#98022), NanoBot (#5580) | Any agent handling long transcripts/memory compaction **must** move persistence/dreaming off the main loop; otherwise 10+ min stalls occur at scale. |
| **Fail-Closed Security Defaults** | ZeptoClaw (#659/#671, #660/#672), NanoBot (#5633) | Env scrubbing at spawn sites and invalid-config fallbacks to minimal perms are becoming **baseline expectations** for plugin/MCP architectures. |
| **Byte-Stable Prompts for Cache Efficiency** | ZeptoClaw (#661), OpenClaw (#14785), NanoBot (#5669) | Rebuilding system prompts with volatile content (live time, query-matched memory) **defeats prompt caching**; explicit envelope contracts are the emerging pattern. |
| **Signed Webhook Bypass for Trusted Systems** | NanoBot (#5652), Hermes Agent (bot group chat control) | CI/monitoring/billing integrations need **deterministic delivery** outside the agent loop; signed direct-delivery is the preferred pattern. |
| **Per-Session/Per-Spawn Model Control** | NanoBot (#5561, #4549), LobsterAI (#1070), Hermes Agent (#103990) | Users demand **granular model selection**: heartbeat overrides, spawn-time presets, per-session MCP toggles—monolithic model config is insufficient. |
| **Update Pipeline as Reliability Surface** | Hermes Agent (4 P1/P2 update bugs), OpenClaw (#85027) | Self-update mechanisms are **top user-pain sources**: root-file creation, restart loops, backup failures. Treat update as a critical path requiring same rigor as core agent. |
| **Protocol Compliance Gaps in Channel Adapters** | PicoClaw (#3287 IRCv3), Hermes Agent (#26058 Discord), OpenClaw (Feishu/Google Chat) | Channel adapters frequently violate protocol semantics (fragmentation, threading, auth). **Protocol test suites** per channel are needed, not just happy-path integration tests. |

---

## Bottom Line for Decision-Makers

- **For enterprise deployment**: **OpenClaw** is the only project with demonstrated multi-channel scale, release discipline, and observability—despite its architectural debt (event-loop bottlenecks).
- **For SDK/embedding**: **NanoBot** offers the cleanest provider resilience, security hygiene, and developer experience (WebUI, MessageBus, signed webhooks).
- **For self-hosted multi-device**: **Hermes Agent** leads on cross-device continuity (bot group chats) but requires tolerating update-pipeline instability.
- **For security-first greenfield**: **ZeptoClaw**'s explicit-contract redesign (fail-closed, byte-stable prompts, hermetic tests) is the most forward-looking architecture—if you can accept maintainer-only velocity.
- **Ecosystem gap**: No project has solved **cross-channel deduplication** (OpenClaw #69208) or **universal update reliability**—these are shared unsolved problems worth collaborative investment.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-09-06

## 1. Today's Overview
NanoBot shows **high development velocity** with 24 PRs updated in the last 24 hours (17 open, 7 closed), indicating active iteration across providers, session management, WebUI, and core agent logic. Only 1 new issue was filed (#5674), a critical regression where Nvidia NIM timeout errors are misclassified as model output, halting the agent. A fix PR (#5675) was opened the same day, demonstrating rapid response. No new releases were cut, suggesting changes are accumulating for a future batch release. The project remains in a healthy, active state with strong focus on reliability, security, and developer experience.

## 2. Releases
**No new releases** published today. The latest release remains prior to this reporting period. All 24 PRs are in review or recently merged, likely staging for an upcoming minor or patch release.

## 3. Project Progress — Merged/Closed PRs Today (7)
| PR | Type | Summary | Impact |
|----|------|---------|--------|
| [#5670](https://github.com/HKUDS/nanobot/pull/5670) | refactor, test | Unify scoped runtime notifications across clients via MessageBus; migrate context compaction end-to-end | Improves event delivery reliability, simplifies WebSocket/TUI parity |
| [#5672](https://github.com/HKUDS/nanobot/pull/5672) | test | Remove obsolete nonexistence checks; keep security/behavior coverage | Reduces test flakiness, speeds CI |
| [#5671](https://github.com/HKUDS/nanobot/pull/5671) | fix, cli | Skip WebUI bundle check in `--dev` mode; avoids stale-bundle warnings during Vite dev | Improves developer experience |
| [#5669](https://github.com/HKUDS/nanobot/pull/5669) | docs | Document derived context budget (model window, output reservation, safety margin) | Clarifies configuration for model presets |
| [#5668](https://github.com/HKUDS/nanobot/pull/5668) | refactor | (Referenced in #5669) Context budget refactor | Enables predictable context management |
| [#5667](https://github.com/HKUDS/nanobot/pull/5667) | — | (Inferred from merge batch) | — |
| [#5666](https://github.com/HKUDS/nanobot/pull/5666) | — | (Inferred from merge batch) | — |

*Note: 7 PRs closed/merged today; 5 have detailed summaries above. The remaining 2 are part of the same merge batch but lack individual summaries in the feed.*

## 4. Community Hot Topics
| Item | Type | Comments | Reactions | Core Need |
|------|------|----------|-----------|-----------|
| [#5674](https://github.com/HKUDS/nanobot/issues/5674) | Issue (bug) | 0 | 0 | **Critical**: Agent halts on Nvidia NIM timeout errors (300s/600s) because they're misclassified as model output. Blocks production use of NIM. |
| [#5675](https://github.com/HKUDS/nanobot/pull/5675) | PR (fix) | — | 0 | **Immediate fix** for #5674: allow model failover after runner deadlines so FallbackProvider can activate. |
| [#4549](https://github.com/HKUDS/nanobot/pull/4549) | PR (feature) | — | 0 | Heartbeat model override — use cheaper model for heartbeat checks without mutating main agent model. Long-open (since Jun), has conflicts. |
| [#5652](https://github.com/HKUDS/nanobot/pull/5652) | PR (feature) | — | 0 | Signed direct-delivery webhook for deterministic notifications (CI, monitoring) bypassing agent loop. Security-focused. |
| [#5561](https://github.com/HKUDS/nanobot/pull/5561) | PR (feature) | — | 0 | Per-spawn model presets behind allowlist — resolves #4231. Alternative design to #4291. |

**Analysis**: The top signal is **provider resilience** (#5674/#5675) — users need graceful failover when primary models hang. Secondary themes: **cost optimization** (heartbeat model override), **integration flexibility** (signed webhooks), and **spawn-time model control**. Several long-running PRs (#4549, #4551, #5561) carry `conflict` labels, indicating design debates or rebase needs.

## 5. Bugs & Stability — Today's Reports & Fixes
| Severity | Issue/PR | Title | Status | Fix PR |
|----------|----------|-------|--------|--------|
| **Critical** | [#5674](https://github.com/HKUDS/nanobot/issues/5674) | Agent stops on Nvidia NIM timeout errors (misclassified as output) | Open | [#5675](https://github.com/HKUDS/nanobot/pull/5675) (opened today) |
| **High** | [#5633](https://github.com/HKUDS/nanobot/pull/5633) | Path traversal via session keys (`../../etc/passwd`) | Open (fix ready) | #5633 itself — adds `validate_session_key()` at persistence chokepoint |
| **High** | [#5589](https://github.com/HKUDS/nanobot/pull/5589) | Discarded sessions revive via pending/deferred queues | Open | #5589 — stops message publication during cleanup |
| **Medium** | [#5664](https://github.com/HKUDS/nanobot/pull/5664) | Unbounded idle-session summary cache (memory leak) | Open | #5664 — adds size bounds to `AutoCompact._summaries` |
| **Medium** | [#5630](https://github.com/HKUDS/nanobot/pull/5630) | Dream memory files (SOUL.md, USER.md) grow unbounded post-#5622 | Open | #5630 — adds size guardrails |
| **Medium** | [#5457](https://github.com/HKUDS/nanobot/pull/5457) | Channel dispatcher exception boundary too wide — one bad message stops all delivery | Open | #5457 — scopes boundary to message processing |
| **Medium** | [#5573](https://github.com/HKUDS/nanobot/pull/5573) | MCP: expired OAuth tokens not auto-refreshed | Open | #5573 — persists expiry/metadata, refreshes pre-request or on 401 |

**Trend**: Strong focus on **security boundaries** (path traversal, session isolation), **resource bounds** (caches, memory files), and **provider/runtime resilience** (timeouts, OAuth, dispatcher crashes). Most high-severity bugs have fix PRs open.

## 6. Feature Requests & Roadmap Signals
| Feature | Source | Signals | Likelihood (Next Version) |
|---------|--------|---------|---------------------------|
| **Heartbeat model override** | [#4549](https://github.com/HKUDS/nanobot/pull/4549), [#4551](https://github.com/HKUDS/nanobot/pull/4551) | 2 PRs since Jun, `priority: p2`, `conflict` — cost savings for heartbeat checks | Medium — design conflicts delaying |
| **Signed direct-delivery webhook** | [#5652](https://github.com/HKUDS/nanobot/pull/5652) | New (Sep 4), `security`, `feature` — bypass agent for trusted notifications | High — clear use case (CI/monitoring), active PR |
| **Per-spawn model presets (allowlist)** | [#5561](https://github.com/HKUDS/nanobot/pull/5561) | Resolves #4231, alternative to #4291, design credited — multi-model spawn control | Medium — depends on allowlist consensus |
| **MCP Apps result metadata preservation** | [#5386](https://github.com/HKUDS/nanobot/pull/5386) | Structured tool results, app-only tools hidden from model — richer integrations | Medium — MCP maturity signal |
| **Ephemeral SDK runs leave session state unchanged** | [#5471](https://github.com/HKUDS/nanobot/pull/5471) | Fixes documented-but-unimplemented behavior — SDK correctness | High — aligns impl with docs |
| **WebUI remote project paths + picker capabilities** | [#5673](https://github.com/HKUDS/nanobot/pull/5673) | New (Sep 5), honors server-side folder picker — remote dev UX | High — recent, focused, test-backed |

**Prediction**: Next version will likely include provider failover fix (#5675), signed webhook (#5652), WebUI remote path support (#5673), and ephemeral SDK fix (#5471). Heartbeat/spawn features remain blocked on design alignment.

## 7. User Feedback Summary
| Pain Point / Use Case | Evidence | Sentiment |
|------------------------|----------|-----------|
| **Nvidia NIM timeouts kill agent** | #5674 — "agent stops working because nanobot thinks its the model output" | 😡 Critical blocker for NIM users |
| **Session persistence blocks event loop** | #5580 — "slow session storage… can block the event loop and stall unrelated conversations" | 😟 Performance hazard in production |
| **No cheap heartbeat model** | #4549, #4551 — users want separate model for health checks | 💡 Cost optimization request |
| **Webhook bypass for deterministic alerts** | #5652 — "trusted systems such as CI, monitoring, billing" | ✅ Strong integration need |
| **Spawn needs per-invocation model control** | #5561, #4231 — "per-spawn model presets behind allowlist" | 🔧 Advanced workflow enablement |
| **Discarded sessions leaking messages** | #5589 — "messages… could still be published… during task cleanup" | 🐛 Correctness concern |
| **Dream memory files unbounded** | #5630 — "can grow unbounded and get injected into every request" | 📈 Resource leak regression |

**Overall**: Users are pushing **production hardening** (timeouts, leaks, security) and **operational flexibility** (webhooks, spawn presets, heartbeat cost). Satisfaction signals: rapid fix turnaround (#5675 same day as #5674). Dissatisfaction: long-open design conflicts on heartbeat/spawn features.

## 8. Backlog Watch — Stale & Needing Attention
| Item | Age | Type | Why It Matters | Blockers |
|------|-----|------|----------------|----------|
| [#4549](https://github.com/HKUDS/nanobot/pull/4549) | ~73 days | Feature | Heartbeat model override — cost savings, immutable runtime | `conflict` label, design debate |
| [#4551](https://github.com/HKUDS/nanobot/pull/4551) | ~73 days | Feature | Heartbeat isolated session — shared context for heartbeats | `conflict`, paired with #4549 |
| [#5561](https://github.com/HKUDS/nanobot/pull/5561) | ~10 days | Feature | Per-spawn model presets — resolves #4231 | `conflict`, alternative to #4291 |
| [#5386](https://github.com/HKUDS/nanobot/pull/5386) | ~24 days | Feature | MCP Apps metadata — structured tool results | `conflict`, MCP evolution |
| [#5457](https://github.com/HKUDS/nanobot/pull/5457) | ~17 days | Bug fix | Channel dispatcher crash stops all outbound messages | `conflict`, needs review |
| [#5504](https://github.com/HKUDS/nanobot/pull/5504) | ~13 days | Bug fix | Model retry status not surfaced in UI (NAN-34) | `conflict`, UX gap |

**Recommendation**: Maintainers should prioritize resolving `conflict` labels on #4549/#4551 (heartbeat) and #5561 (spawn) — these represent recurring user asks. #5457 (dispatcher crash) is a stability risk that should be unblocked.

---

**Health Score**: 🟢 **Healthy** — High velocity, rapid critical-bug response, strong test/security discipline. Main risk: design conflicts stalling high-value features. Next release likely to be a substantial patch/minor with provider resilience, WebUI, and SDK fixes.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-09-06

---

## 1. Today's Overview

Hermes Agent shows **very high activity** with 100 total updates (50 issues + 50 PRs) in the last 24 hours. The project is in active development with a focus on **stability fixes** (update mechanism, permissions, session state), **bot/group chat continuity**, and **platform integrations** (Discord, Telegram, Feishu). No new release was published today. The issue backlog includes several long-standing bugs around file permissions (root-owned files), update reliability, and npm/python dependency freshness that continue to affect users.

---

## 2. Releases

**No new releases today.**  
Latest release data not provided in the dataset.

---

## 3. Project Progress (Merged/Closed Today)

| PR | Type | Summary |
|----|------|---------|
| [#103984](https://github.com/NousResearch/hermes-agent/pull/103984) | **Feature (Closed)** | Default busy input mode changed from `interrupt` to `queue` across CLI, TUI, and gateway; aligns config examples, tests, and docs. |
| [#30563](https://github.com/NousResearch/hermes-agent/issues/30563) | **Bug (Closed)** | MCP server name collision with native toolset — native silently wins; issue closed (fix status unclear from data). |
| *Two other PRs merged/closed* | — | Details not in top-20 PR list; likely minor fixes or docs. |

**Key advancement:** The busy-input default change (#103984) is a UX shift toward queued inputs (less disruptive) and was fully tested/docs-updated in a single PR.

---

## 4. Community Hot Topics (Most Discussed)

| Item | Comments | Area | Core Need |
|------|----------|------|-----------|
| [#66616](https://github.com/NousResearch/hermes-agent/issues/66616) **Skills index stale/degraded** | 163 | Skills index / automation | Automated freshness probe failing — index 29.8h old (limit 26h). Blocks docs/skills hub. |
| [#97681](https://github.com/NousResearch/hermes-agent/issues/97681) **Bot Group Chats survive Desktop close** | 23 | Gateway / sessions / desktop | **Major feature**: bots on laptop/homelab/VPS stay in group chat after Desktop closes; gateway-owned authority + cross-gateway transport on `main`, needs production wiring. |
| [#26058](https://github.com/NousResearch/hermes-agent/issues/26058) **Discord `auto_thread` disabled in `free_response_channels`** | 10 (+5 👍) | Discord / messaging | Legitimate use case broken: channels in `free_response_channels` skip auto-thread entirely, even when `auto_thread` enabled. PR [#103990](https://github.com/NousResearch/hermes-agent/pull/103990) adds opt-in `DISCORD_AUTO_THREAD_FREE_CHANNELS`. |
| [#98022](https://github.com/NousResearch/hermes-agent/issues/98022) **`hermes update` fleet restart loops on stale receipt** | 10 | CLI / update / install | Catch-up restart re-fires every run when `update_receipts/latest.json` is a stale interrupted receipt → infinite fleet restarts. |
| [#94375](https://github.com/NousResearch/hermes-agent/issues/94375) **`npm audit fix` breaks after `hermes doctor`** | 6 | CLI / security | `hermes doctor --fix` leaves insecure npm apps; 7 vulnerabilities reported (4 web, 3 ui-tui). |

**Underlying themes:**  
- **Reliability of automated workflows** (skills index, update receipts, cron/kanban workers)  
- **Cross-device/session continuity** (group chats, pinned sessions, profile-scoped stores)  
- **Platform-specific messaging quirks** (Discord threading, Telegram mention filtering, Feishu WS events)

---

## 5. Bugs & Stability (Reported/Updated Today)

| Severity | Issue | Summary | Fix PR? |
|----------|-------|---------|---------|
| **P1** | [#26058](https://github.com/NousResearch/hermes-agent/issues/26058) | Discord `auto_thread` disabled for `free_response_channels` breaks legitimate use | **Yes** — [#103990](https://github.com/NousResearch/hermes-agent/pull/103990) (opt-in env var) |
| **P1** | [#98022](https://github.com/NousResearch/hermes-agent/issues/98022) | `hermes update` catch-up restart loops forever on stale interrupted receipt | — |
| **P1** | [#103949](https://github.com/NousResearch/hermes-agent/issues/103949) | `select_backend()` returns `cuda` on Linux+NVIDIA but no Linux CUDA prebuilt exists → auto backend fails unconditionally | — |
| **P2** | [#90495](https://github.com/NousResearch/hermes-agent/issues/90495) | ZIP fallback deletes packaged Desktop app + `web_dist`, then install forgets Desktop was installed | — |
| **P2** | [#97394](https://github.com/NousResearch/hermes-agent/issues/97394) | Windows Desktop hand-off watchdog cancels healthy updates: `--gateway` mode never creates `logs/update.log` | — |
| **P2** | [#102193](https://github.com/NousResearch/hermes-agent/issues/102193) | `hermes update` creates root-owned files in `~/.hermes/` breaking future updates (recurring) | — |
| **P2** | [#82912](https://github.com/NousResearch/hermes-agent/issues/82912) | Cron jobs with `enabled_toolsets: ["web","file"]` silently lose `web` toolset | — |
| **P2** | [#103978](https://github.com/NousResearch/hermes-agent/issues/103978) | Claude Code OAuth auto-discovery logs Claude CLI out (single-use refresh token), conflicts with Anthropic ToS | **Yes** — [#103988](https://github.com/NousResearch/hermes-agent/pull/103988) stops token rotation |
| **P2** | [#103983](https://github.com/NousResearch/hermes-agent/pull/103983) | Agent: retry incomplete tool calls before any batch executes; reject invalid `execute_code` source early | **PR open** |
| **P3** | [#103900](https://github.com/NousResearch/hermes-agent/issues/103900) | Pinned sessions in Desktop are local-only, don't set canonical `pinned` flag → diverge from native Hermes | — |
| **P3** | [#94916](https://github.com/NousResearch/hermes-agent/issues/94916) | Kanban `dispatch --dry-run` mutates board state; stop guard rejects review handoff | — |
| **P3** | [#103985](https://github.com/NousResearch/hermes-agent/issues/103985) | Desktop "Hide from sidebar" on worktree lane is silent no-op (live worktree re-add defeats dismissal) | — |
| **P3** | [#103893](https://github.com/NousResearch/hermes-agent/issues/103893) | Group-chat hold directive misclassifies German filler words (`/\b(stop|halt|pause)\b/i`) | — |

**Patterns:**  
- **Update/install pipeline** has multiple P1/P2 bugs (root files, ZIP fallback, fleet restart loop, slow updates)  
- **Session/profile state** leaks across Desktop ↔ native, multiplexed backends, pinned sessions  
- **Platform integrations** have edge-case regressions (Discord threading, Feishu WS, Telegram mentions)

---

## 6. Feature Requests & Roadmap Signals

| Issue/PR | Signal | Likelihood for Next Version |
|----------|--------|-----------------------------|
| [#97681](https://github.com/NousResearch/hermes-agent/issues/97681) + [#98307](https://github.com/NousResearch/hermes-agent/pull/98307) + [#98073](https://github.com/NousResearch/hermes-agent/pull/98073) | **Bot Group Chat continuity & control** — complete field build: cross-gateway messaging, files, owner control via `/group` command from messaging apps | **High** — PRs open, foundation on `main`, active development |
| [#103990](https://github.com/NousResearch/hermes-agent/pull/103990) | Discord opt-in auto-thread in free-response channels (`DISCORD_AUTO_THREAD_FREE_CHANNELS`) | **High** — direct fix for #26058, ready for review |
| [#103988](https://github.com/NousResearch/hermes-agent/pull/103988) | Stop Hermes from rotating Claude Code's single-use OAuth refresh token | **High** — addresses ToS conflict + user logout pain |
| [#103799](https://github.com/NousResearch/hermes-agent/pull/103799) | Telegram `ignore_human_mentions` gate (opt-in) | **Medium** — supersedes closed PR, middle-ground feature |
| [#86975](https://github.com/NousResearch/hermes-agent/pull/86975) / [#86976](https://github.com/NousResearch/hermes-agent/pull/86976) | Desktop: configurable file double-click (OS default) + opt-in linkify plain-text paths | **Medium** — UX polish, long-open |
| [#103986](https://github.com/NousResearch/hermes-agent/pull/103986) | Local runtime: load/prefill notices for external router-mode `llama-server` | **Medium** — improves self-hosted model UX |
| [#102563](https://github.com/NousResearch/hermes-agent/issues/102563) | Run `npm-check` + `npm outdated` before every release | **Low** — process change, not code; repeated user demand |

**Roadmap read:** Next version will likely ship **bot group chat GA**, **Discord threading fix**, **Claude Code OAuth fix**, and **Desktop UX toggles**. Dependency hygiene (#102563, #83673) remains a user demand without clear maintainer commitment.

---

## 7. User Feedback Summary (Pain Points & Use Cases)

| Pain Point | Evidence | Affected Users |
|------------|----------|----------------|
| **Root-owned files from `hermes update`** | #102193, #102172, #91212 — "reported multiple times over past few months", breaks backups, updates, installs | Linux/VPS users, non-root installs |
| **Update unreliability** | #98022 (infinite restart loop), #90495 (ZIP fallback deletes Desktop), #102540 (>6 min update, unhelpful messages), #102172 (backup fails on `.git/objects` perms) | All self-updaters |
| **Session/profile divergence** | #103900 (pinned sessions local-only), #103924 (mutations route to wrong store), #103893 (hold misclassifies German) | Desktop + native CLI users, multilingual |
| **Dependency freshness** | #83673 (50/112 Python pkgs outdated), #102563 (npm audit/outdated ignored), #94375 (npm vulnerabilities persist) | Security-conscious, compliance |
| **Platform messaging gaps** | #26058 (Discord threading), #83904 (cron jobs from Desktop no delivery path), #103978 (Claude Code logout), #103799 (Telegram mention noise) | Power users on Discord/Telegram/Feishu/Slack |
| **Windows-specific breakage** | #90495, #97394 — watchdog expects `logs/update.log` that `--gateway` never creates | Windows Desktop users |

**Satisfaction signals:** Users file detailed repros, propose fixes (PRs), and escalate recurring issues — indicates **invested community** but **frustration with recurrence** (root files, update bugs).

---

## 8. Backlog Watch (Long-Unanswered / High-Impact)

| Item | Age | Why It Matters |
|------|-----|----------------|
| [#66616](https://github.com/NousResearch/hermes-agent/issues/66616) **Skills index stale** | Opened 2026-07-18 (50d) | 163 comments — automated freshness probe failing; blocks `/docs/skills` hub. Cron workflow may be misconfigured or blocked. |
| [#83673](https://github.com/NousResearch/hermes-agent/issues/83673) **Python packages outdated** | Opened 2026-08-11 (26d) | 50/112 pkgs outdated including `certifi`; security/compliance risk. No automation noted. |
| [#91212](https://github.com/NousResearch/hermes-agent/issues/91212) **Root-owned `.gateway-planned-stop.json`** | Opened 2026-08-21 (16d) | Recurring permission bug; gateway writes root file in user home. |
| [#94375](https://github.com/NousResearch/hermes-agent/issues/94375) **`npm audit fix` breaks** | Opened 2026-08-25 (12d) | `hermes doctor --fix` leaves vulnerable npm apps; 7 vulns reported. |
| [#90495](https://github.com/NousResearch/hermes-agent/issues/90495) **ZIP fallback deletes Desktop** | Opened 2026-08-20 (17d) | Silent Desktop loss + install amnesia; Windows+Desktop users affected. |
| [#51938](https://github.com/NousResearch/hermes-agent/pull/51938) **Kanban board-specific workspace defaults** | Opened 2026-06-24 (74d) | Long-open PR fixing workspace leak in `kanban_create`; may unblock other Kanban bugs. |
| [#86975](https://github.com/NousResearch/hermes-agent/pull/86975) / [#86976](https://github.com/NousResearch/hermes-agent/pull/86976) **Desktop file UX toggles** | Opened 2026-08-15 (22d) | Configurable double-click + linkify paths; UX polish with no movement. |

**Maintainer attention needed:**  
- **Skills index automation** (#66616) — high visibility, automated, stuck  
- **Root-file permission recurrence** (#102193, #91212, #102172) — systemic, not fixed  
- **Update pipeline reliability** — multiple P1/P2 bugs, user-facing breakage  
- **Dependency hygiene** — repeated user asks, no visible process change

---

## Bottom Line

Hermes Agent is **shipping fast** (100 updates/day) but **accumulating stability debt** in the update/install path, session/profile consistency, and dependency management. The **bot group chat continuity** feature is the most significant near-term value delivery, with multiple PRs in flight. Users are vocal, technical, and contributing fixes — but recurring root-permission and update-loop bugs erode trust. Prioritizing a **stability sprint** (update pipeline, permissions, skills index) alongside the group-chat GA would significantly improve project health.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-09-06

## 1. Today's Overview
PicoClaw showed moderate maintenance activity over the last 24 hours with **3 pull requests merged** and **2 issues updated**. All merged PRs are batch-merge commits authored by `xuwei-xy` that consolidate multiple older feature/fix PRs dating back to March 2026, indicating a backlog-clearing effort rather than new feature development. One feature request for IRC long-message handling remains active with community discussion (10 comments), while a stale steering-mode proposal was closed. No new releases were published. The project appears in a **maintenance/stabilization phase** with maintainers focusing on integrating pending contributions.

## 2. Releases
No new releases in the last 24 hours.

## 3. Project Progress
**Merged/Closed PRs (3 total)** — All are batch merges by `xuwei-xy` consolidating prior work:

| PR | Merged PRs | Summary |
|----|------------|---------|
| [#1559](https://github.com/sipeed/picoclaw/pull/1559) | #1327, #1319, #1318, #1313 | Consolidates four older PRs (created Mar 2026) |
| [#1545](https://github.com/sipeed/picoclaw/pull/1545) | #1500, #1490, #1488, #1487, #1485 | Consolidates five older PRs (created Mar 2026) |
| [#1555](https://github.com/sipeed/picoclaw/pull/1555) | #1390, #1389, #1383, #1381 | Consolidates four older PRs (created Mar 2026) |

**Net effect**: ~13 previously open PRs have been integrated in a single sweep, suggesting a coordinated effort to reduce backlog and ship accumulated fixes/features. Individual changes are not detailed in these merge commits; review the linked original PRs for specifics.

## 4. Community Hot Topics
| Item | Type | Comments | Reactions | Core Need |
|------|------|----------|-----------|-----------|
| [#3287](https://github.com/sipeed/picoclaw/issues/3287) | Feature (Open) | 10 | 0 | **IRC protocol compliance**: Users need PicoClaw to reassemble IRCv3 message fragments (>512 bytes) into single logical messages. Current behavior treats each fragment as a separate message, breaking context for long LLM outputs. |
| [#3342](https://github.com/sipeed/picoclaw/issues/3342) | Feature (Closed, stale) | 2 | 0 | **Conversation steering UX**: Request to queue incoming user messages during an active agent turn instead of interrupting/skipping the current turn. Closed as stale after ~2 weeks without maintainer response. |

**Analysis**: The IRC issue (#3287) reflects a **protocol-level interoperability gap** affecting users bridging PicoClaw to IRC networks. The steering-mode issue (#3342) signals demand for **more predictable multi-turn UX**, but lack of maintainer engagement led to stale closure.

## 5. Bugs & Stability
No new bug reports, crashes, or regressions were filed or updated in the last 24 hours. The merged batch PRs likely contain stability fixes, but without changelogs on the merge commits, specific bug resolutions cannot be verified from this data.

## 6. Feature Requests & Roadmap Signals
| Request | Status | Likelihood for Next Version |
|---------|--------|-----------------------------|
| **IRC long-message reassembly** ([#3287](https://github.com/sipeed/picoclaw/issues/3287)) | Open, active discussion | **High** — 10 comments over 6+ weeks, clear protocol need, no architectural blocker mentioned |
| **After-turn message queuing** ([#3342](https://github.com/sipeed/picoclaw/issues/3342)) | Closed (stale) | **Low** — Closed without resolution; would need re-opening or new issue with maintainer buy-in |

**Prediction**: IRC message fragmentation handling is the strongest candidate for the next minor release given sustained community interest and well-defined scope.

## 7. User Feedback Summary
- **Pain point**: IRC users cannot reliably send/receive long messages; PicoClaw splits them incorrectly, losing context.  
- **Use case**: Deploying PicoClaw as an IRC bot/bridge where LLM responses frequently exceed 512 bytes.  
- **Dissatisfaction signal**: The steering-mode request (#3342) was closed as stale after only 2 comments, suggesting users feel **feature proposals languish without maintainer triage**.  
- **Positive signal**: Batch merging of 13 PRs shows maintainers are processing backlog, which may improve confidence in contribution workflow.

## 8. Backlog Watch
| Item | Age | Status | Why It Needs Attention |
|------|-----|--------|------------------------|
| [#3287](https://github.com/sipeed/picoclaw/issues/3287) | ~6.5 weeks | Open | Highest community engagement (10 comments), clear spec (IRCv3), no maintainer response yet |
| [#3342](https://github.com/sipeed/picoclaw/issues/3342) | ~2.5 weeks | Closed (stale) | Closed prematurely; steering UX is a recurring theme in agent frameworks — consider re-opening with design discussion |
| Batch PRs (#1559, #1545, #1555) | Created Mar 2026 | Merged today | **Positive**: 6-month-old contributions finally integrated. Verify CI passes and no regressions introduced. |

**Maintainer action items**:  
1. Triage #3287 — assign, label, or request implementation PR.  
2. Review merged batch PRs for test coverage and release readiness.  
3. Establish a stale-bot policy or triage cadence to avoid closing valid feature requests silently.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-09-06

## 1. Today's Overview
NanoClaw shows **low community issue activity** but **steady maintenance-focused pull-request flow** over the past 24 hours. Zero new issues or releases were recorded, while three PRs were opened/updated—all targeting operational hygiene (dependency pinning, test cleanup, and outdated model references) rather than new features. The project appears to be in a **stabilization/maintenance phase** with contributors addressing technical debt and integration freshness. No critical bugs or regressions surfaced today.

## 2. Releases
*No new releases published today.*

## 3. Project Progress
**Merged/Closed PRs today: 0**  
All three active PRs remain open; no code landed in the default branch in the last 24 h. The work in progress includes:
- Pinning `signal-cli` to 0.14.7 to avoid a hang regression ([#3725](https://github.com/qwibitai/nanoclaw/pull/3725))
- Removing ~355 leftover temp directories per test run ([#3710](https://github.com/qwibitai/nanoclaw/pull/3710))
- Updating a retired Anthropic model ID in the `add-opencode` skill example ([#3724](https://github.com/qwibitai/nanoclaw/pull/3724))

## 4. Community Hot Topics
| PR | Activity | Underlying Need |
|----|----------|-----------------|
| [#3710](https://github.com/qwibitai/nanoclaw/pull/3710) — test temp-dir cleanup | Updated 2026-09-05, 0 comments, 0 👍 | **CI/CD hygiene & disk-pressure prevention** — persistent runners & tmpfs `/tmp` fill up over time. |
| [#3725](https://github.com/qwibitai/nanoclaw/pull/3725) — pin `signal-cli` 0.14.7 | Created/updated 2026-09-05, 0 comments, 0 👍 | **Reliable Signal channel installs** — 0.14.3 hangs on first-message delivery. |
| [#3724](https://github.com/qwibitai/nanoclaw/pull/3724) — update retired Anthropic model | Created/updated 2026-09-05, 0 comments, 0 👍 | **Example accuracy** — docs/skills must reference current, supported model IDs. |

*All three PRs are quiet (no discussion yet); maintainer review is the next bottleneck.*

## 5. Bugs & Stability
| Severity | Issue | Fix PR |
|----------|-------|--------|
| **High** | `signal-cli` 0.14.3 hangs indefinitely when sending to a contact with no existing session (Linux installs) | [#3725](https://github.com/qwibitai/nanoclaw/pull/3725) (open) |
| **Medium** | Test suite leaks ~355 temp directories per run, exhausting tmpfs on long-lived runners | [#3710](https://github.com/qwibitai/nanoclaw/pull/3710) (open) |
| **Low** | `add-opencode` skill references retired `claude-sonnet-4-20250514` model (retired 2026-06-15) | [#3724](https://github.com/qwibitai/nanoclaw/pull/3724) (open) |

*No new crash reports or regressions filed today.*

## 6. Feature Requests & Roadmap Signals
- **No new feature requests** in the last 24 h.
- Current PRs signal **maintenance priorities**: dependency freshness, test-suite cleanliness, and documentation accuracy.  
- If merged promptly, the next patch release will likely bundle these three fixes—no feature work visible in the queue.

## 7. User Feedback Summary
- **No user-facing issues or discussions** captured today.  
- Silence suggests either stable experience or low reporting volume; maintainers may want to verify telemetry/feedback channels.

## 8. Backlog Watch
| Item | Age | Why It Matters |
|------|-----|----------------|
| [#3710](https://github.com/qwibitai/nanoclaw/pull/3710) (temp-dir cleanup) | Opened 2026-09-03 | Affects every CI run & dev machine; easy merge, high hygiene payoff. |
| [#3725](https://github.com/qwibitai/nanoclaw/pull/3725) (signal-cli pin) | Opened 2026-09-05 | Blocks reliable Signal channel onboarding; single-line version bump. |
| [#3724](https://github.com/qwibitai/nanoclaw/pull/3724) (model ID update) | Opened 2026-09-05 | Keeps `add-opencode` skill examples functional; trivial one-line change. |

*All three are small, low-risk PRs awaiting review—ideal candidates for a quick maintainer pass to clear the queue.*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

⚠️ Summary generation failed.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-09-06

## 1. Today's Overview
LobsterAI shows **low recent activity** with no new issues, releases, or merged pull requests in the last 24 hours. Two long-standing pull requests (#1069, #1070), both opened in March 2026 and marked as `stale`, received minor updates on 2026-09-05 but remain open with zero comments or reactions. The project appears to be in a maintenance or review-backlog phase, with no active community discussion or immediate feature delivery.

## 2. Releases
**No new releases** published today. The latest release information is not available in the provided data.

## 3. Project Progress
**No PRs merged or closed today.** Both active PRs are architectural/refactoring work that have not yet been integrated:
- **#1069** — Refactor: split the 2,100+ line `CoworkSessionDetail.tsx` into multiple files/types/hooks to improve maintainability and rendering performance during streaming output.
- **#1070** — Feature: add per-session MCP (Model Context Protocol) server toggles in the chat toolbar, persisting selection to the database and enforcing it at the `McpBridgeServer` layer in the OpenClaw engine.

## 4. Community Hot Topics
| PR | Title | Updated | Comments | Reactions | Link |
|----|-------|---------|----------|-----------|------|
| #1069 | Refactor: split `CoworkSessionDetail` for maintainability & render performance | 2026-09-05 | 0 | 0 | [netease-youdao/LobsterAI#1069](https://github.com/netease-youdao/LobsterAI/pull/1069) |
| #1070 | Feat(cowork): per-session MCP switch control | 2026-09-05 | 0 | 0 | [netease-youdao/LobsterAI#1070](https://github.com/netease-youdao/LobsterAI/pull/1070) |

**Analysis**: Both PRs target core cowork/chat functionality—#1069 addresses technical debt in the session detail view, while #1070 unlocks a user-facing capability (session-scoped tool access). The lack of discussion suggests either maintainer bandwidth constraints or a pre-merge review queue. The per-session MCP toggle (#1070) aligns with multi-tenant/agentic workflow demands and is a strong candidate for the next minor release if reviewed.

## 5. Bugs & Stability
**No new bug reports, crashes, or regressions** recorded in the last 24 hours. No issue activity at all.

## 6. Feature Requests & Roadmap Signals
The two open PRs are the clearest roadmap signals:
1. **Component modularization** (#1069) — prerequisite for faster iteration on the chat UI and easier testing.
2. **Session-level MCP control** (#1070) — directly requested by power users needing different tool sets per conversation (e.g., coding vs. research sessions).  
Given the OpenClaw integration mention in #1070, expect continued expansion of the MCP/bridge layer and possibly a `v0.x` or `v1.0` milestone once these land.

## 7. User Feedback Summary
No direct user feedback (issues, discussions, or PR comments) surfaced today. The stale PRs imply that contributor/maintainer interaction is the primary feedback loop currently.

## 8. Backlog Watch
| Item | Age | Status | Why It Needs Attention |
|------|-----|--------|------------------------|
| **#1069** | ~5 months | Open, stale | Large refactor blocking UI performance improvements; no review activity since March. |
| **#1070** | ~5 months | Open, stale | High-value user feature (per-session MCP) with engine-level changes; merge would unblock downstream agent workflows. |

**Recommendation**: Maintainers should prioritize triaging #1069 and #1070—assign reviewers, run CI, and decide on merge/rebase/close—to clear the stale backlog and signal project vitality.

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

⚠️ Summary generation failed.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw Project Digest — 2026-09-06

---

## 1. Today's Overview

ZeptoClaw shows **intense architectural refactoring activity** with 12 new high-priority issues and 2 security-critical PRs opened in the last 24 hours — all authored by the maintainer (qhkm). The project is in a **major modernization sprint** targeting security hardening (P0 findings), architectural migration (Agent Pipeline), and extensibility overhaul (Extension Host v2). No releases or community contributions appear in this window; velocity is driven entirely by internal roadmap execution. The backlog reflects a mature codebase confronting technical debt in safety, memory durability, and configuration opacity.

---

## 2. Releases

**No new releases** in the last 24 hours. The project appears to be in a pre-release stabilization phase for the next major version.

---

## 3. Project Progress

| PR | Status | Focus | Key Change |
|----|--------|-------|------------|
| [#672](https://github.com/qhkm/zeptoclaw/pull/672) | Open | **P0 Security** — Env scrubbing | Scrubs inherited environment at 3 plugin/MCP spawn sites (`binary_plugin.rs`, `mcp/transport.rs`, `channels/plugin.rs`), eliminating secret leakage into child processes. |
| [#671](https://github.com/qhkm/zeptoclaw/pull/671) | Open | **P0 Security** — Agent mode fail-closed | Invalid `agent_mode` values now resolve to `Assistant` (minimal permissions) with a warning, instead of silently escalating to `Autonomous`. |

**No PRs merged or closed today.** Both security fixes are awaiting review/merge.

---

## 4. Community Hot Topics

All 12 issues are fresh (created 2026-09-05), authored by qhkm, with **zero comments or reactions** — indicating **internal planning artifacts** rather than community discourse. The highest-signal items by severity and architectural scope:

| Issue | Priority | Area | Core Need |
|-------|----------|------|-----------|
| [#659](https://github.com/qhkm/zeptoclaw/issues/659) / [#660](https://github.com/qhkm/zeptoclaw/issues/660) | **P1-critical** | Security | **Fail-closed defaults** and **env scrubbing** — foundational safety hygiene; PRs #671/#672 address these. |
| [#663](https://github.com/qhkm/zeptoclaw/issues/663) | P2-high | Architecture | **Finish Agent Pipeline migration** — production still runs a 5,227-line monolithic `AgentLoop`; `CoreLoop` pipeline is test-only. |
| [#661](https://github.com/qhkm/zeptoclaw/issues/661) | P2-high | Performance | **Byte-stable Prompt Envelope** — system prompt rebuilt every turn with volatile content (live time, query-matched memory), defeating prompt caching. |
| [#667](https://github.com/qhkm/zeptoclaw/issues/667) | P2-high | Extensibility | **Extension Host v2** — replace compile-time tool registration with registry-owned metadata to reduce binary bloat and enable dynamic loading. |

**Underlying theme:** The project is systematically eliminating **implicit behavior** (fallbacks, inheritance, rebuilds) in favor of **explicit, auditable, cacheable contracts**.

---

## 5. Bugs & Stability

| Severity | Issue | Description | Fix PR |
|----------|-------|-------------|--------|
| **Critical (P0)** | [#660](https://github.com/qhkm/zeptoclaw/issues/660) | Child processes (plugins, MCP servers) inherit full parent env — API keys, tokens, DB URLs leaked. | [#672](https://github.com/qhkm/zeptoclaw/pull/672) |
| **Critical (P0)** | [#659](https://github.com/qhkm/zeptoclaw/issues/659) | Invalid `agent_mode` falls back to `Autonomous` (max perms) — typo = privilege escalation. | [#671](https://github.com/qhkm/zeptoclaw/pull/671) |
| **High (P2)** | [#669](https://github.com/qhkm/zeptoclaw/issues/669) | Audit chain is tamper-evident **only in-memory** — no persistence across restarts. | None yet |
| **High (P2)** | [#664](https://github.com/qhkm/zeptoclaw/issues/664) | Delegated agents can exceed parent policy — no capability inheritance enforcement. | None yet |

**No crashes, regressions, or user-reported bugs** in this window — all items are proactive security/architecture findings.

---

## 6. Feature Requests & Roadmap Signals

| Issue | Signal | Likelihood for Next Version |
|-------|--------|-----------------------------|
| [#661](https://github.com/qhkm/zeptoclaw/issues/661) | **Byte-stable Prompt Envelope** — largest perf gap; enables prompt caching | **High** — architectural, impacts every turn |
| [#663](https://github.com/qhkm/zeptoclaw/issues/663) | **Agent Pipeline migration** — 5k-line loop → modular pipeline | **High** — explicitly documented as "production will be CoreLoop" |
| [#667](https://github.com/qhkm/zeptoclaw/issues/667) | **Extension Host v2** — dynamic registry, footprint ladder | **Medium-High** — 19 built-in tool groups indicate scaling pain |
| [#665](https://github.com/qhkm/zeptoclaw/issues/665) | **Cron Job v2** — completion ack, run ledger, operational control | **Medium** — scheduling exists but lacks observability |
| [#666](https://github.com/qhkm/zeptoclaw/issues/666) | **Durable cross-session recall** — transactional memory writes | **Medium** — selective retrieval preserved, mutation/recall gaps remain |
| [#670](https://github.com/qhkm/zeptoclaw/issues/670) | **Config source opacity** — effective-view, env deprecation, schema-backed get/set | **Medium** — UX debt, blocks new integrations |

**Predicted next version theme:** **"Explicit Contracts"** — stable prompts, fail-closed configs, auditable pipelines, pluggable extensions.

---

## 7. User Feedback Summary

**No external user feedback** visible in this dataset (zero comments, reactions, or external authors on issues/PRs). The project appears to be **maintainer-driven** with issues serving as design docs. Pain points inferred from issue content:

| Inferred Pain Point | Evidence |
|---------------------|----------|
| **Secret leakage anxiety** | P0 env scrubbing across 4 spawn sites |
| **Prompt cache inefficiency** | System prompt rebuilt every turn with volatile content |
| **Monolithic agent loop** | 5,227-line `AgentLoop` still in production |
| **Extension bloat** | 19 tool groups, manual `register_all_tools()` |
| **Config debugging difficulty** | No "effective value came from here" view |
| **Audit non-persistence** | Tamper-evidence lost on restart |

---

## 8. Backlog Watch

| Item | Age | Risk | Why It Matters |
|------|-----|------|----------------|
| [#669](https://github.com/qhkm/zeptoclaw/issues/669) | 1 day | **Audit chain non-persistence** — security evidence lost on restart | Undermines tamper-evidence guarantee; requires durable storage + rotation design |
| [#664](https://github.com/qhkm/zeptoclaw/issues/664) | 1 day | **Delegation policy inheritance** — children can exceed parent | Safety gap in subagent model; needs capability lattice enforcement |
| [#668](https://github.com/qhkm/zeptoclaw/issues/668) | 1 day | **Hermetic seam-level integration tests** — real paths, no live creds | Test gap at system boundaries; blocks confident refactoring |
| [#662](https://github.com/qhkm/zeptoclaw/issues/662) | 1 day | **Channel-plugin protocol incomplete** — outbound-only, stall risk | Plugin channels advertised but effectively broken for bidirectional use |
| [#663](https://github.com/qhkm/zeptoclaw/issues/663) | 1 day | **Agent Pipeline migration stalled** — production on legacy loop | Architectural debt; 5k-line loop blocks modularity, testing, middleware |

**Maintainer attention needed:** The two P0 security PRs (#671, #672) are ready for merge. The remaining 10 issues form a **coherent architectural program** — consider sequencing: Pipeline migration (#663) → Prompt Envelope (#661) → Extension Host v2 (#667) → Config Opacity (#670) → Cron v2 (#665) → Memory Durability (#666) → Audit Persistence (#669) → Delegation Policy (#664) → Channel Protocol (#662) → Seam Tests (#668).

---

*Digest generated from GitHub data as of 2026-09-06. All links point to qhkm/zeptoclaw repository.*

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

⚠️ Summary generation failed.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/DenisZheng/agents-radar).*