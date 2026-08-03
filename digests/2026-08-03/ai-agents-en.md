# OpenClaw Ecosystem Digest 2026-08-03

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-08-03 02:09 UTC

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

# Cross-Project Comparison Report: Personal AI Assistant / Agent Open-Source Ecosystem (2026-08-03)

---

## 1. Ecosystem Overview

The personal AI assistant/agent open-source landscape is **fragmented but actively evolving** across 14 tracked projects. Three distinct tiers emerge: **high-velocity core frameworks** (Hermes Agent, ZeroClaw, IronClaw, NanoBot) driving architectural innovation; **specialized channel/integration layers** (NanoClaw, CoPaw, PicoClaw, Moltis) focusing on connectivity and MCP ecosystems; and **maintenance-mode or dormant projects** (LobsterAI, NullClaw, TinyClaw, ZeptoClaw). No single project dominates — each targets different deployment models (desktop, gateway, CLI, multi-platform) and user personas (power users, enterprise operators, developers). The ecosystem is converging on **MCP as the interoperability substrate**, **multi-session context management** as a core UX requirement, and **provider-agnostic resilience** as a non-negotiable.

---

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Release Status | Health Score* |
|---------|--------------|-----------|----------------|---------------|
| **Hermes Agent** | 50 | 50 | None today | 🟢 Strong |
| **ZeroClaw** | 50 | 50 | **v0.8.4 shipped** (262 commits, 49 contributors) | 🟢 Strong |
| **IronClaw** | 7 | 26 | Pending (#5598, 31 days open) | 🟢 Strong |
| **NanoBot** | 0 | 9 | None today | 🟡 Caution |
| **NanoClaw** | 1 | 10 | None today | 🟡 Caution |
| **PicoClaw** | 3 | 9 | None today (latest v0.3.1) | 🟡 Caution |
| **CoPaw** | 2 | 6 | None today (latest 2.0.1) | 🟢 Strong |
| **Moltis** | 0 | 1 | None today | ⚪ Quiet |
| **LobsterAI** | 3 (stale) | 6 (stale) | None today | 🔴 Maintenance |
| **OpenClaw** | — | — | — | ❓ Unknown |
| **NullClaw** | 0 | 0 | — | ⚫ Dormant |
| **TinyClaw** | 0 | 0 | — | ⚫ Dormant |
| **ZeptoClaw** | 0 | 0 | — | ⚫ Dormant |

*Health Score: 🟢 = high velocity + active hardening; 🟡 = active but critical bugs open; 🔴 = stale backlog; ⚪ = low activity; ⚫ = no activity; ❓ = data unavailable.

---

## 3. OpenClaw's Position

**Data gap**: OpenClaw's digest generation failed — no activity, release, or community data available for comparison.

**Inferred positioning** (from project name and ecosystem context):
- **Likely role**: Core reference implementation ("openclaw/openclaw") — possibly the upstream or canonical CLI/agent runtime that forks (NanoClaw, PicoClaw, IronClaw, ZeroClaw) extend or specialize.
- **Technical approach differences**: If it follows the "Claw" naming pattern, it may share the **port-inversion / contract-driven architecture** seen in IronClaw/ZeroClaw, but without the heavy RFC governance overhead.
- **Community size**: Unknown. Peer forks show 49 contributors (ZeroClaw v0.8.4), 26 PRs/day (IronClaw), 50 PRs/day (Hermes) — OpenClaw likely sits upstream with smaller, core-maintainer-driven commits.
- **Risk**: Without visibility, it cannot be assessed for adoption readiness or dependency stability.

---

## 4. Shared Technical Focus Areas

| Requirement | Projects | Specific Needs |
|-------------|----------|----------------|
| **MCP Ecosystem Integration** | NanoClaw (#3092), Moltis (#1183), IronClaw (#7024), ZeroClaw (implied) | Remote Streamable HTTP MCP servers; managed Git repository bundles; OAuth auto-discovery (RFC 9728); MCP-as-package distribution |
| **Multi-Session Context & Cross-Platform Continuity** | Hermes Agent (#4335, #53374), NanoBot (#5211), ZeroClaw (#9487) | Unified conversation history across CLI/Telegram/Desktop/Discord; `@`-mentioning other chats; session resume after sleep/wake; runtime-owned session/transport adapters |
| **Provider-Agnostic Resilience & Fallback** | NanoBot (#5214, #5216), PicoClaw (#3298), IronClaw (providers), Hermes Agent (#77217) | Automatic fallback from OpenAI Responses → Chat Completions; Gemini Flash payload fixes; AI Router preset; DeepSeek caching exclusions |
| **Gateway / Daemon Stability** | NanoBot (#5215), Hermes Agent (#77184, #77127), NanoClaw (#3177), ZeroClaw (#8578) | Deterministic resource cleanup on shutdown; WebSocket reconnect races; SQLite lock contention on Docker/VirtioFS; process termination on startup failure |
| **Security Boundaries & Secret Redaction** | Hermes Agent (#77165, #77164, #77162), ZeroClaw (#9410, #9536, #7142), IronClaw (#7016) | Applied-secret redaction in tool results/egress; ambient proxy SSRF protection; ACP workspace isolation; command audit logging defaults; runtime-owned authz pipeline |
| **Performance at Scale (Large Payloads)** | CoPaw (#6635, #6633, #6637), NanoBot (#5194), Hermes Agent (#57153) | Chat history pagination + GZip; skill list endpoint payload reduction; large tool output truncation; session prompt deduplication (138 MB → optimized) |
| **Windows Desktop Parity** | Hermes Agent (#53374, #73381, #76897), LobsterAI (#1217), NanoClaw (Signal #2626) | Sleep/wake session resume; update pipeline (`uv pip install` + file locking); auto-launch; `launchctl` kickstart reliability |

---

## 5. Differentiation Analysis

| Project | Primary Focus | Target Users | Technical Architecture |
|---------|---------------|--------------|------------------------|
| **Hermes Agent** | Multi-platform daily driver (CLI, Desktop, Telegram, Discord, Feishu) | Power users, multi-device workflows | Monorepo with platform-specific adapters; WebSocket session bus; Pythia integration for automation |
| **ZeroClaw** | Enterprise-grade agent runtime with governance | Operators, platform teams, security-conscious orgs | RFC-driven architecture; port-inversion contracts; OIDC/pluggable auth; staged telemetry; Docker-first |
| **IronClaw** | Hardened agent infrastructure (delivery, sandbox, extensions) | Framework builders, high-reliability deployments | Wave-based refactoring; `ironclaw_operator`/`product` split; `extension_manager` extraction; 90% coverage floor |
| **NanoBot** | LLM provider compatibility & plugin extensibility | Developers, researchers, multi-provider users | Provider-agnostic gateway; `nanobot plugins` via `uv`/`pip`; WebUI session indexing; Codex/OpenAI Responses specialization |
| **NanoClaw** | Channel integrations (SMS, Voice, Teams, Signal) + MCP | Enterprise communicators, omnichannel bots | Channel adapter pattern; skill/wizard system; Dial (SMS+AI voice) as flagship; remote MCP HTTP |
| **PicoClaw** | Lightweight agent core (Telegram-focused) | Embedded/IoT, Telegram bot operators | Minimal deps; agent loop reliability; shell guard allow-lists; provider presets (AI Router) |
| **CoPaw** | Desktop UX polish & network resilience | Desktop-first users, slow-network environments | Floating quick-input (global hotkey); pagination/compression by default; Prism highlighting guards |
| **Moltis** | MCP server marketplace & distribution | MCP server authors, agent developers | Git-backed bundles; vault-integrated credentials; CLI/RPC/Web UI parity; DB migrations |
| **LobsterAI** | Enterprise IM gateway (DingTalk, Telegram, Popo) | Chinese enterprise IM automation | Scheduled tasks; platform-specific credential handling; gateway stability on Windows |
| **Others** | Dormant / unknown | — | — |

---

## 6. Community Momentum & Maturity

| Tier | Projects | Characteristics |
|------|----------|-----------------|
| **Rapidly Iterating (Architecture Phase)** | **Hermes Agent, ZeroClaw, IronClaw** | 50+ PRs/issues/day; RFC-heavy; breaking changes pending; high contributor counts; pre-v1.0 consolidation |
| **Feature-Complete, Hardening** | **NanoBot, CoPaw, NanoClaw** | Steady PR flow (6–10/day); critical bugs have fixes in review; patch-release candidates visible; low new-issue volume |
| **Focused Maintenance** | **PicoClaw, Moltis** | 1–3 issues/PRs/day; single substantial feature or bug cluster; maintainer bandwidth constrained |
| **Stalled / Maintenance Mode** | **LobsterAI** | All activity stale (>4 months); gateway instability unresolved; performance PRs unmerged |
| **Dormant** | **NullClaw, TinyClaw, ZeptoClaw, OpenClaw (data missing)** | Zero 24h activity; no recent releases |

**Key insight**: The ecosystem is **bifurcating** — three projects building foundational runtime primitives (auth, session ownership, delivery guarantees) while others consume those patterns for specific channels or UX layers.

---

## 7. Trend Signals for AI Agent Developers

| Trend | Evidence | Strategic Value |
|-------|----------|-----------------|
| **MCP as Universal Plugin Layer** | 5 projects actively building MCP client/server/tooling (NanoClaw, Moltis, IronClaw, ZeroClaw, Hermes Agent) | **High**: Invest in MCP-first skill design; expect remote HTTP + OAuth to become standard |
| **Session = First-Class Portable Object** | Hermes, NanoBot, ZeroClaw all building cross-platform session resume/mention/search | **High**: Design agents around durable, migratable session state; avoid platform-coupled context |
| **Provider Drift Requires Runtime Adapters** | NanoBot, PicoClaw, Hermes all shipping provider-specific fixes weekly | **High**: Abstract provider calls behind adapter interfaces; build fallback chains (Responses → Chat Completions) |
| **Gateway/Daemon Reliability > New Features** | Critical bugs in shutdown, SQLite locks, WS reconnects across 4 projects | **Critical**: Harden process lifecycle, file locking, and connection management before scaling |
| **Secret Redaction Must Be Systematic** | Hermes (3 egress paths), ZeroClaw (ACP workspace, audit logging), IronClaw (proxy SSRF) | **Critical**: Implement centralized secret scanning/redaction at runtime boundary, not per-channel |
| **Windows Is a First-Class Target, Not Afterthought** | Hermes, LobsterAI, NanoClaw all fixing Windows-specific daemon/desktop issues | **Medium**: Test on Windows CI; handle `launchctl`/`uv`/VirtioFS quirks in installers |
| **Governance Scales With Contributor Count** | ZeroClaw (49 contributors) → RFC voting formalization; IronClaw → Wave-based refactoring | **Medium**: Adopt lightweight RFC/decision queues early; avoid "maintainer bottleneck" at 20+ contributors |
| **Performance Defaults Must Assume Slow Networks** | CoPaw's MB-payload timeouts → pagination + GZip as default | **Medium**: Ship compression/pagination/truncation on by default; don't wait for user complaints |

---

## Summary for Decision-Makers

- **For framework adoption**: **ZeroClaw** (enterprise governance), **IronClaw** (delivery/sandbox hardening), **Hermes Agent** (multi-platform UX) are the most mature active runtimes.
- **For channel integration**: **NanoClaw** (voice/SMS/Teams), **Moltis** (MCP distribution), **PicoClaw** (Telegram lightweight).
- **For desktop UX**: **CoPaw** (network-resilient, hotkey-driven) leads; Hermes Desktop catching up.
- **Avoid**: LobsterAI (stalled), NullClaw/TinyClaw/ZeptoClaw (dormant), OpenClaw (no visibility).
- **Invest in**: MCP remote HTTP + OAuth, cross-platform session portability, provider fallback chains, Windows daemon reliability, systematic secret redaction — these are the **convergent requirements** across all active projects.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-08-03

---

## 1. Today's Overview

NanoBot shows **healthy maintenance velocity** with 9 pull requests updated in the last 24 hours (7 open, 2 closed/merged), but **no new issues or releases**. Activity centers on provider compatibility fixes, gateway stability, WebUI performance, and a notable cross-session search feature. Two PRs were closed today—one a performance optimization for WebUI session loading (#5194), the other a long-standing Codex duplicate-reasoning fix (#4021). The project remains in active development with a focus on reliability across LLM providers and plugin infrastructure.

---

## 2. Releases

**No new releases** published today. The latest version remains whatever is on `main`/`latest` branch.

---

## 3. Project Progress — Merged / Closed PRs Today

| PR | Title | Type | Impact |
|----|-------|------|--------|
| [#5194](https://github.com/HKUDS/nanobot/pull/5194) | `perf(webui): accelerate JSONL session list and thread loading` | Performance | Reuses activity directory & workspace scope per `/api/sessions` request; caches workspace-scope snapshot in rebuildable session-list index. Reduces latency for users with many sessions. |
| [#4021](https://github.com/HKUDS/nanobot/pull/4021) | `fix(codex): dedup reasoning items before send, retry on duplicate-item 400` | Bug fix (AI-assisted) | Eliminates `400 Duplicate item` errors from OpenAI Responses API when Codex re-sends reasoning items. Adds dedup pass before send + retry logic. Closes #3633. |

Both PRs are labeled **priority: p2** and include tests.

---

## 4. Community Hot Topics — Most Active PRs (by recency & scope)

| PR | Area | Signals |
|----|------|---------|
| [#5211](https://github.com/HKUDS/nanobot/pull/5211) `feat(session): add cross-session search and mentions` | Core UX / Sessions | **High-impact feature**: enables `@`-mentioning other chats, `search_sessions`/`read_session` tools. Addresses multi-conversation workflows—strong signal for power users & agents. |
| [#5215](https://github.com/HKUDS/nanobot/pull/5215) `fix(gateway): close agent resources deterministically on stop` | Gateway / Stability | **P1 bug**: asyncio teardown noise & stall on shutdown when exec/MCP subprocesses still running. Critical for production gateway deployments. |
| [#5214](https://github.com/HKUDS/nanobot/pull/5214) `fix(providers): fall back to chat completions on serde body rejections` | Provider reliability | **P1 bug**: OpenAI Responses API deserialization failures (string vs sequence) now trigger automatic fallback to Chat Completions. Improves resilience across model endpoints. |
| [#5216](https://github.com/HKUDS/nanobot/pull/5216) `fix(image): send Gemini Flash hints via generationConfig.imageConfig` | Provider / Images | **P2 bug**: Gemini Flash image models (`gemini-3.1-flash-lite-image`, `gemini-2.5-flash-image`) rejected requests with 400 when aspect-ratio/size hints sent incorrectly. Fixes payload placement. |
| [#5213](https://github.com/HKUDS/nanobot/pull/5213) `fix(plugins): use uv when pip is unavailable` | Plugin infra | **P2 bug**: `nanobot plugins enable` fails in `uv tool` environments lacking `pip`. Falls back to `uv pip` automatically. |

**Underlying needs**: Provider API drift (OpenAI Responses, Gemini Flash), graceful degradation, plugin manager portability, and multi-session knowledge reuse.

---

## 5. Bugs & Stability — Today’s Reports (Ranked by Severity)

| Severity | PR / Issue | Summary | Fix Status |
|----------|------------|---------|------------|
| **P1** | [#5215](https://github.com/HKUDS/nanobot/pull/5215) | Gateway shutdown stalls + asyncio `__del__` errors when exec/MCP subprocesses still alive | **Open PR** — deterministic resource close on stop |
| **P1** | [#5214](https://github.com/HKUDS/nanobot/pull/5214) | OpenAI Responses API returns serde deserialization error (`string` vs `sequence`), breaking conversations | **Open PR** — fallback to Chat Completions |
| **P2** | [#5216](https://github.com/HKUDS/nanobot/pull/5216) | Gemini Flash image models reject requests with 400 due to wrong hint placement | **Open PR** — move hints to `generationConfig.imageConfig` |
| **P2** | [#5213](https://github.com/HKUDS/nanobot/pull/5213) | Plugin enable fails in `uv`-only environments (no `pip`) | **Open PR** — detect missing pip, use `uv pip` |
| **Regression** | [#5152](https://github.com/HKUDS/nanobot/pull/5152) | Subagent partial completions not marked; model infers unfinished results | **Open PR** — add `subagent_remaining_count` metadata |

No new crashes or data-loss issues reported today.

---

## 6. Feature Requests & Roadmap Signals

| Signal | Source | Likelihood for Next Release |
|--------|--------|-----------------------------|
| **Cross-session search & `@` mentions** | [#5211](https://github.com/HKUDS/nanobot/pull/5211) (feat, 2 days old, active) | **High** — well-scoped, includes WebUI integration, tests, mention collision handling |
| **MiniMax music generation guidance** | [#5212](https://github.com/HKUDS/nanobot/pull/5212) (docs + tool contract) | **Medium** — provider-specific, adds discoverability for existing music stack |
| **Subagent partial-result signaling** | [#5152](https://github.com/HKUDS/nanobot/pull/5152) (regression fix) | **High** — fixes regression, includes test |
| **WebUI session-list caching** | [#5194](https://github.com/HKUDS/nanobot/pull/5194) (merged) | **Done** — performance baseline improved |

**Prediction**: Cross-session search (#5211) and subagent fix (#5152) are the strongest candidates for the next minor release. Gateway stability (#5215) and provider fallbacks (#5214) may ship as patch fixes.

---

## 7. User Feedback Summary

No new GitHub Issues today, so direct user feedback is absent from the tracker. However, PR authorship and labels reveal **implicit pain points**:

- **Provider churn**: Multiple P1/P2 provider fixes in one day (OpenAI Responses, Gemini Flash) → users hitting API mismatches in production.
- **Gateway ops**: Shutdown noise/stalls → operators running long-lived gateway processes with MCP/exec subprocesses.
- **Plugin portability**: `uv tool` installs without `pip` break `nanobot plugins enable` → affects users on modern Python packaging workflows.
- **Multi-session workflows**: Cross-session search PR (#5211) suggests users want to reference prior conversations fluidly.

Satisfaction signals: Quick turnaround on regressions (#5152, #4021), performance investment (#5194).

---

## 8. Backlog Watch — Stale / Needing Attention

| Item | Age | Status | Why It Matters |
|------|-----|--------|----------------|
| [#4021](https://github.com/HKUDS/nanobot/pull/4021) | ~2 months (created 2026-05-27) | **Closed today** | Long-lived Codex duplicate-reasoning fix finally merged—good cleanup. |
| *No open Issues/PRs > 30 days with recent activity in this dataset* | | | The 9 PRs updated today are all ≤ 5 days old. Backlog appears current. |

**Maintainer attention suggested**: Review the cluster of P1 provider/gateway PRs (#5215, #5214) together—they touch overlapping shutdown/retry paths. Cross-session search (#5211) is the largest surface-area change; ensure WebUI mention UX is validated.

---

*Digest generated from GitHub API data (issues, PRs, releases) for HKUDS/nanobot as of 2026-08-03. Links point to live GitHub resources.*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-08-03

## 1. Today's Overview
Hermes Agent shows **very high daily activity** with 50 issues and 50 PRs updated in the last 24 hours (46 open issues, 41 open PRs). The project is in active development across multiple fronts: session management stability, cross-platform continuity, security hardening, provider compatibility, and desktop UX polish. No new release was published today. The issue/PR velocity suggests a project rapidly iterating toward a more robust multi-platform agent experience, with particular focus on session state integrity, Windows/Desktop reliability, and security boundaries.

---

## 2. Releases
**No new releases today.** The latest version remains unspecified in the data. Watch for a release bundling the recent session-state fixes, Windows Desktop stability patches, and security redaction work.

---

## 3. Project Progress — Merged/Closed PRs Today (9)

| PR | Type | Summary |
|----|------|---------|
| [#74056](https://github.com/NousResearch/hermes-agent/pull/74056) | bug/desktop | Fixed checkbox state glyphs (checked/indeterminate rendering) |
| [#68121](https://github.com/NousResearch/hermes-agent/pull/68121) | bug/feishu | Restored native markdown table rendering via post+md pipeline |
| [#77240](https://github.com/NousResearch/hermes-agent/pull/77240) | fix/auxiliary | Kept ZAI Coding Plan routing to `/api/coding/paas/v4` |
| [#76661](https://github.com/NousResearch/hermes-agent/pull/76661) | feature/gateway | **Closed** — P2P federation heartbeat for multi-device task relay (may be reworked) |

*Remaining 5 closed PRs not detailed in top-20 list; likely minor fixes/docs.*

**Key advancement:** Desktop UI polish, Feishu integration maturity, and ZAI provider routing correction landed. The federation heartbeat PR was closed — possibly superseded by the newer root-action approval relay work.

---

## 4. Community Hot Topics — Most Active Issues/PRs

| Item | Comments | 👍 | Core Need |
|------|----------|----|-----------|
| [#4335](https://github.com/NousResearch/hermes-agent/issues/4335) Cross-platform session context sharing (CLI ↔ Telegram) | 10 | 3 | **Unified conversation history** across platforms — users expect seamless context when switching between CLI, Telegram, Desktop, Discord |
| [#53374](https://github.com/NousResearch/hermes-agent/issues/53374) Desktop GUI creates new session after Windows sleep (WebSocket disconnect) | 7 | 1 | **Session resilience** on Windows — sleep/wake should resume, not reset, the session |
| [#70647](https://github.com/NousResearch/hermes-agent/issues/70647) `-z/--oneshot` ignores piped stdin despite docs | 6 | 0 | **CLI scripting reliability** — documented pipe support is broken |
| [#76269](https://github.com/NousResearch/hermes-agent/issues/76269) Add “Restart current backend” action to Hermes Desktop | 5 | 0 | **Operational control** — need safe backend restart without full app quit/reopen |
| [#69161](https://github.com/NousResearch/hermes-agent/issues/69161) Collapse thinking/reasoning blocks by default (Desktop) | 5 | 2 | **Readability** — streaming reasoning blocks cause scroll jank; users want them collapsed initially |
| [#77161](https://github.com/NousResearch/hermes-agent/issues/77161) Durable signed root-action approval relay (Pythia integration) | 2 | 0 | **Automated recovery** — authenticated, restart-surviving approval flow for system updates |

**Underlying theme:** Users treat Hermes as a **daily-driver multi-platform assistant** and hit friction at platform boundaries (session loss, context isolation, Windows quirks). The Pythia-related issue (#77161) signals growing **infrastructure/automation** use cases.

---

## 5. Bugs & Stability — Reported Today (Ranked by Severity)

| Severity | Issue | Description | Fix PR? |
|----------|-------|-------------|---------|
| **P0** | [#77217](https://github.com/NousResearch/hermes-agent/issues/77217) DeepSeek caching on OpenCode breaks `deepseek-v4-flash` (HTTP 400) | Caching commit 6b6435a sends Anthropic-style content blocks to OpenCode Zen, which expects strings. **Breaks a model path in production.** | ✅ [#77243](https://github.com/NousResearch/hermes-agent/pull/77243) — excludes DeepSeek from OpenCode caching |
| **P1** | [#77184](https://github.com/NousResearch/hermes-agent/issues/77184) Gateway restart drain waits on requesting turn → 180s force-kill | Active turn (often the requester's own) blocks graceful shutdown, causing mid-flight interruption. | ❌ |
| **P2** | [#53374](https://github.com/NousResearch/hermes-agent/issues/53374) Windows sleep → WebSocket disconnect → new session (context lost) | Desktop GUI on Windows fails to resume session after sleep/wake cycle. | ❌ |
| **P2** | [#70647](https://github.com/NousResearch/hermes-agent/issues/70647) `-z/--oneshot` silently discards piped stdin | Documented scripting feature non-functional. | ❌ |
| **P2** | [#67851](https://github.com/NousResearch/hermes-agent/issues/67851) DOCX text-box text extracted twice | `read_file` duplicates nested-paragraph content. | ❌ |
| **P2** | [#73381](https://github.com/NousResearch/hermes-agent/issues/73381) Windows Desktop update fails: venv missing `cryptography` + file locking → `uv pip install` exit 2 | Update pipeline broken on Windows. | ❌ |
| **P2** | [#76393](https://github.com/NousResearch/hermes-agent/issues/76393) Env snapshot pins wrong `HERMES_HOME` in multi-profile gateway | Profile isolation broken — terminal tool leaks env across profiles. | ❌ |
| **P2** | [#77127](https://github.com/NousResearch/hermes-agent/issues/77127) WS disconnect/reconnect TOCTOU race can orphan/destroy resumed session | Race between teardown and `session.resume` warm-reuse. | ✅ [#77129](https://github.com/NousResearch/hermes-agent/pull/77129) — fix on branch, not yet merged to main (see [#77192](https://github.com/NousResearch/hermes-agent/issues/77192)) |
| **P2** | [#64780](https://github.com/NousResearch/hermes-agent/issues/64780) Model-switch guard doesn't await async conversation load | `RuntimeWarning`: coroutine never awaited. | ❌ |
| **P2** | [#76605](https://github.com/NousResearch/hermes-agent/issues/76605) Background `delegate_task` can lose results under retention prune or persist failure | Subagent completion silently dropped. | ❌ |
| **P2** | [#77165](https://github.com/NousResearch/hermes-agent/issues/77165) Applied-secrets snapshot not wired into provider-egress redaction | Secrets leak in tool results, sanitized context, terminal output. | ❌ |
| **P2** | [#77164](https://github.com/NousResearch/hermes-agent/issues/77164) Child-process env scrub uses name-shape heuristic; non-credential secrets leak | Only `*_PASSWORD`, `*_API_KEY` etc. scrubbed; applied secrets with other names pass through. | ❌ |
| **P2** | [#77162](https://github.com/NousResearch/hermes-agent/issues/77162) Exact-value applied-secret redaction missing on tool-result → provider egress | Tool results sent to model API without secret scrubbing. | ❌ |
| **P2** | [#77233](https://github.com/NousResearch/hermes-agent/pull/77233) Lifecycle guard crashes on binary executable paths (null byte) | `cron/lifecycle_guard.py` fails on `.venv/bin/python` style paths. | ✅ PR open |
| **P3** | [#56439](https://github.com/NousResearch/hermes-agent/issues/56439) `/resume` overwrites `sessions.source`, losing original platform provenance | Provenance metadata lost on cross-platform resume. | ❌ |
| **P3** | [#74741](https://github.com/NousResearch/hermes-agent/issues/74741) Desktop rewrites URLs inside code blocks as `@url` references | Visual and semantic corruption of code blocks. | ❌ |
| **P3** | [#76919](https://github.com/NousResearch/hermes-agent/issues/76919) Pin/unpin reverted by stale session-list page after PATCH ack | Race between UI optimistics and server list refresh. | ❌ |
| **P3** | [#57153](https://github.com/NousResearch/hermes-agent/issues/57153) `sessions.system_prompt` stores full prompt per session → 138 MB duplication in 3 weeks | Storage bloat from verbatim prompt copies. | ❌ |

**Stability signal:** 14 P2+ bugs active today, 3 with fix PRs open. The WS disconnect race (#77127) has a fix but it's **not on main** — a process gap. Windows Desktop issues (#53374, #73381) remain open and user-impacting.

---

## 6. Feature Requests & Roadmap Signals

| Request | Issue/PR | Signal Strength | Likelihood for Next Version |
|---------|----------|-----------------|-----------------------------|
| Cross-platform session context sharing (unified history) | [#4335](https://github.com/NousResearch/hermes-agent/issues/4335), [#49730](https://github.com/NousResearch/hermes-agent/issues/49730), [#62780](https://github.com/NousResearch/hermes-agent/issues/62780), [#44846](https://github.com/NousResearch/hermes-agent/issues/44846) | **Very High** — 4 issues, 10+ comments, 3👍 | **High** — core architectural need; session store unification underway |
| Windows "Launch at login" for Desktop app | [#76897](https://github.com/NousResearch/hermes-agent/issues/76897) | Medium — new, 4 comments | **Medium** — gateway has it; Desktop needs parity |
| Collapse reasoning blocks by default (Desktop) | [#69161](https://github.com/NousResearch/hermes-agent/issues/69161) | Medium — 5 comments, 2👍 | **High** — UX polish, low risk |
| Safe "Restart backend" action (Desktop) | [#76269](https://github.com/NousResearch/hermes-agent/issues/76269) | Medium — 5 comments | **Medium** — operational need |
| OpenRouter curated list: more Gemini models (BYOK) | [#76732](https://github.com/NousResearch/hermes-agent/issues/76732) | Low — 2 comments | **High** — catalog update, easy win |
| Apple Notes skill: replace `memo` CLI with native `osascript` | [#77235](https://github.com/NousResearch/hermes-agent/pull/77235) | Low — resubmission | **Medium** — removes external dep |
| AIDE² self-evolution (Experience Ledger, Eval Harness, Delegation Evo) | [#77236](https://github.com/NousResearch/hermes-agent/pull/77236) | **Speculative** — research PR | **Low** — exploratory, needs design review |
| Durable signed root-action approval relay (Pythia) | [#77161](https://github.com/NousResearch/hermes-agent/issues/77161), [#77163](https://github.com/NousResearch/hermes-agent/pull/77163) | Niche — automation/infra | **Medium** — targeted, security-reviewed |
| Native cross-platform approval delegation (Feishu/WeCom) | [#47863](https://github.com/NousResearch/hermes-agent/pull/47863) | Medium — long-open PR | **Medium** — enterprise/security feature |

**Roadmap prediction:** Next version will likely ship **session-store unification groundwork**, **Windows Desktop stability fixes** (sleep/resume, update), **reasoning-block collapse**, and **OpenRouter model catalog refresh**. The AIDE² PR is a wildcard — may spin off as separate effort.

---

## 7. User Feedback Summary — Pain Points & Use Cases

| Pain Point | Evidence | User Impact |
|------------|----------|-------------|
| **Session context loss across platforms** | 4 issues (#4335, #49730, #62780, #44846) + #56439 (provenance loss) | High — users manually re-explain context; breaks "single assistant" mental model |
| **Windows Desktop fragility** | #53374 (sleep→new session), #73381 (update fails), #76897 (no auto-launch) | High — Windows users get degraded experience vs. Linux/macOS |
| **CLI scripting broken** | #70647 (`-z` ignores stdin) | Medium — automation/workflow users blocked |
| **Reasoning block UX** | #69161 (scroll jank, default expanded) | Medium — daily Desktop users annoyed by visual noise |
| **Secret leakage** | #77165, #77164, #77162 (3 security issues same day) | **Critical for enterprise** — applied secrets not redacted in 3 egress paths |
| **Background task reliability** | #76605 (delegate_task loses results) | Medium — power users relying on delegation |
| **Model-switch warnings broken** | #64780 (async not awaited) | Low — warning noise, not functional break |

**Positive signals:** Users actively file detailed bugs with repro steps, engage on feature design (comments on #4335, #69161), and contribute PRs for niche needs (Apple Notes, ZAI routing, Feishu tables). The project has **deeply invested users** who treat it as infrastructure.

---

## 8. Backlog Watch — Long-Unanswered / Needs Maintainer Attention

| Item | Age / Status | Why It Matters |
|------|--------------|----------------|
| [#47863](https://github.com/NousResearch/hermes-agent/pull/47863) Native cross-platform approval delegation (Feishu/WeCom) | Open since 2026-06-17; 50+ days | Enterprise security feature; replaces monkey-patch; blocked on review/design |
| [#54643](https://github.com/NousResearch/hermes-agent/pull/54643) ZAI routing fix (`/api/anthropic` → `/api/coding/paas/v4`) | Open since 2026-06-29 | Provider compatibility; 429 errors for MoA/aux tasks; simple fix, unmerged |
| [#751

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-08-03

## 1. Today's Overview
PicoClaw shows **healthy but focused maintenance activity** with 3 active issues and 9 PRs updated in the last 24 hours. No new releases were cut. The project is addressing three distinct fronts: a critical agent loop bug (#3311/#3312) that silently stalls user turns, a shell command allow-list regression (#3313/#3314), and incremental improvements around provider presets, i18n, and message splitting. Two PRs were closed today (#3310, #3313), and three remain in "stale" status from late July, suggesting maintainer bandwidth is directed at recent regressions over older feature work.

## 2. Releases
**No new releases** in the last 24 hours. The latest published version remains v0.3.1 (commit `2cf030d` per issue #3294).

## 3. Project Progress (Merged/Closed PRs Today)
| PR | Status | Summary |
|----|--------|---------|
| [#3313](https://github.com/sipeed/picoclaw/pull/3313) | **Closed** | Duplicate of #3314 — fix for `customAllowPatterns` not working because default deny patterns took precedence in `guardCommand`. |
| [#3310](https://github.com/sipeed/picoclaw/pull/3310) | **Closed** | Automated PR ("picoclanker did this") — likely a dependency update or CI housekeeping; no detailed description provided. |

**Net progress**: The shell-execution allow-list regression now has a canonical fix in open PR [#3314](https://github.com/sipeed/picoclaw/pull/3314) awaiting review/merge. The automated PR was closed without merge.

## 4. Community Hot Topics
| Item | Activity | Core Need |
|------|----------|-----------|
| [Issue #3311](https://github.com/sipeed/picoclaw/issues/3311) + [PR #3312](https://github.com/sipeed/picoclaw/pull/3312) | **High** — Critical bug reported 2026-08-02, fix PR opened same day | **Agent reliability**: Tool failures (e.g., `git` without creds, shell guard blocks) cause silent loops up to `max_tool_iterations`; user never receives a response. Fix stops the turn early on repeated identical failures. |
| [Issue #3298](https://github.com/sipeed/picoclaw/issues/3298) | **Medium** — 1 comment, maintainer-affiliated request | **Provider DX**: Add AI Router as a named OpenAI-compatible preset so users don’t need to manually configure `api_base`. |
| [Issue #3294](https://github.com/sipeed/picoclaw/issues/3294) | **Low** — 1 comment, stale since 07-25 | **CLI consistency**: `/list models` shows only current model/provider instead of all configured models — naming/description mismatch. |
| [PR #3297](https://github.com/sipeed/picoclaw/pull/3297) | **Low** — Stale security hardening PR from 07-26 | **Security posture**: Harden remote prompt/exec boundaries, normalize envelopes, default remote exec to disabled, migrate to config schema v4. |

**Underlying signal**: Users are hitting **silent failure modes** (tool loops, allow-list regressions) that erode trust more than missing features. The AI Router request reflects growing multi-provider workflows.

## 5. Bugs & Stability (Ranked by Severity)
| Severity | Issue / PR | Description | Fix PR Exists? |
|----------|------------|-------------|----------------|
| **Critical** | [#3311](https://github.com/sipeed/picoclaw/issues/3311) | Agent spins silently for minutes on repeated identical tool failure (e.g., `git` auth error, shell guard block); user gets no answer. | ✅ [#3312](https://github.com/sipeed/picoclaw/pull/3312) — stops turn early on repeated identical failure. |
| **High** | [#3313](https://github.com/sipeed/picoclaw/pull/3313) / [#3314](https://github.com/sipeed/picoclaw/pull/3314) | `customAllowPatterns` ignored: default deny patterns always win in `guardCommand`; commands like `git push` blocked despite explicit allow. | ✅ [#3314](https://github.com/sipeed/picoclaw/pull/3314) (open, canonical). |
| **Medium** | [#3295](https://github.com/sipeed/picoclaw/pull/3295) | `SplitMessage` hangs when opening fenced-code info string exceeds `maxLen`; fallback to bounded raw split added. | ✅ PR open with regression test. |
| **Low** | [#3294](https://github.com/sipeed/picoclaw/issues/3294) | `/list models` returns only current model, not all configured models — UX mismatch. | ❌ No fix PR yet. |

## 6. Feature Requests & Roadmap Signals
| Request | Source | Likelihood for Next Version |
|---------|--------|-----------------------------|
| **AI Router named provider preset** | [#3298](https://github.com/sipeed/picoclaw/issues/3298) (maintainer-affiliated) | **High** — Low-effort config addition; aligns with multi-provider trend. |
| **Native Exa web search provider** | [#3299](https://github.com/sipeed/picoclaw/pull/3299) | **High** — Complete PR with config, auth, highlights support; fills `tools.web` gap. |
| **Traditional Chinese (zh-TW) locale** | [#3261](https://github.com/sipeed/picoclaw/pull/3261) | **Medium** — PR closed stale; may need rebase or maintainer champion. |
| **Czech code-wrap labels i18n** | [#3296](https://github.com/sipeed/picoclaw/pull/3296) | **Low** — Niche localization, stale since 07-26. |
| **Remote exec hardening & config schema v4** | [#3297](https://github.com/sipeed/picoclaw/pull/3297) | **Medium-High** — Security-focused, but large scope; may wait for v0.4. |

## 7. User Feedback Summary
- **Pain point**: "Agent goes silent for minutes then gives up" ([#3311](https://github.com/sipeed/picoclaw/issues/3311)) — production Telegram users experience complete unresponsiveness when tools fail deterministically.
- **Pain point**: "Explicitly allowed shell commands still blocked" ([#3314](https://github.com/sipeed/picoclaw/pull/3314)) — `customAllowPatterns` feels broken; users expect allow-list to override defaults.
- **Expectation mismatch**: `/list models` should list *all* models per its name/description ([#3294](https://github.com/sipeed/picoclaw/issues/3294)).
- **Workflow need**: First-class AI Router preset to avoid manual `api_base` config ([#3298](https://github.com/sipeed/picoclaw/issues/3298)).
- **Positive signal**: Community contributors shipping fixes (Exa provider, SplitMessage hardening, Czech i18n) — project accepts external PRs.

## 8. Backlog Watch (Stale / Needs Maintainer Attention)
| Item | Age | Why It Matters |
|------|-----|----------------|
| [PR #3297](https://github.com/sipeed/picoclaw/pull/3297) | 8 days | Security hardening: remote exec boundaries, config schema v4 migration. Large diff; needs security review. |
| [PR #3299](https://github.com/sipeed/picoclaw/pull/3299) | 8 days | Native Exa provider — feature-complete, adds web search alternative. Ready for merge if tests pass. |
| [Issue #3294](https://github.com/sipeed/picoclaw/issues/3294) | 9 days | Simple CLI fix (`/list models`), but no PR yet. Good "good first issue". |
| [PR #3296](https://github.com/sipeed/picoclaw/pull/3296) | 8 days | Czech i18n completion — low impact but trivial to merge if maintainer approves. |
| [PR #3261](https://github.com/sipeed/picoclaw/pull/3261) | 18 days | zh-TW locale — closed stale; may need re-open or maintainer decision on i18n process. |

---

**Health Indicator**: 🟡 **Caution** — Critical bugs have fixes in flight (#3312, #3314), but stale security/feature PRs (#3297, #3299) suggest review bandwidth is constrained. Prioritize merging the two critical fixes and triaging the Exa provider PR for the next patch release.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-08-03

## 1. Today's Overview
NanoClaw shows **high contributor activity** with 10 PRs updated in the last 24 hours (7 open, 3 closed), but only 1 new issue filed. The project is in active feature development — particularly around channel integrations (Dial/SMS, Teams, Signal) and MCP server support — while simultaneously addressing a critical infrastructure bug (#3177) affecting Docker deployments on macOS/Linux. No releases were cut today. The PR velocity suggests a healthy, multi-contributor workflow with core-team review engagement on most open PRs.

## 2. Releases
**No new releases** published in the last 24 hours.

## 3. Project Progress — Merged/Closed PRs Today
| PR | Type | Summary | Impact |
|----|------|---------|--------|
| [#3176](https://github.com/nanocoai/nanoclaw/pull/3176) | Fix (core-team) | **Retry post-publish readback** in release pipeline | Improves release reliability; closed same day |
| [#2626](https://github.com/nanocoai/nanoclaw/pull/2626) | Fix | **Signal: replace silent `restartService` failure with explicit error** (closes #2583) | Eliminates silent no-op on `launchctl kickstart`; improves setup wizard feedback |
| [#301](https://github.com/nanocoai/nanoclaw/pull/301) | Feature (Skill, Blocked) | **Enhance `add-telegram` skill**: Markdown rendering, file downloads (≤10MB), Linux/Docker guidance | Long-standing PR (open since Feb 2026) finally closed — likely superseded or deferred |

**Net progress**: Two operational fixes landed (release pipeline, Signal channel), while a stale feature PR was closed after 5+ months.

## 4. Community Hot Topics
| Item | Activity | Core Need |
|------|----------|-----------|
| [#3177](https://github.com/nanocoai/nanoclaw/issues/3177) **Issue: Docker cross-mount DB lock contention** | Created 2026-08-02, 0 comments, 0 👍 | **Critical infrastructure**: SQLite DELETE journal mode fails on VirtioFS (macOS/Linux Docker), causing 29k+ readonly errors & delivery failures. Root cause identified; fix likely requires WAL mode or file-locking strategy change. |
| [#3050](https://github.com/nanocoai/nanoclaw/pull/3050) **PR: Add Dial to channel picker + wizard/skills** | Updated 2026-08-02, open since 2026-07-14 | **Channel expansion**: Dial (SMS + AI voice calls) integration — feature skill with wizard support. |
| [#3041](https://github.com/nanocoai/nanoclaw/pull/3041) **PR: Add Dial channel adapter (SMS + AI voice calls)** | Updated 2026-08-02, open since 2026-07-14 | **Core channel adapter** for Dial; companion to #3050. |
| [#3092](https://github.com/nanocoai/nanoclaw/pull/3092) **PR: Support remote Streamable HTTP MCP servers** | Updated 2026-08-02, open since 2026-07-19, core-team label | **MCP ecosystem**: Enables connecting to remote MCP servers via Streamable HTTP — key for agent interoperability. |
| [#3090](https://github.com/nanocoai/nanoclaw/pull/3090) **PR: Prepend all top-level context Markdown** | Updated 2026-08-02, open since 2026-07-19, core-team label | **Prompt engineering**: Improves context injection for templates/skills. |

**Analysis**: The Docker DB lock issue (#3177) is the only *new* community-reported problem but is severe (data corruption risk, delivery failures). The PR cluster around Dial (#3041, #3050) and MCP (#3092) signals strategic investment in **voice/SMS channels** and **remote agent connectivity**.

## 5. Bugs & Stability — Ranked by Severity
| Severity | Issue/PR | Status | Fix PR? |
|----------|----------|--------|---------|
| **Critical** | [#3177](https://github.com/nanocoai/nanoclaw/issues/3177) — SQLite lock contention on Docker mounts (VirtioFS) → 29k+ readonly errors, delivery failures | **Open** (filed 2026-08-02) | No fix PR yet; root cause documented (DELETE journal mode + cross-mount) |
| **High** | [#3175](https://github.com/nanocoai/nanoclaw/pull/3175) — Command-gate denials written to `outbound.db` (second writer on container-owned DB) → corruption risk per single-writer invariant | **Open PR** (created 2026-08-02) | **Yes** — #3175 routes denials through delivery adapter instead |
| **Medium** | [#2625](https://github.com/nanocoai/nanoclaw/pull/2625) — Teams: `supportsFiles: false` hardcoded → disables upload UI & drops `send_file` | **Open PR** (since 2026-05-27) | **Yes** — #2625 sets `supportsFiles: true` in manifest |
| **Medium** | [#2626](https://github.com/nanocoai/nanoclaw/pull/2626) — Signal silent `restartService` failure | **Closed** (merged 2026-08-02) | Fixed in #2626 |

**Stability note**: Two critical data-integrity bugs surfaced today (#3177, #3175); one has a fix PR, the other needs immediate maintainer attention.

## 6. Feature Requests & Roadmap Signals
| Signal | Evidence | Likelihood for Next Version |
|--------|----------|----------------------------|
| **Dial (SMS + AI voice) channel** | Two coordinated PRs (#3041 adapter, #3050 wizard/skill) updated today, both by core contributor | **High** — near-complete, follows skill guidelines |
| **Remote Streamable HTTP MCP servers** | PR #3092 (core-team label, open since Jul 19) | **High** — strategic for agent interop, active review |
| **Template context prepending** | PR #3090 (core-team label) | **Medium** — UX improvement for skills |
| **Teams file upload support** | PR #2625 (open since May, closes #2461) | **Medium** — long-standing, simple fix |
| **Telegram skill enhancements** | PR #301 closed (blocked, 5+ months) | **Low** — deferred or superseded |

**Prediction**: Next release will likely include **Dial channel**, **MCP Streamable HTTP**, and **Teams file support** — all have active PRs with core-team visibility.

## 7. User Feedback Summary
- **Pain point (critical)**: Docker deployments on macOS/Linux are **unreliable for production** due to SQLite lock contention on VirtioFS mounts (#3177). Users face 29k+ errors and message delivery failures.
- **Pain point (operational)**: Signal channel setup fails silently when `launchctl` state is stale (#2583 → #2626 fixed today).
- **Pain point (Teams)**: File uploads silently dropped in personal chats due to hardcoded manifest flag (#2461 → #2625 pending).
- **Desire**: Voice/SMS via Dial, remote MCP server connectivity, richer template context — all reflected in active PRs.
- **No direct user comments** on today's items (all 0 comments), suggesting issues/PRs are contributor-driven or pre-user-report.

## 8. Backlog Watch — Stale & High-Value Items Needing Attention
| Item | Age | Why It Matters | Recommended Action |
|------|-----|----------------|-------------------|
| [#2625](https://github.com/nanocoai/nanoclaw/pull/2625) **Teams: `supportsFiles: true`** | 68 days (since 2026-05-27) | Blocks file uploads in Teams personal chats; simple one-line fix + SKILL.md sync | **Merge** — low risk, high user value |
| [#3092](https://github.com/nanocoai/nanoclaw/pull/3092) **Remote Streamable HTTP MCP** | 15 days (since 2026-07-19) | Core strategic feature for agent ecosystem; core-team labeled | **Prioritize review** — unblocks MCP interop |
| [#3090](https://github.com/nanocoai/nanoclaw/pull/3090) **Template context prepending** | 15 days (since 2026-07-19) | Improves skill/template UX; core-team labeled | **Review** — incremental but broad impact |
| [#3041](https://github.com/nanocoai/nanoclaw/pull/3041) / [#3050](https://github.com/nanocoai/nanoclaw/pull/3050) **Dial channel** | 20 days (since 2026-07-14) | Major new channel (SMS + AI voice); two-PR feature | **Coordinate review** — merge together |
| [#3177](https://github.com/nanocoai/nanoclaw/issues/3177) **Docker DB lock contention** | 1 day (new) | **Critical production blocker** for macOS/Linux Docker users | **Urgent triage** — assign to storage/infra lead; consider WAL mode or advisory locking |

---

**Project Health Indicator**: 🟡 **Caution** — High feature velocity but a **critical infrastructure regression** (#3177) emerged today with no fix yet. Core-team engagement on PRs is strong; Docker stability must be resolved before next release.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-08-03

## 1. Today's Overview
IronClaw shows **high engineering velocity** with 26 PRs and 7 issues updated in 24 hours. The project is in a **deep refactoring phase** (Wave 2 port-inversion architecture work) with multiple large PRs being consolidated (#7018 superseding #7000, #7003, #7004, #7005). QA activity is intensive — 5 new QA issues filed by `theredspoon` covering delivery recovery, SSRF protection, proxy handling, and coordinator concurrency. No releases today; the last release PR (#5598) remains open since July 3 with breaking changes in `ironclaw_common` and `ironclaw_skills`.

## 2. Releases
**No new releases today.** The pending release PR #5598 (open since 2026-07-03) proposes:
- `ironclaw_common`: 0.4.2 → 0.5.0 (⚠ API breaking: `failure` crate impl added, type now implements `Fail`)
- `ironclaw_safety`: 0.2.2 → 0.2.3 (API compatible)
- `ironclaw_skills`: 0.3.0 → 0.4.0 (⚠ API breaking)

*Migration note:* Consumers of `ironclaw_common` and `ironclaw_skills` will need updates. The release appears blocked on the Wave 2 refactoring completion.

## 3. Project Progress — Merged/Closed PRs Today (9 total)

| PR | Title | Scope | Status |
|----|-------|-------|--------|
| [#7018](https://github.com/nearai/ironclaw/pull/7018) | refactor(contracts): consolidate Wave 2 port-inversion stack (WS2.2, WS2.4, WS5) | Architecture, XL | **Closed** (supersedes 4 PRs) |
| [#7000](https://github.com/nearai/ironclaw/pull/7000) | refactor(contracts): resolve ProductSurfaceFailure linchpin (WS2.2) | Architecture, XL | Closed |
| [#7003](https://github.com/nearai/ironclaw/pull/7003) | refactor(extensions): split ironclaw_extension_manager out of extension_host (WS2.4) | Architecture, XL | Closed |
| [#7004](https://github.com/nearai/ironclaw/pull/7004) | refactor(contracts): invert ironclaw_operator's product-facing ports (WS5) | Architecture, XL | Closed |
| [#7005](https://github.com/nearai/ironclaw/pull/7005) | refactor(conversations,attachments): fix naming trap & widen attachments (WS5) | Architecture, XL | Closed |
| [#7013](https://github.com/nearai/ironclaw/pull/7013) | ci: restore 90% changed-line coverage floor | CI, M | Closed |
| [#6952](https://github.com/nearai/ironclaw/pull/6952) | ci: scope Reborn PR tests by affected area | CI, XL | Closed |
| [#7007](https://github.com/nearai/ironclaw/pull/7007) | Alert live-canary Slack on merge queue failures | CI, M | Closed |
| [#7015](https://github.com/nearai/ironclaw/issues/7015) | [bug] UI bug on Staking page | UI, P2 | **Closed** (user-reported, minimal repro) |

**Key advancement:** Wave 2 port-inversion (decoupling `ironclaw_operator` from `ironclaw_product`, splitting `extension_manager`, resolving `ProductSurfaceFailure` leakage) is effectively complete via consolidation PR #7018. CI improvements: test scoping, coverage floor restoration, merge-queue alerting.

## 4. Community Hot Topics

### Most Active QA Investigation Thread (0 comments but high technical depth)
**Author:** `theredspoon` (5 QA issues filed in 2 days)
- [#7031](https://github.com/nearai/ironclaw/issues/7031) — Failed lazy delivery recovery not retried within coordinator lifetime
- [#7030](https://github.com/nearai/ironclaw/issues/7030) — Host-mediated egress ignoring ambient proxy vars in diagnostics
- [#7017](https://github.com/nearai/ironclaw/issues/7017) — Interrupted-delivery recovery overwriting concurrent Delivered status
- [#7016](https://github.com/nearai/ironclaw/issues/7016) — Ambient proxy env vars bypass DNS-rebinding protection
- [#7025](https://github.com/nearai/ironclaw/issues/7025) — Concurrent coordinators sending same durable delivery attempt

**Underlying need:** Hardening the **outbound delivery subsystem** — exactly-once semantics, SSRF protection, proxy isolation, and coordinator concurrency safety. These are production-critical for agent network egress.

### Architecture Refactoring Discussion
- [#7018](https://github.com/nearai/ironclaw/pull/7018) — Consolidation of 4 stacked XL PRs (owner-instructed to avoid rebase cascades). Signals **maintainer preference for trunk-based integration** over long-lived stacks.

### Performance/Design Proposal
- [#7012](https://github.com/nearai/ironclaw/issues/7012) — `ilblackdragon`: Time awareness without prompt-cache churn (append-only rollover context). Follow-up to PR #7001/#6985. **Roadmap signal:** Context management optimization for agent loops.

## 5. Bugs & Stability — Ranked by Severity

| Severity | Issue | Description | Fix PR |
|----------|-------|-------------|--------|
| **Critical** | [#7025](https://github.com/nearai/ironclaw/issues/7025) | Concurrent coordinators can both send same durable delivery attempt — violates exactly-once | [#7029](https://github.com/nearai/ironclaw/pull/7029) (open) |
| **Critical** | [#7017](https://github.com/nearai/ironclaw/issues/7017) | Interrupted-delivery recovery overwrites concurrent `Delivered` status — data corruption risk | [#7028](https://github.com/nearai/ironclaw/pull/7028) (open) |
| **High** | [#7016](https://github.com/nearai/ironclaw/issues/7016) | Ambient proxy vars bypass DNS-rebinding protection in `ReqwestNetworkTransport` — SSRF vector | [#7027](https://github.com/nearai/ironclaw/pull/7027) (open) |
| **High** | [#7030](https://github.com/nearai/ironclaw/issues/7030) | Host-mediated egress ignores ambient proxy vars in operator diagnostics — observability gap | None yet |
| **Medium** | [#7031](https://github.com/nearai/ironclaw/issues/7031) | Failed lazy delivery recovery not retried within coordinator lifetime — liveness issue | None yet |
| **Low** | [#7015](https://github.com/nearai/ironclaw/issues/7015) | UI bug on Staking page (user-reported, no repro) | **Closed** (insufficient info) |

**Pattern:** All critical/high bugs are in **outbound delivery / network egress** — the `ironclaw_reborn_cli` / coordinator stack. Fix PRs #7027, #7028, #7029 are open and authored by `theredspoon` (same as reporter), suggesting **rapid fix cycle**.

## 6. Feature Requests & Roadmap Signals

| Signal | Source | Prediction |
|--------|--------|------------|
| **Time-aware context without cache churn** | [#7012](https://github.com/nearai/ironclaw/issues/7012) (`ilblackdragon`) | Likely next: append-only context rollover with duration evidence; reduces token waste in long-running agents |
| **MCP OAuth auto-discovery (RFC 9728)** | [#7024](https://github.com/nearai/ironclaw/pull/7024) (`henrypark133`) | In progress: `Auto` hosted-MCP registration via protected-resource metadata; unblocks enterprise MCP integrations |
| **Wave 2 port-inversion complete** | [#7018](https://github.com/nearai/ironclaw/pull/7018) | Enables: cleaner crate boundaries, `ironclaw_operator` independent of `ironclaw_product`, testable ports |
| **CI test scoping by affected area** | [#6952](https://github.com/nearai/ironclaw/pull/6952) | Faster PR validation; transitive consumer closure + replay tests |

**Next version likely includes:** MCP auth hardening, delivery subsystem fixes (#7027-7029), context management improvements, and the Wave 2 architecture landing.

## 7. User Feedback Summary

| Feedback | Source | Sentiment | Pain Point |
|----------|--------|-----------|------------|
| UI bug on Staking page | [#7015](https://github.com/nearai/ironclaw/issues/7015) (external user `sergeiest`) | Negative | WebUI has visible defects; report lacked repro steps — **observability gap for frontend issues** |
| QA issues (5 in 2 days) | `theredspoon` (internal QA) | Constructive | **Delivery reliability, SSRF protection, proxy isolation** — not user-facing but critical for production agents |
| Dependabot noise | 4 dependency PRs (#7020-7023) | Neutral | Routine maintenance; `actions/setup-node` 4→7 major bump needs validation |

**No direct end-user feature requests** in last 24h — project is in **hardening/refactoring mode**, not feature expansion.

## 8. Backlog Watch — Needing Maintainer Attention

| Item | Age | Risk | Why It Matters |
|------|-----|------|----------------|
| [#5598](https://github.com/nearai/ironclaw/pull/5598) | 31 days | **Release blocked** | Breaking changes pending; Wave 2 refactoring likely prerequisite |
| [#5981](https://github.com/nearai/ironclaw/pull/5981) | 23 days | **Large feature** | Queued-message steering (turn-boundary races fixed); XL scope, forward-ported |
| [#7024](https://github.com/nearai/ironclaw/pull/7024) | 1 day | **MCP auth** | RFC 9728 compliance; `henrypark133` (core) — needs review for enterprise MCP |
| [#7029](https://github.com/nearai/ironclaw/pull/7029) | 0 days | **Critical fix** | Restores durable delivery CAS ownership; fixes #7025 coordinator race |
| [#7028](https://github.com/nearai/ironclaw/pull/7028) | 0 days | **Critical fix** | Preserves terminal status during recovery; fixes #7017 status overwrite |
| [#7027](https://github.com/nearai/ironclaw/pull/7027) | 0 days | **Security fix** | Disables ambient proxy discovery; fixes #7016 SSRF bypass |
| [#7019](https://github.com/nearai/ironclaw/pull/7019) | 1 day | **CI perf** | Shares coverage compilation in Reborn buckets; reduces CI time |

**Priority order for maintainers:**
1. **Merge #7027, #7028, #7029** — critical delivery/SSRF fixes (author = reporter, ready)
2. **Review #7024** — MCP auth unblocker
3. **Land #7018** — Wave 2 consolidation (already closed, but may need follow-through)
4. **Unblock #5598** — release after Wave 2 + fixes
5. **Review #5981** — queued-message steering (large, tested, long wait)

---

**Project Health Score: 🟢 Strong** — High velocity, active hardening, clear architecture direction, rapid bug-to-fix cycle. Main risk: **release backlog** (#5598) accumulating breaking changes without a cut.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-08-03

## 1. Today's Overview
LobsterAI shows **low active development velocity** over the last 24 hours. All 9 updated items (3 issues, 6 PRs) carry the `stale` label and were last touched on 2026-08-02, indicating they have been sitting without maintainer action for months. No new releases were published. The backlog consists of two closed dependency bumps, two closed feature/bug issues, and four open performance/bug-fix PRs that have not progressed. Overall project health appears **maintenance-mode** with a growing stale queue.

## 2. Releases
No new releases in the last 24 hours.

## 3. Project Progress (Merged/Closed PRs)
| PR | Title | Status | Impact |
|----|-------|--------|--------|
| [#1285](https://github.com/netease-youdao/LobsterAI/pull/1285) | chore(deps-dev): bump concurrently 8.2.2 → 9.2.1 | **Closed** | Dev dependency update; minor CI/build improvement. |
| [#1286](https://github.com/netease-youdao/LobsterAI/pull/1286) | chore(deps-dev): bump tailwindcss 3.4.19 → 4.2.2 | **Closed** | Major Tailwind v4 upgrade; may require config migration but PR closed without merge—likely superseded or blocked. |

*No feature PRs were merged today. The two closed PRs are routine dependency maintenance.*

## 4. Community Hot Topics
| Item | Type | Comments | Reactions | Core Need |
|------|------|----------|-----------|-----------|
| [#1289](https://github.com/netease-youdao/LobsterAI/issues/1289) | Issue (feat) | 2 | 0 | **Readability for long AI-generated code blocks** — users request auto-collapse/expand for 15–200 line snippets to avoid endless scrolling. |
| [#1287](https://github.com/netease-youdao/LobsterAI/issues/1287) | Issue (bug) | 2 | 0 | **IM bot config validation** — connectivity test incorrectly passes when all secrets are dummy values (`"1"`), giving false confidence. |
| [#1217](https://github.com/netease-youdao/LobsterAI/issues/1217) | Issue (bug) | 1 | 0 | **Gateway stability** — sporadic gateway restarts on Windows 10 (3–5×/day) disrupting sessions; logs attached but root cause unknown. |

*All three issues are stale (≥4 months old). The code-block collapse request (#1289) has the clearest UX impact and a defined scope.*

## 5. Bugs & Stability
| Severity | Issue/PR | Summary | Fix PR? |
|----------|----------|---------|---------|
| **High** | [#1217](https://github.com/netease-youdao/LobsterAI/issues/1217) | Gateway randomly restarts multiple times daily on Win10 v2026.3.26; session disruption. | No |
| **Medium** | [#1287](https://github.com/netease-youdao/LobsterAI/issues/1287) | IM bot connectivity test validates successfully with placeholder secrets (`"1"`), masking misconfiguration. | No |
| **Medium** | [#1215](https://github.com/netease-youdao/LobsterAI/pull/1215) | `setConfig` skips chat-handler rebuild when platform-specific credentials (DingTalk/Telegram) are saved, leaving stale `systemPrompt`/`skill` configs. | **Yes** (#1215 open) |
| **Low** | [#1218](https://github.com/netease-youdao/LobsterAI/pull/1218) | Scheduled-task list sorts by random UUID v4, causing new tasks to appear at unpredictable positions. | **Yes** (#1218 open) |

*Gateway restarts (#1217) are the only user-visible stability regression with attached logs; no fix PR exists yet.*

## 6. Feature Requests & Roadmap Signals
| Request | Source | Likelihood for Next Version |
|---------|--------|-----------------------------|
| **Auto-collapse/expand for long code blocks** (15–200 lines) | [#1289](https://github.com/netease-youdao/LobsterAI/issues/1289) | **High** — well-scoped UI improvement, aligns with existing `CODE_BLOCK_LINE_LIMIT` logic. |
| **Deterministic task-list sorting** (by creation time / next run) | [#1218](https://github.com/netease-youdao/LobsterAI/pull/1218) | **Medium** — PR ready but stale; solves a clear UX annoyance. |
| **IM bot config validation hardening** | [#1287](https://github.com/netease-youdao/LobsterAI/issues/1287) | **Medium** — security/usability fix; low effort but no PR yet. |

*Performance PRs (#1219, #1220) address React re-renders and N+1 DB queries—likely to land if maintainers triage the stale queue.*

## 7. User Feedback Summary
- **Pain points**:  
  - Gateway instability on Windows (daily restarts, session loss) — *high frustration, logs provided*.  
  - False-positive IM bot tests erode trust in configuration.  
  - Long code blocks hijack chat view, forcing excessive scrolling.  
- **Use cases**:  
  - Enterprise IM integrations (DingTalk, Telegram, Popo) with frequent credential rotation.  
  - Heavy code-generation workflows (dozens of lines per response).  
  - Scheduled-task automation where task ordering matters.  
- **Sentiment**: Mixed — users report concrete bugs with reproduction details, but lack of maintainer response on stale items signals dissatisfaction with support responsiveness.

## 8. Backlog Watch (Stale & Need Maintainer Attention)
| Item | Age | Why It Matters |
|------|-----|----------------|
| [#1217](https://github.com/netease-youdao/LobsterAI/issues/1217) | ~4 months | **Critical stability bug** with logs; no triage or fix attempt. |
| [#1215](https://github.com/netease-youdao/LobsterAI/pull/1215) | ~4 months | Fixes config-propagation bug affecting all IM platforms; ready for review. |
| [#1219](https://github.com/netease-youdao/LobsterAI/pull/1219) | ~4 months | Eliminates wasteful re-renders during streaming — direct perf win. |
| [#1220](https://github.com/netease-youdao/LobsterAI/pull/1220) | ~4 months | Removes N+1 queries in chat list/search — scalable architecture fix. |
| [#1218](https://github.com/netease-youdao/LobsterAI/pull/1218) | ~4 months | UX fix for task management; PR complete but unmerged. |

> **Recommendation**: Prioritize triage of the gateway restart (#1217) and the four open performance/bug-fix PRs (#1215, #1218–1220) to unblock users and reduce technical debt. The code-block collapse (#1289) is a quick-win feature for the next minor release.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-08-03

## 1. Today's Overview
Moltis shows minimal daily activity with **zero issue updates** and **one active pull request** in the last 24 hours. The sole PR (#1183) introduces a significant feature: managed Git repository bundles for MCP (Model Context Protocol) server discovery, installation, and lifecycle management. No releases, bug reports, or community discussions were recorded today, indicating a quiet maintenance period focused on a single substantial feature branch.

## 2. Releases
**No new releases** published today. The project’s latest version remains whatever was shipped prior to this date.

## 3. Project Progress
| PR | Status | Summary |
|----|--------|---------|
| [#1183](https://github.com/moltis-org/moltis/pull/1183) | **Open** | **feat(mcp): add managed repository bundles** — Adds Git-backed MCP server bundles with support for HTTPS credentials, SSH transport, vault integration, and full CLI/RPC/web UI workflows. Includes database migrations. Authored by `penso`, created 2026-08-02, last updated today. No reviews or merges yet. |

*No PRs were merged or closed today.*

## 4. Community Hot Topics
Only one item has recent activity:

- **PR #1183** — The sole moving item. Zero comments/reactions recorded so far.  
  **Underlying need**: Users want a **turnkey way to discover, install, update, and remove MCP servers from Git repositories** (public or private) without manual configuration. This aligns with the broader trend of treating MCP servers as versioned, distributable packages.

## 5. Bugs & Stability
**No bug reports, crashes, or regressions** filed or updated in the last 24 hours.  
*No fix PRs exist for today’s window.*

## 6. Feature Requests & Roadmap Signals
The only explicit signal is **PR #1183** itself, which implements:
- Git repository bundles as a first-class MCP distribution format
- Credential management (HTTPS tokens, SSH keys) with vault integration
- End-to-end workflows across CLI, RPC, and web UI
- Database migrations for bundle metadata

**Prediction**: If this PR merges cleanly, the next release will likely center on **MCP server marketplace/distribution capabilities**, possibly followed by:
- Bundle signing/verification
- Private registry support
- Dependency resolution between MCP servers

## 7. User Feedback Summary
**No direct user feedback** (issues, comments, reactions) captured in the last 24 hours.  
The absence of discussion on PR #1183 suggests either:
- The feature is still in early review (maintainer/internal preview)
- Community engagement is low on GitHub (discussion may happen elsewhere, e.g., Discord, forums)

## 8. Backlog Watch
No long-unanswered issues or stale PRs surfaced in today’s data slice.  
*Recommendation*: Monitor PR #1183 for review latency—large feature PRs with migrations and multi-surface (CLI/RPC/UI) changes often benefit from early maintainer triage to avoid merge conflicts and design drift.

---

**Data source**: GitHub API snapshot for `moltis-org/moltis` covering 2026-08-02 → 2026-08-03.  
**Links**: [PR #1183](https://github.com/moltis-org/moltis/pull/1183) · [Issues](https://github.com/moltis-org/moltis/issues) · [Releases](https://github.com/moltis-org/moltis/releases)

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-08-03

## 1. Today's Overview
CoPaw shows active maintenance with **6 open PRs updated today** but **no merged work**, indicating a development phase focused on review and iteration rather than shipping. Two critical performance bugs (#6635, #6633) around MB-level uncompressed API payloads timing out on slow networks dominate the issue tracker, each with a corresponding fix PR (#6636, #6634) already opened. The project is responding quickly to regression reports — both issues were filed yesterday and have fix PRs within 24 hours. No releases have been cut recently, suggesting these fixes will batch into the next version.

## 2. Releases
**No new releases** in the last 24 hours. The latest version remains 2.0.1 (per issue reports).

## 3. Project Progress
**No PRs merged or closed today.** All 6 active PRs remain in review:
- **#6607** — Global-hotkey floating quick-input window (desktop) — feature for #6568
- **#6068** — Scroll history migration: preserve canonical session IDs (non-destructive)
- **#6637** — Large tool output UI freeze fix: skip Prism highlighting >100KB/1000 lines, show head/tail with indicators
- **#6561** — MCP tool names: ensure exposed names start with a letter (fixes Kimi/Moonshot rejection)
- **#6636** — Chat history pagination + GZip compression (fixes #6635 chat history portion)
- **#6634** — Exclude full skill content from list endpoints (fixes #6633)

## 4. Community Hot Topics
| Item | Activity | Core Need |
|------|----------|-----------|
| [#6635](https://github.com/agentscope-ai/QwenPaw/issues/6635) — Console pages fail on slow networks (skills + chat history, MB-level uncompressed vs 30s timeout) | 1 comment, filed 2026-08-02 | **Reliability on poor connections** — users cannot load core console views when API payloads exceed frontend timeout; signals need for pagination, compression, and lazy loading as default |
| [#6633](https://github.com/agentscope-ai/QwenPaw/issues/6633) — Skills/Skill Pool pages fail on slow networks (full skill content embedded) | 1 comment, filed 2026-08-02 | Same root cause as #6635; skill list endpoints return full `SKILL.md` content unnecessarily for list views |

**Underlying theme**: The product assumes fast networks and small payloads. Real-world usage (large skill libraries, long chat histories) breaks this assumption. Fixes in #6634 and #6636 address this by **removing full content from list endpoints** and **adding pagination + GZip**.

## 5. Bugs & Stability
| Severity | Issue | Status | Fix PR |
|----------|-------|--------|--------|
| **High** | [#6635](https://github.com/agentscope-ai/QwenPaw/issues/6635) — Console pages (skills list + chat history) fail to load on slow networks; MB-level uncompressed responses vs fixed 30s timeout | Open | [#6636](https://github.com/agentscope-ai/QwenPaw/pull/6636) (chat history), [#6634](https://github.com/agentscope-ai/QwenPaw/pull/6634) (skills) |
| **High** | [#6633](https://github.com/agentscope-ai/QwenPaw/issues/6633) — Skills/Skill Pool pages fail on slow networks; `GET /api/skills` embeds full skill content | Open | [#6634](https://github.com/agentscope-ai/QwenPaw/pull/6634) |
| **Medium** | [#6589](https://github.com/agentscope-ai/QwenPaw/issues/6589) — Large tool output freezes UI (Prism syntax highlighting on huge payloads) | Open | [#6637](https://github.com/agentscope-ai/QwenPaw/pull/6637) — skips highlighting >100KB/1000 lines, truncates with head/tail indicators |
| **Medium** | [#6561](https://github.com/agentscope-ai/QwenPaw/pull/6561) — MCP tool names starting with non-letter (e.g., `-MCP__get_consensus_forecast`) rejected by strict providers (Kimi/Moonshot) | Open (PR) | [#6561](https://github.com/agentscope-ai/QwenPaw/pull/6561) — ensures exposed names start with letter |

**No crashes or regressions reported today beyond the two timeout bugs.**

## 6. Feature Requests & Roadmap Signals
| Signal | Source | Likelihood for Next Version |
|--------|--------|-----------------------------|
| **Global-hotkey floating quick-input window** (Doubao-style) | [#6607](https://github.com/agentscope-ai/QwenPaw/pull/6607) — implements [#6568](https://github.com/agentscope-ai/QwenPaw/issues/6568) | **High** — PR active, desktop UX parity with competitors |
| **Chat history pagination + GZip** | [#6636](https://github.com/agentscope-ai/QwenPaw/pull/6636) — fixes critical timeout | **High** — blocks core workflow on slow networks |
| **Skill list endpoints: exclude full content** | [#6634](https://github.com/agentscope-ai/QwenPaw/pull/6634) — fixes critical timeout | **High** — same blocker as above |
| **Large tool output truncation + indicators** | [#6637](https://github.com/agentscope-ai/QwenPaw/pull/6637) | **Medium** — UX polish, prevents freeze |
| **MCP tool name sanitization** | [#6561](https://github.com/agentscope-ai/QwenPaw/pull/6561) | **Medium** — compatibility with strict providers |
| **Non-destructive session migration** | [#6068](https://github.com/agentscope-ai/QwenPaw/pull/6068) | **Low–Medium** — older PR (Jul 13), may need rebase |

**Prediction**: Next release will bundle the two timeout fixes (#6634, #6636) + large output fix (#6637) as a stability patch. Global hotkey (#6607) may ship same cycle if review completes.

## 7. User Feedback Summary
- **Pain point**: Core console views (Skills, Skill Pool, Chat History) **completely fail on slow/unstable networks** because API returns MB-level uncompressed JSON in a single request with a hard 30s frontend timeout. Users on mobile tethering, VPN, or geo-distant servers are blocked.
- **Use case**: Long-running chats (1MB+ history) and workspaces with many/large skills trigger the timeout reliably.
- **Satisfaction signal**: Rapid fix PRs (#6634, #6636) opened within 24h of issues suggests maintainers prioritize this; users filing issues include detailed reproduction (payload sizes, timeout correlation).
- **No explicit dissatisfaction** beyond the timeout bugs — no complaints about missing features, UI, or core logic.

## 8. Backlog Watch
| Item | Age | Why It Needs Attention |
|------|-----|------------------------|
| [#6068](https://github.com/agentscope-ai/QwenPaw/pull/6068) — Scroll history migration (preserve session IDs) | **21 days** (opened 2026-07-13) | Non-destructive migration logic; may conflict with recent chat history changes (#6636). Needs rebase/review before next release to avoid drift. |
| [#6561](https://github.com/agentscope-ai/QwenPaw/pull/6561) — MCP tool name sanitization | **5 days** (opened 2026-07-29) | Blocks compatibility with strict OpenAI-compatible providers (Kimi/Moonshot). Low complexity, high impact for affected users. |
| [#6607](https://github.com/agentscope-ai/QwenPaw/pull/6607) — Global-hotkey floating window | **3 days** (opened 2026-07-31) | High-visibility desktop feature; should be reviewed for macOS/Windows/Linux hotkey parity and accessibility. |

---

**Health Indicators**:  
✅ Rapid bug-to-fix turnaround (<24h)  
✅ Fixes address root cause (pagination, compression, payload reduction) not symptoms  
⚠️ Zero merges today — review bottleneck risk if PRs stack  
⚠️ One 3-week-old PR (#6068) risks merge conflicts with active chat history work  

**Next expected milestone**: Patch release (2.0.2) with timeout fixes + large output guard + MCP name fix.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-08-03

## 1. Today's Overview

ZeroClaw shows **high governance and architectural activity** with 50 issues and 50 PRs updated in the last 24 hours. The project is in a **heavy RFC/design phase** — 18 of the top 30 issues are RFCs or trackers — spanning authentication, memory, observability, plugin architecture, and operator UX. Release **v0.8.4** (262 commits, 49 contributors) shipped as a maintenance/hardening milestone, expanding memory/SOP control planes, improving provider/channel reliability, and strengthening sandbox/credential boundaries. Open PRs (42) outnumber merged/closed (8), indicating active development stacks awaiting review. The project is healthy but in a **pre-v0.9.0 architecture consolidation window**, with multiple high-risk RFCs targeting security, runtime ownership, and telemetry.

---

## 2. Releases

### v0.8.4 — Maintenance & Hardening Release
- **Scope**: 262 commits from 49 contributors
- **Key areas**:
  - Memory and SOP control planes expanded
  - Provider and channel reliability improvements
  - Sandbox and credential boundaries strengthened
  - Desktop and release pipeline enhancements
- **Breaking changes**: None explicitly noted (maintenance train)
- **Migration notes**: Feature-frozen after v0.8.3; target date was July 31, 2026
- **Tracker**: [#8357](https://github.com/zeroclaw-labs/zeroclaw/issues/8357) — v0.8.4 maintenance train

---

## 3. Project Progress (Merged/Closed PRs Today)

| PR | Title | Area | Status |
|----|-------|------|--------|
| [#9311](https://github.com/zeroclaw-labs/zeroclaw/pull/9311) | feat(config): surface dangling `peer_groups.*.channel` refs as structured warnings | Config/Channels | **Closed** — Implements #8997 |
| [#9162](https://github.com/zeroclaw-labs/zeroclaw/pull/9162) | refactor(providers): extract duplicated OAuth-refresh retry loop into `oauth_common` | Providers/Auth | **Closed** — Code deduplication |
| [#8847](https://github.com/zeroclaw-labs/zeroclaw/pull/8847) | bug(ci): cargo test --doc fails with duplicated rustdoc theme flag | CI/Docs | **Closed** — Rust 1.96 compat |
| [#8997](https://github.com/zeroclaw-labs/zeroclaw/issues/8997) | [Feature]: Warn when peer_groups.*.channel ref points at non-existent channel | Config/Validation | **Closed** — Addressed by #9311 |
| [#9676](https://github.com/zeroclaw-labs/zeroclaw/issues/9676) | bug(ci): restore all-features Docker publishing after MSRV bump | CI/Docker | **Closed** — Blocked by StageX pin |
| [#8578](https://github.com/zeroclaw-labs/zeroclaw/issues/8578) | [Bug]: On failure to start it doesn't terminate the process | Runtime/TUI | **Closed** — Process cleanup |
| [#9162](https://github.com/zeroclaw-labs/zeroclaw/issues/9162) | refactor(providers): extract duplicated OAuth-refresh retry loop | Providers | **Closed** — Refactor complete |

**Net**: 8 PRs closed/merged; 42 remain open — review capacity is the bottleneck.

---

## 4. Community Hot Topics (Most Commented Issues/PRs)

| Item | Comments | Type | Core Need |
|------|----------|------|-----------|
| [#6808](https://github.com/zeroclaw-labs/zeroclaw/issues/6808) RFC: Work Lanes, Board Automation, Label Cleanup | 17 | Governance/Process | Reduce maintainer toil in issue routing; automate board hygiene |
| [#8603](https://github.com/zeroclaw-labs/zeroclaw/issues/8603) RFC: ZeroClaw Chat Completions Profile | 14 | Architecture/Integration | **OpenAI-compatible HTTP API** for Open WebUI, LobeChat, Continue.dev, Aider, LangChain, OpenAI SDK |
| [#6165](https://github.com/zeroclaw-labs/zeroclaw/issues/6165) RFC: Lighter Core via External Integrations | 10 | Architecture/Modularity | Move long-tail integrations to skills/MCP/plugins; define core boundary |
| [#7141](https://github.com/zeroclaw-labs/zeroclaw/issues/7141) RFC: Pluggable Inbound Auth & Canonical Principals | 9 | Security/Identity | OIDC + pluggable providers; principal-based access control |
| [#8303](https://github.com/zeroclaw-labs/zeroclaw/issues/8303) RFC: Goal Mode for Bounded Autonomous Sessions | 9 | Agent/Runtime | Durable "pursue objective until completion/pause/cancel/budget" mode |
| [#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) Tracker: Maintainer Decision Queue for RFCs | 8 | Governance | Centralized decision queue for RFC ratification |
| [#7142](https://github.com/zeroclaw-labs/zeroclaw/issues/7142) RFC: Runtime-Owned Security Decision Pipeline | 6 | Security/Architecture | Restrictive overlays; runtime-owned authz decisions |
| [#9487](https://github.com/zeroclaw-labs/zeroclaw/issues/9487) RFC: Runtime-Owned Conversation Sessions & Transport Adapters | 6 | Architecture/Channels | Runtime as single owner; WS/ACP/dashboard as adapters |
| [#9488](https://github.com/zeroclaw-labs/zeroclaw/issues/9488) RFC: Unified Attachment Architecture | 5 | Channels/Web | Consistent attachment handling across web chat and channels |

**Pattern**: Top discussions are **architectural RFCs**, not bug reports. Contributors are designing v0.9.0 foundations: identity, runtime ownership, protocol compatibility, and modularity.

---

## 5. Bugs & Stability (Reported Today, Ranked by Severity)

| Issue | Severity | Component | Status | Fix PR |
|-------|----------|-----------|--------|--------|
| [#9690](https://github.com/zeroclaw-labs/zeroclaw/issues/9690) Containerfile StageX pin ships rustc 1.95.0, below declared MSRV (1.96.1) | **P1 / High** | CI/Docker | Open | — |
| [#9676](https://github.com/zeroclaw-labs/zeroclaw/issues/9676) all-features Docker variant unbuildable since 2026-07-08 | **P1 / High** | CI/Docker | **Closed** | Related to #9690 |
| [#9672](https://github.com/zeroclaw-labs/zeroclaw/issues/9672) `cron add` CLI help examples all fail; empty-state hint prints broken form | **P1 / Low** | CLI/Docs | Open | — |
| [#9382](https://github.com/zeroclaw-labs/zeroclaw/pull/9382) WhatsApp Web chat policies not enforced under both modes | **P1 / High** | Channels/Security | Open (blocked) | PR #9382 |
| [#9410](https://github.com/zeroclaw-labs/zeroclaw/pull/9410) Default command audit logging to disabled (security honesty) | **P1 / High** | Security/Config | Open (needs author) | PR #9410 |
| [#9424](https://github.com/zeroclaw-labs/zeroclaw/pull/9424) Reject semantic-empty terminal completions (reliability) | **P1 / High** | Runtime/Providers | Open (needs author) | PR #9424 |
| [#9536](https://github.com/zeroclaw-labs/zeroclaw/pull/9536) ACP: default session workspace to agent dir, not daemon CWD | **P1 / High** | ACP/Security | Open (needs author) | PR #9536 |
| [#8963](https://github.com/zeroclaw-labs/zeroclaw/pull/8963) Telegram bot commands cap + truncation WARN repair | **P2 / Medium** | Channels/Telegram | Open (needs review) | PR #8963 |

**Critical path**: Docker publish broken (#9690) blocks `all-features` releases. Security defaults (#9410, #9536) need author action. WhatsApp enforcement (#9382) blocked on review.

---

## 6. Feature Requests & Roadmap Signals

| Signal | Source | Likelihood for v0.9.0 |
|--------|--------|----------------------|
| **OpenAI Chat Completions HTTP API** | [#8603](https://github.com/zeroclaw-labs/zeroclaw/issues/8603) (14 comments) | **High** — Broad ecosystem demand; unblocks Open WebUI, LobeChat, Continue, Aider, LangChain |
| **Pluggable Auth / Canonical Principals** | [#7141](https://github.com/zeroclaw-labs/zeroclaw/issues/7141) (9 comments, P1) | **High** — Security milestone prerequisite; OIDC + provider abstraction |
| **Runtime-Owned Sessions & Transport Adapters** | [#9487](https://github.com/zeroclaw-labs/zeroclaw/issues/9487) (6 comments) | **High** — Architectural consolidation; reduces duplication across WS/ACP/web |
| **Goal Mode (Durable Autonomous Sessions)** | [#8303](https://github.com/zeroclaw-labs/zeroclaw/issues/8303) (9 comments, 👍1) | **Medium-High** — Strong user need; depends on session/runtime ownership |
| **Unified Attachment Architecture** | [#9488](https://github.com/zeroclaw-labs/zeroclaw/issues/9488) (5 comments) | **Medium** — Cross-channel consistency; pairs with #9487 |
| **WASM Plugin Lifecycle Hooks** | [#7822](https://github.com/zeroclaw-labs/zeroclaw/issues/7822) (4 comments) | **Medium** — Extensibility; enables post-turn auditing without core patches |
| **Structured Observability (OTel, Rich Events)** | [#7232](https://github.com/zeroclaw-labs/zeroclaw/issues/7232) (4 comments) | **Medium** — Production hardening; sensitive-data-aware telemetry |
| **Staged Opt-In Product Telemetry** | [#9621](https://github.com/zeroclaw-labs/zeroclaw/issues/9621) (2 comments) | **Low-Medium** — Governance need; depends on observability pipeline |
| **RFC Voting/Quorum Formalization** | [#9496](https://github.com/zeroclaw-labs/zeroclaw/issues/9496) (1 comment) | **Process** — Needed before v0.9.0 ratification wave |

**Prediction**: v0.9.0 will center on **Identity & Access** (#7141, #7142, #8289, #8290), **Runtime Ownership** (#9487, #9488), and **Protocol Compatibility** (#8603). Goal Mode (#8303) may slip to v0.9.x.

---

## 7. User Feedback Summary (Pain Points & Use Cases)

| Pain Point | Evidence | Affected Users |
|------------|----------|----------------|
| **No OpenAI-compatible HTTP API** | #8603: "Clients that speak OpenAI Chat Completions protocol — Open WebUI, LobeChat, Continue.dev, Aider, LangChain, OpenAI SDK — cannot connect" | Web UI / IDE / SDK users |
| **Silent config typos authorize nobody** | #8997: "one-character typo… silently authorizes nobody" | Operators managing peer groups |
| **Docker `all-features` broken for weeks** | #9690: "unbuildable since 2026-07-08" | Container deployments |
| **CLI `cron add` examples don't work** | #9672: "All three fail… fourth broken form printed" | New/CLI users |
| **Process doesn't terminate on startup failure** | #8578: "failed to start… but that's not the problem, the problem is that it stays alive" | TUI/daemon users |
| **Telegram bot command limit (100) hits skills+tools** | #8963: "BOT_COMMANDS_TOO_MUCH when built-ins + skills + enabled tools exceed 100" | Heavy Telegram integrators |
| **ACP session workspace defaults to daemon CWD (security risk)** | #9536: "old default put the shell-tool workspace at daemon CWD" | ACP clients |
| **Command audit logging enabled by default (leaks secrets)** | #9410: "default the inert command-audit setting to disabled" | Security-conscious operators |

**Satisfaction signals**: Contributors actively file RFCs and PRs (49 on v0.8.4). **Dissatisfaction**: Silent failures (config, cron), broken defaults (Docker, audit logging), and missing protocol bridge (OpenAI API) create friction for operators and integrators.

---

## 8. Backlog Watch (Stale High-Value Items Needing Maintainer Attention)

| Item | Age | Type | Why It Matters | Blockers |
|------|-----|------|----------------|----------|
| [#6808](https://github.com/zeroclaw-labs/zeroclaw/issues/6808) RFC: Work Lanes, Board Automation, Label Cleanup | Since 2026-05-20 (75 days) | Governance | Reduces maintainer toil; automates triage | Ratification correction in progress |
| [#6165](https://github.com/zeroclaw-labs/zeroclaw/issues/6165) RFC: Lighter Core via External Integrations | Since 2026-04-27 (98 days) | Architecture | Defines core boundary; prevents bloat | Needs author action; high risk |
| [#7141](https://github.com/zeroclaw-labs/zeroclaw/issues/7141) RFC: Pluggable Inbound Auth & Canonical Principals | Since 2026-06-03 (61 days) | Security/P1 | Foundation for multi-user milestone | Rev 6; needs maintainer review |
| [#7142](https://github.com/zeroclaw-labs/zeroclaw/issues/7142) RFC: Runtime-Owned Security Decision Pipeline | Since 2026-06-03 (61 days) | Security/P2 | Restrictive overlays for v0.9.0 | Rev 5; needs maintainer review |
| [#8289](https://github.com/zeroclaw-labs/zeroclaw/issues/8289) Tracker: OIDC Milestone | Since 2026-06-24 (40 days) | Tracker | Coordinates #7141 implementation | Depends on #7141 ratification |
| [#8290](https://github.com/zeroclaw-labs/zeroclaw/issues/8290) Tracker: Multi-User Milestone | Since 2026-06-24 (40 days) | Tracker | Per-principal isolation + per-sender authz | Depends on #8289 |
| [#9496](https://github.com/zeroclaw-labs/zeroclaw/issues/9496) RFC: Define RFC Voting Windows, Thresholds, Quorum | Since 2026-07-28 (6 days) | Governance | Unblocks ratification of above RFCs | Contributor guide vs FND-003 conflict |
| [#8603](https://github.com/

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/DenisZheng/agents-radar).*