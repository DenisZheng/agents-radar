# OpenClaw Ecosystem Digest 2026-06-01

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-06-01 02:21 UTC

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

# OpenClaw Project Digest — 2026-06-01

---

## 1. Today's Overview

OpenClaw is in a period of exceptionally high activity, with **500 issues** and **500 PRs** updated in the last 24 hours. The project is releasing at a rapid cadence — **5 new beta versions** landed in the past 48 hours (v2026.5.30-beta.1 through v2026.5.31-beta.4) — indicating a concentrated stabilization push. Of the tracked issues, 284 remain open and active while 216 were closed, and of the PRs, 198 are open with 302 merged or closed. The overall signal is a **fast-moving project in heavy iteration**, with the maintainer team (notably `vincentkoc`, `MonkeyLeeT`, and `steipete`) aggressively shipping reliability fixes while a deep backlog of session-state, message-loss, and auth-provider bugs continues to accumulate. Project health is **active but strained**: release velocity is high, yet several P1 issues around Codex app-server reliability and session context confusion have persisted for weeks without resolution.

---

## 2. Releases

Five beta releases were published in rapid succession over the last two days:

| Version | Date | Type |
|---|---|---|
| **v2026.5.31-beta.4** | 2026-06-01 | Beta |
| **v2026.5.31-beta.3** | 2026-05-31 | Beta |
| **v2026.5.31-beta.2** | 2026-05-31 | Beta |
| **v2026.5.31-beta.1** | 2026-05-31 | Beta |
| **v2026.5.30-beta.1** | 2026-05-30 | Beta |

### Highlights (consistent across all five releases)

