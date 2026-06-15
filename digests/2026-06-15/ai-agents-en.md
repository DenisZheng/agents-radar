# OpenClaw Ecosystem Digest 2026-06-15

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-06-15 00:44 UTC

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

# OpenClaw Project Digest — 2026-06-15

---

## 1. Today's Overview

OpenClaw is operating at extreme volume today with **500 issues** and **500 PRs** updated in the last 24 hours, of which 441 issues and 456 PRs remain open. A new beta release, **v2026.6.8-beta.1**, shipped with richer Telegram and WhatsApp delivery. The project is in an active stabilization phase: the majority of top-traffic issues cluster around **message delivery reliability** (Telegram, WhatsApp, Discord), **session-state correctness**, and **authentication provider regressions**. The breadth of merge-risk labels (compatibility, session-state, message-delivery) across the top PRs indicates the codebase is in a sensitive transition — likely the database-first/SQLite runtime migration referenced by multiple issues. Maintainer bandwidth appears strained, with many high-comment issues carrying `clawsweeper:needs-maintainer-review` and `clawsweeper:needs-product-decision` flags.

---

## 2. Releases

### v2026.6.8-beta.1 — 2026.6.8 Highlights

- **Telegram channel delivery** is "richer and less brittle": supports structured rich text (tables, lists, expandable blockquotes), prompt-preserving CLI backend delivery, retired native draft migration, and safer rich-media boundaries.
- **WhatsApp channel delivery** received parallel improvements (details truncated in release notes, but listed alongside Telegram as a focus area).

**Migration/Breaking Notes:** The "retired native draft migration" for Telegram is noteworthy — operators using Telegram draft APIs should validate their configuration against the new rich-text path. No explicit breaking-change callout was published, but label `merge-risk: 🚨 compatibility` on multiple open PRs suggests the team is being cautious.

---

## 3. Project Progress

Today's closed/merged items (44 PRs, 59 issues closed) point to incremental fixes rather than major feature merges. Key themes among recently **closed issues**:

| Issue | Resolution Signal |
|---|---|
| **#80380** — Switch from `gemini-3.1-flash-lite-preview` to GA `gemini-3.1-flash-lite` | Closed; likely addressed by a model-config default update |
| **#81978** — Discord non-main session stuck in `processing,q=1` after `run:completed` | Closed; session-state lifecycle fix likely landed |
| **#90886** — Gateway hangs at startup when declared provider lacks credentials (regression v2026.4.8→v2026.4.26) | Closed; critical auth-provider regression resolved |
| **#50795** — Context token count always shows 0 after compaction | Closed; TUI usage-display fix |
| **#81465** — Dreaming narrative always falls back; DREAMS.md never created | Closed; memory-core dreaming plugin fix |
| **#81889** — WhatsApp phone-pairing-code login feature request | Closed (declined or superseded?) |

Notable **open PRs ready for maintainer review** (`status: 👀 ready for maintainer look`):

- **PR #73704** — Fix safeguard compaction to respect configured compaction model — targets a known pain point (#57901).
- **PR #81572** — Persist due cron job outcomes incrementally — addresses operators seeing completed cron jobs stuck as "running."
- **PR #93054** — Fix Control UI chat not clearing after hard `/reset` — small UX fix with video proof.
- **PR #81467** — Show every calendar day in Daily Token Usage chart (fixes gaps for days with zero usage).
- **PR #80928** — Suppress spurious fallback reply when a Telegram plugin command returns `suppressReply: true`.
- **PR #80788** — Fix Discord gzip response parsing (Node v26 compatibility).
- **PR #81108** — Discover disk compaction checkpoints when `sessions.json` is missing them.

---

## 4. Community Hot Topics

The most-discussed issues reveal the community's priorities:

### 🔥 Issue #80319 — QA tool-defaults suite conflates Codex-native tools with OpenClaw dynamic tool parity (17 comments)
**openclaw/openclaw#80319** — A deep architecture discussion about whether Codex-native workspace tools (`read`, `write`, `edit`, `apply_patch`) have parity with OpenClaw's dynamic tool dispatch. The reporter (platinum hermit rating) corrected their own initial overclaim, but the 17-comment thread indicates the team is actively rationalizing the testing methodology. This matters because it gates confidence in Codex runtime reliability.

### 🔥 Issue #80380 — Migrate from gemini-3.1-flash-lite-preview to GA (14 comments, closed)
**openclaw/openclaw#80380** — Google deprecated the preview model. The team closed this promptly, reflecting responsiveness to upstream provider changes.

### 🔥 Issue #79902 — Add companion-friendly SQLite transcript/session seams (13 comments)
**openclaw/openclaw#79902** — An umbrella request for advanced consumers (plugins, external tooling) to query canonical runtime state via SQLite without scraping opaque blobs. Sub-issues #79903, #79904, #79905 break this into lineage discovery, cursored read API, and typed projections. This is the **community asking for a stable, documented companion API surface**.

### 🔥 Issue #80520 — Telegram messages silently dropped, no `sendMessage` logged (11 comments)
**openclaw/openclaw#80520** — Active P1 bug where the gateway receives and processes Telegram messages but never calls the `sendMessage` API. This is a user-visibility-critical delivery failure with no resolution yet.

### 🔥 Issue #79077 — Telegram bot-to-bot and guest-bot support (8 comments, 8 👍)
**openclaw/openclaw#79077** — Requests support for Telegram's May-7 2026 platform release (guest bots, bot-to-bot communication). Highest reaction count among Telegram issues, suggesting unmet demand for advanced Telegram use cases.

**Underlying needs synthesis:** The community is pushing for (1) **reliable message delivery** across all channels, (2) **stable external APIs** for session/transcript inspection, and (3) **timely adoption of provider/platform changes** (Google model deprecation, Telegram platform features).

---

## 5. Bugs & Stability

Ranked by severity and user impact:

### 🔴 P1 — Active / No Fix Merged

| # | Severity | Issue | Channel/Area | Summary | Fix PR? |
|---|---|---|---|---|---|
| **#80520** | P1 | [Telegram] Messages silently dropped | telegram | Gateway processes messages but never calls `sendMessage`; user gets no reply | No linked PR |
| **#83419** | P1 | Group chat context injection breaks Anthropic API | agents | Consecutive `user`-role messages violate Anthropic's alternating-role requirement | No linked PR |
| **#81484** | P1 | Discord guild reply regression | discord | Malformed send payloads, repeated outbound loops in server channels | No linked PR |
| **#82662** | P1 (P2 label but impact-critical) | Isolated cron agentTurn setup timeout | cron | All fallback models exhaust before LLM is invoked; `memory-core` plugin affected | No linked PR |
| **#83366** | P1 | Gateway event-loop starvation under load | gateway | Discord/session timeouts under mixed cron + tool + channel load | No linked PR |
| **#81567** | P1 | GPT-4o sessions exit after single response | agents | GPT-4o doesn't continue tool-use loop (works with Claude) | No linked PR |
| **#82070** | P1 | CLI cold-start ~14s regression (v2026.5.7→5.12) | cli | Linux CLI commands; gateway itself is healthy | No linked PR |

### 🟡 P2 — Active / Fix PRs Existing

| # | Issue | Fix PR | Status |
|---|---|---|---|
| **#80040** | Cascading OAuth→empty reply→duplicate tools→context loss | — | Needs product decision |
| **#82002** | Telegram group replies lose reply context | #82662 area | Linked PR open |
| **#81917** | Dashboard logs bare tokenized URL; hangs on Linux/KDE | — | Needs product decision |
| **#81934** | Multiple failures after v2026.5.12 on macOS (Gmail, Dropbox, PDF) | — | Needs info |
| **#80607** | Non-default multi-agent 10–17s latency via `embedded_run` | — | Needs product decision |
| **#79752** | Discord HTTP gzip decompression broken on Node v26/macOS | **PR #80788** | ✅ Ready for maintainer review |
| **#78805** | Event loop blocking/freezing from synchronous I/O | — | Stale, needs maintainer review |

### 🔴 Critical Patterns

