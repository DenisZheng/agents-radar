# OpenClaw Ecosystem Digest 2026-07-19

> Issues: 390 | PRs: 500 | Projects covered: 13 | Generated: 2026-07-19 02:04 UTC

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

# OpenClaw Project Digest — 2026-07-19

## 1. Today's Overview

OpenClaw shows **high velocity** with 390 issues and 500 PRs updated in the last 24 hours. The project released **v2026.7.2-beta.3**, introducing remote coding sessions across cloud workers and terminal resumption for Codex/Claude/OpenCode/Pi sessions. With 249 active issues and 264 open PRs, the backlog is substantial but actively triaged — many items carry `clawsweeper:needs-maintainer-review` labels, indicating a structured review pipeline. The merge rate (236 PRs closed/merged) suggests healthy throughput. Key themes: session durability, multi-channel messaging fixes, memory system hardening, and native app parity for Linux/Windows.

---

## 2. Releases

### v2026.7.2-beta.3 — *2026.7.2*
**Highlights:**
- **Remote coding sessions**: Run Control UI sessions on cloud workers; open Codex and Claude catalog sessions in terminals on their owning hosts; resume OpenCode and Pi sessions directly in a terminal ([#107670](https://github.com/openclaw/openclaw/pull/107670), [#107086](https://github.com/openclaw/openclaw/pull/107086), [#107200](https://github.com/openclaw/openclaw/pull/107200))
- **Native automation and nodes**: (details truncated in source)

**Migration notes**: Beta release — expect breaking changes in session state schema and channel ingress pipelines. Run `openclaw doctor --fix` after upgrade. SQLite migration in beta.2 had a known issue (index before column) fixed in beta.3 ([#109867](https://github.com/openclaw/openclaw/issues/109867)).

---

## 3. Project Progress (Merged/Closed PRs Today)

| PR | Area | Summary |
|----|------|---------|
| [#111119](https://github.com/openclaw/openclaw/pull/111119) | Discord | **Refactor**: Split 1,358-line message-process runtime into owned modules (reactions, reply delivery, draft progress, queue coordination) |
| [#76233](https://github.com/openclaw/openclaw/pull/76233) | Subagents | **Fix**: `exec-approval-followup` race with bundle-mcp runtime disposal → `UNAVAILABLE` errors |
| [#86827](https://github.com/openclaw/openclaw/pull/86827) | Group chat | **Fix**: Sessions stuck in `failed` state silently dropping messages; now recover and restart AI turns |
| [#79308](https://github.com/openclaw/openclaw/pull/79308) | Telegram | **Fix**: Group replies incorrectly sent to DM `chat_id` instead of originating group |
| [#96732](https://github.com/openclaw/openclaw/pull/96732) | Models | **Fix**: `reasoning_content` leak from moonshot/kimi-k2.6 into chat output; frontend reasoning status now in sync |
| [#88548](https://github.com/openclaw/openclaw/pull/88548) | Copilot | **Fix**: Static default model list no longer shadows live entitlement discovery (`fetchCopilotModelCatalog`) |
| [#91592](https://github.com/openclaw/openclaw/pull/91592) | Memory | **Fix**: `memory_search` "index scope changed" after `--force rebuild` — scopeHash mismatch resolved |
| [#85822](https://github.com/openclaw/openclaw/pull/85822) | Discord | **Perf**: Eliminated ~48s silent gap between `embedded run done` and `lane task done` on Discord turns |
| [#79553](https://github.com/openclaw/openclaw/pull/79553) | Wizard | **Fix**: Credential cross-overwrite when adding new accounts in multi-account plugins (WeCom, Telegram) |
| [#49104](https://github.com/openclaw/openclaw/pull/49104) | Telegram | **Fix**: HTML `parse_mode` silently truncating responses with angle-bracket tags (`<thinking>`, `<tool>`) |

**Pattern**: Heavy focus on **message delivery reliability**, **session state machines**, and **provider integration correctness**.

---

## 4. Community Hot Topics (Most Active Issues)

| Issue | Comments | 👍 | Core Need |
|-------|----------|----|-----------|
| [#75](https://github.com/openclaw/openclaw/issues/75) **Linux/Windows Clawdbot Apps** | 113 | 81 | **Native desktop parity** — macOS/iOS/Android exist; Linux/Windows users blocked from Control UI and native node workflows |
| [#7707](https://github.com/openclaw/openclaw/issues/7707) **Memory Trust Tagging by Source** | 17 | 0 | **Security hardening** — Prevent memory poisoning via untrusted content (web scrapes, third-party skills) by tagging origin trust levels |
| [#91009](https://github.com/openclaw/openclaw/issues/91009) **Codex hook relay CPU stall** | 14 | 2 | **Performance regression** — `openclaw-hooks` processes consume 100%+ CPU, stalling gateway RPC on Codex tool calls |
| [#10659](https://github.com/openclaw/openclaw/issues/10659) **Masked Secrets** | 13 | 4 | **Credential isolation** — Agents should *use* API keys without *seeing* them (prevent leaks, prompt injection extraction) |
| [#79077](https://github.com/openclaw/openclaw/issues/79077) **Telegram Guest Bots & Bot-to-Bot** | 11 | 8 | **Platform compliance** — Support Telegram's May 2026 Guest Bots and Bot-to-Bot Communication specs |
| [#96975](https://github.com/openclaw/openclaw/issues/96975) **Subagent context isolation** | 10 | 1 | **Context hygiene** — Subagent completion floods parent with child session content; want status + link only by default |

**Underlying signals**: 
- **Desktop expansion** is the #1 user ask (81 👍 on #75)
- **Security architecture** (memory trust, masked secrets) gaining traction
- **Codex integration stability** regressed in 2026.6.x/2026.7.x
- **Telegram platform velocity** requires rapid plugin updates

---

## 5. Bugs & Stability (Ranked by Severity)

| Severity | Issue | Status | Fix PR? | Impact |
|----------|-------|--------|---------|--------|
| **P0 / Release Blocker** | [#108435](https://github.com/openclaw/openclaw/issues/108435) Gateway fails to start on 2026.7.1 (`Error: gateway did not start on 127.0...`) | Open | No | All deployments broken post-upgrade |
| **P0 / Release Blocker** | [#109867](https://github.com/openclaw/openclaw/issues/109867) Beta.2 migration creates `agent_id` index before column → `doctor --fix` blocks gateway startup | Open | No | Migration broken for beta.1→beta.2 upgraders |
| **P1 / Crash Loop** | [#99263](https://github.com/openclaw/openclaw/issues/99263) Gateway crashes `ERR_INVALID_STATE` (FileHandle closed during GC) on Node 26 with inbound images | Open | No | Node 26 incompatibility — process death |
| **P1 / Data Loss** | [#109490](https://github.com/openclaw/openclaw/issues/109490) Codex turn interrupted after client-delegated `message` tool (`terminate:true`) — promised work never executes | Open | No | Agent work silently dropped mid-session |
| **P1 / Message Loss** | [#96242](https://github.com/openclaw/openclaw/issues/96242) Duplicate Telegram messages across independent paths | Open | No | User-facing spam, trust erosion |
| **P1 / Session State** | [#78562](https://github.com/openclaw/openclaw/issues/78562) Repeated auto-compaction loops after successful compaction (tool-heavy sessions) | Open | No | UX degradation, context thrashing |
| **P1 / Memory** | [#99910](https://github.com/openclaw/openclaw/issues/99910) Memory dreaming pegs gateway event loop ~10 min; short-term recall never persists | Open | No | Gateway unresponsive, channels drop |
| **P2 / Regression** | [#86684](https://github.com/openclaw/openclaw/issues/86684) `sessions_yield` subagent wake compacts parent at low context usage (65k/1.05M) | Open | No | Unnecessary compaction, context loss |
| **P2 / Security** | [#109672](https://github.com/openclaw/openclaw/issues/109672) AWS Guardrail blocks not logged/reported — silent failure | Open | No | Compliance blind spot |
| **P2 / Model Bug** | [#107814](https://github.com/openclaw/openclaw/issues/107814) `gpt-5.3-codex-spark` emits empty args for required tool calls | Open | No | Tool execution failure cascade |

**Note**: Several P1s have linked PRs in progress (e.g., [#83184](https://github.com/openclaw/openclaw/issues/83184) heartbeat delivery stuck — PR linked), but most critical regressions lack fix PRs yet.

---

## 6. Feature Requests & Roadmap Signals

| Request | Issue | Signals | Likelihood for Next Version |
|---------|-------|---------|----------------------------|
| **Linux/Windows native apps** | [#75](https://github.com/openclaw/openclaw/issues/75) | 81 👍, oldest open enhancement (2026-01-01), `clawsweeper:needs-product-decision` | **High** — explicit product decision needed; desktop parity is strategic |
| **Masked secrets (credential isolation)** | [#10659](https://github.com/openclaw/openclaw/issues/10659) | Security-critical, `impact:auth-provider`, `impact:security`, linked PR open | **High** — aligns with skill permission manifest ([#12219](https://github.com/openclaw/openclaw/issues/12219)) |
| **Memory trust tagging** | [#7707](https://github.com/openclaw/openclaw/issues/7707) | `impact:security`, `impact:session-state`, diamond lobster rating | **Medium-High** — prerequisite for safe third-party skill ecosystem |
| **Dynamic model discovery (OpenRouter+)** | [#10687](https://github.com/openclaw/openclaw/issues/10687) | Maintainer-tagged, `impact:auth-provider`, static catalog pain point | **High** — Copilot fix ([#88548](https://github.com/openclaw/openclaw/pull/88548)) shows direction |
| **Filesystem sandboxing config** | [#7722](https://github.com/openclaw/openclaw/issues/7722) | `tools.fileAccess` design exists, security review needed | **Medium** — depends on permission manifest standardization |
| **Telegram Guest Bots / Bot-to-Bot** | [#79077](https://github.com/openclaw/openclaw/issues/79077) | Platform mandate (May 2026), 8 👍, stale label | **High** — compliance deadline passed |
| **Subagent context isolation (default)** | [#96975](https://github.com/openclaw/openclaw/issues/96975) | Gold shrimp rating, UX friction for heavy workloads | **Medium** — low-risk config change |
| **Model fallback on context overflow** | [#9986](https://github.com/openclaw/openclaw/issues/9986) | Fallback chain exists but ignores context errors | **Medium** — extends existing `agents.defaults.model.fallbacks` |
| **Session auto-titling (lazy, cheap models)** | [#99583](https://github.com/openclaw/openclaw/issues/99583) | Proposal, `llm-slug-generator` exists, off-meta tidepool | **Low-Medium** — nice-to-have, not blocking |

**Roadmap inference**: Next stable (post-beta) will likely ship **desktop apps for Linux/Windows**, **masked secrets**, **dynamic model discovery**, and **Telegram platform compliance**. Memory trust tagging and filesystem sandboxing are on the security hardening track.

---

## 7. User Feedback Summary (Pain Points & Use Cases)

| Theme | Evidence | Sentiment |
|-------|----------|-----------|
| **Desktop parity gap** | #75 (113 comments, 81 👍): "We have apps for macOS, iOS and Android... Linux and Windows are missing" | 😡 **High frustration** — power users blocked on native Control UI |
| **Codex integration instability** | #91009 (CPU stall), #109490 (turn interruption), #99071 (excessive disk I/O), #89147 (hook relay starvation) | 😰 **Anxiety** — core coding agent workflow unreliable in 2026.6.x/7.x |
| **Silent message loss** | #96242 (duplicate Telegram), #86827 (failed state drops), #83184 (heartbeat stuck), #109490 (promised work lost) | 😤 **Trust erosion** — "messages vanish without error" |
| **Migration friction** | #109867 (beta.2 migration broken), #108435 (gateway won't start), #91592 (memory index scope mismatch) | 😰 **Upgrade fear** — `doctor --fix` not reliable |
| **Security transparency** | #10659 (masked secrets), #7707 (memory trust), #12219 (skill permissions) | 🤔 **Proactive demand** — users building production systems need auditability |
| **Telegram platform lag** | #79077 (Guest Bots/Bot-to-Bot), #49104 (HTML truncation), #79308 (wrong chat_id) | 😐 **Acceptance with urgency** — "it works but breaks on new features" |
| **Subagent UX** | #96975 (context flood), #8299 (announce suppression), #76233 (approval race) | 😕 **Workaround fatigue** — powerful feature, rough edges |

**Overall**: Users are **invested but stressed** — OpenClaw is mission-critical for many, but beta-quality regressions in messaging, Codex, and migrations are burning goodwill. Desktop Linux/Windows is the #1 unmet need.

---

## 8. Backlog Watch (Stale/Blocked High-Value Items)

| Item | Age | Labels | Why It Matters | Maintainer Action Needed |
|------|-----|--------|----------------|--------------------------|
| [#75](https://github.com/openclaw/openclaw/issues/75) **Linux/Windows Clawdbot Apps** | 200 days | `enhancement`, `help wanted`, `P2`, `clawsweeper:needs-product-decision`, `

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: Personal AI Assistant / Agent Open-Source Ecosystem (2026-07-19)

---

## 1. Ecosystem Overview

The personal AI agent ecosystem shows **bifurcated maturity**: a cluster of high-velocity, production-grade frameworks (OpenClaw, ZeroClaw, IronClaw, NanoClaw, CoPaw) operating at 40–500 daily PR/issue updates with dedicated security and multi-channel engineering, contrasted against smaller or stalled projects (NullClaw, TinyClaw, ZeptoClaw, NanoBot) with near-zero activity. Most active projects are in **stabilization or architectural migration phases** rather than feature expansion — OpenClaw and CoPaw are patching beta regressions; IronClaw and ZeroClaw are executing deep refactors (Reborn, air-gapped execution); Hermes, PicoClaw, NanoClaw, and Moltis are clearing backlog and hardening integrations. **No project cut a major release today**; the ecosystem is collectively "hardening" ahead of H2 2026 milestones. Community engagement correlates with deployment breadth: projects supporting 4+ chat platforms (OpenClaw, ZeroClaw, Hermes, CoPaw) show higher issue volumes and faster fix cycles.

---

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Merged/Closed PRs | Release Today | Health Score | Phase |
|---------|--------------|-----------|-------------------|---------------|--------------|-------|
| **OpenClaw** | 390 | 500 | 236 | ✅ v2026.7.2-beta.3 | 8.5/10 | Beta stabilization |
| **ZeroClaw** | 50 | 50 | 3 | ❌ | 8/10 | Architectural refinement |
| **IronClaw** | ~30* | ~30* | 30 | ❌ | 8/10 | Deep refactor (Reborn) |
| **NanoClaw** | 18 | 26 | 17 | ❌ | 7.5/10 | Bug-fix accumulation |
| **Hermes Agent** | 50 | 50 | 6 | ❌ | 7.5/10 | Windows/gateway stabilization |
| **CoPaw** | 11 | 7 | 1 | ❌ (v2.0.0.post3 2d ago) | 7.5/10 | Post-release patching |
| **PicoClaw** | 4 | 12 | 8 | ❌ | 6/10 (🟡) | Backlog clearing / security |
| **Moltis** | 0 | 3 | 2 | ❌ | 7/10 | Incremental integration fixes |
| **LobsterAI** | 6* | 3 | 2 | ✅ v2026.7.17 (patch) | 5.5/10 | Stalled backlog, low engagement |
| **NullClaw** | 1 | 0 | 0 | ❌ | 4/10 (🟡) | Single build-blocking bug |
| **TinyClaw** | 0 | 0 | 0 | ❌ | — | Inactive |
| **ZeptoClaw** | 0 | 0 | 0 | ❌ | — | Inactive |
| **NanoBot** | — | — | — | — | — | Data unavailable |

*Estimated from digest totals. OpenClaw and ZeroClaw lead raw velocity; IronClaw leads merge throughput; CoPaw leads fix latency (4/7 critical bugs have PRs within 24h).

---

## 3. OpenClaw's Position

**Advantages vs. Peers**
- **Scale & Breadth**: 5–10× the daily activity of nearest peers; supports 7+ chat platforms (Discord, Telegram, Slack, Matrix, WeCom, etc.) + native mobile/desktop apps (macOS/iOS/Android shipped, Linux/Windows #1 user ask).
- **Session Durability Engineering**: Unique investment in remote coding sessions (cloud workers), terminal resumption across Codex/Claude/OpenCode/Pi, and SQLite migration tooling (`doctor --fix`).
- **Structured Review Pipeline**: `clawsweeper:needs-maintainer-review` labels and 236 merges/24h demonstrate operational maturity others lack.
- **Memory System Depth**: Dreaming, trust tagging, scopeHash validation, and cross-session recall are production concerns, not prototypes.

**Technical Approach Differences**
- **Multi-process Gateway Architecture**: Separates channel ingress, session state, model routing, and memory into independently deployable services — contrasts with monolithic binaries (IronClaw, ZeroClaw, Hermes).
- **Provider-Agnostic Model Layer**: Dynamic entitlement discovery (Copilot fix #88548) and fallback chains exceed static catalog approaches in NanoClaw/LobsterAI.
- **Security-First Primitives**: Masked secrets (#10659), memory trust tagging (#7707), and skill permission manifests (#12219) are baked into core, not bolted on.

**Community Size**: 81 👍 on Linux/Windows desktop request (#75) vs. 0–8 on peer top issues; 113 comments on same issue indicates largest active user base. However, **beta regressions (Codex CPU stall, gateway startup failures, migration breaks)** are burning goodwill — a risk peers in stabilization (Hermes, NanoClaw) are avoiding by not shipping beta.

---

## 4. Shared Technical Focus Areas

| Requirement | Projects Affected | Specific Needs |
|-------------|-------------------|----------------|
| **Multi-channel Message Reliability** | OpenClaw, Hermes, NanoClaw, ZeroClaw, Moltis, CoPaw | Duplicate suppression (Telegram), heartbeat delivery, ACP-only onboarding, mention-mode UX, websocket lifetime coupling |
| **Desktop/Native App Parity** | OpenClaw (#75, 81 👍), Hermes (#38216 Windows crash), CoPaw (#6239 Windows PATH), PicoClaw (ARMv7 builds) | Linux/Windows native Control UI; Windows installer/TUI stability; ARM/edge deployment |
| **Credential Isolation & Secret Management** | OpenClaw (#10659 masked secrets), ZeroClaw (#8424 workspace forbidden paths, #8857 plugin scoped secrets), IronClaw (#6247 MCP bearer tokens plaintext), NanoClaw (#3065 loopback HMAC) | Agents use keys without seeing them; encrypted settings; secret references; supply-chain signing |
| **Model Routing & Fallback Intelligence** | OpenClaw (#10687 dynamic discovery, #9986 context-overflow fallback), ZeroClaw (#8600 per-chat switching, #7431 pre-turn elicitation), NanoClaw (#1681 keyword routing), CoPaw (#6242 embedding dimensions) | Task-aware model selection; provider-agnostic fallback; context-aware escalation |
| **Session State Durability & Recovery** | OpenClaw (remote sessions, terminal resume), Hermes (turn persistence gap), NanoClaw (scheduled task cross-session visibility), ZeroClaw (web dashboard WS lifetime), CoPaw (session blocked after timeout) | Survive process restarts, network partitions, user disconnects; resume from durable log |
| **Security Hardening & Compliance** | ZeroClaw (SLSA, hardware PGP, air-gapped), IronClaw (MCP credential encryption), OpenClaw (AWS Guardrail logging, memory trust), PicoClaw (Go 1.25.12 CVEs) | Supply-chain provenance; plugin sandboxing; audit logs; vulnerability response |

---

## 5. Differentiation Analysis

| Dimension | OpenClaw | ZeroClaw | IronClaw | Hermes | NanoClaw | CoPaw | Moltis | PicoClaw |
|-----------|----------|----------|----------|--------|----------|-------|--------|----------|
| **Target User** | Power users, teams, cloud-native deployments | Security-first, air-gapped, enterprise | Rust developers, architecture enthusiasts | Desktop-first, multi-profile individuals | Self-hosted operators, Slack/Telegram shops | Chinese dev community, Docker/WSL2 | ACP-first, pluggable memory | Edge/ARM, hardware hackers |
| **Architecture** | Multi-service gateway (TypeScript/Go) | Monolithic Rust, capability-state-machine | Rust, "Reborn" typed capability fold | Python/TypeScript, profile-based | Go + TypeScript, SQLite-heavy | Python, sandbox-centric | Rust, ACP-native | Go, mautrix-based |
| **Channel Breadth** | 7+ (Discord, Telegram, Slack, Matrix, WeCom, etc.) | 6+ (GitHub, Slack, Discord, Matrix, Telegram, Email) | WebUI + API, MCP servers | Telegram, Slack, Discord, API | Slack, Telegram, Discord, Matrix | Console/Web, Mattermost (stale) | Slack, ACP agents | Matrix, WhatsApp, Simplex (PR) |
| **Memory System** | Dreaming, trust tagging, cross-session, SQLite | Vector + keyword, scoped secrets | Capability-outcome records | Identity/memory files (SOUL.md) | Scheduled tasks, group-scoped | Project isolation (proposed), recall | Pluggable backends (zvec exp.) | Agent collaboration bus |
| **Security Posture** | Masked secrets, trust tagging, skill perms | SLSA, hardware PGP, air-gapped, `.zeroclawignore` | MCP credential encryption (planned) | Env-based keys, OAuth per-profile | Loopback HMAC, credential proxy | Sandbox fallback, governance actions | Configurable Slack base URL | OAuth refresh concurrency fix |
| **Release Cadence** | Frequent beta, migration tooling | Infrequent, architectural gates | Held for Reborn promotion | Batch after stabilization | Accumulating fixes, no release | Post-release patches (v2.0.0.post3+) | None recently | None, stabilization |

**Key Insight**: The ecosystem splits into **platform plays** (OpenClaw, ZeroClaw — broad channel support, multi-tenant) vs. **architecture plays** (IronClaw, Moltis — typed capability folds, ACP-native) vs. **operator tools** (NanoClaw, Hermes, CoPaw, PicoClaw — self-hosted, specific channel depth). OpenClaw uniquely spans all three.

---

## 6. Community Momentum & Maturity

| Tier | Projects | Signals |
|------|----------|---------|
| **Rapid Iteration / High Velocity** | OpenClaw, ZeroClaw, IronClaw | 30–500 PRs/24h; deep architectural work; dedicated security engineering; RFC-driven design |
| **Active Stabilization** | Hermes, NanoClaw, CoPaw, Moltis | 3–50 PRs/24h; bug-fix dominated; clearing backlog; preparing next patch/minor |
| **Maintenance / Backlog Clearing** | PicoClaw, LobsterAI | Low merge throughput on open PRs; stale issues (60–100+ days); security updates stalled |
| **Stalled / Minimal** | NullClaw, TinyClaw, ZeptoClaw, NanoBot | 0–1 PRs/24h; single blocker or no activity; no release cadence |

**Maturity Indicators**:
- **Production Hardening**: OpenClaw (migration tooling, `doctor --fix`), ZeroClaw (SLSA, hardware PGP), IronClaw (ratchet/DTO freeze), NanoClaw (credential proxy fixes).
- **Contributor Health**: CoPaw (2 first-time PRs in 24h), Moltis (fast merges on scoped PRs), ZeroClaw (XL PRs under review).
- **Risk**: OpenClaw's beta regressions; LobsterAI's 6 stale April issues with 0 fix PRs; PicoClaw's 0 reviews on 5 open PRs including security bump.

---

## 7. Trend Signals for AI Agent Developers

1. **Session Durability > Raw Intelligence**: Every active project is investing in *surviving interruptions* (terminal resume, WS disconnect recovery, turn persistence, scheduled task cross-session visibility). The winning abstraction is **durable execution log + deterministic replay**, not context window size.

2. **Credential Isolation is Table Stakes**: Masked secrets (OpenClaw), plugin-scoped secrets (ZeroClaw), loopback HMAC (NanoClaw), MCP encryption (IronClaw) — **agents must use keys without seeing them**. This is the #1 blocker for enterprise/team adoption.

3. **Multi-Channel is a Compliance Burden**: Telegram Guest Bots/Bot-to-Bot (OpenClaw, Hermes), Slack Socket Mode (NanoClaw, Moltis), Discord `allowed_channels` parity (ZeroClaw) — **platform velocity exceeds maintainer capacity**. Projects adopting *configurable base URLs* (Moltis, PicoClaw Simplex PR) and *protocol abstractions* (ACP in Moltis, MCP in IronClaw/ZeroClaw) survive better.

4. **Memory Systems Converging on Trust + Scope**: OpenClaw (trust tagging), ZeroClaw (workspace forbidden paths), Hermes (SOUL.md enforcement), CoPaw (project isolation) — **untrusted content (web scrapes, third-party skills) must be tagged and scoped**. Raw RAG is insufficient.

5. **Architectural Convergence on Typed Capability Folds**: IronClaw (Reborn `CapabilityOutcome→Resolution`), ZeroClaw (canonical tool-call chokepoint), OpenClaw (gateway session state machines) — **match-based dispatch over trait objects**, **authorization as data**, **render-from-record** contracts. This reduces runtime surprises.

6. **Windows/ARM/Edge is the Next Frontier**: OpenClaw (#75, 81 👍), Hermes (#38216 crash, #67159 TUI), CoPaw (#62

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

⚠️ Summary generation failed.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-07-19

## 1. Today's Overview
Hermes Agent shows **high maintenance velocity** with 100 total items (50 issues + 50 PRs) updated in the last 24 hours. The project is in active stabilization mode: 32 issues closed and 6 PRs merged/closed indicate rapid triage and resolution. No new release was cut today, suggesting changes are accumulating on `main` for a future batch release. Windows desktop stability, Telegram gateway reliability, and multi-profile session management dominate current workstreams.

## 2. Releases
**No new releases today.** The last release predates this reporting window. Changes from merged PRs (see §3) will likely ship in the next version bump.

## 3. Project Progress — Merged/Closed PRs Today
| PR | Type | Summary | Impact |
|----|------|---------|--------|
| [#67248](https://github.com/NousResearch/hermes-agent/pull/67248) | **Bug fix** | Dedupe pending voice transcript echoes in Telegram gateway (fixes [#61455](https://github.com/NousResearch/hermes-agent/issues/61455)) | Eliminates duplicate 🎙️ messages on voice interrupts |
| [#66984](https://github.com/NousResearch/hermes-agent/pull/66984) | **Bug fix** | Persist delivered response when turn tail is a tool-call row | Closes transcript durability gap (#43849/#44100) |
| [#67240](https://github.com/NousResearch/hermes-agent/pull/67240) | **Bug fix** | Same fix as #66984 (duplicate implementation) + SQLite durability regression | Ensures `final_response` reaches durable store |
| [#67241](https://github.com/NousResearch/hermes-agent/pull/67241) | **Bug fix** | Telegram wedged-recovery watchdog + bounded drain (fixes [#66377](https://github.com/NousResearch/hermes-agent/issues/66377)) | Prevents silent gateway deafness; enables auto-recovery |
| [#67243](https://github.com/NousResearch/hermes-agent/pull/67243) | **Feature** | Canonical shared xAI OAuth store for multi-profile single-use refresh tokens (fixes [#65394](https://github.com/NousResearch/hermes-agent/issues/65394)) | Solves multi-profile death for Grok OAuth |
| [#66641](https://github.com/NousResearch/hermes-agent/pull/66641) | **Bug fix** | `_resolve_task_provider_model` now reads `key_env` in auxiliary task config | Fixes 401 on vision/compression when using env-based keys |

**Net progress:** 6 PRs merged — all bug fixes or stability improvements. No new features shipped today.

## 4. Community Hot Topics (Most Commented/Reactions)
| Item | Comments | Type | Core Need |
|------|----------|------|-----------|
| [#38216](https://github.com/NousResearch/hermes-agent/issues/38216) | 10 | **Bug (P1, Windows)** | Desktop v40.9.3 crashes on startup (0x80000003 breakpoint) — blocks Windows 11 users |
| [#66829](https://github.com/NousResearch/hermes-agent/issues/66829) | 7 | **Bug (P2, Vision)** | Desktop always routes images through auxiliary vision model even when main model supports vision natively — wastes compute & degrades quality |
| [#66616](https://github.com/NousResearch/hermes-agent/issues/66616) | 6 | **Automation (P3)** | Skills index stale (29.8h > 26h limit) — CI cron not running frequently enough |
| [#66950](https://github.com/NousResearch/hermes-agent/issues/66950) | 5 | **Feature/Arch (P3)** | Identity/memory files load but rule compliance is probabilistic; `soul-guard` file-edit guard is no-op — users want *enforced* agent constraints |
| [#67233](https://github.com/NousResearch/hermes-agent/issues/67233) | 4 | **Bug (P2, Telegram/Vision)** | Unable to send images to LLM via Telegram gateway — `vision_analyze` missing or misrouted |

**Pattern:** Windows desktop crashes and vision routing logic are the loudest pain points. Users expect *deterministic* behavior (enforced rules, correct model routing) not probabilistic compliance.

## 5. Bugs & Stability — Ranked by Severity
| Severity | Issue | Status | Fix PR? | Notes |
|----------|-------|--------|---------|-------|
| **P0 / Crash** | [#38216](https://github.com/NousResearch/hermes-agent/issues/38216) Desktop v40.9.3 crashes on Windows 11 startup (breakpoint exception) | **Closed** | Likely in [#67251](https://github.com/NousResearch/hermes-agent/pull/67251) (desktop crash on reasoning content + py39 compat) | Blocker for Windows users; fixed in main |
| **P0 / Install** | [#66994](https://github.com/NousResearch/hermes-agent/issues/66994) Installer `install.ps1` fails at line 1619 | **Closed** | Unclear | Multiple reports; may relate to [#67000](https://github.com/NousResearch/hermes-agent/issues/67000) |
| **P1 / Gateway** | [#66377](https://github.com/NousResearch/hermes-agent/issues/66377) Telegram polling reconnect ladder stalls silently — process alive but dead | **Closed** | ✅ [#67241](https://github.com/NousResearch/hermes-agent/pull/67241) merged | Watchdog + bounded drain prevents silent freeze |
| **P1 / Data Loss** | [#66984](https://github.com/NousResearch/hermes-agent/issues/66984) Turn persistence gap when tail is tool-call row | **Closed** | ✅ [#66984](https://github.com/NousResearch/hermes-agent/pull/66984) & [#67240](https://github.com/NousResearch/hermes-agent/pull/67240) merged | Two independent fixes landed |
| **P2 / Vision** | [#66829](https://github.com/NousResearch/hermes-agent/issues/66829) Auxiliary vision model always used, bypassing main model native vision | **Open** | No | Wastes tokens/latency; quality regression |
| **P2 / Auth** | [#66641](https://github.com/NousResearch/hermes-agent/issues/66641) `key_env` ignored in auxiliary task config → 401 | **Closed** | ✅ Merged (PR not listed but issue closed) | Env-based API keys now work for vision/compression |
| **P2 / MCP** | [#67187](https://github.com/NousResearch/hermes-agent/issues/67187) Parked MCP server revival reconnects but doesn't re-register tools | **Open** | No | Tools silently disappear after recovery |
| **P2 / Session** | [#67120](https://github.com/NousResearch/hermes-agent/issues/67120) Model change via SSH/config no longer propagates to active Telegram sessions | **Open** | No | Regression after `hermes update` (commit 0f102fa4) |
| **P2 / Windows TUI** | [#67159](https://github.com/NousResearch/hermes-agent/issues/67159) Rendering artifacts (ghost chars, truncation) in legacy `cmd.exe` | **Closed** | ✅ [#67159](https://github.com/NousResearch/hermes-agent/pull/67159) merged | Windows Terminal unaffected |
| **P3 / Lockfile** | [#67158](https://github.com/NousResearch/hermes-agent/issues/67158) CLI `lockfile` at `HERMES_HOME` root not cleaned on exit → ghost locks | **Open** | No | Blocks multi-instance runs on Windows |

**Stability signal:** Critical crashes (desktop startup, Telegram gateway silence, turn persistence) have fixes merged. Remaining open P2s are logic/routing bugs — no data loss or crashes.

## 6. Feature Requests & Roadmap Signals
| Request | Issue/PR | Likelihood for Next Version | Rationale |
|---------|----------|----------------------------|-----------|
| **Smart model routing** (auto-select by task complexity) | [#66860](https://github.com/NousResearch/hermes-agent/issues/66860) | Low | Marked `not-planned`; requires significant architecture |
| **Role-based subagents** (inherit profile identity: SOUL.md + skills + tools) | [#66819](https://github.com/NousResearch/hermes-agent/issues/66819) | Low | Marked `not-planned`; power-user niche |
| **Boardstate Phase 2** (Board as first-class desktop page) | [#66415](https://github.com/NousResearch/hermes-agent/issues/66415) | Medium | Web dashboard PR [#66381](https://github.com/NousResearch/hermes-agent/pull/66381) exists; desktop integration tracked |
| **Slack configurable slash-command namespace** | [#66163](https://github.com/NousResearch/hermes-agent/pull/66163) | High | Open PR, solves real collision problem |
| **File upload support in API server** | [#67246](https://github.com/NousResearch/hermes-agent/pull/67246) | Medium | Open PR; enables `MEDIA:/path` delivery to API clients |
| **Single gateway, multiple agents** (rebased MVP) | [#62944](https://github.com/NousResearch/hermes-agent/pull/62944) | Low | Massive scope (`blast-broad`); still needs decision |
| **German locale for Desktop** | [#67077](https://github.com/NousResearch/hermes-agent/pull/67077) | High | Simple i18n addition; 5th locale |

**Roadmap read:** Near-term = i18n, Slack namespacing, API file uploads, Board desktop integration. Long-term = multi-agent gateway, smart routing, subagents.

## 7. User Feedback Summary — Real Pain Points
| Theme | Representative Voices | Sentiment |
|-------|----------------------|-----------|
| **Windows desktop unusable** | "crashes immediately on startup" ([#38216](https://github.com/NousResearch/hermes-agent/issues/38216)), "installation didn't finish error" ([#66994](https://github.com/NousResearch/hermes-agent/issues/66994)), "ghost chars in cmd.exe" ([#67159](https://github.com/NousResearch/hermes-agent/issues/67159)) | 😡 **High frustration** — blockers for non-technical Windows users |
| **Vision routing broken** | "always preprocesses through auxiliary vision model even when main model supports vision" ([#66829](https://github.com/NousResearch/hermes-agent/issues/66829)), "unable to send image to my LLM via Telegram" ([#67233](https://github.com/NousResearch/hermes-agent/issues/67233)) | 😕 **Confused** — mental model mismatch; expects automatic best-path routing |
| **Gateway silently dies** | "Telegram gateway becomes silently and permanently unresponsive… process stays active" ([#66377](https://github.com/NousResearch/hermes-agent/issues/66377)) | 😨 **Anxiety** — no visibility into health; manual restart only recovery |
| **Rules not enforced** | "model repeatedly violates explicit user rules… soul-guard file-edit guard is a no-op" ([#66950](https://github.com/NousResearch/hermes-agent/issues/66950)) | 😤 **Distrust** — users want *guardrails*, not suggestions |
| **Multi-profile auth broken** | xAI OAuth single-use refresh tokens revoke each other across profiles ([#65394](https://github.com/NousResearch/hermes-agent/issues/65394)) | 😰 **Blocked** — power users can't run parallel profiles |
| **Update UX poor** | "single dialog sits unchanged for 3–8 minutes" ([#67177](https://github.com/NousResearch/hermes-agent/issues/67177)), "failed self-update leaves hermes-setup alive… blocks boot forever" ([#66356](https://github.com/NousResearch/hermes-agent/issues/66356)) | 😩 **Impatient** — no progress feedback; failure leaves system wedged |

**Overall:** Users love the *concept* (profiles, skills, multi-gateway) but hit **sharp edges on Windows, vision routing, gateway observability, and rule enforcement**. Trust erodes when "it works on Linux/WSL but not native Windows."

## 8. Backlog Watch — Stale/Important Items Needing Attention
| Item | Age | Why It Matters | Suggested Action |
|------|-----|----------------|------------------|
| [#51448](https://github.com/NousResearch/hermes-agent/issues/51448) LM Studio on native Windows fails ("empty stream"); works under WSL | 26 days | **P2, Windows blocker** for local LLM users — 2+ community reports | Assign Windows CI test matrix; debug stream handling diff vs WSL |
| [#65631](https://github.com/NousResearch/hermes-agent/issues/65631) Provider error chunk (HTTP-200 SSE with 400) misclassified as "empty stream" → infinite retry | 3 days | **P2, compatibility** — breaks any OpenAI-compatible provider returning streaming errors | Harden SSE error parsing; add test vectors |
| [#66829](https://github.com/NousResearch/hermes-agent/issues/66829) Auxiliary vision always used over native main model vision | 1 day | **P2, UX/performance** — wastes tokens, degrades quality | Design routing policy: prefer native vision → fallback to auxiliary |
| [#67120](https://github.com/NousResearch/hermes-agent/issues/67120) Model change via config no longer propagates to active Telegram sessions | 1 day | **P2, regression** — worked before commit 0f102fa4 | Bisect & revert/repair config hot-reload for gateway sessions |
| [#67187](https://github.com/NousResearch/hermes-agent/issues/67187) MCP parked server revival doesn't re-register tools | 1 day | **P2, tools ecosystem** — silent capability loss after recovery | Ensure tool registry sync on MCP session renegotiation |
| [#66616](https://github.com/NousResearch/hermes-agent/issues/66616) Skills index stale (29.8h > 26h limit) — CI cron insufficient | 1 day | **P3, docs integrity** — `/docs/skills` serves stale data | Increase cron frequency or add manual trigger; monitor SLA |
| [#62944](https://github.com/NousResearch/hermes-agent/pull/62944) Single gateway, multiple agents (rebased MVP) | 7 days | **Strategic** — unblocks multi-tenant deployments | Schedule architecture review; label `needs-decision` |

---

**Health Score: 7.5/10**  
✅ High merge velocity, critical crashes fixed, active triage  
⚠️ Windows desktop stability still fragile, vision routing logic flawed, gateway observability gaps  
📈 Trending: **Stabilizing** — next release should be significantly more reliable if open P2s are addressed

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-07-19

## 1. Today's Overview
PicoClaw shows **moderate maintenance activity** with 12 PRs and 4 issues updated in the last 24 hours, though most are **stale items being closed** rather than new development. Eight PRs were merged/closed today—primarily dependency updates, OAuth/WhatsApp fixes, and agent collaboration features—while only 2 new issues were filed (both bugs). No new releases were published. The project appears to be in a **stabilization phase**, clearing backlog and addressing security/tooling updates (Go 1.25.12, ESLint 10.6.0) rather than shipping major features.

## 2. Releases
**No new releases** in the last 24 hours.

## 3. Project Progress — Merged/Closed PRs (8 items)

| PR | Title | Type | Key Changes |
|----|-------|------|-------------|
| [#3241](https://github.com/sipeed/picoclaw/pull/3241) | fix(auth): make OAuth refresh provider-correct and concurrency-safe | Bug fix | Fixes OpenAI OAuth refresh (JSON vs form encoding), removes scope from refresh requests, adds 30s mutex to prevent race conditions |
| [#3242](https://github.com/sipeed/picoclaw/pull/3242) | feat(whatsapp): add native typing presence | Feature | Implements `TypingCapable` for WhatsApp native channel: sends `composing` immediately, refreshes every 10s, sends `paused` on completion |
| [#3225](https://github.com/sipeed/picoclaw/pull/3225) | Support agent-specific runtime overrides | Feature | Allows per-agent `max_tokens`, summarization thresholds, `split_on_marker` in `agents.list`; applied when building `AgentInstance` |
| [#3200](https://github.com/sipeed/picoclaw/pull/3200) | feat(models): add configurable default fallback chain | Feature | Web UI + backend API for default model fallback chains: set default, add fallbacks, reorder, persist full chain |
| [#3165](https://github.com/sipeed/picoclaw/pull/3165) | fix(openai_compat): recover Seed XML tool calls | Bug fix | Recovers Volcengine Doubao `<seed:tool_call>` XML blocks as structured tool calls; strips from user-visible content; suppresses from streaming |
| [#2937](https://github.com/sipeed/picoclaw/pull/2937) | Feat/agent collaboration | Major feature | First-class internal Agent Collaboration Bus: per-agent mailboxes, collaboration threads with isolated history, structured envelopes, permission-aware routing |
| [#3208](https://github.com/sipeed/picoclaw/pull/3208) | build(deps): bump mautrix 0.27.0 → 0.28.1 | Dependency | Matrix library update (push rules, sync improvements) |
| [#3211](https://github.com/sipeed/picoclaw/pull/3211) | build(deps-dev): bump eslint 10.4.1 → 10.6.0 | Dependency | Frontend linting toolchain update |

**Net advancement**: OAuth reliability, WhatsApp UX, agent runtime configurability, model fallback UX, Seed/Volcengine compatibility, and foundational agent-to-agent messaging.

## 4. Community Hot Topics
*No high-comment or high-reaction items in the last 24h.* All closed PRs/issues have **0 comments and 0 reactions**. The two newly opened bugs (#3265, #3264) have **0 comments** so far. This suggests **low immediate community engagement** on recent changes—likely because most merged PRs were stale/backlog items rather than user-driven requests.

## 5. Bugs & Stability — New Reports (Ranked by Severity)

| Severity | Issue | Description | Fix PR? |
|----------|-------|-------------|---------|
| **High** | [#3265](https://github.com/sipeed/picoclaw/issues/3265) Gateway startup fails with `'channel deltachat has unknown type deltachat'` | Gateway crashes on startup even when deltachat is **not configured** in `config.json`. Error originates in `gateway.go:140`. Blocks deployment for users without deltachat. | ❌ No PR yet (opened today) |
| **Medium** | [#3264](https://github.com/sipeed/picoclaw/issues/3264) `SplitMessage` hangs on oversized fenced-code info string | Infinite loop when a fenced code block's opening fence info string extends past the split point. Fallback re-adds full fence header while retaining unsplit tail, causing non-progress. Affects message chunking for long code blocks. | ❌ No PR yet (opened yesterday) |

**Previously fixed (closed today)**: OAuth refresh races (#3239 → #3241), WhatsApp missing typing presence (#3240 → #3242).

## 6. Feature Requests & Roadmap Signals

| Signal | Source | Likelihood for Next Version |
|--------|--------|----------------------------|
| **Simplex channel support** | [PR #3193](https://github.com/sipeed/picoclaw/pull/3193) (open since 2026-06-27) | Medium — new channel type, marked as feature, but stale for 3+ weeks |
| **9router gateway compatibility + ARMv7 builds** | [PR #3205](https://github.com/sipeed/picoclaw/pull/3205) (open since 2026-07-02) | Medium — hardware enablement (Raspberry Pi 3 B+) + gateway interop; author reports active use |
| **Agent ID normalization fix** | [PR #3202](https://github.com/sipeed/picoclaw/pull/3202) (open since 2026-07-01) | High — fixes documented contract violation (`NormalizeAgentID`/`NormalizeAccountID` not stripping underscores); low risk |
| **Go 1.25.12 security bump** | [PR #3248](https://github.com/sipeed/picoclaw/pull/3248) | High — remediates `GO-2026-5856` (crypto/tls) and `GO-2026-4970` (os); CI-blocking vulns |

**Prediction**: Next patch release will likely include Go 1.25.12, agent ID normalization, and the two critical bug fixes (#3265, #3264). Simplex channel and 9router/ARMv7 may slip unless maintainers prioritize hardware/community contributions.

## 7. User Feedback Summary
- **Pain point**: Gateway fails to start with **spurious deltachat error** despite no deltachat config (#3265) — suggests config validation or channel registry bug affecting all users.
- **Pain point**: Message splitting **hangs on large code blocks** (#3264) — impacts users sending/sharing code snippets; silent infinite loop is severe UX failure.
- **Positive signal**: User actively running PicoClaw on **Raspberry Pi 3 B+ with 9router** (#3205) — demonstrates ARM/edge deployment interest.
- **No dissatisfaction signals** in comments (all zero), but **low engagement** may mask issues.

## 8. Backlog Watch — Stale Items Needing Attention

| Item | Age | Status | Why It Matters |
|------|-----|--------|----------------|
| [PR #3193](https://github.com/sipeed/picoclaw/pull/3193) Added simplex channel type | 22 days | Open, 0 reviews | New protocol support; no maintainer feedback; contributor may disengage |
| [PR #3205](https://github.com/sipeed/picoclaw/pull/3205) 9router + ARMv7 build | 17 days | Open, 0 reviews | Hardware enablement + gateway interop; real user deployment blocked |
| [PR #3202](https://github.com/sipeed/picoclaw/pull/3202) Agent ID normalization fix | 18 days | Open, 0 reviews | Contract violation in core routing; low-risk fix lingering |
| [PR #3248](https://github.com/sipeed/picoclaw/pull/3248) Go 1.25.12 security bump | 9 days | Open, 0 reviews | Fixes two stdlib CVEs; CI vuln findings block clean builds |
| [Issue #3265](https://github.com/sipeed/picoclaw/issues/3265) Gateway deltachat crash | 0 days | Open, 0 comments | **New critical bug** — blocks startup for all users; needs triage today |
| [Issue #3264](https://github.com/sipeed/picoclaw/issues/3264) SplitMessage infinite loop | 1 day | Open, 0 comments | **Data-loss/hang risk** for code-heavy workflows; needs fix PR |

---

**Health Indicators**: 🟡 **Caution** — Good merge throughput on backlog, but **zero review engagement on open PRs**, **two new critical bugs unaddressed**, and **security update stalled**. Recommend maintainers prioritize: (1) triage/fix #3265 and #3264, (2) review/merge #3248 (security), #3202 (correctness), #3205 (community hardware support).

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-07-19

## 1. Today's Overview
NanoClaw shows **high maintenance velocity** with 44 total updates (18 issues, 26 PRs) in the last 24 hours, but **zero new releases** — indicating a stabilization phase focused on bug fixes, security hardening, and UX polish rather than feature delivery. The 2:16 open:closed issue ratio and 9:17 open:merged PR ratio suggest maintainers are actively clearing backlog. Two critical security/ correctness fixes landed (#3065 loopback webhook auth, #3077 rate-limit misclassification), while WhatsApp mention-mode and systemd detection bugs remain open blockers for multi-tenant and headless deployments.

## 2. Releases
**No new releases today.** The project appears to be accumulating fixes for a v2.0.46+ patch or v2.1 minor release.

## 3. Project Progress — Merged/Closed PRs (Key Fixes)

| PR | Area | Impact |
|----|------|--------|
| [#3077](https://github.com/qwibitai/nanoclaw/pull/3077) | **Claude SDK / Rate Limiting** | Fixes false-positive `quota` errors on every `rate_limit_event` (status=`allowed`); stops healthy turns from being aborted. Directly resolves [#3016](https://github.com/qwibitai/nanoclaw/issues/3016). |
| [#3065](https://github.com/qwibitai/nanoclaw/pull/3065) | **Security (GHSA-h9g4-589h-68xv)** | Adds HMAC authentication to loopback webhook (`chat-sdk-bridge.ts`), preventing local action forgery (CWE-306). |
| [#3068](https://github.com/qwibitai/nanoclaw/pull/3068) | **Scheduled Tasks** | Fixes cross-session visibility: tasks are group-scoped; tools now correctly surface tasks from other sessions in the same group and return actionable errors. Resolves [#2992](https://github.com/qwibitai/nanoclaw/issues/2992). |
| [#2496](https://github.com/qwibitai/nanoclaw/pull/2496) | **Session Manager / Outbound DB** | Opens outbound DB with write mode in `writeOutboundDirect`; fixes silent `SQLITE_READONLY` failures that dropped command-gate deny responses. |
| [#2702](https://github.com/qwibitai/nanoclaw/pull/2702) | **Slack Adapter** | Switches from HTTP webhook to **Socket Mode**, removing public-URL requirement and aligning with rest of codebase. |
| [#2314](https://github.com/qwibitai/nanoclaw/pull/2314), [#2305](https://github.com/qwibitai/nanoclaw/pull/2305), [#2304](https://github.com/qwibitai/nanoclaw/pull/2304), [#2303](https://github.com/qwibitai/nanoclaw/pull/2303), [#2299](https://github.com/qwibitai/nanoclaw/pull/2299), [#2296](https://github.com/qwibitai/nanoclaw/pull/2296) | **Slack Setup UX** | Six PRs overhaul the 2-card Slack install flow: plain-language steps, part labels, token-paste prep, member-ID fallback, confirm gate, and corrected Photon URL. |
| [#1267](https://github.com/qwibitai/nanoclaw/pull/1267), [#1212](https://github.com/qwibitai/nanoclaw/pull/1212), [#1185](https://github.com/qwibitai/nanoclaw/pull/1185), [#1100](https://github.com/qwibitai/nanoclaw/pull/1100) | **Credential Proxy** | Four independent fixes preserve `ANTHROPIC_BASE_URL` path prefix (e.g., `/api/anthropic`) when proxying to third-party Claude-compatible APIs (MiniMax, Z.ai, etc.). |
| [#3086](https://github.com/qwibitai/nanoclaw/pull/3086) | **WhatsApp** | Validates recipient JID exists before send; surfaces "number not on WhatsApp" errors instead of fake success. |
| [#3084](https://github.com/qwibitai/nanoclaw/pull/3084) | **Test Hygiene** | Removes temporary diagnostics from `/clear-abort` integration test after [#3083](https://github.com/qwibitai/nanoclaw/pull/3083) merge. |

## 4. Community Hot Topics (Most Active Issues)

| Issue | Comments | Core Need |
|-------|----------|-----------|
| [#2506](https://github.com/qwibitai/nanoclaw/issues/2506) **send_message dedup drops responses** | 4 | **Data loss**: Rapid turns (<60s) or streaming follow-ups silently discard agent replies, causing client timeouts. High severity for interactive use. |
| [#2482](https://github.com/qwibitai/nanoclaw/issues/2482) **Wizard falsely detects no systemd under `su -`** | 3 | **Deploy blocker**: Fresh Debian 13 LXC with healthy user systemd gets misclassified as `wsl_no_systemd`, installs nohup wrapper instead of systemd unit. |
| [#3016](https://github.com/qwibitai/nanoclaw/issues/3016) **rate_limit_event logged as quota error** | 3 | **Observability noise**: 82 false "quota" logs/week on healthy turns; fixed by [#3077](https://github.com/qwibitai/nanoclaw/pull/3077). |
| [#3085](https://github.com/qwibitai/nanoclaw/issues/3085) **WhatsApp mention-mode only works on autocomplete pills** | 1 (new) | **UX regression**: Typed `@agentname` without autocomplete never engages; `accumulate` policy masks failure by storing as pending. PR [#3087](https://github.com/qwibitai/nanoclaw/pull/3087) open. |
| [#1981](https://github.com/qwibitai/nanoclaw/issues/1981) **v2 setup: systemd misdetected on headless Linux** (OPEN since Apr) | 1 | **Deploy blocker**: Ubuntu/Hetzner SSH sessions fail systemd detection despite working `systemctl --user`; same root cause as #2482. |

**Pattern**: Systemd detection logic is fragile across invocation contexts (`su -`, SSH, LXC) — a recurring theme needing a unified detection strategy.

## 5. Bugs & Stability — Today's Reports (Ranked by Severity)

| Severity | Issue | Status | Fix PR |
|----------|-------|--------|--------|
| **Critical** | [#3085](https://github.com/qwibitai/nanoclaw/issues/3085) WhatsApp mention-mode broken for typed @mentions | OPEN | [#3087](https://github.com/qwibitai/nanoclaw/pull/3087) open |
| **Critical** | [#2506](https://github.com/qwibitai/nanoclaw/issues/2506) send_message dedup silently drops responses | CLOSED | Likely fixed in recent session-manager work |
| **High** | [#2482](https://github.com/qwibitai/nanoclaw/issues/2482) systemd misdetection in LXC/`su -` | CLOSED | Fix likely in wizard refactor |
| **High** | [#1981](https://github.com/qwibitai/nanoclaw/issues/1981) systemd misdetection on headless SSH | OPEN | — |
| **Medium** | [#2784](https://github.com/qwibitai/nanoclaw/issues/2784) container-runner staleness check misses `ipc-mcp-stdio.ts` | CLOSED | Fix presumed in container-runner sync logic |
| **Medium** | [#2894](https://github.com/qwibitai/nanoclaw/issues/2894) WhatsApp inbound media dropped on CDN fetch failure | CLOSED | Fix likely in Baileys adapter error handling |
| **Low** | [#3016](https://github.com/qwibitai/nanoclaw/issues/3016) False quota logs | CLOSED | Fixed by [#3077](https://github.com/qwibitai/nanoclaw/pull/3077) |
| **Low** | [#2959](https://github.com/qwibitai/nanoclaw/issues/2959) Image generation request | CLOSED | Not a bug; feature request |

## 6. Feature Requests & Roadmap Signals

| Request | Issue/PR | Likelihood for Next Version |
|---------|----------|----------------------------|
| **Keyword-based pre-turn model routing** | [#1681](https://github.com/qwibitai/nanoclaw/issues/1681), [#1679](https://github.com/qwibitai/nanoclaw/issues/1679) | Medium — spec exists, zero-cost implementation, but no PR yet |
| **ncl CLI for scheduled tasks** (list/run-now/pause/cancel) | [#2397](https://github.com/qwibitai/nanoclaw/issues/2397) | High — tasks are first-class; CLI gap is operational pain |
| **ncl groups config add-mount/remove-mount** | [#2395](https://github.com/qwibitai/nanoclaw/issues/2395) | High — DB migration left CLI incomplete |
| **ncc utility skill: host operational/health CLI** | [#2971](https://github.com/qwibitai/nanoclaw/pull/2971) | High — PR open, utility skill (no core changes), addresses ops gap |
| **MGA unarchive-on-reference + GC** | [#2517](https://github.com/qwibitai/nanoclaw/issues/2517) | Medium — data integrity fix, low user visibility |

**Strongest signals**: Operational tooling (ncl CLI gaps, ncc skill) and WhatsApp/Slack UX polish. Model routing is designed but unimplemented.

## 7. User Feedback Summary

| Pain Point | Evidence | Sentiment |
|------------|----------|-----------|
| **Silent message loss** | #2506: "responses silently dropped and client times out" | 😡 Frustrated — data loss is unacceptable |
| **Setup wizard fragility** | #2482, #1981: systemd detection fails in common environments (LXC, SSH, `su -`) | 😟 Blocked — "fresh Proxmox LXC", "Hetzner SSH" are standard deployments |
| **Noisy false-error logs** | #3016: 82 "quota" logs/week on healthy turns | 😐 Annoyed — erodes trust in monitoring |
| **WhatsApp mention UX broken** | #3085: typed `@name` never works, autocomplete required | 😕 Confused — "accumulate masks the failure" |
| **Slack setup too technical** | 6 PRs (#2296–#2314) rewriting cards for non-technical users | 🙂 Appreciated — maintainers investing heavily in accessibility |
| **Missing operational CLI** | #2397, #2395: tasks & mounts only via MCP tools | 😐 Impatient — "first-class concept" but no CLI |

**Overall**: Users hit **deployment blockers** (systemd) and **silent correctness bugs** (dedup, mention-mode), but see **rapid maintainer response** on UX and security.

## 8. Backlog Watch — Stale & Important

| Item | Age | Why It Matters |
|------|-----|----------------|
| [#1981](https://github.com/qwibitai/nanoclaw/issues/1981) **systemd misdetection on headless Linux** | 86 days (since 2026-04-24) | Blocks v2 setup on standard VPS/SSH deployments; same root cause as recently closed #2482. Needs unified fix. |
| [#1681](https://github.com/qwibitai/nanoclaw/issues/1681) / [#1679](https://github.com/qwibitai/nanoclaw/issues/1679) **Keyword-based model routing** | 104 days | Well-scoped feature with config spec; zero runtime cost; would differentiate NanoClaw for multi-model routing. |
| [#2397](https://github.com/qwibitai/nanoclaw/issues/2397) **ncl CLI for scheduled tasks** | 70 days | Tasks are core feature; CLI gap forces users into MCP/agent chat for ops. |
| [#2395](https://github.com/qwibitai/nanoclaw/issues/2395) **ncl groups config mount commands** | 70 days | DB migration completed but CLI left behind; 1 👍. |
| [#2971](https://github.com/qwibitai/nanoclaw/pull/2971) **ncc utility skill (host health CLI)** | 12 days (PR open) | High-value ops tool, no core changes needed; awaiting review. |
| [#3078](https://github.com/qwibitai/nanoclaw/pull/3078) **Pin agent-shared resolution to anchor session** | 1 day (PR open) | Prevents "two-sessions-per-agent fork" in shared wirings; correctness fix for multi-channel deployments. |

---

**Health Indicators**  
✅ **Security**: Critical loopback auth fix merged same-day as disclosure.  
✅ **Velocity**: 17 PRs merged/closed in 24h; backlog clearing.  
⚠️ **Release Cadence**: No release despite ~20 merged fixes — risk of "integration debt".  
⚠️ **Systemd Detection**: Two open issues (#1981, #2482 closed but root cause may persist) suggest architectural gap in environment detection.  
🟢 **Community**: Maintainers responsive; UX polish PRs show empathy for non-technical users.

**Recommendation**: Cut a v2.0.46 patch release this week bundling security (#3065), correctness (#3077, #2496, #3086), and Slack UX fixes. Prioritize

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest — 2026-07-19

## 1. Today's Overview
NullClaw shows minimal development activity in the past 24 hours: zero pull requests opened, merged, or closed, and no new releases published. The sole active item is Issue **#868**, a build failure on Android/Termux (aarch64) that was last updated yesterday and has accumulated seven comments since its creation in April. The project appears to be in a maintenance lull with no feature work or bug-fix merges landing today. Community engagement is low, evidenced by the single open issue carrying zero reactions.

## 2. Releases
No new releases were published in the last 24 hours. The latest tagged version remains **v2026.4.17** (referenced in the open issue).

## 3. Project Progress
No pull requests were merged or closed today. No features advanced, and no bugs were resolved via PR in this window.

## 4. Community Hot Topics
| Item | Type | Comments | Reactions | Last Update | Summary |
|------|------|----------|-----------|-------------|---------|
| [#868](https://github.com/nullclaw/nullclaw/issues/868) | Bug | 7 | 0 | 2026-07-18 | `zig build -Doptimize=ReleaseSmall` fails on Android/Termux (aarch64) with `AccessDenied` during `linkat` on `options.zig`. |

**Analysis:** The only discussion thread revolves around a platform-specific build breakage. Seven comments over three months suggest intermittent troubleshooting rather than a rapid fire-fight. The lack of 👍 reactions indicates limited broader impact awareness, but the persistence of the issue signals an unmet need for Tier-2 (Android/Termux) build support.

## 5. Bugs & Stability
| Severity | Issue | Status | Fix PR? |
|----------|-------|--------|---------|
| High (build-blocking on target platform) | [#868](https://github.com/nullclaw/nullclaw/issues/868) — `AccessDenied` on `linkat` during ReleaseSmall build on Android/Termux aarch64 | Open | No |

No other bugs, crashes, or regressions were reported or updated today.

## 6. Feature Requests & Roadmap Signals
No new feature requests or roadmap discussions appeared in the last 24 hours. The sole open issue is a bug, not a feature request. Historical backlog (not in today’s data) would be needed to infer upcoming priorities.

## 7. User Feedback Summary
- **Pain point:** Inability to compile NullClaw from source on Android/Termux (aarch64) in optimized release mode.  
- **Use case:** Mobile/edge development or testing on Linux-on-Android environments.  
- **Sentiment:** Neutral-to-frustrated; the issue has lingered since April without resolution, suggesting the user has not found a workaround.  
- **Satisfaction signal:** Low — zero reactions and no maintainer closure imply the problem remains unresolved and potentially unseen by core maintainers.

## 8. Backlog Watch
| Item | Age | Risk | Why It Needs Attention |
|------|-----|------|------------------------|
| [#868](https://github.com/nullclaw/nullclaw/issues/868) | ~88 days | Medium | Blocks a supported architecture (aarch64) on a popular developer environment (Termux). No fix PR, no maintainer comment in recent history. Candidate for triage: either accept as known limitation, prioritize a build-system patch, or document workaround. |

---

**Overall Health Indicator:** 🟡 **Caution** — Single long-standing build-blocking bug on a non-primary platform with no active remediation. Core development velocity appears paused. Recommended actions: triage #868, assess Android/Termux support tier, and communicate status to the reporter.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-07-19

## 1. Today's Overview
IronClaw shows **high-velocity internal refactoring** centered on the "Reborn" architecture simplification, with 30 PRs merged/closed in 24 hours—mostly additive, compile-time-safe changes to capability state machines, authorization folds, and deployment-mode collapsing. No new releases were cut. Community-facing work appears in parallel: a Traditional Chinese (zh‑TW) localization request, MCP server credential leakage concerns, and extensions-management API parity for the standalone `ironclaw-reborn` binary. The project is in a **deep technical migration phase**; user-visible features are gated behind the Reborn promotion (Issue #6143, now closed).

## 2. Releases
**None today.** The last automated release PR (#5598) remains open, bumping `ironclaw_common` to 0.5.0 (breaking), `ironclaw_skills` to 0.4.0 (breaking), and `ironclaw` to 0.29.1. Maintainers are likely holding the tag until the Reborn CLI swap lands.

## 3. Project Progress (Merged/Closed PRs Today)
| PR | Scope | Outcome |
|----|-------|---------|
| [#6243](https://github.com/nearai/ironclaw/pull/6243) | `run_state` | Added persistent `GateRecordStore` for the `CapabilityOutcome→Resolution` collapse (§5.2.9). |
| [#6242](https://github.com/nearai/ironclaw/pull/6242) | `ironclaw_turns` | Landed additive `CapabilityOutcome → Resolution` mapping (arch-simplification §3/§5.3). |
| [#6240](https://github.com/nearai/ironclaw/pull/6240) | `dispatcher` | Collapsed `RuntimeAdapter` dyn registry into closed `RuntimeLane` executor (§4.2), removing trait-object dispatch on hot path. |
| [#6239](https://github.com/nearai/ironclaw/pull/6239) | `ironclaw_capabilities` | Extracted `authorize()` delegating scaffold (Slice-C W1b, §9 step 2). |
| [#6237](https://github.com/nearai/ironclaw/pull/6237) | `host_api` | Introduced `GateRecord`/`DenyRecord` + `OutcomeRefs` vocabulary for “render from record” contract (§5.2.9). |
| [#6238](https://github.com/nearai/ironclaw/pull/6238) | Test | Froze mirror DTOs for capability-path collapse (§9/§10 ratchet). |
| [#6236](https://github.com/nearai/ironclaw/pull/6236) | `host_api` | Unified `SafeSummary` redaction rule (single definition, owned by `host_api`). |
| [#6235](https://github.com/nearai/ironclaw/pull/6235) | Config | Replaced `LocalDev*` type family with `DeploymentConfig` data value (Slice B, §4.4/§5.6). |
| [#6234](https://github.com/nearai/ironclaw/pull/6234) | `host_runtime` | Deleted dead `trust_decision` field from capability request family (§1.1 mech. 3). |
| [#6233](https://github.com/nearai/ironclaw/pull/6233) | `reborn` | Activated `Authorized` seal + `RuntimeLane::from_runtime_kind` (Slice C W1a). |
| [#6143](https://github.com/nearai/ironclaw/issues/6143) | Meta | **Closed** — Reborn promotion plan accepted; v1 rename to `ironclaw-v1` staged. |

**Net effect:** The capability hot path is now fully typed, dispatch is match-based, and the authorization fold is wired end-to-end in preparation for deleting `CapabilityOutcome`.

## 4. Community Hot Topics
| Item | Signal | Underlying Need |
|------|--------|-----------------|
| [#6247](https://github.com/nearai/ironclaw/issues/6247) MCP server headers persist bearer tokens in plaintext (settings row + per-job worker mount) | **Security / Compliance** | Secrets stored unencrypted in DB, backups, exports, and worker mounts. Blocks enterprise adoption. |
| [#6158](https://github.com/nearai/ironclaw/issues/6158) Add zh‑TW Traditional Chinese localization | **i18n / Accessibility** | WebUI v2 only ships zh‑CN; users with `zh-TW` browser locale fall back to zh‑CN/EN. |
| [#6249](https://github.com/nearai/ironclaw/issues/6249) Reborn: extensions-management API parity for MCP servers | **Platform Parity** | Standalone `ironclaw-reborn` lacks `/api/extensions/install`, `/activate`, `PATCH` endpoints that v1 gateway exposes. |
| [#6248](https://github.com/nearai/ironclaw/issues/6248) Credential preflight (blocked on `auth_resume` design) | **Auth UX** | Want to probe `has_account` before sandbox spin-up; gated by unresolved `auth_resume` flow. |
| [#6244](https://github.com/nearai/ironclaw/pull/6244) Agent-market deploy branch: thread-scoped MCP sessions (SEP-414), programmatic MCP config + PATCH | **Multi-tenant MCP** | Large feature branch syncing thread-scoped sessions, context propagation, and programmatic config—likely next major user-facing release. |

## 5. Bugs & Stability
| Severity | Issue | Fix Status |
|----------|-------|------------|
| **High** | [#6247](https://github.com/nearai/ironclaw/issues/6247) Bearer tokens in plaintext in `mcp_servers` settings row, backups, exports, and per-job worker mounts | **No fix PR yet** — design discussion needed (encrypted settings? secret references?). |
| Medium | [#6211](https://github.com/nearai/ironclaw/pull/6211) CLI stubs (`channels list`, `hooks list`, `logs`) returned fake success; now return “not implemented” errors | **Open PR** — improves honesty but removes placeholder UX. |
| Low | [#6251](https://github.com/nearai/ironclaw/pull/6251) OAuth denial lifecycle not channel-neutral; Slack workspace pinning | **Open PR** — fixes cross-workspace leakage & denial propagation. |

No crash regressions reported today.

## 6. Feature Requests & Roadmap Signals
1. **zh‑TW locale** (#6158) — trivial WebUI addition; likely in next minor.
2. **Extensions API parity for Reborn** (#6249) — required before Reborn becomes canonical CLI.
3. **Credential preflight** (#6248) — depends on `auth_resume` design; may slip.
4. **Thread-scoped MCP sessions + SEP-414** (#6244) — large deploy branch; strong signal for v0.30+ “managed agents” milestone.
5. **Architecture explorer & diagram skill** (#6253) — docs/tooling only; indicates maintainers preparing onboarding for new architecture.

**Prediction:** Next release (v0.30) will ship Reborn as `ironclaw`, zh‑TW, encrypted MCP headers (or secret refs), and the extensions API parity. Thread-scoped MCP may follow in v0.31.

## 7. User Feedback Summary
- **Pain:** MCP credential leakage (#6247) is a blocker for any compliance-sensitive deployment.
- **Pain:** Missing zh‑TW forces Traditional Chinese users into Simplified fallback (#6158).
- **Pain:** Reborn CLI lacks extension install/activate endpoints that v1 had (#6249) — early adopters of `ironclaw-reborn` hit feature gaps.
- **Positive:** Contributors appreciate the ratchet/DTO freeze discipline (#6238) and single-definition `SafeSummary` (#6236) — reduces cognitive load.
- **Neutral:** CLI stubs now error honestly (#6211) — some users may miss the placebo output, but it’s correct behavior.

## 8. Backlog Watch (Stale / Needs Maintainer Attention)
| Item | Age | Why It Matters |
|------|-----|----------------|
| [#5598](https://github.com/nearai/ironclaw/pull/5598) Automated release (breaking `ironclaw_common` 0.5.0, `ironclaw_skills` 0.4.0) | 16 days | Blocks semver signal; held by Reborn promotion. |
| [#6247](https://github.com/nearai/ironclaw/issues/6247) MCP bearer tokens in plaintext | 1 day (new) | **Security** — needs design decision (encryption vs. secret store) and fix before next release. |
| [#6248](https://github.com/nearai/ironclaw/issues/6248) Credential preflight blocked on `auth_resume` | 1 day | Design dependency; unblocks OAuth UX for Slack/GSuite/etc. |
| [#6176](https://github.com/nearai/ironclaw/pull/6176) CI: validate Reborn release binaries across 7 targets | 2 days | Critical for release confidence; still open. |
| [#6188](https://github.com/nearai/ironclaw/pull/6188) CI: make release workflow Reborn compile-only | 2 days | Paired with #6176; needed to gate releases on Reborn artifacts. |

---
*Digest generated from GitHub data as of 2026-07-19. All links point to live items on `github.com/nearai/ironclaw`.*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest - 2026-07-19

## 1. Today's Overview
LobsterAI shows **moderate maintenance activity** with 1 new patch release (2026.7.17), 3 PRs processed (2 merged, 1 new), and 6 stale issues updated but unresolved. The project is in a **stabilization phase**—recent work focuses on error handling, data persistence, and UI polish rather than major features. However, a backlog of 6 open issues from April (all marked `stale`) indicates **technical debt accumulation** in core areas like MCP integration, image processing, and model configuration. Community engagement is low (max 1 comment/👍 per issue), suggesting either a small user base or reporting fatigue.

## 2. Releases
### **v2026.7.17** (2026-07-17)
**Patch release** with three incremental improvements:
- **`feat(cowork)`**: Structured run failure details now surfaced in error UI ([#2348](https://github.com/netease-youdao/LobsterAI/pull/2348)) – improves debugging for collaborative workflows.
- **`feat(service)`**: Service deployment data persistence ([#2349](https://github.com/netease-youdao/LobsterAI/pull/2349)) – ensures deployment state survives restarts.
- **`feat(skin)`**: Partial skin/theme enhancement (details truncated in log).

**No breaking changes or migration notes** documented. This is a safe, backward-compatible update.

## 3. Project Progress
### **Merged/Closed PRs (2026-07-18)**
| PR | Type | Scope | Key Change |
|----|------|-------|------------|
| [#1353](https://github.com/netease-youdao/LobsterAI/pull/1353) | `feat` | Agent | **Skill Selector**: Added "Select All"/"Clear" buttons + selected count badge in Agent creation/edit modals. Reduces clicks for multi-skill assignment. |
| [#1464](https://github.com/netease-youdao/LobsterAI/pull/1464) | `fix` | IM | **Duplicate Validation**: Prevents duplicate instance names & credential IDs (App ID/Client ID) for DingTalk, Feishu, QQ bots. Avoids message processing conflicts. |

Both PRs originated in **April 2026** but merged today—indicating **slow review cycles** for non-critical enhancements.

### **New Open PR**
- [#2358](https://github.com/netease-youdao/LobsterAI/pull/2358) `fix(cowork)`: Adds localized failure feedback for session rename operations (addresses [#670](https://github.com/netease-youdao/LobsterAI/issues/670)).

## 4. Community Hot Topics
**Most Engaged Issue**: [#1293](https://github.com/netease-youdao/LobsterAI/issues/1293) (1 👍, 1 comment)  
**Core Need**: **MCP Protocol Parity** – Custom HTTP-based MCP servers are ignored by the OpenClaw engine; only SSE transports work. This blocks users from integrating private/local MCP services via HTTP, a common deployment pattern.

**Secondary Signal**: [#1296](https://github.com/netease-youdao/LobsterAI/issues/1296) (0 👍, 1 comment) – **Large Image Handling** (3MB) causes unrecoverable UI crashes. Users cannot recover without restarting tasks, indicating **missing error boundaries** in the image parsing pipeline.

> **Analysis**: Both issues point to **transport/runtime robustness gaps**—MCP flexibility and resource limits—rather than feature requests. Low reaction counts suggest these affect power users or specific deployments.

## 5. Bugs & Stability
| Severity | Issue | Description | Fix PR? |
|----------|-------|-------------|---------|
| **High** | [#1296](https://github.com/netease-youdao/LobsterAI/issues/1296) | 3MB image upload → permanent UI error state; new tasks fail until restart. **Data loss risk** (unsaved context). | No |
| **High** | [#1293](https://github.com/netease-youdao/LobsterAI/issues/1293) | Custom HTTP MCP servers non-functional in OpenClaw engine. **Core integration broken** for non-SSE transports. | No |
| **Medium** | [#1298](https://github.com/netease-youdao/LobsterAI/issues/1298) | Model accepts connection test but rejects 2-char input as "too long". **Token counting mismatch** between test and inference. | No |
| **Medium** | [#1307](https://github.com/netease-youdao/LobsterAI/issues/1307) | Model provider config panel becomes read-only after closing/opening another. **State management bug** in settings UI. | No |
| **Low** | [#1305](https://github.com/netease-youdao/LobsterAI/issues/1305) | Deleted scheduled task shows wrong title in history. **Display inconsistency** only. | No |

**Zero bug-fix PRs opened today** for these April-reported issues. Fix velocity is critically low.

## 6. Feature Requests & Roadmap Signals
| Signal | Source | Likelihood for Next Version |
|--------|--------|-----------------------------|
| **Code Block Line Numbers** | [#1302](https://github.com/netease-youdao/LobsterAI/issues/1302) (detailed spec) | **High** – Well-scoped UI enhancement; uses existing `react-syntax-highlighter` prop. |
| **Agent Skill Bulk Actions** | [#1353](https://github.com/netease-youdao/LobsterAI/pull/1353) (merged) | **Delivered** – Select All/Clear now in `AgentSkillSelector`. |
| **IM Instance Deduplication** | [#1464](https://github.com/netease-youdao/LobsterAI/pull/1464) (merged) | **Delivered** – Validation added for 3 platforms. |
| **Session Rename Feedback** | [#2358](https://github.com/netease-youdao/LobsterAI/pull/2358) (open) | **High** – Small, targeted fix for known UX gap ([#670](https://github.com/netease-youdao/LobsterAI/issues/670)). |

**Predicted Next Version**: Polish-focused (line numbers, rename feedback) + possible MCP HTTP fix if prioritized.

## 7. User Feedback Summary
**Pain Points** (from issues):
- **Unrecoverable Errors**: Image upload crashes brick the session ([#1296](https://github.com/netease-youdao/LobsterAI/issues/1296)).
- **Silent Failures**: Session rename fails without notification ([#670](https://github.com/netease-youdao/LobsterAI/issues/670) via PR [#2358](https://github.com/netease-youdao/LobsterAI/pull/2358)).
- **Config Fragility**: Model provider UI locks up after routine interactions ([#1307](https://github.com/netease-youdao/LobsterAI/issues/1307)).
- **Protocol Limitations**: Forced to use SSE for MCP; HTTP not supported ([#1293](https://github.com/netease-youdao/LobsterAI/issues/1293)).

**Use Cases Revealed**:
- Large document/image analysis (3MB+).
- Multi-bot IM deployments (DingTalk/Feishu/QQ) needing strict deduplication.
- Collaborative workflows requiring reliable error reporting.
- Agent building with 10+ skills (bulk selection needed).

**Satisfaction**: Low on stability (4/6 issues = crashes/broken features), neutral on features (requests are enhancements, not complaints).

## 8. Backlog Watch
**Critical Stale Issues (Open since 2026-04-02, Updated 2026-07-18)**:
1. **[#1293](https://github.com/netease-youdao/LobsterAI/issues/1293)** – **MCP HTTP Support** (Core engine gap, 1 👍). *Blocks custom integrations.*
2. **[#1296](https://github.com/netease-youdao/LobsterAI/issues/1296)** – **Large Image Crash** (High severity, unrecoverable). *Needs error boundary + size handling.*
3. **[#1298](https://github.com/netease-youdao/LobsterAI/issues/1298)** – **Token Limit False Positive** (Model config mismatch). *May indicate deeper tokenizer issue.*

**Stale PRs Requiring Attention**:
- None currently open beyond [#2358](https://github.com/netease-youdao/LobsterAI/pull/2358) (new, active).

**Maintainer Action Needed**: Triage April backlog. At minimum, label severity, assign owners, or close wontfix. Current `stale` tag without follow-up erodes trust.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-07-19

## 1. Today's Overview
Moltis saw modest but focused activity over the past 24 hours with **zero new issues** and **three pull requests** processed. Two PRs were merged/closed, delivering a Slack API base URL configuration feature and a fix for ACP-only chat setups in the web UI. One experimental PR remains open, introducing a **zvec vector database memory backend** behind a Cargo feature flag. No releases were published. The project appears to be in a steady maintenance and incremental feature phase, with contributors addressing integration flexibility (Slack) and edge-case UX (ACP-only onboarding) while exploring alternative memory storage engines.

## 2. Releases
**None** — No new versions published today.

## 3. Project Progress
| PR | Status | Summary |
|----|--------|---------|
| [#1159](https://github.com/moltis-org/moltis/pull/1159) | **Closed/Merged** | **feat(slack): support configurable API base URL** — Adds `api_base_url` to Slack account config (defaults to `https://slack.com/api`). Routes all Slack client construction, Socket Mode startup, Events API auth, outbound replies, and native streaming through the configured base URL. Includes onboarding and account-settings UI fields. Enables self-hosted Slack-compatible deployments or proxy setups. |
| [#1157](https://github.com/moltis-org/moltis/pull/1157) | **Closed/Merged** | **fix(web): support ACP-only chat setup** — Shows installed ACP agents during LLM onboarding; treats ACP-only setup as valid (no longer an error). Filters session header picker to ACP-capable external agents and auto-selects an installed ACP agent when no LLM models are configured. Disables bottom model selector while an ACP agent is active. Improves onboarding for users relying solely on Agent Communication Protocol agents. |
| [#1158](https://github.com/moltis-org/moltis/pull/1158) | **Open** | **feat(memory): add zvec vector database memory backend** — Experimental backend using `zvec` + `redb`, gated behind the `zvec` Cargo feature (enabled by default in `full` feature set). Author notes it’s a “vibe-coded” experiment paired with an independently hosted `llama-cpp` embedding server. Not yet reviewed/merged; serves as a prototype for alternative vector storage. |

## 4. Community Hot Topics
| Item | Type | Activity | Analysis |
|------|------|----------|----------|
| [#1158](https://github.com/moltis-org/moltis/pull/1158) | PR (open) | Created 2026-07-17, updated 2026-07-18, 0 comments, 0 👍 | Only open PR with recent updates. Signals community interest in **pluggable memory backends** beyond the current defaults. The `zvec`/`redb` stack suggests a desire for lighter, embedded vector stores. Maintainer review will indicate whether Moltis will formalize a backend extension interface. |
| [#1159](https://github.com/moltis-org/moltis/pull/1159) | PR (closed) | Created & closed 2026-07-18, 0 comments, 0 👍 | Fast merge suggests the Slack API base URL was a **well-scoped, high-value integration fix** — likely requested by users running Slack-compatible platforms (e.g., Mattermost, self-hosted forks) or behind corporate proxies. |
| [#1157](https://github.com/moltis-org/moltis/pull/1157) | PR (closed) | Created 2026-07-17, closed 2026-07-18, 0 comments, 0 👍 | Quick resolution of an **onboarding UX regression** for ACP-only users. Indicates active ACP adoption and that the web UI onboarding flow had a blind spot for non-LLM agent setups. |

> **Underlying needs**: (1) **Integration flexibility** — users need to point Slack client at custom endpoints; (2) **ACP-first workflows** — onboarding must not assume LLM presence; (3) **Memory backend diversity** — experimentation with embedded vector DBs (`zvec`/`redb`) hints at demand for lower-resource or air-gapped deployments.

## 5. Bugs & Stability
**No new bug reports or crash issues** filed in the last 24 hours.  
The two closed PRs address **usability/integration bugs** rather than crashes:
- **#1157** — Fixed onboarding error when only ACP agents are installed (regression for ACP-only users). **Fix merged.**
- **#1159** — Added missing configurability for Slack API base URL (integration blocker for non-standard Slack endpoints). **Fix merged.**

No open regressions or critical stability concerns visible in today’s data.

## 6. Feature Requests & Roadmap Signals
| Signal | Source | Likelihood for Next Version |
|--------|--------|-----------------------------|
| **Configurable Slack API base URL** | [#1159](https://github.com/moltis-org/moltis/pull/1159) (merged) | ✅ **Already merged** — will ship in next release. |
| **ACP-only onboarding validity** | [#1157](https://github.com/moltis-org/moltis/pull/1157) (merged) | ✅ **Already merged** — will ship in next release. |
| **Pluggable memory backends (zvec/redb)** | [#1158](https://github.com/moltis-org/moltis/pull/1158) (open, experimental) | ⚠️ **Uncertain** — early prototype, no review yet. If maintainers accept the backend abstraction pattern, could land in a future minor version behind a feature flag. |
| **Self-hosted/compatible Slack platform support** | Implied by #1159 | ✅ **Addressed** via config option. |
| **Embedded vector DB for air-gapped/low-resource deployments** | Implied by #1158 | 🔮 **Possible mid-term** if zvec backend proves viable. |

## 7. User Feedback Summary
No direct user comments (issues/PR discussions) in the last 24h. Inferred feedback from merged PRs:
- **Slack users** need to route API calls through custom bases (proxies, self-hosted compatibles) — resolved.
- **ACP-only users** were blocked by onboarding assuming at least one LLM — resolved.
- **Experimenters** are testing alternative memory stacks (`zvec` + `redb` + external `llama-cpp` embeddings) — suggests a segment running Moltis in constrained or fully local environments.

Overall sentiment: **positive resolution of integration friction points**; experimental memory work indicates power-user engagement.

## 8. Backlog Watch
| Item | Type | Age | Concern |
|------|------|-----|---------|
| [#1158](https://github.com/moltis-org/moltis/pull/1158) | PR (open) | 2 days | Experimental memory backend PR with **no maintainer review yet**. Author explicitly labels it a “vibe-coded experiment.” Needs triage: accept as feature-gated optional backend, request refactor/tests, or close with guidance. Risk of stale PR if unaddressed. |
| *(No stale issues/PRs beyond this window in provided data)* | | | |

> **Recommendation**: Prioritize review of **#1158** to either onboard the contributor’s experiment into a formal backend plugin pattern or clarify why it’s out of scope. This will signal project direction on memory backend extensibility.

---

**Data source**: GitHub API — `moltis-org/moltis` (issues, PRs, releases) for 2026-07-18 → 2026-07-19.  
**Digest generated**: 2026-07-19.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (QwenPaw) Project Digest — 2026-07-19

## 1. Today's Overview
CoPaw shows **high maintenance activity** with 11 issues and 7 PRs updated in the last 24 hours, all centered on the v2.0.0.post3 release cycle. The project is in active bug-fix mode: multiple regressions from recent changes (#6056, #6245) and Windows PATH handling (#6239) are being addressed, while contributors are simultaneously delivering QoL improvements (scriptable `env get`, embedding dimension toggle, concurrent driver initialization). No new release was cut today, but the velocity suggests a follow-up patch (v2.0.0.post4) is imminent.

---

## 2. Releases
**No new releases today.** The latest published version remains **v2.0.0.post3** (released 2026-07-17). The associated release-duty issue [#6223](https://github.com/agentscope-ai/QwenPaw/issues/6223) tracks installation verification across platforms; its deadline has passed, so maintainers are likely evaluating results before deciding on a post-release patch.

---

## 3. Project Progress — Merged / Closed PRs
| PR | Title | Author | Status | Impact |
|----|-------|--------|--------|--------|
| [#1071](https://github.com/agentscope-ai/QwenPaw/pull/1071) | feat: Introduce Mattermost channel integration | 2niuhe | **Closed** (2026-07-18) | Long-standing feature PR (opened 2026-03-09) finally closed — likely superseded or deferred. No merge; check discussion for context. |

*Only one PR closed today; the other 6 PRs remain open and under review.*

---

## 4. Community Hot Topics (Most Comments / Reactions)

| Item | Type | Comments | 👍 | Core Need |
|------|------|----------|----|-----------|
| [#6240](https://github.com/agentscope-ai/QwenPaw/issues/6240) | Bug | 3 | 0 | **Console UI rendering leak** — memory annotations (`<!-- ⟦ NEXT_RID… -->`) bleed into chat view after extended sessions. Frontend sanitization or model-output filtering needed. |
| [#6245](https://github.com/agentscope-ai/QwenPaw/issues/6245) | Bug (Regression) | 2 | 0 | **Session permanently blocked** after shell command exceeds coordinator deadline. Fix PR [#6248](https://github.com/agentscope-ai/QwenPaw/pull/6248) already open — distinguishes *user cancel* vs *deadline offload*. |
| [#6242](https://github.com/agentscope-ai/QwenPaw/issues/6242) | Bug | 2 | 0 | **Embedding `use_dimensions` not exposed** in Console → dimension value ignored for OpenAI-compatible APIs. Fix PR [#6243](https://github.com/agentscope-ai/QwenPaw/pull/6243) submitted by first-time contributor. |
| [#4641](https://github.com/agentscope-ai/QwenPaw/issues/4641) | Bug (Stale) | 2 | 0 | **`env set` not visible to subprocesses** mid-session. PR [#6251](https://github.com/agentscope-ai/QwenPaw/pull/6251) adds `env get KEY` and `env list --json` for scriptable reads — addresses the runtime-fetch gap. |

**Pattern:** Users hit **session-breaking bugs** (blocked sessions, memory leaks, env propagation) that directly stop workflows. Fix PRs exist for the top 3, indicating responsive triage.

---

## 5. Bugs & Stability — Ranked by Severity

| Severity | Issue | Description | Fix PR? |
|----------|-------|-------------|---------|
| **Critical** | [#6245](https://github.com/agentscope-ai/QwenPaw/issues/6245) | Session **permanently blocked** after shell-command deadline; requires process restart. Regression from #6056 fix. | ✅ [#6248](https://github.com/agentscope-ai/QwenPaw/pull/6248) |
| **High** | [#6246](https://github.com/agentscope-ai/QwenPaw/issues/6246) | `recall_history` crashes with `OSError: [Errno 36] File name too long` when `_SAVED_TOOL_FILE_RE` matches huge content (e.g., git diffs). | ✅ [#6247](https://github.com/agentscope-ai/QwenPaw/pull/6247) |
| **High** | [#6239](https://github.com/agentscope-ai/QwenPaw/issues/6239) | Windows PATH concatenation drops `;` separator → child processes lose npm globals. | ❌ |
| **Medium** | [#6240](https://github.com/agentscope-ai/QwenPaw/issues/6240) | Memory annotation comments (`<!-- ⟦ NEXT_RID… -->`) rendered in Console chat UI. | ❌ |
| **Medium** | [#6242](https://github.com/agentscope-ai/QwenPaw/issues/6242) | Embedding dimension setting ignored for OpenAI-compatible APIs (`use_dimensions` not exposed). | ✅ [#6243](https://github.com/agentscope-ai/QwenPaw/pull/6243) |
| **Medium** | [#6250](https://github.com/agentscope-ai/QwenPaw/issues/6250) | Sandbox fallback hard-codes `GovernanceAction.ASK` (approval popup) with no config to bypass. | ❌ |
| **Low** | [#6249](https://github.com/agentscope-ai/QwenPaw/issues/6249) | TUI stuck at "warming" on source install (no error logs). | ❌ |

> **Stability signal:** 4 of 7 bugs have fix PRs within 24h — healthy turnaround. Windows PATH (#6239) and sandbox fallback (#6250) remain without fixes and affect CI/CD and Docker/WSL2 users.

---

## 6. Feature Requests & Roadmap Signals

| Issue | Request | Likelihood for Next Version |
|-------|---------|-----------------------------|
| [#6244](https://github.com/agentscope-ai/QwenPaw/issues/6244) | **Memory isolation by "project"** — separate memory spaces per task/project to narrow retrieval scope. | 🟡 Medium — architectural; needs schema/migration design. |
| [#6241](https://github.com/agentscope-ai/QwenPaw/issues/6241) | **Framework-level duplicate-detection & loop prevention** for repeated assistant outputs & `memory_search` calls. | 🟢 High — aligns with existing `[WARNING] 重复模式` logic; could be a config flag. |
| [#6237](https://github.com/agentscope-ai/QwenPaw/pull/6237) (PR) | **Scroll recall improvements** — complete conversational turns, date-aware queries, numeric-string bounds tolerance. | 🟢 High — PR open, enhances existing memory tool. |
| [#6238](https://github.com/agentscope-ai/QwenPaw/pull/6238) (PR) | **Concurrent driver initialization** (bounded to 8) for faster multi-MCP startup. | 🟢 High — perf PR, low risk, ready for merge. |
| [#6251](https://github.com/agentscope-ai/QwenPaw/pull/6251) (PR) | **Scriptable `env get` / `env list --json`** — unblocks #4641. | 🟢 High — small, focused, solves real CI/scripting pain. |

**Prediction:** Next patch (v2.0.0.post4) will likely include #6248, #6247, #6243, #6251, #6238, #6237. Project-level memory isolation (#6244) and duplicate-detection (#6241) are v2.1+ candidates.

---

## 7. User Feedback Summary — Pain Points & Use Cases

| Pain Point | Evidence | User Context |
|------------|----------|--------------|
| **Session unrecoverable after timeout** | #6245: "permanently blocked… until process restarted" | Docker + Linux users running long shell commands |
| **Memory UI pollution** | #6240: "注释显示 in conversation tail" | Heavy chat users (extended sessions) |
| **Env vars not propagating to subprocesses** | #4641, #6251: "mid-session `env set` invisible to `execute_shell_command`" | Scripting/CI automation users |
| **Embedding dimension mismatch** | #6242: "dimension never passed to API" | Users of OpenAI-compatible embeddings (custom dims) |
| **Windows PATH corruption** | #6239: "drops `;` separator… lose npm globals" | Windows developers using npm/pnpm globals |
| **Sandbox fallback forces approval popup** | #6250: "hard-coded ASK, no config to skip" | Docker/WSL2 users without sandbox |
| **TUI "warming" hang on source install** | #6249: "no obvious errors" | Contributors / advanced users building from source |

**Satisfaction signals:** Users file detailed, reproducible reports with version/env info — indicates investment in the project. First-time contributors (#6243, #6251) are stepping up for fixes.

---

## 8. Backlog Watch — Stale / High-Impact Items Needing Maintainer Attention

| Item | Age | Why It Matters | Status |
|------|-----|----------------|--------|
| [#4641](https://github.com/agentscope-ai/QwenPaw/issues/4641) | **58 days** (2026-05-23) | Blocks scriptable env access; PR [#6251](https://github.com/agentscope-ai/QwenPaw/pull/6251) now exists — **review & merge**. | Open, PR ready |
| [#6239](https://github.com/agentscope-ai/QwenPaw/issues/6239) | 1 day | Windows PATH bug breaks child processes; no PR yet. **Assign Windows maintainer**. | Open, no fix |
| [#6250](https://github.com/agentscope-ai/QwenPaw/issues/6250) | 1 day | Sandbox fallback UX regression; config gap. **Design config flag** (`sandbox_fallback_approval_level`?). | Open, no fix |
| [#1071](https://github.com/agentscope-ai/QwenPaw/pull/1071) | **132 days** | Mattermost integration closed without merge — **clarify intent** (deferred? duplicate? archived?). | Closed, unmerged |
| [#6249](https://github.com/agentscope-ai/QwenPaw/issues/6249) | 1 day | TUI "warming" hang on source build — may be dev-environment doc gap. **Add troubleshooting note**. | Open, no fix |

---

### 📊 Health Indicators (2026-07-19)
- **Issue velocity:** 11 updated / 0 closed → backlog growing; triage needed.
- **PR merge rate:** 1/7 closed today (14%) — low; review bandwidth may be saturated.
- **Fix latency:** 4/7 critical bugs have PRs within 24h — **excellent**.
- **Contributor influx:** 2 first-time-contributor PRs (#6243, #1071) — **healthy**.
- **Platform coverage:** Bugs span Linux/Docker, Windows, WSL2, source builds — **broad test matrix needed**.

---

*Generated from GitHub data as of 2026-07-19. Links point to live issues/PRs on `agentscope-ai/QwenPaw`.*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-07-19

## 1. Today's Overview
ZeroClaw shows **very high development velocity** with 50 issues and 50 PRs updated in the last 24 hours. The project is in active feature development and architectural refinement phase — no new releases today, but 3 PRs were merged/closed. The issue tracker reflects a mature project tackling complex infrastructure concerns: supply-chain security (SLSA, hardware PGP), air-gapped execution models, plugin sandboxing with scoped secrets, and multi-channel agent routing. Several high-priority bugs (Telegram config, web dashboard turn cancellation, provider tool-call pairing) are actively being fixed. The volume of RFCs and `status:blocked` items indicates deliberate, design-heavy engineering rather than rapid feature shipping.

## 2. Releases
**No new releases today.** The latest release data shows none in the period.

## 3. Project Progress — Merged/Closed PRs (Last 24h)
| PR | Title | Area | Impact |
|----|-------|------|--------|
| [#8056](https://github.com/zeroclaw-labs/zeroclaw/pull/8056) | CI: required PR gate — cargo audit, lockfile check, npm dependency review | CI / Security | **Merged** — Enforces supply-chain checks on every PR; part of hardened CI pipeline (#7675) |
| [#7248](https://github.com/zeroclaw-labs/zeroclaw/pull/7248) | Persist cached input tokens and include them in cost accounting | Observability / Providers | **Merged** — Completes cost-tracking for cached prompts (Anthropic, OpenAI-compatible) |
| [#5573](https://github.com/zeroclaw-labs/zeroclaw/pull/5573) | Add "Send Emails via SMTP" channel for scheduled tasks | Channels / Cron | **Merged** — Enables email delivery of cron job results (reports, alerts) |

## 4. Community Hot Topics — Most Active Issues/PRs
| Item | Comments | Type | Core Need |
|------|----------|------|-----------|
| [#5862](https://github.com/zeroclaw-labs/zeroclaw/issues/5862) | 14 | Bug (closed) | Agent unaware of its own `zeroclaw cron` tooling — **discoverability gap** |
| [#8177](https://github.com/zeroclaw-labs/zeroclaw/issues/8177) | 12 | RFC (closed) | **Supply-chain signing**: hardware PGP, hermetic builds, SLSA provenance — security-critical infra |
| [#2079](https://github.com/zeroclaw-labs/zeroclaw/issues/2079) | 9 | Feature (accepted) | **Native GitHub channel** — first-class repo event ingestion (issues, PRs, reviews) |
| [#6378](https://github.com/zeroclaw-labs/zeroclaw/issues/6378) | 8 | Feature (completed) | Discord `allowed_channels` parity with Matrix/Nextcloud — **channel scoping** |
| [#8424](https://github.com/zeroclaw-labs/zeroclaw/issues/8424) | 7 | RFC (blocked) | **Workspace-relative forbidden paths** + `.zeroclawignore` — protect internal config from agent |
| [#9127](https://github.com/zeroclaw-labs/zeroclaw/issues/9127) | 6 | RFC (new) | `KeySource` trait — classify master-key material by deployment form (HSM, file, KMS, etc.) |
| [#6293](https://github.com/zeroclaw-labs/zeroclaw/issues/6293) | 6 | RFC (blocked) | **Air-gapped execution mode** — split offline agent + online daemon over unix socket |

**Pattern:** Security hardening (supply-chain, secrets, air-gap), channel parity, and agent self-awareness dominate discussions.

## 5. Bugs & Stability — Reported Today (Ranked by Severity)
| Issue | Severity | Status | Fix PR? | Summary |
|-------|----------|--------|---------|---------|
| [#8505](https://github.com/zeroclaw-labs/zeroclaw/issues/8505) | **P1 — workflow blocked** | Open, accepted | No | Telegram channel unconfigurable; `channels doctor` false negative; bot silent |
| [#8559](https://github.com/zeroclaw-labs/zeroclaw/issues/8559) | **P1 — workflow blocked** | In progress | No | Web dashboard: agent stops work when user closes chat window (turn tied to WS lifetime) |
| [#9090](https://github.com/zeroclaw-labs/zeroclaw/pull/9090) | **High** | PR open | **Yes (PR)** | Tool-call pairing enforcement — Anthropic/Bedrock reject unpaired `tool_use`/`tool_result` |
| [#9110](https://github.com/zeroclaw-labs/zeroclaw/pull/9110) | **High** | PR open | **Yes (PR)** | Lark `verification_token` timing attack — `==` vs `constant_time_eq` |
| [#6724](https://github.com/zeroclaw-labs/zeroclaw/issues/6724) | **High** | Open, accepted | No | Empty-credential Signal/Voice channels cause supervisor crashloop (~2s restart) |
| [#6672](https://github.com/zeroclaw-labs/zeroclaw/issues/6672) | **High** | Closed | — | `reasoning_content` lost in tool-call loops with Xiaomi thinking models |
| [#6002](https://github.com/zeroclaw-labs/zeroclaw/issues/6002) | **P2** | Stale, needs author | No | Telegram + llama.cpp: "not clearly addressed to assistant" parsing failure |
| [#7911](https://github.com/zeroclaw-labs/zeroclaw/issues/7911) | **P2** | Open, accepted | No | `install.sh` picks generic Linux binary on Android/Termux (aarch64) |

**Top risks:** Telegram + web dashboard UX broken for core workflows; provider protocol compliance gaps; supervisor instability from config edge cases.

## 6. Feature Requests & Roadmap Signals
| Issue | Priority | Status | Likelihood for Next Version |
|-------|----------|--------|-----------------------------|
| [#2079](https://github.com/zeroclaw-labs/zeroclaw/issues/2079) Native GitHub channel | P2 | Accepted | **High** — long-standing, architectural, enables repo-aware agents |
| [#6055](https://github.com/zeroclaw-labs/zeroclaw/issues/6055) Slack thread context hydration | P2 | In progress | **High** — active PR work, follows #5992 |
| [#8226](https://github.com/zeroclaw-labs/zeroclaw/issues/8226) Per-agent git identity | P2 | Accepted | **Medium** — multi-tenancy blocker for shared MCP |
| [#8445](https://github.com/zeroclaw-labs/zeroclaw/issues/8445) Telegram multi-message mode | P2 | In progress | **High** — UX polish, active |
| [#8600](https://github.com/zeroclaw-labs/zeroclaw/issues/8600) Per-chat model switching (OpenRouter et al.) | P2 | Accepted | **Medium** — tracker issue, user demand visible |
| [#7431](https://github.com/zeroclaw-labs/zeroclaw/issues/7431) Pre-turn tool elicitation hints | P2 | Accepted | **Medium** — improves natural-language routing |
| [#4853](https://github.com/zeroclaw-labs/zeroclaw/issues/4853) Skills from `.well-known` URI | P2 | Accepted | **Low–Medium** — depends on external spec stabilization |
| [#5316](https://github.com/zeroclaw-labs/zeroclaw/issues/5316) SearXNG search + CAPTCHA detection | P2 | In progress | **Medium** — privacy-focused search, help wanted |

**Emerging themes:** Multi-channel parity (GitHub, Slack, Telegram, Discord, Matrix), provider flexibility (fallbacks, model switching), and agent runtime hardening (git identity, tool-call correctness, cost accounting).

## 7. User Feedback Summary — Pain Points & Use Cases
| Pain Point | Evidence | Frequency |
|------------|----------|-----------|
| **Agent doesn't know its own tools** | #5862: "zeroclaw does not know it can use `zeroclaw cron`" | 14 comments, closed but indicative |
| **Telegram bot silent despite config** | #8505: "channels doctor claims not set up… bot does not answer on TG" | 5 comments, P1 |
| **Web dashboard kills agent on disconnect** | #8559: "exiting the chat session… stops the loop… completely blocks" | 3 comments, P1, in progress |
| **Slack thread context lost** | #6055: "must re-@mention the bot for every message" | 7 comments, in progress |
| **Installer broken on Android/Termux** | #7911: "selects generic Linux binary on Android/Termux" | 3 comments, quickstart tag |
| **Provider errors opaque** | #6558: "All providers/models failed… 405 Method Not Allowed" | 5 comments, closed |
| **Context overflow → hallucination** | #6517: "fills context window… starts hallucinating" | 3 comments, closed |

**Positive signals:** Active PRs for GitHub channel, Slack thread hydration, Telegram multi-message, OpenAI-compatible endpoint — users investing in integration depth.

## 8. Backlog Watch — Stalled High-Value Items Needing Maintainer Attention
| Item | Age | Blockers | Why It Matters |
|------|-----|----------|----------------|
| [#8424](https://github.com/zeroclaw-labs/zeroclaw/issues/8424) Workspace-relative forbidden paths + `.zeroclawignore` | 21 days | `status:blocked`, `needs-author-action`, RFC | **Security** — agents can currently read `.env`, `config.yaml`, toolchain files inside workspace |
| [#6293](https://github.com/zeroclaw-labs/zeroclaw/issues/6293) Air-gapped execution mode (enclave support) | 78 days | `status:blocked`, RFC, high risk | **Architecture** — enables offline/air-gapped deployments; split-process design |
| [#7497](https://github.com/zeroclaw-labs/zeroclaw/issues/7497) OCI registries for WASM plugin storage | 38 days | `status:blocked`, RFC | **Ecosystem** — plugin distribution, cosign verification, multi-arch |
| [#8857](https://github.com/zeroclaw-labs/zeroclaw/pull/8857) Plugin scoped secrets & encrypted state | 11 days | XL PR, needs review | **Security** — portable plugin-local key grammar, secret injection |
| [#8486](https://github.com/zeroclaw-labs/zeroclaw/pull/8486) OpenAI Chat Completions gateway endpoint | 20 days | XL PR, `needs-author-action` | **Interop** — enables LangChain, Continue.dev, OpenAI SDK, Aider clients |
| [#9090](https://github.com/zeroclaw-labs/zeroclaw/pull/9090) Enforce tool-call pairing at canonical chokepoint | 4 days | XL PR, high risk | **Stability** — fixes Anthropic/Bedrock 400 errors in tool loops |
| [#6002](https://github.com/zeroclaw-labs/zeroclaw/issues/6002) Telegram "not clearly addressed" | 88 days | `status:stale`, `needs-author-action` | **Usability** — blocks Telegram + local LLM workflows |

---

**Project Health Indicates:information_source: **Data source**: GitHub API snapshot for `zeroclaw-labs/zeroclaw` on 2026-07-19. All links point to live issues/PRs.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/DenisZheng/agents-radar).*