- **Agent and CLI runtime recovery**: Agents and CLI-backed runtimes now recover more cleanly from interrupted tool calls, stale session bindings, compaction handoffs, and media delivery retries. (PRs: [#88129](https://github.com/openclaw/openclaw/pull/88129), [#88136](https://github.com/openclaw/openclaw/pull/88136), [#88141](https://github.com/openclaw/openclaw/pull/88141), [#88162](https://github.com/openclaw/openclaw/pull/88162), [#88182](https://github.com/openclaw/openclaw/pull/88182))
- **Channel delivery stability**: Telegram, WhatsApp, iMessage, and Slack mobile delivery are steadier, with fewer dropped or duplicated messages.

### Migration / Upgrade Notes

- No breaking changes are called out in these beta series. However, given the density of runtime recovery changes, users on 2026.5.22–2026.5.28 who experienced Codex app-server hangs or session stalls should prioritize upgrading to at least beta.3 or beta.4.
- Issue [#88788](https://github.com/openclaw/openclaw/issues/88788) reports that the **GHCR Docker image for 2026.5.28** has a stale Discord progress commentary schema — Docker users may want to wait for a patched image or build from source.

---

## 3. Project Progress

### Recently Merged / Closed PRs (selected, from latest activity)

| PR | Summary | Significance |
|---|---|---|
| [#88804](https://github.com/openclaw/openclaw/pull/88804) | Preserve stop-finished OpenAI tool calls | Fixes silent tool call dropping when providers stream `tool_calls` but finish with `finish_reason: stop` |
| [#88801](https://github.com/openclaw/openclaw/pull/88801) | Expose inbound reply metadata before dispatch | Carries `replyToId`, `replyToBody`, `replyToSender` into hook context — enables richer plugin reply-chain behavior |
| [#88727](https://github.com/openclaw/openclaw/pull/88727) | Preserve long Feishu streaming replies | Prevents oversized Feishu replies from being silently dropped on the streaming-card path |
| [#88704](https://github.com/openclaw/openclaw/pull/88704) | Rehydrate daily list promotions in memory | Fixes Markdown list-marker stripping that broke memory snippet promotion matching |

### Notable Open PRs Awaiting Merge

| PR | Summary | Status |
|---|---|---|
| [#88859](https://github.com/openclaw/openclaw/pull/88859) | Fix Mattermost attachment media delivery | Ready for maintainer review — routes `filePath`/attachments through proper upload path |
| [#88820](https://github.com/openclaw/openclaw/pull/88820) | Clear embedded-run activity after stuck-session recovery | Ready for review — diagnostics fix for false-positive `session.stalled` alerts |
| [#88769](https://github.com/openclaw/openclaw/pull/88769) | Keep inline `<think>` reasoning out of visible text (OpenAI-compatible) | Waiting on proof — prevents leaked reasoning tokens in user-visible output |
| [#88748](https://github.com/openclaw/openclaw/pull/88748) | Bridge Gemini OAuth profiles into CLI runtime | Needs proof — fixes auth forwarding for `google-gemini-cli` |
| [#88774](https://github.com/openclaw/openclaw/pull/88774) | Quarantine unreadable Codex dynamic tools | Ready for review — prevents one bad plugin from poisoning the entire tool registration |
| [#86029](https://github.com/openclaw/openclaw/pull/86029) | Surface cost telemetry `agentMeta` in `agent.wait` response | Needs proof — adds token usage and cost data to gateway WebSocket responses |
| [#88238](https://github.com/openclaw/openclaw/pull/88238) | Batch memory embeddings across files | Waiting on author — significant perf improvement for large memory reindexing |
| [#78441](https://github.com/openclaw/openclaw/pull/78441) | Forward `toolsAllow` from `sessions_spawn` | Ready for review — subagent tool policy propagation |

### Summary of Progress

The project is in a **stabilization sprint** focused on runtime resilience. The most impactful merged work addresses tool-call reliability across OpenAI-compatible providers and memory rehydration correctness. Several high-value open PRs (Mattermost media, Codex tool quarantine, Gemini OAuth bridging) are ripe for maintainer attention. The batch memory embedding PR (#88238) has been waiting on the author since May 30 and could see movement soon given the active indexing of memory-related issues.

---

## 4. Community Hot Topics

### Top Issues by Engagement

1. **[#32296](https://github.com/openclaw/openclaw/issues/32296)** — Agent replies to previous message instead of current message (13 comments, 👍1)
   - **Core need**: Session context / conversation alignment. Users expect agents to respond to the *latest* message, but stale session bindings cause responses to lag by one turn. This is a **persistent architectural issue** (opened March 2) with no fix PR linked. Underlying cause likely relates to the compaction handoff and stale session fixes in the current beta cycle.

2. **[#87307](https://github.com/openclaw/openclaw/issues/87307)** — Matrix thread replies sent as normal replies on 2026.5.22 (11 comments, 👍1)
   - **Core need**: Matrix-specific threading regression. Bot answers are sent as flat replies instead of threaded responses, and `/status` and `/model` commands go silent. This appeared in the 2026.5.22 stable release and has no linked fix PR. A likely regression in the Matrix ACP binding logic.

3. **[#13583](https://github.com/openclaw/openclaw/issues/13583)** — Pre-response enforcement hooks (hard gates) for mandatory tool-call / policy rules (11 comments, 👍2)
   - **Core need**: Hard policy enforcement in agent runs. Currently "must call tool X before responding" is a soft prompt instruction; users in quant/finance/security workflows want mechanical guarantees. This is a **significant architectural feature request** with security review flagged.

4. **[#78308](https://github.com/openclaw/openclaw/issues/78308)** — Channel-mediated approval for MCP tool calls (consent envelope) (11 comments, 👍1)
   - **Core need**: Extending the `/approve <id>` pipeline (currently shell-exec only) to MCP tools that mutate external state. Security-flagged, needs product decision. Highly relevant as MCP adoption grows.

5. **[#88788](https://github.com/openclaw/openclaw/issues/88788)** — GHCR 2026.5.28 image emits stale Discord progress commentary schema (9 comments, 👍1)
   - **Core need**: Docker image consistency. Config schema rejects a feature that source code claims to support. Blocks Docker-based deployments from using Discord streaming commentary.

### Analysis

The community's most pressing needs cluster into **three themes**:

- **Session reliability and coherence**: Context confusion, stale sessions, and compaction errors are the single largest pain category, spanning issues from March through today.
- **Hard security/policy gates**: Multiple high-engagement requests for mechanical enforcement (pre-response hooks, MCP consent) suggest enterprise/mission-critical users are pushing OpenClaw toward production-readiness requirements.
- **Channel-specific regressions**: Matrix threading, Feishu tool injection, Discord schema, and WhatsApp/Mattermost delivery all show the multi-channel surface area creating regressions faster than they're being caught.

---

## 5. Bugs & Stability

### Active P1 Bugs (by severity)

| Issue | Severity | Description | Fix PR? |
|---|---|---|---|
| [#32296](https://github.com/openclaw/openclaw/issues/32296) | 🔴 P1 | Agent replies to wrong message (session context confusion) | ❌ None linked |
| [#87307](https://github.com/openclaw/openclaw/issues/87307) | 🔴 P1 | Matrix thread replies broken on 2026.5.22 | ❌ None linked |
| [#83959](https://github.com/openclaw/openclaw/issues/83959) | 🔴 P1 | Codex app-server startup retries exhaust before replacement ready | ❌ None linked |
| [#85251](https://github.com/openclaw/openclaw/issues/85251) | 🔴 P1 | Codex app-server emits `turn/started` then goes silent; session wedges | ❌ None linked |
| [#86047](https://github.com/openclaw/openclaw/issues/86047) | 🔴 P1 | Codex/Nextcloud Talk plugin approval stalls cause interrupted turns | ❌ None linked |
| [#45494](https://github.com/openclaw/openclaw/issues/45494) | 🔴 P1 | Cron jobs silently timeout during LLM outages instead of fast-failing | ❌ None linked |
| [#86996](https://github.com/openclaw/openclaw/issues/86996) | 🔴 P1 | Active Memory + Codex causes latency, hook timeouts, gateway stalls | ❌ None linked |
| [#87616](https://github.com/openclaw/openclaw/issues/87616) | 🟡 P2 | LLM request timeout with local LM Studio (fast timeout) | ❌ None linked |
| [#86342](https://github.com/openclaw/openclaw/issues/86342) | 🟡 P2 | `MissingAgentHarnessError` race during plugin cache cycle | ❌ None linked |
| [#88788](https://github.com/openclaw/openclaw/issues/88788) | 🟡 P2 | Docker 2026.5.28 stale Discord schema | ❌ None linked |
| [#51628](https://github.com/openclaw/openclaw/issues/51628) | 🟡 P2 | Telegram delivery queue replays old replies | ❌ None linked |
| [#87326](https://github.com/openclaw/openclaw/issues/87326) | 🟡 P2 | Telegram streaming intermediate text blocks silently lost | ❌ None linked |

### Recently Closed / Fixed Bugs

| Issue | Description |
|---|---|
| [#88443](https://github.com/openclaw/openclaw/issues/88443) | Auth cooldowns config change forcing gateway restart — **closed** |
| [#88020](https://github.com/openclaw/openclaw/issues/88020) | REPLAY_INVALID_RE missing Anthropic thinking block signature error — **closed** |
| [#87801](https://github.com/openclaw/openclaw/issues/87801) | Gemini thinking type misrouted for opus-4-8 — **closed** |
| [#81214](https://github.com/openclaw/openclaw/issues/81214) | Subagent regression on 2026.5.7 — **closed** |
| [#75739](https://github.com/openclaw/openclaw/issues/75739) | Codex harness migration fallback routing — **closed** |
| [#63686](https://github.com/openclaw/openclaw/issues/63686) | Discord ACP thread binding invalid — **closed** |

### Stability Assessment

The **Codex app-server** is the single largest source of P1 instability, with three distinct open startup/silence/wedge issues (#83959, #85251, #86047). Despite the beta releases addressing "interrupted tool calls and stale session bindings," the community's specific Codex issues have not been resolved. The closed subagent regression (#81214) and auth cooldown restart bug (#8443) are positive signs, but the **ratio of open P1 bugs to closed ones remains concerning** — at least 8 significant P1 issues are open with no fix PRs in sight.

---

## 6. Feature Requests & Roadmap Signals

### Active Feature Requests (by engagement)

| Issue | Request | Signal Strength |
|---|---|---|
| [#13583](https://github.com/openclaw/openclaw/issues/13583) | Pre-response enforcement hooks (hard gates) | 🔥 High — 11 comments, security-flagged, multi-workflow demand |
| [#78308](https://github.com/openclaw/openclaw/issues/78308) | MCP tool call consent/approval envelopes | 🔥 High — parallels existing shell-approve pattern |
| [#88830](https://github.com/openclaw/openclaw/pull/88830) | Dreaming shadow trial result scoring | 🟡 Medium — open PR, incremental on #83719 |
| [#78441](https://github.com/openclaw/openclaw/pull/78441) | Subagent `toolsAllow` forwarding | 🟡 Medium — ready for review, security boundary |
| [#86029](https://github.com/openclaw/openclaw/pull/86029) | Cost telemetry in `agent.wait` response | 🟡 Medium — needs proof, operational visibility demand |
| [#87827](https://github.com/openclaw/openclaw/pull/87827) | Feed lifecycle tooling (validate, hash, build) | 🟢 Low — needs proof, niche use case |
| [#79458](https://github.com/openclaw/openclaw/issues/79458) | i18n slash command descriptions | 🟢 Low — stale, needs product decision |

### Roadmap Prediction

Based on the current pattern of PRs and the concentration of community demand:

- **Hard enforcement hooks (#13583)** and **MCP consent (#78308)** are converging themes. Given that the shell-approve pipeline already exists, extending it to MCP tools is a natural next step. Expect a design RFC or proto-PR within 1–2 release cycles.
- **Cost telemetry (#86029)** is an operational visibility feature aligned with enterprise adoption. The PR is already open and needs only behavioral proof — likely to land in the next minor release.
- **Dreaming shadow trials (#88830)** appear to be in active development (report-only scoring layer). This may mature into a full auto-memory-promotion feature in a future release.
- **Subagent tool policy (#78441)** is technically ready and waiting on review. It addresses a clear security boundary gap and should be merged soon.

---

## 7. User Feedback Summary

### Pain Points

| Category | Representative Issues | Sentiment |
|---|---|---|
| **Codex app-server unreliability** | [#83959](https://github.com/openclaw/openclaw/issues/83959), [#85251](https://github.com/openclaw/openclaw/issues/85251), [#86047](https://github.com/openclaw/openclaw/issues/86047), [#86996](https://github.com/openclaw/openclaw/issues/86996) | **Frustrated** — Users report startup races, silent hangs, and 360s stuck-session recovery windows. The pattern suggests fundamental reliability issues with the Codex harness lifecycle. |
| **Session context confusion** | [#32296](https://github.com/openclaw/openclaw/issues/32296) | **Confused / Disoriented** — Agent replying to the wrong message breaks trust in the conversation. This has been open since March with no resolution. |
| **Cron / scheduled job reliability** | [#45494](https://github.com/openclaw/openclaw/issues/45494), [#85888](https://github.com/openclaw/openclaw/issues/85888) | **Impatient** — Silent timeouts during outages waste resources; time-of-day-dependent failures suggest scheduling bugs. |
| **Docker / deployment friction** | [#88788](https://github.com/openclaw/openclaw/issues/88788) | **Blocked** — Stale schema in published images undermines trust in the Docker distribution channel. |
| **Auth / provider routing** | [#75739](https://github.com/openclaw/openclaw/issues/75739), [#67670](https://github.com/openclaw/openclaw/issues/67670), [#87616](https://github.com/openclaw/openclaw/issues/87616) | **Workaround-seeking** — Users report provider-specific auth issues (Codex OAuth, Cloudflare challenges from China, fast timeouts). |

### Satisfaction Signals

- The **rapid beta release cadence** (5 releases in ~48 hours with concrete recovery improvements) suggests the team is responsive to stability complaints.
- Recently closed issues around subagent regressions (#81214), auth cooldowns (#88443), and Gemini thinking (#87801) show the team *is* closing bugs in the current cycle.
- PRs like [#88801](https://github.com/openclaw/openclaw/pull/88801) (reply metadata exposure) show the team is enriching the plugin/hook system based on plugin-author needs.

### Key Use Cases Observed

1. **Enterprise agent orchestration**: Multi-bot Discord setups, policy-enforced tool execution, subagent tool scoping.
2. **Multi-channel personal assistant**: Users running Telegram + WhatsApp + iMessage + Slack simultaneously, expecting consistent delivery.
3. **Scheduled automation**: Cron jobs for daily tasks, especially in non-US timezones (Beijing CST mentioned explicitly).
4. **Docker-deployed production**: Self-hosted gateway images with expectations of schema stability.

---

## 8. Backlog Watch

### Long-Unanswered Critical Issues Needing Maintainer Attention

| Issue | Age | Why It Matters | Labels |
|---|---|---|---|
| [#32296](https://github.com/openclaw/openclaw/issues/32296) | **91 days** (since Mar 2) | Session context confusion — the most commented bug in the dataset; breaks fundamental conversation UX | P1, platinum hermit, no-new-fix-pr, needs-product-decision |
| [#13583](https://github.com/openclaw/openclaw/issues/13583) | **111 days** (since Feb 10) | Hard enforcement hooks — widely demanded security/compliance feature; blocked on product decision | P2, diamond lobster, needs-product-decision, needs-security-review |
| [#45494](https://github.com/openclaw/openclaw/issues/45494) | **80 days** (since Mar 13) | Cron fast-fail on LLM outages — wastes timeout windows on definitive errors | P1, regression, no-new-fix-pr, needs-product-decision |
| [#78308](https://github.com/openclaw/openclaw/issues/78308) | **26 days** (since May 6) | MCP consent envelopes — security-critical, linked PR open, needs product decision | P2, platinum hermit, needs-product-decision, needs-security-review |
| [#51628](https://github.com/openclaw/openclaw/issues/51628) | **72 days** (since Mar 21) | Telegram reply replay / duplicate delivery — message-loss impact | P2, queueable-fix, needs-product-decision |
| [#78055](https://github.com/openclaw/openclaw/issues/78055) | **27 days** (since May 5) | Subagent stale output delivery — cross-contaminates sessions | P1, queueable-fix, needs-product-decision |

### Stale PRs Worth Reviving

| PR | Age | Potential Impact |
|---|---|---|
| [#88238](https://github.com/openclaw/openclaw/pull/88238) (batch memory embeddings) | 2 days, **waiting on author** | Significant perf improvement for large memory reindexing; active area of bug reports |
| [#86029](https://github.com/openclaw/openclaw/pull/86029) (cost telemetry) | 8 days, **needs proof** | Adds token/cost data to gateway responses — high value for enterprise users |
| [#72515](https://github.com/openclaw/openclaw/pull/72515) (MCP mixed transport reject) | 35 days, **needs proof** | Fixes silent stdio-pick over HTTP for MCP servers; closes #72111 |

> **Maintainer Recommendation**: The `no-new-fix-pr` and `needs-product-decision` labels are gating multiple critical issues. A product decision session to triage these blockers — particularly #32296, #13583, and #78308 — would unblock significant contributor effort. The `needs-label` on [#86342](https://github.com/openclaw/openclaw/issues/86342) also suggests triage backlog strain.

---

*Data sourced from github.com/openclaw/openclaw as of 2026-06-01. Issue and PR counts reflect the last 24 hours of activity.*

---

## Cross-Ecosystem Comparison

# Cross-Project Ecosystem Comparison Report — OWL

**Date:** 2026-06-01 | **Projects analyzed:** 14 | **Source:** GitHub community digests

---

## 1. Ecosystem Overview

The open-source AI agent / personal assistant landscape in June 2026 is characterized by **high fragmentation, rapid iteration, and converging architectural patterns**. OpenClaw leads in raw community engagement (500 issues and 500 PRs in 24h), but "OpenClaw-family" derivatives (NanoClaw, NullClaw, IronClaw, ZeroClaw, ZeptoClaw) and independent competitors (NanoBot, Hermes Agent, CoPaw, PicoClaw) are collectively pushing the boundaries of multi-channel delivery, MCP tool integration, and multi-tenant deployment. A clear maturity gradient is visible: a few projects are stabilizing toward production readiness (OpenClaw's rapid beta cadence, NanoBot's security hardening), while others remain in exploratory or low-activity phases (Moltis, ZeptoClaw, TinyClaw). **Shared pain points — session reliability, provider adapter correctness, cron/session lifecycle management, and Docker deployment friction — cut across nearly every project**, suggesting the field is converging on a common reliability bar.

---

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Open / Closed | Releases (48h) | Health Assessment |
|---|---|---|---|---|---|
| **OpenClaw** | 500 | 500 | 284 / 216 (issues), 198 / 300 (PRs) | 5 β in 48h (v2026.5.30–.31) | 🟡 Active but strained; P1 backlog heavy |
| **NanoBot** | 6 | 18 | 2 / 4 (issues), 11 / 7 (PRs) | None | 🟢 Positive trajectory; fast security response |
| **Hermes Agent** | 50 | 50 | 43 / 7 (issues), 37 / 13 (PRs) | None (latest: v0.14.0) | 🟡 Pressured; growing backlog, P1 Docker/provider bugs |
| **PicoClaw** | 7 | 10 | 4 / 3 (issues), 7 / 3 (PRs) | 1 nightly (v0.2.9-nightly.20260601) | 🟢 Healthy; good maintainer triage speed |
| **NanoClaw** | 3 | 8 | 3 / 0 (issues), 6 / 2 (PRs) | None | 🟠 Concern: 0 maintainer comments on new critical reports |
| **NullClaw** | 2 | 0 | 2 / 0 | None | 🔴 Minimal activity; at risk of stalling |
| **IronClaw** | 3 | 25 | 3 / 0 (issues), 18 / 7 (PRs) | None | 🟡 High-velocity architecture rewrite; E2E red |
| **LobsterAI** | 0 | 1 | 0 / 0 (issues), 1 / 0 (PRs) | None | 🔴 Near-dormant; stale PR at risk of closure |
| **TinyClaw** | 0 | 0 | — | None | ⚪ No activity |
| **Moltis** | 0 | 1 | 0 / 0 (issues), 1 / 0 (PRs) | None | 🟢 Low but stable; 1 focused PR |
| **CoPaw** | 23 | 4 | 18 / 5 (issues), 3 / 1 (PRs) | None (latest: v1.1.9) | 🟠 Post-regression triage; security vuln unaddressed |
| **ZeptoClaw** | 1 | 0 | 0 / 1 | None (last: v0.4.0, 4d ago) | 🟡 Quiet; consolidation after major release |
| **ZeroClaw** | 46 | 50 | 34 / 12 (issues), 40 / 10 (PRs) | None (v0.8.0-β2 integration branch) | 🟡 Feature-heavy pre-release; S1 provider bugs unaddressed |

**Scoring note:** Health scores reflect a composite of (a) issue:open ratio, (b) P1 bug fix velocity, (c) release cadence, (d) maintainer responsiveness to critical items.

---

## 3. OpenClaw's Position

**Advantages vs peers:**
- **Scale of community engagement** is unmatched by an order of magnitude. The 500/500 issue/PR throughput dwarfs all other projects combined, creating a flywheel of testing, bug reporting, and contribution volume.
- **Multi-channel breadth**: OpenClaw supports Telegram, WhatsApp, iMessage, Slack, Discord, Feishu, Matrix, and Mattermost — wider than any competitor. Hermes comes closest (Telegram, Slack, Discord), while most others focus on 1–3 channels.
- **Plugin/hook ecosystem depth**: Exposing reply-chain metadata (#88801), pre-response enforcement hooks (#13583), and cost telemetry (#86029) shows the platform is surfacing extension points that other projects haven't yet designed.
- **Release aggressiveness**: Five beta releases in 48 hours rivals the velocity of projects 10x its scope.

**Technical approach differences:**
- OpenClaw operates as a **centralized gateway architecture** (gateway + adapters + agent harness), whereas ZeroClaw is moving toward a more modular crates-based Rust architecture with the "Reborn" rewrite, and NanoClaw is experimenting with container-per-agent isolation and sidecar browser scraping.
- Hermes Agent wraps around existing provider SDKs more tightly (Codex/OAuth, Bedrock Converse), making it more of a "smart adapter" than a platform — simpler to deploy but less extensible.
- PicoClaw explicitly targets edge/ARM/Termux deployments, a niche OpenClaw doesn't prioritize.
- CoPaw's Tauri desktop-first approach is unique; no other project ships a desktop GUI as a first-class artifact.

**Community size comparison:**
OpenClaw's active contributor base (hundreds of unique commenters, dozens of PR authors) is 5–50x larger than any competitor. Hermes Agent has the second-hottest discussion threads (#33075 at 14 comments, #25267 at 13 reactions), but issue/PR throughput is 1/10th of OpenClaw's. ZeroClaw has meaningful third-tier engagement (46 issues, 50 PRs) with a structured RFC process. Most other projects operate at single-digit issue counts.

---

## 4. Shared Technical Focus Areas

The following requirements are emerging **across multiple projects**, indicating converging needs in the ecosystem:

### 🔴 Session Reliability & Context Management
**Projects affected:** OpenClaw (#32296, #87307), NanoBot (#4128), Hermes Agent (#32423), NanoClaw (#2665), CoPaw (#4653, #4833), ZeroClaw (#5962)

- Stale session bindings, compaction handoff errors, and cross-session contamination are the **#1 universal pain category**. OpenClaw's #32296 (agent replies to wrong message, open 91 days) has become a canonical reference issue.
- NanoClaw's reporter (#2665) identified the single-threaded Node.js host as a systemic fragility — blocking operations freeze the `/health` endpoint, making stall detection impossible.

### 🔗 MCP Tool Integration & Security
**Projects affected:** OpenClaw (#78308), NanoBot (#4099, #4120), CoPaw (#4842, #4834), ZeroClaw (#6876, #4467), IronClaw (#2923), NanoClaw (#2662)

- MCP stdio transport activation failures (IronClaw #2923), MCP server process explosion at scale (CoPaw #4842, 300+ agents), and the lack of per-sender RBAC for MCP tools (ZeroClaw #6876) are **cross-cutting gaps**.
- NanoClaw's PR #2662 extending MCP config from stdio-only to HTTP/SSE transport reflects the ecosystem's shift toward remote MCP servers.

### 📅 Cron / Scheduled Job Correctness
**Projects affected:** OpenClaw (#45494, #85888), Hermes Agent (#25281, #36149), CoPaw (#4649, #4653, #4835), NullClaw (#941), ZeroClaw (#6647)

- NullClaw's silent subprocess spawn failure (#941), OpenClaw's silent timeout during LLM outages (#45494), and Hermes's dashboard update deleting all cron jobs (#25281) all represent **different facets of the same core problem**: the cron-to-delivery pipeline lacks proper lifecycle management, error propagation, and isolation. ZeroClaw's accepted RFC #6954 to route scheduled tasks through the orchestrator pipeline is the most architecturally mature response.

### 🐳 Docker / Production Deployment
**Projects affected:** OpenClaw (#88788), Hermes Agent (#34339, #35025, #35583, #36008), NanoClaw (#2655, #2657, #2659), CoPaw (#4831), ZeroClaw (#4842)

- Ghost sessions after LobsterAI restart (#1359), stale Docker images (OpenClaw #88788), fd-exhaustion killing gateways (NanoClaw #2655), and architecture-binary mismatches on ARM (ZeroClaw #4842) reveal a **systemic gap between development-time testing and production deployment realities**.

### 🔐 Multi-Tenancy & RBAC
**Projects affected:** OpenClaw (#13583, #78308), ZeroClaw (#5982, #6876, #6914, #6915), CoPaw (#4845, #4843), Hermes Agent (#25267)

- Per-sender access control, tool scoping per user class, and prompt injection between shared-session users are **no longer "enterprise-only" features** — they're requested by community users deploying on WeWork, Telegram groups, and multi-user Slack/Discord servers.

### 📡 Provider Adapter Reliability
**Projects affected:** OpenClaw (#88804, #88748), Hermes Agent (#33075, #36151), ZeroClaw (#7022, #4879, #5866, #5962), PicoClaw (#2674), NanoClaw (#2655)

- OpenAI Codex/OAuth streaming issues span OpenClaw, Hermes (#33075), and PicoClaw (#2674). Gemini OAuth failures span ZeroClaw (#4879), Hermes, and OpenClaw (#88748). Ollama tool-call failures affect both OpenClaw and ZeroClaw (#5962). This **shared provider fragility** points to the need for a community-maintained provider testing harness.

---

## 5. Differentiation Analysis

| Dimension | OpenClaw | NanoBot | Hermes Agent | PicoClaw | ZeroClaw | CoPaw | IronClaw |
|---|---|---|---|---|---|---|---|
| **Primary target user** | Enterprise / power multi-channel users | Security-conscious deployers | Developers wanting Codex/Anthropic parity | Edge/mobile / Termux hobbyists | Multi-tenant / Letta migrants | Desktop-first individual users | Teams wanting Slack-first agent platforms |
| **Core differentiator** | Widest channel support, richest plugin API | Fast security response, minimal attack surface | Direct competition with official CLI providers | ARM/Termux + local provider focus | Rust performance, modular crates, RFC-governed design | Tauri desktop app, token visibility UX | Reborn architecture, multi-backend persistence (libSQL+Postgres) |
| **Channel strategy** | Maximum coverage (8+) | Core messaging channels | Discord, Telegram, Slack, iMessage | Telegram, Web, QQ | Multi-channel + email IMAP | Feishu/WeWork + Web | Slack-first (Reborn), others via ACP |
| **Tech stack** | TypeScript/Python | TypeScript | TypeScript/Python | Python/TypeScript | Rust | Python + Tauri (Rust UI) | Rust |
| **Deployment model** | Docker, npm, source | npm, Docker | CLI, Docker, Windows installer | pip, Termux | Binary install, Docker, source | Desktop app (Tauri), pip | Docker, source, binary |
| **MCP strategy** | MCP consent envelopes (planned), tool quarantine | Filesystem hardening, MCP via stdio | Via ACP/agent delegation | Implicit via agent config | First-class MCP, resource/prompt support | Process isolation gaps (ACP protocol mismatch) | stdio + auth pre-flight (buggy) |
| **Security model** | Shell exec approval pipeline, policy hooks requested | Fail-closed by default, WebSocket auth enforcement | Per-plugin trust (vulnerability scanning) | Minimal (hobbyist audience) | RBAC in roadmap, risk profiles, tool allow/deny lists | Memory isolation incomplete (prompt injection via WeWork) | Auth prompt projection, OAuth projection architecture |

---

## 6. Community Momentum & Maturity

### 🚀 Rapid Iterators (high velocity, active shipping)
- **OpenClaw** — 5 beta releases in 48h; the most active agent project in the ecosystem by a wide margin.
- **NanoBot** — Zero-day security fix turnaround; 7 PRs merged in 24h with no lingering critical bugs.
- **ZeroClaw** — 10 PRs merged, 3 RFCs accepted, integration branch converging. Highest architectural ambition.
- **PicoClaw** — Same-day bug fix for Codex OAuth issue; good triage-to-merge speed.

### 🔄 Stabilizing (fixing regressions, managing backlog)
- **Hermes Agent** — Fixing Docker upgrade fallout from tini→s6-overlay migration; P1 regressions accumulating.
- **CoPaw** — Triage mode after v1.1.9 regressions (fallback messages, Windows subprocess issues, security vuln).
- **IronClaw** — Mid-architecture rewrite ("Reborn"); productive but E2E pipeline is a concern.
- **NanoClaw** — Strong contributor PRs, but 0 maintainer responses on new critical cluster is a warning sign.

### ⚠️ At Risk / Low Activity
- **NullClaw** — 2 issues, 0 PRs, no maintainer engagement. Silence >1 week on delivery pipeline bugs.
- **LobsterAI** — 1 stale PR (8 weeks) at risk of auto-closure; no releases window.
- **ZeptoClaw** — Consolidation after v0.4.0, but single-day bot-only activity suggests maintainer disengagement.
- **TinyClaw, Moltis** — No meaningful activity.

---

## 7. Trend Signals for AI Agent Developers

### Trend 1: Session Model Unification
The repeated, cross-project failures around session lifecycle (stale bindings, compaction contamination, event-loop freezes, fd exhaustion) signal that **the community is converging on the need for a shared session abstraction** — one that handles stale binding detection, compaction safety checks, and out-of-process execution for blocking operations. Developers should watch ZeroClaw's RFC #6954 (orchestrator-routed cron) and OpenClaw's PR #88804 (tool call reliability) as reference architectures.

### Trend 2: MCP Is Becoming the Universal Tool Layer — With Growing Pains
Every project with non-trivial tool integration is hitting MCP-related issues: stdio activation failures, process explosion, missing HTTP/SSE transport, security scope gaps. The **MCP ecosystem is moving faster than any single agent project can adapt**. The gap between "MCP works in a demo" and "MCP works with 300 agents in production" is where real architectural differentiation will emerge in the next 2–3 release cycles.

### Trend 3: Docker Production Readiness Is the New Adoption Barrier
During the early-adopter phase (v0.1–v0.5), projects could survive with "just run from source." Now, across OpenClaw, Hermes Agent, NanoClaw, and ZeroClaw, **Docker deployment issues are blocking actual usage** — not just development. Expect a wave of investment in production deployment tooling (health checks, proper init systems, ARM binary correctness, schema-stable images) as the ecosystem matures past hobbyist users.

### Trend 4: Multi-Tenancy Is Moving from Enterprise Feature to Community Expectation
ZeptoClaw's RBAC issues (#5982), OpenClaw's hard enforcement hooks (#13583), CoPaw's WeWork prompt injection (#4845), and Hermes's multi-device config sync (#20510) reveal that **even community-run group deployments need multi-user isolation**. This is a structural gap in most current architectures (which assume single-user/single-agent). Projects that solve this first (ZeroClaw is best-positioned via its RFC process) will capture the next wave of adoption.

### Trend 5: Cost Transparency and Usage Observability
OpenClaw (#86029), CoPaw (#4433), and ZeroClaw (#6253) all have open requests for per-session token usage and cost tracking. As agent usage scales, **"I spend how much per day on AI inference?"** is becoming a first-class UX requirement, not a nice-to-have.

### Trend 6: The OpenCodex Reliability Gap Is the Community's Biggest Shared Threat
OpenAI Codex tool-call issues appear in OpenClaw (#88804), Hermes Agent (#33075, #13834), PicoClaw (#2674, #2953), and ZeroClaw (#7022). The official Codex CLI works; the agent wrappers don't. This **shared upstream dependency fragility** risks eroding user trust across the entire ecosystem. A community-shared provider conformance test suite would be a high-leverage collective investment.

---

*Report generated by OWL — ZOO Company. Data sourced from 14 GitHub repositories as of 2026-06-01.*

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-06-01

---

## 1. Today's Overview

NanoBot saw robust activity over the past 24 hours: **6 issues** updated (2 still open, 4 closed) and **18 PRs** touched (11 open, 7 merged/closed). No new releases were published. The bulk of the day's velocity is concentrated in **session management fixes**, **heartbeat/task-notification hardening**, and **broadening cloud-provider auth support** (Azure AAD). Community contributions are heavily weighted toward bugfix and security hardening, with multiple independent reporters converging on session and heartbeat stability — a sign that real-world deployments are stressing these subsystems.

---

## 2. Releases

None. No new versions were published today.

---

## 3. Project Progress

### Merged / Closed PRs (7)

| # | PR | Author | Summary |
|---|-----|--------|---------|
| **#4127** | [fix(agent): extend sustained goal iteration budget](https://github.com/HKUDS/nanobot/pull/4127) | Re-bin | Adds an internal continuation path for `/goal` work that runs up against the normal tool-call iteration cap, and suppresses the synthetic max-iteration warning while continuation is active. |
| **#4121** | [feat(webui): polish chat rendering and host runtime](https://github.com/HKUDS/nanobot/pull/4121) | Re-bin | Stabilizes streamed-chat rendering (assistant deltas, ordered Thought blocks, file-edit actions) and keeps WebUI host code free of desktop-product naming. |
| **#4117** | [fix(webui): handle undefined language in code blocks](https://github.com/HKUDS/nanobot/pull/4117) | Flinn-X | Falls back to `"text"` when `react-syntax-highlighter` receives `undefined` → fixes the white-screen crash from **#4116**. |
| **#4114** | [fix(heartbeat): skip empty HEARTBEAT.md and fail closed on delivery](https://github.com/HKUDS/nanobot/pull/4114) | 04cb | Closes **#4111** — stops heartbeat from firing on blank/template HEARTBEAT.md and fail-closes delivery so routine "All clear." pings can't reach Feishu. |
| **#4112** | [fix(heartbeat): fail closed on internal checks](https://github.com/HKUDS/nanobot/pull/4112) | Re-bin | Makes the notification evaluator configurable so heartbeat internal checks fail closed while user-reminder evaluations stay fail-open. |
| **#4103** | [Require auth for WebSocket token issuance](https://github.com/HKUDS/nanobot/pull/4103) | hamb1y | Closes **#4077** — enforces `Authorization` on `token_issue_path` when a static WebSocket token is configured, preventing unauthenticated token minting. |
| **#4118** | [Test push](https://github.com/HKUDS/nanobot/pull/4118) | wzonce | Trivial test PR; closed. |

### Open PRs of note (11 open, selected highlights)

| # | PR | Focus |
|---|-----|-------|
| **#4129** | [fix(session): prevent duplicate archive and message loss in enforce_file_cap](https://github.com/HKUDS/nanobot/pull/4129) | Direct fix for **#4128**. |
| **#4126** | [feat(provider): Add support for Azure AAD based Auth for Azure OpenAI provider](https://github.com/HKUDS/nanobot/pull/4126) | Closely tied to **#4125** — production-grade Azure enterprise need. |
| **#4099** | [Keep filesystem extra roots read-only](https://github.com/HKUDS/nanobot/pull/4099) | Security hardening ahead of broader adoption. |
| **#4115** | [refactor: extract GatewayHTTPHandler from WebSocketChannel](https://github.com/HKUDS/nanobot/pull/4115) | Architectural refactor enabling future hot-reload. |

---

## 4. Community Hot Topics

### 🔥 Session-archive duplication bug — **#4128** + **#4129** (open)

> 🔗 [Issue #4128](https://github.com/HKUDS/nanobot/issues/4128) · [PR #4129](https://github.com/HKUDS/nanobot/pull/4128)

Reporter **huji820** identified that `retain_recent_legal_suffix` in `nanobot/session/manager.py` can double-archive user messages when the `else` branch kicks in — user messages land in both `archive` (pending compression) and `kept` (active risk of LLM context inconsistency. PR **#4129** by **yorkhellen** is already open and directly targets this. Fix is likely to merge in the next 24–48 hours.

### 🔐 Security: WebSocket token issuance — **#4077** (closed) → **#4103** (merged)

> 🔗 [Issue #4077](https://github.com/HKUDS/nanobot/issues/4077) · [PR #4103](https://github.com/HKUDS/nanobot/pull/4103)

**hamb1y** responsibly disclosed that the token-issue route could mint short-lived tokens without authentication when `tokenIssueSecret` was empty. The fix landed the same day — fast turnaround on a real vuln. This is the highest-severity item resolved in this window.

### 🔔 Heartbeat spam — **#4111** (closed) → **#4114** (merged)

> 🔗 [Issue #4111](https://github.com/HKUDS/nanobot/issues/4111) · [PR #4114](https://github.com/HKUDS/nanobot/pull/4114)

Users on Feishu received phantom "All clear." messages every 30 minutes. The fix realigns empty-file detection and fail-closes delivery. Combined with **#4112**, this represents a meaningful hardening of the heartbeat subsystem.

### ☁️ Azure AAD Auth — **#4125** (open) + **#4126** (open PR)

> 🔗 [Issue #4125](https://github.com/HKUDS/nanobot/issues/4125) · [PR #4126](https://github.com/HKUDS/nanobot/pull/4125)

Enterprise Azure customers on API-key-restricted subscriptions are blocked today. A contributor (**kunalk16**) has already proposed the AAD-based auth flow. This is the clearest "production unblocker" request in the queue.

---

## 5. Bugs & Stability

| Severity | Issue | Status | Fix PR |
|----------|-------|--------|--------|
| 🔴 **Critical** | **#4077** — Unauthenticated WebSocket token minting | ✅ Fixed & merged (#4103) | — |
| 🔴 **High** | **#4116** — WebUI white-screen crash on bare fenced code blocks | ✅ Fixed & merged (#4117) | — |
| 🟠 **Medium** | **#4111** — Heartbeat sends "All clear." when no tasks exist | ✅ Fixed & merged (#4114, #4112) | — |
| 🟠 **Medium** | **#4128** — User messages duplicated in archive + kept (context inconsistency) | ⏳ Open | **#4129** (open, direct fix) |
| 🟡 **Low–Medium** | **#4124** — XML tool-call emissions from MiMo/GLM models leak raw XML to chat | ⏳ Open fix PR (#4124, open) | — |

**Assessment:** Today's security and crash bugs were all resolved within the same reporting window. The sole remaining medium-severity bug (**#4128** session duplication) already has a corresponding open PR. Stability trajectory is positive overall.

---

## 6. Feature Requests & Roadmap Signals

| Request | Issue | Likelihood in next version |
|---------|-------|---------------------------|
| **Azure AAD-based auth for Azure OpenAI** | [#4125](https://github.com/HKUDS/nanobot/issues/4125) | 🔮 High — PR **#4126** already open |
| **Voice recording + local ASR transcription in WebUI** | [#4122](https://github.com/HKUDS/nanobot/pull/4122) | 🔮 Medium — nice-to-have, FunASR dependency may slow merge |
| **Heartbeat reasoning decoupled from notification** | [#1443](https://github.com/HKUDS/nanobot/pull/1443) | 🔮 Medium — open since March, recently updated; `sendReasoning` config field is a clean design |
| **Dream skill ownership markers** | [#4101](https://github.com/HKUDS/nanobot/pull/4101) (PR) | 🔮 Medium — prevents Dream from overwriting user-created skills; good hygiene as Dream matures |
| **Filesystem extra roots read-only** | [#4099](https://github.com/HKUDS/nanobot/pull/4099) (PR) | 🔮 Medium — security hardening; likely to be adopted as default before broad enterprise onboarding |
| **GatewayHTTPHandler extraction / hot-reload** | [#4115](https://github.com/HKUDS/nanobot/pull/4115) | 🔮 Low (next version) — architectural refactor, prerequisite for larger features |

**Top prediction for next release:** Azure AAD auth (#4126) and session duplication fix (#4129) — both have code already merged or in-review and address clear user-blocking scenarios.

---

## 7. User Feedback Summary

**Pain points:**

- **Enterprise auth lockout:** Azure OpenAI customers under strict subscription policies cannot use API-key auth. This is not a power-user ask — it's a production unblocker (**#4125**).
- **Heartbeat noise:** Feishu users were receiving phantom pings every 30 min from heartbeat jobs. Multiple PRs converged on the fix, showing this was a live irritation (**#4111**, **#4114**, **#4112**).
- **Session memory corruption bug:** A subtle context-management bug in `enforce_file_cap` degrades LLM quality under certain tail-message patterns — the kind of bug that erodes user trust in agent reliability before it's noticed (**#4128**).
- **WebUI fragility:** Two separate reports (**#4116**, **#4124**) reveal that the WebUI still crashes or leaks content on edge-case model output (bare code fences, XML tool calls from non-OpenAI models).

**Use cases emerging:**

- Voice input via browser with local (offline-capable) ASR transcription (**#4122**).
- Scheduled heartbeat tasks that reason silently and only message when there's something actionable (**#1443**).
- MCP server integrations (Vest ecosystem integration proposed in **#4120**).

**Vibe:** Contributors are shipping fixes quickly on security and stability. The backlog of "polish and enterprise readiness" items (AAD auth, file-permission tightening, hot-refresh architecture) suggests the project is maturing past the early-adopter stage.

---

## 8. Backlog Watch

| Item | Age | Signal |
|------|-----|--------|
| **PR #1443** — [feat: decouple heartbeat reasoning from notification](https://github.com/HKUDS/nanobot/pull/1443) | 3+ months old, recently updated (2026-05-31) | Quiet since March; #4111/#4114 solved the immediate symptom but the architectural intent (silent heartbeats) is still not merged. Needs maintainer review. |
| **PR #3990** — [refactor(dream): replace two-phase Dream class with simple cron](https://github.com/HKUDS/nanobot/pull/3990) | ~1 week old, recently updated | Replaces a heavyweight 315-line class with a lightweight cron route. Small, clean refactor; low risk. |
| **PR #4099** — [Keep filesystem extra roots read-only](https://github.com/HKUDS/nanobot/pull/4099) | ~3 days old | Security-relevant; addresses **#4073**. Should be fast-tracked. |
| **PR #4115** — [refactor: extract GatewayHTTPHandler](https://github.com/HKUDS/nanobot/pull/4115) | ~3 days old | Architectural groundwork. Low urgency now but high leverage later. |

**Watch list for maintainers:** #3990 and #4115 are the only open PRs that look like they need an extra review push to unblock; the rest of the open queue is either already in review or waiting on small revisions.

---

*OWL · 2026-06-01 · Data window: 24 h · Source: HKUDS/nanobot*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-06-01

---

## 1. Today's Overview

Hermes Agent is experiencing **exceptionally high activity** with 50 issues and 50 PRs updated in the last 24 hours, the vast majority still open (43 issues, 37 PRs). This signals a **surge in community engagement** — likely driven by the v0.14.0 release — but also reveals a growing backlog that may strain maintainer capacity. No new releases were published today, though several merged PRs address urgent stability bugs in Docker, cron, and configuration systems. The project's health remains **active but pressured**, with multiple P1 regressions reported across provider adapters (Anthropic, OpenAI/Codex, Bedrock) and a notable cluster of Docker/gateway issues.

---

## 2. Releases

**No new releases today.** The most recent published version is **v0.14.0**. Several merged and open PRs are accumulating fixes (Docker env fallback, gateway type alignment, installer prerequisites) that will likely feed into a **v0.14.1 patch** in the near term.

---

## 3. Project Progress

### Merged / Closed PRs Today

| PR | Summary | Significance |
|---|---|---|
| [#36190](https://github.com/NousResearch/hermes-agent/pull/36190) | Add GitHub Action to build & sign Windows installer | **Infrastructure** — first automated Windows release pipeline; reduces manual friction for desktop distribution |
| [#36185](https://github.com/NousResearch/hermes-agent/pull/36185) | Align installer prerequisites with bootstrap flow | **UX fix** — installer now warns about missing runtimes (Python, Node) before first launch, preventing post-install confusion |
| [#36189](https://github.com/NousResearch/hermes-agent/pull/36189) | Map SiTaggart in AUTHOR_MAP for CI attribution | **CI maintenance** — unblocks PR #35583 merge |
| [#36008](https://github.com/NousResearch/hermes-agent/pull/36008) | Fix Docker: ignore empty forwarded env values | **Critical Docker fix** — fixes empty-string env inheritance so `.hermes/.env` fallback can supply secrets (companion to #35583) |
| [#35583](https://github.com/NousResearch/hermes-agent/pull/35583) | Fix(tools): fall back to `.hermes/.env` when forwarded secret is empty | **Critical Docker fix** — transient blank env vars no longer override durable `.env` secrets; P1 regression fix |
| [#11429](https://github.com/NousResearch/hermes-agent/pull/11429) | Add ZAI (智谱AI) China Coding Plan provider + fix endpoint priority | **New provider** — Chinese users can now use the cheaper Coding Plan endpoint; fixes config override by auto-detection |
| [#19655](https://github.com/NousResearch/hermes-agent/pull/19655) | Add adaptive idle timeout for long-running terminal commands | **Feature** — commands like `git clone` no longer killed by fixed timeout as long as they produce output |
| [#36188](https://github.com/NousResearch/hermes-agent/pull/36188) | Fix gateway service restart flow for Telegram/systemd | **Stability** — fixes planned systemd restarts exiting cleanly instead of TEMPFAIL crash-looping |

### Closed Issues Today

| Issue | Summary |
|---|---|
| [#33075](https://github.com/NousResearch/hermes-agent/issues/33075) | openai-codex/gpt-5.5 instability (TTFB timeout, APIConnectionError) — **closed, 14 comments** |
| [#32423](https://github.com/NousResearch/hermes-agent/issues/32423) | Context window shrinks to 256K after interrupted compaction/resume |
| [#31158](https://github.com/NousResearch/hermes-agent/issues/31158) | Kanban dispatcher wedges under multi-thread + subprocess concurrency |
| [#34554](https://github.com/NousResearch/hermes-agent/issues/34554) | claude-opus-4-8 HTTP 400 "thinking.type.enabled" not supported (Anthropic schema change) |
| [#34339](https://github.com/NousResearch/hermes-agent/issues/34339) | Gateway not auto-starting after tini → s6-overlay Docker image migration |
| [#35025](https://github.com/NousResearch/hermes-agent/issues/35025) | Docker `needs_chown` re-chowns volume on every boot when HERMES_UID ≠ 10000 |

---

## 4. Community Hot Topics

### Issues with Highest Engagement

| Issue | 💬 | 👍 | Analysis |
|---|---|---|---|
| [#33075](https://github.com/NousResearch/hermes-agent/issues/33075) — openai-codex/gpt-5.5 still unstable in v0.14.0 | 14 | 11 | **Most critical recurring pain point.** Subagent delegation via `openai-codex` fails with APIConnectionError/TTFB timeouts while official Codex CLI works identically. Closed today, suggesting a fix landed, but users report ongoing instability. Underlying need: parity between Hermes's provider adapter and official CLI reliability. |
| [#25267](https://github.com/NousResearch/hermes-agent/issues/25267) — Claude Agent SDK model provider with subscription OAuth | 4 | 13 | **Strongest feature demand by reactions.** Users with Claude subscriptions don't want to pay again for API keys. Requests Codex-style OAuth flow for Anthropic. Signals demand for subscription-based auth across all providers, not just API-key billing. |
| [#20510](https://github.com/NousResearch/hermes-agent/issues/20510) — Cloud sync for all Hermes configurations across devices | 4 | 9 | **High-demand UX gap.** Multi-device users (PC + laptop) want config/session/memory sync. Currently all stored locally under `~/.hermes/`. |
| [#13834](https://github.com/NousResearch/hermes-agent/issues/13834) — Hermes openai-codex fails where official Codex CLI works | 8 | 2 | Older sibling of #33075; confirms this is a persistent, unresolved adapter-level problem spanning months. Suggests the root cause may be deeper than a single bug. |
| [#21910](https://github.com/NousResearch/hermes-agent/issues/21910) — Rewind/edit-and-resubmit (Claude Code double-Esc equivalent) | 2 | 5 | Users want to jump back to a prior message and re-prompt. Expected for competitive parity with Claude Code and Cursor. |

---

## 5. Bugs & Stability

### P1 (Critical — Data Loss, Complete Failure)

| Issue | Status | Description | Fix PR? |
|---|---|---|---|
| [#36151](https://github.com/NousResearch/hermes-agent/issues/36151) | 🆕 OPEN | **bedrock_adapter**: Opus 4.7/4.8 on Bedrock Converse 400s with "temperature is deprecated" — `_forbids_sampling_params` guard never applied to Bedrock path | None yet |
| [#34554](https://github.com/NousResearch/hermes-agent/issues/34554) | ✅ CLOSED | **claude-opus-4-8**: HTTP 400 — Anthropic changed thinking schema requiring `thinking.type.adaptive` | Fixed (issue closed today) |
| [#25281](https://github.com/NousResearch/hermes-agent/issues/25281) | 🔴 OPEN | **Dashboard "Update" button deletes all scheduled cron jobs** — data loss on every update | None yet. P1 severity, reported 2+ weeks ago, no response |

### P2 (Major — Feature Broken, Workaround Exists)

| Issue | Status | Description | Fix PR? |
|---|---|---|---|
| [#33961](https://github.com/NousResearch/hermes-agent/issues/33961) | 🔴 OPEN | `/new`, `/clear`, `/reset` slash commands freeze terminal session | None yet |
| [#36149](https://github.com/NousResearch/hermes-agent/issues/36149) | 🆕 OPEN | Cron/Schedules UI broken — frontend calls `/api/cron/jobs`, backend defines `/api/jobs` | None yet |
| [#30411](https://github.com/NousResearch/hermes-agent/issues/30411) | 🔴 OPEN | Telegram DM auto-topic-rename and tool-call routing broken by `_recover_telegram_topic_thread_id()` | None yet |
| [#30196](https://github.com/NousResearch/hermes-agent/pull/30196) | 🟡 OPEN PR | Gateway `--replace` across HERMES_PROFILE mismatch shares pidfile | PR open, not merged |
| [#19236](https://github.com/NousResearch/hermes-agent/issues/19236) | 🔴 OPEN | Slack `send_message` cannot open DMs for user targets | None yet |
| [#32737](https://github.com/NousResearch/hermes-agent/issues/32737) | 🔴 OPEN | Tirith shell scanner over-flags pipe-to-interpreter for local user-owned executables | None yet |

### P3 (Minor — Inconvenience, Edge Cases)

| Issue | Status | Description |
|---|---|---|
| [#36091](https://github.com/NousResearch/hermes-agent/issues/36091) | 🆕 OPEN | minimax-oauth auxiliary client returns raw SDK instead of wrapper |
| [#31263](https://github.com/NousResearch/hermes-agent/issues/31263) | 🔴 OPEN | Holographic memory context injection never fires in v0.14.0 |
| [#31144](https://github.com/NousResearch/hermes-agent/issues/31144) | 🔴 OPEN | `load_hermes_dotenv` resolves `.env` path differently than `hermes config show` |

### Notable Regression Pattern: Docker Upgrade Path

Multiple P2 Docker issues (#34339, #35025, #36008, #35583) cluster around the **tini → s6-overlay image migration**. PRs #35583 and #36008 fix the most critical secret-handling regressions, but #35025 (unnecessary `chown` on every boot) remains open, indicating the migration is not yet fully smoothed out.

---

## 6. Feature Requests & Roadmap Signals

| Request | Issue | Demand Signal | Likelihood in Next Version |
|---|---|---|---|
| **Claude subscription OAuth** (Codex-style) | [#25267](https://github.com/NousResearch/hermes-agent/issues/25267) | 👍13, multi-provider desire | **High** — aligns with openai-codex OAuth investment; strong user pain around double-billing |
| **Cloud/cross-device config sync** | [#20510](https://github.com/NousResearch/hermes-agent/issues/20510) | 👍9 | **Medium** — large architectural change; may arrive as opt-in backend |
| **Rewind/edit-and-resubmit** | [#21910](https://github.com/NousResearch/hermes-agent/issues/21910) | 👍5 | **Medium** — competitive parity with Claude Code; UX scaffolding likely exists |
| **Toggle for auxiliary tasks** (title_generation, etc.) | [#27877](https://github.com/NousResearch/hermes-agent/issues/27877) | Low engagement | **Low-Medium** — simple config addition, low effort |
| **Native mobile app with voice calling** | [#11911](https://github.com/NousResearch/hermes-agent/issues/11911) | Low engagement | **Low** — major effort; likely community-driven if pursued |
| **web_search targeted categories** | [#36113](https://github.com/NousResearch/hermes-agent/issues/36113) | 🆕 | **Medium** — Firecrawl/SearXNG/Brave all support it; straightforward param pass-through |
| **Hawser webhook notifier plugin** | [#36182](https://github.com/NousResearch/hermes-agent/pull/36182) | PR open | **High** — already has an open PR; could merge soon |

**Prediction for v0.14.1:** Docker bug env fixes (already merged), Bedrock Opus sampling fix, possible ZAI China Coding Plan expansion. Anthropic/OAuth work likely targets v0.15.0.

---

## 7. User Feedback Summary

### Pain Points

- **Provider adapter reliability is the #1 frustration.** The openai-codex/gpt-5.5 instability (issues #33075, #13834) spanning months with high engagement (14 comments, 11 reactions) indicates a **deep architectural gap** between Hermes's delegation layer and the official CLI's HTTP behavior. Users explicitly note the Codex CLI works fine on the same machine/network.
- **Docker users face a rough upgrade path** from tini to s6-overlay images. Secret management, auto-start, and permission handling all broke in the transition. While fixes are merging, the experience feels fragile.
- **Cron job data loss on updates** (#25281, P1, open 3+ weeks, no maintainer response) is a **destructive bug** that erases user configuration. This erodes trust significantly.
- **Slack and Telegram integrations have unresolved routing/DM bugs** that limit production deployment reliability.

### Satisfaction Signals

- **ZAI China Coding Plan PR merged** — Chinese-speaking users gain provider support, showing responsiveness to regional needs.
- **Adaptive terminal timeout merged** — directly addresses a real workflow blocker (large git clones over messaging).
- **Windows installer automation PR merged** — improves onboarding for non-technical Windows users.
- **Quick closure of claude-opus-4-8 thinking schema issue** — demonstrates ability to respond rapidly to upstream API changes.

### Use Cases Represented

- **Software development** (Codex delegation, git operations, code sandbox/Docker)
- **Multi-device professionals** wanting config sync across machines
- **Messaging-centric workflows** (Telegram, Slack, Discord as primary interfaces)
- **Containerized deployment** users on self-hosted infrastructure
- **Multi-provider users** juggling Anthropic, OpenAI, Bedrock, Gemini, MiniMax, ZAI

---

## 8. Backlog Watch

### High-Priority Items Needing Maintainer Attention

| Item | Age / Status | Risk |
|---|---|---|
| [#25281](https://github.com/NousResearch/hermes-agent/issues/25281) — Dashboard update deletes all cron jobs | 🟡 P1, open since 2026-05-13, **zero maintainer comments** | **Data loss on every update.** Users cannot safely upgrade. Needs immediate triage. |
| [#13834](https://github.com/NousResearch/hermes-agent/issues/13834) — openai-codex fails where Codex CLI works | 🔴 Open since 2026-04-22, **still open after 5+ weeks** | Suggests #33075's closure didn't fully resolve the underlying adapter issue. Risk of re-opening. |
| [#13142](https://github.com/NousResearch/hermes-agent/issues/13142) — execute_code silently returns 0 tool calls on Docker backend | 🔴 Open since 2026-04-20 | Workaround exists (use `local` backend), but silent failure is dangerous. Needs root cause investigation. |
| [#30411](https://github.com/NousResearch/hermes-agent/issues/30411) — Telegram topic routing broken | 🔴 P1, open since 2026-05-22 | Telegram is a major platform adapter. Broken DM routing affects all Telegram power users. |
| [#30195](https://github.com/NousResearch/hermes-agent/issues/30155) / [#30196](https://github.com/NousResearch/hermes-agent/pull/30196) — Gateway `--replace` cross-profile pidfile conflict | 🟡 PR open since 2026-05-22, unmerged | Stale PR fixing a real multi-profile race condition. Needs review or closure. |
| [#19236](https://github.com/NousResearch/hermes-agent/issues/19236) — Slack cannot DM users | 🔴 Open since 2026-05-03 | Basic Slack functionality broken for 4+ weeks. |
| [#25267](https://github.com/NousResearch/hermes-agent/issues/25267) — Claude subscription OAuth | 🟡 Feature, 👍13, open since 2026-05-13 | Highest-engagement feature request. Community is vocal about double-billing pain. Needs a design response even if implementation is deferred. |
| [#31263](https://github.com/NousResearch/hermes-agent/issues/31263) — Holographic memory never fires in v0.14.0 | 🔴 Open since 2026-05-24 | Memory is a core agent feature. If the holographic provider is silently non-functional, users are getting degraded sessions without knowing why. |

### PRs Aging Without Review

| PR | Age | Description |
|---|---|---|
| [#27492](https://github.com/NousResearch/hermes-agent/pull/27492) | 2 weeks | Cron tick file lock starvation — fixes scheduler deadlock during long-running jobs |
| [#31477](https://github.com/NousResearch/hermes-agent/pull/31477) | 1 week | Agent recovery-path streaming fix — closes blank-stream gap in conversation loop |
| [#21657](https://github.com/NousResearch/hermes-agent/pull/21657) | 3 weeks | Forward reasoning in Responses API output — feature enhancement for API consumers |
| [#30936](https://github.com/NousResearch/hermes-agent/pull/30936) | 1 week | Slack NO_REPLY sentinel fix — prevents sentinel text from being posted to channels |

---

> **Data source:** [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | Window: last 24h ending 2026-06-001 | Generated by OWL

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-06-01

---

## 1. Today's Overview

PicoClaw is in a highly active development phase with strong momentum heading into June 2026. Over the last 24 hours the project saw 7 issue updates (4 open / 3 closed) and 10 PR updates (7 open / 3 merged/closed), reflecting a significant number of bug fixes landing across the Codex/OAuth, message bus, and stability domains. A new nightly build (v0.2.9-nightly.20260601) was automatically published, indicating active CI/CD cadence despite no official release since the last stable. The codebase is concentrating on provider reliability (Anthropic SDK v1.46.0, Codex OAuth streaming), core runtime hardening, and expanding channel integrations (Telegram, Android Termux). Community engagement is healthy with a mix of deep technical bug reports and practical feature requests.

---

## 2. Releases

**Nightly Build — v0.2.9-nightly.20260601.ba806592**
- Automated nightly build; does not represent a stable release.
- Full changelog references diff from last stable v0.2.9 to main: [compare v0.2.9...main](https://github.com/sipeed/picoclaw/compare/v0.2.9...main)
- **Migration notes:** None formally documented. Nightly builds carry development branch risk; users in production should remain on stable v0.2.9.
- No breaking changes explicitly called out in the nightly notes.

---

## 3. Project Progress

### Today's Merged / Closed PRs

| # | Title | Author | URL |
|---|---|---|---|
| #2967 | **fix(codex): preserve streamed output text deltas** | miruchigawa | [link](https://github.com/sipeed/picoclaw/pull/2967) |
| #2856 | **feat(message): support media attachments and Telegram rich delivery** | bogdanovich | [link](https://github.com/sipeed/picoclaw/pull/2856) |
| #2980 | **chore: gitignore debug output files** | OmegaSoftDLL | [link](https://github.com/sipeed/picoclaw/pull/2980) |

**Key advancements:**
- **Codex/OAuth empty-response fix** (#2967): A critical provider bug is resolved — the Codex provider now accumulates streamed `output_text.delta` events instead of discarding them, directly addressing both issues #2674 and #2953. This is the most impactful fix of the day.
- **Rich messaging** (#2856): The `message` tool is upgraded to support media attachments and Telegram-specific rich outbound delivery in a single semantic payload, closing the long-running feature request in #2855.
- **Repository hygiene** (#2980): Minor cleanup to prevent debug artifacts from appearing in git.

---

## 4. Community Hot Topics

### Most Discussed Issues

| # | Title | Comments | Reactions | URL |
|---|---|---|---|---|
| #28 | **Feat Request: LM Studio Easy Connect** | 21 | 👍2 | [link](https://github.com/sipeed/picoclaw/issues/28) |
| #2674 | **Codex OAuth: empty assistant response when ChatGPT backend streams items** | 7 | 👍4 | [link](https://github.com/sipeed/picoclaw/issues/2674) |
| #2968 | **`/context` always shows Compress at: 76800 tokens** | 3 | 👍1 | [link](https://github.com/sipeed/picoclaw/issues/2968) |

**Analysis:**
- **LM Studio connectivity** (#28): With 21 comments and 2 months of discussion, this is the single most engaged feature request on the project. Users on Android and low-resource setups want a zero-configuration path to connect to LM Studio as a local provider. The request signals that PicoClaw's target demographic includes hobbyist/self-hosted users who find existing provider setup too complex.
- **Codex OAuth streaming** (#2674): High engagement and reaction count indicate this blocked multiple users from using the ChatGPT backend. Having two independent reports (#2674 and #2953) caused by the same root cause underscores the importance of the fix now landed in #2967.
- **Context compression display** (#2968): Users report the `/context` command hardcodes a 76800-token compression point regardless of actual model configuration, creating confusion around context management with models like MiniMax that define different token limits.

---

## 5. Bugs & Stability

### Open Bugs (by estimated severity)

| Severity | # | Title | Description | Fix Status |
|---|---|---|---|---|
| 🔴 **High** | [#2674](https://github.com/sipeed/picoclaw/issues/2674) | Codex OAuth empty response | ChatGPT backend streaming `output_text.delta` events were ignored → empty assistant replies | ✅ **Fixed** in PR [#2967](https://github.com/sipeed/picoclaw/pull/2967) (merged) |
| 🔴 **High** | [#2953](https://github.com/sipeed/picoclaw/issues/2953) | Codex OAuth empty response (duplicate report) | Same root cause as #2674; duplicate stream event handling failure | ✅ **Fixed** by same PR [#2967](https://github.com/sipeed/picoclaw/pull/2967) |
| 🟡 **Medium** | [#2968](https://github.com/sipeed/picoclaw/issues/2968) | `/context` hardcoded compression tokens | Compress threshold always shows 76800 regardless of model config | ⚠️ **Unfixed** — open, awaiting response |
| 🟡 **Medium** | [#2952](https://github.com/sipeed/picoclaw/issues/2952) | exec command actions:run missing + QQ channel restart loop | exec tool `actions:run` absent for most models on first call (causes errors); QQ channel has a restart retrigger bug | ⚠️ **Unfixed** — open |
| 🟢 **Low** | [#2855](https://github.com/sipeed/picoclaw/issues/2855) | Message tool lacks media attachments | Text-only message tool forces awkward split of text/media sends | ✅ **Resolved** in PR [#2856](https://github.com/sipeed/picoclaw/pull/2856) |

**Stability watch:** Three open PRs target (#2906, #2904) message bus backpressure and agent loop reload/panic cleanup — these address low-level runtime stability but are currently stale (last updated 2026-05-20). Their continued staleness represents latent risk.

---

## 6. Feature Requests & Roadmap Signals

### Active Feature Requests

| # | Title | Type | URL |
|---|---|---|---|
| #28 | LM Studio Easy Connect | Provider convenience | [link](https://github.com/sipeed/picoclaw/issues/28) |
| #2952 | UI improvements + exec fixes + provider UX | Multi-issue | [link](https://github.com/sipeed/picoclaw/issues/2952) |
| #2978 | Add OmniRoute as provider | New provider | [link](https://github.com/sipeed/picoclaw/issues/2978) |
| #2977 | Cron tool: add get and update actions | Agent tool improvement | [link](https://github.com/sipeed/picoclaw/pull/2977) |
| #2975 | Telegram: treat reply as mention in groups | Channel UX | [link](https://github.com/sipeed/picoclaw/pull/2975) |

**Likely candidates for next release (inferred priority):**
1. **Cron tool `get`/`update` actions** (#2977) — PR exists, addresses a concrete agent workflow gap (editable cron jobs without remove→recreate cycles).
2. **Telegram reply-as-mention** (#2975) — PR exists, low risk, clear UX improvement.
3. **Anthropic SDK v1.46.0 compatibility** (#2797) — PR exists, prevents breakage for users who update the dependency.
4. **Android Termux guide** (#2902) — Documentation PR; aligns with the strong Android user interest visible in #28 and around LM Studio usage.
5. **Provider UI improvements** from #2952 (default-provider display, key reuse, test-connect-and-populate-models) — high user demand but no PR yet; likely a medium-term roadmap item.

---

## 7. User Feedback Summary

### Pain Points
- **Provider setup friction** is the dominant theme. Multiple issues center on difficult provider configuration (#28 LM Studio, #2978 OmniRoute, #2952 provider UI). Users want dropdown provider selection, connection testing, and model-list auto-discovery rather than manual config entry.
- **exec tool inconsistency** (#2952): The `actions:run` field is missing from most model responses on the first call, causing unnecessary errors and wasted model invocations. This is a real workflow disruption.
- **QQ channel instability** (#2952): A restart retrigger loop exists where resending any message after restart causes another restart, until context is cleared. This is channel-specific but directly harmful to users on QQ.
- **Agent configuration compliance** (#2952): Users report that PicoClaw does not reliably follow `agent.md` instructions, suggesting a prompt-system or tool-chaining reliability gap.

### Satisfaction Signals
- The 21-comment LM Studio thread has a collaborative, supportive tone — users are actively helping each other with workarounds while waiting for official support.
- The rapid closure of the Codex OAuth bug (two reports in ~2 days, fix landed same day) suggests effective maintainer triage and will improve community confidence.

### User Base Profile (inferred)
- A significant contingent of **Android/Termux users** and **self-hosted/edge-device hobbyists**.
- Strong interest in **multi-channel deployment** (Telegram, QQ, Web).
- Users want **rich messaging** (media attachments) and **local provider support** (LM Studio, OmniRoute).

---

## 8. Backlog Watch

### Stale but Open — Needs Maintainer Attention

| # | Title | Last Updated | Concern | URL |
|---|---|---|---|---|
| #2936 | **feat(skills): skip skills whose required binaries are missing** | 2026-05-24 | Fixes a usability issue (#2351) where the agent advertises skills it can't run (e.g., `agent-browser` on $10 hardware). Reasonable PR with no activity in a week. | [link](https://github.com/sipeed/picoclaw/pull/2936) |
| #2906 | **Fix message bus backpressure handling and health visibility** | 2026-05-20 | Core runtime fix — unbounded blocking on saturated queues can cause silent message loss and unresponsive health reporting. Staleness is concerning for stability. | [link](https://github.com/sipeed/picoclaw/pull/2906) |
| #2904 | **Fix agent loop reload and panic cleanup stability** | 2026-05-20 | Fixes a goroutine leak and panic recovery in the provider reload path. Silent goroutine accumulation is a long-term reliability risk. | [link](https://github.com/sipeed/picoclaw/pull/2904) |

### Long-Open General Interest Issues

| # | Title | Age | URL |
|---|---|---|---|
| #28 | LM Studio Easy Connect | ~4 months | [link](https://github.com/sipeed/picoclaw/issues/28) |
| #2952 | Multi-issue (exec, QQ, provider UI) | 4 days, already stale | [link](https://github.com/sipeed/picoclaw/issues/2952) |

> **Note:** PRs #2906 and #2904 by SiYue-ZO are high-value infrastructure fixes that have gone silent for 11+ days. Given their impact on runtime stability (message bus saturation, goroutine leaks), they deserve timely review. Issue #2952 bundles multiple distinct actionable bugs and feature requests — splitting it into separate tracking issues would improve triage and progress visibility.

---

*Generated by OWL — ZOO Company | Data window: 2026-05-31 ~ 2026-06-01 | Source: github.com/sipeed/picoclaw*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-06-01

---

## 1. Today's Overview

NanoClaw saw a burst of activity on May 31 with **3 new issues** (all from the same reporter, `mshirel`) and **8 pull requests** (6 open, 2 closed). No new releases shipped. The project's most significant signals center on **runtime resilience**: one contributor opened three tightly related issues diagnosing systemic fragility around the host event loop, the OneCLI credential gateway, and container lifecycle management. Meanwhile, a separate cluster of 5 PRs from `GiladShoham` and others addresses MCP server support, per-group skill registration, container reaping, symlink mounting, and the mnemon entrypoint flow — collectively improving extensibility and deployment correctness. The volume and specificity of the reports suggest an active, production-deployed user base running into real edge cases at scale.

---

## 2. Releases

**None.** No new versions were published in this window.

---

## 3. Project Progress

Three PRs were closed/merged on May 31, shipping capability in two areas:

- **`/upload-trace` command** — PR [#2648](https://github.com/nanocoai/nanoclaw/pull/2648) (by `gavrielc`, closed) adds an `/upload-trace` command to upload session traces to Hugging Face, improving observability and debugging for hosted/investigative workflows.
- **Discord adapter raw-text delivery** — PR [#2664](https://github.com/nanocoai/nanoclaw/pull/2664) by `whahnize` (currently open/updated) bundles several improvements: running the browser-scraping sidecar (cf-fetch/nodriver) inside the v2 container, baking several skills into the container image/runtime, and adding raw-text delivery to the Discord v2 adapter so URLs remain clickable.
- **Actual deployment** — PR [#2658](https://github.com/nanocoai/nanoclaw/pull/2658) (by `cyber-chris`, closed) appears to be a deployment-related change that was merged or closed on May 31.

---

## 4. Community Hot Topics

All 3 new issues were filed by `mshirel` within hours of each other on May 31, forming a cohesive incident report rather than disconnected complaints. This pattern suggests a **production outage or near-miss** that the reporter is systematically decomposing:

- **[#2665](https://github.com/nanocoai/nanoclaw/issues/2665) — Single-threaded host frozen by unbounded/synchronous ops** — The highest-priority structural issue. The single Node.js event loop is vulnerable to freezing from unbounded `await` or sync-blocking calls (`channel deliver()`, `execSync` image builds), and `/health` cannot detect the stall. This is a **reliability/core-architecture concern**.
- **[#2657](https://github.com/nanocoai/nanoclaw/issues/2657) — Self-healing for OneCLI gateway dependency** — The OneCLI credential gateway (proxy for all agent API traffic) can have its worker process die while Docker marks the container as `Up` — Docker's `restart:` policy doesn't fire because the container isn't technically unhealthy in Docker's assessment. The issue requests proactive supervision and fail-fast for agent containers on connection loss.
- **[#2655](https://github.com/nanocoai/nanoclaw/issues/2655) — OneCLI gateway hard-exits on fd exhaustion (1024 soft limit)** — Under burst load, OneCLI hits the default 1024 file-descriptor soft limit and hard-exits with `EMFILE` (os error 24), causing silent total agent API outage.

**Underlying pattern:** A real production failure cascaded through multiple layers — fd exhaustion killed OneCLI, the gateway went down with no Docker restart, and the single-threaded host architecture amplifies the blast radius. The reporter is working backwards through the failure chain to surface each contributing weakness.

---

## 5. Bugs & Stability

Ranked by severity, the May 31 issues reveal a critical stability cluster:

| Severity | Issue | Description | Fix PR |
|----------|-------|-------------|--------|
| 🔴 Critical | [#2655](https://github.com/nanocoai/nanoclaw/issues/2655) | OneCLI gateway hard-exits on fd exhaustion under burst load → silent total agent outage | None yet |
| 🔴 Critical | [#2657](https://github.com/nanocoai/nanoclaw/issues/2657) | No self-healing for OneCLI gateway failure; agent containers don't fail-fast on lost connection | None yet |
| 🟠 High | [#2665](https://github.com/nanocoai/nanoclaw/issues/2665) | Host event loop freezes from unbounded awaits or sync ops; /health undetectable | None yet |

Additionally:
- **[#2659](https://github.com/nanocoai/nanoclaw/pull/2659)** — open PR by `GiladShoham` fixing container reaping on hosts where `docker stop`/`kill` returns `permission denied` (e.g., unprivileged LXC/VMs), silently leaking orphan containers each restart.
- **[#2656](https://github.com/nanocoai/nanoclaw/pull/2656)** — open PR by `MoonCaves` fixing mnemon setup running in `entrypoint.sh` when the host overrides it at spawn, causing hooks to never register.

**Assessment:** The fd-exhaustion and self-healing gaps have no fix PRs yet and represent production-critical risks. The container-reaping and mnemon PRs address lower-severity but real deployment bugs.

---

## 6. Feature Requests & Roadmap Signals

Several open PRs signal near-term capability expansion:

- **HTTP/SSE MCP server support** ([#2662](https://github.com/nanocoai/nanoclaw/pull/2662), `GiladShoham`) — Extends `McpServerConfig` from stdio-only to a union type supporting HTTP and SSE transports. This is significant as the MCP ecosystem increasingly hosts servers remotely; landing this PR would unblock a major class of integrations.
- **Per-group skills as Claude Code slash commands at spawn** ([#2661](https://github.com/nanocoai/nanoclaw/pull/2661), `GiladShoham`) — Makes per-group skills visible inside containers by symlinking them into `~/.claude/skills/`, closing a discoverability gap in the multi-group workflow.
- **External symlink mount for per-group skills** ([#2660](https://github.com/nanocoai/nanoclaw/pull/2660), `GiladShoham`) — Resolves symlinks to external skill libraries so they resolve correctly inside the container. Together with the two PRs above, this forms a cohesive **per-group skill extensibility push**.
- **Browser sidecar in v2 container + skills baking** ([#2664](https://github.com/nanocoai/nanoclaw/pull/2664), `whahnize`) — Brings cf-fetch/nodriver browser scraping in-container and pre-bakes web-fetch, NotebookLM, Mer audio, and Paris rental skills.

**Prediction:** The MCP transport union type (#2662) and per-group skill wiring PRs (#2661, #2660) are likely candidates for the next wave given their focused scope and clear problem statements (~GiladShoham contributed three closely related PRs on the same day).

---

## 7. User Feedback Summary

The dominant user pain points from this window:

- **Silent failure modes under load** — The most acute frustration is that the system can experience total agent outage (gateway exits, containers unresponsive) with no automatic recovery. Users deploying NanoClaw as an always-on personal assistant expect resilience, not silent death.
- **Single-threaded host as a reliability liability** — The Node.js event loop isn't inherently problematic, but the absence of circuit-breakers or stall detection in `/health` means failures propagate invisibly.
- **Deployment correctness in non-standard environments** — The mnemon/hooks gap (#2656) and unprivileged container reaping failure (#2659) suggest the project is being deployed on diverse hosts (LXC, custom VMs) where assumptions about Docker ENTRYPOINT and process signaling don't hold. Users need the project to be robust across these environments.
- **MCP ecosystem interoperability** — Users want to connect to remote MCP servers (HTTP/SSE), not just stdio locals. This is a gap between current config surface and growing ecosystem expectations.
- **Skill discoverability** — Per-group skills that are mounted but invisible as Claude Code slash commands confuse contributors and users alike.

**Satisfaction signals:** Contributors are submitting well-structured PRs with clear problem statements and minimal diffs. The project appears to have an active contributor base that understands the codebase well enough to identify and fix non-trivial bugs across the stack (channel adapters, container lifecycle, skill mounting, entrypoint contract).

---

## 8. Backlog Watch

| Item | Risk | Notes |
|------|------|-------|
| [#2655](https://github.com/nanocoai/nanoclaw/issues/2655) — Gateway fd exhaustion | 🔴 New, no engagement | Production-impacting silent outage with zero comments. Needs maintainer triage on fd limit configuration and graceful degradation. |
| [#2665](https://github.com/nanocoai/nanoclaw/issues/2665) — Host loop freeze | 🟠 New, no engagement | Architectural concern. May require discussion on whether to add async bounds checking, worker threads for blocking ops, or health-stall detection. |
| [#2657](https://github.com/nanocoai/nanoclaw/issues/2657) — OneCLI self-healing | 🟠 New, no engagement | Needs custom gateway health supervision beyond Docker's built-in checks. |

All three issues from `mshirel` have **0 comments** as of this digest. They form a logical triad that should ideally be tackled together — fixing just one (e.g., fd limits) without the others (self-healing, stall detection) leaves the system fragile. Maintainer attention to this cluster is recommended within the next 1–2 weeks to prevent contributor frustration from the reporter, who is clearly investing significant effort in diagnosis.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest — 2026-06-01

---

## 1. Today's Overview

NullClaw saw modest activity on the final day of May, with 2 new issues reported and no pull requests or releases. Both issues were filed by the same contributor (`weissfl`) on 2026-05-31 and focus on Telegram integration gaps — one around UX feedback (typing indicator) and one around a functional failure (agent cron jobs silently dropping subprocesses). The absence of any PR activity or recent releases suggests the project may be in a light maintenance or pre-release phase. Overall project health appears stable but these two issues point to meaningful delivery-and-feedback regressions that affect core user interaction loops on Telegram.

---

## 2. Releases

No new releases today.

---

## 3. Project Progress

No pull requests were merged or closed today. There were zero open PRs updated in the last 24 hours, indicating no active code contribution cycle at this time.

---

## 4. Community Hot Topics

- **[#942 — Telegram: missing typing indicator when pressing inline buttons (callback_query)](https://github.com/nullclaw/nullclaw/issues/942)** — *weissfl, 2026-05-31, 0 comments, 👍 0*
A UX gap: unlike regular text messages, inline keyboard button presses in Telegram don't trigger the "typing…" indicator while the agent processes the request. This breaks the established Telegram bot convention and leaves users without feedback during what may be a multi-second processing window.

- **[#941 — Agent-type cron jobs don't spawn a subprocess — Telegram delivery never happens](https://github.com/nullclaw/nullclaw/issues/941)** — *weissfl, 2026-05-31, 0 comments, 👍 0*
A functional defect where scheduled agent jobs (`job_type: "agent"` + `delivery_mode: "always"` + `delivery_channel: "telegram"`) are marked complete but the subprocess is never invoked, so no Telegram message ever arrives despite the schedule reporting success.

**Analysis:** Both issues stem from the same contributor within hours of each other, suggesting systematic testing of Telegram delivery flows. The underlying user need is reliable, two-way agent-to-user communication — especially for time-sensitive scheduled tasks and interactive button-based agent sessions. These are likely high-priority pain points for users who depend on Telegram as their primary NullClaw interface.

---

## 5. Bugs & Stability

| Severity | Issue | Description |
|----------|-------|-------------|
| 🔴 **High** | [#941](https://github.com/nullclaw/nullclaw/issues/941) | Agent cron jobs silently fail — subprocess never spawned, delivery never attempted despite schedule marking completion. This is a silent data/functionality loss. |
| 🟡 **Medium** | [#942](https://github.com/nullclaw/nullclaw/issues/942) | Missing typing indicator on inline button callback in Telegram — breaks UX convention, may cause users to think the bot is unresponsive during processing. |

**Fix PRs:** None exist for either issue as of today.

---

## 6. Feature Requests & Roadmap Signals

Both issues are filed as bugs, but the underlying requests reveal roadmap-adjacent needs:

- **Reliable Telegram delivery for scheduled agent flows** (#[#941](https://github.com/nullclaw/nullclaw/issues/941)) — This may drive infrastructure work around process management for cron jobs, which could expand to other delivery channels.
- **Consistent UX signals in Telegram** (#[#942](https://github.com/nullclaw/nullclaw/issues/942)) — Broader work to unify Telegram inline/text/callback UX parity may be upcoming.

Neither issue should require a major architectural change but both likely fit into a point release focused on Telegram reliability.

---

## 7. User Feedback Summary

- **Pain point 1 — Silent failure of scheduled tasks:** Users configuring agent-type cron jobs with Telegram delivery have no idea messages aren't being sent. The scheduler reports completion, creating a false sense of reliability. This is a critical trust issue.
- **Pain point 2 — Missing interaction feedback:** Users pressing inline buttons see no visual cue that the agent is working — unlike the text-input path, where the typing indicator works correctly.
- **Satisfaction signal:** No positive feedback or expressions of satisfaction were recorded today. The feedback is exclusively problem-focused from a single active contributor.

---

## 8. Backlog Watch

Both reported issues are less than 24 hours old and have not yet received maintainer responses. No long-stale issues surfaced in the default-sort feed today, but given the urgency of issue #941 (silent delivery failure), early maintainer triage is recommended to:

1. Confirm the subprocess-spawn defect and tag a release milestone.
2. Assess whether the same issue affects non-Telegram delivery channels.
3. Clarify on #942 whether the missing typing indicator is a Telegram adapter regression or a never-implemented feature.

---

*Data snapshot: 2026-06-01. Source: [github.com/nullclaw/nullclaw](https://github.com/nullclaw/nullclaw). Generated by OWL.*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-06-01

**Repository:** [nearai/ironclaw](https://github.com/nearai/ironclaw)

---

## 1. Today's Overview

IronClaw is in a period of very high engineering throughput. In the past 24 hours the project saw **25 PRs updated** (18 open, 7 merged/closed) and **3 issues touched**, with zero new releases shipped. The PR volume is dominated by the ongoing "Reborn" architecture migration — a large-scale refactor spanning triggers, outbound communication, auth/account projection, and the Slack ProductAdapter. The [nightly E2E pipeline is red](https://github.com/nearai/ironclaw/issues/4108), which is a yellow flag for merge gating. Dependency churn is also heavy, with multiple Dependabot groups (tokio, wasm, serialization, agent-client-protocol) still awaiting merge. Overall: high-velocity active development, but integration stability is currently strained.

---

## 2. Releases

**No new releases today.** There are no pending release notes, migration guides, or version bumps to report. The last release visible in the data window remains within the v0.25.x series.

---

## 3. Project Progress

Seven PRs were closed/merged in the last 24 hours. The highlights:

| PR | Status | Area | Advances |
|---|---|---|---|
| **#4263** [feat(triggers): add libsql repository](https://github.com/nearai/ironclaw/pull/4263) | ✅ Merged | Reborn triggers | First durable `TriggerRepository` backend (libSQL) for the new triggers crate. Backend 1 of N. Does not yet wire polling or lifecycle. |
| **#4262** [feat(outbound): add resolution engine](https://github.com/nearai/ironclaw/pull/4262) | ✅ Merged | Reborn outbound | P0 outbound communication resolution engine inside `ironclaw_outbound`. Selects `CommunicationDeliveryCandidate` or `NoDelivery`; no payload rendering, no policy validation yet. |
| **#4257** [feat(reborn): wire AuthPromptView + WebUI OAuth card](https://github.com/nearai/ironclaw/pull/4257) | ✅ Merged | Auth / WebUI v2 | Wire-shape changes for GSuite OAuth, Notion MCP OAuth, and GitHub PAT flows in the WebUI v2 auth surface. |
| **#4033** [chore(deps): bump everything-else group (45 updates)](https://github.com/nearai/ironclaw/pull/4033) | ✅ Merged | Dependencies | Brings 45 transitive and direct dependency updates, including `agent-client-protocol 0.10.2 → 0.11.1`. |
| **#4000** [chore(deps): bump serde_json](https://github.com/nearai/ironclaw/pull/4000) | ✅ Merged | Dependencies | `serde_json 1.0.149 → 1.0.150`. |

**Key takeaway:** The "Reborn" rewrite is making its first integration milestones — trigger persistence and outbound resolution engines are now on `main`. The async-stack is maturing but none of the major adapter surfaces (Slack, outbound delivery with rendering, trigger polling) are yet production-ready.

---

## 4. Community Hot Topics

**Issue [#2923](https://github.com/nearai/ironclaw/issues/2923) — "Bug: stdio MCP activation fails with 'Failed to discover authorization endpoints'"**
- **Status:** Open · 👍: 1 · 4 comments · Created 2026-04-24, last updated 2026-05-31
- **Why it matters:** This is a re-open of a previously closed issue (#2474). The reporter asserts that stdio transport IS supported end-to-end as of v0.25.0 and that the failure is strictly in the activation pre-flight path. It highlights a gap between transport support and MCP activation ergonomics — a meaningful usability regression for anyone wiring local MCP servers.

**Issue [#4108](https://github.com/nearai/ironclaw/issues/4108) — "Nightly E2E failed"**
- **Status:** Open · 0 comments · Opened 2026-05-27
- The nightly E2E suite is failing on commit `749f5844` across all extension E2E jobs. No community troubleshooting comments yet — likely an automated-noise issue at the moment, but it blocks confident merging. If it persists, it will become a high-visibility stability concern.

**PR [#4270](https://github.com/nearai/ironclaw/pull/4270) — "feat(triggers): add postgres repository parity"**
- **Status:** Open (just opened today) · size: L
- Second durable trigger backend (PostgreSQL via `deadpool_postgres::Pool`). Keeps the repo layer composition-owned rather than hard-wired to URL parsing. This signals the project is planning for multiple production-grade persistence backends for triggers.

---

## 5. Bugs & Stability

| Severity | Issue | Status | Fix PR? |
|---|---|---|---|
| 🔴 **Medium-High** | [#2923 — stdio MCP activation pre-flight fails](https://github.com/nearai/ironclaw/issues/2923) | Open, re-filed | None identified |
| 🟡 **Medium** | [#4108 — Nightly E2E red](https://github.com/nearai/ironclaw/issues/4108) | Open, no human response | None identified |
| 🟢 **Low** | [#3289 — Reborn secrets/OAuth/auth migration](https://github.com/nearai/ironclaw/issues/3289) | **Closed** | Merged via multiple PRs (#4239, #4257, #4269 open) |

**Stability signal:** The E2E failure is the most operationally urgent item — it gates the confidence of all concurrent merges. The stdio MCP bug (#2923) has been alive since April 24 and was erroneously closed once already; it deserves a maintainer triage label and a linked tracking PR.

---

## 6. Feature Requests & Roadmap Signals

Based on open issues and PRs currently in motion, the next release (likely v0.26.0 or a Reborn-milestone tag) is expected to include:

1. **Slack Events API host ingress** — PR [#4272](https://github.com/nearai/ironclaw/pull/4272) is the first Reborn ingress slice for Slack, stacked on the ProductAdapter core PR [#4035](https://github.com/nearai/ironclaw/pull/4035). Expect Slack as a first-class Reborn product channel.

2. **Outbound delivery with policy validation** — PR [#4271](https://github.com/nearai/ironclaw/pull/4271) adds the outbound validation bridge (Phase 6 / PR 6). This connects resolved delivery candidates to the existing policy path without full adapter rendering yet — suggesting full outbound delivery with validation is one or two PRs away.

3. **Auth-flow UX re-platform (Reborn)** — Multiple stacked PRs (#4239, #4269, #4256 E2E tests, [#4184](https://github.com/nearai/ironclaw/pull/4184) unified diff previews) are converging on a re-architected credential/OAuth/auth-prompt product surface. This is the most active subsystem by PR count.

4. **PostgreSQL trigger persistence** — PR [#4270](https://github.com/nearai/ironclaw/pull/4270) lands today; this is a feature addition, not a request, but it signals multi-backend trigger support is a design priority heading into the next minor version.

---

## 7. User Feedback Summary

- **MCP stdio activation pain** ([#2923](https://github.com/nearai/ironclaw/issues/2923)): A user hitting the stdio MCP auth pre-flight failure could not get help — the original issue was closed without maintainer action. This is a pattern risk: if community-bug reports keep getting closed based on contributor comments, trust erodes.

- **E2E reliability** ([#4108](https://github.com/nearai/ironclaw/issues/4108)): No human has responded to the nightly E2E failure yet. Contributors opening PRs (25 in 24h) cannot be sure their CI results are meaningful until this is greened. This is an internal contributor experience issue, not an end-user one, but it directly impacts shipping velocity.

- **Dependency freshness**: Dependabot is generating high-PRs across multiple dependency groups (action groups, tokio, wasm, serialization). Several are open and stale — the community expects these to be reviewed regularly. `agent-client-protocol` bumped from `0.10.2 → 0.11.1` may warrant a compatibility audit given IronClaw's heavy MCP integration surface.

- **Satisfaction pulse**: The Reborn architecture work shows the team is investing heavily in long-term maintainability and multi-backend flexibility (libSQL + Postgres triggers, product-auth projection seams). This is a positive structural signal, but the high open-PR count (18) with no new release suggests users are currently consuming bleeding-edge `main` builds rather than stable tagged releases.

---

## 8. Backlog Watch

| Item | Age | Why It Needs Attention |
|---|---|---|
| [#2923](https://github.com/nearai/ironclaw/issues/2923) — stdio MCP auth failure | **38 days** (opened 2026-04-24) | Re-opened after erroneous closure; no maintainer response or linked fix PR. Affects a core MCP workflow. |
| [#4108](https://github.com/nearai/ironclaw/issues/4108) — Nightly E2E red | **4 days** (opened 2026-05-27) | Zero human comments. Until diagnosed, it calls into question the reliability of all concurrent CI-driven merges. |
| [#3289](https://github.com/nearai/ironclaw/issues/3289) — Reborn secrets/OAuth/auth migration | **25 days** (opened 2026-05-06) | Closed on 2026-05-31 — worth verifying that the closure is correct and that all child PRs (#4239, #4269) have actually landed on main. |

**Recommendation:** Triage #2923 with a maintainer comment confirming the bug and linking a tracking PR. Investigate E2E failure root cause before the next batch of stacked PR merges.

---

*Generated by OWL · Data snapshot: 2026-06-01 · Source: [nearai/ironclaw](https://github.com/nearai/ironclaw)*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-06-01

## 1. Today's Overview

LobsterAI maintained a low-activity posture on this reporting date. No issues were updated in the past 24 hours, and no new releases were published. Pull request activity was minimal with a single PR (#1465) receiving an update — marking the only notable noise on the board. The project appears to be in a stabilization or maintenance window: developer attention is focused on a long-standing bug fix rather than feature development. Overall community momentum is quiet but not dormant; one contributor is actively working on a relevant stability issue.

---

## 2. Releases

**None.** No new releases were published on or around 2026-06-01. Users should continue on the last published version and watch for the upcoming release containing the fix introduced by PR #1465.

---

## 3. Project Progress

Today reflects a single open PR that was updated rather than merged:

- **[PR #1465 [OPEN] [stale]** — `fix(scheduled-tasks): 已删除的定时任务重启后作为幽灵会话重新出现` — linlihua has submitted a fix for a data-cleanup gap in the scheduled-task deletion flow. When a user deletes a timed task, only `cron.remove` (gateway side) is called, but the local SQLite `cowork_sessions` record created by `resolveOrCreateCronSession()` is never cleaned up. On restart, these orphaned sessions reappear as ghost entries. **Status:** This PR has been open since April 4 (nearly two months), was last updated on May 31, and carries a "stale" label, indicating attention is needed soon to prevent it from being closed without review.

---

## 4. Community Hot Topics

**There were no new or actively discussed issues/updated today.** The only item with recent activity is PR #1465, which has 0 upvotes/reactions and no comments filed as of this report.

| Item | Activity | Signals Addressed |
|------|----------|-------------------|
| **[PR #1465](https://github.com/netease-youdao/LobsterAI/pull/1465) | Updated (2026-05-31) | Data cleanup gap — ghost sessions reappearing after restart after scheduled task deletion |

---

## 5. Bugs & Stability

### **Bug Report — PR #1465 [OPEN]**

- **Severity:** Medium — Data persistence bug
- **Issue ID:** Linked to Issue [#1359](https://github.com/netease-youdao/LobsterAI/issues/1359)
- **Description:** Deleted scheduled tasks reappear as ghost sessions with empty content after app restart. The root cause has been identified: the deletion flow only calls `cron.remove` in the OpenClaw gateway but fails to clean up the corresponding local SQLite `cowork_sessions` record.
- **Fix Status:** A fix PR (#[1465](https://github.com/netease-youdao/LobsterAI/pull/1465)) has been submitted. **Fix PR Status:** Open, stale (9 weeks old; last activity May 31)

**Priority Assessment:** Users who rely heavily on scheduled tasks may find their session list polluted. This should be merged in the next patch release.

---

## 6. Feature Requests & Roadmap Signals

No new feature requests were filed or discussed today. The current contributor activity is focused on bug resolution rather than feature development. Future releases may prioritize:
- Improvements to scheduled-task lifecycle management (prompted by this bug)
- Better session state management after the ghost-session issue highlighted in PR #1465. The long-standing nature of this bug and its clear root-cause analysis suggest the next version will include at least this stability fix.

---

## 7. User Feedback Summary

**User Pain Points:**
- **Ghost sessions after restart** (linked to [#1359](https://github.com/netease-youdao/LobsterAI/issues/1359)): Users report that deleting scheduled tasks doesn't fully clean up after itself — sessions reappear after restarts. This has been a known issue since at least April 2026, indicating moderate frustration among users who manage task deletions regularly.
- The 0.0 upvote rate on the fix PR suggests limited community visibility; broader user base may not yet realize a fix is available.

---

## 8. Backlog Watch

### PR #1465 — Near-Stale Priority Item
- **URL:** [netease-youdao/LobsterAI PR #1465](https://github.com/netease-youdao/LobsterAI/pull/1465)
- **Age:** ~8 weeks old (Created 2026-04-04)
- **Status:** Labeled `[stale]` — at risk of auto-closure
- **Why it matters:** This PR fixes a data-local-session cleanup bug that has been open since April 4. Without timely review and merge, the fix may be lost, pushing the problem to the next cycle.
- **Recommended Action:** Maintainer should review and merge this PR promptly to prevent further session-state issues from accumulating.
- No other long-unanswered issues were identified in this reporting period.

---

*Digest generated by OWL — ZOO Company*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-06-01

---

## 1. Today's Overview

Moltis experienced very low activity over the past 24 hours, with no issues opened or updated and zero new releases. A single pull request remains open, targeting improved OpenAI Codex provider integration. The team appears focused on polish and provider-level correctness rather than feature expansion at this time. Overall project health is stable but quiet. The absence of new issues and zero closed PRs today suggests a brief lull or focused review period ahead of a future release.

---

## 2. Releases

None. No new versions were published today.

---

## 3. Project Progress

No PRs were merged or closed today. The single open PR (#1088) is still under authoring/review and was updated on 2026-05-31 with no merge activity recorded for today.

---

## 4. Community Hot Topics

Activity is minimal today; there are no issues with comments or reactions. The topic of interest is:

- **[PR #1088](https://github.com/moltis-org/moltis/pull/1088)** — [codex] Handle OpenAI Codex final tool-call arguments  
  - Author: s-salamatov  
  - Summary: Recording `response.function_call_arguments.done` payloads, synthesizing streaming argument deltas when absent, and ensuring empty argument strings are handled in decode diagnostics.  
  - Status: Open, 0 comments, 👍 0  
  - Analysis: The work reflects ongoing investment in OpenAI Codex reliability and streaming consistency. It doesn't yet have community engagement, suggesting it is either very recent or narrowly scoped.

---

## 5. Bugs & Stability

No new bugs, crashes, or regressions were reported today (0 issues created or updated). The stability surface area is clean. However, PR #1088 addresses a gap where:

- **Final tool-call arguments may not be properly recorded**
- **Empty argument strings may bypass decode diagnostics**

This can be viewed as a latent correctness/stability fix once merged. The author is handling it proactively; no other bug-fix PRs are in-flight.

---

## 6. Feature Requests & Roadmap Signals

No new feature requests were surfaced today. The clear signal from existing work is:

- **Deepening OpenAI Codex provider support**, especially around:
  - Robust argument streaming/finalization
  - Diagnostics for missing or empty arguments

Based on current direction, the next version is likely to emphasize:

- **Provider reliability and edge-case handling** (rather than headline features)
- **Stronger streaming and Codex compatibility**, likely in an incremental patch/minor release

---

## 7. User Feedback Summary

There is no explicit user feedback recorded today (0 issues). From PR #1088, we can infer underlying pain points:

- **Tool-call argument edge cases** (missing/empty arguments) may be causing unreported developer or integration issues
- **Streaming argument gaps** in OpenAI Codex context could be affecting reliability for agent frameworks built on Moltis

The pace of issue reporting is either very low, or users are relying directly on maintainer and contributor initiative to address these integrations.

---

## 8. Backlog Watch — Long-unanswered or Needs Attention

- **[PR #1088](https://github.com/moltis-org/moltis/pull/1088)** — [codex] Handle OpenAI Codex final tool-call arguments
  - Created: 2026-05-31  
  - Status: Open, updated 2026-05-31, no comments or reactions yet  
  - Risk: Although very recent, this PR tangibly affects provider reliability. Given today's low activity, it is worth a prompt review cycle to:
    - Validate the argument delta synthesis approach
    - Ensure decode diagnostics for empty arguments are consistent with existing error handling
  - Recommendation: Triage in the next 48 hours to keep momentum on Codex provider correctness.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-06-01

---

## 1. Today's Overview

CoPaw showed high community activity today with **23 issues touched** (18 still open, 5 closed) and **4 pull requests updated** (3 open, 1 merged/closed). The project is experiencing a concentrated wave of bug reports around three themes: **Windows desktop experience** (shell window flashing, process leaks, ghost skills), **cron/session reliability** (orphaned jobs, shared session interruption, partial workspace failure), and **v1.1.9 regressions** (system-level fallback messages). No new releases were published today, suggesting the team is still triaging the fallout from the v1.1.9 rollout. Community engagement is healthy — several issues have gathered multiple comments and reactions quickly, indicating active user testing.

---

## 2. Releases

**No new releases today.** The latest version in the wild appears to be **v1.1.9** (Desktop Tauri build) based on the issue reports, with **v1.1.8.post1** also still in use.

---

## 3. Project Progress

### Merged / Closed Today

| # | Item | Details |
|---|------|---------|
| PR [#4810](https://github.com/agentscope-ai/CoPaw/pull/4810) | **feat(console): improve chat slash skill suggestions** | Merged. Adds current-agent skills to `/` slash command suggestions, shows only skill names for compactness, limits popup to 5 items with scrolling, adds debug logs for skill loading/filtering. Addresses [#4796](https://github.com/agentscope-ai/CoPaw/issues/4796). |
| Issue [#4829](https://github.com/agentscope-ai/CoPaw/issues/4829) / [#4828](https://github.com/agentscope-ai/CoPaw/issues/4828) | **Windows cmd window flash on shell execution** | Closed (duplicate consolidation). Root cause identified: subprocess missing `CREATE_NO_WINDOW` flag (`0x08000000`). A separate bug report [#4832](https://github.com/agentscope-ai/CoPaw/issues/4832) remains open with more detail. |
| Issue [#4653](https://github.com/agentscope-ai/CoPaw/issues/4653) | **Cron jobs interrupted by user messages via shared session** | Closed. 8 comments exchanged — likely fixed or addressed in a recent patch. |
| Issue [#4649](https://github.com/agentscope-ai/CoPaw/issues/4649) | **Orphaned cron jobs not cleaned up from APScheduler** | Closed. Active discussion (5 comments) around ghost jobs running indefinitely after `jobs.json` updates. |
| Issue [#4789](https://github.com/agentscope-ai/CoPaw/issues/4789) | **Feature request: per-conversation delete/rollback like TRAE** | Closed (8 comments, 👍1). Given the breadth of the request (per-message rollback, file rollback, sandbox management, local dir linking), this was likely closed as "out of scope for now" or moved to a tracking issue. |

### Active PRs Under Review

| # | PR | Status | Notes |
|---|-----|--------|-------|
| [#4821](https://github.com/agentscope-ai/CoPaw/pull/4821) | **feat(feishu): add group session sharing mode** | OPEN | Adds `share_session_in_group` toggle for Feishu (Lark) channel. Follows WeWork channel pattern. |
| [#4433](https://github.com/agentscope-ai/CoPaw/pull/4433) | **Add token usage info output in each conversation** | OPEN, Under Review (since May 15) | Adds per-turn provider usage, context-window estimation, floating token badge (bottom-right overlay), markdown usage note through streaming. A significant UX improvement. |
| [#4812](https://github.com/agentscope-ai/CoPaw/pull/4812) | **fix(website): header style, add auto continue video** | OPEN | Website/frontend polish, non-critical. |

---

## 4. Community Hot Topics

### 🔥 Cron & Session Reliability Cluster

Multiple interconnected issues reveal a systemic fragility in how CoPaw manages scheduled tasks and sessions:

- **[#4653](https://github.com/agentscope-ai/CoPaw/issues/4653)** — Cron jobs interrupted by user messages (8 comments, closed) — fundamental session isolation issue
- **[#4649](https://github.com/agentscope-ai/CoPaw/issues/4649)** — Orphaned cron jobs after `jobs.json` updates (5 comments, closed)
- **[#4835](https://github.com/agentscope-ai/CoPaw/issues/4835)** — One invalid job in `jobs.json` crashes entire workspace
- **[#4666](https://github.com/agentscope-ai/CoPaw/issues/4666)** — Models config page lost after new session (5 comments)

**Underlying need:** Users are building sophisticated automated workflows (stock market data, parenting tips, scheduled scripts) and need **robust, isolated cron execution** with graceful error handling. The current APScheduler integration lacks job lifecycle management, validation, and session isolation. This is arguably the highest-impact stability area.

### 🖥️ Windows Desktop Experience

- **[#4828](https://github.com/agentscope-ai/CoPaw/issues/4828) / [#4829](https://github.com/agentscope-ai/CoPaw/issues/4829) / [#4832](https://github.com/agentscope-ai/CoPaw/issues/4832)** — Cmd window flashing on shell execution
- **[#4839](https://github.com/agentscope-ai/CoPaw/issues/4839)** — Ghost builtin skill dirs after pip upgrade on Windows (`~`-prefixed stale dirs)

**Underlying need:** Windows users expect a polished desktop experience. The Tauri app is gaining traction but has clear rough edges in subprocess management and package upgrade hygiene.

### 🔌 ACP / Claude Code Interop

- **[#4824](https://github.com/agentscope-ai/CoPaw/issues/4824)** — ACP connection to Claude Code protocol mismatch

**Underlying need:** Users want QwenPaw as a universal agent harness that can delegate to various external agents (Claude Code, etc.) via ACP. Protocol compatibility testing and CI coverage is needed.

---

## 5. Bugs & Stability

Ranked by severity:

| Severity | Issue | Description | Fix PR? |
|----------|-------|-------------|---------|
| 🔴 **Critical** | [#4835](https://github.com/agentscope-ai/CoPaw/issues/4835) | Single invalid job in `jobs.json` **crashes entire workspace startup** | No |
| 🔴 **Critical** | [#4666](https://github.com/agentscope-ai/CoPaw/issues/4666) | Models config page broken ("Load failed") after new session creation — requires restart | No |
| 🔴 **Critical** | [#4845](https://github.com/agentscope-ai/CoPaw/issues/4845) | **Security**: WeWork channel lacks memory isolation — prompt injection can leak other users' chat history | No |
| 🟠 **High** | [#4837](https://github.com/agentscope-ai/CoPaw/issues/4837) | v1.1.9 regression: frequent fallback "无法处理您的问题" messages replacing real agent responses | No |
| 🟠 **High** | [#4833](https://github.com/agentscope-ai/CoPaw/issues/4833) | Memory compaction fails in `pre_reasoning hook` | No |
| 🟠 **High** | [#4842](https://github.com/agentscope-ai/CoPaw/issues/4842) | MCP server process explosion with 300+ agents — resource exhaustion | No |
| 🟠 **High** | [#4834](https://github.com/agentscope-ai/CoPaw/issues/4834) | MCP server processes accumulate across restarts (e.g., `firecrawl-mcp: 9 processes`) | No |
| 🟡 **Medium** | [#4832](https://github.com/agentscope-ai/CoPaw/issues/4832) | Windows: `CREATE_NO_WINDOW` flag missing — cmd window flashes on every shell command | No (known fix: pass `0x08000000`) |
| 🟡 **Medium** | [#4839](https://github.com/agentscope-ai/CoPaw/issues/4839) | Windows pip upgrade leaves ghost `~`-prefixed skill dirs | No |
| 🟡 **Medium** | [#4844](https://github.com/agentscope-ai/CoPaw/issues/4844) | Windows: browser processes and temp dir locks persist after session ends | No |
| 🟡 **Medium** | [#4824](https://github.com/agentscope-ai/CoPaw/issues/4824) | ACP protocol version format mismatch with Claude Code (`string` vs `number`) | No |

---

## 6. Feature Requests & Roadmap Signals

| Issue | Request | Likelihood in Next Version | Rationale |
|-------|---------|---------------------------|-----------|
| [#4836](https://github.com/agentscope-ai/CoPaw/issues/4836) | **On-demand tool definition loading** — reduce initial context by 55-65% (~20-25K tokens) | **High** | Well-scoped optimization with clear metrics; directly addresses cost/performance pain for tool-heavy users |
| [#4840](https://github.com/agentscope-ai/CoPaw/issues/4830) | **Desktop output local paths as clickable links** | **Medium** | UX polish for desktop, small implementation scope |
| [#4843](https://github.com/agentscope-ai/CoPaw/issues/4843) | **Configurable chat modes**: Interrupt / Queue / Insert | **Medium** | Directly tied to the cron/session isolation issues; addresses a real concurrency UX gap |
| [#4830](https://github.com/agentscope-ai/CoPaw/issues/4830) | Desktop paths as clickable links in chat output | **Medium** | Desktop UX improvement |
| [#4831](https://github.com/agentscope-ai/CoPaw/issues/4831) | Pre-install `psycopg2-binary`, `pytz`, `mootdx` in Docker image | **Low-Medium** | Easy Dockerfile change but somewhat niche; could have supply-chain/security implications |
| [#4838](https://github.com/agentscope-ai/CoPaw/issues/4838) | Suppress final text response after tool calls in interactive channels | **Low-Medium** | Useful for "silent tool execution" channel behavior; simple config toggle |
| [#4841](https://github.com/agentscope-ai/CoPaw/issues/4841) | "Before You Build" skill proposal | **Low** | Community contribution, needs review |

**Prediction for next release:** The v1.1.10 (or v1.2.0) release will likely prioritize:
1. **v1.1.9 regression fixes** (fallback message bug, memory compaction hook)
2. **Windows subprocess fix** (`CREATE_NO_WINDOW`) — low effort, high impact
3. **`jobs.json` validation hardening** — one invalid job crashing the workspace is unacceptable for a tool targeting automated workflows
4. **On-demand tool loading** (#4836) if the team prioritizes performance/optimization

---

## 7. User Feedback Summary

### Pain Points

- **"v1.1.9 broke my daily stock analysis workflow"** — A recurring user profile (`feng183043996`) has filed multiple interconnected issues around cron reliability, MCP server accumulation, Docker image missing packages, and workspace crashes. This user is running **production-grade automated workflows** (A股 market data, PostgreSQL, timezone-aware scheduling) and is hitting hard edges in what feels like a tool oscillating between "local chat assistant" and "reliable automation platform." **(Issues: [#4653](https://github.com/agentscope-ai/CoPaw/issues/4653), [#4649](https://github.com/agentscope-ai/CoPaw/issues/4649), [#4831](https://github.com/agentscope-ai/CoPaw/issues/4831), [#4834](https://github.com/agentscope-ai/CoPaw/issues/4834), [#4835](https://github.com/agentscope-ai/CoPaw/issues/4835), [#4836](https://github.com/agentscope-ai/CoPaw/issues/4836))**

- **"The Windows desktop app feels alpha"** — Multiple users reporting visual glitches (cmd window flashing), upgrade artifacts (ghost skills), and process leaks on Windows. The Tauri desktop wrapper is clearly gaining users but needs platform-specific QA. **(Issues: [#4828](https://github.com/agentscope-ai/CoPaw/issues/4828), [#4832](https://github.com/agentscope-ai/CoPaw/issues/4832), [#4839](https://github.com/agentscope-ai/CoPaw/issues/4839), [#4844](https://github.com/agentscope-ai/CoPaw/issues/4844))**

- **"ACP interop is broken"** — Users trying to use QwenPaw as a multi-agent orchestrator are hitting protocol compatibility issues with Claude Code. **(Issue: [#4824](https://github.com/agentscope-ai/CoPaw/issues/4824))**

### Satisfaction Signals
- The **slash command skill suggestions** PR (#4810) was merged smoothly — small UX iteration delivered quickly.
- Active engagement on issues (8 comments on cron issues, 5 on config issues) suggests a motivated, technically literate user base willing to provide detailed reproduction steps and logs.
- Feature requests are well-articulated with clear motivation and proposed solutions.

---

## 8. Backlog Watch

These important items need maintainer attention:

| Item | Age | Why It Matters |
|------|-----|----------------|
| **PR [#4433](https://github.com/agentscope-ai/CoPaw/pull/4433)** — Token usage visibility | Since May 15 (~17 days, still under review) | Longest-open PR with real UX value. Token cost transparency is a top community request for any AI tool. Needs review decision. |
| **Issue [#4845](https://github.com/agentscope-ai/CoPaw/issues/4845)** — WeWork session isolation / prompt injection | Created today | **Security vulnerability** in a channel used by enterprise (企业微信) users. No maintainer response yet. This should be triaged immediately. |
| **Issue [#4666](https://github.com/agentscope-ai/CoPaw/issues/4666)** — Models config lost after new session | Since May 25 (7 days) | Core configuration persistence bug. 5 comments, no resolution. Affects ability to use custom model providers. |
| **Issue [#4837](https://github.com/agentscope-ai/CoPaw/issues/4837)** — v1.1.9 fallback message regression | Since May 31 (1 day) | Actively regressing user-facing experience for all v1.1.9 desktop users. Likely a quick fix in the stream response / timeout handling logic. |

---

*Generated by OWL · 2026-06-01 · Data source: [agentscope-ai/CoPaw](https://github.com/agentscope-ai/CoPaw)*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw Project Digest — 2026-06-01

---

## 1. Today's Overview

ZeptoClaw entered June with a **quiet but focused day**. A single issue (#609) was opened and closed within the same 24-hour window, indicating a rapid, tool-assisted security audit rather than organic community activity. No pull requests or releases were published. Overall, the project appears to be in a **low-activity maintenance mode**, with automated tooling (Codex Security) surfacing security items directly. There has been no new contributor-facing engagement, suggesting a stable, potentially stalled, or winding-down phase of development.

---

## 2. Releases

**No new releases today.**  
No version changes, breaking changes, or migration notes.

---

## 3. Project Progress

### Merged/Closed PRs Today
- None recorded.

### Closed Issues
| # | Title | Status | Notes |
|---|--------|--------|-------|
| [#609](https://github.com/qhkm/zeptoclaw/issues/609) | chore(security): repository-wide Codex Security scan for webhook identity routing | ✅ Closed (same-day) | Triggered and completed via automated Codex Security scan workflow. No human discussion visible (1 comment — likely the bot response). Focus: webhook request identity through admission and routing. No PR merged, suggesting findings were either non-critical or deferred. |

**Takeaway:** The closure of #609 without a linked PR suggests the security scan either found no actionable issues or results are pending in a separate workflow. No features advanced today.

---

## 4. Community Hot Topics

### Most Active Issues (last 24h)
Only one item qualifies:

| # | Title | Comments | 👍 | Engagement |
|---|--------|----------|------|------------|
| [#609](https://github.com/qhkm/zeptoclaw/issues/609) | Codex Security scan for webhook identity routing | 1 | 0 | Minimal |

**Analysis:** The single comment was likely an automated response from the Codex tool. There is **zero organic community discussion** today. The underlying need flagged — **webhook identity verification through the admission/routing pipeline** — is a security-critical concern, but it's being addressed programmatically rather than through human triage. This raises the question: is the maintainer (qhkm) actively reviewing security findings from Codex, or are these scans running without follow-up?

---

## 5. Bugs & Stability

### Bugs Reported Today
- None reported by human contributors.

### Security Concerns
- **#609** — Webhook identity routing security scan was initiated, but severity is **unclear** since no findings were human-reviewed or discussed. No fix PR was linked.
- **No crash, regression, or stability bugs** reported.

**Risk:** Medium (low visibility, medium potential impact if vulnerabilities exist in webhook flow).

---

## 6. Feature Requests & Roadmap Signals

- **No feature requests** were filed today.
- **No signals** for next version predictability.
- The automated security audit on webhook identity routing could indicate that **the next release (if any) may include hardened webhook security**, but without maintainer commentary, this is speculative.

---

## 7. User Feedback Summary

| Pain Point / Use Case | Source | Sentiment | Notes |
|----------------------|--------|-----------|-------|
| Webhook identity scanning needed | #609 (bot) | Neutral | Automated request, no human maintainer response |

- **No real user pain points** surfaced today.
- The absence of human feedback today makes it hard to gauge community satisfaction. The last substantive user interaction data point is from the previous day's releases, which introduced significant features (desktop extensions, orchestration, self-hosted gateways). Users may still be exploring those, or engagement is cooling.

---

## 8. Backlog Watch

Given the single-issue activity today and no PRs, the backlog appears thin in terms of **new** items. However, the following structural concerns deserve attention:

- **📌 Webhook Security Posture (#609):** The Codex Security scan was opened and closed same-day with no follow-up PR. This should be monitored — if vulnerabilities were identified, they need explicit tracking. If findings were clean, the issue should note that explicitly to avoid ambiguity.
- **⏳ Release Cadence:** The last release (v0.4.0) was on May 28, 2026 — just 4 days ago. It was a substantial release (12+ new features, 3 breaking changes). Maintainers and contributors may still be processing feedback from that release, which could explain the quiet activity.
- **⚠️ No PR Activity:** Zero PRs opened or merged today. For an AI agent platform, sustained zero-PR days may signal contributor disengagement or the project consolidating after a big release.

---

## Summary

| Metric | Value |
|--------|-------|
| Issues updated | 1 (closed) |
| PRs merged | 0 |
| Releases | 0 |
| Human comments | 0 |
| 👍 reactions | 0 |
| Security flags | 1 (unresolved follow-up) |

> **📊 Project Health: Stable but quiet.** After a major release 4 days ago (v0.4.0 with desktop extensions, orchestrator architecture, and gateway improvements), ZeptoClaw is in a consolidation phase. The only activity today was an automated security webhook scan that closed without visible human review. Watch for maintainer follow-up on #609's findings and for community feedback on the recent v0.4.0 release to materialize in the coming week.

---

*Generated by OWL — ZOO Company AI Analyst*
*Data source: GitHub API snapshot for qhkm/zeptoclaw as of 2026-06-01*

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-06-01

---

## 1. Today's Overview

ZeroClaw's development activity remains intense and highly productive: **46 issues** (34 open/active, 12 closed) and **50 pull requests** (40 open, 10 merged/closed) updated in the last 24 hours. No new releases were shipped today, but a major integration branch (`#6848`) is positioned as the foundation for a future **v0.8.0-beta-2** release. The project is clearly in a feature-heavy pre-release cycle, with significant work spanning multi-tenant architecture, channel expansion, hardware/ESP32 integration, email/IMAP improvements, and critical security hardening. The volume of concurrent RFCs (#6954, #6969, #6850) signals the maintainers are systematically rearchitecting core subsystems.

---

## 2. Releases

**None.** No new versions shipped in the last 24 hours. The most advanced release candidate is being assembled on integration branch `#6848` (v0.8.0-beta-2), which remains in "DO NOT MERGE — seeking first round feedback" status.

---

## 3. Project Progress

### Merged / Closed Today (10 PRs merged/closed)

| # | Summary |
|---|---------|
| [#7029](https://github.com/zeroclaw-labs/zeroclaw/pull/7029) | **fix(zerocode):** Refresh empty states after setup on the TUI integration branch — resolves a stale UI state bug in the zerocode TUI wizard. |
| [#7044](https://github.com/zeroclaw-labs/zeroclaw/pull/7044) | **refactor(cargo):** Extract `channels-all` aggregate feature — moves channel features + email crates out of `agent-runtime` into a dedicated aggregate feature for cleaner dependency management. |

These are relatively small consolidations landed against master and the integration branch. None of the large in-flight RFCs have merged yet.

### Features Actively Advancing (open PRs)

| # | Summary |
|---|---------|
| [#6848](https://github.com/zeroclaw-labs/zeroclaw/pull/6848) | **feat(integration):** Introduce zerocode TUI, RPC socket transport, DenyWithEdit approval — integration branch for v0.8.0-beta-2. Seeking first-round feedback, not yet merge-ready. |
| [#7050](https://github.com/zeroclaw-labs/zeroclaw/pull/7050) | **feat(tts):** Transcode TTS output to OGG/Opus via ffmpeg for voice note delivery on Telegram + WhatsApp. |
| [#7021](https://github.com/zeroclaw-labs/zeroclaw/pull/7021) | **feat(channels/email):** XOAUTH2 authentication + observer mode + read-only IMAP tools for email channel. |
| [#7045](https://github.com/zeroclaw-labs/zeroclaw/pull/7045) | **feat(hardware):** Smartroom named-device tools (`set_device` / `read_device`) + peripheral wiring for `zeroclaw agent`. |
| [#7041](https://github.com/zeroclaw-labs/zeroclaw/pull/7041) | **feat(gateway):** Multi-tenant Linq channel with per-alias routing (webhook `/linq/{alias}`). |
| [#7049](https://github.com/zeroclaw-labs/zeroclaw/pull/7049) | **fix(providers):** Omit `temperature` for Kimi-k2 models in `compatible.rs` to fix 400 errors (addresses [#7022](https://github.com/zeroclaw-labs/zeroclaw/issues/7022)). |
| [#7008](https://github.com/zeroclaw-labs/zeroclaw/pull/7008) | **fix(channels):** Resolve WhatsApp LID JIDs (`*@lid`) to deliverable phone JIDs for reply delivery. |

---

## 4. Community Hot Topics

### Most-Commented Issues (community engagement)

| # | Title | Comments | Underlying Need |
|---|-------|----------|-----------------|
| [#5937](https://github.com/zeroclaw-labs/zeroclaw/issues/5937) | Refactor: Unify providers architecture & reqwest client management | 9 | The providers module has grown organically with duplicated code and inconsistent HTTP client setup. This is a systemic tech-debt issue affecting all provider integrations. |
| [#5982](https://github.com/zeroclaw-labs/zeroclaw/issues/5982) | Per-sender RBAC for multi-tenant deployments | 8 | Enterprise/multi-user deployments need role-based access control per sender (different tool sets, workspaces, rate limits, system prompts per user class). Currently ZeroClaw runs with a single global security model. |
| [#5847](https://github.com/zeroclaw-labs/zeroclaw/issues/5847) | Document `gateway.web_dist_dir` & `ZEROCLAW_WEB_DIST_DIR` | 8 👍 | Users hit a mysterious "Web dashboard not available" log message with no documentation on how to fix it. Pure documentation gap — accepted, now closed. |
| [#6909](https://github.com/zeroclaw-labs/zeroclaw/issues/6909) | Computer-use support (screen interaction like Codex/Peekaboo) | 4 | Competitive parity with OpenAI Codex and openclaw/hermes — agents that can capture screenshots and send mouse/keyboard events. |
| [#6954](https://github.com/zeroclaw-labs/zeroclaw/issues/6954) | RFC: Route scheduled tasks through orchestrator message pipeline | 3 (accepted) | Cron jobs currently bypass the orchestrator, causing a cluster of bugs (#6037, #6105, #6648, #6632, #6686). Accepted RFC. |
| [#6969](https://github.com/zeroclaw-labs/zeroclaw/issues/6969) | RFC: Unified output routing model (per-peer modality preference) | 3 | Migrators from Letta need persistent per-peer output routing preferences (voice vs. text, channel selection). Accepted RFC. |

**Analysis:** The community's most active discussions center on **multi-tenancy & RBAC** (#5982, #6954, #6969) — a clear signal that ZeroClaw is maturing toward enterprise/commercial deployment use cases beyond individual self-hosting. **Provider architecture debt** (#5937) is the top technical concern with 9 comments. **Computer-use** (#6909) reflects competitive pressure to match peers.

---

## 5. Bugs & Stability

### Open Bugs Ranked by Severity

| # | Severity | Component | Description | Fix PR? |
|---|----------|-----------|-------------|---------|
| [#7022](https://github.com/zeroclaw-labs/zeroclaw/issues/7022) | **S1 — workflow blocked** | Provider: Kimi/compatible | kimi-k2.6 fails with 400 "invalid temperature" because `compatible.rs` always sends `temperature: 0.7` | ✅ [#7049](https://github.com/zeroclaw-labs/zeroclaw/pull/7049) open |
| [#5122](https://github.com/zeroclaw-labs/zeroclaw/issues/5122) | **S2 — degraded / security** | Tool: `web_fetch` | `allowed_private_hosts` list useless for domain names resolving to private IPs — DNS re-resolution not performed | ❌ No PR |
| [#6876](https://github.com/zeroclaw-labs/zeroclaw/issues/6876) | **S1 — security gap** | Security / MCP | `risk_profile.allowed_tools` does not restrict MCP tools (only built-in tools). Semantics unclear — design or docs bug? | ❌ No PR |
| [#6720](https://github.com/zeroclaw-labs/zeroclaw/issues/6720) | **S2 — dead code** | Agent config | `[agent] context_aware_tools` config field is declared but unread — dead code since at least v0.8.0-beta-1 | ❌ No PR |
| [#4879](https://github.com/zeroclaw-labs/zeroclaw/issues/4879) | **S1 — workflow blocked** | Provider: Gemini | Gemini CLI OAuth simply not working; rate-limited on every attempt | ❌ No PR |
| [#5866](https://github.com/zeroclaw-labs/zeroclaw/issues/5866) | **S1 — workflow blocked** | Channel: Telegram | Bot ignores replies to its own messages when `mention_only=true` in groups | ❌ No PR |
| [#5962](https://github.com/zeroclaw-labs/zeroclaw/issues/5962) | **S1 — workflow blocked** | Provider: Ollama | Ollama provider call fails when tools are needed; breaks subsequent messages in same session | ❌ No PR |

### Closed Today

| # | Description |
|---|-------------|
| [#4842](https://github.com/zeroclaw-labs/zeroclaw/issues/4842) | `zeroclaw update` downloads wrong architecture binary on aarch64 (Raspberry Pi) |
| [#6647](https://github.com/zeroclaw-labs/zeroclaw/issues/6647) | Cron job output not routed to configured channels (Telegram) |
| [#5289](https://github.com/zeroclaw-labs/zeroclaw/issues/5289) | Bedrock provider sends `API_KEY` as `x-api-key` header → 403 (should use AWS SigV4 only) |
| [#5731](https://github.com/zeroclaw-labs/zeroclaw/issues/5731) | Add manifest as a provider |
| [#5843](https://github.com/zeroclaw-labs/zeroclaw/issues/5843) | Model-wise reasoning configuration |
| [#6883](https://github.com/zeroclaw-labs/zeroclaw/issues/6883) | RFC: Shared reply-message constructor on SendMessage |
| [#5256](https://github.com/zerocaw-labs/zeroclaw/issues/5256) | 500 Internal Server Error with specific gguf model |

**Stability assessment:** Bug volume is high but typical for a project in active pre-release development. The most concerning pattern is **provider reliability** — Ollama, Gemini, Bedrock, and Kimi all have S1 "workflow blocked" bugs. The Kimi fix (#7049) is already in PR; the others remain unaddressed. The **MCP tool security gap** (#6876) is a genuine security concern that needs a definitive design answer.

---

## 6. Feature Requests & Roadmap Signals

### Accepted or In-Progress Features (likely candidates for v0.8.0-beta-2)

| # | Feature | Maturity |
|---|---------|----------|
| [#6850](https://github.com/zeroclaw-labs/zeroclaw/issues/6850) | Decouple memory strategy layer from storage backend via `MemoryStrategy` trait | RFC, blocked, needs maintainer review |
| [#6954](https://github.com/zeroclaw-labs/zeroclaw/issues/6954) | Route scheduled tasks through orchestrator pipeline | RFC, accepted |
| [#6969](https://github.com/zerocaw-labs/zeroclaw/issues/6969) | Unified output routing model (per-peer modality preference) | RFC, accepted |
| [#6909](https://github.com/zeroclaw-labs/zeroclaw/issues/6909) | Computer-use support (screen interaction) | RFC, accepted |
| [#6914](https://github.com/zeroclaw-labs/zeroclaw/issues/6914) | Enforce `allowed_tools` / `denied_tools` in main agent loop | Blocked, needs maintainer review |
| [#6915](https://github.com/zeroclaw-labs/zeroclaw/issues/6915) | Skill-scoped tool activation (temporary elevation during skill execution) | Blocked, needs maintainer review |
| [#4467](https://github.com/zeroclaw-labs/zeroclaw/issues/4467) | MCP resource and prompt support | In-progress, 👍4 (community support) |
| [#6253](https://github.com/zeroclaw-labs/zeroclaw/issues/6253) | Track: zeroclaw skills support and UX (v0.7.6 theme) | Accepted, release-tracking issue |

### Prediction for Next Release

Based on the volume of RFCs now accepted and the sheer breadth of `#6840` (integration branch), **v0.8.0-beta-2** will likely focus on: the **zerocode TUI** experience, **multi-tenant RBAC foundations**, **orchestrator-routed cron**, **output modality routing**, and **email channel improvements** (XOAUTH2, IMAP tools). The security hardening items (`#6914`, `#6915`, `#6916`, `#6917`) are blocked but form a coherent "security sprint" that could follow immediately after beta-2. Computer-use (#6909) is a larger undertaking likely targeted for a later milestone.

---

## 7. User Feedback Summary

### Pain Points

- **Multi-user deployments are unsupported.** Multiple requests converge on needing per-sender control: RBAC (#5982), risk profiles not covering MCP tools (#6876), no `allowed_tools` enforcement at dispatch (#6914), and inability to set output modality per peer (#6969). Users migrating from Letta and OpenClaw feel this gap acutely. ***

- **Provider reliability is a recurring frustration.** At least 6 distinct provider bugs (Ollama, Gemini, Bedrock, kimi-k2, llama.cpp compatible) are open, several rated S1. ***

- **Documentation gaps cause real confusion.** Users cannot figure out basic config like `gateway.web_dist_dir` (#5847) or runtime settings for reasoning (#5843) without reading source code. The Docker documentation (#6760) is community-contributed and requires manual YAML fixes. ***

- **Self-hosting on ARM/Raspberry Pi is fragile.** The `zeroclaw update` command silently downloads the wrong architecture (#4842), requiring manual intervention. ***

### Satisfaction Indicators

- The RFC process (#6883, #6954, #6969) is actively maintained by `mov-xound-glitch` with multiple accepted items — suggesting a responsive core team.
- Community is stepping in to fill gaps: Docker docs (#6760), hardware example PRs, and community tracking issues (#6253) all have positive engagement.
- The `👍` count on MCP resource/prompt support (#4467) at 4 votes indicates strong community desire for deeper MCP integration beyond just tools.

---

## 8. Backlog Watch

These important items have had no maintainer response or are stale despite their priority:

| # | Age | Description | Why It Matters |
|---|-----|-------------|----------------|
| [#4879](https://github.com/zeroclaw-labs/zeroclaw/issues/4879) | ~2 months (Mar 28) | Gemini CLI OAuth simply not working | **S1, provider-blocking, 👍2** — no maintainer comment; affects all Gemini CLI users |
| [#5866](https://github.com/zeroclaw-labs/zeroclaw/issues/5866) | ~1.5 months (Apr 18) | Telegram bot ignores replies when `mention_only=true` | **S1** — core Telegram UX breakage; no maintainer or PR |
| [#5962](https://github.com/zeroclaw-labs/zeroclaw/issues/5962) | ~1.5 months (Apr 21) | Ollama provider fails when tools are needed | **S1** — breaks entire Ollama workflow; no maintainer or PR |
| [#4467](https://github.com/zeroclaw-labs/zeroclaw/issues/4467) | ~2 months (Mar 24) | MCP resource and prompt support | **In-progress, 👍4** — community wants deeper MCP integration; unclear timeline |
| [#6720](https://github.com/zeroclaw-labs/zeroclaw/issues/6720) | ~2 weeks (May 16) | `context_aware_tools` config field is dead code | **S2** — misleading config option; silently does nothing since beta-1 |
| [#6074](https://github.com/zeroclaw-labs/zeroclaw/issues/6074) | ~1 month (Apr 24) | Audit: track 153 commits lost in bulk revert for recovery | **Infrastructure debt** — important for correctness of git history |

**Particular watch:** The three S1 provider bugs (#4879, #5866, #5962) with no maintainer response represent the highest risk to installation usability. If a new user hits any one of these during onboarding, they have no recovery path.

---

*Data snapshot: 2026-06-01 | ZeroClaw (github.com/zeroclaw-labs/zeroclaw) | 46 issues, 50 PRs updated in 24h | No new releases*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/DenisZheng/agents-radar).*