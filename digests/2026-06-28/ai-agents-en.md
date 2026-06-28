# OpenClaw Ecosystem Digest 2026-06-28

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-06-28 00:38 UTC

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

# OpenClaw Project Digest — 2026-06-28

**Repository:** [github.com/openclaw/openclaw](https://github.com/openclaw/openclaw)

---

## 1. Today's Overview

OpenClaw is experiencing very high activity with 500 issues and 500 PRs updated in the last 24 hours, signaling a large and highly engaged contributor base. However, the signal-to-noise ratio is a concern: the vast majority of items are open (486 issues, 447 PRs), with only 14 issues and 53 PRs closed or merged in the past day, and **zero new releases**. The project is clearly in an accumulation phase — dozens of high-quality fix PRs and feature PRs are queued in `waiting on author` or `needs maintainer review` states. Several P1 regressions involving data loss, session corruption, and gateway crashes have been open for months without resolution, indicating maintainer bandwidth is a significant bottleneck.

---

## 2. Releases

**No new releases.** The latest published versions are from the `2026.3.x` line (e.g., `2026.3.24`). Multiple P1 regressions and bug-fix PRs reference these releases as still-affected, and at least one issue (#48920) reports that live documentation has drifted ahead of the latest shipped version.

---

## 3. Project Progress

### Merged or Closed PRs (recent)

| PR | Status | Significance |
|---|---|---|
| [#97334](https://github.com/openclaw/openclaw/pull/97334) | Closed | Pin Node heap ceiling via CLI flag for managed service environments (fixes #96203) |
| [#97075](https://github.com/openclaw/openclaw/pull/97075) | Closed | Doctor: expose structured gateway runtime health findings — improves observability for ops tooling |
| [#68936](https://github.com/openclaw/openclaw/pull/68936) | Closed | PR review autofix pipeline using Claude Agent SDK + Windows background daemon |
| [#95833](https://github.com/openclaw/openclaw/issues/95833) | Closed (issue) | Subagent abort-settle fails to release `.jsonl.lock`, permanently breaking the session |

### Notable PRs Advancing

- **Hosted Marketplace Feed Stack** ([#95964](https://github.com/openclaw/openclaw/pull/95964)) — PR 4 in a multi-PR sequence to build a hosted catalog/marketplace. A major ecosystem investment.
- **Session History Family Lookup** ([#90239](https://github.com/openclaw/openclaw/pull/90239)) + **Reset Family Carryover Summaries** ([#90259](https://github.com/openclaw/openclaw/pull/90259)) — Two coordinated XL PRs addressing context loss across session resets/transcripts. Both `waiting on author`.
- **Plugin Follow-Up Turn API** ([#63330](https://github.com/openclaw/openclaw/pull/63330)) — New `runtime.followup.enqueueFollowupTurn()` enabling plugins to schedule proactive agent turns in cold sessions. Supersedes #60951.
- **MCP Tool Schema Fix** ([#63634](https://github.com/openclaw/openclaw/pull/63634)) — Relaxes strict `inputSchema.type` check so valid MCP tools aren't rejected. P1, ready for maintainer review.
- **Provider Circuit Breaker for Quota Exhaustion** ([#64127](https://github.com/openclaw/openclaw/pull/64127)) — Distinguishes periodic quota limits from transient rate limits and applies persistent backoff. Needed for production reliability.

---

## 4. Community Hot Topics

### Most Discussed Issues (by comment count)

1. **[#48788](https://github.com/openclaw/openclaw/issues/48788)** — Centralized filename encoding utility for multi-encoding Content-Disposition handling (18 comments). Extends the Feishu UTF-8 fix to handle Shift-JIS, EUC-KR, GB18030 across all channel adapters. Rooted in internationalization gaps.

2. **[#58450](https://github.com/openclaw/openclaw/issues/58450)** — Agent promises follow-up without starting any actual action (15 comments, 👍3). Core trust/reliability issue: the agent's stated intent doesn't match its behavior, misleading users.

3. **[#92201](https://github.com/openclaw/openclaw/issues/92201)** — Embedded runner: Anthropic thinking signatures intermittently invalid on replay; recovery wrapper never fires (15 comments). Provider-specific streaming integrity problem.

4. **[#50090](https://github.com/openclaw/openclaw/issues/50090)** — Community Skill Development & ClawHub ecosystem gaps (15 comments, 👍2). Broad dissatisfaction with the skill publishing/installation experience.

5. **[#63829](https://github.com/openclaw/openclaw/issues/63829)** — Per-agent memory-wiki vault configuration (10 comments, 👍9 — highest reaction count). Strong demand for multi-agent tenants needing isolated knowledge bases.

### Underlying Needs

- **Agent reliability & honesty**: Multiple issues (#58450, #50165, #52249, #92201) converge on the theme that the system reports states (done, following up, thinking-valid) that aren't truthful. Users need deterministic guarantees.
- **Multi-tenant / multi-agent isolation**: Vault isolation ([#63829](https://github.com/openclaw/openclaw/issues/63829)), per-agent store paths ([#54716](https://github.com/openclaw/openclaw/pull/54716)), and sandbox visibility ([#53821](https://github.com/openclaw/openclaw/pull/53821)) all point to enterprise/team adoption hitting shared-state walls.
- **Internationalization**: Filename encoding ([#48788](https://github.com/openclaw/openclaw/issues/48788)) and Swedish locale ([#62063](https://github.com/openclaw/openclaw/pull/62063)) reflect a growing non-English-speaking user base.

---

## 5. Bugs & Stability

### P1 Critical (Open, Unresolved)

| Issue | Age | Impact | Fix PR? |
|---|---|---|---|
| [#62505](https://github.com/openclaw/openclaw/issues/62505) — Coding agent never completes anything (regression from 2026.4.2) | 82 days | Session state, message loss | None |
| [#92201](https://github.com/openclaw/openclaw/issues/92201) — Anthropic thinking signature invalid on replay | 17 days | Message loss, session state | None |
| [#58957](https://github.com/openclaw/openclaw/issues/58957) — Model switch fails silently on large context | 27 days | Auth/session | None |
| [#54155](https://github.com/openclaw/openclaw/issues/54155) — Gateway memory leak: 389MB → 14.7GB in 4 days | 33 days | Crash loop (OOM) | None |
| [#55334](https://github.com/openclaw/openclaw/issues/55334) — `sessions.json` unbounded growth, skillsSnapshot duplicated per session | 32 days | OOM | None |
| [#53540](https://github.com/openclaw/openclaw/issues/53540) — Embedded runner "Network connection lost" on large tool params | 34 days | Message loss | None |
| [#52249](https://github.com/openclaw/openclaw/issues/52249) — ACP parent session stuck waiting for child | 67 days | Session state | None |
| [#63216](https://github.com/openclaw/openclaw/issues/63216) — Repeated hard resets on same session key | 20 days | Session state | None |
| [#51396](https://github.com/openclaw/openclaw/issues/51396) — `clearUnboundScopes` strips operator scopes for non-local clients (security regression) | 27 days | Security, auth | None |
| [#53599](https://github.com/openclaw/openclaw/issues/53599) — Chrome extension browser relay removed, no cross-machine replacement (regression, 👍5) | 34 days | Security | None |
| [#45224](https://github.com/openclaw/openclaw/issues/45224) — Playwright assertion error crashes Gateway | 45 days | Crash loop | None |
| [#44502](https://github.com/openclaw/openclaw/issues/44502) — Discord mention-gating bug routes messages too permissively | 45 days | Message loss | None |
| [#58514](https://github.com/openclaw/openclaw/issues/58514) — Google Chat space/group messages silently ignored | 27 days | Message loss | None |

### P2 Notable

- [#57901](https://github.com/openclaw/openclaw/issues/57901) — Safeguard compaction ignores `compaction.model` config, uses session model instead. Fix shape clear, needs maintainer review.
- [#50248](https://github.com/openclaw/openclaw/issues/50248) — Session cleanup `--fix-missing` can prune fresh cron sessions with valid transcripts (data loss risk). Fix shape labeled.
- [#57256](https://github.com/openclaw/openclaw/issues/57256) — `openclaw status` falsely reports memory as unavailable when live plugin works. Observability false positive.

### With Active Fix PRs

| Issue | PR | Status |
|---|---|---|
| MCP tools rejected without `inputSchema.type` | [#63634](https://github.com/openclaw/openclaw/pull/63634) | Ready for maintainer |
| `tools.effective` fails for global sessions on non-default agents | [#97265](https://github.com/openclaw/openclaw/pull/97265) | Needs proof |
| Cron job model selection missing in Web UI | [#97337](https://github.com/openclaw/openclaw/pull/97337) | Needs proof |
| `sourceDelivery` undefined in isolated cron executor | [#85249](https://github.com/openclaw/openclaw/pull/85249) | Ready for maintainer |
| Browser tool force-click + evaluate action | [#60381](https://github.com/openclaw/openclaw/pull/60381) | Needs proof |

**Stability Assessment:** Critical. Multiple P1 crash-loop, data-loss, and session-corruption bugs remain open for over a month without fix PRs. Gateway memory growth and OOM are particularly concerning for production deployments. The `clawsweeper:needs-maintainer-review` label is prolific across top issues.

---

## 6. Feature Requests & Roadmap Signals

### High-Probability Candidates for Next Version

| Issue | Signal | Rationale |
|---|---|---|
| [#63829](https://github.com/openclaw/openclaw/issues/63829) — Per-agent memory vault (👍9) | Strong community pull | Already has design clarity; multi-agent deployments are a key growth vector |
| [#58818](https://github.com/openclaw/openclaw/issues/58818) — Guarantee last N raw messages survive compaction/session reset | Recurring pattern across 3+ issues | Session context preservation is a systemic need |
| [#56349](https://github.com/openclaw/openclaw/issues/56349) — Unbypassable outbound policy enforcement (pre-send guarantee) | Architectural RFC | Security/compliance requirement for enterprise users |
| [#50739](https://github.com/openclaw/openclaw/issues/50739) — System event priority/bypass-queue mode | Production reliability | Provider rate-limit incidents make this urgent |
| [#64046](https://github.com/openclaw/openclaw/issues/64046) — Sensitive data masking in configs/logs/UI | Compliance trend | API keys in plaintext is a recurring complaint |

### Strategic Bets (Multi-PR Initiatives)

- **Hosted Marketplace Feed Stack** ([#95964](https://github.com/openclaw/openclaw/pull/95964) + 3 prior PRs) — Building a ClawHub successor with hosted catalog snapshots. This is clearly a funded priority.
- **Session History Family_lookup** ([#90239](https://github.com/openclaw/openclaw/pull/90239) + [#90259](https://github.com/openclaw/openclaw/pull/90259)) — Cross-transcript context persistence. XL effort, architecturally significant.
- **Plugin Follow-Up Turn API** ([#63330](https://github.com/openclaw/openclaw/pull/63330)) — Enables proactive agent behaviors (notifications, autonomous checks). Platform extensibility play.
- **Rust/GTK4 Linux Companion** ([#61576](https://github.com/openclaw/openclaw/pull/61576)) — Native desktop app, alternative to C/GTK4 effort. Platform expansion.

---

## 7. User Feedback Summary

### Pain Points (by frequency)

1. **Session/context fragility** — The most pervasive theme. Users lose context across resets, compactions, and model switches. Coding agents forget what they were doing ([#62505](https://github.com/openclaw/openclaw/issues/62505)). Subagents appear done before actual completion ([#50165](https://github.com/openclaw/openclaw/issues/50165)). Embedded runners lose thinking signatures ([#92201](https://github.com/openclaw/openclaw/issues/92201)). This erodes **trust in agent outputs**.

2. **Message delivery unreliability** — Responses not reaching originating channels ([#54531](https://github.com/openclaw/openclaw/issues/54531)), WhatsApp messages lost after reconnection ([#50093](https://github.com/openclaw/openclaw/issues/50093)), Google Chat silently ignoring group messages ([#58514](https://github.com/openclaw/openclaw/issues/58514)), Feishu card rendering regression ([#53486](https://github.com/openclaw/openclaw/issues/53486)). Multi-channel users are particularly affected.

3. **Gateway stability under load** — Memory leaks ([#55334](https://github.com/openclaw/openclaw/issues/55334), [#54155](https://github.com/openclaw/openclaw/issues/54155)), crash from unhandled Playwright assertions ([#45224](https://github.com/openclaw/openclaw/issues/45224)), and repeated context-overflow resets ([#63216](https://github.com/openclaw/openclaw/issues/63216)) suggest the gateway's long-running process model needs hardening.

4. **Hardcoded regressions** — A developer's local path (`/Users/wangtao`) being merged into production code ([#51429](https://github.com/openclaw/openclaw/issues/51429)) was a notable embarrassment, pointing to gaps in CI/path-portability testing.

5. **Enterprise/team features lacking** — Per-agent vaults, outbound policy enforcement, sensitive data masking, and sandbox session visibility overrides are all requests from users running multi-agent or compliance-sensitive deployments.

### Satisfaction Indicators

- 👍 counts are generally low (0–3) on most issues, **except** per-agent memory (👍9) and LaTeX support (👍7), suggesting strong but narrow enthusiasm for these features.
- The high volume of well-structured bug reports (many with `clawsweeper` labels, source repros, and fix-shape analysis) indicates a technically sophisticated user base that is willing to invest effort in contributing.
- Multiple community-authored fix PRs with `proof: supplied` show healthy contributor engagement, but the `waiting on author` flag on many of them signals maintainer latency is frustrating contributors.

---

## 8. Backlog Watch — Items Needing Maintainer Attention

### Urgent (P1, >30 days open, no fix PR)

| Issue | Days Open | Labels | Why It Matters |
|---|---|---|---|
| [#62505](https://github.com/openclaw/openclaw/issues/62505) | 82 | regression, message-loss | **Oldest critical regression.** Coding agent completely non-functional for affected users. |
| [#52249](https://github.com/openclaw/openclaw/issues/52249) | 67 | message-loss, session-state | ACP parent sessions stuck — blocks multi-agent workflows. |
| [#45224](https://github.com/openclaw/openclaw/issues/45224) | 45 | crash-loop | Unhandled Playwright error kills the entire Gateway process. |
| [#44502](https://github.com/openclaw/openclaw/issues/44502) | 45 | regression, message-loss | Discord routing regression — messages mis-routed or dropped. |
| [#53599](https://github.com/openclaw/openclaw/issues/53599) | 34 | regression, security, 👍5 | Chrome extension removal broke cross-machine browser relay for managed hosting providers. |
| [#55334](https://github.com/openclaw/openclaw/issues/55334) | 32 | crash-loop, 👍1 | `sessions.json` unbounded growth — OOM kills gateway in production. |

### High-Priority PRs Stalled

| PR | Status | Why It Matters |
|---|---|---|
| [#63634](https://github.com/openclaw/openclaw/pull/63634) | Ready for maintainer | MCP tool loading is broken for tools without explicit `type: "object"` — blocks any MCP server with relaxed schemas. |
| [#85249](https://github.com/openclaw/openclaw/pull/85249) | Ready for maintainer | TypeError crash in isolated cron executor. `sourceDelivery` undefined guard. |
| [#54716](https://github.com/openclaw/openclaw/pull/54716) | Ready for maintainer | Multi-agent sessions discovery broken for literal store paths. |
| [#63330](https://github.com/openclaw/openclaw/pull/63330) | Needs proof | Plugin follow-up turn API — major platform capability. |

### Pattern to Watch

The `clawsweeper:needs-maintainer-review` label appears on virtually every top issue. This project has a **severe maintainer bandwidth bottleneck** relative to its contributor volume. The ClawSweeper automation system is doing its job triaging and labeling issues, but the queue of "ready for maintainer" items is growing faster than it's being drained. Without either more maintainer bandwidth or delegation of review authority, the project risks contributor burnout and user attrition due to unresolved P1 pain points.

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: Personal AI Agent & Assistant Open-Source Ecosystem

**Date:** 2026-06-28 | **Projects Analyzed:** 11

---

## 1. Ecosystem Overview

The personal AI agent open-source landscape in mid-2026 is characterized by **high fragmentation and rapid iteration**, with projects spanning the full spectrum from lightweight messaging bridges (NanoBot, PicoClaw) to full-featured multi-agent platforms (OpenClaw, IronClaw, ZeroClaw). The ecosystem is converging on several table-stakes capabilities: multi-channel messaging adapters, tool-calling via MCP, session/context persistence, and per-agent memory isolation. However, **reliability and trust remain systemic weaknesses** — session corruption, silent message loss, and agent dishonesty are reported across nearly every project, indicating the industry is still in an early-adopter phase where capability outpaces stability. Community engagement is strong (OpenClaw alone processed 500 issue+PR updates in 24h), but maintainer bandwidth is a universal bottleneck, with most projects showing accumulation of "ready for maintainer" items.

---

## 2. Activity Comparison

| Project | Issues (Δ24h) | PRs (Δ24h) | Merged/Closed | Releases | Health Score |
|---|---|---|---|---|---|
| **OpenClaw** | 500 updated (486 open) | 500 updated (447 open) | 14 issues / 53 PRs | None (2026.3.x) | 🔴 Critical — severe maintainer bottleneck, 13+ P1 bugs open >30 days |
| **NanoBot** | 8 updated (1 open) | 47 updated (29 merged) | 7 issues / 29 PRs | None | 🟢 Good — high merge velocity, security sprint active |
| **Hermes Agent** | 50 updated (47 open) | 50 updated | 3 issues / 3 PRs | None (v0.15–0.16) | 🟡 Moderate — strong PR output but ballooning issue backlog |
| **PicoClaw** | 3 updated | 7 updated (2 closed) | 2 closed | None | 🟢 Stable — low volume, healthy cadence |
| **NanoClaw** | 1 updated | 8 updated (0 merged) | 0 | None | 🟡 Moderate — accumulation phase, review bottleneck |
| **NullClaw** | 1 updated | 1 new | 0 | None | 🟡 Low activity — single contributor focus |
| **IronClaw** | 12 updated (3 open) | 50 updated (22 merged) | 9 issues / 22 PRs | None (release PR open) | 🟢 Strong — major epic shipped, high merge rate |
| **LobsterAI** | 2 updated | 8 closed (all stale) | 8 closed | None | 🟡 Caution — backlog cleared but 2 new critical bugs unfixed |
| **TinyClaw** | 0 | 0 | 0 | — | ⚪ Inactive |
| **Moltis** | 1 new | 2 open | 0 | None | 🟡 Low volume — niche focus |
| **CoPaw** | 5 updated (4 open) | 15 updated (1 merged) | 1 issue / 1 PR | None | 🟡 Moderate — heavy test investment, low merge throughput |
| **ZeroClaw** | 46 updated | 50 updated (3 merged) | 12 issues / 3 PRs | None (v0.8.2) | 🟡 Moderate — high activity, architectural churn |

**Health Score Key:** 🟢 Good | 🟡 Moderate | 🔴 Critical | ⚪ Inactive

---

## 3. OpenClaw's Position

### Advantages vs Peers

- **Largest community by far**: 500+ daily issue/PR updates dwarf all competitors (next highest: IronClaw at 50, ZeroClaw at 50). This translates to more bug reports, more fix PRs, and broader channel adapter coverage.
- **Most comprehensive channel ecosystem**: Supports Discord, Telegram, WhatsApp, Feishu, Google Chat, Slack, and more — matched only by Hermes Agent and ZeroClaw.
- **ClawHub marketplace initiative**: The Hosted Marketplace Feed Stack (#95964) is the most ambitious plugin/skill ecosystem play in the space, positioning OpenClaw as a platform rather than just a tool.
- **ClawSweeper automation**: Sophisticated issue triage automation (`clawsweeper:needs-maintainer-review`, `proof: supplied` labels) that no peer project matches in maturity.

### Technical Approach Differences

| Dimension | OpenClaw | Peers |
|---|---|---|
| **Architecture** | Monolithic gateway process with plugin system | IronClaw: micro-crate Rust architecture; NanoBot: ultra-lightweight Go; ZeroClaw: WASM plugin runtime |
| **Multi-agent** | Session-family model with shared vaults | IronClaw: capability-policy engine with per-user tool surfaces; PicoClaw: Agent Collaboration Bus with per-agent mailboxes |
| **Context management** | Compaction with known fragility issues | CoPaw: SQLite-backed scroll context manager (PR); OpenClaw: session history family lookup (PR) |
| **Extensibility** | Plugin Follow-Up Turn API, MCP tools | ZeroClaw: WASM component-model host; NanoBot: MCP image artifacts |

### Community Size Comparison

OpenClaw's 500-issue/PR daily volume is an order of magnitude above the next most active projects (IronClaw, ZeroClaw, Hermes at ~50 each). However, this scale is a double-edged sword: the signal-to-noise ratio is low, and the maintainer bottleneck means many high-quality PRs stall in `waiting on author` states. IronClaw demonstrates that a smaller but more focused team can ship complex features (the entire Reborn capability-policy epic) faster.

---

## 4. Shared Technical Focus Areas

The following requirements are emerging as **cross-project consensus needs**:

### 4.1 Session/Context Persistence & Reliability
**Projects:** OpenClaw, CoPaw, Hermes Agent, ZeroClaw
- OpenClaw: Session History Family Lookup (#90239), context loss across resets (#58818)
- CoPaw: Conversation loss on crash/reboot (#5579), Scroll Context Manager PR (#53216)
- Hermes: Session resume loses in-progress state (#51089)
- ZeroClaw: Context budget exceeded 3.3x on first iteration (#5808)

**Core need:** Durable, checkpointed conversation state that survives compaction, model switches, and process restarts.

### 4.2 Multi-Tenant / Multi-Agent Isolation
**Projects:** OpenClaw, IronClaw, PicoClaw, NanoClaw
- OpenClaw: Per-agent memory vault (#63829, 👍9), per-agent store paths (#54716)
- IronClaw: Capability-policy engine with Owner/Admin/Member roles (shipped)
- PicoClaw: Agent Collaboration Bus with per-agent mailboxes (merged)
- NanoClaw: Per-group model overrides (#2872)

**Core need:** Isolated knowledge bases, tool surfaces, and configuration per agent/user in shared deployments.

### 4.3 Agent Honesty & Trust
**Projects:** OpenClaw, NanoBot, Hermes Agent
- OpenClaw: Agent promises follow-up without action (#58450), coding agent never completes (#62505)
- NanoBot: Agent verification gates & provider recovery (PR #4534)
- Hermes: Self-created skills lack correctness guarantees (#25833)

**Core need:** Deterministic guarantees that agent-reported states (done, following up, valid) match actual behavior.

### 4.4 Tool-Calling Robustness
**Projects:** OpenClaw, NanoBot, Moltis, ZeroClaw
- OpenClaw: MCP tool schema rejection (#63634)
- NanoBot: Exec tool security bypasses (#4521, #4518)
- Moltis: Stringified scalar tool args from small models (#1136)
- ZeroClaw: Shell tool refused at full autonomy (#6434)

**Core need:** Defensive normalization layers for tool dispatch that handle heterogeneous model outputs and enforce security boundaries.

### 4.5 Message Delivery Reliability
**Projects:** OpenClaw, Hermes Agent, NanoBot
- OpenClaw: Messages lost across channels (WhatsApp, Google Chat, Feishu)
- Hermes: Telegram draft-failure cascade, duplicate replies
- NanoBot: Stream delta coalescing merges distinct streams

**Core need:** At-least-once delivery guarantees with proper error handling across all channel adapters.

---

## 5. Differentiation Analysis

| Project | Primary Focus | Target Users | Technical Architecture | Key Differentiator |
|---|---|---|---|---|
| **OpenClaw** | Full-featured multi-channel agent platform | Power users, teams, managed hosting providers | Monolithic gateway + plugin system | Largest channel adapter surface, ClawHub marketplace |
| **NanoBot** | Lightweight, self-hosted chatbot | Individual users, resource-constrained deployments | Go-based, "ultra-lightweight" (disputed) | Cron/silent-mode automation, ask-clarification tool |
| **Hermes Agent** | Desktop-first AI assistant with skills | End users wanting a polished desktop app | Electron desktop + CLI, auto-skill generation | Desktop i18n (15 languages), art-trivia community skills |
| **IronClaw** | Enterprise multi-tenant agent platform | Teams, organizations, compliance-sensitive users | Rust micro-crates, capability-policy engine | Most mature permission system (shipped), QA infrastructure investment |
| **ZeroClaw** | Extensible multi-channel platform with WASM | Developers, security-conscious users | WASM plugin runtime, SOP execution engine | SLSA L3 supply chain security, SOP/goal-mode autonomy |
| **CoPaw** | Qwen-ecosystem AI console | Chinese-speaking users, Qwen model users | Backend + web console, agentscope integration | Deep Qwen model integration, DataPaw BI analytics plugin |
| **PicoClaw** | Embedded/IoT agent messaging | IoT developers, multi-agent researchers | Go, channel adapter model | Agent Collaboration Bus, Simplex channel support |
| **LobsterAI** | Desktop AI productivity app | Chinese-speaking desktop users | Electron desktop + gateway | Cowork scheduled tasks, MCP/SSE transport |
| **Moltis** | Local LLM tool-calling compatibility | On-device/local inference users | Agent framework with browser tool | Small-model tool-call normalization, Apple Container support |
| **NanoClaw** | Multi-agent orchestration | Multi-agent operators | Container-based agent isolation | Per-group model overrides, Coolify deployment |
| **NullClaw** | Safe agent execution | Security-focused developers | Go, approval-gated tool execution | Human-in-the-loop approval flow for shell commands |

---

## 6. Community Momentum & Maturity

### Tier 1: High Velocity, Active Shipping
- **NanoBot**: 29 PRs merged in 24h, coordinated security sprint, clear feature pipeline. Most responsive maintainer team.
- **IronClaw**: 22 PRs merged, major epic (Reborn capability-policy) shipped as a complete unit. Strongest architectural execution.

### Tier 2: High Activity, Accumulation Phase
- **OpenClaw**: Massive volume but low close rate (14/500 issues, 53/500 PRs). Accumulating fixes without shipping releases.
- **ZeroClaw**: High activity (46 issues, 50 PRs) but only 3 merges. Architectural churn (WASM runtime, SOP engine, new RFCs) consuming bandwidth.
- **Hermes Agent**: Good PR output but 47/50 issues remain open. Backlog accumulation risk.
- **CoPaw**: 15 PRs updated but only 1 merged. Heavy test infrastructure investment not yet paying off in release cadence.

### Tier 3: Steady Maintenance
- **PicoClaw**: Low but consistent activity. Agent Collaboration Bus merge signals architectural ambition.
- **NanoClaw**: 8 open PRs, 0 merged. Review bottleneck similar to OpenClaw but at smaller scale.
- **LobsterAI**: Cleared stale PR backlog but no release. Two new critical bugs unfixed.

### Tier 4: Early Stage / Inactive
- **NullClaw**: Single PR, single issue. Pre-alpha stage.
- **Moltis**: 2 PRs, 1 issue. Niche focus, low activity.
- **TinyClaw**: No activity. Effectively dormant.

---

## 7. Trend Signals

### For AI Agent Developers: Key Industry Directions

1. **Security is becoming a first-class concern.** NanoBot's exec-tool vulnerabilities, IronClaw's capability-policy engine, NullClaw's approval flow, and ZeroClaw's SLSA L3 investment all point to a market that is moving beyond "capable" to "safe by default." Expect human-in-the-loop controls and sandboxed execution to become table stakes.

2. **Multi-agent orchestration is the next frontier.** OpenClaw's per-agent vaults, PicoClaw's Agent Collaboration Bus, NanoClaw's per-group model overrides, and IronClaw's per-user tool surfaces all address the same fundamental shift: from single-user chatbots to multi-agent systems with isolated state and capabilities.

3. **Local/small-model compatibility is a growing segment.** Moltis's tool-call normalization for Gemma 4 and oMLX, combined with CoPaw's DeepSeek proxy hardening, signals that the ecosystem is moving beyond cloud-API dependency. Developers should invest in defensive input normalization for heterogeneous model outputs.

4. **Context management remains the unsolved core problem.** Every major project has open issues or active PRs addressing session fragility, context loss, and memory persistence. This is the single highest-leverage area for technical differentiation — whoever solves durable, efficient context wins user trust.

5. **Supply chain security is emerging as an enterprise gate.** ZeroClaw's SLSA L3, cosign, and hardware-backed signing investments are ahead of the curve but will likely become standard requirements as AI agents handle sensitive data and production workloads.

6. **Desktop/mobile parity is a retention issue.** Hermes Agent's Windows crashes, NullClaw's Android/Termux build failure, and LobsterAI's Windows installer bugs all highlight that cross-platform reliability is still poor. Projects that invest in CI coverage across Windows, macOS, Linux, and mobile will capture users that others lose during onboarding.

7. **Plugin/marketplace ecosystems are the platform moat.** OpenClaw's ClawHub, CoPaw's plugin catalog, and ZeroClaw's WASM-based extensibility all recognize that long-term value lies in ecosystem lock-in through installable capabilities, not just built-in features.

---

*Report generated from GitHub activity data as of 2026-06-28. All issue and PR references link to the respective project repositories.*

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-06-28

**Repository:** [HKUDS/nanobot](https://github.com/HKUDS/nanobot)

---

## 1. Today's Overview

NanoBot is experiencing a high-velocity maintenance and hardening phase. In the last 24 hours, **47 PRs were updated** (29 merged/closed, 18 still open) and **8 issues were updated** (7 closed, 1 open) — an unusually large batch driven primarily by a coordinated bug-squashing sprint from contributor **axelray-dev** and a series of security disclosures. No new releases were published, suggesting the team is accumulating fixes toward a future tagged release. The project's self-described "ultra-lightweight" positioning is under community scrutiny, and a wave of security advisories around the `exec` tool signals that this subsystem is a critical area of concern.

---

## 2. Releases

**None.** No new version tags were published in the reporting window. Given the volume of merged bug fixes and security patches (see Sections 3 and 5), a patch release appears imminent.

---

## 3. Project Progress

### Security Fixes (Merged)
- **[PR #4562](https://github.com/HKUDS/nanobot/pull/4562)** — *fix(security): validate each shell segment against exec.allowPatterns* — Splits chained shell commands (e.g., `echo ok && touch /tmp/evil`) and validates each segment individually against the allowlist, closing **[Issue #4521](https://github.com/HKUDS/nanobot/issues/4521)**.
- **[Issue #4518](https://github.com/HKUDS/nanobot/issues/4518)** — *Default login-shell execution reintroduces secrets from shell startup files* — Closed; the `exec` tool's default login-shell behavior can leak environment variables containing secrets from `.bashrc`, `.zshrc`, etc. A fix PR is expected.

### Core Bug Fixes (Merged)
- **[PR #4533](https://github.com/HKUDS/nanobot/pull/4533)** — Fixes **[Issue #4057](https://github.com/HKUDS/nanobot/issues/4057)**: Session key collision on disk where `telegram:a:b` and `telegram:a:b` both sanitized to `telegram_a_b`.
- **[PR #4532](https://github.com/HKUDS/nanobot/pull/4532)** — Fixes **[Issue #4060](https://github.com/HKUDS/nanobot/issues/4060)**: Anthropic provider emitting assistant content blocks without required `type` field.
- **[PR #4531](https://github.com/HKUDS/nanobot/pull/4531)** — Fixes **[Issue #4063](https://github.com/HKUDS/nanobot/issues/4063)**: Stream delta coalescing ignoring `_stream_id`, causing distinct streams in the same chat to merge incorrectly.
- **[PR #4530](https://github.com/HKUDS/nanobot/pull/4530)** — Fixes **[Issue #4059](https://github.com/HKUDS/nanobot/issues/4059)**: OpenAI-compatible non-stream parser preserving duplicate tool call IDs.
- **[PR #3712](https://github.com/HKUDS/nanobot/pull/3712)** — Handles corrupted session files where `last_consolidated` exceeds message count.
- **[PR #4523](https://github.com/HKUDS/nanobot/pull/4523)** — Fixes flaky test `test_keeps_n_most_recent` caused by identical sub-millisecond mtimes on modern filesystems.

### Features Merged
- **[PR #4225](https://github.com/HKUDS/nanobot/pull/4225) / [#4357](https://github.com/HKUDS/nanobot/pull/4357)** — *feat(cron): add silent mode and lock_recipient for scheduled jobs* — Background monitoring tasks can now run without auto-delivering responses to the user channel.

### Features In Progress (Open PRs)
- **[PR #4565](https://github.com/HKUDS/nanobot/pull/4565)** — *fix(webui): clear stuck streaming after reconnect* — Addresses **[Issue #4500](https://github.com/HKUDS/nanobot/issues/4500)** where WebUI shows perpetual "processing" state after gateway restart.
- **[PR #4542](https://github.com/HKUDS/nanobot/pull/4542)** — *feat(mcp): deliver image content from MCP tools as artifacts* — Currently MCP image content gets serialized as base64 into the tool-result string.
- **[PR #4534](https://github.com/HKUDS/nanobot/pull/4534)** — *feat(agent): add verification gates and provider recovery* — General-purpose reliability layer for the agent loop to handle transient provider errors.
- **[PR #4554](https://github.com/HKUDS/nanobot/pull/4554)** — *fix(memory): block Dream from creating duplicate skills via write guard*.
- **[PR #4556](https://github.com/HKUDS/nanobot/pull/4556)** — *feat(dream): wire up model_override for Dream consolidation*.
- **[PR #4555](https://github.com/HKUDS/nanobot/pull/4555)** — *feat: per-session model preset (model override per conversation)*.
- **[PR #4406](https://github.com/HKUDS/nanobot/pull/4406)** — *feat(web-search): add Serper.dev (Google Search API) provider*.
- **[PR #4527](https://github.com/HKUDS/nanobot/pull/4527)** — *Add ask_clarification tool* — Built-in tool for the agent to request structured clarification from users mid-task.
- **[PR #4371](https://github.com/HKUDS/nanobot/pull/4371)** — *fix(cache): add breakpoint before Recent History so the stable system prefix caches* — Performance optimization for prompt caching.
- **[PR #4353](https://github.com/HKUDS/nanobot/pull/4353)** — *fix(transcription): convert audio to WAV 16k mono before STT* — Fixes WhatsApp voice note transcription failures with providers like AssemblyAI.

---

## 4. Community Hot Topics

| Topic | Engagement | Link |
|---|---|---|
| **"Ultra-lightweight" claim vs. Node.js dependency** | 14 comments, 👍5 | [Issue #660](https://github.com/HKUDS/nanobot/issues/660) |
| **WebUI stuck streaming after self-restart** | 2 comments | [Issue #4500](https://github.com/HKUDS/nanobot/issues/4500) |
| **`exec` tool shell-chain bypass (security)** | 0 comments (new) | [Issue #4521](https://github.com/HKUDS/nanobot/issues/4521) |
| **Login-shell secrets reintroduction (security)** | 👍1 | [Issue #4518](https://github.com/HKUDS/nanobot/issues/4518) |

**Analysis:** The most-discussed item (#660) reflects a **trust and positioning gap** — users feel the "ultra-lightweight" branding is misleading given the Node.js + Python dual-runtime Docker requirement. This is a long-running issue (created 2026-02-14) that remains open and signals the project team may need to either adjust messaging or genuinely reduce the dependency footprint. The security issues around `exec` are newer and more urgent; the fact that two separate shell-execution vulnerabilities were reported within 48 hours suggests this subsystem is under active adversarial review.

---

## 5. Bugs & Stability

| Severity | Description | Status | Fix PR |
|---|---|---|---|
| 🔴 **Critical** | `exec.allowPatterns` shell-chain bypass allows arbitrary command execution (#4521) | Fix merged | [#4562](https://github.com/HKUDS/nanobot/pull/4562) |
| 🔴 **Critical** | Login-shell default in `exec` reintroduces secrets from shell startup files (#4518) | **Open — no fix PR yet** | — |
| 🟠 **High** | WebUI stuck in "processing" after gateway self-restart; stop button broken (#4500) | Fix in progress | [#4565](https://github.com/HKUDS/nanobot/pull/4565) |
| 🟡 **Medium** | Session key collision on disk after filename sanitization (#4057) | Fixed | [#4533](https://github.com/HKUDS/nanobot/pull/4533) |
| 🟡 **Medium** | Anthropic provider emits content blocks without `type` (#4060) | Fixed | [#4532](https://github.com/HKUDS/nanobot/pull/4532) |
| 🟡 **Medium** | Stream delta coalescing merges distinct streams (#4063) | Fixed | [#4531](https://github.com/HKUDS/nanobot/pull/4531) |
| 🟡 **Medium** | OpenAI-compatible non-stream parser preserves duplicate tool call IDs (#4059) | Fixed | [#4530](https://github.com/HKUDS/nanobot/pull/4530) |
| 🟢 **Low** | Corrupted session files where `last_consolidated` > message count | Fixed | [#3712](https://github.com/HKUDS/nanobot/pull/3712) |
| 🟢 **Low** | Flaky test due to identical mtimes on modern filesystems | Fixed | [#4523](https://github.com/HKUDS/nanobot/pull/4523) |

**Stability Assessment:** The project is in a **rapid remediation cycle**. Five medium-severity bugs were fixed in a single coordinated push by one contributor, which is excellent responsiveness. The two critical security findings around `exec` are the primary concern — one is patched, the other still needs a fix.

---

## 6. Feature Requests & Roadmap Signals

| Feature | Signal Strength | PR / Issue | Likelihood |
|---|---|---|---|
| **Per-session model preset** | Strong — open PR, clear use case | [#4555](https://github.com/HKUDS/nanobot/pull/4555) | High |
| **Dream model override wiring** | Strong — open PR, fixes tracked issue #4029 | [#4556](https://github.com/HKUDS/nanobot/pull/4556) | High |
| **Ask-clarification tool** | Moderate — new built-in tool, addresses agent UX gap | [#4527](https://github.com/HKUDS/nanobot/pull/4527) | Medium-High |
| **Serper.dev web search provider** | Moderate — follows existing provider pattern | [#4406](https://github.com/HKUDS/nanobot/pull/4406) | Medium |
| **MCP image content as artifacts** | Moderate — fixes a serialization bug with images | [#4542](https://github.com/HKUDS/nanobot/pull/4542) | Medium |
| **Agent verification gates & provider recovery** | Moderate — reliability layer, large scope | [#4534](https://github.com/HKUDS/nanobot/pull/4534) | Medium |
| **System prompt cache breakpoint optimization** | Lower — performance, narrow impact | [#4371](https://github.com/HKUDS/nanobot/pull/4371) | Lower |
| **Reduce Node.js dependency / truly lightweight** | Weak signal — long-open issue, no PR | [#660](https://github.com/HKUDS/nanobot/issues/660) | Low (no active work) |

**Prediction:** The next release (likely **v0.2.3** or **v0.3.0**) will probably include the per-session model preset, Dream model override, exec security fixes, and WebUI streaming fix. The ask-clarification tool and Serper.dev integration are strong candidates if review bandwidth allows.

---

## 7. User Feedback Summary

**Pain Points:**
- **Trust/positioning gap:** Users are flagging that the "ultra-lightweight" marketing doesn't match the actual Docker dependency footprint (Python + Node.js). This has been an open concern for 4+ months without resolution ([Issue #660](https://github.com/HKUDS/nanobot/issues/660)).
- **Security anxiety:** Two `exec` tool vulnerabilities reported in rapid succession are making users nervous about running shell-accessible agents, especially with LLM-driven command generation. The community expects a thorough security audit of the `exec` subsystem.
- **WebUI reliability:** The stuck-streaming bug ([Issue #4500](https://github.com/HKUDS/nanobot/issues/4500)) degrades the primary user experience — users see perpetual loading states and cannot cancel tasks.

**Positive Signals:**
- The coordinated bug-fix sprint (5 fixes from axelray-dev in ~48 hours) demonstrates **strong contributor engagement** and responsive triage.
- Feature PRs like per-session model presets and ask-clarification show the project is maturing toward **multi-tenant and interactive agent use cases**.
- The cron silent-mode feature ([PR #4225](https://github.com/HKUDS/nanobot/pull/4225)) addresses a real monitoring/automation use case, expanding NanoBot beyond pure chat.

**Overall Satisfaction:** Cautiously positive. The project is clearly in active development with responsive maintainers, but the security findings and the unresolved "lightweight" branding issue are eroding confidence among more technical users.

---

## 8. Backlog Watch

| Item | Age / Status | Why It Matters |
|---|---|---|
| **[Issue #660](https://github.com/HKUDS/nanobot/issues/660)** — "Ultra-lightweight" claim vs. Node.js dep | 135 days open, 14 comments, 👍5 | Reputation risk; longest-running unresolved discussion |
| **[Issue #4518](https://github.com/HKUDS/nanobot/issues/4518)** — Login-shell secrets reintroduction | 3 days open, **no fix PR** | Critical security; needs immediate attention and likely a CVE |
| **[Issue #4500](https://github.com/HKUDS/nanobot/issues/4500)** — WebUI stuck streaming | 4 days open, fix PR in review | Primary UX bug; fix PR #4565 needs merge |
| **[PR #4534](https://github.com/HKUDS/nanobot/pull/4534)** — Agent verification gates & provider recovery | 2 days open, no reviews | Large-scope reliability work; may need breaking up |
| **[PR #4406](https://github.com/HKUDS/nanobot/pull/4406)** — Serper.dev web search provider | 10 days open, no reviews | Straightforward feature; seems ready for review |
| **[PR #4371](https://github.com/HKUDS/nanobot/pull/4371)** — System prompt cache breakpoint | 12 days open, no reviews | Performance win; low risk, should be easy to merge or close |

**Maintainer Action Items:**
1. **Prioritize a fix or advisory for [#4518](https://github.com/HKUDS/nanobot/issues/4518)** — this is a critical security issue with no PR yet.
2. **Review and merge [#4565](https://github.com/HKUDS/nanobot/pull/4565)** to resolve the most user-visible bug.
3. **Acknowledge or resolve [#660](https://github.com/HKUDS/nanobot/issues/660)** — even a documented position statement would reduce community friction.
4. **Triage stale PRs** (#4406, #4371) that have been open 10+ days without review signals.

---

*Generated 2026-06-28 from GitHub activity data. All links reference `HKUDS/nanobot`.*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-06-28

## 1. Today's Overview

Hermes Agent remains a **very high-activity project** with 50 issue updates and 50 PR updates in the last 24 hours. The project is issue-heavy: 47 of 50 issues are open, suggesting a significant backlog accumulation. No new releases have been published — the current latest stable appears to be in the v0.15.x–v0.16.0 range, with multiple unreleased fixes stacking up in open PRs. The community is actively contributing across multiple domains: Bedrock/OpenAI Responses integration, Telegram gateway hardening, Windows stability improvements, MCP OAuth fixes, and a major desktop i18n push. Several closed PRs (3 today) addressed `hermes update` UX, DeepSeek auth, and a Telegram art-trivia skill. **Project momentum is strong on the PR side, but the open-issue backlog is ballooning and may become a concern if not triaged.**

## 2. Releases

No new releases published today. Multiple merged PRs (DeepSeek auth fix, `--show-commits` update flag, art-trivia skill) appear to be queued for the next release cycle. Community members on issues are reporting use of `v0.15.x` and `v0.16.0`, suggesting these are the current stable targets.

## 3. Project Progress (Merged/Closed PRs)

The following PRs were merged or closed in the last 24 hours:

- **[PR #29622](https://github.com/NousResearch/hermes-agent/pull/29622)** — fix: honor DeepSeek config `api_key` — built-in DeepSeek provider now uses `config.yaml` `model.api_key` when no runtime or env key is present.
- **[PR #19506](https://github.com/NousResearch/hermes-agent/pull/19506)** — feat(cli): `--show-commits` flag on `hermes update` — users can now see what changed before or after pulling updates, addressing visibility complaints.
- **[PR #17297](https://github.com/NousResearch/hermes-agent/pull/17297)** — feat: `on-this-day-art-trivia` Telegram skill — an opt-in AI-generated art history guessing game with scoring and streaks.
- **[PR #29686](https://github.com/NousResearch/hermes-agent/pull/29686) [CLOSED]** — DeepSeek auth improvements (closed variant).

**Assessment:** Meaningful quality-of-life improvements shipping — the `--show-commits` flag directly responds to user confusion about update contents, and the DeepSeek auth fix removes a common setup friction point.

## 4. Community Hot Topics

Ranked by engagement (comments + reactions), these are the most discussed active topics:

| # | Item | URL | Reactions | Core Need |
|---|------|-----|-----------|-----------|
| 1 | **Improved Dashboard Themes** (Issue #18080) | [link](https://github.com/NousResearch/hermes-agent/issues/18080) | 44 👍, 25 comments | Better readability/accessibility; users find current serif fonts and low-contrast colors hard to use |
| 2 | **Configurable approval-locked command patterns** (Issue #5528) | [link](https://github.com/NousResearch/hermes-agent/issues/5528) | 11 👍, 4 comments | Enterprise/safety users want to customize which commands require approval without patching source |
| 3 | **Linux install stuck at Playwright Chromium** (Issue #35166) | [link](https://github.com/NousResearch/hermes-agent/issues/35166) | 5 👍, 6 comments | Zero-install friction on Linux blocked by a hanging dependency download at first run |
| 4 | **Windows compile fails during `hermes update`** (Issue #40187) | [link](https://github.com/NousResearch/hermes-agent/issues/40187) | 1 👍, 14 comments | Windows desktop app cannot be updated/compiled via CLI |
| 5 | **Context compaction deletes Telegram messages visually** (Issue #40416) | [link](https://github.com/NousResearch/hermes-agent/issues/40416) | 1 👍, 4 comments | Poor UX — user chat history appears to vanish during internal compaction |
| 6 | **Desktop multilingual i18n** (PR #38846) | [link](https://github.com/NousResearch/hermes-agent/pull/38846) | — | 15 languages, 861 locale keys — major community i18n push |
| 7 | **self-created skills lack correctness guarantees** (Issue #25833) | [link](https://github.com/NousResearch/hermes-agent/issues/25833) | — | Safety gap in auto-generated skill execution |
| 8 | **Russian locale desktop installer** (Issue #40347) | [link](https://github.com/NousResearch/hermes-agent/issues/40347) | 5 comments | Community-provided Russian localization with pre-made installer |

**Underlying trend:** The most engaged issues cluster around **readability/accessibility** (themes), **safety configurability** (approval patterns), and **platform-specific install/update reliability** (Windows, Linux). These are all adoption-blocking for non-trivial user segments.

## 5. Bugs & Stability

### Critical / P0
 None reported today.

### High Severity (P1)

| Issue | URL | Status | Description |
|-------|-----|--------|-------------|
| **Playwright Chromium install stuck** | [#35166](https://github.com/NousResearch/hermes-agent/issues/35166) | OPEN, 6 comments | `npx playwright install --with-deps chromium` hangs with uninterruptible Ctrl+C on Kubuntu 26.04 — blocks all installation |

### Medium Severity (P2)

| Issue | URL | Status | Fix PR? |
|-------|-----|--------|---------|
| **Desktop crashes on Windows 11 startup** | [#38216](https://github.com/NousResearch/hermes-agent/issues/38216) | OPEN, 8 comments | Breakpoint exception `0x80000003` at consistent offset, AMD Ryzen 9800X3D + RX 6800 XT |
| **Nix build broken by package-lock.json update** | [#52919](https://github.com/NousResearch/hermes-agent/issues/52919) | **CLOSED**, 9 comments | Commit `ff813659` removed deps from tree but not package-lock; fixed |
| **Windows `hermes update`/`hermes desktop` compile fail** | [#40187](https://github.com/NousResearch/hermes-agent/issues/40187) | OPEN, 14 comments | Electron 40.9.3 builder failure at cross-platform compile stage |
| **NVIDIA NIM `chat_template_kwargs` stripped** | [#50703](https://github.com/NousResearch/hermes-agent/issues/50703) | OPEN, 5 comments | **Fix PR: [#53878](https://github.com/NousResearch/hermes-agent/pull/53878)** — hoists kwargs to top-level |
| **Desktop auxiliary model switch preserves stale base_url** | [#41092](https://github.com/NousResearch/hermes-agent/issues/41092) | OPEN, 4 comments | Config doesn't clear old endpoint when switching providers |
| **Telegram draft-failure cascade → 4-min flood silence** | — | — | **Fix PR: [#53865](https://github.com/NousResearch/hermes-agent/pull/53865)** — prevents failed draft from breaking all subsequent delivery |
| **Session resume loses in-progress state** | [#51089](https://github.com/NousResearch/hermes-agent/issues/51089) | OPEN, 1 comment | Tool-loop/compression state lost if process stops mid-turn |
| **Windows terminal flashes cmd on every command** | [#42544](https://github.com/NousResearch/hermes-agent/issues/42544) | OPEN, 2 comments | **Fix PR: [#53879](https://github.com/NousResearch/hermes-agent/pull/53879)** — hides backend subprocess windows |
| **Discord voice crashes on Linux** | [#53874](https://github.com/NousResearch/hermes-agent/issues/53874) | **NEW today** | `windows_hide_flags` NameError in `pcm_to_wav` — clearly Windows-only guard missing |
| **copilot token detection flashes gh/tzutil on Windows** | [#53781](https://github.com/NousResearch/hermes-agent/issues/53781) | OPEN, 1 comment | Focus-stealing subprocess launches on Windows even when Copilot isn't configured |
| **content_hash order-unstable on Path objects** | [#53404](https://github.com/NousResearch/hermes-agent/issues/53404) | OPEN | **Fix PR: [#53877](https://github.com/NousResearch/hermes-agent/pull/53877)** |
| **skills update doesn't refresh content_hash** | [#41176](https://github.com/NousResearch/hermes-agent/issues/41176) | OPEN, 2 comments | Permanent false `update_available` warnings |
| **char_limit/memory_char_limit config not applied after restart** | [#53834](https://github.com/NousResearch/hermes-agent/issues/53834) | OPEN, NEW | Stale config enforced despite gateway restart |
| **memory tool UnicodeDecodeError on non-UTF-8 USER.md** | [#53833](https://github.com/NousResearch/hermes-agent/issues/53833) | OPEN, NEW | No fallback encoding handling |
| **Telegram non-overflow replies duplicated** | [#53449](https://github.com/NousResearch/hermes-agent/issues/53449) | OPEN, NEW | Short/medium replies (>4096 chars not the cause) arrive as two identical messages |
| **Desktop remote gateway file browser ENOENT** | [#43042](https://github.com/NousResearch/hermes-agent/issues/43042) | OPEN, 3 comments | Sidebar flashes correct contents then resets after `session.info` event |

### Low Severity (P3)

| Issue | URL |
|-------|-----|
| Computer-use idle CPU consumption | [#28152](https://github.com/NousResearch/hermes-agent/issues/28152) |
| Desktop skill ratings/downloads display | [#53856](https://github.com/NousResearch/hermes-agent/issues/53856) |
| Session history semantic search | [#44075](https://github.com/NousResearch/hermes-agent/issues/44075) |

**Stability verdict:** The most concerning pattern is **Windows platform fragility** — crashes on startup (#38216), compile failures (#40187), terminal flashing (#42544, #53781), and Discord voice (#53874, likely a missing platform guard). Fix PRs exist for flashing and the content_hash issue. The **NVIDIA NIM fix** (#53878) is particularly important for enterprise deployments using NIM-based models. The **Discord voice crash** (#53874) is a clear regression that needs an expedited fix — it's a Windows-only code path leaking into Linux.

## 6. Feature Requests & Roadmap Signals

These issues represent the strongest signals for what's likely to ship or be prioritized next:

| Priority | Issue | URL | Likelihood Rationale |
|----------|-------|-----|---------------------|
| **🔴 High** | Semantic session history search (BM25 + vectors) | [#44075](https://github.com/NousResearch/hermes-agent/issues/44075) | Directly addresses agent memory/reliability; high architectural priority |
| **🔴 High** | Session resume state durability | [#51089](https://github.com/NousResearch/hermes-agent/issues/51089) | Core reliability issue; recent activity suggests active work |
| **🟠 Medium** | Bedrock OpenAI Responses support (`openai.gpt-5.5`) | [PR #53880](https://github.com/NousResearch/hermes-agent/pull/53880) | PR is fresh, well-scoped; fills model coverage gap for AWS users |
| **🟠 Medium** | Per-topic profile isolation for Telegram | [PR #53048](https://github.com/NousResearch/hermes-agent/pull/53048) | Active PR; enables multi-tenant bot use cases |
| **🟠 Medium** | Desktop i18n (15 languages) | [PR #38846](https://github.com/NousResearch/hermes-agent/pull/38846) | Large existing PR; near merge candidate |
| **🟡 Lower** | Configurable approval patterns | [#5528](https://github.com/NousResearch/hermes-agent/issues/5528) | Popular (11 👍) but requires security-review buy-in |
| **🟡 Lower** | Dashboard themes improvement | [#18080](https://github.com/NousResearch/hermes-agent/issues/18080) | Popular (44 👍) but cosmetic; may defer to post-stability focus |
| **🟡 Lower** | "Soul" / curiosity engine | [#53871](https://github.com/NousResearch/hermes-agent/issues/53871) | Ambitious; RFC-stage; likely months away |
| **🟡 Lower** | First-class claim verification | [#26742](https://github.com/NousResearch/hermes-agent/issues/26742) | Interesting but vague; needs specification |

**Prediction for next version:** The `openai.gpt-5.5` Bedrock fix, the Discord voice Linux fix, and the Telegram draft-failure cascade fix are the most likely immediate-merge candidates. Expect a patch release focusing on Windows stability and Telegram gateway reliability.

## 7. User Feedback Summary

| Sentiment | Key Themes |
|-----------|------------|
| **😊 Positive** | Auto-skill creation praised as a standout capability; `--show-commits` update received well; Telegram art-trivia skill adds fun community engagement |
| **😐 Neutral/Constructive** | i18n expanders and locale providers showing strong community ownership — Russian and multilingual PRs indicate international user base |
| **😠 Frustrated** | **Installation/update reliability** is the top pain point across platforms: hanging Unix installers, broken Nix builds, failing Windows compile; **Config persistence** — users report changes not taking effect after restart; **Transparency** — users want to see what's in updates and understand why crashes happen; **Stability consistency** — works fine for some, completely broken for others (Win+Linux fragmentation) |

**Net assessment:** Hermes has a passionate contributor base, but the user experience gap between "it works on my machine" and "it fails on setup" is significant. The sentiment in #32817 (calling the project "chaotic, poorly-documented, constantly-breaking") — while harsh and affected by LLM-assisted writing — reflects a real pattern: **onboarding reliability is the #1 retention risk.** Users who survive the setup phase appear to value the agent's capability deeply, but too many never get there.

## 8. Backlog Watch — Items Needing Maintainer Attention

| Priority | Issue | URL | Age | Why It Matters |
|----------|-------|-----|-----|----------------|
| **🔴 Urgent** | Discord voice crashes Linux (#53874) | [link](https://github.com/NousResearch/hermes-agent/issues/53874) | 1 day | Platform-guard regression; likely blocks all Linux Discord voice users |
| **🔴 Urgent** | Windows compile failure on update (#40187) | [link](https://github.com/NousResearch/hermes-agent/issues/40187) | 22 days | Complete CLI update blocker for Windows; 14 comments of people stuck |
| **🟠 High** | Playwright install hangs Linux (#35166) | [link](https://github.com/NousResearch/hermes-agent/issues/35166) | 28 days | Blocks first-run for all Linux fresh installs |
| **🟠 High** | Windows desktop crashes on startup (#38216) | [link](https://github.com/NousResearch/hermes-agent/issues/38216) | 25 days | Consistent crash on modern AMD hardware — potential driver/platform issue |
| **🟠 High** | Session state loss on process stop (#51089) | [link](https://github.com/NousResearch/hermes-agent/issues/51089) | 6 days | Data-loss scenario; agent loses completed work |
| **🟡 Medium** | Config changes ignored after gateway restart (#53834) | [link](https://github.com/NousResearch/hermes-agent/issues/53834) | 2 days | Erodes trust in the config file as source of truth |
| **🟡 Medium** | Duplicate Telegram replies (#53449) | [link](https://github.com/NousResearch/hermes-agent/issues/53449) | 2 days | Visible bug; Telegram is a major platform adapter |
| **🟡 Medium** | NVIDIA NIM thinking mode broken (#50703) | [link](https://github.com/NousResearch/hermes-agent/issues/50703) | 6 days | Fix PR exists (#53878) — should merge |
| **🟡 Medium** | OCR/image proxy policy on macOS (#53702) | [link](https://github.com/NousResearch/hermes-agent/issues/53702) | ~2 days | Fix PR exists (#53863) |
| **🟡 Medium** | Configurable approval patterns (#5528) | [link](https://github.com/NousResearch/hermes-agent/issues/5528) | 53 days | 11 upvotes, 4 comments — clear community demand for extensible security |
| **🟡 Medium** | Dashboard themes readability (#18080) | [link](https://github.com/NousResearch/hermes-agent/issues/18080) | 59 days | 44 upvotes — most-reacted issue; indicates heavy dashboard usage |

---

*Digest generated from GitHub data as of 2026-06-28. All links reference the `NousResearch/hermes-agent` repository.*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-06-28

---

## 1. Today's Overview

PicoClaw shows **moderate but healthy activity** with 3 issues and 7 PRs updated in the last 24 hours. The project is in an active maintenance and feature-development phase: two significant stale PRs were closed after resolution, one new bug was reported, and five open PRs are awaiting review — spanning a new communication channel (Simplex), infrastructure chores, i18n fixes, and a LINE channel bugfix. No new releases were published, suggesting the team is accumulating changes for a future release. The overall signal is a maturing project with a steady contributor base and growing channel-integration surface area.

---

## 2. Releases

**None.** No new versions were published in the reporting window.

---

## 3. Project Progress

Two stale PRs were closed/merged on 2026-06-27, representing completed work:

- **[PR #2937](https://github.com/sipeed/picoclaw/pull/2937) — Feat/agent collaboration (CLOSED)**
  Introduces a first-class **Agent Collaboration Bus** with per-agent mailboxes, collaboration threads with isolated session history, structured message envelopes, and delivery state tracking. This is a significant architectural addition enabling durable inter-agent communication.

- **[PR #3048](https://github.com/sipeed/picoclaw/pull/3048) — fix(mcp): reject unknown pre-positional flags in add (CLOSED)**
  Fixes an argument-parsing edge case in `mcp add` where root-level persistent flags (e.g., `--no-color`) could leak into the custom parser due to `DisableFlagParsing: true`.

Five PRs remain **open** and represent the immediate pipeline:

| PR | Description | Author |
|---|---|---|
| [#3193](https://github.com/sipeed/picoclaw/pull/3193) | Added Simplex channel type (new feature) | dim |
| [#3189](https://github.com/sipeed/picoclaw/pull/3189) | fix(line): ignore resp.Body.Close() errors & classifySDKError | chengzhichao-xydt |
| [#3192](https://github.com/sipeed/picoclaw/pull/3192) | chore(docker): bump goreleaser base alpine:3.21 → 3.23 | chengzhichao-xydt |
| [#3191](https://github.com/sipeed/picoclaw/pull/3191) | chore: remove duplicate build/ entry in .gitignore | chengzhichao-xydt |
| [#3190](https://github.com/sipeed/picoclaw/pull/3190) | fix(i18n): sync missing locale keys to bn-in and cs translations | chengzhichao-xydt |

---

## 4. Community Hot Topics

- **[Issue #2472](https://github.com/sipeed/picoclaw/issues/2472) — `list_dir` returns "invalid argument" on Windows (7 👍, 7 comments)**
  A Windows path-severity bug where backslashes are passed to Go's `fs.FS`/`os.Root`, which requires forward slashes. Closed on 2026-06-27, likely resolved by a recent fix. This was a long-running issue (created 2026-04-10), indicating Windows compatibility is a recurring pain point.

- **[Issue #3114](https://github.com/sipeed/picoclaw/issues/3114) — Telegram permission granularity by conversation type (1 👍, 2 comments)**
  Requests per-conversation-type access control (private chat vs. group vs. channel) for the Telegram integration. Closed as stale — the underlying need for **security boundary enforcement in multi-user group chats** remains unaddressed and is likely to resurface.

- **[PR #2937](https://github.com/sipeed/picoclaw/pull/2937) — Agent Collaboration Bus**
  The largest architectural PR recently closed. Signals PicoClaw is moving toward **multi-agent orchestration**, a notable strategic direction.

---

## 5. Bugs & Stability

| Severity | Issue | Status | Fix PR |
|---|---|---|---|
| 🔴 **Medium** | [#3194](https://github.com/sipeed/picoclaw/issues/3194) — Matrix "Received encrypted message but crypto is not enabled" | **OPEN** — reported 2026-06-27 | None yet |
| 🟡 **Low** | [#2472](https://github.com/sipeed/picoclaw/issues/2472) — Windows `list_dir` path separator mismatch | **CLOSED** 2026-06-27 | Presumably resolved |
| 🟡 **Low** | [#3189](https://github.com/sipeed/picoclaw/pull/3189) — LINE channel `resp.Body.Close()` error handling | **OPEN PR** (fix proposed) | Self-fix PR open |

**Assessment:** Issue #3194 is the only active bug and deserves prompt attention — Matrix encryption errors can cause message processing failures for users with encrypted rooms. No crash-level or data-loss regressions reported.

---

## 6. Feature Requests & Roadmap Signals

| Signal | Item | Prediction |
|---|---|---|
| **Simplex channel** | [PR #3193](https://github.com/sipeed/picoclaw/pull/3193) — new channel type | Likely to land in next release; expands PicoClaw's multi-platform messaging strategy |
| **Agent Collaboration Bus** | [PR #2937](https://github.com/sipeed/picoclaw/pull/2937) — merged | Foundation for multi-agent workflows; expect follow-up features building on this |
| **Telegram permission tiers** | [Issue #3114](https://github.com/sipeed/picoclaw/issues/3114) — closed as stale | Unaddressed need; may be prioritized if community demand grows |
| **i18n expansion** | [PR #3190](https://github.com/sipeed/picoclaw/pull/3190) — locale key sync | Ongoing maintenance; indicates an active international user base |

**Next version prediction:** v0.2.7 or v0.3.0 will likely include the Simplex channel, Agent Collaboration Bus, and accumulated bugfixes. A Windows path-handling fix may also be included given the #2472 resolution.

---

## 7. User Feedback Summary

- **Windows users** continue to encounter friction (#2472). The 7-comment, 7-👍 engagement shows this affects multiple users. Resolution is a positive signal, but Windows compatibility should be added to CI to prevent regressions.
- **Security-conscious users** deploying bots in group chat environments (#3114) are requesting **principle-of-least-privilege controls** — the ability to restrict dangerous operations (shell exec, file writes) in group/channel contexts while allowing them in DMs. This reflects real-world production deployments.
- **Matrix users** hitting encryption errors (#3194) may be silently failing to process messages in encrypted rooms — a potentially high-impact issue for privacy-focused deployments.
- **Contributor activity** is healthy: multiple contributors (chengzhichao-xydt with 4 PRs, afjcjsbx with 2 PRs) are driving incremental improvements, suggesting a growing and engaged contributor base.

---

## 8. Backlog Watch

| Item | Age | Risk | Recommendation |
|---|---|---|---|
| [#3194](https://github.com/sipeed/picoclaw/issues/3194) — Matrix encryption error | 1 day | 🔴 Medium — message processing failure | Needs triage and fix PR |
| [#3114](https://github.com/sipeed/picoclaw/issues/3114) — Telegram permission tiers | 16 days (closed stale) | 🟡 Low-Medium — security gap | Consider reopening or tracking as a roadmap item |
| [#3193](https://github.com/sipeed/picoclaw/pull/3193) — Simplex channel PR | 1 day | 🟡 Low — awaiting review | Review and merge to keep contributor momentum |
| [#3189](https://github.com/sipeed/picoclaw/pull/3189) — LINE channel error handling | 1 day | 🟡 Low — minor robustness fix | Quick review candidate |

**Maintainer attention needed:** Issue #3194 (Matrix encryption) should be prioritized as it affects a core channel integration. PR #3193 (Simplex) is a clean new-feature PR that should be reviewed promptly to maintain contributor engagement. Issue #3114, while closed, represents an unresolved **security boundary** concern that may warrant tracking as a formal roadmap item rather than leaving to go stale.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-06-28

## 1. Today's Overview

NanoClaw shows moderate development activity with 8 open PRs and 1 open issue updated in the last 24 hours, but no new releases and no merged PRs during this window. The project is in an accumulation phase: contributors are pushing fixes and features, but nothing has crossed the finish line today. The most active area is skill/container infrastructure maintenance, with a notable bug fix for `/update-skills` (Issue [#2868](https://github.com/nanocoai/nanoclaw/issues/2868)) already paired with a PR. Two feature PRs from the same contributor (grantland) add dashboard telemetry and per-group model overrides for OpenCode, suggesting active expansion of the multi-agent orchestration layer. Overall the project appears healthy — busy with contributions but potentially bottlenecked on review/merge throughput.

## 2. Releases

No new releases in the reporting window. The most recent CHANGELOG entry references an `[Unreleased]` migration note tied to channel skill updates (PR [#2873](https://github.com/nanocoai/nanoclaw/pull/2873)), indicating a release is being prepared but has not yet been cut.

## 3. Project Progress

**No PRs were merged or closed in the last 24 hours.** All 8 updated PRs remain open. The following PRs represent the most advanced work based on recency and connection to reported bugs:

| PR | Author | Purpose | Status |
|---|---|---|---|
| [#2873](https://github.com/nanocoai/nanoclaw/pull/2873) | glifocat | Fix: split pre-flight from credentials so `/update-skills` refreshes code (fixes #2868) | Open |
| [#2874](https://github.com/nanocoai/nanoclaw/pull/2874) | bogdano2 | Fix: survive signal-cli boot flaps instead of crash-looping | Open |
| [#2871](https://github.com/nanocoai/nanoclaw/pull/2871) | grantland | Feat: dashboard pusher with OpenCode support | Open |
| [#2872](https://github.com/nanocoai/nanoclaw/pull/2872) | grantland | Feat: per-group model override via `container_configs.model` | Open |
| [#2875](https://github.com/nanocoai/nanoclaw/pull/2875) | zczDief | Deploy: Coolify deployment config | Open |
| [#2822](https://github.com/nanocoai/nanoclaw/pull/2822) | CutSnake01 | Refactor: drop dead `/workspace/global` mount | Open (8 days old) |
| [#2823](https://github.com/nanocoai/nanoclaw/pull/2823) | CutSnake01 | Fix: remove `groups/global/CLAUDE.md` (host deletes on startup) | Open (8 days old) |
| [#2824](https://github.com/nanocoai/nanoclaw/pull/2824) | CutSnake01 | Fix: drop stale "Global Memory" instruction from seed prompt | Open (8 days old) |

## 4. Community Hot Topics

**Issue [#2868](https://github.com/nanocoai/nanoclaw/issues/2868)** — `/update-skills` is a silent no-op for already-installed channels (1 comment, open since 2026-06-26)
- **Author:** glifocat
- **Core problem:** The `/update-skills` command skips the actual adapter code and dependency refresh when a channel is already installed, making it effectively a no-op. This silently breaks the documented migration path in the CHANGELOG.
- **Signal:** This is a correctness bug in a core user-facing command. The fact that it has a fix PR already ([:#2873](https://github.com/nanocoai/nanoclaw/pull/2873)) filed within ~24 hours suggests the maintainer is responsive, but the PR hasn't been merged yet.
- **Underlying need:** Users managing multi-channel setups need reliable skill update mechanics — this is a trust/UX issue where the tool lies about what it did.

**PR [#2871](https://github.com/nanocoai/nanoclaw/pull/2871) + [#2872](https://github.com/nanocoai/nanoclaw/pull/2872)** — Dashboard telemetry and per-group model overrides (both by grantland, both from 2026-06-27)
- **Signal:** These two PRs from the same author in the same burst suggest a coordinated push to make multi-agent orchestration observable and configurable. The dashboard pusher enables real-time monitoring; the model override enables cost/performance tiering across agent groups.
- **Underlying need:** As NanoClaw deployments scale to multiple concurrent agents, operators need observability and fine-grained model routing — this is infrastructure for production-grade multi-agent workflows.

## 5. Bugs & Stability

| Severity | Issue | Fix PR | Status |
|---|---|---|---|
| **Medium** | [#2868](https://github.com/nanocoai/nanoclaw/issues/2868) — `/update-skills` silently skips code/deps refresh on installed channels | [#2873](https://github.com/nanocoai/nanoclaw/pull/2873) (open, not merged) | Fix pending |
| **Medium** | [#2874](https://github.com/nanocoai/nanoclaw/pull/2874) — signal-cli boot flaps cause crash-loop (PR is the fix) | Self-contained PR | Fix pending |
| **Low** | [#2823](https://github.com/nanocoai/nanoclaw/pull/2823) — `groups/global/CLAUDE.md` gets deleted on every host startup | Self-contained PR | Fix pending (8 days stale) |
| **Low** | [#2824](https://github.com/nanocoai/nanoclaw/pull/2824) — stale "Global Memory" instruction in seed prompt | Self-contained PR | Fix pending (8 days stale) |

**Assessment:** No new bugs were reported today. The signal-cli crash-loop ([#2874](https://github.com/nanocoai/nanoclaw/pull/2874)) is the most stability-critical item — a crash-loop on a messaging channel is a high-impact failure mode for users relying on Signal integration. The `/update-skills` bug is a correctness issue that undermines user trust in the skill management workflow.

## 6. Feature Requests & Roadmap Signals

| Signal | PR | Likelihood of Next Version |
|---|---|---|
| Dashboard pusher / telemetry | [#2871](https://github.com/nanocoai/nanoclaw/pull/2877) | **High** — new feature, clean PR, addresses clear ops gap |
| Per-group model override for OpenCode | [#2872](https://github.com/nanocoai/nanoclaw/pull/2872) | **High** — same author, same burst, natural pairing with #2871 |
| Coolify deployment support | [#2875](https://github.com/nanocoai/nanoclaw/pull/2875) | **Medium** — infrastructure/deployment, useful but narrower audience |

**Prediction:** The next release (likely v4.30 or equivalent) will include the `/update-skills` fix, signal-cli resilience, dashboard telemetry, and per-group model overrides. The CutSnake01 PRs ([#2822](https://github.com/nanocoai/nanoclaw/pull/2822), [#2823](https://github.com/nanocoai/nanoclaw/pull/2823), [#2824](https://github.com/nanocoai/nanoclaw/pull/2824)) are smaller cleanups that could be fast-tracked as low-risk merges.

## 7. User Feedback Summary

- **Pain point — Silent no-ops in skill management:** The `/update-skills` issue ([#2868](https://github.com/nanocoai/nanoclaw/issues/2868)) reveals a UX pattern where commands report success but don't perform meaningful work. This is particularly dangerous because the CHANGELOG migration explicitly tells users to "re-run `/add-<channel>`" — users following docs hit a silent failure.
- **Pain point — Signal channel reliability:** The crash-loop fix ([:#2874](https://github.com/nanocoai/nanoclaw/pull/2874)) indicates that `signal-cli` integration has a fragile boot sequence. Users on Signal are likely experiencing intermittent outages.
- **Positive signal — Multi-agent production use:** The dashboard and model override PRs suggest real users are running multi-agent, multi-model deployments and need operational tooling. This is a maturity signal for the project.
- **Satisfaction indicator:** All PRs carry the `follows-guidelines` label, suggesting contributors find the contribution process clear and the project well-structured.

## 8. Backlog Watch

| Item | Age | Risk | Recommendation |
|---|---|---|---|
| [#2822](https://github.com/nanocoai/nanoclaw/pull/2822) — Drop dead `/workspace/global` mount | 8 days | Low-risk refactor | Merge or close — stale mount cleanup |
| [#2823](https://github.com/nanocoai/nanoclaw/pull/2823) — Remove `groups/global/CLAUDE.md` | 8 days | Low-risk fix | Merge — host deletes file anyway, so keeping it is wasteful |
| [#2824](https://github.com/nanocoai/nanoclaw/pull/2824) — Drop stale "Global Memory" instruction | 8 days | Low-risk fix | Merge — stale prompt instructions degrade agent behavior |
| [#2873](https://github.com/nanocoai/nanoclaw/pull/2873) — Fix `/update-skills` pre-flight | 2 days | Medium, blocks release | Priority merge — referenced by CHANGELOG migration |
| [#2874](https://github.com/nanocoai/nanoclaw/pull/2874) — signal-cli crash-loop | 2 days | Medium-High, user-facing outage | Priority merge — crash-loops are production-critical |

**Maintainer attention needed:** The CutSnake01 trio ([#2822](https://github.com/nanocoai/nanoclaw/pull/2822)–[#2824](https://github.com/nanocoai/nanoclaw/pull/2824)) has been open for 8 days with no visible triage. These are small, low-risk changes that could be merged quickly to reduce backlog friction. PR [#2873](https://github.com/nanocoai/nanoclaw/pull/2873) is the most urgent active item since it unblocks a documented user migration path.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest — 2026-06-28

## 1. Today's Overview

NullClaw shows **low but focused activity** today with 1 updated issue and 1 new pull request, no new releases, and no merged PRs. The project appears to be in a **feature-development phase** centered on agent tool-safety mechanics. A single new PR (#969) introduces a structured approval flow for shell tool execution — a meaningful step toward safer agent autonomy. Meanwhile, a long-standing Android/Termux build failure (#868) was re-surfaced yesterday after ~2 months of silence, suggesting the reporter is still blocked. Overall, the project is stable but cadence is slow: no releases have been cut recently, and the open PR has yet to receive review or discussion.

---

## 2. Releases

**None.** No new releases were published today or in the recent tracked window.

---

## 3. Project Progress

| PR | Status | Summary |
|---|---|---|
| [#969](https://github.com/nullclaw/nullclaw/pull/969) — `feat(agent): structured approval_request / approval_response flow` | **OPEN** (created today) | Implements a two-turn tool approval flow: when a tool (e.g., shell) raises `error.ApprovalRequired`, the agent catches it, stores a `PendingApproval` state, and emits an `---approval---` event over SSE. The channel then renders an approval UI. This is a foundational safety mechanism for agent-driven operations. |

**No PRs were merged or closed today.** The sole open PR is brand new and has not yet received comments or reactions.

---

## 4. Community Hot Topics

| Item | Type | Engagement | Signal |
|---|---|---|---|
| [#868](https://github.com/nullclaw/nullclaw/issues/868) — Zig build fails on Android/Termux (aarch64) | Issue | 4 comments, last activity 2026-06-27 | **Platform portability** — a user on mobile/embedded Android (Termux, aarch64) cannot build NullClaw at all. The `linkat` syscall access-denied error points to a filesystem/sandbox limitation on Android. This is a hard blocker for mobile developers. |
| [#969](https://github.com/nullclaw/nullclaw/pull/969) — Structured approval flow | PR | New, no engagement yet | **Agent safety & UX** — signals demand for human-in-the-loop controls when agents execute privileged operations (shell commands). |

**Underlying need:** The community is pushing for both **broader platform support** (mobile/non-desktop) and **safer agent execution models** — two themes that will likely shape the roadmap.

---

## 5. Bugs & Stability

| Severity | Issue | Status | Fix PR? |
|---|---|---|---|
| 🔴 **High** — Build blocker on aarch64/Android | [#868](https://github.com/nullclaw/nullclaw/issues/868): `zig build` fails with `AccessDenied` on `options.zig linkat` on Termux | OPEN since 2026-04-23 (~66 days), re-raised 2026-06-27 | ❌ None |

**Analysis:** This is the only open bug in the tracked window. It is a **total build failure** for a non-trivial user segment (Android/Termux developers). The `linkat` error is likely a Zig stdlib or OS-sandbox issue rather than a NullClaw code bug, but it still blocks adoption. No maintainer response or fix PR is visible.

---

## 6. Feature Requests & Roadmap Signals

| Signal | Source | Likelihood of Near-Term Delivery |
|---|---|---|
| **Human-in-the-loop tool approval** | PR [#969](https://github.com/nullclaw/nullclaw/pull/969) | **High** — already in PR; needs review/merge |
| **Android/Termux build support** | Issue [#868](https://github.com/nullclaw/nullclaw/issues/868) | **Low** — open 66+ days, no assignee, likely requires upstream Zig or conditional compilation workarounds |

**Prediction:** If PR #969 is approved, the next release will likely feature the approval flow as a headline capability. Android support may remain unaddressed for the foreseeable future unless a community contributor picks it up.

---

## 7. User Feedback Summary

- **Pain point:** Android/Termux users **cannot build NullClaw at all** — a hard blocker with no workaround documented. The reporter (NOTJuanamer10) re-engaged after ~2 months, indicating persistent frustration.
- **Positive signal:** A contributor (valonmulolli) is actively building safety infrastructure (approval flow), suggesting the project is attracting developers who care about production-readiness.
- **Satisfaction:** Neutral-to-negative for mobile users; cautiously optimistic for agent-safety use cases.

---

## 8. Backlog Watch

| Item | Age | Risk | Recommended Action |
|---|---|---|---|
| [#868](https://github.com/nullclaw/nullclaw/issues/868) — Android/Termux build failure | **66 days** open | 🔴 Growing frustration; mobile developer segment blocked | Acknowledge, label, and either provide a workaround (e.g., cross-compile guide) or document as known limitation |
| [#969](https://github.com/nullclaw/nullclaw/pull/969) — Approval flow PR | **0 days** | 🟡 Needs first review to avoid stalling | Assign a reviewer; this is a high-value safety feature |

---

*Data source: [github.com/nullclaw/nullclaw](https://github.com/nullclaw/nullclaw) · Digest generated 2026-06-28*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-06-28

## 1. Today's Overview

IronClaw saw **high development velocity** over the past 24 hours: 12 issues updated (3 open, 9 closed) and 50 pull requests touched (28 open, 22 merged/closed). The project is dominated by the **Reborn capability-policy epic (#5261)** — a multi-PR effort to implement admin-shared tools and skills with per-user authorization — which shipped almost entirely in closed issues/PRs over the past 48 hours. Beyond that, the WebUI v2 channel-onboarding, QA automation, and OAuth reliability fronts are active with multiple open PRs. No new releases were cut; however, a release PR (#5311) with API-breaking changes to `ironclaw_common` (0.4.2 → 0.5.0) and `ironclaw_skills` (0.3.0 → 0.4.0) has been open since June 26. The nightly E2E suite is currently failing (#4108), which is a moderate concern.

## 2. Releases

**No new releases today.**

An open release PR (**#5311**, [link](https://github.com/nearai/ironclaw/pull/5311)) proposes the following bumps:

| Crate | From | To | Breaking? |
|---|---|---|---|
| `ironclaw_common` | 0.4.2 | 0.5.0 | ⚠️ Yes |
| `ironclaw_skills` | 0.3.0 | 0.4.0 | ⚠️ Yes |
| `ironclaw` | 0.24.0 | 0.29.1 | — |
| `ironclaw_safety` | 0.2.2 | 0.2.3 | ✅ Compatible |
| `ironclaw_skill_learning` | 0.1.0 | 0.1.1 | — |

**Two API-breaking crate bumps are notable.** Downstream consumers of `ironclaw_common` and `ironclaw_skills` should review the diff before this lands. The PR has been open for 2 days without merge — likely awaiting CI or manual review.

## 3. Project Progress

The **Reborn capability-policy epic (#5261)** was effectively **shipped** today through a chain of merged PRs ordered by dependency:

1. **[#5262](https://github.com/nearai/ironclaw/pull/5262)** — `ironclaw_capability_policy` crate: the four-dimension policy vocabulary (configuration, identity, availability, approval), precedence cascade, and the in-memory store-backed resolver. Foundation for everything.
2. **[#5270](https://github.com/nearai/ironclaw/pull/5270)** — DB-backed `UserRole` (Owner > Admin > Member) on the WebChat-v2 caller; the admin gate prerequisite. Includes REST-created local users surface.
3. **[#5344](https://github.com/nearai/ironclaw/pull/5344)** — Capability-policy engine: durable delta store (`FilesystemCapabilityPolicyDeltaStore`, libSQL/filesystem-backed) + `PolicyResolver` enforcing identity, config, and approval dimensions.
4. **[#5349](https://github.com/nearai/ironclaw/pull/5349)** — Availability dimension: `ScopedLifecyclePolicyCapabilitySurfaceResolver` that actually rewrites the model-visible tool surface based on per-user availability grants.
5. **[#5355](https://github.com/nearai/ironclaw/pull/5355)** — Control plane: REST admin-grant surface for all four dimensions, consuming the user-role gate.

All five PRs were merged on 2026-06-27. This is a **substantial permission-system deliverable** from contributor `zetyquickly` — the largest coordinated feature merge in recent memory.

Other merged items:
- **#5364** — "Always allow eligible tools" toggle defaulted to **ON** (reduces approval-prompt friction for new users). → [Issue](https://github.com/nearai/ironclaw/issues/5364)
- **#5378** — Closed (possibly resolved): Google OAuth token refresh failing with `BackendUnavailable` every ~1h on `hosted-single-tenant` / `local-dev` profiles. → [Issue](https://github.com/nearai/ironclaw/issues/5378)
- **#5382** — Fixed hosted-volume runtime startup regression introduced by #5346; added a libSQL-gated regression test. → [PR](https://github.com/nearai/ironclaw/pull/5382)
- **#5370** — Pinned WebUI v2 frontend Node tooling to Node 22 (`.node-version`, `.nvmrc`, `engines`, build-script rerun hint). → [PR](https://github.com/nearai/ironclaw/pull/5370)
- **#5271** — Dependabot: bumped 47 deps in the "everything-else" group (refinery 0.8→0.9, rustls, etc.). → [PR](https://github.com/nearai/ironclaw/pull/5271)

## 4. Community Hot Topics

Activity was high but **reaction/comment counts were uniformly low** (0 👍, ≤2 comments), suggesting these are developer-driven internal items rather than community-surfaced. The most architecturally significant active discussions:

| Item | Activity | Signal |
|---|---|---|
| **[#5385](https://github.com/nearai/ironclaw/issues/5385)** — "Add Capability Policy" | OPEN, created 2026-06-27 | New issue following the epic merge; requests fine-grained user configuration (owner/admin/member) likely iterating on the just-shipped policy system. |
| **[#5368](https://github.com/nearai/ironclaw/issues/5368)** — Wire non-Slack channel personal pairing e2e | OPEN, created 2026-06-27 | Signal that multi-channel support (beyond Slack) is a priority. Follow-up to #5362. |
| **[#5380](https://github.com/nearai/ironclaw/pull/5380)** — Expand Reborn WebUIv2 QA matrix coverage | OPEN, active today | Core contributor investing in QA automation; "spreadsheet-derived hermetic/matrix coverage" approach. |
| **[#5381](https://github.com/nearai/ironclaw/pull/5381)** — Reborn integration-test framework (slices 1–2) | OPEN, active today | Scripted-SDK integration tests running a full Reborn turn through real stack. Significant engineering investment. |
| **[#5354](https://github.com/nearai/ironclaw/pull/5354)** — Reborn WebUI v2 live QA canary | OPEN, active today | Playwright-driven live QA for WebUI v2. |

**Underlying need:** The team is building out a **testing and QA infrastructure** (matrix, canary, integration tests) in parallel with feature work — a sign of maturing engineering practices before scaling features further.

## 5. Bugs & Stability

| Severity | Item | Status |
|---|---|---|
| 🔴 **High** | **[#4108](https://github.com/nearai/ironclaw/issues/4108)** — Nightly E2E failed | OPEN, ongoing since 2026-05-27. The "Full E2E / E2E (extensions)" job failed on commit `5298504`. No linked fix PR. Any commit to `main` during this window may be on a broken baseline. |
| 🟡 **Medium** | **[#5378](https://github.com/nearai/ironclaw/issues/5378)** — Google OAuth re-auth every ~1h on hosted-single-tenant / `local-dev` | CLOSED today (likely fixed), but the symptom (hourly forced re-auth) would be severely disruptive to users of Gmail, Calendar, and Drive capabilities on Railway deploys. No linked fix PR visible — may have been closed as resolved-by-another-PR or stale. |
| 🟡 **Medium** | **[#4928](https://github.com/nearai/ironclaw/issues/4928)** — Notion OAuth redirects to localhost callback on Railway | Created 2026-06-15, updated 2026-06-27 (closed). Notion MCP is unusable on hosted deployments without a fix. |
| 🟢 **Low** | **[#5365](https://github.com/nearai/ironclaw/pull/5365)** — WebUI chat Retry button was a no-op stub (XL, open) | Fix in progress; trivial UX bug. |
| 🟢 **Low** | **[#5382](https://github.com/nearai/ironclaw/pull/5382)** — Hosted volume startup regression (PR #5346 breakage) | **FIXED & MERGED** today. |

**Nightly E2E failure (#4108)** is the most concerning item: it has been open for over a month and means the project lacks a green CI baseline. Until this is resolved, the risk of regressions shipping unnoticed is elevated.

## 6. Feature Requests & Roadmap Signals

| Signal | Prediction |
|---|---|
| **[#5385](https://github.com/nearai/ironclaw/issues/5385)** (open today) — Fine-grained capability policy config for owner/admin/member roles | **Likely in next iteration**, since the policy engine just shipped (#5261). This issue reads as the first user-facing follow-up. |
| **[#5368](https://github.com/nearai/ironclaw/issues/5368)** — Non-Slack channel personal pairing e2e | Likely **next 1–2 sprints**. Slack was explicitly called out as the only fully wired channel; this is the generalization. |
| **[#5380](https://github.com/nearai/ironclaw/pull/5380) / [#5381](https://github.com/nearai/ironclaw/pull/5381) / [#5354](https://github.com/nearai/ironclaw/pull/5354)** — QA infrastructure PRs | These landing soon would give the team confidence to ship features faster. Expect a **velocity increase** after merge. |
| **#5311 (release PR)** — Breaking changes to `ironclaw_common` 0.5.0 and `ironclaw_skills` 0.4.0 | Expected merge **very soon** (days, not weeks). External consumers should prepare. |
| **[#4841](https://github.com/nearai/ironclaw/pull/4841)** — Eliminate run-borking terminal errors; failure explanation + retryable failed runs (open since June 13, active today) | **High value, in progress.** This addresses operator-facing UX for run failures. Likely to merge incrementally. |

## 7. User Feedback Summary

| Pain Point | Evidence | Sentiment |
|---|---|---|
| **OAuth token expiry forcing hourly re-auth** (Google services) | [#5378](https://github.com/nearai/ironclaw/issues/5378) | 😠 Disruptive for hosted users relying on Gmail/Calendar/Drive. Was reported by community member, not core team. |
| **Notion OAuth unusable on Railway** | [#4928](https://github.com/nearai/ironclaw/issues/4928) | 😠 Blocks Notion MCP users on hosted deployments. Local-only workaround. |
| **Per-call approval prompts out-of-box** | [#5364](https://github.com/nearai/ironclaw/issues/5364) | 😐 Friction for new users. Fix: default toggle ON. |
| **Retry button does nothing** | [#5365](https://github.com/nearai/ironclaw/pull/5365) | 😠 Broken UX — users see the button but it silently fails. |
| **Fine-grained capability policy wanted** | [#5385](https://github.com/nearai/ironclaw/issues/5385) | 🎯 Feature request following epic merge — users want to configure permissions per role. |

Overall sentiment from external contributors is **mildly negative on reliability** (OAuth, E2E, Retry) but **constructive on capability policy** (new feature is landing). The core team is responsive — same-day closures on several items.

## 8. Backlog Watch

| Item | Age | Concern | Action Needed |
|---|---|---|---|
| **[#4108](https://github.com/nearai/ironclaw/issues/4108)** — Nightly E2E failure | **32 days** (since 2026-05-27) | The project's sole end-to-end green check is broken. Every merge is potentially onto a red baseline. | **Urgent.** Assign an owner, diagnose root cause, fix or disable flaky sub-jobs. |
| **[#4928](https://github.com/nearai/ironclaw/issues/4928)** — Notion OAuth localhost redirect | **13 days** (closed today) | Closed but unclear if actually fixed. A Railway user reported it works locally but not on deploy. | Verify resolution; if reopened, this is a deployment-blocker for Notion users. |
| **[#4841](https://github.com/nearai/ironclaw/pull/4841)** — Eliminate run-borking failures | PR open **15 days** (since 2026-06-13), actively updated today | XL scope, multi-area (agent, channel, tool, db, orchestrator, worker, secrets, extensions). High complexity but high value. | Help the contributor break into smaller mergeable slices if stuck. |
| **[#5114](https://github.com/nearai/ironclaw/pull/5114)** — Dependabot tokio-ecosystem updates | PR open **7 days** | Routine dep bumps stalled. Low risk but indicates CI/review bandwidth constraints. | Merge or close-and-recreate to get fresh CI run. |
| **[#4498](https://github.com/nearai/ironclaw/pull/4498)** — `serde_yml` 0.0.12 → 0.0.13 | PR open **23 days** | Single dep bump — likely conflicting or low priority. | Merge or supersede. |

**#4108 (Nightly E2E) is the single most important backlog item** for maintainer attention. A 31-day CI outage erodes confidence in every other change.

---

*Data cutoff: GitHub activity updated on or before 2026-06-28. All links reference [github.com/nearai/ironclaw](https://github.com/nearai/ironclaw).*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-06-28

---

## 1. Today's Overview

LobsterAI shows moderate maintenance activity with **8 PRs closed** and **2 new/updated issues** in the last 24 hours — but a critical pattern emerges: **all 8 closed PRs are stale** (created 2026-03 to 2026-05), finally merged or closed between June 26–27. This suggests the project recently cleared a significant backlog of accumulated PRs rather than pushing fresh work. The project's **last tagged release remains absent** from the data, with no new releases today. Two open, high-severity user-reported issues (installation freeze, data backup hang) are brand-new (last–2 days) and currently have no linked fix PRs. The relative ratio of bug fixes to feature work in the closed PRs is approximately 6:2, indicating a corrective maintenance phase.

---

## 2. Releases

**None today.** No new version tags observed. The absence of releases while stale PRs are being cleared suggests the maintainers may be batching changes for an upcoming release — or the release process has stalled.

---

## 3. Project Progress

All 8 closed PRs are stale items finally resolved. Key areas of advancement:

| PR | Status | Area | Summary |
|---|---|---|---|
| [#1001](https://github.com/netease-youdao/LobsterAI/pull/1001) | Closed | MCP / SSE | Adds SSE and streaming HTTP transport support for MCP servers, fixing configs that appeared synced but silently failed. |
| [#1446](https://github.com/netease-youdao/LobsterAI/pull/1446) | Closed | Gateway / OpenClaw | Fixes race condition causing infinite restart loop when gateway process exits during startup detection. Addresses [#1400](https://github.com/netease-youdao/LobsterAI/issues/1400). |
| [#1448](https://github.com/netease-youdao/LobsterAI/pull/1448) | Closed | i18n | Italian contributor fixes hardcoded English strings in Agent settings buttons and skill selector. |
| [#1449](https://github.com/netease-youdao/LobsterAI/pull/1449) | Closed | Cowork / UX | Collapses repeated scheduled-task execution records into grouped UI to prevent sidebar clutter. |
| [#1453](https://github.com/netease-youdao/LobsterAI/pull/1453) | Closed | Skills / Security | Fixes disabled skills still being injected into conversation prompts (sensitive UX — users believe skills are off but aren't). Addresses [#1439](https://github.com/netease-youdao/LobsterAI/issues/1439). |
| [#1454](https://github.com/netease-youdao/LobsterAI/pull/1454) | Closed | Scheduled Tasks | Fixes silent failure (no response, no error) when creating a non-repeating task with an empty date field. Addresses [#1437](https://github.com/netease-youdao/LobsterAI/issues/137). |
| [#1456](https://github.com/netease-youdao/LobsterAI/pull/1456) | Closed | Shortcuts | Adds duplicate-key detection in keyboard shortcut settings to prevent binding the same shortcut to multiple actions. |
| [#2065](https://github.com/netease-youdao/LobsterAI/pull/2065) | **Open** | Agent / IDs | Proposes short-UUID Agent IDs instead of name-based slugs to prevent "data resurrection" when recreating agents. Still open after 30+ days. |

**Net assessment:** The project is digesting a ~3-month PR backlog. Core reliability fixes (gateway restart loop, skill injection bug) are welcome, but the delay (created April, closed June) is notable.

---

## 4. Community Hot Topics

**No comments or 👍 reactions on any item today** — community engagement signals are flat.

The most structurally significant PRs by scope:

- **[#1446 — Gateway infinite restart loop](https://github.com/netease-youdao/LobsterAI/pull/1446):** Tags [#1400](https://github.com/netease-youdao/LobsterAI/issues/1400). A system-level race condition crashing the entire app. This likely generated significant user pain given the referenced issue, though today's data shows no visible engagement — possibly because it was resolved.
- **[#1453 — Disabled skills still injected](https://github.com/netease-youdao/LobsterAI/pull/1453):** Tags [#1439](https://github.com/netease-youdao/LobsterAI/issues/1439). A semantic/expectation mismatch that erodes user trust in the skill management system.
- **[#2214 — Data backup causes UI hang](https://github.com/netease-youdao/LobsterAI/issues/2214):** New, high severity, 100% reproducible on Windows 11 with WAL-mode SQLite. No linked PR yet.

 surfacing:**
- **Reliability first:** Gateway crashes, backup freezes, and silent failures dominate — users need baseline stability before new features.
- **Windows-specific friction:** Both new issues (#2215 install errors, #2214 backup hang) are Windows-only, suggesting the primary user base is on Windows and Windows-path testing may be under-resourced.

---

## 5. Bugs & Stability

| Severity | Issue | Platform | Status | Fix PR? |
|---|---|---|---|---|
|  **Critical** | [#2214](https://github.com/netease-youdao/LobsterAI/issues/2214) — "Data Backup" causes entire main process to hang/freeze (unresponsive). 100% reproducible with WAL-mode SQLite (~72MB DB). | Windows 11 24H2 | OPEN — no PR | ❌ None |
| 🔴 **High** | [#2215](https://github.com/netease-youdao/LobsterAI/issues/2215) — Installation fails repeatedly with `Resource extraction failed: could not start extractor process` (exit code `-2147450726` / `ERROR_BAD_ENVIRONMENT`). User exhausted all standard remediation. | Windows | OPEN — no PR | ❌ None |
|  **Medium (fixed)** | [#1446](https://github.com/netease-youdao/LobsterAI/pull/1446) — Gateway infinite startup crash-loop from race condition. | Cross-platform | Closed (stale) | ✅ Merged |
| 🟠 **Medium (fixed)** | [#1453](https://github.com/netease-youdao/LobsterAI/pull/1453) — Disabled skills still injected into prompts. | Cross-platform | Closed (stale) | ✅ Merged |
| 🟡 **Low (fixed)** | [#1454](https://github.com/netease-youdao/LobsterAI/pull/1454) — Silent no-op on empty date in non-repeating task form. | Cross-platform | Closed (stale) | ✅ Merged |
| 🟡 **Low (fixed)** | [#1456](https://github.com/netease-youdao/LobsterAI/pull/1456) — Keyboard shortcut conflict not detected. | Cross-platform | Closed (stale) | ✅ Merged |

**Stability verdict:** The two new unfixed issues are both **Windows showstoppers** — one blocks installation, one blocks core data safety functionality (backup). These should be prioritized.

---

## 6. Feature Requests & Roadmap Signals

| Signal | Source | Likelihood |
|---|---|---|
| **Short-UUID Agent IDs** to prevent data resurrection on agent recreation. | [PR #2065](https://github.com/netease-youdao/LobsterAI/pull/2065) (open, 30+ days) | **Medium-High** — PR exists with clear rationale; blocked on deciding whether to also handle orphan data cleanup (noted as "待后续修复" in PR description). |
| **SSE / Streaming HTTP MCP transport** — users want HTTP-based MCP servers to work properly. | [PR #1001](https://github.com/netease-youdao/LobsterAI/pull/1001) (now closed) | ✅ **Shipped** (stale merge). |
| **Scheduled executions UI grouping** — sidebar usability for power users with daily/weekly jobs. | [PR #1449](https://github.com/netease-youdao/LobsterAI/pull/1449) (now closed) | ✅ **Shipped** (stale merge). |

**Predicted next-version candidates:**
- If the release pipeline unblocks, the batch of 7 stale PRs merged on June 26–27 plus the open #2065 could form a **2026.7.x** patch release.
- The Windows-specific install/backup bugs (#2214, #2215) may force an expedited hotfix if they affect a large portion of the user base.

---

## 7. User Feedback Summary

**Pain points expressed:**

1. **"I can't install the software at all"** — Issue [#2215](https://github.com/netease-youdao/LobsterAI/issues/2215): The user systematically eliminated antivirus, path issues, stale directories, and still cannot install. The `ERROR_BAD_ENVIRONMENT` / NSIS extraction failure points to a deeper installer compatibility problem. Tone: frustrated but methodical.

2. **"Backup UI makes the whole app unusable"** — Issue [#2214](https://github.com/netease-youdao/LobsterAI/issues/2214): A daily user with a 72MB WAL-mode database finds the backup feature renders the entire application unresponsive within 5–10 seconds. Tone: direct, severity-labeled "High," indicates this blocks a core safety workflow (data backup).

**Satisfaction signals:**
- Issued **no 👍 or comments** on any closed PRs or open issues today — indicating either:
  - The user base is small/quiet, or
  - Users file issues but don't track resolution.
- The stale PR merge wave may indicate users/long-time contributors were waiting on merges, but there's no visible acknowledgment.

**Dissatisfaction theme:** Silent failures (no error messages, no logs, UI freeze with no feedback) recur across [#2214](https://github.com/netease-youdao/LobsterAI/issues/2214), [#1454](https://github.com/netease-youdao/LobsterAI/pull/1454), and [#2215](https://github.com/netease-youdao/LobsterAI/issues/2215). A project-wide pattern of insufficient error surfacing.

---

## 8. Backlog Watch

| Item | Age | Risk | Attention Needed |
|---|---|---|---|
| [PR #2065](https://github.com/netease-youdao/LobsterAI/pull/2065) — short-UUID Agent IDs + orphan data | ~30 days open | **Medium** — Addresses data integrity edge case; PR is open and stale-labeled but not yet merged. Decision needed on whether to also tackle orphan `cowork_sessions` cleanup in the same PR. |
| [Issue #2214](https://github.com/netease-youdao/LobsterAI/issues/2214) — Backup causes UI hang | 2 days open | **High** — Core data-safety feature broken on Windows. No linked PR, no maintainer comment observed. |
| [Issue #2215](https://github.com/netease-youdao/LobsterAI/issues/2214) — Install fails with `ERROR_BAD_ENVIRONMENT` | 1 day open | **High** — Blocks new Windows users from adopting the product entirely. No linked PR, no maintainer comment observed. |
| **Release absence** — Last tagged release unclear; 7 substantive fixes merged since ~April | ~3 months | **Medium** — Accumulated fixes without a release frustrates users who track versions and signals possible CI/CD or release-process bottleneck. |

---

**Overall Health Assessment:**  **Caution.** The project is clearing a significant PR backlog (good), but two fresh Windows-critical bugs are open without response, the only active feature PR is aging, and no release has materialized. The silent-failure pattern across multiple issues suggests systemic error-handling improvements are needed beyond individual bug fixes.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-06-28

## 1. Today's Overview

Moltis is in a moderate-activity period heading into the weekend: 1 new issue and 2 open PRs surfaced in the past 24h, with no new releases shipped. The current development focus is narrowly concentrated on **tool-call compatibility with smaller/local LLM models** — both open PRs address the same class of problem where smaller models (specifically Gemma 4 and oMLX) produce non-standard tool argument encodings (stringified scalars, explicit `null` for optional fields) that fail pre-dispatch validation. The project has no recent releases, suggesting the team is likely accumulating fixes toward a batch release. Overall health is stable — open issues are low-volume and both PRs show active recent attention.

## 2. Releases

None.

---

## 3. Project Progress

No PRs were merged or closed in the last 24h. Two PRs remain actively open with recent updates:

- **[PR #1136](https://github.com/moltis-org/moltis/pull/1136)** — *fix(agents): coerce stringified scalar tool args before validation* — Addresses smaller models emitting typed values as strings (`"true"` instead of `true`, `"5000"` instead of `5000`). If merged, this would harden the tool-dispatch pre-validation layer for heterogeneous model backends. *(Author: resumeparseeval | Updated: 2026-06-27)*
- **[PR #1098](https://github.com/moltis-org/moltis/pull/1098)** — *fix(browser): tolerate null optional params in browser tool calls* — Resolves explicit `null` values in optional fields that serde's `#[serde(default)]` doesn't handle. This PR has been open since June 3 but received a meaningful update on June 27, suggesting it's actively being iterated on. *(Author: resumeparseeval | Updated: 2026-06-27)*

---

## 4. Community Hot Topics

Activity is sparse. The most relevant discussion vectors are:

- **[Issue #1137](https://github.com/moltis-org/moltis/issues/1137)** — Apple Container ID exceeds name limit (0 comments, 0 👍) — New as of yesterday; too early for community signals.
- **[PR #1136](https://github.com/moltis-org/moltis/pull/1136)** and **[PR #1098](https://github.com/moltis-org/moltis/pull/1098)** — Together these form a de facto "small-model compatibility" workstream. The underlying need is clear: as users run Moltis with open-weight local models (Gemma 4, oMLX), the tool-calling pipeline needs defensive normalization layers. This is likely a growing pain class as local LLM adoption increases.

---

## 5. Bugs & Stability

| Severity | Item | Fix PR |
|----------|------|--------|
| 🔴 Medium | **[#1137](https://github.com/moltis-org/moltis/issues/1137)** — Apple Container ID exceeds name limit. Container operations likely fail on Apple platforms due to name-length constraints in Apple's container framework. No fix PR yet. | None |
| 🟡 Low-Medium | **[#1136](https://github.com/moltis-org/moltis/pull/1136)** (PR) — Stringified scalar args cause validation failures. Primarily affects local/smaller models. | Self-contained fix |
| 🟡 Low-Medium | **[#1098](https://github.com/moltis-org/moltis/pull/1098)** (PR) — Explicit `null` for optional browser-tool params causes deserialization failures. Same model class affected. | Self-contained fix |

**Assessment:** The container ID bug (#1137) is the highest-severity open issue as it likely causes hard failures on macOS/iOS for a platform-specific feature. The two PR bugs are moderate but affect a growing user segment (local model users).

---

## 6. Feature Requests & Roadmap Signals

No explicit feature requests were filed today. However, the two open PRs signal a **probable near-term roadmap focus**:

- **Robustness/normalization layer for tool calls** — The pattern across both PRs suggests Moltis is building (or should be building) a generalized input-normalization middleware for tool dispatch, rather than fixing individual cases ad hoc. This would benefit all model backends.
- Better **Apple/integration-platform support** — The container ID issue may prompt platform-specific configuration or validation logic.

**Prediction:** If PRs #1136 and #1098 are merged soon, expect a patch release (or announcement) in the coming week focused on local-model compatibility.

---

## 7. User Feedback Summary

- **Pain point:** Apple platform container failures — user *holgzn* reports that Apple Container IDs violate name-length constraints, suggesting this was encountered in real usage, not through testing.
- **Use case signal:** Smaller/local models (Gemma 4, oMLX) are actively being used with Moltis for tool-calling workflows including browser automation, indicating the project's user base is extending beyond cloud-API users into on-device/local inference.
- **Satisfaction:** No negative sentiment expressed, but the bugs being filed suggest users are hitting real production friction. The lack of comments/reactions on the new issue means it's too early to gauge community resonance.

---

## 8. Backlog Watch

| Item | Age | Signal |
|------|-----|--------|
| **[PR #1098](https://github.com/moltis-org/moltis/pull/1098)** — Tolerate null optional params | 25 days open (updated 2026-06-27) | ⚠️ Stale-then-revived — was dormant for ~24 days before a June 27 update. Needs maintainer review to confirm the update addresses outstanding feedback, or it risks cycling back into limbo. |
| **[Issue #1137](https://github.com/moltis-org/moltis/issues/1137)** — Apple Container ID name limit | 1 day open | 🆕 Fresh — no triage response yet. Given it's a platform-specific bug with no workaround mentioned, a quick acknowledgment or label assignment would signal responsiveness. |

**Maintainer action suggested:** Triage #1137 (confirm reproduction, assign priority) and review the updated #1098 to either merge or provide blocking feedback.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-06-28

*Repository: [agentscope-ai/CoPaw](https://github.com/agentscope-ai/CoPaw)*

---

## 1. Today's Overview

CoPaw shows **high development velocity** today with 15 PRs updated and 5 issues updated in the last 24 hours — but releases remain stalled (0 new releases). The project is in an active code-accumulation phase: test infrastructure is being systematically laid down across both backend modules and the frontend console, while multiple community-driven feature PRs are open for review. However, user-facing stability bugs and a connectivity regression have surfaced without fix merges yet, suggesting a growing backlog of issues that will need attention before the next release. The ratio of open-to-closed work (14 open PRs vs. 1 merged, 4 open issues vs. 1 closed) indicates the team is still in a building cycle rather than a shipping cycle.

---

## 2. Releases

**None today.** No new versions were published. The existing latest release remains the reference point, and several open PRs (e.g., #5568 plugin installation fix, #5582 streaming reasoning fix) address problems being encountered on the current version — implying the next release will be meaningful.

---

## 3. Project Progress

### Merged / Closed Items

| Item | Author | What Merged |
|------|--------|-------------|
| **PR #5213** — *fix(console): improve MCP access policy layout* | xia Full review cycle completed; MCP client card UI alignment fixes, responsive Tool & Permissions modal, and source-scoped access principal discovery merged. This was open since June 16. |
| **Issue #5580** — *app-infra backend unit test coverage (W3 sprint)* | hanson-hex | Closed by PR #5581 (app-infra tests, 11 cases) which was opened the same day — fast turnaround. |

### Active Development Tracks

- **Backend Test Coverage Expansion** (author: hanson-hex): A structured multi-sprint plan is executing. PRs #5423 (crons, 47 cases), #5422 (runner, 47 cases), #5581 (app-infra, 11 cases), #5434 (console M3-A, ~135 cases), #5438 (console M3-B, 171 cases), and #5409 (console M2, ~120 cases) together add **~530 new test cases** across the codebase. Coverage baseline was ~39% as of June 10; this effort should substantially raise it.
- **Frontend Unit Test Plan** (author: hanson-hex, PRs #5409 / #5434 / #5438): Three-wave rollout covering Zustand stores, React hooks, Inbox module, and 11 API modules — all test-only, zero source changes. Good low-risk practice.
- **Matrix Streaming Mode** (PR #5585, author: Morxi): Adds Discord-like streaming message delivery to the Matrix channel. Community contribution, currently open.
- **Governance Policy Pattern Generalization** (PR #5546, author: weidankong): Architectural refactor to generalize governance policy enforcement. Open for ~2 days, no comments yet.

---

## 4. Community Hot Topics

| # | Item | Engagement | Signals |
|---|------|------------|---------|
| 1 | **Issue #5573** — DeepSeek V4 thinking mode 400 errors on OpenAI-compatible endpoints | 2 comments, active discussion | Non-official DeepSeek proxy users hit two failure modes: missing `reasoning_content` stream fallback and uncleaned `null` types in tool schemas. **Fix PR #5582** directly addresses the streaming path. High emotional load in the issue — the reporter explicitly says it "almost always reproduces with any non-official endpoint." [View Issue](https://github.com/agentscope-ai/CoPaw/issues/5573) |
| 2 | **PR #5321** — Scroll context manager (durable history + recall REPL) | Active since June 19, updated today | A serious architectural alternative to native compression. Persists full conversation to SQLite, lets the model recall past turns via Python REPL. Represents a paradigm shift in context management — worth watching for roadmap implications. [View PR](https://github.com/agentscope-ai/CoPaw/pull/5321) |
| 3 | **PR #5568** — Fix 5 official plugin installation failures on QwenPaw 2.0 | Open since June 26 | Highlights breaking-change fallout from the agentscope 1.x → 2.0 migration (#4846). All official plugins became uninstallable from the CDN catalog. This is critical for user trust in the plugin ecosystem. [View PR](https://github.com/agentscope-ai/CoPaw/pull/5568) |
| 4 | **PR #4622** — DataPaw data-analysis plugin (12 BI skills) | Open since May 22, updated today | Longest-running community PR in this snapshot. Adds a full BI analytics plugin. Needs maintainer review bandwidth. [View PR](https://github.com/agentscope-ai/CoPaw/pull/4622) |

**Underlying needs analysis:** The community is (a) demanding better third-party model compatibility (DeepSeek proxy support), (b) pushing for richer context/long-term memory management, (c) needing the post-2.0 plugin ecosystem to stabilize, and (d) contributing ambitious domain-specific plugins (BI analytics). The common thread: users want CoPaw to be a truly open and ext just a Qwen-locked frontend.

---

## 5. Bugs & Stability

| # | Severity | Issue / PR | Status | Fix PR |
|---|----------|-----------|--------|--------|
| 1 | **High** — Plugin ecosystem broken | Issue (implied by PR #5568): All 5 official plugins fail to install on QwenPaw 2.0 | 🔴 Unmerged fix | [PR #5568](https://github.com/agentscope-ai/CoPaw/pull/5568) — open 2 days |
| 2 | **High** — Streaming reasoning on DeepSeek V4 | [Issue #5573](https://github.com/agentscope-ai/CoPaw/issues/5573): 400 errors with non-official DeepSeek endpoints |  Fix in progress | [PR #5582](https://github.com/agentscope-ai/CoPaw/pull/5582) — addresses streaming path only; non-streaming path already handled |
| 3 | **Medium** — Ascend-vLLM connectivity regression | [Issue #5584](https://github.com/agentscope-ai/CoPaw/issues/5584): Cannot connect to custom Ascend-vLLM backends; worked in v1.1.7, broken in newer versions |  No fix yet, 1 comment | None |
| 4 | **Medium** — Conversation loss on abnormal interruption | [Issue #5579](https://github.com/agentscope-ai/CoPaw/issues/5579): No checkpoint/durable persistence — all progress lost on host reboot, crash, or OOM kill | 🔴 No fix yet | None |
| 5 | **Low** — UI background highlight unclear | [Issue #5583](https://github.com/agentscope-ai/CoPaw/issues/5583): Chat popup default selection background too faint | 🔴 Trivial, no fix | None |

**Assessment:** Two High-severity bugs with open fix PRs (#5568, #5582) should be prioritized for merge. The Ascend-vLLM regression (#5584) and conversation durability gap (#5579) represent real user pain with no maintainers visible — these need triage or acknowledgment to prevent user attrition.

---

## 6. Feature Requests & Roadmap Signals

| Signal | Source | Likelihood in Next Version |
|--------|--------|----------------------------|
| **Discord-style streaming for Matrix** | [PR #5585](https://agentscope-ai/CoPaw/pull/5585) | Medium-High — single contributor, clear scope, no blockers |
| **Scroll context manager (SQLite-backed durable history)** | [PR #5321](https://github.com/agentscope-ai/CoPaw/pull/5321) | Medium — architecturally significant, needs thorough review; signals that the team wants richer model-tool interaction (REPL recall) |
| **DataPaw BI analytics plugin** | [PR #4622](https://github.com/agentscope-ai/CoPaw/pull/4622) | Low-Medium — been open 37 days; may needscope alignment checks and security review |
| **Governance policy generalization** | [PR #5546](https://github.com/agentscope-ai/CoPaw/pull/5546) | Low — architectural refactor with unspecified scope; likely long-term |
| **Checkpoint/durable conversation persistence** | [Issue #5579](https://github.com/agentscope-ai/CoPaw/issues/5579) | Low — no PR, likely needs design discussion; but user demand is real |
| **Third-party model endpoint hardening** | [Issue #5573](https://github.com/agentscope-ai/CoPaw/issues/5573) | High — fix PR already exists; compatible endpoint support is becoming a table-stakes requirement |

**Prediction:** The next release will likely bundle PR #5582 (streaming fix), PR #5568 (plugin restore), and potentially PR #5578 (CI fix). A broader 2.0 stabilization patch is overdue.

---

## 7. User Feedback Summary

**Top Pain Points:**

- **Plugin ecosystem QoE collapse post-2.0**: Users who migrated to QwenPaw 2.0 found all official plugins broken. This erodes trust in upgrade paths and is the single most likely source of negative word-of-mouth. ([PR #5568](https://github.com/agentscope-ai/CoPaw/pull/5568))
- **Fragile conversation persistence**: Users running agents that trigger host reboots (or face crashes) lose all work. The issue description uses strong language like "directly disappears" and "extremely fragile" — this signals high frustration from power users. ([Issue #5579](https://github.com/agentscope-ai/CoPaw/issues/5579))
- **Hardware-specific connectivity dead-ends**: The Ascend-vLLM regression (worked in 1.1.7, broken later) with a silent community response risks alienating the non-NVIDIA accelerator community segment. ([Issue #5584](https://github.com/agentscope-ai/CoPaw/issues/5584))

**Positive Signals:**

- Non-Python developers are willing to investigate and propose fixes for complex inference compatibility bugs (#5573), showing growing depth in the contributor base.
- Contributors are sending substantial, well-structured feature PRs (#4622 DataPaw, #5321 scroll context) — this is a healthy open-source ecosystem signal.
- The organized multi-sprint test coverage approach from hanson-hex demonstrates institutional discipline in quality investment.

⚠️  **Key Satisfaction Indicator**: All reported bugs and issues today carry 👍=0. While low reaction counts are normal in enterprise/dev tooling, the absence of visible maintainer-community interaction (few maintainer comments, no status labels on reported bugs) risks the perception of an unresponsive core team — the primary driver of open-source project dissatisfaction.

---

## 8. Backlog Watch

| # | Item | Days Open | Risk if Delayed |
|---|------|-----------|-----------------|
| 1 | **[Issue #5579](https://github.com/agentscope-ai/CoPaw/issues/5579)** — Conversation durability / checkpoint persistence | 1 (but the problem existed before being filed) | High — data loss scenarios drive users to competing products |
| 2 | **[Issue #5584](https://github.com/agentscope-ai/CoPaw/issues/5584)** — Ascend-vLLM connectivity regression | 1 | Medium — alienates non-NVIDIA accelerator users |
| 3 | **[PR #4622](https://github.com/agentscope-ai/CoPaw/pull/4622)** — DataPaw plugin (12 BI skills) | **37 days** | Medium-High — longest-running contributor PR; contributor burnout risk if not reviewed |
| 4 | **[PR #5321](https://github.com/agentscope-ai/CoPaw/pull/5321)** — Scroll context manager | **9 days** for a major feature PR | Medium — needs thorough design review; should get maintainer feedback soon |
| 5 | **[PR #5568](https://github.com/agentscope-ai/CoPaw/pull/5568)** — Plugin installation fix for 5 official plugins | 2 days | **High** — all 5 plugins remain broken until this merges |
| 6 | **[PR #5582](https://github.com/agentscope-ai/CoPaw/pull/5582)** — Streaming reasoning_content fix | 1 day | **High** — directly unblocks DeepSeek V4 users |

### Recommendations for Maintainer Attention

1. **Merge or triage within 24h**: PR #5568 and PR #5582 — both fix high-severity regressions, both have low review friction.
2. **Acknowledge #5584**: Even a "looking into it" comment maintains user trust in the Ascend-vLLM use case.
3. **Schedule review bandwidth for PR #4622**: At 37 days open, this contributor deserves either a review or a transparent "not now" with a path forward.
4. **Consider a 2.0.x stabilization PR campaign**: With 6 open test-coverage PRs adding ~530 cases, coupling their merge with regexp-fixing bug fixes would deliver a high-confidence release increment.

---

*Next digest: Watch for merge activity on PRs #5568 and #5582, any new releases, and maintain response patterns on Issues #5579 / #5584.*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-06-28

## 1. Today's Overview

ZeroClaw is experiencing a surge of high-velocity development activity, with **46 issues** and **50 pull requests** updated in the past 24 hours — an unusually high throughput that signals both strong community engagement and active maintainer bandwidth. The project is deep in the **v0.8.3 milestone cycle** (tracked WASM plugins, skills platform, SOP execution, and channel expansion) while simultaneously planning **v0.9.0** (auth, security hardening, gateway boundaries). No new releases were published today, but multiple release-critical tracks (SLSA signing, CI hardening, goal mode) are advancing rapidly through RFCs and PRs. The overall health is **high-activity / pre-release cadence**, with significant architectural decisions being codified.

---

## 2. Releases

**No new releases today.** The last known release is **v0.8.2** (merged via PR #8234). Multiple PRs in the pipeline (#8277 on SLSA provenance, #8343 on release artifact builds, #8344 on deploy fixes) suggest v0.8.3 release infrastructure is being assembled but has not yet shipped.

---

## 3. Project Progress

### Merged / Closed PRs (3 total)

| PR | Description |
|---|---|
| — | Only 3 PRs were merged or closed in the last 24h window; the data shows 50 open PRs with 3 merged/closed, but specific merged PR numbers are not surfaced in the top-20 listing. |

### Closed Issues (12 total, notable entries)

| Issue | Resolution |
|---|---|
| [#8371–8378](https://github.com/zeroclaw-labs/zeroclaw/issues/8371) (8 issues) | **DMS-GST Agent** — An entire 8-task implementation sprint (bootstrap through audit trail) for a GST tax extraction agent was closed in a single day, suggesting either automated housekeeping or a bulk cleanup of a spec-driven task tree. |
| [#5844](https://github.com/zeroclaw-labs/zeroclaw/issues/5844) | **Memory over-emphasis bug** — Closed as accepted after 7 comments; adjusts system prompt weighting to deprioritize memories vs. current prompt context. |
| [#4879](https://github.com/zeroclaw-labs/zeroclaw/issues/4879) | **Gemini CLI OAuth broken** — Closed as accepted; rate-limiting issue with Gemini 3 Flash Preview provider. |
| [#8047](https://github.com/zeroclaw-labs/zeroclaw/issues/8047) | **ReadSkillTool path mismatch** — Tool looked in `data_dir` but skills live in agent workspace; closed as accepted. |
| [#6434](https://github.com/zeroclaw-labs/zeroclaw/issues/6434) | **Shell tool calls refused at full autonomy** — S1 severity; closed as accepted. |

### Active PR Highlights

- **[#8389](https://github.com/zeroclaw-labs/zeroclaw/pull/8389)** — Passive WhatsApp group context (new channel feature, size:L)
- **[#8384](https://github.com/zeroclaw-labs/zeroclaw/pull/8384)** — Native **Inkbox channel** (email + SMS + voice + iMessage) with Quickstart onboarding
- **[#8368](https://github.com/zeroclaw-labs/zeroclaw/pull/8368)** — **Wasmtime component-model host** replacing Extism for plugin execution (DO NOT MERGE; size:XL)
- **[#8399](https://github.com/zeroclaw-labs/zeroclaw/pull/8399)** — Live SOP step execution (EPIC continuation)
- **[#8391](https://github.com/zeroclaw-labs/zeroclaw/pull/8391)** — Daemon SOP maintenance tick (EPIC A1)
- **[#8400](https://github.com/zeroclaw-labs/zeroclaw/pull/8400)** — Wire cron triggers into SOP maintenance tick
- **[#8338](https://github.com/zeroclaw-labs/zeroclaw/pull/8338)** — ACP multiple-choice elicitation for ACP channel & Zed Code tab
- **[#8335](https://github.com/zeroclaw-labs/zeroclaw/pull/8335)** — Skills install/list/remove made bundle-aware
- **[#8173](https://github.com/zeroclaw-labs/zeroclaw/pull/8173)** — In-app upgrade with auto-restart from web dashboard
- **[#8277](https://github.com/zeroclaw-labs/zeroclaw/pull/8277)** — SLSA Build L3 provenance attestation in release pipeline

---

## 4. Community Hot Topics

### Most Discussed Issues (by comment count)

| # | Issue | Comments | Topic |
|---|---|---|---|
| 1 | [#8177](https://github.com/zeroclaw-labs/zeroclaw/issues/8177) | 10 | **Supply chain signing** — Hardware PGP, hermetic builds, SLSA provenance (RFC, blocked, P2) |
| 2 | [#5844](https://github.com/zeroclaw-labs/zeroclaw/issues/5844) | 7 | Memory over-emphasis in system prompt (closed) |
| 3 | [#5808](https://github.com/zeroclaw-labs/zeroclaw/issues/5808) | 6 | **32k context budget exceeded 3.3x on first iteration** — S1 runtime blocker |
| 4 | [#6360](https://github.com/zeroclaw-labs/zeroclaw/issues/6360) | 4 | Prompt caching broken on Telegram channel |
| 5 | [#4879](https://github.com/zeroclaw-labs/zeroclaw/issues/4879) | 4 | Gemini CLI OAuth rate-limiting (closed, 👍:2) |
| 6 | [#8058](https://github.com/zeroclaw-labs/zeroclaw/issues/8058) | 4 | Release-only cosign + SLSA + SBOM CI pipeline |
| 7 | [#4467](https://github.com/zeroclaw-labs/zeroclaw/issues/4467) | 3 | MCP resource and prompt support (👍:4 — highest reaction count) |

### Underlying Needs Analysis

- **Supply chain security** (#8177, #8058, #8277) is a **major institutional priority** — the project is investing heavily in SLSA L3, cosign, and hardware-backed signing, likely driven by enterprise adoption requirements.
- **Context management** (#5808, #5844) is a **persistent pain point** — the 32k default budget being exceeded 3.3x on iteration 1 suggests a fundamental sizing miscalculation that affects all new users.
- **MCP completeness** (#4467, 👍:4) reflects demand for ZeroClaw to be a **full MCP client** (not just tool-only), important for interoperability.
- **Channel expansion** (WhatsApp passive context, Inkbox, Telegram caching fixes) shows ZeroClaw is positioning as a **multi-channel AI agent platform**, not just a CLI tool.

---

## 5. Bugs & Stability

### Critical / S1 Bugs (Open)

| Issue | Severity | Status | Fix PR? |
|---|---|---|---|
| [#5808](https://github.com/zeroclaw-labs/zeroclaw/issues/5808) | **S1** — Context budget exceeded 3.3x on first iteration | Open, in-progress | None identified |
| [#6434](https://github.com/zeroclaw-labs/zeroclaw/issues/6434) | **S1** — Shell tool calls refused at full autonomy | **Closed** | Accepted |

### High Severity Bugs (Open)

| Issue | Severity | Status | Fix PR? |
|---|---|---|---|
| [#5844](https://github.com/zeroclaw-labs/zeroclaw/issues/5844) | S2 — Memory over-emphasis | **Closed** | Accepted |
| [#4879](https://github.com/zeroclaw-labs/zeroclaw/issues/4879) | S1 — Gemini OAuth rate-limited | **Closed** | Accepted |
| [#8047](https://github.com/zeroclaw-labs/zeroclaw/issues/8047) | S2 — ReadSkillTool wrong path | **Closed** | Accepted |
| [#6360](https://github.com/zeroclaw-labs/zeroclaw/issues/6360) | S2 — Prompt caching broken on Telegram | Open, accepted | None identified |

### Stability Assessment

The project has **closed several long-standing P1 bugs** this week (some dating back to April), which is a positive signal of bug-triage momentum. However, **#5808** (context budget) remains a critical open issue with no associated fix PR — this is arguably the most impactful open bug because it blocks fresh conversations on the default configuration. The Telegram prompt caching issue (#6360) also lacks a fix PR despite being accepted.

---

## 6. Feature Requests & Roadmap Signals

### Likely in v0.8.3 (current milestone)

| Feature | Evidence | Confidence |
|---|---|---|
| **SOP (Standard Operating Procedure) execution** | PRs #8391, #8399, #8400 actively merging | 🔴 Very High |
| **Passive WhatsApp group context** | PR #8389 open, issue #8379 | 🔴 Very High |
| **Inkbox native channel** | PR #8384 open | 🟡 High |
| **SLSA provenance in CI** | PR #8277 open, RFC #8177 active | 🟡 High |
| **Skills bundle-awareness** | PR #8335 open | 🟡 High |
| **In-app upgrade from dashboard** | PR #8173 open | 🟡 High |

### Likely in v0.9.0 (next milestone)

| Feature | Evidence | Confidence |
|---|---|---|
| **Wasm-first plugin runtime** | RFC #8135, PR #8368 (DO NOT MERGE — still in design) | 🟡 High |
| **Goal mode (autonomous sessions)** | RFC #8303, ADR PR #8393 | 🟡 High |
| **Auth & security hardening** | Tracker #7432 (110 open items) | 🔴 Confirmed (milestone scope) |
| **MCP resource/prompt support** | Issue #4467 (👍:4, in-progress) | 🟡 Medium-High |
| **Wire-protocol-first provider model** | RFC #8396 (fresh, 0 comments) | 🟡 Medium (early RFC) |
| **Plugin permission/secrets model** | RFC #8398 (fresh, 0 comments) | 🟡 Medium (early RFC) |

### Wildcard / Longer-term

- **ZeroRelay nominated-relay node** ([#8358](https://github.com/zeroclaw-labs/zeroclaw/issues/8358)) — NAT traversal infrastructure, early stage
- **Herdr agent reporting integration** ([#8337](https://github.com/zeroclaw-labs/zeroclaw/pull/8337)) — IDE panel integration
- **ACP elicitation multiple-choice** ([#8338](https://github.com/zeroclaw-labs/zeroclaw/pull/8338)) — dependent on Zed editor support

---

## 7. User Feedback Summary

### Pain Points (Dissatisfaction)

1. **Context management is broken out-of-the-box** — Issue [#5808](https://github.com/zeroclaw-labs/zeroclaw/issues/5808) reports the default 32k context budget is exceeded **3.3x on the very first iteration** of a fresh conversation, purely from system prompt + tool definitions. This means **every new user hits a blocker immediately** unless they manually reconfigure. This is the single most damaging UX issue in the project.

2. **Memory weighting is too aggressive** — Issue [#5844](https://github.com/zeroclaw-labs/zeroclaw/issues/5844) describes the agent prioritizing stored memories over the actual user prompt, especially in cron jobs. Users feel the agent is "not listening" to current instructions.

3. **Telegram prompt caching is silently broken** — Issue [#6360](https://github.com/zeroclaw-labs/zeroclaw/issues/6360) shows full prompt re-processing on every message, causing unnecessary cost and latency for Telegram users. No fix has been shipped since May.

4. **Gemini provider is unreliable** — Issue [#4879](https://github.com/zeroclaw-labs/zeroclaw/issues/4879) (👍:2) shows rate-limiting on Gemini 3 Flash Preview even right after authentication, suggesting the retry/backoff logic is insufficient.

5. **Shell tool is refused at full autonomy** — Issue [#6434](https://github.com/zeroclaw-labs/zeroclaw/issues/6434) is paradoxical: even with `level = "full"` and all permissions granted, shell tool calls never reach runtime. This is a **trust/permission model bug** that undermines the autonomy feature entirely.

### Positive Signals

- The **DMS-GST agent** ([#8371–8377](https://github.com/zeroclaw-labs/zeroclaw/issues/8371)) closed 8 implementation tasks in a single day, suggesting either a very efficient contributor or strong spec-driven automation — either way, **feature delivery velocity is high**.
- **MCP resource/prompt support** ([#4467](https://github.com/zeroclaw-labs/zeroclaw/issues/4467)) has 👍:4 — the highest community reaction count — indicating strong demand for deeper MCP integration.
- The **Inkbox channel** PR (#8384) and **WhatsApp passive context** (#8389) show users want ZeroClaw to be **omni-channel**, not just a developer CLI tool.

---

## 8. Backlog Watch

### Critical Items Needing Maintainer Attention

| Item | Age / Status | Risk | Why It Matters |
|---|---|---|---|
| [#5808](https://github.com/zeroclaw-labs/zeroclaw/issues/5808) — Context budget exceeded 3.3x | Created 2026-04-16, **open, in-progress, no fix PR** | 🔴 Critical | **Blocks all new users on default config.** 2+ months without a fix. |
| [#6360](https://github.com/zeroclaw-labs/zeroclaw/issues/6360) — Telegram prompt caching broken | Created 2026-05-04, **open, accepted, no fix PR** | 🟠 High | 2+ months; Telegram users paying 2-4x LLM costs due to cache misses. |
| [#8396](https://github.com/zeroclaw-labs/zeroclaw/issues/8396) — Wire-Protocol-First Provider Model RFC | Created 2026-06-27, **0 comments** | 🟡 Medium | Major architectural RFC with no maintainer response yet. |
| [#8398](https://github.com/zeroclaw-labs/zeroclaw/issues/8398) — Plugin permission/secrets model RFC | Created 2026-06-27, **0 comments** | 🟡 Medium | Blocks plugin ecosystem security model. |
| [#8368](https://github.com/zeroclaw-labs/zeroclaw/pull/8368) — Wasmtime component-model host | **DO NOT MERGE** label, no activity | 🟡 Medium | XL-sized PR sitting in limbo; needs architectural review or closure. |
| [#5187](https://github.com/zeroclaw-labs/zeroclaw/pull/5187) — arm64 Docker target | Created 2026-04-02, **needs-author-action, stale-candidate** | 🟡 Medium | 2+ months; ARM64 is increasingly important (Apple Silicon, ARM servers). |
| [#8177](https://github.com/zeroclaw-labs/zeroclaw/issues/8177) — Supply chain signing RFC | **Status:blocked** | 🟡 Medium | High-priority security RFC that is explicitly blocked — needs unblocking decision. |
| [#6966](https://github.com/zeroclaw-labs/zeroclaw/pull/6966) — LLM span prompt/completion capture | **needs-author-action, stale-candidate** | 🟡 Low-Medium | Observability feature with a working implementation sitting idle since May. |

### Recommended Actions

1. **Prioritize #5808** — This is the highest-impact open bug. Consider either (a) increasing the default `max_context_tokens` or (b) reducing the system prompt + tool definition footprint. Every day this stays open, new users hit a wall.
2. **Assign a maintainer to #8396 and #8398** — Two fresh RFCs on the same day (provider model + plugin permissions) suggest a coordinated architectural push. They need triage or they'll go stale.
3. **Resolve #8368** — The "DO NOT MERGE" label on the Wasmtime PR needs either a clear path to merge or a decision to close. It's been open since June 26 with XL scope.
4. **Unblock or re-scope #8177** — Supply chain signing is blocked. If the blocker is external (hardware procurement, organizational), communicate that. If it's internal, assign an owner.

---

*Data source: github.com/zeroclaw-labs/zeroclaw — Issues and PRs updated 2026-06-27 to 2026-06-28. Analysis generated 2026-06-28.*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/DenisZheng/agents-radar).*