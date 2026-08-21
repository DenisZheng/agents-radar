# OpenClaw Ecosystem Digest 2026-08-21

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-08-21 00:55 UTC

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

# OpenClaw Project Digest — 2026-08-21

---

## 1. Today's Overview

OpenClaw shows **extremely high development velocity** with 500 issues and 500 PRs updated in the last 24 hours. The project maintains a massive active backlog (470 open issues, 360 open PRs) with significant community engagement — top issues have 10–23 comments each. No new releases were published today, but a release validation for `v2026.8.1-beta.2` is underway (#125626). The issue landscape is dominated by **stability-critical bugs** (P0/P1 crashes, message loss, session corruption) alongside architectural feature work (cost budgets, provider fallback, memory management). PR throughput is healthy with 140 merged/closed, though many PRs await maintainer review or author action.

---

## 2. Releases

**No new releases today.**  
Active release validation: **v2026.8.1-beta.2** (#125626) — testers are upgrading real gateways and running validation worksheets. This beta includes fixes for Codex OAuth, session hovercards (UI), and sandbox provisioning. No breaking changes or migration notes published yet.

---

## 3. Project Progress (Merged/Closed PRs Today)

| PR | Area | Summary | Status |
|----|------|---------|--------|
| #116489 | Security/Install Policy | Require acknowledgement for install policy warnings (CLI + UI) | **CLOSED** |
| #120900 | Security/UI | Control UI review for install policy warnings with video proof | **CLOSED** |
| #125471 | Auth/Models | Keep Claude CLI OAuth available in Control UI after gateway restart | **CLOSED** |
| #126877 | Onboard/Secrets | Honor `--secret-input-mode ref` for generated gateway token | **CLOSED** |
| #119525 | Memory | Allow retry after `memory_search` timeout (automerge armed) | **OPEN** (automerge) |
| #126915 | CLI/Docker | Fix sandbox JSON failure rendering (empty stdout on error) | **OPEN** (new) |
| #126917 | Testing | Trim duplicate plugin contract tests | **OPEN** (new) |

**Key advances:** Security hardening for plugin/skill installs, Claude CLI OAuth resilience, onboarding secret handling, and memory search retry logic. Several P1/P2 fixes are in "ready for maintainer look" or "needs proof" states.

---

## 4. Community Hot Topics (Most Commented Issues/PRs)

| Item | Comments | Reactions | Core Need |
|------|----------|-----------|-----------|
| [#42475](https://github.com/openclaw/openclaw/issues/42475) Per-agent cost budget enforcement | 23 | 1 | **Operational control** — prevent runaway LLM spend at gateway level without external tooling |
| [#48788](https://github.com/openclaw/openclaw/issues/48788) Centralized filename encoding utility | 20 | 1 | **Internationalization** — robust multi-encoding Content-Disposition handling across all channel adapters |
| [#125626](https://github.com/openclaw/openclaw/issues/125626) Release validation v2026.8.1-beta.2 | 17 | 0 | **Quality gate** — community-driven beta testing before stable release |
| [#108435](https://github.com/openclaw/openclaw/issues/108435) Gateway fails to start (regression) | 14 | 3 | **Critical stability** — gateway startup failure across systemd/Ollama/manual on 2026.7.1 |
| [#38327](https://github.com/openclaw/openclaw/issues/38327) "Cannot convert undefined or null" with Gemini 3.1 Pro | 14 | 3 | **Provider compatibility** — regression with google-vertex/gemini-3.1-pro-preview |
| [#113306](https://github.com/openclaw/openclaw/issues/113306) SQLite snapshot restore lacks crash/identity guarantees | 12 | 0 | **Data integrity** — snapshot restore can report success without durable directory linking |
| [#88657](https://github.com/openclaw/openclaw/issues/88657) DeepSeek V4 Flash incomplete turns | 11 | 1 | **Model reliability** — payloads=0, tools=2, stopReason=stop on OpenRouter |
| [#43747](https://github.com/openclaw/openclaw/issues/43747) Memory management chaos | 11 | 0 | **Consistency** — divergent memory behavior across users (chunking, embedding, storage paths) |
| [#119796](https://github.com/openclaw/openclaw/issues/119796) Windows vitest EBUSY on agent state DB | 11 | 0 | **Windows CI stability** — SQLite handle not released in teardown |
| [#72015](https://github.com/openclaw/openclaw/issues/72015) Active-memory blocks replies, overloads multi-agent gateways | 11 | 2 | **Performance** — active-memory plugin causes reply latency and gateway overload |

**Pattern:** Community is vocal about **production reliability** (startup crashes, message loss, data integrity), **operational control** (cost budgets, provider fallback), and **cross-platform consistency** (Windows, encoding, memory).

---

## 5. Bugs & Stability (Ranked by Severity)

### 🔴 P0 — Critical / Release Blockers
| Issue | Summary | Fix PR? |
|-------|---------|---------|
| [#108435](https://github.com/openclaw/openclaw/issues/108435) | Gateway fails to start on 2026.7.1 (systemd, Ollama, manual) — `gateway did not start on 127.0.0.1` | No linked PR |
| [#48920](https://github.com/openclaw/openclaw/issues/48920) | Live docs feature `IsolatedSessions` missing from 2026.3.13 release | No linked PR |
| [#125431](https://github.com/openclaw/openclaw/issues/125431) | Codex restricted tool policy silently disables workspace `AGENTS.md` | No linked PR |

### 🟠 P1 — High Severity (Crash loops, message loss, data loss)
| Issue | Summary | Fix PR? |
|-------|---------|---------|
| [#97616](https://github.com/openclaw/openclaw/issues/97616) | Unreaped hook/tool child processes → zombie accumulation → runtime degradation | No linked PR |
| [#123273](https://github.com/openclaw/openclaw/issues/123273) | Image attachments fail for named agents — "failed to hydrate structured image attachment" | No linked PR |
| [#118839](https://github.com/openclaw/openclaw/issues/118839) | Regression: 'restart recovery claim changed before agent adoption' on 2026.7.2-beta.7 | No linked PR |
| [#126246](https://github.com/openclaw/openclaw/issues/126246) | Telegram durable outbound deliveries stuck in `send_attempt_started`, lost on restart | No linked PR |
| [#124284](https://github.com/openclaw/openclaw/issues/124284) | Subagent spawn fails with vLLM openai-completions + thinking (malformed XML tool calls) | No linked PR |
| [#86612](https://github.com/openclaw/openclaw/issues/86612) | Docker gateway restart loop with `OPENCLAW_SANDBOX=1` and `OPENCLAW_HOME=/mnt/...` | No linked PR |
| [#90361](https://github.com/openclaw/openclaw/issues/90361) | Intermittent `memory_search` "index metadata is missing" despite valid index (race) | No linked PR |
| [#83598](https://github.com/openclaw/openclaw/issues/83598) | Anthropic Claude CLI OAuth refresh dead-ends main lane despite prior fix | No linked PR |
| [#112259](https://github.com/openclaw/openclaw/issues/112259) | Visible inbound channel turn silently dropped — zero-payload dispatch, no retry/dead-letter | No linked PR |
| [#114234](https://github.com/openclaw/openclaw/issues/114234) | Usage-cost refresh lock never releasable after container restart (PID reuse) | No linked PR |
| [#124393](https://github.com/openclaw/openclaw/issues/124393) | Transcript rewrite deletes concurrently committed rows, reports success | No linked PR |
| [#71689](https://github.com/openclaw/openclaw/issues/71689) | Tasks registry restore fails on malformed SQLite image | No linked PR |
| [#92241](https://github.com/openclaw/openclaw/issues/92241) | Gateway holds stale module imports after update/rollback — inbound messages silently dropped | No linked PR |

### 🟡 P2 — Significant Impact (UX friction, session state, auth)
| Issue | Summary | Fix PR? |
|-------|---------|---------|
| [#42475](https://github.com/openclaw/openclaw/issues/42475) | Per-agent cost budget enforcement at gateway level (feature) | Linked PR open |
| [#43747](https://github.com/openclaw/openclaw/issues/43747) | Memory management chaos — inconsistent behavior across users | No linked PR |
| [#50490](https://github.com/openclaw/openclaw/issues/50490) | Feishu group chat activation mode switch ineffective | No linked PR |
| [#90378](https://github.com/openclaw/openclaw/issues/90378) | Cron store migrated to SQLite silently; new jobs default to `delivery.mode=announce` | No linked PR |
| [#119796](https://github.com/openclaw/openclaw/issues/119796) | Windows vitest teardown EBUSY on agent state DB | No linked PR |
| [#123792](https://github.com/openclaw/openclaw/issues/123792) | Assistant turns render twice with CLI backends (live + aggregate) | No linked PR |
| [#44134](https://github.com/openclaw/openclaw/issues/44134) | Google Antigravity ban from frequent tool schema reloading | No linked PR |
| [#116691](https://github.com/openclaw/openclaw/issues/116691) | VolcEngine via openai-responses: missing `input.status` on long conversations | No linked PR |
| [#53628](https://github.com/openclaw/openclaw/issues/53628) | `${XDG_CONFIG_HOME}` not processed when installing a skill | Linked PR open |
| [#72015](https://github.com/openclaw/openclaw/issues/72015) | Active-memory blocks replies, overloads multi-agent gateways | No linked PR |

**Observation:** Most P0/P1 bugs **lack fix PRs** — indicating a triage/fix capacity gap. Several are regressions in recent betas (2026.7.x, 2026.8.1-beta).

---

## 6. Feature Requests & Roadmap Signals

| Issue | Signal | Likelihood for Next Version |
|-------|--------|----------------------------|
| [#42475](https://github.com/openclaw/openclaw/issues/42475) Per-agent cost budgets at gateway | **High** — 23 comments, P2, linked PR open, operational need | 🟢 Likely (gateway-level enforcement aligns with multi-tenant direction) |
| [#47910](https://github.com/openclaw/openclaw/issues/47910) Provider fallback by failure class (quarantine auth-broken) | **High** — 8 comments, clear architecture gap | 🟡 Possible (requires provider abstraction refactor) |
| [#51441](https://github.com/openclaw/openclaw/issues/51441) Expose resolved backend model in session_status | **Medium** — 8 comments, LiteLLM routing blind spot | 🟡 Possible (observability push) |
| [#48788](https://github.com/openclaw/openclaw/issues/48788) Centralized filename encoding utility | **Medium** — 20 comments, i18n pain point | 🟢 Likely (architectural cleanup, PR #48578 partial fix) |
| [#50798](https://github.com/openclaw/openclaw/issues/50798) Visible agent-to-agent messaging for ACP threads | **Medium** — 5 comments, ACP ecosystem growth | 🟡 Possible (ACP maturity signal) |
| [#45501](https://github.com/openclaw/openclaw/issues/45501) Configurable `session.resetPrompt` | **Low** — 6 comments, UX polish | 🟢 Likely (small scope, high value) |
| [#45564](https://github.com/openclaw/openclaw/issues/45564) Confirmation step for `/new` and `/reset` | **Low** — 6 comments, safety UX | 🟢 Likely (low risk, high user appreciation) |
| [#71142](https://github.com/openclaw/openclaw/issues/71142) Configurable upload size limit for Control UI | **Low** — 8 comments, hardcoded 5MB limit | 🟢 Likely (trivial config addition) |
| [#45415](https://github.com/openclaw/openclaw/issues/45415) MEMORY.md size warning/limit enforcement | **Low** — 5 comments, silent truncation at 20K | 🟡 Possible (requires memory subsystem touch) |
| [#14747](https://github.com/openclaw/openclaw/issues/14747) Configurable lane wait diagnostic threshold | **Low** — 5 comments, hardcoded 2s warn | 🟢 Likely (single constant externalization) |

**Roadmap inference:** Next version will likely include **cost governance**, **provider resilience**, **i18n fixes**, and **UX safety rails**. Deeper architectural work (memory consolidation, ACP messaging) may slip to following cycle.

---

## 7. User Feedback Summary (Pain Points & Use Cases)

### 🎯 Top Pain Points (from issue narratives)
1. **"Gateway won't start after update"** — Multiple users on 2026.7.1 across systemd, Docker, manual launch (#108435, #86612)
2. **"Messages disappearing silently"** — Telegram, HTTP chat, inbound channels drop turns with no error (#112259, #126246, #123273)
3. **"Memory works differently for everyone"** — Chunking, embedding, storage paths inconsistent across team (#43747)
4. **"OAuth breaks after restart"** — Claude CLI, Anthropic, google-vertex auth state not recovered (#83598, #38327, #125471)
5. **"Windows is second-class"** — EBUSY on SQLite, node.exe zombies, path issues (#119796, #74378, #60612)
6. **"Model-specific regressions"** — DeepSeek V4 Flash, Gemini 3.1 Pro, vLLM thinking mode, VolcEngine (#88657, #38327, #124284, #116691)

### 💡 Use Cases Emerging
- **Multi

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: Personal AI Agent Ecosystem (2026-08-21)

---

## 1. Ecosystem Overview

The open-source personal AI assistant landscape shows **bimodal maturity**: a few large-scale platforms (OpenClaw, Hermes, IronClaw, ZeroClaw) operating at enterprise-grade velocity with 50–500+ daily issue/PR updates, and a long tail of specialized or earlier-stage projects (NanoBot, PicoClaw, NanoClaw, LobsterAI, CoPaw, Moltis) shipping focused improvements at 5–80 daily updates. **No project released a stable version today** — all are in beta, pre-release, or continuous-integration modes. The dominant theme across active projects is **production hardening**: fixing silent data loss, OAuth resilience, Windows compatibility, and provider streaming contracts. Architectural convergence is visible around **multi-provider routing, sandboxed tool execution, session persistence integrity, and cost/governance controls**.

---

## 2. Activity Comparison

| Project | Issues Updated (24h) | PRs Updated (24h) | Merged/Closed PRs | Open PRs | Release Status | Health Score* |
|---------|---------------------|-------------------|-------------------|----------|----------------|---------------|
| **OpenClaw** | 500 | 500 | 140 | 360 | Beta validation (v2026.8.1-beta.2) | 8.5/10 |
| **ZeroClaw** | 50 | 50 | 2 | 50 | None (master-only) | 6.0/10 |
| **Hermes Agent** | 50 | 50 | 4 | 46 | None (last v0.20.4) | 6.5/10 |
| **IronClaw** | 21 | 33 | 14 | 19 | Pre-v1.4.0 integration | 8.0/10 |
| **CoPaw** | 28 | 50 | 28 | 22 | **v2.1.1-beta.1 released** | 8.5/10 |
| **NanoClaw** | ~2 | 50 | 15 | ~35 | None (pre-release sprint) | 7.5/10 |
| **NanoBot** | 5 | 29 | 12 | 17 | None (stabilization) | 7.0/10 |
| **LobsterAI** | 2 | 7 | 6 | 1 | None (polish phase) | 7.5/10 |
| **Moltis** | ~1 | 8 | 4 | 4 | **20260820.01 released** | 7.5/10 |
| **PicoClaw** | 3 | 8 | 3 | 5 | None (maintenance) | 5.5/10 |
| **NullClaw** | 0 | 0 | 0 | 0 | Inactive | — |
| **TinyClaw** | 0 | 0 | 0 | 0 | Inactive | — |
| **ZeptoClaw** | 0 | 0 | 0 | 0 | Inactive | — |

*Health Score: Composite of merge throughput, release cadence, critical bug backlog, CI hygiene, and maintainer responsiveness.

---

## 3. OpenClaw's Position

**Advantages vs Peers:**
- **Scale & Velocity**: 10× the daily issue/PR volume of the next-largest projects (Hermes, ZeroClaw, IronClaw). 500 issues + 500 PRs/24h indicates massive contributor base and automation.
- **Community Engagement**: Top issues have 10–23 comments (vs. 0–10 elsewhere), signaling deep user investment and real-world production usage.
- **Operational Maturity**: Community-driven release validation (#125626 with 17 comments), per-agent cost budgets (#42475, 23 comments), and multi-channel durability (Telegram, HTTP, Slack) are solved at gateway level.

**Technical Approach Differences:**
- **Gateway-Centric Architecture**: Single gateway manages multi-tenant agents, channels, providers, and policies — unlike per-agent runtimes (NanoBot, LobsterAI) or plugin-first models (IronClaw, ZeroClaw).
- **Provider Abstraction as Core**: LiteLLM-style routing with fallback, cost tracking, and OAuth resilience built into the control plane.
- **SQLite-First Persistence**: Heavy reliance on SQLite (with WAL) for session, memory, and task state — creating Windows lock contention (#119796) and corruption risks (#89293 in Hermes) but enabling zero-config deployment.

**Community Size**: Largest by far — 470 open issues, 360 open PRs, and sustained 10+ comment threads indicate hundreds of active operators. Comparable only to Hermes (NousResearch) in absolute numbers, but OpenClaw's issues are more operational than architectural.

---

## 4. Shared Technical Focus Areas

| Requirement | Projects Affected | Specific Needs |
|-------------|-------------------|----------------|
| **Provider Streaming Contract Normalization** | OpenClaw, Hermes, NanoBot, IronClaw, CoPaw | Handling missing `finish_reason` (OpenAI, Nous, Luna), `server_error` mid-stream retries, SSE `[DONE]` sentinel injection |
| **OAuth Resilience & Container Compatibility** | OpenClaw, Hermes, NanoBot, CoPaw, ZeroClaw | Token refresh after restart, Docker redirect URI handling (`localhost` vs host), Codex/Anthropic/Google-Vertex flows |
| **Windows Desktop Reliability** | OpenClaw, Hermes, NanoClaw, ZeroClaw, CoPaw | SQLite EBUSY/handle leaks, Electron rebuild failures, `TaskDialogIndirect` missing, WSL backend reconnection |
| **Session/State Persistence Integrity** | OpenClaw, Hermes, ZeroClaw, IronClaw, Moltis | SQLite corruption under lock storms, snapshot restore guarantees, atomic config writes, WAL contention |
| **Sandboxed Tool Execution & Supply-Chain Security** | IronClaw, ZeroClaw, Moltis, NanoClaw, CoPaw | WASM runtime plugins, egress policies, image validation, Snyk pinning, per-user persistent sandboxes |
| **Cost Governance & Observability** | OpenClaw, ZeroClaw, CoPaw, NanoClaw | Per-agent budgets, token accounting, provider fallback by failure class, usage-cost refresh locks |
| **Multi-Channel Message Durability** | OpenClaw, Hermes, NanoClaw, NanoBot, Moltis | Telegram/Slack/WhatsApp/Matrix outbound retry, dead-letter queues, mention-sticky logic, media mount paths |

---

## 5. Differentiation Analysis

| Project | Primary Focus | Target Users | Architectural Signature |
|---------|---------------|--------------|-------------------------|
| **OpenClaw** | Multi-tenant gateway, enterprise ops | Platform teams, SaaS operators, power users | Centralized gateway + channel adapters + provider mesh; SQLite persistence; CLI + Control UI |
| **Hermes Agent** | Desktop-first autonomous agent | Developers, researchers, local-first users | Electron + WSL backend; kanban/task-driven; session-centric; SQLite WAL |
| **IronClaw** | Extensible automation platform | Enterprise automation, Near ecosystem | Rust core + WASM plugins; capability-based security; design-system WebUI; `iron-proxy` sidecars |
| **ZeroClaw** | Runtime portability & plugin ecosystem | Embeddable agents, swarm orchestration | RFC-driven; WASM component model; ACP transport; decoupled memory/session lifecycles |
| **NanoClaw** | Multi-provider operator tooling | DevOps, multi-channel bot operators | Skill-based; per-group MCP config; Cursor/Slack/WhatsApp/Matrix integrations; `ncl` CLI |
| **CoPaw** | Desktop IDE-like agent experience | Chinese-market developers, Qwen ecosystem | Electron + Console; artifact previews; model routing; skill marketplace; MCP sidecars |
| **NanoBot** | Lightweight multi-channel bot | Self-hosters, Docker operators, MCP integrators | Go core; TUI/WebUI; MCP SDK v2 migration; Matrix/Slack/Telegram native |
| **LobsterAI** | Polish & UX for desktop assistant | End-users, productivity workflows | Electron; Write-tool file cards; settings search; engine startup timeout UX |
| **Moltis** | Secure vault + WhatsApp-first bot | Privacy-focused teams, WhatsApp automation | Go + HTTPD; vault auth; Markdown→WhatsApp rendering; supply-chain hardening |
| **PicoClaw** | Embedded/edge agent framework | IoT, SiPeed hardware, Anthropic-native | Minimal runtime; Anthropic Messages protocol; Web UI; multi-agent WIP archived |

---

## 6. Community Momentum & Maturity

| Tier | Projects | Signals |
|------|----------|---------|
| **Rapidly Iterating (Pre-1.0, High Churn)** | ZeroClaw, Hermes, NanoClaw, IronClaw | 50+ daily updates, RFC-driven design, stacked PRs, architectural refactors in flight, no stable releases |
| **Stabilizing / Beta Cadence** | OpenClaw, CoPaw, NanoBot, LobsterAI | Regular beta releases, merged/closed PR ratio >25%, UX polish + bug fixes dominate, community validation gates |
| **Maintenance / Niche Focus** | Moltis, PicoClaw | Low issue velocity, security/UX fixes, occasional releases, single-maintainer or small team |
| **Inactive** | NullClaw, TinyClaw, ZeptoClaw | Zero 24h activity |

**Key Insight**: The "Rapidly Iterating" tier carries **high technical debt** (ZeroClaw's 307 anti-patterns, Hermes' Windows Desktop crisis, IronClaw's 5 XL PRs awaiting review). The "Stabilizing" tier (OpenClaw, CoPaw) shows **healthier merge throughput** and **release discipline** despite large backlogs.

---

## 7. Trend Signals for AI Agent Developers

| Trend | Evidence | Strategic Value |
|-------|----------|-----------------|
| **Gateway/Control-Plane Centralization** | OpenClaw's per-agent budgets, NanoClaw's per-group MCP, IronClaw's `iron-proxy` sidecars | Build **multi-tenancy and policy enforcement at the infrastructure layer**, not per-agent |
| **WASM Component Model for Plugins** | ZeroClaw (ADR-014), IronClaw (wasm typed tools), CoPaw (MCP sidecars), NanoClaw (per-group containers) | **Standardize on WASM Components** for tool/channel/skill portability — avoid proprietary plugin APIs |
| **ACP (Agent Communication Protocol) Adoption** | OpenClaw (#50798), ZeroClaw (#9487), Hermes (kanban peer tasks), NanoBot (MCP v2) | **Design for ACP interop** — session steering, agent-to-agent messaging, transport adapters |
| **Cost & Safety as First-Class Primitives** | OpenClaw (#42475), ZeroClaw (#7155), CoPaw (#7182), NanoClaw (#3270) | **Embed token budgets, shell allow/ask/deny, and provider fallback in core runtime** — not external tooling |
| **Windows as a First-Class Target** | OpenClaw (#119796), Hermes (5+ Desktop issues), ZeroClaw (#10111), CoPaw (#6974) | **Invest in Windows CI, SQLite handle hygiene, Electron rebuild resilience** — it's a blocker for enterprise adoption |
| **Session Persistence = Durability + Observability** | OpenClaw (#113306), Hermes (#89293), ZeroClaw (#6850), Moltis (vault auth) | **Treat session state as a distributed systems problem**: WAL, snapshots, crash recovery, audit logs |
| **Model Routing Abstraction** | OpenClaw (#47910), CoPaw (#6436), IronClaw (#7491), ZeroClaw (provider abstraction) | **Build provider-agnostic routing with failure-class fallback** — not hardcoded model lists |

---

**Bottom Line for Decision-Makers**:  
- **For platform builders**: OpenClaw and IronClaw demonstrate the most mature gateway/control-plane patterns.  
- **For embeddable agents**: ZeroClaw's RFC-driven WASM/ACP architecture is the furthest along, but delivery risk is high.  
- **For desktop/product teams**: CoPaw and LobsterAI show the fastest UX iteration cycles with real release cadence.  
- **Critical gap**: No project has solved **cross-platform SQLite durability** or **provider streaming normalization** comprehensively — these are ecosystem-level opportunities.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-08-21

## 1. Today's Overview
NanoBot shows **high development velocity** with 29 pull requests and 5 issues updated in the last 24 hours. The project is in active maintenance mode with a healthy ratio of merged/closed PRs (12) to open ones (17). No new release was published today, but the volume of fixes—especially around provider reliability, MCP integration, and multi-channel dispatch—suggests a stabilization push. Community engagement remains modest (few comments/reactions), indicating contributors are primarily core maintainers.

## 2. Releases
**No new releases today.** The last published version is not in the provided data. The current merge activity (12 PRs closed/merged) likely feeds into an upcoming patch or minor release focused on stability and provider hardening.

---

## 3. Project Progress — Merged / Closed PRs Today
| PR | Title | Area | Impact |
|----|-------|------|--------|
| [#5425](https://github.com/HKUDS/nanobot/issues/5425) | Support legacy `socks://` proxy URLs for custom OpenAI-compatible providers | Providers / Networking | Fixes a regression where `socks://` proxy aliases caused pre-request failures. |
| [#5447](https://github.com/HKUDS/nanobot/issues/5447) | Paid security-scan MCP integration (ScanPay x402) | MCP / Integrations | Closed (likely not merged); external integration proposal. |
| [#5452](https://github.com/HKUDS/nanobot/pull/5452) | feat(tui): print resume command on exit | TUI / UX | Improves session recoverability; prints ready-to-run `nanobot agent --session websocket:<id>`. |
| [#5240](https://github.com/HKUDS/nanobot/pull/5240) | refactor(webui): unify floating controls | WebUI / UI | Centralizes floating-surface styling; standardizes menus, popovers, comboboxes. |
| [#1203](https://github.com/HKUDS/nanobot/pull/1203) | fix(cli): workaround 'Event loop is closed' on Linux | CLI / Runtime | Long-standing shutdown crash workaround finally closed (opened Feb 2026). |
| *7 other PRs closed/merged* | Various fixes (deps, logging, background tasks, etc.) | Cross-cutting | Incremental stability improvements. |

**Net progress:** Provider proxy handling, TUI session recovery, WebUI component hygiene, and a years-old Linux event-loop crash are resolved.

---

## 4. Community Hot Topics (Most Active Issues/PRs)
| Item | Type | Comments | Core Need |
|------|------|----------|-----------|
| [#5420](https://github.com/HKUDS/nanobot/pull/5420) | PR | *undefined* (high churn) | **Turn observability & safe recovery** in WebUI—projects each user turn into an answer surface while preserving reasoning/tool traces. Critical for debugging long agent runs. |
| [#5179](https://github.com/HKUDS/nanobot/pull/5179) | PR | *undefined* | **MCP SDK v2 migration** with legacy compatibility. Large refactor; maintainers evaluating cost/benefit vs. minimal migration [#5180](https://github.com/HKUDS/nanobot/pull/5180). |
| [#5379](https://github.com/HKUDS/nanobot/pull/5379) | PR | *undefined* | **Memory consolidation fix**—preserves full input across bounded `history.jsonl` entries. Addresses data-loss risk during context compaction. |
| [#5444](https://github.com/HKUDS/nanobot/issues/5444) | Issue | 1 | **OpenAI OAuth login fails in Docker**—redirect URL handling broken in containerized deployments. Blocks cloud/self-hosted users. |
| [#5459](https://github.com/HKUDS/nanobot/issues/5459) | Issue | 0 | **Native Google Vertex AI provider for Claude**—first-class support requested; currently only Anthropic direct, Bedrock, etc. |

**Underlying theme:** Operators want **production-grade observability, reliable MCP tooling, and broader cloud-provider choice**—especially for enterprise (Vertex) and containerized (Docker OAuth) environments.

---

## 5. Bugs & Stability — Ranked by Severity
| Severity | Issue / PR | Description | Fix PR Exists? |
|----------|------------|-------------|----------------|
| **High** | [#5444](https://github.com/HKUDS/nanobot/issues/5444) | OpenAI OAuth login fails in Docker (redirect URL `localhost:1455` unreachable in container) | No |
| **High** | [#5454](https://github.com/HKUDS/nanobot/issues/5454) | Streaming providers skip retry on `server_error` after content has streamed | **Yes** – [#5455](https://github.com/HKUDS/nanobot/pull/5455) adds `"server_error"` to transient markers |
| **Medium** | [#5458](https://github.com/HKUDS/nanobot/pull/5458) | Matrix error logs use `%s` instead of `{}` placeholders (Loguru), losing context | **Yes** – PR open |
| **Medium** | [#5414](https://github.com/HKUDS/nanobot/pull/5414) | Slack file downloads not validated across redirects (SSRF risk) | **Yes** – PR open |
| **Medium** | [#5413](https://github.com/HKUDS/nanobot/pull/5413) | Provider exceptions bypass fallback policy (expected `LLMResponse` with `finish_reason="error"`) | **Yes** – PR open |
| **Low** | [#5457](https://github.com/HKUDS/nanobot/pull/5457) | Channel dispatcher exception boundary too wide—one bad message stops all outbound delivery | **Yes** – PR open |

**Takeaway:** Two high-severity bugs affect core auth (Docker OAuth) and streaming reliability; fixes exist for streaming but not yet for OAuth.

---

## 6. Feature Requests & Roadmap Signals
| Request | Source | Likelihood for Next Version |
|---------|--------|-----------------------------|
| **Native Google Vertex AI provider for Claude** | [#5459](https://github.com/HKUDS/nanobot/issues/5459) | Medium—new provider [#5453](https://github.com/HKUDS/nanobot/pull/5453) (SenseNova) merged same day shows provider additions are flowing. |
| **MCP SDK v2 migration** | [#5179](https://github.com/HKUDS/nanobot/pull/5179), [#5180](https://github.com/HKUDS/nanobot/pull/5180) | High—two competing PRs under evaluation; minimal migration path being tested. |
| **Turn observability & safe recovery (WebUI)** | [#5420](https://github.com/HKUDS/nanobot/pull/5420) | High—large PR, addresses core debugging pain. |
| **Reusable Telegram sticker replies** | [#5387](https://github.com/HKUDS/nanobot/pull/5387) | Low—niche channel enhancement. |
| **Print resume command on TUI exit** | [#5452](https://github.com/HKUDS/nanobot/pull/5452) | **Done**—merged today. |

**Prediction:** Next release will likely include SenseNova provider, streaming retry fix, TUI resume command, and assorted stability patches. MCP v2 migration decision pending.

---

## 7. User Feedback Summary
| Pain Point | Evidence | Sentiment |
|------------|----------|-----------|
| **Docker OAuth broken** | [#5444](https://github.com/HKUDS/nanobot/issues/5444) — "Failed to login OpenAI via OAuth in Docker" | 😠 Frustrated (blocks containerized deployments) |
| **Streaming reliability** | [#5454](https://github.com/HKUDS/nanobot/issues/5454) — mid-stream `server_error` not retried | 😟 Concerned (silent failures in long generations) |
| **MCP tooling maturity** | [#5447](https://github.com/HKUDS/nanobot/issues/5447) — external paid scanner integration attempt | 🤔 Exploratory (users building businesses on NanoBot) |
| **Memory consolidation data loss** | [#5379](https://github.com/HKUDS/nanobot/pull/5379) — fix preserves full input | 🛠️ Proactive (maintainers fixing before reports) |
| **WebUI debugging difficulty** | [#5420](https://github.com/HKUDS/nanobot/pull/5420) — turn observability PR | 💡 Strong demand (core UX gap) |

**Overall:** Users are pushing NanoBot into **production/containerized/enterprise** scenarios and hitting edges in auth, streaming, and observability. Maintainers are responsive with fixes.

---

## 8. Backlog Watch — Stale / High-Impact Items Needing Attention
| Item | Age | Why It Matters | Status |
|------|-----|----------------|--------|
| [#5179](https://github.com/HKUDS/nanobot/pull/5179) / [#5180](https://github.com/HKUDS/nanobot/pull/5180) | 22 days | MCP SDK v2 migration—architectural decision blocking ecosystem compatibility | Open, conflicting, needs maintainer ruling |
| [#1203](https://github.com/HKUDS/nanobot/pull/1203) | ~6 months | Linux event-loop shutdown crash workaround | **Closed today** (finally) |
| [#5444](https://github.com/HKUDS/nanobot/issues/5444) | 2 days | Docker OAuth broken—high impact for self-hosters | Open, no fix PR |
| [#5420](https://github.com/HKUDS/nanobot/pull/5420) | 3 days | WebUI turn observability—large UX/refactor PR | Open, needs review |
| [#5379](https://github.com/HKUDS/nanobot/pull/5379) | 8 days | Memory consolidation fix—data integrity | Open, has conflict label |

**Action items for maintainers:**
1. **Triage #5444** (Docker OAuth) — high user impact, no PR yet.
2. **Decide on MCP v2 migration** (#5179 vs #5180) — blocking contributor effort.
3. **Review #5420** (WebUI observability) — flagship UX improvement.
4. **Merge streaming retry fix #5455** — already addresses #5454.

---

*Digest generated from GitHub data as of 2026-08-21. All links point to live HKUDS/nanobot issues/PRs.*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-08-21

## 1. Today's Overview

Hermes Agent shows **high maintenance velocity** with 50 issues and 50 PRs updated in the last 24 hours, but **no new release** has been cut. The project is in a heavy bug-fix and stabilization phase, particularly around **Windows Desktop update reliability**, **session persistence integrity**, and **provider streaming compatibility**. Open PRs (46) significantly outnumber merged/closed (4), suggesting a backlog of fixes awaiting review. The top issue (#66616, 66 comments) is an automated skills-index freshness alert, indicating operational debt in documentation pipelines.

---

## 2. Releases

**No new releases today.** The last version remains v0.20.4 (2026-08-18). Several merged PRs (#91195, #91178, #91176, #90929) are bug fixes that would typically ship in a patch release.

---

## 3. Project Progress (Merged/Closed PRs Today)

| PR | Title | Impact |
|----|-------|--------|
| [#91195](https://github.com/NousResearch/hermes-agent/pull/91195) | **fix(cli): keep resumed session cwd precedence consistent** | Restores correct working-directory precedence on session resume (explicit `--in` > inherited `TERMINAL_CWD` > saved CWD). Closed. |
| [#91178](https://github.com/NousResearch/hermes-agent/pull/91178) | **kanban task created with `--initial-status blocked` is promoted and spawned** | Duplicate fix: blocked tasks no longer auto-promote on gateway tick. |
| [#91176](https://github.com/NousResearch/hermes-agent/pull/91176) | **zai provider resolves glm-5.3 context to 202752 (models.dev catalog mismatch)** | Duplicate fix: corrects model context window for Z.ai provider. |
| [#90929](https://github.com/NousResearch/hermes-agent/pull/90929) | **Entire Environment Just Spun Down** | Closed as needs-repro; user reported full environment shutdown during data migration. |

---

## 4. Community Hot Topics (Most Active Issues/PRs)

| Item | Comments | Core Need |
|------|----------|-----------|
| [#66616](https://github.com/NousResearch/hermes-agent/issues/66616) **Skills index stale/degraded** | 66 🤖 | Automated doc pipeline (skills-index.yml cron) is 29.8h behind its 26h SLA. Blocks `/docs/skills` freshness. |
| [#75801](https://github.com/NousResearch/hermes-agent/issues/75801) **OpenCode Go gpt-5.6-luna omits `finish_reason`** | 7 👍1 | Luna streams complete answer but closes SSE without `finish_reason`; desktop treats as mid-stream drop → 4 fake continuations, strips answer. |
| [#86443](https://github.com/NousResearch/hermes-agent/issues/86443) **`hermes update` deletes Desktop app on Windows rebuild failure** | 6 | Clean step deletes `Hermes.exe` before rebuild; if rebuild fails, machine left with **no executable** while update exits 0. |
| [#88683](https://github.com/NousResearch/hermes-agent/issues/88683) **Architecture: transactional deployment plan** | 4 | Multiple independent install/update/bootstrap paths drift; need single source of truth for desired deployment state. |
| [#90866](https://github.com/NousResearch/hermes-agent/issues/90866) **Observable state proof-carrying** | 4 | Architectural follow-up: make state observable, source-qualified, atomically published, owner-scoped, verified in artifacts. |
| [#91122](https://github.com/NousResearch/hermes-agent/pull/91122) **Cap runaway delegation / fail closed on Codex stop** | — | Per-turn `max_subagents: 50` resets each turn → 17 sequential review batches burned Codex allowance without checkpoint. |
| [#91189](https://github.com/NousResearch/hermes-agent/pull/91189) **Append SSE `[DONE]` when Nous streams omit sentinel** | — | Nous Portal free-model streams (LongCat, Solar) close without `data: [DONE]`; strict clients treat as truncated. |

**Underlying themes:**  
- **Windows Desktop update is a reliability crisis** (3+ issues, 4+ PRs).  
- **Provider streaming contracts are diverging** (OpenAI, Anthropic, Nous, Z.ai) — Hermes must normalize.  
- **Session state persistence** (SQLite WAL, corruption, error swallowing) is a recurring source of data loss.  
- **Architecture drift** in install/update/bootstrap paths is acknowledged as a root cause class.

---

## 5. Bugs & Stability (Ranked by Severity)

| Severity | Issue | Status | Fix PR |
|----------|-------|--------|--------|
| **P0** | [#91164](https://github.com/NousResearch/hermes-agent/issues/91164) `gpt-5.6` family: `prompt_cache_retention` → 400 `invalid_parameter`, non-retryable dead turn | Open | — |
| **P0** | [#90971](https://github.com/NousResearch/hermes-agent/issues/90971) `apply_anthropic_cache_control` not idempotent on pre-decorated input | Open | — |
| **P1** | [#75801](https://github.com/NousResearch/hermes-agent/issues/75801) Luna omits `finish_reason` → desktop strips streamed answer | Open | — |
| **P1** | [#85079](https://github.com/NousResearch/hermes-agent/issues/85079) `returned NULL without setting an exception` on contended WAL append | Open | — |
| **P1** | [#89293](https://github.com/NousResearch/hermes-agent/issues/89293) `state.db` corruption ×3 in 8 days (lock storm + restart-in-window + journal_mode reverted) | Open | — |
| **P2** | [#86443](https://github.com/NousResearch/hermes-agent/issues/86443) `hermes update` deletes Desktop app on Windows rebuild failure | Open | [#87879](https://github.com/NousResearch/hermes-agent/pull/87879), [#91193](https://github.com/NousResearch/hermes-agent/pull/91193) |
| **P2** | [#44225](https://github.com/NousResearch/hermes-agent/issues/44225) Electron rebuild failure → `Hermes.exe` deleted, shortcut dead | Open | [#87879](https://github.com/NousResearch/hermes-agent/pull/87879), [#91193](https://github.com/NousResearch/hermes-agent/pull/91193) |
| **P2** | [#73379](https://github.com/NousResearch/hermes-agent/issues/73379) `hermes update` orphans non-systemd dashboard (tmux respawn loop) | Open | [#89793](https://github.com/NousResearch/hermes-agent/pull/89793) |
| **P2** | [#90493](https://github.com/NousResearch/hermes-agent/issues/90493) Session persistence swallows real SQLite error (corruption → generic message) | Open | — |
| **P2** | [#90829](https://github.com/NousResearch/hermes-agent/issues/90829) Daily Desktop update fails: win32-x64 fail-closed gate + corrupted `node_modules` | Open | [#82355](https://github.com/NousResearch/hermes-agent/pull/82355), [#91188](https://github.com/NousResearch/hermes-agent/pull/91188) |
| **P2** | [#90477](https://github.com/NousResearch/hermes-agent/issues/90477) Desktop profile switch on SSH spawns LOCAL backend, falls back to wrong profile | Open | — |
| **P2** | [#90795](https://github.com/NousResearch/hermes-agent/issues/90795) Re-entrant `useSyncExternalStore` in `@assistant-ui/tap` → "workspace" render crash | Open | — |
| **P2** | [#91122](https://github.com/NousResearch/hermes-agent/pull/91122) Runaway delegation burns Codex allowance (per-turn cap resets) | Open PR | **#91122** |
| **P2** | [#90906](https://github.com/NousResearch/hermes-agent/issues/90906) Windows: `hermes update` reports "up to date" but venv stays on old Python/SQLite | Open | — |
| **P3** | [#66616](https://github.com/NousResearch/hermes-agent/issues/66616) Skills index 29.8h stale (cron SLA 26h) | Open | — |
| **P3** | [#90134](https://github.com/NousResearch/hermes-agent/issues/90134) Desktop build fails `blockmap.js` on Windows | Open | — |
| **P3** | [#90237](https://github.com/NousResearch/hermes-agent/issues/90237) Desktop breaks Windows Snap/FancyZones (`transparent: true` unconditional on Win11 22H2+) | Open | — |
| **P3** | [#91021](https://github.com/NousResearch/hermes-agent/issues/91021) Desktop relaunch after update fails to reconnect to WSL backend | Open | — |
| **P3** | [#90932](https://github.com/NousResearch/hermes-agent/issues/90932) Install stalls on "Downloading Chrome for Testing 145.0.7632.6" | Open | — |

**Note:** Multiple fix PRs exist for the Windows Desktop update deletion bug (#87879, #91193, #91196), but none merged yet. The session persistence / SQLite corruption cluster (#85079, #89293, #90493) has no fix PRs visible today.

---

## 6. Feature Requests & Roadmap Signals

| Issue/PR | Signal | Likelihood for Next Version |
|----------|--------|----------------------------|
| [#88683](https://github.com/NousResearch/hermes-agent/issues/88683) Transactional deployment plan (install/update/bootstrap) | Architectural refactor to eliminate drift | Medium — design discussion, no implementation PR yet |
| [#90866](https://github.com/NousResearch/hermes-agent/issues/90866) Proof-carrying observable state | Formalize state contracts across components | Medium — follow-up to recent incident fixes |
| [#91199](https://github.com/NousResearch/hermes-agent/pull/91199) Loopback OpenAI Codex OAuth adapter | Native Codex auth proxy (Responses API only, 401 refresh, 429 rotation) | High — PR open, addresses #65346 (OAuth token invalidation) |
| [#91192](https://github.com/NousResearch/hermes-agent/pull/91192) A2A named-peer authorization for local operator tasks | Trusted-operator tier for peer delegation | Medium — config-only, fail-closed, new capability |
| [#91200](https://github.com/NousResearch/hermes-agent/pull/91200) Show standing goals carried through compression | User visibility into autonomous goal migration | High — small UI addition, PR open |
| [#91194](https://github.com/NousResearch/hermes-agent/pull/91194) Structured run provenance contract v1.0.0/v1.1.0 | Auditability for kanban/cron runs | High — docs-only, frozen contract |
| [#90287](https://github.com/NousResearch/hermes-agent/issues/90287) Peer + broadcast session steering (`steer_peer`/`steer_broadcast`) | Multi-subagent coordination primitives | Low — needs design decision, closed as duplicate |

**Predicted next-release candidates:** #91199 (Codex OAuth), #91200 (goals notice), #91194 (provenance docs), #91195 (cwd fix), plus the Windows Desktop update fixes once reviewed.

---

## 7. User Feedback Summary

| Pain Point | Evidence | Frequency |
|------------|----------|-----------|
| **Windows Desktop update destroys app** | #86443, #44225, #90829, #90134, #91021 | 5 issues, multiple users |
| **Session/db corruption → data loss + manual recovery** | #89293

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-08-21

## 1. Today's Overview
PicoClaw shows **low feature velocity but active maintenance** over the past 24 hours. No new releases were cut. The 3 updated issues are all marked `[stale]` and date back to July–August, indicating they have not received recent maintainer engagement. Of the 8 PR updates, 3 were closed/merged (two long-running feature PRs and one lockfile fix), while 5 are automated Dependabot dependency bumps awaiting review. Overall project health appears stable but the backlog of stale issues and open PRs suggests maintainer bandwidth constraints.

## 2. Releases
**None** — No new versions published today.

## 3. Project Progress (Merged / Closed PRs)
| PR | Title | Status | Impact |
|----|-------|--------|--------|
| [#1158](https://github.com/sipeed/picoclaw/pull/1158) | `feat: add anthropic-messages protocol for native Anthropic API format` | **Closed** | Enables compatibility with Anthropic-native `/v1/messages` endpoints (fixes #269). Expands provider support. |
| [#423](https://github.com/sipeed/picoclaw/pull/423) | `WIP: feat: base multi-agent collaboration framework & shared context` | **Closed** | Major WIP for multi-agent (blackboard, handoff, discovery). Closed without merge — likely superseded or archived. |
| [#3318](https://github.com/sipeed/picoclaw/pull/3318) | `fix(web): repair unparseable pnpm-lock.yaml` | **Closed** | Fixes duplicate `semver@7.8.5` key breaking `pnpm install`. Critical for web frontend builds. |

> **Note:** Two significant feature PRs (#1158, #423) were closed today — one merged (Anthropic protocol), one abandoned (multi-agent WIP).

## 4. Community Hot Topics
| Item | Type | Comments | 👍 | Signal |
|------|------|----------|----|--------|
| [#3281](https://github.com/sipeed/picoclaw/issues/3281) | **Bug** | 6 | 1 | Web UI input lag with growing chat history — usability regression affecting core chat loop. |
| [#3331](https://github.com/sipeed/picoclaw/issues/3331) | **Feature** | 1 | 0 | Request to support arbitrary models for `/audio/transcriptions` (not just `*-whisper-*`). |
| [#3330](https://github.com/sipeed/picoclaw/issues/3330) | **Feature** | 1 | 0 | Dynamic model override for `delegate`/`spawn`/`subagent` tools — key for flexible multi-agent workflows. |

**Underlying needs:**  
- **#3281** reveals a frontend performance bottleneck (likely virtualization or state management) that degrades UX as sessions grow.  
- **#3331** and **#3330** both point to **rigid model binding** — users want runtime model selection for ASR and sub-agents, signaling maturation toward production multi-agent pipelines.

## 5. Bugs & Stability
| Severity | Issue | Description | Fix PR? |
|----------|-------|-------------|---------|
| **High** | [#3281](https://github.com/sipeed/picoclaw/issues/3281) | Web UI chat input becomes “very laggy” with moderate history length. Blocks core interaction. | No |
| **Medium** | [#3318](https://github.com/sipeed/picoclaw/pull/3318) | `pnpm-lock.yaml` duplicate key breaks CI/frontend installs. | **Fixed & Closed** |

No new crash reports or regressions filed today.

## 6. Feature Requests & Roadmap Signals
| Request | Issue | Likelihood for Next Version |
|---------|-------|-----------------------------|
| **Arbitrary ASR model support** (non-Whisper) | [#3331](https://github.com/sipeed/picoclaw/issues/3331) | **High** — small config flag (`whisper-transcription: true`), low risk, high user value. |
| **Dynamic model override in agent tools** (`delegate`/`spawn`/`subagent`) | [#3330](https://github.com/sipeed/picoclaw/issues/3330) | **Medium** — requires tool schema + runtime changes; aligns with multi-agent direction but more invasive. |
| **Multi-agent collaboration framework** | [#423](https://github.com/sipeed/picoclaw/pull/423) (closed) | **Low** — PR closed unmerged; may be re-scoped or deferred. |

## 7. User Feedback Summary
- **Pain point:** Web UI becomes unusably slow during extended chat sessions (#3281, 6 comments, 1 👍). Users hit this in real workflows.
- **Use case:** Teams want to plug in modern ASR models (e.g., `faster-whisper`, `whisper.cpp`, proprietary) without filename hacks (#3331).
- **Use case:** Agent orchestration requires per-invocation model selection — e.g., cheap model for delegation, strong model for synthesis (#3330).
- **Satisfaction:** Anthropic native API support landed (#1158) — positive signal for provider extensibility.

## 8. Backlog Watch (Stale / Needs Maintainer Attention)
| Item | Age | Why It Matters |
|------|-----|----------------|
| [#3281](https://github.com/sipeed/picoclaw/issues/3281) | 31 days | High-impact UX bug; no fix PR, no maintainer comment in 10 days. |
| [#3331](https://github.com/sipeed/picoclaw/issues/3331) | 8 days | Clear, scoped feature; easy win for ASR flexibility. |
| [#3330](https://github.com/sipeed/picoclaw/issues/3330) | 8 days | Strategic for agent workflows; needs design input. |
| [#3332–#3336](https://github.com/sipeed/picoclaw/pulls?q=is%3Apr+is%3Aopen+author%3Adependabot%5Bbot%5D) | 8 days | 5 Dependabot PRs (AWS, Anthropic, Matrix SDKs) — routine but unmerged; risk of drift. |
| [#423](https://github.com/sipeed/picoclaw/pull/423) | 184 days | Multi-agent WIP closed; if roadmap still valid, needs re-opening or replacement. |

---

**Bottom line:** PicoClaw is maintaining dependencies and fixing build blockers, but **core UX (#3281) and extensibility (#3331, #3330) issues are stagnant**. The closed multi-agent PR (#423) suggests architectural work may be stalled. Prioritizing the Web UI lag fix and the two feature requests would unblock both daily users and advanced agent builders.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-08-21

## 1. Today's Overview
NanoClaw shows **high core-team velocity** with 50 PRs updated in 24 hours (15 merged/closed), but **zero new releases** — indicating a heavy integration/refactor sprint rather than a ship cycle. Two fresh issues (#3369, #3369) and one long-standing WhatsApp media bug (#2715) remain open, while a critical `engage_mode='always'` regression (#2606) was closed today. Activity is concentrated on **provider/channel integrations** (Slack, WhatsApp, Matrix, Cursor, Tavily, Ollama) and **operator tooling** (dashboard, macOS statusbar, scheduling), suggesting the project is hardening v2 multi-provider runtime before a release cut.

## 2. Releases
**No new releases** in the last 24 hours. The project appears to be in a pre-release stabilization window with numerous stacked PRs (many atop #3408) targeting integration correctness and operational tooling.

---

## 3. Project Progress — Merged/Closed PRs Today (15)
| PR | Type | Summary | Link |
|----|------|---------|------|
| #3421 | Announcement/Docs | One-click Slack agent setup banner + flow | [#3421](https://github.com/qwibitai/nanoclaw/pull/3421) |
| #1311 | Feature (old) | Create new session — closed after 5 months | [#1311](https://github.com/qwibitai/nanoclaw/pull/1311) |
| #2606 | Bug Fix | `engage_mode='always'` silent drop — root cause in `evaluateEngage()` | [#2606](https://github.com/qwibitai/nanoclaw/issues/2606) |

*Note: 12 additional PRs closed/merged today are not individually listed in the feed; most appear to be follow-up fixes on integration skills (see Backlog Watch).*

**Key advances:**  
- **Slack onboarding** now documented as one-click (PR #3421)  
- **Critical routing bug** fixed: `engage_mode='always'` now handled in router (Issue #2606)  
- **Legacy session-creation PR** finally closed (#1311), reducing backlog noise

---

## 4. Community Hot Topics
| Item | Type | Activity | Core Need | Link |
|------|------|----------|-----------|------|
| **#3369** | Issue (new) | 0 comments, created & updated today | `mention-sticky` + `accumulate` causes false-positive thread subscriptions on Slack — agent replies without being mentioned | [#3369](https://github.com/qwibitai/nanoclaw/issues/3369) |
| **#3422** | PR (fix) | 0 comments, created today | Direct fix for #3369: subscribe only on actual mention, not on session creation via `accumulate` | [#3422](https://github.com/qwibitai/nanoclaw/pull/3422) |
| **#2715** | Issue (old) | 1 comment, open since June | WhatsApp inbound media saved to unmounted host path — agent cannot read images/docs/audio | [#2715](https://github.com/qwibitai/nanoclaw/issues/2715) |
| **#3247** | PR (fix) | Updated today, created 6 days ago | Malformed cron strings (e.g., `21-5` hour wrap) cause repeated parse errors every scheduler tick | [#3247](https://github.com/qwibitai/nanoclaw/pull/3247) |

**Analysis:** The Slack `mention-sticky` regression (#3369/#3422) is the **only net-new bug** today and has a same-day fix PR — strong signal of responsive triage. The WhatsApp media mount issue (#2715) persists for 74 days, indicating a deeper architectural blocker (container volume mapping).

---

## 5. Bugs & Stability — Ranked by Severity
| Severity | Issue/PR | Description | Fix Status |
|----------|----------|-------------|------------|
| **Critical** | [#2715](https://github.com/qwibitai/nanoclaw/issues/2715) | WhatsApp inbound media unreachable — files saved to host `DATA_DIR/attachments` but agent expects `/workspace/attachments/` inside container. **Blocks all media processing for WhatsApp agents.** | ❌ No fix PR visible |
| **High** | [#3369](https://github.com/qwibitai/nanoclaw/issues/3369) | `mention-sticky` + `accumulate` creates phantom subscriptions — agent replies in unmentioned Slack threads. **Causes spam/false positives.** | ✅ Fix PR [#3422](https://github.com/qwibitai/nanoclaw/pull/3422) open |
| **High** | [#2606](https://github.com/qwibitai/nanoclaw/issues/2606) | `engage_mode='always'` silently drops all messages (`no_agent_engaged`). **Routing logic missing case.** | ✅ Closed today (fix implied) |
| **Medium** | [#3247](https://github.com/qwibitai/nanoclaw/pull/3247) | Malformed cron (wrap ranges) causes error spam every scheduler sweep — row never retired. | ✅ Fix PR open |
| **Medium** | [#3403](https://github.com/qwibitai/nanoclaw/pull/3403) | Matrix adapter ESM imports fail on Node 22 (extensionless imports). | ✅ Fix PR open (pnpm patch) |
| **Medium** | [#3423](https://github.com/qwibitai/nanoclaw/pull/3423) | `/add-slack` missing `app_mentions:read` scope — breaks mention events. | ✅ Fix PR open |

---

## 6. Feature Requests & Roadmap Signals
| Signal | Source | Likelihood for Next Version |
|--------|--------|----------------------------|
| **Cursor Agent SDK provider** | PRs [#3355](https://github.com/qwibitai/nanoclaw/pull/3355), [#3356](https://github.com/qwibitai/nanoclaw/pull/3356) | 🟢 **High** — core-team, stacked, includes setup skill + payload |
| **One-click Slack agent provisioning** | PR [#3421](https://github.com/qwibitai/nanoclaw/pull/3421) | 🟢 **High** — announcement-ready, stacked on flip #3404 |
| **`add-why` diagnostic skill** | PR [#3189](https://github.com/qwibitai/nanoclaw/pull/3189) | 🟡 **Medium** — utility skill to explain message routing decisions |
| **Tavily search tool integration** | PR [#3418](https://github.com/qwibitai/nanoclaw/pull/3418) | 🟡 **Medium** — audit fixes on existing skill (smoke test, idempotency) |
| **Ollama / Atomic Chat / clidash per-group MCP config** | PRs [#3414](https://github.com/qwibitai/nanoclaw/pull/3414)–[#3416](https://github.com/qwibitai/nanoclaw/pull/3416) | 🟡 **Medium** — refactors to per-group `container_configs` MCP seam |
| **macOS statusbar slug-aware labels** | PR [#3420](https://github.com/qwibitai/nanoclaw/pull/3420) | 🟡 **Medium** — fixes hardcoded bundle IDs for multi-install |

**Prediction:** Next release will be **v2.1 "Multi-Provider Ops"** — Cursor provider, Slack one-click, and a batch of MCP/config fixes for tool skills. WhatsApp media fix (#2715) is the wildcard; if unresolved, may slip to patch.

---

## 7. User Feedback Summary
| Pain Point | Evidence | Impact |
|------------|----------|--------|
| **WhatsApp media broken** | #2715 (74 days open) — "agent cannot open images/documents/audio" | **High** — blocks production WhatsApp agents |
| **Slack mention logic unreliable** | #3369 — agent replies without mention due to `accumulate` side effect | **Medium** — erodes trust in `mention-sticky` mode |
| **Cron scheduling fragility** | #3247 — hand-written wrap ranges crash scheduler repeatedly | **Low-Medium** — affects advanced scheduling users |
| **Node 22 compatibility** | #3403 — Matrix adapter fails on current LTS | **Medium** — blocks upgrades |
| **Setup flow gaps** | #3423 — missing Slack scope in documented steps | **Low** — onboarding friction |

**No explicit positive feedback** in today's feed; activity is maintainer-driven. The volume of "audit verdict" PRs (#3414–#3418) suggests **internal dogfooding revealed widespread config drift** in tool skills — a sign the team is hardening before wider adoption.

---

## 8. Backlog Watch — Stale / Needing Attention
| Item | Age | Why It Matters | Link |
|------|-----|----------------|------|
| **#2715** WhatsApp media mount mismatch | 74 days | **Only open critical bug** — container volume contract broken for most-used media channel | [#2715](https://github.com/qwibitai/nanoclaw/issues/2715) |
| **#3189** `add-why` diagnostic skill | 16 days | Utility skill for observability — helps users debug routing; stalled at 0 comments | [#3189](https://github.com/qwibitai/nanoclaw/pull/3189) |
| **#3270** `ncl token usage` feature | 5 days | Token accounting for cost control — core-team authored but no review movement | [#3270](https://github.com/qwibitai/nanoclaw/pull/3270) |
| **#3247** Cron malformed-string retirement | 6 days | Fix ready but unmerged — prevents scheduler error storms | [#3247](https://github.com/qwibitai/nanoclaw/pull/3247) |
| **Stacked PRs on #3408** (12 PRs) | 1 day | Massive refactor batch — all depend on #3408 merge; risk of merge conflicts if delayed | Search `Stacked on #3408` |

**Maintainer action recommended:**  
1. **Triage #2715** — assign container-volume owner; this is a v2 blocker.  
2. **Merge #3422** — trivial fix for net-new Slack regression.  
3. **Land #3408** — unblocks 12 downstream skill fixes.  
4. **Review #3189/#3270** — high-value observability features aging without review.

---

**Project Health Score: 7.5/10**  
*Strong velocity, responsive triage on new regressions, but one critical long-standing bug (#2715) and a large stacked-PR dependency chain (#3408) create release risk.*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-08-21

## 1. Today's Overview
IronClaw shows **high velocity with 54 total updates** (21 issues, 33 PRs) in the last 24 hours, reflecting a mature project in active feature development and stabilization. The merge rate is strong (14 PRs closed/merged vs 19 open), with major workstreams converging on v1.4.0 milestones: persistent per-user sandbox infrastructure (#7732), agent lifecycle hooks (#7770), and the multi-phase WebUI design system (#7038/#7781/#7782). CI stability received immediate attention after Rust 1.98 introduced clippy regressions (#7777, #7778). No releases shipped today.

## 2. Releases
**No new releases** published in the last 24 hours. The project appears to be in a pre-release integration phase for v1.4.0 epics.

## 3. Project Progress — Merged/Closed PRs Today
| PR | Scope | Summary |
|----|-------|---------|
| [#7729](https://github.com/nearai/ironclaw/pull/7729) | Automations, XL | **feat(automations): add run-now** — manual fire capability across trigger domain, product surface, WebUI API, and UI; closes #7193 |
| [#7777](https://github.com/nearai/ironclaw/pull/7777) | CI, M | **fix(ci): clear clippy 1.98 lint cascade** — unblocks merge queue |
| [#7778](https://github.com/nearai/ironclaw/pull/7778) | Lints, M | **fix(lints): Rust 1.98 clippy migration** — workspace clean under 1.98 |
| [#7786](https://github.com/nearai/ironclaw/pull/7786) | Assistant, XS | **fix(assistant): unbreak suggestion generation on OpenAI** — `uniqueItems` strict validation, dead allowlist IDs, gate cards on connected extensions |
| [#7738](https://github.com/nearai/ironclaw/pull/7738) | Slack, S | **feat(slack): per-field help text** on deployment configuration card |
| [#7763](https://github.com/nearai/ironclaw/pull/7763) | Subagent, XL | **docs(subagent): consolidate 7 design docs → 1 canonical README** (−9,713 lines) |
| [#7304](https://github.com/nearai/ironclaw/pull/7304) | WebUI, M | **refactor(webui): OAuth sign-in above gateway token form** on login |
| [#7755](https://github.com/nearai/ironclaw/issues/7755) | Cleanup | **Collapse duplicated turn/subagent vocabulary types** (dead metadata struct + duplicate spawn-mode enums) |

**Key advances**: Automation "run-now" shipped end-to-end; CI stabilized on Rust 1.98; OpenAI structured-output regression fixed; subagent design docs consolidated; WebUI login UX improved.

## 4. Community Hot Topics — Most Active Items
| Item | Activity | Underlying Need |
|------|----------|-----------------|
| [#7732](https://github.com/nearai/ironclaw/issues/7732) Epic: Persistent per-user sandbox | 8 comments, updated 2026-08-20 | **Persistent user compute** — replace ephemeral Docker containers with long-lived per-(tenant,user) sandboxes via `iron-proxy` sidecar; Step 2 PR [#7779](https://github.com/nearai/ironclaw/pull/7779) open |
| [#7770](https://github.com/nearai/ironclaw/issues/7770) Epic: Agent lifecycle hooks | 3 comments, created 2026-08-20 | **Extensibility without core edits** — `AfterTurn`, `BeforeTurn`, compaction, tool-result seams; Phase 1 PR [#7765](https://github.com/nearai/ironclaw/pull/7765) open |
| [#7038](https://github.com/nearai/ironclaw/issues/7038) Epic: Design System Phase 1 | 2 comments, updated 2026-08-20 | **Storybook + design-system catalog** foundation; PR [#7750](https://github.com/nearai/ironclaw/pull/7750) open (recreated off main) |
| [#7711](https://github.com/nearai/ironclaw/pull/7711) feat(wasm): typed tool response | XL, updated 2026-08-21 | **Capability response normalization** — final PR of stack (#7627), supersedes #7703; guest migration + dispatch-error cleanup |
| [#7491](https://github.com/nearai/ironclaw/pull/7491) feat(coding): omp core-tool contract | XL, updated 2026-08-20 | **Unified coding tool surface** — 6 bare names (`read`/`write`/`edit`/`glob`/`grep`/`bash`), removes legacy `builtin__*` spellings |

**Pattern**: Large, phased epics dominate discussion; contributors align on incremental, independently shippable slices.

## 5. Bugs & Stability — Reported Today
| Severity | Issue | Summary | Fix PR |
|----------|-------|---------|--------|
| **High** | [#7783](https://github.com/nearai/ironclaw/issues/7783) | **LLM timeout policy**: structured-output finalization uses non-streaming client; stalled provider invisible until 60s cap; 75s deadline kills run before retry completes | — |
| **High** | [#7776](https://github.com/nearai/ironclaw/issues/7776) | **memory.write expected-version mode missing**: full-document rewrites (`append: false`) can silently overwrite concurrent writes; CAS only prevents torn writes, not lost updates | — |
| **Medium** | [#7308](https://github.com/nearai/ironclaw/issues/7308) | **Hosted MCP OAuth for Attio**: invalid scope on registration, cannot be corrected | — |
| **Low** | [#7780](https://github.com/nearai/ironclaw/issues/7780) | **AfterTurn hook bypassed** by scheduler-side failure terminalization (driver failure / exit-application failure) | Follow-up from [#7765](https://github.com/nearai/ironclaw/pull/7765) audit |
| **Low** | [#7767](https://github.com/nearai/ironclaw/issues/7767) | **Automation presenter date tests** fail in non-UTC timezones (e.g., Asia/Shanghai) | PR [#7774](https://github.com/nearai/ironclaw/pull/7774) open |
| **Low** | [#7769](https://github.com/nearai/ironclaw/issues/7769) | **Extension setup phase/blockers** not fully surfaced in Configure; only Hosted MCP auth blocker handled | — |

**Stability note**: Rust 1.98 clippy regression was **fixed same-day** (#7777, #7778) — strong CI hygiene.

## 6. Feature Requests & Roadmap Signals
| Signal | Source | Likelihood for v1.4.0 |
|--------|--------|----------------------|
| **Persistent per-user sandbox with iron-proxy** | Epic #7732 (v1.4.0 label), Step 2 PR #7779 | **High** — labeled v1.4.0, active implementation |
| **Agent lifecycle hooks (AfterTurn/BeforeTurn/compaction/tool-result)** | Epic #7770, Phase 1 PR #7765 | **High** — phased, Phase 1 in review |
| **Design System Phases 2–3: DESIGN.md governance + theme reskin** | Epic #7781 (v1.4.0 label), supersedes #7733 | **High** — labeled v1.4.0, Phase 1 (#7038/#7750) in progress |
| **Design System Phases 4–5: agentic interactions, components, IA** | Epic #7782 | **Medium** — final wave, depends on Phases 1–3 |
| **Unbound runs: skip gating capability instead of aborting** | #7775 (follow-up from #7770 Phase 1) | **Medium** — deliberate open decision from #7765 |
| **Surface extension setup phase/blockers in Configure** | #7769 | **Medium** — UX gap for hosted MCP/OAuth |
| **Remove unused Settings/Extensions tabs & duplicate route metadata** | #7768, PR #7773 | **High** — cleanup PR open, low risk |
| **WASM typed tool response + guest migration** | PR #7711 (XL) | **High** — finalizes capability-response stack |

**Prediction**: v1.4.0 will center on **sandbox persistence**, **agent lifecycle hooks**, and **Design System Phases 1–3**. WASM tool normalization and coding tool unification (#7491) are likely parallel tracks.

## 7. User Feedback Summary
*No direct end-user feedback (e.g., Discord, support tickets) in this dataset.* Inferred pain points from issues/PRs:
- **Automation UX**: "No way to fire an automation on demand" (#7193) → now fixed via run-now (#7729)
- **OpenAI structured-output breakage**: `uniqueItems: true` on suggestions schema blocked all generations (#7786) → fixed same-day
- **Timezone fragility**: Automation date tests fail in Asia/Shanghai (#7767) → fix in #7774
- **Extension configuration opacity**: Setup blockers discarded, modal reports "no configuration required" incorrectly (#7769)
- **Attio MCP OAuth unusable**: Invalid scope, uncorrectable (#7308)
- **WebUI login friction**: Gateway token form above OAuth buttons (#7304) → reordered

## 8. Backlog Watch — Items Needing Maintainer Attention
| Item | Age | Risk | Why It Matters |
|------|-----|------|----------------|
| [#7308](https://github.com/nearai/ironclaw/issues/7308) Hosted MCP OAuth for Attio | 15 days | Medium | **Blocked integration**; OAuth registration broken, no correction path; affects extension ecosystem credibility |
| [#7711](https://github.com/nearai/ironclaw/pull/7711) WASM typed tool response | 4 days | Medium | **Finalizes capability-response stack** (#7627); supersedes #7703; XL scope, needs review bandwidth |
| [#7491](https://github.com/nearai/ironclaw/pull/7491) OMP core-tool contract | 10 days | Medium | **Unifies coding surface** (6 bare tools); removes legacy spellings; XL, touches engines + benchmark arm |
| [#7699](https://github.com/nearai/ironclaw/pull/7699) Notifications: publish actionable run gates | 4 days | Medium | **Durable Inbox** for approval/auth/blocked events; XL, enables user-facing run control |
| [#7698](https://github.com/nearai/ironclaw/pull/7698) Generalize notification center | 4 days | Medium | **Replaces automation-only model** with server-backed Inbox; typed actions + lifecycle; XL |
| [#7785](https://github.com/nearai/ironclaw/issues/7785) Split executor test-support (1,657 lines) | 1 day | Low | **Technical debt**; `support.rs` is a catch-all; cleanup without test surface change |
| [#7784](https://github.com/nearai/ironclaw/issues/7784) Extract capability-port test forest | 1 day | Low | **Technical debt**; production + test fixtures in one file (4,200+ lines) |
| [#7760](https://github.com/nearai/ironclaw/issues/7760) Pin deliberate lineage-drop in `AgentTurnProcessStateMetadata::from_state` | 1 day | Low | **Correctness documentation**; subagent lineage intentionally dropped on state-derived rewrites |

---

**Project Health Indicators**
- ✅ **Merge throughput**: 14 PRs closed/merged in 24h
- ✅ **CI resilience**: Rust 1.98 clippy regression fixed same-day
- ✅ **Epic discipline**: Phased, independently shippable slices with clear supersession tracking
- ⚠️ **Open XL PRs**: 5+ large PRs (#7711, #7491, #7699, #7698, #7750) awaiting review — potential bottleneck
- ⚠️ **Unresolved OAuth/extension bugs**: #7308 (15 days), #7769 (1 day) — ecosystem friction

**Next digest**: 2026-08-22

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-08-21

---

## 1. Today's Overview
LobsterAI shows active maintenance with **7 PRs updated in the last 24h** (6 merged/closed, 1 open) and **2 issues updated** (both stale, open). No new releases. The merged PRs address a mix of UX polish (settings search, engine startup timeout controls), bug fixes (agent skill sync, scheduled-task notification reset, macOS packaging, agent-switch regression), and a major feature: **inline file cards + split-pane preview for Write-tool output** (closing #1552). Overall project health is good — steady bug-squashing and incremental UX improvements — but two stale issues (#1556, #1547) remain unattended.

---

## 2. Releases
**No new releases** in the last 24h.

---

## 3. Project Progress — Merged/Closed PRs (2026-08-20)

| PR | Type | Summary | Link |
|----|------|---------|------|
| **#1545** | Bug fix | Sync `activeSkillIds` immediately when updating current agent's skills; fixes badge stale state after save. | [#1545](https://github.com/netease-youdao/LobsterAI/pull/1545) |
| **#1546** | UX / Safety | EngineStartupOverlay now shows **Cancel** & **View Logs** buttons after 30 s timeout, giving users escape hatch during stuck launches. | [#1546](https://github.com/netease-youdao/LobsterAI/pull/1546) |
| **#1553** | Feature | **Write-tool file cards** (icon, name, path, size, actions) + **draggable preview panel** (320–900 px) with Markdown/HTML/SVG/image/code rendering. Closes #1552. | [#1553](https://github.com/netease-youdao/LobsterAI/pull/1553) |
| **#1555** | Build fix | `dist:mac:x64` packaging failure due to missing `sha256sum`; added `shasum` fallback in `build-openclaw-runtime.sh`. | [#1555](https://github.com/netease-youdao/LobsterAI/pull/1555) |
| **#1557** | UX | Settings sidebar gains **search filter** (AND-match, i18n keywords, NFKC normalization); auto-switches tab if current filtered out. | [#1557](https://github.com/netease-youdao/LobsterAI/pull/1557) |
| **#1560** | Bug fix | Sidebar agent list now correctly switches back to chat view when clicking the *currently selected* agent after editing. | [#1560](https://github.com/netease-youdao/LobsterAI/pull/1560) |

**Open PR still pending:**  
- **#1547** – Fix scheduled-task notification channel reset to “No notification” (form init logic). [#1547](https://github.com/netease-youdao/LobsterAI/pull/1547)

---

## 4. Community Hot Topics
| Item | Activity | Core Need |
|------|----------|-----------|
| **Issue #1556** – *Doc 404: IM Bot Config Guide* | 2 comments, 👍0, stale since Apr | **Documentation integrity** – external link dead; blocks onboarding for IM integration. |
| **Issue #1552** → **PR #1553** – *Write-tool file preview & card* | 1 comment on issue, PR merged | **In-app file preview** – users want immediate visual feedback for generated files (Markdown, HTML, code) without leaving chat. Implemented via file cards + split preview. |
| **PR #1553** (merged) | 0 comments (undefined) | High-impact UX feature; screenshots show polished implementation. |

*Underlying signal:* Users work heavily with agent-generated artifacts (docs, code, reports) and expect **seamless preview/navigation** — a trend pushing LobsterAI toward an IDE-like experience.

---

## 5. Bugs & Stability — Reported/Fixed Today
| Severity | Issue / PR | Status | Notes |
|----------|------------|--------|-------|
| **High** | Engine startup hang (no cancel) | **Fixed** #1546 | 5-min hard timeout → 30 s soft timeout with cancel/log buttons. |
| **High** | `dist:mac:x64` build broken | **Fixed** #1555 | macOS lacks `sha256sum`; `shasum` fallback added. |
| **Medium** | Agent skill badges stale after edit | **Fixed** #1545 | Redux `activeSkillIds` now synced on `updateAgent`. |
| **Medium** | Scheduled-task notification stuck on old channel | **Open PR** #1547 | Form init ignores `delivery.mode === 'none'`; fix ready but not merged. |
| **Medium** | Agent switch regression after edit | **Fixed** #1560 | `handleSwitch` early-return prevented re-entry to chat view. |
| **Low** | Doc link 404 (IM bot guide) | **Open** #1556 | External URL dead; needs doc repo fix or link update. |

---

## 6. Feature Requests & Roadmap Signals
| Request | Source | Likelihood for Next Version |
|---------|--------|-----------------------------|
| **Inline file cards + split preview for Write tool** | #1552 / #1553 | **Delivered** (merged). |
| **Settings sidebar search/filter** | #1557 | **Delivered** (merged). |
| **Engine startup timeout escape hatch** | #1546 | **Delivered** (merged). |
| **Scheduled-task “No notification” reset** | #1547 | **High** — PR open, small fix. |
| **IM bot config doc repair** | #1556 | **Medium** — external dependency. |
| **Read-tool preview parity?** | Implied by #1553 (Read kept as summary) | **Low** — deliberate choice to avoid card spam. |

*Roadmap hint:* The team is iterating on **agent-output consumability** (preview, cards, actions) and **settings discoverability** — both hallmarks of a maturing desktop AI client.

---

## 7. User Feedback Summary
- **Pain points**:  
  - Broken documentation links (#1556).  
  - Engine startup freezing with no recourse (#1546).  
  - Settings panel too crowded, hard to find categories (#1557).  
  - Agent skill changes not reflected instantly (#1545).  
  - Cannot preview generated files without copy-paste or external editor (#1552).  
- **Use cases**: Writing/docs generation, code creation, scheduled IM notifications, multi-agent workflows.  
- **Satisfaction signals**: Rapid PR turnover on UX bugs suggests responsive maintainers; users contribute detailed repros and PRs (e.g., #1553 from issue author).  
- **Dissatisfaction**: Stale issues (#1556, #1547) indicate occasional triage gaps.

---

## 8. Backlog Watch — Items Needing Maintainer Attention
| Item | Age | Why It Matters |
|------|-----|----------------|
| **Issue #1556** – Doc 404 | ~4.5 months | Blocks IM bot onboarding; trivial fix (update/remove link). |
| **PR #1547** – Scheduled-task notification reset | ~4.5 months | Small, tested fix; improves reliability of a user-facing feature. |
| **Issue #1552** – *Closed via #1553* | — | Verify preview panel works on Windows/Linux (PR screenshots macOS-only). |

---

**Bottom line:** LobsterAI is in a **healthy maintenance & polish phase** — core loops stable, UX sharpening actively. The two stale items (#1556, #1547) are low-effort, high-value fixes that would improve first-run experience and feature reliability. Next release will likely bundle the merged UX/bug-fix batch.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-08-21

## 1. Today's Overview
Moltis saw a focused day of security hardening and WhatsApp integration improvements. One new release (20260820.01) was cut, and four PRs were merged addressing a critical authentication bypass (CWE-306), WhatsApp group-chat behavior, and channel tool-policy configuration. Four new PRs opened today target sandbox image validation, supply-chain security for Snyk scans, WhatsApp Markdown rendering, and a long-standing Windows shell-hook fix. Issue #1177 (vault endpoints missing auth) was closed via PR #1216. Overall velocity is healthy with rapid turnaround on security issues.

## 2. Releases
### 20260820.01 (2026-08-20)
- **Key changes**: Includes the merged fixes from PRs #1216, #1217, #1218, #1219 (see Project Progress).
- **Breaking changes**: None explicitly noted; vault unlock/recovery endpoints now require authentication (previously public), which may affect automated scripts that called these endpoints without a session.
- **Migration notes**: Ensure any external automation authenticates before calling `POST /api/auth/vault/unlock` or `POST /api/auth/vault/recovery`.

## 3. Project Progress (Merged/Closed PRs Today)
| PR | Title | Area | Impact |
|----|-------|------|--------|
| [#1216](https://github.com/moltis-org/moltis/pull/1216) | fix(httpd): require authentication for vault unlock and recovery | Auth / Security | **Critical fix** for CVE-306: unauthenticated callers could brute-force vault master keys. Adds `AuthSession` extractor to both endpoints. |
| [#1217](https://github.com/moltis-org/moltis/pull/1217) | fix(whatsapp): treat a reply to the bot as addressing it | WhatsApp / Channels | In `mention_mode="mention"` groups, replies to the bot are now recognized as directed messages (previously dropped). |
| [#1218](https://github.com/moltis-org/moltis/pull/1218) | fix(whatsapp): stop hardcoding the push name to "Moltis" | WhatsApp / UX | Bot’s configured name (e.g., “Ada”) now appears in group chats instead of the hardcoded “Moltis”. |
| [#1219](https://github.com/moltis-org/moltis/pull/1219) | fix(channels): make the untrusted-turn tool ceiling configurable | Channels / Policy | Reverts over-restrictive deny-all policy for non-operator turns; restores public-audience tools and makes ceiling configurable. |

## 4. Community Hot Topics
No issues or PRs have comments or reactions in the last 24 h. The most “active” item by update recency is the newly opened PR cluster (#1222, #1221, #1220), all authored by maintainers/contributors. Underlying needs visible:
- **Supply-chain hygiene**: Pinning Snyk Agent Scan version (#1221) shows ongoing concern about transitive dependency risk.
- **Sandbox safety**: Validating image references before container use (#1222) reflects operator demand for safer plugin/runtime execution.
- **Cross-platform reliability**: PR #468 (open since March) still awaits merge for Windows shell-hook support.

## 5. Bugs & Stability
| Severity | Issue / PR | Status | Fix PR |
|----------|------------|--------|--------|
| **Critical** | [#1177](https://github.com/moltis-org/moltis/issues/1177) – Vault unlock/recovery endpoints missing auth (CWE-306) | Closed 2026-08-20 | [#1216](https://github.com/moltis-org/moltis/pull/1216) (merged) |
| **Medium** | WhatsApp group replies ignored in mention mode | Fixed | [#1217](https://github.com/moltis-org/moltis/pull/1217) (merged) |
| **Medium** | Hardcoded push name “Moltis” in WhatsApp presence | Fixed | [#1218](https://github.com/moltis-org/moltis/pull/1218) (merged) |
| **Low** | Over-restrictive tool ceiling for untrusted turns | Fixed | [#1219](https://github.com/moltis-org/moltis/pull/1219) (merged) |

No new crashes or regressions reported today.

## 6. Feature Requests & Roadmap Signals
- **WhatsApp Markdown rendering** ([#1220](https://github.com/moltis-org/moltis/pull/1220)): Convert model-generated Markdown to WhatsApp-native markup for outbound messages while preserving Markdown in history/UI. Likely to land in next release.
- **Sandbox image validation** ([#1222](https://github.com/moltis-org/moltis/pull/1222)): Restrict image/package checks to operator admins; validates references before container/Dockerfile use. Signals tighter runtime security posture.
- **Pinned Snyk Agent Scan** ([#1221](https://github.com/moltis-org/moltis/pull/1221)): Move to fixed version 0.5.17 via `uvx`; drop fallback. Indicates maturing CI/security pipeline.
- **Windows shell-hook support** ([#468](https://github.com/moltis-org/moltis/pull/468)): Long-open PR using `cmd.exe /C` on Windows. If merged, removes a cross-platform blocker.

Prediction: Next patch will include #1220, #1222, #1221; #468 may finally merge after CI validation.

## 7. User Feedback Summary
No direct user comments in the last 24 h. Inferred pain points from closed PRs:
- **Security**: Operators expect vault endpoints to be protected; unauthenticated brute-force risk was unacceptable.
- **WhatsApp UX**: Bots appearing as “Moltis” instead of configured name broke branding; replies in groups not recognized as mentions frustrated group-chat workflows.
- **Policy flexibility**: Hardcoded deny-all for untrusted turns removed legitimate public tools, prompting configurable ceiling.

## 8. Backlog Watch
| Item | Age | Why It Matters |
|------|-----|----------------|
| [#468](https://github.com/moltis-org/moltis/pull/468) fix(plugins): use cmd.exe on Windows for shell hooks | 5 months (opened 2026-03-23) | Blocks Windows operators from using shell hooks; CI passes but awaiting maintainer review/merge. |
| [#1177](https://github.com/moltis-org/moltis/issues/1177) Vault auth bypass | 22 days open before fix | High-severity security issue; fixed quickly but reminds to audit other `/api/auth/*` routes for similar gaps. |

---

*Data sourced from GitHub API for moltis-org/moltis on 2026-08-21. All links point to live GitHub items.*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (QwenPaw) Project Digest — 2026-08-21

---

## 1. Today's Overview

CoPaw shows **very high velocity** with 78 total GitHub updates in the last 24 hours (28 issues, 50 PRs). A new beta release **v2.1.1-beta.1** was published, and the merge rate is strong: **28 PRs merged/closed** vs. 22 still open. The issue backlog is actively triaged (13 closed, 15 remain open). Community engagement is healthy—multiple issues have 5–10 comments, indicating real user pain points being discussed. The project is in a **stable beta iteration phase**, polishing reliability (network recovery, timeouts, DB bloat) while advancing major features (model routing, unified marketplace, self-hosted Hub, always-on skills).

---

## 2. Releases

### **v2.1.1-beta.1** (2026-08-20)  
**Release page:** https://github.com/agentscope-ai/QwenPaw/releases/tag/v2.1.1-beta.1  

| Change | Type | PR / Author |
|--------|------|-------------|
| Improve editor tab overflow navigation (Console) | feat | [#6983](https://github.com/agentscope-ai/QwenPaw/pull/6983) @rayrayraykk |
| Lower rate-limiter init log level (Providers) | fix | [#6988](https://github.com/agentscope-ai/QwenPaw/pull/6988) @rayrayraykk |
| Update release notes | chore | (included) |

**Breaking changes:** None noted.  
**Migration notes:** Standard beta upgrade—reinstall via pip or download the new desktop artifact. No config/schema migrations required.

---

## 3. Project Progress (Merged / Closed PRs Today)

| PR | Title | Area | Status |
|----|-------|------|--------|
| [#7174](https://github.com/agentscope-ai/QwenPaw/pull/7174) | Initialize persistent drivers concurrently | perf(drivers) | **Merged** |
| [#7135](https://github.com/agentscope-ai/QwenPaw/pull/7135) | Preserve corrupt `envs.json` & write atomically | fix(envs) | **Merged** |
| [#7166](https://github.com/agentscope-ai/QwenPaw/pull/7166) | Bundle `qwenpawmail` MCP as standalone sidecar | fix(release) | **Merged** |
| [#7161](https://github.com/agentscope-ai/QwenPaw/pull/7161) | Add artifacts to assistant response card (Console) | feat(console) | **Merged** |
| [#6371](https://github.com/agentscope-ai/QwenPaw/pull/6371) | Continue downloader fallback after timeout (`wget`→`curl`→`urllib`) | fix(file-handling) | **Merged** |
| [#7073](https://github.com/agentscope-ai/QwenPaw/pull/7073) | Skill name deduplication (workspace vs built-in) | feat(skill-system) | **Merged** |
| [#6974](https://github.com/agentscope-ai/QwenPaw/pull/6974) | VPN compatibility for desktop client | enhancement | **Closed** (wontfix/duplicate?) |
| [#6734](https://github.com/agentscope-ai/QwenPaw/pull/6734) | Rename “新建聊天” → “新任务” in desktop sidebar | enhancement | **Closed** (done) |
| [#6453](https://github.com/agentscope-ai/QwenPaw/pull/6453) | Keep Chinese filenames in upload prompts | enhancement | **Closed** (done) |
| [#7090](https://github.com/agentscope-ai/QwenPaw/pull/7090) | Search/filter in skill-pool import UI | enhancement | **Closed** (done) |
| [#7118](https://github.com/agentscope-ai/QwenPaw/pull/7118) | Silent corruption of `envs.json` → data loss | bug | **Closed** (fixed by #7135) |
| [#7162](https://github.com/agentscope-ai/QwenPaw/pull/7162) | `httpx.ReadError` mid-stream not retried | bug | **Closed** (fix in progress) |
| [#7102](https://github.com/agentscope-ai/QwenPaw/pull/7102) | Freeze >10 min on GLM 5.3 | bug | **Closed** (needs root-cause) |
| [#6826](https://github.com/agentscope-ai/QwenPaw/pull/6826) | Assistant message end-time display wrong | bug | **Closed** (fixed) |
| [#7110](https://github.com/agentscope-ai/QwenPaw/pull/7110) | Unreachable image link breaks entire session | bug | **Closed** (fixed) |

**Key advances:**  
- **Startup performance** (concurrent driver init, atomic env writes)  
- **Data safety** (corrupt config preservation, downloader fallback hardening)  
- **UX polish** (artifacts in response cards, skill dedup, Chinese filenames, skill search)  
- **Packaging** (MCP sidecar for mail)

---

## 4. Community Hot Topics (Most Comments / Reactions)

| Item | Comments | 👍 | Summary | Underlying Need |
|------|----------|----|---------|-----------------|
| [#6921](https://github.com/agentscope-ai/QwenPaw/issues/6921) | 10 | 0 | Agent stops after planning message (“Now 2.1, 3.1…”) with no prompt; requires user “继续” | **Reliability**: multi-step task execution stalls silently; users lose trust in autonomy |
| [#7102](https://github.com/agentscope-ai/QwenPaw/issues/7102) | 9 | 0 | Full freeze >10 min on GLM 5.3 (no tokens, no thinking output) | **Stability**: provider-specific hangs; need better timeout/fallback telemetry |
| [#6643](https://github.com/agentscope-ai/QwenPaw/issues/6643) | 6 | 0 | All task artifacts dumped into single `media/` dir—chaotic | **Org/UX**: per-task artifact directories for traceability |
| [#6436](https://github.com/agentscope-ai/QwenPaw/issues/6436) | 4 | 1 | **Automatic model routing** (small/fast local → vision → big reasoning) | **Core feature**: reduce manual model pinning; cost/latency optimization |
| [#6826](https://github.com/agentscope-ai/QwenPaw/issues/6826) | 4 | 0 | Assistant thinking time (2 min) shown as seconds in UI | **Observability**: accurate latency display for debugging |
| [#6932](https://github.com/agentscope-ai/QwenPaw/issues/6932) | 3 | 0 | No auto-recovery after transient network blip; must restart process | **Resilience**: automatic LLM reconnect on network restore |
| [#7110](https://github.com/agentscope-ai/QwenPaw/issues/7110) | 3 | 0 | One bad image link in history → entire session unusable (/clear only fix) | **Robustness**: graceful degradation for corrupt media refs |
| [#7013](https://github.com/agentscope-ai/QwenPaw/issues/7013) | 3 | 0 | Unified tool panel: file preview, diff, web preview, interactive terminal | **DX**: “Agent IDE” experience—single pane for all tooling |

**Signal:** Users want **autonomous reliability** (don’t stall, auto-recover), **better organization** (per-task dirs, unified tooling), and **smarter defaults** (model routing).

---

## 5. Bugs & Stability (Ranked by Severity)

| Severity | Issue | Symptom | Fix PR / Status |
|----------|-------|---------|-----------------|
| **Critical** | [#7168](https://github.com/agentscope-ai/QwenPaw/issues/7168) | `history.db` bloats to **7.6 GB**; `recall_history` expands full tool outputs repeatedly | **Open** — needs middleware redesign (cap tool output in history) |
| **Critical** | [#7156](https://github.com/agentscope-ai/QwenPaw/issues/7156) | Embedding health check times out (hard-coded 5 s) even on warm Ollama; session falls back to BM25-only | **Open** — timeout should be configurable; PR [#7133](https://github.com/agentscope-ai/QwenPaw/pull/7133) (ReMe 0.4.1.8) addresses |
| **High** | [#6921](https://github.com/agentscope-ai/QwenPaw/issues/6921) | Agent stops mid-task after planning message; no UI hint; requires manual “continue” | **Open** — likely loop/execution handoff bug |
| **High** | [#6932](https://github.com/agentscope-ai/QwenPaw/issues/6932) | Transient network loss → permanent LLM request failure until process restart | **Open** — needs retry/backoff at provider layer |
| **High** | [#7162](https://github.com/agentscope-ai/QwenPaw/issues/7162) | `httpx.ReadError` mid-stream → `UNKNOWN_AGENT_ERROR`; `ReadError` not in retryable list | **Closed** — fix pending in retry policy |
| **Medium** | [#7060](https://github.com/agentscope-ai/QwenPaw/issues/7060) | `view_video` inline cap hardcoded 2 MB; provider `max_inline_media_bytes` ignored | **Open** — expose config in provider advanced settings |
| **Medium** | [#7110](https://github.com/agentscope-ai/QwenPaw/issues/7110) | Single unreachable image URL kills entire chat session | **Closed** — fixed (graceful skip) |
| **Medium** | [#7118](https://github.com/agentscope-ai/QwenPaw/issues/7118) | Corrupt `envs.json` silently drops all vars; next write persists loss | **Closed** — fixed by [#7135](https://github.com/agentscope-ai/QwenPaw/pull/7135) (atomic write + backup) |
| **Low** | [#6826](https://github.com/agentscope-ai/QwenPaw/issues/6826) | Assistant elapsed time shown incorrectly (seconds vs minutes) | **Closed** — UI timestamp fix |
| **Low** | [#6370](https://github.com/agentscope-ai/QwenPaw/issues/6370) | Downloader timeout (`subprocess.TimeoutExpired`) not caught → fallback skipped | **Closed** — fixed by [#6371](https://github.com/agentscope-ai/QwenPaw/pull/6371) |

---

## 6. Feature Requests & Roadmap Signals

| Issue | Request | Likelihood for Next Release | Notes |
|-------|---------|-----------------------------|-------|
| [#6436](https://github.com/agentscope-ai/QwenPaw/issues/6436) | **Automatic model routing** (task → best model) | 🟡 Medium | Core architectural change; design discussion active |
| [#6643](https://github.com/agentscope-ai/QwenPaw/issues/6643) | Per-task artifact directories | 🟢 High | Simple filesystem change; high user demand |
| [#7013](https://github.com/agentscope-ai/QwenPaw/issues/7013) | Unified tool panel (preview, diff, web, terminal) | 🟡 Medium | Large UI effort; “Agent IDE” vision |
| [#7184](https://github.com/agentscope-ai/QwenPaw/issues/7184) | Agent-level cross-session recall toggle (Scroll) | 🟢 High | Config-only; PR [#7183](https://github.com/agentscope-ai/QwenPaw/pull/7183) open |
| [#7182](https://github.com/agentscope-ai/QwenPaw/issues/7182) | Workspace-scoped always-on skills | 🟢 High | PR [#7183](https://github.com/agentscope-ai/QwenPaw/pull/7183) open; narrow scope |
| [#7181](https://github.com/agentscope-ai/QwenPaw/issues/7181) | Support `qwen_code` as third-party harness | 🟡 Medium | Alternative to ACP; network-restricted users |
| [#7159](https://github.com/agentscope-ai/QwenPaw/issues/7159) | QQ bot proactive/scheduled messages | 🟡 Medium | Requires QQ channel enhancements |
| [#7158](https://github.com/agentscope-ai/QwenPaw/issues/7158) | DingTalk group context modes (isolate vs shared) | 🟡 Medium | Channel-specific config |
| [#7179](https://github.com/agentscope-ai/QwenPaw/issues/7179) | Agent switcher UX (show more, less scroll) | 🟢 High | Quick UI win |
| [#6734](https://github.com/agentscope-ai/QwenPaw/issues/6734) | Rename “New Chat” → “New Task” | ✅ Done | Closed |
| [#7177](https://github.com/agentscope-ai/QwenPaw/issues/7177) | Web deploy page UX (move entry up, reorder buttons) | 🟢 High | Mobile-first fix;

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-08-21

## 1. Today's Overview

ZeroClaw shows **high architectural churn with zero releases** — 100 combined issue/PR updates in 24 hours, but all 50 PRs remain open (only 2 merged/closed). The project is deep in **RFC-driven redesign**: plugin architecture migration (WASM runtime plugins), security policy hardening (shell command allow/ask/deny), memory lifecycle decoupling, and provider/model abstraction layers. No production releases since the data snapshot; velocity is directed at *structural debt* (anti-slop Rust cleanup, config migrations, CI security drift) rather than user-facing features. Maintainer review bandwidth appears saturated — multiple P1/P2 RFCs and stacked PRs carry `needs-maintainer-review` or `needs-author-action`.

---

## 2. Releases

**None.** No new versions published. The project operates on `master` with continuous integration; users track nightly/unstable builds.

---

## 3. Project Progress — Merged / Closed Today

| PR / Issue | Type | Summary |
|------------|------|---------|
| [#10194](https://github.com/zeroclaw-labs/zeroclaw/issues/10194) | Bug (CI) | **Closed:** AI reviewer publishing in-flight results after PR merge — race condition in deployed reviewer tooling. |
| [#10111](https://github.com/zeroclaw-labs/zeroclaw/issues/10111) | Support (Desktop) | **Closed (duplicate):** Windows `TaskDialogIndirect` entry-point failure in `zeroclaw-desktop.exe` — likely packaging/runtime dependency issue. |
| [#9016](https://github.com/zeroclaw-labs/zeroclaw/issues/9016) | Bug (Provider) | **Closed:** OpenAI tool turns failing when Chat Completions rejects reasoning effort — classification fix for `finish_reason: "length"`. |

*Only 3 closures in 24h; the bulk of movement is open RFC/Tracker discussion and stacked PR iteration.*

---

## 4. Community Hot Topics — Most Active Discussions

| Item | Comments | Core Theme | Underlying Need |
|------|----------|------------|-----------------|
| [#7155](https://github.com/zeroclaw-labs/zeroclaw/issues/7155) **RFC: Per-execution confirmation tier for high-risk shell commands** | 23 | Security UX — Claude Code-style `allow/ask/deny` policy for shell tools | **Operational safety**: Teams need auditable, per-command gating without blocking automation. High `risk:high`, `priority:p1`, `status:accepted`. |
| [#9487](https://github.com/zeroclaw-labs/zeroclaw/issues/9487) **RFC: Runtime-owned conversation sessions & transport adapters** | 22 | Architecture — Session ownership boundary, ACP channel, `InboundAction` admission | **Multi-channel runtime**: Decouple session lifecycle from transport (Web, ACP, CLI) for embeddable agents. |
| [#10118](https://github.com/zeroclaw-labs/zeroclaw/issues/10118) **Tracker: Rust anti-slop policy debt remediation** | 16 | Code quality — 307 anti-pattern candidates across 1,078 Rust files (panics, `unwrap`, `expect`, etc.) | **Production hardening**: Systematic cleanup before 1.0; blocks confidence in runtime stability. |
| [#6850](https://github.com/zeroclaw-labs/zeroclaw/issues/6850) **RFC: Decouple memory lifecycle from storage backends** | 14 | Architecture — `Memory` trait conflates storage ops with consolidation/governance | **Pluggable memory**: Enable MariaDB/PostgreSQL/SQLite backends without reimplementing policy per gateway. |
| [#8780](https://github.com/zeroclaw-labs/zeroclaw/issues/8780) **RFC: Realtime speech-to-speech channel for Gemini Live** | 14 | Feature — Optional WASM-gated voice channel (broker contract v2) | **Voice-first agents**: Native realtime audio path without external bridge; `provider:gemini`. |
| [#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) **Tracker: Maintainer decision queue for RFCs** | 13 | Process — Active queue for RFC/design decisions needing code-owner action | **Governance bandwidth**: 10+ RFCs stalled awaiting maintainer verdict; `status:no-stale` prevents auto-close. |

> **Signal**: Security policy (#7155), plugin/runtime architecture (#9487, #8850, #10076), and code-quality debt (#10118) dominate maintainer attention. Community is *designing* more than *shipping*.

---

## 5. Bugs & Stability — Reported Today (Ranked by Severity)

| Issue | Severity | Component | Status | Fix PR? |
|-------|----------|-----------|--------|---------|
| [#10068](https://github.com/zeroclaw-labs/zeroclaw/issues/10068) Interactive agent caps context at 32k tokens (ignores `max_context_tokens=131072`) | **S2** (degraded) | runtime/daemon, CLI | `in-progress`, `accepted` | No PR linked yet |
| [#10074](https://github.com/zeroclaw-labs/zeroclaw/issues/10074) `SECURITY.md` references removed CI docker job (container checks now convention-only) | **S2** (degraded) | CI, docs, security:docker | `in-progress` | No PR linked yet |
| [#10106](https://github.com/zeroclaw-labs/zeroclaw/issues/10106) Exact proxy selectors reject supported transcription services (Groq, OpenAI, Deepgram, etc.) | **S2** (degraded) | config/onboarding, provider:openai | `in-progress`, `accepted` | No PR linked yet |
| [#10103](https://github.com/zeroclaw-labs/zeroclaw/issues/10103) ZeroCode Health status values misalign in French/Spanish (label width hardcoded) | **S3** (minor) | zerocode/tui | `in-progress`, `accepted` | No PR linked yet |
| [#10111](https://github.com/zeroclaw-labs/zeroclaw/issues/10111) Windows desktop: `TaskDialogIndirect` entry point not found | **S1** (blocked install) | desktop, installation | **Closed (duplicate)** | Likely fixed in packaging PR |

> **Stability note**: Three S2 bugs opened in 48h — context window, CI security drift, and proxy classification — suggest **config/runtime boundary regressions** under active refactor. No fix PRs visible yet; may be addressed in stacked PRs not yet surfaced.

---

## 6. Feature Requests & Roadmap Signals

| Signal | Evidence | Likelihood for Next Version |
|--------|----------|----------------------------|
| **WASM plugin ecosystem** (runtime-installable channels/tools/skills) | [#8850](https://github.com/zeroclaw-labs/zeroclaw/issues/8850) (tracker, `in-progress`), [#10076](https://github.com/zeroclaw-labs/zeroclaw/issues/10076) (comprehensive RFC), [#9582](https://github.com/zeroclaw-labs/zeroclaw/pull/9582), [#9584](https://github.com/zeroclaw-labs/zeroclaw/pull/9584) (egress policy + grant ceremony) | **Very High** — Multiple stacked PRs, ADR-014 proposed, P1 priority |
| **Shell command policy: allow/ask/deny** | [#7155](https://github.com/zeroclaw-labs/zeroclaw/issues/7155) (accepted, P1), [#9678](https://github.com/zeroclaw-labs/zeroclaw/pull/9678) (hardening Git shell args), [#9635](https://github.com/zeroclaw-labs/zeroclaw/pull/9635) (git subcommand parsing) | **High** — Active PR work, security-critical |
| **Agent portability / swarm orchestration** | [#10025](https://github.com/zeroclaw-labs/zeroclaw/issues/10025) (swarm RFC), [#10069](https://github.com/zeroclaw-labs/zeroclaw/issues/10069) (agent export bundles) | **Medium** — Early RFC, `needs-maintainer-review` |
| **MariaDB memory backend** | [#4668](https://github.com/zeroclaw-labs/zeroclaw/issues/4668) (accepted, 5 months old) | **Low–Medium** — Blocked on memory lifecycle RFC (#6850) |
| **Realtime voice (Gemini Live)** | [#8780](https://github.com/zeroclaw-labs/zeroclaw/issues/8780) (v2 broker contract) | **Medium** — Feature-gated, optional, depends on plugin infra |
| **Default UX improvements** (stall watchdog, streaming) | [#10168](https://github.com/zeroclaw-labs/zeroclaw/issues/10168), [#10166](https://github.com/zeroclaw-labs/zeroclaw/issues/10166) (both accepted) | **High** — Small, accepted, low risk |

---

## 7. User Feedback Summary — Pain Points & Use Cases

| Pain Point | Source | Context |
|------------|--------|---------|
| **Context window silently capped at 32k** | [#10068](https://github.com/zeroclaw-labs/zeroclaw/issues/10068) | User configured 131k tokens; session shows `15,538 / 32,000` and compacts early. Blocks long-context workflows. |
| **Windows desktop won't launch** | [#10111](https://github.com/zeroclaw-labs/zeroclaw/issues/10111) | `TaskDialogIndirect` missing — likely MSVC runtime / Windows version mismatch in packaging. |
| **Transcription proxy config rejects valid providers** | [#10106](https://github.com/zeroclaw-labs/zeroclaw/issues/10106) | Exact selector match fails for `transcription.groq`, `transcription.deepgram`, etc. — onboarding friction. |
| **CI security checks documented but not enforced** | [#10074](https://github.com/zeroclaw-labs/zeroclaw/issues/10074) | `SECURITY.md` claims docker job verifies non-root, `:nonroot`, `USER` — job removed in April. Trust gap. |
| **ZeroCode logs not copyable** | [#10086](https://github.com/zeroclaw-labs/zeroclaw/issues/10086) | Only hidden `y` key copies full payload; no standard text selection. UX regression for debugging. |
| **Plugin install non-retryable** | [#10162](https://github.com/zeroclaw-labs/zeroclaw/issues/10162) | Package persists before config seeding; failure leaves orphaned plugin, no retry path. |

> **Theme**: Users hit **config/runtime mismatches** (context, proxy, sandbox) and **Windows desktop fragility**. Plugin/UX paper cuts emerge as plugin system becomes user-facing.

---

## 8. Backlog Watch — Stalled / Needs Maintainer Attention

| Item | Age | Labels | Why It Matters |
|------|-----|--------|----------------|
| [#6850](https://github.com/zeroclaw-labs/zeroclaw/issues/6850) RFC: Decouple memory lifecycle from storage | 3 months | `needs-maintainer-review`, `risk:high` | Blocks MariaDB (#4668), PostgreSQL scaling, and any backend swap without policy rewrite. |
| [#8398](https://github.com/zeroclaw-labs/zeroclaw/issues/8398) RFC: Plugin permission/config/secrets model | 2 months | `needs-author-action`, `risk:high` | Coarse `PluginPermission` enum blocks least-privilege plugins; secrets model undefined. |
| [#6996](https://github.com/zeroclaw-labs/zeroclaw/issues/6996) RFC: Granular sandbox policy (fs/network) | 3 months | `needs-author-action`, `in-progress`, `risk:high` | Two drifted policy layers (app + OS sandbox); agent risk profiles can't express intent cleanly. |
| [#9990](https://github.com/zeroclaw-labs/zeroclaw/issues/9990) RFC: Calibrate PR risk & security approval | 1 week | `accepted`, `risk:high` | Precedent from #9530: test-only changes in high-risk paths can be medium. Needs policy codification. |
| [#10050](https://github.com/zeroclaw-labs/zeroclaw/issues/10050) RFC: Verbatim channel send via gateway (no agent turn) | 5 days | `needs-maintainer-review`, `risk:high` | 47 gateway routes, none for raw channel passthrough — blocks headless/integration use cases. |
| [#9748](https://github.com/zeroclaw-labs/zeroclaw/pull/9748) Fix: Stale provider refreshes mutate replacement sessions | 17 days | `needs-author-action`, `priority:p2` | Session generation counter fix; `stacked` on #9484 lock. Review stalled. |
| [#9753](https://github.com/zeroclaw-labs/zeroclaw/pull/9753) Fix: Distinguish absent vs empty `allowed_tools` in risk profile | 17 days | `needs-author-action`, `priority:p1`, `risk:high` | Empty list `[]` currently fails open (deny-all intended). Security regression risk. |
| [#9637](https://github.com/zeroclaw-labs/zeroclaw/pull/9637) CI: Guard React Router RSC exception (do-not-merge) | 20 days | `do-not-merge`, `priority:p1`, `risk:high` | Temporary GHSA allowlist; needs revert when upstream fixes. Technical debt marker. |

> **Maintainer bandwidth alert**: 8+ items with `needs-maintainer-review` or `needs-author-action` at P1/P2, several >2 weeks old. Decision queue (#8692) tracks 10+ RFCs — **governance throughput is the bottleneck**.

---

## Health Indicators

| Metric | Signal |
|--------|--------|
| **Release cadence** | ❌ None in period — pre-1.0, master-only |
| **PR merge rate** | ⚠️ 2/50 (4%) in 24h — stacked PRs, review saturation |
| **RFC acceptance → implementation lag** | ⚠️ Months (e.g., #4668 MariaDB, #6850 memory lifecycle) |
| **Security hygiene** | ⚠️ CI/docs drift (#10074), shell policy gaps (#7155, #9678) |
| **Windows support** | ⚠️ Desktop broken (#10111), self-update tests only planned (#7910) |
| **Plugin/extensibility trajectory** | ✅ Strong — WASM component model, egress policy, grant ceremony, activation PRs landing |
| **Code quality investment** | ✅ Anti-slop tracker (#10118) with quantified debt (307 findings) |

**Verdict**: ZeroClaw is **architecturally ambitious but delivery-constrained**. The plugin/WASM pivot and security policy overhaul are the right long-term bets, but the maintainer review queue is a critical path blocker. Near-term stability will depend on merging the stacked security/config PRs (#9678, #9635, #9753, #9748) and resolving the context-window regression (#10068).

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/DenisZheng/agents-radar).*