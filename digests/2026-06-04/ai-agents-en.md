# OpenClaw Ecosystem Digest 2026-06-04

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-06-04 00:48 UTC

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

# OpenClaw Project Digest — 2026-06-04

---

## 1. Today's Overview

OpenClaw is in a period of exceptionally high activity. In the last 24 hours, the project saw **500 updated issues** (367 open, 133 closed) and **500 updated PRs** (400 open, 100 merged/closed), along with **3 new releases**. The volume signals a fast-moving project pushing frequent releases and actively triaging a large backlog. The signal-to-noise ratio is moderate: many issues carry maintainer-review and product-decision labels, indicating that the volume of incoming reports is outpacing the core team's ability to triage. Session-state reliability, message delivery, and plugin quality remain the dominant themes, reflecting a project that has reached production-scale usage and is grappling with the attendant complexity.

---

## 2. Releases

Three releases dropped around this date:

### v2026.6.2-beta.1 (latest)
- **Plugin/skill install security overhaul.** Installs now use an operator install policy instead of the old dangerous-code scanner path. Clearer `doctor`, CLI, ClawHub, and troubleshooting surfaces for package, archive, source, upload, and marketplace installs. (PR #89516, thanks @joshavant)

### v2026.6.1 (stable)
- **Agent/runtime resilience improvements.** Cleaner recovery from interrupted tool calls, stale session bindings, compaction handoffs, and media delivery retries. (#88129, #88136, #88141, #88162, #88182)
- **Channel delivery stability** across Telegram, WhatsApp, iMessage, Slack, and mobile.

### v2026.6.1-beta.3
- Same highlights as v2026.6.1 (stability fixes for agent runtimes and channel delivery), iterated in the beta channel.

**Migration notes:** The plugin install policy change in v2026.6.2-beta.1 is the most notable operator-facing change. Teams using custom skill installs should review the new install policy configuration; the old dangerous-code scanner path is deprecated.

---

## 3. Project Progress (Merged/Closed PRs)

| PR | Summary | Significance |
|---|---|---|
| [#90067](https://github.com/openclaw/openclaw/pull/90067) | fix(workboard): isolate stale lifecycle bulk patches | Follow-up to #89600 — prevents one stale card's normalization from stripping status updates for other cards in bulk operations |
| [#88957](https://github.com/openclaw/openclaw/pull/88957) | Fix Workboard card status persistence | Resolves Workboard cards bouncing away from explicit operator status changes due to stale linked-session lifecycle sync |
| [#88968](https://github.com/openclaw/openclaw/pull/88968) | fix: prevent memory flush failure from aborting user reply | **P1-ready.** Prevents `memoryFlush` errors from being surfaced as the user's reply — a real UX/data-loss fix |
| [#88969](https://github.com/openclaw/openclaw/pull/88969) | fix(imessage): persist echo markers before send | **P1-ready.** Closes a race condition where iMessage outbound rows appeared before post-send echo persistence, causing duplicate/confused messages |
| [#90053](https://github.com/openclaw/openclaw/pull/90053) | fix: hide Skill Workshop revision handoff from chat | **P2-ready.** Keeps Skill Workshop revision requests out of visible chat history |

**Notable open PRs awaiting merge:**
- [#88968](https://github.com/openclaw/openclaw/pull/88968) (memory flush failure guards) and [#88969](https://github.com/openclaw/openclaw/pull/88969) (iMessage echo fix) are both marked ready for maintainer review and address real user-facing bugs.
- [#89584](https://github.com/openclaw/openclaw/pull/89584) adds an optional cross-encoder rerank stage for memory search — a significant search quality improvement, ready for review.
- [#88504](https://github.com/openclaw/openclaw/pull/88504) introduces multi-slot memory role architecture, allowing memory plugins to compose rather than replace each other.
- [#89724](https://github.com/openclaw/openclaw/pull/89724) adds a Microsoft Teams voice provider — a notable channel expansion.

---

## 4. Community Hot Topics

The most-discussed issues (by comment volume) reveal where experienced users are hitting walls:

| Issue | Comments | Topic |
|---|---|---|
| [#88838](https://github.com/openclaw/openclaw/issues/88838) | 17 | **SQLite session/transcript migration** — tracked effort to migrate core session state to SQLite via incremental PRs. Highly active; signals the project is reworking its storage foundation. |
| [#65161](https://github.com/openclaw/openclaw/issues/65161) | 14 | **Heartbeat isolated mode regressions** — cadence stalls, mislabeled exec-events, heavy lightContext. Long-running (since April) P2. |
| [#67035](https://github.com/openclaw/openclaw/issues/67035) | 14 | **Windows chat UI regression** — input text swallowed, streamed replies invisible on 2026.4.14. Closed but heavily discussed. |
| [#88312](https://github.com/openclaw/openclaw/issues/88312) | 12 | **Codex app-server turn-completion stall regression** — multi-tool agent turns fail since 2026.5.27. 👍:2. |
| [#68113](https://github.com/openclaw/openclaw/issues/68113) | 11 | **Mattermost slash commands 503** — regression in v2026.4.15. 👍:3 — a community pain point with broad impact for Mattermost users. |
| [#63216](https://github.com/openclaw/openclaw/issues/63216) | 11 | **Repeated hard resets on same session key** despite high `reserveTokensFloor`. 👍:3 — users are losing sessions and context. |

**Underlying pattern:** The community's most passionate discussions cluster around **data loss and session instability** — hard resets, stalled turns, swallowed input, and invisible replies. These are not cosmetic issues; they represent the core promise of a personal AI assistant being broken. The SQLite migration effort (#88838) appears to be the architectural response to many of these storage-related problems.

---

## 5. Bugs & Stability

### P1 — Critical (session loss, security, crash)

| Issue | Severity | Description | Fix PR? |
|---|---|---|---|
| [#88312](https://github.com/openclaw/openclaw/issues/88312) | 🔴 Regression | Codex app-server turn-completion stall since 2026.5.27 | No |
| [#68113](https://github.com/openclaw/openclaw/issues/68113) | 🔴 Regression | Mattermost slash commands return 503 in v2026.4.15 | No |
| [#63216](https://github.com/openclaw/openclaw/issues/63216) | 🔴 | Repeated hard resets despite config, retry loop re-injects bootstrap | No |
| [#85030](https://github.com/openclaw/openclaw/issues/85030) | 🔴 | MCP tools not injected into subagent sessions — all documented allowlist mechanisms ignored | No |
| [#86215](https://github.com/openclaw/openclaw/issues/86215) | 🔴 | Codex OAuth refresh failures wedge agent for hours | No |
| [#87310](https://github.com/openclaw/openclaw/issues/87310) | 🔴 | Stale tool_call activity survives recovery, re-blocks sessions | No |
| [#63998](https://github.com/openclaw/openclaw/issues/63998) | 🔴 Crash-loop | Session transcript doomloop: crash-restart inflates transcript until OOM | No |

### P2 — Significant

| Issue | Description | Fix PR? |
|---|---|---|
| [#67288](https://github.com/openclaw/openclaw/issues/67288) | Amazon Bedrock unnecessary discovery runs sans config gate | No |
| [#67366](https://github.com/openclaw/openclaw/issues/67366) | TypeError crash during `openclaw onboard` when replacing Telegram token | No |
| [#66561](https://github.com/openclaw/openclaw/issues/66561) | OpenAI Codex SSE stream aborts locally after upstream response starts | No |
| [#67419](https://github.com/openclaw/openclaw/issues/67419) | Session context bloat: bootstrap files re-injected every turn, 20–30% token waste | No |

### Closed/Resolved Today
- [#67035](https://github.com/openclaw/openclaw/issues/67035) — Windows chat UI regression (closed)
- [#67793](https://github.com/openclaw/openclaw/issues/67793) — queue.mode "collect" not batching (closed)
- [#88020](https://github.com/openclaw/openclaw/issues/88020) — REPLAY_INVALID_RE missing Anthropic signature error (closed)
- [#67423](https://github.com/openclaw/openclaw/issues/67423) — Auth router ignores provider apiKey field (closed)
- [#86811](https://github.com/openclaw/openclaw/issues/86811) — WebChat dashboard freezes during tool calls (closed)

**Stability assessment:** The volume of closed issues today (133) suggests active cleanup, but the open P1 issues represent serious reliability gaps. The Codex integration appears particularly fragile (turn stall, OAuth wedging, mid-turn closures). No fix PRs are linked to the highest-severity open bugs, indicating these are still in the investigation/triage phase.

---

## 6. Feature Requests & Roadmap Signals

| Issue | Description | Likelihood in Next Release |
|---|---|---|
| [#72741](https://github.com/openclaw/openclaw/issues/72741) | Standard interface for external security/guardrail checks | Medium — aligns with the install policy work in v2026.6.2 |
| [#63990](https://github.com/openclaw/openclaw/issues/63990) | Multi-index embedding memory with model-aware failover | **High** — PR #88504 (multi-slot memory roles) and #89584 (cross-encoder rerank) are already in progress |
| [#64438](https://github.com/openclaw/openclaw/issues/64438) | Remote reranker endpoint support | **High** — closely related to #89584 which is ready for review |
| [#63930](https://github.com/openclaw/openclaw/issues/63930) | Anthropic advisor tool (beta server-side tool) | Medium — no active PR visible |
| [#67000](https://github.com/openclaw/openclaw/issues/67000) | Warm-up/session reuse for embedded agents | Medium — would address context bloat complaints |
| [#71142](https://github.com/openclaw/openclaw/issues/71142) | Configurable upload size limit for Control UI | Low — simple fix but no PR activity |
| [#76159](https://github.com/openclaw/openclaw/issues/76159) | Per-job acceptSilentStop flag for cron | Low — niche but well-defined |

**Prediction:** The next stable release will likely focus on **memory architecture** (multi-slot roles, reranker support) and **session reliability** (SQLite migration progress, compaction fixes). The install policy work from v2026.6.2-beta.1 will graduate to stable.

---

## 7. User Feedback Summary

**Pain points (recurring themes):**

1. **"My sessions keep dying."** — Hard resets (#63216), transcript doomloops (#63998), stuck session recovery failures (#76038), and compaction debt (#67716) all point to users losing work and context. This is the single most damaging category of issues for a personal AI assistant.

2. **"Messages disappear or arrive twice."** — Duplicate replies in WebChat (#71992, closed), swallowed input on Windows (#67035, closed), iMessage echo races (#88969, fix in progress), and silent message loss from takeover errors (#89039, fix in progress). Delivery reliability is a cross-channel problem.

3. **"The agent gets stuck and never recovers."** — Stalled Codex turns (#88312), wedged OAuth (#86215), blocked tool calls surviving recovery (#87310), and heartbeat stalls (#65161). Users are hitting walls where the agent simply stops making progress with no clear recovery path.

4. **"Context is wasted on bootstrap bloat."** — Multiple issues (#67419, #63216) report 20–30% of context consumed by re-injected bootstrap files every turn. Power users with long conversations feel this acutely.

5. **"Plugin/skill installs are confusing and scary."** — The v2026.6.2-beta.1 install policy overhaul directly addresses this. Users were uncomfortable with the dangerous-code scanner approach.

**Satisfaction signals:** The rapid release cadence (3 releases in this window), active PR merging, and maintainer responsiveness to Workboard and memory-core issues suggest a project that is listening. The closed issues today include several long-standing regressions, which is encouraging.

---

## 8. Backlog Watch

These important issues have been open for weeks/months with significant community engagement but no visible resolution path:

| Issue | Age | Why It Matters |
|---|---|---|
| [#63216](https://github.com/openclaw/openclaw/issues/63216) — Repeated hard resets | 57 days | 👍:3, P1, impacts all users with long sessions. Core session reliability. |
| [#63998](https://github.com/openclaw/openclaw/issues/63998) — Session transcript doomloop OOM | 55 days | P1, crash-loop. Gateway becomes unrecoverable. |
| [#65624](https://github.com/openclaw/openclaw/issues/65624) — Mattermost cleartext callback URLs | 52 days | Security (CVSS 7.6–8.6), reusable command tokens exposed. |
| [#68751](https://github.com/openclaw/openclaw/issues/68751) — Raw prior-session turns replay on /reset | 46 days | Security + session integrity. Prior commands re-executed as current input. |
| [#64500](https://github.com/openclaw/openclaw/issues/64500) — Circuit breaker doesn't block ping-pong tool loops | 55 days | P2, agent can loop indefinitely despite circuit breaker. |
| [#67363](https://github.com/openclaw/openclaw/issues/67363) — Dreaming promotes raw logs to MEMORY.md | 50 days | P2, memory quality degrades over time with unprocessed fragments. |
| [#63612](https://github.com/openclaw/openclaw/issues/63612) — Compaction token estimation crash | 56 days | P1, main session becomes unrecoverable. |

**PRs needing maintainer attention:**
- [#88968](https://github.com/openclaw/openclaw/pull/88968) — Memory flush failure guard (P1, ready for review, 0 comments)
- [#88969](https://github.com/openclaw/openclaw/pull/88969) — iMessage echo fix (P1, ready for review, 0 comments)
- [#89584](https://github.com/openclaw/openclaw/pull/89584) — Cross-encoder reranker (P2, ready for review, 0 comments)
- [#89039](https://github.com/openclaw/openclaw/pull/89039) — Silent message loss from takeover errors (P1, needs proof)

These four PRs are marked ready for maintainer review but have received no comments despite addressing P1 issues. They represent the fastest path to improving stability for users.

---

*Data source: github.com/openclaw/openclaw — snapshot 2026-06-04. All links reference the openclaw/openclaw repository.*

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: Personal AI Assistant & Agent Open-Source Ecosystem

**Date:** 2026-06-04 | **Projects Analyzed:** 14 | **Generated by:** OWL, ZOO Company

---

## 1. Ecosystem Overview

The personal AI agent open-source ecosystem is in a period of explosive growth and intense competition. Fourteen tracked projects span the spectrum from lightweight embedded agents (PicoClaw, ZeptoClaw) to full-featured personal AI platforms (OpenClaw, CoPaw, Hermes Agent). The dominant theme across the ecosystem is the **transition from experimental to production-grade**: projects are grappling with session reliability, context management, memory architecture, and multi-channel delivery at scale. Security is emerging as a first-class concern, with multiple projects overhauling plugin/skill install policies, credential handling, and sandbox enforcement. The ecosystem is also converging on **multi-agent orchestration** as the next frontier, with at least 6 projects actively building or requesting agent-to-agent communication primitives.

---

## 2. Activity Comparison

| Project | Issues (open/closed) | PRs (open/merged) | Releases (24h) | Health Score |
|---|---|---|---|---|
| **OpenClaw** | 367 / 133 | 400 / 100 | 3 (incl. stable + beta) | ⭐⭐⭐⭐ High velocity, large backlog |
| **NanoBot** | ~20 / ~12 | ~15 / 16 | None (accumulating) | ⭐⭐⭐⭐ Strong merge cadence |
| **Hermes Agent** | 44 / 6 | 36 / 14 | None | ⭐⭐⭐ Backlog growing |
| **PicoClaw** | 3 reactivated | 7 / 3 | 1 nightly | ⭐⭐⭐⭐ Shipping steadily |
| **NanoClaw** | 1 / 0 | 9 / 0 | None | ⭐⭐ Review bottleneck |
| **NullClaw** | 0 / 0 | 1 / 0 | None | ⭐⭐ Maintenance mode |
| **IronClaw** | 21 / 6 | 22 / 28 | 1 patch (v0.29.1) | ⭐⭐⭐⭐ Aggressive shipping |
| **LobsterAI** | ~1 / 0 | 2 / 14 | 1 (2026.6.3) | ⭐⭐⭐⭐⭐ Highest merge rate |
| **TinyAGI** | — | — | — | ⚪ No activity |
| **Moltis** | 5 / 9 | 4 / 0 | 2 | ⭐⭐⭐⭐ Bug-fix sprint |
| **CoPaw** | 28 / 21 | 29 / 21 | None | ⭐⭐⭐⭐ High throughput |
| **ZeptoClaw** | 0 / 0 | 16 / 0 | None | ⭐⭐ Dependency maintenance |
| **ZeroClaw** | ~25 / ~25 | ~25 / ~25 | None (v0.8.0 pending) | ⭐⭐⭐⭐ Pre-release push |

**Key observations:** OpenClaw dominates in absolute volume (500+ issues, 500+ PRs). LobsterAI has the highest merge-to-open ratio (14/2), indicating a lean, focused team. IronClaw and ZeroClaw show the most aggressive PR closure rates relative to their size. NanoClaw and ZeptoClaw have zero merges despite open PRs, signaling maintainer bandwidth constraints.

---

## 3. OpenClaw's Position

### Advantages vs. Peers

| Dimension | OpenClaw | Closest Competitors |
|---|---|---|
| **Scale of activity** | 500+ issues, 500+ PRs updated daily — 5–10× larger than any peer | CoPaw (50/50), IronClaw (50/27) |
| **Release cadence** | 3 releases in 24h (stable + beta + patch) | LobsterAI (1), Moltis (2), IronClaw (1) |
| **Channel breadth** | Telegram, WhatsApp, iMessage, Slack, Microsoft Teams, WebChat, Codex | CoPaw (Feishu, Telegram, WeChat), Hermes (Discord, Slack, Telegram, QQBot) |
| **Plugin ecosystem** | ClawHub marketplace, operator install policy, Skill Workshop | CoPaw (skill marketplace), ZeroClaw (SkillForge) |
| **Memory architecture** | Multi-slot memory roles (#88504), cross-encoder rerank (#89584), SQLite migration (#88838) | NanoBot (Dream + MECE), CoPaw (ChromaDB vector store) |

### Technical Approach Differences

- **OpenClaw** uses a monolithic-but-modular architecture with a strong emphasis on channel abstraction and a centralized plugin marketplace (ClawHub). Its session model is the most complex in the ecosystem, supporting compaction, replay, multi-provider routing, and cross-channel session binding.
- **NanoBot** is the minimalist counterpoint — under 4k lines, event-driven WebUI, file-system-based multi-agent mailbox. It trades breadth for simplicity.
- **IronClaw** is the most architecturally ambitious, undertaking a full "Reborn" migration to a ProductWorkflow/ProductAdapter model with typed capability surfaces and actor resolution.
- **ZeroClaw** is investing heavily in security architecture (OIDC, pluggable auth providers, ACP session isolation) and evaluation infrastructure (deterministic LLM trace replay).
- **CoPaw** is the most feature-rich for end users, with a Tauri desktop app, browser automation, Feishu/WeChat enterprise channel support, and a skill marketplace.

### Community Size Comparison

OpenClaw's issue and PR volume (500+ each) suggests a community **5–20× larger** than the next most active projects. Its backlog of 367 open issues and 400 open PRs, while impressive in throughput, also indicates that community contribution is outpacing maintainer triage capacity — a scaling challenge that smaller projects (NanoBot, PicoClaw) have not yet faced.

---

## 4. Shared Technical Focus Areas

The following requirements are emerging simultaneously across multiple projects, signaling ecosystem-wide convergence:

### 4.1 Context Compaction & Memory Management
**Projects:** OpenClaw, CoPaw, NanoBot, IronClaw, ZeroClaw
- OpenClaw: SQLite session migration, multi-slot memory roles, cross-encoder rerank
- CoPaw: DAG-based lossless compaction, ChromaDB segfault fixes, vector index bloat (37GB)
- NanoBot: MECE memory deduplication, compaction benchmarks, Dream refactor
- IronClaw: `builtin.http` context bomb (1.2MB/call), prompt bundle caching, skill_list pagination
- ZeroClaw: Context compressor drops `reasoning_content` for DeepSeek

**Core need:** Context is the scarcest resource in agent loops. Every project is hitting walls with naive full-context injection and is investing in compaction, summarization, and selective retrieval.

### 4.2 Session Reliability & State Management
**Projects:** OpenClaw, NanoBot, PicoClaw, IronClaw, ZeroClaw
- OpenClaw: Hard resets, transcript doomloops, stale session bindings, compaction handoff failures
- NanoBot: Premature agent exit on sustained goals, run-level hook lifecycle
- PicoClaw: Session history pollution after upgrade, tool_calls dropped during streaming
- IronClaw: Stale PID files, loop exit reason invisible, subagent completion delivery
- ZeroClaw: RPC session reaping at 10 min, ACP cwd locking out skill files

**Core need:** Users expect sessions to survive across days and channel switches. Storage-layer reliability (SQLite migrations, checkpoint-gated watermarks) is the foundational fix.

### 4.3 Multi-Agent Orchestration
**Projects:** OpenClaw, NanoBot, Hermes Agent, CoPaw, IronClaw
- NanoBot: Mailbox channel plugin, cross-agent messaging bus, A2A orchestration request
- Hermes Agent: Kanban dashboard for worker visibility, subagent management
- CoPaw: `spawn_subagent` with no visible progress, parent agent permission inheritance
- IronClaw: `builtin.spawn_subagent` broken (advertised but not in tools array), subagent completion observer

**Core need:** Users want teams of specialized agents, not isolated instances. The ecosystem lacks standardized inter-agent communication protocols.

### 4.4 Security Hardening
**Projects:** OpenClaw, NanoBot, PicoClaw, ZeroClaw, Moltis
- OpenClaw: Plugin install policy overhaul (replacing dangerous-code scanner)
- NanoBot: Filesystem tools bypass `restrict_to_workspace`, agent executes `rm -rf`
- PicoClaw: Configurable TLS verification for MQTT (was hardcoded insecure)
- ZeroClaw: OIDC auth provider, pluggable security enforcement, token invalidation
- Moltis: Stdio MCP server env vars leaking to LLMs

**Core need:** As agents gain tool access and plugin ecosystems grow, the attack surface expands. Projects are moving from "trust the plugin" to "verify and sandbox."

### 4.5 Channel Delivery Reliability
**Projects:** OpenClaw, NanoBot, Hermes Agent, PicoClaw, ZeroClaw, Moltis
- OpenClaw: iMessage echo races, WhatsApp delivery, Mattermost 503s
- NanoBot: Telegram/Discord media cleanup, WhatsApp WebSocket disconnect loop
- Hermes Agent: Slack native streaming (migrating to AI Assistant Steps API), QQBot heartbeat failure
- PicoClaw: WebSocket tool_calls drop, streaming config requested
- ZeroClaw: WhatsApp Web protocol drift breakage, webhook config gaps
- Moltis: Telegram edit-in-place streaming corrupts final replies

**Core need:** Each messaging platform has unique protocol semantics (streaming, editing, media, rate limits). Channel adapters are a persistent maintenance burden.

---

## 5. Differentiation Analysis

| Project | Primary Target User | Key Differentiator | Technical Architecture |
|---|---|---|---|
| **OpenClaw** | Power users, self-hosters, multi-channel operators | Broadest channel support, ClawHub marketplace, highest ecosystem maturity | Monolithic TypeScript, plugin-based, multi-provider routing |
| **NanoBot** | Minimalists, developers who want <4k lines to read | Lightweight, event-driven WebUI, file-system mailbox for multi-agent | Python, event bus, cron-based Dream |
| **Hermes Agent** | Desktop-first users, Nous Research ecosystem | Desktop app (TUI + GUI), Claude/Codex runtime bridges, 1Password secrets | Rust + TypeScript, TUI (Ink), launchd/systemd integration |
| **PicoClaw** | Embedded/IoT, Go developers | Go-based, MQTT channel, small footprint, nightly release cadence | Go, WebSocket-first, config-driven channels |
| **NanoClaw** | Scheduling-focused users | Cron/recurrence reliability, encrypted home directory support | Agent-scoped scheduling, QMD hybrid search |
| **NullClaw** | MCP/copilot integrators | Tool filter groups, clean prompt-tool vs API-tool separation | Rust, MCP-native, dynamic tool filtering |
| **IronClaw** | Enterprise, security-conscious deployments | Reborn architecture (ProductWorkflow, actor resolution, capability gating) | Rust, typed capability surfaces, SSO/OAuth binding |
| **LobsterAI** | Collaborative teams, enterprise (Chinese market) | Cowork module (conversation forking, text snippets, channel sync), HTML sharing | Electron + React, MCP-first, cowork collaboration layer |
| **Moltis** | Docker/Podman users, security-aware | Vault password detection, per-skill enable/disable, env var leak prevention | Container-native, skill granularity, activity log controls |
| **CoPaw** | End users, enterprise (Chinese market) | Tauri desktop app, browser automation, Feishu/WeChat, skill marketplace | Python + Rust (Tauri), ChromaDB vector store, ACP support |
| **ZeptoClaw** | Rust developers, web dashboard users | Rust-based with React panel, Astro docs, strict dependency management | Rust + React + Astro, WebSocket RPC |
| **ZeroClaw** | Security-first deployments, eval-driven development | OIDC auth, pluggable security providers, deterministic LLM trace replay eval harness | Rust, ACP-native, config-resilient daemon |

---

## 6. Community Momentum & Maturity

### Tier 1: Rapidly Iterating (High Velocity, Active Releases)
- **OpenClaw** — 3 releases, 100+ PRs merged, 133 issues closed. Production-scale with scaling pains.
- **LobsterAI** — 14 PRs merged, 1 release. Lean team, high merge ratio, focused on Cowork.
- **IronClaw** — 28 PRs merged, 1 patch release. Deep in Reborn migration, aggressive hardening.
- **Moltis** — 2 releases, 9 issues closed. Bug-fix sprint mode, responsive maintainers.

### Tier 2: Active Development (Steady Progress, No Releases Today)
- **NanoBot** — 16 PRs merged, no release. Accumulating changes, WebUI refactor wave.
- **CoPaw** — 21 PRs merged, 21 issues closed. High throughput, context/memory focus.
- **ZeroClaw** — ~25 PRs merged, ~25 issues closed. Pre-release security hardening push.
- **Hermes Agent** — 14 PRs merged, Desktop app focus, backlog growing.

### Tier 3: Stable / Maintenance Mode
- **PicoClaw** — Nightly releases, small surgical fixes, pre-stable cadence.
- **NanoClaw** — Active PRs but zero merges, review bottleneck.
- **ZeptoClaw** — 16 Dependabot PRs, no human activity. Dependency maintenance only.
- **NullClaw** — 1 PR, zero issues. Polish/maintenance phase.

### Tier 4: Dormant
- **TinyAGI** — No activity detected.

---

## 7. Trend Signals

### Trend 1: The "Session Reliability Crisis" Is the Defining Challenge
Across OpenClaw (hard resets, transcript doomloops), CoPaw (compaction crashes), PicoClaw (session history pollution), and IronClaw (stale PIDs, invisible loop exits), the most damaging user experience is **losing work**. The ecosystem is converging on SQLite-backed session storage, checkpoint-gated persistence, and bounded context budgets as the solution stack. **Implication for developers:** Session state management is no longer a nice-to-have — it is the core reliability primitive.

### Trend 2: Security Is Shifting Left
Six projects (OpenClaw, NanoBot, PicoClaw, ZeroClaw, Moltis, Hermes Agent) are actively hardening security surfaces — from plugin install policies to credential zeroizing to env var leak prevention. The ecosystem is moving from "convenience-first" to "secure-by-default" postures. **Implication:** Expect sandboxing, OIDC, and capability gating to become table stakes within 2–3 release cycles.

### Trend 3: Multi-Agent Is the Next Platform Shift
At least 6 projects are building agent-to-agent communication primitives (NanoBot's mailbox, CoPaw's spawn_subagent, IronClaw's ProductWorkflow, Hermes' Kanban dashboard, OpenClaw's subagent sessions, NanoClaw's parent permission inheritance). No dominant protocol has emerged yet — this is the ecosystem's "HTTP moment." **Implication:** Developers should watch for a de facto standard (likely ACP-based) to crystallize in the next 6 months.

### Trend 4: Context Budget Management Is Becoming a First-Class Engineering Discipline
The `builtin.http` context bomb (IronClaw, 1.2MB/call), unbounded skill_list (IronClaw, 14KB for 31 skills), vector index bloat (CoPaw, 37GB), and bootstrap re-injection waste (OpenClaw, 20–30% token overhead) all point to the same realization: **unmanaged context growth is an existential threat to agent usability.** Projects are responding with HTML stripping, pagination, caching, and model-aware compaction. **Implication:** Context engineering is emerging as a distinct specialization within agent development.

### Trend 5: The Desktop App Is Making a Comeback
Hermes Agent (TUI + GUI), CoPaw (Tauri), LobsterAI (Electron), and NanoBot (WebUI) are all investing in local-first desktop or web-app experiences. The CLI-only era is giving way to persistent, always-available agent interfaces. **Implication:** The personal AI assistant is evolving from a developer tool into a consumer product category.

### Trend 6: Channel Fragmentation Is a Persistent Tax
Every project with >2 channels reports channel-specific bugs. WhatsApp protocol drift breaks ZeroClaw. Telegram streaming corrupts Moltis. iMessage echo races plague OpenClaw. QQBot heartbeat failures affect Hermes. **Implication:** Channel adapter maintenance is a structural cost that favors projects with dedicated channel teams or community-driven adapter ecosystems.

---

*This report was generated by OWL (ZOO Company) based on GitHub repository snapshots from 2026-06-04. All data references public repository activity. Health scores are relative assessments based on merge cadence, issue resolution rate, release frequency, and backlog management.*

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-06-04

---

## 1. Today's Overview

NanoBot remains in a highly active development phase with **32 issues** and **31 pull requests** updated in the last 24 hours. The project shows strong community engagement: 16 PRs were merged/closed today, indicating a healthy review and merge cadence. No new releases were published, suggesting the team is accumulating changes for an upcoming version. The majority of issues are stale (created February–March 2026), but a cluster of new activity on June 3rd shows fresh contributions from both maintainers and external contributors. The project's core maintainer `chengyongru` is driving a significant volume of merges across memory, WebUI, agent lifecycle, and provider subsystems.

---

## 2. Releases

**None.** No new versions were published today. The recent wave of merged PRs (memory optimization, WebUI refactoring, agent hooks, compaction benchmarks) appears to be building toward a future release.

---

## 3. Project Progress

The following PRs were merged or closed today, representing the most significant project advances:

| PR | Author | Summary |
|---|---|---|
| [#4174](https://github.com/HKUDS/nanobot/pull/4174) | chengyongru | **fix: restore top-level import order** — E402 lint normalization across CLI and test modules |
| [#4157](https://github.com/HKUDS/nanobot/pull/4157) | chengyongru | **fix(webui): bound startup fetch waits** — Adds `fetchWithTimeout` to prevent WebUI from hanging on slow bootstrap; regression tests added |
| [#4135](https://github.com/HKUDS/nanobot/pull/4135) | chengyongru | **refactor: WebUI runtime state onto event bus** — Decouples WebUI state from `AgentLoop` via typed runtime events and `WebuiTurnCoordinator` subscribers |
| [#3999](https://github.com/HKUDS/nanobot/pull/3999) | chengyongru | **fix(agent): prevent runner from exiting while sustained goal is active** — Fixes a bug where `/goal` tasks would terminate prematurely when the LLM returned text without calling `complete_goal` |
| [#3952](https://github.com/HKUDS/nanobot/pull/3952) | chengyongru | **feat(memory): enhance Dream + Consolidator prompts for MECE long-term memory** — Addresses memory duplication bloat in `MEMORY.md` and `history.jsonl` |
| [#3932](https://github.com/HKUDS/nanobot/pull/3932) | chengyongru | **fix(providers): avoid duplicate tool_call_id in stream mode** — Fixes API rejection errors in OpenAI-compatible streaming |
| [#3920](https://github.com/HKUDS/nanobot/pull/3920) | chengyongru | **feat(benchmark): add compaction benchmark + optimize consolidator prompt** — Systematic evaluation of context compaction quality |
| [#3858](https://github.com/HKUDS/nanobot/pull/3858) | chengyongru | **refactor: extract ContextBuilder.build_user_content() as public method** |
| [#3461](https://github.com/HKUDS/nanobot/pull/3461) | chengyongru | **feat: multi-agent mailbox channel plugin** — File-system-based inter-agent communication channel with anti-loop protection |
| [#3990](https://github.com/HKUDS/nanobot/pull/3990) | chengyongru | **refactor(dream): replace two-phase Dream class with simple cron + process_direct** |
| [#3221](https://github.com/HKUDS/nanobot/pull/3221) | chengyongru | **feat: add nanobot auth command** — OAuth Device Flow, token storage, auto-configure provider/model |
| [#4122](https://github.com/HKUDS/nanobot/pull/4122) | Archermmt | **feat(multimodel): WebUI voice recording + local ASR** — Closed (not merged) |

**Key themes today:** The maintainer is executing a broad refactor of the WebUI architecture (event bus pattern), hardening the agent lifecycle (sustained goals, run-level hooks), improving long-term memory quality, and fixing provider-level streaming bugs. The mailbox channel plugin (#3461) is a notable new capability for multi-agent setups.

---

## 4. Community Hot Topics

### Most Discussed Issues (by comment count)

1. **[#222](https://github.com/HKUDS/nanobot/issues/222) — Multi agents setup — Supported?** (10 comments, 👍7)
   The most-commented issue. Users want documentation and guidance on configuring multi-agent setups. The recent merge of the mailbox channel plugin (#3461) and PR #3992 (cross-agent messaging) suggest the project is converging on this capability, but no official docs or guide exists yet.

2. **[#979](https://github.com/HKUDS/nanobot/issues/979) — AI executes `rm` commands despite safety guards** (5 comments, 👍0)
   A closed but illustrative issue: the agent executed `rm -rf` on user-specified paths. Highlights the fundamental tension between agent autonomy and safety guardrails.

3. **[#1022](https://github.com/HKUDS/nanobot/issues/1022) — Nanobot fails for long-running tasks** (4 comments, 👍3)
   Agent returns "Starting execution now" but does nothing for complex multi-step tasks. Closed stale, but the underlying issue (task decomposition and sustained execution) is partially addressed by PR #3999 (sustained goal fix).

4. **[#80](https://github.com/HKUDS/nanobot/issues/80) — Add lightweight memory retrieval (BM25/TF-IDF)** (4 comments, 👍0)
   Users want relevance-based memory injection instead of full context loading. This would reduce token usage as memory grows — a scalability concern.

5. **[#97](https://github.com/HKUDS/nanobot/issues/97) — RFC: Core Architecture Improvements (Memory, Security, Testing)** (1 comment, 👍6)
   The most upvoted issue. A comprehensive proposal covering memory architecture, security hardening, and testing infrastructure. High community interest but limited maintainer response.

### Most Active PRs (open, updated today)

- **[#4181](https://github.com/HKUDS/nanobot/pull/4181)** — WebUI `Cmd/Ctrl+Shift+O` new chat shortcut (addresses #4178)
- **[#4179](https://github.com/HKUDS/nanobot/issues/4179)** — Native Agent-to-Agent Orchestration feature request
- **[#4176](https://github.com/HKUDS/nanobot/pull/4176)** — Run-level agent hook lifecycle (before_run, after_run, on_error, on_finally)
- **[#3992](https://github.com/HKUDS/nanobot/pull/3992)** — Cross-agent messaging bus for multi-instance collaboration

**Underlying needs analysis:** The community is converging around three major themes: (1) **multi-agent orchestration** — users want to run teams of specialized agents, not just isolated instances; (2) **memory quality and scalability** — the current flat memory approach doesn't scale; (3) **agent reliability** — long-running tasks, hallucinated tool calls, and premature termination erode trust.

---

## 5. Bugs & Stability

### Ranked by Severity

| Severity | Issue | Description | Fix Status |
|---|---|---|---|
| 🔴 High | [#143](https://github.com/HKUDS/nanobot/issues/143) | **Filesystem tools bypass `restrict_to_workspace`** — ReadFile, WriteFile, EditFile, ListDir can access arbitrary host paths (👍4) | No fix PR identified |
| 🔴 High | [#979](https://github.com/HKUDS/nanobot/issues/979) | **Agent executes destructive `rm -rf` commands** — Safety guardrails insufficient | Closed stale, no code fix |
| 🟡 Medium | [#954](https://github.com/HKUDS/nanobot/issues/954) | **Progress streaming leaks internal tool calls to user chat** — After v0.1.4 upgrade, exec/read_file/list_dir appear in user-facing chat (👍1) | No fix PR identified |
| 🟡 Medium | [#1022](https://github.com/HKUDS/nanobot/issues/1022) | **Long-running tasks silently fail** — Agent says "Starting execution" but does nothing (👍3) | Partially addressed by PR #3999 |
| 🟡 Medium | [#937](https://github.com/HKUDS/nanobot/issues/937) | **Excessive hallucinations with exec tool** — User abandoned evaluation due to unreliable tool use | No fix PR identified |
| 🟡 Medium | [#896](https://github.com/HKUDS/nanobot/issues/896) | **Telegram/Discord media files never cleaned up** — Unbounded disk growth in `~/.nanobot/media/` | No fix PR identified |
| 🟡 Medium | [#935](https://github.com/HKUDS/nanobot/issues/935) | **Remote MCP URL times out with asyncio.CancelledError** — Streamable HTTP MCP servers fail to connect (👍1) | No fix PR identified |
| 🟢 Low | [#984](https://github.com/HKUDS/nanobot/issues/984) | **Media path outside workspace** — Whisper transcription skills can't access downloaded media | Closed stale |
| 🟢 Low | [#150](https://github.com/HKUDS/nanobot/issues/150) | **WhatsApp WebSocket gateway disconnect loop** on Linux Python 3.12 | No fix PR identified |

**Notable fix merged today:** PR #3932 fixed duplicate `tool_call_id` in streaming mode, and PR #3999 fixed premature agent exit on sustained goals.

---

## 6. Feature Requests & Roadmap Signals

### Likely Candidates for Next Release

Based on merged PRs and open feature requests, the following capabilities appear to be converging:

1. **Multi-agent orchestration** — The mailbox channel plugin (#3461), cross-agent messaging PR (#3992), and A2A orchestration request (#4179) all point toward first-class multi-agent support. The new run-level hook lifecycle (#4176) also provides the infrastructure for this.

2. **Memory system overhaul** — PR #3952 (MECE memory), #3920 (compaction benchmark), and #3990 (Dream refactor) represent a systematic overhaul of the long-term memory pipeline. Issue #80 (BM25 retrieval) remains open but aligns with this direction.

3. **WebUI maturity** — The event bus refactor (#4135), timeout hardening (#4157), and keyboard shortcut (#4181) suggest a push toward production-quality WebUI.

4. **Provider expansion** — PR #4126 (Azure AAD auth for Azure OpenAI) is open and addresses enterprise authentication needs.

5. **Agent reliability** — The sustained goal fix (#3999), run-level hooks (#4176), and hook lifecycle improvements signal investment in long-running task reliability.

### Longer-Term Signals

- **Sandboxing** (#931) — Native sandbox interface for untrusted plugin execution (Deno/Firecracker)
- **Multi-tenant gateway** (#936, #976) — Single gateway managing multiple agents
- **Additional channels** — Mattermost (#1011, 👍4), SimpleX Chat (#240, 👍2), WeChat (#192)
- **Pre-handler hooks** (#990) — Zero-token message routing for commands like `#日记`

---

## 7. User Feedback Summary

### Pain Points

- **Safety and trust**: Multiple users report the agent executing dangerous commands (#979) and hallucinating tool calls (#937). The filesystem sandbox bypass (#143) is a known security gap with 4 upvotes. Users evaluating NanoBot for production use cite these as blockers.
- **Long-running task reliability**: Users expect the agent to handle multi-step tasks autonomously (#1022), but the agent either silently fails or exits prematurely. The `/goal` feature was meant to address this but had a critical bug (now fixed in #3999).
- **Memory scalability**: As conversations grow, the flat memory injection approach becomes wasteful and less relevant (#80). Users report duplicate entries bloating `MEMORY.md` (#3952).
- **Multi-agent confusion**: Users see evidence that multi-agent setups work (#222) but lack documentation. The operational gap for inspecting and controlling subagents (#1006) compounds this.
- **Channel-specific issues**: WhatsApp self-chat ignored (#117), media files not cleaned up (#896), media outside workspace (#984).

### Satisfaction Signals

- Issue #97 (👍6) praises the "clean and lightweight architecture" and "under 4k lines" — users appreciate the minimalist design philosophy.
- The breadth of channel support (Telegram, Discord, Slack, WhatsApp, QQ, Feishu, Mattermost requests) suggests users are actively deploying NanoBot across diverse platforms.
- Active external contributions (PRs from `axelray-dev`, `kunalk16`, `yorkhellen`, `ysofologis`, `yu-xin-c`) indicate a growing contributor base.

---

## 8. Backlog Watch

### Long-Unanswered Issues Needing Maintainer Attention

| Issue | Age | Signal | Risk |
|---|---|---|---|
| [#143](https://github.com/HKUDS/nanobot/issues/143) — Filesystem tools bypass `restrict_to_workspace` | 4 months | 👍4, security | **High** — Security vulnerability, no response |
| [#97](https://github.com/HKUDS/nanobot/issues/97) — RFC: Core Architecture Improvements | 4 months | 👍6, comprehensive | **High** — Most upvited issue, no maintainer response |
| [#222](https://github.com/HKUDS/nanobot/issues/222) — Multi-agent setup docs | 4 months | 👍7, 10 comments | **High** — Top community ask, partial code exists |
| [#80](https://github.com/HKUDS/nanobot/issues/80) — Lightweight memory retrieval | 4 months | Technical debt | **Medium** — Scalability concern |
| [#937](https://github.com/HKUDS/nanobot/issues/937) — Exec tool hallucinations | 3 months | User churn | **Medium** — User abandoned the project |
| [#1011](https://github.com/HKUDS/nanobot/issues/1011) — Mattermost channel | 3 months | 👍4 | **Medium** — Popular channel request |
| [#135](https://github.com/HKUDS/nanobot/issues/135) — Persistent long-term memory | 4 months | 👍4 | **Medium** — Partially addressed by recent PRs |
| [#931](https://github.com/HKUDS/nanobot/issues/931) — Native Sandbox Interface | 3 months | Security | **Medium** — Important for plugin ecosystem |

### Stale PRs at Risk of Closure

- [#3720](https://github.com/HKUDS/nanobot/pull/3720) — Cron streaming fix (created May 9, still open)
- [#3992](https://github.com/HKUDS/nanobot/pull/3992) — Cross-agent messaging (created May 24, no review)

---

*Data source: HKUDS/nanobot GitHub repository. Digest generated 2026-06-04.*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-06-04

---

## 1. Today's Overview

Hermes Agent remains in a period of intense community activity with **50 issues and 50 PRs updated in the last 24 hours**, though no new releases have been published. The project is clearly in a heavy development cycle: the majority of activity centers on the **Desktop app experience** (onboarding, session management, approval prompts), **gateway stability** (Discord, Slack, Telegram, macOS launchd), and **vision/provider fallback reliability**. A notable pattern is the high volume of same-day PR creation and closure, suggesting a responsive maintainer team actively triaging community contributions. However, the sheer volume of open issues (44) and open PRs (36) against only 6 closed issues and 14 merged/closed PRs indicates a growing backlog that may strain review capacity.

---

## 2. Releases

**None.** No new releases were published today. The project appears to be accumulating changes toward a future release.

---

## 3. Project Progress

### Merged / Closed PRs (Today)

| PR | Summary |
|---|---|
| [#38577](https://github.com/NousResearch/hermes-agent/pull/38577) | **Onboarding UX fix** — Clarified the two Anthropic/Claude provider options (API Key vs. OAuth subscription) and reordered the provider list to reduce user confusion during setup. |
| [#38574](https://github.com/NousResearch/hermes-agent/pull/38574) | **Slack native streaming** — Replaced the legacy `postMessage` → `chat.update` edit loop with Slack's native AI Assistant Steps API (`chat.startStream`/`appendStream`/`stopStream`), producing native collapsible step cards in Slack threads. |
| [#38562](https://github.com/NousResearch/hermes-agent/pull/38562) | **CLI resume cwd fix** — `hermes -c` / `hermes --resume <id>` now reopens sessions in their original working directory instead of the current terminal directory. Leveraged the existing `cwd` column in the sessions table that the TUI already used. |

### Key Open PRs Awaiting Review

| PR | Summary |
|---|---|
| [#38578](https://github.com/NousResearch/hermes-agent/pull/38578) | **Desktop approval prompts** — Fixes tools silently timing out because the desktop gateway event handler had no case for `approval.request`, `sudo.request`, or `secret.request`. |
| [#38586](https://github.com/NousResearch/hermes-agent/pull/38586) | **Desktop session token fix** — Prevents infinite SIGTERM boot loop when `HERMES_DASHBOARD_SESSION_TOKEN` is pinned in `~/.hermes/.env`. |
| [#38588](https://github.com/NousResearch/hermes-agent/pull/38588) | **Claude subprocess runtime bridge** — Adds `/claude-runtime` slash command mirroring `/codex-runtime`, routing Anthropic turns through the official `claude` CLI to bill against Pro/Max subscriptions instead of API credits. |
| [#38564](https://github.com/NousResearch/hermes-agent/pull/38564) | **TUI mouse sequence fix** — Root-cause fix for SGR mouse fragment leak in alt-screen Ink (supersedes stale PR #29337). |
| [#38569](https://github.com/NousResearch/hermes-agent/pull/38569) | **1Password secrets backend** — Adds 1Password as a secret-source backend using the `op` CLI. |

---

## 4. Community Hot Topics

### Most Discussed Issues

1. **[#10567](https://github.com/NousResearch/hermes-agent/issues/10567)** — *Add `--host` and CORS config for Hermes dashboard* (💬6, 👍10)
   - **Underlying need:** Users running Hermes on remote servers, Tailscale, or VPNs cannot access the web UI because the dashboard binds to `127.0.0.1` with hardcoded CORS. This is a **remote access / self-hosting** workflow blocker. The 👍 count (10) is the highest of any issue today, indicating broad demand.

2. **[#25822](https://github.com/NousResearch/hermes-agent/issues/25822)** — *Gemini 503 does not trigger provider fallback* (💬4, 👍1)
   - **Underlying need:** Vision pipeline resilience. When Gemini returns 503 (high demand), the configured `fallback_provider` is silently ignored. This is part of a **cluster of vision fallback bugs** (see also #35876, #30704, #24039) suggesting the auxiliary vision fallback system needs a systematic review.

3. **[#24357](https://github.com/NousResearch/hermes-agent/issues/24357)** — *QQBot gateway stops heartbeating after reconnect* (💬3, 👍2)
   - **Underlying need:** Messaging gateway reliability for the Chinese-market QQ platform. The bot enters a 4009 Session timeout loop after reconnection, requiring a container restart.

4. **[#37869](https://github.com/NousResearch/hermes-agent/issues/37869)** — *Desktop app shows remote connection failure despite backend being ready* (💬3)
   - **Underlying need:** Desktop app UX clarity — the UI and logs are out of sync, eroding user trust in the connection status indicator.

5. **[#37109](https://github.com/NousResearch/hermes-agent/issues/37109)** & **[#37108](https://github.com/NousResearch/hermes-agent/issues/37108)** — *Kanban dashboard improvements* (💬3 each)
   - **Underlying need:** Operational visibility for multi-agent setups. Users want to see which workers are alive and which tasks are in scheduled/review states.

### Analysis

The dominant theme is **reliability of remote access and multi-provider fallback**. Users are running Hermes in production-like setups (Docker, remote servers, VPNs, multiple messaging platforms) and hitting edge cases in provider failover, gateway reconnection, and dashboard accessibility. The vision fallback chain in particular has **four related open issues** (#25822, #35876, #30704, #24039) that likely share root causes and should be addressed as a unit.

---

## 5. Bugs & Stability

### Critical / P1

| Issue | Severity | Description | Fix PR? |
|---|---|---|---|
| [#38471](https://github.com/NousResearch/hermes-agent/issues/38471) | **P1** | Desktop skips onboarding, picks up invalid OpenAI API key, no way to configure OAI/Codex — **blocks new users entirely** | None yet |

### High / P2

| Issue | Severity | Description | Fix PR? |
|---|---|---|---|
| [#38575](https://github.com/NousResearch/hermes-agent/issues/38575) | **P2** | Pinned `HERMES_DASHBOARD_SESSION_TOKEN` in `.env` causes Desktop LOCAL mode SIGTERM boot loop | [#38586](https://github.com/NousResearch/hermes-agent/pull/38586) (open) |
| [#38156](https://github.com/NousResearch/hermes-agent/issues/38156) | **P2** | TUI passes host launch cwd into Docker terminal sessions on Windows | None yet |
| [#38488](https://github.com/NousResearch/hermes-agent/issues/38488) | **P2** | MCP server permanently dies after transient outage; never reconnects | None yet |
| [#38580](https://github.com/NousResearch/hermes-agent/issues/38580) | **P2** | `requests==2.33.0` aarch64 wheel missing `_types.py` — crashes on NVIDIA Jetson (ARM) | None yet |
| [#25822](https://github.com/NousResearch/hermes-agent/issues/25822) | **P2** | Gemini 503 does not trigger vision provider fallback | None yet |
| [#35876](https://github.com/NousResearch/hermes-agent/issues/35876) | **P2** | Vision fallback chain silently fails on Gemini 429 (kwargs regression) | None yet |
| [#32766](https://github.com/NousResearch/hermes-agent/issues/32766) | **P2** | `computer_use` tool breaks auxiliary vision routing | None yet |

### Medium / P3

| Issue | Severity | Description | Fix PR? |
|---|---|---|---|
| [#38581](https://github.com/NousResearch/hermes-agent/issues/38581) | **P3** | TUI approval prompt truncates multi-line `execute_code` payloads — **safety concern** | None yet |
| [#38582](https://github.com/NousResearch/hermes-agent/issues/38582) | **P3** | TUI "full text above" message is ambiguous for hidden approval lines | None yet |
| [#38270](https://github.com/NousResearch/hermes-agent/issues/38270) | **P3** | Desktop doesn't show live Telegram sessions until restart | None yet |
| [#24357](https://github.com/NousResearch/hermes-agent/issues/24357) | **P3** | QQBot gateway heartbeat failure after reconnect | None yet |

### Notable Pattern: TUI Approval Safety

Three issues filed today (#38581, #38582, #38583) by the same author highlight that the **TUI approval flow has diverged from the CLI** in safety-critical ways: truncated payloads, ambiguous "full text above" references, and no full-command review affordance. For `execute_code` approvals that can spawn subprocesses, this is a **security-adjacent UX gap** that warrants prompt attention.

---

## 6. Feature Requests & Roadmap Signals

### Likely Candidates for Next Release

| Issue | Signal Strength | Rationale |
|---|---|---|
| [#10567](https://github.com/NousResearch/hermes-agent/issues/10567) — Dashboard `--host`/CORS config | **High** (👍10, 💬6) | Broad demand for remote access; straightforward config change |
| [#38588](https://github.com/NousResearch/hermes-agent/pull/38588) — Claude subprocess runtime bridge | **High** (PR open) | Mirrors existing `/codex-runtime` pattern; low risk |
| [#38569](https://github.com/NousResearch/hermes-agent/pull/38569) — 1Password secrets backend | **Medium** (PR open) | Follows existing secret-source pattern; enterprise demand |
| [#38552](https://github.com/NousResearch/hermes-agent/issues/38552) — Automated Workspace Memory | **Medium** | Complementary to existing memory work (#33856); addresses token waste |
| [#38280](https://github.com/NousResearch/hermes-agent/issues/38280) — Agent Economic Layer | **Speculative** | Ambitious proposal (wallet, service registration, reputation); likely longer-term RFC |

### Architectural Signals

- **On-demand tool/MCP discovery** ([#34038](https://github.com/NousResearch/hermes-agent/issues/34038)): A well-argued RFC proposing to decouple tool schema registration from process lifecycle, reducing startup token cost (~12K tokens for 26 tools) and MCP subprocess overhead. This aligns with the project's scale trajectory.
- **Context Preflight** ([#36053](https://github.com/NousResearch/hermes-agent/issues/36053)): RFC for forcing reflection before action to counter Hermes' structural bias toward action. Interesting but early-stage.

---

## 7. User Feedback Summary

### Pain Points

1. **Desktop onboarding is broken for new users** ([#38471](https://github.com/NousResearch/hermes-agent/issues/38471)): The app skips onboarding, surfaces invalid API keys, and provides no path to configure them. This is a **first-run experience failure** that directly impacts adoption.

2. **Vision fallback is unreliable**: Multiple users report that the auxiliary vision fallback chain fails silently across different error codes (429, 503) and providers (Gemini). The system maintains **two parallel fallback systems that don't communicate** ([#24039](https://github.com/NousResearch/hermes-agent/issues/24039)), creating a fragmented reliability landscape.

3. **TUI approval safety regression**: Users are approving `execute_code` payloads they cannot fully review, with no way to see truncated content. This is a **trust and safety issue**.

4. **Remote access is blocked**: The dashboard's hardcoded `127.0.0.1` binding and CORS regex prevent legitimate remote access patterns (Tailscale, VPN, reverse proxy).

5. **Platform-specific crashes**: NVIDIA Jetson (ARM) users face crashes due to a missing `requests` wheel file ([#38580](https://github.com/NousResearch/hermes-agent/issues/38580)), and macOS launchd users face gateway restart failures ([#38567](https://github.com/NousResearch/hermes-agent/issues/38567)).

### Satisfaction Indicators

- Active community contributions: 50 PRs updated today with authors across many geographies and platforms.
- Responsive maintainer team: Multiple PRs merged same-day (#38577, #38574, #38562).
- Feature proposals are well-structured (RFCs with problem statements, proposed solutions, alternatives considered).

---

## 8. Backlog Watch

### Long-Unanswered Important Issues

| Issue | Age | Why It Matters |
|---|---|---|
| [#10567](https://github.com/NousResearch/hermes-agent/issues/10567) — Dashboard `--host`/CORS | **50 days** (Apr 15) | Highest-impact feature request (👍10); blocks remote access workflows; no maintainer response visible |
| [#24039](https://github.com/NousResearch/hermes-agent/issues/24039) — Auxiliary fallback chain design | **24 days** (May 11) | Architectural issue affecting all vision fallback; no maintainer triage |
| [#29418](https://github.com/NousResearch/hermes-agent/issues/29418) — Nous API streaming timeout | **15 days** (May 20) | Affects users on Nous' own inference API; ironic given Nous Research maintains Hermes |
| [#34038](https://github.com/NousResearch/hermes-agent/issues/34038) — On-demand tool/MCP discovery RFC | **7 days** (May 28) | Well-argued architectural RFC; no maintainer acknowledgment |
| [#24357](https://github.com/NousResearch/hermes-agent/issues/24357) — QQBot heartbeat | **23 days** (May 12) | Messaging gateway reliability; no fix or workaround provided |

### Stale PRs Needing Attention

| PR | Age | Notes |
|---|---|---|
| [#14768](https://github.com/NousResearch/hermes-agent/pull/14768) — LLM Gateway provider | **42 days** (Apr 23) | Adds llmgateway.io as built-in provider; no review activity |
| [#36627](https://github.com/NousResearch/hermes-agent/pull/36627) — Docker config migrations | **3 days** (Jun 1) | Salvage of stale PR #35508; important for Docker upgrade path |

---

*Data source: NousResearch/hermes-agent GitHub repository. Digest generated by OWL for 2026-06-04.*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-06-04

---

## 1. Today's Overview

PicoClaw remains in a highly active development phase on the road to v0.2.9. The past 24 hours saw **10 pull requests** touched (7 open, 3 merged/closed) alongside a new **nightly release** (`v0.2.9-nightly.20260603`), indicating the maintainers are on a rapid cadence of bug fixes, dependency updates, and patches for the upcoming stable release. Three issues were reactivated by community interaction, all stale-labeled, suggesting the issue queue is seeing cleanup activity but response latency on bug reports remains a pain point. The project health is **strong and shipping** — most open PRs are small surgical fixes targeting regressions introduced across v0.2.5–v0.2.9, which is typical of a project tightening up before a stable cut.

---

## 2. Releases

| Tag | Date | Stability | Notes |
|---|---|---|---|
| [**nightly** `v0.2.9-nightly.20260603.a502aa7f`](https://github.com/sipeed/picoclaw/compare/v0.2.9...main) | 2026-06-03 | ⚠️ Unstable | Automated nightly build against `main`. Use with caution. Full changelog spans all changes since v0.2.9. |

The nightly capture includes the merged fixes listed in Section 3 (Go runtime bump, config/security merge fix, session alias fix, exec tool error handling, skill doc addition). No new **stable** release tag appeared today. All eyes should be on whether these accumulated fixes coalesce into a **v0.2.10** or **v0.3.0** stable release.

---

## 3. Project Progress (Merged / Closed PRs)

| # | PR | Status | What Changed | Significance |
|---|---|---|---|---|
| [#2997](https://github.com/sipeed/picoclaw/pull/2997) | **Bump Go 1.25.10 → 1.25.11** | ✅ Closed/Merged | Addresses **GO-2026-5039** (header injection in `net/textproto` error messages) | Security patch — closes a CVE in Go stdlib |
| [#2994](https://github.com/sipeed/picoclaw/pull/2994) | **Add `picoclaw-agent` SKILL.md** | ✅ Closed/Merged | New workspace skill document covering CLI usage, provider configuration, provider tooling, and agent operational patterns | Improves onboarding and AI-agent-assisted workflows |
| [#2899](https://github.com/sipeed/picoclaw/pull/2899) | **Configurable TLS verification for MQTT channel** | ✅ Closed/Merged | Replaces hardcoded `InsecureSkipVerify: true` in MQTT with a configurable `TLSSkipVerify` field (default `false`) | **Security hardening** — MQTT connections are no longer MITM-vulnerable by default |

Forward-looking open PRs to watch: **#2957** (fix `tool_calls` dropped during streaming — directly resolves bug #2958), **#2992** (session history promotion regression in v0.2.9), and **#2996** (silently swallowed `json.Marshal` errors in exec tool).

---

## 4. Community Hot Topics

### Streaming & LLM Backend Integration — [#2404](https://github.com/sipeed/picocaw/issues/2404)
- **11 comments, 1 👍** — Highest-engagement issue on file
- **Domain** | `provider`, `config`
- **Core ask**: Add `"streaming": true` to PicoClaw config to support `stream=True`-style requests to LLM backends (mirroring the Python OpenAI client API).
- **Analysis**: This has been open since April 7 (nearly 2 months) and is still active. The sustained interest (comments as recently as this week) signals that **streaming-first LLM workflows are not just a nice-to-have but an expected default** for power users integrating PicoClaw with local or remote inference servers. The lack of a maintainer-declined or PR-linked status suggests it's on the roadmap but not yet prioritized.

### Channel Context Headers for MCP — [#2696](https://github.com/sipeed/picoclaw/pull/2696)
- **Domain** | `mcp`, `channel`, `tool`, `enhancement`
- **Core ask**: Allow channels (e.g., Telegram, WebSocket) to pass per-request HTTP headers (like auth tokens) through to MCP server transports via an `mcp:` prefix in `InboundContext.Raw`.
- **Analysis**: Sophisticated infrastructure ask from contributor `loafoe` (same author as the `tool_calls` and TLS fixes). This is a **power-user / enterprise-grade feature** that would make PicoClaw viable for auth-gated MCP tool servers. Likely post-v0.2.9-v0.3.x territory.

### Security Config Merge Bug — [#2956](https://github.com/sipeed/picoclaw/pull/2956)
- **What's at stake**: Channels explicitly set to `enabled: true` in `config.json` were being silently disabled when credentials were added to `.security.yml` because the merge logic didn't preserve the `enabled` flag.
- **Impact**: This is a **silent misconfiguration** that would cause channels (e.g., Telegram bots) to stop working after a routine security setup change. High severity for affected users but narrow blast radius.

---

## 5. Bugs & Stability

| Severity | # | Bug description | Has Fix PR? | Notes |
|---|---|---|---|---|
| 🔴 **High** | [#2992](https://github.com/sipeed/picoclaw/issues/2972) | Session history pollution after v0.2.9 upgrade — new Web UI sessions inherit old messages due to `PromoteAliasHistory` copying migrated `main` session content | ✅ Open PR [#2992](https://github.com/sipeed/picoclaw/pull/2992) | Direct v0.2.9 regression; affects every upgrade path |
| 🔴 **High** | [#2958](https://github.com/sipeed/picoclaw/issues/2958) | `tool_calls` messages dropped during consecutive requests via pico WebSocket channel; only first request's tool_calls appear | ✅ Open PR [#2957](https://github.com/sipeed/picoclaw/pull/2957) | Introduced by auxiliary message filtering in #2892 |
| 🟠 **Medium** | [#2956](https://github.com/sipeed/picoclaw/issues) | Channel `enabled` state silently overwritten during `.security.yml` merge — channels appear configured but are dead | ✅ Open PR [#2956](https://github.com/sipeed/picoclaw/pull/2956) | Silent failure; easy to miss in production |
| 🟡 **Low** | [#2996](https://github.com/sipeed/picoclaw/issues) | `json.Marshal` errors silently ignored in `pkg/tools/shell.go` — marshaling failures produce empty strings instead of error messages | ✅ Open PR [#2996](https://github.com/sipeed/picoclaw/pull/2996) | Debuggability issue; nil bytes → empty LLM responses |
| 🟡 **Low** | [#2955](https://github.com/sipeed/picoclaw/issues) | Singleton PID check doesn't verify process identity — startup fails when PID file references a reused PID (e.g., reassigned to `systemd-resolved`) | ✅ Open PR [#2955](https://github.com/sipeed/picoclaw/pull/2955) | Edge case on container/VM restarts; cosmetic startup error |
| ⚪ **Informational** | [#2954](https://github.com/sipeed/picoclaw/issues/2954) | 32-bit Android (Termux) not supported | ❌ No PR | Platform compatibility limitation; stale, low engagement |

**Notable**: Both high-severity bugs (#2972 session regression, #2958 tool_calls drop) already have open fix PRs, which is healthy. The session regression is the most urgent since it affects *all* v0.2.9 upgrades universally.

---

## 6. Feature Requests & Roadmap Signals

| Feature | Source | Likelihood in Next Release | Evidence |
|---|---|---|---|
| **Streaming HTTP (stream=True config)** | [#2404](https://github.com/sipeed/picoclaw/issues/2404) | 🟡 Medium | 11 comments over 2 months; no maintainer triage label; likely post-v0.2.9 (possibly v0.3.0) |
| **Per-request dynamic headers for MCP** | [#2696](https://github.com/sipeed/picoclaw/pull/2696) | 🟡 Medium | Power-user feature; contributor already has authored multiple accepted PRs — credibility is high, but scope is complex |
| **32-bit Android support** | [#2954](https://github.com/sipeed/picoclaw/issues/2954) | 🔴 Low | Stale, 0 👍, no maintainer response; niche platform, unlikely priority |
| **v0.2.5–v0.2.9 release highlights in README** | [#2981](https://github.com/sipeed/picoclaw/pull/2995) | ✅ Done | PR #2995 is open and targeted at closing this documentation gap |

**Prediction for next stable release (v0.2.10 or v0.3.x)**: Expect the session regression fix (#2992), tool_calls streaming fix (#2957), exec tool error handling (#2996), and the security merge fix (#2956) to land as patch items. Streaming config (#2404) is the whale — it's the most-demanded feature but architecturally significant, likely scoped for v0.3.0+.

---

## 7. User Feedback Summary

| Theme | Representative | Sentiment | What Users Are Saying |
|---|---|---|---|
| **v0.2.9 upgrade regressions** | #2972 / #2992 | 😠 Frustrated | Users upgrading from v0.2.8 are getting session data pollution — new sessions show old messages. This is a trust-breaker for upgrades. |
| **Streaming & LLM integration** | #2404 | 😊 Engaged | Users want PicoClaw to behave like the standard OpenAI Python SDK with `stream=True`. This is the most-commented feature request, indicating it's a workflow blocker for LLM-heavy users. |
| **Silent misconfigurations** | #2956, #2996 | 😤 Irritated | Users are frustrated when things "silently fail" — channels not working after security setup, or exec tool returning empty strings. Expectation: **fail loud, fail clear**. |
| **Platform coverage** | #2954 | 😞 Neglected | Android Termux users feel left behind with no 32-bit support; no maintainer engagement signals this won't be addressed soon. |
| **Tool calls reliability** | #2958 | 😠 Blocked | Power users chaining multi-tool workflows via WebSocket are getting incomplete results. This blocks real agentic workflows. |

**Overall satisfaction trajectory**: Positive among users on stable v0.2.x who haven't hit these edge cases, but **the v0.2.9 upgrade has introduced visible regressions** that are generating negative sentiment among upgraders. The maintainers' rapid PR throughput (10 PRs in 24h) is a strong positive signal, but the **time-to-merge** for open fix PRs will determine whether sentiment recovers.

---

## 8. Backlog Watch

| Item | Days Open | Risk | Why It Needs Attention |
|---|---|---|---|
| [#2404](https://github.com/sipeed/picoclaw/issues/2404) — Streaming HTTP config | **58 days** | 🟠 Engagement decay | Highest-interest issue going stale; 11 comments with no maintainer commit/label. Needs a Triage, Planned, or Won't-Fix declaration to manage expectations. |
| [#2696](https://github.com/sipeed/picoclaw/pull/2696) — MCP per-request headers PR | **37 days** | 🟠 Stale | Well-scoped enhancement from a trusted contributor; needs maintainer review or feedback on approach. |
| [#2957](https://github.com/sipeed/picoclaw/pull/2957) — Fix tool_calls drop during streaming | **7 days** | 🔴 High (pending merge) | Direct fix for a high-severity active bug; 7 days without review is too long given the PR is small and surgical. **Prioritize merge or provide blocking feedback.** |
| [#2992](https://github.com/sipeed/picoclaw/pull/2992) — Fix session history promotion regression | **1 day** | 🔴 Regression fix | Brand new; needs fast-path review since it's a v0.2.9 regression affecting all upgraders. |
| [#2954](https://github.com/sipeed/picoclaw/issues/2954) — 32-bit Android unsupported | **8 days** (stale) | 🟡 Low | Already stale-labeled; may need closure with a "won't support / accept PRs" ruling to clean up the issue tracker. |

---

*Data snapshot: 2026-06-04 | Source: [github.com/sipeed/picoclaw](https://github.com/sipeed/picoclaw)*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

**NanoClaw Project Digest — 2026-06-04**

---

### 1. Today's Overview

NanoClaw shows high contributor activity with **9 open PRs** and **1 new issue** in the last 24 hours, but no merges or releases. The project is in an active development phase focused on **bug fixes and stability improvements** across scheduling, service startup, and container tooling. All PRs remain unreviewed, suggesting a potential bottleneck in maintainer bandwidth. No new versions shipped today.

---

### 2. Releases

**None.** No new releases in the last 24 hours.

---

### 3. Project Progress

No PRs were merged or closed today. All 9 open PRs are awaiting review:

- **Scheduling reliability** — Two related fixes from `yairixStudio` (#2678, #2679) address permanent failure handling in recurring tasks: re-arming recurrence from failed state and surfacing failures to users.
- **Service startup** — `glifocat` submitted #2681 to fix boot startup failure on per-user encrypted home directories (ecryptfs/fscrypt/gocryptfs).
- **Skill/tooling** — `shrwnsan` contributed a QMD hybrid search skill (#2683) and a container-runner proxy fix (#2676).
- **Slack integration** — `IamAdamJowett` patched the 3000-char section-block limit in Slack messages (#2675).
- **Compatibility** — `ira-at-work` added v2 compatibility checks to the skill update workflow (#2682).

---

### 4. Community Hot Topics

| Item | Activity Signal | Underlying Need |
|------|----------------|-----------------|
| [#2680](https://github.com/nanocoai/nanoclaw/issues/2680) — Service doesn't start at boot with encrypted home | 👍 1, spawned fix PR #2681 | Users with per-user encrypted home directories (ecryptfs/fscrypt) need reliable auto-start; linger-based startup silently fails. |
| [#2678](https://github.com/nanocoai/nanoclaw/pull/2678) — Re-arm recurrence on permanent failure | Paired with #2679 | Recurring tasks that fail permanently currently stop silently; users need both notification and automatic retry scheduling. |
| [#2675](https://github.com/nanocoai/nanoclaw/pull/2675) — Slack 3000-char section-block limit | Standalone fix | Long messages sent via Slack are silently dropped due to `invalid_blocks`; users need transparent chunking or truncation. |

---

### 5. Bugs & Stability

| Severity | Issue / PR | Status | Fix Available |
|----------|-----------|--------|---------------|
| **Medium** | [#2680](https://github.com/nanocoai/nanoclaw/issues/2680) — Service fails to start at boot on encrypted home dirs | Open | ✅ PR [#2681](https://github.com/nanocoai/nanoclaw/pull/2681) |
| **Medium** | Recurring tasks stop after permanent failure (no re-arm, no user notification) | No issue filed | ✅ PRs [#2678](https://github.com/nanocoai/nanoclaw/pull/2678), [#2679](https://github.com/nanocoai/nanoclaw/pull/2679) |
| **Low** | Slack messages silently dropped when section blocks exceed 3000 chars | No issue filed | ✅ PR [#2675](https://github.com/nanocoai/nanoclaw/pull/2675) |
| **Low** | Pre-task script failures lack retry and diagnostics | No issue filed | ✅ PR [#2677](https://github.com/nanocoai/nanoclaw/pull/2677) |

---

### 6. Feature Requests & Roadmap Signals

- **QMD hybrid search skill** ([#2683](https://github.com/nanocoai/nanoclaw/pull/2683)) — Adds local BM25 + vector search for markdown documents. Signals growing demand for **local-first knowledge retrieval** tooling within the agent ecosystem.
- **Parent agent permission inheritance via OneCLI** ([#2605](https://github.com/nanocoai/nanoclaw/pull/2605), open since May 24) — Suggests users want **delegated permission models** for multi-agent workflows.
- **v2 skill compatibility gating** ([#2682](https://github.com/nanocoai/nanoclaw/pull/2682)) — Indicates an upcoming **v2 skill format** that will require migration tooling.

**Prediction:** The next release will likely focus on scheduling reliability fixes and the encrypted-home startup bug, with QMD skill support as a minor feature addition.

---

### 7. User Feedback Summary

- **Pain point:** Silent failures are a recurring theme — service not starting at boot, recurring tasks stopping without notice, Slack messages dropped without error. Users expect **visible diagnostics and automatic recovery**.
- **Use case signal:** Per-user encrypted home directories (ecryptfs/fscrypt) are common enough to warrant a dedicated fix, suggesting a **privacy-conscious user base**.
- **Satisfaction:** The rapid response to #2680 (fix PR submitted same day) indicates active contributor engagement, but the lack of merges suggests **maintainer review capacity** may be the bottleneck.

---

### 8. Backlog Watch

| Item | Age | Risk | Action Needed |
|------|-----|------|---------------|
| [#2605](https://github.com/nanocoai/nanoclaw/pull/2605) — Inherit parent agent permissions via OneCLI | 11 days old, no review | Medium — feature request with no maintainer response | Needs triage or status update |
| [#2680](https://github.com/nanocoai/nanoclaw/issues/2680) — Encrypted home boot failure | 1 day old | Low — fix PR already submitted | Awaiting PR #2681 review |

**Overall health:** Active contributor pipeline with a review bottleneck. No stale critical bugs. Project stability improvements are well-covered by pending PRs.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

**NullClaw Project Digest — 2026-06-04**

---

**# Overview**

NullClaw had low activity on **2026-06-04**. No new issues were opened or closed in the last 24 hours, and there have been no new releases. One open pull request was updated today, focusing on system prompt behavior for tool filtering. The project appears to be in a maintenance / polish phase — no fire drills, no community-reported bugs, and no release pressure.

**# Releases**

No new releases today. The lack of release notes or tag activity suggests the team is iterating on smaller fixes (like the one below) rather than shipping a versioned update.

**# Project Progress**

- PR **#946** by **vernonstinebaker** — *fix(agent): filter tools in system prompt text by tool_filter_groups* (https://github.com/nullclaw/nullclaw/pull/946) — introduces `filterToolsForPromptText` so the text-based system prompt only includes built-in tools and MCP tools from `always` filter groups. Dynamic-group MCP tools are omitted from the text but still delivered via native API tool-calling when turn keywords match. Remove mention of discontinued “Para…” *(summary truncated in source)*.

This is a focused architectural fix: it tightens the separation between **text-prompt tool visibility** and **API tool schemas**, which should reduce confusion for LLMs when dynamic/filtered MCP tools are available only in API payloads but not in the prompt text. If merged, downstream agents that rely on dynamic MCP integrations should have a cleaner, more deterministic system-prompt surface.

**# Community Hot Topics**

Today’s activity is minimal, so there is no high-signal “hot topic.” The only visible surface is PR #946. No issues received comments or reactions. If we extrapolate from the change itself, the underlying need is **control over what tools the model “sees” in the prompt vs. what can be invoked via API tool-calling** — a classic multi-tenancy / copilots-with-plugins pattern.

**# Bugs and Stability**

- **None reported today.** Zero new issues in the last 24h, zero closed issues. Project stability indicators are neutral: no new regressions, no crashes, no hot-fixes.

If PR #946 is accepted, it will likely **improve stability** for agents that mix built-in tools with MCP tools, as the prompt no longer leaks dynamic tool names that the model might otherwise hallucinate.

**# Feature Requests and Roadmap Signals**

- No new feature requests today.
- The filtering approach in PR #946 suggests NullClaw is **investing in richer MCP-copilot niceties** — multi-group tools, always-vs-dynamic semantics, and better prompt packing.
- Next versions may expand the `tool_filter_groups` concept (e.g. priority groups, context-dependent groups), or bring in a UI/dsl for declaring these groups.

**# User Feedback Summary**

There is no new user feedback visible today (no new issues, no updated discussions). Sentiment can’t be gauged from this one day alone. PRs like #946, however, show that **plugin/copilot use cases** are still being tuned — likely driven by real-world cases where prompt-tool leakage was misleading.

**# Backlog Watch**

With **zero** active issues, there is no obvious backlog fire today. However, PR #946 has no visible approvals or maintainer comments yet (comments field is undefined, 👍: 0). It will be worth watching whether:

1. A maintainer reviews #946 soon, indicating active stewardship.
2. Conflicting PRs around dynamic MCP tool handling surface.
3. Users file follow-up issues once the filter behavior ships.

If #946 stalls for more than a week, it would be the key item to nudge.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-06-04

---

## 1. Today's Overview

IronClaw shows exceptionally high activity today: **27 issues** touched (21 still open, 6 closed) and **50 pull requests** updated (22 open, 28 merged/closed), with a patch release **v0.29.1** shipped. The project is deep in the **Reborn** migration arc — the bulk of open issues and active PRs center on hardening the Reborn agent loop, expanding channel integrations (Slack), stabilizing triggers, and closing safety/capability-surface gaps. The ratio of closed-to-open issues (6/21) and merged-to-open PRs (28/22) indicates a team that is shipping aggressively while simultaneously discovering new edge cases. Overall health is **vigorous but strained**: velocity is high, but the issue queue is accumulating fastidious bug reports around context management, capability gating, and loop observability that suggest the Reborn refactoring surface is still stabilizing.

---

## 2. Releases

### ironclaw-v0.29.1 — 2026-06-04

| Category | Change |
|----------|--------|
| **Added** | *(web)* Plumb temperature through Responses API ([#3641](https://github.com/nearai/ironclaw/pull/3641)) |
| **Fixed** | *(engine)* Scope v1 history for channel conversations ([#4320](https://github.com/nearai/ironclaw/pull/4320)) |
| **CI/Release** | *(release)* Add WeCo |

**Assessment:** A small, targeted patch. The most consequential fix is the channel conversation history scoping — this directly affects multi-turn correctness in Slack and other channel adapters. The `temperature` plumbing through Responses API is a meaningful QoL improvement for users controlling model determinism via the web/WebUI surface. No breaking changes or migration notes.

---

## 3. Project Progress (Merged/Closed Today)

The following PRs and issues were closed/merged as of this digest window, representing concrete forward progress:

| # | Title / Summary | Significance |
|---|----------------|--------------|
| **PR [#4422](https://github.com/nearai/ironclaw/pull/4422)** | Add Slack personal binding service | Core infra for per-user Slack OAuth — enables Slack users to bind their identity to a Reborn user without shared-tenant credential leakage. |
| **PR [#4421](https://github.com/nearai/ironclaw/pull/4421)** | Bind Slack actors through Reborn user identities | Completes the actor-resolution hook so external Slack actors resolve to canonical Reborn users before conversation processing. |
| **PR [#4418](https://github.com/nearai/ironclaw/pull/4418)** | Wire Slack host-beta route into Reborn serve | **Milestone:** Slack Events API is now composed through Reborn runtime, ProductWorkflow, and host-mediated HTTP egress. Typed config boundaries added. |
| **PR [#4417](https://github.com/nearai/ironclaw/pull/4417)** | Fix WebUI live projection cursor resume | Fixes a regression where synthetic live-progress updates were advancing the durable cursor, causing projection desync. |
| **PR [#4415](https://github.com/nearai/ironclaw/pull/4415)** | PR18.7: trigger poller full-path integration test | First composition-tier integration test driving the real background trigger poller end-to-end. |
| **PR [#4412](https://github.com/nearai/ironclaw/pull/4412)** | Bind local dev runtime scope to run actor | Closes a gap where SSO-populated turn actors were ignored in local-dev capability resolution. |
| **PR [#4380](https://github.com/nearai/ironclaw/pull/4380)** | Add read-only automations WebUI API | New `GET /api/webchat/v2/automations` endpoint surfaces trigger schedule summaries in the WebUI. |
| **Issue [#4351](https://github.com/nearai/ironclaw/issues/4351)** | C4: Capability surface + safety gating — fail-closed injection scan | Subagent prompt-injection scan gap closed; capability surface resolver now fail-closed. |
| **Issue [#4310](https://github.com/nearai/ironclaw/issues/4310)** | Context-overflow recovery emits ShrinkContext but executor retries without shrinking | Fixed: retry path now applies prompt-stage compaction on `ShrinkContext`. |
| **Issue [#4309](https://github.com/nearai/ironclaw/issues/4309)** | Compaction summary write can outlive failed BeforeModel checkpoint | Fixed: watermark persistence is now checkpoint-gated. |
| **Issue [#4222](https://github.com/nearai/ironclaw/issues/4222)** | Zeroize injected HTTP credential material | Plaintext credential material in HTTP request carriers is now zeroized on drop. |
| **Issue [#4215](https://github.com/nearai/ironclaw/issues/4215)** | Consolidate duplicated PKCE math into ironclaw_common::pkce | Auth consolidation Track A — duplicated PKCE code unified. |
| **Issue [#3801](https://github.com/nearai/ironclaw/issues/3801)** | Lane 2: finish extension-v2 catalog readiness | Extension-v2 catalog/runtime/lifecycle readiness gate completed. |

**Narrative:** Today's closed items represent a **Slack integration push** (3 PRs wiring Slack into Reborn end-to-end), **trigger infrastructure maturation** (first full-path integration test), and a cluster of **Reborn safety/reliability fixes** (context overflow, compaction checkpointing, credential zeroizing, capability gating). The project is clearly in the "wire it all up and harden the seams" phase of the Reborn migration.

---

## 4. Community Hot Topics

Ranked by comment count and activity signal:

### 🔥 [#3857 — [Reborn] Lane 10: add Slack ProductAdapter MVP](https://github.com/nearai/ironclaw/issues/3857) — 6 comments
**Author:** serrrfirat | Created: 2026-05-21
The most-discussed open issue. Tracks the final Slack ProductAdapter MVP — a default-off adapter using preconfigured Slack app credentials supporting DMs and app mentions, routing all work through Reborn services. **Underlying need:** Slack is the flagship channel integration for Reborn's product workflow model. This issue is the capstone of a multi-PR effort (see merged PRs #4418, #4421, #4422 above). The 6 comments likely reflect coordination between core contributors on the final wiring.

### 🔥 [#3280 — [Reborn] Add ProductWorkflow and InboundTurnService facade](https://github.com/nearai/ironclaw/issues/3280) — 5 comments
**Author:** serrrfirat | Created: 2026-05-06
A foundational architecture issue defining the `ProductWorkflow` facade that sits between ProductAdapters and host-layer Reborn services. With 12 related issues, this is a **keystone** for the entire Reborn channel-adapter architecture. Still open after nearly a month, suggesting the design is being iterated on as implementation reveals edge cases.

### 🔥 [#4376 — Harden HTTP credential carriers with non-clone types and DTO boundary](https://github.com/nearai/ironclaw/issues/4376) — 2 comments
**Author:** henrypark133 | Created: 2026-06-02
Follow-up from PR #4372. Calls for a stronger design: non-clone credential types, DTO boundaries to prevent plaintext secret leakage across the request path. **Underlying need:** Security hardening of the credential surface — the team is moving from "make it work" to "make it safe by construction."

### 🔥 [#4425 — Reborn: builtin.http is a context bomb](https://github.com/nearai/ironclaw/issues/4425) — 1 comment
**Author:** henrypark133 | Created: 2026-06-03
A single `builtin.http` call can inject ~1.2 MB of raw HTML into the context window with no stripping or size cap. **Underlying need:** Context-budget management is a first-class concern for agent loops. This is part of a cluster of context-efficiency issues filed today (see Bugs section).

### 🔥 PR [#4414 — Harden loop capability validation](https://github.com/nearai/ironclaw/pull/4414) — OPEN, size L
**Author:** henrypark133
Fixes unresolved provider schema `$ref` shapes being silently skipped, adds bounded normalization depth. Directly addresses the class of bug where tools are advertised but not validated.

### 🔥 PR [#4413 — Fix subagent completion observer delivery](https://github.com/nearai/ironclaw/pull/4413) — OPEN, size XL
**Author:** henrypark133
Tightens subagent completion delivery to prevent double-writes and silent drops during replay/recovery. Critical for multi-agent workflows.

---

## 5. Bugs & Stability

Ranked by severity:

### 🔴 Critical — Capability/Safety Gaps

| # | Issue | Status | Fix PR |
|---|-------|--------|--------|
| **[#4424](https://github.com/nearai/ironclaw/issues/4424)** | `builtin.spawn_subagent` advertised in system prompt but absent from structured `tools:[]` array — model **cannot call it** | OPEN | None yet |
| **[#4426](https://github.com/nearai/ironclaw/issues/4426)** | Parent loop capability surface is `AllowAll` — `interactive_tools` profile_id stamped but **ignored**; lifecycle/mutation tools exposed in every chat | OPEN | None yet |
| **[#4420](https://github.com/nearai/ironclaw/issues/4420)** | `TriggerCompletionPolicy::CompleteAfterFirstFire` stored but **never consulted** — triggers re-fire forever | OPEN | None yet |

**Assessment:** These are the most operationally dangerous open bugs. #4424 means subagent spawning is broken for OpenAI-compatible models. #4426 is a safety issue — mutation tools are exposed when they shouldn't be. #4420 means trigger completion policies are silently ignored, which could cause runaway trigger loops in production.

### 🟠 High — Context & Loop Correctness

| # | Issue | Status | Fix PR |
|---|-------|--------|--------|
| **[#4425](https://github.com/nearai/ironclaw/issues/4425)** | `builtin.http` context bomb — 1.2 MB per call, no HTML strip, no size cap | OPEN | None yet |
| **[#4427](https://github.com/nearai/ironclaw/issues/4427)** | Loop exit reason invisible — `LoopFailureKind` never traced, only persisted to DB | OPEN | None yet |
| **[#4429](https://github.com/nearai/ironclaw/issues/4429)** | Prompt bundle rebuilt from scratch per model call — identity/skill caches cold every time | OPEN | None yet |
| **[#4428](https://github.com/nearai/ironclaw/issues/4428)** | `builtin.skill_list` unbounded — 14,612 bytes for 31 skills, no pagination or truncation | OPEN | None yet |
| **[#4400](https://github.com/nearai/ironclaw/issues/4400)** | Stale PID file prevents IronClaw restart in production | OPEN | None yet |

**Assessment:** The context-efficiency cluster (#4425, #4428, #4429) represents a systemic issue: the Reborn agent loop has no context-budget management. These will compound as more capabilities are added. #4427 is an observability gap that makes debugging production issues extremely difficult. #4400 is a production reliability issue — stale PID files causing restart failures is a classic ops pain point.

### 🟡 Medium — UX & Correctness

| # | Issue | Status | Fix PR |
|---|-------|--------|--------|
| **[#4377](https://github.com/nearai/ironclaw/issues/4424)** | `/model` returns display names that cannot be used to switch models with NEAR AI provider | OPEN | None yet |
| **[#4416](https://github.com/nearai/ironclaw/issues/4416)** | Trigger poller test-support handles need consolidation into `TriggerPollerTestHandles` struct | OPEN | None yet |
| **[#4432](https://github.com/nearai/ironclaw/issues/4432)** | Python E2E cron trigger scenario blocked on Reborn production profile wiring | OPEN | None yet |

---

## 6. Feature Requests & Roadmap Signals

| # | Request | Signal Strength | Likely Target |
|---|---------|----------------|---------------|
| **[#4407](https://github.com/nearai/ironclaw/issues/4407)** | Design model-visible capability selection for provider tool-count limits | **High** — directly observed with GPT-5.4-nano | v0.30.0 |
| **[#3283](https://github.com/nearai/ironclaw/issues/3283)** | Migrate OpenAI-compatible chat and Responses APIs onto Reborn | **High** — parent issue #3031, 10 related issues | v0.30.0–v0.31.0 |
| **[#4382](https://github.com/nearai/ironclaw/issues/4382)** | Product auth: default OAuth account per provider (set once, gate never re-fires) | **Medium-High** — UX friction for OAuth users | v0.30.0 |
| **[#4381](https://github.com/nearai/ironclaw/issues/4381)** | Canonical Reborn identity resolver for OAuth and external actor binding | **Medium** — architectural follow-up to #4294 | v0.30.0 |
| **[#4431](https://github.com/nearai/ironclaw/issues/4431)** | Regression test: visible_capabilities ⇔ tool_definitions parity | **Medium** — directly motivated by #4424 bug | v0.29.x patch |
| **[#3951](https://github.com/nearai/ironclaw/pull/3951)** | Third-party extension hook activation via hook-only projection | **Medium** — PR open, stacks on #3938 | v0.30.0 |

**Prediction for v0.30.0:** The next minor release will likely focus on (1) **capability surface curation** — selecting which tools to advertise to the model based on provider limits and context budget, (2) **context management** — HTML stripping, skill_list pagination, prompt bundle caching, and (3) **OpenAI API migration** onto Reborn. The Slack ProductAdapter MVP (#3857) is close to completion and may land in the same release.

---

## 7. User Feedback Summary

**Production users** (represented by @sunglow666's reports) are hitting concrete pain points:
- **Stale PID files** (#4400) causing production restart failures — this is a reliability issue that erodes trust in the platform.
- **Model name mismatch** (#4437) — `/model` returns human-readable names that can't be used to switch models, creating a frustrating UX loop.

**Core contributors** (henrypark133, serrrfirat) are filing detailed, architecture-level bug reports that reveal the **Reborn refactoring is entering a hardening phase**. The pattern of issues filed today — context bombs, invisible loop exits, unbounded tool surfaces, broken capability gating — suggests the team is stress-testing the new architecture and finding the expected seams.

**Satisfaction signals:** The velocity of fixes (6 issues closed, 28 PRs merged/closed in 24h) indicates a responsive team. The fact that issues like #4424 (spawn_subagent broken) and #4426 (AllowAll capability surface) were filed and acknowledged same-day suggests good internal QA.

**Dissatisfaction signals:** The sheer volume of new issues (21 still open) and the severity of some (safety gating broken, triggers firing forever) suggest the Reborn migration may be shipping faster than it can be fully stabilized. The nightly E2E failure (#4108) persisting since May 27 is a yellow flag.

---

## 8. Backlog Watch

Items that have been open without resolution and may need maintainer attention:

| # | Item | Age | Risk if Unaddressed |
|---|------|-----|---------------------|
| **[#4108](https://github.com/nearai/ironclaw/issues/4108)** | Nightly E2E failed | **8 days** (since 2026-05-27) | CI/CD reliability — if nightly E2E is broken, regressions may be slipping through undetected. |
| **[#3280](https://github.com/nearai/ironclaw/issues/3280)** | Add ProductWorkflow and InboundTurnService facade | **29 days** (since 2026-05-06) | Architectural keystone — 12 related issues depend on this. Prolonged openness suggests design uncertainty. |
| **[#3283](https://github.com/nearai/ironclaw/issues/3283)** | Migrate OpenAI-compatible APIs onto Reborn | **29 days** (since 2026-05-06) | Core migration work — blocking external API compatibility. |
| **[#3857](https://github.com/nearai/ironclaw/issues/3857)** | Slack ProductAdapter MVP | **14 days** (since 2026-05-21) | Close to completion (3 related PRs merged today), but the issue itself remains open. |
| **[#4389](https://github.com/nearai/ironclaw/issues/4389)** | Split behavior-changing auth and MCP review items from PR #4354 | **1 day** | Tracks risky deferred changes — if forgotten, auth/MCP behavior regressions could surface later. |

**Recommendation:** The nightly E2E failure (#4108) is the most urgent backlog item — 8 days of broken CI means the team may be merging against a red baseline. The ProductWorkflow facade (#3280) is the most architecturally significant long-open item and may benefit from a focused design review or RFC to unblock the 12 dependent issues.

---

*Data source: github.com/nearai/ironclaw — snapshot 2026-06-04. Generated by OWL.*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-06-04

---

## 1. Today's Overview

LobsterAI is in a period of intense, high-velocity development. In the last 24 hours the project saw **16 pull requests updated** (14 merged, 2 still open) and **1 new release** (2026.6.3), indicating a very active maintainer team shipping features and fixes at a rapid cadence. The dominant themes are the **Cowork collaboration module** (conversation forking, selected-text context, channel session sync), **MCP tooling improvements** (URL validation, managed installs, session timeout fixes), and **HTML share UX refinements**. Only 1 issue was updated in the window, suggesting the team is more focused on shipping than triaging incoming community reports right now. Overall project health is strong — high merge rate, low stale-issue accumulation, and consistent release cadence.

---

## 2. Releases

### LobsterAI 2026.6.3 (released 2026-06-03)

**Key changes:**

- **MCP — Optimized npx launch resolution & first-response timing logs** — Improves startup reliability and adds observability for MCP server initialization. ([#2091](https://github.com/netease-youdao/LobsterAI/pull/2091))
- **HTML Share — Optimized sharing flow** — Refined share dialog with redesigned states for created/active/stopped shares, removed auto-copy and global toasts, added `html_share` key attribution. ([#2092](https://github.com/netease-youdao/LobsterAI/pull/2092), [#2099](https://github.com/netease-youdao/LobsterAI/pull/2099))
- **Cowork — Conversation forking** — Users can now fork a local conversation from any assistant message, preserving eligible compacted context for long sessions. ([#2085](https://github.com/netease-youdao/LobsterAI/pull/2098))
- **Cowork — Selected text snippets in chat** — Select text from assistant messages or artifact previews and add it as context to the current draft. ([#2098](https://github.com/netease-youdao/LobsterAI/pull/2098), [#2101](https://github.com/netease-youdao/LobsterAI/pull/2101))
- **Cowork — Channel session sync & cleanup** — Better sync for recreated channel sessions, proper transcript deletion on session removal. ([#2108](https://github.com/netease-youdao/LobsterAI/pull/2108))
- **MCP — Remote server URL validation** — Rejects invalid remote URLs during IPC handling and config sync, with localized error messages. ([#2103](https://github.com/netease-youdao/LobsterAI/pull/2103))
- **MCP — Session timeout prevention during gateway config reload** — Fixes a regression where MCP sessions could be dropped. ([#2104](https://github.com/netease-youdao/LobsterAI/pull/2104))
- **MCP — Managed installs are now Node-aware** — Injects resolved Node toolchain path into managed npm install commands. ([#2100](https://github.com/netease-youdao/LobsterAI/pull/2100))
- **Config — Preserve user-configured context windows; add mimo v2.5 models** — Prevents config resets from overwriting custom context window settings. ([#2102](https://github.com/netease-youdao/LobsterAI/pull/2102))
- **UI — Keyboard shortcuts overhaul** — Expanded actions and improved UX for shortcut handling. ([#2109](https://github.com/netease-youdao/LobsterAI/pull/2109))
- **UI — Kits and skills popover fixes** — Fixed viewport overflow, submenu height, and close behavior. ([#2106](https://github.com/netease-youdao/LobsterAI/pull/2106))

**Breaking changes:** None explicitly called out in this release.

**Migration notes:** No migration steps required. Users on custom context window settings should verify their configs are preserved after upgrading (previously at risk of being reset).

---

## 3. Project Progress

The following features and fixes were merged or closed in the last 24 hours:

| # | PR | Area | Summary |
|---|-----|------|---------|
| 1 | [#2109](https://github.com/netease-youdao/LobsterAI/pull/2109) | Renderer, Cowork | Keyboard shortcuts overhaul — expanded actions, improved UX |
| 2 | [#2108](https://github.com/netease-youdao/LobsterAI/pull/2108) | Renderer, Main, Cowork | Channel session sync improvements and cleanup |
| 3 | [#2107](https://github.com/netease-youdao/LobsterAI/pull/2107) | Multi-area | Release 2026.6.2 (changelog PR) |
| 4 | [#2106](https://github.com/netease-youdao/LobsterAI/pull/2106) | Renderer, Cowork | Kits/skills popover interaction fixes |
| 5 | [#2105](https://github.com/netease-youdao/LobsterAI/pull/2105) | Renderer, Artifacts | HTML share — copy link and code together |
| 6 | [#2104](https://github.com/netease-youdao/LobsterAI/pull/2104) | Docs, Main, OpenClaw | MCP session timeout prevention during config reload |
| 7 | [#2103](https://github.com/netease-youdao/LobsterAI/pull/2103) | Renderer, Main, OpenClaw | MCP remote server URL validation |
| 8 | [#2102](https://github.com/netease-youdao/LobsterAI/pull/2102) | Renderer | Preserve user-configured context windows; add mimo v2.5 |
| 9 | [#2101](https://github.com/netease-youdao/LobsterAI/pull/2101) | Renderer, Docs, Main, Cowork, Artifacts | Artifact preview selected text → chat context |
| 10 | [#2100](https://github.com/netease-youdao/LobsterAI/pull/2100) | Main | MCP managed installs Node-aware fix |
| 11 | [#2099](https://github.com/netease-youdao/LobsterAI/pull/2099) | Renderer, Main, Artifacts | HTML share dialog redesign and access controls |
| 12 | [#2098](https://github.com/netease-youdao/LobsterAI/pull/2098) | Renderer, Docs, Main, Cowork | Selected text snippets in chat context |
| 13 | [#2097](https://github.com/netease-youdao/LobsterAI/pull/2097) | Renderer, Cowork | Search modal title bar close button |
| 14 | [#2085](https://github.com/netease-youdao/LobsterAI/pull/2085) | Renderer, Docs, Main, Cowork | Local conversation forking |

**Key takeaway:** The Cowork module is clearly the primary investment area, with 6 of 14 merged PRs touching cowork features (forking, text selection, channel sync, shortcuts, popovers). MCP reliability is the second major focus, with 4 PRs addressing session management, URL validation, and Node toolchain handling.

---

## 4. Community Hot Topics

**Issue [#2081](https://github.com/netease-youdao/LobsterAI/issues/2081) — "订阅" (Subscription)**
- **Author:** zjk648491625 | **Status:** Open | **Comments:** 2 | **Created:** 2026-06-01
- **Summary:** A user reports that their purchased 5,500积分 (credits) were reset to zero at month-end without being used. The user is frustrated and questions the fairness of the credit expiration policy.
- **Underlying need:** This signals a potential **billing/credit policy transparency issue**. Users expect purchased credits to either not expire or to have clear, advance notification of expiration. The lack of a response from maintainers (as of this digest) is notable — this is a trust-sensitive issue that warrants a prompt official response.

**No other issues or PRs had significant comment or reaction activity in the last 24 hours.**

---

## 5. Bugs & Stability

| Severity | Issue/PR | Description | Fix Status |
|----------|----------|-------------|------------|
| 🔴 High | [#2081](https://github.com/netease-youdao/LobsterAI/issues/2081) | User credits (5,500积分) reset to zero without usage — potential billing system bug or policy gap | ⚠️ No fix PR; no maintainer response yet |
| 🟡 Medium | [#2104](https://github.com/netease-youdao/LobsterAI/pull/2104) | MCP session timeout during gateway config reload | ✅ Fixed and merged |
| 🟡 Medium | [#2100](https://github.com/netease-youdao/LobsterAI/pull/2100) | Managed MCP installs dropping servers due to Node toolchain resolution failure | ✅ Fixed and merged |
| 🟢 Low | [#2106](https://github.com/netease-youdao/LobsterAI/pull/2106) | Skills popover submenu height and viewport overflow issues | ✅ Fixed and merged |
| 🟢 Low | [#2097](https://github.com/netease-youdao/LobsterAI/pull/2097) | Missing close button on Cowork search modal title bar | ✅ Fixed and merged |

**Assessment:** The team is responsive to technical bugs — all code-level issues identified in this window have been promptly fixed and merged. The credit expiration issue ([#2081](https://github.com/netease-youdao/LobsterAI/issues/2081)) stands out as the only unresolved problem and carries reputational risk.

---

## 6. Feature Requests & Roadmap Signals

Based on merged work and open PRs, the following signals point to near-term roadmap direction:

1. **Cowork as a first-class collaboration surface** — The volume of cowork PRs (forking, text snippets, channel sync, shortcuts) strongly suggests LobsterAI is investing heavily in collaborative AI workflows. Expect continued expansion of cowork features, potentially including real-time multi-user editing or shared artifact workspaces.

2. **MCP ecosystem hardening** — URL validation, Node-aware installs, and session timeout fixes indicate the team is maturing MCP from experimental to production-ready. Future work may include MCP server health dashboards, auto-retry logic, or marketplace-style server discovery.

3. **HTML Share going mainstream** — The redesign of share dialogs and removal of test-mode gates ([#2099](https://github.com/netease-youdao/LobsterAI/pull/2099)) suggests HTML sharing is graduating to a fully supported feature. Expect access control granularity and analytics in future releases.

4. **Model support expansion** — The addition of mimo v2.5 models ([#2102](https://github.com/netease-youdao/LobsterAI/pull/2102)) signals ongoing model provider diversification.

---

## 7. User Feedback Summary

**Pain points identified:**

- **Credit/subscription management transparency** — The most acute user frustration. A paying user lost 5,500 credits to an expiration policy they were apparently unaware of. This is a **trust and communication failure**, not just a technical issue. Users need: (a) clear in-app credit expiration warnings, (b) a visible credit balance and expiration date, and (c) ideally, a grace period or rollover option.

**Satisfaction signals:**

- The rapid pace of feature delivery (14 merged PRs in ~24h) and the breadth of UX polish (shortcuts, popovers, share dialogs, search modals) suggest the team is attentive to quality-of-life improvements. Users benefiting from Cowork and HTML Share features are likely seeing meaningful workflow improvements.

**Use cases observed:**

- Users are leveraging LobsterAI for **collaborative work** (Cowork forking, shared conversations), **artifact creation and sharing** (HTML share, artifact preview text selection), and **MCP-powered tool integration** (multiple MCP reliability fixes suggest active usage).

---

## 8. Backlog Watch

| Item | Age | Status | Risk | Recommendation |
|------|-----|--------|------|----------------|
| [#2081](https://github.com/netease-youdao/LobsterAI/issues/2081) — Credit expiration complaint | 3 days | Open, no maintainer response | 🔴 **High** — Billing/trust issue | Needs immediate official response; consider policy review |
| [#1277](https://github.com/netease-youdao/LobsterAI/pull/1277) — Dependabot: Electron 40→42 upgrade | 62 days | Open, stale | 🟡 **Medium** — Security/stability risk from outdated Electron | Needs manual review and merge or close; Electron 40 is significantly behind |
| [#1463](https://github.com/netease-youdao/LobsterAI/pull/1463) — Fix long modal titles (PR for issue #1435) | 61 days | Open, marked stale | 🟢 **Low** — Cosmetic UI fix | Low priority but easy win; consider merging or closing |

**Key concern:** The Electron dependency upgrade ([#1277](https://github.com/netease-youdao/LobsterAI/pull/1277)) has been open for over two months. Running Electron 40.x when 42.x is available carries potential security vulnerabilities and compatibility issues. This should be prioritized or explicitly deferred with a documented reason.

---

*Data source: LobsterAI GitHub repository (github.com/netease-youdao/LobsterAI). Digest generated for 2026-06-04. All links reference the upstream repository.*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

**Moltis Project Digest – 2026-06-04**

---

### 1. **Today's Overview**  
Moltis remains highly active with strong community engagement: 14 issues updated (9 closed, 5 open) and 4 new pull requests opened in the last 24 hours. Two new releases were published (`20260603.01` and `20260602.05`), indicating rapid iteration. The project is focused on stabilizing core functionality—particularly around Docker/Podman compatibility, Telegram streaming behavior, and UI polish—while also addressing security concerns like environment variable leakage. Maintainers are responsive, closing multiple bugs within a day of reporting.

---

### 2. **Releases**  
Two new versions released:  
- **v20260603.01** (2026-06-03)  
- **v20260602.05** (2026-06-02)  

*Note:* Release notes or changelogs were not provided in the data. Given the volume of closed issues and open PRs, these likely include fixes for Docker tooling, Telegram streaming, and UI bugs (e.g., syntax highlighting, model picker). Users should monitor the [releases page](https://github.com/moltis-org/moltis/releases) for detailed migration guidance.

---

### 3. **Project Progress**  
No PRs were merged today, but **9 issues were closed**, all authored primarily by **IlyaBizyaev**, suggesting a focused bug-fix sprint. Key resolved areas include:  
- Vault password detection logic (#1046)  
- Per-skill enable/disable granularity (#1083)  
- Session title generation (#1053)  
- Security: Preventing stdio MCP server env vars from leaking to LLMs (#1054)  
- UI: Code block syntax highlighting in light mode (#1045) and model version display (#1052)  
- Docker: `send_image`/`send_document` failures (#1037)  

These closures reflect strong progress on stability, security, and UX polish.

---

### 4. **Community Hot Topics**  
- **[Issue #1028](https://github.com/moltis-org/moltis/issues/1028)**: Request for agents to access Moltis docs out-of-the-box (3 comments). Highlights need for better onboarding and self-service documentation within agent workflows.  
- **[Issue #1097](https://github.com/moltis-org/moltis/issues/1097)**: Telegram edit-in-place streaming corrupts final replies (1 comment). Directly addressed by **[PR #1099](https://github.com/moltis-org/moltis/pull/1099)**, which separates progress updates from final answers—a critical UX fix for Telegram users.  
- **[Issue #1092](https://github.com/moltis-org/moltis/issues/1092)**: Config option to disable activity log messages. Already has a matching **[PR #1093](https://github.com/moltis-org/moltis/pull/1093)** adding granular visibility controls (`all`, `errors_only`, `off`).  

*Underlying need*: Users demand cleaner, more configurable channel output—especially on mobile-first platforms like Telegram—where verbose tool logs disrupt conversation flow.

---

### 5. **Bugs & Stability**  
**Newly reported (all OPEN):**  
- **[#1096](https://github.com/moltis-org/moltis/issues/1096)**: `Read`/`Write`/`Edit` tools fail in Docker — **high severity**, impacts core agent functionality in containerized environments.  
- **[#1095](https://github.com/moltis-org/moltis/issues/1095)**: Podman not working — **high severity**, limits alternative container runtime support.  
- **[#1094](https://github.com/moltis-org/moltis/issues/1094)**: Model de-preferencing broken — **medium severity**, affects model routing logic.  

*No fix PRs yet for #1094–#1096*. However, recent Docker-related fixes (#1037) suggest the team is actively addressing container issues.

---

### 6. **Feature Requests & Roadmap Signals**  
- **[#1036](https://github.com/moltis-org/moltis/issues/1036)**: Support arbitrary file attachments in web UI — likely candidate for next release given UI focus.  
- **[#1028](https://github.com/moltis-org/moltis/issues/1028)**: Built-in Moltis docs access for agents — aligns with self-improving agent trends.  
- **[#1092](https://github.com/moltis-org/moltis/issues/1092)**: Activity log visibility toggle — already has a PR (#1093), so likely imminent.  

*Prediction*: Next release will likely include activity log controls, improved file attachment handling, and further Docker/Podman hardening.

---

### 7. **User Feedback Summary**  
**Pain points**:  
- **Docker/Podman instability** dominates recent reports (#1037, #1096, #1095), indicating container deployment is a key use case but still fragile.  
- **Telegram UX** is a recurring theme: streaming artifacts (#1097) and verbose logs (#1092) degrade mobile experience.  
- **Security awareness** is high—users proactively report env var leaks (#1054).  

**Satisfaction signals**: Rapid closure of 9 bugs in one day demonstrates responsive maintenance, likely boosting user confidence.

---

### 8. **Backlog Watch**  
- **[PR #1089](https://github.com/moltis-org/moltis/pull/1089)**: “Cap persisted tool results before rehydration” — opened 2026-06-01, still open. Addresses memory/context bloat in long sessions; important for scalability but may require careful review.  
- No long-unanswered critical issues visible in today’s data, but Docker/Podman bugs (#1095, #1096) need urgent attention given their impact on deployment flexibility.

---

*Data source: [github.com/moltis-org/moltis](https://github.com/moltis-org/moltis) as of 2026-06-04*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-06-04

**Repository:** [agentscope-ai/CoPaw](https://github.com/agentscope-ai/CoPaw) (QwenPaw)

---

## 1. Today's Overview

CoPaw (QwenPaw) saw intense activity on 2026-06-04 with **49 issues** and **50 PRs** updated in the last 24 hours — a notably high throughput. Of those, 28 issues and 29 PRs remain open, while 21 issues and 21 PRs were closed/merged, indicating a healthy close rate (~43%). No new releases were published today. The project is clearly in an active stabilization and feature-expansion phase, with significant attention being paid to context/memory management, browser tooling, plugin system reliability, and multi-channel support. The volume of bug reports around context compaction and memory corruption suggests these are critical pain points for the user base.

---

## 2. Releases

**None.** No new releases were published on or around 2026-06-04.

---

## 3. Project Progress

The following PRs were merged or closed today, representing tangible forward movement:

| PR | Author | Summary |
|---|---|---|
| [#4933](https://github.com/agentscope-ai/CoPaw/pull/4933) | jinliyl | **fix(context):** Handle non-dict `source` objects in media block processing — directly addresses compaction crashes when media blocks contain plain URL strings instead of dicts. |
| [#4935](https://github.com/agentscope-ai/CoPaw/pull/4935) | jinliyl | **chore(deps):** Update `reme-ai` to 0.3.1.10 — fixes file watcher stop-event not resetting on restart. |
| [#4942](https://github.com/agentscope-ai/CoPaw/pull/4942) | cuiyuebing | **docs(roadmap):** Updated the public roadmap. |
| [#4821](https://github.com/agentscope-ai/CoPaw/pull/4821) | szetohoyan | **feat(feishu):** Add group session sharing mode — Feishu group chats can now share a single session context or isolate per-member. |
| [#4737](https://github.com/agentscope-ai/CoPaw/pull/4737) | hongxicheng | **feat(telegram):** Add tool_guard interactive approval via inline keyboard — Telegram users can now approve/reject tool calls inline. |
| [#4810](https://github.com/agentscope-ai/CoPaw/pull/4810) | saltapp | **feat(console):** Add current-agent skills to slash command suggestions with UI optimizations. |
| [#4940](https://github.com/agentscope-ai/CoPaw/pull/4940) | yutai78786 | **fix(integration):** Upload size limit config + plugin loader timeout resilience. |
| [#4896](https://github.com/agentscope-ai/CoPaw/pull/4896) | yutai78786 | **test(integration):** Agent-scoped P0 contract coverage (+55 cases) — superseded by [#4943](https://github.com/agentscope-ai/CoPaw/pull/4943) and [#4945](https://github.com/agentscope-ai/CoPaw/pull/4945). |
| [#4943](https://github.com/agentscope-ai/CoPaw/pull/4943) | yutai78786 | **test(integration):** Another iteration of agent-scoped P0 contract coverage (closed). |

**Key themes:** The team is shipping fixes for context/media block handling, expanding channel-specific features (Feishu, Telegram), improving the plugin system's resilience, and investing heavily in integration test coverage.

---

## 4. Community Hot Topics

The most commented and active discussions reveal where the community's energy is concentrated:

### 🔴 Context Compaction Failures (Multiple Issues)
- [#4924](https://github.com/agentscope-ai/CoPaw/issues/4924) — 上下文压缩失败 (4 comments) — `'str' object has no attribute 'get'` in `stat_message()` due to old-format file blocks.
- [#4448](https://github.com/agentscope-ai/CoPaw/issues/4448) — Context compaction fails with "invalid format (missing ## header)" (4 comments).
- [#4811](https://github.com/agentscope-ai/CoPaw/issues/4811) — Compact crashes when `source` field is a plain URL string (2 comments) — **now fixed by PR [#4933](https://github.com/agentscope-ai/CoPaw/pull/4933)**.
- [#4551](https://github.com/agentscope-ai/CoPaw/issues/4551) — Lossless context compression request: DAG-based summarization + CJK token fix (3 comments).
- [#4937](https://github.com/agentscope-ai/CoPaw/issues/4937) — `/compact` command ignores model's `max_input_length`, still uses 128K default (2 comments).

**Underlying need:** Context management is the single biggest pain point. Users are experiencing frequent compaction crashes, data loss during compression, and the system doesn't respect model-specific context windows. There's a clear demand for more robust, lossless, and model-aware compaction.

### 🔴 Memory System Instability
- [#3854](https://github.com/agentscope-ai/CoPaw/issues/3854) — ChromaDB Rust binding segfault kills entire process (5 comments).
- [#4795](https://github.com/agentscope-ai/CoPaw/issues/4795) — Vector index balloons to 37GB, causing `memory_search` crashes (3 comments).
- [#4888](https://github.com/agentscope-ai/CoPaw/issues/4888) — Dream agent uses relative path, overwrites another workspace's MEMORY.md (2 comments) — **fix proposed in PR [#4936](https://github.com/agentscope-ai/CoPaw/pull/4936)**.
- [#4710](https://github.com/agentscope-ai/CoPaw/issues/4710) — Vector store timestamp inconsistency: naive datetime vs UTC (2 comments).

**Underlying need:** The memory/vector store subsystem is unreliable — segfaults, unbounded growth, cross-workspace contamination, and timezone bugs. Users need a safer, bounded, and more predictable memory system.

### 🟡 Browser Use Tooling
- [#4919](https://github.com/agentscope-ai/CoPaw/issues/4919) — `browser_use` startup failure: managed CDP timeout + Chrome/Edge crash (6 comments — **most commented issue today**).
- [#4944](https://github.com/agentscope-ai/CoPaw/pull/4944) — Fix: add CDP timeout param and browser profile isolation (open PR).

**Underlying need:** Browser automation is a high-demand feature but currently unstable on Windows. Users need reliable cross-browser support with proper profile isolation.

### 🟡 Plugin System (Tauri Desktop)
- [#4889](https://github.com/agentscope-ai/CoPaw/issues/4889) — Tauri Desktop plugin loader never initializes (2 comments).
- [#4900](https://github.com/agentscope-ai/CoPaw/pull/4900) — Decouple plugin loader initialization from agent startup (open PR).

### 🟢 Feature Requests Gaining Traction
- [#3470](https://github.com/agentscope-ai/CoPaw/issues/3470) & [#3516](https://github.com/agentscope-ai/CoPaw/issues/3516) — Self-evolution / Hermes-like agent auto-evolution (4 comments each).
- [#4640](https://github.com/agentscope-ai/CoPaw/issues/4640) — Session-end auto-summary mechanism / pre-hook memory archiving (2 comments).
- [#4208](https://github.com/agentscope-ai/CoPaw/issues/4208) — mem0 integration support (2 comments).

---

## 5. Bugs & Stability

Ranked by severity:

### 🔴 Critical (Data Loss / Process Crashes)
| Issue | Description | Fix Status |
|---|---|---|
| [#3854](https://github.com/agentscope-ai/CoPaw/issues/3854) | ChromaDB Rust binding SIGSEGV kills entire process (45+ times in one session) | No fix PR yet |
| [#4795](https://github.com/agentscope-ai/CoPaw/issues/4795) | Vector index inflates to 37GB, `memory_search` hangs/crashes | No fix PR yet |
| [#4888](https://github.com/agentscope-ai/CoPaw/issues/4888) | Dream agent overwrites other workspace's MEMORY.md via relative path | **Fix PR [#4936](https://github.com/agentscope-ai/CoPaw/pull/4936) open** |
| [#4924](https://github.com/agentscope-ai/CoPaw/issues/4924) | Context compaction fails with `'str' object has no attribute 'get'` | **Fixed by PR [#4933](https://github.com/agentscope-ai/CoPaw/pull/4933) (merged)** |
| [#4448](https://github.com/agentscope-ai/CoPaw/issues/4448) | Context compaction fails with "invalid format (missing ## header)" | No fix PR yet |

### 🠁 High (Feature Broken)
| Issue | Description | Fix Status |
|---|---|---|
| [#4919](https://github.com/agentscope-ai/CoPaw/issues/4919) | `browser_use` managed CDP timeout + browser crash on Windows | **Fix PR [#4944](https://github.com/agentscope-ai/CoPaw/pull/4944) open** |
| [#4889](https://github.com/agentscope-ai/CoPaw/issues/4889) | Tauri Desktop plugin loader never ready | **Fix PR [#4900](https://github.com/agentscope-ai/CoPaw/pull/4900) open** |
| [#4877](https://github.com/agentscope-ai/CoPaw/issues/4877) | Custom channel stops listening on every settings save | No fix PR yet |
| [#4922](https://github.com/agentscope-ai/CoPaw/issues/4922) | Persistent PermissionError on file access via WeChat channel, survives session reset | No fix PR yet |
| [#4916](https://github.com/agentscope-ai/CoPaw/issues/4916) | Backup fails with PermissionError on browser cache files (Windows) | No fix PR yet |

### 🟡 Medium (Degraded Experience)
| Issue | Description | Fix Status |
|---|---|---|
| [#4903](https://github.com/agentscope-ai/CoPaw/issues/4903) | Unexpected loading spinner when switching chats (WebUI) | No fix PR yet |
| [#4923](https://github.com/agentscope-ai/CoPaw/issues/4923) | Sub-agent tasks spawned via `spawn_subagent` have no visible progress in UI | No fix PR yet |
| [#4928](https://github.com/agentscope-ai/CoPaw/issues/4928) | Skill marketplace download fails: response body too large (5MB limit) | **Fix PR [#4941](https://github.com/agentscope-ai/CoPaw/pull/4941) open** |
| [#4937](https://github.com/agentscope-ai/CoPaw/issues/4937) | `/compact` ignores model's `max_input_length`, uses 128K default | No fix PR yet |
| [#4781](https://github.com/agentscope-ai/CoPaw/issues/4781) | `tool_result_pruning` fails to prevent context blowup from single oversized shell output | No fix PR yet |

---

## 6. Feature Requests & Roadmap Signals

| Request | Issue(s) | Likelihood of Next Version |
|---|---|---|
| **Self-evolution / Hermes-like agent auto-evolution** | [#3470](https://github.com/agentscope-ai/CoPaw/issues/3470), [#3516](https://github.com/agentscope-ai/CoPaw/issues/3516) | Medium — frequently requested, aligns with AgentClientProtocol direction |
| **Session-end auto-summary / memory archiving hook** | [#4640](https://github.com/agentscope-ai/CoPaw/issues/4640) | High — natural extension of existing memory system, well-scoped proposal |
| **Lossless context compression (DAG-based)** | [#4551](https://github.com/agentscope-ai/CoPaw/issues/4551) | Medium — technically complex but addresses a critical pain point |
| **mem0 integration** | [#4208](https://github.com/agentscope-ai/CoPaw/issues/4208) | Low-Medium — would require significant architectural work |
| **Exclude heartbeat/cron from Auto-Memory** | [#3944](https://github.com/agentscope-ai/CoPaw/issues/3944) (closed) | Likely already in progress — issue was closed |
| **ACP (Agent Client Protocol) enhancements** | [#4949](https://github.com/agentscope-ai/CoPaw/pull/4949) (open PR) | High — actively being worked on |
| **Customizable slash command menu** | [#4637](https://github.com/agentscope-ai/CoPaw/pull/4637) (open PR) | High — PR is open and functional |
| **Tauri auto-updater** | [#4669](https://github.com/agentscope-ai/CoPaw/pull/4669) (open PR) | Medium — first-pass implementation in progress |
| **Memory distillation tool plugin** | [#4171](https://github.com/agentscope-ai/CoPaw/pull/4171) (open PR) | Medium — under review, adds smart memory consolidation |

---

## 7. User Feedback Summary

**Dominant pain points:**

1. **Context management is the #1 frustration.** Multiple users report compaction crashes, data loss, and the system not respecting model context limits. This affects daily usability for long conversations and is the most urgent stability issue.

2. **Memory system unreliability.** Between ChromaDB segfaults, 37GB index bloat, cross-workspace file contamination, and timezone inconsistencies, the memory subsystem feels fragile. Power users who rely on long-term memory are particularly affected.

3. **Browser automation instability.** The `browser_use` tool is highly desired but currently broken on Windows (CDP timeouts, profile conflicts). Users are resorting to workarounds like `playwright-cli`.

4. **Plugin ecosystem friction.** Tauri Desktop users can't install plugins at all due to loader initialization failures. Skill marketplace downloads fail due to size limits. These are adoption blockers for the extensibility story.

5. **Sub-agent observability.** Users can't monitor `spawn_subagent` task progress in real-time — they must wait until completion and even then content is incomplete.

**Positive signals:**
- Active community engagement with detailed bug reports including version info, stack traces, and reproduction steps.
- Strong PR contribution velocity — many fixes already in flight for today's reported issues.
- Channel expansion (Feishu, Telegram) is well-received and actively being enhanced.

---

## 8. Backlog Watch

These important issues and PRs have been open for extended periods and may need maintainer attention:

| Item | Age | Description | Risk |
|---|---|---|---|
| [#3854](https://github.com/agentscope-ai/CoPaw/issues/3854) | 38 days | ChromaDB Rust binding segfault — process-level crash, no Python exception handling | **Critical** — data loss, affects all Linux users on Python 3.13 |
| [#4795](https://github.com/agentscope-ai/CoPaw/issues/4795) | 6 days | Vector index 37GB bloat — no bounds checking or cleanup mechanism | **Critical** — affects long-term users, no automated mitigation |
| [#3905](https://github.com/agentscope-ai/CoPaw/issues/3905) | 37 days | Dream agent memory management failure — MEMORY.md left blank after optimization | **High** — core memory feature not working as intended |
| [#4710](https://github.com/agentscope-ai/CoPaw/issues/4710) | 8 days | Vector store timestamp inconsistency (naive vs UTC datetime) | **Medium** — causes subtle ordering bugs in memory retrieval |
| [#4208](https://github.com/agentscope-ai/CoPaw/issues/4208) | 24 days | mem0 integration request — no maintainer response | **Low** — feature request, but user is offering to contribute |
| [#4171](https://github.com/agentscope-ai/CoPaw/pull/4171) | 25 days | Memory distillation tool plugin — under review but no movement | **Medium** — addresses memory quality, aligns with roadmap |
| [#4640](https://github.com/agentscope-ai/CoPaw/issues/4640) | 12 days | Session-end auto-summary RFC — well-scoped, no maintainer response | **Medium** — natural extension of memory system |
| [#4616](https://github.com/agentscope-ai/CoPaw/issues/4616) | 13 days | Dream awakening task error (closed but root cause unclear) | **Medium** — closed without clear resolution |

---

*Generated by OWL — ZOO Company*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

Here is the project digest for ZeptoClaw on 2026-06-04.

---

# ZeptoClaw Project Digest — 2026-06-04

## 1. Today's Overview

ZeptoClaw experienced a quiet day in terms of new issues and releases, but saw significant automated maintenance activity. A total of 16 pull requests were opened in the last 24 hours, all generated by `dependabot[bot]` to bump various dependencies across the project's Rust, JavaScript/TypeScript, Docker, and GitHub Actions ecosystems. No issues were opened or closed, and no new releases were published. The project appears to be in a stable maintenance phase with no user-facing disruptions reported today.

## 2. Releases

No new releases were published on 2026-06-04. The project remains on its current stable version with no pending release notes or migration guidance to report.

## 3. Project Progress

No PRs were merged or closed today. All 16 open PRs are dependency update bumps awaiting review and merge by maintainers. Notable dependency upgrades include:

- **Rust toolchain**: Docker base image bumped from `rust:1.95-slim-trixie` to `rust:1.96-slim-trixie` ([#613](https://github.com/qhkm/zeptoclaw/pull/613))
- **Tokio** runtime: `1.52.1` → `1.52.3` (bug fixes, [#623](https://github.com/qhkm/zeptoclaw/pull/623))
- **serde_json**: `1.0.149` → `1.0.150` (rejects non-string enum object keys, [#627](https://github.com/qhkm/zeptoclaw/pull/627))
- **React**: `19.2.4` → `19.2.6` in `/panel` frontend ([#616](https://github.com/qhkm/zeptoclaw/pull/616))
- **Tailwind CSS**: `4.2.2` → `4.3.0` in `/panel` ([#619](https://github.com/qhkm/zeptoclaw/pull/619))
- **Astro**: `6.3.1`/`6.3.3` → `6.3.7` in documentation sites ([#614](https://github.com/qhkm/zeptoclaw/pull/614), [#615](https://github.com/qhkm/zeptoclaw/pull/615))
- **Scraper** (Rust HTML parsing): `0.26.0` → `0.27.0` — a minor version bump that may include API changes ([#620](https://github.com/qhkm/zeptoclaw/pull/620))

## 4. Community Hot Topics

There are no active discussions, commented-on issues, or community-engaged PRs today. All 16 PRs are automated dependency bumps with zero comments and zero reactions. No community-driven feature discussions or debates are currently underway.

## 5. Bugs & Stability

No bugs, crashes, or regressions were reported today. The zero-issue count and absence of user-reported problems suggest the project is in a stable state. The Tokio `1.52.3` bump ([#623](https://github.com/qhkm/zeptoclaw/pull/623)) includes upstream fixes that may preemptively address known runtime issues.

## 6. Feature Requests & Roadmap Signals

No new feature requests were submitted today. With no open issues or community discussions, there are no immediate signals about what might appear in the next release. The volume of dependency updates suggests the maintainers (or automation) are focused on keeping the project current rather than shipping new features at this time.

## 7. User Feedback Summary

No user feedback — positive or negative — was recorded today. The absence of issues, comments, and reactions indicates either high user satisfaction (no pain points to report) or low community engagement on the repository at this time.

## 8. Backlog Watch

All 16 open PRs are dependency bumps created on 2026-06-03 and remain unreviewed. While none are urgent, the following warrant timely attention to avoid compounding technical debt:

| Priority | PR | Dependency | Note |
|----------|-----|-----------|------|
| 🔴 High | [#613](https://github.com/qhkm/zeptoclaw/pull/613) | `rust:1.96-slim-trixie` | Rust toolchain upgrade — may affect build compatibility |
| 🟡 Medium | [#620](https://github.com/qhkm/zeptoclaw/pull/620) | `scraper 0.27.0` | Minor version bump in HTML parser — check for API changes |
| 🟡 Medium | [#627](https://github.com/qhkm/zeptoclaw/pull/627) | `serde_json 1.0.150` | Stricter enum key validation — verify no deserialization breakage |
| 🟢 Low | [#616](https://github.com/qhkm/zeptoclaw/pull/616) | `react 19.2.6` | Patch update in panel frontend |
| 🟢 Low | [#619](https://github.com/qhkm/zeptoclaw/pull/619) | `tailwindcss 4.3.0` | Minor version in panel styling |
| 🟢 Low | Remaining 11 PRs | Various | Routine patch/minor bumps |

**Recommendation**: Prioritize merging the Rust toolchain and serde_json bumps first, as these carry the highest risk of build or runtime breakage if delayed. The remaining patch-level updates can be batch-merged to reduce CI overhead.

---

*Generated by OWL — ZOO Company*

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-06-04

---

## 1. Today's Overview

ZeroClaw remains in a high-activity pre-release cadence with **50 issues and 50 PRs updated in the last 24 hours**, though no new tagged release landed today. The project is deep in the **v0.8.0 stabilization cycle** (tracked by [#7112](https://github.com/zeroclaw-labs/zeroclaw/issues/7112)), with a large volume of P1 bug fixes and security hardening PRs still open and under review. A notable pattern today is the concentration of work from a single prolific contributor (`singlerider`) driving forward security architecture (OIDC, pluggable auth providers), config resilience, and provider correctness — suggesting a focused push toward a security-hardened release. The community continues to surface real-world deployment pain points around sandboxing, multi-provider setups, and channel reliability.

---

## 2. Releases

**No new releases today.** The project is still building toward v0.8.0, with multiple tracker issues ([#7112](https://github.com/zeroclaw-labs/zeroclaw/issues/7112), [#6970](https://github.com/zeroclaw-labs/zeroclaw/issues/6970)) coordinating the release queue.

---

## 3. Project Progress

### Merged / Closed PRs (today)

| PR | Summary |
|---|---|
| [#7166](https://github.com/zeroclaw-labs/zeroclaw/pull/7166) | **fix(zerocode):** Quickstart agent name field no longer silently drops hotkey characters (`e`, `t`, `c`, `d`) — improves onboarding UX |
| [#7172](https://github.com/zeroclaw-labs/zeroclaw/pull/7172) | **fix(providers):** `llamacpp` provider now correctly honours `wire_api = "responses"` config instead of always using `/chat/completions` |

### Key Open PRs Advancing

- [#7160](https://github.com/zeroclaw-labs/zeroclaw/pull/7160) — **Resilient daemon config load**: Prevents a single malformed config field from aborting the entire daemon startup; adds security-critical gating. High-risk, large change.
- [#7180](https://github.com/zeroclaw-labs/zeroclaw/pull/7180) — **fix(providers):** Extends `wire_api = "responses"` correctness to custom and OpenAI-compatible provider families (follow-up to [#7172](https://github.com/zeroclaw-labs/zeroclaw/pull/7172)).
- [#7177](https://github.com/zeroclaw-labs/zeroclaw/pull/7177) — **fix(rpc):** Server-side enforcement that ACP sessions never receive long-term-memory tools, closing a security gap where the wire flag alone was trusted.
- [#7066](https://github.com/zeroclaw-labs/zeroclaw/pull/7066) — **fix(channels):** Removes the channel orchestrator's fabricated "default model provider" concept entirely, enforcing explicit `ModelProviderRef` resolution.
- [#6988](https://github.com/zeroclaw-labs/zeroclaw/pull/6988) — **fix(gateway):** Bearer tokens are now actually invalidated on device rotate/delete (previously the rotation API was a no-op for security purposes).
- [#7067](https://github.com/zeroclaw-labs/zeroclaw/pull/7067) — **feat(eval):** Phase 0 agent evaluation harness for deterministic replay of LLM trace fixtures — a significant infrastructure investment for release quality assurance.

---

## 4. Community Hot Topics

### Most Discussed Issues (by comment count)

1. **[#6123](https://github.com/zeroclaw-labs/zeroclaw/issues/6123)** — *Default model issue on fresh install* (18 comments, closed) — Users hitting `default_model` resolution failures on fresh installs, particularly in LXC/container setups with remote Ollama. Indicates onboarding friction for self-hosted deployments.

2. **[#5722](https://github.com/zeroclaw-labs/zeroclaw/issues/5722)** — *Default shell sandbox blocks realistic Python skill patterns* (6 comments, closed) — A FINOS-affiliated developer building InvestorClaw reported that the default sandbox is too restrictive for real-world financial analysis skills. Highlights tension between security defaults and power-user workflows.

3. **[#6246](https://github.com/zeroclaw-labs/zeroclaw/issues/6246)** — *WhatsApp Web channel broken after April 2026 protocol bump* (6 comments, closed) — WhatsApp server-side protocol change silently broke message flow. Channel maintenance burden from upstream protocol drift is a recurring theme.

4. **[#6210](https://github.com/zeroclaw-labs/zeroclaw/issues/6210)** — *SkillForge emits non-schema fields in `[skill]` block* (5 comments, closed) — Auto-integrator generating invalid TOML that gets silently dropped. Follow-up to the `deny_unknown_fields` work.

5. **[#6207](https://github.com/zeroclaw-labs/zeroclaw/issues/6207)** — *Web dashboard WebSocket bypasses ApprovalManager* (4 comments, closed) — Supervised tool approvals never surface in the daemon web UI. A significant security gap for users relying on the dashboard.

### Underlying Needs

- **Security architecture modernization**: Multiple tracking issues ([#7141](https://github.com/zeroclaw-labs/zeroclaw/issues/7141), [#7142](https://github.com/zeroclaw-labs/zeroclaw/issues/7142)) signal a push toward pluggable OIDC auth and a unified security provider interface for v0.9.0.
- **Config resilience**: Users are hitting hard failures from minor config issues; the community needs graceful degradation with clear error messages.
- **Channel reliability**: WhatsApp breakage and webhook config gaps ([#7173](https://github.com/zeroclaw-labs/zeroclaw/issues/7173)) show that channel maintenance is a growing operational burden.

---

## 5. Bugs & Stability

### New / Newly Active Bugs (ranked by severity)

| Severity | Issue | Status | Fix PR | Summary |
|---|---|---|---|---|
| 🔴 S1 | [#7179](https://github.com/zeroclaw-labs/zeroclaw/issues/7179) | OPEN | — | ZeroClaw reaps idle RPC sessions at 10 minutes — breaks long-running workflows |
| 🔴 S1 | [#7173](https://github.com/zeroclaw-labs/zeroclaw/issues/7173) | OPEN | — | Quickstart webhook config missing port field → agent fails to start with TOML error |
| 🔴 S1 | [#6207](https://github.com/zeroclaw-labs/zeroclaw/issues/6207) | CLOSED | — | Web dashboard WebSocket bypasses ApprovalManager (fix likely in progress) |
| 🔴 S1 | [#6516](https://github.com/zeroclaw-labs/zeroclaw/issues/6516) | CLOSED | — | ACP `cwd` change locks agent out of reading its own skill files |
| 🟠 S2 | [#7133](https://github.com/zeroclaw-labs/zeroclaw/issues/7133) | OPEN | — | Path-policy false-positive on `~` tokens in quoted/heredoc command data |
| 🟠 S2 | [#6702](https://github.com/zeroclaw-labs/zeroclaw/issues/6702) | OPEN | — | Dashboard assistant bubble accumulates blank lines per tool-call card |
| 🟡 S3 | [#6431](https://github.com/zeroclaw-labs/zeroclaw/issues/6431) | CLOSED | — | SQLite memory schema init fails during concurrent startup |

### Notable Closed Bugs (recently resolved)

- [#6269](https://github.com/zeroclaw-labs/zeroclaw/issues/6269) — Context compressor drops `reasoning_content` from compressed assistant messages (affected DeepSeek and other reasoning-model providers)
- [#6123](https://github.com/zeroclaw-labs/zeroclaw/issues/6123) — Default model resolution failure on fresh install
- [#6246](https://github.com/zeroclaw-labs/zeroclaw/issues/6246) — WhatsApp Web channel protocol bump breakage

---

## 6. Feature Requests & Roadmap Signals

### Tracked for v0.8.0

- **[#7112](https://github.com/zeroclaw-labs/zeroclaw/issues/7112)** — v0.8.0 release tracker: config/tool-call-parser Stable-tier promotion, schema breaking-change cleanup, runtime/provider correctness
- **[#6970](https://github.com/zerocaw-labs/zeroclaw/issues/6970)** — v0.8.1 integration/channel/provider/tool PR queue (additive features landing after v0.8.0)

### Tracked for v0.9.0

- **[#7141](https://github.com/zeroclaw-labs/zeroclaw/issues/7141)** — OIDC Authentication Provider support for RPC/WSS transport
- **[#7142](https://github.com/zeroclaw-labs/zeroclaw/issues/7142)** — Pluggable security enforcement provider interface

### New Feature Requests (likely candidates for upcoming versions)

- **[#7175](https://github.com/zeroclaw-labs/zeroclaw/issues/7175)** — Typed delete-with-cascade for aliased config entries (providers, agents, channels) — addresses config management pain
- **[#7168](https://github.com/zeroclaw-labs/zeroclaw/issues/7168) / [#7167](https://github.com/zeroclaw-labs/zeroclaw/issues/7167)** — Session branching / fork conversations at any message point (duplicate requests, closed — may need consolidation)
- **[#7178](https://github.com/zeroclaw-labs/zeroclaw/pull/7178)** (PR) — Per-alias model-provider fallback on failure — already has a PR in progress

### Prediction

The next release (v0.8.0) will likely focus on **config resilience, security hardening (token invalidation, ACP memory-tool exclusion), and provider correctness** (`wire_api = "responses"` fixes). The eval harness ([#7067](https://github.com/zeroclaw-labs/zeroclaw/pull/7067)) suggests the team is investing in release quality infrastructure before shipping. Session branching and OIDC are likely v0.9.0 targets.

---

## 7. User Feedback Summary

### Pain Points

- **Onboarding friction**: Fresh install `default_model` resolution failures ([#6123](https://github.com/zeroclaw-labs/zeroclaw/issues/6123)), quickstart webhook missing port config ([#7173](https://github.com/zeroclaw-labs/zeroclaw/issues/7173)) — new users are hitting blocking issues before they can use the product.
- **Sandbox too restrictive for power users**: The default shell sandbox blocks legitimate Python skill patterns ([#5722](https://github.com/zeroclaw-labs/zeroclaw/issues/5722)), and path-policy false-positives on heredoc data ([#7133](https://github.com/zeroclaw-labs/zeroclaw/issues/7133)) further limit advanced use cases.
- **Security UX gaps**: Web dashboard not surfacing approval prompts ([#6207](https://github.com/zeroclaw-labs/zeroclaw/issues/6207)) undermines trust in supervised mode. Token rotation not actually invalidating tokens ([#6988](https://github.com/zeroclaw-labs/zeroclaw/pull/6988)) is a critical trust issue.
- **Channel maintenance burden**: WhatsApp protocol drift ([#6246](https://github.com/zeroclaw-labs/zeroclaw/issues/6246)) silently breaks production deployments.

### Use Cases Observed

- **Financial analysis skills**: InvestorClaw developer building FINOS CDM 5.x-compliant portfolio analysis on ZeroClaw ([#5722](https://github.com/zeroclaw-labs/zeroclaw/issues/5722))
- **Self-hosted multi-container setups**: Users running ZeroClaw in LXC with remote Ollama ([#6123](https://github.com/zeroclaw-labs/zeroclaw/issues/6123))
- **ACP/Code sessions**: Developers using ZeroClaw as an ACP agent with external repo `cwd` ([#6516](https://github.com/zeroclaw-labs/zeroclaw/issues/6516))
- **FreeBSD deployments**: Community contributing FreeBSD setup guides and rc.d scripts ([#7161](https://github.com/zeroclaw-labs/zeroclaw/pull/7161))

### Satisfaction Signals

- Active community contribution (docs, FreeBSD support, eval harness, channel fixes) indicates strong engagement.
- Rapid closure of many P1 bugs suggests responsive maintainers.
- Duplicate session branching requests ([#7168](https://github.com/zeroclaw-labs/zeroclaw/issues/7168), [#7167](https://github.com/zeroclaw-labs/zeroclaw/issues/7167)) indicate users are thinking deeply about workflow features.

---

## 8. Backlog Watch

### Important Issues Needing Maintainer Attention

| Issue | Age | Risk | Note |
|---|---|---|---|
| [#7179](https://github.com/zeroclaw-labs/zeroclaw/issues/7179) — RPC session reaping at 10 min | 1 day | 🔴 S1 | No response yet; breaks long-running ACP/code sessions |
| [#7173](https://github.com/zeroclaw-labs/zeroclaw/issues/7173) — Quickstart webhook missing port | 1 day | 🔴 S1 | Blocks new users from webhook channel setup |
| [#7133](https://github.com/zeroclaw-labs/zeroclaw/issues/7133) — Path-policy false-positive on `~` in heredocs | 1 day | 🟠 S2 | Affects shell tool usage with quoted paths |
| [#6702](https://github.com/zeroclaw-labs/zeroclaw/issues/6702) — Dashboard blank line accumulation | 19 days | 🟡 S3 | Cosmetic but degrades dashboard UX; low priority |
| [#5636](https://github.com/zeroclaw-labs/zeroclaw/issues/5636) — zai-cn provider error 1214 with glm-5-turbo | 54 days | 🔴 S1 | Closed but underlying provider compatibility may need follow-up |
| [#5697](https://github.com/zeroclaw-labs/zeroclaw/issues/5697) — Skills blocked despite `allow_scripts = true` | 52 days | 🔴 S1 | Closed; security policy enforcement correctness |

### Stale PRs at Risk of Going Cold

| PR | Age | Note |
|---|---|---|
| [#5987](https://github.com/zeroclaw-labs/zeroclaw/pull/5987) — Nix flake support | 43 days | Improves build reproducibility; needs review |
| [#6389](https://github.com/zeroclaw-labs/zeroclaw/pull/6389) — Per-recipient reply pacing across 9 channels | 30 days | Large feature PR; needs maintainer bandwidth |
| [#5987](https://github.com/zeroclaw-labs/zeroclaw/pull/5987) — Nix flake | 43 days | Platform support expansion |

---

*Data source: github.com/zeroclaw-labs/zeroclaw — snapshot 2026-06-04. Generated by OWL.*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/DenisZheng/agents-radar).*