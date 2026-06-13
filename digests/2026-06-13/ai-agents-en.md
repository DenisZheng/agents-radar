# OpenClaw Ecosystem Digest 2026-06-13

> Issues: 500 | PRs: 486 | Projects covered: 13 | Generated: 2026-06-13 00:43 UTC

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

# OpenClaw Project Digest — 2026-06-13

---

## 1. Today's Overview

OpenClaw remains in a period of exceptionally high activity, with **500 issues** and **486 PRs** updated in the last 24 hours — a volume that signals both a large, engaged user base and a project under significant scaling pressure. Two new releases landed today (v2026.6.6 stable and v2026.6.6-beta.2), both focused on a sweeping security hardening pass across nearly every surface of the gateway. Despite the release cadence, the open issue count (402) continues to dwarf closures (98), and the PR queue (356 open vs. 130 merged/closed) suggests the maintainer team is struggling to keep pace with incoming contributions. The project is clearly in a "security-first" stabilization phase, but session-state bugs, memory leaks, and delivery reliability issues remain persistent sources of user pain.

---

## 2. Releases

### v2026.6.6 (stable) & v2026.6.6-beta.2

**Scope:** Security hardening release — no new user-facing features.

**Key changes:**
- Tightened security boundaries across **14+ surfaces**: transcript handling, sandbox bind mounts, host environment inheritance, MCP stdio, Codex HTTP access, native search policy, elevated sender checks, deleted-agent ACP bypasses, loopback tools, Discord moderation, and Teams group actions.
- Exec tool security was specifically called out as an area of focus.

**Breaking changes:** None explicitly documented, but the breadth of security tightening means some previously permissive configurations (e.g., sandbox workspace access, exec approvals, MCP tool exposure) may now be more restrictive. Users running custom sandbox configs or MCP integrations should validate after upgrade.

**Migration notes:** No migration guide provided. Users with custom `exec-approvals.json`, MCP server configs, or per-agent sandbox overrides should test in a staging environment before rolling out to production gateways.

---

## 3. Project Progress

### Merged/Closed PRs (today)

