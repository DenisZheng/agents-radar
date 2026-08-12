# OpenClaw Ecosystem Digest 2026-08-12

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-08-12 01:19 UTC

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

⚠️ Summary generation failed.

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: Personal AI Agent / Assistant Open-Source Ecosystem (2026-08-12)

---

## 1. Ecosystem Overview

The personal AI agent ecosystem shows a **bifurcated maturity landscape**: a cluster of projects in **high-velocity architectural refactoring** (NanoBot, Hermes Agent, IronClaw, ZeroClaw) preparing major version transitions, and a second tier in **stabilization/beta polishing** (CoPaw, LobsterAI, NanoClaw, PicoClaw). Security hardening, agent-loop reliability, and provider-agnostic gateway patterns are universal preoccupations. No project has reached a "stable 1.0" milestone; all operate in pre-1.0 or early 1.x cycles with breaking changes still frequent. Community sizes appear modest but technically sophisticated—contributors are often building production multi-agent deployments, not toy experiments.

---

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Release Status | Health Score* |
|---------|--------------|-----------|----------------|---------------|
| **NanoBot** | ~7 active | 140 updated (119 merged) | Imminent patch (v1.x/2.0) | 🟢 Strong |
| **Hermes Agent** | 50 updated | 50 updated | v0.20.0 (2026-08-03), patch queued | 🟡 High velocity, critical regressions |
| **IronClaw** | 23 updated | 50 updated | Pre-v1.3.0 "Reborn" | 🟡 Architectural churn, pre-release |
| **ZeroClaw** | ~30 active | ~70 active | Pre-v0.9.0 (RFC-gated) | 🟡 Design-bottlenecked |
| **CoPaw (QwenPaw)** | 14 closed | 25 merged | v2.1.0-beta.3 (today) | 🟡 Beta stabilization, critical bugs |
| **NanoClaw** | 1 new | 8 updated (3 merged) | Feature freeze for Agent Plugins 1.0 | 🟢 Steady core-team |
| **LobsterAI** | 3 closed | 7 merged | 2026.8.11 (yesterday) | 🟢 Regular cadence |
| **PicoClaw** | 3 updated | 6 open | v0.3.1, v0.3.2 pending review | 🟡 Review backlog |
| **Moltis** | 0 | 1 open | None | ⚪ Quiet |
| **OpenClaw** | — | — | — | ⚪ Data unavailable |
| **NullClaw / TinyClaw / ZeptoClaw** | 0 | 0 | None | ⚪ Inactive |

*Health Score: 🟢=healthy velocity & resolution, 🟡=high activity but unresolved critical issues, ⚪=insufficient data/inactive.

---

## 3. OpenClaw's Position

**Data Gap**: OpenClaw's digest failed to generate, preventing direct comparison. However, from context in **LobsterAI** and **PicoClaw** (both reference OpenClaw as upstream/core), OpenClaw appears to be the **foundational gateway/runtime layer** for multiple downstream projects:

- **Technical Approach**: Acts as a **provider-agnostic LLM gateway** (referenced in LobsterAI's "OpenClaw gateway" startup issues, PicoClaw's provider routing). This contrasts with projects like NanoBot/Hermes/IronClaw that embed provider logic directly in the agent loop.
- **Community Leverage**: At least 3 downstream projects (LobsterAI, PicoClaw, likely NanoClaw) depend on it, suggesting **ecosystem centrality** despite low visibility in this snapshot.
- **Risk**: LobsterAI's Windows gateway startup loop (#1183, 134 days open) and PicoClaw's routing bugs indicate **upstream stability gaps** that cascade to dependents.

**Recommendation**: If OpenClaw is your upstream, prioritize its gateway reliability and Windows CI; if you maintain it, recognize its multiplier effect on downstream adoption.

---

## 4. Shared Technical Focus Areas (Cross-Project Requirements)

