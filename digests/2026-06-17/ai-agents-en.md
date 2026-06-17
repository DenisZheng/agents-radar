# OpenClaw Ecosystem Digest 2026-06-17

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-06-17 00:44 UTC

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

# OpenClaw Project Digest — 2026-06-17

---

## 1. Today's Overview

OpenClaw is operating at exceptionally high throughput: **500 issues** and **500 PRs** updated in the last 24 hours, with 2 new releases shipped. The project is in a heavy stabilization phase — the majority of activity clusters around session-state reliability, message delivery correctness, and security hardening. The signal-to-noise ratio is moderate: many issues carry `clawsweeper:no-new-fix-pr` and `needs-maintainer-review` labels, indicating a significant backlog awaiting triage. The two releases (v2026.6.8 stable and v2026.6.8-beta.2) focus on channel delivery improvements, suggesting the team is prioritizing messaging reliability as a near-term theme.

---

## 2. Releases

### v2026.6.8 (stable) & v2026.6.8-beta.2
**Key changes:**
- **Richer channel delivery for Telegram and WhatsApp:** Telegram now renders structured text with tables, lists, expandable blockquotes, preserved intentional line breaks, and CLI-backed replies. WhatsApp now honors configured ACP bindings. ([#92679](https://github.com/openclaw/openclaw/issues/92679), [#931](https://github.com/openclaw/openclaw/issues/931))

**Breaking changes:** None explicitly noted.

**Migration notes:** No migration steps documented. Users on older versions with Telegram/WhatsApp channel issues should upgrade for improved reliability.

---

## 3. Project Progress

### Merged/Closed PRs Today

| PR | Summary |
|---|---|
| [#93786](https://github.com/openclaw/openclaw/pull/93786) | **fix(plugins):** Treat refreshable catalogs as requiring runtime discovery — fixes models losing capability metadata (e.g., image support classified as text-only) when catalogs were marked refreshable. |
| [#68936](https://github.com/openclaw/openclaw/pull/68936) | **feat(autofix):** Adds a PR review autofix pipeline using Claude Agent SDK + a Windows background daemon that supervises the OpenClaw gateway. |
| [#93773](https://github.com/openclaw/openclaw/pull/93773) | **fix(ui):** Scope Skill Workshop proposals to the selected agent in Control UI, fixing cases where the workshop operated on the gateway default instead of the active workspace. |

### Notable Open PRs Advancing

- **[#93826](https://github.com/openclaw/openclaw/pull/93826)** — Fixes isolated cron sessions corrupting state via A2A ping-pong feedback loops. High relevance given multiple cron-related issues.
- **[#88748](https://github.com/openclaw/openclaw/pull/88748)** — Bridges OAuth profiles into Gemini CLI runtime, fixing auth profile selection for `google-gemini-cli` backend.
- **[#88504](https://github.com/openclaw/openclaw/pull/88504)** — Adds multi-slot memory role architecture (`memory.recall`, `memory.compaction`, `memory.capture`, etc.), enabling memory plugins to compose rather than replace each other.
- **[#82955](https://github.com/openclaw/openclaw/pull/82955)** — Validates downloaded scripts before execution in `install.sh`, closing a security gap where truncated downloads or HTML error pages could be silently executed.

---

## 4. Community Hot Topics

### Most Discussed Issues (by comment count)

1. **[#75](https://github.com/openclaw/openclaw/issues/75)** — *Linux/Windows Clawdbot Apps* — 109 comments, 👍79. The most-reacted issue in the top 50. Users want feature-parity desktop apps for Linux and Windows matching the macOS/iOS/Android offerings. This is a long-standing gap (opened 2026-01-01) with sustained community demand.

2. **[#88838](https://github.com/openclaw/openclaw/issues/88838)** — *Track core session/transcript SQLite migration via accessor seam* — 30 comments, P0. A maintainer-driven issue proposing to break the session/transcript migration to SQLite into small, reviewable PRs using branch-by-abstraction. This is a critical infrastructure effort.

3. **[#44925](https://github.com/openclaw/openclaw/issues/44925)** — *Subagent completion silently lost* — 19 comments, P1. Subagent task orchestration has multiple failure modes where results are silently lost with no retry, notification, or auto-restart on timeout.

4. **[#22676](https://github.com/openclaw/openclaw/issues/22676)** — *Signal daemon stop() race condition on SIGUSR1 restart* — 17 comments, P1. Orphaned processes and send failures during gateway restarts due to SIGTERM not waiting for process exit.

5. **[#58450](https://github.com/openclaw/openclaw/issues/58450)** — *Agent promises follow-up without starting any action* — 15 comments, 👍3, P2. The agent can claim it will follow up without actually scheduling any background action, cron job, or tool call.

### Underlying Needs Analysis

The dominant themes are **reliability of async/subagent workflows** (issues #44925, #67777, #48003), **session state integrity** (#88838, #63216, #43367), and **cross-platform parity** (#75). The community is clearly pushing for production-grade robustness — silent failures in subagent completion and session corruption are the most painful issues for users running OpenClaw in serious workflows.

---

## 5. Bugs & Stability

### Critical (P0)

| Issue | Description | Fix PR |
|---|---|---|
| [#88838](https://github.com/openclaw/openclaw/issues/88838) | Core session/transcript SQLite migration tracking — high-risk rewrite needs incremental approach | Planned (branch-by-abstraction) |

### High (P1)

| Issue | Description | Fix PR |
|---|---|---|
| [#44925](https://github.com/openclaw/openclaw/issues/44925) | Subagent completion silently lost — no retry, no notification | None open |
| [#22676](https://github.com/openclaw/openclaw/issues/22676) | Signal daemon race condition — orphaned processes on restart | None open |
| [#62505](https://github.com/openclaw/openclaw/issues/62505) | Coding Agent never completes anything (regression from 2026.4.2) | None open |
| [#48003](https://github.com/openclaw/openclaw/issues/48003) | Steer mode doesn't inject messages mid-turn for main sessions | None open |
| [#55334](https://github.com/openclaw/openclaw/issues/55334) | `sessions.json` unbounded growth causes gateway OOM (~50-100 MB/min) | None open |
| [#54155](https://github.com/openclaw/openclaw/issues/54155) | Gateway memory leak: 389MB → 14.7GB over 4 days | None open |
| [#65374](https://github.com/openclaw/openclaw/issues/65374) | Built-in dreaming system contaminates agent identity in multi-agent setups | None open |
| [#65538](https://github.com/openclaw/openclaw/issues/65538) | Screen readers announce every token during streaming (accessibility) | None open |

### Regressions

| Issue | Description | Fix PR |
|---|---|---|
| [#62505](https://github.com/openclaw/openclaw/issues/62505) | Coding agent regression — worked in 2026.4.2, now only produces vague status updates | None |
| [#59330](https://github.com/openclaw/openclaw/issues/59330) | Control UI Raw mode permanently disabled since 2026.3.31 (👍14) | [#59336](https://github.com/openclaw/openclaw/pull/59336) (open, waiting on author) |
| [#45765](https://github.com/openclaw/openclaw/issues/45765) | `OPENCLAW_HOME=~/.openclaw` creates nested `~/.openclaw/.openclaw` directory | None |

### Security

| Issue | Description | Fix PR |
|---|---|---|
| [#39604](https://github.com/openclaw/openclaw/issues/39604) | Add `tools.web.fetch.allowPrivateNetwork` opt-in for private network access (👍9) | None |
| [#78308](https://github.com/openclaw/openclaw/issues/78308) | Channel-mediated approval for MCP tool calls (consent envelope) | None |
| [#65624](https://github.com/openclaw/openclaw/issues/65624) | Mattermost slash commands expose reusable command tokens via cleartext callbacks (CVSS 7.6-8.6) | None |
| [#64046](https://github.com/openclaw/openclaw/issues/64046) | Sensitive data (API keys, tokens) stored in plaintext in configs and logs | None |

---

## 6. Feature Requests & Roadmap Signals

### Likely Candidates for Next Release (based on release cadence and PR readiness)

1. **Multi-slot memory role architecture** ([#88504](https://github.com/openclaw/openclaw/pull/88504)) — Large PR, well-scoped, addresses a clear composability gap. High merge-readiness.
2. **Per-agent memory-wiki vault configuration** ([#63829](https://github.com/openclaw/openclaw/issues/63829), 👍9) — Strong community demand for multi-agent isolation.
3. **Per-agent TTS/STT configuration overrides** ([#66252](https://github.com/openclaw/openclaw/issues/66252)) — Multi-language support is a natural extension as OpenClaw's user base internationalizes.
4. **Webhook hook sessions reusing existing sessions** ([#11665](https://github.com/openclaw/openclaw/issues/11665)) — Docs promise multi-turn support but implementation doesn't deliver; a credibility gap.
5. **Context Provenance metadata** ([#54373](https://github.com/openclaw/openclaw/issues/54373)) — RFC for tagging injected context with source/volatility metadata. Important for long-context reliability.

### Longer-Term Signals

- **Linux/Windows desktop apps** ([#75](https://github.com/openclaw/openclaw/issues/75)) — 👍79 and 109 comments, but no maintainer commitment visible. This is a major platform gap.
- **Persistent task-status surface for long-running turns** ([#52640](https://github.com/openclaw/openclaw/issues/52640)) — Users want a single authoritative status surface during long operations, especially on Discord.

---

## 7. User Feedback Summary

### Pain Points

- **Silent failures dominate user frustration.** Subagent results lost without notification (#44925), cron delivery vanishing (#60212), agent promising follow-ups it never executes (#58450), and coding agents regressing to vague non-output (#62505) all share a common thread: users cannot trust that work was actually completed.
- **Session state corruption is the #1 reliability concern.** Multiple P0/P1 issues (#88838, #63216, #43367, #67777) describe scenarios where concurrent access, overflow recovery, or model switches corrupt or lose session context.
- **Memory/resource leaks make long-running deployments unstable.** Gateway OOM (#55334, #54155) and unbounded `sessions.json` growth mean users cannot run OpenClaw continuously without manual intervention.
- **Security posture is insufficient for production use.** Plaintext secrets in configs/logs (#64046), missing private network access controls (#39604), and Mattermost token exposure (#65624) are blockers for security-conscious deployments.
- **Accessibility is an afterthought.** Screen reader users get fragmented speech output during streaming (#65538).

### Satisfaction Signals

- The v2026.6.8 release's focus on Telegram/WhatsApp delivery improvements shows the team is responsive to channel reliability complaints.
- The autofix PR pipeline (#68936) and multi-slot memory architecture (#88504) suggest active investment in developer experience and plugin ecosystem maturity.

---

## 8. Backlog Watch

### Long-Unanswered High-Priority Items Needing Maintainer Attention

| Issue | Age | Why It Matters |
|---|---|---|
| [#75](https://github.com/openclaw/openclaw/issues/75) — Linux/Windows apps | 5+ months | 👍79, 109 comments. Largest community demand signal. No maintainer response visible. |
| [#55334](https://github.com/openclaw/openclaw/issues/55334) — `sessions.json` OOM | 3 months | Makes long-running deployments impossible. No fix PR. |
| [#54155](https://github.com/openclaw/openclaw/issues/54155) — Gateway memory leak 389MB→14.7GB | 3 months | Critical stability issue. No fix PR. |
| [#44925](https://github.com/openclaw/openclaw/issues/44925) — Subagent completion silently lost | 3 months | Core workflow reliability. No fix PR. |
| [#62505](https://github.com/openclaw/openclaw/issues/62505) — Coding agent regression | 2 months | Regression from 2026.4.2. No fix PR. |
| [#59330](https://github.com/openclaw/openclaw/issues/59330) — Control UI Raw mode disabled | 2 months | 👍14. Fix PR (#59336) exists but is stuck "waiting on author" for 2+ months. |
| [#64046](https://github.com/openclaw/openclaw/issues/64046) — Sensitive data desensitization | 2 months | Security issue. No fix PR. |
| [#40001](https://github.com/openclaw/openclaw/issues/40001) — Write tool lacks append mode | 3 months | Causes silent data loss in cron sessions. No fix PR. |

### PRs Stalled "Waiting on Author" for Extended Periods

| PR | Age | Blocked On |
|---|---|---|
| [#59336](https://github.com/openclaw/openclaw/pull/59336) — Fix Control UI Raw mode | 2+ months | Waiting on author |
| [#60212](https://github.com/openclaw/openclaw/pull/60212) — Cron empty reply repair | 2+ months | Waiting on author |
| [#39065](https://github.com/openclaw/openclaw/pull/39065) — Configurable unpaired DM responses | 3+ months | Waiting on author |
| [#58373](https://github.com/openclaw/openclaw/pull/58373) — Bootstrap non-main models.json | 2+ months | Waiting on author |
| [#85505](https://github.com/openclaw/openclaw/pull/85505) — CLI auth epoch mode | 3+ weeks | Waiting on author |

---

*Data source: OpenClaw GitHub repository, snapshot 2026-06-17. All links reference openclaw/openclaw on GitHub.*

---

## Cross-Ecosystem Comparison

# Cross-Project Ecosystem Report: Personal AI Agent & Assistant Open-Source Landscape

**Date: 2026-06-17 | Generated by OWL**

---

## 1. Ecosystem Overview

The personal AI agent and assistant open-source ecosystem is in a period of rapid, competitive maturation. Across ten tracked projects, the dominant themes are **messaging channel reliability**, **context/session state integrity**, **multi-provider LLM compatibility**, and **security hardening** — reflecting a community that is moving from proof-of-concept toward production-grade deployments. Activity is heavily concentrated: OpenClaw, Hermes Agent, CoPaw, and IronClaw each logged 50 issues + 50 PRs in 24 hours, while smaller projects like ZeptoClaw and TinyClaw operate at single-digit throughput. A clear bifurcation is emerging between full-featured, multi-channel agent platforms and lightweight, single-purpose tools, with most projects racing to close gaps in cron/subagent reliability, cross-platform support, and enterprise messaging integration.

---

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Releases (24h) | Health Score | Status |
|---|---|---|---|---|---|
| **OpenClaw** | 500 | 500 | 2 (v2026.6.8 stable + beta.2) | ⭐⭐⭐⭐ High | Heavy stabilization, massive throughput |
| **Hermes Agent** | 50 | 50 | 0 | ⭐⭐⭐⭐ High | Rapid iteration, security sprint |
| **CoPaw** | 41 | 40 | 1 (v1.1.12-beta.1) | ⭐⭐⭐ Moderate | Active but battling critical regressions |
| **IronClaw** | 50 | 50 | 0 | ⭐⭐⭐ Moderate | Dogfooding-intensive QA sprint |
| **NanoBot** | 9 | 23 | 0 | ⭐⭐⭐⭐⭐ Excellent | High merge rate, no critical issues |
| **PicoClaw** | 15 | 16 | 1 (nightly) | ⭐⭐⭐ Moderate | Active but 10+ security advisories unpatched |
| **NanoClaw** | 6 | 5 | 0 | ⭐⭐⭐⭐ Good | Steady maintenance, responsive |
| **NullClaw** | 2 | 3 | 0 | ⭐⭐⭐ Moderate | Review bottleneck, no merges today |
| **LobsterAI** | 1 | 4 | 0 | ⭐⭐⭐⭐ Good | UX polish focus, stale backlog items |
| **TinyClaw** | 0 | 1 | 0 | ⭐⭐⭐⭐ Good | Low activity, focused on platform parity |
| **Moltis** | 2 | 2 | 0 | ⭐⭐⭐⭐ Good | Small but engaged contributor base |
| **ZeptoClaw** | 0 | 1 (Dependabot) | 0 | ⭐⭐⭐⭐⭐ Excellent | Stable, maintenance-only mode |

**Key takeaway:** NanoBot and NanoClaw demonstrate the healthiest throughput-to-issue ratios (high merge rates, low critical bug counts). OpenClaw's raw volume is unmatched but carries significant reliability debt. PicoClaw's security backlog is the most concerning signal in the ecosystem.

---

## 3. OpenClaw's Position

### Advantages vs Peers

- **Channel breadth:** OpenClaw supports the widest range of messaging platforms (Telegram, WhatsApp, Discord, Signal, Mattermost, etc.) with the richest rendering — today's release added structured text with tables, lists, and expandable blockquotes for Telegram. Hermes Agent is the closest competitor in channel diversity but lags in rendering quality.
- **Plugin architecture maturity:** The multi-slot memory role architecture (#88504) and PR autofix pipeline (#68936) demonstrate a more advanced plugin/composability model than any peer. NanoBot's plugin story is simpler; CoPaw's governance/sandbox interface (#5088) is more ambitious but less mature.
- **Community scale:** 500 issues + 50 PRs in 24 hours dwarfs all competitors. Hermes Agent and IronClaw (both ~50/50) are the next tier. This scale provides a large feedback surface but also creates triage pressure.

### Technical Approach Differences

- **Session state management:** OpenClaw is mid-migration to SQLite for session/transcript storage (#88838) — a more ambitious architectural shift than NanoBot's simpler JSONL-based approach or Hermes Agent's file-based model. Success here will be a significant differentiator.
- **Subagent orchestration:** OpenClaw's subagent model is more sophisticated (and more failure-prone — #44925, #67777) than NanoBot's simpler task model. CoPaw's subagent context compaction issues (#5218) suggest this is a universal pain point.
- **Multi-agent support:** OpenClaw's per-agent memory vault and TTS/STT override requests signal a stronger multi-agent isolation story than most peers. Hermes Agent's multi-agent story is less developed.

### Community Size Context

OpenClaw's 500-issue/50-PR daily volume is ~10x NanoBot's and ~100x TinyClaw's. However, the signal-to-noise ratio is lower — many issues carry `needs-maintainer-review` labels, and the backlog of long-unanswered items (8+ weeks for critical bugs like #55334 gateway OOM) suggests the community has outpaced maintainer capacity. NanoBot's 14 merges from 23 PRs indicates a more sustainable ratio.

---

## 4. Shared Technical Focus Areas

### 4.1 Context Compaction & Memory Management
**Projects:** OpenClaw, CoPaw, NanoBot, Hermes Agent
- **Need:** Long conversations cause OOM (#55334), freezes (#5218), or silent context loss. Projects are pursuing different strategies: OpenClaw's multi-slot memory roles (#88504), CoPaw's Headroom compression (#5244), NanoBot's idle auto-compact default (#4370), and Hermes Agent's Dream system.
- **Trend:** Token-based history capping (replacing character-based) is becoming standard — NanoBot (#4352) and OpenClaw both moved to this model.

### 4.2 Messaging Channel Reliability
**Projects:** OpenClaw, Hermes Agent, PicoClaw, NanoBot, IronClaw
- **Need:** Correct rendering across platforms (Slack Block Kit migration in Hermes #8552, Telegram forum threading in PicoClaw #3110, WhatsApp ACP bindings in OpenClaw), polling resilience (Hermes #47508), and streaming card performance (CoPaw #5167).
- **Trend:** Slack Block Kit is replacing legacy `mrkdwn` across projects. Telegram Forum topic support is a new battleground.

### 4.3 Security Hardening
**Projects:** All tracked projects
- **Need:** Sandbox isolation (Hermes #47494, CoPaw #5088), SSRF prevention (PicoClaw #3078, #3074), private network access controls (OpenClaw #39604), credential encryption (NullClaw #959, CoPaw keychain isolation), and approval-gate integrity (Hermes #39609, IronClaw #4764).
- **Trend:** PicoClaw's cluster of 10+ unpatched security advisories from a single researcher is an outlier — most projects are actively addressing security issues. The shift toward consent envelopes for tool calls (OpenClaw #78308) is a notable architectural trend.

### 4.4 Cron & Scheduled Task Reliability
**Projects:** OpenClaw, CoPaw, NullClaw, LobsterAI, NanoBot
- **Need:** Cron jobs silently failing (OpenClaw #60212), misfiring (CoPaw #5235), or being unable to access tools (NullClaw #839). LobsterAI's "Stop" handler being a no-op (#1424) is the most egregious example.
- **Trend:** DB-backed scheduling (NullClaw #783) and persistent token management are emerging as solutions. The pattern of cron tasks interfering with main chat (CoPaw #5250) is underappreciated.

### 4.5 Multi-Provider LLM Compatibility
**Projects:** OpenClaw, Hermes Agent, CoPaw, NanoBot, PicoClaw
- **Need:** Non-OpenAI models with divergent output formats (CoPaw MiniMax XML #4625, Hermes Anthropic invoke-XML #47518, PicoClaw Gemini thought_signature #3136), OAuth/billing routing (Hermes #40014), and thinking/reasoning block format mismatches (CoPaw #5208).
- **Trend:** Adapter patterns and provider-specific normalization layers are becoming essential infrastructure, not optional.

---

## 5. Differentiation Analysis

| Dimension | OpenClaw | Hermes Agent | NanoBot | CoPaw | IronClaw | PicoClaw | NullClaw | LobsterAI |
|---|---|---|---|---|---|---|---|---|
| **Primary Focus** | Multi-channel agent platform | Desktop + messaging agent | Lightweight personal agent | Full-stack agent framework | Automation + integrations | Embedded/edge agent | Privacy-first agent | Collaboration (Cowork) |
| **Target User** | Power users, multi-platform | Desktop app users, Slack shops | Developers wanting simplicity | Enterprise, developers | Google Suite users | IoT/edge (RISC-V), makers | Privacy-conscious users | Teams, Chinese market |
| **Architecture** | Plugin-rich, multi-agent | Electron desktop + gateway | Single-binary, minimal | Tauri desktop + cloud | Railway/cloud-hosted | Go-based, lightweight | Minimal, self-hosted | Web-first, SQLite-backed |
| **Channel Breadth** | ★★★★★ | ★★★★ | ★★★ | ★★★ | ★★ | ★★★ | ★★ | ★ |
| **Desktop App** | macOS/iOS/Android (no Linux/Windows) | Electron (macOS/Win/Linux) | CLI only | Tauri (macOS/Win/Linux) | Web-only (Reborn) | None | None | Web-only |
| **Multi-Agent** | Strong (per-agent memory, TTS) | Moderate | Basic | Strong (governance RFC) | Moderate | Basic | None | None |
| **Unique Strength** | Channel rendering quality, plugin ecosystem | Desktop UX, Slack Block Kit | Simplicity, fast iteration | Headroom compression, coding philosophy | Google Suite integration | Small footprint, Go performance | Privacy, offline-first | Cowork collaboration |
| **Key Weakness** | Reliability debt, session corruption | Desktop crashes, billing bugs | Limited channel support | Critical regressions, instability | Approval UX confusion | Security backlog | Review bottleneck | Stale scheduled-task bugs |

---

## 6. Community Momentum & Maturity

### Tier 1: Rapid Iteration (high throughput, active shipping)
- **OpenClaw** — 500/500 volume, 2 releases today, but significant backlog. In a stabilization sprint.
- **Hermes Agent** — 50/50, security fix in progress, Slack Block Kit migration actively shipping. Healthy velocity.
- **NanoBot** — 9/23, 14 PRs merged today. Best merge rate in the ecosystem. Accumulating for a near-term release.
- **CoPaw** — 41/40, new beta shipped, but battling multiple critical regressions (SIGSEGV, compaction freeze, crash loop).

### Tier 2: Steady Development (moderate throughput, focused scope)
- **IronClaw** — 50/50, heavy dogfooding, approval-gate UX sprint. No release today but clear direction.
- **PicoClaw** — 15/16, nightly build shipped, active bug fixing. Security backlog is the major concern.
- **NanoClaw** — 6/5, responsive maintainers, budget-exhaustion fix landed same-week. Growing enterprise/fleet segment.

### Tier 3: Maintenance / Low Activity
- **NullClaw** — 2/3, no merges today, review bottleneck. Three well-targeted PRs awaiting review.
- **LobsterAI** — 1/4, UX polish phase, stale items from April need triage.
- **TinyClaw** — 0/1, focused on Windows cross-platform fix. Small but healthy.
- **Moltis** — 2/2, configurability theme emerging. Small but engaged.
- **ZeptoClaw** — 0/1 (Dependabot only), stable maintenance mode.

### Maturity Assessment
The ecosystem is **3-6 months into a transition from "works on my machine" to "production-grade."** The most mature projects by reliability metrics are NanoBot and NanoClaw. OpenClaw has the broadest feature set but the most reliability debt. CoPaw is the most ambitious architecturally (governance, sandbox, Headroom compression) but the least stable. PicoClaw's security posture is the weakest link.

---

## 7. Trend Signals

### For AI Agent Developers:

1. **Context management is the new bottleneck.** As conversations grow longer and models increase context windows, the challenge shifts from "can we fit it?" to "can we manage it reliably?" Projects investing in compaction (CoPaw Headroom), memory architecture (OpenClaw multi-slot), and token-based accounting (NanoBot) are ahead of the curve.

2. **Approval-gate UX is a first-class design problem.** IronClaw (#4764, #4954), Hermes Agent (#39609), and OpenClaw (#78308) all converge on the same insight: users need clear, immediate feedback when they approve or deny tool execution. Silent drops and re-approval loops erode trust faster than any other failure mode.

3. **Multi-provider compatibility requires adapter layers, not if-statements.** The diversity of model output formats (Anthropic XML tool calls, MiniMax XML reasoning, Gemini thought signatures, Ollama streaming quirks) means every project needs a provider adapter abstraction. Projects that hardcode OpenAI assumptions will fall behind.

4. **Security is becoming a differentiator, not an afterthought.** PicoClaw's 10+ unpatched advisories, OpenClaw's plaintext secrets (#64046), and Hermes Agent's sandbox bypass (#47494) all demonstrate that security debt compounds quickly. CoPaw's governance/sandbox interface (#5088) and keychain isolation are early signals of a "secure by default" trend.

5. **Enterprise messaging channels are the next battleground.** Slack Block Kit (Hermes), MS Teams (NullClaw), DingTalk (CoPaw), Feishu (CoPaw), WeCom (PicoClaw), and QQBot (Hermes request) — every project is expanding beyond consumer messaging. The winner will be the project that handles enterprise auth (SSO, SCIM, audit logging) most gracefully.

6. **Silent failures are the #1 user complaint across the ecosystem.** Subagent results lost (OpenClaw #44925), cron delivery vanishing (OpenClaw #60212), agent promising follow-ups it never executes (OpenClaw #58450), budget-exhausted turns silently dropped (NanoClaw #2751), scheduled-task errors invisible (LobsterAI #1424) — the pattern is universal. **Reliability > features** is the current community consensus.

7. **Desktop app quality is a weak point for most projects.** Hermes Agent (crash loops, protocol handler spam), CoPaw (Tauri crash loop #5209), and OpenClaw (no Linux/Windows desktop apps) all struggle here. The Electron/Tauri desktop model introduces complexity that many agent projects are under-resourced to handle.

---

*Report generated by OWL — 2026-06-17. Data sourced from GitHub repositories of all tracked projects. Health scores are relative assessments based on issue/PR ratios, critical bug counts, merge velocity, and release cadence.*

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-06-17

---

## 1. Today's Overview

NanoBot remains in a highly active development phase with **9 issues** and **23 pull requests** updated in the last 24 hours. The project is showing strong community engagement: 14 PRs were merged or closed today, indicating a responsive maintainer team that is actively shipping fixes and enhancements. No new releases were published, suggesting the team is accumulating changes for a future batch release. The activity profile is heavily weighted toward bug fixes and stability improvements (installer issues, provider edge cases, WebUI bugs), with a smaller number of enhancement PRs addressing caching, memory consolidation, and automation management. Overall project health is **good** — high throughput, low release cadence (changes are queuing), and no critical security incidents reported.

---

## 2. Releases

**None.** No new versions were published in the last 24 hours. The volume of merged PRs (14) suggests a release may be imminent, particularly given the number of bug fixes and documentation updates landing.

---

## 3. Project Progress

### Merged / Closed PRs (14 items)

| # | PR | Summary |
|---|-----|---------|
| [4330](https://github.com/HKUDS/nanobot/pull/4330) | feat(webui): add automation management view | Adds a first-class WebUI Automations section with queue/detail layout for filtering, searching, sorting, editing, running, pausing/resuming, and deleting user-created automations. System jobs remain read-only. |
| [4365](https://github.com/HKUDS/nanobot/pull/4365) | docs: use pipe pattern for curl installer commands | Replaces `sh -c "$(curl ...)"` with `curl ... | sh` across all documentation to fix breakage in Dockerfiles and nested scripts. |
| [4368](https://github.com/HKUDS/nanobot/pull/4368) | Fix macOS installer for externally managed Python | Avoids system-wide pip installs; prefers virtualenv, uv tool, pipx, then a managed `~/.nanobot/venv` fallback. Addresses PEP 668 issues on macOS. |
| [4370](https://github.com/HKUDS/nanobot/pull/4370) | Enable idle auto-compact by default | Changes `agents.defaults.idleCompactAfterMinutes` default from `0` to `15`. Explicit `0` remains the opt-out. |
| [4369](https://github.com/HKUDS/nanobot/pull/4369) | Explain empty Dream runs | Replaces the opaque `/dream` no-history response with a recoverable explanation pointing users to idle auto-compact. |
| [4352](https://github.com/HKUDS/nanobot/pull/4352) | fix(context): cap recent-history digest by tokens, not characters | Replaces the `_MAX_HISTORY_CHARS = 32_000` character cap with a token-based cap, fixing overflow issues with CJK text and code. |
| [4363](https://github.com/HKUDS/nanobot/pull/4363) | fix(providers): validate stream idle timeout config | Adds a shared `resolve_stream_idle_timeout_s()` helper; rejects invalid/blank/non-positive `NANOBOT_STREAM_IDLE_TIMEOUT_S` values instead of letting `ValueError` escape. Closes [#4065](https://github.com/HKUDS/nanobot/issues/4065). |
| [4358](https://github.com/HKUDS/nanobot/pull/4358) | fix(api): avoid duplicate user turn on empty-response retry | Passes `persist_user_message=False` on empty-response retry. Closes [#4079](https://github.com/HKUDS/nanobot/issues/4079). |
| [4361](https://github.com/HKUDS/nanobot/pull/4361) | fix(providers): enable thinking for Kimi K2.7 models | Adds Kimi K2.7 model IDs to the OpenAI-compatible thinking allowlist; handles Code variants correctly. |
| [4355](https://github.com/HKUDS/nanobot/pull/4355) | chore: ignore bridge/node_modules | Adds `bridge/node_modules/` to `.gitignore`. |
| [4364](https://github.com/HKUDS/nanobot/pull/4364) | fix(webui): override wsUrl with local LAN IP when on dev server port 5173 | Fixes WebUI getting stuck on "Opening new chat..." when accessed from a LAN device via the Vite dev server. |
| [3401](https://github.com/HKUDS/nanobot/pull/3401) | feat(api): add embeddings support for OpenAI-compatible providers | Adds first-class `/v1/embeddings` support for OpenAI-compatible and Azure OpenAI backends. (Long-running PR, merged today after ~2 months.) |
| [4247](https://github.com/HKUDS/nanobot/pull/4247) | fix(webui): auto-compact transcript when file exceeds size limit | Fixes chat history disappearing in WebUI when a transcript JSONL exceeds the 8 MB hard limit. |

**Key themes shipped today:**
- **Installer & onboarding hardening** — macOS PEP 668, curl pipe pattern, Docker compatibility.
- **Provider stability** — stream timeout validation, Kimi K2.7 thinking support, empty-response retry deduplication.
- **Context/prompt correctness** — token-based history capping (replacing character-based), idle auto-compact enabled by default.
- **WebUI feature completeness** — automation management view, LAN dev server fix, transcript size handling.
- **API surface expansion** — embeddings support finally merged after a long review cycle.

---

## 4. Community Hot Topics

### Most Active Issues (by comments)

1. **[#4360](https://github.com/HKUDS/nanobot/issues/4360)** — *"end of file unexpected" during installer* (6 comments, created 2026-06-16)
   - **6 comments** — the most discussed issue today. User reports a shell syntax error (`Syntax error: end of file unexpected (expecting "})"`) when running the nanobot installer inside a fresh `debian:13` Docker container. This directly relates to the installer shell script's compatibility with different shell environments. The underlying need is **robust, POSIX-compatible installer scripts** that work across minimal container images. PR [#4365](https://github.com/HKUDS/nanobot/pull/4365) (merged) addresses the curl pattern but the shell script itself may need further hardening.

2. **[#4242](https://github.com/HKUDS/nanobot/issues/4242)** — *Disabling dream.enabled still injects all chat history into system prompt via Recent History section* (1 comment, created 2026-06-08, updated 2026-06-16)
   - A config-expectation mismatch: users expect `dream.enabled=false` to fully disable Dream-related behavior, but the Recent History section still injects all history because the Dream cursor is never advanced. This signals a need for **clearer config semantics** and possibly a `dream.cursor_advance_on_disable` behavior.

### Most Active PRs (by relevance and comment potential)

3. **[#4371](https://github.com/HKUDS/nanobot/pull/4371)** — *fix(cache): add breakpoint before Recent History so the stable system prefix caches*
   - Directly related to [#4242](https://github.com/HKUDS/nanobot/issues/4242) and the broader caching efficiency problem. The "Recent History" block grows every turn, invalidating the entire system prompt cache. This PR proposes adding a cache breakpoint so the stable prefix can be reused. **High impact** for users with long conversations.

4. **[#4373](https://github.com/HKUDS/nanobot/pull/4373)** — *fix(memory): preserve delivery context during consolidation*
   - Addresses a subtle but important bug where proactive `_channel_delivery` messages get archived incorrectly during memory consolidation, losing delivery context. Important for **multi-channel users** (Telegram, Discord, etc.) who rely on proactive agent messages.

---

## 5. Bugs & Stability

### New Bugs Reported Today (ranked by severity)

| Severity | Issue | Description | Fix PR |
|----------|-------|-------------|--------|
| 🔴 **High** | [#4360](https://github.com/HKUDS/nanobot/issues/4360) | Installer crashes with shell syntax error in Debian 13 Docker containers — **blocks new users from installing** | None yet (PR #4365 partially addresses installer docs but not the root shell issue) |
| 🟠 **Medium** | [#4375](https://github.com/HKUDS/nanobot/issues/4375) | Git commands (add, commit, push) blocked by workspace security policy even within allowed workspace boundary | None yet |
| 🟠 **Medium** | [#4374](https://github.com/HKUDS/nanobot/issues/4374) | Project workspaces: SOUL.md/USER.md read from project path but written to default workspace (read/write asymmetry) | None yet |
| 🟡 **Low** | [#4366](https://github.com/HKUDS/nanobot/issues/4366) | Local model servers (Ollama, llama.cpp, vLLM) broken when HTTP_PROXY is set — httpx routes localhost through proxy | [#4367](https://github.com/HKUDS/nanobot/pull/4367) (open, addresses this) |

### Bugs Closed Today

| Issue | Description | Fix PR |
|-------|-------------|--------|
| [#4065](https://github.com/HKUDS/nanobot/issues/4065) | Invalid `NANOBOT_STREAM_IDLE_TIMEOUT_S` crashes streaming setup with `ValueError` | [#4363](https://github.com/HKUDS/nanobot/pull/4363) ✅ merged |
| [#4079](https://github.com/HKUDS/nanobot/issues/4079) | API empty-response retry duplicates user turns | [#4358](https://github.com/HKUDS/nanobot/pull/4358) ✅ merged |
| [#4286](https://github.com/HKUDS/nanobot/issues/4286) | Nanobot reporting unexpected missing "sustained goal" context | Closed (likely resolved by context/history fixes) |

---

## 6. Feature Requests & Roadmap Signals

### Open Enhancement PRs (likely candidates for next release)

| PR | Feature | Signal |
|----|---------|--------|
| [#4371](https://github.com/HKUDS/nanobot/pull/4371) | Cache breakpoint before Recent History | High — directly improves LLM API cost/efficiency for all users |
| [#4353](https://github.com/HKUDS/nanobot/pull/4353) | Convert audio to WAV 16k mono before STT | Medium — improves WhatsApp voice note transcription reliability |
| [#4372](https://github.com/HKUDS/nanobot/pull/4372) | Fix MCP malformed progress notifications | Medium — MCP ecosystem hardening |
| [#4367](https://github.com/HKUDS/nanobot/pull/4367) | Disable proxy for local endpoints, respect env proxy for cloud | Medium — local model server usability |
| [#3662](https://github.com/HKUDS/nanobot/pull/3662) | Avoid network loads during token estimation | Low-Medium — offline host support |
| [#4053](https://github.com/HKUDS/nanobot/pull/4053) | Keep read-only roots out of write paths | Low-Medium — security hardening |

### Predicted next release contents:
Based on the volume and nature of merged PRs, the next release will likely be a **patch/minor** focused on: installer reliability, provider stability (timeouts, retries, Kimi K2.7), context/history correctness (token capping, auto-compact defaults), and the WebUI automation management feature. The embeddings API ([#3401](https://github.com/HKUDS/nanobot/pull/3401)) is a notable new capability that may warrant a minor version bump.

---

## 7. User Feedback Summary

### Pain Points

1. **Installer fragility across environments** — Multiple reports of installer failures in Docker (Debian 13), macOS (PEP 668 externally-managed environments), and when embedded in other scripts. The project's growth is attracting users with diverse environments, and the installer needs to be more defensive. *(Issues [#4360](https://github.com/HKUDS/nanobot/issues/4360), PR [#4368](https://github.com/HKUDS/nanobot/pull/4368))*

2. **Configuration semantics confusion** — Users expect `dream.enabled=false` to fully disable Dream-related behavior, but the Recent History injection is independent of this flag. This suggests the config surface has grown organically without a unified model for feature flag dependencies. *(Issue [#4242](https://github.com/HKUDS/nanobot/issues/4242))*

3. **Workspace/project boundary inconsistencies** — The read/write asymmetry for SOUL.md/USER.md in project workspaces ([#4374](https://github.com/HKUDS/nanobot/issues/4374)) and the overly restrictive git command blocking ([#4375](https://github.com/HKUDS/nanobot/issues/4375)) both point to the workspace security model needing refinement as project workspaces mature.

4. **Local model server proxy issues** — Users running local LLMs behind a system proxy are silently broken. This is a common setup in corporate environments. *(Issue [#4366](https://github.com/HKUDS/nanobot/issues/4366))*

### Satisfaction Signals

- The **WebUI automation management** feature ([#4330](https://github.com/HKUDS/nanobot/pull/4330)) addresses a long-requested need for first-class automation UX.
- **Embeddings API** landing ([#3401](https://github.com/HKUDS/nanobot/pull/3401)) after a 2-month review signals the project is expanding its API surface for advanced use cases.
- **Idle auto-compact enabled by default** ([#4370](https://github.com/HKUDS/nanobot/pull/4370)) shows the team is opinionating toward better out-of-box experience.

---

## 8. Backlog Watch

### Long-unanswered items needing maintainer attention

| Item | Age | Description | Risk |
|------|-----|-------------|------|
| [#4375](https://github.com/HKUDS/nanobot/issues/4375) | 0 days (new) | Git commands blocked by workspace security policy within allowed boundary | 🔴 Blocks users who use nanobot for code tasks |
| [#4374](https://github.com/HKUDS/nanobot/issues/4374) | 1 day | SOUL.md/USER.md read/write asymmetry in project workspaces | 🟠 Data loss risk — writes go to wrong location |
| [#4242](https://github.com/HKUDS/nanobot/issues/4242) | 9 days | `dream.enabled=false` still injects full history | 🟠 Config expectation mismatch, wastes tokens |
| [#3662](https://github.com/HKUDS/nanobot/pull/3662) | 42 days | Avoid network loads during token estimation | 🟡 Long-running PR, needs review |
| [#4053](https://github.com/HKUDS/nanobot/pull/4053) | 19 days | Keep read-only roots out of write paths | 🟡 Security-related, should be prioritized |
| [#4353](https://github.com/HKUDS/nanobot/pull/4353) | 2 days | Audio conversion for STT providers | 🟡 Affects WhatsApp voice note users |

**Recommendation:** Issues [#4375](https://github.com/HKUDS/nanobot/issues/4375) and [#4374](https://github.com/HKUDS/nanobot/issues/4374) are both fresh, high-impact bugs in the project workspace feature (introduced in [#4007](https://github.com/HKUDS/nanobot/pull/4007)) and should be triaged quickly — they represent regressions in a relatively new feature area and could erode user trust in project workspaces.

---

*Data source: [github.com/HKUDS/nanobot](https://github.com/HKUDS/nanobot) | Digest generated: 2026-06-17*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent — Project Digest
**Date: 2026-06-17**

---

## 1. Today's Overview

Hermes Agent is experiencing a high-activity day with **50 issues** and **50 PRs** updated in the last 24 hours, signaling a very engaged contributor base and active maintainer response. The project is in a **rapid iteration phase** — no new tagged release has landed today, but a substantial volume of bug fixes, platform improvements, and feature work is flowing through the pipeline. Key themes include **Slack Block Kit migration**, **MCP reliability**, **desktop app stability**, and **multi-platform messaging expansion**. The ratio of open-to-closed items (48 open vs. 2 closed issues; 40 open vs. 10 merged PRs) suggests the team is still triaging a large backlog while shipping fixes steadily.

---

## 2. Releases

**No new releases today.** The latest tagged version remains **v0.16.0**. Multiple merged PRs (e.g., Slack Block Kit rendering, security sandbox fix, Telegram polling resilience) appear to be accumulating toward a **v0.16.1 or v0.17.0** release.

---

## 3. Project Progress — Merged & Closed PRs Today

| PR | Status | Summary |
|---|---|---|
| [#47518](https://github.com/NousResearch/hermes-agent/pull/47518) | ✅ Merged | Salvage Anthropic `<invoke>` tool-call XML returned as text blocks |
| [#47513](https://github.com/NousResearch/hermes-agent/issues/47513) | ✅ Closed | Slack clarify choices rendered as Block Kit buttons (counterpart to Discord #19111) |
| [#47523](https://github.com/NousResearch/hermes-agent/pull/47523) | 🔀 Open (active) | Harden native image routing; honor MCP `connect_timeout` during server probes |
| [#47522](https://github.com/NousResearch/hermes-agent/pull/47522) | 🔀 Open (active) | Structured Fallback Models editor in Desktop Settings; fix `[object Object]` rendering |
| [#47519](https://github.com/NousResearch/hermes-agent/pull/47519) | 🔀 Open (active) | Fix `hermes config set` silently coercing string enum values to Python booleans |
| [#47520](https://github.com/NousResearch/hermes-agent/pull/47520) | 🔀 Open (active) | MCP discovery failures logged at WARNING instead of DEBUG |
| [#47508](https://github.com/NousResearch/hermes-agent/pull/47508) | 🔀 Open (active) | Keep Telegram gateway polling alive during transient outages |
| [#47494](https://github.com/NousResearch/hermes-agent/pull/47494) | 🔀 Open (active) | **P0 security fix** — close sandbox tool isolation bypass |
| [#47506](https://github.com/NousResearch/hermes-agent/pull/47506) | 🔀 Open (active) | Raise default MCP tool-call timeout from 120s → 300s |
| [#47505](https://github.com/NousResearch/hermes-agent/pull/47505) | 🔀 Open (active) | Strip custom `mention_patterns` wake words from WhatsApp group message body |

**Notable advancement:** The Anthropic invoke-tool-call salvage PR (#47518) addresses a real interoperability pain point where Claude returns tool calls in XML text rather than structured `tool_use` blocks — a practical reliability win.

---

## 4. Community Hot Topics

### Most Commented Issues

1. **[#8552](https://github.com/NousResearch/hermes-agent/issues/8552)** — *Slack: use Block Kit markdown block type instead of legacy mrkdwn* (7 comments, 👍9)
   - **Underlying need:** Users want rich markdown rendering (tables, proper formatting) in Slack. The legacy `mrkdwn` format strips tables and degrades the experience. This is the single most upvoted issue in the batch.
   - **PR counterpart:** [#47051](https://github.com/NousResearch/hermes-agent/pull/47051) is actively implementing this — migration to Block Kit `markdown` blocks as default.

2. **[#12655](https://github.com/NousResearch/hermes-agent/issues/12655)** — *feat(model-picker): add `picker_providers` config to filter `/model` output* (7 comments)
   - **Underlying need:** Power users with custom endpoints want to hide built-in providers (Anthropic, OpenRouter) from the model picker UI. Signals demand for cleaner enterprise/self-hosted configurations.

3. **[#40014](https://github.com/NousResearch/hermes-agent/issues/40014)** — *Claude Code OAuth still hits pay-per-token endpoint, drains 'extra usage' credits* (4 comments)
   - **Underlying need:** Users with Claude Max/Pro subscriptions expect Hermes to route through the subscription quota, not the pay-per-token endpoint. This is a **billing-impacting bug** causing real financial friction.

4. **[#8950](https://github.com/NousResearch/hermes-agent/issues/8950)** — *Add missing messaging channels: IRC, Google Chat, LINE, Nostr, Twitch, QQBot* (4 comments, 👍2)
   - **Underlying need:** Feature parity with OpenClaw's channel coverage. Community wants broader platform reach, especially in non-US markets (QQBot, LINE).

5. **[#39609](https://github.com/NousResearch/hermes-agent/issues/39609)** — *Tasks created with `--initial-status blocked` auto-promote to ready ~1s later — human approval gate bypassed* (3 comments, 👍1)
   - **Underlying need:** Safety/approval workflow integrity. Tasks bypassing human approval is a serious trust issue for production deployments.

6. **[#47134](https://github.com/NousResearch/hermes-agent/issues/47134)** — *`/reload-mcp` crashes gateway via `killpg` sending SIGTERM to gateway's own process group* (3 comments)
   - **Underlying need:** MCP hot-reload should not be a gateway-killing operation. This is a **P1 reliability issue** for anyone using MCP tools in production.

7. **[#47121](https://github.com/NousResearch/hermes-agent/issues/47121)** — *MCP tools missing in TUI sessions due to `wait_for_mcp_discovery` timeout (0.75s) shorter than discovery time (~6s)* (2 comments)
   - **Underlying need:** Timing race makes MCP tools silently unavailable in TUI mode. Users fall back to terminal tools without understanding why.

---

## 5. Bugs & Stability

### Critical / P0

| Issue | Severity | Fix PR? |
|---|---|---|
| **[#47494](https://github.com/NousResearch/hermes-agent/pull/47494)** — Sandbox tool isolation bypass (`enabled_tools=None` treated same as empty) | 🔴 P0 / Security | ✅ PR open |
| **[#47134](https://github.com/NousResearch/hermes-agent/issues/47134)** — `/reload-mcp` kills gateway process via SIGTERM to own process group | 🔴 P1 / Crash | ❌ No fix PR yet |

### High / P1

| Issue | Severity | Fix PR? |
|---|---|---|
| **[#40014](https://github.com/NousResearch/hermes-agent/issues/40014)** — Claude OAuth routes to pay-per-token, drains subscription credits | 🟠 P1 / Billing | ❌ No fix PR yet |
| **[#39609](https://github.com/NousResearch/hermes-agent/issues/39609)** — Kanban `--initial-status blocked` auto-promotes, bypasses approval gate | 🟠 P1 / Workflow integrity | ❌ No fix PR yet |
| **[#47500](https://github.com/NousResearch/hermes-agent/issues/47500)** — Desktop app auto-previews external links, triggers custom protocol handler popups | 🟠 P2 / UX | ❌ No fix PR yet |
| **[#47498](https://github.com/NousResearch/hermes-agent/issues/47498)** — Desktop app crashes with "Maximum call stack size exceeded" when sending photo | 🟠 P2 / Crash loop | ❌ No fix PR yet |

### Medium / P2–P3

| Issue | Severity | Fix PR? |
|---|---|---|
| **[#47121](https://github.com/NousResearch/hermes-agent/issues/47121)** — MCP tools missing in TUI due to discovery timeout race | 🟡 P2 | ❌ No fix PR |
| **[#47521](https://github.com/NousResearch/hermes-agent/issues/47521)** — Ollama Cloud model switch keeps stale Codex `base_url`, sends to wrong endpoint | 🟡 P2 | ❌ No fix PR |
| **[#47524](https://github.com/NousResearch/hermes-agent/issues/47524)** — Composer model pill stuck in infinite spinner after rapid profile switching | 🟡 P3 | ❌ No fix PR |
| **[#47504](https://github.com/NousResearch/hermes-agent/issues/47504)** — Desktop: profile name case mismatch vs CLI | 🟢 P3 | ✅ [#47511](https://github.com/NousResearch/hermes-agent/pull/47511) |
| **[#47516](https://github.com/NousResearch/hermes-agent/pull/47516)** — Browser subprocess output crashes on non-UTF-8 locale (Windows GBK/CJK) | 🟡 P2 | ✅ PR open |
| **[#47514](https://github.com/NousResearch/hermes-agent/pull/47514)** — Session source overwritten on cross-thread interrupt, misroutes responses | 🟡 P2 | ✅ PR open |
| **[#47519](https://github.com/NousResearch/hermes-agent/pull/47519)** — `hermes config set` coerces string enums to Python booleans | 🟡 P2 | ✅ PR open |

---

## 6. Feature Requests & Roadmap Signals

### Strong Signals (Active PRs or High Engagement)

| Feature | Issue | PR | Likelihood of Next Release |
|---|---|---|---|
| **Slack Block Kit rich output** (replace legacy mrkdwn) | [#8552](https://github.com/NousResearch/hermes-agent/issues/8552) | [#47051](https://github.com/NousResearch/hermes-agent/pull/47051) | 🟢 **Very High** — PR is open and actively reviewed |
| **MCP default timeout 120s → 300s** | — | [#47506](https://github.com/NousResearch/hermes-agent/pull/47506) | 🟢 **High** — ported from OpenAI Codex, low risk |
| **Telegram polling resilience** | — | [#47508](https://github.com/NousResearch/hermes-agent/pull/47508) | 🟢 **High** — addresses real outage recovery |
| **Security sandbox isolation fix** | [#6614](https://github.com/NousResearch/hermes-agent/issues/6614) | [#47494](https://github.com/NousResearch/hermes-agent/pull/47494) | 🟢 **Very High** — P0, will be prioritized |
| **Desktop i18n (15 languages)** | — | [#38846](https://github.com/NousResearch/hermes-agent/pull/38846) | 🟡 **Medium** — large PR, needs review bandwidth |
| **Native workflow coordination / dynamic workflows** | — | [#46971](https://github.com/NousResearch/hermes-agent/pull/46971) | 🟡 **Medium** — significant new feature |
| **Kanban task reasoning overrides** | — | [#47476](https://github.com/NousResearch/hermes-agent/pull/47476) | 🟡 **Medium** |
| **Petdex animated mascots** (CLI/TUI/Desktop) | — | [#46464](https://github.com/NousResearch/hermes-agent/pull/46464) | 🟢 **High** — fun, low-risk, community-pleasing |

### Emerging Requests (No PR Yet)

| Feature | Issue | Notes |
|---|---|---|
| `picker_providers` config to filter `/model` output | [#12655](https://github.com/NousResearch/hermes-agent/issues/12655) | Clean config UX for self-hosted users |
| Agent-level pre-response hook for meta-workflow checks | [#47446](https://github.com/NousResearch/hermes-agent/issues/47446) | Architectural — enables skill pre-loading enforcement |
| JMAP email integration | [#11424](https://github.com/NousResearch/hermes-agent/issues/11424) | Niche but requested |
| Native Canvas Mode for collaborative planning | [#29379](https://github.com/NousResearch/hermes-agent/issues/29379) | Ambitious; signals desire for visual collaboration |
| Desktop workspace switcher in status bar | [#38849](https://github.com/NousResearch/hermes-agent/issues/38849) | Quality-of-life for multi-profile users |
| Desktop Providers settings section with per-provider API key management | [#39020](https://github.com/NousResearch/hermes-agent/issues/39020) | Recurring pain point — API key management is "buried" |

---

## 7. User Feedback Summary

### Pain Points (Dissatisfaction)

- **Billing surprise with Claude OAuth** ([#40014](https://github.com/NousResearch/hermes-agent/issues/40014)): Users on Max/Pro plans are unknowingly burning "extra usage" credits because Hermes routes to the pay-per-token endpoint. This is the most financially consequential bug and erodes trust.
- **Desktop app instability**: Multiple crash reports — photo sending causes infinite crash loop ([#47498](https://github.com/NousResearch/hermes-agent/issues/47498)), custom protocol handler spam ([#47500](https://github.com/NousResearch/hermes-agent/issues/47500)), model pill spinner stuck ([#47524](https://github.com/NousResearch/hermes-agent/issues/47524)). The Electron desktop app needs a stability pass.
- **MCP tool discovery silently failing** ([#47121](https://github.com/NousResearch/hermes-agent/issues/47121)): Users don't know why MCP tools are absent — the 0.75s timeout is too short, and failures were logged at DEBUG level (now being changed to WARNING in [#47520](https://github.com/NousResearch/hermes-agent/pull/47520)).
- **Config `set` corrupting enum values** ([#47519](https://github.com/NousResearch/hermes-agent/pull/47519)): `hermes config set approvals.mode off` writes `mode: False` instead of `mode: "off"`. Silent data corruption in config is a serious UX failure.
- **Approval gate bypass in Kanban** ([#39609](https://github.com/NousResearch/hermes-agent/issues/39609)): Tasks meant to be blocked for human review auto-execute. This undermines the trust model for production deployments.

### Positive Signals

- **Slack Block Kit migration** is actively happening ([#47051](https://github.com/NousResearch/hermes-agent/pull/47051)) — the community has been asking for this since April ([#8552](https://github.com/NousResearch/hermes-agent/issues/8552)).
- **Security sandbox fix** is in progress ([#47494](https://github.com/NousResearch/hermes-agent/pull/47494)) — the team is taking the sandbox bypass seriously.
- **i18n support** expanding to 15 languages ([#38846](https://github.com/NousResearch/hermes-agent/pull/38846)) signals growing international user base.
- **Animated mascots / Petdex** ([#46464](https://github.com/NousResearch/hermes-agent/pull/46464)) — a delightful community contribution that adds personality.

---

## 8. Backlog Watch — Items Needing Maintainer Attention

These issues are **important but have been open for weeks with no assigned fix PR**:

| Issue | Age | Why It Matters |
|---|---|---|
| **[#40014](https://github.com/NousResearch/hermes-agent/issues/40014)** — Claude OAuth billing routing | 42 days | Real financial impact on users; no PR after 4 days of being reported |
| **[#39609](https://github.com/NousResearch/hermes-agent/issues/39609)** — Kanban approval gate bypass | 42 days | Workflow integrity / trust issue; 👍1 but no assignee |
| **[#47134](https://github.com/NousResearch/hermes-agent/issues/47134)** — `/reload-mcp` kills gateway | 1 day (new, P1) | Affects all MCP users in TUI; needs immediate triage |
| **[#47498](https://github.com/NousResearch/hermes-agent/issues/47498)** — Desktop crash loop on photo send | 1 day (new) | Data-loss-adjacent (crash loop on restart); no PR |
| **[#47521](https://github.com/NousResearch/hermes-agent/issues/47521)** — Ollama Cloud stale `base_url` after model switch | 0 days (new) | Sends requests to wrong endpoint; silent misbehavior |
| **[#47121](https://github.com/NousResearch/hermes-agent/issues/47121)** — MCP tools missing in TUI (timeout race) | 1 day | Core functionality silently broken for TUI users |
| **[#46866](https://github.com/NousResearch/hermes-agent/issues/46866)** — Signal approval responses misrouted as steered messages | 2 days | Breaks dangerous-command approval flow on Signal |
| **[#41407](https://github.com/NousResearch/hermes-agent/issues/41407)** — WhatsApp group/LID JIDs silently fall back to home channel | 10 days | Silent message misrouting on WhatsApp |
| **[#40095](https://github.com/NousResearch/hermes-agent/issues/40095)** — Kanban workers crash with `display.interface: tui` | 12 days | Blocks headless worker + TUI config combination |
| **[#37289](https://github.com/NousResearch/hermes-agent/issues/37289)** — MiniMax-M3 context window inconsistency (1M vs 512K) | 45 days | Stale; model metadata accuracy issue |

---

**Summary Assessment:** Hermes Agent is in a **healthy but strained** state. The volume of community contributions and issue reports is high, and the maintainers are actively shipping fixes across security, reliability, and platform coverage. The most urgent unaddressed items are the **Claude OAuth billing routing** (financial impact), the **desktop crash loop**, and the **MCP reload crash**. The Slack Block Kit migration and security sandbox fix are the strongest signals of what will ship in the next release.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-06-17

---

## 1. Today's Overview

PicoClaw shows **high activity** today with 15 issues and 16 PRs updated in the last 24 hours, plus a new nightly release. The project is in an active development phase: 13 PRs were merged/closed and 2 issues were resolved, indicating a strong throughput on bug fixes and feature work. Notably, a cluster of **10 security advisories** (issues #3068–#3078) was published on June 9 by researcher YLChen-007 and remains open/stale — this is the most pressing concern facing the project. On the feature side, the team shipped Telegram forum topic support, panic recovery for core goroutines, and Gemini `thought_signature` compatibility. The overall health is **active but security-debt-heavy**.

---

## 2. Releases

**Nightly Build — `v0.2.9-nightly.20260616.c1ff5aa6`**
- Automated nightly build; may be unstable — use with caution.
- Full changelog: [v0.2.9...main](https://github.com/sipeed/picoclaw/compare/v0.2.9...main)

No stable release was published today. The nightly build reflects all merged changes since the `v0.2.9` tag, including the fixes and features detailed below.

---

## 3. Project Progress (Merged/Closed PRs)

| PR | Author | Summary |
|---|---|---|
| [#3135](https://github.com/sipeed/picoclaw/pull/3135) | ZOOWH | **fix(telegram):** Use composite `chatID/threadID` for forum topic replies — fixes [#3110](https://github.com/sipeed/picoclaw/issues/3110) where replies defaulted to `#General` instead of the correct thread |
| [#3132](https://github.com/sipeed/picoclaw/pull/3132) | SiYue-ZO | **fix:** Add `defer-recover` panic protection to core-path goroutines (tool execution, channel handling) to prevent single-goroutine panics from crashing the process |
| [#3137](https://github.com/sipeed/picoclaw/pull/3137) | jp39 | **feat:** `tools.cron.command_allowed_remotes` — allow selected remote channels to trigger cron commands |
| [#3120](https://github.com/sipeed/picoclaw/pull/3120) | carlosprados | **feat(config):** `RegisterChannelSettings` hook for out-of-tree channel extensibility without forking |
| [#3130](https://github.com/sipeed/picoclaw/pull/3130) | chengzhichao-xydt | **fix(seahorse):** Handle `json.Marshal` errors in grep and expand tools instead of silently discarding |
| [#3127](https://github.com/sipeed/picoclaw/pull/3127) | chengzhichao-xydt | **fix:** Explicitly ignore `Close()` errors on directory file descriptors |
| [#3129](https://github.com/sipeed/picoclaw/pull/3129) | chengzhichao-xydt | **fix(tts):** Explicitly ignore `file.Close()` error in write-error path |
| [#2990](https://github.com/sipeed/picoclaw/pull/2990) | yuxuan-7814 | **fix(web):** Read full session history for Web UI display (previously only last user message shown) |
| [#2988](https://github.com/sipeed/picoclaw/pull/2988) | yuxuan-7814 | **fix(agent):** Use `summarize_token_percent` config for context compression display |
| [#2987](https://github.com/sipeed/picoclaw/pull/2987) | yuxuan-7814 | **fix(channels):** Exclude `tool_calls` from auxiliary message filtering during streaming |
| [#2983](https://github.com/sipeed/picoclaw/pull/2983) | afjcjsbx | **fix(agent):** Retry on semantically empty LLM responses (e.g., `content: null`) |
| [#3096](https://github.com/sipeed/picoclaw/pull/3096) | imguoguo | **docs:** Add PicoPaw banners to READMEs |

**Key themes:** Stability hardening (panic recovery, error handling), UX fixes (Telegram forums, Web UI history), and extensibility (out-of-tree channels, remote cron).

---

## 4. Community Hot Topics

### Most Active Issues (by comments)

1. **[#2404](https://github.com/sipeed/picoclaw/issues/2404)** — *Add config option to send streaming HTTP requests to LLM backend* (12 comments, 👍1)
   - **Underlying need:** Users want OpenAI-compatible `streaming: true` support in config. This is the most discussed open issue and reflects demand for real-time token streaming — a core UX expectation for modern AI assistants.

2. **[#3134](https://github.com/sipeed/picoclaw/issues/3134)** — *`su -c 'echo OK'` not supported in agent gateway* (2 comments, closed)
   - **Underlying need:** Shell command flexibility — users expect `su -c` and similar patterns to work. Closed today, suggesting a fix was applied.

3. **[#3110](https://github.com/sipeed/picoclaw/issues/3110)** — *Telegram adapter ignores `message_thread_id` in Forum topics* (closed)
   - **Underlying need:** Correct multi-topic Telegram Forum support. Fixed by PR [#3135](https://github.com/sipeed/picoclaw/pull/3135).

### Open PRs Drawing Attention

- **[#3116](https://github.com/sipeed/picoclaw/pull/3116)** — Complete `turn.done` lifecycle signaling for Pico (open, addresses [#2984](https://github.com/sipeed/picoclaw/issues/2984))
- **[#3115](https://github.com/sipeed/picoclaw/pull/3115)** — Fix inline `data:` URL media extraction for generic tool output (open, session-history corruption bug)
- **[#3136](https://github.com/sipeed/picoclaw/pull/3136)** — Set both camelCase and snake_case `thought_signature` for Gemini 3.5 Flash Agentic (open, model compatibility)

---

## 5. Bugs & Stability

### Critical — Security Vulnerabilities (10 open, stale since June 9)

All reported by YLChen-007. **None have fix PRs yet.** These represent the most significant risk to the project:

| # | Issue | Severity |
|---|---|---|
| [#3082](https://github.com/sipeed/picoclaw/issues/3082) | Feishu reply-context expansion bypasses `allow_from` | 🔴 High |
| [#3081](https://github.com/sipeed/picoclaw/issues/3081) | Approval hook `cwd` symlink race — exec runs in unapproved directory | 🔴 High |
| [#3079](https://github.com/sipeed/picoclaw/issues/3079) | `exec` whitelist allows `jq` environment disclosure | 🔴 High |
| [#3078](https://github.com/sipeed/picoclaw/issues/3078) | `web_fetch` SSRF bypass via environment-configured HTTP proxy | 🔴 High |
| [#3076](https://github.com/sipeed/picoclaw/issues/3076) | WeCom group trigger policy bypass — unmentioned messages reach agent | 🔴 High |
| [#3075](https://github.com/sipeed/picoclaw/issues/3075) | Untrusted `skills/` metadata auto-loaded into system prompt | 🟠 Medium-High |
| [#3074](https://github.com/sipeed/picoclaw/issues/3074) | `web_fetch` SSRF bypass via ISATAP IPv6 literals | 🔴 High |
| [#3073](https://github.com/sipeed/picoclaw/issues/3073) | Signed LINE webhook replay allows duplicate event execution | 🟠 Medium |
| [#3072](https://github.com/sipeed/picoclaw/issues/3072) | CSRF in launcher first-run password setup — local control-plane takeover | 🔴 High |
| [#3071](https://github.com/sipeed/picoclaw/issues/3071) | Authenticated WebSocket clients can trigger unauthorized config reload | 🔴 High |
| [#3070](https://github.com/sipeed/picoclaw/issues/3070) | OneBot media URL handling allows host-side arbitrary fetch | 🔴 High |
| [#3068](https://github.com/sipeed/picoclaw/issues/3068) | MQTT `allow_from` bypass via topic `client_id` spoofing | 🔴 High |

### Resolved Bugs (today)

| Issue | Fix |
|---|---|
| [#3134](https://github.com/sipeed/picoclaw/issues/3134) — `su -c` not supported | Closed (fix applied) |
| [#3110](https://github.com/sipeed/picoclaw/issues/3110) — Telegram forum thread replies | Fixed by PR [#3135](https://github.com/sipeed/picoclaw/pull/3135) |

### Open Bug Fix PRs

- **[#3115](https://github.com/sipeed/picoclaw/pull/3115)** — Session-history corruption from inline `data:` URL false-positive media extraction (open, awaiting review)

---

## 6. Feature Requests & Roadmap Signals

| Request | Issue | Signal Strength |
|---|---|---|
| Streaming HTTP requests to LLM backend | [#2404](https://github.com/sipeed/picoclaw/issues/2404) (12 comments) | **Strong** — most discussed open issue |
| Remote cron command authorization | [#3137](https://github.com/sipeed/picoclaw/pull/3137) (merged) | ✅ Delivered |
| Out-of-tree channel settings registration | [#3120](https://github.com/sipeed/picoclaw/pull/3120) (merged) | ✅ Delivered |
| Gemini `thought_signature` dual-format support | [#3136](https://github.com/sipeed/picoclaw/pull/3136) (open) | **Likely next** — model compatibility |
| Complete `turn.done` lifecycle signaling | [#3116](https://github.com/sipeed/picoclaw/pull/3116) (open) | **Likely next** — addresses existing issue |

**Prediction for next stable release (v0.2.10 or v0.3.0):** Expect the Gemini `thought_signature` fix, `turn.done` lifecycle completion, and the streaming HTTP config option to be strong candidates. The security cluster is a wildcard — if the maintainers prioritize it, a security-focused patch release could come first.

---

## 7. User Feedback Summary

**Pain points:**
- **Security posture** is the dominant concern. 10+ unpatched security advisories from a single researcher suggest the project may need a dedicated security review sprint.
- **LLM provider compatibility** is a recurring friction — Gemini format mismatches, empty response handling, and missing streaming config all point to the challenge of supporting diverse OpenAI-compatible backends.
- **Shell execution limitations** (`su -c` failures) frustrate power users who expect full POSIX flexibility.
- **Telegram Forum threading** was broken and only just fixed — multi-topic group users were likely experiencing silent misbehavior for days.

**Positive signals:**
- Fast turnaround on bug fixes (multiple issues from June 1–2 were resolved within ~2 weeks).
- Active community contributions from 10+ unique contributors in the last 24 hours.
- Extensibility improvements (out-of-tree channels) show the project is maturing its plugin architecture.

**Overall satisfaction:** Cautiously positive. The velocity is good, but the security backlog is eroding trust.

---

## 8. Backlog Watch — Items Needing Maintainer Attention

These important items have been open for **8+ days** with no resolution:

| Item | Days Open | Why It Matters |
|---|---|---|
| **Security cluster** [#3068](https://github.com/sipeed/picoclaw/issues/3068)–[#3082](https://github.com/sipeed/picoclaw/issues/3082) (10 issues) | 8 days | 10 security vulnerabilities, all stale, no fix PRs. This is the single biggest risk to the project. |
| [#2404](https://github.com/sipeed/picoclaw/issues/2404) — Streaming HTTP config | 71 days | Most commented open issue. Long-standing feature gap. |
| [#3116](https://github.com/sipeed/picoclaw/pull/3116) — `turn.done` lifecycle | 5 days | Open PR with no comments. Completes a previously shipped feature. |
| [#3115](https://github.com/sipeed/picoclaw/pull/3115) — Data URL media extraction fix | 5 days | Session-history corruption bug. Open PR, no review activity. |
| [#3136](https://github.com/sipeed/picoclaw/pull/3136) — Gemini `thought_signature` | 1 day | Model compatibility fix for Gemini 3.5 Flash. Likely to be merged soon given the pattern. |

**Recommended priority:** Triage the security cluster immediately (even if just to acknowledge, label, and create tracking PRs). Then review the three open PRs (#3115, #3116, #3136) which are blocking user-facing fixes.

---

*Generated by OWL — 2026-06-17 | Data source: [sipeed/picoclaw](https://github.com/sipeed/picoclaw)*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-06-17

---

## 1. Today's Overview

NanoClaw shows healthy mid-week activity with **6 issues** and **5 pull requests** updated in the last 24 hours. The project is in a steady maintenance-and-hardening phase: 4 of 5 PRs were merged or closed today, indicating an active and responsive maintainer cadence. No new releases were published, but several meaningful fixes landed. The open issue count (5 of 6) suggests a growing backlog that warrants attention, particularly around documentation accuracy and integration edge cases.

---

## 2. Releases

**None.** No new versions were published in the last 24 hours.

---

## 3. Project Progress

Four PRs were merged or closed today, advancing stability and documentation:

| PR | Author | Status | Summary |
|---|---|---|---|
| [#2759](https://github.com/nanocoai/nanoclaw/pull/2759) | assapin | ✅ Merged | **Fix: budget-exhausted LLM turns now surface errors to users** instead of being silently dropped. Closes [#2751](https://github.com/nanocoai/nanoclaw/issues/2751). |
| [#2782](https://github.com/nanocoai/nanoclaw/pull/2782) | 0xemc | ✅ Merged | **Fix: Tailscale Docker routing service made self-healing** — replaces a `Type=oneshot` systemd unit with one that re-applies ip rules when Tailscale flushes them mid-session. |
| [#2775](https://github.com/nanocoai/nanoclaw/pull/2775) | Koshkoshinsk | ✅ Merged | **Docs: changelog clarification** — the `[BREAKING]` notice for `@onecli-sh/sdk` 2.2.1 was misleading for existing installs; now accurately states the OneCLI gateway is a separate, operator-driven upgrade. |
| [#2069](https://github.com/nanocoai/nanoclaw/pull/2069) | javexed | ❌ Closed | **Skill/webchat v1** — feature skill PR closed without merge (opened 2026-04-28, stale ~7 weeks). |

**Key takeaway:** The most impactful merge is [#2759](https://github.com/nanocoai/nanoclaw/pull/2759), which fixes a silent-failure mode where users received no reply at all when their LLM budget was exhausted — a significant UX reliability improvement.

---

## 4. Community Hot Topics

**Most commented/active issues:**

- **[#1669](https://github.com/nanocoai/nanoclaw/issues/1669) — Credential Proxy & Anthropic account ban risk** (1 comment, opened 2026-04-06, updated 2026-06-16)
  A technically nuanced concern: does NanoClaw's Credential Proxy implementation violate Anthropic's prohibition on OAuth reverse-proxies? The issue was recently bumped after ~2 months of silence, suggesting renewed community concern. **Underlying need:** clarity on whether the architecture puts user accounts at risk — a trust and compliance question that could affect adoption.

- **[#2779](https://github.com/nanocoai/nanoclaw/issues/2779) — Slack `@handles` in URLs get mangled** (1 comment, opened 2026-06-16)
  URLs containing `@` in the path (e.g., HackMD, Mastodon, Medium links) are incorrectly rewritten as Slack mentions, breaking the link. **Underlying need:** proper URL-aware parsing in the Slack channel adapter — a correctness bug in message rendering.

**Open PR worth watching:**

- **[#2780](https://github.com/nanocoai/nanoclaw/pull/2780) — `NANOCLAW_DISABLE_UPGRADE_TRIPWIRE` env opt-out** (opened 2026-06-16)
  Adds a managed-fleet escape hatch for the startup upgrade tripwire. Targets downstream packagers using immutable image deployments. No comments yet but addresses a real operational pain point.

---

## 5. Bugs & Stability

| Severity | Issue | Description | Fix Status |
|---|---|---|---|
| 🔴 **High** | [#2751](https://github.com/nanocoai/nanoclaw/issues/2751) — Budget-exhausted turns silently dropped | User gets no reply when LLM budget is spent | ✅ Fixed via PR [#2759](https://github.com/nanocoai/nanoclaw/pull/2759) (merged) |
| 🟡 **Medium** | [#2784](https://github.com/nanocoai/nanoclaw/issues/2784) — Container-runner staleness check misses `ipc-mcp-stdio.ts` | Session source sync only watches `index.ts`; changes to other files go undetected, potentially running stale code | ⚠️ No fix PR yet |
| 🟡 **Medium** | [#2779](https://github.com/nanocoai/nanoclaw/issues/2779) — Slack `@handle` URL mangling | Links with `@` in path are broken by Slack mention rewriting | ⚠️ No fix PR yet |
| 🟢 **Low** | [#2783](https://github.com/nanocoai/nanoclaw/issues/2783) — `SECURITY.md` documents retired v1 trust model | Documentation drift: references non-existent skill and outdated security model | ⚠️ No fix PR yet |

**Stability assessment:** The critical silent-drop bug is resolved. The container-runner staleness issue ([#2784](https://github.com/nanocoai/nanoclaw/issues/2784)) is the most pressing open bug — it could cause agents to run outdated code without the operator's knowledge.

---

## 6. Feature Requests & Roadmap Signals

| Request | Issue/PR | Signal Strength | Likely Impact |
|---|---|---|---|
| Native credentials bypass for OneCLI | [#2781](https://github.com/nanocoai/nanoclaw/issues/2781) | 🟡 Medium — single request, no reactions | Enables sandbox/container deployments without OneCLI; aligns with PR [#2780](https://github.com/nanocoai/nanoclaw/pull/2780)'s managed-fleet direction |
| Managed-fleet upgrade tripwire opt-out | [#2780](https://github.com/nanocoai/nanoclaw/pull/2780) (PR) | 🟢 Strong — PR already open, addresses real deployment pain | Likely to merge soon; signals growing enterprise/fleet adoption |

**Prediction:** The `NANOCLAW_NATIVE_CREDENTIALS` feature ([#2781](https://github.com/nanocoai/nanoclaw/issues/2781)) is a natural complement to the upgrade tripwire opt-out PR. Together they suggest NanoClaw is maturing toward managed/fleet deployment use cases. Expect a native credentials env-var feature in the next minor release.

---

## 7. User Feedback Summary

**Pain points identified today:**

1. **Silent failures erode trust.** The budget-exhaustion silent drop ([#2751](https://github.com/nanocoai/nanoclaw/issues/2751)) is the highest-severity UX issue seen this week — users had no indication anything was wrong. The fix landing the same week it was reported is a positive signal.

2. **Integration edge cases in Slack.** The `@handle` URL mangling ([#2779](https://github.com/nanocoai/nanoclaw/issues/2779)) reflects a real-world usage pattern (sharing HackMD/Mastodon links) that wasn't accounted for in the Slack adapter's mention-parsing logic.

3. **Deployment friction for downstream packagers.** Both [#2780](https://github.com/nanocoai/nanoclaw/pull/2780) and [#2781](https://github.com/nanocoai/nanoclaw/issues/2781) come from users packaging NanoClaw for constrained/sandboxed environments. This is a growing user segment with distinct needs (no OneCLI, immutable images, no interactive setup).

4. **Documentation trust gap.** The `SECURITY.md` drift ([#2783](https://github.com/nanocoai/nanoclaw/issues/2783)) and the misleading changelog breaking notice (fixed in [#2775](https://github.com/nanocoai/nanoclaw/pull/2775)) both point to documentation lagging behind code changes — a risk for a security-sensitive project.

**Satisfaction signals:** Fast turnaround on the budget-drop fix (issue opened 2026-06-12, merged 2026-06-16) and the Tailscale routing fix both suggest users are getting timely responses.

---

## 8. Backlog Watch

| Item | Age | Risk | Recommendation |
|---|---|---|---|
| [#1669](https://github.com/nanocoai/nanoclaw/issues/1669) — Credential Proxy ban risk | **72 days** (opened 2026-04-06) | 🔴 High — compliance/trust issue | Needs an authoritative maintainer response. Even a "we've assessed this, here's why it's safe" or "we need to change the design" would resolve community anxiety. The recent bump after 2 months of silence suggests it won't go away. |
| [#2069](https://github.com/nanocoai/nanoclaw/pull/2069) — Skill/webchat v1 | **50 days** (opened 2026-04-28, closed without merge) | 🟡 Medium — contributor effort wasted | Contributor invested significant work. A brief explanation of why it was closed (scope mismatch? quality? priorities?) would maintain goodwill. |
| [#2784](https://github.com/nanocoai/nanoclaw/issues/2784) — Container-runner staleness | **1 day** | 🟡 Medium — correctness bug | Fresh issue, no response yet. Given it affects code freshness in agent sessions, a prompt triage would be appropriate. |

**Maintainer action recommended:** Prioritize a response to [#1669](https://github.com/nanocoai/nanoclaw/issues/1669). It is the oldest open issue by a wide margin, touches on account security/compliance, and has been re-surfaced by the community. Leaving it unaddressed risks eroding trust in the project's Anthropic integration.

---

*Data source: [github.com/qwibitai/nanoclaw](https://github.com/qwibitai/nanoclaw) | Digest generated: 2026-06-17*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest — 2026-06-17

---

## 1. Today's Overview

NullClaw saw moderate activity on 2026-06-17 with **2 open issues** and **3 open PRs** updated in the last 24 hours, and no new releases. The project appears to be in an active bug-fix and hardening phase, with contributors circling two long-standing issues — scheduler tool access for cron jobs (#839) and MS Teams Bot Framework auth failures (#958). No PRs merged today, indicating a review backlog. No new version shipped, suggesting the team is accumulating fixes for a future point release.

---

## 2. Releases

**None.** No new releases in the last 24 hours. The `v2026.4.17` tag from mid-April remains the latest.

---

## 3. Project Progress

No PRs were merged or closed today. However, three open PRs are actively pushing key improvements:

| PR | Direction | Link |
|---|---|---|
| **#959** — `fix(cron): persist paired token for scheduler tool access` | Persists the bearer token (encrypted at rest) so cron-triggered sub-agents can call scheduler tools, resolving #839 | [PR #959](https://github.com/nullclaw/nullclaw/pull/959) |
| **#958** — `fix(teams): accept lowercase serviceUrl JWT claim & raise JWKS fetch cap` | Unblocks MS Teams inbound messaging broken by Bot Framework's lowercase `serviceUrl` claim casing and tight JWKS fetch limits | [PR #PR #958](https://github.com/nullclaw/nullclaw/pull/958) |
| **#783** — `feat(cron): cron subagent, run history, JSON output, security hardening` | Large feature PR adding DB-backed scheduling, JSON CLI output, per-job TZ offsets, and delivery routing | [PR #783](https://github.com/nullclaw/nullclaw/pull/783) |

These PRs collectively address scheduler reliability, MS Teams channel interoperability, and cron feature completeness — all high-priority areas.

---

## 4. Community Hot Topics

- **[Issue #952](https://github.com/nullclaw/nullclaw/issues/952)** — *Local model via Ollama returns incomplete answers* (2 comments, created 2026-06-11, updated 2026-06-16). This is the most recently created issue with active discussion. User attached screenshots showing truncated or fragmented model responses. This touches **local/offline AI reliability** — a core use case for NullClaw as a privacy-first personal agent. Underlying need: robust streaming and response-completion logic for Ollama backends, possibly context-window or stop-token misconfiguration.

- **[Issue #839](https://github.com/nullclaw/nullclaw/issues/839)** — *"bit has no access to scheduler"* (1 comment, originally opened 2026-04-18, bumped 2026-06-16). PR #959 directly targets this issue. Underlying need: persistent token management so headless/cron-scheduled agents can authenticate to internal services without interactive `/pair` flows.

---

## 5. Bugs & Stability

| Severity | Issue | Description | Fix PR? |
|---|---|---|---|
| **High** | [#839](https://github.com/nullclaw/nullclaw/issues/839) — Cron has no access to scheduler | Cron/subagents cannot call the scheduler tool due to missing persisted tokens. Blocks all cron-based automation. | ✅ PR [#959](https://github.com/nullclaw/nullclaw/pull/959) proposes a fix — persists encrypted bearer token to disk on `/pair`. |
| **High** | [#958](https://github.com/nullclaw/nullclaw/pull/958) — MS Teams 403 on inbound messages | MS Teams messages rejected due to case-mismatch on `serviceUrl` JWT claim + low JWKS fetch cap. Blocks entire Teams integration. | ✅ PR open with targeted fix. |
| **Medium** | [#952](https://github.com/nullclaw/nullclaw/issues/952) — Ollama/gemma returns incomplete answers | Responses from local Ollama-hosted Gemma are truncated. Impairs local AI workflows. | ❌ No fix PR yet. |

---

## 6. Feature Requests & Roadmap Signals

- **[PR #783](https://github.com/nullclaw/nullclaw/pull/783)** signals a significant **cron overhaul** coming: sub-agent engine, DB-backed run history, per-job timezone support, JSON CLI output, security hardening, and operator alerts. This has been open since April and shows no signs of closure, suggesting it may be complex to merge.
- **Persistent secrets/tokens** (PR #959) — the pattern of encrypting tokens at rest with ChaCha20-Poly1305 may be generalized to other credentials in future releases.
- **MS Teams Jap Framework compatibility** (PR #958) suggests NullClaw is actively targeting **enterprise messaging channel support**, which may expand to Slack, Discord, or similar in upcoming versions.

Likely next release content: cron subagent engine + Teams auth fix + OLlama streaming fix.

---

## 7. User Feedback Summary

| Pain Point | Context | Sentiment |
|---|---|---|
| **Local AI (Ollama) output quality** — truncated responses when using Gemma via Ollama | User pulled gemma via ollama and the agent "doesn't answer in complete sentences" | 😟 Frustrated — local model support is a key differentiator; broken output undermines trust |
| **Cron automation unreliability** — scheduler tools inaccessible from cron/bit context | Long-running issue (7+ weeks), no resolution shipped yet | 😟 Persistent pain — users expect scheduled tasks to work seamlessly |
| **MS Teams channel blocking** — 403 errors on all inbound messages | Enterprise users integrating NullClaw with Teams are completely blocked | 😟 Blocking for org adoption |
| **Positive: community is driving fixes** — multiple contributors submitting PRs for community-reported bugs | PRs #958, #959, #783 | 🙂 Healthy PR funnel — contributors are closing the loop on issues |

---

## 8. Backlog Watch

| Item | Age | Risk | Recommendation |
|---|---|---|---|
| **PR #783** — Cron subagent engine, run history, JSON output, security hardening | Opened **2026-04-07** (~10 weeks old) | High — large-scope PR risks rebase conflicts and slow review. Contains critical cron improvements. | Flag for maintainer attention; consider splitting into smaller reviewable PRs or scheduling focused review. |
| **Issue #839** — Cron has no access to scheduler | Opened **2026-04-18** (~8 weeks, bumped 2026-06-16) | Critical blocking issue for cron users. PR #959 exists but unmerged for ~1 day. | Fast-track PR #959 review and merge — this is the oldest unresolved blocker with a ready fix. |
| **Issue #952** — Ollama incomplete answers | Opened 2026-06-11, no PR | Medium — no fix proposed yet. | Add reproduction steps request; label `needs-investigation`. May require Ollama config or streaming logic changes. |

---

**Summary Assessment:** NullClaw's project health is **moderately active with a review bottleneck**. Three well-targeted PRs address three distinct bugs/features, but none have merged — suggesting the maintainers may need to prioritize review capacity. The retention of talent issues (#839, #952) alongside cron and Teams feature work indicates the project is broadening channel support and enterprise readiness. A `v2026.6.x` or `v2026.7.0` release landing the cron subagent PR (#783), the Teams auth fix (#958), and a persist-token fix (#959) would significantly improve reliability and user trust.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-06-17

---

## 1. Today's Overview

IronClaw remains in a high-activity development phase with **50 issues** and **50 PRs** updated in the last 24 hours. Of these, 28 issues and 35 PRs remain open, indicating a fast-moving backlog with significant triage pressure. No new releases were published today. The project is deep in a Reborn WebUI stabilization and Engine V2 quality improvement cycle, with multiple stacked PR chains targeting agent-loop correctness, approval-gate UX, and automation reliability. The volume of dogfooding-driven issues from the core team (particularly `sunglow666`, `think-in-universe`, and `serrrfirat`) signals an intensive internal QA sprint ahead of a likely release candidate.

---

## 2. Releases

**None.** No new versions were published on 2026-06-17.

---

## 3. Project Progress

### Merged / Closed PRs (today)

| PR | Summary |
|---|---|
| **#4902** | `feat(openai-compat)`: Vision support for inline base64 images on `/v1/chat/completions` — step 4 of the attachments epic (#4644). Inline `image_url` content parts now reach the model. |
| **#4858** | `fix(reborn)`: Shell command details now surfaced in approval prompts and Activity display (fixes #4852). Operators can now see the actual command being approved. |
| **#4954** | `fix(reborn)`: Approval-gate denial now surfaces the denial to the model instead of silently cancelling the run, breaking a re-approval loop. |
| **#4995** | `feat(bench)`: Benchmark dispatcher now forwards `NEARAI_API_KEY` so `/benchmark` reborn runs use NEAR AI cloud instead of OpenRouter. |

### Key Open PRs Advancing

- **#5003** (XL): Recovers stranded local-dev SSO automations on Railway by fixing the `creator_user_id` / `local_reborn_access` mismatch that caused pre-thread fire failures (#4992).
- **#5001** (M): Relaxes provider-output validation to stop agent give-up loops — targets PinchBench failure taxonomy buckets B, C, D in a single PR.
- **#5000** (XL): Content-digest plumbing for output-aware agent-loop progress tracking (PR2 of stacked no-progress redesign, on top of #4993).
- **#4998** (XL): Surfaces approval gates correctly after auth-resume flows, mapping authorization denials to loop-safe denied reason kinds.
- **#4997** (L): Adds host-side text extraction seam for binary Google Drive files (PDF/PPTX/DOCX/XLSX) behind `google-drive.download_file`, with a 1 MB WASM round-trip cap.
- **#5002** (L): Fixes Recent threads ordering in Reborn WebUI v2 so new conversations appear first.

---

## 4. Community Hot Topics

### Most Discussed Issues

1. **[#2721](https://github.com/nearai/ironclaw/issues/2721)** — *Engine V2 quality: Milestone 0 + multi-route execution* (3 comments, closed). The parent epic driving the current orchestrator/CodeAct quality sprint. Underlying need: Engine V2 over-relies on a single CodeAct path, making simple tasks expensive and weakening finalization. This is the architectural north star for the current work.

2. **[#4908](https://github.com/nearai/ironclaw/issues/4908)** — *Google Calendar extension shows "Activate" after already active* (3 comments, closed). Underlying need: Extension state management is inconsistent between the Extensions page and the configuration dialog, creating user confusion about authorization status.

3. **[#4942](https://github.com/nearai/ironclaw/issues/4942)** — *Tool calls failed won't appear until re-fetch/reload* (2 comments, open). Underlying need: SSE/WebUI real-time update reliability — failed tool invocations are not pushed to the UI, requiring manual refresh.

4. **[#4764](https://github.com/nearai/ironclaw/issues/4764)** — *Denying shell approval leaves tool invocation pending with no user feedback* (2 comments, open). Underlying need: Approval denial must produce clear, immediate UI feedback rather than leaving the user in an ambiguous pending state.

### Analysis

The dominant theme is **approval-gate UX correctness** — multiple issues (#4764, #4942, #4977, #4986, #4987) converge on the same underlying need: users need reliable, real-time visibility into what happened when they approve or deny a tool, and the system must not silently drop or loop on denied approvals. The PR response (#4954, #4998) shows the team is actively closing these gaps.

---

## 5. Bugs & Stability

### Ranked by Severity

| Severity | Issue | Description | Fix PR |
|---|---|---|---|
| 🔴 High | [#4992](https://github.com/nearai/ironclaw/issues/4992) | Local-dev SSO access mismatch causes Railway automations to fail before run/thread creation | [#5003](https://github.com/nearai/ironclaw/pull/5003) (open) |
| 🔴 High | [#4986](https://github.com/nearai/ironclaw/issues/4986) | Recurring automation permanently blocked waiting for tool approval | None yet |
| 🟡 Medium | [#4991](https://github.com/nearai/ironclaw/issues/4991) | WASM google-drive auth failures dead-end as `operation_failed` without refresh-retry or `AuthRequired` gate | None yet |
| 🟡 Medium | [#4942](https://github.com/nearai/ironclaw/issues/4942) | Failed tool calls invisible until page reload | None yet |
| 🟡 Medium | [#4764](https://github.com/nearai/ironclaw/issues/4764) | Shell approval denial leaves invocation pending, no feedback | None yet |
| 🟡 Medium | [#4977](https://github.com/nearai/ironclaw/issues/4977) | Approval-deny tool activity stays visible as RUN until refresh | None yet |
| 🟢 Low | [#4972](https://github.com/nearai/ironclaw/issues/4972) | "New" button font size larger than neighboring sidebar labels | None yet |
| 🟢 Low | [#4988](https://github.com/nearai/ironclaw/issues/4988) | Recent runs visualization (colored dots) is difficult to understand | None yet |
| 🟢 Low | [#5004](https://github.com/nearai/ironclaw/issues/5004) | Automations failure summary card is not actionable (no drill-down) | None yet |
| 🟢 Low | [#4982](https://github.com/nearai/ironclaw/issues/4982) | Automation row selection area is unexpectedly limited | None yet |

**Notable:** The two high-severity bugs (#4992, #4986) both relate to automation execution reliability — a critical path for IronClaw's value proposition as a personal AI assistant. #4992 has a fix PR in progress; #4986 (permanent blocking on approval) has no fix yet and deserves urgent attention.

---

## 6. Feature Requests & Roadmap Signals

| Issue | Request | Likelihood of Near-Term Delivery |
|---|---|---|
| **[#4881](https://github.com/nearai/ironclaw/issues/4881)** | Vercel-like preview deployments for IronClaw PRs | Medium — scoped as a developer experience improvement, parent issue #4878 exists |
| **[#4985](https://github.com/nearai/ironclaw/issues/4985)** | Persist LLM usage in Engine V2 so `/api/admin/usage` returns data | High — blocks observability for Engine V2 deployments |
| **[#4999](https://github.com/nearai/ironclaw/issues/4999)** | Scale google-drive `download_file` extraction beyond 1 MB WASM cap | Medium — PR #4997 just landed the 1 MB version; scaling is the next logical step |
| **[#5005](https://github.com/nearai/ironclaw/issues/5005)** | Add management actions (pause/resume/edit/delete) to Automations page | High — basic CRUD is expected for any management surface |
| **[#4983](https://github.com/nearai/ironclaw/issues/4983)** | Remove NEAR AI tool-message flattening compatibility path | Medium — tech debt cleanup, depends on NEAR AI cloud compatibility verification |

**Prediction:** The next release will likely focus on **Engine V2 usage tracking** (#4985), **automation management UX** (#5005), and **Google Drive binary file scaling** (#4999), given the active PR momentum in these areas.

---

## 7. User Feedback Summary

### Pain Points

- **Approval-gate confusion** is the dominant user-facing pain theme. Users are unsure whether their denial was processed (#4764), whether an extension is actually active (#4908), or why they need to re-authorize across conversations (#4913). The approval flow is the single most critical UX surface to get right.
- **Automation observability is poor.** Users cannot tell which automation failed (#5004), cannot see run history meaningfully (#4988), cannot discover run threads that require approval (#4987), and cannot manage automations from the dashboard (#5005). The Automations page is essentially read-only today.
- **Onboarding friction** persists: first-run onboarding blocks access to Extensions and Automations (#4793, closed), the empty state doesn't explain how to create automations (#4806), and stale extension search results show credential setup prompts for already-configured extensions (#4996, fix in progress).

### Satisfaction Signals

- The team is clearly dogfooding aggressively (#4692, #4879), which is generating high-quality, specific bug reports with reproduction steps and screenshots.
- Closed issues (#4852 → PR #4858, #4913, #4806) show responsive turnaround on UX bugs.

### Use Cases Observed

- Google Suite integration (Calendar, Drive) is a primary use case, with multiple issues around auth persistence and binary file handling.
- Scheduled automations for GitHub monitoring and other periodic checks are a key workflow.
- Shell command execution with approval gates is a common agent capability being tested.

---

## 8. Backlog Watch

### Issues Needing Maintainer Attention

| Issue | Age | Why It Matters |
|---|---|---|
| **[#4986](https://github.com/nearai/ironclaw/issues/4986)** — Recurring automation permanently blocked on tool approval | 1 day | **No fix PR.** This is a silent failure mode that breaks the core automation value proposition. A recurring automation that becomes permanently stuck without user visibility is a data-loss-adjacent problem. |
| **[#4991](https://github.com/nearai/ironclaw/issues/4991)** — WASM google-drive auth failures dead-end without retry | 1 day | **No fix PR.** Auth token expiration is inevitable; the system must handle 401s gracefully with refresh-retry or an `AuthRequired` gate. Currently it surfaces as a generic `operation_failed`. |
| **[#4692](https://github.com/nearai/ironclaw/issues/4692)** — Dogfooding findings 06/08–06/14 | 7 days | Tracking issue with no comments. Needs triage to ensure all findings were either fixed or promoted to standalone issues. |
| **[#4881](https://github.com/nearai/ironclaw/issues/4881)** — Preview deployments for PRs | 2 days | Developer experience improvement that could accelerate PR review velocity. Needs scoping decision. |

### Stale PRs Needing Review

| PR | Age | Notes |
|---|---|---|
| **[#3890](https://github.com/nearai/ironclaw/pull/3890)** — Multi-tenant isolation contract tests | 26 days | Important for security/stability but has been open for nearly a month. |
| **[#3947](https://github.com/nearai/ironclaw/pull/3947)** — Event and scheduling parity coverage | 25 days | Same pattern — test infrastructure PRs may be deprioritized but are accumulating. |
| **[#4518](https://github.com/nearai/ironclaw/pull/4518)** — Extension lifecycle e2e coverage | 11 days | Stacked PR chains may be blocking review of these foundational test PRs. |

---

*Data source: [github.com/nearai/ironclaw](https://github.com/nearai/ironclaw) | Digest generated: 2026-06-17*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-06-17

---

## 1. Today's Overview

LobsterAI saw moderate activity in the last 24 hours, with **4 pull requests updated** (3 merged/closed, 1 still open) and **1 issue updated** (still open). No new releases were published. The project is in an active feature-development and polish phase, with recent work concentrated on the **Cowork** collaboration module, **artifacts/preview** UX improvements, and **scheduled tasks** bug fixes. The overall pace suggests a team iterating on UI/UX refinements and backend correctness rather than preparing a major release.

---

## 2. Releases

**No new releases** in the reporting window. The latest known version referenced in the issue tracker is **LobsterAI v2026.4.1**.

---

## 3. Project Progress

Three PRs were merged/closed today, advancing several areas:

- **Cowork task search backed by SQLite** ([#2170](https://github.com/netease-youdao/LobsterAI/pull/2170)) — Cowork task titles are now searched directly from the backing SQLite store instead of filtering only the search modal's preloaded recent sessions. This is a meaningful backend improvement that makes search comprehensive while preserving existing session-list behavior for the home sidebar, agent previews, pagination, and shortcut task slots.

- **Artifacts preview card & browser preview UX overhaul** ([#2169](https://github.com/netease-youdao/LobsterAI/pull/2169)) — A broad polish PR covering unified preview card styling, file-type display, dark-mode hover effects, multi-file collapse, hover subtitles (e.g., "Open in LobsterAI Browser" for HTML cards), a reorganized open-with menu (built-in browser pinned to top, system apps limited to browsers), and refined right-side browser preview title/address-bar/external-open-button styling. Also includes deduplication logic fixes and added tests/spec docs.

- **Cowork scroll-to-bottom floating button** ([#2168](https://github.com/netease-youdao/LobsterAI/pull/2168)) — Adds a compact floating button for Cowork conversations with smooth scrolling, wheel passthrough, i18n labels, and click diagnostics. A small but useful UX quality-of-life improvement.

---

## 4. Community Hot Topics

Activity is relatively low-volume. The most notable items:

- **Shortcut duplicate validation missing** ([#1425](https://github.com/netease-youdao/LobsterAI/issues/1425)) — A user reports that saving a duplicate keyboard shortcut succeeds silently with no validation. This is a straightforward UX gap that has been open since early April and is now marked stale.

- **Scheduled tasks "Stop" handler is a no-op** ([#1424](https://github.com/netease-youdao/LobsterAI/pull/1424)) — An open PR (also stale-tagged since April) addresses a significant correctness bug: the IPC handler for stopping a scheduled task returns `{ success: true }` without actually stopping the task, misleading the frontend. The PR further notes that **no UI component reads `state.scheduledTask.error`**, meaning all scheduled-task operation failures are silently swallowed.

**Underlying need:** Users want reliable, feedback-rich task scheduling — both correct backend behavior and visible error states in the UI.

---

## 5. Bugs & Stability

| Severity | Item | Status |
|----------|------|--------|
| 🔴 **High** | [PR #1424](https://github.com/netease-youdao/LobsterAI/pull/1424) — Scheduled-task "Stop" IPC handler is a no-op; returns success while task keeps running. All scheduled-task operation errors are invisible to users. | Open PR exists, but stale since April — needs maintainer attention |
| 🟡 **Medium** | [Issue #1425](https://github.com/netease-youdao/LobsterAI/issues/1425) — No duplicate-check when saving keyboard shortcuts; duplicates are silently accepted. | Open, stale, no linked fix PR |

The high-severity scheduled-task bug is the most pressing stability concern. It has been open for over two months with a fix PR already submitted but not yet merged.

---

## 6. Feature Requests & Roadmap Signals

No explicit feature-request issues were updated in the last 24 hours. However, the merged PRs signal the team's current priorities:

- **Cowork module investment** — Two Cowork PRs merged (task search, scroll-to-bottom) suggest this collaboration feature is a near-term focus area.
- **Artifacts/preview polish** — The comprehensive preview-card overhaul indicates the team is maturing the document/artifacts experience, likely in preparation for broader adoption.
- **i18n attention** — The scroll-to-bottom PR explicitly mentions i18n labels, suggesting ongoing internationalization work.

**Prediction:** The next release (likely v2026.5.x or v2026.6.x) will likely ship the Cowork search improvements, preview UX refinements, and possibly the scheduled-task fix if the stale PR gets merged.

---

## 7. User Feedback Summary

- **Pain point — Silent failures:** The scheduled-task bug ([#1424](https://github.com/netease-youdao/LobsterAI/pull/1424)) is the clearest signal of user frustration: operations fail silently, and the UI gives no indication. This erodes trust in the task-scheduling feature.
- **Pain point — Missing input validation:** The shortcut duplicate issue ([#1425](https://github.com/netease-youdao/LobsterAI/issues/1425)) reflects a desire for basic guardrails in settings UI.
- **Positive signal — Active UX iteration:** The breadth of the artifacts preview PR ([#2169](https://github.com/netease-youdao/LobsterAI/pull/2169)) and the Cowork improvements suggest the team is responsive to polish and usability feedback, even if response times on older issues lag.

---

## 8. Backlog Watch

These items have been open since **April 3, 2026** (over 10 weeks) and are marked stale — they deserve maintainer triage:

1. **[PR #1424](https://github.com/netease-youdao/LobsterAI/pull/1424)** — *fix(scheduledTasks)*: Stop handler no-op + invisible error states. **High severity.** A fix PR already exists — it needs review and merge or a decision to close.
2. **[Issue #1425](https://github.com/netease-youdao/LobsterAI/issues/1425)** — Shortcut duplicate validation. Low complexity, clear reproduction steps. Could be closed with a quick fix or explicitly deferred.

Both items are at risk of being perpetually stale. The project would benefit from either merging/closing them or adding a comment to signal awareness to the community.

---

*Data source: [github.com/netease-youdao/LobsterAI](https://github.com/netease-youdao/LobsterAI) | Digest generated 2026-06-17*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

# TinyClaw Project Digest — 2026-06-17

---

## 1. Today's Overview

TinyClaw (TinyAGI/tinyagi) shows low but focused activity today. One open pull request targets a critical cross-platform compatibility issue affecting Windows users, indicating the project is actively broadening its platform support. No new issues were filed and no releases were published in the last 24 hours, suggesting the project is in a stabilization phase rather than a feature-push cycle. The single PR activity signals that contributors are prioritizing developer experience and accessibility over new capabilities. Overall, the project appears healthy with a small but engaged contributor base.

---

## 2. Releases

No new releases in the last 24 hours. The latest release information is not available in the current data window.

---

## 3. Project Progress

No PRs were merged or closed today. The sole open PR (#281) is a fix for Windows cross-platform CLI support, which, once merged, would mark a meaningful step toward making TinyClaw accessible to a broader Windows-native developer audience without requiring WSL.

---

## 4. Community Hot Topics

- **[PR #281 — fix: Windows cross-platform support in CLI](https://github.com/TinyAGI/tinyagi/pull/281)** by `@mperkins0155` (opened 2026-06-16)
  - **Underlying need:** Windows-native developers (non-WSL) are encountering `MODULE_NOT_FOUND` errors due to a doubled drive letter issue in path resolution (`new URL('.', import.meta.url).pathname` returns `/C:/Users/...` on Windows, which `path.resolve` mishandles). This is a fundamental accessibility blocker — the project cannot be used out-of-the-box on the world's most common desktop OS without it.

---

## 5. Bugs & Stability

| Severity | Issue | Status |
|----------|-------|--------|
| 🔴 High | Windows CLI fails to run natively due to path resolution bug (doubled drive letter → `MODULE_NOT_FOUND`) | Fix PR open (#281) |

This is the only active bug report in the window. The fix is already in progress via PR #281, which addresses three distinct Windows-only bugs. No crashes or regressions beyond the Windows compatibility issue were reported.

---

## 6. Feature Requests & Roadmap Signals

No explicit feature requests surfaced in the last 24 hours. However, the Windows cross-platform fix (PR #281) signals that **platform parity** is an active priority. If this PR is any indication, the project may be moving toward broader OS compatibility as a near-term goal, potentially including macOS edge cases and Linux distribution testing in future iterations.

---

## 7. User Feedback Summary

- **Pain point:** Windows users cannot run the `tinyagi` CLI natively — a significant friction point given Windows's market share in the developer tools space.
- **Satisfaction signal:** A community contributor (`@mperkins0155`) proactively submitted a fix rather than simply reporting the issue, suggesting goodwill and investment in the project.
- **Use case:** Developers want a frictionless, cross-platform CLI experience for TinyClaw without relying on WSL or containerization workarounds.

---

## 8. Backlog Watch

- **[PR #281](https://github.com/TinyAGI/tinyagi/pull/281)** — Open since 2026-06-16 with no comments or reactions yet. This is a high-impact fix that unblocks an entire platform's user base. It would benefit from prompt maintainer review and feedback to keep momentum and signal to the contributor that their effort is valued.

No stale issues were identified in the current data window.

---

*Generated by OWL — Project Intelligence, 2026-06-17*

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-06-17

---

## 1. Today's Overview

Moltis shows low-to-moderate activity today: two new enhancement requests and two open PRs, all authored by a small but engaged contributor set. No PRs or issues were closed or merged in the last 24 h, and no new releases were published. The project appears in a steady forward-movement phase — new ideas are being proposed and code is being contributed, but the review and release pipeline hasn't advanced today.

---

## 2. Releases

No new releases in the past 24 h. *(Omitted per guidance.)*

---

## 3. Project Progress

**No PRs or issues were merged or closed today.** Two open PRs remain in the review queue (see Backlog Watch / Community Hot Topics).

---

## 4. Community Hot Topics

| # | Item | Author | What it addresses | Why it matters |
|---|------|--------|-------------------|----------------|
| 🔗 | [#1126](https://github.com/moltis-org/moltis/issues/1126) — TTS output format selection | khimaros | Lets users choose the audio format for text-to-speech output (e.g., mp3, ogg, wav). | One comment indicates at least one other user cares; configurable output formats improve compatibility with downstream players and pipelines. Low traction today (0 👍, 1 comment) but the problem space is well-defined and implementable. |
| 🔗 | [#1127](https://github.com/moltis-org/moltis/issues/1127) — Configurable RPC timeout | khimaros | Exposes an RPC timeout setting so deployments behind slow connections or heavy workloads don't abort prematurely. | Zero comments yet, filed today. Mirrors the `chat.context_command` pattern in PR #1124 — part of a broader theme of making Moltis more configurable for diverse deployment environments. |

Both requests come from the **same author** (khimoros), suggesting a power user is iterating on deployability and extensibility pain points in real-world usage.

---

## 5. Bugs & Stability

No bug reports, stability issues, or crashes were opened or updated in the last 24 h. The project's current issue activity is entirely enhancement-oriented.

---

## 6. Feature Requests & Roadmap Signals

| Feature | Issue | Likelihood of inclusion | Rationale |
|---------|-------|------------------------|-----------|
| **TTS output format config** | [#1126](https://github.com/moltis-org/moltis/issues/1126) | ⭐⭐⭐ Medium | Well-scoped, no architectural changes needed, likely a small addition to the TTS provider config. |
| **RPC timeout config** | [#1127](https://github.com/moltis-org/moltis/issues/1127) | ⭐⭐⭐ Medium | Consistent with the existing philosophy of adding config knobs (see `chat.context_command` in PR #1124). Low-risk, high-value for production users. |

**Underlying signal:** The need for **environment-level seamlessness** (PRs #1124, #1125) and **deployment-level configuration** (issues #1126, #1127) are converging. Both PRs (#1124, #1125) and the new requests point to a broader theme: **Moltis is maturing from a tool to a platform**, with users asking for more control over how it adapts to their specific infrastructure and workflows.

---

## 7. User Feedback Summary

- **khimaros** (2 issues) is signaling that out-of-the-box defaults for TTS and RPC may not match every deployment. This is a classic "it works locally but needs tuning in production" signal.
- The two PRs from **gptme-thomas** reinforce the same theme: external-agent contexts, model/effort selection, and chat-turn context injection all speak to users who want Moltis to be a **configurable backbone** rather than a closed system.
- No explicit dissatisfaction or blockers were voiced — all feedback today is constructive, forward-looking, and additive.

---

## 8. Backlog Watch

| Item | Age | Status | Why it needs attention |
|------|-----|--------|------------------------|
| 🔗 [#1124](https://github.com/moltis-org/moltis/pull/1124) — `chat.context_command` for chat turns | 2 days | OPEN, no merged activity | Well-scoped PR with config schema, template, validation, and docs — appears review-ready. Ties directly to the configurability theme driving today's new requests. |
| 🔗 [#1125](https://github.com/moltis-org/moltis/pull/1125) — Model/effort selection for external agents | 2 days | OPEN, no merged activity | Adds first-class `/model` support for external-agent providers. Completes a usability gap for multi-agent or multi-model setups. |

**Recommendation:** Both PRs are from the same author, were created on the same day, and have seen no review comments or closure in 2 h. A brief review or status check from a maintainer would prevent them from going stale — they align closely with the direction the project is already heading.

---

*Digest generated by OWL for 2026-06-17. Data source: github.com/moltis-org/moltis.*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-06-17

---

## 1. Today's Overview

CoPaw (agentscope-ai/CoPaw) is experiencing **exceptionally high activity** with 41 issues and 40 PRs updated in the last 24 hours, indicating a highly engaged contributor base and a project in active development. A new beta release **v1.1.12-beta.1** shipped today, focusing on security hardening and CI stability. The project is simultaneously battling several **critical stability regressions** — most notably context compaction freezes, macOS SIGSEGV crashes, and cron task interference — while advancing meaningful features like Headroom context compression, governance/sandbox interfaces, and console UX improvements. The volume of first-time contributors is notable, with many PRs from newcomers being merged rapidly.

---

## 2. Releases

### v1.1.12-beta.1 (released 2026-06-17)

| Change | Type | Details |
|--------|------|---------|
| Security: isolate keychain master key per install | 🔒 Security fix | Prevents cross-install keychain credential leakage |
| Desktop: harden Tauri Windows CI against crates.io fetch failures | 🔧 CI fix | Improves build reliability for Windows desktop releases |
| Refactor (context) | 🔨 Refactor | Internal context management improvements (truncated in release notes) |

**Migration notes:** No breaking changes identified in this beta. Users on v1.1.11.post2 experiencing the macOS SIGSEGV crash or context compaction freeze should test this release, though dedicated fixes for those issues are still in PR (see §5).

---

## 3. Project Progress

### Merged/Closed PRs (20 total today)

| PR | Description | Impact |
|----|-------------|--------|
| [#5248](https://github.com/agentscope-ai/CoPaw/pull/5248) | feat(console): add OSC 8 clickable links in ConsoleChannel | UX improvement — terminal links now clickable in modern terminals |
| [#5247](https://github.com/agentscope-ai/CoPaw/pull/5247) | feat(coding): Ponytail philosophy + zero-dep code indexer | New coding mode with injectable agent rules and instant code understanding |
| [#5240](https://github.com/agentscope-ai/CoPaw/pull/5240) | perf(config): remove unnecessary deep copy in agent config caching | Performance fix — reduces memory and CPU overhead in config loading |
| [#5222](https://github.com/agentscope-ai/CoPaw/pull/5222) | feat(console): simple mode with flat nav and sorted session list | Addresses [#4994](https://github.com/agentscope-ai/CoPaw/issues/4994) — sidebar simplification |
| [#5226](https://github.com/agentscope-ai/CoPaw/pull/5226) | fix(gemini): sanitize tool schemas to prevent 400 INVALID_ARGUMENT | Fixes Gemini function-calling failures with `additionalProperties`/`anyOf` patterns |
| [#5228](https://github.com/agentscope-ai/CoPaw/pull/5228) | fix: use formatter for title generation and skills to support all model providers | Fixes Gemini compatibility in title generation and skill streaming |
| [#5229](https://github.com/agentscope-ai/CoPaw/pull/5229) | fix(config): ensure deep copy of cached agent configurations | Fixes [#5206](https://github.com/agentscope-ai/CoPaw/issues/5206) — prevents config cache mutation corruption |
| [#5201](https://github.com/agentscope-ai/CoPaw/pull/5201) | test(integration): Sprint 2.4 cron execution and tool API tests | Test infrastructure improvement |
| [#5232](https://github.com/agentscope-ai/CoPaw/pull/5232) | feat(chat): show fallback message when response output is empty | UX polish — prevents blank responses |

### Key Open PRs Under Active Review

| PR | Description | Status |
|----|-------------|--------|
| [#5088](https://github.com/agentscope-ai/CoPaw/pull/5088) | feat: initial governance & sandbox interface discussion | Breaking change, under review since Jun 10 |
| [#5244](https://github.com/agentscope-ai/CoPaw/pull/5244) | feat(context): add HeadroomContextManager for optional context compression | First-time contributor, addresses [#5063](https://github.com/agentscope-ai/CoPaw/issues/5063) |
| [#5246](https://github.com/agentscope-ai/CoPaw/pull/5246) | fix(memory): add config overrides for chromadb SIGSEGV on macOS | First-time contributor, addresses [#5243](https://github.com/agentscope-ai/CoPaw/issues/5243) |
| [#5242](https://github.com/agentscope-ai/CoPaw/pull/5242) | fix(compaction): add timeout protection to agent.reply() in _compact_context | Addresses [#5218](https://github.com/agentscope-ai/CoPaw/issues/5218) |
| [#5241](https://github.com/agentscope-ai/CoPaw/pull/5241) | fix(cron): increase default misfire_grace_seconds from 60 to 3600 | Addresses [#5235](https://github.com/agentscope-ai/CoPaw/issues/5235) |
| [#5238](https://github.com/agentscope-ai/CoPaw/pull/5238) | fix(desktop): repair Tauri plugin dependencies | Addresses [#5209](https://github.com/agentscope-ai/CoPaw/issues/5209) |
| [#4622](https://github.com/agentscope-ai/CoPaw/pull/4622) | plugin(datapaw): add data-analysis plugin with 12 BI skills | Under review since May 22 |

---

## 4. Community Hot Topics

### Most Discussed Issues (by comment count)

1. **[#5218](https://github.com/agentscope-ai/CoPaw/issues/5218)** — [Bug] 子Agent触发上下文压缩时QwenPaw进程冻结无响应 (14 comments)
   - **Underlying need:** Context compaction is a critical path operation. When sub-agents trigger it, the entire process hangs with no recovery path. Users need either timeout protection, graceful degradation, or async compaction. This is the **most urgent stability issue** in the project.
   - **Fix PR:** [#5242](https://github.com/agentscope-ai/CoPaw/pull/5242) adds timeout protection to `agent.reply()` in `_compact_context`.

2. **[#5063](https://github.com/agentscope-ai/CoPaw/issues/5063)** — [Feature] Integrate Headroom as optional context compression layer (6 comments)
   - **Underlying need:** Token cost reduction (60–95%) is a major user concern. Users want pluggable, reversible compression for tool outputs, conversation history, and RAG chunks.
   - **Fix PR:** [#5244](https://github.com/agentscope-ai/CoPaw/pull/5244) implements `HeadroomContextManager`.

3. **[#4625](https://github.com/agentscope-ai/CoPaw/issues/4625)** — [Bug] MiniMax-M2.5 思考过程返回XML格式导致不兼容 (6 comments)
   - **Underlying need:** Model provider compatibility. Non-OpenAI models with different reasoning/thinking output formats break the agent's instruction execution. Needs a more robust content-type negotiation or adapter pattern.

4. **[#5167](https://github.com/agentscope-ai/CoPaw/issues/5167)** — [Feature] Feishu CardKit流式卡片长回复刷新较慢 (5 comments, closed)
   - **Underlying need:** Streaming card performance in Feishu channel degrades significantly with long responses, creating a "character-by-character" rendering experience.

5. **[#5161](https://github.com/agentscope-ai/CoPaw/issues/5161)** — [Question] 长对话后QwenPaw无响应 (5 comments)
   - **Underlying need:** Related to context management — long conversations cause unresponsiveness, likely tied to context window exhaustion or compaction failures.

---

## 5. Bugs & Stability

### Critical (crashes, data loss, complete unresponsiveness)

| Severity | Issue | Description | Fix PR | Status |
|----------|-------|-------------|--------|--------|
| 🔴 Critical | [#5218](https://github.com/agentscope-ai/CoPaw/issues/5218) | Context compaction freezes entire QwenPaw process | [#5242](https://github.com/agentscope-ai/CoPaw/pull/5242) | PR open |
| 🔴 Critical | [#5243](https://github.com/agentscope-ai/CoPaw/issues/5243) | macOS SIGSEGV crash in ChromaDB Rust bindings (48 crashes in 2 days) | [#5246](https://github.com/agentscope-ai/CoPaw/pull/5246) | PR open |
| 🔴 Critical | [#5209](https://github.com/agentscope-ai/CoPaw/issues/5209) | Tauri Desktop crash loop on macOS ARM64 (~1 min cycle) | [#5238](https://github.com/agentscope-ai/CoPaw/pull/5238) | PR open |
| 🔴 Critical | [#5206](https://github.com/agentscope-ai/CoPaw/issues/5206) | `load_agent_config` returns cached reference, causing config corruption | [#5229](https://github.com/agentscope-ai/CoPaw/pull/5229) | ✅ Merged |

### High (feature broken, workaround exists)

| Severity | Issue | Description | Fix PR | Status |
|----------|-------|-------------|--------|--------|
| 🟠 High | [#5250](https://github.com/agentscopes-ai/CoPaw/issues/5250) | Cron tasks interrupt main chat conversation | — | Open, no PR |
| 🟠 High | [#5235](https://github.com/agentscope-ai/CoPaw/issues/5235) | Cron scheduled tasks not executing at scheduled time | [#5241](https://github.com/agentscope-ai/CoPaw/pull/5241) | PR open |
| 🟠 High | [#5214](https://github.com/agentscope-ai/CoPaw/issues/5214) | DingTalk Stream channel silently dies after macOS sleep/wake | — | Closed (root cause identified: half-open TCP) |
| 🟠 High | [#5208](https://github.com/agentscope-ai/CoPaw/issues/5208) | Assistant message count mismatch with `reasoning` vs `thinking` block types | — | Open, no PR |
| 🟠 High | [#5161](https://github.com/agentscope-ai/CoPaw/issues/5161) | QwenPaw stops responding after long conversation | — | Open, no PR |

### Medium (inconvenience, partial functionality)

| Severity | Issue | Description | Fix PR | Status |
|----------|-------|-------------|--------|--------|
| 🟡 Medium | [#5207](https://github.com/agentscope-ai/CoPaw/issues/5207) | Inconsistent path resolution between file tools and shell commands | — | Open, no PR |
| 🟡 Medium | [#5225](https://github.com/agentscope-ai/CoPaw/issues/5225) | Workspace temporary files clutter root directory | — | Open, no PR |
| 🟡 Medium | [#5233](https://github.com/agentscope-ai/CoPaw/issues/5233) | Ollama model has no options available in UI | — | Closed |
| 🟡 Medium | [#4625](https://github.com/agentscope-ai/CoPaw/issues/4625) | MiniMax-M2.5 XML format incompatibility | — | Open since May 22 |

---

## 6. Feature Requests & Roadmap Signals

### Likely in Next Release (v1.1.12 or v1.1.13)

| Feature | Issue | Signal Strength | Notes |
|---------|-------|-----------------|-------|
| Headroom context compression | [#5063](https://github.com/agentscope-ai/CoPaw/issues/5063) → [#5244](https://github.com/agentscope-ai/CoPaw/pull/5244) | 🟢 Strong | PR already open, 6 comments of interest |
| Cron misfire grace period increase | [#5235](https://github.com/agentscope-ai/CoPaw/issues/5235) → [#5241](https://github.com/agentscope-ai/CoPaw/pull/5241) | 🟢 Strong | Simple fix, PR open |
| Tauri Desktop stability | [#5209](https://github.com/agentscope-ai/CoPaw/issues/5209) → [#5238](https://github.com/agentscope-ai/CoPaw/pull/5238) | 🟢 Strong | Critical crash loop, PR open |
| ChromaDB crash workaround | [#5243](https://github.com/agentscope-ai/CoPaw/issues/5243) → [#5246](https://github.com/agentscope-ai/CoPaw/pull/5246) | 🟢 Strong | 48 crashes in 2 days, PR open |
| Context compaction timeout | [#5218](https://github.com/agentscope-ai/CoPaw/issues/5218) → [#5242](https://github.com/agentscope-ai/CoPaw/pull/5242) | 🟢 Strong | Most-discussed issue, PR open |

### Medium-Term Candidates

| Feature | Issue | Signal |
|---------|-------|--------|
| Agent self-evolution mechanism | [#5205](https://github.com/agentscope-ai/CoPaw/issues/5205) | 3 comments, novel concept |
| WeCom image+text combined messages | [#5217](https://github.com/agentscope-ai/CoPaw/issues/5217) | 3 comments, channel parity |
| DataPaw analytics plugin | [#4622](https://github.com/agentscope-ai/CoPaw/pull/4622) | Under review since May 22 |
| Governance & sandbox interface | [#5088](https://github.com/agentscope-ai/CoPaw/pull/5088) | Breaking change, under review since Jun 10 |
| Console simple mode | [#4904](https://github.com/agentscope-ai/CoPaw/issues/4904) → [#5222](https://github.com/agentscope-ai/CoPaw/pull/5222) | ✅ Merged |

### Long-Shot / Needs Discussion

| Feature | Issue | Notes |
|---------|-------|-------|
| Kimi-for-coding support | [#5156](https://github.com/agentscope-ai/CoPaw/issues/5156) | Closed, but underlying demand for non-official-API model access remains |
| Vietnamese localization | [#5169](https://github.com/agentscope-ai/CoPaw/issues/5169) → [#5245](https://github.com/agentscope-ai/CoPaw/pull/5245) | PR open, low controversy |

---

## 7. User Feedback Summary

### Pain Points

1. **Stability is the #1 concern.** Multiple users report complete process freezes ([#5218](https://github.com/agentscope-ai/CoPaw/issues/5218), [#5161](https://github.com/agentscope-ai/CoPaw/issues/5161)), crash loops ([#5209](https://github.com/agentscope-ai/CoPaw/issues/5209), [#5243](https://github.com/agentscope-ai/CoPaw/issues/5243)), and silent channel failures ([#5214](https://github.com/agentscope-ai/CoPaw/issues/5214)). The common thread is **unrecoverable states requiring manual restart**.

2. **Context management is a systemic weakness.** Issues span compaction freezes ([#5218](https://github.com/agentscope-ai/CoPaw/issues/5218)), long-conversation unresponsiveness ([#5161](https://github.com/agentscope-ai/CoPaw/issues/5161)), token cost concerns ([#5063](https://github.com/agentscope-ai/CoPaw/issues/5063)), and reasoning block format mismatches ([#5208](https://github.com/agentscope-ai/CoPaw/issues/5208)). The project needs a more robust context lifecycle.

3. **Model provider fragmentation.** Users struggle with non-OpenAI models — MiniMax XML format ([#4625](https://github.com/agentscope-ai/CoPaw/issues/4625)), Gemini schema incompatibility ([#5226](https://github.com/agentscope-ai/CoPaw/pull/5226)), Ollama UI issues ([#5233](https://github.com/agentscope-ai/CoPaw/issues/5233)), and Kimi-for-coding access ([#5156](https://github.com/agentscope-ai/CoPaw/issues/5156)).

4. **Desktop app quality.** Tauri-specific crashes ([#5209](https://github.com/agentscope-ai/CoPaw/issues/5209)), UI layout complaints ([#5211](https://github.com/agentscope-ai/CoPaw/issues/5211)), and CI fragility suggest the desktop distribution needs dedicated QA attention.

5. **Cron/scheduled task UX.** Users are confused by cron tasks injecting into the main chat stream ([#5250](https://github.com/agentscope-ai/CoPaw/issues/5250), [#5249](https://github.com/agentscope-ai/CoPaw/issues/5249)) and tasks not firing reliably ([#5235](https://github.com/agentscope-ai/CoPaw/issues/5235)).

### Satisfaction Signals

- Console UX improvements (simple mode [#5222](https://github.com/agentscope-ai/CoPaw/pull/5222), session filtering [#5178](https://github.com/agentscope-ai/CoPaw/pull/5178), clickable links [#5248](https://github.com/agentscope-ai/CoPaw/pull/5248)) are being actively merged — the team is responsive to UX feedback.
- The Ponytail coding philosophy PR [#5247](https://github.com/agentscope-ai/CoPaw/pull/5247) was merged same-day, showing the team values contributor enthusiasm.
- Vietnamese localization request [#5169](https://github.com/agentscope-ai/CoPaw/issues/5161) got a PR ([#5245](https://github.com/agentscope-ai/CoPaw/pull/5245)) within 3 days.

---

## 8. Backlog Watch

### Issues Needing Maintainer Attention (>7 days old, no resolution)

| Issue | Age | Description | Risk |
|-------|-----|-------------|------|
| [#4625](https://github.com/agentscope-ai/CoPaw/issues/4625) | 26 days | MiniMax-M2.5 XML format incompatibility | Model compatibility gap; affects all MiniMax users |
| [#4632](https://github.com/agentscope-ai/CoPaw/issues/4632) | 26 days | Missing reliable multi-line text writing tool | Closed but marked `invalid` — underlying need (skill creation, config editing) may be unmet |
| [#4970](https://github.com/agentscope-ai/CoPaw/issues/4970) | 12 days | `loop_config.json`/`prd.json` corruption crashes entire agent session | Data resilience issue; closed but unclear if fix was implemented |
| [#4988](https://github.com/agentscope-ai/CoPaw/issues/4988) | 11 days | Session filename duplication causes Windows MAX_PATH overflow | Closed; verify fix covers all session file write paths |
| [#5207](https://github.com/agentscope-ai/CoPaw/issues/5207) | 2 days | Inconsistent path resolution between file tools and shell commands | Growing confusion; needs design decision on canonical path format |
| [#5208](https://github.com/agentscope-ai/CoPaw/issues/5208) | 2 days | Reasoning block type mismatch (`reasoning` vs `thinking`) | Affects all non-OpenAI reasoning models; needs adapter pattern |

### PRs Aging Without Review

| PR | Age | Description | Note |
|----|-----|-------------|------|
| [#5088](https://github.com/agentscope-ai/CoPaw/pull/5088) | 7 days | Governance & sandbox interface (breaking change) | Needs architectural discussion; tagged as breaking |
| [#4622](https://github.com/agentscope-ai/CoPaw/pull/4622) | 26 days | DataPaw analytics plugin with 12 BI skills | Significant contribution; needs review bandwidth |
| [#5158](https://github.com/agentscope-ai/CoPaw/pull/5158) | 5 days | Console user input queue | Marked "Not Ready" — needs author follow-up |

---

*CoPaw Digest generated by OWL for 2026-06-17. Data source: agentscope-ai/CoPaw GitHub repository.*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw Project Digest — 2026-06-17

**Source:** [github.com/qhkm/zeptoclaw](https://github.com/qhkm/zeptoclaw)

---

## 1. Today's Overview

ZeptoClaw had a quiet day with minimal human-driven activity. No issues were opened or updated in the past 24 hours, and no new releases were published. A single Dependabot pull request was raised to bump the Debian base Docker image (`trixie-slim`) to a newer digest, reflecting routine dependency hygiene. Overall, the project appears to be in a stable, maintenance-oriented lull with no urgent signals from the community or maintainers today. The pipeline is running but the cadence is low.

---

## 2. Releases

**None.** No new versions or tags were published in the last 24 hours.

---

## 3. Project Progress

| PR | Status | Summary |
|---|---|---|
| [#630](https://github.com/qhkm/zeptoclaw/pull/630) — `chore(deps): bump debian from `b6e2a15` to `4e401d9`` | **OPEN** (Dependabot) | Routine Docker base-image digest bump within `trixie-slim`. Not yet merged. |

No human-authored or merged PRs were recorded today.

---

## 4. Community Hot Topics

**None.** There are zero open issues and zero comments or reactions on the single Dependabot PR. No community-facing discussions or feature-adjacent conversations surfaced in the last 24 hours.

---

## 5. Bugs & Stability

**No bug reports, crash reports, or regressions were filed in the last 24 hours.** Stability signals are neutral — no new issues surfaced.

---

## 6. Feature Requests & Roadmap Signals

**No new feature requests** were recorded today. There are no open issues to analyze for roadmap implications.

---

## 7. User Feedback Summary

**No user feedback was posted** in the last 24 hours. The silence suggests either satisfaction with the current state, low active user engagement today, or that feedback is being channeled elsewhere (e.g., Discussions, external forums).

---

## 8. Backlog Watch

| Item | Type | Signal |
|---|---|---|
| [#630](https://github.com/qhkm/zeptoclaw/pull/630) — Dependabot: Debian base image bump | PR | Open for ≤1 day; merits a quick review/merge to keep the Docker base current. |

All other areas of the backlog appear empty (zero open issues). The only item needing maintainer attention is the pending Dependabot PR, which is routine and low-risk but should be processed before it falls behind the rolling base-image digest.

---

**Overall Health Pulse:** 🟢 Stable — low volume, no fires, no user noise. The project is coasting in maintenance mode with a single automated dependency update awaiting merge.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

⚠️ Summary generation failed.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/DenisZheng/agents-radar).*