| PR | Summary |
|---|---|
| [#92554](https://github.com/openclaw/openclaw/pull/92554) | Added **Kimi K2.7 Code** model support to the Moonshot extension (256K context, always-on reasoning wire contract) |
| [#84082](https://github.com/openclaw/openclaw/pull/84082) | Fixed Telegram **expandable blockquote** rendering (attribute was being stripped by HTML sanitizer) |
| [#91500](https://github.com/openclaw/openclaw/pull/91500) | Added **QA scorecard taxonomy validation** — executable evidence mapping overlay for release maturity tracking |
| [#20418](https://github.com/openclaw/openclaw/pull/20418) | Added `session:pre-spawn` and `agent:pre-run` **internal hook events** for subagent lifecycle interception |
| [#19922](https://github.com/openclaw/openclaw/pull/19922) | Added `message:received` and `message:sent` **hook events** for workspace-level message lifecycle triggers |
| [#6797](https://github.com/openclaw/openclaw/pull/6797) | Signal channel variant of the message hook events |
| [#14403](https://github.com/openclaw/openclaw/pull/14403) | Added `agent-install.sh` stub for NOVA-INSTALL.sh compatibility |

**Notable open PRs gaining traction:**
- **[#92086](https://github.com/openclaw/openclaw/pull/92086)** — Security Matrix runtime-fact audit model (security-boundary merge risk, needs real-behavior proof)
- **[#88815](https://github.com/openclaw/openclaw/pull/88815)** — Channel echo / session pinning (large refactor, high merge risk across compatibility, delivery, and security)
- **[#75662](https://github.com/openclaw/openclaw/pull/75662)** — Pause yielded main-session runs (extends subagent yield fix to top-level sessions)
- **[#92509](https://github.com/openclaw/openclaw/pull/92509)** — Memory-core WAL checkpoint fix after `writeMeta()` (addresses crash-related index corruption)
- **[#92035](https://github.com/openclaw/openclaw/pull/92035)** — Temporal decay for QMD search results (currently only works in builtin hybrid engine)

---

## 4. Community Hot Topics

### Most Discussed Issues

| Issue | Comments | Signal |
|---|---|---|
| **[#25592](https://github.com/openclaw/openclaw/issues/25592)** — Text between tool calls leaks to messaging channels | 32 💬 | **P1, security + message-loss.** Agent narration/error text between tool invocations is being routed to Slack, iMessage, etc. as visible messages. This is a fundamental UX and information-disclosure problem. |
| **[#9443](https://github.com/openclaw/openclaw/issues/9443)** — Prebuilt Android APK releases | 25 💬 | Users want downloadable APKs rather than building from source. Indicates mobile is a priority platform but release infrastructure hasn't caught up. |
| **[#32473](https://github.com/openclaw/openclaw/issues/32473)** — Control UI requires device identity (HTTPS/localhost) | 17 💬, 5 👍 | Regression affecting VPS + Docker users. The device identity requirement is blocking webchat access for a common deployment pattern. |
| **[#22438](https://github.com/openclaw/openclaw/issues/22438)** — Tiered bootstrap file loading | 17 💬 | Users with large workspaces are wasting context tokens on files never referenced. A tiered/progressive loading system is requested. |
| **[#22676](https://github.com/openclaw/openclaw/issues/22676)** — Signal daemon stop() race condition | 17 💬 | SIGUSR1 restarts cause orphaned signal-cli processes and send failures. A process lifecycle management bug. |

### Underlying Needs Analysis

Three dominant themes emerge from the most active discussions:

1. **Information hygiene** — Users are frustrated that internal agent processing text (tool narration, error handling) bleeds into messaging channels (#25592). This is both a UX problem and a potential security concern (leaking internal state).

2. **Deployment friction** — Multiple issues (#32473, #9443, #31331) point to pain around non-standard deployment targets: VPS, Docker, Android. The project's default assumptions (localhost, desktop, source-build) don't match how a significant portion of the user base actually runs OpenClaw.

3. **Session reliability** — Race conditions (#22676), context confusion (#32296), and subagent lifecycle issues (#47975, #83184) all point to the session management layer being the most fragile subsystem.

---

## 5. Bugs & Stability

### Critical / P0

| Issue | Severity | Description | Fix PR? |
|---|---|---|---|
| **[#91588](https://github.com/openclaw/openclaw/issues/91588)** | 🔴 P0 | **Gateway memory leak** — RSS grows from 350MB to 15.5GB over 2-3 days, causing OOM kills and launchd restart cycles | None |
| **[#91778](https://github.com/openclaw/openclaw/issues/91778)** | 🔴 P0 | **memory_search broken** since v2026.6.1 — index metadata missing, all agents "blind" to vector search | None |

### High / P1

| Issue | Severity | Description | Fix PR? |
|---|---|---|---|
| **[#25592](https://github.com/openclaw/openclaw/issues/25592)** | 🟠 P1 | Text between tool calls leaks to channels (32 comments, most-discussed issue) | None |
| **[#22676](https://github.com/openclaw/openclaw/issues/22676)** | 🟠 P1 | Signal daemon race condition — orphaned processes on restart | None |
| **[#32296](https://github.com/openclaw/openclaw/issues/32296)** | 🟠 P1 | Agent replies to previous message instead of current (session context confusion) | None |
| **[#29387](https://github.com/openclaw/openclaw/issues/29387)** | 🟠 P1 | Bootstrap files in `agentDir` silently ignored — only workspace files loaded | None |
| **[#57326](https://github.com/openclaw/openclaw/issues/57326)** | 🟠 P1 | CLI-backed helper paths bypass CLI dispatch | None |
| **[#31583](https://github.com/openclaw/openclaw/issues/31583)** | 🟠 P1 | `exec` tool doesn't inherit `skills.entries.*.env` variables (regression) | None |
| **[#37634](https://github.com/openclaw/openclaw/issues/37634)** | 🟠 P1 | Sandbox `workspaceAccess: none` makes workspace read-only (6 👍) | None |
| **[#83184](https://github.com/openclaw/openclaw/issues/83184)** | 🟠 P1 | Heartbeat replies block subsequent heartbeats via stuck `pendingFinalDelivery` | None |
| **[#86538](https://github.com/openclaw/openclaw/issues/86538)** | 🟠 P1 | Session write-lock timeouts block subagent delivery lanes | None |
| **[#92043](https://github.com/openclaw/openclaw/issues/92043)** | 🟠 P1 | 180s compaction timeout too short — fails identically every turn for long histories | None |
| **[#38327](https://github.com/openclaw/openclaw/issues/38327)** | 🟠 P1 | "Cannot convert undefined or null to object" with google-vertex/gemini-3.1-pro-preview (regression in 2026.3.2) | None |

### Notable Fix PRs in Progress

- **[#92509](https://github.com/openclaw/openclaw/pull/92509)** — WAL checkpoint fix for memory-core index corruption (directly related to #91778)
- **[#91078](https://github.com/openclaw/openclaw/pull/91078)** — Sandbox fs bridge stat fix for Codex exec-server native writes
- **[#92545](https://github.com/openclaw/openclaw/pull/92545)** — Cron fail-closed on repeated unavailable-tool self-debug

---

## 6. Feature Requests & Roadmap Signals

### Strong Signals (multiple upvotes, clear use cases)

| Issue | Votes | Request | Likelihood of near-term implementation |
|---|---|---|---|
| **[#18160](https://github.com/openclaw/openclaw/issues/18160)** | 11 👍 | **Direct Exec Mode for Cron Jobs** — bypass LLM interpretation for simple commands | **High** — addresses a clear reliability gap, well-scoped |
| **[#6615](https://github.com/openclaw/openclaw/issues/6615)** | 7 👍 | **Exec-approval denylist** — "allow everything except X" policies | **High** — natural complement to existing allowlist, security-aligned |
| **[#20786](https://github.com/openclaw/openclaw/issues/20786)** | 6 👍 | **Telegram Business Bot support** | **Medium** — growing platform, but niche |
| **[#37634](https://github.com/openclaw/openclaw/issues/37634)** | 6 👍 | Sandbox writable workspaces when `workspaceAccess: none` | **Medium** — conflicts with security hardening direction |
| **[#27445](https://github.com/openclaw/openclaw/issues/27445)** | 5 👍 | **`announceTarget` for sub-agent completion routing** | **Medium** — important for multi-step workflow orchestration |

### RFCs & Larger Proposals

- **[#35203](https://github.com/openclaw/openclaw/issues/35203)** — Multi-Agent Collaboration Enhancement (capability profiling, shared blackboard, layered memory, token cost governance). Ambitious architecture RFC.
- **[#13583](https://github.com/openclaw/openclaw/issues/13583)** — Pre-response enforcement hooks (hard gates for mandatory tool-call/policy rules). Aligns with the security-first direction of v2026.6.6.
- **[#22358](https://github.com/openclaw/openclaw/issues/22358)** — Post-subagent completion extension hook.

### Predicted for Next Release (v2026.6.7 or v2026.7.1)

Based on the security hardening trajectory and the most-upvoted requests:
1. **Exec-approval denylist** (#6615) — natural extension of today's security work
2. **Direct Exec Mode for Cron** (#18160) — highest-upvoted feature request, clear reliability win
3. **Memory leak fix** (#91588) — P0 issue, cannot wait for a minor cycle
4. **memory_search index fix** (#91778) — P0, already has a related PR (#92509)

---

## 7. User Feedback Summary

### Pain Points

1. **"My agent is leaking internal thoughts to Slack/iMessage"** — The single most-discussed issue (#25592, 32 comments). Users are embarrassed by agent narration appearing in professional channels. This is a trust and professionalism issue, not just a bug.

2. **"The gateway crashes every few days"** — The memory leak (#91588) is causing production outages for users who run OpenClaw as a long-lived service. This is the kind of issue that drives users to alternative platforms.

3. **"I can't use the webchat on my VPS"** — The device identity / HTTPS requirement (#32473) is blocking a common deployment pattern. Users feel the project assumes localhost-only operation.

4. **"Cron jobs are unreliable"** — Multiple issues (#18160, #83184, #92545) point to cron being a second-class execution path. Users want cron jobs to be as reliable as interactive sessions.

5. **"Bootstrap files in agentDir don't work"** — Users who follow the per-agent directory pattern expect their SOUL.md, AGENTS.md, etc. to be loaded (#29387). The silent failure is particularly frustrating because there's no error message.

### Satisfaction Signals

- The hook system PRs (#20418, #19922) being merged shows the extensibility model is maturing, which power users value.
- The Kimi K2.7 Code addition (#92554) shows the project is keeping pace with new model releases.
- The QA scorecard infrastructure (#91500, #91587) suggests the project is investing in release quality — users running stable will benefit.

### Unmet Use Cases

- **Mobile-first users** want prebuilt APKs (#9443) — the project treats Android as a source-build afterthought.
- **Multi-agent orchestrators** need better subagent lifecycle controls (#22358, #27445, #38626) — the current model is fire-and-forget.
- **Enterprise/high-stakes users** need hard policy enforcement (#13583) — soft prompt-based rules are insufficient for compliance-sensitive deployments.

---

## 8. Backlog Watch

### Long-Unanswered Critical Issues Needing Maintainer Attention

| Issue | Age | Why It Matters |
|---|---|---|
| **[#91588](https://github.com/openclaw/openclaw/issues/91588)** — Gateway memory leak (P0) | 4 days | Production outage for long-running gateways. No maintainer response or diagnostic request in 4 days despite P0 label. |
| **[#91778](https://github.com/openclaw/openclaw/issues/91778)** — memory_search broken since v2026.6.1 (P0) | 4 days | Core memory feature broken for 11+ days. Related PR (#92509) exists but hasn't been reviewed. |
| **[#25592](https://github.com/openclaw/openclaw/issues/25592)** — Tool call text leak (P1, 32 comments) | 110 days | Most-commented issue in the backlog. Opened Feb 24, still no fix or maintainer acknowledgment. |
| **[#22676](https://github.com/openclaw/openclaw/issues/22676)** — Signal daemon race condition (P1) | 111 days | Signal is a first-party channel. Race condition in process lifecycle is a fundamental reliability bug. |
| **[#31583](https://github.com/openclaw/openclaw/issues/31583)** — exec tool env var regression (P1) | 103 days | Regression (worked before). Blocks skill-based secret injection. |
| **[#37634](https://github.com/openclaw/openclaw/issues/37634)** — Sandbox workspace read-only (P1, 6 👍) | 99 days | Directly conflicts with the security hardening in v2026.6.6 — needs a product decision on the tradeoff. |
| **[#18160](https://github.com/openclaw/openclaw/issues/18160)** — Direct Exec Mode for Cron (P2, 11 👍) | 117 days | Highest-upvoted feature request. Clear use case, well-scoped, no maintainer response. |

### Stale PRs at Risk of Closure

- **[#77158](https://github.com/openclaw/openclaw/pull/77158)** — QMD export-state cache perf fix (opened May 4, 40 days old, no comments)
- **[#75662](https://github.com/openclaw/openclaw/pull/75662)** — Pause yielded main-session runs (opened May 1, 43 days old, no comments)
- **[#90057](https://github.com/openclaw/openclaw/pull/90057)** — Workboard operations view polish (opened Jun 3, 10 days old, no comments)

---

**Overall Health Assessment:** OpenClaw is in a high-activity stabilization phase with a clear security focus (v2026.6.6). However, the project is accumulating technical debt faster than it can resolve it — the 500-issue/486-PR daily update volume with only 98 issues and 130 PRs closed suggests a growing backlog. The two P0 issues (memory leak, broken memory_search) are the most urgent threats to user retention. The most-commented issue (tool text leak, 110 days old) signals a disconnect between user priorities and maintainer focus. The project would benefit from a dedicated triage sprint to address the top 10 oldest P1 issues and establish a response-time SLA for P0 issues.

---

## Cross-Ecosystem Comparison

# AI Agent & Personal AI Assistant Open-Source Ecosystem — Cross-Project Comparison Report

**Date:** 2026-06-13 | **Source:** OWL Community Digests (12 projects monitored)

---

## 1. Ecosystem Overview

The personal AI agent / AI assistant open-source landscape in June 2026 is characterized by **intense, broad-spectrum development** across a maturing ecosystem of ~12 active projects. The space has moved well beyond proof-of-concept: projects are shipping multi-channel messengers, Computer Use runtimes, mobile clients, and enterprise-grade cron/scheduling systems. However, **stability and technical debt are the dominant concerns** — nearly every project's backlog contains critical bugs (memory leaks, context loss, silent failures) that have persisted for weeks despite active maintainer teams. Security hardening is the single most common release theme, with 8+ projects having shipped or prepared security-focused patches in the last 48 hours. The ecosystem is clearly in a **transition from feature velocity to reliability engineering**, driven by user churn risk from production-grade pain points.

---

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Merged/Closed | Release | Health Score | Notes |
|---|---|---|---|---|---|---|
| **OpenClaw** | 500 | 486 | 98 / 130 | v2026.6.6 (stable + beta) | ⚠️ **6/10** | Massive volume; backlog growing faster than closure rate |
| **NanoBot** | 6 | 30 | 2 / 4 | None | 🟢 **8/10** | High PR:issue ratio (~5:1); rapid fix turnaround |
| **Hermes Agent** | 50 | 50 | 12+ / 8+ | None (accumulating) | 🟡 **7/10** | Broad-spectrum fixes; prolific single contributor driving volume |
| **PicoClaw** | 6 | 14 | 3 / 1 | nightly v0.2.9 | 🟢 **8/10** | Steady cadence, no critical blockers |
| **NanoClaw** | 5 | 9 | 0 / 0 | None | 🟡 **5/10** | Zero merges in 24h despite 9 open PRs; review bottleneck |
| **NullClaw** | 1 | 3 | 0 / 0 | None | 🟡 **5/10** | Limited community engagement; single-contributor maintenance |
| **IronClaw** | 50 | 50 | 18 / 17 | None (v0.29.1 pending) | 🟢 **8/10** | Record/replay QA infrastructure; qa branch promoted |
| **LobsterAI** | 1 (closed) | 17 | 11 / 1 | 2026.6.11 branch merged | 🟢 **8/10** | Strong release cadence; 70-day stale PRs a concern |
| **Moltis** | 3 | 1 | 0 / 0 | None | 🟢 **6/10** | Stable; low activity; K8s sandbox & local STT as differentiators |
| **CoPaw** | 23 | 27 | 7 / 6 | v1.1.12b1 staging | 🟡 **6/10** | Regression cluster from v1.1.11; hotfix-driven cycle |
| **ZeroClaw** | 14 | 35 | 0 / 0 | v0.8.0 queue closed; v0.8.1 pending | 🟡 **6/10** | 31 open PRs; architectural consolidation underway; onboarding bugs |
| **TinyClaw** | 0 | 0 | 0 / 0 | None | ⚪ N/A | No activity |
| **ZeptoClaw** | 0 | 0 | 0 / 0 | None | ⚪ N/A | No activity |

**Health criteria:** P0/P1 backlog age, PR review responsiveness, release cadence, community engagement (comments/reactions), critical bug-to-fix-PR ratio.

---

## 3. OpenClaw's Position

### Advantages vs Peers

- **Scale and ecosystem gravity.** OpenClaw's 500-issue/486-PR daily volume dwarfs all other projects combined — it is the gravitational center of this ecosystem. This attracts contributor talent, third-party integrations (Kimi K2.7 Code, Moonshot extension), and enterprise attention.
- **Breadth of platform coverage.** No rival matches OpenClaw's simultaneous support for Telegram, Slack, WhatsApp, Signal, Teams, Discord, BlueBubbles, WeChat, Matrix, iMessage, Android, and web. PicoClaw and Moltis cover narrower slices; Hermes covers comparable breadth but with less depth per channel.
- **Extensibility model.** The hook event system (`session:pre-spawn`, `agent:pre-run`, `message:received`, `message:sent`) enables deep customization that most competitors lack. NanoBot's audit module and IronClaw's capability hooks are the closest peers.

### Technical Approach Differences

- **Monolithic gateway architecture.** OpenClaw runs a single gateway process managing all channels, sessions, and execution. IronClaw uses a similar model with its Reborn runtime. NanoBot, PicoClaw, and NanoClaw lean toward lighter-weight, modular designs with separate concerns for channels, tools, and sessions.
- **Security-first posture (current cycle).** OpenClaw's v2026.6.6 release hardened 14+ security surfaces in a single patch. Only NanoClaw (container capabilities, package-age gating) and IronClaw (hook fan-out caps, audit sinks) are making comparable security investments. Most peers are still in feature-addition mode.

### Community Size Comparison

OpenClaw's issue/PR volume exceeds the **sum of all other projects combined**. Even adjusting for bot activity and automated issues, this represents an order-of-magnitude larger contributor and user base than any rival. LobsterAI and IronClaw are the next most active, but at roughly half the volume.

---

## 4. Shared Technical Focus Areas

### 4.1 Session & Memory Reliability *(Universal — affects all 12 projects)*

| Specific Need | Projects Affected |
|---|---|
| Context loss after consolidation | NanoBot (#4044, #4307), OpenClaw (#32296), CoPaw (#5161) |
| Memory leak (long-running gateways) | OpenClaw (#91588, RSS 15.5GB), CoPaw (#5138, 90% mem) |
| Broken memory search / vector index | OpenClaw (#91778), NanoBot (#4315) |
| Session state bugs (stuck deliveries, race conditions) | OpenClaw (#83184, #86538), NanoClaw (#2506), IronClaw (#4812) |

This is the ecosystem's **single most urgent shared problem**. Every project with a long-running agent process reports some form of context decay, memory corruption, or state mismatch. No project has solved this category of issue yet.

### 4.2 Security Hardening *(10/12 projects)*

| Specific Need | Projects |
|---|---|
| Sandbox/container escape mitigation | OpenClaw (#92086), NanoClaw (#2748), Moltis (#1118), PicoClaw (#3114) |
| Tool execution policy (allow/denylist) | OpenClaw (#6615), Hermes (#44976), NanoBot (#4319 audit) |
| Supply-chain / dependency risk | NanoClaw (#2749, package-age gating), IronClaw (#4824, cargo-deny) |
| Auth flow integrity | OpenClaw (Codex OAuth, deleted-agent ACP bypass), Hermes (#45261, #45242) |

### 4.3 Channel/Adapter Reliability *(9/12 projects)*

| Specific Need | Projects |
|---|---|
| Race conditions in channel processes | OpenClaw (#22676, Signal), PicoClaw (#3115, WebSocket) |
| Silent message drops | NanoClaw (#2506, dedup), Moltis (#1116, WhatsApp @lid), Hermes (#30091, Slack bot-to-bot) |
| Model-specific API breakage | PicoClaw (#3111, Gemini 3.5 Flash), CoPaw (#5163, Gemini tool calling), Hermes (#44976, MiniMax MCP args) |

### 4.4 Cron/Scheduling Reliability *(7/12 projects)*

| Specific Need | Projects |
|---|---|
| Agent-scheduled tasks silently failing | CoPaw (#5064), OpenClaw (#18160) |
| Subagent lifecycle in cron | NanoBot (#4304), OpenClaw (#57662) |
| Cron execution visibility | LobsterAI (#1449), CoPaw (#5064) |

### 4.5 Model Provider Compatibility & Multi-Model Support *(8/12 projects)*

The ecosystem is racing to keep pace with rapid model release cycles (Kimi K2.7 Code, Gemini 3.5 Flash, DeepSeek V4, MiniMax). Provider-specific breakage and missing features are a constant background issue.

---

## 5. Differentiation Analysis

| Dimension | OpenClaw | IronClaw | NanoBot | Hermes Agent | CoPaw | PicoClaw | Moltis |
|---|---|---|---|---|---|---|---|
| **Primary target user** | Power user / self-hosted | Enterprise / developer | Developer / API consumer | Multi-channel power user | Productivity / coding | Embedded / cost-sensitive | Infrastructure / security-focused |
| **Architecture** | Monolithic gateway | Modular (Reborn runtime + capability hooks) | Lightweight Python agent | Monolithic multi-channel gateway | Desktop-first (Tauri/Electron) | Rust-based, embedded-friendly | Modular, sandbox-oriented |
| **Key differentiator** | Breadth of channels + hook extensibility | QA/test infrastructure (record/replay, e2e harness) | Audit/observability module + Python SDK | Broad model provider support (WeChat, WeCom, BlueBubbles) | Agent ecosystem (DataPaw, visual model fallback) | Tiny footprint, cost-aware (evolution throttling) | Kubernetes sandboxing, local-first |
| **Flagship features** | Hook system, exec approvals, 15+ channels | DeferredBusy drain, cross-thread approvals, Reborn UI | Audit module, multi-provider TTS, Python SDK | Output truncation fix, Desktop UX polish, OAuth self-heal | Agent-driven scheduling, Computer Use, Kimi integration | Evolution mode, Pico WebSocket protocol, DeltaChat | K8s sandbox, local STT (FunASR), custom providers |
| **Language** | TypeScript/Rust | Rust | Python | TypeScript | TypeScript (Tauri) | Rust | Go |

---

## 6. Community Momentum & Maturity

### Tier 1 — Rapidly Iterating (daily releases or near-daily)

| Project | Cadence | Trajectory |
|---|---|---|
| **OpenClaw** | Multiple releases/day (stable + beta) | Scaling fast but accumulating backlog; needs triage sprint |
| **LobsterAI** | Near-daily merges; release branch cadence | Most consistent shipping cadence; stale PR backlog from April is the weak spot |
| **NanoBot** | Multiple merges/day; no formal tags yet | Fastest fix turnaround; memory system is the bottleneck |

### Tier 2 — Active Development (multiple commits/day, release cycle visible)

| Project | Activity Pattern |
|---|---|
| **IronClaw** | 50/50 issue/PR split daily; qa branch just promoted; record/replay infrastructure investment signals approaching stabilization |
| **Hermes Agent** | 50/50 daily; accumulating fixes for next patch; single-contributor dependency risk |
| **CoPaw** | 23/27 daily; hotfix-driven; v1.1.12b1 staging; regression cluster driving urgency |
| **ZeroClaw** | 14/35 daily; 31 open PRs; architectural consolidation (turn engine unification) in progress |
| **PicoClaw** | 6/14 daily; nightly release cadence; steady contributor base |

### Tier 3 — Maintenance / Exploring

| Project | Status |
|---|---|
| **NanoClaw** | Active PRs but zero merges in 24h; review bottleneck; security hardening in flight |
| **NullClaw** | Single-contributor maintenance; low community engagement |
| **Moltis** | Low activity; stable; K8s sandbox and local STT are aspirational differentiators |
| **TinyClaw / ZeptoClaw** | No activity in the 24h window |

### Maturity Assessment

The ecosystem is **bifurcated**: OpenClaw, IronClaw, and CoPaw are pushing toward production-grade enterprise deployments (with the complexity that entails), while PicoClaw, NanoBot, and Moltis serve narrower, more focused use cases (embedded, observable, infrastructure-aware respectively). No project has reached "boring stable" — every active project has open P0/P1 bugs. The most mature projects by infrastructure investment are **IronClaw** (QA harness, record/replay, e2e tests) and **NanoBot** (audit/observability, fix responsiveness).

---

## 7. Trend Signals

### Trend 1: The "Silent Failure" Problem Is the Ecosystem's Biggest User Retention Risk

Across every project, the most user-damaging bugs are not crashes — they are **silent failures**: dropped messages (NanoClaw #2506, Moltis #1116), phantom tool usage (CoPaw #5138), agent narration leaking to channels (OpenClaw #25592), and cron jobs that simply don't fire (CoPaw #5064). These erode trust invisibly until users switch tools.

> **Implication for developers:** Invest in delivery-confirmation semantics and observable state machines for message processing. "Fire and forget" is unacceptable for agent workflows.

### Trend 2: Memory Systems Are the Shared Unsolved Hard Problem

Every project with a memory or context system reports bugs — consolidation-induced context loss (NanoBot, Hermes), broken vector indexes (OpenClaw), memory leaks (OpenClaw, CoPaw), and prompt bloat from cursors not advancing (NanoBot). The "long-lived agent brain" remains an unsolved engineering challenge.

> **Implication for developers:** Memory systems need WAL-style durability (as OpenClaw's PR #92509 attempts), bounded retrieval, and automatic corruption recovery. The "store everything and search later" model is failing.

### Trend 3: Model Releases Are Breaking Tools Faster Than the Ecosystem Can Adapt

Gemini 3.5 Flash (PicoClaw #3111), Gemini 3.x tool calling (CoPaw #5163), MiniMax API changes (Hermes #44976), Kimi K2.7 Code (OpenClaw #92554) — every major model release in the last two weeks has caused provider-specific breakage in multiple projects.

> **Implication for developers:** Provider abstraction layers need automated conformance testing against model releases. Manual tracking is no longer sustainable at this release velocity.

### Trend 4: The Security Posture Is Shifting from Prompt-Based to Structural

The v2026.6.6 security hardening across 14+ surfaces in OpenClaw, NanoClaw's container capability dropping, IronClaw's hook fan-out caps, and OpenClaw's exec-approval denylist all signal a move away from "prompt the model to be safe" toward **structural, runtime-enforced security boundaries**.

> **Implication for developers:** Security cannot rely on system prompts. Expect runtime policy enforcement (tool allow/denylist, sandboxing, capability gating) to become table-stakes for production deployments.

### Trend 5: Multi-Agent Is the Next Frontier, but Orchestration Is Immature

IronClaw's "always allow across threads" (#4825), OpenClaw's subagent lifecycle hooks (#20418), Hermes's multi-response cross-fire (#444977), and CoPaw's Agent Team/Swarm request (#5139) all point to demand for **coordinated multi-agent workflows**. Current orchestration is "fire and forget" with no shared blackboard, capability profiling, or completion guarantees beyond webhook callbacks.

> **Implication for developers:** The next major differentiator will be reliable multi-agent orchestration — subagent lifecycle management, shared state, and structured completion semantics.

### Trend 6: Mobile and Edge Are Underserved but Growing

OpenClaw's APK requests (#9443), PicoClaw's embedded-friendly Rust design, and Moltis's local STT aspirations all represent demand for **non-server, non-desktop deployments**. The ecosystem is overwhelmingly built for cloud/VPS/hosted operation, but users want agents on phones, at the edge, and in cost-sensitive environments (PicoClaw's evolution token drain, #3012).

> **Implication for developers:** Lightweight runtimes, cost-aware execution throttling, and offline-first design are underserved niches with growing demand.

### Trend 7: User Experience Quality Is the New Battleground

IronClaw's systematic QA pass (14 issues from one tester, all fixed within 48h), PicoClaw's `turn.done` lifecycle signaling (#2,984), NanoBot's WebUI/config.json parity (#4313), and LobsterAI's unsaved-changes confirmations (#1473–1477) all show that **UX polish is now a competitive differentiator**, not just feature count.

> **Implication for developers:** The era of "ship features, fix later" is ending for this ecosystem. Users choosing between 12+ open-source alternatives are increasingly making decisions based on reliability, data-loss prevention, and first-run experience.

---

*Report generated by OWL — ZOO Company AI Assistant · Data source: GitHub community digests for 12 AI agent projects, 2026-06-13*

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-06-13

---

## 1. Today's Overview

NanoBot is in a **high-activity development phase**, with 30 PRs and 6 issues updated in the past 24 hours — a remarkably high PR-to-issue ratio (~5:1) that signals active contributor momentum and rapid code churn. No new tagged releases were published, indicating the team is still building toward a milestone. The project is currently focused on **stability hardening** (memory, cron, tool validation), **observability** (audit module), and **UI/API parity** (WebUI ↔ config.json). Memory system bugs dominate the open issue list, suggesting the Dream/memory consolidation architecture is still maturing.

---

## 2. Releases

**None** — No new releases in the past 24 hours.

---

## 3. Project Progress (Merged/Closed PRs)

| PR | Type | Summary |
|---|---|---|
| [#4319](https://github.com/HKUDS/nanobot/pull/4319) | feat | `tools.audit` for agent action observability — records tool invocations with 4 transport backends (loguru, webhook, JSONL, callback) |
| [#4318](https://github.com/HKUDS/nanobot/pull/4318) | feat | Duplicate/companion audit module PR (closed without merge — superseded by #4319) |
| [#4304](https://github.com/HKUDS/nanobot/pull/4304) | fix | Cron jobs now wait for spawned subagents before marking completion |
| [#4305](https://github.com/HKUDS/nanobot/pull/4305) | enhancement | Multiple custom providers support (closed — discussion likely moved to a tracking issue) |

**Key advances:**
- **Audit/observability infrastructure** landed (#4319), giving users production-grade tool-call tracing.
- **Cron reliability** improved — subagent lifecycle is now properly awaited (#4304).
- The **yu-xin-c** contributor has an entire quality-and-security fix train (memory cursor monotonicity, media attachment validation, read-only root enforcement, symlink escape prevention) still open and close to merge.

---

## 4. Community Hot Topics

### Top Active PRs (by relevance and scope)

- **[#4313](https://github.com/HKUDS/nanobot/pull/4313) — WebUI / config.json parity**
  Most ambitious open PR. Closes the long-standing gap between what the WebUI exposes and what `config.json` supports — adding write endpoints for temperature, tool limits, Dream, channels, and memory settings. **Underlying need:** Users want a single source of truth for configuration and a settings UI that doesn't silently ignore half of the config surface.

- **[#4316](https://github.com/HKUDS/nanobot/pull/4316) — Multi-provider TTS system**
  Adds OpenAI, Groq (Orpheus), and ElevenLabs TTS backends with WebUI/CLI discoverability. **Underlying need:** Voice output is becoming a first-class feature; users want provider flexibility, not vendor lock-in.

- **[#4296](https://github.com/HKUDS/nanobot/pull/4296) — Expanded Python SDK runtime controls**
  Upgrades the SDK from a thin `bot.run()` facade to a richer API with stable session, memory, and runtime controls. **Underlying need:** Programmatic/automation users (self-hosted power users, CI pipelines) need more than a CLI wrapper.

### Top Active Issues

- **[#4044](https://github.com/HKUDS/nanobot/issues/4044) — Short-term memory loss** (5 comments)
  Core user pain point. The agent loses conversational context within threads. Likely root cause is context window pressure interacting with the consolidation system.

- **[#4203](https://github.com/HKUDS/nanobot/issues/4203) / [#4006](https://github.com/HKUDS/nanobot/issues/4006) — Orphaned tool results eating all history** (both closed today)
  Critical data-loss-class bug fixed in the last 24h. If a user message is followed by an orphaned tool result, all messages were discarded.

---

## 5. Bugs & Stability

| Severity | Issue / Bug | Status | Fix PR |
|---|---|---|---|
| 🔴 **High** | [#4044](https://github.com/HKUDS/nanobot/issues/4044) — Conversational thread snaps; agent forgets what it asked | **Open** | 🔴 No fix PR yet — this is the highest-priority open issue |
| 🔴 **High** | [#4307](https://github.com/HKUDS/nanobot/issues/4307) — Post-turn consolidation wipes agent's own delivery message, breaking user follow-up references | **Open** | No fix PR |
| 🔴 **Critical** | [#4203](https://github.com/HKUDS/nanobot/issues/4203) — `find_legal_message_start` discards **all** messages on orphaned tool results | **Closed** ✅ | Fixed today |
| 🔴 **Critical** | [#4006](https://github.com/HKUDS/nanobot/issues/4006) — Orphaned tool results violate OpenAI/Anthropic spec, request rejection by strict APIs | **Closed** ✅ | Fixed today |
| 🟡 **Medium** | [#4309](https://github.com/HKUDS/nanobot/issues/4309) — `/v1/chat/completions` always returns zero token usage despite tracking real values internally | **Open** | Straightforward fix; likely incoming |
| 🟡 **Medium** | [#4321](https://github.com/HKUDS/nanobot/pull/4321) — Dream cursor not advanced when Dream disabled → prompt bloat | Fix PR open | #4321 |
| 🟡 **Medium** | [#4303](https://github.com/HKUDS/nanobot/pull/4303) — MCP `streamableHttp` server reconnection causes `RuntimeError` / GC crash | Fix PR open | #4303 |
| 🟢 **Low** | [#4315](https://github.com/HKUDS/nanobot/pull/4315) — Malformed history entries cause crashes in Dream/Memory reads | Fix PR open | #4315 |

**Assessment:** The closed critical bugs (#4203, #4006) are a **significant reliability win** — orphaned tool results were causing cascading failures. However, **memory remains the #1 open risk** (#4044, #4307), with two active bug reports describing context loss after consolidation. These are the issues most likely to drive user churn.

---

## 6. Feature Requests & Roadmap Signals

| Request | Signal Strength | Prediction |
|---|---|---|
| **Multiple custom providers** ([#4305](https://github.com/HKUDS/nanobot/issues/4305)) | — | High demand from multi-model users; template-based provider config is a reasonable architectural evolution |
| **WebUI / config.json parity** ([#4313](https://github.com/HKUDS/nanobot/pull/4313)) | Large PR, active | Near-merge — directly unifies two configuration UX surfaces |
| **Multi-provider TTS** ([#4316](https://github.com/HKUDS/nanobot/pull/4316)) | Dedicated PR | Near-merge — complete with docs and WebUI integration |
| **Agent action audit module** ([#4203](https://github.com/HKUDS/nanobot/pull/4320)) | Merged | ✅ Landed — signals production-readiness push |
| **Expanded Python SDK** ([#4296](https://github.com/HKUDS/nanobot/pull/4296)) | Dedicated PR | Near-merge — SDK maturity is clearly a strategic priority |
| **Memory system overhaul** (implicit from #4044, #4307, #4256, #4315) | Multiple bugs + PRs | In progress — cursor monotonicity, malformed-entry handling, and prompt bloat fixes are all open PRs. A larger architectural fix likely follows once consolidation stabilizes |

**Predicted next release themes:** Memory reliability, audit/observability, WebUI settings completeness, SDK expansion.

---

## 7. User Feedback Summary

**Recurring pain points:**

1. **Memory loss after consolidation** — The single most reported experience problem. Users describe the agent "forgetting" what it just said or asked, snapping conversational continuity (#4044, #4307). This is a **core trust issue** — if users can't rely on context persistence, they stop using the tool for multi-turn workflows.

2. **Orphaned tool results breaking history** — The severity was high (#4203, #4006). Users hit this mid-conversation and effectively lose their entire thread. Relief may now be in with today's fixes.

3. **Zero token usage reporting** — OpenAI-compatible API consumers on `#4309` need accurate `usage` fields for cost tracking and billing. Hardcoded zeros make NanoBot incompatible with production monitoring tooling.

4. **WhatsApp mentions** ([#4317](https://github.com/HKUDS/nanobot/pull/4317)) — Feature request in PR form for sender mentions. Users want richer messaging integration.

**Satisfaction signals:**
- The project ships fixes rapidly — multiple critical bugs addressed within 24h, suggesting a responsive maintainer team.
- Contributor diversity is strong (yu-xin-c, michaelxer, bjoshuanoah, La-Volpe, chengyongru, etc.).

---

## 8. Backlog Watch

These important issues/PRs need maintainer attention:

1. **[#4044](https://github.com/HKUDS/nanobot/issues/4044) — Short-term memory loss** | Created 2026-05-28 | **16 days open**, 5 comments, no linked fix PR
   This is the longest-standing high-severity open issue and the most impactful user experience problem. It needs either a diagnostic deep-dive or a prioritization decision.

2. **[#4307](https://github.com/HKUDS/nanobot/issues/4307) — Post-turn consolidation wipes delivery messages** | Created 2026-06-12 | **1 day open**, no linked fix
   Filed yesterday but describes the same category of memory/consolidation failure. Should be triaged alongside #4044 — they may share a root cause.

3. **[#4309](https://github.com/HKUDS/nanobot/issues/4309) — Zero token usage on /v1/chat/completions** | Created 2026-06-12
   Described by the reporter as straightforward ("the agent loop already tracks real usage"). A small fix with high API-compatibility value.

4. **yu-xin-c's security fix train** — PRs [#4119](https://github.com/HKUDS/nanobot/pull/4119) (symlink escape, 14 days open), [#4053](https://github.com/HKUDS/nanobot/pull/4053) (read-only root enforcement, 14 days open), [#4256](https://github.com/HKUDS/nanobot/pull/4256) (memory cursor monotonicity, 4 days open)
   Multiple security and correctness fixes from a single contributor sitting on the review queue. Worth batch-reviewing for a consolidated merge.

5. **Contributor burnout watch** — 9 PRs from `yu-xin-c` in the loss column. Confirm these are being reviewed and not siloed.

---

*Generated by OWL on 2026-06-13 from [HKUDS/nanobot](https://github.com/HKUDS/nanobot) GitHub data.*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent — Project Digest — 2026-06-13

## 1. Today's Overview

Hermes Agent is experiencing a period of intense, broad-spectrum development: 50 issues and 50 PRs touched in the last 24 hours signal one of its busiest recent days. The activity is spread across nearly every subsystem — Desktop GUI, gateway providers (Telegram, Slack, WhatsApp, Signal, WeCom, Matrix, BlueBubbles), CLI/TUI, Docker backend, MCP tooling, OAuth/auth flows, and multiple LLM providers (MiniMax, DeepSeek, OpenAI/Codex, Gemini). Notably, a single prolific contributor (`liuhao1024`) filed or flagged a large cluster of merged/closed and still-open PRs spanning Telegram docs, Docker log ownership, WhatsApp bridge, macOS traffic-light layout, and auxiliary-model picker fixes — suggesting a dedicated sprint rather than organic community trickle. The project has **zero new releases today**, which is notable given the volume of merged fixes; maintainers appear to be accumulating changes for an upcoming batch.

---

## 2. Releases

**No new releases today.**

There are also **no recent releases listed** in the provided data. The high volume of merged/closed PRs (#45270, #45312, #45268, #45274, #45261, #45282, etc.) and multiple P1 bugs being resolved (context compression leaks, session replay loops, infinite re-execution on interrupted tool calls) strongly suggests the next release will be a substantial stability-focused patch — likely a minor or patch version with regression fixes rather than a major bump.

---

## 3. Project Progress — Merged / Closed PRs (Today)

| PR | Type | Summary |
|---|---|---|
| **[#45312](https://github.com/NousResearch/hermes-agent/pull/45312)** | fix(telegram) | Honor server `retry_after` on Telegram flood-control fallback sends instead of a flat 3 s wait. |
| **[#45268](https://github.com/NousResearch/hermes-agent/pull/45268)** | fix(whatsapp) | Add a Node.js entrypoint shim for the Go-compiled `whatsmeow` bridge binary, fixing `SyntaxError: Invalid or unexpected token`. |
| **[#45274](https://github.com/NousResearch/hermes-agent/pull/45274)** + **[#45280](https://github.com/NousResearch/hermes-agent/pull/45280)** | fix(docker) | `chown` the parent `logs/gateways/` directory (not just the leaf) so late-added gateway profiles don't crash-loop in s6-log. |
| **[#45261](https://github.com/NousResearch/hermes-agent/pull/45261)** | fix(auth) | Self-heal Codex OAuth `refresh_token` rotation by re-importing from `~/.codex/auth.json`. |
| **[#45282](https://github.com/NousResearch/hermes-agent/pull/45282)** | fix(install) | POSIX installer skips creating `node`/`npm`/`npx` symlinks when a system-installed version exists, preventing shadowing of Homebrew/nvm. |
| **[#45270](https://github.com/NousResearch/hermes-agent/pull/45270)** | fix(desktop) | Persist and restore the last active Desktop session on startup instead of always creating a fresh draft. |
| **[#45265](https://github.com/NousResearch/hermes-agent/pull/45265)** | fix(slack) | Route Slack reaction triggers to a configurable target channel with permalink and allowlist support. |
| Closed issues of note today: **[#38389](https://github.com/NousResearch/hermes-agent/issues/38389)** / [#38391](https://github.com/NousResearch/hermes-agent/issues/38391) / [#38392](https://github.com/NousResearch/hermes-agent/issues/38392) (context compression summary leaking — P1 duplicates consolidated), **[#29824](https://github.com/NousResearch/hermes-agent/issues/29824)** (WebUI compaction block display, P1), **[#45242](https://github.com/NousResearch/hermes-agent/issues/45242)** (MiniMax OAuth auxiliary auth_type), **[#45230](https://github.com/NousResearch/hermes-agent/issues/45230)** (infinite re-execution loop on interrupted tool calls, P1).

**Theme:** A heavy stability-and-polish pass across adapters (Telegram, WhatsApp, Slack, Docker) and auth/Desktop UX. Several of the fixes (#45230, #45274, #45261) address real data-loss or crash-loop scenarios.

---

## 4. Community Hot Topics

### Top by Comment Count

| # | Type | Likes | Summary |
|---|---|---|---|
| **[#7237](https://github.com/NousResearch/hermes-agent/issues/7237)** | Bug (Closed) | 41 👍, 5 | `Error: Response truncated due to output length limit` — long-form CLI/Gateway responses cut mid-stream. *Still closed; no fix noted, likely a config workaround.* |
| **[#44497](https://github.com/NousResearch/hermes-agent/issues/44497)** | Bug (Open) | 4 👍 | Agent sends **two independent responses** to one WeChat message — context/thread cross-fire. |
| **[#44976](https://github.com/NousResearch/hermes-agent/issues/44976)** | Bug (Open) | 3 👍 | MiniMax native provider: nested single-element arrays in MCP tool args become `{"item": ...}`. |
| **[#17999](https://github.com/NousResearch/hermes-agent/issues/17999)** | Bug (Open) | 3 👍 | Windows `read_file` and terminal tools fail for `D:`-drive paths on native (non-WSL) Windows. |
| **[#41499](https://github.com/NousResearch/hermes-agent/issues/41499)** | Bug (Open) | 3 👍 | `electron-builder` desktop build fails for developers with Apple code-signing identities; needs ad-hoc signing. |
| **[#41693](https://github.com/NousResearch/hermes-agent/issues/41693)** | Bug (Open) | 3 👍 | Desktop renderer crash with `tapClientLookup: Index N out of bounds` triggers root error-boundary / "Reload window". |

### Underlying Needs

1. **Output truncation** — The most-commented issue (#7237) shows that users frequently produce long agent responses and have hit a hard output-length ceiling. The community needs either a configurable `max_tokens` override, smarter chunking, or a retry-with-continuation pattern.
2. **Multi-response / double-reply** — WeChat cross-fire (#44497) and Slack bot-to-bot silent drops (#30091) indicate the gateway event-routing layer needs better deduplication and thread-aware filtering.
3. **Platform purity** — Windows native path handling (#17999), macOS signing (#41499), SELinux Docker binds (#45106), and IPv6/IPv4 confusion in BlueBubbles (#45308) are all platform-specific compatibility gaps that suggest Hermes needs a broader cross-platform test matrix or CI gate.

---

## 5. Bugs & Stability

Ranked by severity (P1 → P3) within today's reports.

### P1 — Data Loss / Security / Core Breakage

| Issue | Status | Fix PR? |
|---|---|---|
| **[#7237](https://github.com/NousResearch/hermes-agent/issues/7237)** — Response truncated mid-stream on all channels | Closed (workaround) | ⚠️ Unknown |
| **[#43936](https://github.com/NousResearch/hermes-agent/issues/43936)** — SQLite `state.db` drops assistant messages on interrupt (Matrix); `.jsonl` fallback removed | Open | ❌ None |
| **[#23473](https://github.com/NousResearch/hermes-agent/issues/23473)** — Gateway leaks `VIRTUAL_ENV` into subprocesses, poisoning `uv sync` in any non-Hermes project | Open | ❌ None |
| **[#44976](https://github.com/NousResearch/hermes-agent/issues/44976)** — MiniMax MCP tool args collapse nested arrays | Open | ❌ None |
| Context compression leaks into chat (#38389, #33256, #29824) — **Closed today** | Closed | ✅ Resolved |

### P2 — Functional Breakage on Specific Platforms

| Issue | Status | Fix PR? |
|---|---|---|
| **[#44497](https://github.com/NousResearch/hermes-agent/issues/44497)** — WeChat double-response | Open | ❌ None |
| **[#44837](https://github.com/NousResearch/hermes-agent/issues/44837)** — Session DB flush drops user turn after repair (gateway warm sessions) | Closed | ✅ Likely merged |
| **[#17999](https://github.com/NousResearch/hermes-agent/issues/17999)** — Windows `D:` path read_file failure | Open | ❌ None |
| **[#41366](https://github.com/NousResearch/hermes-agent/issues/41366)** — Telegram video messages downloaded but never exposed to agent | Open | ❌ None |
| **[#44866](https://github.com/NousResearch/hermes-agent/issues/44866)** — MCP OAuth `/oauth/start` endpoint polls 30 s on probe failure instead of returning immediately | Open | ❌ None |
| Docker s6-log crash loop (#45274, #45280) — **Merged today** | Merged | ✅ #45274 / #45280 |
| SELinux Docker bind failure (#45106) | Open | ❌ None |
| MiniMax auxiliary OAuth auth_type crash (#45242) — **Closed today** | Closed | ✅ Resolved |

### P3 — UX / Polish / Minor

| Issue | Status | Fix PR? |
|---|---|---|
| **[#41499](https://github.com/NousResearch/hermes-agent/issues/41499)** — macOS code-signing identity collision in desktop build | Open | ❌ (needs `electron-builder.adhocSign: true`) |
| **[#41693](https://github.com/NousResearch/hermes-agent/issues/41693)** — Desktop renderer crash on `@assistant-ui/store` index lookup | Open | ❌ None |
| **[#44964](https://github.com/NousResearch/hermes-agent/issues/44964)** — `/sessions` CLI only shows `source=cli`, hides TUI | Open | ❌ None |
| **[#45029](https://github.com/NousResearch/hermes-agent/issues/45029)** — `/new` does not refresh model metadata (KV cache size) | Open | ❌ None |
| **[#45272](https://github.com/NousResearch/hermes-agent/issues/45272)** — CLI streaming display breaks words mid-line due to soft-wrap | Open | ❌ None |
| **[#45309](https://github.com/NousResearch/hermes-agent/issues/45309)** — `fallback_providers` nested under `model:` silently ignored | Open | ❌ None |
| **[#45308](https://github.com/NousResearch/hermes-agent/issues/45308)** — BlueBubbles `_webhook_url` normalizes `127.0.0.1` → `localhost`, breaks IPv4 delivery | Open | ❌ None |

---

## 6. Feature Requests & Roadmap Signals

| Request | Signal Strength | Likelihood Next Version |
|---|---|---|
| **Desktop UX polish** — auto-scroll, sidebar overlap fix, worktree-aware grouping ([#44140](https://github.com/NousResearch/hermes-agent/issues/44140), [#45273](https://github.com/NousResearch/hermes-agent/pull/45273), [#45266](https://github.com/NousResearch/hermes-agent/pull/45266)) | High — multiple PRs merged today already | ✅ **Very high** — actively being merged |
| **Unified cross-platform session history** ([#45275](https://github.com/NousResearch/hermes-agent/issues/45275) duplicate) | Medium — single user request, but conceptually aligned with Desktop session restore work | Medium — requires new backend, likely vNext |
| **Signal native quote/reply, edit, remote-delete** ([#39043](https://github.com/NousResearch/hermes-agent/issues/39043)) | Low — single request, P3 | Low — small adapter enhancement |
| **Dependency Review gate for PRs** ([#45041](https://github.com/NousResearch/hermes-agent/issues/45041)) | Low — single request, nice-to-have CI gate | Low — infra/tooling |
| **MCP stderr log rotation & filtering** ([#45285](https://github.com/NousResearch/hermes-agent/pull/45285)) | Medium — PR submitted, actively in review | High — already open as PR |
| **Per-turn reasoning_config overrides** ([#45284](https://github.com/NousResearch/hermes-agent/pull/45284)) | Medium — PR submitted | High — already open as PR |
| **Auxiliary chain fallback warning** ([#45314](https://github.com/NousResearch/hermes-agent/pull/45314)) | Medium — draft PR submitted | High — already open as PR |
| **`/steer` command fix (no canonical history mutation)** ([#45313](https://github.com/NousResearch/hermes-agent/pull/45313)) | Medium — draft PR | High — active draft |

**Prediction:** The next version will almost certainly include the Desktop UX pass (auto-scroll, sidebar fixes, session restore), several gateway adapter hardened fixes (Telegram retry_after, WhatsApp binary shim, Slack reaction routing, Docker log ownership), and an auth hardening pass (Codex OAuth refresh, symlink safety). I would not expect the output-truncation config or cross-platform session unification to land in the immediate next release — they need design work.

---

## 7. User Feedback Summary

### Pain Points

1. **Output truncation in long conversations** (#7237, 41 comments) — the top-voted issue shows serious frustration with response cutoff during lengthy agent outputs. Users on Telegram, Discord, Slack, and CLI are all affected.
2. **Windows second-class status** — Native Windows users face broken file reads for `D:` paths (#17999), broken terminal commands, and context compaction WebUI confusion (#33256). This suggests Windows test coverage is thin.
3. **Desktop instability** — Two separate crash-level issues (#41693 renderer crash, #41499 build failure) and UX regressions (no auto-scroll, sidebar covering scrollbar) point to a Desktop app that is rushing features without stabilizing the shell.
4. **Context compression poisoning visible chat** — Three P1 duplicates (#38389, #38391, #38392) and two additional reports (#33256, #29824). This was clearly a highly visible regression in v2026.5.28+. The fact that multiple duplicates were filed shows strong user frustration.
5. **Auth chain fragility** — MiniMax OAuth silently breaking all auxiliary tasks (#45242) and Codex refresh-token sync issues (#45261) indicate that auth plumbing needs dedicated test coverage.

### Satisfaction Signals

- The rapid closure of several long-standing bugs today (compaction leaks, Docker log loops, WhatsApp binary execution, session restore) shows maintainer responsiveness.
- Multiple contributors filed high-quality PRs with tests and references to draft status, suggesting a maturing contribution culture.

### Recurring Use Cases

- **Long-form generation** (reports, essays, code) via CLI and gateways — truncated output is a real workflow blocker.
- **Multi-channel messaging households** — users want a single agent brain across Telegram, WhatsApp, Slack, WebUI, and Desktop simultaneously, with consistent session state.
- **Local developer tool chaining** — `uv sync`, `poetry install`, etc. triggered by Hermes within user projects, complicated by `VIRTUAL_ENV` leakage (#23473).

---

## 8. Backlog Watch — Long-Unanswered Items Needing Attention

These issues are older, important, and have no visible fix or recent maintainer response:

| Issue | Age | Age (days) | Severity | Signal |
|---|---|---|---|---|
| **[#17999](https://github.com/NousResearch/hermes-agent/issues/17999)** — Windows `read_file` / terminal broken for `D:` paths | 2026-04-30 | ~44 | P2 | 3 comments, no assignee |
| **[#30091](https://github.com/NousResearch/hermes-agent/issues/30091)** — Slack bot-to-bot messages silently dropped even with `allow_bots=all` | 2026-05-21 | ~23 | P2 | 2 comments, stale |
| **[#23473](https://github.com/NousResearch/hermes-agent/issues/23473)** — Gateway leaks `VIRTUAL_ENV` into subprocesses, bricks user venvs | 2026-05-11 | ~33 | **P1** | 1 comment, high severity |
| **[#41366](https://github.com/NousResearch/hermes-agent/issues/41366)** — Telegram video messages cached but never exposed to AI (no multimodal path) | 2026-06-07 | ~6 | P2 | 2 comments, affects core capability |
| **[#44497](https://github.com/NousResearch/hermes-agent/issues/44497)** — WeChat double-response / thread cross-fire | 2026-06-11 | ~2 | P2 | 4 comments, actively reported |
| **[#44866](https://github.com/NousResearch/hermes-agent/issues/44866)** — MCP OAuth endpoint wastes 30 s on failure | 2026-06-12 | ~1 | P2 | Recent, but UX regression in a security-sensitive path |
| **[#45309](https://github.com/NousResearch/hermes-agent/issues/45309)** — `fallback_providers` nested under `model:` silently ignored (zero comments) | 2026-06-13 | 0 | P3 | Config-parsing config bug; likely to confuse more users silently |
| **[#45308](https://github.com/NousResearch/hermes-agent/issues/45308)** — BlueBubbles IPv4→localhost→IPv6 normalization breaks delivery (zero comments) | 2026-06-13 | 0 | P2 | New, zero engagement, real delivery failure |

**Highest-priority callouts:**
- **#23473 (`VIRTUAL_ENV` leak)** is a P1 that can silently destroy user development environments. It deserves a hotfix or at minimum a documented `VIRTUAL_ENV=` clear pattern in the subprocess invocation.
- **#17999 (Windows file access)** at 44 days with no response signals Windows is a neglected platform; a single triage comment would go a long way.
- **#30091 (Slack bot-to-bot)** has been open since late May and reflects a real interoperability gap for multi-agent Slack teams.
- **#45309 (silent fallback_providers)** and **#45308 (IPv6 webhook)** were filed today with zero comments — monitor these early before they accumulate confused users.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-06-13

---

## 1. Today's Overview

PicoClaw remains highly active with **6 issues** and **14 pull requests** updated in the last 24 hours, plus a fresh nightly release (`v0.2.9-nightly.20260612.413d3749`). The project shows strong community momentum across multiple domains: channel adapters (Telegram, DeltaChat, Pico WebSocket), provider integrations (Gemini, NEAR AI Cloud), bug fixes around JSON serialization safety, and UX polish for the Web chat interface. The volume of open PRs (11) outweighs merged/closed ones (3), suggesting the maintainer backlog is growing and may need attention. Overall project health is good — steady cadence, broad contributor base, and no single catastrophic issue dominating.

---

## 2. Releases

### `nightly` — v0.2.9-nightly.20260612.413d3749
- **Type:** Automated nightly build (may be unstable; use with caution)
- **Base:** v0.2.9 → main branch
- **Full Changelog:** https://github.com/sipeed/picocaw/compare/v0.2.9...main
- **Note:** This is the first nightly tagged against the v0.2.9 stable line, reflecting ongoing incremental development on `main`. No formal changelog is provided beyond the diff link.

---

## 3. Project Progress

### Merged / Closed Items (3)

| # | Item | Summary |
|---|------|---------|
| [#3113](https://github.com/sipeed/picoclaw/pull/3113) | `fix(channels): check json marshal/unmarshal errors in toChannelHashes` | Fixes silently discarded serialization errors in channel config hashing logic — a correctness and potential security fix. |
| [#3112](https://github.com/sipeed/picoclaw/pull/3112) | `fix(tools): handle json.Marshal error in toolloop tool call arguments` | Prevents silent data loss in conversation history when tool arguments fail to serialize. |
| [#3109](https://github.com/sipeed/picoclaw/issues/3109) | Channel-level permission scoping | Issue closed (likely resolved by the code path or deemed by design); the author immediately filed #3114 as a refined follow-up specifically for Telegram. |

**Key takeaway:** Two quick-fire JSON safety fixes by the same contributor (`chengzhichao-xydt`) were merged, improving robustness in core data paths (channel hashing and tool loop serialization). These are important defensive fixes that prevent silent corruption.

---

## 4. Community Hot Topics

### Most Active Issues (by comments & engagement)

1. **[#3012](https://github.com/sipeed/picoclaw/issues/3012)** — *Continuous token consumption every minute when evolution is enabled* (2 👍, 2 comments, 8 days stale → now marked stale)
   - **Underlying need:** Users enabling Evolution mode (especially "Draft" mode) observe runaway token costs. This is a significant adoption blocker for cost-conscious users and suggests the evolution polling loop doesn't properly gate or throttle itself.

2. **[#2984](https://github.com/sipeed/picoclaw/issues/2984)** — *Add explicit turn completion signal for Pico WebSocket clients* (2 👍, 2 comments)
   - **Underlying need:** External WebSocket clients built on the Pico Protocol need a deterministic `turn.done` event to know when the agent has fully finished processing. Currently they must infer completion from `typing.stop` or `message.update`, which is fragile.
   - **Follow-up activity:** PR [#3116](https://github.com/sipeed/picoclaw/pull/3116) by `afjcjsbx` directly addresses this, completing the `turn.done` lifecycle signaling.

3. **[#3114](https://github.com/sipeed/picoclaw/issues/3114)** — *Telegram permission scoping by conversation type (private/group/channel)*
   - **Underlying need:** A security concern — once a bot is added to a Telegram group, any whitelisted member can trigger dangerous operations (shell exec, file writes). Users want granular permission boundaries per conversation type.

### Most Active PRs

1. **[#3118](https://github.com/sipeed/picoclaw/pull/3118)** — *Add remote Pico WebSocket mode to picoclaw agent*
   - Allows `picoclaw agent --remote ws://...` to connect to a remote Pico WebSocket endpoint, decoupling the agent process from the local protocol server.

2. **[#3116](https://github.com/sipeed/picoclaw/pull/3116)** — *fix(pico): complete turn.done lifecycle signaling*
   - Directly resolves #2984 with lifecycle completion and `request_id` preservation.

3. **[#3115](https://github.com/sipeed/picoclaw/pull/3115)** — *Fix inline data URL media extraction for generic tool output*
   - Prevents session-history corruption when tools return text containing `data:image/...;base64,...` strings.

---

## 5. Bugs & Stability

### Bugs Ranked by Severity

| Severity | Issue | Summary | Fix PR Active? |
|----------|-------|---------|----------------|
| 🔴 **High** | [#3111](https://github.com/sipeed/picoclaw/issues/3111) | Tool execution fails with Gemini 3.5 Flash — `400 Bad Request` due to missing `thought_signature` in response schema | ❌ None yet |
| 🟠 **High** | [#3012](https://github.com/sipeed/picoclaw/issues/3012) | Infinite token drain when Evolution is enabled — evolved draft runs loop without apparent termination gate | ❌ None yet (stale) |
| 🟠 **Medium** | [#3110](https://github.com/sipeed/picoclaw/issues/3110) | Telegram adapter ignores `message_thread_id` in Forum topics — replies go to `#General` instead of the originating thread | ❌ None yet |
| 🟡 **Medium** | [#3115](https://github.com/sipeed/picoclaw/pull/3115) | Session history corruption from `data:` URL strings in tool output being treated as real media | ✅ PR #3115 open |
| 🟢 **Low** | [#3045](https://github.com/sipeed/picoclaw/pull/3045) | `allow_from` rejects Matrix user IDs with colon (`@alice:example.com`) due to naive parsing | ✅ PR #3045 open |

### Stability Notes
- The Gemini 3.5 Flash incompatibility (#3111) is likely to affect a growing user base as users migrate to newer Google models. The `thought_signature` requirement is a known breaking change in Google's agentic reasoning API schema.
- The Telegram Forum topic bug (#3110) affects any user running PicoClaw in a Telegram Supergroup, causing threads to silently misroute — a poor UX that may be hard to notice until users complain about missing context.

---

## 6. Feature Requests & Roadmap Signals

### Near-Term Candidates (likely in nightly / next minor version)

| Feature | Signal Strength | Evidence |
|---------|----------------|----------|
| **Telegram permission scoping by conversation type** | ⭐⭐⭐ High | Issue #3114 filed by the same user who closed #3109; clear demand for security boundaries |
| **Remote Pico WebSocket agent mode** | ⭐⭐⭐ High | PR #3118 already in flight; implements `--remote` flag |
| **Turn completion signaling (Pico WebSocket)** | ⭐⭐⭐ High | Issue #2984 + PR #3116 directly paired; near resolution |
| **Shift+Enter composer hint (Web UI)** | ⭐⭐ Medium | PR #3097 is straightforward UX polish |
| **NEAR AI Cloud provider** | ⭐⭐ Medium | PR #2917 adds first-class OpenAI-compatible provider support |
| **DeltaChat gateway** | ⭐⭐ Medium | PR #3063 adds new channel adapter |

### Longer-Term Signals
- **Channel-level permission model** (#3109 → #3114): Indicates the community outgrows the simple `allow_from` whitelist model. A more principled permission/role system may be needed.
- **Gemini model compatibility** (#3111): As Google releases more agentic models, PicoClaw's provider layer will need ongoing schema adaptation logic.

---

## 7. User Feedback Summary

### Pain Points

| Pain Point | Evidence | Impact |
|-----------|----------|--------|
| **Unbounded token costs** | #3012 | Financial concern; blocks Evolution adoption |
| **Security gaps in group/channel chats** | #3109, #3114 | Users don't want dangerous tools (exec, file ops) available to everyone in a group |
| **Telegram Forum threading broken** | #3110 | Degrades context management in large communities |
| **New AI model incompatibilities** | #3111 | Gemini 3.5 Flash breaking existing tool workflows |
| **WebSocket client integration difficulty** | #2984 | External developers building on Pico Protocol lack deterministic completion signals |

### Satisfaction Signals
- A small but active set of contributors is filing detailed reports with clear reproduction steps and environment info (notably `Giordano10`, `v2up-32mb`, `xpader`), suggesting a technically competent user base that remains engaged.
- Multiple contributors are self-solving (filing PRs for their own issues), indicating healthy community ownership.

### Use Cases Observed
- Running PicoClaw in **Telegram Supergroups/Forums** for community AI assistance
- Cost-sensitive deployments monitoring **evolution mode token usage**
- **Pico Protocol WebSocket clients** building custom front-ends on top of the agent
- **Matrix** users encountering auth/identity parsing issues
- **Gemini 3.5 Flash** early adopters integrating Google's latest models

---

## 8. Backlog Watch

### Long-Unanswered Items Needing Maintainer Attention

| Item | Age | Status | Risk |
|------|-----|--------|------|
| [#3012](https://github.com/sipeed/picoclaw/issues/3012) — Token drain in Evolution mode | 8 days | Open, now **stale** | 🔴 High — Stale-marked without resolution; silent financial impact on users |
| [#2964](https://github.com/sipeed/picoclaw/pull/2964) — Image input compression | 16 days | Open, **stale** | 🟡 Medium — Useful for bandwidth/cost reduction; may need rebase |
| [#2551](https://github.com/sipeed/picoclaw/pull/2551) — Channel identification refactor | 58 days | Open, **stale** | 🟠 High — Large structural refactor (58 days stale, 7 labels); may be superseding or need refresh |
| [#2917](https://github.com/sipeed/picoclaw/pull/2917) — NEAR AI Cloud provider | 23 days | Open | 🟡 Medium — New provider addition; reasonable to review |
| [#3045](https://github.com/sipeed/picoclaw/pull/3045) — Matrix `allow_from` fix | 6 days | Open | 🟡 Medium — Straightforward bug fix; quick review possible |

### Recommendations
1. **Resolve or reassign #3012** — Token drain is a high-severity operational issue. Either close with explanation or escalate to active development.
2. **Close or refresh #2551** — 58-day stale PRs risk bitrot. Either merge, request updates, or close to reduce review surface.
3. **Prioritize PR review for #3116, #3118, #3115** — These are fresh, well-scoped PRs that address open issues and have clear value.

---

*PicoClaw digest generated by OWL — ZOO company AI assistant. Data sourced from GitHub Activity on 2026-06-13.*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-06-13

---

## 1. Today's Overview

NanoClaw is experiencing a highly active development period with **14 items** touching the repo in the last 24 hours (5 issues, 9 PRs). Notably, **zero PRs have been merged** today and there are no new releases, suggesting a significant amount of work in the security, stability, and provider-capability space is still in-flight and not yet gated through to the main branch. Two new security-focused PRs (#2748, #2749) and a fix for Discord attachment handling (#2752) mark this as a day prioritizing hardening and channel reliability. No new version shipped, making the gap since the last release worth monitoring.

---

## 2. Releases

**No new releases** as of this digest. The project's latest tagged version remains the reference point; all activity below targets the `main` development branch.

---

## 3. Project Progress

With **0 merged/closed PRs** today, no features or fixes have reached a releasable milestone. However, nine PRs are open and freshly updated, many of which are close to merge-ready based on their scope:

| PR | Focus | Significance |
|---|---|---|
| [#2748](https://github.com/nanocoai/nanoclaw/pull/2748) | Container security hardening (`--cap-drop`, `no-new-privileges`, `pids-limit`) | Defense-in-depth against container escape/fork-bomb |
| [#2749](https://github.com/nanocoai/nanoclaw/pull/2749) | Gate `npm install` by package minimum release age | Supply-chain attack mitigation |
| [#2752](https://github.com/nanocoai/nanoclaw/pull/2752) | Fix Discord inbound attachment staging (text + images) | Channel reliability fix |
| [#2750](https://github.com/nanocoai/nanoclaw/pull/2750) | Recover stale `outbound.db` journals; classify poll races (#2516, #2640) | Stability / durability fix |
| [#2670](https://github.com/nanocoai/nanoclaw/pull/2670) | Self-heal poisoned-resume crash loop (#2669) | Agent runner resilience |
| [#2745](https://github.com/nanocoai/nanoclaw/pull/2745) | Opt-in persistent memory scaffold for providers | Feature seam / architecture |
| [#2746](https://github.com/nanocoai/nanoclaw/pull/2746) | Agent-surfaces capability seam | Feature seam / architecture |
| [#2747](https://github.com/nanocoai/nanoclaw/pull/2747) | SDK 2.2.1 bump — credential-stub mounts + pins | Dependency upgrade |

**Assessment:** The core team (particularly contributors `boazdori`, `sturdy4days`, and `omri-maya`) is driving a broadening push into security hardening and provider architecture seams. The lack of merges today may be due to CI/review bandwidth rather than code quality concerns.

---

## 4. Community Hot Topics

### Most Discussed Issue

**[#2506 — `send_message` dedup silently drops responses when turns complete within 60 seconds](https://github.com/nanocoai/nanoclaw/issues/2506)** (3 comments, by `mshirel`, open since 2026-05-16)

This is the most commented-upon active issue and the oldest unresolved item in the set. The core problem: the deduplication mechanism inside `processQuery` treats two distinct turns arriving within 60 seconds as duplicates, silently dropping the second response. This also affects follow-up messages that arrive while streaming is still in progress, since the poll-loop pushes them into the same `processQuery` call. **Underlying need:** The dedup logic needs to distinguish between genuinely duplicate messages and legitimately rapid successive turns — likely requiring a per-turn dedup key rather than a time-window approach.

### Security & Permission Concerns

**[#2711 — `create_agent` MCP tool is ungated despite "admin-only" documentation](https://github.com/nanocoai/nanoclaw/issues/2711)** (1 comment, reported 2026-06-07)

The `create_agent` tool is exposed to *every* container with no host-side role check, meaning any agent container can create new agent groups. This is a clear authorization bypass. **No dedicated PR yet** — this is likely to spawn or be bundled with a governance/permissions fix in the near term.

**[#2668 — Agent sessions have no per-tool timeout; a hung MCP tool blocks the session for up to 30 minutes](https://github.com/nanocoai/nanoclaw/issues/2668)** (1 comment, reported 2026-06-01)

Because tool calls run synchronously within an SDK turn and no heartbeat is emitted during flight, a single hung tool blocks the entire session. Users hitting this see agents appear "stuck" with no recovery until a 30-minute cold kill.

---

## 5. Bugs & Stability

Ranked by severity:

| Severity | Issue | Description | Fix PR Exists? |
|---|---|---|---|
| 🔴 **High** | [#2711](https://github.com/nanocoai/nanoclaw/issues/2711) | `create_agent` tool ungated — any container can create agent groups | ❌ No dedicated PR |
| 🔴 **High** | [#2668](https://github.com/nanocoai/nanoclaw/issues/2668) | No per-tool timeout → 30-min session hang | ❌ No dedicated PR |
| 🟠 **Medium** | [#2506](https://github.com/nanocoai/nanoclaw/issues/2506) | `send_message` dedup drops responses within 60s window | ❌ No dedicated PR (related: [#2750](https://github.com/nanocoai/nanoclaw/pull/2750) addresses outbound.db journal races) |
| 🟠 **Medium** | [#2669](https://github.com/nanocoai/nanoclaw/issues/2669) (closed by #2670) | Poisoned-resume crash loop in agent sessions | ✅ [PR #2670](https://github.com/nanocoai/nanoclaw/pull/2670) open |
| 🟡 **Low-Medium** | [#2751](https://github.com/nanocoai/nanoclaw/issues/2751) (**CLOSED**) | Budget-exhausted LLM turns silently dropped — user gets no reply | ℹ️ Closed — likely addressed or accepted as-known |

**Notable:** The outbound.db journal recovery PR [#2750](https://github.com/nanocoai/nanoclaw/pull/2750) and the poisoned-resume self-heal PR [#2670](https://github.com/nanocoai/nanoclaw/pull/2670) are both open and would close well-known stability issues if merged.

---

## 6. Feature Requests & Roadmap Signals

1. **[#2632 — Clarify Telegram agent-swarm / multi-bot identity status in v2](https://github.com/nanocoai/nanoclaw/issues/2632)**
   A user planning a v1→v2 migration found the `/add-telegram-swarm` skill's status ambiguous in v2. This signals that **v2 migration documentation and feature-parity guides** are needed before the old swarm feature is fully sunset. Likely to be addressed via docs or a migration guide PR rather than new code.

2. **[#2745](https://github.com/nanocoai/nanoclaw/pull/2745) & [#2746](https://github.com/nanocoai/nanoclaw/pull/2746) — Provider capability seams**
   Two parallel PRs introduce a **capability registry** and an **opt-in persistent memory scaffold**. These are clear signals that NanoClaw is building toward a modular provider architecture where individual providers can declare feature flags (memory, tool surfaces, etc.). This is likely foundational for the next major version.

3. **[#2747](https://github.com/nanocoai/nanoclaw/pull/2747) — SDK 2.2.1 credential-stub mounts**
   Upgrading `@onecli-sh/sdk` to 2.2.1 with machine-checkable pins and credential-stub mounts suggests the next release will include tighter LLM credential management.

**Prediction:** The next release (likely v2.0.65 or v2.1) will bundle security hardening (#2748, #2749), session resilience (#2670, #2750), Discord fixes (#2752), and the SDK upgrade (#2747) as a stability/security-focused patch.

---

## 7. User Feedback Summary

**Pain points emerging from this 24-hour window:**

- **Silent failures are the dominant complaint.** Whether it's dedup dropping responses (#2506), budget-exhausted LLM calls returning with no indication (#2751), or hung tools blocking sessions (#2668), users consistently report that NanoClaw "silently drops" or "fails to communicate" errors. The common thread: the system needs better error surfacing to users when things go wrong.

- **Security governance feels inconsistent.** Users encountering the `create_agent` tool (issue #2711) expected admin-gated behavior per the documentation but found it wide-open. Even if exploitation intent is benign, the mismatch between documented and actual permissions erodes trust — especially for multi-tenant / forked deployments.

- **Channel reliability is a sore spot.** The Discord attachment fix (#2752) and the Telegram swarm clarification request (#2632) both point to the fact that channel integrations are a deployment-critical surface area where bugs directly impact user experience in visible ways.

- **Migration anxiety.** Issue #2632 reveals that advanced users with custom forks are planning v1→v2 migrations but feel the path is unclear. The absence of a structured migration guide is a friction point for the project's most invested community members.

---

## 8. Backlog Watch

These items are at risk of being neglected and deserve urgent maintainer attention:

1. **[#2506](https://github.com/nanocoai/nanoclaw/issues/2506) — `send_message` dedup drops responses**
   Open since **May 16** (4+ weeks), has 3 community comments, and no maintainer response or assignee. This is a correct, thoroughly diagnosed bug affecting core message delivery. It is the longest-standing unresolved issue in the active set.

2. **[#2711](https://github.com/nanocoai/nanoclaw/issues/2711) — `create_agent` ungated**
   Reported June 7. This is a **security authorization bypass** that is trivially exploitable. Even if the maintainers decide the current behavior is acceptable, the mismatch between "admin-only" documentation in the tool description and the reality of no host-side gate must be resolved — one way or the other.

3. **[#2668](https://github.com/nanocoai/nanoclaw/issues/2668) — No per-tool timeout**
   Open since June 1. A single hung MCP tool can block a session for 30 minutes with no recovery path shorter than a cold kill. For production deployments, this is a significant availability issue. No maintainer response yet.

4. **All 9 open PRs with 0 reviews/merges** — None of the nine open PRs have received review comments or reactions. Given that several are straightforward fixes (#2752, #2753, #2670), a review pass would unblock significant progress.

> **OWL Note:** NanoClaw's maintainer-to-open-item ratio appears strained. With 14 active touchpoints and 0 merges in 24 hours, the backlog is growing faster than it's being cleared. Prioritizing a review sprint on the security PR (#2748), the authorization issue (#2711), and the dedup bug (#2506) would have outsized impact on project health.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest — 2026-06-13

---

## 1. Today's Overview

NullClaw shows moderate activity with **3 open PRs and 1 open issue** updated in the last 24 hours, but no merges or releases. All three PRs are from the same contributor (`vernonstinebaker`), suggesting focused incremental maintenance rather than broad community momentum. The project is in a stabilization phase — contributors are addressing configuration flexibility, log hygiene, and Discord gateway reliability. No new version shipped today, indicating the team is accumulating fixes before a release cycle.

---

## 2. Releases

**None.** No new releases in the last 24 hours.

---

## 3. Project Progress

No PRs were merged or closed today. Three PRs remain open and under review:

- **[#949 — fix: make queue_mode configurable from config.json](https://github.com/nullclaw/nullclaw/pull/949)** — Adds `agent.default_queue_mode` to `config.json`, moves `QueueMode` enum to `config_types.zig` as a single source of truth. This is a meaningful config architecture improvement.
- **[#951 — fix(agent_runner): suppress stderr initialization logs on agent failure](https://github.com/nullclaw/nullclaw/pull/951)** — Prevents initialization noise (memory plan, MCP server registration, channel startup logs) from being posted to channels as agent responses when the agent child process exits non-zero.
- **[#953 — fix(discord): recover closed gateway sockets](https://github.com/nullclaw/nullclaw/pull/953)** — Addresses Discord gateway reconnection robustness: closes active socket before joining heartbeat thread, treats stalled pre-HELLO reconnects as unhealthy after a grace window, adds regression tests.

---

## 4. Community Hot Topics

Activity is low across the board — no PRs or issues have comments or reactions (👍: 0 across all items). The most substantive discussion candidate is **Issue #952** (local Ollama model returning incomplete answers), which touches on a critical user workflow (local LLM integration). The three open PRs from `vernonstinebaker` are the most actively maintained threads, all updated on 2026-06-12.

---

## 5. Bugs & Stability

| Severity | Item | Description | Fix PR? |
|----------|------|-------------|--------|
| 🔴 High | [#952 — Local model (Ollama) returns incomplete answers](https://github.com/nullclaw/nullclaw/issues/952) | User reports Gemma via Ollama produces truncated/incomplete responses. No comments or reactions yet. | ❌ None |
| 🟡 Medium | [#951 — Stderr init logs posted as agent responses](https://github.com/nullclaw/nullclaw/pull/951) | Agent failure surfaces internal initialization logs to end users. | ✅ PR #951 open |
| 🟡 Medium | [#953 — Discord gateway socket recovery](https://github.com/nullclaw/nullclaw/pull/953) | Closed gateway sockets not properly cleaned up; stalled reconnects not detected. | ✅ PR #953 open |

**Issue #952 is the most critical unreported bug** — broken local model output directly impacts a core use case (self-hosted AI agents) and currently has no fix in progress.

---

## 6. Feature Requests & Roadmap Signals

- **Configurable queue mode** (PR #949) signals a push toward more user-configurable agent behavior without code changes. This aligns with a broader trend of making NullClaw more deployable in diverse environments.
- No explicit new feature requests were filed today. The implicit roadmap direction is **stability and configuration ergonomics** over new capabilities.

---

## 7. User Feedback Summary

- **Pain point:** Local LLM users (Ollama + Gemma) are experiencing broken agent output (#952). This is a significant friction point for users who prefer self-hosted models — a key demographic for an open-source AI agent.
- **Satisfaction signal:** The volume of maintenance PRs (config flexibility, log cleanup, gateway reliability) suggests the core team is responsive to operational quality, even if community engagement (comments/reactions) is currently low.
- **Use case highlighted:** Running NullClaw with local models via Ollama remains an active and important user workflow.

---

## 8. Backlog Watch

- **[#952 — Ollama incomplete answers](https://github.com/nullclaw/nullclaw/issues/952)** — Open since 2026-06-11, updated 2026-06-12, **0 comments, 0 reactions**. This bug affects a core integration path and needs triage. No maintainer response or linked PR yet.
- **PRs #949, #951, #953** — All from `vernonstinebaker`, all updated 2026-06-12, all with **undefined comments**. These appear ready for review but may be awaiting maintainer bandwidth.

---

*Data source: [github.com/nullclaw/nullclaw](https://github.com/nullclaw/nullclaw) | Digest generated by OWL for 2026-06-13*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-06-13

---

## 1. Today's Overview

IronClaw remains in a period of intense, high-output development. In the last 24 hours, **50 issues** (33 open, 17 closed) and **50 PRs** (32 open, 18 merged/closed) were updated — a volume that signals a large, active contributor base pushing hard on the Reborn WebChat v2 rewrite and its surrounding infrastructure. No new releases shipped today. The dominant themes are: (a) the **DeferredBusy drain** system — a multi-PR effort to ensure blocked-thread messages are not silently swallowed, (b) the **attachment pipeline** — a stacked-PR track (#4644) spanning registry, transcript contract, byte landing, and frontend UX, and (c) a wave of **Reborn UI/UX bug reports** from systematic QA by contributor `sunglow666`, covering composer behavior, sidebar state, identity display, and theme contrast. The project is clearly in a feature-build-and-stabilize phase ahead of a future release.

---

## 2. Releases

**None.** No new versions were published in the last 24 hours. The most recent release PR (#3708, still open) proposes bumping `ironclaw` from 0.24.0 → 0.29.1 with breaking changes in `ironclaw_common` and `ironclaw_skills`.

---

## 3. Project Progress

### Merged / Closed PRs (18 total; notable ones)

| PR | Summary |
|---|---|
| **#4834** | Promoted current `main` to the `qa` branch — signals the team considers the current state testable for QA. |
| **#4773** | Added record/replay machinery for QA-phrase traces on the Reborn runtime — deterministic CI replay of real Anthropic-model traces, eliminating manual QA judgment for tool-choice assertions. |
| **#4769** | Ported manual QA workflow scripts onto `RebornBinaryE2EHarness` — **22 new deterministic e2e tests**, no external services or Docker required. |
| **#4568** | Bounded BeforeCapability hook dispatch fan-out — fail-closed when a capability boundary exceeds the budget; preserves hook-poison semantics. |
| **#4562** | Added `SecurityAuditSink` path for auth-continuation dispatch failures — audit trail for blocked auth callbacks. |
| **#4569** | Enforced aggregate tenant predicate key caps across invocation and value predicate histories — eviction of oldest keys for both in-memory, libSQL, and Postgres backends. |

**Key takeaway:** The team is investing heavily in **test infrastructure** (record/replay, e2e harness expansion) and **hook/security hardening** (fan-out caps, audit logging). The `main → qa` promotion (#4834) suggests a QA cycle is beginning.

---

## 4. Community Hot Topics

### Most-discussed issues (by comment count)

1. **[#4825](https://github.com/nearai/ironclaw/issues/4825)** — *"Reborn: persist 'always allow' approvals across threads"* (3 comments)
   - **Underlying need:** Users expect that granting a capability approval (e.g., GSuite access) with "always allow" should be durable across all threads. Currently, `thread_id` is part of the approval scope, forcing re-approval in every new thread. This is a **core trust/UX friction point** — users who explicitly said "always allow" feel the system doesn't remember their intent.
   - **Fix in progress:** PR [#4835](https://github.com/nearai/ironclaw/pull/4835) (open) drops `thread_id` from the persistent approval scope.

2. **[#4703](https://github.com/nearai/ironclaw/issues/4703)** — *"[Reborn] NEAR AI model picker saves display name instead of model ID"* (3 comments, closed)
   - **Underlying need:** The model picker UI saves the human-readable name (e.g., "DeepSeek V4 Flash") rather than the canonical model ID, causing downstream resolution failures. This is a **data integrity bug** in the onboarding flow that silently breaks provider configuration.

3. **[#4817](https://github.com/nearai/ironclaw/issues/4817)** — *"DeferredBusy drain follow-ups: trusted-resubmit seam, stale-intent policy, startup sweep"* (2 comments)
   - **Underlying need:** Follow-up design decisions from the DeferredBusy drain PR (#4812). The drain works, but three architectural questions remain: (1) should drain resubmission go through a `product_workflow` replay entry point, (2) what is the policy for stale intents, and (3) should there be a startup sweep for orphaned deferred messages? These are **correctness and robustness concerns** for edge cases.

4. **[#4705](https://github.com/nearai/ironclaw/issues/4705)** — *"[Reborn] NEAR AI SSO setup fails in local environment"* (2 comments, closed)
   - **Underlying need:** GitHub, Google, and NEAR Wallet SSO all fail with `Invalid frontend_callback` in local development. This blocks **local development and testing** of auth flows — a significant contributor experience issue.

### Most-discussed PRs

- **[#4812](https://github.com/nearai/ironclaw/pull/4812)** — *"Drain DeferredBusy messages when the blocking run reaches terminal state"* (open, XL, core)
  - The centerpiece of the current sprint. Completes the blocked-thread UX arc: messages sent while a run is gated no longer disappear forever.

- **[#4836](https://github.com/nearai/ironclaw/pull/4836)** — *"Surface connected channels, delivery state, and run origin as a runtime-context slice"* (open, XL, core)
  - Gives the model ambient knowledge of which channels are connected and where delivery points — addressing repeated tester failures where Slack connection state was invisible to the agent.

---

## 5. Bugs & Stability

### Ranked by severity

**🔴 High — Data loss / silent failures**

| Issue | Description | Fix PR |
|---|---|---|
| [#4762](https://github.com/nearai/ironclaw/issues/4762) | Failed tool workflow causes follow-up messages and activity ordering to become inconsistent | None yet |
| [#4697](https://github.com/nearai/ironclaw/issues/4697) | Active provider status is inconsistent in Inference settings — UI shows one provider as active, but requests use a different one | None yet |
| [#4673](https://github.com/nearai/ironclaw/issues/4673) | NEAR AI provider config cannot be saved after successful Test connection (silent failure) | Closed (fix likely in a merged PR) |

**🟡 Medium — UX degradation / incorrect behavior**

| Issue | Description | Fix PR |
|---|---|---|
| [#4823](https://github.com/nearai/ironclaw/issues/4823) | No UI feedback when deleting a running conversation fails | None yet |
| [#4724](https://github.com/nearai/ironclaw/issues/4724) | Unsent draft is lost when leaving New Conversation | Closed |
| [#4720](https://github.com/nearai/ironclaw/issues/4720) | Attachment warning persists across conversations and cannot be cleared | Closed |
| [#4725](https://github.com/nearai/ironclaw/issues/4725) | Composer remains interactive while in Working state (hover/focus styling misleading) | Closed |
| [#4733](https://github.com/nearai/ironclaw/issues/4733) | Clicking response links navigates away from active conversation | Closed |
| [#4722](https://github.com/nearai/ironclaw/issues/4722) | Conversation messages do not display user or assistant identity | Closed |
| [#4721](https://github.com/nearai/ironclaw/issues/4721) | Sidebar "PINNED" section shows active conversation instead of pinned conversations | Closed |
| [#4719](https://github.com/nearai/ironclaw/issues/4719) | Conversation content area flickers when returning to a chat | Closed |
| [#4796](https://github.com/nearai/ironclaw/issues/4796) | LLM lacks awareness of current date/time unless explicitly using a time tool | None yet |
| [#4759](https://github.com/nearai/ironclaw/issues/4759) | Workspace path is duplicated when using workspace-relative paths | None yet |
| [#4696](https://github.com/nearai/ironclaw/issues/4696) | Local Ollama Test connection reports success when Ollama is unavailable | None yet |

**🟢 Low — Cosmetic / minor**

| Issue | Description | Fix PR |
|---|---|---|
| [#4819](https://github.com/nearai/ironclaw/issues/4819) | Attachment warning banner difficult to read in Light theme (low contrast) | None yet |
| [#4723](https://github.com/nearai/ironclaw/issues/4723) | New conversation composer hover state only highlights top border | None yet |

**Infrastructure / CI:**

| Issue | Description | Fix PR |
|---|---|---|
| [#4824](https://github.com/nearai/ironclaw/issues/4824) | `cargo-deny` failing repo-wide due to new RUSTSEC advisories against postgres crates (DoS vectors) | None yet |
| [#4813](https://github.com/nearai/ironclaw/issues/4813) | Long CI test jobs need sharding for faster feedback | None yet |

---

## 6. Feature Requests & Roadmap Signals

| Request | Issue | Likelihood of near-term delivery |
|---|---|---|
| **Batch DeferredBusy drain** — drain all queued messages in a single run instead of one-at-a-time cascade | [#4832](https://github.com/nearai/ironclaw/issues/4832) | **High** — depends on #4831 which is already open; natural optimization of shipped #4812 |
| **Per-thread DeferredBusy index** — avoid full transcript scans in filesystem backend | [#4833](https://github.com/nearai/ironclaw/issues/4833) | **High** — performance follow-up to #4812, same author |
| **Engine V2 LLM usage tracking in admin API** — `/api/admin/usage` doesn't cover Reborn/Engine V2 paths | [#4822](https://github.com/nearai/ironclaw/issues/4822) | **Medium** — important for production monitoring but not user-facing |
| **Slack as product-adapter extension** — remove Slack from hardcoded built-in channel list | [#4778](https://github.com/nearai/ironclaw/pull/4777) (PR) | **High** — PR already open |
| **Decompose `slack_delivery.rs`** (~4k lines) into focused modules | [#4818](https://github.com/nearai/ironclaw/issues/4818) | **Medium** — architectural cleanup, not urgent |

**Prediction for next release:** The DeferredBusy drain system (#4812 → #4831 → #4832), the "always allow" cross-thread fix (#4835), and the attachment pipeline (#4654, #4655, #4668, #4670, #4738) are all stacked and advancing. These, combined with the QA infrastructure (#4769, #4773), suggest the next release will be a **significant Reborn stabilization milestone** with attachment support, reliable message draining, and hardened auth/approval flows.

---

## 7. User Feedback Summary

**Dominant pain points from the last 24 hours:**

1. **"Always allow" doesn't mean always.** Users who explicitly grant persistent approvals are re-prompted in every new thread (#4825). This erodes trust in the permission system and creates repetitive friction. The fix (PR #4835) is already in flight.

2. **Reborn WebChat v2 has systematic UX polish gaps.** Contributor `sunglow666` filed a remarkable **14 issues** (June 10–12) covering: missing user/assistant avatars, broken pin/unread sidebar semantics, composer state inconsistencies, lost drafts, navigation-away-from-chat links, theme contrast, and more. Most are closed — suggesting rapid fix turnaround — but the volume indicates the Reborn frontend was shipped with significant polish debt.

3. **Silent failures erode confidence.** Multiple issues report operations that fail without feedback: saving provider config (#4673, closed), deleting running conversations (#4823), and Ollama test connection reporting success when the service is down (#4696). Users cannot distinguish "worked" from "silently failed."

4. **Model lacks temporal awareness.** Issue #4796 highlights that the LLM may answer time-sensitive questions with wrong dates even when a time tool exists — a prompt engineering / tool-routing issue that affects calendar, scheduling, and planning workflows.

5. **Provider configuration is confusing.** Issues #4697 and #4703 reveal that the Inference settings UI shows inconsistent active provider state, and the model picker saves display names instead of IDs. Users cannot reliably determine which backend is serving their requests.

**Satisfaction signals:** The rapid closure rate of UI bugs (most `sunglow666` issues closed within 1–2 days) and the `main → qa` promotion (#4834) suggest the team is responsive and converging on a testable state.

---

## 8. Backlog Watch

These items have been open for 2+ days with no comments or resolution, and are important enough to warrant maintainer attention:

| Item | Age | Why it matters |
|---|---|---|
| **[#4824](https://github.com/nearai/ironclaw/issues/4824)** — `cargo-deny` failing on main due to RUSTSEC advisories | 1 day (but failing for 3 runs) | Blocks all PR CI; postgres DoS advisories are security-relevant |
| **[#4813](https://github.com/nearai/ironclaw/issues/4813)** — CI test jobs too large, need sharding | 1 day | Slows every PR push; contributor `think-in-universe` flagged concrete examples |
| **[#4696](https://github.com/nearai/ironclaw/issues/4696)** — Ollama test connection false positive | 3 days, 0 comments | Misleads users into thinking their Ollama setup works when it doesn't |
| **[#4796](https://github.com/nearai/ironclaw/issues/4796)** — LLM lacks date/time awareness | 1 day, 1 comment | Affects all time-sensitive workflows; may need prompt/tool-routing fix |
| **[#4759](https://github.com/nearai/ironclaw/issues/4759)** — Workspace path duplication | 2 days, 1 comment | File creation via workspace-relative paths produces wrong paths |
| **[#4818](https://github.com/nearai/ironclaw/issues/4818)** — `slack_delivery.rs` ~4k lines needs decomposition | 1 day, 0 comments | Architectural debt flagged during #4811 review; past the 3k-line budget |
| **[#3708](https://github.com/nearai/ironclaw/pull/3708)** — Release PR (0.24.0 → 0.29.1) | 28 days open | Stale release PR with breaking changes; needs resolution or closure |

---

*Data source: nearai/ironclaw GitHub repository. Digest generated 2026-06-13.*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-06-13

---

## 1. Today's Overview

LobsterAI saw a highly active day with **17 pull requests updated** (11 merged/closed, 6 open) and **1 issue closed**, signaling a strong release cadence. The most significant event is the **merge of the `release/2026.6.11` branch into main** (PR #2158), delivering a substantial feature release. The project is clearly in a rapid iteration phase, with heavy investment in the Computer Use feature, realtime ASR voice input, and artifact sharing. No new releases were published today, but the release branch merge suggests a version drop is imminent. Community engagement on new issues is low (only 1 issue, already closed), while a cluster of stale open PRs from early April indicates a backlog that needs maintainer triage.

---

## 2. Releases

**No new releases today.** The release branch `release/2026.6.11` was merged into `main` via PR #2158, which typically precedes a tagged release. Based on the PR summary, the upcoming release includes:

- **Computer Use MVP** and built-in Computer Use kit
- **Realtime ASR voice input** for cowork prompts
- **HTML artifact public sharing mode selection**
- **Image and SVG artifact sharing support**

Users should watch for the tagged release on the [releases page](https://github.com/netease-youdao/LobsterAI/releases).

---

## 3. Project Progress

### Major Feature: Release 2026.6.11 Merge (PR #2158)
The headline of the day — a large release branch merge touching **renderer, docs, main, openclaw, skills, cowork, and artifacts** across Windows and other platforms. This is a feature-packed release that significantly expands LobsterAI's capabilities.

### Computer Use Runtime Bump (PR #2156)
Bumped the managed Computer Use runtime to **1.0.7**, adding UIA breadcrumbs in the helper to diagnose unexpected helper exits. This is a stability improvement for the newly introduced Computer Use feature.

### Media Fix: Image Extension Correction (PR #2157)
Fixed a bug where generated images were saved with incorrect file extensions (e.g., PNG content saved as `.jpg`/`.jpeg`/`.webp`). The fix prioritizes detecting the actual file format from file bytes and overrides incorrect server-returned extensions. Regression tests added.

### Voice Input Fix: Duplicate ASR Start Prevention (PR #2155)
Fixed a race condition in the cowork voice input flow that could trigger duplicate realtime ASR start requests. A design note was added documenting the start-race behavior.

### Cowork: Model Metadata After Stopped Streams (PR #2154)
Fixed model metadata not being displayed for manually stopped partial replies. Ensures streaming assistant messages are finalized before abort cleanup.

### Cowork: Same-Name Package Model Selection (PR #2153)
Fixed model selection state to properly distinguish between same-id package and custom models during OpenClaw model normalization, preserving explicit `lobsterai-server/...` model references.

### UX Polish: Unsaved Changes Confirmations (PRs #1473, #1474, #1475, #1476, #1477)
A batch of five UX improvement PRs were merged, all addressing **silent data loss** scenarios:
- **PR #1473**: Agent creation modal — unsaved changes confirmation on close
- **PR #1474**: Agent settings panel — unsaved changes confirmation on close
- **PR #1475**: MCP server config modal — unsaved changes confirmation on close
- **PR #1476**: Input box draft persistence on session/view switch
- **PR #1477**: Re-edit history message — confirmation before overwriting current input

---

## 4. Community Hot Topics

### Issue #1 — OpenAI API Type Error (CLOSED)
- **URL**: [netease-youdao/LobsterAI#1](https://github.com/netease-youdao/LobsterAI/issues/1)
- **Author**: simson2010 | **Comments**: 7 | **Created**: 2026-02-19
- **Summary**: User configured MiniMax API key successfully, but switching to OpenAI message type resulted in a `400 invalid params` error. This was the most-commented issue and was closed on 2026-06-12.
- **Analysis**: This reflects a **model provider configuration pain point** — users expect seamless switching between API types, but parameter validation differs across providers. The 7 comments suggest this affected multiple users. The closure without a linked fix PR is notable; it may have been resolved through documentation or a separate fix.

### Stale Open PRs with Community Value
Several open PRs from early April have been marked stale but address real user needs:
- **PR #1449** — Scheduled task execution record grouping/collapsing in sidebar
- **PR #1453** — Disabled skills still being injected into conversation prompts
- **PR #1456** — Shortcut key conflict detection missing

These represent **quality-of-life improvements** that the community has identified but maintainers haven't yet prioritized.

---

## 5. Bugs & Stability

### High Severity

| Bug | Status | Fix PR |
|-----|--------|--------|
| **Gateway infinite restart loop** — OpenClaw gateway enters infinite restart cycle after repeated startup failures, paralyzing the entire app (v4.1 regression) | Open (stale) | [PR #1446](https://github.com/netease-youdao/LobsterAI/pull/1446) |
| **Disabled skills still injected into prompts** — Skills disabled in management UI still have their prompts injected into conversations | Open (stale) | [PR #1453](https://github.com/netease-youdao/LobsterAI/pull/1453) |

### Medium Severity

| Bug | Status | Fix PR |
|-----|--------|--------|
| **Image saved with wrong extension** — PNG content saved as .jpg/.webp due to trusting server-returned filename | ✅ Fixed | [PR #2157](https://github.com/netease-youdao/LobsterAI/pull/2157) |
| **Duplicate ASR voice input starts** — Race condition triggers multiple realtime ASR sessions | ✅ Fixed | [PR #2155](https://github.com/netease-youdao/LobsterAI/pull/2155) |
| **Model metadata lost on stopped streams** — Partial replies lose model info when manually stopped | ✅ Fixed | [PR #2154](https://github.com/netease-youdao/LobsterAI/pull/2154) |
| **Scheduled task silent failure** — Non-repeating task creation fails silently when date field is cleared | Open (stale) | [PR #1454](https://github.com/netease-youdao/LobsterAI/pull/1454) |
| **Shortcut key conflicts undetected** — No warning when multiple functions share the same shortcut | Open (stale) | [PR #1456](https://github.com/netease-youdao/LobsterAI/pull/1456) |

### Low Severity

| Bug | Status | Fix PR |
|-----|--------|--------|
| **i18n missing on Agent settings** — Delete button and skill selector show hardcoded English | Open (stale) | [PR #1448](https://github.com/netease-youdao/LobsterAI/pull/1448) |
| **Silent data loss on modal close** — Multiple modals close without confirming unsaved changes | ✅ Fixed | [PRs #1473–1477](https://github.com/netease-youdao/LobsterAI/pull/1473) |

---

## 6. Feature Requests & Roadmap Signals

Based on merged and open PRs, the following features are actively being developed or requested:

1. **Computer Use MVP** — Already merged in the release branch. This is clearly a flagship feature for the 2026.6.x cycle, with ongoing runtime updates (PR #2156) indicating active stabilization.

2. **Realtime ASR Voice Input** — Merged in release branch with a follow-up race condition fix (PR #2155). Voice-first interaction is a clear strategic direction.

3. **Artifact Sharing (HTML, Image, SVG)** — Public sharing mode selection and multi-format support merged. This suggests LobsterAI is positioning itself as a **content creation and sharing platform**, not just a chat interface.

4. **Scheduled Task Management UX** (PR #1449) — Collapsing grouped execution records for recurring tasks. This is a **strong signal** that scheduled/cowork tasks are seeing real production use and the sidebar scalability problem needs addressing. Likely candidate for the next minor release.

5. **Shortcut Conflict Detection** (PR #1456) — As the feature surface grows, keyboard shortcut management becomes critical. This will likely become a priority as more actions are added.

---

## 7. User Feedback Summary

### Pain Points

- **Model provider configuration complexity**: Issue #1 highlights that switching between API providers (MiniMax → OpenAI) is not seamless, causing confusing 400 errors. Users expect the abstraction layer to handle parameter translation.
- **Silent data loss**: The cluster of PRs (#1473–1477) addressing unsaved changes across modals and input fields indicates this was a **widespread user complaint**. Users were losing work without warning.
- **Gateway stability**: The infinite restart loop (PR #1446) is a critical reliability issue that can make the entire application unusable. This is a v4.1 regression, suggesting a recent change introduced the bug.
- **Skill management trust**: Users who disable skills expect them to be fully inactive (PR #1453). The current behavior erodes trust in the settings system.

### Satisfaction Signals

- The rapid merge of 11 PRs in a single day suggests the team is responsive and shipping fixes quickly.
- The Computer Use and voice input features show the project is innovating beyond basic chat, which likely excites power users.
- The artifact sharing features suggest a growing use case around **content creation workflows**.

### Use Cases Observed

- **Cowork/scheduled task automation**: Multiple PRs touch scheduled task execution, session management, and sidebar organization — indicating users rely on LobsterAI for recurring automated tasks.
- **Multi-model workflows**: Users configure multiple API providers and switch between them, suggesting cost/performance optimization behavior.
- **Content generation**: Image generation with proper format handling, HTML/SVG artifact creation and sharing.

---

## 8. Backlog Watch

The following PRs have been open since **April 3, 2026** and marked as stale, but address important issues that affect user experience and stability:

| PR | Title | Days Open | Risk |
|----|-------|-----------|------|
| [#1446](https://github.com/netease-youdao/LobsterAI/pull/1446) | Fix gateway infinite restart loop | 70+ | **Critical** — App-breaking regression |
| [#1453](https://github.com/netease-youdao/LobsterAI/pull/1453) | Fix disabled skills still injected into prompts | 70+ | **High** — Security/trust issue |
| [#1454](https://github.com/netease-youdao/LobsterAI/pull/1454) | Fix scheduled task silent creation failure | 70+ | **Medium** — Silent failure |
| [#1456](https://github.com/netease-youdao/LobsterAI/pull/1456) | Fix shortcut key conflict detection | 70+ | **Medium** — UX confusion |
| [#1448](https://github.com/netease-youdao/LobsterAI/pull/1448) | Fix i18n on Agent settings page | 70+ | **Low** — Localization |
| [#1449](https://github.com/netease-youdao/LobsterAI/pull/1449) | Scheduled task record grouping | 70+ | **Medium** — Scalability |

**Recommendation**: PR #1446 (gateway restart loop) and PR #1453 (disabled skills) should be prioritized as they represent **correctness and reliability issues** that have been stale for over two months. The community has done the diagnostic work; these need maintainer review and merge decisions.

---

*Data source: [github.com/netease-youdao/LobsterAI](https://github.com/netease-youdao/LobsterAI) | Digest generated: 2026-06-13*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-06-13

---

## 1. Today's Overview

Moltis shows moderate activity with 3 open issues and 1 open PR updated in the past 24 hours, but no new releases or merged PRs. The project is in a steady-state maintenance and feature-exploration phase: contributors are actively filing bugs and proposing significant new capabilities (Kubernetes sandboxing, local STT), while a targeted WhatsApp delivery fix is under review. No closed issues or merged PRs today suggest the maintainers are still triaging or reviewing incoming work. Overall project health appears stable with healthy community engagement.

---

## 2. Releases

No new releases in the reporting period.

---

## 3. Project Progress

No PRs were merged or closed today. The single active PR — **#1116** — targets a WhatsApp reply delivery bug and is still open, awaiting review or further iteration.

---

## 4. Community Hot Topics

| # | Item | Comments | Signal |
|---|------|----------|--------|
| 1 | **#1115** — [Bug: Fastmail MCP Authorisation](https://github.com/moltis-org/moltis/issues/1115) | 2 | Users hitting auth failures with Fastmail's MCP integration — a friction point for email-connected agent workflows. |
| 2 | **#1118** — [Feature: Kubernetes-native sandbox backend](https://github.com/moltis-org/moltis/issues/1118) | 1 | Strong signal from infrastructure-oriented users wanting VM-level isolation (Kata/gVisor) for untrusted LLM-generated code execution. |
| 3 | **#1102** — [Feature: FunASR/SenseVoice local STT](https://github.com/moltis-org/moltis/issues/1102) | 1 | Demand for fast, fully-local speech-to-text to reduce latency and cloud dependency in voice assistant mode. |

**Analysis:** The community is pushing Moltis in two directions simultaneously — deeper infrastructure hardening (sandbox isolation) and richer local-first AI capabilities (on-device STT). The Fastmail auth bug (#1115) has the most comments, indicating it's actively blocking real users.

---

## 5. Bugs & Stability

| Severity | Issue | Description | Fix PR? |
|----------|-------|-------------|---------|
| 🔴 **High** | **#1115** — [Fastmail MCP Authorisation](https://github.com/moltis-org/moltis/issues/1115) | Authentication failure with Fastmail MCP integration blocks email workflows. | ❌ None yet |
| 🟡 **Medium** | **#1116** (PR) — [WhatsApp @lid reply delivery](https://github.com/moltis-org/moltis/pull/1116) | Replies to privacy-enabled @lid chats silently dropped; agent produces output but user never receives it. | ✅ PR #1116 open |

The WhatsApp delivery bug has a fix already in PR form, which is positive. The Fastmail auth issue has no associated fix and is the most impactful open bug.

---

## 6. Feature Requests & Roadmap Signals

| Feature | Issue | Likelihood of near-term inclusion | Rationale |
|---------|-------|----------------------------------|-----------|
| Kubernetes sandbox backend | [#1118](https://github.com/moltis-org/moltis/issues/1118) | Medium | Ambitious scope; requires significant architecture work. Likely a longer-term effort. |
| Local STT (FunASR/SenseVoice) | [#1102](https://github.com/moltis-org/moltis/issues/1102) | Medium-High | Aligns with local-first trend; SenseVoice is lightweight and well-documented. Could be a strong candidate for next minor release. |

**Prediction:** Local STT integration is the most likely candidate for the next release cycle given its focused scope and clear user demand for low-latency voice interaction.

---

## 7. User Feedback Summary

- **Pain point — Email integration reliability:** The Fastmail MCP auth bug (#1115) reflects real frustration with third-party service connectors breaking silently. Users expect seamless MCP tool integration.
- **Pain point — WhatsApp edge cases:** The @lid privacy chat issue (#1116) shows that Moltis users rely on WhatsApp as a primary agent interface, and silent message drops erode trust.
- **Satisfaction signal — Voice assistant interest:** The local STT request (#1102) opens with "Great voice assistant project!" — positive sentiment, but users want the stack to be fully local and fast.
- **Infrastructure maturity demand:** The Kubernetes sandbox request (#1118) signals that advanced users are evaluating Moltis for production workloads requiring strong isolation guarantees.

---

## 8. Backlog Watch

| Item | Age | Risk | Recommendation |
|------|-----|------|----------------|
| **#1102** — [Local STT feature request](https://github.com/moltis-org/moltis/issues/1102) | 9 days old, 1 comment | Low urgency but high interest | Acknowledge and tag for roadmap; low effort to scope. |
| **#1115** — [Fastmail MCP auth bug](https://github.com/moltis-org/moltis/issues/1115) | 2 days old, 2 comments | **High** — blocks email workflows | Prioritize triage; assign a maintainer or request reproduction steps. |
| **#1116** — [WhatsApp @lid fix PR](https://github.com/moltis-org/moltis/pull/1116) | 1 day old, no review | Medium — fix exists but unreviewed | Needs maintainer review/merge to close the loop on a known delivery bug. |

**Key takeaway:** PR #1116 is the most actionable item — a fix is ready and just needs review. Issue #1115 is the most urgent open bug and should be the next priority for the maintainers.

---

*Generated by OWL · Data source: github.com/moltis-org/moltis · 2026-06-13*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-06-13

---

## 1. Today's Overview

CoPaw remains highly active with **23 issues and 27 PRs updated in the last 24 hours**, reflecting a fast-moving project navigating a critical backend migration window. Development focus is concentrated on the **AgentScope 1.x → 2.0 migration** (Issue [#4727](https://github.com/agentscope-ai/CoPaw/issues/4727)), which is a breaking change expected to define the next major release. A significant volume of bug reports has followed the v1.1.11 and v1.1.11.post2 releases, indicating some regression pain. Multiple hotfix PRs merged today targeting console regressions, memory config loss, and session redirection bugs. No new releases shipped today despite two version-bump PRs merged (beta1 and b1 format fixes), suggesting a release is imminent.

---

## 2. Releases

**No new releases today.**

However, two version-bump PRs were merged today — [PR #5157](https://github.com/agentscope-ai/CoPaw/pull/5157) (bump to `1.1.12.beta1`) and [PR #5159](https://github.com/agentscope-ai/CoPaw/pull/5159) (version format correction to `1.1.12b1`) — indicating that **v1.1.12b1 is staging** and a release is likely imminent. The accumulated bugs in v1.1.11 (memory config loss, file download 404, session bugs) strongly motivate this patch cycle.

---

## 3. Project Progress

### Merged/Closed Items Today (6 PRs closed, 7 issues closed)

| Item | Type | Summary |
|------|------|---------|
| [PR #5144](https://github.com/agentscope-ai/CoPaw/pull/5144) | Fix | Force-render Collapse panels to prevent memory config loss (fixes [#5137](https://github.com/agentscope-ai/CoPaw/issues/5137)) |
| [PR #5147](https://github.com/agentscope-ai/CoPaw/pull/5147) | Fix | Fixed session redirection when switching Coding Mode (fixes [#5142](https://github.com/agentscope-ai/CoPaw/issues/5142)) |
| [PR #5154](https://github.com/agentscope-ai/CoPaw/pull/5154) | Fix/Refactor | Refactored memory search tool UI rendering (fixes [#5098](https://github.com/agentscope-ai/CoPaw/issues/5098)) |
| [PR #5121](https://github.com/agentscope-ai/CoPaw/pull/5152) | CI/Chore | Added release verification gate between build and publish |
| [PR #5022](https://github.com/agentscope-ai/CoPaw/pull/5022) | Fix/Codex | Guard agent workspace restore targets to prevent path traversal |
| [PR #4144](https://github.com/agentscope-ai/CoPaw/pull/4144) | Fix/CLI | Use loopback for desktop wildcard readiness checks (`0.0.0.0` on Windows) |
| [PR #5157](https://github.com/agentscope-ai/CoPaw/pull/5157) + [PR #5159](https://github.com/agentscope-ai/CoPaw/pull/5159) | Release | Version bumped to `1.1.12b1` (format correction) |

**Key takeaway:** Three significant regression bugs from v1.1.11 were hotfixed and merged rapidly (memory config loss, Coding Mode session loss, memory search UI). The release verification gate PR improves pipeline safety going forward.

---

## 4. Community Hot Topics

### By comment volume:

| Rank | Item | # Comments | Topic |
|------|------|-----------|-------|
| 1 | [Issue #5064](https://github.com/agentscope-ai/CoPaw/issues/5064) | 11 | **Agent-created scheduled tasks fail to trigger** — tasks generated by Agent in conversation don't fire at their scheduled time and can't be manually edited. Core reliability issue. |
| 2 | [Issue #4727](https://github.com/agentscope-ai/CoPaw/issues/4727) | 10, 👍2 | **Migrate backend from AgentScope 1.x to 2.0** — the defining architectural transition for the project. Active discussion on migration approach. |
| 3 | [Issue #5140](https://github.com/agentscope-ai/CoPaw/issues/5140) | 5 | **v1.1.11.post2 file download broken for docx/pdf (404)** — regression from earlier download fix. |
| 4 | [Issue #5137](https://github.com/agentscope-ai/CoPaw/issues/5137) | 5 | Memory config loss (closed — fixed by PR #5144) |
| 5 | [Issue #5156](https://github.com/agentscope-ai/CoPaw/issues/5156) | 3 | Request to support `kimi-for-coding` via `uv` whitelist |
| 6 | [Issue #5139](https://github.com/agentscope-ai/CoPaw/issues/5139) | 3 | Feature request: native Agent Team/Swarm collaboration capability |

### Analysis of underlying needs:

- **Reliability of Agent-generated artifacts** (#5064): Users increasingly rely on Agent to create operational artifacts (scheduled tasks). When these silently fail, it breaks trust. The fix likely requires both a trigger mechanism and an editable task UI.
- **Backend modernization** (#4727): This is the most strategic issue. AgentScope 2.0 adoption will affect the entire architecture and user-facing APIs. The high comment count signals community investment in a smooth transition.
- **Multi-model / ecosystem integration** (#5156): Users want to bring their own paid model subscriptions (Kimi, etc.) into CoPaw's ecosystem — a product-level plugin/allowlist decision.

---

## 5. Bugs & Stability

### New bugs reported in the last 24 hours (ranked by severity):

| Severity | Issue | Description | Fix PR? |
|----------|-------|-------------|---------|
| 🔴 **Critical** | [#5138](https://github.com/agentscope-ai/CoPaw/issues/5138) | Windows client process count continuously increases, memory climbs to 90%+ (v1.1.11.post2) | None yet |
| 🔴 **Critical** | [#5155](https://github.com/agentscope-ai/CoPaw/issues/5155) | Random crash/restart loop after upgrading to v1.1.11 in Docker | None yet |
| 🔴 **Critical** | [#5064](https://github.com/agentscope-ai/CoPaw/issues/5064) | Agent-scheduled tasks silently fail to trigger | None yet |
| 🟠 **High** | [#5140](https://github.com/agentscope-ai/CoPaw/issues/5140) | docx/pdf file download returns 404 (regression from download fix in v1.1.11) | None yet |
| 🟠 **High** | [#5163](https://github.com/agentscope-ai/CoPaw/issues/5163) | Gemini tool calling broken in v1.1.11.post2 (regression from v1.1.10) | None yet |
| 🟠 **High** | [#5166](https://github.com/agentscope-ai/CoPaw/issues/5166) | Python 3.13 TeamChat plugin install fails: `No module named 'imghdr'` (stdlib removal in 3.13) | None yet |
| 🟠 **High** | [#5165](https://github.com/agentscope-ai/CoPaw/issues/5165) | White screen after installing PyInstaller-built Windows package (missing module references) | None yet |
| 🟡 **Medium** | [#5162](https://github.com/agentscope-ai/CoPaw/issues/5162) | Agent reasoning enters infinite loop during thinking phase | None yet |
| 🟡 **Medium** | [#5161](https://github.com/agentscope-ai/CoPaw/issues/5161) | QwenPaw becomes unresponsive after long conversations (large context) | None yet |
| 🟡 **Medium** | [#5127](https://github.com/agentscope-ai/CoPaw/issues/5127) | Langfuse traces fragmented across single ReAct loop (missing trace_id propagation) | None yet |
| 🟡 **Medium** | [#5145](https://github.com/agentscope-ai/CoPaw/issues/5145) | Execution details always expanded instead of collapsed, distracting from real output | None yet |

### Closed (fixed) bugs:

| Issue | Fix PR | Summary |
|-------|--------|---------|
| [#5137](https://github.com/agentscope-ai/CoPaw/issues/5137) | [PR #5144](https://github.com/agentscope-ai/CoPaw/pull/5144) | Memory config loss when Collapse panel not expanded |
| [#5098](https://github.com/agentscope-ai/CoPaw/issues/5098) | [PR #5154](https://github.com/agentscope-ai/CoPaw/pull/5154) | Memory search UI renders empty/incorrect results |
| [#5148](https://github.com/agentscope-ai/CoPaw/issues/5148) | Merged with adjacent fix | Math sqrt symbol rendering error in web UI |
| [#5142](https://github.com/agentscope-ai/CoPaw/issues/5142) | [PR #5147](https://github.com/agentscope-ai/CoPaw/pull/5147) | Coding Mode session lost on page refresh |

---

## 6. Feature Requests & Roadmap Signals

### Notable feature requests:

| Issue | Request | Assessment |
|-------|---------|------------|
| [#4727](https://github.com/agentscope-ai/CoPaw/issues/4727) | AgentScope 2.0 migration (breaking change) | **Confirmed in progress** — PR [#5078](https://github.com/agentscope-ai/CoPaw/pull/5078) already underway with Runtime 2.0 modular architecture. This is the #1 priority for the next version. |
| [#5139](https://github.com/agentscope-ai/CoPaw/issues/5139) | Native Agent Team / Swarm collaboration | Untapped demand. With AgentScope 2.0's new runtime architecture, this becomes easier to implement. **Likely candidate for v1.2 or v2.0.** |
| [#5156](https://github.com/agentscope-ai/CoPaw/issues/5156) | Kimi-for-coding / `uv` whitelist support | Low-effort, high-satisfaction addition. **Likely for next minor release.** |
| [#5152](https://github.com/agentscope-ai/CoPaw/issues/5152) | Slack channel support | Broadening channel ecosystem. Feasible and aligns with existing channel architecture. **Medium-term.** |
| [#5164](https://github.com/agentscope-ai/CoPaw/issues/5164) | Desktop system tray, auto-start, background service management | UX polish for desktop users. **Likely near-term** as the desktop client matures. |
| [#5130](https://github.com/agentscope-ai/CoPaw/pull/5064) (PR) | Per-turn token and context usage popover in Console | **Already in PR review.** Likely to ship in v1.1.12. |
| [#5067](https://github.com/agentscope-ai/CoPaw/pull/5067) (PR) | Agent OS Driver — unified MCP/A2A/ACP abstraction | **In review.** Strategic infrastructure for multi-protocol agent capabilities. |
| [#4622](https://github.com/agentscope-ai/CoPaw/pull/4622) (PR) | DataPaw plugin with 12 BI skills | **In review.** First-party analytics plugin expanding skill ecosystem. |

### Predicted v1.1.12 contents:
- Memory config hotfix, Coding Mode session fix, memory search UI fix (already merged)
- Token usage popover (PR ready)
- v1.1.12b1 release candidate in progress

---

## 7. User Feedback Summary

### Pain points:

- **v1.1.11 regression cluster:** Multiple users report degraded experience after upgrading — memory config loss, file download 404s, random crashes, Gemini tool call breakage. The frequency and severity of regressions in this cycle suggests the release cadence may be outpacing QA coverage. Users on Windows are disproportionately affected (process leak, white screen packaging issue).
- **Python 3.13 compatibility** (#5166): The `imghdr` stdlib removal is a ticking clock for anyone on newer Python versions. This will grow more urgent as 3.13 adoption increases.
- **Long conversation instability** (#5161): A critical reliability gap for power users who use CoPaw for extended coding sessions.
- **Agent trust deficit** (#5064): When an Agent tells a user "I scheduled that for you" and nothing happens, it undermines the entire value proposition. Users need either a functional task scheduler or an honest error when one can't be created.
- **Packaging quality** (#5165): The PyInstaller spec referencing non-existent modules suggests the Windows desktop build pipeline lacks CI validation (*ironically, PR #5121 adding a release verification gate should help*).

### Satisfaction signals:
- Responsive hotfix turnaround: 3 regression fixes merged same-day as reports
- Active ecosystem expansion: DataPaw plugin, visual model fallback, user input queue all progressing
- Users are actively suggesting integrations (Kimi, Slack) rather than abandoning the platform

---

## 8. Backlog Watch

### Long-unanswered important items needing maintainer attention:

| Item | Age | Last Updated | Risk |
|------|-----|-------------|------|
| [Issue #5064](https://github.com/agentscope-ai/CoPaw/issues/5064) — Scheduled tasks not triggering | 3 days | 2026-06-12 | **High** — core Agent functionality silently failing; no assignee or response from maintainers |
| [Issue #5138](https://github.com/agentscope-ai/CoPaw/issues/5138) — Windows memory leak | <1 day | 2026-06-12 | **High** — process/memory leak on Windows; no acknowledgment yet |
| [Issue #5155](https://github.com/agentscope-ai/CoPaw/issues/5155) — Random crash/restart after upgrade | <1 day | 2026-06-12 | **High** — Docker deployment instability; no response yet |
| [Issue #5166](https://github.com/agentscope-ai/CoPaw/issues/5166) — Python 3.13 `imghdr` failure | <1 day | 2026-06-12 | **Growing** — will affect more users as Python 3.13 adoption increases |
| [PR #5078](https://github.com/agentscope-ai/CoPaw/pull/5078) — Runtime 2.0 modular architecture | 3 days | 2026-06-12 | **Strategic** — this is a breaking change with architecture-wide impact; needs thorough review |
| [PR #5067](https://github.com/agentscope-ai/CoPaw/pull/5067) — Agent OS Driver | 3 days | 2026-06-12 | **Strategic** — unifying MCP/A2A/ACP protocols; significant abstraction layer |
| [PR #4900](https://github.com/agentscope-ai/CoPaw/pull/4900) — Plugin loader init decoupling | 11 days | 2026-06-12 | **Important** — fixes plugin loading in frozen environments (PyInstaller/Tauri); stuck in review |

### Recommendations:
1. **Triage the v1.1.11 regression cluster** — at minimum, tag a maintainer and provide acknowledgment on #5138, #5155, and #5064.
2. **Accelerate the v1.1.12 release** — the three hotfixes are merged; ship them.
3. **Add a Python 3.13 CI matrix** before #5166 becomes a flood of identical reports.
4. **PR #5078 and #5067 need designated reviewers** — these are high-impact architectural PRs that have been open for 3 days.

---

*Digest generated by OWL for CoPaw (agentscope-ai/CoPaw) — Data snapshot: 2026-06-13 UTC*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-06-13

---

## 1. Today's Overview

ZeroClaw is in a period of exceptionally high activity, signaling a project approaching a critical release milestone. In the last 24 hours, **14 issues** and **35 pull requests** were updated, with 31 PRs still open and awaiting review — a deep contributor queue that is characteristic of pre-stabilization cycles. No new releases were shipped today, but tracker issue #7112 (the v0.8.0 release queue) was formally **closed**, suggesting the 0.8.0 milestone prerequisites have been cleared or deprioritized in favor of the v0.8.1 queue (#6970). The project's core architectural work — unifying agent turn engines (#7415/#7540), fixing MCP tool discovery (#7547), and resolving plugin path alignment (#7549) — all point to a large-scale runtime consolidation underway. The breadth of channel-level bug fixes (WhatsApp, Discord, Docker, macOS desktop) and first-adopter onboarding friction indicates the project is simultaneously scaling its surface area and hardening its v0.8 base.

---

## 2. Releases

**No new releases today.** The v0.8.0 release queue (#7112) was closed on 2026-06-12. Active PR tracking has shifted to the v0.8.1 milestone (#6970, #6489), which is routing additive channel, provider, and integration work. Users should treat v0.8.0 as the current stable target with multiple blocking fixes still in PR review.

---

## 3. Project Progress

No PRs are listed as merged in the provided dataset, but three issues were **closed/accepted** in the last 24 hours, representing concrete progress:

| Item | Status | Significance |
|------|--------|-------------|
| **[#7112](https://github.com/zeroclaw-labs/zeroclaw/issues/7112)** — v0.8.0 release queue tracker | **Closed** | Formal resolution of the v0.8.0 stabilization milestone. The config/tool-call-parser Stable-tier promotion, schema breaking-change cleanup, and release-default decisions tracked here have been addressed or deferred, clearing the path for v0.8.1. |
| **[#7263](https://github.com/zeroclaw-labs/zeroclaw/issues/7263)** — Subagents do not inherit `cwd` in ACP sessions | **Closed (p1, S1)** | A blocking bug where subagent-driven development patterns failed because the working directory was not propagated into ACP subspans. Closed likely by an associated fix PR. |
| **[#6443](https://github.com/zeroclaw-labs/zeroclaw/issues/6443)** — Twitch chat channel (thin IRC adapter) | **Closed/Accepted** | The Twitch chat channel feature request is accepted. As a thin wrapper around the existing IRC channel, this is a low-complexity, high-value addition that expands ZeroClaw's streaming/community use case. |

**Active high-impact PRs nearing readiness:**
- **[#7540](https://github.com/zeroclaw-labs/zeroclaw/pull/7540)** — Consolidates all three agent turn engines (`run_tool_call_loop`, `turn_streamed`, `Agent::turn`) onto a single unified loop per RFC #7415. This is foundational architectural refactoring that reduces divergence risk and simplifies future channel integrations.
- **[#7547](https://github.com/zeroclaw-labs/zeroclaw/pull/7547)** — Fixes MCP tool visibility: after #7464 flipped MCP to enabled-by-default, discovered MCP tools were not auto-included in `risk_profile.allowed_tools`, rendering them invisible to agents with explicit tool allowlists. High risk, p1 impact.

---

## 4. Community Hot Topics

**1. RFC: Unify the three agent turn engines** — [#7415](https://github.com/zeroclaw-labs/zeroclaw/issues/7415)
- **Activity:** 3 comments, RFC authored by Nillth, maintainer-directed execution already underway via PR #7540
- **Analysis:** This is the most significant architectural decision currently in flight. ZeroClaw has been running three separate agent turn execution paths (`run_tool_call_loop` for CLI/channels/cron, `turn_streamed` for WS/RPC/ACP, and `Agent::turn` for embedded), creating divergence in state management, error handling, and tool call semantics. Unification onto `run_tool_call_loop` simplifies the core agent runtime and reduces the surface for channel-specific regressions. The fact that the maintainer directed a single consolidation PR rather than a phased migration signals confidence in the approach but also means this is a high-blast-radius change.

**2. Subagent `cwd` inheritance bug** — [#7263](https://github.com/zeroclaw-labs/zeroclaw/issues/7263)
- **Activity:** 1 comment, p1, S1 severity, **closed** on 2026-06-12
- **Analysis:** Users attempting subagent-driven development (a common pattern with Claude Code, Codex, and similar agent harnesses) hit a blocking failure where the repo's working directory was not forwarded into ACP sessions. This is a correctness-critical bug for any operator using external coding agents as subagents.

**3. v0.8.1 integration/channel/provider/tool PR queue** — [#6970](https://github.com/zeroclaw-labs/zeroclaw/issues/6970)
- **Activity:** 0 comments (passive tracker), accepted status
- **Analysis:** This operational tracker shows ZeroClaw is now in a pipeline phase — additive channel work, provider integrations, and tool improvements are queued for v0.8.1. Compliments [#6489](https://github.com/zeroclaw-labs/zeroclaw/issues/6489) for the longer-term Integrations → Plugins architecture.

---

## 5. Bugs & Stability

Ranked by severity (S1 → S2 → unspecified):

| Severity | Issue | Component | Summary | Fix PR |
|----------|-------|-----------|---------|--------|
| **S1** | [#7523](https://github.com/zeroclaw-labs/zeroclaw/issues/7523) | Web dashboard | Dashboard unreachable on macOS after `brew install` — frontend not built | — |
| **S1** | [#7542](https://github.com/zeroclaw-labs/zeroclaw/issues/7542) | Gateway/API | `ask_user` tool fails instantly with "Channel closed before receiving a response" in web dashboard sessions | — |
| **S1** | [#7537](https://github.com/zeroclaw-labs/zeroclaw/issues/7537) | Runtime/daemon | `zeroclaw quickstart` fails on Windows 10: "no map-keyed/list section at peer-groups" | — |
| **S1** | [#7533](https://github.com/zeroclaw-labs/zeroclaw/issues/7533) | Docker/Build | `docker build` fails during `cargo web build`: missing `g++` | [#7534](https://github.com/zeroclaw-labs/zeroclaw/pull/7534) (OPEN) |
| **S1** | [#7527](https://github.com/zeroclaw-labs/zeroclaw/issues/7527) | macOS app | macOS app cannot detect permissions, empty page, window disappears on restart | — |
| **S2** | [#7541](https://github.com/zeroclaw-labs/zeroclaw/issues/7541) | Gateway/API | V3 legacy paths use shared `data_dir` as agent `workspace_dir` instead of per-agent workspace | — |

**Stability assessment:** There is a clear cluster of first-time-user and onboarding failures — Windows quickstart (#7537), macOS dashboard (#7523), macOS desktop app (#7527), and Docker builds (#7533). These don't indicate runtime instability for established users, but they represent a significant barrier to adoption. The `ask_user` tool failure (#7542) and workspace directory confusion (#7541) are more concerning as they affect active users.

---

## 6. Feature Requests & Roadmap Signals

| Request | Items | Likelihood in v0.8.1 |
|---------|-------|---------------------|
| **Multi-session web UI** | [#7543](https://github.com/zeroclaw-labs/zeroclaw/issues/7543) — Session sidebar (new/switch/rename/delete) per agent | **High.** Natural companion to the workspace directory and session management fixes. Single-session limitation is a common UX gap in v0.8. |
| **Streaming card messages for Chinese messaging platforms** | [#7531](https://github.com/zeroclaw-labs/zeroclaw/issues/7531) — QQ, DingTalk, WeChat, Feishu streaming cards | **Medium-High.** These channels already exist; adding streaming is a UX upgrade, not a new integration. Aligns with the v0.8.1 channel enhancement queue (#6970). |
| **llama.cpp model router** | [#7539](https://github.com/zeroclaw-labs/zeroclaw/issues/7535) — Quick model switching for llama.cpp | **Medium.** Useful for local-first users but may be under consideration for a plugin rather than core support. |
| **Twitch chat channel** | [#6443](https://github.com/zeroclaw-labs/zeroclaw/issues/6443) (accepted, thin IRC wrapper) | **High.** Already accepted, minimal implementation surface. |
| **WhatsApp reaction support** | Implemented in [#7535](https://github.com/zeroclaw-labs/zeroclaw/pull/7535) | **Pending merge.** Adds `add_reaction`/`remove_reaction` for WhatsApp Web. |
| **MCP in risk_profile allowed_tools** | Implemented in [#7547](https://github.com/zeroclaw-labs/zeroclaw/pull/7547) | **Near-certain for v0.8.1.** Critical correctness fix now that MCP is enabled by default. |

---

## 7. User Feedback Summary

**Onboarding friction is the dominant pain point.** Four distinct first-time-user failure modes were reported today alone: macOS dashboard rendering (#7523), Windows quickstart config parsing (#7537), Docker build toolchain (#7533), and macOS desktop app permission detection (#7527). None of these have known workarounds documented in the issues, and all are filed by first-time users. This pattern strongly suggests the v0.8 user-facing experience has quality gaps that need a coordinated effort — potentially a "first-run experience" sprint or improved binary distribution (pre-built dashboard assets, better installers, a doctor/health check command).

**Existing users are hitting edge cases in emerging patterns:** The `ask_user` WebSocket failure (#7542) and workspace directory confusion (#7541) suggest that the v0.8 schema rename (`workspace_dir` → `data_dir`) has left legacy path ambiguity that affects real workflows. The ACP `cwd` inheritance fix (#7263, now closed) was a blocking issue for subagent-driven development patterns.

**Positive signals:** Feature requests like multi-session UI (#7543) and streaming cards (#7531) show users are building real workflows on ZeroClaw and pushing it toward production use. The WhatsApp media attachment forwarding (#7536) and Discord intent configuration (#7524) PRs show contributors actively hardening and expanding channel integrations.

---

## 8. Backlog Watch

| Item | Age / Status | Why It Needs Attention |
|------|-------------|----------------------|
| **[#7527](https://github.com/zeroclaw-labs/zeroclaw/issues/7527)** — macOS app not working | Open, S1, 0 comments | No maintainer response. macOS is a primary developer platform; an unusable native app with no acknowledged workaround is a reputational risk. Needs triage or escalation. |
| **[#7537](https://github.com/zeroclaw-labs/zeroclaw/issues/7537)** — Windows quickstart failure | Open, S1, 0 comments | Windows support is advertised but the onboarding path is broken with an unrecognized config error. Needs investigation into whether the quickstart generates invalid config on Windows. |
| **[#7542](https://github.com/zeroclaw-labs/zeroclaw/issues/7542)** — `ask_user` fails in web dashboard | Open, S1, 0 comments | The `ask_user` tool is fundamental for interactive agent workflows. A failure with "Channel closed before receiving a response" in the web dashboard — ZeroClaw's primary UI — is a critical UX break. |
| **[#7429](https://github.com/zeroclaw-labs/zeroclaw/pull/7429)** — Add wasmtime dependency (L, high risk) | Open since 2026-06-09 | This is a foundational dependency addition for the plugin system's future beyond Extism. At size L with high risk, it has been open for 4 days without visible maintainer review. Its progress gates the plugin architecture trajectory. |
| **[#7548](https://github.com/zeroclaw-labs/zeroclaw/pull/7548)** — Chore/cargo cleanup (massive scope, 30+ component tags) | Open, just filed | Extremely wide blast radius (channels, providers, tools, runtime, CI, docs). Needs early maintainer scope approval to avoid wasted contributor effort, or it risks becoming a perpetual revision PR. |
| **[#7112](https://github.com/zeroclaw-labs/zeroclaw/issues/7112)** — v0.8.0 tracker (closed) | **Closed** — but worth noting: The closure of this tracker likely deferred several items to v0.8.1. Maintainers should ensure deferred blockers are explicitly re-tacked to [#6970](https://github.com/zeroclaw-labs/zeroclaw/issues/6970) or [#6489](https://github.com/zeroclaw-labs/zeroclaw/issues/6489) so they don't silently drop. |

**Maintainer action recommended:** The most urgent need is triage on the three S1 issues with zero comments (#7527, #7537, #7542), as they represent broken experiences across all three target platforms (macOS, Windows, web). A single maintainer comment acknowledging the issue and linking to a workaround or fix PR would significantly reduce user drop-off.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/DenisZheng/agents-radar).*