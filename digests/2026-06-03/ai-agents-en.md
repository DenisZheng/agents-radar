# OpenClaw Ecosystem Digest 2026-06-03

> Issues: 454 | PRs: 500 | Projects covered: 13 | Generated: 2026-06-03 00:47 UTC

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

# OpenClaw Project Digest — 2026-06-03

---

## 1. Today's Overview

OpenClaw is experiencing **exceptionally high activity** with 454 issues and 500 PRs updated in the last 24 hours, signaling a project under intense development pressure. The dominant theme is a **wave of regressions** introduced across the 2026.5.x release cycle — particularly around session state management, message delivery reliability, and channel-specific dispatch failures (Feishu, Telegram, Slack, Discord). No new releases have landed today, but the volume of open P1 bugs and the number of maintainer-flagged PRs suggest the team is in a stabilization sprint ahead of an imminent patch release. The community is actively reporting real-world breakage, and the maintainer response rate (via the `clawsweeper` triage bot) is high but struggling to keep pace.

---

## 2. Releases

**No new releases today.** The most recent release appears to be **2026.5.28** (referenced in issue #88788), with several regressions from 2026.5.27 still being actively triaged. The absence of a new release despite the volume of P1 bugs and fix PRs suggests the team is accumulating fixes for a coordinated patch rather than shipping incrementally.

---

## 3. Project Progress

### Merged/Closed Items (Notable)

| # | Type | Title | Significance |
|---|------|-------|-------------|
| [#89601](https://github.com/openclaw/openclaw/pull/89601) | PR (merged) | Stop schema-padded poll modifiers from blocking send | Fixes outbound message sends blocked by shared poll params |
| [#89557](https://github.com/openclaw/openclaw/issues/89557) | Issue (closed) | `continue_delegate` 6th+ delegate silently severed | Closed as fork/duplicate of #89554 |
| [#89554](https://github.com/openclaw/openclaw/issues/89554) | Issue (closed) | `continue_delegate` opaque `status=forbidden` on batch fanout | Closed as filed in error |
| [#87646](https://github.com/openclaw/openclaw/issues/87646) | Issue (closed) | Feishu dispatch `TypeError: read property 'run' of undefined` | Feishu channel regression from 2026.5.27 |
| [#87436](https://github.com/openclaw/openclaw/issues/87436) | Issue (closed) | Codex harness recreates legacy session route state after `doctor --fix` | Auth/session state repair loop |
| [#84614](https://github.com/openclaw/openclaw/issues/84614) | Issue (closed) | GPT models via github-copilot fail in isolated/cron sessions | Provider resolution in isolated contexts |
| [#84252](https://github.com/openclaw/openclaw/issues/84252) | Issue (closed) | `doctor/status` leaves Codex OAuth sidecar partially repaired | Auth repair inconsistency |
| [#81530](https://github.com/openclaw/openclaw/issues/81530) | Issue (closed) | Telegram Supergroup Forum Topics inbound messages not processed | Channel-specific regression |
| [#81128](https://github.com/openclaw/openclaw/issues/81128) | Issue (closed) | `sessions_spawn` `streamTo: "parent"` intermittently rewritten | Session parameter redaction bug |
| [#76952](https://github.com/openclaw/openclaw/issues/86169) | Issue (closed) | Xiaomi MiMo Token Plan provider support | Feature request resolved |

### Key PRs Advancing

- **[#89640](https://github.com/openclaw/openclaw/pull/89640)** — Keep channel send durable when transcript mirror fails (P1, addresses silent message loss)
- **[#89590](https://github.com/openclaw/openclaw/pull/89590)** — Forward turn-source for embedded plugin approvals (P1, fixes cross-channel approval delivery)
- **[#89387](https://github.com/openclaw/openclaw/pull/89387)** — Dedupe transcript rewrite suffix replay (P1, addresses context overflow recovery loops)
- **[#89039](https://github.com/openclaw/openclaw/pull/89039)** — Prevent silent message loss from `EmbeddedAttemptSessionTakeoverError` (P1)
- **[#88992](https://github.com/openclaw/openclaw/pull/88992)** — Recover stranded replies in `message_tool_only` mode (P1)
- **[#82572](https://github.com/openclaw/openclaw/pull/82572)** — Persist followup queues across gateway restarts (P1, XL — significant reliability improvement)
- **[#87072](https://github.com/openclaw/openclaw/pull/87072)** — Telegram opt-in interleaved progress lane (P2, XL — UX improvement with video proof)
- **[#89643](https://github.com/openclaw/openclaw/pull/89643)** — Preserve plugin session extension state across session updates (P2, L — supports the SQLite migration seam)

---

## 4. Community Hot Topics

### Most Discussed Issues

1. **[#52875](https://github.com/openclaw/openclaw/issues/52875)** — *Session_send gives no session found* (21 comments, regression, P2)
   - Agent-to-agent communication broken after 2026.3.22 upgrade. Underlying need: **reliable inter-agent session discovery** — a core multi-agent workflow is failing silently.

2. **[#88838](https://github.com/openclaw/openclaw/issues/88838)** — *Track core session/transcript SQLite migration via accessor seam* (17 comments, P2)
   - A strategic architectural issue. The community is pushing for the session/transcript layer to migrate from JSON to SQLite via branch-by-abstraction. This is a **foundational reliability investment** — the current `sessions.json` architecture is implicated in multiple OOM and corruption bugs.

3. **[#63918](https://github.com/openclaw/openclaw/issues/63918)** — *Cron agentTurn sends thinking=none to OpenAI* (17 comments, P2)
   - Cron jobs fail because the thinking parameter isn't being translated correctly for models that don't accept `none`. Underlying need: **model capability-aware parameter adaptation** in scheduled/cron contexts.

4. **[#67035](https://github.com/openclaw/openclaw/issues/67035)** — *Windows chat UI regression: input text swallowed, streamed replies invisible* (14 comments, P1)
   - A severe UX regression on Windows. Underlying need: **cross-platform UI rendering parity** — the web/dashboard client has platform-specific rendering bugs.

5. **[#39604](https://github.com/openclaw/openclaw/issues/39604)** — *Add tools.web.fetch.allowPrivateNetwork* (13 comments, 👍9, P2)
   - Highest community reaction count. Users need `web_fetch` to reach internal/private network addresses. Underlying need: **enterprise/intranet use cases** — this is a security-gated feature request with strong demand.

### Most Discussed PRs

- **[#89613](https://github.com/openclaw/openclaw/pull/89613)** — Auth profile failure policy contract documentation (maintainer, P3)
- **[#78172](https://github.com/openclaw/openclaw/pull/78172)** — TTS skipEmojiSymbols option (P2, compatibility risk)
- **[#87799](https://github.com/openclaw/openclaw/pull/87799)** — Harden stdin consumers in install script (P2, automation risk)

---

## 5. Bugs & Stability

### Critical (P1) — Active Regressions

| # | Issue | Severity | Fix PR? |
|---|-------|----------|---------|
| [#67035](https://github.com/openclaw/openclaw/issues/67035) | Windows chat UI: input swallowed, replies invisible | 🔴 P1 | No |
| [#88312](https://github.com/openclaw/openclaw/issues/88312) | Codex app-server turn-completion stall (regression of #84076) | 🔴 P1 | No |
| [#86519](https://github.com/openclaw/openclaw/issues/86519) | Agent repeats identical replies 2-10x on Telegram | 🔴 P1 | No |
| [#55334](https://github.com/openclaw/openclaw/issues/55334) | sessions.json unbounded growth → gateway OOM | 🔴 P1 | No |
| [#86047](https://github.com/openclaw/openclaw/issues/86047) | Codex/Nextcloud Talk approval stalls cause timeouts | 🔴 P1 | No |
| [#80715](https://github.com/openclaw/openclaw/issues/80715) | Slack replies silently dropped (composed but never posted) | 🔴 P1 | No |
| [#86090](https://github.com/openclaw/openclaw/issues/86090) | `runHeartbeatOnce` phantom run — no model turn executed | 🔴 P1 | No |
| [#88369](https://github.com/openclaw/openclaw/issues/88369) | Isolated cron self-conflicts with `EmbeddedAttemptSessionTakeoverError` | 🔴 P1 | No |
| [#89374](https://github.com/openclaw/openclaw/issues/89374) | Timeout compaction reports success but leaves session unrecoverable | 🔴 P1 | No |
| [#89549](https://github.com/openclaw/openclaw/issues/89549) | `sessions_spawn` child runs fail with HTTP 401 Missing scopes | 🔴 P1 | No |

### High (P2) — Notable

| # | Issue | Notes |
|---|-------|-------|
| [#52875](https://github.com/openclaw/openclaw/issues/52875) | Session_send "no session found" — multi-agent comms broken | 21 comments, stale |
| [#88788](https://github.com/openclaw/openclaw/issues/88788) | GHCR 2026.5.28 emits stale Discord config schema | Image/source mismatch |
| [#84882](https://github.com/openclaw/openclaw/issues/84882) | Memory-core Dreaming silently deletes daily memory files | Silent data loss |
| [#88234](https://github.com/openclaw/openclaw/issues/88234) | Feishu dispatch TypeError (duplicate of closed #87646) | Recurring pattern |
| [#89525](https://github.com/openclaw/openclaw/issues/89525) | Telegram /compact slash command dropped | New regression |

### Stability Assessment

The project is in a **regression-heavy phase**. At least 7 distinct P1 regressions are open, spanning session state, message delivery, UI rendering, and channel dispatch. The `EmbeddedAttemptSessionTakeoverError` appears to be a **systemic issue** affecting both cron and spawned sessions. The Slack silent-drop bug (#80715, 👍8) has the most community engagement among P1s, suggesting it affects many production deployments.

---

## 6. Feature Requests & Roadmap Signals

| # | Request | Signal Strength | Likely Timeline |
|---|---------|----------------|-----------------|
| [#88838](https://github.com/openclaw/openclaw/issues/88838) | Session/transcript SQLite migration via accessor seam | 🔴 Strong — architectural, maintainer-backed | Next major cycle |
| [#39604](https://github.com/openclaw/openclaw/issues/39604) | `tools.web.fetch.allowPrivateNetwork` | 🟡 Strong — 👍9, enterprise need | Likely next minor |
| [#81061](https://github.com/openclaw/openclaw/issues/81061) | `before_route_inbound_message` hook for pre-routing interception | 🟡 Moderate — plugin ecosystem need | Medium-term |
| [#76159](https://github.com/openclaw/openclaw/issues/76159) | Per-job `acceptSilentStop` flag for cron | 🟡 Moderate — cron UX | Medium-term |
| [#84216](https://github.com/openclaw/openclaw/issues/84216) | Dropdown for recent sessions in control menu | 🟢 Low — UI polish | Backlog |
| [#87072](https://github.com/openclaw/openclaw/pull/87072) | Telegram interleaved progress lane | 🟡 Strong — PR ready, video proof | Next release candidate |
| [#82572](https://github.com/openclaw/openclaw/pull/82572) | Persist followup queues across gateway restarts | 🔴 Strong — P1, addresses silent message loss | High priority |

**Prediction:** The next release will likely be a **stability-focused patch** (2026.5.29 or 2026.6.0) addressing the P1 regressions, with the SQLite migration (#88838) and queue persistence (#82572) as the major feature bets for the following cycle.

---

## 7. User Feedback Summary

### Pain Points

- **Message delivery is unreliable across channels.** Users report silent drops on Slack (#80715), Feishu dispatch crashes (#87646, #88234), Telegram duplicate replies (#86519), and Discord config schema mismatches (#88788). This is the **single biggest category of dissatisfaction** — users' agents appear to work (transcripts are intact) but messages never reach their destination.

- **Session state is fragile.** The `sessions.json` unbounded growth issue (#55334) causes OOM kills. Session discovery between agents is broken (#52875). Cron sessions conflict with themselves (#88369). Compaction can leave sessions unrecoverable (#89374). Users running long-lived or multi-agent setups are hitting these limits regularly.

- **Windows support is regressed.** The chat UI on Windows (#67035) has input and rendering bugs that make it nearly unusable. This is a platform parity gap that affects a significant user segment.

- **Auth/provider configuration is confusing.** Multiple issues (#84252, #87436, #87650, #84614) report that `doctor --fix` and `onboard` don't fully repair provider state, leaving users in partially-configured states where status looks healthy but runtime fails.

### Satisfaction Signals

- The Telegram interleaved progress lane PR (#87072) includes **video proof** of a polished UX, suggesting active investment in user-facing quality.
- The `clawsweeper` triage bot is actively labeling issues with structured metadata (priority, impact, fix shape), which improves transparency.
- The SQLite migration proposal (#88838) shows the team is thinking architecturally about long-term reliability, not just patching symptoms.

---

## 8. Backlog Watch

These important items have been open for extended periods without resolution:

| # | Item | Age | Why It Matters |
|---|------|-----|----------------|
| [#52875](https://github.com/openclaw/openclaw/issues/52875) | Session_send "no session found" | 72 days | Core multi-agent workflow broken; 21 comments; marked stale |
| [#55334](https://github.com/openclaw/openclaw/issues/55334) | sessions.json OOM | 69 days | Production stability; gateway crashes; no fix PR |
| [#52249](https://github.com/openclaw/openclaw/issues/52249) | ACP parent session stuck until refresh | 73 days | Multi-agent UX; requires manual intervention |
| [#41199](https://github.com/openclaw/openclaw/issues/41199) | Agent-to-Agent tool parameter conflicts | 86 days | Systemic tool-calling issue; affects all multi-agent setups |
| [#39604](https://github.com/openclaw/openclaw/issues/39604) | web_fetch private network access | 87 days | 👍9, enterprise use case; security review pending |
| [#60841](https://github.com/openclaw/openclaw/issues/60841) | toolsAllow cannot re-expose core tools in cron | 60 days | Cron functionality gap; linked PR open |
| [#77136](https://github.com/openclaw/openclaw/issues/77136) | WebChat fails to render some assistant messages | 30 days | UI regression; stale; transcript data intact but invisible |
| [#81978](https://github.com/openclaw/openclaw/issues/81978) | Discord session remains processing after run:completed | 19 days | Stale; affects typing indicator UX |
| [#77467](https://github.com/openclaw/openclaw/issues/77467) | MiniMax Portal OAuth token cannot auto-refresh | 30 days | Stale; provider auth gap; 👍3 |
| [#80036](https://github.com/openclaw/openclaw/issues/80036) | Chrome MCP `profile=user` page tools timeout on macOS | 24 days | Stale; browser automation broken on macOS |

**Maintainer attention recommended for:** #52875 (multi-agent comms, stale but critical), #55334 (OOM, production impact), and #41199 (tool parameter conflicts, 86 days old). These represent systemic issues that are eroding user trust in core workflows.

---

*Generated by OWL for OpenClaw/openclaw — 2026-06-03*

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: Personal AI Assistant & Agent Open-Source Ecosystem

**Date:** 2026-06-03 | **Analysis by:** OWL, ZOO Company

---

## 1. Ecosystem Overview

The personal AI agent open-source ecosystem is in a period of **rapid expansion and simultaneous stabilization pressure**. Seven projects (OpenClaw, NanoBot, Hermes Agent, PicoClaw, NanoClaw, IronClaw, CoPaw) reported active development on 2026-06-03, while several newer entrants (TinyClaw, Moltis, ZeptoClaw) showed no activity. The defining tension of this cycle is that projects are shipping ambitious platform features — multi-agent runtimes (ZeroClaw), SQLite storage migrations (OpenClaw), AgentScope 2.0 migration (CoPaw), Reborn engine refactoring (IronClaw) — while simultaneously managing waves of regressions in core messaging, session state, and provider compatibility. Multi-channel delivery (Slack, Telegram, Feishu, WeChat, QQ, Discord) and multi-provider model backends (Claude, DeepSeek, Kimi, MiniMax) are the primary surfaces of breakage, reflecting the combinatorial complexity of the design space.

---

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Releases | Health Score* |
|---|---|---|---|---|
| **OpenClaw** | 454 | 500 | None (post-2026.5.28) | 🔴 High activity, regression-heavy |
| **NanoBot** | 10 | 28 | None | 🟢 High throughput, stabilizing |
| **Hermes Agent** | 50 | 50 | None | 🟡 Active, accumulating backlog |
| **PicoClaw** | 3 | 14 | Nightly build | 🟢 Focused, catch-up posture |
| **NanoClaw** | 1 | 4 | None | 🟢 Security-focused, low volume |
| **NullClaw** | 1 | 1 | None | 🟢 Maintenance mode, targeted fix |
| **LobsterAI** | 0 | 50 | None | 🟢 High merge velocity, no new bugs |
| **IronClaw** | 29 | 50 | None | 🟡 High throughput, backlog growing |
| **CoPaw** | 48 | 32 | v1.1.11b1 (impending) | 🟠 Security sprint, release imminent |
| **ZeroClaw** | 49 | 50 | **v0.8.0-beta-2** | 🟢 Shipping, provider fragility |
| **TinyClaw** | 0 | 0 | — | ⚪ Inactive |
| **Moltis** | 0 | 0 | — | ⚪ Inactive |
| **ZeptoClaw** | 0 | 0 | — | ⚪ Inactive |

\*Health Score: 🟢 = stable/improving; 🟡 = active with risk; 🔴 = high-regression; ⚪ = dormant.

**Key Takeaway:** OpenClaw dominates in raw activity by an order of magnitude (454 issues), reflecting its role as the ecosystem core — but also exposing it to the most regression surface. NanoBot and LobsterAI show the healthiest patterns: high PR merge velocity (18 and 47 merged respectively) with minimal new bug reports.

---

## 3. OpenClaw's Position

**Advantages over peers:**
- **Benchmark de facto core.** Every other project (LobsterAI, NanoBot, NullClaw) is either a fork, wrapper, or heavily references OpenClaw. This creates gravitational lock-in: improvements cascade downstream.
- **Largest contributor base.** The 500-PR/454-issue velocity is unmatched, and the `clawsweeper` triage bot demonstrates investment in infrastructure that smaller projects lack.
- **Breadth of channel support.** OpenClaw maintains adapters for the widest range of messaging backends (Slack, Telegram, Discord, Feishu, QQ), making it the integration backbone of the ecosystem.

**Technical approach differences:**
- vs. **ZeroClaw** (Rust, zerocode TUI, WASI/WIT plugin architecture): OpenClaw is full-stack JS/TS with broad ecosystem reach; ZeroClaw is systems-level with stronger typing, cleaner plugin boundaries, but narrower contributor pool.
- vs. **NanoBot** (Python, assistant-focused, multi-channel polish): OpenClaw is agent-platform-first; NanoBot prioritizes assistant UX and channel breadth for end users.
- vs. **Hermes Agent** (Desktop-first with Gateway split): OpenClaw targets server/cloud deployments; Hermes invests heavily in desktop client experience.
- vs. **PicoClaw** (Go, embedded/targeted): OpenClaw is the general-purpose platform; PicoClaw is optimized for embedded and resource-constrained deployment.
- vs. **LobsterAI** (enterprise/cowork-focused): OpenClaw is the upstream engine; LobsterAI adds enterprise security (`nsp-clawguard`), managed plugins, and cowork multi-agent UX.

**Community size comparison:** OpenClaw's comment volumes (21+ comments on core issues like #52875, #88838) suggest a mature power-user base that expects production reliability. Smaller projects have tighter contributor loops but less community pressure.

---

## 4. Shared Technical Focus Areas

The following requirements are emerging simultaneously across multiple projects, indicating ecosystem-wide pain points:

| Focus Area | Projects | Specific Needs |
|---|---|---|
| **Session State Reliability** | OpenClaw, Hermes Agent, IronClaw | JSON→SQLite migration (OpenClaw #88838), pluggable SessionDB (Hermes #23717), hot-update corruption (Hermes), migration regressions (PicoClaw #2972), double-write conflicts (Hermes #37751). The `sessions.json` / singleton-DB pattern is a universal bottleneck. |
| **Message Delivery Guarantees** | OpenClaw, NanoBot, IronClaw, CoPaw | Silent drops on Slack (OpenClaw #80715), Feishu dispatch crashes (NanoBot, OpenClaw), WeChat cron delivery failures (CoPaw #4878), Slack reply delivery (IronClaw #3857). Cross-channel guaranteed delivery is an unsolved cross-cutting concern. |
| **Provider Multi-Model Compatibility** | ZeroClaw, IronClaw, PicoClaw, OpenClaw | DeepSeek V4 compatibility (ZeroClaw #6059), Kimi streaming tool-call errors (ZeroClaw #5600), Claude Opus temperature rejection (IronClaw #4334, PicoClaw), MiniMax tool invocation failures (IronClaw #4339), Qwen reasoning leaks (IronClaw #4341). Each provider's divergent API contracts create systemic breakage. |
| **Cross-Platform (Windows) Support** | OpenClaw, CoPaw, Hermes Agent | Windows chat UI regression (OpenClaw #67035), browser process tree cleanup (CoPaw #4853), installer access denied (Hermes #37731). Windows is consistently the weakest platform. |
| **Security Hardening** | CoPaw, ZeroClaw, IronClaw, NanoClaw, LobsterAI | Path traversal (CoPaw #4913), auth bypass (CoPaw #4908), tool allowlist bypass (ZeroClaw #7063), command injection (NanoClaw CVE), pairing code strength (ZeroClaw #6613), PII redaction false positives (NullClaw). As projects mature toward production deployment, security auditing is intensifying. |
| **MCP (Model Context Protocol) Maturity** | NanoBot, ZeroClaw, NanoClaw | Connection drops (NanoBot #4168), subagent MCP access (NanoBot #4166), SSRF hardening (NanoBot #4123), stdio-to-HTTP proxy compatibility (NanoClaw #2662). MCP is the emerging standards layer but production reliability is early-stage. |

---

## 5. Differentiation Analysis

| Dimension | OpenClaw | ZeroClaw | NanoBot | Hermes Agent | CoPaw | LobsterAI | PicoClaw | IronClaw |
|---|---|---|---|---|---|---|---|---|
| **Architecture** | Monolithic TS gateway | Modular Rust (apps/ + crates/) | Python assistant framework | Desktop + Gateway split | AgentScope-based | OpenClaw wrapper (enterprise) | Go, lightweight | OpenClaw-based (Reborn refactor) |
| **Target User** | Power users, multi-agent ops | Systems developers, TUI enthusiasts | End users, channel-flexible assistant | Desktop-first VPS/deploy users | Windows-heavy adopters, Tencent ecosystem | Enterprise/cowork teams | Embedded/Chinese-market bot builders | OpenClaw ecosystem (enhanced) |
| **Key Differentiator** | Widest channel + tool ecosystem | zerocode TUI, ACP protocol, WASI plugins | Rapid channel expansion, WebUI polish | macOS/Windows desktop UX | Yuanbao/WeChat integration, security audit cadence | Cowork multi-agent, plugin marketplace | Pico Protocol, embedded Go runtime | Reborn trigger/capability system, Google/Notion OAuth |
| **Plugin Model** | Extensive (skills + hooks) | WASI/WIT (Component Model) | Plugin + skill system | Skills + bundled deps | Plugin-registered channels | Managed plugin marketplace | Skills (SKILL.md) | Reborn capabilities pipeline |
| **Deployment Model** | Gateway daemon (cloud/server) | CLI/TUI + daemon nodes | Gateway + WebUI | Desktop app + remote gateway | Desktop app (Windows-first) | Desktop + gateway | Gateway (Docker-friendly) | Gateway + WebUI v2 |
| **Primary Language** | TypeScript | Rust | Python | TypeScript | Python | TypeScript | Go | TypeScript |

---

## 6. Community Momentum & Maturity

### Tier 1 — Rapidly Iterating (High Velocity, Active Shipping)
- **ZeroClaw:** Just shipped v0.8.0-beta-2 (largest release since v0.7.5), with zerocode TUI and multi-agent runtime. 31 merged PRs in 24h. Strongest architectural momentum in the ecosystem.
- **NanoBot:** 18 merged PRs in 24h across WebUI, email, RAG, and Napcat QQ channel. Zero new issues. Cleanest quality signal.
- **LobsterAI:** 47 merged PRs in 24h, zero new issues. Enterprise-focused polish cycle.

### Tier 2 — Stabilizing Under Pressure (High Activity, Regression Management)
- **OpenClaw:** 500 PRs and 454 issues — the ecosystem's busiest project, but managing 7+ P1 regressions. In a stabilization sprint ahead of a patch release.
- **CoPaw:** 7 security advisories filed and closed in a single day. v1.1.11b1 imminent. Windows-heavy user base driving UX fixes.
- **IronClaw:** 31 merged PRs but 22 new issues from a systematic Reborn audit. Backlog growing faster than it's being resolved.

### Tier 3 — Focused / Maintenance Mode
- **Hermes Agent:** Active PR pipeline (many same-day bug→PR cycles) but accumulating review backlog. Desktop team shipping steadily.
- **PicoClaw:** Nightly release cadence, 5 merged PRs, focused on provider compatibility and session correctness.
- **NanoClaw:** Low volume, high-impact merges (CVE fix, plugin hooks, runtime stability). Security-first posture.
- **NullClaw:** Single-issue maintenance mode. One regression, one fix PR, awaiting review.

### Tier 4 — Inactive
- **TinyClaw, Moltis, ZeptoClaw:** No activity in the 24-hour window. May be pre-launch or dormant.

---

## 7. Trend Signals

The following industry-level trends are extractable from today's community activity across the ecosystem:

### 1. **The Session Storage Crisis Is Universal**
Every project with non-trivial session history is hitting the limits of flat-file or singleton-DB storage. OpenClaw's SQLite migration proposal (#88838), Hermes's pluggable SessionDB RFC (#23717), and PicoClaw's session migration regression (#2972) all point to the same conclusion: **the ecosystem needs a standardized, concurrent-safe session store**. Projects that solve this first will have a significant reliability advantage.

### 2. **Provider Abstraction Is the New Compatibility Battleground**
The combinatorial explosion of model providers (OpenAI, Anthropic, DeepSeek, Kimi, MiniMax, Qwen, Zhipu) with divergent API contracts — especially around `thinking`/`reasoning_content`, `temperature` deprecation, and tool-call streaming — is the dominant source of P1 bugs. ZeroClaw, IronClaw, and PicoClaw all have critical provider-specific failures. **A shared provider capability negotiation layer or adapter test suite** would benefit the entire ecosystem.

### 3. **Security Auditing Is Accelerating**
CoPaw's 7-advisory day, ZeroClaw's tool-allowlist bypass fix, NanoClaw's CVE patch, and NullClaw's PII false-positive regression all indicate that **projects are transitioning from "move fast" to "harden for production."** Security researchers are actively auditing these projects, and the responsiveness of maintainers (same-day closures at CoPaw and NanoClaw) is a positive signal for enterprise adoption.

### 4. **MCP Is the Emerging Integration Standard — But It's Not Production-Ready Yet**
NanoBot's MCP connection drops, subagent access gaps, and SSRF concerns, combined with NanoClaw's stdio-to-HTTP proxy compatibility work, show that **MCP is the community's chosen protocol for tool integration but needs significant runtime hardening.** The projects investing in MCP resilience now (connection retry, transport negotiation, capability gating) will set the standard.

### 5. **Desktop UX Is a Growing Differentiation Axis**
Hermes Agent's desktop-first approach, CoPaw's Windows-heavy user base, and OpenClaw's Windows regression all highlight that **the terminal-only era is ending.** Users expect polished desktop and web UIs. ZeroClaw's zerocode TUI and NanoBot's WebUI polish wave are early signals; expect more investment in this dimension.

### 6. **Multi-Agent Orchestration Is the Next Frontier**
OpenClaw's `continue_delegate` issues, CoPaw's subagent dispatch model request (#4901), ZeroClaw's multi-agent runtime shipping, and LobsterAI's cowork session management all point to **multi-agent workflows moving from experimental to expected.** The projects that provide reliable inter-agent communication, session isolation, and cost-optimized subagent dispatch will lead the next adoption wave.

### 7. **Chinese-Market Channel Integration Is a Distinctive Strength**
Projects with strong Feishu, WeChat, QQ, and Yuanbao support (CoPaw, NanoBot via Napcat, PicoClaw, OpenClaw) are serving a large and underserved market segment. This is a **differentiating capability** that Western-centric projects (ZeroClaw, Hermes) are not prioritizing.

---

*Report generated by OWL — ZOO Company. Data sourced from GitHub project digests, 2026-06-03.*

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-06-03

---

## 1. Today's Overview

NanoBot remains in a period of intense community-driven development with **28 PRs updated** and **10 issues touched** in the last 24 hours and zero new releases. The activity is exceptionally high on the PR side, with 18 merged/closed PRs indicating a maintainer team that is actively integrating contributions. No new version shipped today — the rapid cadence of fixes and features suggests a release may be imminent once the current batch of WebUI, email channel, and MCP stability PRs stabilizes. The project's breadth of contribution channels (email, QQ/Napcat, WebUI, MCP, RAG) reflects a maturing ecosystem with growing integration surface area.

---

## 2. Releases

**No new releases today.** The digest covers pending changes that will likely coalesce into the next version.

---

## 3. Project Progress

A remarkable **18 PRs were merged or closed** in the past 24 hours. Key progress areas:

### WebUI — Heavy Polish Cycle
- **PR #4150** — Fixed WebUI refresh/restore location routing so chat state survives page reload and browser hash navigation.
- **PR #4151** — Fixed sidebar "Chats" group sorting by recency instead of always appearing at the bottom.
- **PR #4149** — Added fallback clipboard copy for WebUI replies in non-secure contexts and embedded WebViews.
- **PR #4157** — Added `fetchWithTimeout` helper to prevent startup fetch hangs.
- **PR #4115** — Completed WebUI gateway dependency split, extracting HTTP routing from `WebSocketChannel` into cleaner separation.

### Email Channel — Major Feature Addition
- **PR #4162** and **#4160** — Both merged, adding **file attachment support** to the email channel with MIME type detection, multipart encoding, count/size limits, and graceful fallback.
- **PR #4165** — Fixed empty emails being sent after tool calls by skipping `_progress` metadata messages.

### Memory & Session Reliability
- **PR #4155** — Fixed `read_file` offload loop: exempted `read_file` from generic tool-result offloading to prevent infinite recovery cycles (addresses **Issue #4153**).
- **PR #4109** — Added **lightweight RAG for memory retrieval** with local embeddings, a significant new capability.
- **PR #4081** (closed) — Fixed `MemoryStore.append_history` duplicate cursor allocation under concurrent writes.

### New Channel: Napcat (QQ)
- **PR #4146** — Merged: Added **Napcat QQ channel** with OneBot v11 Forward WebSocket support for private and group QQ chats.

### Refactors & Infrastructure
- **PR #3990** — Replaced the two-phase `Dream` class with a simpler cron + `process_direct` flow.
- **PR #4159** — Auto-fix for WebUI CLI App pip installs under `uv tool` (**Issue #4158**), complemented by the more thorough **PR #4164** (still open).

---

## 4. Community Hot Topics

| # | Item | Signals | Underlying Need |
|---|------|---------|-----------------|
| 1 | [Issue #4167](https://github.com/HKUDS/nanobot/issues/4167) — Image generation fails with OpenAI-compatible APIs lacking `response_format` | 2 comments, newest issue (Jun 2) | Users are wiring in alternative image generation providers (Agnes AI, etc.) and hitting compatibility walls. The `generate_image` tool needs provider capability negotiation. |
| 2 | [Issue #4166](https://github.com/HKUDS/nanobot/issues/4166) — Allow subagent access to MCP services | 0 comments yet, just filed | Subagent orchestration is a power-user pattern. Users spawning agents via `spawn()` expect inherited tool access. This is a gap in the composability model. |
| 3 | [Issue #4168](https://github.com/HKUDS/nanobot/issues/4168) — MCP server becomes unreachable after random time | 0 comments, just filed | MCP connection resilience — "Session terminated" errors requiring full nanobot restart. Overlaps thematically with the subagent/MCP issue above, suggesting MCP runtime stability is an emerging pain cluster. |
| 4 | [Issue #4006](https://github.com/HKUDS/nanobot/issues/4006) — Orphaned tool results in conversation history | 2 comments, open since May 26 | Strict API providers reject malformed tool call/result pairings. A correctness issue that blocks users on strict-validation backends. |
| 5 | [PR #4139](https://github.com/HKUDS/nanobot/pull/4139) — Cloud deployment layer for HF Spaces & ModelScope | Open, +851 lines | Significant community contribution addressing deployment friction. Suggests a segment of users want zero-config cloud hosting. |
| 6 | [PR #4163](https://github.com/HKUDS/nanobot/pull/4163) — Fork-from-here for user messages in WebUI | Open | Conversation branching UX — users want to revise and resend from any historical point. Becoming table-stakes for AI chat interfaces. |

**Analysis:** The dominant theme is **MCP ecosystem maturity** (connection resilience, subagent access, SSRF hardening in PR #4123). A secondary theme is **multi-channel expansion** (email attachments, Napcat QQ, cloud deployment), indicating NanoBot is growing beyond a single-channel assistant into a platform. The WebUI polish burst suggests a UX maturation phase.

---

## 5. Bugs & Stability

Ranked by severity:

### 🔴 High — Runtime Crashes / Data Loss
1. **Issue #4168** — [MCP server becomes unreachable randomly](https://github.com/HKUDS/nanobot/issues/4168). "Session terminated" McpError requiring full restart. **No fix PR yet.** This is a silent production outage for MCP-dependent users.
2. **Issue #4006** — [Orphaned tool results in conversation history](https://github.com/HKUDS/nanobot/issues/4006). Causes strict API providers to reject requests. Open since May 26 with 2 comments but **no fix PR** yet.

### 🟡 Medium — Feature Broken for Specific Configurations
3. **Issue #4167** — [Image generation incompatible with non-standard OpenAI-compatible APIs](https://github.com/HKUDS/nanobot/issues/4167). `response_format` parameter causing `UnsupportedParamsError` with providers like Agnes AI. **No fix PR yet.** Related to open enhancement **Issue #4132** for custom image providers.
4. **Issue #4153** — [`read_file` cannot recover persisted tool results after offloading](https://github.com/HKUDS/nanobot/issues/4153). **FIXED** by **PR #4155** (merged).
5. **Issue #4081** — [Duplicate cursor allocation under concurrent writes](https://github.com/HKUDS/nanobot/issues/4081). **FIXED** (closed, fix merged).

### 🟢 Low — UX / Installation Edge Cases
6. **Issue #4158** — [WebUI CLI App pip installs fail under `uv tool`](https://github.com/HKUDS/nanobot/issues/4158). **PR #4159** (auto-fix, merged) and **PR #4164** (thorough fix, open) address this.

---

## 6. Feature Requests & Roadmap Signals

| Request | Source | Likelihood in Next Version | Rationale |
|---------|--------|---------------------------|-----------|
| Custom image generation providers (Agnes AI, etc.) | [Issue #4132](https://github.com/HKUDS/nanobot/issues/4132) + [Issue #4167](https://github.com/HKUDS/nanobot/issues/4167) | **High** | Two related issues in quick succession signals real user demand; blocked on the same parameter compatibility problem. |
| Subagent MCP access | [Issue #4166](https://github.com/HKUDS/nanobot/issues/4166) | **Medium** | Requires config-level design for tool inheritance in spawned agents. Newly filed; no discussion yet. |
| Cloud deployment layer (HF Spaces, ModelScope) | [PR #4139](https://github.com/HKUDS/nanobot/pull/4139) | **Medium** | Substantial PR already written (+851 lines). Awaiting review. Addresses deployment friction for non-technical users. |
| WebUI fork-from-here | [PR #4163](https://github.com/HKUDS/nanobot/pull/4163) | **Medium-High** | Open, self-contained UI feature. Fits the current WebUI polish wave. |
| Lightweight RAG for memory | [PR #4109](https://github.com/HKUDS/nanobot/pull/4109) | **Likely already in next release** | Already merged. |

---

## 7. User Feedback Summary

**Pain Points:**
- **MCP fragility** is the #1 emerging pain cluster — connections drop silently [#4168], subagents can't use MCP tools [#4166], and the notion MCP integration is still struggling [#1168, open since February]. Users running MCP-dependent workflows face daily reliability issues.
- **Multi-provider image generation** is a friction point. Users trying to use Agnes AI and similar OpenAI-compatible providers hit parameter incompatibilities [#4167]. The `generate_image` tool assumes full OpenAI API conformance.
- **Deployment complexity** for cloud platforms (HF Spaces, ModelScope) is driving a community PR [#4139], indicating users want plug-and-play cloud hosting without manual platform-specific configuration.
- **Conversation history correctness** [#4006] is a subtle but critical issue — malformed tool call pairs cause hard failures on strict API providers, likely affecting users on enterprises or providers with tighter validation.

**Satisfaction Signals:**
- The email channel is receiving enthusiastic contribution (merged attachments in two PRs, progress-empty-email fix) — users clearly rely on email as a primary channel.
- WebUI improvements are touching advanced UX patterns (fork-from-here, clipboard fallback, hash routing) suggesting an engaged power-user base.

---

## 8. Backlog Watch

These items need maintainer attention:

| Item | Age | Why It Matters |
|------|-----|----------------|
| [Issue #1168](https://github.com/HKUDS/nanobot/issues/1168) — Notion MCP connection fails | **3+ months** (opened Feb 25) | One comment, no resolution. Notion is a mainstream integration; users comparing against Claude's working setup. Reputational risk. |
| [Issue #4006](https://github.com/HKUDS/nanobot/issues/4006) — Orphaned tool results | **8 days**, no PR | Causes hard failures on strict API providers. A correctness bug in core conversation history management that should be high priority. |
| [Issue #4168](https://github.com/HKUDS/nanobot/issues/4168) — MCP random disconnection | **1 day**, but critical | Silent production outage pattern. Needs repro and likely a connection retry/keepalive fix. |
| [Issue #4167](https://github.com/HKUDS/nanobot/issues/4167) — Image generation `response_format` | **1 day**, no PR | Blocks users on emerging image generation providers. Likely a small fix (conditional parameter inclusion). |
| [PR #4139](https://github.com/HKUDS/nanobot/pull/4139) — Cloud deployment layer | **2 days**, large PR | +851 lines, 9 files. Needs review bandwidth. High community value but risky to merge without thorough review. |
| [PR #4123](https://github.com/HKUDS/nanobot/pull/4123) — SSRF guard for MCP URLs | **3 days**, still open | Security-related. Should be reviewed with priority. |

---

*Data source: GitHub HKUDS/nanobot, snapshot 2026-06-03. All links reference `https://github.com/HKUDS/nanobot/`.*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent — Project Digest 2026-06-03

---

## 1. Today's Overview

Hermes Agent remains in a phase of exceptionally high activity, with **50 issues** and **50 pull requests** updated in the last 24 hours. Of the issues, 45 remain open and active while 5 were closed; among PRs, 39 are open and 11 were merged or closed. No new releases were published today. The volume of newly opened items (many dated 2026-06-03 itself) indicates a fast-growing, engaged community — but also a rapidly accumulating review backlog. The project is clearly in active development across many surfaces (Desktop, gateway, CLI, agent core, cron, platform adapters), with several critical bugs and meaningful feature work converging simultaneously.

---

## 2. Releases

**None.** No new releases were issued in the last 24 hours.

---

## 3. Project Progress

The following PRs were **opened today (2026-06-03)** and represent the most significant active work streams:

| PR | Author | Focus | Summary |
|---|---|---|---|
| [#37747](https://github.com/NousResearch/hermes-agent/pull/37747) | teknium1 | Desktop/Gateway auth | Fixes WebSocket origin guard so Desktop clients can connect to remote gateways bound to Tailscale/LAN IPs. Salvages earlier work by @leonardsellem. |
| [#37748](https://github.com/NousResearch/hermes-agent/pull/37748) | AJV20 | Desktop updater | Hardens the desktop updater handoff — validates staged updater, catches async spawn failures, falls back to the in-app POSIX update path. |
| [#37749](https://github.com/NousResearch/hermes-agent/pull/37749) | teknium1 | Cron/skills | Fixes cron jobs expanding skill bundles instead of silently dropping them as unknown skill names. |
| [#37745](https.com/NousResearch/hermes-agent/pull/37745) | xxxigm | Desktop/macOS TTS | Adds microphone inheritance entitlement to macOS helper binaries, fixing voice chat on macOS. |
| [#37734](https://github.com/NousResearch/hermes-agent/pull/37734) | bautrey | Gateway streaming reliability | Adds a streaming stall watchdog, Telegram poll heartbeat, supervised tasks, and launchd respawn throttle — hardening long-lived gateway daemon deployments. |
| [#37548](https://github.com/NousResearch/hermes-agent/pull/37548) | vivganes | Agent context length | Fixes the agent actually respecting `model.context_length` in user config (previously overwritten at runtime). Released today. |
| [#37753](https://github.com/NousResearch/hermes-agent/pull/37753) | mason-s-023 | Cron response handling | Ensures cron final responses containing real report text mentioning `[SILENT]` are not accidentally suppressed. |
| [#37738](https://github.com/NousResearch/hermes-agent/pull/37738) | OutThisLife | Desktop UI/TUI | Replaces the full-screen model-picker modal with an inline Cursor-style dropdown in the status bar. |
| [#37739](https://github.com/NousResearch/hermes-agent/pull/37739) | OutThisLife | Desktop/macOS installer | Stops re-running setup over a working install and auto-places the app on macOS. |

Notably, several **P1/P2 bug-fix PRs** landed today that should meaningfully improve production stability for gateway operators and Desktop users (PRs #37734, #37548, #37747). The Desktop team is clearly in an active shipping cycle.

---

## 4. Community Hot Topics

### Most Discussed Issues (by comment count)

1. **[#20510](https://github.com/NousResearch/hermes-agent/issues/20510)** — *Cloud Sync for All Hermes Configurations Across Devices* (5 comments, 👍9)
   A heavily-upvoted feature request for cross-device config/profile/skill/session sync. With 9 upvotes and sustained discussion since May, this reflects a real and growing multi-device user base. The underlying need is a sync protocol or cloud-backed profile store (or integration with a cloud provider).

2. **[#18733](https://github.com/NousResearch/hermes-agent/issues/18733)** — *Per-model or per-provider compression threshold overrides* (5 comments, 👍3)
   As 1M+ context models (DeepSeek V4 Flash, MiMo V2.5 Pro, Gemini 2.5 Pro) become common, a single global `compression.threshold` is increasingly inadequate. Users need granularity at the model or provider level.

3. **[#23717](https://github.com/NousResearch/hermes-agent/issues/23717)** — *RFC: Pluggable SessionDB Provider — PostgreSQL, MySQL, and Beyond* (4 comments)
   The SQLite `state.db` is a known pain point — it corrupts during hot-updates ("git pull" while running), doesn't support concurrent access, and lacks durability guarantees. This RFC proposes a pluggable database backend, a significant architectural proposal that could resolve several cascading issues.

4. **[#7725](https://github.com/NousResearch/hermes-agent/issues/7725)** — *session_search can hang for 5+ minutes* (4 comments)
   A P1 bug with no resolution after nearly two months. Search operations bypassing their timeout is a serious reliability issue, particularly for users with large session histories.

5. **[#13260](https://github.com/NousResearch/hermes-agent/issues/13260)** — *Error: HTTP 404 Code Assist — Requested entity was not found* (4 comments)
   A persistent bug in the Gemini Code Assist (google-gemini-cli) provider integration. This suggests the provider's endpoint contract has changed and Hermes hasn't adapted.

### Hot PRs to Watch

- **[#37734](https://github.com/NousResearch/hermes-agent/pull/37734)** — Gateway streaming stall watchdog & Telegram heartbeat. Directly addresses long-running agent reliability issues that have plagued production deployments.
- **[#37747](https://github.com/NousResearch/hermes-agent/pull/37747)** — Remote Desktop connection fix. Critical for users running Hermes on a VPS with Desktop clients on local machines (see Issue #37663 below).

---

## 5. Bugs & Stability

New and notable bugs ranked by severity:

| Severity | Issue | Description | Fix PR? |
|---|---|---|---|
| **P1** | [#37733](https://github.com/NousResearch/hermes-agent/issues/37733) | **Security Candidate**: API server relays unredacted provider error messages to authenticated HTTP clients. CVSS 7.1 (High). | Not yet |
| **P1** | [#37677](https://github.com/NousResearch/hermes-agent/issues/37677) | Oversized image (>8000px) permanently bricks a conversation thread — image guards check bytes, never pixel dimensions. Related to [#25837](https://github.com/NousResearch/hermes-agent/issues/25837). | Not yet |
| **P1** | [#7725](https://github.com/NousResearch/hermes-agent/issues/7725) | `session_search` hangs for 5+ minutes, bypassing timeout/cancellation. | Not yet |
| **P2** | [#36934](https://github.com/NousResearch/hermes-agent/issues/36934) | `/steer` flagged as prompt injection by high-resistance models (Claude Opus 4.8) — false positive collision between tool-channel delivery and injection defense. | Not yet |
| **P2** | [#37399](https://github.com/NousResearch/hermes-agent/issues/37399) | Hermes Desktop remote mode rejects Electron WebSocket origins on non-loopback dashboard binds. | [#37747](https://github.com/NousResearch/hermes-agent/pull/37747) ✅ |
| **P2** | [#37751](https://github.com/NousResearch/hermes-agent/issues/37751) | **Desktop与Gateway双写冲突** (Desktop/Gateway double-write conflict causing contradictory config state on Windows). | Not yet |
| **P2** | [#37731](https://github.com/NousResearch/hermes-agent/issues/37731) | Windows installer "Access denied" — wipes venv while child processes still hold files open. | Not yet |
| **P2** | [#37743](https://github.com/NousResearch/hermes-agent/issues/37743) | Per-topic `enabled_toolsets` in `telegram.group_topics` parsed but never enforced — all topics load identical full toolset. | Not yet |
| **P2** | [#37662](https://github.com/NousResearch/hermes-agent/issues/37662) | httpx/OpenAI SDK hangs on IPv6 when connecting to provider endpoints (e.g. opencode.ai). | Not yet |
| **P3** | [#37718](https://github.com/NousResearch/hermes-agent/issues/37718) | macOS Hermes Desktop voice chat fails — missing microphone entitlement on Helper/Setup binaries. | [#37745](https://github.com/NousResearch/hermes-agent/pull/37745) ✅ |
| **P3** | [#37549](https://github.com/NousResearch/hermes-agent/issues/37549) | Flickering in Desktop chat transcripts — scroll position jumps during and after streaming. | Not yet |
| **P3** | [#37689](https://github.com/NousResearch/hermes-agent/issues/37689) | Circuit-breaker blocks auto-resurrected by `recompute_ready` — deterministic-failure kanban tasks loop forever. | Not yet |

**Notable closed bugs:**
- [#37011](https://github.com/NousResearch/hermes-agent/issues/37011) — File descriptor leak in gateway reconnect loop (fixed, closed).
- [#37522](https://github.com/NousResearch/hermes-agent/issues/37522) — Desktop updater falsely shows reinstall loop (closed; related PR #37748).

---

## 6. Feature Requests & Roadmap Signals

The following requests appear most likely to shape the next release cycle based on community reaction and technical fit:

| Issue | Request | Signal Strength |
|---|---|---|
| [#20510](https://github.com/NousResearch/hermes-agent/issues/20510) | **Cloud sync for configurations across devices** | 👍9, sustained multi-month discussion. High user pain for multi-device users. Likely a P2 roadmap item. |
| [#23717](https://github.com/NousResearch/hermes-agent/issues/23717) | **Pluggable SessionDB (PostgreSQL, MySQL)** | Significant architectural RFC. Would resolve the hot-update corruption issue. High complexity but high value for teams. |
| [#18733](https://github.com/NousResearch/hermes-agent/issues/18733) | **Per-model compression thresholds** | Natural evolution as context windows diversify. Likely next-version material. |
| [#37709](https://github.com/NousResearch/hermes-agent/issues/37709) | **Strict-confinement Snap package for Linux** | Distribution packaging demand is growing; could significantly lower install friction for Linux users. |
| [#37746](https://github.com/NousResearch/hermes-agent/issues/37746) | **Bundle all deps into `.hermes` including git** | Continues the pattern of bundling (UV already done). Addresses "breaks on random system versions" pain. |
| [#37663](https://github.com/NousResearch/hermes-agent/issues/37663) | **Connect Desktop client to existing VPS Hermes instance** | Directly related to the popular VPS deployment model. Desktop UX gap. |
| [#37719](https://github.com/NousResearch/hermes-agent/issues/37719) | **Re-budget context compressor when router serves different backends** | Niche but increasingly relevant as smart routing becomes more common. |

---

## 7. User Feedback Summary

### Pain Points

- **Installation & updating is fragile**: Both Windows (#37731) and macOS (#37739, #37522) users are hitting installer/updater issues — access denied errors, reinstall loops, and failure to detect existing installs. The Desktop onboarding experience needs hardening.
- **Gateway instability in production**: Users running Hermes as a long-lived service (#37011, #37733, #37734) are hitting file descriptor leaks, silent failures, and security issues. These are critical for the server/VPS deployment model that Hermes seems optimized for.
- **Config management is a single-device world**: Both [#20510](cloud sync) and [#37663](VPS/Desktop connection) point to the same fundamental issue — users expect Hermes to span devices. The current `~/.hermes/` local-only model is a constraint.
- **The Desktop–Gateway split is confusing**: Multiple issues (#37399, #37663, #37751) suggest users don't clearly understand the relationship between Desktop and Gateway components, particularly around remote connections and config ownership.

### Satisfaction Signals

- The **responsiveness of the PR pipeline** is notable — many bugs filed today already have PRs under review (#37739→#37739, #37718→#37745, #37399→#37747). This suggests maintainers are actively triaging.
- **Desk UX improvements** (inline model picker, installer fixes) show investment in the Desktop experience.

### Recurring Themes

| Theme | Issues |
|---|---|
| Multi-device / cross-device | #20510, #37663 |
| Desktop reliability (Windows & macOS) | #37731, #37739, #37522, #37718 |
| Gateway production hardening | #37011, #37733, #37734 |
| Context management at scale | #18733, #23717, #37719, #37744 |
| Image handling robustness | #37677, #25837 |

---

## 8. Backlog Watch

These important items have been open for extended periods without resolution and may need maintainer attention:

| Issue | Age | Description | Why It Matters |
|---|---|---|---|
| [#7725](https://github.com/NousResearch/hermes-agent/issues/7725) | ~73 days (2026-04-11) | `session_search` hangs 5+ minutes, bypassing timeout. **P1** | Core search functionality broken; regression after upgrade. |
| [#13260](https://github.com/NousResearch/hermes-agent/issues/13260) | ~42 days (2026-04-21) | Gemini Code Assist HTTP 404 persistent error. | Blocks users of Google's provider integration entirely. |
| [#8515](https://github.com/NousResearch/hermes-agent/issues/8515) | ~51 days (2026-04-12) | Smart routing drops `api_mode` from cheap_model config. **P2** | Silently breaks local inference setups (e.g., Ollama, vLLM) when routing to cheap models. |
| [#25837](https://github.com/NousResearch/hermes-agent/issues/25837) | ~19 days (2026-05-14) | `vision_analyze`/`browser_vision` can brick session with oversized image. **P2** | Related to newly opened #37677; this has been known for weeks. |
| [#18158](https://github.com/NousResearch/hermes-agent/issues/18158) | ~32 days (2026-05-01) | `hermes doctor` and browser tool can't find Node when launched non-interactively (mise/asdf/nvm). **P2** | Affects many non-standard Node.js setups. |
| [#37689](https://github.com/NousResearch/hermes-agent/issues/37689) | ~1 day (2026-06-02) | Circuit-breaker blocks resurrected → deterministic-failure tasks loop forever. **P3** | Cron/kanban reliability issue. No response yet. |

**PRs awaiting review:**

| PR | Age | Description |
|---|---|---|
| [#17124](https://github.com/NousResearch/hermes-agent/pull/17124) | ~35 days (2026-04-28) | fix(honcho): fallback to durable peer cards for plugins memory. Still open. |
| [#36901](https://github.com/NousResearch/hermes-agent/pull/36901) | ~2 days (2026-06-01) | fix(doctor): skip npm audit when no package-lock.json. Open, needs review. |
| [#37395](https://github.com/NousResearch/hermes-agent/pull/37395) | ~1 day (2026-06-02) | fix(gateway): extend MEDIA: regex to include document/code extensions. |

---

*Generated by OWL on 2026-06-03. Data source: GitHub API, NousResearch/hermes-agent.*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-06-03

---

## 1. Today's Overview

PicoClaw is in a highly active development phase. In the last 24 hours the project saw **14 PRs updated** (9 open, 5 merged/closed), **3 issues updated** (2 open, 1 closed), and **1 new nightly release** (`v0.2.9-nightly.20260602.426046fc`). The volume of merged PRs is notable — the team is pushing fixes rapidly across providers, session management, tooling, and the Web UI. Several contributors (notably `yuxuan-7814` and `chengzhichao-xydt`) are driving a concentrated bug-fix sprint. The project appears healthy with responsive maintainers and a steady cadence of nightly builds.

---

## 2. Releases

**Nightly Build: `v0.2.9-nightly.20260602.426046fc`**
- This is an automated nightly build and may be unstable. Use with caution.
- Full changelog: [v0.2.9...main](https://github.com/sipeed/picoclaw/compare/v0.2.9...main)
- No stable/GA release today. The nightly incorporates the batch of fixes merged today (see §3 below).

---

## 3. Project Progress

Five PRs were merged/closed today, representing meaningful stability and correctness improvements:

| # | PR | Summary |
|---|-----|---------|
| [2989](https://github.com/sipeed/picoclaw/pull/2989) | `fix(providers)` | Added Zhipu API error code **1210** to format error patterns, enabling proper fallback when GLM-5-Turbo vision API rejects image parameters. Closes [#2943](https://github.com/sipeed/picoclaw/issues/2943). |
| [2991](https://github.com/sipeed/picoclaw/pull/2991) | `fix(agent)` | Replaced separate timeout/network retry branches with a unified **provider error classifier** for transient LLM HTTP errors (e.g., OpenRouter/OpenAI 500s). Prevents immediate agent turn failure when no model fallback exists. |
| [2986](https://github.com/sipeed/picoclaw/pull/2986) | `fix(tools)` | Added `Stop()` method to `SessionManager` to **prevent goroutine leaks** from background cleanup tickers. Important for test suites and long-running deployments. |
| [2993](https://github.com/sipeed/picoclaw/pull/2993) | `docs(skill)` | Added a self-describing `picoclaw-agent` skill at `workspace/skills/picoclaw-agent/SKILL.md` — an operational guide for agent behavior. *(Note: PR #2994 is the open replacement for this closed PR.)* |
| [2239](https://github.com/sipeed/picoclaw/pull/2239) | `enhancement(docker)` | Modified Docker Compose to run with `privileged` mode. |

**Key themes:** Provider error resilience, resource leak fixes, and documentation for agent skills.

---

## 4. Community Hot Topics

### Most Discussed Issue
- **[#2404](https://github.com/sipeed/picoclaw/issues/2404)** — *"Add config to send streaming HTTP request"* (10 comments, 👍1)
  - **Opened:** 2026-04-07 | **Updated:** 2026-06-02 | **Status:** OPEN, stale
  - **Underlying need:** Users want a `"streaming": true` config option to enable streaming HTTP requests to LLM backends (mirroring the Python OpenAI client's `stream=True`). This is a **provider/config domain** enhancement that has been open for nearly two months with sustained discussion but no merged implementation yet. The 10 comments suggest active community interest.

### New Feature Request
- **[#2984](https://github.com/sipeed/picoclaw/issues/2984)** — *"Add explicit turn completion signal for Pico WebSocket clients"* (👍1)
  - **Opened:** 2026-06-02 | **Status:** OPEN
  - **Underlying need:** External WebSocket clients using the Pico Protocol lack a deterministic signal for when the agent has fully finished processing a user message. Current events (`message.create`, `message.update`, `typing.start`, `typing.stop`) don't provide a clear end-of-turn boundary. This is important for building reliable third-party clients and UIs.

### Active PR Clusters
- **`yuxuan-7814`** has 6 open PRs addressing provider compatibility (web_search, temperature, Zhipu errors, context compression, session history, tool_calls filtering) — indicating a systematic effort to harden multi-provider support.
- **`chengzhichao-xydt`** has 3 open/closed PRs around session management, error retry, and context display — focusing on core agent reliability.

---

## 5. Bugs & Stability

| Severity | Issue / PR | Description | Fix Status |
|----------|-----------|-------------|------------|
| 🔴 **High** | [#2943](https://github.com/sipeed/picoclaw/issues/2943) | WeChat channel image sending to Zhipu GLM-5-Turbo triggers API error 1210 (parameter error) | ✅ **Fixed** — PR [#2989](https://github.com/sipeed/picoclaw/pull/2989) merged |
| 🟠 **Medium** | [#2972](https://github.com/sipeed/picoclaw/issues/2972) | After upgrading to v0.2.9, new Web UI sessions inherit old messages due to `PromoteAliasHistory` copying migrated main session content | 🔧 **Fix in progress** — PR [#2992](https://github.com/sipeed/picoclaw/pull/2992) open |
| 🟠 **Medium** | [#2796](https://github.com/sipeed/picoclaw/issues/2796) | Web UI session history only shows the last user message in multi-message conversations | 🔧 **Fix in progress** — PR [#2990](https://github.com/sipeed/picoclaw/pull/2990) open |
| 🟠 **Medium** | [#2968](https://github.com/sipeed/picoclaw/issues/2968) | `/context` command always shows 'Compress at: 76800 tokens' ignoring `summarize_token_percent` config | 🔧 **Fix in progress** — PRs [#2988](https://github.com/sipeed/picoclaw/pull/2988) and [#2985](https://github.com/sipeed/picoclaw/pull/2985) open |
| 🟡 **Low** | [#2958](https://github.com/sipeed/picoclaw/issues/2958) | `tool_calls` messages incorrectly dropped during active streaming sessions | 🔧 **Fix in progress** — PR [#2987](https://github.com/sipeed/picoclaw/pull/2987) open |
| 🟡 **Low** | Goroutine leak in `SessionManager` | Background cleanup ticker goroutine runs indefinitely with no shutdown mechanism | ✅ **Fixed** — PR [#2986](https://github.com/sipeed/picoclaw/pull/2986) merged |

**Assessment:** The project is in a strong recovery posture — most reported bugs have open or merged fix PRs. The v0.2.9 session migration regression ([#2972](https://github.com/sipeed/picoclaw/issues/2972)) is the most impactful remaining open bug.

---

## 6. Feature Requests & Roadmap Signals

| Request | Source | Likelihood in Next Version | Rationale |
|---------|--------|---------------------------|-----------|
| **Streaming HTTP config** | [#2404](https://github.com/sipeed/picoclaw/issues/2404) | 🟡 Medium | 10 comments over 2 months shows demand, but no PR yet. May require architectural discussion. |
| **Explicit turn completion signal** | [#2984](https://github.com/sipeed/picoclaw/issues/2984) | 🟢 High | Fresh issue (today), well-scoped, directly related to WebSocket protocol — aligns with current Web UI focus. |
| **Debug trace viewer (picoclaw-tracer)** | [#2945](https://github.com/sipeed/picoclaw/pull/2945) | 🟢 High | PR already open; standalone binary that reads gateway JSON-Lines logs and renders per-turn LLM traces. Low risk, high debuggability value. |
| **Self-describing agent skill** | [#2994](https://github.com/sipeed/picoclaw/pull/2994) | 🟢 High | PR open (replaces closed #2993); documentation-only change. |
| **Function-type web_search** | [#2951](https://github.com/sipeed/picoclaw/pull/2951) | 🟡 Medium | Stale PR; fixes OpenAI API compatibility but needs review. |
| **Claude Opus 4.7 temperature skip** | [#2948](https://github.com/sipeed/picoclaw/pull/2948) | 🟡 Medium | Stale PR; straightforward fix but needs review. |

**Prediction:** The next stable release (likely v0.2.9 or v0.3.0) will focus on **provider compatibility hardening** (Zhipu, Claude, OpenAI), **session/history correctness** (v0.2.9 regression fixes), and **observability** (tracer tool). The streaming config feature may slip to a later release.

---

## 7. User Feedback Summary

**Pain Points:**
- **Multi-provider fragility** is the dominant theme. Users hit API-specific incompatibilities with Zhipu (error 1210), Claude (temperature deprecation), and OpenAI (web_search_preview vs function type). The community is actively contributing fixes, suggesting PicoClaw's provider abstraction layer needs more systematic coverage.
- **v0.2.9 upgrade regression** — session history migration is causing new sessions to inherit stale messages. This is a trust-impacting bug for existing users upgrading.
- **Web UI session history is incomplete** — users can't see full conversation history, degrading the UX for multi-turn conversations.
- **Context management confusion** — the `/context` command doesn't reflect actual configuration, making it hard for users to understand and tune context window behavior.

**Use Cases Observed:**
- WeChat bot integration with vision-capable models (GLM-5-Turbo)
- OpenAI-compatible endpoints with native web search
- WebSocket-based external clients using Pico Protocol
- Docker deployments (privileged mode requests)

**Satisfaction Signals:**
- Multiple contributors are submitting PRs (not just filing issues), indicating a healthy contributor community.
- Rapid merge turnaround for several fixes today suggests maintainers are responsive.
- The nightly release cadence provides early access to fixes.

---

## 8. Backlog Watch

These items have been open for extended periods and may need maintainer attention:

| # | Item | Age | Status | Notes |
|---|------|-----|--------|-------|
| [#2404](https://github.com/sipeed/picoclaw/issues/2404) | Streaming HTTP config | ~57 days | OPEN, stale | 10 comments, clear use case, but no implementation. Needs maintainer scoping decision. |
| [#2951](https://github.com/sipeed/picoclaw/pull/2951) | Function-type web_search fix | ~7 days | OPEN, stale | Straightforward compatibility fix. Needs review/merge or closure. |
| [#2948](https://github.com/sipeed/picoclaw/pull/2948) | Claude Opus 4.7 temperature skip | ~7 days | OPEN, stale | Simple model-specific fix. Needs review. |
| [#2945](https://github.com/sipeed/picoclaw/pull/2945) | Debug trace viewer (picoclaw-tracer) | ~7 days | OPEN | Feature PR with significant value for debugging. Needs maintainer review. |
| [#2239](https://github.com/sipeed/picoclaw/pull/2239) | Docker Compose privileged mode | ~62 days | CLOSED | Was closed today — resolved. |

**Recommendation:** The stale PRs (#2951, #2948) are low-risk, high-value fixes that could be fast-tracked. Issue #2404 needs a maintainer to either scope it for implementation or close it with an explanation to manage community expectations.

---

*Data source: [github.com/sipeed/picoclaw](https://github.com/sipeed/picoclaw) | Digest generated: 2026-06-03*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

### 1. Today's Overview
NanoClaw exhibited a solid pulse of development activity on 2026-06-03, driven primarily by core contributor focus on platform stability and architecture enhancements. Four pull requests were merged or closed, emphasizing security hardening, runtime standardization, plugin extensibility, and channel integration. Open activity remains healthy with three active PRs targeting critical bug fixes in containerization, CLI handling, and MCP transport compatibility. The repository currently shows no new releases, suggesting these recent merges are accumulating for an upcoming stabilization or feature drop.

### 2. Releases
*No new releases were published today.*

### 3. Project Progress
Project advancement today was robust across security, extensibility, and standardization:
*   **Security Hardening:** Merged PR [#2538](https://github.com/nanocoai/nanoclaw/pull/2538) fixed a critical OS command injection vulnerability (CWE-78) in the container runner by validating package names before Dockerfile interpolation.
*   **Runtime Stability:** Merged PR [#2674](https://github.com/nanocoai/nanoclaw/pull/2674) standardized long-running runtime status messages as mechanical labels and added internal-channel guards to prevent self-loops.
*   **Extensibility:** Merged PR [#1193](https://github.com/nanocoai/nanoclaw/pull/1193) introduced a host-side plugin hook system (`onStartup`/`onShutdown`), allowing plugins to initialize long-running services before the message loop.
*   **Channel Integration:** Merged PR [#2069](https://github.com/nanocoai/nanoclaw/pull/2069) added the webchat v1 skill, expanding the platform's communication channel support.

### 4. Community Hot Topics
There are no highly active discussions (high comment counts or reactions) within the last 24 hours. The most notable community item is Issue [#2673](https://github.com/nanocoai/nanoclaw/issues/2673), which proposes an "Automated Student Grading System." While the issue relies on an AI video prompt rather than a technical specification, it signals underlying community interest in applying NanoClaw to specialized, domain-specific workflow automation (in this case, educational tech). None of the recent PRs garnered significant community engagement, indicating today's progress was largely maintainer-driven.

### 5. Bugs & Stability
Several bug fixes were identified and addressed today, ranked by severity:
1.  **[Critical] OS Command Injection:** CWE-78 vulnerability via crafted package names in the container runner. **Fix:** Merged in PR [#2538](https://github.com/nanocoai/nanoclaw/pull/2538).
2.  **[Medium] Container Attachment Mounts:** Agent containers failed to access inbound attachments because the mount target did not exist. **Fix:** Open in PR [#2671](https://github.com/nanocoai/nanoclaw/pull/2671) (adds read-only bind mount).
3.  **[Medium] MCP Union Compatibility:** The Codex provider broke under proxies due to outdated stdio-only assumptions for `McpServerConfig`. **Fix:** Open in PR [#2672](https://github.com/nanocoai/nanoclaw/pull/2672) (updates to `stdio | http | sse` union).
4.  **[Low] CLI Platform ID Namespacing:** Bare platform IDs are incorrectly namespaced for the CLI channel. **Fix:** Open in PR [#2187](https://github.com/nanocoai/nanoclaw/pull/2187) (adds `channel === 'cli'` carve-out).

### 6. Feature Requests & Roadmap Signals
*   **Domain-Specific Agents:** Issue [#2673](https://github.com/nanocoai/nanoclaw/issues/2673) highlights a desire for vertical-specific AI applications (ed-tech/grading), suggesting future roadmap value in creating reference workflows or templates for specialized industries.
*   **Plugin Ecosystem:** The merging of the plugin hook system ([#1193](https://github.com/nanocoai/nanoclaw/pull/1193)) is a strong architectural signal that NanoClaw is transitioning from a monolithic agent runner to an extensible framework, likely paving the way for community-contributed integrations in future releases.

### 7. User Feedback Summary
Direct user feedback was minimal today, but real pain points can be extracted from the bug reports:
*   **Proxy/Networking Friction:** The need for HTTP-only transport behind proxies ([#2672](https://github.com/nanocoai/nanoclaw/pull/2672)) indicates users are deploying NanoClaw in restricted corporate or network environments where SSE/stdio routing fails.
*   **File Handling Expectations:** The attachment mount fix ([#2671](https://github.com/nanocoai/nanoclaw/pull/2671)) reveals that users expect channel adapters to seamlessly pass files into the agent workspace, and current broken paths disrupt multi-modal AI workflows.

### 8. Backlog Watch
*   **PR [#2187](https://github.com/nanocoai/nanoclaw/pull/2187)** (CLI bare platform ID fix): Originally created on 2026-05-02, this PR has been sitting open for over a month despite passing guidelines. Maintainer review is needed to unblock CLI users experiencing namespacing errors.
*   **Issue [#2673](https://github.com/nanocoai/nanoclaw/issues/2673)**: Though newly created, this issue lacks technical detail and consists mostly of an AI video prompt. It currently has zero maintainer response and requires triage to convert it into an actionable feature request or redirect the author to appropriate contribution guidelines.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest — 2026-06-03

---

## 1. Today's Overview

NullClaw shows **low but focused activity** as of June 3, 2026. A single issue (#944) and a corresponding PR (#945) were updated in the last 24 hours—both filed by the same contributor and both still open. No releases landed today, and no PRs were merged or closed. The project appears in a **maintenance mode for stability**: the sole activity centers on an active regression introduced in the May 2026 PII redaction upgrade, with a fix already proposed and awaiting review/merge. This is a healthy signal—issues are being matched with PRs within hours.

---

## 2. Releases

**None.** No new releases were published in the last 24 hours. The most recent changes landed via commit `41cdb493` in May 2026, which also surfaced the regression being addressed in the open PR.

---

## 3. Project Progress

No PRs were merged or closed today. The only open PR is:

- **[PR #945](https://github.com/nullclaw/nullclaw/issues/945)** — *fix(redaction): reject ISO date/time patterns as false-positive phone matches*
  Targets `src/redaction.zig`, adding an `isDateLike()` guard to `matchPhone` to prevent ISO-formatted date/time strings (like `2026-06-02 20:17`) from being falsely flagged as phone numbers. **Status: awaiting review.**

---

## 4. Community Hot Topics

Only one topic is active this cycle:

- **[Issue #944](https://github.com/nullclaw/nullclaw/issues/944)** — *PII redactor falsely matches date/time output as phone numbers ([PHONE_X])*
  At 0 comments and 0 👍, this issue hasn't yet sparked discussion, but its **underlying need is clear**: the PII redaction system needs smarter context-aware matching to avoid false positives on structured system output. `[PHONE_X]` substitution in agent-facing tool output breaks agents that rely on `date` command results for reasoning—a correctness-critical use case.

  The matching PR (#945) from the same author suggests this is a **reliability / false-positive suppression** concern, not a missing feature. This points to a broader pattern: adaptive content filtering that gracefully handles numeric patterns from known system tool semantics.

---

## 5. Bugs & Stability

| Severity | Item | Description | Fix PR Available? |
|----------|------|-------------|---------------------|
| **Medium** | [Issue #944](https://github.com/nullclaw/nullclaw/issues/944) | PII redactor falsely matches ISO date/time strings as phone numbers (`[PHONE_X]` placeholders replace real timestamps) | ✅ Yes — [PR #945](https://github.com/nullclaw/nullclaw/issues/945) |

- **Impact**: Agents receiving system `date` output see redaacted values, which could break time-sensitive reasoning chains. Since `enable_pii_redaction` defaults to `true`, this is an **on-by-default regression** from the May 2026 update.
- **No crashes or critical bugs** were reported. This is a pure false-positive correctness issue.

---

## 6. Feature Requests & Roadmap Signals

No new feature requests were filed today. However, the bug in Issue #944 signals an **implicit roadmap need**:

- **Smarter, context-aware PII detection**: Rather than guarding only one pattern (ISO dates), future redaction should incorporate a structured allowlist of known safe numeric patterns from system tools (timestamps, UIDs, etc.). A broader semantic classifier or context-scoping mechanism beyond regex-only matching would reduce regression surface for similar false-positive scenarios.

---

## 7. Feedback Summary

**User pain point identified**:
- `date` command output being silently redaacted into `[PHONE_X]`, causing agents to receive corrupted data.
- This is particularly problematic because `enable_pii_redaction=true` is now the default, meaning **all users are affected unless they manually disable it**.

**Use case highlighted**:
- Agents relying on reliable, unmodified system command output for time-aware reasoning and tool use.

**Satisfaction signal**:
- The fast turnaround of a fix PR (#945) from the same contributor suggests the contributor is highly engaged and responsive—a positive community health indicator.

---

## 8. Backlog Watch

| Item | Age | Status | Recommendation |
|------|-----|--------|----------------|
| [Issue #944](https://github.com/nullclaw/nullclaw/issues/944) | 1 day | Open, has matching fix PR | Prioritize review/merge of PR #945 to resolve a default-on regression |

No long-unanswered items surfaced in the 24-hour window. However, **PR #945 should be fast-tracked** as it addresses a regression from a recent default-enabled feature that affects core agent functionality. Maintainers should watch for additional false-positive categories beyond ISO dates that may emerge from the same root cause.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-06-03

---

## 1. Today's Overview

IronClaw saw intense activity on June 2–3 with **29 issues updated (27 open, 2 closed)** and **50 PRs updated (19 open, 31 merged/closed)** — one of the highest single-day throughput periods observed. No new releases were published. The contribution pattern reveals a large coordinated push around the **Reborn loop refactoring** (issues L1–L11 and C1–C6, almost all filed by `henrypark133` in a single batch), alongside active QA bug-bash results targeting Qwen3.6-35B and MiniMax-M2.7 models. Merge velocity is strong (31 closed PRs), but the issue backlog is growing rapidly, with 22 new issues opened in the last 24 hours — many representing deep architectural debt identified during internal audits.

---

## 2. Releases

**None.** No new versions were published in the reporting window.

---

## 3. Project Progress

The 31 merged/closed PRs and 2 closed issues paint a picture focused on **Reborn subsystem hardening, third-party integration reliability, and UI correctness**:

### Merged / Closed PRs

| PR | Summary | Significance |
|---|---|---|
| [#4369](https://github.com/nearai/ironclaw/pull/4369) | Harden skill context budget contract tests | Strengthens quality gate around prompt safety split tracked by #4171 |
| [#4374](https://github.com/nearai/ironclaw/pull/374) | Accept `memory_search` query aliases (`q`, `text`, `pattern`) | Improves provider/model compatibility for built-in memory tool |
| [#4357](https://github.com/nearai/ironclaw/pull/4357) | Fix local-dev Reborn memory mount | Unblocks local development with structured-record libSQL backend for first-party memory tools |
| [#4371](https://github.com/nearai/ironclaw/pull/4371) | Fix Codex ChatGPT empty responses (SSE parsing) | Resolves silent empty-response failures for OpenAI Codex and line-syntax tool calls |
| [#4318](https://github.com/nearai/ironclaw/pull/4318) | PR17: Add first-party trigger capabilities (`trigger_create`, `trigger_list`, `trigger_remove`) | Milestone — Reborn scheduled trigger API becomes available |
| [#4347](https://github.com/nearai/ironclaw/pull/4347) | Fix Reborn Gmail OAuth auth gate scopes | Fixes bundled Gmail/Google Calendar OAuth runtime credential shapes |
| [#4345](https://github.com/nearai/ironclaw/pull/4345) | Wire Notion DCR OAuth for Reborn WebUI | Completes Notion OAuth integration for the Reborn WebChat v2 composition |
| [#4346](https://github.com/nearai/ironclaw/pull/4346) | Fix Gmail OAuth auth gate requirements mapping | Ensures Gmail auth failures correctly map to Google OAuth credential requirements |
| [#4337](https://github.com/nearai/ironclaw/pull/4337) | Fix Google OAuth prompts for runtime auth gates | Automates Google OAuth gate resume flows instead of falling back to manual-token prompts |

### Closed Issues

| Issue | Summary |
|---|---|
| [#4355](https://github.com/nearai/ironclaw/issues/4355) | Newtype `client_thread_id` / `client_response_id` on `ThreadExecutionContext` (Z2 follow-up from #3669) |
| [#3806](https://github.com/nearai/ironclaw/issues/3806) | GitHub WASM read/write capability path (Lane 6) — reborn |

**Key Takeaway:** The Reborn codebase is progressing through a methodical hardening sprint — today's merges covered auth/OAuth correctness (Google, Notion, Gmail), trigger capabilities, SSE edge cases, and local-dev infrastructure. The 31 closed PRs indicate healthy merge throughput and good branch hygiene.

---

## 4. Community Hot Topics

While the raw comment counts are uniformly low (most new items were created within the last 24 hours), the following items stand out due to **engagement signals, contributor reputation, or cross-cutting scope**:

### Active Discussion Candidates

| Item | Type | Author | Significance |
|---|---|---|---|
| [#4354](https://github.com/nearai/ironclaw/pull/4354) | **Open PR** | serrrfirat | Hosted MCP transport protocol version negotiation (`2025-06-18`) + Notion/GSuite OAuth credential reuse fixes — broad integration impact |
| [#4321](https://github.com/nearai/ironclaw/pull/4321) | **Open PR** | danielwpz | Slack Reborn final-reply / approval-auth delivery for [#3857] — completes a high-visibility channel integration milestone |
| [#3669](https://github.com/nearai/ironclaw/pull/3669) | **Open PR** | zetyquickly | Engine v2: expose `notify_thread_id` / `notify_response_id` to tools — restores v1 contract for cross-turn correlation |
| [#4356](https://github.com/nearai/ironclaw/pull/4356) | **Open PR, DB Migration** | serrrfirat | Fix WebUI v2 assistant-reply ordering — DB migration scope raises review complexity |
| [#3548](https://github.com/nearai/ironclaw/pull/3548) | **Open PR** | zetyquickly | Add `DISABLE_TOOLS_LIST` config flag + security regression test — addresses a recurring operational security request |

### Reborn Audit-Driven Issue Clusters

The single most significant development today is the **mass filing of 22 Reborn audit follow-up issues** by `henrypark133`, organized into structured lanes:

- **Loop Hardening (L1–L11):** 11 issues covering gate replay validation, prompt safety wiring, capability validation, cancellation propagation, budget accuracy, capability pipeline observability, persistence/event ordering, recovery strategies, compaction/checkpoint correctness, loop strategies/stop conditions, and host-kernel architecture hygiene.
- **Subagent Correctness (C1–C6):** 6 issues covering durable completion delivery, completion observer correctness, spawn compensation, capability surface + safety gating, subagent provenance in audit, and operational hygiene.

These are not casual feature requests — they represent a **systematic production-readiness audit** of the Reborn engine. Every issue references specific audit findings (F-A1, H4, M9, etc.) and proposes concrete corrective implementations. They are expected to generate the next major wave of PRs.

---

## 5. Bugs & Stability

### Newly Reported Bugs (2026-06-02)

#### P1 — Model/Provider Compatibility Failures

| Issue | Severity | Model | Summary | Fix PR |
|---|---|---|---|---|
| [#4334](https://github.com/nearai/ironclaw/issues/4334) | **P1** | Claude Opus 4.7/4.8 | Entirely unusable: IronClaw always sends `temperature`, models reject it with `400: temperature is deprecated` | None yet |
| [#4339](https://github.com/nearai/ironclaw/issues/4339) | **P1** | MiniMax-M2.7 | Valid provider tool calls rejected as `InvalidInvocation` despite valid capability schemas | None yet |

**Impact:** Two production model families are either completely unusable (Claude Opus 4.7/4.8) or functionally broken (MiniMax tool invocation). The Claude issue is particularly urgent as it may affect other Anthropic models with similar parameter restrictions.

#### P2 — QA Bug Bash Findings (Qwen3.6-35B-A3B-FP8)

All 6 bugs below were filed by `joe-rlo` during a single QA session on hosted-staging ("crab shack"), indicating this model has **systemic integration issues**:

| Issue | Bug | Summary |
|---|---|---|
| [#4341](https://github.com/nearai/ironclaw/issues/4341) | Chain-of-thought exposed to user + stuck in thinking state | Model's `THINKING` blocks leak into user UI and agent gets permanently stuck |
| [#4344](https://github.com/nearai/ironclaw/issues/4344) | User message mirrored as agent response while loading | UI falsely displays the user's own message back as the agent's streaming response |
| [#4343](https://github.com/nearai/ironclaw/issues/4343) | MCP integration driver failure | Notion/GitHub MCP integrations acknowledged as activated but non-functional due to driver failure |
| [#4342](https://github.com/nearai/ironclaw/issues/4342) | Auth modal blocks chat after refresh | Authentication modal persists across page refresh and blocks all chat interaction until manually dismissed |
| [#4340](https://github.com/nearai/ironclaw/issues/4340) | Blank content validation blocks message submission | Overly aggressive frontend validation blocks sending messages, with erroneous error response |

#### P2 — Additional Stability

| Issue | Bug | Summary |
|---|---|---|
| [#4338](https://github.com/nearai/ironclaw/issues/4338) | Disconnected state shows misleading execution driver error | UI displays incorrect error message when network disconnect occurs during agent execution |
| [#4108](https://github.com/nearai/ironclaw/issues/4108) | Nightly E2E failure | Nightly E2E test suite failed on `main` at commit `749f584`; no manual triage yet |

**None of the 9 new bugs have fix PRs filed yet.** Root causes appear to be split between provider-specific SSE/reasoning parsing (Qwen, Claude), tool schema validation (MiniMax), and UI state management edge cases.

---

## 6. Feature Requests & Roadmap Signals

### Strong Signals (Active PRs)

| Signal | Evidence | Likelihood of Next Release Inclusion |
|---|---|---|
| **Reborn trigger capabilities** | PR [#4318](https://github.com/nearai/ironclaw/pull/4318) merged today | ✅ **Already shipped** — first-party scheduled triggers (`trigger_create/list/remove`) are now in the codebase |
| **Slack Reborn final-reply delivery** | PR [#4321](https://github.com/nearai/ironclaw/pull/4321) in review | 🟡 **Likely** — blocks Slack channel completion |
| **Trigger poller lifecycle** | PR [#4375](https://github.com/nearai/ironclaw/pull/4375) in review | 🟡 **Likely** — opt-in runtime wiring paired with trigger capabilities |
| **Feishu websocket intake** | PR [#4178](https://github.com/nearai/ironclaw/pull/4178) in review | 🟢 **Possible** — Chinese-market channel expansion |
| **`DISABLE_TOOLS_LIST` config flag** | PR [#3548](https://github.com/nearai/ironclaw/pull/3548) in review | 🟢 **Possible** — security/ops hardening, dual-layer enforcement |

### Emerging Requests

- **Claude Opus temperature handling** ([#4334](https://github.com/nearai/ironclaw/issues/4334)): A near-term hotfix is expected since it renders entire model tiers unusable. This likely needs a provider-specific parameter stripping mechanism.
- **Qwen3.6 reasoning UI** ([#4341](https://github.com/nearai/ironclaw/issues/4341)): Chain-of-thought exposure suggests the SSE/response parsing layer needs model-specific reasoning block filtering.

---

## 7. User Feedback Summary

### Pain Points Converging on Two Themes

**Theme 1: Multi-Provider Fragility**
Multiple users are hitting model-specific incompatibilities that IronClaw fails to gracefully handle:
- **Claude Opus 4.7/4.8** completely broken due to mandatory `temperature` parameter ([#4334](https://github.com/nearai/ironclaw/issues/4334))
- **MiniMax-M2.7** tool calls silently rejected as invalid ([#4339](https://github.com/nearai/ironclaw/issues/4339))
- **Qwen3.6-35B** reasoning blocks leaking to UI, auth issues, MCP driver failures, and ghost messages ([4341](https://github.com/nearai/ironclaw/issues/4341)–[#4344](https://github.com/nearai/ironclaw/issues/4344), [4340](https://github.com/nearai/ironclaw/issues/4340), [4343](https://github.com/nearai/ironclaw/issues/4343))

**User sentiment:** These are experienced QA/integration users systematically testing model providers — the pattern suggests IronClaw's provider abstraction layer needs a **model capability negotiation or auto-detection layer** to avoid shipping with broken configurations.

**Theme 2: UX-State Stalls**
- Auth modal persisting after refresh completely blocks chat ([#4342](https://github.com/nearai/ironclaw/issues/4342))
- Agent stuck in thinking state requiring manual intervention ([#4341](https://github.com/nearai/ironclaw/issues/4341))
- Misleading error messages during disconnect obscure the actual issue ([#4338](https://github.com/nearai/ironclaw/issues/4338))

### Bright Spots
The 31 merged PRs and completed trigger capability surface demonstrate strong internal momentum. OAuth flows (Google, Gmail, Notion) received significant attention today, indicating investment in third-party integration reliability.

---

## 8. Backlog Watch

### Long-Standing Items Needing Attention

| Item | Age | Status | Why It Matters |
|---|---|---|---|
| [#4108](https://github.com/nearai/ironclaw/issues/4108) — Nightly E2E failure | **7 days** | Open, 0 comments | CI is broken on `main` for a week; blocks confident merging; auto-filed by `github-actions[bot]` at commit `749f584` |

### High-Ultency Unanswered Issues (No Fix PRs)

| Issue | Created | Summary |
|---|---|---|
| [#4334](https://github.com/nearai/ironclaw/issues/4334) | 2026-06-02 | Claude Opus 4.7/4.8 completely unusable |
| [#4339](https://github.com/nearai/ironclaw/issues/4339) | 2026-06-02 | MiniMax-M2.7 tool calls rejected as invalid |
| [#4341](https://github.com/nearai/ironclaw/issues/4341) | 2026-06-02 | Qwen reasoning loop stuck in thinking state |

### Open PRs at Risk of Staleness

| PR | Created | Age | Scope | Risk |
|---|---|---|---|---|
| [#3669](https://github.com/nearai/ironclaw/pull/3669) | 2026-05-14 | 20 days | XL, medium risk, channel/web | Thread/response ID exposure — foundational for cross-turn correlation; aging without merge |
| [#3548](https://github.com/nearai/ironclaw/pull/3548) | 2026-05-12 | 22 days | XL, medium risk, security | `DISABLE_TOOLS_LIST` + security tests — operational hardening taking >3 weeks in review |
| [#4178](https://github.com/nearai/ironclaw/pull/4178) | 2026-05-28 | 6 days | XL, medium risk, Feishu websockets | New channel intake; still in review |
| [#4356](https://github.com/nearai/ironclaw/pull/3556) | 2026-06-02 | 1 day | M, DB migration | DB migration scope requires careful review; don't let it slip |

**Maintenance Recommendation:** The Nightly E2E failure ([#4108](https://github.com/nearai/ironclaw/issues/4108)) persisting for 7 days without triage is the most urgent unaddressed item — a broken CI on `main` undermines confidence in all other merges, including today's 31 closed PRs.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

**LobsterAI Project Digest — 2026-06-03**

---

### 1. Today's Overview  
LobsterAI remains highly active with no issues reported in the last 24 hours but a surge in PR activity: 50 updates, including 47 merged/closed PRs and 3 still open. The project is in a strong development phase focused on stability improvements, UX refinement, feature enhancements (especially around AI model support and security), and infrastructure robustness. No new releases were published today, indicating recent changes are likely queued for an upcoming release cycle.

---

### 2. Releases  
**None**  
No new versions were released today.

---

### 3. Project Progress  
Today’s merged/closed PRs reflect intense cross-cutting work:

- **AI Model & Provider Enhancements**  
  - Enabled image input support for MiniMax-M3 ([PR #2093](https://github.com/netease-youdao/LobsterAI/pull/2093)), correcting a hardcoded limitation from prior models.  
  - Upgraded MiniMax default model configuration to M3, deprecating older versions (M2.5/M2.1/etc.) ([PR #388](https://github.com/netease-youdao/LobsterAI/pull/388) — *still open*).  

- **Security & Plugin Architecture**  
  - Added `nsp-clawguard` security monitoring plugin with toggleable UI in Settings ([PR #1962](https://github.com/netease-youdao/LobsterAI/pull/1962)).  
  - Hid internal OpenClaw plugins from user-facing plugin management ([PR #2096](https://github.com/netease-youdao/LobsterAI/pull/2096)).  

- **Cowork & Multi-Agent UX**  
  - Improved subagent session handling: async transcript cleanup, batch deletion support, and gateway restart avoidance during token refresh ([PRs #2095](https://github.com/netease-youdao/LobsterAI/pull/2095), [#2018](https://github.com/netease-youdao/LobsterAI/pull/2018)).  
  - Introduced adjustable thinking levels (Off/Minimal/Low/Medium/High/Adaptive) with full-stack integration ([PR #1985](https://github.com/netease-youdao/LobsterAI/pull/1985)).  

- **Artifacts & Sharing**  
  - Optimized HTML preview: lazy-loaded source views, theme adaptation, file existence checks, and UI layout fixes ([PRs #2022](https://github.com/netease-youdao/LobsterAI/pull/2022), [#2094](https://github.com/netease-youdao/LobsterAI/pull/2094)).  
  - Redesigned IM bot management UI for clarity and usability ([PR #2025](https://github.com/netease-youdao/LobsterAI/pull/2025)).  

- **Infrastructure & Tooling**  
  - Optimized MCP startup by pre-resolving `npx` packages to static `node` paths, reducing latency ([PR #2091](https://github.com/netease-youdao/LobsterAI/pull/2091)).  
  - Improved browser/webfetch reliability and config validation ([PRs #2023](https://github.com/netease-youdao/LobsterAI/pull/2023), [#2031](https://github.com/netease-youdao/LobsterAI/pull/2031)).  

---

### 4. Community Hot Topics  
While no new issues were filed today, the most commented and active PRs reveal key community interests:

- **#388 [OPEN]**: Upgrade MiniMax default model to M3  
  → High user demand for cutting-edge model support and smooth migration paths. Delays suggest potential review or testing bottlenecks.  
- **#1464 [OPEN]**: Duplicate validation for IM instance names and credentials  
  → Pain point around configuration reliability in multi-instance setups (Feishu/DingTalk/QQ). Users seek validation to prevent duplicates and conflicts.  
- **#1277 [OPEN]**: Dependabot PR bumping Electron to v42  
  → Critical infrastructure update; likely stalled on compatibility testing. Delays risk security or feature regressions from outdated Electron.  

*Note: All PRs show 0 comments and 0 reactions, suggesting limited public engagement despite high merge volume—possibly due to internal development workflow or recent community lull.*

---

### 5. Bugs & Stability  
No new bug reports or regressions were filed in the last 24 hours. However, recent closed PRs address several stability-critical fixes:

- **High Severity**:  
  - Fixed MCP startup latency via pre-installed binaries (avoids repeated `npx` calls) ([PR #2091](https://github.com/netease-youdao/LobsterAI/pull/2091)).  
  - Prevented OpenClaw gateway restarts during token refresh ([PR #2018](https://github.com/netease-youdao/LobsterAI/pull/2018))—critical for uninterrupted cowork sessions.  

- **Medium Severity**:  
  - Resolved macOS toast notification for voice input permission denial ([PR #1952](https://github.com/netease-youdao/LobsterAI/pull/1952))—improves user guidance on privacy settings.  
  - Handled compaction retries and tool result gaps in OpenClaw ([PR #2015](https://github.com/netease-youdao/LobsterAI/pull/2015)).  

All reported issues appear resolved; no outstanding crash or regression alerts.

---

### 6. Feature Requests & Roadmap Signals  
User-driven signals point to these likely near-term additions:

- **Enhanced Model Flexibility**: M3 defaulting and image support suggest roadmap toward broader multimodal model compatibility.  
- **Granular Security Controls**: `nsp-clawguard` toggle indicates growing focus on user-configurable safety features.  
- **Multi-Agent Orchestration**: Subagent batch ops and session isolation improvements signal investment in complex agent workflows.  
- **Developer Experience**: MCP startup optimization shows commitment to plugin ecosystem performance.  

Predicted next-release candidates:  
- Completion of MiniMax-M3 upgrade (PR #388)  
- IM instance duplicate validation (PR #1464)  
- Electron v42 upgrade (PR #1277) after compatibility validation

---

### 7. User Feedback Summary  
Implicit pain points from PR contexts:

- **Confusing Authorization UX**: macOS voice input denial offered no feedback until fixed—users felt “broken” workflows [→ now resolved].  
- **Plugin Clutter**: Internal plugins exposed in UI caused confusion [→ now hidden].  
- **Unreliable Sharing UX**: Redundant status indicators in success dialogs reduced clarity [→ streamlined].  
- **Late-stage Permission Prompts**: Users dislike being blocked after initiating actions (e.g., voice input without prior guidance).  

Satisfaction indicators: rapid patching of UX friction points and proactive security/plugin hardening.

---

### 8. Backlog Watch  
Three open PRs require maintainer attention:

1. **[#388] Upgrade MiniMax default model to M3** (Created: 2026-03-12)  
   → Stale for ~3 months despite M3’s release. Risks falling behind competitor model support. Needs review or test pass.  
2. **[#1277] Bump Electron to v42** (Created: 2026-04-02)  
   → Electron 40 → 42 includes security patches and API updates. Delay may block other modern features.  
3. **[#1464] IM instance duplicate validation** (Created: 2026-04-04)  
   → Long-outstanding validation gap affecting multi-bot deployments. High impact once merged.  

**Urgency**: All three are overdue for triage or merge—prolonged stalness may indicate dependency blockers or lack of testing resources.

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

# CoPaw Project Digest — 2026-06-03

**Repository:** [agentscope-ai/CoPaw](https://github.com/agentscope-ai/CoPaw)

---

## 1. Today's Overview

CoPaw saw high activity with **48 issues** and **32 PRs** updated in the last 24 hours, indicating a vibrant and fast-moving project. The community is heavily engaged — issue volume alone suggests strong adoption, especially on Windows. The day's work centered on **security hardening** (7 security advisories filed and mostly closed), **channel reliability fixes** (WeChat, Yuanbao), **agent backend modernization** (AgentScope 2.0 migration PR opened), and **UI/UX improvements** (sidebar simplification, multi-file drag upload). No new releases were published today; the latest closed PR bumped the version to `v1.1.11b1`, suggesting a patch/beta release is imminent. The project overall is in a **high-velocity stabilization phase**, with the community aggressively surfacing bugs while maintainers ship fixes at a rapid pace.

---

## 2. Releases

**No new releases today.** The most recent version activity shows a closed PR [#4907](https://github.com/agentscope-ai/CoPaw/pull/4907) bumping to **v1.1.11b1**, which is expected to ship a batch of the bugfixes and security patches closed today (Yuanbao proto files, WeChat message delivery, browser process tree cleanup, non-standard provider kwargs).

---

## 3. Project Progress

### Merged/Closed PRs (9 items highlighted)

| # | PR | What happened |
|---|-----|---------------|
| [#4899](https://github.com/agentscope-ai/CoPaw/pull/4900) | **fix(yuanbao): include proto JSON files in package-data** | Fixes Yuanbao channel auth failure in v1.1.10 — missing `proto/conn.json` and `proto/biz.json` files from the packaging manifest |
| [#4883](https://github.com/agentscope-ai/CoPaw/pull/4883) | **fix(channel): cron messages fail to deliver to WeChat/WeCom** | Resolves `share_session=false` causing message delivery failure for scheduled tasks on WeChat channels (related to Issue [#4878](https://github.com/agentscope-ai/CoPaw/issues/4878)) |
| [#4853](https://github.com/agentscope-ai/CoPaw/pull/4853) | **fix(browser): kill entire process tree on Windows** | Ensures residual browser processes and temp lock files are fully cleaned up after sessions on Windows |
| [#4689](https://github.com/agentscope-ai/CoPaw/pull/4689) | **feat(providers): route non-standard generate_kwargs into extra_body** | Provider-level improvement — allows parameters like DashScope's `enable_search` to be properly forwarded via `extra_body` instead of silently dropped |
| [#4902](https://github.com/agentscope-ai/CoPaw/pull/4902) | **feat(manage_prd): built-in PRD CRUD tool + frontend renderer** | Adds native PRD management capabilities replacing the plugin-based approach, with i18n support |
| [#1317](https://github.com/agentscope-ai/CoPaw/pull/1317) | **feat(console): cloudflared download status notifications** | Real-time download progress for cloudflared via WebSocket push (very old PR, finally merged) |

### Key Open PRs shaping the next release

- **[#4846](https://github.com/agentscope-ai/CoPaw/pull/4846)** — **Breaking Change: Migrate AgentScope 1.x → 2.0.0**. This is the largest architectural PR in the pipeline, flagged as a breaking change. Currently open, not yet merged.
- **[#4906](https://github.com/agentscope-ai/CoPaw/pull/4906)** — Windows multi-drive fix for coding mode browser
- **[#4810](https://github.com/agentscope-ai/CoPaw/pull/4810)** — Improved chat slash skill suggestions UI
- **[#4693](https://github.com/agentscope-ai/CoPaw/pull/4693)** — Plugin-registered custom channels with schema-driven config UI (replaces legacy `custom_channels/` directory approach)

---

## 4. Community Hot Topics

### By comment activity

1. **[#4666](https://github.com/agentscope-ai/CoPaw/issues/4666)** (6 comments) — **[Bug] Models configuration page lost after creating new session**: Users report that creating a new session wipes Models config entirely. This affects **all users on every session reset** and forces restarts. *Underlying need: configuration persistence across sessions.*

2. **[#4878](https://github.com/agentscope-ai/CoPaw/issues/4878)** (5 comments) — **WeChat scheduled tasks fail to deliver**: Cron-scheduled home agent tasks trigger and LLM executes, but results never reach WeChat. Root cause identified in `channel.py` `to_handle_from_target`. *Underlying need: reliable multi-channel cron delivery.*

3. **[#4727](https://github.com/agentscope-ai/CoPaw/issues/4727)** (5 comments, 👍2) — **Migrate backend from AgentScope 1.x to 2.0**: Official tracking issue with confirmed upgrade plan. A community PR already exists. *Underlying need: modernized agent runtime with better architecture.*

4. **[#4908](https://github.com/agentscope-ai/CoPaw/issues/4908)** (4 comments) — **Unauthenticated PUT /api/settings/language**: Security issue allowing global settings modification without auth. *Underlying need: proper auth middleware coverage.*

5. **[#3985](https://github.com/agentscope-ai/CoPaw/issues/3985)** (4 comments) — **DeepSeek reasoning_content not passed back in multi-turn**: HTTP 500 after 5+ turns with tool calls. *Underlying need: correct reasoning_content round-tripping for thinking models.*

### Trending themes
- **Windows-first user base**: Multiple issues (#4893, #4894, #4906, #4853, #4919) specifically target Windows UX — file upload limits, multi-file drag-and-drop, browser process cleanup, drive navigation. The project's Windows desktop user base is clearly large and vocal.
- **Security audit wave**: Researcher **YLChen-007** filed **7 security advisories** in a single day (#4908–#4914), covering auth bypass, path traversal, ToolGuard bypass, secret leakage, and input validation. All were closed the same day, suggesting responsive maintainers.

---

## 5. Bugs & Stability

### Ranked by severity

| Severity | Issue | Description | Fix Status |
|----------|-------|-------------|------------|
| 🔴 **Critical** | [#4913](https://github.com/agentscope-ai/CoPaw/issues/4913) | **Path Traversal in `system_prompt_files`** — Remote API callers can exfiltrate local files into outbound LLM requests | ✅ Closed (same day) |
| 🔴 **Critical** | [#4909](https://github.com/agentscope-ai/CoPaw/issues/4909) | **ToolGuard bypass** — Attacker-controlled `request_context` can disable dangerous command approval | ✅ Closed (same day) |
| 🔴 **Critical** | [#4908](https://github.com/agentscope-ai/CoPaw/issues/4908) | **Unauthenticated settings modification** via `PUT /api/settings/language` | ✅ Closed (same day) |
| 🟠 **High** | [#4666](https://github.com/agentscope-ai/CoPaw/issues/4666) | **Models config page lost after new session** — affects all users, requires restart | ❌ Open, no fix PR yet |
| 🟠 **High** | [#4878](https://github.com/agentscope-ai/CoPaw/issues/4878) | **WeChat cron delivery failure** — scheduled tasks silently fail to push results | ✅ Closed via PR [#4883](https://github.com/agentscope-ai/CoPaw/pull/4883) |
| 🟠 **High** | [#4898](https://github.com/agentscope-ai/CoPaw/issues/4898) | **Yuanbao channel auth fails** — missing proto files cause infinite reconnect loop in v1.1.10 | ✅ Closed via PR [#4899](https://github.com/agentscope-ai/CoPaw/pull/4899) |
| 🟡 **Medium** | [#4903](https://github.com/agentscope-ai/CoPaw/issues/4903) | **Unexpected loading when switching chats** — UI loading states stuck or flickering | ❌ Open |
| 🟡 **Medium** | [#4837](https://github.com/agentscope-ai/CoPaw/issues/4837) | **v1.1.9 frequent fallback replies** — "无法处理您的问题" appears frequently, regression from v1.1.9 | ❌ Open |
| 🟡 **Medium** | [#4895](https://github.com/agentscope-ai/CoPaw/issues/4895) | **Infinite image compression loop** — uploaded images get compressed repeatedly causing hallucination | ❌ Open |
| 🟡 **Medium** | [#4877](https://github.com/agentscope-ai/CoPaw/issues/4877) | **Custom channel stops listening on every config save** — race condition in `replace_channel` | ❌ Open |
| 🟢 **Low** | [#4919](https://github.com/agentscope-ai/CoPaw/issues/4919) | **browser_use startup failure on Windows** — managed CDP timeout + Chrome/Edge crash | ❌ Open |

**Stability assessment**: The project is handling critical security issues with impressive speed (all 7 advisories closed within hours). However, **regression bugs from v1.1.9** (fallback replies, config loss) remain open and are likely affecting a broad user base. The Models config persistence bug (#4666) is the most impactful open issue.

---

## 6. Feature Requests & Roadmap Signals

### Likely candidates for next release (v1.1.11 or v1.1.12)

| Feature | Issue | Signal strength |
|---------|-------|-----------------|
| **AgentScope 2.0 migration** | [#4727](https://github.com/agentscope-ai/CoPaw/issues/4727) + PR [#4846](https://github.com/agentscope-ai/CoPaw/pull/4846) | 🔴 **Confirmed** — official plan, PR already open |
| **Tool definition on-demand loading** (55-65% token reduction) | [#4836](https://github.com/agentscope-ai/CoPaw/issues/4836) | 🟠 **Strong** — detailed proposal with token analysis, addresses real cost concern |
| **Multi-model subagent dispatch** (spawn_subagent per-task model) | [#4901](https://github.com/agentscope-ai/CoPaw/issues/4901) | 🟠 **Strong** — inspired by Claude Code's Haiku/Opus pattern, clear cost-saving use case |
| **Lossless context compression** (DAG-based summarization) | [#4551](https://github.com/agentscope-ai/CoPaw/issues/4551) | 🟡 **Moderate** — well-articulated but complex, may be longer-term |
| **Sidebar UX simplification** | [#4904](https://github.com/agentscope-ai/CoPaw/issues/4904) | 🟡 **Moderate** — user research comparing to Codex, Claude Desktop, OpenClaw |
| **Windows multi-file drag-and-drop upload** | [#4894](https://github.com/agentscope-ai/CoPaw/issues/4894) | 🟡 **Moderate** — Windows-specific, aligns with Windows-heavy user base |
| **Windows file upload size limit removal** | [#4893](https://github.com/agentscope-ai/CoPaw/issues/4893) | 🟢 **Low** — reasonable request but edge case |
| **Agent-scoped web login accounts** | [#4859](https://github.com/agentscope-ai/CoPaw/issues/4859) | 🟢 **Low** — multi-tenant use case, closed but may resurface |

**Prediction**: The next release will likely focus on **stability + security patches** (v1.1.11b1 already in progress), followed by a **v1.2.0** that includes the AgentScope 2.0 migration and tool on-demand loading as headline features.

---

## 7. User Feedback Summary

### Pain points

- **Configuration fragility**: Users are frustrated that creating a new session destroys Models configuration (#4666). This is a fundamental workflow break — users expect settings to persist.
- **Windows UX gaps**: The Windows user base is significant and vocal. Pain points include: file upload size limits (#4893), no multi-file drag-and-drop (#4894), browser process leaks (#4853, #4919), and single-drive file browsing (#4906). The project appears to be primarily developed/tested on non-Windows platforms.
- **Channel reliability**: WeChat and Yuanbao channel issues (#4878, #4898) show that multi-channel delivery — especially for scheduled/cron tasks — is a recurring pain point. Users building production automations on these channels are hitting walls.
- **v1.1.9 regression**: The fallback reply regression (#4837) is eroding trust. Users upgrading to the latest version and getting degraded responses is a serious satisfaction issue.
- **Image handling**: The infinite compression loop (#4895) suggests the image preprocessing pipeline needs a review.

### Satisfaction signals

- **Security responsiveness**: The fact that 7 security advisories were filed and closed within hours reflects well on the maintainers. Security researchers are actively auditing the project, which is a sign of maturity.
- **Active plugin ecosystem**: Multiple plugin PRs (#4794, #4804, #4622, #4693) show a healthy extension community.
- **Feature richness**: Requests like multi-model subagent dispatch (#4901) and lossless context compression (#4551) show users are pushing CoPaw into advanced use cases (long-running agents, cost optimization).

---

## 8. Backlog Watch

### Long-unanswered items needing maintainer attention

| Issue | Age | Why it matters |
|-------|-----|----------------|
| **[#4666](https://github.com/agentscope-ai/CoPaw/issues/4666)** — Models config lost after new session | 9 days | **High impact, no fix PR.** Affects every user who creates a new session. 6 comments with no maintainer response. |
| **[#4837](https://github.com/agentscope-ai/CoPaw/issues/4837)** — v1.1.9 fallback reply regression | 3 days | **Regression from latest release.** Users upgrading are getting degraded experience. No maintainer acknowledgment. |
| **[#4551](https://github.com/agentscope-ai/CoPaw/issues/4551)** — Lossless context compression | 14 days | Well-researched feature request with detailed token analysis. No maintainer response. |
| **[#4836](https://github.com/agentscope-ai/CoPaw/issues/4836)** — Tool definition on-demand loading | 3 days | Detailed proposal with 55-65% token reduction data. No maintainer response yet. |
| **[#4154](https://github.com/agentscope-ai/CoPaw/issues/4154)** — Font size adjustment + clickable file paths | 25 days | Desktop UX improvement, low effort, no response. |
| **[#4875](https://github.com/agentscope-ai/CoPaw/issues/4875)** — uv virtual environment reset on update | 2 days | Installation/upgrade path broken for uv users. No response. |

### PRs needing review

| PR | Age | Notes |
|----|-----|-------|
| **[#4846](https://github.com/agentscope-ai/CoPaw/pull/4846)** — AgentScope 2.0 migration | 2 days | **Breaking change**, large scope. Needs thorough review. |
| **[#4693](https://github.com/agentscope-ai/CoPaw/pull/4693)** — Plugin-registered custom channels | 7 days | Replaces legacy custom_channels mechanism. Architectural change. |
| **[#4622](https://github.com/agentscope-ai/CoPaw/pull/4622)** — DataPaw plugin with 12 BI skills | 12 days | Substantial plugin contribution, under review. |
| **[#4900](https://github.com/agentscope-ai/CoPaw/pull/4900)** — Decouple plugin loader from agent startup | 1 day | Fixes Tauri Desktop plugin initialization (503 errors). High priority for desktop users. |

---

*Generated by OWL — ZOO Company*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-06-03

---

## 1. Today's Overview

ZeroClaw is in the final stretch of the **v0.8.0 release cycle**, operating at very high cadence with 49 updated issues and 50 updated PRs in the last 24 hours alone. The headline is the newly shipped **v0.8.0-beta-2**, the largest release since v0.7.5, which introduces *zerocode* — a full-featured Ratatui-based terminal UI — alongside the multi-agent runtime. Community activity is intense: 34 open PRs remain in flight and 34 open issues are active, indicating a project absorbing a large wave of incoming contributions while simultaneously stabilizing beta features. The ratio of open to closed items roughly balances today, suggesting maintainers are keeping pace. The dominant themes today are **security hardening**, **zerocode TUI refinement**, **provider compatibility fixes**, and **documentation/CI infrastructure** — all consistent with a beta-2 maturity level working toward stable tier.

---

## 2. Releases

### [v0.8.0-beta-2](https://github.com/zeroclaw-labs/zeroclaw/releases/tag/v0.8.0-beta-2)

This is the second beta of the v0.8.0 line and the **largest release since v0.7.5**. Key deliverables:

| Theme | Details |
|---|---|
| **zerocode (TUI)** | Brand-new, full-featured terminal UI for running and operating agents without leaving the terminal. Ratatui-based. Renders streaming agent responses, tool calls, tool results, and approval prompts. (See tracker [#6824](https://github.com/zeroclaw-labs/zeroclaw/issues/6824) for context.) |
| **Multi-agent runtime** | Ships alongside zerocode as the runtime backbone for multi-agent orchestration. |
| **Code reorg** | TUI library crate moved from `crates/zeroclaw-tui` → `apps/zerocode`; end-user apps now live under `apps/`, libraries under `crates/`. (PR [#7070](https://github.com/zeroclaw-labs/zeroclaw/issues/6821)) |

**What to watch:** With beta-2 just out, expect rapid-fire bug reports on zerocode UX and the multi-agent runtime. Tracker **[#7112](https://github.com/zeroclaw-labs/zeroclaw/issues/7112)** (v0.8.0 release queue and Stable-tier blockers) is the canonical place for release-readiness tracking.

---

## 3. Project Progress

### Closed/Merged PRs (selected highlights)

| # | What | Significance |
|---|---|---|
| **[#7070](https://github.com/zeroclaw-labs/zeroclaw/pull/7070)** | Added `channel-twitter` to the default feature bundle in Cargo.toml | Fixes **[#7069](https://github.com/zeroclaw-labs/zeroclaw/issues/7069)** — Twitter/X was documented but absent from pre-built binaries. A lean-build correctness fix. |
| **[#7063](https://github.com/zeroclaw-labs/zeroclaw/issues/7063)** | *(Issue closed)* Channel-served agents bypassing per-agent tool allowlist | Critical security fix — `start_channels` was skipping `apply_policy_tool_filter`. |
| **[#7001](https://github.com/zeroclaw-labs/zeroclaw/issues/7001)** | *(Issue closed)* TTS voice replies resolved wrong agent's `tts_provider` in multi-agent configs | `TtsManager::from_config` bug fix for multi-agent setups. |
| **[#6975](https://github.com/zeroclaw-labs/zeroclaw/issues/6975)** | *(Issue closed)* `zeroclaw onboard` marked sections complete without writing config | CLI onboarding wizard correctness fix. |
| **[#7077](https://github.com/zeroclaw-labs/zeroclaw/pull/7077)** (open, merged-status implied) | Prevent browser auto-translation from crashing React chat DOM | UX stability fix for the web dashboard. |

### Features advancing (open PRs/in-progress)

- **ACP console web UI** — PR **[#7036](https://github.com/zeroclaw-labs/zeroclaw/pull/7036)** adds a browser-based ACP console at `/acp-console` with a JSON-RPC WebSocket client. Enables authenticated dashboard users to exercise ACP endpoints from the web UI.
- **Versioned documentation** — PR **[#7023](https://github.com/zeroclaw-labs/zeroclaw/pull/7023)** implements versioned documentation deployment with a version selector, so users can browse docs matching their installed version.
- **zerocode navigation fix** — PR **[#7118](https://github.com/zeroclaw-labs/zeroclaw/pull/7118)** (just opened today) unifies zerocode's navigation conventions and fixes three dead/inconsistent keybindings.
- **WASI/WIT plugin interfaces** — PR **[#7060](https://github.com/zeroclaw-labs/zeroclaw/pull/7060)** defines WIT interface files for Tool, Channel, and Memory plugins per FND-001 §5.2 — a foundational step toward the plugin architecture.
- **Config credential classification** — PR **[#6982](https://github.com/zeroclaw-labs/zeroclaw/pull/6982)** adds a test-gated registry of credential-shaped config surfaces, marking fields as secret for config encryption. Improves security hygiene.

---

## 4. Community Hot Topics

### Highest-comment issues (indicating active user discussion)

| | Issue | Comments | Underlying Need |
|---|---|---|---|
| 🥇 | **[#6059](https://github.com/zeroclaw-labs/zeroclaw/issues/6059)** — Incompatible with DeepSeek-V4 API format (CLOSED) | 15 👍, 4 votes | Users on DeepSeek's latest models (V4-Pro, V4-Flash) hit thinking-mode-related parsing failures. **Root cause:** ZeroClaw's provider adapter doesn't yet handle DeepSeek's updated reasoning/thinking content schema. Closed, suggesting a fix landed — but Kimi compatibility remains open. |
| 🥈 | **[#5600](https://github.com/zeroclaw-labs/zeroclaw/issues/5600)** — Use kimi-code provider, streaming chat call tools errors | 9 👍, 1 vote | `reasoning_content is missing in assistant tool_calls` when using Kimi's provider in streaming mode. **Underlying need:** Streaming tool-call provider adapters across all Chinese-model providers need normalization around thinking/reasoning content schemas. |
| 🥉 | **[#6391](https://github.com/zeroclaw-labs/zeroclaw/issues/6391)** — Real heartbeat tracking for daemon nodes | 4 votes | Daemon nodes show as `Online` indefinitely as long as the registry entry exists, even if the WebSocket is stuck. **Underlying need:** Production multi-machine fleet operators need real liveness detection, not just registry membership. |
| 4 | **[#6824](https://github.com/zeroclaw-labs/zeroclaw/issues/6824)** — TUI Agent Chat tracker (CLOSED) | 3 votes | Ratatui-based chat screen. Closed — shipped as part of zerocode in v0.8.0-beta-2. |
| 5 | **[#5604](https://github.com/zeroclaw-labs/zeroclaw/issues/5604)** — Mattermost bot private messages | 3 👍, 1 vote | Mattermost bots can only be reached in channels, not via DM. **Underlying need:** Users want 1:1 bot interactions for privacy-sensitive agent use cases. |

### Hot PRs (most active, no comments yet but critical)

| PR | Focus |
|---|---|
| **[#7023](https://github.com/zeroclaw-labs/zeroclaw/pull/7023)** | Versioned docs deployment — infrastructure, not flashy, but essential for a project with rapid releases. |
| **[#7036](https://github.com/zeroclaw-labs/zeroclaw/pull/7036)** | ACP console web UI — directly responds to user demand for browser-based agent management. |
| **[#7060](https://github.com/zeroclaw-labs/zeroclaw/pull/7060)** | WASI/WIT plugin interface definitions — foundational for the plugin ecosystem. |

### Trend analysis
The community's energy is concentrated in three zones:
1. **Provider compatibility** — Every major non-OpenAI provider (DeepSeek, Kimi, Ollama) has active issues. ZeroClaw's provider abstraction layer needs systematic hardening.
2. **Security** — Tool allowlist bypass (**[#7063](https://github.com/zeroclaw-labs/zeroclaw/issues/7063)**), reasoning-content leaks (**[#6040](https://github.com/zeroclaw-labs/zeroclaw/issues/6040)**); pairing code strength (**[#6613](https://github.com/zeroclaw-labs/zeroclaw/issues/6613)**). Users are deploying ZeroClaw in security-sensitive contexts and finding gaps.
3. **zerocode TUI polish** — Navigation, keybinding, and config UX issues appearing as users stress-test the new TUI.

---

## 5. Bugs & Stability

### By severity (S1 = workflow blocked, S2 = degraded, S3 = minor)

| Severity | Issue | Status | Fix PR? |
|---|---|---|---|
| **S1** | **[#6975](https://github.com/zeroclaw-labs/zeroclaw/issues/6975)** — `onboard` marks sections complete without writing config | ✅ CLOSED | Landed |
| **S1** | **[#7068](https://github.com/zeroclaw-labs/zeroclaw/issues/7068)** — Telegram channel receives Codex scratchpad/tool transcript as final response | 🟡 OPEN | None yet |
| **S1** | **[#5600](https://github.com/zeroclaw-labs/zeroclaw/issues/5600)** — Kimi-code streaming chat tool-call errors | 🟠 OPEN (accepted, P1) | None yet |
| **S2** | **[#6059](https://github.com/zeroclaw-labs/zeroclaw/issues/6059)** — DeepSeek-V4 incompatibility | ✅ CLOSED | Landed |
| **S2** | **[#5795](https://github.com/zeroclaw-labs/zeroclaw/issues/5795)** — XML `tool_result` tags leak into channel responses | 🟠 OPEN | None yet |
| **S2** | **[#7001](https://github.com/zeroclaw-labs/zeroclaw/issues/7001)** — TTS resolves wrong agent's provider (multi-agent) | ✅ CLOSED | Landed |
| **S2** | **[#6040](https://github.com/zeroclaw-labs/zeroclaw/issues/6040)** — `<think>...</think>` reasoning blocks leak into channel replies | ✅ CLOSED | Landed |
| **S2** | **[#7038](https://github.com/zeroclaw-labs/zeroclaw/issues/7038)** — `zeroclaw check` fails 11/11 WebSocket 401 despite valid auth | 🟠 OPEN (needs repro) | None yet |
| **S2** | **[#7005](https://github.com/zeroclaw-labs/zeroclaw/issues/7005)** — Quickstart CLI still has bare user-facing strings | 🟠 OPEN | None yet |
| **S2** | **[#7063](https://github.com/zeroclaw-labs/zeroclaw/issues/7063)** — Channel agents bypass per-agent tool allowlist | ✅ CLOSED | Landed |

### Notable: security-adjacent bugs landed/leaking
- **[#7063](https://github.com/zeroclaw-labs/zeroclaw/issues/7063)** (CLOSED): Channel-served agents completely bypassed `SecurityPolicy.allowed_tools`. This was a **P1 security bypass** that is now fixed — but any users running pre-fix builds with channel + tool allowlist configs were likely exposed.
- **[#6040](https://github.com/zeroclaw-labs/zeroclaw/issues/6040)** (CLOSED): Reasoning/thinking blocks from models were leaking raw via webhook and other non-draft-update channels. Now sanitized.
- **[#5795](https://github.com/zeroclaw-labs/zeroclaw/issues/5795)** (OPEN): XML tool results still leak for certain model/provider combos (e.g. Gemini). Related class — still unfixed.

---

## 6. Feature Requests & Roadmap Signals

### Likely in v0.8.0 (imminent, actively in-progress or accepted P1)

| Feature | Signal | Confidence |
|---|---|---|
| Zerocode navigation/config UX polish | PR **[#7118](https://github.com/zeroclaw-labs/zeroclaw/pull/7118)** just opened; Tracker **[#7117](https://github.com/zeroclaw-labs/zeroclaw/issues/7117)** created today | **Very high** — part of beta stabilization |
| Stronger pairing codes | **[#6613](https://github.com/zeroclaw-labs/zeroclaw/issues/6613)** — accepted, P1, risk: high | **High** — security hygiene, fits v0.8.0 security theme |
| Air-gapped execution / enclave mode | **[#6293](https://github.com/zeroclaw-labs/zeroclaw/issues/6293)** — accepted, RFC, risk: high | **Medium** — ambitious architecture change, likely slips to v0.9+ |
| PowerShell configurable as Windows shell host | **[#7089](https://github.com/zeroclaw-labs/zeroclaw/issues/7089)** — just opened, needs maintainer review | **Medium** — Windows UX gap is real but contentious |
| `zeroclaw node add <url>` CLI | **[#6390](https://github.com/zeroclaw-labs/zeroclaw/issues/6390)** — accepted, blocked, risk: high | **Medium** — multi-machine fleet CLI is the natural companion to the nodes dashboard |
| Mattermost private messages | **[#5604](https://github.com/zeroclaw-labs/zeroclaw/issues/5604)** — unaccepted, P2 | **Low for v0.8.0** — no maintainer acceptance yet |
| Real heartbeat/health for daemon nodes | **[#6391](https://github.com/zeroclaw-labs/zeroclaw/issues/6391)** — accepted, blocked, P2 | **Medium** — blocked, but important for production deployments |

### Structural signal: plugin architecture
PR **[#7060](https://github.com/zeroclaw-labs/zeroclaw/pull/7060)** (WASI/WIT interface definitions) and the ACP protocol extensions (**[#6820](https://github.com/zeroclaw-labs/zeroclaw/issues/6820)**, closed) signal that ZeroClaw is laying the groundwork for a **plugin ecosystem** — Tool, Channel, and Memory plugins via the Component Model. This is a v0.9+ feature but the foundation work is happening now.

---

## 7. User Feedback Summary

### Pain points

1. **Provider fragmentation is causing real workflow breaks.** Users on DeepSeek-V4 and Kimi-code are hitting S1/S2 errors that block their workflows entirely. The pattern is clear: every provider has a slightly different handling of `thinking`/`reasoning_content` in streaming + tool-call mode, and ZeroClaw's provider abstraction doesn't normalize this yet. This is the single biggest source of user pain.

2. **Security defaults are too weak.** Multiple users flagged that 6-digit numeric pairing codes (**[#6613](https://github.com/zeroclaw-labs/zeroclaw/issues/6613)**) are insufficient, and the tool-allowlist bypass for channel agents (**[#7063](https://github.com/zeroclaw-labs/zeroclaw/issues/7063)**) was a real vulnerability. Users deploying ZeroClaw in production or semi-public contexts are finding that the security model needs hardening.

3. **Multi-agent configuration is confusing.** TTS resolving the wrong agent's provider (**[#7001](https://github.com/zeroclaw-labs/zeroclaw/issues/7001)**), config surfaces not being written by the onboarding wizard (**[#6975](https://github.com/zeroclaw-labs/zeroclaw/issues/6975)**), and bare user-facing strings in quickstart (**[#7005](https://github.com/zeroclaw-labs/zeroclaw/issues/7005)**) all point to multi-agent setup being a rough edge.

4. **Documentation gaps for lean builds.** Users are confused that Twitter/X is documented but not included in default binaries (**[#7069](https://github.com/zeroclaw-labs/zeroclaw/issues/7069)**). PR **[#7115](https://github.com/zeroclaw-labs/zeroclaw/pull/7115)** is adding feature-availability callouts to address this.

### Satisfaction signals
- The zerocode TUI is generating excitement — the tracker (**[#6824](https://github.com/zeroclaw-labs/zeroclaw/issues/6824)**) was closed with the feature shipped, and users are actively filing polish PRs (**[#7118](https://github.com/zeroclaw-labs/zeroclaw/pull/7118)**).
- The ACP console web UI (**[#7036](https://github.com/zeroclaw-labs/zeroclaw/pull/7036)**) responds to a clear demand for browser-based agent management.
- Nix flake support (**[#5987](https://github.com/zeroclaw-labs/zeroclaw/pull/5987)**) and Podman/systemd quadlet docs (**[#7114](https://github.com/zeroclaw-labs/zeroclaw/pull/7114)**) show the community is investing in deployment infrastructure.

---

## 8. Backlog Watch

These are important issues and PRs that have been open for extended periods without resolution and may need maintainer attention:

| Item | Age | Why it matters |
|---|---|---|
| **[#5600](https://github.com/zeroclaw-labs/zeroclaw/issues/5600)** — Kimi-code streaming tool-call errors | ~54 days, P1, accepted | S1 workflow-blocked for Kimi users. No fix PR yet despite acceptance. |
| **[#5795](https://github.com/zeroclaw-labs/zeroclaw/issues/5795)** — XML tool_result tags leak into channel responses | ~48 days, in-progress | Related to the now-closed reasoning-block leak (**[#6040](https://github.com/zeroclaw-labs/zeroclaw/issues/6040)**) but for a different model class (Gemini). Should be same fix pattern. |
| **[#6074](https://github.com/zeroclaw-labs/zeroclaw/issues/6074)** — Audit 153 commits lost in bulk revert c3ff635 | ~40 days, in-progress, help wanted | Recovery of lost bug fixes and features from a bulk revert. Important for code quality but no recent activity. |
| **[#6293](https://github.com/zeroclaw-labs/zeroclaw/issues/6293)** — Air-gapped execution mode (enclave support) | ~31 days, accepted, blocked, RFC | Ambitious architecture change. Blocked status needs unblocking decision from maintainers. |
| **[#6390](https://github.com/zeroclaw-labs/zeroclaw/issues/6390)** — `zeroclaw node add <url>` CLI | ~29 days, accepted, blocked | Multi-machine fleet CLI. Blocked — needs dependency resolution. |
| **[#6613](https://github.com/zeroclaw-labs/zeroclaw/issues/6613)** — Stronger pairing codes | ~21 days, P1, accepted | Security improvement, straightforward implementation. Should be low-hanging fruit for v0.8.0. |
| **[#5987](https://github.com/zeroclaw-labs/zeroclaw/pull/5987)** — Nix flake | ~42 days, open | Improves reproducibility for Nix users. Needs maintainer review. |
| **[#6842](https://github.com/zeroclaw-labs/zeroclaw/pull/6842)** — NEAR AI Cloud provider | ~13 days, open | New provider integration. Needs review. |

---

*Data snapshot: 2026-06-03. All links reference [zeroclaw-labs/zeroclaw](https://github.com/zeroclaw-labs/zeroclaw). Activity metrics reflect the 24-hour window ending at time of analysis.*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/DenisZheng/agents-radar).*