# OpenClaw Ecosystem Digest 2026-07-08

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-07-08 01:28 UTC

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

# OpenClaw Project Digest — 2026-07-08

## Today's Overview

The OpenClaw project shows extremely high activity, with **500 issues** and **500 pull requests** updated in the last 24 hours (379 open issues, 361 open PRs). No new releases were published today. The project has a very healthy PR pipeline with 139 merged/closed PRs in the window. Activity spans the full stack — from core agent runtime, memory storage, and sandbox fixes to channel-specific improvements (Discord, Slack, Telegram, Feishu, QQ, Google Meet). The community is highly engaged with mature rating systems on issues (Diamond Lobster, Platinum Hermit) indicating high-value, well-documented bug reports. **Key concern**: a substantial number of open issues carry `needs-maintainer-review` and `needs-product-decision` labels, suggesting maintainer bandwidth may be stretched.

## Releases

No new releases were published today. The latest reported stable version is **OpenClaw 2026.5.20** (referenced in issue #85333) with regression impacting `2026.3.x` series issues.

## Project Progress

The following PRs were merged/closed today (selected notable items):
- **#101887** — `feat(crestodian): guide providerless model setup` (closed) — improves first-run onboarding for new users without a configured model provider
- **#68936** — `Autofix: add PR review autofix pipeline + Windows daemon` (closed) — adds automated PR review pipeline using Claude Agent SDK
- **#90370** — `[Feature Request] 支持PostgreSQL替代SQLite作为内部存储` (closed) — PostgreSQL storage support request, decision made
- **#40418** — `Automated Session Memory Preservation & Synthesis` (closed) — session memory persistence feature resolved
- **#45388** — `TUI --session mode doesn't live-stream messages` (closed) — TUI streaming bug fixed
- **#52972** — `Incorrect 'I did not schedule a reminder' note appended to messages` (closed) — reminder scheduling UX bug fixed

Notable open PRs with recent activity:
- **#98236** — `refactor: flip sessions and transcripts to sqlite storage` (XL, P1, waiting on author) — major data storage architecture change
- **#89040** — `perf: avoid event-loop stall during embedded_run bootstrap-context` (XL, P1, waiting on author) — addresses 14-22s event-loop stalls causing message loss
- **#101745** — `docs: explain pull request automation workflow` (automerge armed) — ClawSweeper bot documentation

## Community Hot Topics

### Most Active Issues (by comment count)

1. **#25592** (33 comments) — *Text between tool calls leaks to messaging channels*  
   [Diamond Lobster, P1, security]  
   🔗 https://github.com/openclaw/openclaw/issues/25592  
   **Analysis**: Critical UX/security issue. Internal agent processing text gets routed to public channels (Slack, iMessage). Multiple review tags (`needs-security-review`, `needs-product-decision`) indicate unresolved design tension. **Next version prediction**: High priority for security fix.

2. **#44925** (21 comments) — *Subagent completion silently lost — no retry, no notification, no auto-restart on timeout*  
   [Diamond Lobster, P1]  
   🔗 https://github.com/openclaw/openclaw/issues/44925  
   **Analysis**: Subagent orchestration reliability failure. Results silently lost in multiple failure modes (E31, E42, E45). **Underlying need**: Robust subagent lifecycle management with observability.

3. **#11829** (20 comments) — *Security Roadmap: Protecting API Keys from Agent Access*  
   [Security]  
   🔗 https://github.com/openclaw/openclaw/issues/11829  
   **Analysis**: Comprehensive security roadmap covering LLM provider keys, chat exposure, and sandbox leaks. High community engagement. **Next version prediction**: Likely partial implementation in upcoming release.

4. **#22676** (17 comments) — *Signal daemon stop() race condition on SIGUSR1 restart*  
   [Diamond Lobster, P1, crash-loop]  
   🔗 https://github.com/openclaw/openclaw/issues/22676  
   **Analysis**: Gateway restart race condition causing orphaned processes and send failures. Updated today indicating active investigation.

5. **#22438** (17 comments) — *Tiered bootstrap file loading for progressive context control*  
   [Diamond Lobster, P2]  
   🔗 https://github.com/openclaw/openclaw/issues/22438  
   **Analysis**: Feature request to reduce LLM token waste by loading only relevant bootstrap files per session type. **Underlying need**: Cost optimization for large workspaces.

6. **#39604** (13 comments, 11 👍) — *Add tools.web.fetch.allowPrivateNetwork to allow private network access*  
   [Diamond Lobster, P2, security]  
   🔗 https://github.com/openclaw/openclaw/issues/39604  
   **Analysis**: Most upvoted issue. Users need opt-in private network access for `web_fetch`. Security vs. functionality tension.

7. **#42840** (8 comments, 9 👍) — *Add MathJax/LaTeX Support to Control UI*  
   [Diamond Lobster, P2]  
   🔗 https://github.com/openclaw/openclaw/issues/42840  
   **Analysis**: Strong user demand for scientific/mathematical content rendering.

### Most Active Pull Requests
- **#101926** — *Keep native /think menus responsive* (recent, 2026-07-08) — Channel responsiveness fix
- **#101932** — *Avoid stalls when parent token probing hangs* (recent, 2026-07-08) — Session creation reliability

## Bugs & Stability

### Critical Bugs (Diamond Lobster / Platinum Hermit rated)

| Issue | Severity | Summary | Has Fix PR? |
|-------|----------|---------|-------------|
| #25592 | 🔴 P1, Security | Text between tool calls leaks to messaging channels | No |
| #44925 | 🔴 P1, Message Loss | Subagent completion silently lost | No |
| #22676 | 🔴 P1, Crash-loop | Signal daemon race condition on restart | No |
| #85333 | 🟠 P1, Performance | `doctor --fix` 4-5x slower (55s → 229s+) | Yes (waiting on author) |
| #31583 | 🔴 P1, Regression | `exec` tool doesn't inherit `skills.entries.*.env` vars | No |
| #99241 | 🟠 P1, Message Loss | Tool outputs rendered as unreadable image attachments | No |
| #29387 | 🔴 P1, Security | Bootstrap files in agentDir silently ignored | No |
| #38327 | 🔴 P1, Crash-loop | "Cannot convert undefined or null to object" with Google Vertex/Gemini | No |
| #96857 | 🟠 Normal | Tool text outputs degrade to `(see attached image)` placeholders | No |
| #41744 | 🔴 P1, Message Loss | Feishu read image tool loses media before delivery | No |
| #40001 | 🔴 P1, Data Loss | Write tool lacks append mode — cron sessions destroy shared files | No |
| #85334 | 🟠 P2 | `doctor --fix` auto-injects circular plugin path | No |
| #43747 | 🟠 P2, Regression | Memory management chaos — inconsistent behavior across users | No |

### Key Observations
- **Regressions**: Multiple regression reports (#31583, #38327, #38439, #41201, #43747) indicate recent releases introduced instability
- **Message loss**: 5+ distinct issues related to message/data loss (text leakage, silent subagent loss, image attachment degradation, Feishu media loss, cron file overwrite)
- **Performance regression**: #85333 documents a 4-5x slowdown in `doctor --fix` between versions 2026.5.19 and 2026.5.20 (55s → 229s+)
- **Memory inconsistency**: #43747 describes completely different memory management behavior across three users of the same version

## Feature Requests & Roadmap Signals

### High-Community-Interest Features

1. **PostgreSQL Storage Support** (#90370, closed) — Despite closure, strong demand (12 comments, 2 👍) for replacing SQLite as internal storage. **Prediction**: May reappear as a roadmap item.

2. **Tiered Bootstrap File Loading** (#22438, P2, Diamond Lobster) — Progressive context control for LLM token optimization. **Prediction**: Likely in next 2 releases due to cost optimization value.

3. **Per-Agent Cost Budget Enforcement** (#42475, P2, Diamond Lobster) — Daily/monthly cost caps at gateway level. **Prediction**: High priority for enterprise adoption.

4. **Distributed Agent Runtime** (#42026, P2) — Split control plane from agent compute. **Prediction**: Long-term architecture, not imminent.

5. **Lifecycle Hooks** (#43454, P3) — `onSubagentComplete`, `onToolCallThreshold`, `onTurnComplete`. **Prediction**: Could accelerate given the subagent reliability issues in #44925.

6. **MathJax/LaTeX Support** (#42840, 9 👍) — Scientific content rendering in Control UI. **Prediction**: Likely soon given high upvote count.

7. **Theme Customization System** (#28300, 5 👍) — Preset themes + custom theme studio. **Prediction**: Low priority, future release.

8. **Post-subagent Completion Extension Hook** (#22358, P2) — Structured trajectory generation. **Prediction**: Related to #44925 reliability work.

9. **Gateway Lifecycle Hooks** (#43454) — Event-driven workspace hook triggers. **Prediction**: Lower priority.

10. **Configurable Shell Override** (#49931) — Windows shell config for exec tool. **Prediction**: Likely soon given Windows user pain.

## User Feedback Summary

### Common Pain Points

1. **Message integrity issues** — Users report text between tool calls leaking to channels (#25592), tool outputs degrading to image placeholders (#99241, #96857), and cron sessions destroying shared files (#40001)
2. **Subagent reliability** — Multiple reports of silent failures, lost results, and race conditions in multi-agent orchestration (#44925, #43367, #39476)
3. **Security concerns** — API key exposure risks (#11829), private network access blocked (#39604), sensitive data in backups (#40786)
4. **Memory and state management** — Inconsistent memory behavior across users (#43747), bootstrap files ignored (#29387), session state lost on reset (#40418)
5. **Platform-specific issues** — Docker sandbox workspace mounting problems (#31331), Windows shell limitations (#49931), Feishu media attachment loss (#41744)

### Satisfaction Signals
- Active community engagement with detailed bug reports and ratings
- Multiple PRs being reviewed and merged daily
- Feature requests receiving significant upvotes (+11 for #39604, +9 for #42840)
- Users willing to provide reproduction steps and workarounds

### Dissatisfaction Signals
- Multiple "regression" tags indicating quality control issues in recent releases
- `needs-maintainer-review` and `needs-product-decision` tags suggest stalled decisions
- Some critical bugs (e.g., #25592 text leakage) have been open since February 2026 (5 months)
- User reports of "chaos" in memory management (#43747) and "unstable" multi-agent orchestration (#43367)

## Backlog Watch

### Issues Needing Maintainer Attention

| Issue | Age | Tags | Reason for Concern |
|-------|-----|------|-------------------|
| #25592 | Since 2026-02-24 | P1, security, needs-maintainer-review, needs-product-decision | 5 months open, critical security/UX bug, 33 comments, no decision |
| #11829 | Since 2026-02-08 | Security | 5 months open, comprehensive security roadmap, 20 comments, no decision |
| #29387 | Since 2026-02-28 | P1, security, needs-maintainer-review, needs-product-decision | Bootstrap files silently ignored, 5 👍, linked PR open but stalled |
| #31583 | Since 2026-03-02 | P1, regression, needs-maintainer-review, needs-product-decision | Exec tool regression breaks env variable injection, linked PR open |
| #37634 | Since 2026-03-06 | P1, security, needs-maintainer-review | Sandbox workspaceAccess="none" gives read-only mounts, 7 👍 |
| #31331 | Since 2026-03-02 | P1, security, needs-maintainer-review, needs-product-decision | Docker + Sandbox workspace mounting impossible, 4 👍 |
| #85333 | Since 2026-05-22 | Stale, P1, needs-live-repro | Critical performance regression, 15 comments, may have gone stale |
| #89040 | Since 2026-06-01 | P1, waiting on author | XL PR for event-loop stall fix — critical for message delivery |

### PRs Needing Attention

| PR | Age | Tags | Reason for Concern |
|----|-----|------|-------------------|
| #98236 | Since 2026-06-30 | P1, XL, waiting on author | Major storage refactor — sessions/transcripts to SQLite |
| #89040 | Since 2026-06-01 | P1, waiting on author | Critical performance fix for 14-22s event-loop stalls |
| #89041 | Since 2026-06-01 | P1, security-boundary, ready for maintainer look | Discord WebSocket fix for connection drops |
| #89038 | Since 2026-06-01 | P1, ready for maintainer look | QQbot reconnection fix |

**Overall Health Assessment**: The project is highly active but showing signs of maintainer bandwidth constraints, with critical bugs aging 3-5 months without resolution. The high ratio of open issues (379) to closed (121) in 24h suggests a growing backlog. The community is technically sophisticated (detailed bug reports with reproduction steps) and engaged (high-quality issue ratings). **Most urgent**: Resolve the text leakage security bug (#25592) and subagent silent failure (#44925) which have been open for months and impact core user experience.

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report — AI Agent Ecosystem
**Date:** 2026-07-08

---

## 1. Ecosystem Overview

The personal AI assistant open-source ecosystem is experiencing **intense, security-conscious maturation**. Across nine monitored projects, development velocity remains exceptionally high—projects like OpenClaw (500+ issues/PRs daily) and IronClaw (50 PRs, 31 issues) demonstrate sustained investment. However, a **coordinated wave of security disclosures** has hit several projects simultaneously, with TinyClaw (9 critical vulns), LobsterAI (3), and NanoBot (3) all receiving high-severity reports from independent researchers in the same 24-hour window. This suggests the ecosystem is undergoing a **community-driven security audit** as deployments move from experimental to production. Simultaneously, projects are converging on shared architectural patterns—MCP stability, subagent orchestration, multi-channel support, and memory management—while competing on developer experience, documentation accuracy, and platform breadth.

---

## 2. Activity Comparison

| Project | Issues Updated (24h) | PRs Updated (24h) | Release Today? | Health Score | Notes |
|---------|---------------------|-------------------|----------------|--------------|-------|
| **OpenClaw** | 500 | 500 | ❌ No | 🟡 **High activity, strained maintainers** | 379 open issues, critical bugs aging 5 months |
| **NanoBot** | 12 | 32 | ❌ No | 🟡 **Active, security incident** | 3 security advisories unfixed; rapid fix pipeline |
| **Hermes Agent** | 50 | 50 | ✅ v0.18.1 | 🟢 **Healthy, rapid patch cycle** | 660 PRs rolled up; focused regression fixes |
| **PicoClaw** | 5 | 3 | ❌ No | 🟡 **Moderate, accumulating debt** | Rate limiting broken; OAuth failures |
| **NanoClaw** | 1 | 24 | ❌ No | 🟢 **Documentation/stability push** | Critical security vuln #2970 open |
| **NullClaw** | 0 | 0 | ❌ No | ⚪ **Inactive** | No activity |
| **IronClaw** | 31 | 50 | ❌ No | 🟡 **Bug bash mode, high WIP** | 43 open PRs; Slack/GitHub integration gaps |
| **LobsterAI** | 9 | 16 | ✅ v2026.7.7 | 🟡 **Shipping fast, 3 security vulns** | New release with xAI/Grok OAuth |
| **TinyClaw** | 9 | 0 | ❌ No | 🔴 **Critical security posture** | 9 unfixed vulns, no development activity |
| **Moltis** | 0 | 0 | ❌ No | ⚪ **Inactive** | No activity |
| **CoPaw** | 16 | 38 | ✅ v2.0.0-beta.3 | 🟢 **Pre-GA hardening, high velocity** | 2 critical crashes; strong CI/CD |
| **ZeptoClaw** | 0 | 0 | ❌ No | ⚪ **Inactive** | No activity |
| **ZeroClaw** | 23 | 50 | ❌ No | 🟡 **Rapid feature pace, bug influx** | 7 new bugs today; context erasure S1 |

---

## 3. OpenClaw's Position

**Advantages vs. Peers:**
- **Scale and community depth**: OpenClaw's 500 daily issues/PRs dwarf all peers—the ecosystem's clear *reference implementation* with the broadest channel support (Discord, Slack, Telegram, Feishu, QQ, Google Meet).
- **Sophisticated issue quality**: Diamond Lobster/Platinum Hermit rating system indicates a mature, technically capable user base that produces well-documented, reproducible bug reports.
- **Platform breadth**: No other project matches OpenClaw's channel ecosystem or the depth of its TUI, sandbox, and memory subsystems.

**Technical Approach Differences:**
- OpenClaw favors **SQLite-first** storage (PR #98236 refactors sessions/transcripts to SQLite), while NanoBot and LobsterAI support PostgreSQL. This signals a deliberate **embedded-first, single-binary** deployment philosophy vs. peers who embrace external databases.
- OpenClaw's **"ClawSweeper" bot** for automated PR review (PR #68936) is unique—no other project has comparable CI automation for patch pipeline management.
- The **event-loop stall** issue (14-22s stalls causing message loss, PR #89040) is a distinctive scaling challenge for projects with high-concurrency channel backends.

**Community Size Comparison:**
OpenClaw's 379 open issues is 3× NanoClaw's 15, 10× Hermes Agent's ~50, and dwarfing all others. Its 361 open PRs indicate a **contributor pipeline** that surpasses the entire issue count of most peers. However, the `needs-maintainer-review` tag on critical bugs (aging 5 months) reveals **maintainer bandwidth is the binding constraint**—a problem not yet visible in smaller projects.

---

## 4. Shared Technical Focus Areas

### Security Hardening (Common across 5+ projects)
| Need | Affected Projects | Details |
|------|------------------|---------|
| **API authentication enforcement** | TinyClaw (#286-294), LobsterAI (#2286-2288), NanoBot (#4825-4827) | Unauthenticated local APIs allow privilege escalation |
| **Tool safety policies** | OpenClaw (#25592, #39604), ZeroClaw (#7155, #8787), Hermes Agent (#60525) | Text leakage, private network bypass, denylist gaps |
| **Directory traversal prevention** | NanoClaw (#2800), TinyClaw (#293) | `--folder ../../etc` escapes workspace boundaries |

### Subagent/Multi-Agent Reliability (Common across 4 projects)
| Need | Affected Projects | Details |
|------|------------------|---------|
| **Silent completion loss** | OpenClaw (#44925), ZeroClaw (#8794) | Subagents fail without notification |
| **Orchestration lifecycle hooks** | OpenClaw (#43454, #22358) | `onSubagentComplete`, `onToolCallThreshold` |
| **Delegation architecture** | LobsterAI (PR #2285), ZeroClaw (SOP authoring) | Agent-to-agent delegation now in design |

### MCP/Plugin Stability (Common across 3 projects)
| Need | Affected Projects | Details |
|------|------------------|---------|
| **Reconnect crash prevention** | NanoBot (#4843, #4764), Hermes (#60380) | Stale stack cleanup, cancel scope isolation |
| **Resource leak watchdog** | NanoBot (PR #4506), Hermes (#59349) | Idle MCP server auto-kill |

### Frontend Scalability (Common across 2 projects)
| Need | Affected Projects | Details |
|------|------------------|---------|
| **Large session rendering** | CoPaw (#5401, #5479), ZeroClaw (#8803) | >500KB files crash UI; turn-step collapsing |

### Cross-Platform Gaps (Common across 3 projects)
| Need | Affected Projects | Details |
|------|------------------|---------|
| **Windows stability** | OpenClaw (#49931), ZeroClaw (#8800), CoPaw (#5829) | Port zombies, sandbox ACE pollution, shell config gaps |
| **Documentation accuracy** | ZeroClaw (#8810, #8797), PicoClaw (#3196) | Stale setup instructions, unknown config properties |

---

## 5. Differentiation Analysis

| Dimension | OpenClaw | NanoBot | Hermes Agent | LobsterAI | ZeroClaw | CoPaw |
|-----------|----------|---------|--------------|-----------|----------|-------|
| **Primary User** | Power user / self-hoster | Developer / API integrator | Enterprise / hosted | SMB / team | Agent builder / scaffolder | AI researcher / ML engineer |
| **Channel Breadth** | 🌟 Broadest (8+) | Moderate (WhatsApp, Telegram, QQ, WebUI) | Moderate (Discord, TG, Zulip planned) | Narrow (WebUI-centric) | Broad (Slack, Discord, TG, Inkbox new) | Broad (Feishu, Matrix, Discord, Telegram) |
| **Storage Strategy** | **SQLite-first** (embedded) | No strong preference | No strong preference | External DB capable | Relational (Rust-based) | SQLite + vector search |
| **Deployment Model** | Single binary, self-host | PyPI package | Docker/PyPI/Cloud | Docker, Hosted | Single binary (Rust) | PyPI package |
| **Differentiator** | Reference design, deepest ecosystem | Fast iteration, security-conscious | Enterprise-grade release management | Scheduled tasks + UI polish | SOP engine, agent self-authoring | Pre-GA feature velocity + CI maturity |
| **Risk Profile** | Maintainer burnout, aging critical bugs | Security surprises in rapid dev cycle | Regression velocity from massive PR rollups | Developer oxbow (security lagging features) | Bug influx outpacing triage bandwidth | Pre-GA crashes may delay GA |

---

## 6. Community Momentum & Maturity

### Tier 1: Hyper-Growth (Active daily, high contributor churn)
- **OpenClaw** — The undisputed volume leader, but showing **scaling strain** (379 open issues, critical items aging 5 months). Community is technically elite but maintainer bandwidth is the bottleneck.
- **ZeroClaw** — Fastest-growing feature surface (SOP engine, Inkbox channel, MCP tool filtering). Bug influx is high (7/day) but maintainers respond same-day to security issues.
- **CoPaw** — Most **CI-mature** project (automated install verification, pre-GA hardening). Frontend crashes are the #1 blocker for v2.0.0 GA, but contributor pipeline is healthy (3 first-time PRs this week).

### Tier 2: Stabilization (Active, shifting from features to hardening)
- **Hermes Agent** — Just shipped v0.18.1 rolling up 660 PRs. Focus is **regression elimination and subprocess hardening** (MCP leaks, write-before-validate bug). Release velocity is the healthiest in the ecosystem.
- **NanoClaw** — Undergoing a **documentation overhaul** (4 docs PRs merged today) alongside active security hardening. Good sign of project maturity but security vuln #2970 is concerning.
- **IronClaw** — In **"bug bash" mode** with focused Slack/WebUI v2 fixes. Large feature branches (Trace Commons, private tools) are advancing concurrently, creating WIP tension.

### Tier 3: Security Incident Response (Active but under duress)
- **NanoBot** — Rapidly shipping fixes (11 PRs merged today) but facing **3 unfixed security advisories** (#4825-4827). The 42-day delay resolving the stream stall bug (#4013) suggests root cause isolation struggles.
- **LobsterAI** — Shipped a feature-rich release today (xAI OAuth, scheduled task redesign) but **3 critical security disclosures** (#2286-2288) from the same researcher have zero response. Security is lagging feature velocity.
- **TinyClaw** — **No development activity** but 9 critical vulnerabilities disclosed yesterday. This is the most dangerous profile in the ecosystem—active research interest but no maintainer response.

### Tier 4: Maintenance Mode
- **PicoClaw** — Low activity (5 issues, 3 PRs) with accumulating technical debt (rate limiting broken, OAuth failures). Not abandoned but exhibiting low-velocity maintenance.
- **NullClaw, Moltis, ZeptoClaw** — **Zero activity.** These projects may be considered dormant or abandoned.

---

## 7. Trend Signals

### Security as a Community Function
The simultaneous disclosure of 15+ vulnerabilities across TinyClaw, LobsterAI, and NanoBot by researcher YLChen-007 signals a **coordinated third-party security audit** of the ecosystem. Projects that respond quickly (Hermes, ZeroClaw) will gain trust; those that don't (TinyClaw, LobsterAI unaddressed) risk community abandonment.

### Convergence on MCP Reliability
Three projects (NanoBot, Hermes, OpenClaw) are independently solving MCP reconnect crashes, resource leak watchdogs, and tool schema optimization. This signals MCP is becoming the **de facto plugin standard**, and production deployments are now pushing reliability to the breaking point.

### The "Documentation Debt" Cliff
ZeroClaw (#8810, #8797), PicoClaw (#3196), and NanoClaw (4 docs PRs today) all show users hitting **stale or incorrect documentation** that reflects code that shipped weeks ago. This is a maturity signal: as feature velocity outpaces docs, user trust erodes. Projects investing in code-grounded documentation (NanoClaw) are ahead.

### Frontend Scalability Constraint
CoPaw's two critical crashes (#5401, #5479) and ZeroClaw's turn-step collapsing request (#8803) reveal a shared pain point: **agent sessions with heavy tool use generate too much UI state** for current rendering models. The ecosystem needs progressive/streaming frontend architectures—a likely area for shared investment.

### Windows as a Growing, Unstable Surface
OpenClaw (shell config), ZeroClaw (port zombie #8800), and CoPaw (ACE pollution #5829) all report Windows-specific stability issues. As desktop agent deployments grow, **cross-platform reliability is becoming a competitive differentiator**. No project has solved this well yet.

### Agent Self-Authoring Emergence
ZeroClaw's `skill_manage.create` (#8815) and SOP visual authoring (PR #8590) point toward **agents modifying their own capabilities**—a step beyond tool use into meta-cognitive architecture. This may be the next ecosystem frontier after MCP stabilization.

---

**Bottom Line for Technical Decision-Makers:**
- **Choose OpenClaw** for maximum ecosystem depth and community support, but budget for maintainer response latency on critical bugs.
- **Choose Hermes Agent** for stability and release professionalism—660-PR rollups with patch releases demonstrate controlled delivery.
- **Choose CoPaw** for pre-GA innovation with strong CI, but defer production deployment until frontend crashes (#5401, #5479) are resolved.
- **Avoid TinyClaw** in any production context until the 9 unfixed critical vulnerabilities are addressed.
- **Watch ZeroClaw** for the fastest feature evolution, especially agent self-authoring and SOP workflows.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-07-08

## Today's Overview
NanoBot is experiencing high development velocity with **32 PRs** and **12 issues** updated in the last 24 hours, indicating a very active period. The project is processing a significant bug-fix and stabilization wave, with three security advisories filed yesterday and multiple regression fixes landing. The open PR count (21) suggests substantial work-in-progress, and the absence of a new release indicates the team may be consolidating fixes before cutting a version. Community engagement is steady, with maintainers actively reviewing and merging contributions across channels (WhatsApp, WebUI, MCP, shell, Telegram, QQ).

## Releases
**None.** No new releases have been published. Users remain on previously distributed versions (e.g., 0.1.5post2, 0.2.0, 0.2.2). The gap between reported bugs (some referencing 0.2.2 regressions) and no release suggests fixes may be queued for a future release.

## Project Progress
**11 PRs merged/closed today**, reflecting substantive forward movement:

- **MCP stability**: PR [#3378](https://github.com/HKUDS/nanobot/pull/3378) (camera_capture tool) and [#3517](https://github.com/HKUDS/nanobot/pull/3517) (WeChat context_token fix) closed after earlier preparation
- **Provider-hosted web search**: PR [#3743](https://github.com/HKUDS/nanobot/pull/3743) closed — adds support for provider-native web search tools (e.g., Azure OpenAI `web_search`) with local fallback
- **Agent refactoring**: PR [#3232](https://github.com/HKUDS/nanobot/pull/3232) closed — simplifies task done-callback and snapshot pending keys
- **Feishu integration**: PR [#4763](https://github.com/HKUDS/nanobot/pull/4763) closed — adds session divider messages for Feishu p2p `/new` commands

## Community Hot Topics

**Most Active Issues:**
1. [#4013](https://github.com/HKUDS/nanobot/issues/4013) [CLOSED] — "Error calling LLM: stream stalled for more than 90 seconds" (6 comments, reported 2026-05-26, just closed). A long-standing bug affecting users upgrading from 0.1.5post2 to 0.2.0. The delay in resolution (42 days) suggests the root cause was difficult to isolate.
2. [#4823](https://github.com/HKUDS/nanobot/issues/4823) [OPEN] — "whatsapp - groups" regression (3 comments). WhatsApp group allowlist broken post-0.2.2 — a critical regression for multi-group deployments. A fixing PR ([#4834](https://github.com/HKUDS/nanobot/pull/4834)) is already open.

**Most Active PRs:**
- [#4843](https://github.com/HKUDS/nanobot/pull/4843) [OPEN] — MCP reconnect crash fix (deferred stale stack cleanup), created today by first-time contributor
- [#4764](https://github.com/HKUDS/nanobot/pull/4764) [OPEN] — MCP reconnect cancel scope isolation, acknowledged by author as "not the most elegant way"

**Underlying Needs**: The MCP subsystem is attracting significant community contribution (3+ PRs addressing reconnect/resource leaks), indicating production users are deploying MCP tools extensively. WhatsApp group support is a high-priority channel feature for multi-group bot deployments.

## Bugs & Stability

**Critical/Security (3 issues filed):**
- [#4825](https://github.com/HKUDS/nanobot/issues/4825), [#4826](https://github.com/HKUDS/nanobot/issues/4826), [#4827](https://github.com/HKUDS/nanobot/issues/4827) — **Security:** WebUI bootstrap `/webui/bootstrap` endpoint issues API bearer tokens to **any unprivileged localhost process** without authentication when `tokenIssueSecret` is unconfigured. This is a design-level vulnerability allowing local privilege escalation. **No fix PRs yet.**

**High Severity:**
- [#4823](https://github.com/HKUDS/nanobot/issues/4823) — **WhatsApp group allowlist regression** post-0.2.2: group responses now bleed into every group the bot is in. Fix PR [#4834](https://github.com/HKUDS/nanobot/pull/4834) open.
- [#4805](https://github.com/HKUDS/nanobot/issues/4805) — **Tool validation errors silently swallowed** by `suppress(Exception)` in `AgentRunner._run_tool()`, causing silent failures. Fix PR [#4837](https://github.com/HKUDS/nanobot/pull/4837) open.
- [#4800](https://github.com/HKUDS/nanobot/issues/4800) — **Crash on multimodal messages** due to unconditional `.strip()` on `list[dict]` content. Fix PR [#4837](https://github.com/HKUDS/nanobot/pull/4837) covers this.
- [#4829](https://github.com/HKUDS/nanobot/issues/4829) — **Missing `aiohttp` dependency** for Slack plugin in `pyproject.toml`, making Slack plugin non-functional. **No fix PR yet.**

**Medium Severity:**
- [#4841](https://github.com/HKUDS/nanobot/issues/4841) — **Matrix bot device untrusted** in Element E2EE environment; no cross-signing or SAS verification path.
- [#4835](https://github.com/HKUDS/nanobot/issues/4835) — **WebUI landing message misrouted** to unrelated existing chat during race condition. Fix PR [#4836](https://github.com/HKUDS/nanobot/pull/4836) open.

**Previously Closed:**
- [#4013](https://github.com/HKUDS/nanobot/issues/4013) — "stream stalled for more than 90 seconds" finally closed.
- [#4611](https://github.com/HKUDS/nanobot/issues/4611) — DNS rebinding TOCTOU SSRF vulnerability closed (fixed in earlier PR).

## Feature Requests & Roadmap Signals

**Merged/Closed:**
- **Provider-hosted web search** (PR [#3743](https://github.com/HKUDS/nanobot/pull/3743), closed) — Likely to appear in next release. Enables Azure OpenAI native web search tool.
- **WebUI file edit diff view** (PR [#4828](https://github.com/HKUDS/nanobot/pull/4828), open) — Adds unified diff rendering in WebUI for file edit events, with backend truncation.

**In Progress:**
- **Goal-gated runtime mode** (PR [#4833](https://github.com/HKUDS/nanobot/pull/4833), open) — Replaces always-visible long_task/complete_goal with runtime-gated goal tools, a significant UX improvement for goal-oriented interactions.
- **MCP server idle timeout auto-kill** (PR [#4506](https://github.com/HKUDS/nanobot/pull/4506), open) — Watchdog to kill idle MCP servers, preventing resource leaks.

**Prediction for Next Release**: Provider-hosted web search, WhatsApp group fix, multimodal crash fix, tool validation error logging, and MCP stability improvements are likely candidates. The security token vulnerability (Issues #4825-4827) will likely need urgent patching before a release.

## User Feedback Summary

**Pain Points:**
- LLM stream stalls after version upgrade (Issue #4013 — recently closed, root cause unclear)
- WhatsApp group allowlist broken in 0.2.2 — "i can see where this is heading" (user frustration evident, Issue #4823)
- Slack plugin non-functional due to missing dependency (Issue #4829)
- WebUI landing page race condition causing message misrouting (Issue #4835)
- Tool validation failures silently swallowed, making debugging impossible (Issue #4805)

**Satisfaction Signals:**
- User praised 0.1.5post2 as "very good" (Issue #4013)
- Multiple community PRs submitted by first-time contributors (e.g., [#4843](https://github.com/HKUDS/nanobot/pull/4843), [#4839](https://github.com/HKUDS/nanobot/pull/4839)), indicating good onboarding experience

## Backlog Watch

**Long-unanswered Items Needing Maintainer Attention:**
- [#4611](https://github.com/HKUDS/nanobot/issues/4611) (DNS rebinding TOCTOU) — **Closed today** (good news), but the fix PR (not listed) would benefit from verification
- [#4825](https://github.com/HKUDS/nanobot/issues/4825), [#4826](https://github.com/HKUDS/nanobot/issues/4826), [#4827](https://github.com/HKUDS/nanobot/issues/4827) — **Security advisories from yesterday** with zero comments and no linked fix PRs. These are critical vulnerability reports that should be prioritized for triage and patching. The absence of any response from maintainers within 24 hours is concerning for a security disclosure.
- [#4841](https://github.com/HKUDS/nanobot/issues/4841) (Matrix trust) — Filed today with no engagement; cross-signing support is a long-standing E2EE usability gap

**Older Stale Items (no activity >30 days):**
- [#4013](https://github.com/HKUDS/nanobot/issues/4013) — Now closed after 42 days; resolved too late for affected users
- [#3741](https://github.com/HKUDS/nanobot/issues/3741) (provider-hosted web search) — Closed, with its companion PR [#3743](https://github.com/HKUDS/nanobot/pull/3743) also closed — well-handled
- [#3378](https://github.com/HKUDS/nanobot/issues/4013) and [#3517](https://github.com/HKUDS/nanobot/issues/3517) (camera_capture, WeChat fix) — Both closed, good lifecycle management

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

Here is the Hermes Agent project digest for July 8, 2026.

---

## Hermes Agent Project Digest — 2026-07-08

### 1. Today's Overview
The project is experiencing a high-velocity maintenance cycle, with 50 issues and 50 PRs updated in the last 24 hours, signaling a very active community and development team. A new stable patch release (v0.18.1) was tagged yesterday, rolling up ~660 PRs for downstream stability. The majority of activity centers on squashing regressions, hardening subprocess management (especially MCP and delegation), and fixing configuration staleness bugs. While no new major features appear in today's output, the community is actively reporting niche bugs in the Desktop app and gateway, and maintainers are responding with rapid fix PRs.

### 2. Releases
- **v2026.7.7 (v0.18.1) — July 7, 2026:** This is a patch release that rolls up approximately 660 merged PRs since v0.18.0 (July 1). The release focuses on bug fixes, hardening, and in-progress feature work. It is intended for downstream consumers including Docker images, hosted deployments, and PyPI installs. There are no documented breaking changes or migration notes for this release.

### 3. Project Progress
Today’s merged/closed PRs demonstrate a strong focus on fixing regressions and closing bugs that surfaced in the previous major release cycle. Key advances include:
- **PR #60599 (CLOSED):** Fix for a critical bug where `write_file()` committed invalid content to disk before its own syntax check ran (see Bug #60525).
- **PR #60396 (CLOSED):** Fix for adaptive model compression using routed context, addressing compression budgeting for request-time router/alias models.
- **PR #60380 (CLOSED):** Fix for suppressing a "Event loop is closed" traceback flood during shutdown in MCP server tasks.
- **PR #60595 (CLOSED):** Chore commit for releasing v0.18.1, updating version strings and metadata.
- **PR #60612 (OPEN):** Ensures in-flight cron jobs are drained during gateway `/update` shutdown, preventing premature killing of cron workers.
- **PR #60613 (OPEN):** Fix for display-path delta replay on Bedrock "mantle" endpoints, a sibling fix to a prior PR (#41332).

### 4. Community Hot Topics
- **Issue #19986 (OPEN, 3 👍, 8 comments):** "Make non-core bundled skills optional and keep the default install minimal." This long-running feature request (since May 5) continues to receive community support, reflecting a desire for a leaner default installation footprint. [Link](https://github.com/NousResearch/hermes-agent/issues/19986)
- **Issue #55790 (OPEN, 6 comments):** "Stale credential pool entries cause removed providers to persist in model picker." This spans the Desktop UI, Dashboard, and agent configuration, indicating a complex cross-component data consistency problem. [Link](https://github.com/NousResearch/hermes-agent/issues/55790)
- **Issue #6838 (CLOSED, 7 comments):** "Frequent RemoteProtocolError / Connection drops with MiniMax provider." This was a high-severity bug from April that was finally resolved with a fix implemented on the main branch, marking a win for provider stability. [Link](https://github.com/NousResearch/hermes-agent/issues/6838)

### 5. Bugs & Stability
**Critical (P1):**
- **Issue #60525 (OPEN):** `write_file()` commits changes to disk **before** running its JSON/YAML/TOML syntax check, causing invalid content to be written and reported as successful. **Fix exists:** PR #60599 (CLOSED) addresses this by implementing a fail-closed syntax gate. [Issue Link](https://github.com/NousResearch/hermes-agent/issues/60525) | [PR Link](https://github.com/NousResearch/hermes-agent/pull/60599)

**High Priority (P2):**
- **Issue #60543 (OPEN):** `/steer` race condition — an out-of-band message can be silently lost when arriving between a tool batch drain and the next API call. [Link](https://github.com/NousResearch/hermes-agent/issues/60543)
- **Issue #60597 (OPEN):** UI Wrapper crash on Desktop when using Gemini provider, triggered by attempting to access streaming content before `read()`. [Link](https://github.com/NousResearch/hermes-agent/issues/60597)
- **Issue #50199 (CLOSED):** Delegation base URL was ignored at runtime due to a stale CLI_CONFIG cache. Fixed and closed today. [Link](https://github.com/NousResearch/hermes-agent/issues/50199)
- **Issue #59349 (CLOSED):** Gateway was leaking stdio-MCP subprocesses and file descriptors in an unbounded retry loop, leading to EMFILE errors. Fix merged. [Link](https://github.com/NousResearch/hermes-agent/issues/59349)

**Medium (P3):**
- **Issue #60603 (OPEN):** `/compress` command in Desktop reports "not a quick/plugin/skill command: compress." [Link](https://github.com/NousResearch/hermes-agent/issues/60603)
- **Issue #54990 (OPEN):** Profile switch in Desktop app leaves shell CWD stuck in previous profile's workspace. [Link](https://github.com/NousResearch/hermes-agent/issues/54990)

### 6. Feature Requests & Roadmap Signals
- **PR #3335 (OPEN):** A long-running PR (since March) adds native Zulip integration as a bundled platform plugin. The original branch predated the current platform plugin system, meaning this would likely need a significant rebase before merging. This signals ongoing interest in expanding platform support beyond Discord and Telegram. [PR Link](https://github.com/NousResearch/hermes-agent/pull/3335)
- **PR #60146 (OPEN):** A new Discord feature allowing `/branch` to spawn a thread and `/merge` to fold it back into the parent conversation. This is a significant UX improvement for Discord users managing complex conversations. [PR Link](https://github.com/NousResearch/hermes-agent/pull/60146)
- **Issue #19986 (OPEN):** The request to make non-core skills optional suggests the roadmap may include a "slim install" profile or better modularization of bundled content.

### 7. User Feedback Summary
User sentiment appears mixed but trending positive. On one hand, the rapid release cadence (v0.18.1 tagging ~660 PRs in a week) shows the team is responsive. However, users are clearly bumping into configuration consistency bugs (stale caches, ignored settings) and subprocess management issues (zombie MCP servers, orphaned processes). The Windows-specific UI alignment bug (#60596) and the WhatsApp bridge console window issue (#60605) indicate that the cross-platform experience still has rough edges. The most vocal dissatisfaction centers on the "credential pool" bug (#55790) and the write-before-validate bug (#60525), both of which break core user workflows.

### 8. Backlog Watch
- **PR #3335 (OPEN since March 27):** The Zulip integration PR has no recent maintainer activity. While it is a feature, its outdated architecture relative to the new plugin system means it either needs a champion to rebase it or formal rejection. [PR Link](https://github.com/NousResearch/hermes-agent/pull/3335)
- **Issue #42248 (OPEN since June 8):** A deadlock bug (`__psynch_cvwait`) affecting Kanban workers with custom local model providers. With 2 comments and a P2 severity, this issue regarding a core workflow (Kanban) has stagnated. [Issue Link](https://github.com/NousResearch/hermes-agent/issues/42248)
- **Issue #45454 (OPEN since June 13):** A persistent gateway crash (`SystemExit: 75`) on macOS affecting multiple Hermes versions. The user reports the behavior spans v0.14.0 through v0.16.0, suggesting a deep-rooted issue. With only 1 comment, it may be under-triaged. [Issue Link](https://github.com/NousResearch/hermes-agent/issues/45454)

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

Good morning. Here is the PicoClaw project digest for July 8, 2026.

---

## PicoClaw Project Digest – 2026-07-08

### 1. Today's Overview
Project activity is moderate but focused. While no new releases were published today, the maintenance team closed two older issues and merged one PR, indicating ongoing clean-up of the backlog. However, the issue tracker shows a slight uptick in open bugs (5 active), including a new report regarding rate limiting failures. The most significant development is a major refactor of the DeltaChat integration (PR #3222) which is now open for review and promises a substantial reduction in code complexity (-320 LOC). Overall, the project is stable but showing signs of accumulated technical debt in specific areas like tool safety and authentication.

### 2. Releases
**None.** No new releases were published in the last 24 hours. The latest available version remains v0.3.1 (referenced in Issue #3232).

### 3. Project Progress
One pull request was merged/closed today:
- **PR #3157 (CLOSED)** – *feat: add Android ADB remote operations tool* by danmobot. This adds an experimental tool for controlling Android devices via ADB (screenshots, taps, swipe, text input). While closed, it signals a new hardware-interaction capability for the project.

Two other PRs remain open with recent updates:
- **PR #3222 (OPEN)** – Refactors the DeltaChat backend, dropping legacy features and passwords, reducing code by 320 lines.
- **PR #3226 (OPEN)** – Fixes a critical safety issue in the `write_file` tool that previously coached the model toward destructive overwrites.

### 4. Community Hot Topics
The most active discussions this cycle center on authentication and integration friction:

- **Issue #3195 (2 comments)** – OpenAI GPT not working on NanoKVM with default config. The user reports that after a fresh setup on NanoKVM 2.4.0, all interactions with PicoClaw fail. This suggests a possible configuration mismatch or regression in the NanoKVM integration path.

- **Issues #3196 & #3197 (1 comment each, both by nyawitniorang)** – Duplicate reports of "Codex and antygravity oauth login not working." The identical text and author suggest a user hit the same bug twice. This points to a potential regression in OAuth handling for these specific providers.

- **Issue #3153 (3 comments)** – Volcengine Doubao tool calls leaking raw `<seed:tool_call>` text instead of executing. This is a user-facing quality bug that undermines the agent’s reliability.

**Underlying need:** Users are demanding consistent and predictable authentication flows (OAuth) and reliable tool execution across all supported model providers. The NanoKVM issue also highlights a growing interest in edge-device deployments.

### 5. Bugs & Stability
Three bugs reported or updated today, ranked by severity:

| Severity | Issue | Summary | Fix PR? |
|----------|-------|---------|---------|
| **High** | [#3232](https://github.com/sipeed/picoclaw/issues/3232) | Rate limiting is completely non-functional when no fallback models are configured. User on v0.3.1 reports the `rpm` config for `gpt-5.5` is ignored. | None yet. |
| **Medium** | [#3153](https://github.com/sipeed/picoclaw/issues/3153) | Volcengine Doubao tool calls leak raw XML instead of executing. Impacts user trust in the agent. | None. |
| **Low** | [#3197](https://github.com/sipeed/picoclaw/issues/3197) / [#3196](https://github.com/sipeed/picoclaw/issues/3196) | OAuth login broken for Codex & Antygravity. User experience blocked entirely for those providers. | None. |

Additionally, **PR #3226** (fix destructive overwrite in `write_file`) is a proactive fix for a safety issue that, if exploited, could cause data loss.

### 6. Feature Requests & Roadmap Signals
- **Issue #3093 (CLOSED)** – Request for SimpleX, Wire, or Tox gateway support. Closed as stale, but indicates ongoing user interest in privacy-preserving communication integrations.
- **PR #3157 (CLOSED)** – The ADB tool was merged, signaling that hardware/device control is a growing area of interest for the project. Expect more IoT/device-management features in future releases.

**Prediction:** The next minor release (v0.3.2) will likely include the `write_file` safety fix (PR #3226) and possibly the DeltaChat refactor (PR #3222), given they are both under active review.

### 7. User Feedback Summary
- **Pain point: Rate limiting is brittle.** Issue #3232 shows that the current rate limiting implementation breaks entirely if a user does not configure fallback models—a common setup for simpler deployments.
- **Pain point: Agent reliability varies by provider.** Issue #3153 (Volcengine tool leak) and #3195 (OpenAI on NanoKVM) show that users cannot trust the agent to behave consistently across different model backends.
- **Satisfaction:** No positive feedback recorded in the last 24 hours. The tone in issues is factual but frustrated, particularly around configuration friction.

### 8. Backlog Watch
The following items have been open for over a week without a maintainer response or a fix PR:

- **Issue #3153** (Volcengine tool leak) – Last updated 2026-07-07, no fix assigned. This is a significant quality bug affecting a major model provider.
- **Issue #3195** (OpenAI on NanoKVM) – Last updated 2026-07-07, no response from maintainers. Critical for users deploying on the recently-released NanoKVM 2.4.0 feature.
- **PR #3222** (DeltaChat refactor) – Open since July 3, no review comments yet. While not a bug, this large refactor (320 lines removed) needs maintainer attention to avoid merge conflicts.

**Heads-up:** The rate limiting bug (#3232) is brand new (reported today) but is severe enough that it should be triaged immediately.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-07-08

## Today's Overview

NanoClaw shows very high activity today with **24 PRs updated** in the last 24 hours (15 open, 9 merged/closed) — a significant spike indicating a coordinated documentation and stability push. Only **1 new issue** was opened, a **critical security vulnerability** (#2970). **No new releases** are published. The project appears to be in a **major code-grounded documentation overhaul phase** (4 docs PRs merged today alone) alongside active security hardening, suggesting the team is preparing for a stable release after a period of rapid feature development. Community contributions remain strong, with 5 distinct authors pushing PRs today.

## Releases

**None.** No new versions were published in the last 24 hours. The repository was last verified at commit `b6cb53e` (referenced in docs PRs), with the previous tag `v2.1.38` noted in doc staleness sweeps.

## Project Progress

**9 PRs were merged or closed today**, primarily in three focus areas:

### Documentation Overhaul (4 merged PRs)
- **#2961** ([link](https://github.com/nanocoai/nanoclaw/pull/2961)) — Stale claims fixed across README, CONTRIBUTING, CLAUDE.md and operational docs; removed solicitation for `/add-signal` and `/add-matrix` skills that are no longer shipped
- **#2962** ([link](https://github.com/nanocoai/nanoclaw/pull/2962)) — DB schema and entity docs synced with migrations 010-018; `messaging_group_agents` columns updated for migration 010 changes
- **#2963** ([link](https://github.com/nanocoai/nanoclaw/pull/2963)) — `architecture.md` and `agent-runner-details.md` rewritten to match current code; early sections were stale
- **#2964** ([link](https://github.com/nanocoai/nanoclaw/pull/2964)) — SDK deep-dive doc updated from 0.2.x to 0.3.197, re-verified against `sdk.d.ts` (~6700 lines)

### Bug Fixes (3 merged PRs)
- **#2804** ([link](https://github.com/nanocoai/nanoclaw/pull/2804)) — **Critical CLI fix**: `ncl messaging-groups create` was completely dead, always throwing `NOT NULL constraint failed: messaging_groups.instance` — fixed by aligning CLI create path with schema
- **#2965** ([link](https://github.com/nanocoai/nanoclaw/pull/2965)) — Rate limit event detection fixed: SDK 0.3.x ships `SDKRateLimitEvent` as a top-level message type, not nested under `system`/`subtype`; agents were missing rate-limit signals
- **#2922** ([link](https://github.com/nanocoai/nanoclaw/pull/2922)) — Discord forwarded-message snapshots were transparent to agents; now unwrapped so agents see forwarded content

### Test Infrastructure (1 merged PR)
- **#2919** ([link](https://github.com/nanocoai/nanoclaw/pull/2919)) — Large PR test for CI infrastructure, closed as part of test pipeline validation

## Community Hot Topics

**Most active today** (based on PR count, not comment count — comments data was undefined for all items):

### Security & Safety (Highest Engagement)
- **#2800** ([link](https://github.com/nanocoai/nanoclaw/pull/2800)) — **Directory traversal fix** for `ncl groups create --folder ../../etc`: bypasses the `assertValidGroupFolder` validator because `genericCreate` does raw INSERT without calling the security validation. Still **open** since June 17 — this is a CWE-22 vulnerability that has been exposed for 21 days
- **#2873** ([link](https://github.com/nanocoai/nanoclaw/pull/2873)) — Skill pre-flight split from credentials so `/update-skills` can refresh code without credential re-entry; open 11 days

### New Features Under Review
- **#2909** ([link](https://github.com/nanocoai/nanoclaw/pull/2909)) — Agent template setup wizard + first-agent stamping (part 2 of 2); adds setup-flow choices for Fresh agent vs. template; open 6 days
- **#2958** ([link](https://github.com/nanocoai/nanoclaw/pull/2958)) — Teams-CLI-first credentials flow in structured-skill-format (SSF) — replaces ~7 Azure portal steps with `teams login` + `teams app create`; open 2 days
- **#2971** ([link](https://github.com/nanocoai/nanoclaw/pull/2971)) — New `ncc` utility skill: host operational and health CLI; opened today

### Underlying Needs Analysis
The community is demanding **security hardening** (PR #2800, Issue #2970), **CLI reliability** (PR #2804 was dead for weeks), and **documentation accuracy** (4 docs PRs merged). The high volume of documentation work suggests contributors found the codebase hard to navigate, and the security issues suggest the project needs a security audit before the next release.

## Bugs & Stability

**Critical (2 items — both with open fix PRs):**

1. **#2970** ([link](https://github.com/nanocoai/nanoclaw/issues/2970)) — **Local action forgery via unauthenticated forwarded gateway loopback webhook** [SECURITY]
   - **Severity: Critical** — The localhost-only webhook that receives forwarded gateway events does not authenticate the sender before trusting the payload. An attacker on the same host can forge agent actions.
   - **Status: Open, 0 comments, 0 reactions** — No fix PR linked yet; reported yesterday
   - **Fix status: None**

2. **#2800** ([link](https://github.com/nanocoai/nanoclaw/pull/2800)) — **Directory traversal (CWE-22) via `ncl groups create --folder`**
   - **Severity: High** — `--folder ../../etc` persists a folder that escapes `GROUPS_DIR` because `genericCreate` bypasses the security validator
   - **Status: Open since June 17 (21 days)** — Fix PR exists but unmerged
   - **Fix status: Open** — PR #2800 submitted by `sturdy4days` on June 17

**High (3 items — 2 with fix PRs):**

3. **CLI dead path** (PR #2804, now fixed) — `ncl messaging-groups create` was completely unusable; now merged/closed
4. **Rate limit detection broken** (PR #2965, now fixed) — SDK 0.3.x change broke rate-limit event mapping; now merged/closed
5. **Provider errors misclassified** (PR #2966) — Provider errors inside consumed batch recorded as `completed`, indistinguishable from successful turns; **draft PR open**, semantics under discussion

**Medium (1 item):**
6. **Approval race condition** (PR #2974) — `claimPendingApproval()` atomic compare-and-set not implemented; handlers could process same approval twice; fix opened today

## Feature Requests & Roadmap Signals

### Likely for Next Version
1. **Agent templates + setup wizard** (PR #2909) — Mature, part 2 of 2-series; combines with template loader from #2890. High likelihood of merging
2. **Teams integration** (PR #2958) — Replaces complex Azure portal walk with CLI-first flow for Microsoft Teams skill. Active, well-structured
3. **`ncc` utility skill** (PR #2971) — New host operational/health CLI for NanoClaw. Small footprint, opened today

### Possibly for Next Version
4. **Remote storage mounts** (PR #1598 — open since APRIL 2, 2026) — WebDAV/S3 via rclone + systemd. Ancient by project standards, but continues to be updated
5. **add-slack Socket Mode fixes** (PR #2972) — Wizard UX improvements + Discord integration fixes; opened today
6. **add-rtk mount fix for v2** (PR #2969) — Relative containerPath + PATH fix for operational skill; opened today

## User Feedback Summary

Based on PR descriptions and issue content:

### Pain Points (Explicit)
- **CLI completely broken**: `ncl messaging-groups create` was dead for weeks until today's fix — users couldn't create messaging groups
- **Documentation misleading**: 4 PRs today were dedicated solely to fixing stale docs — users were following instructions that no longer match the codebase
- **Security gaps exposed**: The folder traversal (PR #2800) and webhook forgery (Issue #2970) vulnerabilities suggest production deployments are at risk
- **SDK version mismatch**: Docs were written for SDK 0.2.x when code pins ^0.3.197 — significant drift

### Positive Signals
- **Strong contributor base**: 5 unique authors active today (sturdy4days, glifocat, OowhitecatoO, amit-shafnir, Koshkoshinsk, zivisaiah)
- **Structured contribution process**: All new PRs include `<!-- contributing-guide: v1 -->` marker and explicit type-of-change checkboxes
- **Proactive documentation cleanup**: Team is doing code-grounded staleness sweeps rather than waiting for user reports

## Backlog Watch

### Critical Attention Needed

1. **#2970** ([link](https://github.com/nanocoai/nanoclaw/issues/2970)) — **Security: Local action forgery** — NEW today, 0 comments, 0 reactions. No fix exists yet. **Maintainer action required immediately**

2. **#2800** ([link](https://github.com/nanocoai/nanoclaw/pull/2800)) — **Directory traversal vulnerability fix** — Open since June 17 (21 days), fix PR ready, not yet merged. **Needs review and merge** — this is a CWE-22 class vulnerability

### Long-Unresolved Items

3. **#1598** ([link](https://github.com/nanocoai/nanoclaw/pull/1598)) — **Remote storage skill (WebDAV/S3 via rclone)** — Open since **April 2, 2026** (97 days). Updated today but still open. Major feature that needs resolution

4. **#2729** ([link](https://github.com/nanocoai/nanoclaw/pull/2729)) — **Telegram skill docs: incorrect pairing status-block names** — Open since June 11 (27 days). Addresses skill documentation that users cannot follow end-to-end

### Recently Opened (No Attention Yet)

5. **#2973** ([link](https://github.com/nanocoai/nanoclaw/pull/2973)) — **Supply chain: `minimumReleaseAge` gate not activated** — `pnpm:` key placement error means dependency freshness checks are not running. Opened today, no reviews yet

6. **#2974** ([link](https://github.com/nanocoai/nanoclaw/pull/2974)) — **Approval race condition fix** — Opened today, atomic claim implementation. Needs review to prevent duplicate approval processing in production

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

Here is the IronClaw project digest for 2026-07-08.

---

## IronClaw Project Digest — 2026-07-08

### 1. Today's Overview
Project activity remains very high, with 50 PRs and 31 Issues updated in the last 24 hours. A significant "bug bash" is ongoing, concentrating on WebUI v2, Slack integration, and core stability. The team is actively merging fixes for critical P2 regressions while simultaneously landing large feature branches for Trace Commons, private tool installs, and a new onboarding (NUX) demo. The backlog of open PRs (43) continues to grow, indicating a high volume of work in progress, particularly around the large "composition god-crate refactor" and the WebUI frontend consolidation to TypeScript/Vite.

### 2. Releases
**None.** No new releases were published in the last 24 hours.

### 3. Project Progress
Seven PRs were merged or closed today. Key advancements include:
- **Platform/Composition:** Continued the dissection of the "composition god-crate" by grouping the Slack (`#5785`) and Extension Host (`#5783`) clusters into dedicated domain modules.
- **Feature (Tools):** Merged the fix for `clientActionId()` breaking on insecure HTTP origins ([#5694](https://github.com/nearai/ironclaw/issues/5694)).
- **Feature (UI):** Merged a fix to surface tool permission save failures in the WebUI v2 Settings tab ([#5698](https://github.com/nearai/ironclaw/issues/5698)).
- **Infrastructure:** Added reusable "LFD" (Lane Feature Delivery) infrastructure ([#5778](https://github.com/nearai/ironclaw/pull/5778)), enabling feature-specific testing packages.
- **Bug Fixes:** A high-priority fix for mobile chat layout horizontal overflow ([#5554](https://github.com/nearai/ironclaw/issues/5554)) was closed.

### 4. Community Hot Topics
- **[#5702: GitHub issue search/create fails with HTTP 403](https://github.com/nearai/ironclaw/issues/5702)** (P2, 4 comments) — The most commented-on issue. The agent's GitHub integration is completely broken in staging, returning 403 errors. This is a high-impact operational blocker for users relying on this tool.
- **[#5747: No way to unpair Slack on built-in mount](https://github.com/nearai/ironclaw/issues/5747)** (2 comments) — A significant UX gap. Once a user pairs with Slack, there is no UI or command to undo it. The `/pair` command rejects the request, and the UI lacks a disconnect button.
- **[#5701: Activity panel hides tool details](https://github.com/nearai/ironclaw/issues/5701)** (P2, 2 comments) — Developers and power users are reporting that the activity panel is not updating in real-time during runs and collapses tool details, making debugging impossible until a run fully completes.

**Analysis:** The core need behind these issues is **operational transparency and control**. Users require real-time feedback on agent actions and the ability to manage integrations (GitHub, Slack) without cryptic errors or permanent lock-in.

### 5. Bugs & Stability
Bug intensity remains high, with focused efforts on a "bug_bash."

**Critical (P1):**
- **UI Timestamps are incorrect ([#3535](https://github.com/nearai/ironclaw/issues/3535))** — A long-standing issue from May 2026 where conversation timestamps are wrong. High user impact but no fix PR in sight.

**High (P2):**
- **GitHub 403 error ([#5702](https://github.com/nearai/ironclaw/issues/5702))** — Blocks all GitHub issue interactions. No fix PR is linked.
- **Approval notifications disappear ([#5553](https://github.com/nearai/ironclaw/issues/5553))** — Critical for automations requiring user consent; notifications are lost, causing workflows to stall silently.
- **Long-output prompts cause generic "invalid result" error ([#5776](https://github.com/nearai/ironclaw/issues/5776))** — A serious debuggability issue where a real model timeout is hidden from the user by a generic error message.

**Low (P3):**
- **Image preview becomes transparent ([#5704](https://github.com/nearai/ironclaw/issues/5704))** — A visual bug during active runs.
- **Terminal icon has no disable option ([#5705](https://github.com/nearai/ironclaw/issues/5705))** — Minor UI clutter.

**Flaky Tests:**
- **`slack_pairing_redeem_rejects_expired_code` ([#5787](https://github.com/nearai/ironclaw/issues/5787))** — An intermittent CI failure caused by a race condition between tokio's paused clock and production wall-clock TTL checks. A fix PR ([#5789](https://github.com/nearai/ironclaw/pull/5789)) is open.

### 6. Feature Requests & Roadmap Signals
- **Trace Commons ([#5280](https://github.com/nearai/ironclaw/pull/5280)):** A massive (XL) PR is open for instance-wide enrollment and trace inspection. This signals a major push toward observability and data-sharing, likely planned for the next major release.
- **Private Tool Installs ([#5525](https://github.com/nearai/ironclaw/pull/5525) & [#5499](https://github.com/nearai/ironclaw/pull/5499)):** Two large PRs enabling non-admin users to install tools privately. This is a clear roadmap item for enterprise/team use-cases.
- **Onboarding/NUX Demo ([#5565](https://github.com/nearai/ironclaw/pull/5565)):** An "intent-handoff, OAuth entry, chat-first workspace" demo is a strong signal that the team is investing in new user acquisition and a more guided initial experience.
- **Design System Tokens ([#5563](https://github.com/nearai/ironclaw/pull/5563)):** An attempt to create a formal design system so that AI can autonomously implement small UI improvements. This points to a long-term strategy for scaling UI development.

### 7. User Feedback Summary
The "bug bash" issues represent the current primary user experience pain points:
1.  **Frustration:** Users are frustrated by non-functional integrations (GitHub 403, Slack pairing lock-in) that feel broken or incomplete.
2.  **Lack of Visibility:** Users (especially power users) are dissatisfied with the lack of real-time tool execution details. The "Activity panel" and "generic error" issues indicate a desire for more technical debugging information.
3.  **Cluttered UI:** Feedback on the terminal icon and floating banners suggests a need for a cleaner, more customizable interface.
4.  **Automation Management:** The inability to rename automations ([#5419](https://github.com/nearai/ironclaw/issues/5419)) is a specific usability gap, suggesting users are creating many automations and need better management tools.

### 8. Backlog Watch
Several important issues remain open for extended periods without committer attention. These represent areas of likely user frustration or technical debt.
- **[#3535: UI Timestamps are incorrect](https://github.com/nearai/ironclaw/issues/3535)** (P1, opened May 12) — The highest-priority item in the backlog. This directly impacts user trust in conversation history.
- **[#3081: Portfolio extension shows misleading "Configure" button](https://github.com/nearai/ironclaw/issues/3081)** (P2, opened Apr 29) — A long-standing UX issue indicating a pattern of UI elements existing without backend support.
- **[#5419: No option to rename an automation](https://github.com/nearai/ironclaw/issues/5419)** (P3, opened Jun 29) — A straightforward feature request that has been open for over a week with no assignee.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-07-08

## 1. Today's Overview
LobsterAI saw **very high activity** today with **16 PRs** updated (14 merged/closed) and **9 issues** updated (5 closed). A **new release (2026.7.7)** shipped, featuring a redesigned scheduled task card UI and xAI (Grok) OAuth login support. The project is in a **healthy, rapidly shipping state**, with maintainers actively merging fixes and features. Notably, **three security vulnerabilities** were responsibly disclosed today (issues #2286, #2287, #2288), signaling a need for urgent patch cycles, though fix PRs exist for some related concerns.

## 2. Releases
- **LobsterAI 2026.7.7** (released 2026-07-07) — [Release notes](https://github.com/netease-youdao/LobsterAI/releases/tag/2026.7.7)
  - **New features**: Redesigned scheduled task list/detail/form UI with status chips, toggle switches, search, and optimistic UI feedback (renderer). xAI (Grok) OAuth login support added.
  - **No breaking changes or migration notes** in the release notes. No breaking changes or migration instructions were documented.

## 3. Project Progress
16 PRs were updated today; **14 were merged or closed**. Key advances:

- **Cowork stability**: PR #2292 [merged] fixes steer follow-up routing with Codex-style queuing and proper session scoping. PR #2289 [merged] clears stalled compaction retry maintenance.
- **Agent delegation**: PR #2285 [open] introduces delegated subagent collaboration — agents can be configured to delegate to other enabled agents, materialized as Cowork child sessions. This is a major architectural feature still under review.
- **Email skill**: PR #2275 [merged] adds multi-account support for the built-in IMAP/SMTP email skill, including account management UI, enable/disable, provider presets, and legacy `.env` compatibility.
- **Scheduled tasks**: PR #2290 [merged] makes notify target user-selectable. PR #2273 (in release) redesigned the task list card.
- **Analytics fixes**: PR #2245 [merged] corrects usage event reporting for skills, IM settings, sidebar toggles, custom model edits, and scheduled task weekday parsing.
- **Security hardening (stale but merged today)**: PR #1407 limited OpenClaw Token Proxy request body to 10 MB. PR #1408 fixed unhandled Promise rejections in MCP Bridge Server. PR #1410 debounced SqliteStore writes to prevent event-loop blocking. PR #1415 fixed migration flag placement for user memories. PR #1419 fixed NIM group type enum mapping. PR #1420 fixed cron poll concurrency bugs (reentry and ghost events). PR #1421 added caching for user memory queries (5-second window).

## 4. Community Hot Topics
- **Issue #2293** — "Multiple agents' 'About You' (USER.md) content linked together?" — [Link](https://github.com/netease-youdao/LobsterAI/issues/2293) — 1 comment. The user reports that editing USER.md in one agent syncs to all agents, preventing per-agent customization. This is a **key usability pain point** for multi-agent workflows; no fix PR yet, but this is likely a feature request for isolated agent profiles.
- **Issue #2288** — Security: HTML preview server follows in-root symlinks → local file disclosure — [Link](https://github.com/netease-youdao/LobsterAI/issues/2288) — High severity, 0 comments, no fix PR.
- **Issue #2287** — Security: NIM outbound media flow allows arbitrary file exfiltration via assistant-generated absolute paths — [Link](https://github.com/netease-youdao/LobsterAI/issues/2287) — High severity, 0 comments, no fix PR.
- **Issue #2286** — Security: Unauthenticated local token proxy allows any local process to replay victim's API capability — [Link](https://github.com/netease-youdao/LobsterAI/issues/2286) — High severity, 0 comments, no fix PR.

All three security issues were opened today by the same researcher (YLChen-007) with detailed advisories. The project should prioritize fixes.

## 5. Bugs & Stability
| Bug (Issue #) | Severity | Description | Fix PR? |
|---|---|---|---|
| #2288 | **Critical** | HTML preview server follows symlinks → arbitrary local file disclosure | None yet |
| #2287 | **Critical** | NIM media flow exfiltrates arbitrary files via assistant paths | None yet |
| #2286 | **Critical** | Unauthenticated local token proxy → API token replay | None yet |
| #2293 | **Medium** | USER.md content inadvertently shared across agents | None yet |
| (Stale, closed today) #1411 | **Medium** | Overview page "Usage Overview" time filter unclickable | Fixed in release 2026.7.7? |
| (Stale, closed today) #1414 | **Medium** | Overview page "Total Sessions" always shows 0 | Fixed in release 2026.7.7? |
| (Stale, closed today) #1416 | **Low** | English UI layout overlap in plan card | Fixed in release 2026.7.7? |
| (Stale, closed today) #1413 | **Low** | Skills list UI breaks when too many skills added | Fixed in release 2026.7.7? |
| (Stale, closed today) #1409 | **Low** | Scheduled tasks across midnight don't generate history | Fixed in release 2026.7.7? |

Context: The "stale" issues were closed today without being explicitly merged into a PR, suggesting they may have been automatically closed by a pattern (e.g., stale bot or batch sweep). Their underlying bugs were likely addressed in the cumulative 2026.7.7 release, but no commit links confirm this.

## 6. Feature Requests & Roadmap Signals
- **Agent-specific USER.md** (Issue #2293) — Users want isolated "About You" content per agent. This is likely to be implemented in the next release given it's a top usability request and aligns with the newly merged agent delegation architecture (PR #2285).
- **Delegated subagent collaboration** (PR #2285, open) — A major feature enabling agent-to-agent delegation, likely targeted for the next release (2026.7.8 or later). This is a roadmap signal for multi-agent orchestration.
- **Multi-account email skill** (PR #2275, merged) — Just shipped in 2026.7.7, but user feedback may drive further enhancements (e.g., per-account send/receive rules).

## 7. User Feedback Summary
- **Pain point**: Users using multiple agents find the global USER.md frustrating; they expected per-agent identity management (#2293). This suggests a need for a "profile" concept per agent.
- **Satisfaction indicators**: High community engagement — 9 issues and 16 PRs in 24 hours. The project is responsive; users file bugs and get fixes shipped within days (e.g., analytics fix, email multi-account).
- **Dissatisfaction (resolved)**: The overview page bugs (#1411, #1414, #1416) were reported months ago (April 3) and only closed today (July 7) — a 3-month delay. Users may have experienced frustration with unresponsive UI elements for a long time.

## 8. Backlog Watch
| Item | Age | Notes |
|---|---|---|
| PR #1277 — Electron + Electron-Builder dependency bump | **97 days open** (April 2) | `dependabot[bot]` PR; bumps electron from 40.2.1 to 43.0.0. Needs maintainer review — security updates may be critical. |
| Issues #2286, #2287, #2288 — Security vulnerabilities | **1 day old** | Critical, but no fix PRs yet. Maintainers should prioritize these as responsible disclosure advisories with full details. |
| Issue #1409 (stale, closed) — Cross-midnight scheduled tasks | 3 months, closed today | Was open since April 3; closed without clear resolution. If the fix was in the release, it should be noted. |

**Top priority for maintainers**: Review and fix the three new security advisories (#2286, #2287, #2288). Next: review the long-open dependabot PR (#1277) for Electron updates, which may contain security fixes.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

# TinyClaw Project Digest — 2026-07-08

## 1. Today's Overview
TinyAGI experienced a **major security-focused activity spike** today, with **9 new high-severity issues** filed by security researcher YLChen-007, all opened on 2026-07-07 and still open with no comments or PRs yet. All 9 issues describe unauthenticated API access vulnerabilities across the control plane, message endpoints, and pairing management. No new releases, no merged PRs, and no community interaction on the issues have occurred yet. The project appears in a **critical reactive state** — these vulnerabilities expose systems to remote compromise, and the maintainers have not yet publicly responded or opened fix PRs.

## 2. Releases
**None.** No new releases have been cut. The latest release remains the previous version; no version number is available.

## 3. Project Progress
**No pull requests were updated in the last 24 hours** (open: 0, merged/closed: 0). There is no evidence of development activity, feature work, or bugfixes being merged today. The project appears stagnant except for the influx of security reports.

## 4. Community Hot Topics
All 9 issues are authored by **YLChen-007** in a coordinated security disclosure. While none have comments yet, they represent a **single high-priority thread of concern**:

- **[#286](https://github.com/TinyAGI/tinyagi/issues/286) (Unauthenticated Local Control API)** — Covers persistent settings mutation, prompt overwrite, and event stream access.
- **[#288](https://github.com/TinyAGI/tinyagi/issues/288) (Unauthenticated local control plane)** — Leaks live events via SSE, allows settings modification.
- **[#287](https://github.com/TinyAGI/tinyagi/issues/287) (Unauthenticated Pairing Management)** — Allows arbitrary approval of pending channel senders.
- **[#293](https://github.com/TinyAGI/tinyagi/issues/293) (Path traversal)** — Agent ID path traversal escapes workspace root.
- **[#289](https://github.com/TinyAGI/tinyagi/issues/289) (File exfiltration)** — Arbitrary local files exfiltrated via outbound attachments.
- **[#290](https://github.com/TinyAGI/tinyagi/issues/290) (Terminal escape injection)** — Allows operator log spoofing.
- **[#291](https://github.com/TinyAGI/tinyagi/issues/291) (Anthropic adapter)** — Disables dangerous-tool confirmation for Claude.
- **[#292](https://github.com/TinyAGI/tinyagi/issues/292) (Admin API)** — Persistent settings and agent prompt modification.
- **[#294](https://github.com/TinyAGI/tinyagi/issues/294) (Control-plane routes)** — System prompt overwrite and daemon restart.

**Underlying need:** The community (or the researcher) is calling for immediate authentication and authorization hardening across TinyAGI's entire API surface. The lack of any response or fix PRs suggests the project is unprepared for security incident response.

## 5. Bugs & Stability
All 9 issues are **critical-severity security vulnerabilities**, ranked by potential impact:

| CVE-like Risk | Issue | Summary | Fix PR Exists? |
|---|---|---|---|
| **Critical (CVSS ~9.8)** | [#294](https://github.com/TinyAGI/tinyagi/issues/294) | Unauthenticated control-plane → system prompt overwrite & daemon restart | No |
| **Critical** | [#293](https://github.com/TinyAGI/tinyagi/issues/293) | Path traversal escapes workspace → arbitrary file read/write | No |
| **Critical** | [#292](https://github.com/TinyAGI/tinyagi/issues/292) | Admin API → persistent settings & prompt modification | No |
| **Critical** | [#291](https://github.com/TinyAGI/tinyagi/issues/291) | Anthropic adapter skip permissions → remote code execution risk | No |
| **Critical** | [#289](https://github.com/TinyAGI/tinyagi/issues/289) | File exfiltration via attachments | No |
| **High (CVSS ~8.6)** | [#288](https://github.com/TinyAGI/tinyagi/issues/288) | Local control plane leaks events, modifies settings | No |
| **High** | [#287](https://github.com/TinyAGI/tinyagi/issues/287) | Pairing management → arbitrary channel approval | No |
| **High** | [#286](https://github.com/TinyAGI/tinyagi/issues/286) | Local control API → mutation & event access | No |
| **Medium** | [#290](https://github.com/TinyAGI/tinyagi/issues/290) | Terminal escape injection → log spoofing | No |

**No fix PRs exist** for any of these. The project's stability is **severely compromised** — TinyAGI is currently **unsuitable for production deployment** in its present state without immediate authentication patches.

## 6. Feature Requests & Roadmap Signals
No feature requests were filed today. The entire activity is security disclosure. **Predictions for next version:** The next release will almost certainly be a **security patch release** with:
- Authentication enforcement on all `/api/` routes
- Input validation for `agent ID` to prevent path traversal
- Removal of `--dangerously-skip-permissions` in Anthropic adapter
- Rate limiting or IP restrictions on local control plane
- Proper authorization checks for pairing management

## 7. User Feedback Summary
**There is no direct user feedback today.** However, the researcher's submission pattern strongly implies:
- **Pain point:** TinyAGI's default configuration is insecure by design — all APIs are open to local network and even remote callers.
- **Pain point:** No documented authentication setup or security hardening guide.
- **Satisfaction:** Likely low among security-conscious developers; the project appears to have no security review process.
- **Use cases impacted:** Any deployment exposed to a network, especially multi-tenant or cloud-based TinyAGI instances.

## 8. Backlog Watch
All 9 issues were filed **less than 24 hours ago**, so they are not yet "long-unanswered." However, given the critical nature, **the clock is ticking.** Notable items needing maintainer attention:

- **[#286](https://github.com/TinyAGI/tinyagi/issues/286), [#287](https://github.com/TinyAGI/tinyagi/issues/287), [#288](https://github.com/TinyAGI/tinyagi/issues/288)** — These three together constitute a **complete unauthenticated control plane takeover**. Should be triaged as a single incident.
- **[#291](https://github.com/TinyAGI/tinyagi/issues/291) (Anthropic adapter)** — The `--dangerously-skip-permissions` flag is a **design-level vulnerability**, not just a configuration issue.
- **No previous unanswered issues** — This appears to be the project's first major security incident.

**Maintainer action required within 48 hours:** Acknowledge the reports, open a security patch branch, and ideally issue a security advisory or CVE. Failure to respond risks forks, CVSS scoring without coordination, and loss of community trust.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-07-08

## Today's Overview

CoPaw continues active pre-release testing with **v2.0.0-beta.3** now available alongside the stable **v1.1.12.post3** patch release. Activity remains high with **16 issues** updated and **38 pull requests** touched in the last 24 hours — indicating a peak in development velocity as the team pushes toward GA. The release pipeline is fully instrumented with automated installation verification checks, a sign of maturing CI/CD practices. The project is clearly in a **pre-GA hardening phase**, with multiple community-reported regressions and stability bugs receiving dedicated fix PRs.

---

## Releases

### v2.0.0-beta.3 (Beta pre-release)
- **Released:** 2026-07-07
- **Changes:**
  - **Auth/Rate Limiting:** Multi-dimensional rate limiting protection added (`feat(auth)`)
  - **CI Fix:** Empty `extra_flags` expansion guarded for Bash 3.2 compatibility on macOS
- **Breaking Changes:** None noted
- **Migration Notes:** No migration steps documented; beta testers should update via `pip install --upgrade qwenpaw==2.0.0-beta.3`

### v1.1.12.post3 (Stable patch)
- **Released:** 2026-07-06
- **Purpose:** Critical path stabilization prior to v2.0.0 GA
- **Installation verification:** Passed automated checks across all platforms

---

## Project Progress

**15 PRs merged/closed in the last 24 hours** — key advancements include:

- **Channel Ecosystem Expansion:**
  - `#4693` — Plugin-based custom channel registration with schema-driven config UI (merged after 6 weeks of development)
  - `#5585` — Matrix streaming mode (Discord-like) added to Matrix channel support
  - `#5823` — Feishu markdown images now sent as native image parts (fixes rendering issue)

- **Memory & Agent Improvements:**
  - `#5820` — Usage-aware auto search, backend-specific embeddings for ReMe Light memory
  - `#5786` — Three bug fixes bundled (`#5709`, `#5773`, `#5784`): model matching by provider_id, chat list thread crash, and missing agent profile avatar display

- **Release Infrastructure:**
  - `#5837` — Version bump to `2.0.0b4` (indicating next beta imminent)
  - `#5832` — Removed default session approval level mode in console UI
  - `#5819` — Stable release verification completed

- **New Open PRs (notable first-time contributors):**
  - `#5840` — `grep_search` gains `show_file` parameter (hehuang139)
  - `#5834` — `grep_search` pipe-separated literal fix (hehuang139)
  - `#5826` — Per-agent avatar field in profile config (slashchenxiaojun)

---

## Community Hot Topics

**Most Active Issues:**

| Issue | Title | Comments | Activity |
|-------|-------|----------|----------|
| [#5401](https://github.com/agentscope-ai/QwenPaw/issues/5401) | Console: large tool-use history fails to render | 15 | Open 2 weeks |
| [#5273](https://github.com/agentscope-ai/QwenPaw/issues/5273) | v2.0.0 Pre-release Bug Tracker | 10 | Central tracker |
| [#5479](https://github.com/agentscope-ai/QwenPaw/issues/5479) | Large session files (>500KB) crash frontend | 6 | Open 2 weeks |
| [#5797](https://github.com/agentscope-ai/QwenPaw/issues/5797) | Scheduled task notification toggle | 4 | Feature request |

**Underlying Needs:**
- **Frontend scalability** is the #1 community pain point — sessions with heavy tool usage or >500KB files crash the UI, driving demand for progressive/streaming rendering
- **User agency** over notification behavior (notifications vs. no-notifications) reflects a broader desire for **configurable user experience** rather than developer-dictated defaults
- **The v2.0.0 tracker** shows the community is actively reporting pre-release regressions, indicating high engagement in the beta program

---

## Bugs & Stability

### Critical (UI crash / data loss)

| Issue | Severity | Description | Fix PR? |
|-------|----------|-------------|---------|
| [#5401](https://github.com/agentscope-ai/QwenPaw/issues/5401) | **Critical** | Console crashes on large tool-use history (`DataContent` type mismatch) | Not yet |
| [#5479](https://github.com/agentscope-ai/QwenPaw/issues/5479) | **Critical** | >500KB session files crash frontend on open | Not yet |
| [#5829](https://github.com/agentscope-ai/QwenPaw/issues/5829) | **Critical** | Windows sandbox ACE pollutes system directories → Hermes Desktop GPU crash | Not yet |

### High (functional regression / security)

| Issue | Severity | Description | Fix PR? |
|-------|----------|-------------|---------|
| [#5842](https://github.com/agentscope-ai/QwenPaw/issues/5842) | **High** | `find -delete` bypasses file deletion guard | ✅ [#5843](https://github.com/agentscope-ai/QwenPaw/pull/5843) |
| [#5775](https://github.com/agentscope-ai/QwenPaw/issues/5775) | **High** | Auto-memory interval never triggers (state lost on rebuild) | Closed (fix in `#5820`) |
| [#5789](https://github.com/agentscope-ai/QwenPaw/issues/5789) | **High** | Context compression crashes when model output exceeds JSON Schema maxLength | Not yet |
| [#5835](https://github.com/agentscope-ai/QwenPaw/issues/5835) | **High** | `/stop` command lacks user isolation in DM → cross-user cancellation | Not yet |

### Medium

| Issue | Severity | Description | Fix PR? |
|-------|----------|-------------|---------|
| [#5759](https://github.com/agentscope-ai/QwenPaw/issues/5759) | **Medium** | Plan mode repeatedly reads same file (5x) | Not yet |
| [#5774](https://github.com/agentscope-ai/QwenPaw/issues/5774) | **Medium** | Google Gemini channel formatting error | Closed |

**Notable:**
- [#5842](https://github.com/agentscope-ai/QwenPaw/issues/5842) represents a **security bypass** — the `find -delete` escape is particularly concerning as it defeats the file guard that prevents workspace-escape deletion
- [#5829](https://github.com/agentscope-ai/QwenPaw/issues/5829) has **system-level implications** — ACE pollution affects all Chromium-based apps on the machine, not just QwenPaw

---

## Feature Requests & Roadmap Signals

**User-requested features in active discussion:**

| Issue | Feature | Maturity | Likely Next Version? |
|-------|---------|----------|----------------------|
| [#5797](https://github.com/agentscope-ai/QwenPaw/issues/5797) | Scheduled task notification toggle | High consensus (10+ comments) | ✅ v2.0.0-rc |
| [#5312](https://github.com/agentscope-ai/QwenPaw/issues/5312) | Desktop: minimize to tray on close | Moderate | v2.0.0 or later |
| [#5821](https://github.com/agentscope-ai/QwenPaw/issues/5821) | Per-media-type `rejects_media` capability | Detailed design | v2.0.0-rc |
| [#5785](https://github.com/agentscope-ai/QwenPaw/issues/5785) | Coding mode: allow selecting hidden folders | Low discussion | Post-v2.0 |

**Roadmap signals:**
- The three **first-time contributor** PRs on grep_search (two from @hehuang139) signal growing community interest in improving built-in developer tools
- [PR #5187](https://github.com/agentscope-ai/QwenPaw/pull/5187) (Windows desktop GUI automation with UIA + Tauri) remains open and active — a major feature for enterprise use cases
- [PR #5814](https://github.com/agentscope-ai/QwenPaw/pull/5814) bundling Node runtime for ACP desktop suggests **zero-dependency deployment** is a strategic priority
- [PR #5669](https://github.com/agentscope-ai/QwenPaw/pull/5669) adding `qwen3-rerank` to memory search represents a **meaningful memory quality improvement** — currently under review

---

## User Feedback Summary

**Pain Points:**
1. **Frontend instability at scale** — Two crashing bugs (tool-use history, large session files) are the most commented issues. Users explicitly request *progressive loading* instead of hard crashes.
2. **Notification experience is polarizing** — Some users want popups for scheduled tasks; others found them annoying. The community consensus (explicitly stated in `#5797`) is that **developers shouldn't decide for users** — toggle it.
3. **Windows sandbox side effects** — The ACE pollution issue (`#5829`) represents a **trust-eroding bug** because it affects non-QwenPaw applications.
4. **Memory reliability** — `#5775` (auto-memory not triggering) undermines confidence in long-running agent conversations.

**Satisfaction Signals:**
- First-time contributors are actively submitting **real, well-structured PRs** (grep_search, agent avatars)
- Beta testers are using and reporting regressions on `#5273` — a healthy sign for pre-release quality
- Multiple PRs from @yutai78786, @jinglinpeng, and @rayrayraykk show **core contributors are maintaining high velocity**

---

## Backlog Watch

**Issues needing maintainer attention:**

| Issue | Age | Reason for Watch |
|-------|-----|------------------|
| [#5401](https://github.com/agentscope-ai/QwenPaw/issues/5401) | 15 days | Critical crash, no fix PR, high comment count. **Top priority for v2.0 GA** |
| [#5479](https://github.com/agentscope-ai/QwenPaw/issues/5479) | 14 days | Same crash class as #5401 — likely same root cause (frontend rendering pipeline) |
| [#5312](https://github.com/agentscope-ai/QwenPaw/issues/5312) | 20 days | High-demand UX feature, could be bundled with desktop improvements in `#5187` |
| [#5829](https://github.com/agentscope-ai/QwenPaw/issues/5829) | <1 day | Severity + system-level impact warrants immediate triage |
| [#5835](https://github.com/agentscope-ai/QwenPaw/issues/5835) | <1 day | Multi-user safety issue in enterprise scenarios (DingTalk) |

**PRs needing review:**
- [#5669](https://github.com/agentscope-ai/QwenPaw/pull/5669) — Memory reranking (qwen3-rerank) — **open 8 days under review**, important memory quality improvement
- [#5841](https://github.com/agentscope-ai/QwenPaw/pull/5841) — Tool-call JSON whitespace recovery — directly impacts reliability of agent tool use
- [#5844](https://github.com/agentscope-ai/QwenPaw/pull/5844) — CI real-behavior-proof gate — important for PR quality control as contributor volume grows

---

**Overall Health:** 🟡 **Yellow** — The project has excellent development velocity and community engagement, but is carrying **two critical frontend crashes** that must be resolved before v2.0.0 GA. The CI infrastructure improvements and first-time contributor pipeline are strong positives. The Windows sandbox bug and security bypass deserve immediate escalation.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-07-08

## 1. Today's Overview

Project activity is **elevated**, with 23 issues and 50 PRs updated in the last 24 hours — a high-traffic day reflecting an intense development sprint. The maintainer team is actively merging fixes (4 closed issues, 6 merged/closed PRs) while pushing forward several large feature branches (SOP authoring, Inkbox channel, ZeroCode TodoWrite tracker). The backlog shows strong community engagement: several open issues have been reported in the last 48–72 hours, particularly around web dashboard UX and configuration documentation. No new releases were cut today; the project appears to be consolidating toward a v0.8.3 release. Security and audit hygiene work is also prominent (crossbeam-epoch CVE fix, wasmtime-wasi advisory reconciliation).

## 2. Releases

**No new releases today.** The latest available release remains `v0.8.2`. Tracker issue #8073 indicates that v0.8.3 release-support work is in progress.

## 3. Project Progress

**6 PRs merged/closed today** (all appear to be merged — closures on GitHub were merge closes):

| PR | Title | Focus |
|----|-------|-------|
| [#8821](https://github.com/zeroclaw-labs/zeroclaw/pull/8821) | feat(runtime): meter the max-iteration graceful summary via run_model_query (S21 P2) | Agent loop graceful termination |
| [#8784](https://github.com/zeroclaw-labs/zeroclaw/pull/8784) | refactor(runtime): split-history loop contract for Agent entry points (PR-1 of #7846 rework) | Agent loop architecture refactor (history contract fix) |
| [#8782](https://github.com/zeroclaw-labs/zeroclaw/issues/8782) | fix(audit): bump crossbeam-epoch 0.9.18 -> 0.9.20 to clear RUSTSEC-2026-0204 | Security vulnerability fix |
| [#8815](https://github.com/zeroclaw-labs/zeroclaw/issues/8815) | [Feature]: skill_manage.create action so agents can save new skills as bundles | Agent self-authoring capability |
| [#8690](https://github.com/zeroclaw-labs/zeroclaw/pull/8690) | fix(channels): gate /model --agent behind per-sender authorization (#8044) | Channel authorization security fix |
| [#8678](https://github.com/zeroclaw-labs/zeroclaw/issues/8678) | [Bug]: advance_step has no run-status guard — approval gate bypass | SOP engine security fix |

**Key advances:**
- **Skills self-authoring**: Issue #8815 adds `skill_manage.create` action, letting agents persist new skills as bundles rather than loose markdown files — a meaningful autonomy gain.
- **Agent loop refactoring**: PR #8784 (split-history contract) resolves a design flaw from PR #7846 where mutable history rewrites broke the append-log guarantee.
- **MCP tool schema optimization**: PR #8817 (open) tackles memory growth from per-iteration tool schema cloning, directly addressing OOM patterns reported in issue #8642.

## 4. Community Hot Topics

### Most Active Issues

| Issue | Title | Comments | Status |
|-------|-------|----------|--------|
| [#6699](https://github.com/zeroclaw-labs/zeroclaw/issues/6699) | tool_filter_groups is a no-op for real MCP tools | 9 | Open, priority:p1, risk:high |
| [#7155](https://github.com/zeroclaw-labs/zeroclaw/issues/7155) | RFC: Add per-execution confirmation tier for high-risk shell commands | 6 | Open, priority:p1, risk:high |
| [#7952](https://github.com/zeroclaw-labs/zeroclaw/issues/7952) | [Feature]: publish full-channel prebuilt assets alongside default | 5 | Open, blocked, needs-maintainer-review |

### Underlying Needs Analysis

1. **MCP tool filtering broken (#6699)**: Users configuring `tool_filter_groups` expect real MCP tools to be filtered but the prefix check (`starts_with("mcp_")`) misses tools from real MCP registries that have different naming (e.g., `github_*`, `filesystem_*`). A fix PR (#8819) was opened today — the community's highest-comment issue is being actively addressed.

2. **Shell safety desires (#7155)**: Users want a medium tier between "allow all" and "deny all" — specific high-risk commands that always require per-execution human confirmation. This mirrors Claude Code's command policy pattern and signals demand for graduated trust in agent tool execution.

3. **Release asset availability (#7952)**: When users configure custom channels, prebuilt binaries don't include them. This creates friction for users who want community-built channels without compiling from source. This issue is blocked and awaiting maintainer review.

## 5. Bugs & Stability

### High Severity Bugs Reported Today

| Issue | Title | Severity | Fix PR Exists? |
|-------|-------|----------|----------------|
| [#8800](https://github.com/zeroclaw-labs/zeroclaw/issues/8800) | Windows: killed zeroclaw process leaves port bound (zombie LISTENING/CLOSE_WAIT) | S2 - degraded behavior | ❌ No |
| [#8810](https://github.com/zeroclaw-labs/zeroclaw/issues/8810) | Documentation is wrong - Telegram example | S2 - degraded behavior | ❌ No |
| [#8804](https://github.com/zeroclaw-labs/zeroclaw/issues/8804) | skills prompt advertises callable-tool set that doesn't match registry | Functional divergence | ✅ PR #8805 |
| [#8794](https://github.com/zeroclaw-labs/zeroclaw/issues/8794) | Stopping agent mid-work erases tool calls/thinking from context | S1 - workflow blocked | ❌ No |
| [#8787](https://github.com/zeroclaw-labs/zeroclaw/issues/8787) | skill-registered tools bypass excluded_tools denylist | Security policy gap | ✅ PR #8788 |
| [#8797](https://github.com/zeroclaw-labs/zeroclaw/issues/8797) | bind-telegram setup instructions reference unknown config property | S3 - minor | ❌ No |

### Critical Stability Patterns

- **Windows port zombie (#8800)**: On Windows 11, killing a ZeroClaw process leaves the port in `LISTENING`/`CLOSE_WAIT` state, preventing new daemon startup. This affects users running the Dashboard with Edge browser. No fix exists yet; likely requires Windows-specific socket shutdown handling.

- **Context loss on stop (#8794)**: S1 severity — stopping the agent mid-tool-use causes the tool calls and reasoning to be erased from context, making the next message unaware that work happened. This is a **workflow-blocking** bug for interactive users.

- **Security policy bypass for skills (#8787)**: Skill-registered tools completely ignore `excluded_tools` policies. Fix PR #8788 applies the denylist, closing a significant security gap.

## 6. Feature Requests & Roadmap Signals

### High-Value User-Requested Features

1. **Shell command confirmation tier (#7155)**: Per-execution allow/ask/deny for high-risk commands. This is an accepted RFC with active discussion. **Prediction**: High candidate for v0.8.3 given P1 priority and mid-risk status.

2. **Turn-step collapsing in web dashboard (#8803)**: Collapse intermediate tool execution cards into a single compact group per completed turn. Addresses transcript readability across long sessions. Strong UX improvement signal.

3. **Single WebSocket protocol consolidation (#8798)**: Merge `/ws/chat` and `/acp` onto one wire protocol. This RFC recognizes architectural debt from dual WebSocket channels and would reduce maintenance surface. Long-term roadmap item.

4. **Hot-reload log config (#8314)**: Per-issue PR #8816 was opened today, implementing hot-reload for log persistence and rotation settings. **Prediction**: Likely to land in v0.8.3.

### Roadmap Signals

| Tracker/Feature | Status | Likely Release Target |
|-----------------|--------|----------------------|
| v0.8.3 observability/CI/docs/deps (#8073) | Active, P2 | **v0.8.3** |
| SOP authoring surface (#8736, PR #8590) | Merged/shipped (feat/sop-authoring) | **Shipped** |
| Inkbox native channel (#8384) | XL-sized PR, needs author action | **v0.9+** |
| ZeroCode TodoWrite tracker (#8639) | XL PR, size:XL | **v0.8.3 or v0.9** |

## 7. User Feedback Summary

### Pain Points

- **"Documentation is wrong" — Telegram example (#8810)**: User cr3a7ure reports that Telegram setup documentation is incorrect, noting "slop remains slop" — strong dissatisfaction with reference accuracy.
- **"Stopping the agent mid work erases tool calls... the whole step never happened" (#8794)**: User susyabashti reports S1 severity workflow block — context erasure makes iterative work impossible.
- **"bind-telegram setup instructions reference an unknown configuration property" (#8797)**: User Moulde found that the CLI instructs users to configure a key it doesn't recognize — onboarding friction.
- **"Skills page has no navigation entry in sidebar" (#8792)**: User NiuBlibing notes a completed page is unreachable from the UI — discoverability gap.

### Use Case Signals

- **Multi-agent config feedback**: Multiple PRs this week focus on per-agent profile overrides (prompt_injection_mode, runtime profile overrides) — suggesting multi-agent deployments are growing.
- **SOP adoption**: PR #8590 (SOP visual authoring) includes a beta tester call, indicating the project is actively seeking production users for the SOP workflow feature.
- **Windows usability gaps**: The port zombie bug (#8800) and general lack of Windows-specific fixes suggest the Windows user base is growing but experiencing stability issues.

## 8. Backlog Watch

### Issues Needing Maintainer Attention

| Issue | Age | Problem | Status |
|-------|-----|---------|--------|
| [#7952](https://github.com/zeroclaw-labs/zeroclaw/issues/7952) | 19 days | Publish full-channel prebuilt assets alongside default | **Blocked, needs-maintainer-review** |
| [#8810](https://github.com/zeroclaw-labs/zeroclaw/issues/8810) | 1 day | Documentation is wrong — Telegram example | **Uncommented by maintainers** |
| [#8800](https://github.com/zeroclaw-labs/zeroclaw/issues/8800) | 1 day | Windows port zombie prevents daemon restart | **Uncommented by maintainers** |
| [#8794](https://github.com/zeroclaw-labs/zeroclaw/issues/8794) | 1 day | S1: stopping agent mid-work erases context | **Uncommented by maintainers** |
| [#8797](https://github.com/zeroclaw-labs/zeroclaw/issues/8797) | 1 day | bind-telegram setup references unknown property | **Uncommented by maintainers** |

### Stale PR Needing Attention

| PR | Age | Problem |
|----|-----|---------|
| [#8337](https://github.com/zeroclaw-labs/zeroclaw/pull/8337) | 12 days | herdr agent reporting integration (L-sized, risk:high) — **needs-author-action** |
| [#8384](https://github.com/zeroclaw-labs/zeroclaw/pull/8384) | 11 days | Inkbox native channel (XL-sized) — **needs-author-action** |

### Assessment

The project is in a **healthy but stretched** state: developer velocity is high, with multiple concurrent large features advancing. However, the 24-hour bug influx (7 new bugs, 2 of S1 severity) indicates that rapid feature development may be outpacing stability hardening. Several new-user-impacting issues (docs errors, config confusion, UI discoverability) have not yet received maintainer responses, which could erode onboarding experience. The maintainer team is responsive to P1 security/audit issues (crossbeam fix merged same day) but may need to allocate more bandwidth to triage the growing bug queue.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*