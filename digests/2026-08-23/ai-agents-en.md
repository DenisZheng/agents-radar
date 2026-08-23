# OpenClaw Ecosystem Digest 2026-08-23

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-08-23 00:55 UTC

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

# OpenClaw Project Digest — 2026-08-23

## 1. Today's Overview
OpenClaw shows **extremely high velocity** with 500 issues and 500 PRs updated in the last 24 hours. The project is in active beta validation for **v2026.8.1-beta.2** (Issue #125626), with 19 comments tracking release testing. Despite 63 PRs merged/closed today, the open backlog remains large (474 issues, 437 PRs), indicating sustained development pressure. Critical stability regressions in beta.2 — event loop blocking (#124788), SQLite corruption (#126821), and subagent spawn failures with vLLM (#124284) — suggest the beta cycle is surfacing significant regressions. No new releases were published today.

---

## 2. Releases
**No new releases today.** The project is validating **v2026.8.1-beta.2** (Issue [#125626](https://github.com/openclaw/openclaw/issues/125626)), a release-validation issue with 19 comments where testers are upgrading real gateways and reporting results. Beta.2 appears to have introduced multiple regressions (see Bugs & Stability).

---

## 3. Project Progress — Merged/Closed PRs Today (63 total)
Key merged/closed PRs advancing the project:

| PR | Area | Summary |
|----|------|---------|
| [#125471](https://github.com/openclaw/openclaw/pull/125471) | Auth/UI | **CLOSED** — Fix: keep Claude CLI OAuth available in Control UI after gateway restart (auth profile migration bug) |
| [#126424](https://github.com/openclaw/openclaw/pull/126424) | Gateway/Channels | **CLOSED** — Fix: keep conversation delivery within agent bindings (multi-agent message routing regression) |
| [#116489](https://github.com/openclaw/openclaw/pull/116489) | Security | **CLOSED** — Feat: require acknowledgement for install policy warnings (security boundary) |
| [#120900](https://github.com/openclaw/openclaw/pull/120900) | UI/Security | **CLOSED** — Feat: review install policy warnings in Control UI (admin UX) |
| [#123535](https://github.com/openclaw/openclaw/pull/123535) | Web UI | Fix: avoid session catalog refresh storms during bootstrap |
| [#127818](https://github.com/openclaw/openclaw/pull/127818) | Web UI | Perf: stop long-lived request/session caches from growing forever (memory leak) |
| [#127793](https://github.com/openclaw/openclaw/pull/127793) | Web UI | Style: simplify Sessions visual hierarchy (UX improvement) |
| [#128070](https://github.com/openclaw/openclaw/pull/128070) | Web UI | Fix: sidebar collapse keeps pointer tooltips quiet (touch/pointer UX) |
| [#128059](https://github.com/openclaw/openclaw/pull/128059) | Web UI | Fix: show busy avatar chooser as disabled (UI state consistency) |
| [#127290](https://github.com/openclaw/openclaw/pull/127290) | Release/Infra | Fix: support frozen beta manifest layouts (release tooling) |

**Trend:** Heavy focus on **Control UI stability**, **auth/session persistence**, and **release tooling** — all aligned with beta validation.

---

## 4. Community Hot Topics (Most Active Issues/PRs)

| Item | Comments | 👍 | Core Need |
|------|----------|----|-----------|
| [#125626](https://github.com/openclaw/openclaw/issues/125626) Release validation: v2026.8.1-beta.2 | 19 | 0 | **Community-driven release gate** — testers validating beta on real gateways |
| [#68596](https://github.com/openclaw/openclaw/issues/68596) Configurable streaming watchdog timeout | 15 | 8 | **Reasoning model support** — extended thinking (kimi, DeepSeek-R1) triggers false watchdog resets |
| [#96834](https://github.com/openclaw/openclaw/issues/96834) WhatsApp 1:1 image wedges lane ~3 min | 14 | 1 | **Multimodal ingestion latency** — image processing blocks main lane before prompt starts |
| [#51429](https://github.com/openclaw/openclaw/issues/51429) Hardcoded `/Users/wangtao` path in released code | 12 | 0 | **Build/release hygiene** — user workspace path leaked into binary |
| [#85030](https://github.com/openclaw/openclaw/issues/85030) MCP tools not injected into subagent sessions | 12 | 6 | **Subagent tool parity** — documented MCP exposure mechanisms ignored for spawned sessions |
| [#124788](https://github.com/openclaw/openclaw/issues/124788) Beta.2: event loop blocks ~100s every ~10 min | 6 | 0 | **P0 regression** — gateway becomes unresponsive cyclically (anchored timer + fs scan) |
| [#126821](https://github.com/openclaw/openclaw/issues/126821) SQLite corruption on pristine DBs within 15–24h | 5 | 0 | **P0 data integrity** — freelist miscount leads to "paralyzed gateway" mode |
| [#124284](https://github.com/openclaw/openclaw/issues/124284) Subagent spawn fails with vLLM + thinking (beta.2) | 6 | 0 | **Provider compatibility** — new stream wrapper breaks vLLM openai-completions XML tool calls |

**Underlying needs:** 
- **Reasoning model first-class support** (watchdog, streaming, tool calling)
- **Subagent reliability** (tool injection, completion delivery, spawn success)
- **Release quality gates** (hardcoded paths, beta regressions, SQLite integrity)
- **Multimodal latency** (WhatsApp image wedge, vision timeouts)

---

## 5. Bugs & Stability — Ranked by Severity

### P0 / Critical (Beta Blockers / Data Loss / Crash Loops)
| Issue | Severity | Fix PR? | Summary |
|-------|----------|---------|---------|
| [#124788](https://github.com/openclaw/openclaw/issues/124788) | P0 — Event loop blocks 100s/10min | ❌ | Gateway unresponsive cyclically; WebSocket/HTTP/cron all stall. Persists with all memory plugins disabled. |
| [#126821](https://github.com/openclaw/openclaw/issues/126821) | P0 — SQLite corruption on pristine DBs | ❌ | Freelist miscount within 15–24h; "paralyzed gateway" refuses service but never exits. WSL2. |
| [#97616](https://github.com/openclaw/openclaw/issues/97616) | P1 — Zombie process leak | ❌ | Unreaped hook/tool children accumulate (`openclaw-hooks`, `bash`, `codex`); runtime degradation. |
| [#45224](https://github.com/openclaw/openclaw/issues/45224) | P1 — Playwright assertion crashes Gateway | ❌ | Unhandled CDP assertion error exits process; launchd restart required. |
| [#89257](https://github.com/openclaw/openclaw/issues/89257) | P1 — Backup creates corrupt .tmp archive | ❌ | `backup create --verify` exits 13, leaves partial archive; verifier rejects older hardlinks. |
| [#124284](https://github.com/openclaw/openclaw/issues/124284) | P1 — Subagent spawn fails with vLLM + thinking | ❌ | New `wrapStreamFnWithProviderPromptState` breaks vLLM XML tool calls in beta.2. |

### P1 / High (Session State / Message Loss / Auth)
| Issue | Severity | Fix PR? | Summary |
|-------|----------|---------|---------|
| [#96834](https://github.com/openclaw/openclaw/issues/96834) | P1 — WhatsApp image wedges lane 3 min | ❌ | Inbound image blocks main lane before processing; multimodal strands active. |
| [#85030](https://github.com/openclaw/openclaw/issues/85030) | P1 — MCP tools not injected into subagents | ❌ | `bundle-mcp`, per-tool allowlist, per-agent allowlist all ignored for `sessions_spawn`. |
| [#67777](https://github.com/openclaw/openclaw/issues/67777) | P1 — Subagent completion delivery lost | ❌ | Direct-announce timeout/drain/orphan prune loses completion; no reliable fallback. |
| [#89278](https://github.com/openclaw/openclaw/issues/89278) | P1 — Codex OAuth refresh succeeds but cron fails | ❌ | 10s auth refresh timeout kills cron/heartbeat despite successful probe. |
| [#117609](https://github.com/openclaw/openclaw/issues/117609) | P1 — Transient LLM errors not retried at embedded-assistant | ❌ | Long multi-step turns die whole on transient; channels/one-shots retry. |
| [#112196](https://github.com/openclaw/openclaw/issues/112196) | P1 — `memory_search` transient timeout masks as provider failure | ❌ | Post-restart "database not open" / 15s timeout shows `disabled: true` despite healthy embeddings API. |
| [#108215](https://github.com/openclaw/openclaw/issues/108215) | P1 — Context usage drops 57%→

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: AI Agent & Personal AI Assistant Open-Source Ecosystem (2026-08-23)

---

## 1. Ecosystem Overview

The personal AI assistant/agent open-source landscape shows **intense, fragmented innovation** across 13 tracked projects. Three projects (OpenClaw, Hermes Agent, ZeroClaw) operate at **extreme velocity** (100–500+ daily issue/PR updates), indicating large contributor bases or automated tooling. Most projects are in **stabilization or architecture-refactoring phases** rather than feature expansion, with recurring themes: reasoning-model support, subagent/multi-agent reliability, gateway/session persistence, and cross-platform desktop delivery. No project cut a release today—ecosystem-wide **release cadence has slowed** as maintainers prioritize regression fixes over shipping. Community engagement is highly technical; user-facing issues dominate over feature requests, signaling **production hardening** as the shared priority.

---

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Merged/Closed PRs | Release Today | Health Score* | Status |
|---------|--------------|-----------|-------------------|---------------|---------------|--------|
| **OpenClaw** | 500 | 500 | 63 | ❌ | 🟡 High velocity, critical regressions | Beta validation |
| **Hermes Agent** | 50 | 50 | 3 | ❌ | 🟢 Stabilizing, architectural clarity | Hardening |
| **ZeroClaw** | 50 | 50 | 6 | ❌ | 🟡 Refactoring, platform gaps | Architecture pivot |
| **IronClaw** | 9 | 21 | 5 | ❌ | 🟢 Strong merge rate, measured progress | Infra hardening |
| **NanoClaw** | 1 | 25 | 8 | ❌ | 🟢 Good fix coverage, CI risk | Maintenance |
| **NanoBot** | 0 | 21 | 7 | ❌ | 🟢 High bug responsiveness, merge conflicts | Stabilization |
| **CoPaw** | 7 | 4 | 0 | ❌ | 🟠 Backlog-heavy, maintainer throughput constrained | Bug-fix queue |
| **PicoClaw** | 2 | 6 | 4 | ❌ | 🟠 Stale PR cleanup, critical bugs unmerged | Maintenance sweep |
| **Moltis** | 1 | 3 | 0 | ❌ | 🟢 Proactive maintenance, pre-release | Stabilization |
| **LobsterAI** | 0 | 6 | 5 | ❌ | 🟢 Batch-closed stale PRs, features delivered | Feature-complete? |
| **NullClaw** | 0 | 0 | 0 | ❌ | ⚪ Dormant | Inactive |
| **TinyClaw** | 0 | 0 | 0 | ❌ | ⚪ Dormant | Inactive |
| **ZeptoClaw** | 0 | 0 | 0 | ❌ | ⚪ Dormant | Inactive |

*Health Score: 🟢 Healthy (good velocity/fix rate/no critical blockers) | 🟡 Caution (high velocity but regressions/platform gaps) | 🟠 Warning (backlog/maintainer constraints) | ⚪ Inactive

---

## 3. OpenClaw's Position

**Advantages vs Peers:**
- **Scale of validation**: 19-comment community-driven release gate (#125626) with real-gateway testers—unmatched operational realism.
- **Gateway-centric architecture**: Multi-channel (WhatsApp, Telegram, Slack, etc.), multi-agent routing, and session persistence are production concerns others are just reaching (NanoClaw multi-bot, Hermes fleet, ZeroClaw RFC).
- **Subagent/agent-parity focus**: Explicit work on MCP tool injection (#85030), completion delivery (#67777), and spawn reliability (#124284) leads the ecosystem.

**Technical Approach Differences:**
- **Monolithic gateway + control plane** vs. NanoBot/IronClaw's modular WebUI/provider abstraction, or ZeroClaw's WASM plugin pivot.
- **Beta-as-validation-gate**: Public beta.2 testing on live gateways contrasts with NanoClaw/IronClaw's main-branch rolling fixes.
- **SQLite-backed durability**: Freelist corruption (#126821) reveals deep investment in local-first persistence; most peers use lighter state stores.

**Community Size**: Largest active contributor signal (500 PRs/24h). Hermes (100) and ZeroClaw (100) are closest; others are 10–30× smaller. OpenClaw's issue backlog (474 open) suggests **highest absolute demand** but also highest operational burden.

---

## 4. Shared Technical Focus Areas

| Requirement | Projects Affected | Specific Needs |
|-------------|-------------------|----------------|
| **Reasoning/extended-thinking model support** | OpenClaw (#68596), NanoBot (#3869), Hermes (#78981, #92302), CoPaw (#7196) | Watchdog timeouts, streaming handling, token accounting, reasoning trace UX |
| **Subagent/multi-agent reliability** | OpenClaw (#85030, #67777, #124284), Hermes (#63197), IronClaw (#7818), ZeroClaw (#9487) | Tool injection parity, completion delivery, spawn success, session ownership |
| **Gateway/session persistence & recovery** | OpenClaw (#124788, #126821), Hermes (#92594, #89332), ZeroClaw (#9487), IronClaw (#7700) | Event-loop stability, SQLite durability, session restoration, control socket |
| **Cross-platform desktop delivery** | Hermes (#92095, #58593), ZeroClaw (#7462), PicoClaw (#3319), CoPaw (#7043) | Linux .desktop/uv, Windows AppImage/sandbox, PowerShell encoding, update reliability |
| **Provider abstraction & compatibility** | NanoBot (#4430, #3869), IronClaw (#7491), NanoClaw (#3355), Moltis (#1232), ZeroClaw (#8396) | Unified contracts, OpenAI-strict schemas, fallback chains, wire-protocol first-class |
| **Security boundaries & sandboxing** | ZeroClaw (#6996), IronClaw (#7810), Moltis (#1230), Hermes (#92551, #83832), OpenClaw (#116489) | Fail-closed hooks, credential mediation, PKCE compliance, approval gates, custom CA |
| **Token/cost observability** | NanoBot (#5490, #5469), IronClaw (#7824), Hermes (#91621), NanoClaw (#3447) | Per-turn accounting, compaction strategies, circuit-breaker accuracy, provider usage backend |

---

## 5. Differentiation Analysis

| Project | Primary Focus | Target User | Architecture Signal |
|---------|---------------|-------------|---------------------|
| **OpenClaw** | Gateway/server for multi-channel, multi-agent deployments | Power users, self-hosters, infra teams | Monolithic gateway, SQLite durability, beta validation gates |
| **Herm

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-08-23

## 1. Today's Overview
NanoBot showed **high development velocity** on 2026-08-22 with **21 pull requests updated** (14 open, 7 merged/closed) but **zero issue activity**. The project is in an active refactoring and stabilization phase: core work centers on WebUI turn observability, provider usage contracts, token accounting, and session lifecycle hardening. No new releases were cut. The PR queue shows a healthy mix of bug fixes (p2 priority), feature work (follow-up suggestions, localization, file preview), and infrastructure improvements (email IMAP optimization, LangSmith tracing restoration, MCP error handling). Several open PRs carry `conflict` labels, indicating parallel workstreams that will need merge resolution.

## 2. Releases
**No new releases published today.**

## 3. Project Progress — Merged / Closed PRs (2026-08-22)
| PR | Title | Area | Impact |
|----|-------|------|--------|
| [#5488](https://github.com/HKUDS/nanobot/pull/5488) | docs: refresh team and contributor credits | Documentation / Community | Updated maintainer attribution (Xubin Ren, Yongru Chen) and replaced contrib.rocks with native clickable avatar wall. |
| [#5486](https://github.com/HKUDS/nanobot/pull/5486) | feat(webui): unify turn observability | WebUI / UX | Projects each user turn into a single answer surface while preserving ordered reasoning, tool, file-edit, and intermediate segments; live activity auto-expands/collapses; trustworthy per-turn token reporting. |
| [#4430](https://github.com/HKUDS/nanobot/pull/4430) | feat(web): configure web_fetch provider | Web / Providers | Adds configurable `web_fetch` with `auto`, `tavily`, `jina`, `readability` modes; replaces `useJinaReader` toggle. |
| [#3869](https://github.com/HKUDS/nanobot/pull/3869) | fix(providers): DeepSeek message hardening | Providers / Stability | Fixes null-content 400 errors, "(empty)" placeholder leakage, and unconditional assistant-text dropping for DeepSeek v4-pro/flash. |
| [#3294](https://github.com/HKUDS/nanobot/pull/3294) | feat(dream): optional kill switch + custom Phase 1/2 template paths | Dream / Self-learning | Adds `enabled` kill switch and custom template paths for Dream cron job; opt-in, backward compatible. |
| [#5156](https://github.com/HKUDS/nanobot/pull/5156) | fix(telegram): recover from silently stalled polling | Telegram / Reliability | Recovers bot from permanent message-loss after transient network blips (proxy instability); adds watchdog + automatic re-poll. |
| [#5484](https://github.com/HKUDS/nanobot/pull/5484) | fix(mcp): flag business-error envelopes returned with isError=false | MCP / Bug Fix | Detects error payloads embedded in successful tool results (e.g., `{"code":404,"msg":"..."}`) and surfaces them as failures. |

## 4. Community Hot Topics — Most Active PRs (by comment proxy)
| PR | Author | Area | Signal |
|----|--------|------|--------|
| [#5491](https://github.com/HKUDS/nanobot/pull/5491) | chengyongru | WebUI / Bug Fix | **Preserve answer slices across tool turns** — keeps reasoning/tool activity inside activity surface while merging answer slices; critical for multi-turn UX fidelity. |
| [#5487](https://github.com/HKUDS/nanobot/pull/5487) | yuanyi1415 | WebUI / Feature | **File preview + subagent lifecycle replay** — markdown rendering, open-in-system, path alignment with session tool evidence; subagent activity replay. |
| [#5408](https://github.com/HKUDS/nanobot/pull/5408) | ZhouJ-sh | WebUI / Feature | **Follow-up suggestions** — ephemeral, chat-scoped suggestions after successful turns; DeerFlow-style interaction; provider-neutral line protocol. |
| [#5367](https://github.com/HKUDS/nanobot/pull/5367) | ZhouJ-sh | WebUI / i18n | **Localize agent activity labels** across 10 locales; live language-switch updates; preserves raw tool values. |
| [#5481](https://github.com/HKUDS/nanobot/pull/5481) | chengyongru | Trajectory / Observability | **Unified provider usage backend** — content-free trajectory row per retry-managed attempt (fallbacks, errors, cancellations); part of native stack. |

*Underlying needs*: Contributors are converging on **turn-level observability** (token usage, reasoning/tool separation, recovery) and **provider abstraction maturity** (typed contracts, tracing, error normalization). WebUI is the primary interaction surface receiving UX polish.

## 5. Bugs & Stability — Today’s Reports & Fixes
| Severity | PR / Issue | Summary | Fix Status |
|----------|------------|---------|------------|
| **High** | [#5483](https://github.com/HKUDS/nanobot/pull/5483) | Deleted sessions recreated by delayed cross-session messages | **Fix PR open** (p2) — marks cross-session delivery as requiring existing session; checks metadata without creating session. |
| **High** | [#5485](https://github.com/HKUDS/nanobot/pull/5485) | LangSmith tracing lost after LiteLLM→native SDK migration | **Fix PR open** (p2) — wraps OpenAI/Anthropic/Bedrock clients with LangSmith wrappers at native boundary. |
| **Medium** | [#5490](https://github.com/HKUDS/nanobot/pull/5490) | Aggregate turn token usage unclear (regression) | **Fix PR open** (p2) — shows model call count, latest request context, configured capacity in tooltip; adds regression test. |
| **Medium** | [#5469](https://github.com/HKUDS/nanobot/pull/5469) | TUI shows incorrect request context (measured vs cumulative) | **Fix PR open** (p2, conflict) — retains latest provider-reported request for UI; shows prompt context/window, cache ratio, output tokens, gen rate. |
| **Medium** | [#5484](https://github.com/HKUDS/nanobot/pull/5484) | MCP servers return business errors with `isError=false` | **Merged** — flags embedded error envelopes as failures. |
| **Medium** | [#5471](https://github.com/HKUDS/nanobot/pull/5471) | Ephemeral SDK runs mutate session state | **Fix PR open** — ensures `ephemeral=True` leaves session state unchanged. |
| **Low** | [#5491](https://github.com/HKUDS/nanobot/pull/5491) | Answer text leaks into reasoning shell across tool turns | **Fix PR open** (p2) — preserves answer slices outside reasoning shell. |

## 6. Feature Requests & Roadmap Signals
| Feature | Evidence | Likelihood for Next Version |
|---------|----------|----------------------------|
| **Follow-up suggestions (WebUI)** | [#5408](https://github.com/HKUDS/nanobot/pull/5408) — provider-neutral, DeerFlow parity, ephemeral & chat-scoped | **High** — active PR, p2, test included |
| **WebUI localization of agent activity** | [#5367](https://github.com/HKUDS/nanobot/pull/5367) — 10 locales, live switch, raw value preservation | **High** — long-running, conflict but active |
| **File preview panel enhancements** | [#5487](https://github.com/HKUDS/nanobot/pull/5487) — markdown render, open-in-system, path alignment | **High** — bundled with subagent replay work |
| **User-controlled turn recovery (Continue/Dismiss)** | [#5420](https://github.com/HKUDS/nanobot/pull/5420) — sidecar checkpoint, explicit recovery, no auto-resume | **Medium-High** — WebUI + TUI, p2 scope |
| **Configurable web_fetch providers** | [#4430](https://github.com/HKUDS/nanobot/pull/4430) — merged today; `auto/tavily/jina/readability` | **Released** (in next cut) |
| **Dream kill switch & custom templates** | [#3294](https://github.com/HKUDS/nanobot/pull/3294) — merged today; opt-in self-learning control | **Released** (in next cut) |
| **Unified provider usage backend / typed LLMUsage contract** | [#5480](https://github.com/HKUDS/nanobot/pull/5480), [#5481](https://github.com/HKUDS/nanobot/pull/5481) — refactor + trajectory delta | **Medium** — foundational, stacked PRs, test coverage |

## 7. User Feedback Summary
- **Telegram bot reliability**: Production report of silent polling stall after proxy blips ([#5156](https://github.com/HKUDS/nanobot/pull/5156)) — users experience permanent message loss without logs; watchdog fix merged.
- **DeepSeek compatibility**: Null-content 400s, placeholder leakage, assistant-text dropping ([#3869](https://github.com/HKUDS/nanobot/pull/3869)) — direct API pain points for DeepSeek v4-pro/flash users.
- **Turn observability**: Users need trustworthy per-turn token counts, clear separation of reasoning vs. final answer, and recovery from interrupted turns ([#5491](https://github.com/HKUDS/nanobot/pull/5491), [#5490](https://github.com/HKUDS/nanobot/pull/5490), [#5420](https://github.com/HKUDS/nanobot/pull/5420)).
- **MCP error handling**: Silent success on business-error envelopes causes agent to continue on failure ([#5484](https://github.com/HKUDS/nanobot/pull/5484)) — now fixed.
- **Session hygiene**: Deleted sessions resurrected by delayed messages ([#5483](https://github.com/HKUDS/nanobot/pull/5483)) — fix in review.
- **Ephemeral SDK runs**: Documented as non-persisting but actually mutated state ([#5471](https://github.com/HKUDS/nanobot/pull/5471)) — fix in review.

## 8. Backlog Watch — Stale / Needs Attention
| Item | Age | Status | Why It Matters |
|------|-----|--------|----------------|
| [#5408](https://github.com/HKUDS/nanobot/pull/5408) | 6 days | Open, conflict | Follow-up suggestions — UX differentiator; needs rebase/conflict resolution. |
| [#5367](https://github.com/HKUDS/nanobot/pull/5367) | 10 days | Open, conflict | Full agent activity localization — touches 10 locales; merge debt accumulating. |
| [#5487](https://github.com/HKUDS/nanobot/pull/5487) | 1 day | Open, conflict | File preview + subagent replay — two feature batches in one PR; may need split. |
| [#5469](https://github.com/HKUDS/nanobot/pull/5469) | 2 days | Open, conflict | TUI token display fix — conflicts with parallel token-accounting work. |
| [#5480](https://github.com/HKUDS/nanobot/pull/5480) / [#5481](https://github.com/HKUDS/nanobot/pull/5481) | 2 days | Open, stacked | Provider usage contract refactor + trajectory backend — foundational; blocked on review order. |
| [#5420](https://github.com/HKUDS/nanobot/pull/5420) | 5 days | Open | Turn recovery (Continue/Dismiss) — UX-critical for WebSocket interruption scenarios. |

---

**Health Indicators**  
- ✅ **Velocity**: 21 PR updates in 24h, 7 merged  
- ✅ **Bug responsiveness**: 6 bug-fix PRs opened/merged today (p2 priority)  
- ⚠️ **Merge conflicts**: 6 open PRs carry `conflict` label — coordination needed  
- ✅ **Test discipline**: Most p2 PRs include regression tests  
- 📦 **Release cadence**: No cut today; next release likely to bundle web_fetch config, Dream kill switch, MCP error fix, Telegram watchdog, and WebUI observability unification.

*Data source: GitHub API snapshot for HKUDS/nanobot on 2026-08-23 covering 2026-08-22 activity.*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-08-23

---

## 1. Today's Overview

Hermes Agent shows **high velocity with 100 total items updated** (50 issues, 50 PRs) in the last 24 hours, indicating intense active development. The project is in a **stabilization and hardening phase** — no new releases, but significant work on fleet update reliability, gateway control surface, desktop installer fixes, and security hardening. Critical bugs persist around session stability (DeepSeek 500k-token sessions), Windows Docker sandboxing, and Linux desktop update loops. The community is actively debating architectural direction (webhook feature package, gateway control socket, task completion verification as a "sixth law").

---

## 2. Releases

**No new releases** in the last 24 hours. Current latest version appears to be v0.20.4 (referenced in #92480).

---

## 3. Project Progress — Merged/Closed Today

| PR | Type | Summary |
|----|------|---------|
| [#92594](https://github.com/NousResearch/hermes-agent/pull/92594) | **Bug Fix** | Restored persisted heartbeat watches from durable gateway session routing after startup; added retry logic for platform-scoped restoration after adapter reconnects. |
| [#92088](https://github.com/NousResearch/hermes-agent/pull/92088) | **Bug Fix** | Fixed Linux `.desktop` launcher resolving a Hermes-capable interpreter (duplicate of #92122). |
| [#17235](https://github.com/NousResearch/hermes-agent/pull/17235) | **Feature** | Added auxiliary same-provider model fallbacks for vision/compression/session search tasks — **closed** (likely superseded or merged elsewhere). |
| [#92551](https://github.com/NousResearch/hermes-agent/issues/92551) | **Security Bug** | Computer_use approval gate incorrectly returns "approved" when no CLI callback registered — **closed as duplicate**. |

**Net progress**: 3 PRs closed/merged, 47 PRs remain open. The closed items address gateway session persistence, desktop launcher reliability, and a security boundary issue.

---

## 4. Community Hot Topics — Most Active Discussions

| Item | Comments | Core Issue | Underlying Need |
|------|----------|------------|-----------------|
| [#66616](https://github.com/NousResearch/hermes-agent/issues/66616) | **78** | Skills index stale (29.8h old, limit 26h) — automated freshness probe failing | **Reliability of automated docs/skills pipeline**; cron workflow (`skills-index.yml`) not running reliably |
| [#84834](https://github.com/NousResearch/hermes-agent/issues/84834) | **22** | Webhook Feature Package — graph-gated 5×2×3 repair for entire webhook surface | **Architectural coherence**: ingress, execution, delivery, config, UI, deployment, docs all need coordinated overhaul |
| [#91277](https://github.com/NousResearch/hermes-agent/issues/91277) | **14** | Fleet update reliability: no unified plan for local/remote/multi-profile/image-managed installs | **Product-quality updater**: ~30 open issues + 15 PRs patching corners of same problem; needs verification, rollback, cross-platform plan |
| [#78981](https://github.com/NousResearch/hermes-agent/issues/78981) | **8** | DeepSeek 500k-token session permanently dies after context-compression hangs | **Session survival at scale**: compression stream stalls 120s+, interrupted turn never recovers, later messages never start |
| [#92095](https://github.com/NousResearch/hermes-agent/issues/92095) | **5** | Linux `.desktop` `Exec=` points to bare uv interpreter instead of venv python — silent failure | **Installer correctness**: uv-based installs broken; `.resolve()` dereferences venv symlink |
| [#92091](https://github.com/NousResearch/hermes-agent/issues/92091) | **5** | Gateway has no owned control socket — all processes scan process table heuristics | **Architectural root cause**: fleet-update bugs stem from lack of gateway-owned control surface |

**Pattern**: Top issues are **cross-cutting reliability problems** (skills index, fleet updates, session survival, installer, gateway control) rather than isolated feature requests.

---

## 5. Bugs & Stability — Ranked by Severity

### 🔴 Critical (Data Loss / Session Death / Security)

| Issue | Severity | Status | Fix PR |
|-------|----------|--------|--------|
| [#78981](https://github.com/NousResearch/hermes-agent/issues/78981) | **Critical** — Session permanently dies after context-compression hangs (DeepSeek, 500k tokens) | Open | None yet |
| [#92457](https://github.com/NousResearch/hermes-agent/issues/92457) | **Critical** — Exposed webhook credential in committed profile archive; Docker images need republishing | Open | None yet |
| [#83832](https://github.com/NousResearch/hermes-agent/issues/83832) | **Critical** — PKCE state cookie serialized with literal `;` breaks OIDC login (RFC 6265 violation) | Open | None yet |
| [#92551](https://github.com/NousResearch/hermes-agent/issues/92551) | **Critical** — `computer_use` approval gate auto-approves on all gateway surfaces (no CLI callback) | **Closed (dup)** | Implied by #92596 area |

### 🟠 High (Broken Core Flows)

| Issue | Severity | Status | Fix PR |
|-------|----------|--------|--------|
| [#92095](https://github.com/NousResearch/hermes-agent/issues/92095) | **High** — Linux desktop `.desktop` Exec broken on uv installs (silent fail) | Open | [#92122](https://github.com/NousResearch/hermes-agent/pull/92122), [#92090](https://github.com/NousResearch/hermes-agent/pull/92090) |
| [#92271](https://github.com/NousResearch/hermes-agent/issues/92271) | **High** — Windows Docker sandbox broken: session folder name contains `:` (WinError 267) | Open | None yet |
| [#58593](https://github.com/NousResearch/hermes-agent/issues/58593) | **High** — Linux in-app update fails to stick, resets Electron sandbox permissions | Open | None yet |
| [#92302](https://github.com/NousResearch/hermes-agent/issues/92302) | **High** — 120s timeout too small for local models + big context (Windows) | Open | None yet |
| [#92565](https://github.com/NousResearch/hermes-agent/issues/92565) | **High** — MCP server credential changes never reconnect (sessions keyed by name only) | Open | [#92596](https://github.com/NousResearch/hermes-agent/pull/92596) |
| [#92553](https://github.com/NousResearch/hermes-agent/issues/92553) | **High** — `pre_tool_call` shell hooks silently discard `{"action": "approve"}`; `hooks doctor` reports healthy | Open | None yet |
| [#91621](https://github.com/NousResearch/hermes-agent/issues/91621) | **High** — Codex TTFB scaling capped back to 120s for large contexts | Open | None yet |
| [#89332](https://github.com/NousResearch/hermes-agent/issues/89332) | **High** — No file-identity guard on `state.db`; gateway limps through persistence outage | Open | None yet |

### 🟡 Medium (Degraded Experience)

| Issue | Severity | Status |
|-------|----------|--------|
| [#66616](https://github.com/NousResearch/hermes-agent/issues/66616) | **Medium** — Skills index stale (automated probe degraded) | Open |
| [#70606](https://github.com/NousResearch/hermes-agent/issues/70606) | **Medium** — Hindsight `local_embedded` overwrites `hermes.env` on every daemon start | Open |
| [#71239](https://github.com/NousResearch/hermes-agent/issues/71239) | **Medium** — Telegram consumes updates but stalls Application dispatcher invisibly | Open |
| [#75618](https://github.com/NousResearch/hermes-agent/issues/75618) | **Medium** — `skill_manage` refuses background-review patches (ContextVar read-mark lost) | Open |
| [#91459](https://github.com/NousResearch/hermes-agent/issues/91459) | **Medium** — HUD mode persistent opaque backdrop on Windows 11 | Open |
| [#92480](https://github.com/NousResearch/hermes-agent/issues/92480) | **Medium** — `.pptx`/`.pdf` attachments lose extension in save dialog (Desktop v0.20.4) | Open |
| [#92506](https://github.com/NousResearch/hermes-agent/issues/92506) | **Medium** — `profiles.list` JSON-RPC never answers (datetime in `ui_meta` unserializable) | Open |
| [#92554](https://github.com/NousResearch/hermes-agent/issues/92554) | **Medium** — Writing `config.yaml` destroys all user comments | Open |

---

## 6. Feature Requests & Roadmap Signals

| Issue/PR | Signal | Likelihood for Next Version |
|----------|--------|----------------------------|
| [#84834](https://github.com/NousResearch/hermes-agent/issues/84834) | **Webhook Feature Package** — full surface overhaul (ingress, exec, delivery, config, UI, deploy, docs) | **High** — meta-issue tracking coordinated work; 22 comments shows org priority |
| [#91277](https://github.com/NousResearch/hermes-agent/issues/91277) | **Unified fleet update plan** — one deployment plan for all install types | **High** — acknowledged as "least reliable capability"; 30+ issues/15+ PRs converging |
| [#92091](https://github.com/NousResearch/hermes-agent/issues/92091) | **Gateway control socket** — replace process-scan heuristics with owned contract | **High** — identified as root cause for fleet-update bugs; design discussion active |
| [#74816](https://github.com/NousResearch/hermes-agent/issues/74816) | **Multi-device session sync** — real-time shared sessions across interfaces (WeChat model) | **Medium** — 3 comments, 2👍; vision clear but architecture heavy |
| [#91230](https://github.com/NousResearch/hermes-agent/issues/91230) | **Task Completion Verification** as 6th Hermes law (adversarially verified transformation) | **Medium** — architectural/philosophical; needs-decision label |
| [#63197](https://github.com/NousResearch/hermes-agent/pull/63197) | **Recoverable mobile approvals** — stable IDs, resume snapshots, terminal tombstones | **Medium** — long-running PR (since Jul), touches auth/session/message-delivery |
| [#51152](https://github.com/NousResearch/hermes-agent/pull/51152) | **Memory tiering** — `[core]` prefix always injected, extended on-demand via `search` | **Medium** — reduces system prompt token cost; long-running |
| [#92592](https://github.com/NousResearch/hermes-agent/pull/92592) | **Approvals in session chat streams** — native SSE `approval.request` for dashboard/UI | **High** — new PR today, enables external UIs to surface/resolve approvals inline |
| [#91309](https://github.com/NousResearch/hermes-agent/pull/91309) | **`session_is_busy` public API** + `agent_busy` hook context | **High** — new PR, enables external awareness of agent state |
| [#17235](https://github.com/NousResearch/hermes-agent/pull/17235) | **Auxiliary same-provider fallbacks** — ordered fallbacks for vision/compression/search | **Closed** — but signals direction for provider resilience |

**Roadmap prediction**: Next version will likely ship **gateway control socket**, **unified fleet updater foundations**, **webhook package increments**, **MCP credential reconnection**, **desktop installer fixes (Linux/Windows)**, and **approval streaming API**.

---

## 7. User Feedback Summary — Real Pain Points

| Pain Point | Evidence | User Impact |
|------------|----------|-------------|
| **Fleet updates are unreliable** | #91277 (14 comments), #58593 (4👍), #92095, #92122, #92090, #91079 | Users cannot trust in-app updates; Linux updates reset permissions; Windows rebuilds non-transactional; `.desktop` launchers broken on uv |
| **Long sessions die silently** | #78981 (DeepSeek 500k tokens), #92302 (120s timeout), #91621 (Codex TTFB cap) | Power users lose hours of context; no recovery; timeout defaults hostile to local models |
| **Desktop app UX regressions** | #40391 (WebSocket fallback loop), #91459 (HUD opaque backdrop), #92480 (lost extensions), #92597 (transcript jumps), #92598 (double-quit) | Daily drivers experience visual glitch

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-08-23

## 1. Today's Overview
PicoClaw saw a burst of maintenance activity on 2026-08-22 with **6 PRs updated** (2 open, 4 closed) and **2 issues active**, though no new releases were published. The majority of PR movement appears to be a batch review/cleanup of long-stale contributions—some dating back to February–March 2026—rather than fresh feature work. Two critical bugs remain open: an MCP server failure that hangs the agent loop (#3269, with a fix PR #3337 open) and a Telegram edit-message runaway loop (#3343, reported yesterday). Overall project health shows a backlog of stale PRs being processed, but core stability issues in MCP and Telegram integrations persist without merged fixes.

## 2. Releases
**No new releases** in the last 24 hours.

## 3. Project Progress — Merged/Closed PRs (2026-08-22)
| PR | Title | Domain | Status | Key Change |
|----|-------|--------|--------|------------|
| [#3319](https://github.com/sipeed/picoclaw/pull/3319) | fix(tools): honor exec timeout and boolean run options | tools | **Closed** | Exec tool now respects per-run `timeout`, `background`, `pty` (boolean) arguments instead of global config only. |
| [#714](https://github.com/sipeed/picoclaw/pull/714) | skills: install/reinstall CLI and refactor into skillsCmd | skill | **Closed** | Added `reinstall` subcommand, GitHub Trees API support for full-directory installs, repo@branch/subpath parsing. |
| [#1083](https://github.com/sipeed/picoclaw/pull/1083) | fix(cron): preserve recurring job schedule after execution | cron | **Closed** | Recurring jobs (every_seconds/cron_expr) no longer silently become one-time tasks after first run. |
| [#1545](https://github.com/sipeed/picoclaw/pull/1545) | fix: merge PR #1500 #1490 #1488 #1487 #1485 | multiple | **Closed** | Bulk merge of 5 earlier fix PRs (details in linked PRs). |

*All four closed PRs were created months ago and marked `stale`; today’s closure suggests a maintainer sweep of the backlog.*

## 4. Community Hot Topics
| Item | Type | Activity | Core Need |
|------|------|----------|-----------|
| [#3269](https://github.com/sipeed/picoclaw/issues/3269) | Issue (BUG) | 6 comments, 👍1, updated 2026-08-22 | **Agent-loop hang on MCP failure** — users lose chat responsiveness entirely when an MCP server is unreachable; blocks production use of MCP. |
| [#3337](https://github.com/sipeed/picoclaw/pull/3337) | PR (fix) | 0 comments, updated 2026-08-22 | Direct fix for #3269: ensures `AgentLoop.Run` doesn’t exit on `ensureMCPInitialized` error, keeps interface alive. |
| [#3343](https://github.com/sipeed/picoclaw/issues/3343) | Issue (BUG) | 0 comments, created 2026-08-22 | **Telegram edit-message storm** — feedback animation loops `editMessageText` every 3s indefinitely after a failed turn (228k+ edits), triggering rate limits. |

*Underlying theme: **resilience of external integrations (MCP, Telegram)** under partial failure. Users need graceful degradation, not hard hangs or API abuse.*

## 5. Bugs & Stability — Ranked by Severity
| Rank | Issue/PR | Severity | Status | Fix PR? |
|------|----------|----------|--------|---------|
| 1 | [#3269](https://github.com/sipeed/picoclaw/issues/3269) — MCP failure hangs agent loop | **Critical** (complete chat stoppage) | Open | Yes: [#3337](https://github.com/sipeed/picoclaw/pull/3337) (open, stale) |
| 2 | [#3343](https://github.com/sipeed/picoclaw/issues/3343) — Telegram edit loop (228k+ calls) | **High** (rate-limit ban risk, resource waste) | Open | No |
| 3 | [#3319](https://github.com/sipeed/picoclaw/pull/3319) — exec tool ignores per-run timeout | **Medium** (predictability/security) | Closed (fixed) | Merged in #3319 |
| 4 | [#1083](https://github.com/sipeed/picoclaw/pull/1083) — cron jobs stop recurring | **Medium** (silent schedule loss) | Closed (fixed) | Merged in #1083 |

## 6. Feature Requests & Roadmap Signals
| Signal | Source | Likelihood for Next Version |
|--------|--------|-----------------------------|
| **DeltaChat cleanup & modernization** (drop legacy, JSON-RPC secrets, invite-link rename) | [#3222](https://github.com/sipeed/picoclaw/pull/3222) (open, -200 LOC) | High — large refactor, maintainer interest implied by recent update |
| **Skills CLI overhaul** (reinstall, subpath, GitHub Trees API) | [#714](https://github.com/sipeed/picoclaw/pull/714) (closed) | Already merged — will appear in next release |
| **Cron reliability** (recurring job persistence) | [#1083](https://github.com/sipeed/picoclaw/pull/1083) (closed) | Already merged |
| **MCP connection resilience** (non-blocking init, retry/fallback) | [#3269](https://github.com/sipeed/picoclaw/issues/3269) + [#3337](https://github.com/sipeed/picoclaw/pull/3337) | High — critical bug with fix PR awaiting review |
| **Telegram animation guardrails** (max edits, backoff, stop on failure) | [#3343](https://github.com/sipeed/picoclaw/issues/3343) | Medium — new, no PR yet; may wait for 24h triage |

## 7. User Feedback Summary
- **Pain points**: 
  - MCP server downtime = total chat freeze (multiple users affected, per #3269 comments).
  - Telegram bot can self-DoS via edit-message loop, risking account rate-limits (#3343).
  - Exec tool timeout contract broken (silently ignored user-supplied value) — now fixed.
  - Cron jobs silently become one-off — now fixed.
- **Use cases visible**: Multi-platform chat (DeltaChat, Telegram), MCP tool chains, scheduled automation (cron), skill/plugin management.
- **Sentiment**: Frustration on long-open critical bugs (#3269 open 34 days); relief on merged fixes for tools/cron/skills. No explicit praise/complaints beyond bug reports.

## 8. Backlog Watch — Stale Items Needing Maintainer Attention
| Item | Age | Why It Matters |
|------|-----|----------------|
| [#3222](https://github.com/sipeed/picoclaw/pull/3222) — DeltaChat refactor (-200 LOC) | 52 days | Large cleanup, modernizes config/secrets; blocked on review. |
| [#3337](https://github.com/sipeed/picoclaw/pull/3337) — Fix MCP hang | 9 days | Direct fix for top-critical bug #3269; marked stale despite urgency. |
| [#3269](https://github.com/sipeed/picoclaw/issues/3269) — MCP hang issue | 34 days | Highest user impact; fix PR exists but unmerged. |
| [#3343](https://github.com/sipeed/picoclaw/issues/3343) — Telegram edit storm | 1 day | New, severe, no PR; needs triage & fix to prevent bot bans. |

---
*Data sourced from GitHub API (issues/PRs updated 2026-08-22). Links point to live GitHub items.*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-08-23

## 1. Today's Overview
NanoClaw showed **high development velocity** with 25 PRs updated and 1 new issue in the last 24 hours. The project is in active maintenance mode with a strong focus on **stability fixes** (circuit breaker, test flakiness, provider integrations) and **multi-bot setup improvements** (Telegram, Slack). Eight PRs were merged/closed today, indicating healthy review throughput. No new release was cut, suggesting changes are accumulating for a future patch or minor version.

## 2. Releases
**No new releases** published today. The project appears to be on a rolling development cycle with fixes and features landing directly on `main` via merged PRs.

## 3. Project Progress — Merged / Closed PRs (8 total)

| PR | Type | Summary | Impact |
|----|------|---------|--------|
| [#3394](https://github.com/nanocoai/nanoclaw/pull/3394) | **Fix (Slack)** | Restored manual-install fallback URL & fixed agent-driven provisioning dead-end when workspace policy blocks managed app install. | Unblocks Slack onboarding for restricted workspaces. |
| [#3390](https://github.com/nanocoai/nanoclaw/pull/3390) | **Fix (Slack Setup)** | Skip auto-provisioning when `SLACK_BOT_TOKEN` already exists; prevents duplicate app creation on re-run. | Eliminates duplicate Slack app noise. |
| [#3443](https://github.com/nanocoai/nanoclaw/pull/3443) | **Build** | Dropped `better-sqlite3` from `onlyBuiltDependencies`; uses bundled prebuilds (v13+). | Faster installs, avoids `node-gyp` failures. |
| [#3444](https://github.com/nanocoai/nanoclaw/pull/3444) | **Fix (Upgrade State)** | Fallback to version-only comparison when Git cannot identify checkout (e.g., packaged builds). | Prevents false-positive upgrade prompts in containers. |
| [#3445](https://github.com/nanocoai/nanoclaw/pull/3445) | **Admin** | Closed — opened against wrong repository. | No code impact. |
| *(3 additional closed PRs not individually detailed in feed)* | | | |

**Net advancement**: Slack onboarding hardened, build reliability improved, upgrade detection made container-friendly.

## 4. Community Hot Topics — Most Active Open PRs/Issues
*(All items have 0 comments/reactions in the 24h window; ranked by perceived scope & cross-cutting impact)*

| Item | Link | Why It Matters |
|------|------|----------------|
| **PR #3447** — Circuit-breaker crash counter scoped to instance | [#3447](https://github.com/nanocoai/nanoclaw/pull/3447) | Fixes a **critical reliability bug**: shared `data/` mount caused crash counts to leak across instances, leading to spurious back-offs. |
| **PR #3453 (Issue)** — `stdin-json` tests flaky on Node 25+ due to `tsx` loader deprecation noise on stderr | [#3453](https://github.com/nanocoai/nanoclaw/issues/3453) | Blocks CI on upcoming Node LTS; requires test harness or engine-range update. |
| **PR #3449** — Telegram `allowedUpdates` pinning to stop channel-post blackholing | [#3449](https://github.com/nanocoai/nanoclaw/pull/3449) | Addresses silent message loss; server-side persistence of `allowed_updates` is a known Telegram foot-gun. |
| **PR #3438 / #3435 / #3437** — “Add another Telegram bot” wizard flow, instance-aware pairing & docs | [#3438](https://github.com/nanocoai/nanoclaw/pull/3438) [#3435](https://github.com/nanocoai/nanoclaw/pull/3435) [#3437](https://github.com/nanocoai/nanoclaw/pull/3437) | Multi-bot support for Telegram — high user demand signal. |
| **PR #3355 / #3356** — Cursor Agent SDK provider skill + payload | [#3355](https://github.com/nanocoai/nanoclaw/pull/3355) [#3356](https://github.com/nanoclaw/pull/3356) | New **provider integration** (Cursor), expanding the agent ecosystem. |

## 5. Bugs & Stability — Today’s Reports & Fixes

| Severity | Issue / PR | Status | Fix PR |
|----------|------------|--------|--------|
| **High** | Circuit-breaker crash counter shared across instances (`data/` mount) | Open | [#3447](https://github.com/nanocoai/nanoclaw/pull/3447) |
| **High** | `stdin-json` tests fail on Node 25+ (tsx deprecation stderr pollution) | Open (Issue) | — |
| **Medium** | Telegram channel posts dropped due to stale `allowedUpdates` | Open | [#3449](https://github.com/nanocoai/nanoclaw/pull/3449) |
| **Medium** | Unknown-sender gate blocks bot/webhook senders (Discord/Slack/Telegram) | Open | [#3446](https://github.com/nanocoai/nanoclaw/pull/3446) |
| **Medium** | Slack MPDM approval cards show raw `mpdm-…` slug instead of readable name | Open | [#3385](https://github.com/nanocoai/nanoclaw/pull/3385) |
| **Low** | Telegram pairing card says “6 digits” but code sends 5 | Open | [#3431](https://github.com/nanocoai/nanoclaw/pull/3431) |
| **Low** | Polling adapters incorrectly open webhook server | Open | [#3434](https://github.com/nanocoai/nanoclaw/pull/3434) |

**Note**: 5 of 7 bugs above already have open fix PRs — good remediation velocity.

## 6. Feature Requests & Roadmap Signals

| Signal | Source | Likelihood for Next Release |
|--------|--------|-----------------------------|
| **Multi-Telegram-bot support** (wizard “add another”, instance-aware wiring) | PRs [#3438](https://github.com/nanocoai/nanoclaw/pull/3438), [#3435](https://github.com/nanocoai/nanoclaw/pull/3435), [#3437](https://github.com/nanocoai/nanoclaw/pull/3437) | **High** — 3 coordinated PRs, core-team labeled |
| **Cursor Agent SDK provider** | PRs [#3355](https://github.com/nanocoai/nanoclaw/pull/3355), [#3356](https://github.com/nanocoai/nanoclaw/pull/3356) | **High** — feature-skill + provider payload, core-team |
| **Group-scope override warning for `ncl` CLI** | PR [#3448](https://github.com/nanocoai/nanoclaw/pull/3448) (fixes #2464) | **Medium** — long-standing UX papercut (#2464) |
| **Auto-drop automated senders in approval gate** | PR [#3446](https://github.com/nanocoai/nanoclaw/pull/3446) (fixes #3235) | **Medium** — reduces approval noise |
| **Slack manual-install fallback & re-provision guard** | Merged [#3394](https://github.com/nanocoai/nanoclaw/pull/3394), [#3390](https://github.com/nanocoai/nanoclaw/pull/3390) | **Done** — already in main |

## 7. User Feedback Summary (Inferred from Issues/PRs)
- **Pain**: *“Slack setup creates duplicate apps if I cancel & re-run”* → Fixed in [#3390](https://github.com/nanocoai/nanoclaw/pull/3390).
- **Pain**: *“Telegram channel posts just disappear”* → Root-caused to stale `allowedUpdates` in [#3449](https://github.com/nanocoai/nanoclaw/pull/3449).
- **Pain**: *“Bot messages trigger approval cards nobody can click”* → Fix in [#3446](https://github.com/nanocoai/nanoclaw/pull/3446).
- **Pain**: *“Circuit breaker penalizes all instances sharing a volume”* → Fix in [#3447](https://github.com/nanocoai/nanoclaw/pull/3447).
- **Ask**: *“Let me run multiple Telegram bots from one NanoClaw instance”* → Actively implemented in [#3438](https://github.com/nanocoai/nanoclaw/pull/3438) et al.
- **Ask**: *“Support Cursor as an agent provider”* → In progress [#3355](https://github.com/nanocoai/nanoclaw/pull/3355).

Overall sentiment: **constructive** — users file specific, reproducible issues; maintainers respond with targeted fixes within days.

## 8. Backlog Watch — Items Needing Maintainer Attention

| Item | Age | Why It Matters |
|------|-----|----------------|
| **Issue #3453** — Node 25+ test flakiness | 1 day | Blocks CI on next Node LTS; no fix PR yet. |
| **PR #3385** — MPDM-aware approval cards | 3 days | Core-team labeled, UX polish for Slack group DMs. |
| **PR #3448** — Group-scope override warning (fixes #2464) | 1 day | 2-year-old issue (#2464), improves CLI safety. |
| **PR #3446** — Auto-drop bots in approval gate (fixes #3235) | 1 day | Reduces spurious approval noise across 3 adapters. |
| **PR #3434** — Polling adapters shouldn’t open webhook server | 2 days | Resource leak / port conflict risk. |

---

**Health Indicators**  
✅ **Merge rate**: 8/25 PRs closed today (32%)  
✅ **Fix coverage**: 5/7 bugs have open fix PRs  
✅ **Scope discipline**: Most PRs are small, targeted, well-labeled  
⚠️ **CI risk**: Node 25+ flakiness (#3453) unaddressed  
⚠️ **Review bandwidth**: 17 open PRs — consider triage to prevent stale queue

*Data sourced from GitHub API (nanocoai/nanoclaw) for 2026-08-22 → 2026-08-23.*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-08-23

## 1. Today's Overview
IronClaw shows high development velocity with **30 total updates** (9 issues, 21 PRs) in the last 24 hours. The project is in a heavy refactoring and infrastructure hardening phase: five PRs merged/closed deliver UI cleanup, test stability, extension setup visibility, and notification lifecycle hardening, while 16 open PRs advance major epics—coding tool contract unification, `AfterTurn` lifecycle hooks, sandbox credential mediation, CI pipeline modernization, and background subagent execution. No new releases were published. Activity is concentrated on core contributors (serrrfirat, henrypark133, italic-jinxin, rdisandro), indicating coordinated sprint work rather than community-driven contributions.

## 2. Releases
**No new releases** in the last 24 hours.

## 3. Project Progress — Merged/Closed PRs Today
| PR | Title | Scope | Status |
|----|-------|-------|--------|
| [#7773](https://github.com/nearai/ironclaw/pull/7773) | Remove duplicate Settings and Extensions tabs | WebUI cleanup | **Closed** |
| [#7774](https://github.com/nearai/ironclaw/pull/7774) | Make Automation presenter date tests timezone-robust | Test stability | **Closed** |
| [#7772](https://github.com/nearai/ironclaw/pull/7772) | Surface extension setup phase and blockers in Configure | Extensions UX | **Closed** |
| [#7700](https://github.com/nearai/ironclaw/pull/7700) | Publish authoritative run outcome notifications | Notifications | **Closed** |
| [#7076](https://github.com/nearai/ironclaw/pull/7076) | Install packages the catalog already publishes | Dependencies/CI | **Closed** |

**Key advances**:  
- **UI debt reduction**: Dead tabs and duplicate route metadata removed (#7773, closes #7768).  
- **Test reliability**: Automation presenter assertions now pass in any timezone (#7774, closes #7767).  
- **Extension onboarding**: Configure modal now surfaces all setup phases/blockers, not just Hosted MCP (#7772, closes #7769).  
- **Notification integrity**: Run-outcome notifications derived from durable Process Journal transitions, with redaction and eligibility rules (#7700, closes #7691).  
- **Dependency hygiene**: Stale PR rebased and merged to align with current manifest schema (#7076).

## 4. Community Hot Topics — Most Active Items
| Item | Type | Comments | Core Signal |
|------|------|----------|-------------|
| [#7824](https://github.com/nearai/ironclaw/issues/7824) | Issue | 2 | **Context window explosion** — full thread replay costs 4× tokens ($10.31 vs $2.52) and drops accuracy (54.4% → 60.5%). Requests Pi-style compaction barrier, structured summaries, overflow recovery. |
| [#7815](https://github.com/nearai/ironclaw/issues/7815) | Issue | 1 | **Onboarding suggestion flow gaps** — end-to-end works but missing “refresh ready set” and “connect” CTA in OOBE drawer. Frontend-only fixes (#7816). |
| [#7491](https://github.com/nearai/ironclaw/pull/7491) | PR | — | **Coding tool contract unification** — single surface with six bare tools (`read`/`write`/`edit`/`glob`/`grep`/`bash`), removing legacy `builtin__*` and file tools. XL scope, benchmark arm included. |
| [#7765](https://github.com/nearai/ironclaw/pull/7765) | PR | — | **`AfterTurn` lifecycle hook** — first act-capable hook point for memory curation; privileged-only, emits `TurnRunCompleted` event. Phase 1 of #7770. |
| [#7810](https://github.com/nearai/ironclaw/pull/7810) | PR | — | **Sandbox egress auth generalization** — replaces GitHub-specific `gh` carve-out with provider-neutral credential bindings via `iron-proxy`. |

**Underlying needs**: Token-cost control at scale (#7824), smoother first-time-user journey (#7815), and removing single-provider special-casing in sandbox egress (#7810/#7825).

## 5. Bugs & Stability — Reported Today
| Issue | Severity | Status | Fix PR |
|-------|----------|--------|--------|
| [#7823](https://github.com/nearai/ironclaw/issues/7823) | Medium | Open | — |
| [#7822](https://github.com/nearai/ironclaw/issues/7822) | Medium | Open | — |

**Details**:  
- **#7823** — Notion integration install fails (user-reported via Slack #x-ai-product-feedback). Categorized as `integration-install/Notion`.  
- **#7822** — Slack integration setup fails, possibly related to Notion issue. Same reporter, same timestamp.  

No fix PRs linked yet. Both are recent user-facing integration regressions; likely require extension-manifest or OAuth flow fixes.

## 6. Feature Requests & Roadmap Signals
| Signal | Source | Likelihood for Next Version |
|--------|--------|-----------------------------|
| **Context compaction & structured summaries** | #7824 (measured 4× token regression) | **High** — quantified perf/accuracy hit; core-team authored |
| **Onboarding suggestion refresh/connect CTA** | #7815 + #7816 (flag-gated, frontend-only) | **High** — small scope, behind existing flag |
| **Generic sandbox credential broker** | #7810 (merged path) + #7825 (follow-up issue) | **High** — #7810 open, retires GitHub carve-out |
| **`AfterTurn` hook + memory curation** | #7765 (phase 1 of #7770) | **Medium** — core infra, privileged-only, needs review |
| **Background subagent execution (slices 2b+2c)** | #7818 (receipt spawns, delivery, healing) | **Medium** — depends on #7788 (slice 2a) landed inert |
| **CI pipeline modernization (T1–T4 tracks)** | #7821, #7819, #7820, #7817, #7809 | **High** — parallel lanes, explicit convergence goals |
| **Evidence-based automation run outcomes** | #7650 (deterministic assessment) | **Medium** — replaces semantic judging, XL scope |

## 7. User Feedback Summary
| Channel | Pain Point | Context |
|---------|------------|---------|
| Slack #x-ai-product-feedback (alejo.escriva) | **Notion install fails** | 2026-07-28 report, now filed as #7823 |
| Slack #x-ai-product-feedback (alejo.escriva) | **Slack setup fails** | Same session, possibly related OAuth/manifest issue (#7822) |
| PinchBench (internal) | **Token cost 4× baseline, accuracy -6%** | Full thread replay vs. compaction; drives #7824 |
| Onboarding telemetry | **Missing refresh/connect in OOBE** | Users with ready suggestions can’t regenerate; drives #7815/#7816 |

**Sentiment**: Integration reliability (Notion/Slack) and token economics are current friction points. Onboarding polish is recognized and actively being closed.

## 8. Backlog Watch — Stale/Needing Attention
| Item | Age | Why It Matters |
|------|-----|----------------|
| [#7257](https://github.com/nearai/ironclaw/pull/7257) | 18 days | **Design system epic** — Storybook/catalog north star; blocks UI consistency work. Docs-only, no code risk. |
| [#7255](https://github.com/nearai/ironclaw/pull/7255) | 18 days | **APDD governance evaluation** — private repo eval; decision needed on adoption. |
| [#7650](https://github.com/nearai/ironclaw/pull/7650) | 9 days | **Evidence-based run outcomes** — XL scope, replaces semantic judging; core to automation reliability. |
| [#7491](https://github.com/nearai/ironclaw/pull/7491) | 12 days | **Coding tool contract** — XL, benchmark arm, removes legacy surface; high impact on agent behavior. |
| [#7765](https://github.com/nearai/ironclaw/pull/7765) | 3 days | **`AfterTurn` hook** — foundational for memory/state mgmt; privileged-only install gate needs security review. |

---

**Health indicator**: 🟢 **Strong** — high merge rate (5/21 PRs closed), zero critical regressions, measured improvements shipping, and clear roadmap signals with quantified data. Integration bugs (#7822, #7823) are the only user-visible defects; they are scoped and recent.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-08-23

## 1. Today's Overview
LobsterAI shows **moderate maintenance activity** with 6 PRs processed in the last 24 hours (5 merged/closed, 1 open), though all merged PRs were originally created in April 2026 and appear to have been batch-closed recently. No new releases were published. The project is actively addressing bugs in cowork/session management, web search compatibility, and model provider limits, while also implementing user-requested export functionality. The single open PR (#2452) addresses a model ID parsing edge case for OpenClaw providers.

## 2. Releases
**No new releases** in the last 24 hours. The latest version remains v2026.3.30 (referenced in Issue #1206).

## 3. Project Progress — Merged/Closed PRs (5)

| PR | Title | Area | Key Changes |
|----|-------|------|-------------|
| [#1205](https://github.com/netease-youdao/LobsterAI/pull/1205) | `fix(cowork): show error toast when session rename fails` | Cowork/UI | Added try-catch around `renameSession` IPC call; shows localized toast on failure and keeps rename input open for retry. Fixes silent failure UX. |
| [#1208](https://github.com/netease-youdao/LobsterAI/pull/1208) | `feat(cowork): add manual retry button for transient errors` | Cowork/Error Handling | Introduced `RETRYABLE_ERROR_KEYS` (rate limit 429, network, server errors); inline retry button in error bubbles re-sends last message. New `coworkErrorClassify.ts` module. |
| [#1209](https://github.com/netease-youdao/LobsterAI/pull/1209) | `fix(web-search): web-search-block-unsupported-chrome-flags` | Web Search | Removes `--disable-blink-features=AutomationControlled` flag that causes Chrome 130+ to block automation; flag was injected externally via user data dir, config, or env vars. |
| [#1212](https://github.com/netease-youdao/LobsterAI/pull/1212) | `fix(model): allow up to 20 custom providers` | Model Settings | Increased custom provider limit from 10 to 20 by moving key list out of hard-coded Settings (`custom_0`–`custom_19`). Preserves older configs when switching providers. |
| [#1214](https://github.com/netease-youdao/LobsterAI/pull/1214) | `feat: export session as Markdown` | Session/Export | Implements "Export as Markdown" in session detail menu (closes #1345). Generates structured MD with title, timestamps, user/assistant turns, tool calls (truncated at 300 chars), and code blocks. Uses existing `saveInlineFile` IPC. |

## 4. Community Hot Topics
No high-engagement items in the last 24h — all issues/PRs have **0 reactions and ≤2 comments**. The two closed issues (#1206, #1213) were marked `[stale]`, suggesting they were auto-closed after inactivity rather than resolved by recent fixes. Underlying needs visible:
- **Reliability of private model deployments** (#1206: Kimi 2.5 duplicate progress messages)
- **Data portability** (#1213/#1214: Markdown export for conversation history)

## 5. Bugs & Stability

| Severity | Issue | Status | Fix PR |
|----------|-------|--------|--------|
| **Medium** | [#1206](https://github.com/netease-youdao/LobsterAI/issues/1206) Kimi 2.5 private deployment repeats progress messages during doc analysis | Closed (stale) | No direct fix PR; user reports switching models avoids issue |
| **Low** | [#1209](https://github.com/netease-youdao/LobsterAI/pull/1209) Chrome 130+ blocks web search due to injected automation flag | **Fixed** (merged) | PR #1209 removes problematic flag |
| **Low** | Session rename fails silently | **Fixed** (merged) | PR #1205 adds error toast + retry UX |
| **Low** | Cowork sessions interrupted by transient errors (429, network) require manual re-entry | **Fixed** (merged) | PR #1208 adds inline retry button |

## 6. Feature Requests & Roadmap Signals
| Request | Source | Likelihood for Next Version |
|---------|--------|------------------------------|
| **Markdown export for sessions** | #1213 (issue) + #1214 (PR merged) | ✅ **Already implemented** — will ship in next release |
| **Higher custom provider limit (20)** | #1212 (PR merged) | ✅ **Already implemented** |
| **Retry mechanism for transient cowork errors** | #1208 (PR merged) | ✅ **Already implemented** |
| **OpenClaw provider prefix preservation for slashed model IDs** | #2452 (open PR) | 🟡 **Pending review** — targeted fix for `custom_0` + `deepseek-ai/DeepSeek-V4-Flash` parsing |

## 7. User Feedback Summary
- **Pain point**: Private model deployments (Kimi 2.5) show duplicate "current action" progress messages, creating confusion about whether the task is stuck or proceeding. Workaround: switch models.
- **Workflow friction**: Users need **text-based conversation export** (Markdown) for referencing, sharing, and searching — image-only export is insufficient.
- **Configuration limits**: Power users hit the 10-custom-provider cap when rotating models while preserving history.
- **Resilience**: Transient API errors (rate limits, network blips) previously required manual message re-entry; now addressed with retry button.

## 8. Backlog Watch
| Item | Age | Concern |
|------|-----|---------|
| [#2452](https://github.com/netease-youdao/LobsterAI/pull/2452) `fix(openclaw): preserve provider for slashed model ids` | Open since 2026-08-07 (16 days) | **Needs maintainer review** — targeted fix for model ID parsing when provider prefix + model ID both contain `/`. No comments/reviews yet. |
| Stale issue cleanup | Multiple | Issues #1206, #1213 closed as `[stale]` without confirmed fixes. Verify if underlying bugs persist in current builds. |

---
*Digest generated from GitHub data as of 2026-08-23. Links point to netease-youdao/LobsterAI repository.*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-08-23

## 1. Today's Overview
Moltis shows steady maintenance activity with **1 new feature proposal** and **3 open bug-fix PRs** updated in the last 24 hours. No releases were cut, and no PRs were merged, indicating the project is in a pre-release stabilization phase. The work centers on hardening security boundaries (fail-closed hooks), improving LLM provider compatibility (OpenAI strict schemas), fixing MCP client lifecycle bugs, and upgrading browser automation support to Browserless v2. Overall project health appears good—active triage, focused fixes, and forward-looking security enhancements.

## 2. Releases
**No new releases published today.** The repository has not tagged a version in this window; the changes below are queued for the next release cycle.

## 3. Project Progress
**No PRs merged or closed today.** All three PRs remain open and under review:
- **#1232** – Makes tool schemas OpenAI-strict compliant (adds `additionalProperties: false`, declares cron/webhook patch fields, fixes MCP env var representation).  
- **#1231** – Resolves MCP client reference after server restart, preventing dispatch through closed connections.  
- **#1229** – Adds full Browserless v2 container-protocol support while preserving v1 defaults.

These fixes address provider compatibility, connection stability, and browser automation upgrades—key for reliability in production agent workflows.

## 4. Community Hot Topics
| Item | Type | Activity | Link |
|------|------|----------|------|
| **#1230** | Issue (Feature) | 1 comment, 0 👍 | [feat(hooks): add an opt-in fail-closed error policy for modifying security hooks](https://github.com/moltis-org/moltis/issues/1230) |
| **#1232** | PR (Bug Fix) | 0 comments | [fix(tools): make object schemas OpenAI-safe](https://github.com/moltis-org/moltis/pull/1232) |
| **#1231** | PR (Bug Fix) | 0 comments | [fix(mcp): resolve current client after server restart](https://github.com/moltis-org/moltis/pull/1231) |
| **#1229** | PR (Enhancement) | 0 comments | [fix(browser): support Browserless v2 containers](https://github.com/moltis-org/moltis/pull/1229) |

**Analysis:** The sole issue (#1230) signals a **security hardening request**: users want hook failures (timeouts, crashes) to *block* execution rather than silently continue—critical for policy-enforcement boundaries. The three PRs reflect **provider/runtime stability** work: OpenAI schema strictness, MCP reconnection correctness, and Browserless v2 adoption. Low comment counts suggest these are internal/maintainer-driven improvements rather than community-driven fires.

## 5. Bugs & Stability
| Severity | Item | Description | Fix PR |
|----------|------|-------------|--------|
| **High** | MCP client staleness after server restart | Active chat turns dispatch via closed client until next registry rebuild. | [#1231](https://github.com/moltis-org/moltis/pull/1231) |
| **Medium** | OpenAI strict-schema rejection | Unspecified patch/map schemas cause null/empty values; breaks tool calling. | [#1232](https://github.com/moltis-org/moltis/pull/1232) |
| **Low** | Browserless v1-only support | v2 containers not supported; limits browser automation options. | [#1229](https://github.com/moltis-org/moltis/pull/1229) |

No crashes or regressions reported today. All known issues have open fix PRs.

## 6. Feature Requests & Roadmap Signals
- **Fail-closed hook policy (#1230)** – Explicit opt-in to treat hook runtime failures as `Block` instead of `Continue`. Strong signal for **security-boundary hardening**; likely to land in next minor release given clear use case (policy enforcement) and maintainer authorship.
- **Browserless v2 support (#1229)** – Indicates roadmap alignment with modern browser-automation infrastructure; v1 retained as default for backward compatibility.

**Prediction:** Next version will include the OpenAI schema fix, MCP restart fix, Browserless v2 support, and likely the fail-closed hook policy (if review completes quickly).

## 7. User Feedback Summary
Direct user feedback is minimal in this window (only 1 comment on #1230). The implied pain points:
- **Security teams** need deterministic failure modes for policy hooks—silent continuation is a compliance risk.
- **OpenAI users** hit schema validation errors with current tool definitions.
- **MCP-dependent workflows** suffer flakiness on server restarts.
- **Browser automation users** want v2 container support for performance/features.

No dissatisfaction signals; activity reflects proactive maintenance.

## 8. Backlog Watch
No aging items surfaced in today’s data (all items created/updated 2026-08-22). However, **#1230** (security feature) should be prioritized for review—it’s a maintainer-authored proposal with security implications and zero community discussion yet. Ensure it gets design review before merge.

---

*Digest generated from GitHub data for 2026-08-23. Links point to live items on github.com/moltis-org/moltis.*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (QwenPaw) Project Digest — 2026-08-23

---

## 1. Today's Overview

CoPaw shows **moderate community activity** with 7 issues and 4 PRs updated in the last 24 hours, but **no merges or releases**. The issue queue is dominated by **bug reports** (4/7) around shell tool encoding, UI rendering, media handling, and output formatting, signaling stability friction in the 2.1.0 line. Two enhancement requests focus on UX polish (collapsible reasoning traces) and provider-level media cap granularity. PR activity is exclusively **first-time contributor** work—documentation, Chrome bridge networking, cron model overrides, and profile file visibility—none yet reviewed/merged. Project health: **active but backlog-heavy**; maintainer throughput appears constrained.

---

## 2. Releases

**No new releases** in the last 24 hours. Current latest remains `v2.1.0` (Docker tag `xk-qwenpaw:v2.1.0f1` referenced in #7212).

---

## 3. Project Progress

**Merged/Closed today:** 0 PRs merged; 1 issue closed (**#7043** — UTF-8 startup option for Windows PowerShell, closed without code change).

**Open PRs updated today (all first-time contributors, none merged):**
- **#7214** — Docs: add “Access Policy” as 5th security layer in README/ja.md. *Trivial, ready for merge.*
- **#7054** — Feat(chrome): remote bridge endpoint for LAN browsers. *Expands Chrome extension to multi-host setups; under review since 2026-08-15.*
- **#7050** — Feat(console): per-cron-job model override picker. *Backend contract exists; UI addition; under review since 2026-08-15.*
- **#6808** — Fix(console): show custom profile markdown files. *Removes hardcoded persona filter; backend already returns all .md files; stale since 2026-08-07.*

**Signal:** Contributor PRs are piling up without maintainer action.

---

## 4. Community Hot Topics

| Item | Activity | Core Need |
|------|----------|-----------|
| **#7196** Collapsible reasoning trace (enhancement) | 2 comments, 1 👍 | **UX: reduce visual noise** — users want reasoning folded by default, expandable on demand (like Hermes). High impact for daily workflow. |
| **#7216** Shell tool name corruption `l→|` (bug) | 1 comment | **Reliability: intermittent ToolNotFoundError** — suggests encoding/streaming bug in tool-call parsing; blocks automation. |
| **#7215** OpenRouter/OpenCode models invisible in GUI (bug) | 1 comment | **Integration: provider UI gap** — backends added but not rendered; adoption blocker for popular routers. |
| **#7212** Image pixel-dimension crash (bug) | 1 comment | **Resilience: graceful degradation** — provider rejects oversized images; CoPaw crashes instead of resizing/rejecting cleanly. |

**Underlying theme:** Users are hitting **edge cases in provider/tool integration** and **output rendering** that break flow. The reasoning-collapse request (#7196) is the only item with explicit 👍, indicating broad pain.

---

## 5. Bugs & Stability (Ranked by Severity)

| Severity | Issue | Description | Fix PR? |
|----------|-------|-------------|---------|
| **High** | **#7216** Shell tool name char corruption (`l→|`) | Intermittent `ToolNotFoundError`; likely stream/encoding issue in tool-call emission. Breaks agent loops. | No |
| **High** | **#7212** Image pixel-dimension crash | Provider rejects >limit px images → `MODEL_EXECUTION_ERROR` + conversation abort. No client-side resize/validate. | No |
| **Medium** | **#7215** OpenRouter/OpenCode models not shown in GUI | Backend registered, frontend filter hides them. Blocks model switching. | No |
| **Medium** | **#7213** Excessive blank lines in session output | Persistent empty lines clutter history; user reports ignored by model. Output sanitization missing. | No |
| **Low** | **#7043** Windows PowerShell UTF-8 default (closed) | Requested `chcp 65001` at startup; closed without fix. Workaround: user profile. | N/A |

**No bug-fix PRs opened today.** All four bugs are fresh (created 2026-08-22) and unassigned.

---

## 6. Feature Requests & Roadmap Signals

| Request | Issue | Likelihood for Next Minor |
|---------|-------|---------------------------|
| **Collapsible reasoning trace (default folded)** | #7196 | **High** — UX polish, low backend risk, strong user signal. |
| **Per-provider media caps (image/video/audio separate)** | #7201 | **Medium** — Settings UI + provider config change; aligns with multi-modal maturity. |
| **Remote Chrome bridge (LAN browsers)** | #7054 (PR) | **Medium** — PR ready, extends deployment model; needs security review. |
| **Per-cron-job model override** | #7050 (PR) | **Medium** — Backend ready, UI added; useful for cost/quality tuning. |
| **Custom profile markdown visibility** | #6808 (PR) | **High** — Simple filter removal; unblocks user personas. |

**Prediction:** #7196, #6808, #7050 most likely in `v2.1.1`; #7201 and #7054 may slip to `v2.2.0` pending design review.

---

## 7. User Feedback Summary

**Pain points (verbatim):**
- “Reasoning process causes **severe visual distraction**” — #7196
- “Shell tool name **intermittently corrupted** → ToolNotFoundError” — #7216
- “Added OpenRouter/OpenCode but **GUI doesn’t show them**” — #7215
- “**Meaningless blank lines** everywhere in output, told model N times to stop” — #7213
- “Image **smaller than 2 MB but too many pixels** crashes whole conversation” — #7212

**Use cases revealed:**
- Daily coding with reasoning traces visible → needs fold-by-default.
- Multi-host Chrome debugging (PR #7054).
- Scheduled agents with dedicated models (PR #7050).
- Windows PowerShell users fighting GBK/UTF-8 mismatch (#7043).

**Satisfaction:** Mixed — power users file detailed bugs; casual users hit UI gaps. No praise issues in this window.

---

## 8. Backlog Watch (Stale / Needs Maintainer Attention)

| Item | Age | Why It Matters |
|------|-----|----------------|
| **#6808** Fix: show custom profile markdown files | 16 days | Trivial fix, unblocks user-defined personas; PR ready, no review. |
| **#7054** Feat: remote Chrome bridge endpoint | 8 days | Enables team/remote workflows; security-sensitive, needs core review. |
| **#7050** Feat: per-cron-job model picker | 8 days | Completes cron UX; backend contract exists, UI done. |
| **#7043** Windows UTF-8 startup option (closed) | 9 days | Closed without resolution; Windows users still affected. Consider reopening or documenting workaround. |
| **#7201** Per-provider media caps split | 2 days | Design decision needed; affects provider config schema. |

**Action items for maintainers:**
1. Triage & merge #6808, #7050 (low risk, high user value).
2. Security-review #7054 (network exposure).
3. Assign #7216, #7212, #7215, #7213 to contributors or sprint.
4. Decide on #7196 (UI) and #7201 (provider config) for next milestone.

---

*Digest generated from GitHub data as of 2026-08-23 00:00 UTC. All links point to `github.com/agentscope-ai/QwenPaw`.*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-08-23

## 1. Today's Overview
ZeroClaw shows **very high velocity** with 100 total items updated in the last 24 hours (50 issues, 50 PRs). The project is in a heavy architecture-refactoring phase: multiple RFCs are under active review, the v0.9.0 auth/security/gateway milestone is being tracked, and a concerted push is moving optional channels/tools from compile-time features to runtime WASM plugins. Six PRs were merged/closed today, mostly fixing onboarding, config, and desktop-app detection bugs. No new release was cut. The backlog carries several P1–P2 bugs (Windows test suite, Telegram duplicates, unbounded subprocess waits) that affect reliability on non-Linux platforms and in production daemon deployments.

## 2. Releases
**No new releases today.** The last published version remains v0.8.x (per issue context). The v0.9.0 milestone (#7432) is tracking breaking changes around auth, security hardening, gateway boundaries, and A2A/multi-agent work.

## 3. Project Progress — Merged/Closed PRs (Last 24h)
| PR | Title | Area | Impact |
|----|-------|------|--------|
| [#9291](https://github.com/zeroclaw-labs/zeroclaw/pull/9291) | `fix(cli): detect installed AppImage and use a working desktop download URL` | CLI, Desktop | Fixes `zeroclaw desktop` false-negative on Linux; updates dead download URL. |
| [#9694](https://github.com/zeroclaw-labs/zeroclaw/pull/9694) | `feat(zerocode): expose the SOP pane as a read-only status view` | Zerocode/TUI, SOP | Delivers MVP status visibility for SOP runs (list + live icons). |
| [#9281](https://github.com/zeroclaw-labs/zeroclaw/pull/9281) | `fix(config): roll back auto-created map aliases when config set fails` | Config, RPC | Makes `config/set` transactional: failed writes discard materialized aliases. |
| [#9203](https://github.com/zeroclaw-labs/zeroclaw/pull/9203) | `fix(sop): wire authenticated HTTP fan-in` | SOP, Gateway, Security | Adds authenticated `POST /sop/{*rest}` fan-in; returns 404 on no match without chat fallback. |
| [#9202](https://github.com/zeroclaw-labs/zeroclaw/issues/9202) | `bug: zeroclaw desktop command uses dead download URL` | CLI, Desktop | Closed via #9291. |
| [#9255](https://github.com/zeroclaw-labs/zeroclaw/issues/9255) | `bug: WASM plugin calls have no wall-clock timeout` | Plugins, WASM, Security | Closed; fix landed (unbounded HTTP response hang resolved). |
| [#9339](https://github.com/zeroclaw-labs/zeroclaw/issues/9339) | `feature: support custom CA trust for remote MCP servers` | MCP, Security | Closed; per-server custom CA support added. |
| [#9436](https://github.com/zeroclaw-labs/zeroclaw/issues/9436) | `bug(config): config init writes template sections that fail strict loader` | Config, Onboarding | Closed; fresh config no longer born degraded. |
| [#9640](https://github.com/zeroclaw-labs/zeroclaw/issues/9640) | `WhatsApp Web policy doc comments cite removed V2 key` | Docs, WhatsApp, Security | Closed; doc comments corrected. |

## 4. Community Hot Topics — Most Active Issues (by comment count)
| Issue | Comments | Core Need / Signal |
|-------|----------|---------------------|
| [#9487](https://github.com/zeroclaw-labs/zeroclaw/issues/9487) **RFC: Runtime-owned conversation sessions and transport surface adapters** | 24 | **Architecture pivot**: Move session ownership from channels to runtime; introduce `InboundAction` admission, durable semantics, and transport adapters. High-risk, high-impact — gates v0.9.0 gateway work. |
| [#7462](https://github.com/zeroclaw-labs/zeroclaw/issues/7462) **74 test failures on Windows** | 19 | **Platform parity blocker**: Unix-only commands, path semantics, console encoding (CP936). CI only runs Linux — Windows is silently broken. P1, high risk. |
| [#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) **Tracker: Maintainer decision queue for RFCs** | 13 | **Governance backlog**: Central queue for RFC/design decisions awaiting maintainer action. Indicates decision latency. |
| [#6996](https://github.com/zeroclaw-labs/zeroclaw/issues/6996) **RFC: Granular sandbox policy (filesystem & network)** | 11 | **Security unification**: Reconcile app-layer path admission with OS sandbox backends (Bubblewrap, Landlock, Seatbelt). In progress, needs author action. |
| [#8396](https://github.com/zeroclaw-labs/zeroclaw/issues/8396) **RFC: Wire protocol first-class in provider construction** | 9 | **Provider abstraction**: Make wire protocol (ACP, OpenAI, etc.) a first-class config concern during provider onboarding. Needs maintainer review. |
| [#10050](https://github.com/zeroclaw-labs/zeroclaw/issues/10050) **RFC: Verbatim channel send over gateway without agent turn** | 4 | **Gateway minimalism**: Add route to push caller-supplied message verbatim on configured channel — bypasses agent. Reduces 47 `/api/*` paths to one semantic primitive. |
| [#9945](https://github.com/zeroclaw-labs/zeroclaw/issues/9945) **Browser tool exposes 16/100+ agent-browser commands** | 4 | **Tool completeness gap**: Iframes, dialogs, tabs, form controls unreachable. Blocked, accepted, high risk. |
| [#8850](https://github.com/zeroclaw-labs/zeroclaw/issues/8850) **Move optional channels/tools to runtime WASM plugins** | 4 | **Binary size & extensibility**: Shrink default binary; enable plugin install without recompile. In progress, accepted, high risk. |
| [#7943](https://github.com/zeroclaw-labs/zeroclaw/issues/7943) **Realtime voice-host channel (backend-agnostic WS client)** | 4 | **Voice UX**: External host owns audio pipeline; ZeroClaw stays LLM/brain. Wyoming-aligned, CrispASR reference. In progress. |
| [#7790](https://github.com/zeroclaw-labs/zeroclaw/issues/7790) **Bring remaining web dashboard operator surfaces into zer

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/DenisZheng/agents-radar).*