# OpenClaw Ecosystem Digest 2026-06-12

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-06-12 00:44 UTC

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

# OpenClaw Project Digest — 2026-06-12

---

## 1. Today's Overview

OpenClaw continues to operate at extremely high activity volume, with **500 issues and 500 PRs updated in the last 24 hours** — a signal of both a large, engaged community and a substantial moderation/maintainer burden. Of the tracked issues, **478 remain open** against only 22 closed, and **390 of 500 PRs are still open**, indicating a significant review backlog. No new releases were published today. The majority of top-voted and most-commented issues carry the `clawsweeper:needs-maintainer-review` and `clawsweeper:needs-product-decision` labels, suggesting that triage bottlenecks — not a lack of community contributions — are the primary constraint on progress.

---

## 2. Releases

**None.** No new version was published on 2026-06-12.

---

## 3. Project Progress

Two PRs were merged/closed today, both within hours of being opened:

| PR | Summary |
|---|---|
| [#92250](https://github.com/openclaw/openclaw/pull/92250) | Fix stale cron catch-up after schedule updates — prevents replaying old cron slots after `cron.update` changes scheduling inputs. |
| [#92277](https://github.com/openclaw/openclaw/pull/92277) | Identical fix for cron catch-up (duplicate of #92250, also closed same day). |

Both landed quickly, suggesting the cron catch-up defect (#91944) was considered an easy, safe fix. Several other open PRs are marked **"ready for maintainer look"** and could advance soon:

- **[#92111](https://github.com/openclaw/openclaw/pull/92111)** — *fix(update): restart managed gateway when update handoff fails after stop.* Addresses a case where `openclaw update` leaves the gateway dead (`loaded inactive dead`) on systemd user services. P1, merge-risk flagged for availability.
- **[#91862](https://github.com/openclaw/openclaw/pull/91862)** — *fix(memory): gracefully degrade when embedding provider is unregistered.* Prevents CLI crashes when a memory-core embedding provider plugin is missing.
- **[#89569](https://github.com/openclaw/openclaw/pull/89569)** — *feat(channels): add pre-auth access requests and grouped DM allowlists.* XL-sized PR adding a silent access-request workflow for blocked Telegram/WhatsApp DMs and grouped DM allowlist support. Flagged with compatibility and security-boundary merge risks.

---

## 4. Community Hot Topics

The following issues dominate discussion by comment count and reactions, revealing the community's deepest unmet needs:

### Platform Parity & Desktop Gap
- **[#75](https://github.com/openclaw/openclaw/issues/75)** — *Linux/Windows Clawdbot Apps* (💬 109 comments, 👍 79). OpenClaw has macOS, iOS, and Android apps but lacks native desktop clients for Linux and Windows. With 79 upvotes and nearly 6 months of discussion, this is the single most-demanded platform feature.

### Security & Secret Management
- **[#39604](https://github.com/openclaw/openclaw/issues/39604)** — *Add `tools.web.fetch.allowPrivateNetwork`* (👍 9). Users want opt-in private network access for `web_fetch` to reach internal services.
- **[#10659](https://github.com/openclaw/openclaw/issues/10659)** — *Masked Secrets — prevent agent from accessing raw API keys* (👍 4). A system where agents can use but not see API keys, defending against prompt-injection credential theft.
- **[#6615](https://github.com/openclaw/openclaw/issues/6615)** — *Add denylist support for exec-approvals* (👍 7). Complement the allowlist with deny-everything-except-X policies.

### Android Distribution
- **[#9443](https://github.com/openclaw/openclaw/issues/9443)** — *Prebuilt Android APK releases* (109 likes on sub-issue). Users want downloadable APKs rather than requiring a source build.

### Underlying Patterns
The top issues cluster around **three themes**: (1) platform completeness — users expect native desktop parity; (2) defense-in-depth security — secret masking, network scoping, and exec denylists; and (3) distribution friction — prebuilt binaries would lower the barrier significantly. These are not feature requests but **expectation gaps** between what a production-grade agent platform should provide and what OpenClaw currently does.

---

## 5. Bugs & Stability

Ranked by severity (P1 first), with impact tags and fix-PR status:

### P1 — Critical / Data Loss / Security
| # | Issue | Impact | Fix PR |
|---|---|---|---|
| [#22676](https://github.com/openclaw/openclaw/issues/22676) | Signal daemon stop() race condition on SIGUSR1 restart — orphaned processes, send failures | crash-loop, message-loss | `clawsweeper:linked-pr-open` |
| [#32296](https://github.com/openclaw/openclaw/issues/32296) | Agent replies to previous message instead of current (session context confusion) | session-state, message-loss | Fix PR needed |
| [#29387](https://github.com/openclaw/openclaw/issues/29387) | Bootstrap files in agentDir silently ignored — only workspace dir files injected | session-state, security | Fix PR needed |
| [#40001](https://github.com/openclaw/openclaw/issues/40001) | Write tool lacks append mode — isolated cron sessions destroy shared files | session-state, data-loss | Fix PR needed |
| [#43367](https://github.com/openclaw/openclaw/issues/43367) | Multi-agent orchestration unstable: concurrent agents overwrite config, session-lock failures | session-state, message-loss, auth-provider | Fix PR needed |
| [#38327](https://github.com/openclaw/openclaw/issues/38327) | "Cannot convert undefined or null to object" on 2026.3.2 with google-vertex/gemini-3.1-pro-preview | auth-provider, crash-loop | Fix PR needed |
| [#91363](https://github.com/openclaw/openclaw/issues/91363) | Isolated cron consistently fails with "LLM request failed" on model-call-started phase | session-state, message-loss, auth-provider | Fix PR needed |
| [#40540](https://github.com/openclaw/openclaw/issues/40540) | `openclaw update` fails with EBUSY on Windows | (behavior) | Fix PR needed |

### P2 — Important / Regression
| # | Issue | Impact |
|---|---|---|
| [#32473](https://github.com/openclaw/openclaw/issues/32473) | Control UI requires device identity — breaks on non-localhost HTTPS | security, auth-provider |
| [#31583](https://github.com/openclaw/openclaw/issues/31583) | `exec` tool does not inherit `skills.entries.*.env` environment variables (regression) | security, auth-provider |
| [#31331](https://github.com/openclaw/openclaw/issues/31331) | Docker + Sandbox workspace bind failures | session-state, security |
| [#37634](https://github.com/openclaw/openclaw/issues/37634) | Sandbox `workspaceAccess: none` makes workspace read-only (👍 6) | session-state, security |
| [#41545](https://github.com/openclaw/openclaw/issues/41545) | Editing WebSocket URL clears Gateway Token | session-state, auth-provider |
| [#38439](https://github.com/openclaw/openclaw/issues/38439) | Webchat avatar endpoint returns 404 (regression) | security |
| [#85888](https://github.com/openclaw/openclaw/issues/85888) | Cron jobs fail with MiniMax 503 during early morning CST, manual triggers succeed | session-state |

**Notable trend**: A large fraction of P1 bugs involve **session-state corruption, message loss, and auth-provider breakage on specific model backends**, suggesting that OpenClaw's multi-provider abstraction layer is a persistent source of regressions as new model providers are added.

---

## 6. Feature Requests & Roadmap Signals

High-demand user requests that are likely candidates for inclusion based on community engagement and alignment with existing roadmap patterns:

| Request | Signal Strength | Likelihood |
|---|---|---|
| **[#35203](https://github.com/openclaw/openclaw/issues/35203)** — Multi-Agent Collaboration RFC: capability profiling + shared blackboard + layered memory + token governance | RFC-grade, comprehensive | Medium — aligns with core multi-agent direction but is large in scope |
| **[#27445](https://github.com/openclaw/openclaw/issues/27445)** — `announceTarget` option for sub-agent completion routing (👍 5) | High engagement, clear use case | Medium-High — a narrow, well-scoped config addition |
| [#10659](https://github.com/openclaw/openclaw/issues/10659) — Masked secrets (👍 4) | Strong security motivation | Medium — requires architectural changes to secret resolution |
| [#7722](https://github.com/openclaw/openclaw/issues/7722) — Filesystem sandboxing config `tools.fileAccess` (👍 4) | Clear use case, policy-driven | Medium |
| [#40418](https://github.com/openclaw/openclaw/issues/40418) — Automated Session Memory Preservation on `/new` | Natural extension of memory-core | Medium — overlaps with existing memory plugin work |
| **[#20786](https://github.com/openclaw/openclaw/issues/20786)** — Telegram Business Bot support (👍 6) | Highest 👍 count on feature requests | Medium-High — channel-level feature, well-scoped |
| [#10687](https://github.com/openclaw/openclaw/issues/10687) — Fully dynamic model discovery for OpenRouter+ (👍 3) | Addresses a known UX pain | Medium — increments on existing `models.json` system |
| [#14785](https://github.com/openclaw/openclaw/issues/14785) — Reduce tool schema token overhead (~3,500 tok/session) | Performance, cost-saving | Medium — optimisation, not user-visible |
| [#13616](https://github.com/openclaw/openclaw/issues/13616) — Backup/restore utility for config, cron, session history | Disaster recovery, environment migration | Low-Medium — broad but non-core |

**Prediction**: The most likely near-term additions are **Telegram Business Bot support** (high demand, narrow scope), **masked secrets** (security-critical, multiple issues reinforcing), and the **write-tool append mode** (data-loss impact makes it urgent). The multi-agent RFC (#35203) is the most architecturally significant but will likely be decomposed into smaller deliverables.

---

## 7. User Feedback Summary

### Pain Points

- **Docker and sandbox complexity**: Multiple issues (#31331, #37634, #56263) describe broken workspace mounts, read-only sandboxes, and hardcoded `chmod 0o600` breaking multi-user setups. The Docker-on-Docker sandbox path is essentially unreliable today.
- **Cron reliability**: At least 4 issues (#85888, #37966, #91363, #40611, #40001) document cron failures ranging from provider timeouts, to missed slots, to data-destroying overwrites. Cron is a headline feature that is not yet robust in production.
- **Multi-provider model backend fragility**: Issues across Vertex AI, MiniMax, LiteLLM, and CLI-backed models all show that adding new providers introduces regressions in session state, tool availability, and message routing.
- **Authentication and session routing**: Multiple P1 bugs involve auth-tokens being cleared by unrelated UI edits (#41545), sessions routing to wrong agents (#41165), and HTTPS/localhost secure-context requirements blocking VPS deployments (#32473).

### Satisfaction Signals

- The community is actively submitting PRs with proof, tests, and detailed root-cause analysis — this is a **technically sophisticated contributor base**.
- Issues like #35203 (multi-agent RFC) and #32473 show users thinking about **architectural abstractions** (capability profiling, Unix-DAC-style permissions), suggesting deep engagement.

### Dissatisfaction Signals

- The sheer volume of open issues (478/500) and the prevalence of `needs-maintainer-review` labels indicate that **contributors feel their work is stuck in review limbo**.
- Several long-running issues (e.g., #75 for Linux/Windows apps, 6+ months old) carry the `clawsweeper:no-new-fix-pr` label, signaling that the maintainers have explicitly blocked community PRs — a potential source of frustration.

---

## 8. Backlog Watch

Important items that have gone unaddressed for extended periods and need maintainer attention:

| # | Issue | Age | Risk |
|---|---|---|---|
| **[#75](https://github.com/openclaw/openclaw/issues/75)** | Linux/Windows Clawdbot Apps | 5+ months | Highest-visibility gap; users cannot run OpenClaw on the two most popular desktop platforms |
| **[#9443](https://github.com/openclaw/openclaw/issues/9443)** | Prebuilt Android APK releases | 4+ months | Friction for mobile adoption; source-only distribution excludes non-developers |
| [#6731](https://github.com/openclaw/openclaw/issues/6731) | Safe/Unsafe ClawdBot (sandbox hardening) | 4+ months | Security posture; suggests a broader sandboxing strategy discussion is needed |
| [#57326](https://github.com/openclaw/openclaw/issues/57326) | CLI-backed helper paths still bypass CLI dispatch on latest main | 2.5 months | Regression; tagged stale despite being actively discussed |
| [#57901](https://github.com/openclaw/openclaw/issues/57901) | Safeguard compaction ignores `compaction.model` config | 2.5 months | Configuration effectively ignored; tagged stale despite having repro |
| [#38295](https://github.com/openclaw/openclaw/pull/38295) | fix(config): dedupe warning spam and slow restart storms | 3+ months old PR | Addresses operational stability; open but seemingly stuck |
| [#35203](https://github.com/openclaw/openclaw/issues/35203) | Multi-Agent Collaboration RFC | 3+ months | Strategic feature; community waiting on a product decision (`clawsweeper:needs-product-decision`) |
| [#40418](https://github.com/openclaw/openclaw/issues/40418) | Automated Session Memory Preservation | 3+ months | Tagged stale; memory-core plugin work may have superseded this, but no status update given |
| [#6615](https://github.com/openclaw/openclaw/issues/6615) | Denylist support for exec-approvals (👍 7) | 4+ months | Simple complement to existing allowlist; high demand, low implementation complexity |
| [#8299](https://github.com/openclaw/openclaw/issues/8299) | Config option to suppress sub-agent announce | 4+ months | Quality-of-life; currently requires `ANNOUNCE_SKIP` model cooperation which is unreliable |

---

*This digest was generated by OWL on 2026-06-12 based on GitHub data from [openclaw/openclaw](https://github.com/openclaw/openclaw). Activity volume metrics reflect the 2026-06-12 snapshot. All links reference the OpenClaw GitHub repository.*

---

## Cross-Ecosystem Comparison

# Cross-Project Ecosystem Report: Personal AI Agent & Assistant Open-Source Landscape

**Date:** 2026-06-12 | **Coverage:** 10 repositories | **Generated by:** OWL

---

## 1. Ecosystem Overview

The personal AI agent and assistant open-source ecosystem in mid-2026 is characterized by rapid convergence toward production-grade, multi-channel, multi-agent architectures. Ten tracked projects span a spectrum from heavyweight feature-rich platforms (OpenClaw, CoPaw) to focused single-purpose agents (PicoClaw, Moltis), with nearly all participants racing to address stability gaps introduced by recent architectural expansions—particularly multi-agent orchestration, cron scheduling, and native desktop/mobile clients. The dominant community demands center on three unmet expectations: platform parity across surfaces (CLI ↔ desktop ↔ mobile), defense-in-depth security (secret masking, sandboxing, execution gating), and delivery reliability (cron, webhook, channel outbound). Release cadence is intensifying, with several projects (CoPaw, ZeroClaw, PicoClaw) shipping patch releases within hours, reflecting both responsive maintainer cultures and insufficient pre-release validation coverage for the increasingly complex surfaces they support.

---

## 2. Activity Comparison

| Project | Open Issues (Δ/24h) | Open PRs (Δ/24h) | Releases (24h) | Activity Tier | Health Score* |
|---|---|---|---|---|---|
| **OpenClaw** | 478 / 500 total | 390 / 500 total | None | 🔴 Very High | 6/10 — Large backlog, slow review throughput |
| **Hermes Agent** | 42 / 50 total | 38 / 50 total | None | 🔴 Very High | 5/10 — Active but strained, many P2 bugs open |
| **CoPaw** | 19 / 31 total | 21 / 40 total | v1.1.11.post1, .post2 | 🔴 Very High | 5/10 — Firefighting regressions post-release |
| **IronClaw** | 18 / 31 total | 23 / 49 total | None (v0.8.0 pending) | 🔴 High | 7/10 — Stabilization sprint, healthy close rate |
| **ZeroClaw** | 50 / 50 total | 49 / 50 total | **v0.8.0** (landmark) | 🔴 High | 5/10 — Major release, significant regression surface |
| **NanoBot** | ~24 total | ~19 total | None | 🟢 High | 7/10 — Good response time, focused scope |
| **NanoClaw** | 3 / 3 total | 18 total (9 merged) | None | 🟡 Medium-High | 7/10 — Aggressive refactor phase |
| **PicoClaw** | 3 / 6 total | 32 total (19 merged) | v0.2.9-nightly | 🟢 Medium-High | 7/10 — Healthy merge cadence, nightly releases |
| **LobsterAI** | 2 active | 19 total (1 merged, 18 closed) | None | 🟡 Medium | 6/10 — Velocity on core, stale community PRs |
| **Moltis** | 1 new | 1 new | None | 🟢 Low | 7/10 — Stable, narrowly focused |
| **NullClaw** | 1 new | 0 | None | ⚪ Minimal | 5/10 — Maintenance-only signal |
| **TinyClaw** | 0 | 0 | None | ⚪ Dormant | — |
| **ZeptoClaw** | 0 | 0 | None | ⚪ Dormant | — |

*\*Health Score is a composite of: backlog severity, maintainer responsiveness (close/merge rate), release stability, and community sentiment signals from the digests. 10 = excellent, 1 = critical.*

---

## 3. OpenClaw's Position

### Advantages vs Peers

- **Dominant community scale.** With 500 concurrently tracked issues and PRs, OpenClaw's ecosystem is the largest by an order of magnitude. Issue #75 (Linux/Windows native apps) alone has 109 comments and 79 👍—more engagement than the entire active surface of several peer projects.
- **Maturity of core architecture.** The cron subsystem, multi-provider model routing, memory-core plugin system, and channel abstraction (Telegram, WhatsApp, Signal, Discord, Slack) are the most architecturally complete in the ecosystem. Projects like NanoBot and CoPaw are actively converging toward OpenClaw's design patterns.
- **Security-first community signal.** Users are proposing sophisticated defense-in-depth measures (masked secrets, denylist exec-approval, `web_fetch` network scoping) that reflect a user base operating in production environments with real threat models—a sign of advancing maturity.
- **Multi-surface deployment.** macOS, iOS, Android, and web clients provide the broadest surface coverage in the ecosystem. The gap (Linux/Windows desktop) is the top-demand item, not a missing foundation.

### Technical Approach Differences

| Dimension | OpenClaw | CoPaw | ZeroClaw | NanoBot | IronClaw |
|---|---|---|---|---|---|
| Runtime model | Plugin-based agent loop with clawsweeper triage system | AgentScope-based (→ v2.0 migration in progress) | Custom daemon, V3 config, single-process multi-agent | Async Python agent framework | Rust-based (Reborn surface), capability-runtime dispatch |
| Multi-agent model | Sub-agent spawn + orchestration DSL | Sub-agent + plugin architecture | **First-class named agents** (v0.8.0) | Single-agent, extensible via skills | Agent composition via capabilities |
| Extensibility | Skill plugins + MCP + custom providers | Plugin system (DataPaw, etc.) + MCP | MCP + WASM extensions | Skills + Python SDK | WASM extensions + custom tools |
| Desktop | macOS/iOS/Android (Linux/Win gap) | Tauri (Windows, regression-heavy) | Web dashboard + CLI | CLI only | CLI + WebUI v2 (Reborn) |

### Community Size Comparison

OpenClaw's 500-issue backlog is approximately **10× the activity** of the median tracked project. For reference:
- OpenClaw ≈ Hermes Agent ≫ CoPaw > IronClaw > ZeroClaw > NanoBot > NanoClaw ≈ PicoClaw > LobsterAI > Moltis >> NullClaw ≈ TinyClaw ≈ ZeptoClaw.

---

## 4. Shared Technical Focus Areas

The following requirements are emerging as **protable ecosystem priorities**, each cited across 3+ projects:

### 4.1 Multi-Agent Orchestration
- **Projects:** OpenClaw (#35203 RFC), ZeroClaw (v0.8.0 core feature), CoPaw (sub-agent scheduling failures #5064), NanoBot (cron + subagent lifecycle #4290), NanoClaw (multi-bot substrate #2733), PicoClaw (#2937 agent bus)
- **Specific need:** Unified session/event loop model where spawned tasks (sub-agents, cron jobs) are tracked and results injected asynchronously. Currently, 4+ projects have independent partial PRs for what is architecturally the same problem.

### 4.2 Cron / Scheduled Task Reliability
- **Projects:** OpenClaw (4+ issues: #85888, #91363, #40001), CoPaw (#5064 silent failures), ZeroClaw (#6037 duplicate execution, #6891 schema sync), NanoBot (#4290 early termination), Hermes Agent (#25997 test-run verification)
- **Specific need:** Durable session binding for cron jobs, execution locking to prevent duplicates, and graceful degradation on provider timeouts. cron is a headline feature across all major projects but is not yet reliably production-grade in any of them.

### 4.3 Desktop/CLI Parity
- **Projects:** OpenClaw (#75 Linux/Windows gap), Hermes Agent (#37812 approval prompts invisible, #38945 MCP tools missing), CoPaw (#5106 Tauri SSL crash, #4989 vLLM regressions), IronClaw (#4766 credential persistence, #4703 model picker bugs)
- **Specific need:** Feature-complete desktop clients that match CLI capabilities — particularly around tool availability (MCP), authentication state persistence, and approval/safety UX. Every project with a surface gap is under community pressure to close it.

### 4.4 Security: Secret Masking, Execution Gating, and Sandboxing
- **Projects:** OpenClaw (#10659 masked secrets, #6615 exec denylist, #6731 sandbox hardening), NanoClaw (#2731 egress lockdown, #2730 .env flag loading, #2732 health audit hardening), CoPaw (#5028 keychain isolation, #5095 Windows crash), Hermes Agent (#37812 approval prompt UX failure)
- **Specific need:** Architectural separation between secret use and secret visibility (agents can invoke APIs without seeing keys), fine-grained exec approval (allowlist + denylist + scoped network), and hardened sandbox/container boundaries. This is the single most strategically important cross-project theme.

### 4.5 Model Provider Abstraction & Local LLM Support
- **Projects:** OpenClaw (#38327 Provider-specific crashes, #3787 Gemini regression), CoPaw (#4989 vLLM hang, #5108 Ollama model selector), Hermes Agent (#43900 Ollama context cap), NanoBot (#4281 SiliconFlow transcription, #4295 configurable stream timeouts), IronClaw (#4783 WASM extension dispatch), NullClaw (#952 Ollama incomplete responses)
- **Specific need:** Stable multi-provider backends, configurability for local LLMs (context windows, timeouts, GPU memory), and defensively-written provider adapters that don't regress on new model additions.

---

## 5. Differentiation Analysis

### By Target User

| Segment | Primary Projects | Positioning |
|---|---|---|
| **Power user / tinkerer** | NanoBot, NanoClaw, OpenClaw | Flexible, hackable, plugin-rich. Largest community knowledge bases. |
| **Enterprise / team deployments** | LobsterAI, CoPaw, IronClaw | Multi-channel (DingTalk, Feishu, Slack), compliance, integrated model endpoints, managed deployment paths. |
| **Privacy-first / self-hosted** | NanoClaw, NullClaw, ZeroClaw | Local models, egress lockdown, secret masking, no cloud dependency by default. |
| **Developer SDK users** | NanoBot (Python SDK), PicoClaw | Clean library-first APIs, recipe/skill composition, headless deployment. |
| **Mobile-first** | OpenClaw (Android/iOS apps), CoPaw | Pre-built mobile clients, lightweight interaction models. |

### By Feature Focus

| Focus | Projects |
|---|---|
| **Channel breadth** (Telegram, WhatsApp, Signal, Slack, Discord, etc.) | OpenClaw (widest), CoPaw, NanoBot, PicoClaw |
| **Multi-agent / orchestration** | ZeroClaw (named agents, strongest model), OpenClaw (RFC), PicoClaw (agent bus) |
| **Desktop GUI** | CoPaw (Tauri), Hermes Agent (Electron), IronClaw (WebUI v2) |
| **Automation / cron** | OpenClaw (most mature but least reliable), ZeroClaw (v0.8.0 cron subsystem), CoPaw |
| **Extensibility / plugins** | OpenClaw (skills + MCP), nanoBot (Python skills), IronClaw (WASM), CoPaw (DataPaw plugin) |
| **Simplicity / single-agent** | NullClaw, Moltis, NanoBot |
| **Speech / voice** | LobsterAI (realtime ASR via #2148) |
| **Computer use / screen control** | LobsterAI (Computer Use MVP via #2143) |

### By Technical Architecture

| Architecture | Projects |
|---|---|
| **TypeScript/Node.js** | Hermes Agent (Electron + Node), CoPaw (Tauri + TS frontend) |
| **Python** | NanoBot, OpenClaw (Python-based runtime) |
| **Rust** | IronClaw, PicoClaw (Go-based firmware, Rust托管 runtime) |
| **Go** | PicoClaw (embedded/edge), NanoClaw (Go backend with systemd/launchd integration) |

---

## 6. Community Momentum & Maturity

### Momentum Tiers (based on 24h activity, close rates, release cadence, and backlog trends)

**🔥 Rapid iteration (high velocity, high closure)**
- **PicoClaw** — 19 PRs merged in 24h, nightly release cadence, healthy review throughput. The fastest-moving project in absolute merge volume.
- **NanoBot** — 6 PRs merged, issues closed same-day as filed, fix PRs open for both high-severity bugs observed today.
- **IronClaw** — 26 PRs closed in 24h (highest close volume in ecosystem), production pipeline milestones being hit, release PR (#3708) pending.

**🔄 High-activity stabilization (high velocity, accumulating backlog)**
- **OpenClaw** — Massive community (500 issues/PRs), but only 2 PRs merged today. Review backlog is the primary bottleneck. Issues accumulate faster than they close. Needs maintainer scaling.
- **CoPaw** — 2 post-release patches in 24h, rapid firefighting on regressions. Activity is high but reactive. AgentScope 2.0 migration (#5078) is a major architectural bet that will define the next 2–3 months.
- **Hermes Agent** — 12 PRs merged, 8 issues closed, but 0 fix PRS for any P2 bug. Active but under-delivering on the most impactful issues.

**⚙️ Architectural transition (major refactors in progress)**
- **ZeroClaw** — v0.8.0 shipped today with multi-agent architecture and V3 config schema. 50/50 issues still open, significant regression surface. This release will define whether ZeroClaw becomes a leader in multi-agent orchestration or accumulates crippling tech debt.
- **NanoClaw** — 9 PRs merged in a single prolific session, all infrastructure (multi-tenancy, approval callbacks, lifecycle). Aggressive refactor-and-stabilize cycle. Needs to ship a release candidate.

**🐢 Steady-state maintenance**
- **LobsterAI** — Core team shipping (Cowork UX, voice input, Computer Use), but 18 community PRs closed without merge. Pattern of losing external contribution momentum.
- **Moltis** — Low activity, narrowly focused, stable. WhatsApp delivery fix and Fastmail MCP auth are the only active items.

**⏸ Low-signal / dormant**
- **NullClaw** — 1 issue, 0 PRs, no maintainer response observed. Maintenance-only.
- **TinyClaw, ZeptoClaw** — No activity in 24h. Status unclear.

---

## 7. Trend Signals

The following industry-level signals are extractable from cross-project community feedback and are relevant for AI agent developers, platform builders, and infrastructure teams:

### 7.1 "Multi-agent is the new baseline—but no one has it right yet"

Every major project is either shipping (ZeroClaw), RFC-ing (OpenClaw #35203), or firefighting (CoPaw #5064, NanoBot #4290) multi-agent coordination. The immediate need is not more agent spawning—it's **durable session management, result routing, and execution locking** across asynchronous agent lifecycles. Projects that solve the cron+subagent coordination problem first will have a significant competitive moat. *(Evidence: independent PRs from 3 separate NanoBot contributors addressing the same gap from different angles.)*

### 7.2 Security expectations are outpacing implementations

Users across OpenClaw, NanoClaw, CoPaw, and Hermes Agent are independently converging on the same requirements: secret masking (agents can use but not see credentials), network-scoped tool execution, fine-grained exec approval (allowlist + denylist), and sandbox hardening. This is not a niche request—it's a **baseline expectation for production deployment**. Projects that leave security as an afterthought will lose enterprise and privacy-conscious users. *(Evidence: OpenClaw's #10659, #6615, #39604; NanoClaw's #2731, #2730, #2732; CoPaw's #5028—all opened within weeks of each other with strong 👍 counts.)*

### 7.3 Desktop parity is becoming a table-stakes expectation, not a nice-to-have

The community is explicitly blocking on desktop gaps: OpenClaw's #75 (Linux/Windows apps, 6+ months, 79 👍), Hermes Agent's #37812 (approval prompts invisible in GUI), CoPaw's #5106 (Tauri SSL crash = complete desktop unusability). Users expect CLI and desktop to be **functionally identical**; anything less is treated as a bug, not a limitation. *(Evidence: Hermes Agent's #38945, #44456, #44515 all describe CLI-working/Desktop-broken tool categories.)*

### 7.4 Cron/scheduled tasks are the most reliability-critical feature—and the weakest link

Every project with cron has reliability issues (OpenClaw: 4+ issues, ZeroClaw: duplicate execution, CoPaw: silent failures, NanoBot: early termination). For users building on agent-driven automation, **cron is make-or-break**. Projects that achieve reliable, auditable, recoverable cron execution will capture the automation use case. *(Evidence: OpenClaw's cron issues span replay, race conditions, and data-loss scenarios; ZeroClaw had no execution lock until PR #6038.)*

### 7.5 Provider abstraction layers are the highest regression surface

Multi-provider model backends (OpenAI-compatible, Anthropic, Gemini, Ollama, local) introduce regressions with every new provider added or updated. Issues across projects consistently involve session-state corruption, tool unavailability, and message routing breakage on specific provider combinations. Opportunity exists for a **shared, well-tested provider adapter library** across the ecosystem—or for projects to default to provider-specific code paths rather than abstract everything through a uniform interface. *(Evidence: OpenClaw #38327, Hermes Agent #43900, CoPaw #4989, IronClaw #4783—all provider-specific regressions.)*

### 7.6 Developer-side extensibility (SDKs, recipes, skill composition) is a differentiator

NanoBot's Python SDK expansion (#4296) and NanoClaw's PR Factory recipe (#2742) signal a trend of **users building on top of agent platforms as libraries, not just deploying them**. Projects that provide clean SDKs, recipe/skill authoring tools, and meta-workflows (agents reviewing agents' PRs) will attract the developer toolchain ecosystem. *(Evidence: NanoBot SDK expanding from `bot.run()` to full session/memory/control API; NanoClaw's "PR Factory" recipe; CoPaw's DataPaw plugin with 12 BI skills.)*

### 7.7 Silent failures are the #1 trust killer

Across OpenClaw (#32296, #91944), CoPaw (#5064), NanoBot (#4290), Hermes Agent (#37812), Moltis (WhatsApp delivery), and NanoClaw (#2743, #2728), the most damaging failures are those that produce **no error, no feedback, no receipt**—the agent appears to succeed but the message is dropped, the cron job silently fails, or the desktop GUI shows a prompt that was never delivered. Ecosystem-wide, **observability and failure surfacing** are higher-priority than feature velocity.

---

*Report generated by OWL on 2026-06-12. Data sourced from GitHub repositories of all listed projects. Activity metrics reflect the 2026-06-12 snapshot window. Health scores are composite assessments based on quantitative backlog metrics and qualitative community signals from the digest summaries.*

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-06-12

---

## 1. Today's Overview

NanoBot remains in a high-activity development phase with **24 total updates** across issues and PRs in the last 24 hours (5 issues, 19 PRs). No new releases were published. The codebase is seeing concentrated effort around **cron jobs**, **subagent lifecycle management**, **MCP reconnection stability**, and the **Python SDK** — all areas reflecting maturation toward production robustness. Multiple contributors are converging on overlapping problems (cron + subagents spawned via `spawn` tool), suggesting the project has reached a complexity ceiling where async task coordination and session binding need architectural fixes.

---

## 2. Releases

**No new releases today.** The project continues to iterate on the main branch with no tagged version cut in this window.

---

## 3. Project Progress

### Merged / Closed PRs (6 total)

| # | PR | Summary |
|---|-----|---------|
| 4257 | `fix(utils): make split_message fenced-code-block-aware` | Prevents broken HTML rendering when long messages are split mid-code-block. Fixes silent message corruption on channels with length limits. |
| 4281 | `feat(transcription): add SiliconFlow as transcription provider` | Adds SiliconFlow (`silicon` alias) as a new transcription provider, reusing the OpenAI-compatible adapter. |
| 4289 | `feat(slack): add groupRequireMention to scope allowlist channels` | Enables mention-gated responding in allowlisted Slack channels — a middle ground between "all channels" and "mention-only everywhere." |
| 4297 | Worktree feature+hermes research doc | Research/documentation PR merged. |
| 4298 | Worktree feature+hermes research doc | Research/documentation PR merged. |
| 4020 | `feat(providers): make stream-idle timeout configurable per-provider` | Closes #4013. Lets users configure per-provider stream idle timeouts instead of relying on the global 90s default, critical for local LLMs (Ollama, LM Studio). |

**Closed Issues (2)**

| # | Issue | Summary |
|---|-------|---------|
| 4233 | Show nanobot version in WebUI | Resolved — version display feature merged. |
| 4236 | bwrap sandbox fails on Ubuntu 24.04 | Closed, likely resolved or addressed by documentation/configuration guidance. |

---

## 4. Community Hot Topics

### Most Active / Discussed

**Subagent + Cron Job Lifecycle Coordination** (3 intersecting PRs, 2 issues)

This is the dominant theme of the day. The core problem: when cron jobs or direct agent turns spawn subagents asynchronously, the parent turn completes and exits before subagent results arrive, causing dropped replies and failed workflows.

- **[Issue #4290](https://github.com/HKUDS/nanobot/issues/4290)** — Cron job ends early when subagent spawned (bug, OPEN)
- **[PR #4304](https://github.com/HKUDS/nanobot/pull/4304)** — `fix(cron): wait for spawned subagents before marking cron job complete` (OPEN, by michaelxer)
- **[PR #4293](https://github.com/HKUDS/nanobot/pull/4293)** — `fix(agent): add pending_queue to process_direct for subagent result injection` (OPEN, by yorkhellen)
- **[PR #4299](https://github.com/HKUDS/nanobot/pull/4299)** — `feat(cron): bind scheduled automations to sessions` (OPEN, by chengyongru)

**Underlying need:** The project needs a unified session/event loop model where spawned tasks are tracked and results are injected asynchronously regardless of how the agent turn was triggered (cron, webhook, direct API call). Three contributors are independently addressing this from different angles — a sign that the current architecture has a gap.

**Python SDK Expansion**

- **[PR #4296](https://github.com/HKUDS/nanobot/pull/4296)** — Expands the Python SDK from a minimal `bot.run()` facade into a full developer-facing API (session control, memory access, runtime controls) while remaining backward compatible. Signals growing SDK-first adoption patterns.

**Multiple Custom Providers**

- **[Issue #4305](https://github.com/HKUDS/nanobot/issues/4305)** and **[PR #3239](https://github.com/HKUDS/nanobot/pull/3239)** — Users need multiple custom/OpenAI-compatible endpoints. PR #3239 has been open since April 17 without resolution — this is a significant backlog item (see §8).

---

## 5. Bugs & Stability

### Reported Today (Ranked by Severity)

| Severity | # | Issue | Fix Status |
|----------|---|-------|------------|
| 🔴 High | [#4302](https://github.com/HKUDS/nanobot/issues/4302) | nanobot gateway crashes after MCP reconnect (`RuntimeError: Attempted to exit cancel scope in a different task`) | **Fix PR open**: [#4303](https://github.com/HKUDS/nanobot/pull/4303) by michaelxer — closes tracked generators in `_close_server` to prevent GC crash. Root cause is asyncio task boundary violation during reconnect cleanup. |
| 🔴 High | [#4290](https://github.com/HKUDS/nanobot/issues/4290) | Cron job ends early when subagent spawns — subsequent workflow fails | **Fix PRs open**: [#4304](https://github.com/HKUDS/nanobot/pull/4304), [#4293](https://github.com/HKUDS/nanobot/pull/4293) |
| 🟡 Medium | [#4236](https://github.com/HKUDS/nanobot/issues/4236) | bwrap sandbox fails on Ubuntu 24.04 (restricted user namespaces) | **Closed** — likely resolved or documented. |
| 🟢 Low | [#4233](https://github.com/HKUDS/nanobot/issues/4233) | Version not visible in WebUI (usability) | **Closed** — feature merged. |

**Assessment:** Both high-severity bugs are actively being fixed with PRs already open, which is a healthy response time. The MCP crash (#4302) is the more urgent of the two as it causes **process termination** (gateway-level), while #4290 causes **silent workflow failure**.

---

## 6. Feature Requests & Roadmap Signals

| Feature | Source | Likelihood |
|---------|--------|------------|
| **Subagent model presets** — allow spawn to specify a different model/temp/tokens | [PR #4291](https://github.com/HKUDS/nanobot/pull/4291) | High — PR already in progress, addresses a clear multi-model orchestration need |
| **Cron → session binding** — cron jobs execute as session turns with idle deferral | [PR #4299](https://github.com/HKUDS/nanobot/pull/4299) | High — directly related to active bug, architectural improvement |
| **Multiple custom OpenAI-compatible providers** | [Issue #4305](https://github.com/HKUDS/nanobot/issues/4305), [PR #3239](https://github.com/HKUDS/nanobot/pull/3239) | Medium — PR has been open 2 months; issue suggests renewed demand |
| **Skills loader caching** — avoid repeated directory scans and YAML parsing | [PR #4301](https://github.com/HKUDS/nanobot/pull/4301) | Medium-high — performance optimization, straightforward to merge |
| **Skill type availability checking** — validate skill dependencies before use | [PR #4300](https://github.com/HKUDS/nanobot/pull/4300) | Medium — improves skill composition UX |
| **Gateway start/stop/restart CLI commands** | [PR #3538](https://github.com/HKUDS/nanobot/pull/3538) | Medium — long-open PR, operational convenience |
| **Desktop app separation** — remove Electron desktop app from core repo | [PR #4294](https://github.com/HKUDS/nanobot/pull/4294) | Low priority for end users, but high for repo maintainability |

**Prediction:** The next version will likely focus on **cron/subagent lifecycle fixes** and the **SDK expansion** — both are being actively worked on with multiple converging PRs. Multiple custom providers may slip to a later release due to the long-dormant PR.

---

## 7. User Feedback Summary

### Pain Points

1. **Cron + subagent coordination is broken in production workloads.** Users running scheduled automation with subagent orchestration are experiencing silent failures. This is the most critical user-facing stability gap.
2. **MCP reconnection causes gateway crashes.** Users relying on streamable HTTP MCP servers face hard restarts if the MCP session drops and reconnects. This is a severity-ux issue for MCP-heavy workflows.
3. **Limited provider flexibility.** Users managing multiple LLM endpoints (e.g., multiple internal APIs or cloud providers) hit the single-custom-provider ceiling.
4. **Slack channel control is too binary.** The new `groupRequireMention` feature directly addresses user frustration with the all-or-nothing Slack allowlist policy.
5. **Local LLMs timeout too aggressively.** The stream-idle fix (merged today) directly addressed the pain of local LLMs like Ollama/LM Studio on heavier prompts.

### Use Cases Emerging
- **Developer-centric SDK usage** — SDK expansion PR shows users building on top of nanobot as a library, not just a chat bot.
- **Compound skill composition** — PR #4300 (skill type checking) reveals users building complex skills that depend on other skills (e.g., fund analysis using stock data + news skills).

### Satisfaction Indicators
- Close rate is healthy: 2 issues closed, 6 PRs closed today.
- Response time on critical bugs is good — fix PRs opened on the same day as bug reports.
- Backlog of stale PRs and unanswered issues (#3239, #3538) may indicate maintainer bandwidth strain.

---

## 8. Backlog Watch

These items need maintainer attention:

| # | Item | Age | Notes |
|---|------|-----|-------|
| **[#3239](https://github.com/HKUDS/nanobot/pull/3239)** | feat: support multiple custom OpenAI-compatible providers | **56 days** (opened 2026-04-17) | Opened 2 months ago with a valid user-facing issue (#4305) filed just today. This should be prioritized or an alternative approach committed to. |
| **[#3538](https://github.com/HKUDS/nanobot/pull/3538)** | feat: add gateway start/stop/restart commands | **44 days** (opened 2026-04-29) | Simple operational improvement, no review activity visible. Low risk, quick to merge. |
| **[#4021](https://github.com/HKUDS/nanobot/pull/4021)** | fix(codex): dedup reasoning items before send, retry on duplicate-item 400 | **16 days** (opened 2026-05-27) | AI-assisted PR, fixes #3633. Breaks multi-turn conversations with Codex. Needs review. |
| **Cron architectural convergence** — PRs #4304, #4293, #4299 | 1 day | Three PRs solving overlapping problems. Maintainers should coordinate to avoid merge conflicts and ensure a unified approach rather than three partial fixes. |

---

*Source: GitHub repository [HKUDS/nanobot](https://github.com/HKUDS/nanobot) | Digest generated 2026-06-12*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-06-12

---

## 1. Today's Overview

Hermes Agent is experiencing very high activity with **50 issues and 50 PRs updated in the last 24 hours**, signaling a large and highly engaged contributor base. The project is in a heavy bug-fixing and stabilization phase: 42 issues remain open with 8 closed, and 38 PRs are still open with 12 merged/closed. No new releases have dropped today, suggesting the team is accumulating fixes toward a future release candidate. The volume of Desktop/TUI-specific bugs hints at recent UI-facing changes (likely around v0.15.x–v0.16.0) that introduced regressions. Overall project health is active but under pressure — the signal-to-noise ratio is strained by the sheer volume, but the close rate (~20–24%) shows maintainers are keeping pace.

---

## 2. Releases

**None today.** No new tagged versions published on 2026-06-12. The accumulation of closed PRs and fixed issues suggests work is building toward an imminent release (likely v0.16.1 or v0.17.0).

---

## 3. Project Progress

The following PRs were **merged or closed** today, representing concrete forward movement:

| PR | Summary | Area |
|---|---|---|
| [#44550](https://github.com/NousResearch/hermes-agent/pull/44550) | **fix(mcp):** Capability-gate `tools/list` so prompt-only and resource-only MCP servers can connect without crashing | MCP/connectivity |
| [#44545](https://github.com/NousResearch/hermes-agent/pull/44545) | **fix(coding):** Stop exposing primary worktree absolute path in system prompt to prevent agent confusion | Agent/coding |
| [#43720](https://github.com/NousResearch/hermes-agent/pull/43720) | **fix(desktop):** Repair WebSocket auth token mismatch between Electron renderer and spawned backend | Desktop/auth |
| [#23594](https://github.com/NousResearch/hermes-agent/pull/23594) | **feat:** Profile MCP sync and session sidecars (shared server definitions, cmux surface keyed sidecars) | MCP/profiles |
| [#25997](https://github.com/NousResearch/hermes-agent/pull/25997) | **feat:** Cron `test-run` safe verification flow + profile sidecars + refuse implicit branch switches on `hermes update` | Cron/CLI |

**Key themes:** MCP ecosystem hardening (two fixes + one feature), Desktop auth stability, and cron reliability. Notably, the multi-PR contribution from `benegessarit` landed two significant MCP/profile features that have been in progress for ~1 month each.

---

## 4. Community Hot Topics

Ranked by community engagement (comments + 👍 reactions):

| # | Issue | Comments | 👍 | Signal |
|---|---|---|---|---|
| 🥇 | [#38240](https://github.com/NousResearch/hermes-agent/issues/38240) Skills index stale/degraded (automated watchdog) | 9 | 0 | The skills-index GitHub Action cron is failing — the index has 0 skills when it should have ≥30. This is a docs-site reliability issue affecting user-facing skill discovery. Low 👍 but high automated priority. |
| 🥈 | [#16525](https://github.com/NousResearch/hermes-agent/issues/16525) Expose `model_switch` as agent-callable tool | 7 | 3 | Strong user desire for **autonomous model routing** — the agent should self-select models based on task complexity. This has been open since April; the 👍 count and continued activity suggest it's a gap vs. competitors (Claude Code, Codex). |
| 🥉 | [#37812](https://github.com/NousResearch/hermes-agent/issues/37812) Approval prompts don't render in Desktop GUI | 7 | 4 | Highest community reaction (👍: 4). **Safety-critical UX failure** — when `approvals.mode = manual`, the user never sees the allow/deny prompt in the Electron app. This is a regression from terminal behavior and blocks safe deployment of approval workflows. |
| 4 | [#38945](https://github.com/NousResearch/hermes-agent/issues/38945) Desktop/TUI sessions don't expose MCP tools (Todoist) | 6 | 0 | Tools configured and reachable via CLI are silently absent from the Desktop agent tool schema. This is a parity gap that materially degrades the Desktop experience. |
| 5 | [#44121](https://github.com/NousResearch/hermes-agent/issues/44121) `npm ci` fails on clean checkout | 6 | 0 | Lock file/package.json drift with `@types/node` version mismatch under npm 11. Docker/packaging users are directly blocked on fresh installs. |

**Underlying needs analysis:** The community cares most about (1) **Desktop parity with CLI** (MCP tools, approval prompts), (2) **autonomous agent intelligence** (model routing), and (3) **installation/build reliability**. The model-switching feature request [#16525] in particular signals competitive pressure from Claude Code and Codex ecosystems.

---

## 5. Bugs & Stability

Ranked by severity (P1 > P2 > P3, with community signal as tiebreaker):

### P2 — High Priority

| Issue | Description | Fix PR? |
|---|---|---|
| [#38945](https://github.com/NousResearch/hermes-agent/issues/38945) MCP tools invisible in Desktop/TUI | Configured MCP servers (e.g., Todoist) work in CLI but not Desktop. | ❌ None |
| [#37812](https://github.com/NousResearch/hermes-agent/issues/37812) Approval prompts don't render in GUI | Safety-critical: `approvals.mode = manual` silently fails in Electron. | ❌ None |
| [#44242](https://github.com/NousResearch/hermes-agent/issues/44242) ACP image content blocks dropped | Multimodal images never reach the model via ACP adapter — `persist_user_message` override clobbers image blocks. Affects **all providers**. | ❌ None |
| [#43657](https://github.com/NousResearch/hermes-agent/issues/43657) aiohttp ClientSession leak | Memory leak in auxiliary tasks (title_generation, etc.) — unclosed sessions warn in every turn. | ❌ None |
| [#44530](https://github.com/NousResearch/hermes-agent/issues/44530) Windows: non-default profiles crash after EXE reinstall | Desktop GUI hangs with exit code `0xC0000005`; CLI works fine. Windows-exclusive regression. | ❌ None |
| [#44497](https://github.com/NousResearch/hermes-agent/issues/44497) Duplicate agent responses on WeChat | Two independently generated responses delivered to the same message — context/thread cross-fire. | ❌ None |

### P3 — Medium Priority

| Issue | Description | Fix PR? |
|---|---|---|
| [#38240](https://github.com/NousResearch/hermes-agent/issues/38240) Skills index watchdog failing | Docs-site automation broken; skills discovery degraded. | ❌ None |
| [#44121](https://github.com/NousResearch/hermes-agent/issues/44121) `npm ci` lock file desync | Fresh installs blocked under npm 11. | ❌ None |
| [#44456](https://github.com/NousResearch/hermes-agent/issues/44456) `/compress` broken in Desktop TUI | Built-in slash command fails with "not a quick/plugin/skill command." | ❌ None |
| [#43900](https://github.com/NousResearch/hermes-agent/issues/43900) Ollama context silently capped at 4096 | GGUF metadata reports 131K but Ollama defaults to 4096; Hermes doesn't pass `num_ctx`. | ❌ None |
| [#44032](https://github.com/NousResearch/hermes-agent/issues/44032) Profile alias scans large binaries | `~/.local/bin` scan on every `profile list` causes slowdowns on agent-heavy workstations. | ❌ None |
| [#44499](https://github.com/NousResearch/hermes-agent/issues/44499) Desktop ignores BrowserOS MCP, uses built-in tools | Agent preference for built-in `browser_*` over user-configured MCP server. | ❌ None |
| [#44515](https://github.com/NousResearch/hermes-agent/issues/44515) Desktop update stuck until background processes killed | Update UX blocks at step 1/3. | ❌ None |

**Notable:** Among P2 bugs, **none have open fix PRs** — the team merged MCP capability-gating and WebSocket auth fixes today, but the most user-impactful Desktop issues remain unaddressed. The aiohttp leak [#43657] and ACP image dropping [#44242] are regressions in core agent loop paths that deserve urgent attention given their universal impact.

---

## 6. Feature Requests & Roadmap Signals

| Request | Issue | Likelihood of next release | Rationale |
|---|---|---|---|
| Model-switch agent tool | [#16525](https://github.com/NousResearch/hermes-agent/issues/16525) | **Medium-High** | Open since April with 7 comments and 3 👍; competitive pressure is clear. However, no assignee or PR yet. |
| Cron standalone daemon mode | [#43864](https://github.com/NousResearch/hermes-agent/pull/43864) | **High** | PR already open; addresses Windows/headless server gap. Likely to merge soon. |
| Rust-backed install manager | [#44067](https://github.com/NousResearch/hermes-agent/pull/44067) | **Low** (v0.17+) | Large new component (`apps/hermes-manager`); will need extensive review. |
| Kanban `--skill` validation | [#44072](https://github.com/NousResearch/hermes-agent/issues/44072) / [#44101](https://github.com/NousResearch/hermes-agent/pull/44101) | **High** | Fix PR already open; trivial validation logic. |
| Multilingual i18n (15 languages) | [#38846](https://github.com/NousResearch/hermes-agent/pull/38846) | **Medium** | Large PR with 861 keys across 15 languages; colliding with upstream's new native i18n skeleton. Architecture decision needed. |
| OIDC/Passkey login support | [#42448](https://github.com/NousResearch/hermes-agent/issues/42448) | **Low** | Feature request only; Desktop WebAuthn integration is non-trivial. |
| GPU monitoring in status bar | [#11757](https://github.com/NousResearch/hermes-agent/pull/11757) | **Medium** | PR open since April; useful for local LLM users. |

**Prediction:** The next minor release will likely focus on **cron daemon mode**, **kanban skill validation**, **MCP reliability** (capability gating already merged), and possibly **base_url config fix** [#43863]. The Rust manager and i18n PRs may ship in a subsequent v0.17 after architectural alignment.

---

## 7. User Feedback Summary

**Pain points by frequency:**

1. **Desktop is a second-class citizen to CLI** — MCP tools missing [#38945], approval prompts not rendering [#37812], `/compress` broken [#44456], profile creation fails [#43240], remote file paths dead [#44523]. This is the dominant theme. Users expect functional parity and don't have it.

2. **Windows is a first-class source of bugs** — EXE reinstall breaks profiles [#44530], `hermes update` fails on locked exe [#26670], setup incomplete on WSL [#44532]. Cross-platform testing coverage appears insufficient.

3. **Ollama/local model experience is rough** — Context silently capped at 4096 [#43900], GPU monitoring needed [#11757]. Local LLM users are a significant and growing segment.

4. **Instructions are unclear or missing** — Users don't know how to make local OpenAI-compatible endpoints appear in the Desktop model picker [#44513]; docs exist but don't cover the `providers.<slug>` pattern.

**User satisfaction signals:**
- Positive: Active maintainer response on PRs (12 merged today), rapid MCP fix turnaround.
- Negative: Several P2 bugs with 0 comments from maintainers, no assignment, no triage labels. The gap between issue volume and maintainer bandwidth is visible.

**Key use cases emerging:** Production deployment with approval gates (requiring working Desktop GUI), local model hosting with Ollama (needing context window and GPU management), autonomous agent self-routing (model switching), and cron/agent orchestration for background tasks.

---

## 8. Backlog Watch

These important issues have been open for extended periods without resolution or meaningful maintainer engagement:

| Issue | Age | Why it matters |
|---|---|---|
| [#16525](https://github.com/NousResearch/hermes-agent/issues/16525) — Model-switch tool | **46 days** (Apr 27) | Strategic feature; competitive gap. 3 👍 and sustained discussion. No owner. |
| [#26670](https://github.com/NousResearch/hermes-agent/issues/26670) — Windows update fails on locked EXE | **27 days** (May 16), just closed | Was open for weeks; just closed today. Illustrates slow Windows fix turnaround. |
| [#20476](https://github.com/NousResearch/hermes-agent/issues/20476) — Camofox browser 403 auth | **37 days** (May 6) | Browser auth completely broken for Camofox. Niche but blocks users entirely. |
| [#42448](https://github.com/NousResearch/hermes-agent/issues/42448) — OIDC/Passkey login | **4 days** (Jun 8) | Early but growing; Desktop auth modernization. |

**PRs needing attention:**
- [#44067](https://github.com/NousResearch/hermes-agent/pull/44067) — Rust install manager: Large PR, freshly opened, needs architecture review.
- [#11757](https://github.com/NousResearch/hermes-agent/pull/11757) — GPU monitor: Open since **April 17** (56 days). Useful for local LLM users but languishing.
- [#36286](https://github.com/NousResearch/hermes-agent/pull/36286) — MiniMax China OAuth: Fixes a documented issue [#25542] but stale for 11 days.

---

**Overall assessment:** Hermes Agent is in a high-velocity, high-volume phase with strong community contribution but visible strain on maintainer bandwidth. Desktop experience quality is the most urgent theme — it affects the broadest user base and has the most unresolved P2 bugs. The project's competitive positioning depends on closing the Desktop-vs-CLI parity gap and shipping autonomous agent intelligence features (model switching) before competitors consolidate their advantage.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

**PicoClaw Project Digest – 2026-06-12**

---

### 1. **Today's Overview**

PicoClaw remains highly active with developer momentum and strong community engagement. In the last 24 hours, the project saw **19 PRs merged**, **32 total PR updates**, **6 issues updated** (3 open, 3 closed), and **1 new nightly release**. Core infrastructure continues to mature rapidly, with notable progress on inter-agent collaboration, security hardening, and cross-platform compatibility. The volume of recent merges indicates a healthy maintainership response cycle, though several critical bugs remain unresolved.

---

### 2. **Releases**

**Nightly Build: `v0.2.9-nightly.20260611.d955d5bb`**  
This automated nightly build includes all changes merged into `main` since `v0.2.9`. Given the high merge volume today—particularly around error handling, session persistence, and dependency updates—this build likely contains stability improvements but may introduce regressions.  
**Full Changelog**: [v0.2.9 → main](https://github.com/sipeed/picoclaw/compare/v0.2.9...main)

---

### 3. **Project Progress**

Key merged/closed PRs from the last 24 hours:

- **#3060**: Fixed improper error wrapping (`%v` → `%w`) in skills helper and added proper error handling for `json.MarshalIndent` in web tool integration. Improves debuggability and error chain integrity.
- **#3067**: Resolved a UI/backend config desync by adding `DmScope` to `SessionConfig`, ensuring the "Session Scope" setting persists after save.
- **#2957**: Fixed dropped `tool_calls` messages during streaming by excluding them from auxiliary message filtering in `preSend()`. Addresses a critical channel delivery bug.
- **2934**: Enabled WhatsApp native mode (`use_native: true`) by correcting channel configuration detection logic.
- **#2696**: Added per-request dynamic HTTP headers for MCP servers via `mcp:`-prefixed keys in `InboundContext.Raw`, enabling secure, context-aware MCP tool invocation.

These fixes significantly improve reliability across channels and configuration management.

---

### 4. **Community Hot Topics**

- **#2472 (👍1, 5 comments)**: Windows users report `list_dir` fails with "invalid argument" due to backslash paths violating Go’s `os.Root` requirements. This is a **cross-platform compatibility gap** affecting file system tools on Windows. No fix PR yet—high visibility due to OS diversity in user base.  
  → *Link*: [sipeed/picoclaw#2472](https://github.com/sipeed/picoclaw/issues/2472)

- **#2937 (Agent Collaboration)**: PR introduces a durable **inter-agent communication bus** with mailboxes, threads, and permission-aware messaging. Though stale, it signals demand for multi-agent workflows—a strategic direction for future versions.  
  → *Link*: [sipeed/picoclaw#2937](https://github.com/sipeed/picoclaw/pull/2937)

- **#3108**: Reports hallucinated image descriptions when using text-only models (e.g., `deepseek-v4-flash`). Highlights need for **vision capability detection** before image processing. Fresh issue; likely to gain traction fast.

---

### 5. **Bugs & Stability**

**Active Issues by Severity**:

| Severity | Issue | Summary | Fix PR? |
|--------|------|--------|--------|
| 🔴 High | [#2472](https://github.com/sipeed/picoclaw/issues/2472) | `list_dir` fails on Windows due to path separator mismatch | None yet |
| 🔴 High | [#3108](https://github.com/sipeed/picoclaw/issues/3108) | Image description hallucinates on non-vision models | Open (no PR) |
| 🟡 Medium | [#3094](https://github.com/sipeed/picoclaw/issues/3094) | Duplicate messages from async sub-agents | Investigating |

**Resolved Today**:
- [#2958](https://github.com/sipeed/picoclaw/issues/2958): Fixed via PR #2957 (tool_calls dropped during streaming)
- [#3080](https://github.com/sipeed/picoclaw/issues/3080): Security advisory on `allowed_cidrs` bypass closed (assessed or patched off-thread)

---

### 6. **Feature Requests & Roadmap Signals**

- **Multi-agent orchestration** (PR #2937): Despite being stale, this reflects growing user interest in agent collaboration—likely to be revisited as sub-agent usage increases.
- **Vision-aware tool routing** (Issue #3108): Users expect automatic model capability checks. Future versions may add model metadata validation before invoking `load_image`.
- **Enhanced sub-agent UX** (Issue #3094): Duplicate messaging suggests a need for centralized response routing and deduplication in async workflows.

Prediction: Next minor release (`v0.2.10`) will likely include fixes for #2472 (Windows paths) and #3108 (vision model check), plus stability improvements from today’s merged error-handling PRs.

---

### 7. **User Feedback Summary**

- **Pain Points**:
  - **Platform fragmentation**: Windows users face first-class-citizen issues (#2472), indicating testing gaps on non-Linux systems.
  - **Channel reliability**: Tool_calls and tool results intermittently drop in streaming modes, degrading UX on real-time channels (Telegram, Feishu).
  - **Model compatibility**: Image tools fail silently when models lack vision support—users need clear error messages or automatic fallbacks.

- **Use Cases Emerging**:
  - Async sub-agent task delegation (evidenced by #3094)
  - Headless deployment with WhatsApp native mode (#2934)
  - Secure configuration via `.security.yml` (#2956)

Overall satisfaction is high, but **operational robustness** and **cross-platform parity** are key gaps.

---

### 8. **Backlog Watch**

- **[#2472](https://github.com/sipeed/picoclaw/issues/2472)**: Open since April 10 (63 days), affects Windows users. Critical for platform inclusivity. Needs immediate attention despite low 👍 count.
- **[#2937](https://github.com/sipeed/picoclaw/pull/2937)**: PR for agent collaboration bus has been open >37 days. Stale but architecturally significant—future-proofing for multi-agent use cases.
- **[#3094](https://github.com/sipeed/picoclaw/issues/3094)**: Duplicate sub-agent messages—new but impacts core UX. Likely to be fast-tracked given recent focus on sub-agent stability.

Recommend maintainers triage #2472 and assign ownership for a Windows-specific fix.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-06-12

**Repository:** [nanocoai/nanoclaw](https://github.com/nanocoai/nanoclaw) | **Date:** 2026-06-12

---

## 1. Today's Overview

NanoClaw is experiencing a high-intensity development cycle. In the last 24 hours, **18 PRs** were touched (9 closed/merged, 9 remain open) alongside **3 issues** (2 open, 1 closed), all from a single author's prolific session on 2026-06-11. The closed/merged PRs show a clear pattern of hardening core infrastructure: wiring lifecycle, delivery pipelines, approval callbacks, multi-tenancy, and setup handoffs. Several open PRs target critical user-facing bugs around egress lockdown, `.env` loading, Telegram wire-to pairing, and startup context loss. No new release has been tagged, suggesting the team is accumulating changes for a larger ship. Overall, the project is in an aggressive refactor-and-stabilize phase with multiple parallel fix tracks converging.

---

## 2. Releases

**None.** No new versions have been cut in this window. The volume of merged infrastructure PRs suggests a significant release is being prepared but has not yet been grounded.

---

## 3. Project Progress (Merged / Closed PRs)

The following PRs were merged or closed on 2026-06-11, reflecting the most impactful advances in this cycle:

### Core Infrastructure & Multi-Tenancy
- **[#2733](https://github.com/nanocoai/nanoclaw/pull/2733)** — *Native channel-instance dimension — multi-bot substrate.* Adds first-class support for multiple concurrent channel instances under a single NanoClaw process. This is a architectural-level change that enables multi-bot deployments.
- **[#2737](https://github.com/nanocoai/nanoclaw/pull/2737)** — *Approval-resolved callback registry.* Modules can now additively observe approval resolutions, decoupling the approval system from individual handlers.
- **[#2739](https://github.com/nanocoai/nanoclaw/pull/2739)** — *Raw-route registry for webhook-server.* Non-Chat-SDK webhooks are now registered as an appendable list, simplifying custom webhook integrations.

### Delivery & Lifecycle Fixes
- **[#2734](https://github.com/nanocoai/nanoclaw/pull/2734)** — *getDeliveryAction read side for the action registry.* Adds queryability to the delivery pipeline, enabling modules to inspect what delivery action is registered for a given envelope.
- **[#2735](https://github.com/nanocoai/nanoclaw/pull/2735)** — *Fix: record the acting user on resolved approval cards.* Corrects attribution in approval resolution — previously the acting user was not being stamped.
- **[[#2738](https://github.com/nanocoai/nanoclaw/pull/2738)]**  *Fix: writeOutboundDirect opens outbound.db read-only.* Fixes the silent drop of command-gate denial responses (see Bugs section below — this directly closes [#2495](https://github.com/nanocoai/nanoclaw/issues/2495)).
- **[#2741](https://github.com/nanocoai/nanoclaw/pull/2741)** — *Fix: auto-submit handoff context as Claude's first prompt.* The interactive setup flow now correctly hands off context via a user message instead of `--append-system-prompt` alone, which previously caused Claude to stall.
- **[[#2740](https://github.com/nanocoai/nanoclaw/pull/2740)]** — *Per-group idle timeout — clean exit for ephemeral sessions.* Adds configurable idle timeouts per messaging group, enabling ephemeral container cleanup.

### Stability & Robustness
- **[#2736](https://github.com/nanocoai/nanoclaw/pull/2736)** — *Fix: grace period for freshly-woken containers with stale processing claims.* Prevents false-positive container sweep when containers restart with leftover claims from a previous lifecycle.

### Key Open PRs Under Active Review
| PR | Title | Author |
|---|---|---|
| [WormyOne](https://nanocoai/nanoclaw/pull/2744) | fix(signal): deliver agent reactions and forward inbound reactions | WormyOne |
| **[#2742](https://github.com/nanocoai/nanoclaw/pull/2742)** | feat(recipes): "The PR Factory" — recipe for PR review, triage & testing | gavrielc |
| [caburi00](https://nanocoai/nanoclaw/pull/2732) | Harden host + agent-runner from health audit findings | caburi00 |
| **[#2611](https://github.com/nanocoai/nanoclaw/pull/2611)** | Fix(cli): preserve caller context after approval | Hinotoi-agent |

---

## 4. Community Hot Topics

### 🔴 Agent Memory System Redesign — [[#1356](https://github.com/nanocoai/nanoclaw/issues/1356)]
- **Engagement:** 6 👍, 2 comments — the highest-engagement issue in this window.
- **Author:** Ordinath (opened 2026-03-23, meaning it has simmered for ~3 months).
- **Substance:** The current architecture (MEMORY.md index + satellite markdown files) works at the current scale (~54 files, ~83 KB) but faces real scaling limits. The issue is a research-tracking ticket proposing a comprehensive redesign.
- **Underlying need:** Users are building agents with richer, longer-lived memory needs. The flat-file approach is hitting a wall, and the community is signaling that a vector/DB-backed or otherwise structured memory layer is a prerequisite for the next tier of agent capabilities.

### 🟡 PR Factory Recipe — [[#2742](https://github.com/nanocoai/nanoclaw/pull/2742)]
- **High-signal PR:** Introduces The PR Factory — a recipe that spins up dedicated worker agents per PR, posts a triage thread in Slack, reviews diffs, proposes test plans, and waits for human approval.
- **Why it matters:** This is a meta-tooling play — NanoClaw agents reviewing NanoClaw PRs. It signals the project's maturity in treating agent-driven development workflows as first-class use cases.

### 🟡 Health Audit Hardening — [[#2732](https://github.com/nanocoai/nanoclaw/pull/2732)]
- **Author:** caburi00 — fixes from a multi-agent adversarial health audit.
- **Scope:** Container lifecycle (realpath bind-mounts, crash-on-spawn circuit breaker, MAX_CONCURRENT_CONTAINERS enforcement, docker kill fallback), agent-runner hardening.
- **Underlying need:** Deployment safety in adversarial or resource-constrained environments. The fact that a dedicated multi-agent audit was conducted suggests operational seriousness.

---

## 5. Bugs & Stability

Bugs are ranked by severity (user impact × blast radius).

| Severity | Issue / PR | Description | Fix Status |
|---|---|---|---|
| 🔴 High | **[#2731](https://github.com/nanocoai/nanoclaw/issues/2731)** | Egress lockdown hijacks `host.docker.internal`; agents on the internal network lose access to all host-local services (ollama endpoints, host-side bridges, localhost proxies). | No fix PR yet. Directly conflicts with the security model documented in `docs/SECURITY.md`. |
| 🔴 High | **[#2730](https://github.com/nanocoai/nanoclaw/pull/2730)** | `NANOCLAW_*` flags set in `.env` never reach `process.env` under launchd/systemd — egress lockdown docs are misleading (users think they're enabling it but aren't). | Open fix PR (#2730). |
| 🟠 Medium | **[#2743](https://github.com/nanocoai/nanoclaw/pull/2743)** | `ncl wirings create` silently skips the `agent_destinations` side effect — messages to the new chat are dropped. | Open fix PR (same number). |
| 🟠 Medium | **[#2728](https://github.com/nanocoai/nanoclaw/pull/2728)** | Telegram pairing with `--intent wire-to:<folder>` never creates the `messaging_group_agents` row — intent is logged but not wired. | Open fix PR (same number). |
| 🟡 Low | **[#2744](https://github.com/nanocoai/nanoclaw/pull/2744)** | Signal adapter silently drops agent `add_reaction` tool output; inbound reaction envelopes ignored. | Open fix PR. |
| ✅ Closed | **[#2495](https://github.com/nanocoai/nanoclaw/issues/2495)** | `writeOutboundDirect` opens outbound DB read-only → INSERT always fails → command-gate denials silently dropped. | Closed by [[#2738](https://github.com/nanocoai/nanoclaw/pull/2738)]. |

---

## 6. Feature Requests & Roadmap Signals

| Signal | Likelihood of Next Release | Rationale |
|---|---|---|
| **Multi-bot / multi-instance channel support** | High | PR [#2733](https://github.com/nanocoai/nanoclaw/pull/2733) is merged — the substrate is in. Documentation and final polish PRs are likely all that remain. |
| **Per-group idle timeout** | High | PR [#2740](https://github.com/nanocoai/nanoclaw/pull/2740) is merged. Already a shippable feature. |
| **Agent memory system redesign** | Medium (research phase) | Issue [#1356](https://github.com/nanocoai/nanoclaw/issues/1356) is open but framed as a research tracker. No implementation PR exists. Likely a multi-release effort. |
| **PR Factory (agent-driven PR review)** | Medium | PR [#2742](https://github.com/nanocoai/nanoclaw/pull/2742) is open. It's a recipe (skill) rather than core infra, so it could ship independently of a version bump. |
| **Egress lockdown fix** | High (patch) | Issue [#2731](https://github.com/nanocoai/nanoclaw/issues/2731) and PR [#2730](https://github.com/nanocoai/nanoclaw/pull/2730) both address a fundamental mismatch between security docs and actual behavior. This needs resolution before the next release. |
| **Hardened container lifecycle** | Medium | PR [#2732](https://github.com/nanocoai/nanoclaw/pull/2732) is open. It's comprehensive but adversarial audit fixes often need stabilization time. |
| **Caller context preservation for approved commands** | Medium | PR [#2611](https://github.com/nanocoai/nanoclaw/pull/2611) has been open since 2026-05-25. Mostly a correctness fix for the approval flow. |

---

## 7. User Feedback Summary

**Dominant pain points:**
1. **Security features don't work as documented.** The combination of [#2731](https://github.com/nanocoai/nanoclaw/issues/2731) (egress lockdown blocks `host.docker.internal`) and [#2730](https://github.com/nanocoai/nanoclaw/pull/2730) (`.env` flags silently ignored under launchd/systemd) tells a story: users follow the security playbook, set the documented env vars, and discover they have neither the protection they expected nor the connectivity they need. This trust gap is the most urgent feedback signal.

2. **Silent data loss in messaging.** Multiple wire-to / wiring bugs ([#2743](https://github.com/nanocoai/nanoclaw/pull/2743), [#2728](https://github.com/nanocoai/nanoclaw/pull/2728)) mean agents accept messages but never deliver responses — users see no error, just silence. This is the worst class of UX failure.

3. **Setup handoff feels broken.** PR [#2741](https://github.com/nanocoai/nanoclaw/pull/2741) addresses a friction where interactive setup hands off to Claude but Claude doesn't act. Users going through guided onboarding hit a dead-end.

**Positive signals:**
- The health audit hardening PR ([#2732](https://github.com/nanocoai/nanoclaw/pull/2732)) reflects active community investment in security — users are running adversarial audits and contributing results upstream.
- The PR Factory recipe ([#2742](https://github.com/nanocoai/nanoclaw/pull/2742)) shows sophisticated users building meta-workflows on top of NanoClaw, a sign of platform maturity.

---

## 8. Backlog Watch

These items are unassigned or long-open and likely need maintainer triage:

| Item | Age | Need |
|---|---|---|
| **[#1356](https://github.com/nanocoai/nanoclaw/issues/1356)** — Agent memory system redesign | ~3 months (opened 2026-03-23) | A decision point. The issue is a research document tracking scaling limits. Without architectural direction, this risks becoming a permanent open-ended thread. Needs a maintainer to either scope an implementation or close it with a reference to a design doc. |
| **[#2611](https://github.com/nanocoai/nanoclaw/pull/2611)** — Preserve caller context after approval | ~18 days (opened 2026-05-25) | An approval-flow correctness fix. Open for over two weeks without visible activity — may need a nudge, review, or closure if the issue is resolved elsewhere. |
| **[#2685](https://github.com/nanocoai/nanoclaw/pull/2685)** — Signal docs: group typing, outbound reactions, quote-reply fix | ~8 days (opened 2026-06-04) | Documentation-only PR that addresses real user confusion around Signal features. Low-effort to merge, high-value for user experience. |
| **[#2742](https://github.com/nanocoai/nanoclaw/pull/2742)** — The PR Factory recipe | ~1 day | Substantial new recipe/skill. Needs a review pass to validate that the recipe doesn't expose security risks (agent-driven PR review could be a vector if not sandboxed). |

---

**Summary verdict:** NanoClaw is in a strong execution phase — infrastructure is being consolidated, multi-tenancy is landing, and the community is actively hardening the platform. The most urgent action item is resolving the egress lockdown / `.env` loading disconnect, which undermines user trust in the security model. A release candidate should be considered once {#2731}, {#2730}, and the wiring/approval context fixes stabilize.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw — Daily Digest  
Date: 2026-06-12  

---

## 1. Today’s Overview  

Project activity was very low, with only 1 issue opened and no new pull requests or releases. The codebase is effectively in a maintenance-only state, with no visible feature or infrastructure changes. Overall health is neutral, as there is no immediate crisis, but the low cadence limits momentum and may discourage new contributors. The single new issue focuses on reliability with local LLMs, which is a meaningful area for a personal AI assistant tool.  

---

## 2. Releases  

No new releases in the last 24 hours.  
There are no documented new versions, changelogs, changes, breaking changes, or migration notes.  

---

## 3. Project Progress  

No merged/closed PRs have been observed in the reporting period.  
There are no visible advances in features or fixes reflected in merged or completed pull requests.  

---

## 4. Community Hot Topics  

There is currently limited discussion to analyze:  

- **Issue #952 – Local model using ollama returns incomplete answers**  
  Author: bloodgroup-cplusplus  
  Link: https://github.com/nullclaw/nullclaw/issues/952  
  Activity: 0 comments, 0 reactions, opened 2026-06-11  

Underlying need:  
Users expect NullClaw to reliably complete responses when delegating inference to local models (e.g., Ollama). The issue suggests a possible problem in streaming handling, context management, or response parsing that truncates sentences. For a personal AI assistant project, unreliable output from local models can undermine trust and core utility.  

---

## 5. Bugs & Stability  

Bugs reported today:  

1. **Severity: Medium – Local model via Ollama returns incomplete answers**  
   - Issue: https://github.com/nullclaw/nullclaw/issues/952  
   - Impact: Users may receive truncated or incomplete responses from local models, reducing reliability of core workflows.  
   - Fix status: No linked PR or maintainer response observed; potential triage priority is medium.  

No crashes or explicit regressions have been explicitly documented in this issue, but if incomplete outputs appear repeatedly, it can be treated as a regression for users depending on stable local-model support.  

---

## 6. Feature Requests & Roadmap Signals  

No explicit feature requests have been opened in the last 24 hours.  
Based on latent demand (#952), anticipated roadmap directions may include:  

- More robust integration with local LLM backends (Ollama, etc.)  
- Improved streaming and payload handling for long or complex responses  
- Options for configuring timeout, retry, or chunk-based parsing strategies  

There is no direct evidence that any of these are prioritized yet by the maintainers.  

---

## 7. User Feedback Summary  

Current pain points and use cases reflected in recent activity:  

- **Pain points**  
  - Unreliable model behavior when using local LLMs (here, Ollama + Gemma).  
  - Incomplete answers that break expected assistant workflows (e.g., planning, analysis, instruction execution).  

- **Use cases**  
  - Users experimenting with fully local setups, avoiding cloud providers, and expecting clean end-to-end responses.  

- **Satisfaction / dissatisfaction**  
  - Satisfaction level appears to be declining among users who depend on local models, as basic answer stability is a baseline expectation.  
  - For users on managed APIs, satisfaction is not directly observable here, but overall user expectations imply that model-integration reliability is a prominent factor.  

---

## 8. Backlog Watch  

Within the available window, one issue stands out as needing attention:  

- **Issue #952 – Local model using ollama returns incomplete answers**  
  Author: bloodgroup-cplusplus  
  Link: https://github.com/nullclaw/nullclaw/issues/952  
  Status: Open since 2026-06-11, 0 comments, 0 maintainer responses observed  

This issue signals a core quality-of-experience problem in local inference and should be prioritized for triage once development bandwidth is available. If this pattern appears from multiple users (different models and environments), it may indicate a systemic issue in how NullClaw processes streamed or locally hosted model output.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

## IronClaw Project Digest — 2026-06-12

---

### 1. Today's Overview

IronClaw remains in a period of intense Reborn-surface hardening. Over the last 24 h the project saw **31 issues** (18 open / 13 closed) and **49 pull requests** (23 open / 26 merged or closed), with zero new releases. The velocity of closed PRs (26) signals an active "stabilisation sprint" focused on the Reborn local-dev and production-binary surfaces rather than net-new feature development. No new crate versions shipped today, though PR #3708 (open) prepares a release batch that crosses several API-breaking boundaries. The dominant theme is bug-fix and QA-coverage work on the Reborn WebUI v2, Slack outbound delivery, and capability/runtime dispatch — all production-readiness concerns rather than greenfield work.

---

### 2. Releases

**None.** No new versions were published in the reporting window.

A release PR is open: **#3708** [`chore: release`](https://github.com/nearai/ironclaw/pull/3708) (open since 2026-05-16, size M/medium risk). It bumps four crates with two API-breaking changes (`ironclaw_common` 0.4.2 → 0.5.0, `ironclaw_skills` 0.3.0 → 0.4.0). Engineers tracking dependency upgrades should watch this PR for migration notes.

---

### 3. Project Progress

The 26 merged/closed PRs in the last 24 h cluster around five themes. The most impactful are:

**Reborn WebUI v2 — bug fixes**
- **#4757** [`fix(webui): open, watch, and approve triggered automation runs from the Automations page`](https://github.com/nearai/ironclaw/pull/4757) — fixes blank-screen navigation to trigger-fired threads (stored under the trigger-creator scope, not the user scope).
- **#4772** [`Reborn WebChat v2 UI bugs`](https://github.com/nearai/ironclaw/pull/4772) (open, XL size) — batch-fix PR covering multiple frontend bugs plus the NEAR AI model-picker provider bug (#4703); adds auto-scroll and test coverage.

**Reborn production kernel (M4-host-kernel)**
- **#4551** [`wire ironclaw-reborn production Postgres storage config`](https://github.com/nearai/ironclaw/issue/4551) closed alongside:
  - **#4615** [`make production build_reborn_runtime launchable`](https://github.com/nearai/ironclaw/pull/4615) — unblocks `profile=production` runtime startup against PostgreSQL.
  - **#4619** [`enforce production cutover gate before serving Reborn traffic`](https://github.com/nearai/ironclaw/pull/4619) — ensures Reborn fails-closed if the production graph is incomplete.
- **#4620** [`add backend-parity readiness coverage for the production graph`](https://github.com/nearai/ironclaw/pull/4620) — closed, collecting evidence for #3026's production-readiness checklist.

**Slack outbound delivery**
- **#4753** [`Slack gate routing: conversation-keyed delivered-gate routes so bare "approve" resolves (Phase B)`](https://github.com/nearai/ironclaw/pull/4753) — enables bare "approve" Slack replies to resolve approval prompts that previously failed with `MissingGate`.
- **#4782** [`unify outbound state store so WebUI delivery defaults reach Slack delivery`](https://github.com/nearai/ironclaw/pull/4782) — fixes two overwriting `FilesystemOutboundStateStore` instances; Slack DM delivery defaults from WebUI now correctly reach the Slack delivery path.

**Capability runtime resilience**
- **#4784** [`Handle capability runtime unavailability as tool failure`](https://github.com/nearai/ironclaw/pull/4784) — capability dispatch errors no longer abort the entire agent loop; they surface as normal tool failures.

**Runtime observability & config APIs**
- **#4595** [`Runtime readiness and status APIs for operator inspection`](https://github.com/nearai/ironclaw/pull/4595) — closed; exposes Reborn readiness/status through canonical WebUI v2 APIs.
- **#4593** [`Effective config API`](https://github.com/nearai/ironclaw/pull/4593) — closed; operators can now list/get/set/validate config without hand-editing internal files.
- **#4700** [`Enable NEAR AI MCP automatically when NEAR AI credentials are configured`](https://github.com/nearai/ironclaw/pull/4700) — closed; reduces setup friction.

**NEAR AI MCP / tool fixes**
- **#4699** [`Fix NEAR AI MCP fallback web search tool name`](https://github.com/nearai/ironclaw/pull/4699) — closed; corrects `nearai.search` dispatch so MCP `tools/call.params.name` matches the upstream server.
- **#4714** [`Return failed and cancelled states from OpenAI Responses retrieve`](https://github.com/nearai/ironclaw/pull/4714) — closes a status gap in the OpenAI-compatible Responses retrieve path.

**QA / test harness**
- **#4769** [`add Reborn QA use-case e2e suites on the binary-E2E harness`](https://github.com/nearai/ironclaw/pull/4769) (open, XS) — ports manual QA workflow scripts into 22 deterministic root-level tests; no external services or Docker required.

---

### 4. Community Hot Topics

Most commented / most significant issues by engagement signal:

| Issue | Author | Comments | Topic |
|-------|--------|----------|-------|
| [#3036](https://github.com/nearai/ironclaw/issues/3036) Configuration-as-Code for IronClaw Reborn | ilblackdragon | 7 | `suggested_P2`, **EPIC** — operators want declarative tenant blueprints and use-case harnesses to replace hand-edited `.env`, `.system/...`, settings JSON, and extension installs. Underlying need: schema, diff, audit trail, and soulless reproducibility for Reborn deployments. |
| [#4766](https://github.com/nearai/ironclaw/issues/4766) Chat runtime does not use UI-saved NEAR AI credentials after restart | sunglow666 | 2 | WebUI settings persistence bug — credentials saved via the Settings → Inference UI are lost on restart when no env vars are present. |
| [#4703](https://github.com/nearai/ironclaw/issues/4703) NEAR AI model picker saves display name instead of model ID | sunglow666 | 2 | Model picker stores `"DeepSeek V4 Flash"` instead of a canonical ID, causing downstream dispatch failures. **Fix PR #4772** (open) addresses this. |
| [#4761](https://github.com/nearai/ironclaw/issues/4761) Agent stops after repeated tool failures instead of recovering | sunglow666 | 1 | Silent stall on repeated tool failures; no recovery or error surfacing. PR #4784 (closed) addresses the agent-loop-abort-on-capability-unavailable facet of this. |
| [#4783](https://github.com/nearai/ironclaw/issues/4783) Credential-less WASM extension capabilities fail dispatch with "network" obligation error | zetyquickly | 0 | Pure-compute (no-network, no-secrets) WASM extensions are blocked by an incorrect network-obligation check. Severity is high for extensibility. |

**Analysis:** The underlying need across the top issues is *first-run usability and configuration reliability for Reborn local-dev*: credentials persistence, model picker correctness, and declarative configuration are pain points for operators trying to stand up Reborn locally. The Configuration-as-Code EPIC (#3036) is the longest-lived and most commented, suggesting strong demand for infrastructure-as-code patterns.

---

### 5. Bugs & Stability

Ranked by estimated severity:

**High — user-facing, causes silent failures or broken UX:**
- [#4783](https://github.com/nearai/ironclaw/issues/4783) **Credential-less WASM extensions un-invocable** in Reborn local-dev — dispatch aborts with a network-obligation error before execution. Severity: high for extensibility. **No fix PR linked yet.**
- [#4761](https://github.com/nearai/ironclaw/issues/4761) **Agent stops silently after repeated tool failures** — no recovery. Severity: high for workflows depending on resilience. PR #4784 fixes the capability-unavailable-abort subset; the broader recovery logic may still be open.
- [#4762](https://github.com/nearai/ironclaw/issues/4762) **Failed tool workflow causes follow-up messages and activity ordering to become inconsistent** — thread state corruption. Severity: high. **No fix PR linked.**
- [#4751](https://github.com/nearai/ironclaw/issues/4751) **Large responses fail with "provider tool arguments exceed 16384 bytes"** — real content requests (e.g., 3000-word guide) hit an argument-size cap. Severity: high for practical use. **No fix PR linked.**

**Medium — degraded UX, recoverable:**
- [#4766](https://github.com/nearai/ironclaw/issues/4766) **WebUI-saved NEAR AI credentials lost on restart** — workaround: set env vars. Severity: medium. **No fix PR yet** (but #4593's effective-config API is merged, which may enable a fix).
- [#4759](https://github.com/nearai/ironclaw/issues/4759) **Workspace path duplicated** when agent uses workspace-relative paths. Severity: medium, causes file-creation errors. **No fix PR linked.**
- [#4770](https://github.com/nearai/ironclaw/issues/4770) **Tool activity may stop updating after page refresh** — possible SSE reconnect bug. Severity: medium, intermittent. **No fix PR linked.**
- [#4764](https://github.com/nearai/ironclaw/issues/4764) **Denying shell approval leaves tool invocation pending with no user feedback** — approval reject UX is incomplete. Severity: medium. **No fix PR linked.**
- [#4776](https://github.com/nearai/ironclaw/issues/4776) **No global "Always Allow" setting for eligible tools** — convenience/lifecycle issue rather than crash. Severity: medium.

**Low — polish / edge cases:**
- [#4748](https://github.com/nearai/ironclaw/issues/4748) **Wrap/No Wrap toggle appears to have no effect in code blocks** — frontend polish.
- [#4750](https://github.com/nearai/ironclaw/issues/4750) **Workspace files not discoverable from WebUI** — discoverability gap, no crash.
- [#4108](https://github.com/nearai/ironclaw/issues/4108) **Nightly E2E failed** (2026-05-27, root partition) — stale but still open; CI signal.

---

### 6. Feature Requests & Roadmap Signals

**Configuration-as-Code Epic (#3036)** is the strongest roadmap signal. It requests tenant blueprints and use-case harnesses with schema, diff, and audit — effectively "Infrastructure as Code for Reborn." The EPIC label, P2 suggestion, and 7 comments from a core contributor indicate it's likely prioritized for an upcoming cycle.

**Reborn QA Automation EPIC #4775** (opened today) targets hermetic + fixture + e2e + live test coverage for the Reborn binary. This correlates with the closed production-readiness issues (#4551, #4620, #4619) and the open e2e-harness PR #4769. Reaching a "green binary-E2E" milestone is likely a release gate.

**Observability seam PR #4588** (open, L/low risk) adds trajectory observer hooks and LLM provider injection — evidence of a roadmap push toward benchmark/observability integration with nearai-bench.

**Outbound delivery / multi-surface Slack PRs** (#4779, #4778, #4780) collectively signal that Slack is being reframed as a first-class product-adapter extension rather than a built-in. This is infra for future multi-channel delivery support.

**Subagent prompt-body budget (#4751, PR #4765)** — the 512-byte `LoopSafeSummary` cap is being relaxed for subagent inline messages. Practical AI-agent users routinely hit this; expect this fix in the next release cycle.

---

### 7. User Feedback Summary

**Pain points — ranked by frequency and severity:**

1. **First-run setup friction.** Credentials saved in WebUI are not loaded at restart (#4766), NEAR AI SSO fails locally (#4705, closed), and the model picker stores the wrong identifier (#4703). Together these make local Reborn onboarding unreliable.

2. **Silent failures with no recovery or feedback.** Agent stalls after repeated tool failures (#4761), large responses hit an invisible byte cap (#4751), and denying a shell approval leaves the UI in a pending state with no explanation (#4764). Users report they cannot tell what happened or how to proceed.

3. **Breakage in file and workspace operations.** Paths are duplicated (#4759), workspace files are undiscoverable from the UI (#4750), and activity ordering becomes inconsistent after a failed tool call (#4762). These erode trust in the workspace abstraction.

4. **Extension ecosystem blockers.** Pure-compute (no-network, no-secrets) WASM extensions cannot be invoked at all (#4783) — this punishes developers building safe, offline capabilities.

5. **Requested "always allow" safety UX.** Users want a global setting to auto-approve eligible tools (#4776), suggesting that per-invocation approval fatigue is a real concern.

**Satisfaction indicators:** The rapid close rate on many of these issues (13 issues, 26 PRs closed in 24 h) suggests maintainers are responsive and that reported bugs are being triaged and fixed at a healthy velocity.

---

### 8. Backlog Watch

**Oldest high-signal issues still awaiting resolution (not already covered above):**

| Issue | Age | Why it needs attention |
|-------|-----|----------------------|
| [#3036](https://github.com/nearai/ironclaw/issues/3036) Configuration-as-Code for IronClaw Reborn | ~45 days | EPIC-level feature gap; 7 comments from a core contributor; blocks reproducible deployments. Needs scoping or a milestone assignment. |
| [#4108](https://github.com/nearai/ironclaw/issues/4108) Nightly E2E failed | ~16 days (but unresolved CI failure) | Root-partition nightly E2Es are failing. Indicates either a flaky test or a real regression that CI coverage PRs (#4769, #4775) are racing to address. Needs triage to determine root cause. |
| [#4588](https://github.com/nearai/ironclaw/pull/4588) feat(reborn): observability seams — trajectory observer + LLM provider injection | 3 days, open, L/low risk | Blocks nearai-bench integration; low risk, modest size — candidate for quick merge. |
| [#4703](https://github.com/nearai/ironclaw/issues/4703) NEAR AI model picker saves display name instead of model ID | 2 days | Fix is in PR #4772 (open); should be straightforward to land once reviewed. |
| [#4783](https://github.com/nearai/ironclaw/issues/4783) Credential-less WASM extension dispatch failure (network obligation error) | Today (within 24 h) | **No fix PR linked.** High severity for extensibility; needs a maintainer to confirm and route. |

**Overall health assessment:** IronClaw is in a healthy stabilization phase. High close rates, production-pipeline completions (M4-host-kernel), and a growing automated-test surface all point to a maturing release candidate. The main risk areas are (a) first-run UX reliability in Reborn local-dev and (b) silent agent-loop failure modes that erode user trust. The Configuration-as-Code EPIC (#3036) is the most important strategic gap to resource in the next cycle.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-06-12

---

## 1. Today's Overview

LobsterAI experienced a highly active day for code integration, with **19 pull requests updated** (1 merged, 18 closed) and **2 issues actively bumped** — all within the last 24 hours. Notably, 18 PRs were closed without merge, suggesting either a batch cleanup/rejection cycle or auto-closals from branch cleanup (several carry the `[stale]` label), while one genuinely new PR (#2152) was merged. Zero new releases were published. The project shows strong engineering velocity on the `cowork`, `renderer`, and `skills` subsystems, with multiple contributors landing refinements in parallel.

---

## 2. Releases

**None.** No new versions were published in the reporting window.

---

## 3. Project Progress — Merged & Closed PRs

The single merged PR and the broader set of closed PRs reveal meaningful progress across several domains:

### Merged
| PR | Author | Summary |
|---|---|---|
| **#2152** · [extend pre-send model sync timeout on slow gateways](https://github.com/netease-youdao/LobsterAI/pull/2152) | fisherdaddy | Raises the pre-send model patch timeout from 30s → 90s to prevent message drops on cold-start or stalled gateways (35–107s observed in production). Silently aborts if the user stops the session during the wait. |

### Closed (incomplete, but substantive work)
These PRs were authored in early April 2026 and closed on 2026-06-11 without merge — likely abandoned by their original authors and pruned as stale. Their content nonetheless reflects real user pain points the team must still address through other PRs or priorities:

| PR | Author | Area | What it Addressed |
|---|---|---|---|
| **#1459** · [Skill hover tooltip](https://github.com/netease-youdao/LobsterAI/pull/1459) | noransu | renderer / skills | Richtext tooltip on skill hover showing full name, badge, description. Still open but stale — marked as a pending want. |
| **#1478** · [CopyButton memory leak](https://github.com/netease-youdao/LobsterAI/pull/1478) | linlihua | renderer / cowork | `setTimeout` in `CopyButton` not cleaned up on unmount → React warning + memory leak. |
| **#1479** · [Reject duplicate skill folder](https://github.com/netease-youdao/LobsterAI/pull/1479) | kayo5994 | skills | Prevent installing same local skill twice into `name-1`, `name-2` folders. Closes #1427. |
| **#1480** · [Toast + refresh after skill add](https://github.com/netease-youdao/LobsterAI/pull/1480) | kayo5994 | skills | Reload skills from disk and show success toast after install. Closes #1426. |
| **#1481** · [Scrollable skill chips in prompt bar](https://github.com/netease-youdao/LobsterAI/pull/1481) | kayo5994 | renderer / cowork | Horizontal scroll, nowrap active-skill chips. Closes #1413. |
| **#1482** · [Scheduled task edit clears fields](https://github.com/netease-youdao/LobsterAI/pull/1482) | linlihua | main / automation | Edit resets description to `''` and forces `enabled: true`. Closes #1062. |
| **#1483** · [Auto model failover](https://github.com/netease-youdao/LobsterAI/pull/1483) | linlihua | main / models | Automatic retry with fallback model on rate-limit/server-error/timeout. |
| **#1484** · [Gmail email trigger](https://github.com/netease-youdao/LobsterAI/pull/1484) | linlihua | main / automation | Gmail polling module triggering agent sessions on new email arrival. |

Several additional June 11 PRs were closed the same day they were opened (#2142–#2151), suggesting they were fast-tracked through review. Key additions from that batch include:
- **#2143** · Computer Use MVP (Windows x64 built-in kit, app/window listing, screenshot, MCP bridge)
- **#2148** · Realtime ASR voice input for Cowork (WebSocket streaming PCM audio, settings toggle)
- **#2145** · Post-compaction context continuity improvement for Cowork sessions
- **#2146** · HTML share access mode selection (share code vs. public access)
- **#2149** · Raised OpenClaw gateway V8 heap limit to reduce OOM crashes on long-running multi-channel workloads

---

## 4. Community Hot Topics

### Issue [#2121](https://github.com/netease-youdao/LobsterAI/issues/2121) — Duplicate/repetitive output suspected as bug
- **Author:** nbjoe | **Created:** 2026-06-07 | **Comments:** 1
- **Signal:** User observed repeated text output in the chat interface and suspects it is consuming tokens wastefully. This is a production-affecting concern (direct cost impact) and has received minimal maintainer response. A `claw` (OpenClaw) process issue is suspected but undiagnosed.

### Issue [#1462](https://github.com/netease-youdao/LobsterAI/issues/1462) — Per-agent model binding + multi-agent orchestration
- **Author:** orion0608 | **Created:** 2026-04-04 (stale) | **Comments:** 2
- **Signal:** User explicitly evaluated competitors (Alibaba's HiClaw) and chose LobsterAI, but is requesting two major architectural features:
  1. Each agent individually binding its own model
  2. A "team/room" mode where a manager agent delegates to sub-agents
- This is a **high-value strategic request** and its prolonged staleness (10+ weeks) is a missed opportunity for community goodwill.

---

## 5. Bugs & Stability

| Severity | Issue / PR | Description | Status |
|---|---|---|---|
| 🔴 **High** | [#2121](https://github.com/netease-youdao/LobsterAI/issues/2121) | Repetitive output suspected of wasting tokens — affects billing and UX | **Open, unanswered** — no triage, no linked fix PR |
| 🟠 **Medium** | [#1482](https://github.com/netease-youdao/LobsterAI/pull/1482) (closed stale) | Editing scheduled tasks clears description and resets enabled state | **Unfixed** — PR closed unmerged |
| 🟡 **Low** | [#2147](https://github.com/netease-youdao/LobsterAI/pull/2147) | Stop signal arriving before gateway run becomes active sends ghost chat message | **Fixed** — merged |
| 🟡 **Low** | [#1478](https://github.com/netease-youdao/LobsterAI/pull/1478) (closed stale) | CopyButton timer leak on unmount | **Unfixed** — PR closed unmerged |
| 🔵 **Infra** | [#2149](https://github.com/netease-youdao/LobsterAI/pull/2149) | OpenClaw gateway OOM under long-running multi-channel load | **Fixed** — merged (heap limit raised) |

**Observation:** The two high/medium-severity bugs from the April batch have lingered unresolved for months despite clean, ready-to-merge PRs being available. The signal here is a **review bandwidth bottleneck**, not a lack of community contribution.

---

## 6. Feature Requests & Roadmap Signals

| Feature | Source | Likelihood in Next Release |
|---|---|---|
| Realtime ASR voice input (Cowork) | PR #2148 (merged) | ✅ **Shipped or imminent** |
| Computer Use MVP (Windows) | PR #2143 (merged) | ✅ **Shipped or imminent** |
| Post-compaction context continuity | PR #2145 (merged) | ✅ **Shipped or imminent** |
| HTML share access mode switching | PR #2146 (merged) | ✅ **Shipped or imminent** |
| Automatic model failover | PR #1483 (closed stale) | ⏳ **Abandoned PR — needs re-authoring or maintainer pick-up** |
| Gmail email trigger | PR #1484 (closed stale) | ⏳ **Same as above** |
| Per-agent model binding | Issue [#1462](https://github.com/netease-youdao/LobsterAI/issues/1462) | 🔮 **Strategic roadmap item — no PR yet** |
| Multi-agent "team room" orchestration | Issue [#1462](https://github.com/netease-youdao/LobsterAI/issues/1462) | 🔮 **Strategic roadmap item — no PR yet** |

The pattern is clear: the core LobsterAI team is shipping **Cowork UX improvements and platform stability** at pace, while **community-contributed automation and model management features are being lost in the stale-PR backlog**.

---

## 7. User Feedback Summary

**Pain Points:**
- **Token waste from hallucinated/repetitive output** (#2121) — a direct financial concern for users on metered plans; unresolved and increasingly urgent.
- **Scheduled task editing UX is fundamentally broken** (#1482 / #1062) — silently corrupting task state; users cannot trust the editing workflow.
- **Skill management UX gaps** — duplicates allowed (#1479), no refresh-toast after install (#1480), description truncation (#1459) — a cluster of rough edges around what should be a core daily workflow.

**Satisfaction Signals:**
- User in #1462 explicitly preferred LobsterAI over Alibaba's HiClaw for interaction quality — a strong endorsement of the core product experience.
- Active engagement with the v4.3 multi-instance IM channel feature indicates users are exploring advanced configurations.

**Dissatisfaction Signals:**
- Months-long staleness on issues the community has *already provided PRs for* risks eroding contributor goodwill.

---

## 8. Backlog Watch — Items Needing Maintainer Attention

| Priority | Item | Age | Risk |
|---|---|---|---|
| 🔴 Urgent | **[#2121](https://github.com/netease-youdao/LobsterAI/issues/2121)** — Repetitive output / token waste | 5 days, 1 comment | Unanswered billing-impacting bug |
| 🔴 Urgent | **[#1062](https://github.com/netease-youdao/LobsterAI/issues/1062)** — Scheduled task edit corruption | ~2+ months, clean fix | PR #1482 ready but closed stale |
| 🟠 Important | **[#1462](https://github.com/netease-youdao/LobsterAI/issues/1462)** — Per-agent model binding + multi-agent orchestration | 69 days, stale | No owner assigned; strategically important |
| 🟠 Important | **[#1426](https://github.com/netease-youdao/LobsterAI/issues/1426)** — No toast/refresh after skill add | ~2 months, clean fix | PR #1480 ready but closed stale |
| 🟠 Important | **[#1427](https://github.com/netease-youdao/LobsterAI/issues/1427)** — Duplicate skill folder on install | ~2 months, clean fix | PR #1479 ready but closed stale |
| 🟡 Watch | **[#1413](https://github.com/netease-youdao/LobsterAI/issues/1413)** — Skill chips overflow prompt bar | ~2 months, clean fix | PR #1481 ready but closed stale |

**Core recommendation:** The LobsterAI maintainers should establish a regular stale-PR triage cadence (weekly or biweekly). Several of these community PRs are high-quality, well-specified, and already reviewed — they are **production-ready fixes being lost to process friction**, not technical debt. Re-opening or cherry-picking from #1478–#1484 would resolve 6 substantive issues with minimal effort.

---

*Generated by OWL · Data as of 2026-06-12 · Source: [netease-youdao/LobsterAI](https://github.com/netease-youdao/LobsterAI)*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-06-12

---

## 1. Today's Overview

Moltis remains in active steady-state development with moderate activity. In the last 24 hours the project recorded **1 new issue**, **1 new pull request**, and **zero new releases**, indicating a calm cycle focused on bug fixes rather than feature rollout. The single open PR addresses a real delivery-path regression in the WhatsApp integration (a silent message-drop scenario), and the open issue surfaces an OAuth/authorization problem with the Fastmail MCP connector. The absence of new tagged releases and the narrow scope of activity suggest the maintainers are in a stabilization phase, resolving specific integration bugs before any next version cut.

---

## 2. Releases

**No new releases** in the last 24 hours. The project's latest published version remains unchanged. No changelog, migration notes, or breaking-change advisories to report.

---

## 3. Project Progress

No PRs were merged or closed in the reporting window. The sole open PR is:

- **[#1116 — fix(whatsapp): deliver replies to @lid chats via PN JID rewrite](https://github.com/moltis-org/moltis/pull/1116)** (by @juanlotito, opened 2026-06-12)
  - **What it fixes:** When a WhatsApp sender has privacy mode enabled, their chat address uses an `@lid` JID. The gateway was running the agent, generating a reply (visible in the web UI), and calling the outbound sender — but the reply was silently dropped because the JID rewrite to the correct push-notification target was missing. No `Delivered` receipt ever returned.
  - **Status:** Open, awaiting review/merge. This is a correctness fix in the WhatsApp outbound path and, once merged, will close a real user-visible delivery gap.

---

## 4. Community Hot Topics

Activity is low, so there is no high-engagement thread to highlight. The two open items each have **0 👍 reactions** and **≤1 comment**, meaning no topic has yet gained community traction.

- **[#1115 — [Bug] Fastmail MCP Authorisation](https://github.com/moltis-org/moltis/issues/1115)** — 1 comment, 0 👍. A user reports an authorization failure when connecting Moltis to Fastmail via MCP. The issue is open and has received one response but no resolution yet.
- **[#1116 — WhatsApp @lid reply delivery PR](https://github.com/moltis-org/moltis/pull/1116)** — newly opened, no comments yet. The underlying need is reliable message delivery for privacy-conscious WhatsApp users — a core reliability concern.

**Analysis:** The two active items point to a common theme — **integration reliability**. Users expect Moltis to correctly authenticate with external services (Fastmail) and to reliably deliver outbound messages (WhatsApp). Both issues undermine trust in the platform's core promise of seamless multi-channel AI assistance.

---

## 5. Bugs & Stability

| Severity | Issue | Fix PR? |
|----------|-------|---------|
| **Medium** — Silent message loss on WhatsApp for privacy-enabled senders. Reply is generated but never delivered; no error surfaced to user. | [#1115 (indirectly related)](https://github.com/moltis-org/moltis/issues/1115) / [#1116](https://github.com/moltis-org/moltis/pull/1116) | ✅ PR #1116 open |
| **Medium** — Fastmail MCP authorization failure. User cannot complete OAuth flow to connect Fastmail. Blocks a core use case (email integration). | [#1115](https://github.com/moltis-org/moltis/issues/1115) | ❌ No fix PR yet |

Both bugs are **medium severity**: neither crashes the system, but each breaks a user-facing workflow. The WhatsApp delivery bug is more critical from a reliability standpoint because it fails silently — the user sees a reply in the web UI and assumes it was sent, when it was not.

---

## 6. Feature Requests & Roadmap Signals

No new feature-request issues were filed in the last 24 hours. However, the two open items provide indirect signals:

- **WhatsApp privacy/JID handling** — PR #1116 suggests the team is actively improving WhatsApp edge cases. Future work may expand `@lid` handling to other message types or add delivery-receipt verification.
- **Fastmail MCP support** — Issue #1115 highlights that email-provider MCP integrations are an active user need. A resolution (whether a doc update or a code fix) will likely be included in the next release notes.

**Prediction for next release:** A patch-level bump focused on WhatsApp delivery reliability and MCP connector stability, rather than new features.

---

## 7. User Feedback Summary

- **Pain point 1 — Silent delivery failure (WhatsApp):** A user (via PR author @juanlotito) identified that replies to `@lid` chats vanish without any error or receipt. This is a high-friction experience because the web UI shows the reply as if it succeeded. Users expect either successful delivery or a clear failure signal.
- **Pain point 2 — Fastmail authorization blocker:** User @kmath313 cannot connect Fastmail at all, blocking email-based workflows. The issue has one comment but no resolution, suggesting the user is still waiting.
- **Overall sentiment:** Neutral-to-concerned. No praise or positive feedback was recorded in the window. The focus is squarely on fixing broken integration paths.

---

## 8. Backlog Watch

- **[#1115 — Fastmail MCP Authorisation](https://github.com/moltis-org/moltis/issues/1115)** — Open since 2026-06-11, 1 comment, no assignee visible, no linked PR. This issue has been open for over 24 hours with no resolution path. Given that it blocks a user from using a supported integration, it warrants maintainer triage — even if the outcome is a documentation update or a pointer to correct configuration.
- **[#1116 — WhatsApp @lid PR](https://github.com/moltis-org/moltis/pull/1116)** — Open since today. Needs review. The fix addresses silent message loss, so prompt review is recommended to prevent user confusion (the web UI shows replies that never arrive).

---

*Data source: [github.com/moltis-org/moltis](https://github.com/moltis-org/moltis) · Digest generated 2026-06-12*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-06-12

---

## 1. Today's Overview

CoPaw (formerly QwenPaw) is in a **high-activity stabilization phase** following the v1.1.11 release cycle. Over the past 24 hours, the project saw **31 issues updated** (19 still open) and **40 PRs touched** (21 open, 19 merged/closed), with **2 post-release patches** (v1.1.11.post1 and v1.1.11.post2) shipped in rapid succession. The dominant theme is **firefighting regressions** introduced in v1.1.11 — particularly around the Tauri desktop client, SSL certificate handling, and memory search UI rendering. A major architectural initiative (Runtime 2.0 migration to AgentScope 2.0) is tracked in a long-lived breaking-change issue. Community engagement is strong, with multiple first-time contributors submitting PRs across UI, i18n, security, and observability.

---

## 2. Releases

### v1.1.11.post2 (2026-06-11)
- **PR [#5124](https://github.com/agentscope-ai/QwenPaw/pull/5124)** — Version bump to v1.1.11.post2
- **PR [#5119](https://github.com/agentscope-ai/QwenPaw/pull/5119)** — Style fix: truncate tool card titles to single line with ellipsis in the Console UI
- **Nature:** Minor UI polish patch; no breaking changes

### v1.1.11.post1 (2026-06-11)
- **PR [#5093](https://github.com/agentscope-ai/QwenPaw/pull/5093)** — Version bump to v1.1.11.post1
- **PR [#5092](https://github.com/agentscope-ai/QwenPaw/pull/5092)** — Revert: "fix(pack): compile-check discord after conda-unpack" (the fix itself caused issues)
- **Nature:** Hotfix revert; no breaking changes

> **Migration notes:** Both are post-release patches. Users on v1.1.11 should upgrade to .post2. The OpenSSL 3.5 regression (see Bugs section) is the critical driver for these rapid patches.

---

## 3. Project Progress

### Merged/Closed PRs (representative highlights)

| PR | Description | Significance |
|---|---|---|
| [#5133](https://github.com/agentscope-ai/QwenPaw/pull/5133) | feat(ui): apply AionUi design language to Console layout | Visual refresh of the web console; CSS-only changes, no logic impact |
| [#5134](https://github.com/agentscope-ai/QwenPaw/pull/5134) | feat: qwenpaw-changelog historian agent (5th phase of dev-team pipeline) | Adds automated changelog documentation into the project's auto-memory system |
| [#5136](https://github.com/agentscope-ai/QwenPaw/pull/5136) | feat(i18n): complete pt-BR translation | Expands language support to Brazilian Portuguese |
| [#5119](https://github.com/agentscope-ai/QwenPaw/pull/5119) | style: truncate tool card titles with ellipsis | Fixes UI overflow in tool call cards |
| [#5118](https://github.com/agentscope-ai/QwenPaw/pull/5118) | chore: add news for AgentScope platform | Platform communication update |
| [#5124](https://github.com/agentscope-ai/QwenPaw/pull/5124) | chore: bump version to v1.1.11.post2 | Release machinery |

### Key Open PRs Under Active Review

| PR | Description | Significance |
|---|---|---|
| [#5078](https://github.com/agentscope-ai/QwenPaw/pull/5078) | feat(runtime): Runtime 2.0 modular architecture | **Major** — decomposes monolithic Runner into composable units with ToolCoordinator; tagged as Breaking Change |
| [#5067](https://github.com/agentscope-ai/QwenPaw/pull/5078) | feat(driver): Agent OS Driver — unified abstraction for MCP/A2A/ACP | **Major** — unifies external capability invocation under a single driver layer |
| [#5028](https://github.com/agentscope-ai/QwenPaw/pull/5028) | fix(security): isolate keychain master key per install | Security fix preventing cross-install keychain collisions |
| [#5130](https://github.com/agentscope-ai/QwenPaw/pull/5130) | feat(chat): per-turn token and context usage popover | Addresses user demand for token statistics (requested in [#5103](https://github.com/agentscope-ai/QwenPaw/issues/5103)) |
| [#5128](https://github.com/agentscope-ai/QwenPaw/pull/5128) | fix: group Langfuse observations by agent loop | Fixes fragmented Langfuse traces (directly addresses [#5127](https://github.com/agentscope-ai/QwenPaw/issues/5127)) |
| [#4622](https://github.com/agentscope-ai/QwenPaw/pull/4622) | plugin(datapaw): data-analysis plugin with 12 BI skills | Significant plugin contribution expanding CoPaw's data analysis capabilities |

---

## 4. Community Hot Topics

### Most Discussed Issues

1. **[#4727](https://github.com/agentscope-ai/QwenPaw/issues/4727)** — *[Breaking Change] Migrate backend from AgentScope 1.x to AgentScope 2.0* (9 comments, 👍2)
   - **Underlying need:** This is the project's most consequential architectural decision. AgentScope 2.0 has been officially released, and CoPaw's backend is still on `agentscope==1.0.20`. The migration will touch virtually every agent runtime interaction. The 9 comments likely reflect community concern about stability, API compatibility, and upgrade paths. PR [#5078](https://github.com/agentscope-ai/QwenPaw/pull/5078) (Runtime 2.0) appears to be the implementation vehicle.

2. **[#5064](https://github.com/agentscope-ai/QwenPaw/issues/5064)** — *[Bug] Scheduled tasks created by agent fail to trigger* (8 comments)
   - **Underlying need:** Users are relying on CoPaw agents to create cron-like scheduled tasks, but the tasks silently fail at execution time and are not editable afterward. This is a **core workflow reliability** issue — if agents can't be trusted to manage schedules, a major automation use case is broken.

3. **[#5106](https://github.com/agentscope-ai/QwenPaw/issues/5106)** — *[Bug] Tauri desktop SSL cert error + infinite process spawn causing black screen* (7 comments)
   - **Underlying need:** The Tauri desktop client is completely unusable for this user (Windows 11). This is a **showstopper regression** in v1.1.11 that likely affects a broader Windows user base. Related to the OpenSSL 3.5 regression documented in [#5086](https://github.com/agentscope-ai/QwenPaw/issues/5086).

4. **[#4989](https://github.com/agentscope-ai/QwenPaw/issues/4989)** — *[Bug] v1.1.9 & v1.1.10 hang with local Qwen3.6-27B via vLLM* (6 comments)
   - **Underlying need:** Local model deployment (vLLM) is a critical use case for self-hosted users. The fact that it worked in v1.1.5.post2 but broke in v1.1.9 suggests a regression in the OpenAI-compatible provider layer. No fix PR is visible yet.

5. **[#3817](https://github.com/agentscope-ai/QwenPaw/issues/3817)** — *[Question] Long-term memory vector model config resets on container restart* (5 comments)
   - **Underlying need:** Configuration persistence is a fundamental expectation. The root cause (initialization logic overwriting `agent.json` within 4 seconds of startup) has been identified but the fix may not be deployed yet.

---

## 5. Bugs & Stability

### 🔴 Critical (System-crash / Complete-functionality-loss)

| Issue | Description | Fix Status |
|---|---|---|
| [#5106](https://github.com/agentscope-ai/QwenPaw/issues/5106) | Tauri desktop: SSL cert error → infinite process spawn → memory exhaustion → black screen on Windows 11 | **No fix PR yet.** Related to OpenSSL 3.5 regression in [#5086](https://github.com/agentscope-ai/QwenPaw/issues/5086) |
| [#5086](https://github.com/agentscope-ai/QwenPaw/issues/5086) | OpenSSL 3.5 regression: `ssl.SSLContext.load_verify_locations(cadata=...)` fails with `ASN1: NOT_ENOUGH_DATA` | Likely addressed by v1.1.11.post1/.post2 patches, but not explicitly confirmed |
| [#5095](https://github.com/agentscope-ai/QwenPaw/issues/5095) | Windows desktop v1.1.11 fails to start entirely | No fix PR yet |

### 🟠 High (Major feature broken for affected users)

| Issue | Description | Fix Status |
|---|---|---|
| [#5064](https://github.com/agentscope-ai/QwenPaw/issues/5064) | Agent-created scheduled tasks silently fail to trigger; not editable | No fix PR yet |
| [#4989](https://github.com/agentscope-ai/QwenPaw/issues/4989) | v1.1.9/v1.1.10 hang indefinitely with local vLLM models (Qwen3.6-27B) | No fix PR yet |
| [#5108](https://github.com/agentscope-ai/QwenPaw/issues/5108) | v1.1.11: Ollama model provider missing from console chat model selector | Closed (likely fixed in post patches) |
| [#5102](https://github.com/agentscope-ai/QwenPaw/issues/5102) | v1.1.11: File attachments broken (md files preview instead of downloading; images/zips error) | Closed (likely fixed in post patches) |

### 🟡 Medium (Degraded experience, workarounds exist)

| Issue | Description | Fix Status |
|---|---|---|
| [#5098](https://github.com/agentscope-ai/QwenPaw/issues/5098) | Memory search results render with `unknown` file paths in UI table | No fix PR yet |
| [#5137](https://github.com/agentscope-ai/QwenPaw/issues/5137) | Vector model auto-memory search config lost if card not expanded before saving | No fix PR yet |
| [#5122](https://github.com/agentscope-ai/QwenPaw/issues/5122) | Context compression stats don't match actual API input size (skills/MCP inflate context) | No fix PR yet |
| [#5053](https://github.com/agentscope-ai/QwenPaw/issues/5053) | Tauri desktop: 10+ second UI lag when switching between 4+ session tabs | Closed (may need verification) |

### Stability Assessment
The v1.1.11 release cycle has been **rough**. Two post-release patches in one day, multiple critical desktop client bugs, and a local model regression indicate insufficient pre-release testing coverage for the Tauri desktop path and vLLM provider compatibility. The rapid post-release cadence suggests the team is responsive but reactive.

---

## 6. Feature Requests & Roadmap Signals

### Likely Candidates for Next Version (v1.1.12 or v1.2.0)

| Request | Issue | Signal Strength | Notes |
|---|---|---|---|
| **Per-turn token/context usage display** | [#5103](https://github.com/agentscope-ai/QwenPaw/issues/5103) + [#5130](https://github.com/agentscope-ai/QwenPaw/pull/5130) | 🟢 **PR already open** | PR [#5130](https://github.com/agentscope-ai/QwenPaw/pull/5130) implements exactly this; high merge probability |
| **Conversation queuing (don't block on running turn)** | [#5103](https://github.com/agentscope-ai/QwenPaw/issues/5103), [#5116](https://github.com/agentscope-ai/QwenPaw/issues/5116) | 🟡 **User demand, no PR yet** | Compared favorably to OpenClaw; affects all channel integrations |
| **Configurable chat interaction modes (interrupt/steering/queueing)** | [#5116](https://github.com/agentscope-ai/QwenPaw/issues/5116) | 🟡 **Well-specified request** | Proposes replacing manual `/stop` with 3 configurable modes |
| **Langfuse trace grouping by agent loop** | [#5127](https://github.com/agentscope-ai/QwenPaw/issues/5127) + [#5128](https://github.com/agentscope-ai/QwenPaw/pull/5128) | 🟢 **PR already open** | Direct fix PR from issue author; likely to merge |
| **Context compression with Headroom integration** | [#5063](https://github.com/agentscope-ai/QwenPaw/issues/5063) | 🔴 **Ambitious, early stage** | Claims 60–95% token reduction; would require significant integration work |
| **DingTalk custom endpoint for private deployment** | [#4887](https://github.com/agentscope-ai/QwenPaw/issues/4887) | 🟡 **Enterprise need** | Straightforward config change; PR [#5061](https://github.com/agentscope-ai/QwenPaw/pull/5061) already addresses related DingTalk issues |
| **Quote/reference text from responses** | [#5110](https://github.com/agentscope-ai/QwenPaw/issues/5110) | 🔴 **Nice-to-have** | Perplexity-style UX enhancement; no implementation started |
| **Tool Guard approval block collapse/persist** | [#5107](https://github.com/agentscope-ai/QwenPaw/issues/5107) | 🟡 **UI polish** | Small UX improvement; low effort |

### Strategic Signal
The **Runtime 2.0 migration** ([#4727](https://github.com/agentscope-ai/QwenPaw/issues/4727), [#5078](https://github.com/agentscope-ai/QwenPaw/pull/5078)) and **Agent OS Driver** ([#5067](https://github.com/agentscope-ai/QwenPaw/pull/5067)) PRs represent the most significant architectural work in flight. If merged, they would likely anchor a **v1.2.0 or v2.0 release** rather than a patch.

---

## 7. User Feedback Summary

### Pain Points

1. **Desktop client instability (Windows)** — Multiple users report the Tauri desktop client is unusable: SSL errors, infinite process spawning, black screens, and failure to start. This is the **most urgent user-facing issue**. Users on Windows 11 are particularly affected. ([#5106](https://github.com/agentscope-ai/QwenPaw/issues/5106), [#5095](https://github.com/agentscope-ai/QwenPaw/issues/5095), [#5086](https://github.com/agentscope-ai/QwenPaw/issues/5086))

2. **Local model deployment regression** — Users running vLLM locally (a core self-hosted use case) report that v1.1.9+ hangs indefinitely, while v1.1.5.post2 worked fine. This erodes trust in the upgrade path. ([#4989](https://github.com/agentscope-ai/QwenPaw/issues/4989))

3. **Scheduled task reliability** — Users creating cron-like tasks through agents find the tasks silently fail. This breaks automation workflows. ([#5064](https://github.com/agentscope-ai/QwenPaw/issues/5064))

4. **Configuration persistence** — Vector model settings reset on every container restart, forcing repeated manual reconfiguration. ([#3817](https://github.com/agentscope-ai/QwenPaw/issues/3817), [#5137](https://github.com/agentscope-ai/QwenPaw/issues/5137))

5. **UI/UX friction** — Attachment download behavior changed (md files preview instead of downloading), Ollama provider disappeared from model selector, memory search results show `unknown` paths, and context compression stats are misleading. ([#5102](https://github.com/agentscope-ai/QwenPaw/issues/5102), [#5108](https://github.com/agentscope-ai/QwenPaw/issues/5108), [#5098](https://github.com/agentscope-ai/QwenPaw/issues/5098), [#5122](https://github.com/agentscope-ai/QwenPaw/issues/5122))

### Satisfaction Signals
- Users are actively comparing CoPaw favorably to alternatives (OpenClaw) and requesting feature parity, indicating **strong product-market fit** ([#5103](https://github.com/agentscope-ai/QwenPaw/issues/5103))
- First-time contributors are submitting meaningful PRs (i18n, UI design, security, plugins), indicating **healthy community onboarding**
- The team shipped 2 post-release patches within hours, indicating **responsive maintenance**

### Key Use Cases Observed
- **Self-hosted local model deployment** (vLLM + Ollama) — critical for privacy-conscious users
- **Desktop-first usage** (Tauri client on Windows) — significant user base
- **Agent-driven automation** (scheduled tasks, long-running workflows) — core value proposition
- **Multi-channel communication** (DingTalk, Feishu, Discord) — enterprise/team use cases

---

## 8. Backlog Watch

### Issues Needing Maintainer Attention

| Issue | Age | Why It Matters | Risk of Neglect |
|---|---|---|---|
| [#4727](https://github.com/agentscope-ai/QwenPaw/issues/4727) — AgentScope 2.0 migration | 16 days (created 2026-05-27) | **Breaking change** affecting entire backend; PR [#5078](https://github.com/agentscope-ai/QwenPaw/pull/5078) is open but complex | High — delays compound technical debt; AgentScope 1.x will eventually lose support |
| [#4989](https://github.com/agentscope-ai/QwenPaw/issues/4989) — vLLM local model hang | 6 days | Core self-hosted use case broken since v1.1.9; no fix PR visible | High — affects all users running local models; regression from working state |
| [#5064](https://github.com/agentscope-ai/QwenPaw/issues/5064) — Scheduled tasks not triggering | 2 days | Automation is a primary use case; 8 comments show active user concern | Medium-High — silent failures erode trust in agent reliability |
| [#3817](https://github.com/agentscope-ai/QwenPaw/issues/3817) — Memory config resets on restart | 49 days (created 2026-04-24) | Root cause identified but fix not deployed; affects all Docker users | Medium — workaround exists (reconfigure after restart) but is tedious |
| [#5104](https://github.com/agentscope-ai/QwenPaw/issues/5104) — copaw→qwenpaw rename causes plugin install failures | 1 day | Brand transition is creating path confusion; `~/.copaw/` vs `~/.qwenpaw/` | Medium — affects users upgrading across the rename boundary |

### PRs Aging Without Review

| PR | Age | Description | Concern |
|---|---|---|---|
| [#4622](https://github.com/agentscope-ai/QwenPaw/pull/4622) — DataPaw plugin | 21 days | Full data-analysis plugin with 12 BI skills | Significant contribution at risk of staleness |
| [#4669](https://github.com/agentscope-ai/QwenPaw/pull/4669) — Tauri auto updater | 18 days | Desktop auto-update feature | Relevant to current desktop stability crisis |
| [#5035](https://github.com/agentscope-ai/QwenPaw/pull/5035) — llama.cpp version parsing fix | 3 days | Simple bug fix (fixed-width slice breaks on 5-digit build numbers) | Low-risk, should be quick to merge |

---

*Data source: agentscope-ai/QwenPaw (CoPaw) GitHub repository. Digest generated 2026-06-12. All links reference the agentscope-ai/QwenPaw repository.*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-06-12

## 1. Today's Overview

ZeroClaw shipped **v0.8.0** today, a landmark release introducing multi-agent architecture via a rewritten configuration schema that migrates existing setups automatically. Activity remains intense: all 50 recently-updated issues are still open, 49 PRs remain open with only 1 merged/closed, and the broader backlog of 50 active issues + 50 active PRs signals a project under heavy development strain. The v0.8.0 release likely shifted config parsing (V3 config), provider routing, and agent-loop internals, which may explain the high concentration of high-risk bugs touching `config`, `runtime`, and `agent` health in today's surfaced issues overall backlog. Maintainer bandwidth appears stretched — many high-priority issues and fix-PRs from April–June 2026 remain open without recent closure velocity to match the volume of incoming reports.

---

## 2. Releases

**v0.8.0** (stable, shipped today)

The headline release. One daemon now runs **many named agents**, each with independent workspace, memory, model provider, security policy, channels, and personality. A rewritten configuration schema migrates existing setups automatically (V3 config). Key inferred changes based on issue/PR context:

- **Multi-agent orchestration** — single daemon, multiple named agent instances
- **V3 config schema** — typed aliased entries (`ModelProviderRef`, etc.), new `define_provider_ref!`-generated newtypes, cascade-delete support (see PR #7175)
- **Agent-loop changes** — restructured tool dispatch, context compression, session-seeding behavior
- **Gateway/web dashboard updates** — nodes dashboard, update flow exposed over gateway
- **Cron subsystem rework** — delivery channels, claim/release locks

**Migration notes:** Your existing config should auto-migrate. Reviewers and users should pay attention to `tool_filter_groups` (Issue #6699 — currently a noop for real MCP tools), `allowed_tools`/`denied_tools` enforcement (Issue #6914), and session TTL defaults (previously 0/disabled, now 168h — PR #6085).

---

## 3. Project Progress

| # | PR | Status | What Advanced |
|---|-----|--------|---------------|
| [#7520](https://github.com/zeroclaw-labs/zeroclaw/pull/7520) | fix(ci): install cross g++ for ARM glibc release builds | **Merged/Closed** | CI pipeline fix — ARM release builds now succeed, unblocking multi-arch distribution for v0.8.0 |

The single merged PR today is purely infrastructure, confirming the team was focused on stabilizing the v0.8.0 release pipeline. However, a significant number of critical fix-PRs remain open and are candidates for a rapid v0.8.1:

- **[#6038](https://github.com/zeroclaw-labs/zeroclaw/pull/6038)** — Cron duplicate-execution lock (closes [#6037](https://github.com/zeroclaw-labs/zeroclaw/issues/6037))
- **[#6303](https://github.com/zeroclaw-labs/zeroclaw/pull/6303)** — Drop leading non-user turns before provider call, fixing Gemini 400 errors (closes [#6302](https://github.com/zeroclaw-labs/zeroclaw/issues/6302))
- **[#6362](https://github.com/zeroclaw-labs/zeroclaw/pull/6362)** — Fix context compressor boundary for tool-call-owning assistant messages (closes [#6361](https://github.com/zeroclaw-labs/zeroclaw/issues/6361))
- **[#6230](https://github.com/zeroclaw-labs/zeroclaw/pull/6230)** — Allow WhatsApp as cron delivery channel (closes [#6224](https://github.com/zeroclaw-labs/zeroclaw/issues/6224))
- **[#6288](https://github.com/zeroclaw-labs/zeroclaw/pull/6288)** — Derive systemd unit name from config-dir for named instances (closes [#6227](https://github.com/zeroclaw-labs/zeroclaw/issues/6227))

---

## 4. Community Hot Topics

### Dream Mode — Periodic Memory Consolidation ([Issue #5849](https://github.com/zeroclaw-labs/zeroclaw/issues/5849))
🗨️ **17 comments** | Opened 2026-04-18 | Priority: P2 | 🏷️ `enhancement`, `memory`, `config`, `heartbeat`

The most-discussed issue by far. Users want ZeroClaw to enter a lightweight "Dream Mode" during idle periods — consolidating daily memories, reflecting on recent interactions, and updating long-term knowledge structures without requiring prompts.

**Underlying need:** As agents accumulate conversation history, there is no automatic mechanism to distill transient interactions into durable knowledge. Users are effectively losing cross-session context. This reflects a gap in long-term memory management for persistent AI assistants.

---

### Delegate Agentic Mode — Tool Gating Bugs ([Issue #7470](https://github.com/zeroclaw-labs/zeroclaw/issues/7470))
🗨️ **7 comments** | Opened 2026-06-11 | Priority: P1 | 🏷️ `bug`, `security`, `tool:delegate`

Two coupled bugs in the delegate path: multi-agent reviewer/research setups are blocked when a target's `risk_profile.allowed_tools` is empty, and same-profile gating blocks stricter delegated targets.

**Underlying need:** Multi-agent workflows (established in v0.8.0) are hitting real-world friction immediately. The security model for agent-to-agent delegation is too restrictive for practical use cases like research + reviewer pipelines.

---

### tool_filter_groups No-op for MCP Tools ([Issue #6699](https://github.com/zeroclaw-labs/zeroclaw/issues/6699))
🗨️ **7 comments** | Opened 2026-05-16 | Priority: P1 | 🏷️ `bug`, `tool:mcp`, `config`

Documented `tool_filter_groups` configuration parses cleanly but has zero effect on real MCP tool surfaces. Two distinct bugs: prefix mismatch in the filter gate and no integration with `deferred_loading`.

**Underlying need:** Users configuring fine-grained tool access control for multi-agent setups find the mechanism broken. This undermines the security model for agents that use MCP servers with large tool surfaces.

---

### Smart Contract Auditor Project ([Issue #6649](https://github.com/zeroclaw-labs/zeroclaw/issues/6649))
🗨️ **6 comments** | Opened 2026-05-13 | Priority: P1 | 🏷️ `bug`, `security`, `skills`

Users are building on-chain smart contract auditing skills and encountering issues.

**Underlying need:** ZeroClaw is being used for security-critical, specialized workflows. The skill system needs to support domain-specific toolchains reliably.

---

### Multi-Agent Hooks — Cross-Agent Lifecycle ([Issue #6706](https://github.com/zeroclaw-labs/zeroclaw/issues/6706))
🗨️ **6 comments** | Opened 2026-05-16 | Priority: P2 | 🏷️ `enhancement`, `agent`, `config`

Users want hooks for cross-agent lifecycle events in the new multi-agent architecture.

**Underlying need:** Multi-agent orchestration without lifecycle hooks means users cannot react to agent state changes (agent started, agent errored, delegate initiated). This is foundational infrastructure for building reliable multi-agent systems.

---

## 5. Bugs & Stability

Ranked by severity:

### S0 — Data Loss / Security Risk
| Issue | Description | Fix PR? |
|-------|-------------|---------|
| [#5542](https://github.com/zeroclaw-labs/zeroclaw/issues/5542) | **Consecutive OOM kills in WSL2** — zeroclaw daemon killed repeatedly under memory pressure | 🔴 None open |

### S1 — Workflow Blocked

| Issue | Description | Fix PR? |
|-------|-------------|---------|
| [#5808](https://github.com/zeroclaw-labs/zeroclaw/issues/5808) | Default 32k context budget exceeded on **iteration 1** — perpetual preemptive trim | 🔴 None open |
| [#6361](https://github.com/zeroclaw-labs/zeroclaw/issues/6361) | Context compression drops tool messages for OpenAI-compatible providers (MiniMax) — causes tool loops | 🟢 [#6362](https://github.com/zeroclaw-labs/zeroclaw/pull/6362) open |
| [#6434](https://github.com/zeroclaw-labs/zeroclaw/issues/6434) | Shell tool calls refused at `autonomy.level = "full"` — no `tool_dispatch` reaches runtime | 🔴 None open |
| [#7470](https://github.com/zeroclaw-labs/zeroclaw/issues/7470) | Delegate agentic mode rejects empty `allowed_tools` — multi-agent setups blocked | 🔴 None open |
| [#6891](https://github.com/zeroclaw-labs/zeroclaw/issues/6891) | Scheduled Jobs edit returns API 422 — dashboard edit form out of sync with v0.8.0 schema | 🔴 None open |
| [#6224](https://github.com/zeroclaw-labs/zeroclaw/issues/6224) | Cron jobs cannot deliver to WhatsApp channel | 🟢 [#6230](https://github.com/zeroclaw-labs/zeroclaw/pull/6230) open |

### S2 — Degraded Behavior

| Issue | Description | Fix PR? |
|-------|-------------|---------|
| [#6350](https://github.com/zeroclaw-labs/zeroclaw/issues/6350) | WhatsApp Web allowed-numbers bypassed for LID contacts — silent message drops | 🔴 None open |
| [#6173](https://github.com/zeroclaw-labs/zeroclaw/issues/6173) | `model_switch` tool doesn't persist across turns; gateway/UI ignores it | 🔴 None open |
| [#6227](https://github.com/zeroclaw-labs/zeroclaw/issues/6227) | `zeroclaw status` hardcodes `zeroclaw.service` — named instances report stopped | 🟢 [#6288](https://github.com/zeroclaw-labs/zeroclaw/pull/6288) open |

### Resource Leaks

| Issue | Description | Fix PR? |
|-------|-------------|---------|
| [#5903](https://github.com/zeroclaw-labs/zeroclaw/issues/5903) | **MCP stdio child processes leak** — one orphan per heartbeat tick (~48/day) | 🔴 None open |
| [#6037](https://github.com/zeroclaw-labs/zeroclaw/issues/6037) | **Cron jobs launch repeatedly while still running** — no execution lock | 🟢 [#6038](https://github.com/zeroclaw-labs/zeroclaw/pull/6038) open |

**Stability assessment:** The OOM kills (#5542) and MCP process leak (#5903) are the most concerning — both represent resource exhaustion vectors that worsen over time. The cron duplicate-execution bug (#6037) can cause cascading failures for time-sensitive workflows. Several workflow-blocked bugs relate directly to v0.8.0's new multi-agent features, suggesting the release may have introduced regressions.

---

## 6. Feature Requests & Roadmap Signals

Based on discussion volume, priority labels, and maintainer acceptance status:

**Near-term (likely v0.8.1 or v0.8.2):**

| Issue | Signal |
|-------|--------|
| [#5849](https://github.com/zeroclaw-labs/zeroclaw/issues/5849) Dream Mode | Accepted, P2, 17 comments — strong community demand; natural extension of memory/heartbeat infrastructure |
| [#6914](https://github.com/zeroclaw-labs/zeroclaw/issues/6914) Enforce `allowed_tools`/`denied_tools` in main loop | Accepted, P1 — security-critical, config field exists but is incompletely wired |
| [#6312](https://github.com/zeroclaw-labs/zeroclaw/issues/6312) Per-alias webhook path routing | Accepted, P2 — multi-instance channel support, partially addressed by #7297 but path routing still wanted |
| [#6642](https://github.com/zeroclaw-labs/zeroclaw/issues/6642) OTel GenAI prompt/completion spans | P2, in-progress — already has a working downstream implementation offered for upstream |

**Medium-term:**

| Issue | Signal |
|-------|--------|
| [#6391](https://github.com/zeroclaw-labs/zeroclaw/issues/6391) Real heartbeat tracking for daemon nodes | Accepted, P2, blocked — dashboard shows fake "Online" status |
| [#6390](https://github.com/zeroclaw-labs/zeroclaw/issues/6390) `zeroclaw node add <url>` CLI | Accepted, P2, blocked — fleet management CLI |
| [#6823](https://github.com/zeroclaw-labs/zeroclaw/issues/6823) TUI ACP Bridge | Accepted, P2, tracker — client-side TUI-to-daemon connection layer |

**Strong signal:** The convergence of multi-agent architecture (v0.8.0), missing security enforcement (#6914), broken delegate tool gating (#7470), and the Dream Mode request (#5849) all point to **agent introspection, security hardening, and memory management** as the next major focus areas.

---

## 7. User Feedback Summary

**Pain Points:**

1. **Multi-agent security model is broken out of the box.** Users setting up reviewer/research agent pipelines immediately hit delegate tool gating bugs (#7470), `tool_filter_groups` that don't work (#6699), and inconsistently enforced `allowed_tools` (#6914).

2. **Resource management is a recurring crisis.** OOM kills in WSL2 (#5542), MCP stdio orphan accumulation (#5903), and cron job duplication (#6037) all point to production deployments experiencing instability over time.

3. **Provider compatibility friction.** Gemini rejects conversation histories (#6302), MiniMax breaks on context compression (#6361), Anthropic rejects skill tool names (#6678). Each provider adapter has unique constraints that ZeroClaw's abstractions don't fully normalize.

4. **Multi-instance/missing named-instance support.** `zeroclaw status` hardcodes unit names (#6227), and there's no CLI to register remote daemon nodes (#6390).

5. **Context budget misconfiguration.** The default 32k context is already exceeded on the first iteration due to system prompts and tool definitions (#5808) — a silent performance degradation that affects all new users.

**Use Cases Observed:**
- Smart contract security auditing with custom skills (#6649)
- Multi-agent research + review pipelines (#7470)
- WhatsApp-integrated cron news briefings (#6224)
- Fleet management across multiple machines (#6346, #6390)
- WSL2 development environments (#5542)

---

## 8. Backlog Watch

These issues are high-priority, long-unanswered, and need maintainer attention:

| Issue | Age | Severity | Why It Matters |
|-------|-----|----------|----------------|
| [#5542](https://github.com/zeroclaw-labs/zeroclaw/issues/5542) OOM in WSL2 | 64 days (Apr 9) | S0 | No response, no fix PR. Daemon crashes silently. |
| [#5808](https://github.com/zeroclaw-labs/zeroclaw/issues/5808) Context budget exceeded iteration 1 | 57 days (Apr 16) | S1 | Affects **all** users with default config. Silent degradation. |
| [#5903](https://github.com/zeroclaw-labs/zeroclaw/issues/5903) MCP stdio orphan leak | 54 days (Apr 19) | S1 | One orphan per heartbeat tick → resource exhaustion. |
| [#6434](https://github.com/zeroclaw-labs/zeroclaw/issues/6434) Shell tool refused at full autonomy | 37 days (May 6) | S1 | Security model broken — `full` autonomy doesn't actually permit shell. |
| [#6678](https://github.com/zeroclaw-labs/zeroclaw/issues/6678) Skill tools rejected by Anthropic API | 28 days (May 15) | P1 | Blocks all Anthropic users with custom skills loaded. |
| [#6891](https://github.com/zeroclaw-labs/zeroclaw/issues/6891) Scheduled Jobs edit API 422 | 19 days (May 24) | S1 | Dashboard edit form broken post-v0.8.0 — direct regression from release. |
| **PR [#6303](https://github.com/zeroclaw-labs/zeroclaw/pull/6303)** Gemini history fix | 40 days (May 3) | Bug fix | Fixes S1 Gemini 400 error. No review/merge activity. |
| **PR [#6038](https://github.com/zeroclaw-labs/zeroclaw/pull/6038)** Cron duplicate-execution lock | 20 days (Apr 23) | Bug fix | Fixes S1 cron duplication. No review/merge activity. |

**Alert:** Issues #5542, #5808, and #5903 have been open for 54–64 days with no assignee, no fix PR, and no maintainer comment. These represent fundamental stability problems that affect production deployments and should be triaged for v0.8.1. PR #6303 (Gemini fix) and PR #6038 (cron lock) are ready to merge and would close two S1 bugs immediately.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/DenisZheng/agents-radar).*