# OpenClaw Ecosystem Digest 2026-06-19

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-06-19 00:48 UTC

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

# OpenClaw Project Digest — 2026-06-19

---

## 1. Today's Overview

OpenClaw is in a high-activity stabilization phase. The last 24 hours saw **500 issues updated** (475 still open) and **500 PRs updated** (463 open, 37 merged/closed), with **no new releases** — indicating the team is accumulating fixes toward a future cut. The overwhelming theme is **message delivery reliability** (Telegram, Discord, Slack, Feishu), **session-state correctness** (compaction, rotation, cron), and **auth/provider regressions** introduced around the 2026.5.7 → 2026.5.12 window. Multiple P1 regressions are still open and actively discussed, suggesting the next release will be a patch/hotfix priority.

---

## 2. Releases

**No new releases in the last 24 hours.** The latest known version remains **2026.5.12**, which is the regression source for several critical bugs (see §5).

---

## 3. Project Progress

### Merged / Closed PRs (37 total; highlights from top 30)

| PR | Summary | Area |
|---|---|---|
| [PR #94697](https://github.com/openclaw/openclaw/pull/94697) | `killProcessTree` verifies process group leader before group-kill to prevent gateway SIGTERM | Agents |
| [PR #94698](https://github.com/openclaw/openclaw/pull/94698) | Treat post-turn compaction failures as non-fatal (fixes #94688) | CLI / Agents |
| [PR #94720](https://github.com/openclaw/openclaw/pull/94720) | Preserve last assistant reply before compaction boundary (#76729) | Agents |
| [PR #94721](https://github.com/openclaw/openclaw/pull/94721) | Hide archived Workboard cards from `openclaw workboard list` by default | CLI / Workboard |
| [PR #94722](https://github.com/openclaw/openclaw/pull/94722) | Respect `models.mode: "replace"` in `openclaw models list` output | Models |
| [PR #94724](https://github.com/openclaw/openclaw/pull/94724) | Pin SSH tunnel port probe to IPv4 loopback (#94596) | Infra |
| [PR #94719](https://github.com/openclaw/openclaw/pull/94719) | Read `claudeCodeVersion` at runtime to prevent stale user-agent bearer auth failures | Anthropic provider |
| [PR #94715](https://github.com/openclaw/openclaw/pull/94715) | Return 200 for non-message Nextcloud Talk webhook events | Nextcloud channel |
| [PR #94718](https://github.com/openclaw/openclaw/pull/94718) | Resolve Windows CLI shims via PATHEXT walk + trusted cmd.exe wrapper | Supervisor |
| [PR #94717](https://github.com/openclaw/openclaw/pull/94717) | Add `openclaw snapshot` plugin CLI (create/list/verify/restore) | New feature |
| [PR #94708](https://github.com/openclaw/openclaw/pull/94708) | Targeted changed-file lint/check planning for CI | Maintainer tooling |
| [PR #94659](https://github.com/openclaw/openclaw/pull/94659) | Stop `openclaw doctor` falsely flagging working isolated shell-prompt cron jobs | Doctor / CLI |
| [PR #94642](https://github.com/openclaw/openclaw/pull/94642) | Wrap `buildStatusText` with try-catch + protect lazy dynamic imports | Status command |
| [PR #94384](https://github.com/openclaw/openclaw/pull/94384) | Send Telegram voice typing cue before transcription | Telegram channel |
| [PR #94359](https://github.com/openclaw/openclaw/pull/94359) | Use account names for direct session display in UI | Gateway / UI |
| [PR #94038](https://github.com/openclaw/openclaw/pull/94038) | Recognize MiniMax `<mm:think>` namespaced reasoning tags in Matrix | Matrix channel |
| [PR #94017](https://github.com/openclaw/openclaw/pull/94017) | Skip provider thinking profile when model not in catalog (#93835) | Thinking / Models |
| [PR #94009](https://github.com/openclaw/openclaw/pull/94009) | Persist startup overflow deferral exemption in cron service state (#93935) | Cron |
| [PR #93869](https://github.com/openclaw/openclaw/pull/93869) | Render half-block QR output in web chat | Web UI |
| [PR #93853](https://github.com/openclaw/openclaw/pull/93853) | Route memory embedding through generic resolution for custom baseUrl | Memory / Agents |
| [PR #93198](https://github.com/openclaw/openclaw/pull/93198) | Honor `claude-cli` contextTokens from canonical provider config (#80933) | Agents |
| [PR #92892](https://github.com/openclaw/openclaw/pull/92892) | Allow Gemini CLI image-capable models (#91739) | Gateway / Models |
| [PR #90885](https://github.com/openclaw/openclaw/pull/90885) | Resolve compaction model alias to canonical model ref | Agents |
| [PR #88551](https://github.com/openclaw/openclaw/pull/88551) | Skip auth gate for CLI-owned transport | Agents / Auth |
| [PR #85403](https://github.com/openclaw/openclaw/pull/85403) | Suppress Telegram message-tool reply previews (#80520) | Telegram channel |

**Key trends:** Heavy investment in **delivery reliability** (Telegram, Matrix, Nextcloud), **compaction/session correctness**, **Windows compatibility**, and a new **snapshot CLI** feature shipping.

---

## 4. Community Hot Topics

### Top Issues by Engagement

| # | Issue | Comments | 👍 | Core Need |
|---|---|---|---|---|
| 80319 | [QA tool-defaults suite conflates Codex-native tools](https://github.com/openclaw/openclaw/issues/80319) | 17 | 1 | QA harness accuracy for tool-parity testing |
| 79902 | [SQLite transcript/session seams on database-first runtime](https://github.com/openclaw/openclaw/issues/79902) | 13 | 2 | Stable companion API for session data |
| 78308 | [Channel-mediated approval for MCP tool calls](https://github.com/openclaw/openclaw/issues/78308) | 13 | 1 | Security: consent envelope for MCP mutations |
| 54531 | [Force reply to originating channel (Telegram/Discord/WhatsApp)](https://github.com/openclaw/openclaw/issues/54531) | 11 | 1 | **Message delivery to correct channel** |
| 80520 | [Telegram messages silently dropped](https://github.com/openclaw/openclaw/issues/80520) | 11 | 3 | **Critical: Telegram delivery regression** |
| 83184 | [Heartbeat-driven replies leave pendingFinalDelivery stuck](https://github.com/openclaw/openclaw/issues/83184) | 8 | 3 | Heartbeat/cron delivery state machine |
| 84583 | [Cron announce triggers EmbeddedAttemptSessionTakeoverError](https://github.com/openclaw/openclaw/issues/84583) | 8 | 3 | Cron + active session race condition |
| 79077 | [Telegram bot-to-bot and guest-bot modes](https://github.com/openclaw/openclaw/issues/79077) | 8 | 8 | Support Telegram's May-7 2026 platform features |
| 81061 | [Hook: before_route_inbound_message](https://github.com/openclaw/openclaw/issues/81061) | 7 | 3 | Pre-routing hook for channel bridging/proxying |
| 80213 | [Skill author-defined setup hook](https://github.com/openclaw/openclaw/issues/80213) | 7 | 4 | Extensibility: post-install skill scripts |

**Underlying needs analysis:**
- **Message delivery is the #1 pain cluster.** Five of the top ten issues involve messages being dropped, sent to wrong targets, or failing to deliver across Telegram/Discord/Slack/Feishu. This is the dominant user-facing regression theme.
- **Platform currency.** Users want OpenClaw to keep pace with Telegram's new bot platform features (guest bots, bot-to-bot) — 8 👍 signals strong demand.
- **Security hardening.** MCP consent envelopes and tool-denial enforcement are recurring requests as OpenClaw is used in more production/multi-user settings.
- **Companion/advanced-user APIs.** Multiple issues from the same author (100yenadmin) push for stable SQLite-based session APIs, indicating a need for a documented companion-consumer contract.

---

## 5. Bugs & Stability

### P1 / Critical Bugs (Open)

| Issue | Severity | Description | Fix PR? |
|---|---|---|---|
| [#80520](https://github.com/openclaw/openclaw/issues/80520) | 🔴 P1 | Telegram messages silently dropped, no `sendMessage` logged | [PR #85403](https://github.com/openclaw/openclaw/pull/85403) (open, partial) |
| [#83184](https://github.com/openclaw/openclaw/issues/83184) | 🔴 P1 | Heartbeat-driven replies leave `pendingFinalDelivery` stuck, blocking subsequent heartbeats | None yet |
| [#84583](https://github.com/openclaw/openclaw/issues/84583) | 🔴 P1 | Cron announce delivery triggers `EmbeddedAttemptSessionTakeoverError` when user is actively chatting | None yet |
| [#81484](https://github.com/openclaw/openclaw/issues/81484) | 🔴 P1 | Discord guild reply regression: malformed send payloads and repeated outbound loops (2026.5.7) | None yet |
| [#79752](https://github.com/openclaw/openclaw/issues/79752) | 🔴 P1 | HTTP responses fail with `Unexpected token \u001f` — gzip not decompressed under Node v26 on macOS | None yet |
| [#79308](https://github.com/openclaw/openclaw/issues/79308) | 🔴 P1 | Telegram group replies sent to wrong chat_id (DM instead of group) in 2026.5.7 | None yet |
| [#82662](https://github.com/openclaw/openclaw/issues/82662) | 🟠 P1 | Isolated cron `agentTurn` fails with "setup timed out before runner start" — all fallback models exhausted | None yet |
| [#82070](https://github.com/openclaw/openclaw/issues/82070) | 🟠 P1 | CLI commands ~14s cold-start regression after 2026.5.12 update | None yet |
| [#81567](https://github.com/openclaw/openclaw/issues/81567) | 🟠 P1 | GPT-4o agent sessions exit after single text response instead of continuing tool-use loop | None yet |
| [#81514](https://github.com/openclaw/openclaw/issues/81514) | 🟠 P1 | Isolated cron job status is non-deterministic when agent recovers from tool error | None yet |
| [#78055](https://github.com/openclaw/openclaw/issues/78055) | 🟠 P1 | Subagent announce delivers stale output; subagent sessions may inherit unrelated history | None yet |
| [#78061](https://github.com/openclaw/openclaw/issues/78061) | 🟠 P1 | Slack thread session generates responses but fails to deliver to Slack | None yet |
| [#76233](https://github.com/openclaw/openclaw/issues/76233) | 🟠 P1 | `exec-approval-followup` races subagent bundle-mcp runtime disposal → `UNAVAILABLE` | None yet |
| [#79451](https://github.com/openclaw/openclaw/issues/79451) | 🟠 P1 | `tools.deny` not enforced for claude-cli backend MCP | None yet |
| [#76729](https://github.com/openclaw/openclaw/issues/76729) | 🟠 P1 | Feishu replies disappear after compaction rotation (`buildSuccessorEntries` drops assistant messages) | [PR #94720](https://github.com/openclaw/openclaw/pull/94720) (open) |
| [#54531](https://github.com/openclaw/openclaw/issues/54531) | 🟠 P1 | Agent fails to reply to originating channel (Telegram/Discord/WhatsApp) — stale | None yet |

### Crash Loops / Regression

| Issue | Description |
|---|---|
| [#81917](https://github.com/openclaw/openclaw/issues/81917) | Dashboard logs bare URL despite token auto-auth; can hang on Linux/KDE browser launch |
| [#81934](https://github.com/openclaw/openclaw/issues/81934) | Multiple critical failures after 2026.5.12 on macOS (Gmail, Dropbox, PDF) |
| [#82250](https://github.com/openclaw/openclaw/issues/82250) | macOS LaunchAgent `KeepAlive=true` restarts after clean already-running gateway exit |
| [#80040](https://github.com/openclaw/openclaw/issues/80040) | Cascading failure: invalidated OAuth → empty placeholder reply → duplicate tool execution → cold-cache context loss |
| [#78602](https://github.com/openclaw/openclaw/issues/78602) | Browser plugin: persistent `targetId` mismatch + `AbortError` with chrome-mcp transport |

**Stability assessment:** The 2026.5.x line introduced **multiple P1 regressions** in message delivery, auth, and cron execution. The team is actively merging fixes (compaction, kill-tree, doctor false-positives), but **at least 10 P1 issues remain open without fix PRs**, several dating back weeks. A patch release is overdue.

---

## 6. Feature Requests & Roadmap Signals

### High-Signal Feature Requests

| Issue | Signal Strength | Description | Likelihood of Near-Term Delivery |
|---|---|---|---|
| [#79077](https://github.com/openclaw/openclaw/issues/79077) | ⭐⭐⭐ (8 👍, 8 comments) | Telegram bot-to-bot & guest-bot support (May-2026 platform release) | **High** — platform currency issue, strong demand |
| [#78308](https://github.com/openclaw/openclaw/issues/78308) | ⭐⭐⭐ (13 comments) | Channel-mediated approval for MCP tool calls (consent envelope) | **High** — security + compliance need |
| [#79902](https://github.com/openclaw/openclaw/issues/79902) | ⭐⭐⭐ (13 comments, 3 related issues) | SQLite transcript/session seams for companion consumers | **High** — multiple related PRs already in flight (#79903, #79904, #79905) |
| [#81061](https://github.com/openclaw/openclaw/issues/81061) | ⭐⭐ (7 comments, 3 👍) | Pre-routing inbound message hook for channel bridging/proxying | **Medium** — architectural, needs design |
| [#80213](https://github.com/openclaw/openclaw/issues/80213) | ⭐⭐ (7 comments, 4 👍) | Skill author-defined setup hook (`setup.script` in SKILL.md) | **Medium** — extensibility, clear spec |
| [#81913](https://github.com/openclaw/openclaw/issues/81913) | ⭐⭐ (5 comments) | Stable plugin SDK surface for installed skill workflows | **Medium** — related to #80213 |
| [#81960](https://github.com/openclaw/openclaw/issues/81960) | ⭐ (4 comments) | Onboarding: configure multiple providers and models | **Lower** — UX improvement, not blocking |

**Predicted next-version features:** Telegram guest-bot support, MCP consent envelope, and the SQLite companion API family are the most likely candidates for the next minor release, given active PR momentum and community demand.

---

## 7. User Feedback Summary

### Pain Points (Dissatisfaction)

1. **Message delivery is broken across multiple channels.** Users report Telegram messages silently dropped ([ #80520](https://github.com/openclaw/openclaw/issues/80520)), Discord guild replies malformed ([#81484](https://github.com/openclaw/openclaw/issues/81484)), Slack thread responses never arrive ([#78061](https://github.com/openclaw/openclaw/issues/78061)), and Feishu replies disappearing after compaction ([#76729](https://github.com/openclaw/openclaw/issues/76729)). This is the **single largest source of user frustration**.

2. **2026.5.7 → 2026.5.12 regressions are painful.** Users on macOS report CLI cold-start regressions of ~14s ([#82070](https://github.com/openclaw/openclaw/issues/82070)), gzip decompression failures after Node v26 upgrade ([#79752](https://github.com/openclaw/openclaw/issues/79752)), and multiple critical failures across Gmail, Dropbox, and PDF generation ([#81934](https://github.com/openclaw/openclaw/issues/81934)).

3. **Cron reliability is poor.** Isolated cron jobs fail with setup timeouts ([#82662](https://github.com/openclaw/openclaw/issues/82662)), have non-deterministic status ([#81514](https://github.com/openclaw/openclaw/issues/81514)), and can crash when delivering to active sessions ([#84583](https://github.com/openclaw/openclaw/issues/84583)).

4. **Auth resolution is slow and fragile.** Cold-path auth takes ~4s vs. 2-4ms warm ([#78041](https://github.com/openclaw/openclaw/issues/78041)), and OAuth invalidation cascades into empty replies and duplicate tool execution ([#80040](https://github.com/openclaw/openclaw/issues/80040)).

5. **Plugin loader silently tolerates bad contracts.** Users lose hours debugging opaque runtime errors that should have been caught at load time ([#78301](https://github.com/openclaw/openclaw/issues/78301)).

### Positive Signals

- The new **snapshot plugin CLI** ([PR #94717](https://github.com/openclaw/openclaw/pull/94717)) is a well-received addition for backup/restore workflows.
- **Targeted lint planning** ([PR #94708](https://github.com/openclaw/openclaw/pull/94708)) shows investment in CI quality.
- **Windows compatibility** is actively improving (PATHEXT shim resolution, [PR #94718](https://github.com/openclaw/openclaw/pull/94718)).
- The **session history family lookup** PR ([PR #90239](https://github.com/openclaw/openclaw/pull/90239)) addresses a long-standing UX gap for threaded conversations.

---

## 8. Backlog Watch

### Important Issues Needing Maintainer Attention

| Issue | Age | Why It Matters |
|---|---|---|
| [#54531](https://github.com/openclaw/openclaw/issues/54531) | ~3 months (stale) | Force reply to originating channel — affects Telegram/Discord/WhatsApp users broadly; marked stale but still relevant |
| [#79308](https://github.com/openclaw/openclaw/issues/79308) | ~1 month | Telegram group replies sent to wrong chat_id — P1 delivery regression, no fix PR |
| [#79752](https://github.com/openclaw/openclaw/issues/79752) | ~1 month | gzip not decompressed under Node v26 — affects all HTTP interactions on macOS, no fix PR |
| [#80520](https://github.com/openclaw/openclaw/issues/80520) | ~1 month | Telegram messages silently dropped — P1, partial fix in PR #85403 but still open |
| [#81484](https://github.com/openclaw/openclaw/issues/81484) | ~1 month | Discord guild reply regression — P1, no fix PR |
| [#82662](https://github.com/openclaw/openclaw/issues/82662) | ~1 month | Isolated cron setup timeout — P1, no fix PR |
| [#83184](https://github.com/openclaw/openclaw/issues/83184) | ~1 month | Heartbeat `pendingFinalDelivery` stuck — P1, no fix PR |
| [#84583](https://github.com/openclaw/openclaw/issues/84583) | ~1 month | Cron announce `EmbeddedAttemptSessionTakeoverError` — P1, no fix PR |
| [#78308](https://github.com/openclaw/openclaw/issues/78308) | ~1.5 months | MCP consent envelope — security feature, 13 comments, needs product decision |
| [#79077](https://github.com/openclaw/openclaw/issues/79077) | ~1 month | Telegram guest-bot/bot-to-bot — 8 👍, platform currency, needs decision |
| [#79902](https://github.com/openclaw/openclaw/issues/79902) | ~1 month | SQLite companion API — 3 related issues, active PR work but needs coordination |
| [#78041](https://github.com/openclaw/openclaw/issues/78041) | ~1.5 months | Cold-path auth ~4s — performance regression, no fix PR |

**Maintainer action recommended:** Prioritize the **6 P1 delivery/cron regressions** (#79308, #80520, #81484, #82662, #83184, #84583) for the next patch release. The Telegram guest-bot issue (#79077) and MCP consent envelope (#78308) are strong candidates for the next minor version given community demand and clear specs.

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: Personal AI Assistant & Agent Open-Source Ecosystem

**Date:** 2026-01-19 | **Projects Analyzed:** 14 | **Generated by:** OWL, ZOO Company

---

## 1. Ecosystem Overview

The open-source personal AI agent landscape in mid-2026 is characterized by **rapid fragmentation and specialization** around a common architectural core: multi-channel messaging gateways, tool-calling agents, and session/memory management. OpenClaw serves as the de facto reference implementation against which most projects position themselves, with forks and alternatives diverging along axes of **language/runtime choice** (Zig/NullClaw, Go/PicoClaw, Rust/ZeroClaw), **deployment target** (embedded/PicoClaw, desktop/LobsterAI, mobile/Hermes), and **trust model** (multi-user approval/NanoClaw, security-first/ZeroClaw). The ecosystem is collectively grappling with the same hard problems — message delivery reliability, session compaction correctness, cron scheduling robustness, and multi-provider auth — but at varying stages of maturity. Security is emerging as a first-class concern across the board, with four projects (TinyClaw, ZeroClaw, NanoClaw, LobsterAI) receiving critical vulnerability disclosures in the past 48 hours alone.

---

## 2. Activity Comparison

| Project | Issues (updated 24h) | PRs (updated 24h) | Merged/Closed | Releases (recent) | Health Score |
|---|---|---|---|---|---|
| **OpenClaw** | 500 | 500 | 37 merged | 2026.5.12 (stale) | 🟠 Moderate — high volume, many P1 regressions |
| **NanoBot** | ~10 | 25 | 5 merged | No recent release | 🟡 Stable — memory of queue, quiet release cadence |
| **Hermes Agent** | 50 | 50 | 2 merged | v0.16.0 (v2026.6.5) | 🟠 Moderate — high throughput, review bottleneck |
| **PicoClaw** | 2 | 15 | 7 merged | No recent release | 🟢 Healthy — responsive, low backlog |
| **NanoClaw** | 5 | 21 | 6 merged | v2.1.18 (pending) | 🟡 Stable — security concern (#2807) |
| **NullClaw** | 4 | 5 | 0 merged | No recent release | 🟡 Quiet — review bottleneck, all PRs fresh |
| **LobsterAI** | 1 | 15 | 14 merged | 2026.6.11 (active) | 🟢 Healthy — rapid cadence, critical sec issue |
| **TinyClaw** | 3 | 0 | 0 | None | 🔴 At risk — 3 critical sec issues, no response |
| **Moltis** | 1 | 0 | 0 | None | 🟢 Quiet — low activity, no fires |
| **ZeroClaw** | 27 | 50 | 15 merged | v0.8.0 → v0.8.1 (staged) | 🟠 Moderate — security issues, strong PR velocity |
| **IronClaw** | — | — | — | — | ⚠️ Data unavailable |
| **CoPaw** | — | — | — | — | ⚠️ Data unavailable |
| **ZeptoClaw** | 0 | 0 | 0 | None | ⚪ No activity |

**Health scoring:** 🟢 = shipping reliably, backlog managed | 🟡 = stable but with notable risks | 🟠 = active but significant regressions or bottlenecks | 🔴 = critical unaddressed issues

---

## 3. OpenClaw's Position

### Advantages vs. Peers

- **Scale of community engagement:** OpenClaw's 500 issues + 500 PRs updated in 24 hours dwarfs all competitors combined. This reflects its role as the ecosystem's reference platform and primary on-ramp for new users.
- **Breadth of channel support:** OpenClaw supports the widest range of messaging channels (Telegram, Discord, Slack, Feishu, Matrix, Nextcloud Talk, WhatsApp) with active maintenance on most — a significant moat.
- **Feature completeness:** Compaction, cron scheduling, sub-agents, MCP tool integration, snapshot/backup CLI, and multi-provider auth are all present and actively iterated upon.

### Technical Approach Differences

| Dimension | OpenClaw | Key Alternatives |
|---|---|---|
| **Runtime** | Node.js/TypeScript | NullClaw (Zig), PicoClaw (Go), ZeroClaw (Rust) |
| **Architecture** | Monolithic gateway + plugin system | NanoClaw (agent-to-agent approval chains), Hermes (multi-profile gateway) |
| **Trust model** | Single-user focused, tool-denial lists | NanoClaw (per-message approval gates), ZeroClaw (risk profiles, credential isolation) |
| **Deployment** | Self-hosted server | LobsterAI (desktop Electron), PicoClaw (embedded/IoT), Hermes (desktop + mobile/Termux) |
| **Session management** | Compaction + rotation (buggy in 2026.5.x) | NanoBot (eager consolidation), NullClaw (configurable recall) |

### Community Size Comparison

OpenClaw's issue/PR volume (1,000+ events/day) exceeds the rest of the ecosystem combined (~200 events/day across all other projects). The next most active projects — ZeroClaw (~77 events), Hermes (~100 events), and NanoClaw (~26 events) — are each roughly an order of magnitude smaller. This scale gives OpenClaw disproportionate influence on shared patterns (compaction behavior, channel adapter design, cron semantics) but also means it bears the heaviest regression burden from its own complexity.

---

## 4. Shared Technical Focus Areas

The following requirements are emerging simultaneously across multiple projects, indicating ecosystem-wide convergence:

### 4.1 Message Delivery Reliability
**Projects:** OpenClaw, NanoClaw, ZeroClaw, Hermes Agent
- OpenClaw: Telegram messages silently dropped (#80520), Discord guild reply regression (#81484), Slack thread delivery failure (#78061)
- ZeroClaw: Slack/Discord channels stripped from prebuilt binaries (#7787)
- NanoClaw: Discord message truncation (#2812, #2816)
- Hermes: Telegram streaming truncation (#48648)

**Core need:** A reliable, channel-agnostic message delivery abstraction with proper error propagation, retry semantics, and delivery confirmation. Currently every project implements this independently and imperfectly.

### 4.2 Session Compaction & Memory Management
**Projects:** OpenClaw, NanoBot, NullClaw, Hermes Agent
- OpenClaw: Feishu replies disappear after compaction (#76729), post-turn compaction failures (#94688)
- NanoBot: Consolidation wipes delivery message (#4307), eager consolidation requested (#2604)
- NullClaw: Configurable auto-recall and recall_limit (PR #961)
- Hermes: Compression overwrites original messages (#39704), context compression loses unflushed messages (#47202)

**Core need:** A principled compaction protocol that preserves delivery context, supports pluggable consolidation strategies (trim vs. summarize vs. archive), and is provably lossless for user-visible messages.

### 4.3 Cron / Scheduled Execution Robustness
**Projects:** OpenClaw, Hermes Agent, ZeroClaw
- OpenClaw: Cron announce triggers session takeover error (#84583), isolated cron setup timeout (#82662)
- Hermes: Cron jobs not profile-aware (#48649), cron timestamps in wrong timezone
- ZeroClaw: Cron deletion diagnostics routed to stdout instead of logs

**Core need:** A cron subsystem that is profile-aware, handles active-session conflicts gracefully, respects timezone configuration, and provides deterministic status reporting.

### 4.4 Security Hardening
**Projects:** TinyClaw, ZeroClaw, NanoClaw, LobsterAI, Hermes Agent
- TinyClaw: Unauthenticated API entrypoint, arbitrary file read, untrusted file attachment tags (3 critical issues)
- ZeroClaw: Confused deputy in `execute_pipeline` (#7947), SSRF in `http_request` (#7902)
- NanoClaw: Non-owner privilege escalation in groups (#2807)
- LobsterAI: Arbitrary local file read via artifact auto-loading (#2176)
- Hermes: Security patterns for launchctl/self-termination gaps (PR #7817)

**Core need:** Authentication-by-default, input validation on all file paths and URLs, sandboxed tool execution, and a verifiable security posture. The concentration of critical disclosures in a single 48-hour window suggests the ecosystem is under active security review.

### 4.5 Multi-Provider Auth & Model Routing
**Projects:** OpenClaw, Hermes Agent, ZeroClaw, NanoClaw
- OpenClaw: Stale user-agent bearer auth failures, cold-path auth ~4s
- Hermes: Gemini thinking token accounting, strict provider schema rejection
- ZeroClaw: Anthropic message alternation, OpenAI Responses tool delivery
- NanoClaw: Env-selected agent provider in setup flow

**Core need:** A provider abstraction layer that handles auth lifecycle (refresh, rotation, OAuth), normalizes model capability detection, and gracefully handles provider-specific schema requirements.

### 4.6 Windows Platform Parity
**Projects:** OpenClaw, Hermes Agent, ZeroClaw
- OpenClaw: Windows CLI shims via PATHEXT (PR #94718)
- Hermes: No native Windows install (Docker/WSL2 required), WSL path injection
- ZeroClaw: 74 Windows test failures (PR #7906 fixing)

**Core need:** First-class Windows support including native installation, path handling, shell compatibility, and CI test coverage.

---

## 5. Differentiation Analysis

| Project | Primary Target User | Key Differentiator | Technical Architecture | Deployment Model |
|---|---|---|---|---|
| **OpenClaw** | Power users, self-hosters | Channel breadth, plugin ecosystem, reference architecture | Node.js monolith + plugins | Self-hosted server |
| **NanoBot** | Developers, "normie-friendly" UX | Simplified UI, memory consolidation focus, multi-instance | Node.js, opinionated defaults | Self-hosted server |
| **Hermes Agent** | Multi-platform teams | Desktop app + gateway, 15-language i18n, multi-profile | Node.js gateway + Electron desktop | Desktop + server |
| **PicoClaw** | Embedded/IoT developers | Small footprint, Go-based, hardware-oriented | Go, minimal runtime | Edge/embedded |
| **NanoClaw** | Enterprise/multi-user teams | Per-message approval gates, agent-to-agent trust model | Node.js, container-first | Self-hosted, Docker |
| **NullClaw** | Systems programmers | Zig implementation, memory-safe, streaming-first | Zig, no runtime | Self-hosted, lightweight |
| **LobsterAI** | End users (Chinese market) | Desktop Electron app, voice input, computer use, artifact sharing | Electron + MCP | Desktop application |
| **TinyClaw** | Minimalists | Ultra-simple personal AI assistant | Python/Node.js, minimal | Self-hosted, simple |
| **ZeroClaw** | Security-conscious deployers | Risk profiles, credential isolation, SSRF protection | Rust, security-first | Self-hosted, production |
| **Moltis** | General users | Session-based interaction model | Not enough data | Not enough data |

### Feature Focus Spectrum

```
Minimalist ◄──────────────────────────────────────────────► Feature-Rich
TinyClaw    NullClaw   PicoClaw   Moltis   NanoBot   OpenClaw   LobsterAI
                         NanoClaw   ZeroClaw   Hermes
```

### Trust Model Spectrum

```
Single-User ◄──────────────────────────────────────────────► Multi-User/Enterprise
TinyClaw    NullClaw   PicoClaw   OpenClaw   Hermes   NanoClaw   ZeroClaw
                                                              LobsterAI
```

---

## 6. Community Momentum & Maturity

### Tier 1: High Velocity, Active Iteration
- **OpenClaw** — 1,000+ events/day, 37 PRs merged, but accumulating P1 regressions. Needs a patch release urgently.
- **ZeroClaw** — 77 events/day, 15 PRs merged, v0.8.1 staged. Strong security focus, disciplined release management.
- **LobsterAI** — 15 PRs merged in 24h, rapid release cadence (3 releases in ~2 weeks). Most aggressive shipping velocity in the ecosystem.

### Tier 2: Active Development, Moderate Throughput
- **Hermes Agent** — 100 events/day, but only 2 merged. Review bottleneck evident. Desktop app investment is a differentiator.
- **NanoClaw** — 26 events/day, 6 merged. Security concern (#2807) needs immediate attention. Per-message approval feature is a notable innovation.
- **NanoBot** — 25 PRs updated, 5 merged. Memory consolidation work is the key theme. Quiet release cadence.

### Tier 3: Maintenance Mode / Low Activity
- **PicoClaw** — 15 PRs, 7 merged (mostly dependency bumps). Responsive to bugs, small but healthy.
- **NullClaw** — 5 PRs, 0 merged. All PRs opened same day — too early to assess, but review bottleneck risk.
- **Moltis** — 1 issue, 0 PRs. Dormant.

### Tier 4: At Risk / No Activity
- **TinyClaw** — 3 critical security issues, 0 maintainer response, 0 PRs. Project appears unmaintained.
- **ZeptoClaw** — No activity in 24 hours.
- **IronClaw / CoPaw** — Data unavailable.

### Maturity Assessment

| Project | Estimated Maturity | Evidence |
|---|---|---|
| OpenClaw | Late Beta / Early GA | High volume, regression accumulation, no recent release |
| ZeroClaw | Beta (v0.8.x) | Versioned releases, staged patch, security-first posture |
| LobsterAI | GA (rapid iteration) | Dated releases (2026.6.x), feature-complete desktop app |
| Hermes Agent | Beta (v0.16.0) | Versioned, desktop + gateway, multi-profile still fragile |
| NanoClaw | Late Beta (v2.1.18) | v2 release, security model maturing, CLI rough edges |
| NanoBot | Early Beta | No clear versioning, memory system stabilizing |
| PicoClaw | Maintenance | Dependency-driven, responsive to bugs |
| NullClaw | Pre-release / Early | No releases, all PRs fresh, no merged code |
| TinyClaw | At risk | Unmaintained, critical sec issues unaddressed |

---

## 7. Trend Signals

### Trend 1: Security Is No Longer Optional
Four projects received critical vulnerability disclosures within 48 hours. The attack surface of AI agents — file system access, tool execution, message parsing, artifact loading — is being actively probed. **Implication for developers:** Authentication-by-default, input sandboxing, and SSRF protection are becoming baseline requirements, not nice-to-haves. ZeroClaw's security-first architecture (risk profiles, credential isolation, SSRF mitigation) is ahead of the curve.

### Trend 2: The Compaction Problem Is Universal and Unsolved
Every project with a session management system is struggling with compaction correctness. The core tension — reducing context window usage while preserving delivery context and conversation coherence — has no consensus solution. **Implication for developers:** Expect continued innovation in this space. NanoBot's eager consolidation (archiving without trimming) and NullClaw's configurable recall represent different architectural bets worth monitoring.

### Trend 3: Desktop Is the New Frontier
LobsterAI (Electron), Hermes (Electron desktop app), and NanoClaw (Apple Container runtime) are all investing in desktop-native deployment. The shift from "self-hosted server" to "runs on my machine" reflects demand from non-technical users and enterprise environments where server deployment is frictionful. **Implication for developers:** Desktop-native features (voice input, computer use, artifact management, system integration) are becoming competitive differentiators.

### Trend 4: Multi-Channel Delivery Remains the Hardest Problem
Message delivery regressions dominate OpenClaw's P1 backlog and appear across ZeroClaw, NanoClaw, and Hermes. Each messaging platform (Telegram, Discord, Slack, Feishu, WhatsApp) has unique constraints on message format, length, threading, and delivery confirmation. **Implication for developers:** Channel adapter testing and delivery reliability should be first-class engineering priorities, not afterthoughts. The absence of a shared, tested channel abstraction library is a gap in the ecosystem.

### Trend 5: Trust Models Are Maturing Beyond Single-User
NanoClaw's per-message approval gates, ZeroClaw's risk profiles, and OpenClaw's MCP consent envelope requests all point toward a future where agents operate in multi-user, multi-agent environments with explicit authorization boundaries. **Implication for developers:** Design for multi-user trust from the start. Retrofitting approval workflows onto a single-user architecture (as OpenClaw is discovering) is significantly harder than building it in.

### Trend 6: Voice and Multimodal Input Are Shipping
LobsterAI's realtime ASR pipeline (WebSocket streaming, quota management, WAV encoding) represents the most complete voice input implementation in the ecosystem. OpenClaw's Telegram voice typing cue (PR #94384) and Hermes's desktop accessibility requests (zoom/font controls) signal broader multimodal expectations. **Implication for developers:** Voice-first and multimodal interaction patterns are transitioning from experimental to expected.

### Trend 7: Rust and Zig Are Entering the Agent Runtime Space
ZeroClaw (Rust) and NullClaw (Zig) represent a new generation of agent runtimes prioritizing memory safety, performance, and small binary size over the Node.js ecosystem's developer velocity. While neither has reached the feature completeness of OpenClaw, their security posture and resource efficiency are structural advantages. **Implication for developers:** Watch these projects as potential long-term alternatives for production deployments where security and resource constraints matter more than plugin ecosystem breadth.

---

**Summary Recommendation for Technical Decision-Makers:**

- **For production multi-channel deployments today:** OpenClaw remains the most feature-complete option, but expect to invest in regression management. Monitor the 2026.5.x → next patch closely.
- **For security-sensitive deployments:** ZeroClaw's Rust-based, security-first architecture is the strongest choice despite lower feature completeness.
- **For desktop/end-user deployments:** LobsterAI leads in voice, computer use, and artifact sharing. Hermes offers the best multi-language desktop experience.
- **For embedded/IoT:** PicoClaw is the only project with explicit embedded support.
- **For multi-user enterprise:** NanoClaw's per-message approval model is the most mature trust framework, but the newly disclosed privilege escalation bug (#2807) needs resolution before production use.
- **Avoid for production:** TinyClaw (unmaintained, critical security issues) until maintainer response resumes.

---

*Report generated by OWL — ZOO Company | Data sources: GitHub project repositories, issues, and pull requests updated 2026-06-18 to 2026-06-19*

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-06-19

## 1. Today's Overview

NanoBot shows high activity with 25 PRs updated in the last 24 hours, though only 5 have been merged or closed so far, indicating a large volume of pending review. The project is currently focused on two major themes: **memory/consolidation reliability** (multiple fixes for delivery context loss and eager consolidation options) and **sandbox/execution safety** (bwrap bind roots, git security policy). No new releases were published today; the release pipeline has been quiet. Community engagement is healthy, with several PRs tackling long-requested UX improvements like WebUI simplification and multi-instance support.

## 2. Releases

No new releases today. The latest release information was not included in the data set. Backlog of unreleased changes appears substantial given the volume of recent PR activity.

## 3. Project Progress (Merged / Closed PRs Today)

| PR | Author | Status | Summary |
|---|---|---|---|
| [#1391](https://github.com/HKUDS/nanobot/pull/1391) | dgross13 | Closed | `consolidation_model` field for routing memory consolidation to a cheaper model than the main agent |
| [#4403](https://github.com/HKUDS/nanobot/pull/4403) | Re-bin | Closed | Firecrawl preset refactored to a keyless hosted MCP endpoint (no API key needed) |
| [#4400](https://github.com/HKUDS/nanobot/pull/4400) | chengyongru | Closed | CI optimization: skip jobs on docs-only changes |
| [#4391](https://github.com/HKUDS/nanobot/pull/4391) | bllackhu | Closed | Feishu channel: QR scan-to-create bot registration command |
| [#4375](https://github.com/HKUDS/nanobot/issues/4375) | jjmanrique | Closed (Issue) | Git commands blocked by workspace security in subdirectories — root cause addressed by earlier PR #4380; test coverage added in PR [#4393](https://github.com/HKUDS/nanobot/pull/4393) |

**Key milestone:** The consolidation reliability work (delivery context preservation in [#4373](https://github.com/HKUDS/nanobot/pull/4373), eager consolidation in [#4402](https://github.com/HKUDS/nanobot/pull/4402)) represents significant progress on the long-standing memory management pain point.

## 4. Community Hot Topics

**Most active PRs by comment/reaction signals:**

- **[#4402](https://github.com/HKUDS/nanobot/pull/4402) — Opt-in eager memory consolidation** (yu-xin-c): Closes [#2604](https://github.com/HKUDS/nanobot/issues/2604), a long-running feature request. Allows archiving conversation slices into `memory/history.jsonl` without trimming live sessions or injecting summaries into the next prompt.

- **[#4374](https://github.com/HKUDS/nanobot/issues/4374) — Project workspace read/write asymmetry for SOUL.md/USER.md** (maximilize, 2 comments): Bootstrap files are read per-project but written to the default workspace — a real workflow blocker for project-based multi-agent setups.

- **[#4396](https://github.com/HKUDS/nanobot/pull/4396) — Optional Nanobot feature enablement** (chengyongru): Shared discovery/install/enable system for optional capabilities (Bedrock as optional extra), available in both CLI and WebUI. Signals a move toward a plugin/extension architecture.

- **[#4408](https://github.com/HKUDS/nanobot/issues/4408) — Nanobot.run() per-run hooks concurrency bug** (waelantar, 1 comment): Shared `_extra_hooks` mutation causes race conditions. Fix PR [#4409](https://github.com/HKUDS/nanobot/pull/4409) already open.

**Underlying needs analysis:** The community is pushing for **(1) reliable memory at scale** (consolidation fixes, eager mode), **(2) cleaner multi-instance/project UX** (UI simplification, workspace asymmetry), and **(3) extensibility** (opt-in features, Serper search provider, bwrap sandbox flexibility).

## 5. Bugs & Stability

| Severity | Issue | Status | Fix PR |
|---|---|---|---|
| 🔴 **High** | [#4307](https://github.com/HKUDS/nanobot/issues/4307): Post-turn consolidation wipes agent's delivery message — user follow-up references lost | **Open** | [#4373](https://github.com/HKUDS/nanobot/pull/4373) addresses related delivery context loss |
| 🟠 **Medium** | [#4408](https://github.com/HKUDS/nanobot/issues/4408): Per-run hooks not concurrency-safe (`_extra_hooks` race) | **Open** | [#4409](https://github.com/HKUDS/nanobot/pull/4409) (draft) |
| 🟠 **Medium** | [#4374](https://github.com/HKUDS/nanobot/issues/4374): SOUL.md/USER.md written to default workspace instead of project | **Open** | [#4387](https://github.com/HKUDS/nanobot/pull/4387) partial fix (fallback behavior) |
| 🟡 **Low** | [#4375](https://github.com/HKUDS/nanobot/issues/4375): Git commands blocked in workspace subdirectories | **Closed** | Resolved by earlier fix [#4380](https://github.com/HKUDS/nanobot/pull/4380); regression test in [#4393](https://github.com/HKUDS/nanobot/pull/4393) |

The highest-severity open bug (#4307) directly erases user conversation context — this is a data-loss-adjacent issue that warrants priority attention. PR #4373 appears to address the root cause but has not yet been merged.

## 6. Feature Requests & Roadmap Signals

| Feature | Signal Strength | Likelihood in Next Release |
|---|---|---|
| **Eager memory consolidation** | Strong — PR [#4402](https://github.com/HKUDS/nanobot/pull/4402) active, closes old issue #2604 | Very likely |
| **"Normie-friendly" UI / hidden settings** | Strong — PR [#4399](https://github.com/HKUDS/nanobot/pull/4399) + issue [#4390](https://github.com/HKUDS/nanobot/issues/4390) | Likely |
| **Optional feature/plugin system** | Emerging — PR [#4396](https://github.com/HKUDS/nanobot/pull/4396) is foundational | Likely |
| **Serper.dev web search provider** | Strong — PR [#4406](https://github.com/HKUDS/nanobot/pull/4406) ready for review | Likely |
| **Keenable search without API key** | Strong — PR [#4405](https://github.com/HKUDS/nanobot/pull/4405) ready | Likely |
| **Improved onboard wizard** | Moderate — PR [#4395](https://github.com/HKUDS/nanobot/pull/4395) | Likely |
| **Bedrock as optional extension** | Moderate — Depends on plugin architecture (#4396) | Medium-term |
| **Consolidation model routing** | Done — PR [#1391](https://github.com/HKUDS/nanobot/pull/1391) merged | Shipped |

**Prediction:** The next release (possibly 0.2.2 or 0.3.0) will likely focus on **memory reliability**, **UI simplification**, and **search provider expansion**.

## 7. User Feedback Summary

**Key pain points expressed:**

1. **Memory consolidation data loss** (#4307): Users running agents at scale (40k context window, 100k+ token turns) are losing delivery context after consolidation, making multi-turn reasoning unreliable. This is the most impactful open issue.

2. **Workspace asymmetry in project mode** (#4374): Project-local identity files (`SOUL.md`, `USER.md`) are read correctly but written to the wrong place, corrupting project isolation. Critical for users organizing agents by project folder.

3. **Concurrency in SDK usage** (#4408): The `Nanobot.run()` hook mutation pattern breaks in concurrent or async deployments — indicates growing programmatic/SDK usage of Nanobot.

4. **Setup complexity** (#4390): Non-technical users ("normies") find the multi-instance configuration overwhelming. The `onboard` wizard and hidden settings requests reflect demand for opinionated defaults.

**Satisfaction signals:** The WhatsApp transcription fix (#4353), Feishu QR registration (#4391), and Firecrawl keyless setup (#4403) show responsiveness to real-world deployment friction — users appreciate reduced API key burden.

## 8. Backlog Watch

| Item | Days Open | Note |
|---|---|---|
| [#4307](https://github.com/HKUDS/nanobot/issues/4307) — Consolidation wipes delivery message | 7 days | **Most critical.** Active fix PR (#4373) needs merge priority |
| [#4374](https://github.com/HKUDS/nanobot/issues/4374) — Workspace read/write asymmetry | 3 days | PR #4387 opened but only addresses fallback, not the write path |
| [#4390](https://github.com/HKUDS/nanobot/issues/4390) — Multi-instance UX | 2 days | Feature request; PR #4399 addresses part of it |
| [#1391](https://github.com/HKUDS/nanobot/pull/1391) — Consolidation model routing | 89 days old PR, recently merged | ✅ Resolved |
| [#4399](https://github.com/HKUDS/nanobot/pull/4399) — Configurable hidden setting sections | 1 day | New, needs review bandwidth |
| [#4395](https://github.com/HKUDS/nanobot/pull/4395) — Onboard wizard improvement | 1 day | New, competitive with other CLI tools' UX |

**Maintainer attention recommendation:** Prioritize merging the consolidation fix chain (#4373 → #4307), then address the workspace write-path bug (#4374). The queue of 20 open PRs needs triage to prevent contributor burnout.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-06-19

## 1. Today's Overview

Hermes Agent remains in a phase of intense community-driven development, with **50 issues and 50 PRs updated in the last 24h** — a high-throughput day signaling active contributor engagement and a responsive (if stretched) maintainer team. No new releases were published, suggesting the project is accumulating changes toward a future version bump. The activity is broadly split between **platform expansion** (WhatsApp per-group prompts, Teams adapter V2, Slack rich markdown), **stability fixes** (cron profile-awareness, Telegram streaming overflow, Gemini token accounting), and **desktop UX polish** (i18n, zoom, theme). The volume of P1 bug reports around session data loss and gateway reliability indicates that multi-profile and long-running gateway deployments remain the most fragile surface area.

## 2. Releases

**None today.** The last published version remains v0.16.0 (v2026.6.5). Multiple PRs reference fixes already merged to `main` that are not yet in a release (e.g., memory tool token waste fix in #48629).

## 3. Project Progress

### Merged / Closed PRs

| PR | Author | Description |
|---|---|---|
| [#48709](https://github.com/NousResearch/hermes-agent/pull/48709) | nova-celestials-sh | Added "Observatory" built-in dashboard theme with blue/violet stellar styling; improved theme discovery to honor both `.yaml` and `.yml` files. |
| [#48707](https://github.com/NousResearch/hermes-agent/pull/48707) | pricefoulger-bit | Closed — opened in error; no upstream contribution intended. |

### Active PRs of Note

- **[#48720](https://github.com/NousResearch/hermes-agent/pull/48720)** — WhatsApp `channel_prompts` support for per-group ephemeral system prompts (parthchandak02). Mirrors the Discord/Telegram/Slack/Mattermost pattern.
- **[#48719](https://github.com/NousResearch/hermes-agent/pull/48719)** — Fix: cron jobs now use profile-specific directories and resolve skills from the correct profile root (kyssta-exe). Fixes [#48649](https://github.com/NousResearch/hermes-agent/issues/48649).
- **[#48718](https://github.com/NousResearch/hermes-agent/pull/48718)** — Fix: Telegram streaming truncation to prevent infinite nested reply loops on messages exceeding 4096 chars (kyssta-exe). Fixes [#48648](https://github.com/NousResearch/hermes-agent/issues/48648).
- **[#48717](https://github.com/NousResearch/hermes-agent/pull/48717)** — Fix: Hindsight daemon now persists `embed_model` config across restarts to avoid embedding dimension mismatch errors (ycj).
- **[#48568](https://github.com/NousResearch/hermes-agent/pull/48568)** — Configurable `dashboard.chat_mode` with a new `DialogChatPage` for browser-native chat with session resume and attachments (nahumerous).
- **[#38846](https://github.com/NousResearch/hermes-agent/pull/38846)** — Multilingual i18n support for the desktop app covering 15 languages (iaendi). Branch synced with upstream `main` post-v0.16.0.
- **[#13767](https://github.com/NousResearch/hermes-agent/pull/13767)** — Microsoft Teams platform adapter V2 with Bot Framework ingress, Graph helpers, Adaptive Cards, and file consent flows (AlexLuzik). Long-running PR, actively updated today.
- **[#47051](https://github.com/NousResearch/hermes-agent/pull/47051)** — Slack rich markdown rendering by default with opt-out, streaming/finalize separation, and 12K-char block limit handling (tw0316).
- **[#48712](https://github.com/NousResearch/hermes-agent/pull/48712)** — Fix: Gemini adapter now includes thinking tokens in native output/reasoning accounting (briandevans).
- **[#48713](https://github.com/NousResearch/hermes-agent/pull/48713)** — Fix: naive one-shot cron timestamps now interpreted in the configured timezone, not the server process timezone (briandevans).
- **[#48711](https://github.com/NousResearch/hermes-agent/pull/48711)** — Fix: multi-type JSON Schema arrays preserved as `anyOf` instead of dropping all but the first type (teknium1).
- **[#48708](https://github.com/NousResearch/hermes-agent/pull/48708)** — Agentic Resource Discovery (ARD) for skills and MCP servers — agents can discover, publish, and connect capabilities at runtime (AMEOBIUS).
- **[#7817](https://github.com/NousResearch/hermes-agent/pull/7817)** — Security: additional `DANGEROUS_PATTERNS` entries to close `launchctl` and CLI self-termination gaps (BrownBear127).

## 4. Community Hot Topics

### Most Discussed Issues (by comment count)

1. **[#47477](https://github.com/NousResearch/hermes-agent/issues/47477)** (5 comments, CLOSED) — WhatsApp Group Sending with Hermes Skill on Termux: a one-file guide for setting up WhatsApp message sending from Hermes in a Termux environment. High community interest in mobile/WhatsApp integration patterns.

2. **[#38478](https://github.com/NousResearch/hermes-agent/issues/38478)** (5 comments, OPEN) — Camofox browser screenshots are cropped or zoomed incorrectly due to viewport/resolution mismatch. A persistent issue (16 days old) with no fix PR yet.

3. **[#40166](https://github.com/NousResearch/hermes-agent/issues/40166)** (5 comments, 👍6, OPEN) — Desktop app needs font size / zoom control. macOS-native zoom shortcuts don't work. This is the **most upvoted active issue** in today's set, reflecting strong demand for desktop accessibility improvements. Related: [#48658](https://github.com/NousResearch/hermes-agent/issues/48658) (zoom reset on Windows).

4. **[#33314](https://github.com/NousResearch/hermes-agent/issues/33314)** (4 comments, OPEN) — Post-update check hooks for skill/profile drift detection. Users want a way to detect when upstream bundled skill changes conflict with local modifications.

5. **[#37369](https://github.com/NousResearch/hermes-agent/issues/37369)** (4 comments, CLOSED) — File descriptor leak in `response_store.db` causing gateway crashes after ~2 days on Telegram. A serious stability bug; closed but worth verifying the fix is in the next release.

### Underlying Needs

- **Desktop UX parity with native apps**: zoom, font size, real-time message updates, and session persistence are recurring themes. The desktop app is clearly a priority surface.
- **Multi-profile reliability**: session data loss, empty `state.db`, and cron path issues all stem from incomplete multi-profile support. This is a structural concern, not a one-off bug.
- **Platform coverage**: WhatsApp, Teams, Slack, and Telegram are all seeing active investment, reflecting Hermes's positioning as a multi-channel AI gateway.

## 5. Bugs & Stability

### P1 — Critical

| Issue | Status | Fix PR? |
|---|---|---|
| **[#48519](https://github.com/NousResearch/hermes-agent/issues/48519)** — Sub-profile gateway: sessions created in `sessions.json` but `state.db` remains empty, causing complete session data loss | OPEN | ❌ None |
| **[#44794](https://github.com/NousResearch/hermes-agent/issues/44794)** — `/compress` deletes original messages from `state.db` when session rotation fails | CLOSED | Fix likely merged; issue closed |
| **[#39704](https://github.com/NousResearch/hermes-agent/issues/39704)** — Session Hygiene compression overwrites original messages when `_session_db` is `None` | CLOSED | Fix likely merged; issue closed |
| **[#47202](https://github.com/NousResearch/hermes-agent/issues/47202)** — Context compression silently loses unflushed messages (`end_session` without flush) | CLOSED | Fix likely merged; issue closed |
| **[#37369](https://github.com/NousResearch/hermes-agent/issues/37369)** — FD leak: `response_store.db` opens multiple SQLite connections, hits ulimit after ~2 days | CLOSED | Fix likely merged; issue closed |

### P2 — High

| Issue | Status | Fix PR? |
|---|---|---|
| **[#48649](https://github.com/NousResearch/hermes-agent/issues/48649)** — Cron jobs not profile-aware; skills and storage use global paths | OPEN | ✅ [#48719](https://github.com/NousResearch/hermes-agent/pull/48719) |
| **[#47868](https://github.com/NousResearch/hermes-agent/issues/47868)** — Strict chat-completions providers reject leaked `messages[].timestamp` metadata | OPEN | ❌ None |
| **[#48689](https://github.com/NousResearch/hermes-agent/issues/48689)** — `hermes doctor` reports stale npm vulnerability and false-positive Gemini API key error | OPEN | ❌ None |
| **[#40137](https://github.com/NousResearch/hermes-agent/issues/40137)** — Terminal wrapper injects Windows paths when running in WSL | OPEN | ❌ None |

### P3 — Medium

| Issue | Status | Fix PR? |
|---|---|---|
| **[#45924](https://github.com/NousResearch/hermes-agent/issues/45924)** — Hermes + Gemma 4 12B via Ollama crashes on first message | OPEN | ❌ None |
| **[#33055](https://github.com/NousResearch/hermes-agent/issues/33055)** — Qwen 3.7-max on OpenCode Go returns 401 "not supported for format oa-compat" | OPEN | ❌ None |
| **[#48702](https://github.com/NousResearch/hermes-agent/issues/48702)** — Desktop app doesn't show Telegram session messages in real-time | OPEN | ❌ None |
| **[#48658](https://github.com/NousResearch/hermes-agent/issues/48658)** — Desktop zoom level resets when switching sessions/routes on Windows | OPEN | ❌ None |

**Stability Assessment:** The P1 session data loss bugs are the most concerning pattern. Three were closed today (likely fixed in `main`), but [#48519](https://github.com/NousResearch/hermes-agent/issues/48519) — the sub-profile gateway data loss — remains open with no fix PR. This should be prioritized for the next patch release.

## 6. Feature Requests & Roadmap Signals

### Likely Candidates for Next Version (v0.16.1 or v0.17.0)

| Issue | Signals | Prediction |
|---|---|---|
| **[#40166](https://github.com/NousResearch/hermes-agent/issues/40166)** — Desktop font size / zoom control (👍6) | Highest reaction count; desktop UX is a stated priority | **High probability** — aligns with active desktop PRs |
| **[#48715](https://github.com/NousResearch/hermes-agent/issues/48715)** — `/status` should display active model | Simple fix, fresh issue | **High probability** — trivial to address |
| **[#48716](https://github.com/NousResearch/hermes-agent/issues/48716)** — Windows Native Integration Package (no Docker/WSL2) | New issue, reflects Windows user demand | **Medium** — significant scope but addresses a growing user segment |
| **[#48011](https://github.com/NousResearch/hermes-agent/issues/48011)** — First-class Mission/Project source-of-truth primitive | Conceptual, would require design work | **Low for next version** — likely a longer-term RFC |
| **[#41190](https://github.com/NousResearch/hermes-agent/issues/41190)** — Unified plugin route selector for per-turn provider/model override | Architectural, touches core routing | **Medium** — aligns with plugin system investment |
| **[#40297](https://github.com/NousResearch/hermes-agent/issues/40297)** — Desktop workspace selectable per session (👍5) | Strong reactions, desktop priority | **Medium** — may be bundled with other desktop UX work |
| **[#43784](https://github.com/NousResearch/hermes-agent/issues/43784)** — Shareable Profile Templates | Community demand for profile management | **Medium** — depends on profile system stabilization |

### Platform Expansion Roadmap

The active PRs for **Microsoft Teams V2** ([#13767](https://github.com/NousResearch/hermes-agent/pull/13767)), **WhatsApp channel prompts** ([#48720](https://github.com/NousResearch/hermes-agent/pull/48720)), and **Slack rich markdown** ([#47051](https://github.com/NousResearch/hermes-agent/pull/47051)) suggest Hermes is systematically closing platform parity gaps. Teams is the most significant addition and, once merged, will make Hermes one of the few open-source AI agents with native Teams bot support.

## 7. User Feedback Summary

### Pain Points

1. **Session data loss is the #1 user fear.** Multiple issues ([#48519](https://github.com/NousResearch/hermes-agent/issues/48519), [#44794](https://github.com/NousResearch/hermes-agent/issues/44794), [#39704](https://github.com/NousResearch/hermes-agent/issues/39704), [#47202](https://github.com/NousResearch/hermes-agent/issues/47202)) describe scenarios where conversations are silently lost — through compression, rotation, or profile misconfiguration. Users running long-lived gateways are particularly affected.

2. **Desktop app feels incomplete compared to CLI.** Missing zoom/font controls ([#40166](https://github.com/NousResearch/hermes-agent/issues/40166), [#48658](https://github.com/NousResearch/hermes-agent/issues/48658)), no real-time Telegram message updates ([#48702](https://github.com/NousResearch/hermes-agent/issues/48702)), and workspace locked to launch-time cwd ([#40297](https://github.com/NousResearch/hermes-agent/issues/40297)) are the top complaints. The desktop app is clearly a priority but lags behind the gateway/CLI experience.

3. **Multi-profile support is fragile.** Cron jobs, session storage, and state databases all have edge cases when running under non-default profiles. Power users who rely on profiles for role-based agent configuration are hitting these issues regularly.

4. **Windows is a second-class platform.** Issues [#48716](https://github.com/NousResearch/hermes-agent/issues/48716) (no native Windows install), [#40137](https://github.com/NousResearch/hermes-agent/issues/40137) (WSL path injection), and [#48714](https://github.com/NousResearch/hermes-agent/pull/48714) (CMD window popups) all reflect Windows friction. The community is actively submitting PRs to address this.

### Satisfaction Indicators

- The i18n PR ([#38846](https://github.com/NousResearch/hermes-agent/pull/38846)) with 15 languages shows strong international community engagement.
- The WhatsApp Termux guide ([#47477](https://github.com/NousResearch/hermes-agent/issues/47477)) being closed and merged suggests the community values practical onboarding content.
- Multiple community-submitted fix PRs (cron, Telegram, Gemini, Docker) indicate a healthy contributor pipeline.

## 8. Backlog Watch

### Issues Needing Maintainer Attention

| Issue | Age | Why It Matters |
|---|---|---|
| **[#48519](https://github.com/NousResearch/hermes-agent/issues/48519)** — Sub-profile gateway session data loss | 1 day | **P1 data loss with no fix PR.** This is the most urgent unaddressed issue. |
| **[#47868](https://github.com/NousResearch/hermes-agent/issues/47868)** — Leaked `timestamp` metadata breaks strict providers | 2 days | Blocks users on OpenCode Go / Fireworks; straightforward schema fix. |
| **[#38478](https://github.com/NousResearch/hermes-agent/issues/38478)** — Camofox browser screenshots cropped | 16 days | No response or fix; browser tool reliability is core functionality. |
| **[#45924](https://github.com/NousResearch/hermes-agent/issues/45924)** — Gemma 4 12B crashes via Ollama | 5 days | Local LLM support is a key differentiator; model-specific crashes erode trust. |
| **[#48689](https://github.com/NousResearch/hermes-agent/issues/48689)** — `hermes doctor` false positives | 1 day | Undermines the diagnostic tool's credibility; likely easy fix. |
| **[#40137](https://github.com/NousResearch/hermes-agent/issues/40137)** — WSL terminal path injection | 14 days | Cross-platform desktop users blocked; no PR. |

### PRs at Risk of Stalling

| PR | Age | Risk |
|---|---|---|
| **[#13767](https://github.com/NousResearch/hermes-agent/pull/13767)** — Microsoft Teams V2 | 58 days | Large PR, actively updated but review complexity may cause delays. |
| **[#38846](https://github.com/NousResearch/hermes-agent/pull/38846)** — Desktop i18n (15 languages) | 15 days | Synced with upstream but needs review bandwidth. |
| **[#26021](https://github.com/NousResearch/hermes-agent/pull/26021)** — Gemini Google Search Grounding | 34 days | Web provider plugin; may need security review. |
| **[#7817](https://github.com/NousResearch/hermes-agent/pull/7817)** — Security: launchctl self-termination gaps | 68 days | Oldest active PR; security patches should be fast-tracked. |

---

**Overall Health Assessment:** Hermes Agent is in a **high-activity, moderate-risk** state. The contributor pipeline is strong (50 PRs/day), but the maintainer team appears to be struggling to keep pace with triage and review. The concentration of session data loss bugs, the absence of a release in recent memory, and the growing backlog of Windows-specific issues are the three areas most likely to impact user retention if unaddressed. The next release should prioritize stability fixes over feature expansion.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-06-19

---

## 1. Today's Overview

PicoClaw saw moderate activity on 2026-06-19, with **15 PRs updated** (7 merged/closed, 8 still open) and **2 issues updated** (1 open, 1 closed). The majority of merged PRs are routine dependency bumps driven by Dependabot, but two substantive code fixes landed today addressing real user-facing bugs. No new releases were published. The project appears to be in a maintenance-and-hardening phase, with contributors actively patching edge cases in the sub-agent spawning system and web security layer.

---

## 2. Releases

**None.** No new versions were published in the last 24 hours.

---

## 3. Project Progress

### Merged / Closed PRs (7)

| # | PR | Summary |
|---|-----|---------|
| [#3141](https://github.com/sipeed/picoclaw/pull/3141) | `fix(web_search): add diagnostic logging for Brave empty results` | Adds logging when Brave Search API returns HTTP 200 with zero results, helping diagnose silent failures from the recent `.security.yml` key migration. Directly addresses [#3125](https://github.com/sipeed/picoclaw/issues/3125). |
| [#3144](https://github.com/sipeed/picoclaw/pull/3144) | `build(deps): bump actions/checkout 6 → 7` | GitHub Actions CI dependency update. |
| [#3146](https://github.com/sipeed/picoclaw/pull/3146) | `build(deps): bump golang.org/x/term 0.43.0 → 0.44.0` | Go standard library dependency update. |
| [#3147](https://github.com/sipeed/picoclaw/pull/3147) | `build(deps): bump Azure azidentity 1.13.1 → 1.14.0` | Azure SDK dependency update. |
| [#3148](https://github.com/sipeed/picoclaw/pull/3148) | `build(deps): bump golang.org/x/sys 0.45.0 → 0.46.0` | Go sys dependency update (adds GPIO constants). |
| [#3149](https://github.com/sipeed/picoclaw/pull/3149) | `build(deps): bump anthropic-sdk-go 1.46.0 → 1.50.2` | Anthropic SDK dependency update. |
| [#3107](https://github.com/sipeed/picoclaw/pull/3107) | `build(deps): bump copilot-sdk/go 0.2.0 → 1.0.1` | GitHub Copilot SDK dependency update. |

**Key takeaway:** The two meaningful fixes — Brave search diagnostics and the ISATAP SSRF guard (see below as open) — suggest the team is responding to regressions introduced by the recent architectural migration of API keys to `.security.yml`.

---

## 4. Community Hot Topics

### Most Active / Commented Items

| # | Item | Comments | Signal |
|---|------|----------|--------|
| [#3094](https://github.com/sipeed/picoclaw/issues/3094) | **[Bug] Async sub-agent (spawn) duplicate messages via ForUser field** | 2 | Users on Feishu/Telegram receive **two identical messages** when a sub-agent completes — one raw push, one formatted summary. This is a UX annoyance affecting all multi-agent workflows. |
| [#3125](https://github.com/sipeed/picoclaw/issues/3125) | **[Bug] web_search fails silently with Brave API key from .security.yml** | 0 (closed) | Silent failure of a core tool after the security config migration. Now closed via [#3141](https://github.com/sipeed/picoclaw/pull/3141). |

**Underlying needs:** The community is hitting friction around **two areas**: (1) the sub-agent orchestration UX, where message routing logic is not cleanly separating "raw result" from "user-facing output," and (2) the recent `.security.yml` migration, which broke Brave search silently. Both point to a need for better integration testing around configuration migrations.

---

## 5. Bugs & Stability

### Ranked by Severity

| Severity | Issue | Status | Fix PR | Notes |
|----------|-------|--------|--------|-------|
| 🔴 **High** | [#3094](https://github.com/sipeed/picoclaw/issues/3094) — Duplicate messages on async sub-agent completion | 🟡 Open | [#3142](https://github.com/sipeed/picoclaw/pull/3142) (open, not yet merged) | Affects all users of `spawn` tool; fix PR exists and targets root cause (`ForUser` field in sub-turn `ToolResult`) |
| 🟠 **Medium** | [#3125](https://github.com/sipeed/picoclaw/issues/3125) — `web_search` silent failure with Brave API | ✅ Closed | [#3141](https://github.com/sipeed/picoclaw/pull/3141) (merged) | Root cause: `.security.yml` migration broke key resolution; fix adds diagnostic logging |
| 🟡 **Low** | [#3074](https://github.com/sipeed/picoclaw/issues/3074) — SSRF guard bypass via ISATAP IPv6 literals | 🟡 Open | [#3143](https://github.com/sipeed/picoclaw/pull/3143) (open) | Security fix PR submitted; blocks private IPv4 embeds in ISATAP format |

**Stability assessment:** The duplicate-message bug (#3094) is the most impactful open issue — it degrades the user experience for any workflow involving sub-agents. The good news is that a well-scoped fix PR (#3142) is already open and appears to target the exact root cause.

---

## 6. Feature Requests & Roadmap Signals

No explicit feature requests were filed in the last 24 hours. However, the following **implicit roadmap signals** emerge from the PR/issue activity:

- **Sub-agent orchestration polish** — The duplicate-message fix ([#3142](https://github.com/sipeed/picoclaw/pull/3142)) suggests the team is investing in making the `spawn` tool production-ready. Expect further refinements to sub-agent result routing in upcoming releases.
- **Security hardening** — The ISATAP SSRF fix ([#3143](https://github.com/sipeed/picoclaw/pull/3143)) and the `.security.yml` migration fallout indicate a broader push to harden the web tooling layer. More SSRF and input-validation fixes may follow.
- **Copilot SDK v1 adoption** — Dependabot opened [#3145](https://github.com/sipeed/picoclaw/pull/3145) to bump `copilot-sdk/go` from `0.2.0` to `1.0.2` (a major version jump). This likely brings breaking API changes that will need manual review.

---

## 7. User Feedback Summary

**Pain points identified:**

1. **Duplicate notifications in multi-agent workflows** ([#3094](https://github.com/sipeed/picoclaw/issues/3094)) — Users running async sub-agents via `spawn` receive two messages on Feishu/Telegram: one unformatted raw result and one polished summary. This is confusing and clutters channels. The user explicitly notes the first message has "almost no formatting, rough content."

2. **Silent tool failures after config migration** ([#3125](https://github.com/sipeed/picoclaw/issues/3125)) — After the `.security.yml` migration, `web_search` with Brave API stopped working without any error — just `"No results for: [query]"`. The LLM correctly called the tool, but the backend silently returned empty. This erodes user trust in tool reliability.

**Satisfaction signals:** Both bugs have received prompt maintainer attention with fix PRs submitted within days, suggesting a responsive development team.

---

## 8. Backlog Watch

The following items have been open for **8+ days** without resolution and may need maintainer attention:

| # | Item | Age | Why It Matters |
|---|------|-----|----------------|
| [#3094](https://github.com/sipeed/picoclaw/issues/3094) | Duplicate messages on sub-agent completion | 9 days | Core UX bug affecting all `spawn` users; fix PR exists but unmerged |
| [#3100](https://github.com/sipeed/picoclaw/pull/3100) | `build(deps-dev): bump @vitejs/plugin-react 6.0.1 → 6.0.2` | 8 days | Stale frontend dependency bump; low risk, should be merged or closed |
| [#3101](https://github.com/sipeed/picoclaw/pull/3101) | `build(deps-dev): bump vite 8.0.13 → 8.0.16` | 8 days | Stale frontend dependency bump; includes bug fixes |
| [#3103](https://github.com/sipeed/picoclaw/pull/3103) | `build(deps-dev): bump typescript-eslint 8.59.3 → 8.61.0` | 8 days | Stale frontend linting dependency |
| [#3104](https://github.com/sipeed/picoclaw/pull/3104) | `build(deps): bump shadcn 4.7.0 → 4.11.0` | 8 days | Stale frontend UI dependency; may include component improvements |
| [#3105](https://github.com/sipeed/picoclaw/pull/3105) | `build(deps-dev): bump eslint 10.2.1 → 10.4.1` | 8 days | Stale frontend linting dependency |

**Recommendation:** The five stale frontend dependency PRs ([#3100](https://github.com/sipeed/picoclaw/pull/3100)–[#3105](https://github.com/sipeed/picoclaw/pull/3105)) are all low-risk and should be batch-merged or closed to reduce backlog noise. The critical item is [#3094](https://github.com/sipeed/picoclaw/issues/3094) — its fix PR [#3142](https://github.com/sipeed/picoclaw/pull/3142) is ready and should be prioritized for merge.

---

*Data source: [github.com/sipeed/picoclaw](https://github.com/sipeed/picoclaw) | Digest generated: 2026-06-19*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-06-19

---

## 1. Today's Overview

NanoClaw is in a phase of **high-throughput stabilization**. In the 24-hour window ending 2026-06-19, the project received **21 pull events** (6 merged, 15 still open) and **5 issue updates** (2 closed, 3 active), with **no new releases**. The merged PRs cluster tightly around three themes: iMessage channel hardening, Korean docs localization, and dead-code cleanup (removed the orphaned `resolveGroupIpcPath` helper and mirrored `.claude` skills into `.agents` via symlinks). The 15 open PRs reveal a community that is independently converging on several of the same bugs — most notably Discord message chunking, `safeParseContent` primitive-JSON handling, `ncl` socket and CLI issues, and workspace file-read sandboxing — producing multiple competing PRs for the same fix. This signals a healthy contributor base but also highlights the need for rapid maintainer triage to avoid wasted effort.

---

## 2. Releases

**No new releases.** The latest published version remains **v2.1.18** (changelog expanded in [PR #2798](https://github.com/nanocoai/nanoclaw/pull/2798), open as of today). A release candidate is likely imminent given the volume of merged security and bug-fix PRs.

---

## 3. Project Progress (Merged / Closed PRs Today)

| # | PR | Type | Summary |
|---|-----|------|---------|
| ✅ 7 | [#2792](https://github.com/nanocoai/nanoclaw/pull/2792) | **FIX** (iMessage) | `mkdir -p src/channels` before writing `imessage.ts` in `/add-imessage` skill — fixes a failure on fresh checkouts (#2791). |
| ✅ 8 | [#2803](https://github.com/nanocoai/nanocaw/pull/2803) | **REFACTOR** (cleanup) | Removed the dead `resolveGroupIpcPath` function — IPC was fully removed in v2 and no production caller remained. |
| ✅ 9 | [#2810](https://github.com/nanocoai/nanoclaw/pull/2810) | **REFACTOR** (DX) | Symlinked `.agents/skills → .claude/skills` and `AGENTS.md → CLAUDE.md`, establishing `.claude` as single source of truth and eliminating duplicate skills directories. |
| ✅ 10 | [#2793](https://github.com/nanocoai/nanoclaw/pull/2793) | **FEATURE** (new) | **Per-message approval policies for connected agents** — adds an optional, directed `require-approval` gate on agent-to-agent connections. Without a policy, behavior is unchanged (backward compatible). When a policy exists for A→B, messages A→B are held, an approval card is sent to B's owner, and the message is released or rejected. |
| ✅ 11 | [#2811](https://github.com/nanocoai/nanoclaw/pull/2811) | **FIX** (setup) | Fixes setup to allow env-selected agent provider (previously the `setup` flow always hard-selected a provider instead of honoring `ANTHROPIC_API_KEY` / env vars). |
| ✅ 12 | [#2806](https://github.com/nanocoai/nanoclaw/pull/2806) | **DOCS** (i18n) | Adds `README_ko.md` (Korean) and links it from the existing language-switcher pattern. |

**Key takeaway:** The most significant merged feature is **#2793 — per-message approval gates between connected agents**, which substantially improves the trust model for agent-to-agent communication. The cleanup and setup PRs reduce friction for new contributors and fresh installations.

---

## 4. Community Hot Topics

### High-Engagement Issues

| Issue | 👍 / 💬 | Why It Matters |
|-------|---------|----------------|
| **[#957](https://github.com/nanocoai/nanoclaw/issues/957)** — *Suggest supporting Podman as alternative to Docker* | 7 👍 / 10 💬 | A recurring theme in the container-tooling ecosystem: users on Fedora, RHEL, and developers who prefer rootless containers want first-class Podman guidance. Closed today — likely resolved or moved to tracking. |
| **[#29](https://github.com/nanocoai/nanoclaw/issues/29)** — *Add Signal as messaging channel* | 4 👍 / 7 💬 | Privacy-aware users want a Signal integration to match the existing `/add-telegram`, `/add-slack`, `/add-discord` skills. Closed today — but the Signal ecosystem's sealed-sender and `libsignal` dependency complexity may explain why it hasn't shipped. |
| **[#2632](https://github.com/nanocoai/nanoclaw/issues/2632)** — *Clarify status of Telegram agent-swarm / multi-bot identity in v2* | 0 👍 / 2 💬 | A migration-path question: the old `/add-telegram-swarm` skill was removed (commit `126b3f4`) and users need guidance on what replaces it. Still open — signals a documentation gap for the v1→v2 migration. |

### High-Activity PRs (Competing Fixes)

The most interesting structural signal is **clusters of PRs fixing the same bug**:

- **Discord message truncation** → [#2812](https://github.com/nanocoai/nanoclaw/pull/2812) and [#2816](https://github.com/nanocoai/nanoclaw/pull/2816) (both open, same root cause, different authors')
- **`safeParseContent` primitive JSON** → [#2801](https://github.com/nanocoai/nanoclaw/pull/2801) and [#2815](https://github.com/nanocoai/nanoclaw/pull/2815)
- **`ncl` socket response cap** → [#2802](https://github.com/nanocoai/nanoclaw/pull/2802) and [#2813](https://github.com/nanocoai/nanoclaw/pull/2813)
- **Workspace `send_file` sandbox** → [#2817](https://github.com/nanocoai/nanoclaw/pull/2817) and [#2818](https://github.com/nanocoai/nanoclaw/pull/2818)

The pattern of "replacement PRs" (a second PR filed hours after a first, typically by a contributor named `mksocial19-code`) suggests either a review culture of iterative refinement, or maintainers requesting additional test coverage before merge.

---

## 5. Bugs & Stability

### Critical 🔴

| # | Type | Description | Fix PR |
|---|------|-------------|--------|
| [Issue #2807](https://github.com/nanocoai/nanoclaw/issues/2807) | **SECURITY** — Privilege escalation | Non-owner members can spawn persistent child agents without approval in owner-initialized groups. New issue, no comments, no linked PR. Reported 2026-06-18 by YLChen-007. | ❌ None yet |

### Medium 🟡

| # | Type | Description | Fix PR |
|---|------|-------------|--------|
| [Issue #2784](https://github.com/nanocoai/nanoclaw/issues/2784) | **BUG** — Stale session source | `container-runner.ts` only watches `index.ts` for staleness; changes to `ipc-mcp-stdio.ts` are silently ignored, causing agents to run outdated code. | ❌ None yet |
| [Issue #2804](https://github.com/nanocoai/nanoclaw/issues/2804) | **BUG** — CLI broken | `ncl messaging-groups create` always throws `NOT NULL constraint failed: messaging_groups.instance` — the CLI create path is completely dead. | ✅ [#2804](https://github.com/nanocoai/nanoclaw/pull/2804) (open) |
| [Issue #2808](https://github.com/nanocoai/nanoclaw/issues/2808) | **BUG** — DB idempotency | `insertMessage` is not idempotent on duplicate ID; re-inserts crash. Also: `agent_group_id` not stamped on approval rows. | ✅ [#2808](https://github.com/nanocoai/nanoclaw/pull/2808) (open) |

### Low 🟢

| # | Type | Description | Fix PR |
|---|------|-------------|--------|
| [Issue #2791](https://github.com/nanocoai/nanoclaw/issues/2791) | **BUG** — iMessage setup | `/add-imessage` skill fails on fresh checkout (missing `src/channels/` dir). | ✅ [#2792](https://github.com/nanocoai/nanoclaw/pull/2792) — **MERGED** |

**Stability assessment:** The security issue (#2807) is the most pressing item — a privilege-escalation vector in multi-user groups with no mitigation in place. The CLI `messaging-groups create` bug (#2804) is a total breakage of a core workflow. Both need maintainer attention today.

---

## 6. Feature Requests & Roadmap Signals

| Request | Source | Likelihood in Next Release | Rationale |
|---------|--------|---------------------------|-----------|
| **Per-message approval for agent-to-agent** | [PR #2793](https://github.com/nanocoai/nanoclaw/pull/2793) | ✅ **Shipped** (merged) | Already merged; will appear in next release. |
| **Apple Container runtime support** | [PR #2809](https://github.com/nanocoai/nanoclaw/pull/2810) | 🟡 **High** | Env-gated (`CONTAINER_RUNTIME=container`), zero impact on existing Docker users, adds macOS-native container support. |
| **Remote OneCLI gateway** | [PR #2809](https://github.com/nanocoai/nanoclaw/pull/2809) | 🟡 **High** | Same PR as above; enables remote container hosts. |
| **CLI-derived dashboard skill (`/add-clidash`)** | [PR #2795](https://github.com/nanocoai/nanoclaw/pull/2795) | 🟡 **Medium** | Read-only dashboard skill; low risk, utility value for operators. |
| **Podman support** | [Issue #957](https://github.com/nanocoai/nanoclaw/issues/957) | 🟢 **Low** | Closed without implementation; likely needs a champion to write the docs/skill. |
| **Signal channel** | [Issue #29](https://github.com/nanocoai/nanoclaw/issues/29) | 🟢 **Low** | Closed; `libsignal` dependency complexity is a known barrier. |
| **Telegram swarm / multi-bot identity in v2** | [Issue #2632](https://github.com/nanocoai/nanoclaw/issues/2632) | 🟡 **Medium** | Open question; needs a design decision from maintainers on whether to restore, replace, or document the removal. |

---

## 7. User Feedback Summary

**Pain points expressed in the last 24h:**

1. **Security trust model is insufficient for multi-user groups.** The #2807 report is the most serious: non-owners can silently create persistent child agents. Users running NanoClaw in team/enterprise settings need granular approval workflows — the merged #2793 (per-message approval) partially addresses this at the agent-to-agent layer, but the group-level privilege model needs a broader fix.

2. **CLI is unreliable.** The `messaging-groups create` NOT-NULL crash (#2804) means a core onboarding flow is completely broken. Combined with the socket timeout and response-cap issues (#2802, #2813), the `ncl` CLI is accumulating paper-cut bugs that erode confidence.

3. **Container runtime lock-in.** Users want Podman (#957) and Apple Container (#2809) support. The project's Docker-only assumption is increasingly at odds with the macOS developer ecosystem (where Apple Container is now a first-class option) and the Linux security community (where Podman is preferred).

4. **Migration documentation gaps.** The Telegram swarm deprecation (#2632) leaves v1 users without a clear upgrade path. This is a recurring pattern: features are removed in v2 without a migration guide.

5. **Discord integration quality.** Long replies being silently truncated (#2812, #2816) is a visible, user-facing bug that degrades the experience for Discord-heavy deployments.

**Satisfaction signals:** The iMessage fix (#2792) and Korean docs (#2806) show the project is responsive to platform-specific and i18n needs. The per-message approval feature (#2793) is a strong signal that the team is investing in enterprise-grade trust controls.

---

## 8. Backlog Watch

These items have been open without resolution and may need maintainer attention:

| # | Item | Age | Risk | Recommendation |
|---|------|-----|------|----------------|
| [Issue #2807](https://github.com/nanocoai/nanoclaw/issues/2807) | Security: non-owner child agent creation | 1 day | 🔴 **Critical** | Needs immediate triage; assign to security-minded maintainer. |
| [Issue #2632](https://github.com/nanocoai/nanoclaw/issues/2632) | Telegram swarm v2 status unclear | 21 days | 🟡 **Medium** | Needs a definitive answer from a maintainer — even a "we removed it, here's the alternative" comment would unblock the reporter. |
| [Issue #2784](https://github.com/nanocoai/nanoclaw/issues/2784) | Container-runner staleness check incomplete | 3 days | 🟡 **Medium** | Straightforward fix (add `ipc-mcp-stdio.ts` to staleness check); good first-PR candidate. |
| [PR #2809](https://github.com/nanocoai/nanoclaw/pull/2809) | Apple Container + OneCLI gateway | 1 day | 🟢 **Low** | Significant new platform support; needs review bandwidth. |
| [PR #2795](https://github.com/nanocoai/nanoclaw/pull/2795) | `/add-clidash` dashboard skill | 2 days | 🟢 **Low** | Low-risk utility; quick review would be appreciated by contributor. |

---

**Overall Health: 🟡 Stable, with security concern.** The project is shipping fixes at a strong pace and the contributor community is active and self-organizing (evidenced by the competing-PR pattern). The critical security issue (#2807) and the broken CLI create path (#2804) are the two items that most urgently need maintainer bandwidth. A release incorporating the merged security and bug-fix PRs would be well-timed.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest — 2026-06-19

**Repository:** [github.com/nullclaw/nullclaw](https://github.com/nullclaw/nullclaw)

---

## 1. Today's Overview

NullClaw shows steady mid-level activity with 4 open issues and 5 open PRs updated in the last 24 hours, though no new releases were published. The project is in an active development phase focused on streaming improvements, documentation expansion, and memory system enhancements. All PRs were opened today (2026-06-18), indicating a burst of contributor momentum. However, the zero merge/close rate across all PRs suggests the project may be experiencing a review bottleneck or these submissions are still in early iteration. No new issues were closed, and no releases shipped, pointing to a feature-development cycle rather than a release-prep cycle.

---

## 2. Releases

No new releases in the reporting period.

---

## 3. Project Progress

No PRs were merged or closed today. All 5 open PRs remain unmerged:

- **[PR #964](https://github.com/nullclaw/nullclaw/pull/964)** — *Enable native API-level tool calls during streaming* — Fixes a bug in `agent/root.zig` where streaming requests disabled native tool support by passing `.tools = null`. This is a core runtime fix.
- **[PR #965](https://github.com/nullclaw/nullclaw/pull/965)** — *Structured streaming tool-call support for SSE parser* — Companion to #965, adds SSE parser support for structured tool-call responses during streaming.
- **[PR #961](https://github.com/nullclaw/nullclaw/pull/961)** — *Configurable auto-recall, recall_limit, max_context_bytes for memory* — Adds three new config keys under `memory` to control recall behavior, including the ability to disable memory enrichment entirely.
- **[PR #963](https://github.com/nullclaw/nullclaw/pull/963)** — *Document WeChat personal QR code login channel* — Documentation addition for WeChat personal account support via QR code login.
- **[PR #962](https://github.com/nullclaw/nullclaw/pull/962)** — *Document native Anthropic provider with API key and OAuth* — Documentation for direct Anthropic API usage without proxies.

---

## 4. Community Hot Topics

| Topic | Link | Activity | Analysis |
|---|---|---|---|
| **ESP32 / Embedded Support** | [Issue #50](https://github.com/nullclaw/nullclaw/issues/50) | 4 comments, open since Feb 2026 | User exploring deployment on resource-constrained IoT hardware. Signals interest in edge/embedded use cases — a non-trivial ask for an AI agent framework. |
| **WeChat QR Code Login** | [Issue #817](https://github.com/nullclaw/nullclaw/issues/817) | 2 comments, addressed by PR #963 | Confirmed feature request now being documented. WeChat integration is a high-demand use case in the Chinese-speaking developer community. |
| **Subagent Spawning / Multi-Provider** | [Issue #190](https://github.com/nullclaw/nullclaw/issues/190) | 2 comments, open since Mar 2026 | Architectural feature request for spawning subagents with different LLM providers. Would enable heterogeneous multi-agent workflows. |
| **A2A Protocol Performance** | [Issue #913](https://github.com/nullclaw/nullclaw/issues/913) | 1 comment, open since May 2026 | User reports raw NullClaw messaging is faster than A2A protocol overhead. Suggests A2A implementation may have performance regression or missing optimization. |

---

## 5. Bugs & Stability

| Severity | Description | Link | Fix Status |
|---|---|---|---|
| **Medium** | Native tool calls disabled during streaming — `agent/root.zig` passes `.tools = null` when streaming is enabled, preventing API-level tool use in streaming mode. | [PR #964](https://github.com/nullclaw/nullclaw/pull/964) | **Fix proposed** (unmerged) |
| **Medium** | SSE parser lacks structured streaming tool-call support — related to the root fix in #964, the parser cannot handle tool-call responses embedded in streaming SSE chunks. | [PR #965](https://github.com/nullclaw/nullclaw/pull/965) | **Fix proposed** (unmerged) |
| **Low** | A2A protocol performance overhead — user reports measurable latency increase vs. raw messaging. | [Issue #913](https://github.com/nullclaw/nullclaw/issues/913) | No fix yet |

No crashes or regressions reported today.

---

## 6. Feature Requests & Roadmap Signals

| Request | Link | Likelihood of Near-Term Inclusion |
|---|---|---|
| **Configurable memory recall** (auto_recall, recall_limit, max_context_bytes) | [PR #961](https://github.com/nullclaw/nullclaw/pull/961) | **High** — PR is open and well-scoped; likely candidate for next release. |
| **Native Anthropic provider** (direct API key + OAuth) | [PR #962](https://github.com/nullclaw/nullclaw/pull/962) | **High** — Documentation PR suggests the feature already exists; just needs docs merge. |
| **WeChat personal account (QR login)** | [PR #963](https://github.com/nullclaw/nullclaw/pull/963) | **High** — Same as above; documentation implies feature is implemented. |
| **Subagent spawning with multi-provider support** | [Issue #190](https://github.com/nullclaw/nullclaw/issues/190) | **Low** — Architectural change; likely a longer-term roadmap item. |
| **ESP32 / embedded deployment** | [Issue #50](https://github.com/nullclaw/nullclaw/issues/50) | **Low** — Significant constraints; likely requires major architectural work. |

**Predicted next release focus:** Streaming tool-call fixes + memory configuration + documentation consolidation.

---

## 7. User Feedback Summary

- **Pain point — Streaming + tools broken:** The most actionable bug report is the streaming tool-call issue (PRs #964/#965). This is a functional regression that prevents users from using tool-calling with streaming responses, a core workflow for interactive agents.
- **Pain point — A2A performance:** At least one user has benchmarked and found the A2A protocol layer adds noticeable overhead. This could affect adoption if performance-sensitive users compare it to raw messaging.
- **Satisfaction signal — Documentation expansion:** Multiple contributors are proactively submitting documentation PRs (#962, #963), suggesting the community finds the project valuable enough to invest in improving docs. This is a positive health signal.
- **Use case diversity:** Users are exploring NullClaw across a wide range of environments — from ESP32 microcontrollers to WeChat integrations to A2A protocol deployments — indicating growing adoption beyond the core use case.

---

## 8. Backlog Watch

| Item | Link | Age | Concern Level |
|---|---|---|---|
| **ESP32 support** | [Issue #50](https://github.com/nullclaw/nullclaw/issues/50) | ~118 days | Has 4 comments but no resolution. May need a maintainer response setting expectations (supported / not supported / future consideration). |
| **Subagent spawning** | [Issue #190](https://github.com/nullclaw/nullclaw/issues/190) | ~109 days | Architectural feature with no maintainer comment visible. Risk of contributor frustration if left unacknowledged. |
| **A2A performance** | [Issue #913](https://github.com/nullclaw/nullclaw/issues/913) | ~38 days | Performance concern with no response yet. If A2A is a marketed feature, this deserves priority attention. |

**Recommendation:** The maintainers should triage these three issues with at minimum a status comment, especially #913 (performance) and #190 (architecture), as silence on substantive technical issues can deter contributors and users alike.

---

*Generated by OWL — Project digest for 2026-06-19*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

⚠️ Summary generation failed.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-06-19

---

## 1. Today's Overview

LobsterAI is in a high-velocity release cadence, with **14 PRs merged and 1 closed (net -15)** in the past 24 hours and **zero new issues opened** today. The dominant activity is the tail end of the **2026.6.11 release cycle** being merged into `main` (PR #2179), which bundles a large set of features spanning voice input, computer use, artifact sharing, and UI refinements. One open Dependabot PR (#1277) bumping Electron from 40.2.1 → 42.4.0 has been stale since April and warrants attention. A new **security vulnerability** (Issue #2176) was filed yesterday and is the most critical item on the board. Overall project health is strong — rapid iteration, tight PR turnaround — but the security issue and stale dependency upgrade need urgent triage.

---

## 2. Releases

**No new releases today.** The most recent completed release merges are:

| Release | PR | Date | Highlights |
|---------|-----|------|------------|
| 2026.6.11 | [#2179](https://github.com/netease-youdao/LobsterAI/pull/2179) | 2026-06-18 | Document artifact sharing (DOCX/PPTX/XLSX/PDF/CSV/TSV), Markdown & Mermaid sharing, realtime ASR voice input, Computer Use MVP, UI refinements |
| 2026.6.4 | [#2119](https://github.com/netease-youdao/LobsterAI/pull/2119) | 2026-06-18 | Voice input (ASR) with auth, artifact/shortcut/update fixes |
| 2026.6.2 | [#2107](https://github.com/netease-youdao/LobsterAI/pull/2107) | 2026-06-18 | Cowork selected text context, MCP/HTML share/artifact fixes |

**Migration notes:** The voice input system has undergone a significant architectural shift — the legacy one-shot ASR upload flow (`asr:recognize` IPC) was **removed** in PR #2160, making realtime ASR the sole mode. Integrators or downstream forks relying on the old IPC surface will need to migrate. The user-facing terminology also changed from "dictation/听写" to "voice input/语音输入" (PR #2177).

---

## 3. Project Progress

### Major Features Merged (Past 24h)

- **🖥️ Computer Use MVP** ([#2143](https://github.com/netease-youdao/LobsterAI/pull/2143)) — A built-in Computer Use kit for Windows x64 with marketplace metadata, skill bundle integrity verification, install/uninstall lifecycle, and a managed runtime resolver that bridges to an MCP server for listing apps/windows, launching apps, and screen interaction. Runtime bumped to 1.0.7 with UIA breadcrumb diagnostics ([#2156](https://github.com/netease-youdao/LobsterAI/pull/2156)).

- **🎙️ Realtime ASR Voice Input** ([#2148](https://github.com/netease-youdao/LobsterAI/pull/2148), [#2155](https://github.com/netease-youdao/LobsterAI/pull/2155), [#2160](https://github.com/netease-youdao/LobsterAI/pull/2160), [#2163](https://github.com/netease-youdao/LobsterAI/pull/2163)) — A complete voice input overhaul: realtime streaming ASR via WebSocket from renderer to main process, WAV header handling for first audio chunk, ASR quota management with daily in-memory tracking, refined recording UI, and removal of the legacy one-shot upload path. Dictation copy renamed to "voice input" ([#2177](https://github.com/netease-youdao/LobsterAI/pull/2177)).

- **📄 Artifact File Sharing Expansion** ([#2178](https://github.com/netease-youdao/LobsterAI/pull/2178), [#2179](https://github.com/netease-youdao/LobsterAI/pull/2179)) — Added sharing support for DOCX, PPTX, XLSX, PDF, CSV, TSV, Markdown, and Mermaid files from the Artifact panel. Markdown sharing bundles local image resources and a manifest into a zip; Mermaid uses a single-file zip.

- **🔧 Voice Input Architecture Refactor** ([#2111](https://github.com/netease-youdao/LobsterAI/pull/2111), [#2113](https://github.com/netease-youdao/LobsterAI/pull/2113)) — Split monolithic voice input into focused modules (ASR IPC, recording, WAV encoding, error handling). Added macOS microphone entitlement and audio-input permission policy. Moved system permission helpers out of `main.ts`.

- **🎨 UI Polish** ([#2150](https://github.com/netease-youdao/LobsterAI/pull/2150)) — Expert suite page controls made sticky, search/toolbar aligned with Skills/MCP page patterns.

---

## 4. Community Hot Topics

| # | Item | Signal | Analysis |
|---|------|--------|----------|
| 1 | [Issue #2176](https://github.com/netease-youdao/LobsterAI/issues/2176) — Security: arbitrary local file reads via artifact loading | 🔴 **Critical** — New security advisory, 1 comment | LobsterAI's automatic `MEDIA:` file reference parsing from assistant/tool output can be exploited to read arbitrary local files through a privileged Electron context. This is a **high-severity vulnerability** requiring immediate patching. |
| 2 | [Issue #1422](https://github.com/netease-youdao/LobsterAI/issues/1422) — MCP custom page delete dialog overflow | 🟡 **UX debt** — Stale since April, 1 comment | Long service names in the MCP custom page delete confirmation dialog cause layout overflow. Minor but indicates the MCP management UI needs responsive design attention. |

**Underlying needs:** The community is pushing LobsterAI toward broader **file format interoperability** (evidenced by the artifact sharing PRs) and **voice-first interaction** (the massive ASR investment). The security issue suggests the artifact auto-loading feature, while powerful, needs a sandboxing or allowlist review.

---

## 5. Bugs & Stability

| Severity | Issue | Status | Fix PR |
|----------|-------|--------|--------|
| 🔴 **Critical** | [#2176](https://github.com/netease-youdao/LobsterAI/issues/2176) — Arbitrary local file read via `MEDIA:` artifact auto-loading | Open, reported 2026-06-18 | None yet |
| 🟡 **Medium** | [#1422](https://github.com/netease-youdao/LobsterAI/issues/1422) — MCP delete dialog text overflow for long service names | Open, stale since 2026-04-03 | None yet |
| 🟢 **Low** | [#2155](https://github.com/netease-youdao/LobsterAI/pull/2155) — Duplicate realtime ASR start requests | **Fixed & merged** | PR #2155 |

**Assessment:** The critical security vulnerability (#2176) is the top priority. The bug allows message-derived arbitrary local file reads through the privileged Electron main process — this should be patched before the next release. The MCP dialog overflow is cosmetic and low-risk.

---

## 6. Feature Requests & Roadmap Signals

Based on merged work and open issues, the following trajectory is evident:

| Signal | Likelihood | Evidence |
|--------|------------|----------|
| **Computer Use expansion** (macOS/Linux support) | High | Windows x64 MVP just landed; cross-platform expansion is a natural next step |
| **Artifact ecosystem growth** (more file types, cloud sharing) | High | Rapid expansion from basic files → DOCX/PPTX/XLSX/PDF → Markdown/Mermaid in consecutive releases |
| **Voice input maturity** (offline ASR, more languages) | Medium-High | Heavy investment in realtime ASR architecture; quota management suggests scaling concerns |
| **MCP management UI improvements** | Medium | Issue #1422 signals UX gaps; the MCP ecosystem is clearly growing |
| **Security hardening for artifact loading** | **Immediate** | Issue #2176 will force this regardless of roadmap priority |

---

## 7. User Feedback Summary

- **Positive trajectory:** The rapid iteration on voice input (from one-shot upload → realtime streaming in ~2 weeks) and artifact sharing (6+ new file formats) shows the team is responsive to power-user workflows involving document collaboration and hands-free input.

- **Pain points:**
  - **Security concern:** The arbitrary file read vulnerability (#2176) will erode trust if not addressed promptly. Users who rely on LobsterAI's artifact auto-loading for productivity are exposed.
  - **UI polish gaps:** The MCP delete dialog overflow (#1422) has gone unaddressed for 2+ months, suggesting UX debt is accumulating under the pace of feature work.
  - **Breaking changes in voice input:** The removal of the legacy ASR upload flow (#2160) and the settings mode switch is a silent breaking change for users who preferred the old behavior. This should be communicated in release notes.

- **Satisfaction indicators:** High PR merge velocity (14 merged in 24h) and the breadth of the 2026.6.11 release suggest an engaged development team shipping meaningful features at a cadence competitive with leading AI assistant projects.

---

## 8. Backlog Watch

| Item | Age | Risk | Recommendation |
|------|-----|------|----------------|
| [#2176](https://github.com/netease-youdao/LobsterAI/issues/2176) — Security: arbitrary file read | 1 day | 🔴 **Critical** | Immediate triage and patch. This is a privilege escalation via the Electron main process. |
| [#1277](https://github.com/netease-youdao/LobsterAI/pull/1277) — Dependabot: Electron 40→42 | 78 days | 🟡 **Medium** | Electron 40→42 is a major version jump with potential breaking changes. Needs dedicated testing, not just CI pass. Stale Dependabot PRs can mask security patches bundled in minor releases. |
| [#1422](https://github.com/netease-youdao/LobsterAI/issues/1422) — MCP dialog overflow | 77 days | 🟢 **Low** | Quick CSS fix. Low effort, would clean up visible UX debt. |

---

*Data snapshot: 2026-06-19 | Source: [github.com/netease-youdao/LobsterAI](https://github.com/netease-youdao/LobsterAI)*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

# TinyClaw Project Digest — 2026-06-19

---

## 1. Today's Overview

TinyClaw (TinyAGI/tinyagi) saw a burst of **3 new issues opened in the last 24 hours**, all along with 0 PRs. However, daily activity volume remains low and concentrated in a narrow signal category — namely reports. All 3 issues reported are high-severity findings filed within the same 4-hour window, with **0 maintainer response** recorded so far. There were **no new releases, merges, or community discussion threads**. The project appears to be in a quiet development cycle that has suddenly been punctuated by an urgent cluster of disclosures.

---

## 2. Releases

**None.** No new versions have been tagged or published in the last 24 hours, nor are any pre-release channels noted in the data window.

---

## 3. Project Progress

No PRs were opened, merged, or closed today. No features advanced, and no fixes shipped. The project is waiting for maintainers to triage the three security issues below.

---

## 4. Community Hot Topics

All three issues were filed on the same day (2026-06-18) and share the same author, with **0 comments and 0 👍s each**. Despite the lack of community engagement so far, the underlying needs are clear and serious:

| # | Issue | Category | Severity |
|---|----------------------------------------------|----------|----------|
| [#284](https://github.com/TinyAGI/tinyagi/issues/284) | Unauthenticated API entrypoint invokes Claude with provider checks disabled by default | Security / Auth | **Critical** |
| [#283](https://github.com/TinyAGI/tinyagi/issues/283) | Unauthenticated `prompt_file` config allows arbitrary local file read → disclosed to model provider | Security / Disclosure | **Critical** |
| [#282](https://github.com/TinyAGI/tinyagi/issues/282) | Untrusted `[send_file: ...]` tags allow arbitrary host file attachment delivery | Security / Injection | **High** |

Together they form a **coordinated disclosure** covering the same root cause (lack of authentication & input validation), but impacting different vectors (entrypoint, configuration, and output tagging). None have community comments, reactions, or PRs yet.

---

## 5. Bugs & Stability

None of the three issues are "bugs" in the traditional sense of crashes or regressions; they are **design-level security flaws** that make the product unsafe to expose to any network. If we treat exploitability on a scale:

1. **[#284](https://github.com/TinyAGI/tinyagi/issues/284) — Highest exploitability (remote entrypoint, zero default gating)**
2. **[#283](https://github.com/TinyAGI/tinyagi/issues/283) — High (data exfiltration in typical self-hosted setups)**
3. **[#282](https://github.com/TinyAGI/tinyagi/issues/282) — High (arbitrary file delivery to the AI service)**

No fix PRs, no workarounds posted, no maintainer comments.

---

## 6. Feature Requests & Roadmap Signals

No explicit feature-requests were filed today. Still, the disclosure cluster telegraphs an implicit demand:

- **Mandatory authentication pattern** (apiKey, JWT, or similar) exposed as a first-class API gateway is the # ask from these reports.
- **Sandboxed file-system / config-file resolution** to reject absolute paths or `../` patterns in response tags, prompt files, and inbound attachment.
- **Disable-by-default provider permission checks**, the opposite of the current behavior.

These are not feature requests per se, but hardening that is likely being deferred until a "1.0"-stability story. Given the volume and immediacy of this disclosure, it should be a **priority-blocking** concern for any upcoming minor release.

---

## 7. User Feedback Summary

| Pain Point | Example (Issue) | Satisfaction Signal |
|---|---|---|
| Default-on access bypasses provider safety | [#284](https://github.com/TinyAGI/tinyagi/issues/284) | "Minimum self-hosting security is missing" (implied) |
| Agent system prompt config can read *any* local file → sent to vendor | [#283](https://github.com/TinyAGI/tinyagi/issues/283) | Modeling sensitive context & developer environment trust is broken |
| Output injection chains to arbitrary host attachment | [#282](https://github.com/TinyAGI/tinyagi/issues/282) | Prompt-injection surface area is un-controlled |

All three reporters have identical messaging style and suggest this may be a **coordinated audit/bug-bounty report wave**.

---

## 8. Backlog Watch

Since all three reports are brand-new (created well today and still open with zero engagement), they are technically *un-triaged*, rather than long-stale. However, they should be treated as **fire-drill priority** and are color-flagged below:

| Issue | Created | Updated | Comments | Triage Status with Maintainer |
|---|---|---|---|---|
| [Security] Unauthenticated API → Claude bypass | 2026-06-18 | 1 day | 0 | **UN-TRIAGED** |
| [Security] `prompt_file` LFI-like disclosure | 2026-06-18 | 1 day | 0 | **UN-TRIAGED** |
| [Security] `[send_file]` tag abuse | 2026-06-18 | 1 day | 0 | **UN-TRIAGED** |

Any zero-day disclosure without any acknowledgment from within 72 hours begins to erode user-trust, especially in a project whose value proposition is "personal AI assistant" — a category where **security is a feature, not a nice-to-have**.

---

*Generated by OWL — ZOO Company*

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-06-19

---

## 1. Today's Overview

Moltis saw minimal activity on 2026-06-19, with only **1 issue** opened and **0 pull requests** submitted or merged in the last 24 hours. No new releases were published. The project appears to be in a relatively quiet period, with community engagement limited to a single bug report. Overall, the project's health indicators suggest a stable but low-activity phase, with no urgent fires requiring immediate maintainer intervention.

---

## 2. Releases

**None.** No new versions were released today.

---

## 3. Project Progress

**No PRs were merged or closed today.** There is no new feature advancement or bug-fix delivery to report for this date.

---

## 4. Community Hot Topics

With only a single issue opened and zero comments or reactions across the board, there are no hot topics or active discussions to highlight today. The community conversation is dormant.

---

## 5. Bugs & Stability

| Severity | Issue | Status | Fix PR |
|----------|-------|--------|--------|
| 🟡 Medium | [#1132 [Bug]: "main" session can't be deleted/archived](https://github.com/moltis-org/moltis/issues/1132) | Open, no comments | None |

**Analysis:** User `vvuk` reports that the default "main" session in Moltis cannot be deleted or archived. This is a UX/data-management concern — users may want to clean up or reorganize their session list, but the system appears to block removal of what is likely a protected default session. The issue has not yet received maintainer triage or community discussion. Severity is assessed as **medium**: it does not crash the application but limits user control over their workspace.

---

## 6. Feature Requests & Roadmap Signals

No new feature requests were filed today. The single open issue (#1132) could be interpreted as an implicit feature request: **the ability to delete or archive the "main" session**, or at minimum clearer UX around why it is protected. If this gains traction, it may surface in a future minor release as a session-management improvement.

---

## 7. User Feedback Summary

The sole piece of user feedback today centers on **session management limitations**. The user's pain point is straightforward: they expect to be able to delete or archive any session, including the default "main" session, and the current behavior feels like a bug or an unnecessary restriction. No satisfaction or dissatisfaction signals beyond this single report.

---

## 8. Backlog Watch

- **[#1132 [Bug]: "main" session can't be deleted/archived](https://github.com/moltis-org/moltis/issues/1132)** — Opened 2026-06-18, 0 comments, 0 reactions. This issue has not yet received any maintainer response. Given its clear reproduction steps and preflight checklist completion, it is a well-formed bug report that warrants triage. If left unaddressed, it may accumulate duplicate reports from other users encountering the same limitation.

---

*Data source: [github.com/moltis-org/moltis](https://github.com/moltis-org/moltis) | Digest generated: 2026-06-19*

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

# ZeroClaw Project Digest — 2026-06-19

## 1. Today's Overview

ZeroClaw is experiencing a high-velocity development day with 27 issues updated and 50 pull requests in the last 24 hours, signaling intense pre-release activity targeting a **v0.8.1** version bump. The project is in a stabilization phase following the v0.8.0 release, with the community surfacing a wave of critical regressions — most notably **Slack/Discord channels being stripped from prebuilt binaries** (#7787) and a **confused-deputy security vulnerability** in `execute_pipeline` (#7947). The core team is focused on security hardening (SSRF fixes, memory limits on shell subprocesses, credential isolation), provider compatibility (Anthropic message alternation, OpenAI Responses tool delivery), and Windows platform parity. No new releases were published today.

## 2. Releases

**None today.** PR [#7938](https://github.com/zeroclaw-labs/zeroclaw/pull/7938) is open and staged to bump the version from **0.8.0 → 0.8.1**, with the author explicitly holding the merge until approval gates are met. This will be a patch release addressing regressions in v0.8.0.

## 3. Project Progress

### Merged / Closed PRs (15 total)

| PR | Summary | Impact |
|---|---|---|
| [#7848](https://github.com/zeroclaw-labs/zeroclaw/pull/7848) | fix(cli): flag configured channels missing from binary | Addresses #7787 — `zeroclaw channel list` and `zeroclaw status` now surface channels configured but not compiled into the binary |
| [#7933](https://github.com/zeroclaw-labs/zeroclaw/pull/7933) | fix(provider): trace native tool delivery decisions | DEBUG-level diagnostics for OpenAI/Anthropic tool delivery; aids investigation of #7756 |
| [#7939](https://github.com/zeroclaw-labs/zeroclaw/pull/7939) | docs(i18n): refresh fluent strings and mdbook catalogs | Localization refresh for es/fr/ja/zh-CN ahead of 0.8.1 |
| [#7934](https://github.com/zeroclaw-labs/zeroclaw/pull/7934) | fix(runtime): route stdout diagnostics through logs | Moves cron deletion diagnostics from raw stdout into structured logging |
| [#7906](https://github.com/zeroclaw-labs/zeroclaw/pull/7906) | fix(tests): cover Windows path and shell portability | Fixes 74 Windows test failures — platform-aware env var and shell checks |
| [#7547](https://github.com/zeroclaw-labs/zeroclaw/pull/7547) | fix(runtime): auto-include discovered MCP tools in risk_profile allowed_tools | Fixes MCP tools not appearing when risk_profile has explicit allowed_tools |
| [#7826](https://github.com/zeroclaw-labs/zeroclaw/pull/7826) | fix(runtime/agent): move credential redaction to rendering layer | Security fix — prevents credential scrubbing from corrupting model-visible tool output |
| [#7774](https://github.com/zeroclaw-labs/zeroclaw/pull/7774) | fix(docs): preserve protected literals in translations | Prevents product/provider/protocol names from being mangled in i18n |

### Key Open PRs Advancing

- **[#7938](https://github.com/zeroclaw-labs/zeroclaw/pull/7938)** — Version bump to 0.8.1 (staged, awaiting approval)
- **[#7931](https://github.com/zeroclaw-labs/zeroclaw/pull/7931)** — Coalesces stripped compatible history roles to fix Anthropic 400 errors
- **[#7902](https://github.com/zeroclaw-labs/zeroclaw/pull/7902)** — Pins `http_request` to vetted DNS addresses (SSRF mitigation)
- **[#7935](https://github.com/zeroclaw-labs/zeroclaw/pull/7935)** — Drains shell pipes while child runs (fixes hangs from grandchild process pipe inheritance)
- **[#7937](https://github.com/zeroclaw-labs/zeroclaw/pull/7937)** — Caps shell subprocess memory via `shell_max_memory_mb` config (default 512 MiB)
- **[#7940](https://github.com/zeroclaw-labs/zeroclaw/pull/7940)** — Persists agent rename before moving owned state (fixes #7907 data loss risk)
- **[#7923](https://github.com/zeroclaw-labs/zeroclaw/pull/7923)** — New `[files_cleanup]` config block for automatic temp file clearing

## 4. Community Hot Topics

### Most Discussed Issues (by comment count)

1. **[#2079](https://github.com/zeroclaw-labs/zeroclaw/issues/2079)** — *Restore GitHub as a native channel* (7 comments)
   - **Author:** mits87 | **Created:** 2026-02-27 | **Status:** Accepted, P2
   - **Underlying need:** Users want first-class GitHub integration (issues, PRs, comments, reviews) as a native channel rather than custom webhook glue. This is a long-standing request (4+ months old) reflecting demand for developer-centric workflows.

2. **[#5221](https://github.com/zeroclaw-labs/zeroclaw/issues/5221)** — *Model cost not captured for schedules, command line and web agents* (4 comments)
   - **Author:** databillm | **Created:** 2026-04-02 | **Status:** Open, S2
   - **Underlying need:** Cost tracking is incomplete across non-interactive modes. Users deploying scheduled/automated agents cannot attribute API costs, making production billing and budgeting impossible.

3. **[#7694](https://github.com/zeroclaw-labs/zeroclaw/issues/7694)** — *Cover storage-reader timestamp and ordering edge cases* (4 comments)
   - **Author:** Audacity88 | **Status:** Accepted, P2, good first issue
   - **Underlying need:** Memory subsystem reliability — deterministic test coverage for edge cases in log reader same-timestamp handling.

4. **[#6970](https://github.com/zeroclaw-labs/zeroclaw/issues/6970)** — *v0.8.1 integration/channel/provider/tool queue tracker* (3 comments)
   - **Author:** Audacity88 | **Status:** Accepted, P2
   - **Underlying need:** This is the **operational meta-tracker** for the v0.8.1 release, coordinating work across channels, providers, tools, and runtime.

5. **[#6971](https://github.com/zeroclaw-labs/zeroclaw/issues/6971)** — *RFC: Security UX, runtime credential boundaries, and isolation defaults* (3 comments)
   - **Author:** Audacity88 | **Status:** Accepted, P2, RFC type
   - **Underlying need:** Users are requesting a coherent, verifiable security posture — easier trust decisions, clearer credential boundaries, and safer defaults.

6. **[#7787](https://github.com/zeroclaw-labs/zeroclaw/issues/7787)** — *Prebuilt v0.8.0 binaries ship without Slack/Discord channel features* (3 comments, 👍1)
   - **Author:** SeungYong-Baek | **Status:** Accepted, P1
   - **Underlying need:** **Regression from v0.7.x** — users upgrading to v0.8.0 lose Slack functionality despite valid config. This is a high-priority blocker for teams relying on Slack as their primary channel.

## 5. Bugs & Stability

### Critical (S0–S1)

| # | Issue | Severity | Fix PR | Status |
|---|---|---|---|---|
| [#7947](https://github.com/zeroclaw-labs/zeroclaw/issues/7947) | `execute_pipeline` bypasses per-agent tool gating (confused deputy) | **S0** | None yet | 🔴 Needs fix |
| [#7756](https://github.com/zeroclaw-labs/zeroclaw/issues/7756) | Native/MCP tools unavailable on OpenAI Responses/reasoning and Anthropic turns | **S1** | [#7931](https://github.com/zeroclaw-labs/zeroclaw/pull/7931), [#7933](https://github.com/zeroclaw-labs/zeroclaw/pull/7933) | 🟡 Fix in progress |
| [#7941](https://github.com/zeroclaw-labs/zeroclaw/issues/7941) | Agent delete can purge owned state before config persistence | **S1** | [#7940](https://github.com/zeroclaw-labs/zeroclaw/pull/7940) | 🟡 Fix PR open |
| [#7907](https://github.com/zeroclaw-labs/zeroclaw/issues/7907) | Agent rename can move owned state before config persistence | **S1** | [#7940](https://github.com/zeroclaw-labs/zeroclaw/pull/7940) | 🟡 Fix PR open |
| [#7804](https://github.com/zeroclaw-labs/zeroclaw/issues/7804) | Code history can send non-alternating Anthropic messages | **S1** | [#7931](https://github.com/zeroclaw-labs/zeroclaw/pull/7931) | 🟡 Fix in progress |
| [#7787](https://github.com/zeroclaw-labs/zeroclaw/issues/7787) | v0.8.0 prebuilt binaries ship without Slack/Discord | **S1 regression** | [#7848](https://github.com/zeroclaw-labs/zeroclaw/pull/7848) (merged) | 🟢 Fix merged |

### High (S2)

| # | Issue | Severity | Fix PR | Status |
|---|---|---|---|---|
| [#5221](https://github.com/zeroclaw-labs/zeroclaw/issues/5221) | Model cost not captured for schedules/CLI/web agents | **S2** | None | 🔴 Open |
| [#7462](https://github.com/zeroclaw-labs/zeroclaw/issues/7462) | 74 test failures on Windows (Unix-only commands, paths, encoding) | **S2** | [#7906](https://github.com/zeroclaw-labs/zeroclaw/pull/7906) (merged) | 🟢 Fix merged |
| [#7871](https://github.com/zeroclaw-labs/zeroclaw/issues/7871) | Shell tool hangs when grandchild processes inherit pipe handles | **S2** | [#7935](https://github.com/zeroclaw-labs/zeroclaw/pull/7935) | 🟡 Fix PR open |
| [#7949](https://github.com/zeroclaw-labs/zeroclaw/issues/7949) | `[[embedding_routes]]` silently degrades to NoopEmbedding | **S2** | None | 🔴 Open |
| [#7799](https://github.com/zeroclaw-labs/zeroclaw/issues/7799) | Resumed Code sessions reopen with blank transcript | **S2** | None | 🟢 Closed (workaround or stale) |

### Medium (S3)

| # | Issue | Severity | Status |
|---|---|---|---|
| [#7892](https://github.com/zeroclaw-labs/zeroclaw/issues/7892) | CLI approval prompt should read controlling terminal when stdin detached | **S3** | 🟡 [#7936](https://github.com/zeroclaw-labs/zeroclaw/pull/7936) open |
| [#7917](https://github.com/zeroclaw-labs/zeroclaw/issues/7917) | `file_download` tool strings untranslated in non-English locales | **S3** | 🔴 Open |

## 6. Feature Requests & Roadmap Signals

### Likely in v0.8.1 (near-term)

| Feature | Issue | Signal |
|---|---|---|
| Shell subprocess memory caps | [#6916](https://github.com/zeroclaw-labs/zeroclaw/issues/6916) + [#7937](https://github.com/zeroclaw-labs/zeroclaw/pull/7937) | PR open, accepted, security-critical |
| SSRF protection for `http_request` tool | [#7902](https://github.com/zeroclaw-labs/zeroclaw/pull/7902) | PR open, security-critical |
| Windows self-update test coverage | [#7910](https://github.com/zeroclaw-labs/zeroclaw/issues/7910) + [#7914](https://github.com/zeroclaw-labs/zeroclaw/pull/7914) | PR open, CI improvement |
| Auto-cleanup of temp files | [#7923](https://github.com/zeroclaw-labs/zeroclaw/pull/7923) | PR open, new config schema |
| Unify slash-command registries | [#7929](https://github.com/zeroclaw-labs/zeroclaw/issues/7929) | New issue, addresses UX fragmentation |

### Medium-term (v0.9.x or later)

| Feature | Issue | Signal |
|---|---|---|
| GitHub as native channel | [#2079](https://github.com/zeroclaw-labs/zeroclaw/issues/2079) | 4+ months old, accepted, high community interest |
| Realtime voice-host channel | [#7943](https://github.com/zeroclaw-labs/zeroclaw/issues/7943) | New, novel hardware/ESP32 use case |
| Voice satellite (ESP32/smartphone/PWA) | [#7944](https://github.com/zeroclaw-labs/zeroclaw/issues/7944) | New, physical assistant form factor |
| Effort-based local/cloud model routing | [#7951](https://github.com/zeroclaw-labs/zeroclaw/issues/7951) | New, cost/performance optimization |
| Embedding identity persistence + auto-migration | [#7948](https://github.com/zeroclaw-labs/zeroclaw/issues/7948) | Follow-up to #7949 embedding bug |
| Docker images include ZeroClaw docs | [#7950](https://github.com/zeroclaw-labs/zeroclaw/issues/7950) | Agent self-service support |
| Security UX RFC | [#6971](https://github.com/zeroclaw-labs/zeroclaw/issues/6971) | RFC in progress, will shape future defaults |

## 7. User Feedback Summary

### Pain Points

1. **v0.8.0 broke Slack for prebuilt binary users** — The most acute frustration. Teams upgrading lost channel functionality with no clear error. Fix is merged but the release hasn't shipped yet. ([Issue #7787](https://github.com/zeroclaw-labs/zeroclaw/issues/7787))

2. **Cost visibility gaps** — Users running scheduled/CLI/web agents cannot track per-agent or per-mode API costs, making production deployments difficult to manage financially. ([Issue #5221](https://github.com/zeroclaw-labs/zeroclaw/issues/5221))

3. **Windows is a second-class platform** — 74 test failures, path encoding issues, and missing runtime test coverage for self-update paths indicate Windows support is aspirational rather than production-ready. ([Issue #7462](https://github.com/zeroclaw-labs/zeroclaw/issues/7462))

4. **Security concerns mounting** — Multiple S0/S1 security issues in one day (confused deputy in `execute_pipeline`, SSRF in `http_request`, unbounded shell memory, credential redaction bugs) suggest the project's rapid feature growth is outpacing its security review cadence. ([Issues #7947](https://github.com/zeroclaw-labs/zeroclaw/issues/7947), [#6916](https://github.com/zeroclaw-labs/zeroclaw/issues/6916), [#7902](https://github.com/zeroclaw-labs/zeroclaw/pull/7902))

5. **Android/Termux installation broken** — Wrong architecture binary served for aarch64. ([Issue #7911](https://github.com/zeroclaw-labs/zeroclaw/issues/7911))

### Positive Signals

- The team is **responding quickly** to regressions — #7787 (Slack binary) was diagnosed and fixed within 2 days.
- Security issues are being treated with appropriate severity (S0/S1 labels, rapid PR turnaround).
- The v0.8.1 tracker (#6970) shows disciplined release management with explicit acceptance criteria.
- Good-first-issue labeling (#7694, #7917) signals active community onboarding.

## 8. Backlog Watch

### Items Needing Maintainer Attention

| Item | Age | Risk | Recommendation |
|---|---|---|---|
| **[#7947](https://github.com/zeroclaw-labs/zeroclaw/issues/7947)** — `execute_pipeline` confused deputy | 1 day | **S0 security** | Needs immediate fix PR; this is a privilege escalation vector |
| **[#5221](https://github.com/zeroclaw-labs/zeroclaw/issues/5221)** — Cost tracking gaps | 78 days | S2, production blocker | Needs design decision on cost attribution model |
| **[#2079](https://github.com/zeroclaw-labs/zeroclaw/issues/2079)** — GitHub native channel | 114 days | High community demand | Stale; needs scope definition or closure decision |
| **[#7949](https://github.com/zeroclaw-labs/zeroclaw/issues/7949)** — Embedding routes silently dead | 1 day | S2, data integrity | Needs root-cause investigation; may block memory-dependent features |
| **[#7911](https://github.com/zeroclaw-labs/zeroclaw/issues/7911)** — Android Termux wrong binary | 1 day | Platform support | Quick fix — likely a CI/CD architecture detection issue |
| **[#7917](https://github.com/zeroclaw-labs/zeroclaw/issues/7917)** — i18n untranslated strings | 1 day | S3, non-English UX | Good first issue; low effort, high inclusivity impact |
| **[#7804](https://github.com/zeroclaw-labs/zeroclaw/issues/7804)** — Non-alternating Anthropic messages | 3 days | S1, workflow blocker | PR #7931 in progress — monitor for merge |
| **[#6971](https://github.com/zeroclaw-labs/zeroclaw/issues/6971)** — Security UX RFC | 22 days | Strategic | Needs RFC finalization to guide v0.9 security posture |

### Watch: v0.8.1 Release Blockers

The [#7938](https://github.com/zeroclaw-labs/zeroclaw/pull/7938) version bump PR is staged but unmerged. Before it ships, the following should be resolved:
- [#7947](https://github.com/zeroclaw-labs/zeroclaw/issues/7947) (S0 confused deputy) — **should block release**
- [#7756](https://github.com/zeroclaw-labs/zeroclaw/issues/7756) (S1 MCP tool delivery) — fix PRs open
- [#7941](https://github.com/zeroclaw-labs/zeroclaw/issues/7941) / [#7907](https://github.com/zeroclaw-labs/zeroclaw/issues/7907) (agent state persistence ordering) — fix PR open

---

*Data source: github.com/zeroclaw-labs/zeroclaw — Issues and PRs updated 2026-06-18 to 2026-06-19*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/DenisZheng/agents-radar).*