| Requirement | Projects | Specific Needs |
|-------------|----------|----------------|
| **Agent-loop guardrails** (repeat detection, iteration budgets, spiral prevention) | NanoBot (#5327, #5344), Hermes (#82846), CoPaw (#6564), ZeroClaw (#9619) | Token-aware truncation, repeat-tool-call warnings, bounded goal continuation |
| **Secret hygiene & supply-chain security** | NanoBot (#4784, #4783, #5306), ZeroClaw (#9883, #9872), IronClaw (#7155) | Subprocess env sanitization, exec allow-list bypass fixes, WebP DoS mitigation, shell confirmation tiers |
| **Provider-agnostic gateway / routing** | NanoBot (OrcaRouter, OpenCode Zen), PicoClaw (dispatch rules), LobsterAI (OpenClaw gateway), ZeroClaw (Chat Completions profile #8603) | Unified config for 150+ models, zero-trust routing, OpenAI-compat endpoint for ecosystem interop |
| **Multi-session / multi-tenant isolation** | Hermes (#34352), IronClaw (#7467), NanoBot (#5283), ZeroClaw (#9487) | Per-session sandbox, profile-agnostic durable state, conversation session ownership |
| **Windows/Desktop reliability** | Hermes (5+ correlated issues), CoPaw (#6697, #6885), LobsterAI (#1183), NanoBot (#5341) | File-lock handling, Python env injection, IME composition, gateway auto-relaunch |
| **Structured observability & cost tracking** | ZeroClaw (#2269, #7232), NanoBot (prompt cache tokens #3317), IronClaw (token estimator #7485) | Token accounting per turn, cost dashboards, structured event logs |
| **Skill/Tool/Plugin marketplace UX** | NanoBot (WebUI app discovery #5342), CoPaw (#6880), IronClaw (automation cards #7498), Moltis (CalDAV connectors #1190) | Curated registries, cached fallback, inbox delivery, connector management UI |

---

## 5. Differentiation Analysis

| Dimension | NanoBot | Hermes Agent | IronClaw | ZeroClaw | CoPaw | LobsterAI | PicoClaw | NanoClaw |
|-----------|---------|--------------|----------|----------|-------|-----------|----------|----------|
| **Core Architecture** | Single-process agent + gateway providers | God-file decomposition → modular kernel | "Reborn": kernel + pluggable ACP executors | RFC-driven: runtime-owned sessions, SOP daemon | Electron desktop + console channels | Electron desktop (OpenClaw gateway) | Lightweight multi-channel router | Agent-template → plugin migration |
| **Target User** | Power users, multi-provider developers | Researchers, multi-tenant SaaS builders | NEAR ecosystem, automation-heavy teams | Security-first, productized deployments | Chinese-language desktop users, QQ/WeChat | Desktop cowork users, scheduled tasks | Multi-channel bot operators (Telegram/Discord/LINE) | Template-driven agent authors |
| **Unique Feature Focus** | Provider diversity (150+ via OrcaRouter), exec security | Memory hook system, cross-process turn serialization | Profile-agnostic storage, unified channel adapter | Security decision pipeline, Chat Completions interop | Computer Use, Chinese IME, formula rendering | Cowork shortcuts, scheduled-task badges, local-file context menu | Dispatch routing, Telegram topics, Exa search | MCP remote HTTP, transactional upgrades |
| **Interop Strategy** | Gateway providers (OpenAI-compat) | Plugins (Feishu, Email, Matrix) | ACP executors, Railway shell | OpenAI Chat Completions profile | MCP tools, CopilotKit | OpenClaw gateway | Native providers + skills | MCP servers, Agent Plugins 1.0 |
| **Maturity Signal** | High merge velocity, security-first | Architectural debt paydown, Windows crisis | Big-bang refactor, pre-v1.3.0 | Design-phase, RFC bottleneck | Beta.3, critical desktop bugs | Regular point releases, Windows gaps | Review backlog, routing bugs | Core-team driven, breaking migration |

---

## 6. Community Momentum & Maturity

| Tier | Projects | Characteristics |
|------|----------|-----------------|
| **Rapid Iteration / Pre-Major-Release** | NanoBot, Hermes Agent, IronClaw, ZeroClaw | 50-140 PRs/24h; architectural epics (god-file sharding, Reborn, RFCs); security regressions fixed same-day; release candidates imminent |
| **Beta Stabilization** | CoPaw (v2.1.0-beta.3), NanoClaw (Agent Plugins 1.0) | High PR merge rate but critical desktop/console bugs; user-facing polish (formula rendering, font sizing) deferred |
| **Steady Cadence / Incremental** | LobsterAI, PicoClaw | Regular point releases; Windows/desktop gaps persist; community contributing providers/tools |
| **Quiet / Early-Stage** | Moltis, OpenClaw (unknown) | Single-digit activity; foundational work (CalDAV connectors, gateway) |
| **Inactive** | NullClaw, TinyClaw, ZeptoClaw | Zero 24h activity |

**Key Insight**: The "Rapid Iteration" tier projects are **converging on similar architectural patterns** (pluggable executors, runtime-owned sessions, security pipelines) despite different codebases—suggesting an emerging **de-facto standard for agent kernels**.

---

## 7. Trend Signals for AI Agent Developers

1. **Gateway Pattern > Embedded Providers**  
   Projects with separate gateway layers (NanoBot's OrcaRouter, ZeroClaw's Chat Completions profile, LobsterAI's OpenClaw) gain provider diversity faster than those embedding provider logic. **Adopt a gateway abstraction** to avoid vendor lock-in and enable zero-trust routing.

2. **Agent-Loop Observability is a Product Requirement**  
   Silent spirals, repeat messages, and unbounded goal loops appear in **every active project**. Instrument iteration budgets, repeat detection, and token-aware truncation **before** shipping multi-turn agents.

3. **Windows/Desktop is a Differentiator, Not an Afterthought**  
   4/8 active projects have **critical Windows-specific regressions** (file locks, Python env, IME, gateway startup). Projects investing in Windows CI (CoPaw's beta.3 fix, Hermes' #83720) reduce support burden dramatically.

4. **Security Hygiene is Now Table Stakes**  
   NanoBot's same-day fixes for exec bypass (#5306→#5345) and env leakage (#4784, #4783) show **community expectation for rapid security response**. Build subprocess env sanitization and command-tokenization into exec tools from day one.

5. **Multi-Tenancy Requires Kernel-Level Hooks**  
   Hermes (#34352) and IronClaw (#7467) demonstrate that **memory/auth bypassing the hook system** makes SaaS/multi-user deployments impossible without forking. Design hook surfaces for *all* state mutations.

6. **Skill/Connector Marketplaces Drive Retention**  
   NanoBot's WebUI app discovery (#5342), CoPaw's plugin market ask (#6880), Moltis run in call your python tool exposure signal that **users expect plugin ecosystems**. Invest in curated registries, cached fallbacks, and developer onboarding early.

7. **RFC/Design-Doc Bottlenecks Stall Velocity**  
   ZeroClaw's 15+ open RFCs and Hermes' god-file epic show that **architectural decisions without clear ownership** become pacing factors. Adopt lightweight ADR processes with explicit decision deadlines.

---

## Summary for Decision-Makers

- **If building a new agent**: Start with a **gateway + pluggable executor** architecture (NanoBot/IronClaw/ZeroClaw pattern); embed observability and secret hygiene from v0.1.
- **If choosing a framework**: **NanoBot** leads on security velocity and provider breadth; **IronClaw** on automation reliability; **CoPaw** on Chinese-market desktop UX; **ZeroClaw** on security-first productization.
- **If contributing**: Highest leverage in **Windows/Desktop reliability**, **agent-loop guardrails**, and **gateway interop layers**—these gaps appear universally.
- **Watch OpenClaw**: Its gateway stability directly impacts 3+ downstream projects; a resolved Windows startup loop would unlock significant ecosystem value.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-08-12

## 1. Today's Overview

NanoBot shows **very high development velocity** with 140 PRs updated in the last 24 hours (119 merged/closed, 21 open), indicating an active sprint or release preparation cycle. The project is heavily focused on **security hardening** (multiple API key leakage fixes, exec tool bypass), **agent loop stability** (repeat message/spiral detection), and **provider ecosystem expansion** (OrcaRouter, Xiaomi MiMo, OpenCode Zen, Tavily). Two critical security issues (#4784, #4783) and two agent-loop bugs (#5327, #5256) were closed today, while a new `exec.allowPatterns` bypass (#5306) received an immediate fix PR (#5345). No new release was cut, but the volume of merged PRs suggests a v1.x patch or v2.0 candidate is imminent.

---

## 2. Releases

**No new releases published today.**  
Given 119 PRs merged/closed in 24h, a release is likely queued. Watch for a patch addressing the security fixes (#4784, #4783, #5306) and agent-loop regressions (#5327, #5256).

---

## 3. Project Progress — Key Merged/Closed PRs (Last 24h)

| PR | Title | Category | Impact |
|----|-------|----------|--------|
| **#4784** | Security: Provider API keys leaked between providers via global `os.environ` mutation | Security | **Critical** — Fixes cross-provider key leakage in gateway providers |
| **#4783** | Security: CLI apps run with full `os.environ` — API keys leaked to subprocesses | Security | **Critical** — Subprocesses no longer inherit provider keys |
| **#5327** | Bug: Nanobot repeats same message while reasoning | Stability | **High** — Stops agent “stutter” during reasoning loops |
| **#5256** | Bug: `/goal` produces dozens of repeated replies while waiting for user | Stability | **High** — Bounds sustained-goal continuation on idle turns |
| **#5345** | Security: `exec.allowPatterns` shell-chain bypass fix | Security | **High** — Patches command-injection vector (CVE-class) |
| **#5344** | Fix: Warn instead of silently spiraling on repeated identical tool calls | Stability | **Medium** — Adds loop detection + warning in agent tool loop |
| **#5341** | Fix: Weather skill Windows-safe (bare `curl` → explicit executable) | Compatibility | **Medium** — Improves cross-platform skill reliability |
| **#5314** | Fix: Decode nested JSON tool arguments by schema | Providers/Tools | **Medium** — Handles string-encoded nested objects from OpenAI-compat providers |
| **#5328** | Feat: Add OrcaRouter as named gateway provider (150+ models) | Providers | **Feature** — New routing gateway with zero-trust security |
| **#2181** | Feat: Add Xiaomi MiMo provider support | Providers | **Feature** — OpenAI-compat endpoint for MiMo API |
| **#1321** | Feat: Tavily search tool support | Tools | **Feature** — LLM-optimized search alternative to Brave |
| **#1199** | Feat: Fallback model support for transient LLM failures | Resilience | **Feature** — Auto-retry with configured fallback models |
| **#1094** | Feat: OpenCode Zen provider support | Providers | **Feature** — Free quality models (e.g., big-pickle) |
| **#1020** | Feat: Inline keyboard support for Telegram | Integrations | **Feature** — Rich Telegram interactions (buttons, callbacks) |
| **#1114** | Feat: Cron hot reload for external job file changes | Automation | **Feature** — File-mtime-based reload, optimized writes |
| **#5283** | Feat: Per-session sandbox isolation for non-WebUI channels | Security/Arch | **Feature** — Opt-in filesystem sandbox per session |

> **Note:** Many PRs marked `[conflict]` were rebased/merged today after long gestation (some from Feb–Mar 2026), suggesting a backlog-clearing push.

---

## 4. Community Hot Topics (Most Active Issues/PRs)

| Item | Type | Comments | 👍 | Core Need |
|------|------|----------|----|-----------|
| **[#5327](https://github.com/HKUDS/nanobot/issues/5327)** | Issue (Closed) | 9 | 0 | Agent repeats “Good points, let me investigate…” randomly during reasoning — **loop detection gap** |
| **[#5256](https://github.com/HKUDS/nanobot/issues/5256)** | Issue (Open) | 2 | 0 | `/goal` spawns dozens of near-identical replies while awaiting user — **sustained-goal idle handling** |
| **[#5306](https://github.com/HKUDS/nanobot/issues/5306)** | Issue (Open) | 1 | 0 | `exec.allowPatterns` bypass via shell chains (e.g., `allowed_cmd && malicious_cmd`) — **command-injection risk** |
| **[#5345](https://github.com/HKUDS/nanobot/pull/5345)** | PR (Open) | — | 0 | Direct fix for #5306 — shell.py hardening + tests |
| **[#4784](https://github.com/HKUDS/nanobot/issues/4784)** | Issue (Closed) | 2 | 0 | Global `os.environ` mutation leaks keys across providers — **process-wide secret hygiene** |
| **[#4783](https://github.com/HKUDS/nanobot/issues/4783)** | Issue (Closed) | 1 | 0 | CLI subprocesses inherit full env (incl. API keys) — **subprocess env sanitization** |
| **[#5342](https://github.com/HKUDS/nanobot/pull/5342)** | PR (Open) | — | 0 | WebUI: Redesign Apps discovery (Discover/Installed/All, curated Featured, cached registry) — **UX overhaul** |

**Underlying themes:**  
- **Agent loop control** — Users hit silent spirals & repeat storms; need observability + guardrails.  
- **Secret hygiene** — Multi-provider + CLI app architecture historically leaked keys; now being systematically sealed.  
- **Provider diversity** — Community pushes new gateways (OrcaRouter, OpenCode Zen, MiMo) and tools (Tavily, weather skill).  
- **WebUI maturity** — App discovery redesign signals shift toward plugin/ecosystem marketplace.

---

## 5. Bugs & Stability — Today’s Reports (Ranked by Severity)

| Severity | Issue | Status | Fix PR | Description |
|----------|-------|--------|--------|-------------|
| **Critical** | [#5306](https://github.com/HKUDS/nanobot/issues/5306) `exec.allowPatterns` shell-chain bypass | Open | [#5345](https://github.com/HKUDS/nanobot/pull/5345) | Allows `allowed_cmd && rm -rf /` via shell chaining; patch adds strict tokenization + tests |
| **Critical** | [#4784](https://github.com/HKUDS/nanobot/issues/4784) Provider API keys leaked via global `os.environ` | Closed | (in merged batch) | Gateway providers overwrote `os.environ[env_key]`; non-gateway used `setdefault` — both leak across providers |
| **Critical** | [#4783](https://github.com/HKUDS/nanobot/issues/4783) CLI apps inherit full `os.environ` (incl. keys) | Closed | (in merged batch) | Subprocess launched with `os.environ.copy()`; now filtered per-app |
| **High** | [#5327](https://github.com/HKUDS/nanobot/issues/5327) Agent repeats same reasoning message | Closed | [#5344](https://github.com/HKUDS/nanobot/pull/5344) | Random “Good points…” loops; fix adds repeat-tool-call warning + iteration budget guard |
| **High** | [#5256](https://github.com/HKUDS/nanobot/issues/5256) `/goal` spawns dozens of replies while idle | Open | [#5257](https://github.com/HKUDS/nanobot/pull/5257) | Sustained goal stays `active` with no terminal condition; fix bounds continuation on idle turns |
| **Medium** | [#5311](https://github.com/HKUDS/nanobot/issues/5311) Nested JSON tool args as strings fail schema | Closed | [#5314](https://github.com/HKUDS/nanobot/pull/5314) | Some providers stringify nested objects/arrays; fix decodes per schema |
| **Medium** | [#5341](https://github.com/HKUDS/nanobot/pull/5341) Weather skill fails on Windows (bare `curl`) | Open (PR) | — | PowerShell aliases `curl` → `Invoke-WebRequest`; fix uses explicit `curl.exe` |

---

## 6. Feature Requests & Roadmap Signals

| Signal | Source | Likelihood for Next Release |
|--------|--------|-----------------------------|
| **Per-session sandbox isolation** (opt-in) | [#5283](https://github.com/HKUDS/nanobot/pull/5283) | High — PR open, tests added, addresses multi-tenant safety |
| **OrcaRouter gateway provider** (150+ models, zero-trust) | [#5328](https://github.com/HKUDS/nanobot/pull/5328) | High — Complete impl + docs + tests; conflicts resolved |
| **WebUI Apps Discovery redesign** (curated registry, cached fallback) | [#5342](https://github.com/HKUDS/nanobot/pull/5342) | High — UX overhaul, external logo loading as explicit preference |
| **Subagent model presets** (spawn with named preset) | [#4291](https://github.com/HKUDS/nanobot/pull/4291) | Medium — Open, conflict; enables heterogeneous agent teams |
| **Fallback model chain** (auto-retry on transient errors) | [#1199](https://github.com/HKUDS/nanobot/pull/1199) | Medium — Merged today; config-driven, respects `fallbacks` list |
| **Tavily search tool** (LLM-optimized snippets) | [#1321](https://github.com/HKUDS/nanobot/pull/1321) | Medium — Merged; alternative to Brave, better structured content |
| **Telegram inline keyboards** (buttons, callbacks) | [#1020](https://github.com/HKUDS/nanobot/pull/1020) | Medium — Merged; richer bot interactions |
| **Cron hot reload** (file-mtime watch, optimized writes) | [#1114](https://github.com/HKUDS/nanobot/pull/1114) | Medium — Merged; external job file changes picked up |
| **Weather skill (example + tests)** | [#4145](https://github.com/HKUDS/nanobot/pull/4145) | Low-Medium — Open, conflict; demonstrates skill framework |

**Predicted next version scope:** Security patch (5306, 4784, 4783) + agent-loop fixes (5327, 5256) + provider/tool additions (OrcaRouter, Tavily, MiMo, OpenCode Zen) + WebUI app discovery.

---

## 7. User Feedback Summary — Pain Points & Use Cases

| Pain Point | Evidence | Frequency |
|------------|----------|-----------|
| **Agent gets stuck in silent loops** (repeat tool calls, repeated messages) | #5327, #5344, #5256 | High — multiple users, different triggers |
| **API keys leak into subprocesses / across providers** | #4783, #4784 | Critical — security reporters, fixed today |
| **`exec` allow-list bypassed via shell operators** | #5306, #5345 | High — documented bypass, patch ready |
| **Windows compatibility gaps in skills** | #5341 | Medium — PowerShell alias breaks `curl` |
| **Provider responses with stringified nested JSON break tool calls** | #5311, #5314 | Medium — affects OpenAI-compat gateways |
| **Desire for richer WebUI app marketplace** | #5342 | Emerging — redesign PR shows community appetite |
| **Need heterogeneous subagent models** | #4291 | Niche — advanced users building agent teams |

**Satisfaction signals:**  
- Quick turnaround on critical security issues (same-day fixes for #5306, #4784, #4783).  
- Community contributes providers/tools (OrcaRouter, MiMo, Tavily, OpenCode Zen, weather skill).  
- WebUI investment indicates growing non-CLI user base.

---

## 8. Backlog Watch — Stale but Important Items Needing Attention

| Item | Age | Status | Why It Matters |
|------|-----|--------|----------------|
| **[#4291](https://github.com/HKUDS/nanobot/pull/4291)** Subagent model presets | ~2 months | Open, conflict | Enables cost/quality routing in agent teams; blocked by rebase |
| **[#4145](https://github.com/HKUDS/nanobot/pull/4145)** Weather skill (example + tests) | ~2.5 months | Open, conflict | Reference implementation for skill framework; unblocked by #5341 fix |
| **[#1383](https://github.com/HKUDS/nanobot/pull/1383)** Contributing guidelines for incremental PRs | ~5 months | Closed, conflict | Process doc; merged today after long review — good signal for contributor onboarding |
| **[#2181](https://github.com/HKUDS/nanobot/pull/2181)** Xiaomi MiMo provider | ~5 months | Closed, conflict | Merged today; shows long PR lifecycle for new providers |
| **[#5256](https://github.com/HKUDS/nanobot/issues/5256)** `/goal` idle-loop storm | 7 days | Open | Fix PR #5257 open; needs review/merge to stop user-facing spam |
| **[#5283](https://github.com/HKUDS/nanobot/pull/5283)** Per-session sandbox | 5 days | Open | Security/arch feature; opt-in, tests present — candidate for next minor |

---

**Overall Health:** 🟢 **Strong** — High merge velocity, security issues addressed rapidly, agent-loop regressions acknowledged and patched, provider ecosystem expanding. Next release will likely be a substantial patch (v1.x.y) or minor (v2.0) with sandboxing, WebUI marketplace, and subagent presets as headline features.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-08-12

## 1. Today's Overview
Hermes Agent shows **very high velocity** with 100 total items (50 issues + 50 PRs) updated in the last 24 hours. The project is in a **heavy refactoring and stabilization phase**: a repo-wide "god-file decomposition" epic (#78647, 67 comments) drives architectural cleanup, while a cluster of **Windows Desktop regressions** (update failures, gateway reap/kill, Node permission errors) and **gateway/session reliability bugs** dominate the bug backlog. Multi-tenancy (#34352, 25 comments) and event-driven architecture (#49190) signal strategic roadmap work. Six PRs were merged/closed today, mostly targeted fixes for desktop, webhook, approval, and TTS issues.

## 2. Releases
**No new releases** published today. The latest version remains **v0.20.0 (2026-08-03)** per issue context.

## 3. Project Progress — Merged/Closed PRs (6)
| PR | Type | Summary | Status |
|----|------|---------|--------|
| [#84187](https://github.com/NousResearch/hermes-agent/pull/84187) | feat | Matrix: add text-only approval controls (`matrix.approval_controls: text`) | **Closed** (merged) |
| [#84089](https://github.com/NousResearch/hermes-agent/issues/84089) | bug | `hermes kanban show` SQLite "closed database" error | **Closed** (duplicate) |
| [#83720](https://github.com/NousResearch/hermes-agent/pull/83720) | fix | Gateway: never reap supervised gateway + relaunch on desktop (re)start | **Open** (fixes #83683) |
| [#80032](https://github.com/NousResearch/hermes-agent/pull/80032) | fix | Email: surface IMAP fetch failures through fatal-error hook | **Open** (fixes #80016) |
| [#84181](https://github.com/NousResearch/hermes-agent/pull/84181) | fix | TTS: force Opus for local Ogg output (fixes Vorbis degradation) | **Open** (fixes #84102) |
| [#84184](https://github.com/NousResearch/hermes-agent/pull/84184) | fix | Webhook: validate delivery targets on subscribe | **Open** (fixes #84171, #84172) |

> **Note**: Only #84187 shows as "Closed" in the data; the others are marked "Open" but represent active fixes for critical bugs. The 6 merged/closed count likely includes additional routine merges not detailed in the top-20 list.

## 4. Community Hot Topics — Most Discussed Issues/PRs
| Item | Comments | 👍 | Core Need |
|------|----------|----|-----------|
| [#78647](https://github.com/NousResearch/hermes-agent/issues/78647) **Epic: Shard all 20 god files** | 67 | 0 | **Architectural mandate**: decompose 7k+ line files (e.g., `mcp_tool.py` 7,230 LOC) into clean modules; policy: "all god files are sharded, never reverted" |
| [#34352](https://github.com/NousResearch/hermes-agent/issues/34352) **Solving the Multi-Tenant Hermes Problem** | 25 | 3 | **Strategic**: memory operations bypass hook system → tenant isolation impossible without forking core; production fix running for months |
| [#67442](https://github.com/NousResearch/hermes-agent/issues/67442) **Cross-process turn serialization** | 14 | 0 | **Session integrity**: CLI-continuity sessions need DB-level lease when separate OS process shares gateway session |
| [#66616](https://github.com/NousResearch/hermes-agent/issues/66616) **Skills index stale/degraded** | 13 | 0 | **Automation health**: skills index 29.8h old (limit 26h); cron workflow reliability |
| [#78642](https://github.com/NousResearch/hermes-agent/issues/78642) **Shard tools/mcp_tool.py** | 11 | 0 | **Sub-task of #78647**: largest god file at 7,230 lines |
| [#83683](https://github.com/NousResearch/hermes-agent/issues/83683) **Desktop restart kills gateway, never relaunches** | 7 | 0 | **P1 Regression**: WeChat/QQ/Telegram go silent on every desktop restart (v0.20.0) |

**Analysis**: The god-file decomposition epic (#78647) is the **single largest coordination effort**, touching 20+ files. Multi-tenancy (#34352) reveals a **fundamental architectural gap** — memory bypasses hooks, blocking SaaS/multi-user deployments. Windows Desktop stability is a **user-facing crisis** with 4+ correlated issues (#63717, #68760, #62792, #83562, #82186) spanning updates, file locks, and Node permissions.

## 5. Bugs & Stability — Ranked by Severity
### 🔴 P1 / Critical (User-facing outages, data loss risk)
| Issue | Component | Status | Fix PR |
|-------|-----------|--------|--------|
| [#83683](https://github.com/NousResearch/hermes-agent/issues/83683) Desktop restart reaps live gateway, never relaunches — WeChat/QQ/Telegram silent | Desktop, Gateway | **Open** | [#83720](https://github.com/NousResearch/hermes-agent/pull/83720) |
| [#83562](https://github.com/NousResearch/hermes-agent/issues/83562) Windows Desktop update: backend works manually but Desktop reports `exited (0)` | Desktop, Windows | **Open** | — |
| [#63717](https://github.com/NousResearch/hermes-agent/issues/63717) Windows: Desktop update failures — 7 correlated root causes | Desktop, Windows | **Open** | — |
| [#68760](https://github.com/NousResearch/hermes-agent/issues/68760) `hermes.exe` locked during `hermes update` (WinError 32) | CLI, Windows | **Open** (duplicate) | — |
| [#62792](https://github.com/NousResearch/hermes-agent/issues/62792) Desktop backend uses venv Python on Windows, holding `.pyd` locks blocking updates | Desktop, Windows | **Open** | — |
| [#82846](https://github.com/NousResearch/hermes-agent/issues/82846) Smart-approval auxiliary LLM call has no timeout — wedges agent session indefinitely | Approval, Security | **Open** | [#84125](https://github.com/NousResearch/hermes-agent/pull/84125) |
| [#84169](https://github.com/NousResearch/hermes-agent/issues/84169) Empty `tool_calls` array 400s strict providers (auxiliary client bypasses sanitizer) | Agent, DeepSeek | **Open** | — |

### 🟠 P2 / High (Functional regressions, platform-specific)
| Issue | Component | Status | Fix PR |
|-------|-----------|--------|--------|
| [#73779](https://github.com/NousResearch/hermes-agent/issues/73779) Feishu multiplex mode: WebSocket loop dies with "Future attached to different loop" | Plugins, Feishu | **Open** | — |
| [#83427](https://github.com/NousResearch/hermes-agent/issues/83427) `browser_exec` crashes: `pydantic_core` ModuleNotFoundError when PYTHONPATH points at Hermes venv | Tools, Browser, Desktop | **Open** | — |
| [#83213](https://github.com/NousResearch/hermes-agent/issues/83213) Background process completion notifications misrouted after `/new` | Gateway, Terminal, Sessions | **Open** | — |
| [#81410](https://github.com/NousResearch/hermes-agent/issues/81410) Nous OAuth refresh returns `invalid_grant` after event loop stall (single-process) | Auth, Nous | **Open** | — |
| [#84171](https://github.com/NousResearch/hermes-agent/issues/84171) Webhook `--deliver telegram/all` silently fails | Gateway, Webhook, Telegram | **Open** | [#84184](https://github.com/NousResearch/hermes-agent/pull/84184) |
| [#84172](https://github.com/NousResearch/hermes-agent/issues/84172) Webhook `platform_toolsets.webhook` key ignored | Gateway, Webhook | **Open** | [#84184](https://github.com/NousResearch/hermes-agent/pull/84184) |
| [#84102](https://github.com/NousResearch/hermes-agent/issues/84102) Local TTS writes Vorbis into `.ogg` — platform voice bubbles degrade | TTS | **Open** | [#84181](https://github.com/NousResearch/hermes-agent/pull/84181) |
| [#80016](https://github.com/NousResearch/hermes-agent/issues/80016) Email adapter swallows all fetch failures — no fatal-error/reconnect | Plugins, Email | **Open** | [#80032](https://github.com/NousResearch/hermes-agent/pull/80032) |

### 🟡 P3 / Medium (Degraded UX, config, automation)
| Issue | Component | Status |
|-------|-----------|--------|
| [#66616](https://github.com/NousResearch/hermes-agent/issues/66616) Skills index stale (29.8h > 26h limit) | Skills, CI | **Open** |
| [#57540](https://github.com/NousResearch/hermes-agent/issues/57540) Desktop leaks explicit text fence language (`text`, `plain`) into rendered prose | Desktop | **Open** |
| [#84034](https://github.com/NousResearch/hermes-agent/issues/84034) NeuTTS missing from `hermes setup` | TTS, Setup | **Open** |
| [#29590](https://github.com/NousResearch/hermes-agent/issues/29590) Hardcoded `max_tokens=2000` + verbose prompt in `vision_tools.py` causes latency for reasoning models | Vision, Config | **Open** |
| [#84163](https://github.com/NousResearch/hermes-agent/issues/84163) Kanban: explicit unresolved project falls back to unrelated workspace | Cron, Kanban | **Open** (duplicate) |
| [#84157](https://github.com/NousResearch/hermes-agent/issues/84157) Desktop: UI Scale resets when switching to Chrome and back (Windows) | Desktop, Windows | **Open** (duplicate) |

## 6. Feature Requests & Roadmap Signals
| Request | Issue | Priority | Likelihood for Next Version |
|---------|-------|----------|----------------------------|
| **Multi-tenant memory isolation** (hook system integration) | [#34352](https://github.com/NousResearch/hermes-agent/issues/34352) | P3, needs-decision | **High** — production fix exists, architectural priority |
| **Event substrate for Kanban** (any-surface subscribers + delivery-adapter registry) | [#49190](https://github.com/NousResearch/hermes-agent/issues/49190) | P3, needs-decision | **Medium** — extends existing event log, low risk |
| **Per-call model/reasoning_effort overrides on `delegate_task`** | [#80222](https://github.com/NousResearch/hermes-agent/issues/80222) | P3, needs-decision | **High** — simple schema addition, high utility |
| **Antigravity (Google) as first-class OAuth provider** | [#83244](https://github.com/NousResearch/hermes-agent/issues/83244) | P3, needs-decision | **Medium** — follows existing OAuth plugin pattern |
| **Subagent-handles plugin** (registry + mid-flight messaging) | [#83907](https://github.com/NousResearch/hermes-agent/pull/83907) | P3, needs-decision | **Medium** — PR open, builds on existing hooks |
| **Deferred tool composition in `execute_code`** (MCP/plugin tools via Tool Search) | [#82243](https://github.com/NousResearch/hermes-agent/pull/82243) | P3, needs-decision | **Medium** — PR open, extends tool surface |
| **Cron: opt-in multi-message Slack delivery for sectioned output** | [#84182](https://github.com/NousResearch/hermes-agent/pull/84182) | P3 | **High** — PR open, default-off, low risk |
| **Desktop: tab close controls with focus recovery** | [#83051](https://github.com/NousResearch/hermes-agent/pull/83051) | P3 | **High** — PR open, UX polish |
| **Config: preserve literal dots in provider keys** (e.g., `qwen3.5-397b`) | [#84188](https://github.com/NousResearch/hermes-agent/pull/84188) | — | **High** — PR open, fixes silent config corruption |

**Prediction**: The next patch (v0.20.x) will likely include: Windows desktop update fixes (#83720, #83382), webhook validation (#84184), TTS Opus fix (#84181), approval timeout (#84125), config dot-key fix (#84188), and Matrix text approval (#84187). Multi-tenancy and god-file sharding are **multi-release epics**.

## 7. User Feedback Summary — Real Pain Points
| Pain Point | Evidence | Impact |
|------------|----------|--------|
| **Windows Desktop updates fundamentally broken** | 5+ issues (#63717, #68760, #62792, #83562, #82186) with correlated root causes; users cannot update; repair install fails | **Critical** — blocks all Windows users from receiving fixes |
| **Desktop restart kills messaging gateway permanently** | #83683: "WeChat/QQ/Telegram go completely silent until manually restarted" — regression in v0.20.0 | **Critical** — daily workflow disruption for desktop users |
| **OAuth/auth instability** | #81410: Nous OAuth `invalid_grant` mid-session after event loop stall; #82846: approval wedges session | **High** — trust erosion, session loss |
| **Feishu/Enterprise platform reliability** | #73779: multiplex mode WebSocket

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-08-12

---

## 1. Today's Overview

PicoClaw shows **steady maintenance activity** with 3 issue updates and 6 active PRs in the last 24 hours, but **no releases or merged changes**. The project is in a **pre-release stabilization phase**: multiple PRs address bugs in agent routing, Telegram topic handling, command allow-lists, and config dead code, while a new Exa web search provider is under review. No critical regressions or security issues were reported today. Maintainer bandwidth appears focused on review cycles rather than merges.

---

## 2. Releases

**No new releases** in the last 24 hours. Current latest remains **v0.3.1 (commit 2cf030d2)**.

---

## 3. Project Progress

No PRs were merged or closed today. All 6 open PRs received updates (likely review comments or CI re-runs) but remain in review:

| PR | Title | Status | Area |
|----|-------|--------|------|
| [#3316](https://github.com/sipeed/picoclaw/pull/3316) | fix: routed-agent context management (history, summarization, compression, seahorse bootstrap) | Open, stale | Agent routing / session mgmt |
| [#3315](https://github.com/sipeed/picoclaw/pull/3315) | Support topics in private bot chats (Telegram) | Open, stale | Telegram channel |
| [#3317](https://github.com/sipeed/picoclaw/pull/3317) | feat(providers): log prompt cache tokens in LLM response debug output | Open, stale | Observability / Providers |
| [#3314](https://github.com/sipeed/picoclaw/pull/3314) | Fix: agent not able to execute shell command added to customAllowPatterns | Open | Security / Exec allow-list |
| [#3299](https://github.com/sipeed/picoclaw/pull/3299) | Add native Exa web search provider | Open, stale | Tools / Web search |
| [#3329](https://github.com/sipeed/picoclaw/pull/3329) | fix(line): warn on inert webhook_host / webhook_port instead of seeding them | Open | Config / LINE channel |

**Key advances in review:**
- **Agent routing correctness** (#3316) — fixes context loss and missing auto-compression for dispatched agents
- **Telegram private-chat topics** (#3315) — enables forum-style topics in 1:1 bot chats
- **Exec allow-list fix** (#3314) — resolves `customAllowPatterns` being overridden by default deny patterns
- **Dead config cleanup** (#3329) — addresses #3328 by warning on unused LINE webhook settings

---

## 4. Community Hot Topics

| Item | Type | Activity | Core Need |
|------|------|----------|-----------|
| [#3301](https://github.com/sipeed/picoclaw/issues/3301) | Issue (Bug) | 3 comments, updated 2026-08-11 | **Dispatch rules break session lifecycle** — `/clear` and auto-compression silently fail when chats are routed to non-default agents. Blocks production use of multi-agent routing. |
| [#3294](https://github.com/sipeed/picoclaw/issues/3294) | Issue (Closed) | 3 comments, closed 2026-08-11 | **`/list models` UX mismatch** — users expect all configured models, but only current model shows. Closed as stale; may need reopen if UX change desired. |
| [#3328](https://github.com/sipeed/picoclaw/issues/3328) | Issue (Bug) | 0 comments, created 2026-08-11 | **Dead config: `webhook_host`/`webhook_port`** — documented, defaulted, env-bound, but never read. PR [#3329](https://github.com/sipeed/picoclaw/pull/3329) adds warning. |

**Underlying theme:** Users are pushing **multi-agent routing** and **multi-channel deployments** (Discord, Telegram, LINE) into production, exposing gaps in session management, config validation, and channel-specific features.

---

## 5. Bugs & Stability

| Severity | Issue | Description | Fix PR |
|----------|-------|-------------|--------|
| **High** | [#3301](https://github.com/sipeed/picoclaw/issues/3301) | Dispatch-routed agents lose history; `/clear` and auto-compression no-op. Affects all routed chats. | [#3316](https://github.com/sipeed/picoclaw/pull/3316) (open) |
| **Medium** | [#3314](https://github.com/sipeed/picoclaw/pull/3314) | `customAllowPatterns` ignored — default deny patterns take precedence, blocking allowed commands (e.g., `git push`). | [#3314](https://github.com/sipeed/picoclaw/pull/3314) (open) |
| **Low** | [#3328](https://github.com/sipeed/picoclaw/issues/3328) | LINE `webhook_host`/`webhook_port` config inert — no consumer, no warning. | [#3329](https://github.com/sipeed/picoclaw/pull/3329) (open) |
| **Low** | [#3294](https://github.com/sipeed/picoclaw/issues/3294) | `/list models` shows only active model, not all configured. Closed stale; may confuse users. | None |

**No crashes or regressions reported today.**

---

## 6. Feature Requests & Roadmap Signals

| Signal | Source | Likelihood for Next Release |
|--------|--------|-----------------------------|
| **Native Exa web search provider** | [#3299](https://github.com/sipeed/picoclaw/pull/3299) (PR) | **High** — complete implementation with config, auth, date filters; only needs review |
| **Telegram private-chat topic support** | [#3315](https://github.com/sipeed/picoclaw/pull/3315) (PR) | **High** — addresses real Forum mode gap in 1:1 bot chats |
| **Prompt cache token logging (DeepSeek, Cloudflare AI Gateway)** | [#3317](https://github.com/sipeed/picoclaw/pull/3317) (PR) | **Medium** — observability improvement, low risk |
| **`/list models` to show all configured models** | [#3294](https://github.com/sipeed/picoclaw/issues/3294) (Issue) | **Low** — closed stale; would need reopen + PR |
| **Config validation for dead settings** | [#3328](https://github.com/sipeed/picoclaw/issues/3328) → [#3329](https://github.com/sipeed/picoclaw/pull/3329) | **Medium** — warning approach chosen over removal; may expand to other dead configs |

**Prediction:** Next patch (v0.3.2) will likely include #3316, #3314, #3315, #3329, and possibly #3299 if review completes.

---

## 7. User Feedback Summary

| Pain Point | Evidence | Impact |
|------------|----------|--------|
| **Dispatch rules break session features** | #3301: "wasn't remembering anything from previous messages, and auto-compaction never triggered" | **High** — blocks multi-agent architectures |
| **Exec allow-list not working** | #3314: "`git push` blocked despite being in `customAllowPatterns`" | **Medium** — security/usability friction for agent tool use |
| **Telegram topic UX incomplete** | #3315: topics only worked in forum supergroups, not private bot chats | **Medium** — limits organized conversations in 1:1 bots |
| **Config confusion (dead settings)** | #3328: settings "exist… are given defaults, and are documented — but nothing reads them" | **Low** — erodes trust in config docs |
| **Model listing UX mismatch** | #3294: "/list models shows only current model" | **Low** — closed stale, but signals discoverability gap |

**Positive signals:** Users are building **complex routing topologies** (Discord → specific agents, Telegram topics, LINE webhooks) and contributing fixes (Exa provider, cache logging). This indicates **production adoption** beyond toy usage.

---

## 8. Backlog Watch

| Item | Age | Risk | Why It Needs Attention |
|------|-----|------|------------------------|
| [#3301](https://github.com/sipeed/picoclaw/issues/3301) + [#3316](https://github.com/sipeed/picoclaw/pull/3316) | 14 days (issue), 9 days (PR) | **High** | Core routing + session bug; PR exists but marked stale — needs review/merge to unblock users |
| [#3299](https://github.com/sipeed/picoclaw/pull/3299) | 17 days | **Medium** | Feature-complete Exa provider; adds provider diversity; stale label may indicate review backlog |
| [#3315](https://github.com/sipeed/picoclaw/pull/3315) | 9 days | **Medium** | Telegram topic fix for private chats; real user need, low complexity |
| [#3314](https://github.com/sipeed/picoclaw/pull/3314) | 9 days | **Medium** | Security-relevant allow-list fix; tests exist per description |
| [#3328](https://github.com/sipeed/picoclaw/issues/3328) + [#3329](https://github.com/sipeed/picoclaw/pull/3329) | 1 day | **Low** | Fresh dead-config fix; easy win for config hygiene |

**Maintainer action recommended:** Prioritize review of **#3316** (unblocks routing), **#3314** (security), and **#3315** (Telegram UX). Consider removing `stale` label from active PRs with recent updates.

---

*Digest generated from GitHub data as of 2026-08-12. Links point to live issues/PRs on github.com/sipeed/picoclaw.*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-08-12

---

## 1. Today's Overview
NanoClaw shows **moderate core-team activity** with 8 PRs updated in the last 24 hours (3 merged/closed, 5 still open) and only 1 new issue filed. The merged PRs focus on **MCP server support expansion** (remote Streamable HTTP for Codex/OpenCode), **agent template migration to Agent Plugins 1.0.0**, and a **Tavily MCP tool skill**. The single new issue (#3226) reveals a **silent message-loss bug** when platforms reuse message IDs—a potential data-integrity risk. No new releases were cut, suggesting the project is in a **feature-stabilization phase** ahead of a future version bump.

---

## 2. Releases
**None** — No new versions published in the last 24 hours.

---

## 3. Project Progress (Merged/Closed PRs Today)

| PR | Type | Summary | Impact |
|----|------|---------|--------|
| [#3221](https://github.com/nanocoai/nanoclaw/pull/3221) | Feature (core-team) | **Remote Streamable HTTP MCP servers for Codex & OpenCode** — extends PR #3092’s engine/Claude support to remaining providers. | Unblocks HTTP-based MCP servers for all built-in providers; eliminates config-write crashes on `type: 'http'` entries. |
| [#3092](https://github.com/nanocoai/nanoclaw/pull/3092) | Feature (core-team) | **Engine + Claude provider: remote Streamable HTTP MCP servers** — adds `{ type: 'http', url }` to `mcpServers`. | Foundational MCP transport upgrade; enables cloud-hosted MCP servers (no stdio tunneling needed). |
| [#3190](https://github.com/nanocoai/nanoclaw/pull/3190) | Utility Skill | **Tavily MCP tool skill** — standalone skill under `.claude/skills/tavily-mcp/`. | Adds web-search capability via Tavily API; zero core changes, drop-in for users. |

**Net progress:** MCP remote-HTTP support now **complete across all providers**; agent-template format migration (#3220) and transactional upgrades (#3195) remain in review.

---

## 4. Community Hot Topics

| Item | Activity | Underlying Need |
|------|----------|-----------------|
| [#3226](https://github.com/nanocoai/nanoclaw/issues/3226) **Inbound messages silently dropped when a platform reuses a message id** | 1 comment, 0 👍, updated 2026-08-11 | **Message deduplication logic is over-aggressive** — platforms (e.g., Slack, Discord) may legitimately reuse IDs across sessions or retries. Users see "agent ignored me" with zero observability. Needs idempotency key redesign (session+ID) or at least a warning log/metric. |
| [#3220](https://github.com/nanocoai/nanoclaw/pull/3220) **Agent templates → Agent Plugins 1.0.0 directories** | Open, core-team, updated 2026-08-11 | **Breaking format migration** — templates become versioned plugin directories. Affects every user’s `.claude/agents/` layout; requires clear upgrade path & docs. |
| [#2909](https://github.com/nanocoai/nanoclaw/pull/2909) **Template setup wizard & first-agent stamping** | Open since 2026-07-02, updated 2026-08-11 | **Onboarding UX** — wizard now asks “Fresh agent / From template / Import” before sandbox build. Long review cycle suggests design iteration or test gaps. |

---

## 5. Bugs & Stability (Reported/Active Today)

| Severity | Issue / PR | Status | Fix PR? |
|----------|------------|--------|---------|
| **High** | [#3226](https://github.com/nanocoai/nanoclaw/issues/3226) Silent message drop on ID reuse | Open (1 comment) | **No** — root cause in deduplication layer; needs core fix + telemetry. |
| **Medium** | [#3195](https://github.com/nanocoai/nanoclaw/pull/3195) Make NanoClaw upgrades transactional | Open (core-team) | **Yes** — PR implements atomic rollback on failed upgrades; under review. |
| **Medium** | [#3145](https://github.com/nanocoai/nanoclaw/pull/3145) Backfill destinations for existing wirings (migration 021) | Open | **Yes** — DB migration fixes missing channel destinations; low risk, ready to merge. |
| **Low** | [#2134](https://github.com/nanocoai/nanoclaw/pull/2134) Apple Silicon + Colima env vars in launchd plist | Open since 2026-04-29 | **Yes** — long-stalled PR; affects macOS ARM users on Colima. Needs maintainer triage. |

---

## 6. Feature Requests & Roadmap Signals

| Signal | Source | Likelihood for Next Version |
|--------|--------|-----------------------------|
| **Agent Plugins 1.0.0 (template → plugin dir migration)** | [#3220](https://github.com/nanocoai/nanoclaw/pull/3220) (core-team) | **Very High** — labeled `fix!` (breaking), active review, security hardening included. |
| **Transactional upgrades** | [#3195](https://github.com/nanocoai/nanoclaw/pull/3195) (core-team) | **High** — addresses upgrade reliability; core-team authored. |
| **Setup wizard template flow** | [#2909](https://github.com/nanocoai/nanoclaw/pull/2909) (core-team) | **Medium-High** — part 2 of template work; blocked on #3220 merge. |
| **Remote HTTP MCP for all providers** | [#3092](https://github.com/nanocoai/nanoclaw/pull/3092) + [#3221](https://github.com/nanocoai/nanoclaw/pull/3221) | **Done** — merged today; will ship in next release. |
| **More utility skills (Tavily-style)** | [#3190](https://github.com/nanocoai/nanoclaw/pull/3190) (community) | **Ongoing** — low-barrier contributions; expect steady stream. |

---

## 7. User Feedback Summary

| Pain Point / Use Case | Evidence | Sentiment |
|------------------------|----------|-----------|
| **Silent message loss** — “indistinguishable from agent ignored me” | [#3226](https://github.com/nanocoai/nanoclaw/issues/3226) | 😡 **Frustration / Trust erosion** — no visibility, no retry. |
| **Upgrade anxiety** — fear of broken state mid-upgrade | [#3195](https://github.com/nanocoai/nanoclaw/pull/3195) motivation | 😟 **Apprehension** — transactional upgrades directly address this. |
| **macOS ARM + Colima broken launchd** | [#2134](https://github.com/nanocoai/nanoclaw/pull/2134) (15 months open) | 😞 **Neglect feel** — core-team hasn’t triaged; workaround required. |
| **Desire for web search / external tools** | [#3190](https://github.com/nanocoai/nanoclaw/pull/3190) merged quickly | 😊 **Positive** — skill model works; community contributing. |

---

## 8. Backlog Watch (Stale & Critical)

| Item | Age | Why It Matters | Suggested Action |
|------|-----|----------------|------------------|
| [#2134](https://github.com/nanocoai/nanoclaw/pull/2134) Apple Silicon + Colima env vars in launchd plist | **471 days** | Blocks macOS ARM developers using Colima; trivial fix (env var injection). | **Triage & merge** — assign to platform maintainer this sprint. |
| [#2909](https://github.com/nanocoai/nanoclaw/pull/2909) Template setup wizard & first-agent stamping | **41 days** | Onboarding UX gate for Agent Plugins 1.0; user-facing. | **Unblock review** — pair with #3220 author for final polish. |
| [#3145](https://github.com/nanocoai/nanoclaw/pull/3145) Backfill destinations migration (021) | **15 days** | Data-integrity fix for existing wirings; low risk, high value. | **Merge soon** — run migration tests, then land. |
| [#3195](https://github.com/nanocoai/nanoclaw/pull/3195) Transactional upgrades | **6 days** | Critical for release confidence; core-team PR. | **Prioritize review** — target merge before next release candidate. |

---

### Project Health Snapshot
- **Velocity:** Healthy core-team throughput (3 merges/day), but **stale PR backlog** (>1 yr for #2134) signals triage gap.
- **Risk:** Silent message loss (#3226) is a **trust-critical bug** — should be escalated to P0.
- **Direction:** Clear march toward **Agent Plugins 1.0 + transactional ops + full HTTP MCP** — next release will be a **major version** (breaking template format).

*Generated 2026-08-12 from GitHub data (issues/PRs updated 2026-08-10 → 2026-08-11).*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-08-12

## 1. Today's Overview

IronClaw shows **high-velocity architectural churn** with 73 total items (23 issues, 50 PRs) updated in 24 hours. The project is in a major **"Reborn" transition** — refactoring the agent kernel to support pluggable ACP executors, profile-agnostic durable storage, unified channel adapters, and context-window compaction. No releases shipped today; the cadence suggests a pre-release stabilization phase for v1.3.0. Core contributors (serrrfirat, henrypark133, BenKurrek) drive most high-risk PRs, while new contributors tackle WebUI/CLI surfaces.

---

## 2. Releases

**No new releases today.** The latest published version remains pre-v1.3.0. Watch for a release once the "Reborn" epics (#7482, #7467, #7038) land.

---

## 3. Project Progress — Merged/Closed PRs (25 items)

| PR | Scope | Impact |
|----|-------|--------|
| [#7471](https://github.com/nearai/ironclaw/pull/7471) | **Processes/Leases** | Lease expiry now recovers safe runs instead of failing them; isolates journal heartbeat pool; adds grace window & bounded reclaim. Fixes automation run reliability. |
| [#7470](https://github.com/nearai/ironclaw/pull/7470) | **Threads** | Restores listability for unprojected `thread_index` rows — sidebar now shows threads missing ordered-projection metadata. |
| [#7503](https://github.com/nearai/ironclaw/pull/7503) | **Loop/Context** | Pins accepted user task across 128-message tail cut; fails with `BudgetExceeded` instead of silent drop. |
| [#6997](https://github.com/nearai/ironclaw/pull/6997) | **LLM/Anthropic** | Explicit `cache_control` breakpoints on both rig adapter & OAuth transport (closes #6984, P0 for pi-harness adoption). |
| [#7480](https://github.com/nearai/ironclaw/pull/7480) | **WebUI** | Adds `MarqueeText` component — long conversation titles now reveal fully on hover in left nav (closes #7481). |
| [#7483](https://github.com/nearai/ironclaw/pull/7483) | **Auth/Provider** | Fixes default NEAR AI connection & model probes to use authenticated runtime session (blank API key now works). |
| [#7514](https://github.com/nearai/ironclaw/pull/7514) | **Railway/Shell** | Enables Railway shell for `hosted-single-tenant-volume` profile with strict release-only flag. |
| [#7405](https://github.com/nearai/ironclaw/pull/7405) | **Tool Discovery** | Improves deferred tool discovery with complete signatures & namespace-aware catalog previews (closes #7405). |
| [#7488](https://github.com/nearai/ironclaw/pull/7488), [#7487](https://github.com/nearai/ironclaw/pull/7487) | **Tool Disclosure** | Fixes hardcoded `Exclusive` concurrency on bridge tools; `tool_search` no longer marks tools disclosed without returning schemas. |

**Net effect:** Automation runs, thread listing, context eviction, Anthropic caching, and tool discovery are all materially more reliable today.

---

## 4. Community Hot Topics

| Item | Activity | Underlying Need |
|------|----------|-----------------|
| [#7482](https://github.com/nearai/ironclaw/issues/7482) **Epic: Pluggable agent loops** | 3 comments, high-risk label | **Architectural decoupling** — IronClaw becomes kernel (scheduling, tenancy, secrets, egress); agent loops & tool code move to off-the-shelf ACP agents. Blocking multiple teams. |
| [#7467](https://github.com/nearai/ironclaw/issues/7467) **Epic: Profile-agnostic durable state** | 0 comments, high-risk | **Operational continuity** — Profile changes currently strand conversation history, secrets, extensions, workspaces. Migration path needed. |
| [#7477](https://github.com/nearai/ironclaw/pull/7477) **Unified channel model** | Large PR, cross-cutting | **Channel parity** — Single `ChannelAdapter` for inbound/replies/notifications across Web, Slack, Telegram. Reduces surface area for bugs like #7294, #7247. |
| [#7038](https://github.com/nearai/ironclaw/issues/7038) **Epic: Storybook + AI-first Design System** | 0 comments, v1.3.0 | **UX consistency** — Backed by PR #7257 & design-system proposal. Needed before WebUI scales to multi-tenant SaaS. |
| [#7517](https://github.com/nearai/ironclaw/issues/7517) **Staking path for Google/GitHub sign-ins** | New today | **Monetization/onboarding** — Users can't stake for inference after OAuth sign-in; "Sign in with NEAR" not attachable to existing accounts. |

**Signal:** The project is simultaneously attacking kernel architecture, multi-profile persistence, channel unification, and design-system foundations — a "big bang" refactor typical of pre-1.0 → 1.x transitions.

---

## 5. Bugs & Stability — Today's Reports (Ranked by Severity)

| Severity | Issue | Fix PR? | Notes |
|----------|-------|---------|-------|
| **Critical** | [#7484](https://github.com/nearai/ironclaw/issues/7484) Context window silently evicts task — 128-message clamp in 3 places | [#7504](https://github.com/nearai/ironclaw/pull/7504), [#7503](https://github.com/nearai/ironclaw/pull/7503) | Task loss on long runs; PRs add compaction signal & task pinning. |
| **Critical** | [#7485](https://github.com/nearai/ironclaw/issues/7485) Token estimator double-counts ASCII → halves effective context | — | Two estimators diverge; transcript path uses `bytes/2` (2 chars/token). No PR yet. |
| **High** | [#7490](https://github.com/nearai/ironclaw/issues/7490) `retry_disposition()` silent-redrive table is dead code | — | ~25 transient error categories classified but never acted on. Infra failures not auto-retried. |
| **High** | [#7486](https://github.com/nearai/ironclaw/issues/7486) Typed no-progress escape false-positives on idempotent reads/polling | — | Output hashing marks `NoChange` on legitimate long reads → terminal failure. |
| **High** | [#7476](https://github.com/nearai/ironclaw/issues/7476) `classify_delivery_outcome` ignores `Failed.vendor_message_refs` | — | Partial-send evidence hidden from model (mirror of #7475 fix for notices). |
| **Medium** | [#7505](https://github.com/nearai/ironclaw/issues/7505) Memory target-alias resolution only in one provider | [#7512](https://github.com/nearai/ironclaw/pull/7512) | mem0 stores `target: "memory"` verbatim → canonical `MEMORY.md` reads fail. PR moves resolution to domain layer. |
| **Medium** | [#7508](https://github.com/nearai/ironclaw/issues/7508) GitHub MCP extension confusing endpoint verification prompt | — | QA-filed; extension reports "already registered" then demands verification. |
| **Medium** | [#7294](https://github.com/nearai/ironclaw/issues/7294) Agent incorrectly remembers Telegram routine from another scope | Closed | Cross-thread memory leak; likely fixed by unified channel model (#7477). |
| **Medium** | [#7247](https://github.com/nearai/ironclaw/issues/7247) Agent falsely claims GitHub already connected | Closed | Auth state not verified before assertion. |
| **Medium** | [#7246](https://github.com/nearai/ironclaw/issues/7246) Agent hallucinates automation status | Closed | Fabricates running state vs. actual "No automations yet." |

**Stability takeaway:** Context-window management and retry logic are the two biggest reliability gaps. Fixes for memory aliasing and tool disclosure are merged; context compaction and token estimation need PRs.

---

## 6. Feature Requests & Roadmap Signals

| Request | Source | Likelihood for v1.3.0 |
|---------|--------|----------------------|
| **Pluggable ACP executor / kernel architecture** | #7482 (epic) | **High** — Core "Reborn" thesis; multiple PRs in flight. |
| **Profile-agnostic Reborn storage + legacy migration** | #7467 (epic), #7456 (PR) | **High** — PR #7456 open, blocked on Railway shell (#7514 merged). |
| **Unified channel adapter (Slack/Telegram/Web)** | #7477 (PR), #7464 (Telegram linked-device) | **High** — Slack 8/16 ops done (#7515), Telegram linked-device PR open. |
| **Automation suggestion cards V1** | #7498 (PR), #7038 (epic) | **Medium** — Backend PR open; needs design-system (#7038) for frontend. |
| **ACP CLI serve command (stdio streaming)** | #7513 (PR) | **Medium** — New contributor PR; enables Copilot/VS Code integration. |
| **IdentyClaw Passport host-mediated auth** | #7496 | **Low** — Niche; requires builtin.idcp + practitioner helper. |
| **Staking path for OAuth accounts** | #7517 | **Low** — Cloud.near.ai monetization; separate product track. |
| **Storybook + AI-first Design System** | #7038 (epic) | **Post-v1.3.0** — Large scope; proposal exists but no implementation PRs. |

**Prediction:** v1.3.0 will ship kernel pluggability, profile-agnostic storage, unified channels, and context compaction. Design system and IdentyClaw slip to 1.4.0.

---

## 7. User Feedback Summary

| Pain Point | Evidence | Frequency |
|------------|----------|-----------|
| **Automation runs unreliable** — "same prompt sometimes succeeds, sometimes produces nothing" | #6879 (epic), QA bugs #7246, #7247, #7294 | High (multiple QA reports) |
| **Agent hallucinates state** — claims GitHub/Telegram connected, automations running when they're not | #7247, #7246, #7294 | High (3 QA bugs same instance) |
| **Long conversation titles unreadable in sidebar** | #7481 → fixed by #7480 | Medium (UX papercut) |
| **No staking path after Google/GitHub sign-in** | #7517 | Low (single report, but monetization-critical) |
| **GitHub MCP extension confusing verification flow** | #7508 | Low (QA environment) |
| **Memory not shared across conversations** | #7365 (PR fixes), #7505 | Medium (core feature gap) |

**Satisfaction signal:** QA team filing structured bugs against a Railway instance indicates active dogfooding. Core memory/cross-thread issues being fixed suggests improving trust.

---

## 8. Backlog Watch — Stale/Important Items Needing Attention

| Item | Age | Why It Matters | Status |
|------|-----|----------------|--------|
| [#5910](https://github.com/nearai/ironclaw/pull/5910) **Hydrate approval gates on notification open** | 33 days | WebUI subscription startup race; blocks approval UX for long-running agents. | Open, bot-authored, no recent review. |
| [#7038](https://github.com/nearai/ironclaw/issues/7038) **Epic: Storybook + Design System** | 9 days | Blocks consistent WebUI at scale; proposal ready (PR #7257). | No implementation PRs; needs champion. |
| [#6879](https://github.com/nearai/ironclaw/issues/6879) **Automation runs hit-or-miss** | 14 days | Structural: trigger fires execute as plain chat turns. | Epic open; #7471 (lease recovery) helps but root cause untouched. |
| [#7485](https://github.com/nearai/ironclaw/issues/7485) **Token estimator double-counts ASCII** | 1 day | Halves effective context window; affects all long-running agents. | No PR; core loop bug. |
| [#7490](https://github.com/nearai/ironclaw/issues/7490) **retry_disposition() dead code** | 1 day | 25 transient error categories classified but never retried. | No PR; infra resilience gap. |
| [#7489](https://github.com/nearai/ironclaw/issues/7489) **Coding tools: 24 KiB preview ceiling + 2000-line read gate** | 1 day | Round-trip inflation for code editing; tracked for OMP cutover (#7435). | Tracking issue; depends on #7435. |

**Maintainer action items:** Assign reviewers to #5910, #7485, #7490; decide design-system resourcing for #7038; ensure automation epic (#6879) gets a dedicated fix PR beyond lease recovery.

---

## Appendix: Links Index

- **Epics:** [#7482](https://github.com/nearai/ironclaw/issues/7482) · [#7467](https://github.com/nearai/ironclaw/issues/7467) · [#7038](https://github.com/nearai/ironclaw/issues/7038) · [#6879](https://github.com/nearai/ironclaw/issues/6879)
- **Key PRs (open):** [#7456](https://github.com/nearai/ironclaw/pull/7456) · [#7477](https://github.com/nearai/ironclaw/pull/7477) · [#7498](https://github.com/nearai/ironclaw/pull/7498) · [#7504](https://github.com/nearai/ironclaw/pull/7504) · [#7513](https://github.com/nearai/ironclaw/pull/7513) · [#7515](https://github.com/nearai/ironclaw/pull/7515) · [#7464](https://github.com/nearai/ironclaw/pull/7464)
- **Key PRs (merged today):** [#7471](https://github.com/nearai/ironclaw/pull/7471) · [#7470](https://github.com/nearai/ironclaw/pull/7470) · [#7503](https://github.com/nearai/ironclaw/pull/7503) · [#6997](https://github.com/nearai/ironclaw/pull/6997) · [#7480](https://github.com/nearai/ironclaw/pull/7480) · [#7514](https://github.com/nearai/ironclaw/pull/7514) · [#7488](https://github.com/nearai/ironclaw/pull/7488) · [#7487](https://github.com/near

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-08-12

## 1. Today's Overview
LobsterAI shipped a new point release (2026.8.11) yesterday, delivering two cowork-focused enhancements: a keyboard shortcut to collapse agent tasks and visual marking of scheduled-task sessions in the sidebar. In the last 24 hours the repository saw moderate automation-driven activity—Dependabot bumped Electron to 43.3.0—and maintainers closed three stale issues from April/May 2026 while merging seven PRs, most of which were part of the 2026.8.10 release train. One long-standing Windows gateway-startup loop issue (#1183) remains open but inactive. Overall velocity is steady, with a clear focus on polishing the cowork UX and model-configuration reliability.

## 2. Releases
### **LobsterAI 2026.8.11** (published 2026-08-11)
| Change | Type | Details |
|--------|------|---------|
| `feat(cowork): add collapse-agent-tasks shortcut and allow modifier shortcuts while typing` | Feature | New global shortcut to fold/expand agent task lists; modifier keys (Ctrl/Shift/Alt) now work even when an input field is focused. |
| `feat(cowork): mark scheduled task sessions in sidebar` | Feature | Scheduled Cowork sessions now display a distinct badge/icon in the session sidebar for quick identification. |

**Breaking changes / migration notes**: None reported. The release is backward-compatible; no config migration required.

## 3. Project Progress (Merged/Closed PRs in last 24h)
| PR | Area | Summary | Link |
|----|------|---------|------|
| #2477 | release, all areas | Merged `release/2026.8.10` → `main`: configurable model thinking levels, improved Cowork progress visibility, scheduled-task badges, local-file workflows, startup/runtime reliability, settings UX. | [#2477](https://github.com/netease-youdao/LobsterAI/pull/2477) |
| #2476 | renderer, im | Dismiss topmost overlay on Escape; fixed nested-modal focus trap and IME composition handling. | [#2476](https://github.com/netease-youdao/LobsterAI/pull/2476) |
| #2457 | renderer, docs, main, openclaw, cowork | Added server-driven thinking-level options per model; persist per-session/per-agent selections; versioned model request options. | [#2457](https://github.com/netease-youdao/LobsterAI/pull/2457) |
| #1241 | settings | Implemented unsaved-changes confirmation dialog for Settings modal (closes #1237). Dirty-check via `useRef` snapshot; intercepts backdrop click, ×, and Cancel. | [#1241](https://github.com/netease-youdao/LobsterAI/pull/1241) |
| #1239 | main | Cross-platform task-completion attention: Windows taskbar flash, macOS Dock bounce, Linux no-op. | [#1239](https://github.com/netease-youdao/LobsterAI/pull/1239) |
| #2474 | renderer | Aligned sites-icon stroke weight in sidebar for visual consistency. | [#2474](https://github.com/netease-youdao/LobsterAI/pull/2474) |
| #2473 | renderer, main, cowork, artifacts | Right-click context menu for local file links (open with, save as, copy path/contents/image, reveal in folder); new `dialog:saveFileCopy` IPC. | [#2473](https://github.com/netease-youdao/LobsterAI/pull/2473) |

## 4. Community Hot Topics
| Item | Type | Activity | Core Need |
|------|------|----------|-----------|
| **#1183** | Issue | 1 comment, 0 👍, updated 2026-08-11 | **Windows gateway startup loop** — after toggling a model off/on, the OpenClaw gateway fails to start within timeout, triggering an endless “gateway failed to start” overlay. Blocks basic model switching on Windows. |
| **#2475** | PR (open) | 0 comments, 0 👍, created 2026-08-11 | **Per-model thinking level persistence** — currently a global setting; users need each model to remember its own thinking depth (e.g., DeepSeek-V4-Pro “max” vs Flash “high”). |
| **#1237 / #1241** | Issue+PR | 2 comments each, closed 2026-08-11 | **Settings data-loss prevention** — users silently lose API keys/provider configs when closing Settings without Save. Fixed via confirmation dialog. |

*Underlying signal*: Windows reliability (gateway, installer, shortcuts) and granular model-configuration UX are the top friction points.

## 5. Bugs & Stability
| Severity | Issue/PR | Status | Fix PR? |
|----------|----------|--------|---------|
| **High** | #1183 – Gateway startup loop on Windows | Open (stale) | No |
| **Medium** | #2062 – Task timeout after 24h continuous run | Closed (stale) | No (likely config/timeout adjustment needed) |
| **Medium** | #1240 – Rate-limited model blocks *all* models/app startup | Closed (stale) | No (architectural: isolation per provider needed) |
| **Low** | #1237 – Silent Settings data loss | Closed | Yes (#1241 merged) |

*No new crash reports or regressions filed in the last 24h.*

## 6. Feature Requests & Roadmap Signals
1. **Per-model thinking levels** (#2475) – PR open, high likelihood for next patch.
2. **Provider-level rate-limit isolation** (#1240) – architectural; may require OpenClaw routing changes.
3. **Persistent gateway health monitoring** (#1183) – Windows-only; could be addressed via retry/backoff + better error UI.
4. **Long-running task support** (#2062) – configurable max-duration or heartbeat-based keep-alive.
5. **Hidden main-agent sessions** (#1181) – PR open since April; low priority but easy cleanup.

*Prediction*: 2026.8.x patch will land #2475 + #1181; provider isolation and gateway hardening likely targeted for 2026.9.

## 7. User Feedback Summary
- **Pain points**:  
  - Windows users hit gateway startup loop (#1183) and silent Settings loss (#1237).  
  - Rate limiting on one provider bricks the entire app (#1240).  
  - 24h+ tasks auto-terminate without clear continuation path (#2062).  
- **Positive signals**:  
  - Scheduled-task sidebar badges and collapse shortcut directly address cowork power-user workflows.  
  - Task-completion Dock/taskbar flash (#1239) solves “missed background job” complaints.  
  - Local-file context menu (#2473) improves artifact-handling UX.  
- **Sentiment**: Cautiously optimistic—core cowork loop improving, but Windows stability and multi-provider resilience remain gaps.

## 8. Backlog Watch (Stale / Needs Maintainer Attention)
| Item | Age | Why It Matters |
|------|-----|----------------|
| **#1183** – Gateway startup loop (Windows) | 134 days | Blocks model switching; affects all Windows users. |
| **#1181** – Hide OpenClaw main agent from session list | 134 days | UI noise; PR exists but unmerged. |
| **#1277** – Dependabot: Electron 40 → 43 | 132 days | Security/perf updates; may need native-module rebuilds. |
| **#1240** – Provider isolation for rate limits | 133 days | Architectural; single provider failure cascades. |
| **#2062** – 24h task timeout | 77 days | Limits always-on agent use cases. |

> **Action suggestion**: Triage #1183 and #1240 for 2026.9 milestone; merge #1181 and #2475 in next patch; schedule Electron upgrade validation sprint.

---

*Data source: GitHub API snapshots for netease-youdao/LobsterAI (issues, PRs, releases) as of 2026-08-12 00:00 UTC.*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-08-12

## 1. Today's Overview
Moltis shows minimal community activity in the last 24 hours with zero issue updates and a single open pull request. The project appears to be in a quiet development phase with no new releases, closed PRs, or community discussions. The sole active PR (#1190) represents a substantial feature addition around CalDAV connector infrastructure, suggesting ongoing backend work rather than user-facing releases. Overall project health indicates steady but low-velocity development with focus on foundational connector architecture.

## 2. Releases
No new releases published today.

## 3. Project Progress
No PRs were merged or closed in the last 24 hours. The single open PR (#1190) remains in progress.

## 4. Community Hot Topics
| Item | Type | Activity | Summary |
|------|------|----------|---------|
| [#1190](https://github.com/moltis-org/moltis/pull/1190) | PR | 0 comments, 0 reactions | **Add durable local CalDAV connectors** — Large feature PR adding provider-neutral connector persistence, atomic CalDAV snapshots, scheduling, projections, bounded local full-text search, prompt-compiled dataset plans, and a trusted read-only `connectors` agent tool for local dataset access. Includes Settings > Connectors account/dataset/provider management UI. |

**Analysis**: This PR signals a strategic push toward robust local data integration (CalDAV/calendar sync) with durability guarantees and agent-tool exposure. The scope suggests it may be a foundational block for future "personal data connector" features. Zero community engagement so far may indicate it's a maintainer-driven initiative or early draft.

## 5. Bugs & Stability
No bugs, crashes, or regressions reported today. No bug-fix PRs observed.

## 6. Feature Requests & Roadmap Signals
The only roadmap signal comes from PR #1190, which implies:
- **Local-first connector architecture** with persistence and atomic snapshots
- **Agent-tool exposure** for trusted read-only access to local datasets (CalDAV initially)
- **Settings UI** for user-managed connector accounts/datasets/providers
- **Full-text search** scoped to local connector data

**Prediction**: Next version will likely ship CalDAV connector support as a core feature, possibly behind a feature flag. The "provider-neutral" design hints at future connectors (CardDAV, IMAP, local files) using the same framework.

## 7. User Feedback Summary
No user-reported issues, discussions, or feedback captured in the last 24 hours. The absence of community input makes satisfaction/dissatisfaction assessment impossible today.

## 8. Backlog Watch
No long-unanswered issues or PRs identified in the provided data snapshot. The repository appears current with no stale items requiring immediate maintainer attention based on today's activity window.

---
*Data source: GitHub API snapshot for moltis-org/moltis covering 2026-08-11 to 2026-08-12. Links point to live GitHub items.*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (QwenPaw) Project Digest — 2026-08-12

## 1. Today's Overview
CoPaw (QwenPaw) is in an **active beta stabilization phase** with v2.1.0-beta.3 released today. The project shows high velocity: 14 issues closed and 25 PRs merged/closed in the last 24 hours, indicating aggressive bug-fixing and polish ahead of a stable v2.1.0. Key themes include MCP tool reliability, LaTeX/formula rendering, desktop stability (Python env injection, CPU idle loops), and Chinese IME input handling. The community is surfacing both regression bugs from the beta series and long-standing UX requests (font sizing, formula rendering, inbox delivery).

## 2. Releases
### v2.1.0-beta.3 (Released 2026-08-11)
**Changes:**
- **Files workspace blog** (#6783) — workspace/file handling improvements
- **Provider capability cache fix** (#6723) — expire stale capability cache entries and clear on model switch
- Version bump to 2.1.0-beta.3

**Migration Notes:**  
- Beta 3 addresses the PYTHONHOME injection bug (#6697) that crashed Python subprocesses on Windows desktop. Users on v2.1.0-beta.1/2 should upgrade.
- No breaking API changes noted; primarily stability and cache fixes.

**Verification Issue:** [#6914](https://github.com/agentscope-ai/QwenPaw/issues/6914) — Installation verification checklist for beta.3 (4-hour deadline).

## 3. Project Progress (Merged/Closed PRs Today)
| PR | Title | Area | Status |
|----|-------|------|--------|
| [#6898](https://github.com/agentscope-ai/QwenPaw/pull/6898) | fix(tools): correct read_file tool description | Tools | ✅ Closed |
| [#6915](https://github.com/agentscope-ai/QwenPaw/pull/6915) | fix(files): repair previews and dark mode styling | Files/Console | ✅ Closed |
| [#6911](https://github.com/agentscope-ai/QwenPaw/pull/6911) | feat(console): unify renderable code block experience | Console/UX | ✅ Closed |
| [#6875](https://github.com/agentscope-ai/QwenPaw/pull/6875) | chore: update release notes for v2.1.0 | Docs/Release | ✅ Closed |
| [#6909](https://github.com/agentscope-ai/QwenPaw/pull/6909) | feat(channels): warn when a bot is already used by another agent | Channels | ✅ Closed |
| [#6891](https://github.com/agentscope-ai/QwenPaw/pull/6891) | feat(computer-use): improve native input workflows | Computer Use | ✅ Closed |
| [#6564](https://github.com/agentscope-ai/QwenPaw/pull/6564) | fix(memory): flush pending turns before compression | Memory/Middleware | ✅ Closed |

**Advancing Features:**
- **Unified code block rendering** — LaTeX/Mermaid now have Preview/Source tabs with theme-aware styling (#6911)
- **File preview fixes** — Unicode PDF filenames, SVG support, dark mode alignment (#6915)
- **Memory middleware hardening** — Auto-memory state preserved across compression/restart cycles (#6564, #6830 open)
- **Computer Use input reliability** — Keyboard sequences, rate limiting, macOS menu handling (#6891, #6913 open)
- **Channel conflict detection** — Warns if bot identity already used by another agent (#6909)

## 4. Community Hot Topics
| Item | Type | Comments | Core Need |
|------|------|----------|-----------|
| [#6732](https://github.com/agentscope-ai/QwenPaw/issues/6732) | Bug | 10 | **MCP tool reliability** — tools become unregistered after hours; requires container restart. Critical for production use. |
| [#6893](https://github.com/agentscope-ai/QwenPaw/issues/6893) | Feature | 7 | **LaTeX/KaTeX rendering + session grouping + active session background** — formula rendering parity with Cherry Studio; workspace UX. |
| [#5790](https://github.com/agentscope-ai/QwenPaw/issues/5790) | Bug | 4 | **Loading animation stuck** after agent response completes (frontend). |
| [#6882](https://github.com/agentscope-ai/QwenPaw/issues/6882) | Question | 3 | **CopilotKit integration** — developer asking for examples/guidance. |
| [#6900](https://github.com/agentscope-ai/QwenPaw/issues/6900) | Feature | 3 | **Isolate chat project directories** from agent workspace — architectural separation. |

**Underlying Signals:**
- **MCP stability** is the top production blocker (#6732, #6874 PR adds configurable timeout)
- **Formula rendering** is a long-standing gap (#4756, #5453, #6893) — now partially addressed in #6911
- **Desktop/Console polish** (CPU idle, IME, font size) affects daily usability
- **Developer extensibility** (CopilotKit, plugin security) emerging as adoption grows

## 5. Bugs & Stability (Ranked by Severity)
| Severity | Issue | Description | Fix PR |
|----------|-------|-------------|--------|
| **Critical** | [#6919](https://github.com/agentscope-ai/QwenPaw/issues/6919) | Frequent crashes in v2.0.1 (pip install, Windows) — traceback in console channel | — |
| **Critical** | [#6697](https://github.com/agentscope-ai/QwenPaw/issues/6697) | Desktop v2.1.0b1 injects `PYTHONHOME` → every Python subprocess crashes (`ModuleNotFoundError: encodings`) | Likely fixed in beta.3 |
| **High** | [#6885](https://github.com/agentscope-ai/QwenPaw/issues/6885) | Console UI crashes on Chinese IME `compositionEnd` during agent run — message queue unusable | — |
| **High** | [#6732](https://github.com/agentscope-ai/QwenPaw/issues/6732) | MCP tools periodically become unregistered; requires restart | [#6874](https://github.com/agentscope-ai/QwenPaw/pull/6874) adds timeout |
| **High** | [#6828](https://github.com/agentscope-ai/QwenPaw/issues/6828) | Console idle CPU ~20% due to infinite CSS animations (`ai-copilot-blink`, antd spinner) | — |
| **Medium** | [#6871](https://github.com/agentscope-ai/QwenPaw/issues/6871) | Historical message timestamps shifted +8h after view re-render (timezone bug) | — |
| **Medium** | [#6918](https://github.com/agentscope-ai/QwenPaw/issues/6918) | Inter-agent messages spawn new agent session per message (shadow instances) | — |
| **Medium** | [#6883](https://github.com/agentscope-ai/QwenPaw/issues/6883) | Daily page: notes in subfolders grouped under wrong date | — |
| **Low** | [#5790](https://github.com/agentscope-ai/QwenPaw/issues/5790) | Loading spinner persists after agent response | — |

**Security Note:** [#6916](https://github.com/agentscope-ai/QwenPaw/issues/6916) — Plugins can silently create cron jobs and inject user-visible messages without approval (permission model gap).

## 6. Feature Requests & Roadmap Signals
| Request | Issue | Likelihood for v2.1.0/v2.2 |
|---------|-------|----------------------------|
| **KaTeX/LaTeX formula rendering** | [#5453](https://github.com/agentscope-ai/QwenPaw/issues/5453), [#4756](https://github.com/agentscope-ai/QwenPaw/issues/4756), [#6893](https://github.com/agentscope-ai/QwenPaw/issues/6893) | **High** — Partially delivered in #6911 (code block preview tabs); full inline rendering likely next |
| **Font size adjustment (Desktop)** | [#4154](https://github.com/agentscope-ai/QwenPaw/issues/4154) | **Medium** — Long-standing, low complexity |
| **Agent → Inbox message delivery** | [#6917](https://github.com/agentscope-ai/QwenPaw/issues/6917) | **Medium** — New architectural capability; fits "agent as proactive assistant" narrative |
| **Chat project directory isolation** | [#6900](https://github.com/agentscope-ai/QwenPaw/issues/6900) | **High** — Closed today; architectural cleanup aligned with v2.1 |
| **CopilotKit integration guide** | [#6882](https://github.com/agentscope-ai/QwenPaw/issues/6882) | **Low** — Community contribution territory |
| **QQ bot workflow noise reduction** | [#6897](https://github.com/agentscope-ai/QwenPaw/issues/6897) | **Medium** — Channel-specific optimization |
| **WeChat community** | [#6895](https://github.com/agentscope-ai/QwenPaw/issues/6895) | **Non-technical** — Community ops |

**Prediction:** v2.1.0 stable will ship with formula rendering (code blocks), MCP timeout fixes, desktop stability, and workspace isolation. Inbox delivery and font sizing likely v2.2.

## 7. User Feedback Summary
**Pain Points (from issues):**
- **MCP unreliability** — "Tools stop working after hours; must restart Docker" (#6732)
- **Desktop crashes** — "v2.0.1 crashes frequently on Windows pip install" (#6919)
- **Chinese IME breaks console** — "Message queue unusable during agent run" (#6885)
- **Formula rendering broken** — "LaTeX shows as raw text; Cherry Studio works" (#6893, #4756)
- **High CPU at idle** — "20% CPU from CSS animations doing nothing" (#6828)
- **Font too small** — "Eye strain on Desktop webview; no zoom" (#4154)
- **Timestamp timezone bug** — "History shifts +8h on re-render" (#6871)

**Positive Signals:**
- Active beta testing with rapid issue reporting
- Contributors submitting fixes (first-time contributors on #6873, #5869, #6660, #6817)
- Community asking for extensibility (CopilotKit, plugin market unification #6880)

**Use Cases Emerging:**
- QQ bot integration for project research (#6897)
- Multi-agent workflows with inter-agent messaging (#6918)
- Daily note/journal workflows with date grouping (#6883)
- Plugin marketplace for skills/apps (#6880, #6916 security concern)

## 8. Backlog Watch (Stale/Needs Attention)
| Item | Age | Why It Matters |
|------|-----|----------------|
| [#4154](https://github.com/agentscope-ai/QwenPaw/issues/4154) | ~3 months | Font size/zoom — basic accessibility; affects all Desktop users |
| [#4756](https://github.com/agentscope-ai/QwenPaw/issues/4756) | ~2 months | LaTeX rendering — core UX gap vs competitors |
| [#5453](https://github.com/agentscope-ai/QwenPaw/issues/5453) | ~2 months | KaTeX support — duplicate of above; community demand |
| [#5790](https://github.com/agentscope-ai/QwenPaw/issues/5790) | ~1 month | Loading spinner stuck — visible polish bug |
| [#6302](https://github.com/agentscope-ai/QwenPaw/pull/6302) | ~3 weeks | **Large PR**: Unify provider discovery, model metadata, routing, agent controls — architectural; needs review |
| [#6779](https://github.com/agentscope-ai/QwenPaw/pull/6779) | ~5 days | **Refactor**: Align Scroll/memory with AgentScope lifecycle — core stability |
| [#6830](https://github.com/agentscope-ai/QwenPaw/pull/6830) | ~4 days | **Fix**: Preserve auto-memory state across compression — data integrity |
| [#6817](https://github.com/agentscope-ai/QwenPaw/pull/6817) | ~4 days | **Feature**: AnySearch web search integration (MCP) — replaces Tavily |
| [#5869](https://github.com/agentscope-ai/QwenPaw/pull/5869) | ~1 month | **Feature**: Expose system commands in slash autocomplete — UX consistency |

---

**Project Health Assessment:** 🟡 **Caution — High velocity but critical regressions in beta**  
The team is shipping fast (beta.3 today, 25 PRs merged yesterday) and addressing top bugs. However, **three critical-severity bugs** (#6919, #6697, #6885) affect core desktop/console usability on Windows and Chinese IME. The MCP reliability issue (#6732) remains open despite timeout PR. Recommend: stabilize desktop/console/IPC before v2.1.0 stable; treat formula rendering and font sizing as v2.1.1 follow-ups.

*Data as of 2026-08-12 00:00 UTC. Links point to agentscope-ai/QwenPaw repository.*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-08-12

## 1. Today's Overview
ZeroClaw remains in a **high-velocity design and stabilization phase** with 100 total issue/PR updates in the last 24 hours. The project is dominated by **RFC-driven architecture work** (15+ open RFCs covering security, runtime, channels, SOP, authentication, and memory) rather than feature shipping. No releases have been cut recently, indicating the codebase is in a pre-release consolidation window targeting v0.9.0 milestones. PR activity is heavily skewed toward **bug fixes and hardening** (security boundaries, session handling, config migrations, daemon signals) with only 1 PR merged/closed yesterday — suggesting maintainers are gatekeeping merges pending RFC resolution. Overall health: **active but bottlenecked on design decisions**.

---

## 2. Releases
**No new releases** in the last 24 hours. The project appears to be accumulating changes for a v0.9.0 milestone (referenced in multiple RFCs: #7141, #7142, #8288, #9598, #9644).

---

## 3. Project Progress — Merged/Closed Today
Only **1 PR merged/closed** in the last 24h (per aggregate data). The closed issues reflect **RFI completion** and **bug resolution**:

| Item | Type | Summary | Link |
|------|------|---------|------|
| #2269 | Issue (closed) | RFI: Token consumption & cost management for productized workloads — community input gathered | [#2269](https://github.com/zeroclaw-labs/zeroclaw/issues/2269) |
| #7232 | Issue (closed) | RFC: Structured Observability Enhancement — superseded/refactored | [#7232](https://github.com/zeroclaw-labs/zeroclaw/issues/7232) |
| #9035 | Issue (closed) | Bug: Docker Compose gateway loopback-binding — fixed in daemon | [#9035](https://github.com/zeroclaw-labs/zeroclaw/issues/9035) |
| #9545 | Issue (closed) | CI: Gate rustdoc warnings in required PR CI — implemented | [#9545](https://github.com/zeroclaw-labs/zeroclaw/issues/9545) |
| #9768 | Issue (closed) | Bug: Daemon reload not on SIGUSR1; misleading warning — fixed | [#9768](https://github.com/zeroclaw-labs/zeroclaw/issues/9768) |

**Key advances**: Daemon signal handling corrected, Docker networking bug resolved, CI quality gate added, observability RFC closed (likely split into smaller work), cost-management RFI concluded.

---

## 4. Community Hot Topics — Most Active Discussions
Ranked by comment count (top 10). All are **open RFCs or trackers** requiring maintainer decisions.

| # | Title | Comments | 👍 | Labels | Link |
|---|-------|----------|----|--------|------|
| 1 | **RFC: Goal mode v1 — bounded foreground Matrix work** | 19 | 1 | `enhancement`, `agent`, `config`, `runtime`, `tool`, `priority:p2`, `type:rfc`, `risk:high` | [#8303](https://github.com/zeroclaw-labs/zeroclaw/issues/8303) |
| 2 | **RFC: ZeroClaw Chat Completions profile** | 18 | 0 | `gateway`, `runtime`, `domain:architecture`, `priority:p2`, `type:rfc`, `risk:high` | [#8603](https://github.com/zeroclaw-labs/zeroclaw/issues/8603) |
| 3 | **RFC: Per-execution confirmation tier for high-risk shell commands** | 17 | 0 | `enhancement`, `config`, `runtime`, `security`, `tool`, `priority:p1`, `tool:shell`, `type:rfc`, `risk:high` | [#7155](https://github.com/zeroclaw-labs/zeroclaw/issues/7155) |
| 4 | **RFC: Pluggable inbound authentication & canonical principals** | 14 | 0 | `enhancement`, `config`, `daemon`, `gateway`, `memory`, `runtime`, `security`, `domain:security`, `domain:architecture`, `priority:p1`, `type:rfc`, `risk:high` | [#7141](https://github.com/zeroclaw-labs/zeroclaw/issues/7141) |
| 5 | **Tracker: Maintainer decision queue for RFCs/design issues** | 13 | 0 | `domain:architecture`, `priority:p2`, `status:accepted`, `type:tracker`, `risk:medium` | [#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) |
| 6 | **RFC: Runtime-owned conversation sessions & transport surface adapters** | 10 | 0 | `enhancement`, `agent`, `channel`, `gateway`, `runtime`, `security`, `domain:architecture`, `priority:p2`, `type:rfc`, `risk:high`, `channel:acp` | [#9487](https://github.com/zeroclaw-labs/zeroclaw/issues/9487) |
| 7 | **RFC: Plugin-owned Kanban board for agent work** | 9 | 0 | `enhancement`, `agent`, `gateway`, `runtime`, `tool`, `priority:p2`, `type:rfc`, `risk:high`, `web` | [#8832](https://github.com/zeroclaw-labs/zeroclaw/issues/8832) |
| 8 | **RFC: Runtime-owned security decision pipeline & restrictive overlays** | 9 | 0 | `enhancement`, `config`, `runtime`, `security`, `tool`, `domain:security`, `domain:architecture`, `priority:p2`, `type:rfc`, `risk:high` | [#7142](https://github.com/zeroclaw-labs/zeroclaw/issues/7142) |
| 9 | **RFC: Streamline RFC scope, discussion, voting, assignment** | 8 | 0 | `enhancement`, `docs`, `core`, `priority:p1`, `type:rfc`, `status:accepted`, `risk:high` | [#9496](https://github.com/zeroclaw-labs/zeroclaw/issues/9496) |
| 10 | **RFC: Apply security policy/channel config updates without full daemon reload** | 8 | 0 | `enhancement`, `channel`, `config`, `daemon`, `gateway`, `security`, `priority:p3`, `type:rfc`, `risk:high` | [#7897](https://github.com/zeroclaw-labs/zeroclaw/issues/7897) |

**Underlying needs**:  
- **Interoperability**: Chat Completions profile (#8603) to support OpenAI-compatible clients (Open WebUI, LobeChat, Continue.dev, etc.)  
- **Safety & control**: Shell confirmation tiers (#7155), security decision pipeline (#7142), auth pluggability (#7141) — all `priority:p1`  
- **Agent durability**: Goal mode (#8303) for multi-turn bounded objectives; conversation session ownership (#9487)  
- **Process friction**: RFC process itself is too slow (#9496) — meta-RFC accepted  
- **Decision bottleneck**: Tracker #8692 shows 13+ items awaiting maintainer verdict

---

## 5. Bugs & Stability — Reported/Fixed Today
**New bugs opened (last 24h)** and **critical bugs with fix PRs**:

| Severity | Issue | Summary | Fix PR | Link |
|----------|-------|---------|--------|------|
| **S1 — Workflow blocked** | #9883 | Inbound WebP conversion decodes unbounded before shared image validator runs (DoS risk) | — | [#9883](https://github.com/zeroclaw-labs/zeroclaw/issues/9883) |
| **S2 — Degraded behavior** | #9872 | Bounded delegate resolves filesystem to delegator's workspace instead of own (sandbox escape) | — | [#9872](https://github.com/zeroclaw-labs/zeroclaw/issues/9872) |
| **S2** | #9719 (fixed by #9748) | Stale provider refreshes mutate replacement sessions | **#9748** (open) | [#9719](https://github.com/zeroclaw-labs/zeroclaw/issues/9719) / [#9748](https://github.com/zeroclaw-labs/zeroclaw/pull/9748) |
| **S1** | #9779 (fixed by #9885) | Daemon ignores documented `sops_dir` default | **#9885** (open) | [#9885](https://github.com/zeroclaw-labs/zeroclaw/pull/9885) |
| **S1** | #9619 (fixed by #9713) | History-trim notices lack token accounting | **#9713** (open) | [#9713](https://github.com/zeroclaw-labs/zeroclaw/pull/9713) |
| **S1** | #9035 (closed) | Docker Compose gateway loopback-bound behind published port | Fixed | [#9035](https://github.com/zeroclaw-labs/zeroclaw/issues/9035) |
| **S2** | #9768 (closed) | Daemon reload not on SIGUSR1; warning suggests killing signal | Fixed | [#9768](https://github.com/zeroclaw-labs/zeroclaw/issues/9768) |

**Critical open bugs without fix PRs**: #9883 (WebP DoS), #9872 (delegate sandbox escape) — both `priority:p1`, `domain:security`, opened Aug 9–10.

---

## 6. Feature Requests & Roadmap Signals
**High-signal RFCs likely to land in v0.9.0** (based on `status:accepted`, `priority:p1/p2`, milestone tags, and maintainer engagement):

| Feature | Issue | Status | Target | Likelihood |
|---------|-------|--------|--------|------------|
| Pluggable inbound auth & canonical principals | #7141 | Rev 8, `status:in-progress` | Identity & Access milestone | **High** — security foundation |
| Runtime-owned security decision pipeline | #7142 | Rev 6, `target: v0.9.0` | v0.9.0 security arch | **High** — referenced by SOP auth (#9598) |
| Per-execution shell confirmation tier | #7155 | Rev 3, `priority:p1` | Reconciled scope | **High** — user-facing safety |
| Goal mode v1 (bounded multi-turn) | #8303 | Active discussion | Matrix work | **Medium-High** — core agent UX |
| Chat Completions profile (OpenAI compat) | #8603 | Active discussion | Gateway expansion | **High** — ecosystem unlock |
| Runtime-owned conversation sessions | #9487 | Rev 2, ownership ratified | ACP/channel unification | **High** — architectural cleanup |
| SOP daemon control plane (5/5) | #8288 | Tracker, 13 capabilities | v0.9.0 SOP milestone | **High** — tracked epic |
| Retire Lucid memory connector | #9644 | `priority:p2` | v0.9.0 | **High** — upstream dead |
| Streamlined RFC process | #9496 | `status:accepted` | Process | **High** — meta-unblock |

**Deferred/uncertain**: Kanban plugin (#8832), LSP support (#5907), PowerShell native shell (#9182 — PR open but XL size), host-arch policy for emulated installs (#6653).

---

## 7. User Feedback Summary
**Pain points from issues/PR discussions** (inferred from bug reports, RFI, and RFC motivation):

| Area | Feedback Signal | Representative Items |
|------|----------------|----------------------|
| **Daemon reliability** | "Connection refused" on Docker; SIGUSR1 reload broken; config changes not applied without full reload | #9035, #9768, #7897 |
| **Security defaults** | Shell commands auto-execute; delegate sandbox escape; WebP DoS; HTTP egress too permissive | #7155, #9872, #9883, #9580 |
| **Interop gaps** | No OpenAI Chat Completions endpoint — blocks Open WebUI, LobeChat, Continue.dev, Aider, LangChain | #8603 |
| **Observability opacity** | Token usage invisible on history trim; no structured events correlated to agent/channel | #9619/#9713, #7232 |
| **Config friction** | `vision_model_provider` bare alias broken; `sops_dir` default ignored; Lucid connector abandoned | #9707, #9885, #9644 |
| **Cost anxiety** | RFI #2269: "Single high-end model prohibitively expensive for productized deployments" | #2269 (closed) |
| **RFC fatigue** | "Process slower than decisions it supports"; 7-day min discussion, unanimity requirements, manual voting | #9496 |

**Satisfaction signals**:  
- ✅ Docker networking bug fixed quickly (#9035)  
- ✅ Daemon signal bug acknowledged and fixed (#9768)  
- ✅ CI quality gate added per community ask (#9545)  
- ✅ RFI #2269 closed after gathering input — shows listening

---

## 8. Backlog Watch — Stalled High-Value Items Needing Maintainer Attention
**Open >30 days with `needs-maintainer-review` or `needs-author-action`, high priority/risk**:

| Item | Age | Priority | Risk | Blocked By | Link |
|------|-----|----------|------|------------|------|
| **RFC: Pluggable inbound auth** (#7141) | 70 days | P1 | High | Maintainer review on Rev 8 | [#7141](https://github.com/zeroclaw-labs/zeroclaw/issues/7141) |
| **RFC: Security decision pipeline** (#7142) | 70 days | P2 | High | Depends on #7141; Rev 6 | [#7142](https://github.com/zeroclaw-labs/zeroclaw/issues/7142) |
| **RFC: Shell confirmation tier** (#7155) | 70 days | P1 | High | Rev 3 scope confirmed; awaits verdict | [#7155](https://github.com/zeroclaw-labs/zeroclaw/issues/7155) |
| **RFC: Goal mode v1** (#8303) | 49 days | P2 | High | Broad scope; needs narrowing | [#8303](https://github.com/zeroclaw-labs/zeroclaw/issues/8303) |
| **RFC: Chat Completions profile** (#8603) | 41 days | P2 | High | Gateway team capacity | [#8603](https://github.com/zeroclaw-labs/zeroclaw/issues/8603) |
| **RFC: Runtime-owned sessions** (#9487) | 15 days | P2 | High | Ownership boundary ratified; needs decision | [#9487](https://github.com/zeroclaw-labs/zeroclaw/issues/9487) |
| **RFC: SOP capability permission contract** (#9598) | 12 days | P2 | High | `status:blocked` on #7142 | [#9598](https://github.com/zeroclaw-labs/zeroclaw/issues/9598) |
| **PR: Validate typed plugin instance config** (#9126) | 25 days | — | High | XL size; distinguished contributor; awaits review | [#9126](https://github.com/zeroclaw-labs/zeroclaw/pull/9126) |
| **PR: Harden built-in HTTP egress** (#9580) | 12 days | P1 | High | Security-critical; distinguished contributor | [#

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/DenisZheng/agents-radar).*