- **Telegram delivery** is the single most fragile channel: silent drops (#80520), reply context loss (#82002), wrong chat_id (#79308), and management command routing (#81592 PR) all indicate systemic issues.
- **Auth-provider regressions** keep recurring: gateway hang on missing credentials (#90886, now closed), xAI OAuth redirect_uri mismatch (#83425), custom provider baseUrl conflicts (#82020). The auth surface needs hardening.
- **v2026.5.12** is a clear regression anchor: CLI slowdown (#82070), multiple macOS failures (#81934), cron timeouts (#82662), and context injection breakage (#83366) all cluster around this release.

---

## 6. Feature Requests & Roadmap Signals

### Likely Candidates for Next Release (v2026.6.9 or v2026.7.x)

1. **WhatsApp phone-pairing-code login** (Issue #81889) — Feature request was *closed*, which may mean it was implemented or explicitly declined. Either way, WhatsApp auth UX is on the team's radar.

2. **Skill author-defined setup hook** (Issue #80213, 4 👍) — `setup.script` in `SKILL.md` frontmatter for post-install hooks. 7 comments, linked PR open. Addresses a real gap between `brew/node/go/uv/download` install kinds and skills that need custom post-install logic.

3. **Session lineage & companion API** (Issue #79902 + sub-issues #79903, #79904, #79905) — A family of requests for stable, typed, cursored SQLite transcript access. This is the **most architecturally significant** pending feature set, enabling third-party consumers to build on canonical state.

4. **Telegram bot-to-bot / guest-bot support** (Issue #79077, 8 👍) — Tracks a Telegram platform release from May 2026. The 8 upvotes and "off-meta tidepool" rating suggest genuine community demand.

5. **Pre-routing inbound hook** (Issue #81061, 3 👍) — `before_route_inbound_message` hook for channel bridging/proxying. Fills an architectural gap where all existing hooks fire *after* routing.

6. **Plugin SDK surface for skill workflows** (Issue #81913) — Stable public SDK for plugins to inspect installed skills, parse `SKILL.md`, and sanitize env overrides. Linked PR open.

7. **i18n for slash commands and Control UI** (Issues #79458, #79034) — Chinese-speaking users need localized metadata. Both have linked PRs. Lower priority but easy wins.

---

## 7. User Feedback Summary

### Pain Points

- **"Messages just disappear."** — Telegram users are frustrated by silent delivery failures with no logging or error feedback (#80520, #82002, #79308). The absence of `sendMessage` logs makes self-diagnosis impossible.
- **"Every upgrade breaks something."** — Users upgrading to v2026.5.12 experienced CLI slowdowns, Discord reply regressions, macOS multi-tool failures, and event-loop starvation. The regression density around one release is a trust erosion signal.
- **"GPT-4o doesn't work the same as Claude."** — Users configuring OpenAI models expect parity with Claude's iterative tool-use loop (#81567). The single-response exit is a model compatibility gap.
- **"I can't build on top of OpenClaw."** — Advanced users and plugin authors want stable, documented APIs for session state, transcripts, and skill metadata (#79902, #81913) rather than scraping internal blobs.

### Satisfaction Signals

- The team **promptly closed** the Gemini model deprecation issue (#80380) and the gateway credential regression (#90886), showing responsiveness to clear, well-scoped problems.
- Rich Telegram delivery improvements in v2026.6.8-beta.1 signal investment in the most-used channel.
- Companion-friendly SQLite seams requests are being broken into sub-issues with active discussion, suggesting genuine engagement with the advanced-user community.

---

## 8. Backlog Watch

These important items have been open for extended periods without resolution or clear maintainer traction:

| Issue | Age | Why It Matters | Labels |
|---|---|---|---|
| **#22060** — Indirect prompt injection via URL link preview metadata | 115 days | Security issue; prompt injection via Telegram link previews (x.com/Twitter) without user awareness | `security`, stale, 🧂 unranked |
| **#44395** — Heading-aware chunking + entity extraction for memory search | 94 days | Memory search quality depends on semantic chunking; fixed-size chunks lose structure | `source-repro`, needs-product-decision |
| **#56781** — Fallback model chain for compaction and LCM summaryModel | 78 days | Single model for compaction is a failure point; rate-limits cause unbounded session growth | stale, needs-product-decision |
| **#78805** — Event loop blocking from synchronous I/O (`execSync`, `readFileSync`) | 39 days (P1, stale?) | Gateway freezes up to 4 seconds, breaking all connected channels | stale, needs-maintainer-review |
| **#80040** — Cascading failure: OAuth invalidation → empty placeholder → duplicate tools → context loss | 36 days (P1/P2) | Three distinct failure modes compounding; resolution path overlap suggests a single fix could address all | stale, needs-product-decision |
| **#80319** — QA tool-defaults conflation of Codex-native tools | 36 days (P2) | Correctly-scoped testing is prerequisite for trusting Codex runtime; 17 comments show active but unresolved debate | needs-maintainer-review, needs-product-decision |
| **#80520** — Telegram messages silently dropped | 35 days (P1, active) | Most critical active delivery bug; no fix PR despite 11 comments | needs-live-repro |
| **#81917** — Dashboard logs bare URL despite token auto-auth | 32 days (P2) | Security concern: tokens logged to console/stdout | needs-product-decision, stale |
| **#82662** — Isolated cron agentTurn setup timeout | 30 days (P2, P1 impact) | Cron-based memory operations fail silently; affects `memory-core` plugin users | needs-live-repro |

**Recommendation:** Issues #80520 (P1, no fix PR, active user pain), #78805 (P1 performance, stale-flagged despite severity), and #80040 (cascading P1 failures, stale) deserve immediate maintainer attention regardless of stale-bot flags. The security issue #22060 at 115 days old warrants a disposition decision — even if declined, it should not linger.

---

*Data source: github.com/openclaw/openclaw — snapshot 2026-06-15. Analysis generated by OWL.*

---

## Cross-Ecosystem Comparison

# Cross-Project Ecosystem Comparison Report — 2026-06-15

*Generated by OWL, ZOO Company*

---

## 1. Ecosystem Overview

The personal AI agent open-source landscape in mid-2026 is characterized by **rapid fragmentation and specialization** around a shared architectural core: gateway-based message routing, multi-provider LLM dispatch, session persistence, and channel abstraction layers. OpenClaw remains the de facto reference implementation with the largest community surface, but a healthy second tier — NanoBot, Hermes Agent, IronClaw, and ZeroClaw — is actively competing on UX polish, security posture, and extensibility. Smaller projects (PicoClaw, NanoClaw, CoPaw) are carving out niches in edge deployment, container-native hosting, and regional market needs (Chinese, Vietnamese). The ecosystem is converging on several shared requirements — reliable message delivery, stable companion APIs, multi-model provider routing, and security hardening of self-modification surfaces — while diverging on target deployment models (desktop vs. cloud vs. edge) and community governance maturity.

---

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Open Issues | Open PRs | Release (latest) | Health Score |
|---|---|---|---|---|---|---|
| **OpenClaw** | 500 updated | 500 updated | 441 | 456 | v2026.6.8-beta.1 | 🔴 High volume, strained maintainers |
| **NanoBot** | 4 updated | 32 updated | 1 | 16 | None today | 🟢 Responsive, high merge rate |
| **Hermes Agent** | 50 updated | 50 updated | ~40+ | ~40+ | None today | 🟡 Active, no release cadence |
| **PicoClaw** | 5 updated | 8 updated | 4 | 3 | v0.2.9-nightly | 🟢 Small, focused, stable |
| **NanoClaw** | 7 updated | 11 updated | 6 | 5 | None today | 🟠 Security disclosures demand triage |
| **IronClaw** | 31 updated | 43 updated | 24 | 26 | None today | 🟠 Security surge, high PR backlog |
| **LobsterAI** | 2 updated | 4 updated | 2 | 3 | None today | 🟡 Slow, maintenance mode |
| **CoPaw** | 8 updated | 7 updated | ~6 | 7 | v1.1.11.post2 | 🟡 Regressions need attention |
| **ZeroClaw** | 41 updated | 50 updated | 13 | 49 | None today | 🟠 Massive PR bottleneck |
| **Moltis** | 1 updated | 2 updated | 1 | 2 | None today | 🟡 Low activity, review stall |
| **NullClaw** | — | — | — | — | — | ⚪ No activity |
| **TinyClaw** | — | — | — | — | — | ⚪ No activity |
| **ZeptoClaw** | — | — | — | — | — | ⚪ No activity |

**Health Score Key:** 🟢 Healthy · 🟡 Watch · 🔴 Strained · ⚪ Inactive

---

## 3. OpenClaw's Position

### Advantages vs. Peers

| Dimension | OpenClaw | Closest Competitor | Gap |
|---|---|---|---|
| **Community scale** | 500 issues + 500 PRs/day | ZeroClaw (41+50) | 10x larger surface area |
| **Channel breadth** | Telegram, WhatsApp, Discord, CLI | NanoBot (Telegram, Matrix, Feishu) | OpenClaw covers more mainstream channels |
| **Release cadence** | Regular betas (v2026.6.8-beta.1) | PicoClaw (nightly) | More structured than most peers |
| **Plugin/skill ecosystem** | SKILL.md frontmatter, setup hooks in progress | ZeroClaw (slash commands from skills) | Comparable, both investing |
| **Documentation maturity** | Extensive but strained | Hermes (Desktop UX focus) | OpenClaw's docs strained by volume |

### Technical Approach Differences

- **OpenClaw** uses a **database-first/SQLite runtime migration** as its core architectural seam, with session state and transcripts moving toward typed, cursored SQLite access (Issue #79902). This is the most advanced companion-API surface in the ecosystem.
- **NanoBot** prioritizes **strict tool validation** and **config/agent-loop boundary separation** (PR #4344), taking a more defensive, type-safe approach than OpenClaw's dynamic dispatch.
- **Hermes Agent** invests heavily in **Desktop/TUI UX** (model picker, theme system, i18n with 15 languages) and **cross-platform cron** (Git Bash vs. WSL on Windows), targeting end-user experience over API surface.
- **IronClaw** differentiates with its **Reborn WebChat v2 SPA**, **approval/auth pipeline** as a first-class security boundary, and **runtime-context injection** (models see their own communication topology).
- **ZeroClaw** is the most **provider-agnostic**, batch-accepting every OpenAI-compatible endpoint, and investing in **multi-database session backends** (PostgreSQL, Oracle, Db2, MySQL) for enterprise fleet deployments.
- **PicoClaw** targets **edge/embedded** (Go-based, WebSocket remote agent mode, `RegisterChannelSettings` for out-of-tree channels).

### Community Size Comparison

OpenClaw's 441 open issues and 456 open PRs dwarf all competitors, indicating both the largest user base and the most strained maintainer-to-contribution ratio. ZeroClaw (43 PRs open) and Hermes Agent (~40 PRs open) are the next most active but operate at roughly 1/10th the scale. NanoBot's 16 open PRs with 16 merged in a single day demonstrates the highest maintainer responsiveness ratio in the ecosystem.

---

## 4. Shared Technical Focus Areas

The following requirements are emerging simultaneously across multiple projects, indicating ecosystem-wide convergence:

### 4.1 Message Delivery Reliability
**Projects:** OpenClaw, NanoBot, Hermes Agent, IronClaw, CoPaw

The single most cross-cutting pain point. Telegram is the most fragile channel across the board:
- OpenClaw: silent drops (#80520), reply context loss (#82002)
- NanoBot: fenced-code-block splitting across chunks (#4250, now fixed)
- Hermes Agent: Matrix E2EE exhaustion (#46310), message dispatch breaks (#46142)
- CoPaw: chat hangs after idle (#5172), DingTalk sessions invisible (#5177)

**Specific need:** Structured delivery confirmation, dead-letter queues for failed outbound messages, and channel-agnostic delivery status in the session transcript.

### 4.2 Multi-Provider Model Routing
**Projects:** OpenClaw, NanoBot, Hermes Agent, ZeroClaw, NanoClaw, CoPaw

Every project is racing to support more LLM providers, but the patterns differ:
- **ZeroClaw** batch-accepts every OpenAI-compatible endpoint (Upstage, Featherless, Arcee AI, Lambda, Inception Labs)
- **NanoClaw** is building operator-driven provider selection with memory migration (#2756, merged)
- **NanoBot** is adding subagent model presets (PR #4291) for cost-optimized workload routing
- **CoPaw** faces demand for BYO model provider whitelisting (#5156)
- **Hermes Agent** struggles with provider-specific parameter deprecation (Anthropic `temperature` for opus-4-8, #4333)

**Specific need:** A provider abstraction layer that handles parameter deprecation, context window detection, and capability negotiation automatically.

### 4.3 Security of Self-Modification Surfaces
**Projects:** NanoClaw, IronClaw, OpenClaw, ZeroClaw

A critical emerging pattern: agents that can modify their own configuration create attack surfaces that multiple independent researchers are now probing:
- **NanoClaw:** 3 critical advisories in one day — hidden `args`/`env` in MCP approval (#2762), unauthenticated loopback webhook (#2761), arbitrary file exfiltration via `send_file` (#2760)
- **IronClaw:** 6 shell approval bypass advisories in one day — `env sh -c`, newline chaining, `sort --compress-program`, dangling symlinks (#4861–#4865, #4797)
- **OpenClaw:** Indirect prompt injection via URL link preview metadata (#22060, 115 days old, unaddressed)
- **ZeroClaw:** Bearer token redaction in config display (PR #7566, merged — the only project with a fix already landed)

**Specific need:** A shared security framework for agent self-modification approval flows, including command parsing (not just prefix matching), sandbox path validation, and webhook authentication.

### 4.4 Stable External/Companion APIs
**Projects:** OpenClaw, NanoBot, Hermes Agent

Advanced users and plugin authors across all major projects want stable, documented APIs rather than scraping internal state:
- **OpenClaw:** SQLite transcript/session seams with lineage discovery, cursored read API, typed projections (#79902 + sub-issues)
- **NanoBot:** OpenAI-compatible endpoint returning zero usage tokens (#4309) — the data exists but isn't surfaced
- **Hermes Agent:** Plugin SDK surface for skill workflows (#81913), memory provider plugin API (#46253)

**Specific need:** A standardized companion API specification — possibly a shared crate or interface — for session state, transcript access, and skill metadata.

### 4.5 Session Lifecycle & Cron Reliability
**Projects:** OpenClaw, Hermes Agent, CoPaw, LobsterAI, PicoClaw

Scheduled and long-running tasks are a universal pain point:
- **OpenClaw:** Cron agentTurn setup timeouts (#82662), cron jobs stuck as "running" (PR #81572)
- **Hermes Agent:** Cron `.sh` scripts fail on Windows (#46332), cron observability (PR #46366)
- **CoPaw:** Cron/heartbeat silent failures, 120s timeout too short (PR #5180)
- **LobsterAI:** Ghost sessions from deleted cron tasks (PR #1465, merged)
- **PicoClaw:** Agent loop reload goroutine leaks (PR #2904, merged)

**Specific need:** Durable cron execution with at-least-once delivery, outcome persistence, and cross-platform script execution.

---

## 5. Differentiation Analysis

| Dimension | OpenClaw | NanoBot | Hermes Agent | IronClaw | ZeroClaw | PicoClaw | NanoClaw | CoPaw |
|---|---|---|---|---|---|---|---|---|
| **Primary target** | Power users, multi-channel operators | Developers, API-first users | Desktop end-users | Security-conscious operators | Enterprise fleets, provider-agnostic | Edge/embedded, Go ecosystem | Container-native, cloud-hosted | Chinese/Vietnamese market |
| **Deployment model** | Self-hosted gateway | Self-hosted + API server | Desktop app + gateway | Reborn SPA + gateway | Multi-tenant cloud | Single-device/edge | Container (Docker-first) | Desktop + channels |
| **Channel focus** | Telegram, WhatsApp, Discord | Telegram, Matrix, Feishu | Matrix, Telegram, Feishu | Reborn WebChat, Slack | All SMS + WhatsApp + Discord | Telegram, Matrix | Telegram, WhatsApp | DingTalk, QQ, WeChat |
| **Architecture** | SQLite-first, dynamic tool dispatch | Strict validation, config/agent boundary | Desktop/TUI + cross-platform cron | Approval pipeline, runtime-context injection | Provider-agnostic, multi-DB sessions | Go, WebSocket remote mode | Host + agent-runner isolation | Console + plugin system |
| **Key differentiator** | Largest ecosystem, richest channel delivery | Highest merge rate, cleanest architecture | Best Desktop UX, 15-language i18n | Security-first approval model | Broadest provider support, enterprise features | Smallest footprint, edge-native | Container-native, health-audit driven | Regional channel depth |
| **Weakness** | Maintainer bandwidth, regression density | Smaller community, fewer channels | Windows second-class, no release cadence | PR backlog, shell security bypasses | Merge bottleneck (49 open PRs) | Smallest community, silent failures | 3 critical security advisories | Regressions in current release |

---

## 6. Community Momentum & Maturity

### Tier 1: Hyper-Scale, High Strain
- **OpenClaw** — 500/500 issues/PRs per day. The ecosystem's gravity center, but maintainer bandwidth is the critical bottleneck. Stabilization phase with database migration underway.
- **ZeroClaw** — 41 issues, 50 PRs per day. Massive contributor throughput but only 1 merge in 24 hours. The 49-open-PR backlog is the ecosystem's most severe merge bottleneck.

### Tier 2: Active Development, Healthy Velocity
- **Hermes Agent** — 50/50 issues/PRs per day. No versioned releases (ships via main branch). Strong triage discipline, self-assigning contributors. Desktop UX is the primary investment area.
- **IronClaw** — 31/43 issues/PRs per day. Security-first posture with approval pipeline architecture. The 6 shell bypass advisories represent the ecosystem's most concentrated security event.
- **NanoBot** — 4/32 issues/PRs per day. Highest merge velocity: 16 PRs merged in a single day. The most responsive maintainer team relative to volume.

### Tier 3: Focused, Smaller Communities
- **NanoClaw** — 7/11 issues/PRs per day. Architectural progress (operator-driven provider system merged) but 3 critical security disclosures demand immediate attention.
- **CoPaw** — 8/7 issues/PRs per day. Regressions in current release (local model providers broken, cmd window spam) need urgent patching.
- **PicoClaw** — 5/8 issues/PRs per day. Smallest but most focused. Stability and extensibility sprint. Edge/embedded niche is genuinely differentiated.

### Tier 4: Maintenance / Low Activity
- **LobsterAI** — 2/4 issues/PRs per day. Cowork feature development ongoing but slow. Chinese-market focus with i18n gaps.
- **Moltis** — 1/2 issues/PRs per day. Holding pattern. Docker fix and esbuild bump awaiting review.

### Inactive
- **NullClaw, TinyClaw, ZeptoClaw** — No activity in the last 24 hours.

---

## 7. Trend Signals

### Trend 1: Security of Agent Self-Configuration Is the Next Battleground
The simultaneous disclosure of 9 critical security issues across NanoClaw (3) and IronClaw (6) on the same day by the same researcher signals that **the security research community is now systematically auditing agent self-modification surfaces**. This is analogous to the early days of web application security — the attack surface is large, the patterns are repetitive, and no project has a comprehensive solution yet. ZeroClaw's rapid merge of the bearer token redaction fix (PR #7566) shows the right response model, but the shell approval bypasses require architectural fixes, not patches.

**Implication for developers:** Expect security audits of agent approval flows to become a prerequisite for production deployments. Projects that invest in proper command parsing (not prefix matching), sandbox path validation, and webhook authentication will have a significant trust advantage.

### Trend 2: The "Companion API" Is Becoming a First-Class Product Surface
OpenClaw's #79902 (SQLite transcript seams), NanoBot's #4309 (zero usage tokens), and Hermes Agent's #81913 (plugin SDK for skills) all point to the same realization: **the agent's internal state is a product surface, not an implementation detail**. Advanced users, plugin authors, and enterprise operators all need stable, typed, documented APIs for session state, transcripts, and skill metadata. Projects that treat internal state as a private implementation will lose their power-user community.

**Implication for developers:** Design your session store and transcript format as if it were a public API from day one. Version it. Document it. Provide cursored access patterns.

### Trend 3: Provider Agnosticism Is Table Stakes, Not a Differentiator
ZeroClaw's batch acceptance of every OpenAI-compatible endpoint, NanoClaw's operator-driven provider system, NanoBot's subagent model presets, and CoPaw's BYO provider demand all confirm that **users expect to bring their own model**. The differentiator is no longer "supports 50 providers" but rather "handles provider-specific quirks gracefully" — parameter deprecation (Anthropic `temperature`), context window detection (Hermes #45519), and cached token pricing (ZeroClaw PR #7492).

**Implication for developers:** Invest in provider capability negotiation and graceful degradation, not just endpoint wrapping.

### Trend 4: Silent Failures Are the #1 Trust Eroder
Across every active project, the most upvoted and most commented issues share a common pattern: **the agent fails silently and the user has no way to diagnose why**:
- OpenClaw: Telegram messages silently dropped with no `sendMessage` log (#80520)
- NanoClaw: Budget-exhausted turns produce no reply (#2751)
- PicoClaw: `allow_from` silently rejects valid Matrix users (#3044), `web_search` silently returns no results (#3125)
- CoPaw: Chat hangs indefinitely after idle (#5172)

**Implication for developers:** Every failure mode needs a user-visible error path. Logging alone is insufficient — the error must reach the user through the channel they're using.

### Trend 5: Desktop UX Is an Emerging Battlefield
Hermes Agent's investment in 15-language i18n, theme systems, and cross-platform cron, combined with IronClaw's Reborn WebChat v2 SPA and OpenClaw's Control UI, signals that **the ecosystem is moving up the stack from gateway infrastructure to end-user experience**. The next competitive frontier is not "can it route messages" but "can a non-technical user configure, monitor, and trust their agent."

**Implication for developers:** Invest in onboarding flows, visual configuration, mobile responsiveness, and accessibility. The CLI-first era is giving way to GUI-first expectations.

### Trend 6: Edge and Embedded Deployment Is a Genuine Niche
PicoClaw's Go-based architecture, WebSocket remote agent mode, and `RegisterChannelSettings` for out-of-tree channels, combined with Moltis's Rust `turbovec` memory backend proposal, indicate that **there is real demand for agents that run on resource-constrained devices**. This is not yet a mainstream need, but it's a leading indicator as AI agents move from cloud-only to ambient computing scenarios.

**Implication for developers:** Consider a lightweight, embeddable mode — even if your primary deployment is cloud-native. The edge use case will grow as agents become more pervasive.

---

*Report compiled from 13 project digests, 2026-06-15. Data sources: respective GitHub repositories. Analysis by OWL, ZOO Company.*

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-06-15

---

## 1. Today's Overview

NanoBot saw intense activity on 2026-06-15, with **4 issues updated** (1 open, 3 closed) and a striking **32 PRs touched** (16 open, 16 merged/closed). No new releases were published. The project is clearly in a high-throughput stabilization and UI-improvement sprint: the majority of merged PRs address message-splitting bugs, tool parameter validation, and WebUI mobile responsiveness. Community contributions continue to be diverse, spanning channel integrations (Matrix, Feishu), subagent model routing, and config refactoring. The sheer volume of same-day PR closures suggests a responsive, active maintainer team.

---

## 2. Releases

**None** — No new version tags were published on 2026-06-15.

---

## 3. Project Progress — Merged / Closed PRs Today (16 items)

The following PRs were merged or closed on 2026-06-15, grouped by theme:

### Bug Fixes & Robustness
| PR | Author | Summary |
|---|---|---|
| **[#4340](https://github.com/HKUDS/nanobot/pull/4340)** | boogieLing | **Fix Telegram fenced-code-block splitting** — `split_message` now detects active Markdown fenced code blocks (` ``` `) and closes/reopens fences around chunk boundaries so each Telegram message renders independently. Fixes **[#4250](https://github.com/HKUDS/nanobot/issues/4250)**. |
| **[#4312](https://github.com/HKUDS/nanobot/pull/4312)** | yu-xin-c | **Reject malformed media attachments** — Validates `message` tool `media` payloads at runtime; rejects string, non-string, and empty entries before resolving paths. Prevents a single string from being split into one attachment per character. |
| **[#4311](https://github.com/HKUDS/nanobot/pull/4311)** | yu-xin-c | **Reject non-positive file pagination limits** — Bounds-checks `read_file` line windows and `list_dir` `max_entries` before filesystem traversal, even when validation is bypassed via direct tool calls. |
| **[#4336](https://github.com/HKUDS/nanobot/pull/4336)** | yu-xin-c | **Reject malformed `run_cli_app` argv payloads** — Validates `args` entries as strings before constructing process argv, closing the same bypass pathway as above. |
| **[#4011](https://github.com/HKUDS/nanobot/pull/4011)** | boogieLing | **Drop orphan tool results from session history** — Removes `role: "tool"` messages whose `tool_call_id` doesn't match any preceding assistant `tool_call`, both at write-time and checkpoint restore. Fixes **[#4006](https://github.com/HKUDS/nanobot/issues/4006)**. |

### WebUI & Developer Experience
| PR | Author | Summary |
|---|---|---|
| **[#4339](https://github.com/HKUDS/nanobot/pull/4339)** | chengyongru | **Improve WebUI mobile responsiveness** — Tightens shell spacing, safe-area padding, sidebar/drawer widths; wraps/truncates composer controls, badges, slash menus, attachment chips; compacts the token-usage heatmap. |
| **[#4331](https://github.com/HKUDS/nanobot/pull/4331)** | chengyongru | **Localize WebUI update-check copy** — Adds i18n resources for the About/version-update message across all locales with version interpolation. |

### Channel Integrations
| PR | Author | Summary |
|---|---|---|
| **[#1056](https://github.com/HKUDS/nanobot/pull/1056)** | volkergrabbe | **Matrix protocol channel integration** — Full Matrix support (access-token and password auth, direct messages and room-based messaging). This is a significant multi-commission PR (opened 2026-02-23) finally merged today. |

### Documentation & Branding
| PR | Author | Summary |
|---|---|---|
| **[#4341](https://github.com/HKUDS/nanobot/pull/4341)** | Re-bin | **Add themed README cover image** — Light/dark mode `<picture>` block using `prefers-color-scheme`. |
| **[#4338](https://github.com/HKUDS/nanobot/pull/4341)** | Re-bin | **Link Kimi partner banner** — Makes the Kimi logo in the README's Open Source Partners strip clickable, linking to `platform.kimi.com`. |
| **[#4295](https://github.com/HKUDS/nanobot/pull/4295)** | oriengy | **Add Kimi and MiniMax partner links** — Affiliate links in docs and README Open Source Partners strip. |

---

## 4. Community Hot Topics

Despite today's 32-PR surge, comment volumes are low across the board (most items have 0–1 comments). The most notable items by community engagement and strategic importance are:

1. **[#4309 — Bug: `/v1/chat/completions` always returns zero usage tokens](https://github.com/HKUDS/nanobot/issues/4309)**
   - **Status:** Open · Author: alx1379 · 1 comment
   - **Analysis:** The OpenAI-compatible serve endpoint hardcodes usage tokens to zero. The agent loop *already tracks real usage*, so this is a plumbing/wiring defect. High importance because the OpenAI-compatible API is a primary enterprise/custom-client integration path. No fix PR yet.

2. **[#4333 — Anthropic `temperature` deprecated for opus-4-8 / Fable → 400 errors](https://github.com/HKUDS/nanobot/issues/4333)**
   - Status: Closed (fix likely in-progress or implicitly handled) · Author: Ulef1005
   - **Analysis:** The Anthropic provider only suppressed the deprecated `temperature` parameter for `opus-4-7`. With `claude-opus-4-8` and the Fable model, `temperature` is still sent, causing a 400 on every request. This is a fast-moving upstream API deprecation that will recur as Anthropic rolls out new models.

3. **[PR #4344 — Refactor config and agent loop boundaries](https://github.com/HKUDS/nanobot/pull/4344)**
   - Status: Open · Author: chengyongru
   - **Analysis:** Aims to move tool config models into a side-effect-free module (`nanobot.config.tool_configs`), sever runtime imports from the root config schema, and extract narrow agent-loop coordinators. This is foundational architectural work that will improve testability and reduce circular dependency risk.

4. **[PR #4291 — Subagent configurable model presets](https://github.com/HKUDS/nanobot/pull/4291)**
   - Status: Open · Author: aiguozhi123456
   - **Analysis:** Allows `spawn` to accept a named model preset, letting subagents run on a different provider/model/temperature than the parent. The parent's `agents.defaults.spawnPresets` whitelist gates which presets are usable. This is directly relevant to cost optimization and capability routing.

**Underlying community needs:**
- **Production-grade API compatibility** (OpenAI-compatible endpoint accuracy, Anthropic API version resilience)
- **Enterprise/developer UX** (WebUI polish, mobile responsiveness, i18n)
- **Architectural hygiene** (config/agent boundary refactoring, strict tool validation)
- **Channel expansion** (Matrix now merged; Feishu, Telegram improvements)

---

## 5. Bugs & Stability

| Severity | Issue | Status | Fix PR? | Summary |
|---|---|---|---|---|
| 🔴 **High** | **[#4309](https://github.com/HKUDS/nanobot/issues/4309)** — Zero usage tokens on `/v1/chat/completions` | **Open, no PR** | ❌ | Every response through the OpenAI-compatible endpoint reports `usage: {prompt_tokens: 0, completion_tokens: 0, total_tokens: 0}`. Real usage is tracked internally — just never surfaced. Breaks any quota/billing dashboard built on the API. |
| 🔴 **High** | **[#4333](https://github.com/HKUDS/nanobot/issues/4333)** — 400 on Anthropic opus-4-8 / Fable | **Closed ✅** | Likely implicit | `temperature` parameter still sent to newer Anthropic models. Closed without a visible linked PR; may have been fixed in an unlinked commit or accepted as duplicate of another fix. |
| 🟡 **Medium** | **[#4250](https://github.com/HKUDS/nanobot/issues/4250)** — Telegram fenced code blocks broken across chunks | **Closed ✅** | ✅ [#4340](https://github.com/HKUDS/nanobot/pull/4340) | `split_message` broke ` ``` ` fences mid-chunk. Fixed and merged today. |
| 🟡 **Medium** | **[#4309](https://github.com/HKUDS/nanobot/issues/4309)** — Zero usage tokens | **Open, no PR** | ❌ | (Listed above; high severity because it silently corrupts billing data.) |
| 🟢 **Low** | **[#4262](https://github.com/HKUDS/nanobot/issues/4262)** — botIcon not shown on first agent start ("puppy" shown instead) | **Closed ✅** | Unknown | Minor UX cosmetic issue when entering agent mode. Closed — likely resolved informally or deprioritized. |

---

## 6. Feature Requests & Roadmap Signals

| Signal | Source | Likelihood in near-term | Notes |
|---|---|---|---|
| **Automation management WebUI** | [PR #4330 (open)](https://github.com/HKUDS/nanobot/pull/4330) | **High** — PR is active, comprehensive | Full CRUD surface for user automations (list, filter, run, pause, delete) with i18n and system-automation protection. |
| **Config/agent-loop architectural refactor** | [PR #4344 (open)](https://github.com/HKUDS/nanobot/pull/4344) | **High** — Work is underway | Splitting tool config models from side-effectful imports; a prerequisite for safer testing and multi-agent deployments. |
| **Subagent model presets** | [PR #4291 (open)](https://github.com/HKUDS/nanobot/pull/4291) | **Medium** — Whitelisted via `spawnPresets` | Gives power users model routing subagents without code changes. Aligns with multi-model cost optimization patterns. |
| **File tool toggle (`tools.file.enable`)** | [PR #4138 (closed today)](https://github.com/HKUDS/nanobot/pull/4138) | ✅ Merged | Lets deployments disable built-in filesystem tools when using remote sandboxes/MCP-only setups. |
| **Feishu WebSocket card rendering** | [PR #4342 (open)](https://github.com/HKUDS/nanobot/pull/4342) | **Medium** — Narrow, clear fix | Fixes structure mismatches in WebSocket-delivered Feishu cards; needed for growing China-market user base. |

---

## 7. User Feedback Summary

**Pain Points (dissatisfaction):**
- Production API consumers cannot get accurate token usage from the OpenAI-compatible endpoint — this is a **silent data corruption** problem ([**#4309**](https://github.com/HKUDS/nanobot/issues/4309)).
- Anthropic model upgrades immediately break requests when deprecated parameters aren't suppressed — users expect **forward-compatible provider handling** ([**#4333**](https://github.com/HKUDS/nanobot/issues/4333), now closed).
- Tool parameter validation gaps allowed garbage-in scenarios (non-positive pagination limits, malformed media attachments, string args in argv arrays) — the recent wave of yu-xin-c PRs directly addresses community reports of **edge-case crashes**.

**Use Cases (satisfaction signals):**
- Users are running **multi-channel deployments** (Telegram, Matrix, Feishu, WebUI simultaneously) — testimony to nanobot's channel-abstraction strength.
- **Subagent patterns** are actively being explored for workload partitioning — users want fine-grained control over which model agents use.
- **WebUI-first users** are a growing segment, evidenced by the volume of mobile/i18n/automation PRs.

---

## 8. Backlog Watch

| Item | Age | Status | Why It Needs Attention |
|---|---|---|---|
| **[#4309](https://github.com/HKUDS/nanobot/issues/4309)** — Zero usage tokens | 3 days old | **Open, no fix PR** | Most critical open bug. The fix is likely mechanical (plumb `usage` through the OpenAI-compatible response layer). High visibility to anyone running nanobot as an API server. |
| **[PR #4291](https://github.com/HKUDS/nanobot/pull/4291)** — Subagent model presets | 4 days old | Open | Conceptually important for multi-model deployments. Needs maintainer review/feedback to avoid dead-end effort. |
| **[PR #4324](https://github.com/HKUDS/nanobot/pull/4324) & [#4325](https://github.com/HKUDS/nanobot/pull/4325)** — WebUI env-var template resolution | 2 days old | Open, marked `[question]` | Two related PRs from `tobrien` addressing raw `${VAR}` template strings leaking into WebUI settings responses. Developer is explicitly asking for guidance — a quick maintainer comment would unblock or close them. |
| **[PR #4342](https://github.com/HKUDS/nanobot/pull/4342)** — Feishu WebSocket card rendering | Same day | Open | Narrow fix for a China-market channel. Fast review would be impactful for that user segment. |

---

> *Generated by OWL on 2026-06-15 · Data source: [github.com/HKUDS/nanobot](https://github.com/HKUDS/nanobot)*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-06-15

---

## 1. Today's Overview

Hermes Agent remains in a highly active development phase with **50 issues and 50 PRs updated in the last 24 hours** — an exceptionally high throughput that signals a large, engaged contributor base pushing rapid iteration across nearly every subsystem. No new releases were published today, consistent with the project shipping frequent incremental changes through its main branch rather than versioned milestones. The activity is heavily concentrated in **Desktop/TUI UX polish**, **gateway/platform reliability** (Matrix, Telegram, Feishu), and **tooling bug fixes** (web, memory, cron). The project shows healthy triage discipline — several issues are being marked as duplicates, and multiple contributors are self-assigning via "I'd like to implement this myself" notes. Overall project health is strong: high signal-to-noise ratio, fast PR turnaround, and active maintainer engagement visible in comment threads.

---

## 2. Releases

**None.** No new versions were published today.

---

## 3. Project Progress

**Merged / Closed PRs (from latest set):**

| PR | Summary |
|---|---|
| [#44457](https://github.com/NousResearch/hermes-agent/pull/44457) [CLOSED] | Fixed web plugin loader not re-running the bundled fallback sweep when `web-parallel` is explicitly disabled — a follow-up cleanup from #44433. |
| [#36856](https://github.com/NousResearch/hermes-agent/pull/36856) [CLOSED] | Fixed `atomic_replace` failing with `EXDEV` (cross-filesystem symlink) — a correctness fix affecting managed deployments that symlink config/auth files. |
| [#40529](https://github.com/NousResearch/hermes-agent/pull/40529) [CLOSED] | Fixed the Desktop model picker not surfacing inline custom provider models, closing long-standing [#40480](https://github.com/NousResearch/hermes-agent/issues/40480). |

**Notable open PRs advancing today:**

- **[#46365](https://github.com/NousResearch/hermes-agent/pull/46365)** — Fixes Matrix `send_message` to reuse the live gateway adapter for media sends, eliminating per-message E2EE re-init storms. Directly addresses new critical bug [#46310](https://github.com/NousResearch/hermes-agent/issues/46310).
- **[#46364](https://github.com/NousResearch/hermes-agent/pull/46364)** — Prefers Git Bash over WSL bash on Windows for `.sh` cron scripts and passes paths in forward-slash form. Fixes [#46332](https://github.com/NousResearch/hermes-agent/issues/46332).
- **[#46358](https://github.com/NousResearch/hermes-agent/pull/46358)** — Adds `terminal.docker_network: false` config toggle to disable network egress for Docker terminal sessions.
- **[#46359](https://github.com/NousResearch/hermes-agent/pull/46359)** — Adds `hermes uninstall --dry-run` safety preview mode.
- **[#38846](https://github.com/NousResearch/hermes-agent/pull/38846)** — Adds multilingual i18n support with 15 languages (JSON locale system, 861 keys), tracking closely upstream of the native i18n skeleton.

---

## 4. Community Hot Topics

### Most Discussed Issues

1. **[#45058](https://github.com/NousResearch/hermes-agent/issues/45058)** (7 comments, 👍11) — **CLOSED**: `web_search`/`web_extract` silently routing to Parall.ai without user opt-in. Community strongly reacted (11 👍) to the surprise backend change. Underlying need: **transparency and consent in tool provider routing** — users expect explicit configuration, not silent fallthrough to a commercial service.

2. **[#43083](https://github.com/NousResearch/hermes-agent/issues/43083)** (7 comments) — **OPEN**: Passwords redacted to `***` in conversation history cause the model to fail on second tool call since it can see its own redacted output. A **credential hygiene vs. agent functionality** tension that remains unresolved.

3. **[#45519](https://github.com/NousResearch/hermes-agent/issues/45519)** (4 comments) — **CLOSED**: GLM-5.2 context window misdetected as 202,752 instead of 1M due to substring matching in `DEFAULT_CONTEXT_LENGTHS`. Root cause: imprecise model identifier matching.

4. **[#46192](https://github.com/NousResearch/hermes-agent/issues/46192)** (3 comments) — Request for a "Keep" option in CLI's `base_url` setup prompt to avoid tedious Ctrl+C/Ctrl-V.

5. **[#46253](https://github.com/NousResearch/hermes-agent/issues/46253)** (3 comments) — Request for GBrain as a formal memory provider plugin with full pipeline integration (prefetch injection, write-through).

### Analysis

The most upvoted concern is **unexpected third-party data routing** (👍11 on #45058), which signals that the community cares deeply about data sovereignty. The password redaction bug (#43083) reveals an interesting design tension: security hardening (redacting credentials from logs/history) can break agent tool-call reasoning. Feature requests skew toward **UX polish** (theme sessions, i18n, sidebar summaries) and **memory system extensibility** (GBrain plugin, memory as background context).

---

## 5. Bugs & Stability

Ranked by severity (P1 → P3):

### P1 — Critical

| Issue | Description | Fix PR? |
|---|---|---|
| [#46310](https://github.com/NousResearch/hermes-agent/issues/46310) | Matrix `send_message` media path reconnects + re-inits E2EE per message — exhausts recipient OTKs, silently drops messages under burst | ✅ [#46365](https://github.com/NousResearch/hermes-agent/pull/46365) (OPEN) |
| [#46303](https://github.com/NousResearch/hermes-agent/issues/46303) | Concurrent sessions cross-contaminate via shared memory injection + shared git worktree — no isolation | ❌ None yet |
| [#46142](https://github.com/NousResearch/hermes-agent/issues/46142) | Matrix gateway (post-mautrix migration) breaks inbound message dispatch on Tuwunel homeserver | ❌ None yet |

### P2 — High

| Issue | Description | Fix PR? |
|---|---|---|
| [#43083](https://github.com/NousResearch/hermes-agent/issues/43083) | Redacted `***` passwords in conversation history cause agent failure on second tool call | ❌ None yet |
| [#46171](https://github.com/NousResearch/hermes-agent/issues/46171) | Memory provider tools bypass `disabled_toolsets` — tool-policy bypass | ❌ None yet |
| [#46260](https://github.com/NousResearch/hermes-agent/issues/46260) | Hermes installer fails at "desktop" stage (`npm install` exit code 1) on Windows 10 | ❌ None yet |
| [#43389](https://github.com/NousResearch/hermes-agent/issues/43389) | `FactStore.update_fact()` crashes on UNIQUE constraint when updating to duplicate content | ❌ None yet |

### P3 — Medium / Low

| Issue | Description | Fix PR? |
|---|---|---|
| [#40480](https://github.com/NousResearch/hermes-agent/issues/40480) | Custom provider models not shown in Desktop model dropdown | ✅ Closed via [#40529](https://github.com/NousResearch/hermes-agent/pull/40529) |
| [#42651](https://github.com/NousResearch/hermes-agent/issues/42651) | Desktop shows all cron jobs for every profile despite profile scoping | ❌ None yet |
| [#46131](https://github.com/NousResearch/hermes-agent/issues/46131) | Ollama reasoning models return empty content — needs `reasoning_effort` parameter | ❌ None yet |
| [#46332](https://github.com/NousResearch/hermes-agent/issues/46332) | Cron `.sh` scripts fail on Windows (WSL bash picked over Git Bash) | ✅ [#46364](https://github.com/NousResearch/hermes-agent/pull/46364) (OPEN) |

**Stability assessment:** Three open P1 bugs are concerning, particularly the **Matrix E2EE exhaustion** (#46310, with fix PR in progress) and the **concurrent session cross-contamination** (#46303) — the latter being a fundamental isolation issue. The **tool-policy bypass** (#46171) is a security-adjacent concern that warrants prompt attention.

---

## 6. Feature Requests & Roadmap Signals

**High-confidence near-term candidates** (based on activity patterns, PR author intent, and duplicate consolidation):

- **Cron observability** — [#46366](https://github.com/NousResearch/hermes-agent/pull/46366) adds elapsed time + token usage to cron output. Already in PR; likely to merge soon.
- **Kanban/epoch workflow callbacks** — [#46360](https://github.com/NousResearch/hermes-agent/pull/46360) enables autonomous spiral/epoch-based workflows (measure → dispatch → re-measure).
- **Windows `computer_use` backend** — [#43927](https://github.com/NousResearch/hermes-agent/pull/43927) adds a Windows UIA backend for the `computer_use` toolset, expanding beyond macOS-only.
- **Session merge CLI** — [#44757](https://github.com/NousResearch/hermes-agent/issues/44757) requests `hermes sessions merge` to combine related transcripts — a pragmatic request for long-running projects.
- **Streaming-content skill** — [#46351](https://github.com/NousResearch/hermes-agent/pull/46351) adds Twitch/Kick/Rumble transcription, filling a gap alongside the existing YouTube skill.

**Longer-term signals:**

- **Persistent agent sessions across tab close** — [#22027](https://github.com/NousResearch/hermes-agent/issues/22027) (opened May 8, still open) asks for tasks to continue running after browser tab closure — this requires architectural changes to the gateway/session lifecycle.
- **GBrain memory provider plugin** — [#46253](https://github.com/NousResearch/hermes-agent/issues/46253) reflects demand for deeper semantic memory integration.
- **Professional/accessible theme** — [#36865](https://github.com/NousResearch/hermes-agent/issues/36865) (👍3) requests a clean theme for users with ADHD/sensory needs.

**Prediction:** The next release (likely v0.16.1 or v0.17.0) will focus on **cron improvements**, **Windows compatibility**, **gateway stability (Matrix/Telegram)**, and **Desktop UX polish** (themes, i18n, model picker fixes) rather than major new features.

---

## 7. User Feedback Summary

**Pain points surfacing repeatedly:**

| Pain Point | Evidence |
|---|---|
| **Silent third-party routing** | Issue #45058 with 11 👍 — users surprised that web traffic routes to Parall.ai without opt-in. Trust issue. |
| **Matrix gateway instability** | Multiple issues: E2EE exhaustion (#46310), Tuwunel homeserver breakage (#46412), file attachment drops (#23704). Matrix is clearly a pain surface. |
| **Password handling is awkward** | Users must paste credentials that then get redacted from history, breaking subsequent tool calls (#43083). No good solution yet. |
| **Windows is a second-class platform** | Cron script failures (#46332), installer npm failures (#46260), model picker bugs (#40480), bash path issues. |
| **Desktop UI polish gaps** | Overlapping UI elements (#44140), no way to remove connected accounts (#45865), empty providers cluttering model switcher (#46304). |
| **Theme/accessibility** | Users with ADHD report cognitive friction from stylized themes (#36865). Demand for professional/clean UI option. |

**Satisfaction signals:**

- Multiple contributors are self-assigning features via PR proposals (e.g., #45103, #46360), indicating high engagement and trust in the contribution process.
- The project is actively porting useful fixes from related projects (OpenClaw → Hermes PRs: #46355, #46363, #46359), suggesting a healthy cross-project ecosystem.
- P1 bugs are receiving same-day fix PRs (#46310 → #46365), indicating responsive maintainer culture.

---

## 8. Backlog Watch

Long-unanswered important items needing maintainer attention:

| Issue | Age | Status | Risk |
|---|---|---|---|
| **[#23704](https://github.com/NousResearch/hermes-agent/issues/23704)** — Mattermost file attachments silently dropped | 35 days (May 11) | CLOSED but filed under old architecture; worth verifying fix still holds post-matrix migration | Medium — messaging platform regression |
| **[#22027](https://github.com/NousResearch/hermes-agent/issues/22027)** — Persistent sessions when browser tab closes | 38 days (May 8) | OPEN, no comments | Medium — requires architectural change, but frequently requested |
| **[#16108](https://github.com/NousResearch/hermes-agent/issues/16108)** — Gateway event idempotency & stale-response suppression | 50 days (Apr 26) | OPEN, 2 comments | High — fundamental reliability issue for production deployments |
| **[#46171](https://github.com/NousResearch/hermes-agent/issues/46171)** — Memory tools bypass `disabled_toolsets` security policy | 1 day | OPEN, no maintainer response | High-adjacent — security/policy bypass |
| **[#46303](https://github.com/NousResearch/hermes-agent/issues/46303)** — Concurrent session cross-contamination | 1 day | OPEN, no fix PR | High — data isolation bug |
| **[#36515](https://github.com/NousResearch/hermes-agent/issues/36515)** — `parallel/provider.py` test coverage at 22.5% | 14 days (Jun 1) | CLOSED (test coverage issue, may need follow-up) | Low — code quality debt |
| **[#43083](https://github.com/NousResearch/hermes-agent/issues/43083)** — Redacted passwords break agent tool calls | 6 days | OPEN, 7 comments, no resolution | Medium — design dilemma with no easy answer |

**Recommended priorities for maintainers:**
1. **Resolve the Matrix gateway instability surgically** — three open Matrix issues (#46310, #46142, #46365 fix PR) suggest the mautrix migration introduced regressions that need coordinated attention.
2. **Address the concurrent session isolation bug** (#46303) — this is a fresh P1 with implications for multi-user deployments.
3. **Respond to the tool-policy bypass** (#46171) — even a comment acknowledging/denying the security concern would help.
4. **Provide direction on gateway event idempotency** (#16108) — at 50 days old with no maintainer comment, contributors may be unsure if this is desired or already planned.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Daily Digest — 2026-06-15

---

## 1. Today's Overview

PicoClaw maintained **high development velocity** on 2026-06-14: **5 issues updated** (4 open, 1 closed) and **8 pull requests updated** (3 open, 5 merged or closed), plus a periodic **nightly build** release. The project is actively iterating on stability fixes and extensibility improvements as it progresses beyond the v0.2.9 stable release. Notably, contributor activity is healthy with multiple independent contributors landing clean-up and stability PRs in rapid succession.

---

## 2. Releases

| Version | Type | Date | Description |
|---|---|---|---|
| [v0.2.9-nightly.20260614.cf67dd38](https://github.com/sipeed/picoclaw/releases) | Nightly | 2026-06-14 | Automated nightly build from main branch. Labeled unstable; use with caution. [Full changelog](https://github.com/sipeed/picoclaw/compare/v0.2.9...main) |

No stable release today. The nightly reflects ongoing development on `main` since the v0.2.9 stable tag.

---

## 3. Project Progress

### Merged / Closed PRs (5)

| # | Title | Key Change |
|---|---|---|
| [#2904](https://github.com/sipeed/picoclaw/pull/2904) | Fix agent loop reload and panic cleanup stability | Stabilized `ReloadProviderAndConfig` by eliminating a detached goroutine pattern; adopted synchronous `defer/recover` to prevent leaked goroutines on reload failure. A core reliability fix for the agent system. |
| [#3124](https://github.com/sipeed/picoclaw/pull/3124) | fix(tts): handle `io.ReadAll` error in error response path | Fixed silent diagnostic degradation when TTS API returns non-200 responses. Now surfaces descriptive error messages instead of silently discarding `ReadAll` failures. |
| [#3123](https://github.com/sipeed/picoclaw/pull/3123) | fix(filesystem): explicitly ignore `Close()` error on directory fd | Code hygiene fix — made intentional dir-fd close error discard explicit, matching existing `Sync()` pattern. |
| [#3122](https://github.com/sipeed/picoclaw/pull/3122) | fix(evolution): capture `Close()` error on write file in `appendJSONLRecords` | Important stability fix: delayed write failures (disk full, NFS errors) on write-only files are now surfaced to callers instead of silently discarded by `defer f.Close()`. |
| [#3121](https://github.com/sipeed/picoclaw/pull/3121) | refactor(openai_compat): replace `log.Printf` with structured logger | Quality-of-life improvement — the last remaining unstructured `log.Printf` call in the OpenAI compat provider was replaced with `logger.WarnCF` per project convention. |

**Summary:** Today's merged PRs represent a **stability and code hygiene sprint** — the core agent reload loop was hardened, file-close error handling was made consistent across three locations, and one refactoring PR improved observability logging. A pattern of meticulous incremental quality improvements is evident, largely driven by contributor **chengzhichao-xydt** with four quick-turnaround PRs merged the same day they were opened.

---

## 4. Community Hot Topics

| # | Title | Type | Signal |
|---|---|---|---|
| [#3041](https://github.com/sipeed/picoclaw/issues/3041) | `mcp add` mis-parses global flags into positionals | Bug / Issue | MCP (Model Context Protocol) tool registration is broken when passing global CLI flags. Users cannot add HTTP/SSE MCP servers. High functional impact. |
| [#3044](https://github.com/sipeed/picoclaw/issues/3040) | `allow_from` fails for Matrix user IDs containing colon | Bug / Issue | Access control silently rejects valid Matrix users — a **security-adjacent** issue where valid users are blocked from interacting with their own agent. |
| [#3118](https://github.com/sipeed/picoclaw/pull/3118) | Add remote Pico WebSocket mode to picoclaw agent | Feature / PR | Introduces `--remote` flag connecting agent to a remote Pico WebSocket — a significant architectural extensibility step enabling remote/off-device agent execution. |
| [#3120](https://github.com/sipeed/picoclaw/pull/3120) | Add `RegisterChannelSettings` hook for out-of-tree channels | Feature / PR | Enables third-party channel modules to register config without forking PicoClaw, closing an extensibility gap in the public plugin API. |

**Analysis:** The community is clearly pushing in two directions simultaneously: **(1) robustness of core features** (MCP tool registration, Matrix auth) and **(2) extensibility for third-party developers** (remote WebSocket agent, out-of-tree channel config hooks). Both trends suggest PicoClaw is maturing from a single-use agent into a **plugin-friendly framework**.

---

## 5. Bugs & Stability

| Severity | # | Title | Status | Fix PR? |
|---|---|---|---|---|
| 🔴 High | [#3125](https://github.com/sipeed/picoclaw/issues/3125) | `web_search` tool fails silently with Brave API key from `.security.yml` | **NEW, OPEN** | None — regression from architecture migration. |
| 🟠 High | [#3041](https://github.com/sipeed/picoclaw/issues/3041) | `mcp add` mis-parses global flags into positionals, breaking HTTP/SSE adds | OPEN, stale | None — likely requires `DisableFlagParsing` removal on MCP subcommand. |
| 🟠 High | [#3044](https://github.com/sipeed/picoclaw/issues/3044) | `allow_from` fails for Matrix user IDs containing colon | OPEN, stale | None — likely requires special ID parsing for the `:` delimiter. |
| 🟡 Medium | [#3090](https://github.com/sipeed/picocaw/issues/3090) | Panel does not work on Safari iOS < 16.4 | OPEN | None — frontend compatibility issue. |

**Key concern:** The **`web_search` regression** (#3125, reported today) is the most critical — it represents a **post-migration regression** where API key loading from the new `.security.yml` config path fails specifically for the Brave search backend. Since the LLM correctly calls the tool but the backend returns no results without hitting the API, this looks like a credential loading bug in the new security config layer. This should be prioritized for the next stable patch.

---

## 6. Feature Requests & Roadmap Signals

| # | Request | Signal Strength | Likelihood in Next Release |
|---|---|---|---|
| [#3118](https://github.com/sipeed/picoclaw/pull/3118) | Remote Pico WebSocket agent mode | High — PR already open and active | ✅ High (PR is close to review-ready) |
| [#3120](https://github.com/sipeed/picoclaw/pull/3120) | `RegisterChannelSettings` hook for out-of-tree channels | High — PR already open and focused | ✅ High |
| [#2975](https://github.com/sipeed/picoclaw/pull/2975) | Treat reply-to-bot as mention in Telegram groups | Medium — stale PR, conceptual review needed | 🔶 Medium (stale, may need revisit) |
| [#2978](https://github.com/sipeed/picoclaw/issues/2978) | Add OmniRoute as provider | Low-Medium — third-party provider, community-driven | Low (requires community contribution) |

**Extensibility is the dominant roadmap signal.** Two open PRs (#3118, #3120) directly address architectural extensibility — remote execution and third-party channel configuration. If both land in the next release cycle, PicoClaw will take a meaningful step toward being a **platform** rather than a standalone tool.

---

## 7. User Feedback Summary

| Pain Point | Details |
|---|---|
| **Silent failures erode trust** | Both the `allow_from` Matrix issue (#3044) and the `web_search` regression (#3125) share a common pattern: failures produce no error, only silent rejection. Users describe frustration at "it just doesn't work" scenarios with zero diagnostic output. |
| **MCP ecosystem integration is fragile** | The #3041 `mcp add` bug means users cannot register external tool servers at all — blocking a core value proposition of agent-tool ecosystems. |
| **Safari/iOS user experience gap** | #3090 highlights that the web panel has a hard minimum of iOS 16.4, cutting off users with older but still-in-use devices. |
| **Third-party extensibility is partially locked** | User #2978 asking "how do I add a combo to the configuration" surfaces a documentation and API gap — the factory registration exists but config registration does not (being addressed by PR #3120). |

**Overall sentiment:** Users are engaged and technically sophisticated (reporting detailed reproduction steps, version numbers, and environment details), but are hitting friction around **silent failures** and **extensibility boundaries**. The project's responsiveness to these concerns (multiple stability PRs merged today) is a positive signal.

---

## 8. Backlog Watch

| # | Title | Age | Risk | Recommended Action |
|---|---|---|---|---|
| [#3041](https://github.com/sipeed/picoclaw/issues/3041) | `mcp add` mis-parses global flags | 7 days, stale | 🔴 High — blocks MCP tool registration entirely | Prioritize fix; likely a one-line `DisableFlagParsing` removal on the MCP subcommand. |
| [#3044](https://github.com/sipeed/picoclaw/issues/3044) | `allow_from` fails for Matrix user IDs with colon | 7 days, stale | 🟠 High — security-adjacent, silently blocks valid users | Needs Matrix ID parsing fix; the colon in `@localpart:domain` is likely being misinterpreted as a config delimiter. |
| [#3090](https://github.com/sipeed/picoclaw/issues/3090) | Panel broken on Safari iOS < 16.4 | 4 days | 🟡 Medium — frontend compat, affects mobile users | Investigate minimum Safari version requirements; consider graceful degradation or polyfill. |
| [#2975](https://github.com/sipeed/picoclaw/pull/2975) | Telegram reply-as-mention | 15 days, stale | 🟡 Medium — stale PR, needs maintainer review | Re-engage author or close with explanation; concept is sound but PR needs refresh. |

---

*Generated by OWL — ZOO Company · Data as of 2026-06-14 EOD · Source: [github.com/sipeed/picoclaw](https://github.com/sipeed/picoclaw)*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-06-15

---

## 1. Today's Overview

NanoClaw saw high activity on 2026-06-14, with **7 issues** and **11 pull requests** updated in the last 24 hours. The project is in an active development phase: multiple feature PRs landed (Codex provider v2, operator-driven provider selection, data-driven CLI installs), while a cluster of **3 security advisories** was disclosed simultaneously by the same researcher. No new releases were published. The ratio of open-to-closed items (6 open issues, 5 closed PRs) suggests maintainers are merging steadily but the security disclosures will demand urgent triage.

---

## 2. Releases

**None.** No new versions were published on or around 2026-06-15.

---

## 3. Project Progress

The following PRs were merged or closed on 2026-06-14:

| PR | Author | Summary |
|---|---|---|
| **#2756** (merged) | omri-maya | **Operator-driven provider selection, switching, and memory migration** — Turns the agent provider into an explicit, operator-chosen property. Ships the provider registry, setup picker, installer, vault auth walkthrough, and memory-migration skill. A significant architectural seam for multi-provider support. |
| **#2757** (merged) | omri-maya | **Codex agent-provider payload v2** — Replaces the old Codex payload with a full agent provider on the host's capability seams, authenticated vault-only through OneCLI. Builds directly on #2756's seams. |
| **#2758** (merged) | gavrielc | **Data-driven global CLI installs from `cli-tools.json`** — Replaces hardcoded Dockerfile `ARG`+`RUN` blocks with a JSON manifest. Skills needing a CLI tool now add a `{name, version}` row. Simplifies container maintenance and extensibility. |
| **#2764** (merged) | glifocat | **Docs fix: relocated Key Files paths in `CLAUDE.md`** — Updates two stale file references that moved under `src/modules/`. Closes issue #2763. |
| **#2769** (closed) | Koshkoshinsk | **Docs fix: `/add-codex` skill auth step callout** — Flags the interactive `provider-auth codex` step and adds a host-restart step. Closed (superseded or handled separately). |

**Key takeaway:** The biggest structural change is the **operator-driven provider system** (#2756 + #2757), which establishes Codex as a first-class provider alongside Claude and lays groundwork for future provider payloads. The container CLI manifest (#2758) is a quality-of-life improvement for maintainers and skill authors.

---

## 4. Community Hot Topics

No issues or PRs have comments or 👍 reactions yet — all items are freshly filed (created 2026-06-12 to 2026-06-14). However, the following are poised to attract community attention based on topic severity and breadth:

- **[Issue #2762](https://github.com/nanocoai/nanoclaw/issues/2762)** — *Security: `add_mcp_server` approval flow allows hidden `args` and `env`* — An attacker-controlled agent could submit MCP server configurations with concealed arguments and environment variables that get approved and persisted without the approver seeing them. This is a **trust/UI integrity** issue in the self-modification flow.

- **[Issue #2761](https://github.com/nanocoai/nanoclaw/issues/2761)** — *Security: Local gateway approval bypass via unauthenticated loopback webhook* — The Chat SDK gateway bridge's localhost webhook doesn't authenticate the sender. Any process on the host can forge approval events.

- **[Issue #2760](https://github.com/nanocoai/nanoclaw/issues/2760)** — *Security: Arbitrary local file exfiltration via `send_file` absolute path* — The `send_file` MCP tool accepts absolute paths without constraining the read to a sandbox, enabling an agent to exfiltrate any file the host process can read.

- **[Issue #2751](https://github.com/nanocoai/nanoclaw/issues/2751)** — *Budget-exhausted LLM turns silently dropped* — When a token/spend budget is exhausted, the user gets no reply at all. A fix PR (#2759) is already open.

- **[PR #2732](https://github.com/nanocoai/nanoclaw/pull/2732)** — *Harden host + agent-runner from health audit findings* — A multi-agent adversarial health audit produced fixes across 19 files. Still open, typecheck + tests green.

**Underlying needs:** The community is pushing for (1) **security hardening** of the self-modification and approval surfaces, (2) **multi-provider flexibility** (being addressed by the merged PRs), and (3) **graceful error handling** for budget/turn failures.

---

## 5. Bugs & Stability

### Security Issues (Critical)

| # | Issue | Severity | Fix PR |
|---|---|---|---|
| [#2762](https://github://github.com/nanocoai/nanoclaw/issues/2762) | Hidden `args`/`env` in `add_mcp_server` approval flow | 🔴 Critical — self-modification trust bypass | None yet |
| [#2761](https://github.com/nanocoai/nanoclaw/issues/2761) | Unauthenticated loopback webhook allows approval bypass | 🔴 Critical — local privilege escalation | None yet |
| [#2760](https://github.com/nanocoai/nanoclaw/issues/2760) | Arbitrary file exfiltration via `send_file` absolute paths | 🔴 Critical — data exfiltration | None yet |

All three were filed by the same researcher (YLChen-007) on the same day, suggesting a coordinated security audit. No fix PRs exist yet. These should be the **top priority** for maintainers.

### Functional Bugs (Medium)

| # | Issue | Severity | Fix PR |
|---|---|---|---|
| [#2751](https://github.com/nanocoai/nanoclaw/issues/2751) | Budget-exhausted LLM turns silently dropped | 🟡 Medium — poor UX, no error feedback | [#2759](https://github.com/nanocoai/nanoclaw/pull/2759) (open) |
| [#2763](https://github.com/nanocoai/nanoclaw/issues/2763) | Stale file paths in `CLAUDE.md` Key Files table | 🟢 Low — documentation only | [#2764](https://github.com/nanocoai/nanoclaw/pull/2764) (merged ✅) |

### Stability / Race Conditions

| # | PR | Summary |
|---|---|---|
| [#2750](https://github.com/nanocoai/nanoclaw/pull/2750) | Recover stale `outbound.db` journals after container kills; classify hot-journal poll races | Fixes #2516 and #2640 — two long-standing failure modes of the host's READONLY outbound DB handles. Open, not yet merged. |

---

## 6. Feature Requests & Roadmap Signals

| # | Request | Signal Strength | Likely Target |
|---|---|---|---|
| [#2768](https://github.com/nanocoai/nanoclaw/issues/2768) | Enable prompt caching by default in Claude provider | Medium — performance/cost optimization, straightforward fix | Next patch release |
| [#2767](https://github.com/nanocoai/nanoclaw/issues/2767) | Remove legacy Telegram Markdown sanitizer (obsolete with `@chat-adapter/telegram@4.30.0`) | Medium — cleanup/dedup after upstream fix | Next minor release |
| [#2756](https://github.com/nanocoai/nanoclaw/pull/2756) (merged) | Operator-driven provider selection + memory migration | **Shipped** — establishes the multi-provider architecture | ✅ Merged |
| [#2770](https://github.com/nanocoai/nanoclaw/pull/2770) | Deliver Codex harness file events + add `file` to `ProviderEvent` | Medium — needed for Codex image generation to reach chat | Next minor release |

**Prediction:** The next release will likely be a **minor version** bundling: (1) the security fixes for the three critical advisories, (2) the budget-error delivery fix (#2759), (3) Claude prompt caching by default (#2768), and (4) the Telegram sanitizer cleanup (#2767). The Codex file-event delivery (#2770) may land in the same release or follow shortly.

---

## 7. User Feedback Summary

**Pain points identified in this digest cycle:**

1. **Silent failures erode trust.** Issue #2751 highlights that budget-exhausted turns produce no user-visible feedback. Users expect at minimum an error message explaining why no response was generated.

2. **Security of self-modification is a first-class concern.** The three simultaneous security advisories (#2760–#2762) reveal that NanoClaw's value proposition — an agent that can modify its own configuration — creates a large attack surface. Users deploying NanoClaw in any environment with sensitive data or untrusted agent inputs need these surfaces hardened urgently.

3. **Documentation drift causes friction.** Issue #2763 (now fixed) shows that file moves left stale references in `CLAUDE.md`, which is particularly impactful because AI coding assistants use that file as a navigation index. Broken paths waste user and agent time.

4. **Container lifecycle robustness.** PR #2750 addresses long-standing `outbound.db` journal corruption after SIGKILL. Users running NanoClaw in containerized environments (the primary deployment model) have likely encountered stuck or lost messages without understanding why.

**Satisfaction signals:** The rapid merge rate (5 PRs closed/merged in one day) and the architectural investment in multi-provider support suggest an active, responsive maintainer team. The health audit PR (#2732) also indicates proactive quality investment.

---

## 8. Backlog Watch

| # | Item | Age | Risk | Action Needed |
|---|---|---|---|---|
| [#2762](https://github.com/nanocoai/nanoclaw/issues/2762) | Hidden `args`/`env` in `add_mcp_server` approval | 1 day | 🔴 Critical — no fix PR | Maintainer triage + security patch |
| [#2761](https://github.com/nanocoai/nanoclaw/issues/2761) | Unauthenticated loopback webhook bypass | 1 day | 🔴 Critical — no fix PR | Maintainer triage + security patch |
| [#2760](https://github.com/nanocoai/nanoclaw/issues/2760) | Arbitrary file exfiltration via `send_file` | 1 day | 🔴 Critical — no fix PR | Maintainer triage + security patch |
| [#2732](https://github.com/nanocoai/nanoclaw/pull/2732) | Harden host + agent-runner (health audit fixes) | 3 days | 🟡 Medium — open PR, tests green | Review and merge |
| [#2750](https://github.com/nanocoai/nanoclaw/pull/2750) | Recover stale `outbound.db` journals | 3 days | 🟡 Medium — open PR, fixes two old issues | Review and merge |
| [#2751](https://github.com/nanocoai/nanoclaw/issues/2751) | Budget-exhausted turns silently dropped | 3 days | 🟡 Medium — fix PR #2759 open | Review and merge #2759 |

**Note:** The three critical security issues are only 1 day old and may still be in initial disclosure/responsible-disclosure coordination. However, given that they are public and no fix PRs exist, they represent the highest-risk items in the backlog. PR #2732 (health audit hardening, 3 days open, green CI) is a strong candidate for near-term merge.

---

*Data source: [github.com/qwibitai/nanoclaw](https://github.com/qwibitai/nanoclaw) — Digest generated 2026-06-15.*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-06-15

---

## 1. Today's Overview

IronClaw saw high-intensity activity on June 14–15, with **31 issues** (24 open, 7 closed) and **43 pull requests** (26 open, 17 merged/closed) updated in the last 24 hours. Contributors `henrypark133`, `sunglow666`, `krishna-505`, and `YLChen-007` were the most prolific. No new releases were published. The dominant themes were **Reborn WebUI/WebSocket polish**, **security advisories on shell approval bypasses**, **auth/approval pipeline hardening**, and **attachment pipeline completeness** (images + native Reborn support). Overall project health is active and vibrant, with a notable concentration of security disclosures arriving simultaneously.

---

## 2. Releases

No new releases were published today. The last tracked release PR (#4738) is still merging changes from the `v0.24.0 → 0.29.1` range in PR #3708, which remains open with breaking changes to `ironclaw_common` (0.4.2 → 0.5.0) and `ironclaw_skills` (0.3.0 → 0.4.0).

---

## 3. Project Progress (Merged/Closed PRs)

| PR | Description |
|---|---|
| [#4738](https://github.com/nearai/ironclaw/pull/4738) | **feat(reborn): attachment WebChat v2 UX** — Wired upload, staging, and rendering of attachments into the Reborn WebChat v2 SPA. Stacked on prior backend groundwork (#4677). Closes a major gap in [#4644](https://github.com/nearai/ironclaw/issues/4644). |
| [#4836](https://github.com/nearai/ironclaw/pull/4836) | **feat(runtime-context): surface connected channels + delivery state + run origin** — Models now see which channels are connected, where outbound delivery points, and how the run originated at every loop start. Implements #4828. |
| [#4844](https://github.com/nearai/ironclaw/pull/4844) | **fix(slack): filter delivered gate routes by raw gate string** — Fixed a per-route allocation bug in Slack gate routing where `GateRef` was allocated just to match on an auth-vs-approval discriminator. Switched to `&str` filter. |
| [#4873](https://github.com/nearai/ironclaw/pull/4873) | **test(slack): re-home approval→auth→final-reply delivery e2e** — Restored the `slack_approval_then_auth_resume_completes_without_second_approval` test that was removed as "born-broken" from #4839. Closes [#4847](https://github.com/nearai/ironclaw/issues/4847). |

**Key advancement**: The attachment pipeline (backend + frontend) is largely closing out for Reborn, and the runtime context now gives the model visibility into its own communication topology.

---

## 4. Community Hot Topics

### Auth & Approval Pipeline Hardening
- **[Issue #4851](https://github.com/nearai/ironclaw/issues/4851)** [CLOSED] — "Trusted-trigger origin is laundered through adapter_kind string" — Type-level trust is flattened to a string and re-derived downstream, creating forgeability risk for `ScheduledTrigger` origins. (1 comment)
- **[Issue #4848](https://github.com/nearai/ironclaw/issues/4848)** [CLOSED] — Auth-resume should match by per-invocation identity (`input_ref`), not just `capability_id`, to prevent slot-reuse across distinct invocations. (1 comment)

### Largest Unresolved Effort: Universal Attachments
- **[Issue #4644](https://github.com/nearai/ironclaw/issues/4644)** [OPEN, P1] — Universal attachments across all channels: Reborn's transcript contract is text-only, attachments are silently dropped, and format logic is duplicated across 4+ call sites. ([PR #4738](https://github.com/nearai/ironclaw/pull/4738) partially addresses the UX layer; [PR #4871](https://github.com/nearai/ironclaw/pull/4871) adds image/vision support as a follow-on.)

### Security Surge (7 advisories opened today)
- **[Issues #4861–#4865](https://github.com/nearai/ironclaw/issues/4861)** [OPEN] authored by YLChen-007 — All filed today, covering shell approval bypass via: transparent wrappers (`env`, shell wrappers), newline-chained destructive commands, GNU `sort --compress-program`, and `write_file` dangling-symlink sandbox escape ([#4797](https://github.com/nearai/ironclaw/issues/4797)). See §5 for severity analysis.

### Reborn Runtime & UX Polish
- **[Issue #4852](https://github.com/nearai/ironclaw/issues/4852)** — Shell command body invisible in approval dialog / Activity history, only `Capability: builtin.shown.shell` is displayed.
- **[Issue #4870](https://github.com/nearai/ironclaw/issues/4870)** — WebChat v2 WebSocket helper uses `?token=` query auth but the contract explicitly rejects it.
- **[Issue #4874](https://github.com/nearai/ironclaw/issues/4874)** — WebChat v2 chat send throws `TypeError: Illegal invocation` over plain HTTP from non-localhost.

---

## 5. Bugs & Stability (Ranked by Severity)

### 🔴 Critical — Security Advisory Cluster

| # | Description | Fix Available? |
|---|---|---|
| [#4865](https://github.com/nearai/ironclaw/issues/4865) | Shell approval boundary bypass via `env /bin/sh -c` transparent wrapper | No PR yet |
| [#4864](https://github.com/nearai/ironclaw/issues/4864) | Wrapper-prefixed destructive commands inherit prior auto-approval | No PR yet |
| [#4863](https://github.com/nearai/ironclaw/issues/4863) | High-risk commands misclassified after shell is auto-approved when wrapped through transparent dispatchers | No PR yet |
| [#4862](https://github.com/nearai/ironclaw/issues/4862) | GNU `sort --compress-program` delegates to arbitrary executables, bypassing low-risk classification | No PR yet |
| [#4861](https://github.com/nearai/ironclaw/issues/4861) | Newline-chained destructive commands evade single-line risk classifier | No PR yet |
| [#4797](https://github.com/nearai/ironclaw/issues/4797) | `write_file` sandbox escape via dangling final symlink | No PR yet |

**Analysis**: These six advisories (all from the same reporter on the same day) point to a systemic root cause: the shell tool's risk classifier operates on the textual prefix/command name and is trivially bypassed by `env`, shell builtins, compression delegates, and newlines. The maintainers should treat this as a single meta-tracking issue with the shell approval risk classifier as the fix target. **No fixes have been merged or PR'd for any of these.**

### 🟠 High — Approval & Auth UX Gaps

| # | Description | Fix Available? |
|---|---|---|
| [#4840](https://github.com/nearai/ironclaw/pull/4840) | Missing-credential gate fires *after* approval, burning the approval | [PR #4840](https://github.com/nearai/ironclaw/pull/4840) (open, fix surfaced before approval gate) |
| [#4849](https://github.com/nearai/ironclaw/issues/4849) | Approval leases orphaned in `Dispatching` state after mid-dispatch crash | No PR; TTL/sweep mechanism proposed |
| [#4854](https://github.com/nearai/ironclaw/issues/4854) | Simple GitHub Extension read-only requests require multiple approval prompts | No PR |

### 🟡 Medium — Reborn WebUI / Rendering

| # | Description | Fix Available? |
|---|---|---|
| [#4751](https://github.com/nearai/ironclaw/issues/4751) [CLOSED] | Large response fails: provider tool arguments exceed 16384 bytes | Fixed (merged) |
| [#4874](https://github.com/nearai/ironclaw/issues/4874) | WebChat v2 "Illegal invocation" over plain HTTP (non-localhost) | No PR |
| [#4870](https://github.com/nearai/ironclaw/issues/4870) | WebSocket helper conflicts with v2 auth contract (query-token rejected) | No PR |
| [#4872](https://github.com/nearai/ironclaw/issues/4872) | Runtime-context comm labels rendered as instruction text, not escaped untrusted data | No PR |
| [#4868](https://github.com/nearai/ironclaw/issues/4868) | Settings provider actions clip offscreen on mobile viewport | No PR |
| [#4856](https://github.com/nearai/ironclaw/issues/4856) | Keyboard/screen-reader/mobile accessibility brittleness in dialogs and command palette | No PR |
| [#4855](https://github.com/nearai/ironclaw/issues/4855) | zh-CN locale falls back to English in core first-run flows | No PR |
| [#4852](https://github.com/nearai/ironclaw/issues/4852) | Shell command body invisible in approval dialog & Activity history | No PR |
| [#4857](https://github.com/nearai/ironclaw/issues/4857) | Clean state incorrectly shows NEAR AI provider as Active in Settings → Inference | No PR |
| [#4853](https://github.com/nearai/ironclaw/issues/4853) | Tool Activity disappears after completion in Railway / multi-tenant deployments | No PR |

### 🟢 Low — Cosmetic & Docs

| # | Description | Fix Available? |
|---|---|---|
| [#4707](https://github.com/nearai/ironclaw/issues/4707) [CLOSED] | Conversation page font size too small | Fixed (merged) |
| [#4708](https://github.com/nearai/ironclaw/issues/4708) [CLOSED] | Code blocks lack syntax highlighting in conversation page | Fixed (merged) |
| [#3515](https://github.com/nearai/ironclaw/issues/3515) [CLOSED] | Missing WeChat channel docs | Docs added |

---

## 6. Feature Requests & Roadmap Signals

**Likely candidates for the next release cycle (0.29.x or 0.30.0):**

1. **Image attachment support for vision-capable models** — [Issue #4644](https://github.com/nearai/ironclaw/issues/4644) + [PR #4871](https://github.com/nearai/ironclaw/pull/4871) (open). This is a direct follow-on to the merged #4738 and is already in PR. Images currently land as text pointers; pixels are never sent to the model.

2. **Slack as a Product-Adapter extension** — [PR #4778](https://github.com/nearai/ironclaw/pull/4778) (open, XL). Decouples Slack from the hardcoded built-in channel list, allowing it to be lifecycle-managed via extension APIs. Signals a broader "channel-as-extension" architecture direction.

3. **Reborn failure explanation + retryable failed runs** — [PR #4841](https://github.com/nearai/ironclaw/pull/4841) (open, XL). Makes every run-terminal error either recoverable or explicitly explained with a recovery path. Eliminates "run-borking" opaque exits.

4. **Gated final-answer nudge for empty/canned turn endings** — [PR #4837](https://github.com/nearai/ironclaw/pull/4878) (open). When the agent would end a turn with no real answer, issues one extra tool-free model call to recover.

5. **"Always allow" approval persistence across threads** — [PR #4835](https://github.com/nearai/ironclaw/pull/4835) (open). Strips `thread_id` from the persistent approval scope so approvals carry across a user's threads.

6. **Busy-thread rejection with explicit notice** — [PR #4838](https://github.com/nearai/ironclaw/pull/4838) (open, XL). Replaces the defer-and-drain approach; messages arriving while a run holds the thread are explicitly rejected.

7. **Explicit runtime-context provider wiring for Production** — [Issue #4877](https://github.com/nearai/ironclaw/issues/4877) (open). Currently only wired for local-dev.

---

## 7. User Feedback Summary

| Pain Point | Signal |
|---|---|
| **Approval UX is confusing and leaky** | Users approve actions that then fail on missing credentials (#4840), or approve once and are prompted again (#4854). The "always allow" scoping across threads is also a recurring concern (#4835) |
| **Shell tool is dangerously promiscuous** | Six security advisories concur: the shell approval classifier is trivially bypassed by any user who knows `env sh -c` or newline chaining. Real operators are requesting either a full command parse or a policy-level deny-by-default |
| **Reborn first-run experience has mobile/accessibility gaps** | Dialog clipping (#4868), WCAG brittleness (#4855), partial i18n (#4855), and an incorrect "ACTIVE" provider on clean state (#4857) all erode trust during onboarding |
| **Attachment pipeline was fragmented** | Users expected "attach a file and the agent sees it" to work uniformly across channels. The piecemeal fix across PRs #4738, #4871, and #4738 confirms this was a known gap |
| **Multi-tenant / Railway deployments have UX regressions** | Tool Activity disappearing after completion (#4853) is specific to multi-tenant hosted setups, suggesting the Activity event stream has a delivery or persistence issue outside of single-user local dev |

---

## 8. Backlog Watch

These items are important but have been open without resolution for a notable period:

| Age | Item | Note |
|---|---|---|
| **5 days** | [#4692](https://github.com/nearai/ironclaw/issues/4692) — Reborn Local Dogfooding Findings 06/08–06/16 | Living issue aggregating first-run local UX problems; feeds into #4852, #4856, #4857, #4868. Still accumulating. |
| **6 days** | [#4644](https://github.com/nearai/ironclaw/issues/4644) — Universal attachments across all channels | P1, but split across multiple PRs. Full closure requires #4738 (merged), #4871 (open, images), and [PR #4778](https://github.com/nearai/ironclaw/pull/4778) for Slack-channel parity. |
| **12 days** | [#4588](https://github.com/nearai/ironclaw/pull/4588) — Reborn observability seams (trajectory observer + LLM provider injection) | Open PR; enables external benchmarking tools. Stacked/soft-blocked on other Reborn PRs. |
| **30+ days** | [#3708](https://github.com/nearai/ironclaw/pull/3708) — Release PR (v0.24.0 → 0.29.1) | Automated release PR has been open since May 16. Contains breaking API changes in `ironclaw_common` and `ironclaw_skills`. Needs manual intervention or closure. |
| **30+ days** | [#4797](https://github.com/nearai/ironclaw/issues/4797) — `write_file` sandbox escape via dangling symlink | Security issue open for 3 days now; no fix PR yet. |

**Key concern**: The cluster of 6 shell-tool security advisories (§5) went from zero to six in a single day. If no PR is opened within the next 48 hours, the maintainers should open a meta-tracking issue and triage the shell risk classifier as a single systemic fix rather than patching each bypass individually.

---

*Data snapshot: 2026-06-14 / 2026-06-15 | Source: [github.com/nearai/ironclaw](https://github.com/nearai/ironclaw)*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

**LobsterAI Project Digest — 2026-06-15**

---

### 1. Today's Overview

LobsterAI remains in a **maintenance and incremental improvement phase** with no new releases in the past 24 hours. Activity is moderate: 2 open issues (both stale, last touched June 14) and 4 pull requests (3 open, 1 merged/closed). Notably, several stale PRs from April have been recently updated despite being opened over two months ago, indicating some maintainers are cycling back to older contributions. The project shows steady but slow progression, with a healthy focus on UX polish, session reliability, and the Cowork collaboration feature set.

---

### 2. Releases

**None.** No new versions were published in the reporting period.

---

### 3. Project Progress

One PR has been closed (merged) since the last 24-hour window began:

- **[PR #1465 [CLOSED/MERGED]](https://github.com/netease-youdao/LobsterAI/pull/1465)** — `fix(scheduled-tasks): 已删除的定时任务重启后作为幽灵会话重新出现` by @linlihua. This fixes a data-cleanup gap in scheduled/cron task deletion: previously, removing a task only called `cron.remove` on the OpenClaw gateway side but left the local SQLite `cowork_sessions` entry intact, causing deleted tasks to reappear as "ghost sessions" after app restart. The fix ensures the local session record is cleaned up during deletion. *(Related Issue: #1359)*

Three open PRs remain under active development and have all been updated on June 14, signaling renewed contributor engagement:

- **[PR #1429 [OPEN]](https://github.com/netease-youdao/LobsterAI/pull/1429)** — `feat(cowork): add in-session message search with mark.js highlighting` by @noransu.
- **[PR #1430 [OPEN]](https://github.com/netease-youdao/LobsterAI/pull/1430)** — `feat(cowork): 会话运行期间自动阻止系统休眠` by @choyuenga.
- **[PR #1431 [OPEN]](https://github.com/netease-youdao/LobsterAI/pull/1431)** — `feat(cowork): StreamingActivityBar 右侧显示会话运行计时器` by @choyuenga.

All three target the **Cowork** feature and collectively aim to improve session productivity (search), reliability (anti-sleep), and UX transparency (runtime timer).

---

### 4. Community Hot Topics

| Rank | Issue / PR | Author | Comments | 👍 | Key Signal |
|------|-----------|--------|----------|-----|------------|
| 1 | [Issue #1434](https://github.com/netease-youdao/LobsterAI/issues/1434) | @xuzx-code | 1 | 0 | i18n/zh localization gap in Skills tab |
| 2 | [Issue #1435](https://github.com/netease-youdao/LobsterAI/issues/1435) | @xuzx-code | 1 | 0 | Custom agent name overflows modal |
| 3 | [PR #1465 (merged)](https://github.com/netease-youdao/LobsterAI/pull/1465) | @linlihua | — | 0 | Cron ghost sessions — data integrity fix |

**Analysis:** The most pressing community needs center on **(1) Chinese language support completeness** — users expect a fully localized UI when the agent language is set to Chinese, but the Skills tab's empty-state prompts default to English, indicating an i18n lookup gap or a missing locale key for the "no results" state. **(2) Chinese users are an important user base** — both issues were filed by the same user within minutes on April 3, suggesting a Chinese-speaking user segment that currently feels underserved. The merged PR #1465 addresses the most consequential technical issue (ghost sessions), which had been live since at least January (Issue #1359).

---

### 5. Bugs & Stability

| Severity | Issue / PR | Description | Fix Status |
|----------|-----------|-------------|------------|
| **Medium** | [Issue #1434](https://github.com/netease-youdao/LobsterAI/issues/1434) | Skills tab shows English empty-state text & buttons when agent language is Chinese | Open, stale — no fix PR yet |
| **Low** | [Issue #1435](https://github.com/netease-youdao/LobsterAI/issues/1435) | Custom agent name too long causes text to overflow modal boundary | Open, stale — no fix PR yet |
| **High (Resolved)** | [PR #1465 → #1359](https://github.com/netease-youdao/LobsterAI/issues/1359) | Deleted cron/schedule tasks reappear as ghost sessions after restart | ✅ Fixed & merged |

**Stability assessment:** No crashes or regressions were reported in the last 24 hours. The ghost-session bug (Issue #1359, fixed in PR #1465) was the most significant stability concern — a data-integrity defect that could confuse users and clutter the session list. The two remaining IQ/UX bugs are low-stability-risk but high-visibility for Chinese-language users.

---

### 6. Feature Requests & Roadmap Signals

| Signal | Source | Likelihood | Rationale |
|--------|--------|------------|-----------|
| Cowork in-session search | PR #1429 | **High** — likely next minor release | PR is open, functional, uses mark.js for highlighting, handles session switching correctly. |
| Power-save blocker for running sessions | PR #1430 | **High** — likely next minor release | Addresses a clear reliability gap (session interruption on sleep). Uses standard Electron API. Low risk. |
| Session runtime timer in StreamingActivityBar | PR #1431 | **Medium** — good UX parity with Claude Code | Co-dependent or complementary with PR #1430 (both by @choyuenga). |
| Improved i18n for Chinese locale | Issue #1434 | **Medium-High** — addresses vocal user segment | The issue has no fix PR yet but is a straightforward locale-key fix that aligns with Netease-YouDao's Chinese-market focus. |

**Predicted next release scope (vNext):** A **Cowork-focused update** bundling PR #1429 (search), #1430 (anti-sleep), #1431 (timer), plus a targeted i18n fix for Issue #1434. The project appears to be layering productivity and reliability features into Cowork ahead of a wider release.

---

### 7. User Feedback Summary

- **Pain point — Ghost sessions from deleted cron tasks** *(resolved).* Users found it deeply confusing that reappeared ghost sessions showed empty content with no connection to the original task. This was a significant trust issue — fixed via PR #1465.
- **Pain point — Incomplete Chinese localization.** A Chinese-language user reports that switching the agent language to Chinese still yields English UI elements in the Skills tab's empty state. This signals that LobsterAI's i18n coverage is incomplete for what is likely its primary market (Chinese-speaking users). Reference: [Issue #1434](https://github.com/netease-youdao/LobsterAI/issues/1434).
- **Pain point — Name length UX in custom agent creation.** Long agent names break the modal layout, suggesting no `text-overflow: ellipsis` or character-limit validation is applied. Reference: [Issue #1435](https://github.com/netease-youdao/LobsterAI/issues/1435).
- **Emerging use case — Long-running autonomous tasks.** PR #1430's existence (anti-sleep during sessions) confirms that users are giving LobsterAI long-running jobs and expecting them to complete uninterrupted — a sign of increasing trust and production-level usage.

---

### 8. Backlog Watch

The following items have been open for **2+ months with no resolution** and warrant maintainer attention:

| Item | Age | Why It Matters |
|------|-----|----------------|
| [Issue #1434](https://github.com/netease-youdao/LobsterAI/issues/1434) — i18n Chinese locale gap in Skills tab | ~10 weeks | Chinese is likely LobsterAI's primary locale (Netease-YouDao origin). Mixed-language UI undermines user confidence and professionalism. |
| [Issue #1435](https://github.com/netease-youdao/LobsterAI/issues/1435) — Custom agent name overflows modal | ~10 weeks | Simple CSS/validation fix; trivial to resolve but degrades perceived quality. |
| [PR #1429](https://github.com/netease-youdao/LobsterAI/pull/1429) — In-session message search | ~10 weeks | Functional PR, ready for review. Delaying merge blocks a high-value Cowork feature. |
| [PR #1430](https://github.com/netaude-youdao/LobsterAI/pull/1430) — Anti-power-save during sessions | ~10 weeks | Functional PR addressing a reliability concern for long-running tasks. Low-risk Electron API usage. |
| [PR #1431](https://github.com/netease-youdao/LobsterAI/pull/1431) — Session runtime timer | ~10 weeks | Small, self-contained UX improvement. Likely reviewable quickly. |

**Recommendation:** The three stale Cowork PRs (#1429, #1430, #1431) represent a cohesive feature bundle that should be reviewed together. The two i18n/UI issues (#1434, #1435) are low-effort fixes that would disproportionately affect Chinese user satisfaction. If bandwidth is limited, merging PR #1430 (anti-sleep) should be prioritized since it addresses a real reliability failure mode.

---

*Data sourced from GitHub: [github.com/netease-youdao/LobsterAI](https://github.com/netease-youdao/LobsterAI) — snapshot 2026-06-15.*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-01-16

---

## 1. Today's Overview

Moltis begins today with moderate but focused maintenance activity. Two open pull requests landed from the previous day — one Docker deployment fix and one routine dependency bump — both awaiting reviewer attention. A single enhancement issue was filed proposing a pure-Rust `turbovec` memory backend for extreme edge compression, signaling continued community interest in squeezing performance out of resource-constrained environments. No PRs were merged and no releases shipped in the last 24 hours, indicating activity is currently stalled in a review/waiting state. Overall, the project is in a holding pattern with meaningful pending contributions that need maintainer bandwidth to move forward.

---

## 2. Releases

No new releases were published in the last 24 hours. The latest published version remains the most recent existing release on the repository.

---

## 3. Project Progress

No pull requests were merged or closed today. The following PRs remain open and represent the nearest-landable improvements:

| PR | Title | Authors | Focus |
|---|---|---|---|
| [#1122](https://github.com/moltis-org/moltis/pull/1122) | fix: drop VOLUME declarations that shadow the home bind mount | sayotte | Docker deployment correctness |
| [#1121](https://github.com/moltis-org/moltis/pull/1121) | chore(deps-dev): bump esbuild 0.25.12 → 0.28.1 | dependabot[bot] | Build toolchain |

Both were opened on 2026-01-15 (yesterday) and neither has received a review or maintainer comment yet.

---

## 4. Community Hot Topics

Today's activity is sparse in terms of engagement; no issues or PRs have accumulated comments or reactions yet. However, two items are worth watching for potential traction:

- **[#1123](https://github.com/moltis-org/moltis/issues/1123)** — *Feature: Add pure-Rust turbovec as an alternative memory backend for extreme edge compression* (author: `joeblew999`, 🗓 2026-01-14, 👍 0, 💬 0): This enhancement surfaces a real architectural signal. Users targeting edge deployments are hitting memory constraints and are asking for a Rust-native `turbovec`-based backend as an alternative to the current memory management approach. The ask implies that the Python or default backend introduces unacceptable overhead for certain low-resource scenarios — a concern that will likely recur as Moltis is deployed in embedded or WASM-adjacent contexts.

- **[#1122](https://github.com/moltis-org/moltis/pull/1122)** — The Docker `VOLUME`-shadowing fix, while small, touches a class of issue that silently breaks production deployments (bind mounts yielding empty directories or cache corruption). This PR may attract attention from anyone running Moltis in Docker-compose bind-mount setups.

No item has generated meaningful engagement (comments/reactions = 0 across the board), so today's hot topics are anticipatory rather than emergent.

---

## 5. Bugs & Stability

- **[PR #1122](https://github.com/moltis-org/moltis/pull/1122)** — Docker `VOLUME` declarations shadowing home bind mounts. **Severity: Medium.** When a user bind-mounts the entire `$HOME` directory (e.g., `./moltis-home:/home/moltis`), the Dockerfile `VOLUME` directives for subpaths like `/home/moltis/.config/moltis` can silently shadow the bind mount, causing configuration or state data to live in the anonymous Docker volume instead of the host path. This is a data-loss risk in persistent-deployment setups. A fix PR already exists and is awaiting merge.

No crashes, regressions, or regressions-in-progress were reported today.

---

## 6. Feature Requests & Roadmap Signals

- **[#1123](https://github.com/moltis-org/moltis/issues/1123)** — Pure-Rust `turbovec` as an alternative edge-compression memory backend. This is a non-trivial architectural ask that would involve either an extension to the existing memory management crate or a new optional feature flag. Given that Moltis advertises edge capabilities, this aligns with a likely strategic direction: leaner footprints, fewer interpreter dependencies, better deterministic memory behavior. **Probability of inclusion in a near-term release:** medium-low (requires significant implementation effort), but **probability of being acknowledged as a roadmap item:** high, given its alignment with the project's edge-compute positioning.

- **esbuild bump to 0.28.1** ([#1121](https://github.com/moltis-org/moltis/pull/1121)): Routine toolchain maintenance. esbuild 0.28.x includes faster incremental builds and better tree-shaking. Low drama, high merge probability — likely next patch release material.

---

## 7. User Feedback Summary

Today's feedback is minimal but directionally informative:

- **Pain point deployment correctness** — PR #1122 reveals that Docker users relying on bind mounts for persistent state silently hit a correctness bug where VOLUME declarations hijack their mount points. This is a "it-works-until-it-doesn't" issue that erodes confidence in production reproducibility.
- **Desire for less overhead, more Rust** — Issue #1123 signals that a segment of the user base cares deeply about memory control at the edge. The ask for `toltrees`'s `turbovec` specifically shows users are already benchmarking alternatives and bringing proposals, not just complaints.
- **Satisfaction**: No negative sentiment beyond normal friction. No issues requesting features that were recently denied or expressing frustration with response times. The baseline attitude is constructive.

---

## 8. Backlog Watch

Today's two PRs and one issue have all been open for less than 24–48 hours and are not yet overdue for attention. However, a quick triage note:

- **PR #1122** (`VOLUME` fix) is a targeted correctness patch with a clear reproduction case. It should be the lowest-effort, highest-confidence merge of the batch. Recommend prioritizing review for stability posture.
- **PR #1121** (esbuild bump) is auto-generated by Dependabot and is non-controversial. If CI passes, it can be merged on autopilot.
- **Issue #1123** (turbovec backend) will need a maintainer to provide architectural guidance — is this an optional backend behind a feature flag, or a full replacement? An early signal from maintainers on feasibility would focus discussion and prevent wasted contributor effort.

No long-unanswered backlog items surfaced in today's data slice.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-06-15

## 1. Today's Overview

CoPaw (agentscope-ai/CoPaw) exhibits healthy mid-cycle activity with **8 issues** and **7 pull requests** updated in the past 24 hours. All 7 PRs remain open and unmerged, suggesting either a review backlog or that contributors are still iterating. No new releases were published today. A single issue (#5172) was closed, indicating some triage progress. The project is community-driven with multiple first-time contributors submitting PRs, which is a positive signal for ecosystem growth. However, several bug reports from the latest v1.1.11.post2 release point to regressions that may warrant urgent attention.

---

## 2. Releases

**None.** No new releases were published on or around 2026-06-15. The latest known version remains **v1.1.11.post2**.

---

## 3. Project Progress

No PRs or issues were merged or closed today (aside from a single issue closure). The following **open PRs** are advancing key areas:

| # | PR | Author | Significance |
|---|---|---|---|
| [5187](https://github.com/agentscope-ai/CoPaw/pull/5187) | feat(computer-use): Windows desktop GUI automation with UIA + Tauri control mode | jinglinpeng | Major new capability — enables agent-driven Windows desktop automation (screenshot, UIA describe, click/type/scroll/drag, app launch) with a Tauri user-control overlay. Aims to rival OpenClaw's computer use features. |
| [5186](https://github.com/agentscope-ai/CoPaw/pull/5186) | feat(console): complete Vietnamese (vi) locale (supercedes #5175) | biencuong | Full Vietnamese UI translation covering all 40 console sections — improves accessibility for Vietnamese-speaking users. |
| [5180](https://github.com/agentscope-ai/CoPaw/pull/5180) | fix(crons): increase cron/heartbeat timeout + add autonomous context prompt | nguyenthanhthe | Addresses silent failures in scheduled/heartbeat tasks by raising the default 120s timeout and injecting autonomous-context instructions. |
| [5179](https://github.com/agentscope-ai/CoPaw/pull/5179) | fix(skills): expand multi-agent collaboration skill trigger keywords | nguyenthanhthe | Fixes recognition of "团队协作" instructions so the multi-agent skill fires on first attempt. |
| [5178](https://github.com/agentscope-ai/CoPaw/pull/5178) | feat(console): session filter by title (#4999) | nguyenthanhthe | Adds title-based session search to the console, improving navigation for users with many sessions. |
| [5176](https://github.com/agentscope-ai/CoPaw/pull/5176) | fix(console): wrap approval command text with word-break (#4985) | nguyenthanhthe | UI fix preventing horizontal overflow in approval dialog `<pre>` blocks. |

---

## 4. Community Hot Topics

**🔥 Issue [#5156](https://github.com/agentscope-ai/CoPaw/issues/5156)** — *"Add kimi-for-coding / uv whitelist"* (5 comments, created 2026-06-12, active across 3 days)
- **Underlying need**: Users who subscribe to Kimi coding plans want to bring their own model providers into CoPaw rather than being limited to official API integrations. This reflects a broader demand for **model-agnostic provider flexibility** — similar to how OpenRouter or custom Ollama endpoints are increasingly expected in agent frameworks. The 5 comments suggest active community discussion.

**📝 Issue [#5184](https://github.com/agentscope-ai/CoPaw/issues/5184)** — *"Local model providers not showing in v1.1.11.post2"* (2 comments)
- A direct regression complaint about a feature introduced in v1.1.11 that is now broken in the post2 patch, undermining local model support trust.

**💬 Issue [#5181](https://github.com/agentscope-ai/CoPaw/issues/5181)** — *"Plugin dependency install causes cmd window spam"* (1 comment)
- Indicates that the plugin system has a UX regression on Windows with poor subprocess window management.

---

## 5. Bugs & Stability

Bugs ranked by severity:

### 🔴 High — Regressions in v1.1.11.post2

| Issue | Description | Fix PR? |
|---|---|---|
| [#5184](https://github.com/agentscope-ai/CoPaw/issues/5184) | **Local model providers disappeared** after upgrading to v1.1.11.post2 — a feature introduced in the prior point release is now broken. Directly impacts users running local LLMs. | ❌ None |
| [#5181](https://github.com/agentscope-ai/CoPaw/issues/5181) | **cmd.exe window spam** on plugin install failure — when PyPI is unreachable, pip retries loop endlessly with visible console windows. Degrades UX severely on Windows. | ❌ None |

### 🟠 Medium — Functional Issues

| Issue | Description | Fix PR? |
|---|---|---|
| [#5177](https://github.com/agentscope-ai/CoPaw/issues/5177) | **DingTalk sessions missing from chats.json** — agent responds correctly but the session doesn't appear in the console frontend, breaking multi-channel UX consistency. | ❌ None |
| [#5183](https://github.com/agentscope-ai/CoPaw/issues/5183) | **Pet feature broken on Wayland** (Niri WM specific) — limited to Linux users on Wayland compositors, but blocks a core engagement feature for that segment. | ❌ None |

### 🟢 Low — UX/Ergonomics

| Issue | Description | Fix PR? |
|---|---|---|
| [#5185](https://github.com/agentscope-ai/CoPaw/issues/5185) | Agent lacks real-time HH:MM:SS timestamps in context, forcing extra tool calls. | ❌ None |

### ⚠️ Closed (Resolved)

| Issue | Description |
|---|---|
| [#5172](https://github.com/agentscope-ai/CoPaw/issues/5172) | *"Chat hangs indefinitely after idle period"* — Reported a critical agent hang after conversation resume, but closed without visible resolution or linked PR. Should be monitored for recurrence. |

---

## 6. Feature Requests & Roadmap Signals

| Feature | Issue | Likelihood in Next Release | Rationale |
|---|---|---|---|
| **Kimi-for-coding / BYO model provider support** | [#5156](https://github.com/agentscope-ai/CoPaw/issues/5156) | ⭐⭐⭐ Moderate | High user value; the feature request has active discussion. The PR #5187 (computer-use) suggests the team is focused on major features, but this is a relatively scoped whitelist addition. |
| **Unified model config (type-aware: text, vector, audio/video)** | [#5182](https://github.com/agentscope-ai/CoPaw/issues/5182) | ⭐⭐ Long-term | Architectural refactor; low urgency but aligns with supporting more modalities. |
| **Real-time timestamp in agent context** | [#5185](https://github.com/agentscope-ai/CoPaw/issues/5185) | ⭐⭐ Low-Moderate | Minor quality-of-life improvement; could be bundled into a future patch. |
| **Computer-use (Windows UIA automation)** | [PR #5187](https://github.com/agentscope-ai/CoPaw/pull/5187) | ⭐⭐⭐⭐ High (contributor-driven) | Already has a substantial PR in progress; likely to land relatively soon if review passes. |
| **Cron/heartbeat timeout increase + autonomous prompt** | [PR #5180](https://github.com/agentscope-ai/CoPaw/pull/5180) | ⭐⭐⭐⭐ Moderate-High | Simple, well-scoped fix addressing silent failures in scheduled tasks. |

**Prediction**: The next release (likely v1.1.12 or v1.1.11.post3) will probably prioritize regression fixes for local model providers (#5184) and cmd window spam (#5181), given that both directly affect stability for existing users. The cron timeout fix (#5180) is a strong candidate for a quick merge as well.

---

## 7. User Feedback Summary

**Pain Points:**
- **Windows plugin experience is broken**: The pip install loop with visible cmd windows (#5181) is a significant regression that makes the platform feel unstable on Windows.
- **Local model support is inconsistent**: The feature was introduced in v1.1.11 but is already broken in post2 (#5184), eroding trust for users who rely on self-hosted models.
- **Wayland compatibility is an afterthought**: Pet features failing on Niri/Wayland (#5183) suggests insufficient testing on non-X11 Linux environments.
- **Multi-channel parity gaps**: DingTalk works functionally but doesn't register in the console (#5177), meaning the unified inbox promise isn't fully delivered.
- **Agent hangs after idle**: The closed issue #5172 described a critical hang that makes the agent unusable for messaging integrations (QQ/WeChat) where there's no "stop" button — this needs verification that it's truly resolved.

**Satisfaction Signals:**
- Active first-time contributors (nguyenthanhthe with 4 PRs, biencuong) indicate a welcoming and accessible contribution process.
- The computer-use PR (#5187) shows ambitious feature development that could differentiate CoPaw in the agent framework space.
- Vietnamese localization efforts (#5186, #5175) show international community engagement.

---

## 8. Backlog Watch

The following items need maintainer attention:

| Item | Age / Status | Why It Matters |
|---|---|---|
| **[Issue #5156](https://github.com/agentscope-ai/CoPaw/issues/5156)** — Kimi-for-coding support | Created 2026-06-12, 5 comments, no maintainer response | Active community discussion with no official acknowledgment. A quick "we're considering this" or "PR welcome" would go a long way. |
| **[Issue #5184](https://github.com/agentscope-ai/CoPaw/issues/5184)** — Local model providers broken | Created 2026-06-14, regression in latest release | This is a **regression in the current release** with no linked fix. Should be triaged as high priority. |
| **[Issue #5181](https://github.com/agentscope-ai/CoPaw/issues/5181)** — cmd window spam | Created 2026-06-14, Windows UX regression | Affects all Windows users with plugin dependencies. The fix (hiding subprocess windows) is straightforward. |
| **[Issue #5177](https://github.com/agentscope-ai/CoPaw/issues/5177)** — DingTalk sessions invisible | Created 2026-06-14, no response | Multi-channel support is a core value proposition; this bug undermines it. |
| **[PR #5187](https://github.com/agentscope-ai/CoPaw/pull/5187)** — Computer-use feature | Open, no review comments | A major feature PR that needs architectural review. Risk of stalling without maintainer engagement. |
| **[Issue #5172](https://github.com/agentscope-ai/CoPaw/issues/5172)** — Agent hang after idle | Closed but unresolved | Closed without a linked fix or explanation. Should be reopened or confirmed fixed to prevent recurrence reports. |

---

*Data source: agentscope-ai/CoPaw GitHub repository. Digest generated for 2026-06-15. All links reference the agentscope-ai/CoPaw repository.*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-06-15

---

## 1. Today's Overview

ZeroClaw remains in a hyperactive development phase with no new releases today but extremely high signal across issues and PRs. In the last 24h, **41 issues were updated** (28 closed, 13 still open) and **50 PRs touched** (49 open, 1 closed/merged only), reflecting a project with massive contributor throughput but significant merge bottleneck. The signal-to-noise ratio is striking: many closed issues were community feature requests being triaged and closed or accepted in batch, while a large stack of open PRs — several XL-sized — await maintainer attention. The architecture-level RFC work (agent engine unification, work lane automation) appears to be entering implementation, which suggests the 0.80 cycle is carrying substantial internal refactoring alongside user-facing channel and provider additions. **Overall health: active community, high backlog pressure on maintainers.**

---

## 2. Releases

**None.** No new releases were published today. The project appears to be mid-cycle building toward what appears (from RFC #6808) to be a planned **0.80-beta1**.

---

## 3. Project Progress

Only **1 PR was merged/closed** in the 24h window:

- **[PR #7566 (MERGED)](https://github.com/zeroclaw-labs/zeroclaw/pull/7566)** — `fix(config): redact bearer tokens in file-transfer header maps`. This is a **P1 security fix**: `file_upload_bundle.headers` and `file_download.headers` were storing `Authorization: Bearer …` values in plaintext, visible in config display/readback. Merged quickly with no comments, suggesting it was an obvious security win.

The "closed" issues (28 total) were overwhelmingly **feature requests accepted, triaged, and then closed** — likely a label/batch cleanup rather than implementation-complete closures. Notable batch-closed patterns:
- **~15 "integration tool" requests** (#6477 Sonos, #6476 Shazam, #6475 Spotify, #6450 8Sleep, #6449 Hue) all closed as accepted with identical P2/high labels — these appear to be **bulk-accepted feature trackers** being consolidated into a roadmap.
- **~5 new-provider additions** (#6454 Upstage, #6455 Featherless, #6456 Arcee AI, #6457 Lambda, #6458 Inception Labs) similarly accepted and closed — the provider expansion strategy is clearly "add everyone with an OpenAI-compatible endpoint."
- **~4 SMS channel additions** (#6451 Telnyx, #6452 Sinch, #6453 Plivo, #6494 Vonage) batch-accepted.

This pattern indicates the maintainers are doing **triage sweeps** to clear stale open issues into an accepted/roadmap state rather than leaving them open indefinitely — good hygiene, but the actual implementation PRs may still be pending.

**Open PRs worth noting as near-ready or architecturally large:**
| PR | Area | Size | Description |
|---|---|---|---|
| [#7665](https://github.com/zeroclaw-labs/zeroclaw/pull/7665) | Web UI | XL | **Operator Console redesign** — complete ground-up web console overhaul with schema-driven config, multi-agent chat, and ported fixes. Created today, likely stacked on several others. |
| [#7594](https://github.com/zeroclaw-labs/zeroclaw/pull/7594) | Config | XL | **Type-driven alias-ref pickers** — eliminates hardcoded per-path config special-casing. Internal representation refactor. |
| [#7492](https://github.com/zeroclaw-labs/zeroclaw/pull/7492) | Provider/Cost | XL | **Cached input token pricing** — parses `prompt_tokens_details.cached_tokens` (OpenAI) and `prompt_cache_hit_tokens` (DeepSeek) to correctly bill cached tokens. |
| [#7490](https://github.com/zeroclaw-labs/zeroclaw/pull/7490) | Discord | XL | **Dynamic slash commands from installed skills** — skills with a `slash` tag manifest become individual Discord commands. Stacked on #7489. |
| [#7489](https://github.com/zeroclaw-labs/zeroclaw/pull/7489) | Discord | L | **Slash commands over existing Gateway WebSocket** — no new public HTTPS ingress needed. Registers global `/ask` command. |
| [#6893](https://github.com/zeroclaw-labs/zeroclaw/pull/6893) | Infra | XL | **Multi-database session backends** — PostgreSQL, Oracle 23ai, IBM Db2, MySQL for multi-agent fleet session sharing. |
| [#7485](https://github.com/zeroclaw-labs/zeroclaw/pull/7485) | Doctor/Config | S | Fix for custom model providers falsely reported as invalid by Doctor. |

---

## 4. Community Hot Topics

### RFC: Work Lanes, Board Automation, and Label Cleanup — [#6808](https://github.com/zeroclaw-labs/zeroclaw/issues/6808)
**11 comments, in RFC** | The most-discussed active issue. Proposes lightweight PR routing lanes, board-owned issue labels, and automated label cleanup to reduce maintainer overhead. **Underlying need:** With 50 open PRs and hundreds of issues, the project has scaled past what manual label management can handle. This is a meta-infrastructure RFC about managing the project's own growth.

### Delegate Agentic Mode Issues — [#7470](https://github.com/zeroclaw-labs/zeroclaw/issues/7470)
**7 comments, P1, in-progress** | Two coupled bugs: (1) delegating to an agentic target fails when the target's `risk_profile.allowed_tools` is an empty array (is rejected as "nothing allowed"), and (2) same-profile gating blocks delegating to targets with stricter tool sets. **Underlying need:** Multi-agent setups where one agent triggers another agent's specialized tools (reviewer/research chains). This is a real workflow blocker for power users.

### Docker "Full" Image Request — [#3642](https://github.com/zeroclaw-labs/zeroclaw/issues/3642)
**13 comments (highest in the set), but CLOSED** | Request for a Docker image with all feature flags enabled (WhatsApp, etc.) to lower barrier of entry. Closed as accepted/blocked. **Underlying need:** Non-technical users can't easily compile with custom feature flags. The related **[PR #7534](https://github.com/zeroclaw-labs/zeroclaw/pull/7534)** (fixing missing `g++` in Docker web build) is still open and unreviewed — a small fix that would unblock Docker builds for many users.

### Operator Console Redesign — [PR #7665](https://github.com/zeroclaw-labs/zeroclaw/pull/7665)
Fresh PR created today. Full web console redesign with schema-driven config editor, multi-agent chat view, and visual design system. **Underlying need:** The current web UI is described as a "thin shell over the config API with navigation dead-ends and no visual language" — a significant UX gap for operators who need to visually manage complex multi-channel, multi-agent configurations.

### Sonification of `show_tool_calls` Config — [#6856](https://github.com/zeroclaw-labs/zeroclaw/issues/6856)
**5 comments, open** | The `[channel]` config section is missing the `show_tool_calls` option that existed in schema v2, causing tool call details to disappear in schema v3 responses. **Underlying need:** Regression from config schema migration — users who relied on seeing tool call details in channel responses (Slack, Discord, etc.) lost this visibility.

---

## 5. Bugs & Stability

| Severity | Issue | Status | Fix PR? |
|---|---|---|---|
| **P1 / S1** | [#7470](https://github.com/zeroclaw-labs/zeroclaw/wiki/Issue-7470) Delegate agentic mode rejects empty `allowed_tools` and blocks stricter delegated targets | In-progress | No PR linked yet; actively discussed |
| **P1 / S0→S1** | [#5528](https://github.com/zeroclaw-labs/zeroclaw/issues/5528) Improper email channel config logic (data loss / security risk) | Closed — accepted, fix likely in progress | Not linked in this data |
| **P1 / S1** | [#5527](https://github.com/zeroclaw-labs/zeroclaw/issues/5527) Gemini OAuth loadCodeAssist project context parsing fails | Closed — accepted | Not linked in data |
| **P1** | [#5662](https://github.com/zeroclaw-labs/zeroclaw/issues/5662) QQ channel voice messages processed multiple times → duplicate brain.db entries | In-progress | No PR linked |
| **P2** | [#6856](https://github.com/zeroclaw-labs/zeroclaw/issues/6856) `show_tool_calls` missing from `[channel]` section | In-progress | No PR linked |
| **P2** | [#1458](https://github.com/zeroclaw-labs/zeroclaw/issues/1458) No support for local CA certificates on custom inference endpoints | Closed — accepted | Not linked |
| **P2** | [#6474](https://github.com/zeroclaw-labs/zeroclaw/issues/6474) Single user request invokes LLM twice (oMLX / vLLM) | Closed — accepted | Not linked |
| **P2** | [#6847](https://github.com/zeroclaw-labs/zeroclaw/issues/6847) WhatsApp channel not showing QR code during onboarding | Closed — accepted | Not linked |

**Pattern:** Many P1 bugs involve **provider integrations** (Gemini, oMLX/vLLM, local inference) and **multi-agent delegation** — the two most complex surfaces of the project. The QQ channel duplicate message bug (#5662) has been open since April with only 2 comments, suggesting it's a tricky race condition or idempotency issue.

---

## 6. Feature Requests & Roadmap Signals

### Predicted for 0.80-beta1 (based on RFC #6808's "Starting: 0.80-beta1" and related triage):

1. **Work lanes & board automation** (#6808) — Governance/CI infrastructure, internal priority
2. **Agentic turn engine unification** — RFC [#7415](https://github.com/zeroclaw-labs/zeroclaw/issues/7415) is marked as executed (single consolidation PR directed by maintainers), so this architectural consolidation is likely already in-flight or nearly merged

### Predicted for post-0.80 (batch-accepted features building pipeline):

3. **New provider integrations** — Upstage Solar (#6454), Featherless AI (#6455), Arcee AI (#6456), Lambda (#6457), Inception Labs (#6458), DeepSeek/OAI-compatible — these are all OpenAI-compatible endpoint wrappers and represent low-effort, high-value additions. Likely to arrive in rapid succession.
4. **SMS channel expansion** — Telnyx, Plivo, Sinch, Vonage (#6451–#6494) — all share the same gateway-routed architecture as Twilio. The Twilio channel was merged first; the others follow the same pattern. Could be a single batch PR.
5. **Smart home tools** — Hue (#6449), 8Sleep (#6450), Sonos (#6477) — P2/high, grouped by a single author(`theonlyhennygod`), likely a unified "integrations push."
6. **Entertainment tools** — Spotify (#6475), Shazam (#6476) — same author, same acceptance wave.
7. **Cached token pricing** — PR #7492 is already open (XL, in-progress), parsing cached token fields for accurate cost tracking.
8. **Operator Console** — PR #7665 is a massive UI overhaul that will likely be a headline feature when merged.

### Wildcard / longer-term:
- **Multi-database session backends** (PR #6893) — enterprise-grade session persistence, clearly aimed at fleet deployments. When this lands, it signals a serious push toward team/enterprise use.
- **Zerocode ACP Bridge** (Issue #6823) — TUI-to-daemon bridge, suggesting a richer terminal experience is being designed.

---

## 7. User Feedback Summary

### Pain Points
- **Configuration complexity is the #1 complaint surface.** Issues about config round-trip loss (#7532), missing fields (#6856), serde defaults vs struct defaults misalignment (#7532), and provider alias nesting silently dropping fields (#7617) all point to a **configuration system straining under its own growth**. Users with locally-hosted models and custom inference providers are particularly frustrated (#1458, #7439/#7485).
- **Docker/build toolchain issues** for non-expert users (#3642, #7534) — missing g++ compilation errors, no full-feature Docker image.
- **Channel onboarding failures** — WhatsApp QR not rendering (#6847), email config producing security vulnerabilities (#5528), Discord missing features from v2→v3 migration (#6856).
- **Multi-agent delegation** is a recurring advanced-user pain point (#7470) — power users want agents to chain to other agents, but the risk profile gating is blocking practical use cases.

### Satisfaction Signals
- Multiple users ("theonlyhennygod" in particular) are doing **bulk, well-structured feature requests** — this pattern indicates a user who deeply understands the codebase architecture and is systematically filling gaps. The maintainers are accepting nearly everything this user submits.
- The Docker user (#6760) submitted working Docker compose configs back as documentation — a sign of a satisfied user giving back.
- P1 security fix PR #7566 was merged rapidly with zero comment friction, suggesting the security review process works well for clear-cut issues.

### Key Use Cases Driving Development
1. **Multi-agent fleets** (session sharing, delegation, cost tracking) — enterprise/team deployments
2. **SMS gateway coverage** — operators in Nordics (Sinch), APAC (Plivo), cost-sensitive US (Telnyx), EU (Vonage) need local SMS providers
3. **Smart home control** — Hue, Sonos, 8Sleep integrations for home automation operators
4. **Alternative LLM providers** — strong demand for non-US/Chinese providers (Korea's Upstage, GPU-cloud Lambda, specialized Arcee)

---

## 8. Backlog Watch — Items Needing Maintainer Attention

### High Priority: Open Issues With No Linked Fix

| Issue | Age | Status | Risk |
|---|---|---|---|
| [#7470](https://github.com/zeroclaw-labs/zeroclaw/issues/7470) Delegate agentic mode bugs | Jun 11 | In-progress, no PR linked | P1 S1 — blocks multi-agent workflows |
| [#5662](https://github.com/zeroclaw-labs/zeroclaw/issues/5662) QQ voice message duplication | Apr 12 | In-progress, no PR linked | Data integrity (brain.db corruption) |
| [#5842](https://github.com/zeroclaw-labs/zeroclaw/issues/5842) `extra_args` security validation for Codex CLI flags | Apr 17 | Accepted, no PR linked | Security surface — arbitrary CLI flag injection |

### PR Backlog: Stale or Unreviewed

| PR | Age | Description | Concern |
|---|---|---|---|
| [#7351](https://github.com/zeroclaw-labs/zeroclaw/pull/7351) | Jun 7 | MCP auto-reconnect on stale session | "needs-author-action" — likely blocked on contributor, but P1-equivalent reliability fix |
| [#6074](https://github.com/zeroclaw-labs/zeroclaw/issues/6074) | Apr 24 | Track 153 commits lost in bulk revert for recovery | Internal hygiene — bug fixes lost in a rollback that may not have been re-landed. Risk of silent regressions. |
| [#7534](https://github.com/zeroclaw-labs/zeroclaw/pull/7534) | Jun 12 | Fix Docker g++ build dependency | Simple, uncontroversial, would unblock Docker users — should be quick-merge |

### The Merge Queue Is a Concern
With **49 PRs open** and only **1 merged in 24h**, the project has a significant bottleneck. The pattern of bulk-closing issues as "accepted" without corresponding merged PRs creates an illusion of progress — the project is triaging faster than it can implement. The largest PRs (#7665 web console, #6893 multi-DB, #7492 cached pricing, #7490 Discord skill commands) are all XL-sized and will each require substantial review cycles. Maintainers may need to establish dedicated review sprints or delegate review authority to grow throughput.

---

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/DenisZheng/agents-radar).*