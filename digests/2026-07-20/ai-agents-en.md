# OpenClaw Ecosystem Digest 2026-07-20

> Issues: 347 | PRs: 500 | Projects covered: 13 | Generated: 2026-07-20 03:28 UTC

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

# OpenClaw Project Digest — 2026-07-20

## 1. Today's Overview

OpenClaw shows **extremely high velocity** with 847 total updates (347 issues + 500 PRs) in the last 24 hours. The project is in active development with no new releases today, but 129 PRs were merged/closed — indicating rapid iteration. The issue backlog is substantial (235 open/active), with a heavy concentration on **security hardening**, **session/message reliability**, **multi-platform support (Linux/Windows)**, and **Telegram/WhatsApp/Signal channel stability**. The "clawsweeper" automation labels suggest a mature triage process. Overall health: **high activity, moderate stability risk** due to numerous P1 regressions in recent versions (2026.7.x).

---

## 2. Releases

**No new releases today.** The latest version appears to be 2026.7.2-beta.3 (referenced in #111519). Several issues reference regressions introduced in 2026.7.1 and 2026.7.2-beta versions.

---

## 3. Project Progress — Merged/Closed PRs (129 today)

Key merged/closed PRs advancing the codebase:

| PR | Area | Summary | Status |
|----|------|---------|--------|
| [#111613](https://github.com/openclaw/openclaw/pull/111613) | gateway | Fix dashboard title generation when sender metadata arrives during title creation | **Closed** |
| [#111344](https://github.com/openclaw/openclaw/issues/111344) | plugin-sdk | Fix false-positive "missing register/activate" validation for `defineChannelPluginEntry` exports | **Closed** |
| [#108075](https://github.com/openclaw/openclaw/issues/108075) | core | Fix LLM request schema rejection regression in 2026.7.1 | **Closed** |
| [#108238](https://github.com/openclaw/openclaw/issues/108238) | token-accounting | Fix `cacheRead` incorrectly counted in `totalTokens` causing false context overflow | **Closed** |
| [#92405](https://github.com/openclaw/openclaw/issues/92405) | subagents | Fix subagent spawn persisting raw provider instead of CLI runtime (depth-2 cold spawns) | **Closed** |
| [#89954](https://github.com/openclaw/openclaw/issues/89954) | telegram | Fix Telegram getUpdates 409 cascade on IPv6→IPv4 fallback | **Closed** |
| [#72948](https://github.com/openclaw/openclaw/issues/72948) | gateway | Fix `gateway stop` not killing foreground-launched gateway | **Closed** |
| [#97970](https://github.com/openclaw/openclaw/issues/97970) | update/auth | Fix `openclaw update` auto-setting `gateway.bind: "lan"` conflicting with `auth.mode: "none"` | **Closed** |

**Pattern**: Recent 2026.7.x regressions are being rapidly patched. Several fixes target **auth-provider compatibility**, **session-state corruption**, and **message-delivery reliability**.

---

## 4. Community Hot Topics — Most Active Issues/PRs

### Top 5 Issues by Comment Count

| Issue | Comments | 👍 | Core Theme | Link |
|-------|----------|-----|------------|------|
| **#75** Linux/Windows Clawdbot Apps | 114 | 80 | **Platform parity** — macOS/iOS/Android exist; Linux/Windows missing | [#75](https://github.com/openclaw/openclaw/issues/75) |
| **#7707** Memory Trust Tagging by Source | 17 | 0 | **Security** — Prevent memory poisoning from untrusted sources (web, 3rd-party skills) | [#7707](https://github.com/openclaw/openclaw/issues/7707) |
| **#10659** Masked Secrets — Prevent Agent Accessing Raw API Keys | 14 | 4 | **Security** — Secrets usable but not readable by agent | [#10659](https://github.com/openclaw/openclaw/issues/10659) |
| **#13583** Pre-response Enforcement Hooks (Hard Gates) | 14 | 2 | **Reliability** — Mechanical enforcement of "must call tool X before responding" | [#13583](https://github.com/openclaw/openclaw/issues/13583) |
| **#94846** Cron Isolated agentTurn Skips Delivery | 12 | 1 | **Message loss** — Recovered tool error classified as fatal blocks delivery | [#94846](https://github.com/openclaw/openclaw/issues/94846) |

### Top PRs Needing Review (by risk/size)

| PR | Size | Risk | Area | Link |
|----|------|------|------|------|
| [#111598](https://github.com/openclaw/openclaw/pull/111598) | XL | 🚨 compatibility, session-state | **Apple offline DB unification** (iOS/macOS) | refactor(apple) |
| [#111615](https://github.com/openclaw/openclaw/pull/111615) | XL | 🚨 compatibility, session-state | **System agent** — agentic greeting with quick actions | feat(system-agent) |
| [#108345](https://github.com/openclaw/openclaw/pull/108345) | XL | 🚨 compatibility, security-boundary | **Signal transport** — account-scoped ownership | improve(signal) |
| [#111154](https://github.com/openclaw/openclaw/pull/111154) | XL | 🚨 compatibility, session-state, message-delivery | **Agent recovery** — disconnected gateway runs | fix(agent) |
| [#110297](https://github.com/openclaw/openclaw/pull/110297) | XL | 🚨 compatibility, session-state | **Agents** — avoid synthetic overflow in tool-heavy sessions | fix(agents) |

**Underlying needs**: Users are demanding **production-grade reliability** (message delivery, session recovery), **security boundaries** (masked secrets, memory trust, approval resolvers), and **platform completeness** (Linux/Windows, Signal multi-account).

---

## 5. Bugs & Stability — Today's Reports (Ranked by Severity)

### 🔴 Critical / P1 — Active Regressions

| Issue | Summary | Severity | Fix PR? |
|-------|---------|----------|---------|
| [#102006](https://github.com/openclaw/openclaw/issues/102006) | `exec` tool: aborted run wedges subsequent `exec` calls in same session (regression from PR #94412) | **P1, crash-loop** | No |
| [#108580](https://github.com/openclaw/openclaw/issues/108580) | Cron tool schema incompatible with llama.cpp grammar-constrained calling (2026.7.1 regression) | **P1, auth-provider** | No |
| [#111519](https://github.com/openclaw/openclaw/issues/111519) | Telegram DM replies fall back after stale DM-scope cleanup (2026.7.2-beta.3 regression) | **P1, message-loss** | No |
| [#111506](https://github.com/openclaw/openclaw/issues/111506) | `EmbeddedAttemptSessionTakeoverError`: rapid-fire requests cause session lock contention on heavy contexts | **P1, session-state** | No |
| [#83598](https://github.com/openclaw/openclaw/issues/83598) | `anthropic:claude-cli` OAuth refresh dead-ends main lane despite #73682 fix | **P1, auth-provider** | No |
| [#99910](https://github.com/openclaw/openclaw/issues/99910) | Memory dreaming run pegs gateway event loop ~10 min; short-term recall never persists | **P1, crash-loop** | No |

### 🟠 High / P2 — Stability & Data Loss

| Issue | Summary | Severity | Fix PR? |
|-------|---------|----------|---------|
| [#94846](https://github.com/openclaw/openclaw/issues/94846) | Cron isolated `agentTurn` skips delivery before dispatch on recovered fatal tool error | **P2, message-loss** | No |
| [#109490](https://github.com/openclaw/openclaw/issues/109490) | codex app-server: turn interrupted after client-delegated message tool result (`terminate:true`) | **P1, message-loss** | No |
| [#92076](https://github.com/openclaw/openclaw/issues/92076) | Subagent completion delivery fails when requester run inactive & transcript locked | **P1, message-loss** | No |
| [#70024](https://github.com/openclaw/openclaw/issues/70024) | Channel stop timeout leaves channel permanently dead (`running: true` with stale store) | **P1, message-loss** | No |
| [#93139](https://github.com/openclaw/openclaw/issues/93139) | `write` tool and `exec` heredocs insert literal `\n` instead of newlines | **P2, data-corruption** | No |
| [#103198](https://github.com/openclaw/openclaw/issues/103198) | WebChat image attachments not mapped to media store path — `image_0` instead of real path | **P2, ux-friction** | No |
| [#87182](https://github.com/openclaw/openclaw/issues/87182) | Memory-core dreaming: narrative session archived before host plugin extracts text → **narrative lost** | **P2, data-loss** | No |
| [#110065](https://github.com/openclaw/openclaw/issues/110065) | `compaction.enabled` read by code but rejected by config schema | **P2, ux-friction** | No |

**Stability signal**: Multiple **message-loss** and **session-state** bugs in cron/subagent/channel paths. The 2026.7.x line has introduced regressions in auth, exec, and Telegram. No fix PRs yet for most P1s.

---

## 6. Feature Requests & Roadmap Signals

### High-Demand Security Features (Multiple "diamond lobster" 🦞 issues)

| Feature | Issue | Priority | Signal |
|---------|-------|----------|--------|
| **Masked Secrets** — API keys usable but not readable | [#10659](https://github.com/openclaw/openclaw/issues/10659) | P1 | 4 👍, active discussion |
| **Memory Trust Tagging** by source (user/web/skill) | [#7707](https://github.com/openclaw/openclaw/issues/7707) | P2 | 17 comments |
| **Pre-response Enforcement Hooks** (hard gates for tool calls) | [#13583](https://github.com/openclaw/openclaw/issues/13583) | P2 | 14 comments |
| **Approval Resolver Seam** (capability-level, cross-harness) | [#97152](https://github.com/openclaw/openclaw/issues/97152) | P2 | 6 comments |
| **Skill Permission Manifest** (`skill.yaml`) | [#12219](https://github.com/openclaw/openclaw/issues/12219) | P2 | 6 comments |
| **Exec-Approval Denylist** (complement allowlist) | [#6615](https://github.com/openclaw/openclaw/issues/6615) | P2 | 8 👍 |

### Platform & Channel Expansion

| Feature | Issue | Priority |
|---------|-------|----------|
| **Linux/Windows Clawdbot Apps** (parity with macOS/iOS/Android) | [#75](https://github.com/openclaw/openclaw/issues/75) | P2 | **80 👍, 114 comments** — highest community demand |
| **Telegram Guest Bots & Bot-to-Bot** (May 2026 Telegram release) | [#79077](https://github.com/openclaw/openclaw/issues/79077) | P2 | 8 👍 |
| **WhatsApp Listen-Only/Hooks-Only Mode** | [#78963](https://github.com/openclaw/openclaw/issues/78963) | P2 | 6 comments |
| **Signal Transport Account-Scoped Transport Ownership** | [#108345](https://github.com/openclaw/openclaw/pull/108345) | P2 | PR in review |

### Automation & Session UX

| Feature | Issue | Priority |
|---------|-------|----------|
| **Unify Heartbeat/Watchers/Scheduled as Cron** ("Everything is a cron") | [#110950](https://github.com/openclaw/openclaw/issues/110950) | P2 | By steipete (maintainer) |
| **Session:end Internal Hook Event** (for workflow orchestration) | [#10142](https://github.com/openclaw/openclaw/issues/10142) | P2 | 5 comments |
| **MaxTurns/MaxToolCalls Config** (limit agent iterations) | [#9912](https://github.com/openclaw/openclaw/issues/9912) | P2 | 5 comments |
| **Webhook Hook Sessions Reuse** (multi-turn via sessionKey) | [#11665](https://github.com/openclaw/openclaw/issues/11665) | P2 | 10 comments |
| **Subagent Orchestration in Cron** (spawn/wait/aggregate) | [#92369](https://github.com/openclaw/openclaw/issues/92369) | P2 | 8 comments |

### Prediction for Next Version
Given merged PRs and maintainer-authored issues/PRs:
1. **Signal multi-account fix** (#108345) — near merge
2. **Apple offline DB unification** (#111598) — major refactor by steipete
3. **System agent UX overhaul** (#111615) — maintainer-driven
4. **Config validation fixes** (#111571, #110065) — quick wins
5. **P1 regression patches** for 2026.7.x — likely in 2026.7.3 or 2026.8.0

---

## 7. User Feedback Summary — Real Pain Points

| Pain Point | Evidence | Frequency |
|------------|----------|-----------|
| **"Update breaks my setup"** | #97970: `openclaw update` sets `gateway.bind: "lan"` conflicting with `auth.mode: "none"` → exit 78, restart loops | High (closed but impactful) |
| **"Messages disappear in groups/channels"** | #70024 (channel dead), #92076 (subagent delivery), #109490 (turn interrupted), #111519 (Telegram DM fallback) | Very High |
| **"Subagents don't work reliably"** | #39248 (sandbox.mode breaks spawn), #92369 (orchestration), #92405 (depth-2 spawns die), #8299 (announce spam) | High |
| **"Auth/OAuth keeps failing"** | #83598 (claude-cli OAuth), #108075 (schema rejection), #108580 (llama.cpp grammar), #83337 (plugin/core drift) | High |
| **"No Linux/Windows desktop app"** | #75: 80 👍, 114 comments — #1 community request | Highest |
| **"Context/token accounting is wrong"** | #108238 (cacheRead in totalTokens), #110297 (synthetic overflow), #9986 (no fallback on context exceed) | Medium |
| **"Memory/dream

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: Open-Source AI Agent / Personal Assistant Ecosystem (2026-07-20)

---

## 1. Ecosystem Overview

The open-source personal AI agent landscape is **highly fragmented but technically vibrant**, with at least 14 distinct projects spanning from full-stack platforms (OpenClaw, IronClaw) to specialized channel/skill frameworks (NanoBot, NanoClaw, NanoClaw). A clear bifurcation exists: **core runtime projects** (OpenClaw, IronClaw, NanoClaw) invest heavily in session durability, multi-channel messaging, and security boundaries, while **lightweight/integration-focused projects** (NanoBot, LobsterAI, Moltis) prioritize provider breadth, local-model performance, and UX polish. No single project dominates; instead, a **modular, plugin-first architecture** is emerging as the de facto standard across the ecosystem. Community demand converges on **production-grade reliability** (message delivery, session recovery), **platform parity** (Linux/Windows), and **security primitives** (masked secrets, memory trust tagging).

---

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Merged/Closed PRs | Release Status | Health Score* |
|---------|--------------|-----------|-------------------|----------------|---------------|
| **OpenClaw** | 347 | 500 | 129 | 2026.7.2-beta.3 (no new) | 🟡 High activity, moderate stability risk |
| **NanoBot** | 7 | 33 | 9 | No new (accumulating) | 🟢 Strong |
| **NanoClaw** | 2 (new) | 20 (15 closed) | 15 | No new (batching) | 🟢 Active stabilization |
| **IronClaw** | ~5 (hot) | 50 (29 closed) | 29 | Blocked on reborn refactor (PR #5598) | 🟡 Active consolidation |
| **LobsterAI** | 3 (stale) | 3 (stale) | 0 | No new | 🔴 Low maintenance |
| **Moltis** | 0 | 0 | 0 | 20260719.01 (no notes) | ⚪ Quiet / opaque |
| **NullClaw** | 0 | 0 | 0 | — | ⚪ Dormant |
| **TinyClaw** | 0 | 0 | 0 | — | ⚪ Dormant |
| **ZeptoClaw** | 0 | 0 | 0 | — | ⚪ Dormant |
| **Hermes / PicoClaw / CoPaw / ZeroClaw** | — | — | — | — | ⚫ Summary failed |

*Health Score: 🟢 Strong velocity & quality | 🟡 High activity with risks | 🔴 Stalled | ⚪ Low signal | ⚫ Unknown

---

## 3. OpenClaw's Position

**Advantages vs. Peers**
- **Scale & Breadth**: 847 daily updates dwarf all others; covers gateway, plugin-sdk, subagents, multi-channel (Telegram/WhatsApp/Signal), auth, token accounting, memory/dreaming.
- **Community Gravity**: Highest engagement (Issue #75: 80 👍, 114 comments for Linux/Windows apps); mature triage ("clawsweeper" automation).
- **Architectural Ambition**: Only project tackling **system-agent UX**, **pre-response enforcement hooks**, **memory trust tagging**, and **approval-resolver seams** simultaneously.

**Technical Approach Differences**
- **Monorepo Core + Plugin SDK**: Centralized runtime (gateway, session, memory) with `defineChannelPluginEntry`/`defineSkillPluginEntry` extension points — contrasts with NanoBot/NanoClaw's skill/channel-first modularity.
- **Session-Centric Durability**: Heavy investment in `agentTurn` recovery, cron isolation, subagent transcript locking — IronClaw is the only peer with comparable durability focus (chaos-tested turn-state).
- **Security-First Primitives**: Masked secrets, memory source tagging, exec-approval denylists — most peers treat these as afterthoughts.

**Community Size Comparison**
- **OpenClaw**: Largest visible community (triple-digit comments on top issues).
- **NanoBot/NanoClaw**: Smaller but highly technical operator base (production WhatsApp/WeChat/Telegram deployments).
- **IronClaw**: Enterprise/near.ai-backed; public GitHub activity high but community discussion lighter.
- **LobsterAI/Moltis**: Minimal public engagement.

---

## 4. Shared Technical Focus Areas (Cross-Project Convergence)

| Requirement | Projects | Specific Needs |
|-------------|----------|----------------|
| **Multi-Channel Messaging Reliability** | OpenClaw, NanoBot, NanoClaw, IronClaw | Message delivery guarantees, session recovery, channel stop/start safety, LID-group fixes (WhatsApp), Telegram 409 cascade, Feishu/QQ backoff |
| **Local-First Model Performance** | NanoBot, OpenClaw, NanoClaw | Ollama prompt caching (NanoBot #4867: 60s/turn fix), llama.cpp grammar compatibility (OpenClaw #108580), remote MCP servers (NanoClaw #2847, #3092) |
| **Security Boundaries & Secrets** | OpenClaw, NanoBot, IronClaw | Masked secrets (OpenClaw #10659), filesystem TOCTOU (NanoBot #4987), auth-gate fingerprinting (IronClaw #6303), Jina Reader credential leakage (NanoBot #4947) |
| **Session/State Durability** | OpenClaw, IronClaw, NanoClaw | Crash-consistency chaos suite (IronClaw #6295), subagent spawn persistence (OpenClaw #92405), turn-state row stores (IronClaw), remote MCP session binding (NanoClaw) |
| **Platform Parity (Linux/Windows)** | OpenClaw, NanoBot | OpenClaw #75 (80 👍), NanoBot Windows UTF-8 subprocess fix (#4975), GitStore workspace fix (#4980) |
| **Extensibility Architecture** | OpenClaw, NanoClaw, NanoBot | OpenClaw plugin-sdk validation (#111344), NanoClaw hosthooks standardization (#3091), NanoBot session-scoped model presets (#4866) |
| **Agent Autonomy & Skill Synthesis** | OpenClaw, NanoClaw | OpenClaw subagent orchestration (#92369), NanoClaw agent-driven skill learning (#3089) |

---

## 5. Differentiation Analysis

| Dimension | OpenClaw | IronClaw | NanoBot | NanoClaw | LobsterAI | Moltis |
|-----------|----------|----------|---------|----------|-----------|--------|
| **Primary Focus** | Full-stack personal agent platform | Durable, typed agent runtime (Rust) | Multi-channel bot framework (Python) | Extensible skill/channel platform (Go) | Enterprise IM + skill creator (TS/React) | Opaque / date-based releases |
| **Target User** | Power users, developers, self-hosters | Infrastructure teams, Near ecosystem | Bot operators (WhatsApp/WeChat/Telegram) | Skill authors, channel integrators | Enterprise teams (Popo IM), skill creators | Unknown |
| **Architecture** | TS monorepo + plugin SDK | Rust workspace (capability-oriented) | Python async + provider/channel plugins | Go + MCP-first skill model | React/TS frontend + Python backend | Unknown |
| **Key Differentiator** | **Session/memory/subagent depth**; system-agent UX | **Crash-consistency guarantees**; compile-time feature collapse | **Provider breadth** (ModelScope, Atlas, Nimble); OAuth UX | **Remote MCP + hosthooks**; agent-driven skill learning | **Code-block folding UX**; IM bot validation | **Continuous daily cuts** (no notes) |
| **Maturity Signal** | High velocity, P1 regressions in 2026.7.x | Major refactor ("reborn") in flight; chaos-tested | Stable bug-fix cadence; production channels | Rapid channel/skill expansion; WhatsApp LID fixes | Stale backlog; UI polish focus | Zero public signal |

---

## 6. Community Momentum & Maturity

| Tier | Projects | Characteristics |
|------|----------|-----------------|
| **Rapidly Iterating (High Velocity, Pre-Stabilization)** | **OpenClaw**, **IronClaw**, **NanoClaw** | 15–129 PRs merged/day; architectural refactors in flight; P1 regressions active; next versions imminent |
| **Stabilizing / Production-Hardening** | **NanoBot** | 9 PRs merged (5 bug fixes); provider expansions ready; conflict-label backlog on 6 high-value PRs |
| **Low Maintenance / Stale** | **LobsterAI**, **Moltis** | Only stale Dependabot/stale issues updated; no feature work visible |
| **Dormant / No Signal** | **NullClaw**, **TinyClaw**, **ZeptoClaw** | Zero 24h activity |
| **Unknown (Summary Failed)** | **Hermes**, **PicoClaw**, **CoPaw**, **ZeroClaw** | Cannot assess |

**Key Insight**: The ecosystem's **center of gravity** is shifting toward **durability + extensibility** (OpenClaw, IronClaw, NanoClaw), while channel/framework projects (NanoBot, NanoClaw) consolidate production reliability.

---

## 7. Trend Signals for AI Agent Developers

1. **Durability is the New Differentiator**  
   IronClaw's chaos-suite (#6295) and OpenClaw's session-recovery P1s (#111506, #94846) signal that **crash-consistent turn-state** and **message-delivery guarantees** are becoming table stakes for production agents.

2. **MCP as Universal Integration Layer**  
   NanoClaw (remote MCP #2847, #3092), NanoBot (provider expansions), and OpenClaw (plugin-sdk) all converge on **Model Context Protocol** for tool/skill distribution. Expect MCP servers to replace bespoke plugin APIs.

3. **Security Primitives Moving Upstack**  
   Masked secrets (OpenClaw #10659), filesystem TOCTOU (NanoBot #4987), auth-gate fingerprinting (IronClaw #6303) — **capability-level authorization** and **credential isolation** are being built into runtimes, not left to skills.

4. **Agent-Authored Skills Emerging**  
   NanoClaw #3089 (agent-driven skill learning) and OpenClaw #92369 (subagent orchestration) point to **self-extending agents** that synthesize skills from repetition — a leap from human-authored extensions.

5. **Platform Parity as Adoption Blocker**  
   OpenClaw #75 (Linux/Windows: 80 👍) and NanoBot Windows fixes show **desktop/app parity** is the #1 community demand for self-hosted assistants. Projects ignoring this cap their addressable audience.

6. **Multi-Account / Multi-Identity Channel Support**  
   NanoClaw WhatsApp LID fixes (4 PRs), IronClaw auth-gate credential setup (#6303), NanoBot session-scoped models (#4866) — **identity-aware channel routing** is critical for power users running multiple personas.

7. **Local-First Performance Non-Negotiable**  
   NanoBot's 60s/turn Ollama fix (#4867) and OpenClaw's llama.cpp grammar regression (#108580) prove **local model latency** directly determines user retention. Prompt caching, grammar-constrained decoding, and remote MCP offload are key levers.

---

**Bottom Line for Decision-Makers**:  
- **Build on OpenClaw** if you need a full-stack, session-centric platform with the broadest community and deepest memory/subagent model — but budget for regression churn in 2026.7.x.  
- **Choose IronClaw** for Rust-based, durability-critical infrastructure with formal crash-consistency guarantees.  
- **Adopt NanoBot/NanoClaw** for production multi-channel bots (WhatsApp/WeChat/Telegram) with strong provider breadth and MCP extensibility.  
- **Watch the MCP + hosthooks + agent-skill-synthesis convergence** — the next 6 months will define the extensibility standard across the ecosystem.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-07-20

## 1. Today's Overview
NanoBot shows **high maintenance velocity** with 40 total items updated in the last 24 hours (7 issues, 33 PRs). The project is in active bug-fix and feature-development mode with **6 issues closed** and **9 PRs merged/closed** today, indicating strong triage throughput. No new release was cut, suggesting changes are accumulating for a future batch release. The open PR backlog (24) includes several provider integrations, channel fixes, and WebUI polish — signaling a broadening ecosystem focus.

## 2. Releases
**No new releases today.** The last release information is not provided in the data snapshot. All 9 merged PRs and 6 closed issues represent changes staged for the next release.

## 3. Project Progress — Merged/Closed PRs & Key Advances
| PR / Issue | Type | Summary | Link |
|---|---|---|---|
| #4867 | Enhancement (Closed) | **Ollama prompt caching fix** — preserves exact prompt prefix to enable caching, eliminating ~60s/turn overhead for local models on Ollama. Critical for users with 32GB VRAM. | [#4867](https://github.com/HKUDS/nanobot/issues/4867) |
| #4823 | Bug/Regression (Closed) | **WhatsApp group routing fix** — restores pre-0.2.2 `allow ["+number", "group_id"]` behavior; groups were receiving messages from all groups. | [#4823](https://github.com/HKUDS/nanobot/issues/4823) |
| #4991 | Bug (Closed) | **Local trigger success reporting** — triggers no longer report success when target channel is disabled, preventing phantom model usage. | [#4991](https://github.com/HKUDS/nanobot/issues/4991) |
| #4975 | Bug (Closed) | **Windows UTF-8 subprocess fix** — `CliAppManager` now uses explicit encoding, resolving `UnicodeDecodeError` on CP936/GBK locales. | [#4975](https://github.com/HKUDS/nanobot/issues/4975) |
| #4980 | Bug (Closed) | **GitStore workspace fix** — resolves relative path failures when workspace ≠ process CWD (Dulwich `porcelain.add()`). | [#4980](https://github.com/HKUDS/nanobot/issues/4980) |
| #4999 | Proposal (Closed) | **Multi-agent collaboration proposal** — suggests evolving subagents toward persistent identities, shared state, and agent-to-agent communication. Closed without merge; likely moved to discussion/roadmap. | [#4999](https://github.com/HKUDS/nanobot/issues/4999) |

**Net progress:** 5 concrete bug fixes merged (Ollama performance, WhatsApp regression, Windows encoding, GitStore paths, trigger semantics) + 1 architectural proposal acknowledged.

## 4. Community Hot Topics — Most Active Discussions
| Item | Activity | Core Need / Signal |
|---|---|---|
| **#1459** `nanobot with codex-5.3-codex is lazy and doesn't actually execute` | 6 comments, 2 👍, open since Mar 3 | **Agent execution reliability** — user reports agent claims to read files but doesn't; suggests Codex model integration has instruction-following gaps. High user pain. [Link](https://github.com/HKUDS/nanobot/issues/1459) |
| **#4867** `Preserve exact prompt prefix to enable caching in Ollama` | 11 comments, closed today | **Local model performance** — 60s/turn penalty made Ollama "totally unusable" on 32GB VRAM. Fix landed; validates strong demand for local-first performance. [Link](https://github.com/HKUDS/nanobot/issues/4867) |
| **#4689** `feat(providers): surface OAuth status and expiry warnings` | Open since Jul 3, labeled `conflict` | **Provider UX polish** — OAuth token visibility across CLI/WebUI/runtime. Needed for production deployments. [Link](https://github.com/HKUDS/nanobot/pull/4689) |
| **#4965** `Feat/modelscope provider support` | Open since Jul 17, labeled `conflict` | **China-market provider expansion** — ModelScope (Qwen, DeepSeek, GLM, etc.) via OpenAI-compatible API. Strategic for Chinese user base. [Link](https://github.com/HKUDS/nanobot/pull/4965) |
| **#4866** `feat(agent): bind model presets to sessions` | Open since Jul 10, labeled `conflict` | **Session-scoped model config** — persist provider/model/settings per session, propagate to subagents/SDK. Foundation for multi-model workflows. [Link](https://github.com/HKUDS/nanobot/pull/4866) |

**Underlying theme:** Users are pushing NanoBot into **production multi-channel, multi-provider, local-model** scenarios — demanding reliability (Ollama, WhatsApp, Windows), observability (OAuth), and ecosystem breadth (ModelScope, Atlas Cloud).

## 5. Bugs & Stability — Today's Reports (Ranked by Severity)
| Severity | Issue | Status | Fix PR? |
|---|---|---|---|
| **P0 – Data loss / Security** | #4987 `fix(filesystem): bind workspace checks to opened files` — TOCTOU risk on `read_file`/`write_file`/`edit_file`; uses `O_NOFOLLOW` + `fstat`/`stat` comparison. | **Open PR** (p0) | ✅ [#4987](https://github.com/HKUDS/nanobot/pull/4987) |
| **P1 – Channel hang / DoS** | #4981 `_split_telegram_markdown` infinite loop when `max_len <= 0`; #4982 `FeishuChannel._fallback_text_chunks` same bug. | **Open PRs** (p2) | ✅ [#4981](https://github.com/HKUDS/nanobot/pull/4981), [#4982](https://github.com/HKUDS/nanobot/pull/4982) |
| **P1 – Channel reconnect spam** | #4768 / #4838 QQ WebSocket fixed 5s reconnect → exponential backoff (2s→60s cap). | **Open PRs** (p1) | ✅ [#4768](https://github.com/HKUDS/nanobot/pull/4768), [#4838](https://github.com/HKUDS/nanobot/pull/4838) |
| **P2 – WeChat silent failure** | #4223 Weixin channel: session expiry (`errcode -14`) triggers 60min pause but never reloads `account.json` → permanent silent loop. | **Open PR** (conflict) | ✅ [#4223](https://github.com/HKUDS/nanobot/pull/4223) |
| **P2 – Jina Reader leakage** | #4947 Jina Reader sent full URLs (credentials, tokens, signed params) by default. Now opt-in. | **Open PR** (conflict) | ✅ [#4947](https://github.com/HKUDS/nanobot/pull/4947) |
| **P3 – Windows encoding** | #4975 `subprocess.run(text=True)` without encoding → `UnicodeDecodeError` on CP936/GBK. | **Closed** (fixed) | ✅ Merged |

**Stability takeaway:** Active hardening on **filesystem security (P0)**, **channel resilience (P1)**, and **credential hygiene (P2)**. Most have fix PRs ready but blocked by `conflict` labels — merge coordination needed.

## 6. Feature Requests & Roadmap Signals
| Signal | Source | Likelihood for Next Version |
|---|---|---|
| **ModelScope provider** (Qwen, DeepSeek, GLM, Kimi, MiniMax) | #4965 PR | **High** — OpenAI-compatible, strategic for CN users, tests included |
| **Atlas Cloud provider** (OpenAI-compatible gateway) | #4996 PR | **High** — curated models, registration tests, documentation |
| **Nimble search provider** | #4951 PR | **Medium** — follows existing REST pattern, low risk |
| **Telegram custom Bot API base URL + headers** | #4919 PR | **Medium** — enterprise/self-hosted demand, tests included |
| **Session-scoped model presets** (persist provider/model/settings per session, propagate to subagents) | #4866 PR | **High** — foundational for multi-model workflows, WebUI + SDK + subagent propagation |
| **OAuth status/expiry warnings across CLI/WebUI/runtime** | #4689 PR | **High** — production readiness, shared helpers added |
| **Secure browser companion launch** (HttpOnly, SameSite, localhost status endpoint) | #4997 PR | **Medium-High** — security hardening for WebUI companions |
| **Multi-agent collaboration** (persistent identities, shared state, agent↔agent comms) | #4999 Issue | **Low (near-term)** — architectural, closed as proposal; likely vNext or RFC |

**Predicted next-release bundle:** Provider expansions (ModelScope, Atlas Cloud, Nimble), session-scoped models, OAuth UX, Telegram enterprise support, WebUI companion security, channel resilience fixes.

## 7. User Feedback Summary — Pain Points & Use Cases
| Pain Point | Evidence | User Impact |
|---|---|---|
| **Ollama unusable on local hardware** | #4867: "extra 60 seconds to every single turn… totally unusable with Ollama and 32 GB VRAM" | **Critical** — blocks local-first power users; fixed today |
| **WhatsApp group routing broken** | #4823: "group responses now arrive in every group… group allow is broken" | **High** — production channel regression since 0.2.2; fixed today |
| **Agent claims action but doesn't execute** | #1459: "I'll read that file… I haven't read it yet… I haven't actually executed" | **High** — erodes trust in Codex model integration; open since Mar |
| **WeChat channel dies silently after token expiry** | #4223: "永久静默的死循环" (permanent silent dead loop) | **High** — requires re-scan to recover; fix PR open but conflicted |
| **Windows CLI tools crash on UTF-8 output** | #4975: `UnicodeDecodeError` on CP936/GBK | **Medium** — affects Windows devs; fixed today |
| **Telegram/Feishu message split hangs on edge case** | #4981, #4982: infinite loop when limit ≤ 0 | **Medium** — DoS vector; fix PRs ready |

**Satisfaction signals:** Users actively file detailed bugs with repro steps and propose fixes (e.g., #4981, #4982, #4975, #4980). The project attracts **technical operators** running NanoBot in production across WhatsApp, WeChat, Telegram, Feishu, QQ — not just hobbyists.

## 8. Backlog Watch — Stalled High-Value Items Needing Attention
| Item | Age | Why It Matters | Blockers |
|---|---|---|---|
| **#1459** Codex agent laziness / non-execution | 140 days | Core agent reliability for paying Codex users; 2 👍, 6 comments | No fix PR; may need model-specific prompting or tool-loop fix |
| **#4223** Weixin session reload after expiry | 44 days | Production WeChat channel silently dies; fix PR exists | `conflict` label — merge conflict resolution needed |
| **#4689** OAuth status/expiry warnings | 17 days | Production observability for all OAuth providers | `conflict` label — merge conflict resolution needed |
| **#4300** Skill type requirements check | 39 days | Enables composable skills (stock data → fund analysis) | `conflict` label — merge conflict resolution needed |
| **#4768 / #4838** QQ exponential backoff | 14-17 days | Prevents log spam / API abuse on network issues | `conflict` label (two competing PRs) |
| **#4866** Session-scoped model presets | 10 days | Foundation for multi-model, subagent, SDK workflows | `conflict` label — merge conflict resolution needed |

**Maintainer action recommended:** Resolve `conflict` labels on **#4223, #4689, #4768/#4838, #4866** — these are production-grade fixes/features with tests. Prioritize **#1459** investigation (oldest open bug with user impact).

---

**Project Health Score: 🟢 Strong**  
- **Velocity:** High (40 updates/24h, 15 closures)  
- **Quality:** Active hardening (P0 filesystem, P1 channel DoS, credential leakage)  
- **Ecosystem:** Expanding (3 new providers, enterprise Telegram, ModelScope for CN)  
- **Risk:** `conflict` label backlog on 6 high-value PRs; 1 critical UX bug (#1459) stale 4.5 months  

**Next milestone likely:** Provider pack release + channel stability batch + session-scoped models.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

⚠️ Summary generation failed.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

⚠️ Summary generation failed.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-07-20

## 1. Today's Overview
NanoClaw shows **high merge velocity** with 15 PRs closed/merged in the last 24 hours against only 5 new open PRs, indicating a project in active stabilization and feature-completion mode. Zero new releases suggest the team is batching changes for a forthcoming version. Two new feature-request issues (#3091, #3089) signal community interest in **extensibility architecture** and **agent autonomy** — strategic directions for the platform. WhatsApp LID-group fixes dominate recent merges, reflecting ongoing maturity work on the flagship channel.

## 2. Releases
*No new releases published in the last 24h.*

## 3. Project Progress — Merged/Closed PRs (Last 24h)

| PR | Type | Summary | Link |
|----|------|---------|------|
| #2306 | Feature Skill | **yt-dlp MCP server + `/add-ytdlp` installer** — in-tree MCP server for video/audio downloading | [#2306](https://github.com/nanocoai/nanoclaw/pull/2306) |
| #2278 | Feature Skill | **Per-wiring channel permissions** (read \| write \| read+write) — fine-grained access control per channel wiring | [#2278](https://github.com/nanocoai/nanoclaw/pull/2278) |
| #2276 | Fix | **URL fallback in bridge** when adapter omits `fetchData` — improves channel resilience | [#2276](https://github.com/nanocoai/nanoclaw/pull/2276) |
| #2261 | Feature Skill | **`/add-ffmpeg` MCP server** — ffmpeg/ffprobe for media transformation via MCP | [#2261](https://github.com/nanocoai/nanoclaw/pull/2261) |
| #3038 | Fix (WhatsApp) | **Stop translating group participants to phone JIDs** — fixes LID-mode group sends stuck on “waiting” | [#3038](https://github.com/nanocoai/nanoclaw/pull/3038) |
| #3008 | Fix (WhatsApp) | **Remove `cachedGroupMetadata` breaking SKDM in LID groups** — prevents PN JID poisoning of sender-key distribution | [#3008](https://github.com/nanocoai/nanoclaw/pull/3008) |
| #2847 | Feature | **URL-based (remote) MCP servers** — optional `url` field in `McpServerConfig`, enables HTTP/SSE remotes | [#2847](https://github.com/nanocoai/nanoclaw/pull/2847) |
| #2870 | Fix (WhatsApp) | **Keep native participant addressing for group encryption** — fixes silent delivery failure in groups | [#2870](https://github.com/nanocoai/nanoclaw/pull/2870) |
| #2688 | Fix (WhatsApp) | **Stop translating group participants to phone JIDs** — fixes ack 421 on LID groups (duplicate fix path) | [#2688](https://github.com/nanocoai/nanoclaw/pull/2688) |
| #1087 | Feature (Blocked) | **Telegram channel + voice transcription + deduplication** — multi-channel arch, whisper.cpp, IPC image send | [#1087](https://github.com/nanocoai/nanoclaw/pull/1087) |
| #1921 | Feature Skill | **`/add-weixin` — WeChat channel via iLink bot protocol** (QR login, long-poll, chunking, retry) | [#1921](https://github.com/nanocoai/nanoclaw/pull/1921) |
| #1648 | Feature Skill | **`/add-msteams` — Microsoft Teams channel** via Bot Framework webhook | [#1648](https://github.com/nanocoai/nanoclaw/pull/1648) |
| #1594 | Feature Skill | **`/add-wechat` — WeChat via Tencent iLink** (QR auth, sync buffer, auto-retry, multimodal) | [#1594](https://github.com/nanocoai/nanoclaw/pull/1594) |
| #1517 | Feature Skill | **Discord channel** with image attachment support (resize to 1024×1024, multimodal blocks) | [#1517](https://github.com/nanocoai/nanoclaw/pull/1517) |
| #352 | Feature (Blocked) | **Telegram as default channel** — multi-channel arch, grammY, 4096-char splitting, `/chatid`, `/ping` | [#352](https://github.com/nanocoai/nanoclaw/pull/352) |

**Theme:** Massive channel/skill expansion (Teams, Discord, WeChat×2, Telegram×2, yt-dlp, ffmpeg) + critical WhatsApp LID-group stability fixes + remote MCP server support.

## 4. Community Hot Topics

| Item | Activity | Core Need |
|------|----------|-----------|
| **#3091** Feature request: standardize composable host extension hooks for skills (hosthooks) | 0 comments, 0 👍, created 19 Jul | **Plugin architecture maturity** — community skills currently monkey-patch core (router, delivery, container-runner, Claude provider, poll loop). Need stable, composable extension points to avoid conflicts and breakage on upgrades. |
| **#3089** Feature request: agent-driven skill learning | 0 comments, 0 👍, created 19 Jul | **Autonomy leap** — users want the agent to *observe* its own repeated task patterns and *synthesize* new skill files automatically, removing manual skill authoring. |
| **#3092** PR: support remote Streamable HTTP MCP servers | Open, core-team | **Remote MCP adoption** — extends #2847 (merged) with Streamable HTTP transport; signals push for cloud-hosted MCP tooling. |
| **#3088** PR: surface unknown-sender holds in `ncl approvals list` | Open, core-team | **CLI visibility** — unknown-sender approvals currently hidden in separate table; need unified `ncl approvals list` UX. |

**Analysis:** The two new issues (#3091, #3089) are *architectural* — not bug reports. They reveal a community pushing NanoClaw from “extensible via patches” → “extensible by design” and from “human-authored skills” → “agent-authored skills.” The PR cluster around remote MCP (#2847 merged, #3092 open) shows concurrent investment in **MCP-as-integration-layer**.

## 5. Bugs & Stability

| Severity | Issue / PR | Status | Fix PR |
|----------|------------|--------|--------|
| **Critical (WhatsApp)** | LID-group messages never render — stuck on “waiting” (ack 421) | **Fixed** (merged #3038, #3008, #2870, #2688) | Multiple merged PRs addressing same root cause: `getNormalizedGroupMetadata` feeding phone JIDs to Baileys `cachedGroupMetadata` |
| **High (WhatsApp)** | `cachedGroupMetadata` breaks SKDM (sender-key distribution) in LID groups | **Fixed** (#3008) | #3008 merged |
| **Medium (Telegram)** | Transient bot identity lookup failures | **Open fix** (#3094) | #3094 open — retry logic |
| **Medium (Chat UI)** | Typing indicator drops during processing turns | **Open fix** (#3093) | #3093 open — keep typing active |
| **Low (Templates)** | Top-level context Markdown not prepended | **Open fix** (#3090) | #3090 open |

**Takeaway:** WhatsApp LID migration caused a **cluster of related regressions** (4 PRs merged today fixing facets of the same metadata/JID translation bug). The fixes are now in; monitor for regressions. Telegram and chat UX fixes are in open PRs.

## 6. Feature Requests & Roadmap Signals

| Signal | Source | Likelihood for Next Release |
|--------|--------|-----------------------------|
| **Composable host hooks (hosthooks)** | #3091 (Issue) | **High** — architectural, unblocks skill ecosystem; core-team labeled |
| **Agent-driven skill synthesis** | #3089 (Issue) | **Medium** — ambitious, may need design RFC; no core-team label yet |
| **Remote Streamable HTTP MCP** | #3092 (PR, core-team) | **High** — follows merged #2847; incremental transport addition |
| **Unified approvals CLI** | #3088 (PR, core-team) | **High** — small UX fix, core-team owned |
| **Telegram channel (replacing WhatsApp default)** | #352, #1087 (both Blocked) | **Low** — both PRs carry `Status: Blocked`; likely needs architectural decision |
| **WeChat (iLink) — two competing PRs** | #1921, #1594 (both merged) | **Done** — both merged; watch for consolidation |

**Prediction:** Next version will likely ship **hosthooks standardization**, **remote Streamable HTTP MCP**, **unified approvals CLI**, and the **WhatsApp LID stability batch**. Agent-driven skill learning will probably spawn a design discussion first.

## 7. User Feedback Summary

| Pain Point / Use Case | Evidence |
|------------------------|----------|
| **WhatsApp LID groups broken** — messages sent but never received | 4 merged fix PRs (#3038, #3008, #2870, #2688) all targeting same symptom; users experienced silent delivery failure |
| **Skill authors forced to patch core** — conflicts when multiple skills touch router/delivery/runner | #3091 explicitly describes “string-patch NanoClaw sources” as current workflow |
| **Manual skill authoring friction** — want agent to learn from repetition | #3089: “agent could *learn* skills on its own, noticing when it repeatedly solves a certain type of task” |
| **Multi-channel demand** — Teams, Discord, WeChat, Telegram all requested & implemented | 5 channel PRs merged today alone (#1921, #1648, #1594, #1517, #2306) |
| **Remote MCP server need** — not just local stdio | #2847 merged, #3092 open — users want HTTP/SSE MCP endpoints |
| **Telegram as first-class channel** — two major PRs blocked (#352, #1087) | Suggests unresolved architectural debate (multi-channel vs. default swap) |

**Sentiment:** Users are **actively building on NanoClaw** (many channel/skill PRs) but hit **extensibility ceiling** (hosthooks issue) and **platform maturity edges** (WhatsApp LID). The blocked Telegram PRs hint at governance/design tension.

## 8. Backlog Watch — Stale / Needing Attention

| Item | Age | Why It Matters |
|------|-----|----------------|
| **#352** feat: Telegram as default channel | Opened 2026-02-21 (~5 months) | `Status: Blocked`, `Status: Pending Closure` — large multi-channel refactor; decision needed: merge, split, or close? |
| **#1087** feat: Telegram + voice + deduplication | Opened 2026-03-15 (~4 months) | `Status: Blocked` — overlaps #352; voice transcription (whisper.cpp) is high-value standalone feature |
| **#3091** hosthooks standardization | Opened 2026-07-19 (new) | **Zero comments** — critical architectural issue risks stalling without core-team triage / design discussion |
| **#3089** agent-driven skill learning | Opened 2026-07-19 (new) | **Zero comments** — visionary but needs RFC; could languish without champion |

**Recommendation:** Maintainers should **triage #3091 immediately** (label, assign, or open design doc) — it’s the keystone for sustainable skill ecosystem. Schedule a decision on the two blocked Telegram PRs (#352, #1087) to unblock contributors.

---

*Digest generated from GitHub data as of 2026-07-20. Links point to nanocoai/nanoclaw repository.*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-07-20

## 1. Today's Overview

IronClaw shows **high-velocity refactoring activity** centered on the "reborn" architecture simplification initiative, with 29 PRs merged/closed and 21 open in the last 24 hours. The project is in a major consolidation phase: collapsing capability result types, eliminating 14 compile-time features (~1,100 `#[cfg]` sites removed), wiring real durable stores, and adding crash-consistency chaos testing for turn-state durability. Simultaneously, user-facing bugs around stream error handling and PDF mime-type validation are being addressed. No new releases were published today, but a release PR (#5598) with breaking changes across multiple crates remains open.

## 2. Releases

**No new releases published today.**  
Release PR [#5598](https://github.com/nearai/ironclaw/pull/5598) (open since 2026-07-03) proposes:
- `ironclaw_common`: 0.4.2 → 0.5.0 (**⚠ API breaking changes**)
- `ironclaw_safety`: 0.2.2 → 0.2.3 (compatible)
- `ironclaw_skills`: 0.3.0 → 0.4.0 (**⚠ API breaking changes**)
- `ironclaw`: 0.24.0 → 0.29.1  
This release appears blocked on the ongoing reborn refactoring landing.

## 3. Project Progress — Merged/Closed PRs Today

| PR | Scope | Impact |
|----|-------|--------|
| [#6296](https://github.com/nearai/ironclaw/pull/6296) | **Feature flag cleanup** — deleted 14 compile-time features, removed ~1,100 `#[cfg]` sites, 184 files changed (+767/−2,424) | Major reduction in build complexity; storage features (`libsql`/`postgres`) intentionally left for separate product decision |
| [#6299](https://github.com/nearai/ironclaw/pull/6299) | **Capability-result collapse (Slice C)** — replaced `CapabilityOutcome`/mirror DTOs with `host_api::Resolution` | Core architecture simplification per §5.3 design doc; eliminates transitional mapping layer |
| [#6293](https://github.com/nearai/ironclaw/pull/6293) | **Producers emit `Resolution` directly** — completed collapse Stage 2b | All capability producers now emit `host_api::Resolution`/`GatedResolution`; `CapabilityOutcome` deleted |
| [#6271](https://github.com/nearai/ironclaw/pull/6271) | **Resume replay payload host-side** — moved raw gate/auth replay payload into `ReplayPayloadStore`, wired real durable stores | Production wiring for replay resilience (§5.3 Stage 2a-i) |
| [#6295](https://github.com/nearai/ironclaw/pull/6295) | **Crash-consistency chaos suite** + 2 crash-recovery fixes | Acceptance oracle for async write-behind durability (#6263 Step 3); surfaced and fixed real defects |
| [#6292](https://github.com/nearai/ironclaw/pull/6292) | **Freeze `RebornServicesApi` facade method set** | Locks down public API surface per §5.2.5/§10; enables independent evolution |

**Net effect:** The "reborn" architecture simplification (§4–§5 of design doc) is advancing across multiple slices simultaneously — feature flags, capability results, replay durability, and API surface are all converging.

## 4. Community Hot Topics

| Item | Activity | Underlying Need |
|------|----------|-----------------|
| [#6263](https://github.com/nearai/ironclaw/issues/6263) — Final store consolidation: retire `InMemoryTurnStateStore` | 9 comments, 0 👍 | **Architecture ratchet completion** — needs Slice 0 oracle + no-livelock evidence before removing last in-memory store; blocks full durability guarantee |
| [#6189](https://github.com/nearai/ironclaw/issues/6189) — Retryable stream error leaves completed response in failed state | 3 comments, 0 👍 | **User trust** — red error banner on successful completion confuses users; PR [#6302](https://github.com/nearai/ironclaw/pull/6302) fixes |
| [#6190](https://github.com/nearai/ironclaw/issues/6190) — Multiple conflicting error messages for single failure | 3 comments, 0 👍 | **Error UX clarity** — simultaneous streaming + context-limit banners obscure root cause; PR [#6301](https://github.com/nearai/ironclaw/pull/6301) consolidates |
| [#6257](https://github.com/nearai/ironclaw/issues/6257) / [#6290](https://github.com/nearai/ironclaw/issues/6290) — PDF `attachments.mime_type` validation error | 1/0 comments | **File upload regression** — reported via Slack (#x-ai-product-feedback); likely mime-type detection or tool setup gap |

## 5. Bugs & Stability

| Severity | Issue | Status | Fix PR |
|----------|-------|--------|--------|
| **High** | Stream retry error shows false failure banner on completed response ([#6189](https://github.com/nearai/ironclaw/issues/6189)) | Open | [#6302](https://github.com/nearai/ironclaw/pull/6302) — treats final reply as success, ignores trailing retry error |
| **High** | Multiple error banners for single execution ([#6190](https://github.com/nearai/ironclaw/issues/6190)) | Open | [#6301](https://github.com/nearai/ironclaw/pull/6301) — associates SSE error with active run, replaces provisional message |
| **Medium** | PDF upload/generation fails with `Invalid value (attachments.mime_type)` ([#6257](https://github.com/nearai/ironclaw/issues/6257), [#6290](https://github.com/nearai/ironclaw/issues/6290)) | Open (2 dup issues) | No PR yet — needs mime-type detection or tool registration fix |
| **Medium** | Cold-boot gateway regression: `provider_factory` dead code ([#6174](https://github.com/nearai/ironclaw/issues/6174) regression) | Open | [#6300](https://github.com/nearai/ironclaw/pull/6300) — re-threads caller-supplied factory |
| **Low** | Crash-recovery defects in turn-state row store (surfaced by chaos suite) | **Fixed** | [#6295](https://github.com/nearai/ironclaw/pull/6295) — two defects fixed, suite now green |

## 6. Feature Requests & Roadmap Signals

| Signal | Source | Likelihood for Next Version |
|--------|--------|----------------------------|
| **Onboard launcher (REPL/Web UI) with browser auto-open** | PR [#6297](https://github.com/nearai/ironclaw/pull/6297) | **High** — UX polish, screenshot included, ready for merge |
| **REPL thinking spinner + markdown rendering** | PR [#6289](https://github.com/nearai/ironclaw/pull/6289) | **High** — standalone UX fix, no-op for non-interactive |
| **Opt-in async write-behind durability for turn-state** | PR [#6298](https://github.com/nearai/ironclaw/pull/6298) | **Medium** — capability only, gated by chaos suite; production flip later |
| **Default legacy-free migration path** | PR [#6121](https://github.com/nearai/ironclaw/pull/6121) | **Medium** — architecture regression test added, explicit `full-migration` feature retained |
| **Auth-gate fingerprint includes credential `setup`** | PR [#6303](https://github.com/nearai/ironclaw/pull/6303) | **High** — blocking for IronLoop, follow-up to #6299 |

**Roadmap prediction:** Next version will likely include the REPL/Web UI onboarding (#6297, #6289), error UX fixes (#6301, #6302), and the auth-gate fingerprint fix (#6303). The async write-behind durability (#6298) and legacy-free migration (#6121) may land but remain opt-in/feature-gated.

## 7. User Feedback Summary

- **Pain point:** False error banners on successful chat completions ([#6189](https://github.com/nearai/ironclaw/issues/6189)) — users cannot trust UI state
- **Pain point:** Concurrent error banners obscure actual failure cause ([#6190](https://github.com/nearai/ironclaw/issues/6190)) — debugging difficulty
- **Pain point:** PDF files rejected:** PDF upload/generation broken (`attachments.mime_type` validation) — reported by Michael Kelly via Slack #x-ai-product-feedback ([#6257](https://github.com/nearai/ironclaw/issues/6257))
- **Positive signal:** Active Slack feedback channel (#x-ai-product-feedback) indicates real usage and engagement
- **No explicit satisfaction signals** in today's data — focus is on bug reports and architecture work

## 8. Backlog Watch — Needing Maintainer Attention

| Item | Age | Risk | Why It Matters |
|------|-----|------|----------------|
| [#5598](https://github.com/nearai/ironclaw/pull/5598) — Release with breaking changes | 17 days | **Release blocked** | Multiple crate version bumps with breaking API changes; held up by reborn landing |
| [#5664](https://github.com/nearai/ironclaw/pull/5664) — Actions group deps (16 updates) | 15 days | **CI drift** | Includes `actions/checkout` v4→v7, `claude-code-action` v1.0.88→v1.0.178; may need compatibility review |
| [#4032](https://github.com/nearai/ironclaw/pull/4032) — WASM group deps | 56 days | **Wasm toolchain lag** | `wit-component` 0.245.1→0.253.0; long-open dependabot PR suggests low priority or conflict |
| [#6121](https://github.com/nearai/ironclaw/pull/6121) — Legacy-free migration default | 5 days | **Migration UX** | Changes default migration behavior; needs operator docs review before merge |
| [#6274](https://github.com/nearai/ironclaw/issues/6274) — Finish `DeploymentConfig` as main composition config | 1 day | **Architecture completion** | Slice B artifact landed but incomplete; blocks §4.4/§5.6/§5.11 convergence |

---

**Project Health Assessment:** 🟡 **Active consolidation phase** — High merge velocity on architectural refactoring (29 PRs closed), but user-facing bugs persist and release is delayed. The crash-consistency chaos suite (#6295) is a strong quality signal. Next 1–2 weeks should see reborn slices converge, enabling the blocked release.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-07-20

## 1. Today's Overview
LobsterAI shows low but steady maintenance activity over the past 24 hours. Three issues and three pull requests were updated—all originally created on 2026-04-02 and marked `[stale]`—suggesting a recent triage or cleanup pass rather than new development. One issue (#1352) and one PR (#1350) were closed; the remaining four items remain open. No new releases were published. The project appears to be in a maintenance/backlog-grooming phase with no active feature work visible in the last day.

## 2. Releases
**No new releases** in the last 24 hours.

## 3. Project Progress
| PR | Status | Summary |
|----|--------|---------|
| [#1350](https://github.com/netease-youdao/LobsterAI/pull/1350) | **Closed** (stale) | Addressed skills-file generation blocking, missing intermediate-state feedback, and model comprehension gaps in the skill-creator workflow. Closed without merge—likely superseded or deemed stale. |
| [#1285](https://github.com/netease-youdao/LobsterAI/pull/1285) | Open (stale) | Dependabot: bump `concurrently` 8.2.2 → 9.2.1 (dev dependency). |
| [#1286](https://github.com/netease-youdao/LobsterAI/pull/1286) | Open (stale) | Dependabot: bump `tailwindcss` 3.4.19 → 4.2.2 (major version upgrade, dev dependency). |

**Net progress**: Dependency updates pending review; one stale feature/bug-fix PR closed without integration.

## 4. Community Hot Topics
| Item | Type | Comments | Reactions | Core Need |
|------|------|----------|-----------|-----------|
| [#1289](https://github.com/netease-youdao/LobsterAI/issues/1289) | Issue (feat) | 1 | 0 | **Code-block folding** for readability—users struggle with long AI-generated code blocks (15–200 lines) that dominate the chat view. |
| [#1287](https://github.com/netease-youdao/LobsterAI/issues/1287) | Issue (bug) | 1 | 0 | **IM bot connectivity test validation**—false positives when dummy credentials (`1`/`1`/`1`) pass the Popo connection test, risking misconfiguration. |
| [#1352](https://github.com/netease-youdao/LobsterAI/issues/1352) | Issue (bug) | 2 | 0 | **Attachment upload during task execution**—UI unresponsive when uploading files while a task is running (now closed). |

**Signal**: Front-end UX polish (code folding, upload blocking) and integration-test reliability are the most visible user pain points.

## 5. Bugs & Stability
| Severity | Issue | Status | Fix PR? |
|----------|-------|--------|---------|
| **Medium** | [#1287](https://github.com/netease-youdao/LobsterAI/issues/1287) – Popo IM connectivity test accepts invalid credentials | Open (stale) | No |
| **Low** | [#1352](https://github.com/netease-youdao/LobsterAI/issues/1352) – Attachment upload unresponsive during task run | **Closed** (stale) | No (closed without fix) |

No crashes or regressions reported today. The closed upload issue (#1352) lacks a linked fix PR, suggesting it may have been resolved elsewhere or abandoned.

## 6. Feature Requests & Roadmap Signals
1. **Code-block auto-fold/expand** ([#1289](https://github.com/netease-youdao/LobsterAI/issues/1289)) – Clear UX need; implementation scope is limited to `MarkdownContent.tsx`/`CodeBlock` component. High likelihood for next minor release if maintainers prioritize UI polish.
2. **Stricter IM bot credential validation** ([#1287](https://github.com/netease-youdao/LobsterAI/issues/1287)) – Security/reliability improvement; low complexity but requires backend test logic change.

## 7. User Feedback Summary
- **Pain points**: Long code blocks hinder conversation flow; false-positive integration tests erode trust; UI blocks during background tasks confuse users.
- **Use cases**: Heavy AI-assisted coding (frequent large code outputs), enterprise IM bot deployment (Popo), skill-creation workflows.
- **Sentiment**: Neutral-to-frustrated on UX details; no positive feedback captured in the last 24 h.

## 8. Backlog Watch
| Item | Age | Why It Matters |
|------|-----|----------------|
| [#1289](https://github.com/netease-youdao/LobsterAI/issues/1289) | 109 days | High-impact UX fix, well-scoped, zero controversy—awaiting maintainer bandwidth. |
| [#1287](https://github.com/netease-youdao/LobsterAI/issues/1287) | 109 days | Security-adjacent; simple validation gap that could mislead admins. |
| [#1285](https://github.com/netease-youdao/LobsterAI/pull/1285) / [#1286](https://github.com/netease-youdao/LobsterAI/pull/1286) | 109 days | Major Tailwind v4 upgrade (breaking changes likely) and concurrently v9; need CI validation before merge. |

**Recommendation**: Prioritize review/merge of the two Dependabot PRs (especially Tailwind v4) and assign #1289/#1287 to the next sprint to clear the stale backlog.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-07-20

## 1. Today's Overview
Moltis shows minimal public GitHub activity in the past 24 hours: zero issues updated, zero pull requests opened or merged, and only a single new release (`20260719.01`). The project appears to be in a quiet maintenance phase or operating primarily through internal/private channels. The release cadence (date-based versioning) suggests continuous delivery, but without changelog details or PR/issue traffic, it is difficult to assess feature velocity or community engagement from public signals alone.

## 2. Releases
### `20260719.01` (published 2026-07-19)
- **Link**: [github.com/moltis-org/moltis/releases/tag/20260719.01](https://github.com/moltis-org/moltis/releases/tag/20260719.01)
- **Changes**: No release notes, changelog, or asset list were provided in the data feed. The version follows a `YYYYMMDD.NN` scheme, indicating a daily or near-daily cut.
- **Breaking Changes / Migration Notes**: Unknown — maintainers should publish release notes to enable safe upgrades.
- **Action Item**: Watch the release page or repository `CHANGELOG.md` for details; consider pinning to a known-good version until notes are available.

## 3. Project Progress
- **Merged/Closed PRs today**: 0  
- **Features advanced / bugs fixed**: No public PR activity recorded in the last 24 h. Progress, if any, is not visible on GitHub.

## 4. Community Hot Topics
- **Most active Issues/PRs**: None in the last 24 h (0 issues, 0 PRs).  
- **Underlying needs**: The absence of public discussion may indicate either a stable, low-friction product or a community that communicates elsewhere (Discord, Matrix, private trackers). Maintainers should verify that contribution guidelines and issue templates are discoverable.

## 5. Bugs & Stability
- **New bug reports today**: 0  
- **Crashes / regressions**: None reported publicly.  
- **Fix PRs**: None.  
- **Assessment**: No public signal of instability; however, lack of reports ≠ absence of bugs. Encourage users to file issues with reproduction steps.

## 6. Feature Requests & Roadmap Signals
- **New feature requests today**: 0  
- **Predictions**: With no inbound requests, the next version will likely contain internal improvements, dependency updates, or minor polish rather than user-driven features. Monitor the release notes of `20260719.01` and subsequent cuts for clues.

## 7. User Feedback Summary
- **Pain points / use cases / satisfaction**: No user feedback captured in GitHub Issues or PR reviews today.  
- **Recommendation**: Add a lightweight feedback mechanism (e.g., GitHub Discussions, in-app telemetry opt-in, or a quarterly survey) to surface latent needs.

## 8. Backlog Watch
- **Long-unanswered Issues/PRs**: Not identifiable from the 24 h snapshot.  
- **Maintainer attention needed**:  
  1. Publish release notes for `20260719.01` and future versions.  
  2. Ensure `CONTRIBUTING.md`, issue templates, and a public roadmap exist to lower the barrier for external contributions.  
  3. Consider a monthly “heartbeat” issue or blog post to signal project health during quiet periods.

---

*Data source: GitHub REST API (issues, pulls, releases) for moltis-org/moltis, collected 2026-07-20 00:00–23:59 UTC. Links point to live GitHub resources; release notes may appear after digest publication.*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

⚠️ Summary generation failed.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

⚠️ Summary generation failed.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/DenisZheng/agents-radar).*