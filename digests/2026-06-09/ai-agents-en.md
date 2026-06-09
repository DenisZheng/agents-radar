# OpenClaw Ecosystem Digest 2026-06-09

> Issues: 500 | PRs: 494 | Projects covered: 13 | Generated: 2026-06-09 00:36 UTC

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

# OpenClaw Project Digest — 2026-06-09

---

## 1. Today's Overview

OpenClaw remains in a state of extremely high activity with **500 issues** and **494 PRs** updated in the past 24 hours. The signal-to-noise ratio is significant: only **447 issues remain open** out of the 500 updated, with 53 closed, and 161 of 494 PRs merged/closed — indicating an active but overloaded maintainer pipeline. Two new beta releases (v2026.6.5-beta.3 and beta.5) shipped, focused primarily on QQBot content delivery fixes and MCP tool result coercion. The project shows strong community engagement (many high-comment-count issues), but a large fraction of issues are months-old, labeled `stale`, and tagged with multiple `clawsweeper:` flags suggesting backlogged triage. Overall project health is **active but strained** — high volume, moderate throughput, and a growing backlog of unaddressed P1/P2 items.

---

## 2. Releases

### v2026.6.5-beta.5 (latest) & v2026.6.5-beta.3

Both releases share the same core highlights:

- **QQBot reasoning content stripping**: QQBot now strips model reasoning/thinking scaffolding (`<thinking>` blocks) before native delivery to the channel. This prevents raw internal chain-of-thought from leaking into user-facing replies. (PRs referenced: #89913, #90132; contribution from @openperf) — **significant UX/cleanliness fix.**
- **MCP tool result coercion**: MCP tool results now coerce `resource_link`, `resource`, `audio`, `malformed image`, and future non-standard content types into properly structured responses. — **important MCP reliability fix.**

**Migration notes**: No breaking changes identified in these beta releases. Users on the `2026.6.x` track should upgrade for the QQBot and MCP fixes. No config migration is mentioned.

---

## 3. Project Progress (Merged/Closed PRs)

Several notable PRs were closed/merged today, advancing stability:

| PR | Summary | Area |
|---|---|---|
| [#90666](https://github.com/openclaw/openclaw/pull/90666) | **Cron job cancellation** — tracks active cron runs by job/run ID with live abort handles, enabling proper task lifecycle management | Cron/Scheduling |
| [#79386](https://github.com/openclaw/openclaw/pull/79386) | **Poisoned resume ID fixup** — discards poisoned resume IDs after `FailoverError` to break watchdog cascades | Runtime/Failover |
| [#90507](https://github.com/openclaw/openclaw/pull/90507) | **Doctor migration preserves Codex context metadata** — fixes loss of `contextWindow`/`contextTokens` during legacy provider consolidation (fixes #90448) | CLI/Doctor |

**Key trends in review pipeline**: Multiple PRs address **subagent lifecycle and session state correctness** (#91370, #91523, #78441), **Control UI improvements** (#90122, #91520), and **WhatsApp/Telegram/Fishé channel message delivery** (#83600, #88815, #88245). These reflect the project's current focus on multi-subagent reliability and channel-integrity hardening.

---

## 4. Community Hot Topics

The most discussed issues (weighted by comments and reactions) reveal where user frustration and engagement concentrate:

### Top Issues by Engagement

| Rank | Issue | Comments | 👍 | Core Topic |
|---|---|---|---|---|
| 1 | [#48788](https://github.com/openclaw/openclaw/issues/48788) — Centralized filename encoding utility | 18 | 0 | **File attachment handling across encodings** (Shift-JIS, EUC-KR, GB18030 beyond UTF-8/Latin-1). User-facing broken filenames in Feishu and other channels. |
| 2 | [#32473](https://github.com/openclaw/openclaw/issues/32473) — Control UI requires device identity (HTTPS/localhost) | 17 | 4 | **Security regression** — control UI broke for VPS/non-localhost HTTPS users. Authentication flow blocks legitimate operators. |
| 3 | [#90083](https://github.com/openclaw/openclaw/issues/90083) — OpenAI gpt-5.4/gpt-5.5 invalid_provider_content_type | 15 | 3 | **Model compatibility** — new OpenAI model versions break Responses transport. Affects early adopters of GPT-5.4/5.5. |
| 4 | [#50090](https://github.com/openclaw/openclaw/issues/50090) — Community Skill Development & ClawHub | 15 | 2 | **Ecosystem critique** — gap between ClawHub promise and practice, skill maintenance burden, skill quality. |
| 5 | [#32296](https://github.com/openclaw/openclaw/issues/32296) — Agent replies to wrong message (session context confusion) | 14 | 1 | **Core agent reliability** — session context misalignment causes replies targeting stale messages. Fundamental UX issue. |
| 6 | [#45740](https://github.com/openclaw/openclaw/issues/45740) — gh-issues skill injects untrusted body into sub-agent prompts | 13 | 1 | **Security** — GitHub issue bodies injected without sanitization → prompt injection vector. Notable from a security perspective. |
| 7 | [#88929](https://github.com/openclaw/openclaw/issues/88929) — Feishu streaming card truncation (closed) | 12 | 2 | **Feishu delivery regression** — streaming mode delivers only last character. Closed, presumably fixed. |

**Underlying needs analysis**: The community is converging around three themes — (1) **channel adapter robustness** (QQBot, Feishu, Discord each have open delivery bugs), (2) **session state correctness** (cron sessions, subagent sessions, steer mode all exhibiting context confusion or stale state), and (3) **security surface hardening** (prompt injection via skills, unauthenticated UI access, scope stripping regressions).

---

## 5. Bugs & Stability

Ranked by severity (P1 > P2, security > feature, regression > new):

### P1 (Critical/Significant Impact)

| Issue | Severity | Summary | Fix PR? |
|---|---|---|---|
| [#90083](https://github.com/openclaw/openclaw/issues/90083) | P1, regression | OpenAI gpt-5.4/gpt-5.5 Responses transport fails with `invalid_provider_content_type` | No PR linked yet — active, high 👍, needs transport fix |
| [#32473](https://github.com/openclaw/openclaw/issues/32473) | P1, regression, security | Control UI requires HTTPS/localhost device identity — breaks VPS deployments | `clawsweeper:needs-security-review` — reviewed but no linked PR |
| [#32296](https://github.com/openclaw/openclaw/issues/32296) | P1, message-loss | Agent replies to previous message instead of current (session context confusion) | `clawsweeper:needs-live-repro` — no linked PR |
| [#43367](https://github.com/openclaw/openclaw/issues/32473) | P1, multi-impact | Multi-agent orchestration unstable: concurrent `agents add` overwrites config, session-lock failures | Linked PR open but no resolution |
| [#51396](https://github.com/openclaw/openclaw/issues/51396) | P1, regression, security | `clearUnboundScopes` strips operator scopes unconditionally for non-local clients — breaks `chat.send` | Linked PR open |
| [#44905](https://github.com/openclaw/openclaw/issues/44905) | P1, security | Discord leaks internal tool-call traces (NO_REPLY, commentary, raw JSON) to channel | `clawsweeper:needs-security-review` |
| [#45031](https://github.com/openclaw/openclaw/issues/45031) | P1, security | No built-in security scanning for skill installation (36% of skills have flaws per Snyk 2026) | Feature request, no PR |

### P2 (Moderate Impact — Notable Regressions)

| Issue | Severity | Summary |
|---|---|---|
| [#88929](https://github.com/openclaw/openclaw/issues/88929) | P2 (closed) | Feishu streaming card typewriter effect + truncation — now closed ✅ |
| [#87326](https://github.com/openclaw/openclaw/issues/87326) | P2 (closed) | Telegram streaming intermediate text blocks silently lost — now closed ✅ |
| [#48920](https://github.com/openclaw/openclaw/issues/48920) | P2, regression | Live Docs ahead of release — Heartbeat `IsolatedSessions` in docs but not shipped in 2026.3.13 |
| [#44993](https://github.com/openclaw/openclaw/issues/44993) | P2, regression | Heartbeat/Cron "Current time" timestamp stale between runs |
| [#88970](https://github.com/openclaw/openclaw/pull/88970) | P2 PR (ready) | Fix for Heartbeat scheduler silently failing to fire on 5.x (regression) — PR is open, rated `🦚 platinum hermit`, ready for maintainer look |
| [#45765](https://github.com/openclaw/openclaw/issues/45765) | P2, regression | `OPENCLAW_HOME=~/.openclaw` creates nested `~/.openclaw/.openclaw` directory |

**Stability assessment**: Multiple channel-streaming regressions (Feishu, Telegram) have been identified and closed, but **new model provider compatibility** (GPT-5.4/5.5 with OpenAI Responses) remains an open P1 regression with significant community impact (15 comments, 3 👍). The Control UI HTTPS regression (#32473) is particularly concerning as it's been open since March 2026 with 17 comments and affects all non-localhost deployments.

---

## 6. Feature Requests & Roadmap Signals

High-signal feature requests that appear likely candidates for upcoming releases:

| Issue | Signal Strength | Description | Likelihood |
|---|---|---|---|
| [#42840](https://github.com/openclaw/openclaw/issues/42840) | 7 comments, 👍**5** | MathJax/LaTeX support in Control UI | Strong community demand; low-risk UI enhancement |
| [#42475](https://github.com/openclaw/openclaw/issues/42475) | 12 comments, 👍1 | Per-agent cost budget enforcement at gateway level | Fits existing cost-tracking infrastructure; high operational value |
| [#91308](https://github.com/openclaw/openclaw/pull/91308) | PR open (xAI realtime voice) | xAI realtime voice provider via `provider-websocket` + `gateway-relay` | Active PR, large scope — likely in one of the next releases |
| [#45608](https://github.com/openclaw/openclaw/issues/45608) | 9 comments, 👍3 | Pre-reset agentic memory flush (same as compaction flush before `/new`) | Aligns with existing compaction logic; moderate effort |
| [#43260](https://github.com/openclaw/openclaw/issues/43260) | 9 comments, 👍0 | Per-skill `model` field in `SKILL.md` frontmatter | Architectural, not trivial — medium-term roadmap item |
| [#45758](https://github.com/openclaw/openclaw/issues/45758) | 7 comments, 👍2 | YAML config file format support | Bread-and-butter operator experience improvement; likely low priority |

**Prediction for next minor release (v2026.6.6 or v2026.7.0)**: Likely to include the **xAI realtime voice provider** (#91308) and possibly **MathJax/LaTeX** in Control UI given its high 👍-to-effort ratio. **Cron cancellation** (#90666, merged) and **Cron active run tracking** are likely candidates given the volume of cron-related bugs.

---

## 7. User Feedback Summary

### Real Pain Points (from issue text)

1. **VPS/Cloud deployment friction**: Multiple users (issues #32473, #51396, #51363) report that OpenClaw's security model assumes localhost or specific HTTPS setups, breaking on VPS + Docker deployments. The device-identity requirement is a recurring pain point — users feel the error message ("use HTTPS or localhost secure context") is unactionable without documentation.

2. **Session management confusion**: Users are confused by the interaction between main sessions, subagent sessions, cron sessions, and embedded runs. Issues #32296, #48573, #50165, #47975 all describe scenarios where users cannot reliably predict which "context" the agent is operating in. This is the single largest category of pain points.

3. **Channel delivery inconsistency**: Every major channel (Feishu, Telegram, QQBot, WhatsApp, Discord) has at least one open delivery-quality issue — truncated content, leaked internal artifacts, typewriter effects, streaming overwrites. Users are deploying OpenClaw across multi-channel setups and finding edge cases in each.

4. **Memory system unpredictability**: Users report wildly different memory behaviors across installs (issue #43747) — some get chunking + SQLite, some get JSONL in workspace, some get nothing. The embedding pipeline has documented issues (#48300 closed, #6511#65156 closed) and vector search failures.

### Satisfaction Signals

- Multiple contributors are submitting high-quality PRs with well-written summaries (notably `zhangguiping-xydt` with multiple P1 fix PRs today, `openperf` contributing upstream fixes).
- Closed issues (#88929, #87326, #48300) show that the team is delivering fixes for streaming delivery bugs in a reasonable timeframe.
- The ClawHub skills ecosystem (#50090) generates active discussion (15 comments), showing community investment beyond core bugs.

### Dissatisfaction Signals

- A large number of issues carry the `clawsweeper:no-new-fix-pr` label but are actively commented on by users — suggesting users feel their issues are being gated by maintenance capacity.
- Months-old P1 issues (#32296 from March 2, #32473 from March 3, #43367 from March 11) remain open with high engagement, indicating either complexity or maintainer bandwidth constraints.
- Issue #51429 ("someone hardcoded a working directory path and it got merged") reflects trust incidents from users — not a bug per se, but a quality-control concern.

---

## 8. Backlog Watch

Long-unanswered but important items needing maintainer attention:

| Issue | Age | Severity | Status | Why It Matters |
|---|---|---|---|---|
| [#32473](https://github.com/openclaw/openclaw/issues/32473) | **3+ months** | P1, regression | Open, 17 comments, 👍4 | Blocks VPS users entirely; `needs-maintainer-review` + `needs-product-decision` |
| [#32296](https://github.com/openclaw/openclaw/issues/32296) | **3+ months** | P1, message-loss | Open, 14 comments | Core agent correctness; `needs-live-repro` |
| [#43367](https://github.com/openclaw/openclaw/issues/43367) | **3+ months** | P1, multi-impact | Open, 10 comments | Blocks multi-agent use cases; three distinct sub-bugs |
| [#44905](https://github.com/openclaw/openclaw/issues/44905) | **3+ months** | P1, security | Open, 10 comments, 👍1 | Internal tool traces leaking to Discord channels; `needs-security-review` |
| [#45031](https://github.com/openclaw/openclaw/issues/45031) | **3+ months** | P1, security | Open, 7 comments | Skill prompt injection; real security vector with 36% base rate per Snyk |
| [#43747](https://github.com/openclaw/openclaw/issues/43747) | **3+ months** | P2, regression | Open, 9 comments | Memory management inconsistency across installs — undermines a core feature's reliability |
| [#50090](https://github.com/openclaw/openclaw/issues/50090) | **3 months** | P2, ecosystem | Open, 15 comments, 👍2 | ClawHub skills gap between marketing promise and practice; community strategy issue |

Additionally, several **active PRs ready for review** should be prioritized to reduce backlog pressure:

- [#91529](https://github.com/openclaw/openclaw/pull/91529) (Fix transcript image redaction, P1, `👀 ready for maintainer look`)
- [#88970](https://github.com/openclaw/openclaw/pull/88970) (Heartbeat scheduler 5.x regression fix, P1, `👀 ready for maintainer look`)
- [#89442](https://github.com/openclaw/openclaw/pull/89442) (Codex timeout wrapping fix, P1, `👀 ready for maintainer look`)
- [#91523](https://github.com/openclaw/openclaw/pull/91523) (Subagent CPU fix, P1, `📣 needs proof`) — this one reports a 25x CPU improvement and should be fast-tracked if proof is straightforward.

---

*Data as of 2026-06-09. Issue/PR counts reflect last-24h updates. Severity labels follow OpenClaw's issue-rating taxonomy (🐚 platinum hermit > 🦞 diamond lobster > 🦐 gold shrimp > 🦪 silver shellfish > 🌊 off-meta tidepool).*

*Generated by OWL for OpenClaw community intelligence.*

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: Personal AI Agent Ecosystem

**Date:** 2026-06-09 | **Generated by OWL**

---

## 1. Ecosystem Overview

The personal AI agent landscape in June 2026 is in a phase of aggressive fragmentation and rapid feature competition. No single project has achieved dominant market positioning; instead, roughly a dozen active projects are racing across different engineering axes — channel adapter reliability, multi-agent orchestration, context engine correctness, and security hardening. The projects split roughly into three tiers: high-velocity community-driven efforts (OpenClaw, Hermes Agent, ZeroClaw) capable of moving 50+ PRs/issues per day; focused research-leaning projects (NanoBot, LobsterAI) consolidating specific feature verticals; and early-stage or quiet projects (PicoClaw, TinyClaw, NullClaw) at varying levels of incubation. A clear pattern is emerging: **the hardest problems are no longer model integration or basic tool-calling, but session/channel state correctness, memory/security hardening, and multi-adapter delivery parity** — structural challenges that require sustained maintainer bandwidth to resolve.

---

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Open Issues | Open PRs | Latest Release | Release Cadence | Health Assessment |
|---|---|---|---|---|---|---|---|
| **OpenClaw** | 500 updated (447 open) | 494 updated (333 open) | 🔴 Heavy backlog | 🔴 Overloaded | v2026.6.5-beta.5 | Fast (2 betas today) | **Active but strained** — largest volume, growing backlog, 3+ month-old P1s |
| **Hermes Agent** | 50 (46 open) | 50 (45 open) | 🟡 Moderate | 🟡 Moderate | v0.16.0 (Jun 5) | Steady | **Robust under pressure** — high engagement, Desktop app stability concern |
| **ZeroClaw** | 50 (49 open) | 50 (39 open) | 🟡 Backlog growing | 🟡 Active pipeline | None (v0.9.0 pending) | Pre-release sprint | **Pre-1.0 intensity** — security/MCP focus, 9 open S0/S1 bugs |
| **CoPaw** | 49 (26 closed) | 45 (23 closed) | 🟢 Healthy closure rate | 🟢 Active | None recent | Steady | **Healthy throughput** — good merge rate, AgentScope 2.0 migration pending |
| **NanoBot** | 8 | 37 (22 open) | 🟢 Low | 🟡 Backlog forming | None today | Post-merge consolidation | **High feature velocity** — transcription system expansion, review bottleneck |
| **PicoClaw** | 3 | 18 | 🟢 Trivial | 🟢 Clean | v0.2.9-nightly | Nightly pre-release | **Strong maintenance sprint** — same-day bug fixes, well-groomed |
| **LobsterAI** | 0 new | 19 (18 merged) | 🟢 Clean | 🟢 1 open | None today | Batch-merge pattern | **Backlog-clearing mode** — 2-month dormant PR wave landed in a day |
| **NanoClaw** | 1 | 3 (2 merged) | 🟢 Minimal | 🟢 Clean | None | Early-stage | **Security hardening focus** — small but disciplined |
| **TinyClaw** | 0 | 1 open | 🟢 None | 🟢 Minimal | Unknown | Quiet | **Stable/low activity** — single PR for install UX |
| **NullClaw** | 0 | 0 | — | — | — | — | **No activity** |
| **Moltis** | 0 | 0 | — | — | — | — | **No activity** |
| **ZeptoClaw** | 0 | 0 | — | — | — | — | **No activity** |
| **IronClaw** | — | — | — | — | — | — | ⚠️ Data unavailable |

---

## 3. OpenClaw's Position

### Advantages

- **Scale:** OpenClaw processes more issue/PR volume per day (500/494) than the next three projects combined, indicating by far the largest contributor and user base.
- **Channel breadth:** Active delivery paths for QQBot, Telegram, WhatsApp, Discord, and Feishu — few competitors match this breadth. The QQBot reasoning-content stripping (beta.5) is a novel fix not seen elsewhere.
- **Ecosystem layer:** ClawHub is the only dedicated skills marketplace across all reviewed projects, giving OpenClaw a platform-extensibility advantage.
- **Multi-agent infrastructure:** Subagent lifecycle PRs (#91370, #91523, #78441) and Active Run tracking for cron (#90666) represent the most developed multi-agent control plane among peers.

### Technical Approach Differences

| Dimension | OpenClaw | Key Differentiator |
|---|---|---|
| **Session model** | Multi-layered (main + subagent + cron + steer sessions) | Most complex, but highest confusion surface — users report unpredictable context switching (#32296, #48573) |
| **Provider compatibility** | Broad Responses transport; GPT-5.4/5.5 currently broken (#90083) | Hermes Agent (#41372) and ZeroClaw (#6361) both show similar provider-fragmentation pain |
| **Security** | Device-identity model causing VPS regression (#32473); scope stripping bugs (#51396) | ZeroClaw is ahead on pluggable security (#7142); NanoClaw is ahead on container isolation (#2713) |
| **Memory** | Chunking + SQLite with known issues (#48300 closed, #47975 open) | Hermes Agent (mnemosyne-hermes plugin, issue #40101 undiscovered) and CoPaw (#4994 hierarchical memory request) show this is an unsolved space industry-wide |

### Community Size Comparison

OpenClaw's ~500-event daily throughput dwarfs Hermes Agent (~50) and ZeroClaw (~50). However, size is a double-edged sword: 161 of 494 PRs were merged/closed today, but 333 remain open, and 7+ P1 issues have lingered 3+ months. **Throughput does not match intake.** Hermes achieves higher per-event coherence (fewer duplicate PRs, same-day merge on Telegram fix), while ZeroClaw shows more structured RFC process (#7142 pluggable security, #6850 memory trait).

---

## 4. Shared Technical Focus Areas

The following requirements are emerging as **cross-project consensus pain points**, with at least 3 projects exhibiting the same class of issue:

### 4.1 Channel Adapter Delivery Correctness
**Projects:** OpenClaw, NanoBot, Hermes Agent, ZeroClaw, PicoClaw

Every multi-channel project has identified streaming-delivery or message-formatting bugs within the past 24 hours:
- OpenClaw: QQBot reasoning content leaking, Feishu card truncation
- NanoBot: Telegram code-block splitting, WeChat session dead-loop
- Hermes Agent: Telegram MarkdownV2 tool-progress leaks, Discord code-block rendering
- ZeroClaw: Telegram markdown fence splitting, XML tool_result leaks in responses
- PicoClaw: Telegram location message support (PR merged)

**Pattern:** Message-splitting/state-preserving across heterogeneous channel APIs with different rich-content models (MarkdownV2 vs. HTML vs. card-based) is insufficiently abstracted. No project has a unified delivery abstraction.

### 4.2 Session & Context State Management
**Projects:** OpenClaw, Hermes Agent, CoPaw, ZeroClaw, NanoBot

- OpenClaw: Agent replies to wrong/stale messages (#32296); cron/session/steer context confusion
- Hermes Agent: `delegate_task` corrupts parent context engine singleton (#42449); Desktop "session delete" doesn't persist for live channels (#42422)
- CoPaw: Agent response duplication (#4300); AgentScope 1.x→2.0 migration breaks context_size defaults (#5018)
- ZeroClaw: `trim_history` can empty all messages via orphan-cascade (#7403); context_compression drops tool_calls (#6361)
- NanoBot: Orphan tool results before history trimming; Dream-disabled still injects history (#42422)

**Pattern:** Compaction/summarization/trimming operations are the single highest-risk code path across all projects, and most teams are discovering new failure modes in production. Context window accounting is unsolved industry-wide.

### 4.3 Security Hardening & Sandboxing
**Projects:** OpenClaw, Hermes Agent, ZeroClaw, NanoBot, NanoClaw, CoPaw

- OpenClaw: `clearUnboundScopes` strips operator scopes (#51396); prompt injection via gh-issues skill (#45740); Discord tool-trace leaks (#44905)
- Hermes Agent: Skill protection is scattered across 6+ files with no centralized policy (#27997)
- ZeroClaw: Pluggable security provider RFC (#7142); shell command "ask" tier (#7155); tool_filter_groups is a no-op at runtime (#6699)
- NanoBot: MCP SSRF bypass (#4074, closed); symlink workspace escapes (#4221, merged)
- NanoClaw: Container egress lockdown (#2713 merged); webhook binding default fix (#2714 open)
- CoPaw: Keychain master key isolation (#5028 open); MCP subprocess accumulation (#5014 open)

**Pattern:** Security is transitioning from "afterthought" to first-class architectural concern across the ecosystem. The pluggable/trust-tier model is the emerging consensus, but no project has fully shipped it.

### 4.4 Provider & Model Compatibility Fragility
**Projects:** OpenClaw, Hermes Agent, ZeroClaw, NanoBot, CoPaw

New provider versions (OpenAI GPT-5.4/5.5, Gemini, MiniMax) are breaking transport layers faster than they can be adapted. OpenClaw (#90083), ZeroClaw (#6302, #4879), and Hermes Agent (#41372) all show config corruption or transport failures from upstream model changes.

---

## 5. Differentiation Analysis

| Dimension | OpenClaw | NanoBot | Hermes Agent | ZeroClaw | CoPaw | LobsterAI | PicoClaw |
|---|---|---|---|---|---|---|---|
| **Primary target** | Power users / multi-channel ops | Research / transcription / multi-provider | Broad community / multi-agent | Security-conscious / plugin ecosystem | Chinese market / enterprise WeChat/QQ | Desktop-first end users (Chinese market) | Embedded / RISC-V hardware |
| **Architecture emphasis** | Channel adapter breadth, skills ecosystem, multi-agent orchestration | Transcription-as-platform, model routing flexibility, multi-agent messaging bus | Fullest feature set (Desktop + gateway + cron + Docker), tool ecosystem | Security provider abstraction (WASI/WIT plugins), config correctness | AgentScope backend integration, enterprise IM (WeCom/WeChat), localization | Electron desktop client, data portability, OpenClaw gateway integration | Minimal footprint, RISC-V Go binary, nightly builds |
| **Key differentiator** | ClawHub skills marketplace + QQBot integration | Shared transcription provider system (4 backends landed) | Cron daemon mode, Desktop app, multi-agent context engine | OIDC provider, pluggable security, shell tier authorization | i18n completeness, WeChat/QQ enterprise, `.qwenpaw` workspace convention | User data portability (tar backup/restore), dynamic model fetching | RISC-V `.deb` packaging, hardware-aligned deployment |
| **Weaknesses** | 3+ month P1 backlog, session model complexity, VPS friction | Cross-agent PR unreviewed 16 days, Dream bug unaddressed | Desktop app quality, Docker deployment gaps | 9 unpatched S0/S1 bugs, 49/50 issues still open | AgentScope migration risk, multi-agent fragile, Windows UX | 2-month PR merge lag, Electron 40→42 bump stalled | Narrow channel support, pre-v1.0, limited community size |

---

## 6. Community Momentum & Maturity

### Tier 1: High-Velocity Iteration
**OpenClaw, ZeroClaw, Hermes Agent** — All process 50 events/day, have multi-contributor pipelines, and are releasing or approaching significant versions. These are genuinely competitive with each other and collectively define the open-source agent frontier. Risk: maintainer burnout and growing backlogs.

### Tier 2: Focused Feature Consolidation
**NanoBot, CoPaw, LobsterAI, NanoClaw** — Smaller daily volume but with clear strategic focus areas (transcription, enterprise IM, desktop portability, container security). CoPaw has the best closure rate (23/49 issues resolved today). NanoBot has the clearest feature roadmap. LobsterAI's backlog-clearing mode suggests an imminent release.

### Tier 3: Early-Stage / Niche
**PicoClaw (hardware-aligned), TinyClaw (developer-experience), NullClaw/Moltis/ZeptoClaw (dormant)** — PicoClaw is building a genuinely differentiated RISC-V play; the others show insufficient community engagement to assess trajectory.

**Overall lifecycle signal:** The ecosystem is moving from "build the basic agent loop" (2024-2025) into "harden for production deployment" — evidenced by the dominance of security, channel reliability, and session correctness issues over feature requests across all active projects.

---

## 7. Trend Signals

### T1. The "Context Engine" is now the critical unsolved abstraction
Every project is discovering that naively trimming/packing conversation history breaks tool-calling invariants and agent reasoning. Multiple teams (NanoBot #4238 ContextGovernor, ZeroClaw #7234 MemoryStrategy trait, OpenClaw #45608 pre-reset flush) are independently building dedicated context governance layers. **Opportunity:** A shared, well-tested context engine library could become infrastructure-level dependency for the entire ecosystem, analogous to what vLLM did for inference serving.

### T2. Security is becoming a platform feature, not a filter
ZeroClaw's RFC #7142 (pluggable security providers), NanoClaw's #2713 (container egress lockdown), and OpenClaw's skill injection vulnerability (#45740) collectively signal that projects must treat the agent's execution environment as security-critical. The "ask/deny/allow" tier for shell commands (ZeroClaw #7155) and per-install keychain isolation (CoPaw #5028) are best practices emerging in real time.

### T3. Enterprise IM is the battleground channel
WeChat (CoPaw #4477, #4585), QQ Bot (OpenClaw beta.5, LobsterAI #1514), and DingTalk (CoPaw #4990) — Chinese enterprise messaging platforms are receiving disproportionate development attention, primarily from CoPaw, LobsterAI, and OpenClaw. Meanwhile, Western platforms (Discord, Slack, Matrix) show highest bug density relative to effort invested, with Matrix specifically being broken in Docker across both Hermes Agent (#30399) and ZeroClaw.

### T4. Transcription is becoming a first-class agent capability
NanoBot's rapid addition of AssemblyAI, Xiaomi MiMo ASR, OpenRouter, and shared voice input as a first-level subsystem (rather than a channel-specific feature) represents an architectural shift: **hearing is an agent sense, not a channel feature.** Other projects will likely follow this pattern as multimodal voice interaction matures.

### T5. Portable user data is the next retention lever
LobsterAI's backup/restore pipeline (tar archive with rollback), CoPaw's workspace consolidation (#4408 `.qwenpaw`), and NanoClaw's webhook bind-host configurability all reflect that users expect to move agent state between machines and deployments. The agent "state portability" story is currently fragmented and will become a key differentiator as user bases mature beyond single-device setups.

---

*The most consequential near-term development to watch is CoPaw's #4727 (AgentScope 2.0 migration): a breaking backend dependency change that will cascade through their plugin ecosystem and could serve as a case study — positive or cautionary — for the entire category on how to manage major architectural transitions in open-source agent projects.*

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-06-09

---

## 1. Today's Overview

NanoBot (HKUDS/nanobot) is in a phase of **extremely high contribution velocity**. In the last 24 hours the project processed **37 PR updates** (22 still open, 15 merged/closed) alongside **8 issue updates**, with no new release published. The activity is overwhelmingly feature- and fix-oriented, with very few open bugs: the community and core contributors are pushing on transcription provider expansion (Xiaomi MiMo ASR, AssemblyAI, OpenRouter), WebUI polish (version display, update notifications), channel reliability (WeChat session recovery, Telegram code-block splitting), and security hardening (symlink escape prevention, SSRF validation). The open-PR count of 22 signals a healthy pipeline but also a potential bottleneck in review bandwidth.

---

## 2. Releases

**No new release.** No releases were recorded in the last 24 hours. A version badge with PyPI update notification was merged ([PR #4235](https://github.com/HKUDS/nanobot/pull/4235)), but no tag has been cut yet.

---

## 3. Project Progress (Merged / Closed PRs)

| # | Title | Status | Significance |
|---|-------|--------|-------------|
| [#4217](https://github.com/HKUDS/nanobot/pull/4217) | feat(providers): `extra_query` config for OpenAI-compatible providers | **Merged** | Enables Azure-style `?api-version=` query parameter injection via `ProviderConfig.extra_query`; unblocks enterprise gateway configurations. |
| [#4224](https://github.com/HKUDS/nanobot/pull/4224) | feat(transcription): add AssemblyAI as transcription provider | **Merged** | Expanding the new top-level `transcription` system with a conservative, high-accuracy STT backend. |
| [#4175](https://github.com/HKUDS/nanobot/pull/4175) | feat(transcription): add Xiaomi MiMo ASR (`mimo-v2.5-asr`) | **Merged** | Brings Chinese-optimized speech recognition into the transcription layer. |
| [#4113](https://github.com/HKUDS/nanobot/pull/4113) | feat(transcription): OpenRouter transcription provider + configurable STT model | **Merged** | Allows routing WebUI, desktop, and chat-channel voice transcription through OpenRouter with shared credentials. |
| [#4232](https://github.com/HKUDS/nanobot/pull/4232) | feat(transcription): shared voice input support | **Merged** | Makes transcription a shared system capability rather than channel-only; supports WebUI and desktop voice input. |
| [#4219](https://github.com/HKUDS/nanobot/pull/4219) | fix(session): drop orphan tool results before history trimming | **Merged** | Prevents malformed tool-result ghosts from degrading context windows. |
| [#4221](https://github.com/HKUDS/nanobot/pull/4221) | fix(exec): block relative symlink workspace escapes | **Merged** | Security fix — prevents `ExecTool` from following symlinks outside the workspace. |
| [#4235](https://github.com/HKUDS/nanobot/pull/4235) | feat(webui): show nanobot version in Settings Overview | **Merged** | Adds version display + cached PyPI update check to UI; landed same day as the issue was filed. |
| [#4255](https://github.com/HKUDS/nanobot/pull/4255) | feat(webui): version badge with real-time PyPI update notifications | **Open** | Supersedes/extends #4235 with a header badge and background polling. |

**Key takeaway:** The transcription subsystem is the most active area — four transcription providers landed in rapid succession, and the architecture has been refactored to a shared top-level capability. Security fixes for exec-tool symlink escapes were also merged promptly.

---

## 4. Community Hot Topics

### Most Active Issues (by engagement)

- **[#4253](https://github.com/HKUDS/nanobot/issues/4253) — Support overriding model per conversation** (open, 1 comment)
  User `rombert` wants to switch between an OpenRouter cloud model and a local llamacpp model on a per-conversation basis based on privacy/time-sensitivity. This signals demand for **runtime model routing** — a non-trivial feature that would require conversation-level provider overrides.

- **[#4233](https://github.com/HKUDS/nanobot/issues/4233) — Show nanobot version in the WebUI** (open, 1 comment, tagged `good first issue`)
  Already addressed by merged PR #4235 and extended by open PR #4255. Fast turnaround indicates this was a low-hanging fruit the maintainers prioritized.

- **[#4251](https://github.com/HKUDS/nanobot/issues/4251) — File/image upload in input box for processing** (closed, 1 comment)
  Chinese-language request for multimodal input (image analysis, PDF summarization). Closed without resolution — likely deferred to a future multimodal channel integration.

### Most Active PRs (by recency and scope)

- **[#3992](https://github.com/HKUDS/nanobot/pull/3992) — feat(agent-collab): enable cross-agent messaging** (open since 2026-05-24)
  The most architecturally significant open PR. Implements a shared message bus for multiple agent instances to communicate. Still unreviewed after 16 days — likely complex and needs careful review.

- **[#4257](https://github.com/HKUDS/nanobot/pull/4257) — fix(utils): make `split_message` fenced-code-block-aware** (open)
  Directly addresses issue #4250. Prevents Telegram message splitting from breaking code blocks. High utility, low risk — likely to merge soon.

- **[#4238](https://github.com/HKUDS/nanobot/pull/4238) — Gate microcompact by context pressure** (open)
  Extracts context governance into a `ContextGovernor` class, gating compaction on actual context pressure rather than fixed counts. Architectural improvement for long-context reliability.

**Underlying needs analysis:** The community is converging on three themes: (1) **provider/config flexibility** (extra_query, per-conversation model selection), (2) **transcription as a first-class capability** (multiple backends, shared config), and (3) **UI polish and observability** (version display, update notifications). The cross-agent messaging PR suggests power users are pushing NanoBot toward multi-agent orchestration.

---

## 5. Bugs & Stability

| Severity | Issue | Description | Fix Status |
|----------|-------|-------------|------------|
| 🔴 **High** | [#4074](https://github.com/HKUDS/nanobot/issues/4074) — MCP HTTP/SSE SSRF validation bypass | MCP connection setup attempts loopback connections before rejecting private targets, inconsistent with SSRF validation in fetch tools. | **Closed** (fix likely included in a merged PR, no explicit fix PR referenced) |
| 🔴 **High** | [#4242](https://github.com/HKUDS/nanobot/issues/4242) — `dream.enabled=false` still injects full chat history | Disabling Dream doesn't stop the Recent History section from injecting all history into the system prompt via a stale `.dream_cursor`. Wastes tokens and defeats the purpose of disabling Dream. | **Open, no fix PR yet** |
| 🟡 **Medium** | [#4250](https://github.com/HKUDS/nanobot/issues/4250) — `split_message` breaks fenced code blocks on Telegram | Long responses with code blocks get split mid-fence, producing broken HTML in both Telegram messages. | **Fix PR open:** [#4257](https://github.com/HKUDS/nanobot/pull/4257) |
| 🟡 **Medium** | [#4223](https://github.com/HKUDS/nanobot/pull/4223) — WeChat session dead loop after token expiry | After session expiry, WeChat channel sleeps 60 minutes then returns without reloading state, causing permanent silent failure. | **Fix PR open:** [#4223](https://github.com/HKUDS/nanobot/pull/4223) |
| 🟢 **Low** | [#4256](https://github.com/HKUDS/nanobot/pull/4256) — Memory cursor non-monotonic after compaction | `MemoryStore` cursor can go stale or negative after history compaction, risking ID collisions. | **Fix PR open:** [#4256](https://github.com/HKUDS/nanobot/pull/4256) |

**Most critical open bug:** [#4242](https://github.com/HKUDS/nanobot/issues/4242) — the Dream/history injection issue has no fix PR and directly impacts users who disable Dream to save tokens. This should be prioritized.

---

## 6. Feature Requests & Roadmap Signals

| Request | Source | Likelihood in Next Version | Notes |
|---------|--------|---------------------------|-------|
| Per-conversation model override | [#4253](https://github.com/HKUDS/nanobot/issues/4253) | **Medium** | Requires conversation-level provider config; non-trivial but aligns with existing per-channel model config patterns. |
| File/image upload for multimodal processing | [#4251](https://github.com/HKUDS/nanobot/issues/4251) | **Low** | Closed without resolution; likely needs multimodal model support + channel-level file handling. |
| Cross-agent messaging / multi-agent bus | [PR #3992](https://github.com/HKUDS/nanobot/pull/3992) | **Medium-High** | Already implemented and tested; just needs review. Could land in next minor release. |
| Context-pressure-gated microcompaction | [PR #4238](https://github.com/HKUDS/nanobot/pull/4238) | **Medium** | Architectural improvement; depends on maintainer bandwidth for review. |
| Configurable IMAP post-actions for email | [PR #4170](https://github.com/HKUDS/nanobot/pull/4170) | **Medium** | Useful for agent-managed mailboxes; open since June 3, needs review. |

**Prediction:** The next release will likely be a **minor version bump** focused on transcription system consolidation (the four recently merged providers), the WebUI version badge, and security fixes. The cross-agent messaging feature is the most significant architectural addition waiting in the wings.

---

## 7. User Feedback Summary

**Pain points:**
- **Configuration gaps for enterprise gateways**: Users hitting Azure-style providers that require query parameters had no workaround until `extra_query` landed. This was a hard blocker.
- **Token waste from Dream history injection**: Users explicitly disabling Dream to reduce costs are still paying for full history injection — a frustrating silent failure.
- **WeChat channel reliability**: The session dead-loop after token expiry means the WeChat channel can permanently stop working without manual intervention, a serious issue for production deployments.
- **Telegram code rendering**: Broken code blocks in Telegram degrade the experience for technical users who share code snippets.

**Use cases observed:**
- Privacy-sensitive users running **local llamacpp** for private tasks and **OpenRouter** for speed — wanting per-conversation switching.
- Chinese-speaking users needing **Chinese-optimized ASR** (Xiaomi MiMo) and **multimodal input** (image/PDF analysis).
- Power users exploring **multi-agent collaboration** with cross-instance messaging.

**Satisfaction signals:** The rapid closure of the version-display issue (same-day PR merge) and the quick turnaround on transcription providers suggest responsive maintainers. However, the 16-day-unreviewed cross-agent PR and the unanswered Dream bug indicate review bandwidth constraints.

---

## 8. Backlog Watch

| Item | Age | Why It Needs Attention |
|------|-----|----------------------|
| **[PR #3992](https://github.com/HKUDS/nanobot/pull/3992) — Cross-agent messaging** | 16 days open | Largest architectural PR in the queue. Implements multi-agent communication — a significant capability. Needs maintainer review or explicit feedback. |
| **[PR #4170](https://github.com/HKUDS/nanobot/pull/4170) — IMAP post-actions for email** | 6 days open | Practical feature for email-channel users. No comments or review activity visible. |
| **[Issue #4242](https://github.com/HKUDS/nanobot/issues/4242) — Dream disabled but history still injected** | 1 day open | Active bug with no fix PR. Directly impacts users trying to control token costs. Should be triaged. |
| **[PR #4053](https://github.com/HKUDS/nanobot/pull/4053) — Keep read-only roots out of write paths** | 10 days open | Security-adjacent fix for filesystem tool access control. No visible review activity. |
| **[PR #3982](https://github.com/HKUDS/nanobot/pull/3982) — Scripted agent runner harness** | 16 days open | Test infrastructure improvement. Unreviewed alongside other test PRs from same author. |

**Maintainer action recommended:** Prioritize review of the security-related PRs (#4053, #4221 already merged but #4053 is still open) and triage the Dream/history injection bug (#4242). The cross-agent messaging PR (#3992) deserves either a review or a scope discussion to avoid contributor frustration.

---

*Data source: HKUDS/nanobot GitHub, snapshot 2026-06-09. Generated by OWL.*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-06-09

---

## 1. Today's Overview

Hermes Agent is experiencing **exceptionally high activity** with 50 issues and 50 PRs updated in the last 24 hours, signaling a large and highly engaged community. No new releases were published today, but the project is clearly in an active development cycle following the v0.16.0 release (2026-06-05). The volume of concurrent bug reports — particularly around the Desktop app, gateway stability, and context engine corruption — suggests that v0.16.0 introduced several regressions that the community is rapidly identifying and the maintainers are actively addressing through PRs. The project health is **robust but under pressure**: the high open-issue count (46) and open-PR count (45) indicate a backlog that will require sustained maintainer bandwidth.

---

## 2. Releases

**No new releases today.** The latest version remains **v0.16.0** (released 2026-06.05). The absence of a release today is notable given the volume of fix PRs being submitted — a patch release (v0.16.1) may be warranted soon given the severity of several confirmed regressions (see §5).

---

## 3. Project Progress

### Merged / Closed PRs (Today)

| PR | Description | Significance |
|---|---|---|
| [#42308](https://github.com/NousResearch/hermes-agent/pull/42308) | fix(gateway): pass finalize flag for progress edits + MarkdownV2 fallback on Telegram | Fixes tool progress message rendering regression on Telegram; refs #41955, #41732 |
| [#41372](https://github.com/NousResearch/hermes-agent/pull/41372) | fix(model): prevent wizard from overwriting model.base_url when adding provider | Prevents config corruption when adding a new provider without switching defaults; fixes #40862 |
| [#40882](https://github.com/NousResearch/hermes-agent/pull/40882) | fix(model): duplicate of #41372 (same fix, separate branch) | Likely a cleanup/dupe — same issue |
| [#41363](https://github.com/NousResearch/hermes-agent/pull/41363) | fix(cron): add standalone cron daemon mode | Enables `hermes cron daemon` for headless/Windows setups without gateway |
| [#41167](https://github.com/NousResearch/hermes-agent/pull/41167) | fix(cron): duplicate of #41363 (same feature) | Likely a cleanup/dupe |

### Closed Issues (Today)

| Issue | Description |
|---|---|
| [#42130](https://github.com/NousResearch/hermes-agent/issues/42130) | OpenRouter credential configured but requests sent without Auth header |
| [#42306](https://github.com/NousResearch/hermes-agent/issues/42306) | Langfuse plugin: GENERATION spans missing usage/token counts |
| [#41732](https://github.com/NousResearch/hermes-agent/issues/41732) | Discord compact tool progress leaks terminal commands as code blocks |
| [#41955](https://github.com/NousResearch/hermes-agent/issues/41955) | Gateway tool progress leaks raw shell commands to messaging chats |

**Key takeaway:** The merged PRs address three important areas: (1) a **cron daemon mode** for standalone operation, (2) a **model config wizard fix** preventing accidental provider overwrites, and (3) **Telegram/MarkdownV2 rendering** for tool progress. The closed issues suggest some were resolved by the v0.16.0 release or by the merged PRs above.

---

## 4. Community Hot Topics

### Most Discussed Issues (by comment count)

1. **[#27997](https://github.com/NousResearch/hermes-agent/issues/27997)** — *Declarative Skill Protection Policy* (7 comments, P3)
   - **Underlying need:** Skill protection rules are scattered across 6+ files with inconsistent enforcement. Users need a centralized, declarative policy for skill safety. This is a **code quality / maintainability** concern that has been open since May 18.

2. **[#34457](https://github.com/NousResearch/hermes-agent/issues/34457)** — *s6-log lock collision in multi-container gateway + dashboard* (6 comments, 👍3, P2)
   - **Underlying need:** Docker deployments with shared volumes (gateway + dashboard) trigger endless s6-log crash loops. This affects **production Docker users** and has been open since May 29.

3. **[#30399](https://github.com/NousResearch/hermes-agent/issues/30399)** — *Cannot use Matrix gateway from Docker image* (6 comments, 👍3, P2)
   - **Underlying need:** The Matrix gateway requires `mautrix[encryption]` which is missing from the Docker image. This is a **packaging gap** blocking Matrix users entirely.

4. **[#9512](https://github.com/NousResearch/hermes-agent/issues/9512)** — *Microsoft Teams gateway support* (6 comments, P3)
   - **Underlying need:** Enterprise users want native Teams integration, similar to existing Slack/Discord/Telegram adapters. Open since April 14.

5. **[#42130](https://github.com/NousResearch/hermes-agent/issues/42130)** — *OpenRouter credential but no Auth header* (4 comments, P2, **CLOSED**)
   - **Underlying need:** OpenRouter users couldn't authenticate despite correct config. Now closed — likely fixed.

### Most Active PRs (submitted today)

- **[#42469](https://github.com/NousResearch/hermes-agent/pull/42469)** — deepcopy plugin context engine to prevent parent corruption on `delegate_task`
- **[#42461](https://github.com/NousResearch/hermes-agent/pull/42461)** — deep-copy context engine singleton (alternative fix for same issue)
- **[#42459](https://github.com/NousResearch/hermes-agent/pull/42459)** — Scope Runs API by session key
- **[#42460](https://github.com/NousResearch/hermes-agent/pull/42460)** — Scope API sessions by session key
- **[#42462](https://github.com/NousResearch/hermes-agent/pull/42462)** — fix(photon): repair iMessage outbound (pinned SDK targets decommissioned host)

**Analysis:** The community is heavily focused on **multi-agent safety** (delegate_task context corruption), **API server multi-tenancy** (session key scoping), and **gateway reliability** (Docker, macOS launchd, messaging adapters). The duplicate PRs (#42469/#42461 for context engine, #42459/#42460 for session scoping) suggest multiple contributors are working in parallel — a sign of high community engagement but also potential coordination overhead for maintainers.

---

## 5. Bugs & Stability

### Critical / P1 Bugs

| Issue | Severity | Description | Fix PR? |
|---|---|---|---|
| **[#42449](https://github.com/NousResearch/hermes-agent/issues/42449)** | 🔴 P1 | `delegate_task` corrupts parent `context_length` via shared plugin context engine singleton | ✅ [#42469](https://github.com/NousResearch/hermes-agent/pull/42469), [#42461](https://github.com/NousResearch/hermes-agent/pull/42461) |

### High / P2 Bugs

| Issue | Severity | Description | Fix PR? |
|---|---|---|---|
| **[#34457](https://github.com/NousResearch/hermes-agent/issues/34457)** | 🟠 P2 | s6-log lock collision loops in multi-container Docker setups | ❌ |
| **[#30399](https://github.com/NousResearch/hermes-agent/issues/30399)** | 🟠 P2 | Matrix gateway broken in Docker (missing mautrix[encryption]) | ❌ |
| **[#36845](https://github.com/NousResearch/hermes-agent/issues/36845)** | 🟠 P2 | Cron script timeout masked as `last_status=ok` by LLM fallback | ❌ |
| **[#42376](https://github.com/NousResearch/hermes-agent/issues/42376)** | 🟠 P2 | macOS launchd plist `LimitLoadToSessionType` breaks `bootstrap` on macOS 26+ | ✅ [#42464](https://github.com/NousResearch/hermes-agent/pull/42464) |
| **[#42405](https://github.com/NousResearch/hermes-agent/issues/42405)** | 🟠 P2 | Memory at capacity → `replace` zero-match retry loop → silent hang (no response) | ❌ |

### Medium / P3 Bugs (Selected)

| Issue | Description | Fix PR? |
|---|---|---|
| **[#41898](https://github.com/NousResearch/hermes-agent/issues/41898)** | Desktop app: assistant response flashes and disappears (NVIDIA NIM provider) | ❌ |
| **[#42267](https://github.com/NousResearch/hermes-agent/issues/42267)** | Gateway stop/restart notifications bypass i18n (hardcoded English) | ❌ |
| **[#42256](https://github.com/NousResearch/hermes-agent/issues/42256)** | Desktop composer: Excel paste inserts tab characters, messy output | ❌ |
| **[#42270](https://github.com/NousResearch/hermes-agent/issues/42270)** | TUI `/model` picker hard-caps at 50 entries, hiding models for large catalogs | ❌ |
| **[#42409](https://github.com/NousResearch/hermes-agent/issues/42409)** | Desktop Artifacts: all timestamps render as Jan 1970 (epoch seconds vs milliseconds) | ❌ |
| **[#42401](https://github.com/NousResearch/hermes-agent/issues/42401)** | Desktop: prompts discarded when opening a new screen | ❌ |
| **[#42422](https://github.com/NousResearch/hermes-agent/issues/42422)** | Desktop: "Delete session" doesn't persist for live Discord sessions | ❌ |
| **[#42433](https://github.com/NousResearch/hermes-agent/issues/42433)** | Desktop Cron view doesn't render script/no_agent jobs | ❌ |
| **[#42362](https://github.com/NousResearch/hermes-agent/issues/42362)** | Discord: slash command confirmation buttons dead-end with "not authorized" | ❌ |
| **[#4581](https://github.com/NousResearch/hermes-agent/issues/4581)** | `read_file` always adds line numbers; no option for raw content | ❌ |

**Stability assessment:** The **Desktop app** is the most bug-prone component today, with at least 6 distinct UI/UX bugs reported (timestamps, session deletion, prompt loss, Excel paste, model picker, artifacts rendering). The **context engine singleton corruption** (#42449) is the most critical issue — it silently corrupts multi-agent workflows and has two competing fix PRs already submitted. The **memory retry loop hang** (#42405) is also concerning as it produces no user-visible error.

---

## 6. Feature Requests & Roadmap Signals

### Active Feature Requests

| Issue | Description | Likelihood of Next Version |
|---|---|---|
| **[#27997](https://github.com/NousResearch/hermes-agent/issues/27997)** | Declarative Skill Protection Policy (centralized skill safety) | 🟡 Medium — architectural, needs design |
| **[#9512](https://github.com/NousResearch/hermes-agent/issues/9512)** | Microsoft Teams gateway support | 🟡 Medium — enterprise demand, but large scope |
| **[#25979](https://github.com/NousResearch/hermes-agent/issues/25979)** | `productivity/outlook` skill — Microsoft 365 Calendar + To Do via Graph | 🟢 High — author has working implementation, willing to contribute |
| **[#38357](https://github.com/NousResearch/hermes-agent/issues/38357)** | Show sessions from all profiles in Desktop sidebar | 🟢 High — straightforward UX improvement |
| **[#41988](https://github.com/NousResearch/hermes-agent/issues/41988)** | Per-provider default sampling params (temperature, top_p, top_k) for local models | 🟢 High — small scope, high value for local LLM users |
| **[#40259](https://github.com/NousResearch/hermes-agent/issues/40259)** | Telegram clarify: render choice text on buttons instead of bare numbers | 🟢 High — UX polish, small scope |
| **[#42388](https://github.com/NousResearch/hermes-agent/issues/42388)** | Decouple background-review fork's write scope from spawn triggers | 🟡 Medium — security/design consideration |
| **[#41979](https://github.com/NousResearch/hermes-agent/issues/41979)** | Gateway attachment persistence — received files silently discarded | 🟡 Medium — affects all messaging platforms |
| **[#42447](https://github.com/NousResearch/hermes-agent/pull/42447)** | Per-entry `reasoning_effort` in fallback_model chain | 🟡 Medium — PR already submitted |

**Prediction for v0.16.1 / next release:** The most likely candidates are the **Outlook skill** (#25979, has implementation), **per-provider sampling params** (#41988, small scope), **Telegram clarify UX** (#40259), and **multi-profile session sidebar** (#38357). The **declarative skill protection** (#27997) and **Teams gateway** (#9512) are longer-term efforts.

---

## 7. User Feedback Summary

### Pain Points

1. **Desktop app quality** — Multiple users report the Desktop app feels unstable: prompts disappearing on navigation (#42401), timestamps showing Jan 1970 (#42409), sessions not deleting (#42422), and responses flashing then vanishing (#41898). This suggests the Desktop app may need a dedicated stabilization sprint.

2. **Docker deployment friction** — Users running Docker setups face s6-log crash loops (#34457), missing Matrix encryption deps (#30399), and general complexity. The Docker experience is a recurring pain point.

3. **Multi-agent / delegate_task reliability** — The context engine singleton corruption (#42449) is a critical issue for users running multi-agent workflows. The fact that two independent contributors submitted fix PRs on the same day underscores how impactful this is.

4. **Local model provider experience** — Users running local LLMs (llama.cpp, vLLM, mlx-vlm) lack control over sampling parameters (#41988) and face model picker limitations (#42270). The local-first workflow needs more attention.

5. **Cron reliability** — Cron jobs silently succeeding when underlying scripts fail (#36845) is a dangerous false-positive that has bitten users in production.

### Satisfaction Signals

- The **cron daemon mode** PRs (#41363, #41167) were quickly merged, showing responsive maintainer action on a long-standing gap.
- The **Telegram MarkdownV2 fix** (#42308) was merged the same day it was submitted, indicating good turnaround on messaging adapter issues.
- Multiple contributors are submitting PRs for the same issues (context engine, session scoping), showing a **healthy contributor ecosystem**.

---

## 8. Backlog Watch

### Long-Unanswered Issues Needing Maintainer Attention

| Issue | Age | Description | Why It Matters |
|---|---|---|---|
| **[#4581](https://github.com/NousResearch/hermes-agent/issues/4581)** | 58 days (Apr 2) | `read_file` has no option to return raw content without line numbers | Simple fix, high utility, affects all file-reading workflows |
| **[#9512](https://github.com/NousResearch/hermes-agent/issues/9512)** | 56 days (Apr 14) | Microsoft Teams gateway support | Enterprise demand, 6 comments, no maintainer response |
| **[#30399](https://github.com/NousResearch/hermes-agent/issues/30399)** | 18 days (May 22) | Matrix gateway broken in Docker | Blocks an entire platform, 👍3, no fix PR |
| **[#34457](https://github.com/NousResearch/hermes-agent/issues/34457)** | 10 days (May 29) | s6-log lock collision in Docker multi-container | Affects production deployments, 👍3, no fix PR |
| **[#27997](https://github.com/NousResearch/hermes-agent/issues/27997)** | 22 days (May 18) | Declarative Skill Protection Policy | Architectural improvement, 7 comments (highest today), no maintainer triage |
| **[#36845](https://github.com/NousResearch/hermes-agent/issues/36845)** | 8 days (Jun 1) | Cron timeout masked as OK | Silent failure in production automation, no fix PR |
| **[#40101](https://github.com/NousResearch/hermes-agent/issues/40101)** | 4 days (Jun 5) | mnemosyne-hermes plugin not discovered | Third-party integration broken, no maintainer response |

### PRs Aging Without Review

| PR | Age | Description |
|---|---|---|
| **[#39639](https://github.com/NousResearch/hermes-agent/pull/39639)** | 4 days | fix(desktop): send on Enter from live editor text, not stale composer state |
| **[#38354](https://github.com/NousResearch/hermes-agent/pull/38354)** | 6 days | fix: tolerate empty Responses input no-ops |

**Recommendation:** The maintainers should prioritize triaging [#27997](https://github.com/NousResearch/hermes-agent/issues/27997) (skill protection architecture) and [#30399](https://github.com/NousResearch/hermes-agent/issues/30399) (Matrix Docker) as they represent platform-level gaps. The `read_file` raw content option (#4581) is a quick win that has been waiting nearly two months.

---

*Generated by OWL — ZOO Company — 2026-06-09*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Digest — 2026-06-09

---

## 1. Today's Overview

PicoClaw saw intense activity with **18 PRs touched and 3 issues updated** in the last 24 hours, indicating a high-velocity maintenance sprint. The project is running on nightly builds (latest: `v0.2.9-nightly.20260608`), suggesting active pre-release development toward a stable v0.3.x. A notable batch of housekeeping PRs from contributor `chengzhichao-xydt` landed in rapid succession — fixing unchecked type assertions, `fmt.Errorf` wrapping, inactive `Close()` errors, and migrating `log.Printf` to structured logging. The DeltaChat gateway (PR #3063) is a significant new integration signal. Project health is strong: bugs are being fixed the same day they're filed, and the backlog is well-groomed with stale labels applied.

---

## 2. Releases

**Nightly: `v0.2.9-nightly.20260608`** (commit `875cf4a2`, 2026-06-08)

- This is an automated nightly build tagged from `main`. It is flagged as potentially unstable and intended for testing/QA only.
- Full changelog spans from `v0.2.9` to current `main`, encompassing the wave of type-assertion safety fixes, error-wrapping corrections, structured-logging refactors, and the Telegram location-message fix described below.
- Users on stable RISC-V `.deb` packages should **not** switch until issue #2887 is resolved.
- No breaking changes or migration notes have been formally catalogued. A stable `v0.2.10` or `v0.3.0` point release is expected to ship these fixes.

---

## 3. Project Progress (Merged / Closed PRs)

| # | Title | Author | Significance |
|---|-------|--------|-------------|
| [#3052](https://github.com/sipeed/picoclaw/pull/3052) | **fix: handle Telegram location messages** | wzg-gie | Closes issue #3049. Location-only messages now translated to `[User location: lat=…, lng=…]` text, allowing them to enter the agent pipeline. |
| [#3050](https://github.com/sipeed/picoclaw/pull/3050) | **refactor: replace log.Printf/fmt.Printf with structured logger** | chengzhichao-xydt | Eliminates raw stderr/stdout log scattering. Affects `state.go` and several other production files. |
| [#3051](https://githubsipeed/picoclaw/pull/3051) | **fix: use %w instead of %v for error wrapping** | chengzhichao-xydt | Restores `errors.Is()`/`errors.As()` chainability in channels and MCP paths. |
| [#3058](https://github.com/sipeed/picoclaw/pull/3058) | **fix(webfetch): add ok check for type assertion** | chengzhichao-xydt | Prevents silent `isAllowedFirstHopHost` failures on context value mismatch. |
| [#3057](https://github.com/sipeed/picoclaw/pull/3057) | **fix(tools): add ok checks for type assertions in subagent/spawn** | chengzhichao-xydt | Eliminates panic risk on invalid `args` map types. |
| [#3056](https://github.com/sipeed/picoclaw/pull/3056) | **fix(tools): add ok checks for context value type assertions in base.go** | chengzhichao-xydt | Seven `Tool*` helper functions hardened. |
| [#3055](https://github.com/sipeed/picoclaw/pull/3055) | **fix(agent): handle os.Getwd error in NewContextBuilder** | chengzhichao-xydt | Graceful fallback on working-directory resolution failure. |
| [#3053](https://github.com/sipeed/picoclaw/pull/3053) | **fix(evolution): add ok check for LoadOrStore in lockStoreFile** | chengzhichao-xydt | Ephemeral — same-day open and already present in next wave. |
| [#3018](https://github.com/sipeed/picoclaw/pull/3018) | **fix: type assertion + os.Getwd safety across LINE, evolution store** | chengzhichao-xydt | Landed the original comprehensive fix set on 2026-06-08. |
| [#3062](https://github.com/sipeed/picoclaw/pull/3062) | **fix: health check always returning not ready** | trufae | Stale health-check fix closed (possibly superseded by work-in-progress). |

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

## NanoClaw Project Digest — 2026-06-09

---

### 1. Today's Overview

NanoClaw shows moderate activity over the past 24 hours, with 1 new issue and 3 updated pull requests (2 merged/closed, 1 still open). The project has no new releases. Development momentum is focused heavily on **security hardening**, with both merged and open PRs today addressing container isolation, webhook binding defaults, and cryptographic randomness for approval IDs. One newly reported bug around WhatsApp media file accessibility signals a potentially significant integration friction point for end users.

---

### 2. Releases

No new releases in the last 24 hours.

---

### 3. Project Progress

Two PRs were merged/closed today, both advancing security posture:

- **PR #2713 — feat(security): egress lockdown (opt-in, off by default)** ([nanocoai/nanoclaw#2713](https://github.com/nanocoai/nanoclaw/pull/2713))
  Introduces an opt-in Docker `--internal` network mode that places each agent container on a network with no direct internet route, proxying all outbound traffic through the OneCLI gateway via a `host.docker.internal` alias. This gives deployments a container-level network lockdown capability; it is explicitly opted-out by default to avoid breaking existing setups.

- **PR #2712 — [follows-guidelines] pull request** ([nanocoai/nanoclaw#2712](https://github.com/nanocoai/nanoclaw/pull/2712))
  Minimal description available, but the submitter indicated type-of-change categories including channel/integration additions and operational/container skills. Details are sparse; the PR appears to be a minor contribution or cleanup item.

One PR remains open:

- **PR #2714 — security: fix four auth/security issues** ([nanocoai/nanoclaw#2714](https://github.com/nanocoai/nanoclaw/pull/2714))
  Targets four flaws: (1) webhook-server binding to `127.0.0.1` by default instead of `0.0.0.0`, (2) replacing `Math.random()` with `crypto.randomUUID()` for sender-approval IDs to prevent timing-based prediction attacks, and additional undisclosed auth fixes awaiting review.

---

### 4. Community Hot Topics

| # | Title | Replies | 👍 | URL |
|---|-------|---------|-----|-----|
| — | — (no items with comments/reactions) | — | — | — |

Neither the issue nor any of the PRs garnered comments or reactions in the reporting window. **Underlying need signals**: contributor energy today is concentrated on **security hardening** — specifically container network isolation and cryptographic ID generation — suggesting the community (or maintainers) are auditing the project for production-readiness and sensitive-deployment safety (e.g., SaaS tenancy, multi-channel message handling).

---

### 5. Bugs & Stability

| Severity | Issue | Description | Fix PR? |
|----------|-------|-------------|---------|
| 🔴 Medium | [#2715](https://github.com/nanocoai/nanoclaw/issues/2715): WhatsApp media unreachable by agent | Inbound WhatsApp attachments save to a host-side `DATA_DIR/attachments` path, but this directory is not mounted into the agent container. The agent is given a `/workspace/attachments/...` path that doesn't exist inside its filesystem, so it cannot open images, documents, or audio. Blocks WhatsApp v2 media workflows entirely. | None yet |

No crashes or regressions were reported beyond the WhatsApp media bug.

---

### 6. Feature Requests & Roadmap Signals

- **Container egress lockdown (PR #2713, merged):** Already merged as opt-in; likely will appear in the next minor release changelog.
- **Webhook bind-host configurability & crypto-secure approval IDs (PR #2714):** Once merged, this addresses hardening needs for internet-facing deployments. The separation of `WEBHOOK_BIND_HOST` as an env var suggests upcoming documentation around deployment topology recommendations.
- **Skipped items prediction:** The PR #2712 hints at continued skill/channel framework expansion (channel integrations, operational/container skills) which may surface as a feature or docs update soon.

No new user-facing feature requests were filed in the last 24 hours.

---

### 7. User Feedback Summary

- **#2715 (jon-ruth):** Reports that WhatsApp v2 media handling is fundamentally broken from the agent's perspective — the agent simply cannot access the files it's told about. This is a **high-friction point** for WhatsApp-deployed users and may affect trust in the multi-channel media pipeline. No maintainer response yet.
- **#2713 / #2714 contributors:** Implicitly signal demand for **tighter security defaults**, especially for deployments where agents handle untrusted input or internet traffic. The opt-in pattern (off by default) shows a careful balance between security and backward compatibility.

No sentiment indicators (👍, comments) were recorded yet on any item.

---

### 8. Backlog Watch

| Item | Age | Why Attention Matters |
|------|-----|-----------------------|
| [#2715](https://github.com/nanocoai/nanoclaw/issues/2715) — WhatsApp media path mismatch | 1 day (filed 2026-06-08) | Blocks core media workflow for WhatsApp deployments. No maintainer response or linked fix PR yet; risk of user attrition if not triaged quickly. |
| [#2714](https://github.com/nanocoai/nanoclaw/pull/2714) — auth/security fixes | 1 day (opened 2026-06-08) | Contains concrete security patches (binding default, crypto fix). Awaiting review/merge; timely integration improves project's security posture before the next release window. |

---

*Data snapshot: 2026-06-09. Monitor [#2715](https://github.com/nanocoai/nanoclaw/issues/2715) and [#2714](https://github.com/nanocoai/nanoclaw/pull/2714) as leading indicators of this cycle's priorities.*

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

# LobsterAI Project Digest — 2026-06-09

---

## 1. Today's Overview

LobsterAI saw a highly active day on 2026-06-08, with **19 PRs touched** (18 merged/closed, 1 open) and **zero new issues**. The project is in a strong integration and stabilization phase: the team landed a major data migration/restore feature, shipped a new local callback login flow for the Electron desktop client, closed a large batch of stale PRs spanning multiple subsystems, and refined the OpenClaw gateway settings UI. No new releases were published. Community-reported bugs and feature requests from as far back as early April are being cleared in bulk, indicating the maintainers are working through an accumulated backlog.

---

## 2. Releases

No new releases today. The project's release cadence is not confirmed from the available data.

---

## 3. Project Progress

### New Features Merged Today

| PR | Feature | Summary |
|---|---|---|
| **[#2125](https://github.com/netease-youdao/LobsterAI/pull/2125)** | **User Data Backup & Restore** (renderer/main) | Adds a full data migration service — archives LobsterAI user data into a portable tar package, restores via scheduled restart with rollback. Settings UI actions wired through IPC. This is a significant cross-cutting feature involving main process, preload, and renderer. By **fisherdaddy**. |
| **[#2126](https://github.com/netease-youdao/LobsterAI/pull/2126)** | **Restore-in-Place + Runtime Lock Preservation** (renderer/main) | Fix refining the above: instead of clobbering the entire user data directory, individual restorable entries are replaced, preserving SingletonLock/Socket/Cookie files. Adds rollback-from-archive safety. By **fisherdaddy**. |
| **[#2128](https://github.com/netease-youdao/LobsterAI/pull/2128)** | **Network Directory Exclusion from Backup** (renderer/main) | Excludes Network directory from backup and preserves it during restore. By **fisherdaddy**. |
| **[#2122](https://github.com/netease-youdao/LobsterAI/pull/2122)** | **Local Callback Login Flow** (auth/main/docs) | Introduces a `localhost` callback login flow for the Electron desktop client to bypass the browser's external-app confirmation dialog. Starts a temporary `127.0.0.1` callback server. By **liuzhq1986**. |
| **[#2123](https://github.com/netease-youdao/LobsterAI/pull/2123)** | **OpenClaw Gateway URL + Status UI** (renderer/main/openclaw) | Exposes gateway port/HTTP URL via `OpenClawEngineManager` status API; renders a copyable address card with phase-aware status badges and a labeled startup progress bar. By **fisherdaddy**. |
| **[#2110](https://github.com/netease-youdao/LobsterAI/pull/2110)** | **Oversized Image Payload Guard** (cowork/renderer/docs/main) | Detects oversized OpenClaw `chat.send` payloads before sending, classifies gateway `1009`/max-payload errors as message-size failures, and adds focused tests. By **liuzhq1986**. |

### Bug Fixes Merged Today (Stale PR Clearance)

| PR | Fix | Summary |
|---|---|---|
| **[#2127](https://github.com/netease-youdao/LobsterAI/pull/2127)** | **Windows Focus After Login** (auth/main) | Brings main window to front after local callback or deep link login on Windows; uses brief always-on-top toggle to address taskbar-flashing behavior. By **liuzhq1986**. |
| **[#2129](https://github.com/netease-youdao/LobsterAI/pull/2129)** | **Login Callback Diagnostics** (renderer/main) | Logs whether the client uses an overmind or fallback portal login URL and whether the desktop login opens with a local callback redirect, aiding Windows dev-mode debugging. By **liuzhq1986**. |
| **[#1510](https://github.com/netease-youdao/LobsterAI/pull/1510)** | **Scheduled Task Silent IM Failure** ({country-flag}zh) (stale) | Adds validation ensuring a conversation is selected when IM notification channel is chosen; previously tasks with empty `delivery.to` would silently fail at trigger time. By **MaoQianTu**. |
| **[#1514](https://github.com/netease-youdao/LobsterAI/pull/1514)** | **QQ Bot Group Allowlist Missing Input UI** (stale) | Restores the input box, add button, and chip-list UI for Group Allow From in QQ Bot advanced settings; the feature existed in config form but had no UI after the group-policy switch. By **MaoQianTu**. |
| **[#1515](https://github.com/netease-youdao/LobsterAI/pull/1515)** | **Log Export Timeout** (stale) | Fixes DEFLATE compression of large log archives exceeding the 30-second timeout; addresses multi-hundred-MB serial compression and improves timeout handling. By **swuzjb**. |
| **[#1517](https://github.com/netease-youdao/LobsterAI/pull/1517)** | **Copilot OAuth Token Lost on Settings Panel Close** (stale) | Adds `useEffect` cleanup in `Settings.tsx` to cancel GitHub Copilot OAuth polling on component mount, preventing silent token loss. By **MaoQianTu**. |
| **[#1521](https://github.com/netease-youdao/LobsterAI/pull/1521)** | **Spurious Gateway Restart from skills-changed** (stale/openclaw) | Prevents the `skills-changed` event from triggering unnecessary gateway restarts. By **wowiscrazy**. |
| **[#1522](https://github.com/netease-youdao/LobsterAI/pull/1522)** | **Dynamic Model List Fetching from Provider API** (stale) | Adds a ↻ "Fetch Models" button to Settings that calls each provider's OpenAI-compatible `GET /v1/models` endpoint, eliminating the need to manually add newly released models. By **leedalei**. |
| **[#1524](https://github.com/netease-youdao/LobsterAI/pull/1524)** | **Detailed Connection Test Errors** (stale) | Replaces generic "Connection Failed" / "Connection Failed: 0" with specific i18n-keyed error messages (network, auth, rate-limit, timeout, etc.). By **swuzjb**. |
| **[#1526](https://github.com/netease-youdao/LobsterAI/pull/1526)** | **Cowork Session Color Labels** (stale) | Adds a `color` column to `cowork_sessions` and 7-color annotation picker to the session list, enabling visual categorization. By **MaoQianTu**. |
| **[#2117](https://github.com/netease-youdao/LobsterAI/pull/2117)** | **Provider Models Lost After Migration** (renderer) | Tracks migration versions so newly injected default models persist across restarts, preserving user-deleted models. By **liuzhq1986**. |
| **[#2124](https://github.com/netease-youdao/LobsterAI/pull/2124)** | **Enhanced Test Mode** (renderer) | Test mode improvements. By **fisherdaddy**. |

---

## 4. Community Hot Topics

- **User Data Migration/Migration Service (#2125 → #2126 → #2128)** — The most coordinated effort of the day. Three PRs by **fisherdaddy** in a single day built and refined a full backup/restore pipeline for user data on the Electron desktop client. This signals that LobsterAI is treating **cross-instance data portability** as a first-class concern, likely driven by user requests for seamless migration between machines or versions.
- **Windows Authentication & Login Experience (#2122 → #2127 → #2129)** — Three consecutive PRs by **liuzhq1986** address the Electron desktop login flow on Windows: local callback, window focus recovery, and diagnostic logging. This is clearly a pain point specific to the Windows Electron environment and the team is investing significantly in smoothing it out.
- **Stale PR Clearance Wave** — The 11 stale PRs merged today were all created between April 2–7, 2026 by contributors **MaoQianTu (4)**, **swuzjb (2)**, **leedalei (1)**, **wowiscrazy (1)**. This represents roughly 2 months of lag between submission and merge, suggesting the project may have limited maintainer bandwidth or a release-gating process.

**Upcoming meaningful PRs surfaced from the stale batch:**
- **Dynamic model fetching (#1522)** — addresses the real pain of hardcoded model lists becoming stale as providers release new models.
- **Cowork session color labels (#1526)** — a small but high-impact UX improvement for power users managing many sessions.

---

## 5. Bugs & Stability

No new issues or bug reports were opened today. The merged PRs reveal several notable previously-latent bugs:

| Severity | Fix (PR) | Description |
|---|---|---|
| **High** | [#1517](https://github.com/netease-youdao/LobsterAI/pull/1517) | GitHub Copilot OAuth token silently lost when settings panel closed during polling. |
| **High** | [#1521](https://github.com/netease-youdao/LobsterAI/pull/1521) | Spurious gateway restart on `skills-changed` event — could cause service disruption. |
| **Medium** | [#2110](https://github.com/netease-youdao/LobsterAI/pull/2110) | Oversized image payloads could crash or hang the OpenClaw gateway. |
| **Medium** | [#1515](https://github.com/netease-youdao/LobsterAI/pull/1515) | Log export fails silently with timeout on large log archives. |
| **Low** | [#1510](https://github.com/netease-youdao/LobsterAI/pull/1510) | Scheduled task created with empty notification target; fails silently. |
| **Low** | [#2117](https://github.com/netease-youdao/LobsterAI/pull/2117) | Provider model deletions lost after app restart due to repeated migration injection. |

Additionally, **PR #1277** (open, by **dependabot[bot]**) bumps the Electron framework from `40.2.1` → `42.3.3` (with `electron-builder`). This is a **major version jump** (two major versions) that has been open since April 2 with ⚠️ no merge or close activity in the last 24h. Unmerged Electron major bumps may carry **security patches** and represent a maintenance risk. [View PR #1277](https://github.com/netease-youdao/LobsterAI/pull/1277).

---

## 6. Feature Requests & Roadmap Signals

Based on the stale batch of contributor PRs that were merged today, several feature-level improvements were likely community-requested or strongly usability-driven:

| Feature (via merged PR) | Likelihood of being in next release |
|---|---|
| **Cowork session color labels** ([#1526](https://github.com/netease-youdao/LobsterAI/pull/1526)) | Already merged — will appear in next release. |
| **Dynamic model list fetching** ([#1522](https://github.com/netease-youdao/LobsterAI/pull/1522)) | Already merged — addresses a common user pain around model discovery. |
| **User data backup/restore** ([#2125](https://github.com/netease-youdao/LobsterAI/pull/2125)) | Already merged — a headline feature likely to be released soon. |
| **OpenClaw gateway status UI** ([#2123](https://github.com/netease-youdao/LobsterAI/pull/2123)) | Already merged — improves observability for power users. |

**Emerging patterns from this data:**
- The project is investing in **desktop client reliability** (auth flow, data migration, Windows focus), suggesting strong Electron desktop adoption.
- **OpenClaw integration** (the AI/LLM gateway layer) is a major focus area with payload guardrails, status UI, and restart stability improvements.
- **Multi-provider model management** (dynamic fetching, better connection testing) indicates LobsterAI targets users who work across multiple LLM providers.

---

## 7. User Feedback Summary

From the semantics of the merged bug-fix PRs, we can reconstruct several real user pain points:

- **"I can't export my logs"** — Users on lower-spec machines experienced silent timeout failures when exporting large log archives (fixed in [#1515](https://github.com/netease-youdao/LobsterAI/pull/1515)).
- **"My Copilot auth keeps disappearing"** — Closing the Settings panel during OAuth polling caused tokens to vanish silently (fixed in [#1517](https://github.com/netease-youdao/LobsterAI/pull/1517)).
- **"My scheduled task runs but never sends a notification"** — The form allowed submitting with no target conversation, resulting in silent failures (fixed in [#1510](https://github.com/netease-youdao/LobsterAI/pull/1510)).
- **"I had to manually add every new model from my provider"** — Model lists were hardcoded; new releases required manual entry (fixed in [#1522](https://github.com/netease-youdao/LobsterAI/pull/1522)).
- **"Connection test just says '0'"** — No diagnostic detail on connection failures, making troubleshooting impossible (fixed in [#1524](https://github.com/netease-youdao/LobsterAI/pull/1524)).
- **"My QQ Bot group whitelist is impossible to configure"** — The UI was entirely missing for one of the three IM bot platforms (fixed in [#1514](https://github.com/netease-youdao/LobsterAI/pull/1514)).

Satisfaction trajectory: All these fixes are retroactive (2-month-old PRs), but their resolution today should significantly reduce accumulated friction. The proactive data-migration and auth-flow work suggests the team is also getting ahead of larger structural issues.

---

## 8. Backlog Watch

| Item | Age | Risk / Notes |
|---|---|---|
| **[dependabot] Electron 40→42 bump (#1277)** | 68 days open | Major framework version jump with potential security fixes. No recent activity. Needs maintainer attention or explicit closure. |
| **One remaining open PR (1/19)** | — | Of the 19 PRs updated in the last 24h, only **#1277** remains open. The rest were all merged or closed in a productive burst. |

No new issues were opened today, and the existing issue queue is empty (0 total). The project appears to be in a **clean backlog state** from an issue perspective, though the 2-month stale-PR gap suggests contributor PRs may wait a long time for review and should flagged for maintainer triage sooner.

---

*Generated by OWL · Data snapshot: 2026-06-09 (reflecting GitHub activity through 2026-06-08) · Source: [netease-youdao/LobsterAI](https://github.com/netease-youdao/LobsterAI)*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

Here is the TinyClaw project digest for 2026-06-09.

---

# TinyClaw Project Digest — 2026-06-09

## 1. Today's Overview

TinyClaw saw minimal activity on 2026-06-09, with no new issues reported and no new releases published. A single pull request was opened, focused on improving the installation experience for users. The project appears to be in a stable, low-activity phase, with no urgent bugs or breaking changes to report. Community engagement is quiet, with no new discussions or reactions recorded today. Overall, the project health remains steady with no signs of regression or critical maintenance needs.

## 2. Releases

No new releases were published on or around 2026-06-09. The latest release information is unavailable in the current dataset.

## 3. Project Progress

No PRs were merged or closed today. The only active PR is:

- **PR #280** — `fix(install): add postinstall script to auto-rebuild better-sqlite3` ([link](https://github.com/TinyAGI/tinyagi/pull/280))
  - **Status:** Open, not yet merged
  - **Author:** dsy122
  - **Summary:** Adds a `postinstall` script to automatically rebuild the `better-sqlite3` native addon after `npm install`, eliminating the need for users to manually run `npm rebuild better-sqlite3`. This addresses a common pain point where fresh installs fail because the prebuilt binary is incompatible with the user's Node.js runtime.

## 4. Community Hot Topics

There are no active discussions, highly commented issues, or PRs with significant community engagement (reactions or comments) to report for this period. The single open PR (#280) has no comments or reactions at this time.

## 5. Bugs & Stability

No new bugs, crashes, or regressions were reported in the last 24 hours. The open PR #280 addresses a known usability issue (native addon compilation failure on fresh installs), which is a **medium-severity** developer experience bug affecting first-time users. A fix is in progress but not yet merged.

## 6. Feature Requests & Roadmap Signals

No new feature requests were submitted today. The current PR #280 signals ongoing attention to **developer experience and onboarding friction**, suggesting the maintainers (or contributors) are prioritizing installation reliability. This may indicate a focus on stability and ease-of-use improvements in the near-term roadmap rather than new feature development.

## 7. User Feedback Summary

No new user feedback was recorded today. The open PR #280 implicitly reflects a real user pain point: **first-time users encountering build errors with `better-sqlite3`** due to native addon incompatibility. This is a recurring issue in the Node.js ecosystem and suggests that TinyClaw's user base includes developers who expect a seamless `npm install` experience without manual intervention.

## 8. Backlog Watch

- **PR #280** — `fix(install): add postinstall script to auto-rebuild better-sqlite3` ([link](https://github.com/TinyAGI/tinyagi/pull/280))
  - **Created:** 2026-06-08 | **Last Updated:** 2026-06-08
  - **Status:** Open, no comments, no reactions, no maintainer response yet
  - **Watch Note:** This PR addresses a common onboarding blocker. While it has only been open for ~1 day, it is a low-risk, high-impact fix that could benefit from prompt review and merge to improve the first-time user experience.

---

*Data source: [github.com/TinyAGI/tinyagi](https://github.com/TinyAGI/tinyagi) | Digest generated by OWL for 2026-06-09*

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-06-09

---

## 1. Today's Overview

CoPaw remains in a highly active development phase with **49 issues** and **45 PRs** updated in the last 24 hours, signaling a large and engaged contributor base and a maintainership team that is closing work at pace (23 issues and 23 PRs closed). No new releases shipped today, but a cluster of bug-fix PRs merged/closed suggests the team is stabilizing the v1.1.x line before a broader push—most notably the **AgentScope 2.0 migration** (#4727) remains an open breaking-change discussion with 6 comments and 2 👍 reactions, indicating it is the single most consequential architectural decision on the horizon. Several high-trust infrastructure PRs landed or advanced (MCP subprocess leak fix, keychain isolation, session-id dedup), pointing to a current quality-and-stability focus rather than feature expansion. The Windows desktop experience continues to draw disproportionate bug reports (shell flash, frontend jank, orphan processes), suggesting it remains the platform most in need of dedicated QA.

---

## 2. Releases

**None.** No new tagged releases in the last 24 hours. The most impactful merged PR of the day is **#5018** (`fix: propagate ModelInfo.max_input_length to AgentScope context_size for auto-compaction`), which bridges QwenPaw's model config into AgentScope 2.0's native compaction—likely a candidate for the next patch release.

---

## 3. Project Progress

### Merged / Closed PRs (notable)

| # | Title | Significance |
|---|-------|-------------|
| **#5018** | [fix: propagate ModelInfo.max_input_length to AgentScope context_size](https://github.com/agentscope-ai/CoPaw/pull/5018) | Critical correctness fix—ensures auto-compaction respects actual model context windows instead of silently falling back to 128K default |
| **#4949** | [feat(acp): advertise commands, surface errors, tool params, agent/model meta, file links](https://github.com/agentscope-ai/CoPaw/pull/4949) | Merged. Enriches ACP server metadata for TUI clients; additive, no breakage |
| **#4286** | [fix(console): localize session and cron job controls](https://github.com/agentscope-ai/CoPaw/pull/4286) | Merged. Completes i18n for Sessions and Cron Jobs pages, including Indonesian |
| **#2771** | [fix(install): restrict mlx-lm to Apple Silicon macOS](https://github.com/agentscope-ai/CoPaw/pull/2771) | Merged after ~2 months. Prevents Intel Macs from pulling MLX dependencies |

### Open PRs worth watching

| # | Title | Status |
|---|-------|--------|
| **#5028** | [fix(security): isolate keychain master key per install](https://github.com/agentscope-ai/CoPaw/pull/5028) | **New today** — security fix; every CoPaw install on the same machine was sharing a single keychain entry |
| **#5023** | [feat(plugins): add Plugin Market tab with AgentScope Platform integration](https://github.com/agentscope-ai/CoPaw/pull/5023) | **New today** — first-party plugin marketplace UI |
| **#5014** | [fix(mcp): prevent subprocess accumulation across restarts](https://github.com/agentscope-ai/CoPaw/pull/5014) | Fixes #4834; addresses orphaned MCP processes after Docker/supervisor restarts |
| **#4622** | [feat: add DataPaw plugin with 12 BI skills](https://github.com/agentscope-ai/CoPaw/pull/4622) | Under review; would be the first bundled data-analysis plugin |
| **#4997** | [WIP: Plugin extension infrastructure](https://github.com/agentscope-ai/CoPaw/pull/4997) | Unified frontend extension point registration (menus, routes, slots) for plugins; explicitly not ready to merge |

---

## 4. Community Hot Topics

### By comment volume

1. **#4477** — [WeChat iLink bot cron push failures, no retry on expired context_token](https://github.com/agentscope-ai/CoPaw/issues/4477) (**15 comments**, closed) — The most-discussed issue in the window. Root cause: `context_token` expiry (overnight inactivity) returns `ret=-2` with no retry or re-auth logic, silently dropping scheduled messages. Also: image/file send failures produce zero logs. **Underlying need:** Enterprise-channel reliability for cron/standup-style workflows. This is a trust issue for production WeChat iLink deployments.

2. **#5017** — [Feature: study Hermes Agent's "learning loop"](https://github.com/agentscope-ai/CoPaw/issues/5017) (**7 comments**, 1 👍, open) — User suggests CoPaw adopt self-evolving skill creation from Hermes (46k+ stars). Praises CoPaw's localization and out-of-box UX as superior domestically. **Underlying need:** Competitive benchmarking pressure; users want CoPaw to absorb best-in-class agent autonomy patterns without losing its ease-of-use advantage.

3. **#4408** — [Consolidate default workspace files into a `.qwenpaw` directory](https://github.com/agentscope-ai/CoPaw/issues/4408) (**7 comments**, closed) — Modeled after opencode's `.opencode` folder. Users want workspace cleanliness and easier gitignore management. **Underlying need:** Developer ergonomics; CoPaw's workspace currently pollutes the project root with config/session files.

4. **#4727** — [Breaking Change: migrate backend from AgentScope 1.x to 2.0](https://github.com/agentscope-ai/CoPaw/issues/4727) (**6 comments**, 2 👍, open) — The architectural elephant in the room. AgentScope 2.0 is officially released; migration is planned but scoped as a breaking change. PR #5018 (merged today) is a preparatory step—bridging `ModelInfo` into AgentScope 2.0's `context_size`. **Underlying need:** Keeping the backend dependency current without fragmenting the plugin ecosystem.

5. **#4300** — [Agent response duplication bug](https://github.com/agentscope-ai/CoPaw/issues/4300) (**6 comments**, closed) — Content and thinking steps both returned twice. Reproducible across models. **Underlying need:** Core response pipeline correctness; a duplicated response undermines trust in every interaction.

---

## 5. Bugs & Stability

Ranked by severity:

### 🔴 Critical / Data-loss / Crash

| # | Bug | Platform | Fix PR |
|---|-----|----------|--------|
| **#5019** | Memory compaction crashes with `AttributeError: 'str' object has no attribute 'get'` | All | No fix PR yet — **filed and closed same day**, likely needs follow-up |
| **#4970** | Corrupt `loop_config.json` / `prd.json` crashes entire agent session, unreachable via any channel | All | No fix PR — **needs resilience** (try/catch + graceful degradation) |
| **#4895** | Infinite image compression loop causing hallucination spiral | All | No fix PR — user uploaded image triggers compress → re-inject → compress cycle |

### 🟠 High / Feature-breaking

| # | Bug | Platform | Fix PR |
|---|-----|----------|--------|
| **#4834** | MCP server subprocess accumulation across restarts (9+ orphan processes observed) | Linux/Docker | **#5014** (open, filed today) |
| **#4877** | Custom channel stops listening after every config save (stop-before-start race) | All | Fix identified in `ChannelManager.replace_channel` — no linked PR |
| **#4926** | OneBot WebSocket port not released on zero-downtime reload, kills QQ channel | Linux | No fix PR — root cause identified (aiohttp server not closed) |
| **#4587** | Desktop shutdown leaves orphaned backend processes | macOS | No fix PR — reproducible with `QwenPaw.app` |
| **#5003** | Ali Coding Plan (qwen3.7-plus) causes infinite hang | API | No fix PR |

### 🟡 Medium / UX-degrading

| # | Bug | Platform | Fix PR |
|---|-----|----------|--------|
| **#4123** | `execute_shell_command` flashes console window on every call | Windows | Closed, no fix PR listed |
| **#5015** | v1.1.11 Windows Desktop frontend sluggish, CPU spikes during task execution | Windows | No fix PR |
| **#5016** | Web Console multi-agent chat unreliable for custom/imported agents | All | No fix PR |
| **#4993** | Image preview jitter on drag after zoom | macOS | No fix PR |
| **#5013** | KimiCode API thinking/reasoning content not displayed | All | No fix PR |
| **#4300** | Agent response duplication | All | Closed, fix presumably shipped |

---

## 6. Feature Requests & Roadmap Signals

| # | Request | Likelihood of near-term inclusion | Rationale |
|---|---------|-----------------------------------|-----------|
| **#4992** | Independent visual model fallback (`visual_model` field) | **High** | Aligns with composable model architecture trend; PR #5018 already bridges model metadata paths. Straightforward config addition. |
| **#4994** | Self-evolving hierarchical memory system | **Medium-High** | Directly competitive pressure from Hermes (#5017). CoPaw's current memory is acknowledged as weak. Requires architectural work, unlikely in a patch release. |
| **#4443** | Lightweight `/goal` mode for standing objectives | **Medium** | PR is open, author has been iterating since May. Focused scope, non-breaking. |
| **#4997** | Plugin extension infrastructure (menus, routes, slots) | **Medium** | Tagged WIP/do-not-merge, but tightly couples to Plugin Market PR #5023 (filed today). Likely ships together post-stabilization. |
| **#4902** | Built-in PRD CRUD tool with frontend renderer | **Medium** | PR open, replaces plugin-based version. Fits the "built-in productivity tool" trajectory. |
| **#4345** | Collapsible code blocks in Console | **Low-Medium** | Polish feature, open since May, may land in a minor release. |

---

## 7. User Feedback Summary

**Pain points (dissatisfaction):**

- **Windows is the weakest link.** Three distinct Windows-specific bugs appeared in 24 hours (#4123 shell flash, #5015 frontend jank, #5015 CPU spikes), and a fourth (#5019 memory compaction crash) is cross-platform but disproportionately affects long-running Windows desktop sessions. The Windows user experience feels like it receives outsized complaints relative to its userbase—likely a signal for dedicated Windows CI/QA investment.
- **Enterprise channel reliability (WeChat iLink, WeCom, DingTalk)** is a trust bottleneck. Three channel-specific bugs (#4477, #4585, #4990) involve silent failures with no retry, no logging, or no error surfacing. Enterprises deploying CoPaw as a production bot cannot tolerate silent message drops.
- **Multi-agent support is fragile.** Two issues (#5016, #4873) report multi-agent instability—custom agents not appearing in Web Console and subagent parallel execution causing infinite polling that can't be interrupted from Feishu.

**Positive signals:**

- Multiple users explicitly praise CoPaw's localization and out-of-box experience compared to Hermes Agent (#5017) and OpenClaw. The "开箱即用" (works out of the box) sentiment recurs.
- PR #5023's Plugin Market represents a strategic move to build an ecosystem, analogous to VS Code's extension marketplace—users have been requesting plugin discoverability.

---

## 8. Backlog Watch

These items have been open for weeks/months, are high-impact, and lack recent maintainer response or linked fix PRs:

| # | Item | Age | Risk |
|---|------|-----|------|
| **#4727** | [AgentScope 2.0 migration (breaking change)](https://github.com/agentscope-ai/CoPaw/issues/4727) | 13 days | Staying on AgentScope 1.x indefinitely risks technical debt compounding; #5018 is a stepping stone but no migration timeline published |
| **#4895** | [Infinite image compression loop](https://github.com/agentscope-ai/CoPaw/issues/4895) | 7 days | Causes hallucination loops that could be abused for token-exhaustion attacks; no triage comment |
| **#4970** | [Corrupt JSON crashes entire session](https://github.com/agentscope-ai/CoPaw/issues/4970) | 4 days | Single point of failure for session resilience; should be a try/catch one-liner fix |
| **#4838** | [Suppress final text response after tool calls](https://github.com/agentscope-ai/CoPaw/issues/4838) | 9 days | Silent tool execution is a common request across agent frameworks; low implementation effort, high UX impact |
| **#4669** | [Tauri auto-updater for Desktop](https://github.com/agentscope-ai/CoPaw/pull/4669) | 14 days | Desktop users expect auto-update; open since May 25 with no review comments |
| **#4585** | [Self-discovered plugin tools not auto-detected in WeCom](https://github.com/agentscope-ai/CoPaw/issues/4585) | 19 days, closed | Closed but no linked fix PR visible—should confirm resolution |
| **#4873** | [Dual subagent causes uninterruptible Feishu polling](https://github.com/agentscope-ai/CoPaw/issues/4873) | 8 days | Safety concern: user cannot stop runaway polling from their channel client |

---

*CoPaw is maintaining strong velocity with quality-first PRs landing today (security, compaction correctness, MCP stability). The priority gap is enterprise-channel reliability and Windows desktop stability—both multiplicative for user trust. The AgentScope 2.0 migration decision (#4727) is the highest-leverage architectural call pending.*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-06-09

---

## 1. Today's Overview

ZeroClaw remains in a highly active development phase with **50 issues and 50 PRs updated in the last 24 hours**, signaling a large and engaged contributor base working across the full stack. No new releases were published today, but the project is clearly in a pre-release sprint: 11 PRs were merged/closed while 39 remain open, and 49 of 50 updated issues are still open. The dominant themes are **security hardening** (pluggable security providers, OIDC auth, shell command gating), **MCP tooling maturity** (filter bugs, resource/prompt support, server config UX), and **multi-channel reliability** (Matrix, Telegram, WhatsApp). The volume of high-risk bugs and RFCs targeting v0.9.0 suggests the team is building toward a significant milestone release.

---

## 2. Releases

**None.** No new versions were published on 2026-06-09. The project appears to be accumulating changes for an upcoming release (multiple RFCs and tracking issues target v0.9.0).

---

## 3. Project Progress

### Merged / Closed PRs (11 total)

| # | PR | What landed |
|---|-----|-------------|
| [#7403](https://github.com/zeroclaw-labs/zeroclaw/pull/7403) | `fix(runtime): guard trim_history against orphan-cascade emptying all messages` | Prevents conversation history from being completely drained by the orphan-removal cascade — a safety guard in `agent.rs`. |
| [#6701](https://github.com/zeroclaw-labs/zeroclaw/pull/6701) | `fix(telegram): preserve markdown fences when splitting messages` | Fixes Telegram message splitting so code blocks aren't broken across chunks. Closes [#6225](https://github.com/zeroclaw-labs/zeroclaw/issues/6225). |

The remaining 9 closed PRs were closed without merging (likely superseded or abandoned).

### Notable Open PRs Advancing

- **[#7129](https://github.com/zeroclaw-labs/zeroclaw/pull/7129)** — Fixes the critical S0 `file_write` silent-failure bug ([#4627](https://github.com/zeroclaw-labs/zeroclaw/issues/4627)) by guarding all workspace surfaces against ephemeral-workspace writes, not just `file_write`.
- **[#7337](https://github.com/zeroclaw-labs/zeroclaw/pull/7337)** — Brings plugin tools to parity with native/MCP tools via namespacing (`plugin__tool`) and `RateLimitedTool` wrapping.
- **[#7234](https://github.com/zeroclaw-labs/zeroclaw/pull/7234)** — Third and final slice of [#6850](https://github.com/zeroclaw-labs/zeroclaw/issues/6850): migrates gateway WebSocket and channel orchestrator consolidation to the `MemoryStrategy` boundary.
- **[#7267](https://github.com/zeroclaw-labs/zeroclaw/pull/7267)** — Adds per-field editing for `[[mcp.servers]]` in the web dashboard and TUI via `#[natural_key]`.
- **[#7361](https://github.com/zeroclaw-labs/zeroclaw/pull/7361)** — Implements RFC-6969 per-turn output routing via `send_via` and fixes voice delivery double-send bugs across Telegram, Slack, Discord, Matrix, and others.
- **[#7060](https://github.com/zeroclaw-labs/zeroclaw/pull/7060)** — Defines WIT interface files for Tool, Channel, and Memory plugins (WASI Component Model), a foundational step for the plugin ecosystem.

---

## 4. Community Hot Topics

### Most Discussed Issues (by comment count)

1. **[#6699](https://github.com/zeroclaw-labs/zeroclaw/issues/6699)** — *`tool_filter_groups` is a no-op for real MCP tools* (7 comments, P1, accepted)
   Two bugs: MCP-tool prefix mismatch in the filter gate and no integration with `deferred_loading`. This is a **documentation-vs-reality gap** — the feature parses correctly but has zero effect at runtime. High impact for anyone relying on tool filtering for security.

2. **[#6909](https://github.com/zeroclaw-labs/zeroclaw/issues/6909)** — *RFC: Computer-use support for desktop screen interaction* (6 comments, P2, accepted)
   Requests screenshot capture and mouse/keyboard event injection, matching OpenAI Codex and openclaw/hermes capabilities. Signals demand for **GUI-automation agents**.

3. **[#7184](https://github.com/zeroclaw-labs/zeroclaw/issues/7184)** — *RFC: Move translated .ftl and .po files into a git submodule* (5 comments, P3)
   Build/i18n infrastructure improvement to isolate translation churn from main repo history.

4. **[#4832](https://github.com/zeroclaw-labs/zeroclaw/issues/4832)** — *Add config option to disable LeakDetector high-entropy token redaction* (4 comments, P2, accepted)
   False positives on MD5 filenames, WeChat media files, etc. Users need **tunable security heuristics**.

5. **[#7142](https://github.com/zeroclaw-labs/zeroclaw/issues/7142)** — *Expose security enforcement as a pluggable provider interface* (4 comments, P2, accepted, tracking issue for v0.9.0)
   Umbrella for making security enforcement, reporting, and incident-response swappable via traits.

6. **[#7155](https://github.com/zeroclaw-labs/zeroclaw/issues/7155)** — *RFC: Per-execution confirmation tier for high-risk shell commands* (4 comments, P1, accepted)
   Adds an "ask" tier between allow/deny, with Claude Code-style pattern matching. Addresses the **all-or-nothing problem** in shell command authorization.

7. **[#7141](https://github.com/zeroclaw-labs/zeroclaw/issues/7141)** — *OIDC Authentication Provider support* (4 comments, P1, accepted, tracking issue for v0.9.0)
   Pluggable auth for enterprise SSO integration.

### Underlying Needs Analysis

The community is converging on three macro-themes:
- **Security configurability**: Users want granular control over security policies (shell gating, leak detection, auth providers) rather than binary allow/block.
- **MCP ecosystem maturity**: Tool filtering, resource/prompt support, and server configuration UX are the top friction points for MCP adoption.
- **Multi-channel parity**: Bugs in Telegram, WhatsApp, Matrix, and Slack are being actively triaged, with users expecting consistent behavior across all channels.

---

## 5. Bugs & Stability

### Critical / High-Severity Bugs (S0–S1)

| Severity | Issue | Description | Fix PR? |
|----------|-------|-------------|---------|
| **S0** | [#4627](https://github.com/zeroclaw-labs/zeroclaw/issues/4627) | `file_write` silently fails — files invisible on host filesystem | ✅ [#7129](https://github.com/zeroclaw-labs/zeroclaw/pull/7129) open |
| **S0** | [#5542](https://github.com/zeroclaw-labs/zeroclaw/issues/5542) | Consecutive OOM kills in WSL2 | ❌ No PR |
| **S1** | [#6434](https://github.com/zeroclaw-labs/zeroclaw/issues/6434) | Shell tool calls refused at `autonomy.level = "full"` — no `tool_dispatch` reaches runtime | ❌ No PR |
| **S1** | [#6361](https://github.com/zeroclaw-labs/zeroclaw/issues/6361) | `context_compression` drops `assistant(tool_calls)` and `tool(result)` for OpenAI-compatible providers (MiniMax), causing tool loops | ❌ No PR |
| **S1** | [#4879](https://github.com/zeroclaw-labs/zeroclaw/issues/4879) | Gemini CLI OAuth not working (2 👍) | ❌ No PR |
| **S1** | [#6302](https://github.com/zeroclaw-labs/zeroclaw/issues/6302) | Gemini 400 — assistant `tool_call` emitted as first non-system turn (history serializer invariant violation) | ❌ No PR |
| **S1** | [#6037](https://github.com/zeroclaw-labs/zeroclaw/issues/6037) | Cron jobs launch repeatedly while still running (20x burst observed) | ❌ No PR |
| **S1** | [#6224](https://github.com/zeroclaw-labs/zeroclaw/issues/6224) | Cron job dispatch to WhatsApp Web fails — missing delivery channel | ❌ No PR (user found manual fix) |
| **S1** | [#6877](https://github.com/zeroclaw-labs/zeroclaw/issues/6877) | `[runtime_profiles.*].max_tool_iterations` has no effect — docs/config mismatch | ❌ No PR |

### Medium-Severity Bugs (S2)

| Issue | Description | Fix PR? |
|-------|-------------|---------|
| [#6350](https://github.com/zeroclaw-labs/zeroclaw/issues/6350) | WhatsApp Web `allowed-numbers` bypassed for LID-based contacts (silent drops) | ❌ No PR |
| [#5795](https://github.com/zeroclaw-labs/zeroclaw/issues/5795) | XML `tool_result` tags leak into channel responses | ✅ [#5796](https://github.com/zeroclaw-labs/zeroclaw/pull/5796) open |
| [#6360](https://github.com/zeroclaw-labs/zeroclaw/issues/6360) | Prompt caching doesn't work with Telegram | ❌ No PR |
| [#6548](https://github.com/zeroclaw-labs/zeroclaw/issues/6548) | Channel runtime command replies bypass Fluent localization | ❌ No PR |
| [#6683](https://github.com/zeroclaw-labs/zeroclaw/issues/6683) | `skill_manage patch` ignores cooldown — unbounded patches possible | ❌ No PR |
| [#6645](https://github.com/zeroclaw-labs/zeroclaw/issues/6645) | `SkillImprover` + `skill_manage` only handle `SKILL.toml`, not `manifest.toml` | ❌ No PR |

### Stability Assessment

The project has **9 open S0/S1 bugs** without fix PRs, indicating significant stability risk. The most concerning are the **cron job double-execution bug** (#6037) which can cause runaway resource consumption, the **shell tool dispatch failure** (#6434) which blocks core functionality even with permissive config, and the **Gemini provider issues** (#6302, #4879) which affect a major LLM integration. The `file_write` silent failure (#4627) has a fix PR in progress (#7129) — this should be prioritized for merge.

---

## 6. Feature Requests & Roadmap Signals

### Likely Targeting v0.9.0 (explicitly tracked)

| Issue | Description | Signal Strength |
|-------|-------------|-----------------|
| [#7142](https://github.com/zeroclaw-labs/zeroclaw/issues/7142) | Pluggable security provider interface | 🟢 Tracking issue, accepted |
| [#7141](https://github.com/zeroclaw-labs/zeroclaw/issues/7141) | OIDC Authentication Provider | 🟢 Tracking issue, accepted |
| [#6850](https://github.com/zeroclaw-labs/zeroclaw/issues/6850) | Decouple memory lifecycle from storage backends | 🟢 3 PRs in progress (#7234 active) |

### Strong Community Demand (likely next release)

| Issue | Description | Signal |
|-------|-------------|--------|
| [#6909](https://github.com/zeroclaw-labs/zeroclaw/issues/6909) | Computer-use (screenshot + input control) | 6 comments, accepted RFC |
| [#7155](https://github.com/zeroclaw-labs/zeroclaw/issues/7155) | Shell command confirmation tier (allow/ask/deny) | 4 comments, P1, accepted |
| [#4467](https://github.com/zeroclaw-labs/zeroclaw/issues/4467) | MCP resource and prompt support | 4 👍, help wanted, in-progress |
| [#3767](https://github.com/zeroclaw-labs/zeroclaw/issues/3767) | Cross-channel TOTP gate for critical tool execution | P1, in-progress |
| [#5287](https://github.com/zeroclaw-labs/zeroclaw/issues/5287) | Local-first mode for small models | 2 👍, in-progress |

### Prediction

The v0.9.0 release will likely focus on **security architecture** (pluggable providers, OIDC, shell gating) and **memory subsystem refactoring** (`MemoryStrategy` trait). Computer-use support and MCP resource/prompt support are strong candidates for v0.9.x or v1.0.

---

## 7. User Feedback Summary

### Pain Points

1. **Security is too rigid or too silent**: Users report that `LeakDetector` causes false positives on legitimate content (#4832), `tool_filter_groups` is documented but non-functional (#6699), and shell commands are blocked even with `autonomy.level = "full"` (#6434). The common thread: **security features need to be configurable and predictable**.

2. **Multi-channel inconsistency**: Bugs in Telegram (prompt caching #6360, markdown splitting #6225), WhatsApp (LID bypass #6350, cron dispatch #6224), Matrix (session isolation #7388), and Slack/Discord (voice delivery #7361) reveal that **channel implementations are at varying levels of maturity**.

3. **Provider compatibility gaps**: Gemini users face OAuth failures (#4879) and history serialization violations (#6302). MiniMax users hit context compression bugs (#6361). The **OpenAI-compatible provider adapter needs hardening**.

4. **Documentation vs. reality mismatches**: `max_tool_iterations` in `runtime_profiles` has no effect (#6877), `tool_filter_groups` doesn't work (#6699), and installation docs are incomplete (#5269). Users are **losing trust in the documented configuration surface**.

5. **Cron reliability**: The double-execution bug (#6037) is a serious operational concern — users scheduling daily tasks can get 20x bursts.

### Satisfaction Signals

- Active community contributions (50 PRs in 24h) indicate strong engagement.
- Multiple RFCs are being accepted and tracked, showing a healthy design process.
- Plugin ecosystem work (WIT interfaces, tool namespacing, sandbox limits) shows investment in extensibility.

---

## 8. Backlog Watch

### Long-Unanswered High-Priority Issues Needing Maintainer Attention

| Issue | Age | Severity | Why It Needs Attention |
|-------|-----|----------|------------------------|
| [#4627](https://github.com/zeroclaw-labs/zeroclaw/issues/4627) — `file_write` silent failure | 76 days | S0 | Fix PR (#7129) open for 6 days, needs review/merge |
| [#5542](https://github.com/zeroclaw-labs/zeroclaw/issues/4627) — Consecutive OOM in WSL2 | 61 days | S0 | No PR, no response — data loss / security risk |
| [#4879](https://github.com/zerocaw-labs/zeroclaw/issues/4879) — Gemini CLI OAuth broken | 73 days | S1 | 2 👍, no PR — blocks Gemini users entirely |
| [#6037](https://github.com/zeroclaw-labs/zeroclaw/issues/6037) — Cron double-execution | 47 days | S1 | No PR — can cause runaway resource usage |
| [#4467](https://github.com/zeroclaw-labs/zeroclaw/issues/4467) — MCP resource/prompt support | 77 days | P2 | 4 👍, help wanted — limits MCP ecosystem adoption |
| [#3767](https://github.com/zeroclaw-labs/zeroclaw/issues/3767) — Cross-channel TOTP gate | 84 days | P1 | Oldest P1 feature request, in-progress but no PR |
| [#6074](https://github.com/zeroclaw-labs/zeroclaw/issues/6074) — 153 commits lost in bulk revert | 46 days | P2 | Audit/recovery tracking issue — important for code integrity |
| [#5269](https://github.com/zeroclaw-labs/zeroclaw/issues/5269) — Installation docs improvement | 66 days | P2 | Onboarding friction for new users |

### Stale PRs Needing Review

| PR | Age | Description |
|----|-----|-------------|
| [#5796](https://github.com/zeroclaw-labs/zeroclaw/pull/5796) | 54 days | Strip XML `tool_result` blocks from channel responses |
| [#6973](https://github.com/zeroclaw-labs/zeroclaw/pull/6973) | 13 days | Fix WhatsApp LID JID handling for whatsapp-rust 0.6+ |
| [#7060](https://github.com/zeroclaw-labs/zeroclaw/pull/7060) | 8 days | WIT interface files for WASI plugins |

---

*Data source: github.com/zeroclaw-labs/zeroclaw — snapshot 2026-06-09. All links reference zeroclaw-labs/zeroclaw.*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/DenisZheng/agents-radar).*