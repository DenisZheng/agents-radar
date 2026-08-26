# OpenClaw Ecosystem Digest 2026-08-26

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-08-26 00:55 UTC

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

# Cross-Project Comparison Report: Personal AI Assistant / Agent Open-Source Ecosystem (2026-08-26)

---

## 1. Ecosystem Overview

The personal AI assistant/agent open-source landscape is **highly fragmented but technically convergent**. Ten active projects show daily commit volumes ranging from 5–100+ PR/issue updates, with zero projects cutting stable releases in the last 24 hours—indicating a **pre-release stabilization phase** across the board. Core architectural patterns (multi-channel frontends, MCP/tool ecosystems, sandboxed execution, session persistence) are shared, but each project optimizes for different deployment models: desktop-first (Hermes, CoPaw), server/container-orchestrated (NanoClaw, ZeroClaw, IronClaw), edge/embedded (PicoClaw, NanoBot), or web-native (LobsterAI, Moltis). Community scale varies from single-maintainer (PicoClaw, ZeptoClaw) to 50+ daily contributors (NanoBot, Hermes, ZeroClaw). **Security hardening, provider reliability, and session/UX polish** are the universal near-term priorities.

---

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | PRs Merged | Releases (24h) | Health Score* | Primary Mode |
|---------|--------------|-----------|------------|----------------|---------------|--------------|
| **NanoBot** | 5 active | 14 | 14 | 0 | 🟢 High | Desktop/CLI/WebUI, multi-channel |
| **Hermes Agent** | 50 | 50 | 11 | 0 | 🟡 Medium-High | Desktop (macOS/Win/Linux), TUI, gateway |
| **PicoClaw** | 4 | 1 | 0 | 0 | 🟡 Medium | Embedded/edge, Web UI, Slack/Telegram |
| **NanoClaw** | 5 new | ~50 (16 merged) | 16 | 0 | 🟢/🟡 High velocity, critical bugs | Container-orchestrated, skill-based |
| **IronClaw** | 37 | 23 | 10 | 0 | 🟢/🟡 High velocity, P1 bugs open | WebUI, sandbox runtime, extensions |
| **LobsterAI** | 1 | 9 | 9 | **2** (5 days) | 🟢 Strong | Electron desktop, library/artifacts, monetization |
| **TinyClaw** | 0 | 0 | 0 | 0 | ⚫ Inactive | — |
| **Moltis** | 2 | 5 | 1 | 0 | 🟢 Steady | Multi-channel, sandbox backends (K8s, Coder) |
| **CoPaw** | 34 | 50 | ~10 | 1 (beta.3) | 🟢/🟡 High velocity, stability debt | Desktop (Qwen-based), creator apps, MCP |
| **ZeptoClaw** | 0 | 0 | 0 | 0 | ⚫ Inactive | — |
| **ZeroClaw** | 50 | 50 | 1 | 0 | 🟡 Governance bottleneck | Daemon, multi-agent, ZeroCode TUI, RFC-driven |
| **OpenClaw** | — | — | — | — | ❓ Failed | Core reference (data unavailable) |
| **NullClaw** | — | — | — | — | ❓ Failed | (data unavailable) |

*Health Score: 🟢 = active merges, regressions covered, no P0; 🟡 = high velocity but open P1/P2 or governance debt; 🟠 = critical bugs unfixed; ⚫ = no activity.*

**Key Observations**:
- **LobsterAI** is the only project shipping user-facing releases (bi-weekly cadence).
- **NanoBot, NanoClaw, CoPaw, Hermes, IronClaw, ZeroClaw** operate at >30 total daily interactions—these are the "Tier 1" velocity projects.
- **Moltis, PicoClaw** are "Tier 2" (steady, focused).
- **TinyClaw, ZeptoClaw** appear dormant.

---

## 3. OpenClaw's Position

*Note: OpenClaw digest generation failed; assessment based on ecosystem context as "core reference."*

**Inferred Advantages vs. Peers**:
- **Architectural reference**: Likely defines the baseline interfaces (channel adapters, tool schemas, session protocols) that downstream forks (NanoClaw, PicoClaw, IronClaw, ZeroClaw) extend or react against.
- **Neutral governance**: As a "core reference," it avoids vendor lock-in (vs. CoPaw/Qwen, LobsterAI/Youdao, Hermes/Nous).
- **Ecosystem gravity**: Fork count and issue cross-references (e.g., NanoClaw's `update-nanoclaw` skill, IronClaw's `iron-proxy`) suggest it anchors compatibility expectations.

**Technical Approach Differences**:
- Peers diverge on **runtime model**: NanoClaw/ZeroClaw/IronClaw use container/daemon orchestration; Hermes/CoPaw/LobsterAI are desktop-process; PicoClaw targets bare-metal/edge; NanoBot is hybrid (TUI/WebUI + local agent).
- **OpenClaw likely standardizes the "agent protocol" layer** (MCP-like tool calling, session serialization, channel abstraction) that others implement partially.

**Community Size Comparison**:
- Direct metrics unavailable, but **downstream activity implies high indirect influence**: 6+ active forks/variants tracking its patterns. If OpenClaw's repo mirrors the aggregate velocity of its derivatives, it would rank Tier 1.

---

## 4. Shared Technical Focus Areas (Cross-Project Requirements)

| Requirement | Projects Affected | Specific Need |
|-------------|-------------------|---------------|
| **MCP / Tool Ecosystem Reliability** | NanoBot (#5535), Hermes (#94906, #94859), Moltis (#1232), CoPaw (#6524), ZeroClaw (#10346) | Stable server discovery, session recovery, schema compliance (OpenAI `additionalProperties: false`), auto-reconnect |
| **Sandbox / Execution Isolation** | NanoBot (#5536), IronClaw (#7732), Moltis (#1118, #1199), ZeroClaw (#9872, #10369), NanoClaw (container skills) | Fail-closed exec, persistent per-user sandboxes (iron-proxy), K8s `runtimeClassName` (Kata/gVisor), Coder remote workspaces, egress bounds |
| **Session Persistence & Continuity** | NanoBot (#5537), Hermes (#90428, #93937), ZeroClaw (memory RFC #9103), CoPaw (#7266), LobsterAI (#1159) | Focus/workspace restore across turns, reconnect message delivery, authoritative memory vs. enrichment separation, session fork/branching |
| **Multi-Channel UX Parity** | NanoBot (#5516, #5528), Hermes (#7862), CoPaw (#7258), Moltis (#1224), ZeroClaw (#10138) | Rich rendering with streaming (Telegram), title propagation (WebUI unifiedSession), thinking-process toggle, voice wake binding, Git Channel |
| **Security Hardening** | NanoBot (#5536), NanoClaw (#3543, #3484), ZeroClaw (#10370, #10369), IronClaw (#7891), Hermes (#52010) | Shell injection prevention, secret handling (stdin vs argv), credential cache hygiene, bounded HTTP egress, SSRF mitigation |
| **Provider Compatibility** | NanoBot (#5540, #5505), Hermes (#95003), Moltis (#1232, #1245), ZeroClaw (#8396), CoPaw (#7277) | Prompt-cache routing, extensible search (AnySearch), xAI `tool_search` conflict, Brave/Fastmail MCP, wire-protocol-first provider SDK |
| **Install/Update UX** | Hermes (#52010, #87703, #91115), CoPaw (#6810), NanoClaw (setup wizard #3484–#3487) | macOS FDA/keychain persistence, Windows cua-driver/NSIS fixes, structured setup protocol (`nanoclaw.driver.v1`), preseed catalog |

---

## 5. Differentiation Analysis

| Dimension | NanoBot | Hermes | NanoClaw | IronClaw | ZeroClaw | LobsterAI | CoPaw | Moltis | PicoClaw |
|-----------|---------|--------|----------|----------|----------|-----------|-------|--------|----------|
| **Primary Target** | Power users, devs, researchers | Desktop-first generalists | Server/container operators, orgs | WebUI + sandbox runtime, extensibility | Multi-agent daemon, governance | Consumer/prosumer desktop, monetization | Creator/app builders (Qwen ecosystem) | Multi-channel bots, enterprise sandboxes | Edge/embedded, low-resource |
| **Architecture** | Hybrid: local agent + TUI/WebUI | Electron + Rust gateway + TUI | Container orchestrator + skills | WebUI (React) + Rust sandbox + extensions | Rust daemon + ZeroCode TUI + channels | Electron + local artifacts + cloud sync | Electron + Qwen + plugin marketplace | Go + multiple sandbox backends | Lightweight, single-binary |
| **Channel Strategy** | Native: Telegram, Slack, WebUI, TUI | Native: Slack, Discord, Telegram, Voice | Skill-based: Slack, Discord, Web, Local | Extensions: Telegram, Slack, Voice, Web | Channels: Slack, WhatsApp, Voice, Git, Mattermost | Web chat, library share | WeChat, Web, Desktop, MCP | Slack, WhatsApp, Telegram, Voice | Web UI, Slack, Telegram |
| **Tool/Extensibility** | MCP, skills, exec sessions | MCP, plugins, cron, skills | Skills (containerized), MCP | Extensions (WASM), MCP, OMP tools | MCP, cron, delegate, verification | Artifacts (HTML/local), DSH | MCP, creator apps, skills | MCP, Brave/Fastmail, custom | MCP, basic tools |
| **Monetization / Business** | Open (HKUDS research) | Open (NousResearch) | Open (qwibitai) | Open (NEAR AI) | Open (ZeroClaw Labs) | **Freemium** (model catalog, attribution) | Open (AgentScope) | Open (Moltis Org) | Open (Sipeed) |
| **Maturity Signal** | High merge rate, regression tests | Desktop polish, i18n (pt-BR), RFCs | Security-first, setup overhaul | Design system phases, CI modernization | RFC-governed, v0.9.0 tracker | **Shipping releases**, analytics funnel | Beta iterations, test coverage +5pp | Steady, external contributors | Maintenance mode, critical bugs |

**Strategic Clusters**:
1. **Desktop-First Polish**: Hermes, CoPaw, LobsterAI — invest heavily in native OS integration, installer UX, i18n.
2. **Server/Container Orchestration**: NanoClaw, ZeroClaw, IronClaw — multi-tenant, daemon-based, skill/extension markets.
3. **Protocol/Platform Builders**: NanoBot, Moltis, ZeroClaw — emphasize MCP, channel abstractions, sandbox standards.
4. **Edge/Minimalist**: PicoClaw — unique in targeting <20MB RAM devices.

---

## 6. Community Momentum & Maturity

| Tier | Projects | Signals |
|------|----------|---------|
| **Rapidly Iterating (High Velocity + Active Triage)** | NanoBot, NanoClaw, Hermes, IronClaw, CoPaw, ZeroClaw | >30 daily GH interactions; same-day security fixes (NanoBot #5536, NanoClaw #3484); beta releases (CoPaw); RFC pipelines (ZeroClaw, IronClaw) |
| **Stabilizing / Release-Cadenced** | LobsterAI | **Only project with recent stable releases** (2 in 5 days); analytics-driven roadmap; low open bug count |
| **Steady Feature Development** | Moltis | Consistent PR flow; external contributors (Coder sandbox); focus on provider compliance |
| **Maintenance / Critical Debt** | PicoClaw | 3 high-severity bugs open >35 days; no merges; single maintainer signal |
| **Dormant** | TinyClaw, ZeptoClaw | Zero 24h activity |

**Maturity Indicators**:
- **LobsterAI** leads in *product maturity* (releases, funnel instrumentation, monetization clarity).
- **ZeroClaw, IronClaw, Hermes** lead in *governance maturity* (RFC processes, design systems, CI standardization).
- **NanoBot, NanoClaw** lead in *engineering velocity* (merge throughput, regression test coverage).
- **CoPaw** shows *ecosystem momentum* (creator apps, plugin marketplace, test coverage jump).

---

## 7. Trend Signals for AI Agent Developers

| Trend | Evidence | Implication |
|-------|----------|-------------|
| **MCP is the de facto tool protocol** | 7/10 projects actively fixing MCP reliability (NanoBot, Hermes, Moltis, CoPaw, ZeroClaw, IronClaw, NanoClaw) | Build tools as MCP servers; expect schema strictness (OpenAI `additionalProperties: false`) and session recovery requirements. |
| **Sandbox persistence > ephemeral exec** | IronClaw (#7732), Moltis (#1118), ZeroClaw (#10369), NanoClaw (container skills) | Docker-per-command is obsolete; invest in persistent, poolable sandboxes with egress control and VM-level isolation. |
| **Multi-agent / delegation security is the new frontier** | ZeroClaw (#9947, #9872), NanoClaw (#3532), IronClaw (delegate tools) | Tool scoping must cover *future* agents; workspace isolation for delegated tasks is a baseline requirement. |
| **Desktop install/update UX is a competitive differentiator** | Hermes (macOS FDA, Windows cua-driver), CoPaw (NSIS), NanoClaw (setup wizard protocol) | Projects solving "permission fatigue" and "installer reliability" win user retention; structured setup protocols enable CI/CD. |
| **Session continuity = product quality** | NanoBot (#5537), Hermes (#90428), ZeroClaw (#9103), CoPaw (#726

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-08-26

---

## 1. Today's Overview
NanoBot showed **high development velocity** on 2026-08-25 with 14 PRs merged/closed and 5 active issues updated. The project is in active feature iteration and bug-fix mode, with no new release cut. Work spans Telegram channel fixes, WebUI unified-session title propagation, exec-tool sandbox hardening, provider-side MCP readiness retries, and TUI/WebUI UX polish. The merge rate (14 in 24h) and breadth of touched areas (channels, tools, providers, UI, security) indicate a healthy, responsive codebase.

---

## 2. Releases
**No new releases** published in the last 24 hours.

---

## 3. Project Progress — Merged/Closed PRs (14)
| PR | Type | Summary |
|----|------|---------|
| [#5541](https://github.com/HKUDS/nanobot/pull/5541) | bug, channel, test | **Telegram**: attribute group messages to senders (display name → username → numeric ID); adds regression tests. Fixes #1091. |
| [#5540](https://github.com/HKUDS/nanobot/pull/5540) | bug, provider, perf, test | **Provider**: stabilize Codex prompt-cache routing by propagating stable session identity; omit cache key when absent. |
| [#5538](https://github.com/HKUDS/nanobot/pull/5538) | bug, docs, test | **TUI**: clarify active composer actions (`Enter` send now, `Tab` send next); shorten placeholder text. |
| [#5534](https://github.com/HKUDS/nanobot/pull/5534) | enhancement, test | **TUI**: autocomplete skill references (`$skill-name`) with filtered picker, arrow nav, Enter/Tab insertion. |
| [#5533](https://github.com/HKUDS/nanobot/pull/5533) | bug, perf, test | **Tools**: keep `find_files` scans responsive — worker-based scan, `os.scandir` traversal, pagination lookahead, cancellation propagation. |
| [#5530](https://github.com/HKUDS/nanobot/pull/5530) | enhancement, test | **TUI**: keep short transcripts & composer top-aligned; sticky scrolling on overflow; resize regression tests. |
| [#5529](https://github.com/HKUDS/nanobot/pull/5529) | bug, test | **Agent**: wait for background subagents only at turn exit; non-blocking drains during turn; shared 300s deadline. |
| [#5526](https://github.com/HKUDS/nanobot/pull/5526) | bug, webui, perf, test | **Agent/Exec**: wait for exec sessions without polling — rename tool to `exec_session`, add `until_exit` + `timeout_ms`. |
| [#5525](https://github.com/HKUDS/nanobot/pull/5525) | enhancement, provider, test | **Feature**: demand-driven document retrieval — `grep` returns bounded snippets; incremental PDF/DOCX/XLSX/PPTX search with stable locators. |
| [#5389](https://github.com/HKUDS/nanobot/pull/5389) | webui, feature, test | **WebUI**: drag-and-drop session organization (reorder, create groups, move sessions across groups). |
| [#5528](https://github.com/HKUDS/nanobot/pull/5528) | bug, webui, test | **WebUI**: project generated titles onto per-chat sessions under `unifiedSession` (closes #5527). |
| [#5536](https://github.com/HKUDS/nanobot/pull/5536) | bug, security, test | **Exec**: fail closed when restricted shell lacks sandbox — removes reliance on app-level path checks (symlink/expansion bypass). Fixes #4072. |
| [#5535](https://github.com/HKUDS/nanobot/pull/5535) | bug, provider, test | **Gateway**: retry MCP readiness before turns — pre-turn callback, retry `MCPProvider.connect()`, ensure tools registered before policy snapshots. |
| [#5539](https://github.com/HKUDS/nanobot/pull/5539) | bug, test | **Tools**: interpolate `ToolLoader` log context — replace `%s` with Loguru `{}` placeholders; add regression test for plugin load failures. |

**Themes advanced today**: Telegram UX parity, provider reliability, TUI polish, WebUI session UX, exec-tool security hardening, MCP resilience, logging hygiene.

---

## 4. Community Hot Topics
| Item | Activity | Underlying Need |
|------|----------|-----------------|
| [Issue #5505](https://github.com/HKUDS/nanobot/issues/5505) — Add AnySearch as web search provider | 3 comments, external vendor proposal | **Extensible search provider ecosystem** — vendors want first-class integration without forking. |
| [Issue #5516](https://github.com/HKUDS/nanobot/issues/5516) — Telegram rich messages never render with streaming | 1 comment, linked PR #5531 | **Channel feature parity** — users expect rich markdown rendering even when streaming is enabled (Bot API 10.1-10.3 drafts). |
| [Issue #5532](https://github.com/HKUDS/nanobot/issues/5532) — Missing import `mask_session_key` in autocompact.py | 1 comment, crash report | **Runtime stability** — import regression blocking user workflows. |
| [Issue #5527](https://github.com/HKUDS/nanobot/issues/5527) — WebUI sidebar titles stay "Untitled" under unifiedSession | 0 comments, PR #5528 opened same day | **Session UX consistency** — title generation tied to unified session but sidebar shows per-chat sessions. |
| [Issue #5524](https://github.com/HKUDS/nanobot/issues/5524) — WebUI turn-completion notification sound | 0 comments, feature request | **Async workflow awareness** — users run long tasks and need passive notification without polling. |

---

## 5. Bugs & Stability — Ranked by Severity
| Severity | Issue / PR | Status | Notes |
|----------|------------|--------|-------|
| **P1 — Security/Crash** | [#5536](https://github.com/HKUDS/nanobot/pull/5536) Exec: fail closed when restricted shell lacks sandbox | **Merged** | Path-check bypass via symlinks/expansion; fail-closed design. Fixes #4072. |
| **P1 — Crash** | [#5532](https://github.com/HKUDS/nanobot/issues/5532) Missing import `mask_session_key` in autocompact.py | **Open** | Runtime `ImportError` on user query; no fix PR yet. |
| **P2 — Data Loss/Incorrectness** | [#5533](https://github.com/HKUDS/nanobot/pull/5533) `find_files` scans unresponsive | **Merged** | Worker-based scan, cancellation, pagination bounds. |
| **P2 — Functional Regression** | [#5516](https://github.com/HKUDS/nanobot/issues/5516) / [#5531](https://github.com/HKUDS/nanobot/pull/5531) Telegram rich messages + streaming broken | **Open PR** | Rich branch unreachable; PR upgrades preview to rich at stream end. |
| **P2 — UX Regression** | [#5527](https://github.com/HKUDS/nanobot/issues/5527) / [#5528](https://github.com/HKUDS/nanobot/pull/5528) WebUI sidebar titles "Untitled" under unifiedSession | **Open PR** | Title propagation mismatch; PR projects titles to per-chat sessions. |
| **P2 — Provider Reliability** | [#5535](https://github.com/HKUDS/nanobot/pull/5535) MCP readiness retry before turns | **Merged** | Pre-turn callback, retry connect, tool registration before policy snapshot. |
| **P2 — Logging/Observability** | [#5539](https://github.com/HKUDS/nanobot/pull/5539) ToolLoader printf-style logs | **Merged** | Loguru-compatible placeholders; regression test added. |

**No P0 (data-corruption/cluster-down) issues reported today.**

---

## 6. Feature Requests & Roadmap Signals
| Signal | Source | Likelihood for Next Version |
|--------|--------|----------------------------|
| **AnySearch as web search provider** | [#5505](https://github.com/HKUDS/nanobot/issues/5505) (vendor PR intent) | High — vendor-driven, standard integration methods (API/MCP/Skill). |
| **Telegram rich messages with streaming** | [#5516](https://github.com/HKUDS/nanobot/issues/5516) + [#5531](https://github.com/HKUDS/nanobot/pull/5531) | High — PR open, addresses Bot API drafts, user-visible. |
| **WebUI turn-completion notification sound** | [#5524](https://github.com/HKUDS/nanobot/issues/5524) | Medium — opt-in, low complexity, clear UX value for async workflows. |
| **Demand-driven document retrieval (grep snippets, incremental Office/PDF search)** | [#5525](https://github.com/HKUDS/nanobot/pull/5525) | **Already merged** — ships in next cut. |
| **Drag-and-drop session organization (WebUI)** | [#5389](https://github.com/HKUDS/nanobot/pull/5389) | **Already merged** — ships in next cut. |
| **Session focus persistence across turns/restarts** | [#5537](https://github.com/HKUDS/nanobot/pull/5537) | Medium — open PR, fixes #3292, durable `my` tool focus. |
| **MST (metasearch) as provider** | [#5234](https://github.com/HKUDS/nanobot/pull/5234) | Low-Medium — open since Aug 3, conflict label, needs rebase/review. |

---

## 7. User Feedback Summary
| Pain Point | Evidence | Impact |
|------------|----------|--------|
| **Telegram rich rendering broken with streaming** | #5516, #5531 | Users on default config (`streaming: true`) never see markdown; forces disable streaming or accept HTML fallback. |
| **WebUI sidebar shows "Untitled" under unifiedSession** | #5527 | Session list unusable for navigation; title generation works but not surfaced. |
| **No passive notification for long agent turns** | #5524 | Users must watch screen or refresh; notification sound requested as opt-in. |
| **Exec tool security bypass via symlinks/expansion** | #5536 (fixes #4072) | Restricted shell could escape workspace; fail-closed fix merged. |
| **MCP tools not ready at turn start** | #5535 | Turns fail or use stale tool set; retry-before-turn merged. |
| **Import crash on autocompact** | #5532 | Blocks users on current main; needs quick patch. |

**Overall sentiment**: Active contributors filing high-quality bugs with reproduction; vendor (#5505) seeking upstream integration — signals project maturity and ecosystem pull.

---

## 8. Backlog Watch — Items Needing Maintainer Attention
| Item | Age | Why It Matters |
|------|-----|----------------|
| [#5234](https://github.com/HKUDS/nanobot/pull/5234) feat: integrate mst-python as metasearch provider | 23 days (since Aug 3) | Large feature PR, `conflict` label, adds multi-engine search with RRF; needs rebase/review to unblock. |
| [#5152](https://github.com/HKUDS/nanobot/pull/5152) fix(subagent): mark partial completion results | 29 days (since Jul 28) | Regression fix for subagent result signaling; `conflict` label, long-open. |
| [#5504](https://github.com/HKUDS/nanobot/pull/5504) fix(ui): surface model retry status (NAN-34) | 2 days | UX for model retries (TUI/WebUI countdown); open, test-labeled, priority p2. |
| [#5519](https://github.com/HKUDS/nanobot/pull/5519) fix(webui): compact single-pane chat header | 2 days | UI polish, open; may conflict with other WebUI layout work. |
| [#5537](https://github.com/HKUDS/nanobot/pull/5537) feat(my): persist session focus across turns | 1 day | Fixes #3292 (old), open; durable continuity cue for agents. |
| [#5531](https://github.com/HKUDS/nanobot/pull/5531) fix(telegram): upgrade streaming preview to rich at stream end | 1 day | Critical for Telegram UX parity; open, addresses #5516. |
| [#5505](https://github.com/HKUDS/nanobot/issues/5505) Add AnySearch provider | 2 days | Vendor PR incoming; maintainers should clarify acceptance criteria (MCP vs native). |

---

**Health Indicators**: 🟢 High merge throughput (14/24h), 🟢 Security fix landed same-day, 🟢 Regression coverage added across PRs, 🟡 2 P1 issues open (import crash, Telegram rich+stream), 🟡 Several multi-day PRs with `conflict` label need triage. Next release candidate likely to include demand-driven retrieval, drag-drop sessions, exec-session wait, MCP retry, TUI autocomplete, and Telegram sender attribution.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-08-26

---

## 1. Today's Overview

Hermes Agent shows **high activity** with 100 total updates (50 issues, 50 PRs) in the last 24 hours. The project is in active maintenance mode with **no new releases** but significant bug-fixing and feature work across desktop, CLI, gateway, and plugin surfaces. Key themes: macOS/Windows update/install regressions, session state reliability, MCP/stdio tooling stability, and i18n expansion (Portuguese pt-BR). The 9 closed issues and 11 merged/closed PRs indicate steady triage velocity, though several high-severity regressions remain open.

---

## 2. Releases

**No new releases** published today. The latest activity is on `main` branch with ongoing fixes and features.

---

## 3. Project Progress — Merged/Closed PRs Today

| PR | Type | Component | Summary |
|----|------|-----------|---------|
| [#16520](https://github.com/NousResearch/hermes-agent/issues/16520) | Bug Fix | `comp/tools`, `tool/file` | Terminal tools (`read_file`, `cat`) no longer truncate long lines with `...` — fixes model misjudging file content as corrupted |
| [#87703](https://github.com/NousResearch/hermes-agent/issues/87703) | Bug Fix | `comp/cli`, `platform/windows` | Windows: `hermes update` no longer hangs ~11 min on `cua-driver` refresh (UAC prompt from hidden PowerShell) |
| [#94516](https://github.com/NousResearch/hermes-agent/issues/94516) | Bug Fix | `comp/cron`, `comp/desktop` | Desktop Bot Mode: Cronjobs pane regression fixed — "unavailable until agent appears in roster" error resolved |
| [#90428](https://github.com/NousResearch/hermes-agent/issues/90428) | Bug Fix | `comp/tui`, `area/sessions` | Desktop: messages sent to WS-detached session after reconnect no longer silently dropped |
| [#94471](https://github.com/NousResearch/hermes-agent/issues/94471) | Bug Fix | `comp/desktop` | Bots tab Routines pane crash `(e.name || "").trim is not a function` fixed |
| [#93617](https://github.com/NousResearch/hermes-agent/issues/93617) | Bug Fix | `comp/plugins`, `platform/slack` | Slack: concurrent turns in one channel no longer clobber native streams causing duplicate messages |
| [#94483](https://github.com/NousResearch/hermes-agent/issues/94483) | Bug Fix | `comp/plugins`, `platform/windows` | Desktop CRONJOBS pane stuck on "unavailable" / Create Cronjob no-op fixed |
| [#66148](https://github.com/NousResearch/hermes-agent/pull/66148) | Bug Fix | `comp/gateway`, `provider/openai` | Gateway: prune stored `/v1/responses` history images; stop post-compression history duplication |
| [#42814](https://github.com/NousResearch/hermes-agent/pull/42814) | Feature | `comp/gateway` | API Server: added session compression endpoint `POST /api/sessions/{session_id}/compress` |
| [#95133](https://github.com/NousResearch/hermes-agent/pull/95133) | Test Fix | `comp/desktop` | JS lane no longer fails in 5 minutes after midnight (timestamp test flakiness) |
| [#95126](https://github.com/NousResearch/hermes-agent/pull/95126) | Bug Fix | `comp/tui`, `comp/desktop` | Bots roster no longer stalls behind live profile write lock; failed queries show error card |

**Net progress**: 11 PRs merged/closed, primarily addressing **desktop stability (cron, sessions, UI crashes)**, **Windows/macOS update regressions**, **Slack streaming**, and **gateway history bloat**.

---

## 4. Community Hot Topics — Most Active Issues/PRs

| Item | Comments | Reactions | Core Need |
|------|----------|-----------|-----------|
| [#66616](https://github.com/NousResearch/hermes-agent/issues/66616) Skills index stale/degraded | 97 | 0 | **Automation reliability** — Skills Hub index rebuild cron (6/18 UTC) not running frequently enough; 29.8h vs 26h limit |
| [#52010](https://github.com/NousResearch/hermes-agent/issues/52010) macOS FDA revoked after every update | 21 | 0 | **macOS permission persistence** — Full Disk Access / Files & Folders reset on each desktop update; distinct from Accessibility |
| [#95003](https://github.com/NousResearch/hermes-agent/issues/95003) xAI rejects `tool_search` function name | 9 | 👍 7 | **Provider compatibility** — xAI reserves `tool_search` for native tool; breaks Hermes Tool Search integration |
| [#95028](https://github.com/NousResearch/hermes-agent/issues/95028) Authority Execution Layer architecture | 9 | 0 | **Architectural refactor** — Proposes unified "Authority Execution Layer" to fix 12 related issues as one defect |
| [#87697](https://github.com/NousResearch/hermes-agent/issues/87697) Ollama streams cancelled after ~1.5s | 11 | 0 | **Local LLM streaming regression** — Client-side cancellation triggers `<unused49>` token loop on Ollama |
| [#91115](https://github.com/NousResearch/hermes-agent/issues/91115) macOS keychain prompt after update (safeStorage) | 9 | 0 | **Keychain ACL mismatch** — Re-signed app breaks "Hermes Safe Storage" keychain item on every launch |
| [#40239](https://github.com/NousResearch/hermes-agent/issues/40239) Add pt-BR language support | 11 | 👍 3 | **i18n expansion** — Portuguese (Brazil) localization for desktop app; backend/TUI already supported |
| [#92590](https://github.com/NousResearch/hermes-agent/pull/92590) feat(i18n): Add pt-BR support (PR) | — | — | **Active PR** — 3,400+ lines translated for core + desktop; awaiting review |

**Underlying signals**: 
- **Update/install experience** is a top pain point (macOS FDA, keychain, Windows cua-driver, progress UI)
- **Session/streaming reliability** affects both desktop (WS reconnect) and gateway (Ollama, Slack, xAI)
- **Architectural debt** recognized in #95028 — maintainers considering a unified execution layer
- **i18n momentum** — pt-BR nearly complete, likely next supported language

---

## 5. Bugs & Stability — Ranked by Severity

| Severity | Issue | Component | Status | Fix PR |
|----------|-------|-----------|--------|--------|
| **P1** | [#94906](https://github.com/NousResearch/hermes-agent/issues/94906) Windows: native stdio MCP client discovers tools but every call fails `subprocess has exited` | `comp/tools`, `tool/mcp`, `platform/windows` | Open | — |
| **P2** | [#87697](https://github.com/NousResearch/hermes-agent/issues/87697) Hermes Client cancels local LLM streams after ~1.5s (Ollama `<unused49>` loop) | `comp/agent`, `provider/ollama`, `area/streaming` | Open | — |
| **P2** | [#95003](https://github.com/NousResearch/hermes-agent/issues/95003) xAI rejects `tool_search` function name (reserved) | `comp/agent`, `comp/tools`, `provider/xai` | Open | — |
| **P2** | [#94859](https://github.com/NousResearch/hermes-agent/issues/94859) Multiple stdio MCP servers intermittently fail after gateway restart | `comp/gateway`, `tool/mcp` | Open | — |
| **P2** | [#91115](https://github.com/NousResearch/hermes-agent/issues/91115) macOS keychain prompt after update (safeStorage rotation) | `area/auth`, `comp/desktop`, `area/install-update` | Open | — |
| **P2** | [#52010](https://github.com/NousResearch/hermes-agent/issues/52010) macOS Full Disk Access revoked after every update | `comp/desktop`, `area/install-update` | Open | [#95131](https://github.com/NousResearch/hermes-agent/pull/95131) (salvage) |
| **P2** | [#95078](https://github.com/NousResearch/hermes-agent/issues/95078) Nested Hermes inherits stale `TERMINAL_CWD` | `comp/cli`, `tool/terminal`, `backend/local` | Open | — |
| **P2** | [#95138](https://github.com/NousResearch/hermes-agent/pull/95138) Gateway: match turn-start prefix on normalized message identity (history duplication) | `comp/gateway`, `provider/openai` | **Open PR** | PR #95138 |
| **P3** | [#93937](https://github.com/NousResearch/hermes-agent/issues/93937) Gateway switcher leaks session ID → "session not found" | `comp/desktop`, `area/sessions` | Open (dup) | — |
| **P3** | [#79005](https://github.com/NousResearch/hermes-agent/issues/79005) Desktop profile swap routes `session.create` to wrong backend | `comp/desktop`, `area/sessions`, `area/profiles` | Open | — |
| **P3** | [#64322](https://github.com/NousResearch/hermes-agent/issues/64322) Tool loop guardrail hard-stop silently halts task | `comp/agent` | Open | — |
| **P3** | [#84678](https://github.com/NousResearch/hermes-agent/issues/84678) WinForms update progress card born minimized (no Edge) | `comp/desktop`, `platform/windows` | Open | — |

**Critical cluster**: MCP/stdio on Windows (#94906), Ollama streaming (#87697), and xAI compatibility (#95003) block provider integrations. macOS update permissions (#52010, #91115) affect every desktop user on update.

---

## 6. Feature Requests & Roadmap Signals

| Feature | Issue/PR | Priority | Likelihood for Next Version |
|---------|----------|----------|----------------------------|
| **pt-BR (Portuguese Brazil) localization** | [#40239](https://github.com/NousResearch/hermes-agent/issues/40239), [#92590](https://github.com/NousResearch/hermes-agent/pull/92590), [#92643](https://github.com/NousResearch/hermes-agent/issues/92643) | P3 | **High** — PR #92590 has 3,400+ lines translated; multiple contributors |
| **Authority Execution Layer (architectural refactor)** | [#95028](https://github.com/NousResearch/hermes-agent/issues/95028), [#95101](https://github.com/NousResearch/hermes-agent/pull/95101) | P3 | **Medium** — Phase 0.1–0.3 PR opened (#95101); manifest schema + compiler + conformance harness |
| **Verified local cold archive for sessions** | [#91005](https://github.com/NousResearch/hermes-agent/issues/91005), [#94428](https://github.com/NousResearch/hermes-agent/pull/94428) | P3 | **Medium** — Draft PR implements bounded cold-archive CLI |
| **Agent draw instruction marks on screen (`annotate_screen`)** | [#94350](https://github.com/NousResearch/hermes-agent/pull/94350) | P3 | **Medium** — Desktop UI tool for HUD-style annotations (circles, arrows, rectangles) |
| **Chat Width setting in Appearance** | [#95134](https://github.com/NousResearch/hermes-agent/pull/95134) | P3 | **High** — Simple UI setting, closes #55287 |
| **Configurable webhook signature/event headers per route** | [#68768](https://github.com/NousResearch/hermes-agent/issues/68768) | P3 | Low — niche gateway auth need |
| **Adaptive explanation policy for interactive artifacts** | [#93382](https://github.com/NousResearch/hermes-agent/issues/93382) | P3 | Low — depends on multiple open proposals (#7191, #61095, #74334) |
| **Remote backend probe toggle (opt-out)** | [#72423](https://github.com/NousResearch/hermes-agent/pull/72423) | P3 | Medium — reduces prompt-build latency for Docker/SSH/Modal backends |
| **Trusted scheduled-run hooks for cron** | [#93977](https://github.com/NousResearch/hermes-agent/pull/93977) | P3 | Medium — generic runtime seams for cron adapters |
| **Expose active provider in runtime footer** | [#95135](https://github.com/NousResearch/hermes-agent/pull/95135) | P3 | High — small, independent, user-facing |

**Strongest signals**: pt-BR i18n (near-ready PR), Chat Width setting (trivial UI), Authority Execution Layer (architectural direction with active PR), cold-archive CLI (user-requested).

---

## 7. User Feedback Summary — Pain Points & Use Cases

| Pain Point | Evidence | Impact |
|------------|----------|--------|
| **macOS updates break permissions** | #52010 (21 comments), #91115 (9 comments), #95131 (salvage PR) | Every desktop update requires manual FDA/keychain re-grant — high friction for daily users |
| **Windows update UX broken without Edge** | #84678 (4 comments), #87703 (6 comments, fixed) | Progress UI minimized; cua-driver install hangs 11 min |
| **Local LLM streaming unreliable** | #87697 (11 comments), #95054 (2 comments) | Ollama users hit 1.5s cancellation + token loop; fallback chains silent |
| **Session/message loss on reconnect** | #90428 (5 comments, fixed), #93937 (5 comments), #79005 (3 comments) | WS detach + reconnect drops messages silently; profile swap routes to wrong backend |
| **Cron/Bots pane regressions** | #94516 (6 comments, fixed), #94471 (3 comments, fixed), #94483 (2 comments, fixed) | Routines pane crashes or shows "unavailable" despite bots in roster |
| **Provider compatibility gaps** | #95003 (9 comments, 👍7), #94859 (2 comments) | xAI blocks `tool_search`; MCP stdio flaky after restart |
| **Tool output truncation** | #16520 (10 comments, 👍2, fixed) | Long lines truncated with `...` → model thinks file corrupted |
| **Slack streaming duplicates** | #93617 (3 comments, fixed), #94435 (2 comments) | Concurrent turns clobber streams → duplicate messages |

**Positive signals**: pt-BR localization effort (community-driven, 3,400+ lines), active PR reviews on architectural pieces (#95101, #94350), quick turnaround on desktop regressions (3 cron/routine fixes merged today).

---

## 8. Backlog Watch — Long-Unanswered Important Items

| Item | Age | Component | Why It Matters |
|------|-----|-----------|----------------|
| [#66616](https://github.com/NousResearch/hermes-agent/issues/66616) Skills index stale/degraded | **39 days** (opened 2026-07-18) | `tool/skills`, automation | Skills Hub docs depend on index; cron only runs 6/18 UTC — 29

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-08-26

## 1. Today's Overview
PicoClaw shows moderate maintenance activity with 4 issues and 1 pull request updated in the last 24 hours, though no new releases have been published. The project is currently addressing three distinct bugs—Web UI input latency, MCP server failure handling, and Slack media uploads—while a new feature proposal for lightweight edge-device workers has been opened. All active items remain open, indicating ongoing triage rather than resolution. Community engagement is modest, with the two oldest bugs each accumulating 7 comments and 1 reaction.

## 2. Releases
No new releases in the last 24 hours. The latest published version remains 0.3.1 (referenced in Issue #3281).

## 3. Project Progress
No PRs were merged or closed today. The single open PR (#3340) targets the Slack media upload bug (#3338) but has not yet been reviewed or merged.

## 4. Community Hot Topics
| Item | Type | Comments | Reactions | Summary |
|------|------|----------|-----------|---------|
| [#3281](https://github.com/sipeed/picoclaw/issues/3281) | Bug | 7 | 👍 1 | Web UI chat input becomes severely laggy as session history grows. Affects core UX for long conversations. |
| [#3269](https://github.com/sipeed/picoclaw/issues/3269) | Bug | 7 | 👍 1 | MCP server connection failure hangs the entire agent loop, freezing the chat interface. Critical reliability issue for tool-using agents. |
| [#3338](https://github.com/sipeed/picoclaw/issues/3338) | Bug | 2 | — | Slack media uploads fail with `file size cannot be 0` because `FileSize` is not set in upload parameters. |
| [#3340](https://github.com/sipeed/picoclaw/pull/3340) | PR | — | — | Fix for #3338: sets `FileSize` on Slack upload parameters. Awaiting review. |

**Underlying needs**: Users require a responsive Web UI for extended sessions, robust agent-loop error handling when external MCP servers fail, and functional Slack integration for media sharing.

## 5. Bugs & Stability
| Severity | Issue | Description | Fix PR |
|----------|-------|-------------|--------|
| **High** | [#3269](https://github.com/sipeed/picoclaw/issues/3269) | Agent loop hangs indefinitely on MCP connection failure, blocking all user interaction. | None |
| **High** | [#3281](https://github.com/sipeed/picoclaw/issues/3281) | Web UI input latency scales poorly with chat history length, degrading usability. | None |
| **Medium** | [#3338](https://github.com/sipeed/picoclaw/issues/3338) | Slack media uploads rejected by SDK due to missing `FileSize` parameter. | [#3340](https://github.com/sipeed/picoclaw/pull/3340) (open) |

## 6. Feature Requests & Roadmap Signals
- **Lightweight worker mode for edge devices** ([#3345](https://github.com/sipeed/picoclaw/issues/3345)): Proposal to run PicoClaw as a low-footprint worker on resource-constrained hardware (RISC-V/ARM/MIPS boards, old phones, 10–20 MB RAM), coordinated by a stronger central PC. Aligns with PicoClaw’s existing focus on diverse hardware support and distributed agent architectures. No maintainer response yet; likely a candidate for future roadmap if architectural feasibility is confirmed.

## 7. User Feedback Summary
- **Pain points**: 
  - Unusable Web UI for long chat sessions (input lag).
  - Complete chat freeze when an MCP server is unreachable—no fallback or timeout visible to user.
  - Broken Slack media sharing, a blocker for teams using that integration.
- **Use cases**: Long-running assistant sessions, multi-tool agent workflows via MCP, Slack-based collaboration, and emerging interest in deploying PicoClaw on fleets of low-end edge devices.
- **Sentiment**: Frustration on reliability bugs (#3269, #3281); constructive on Slack fix (PR provided by reporter); exploratory optimism on edge-worker proposal.

## 8. Backlog Watch
| Item | Age | Status | Why It Needs Attention |
|------|-----|--------|------------------------|
| [#3281](https://github.com/sipeed/picoclaw/issues/3281) | 36 days | Open, stale-tagged | Core UX regression; affects all Web UI users with non-trivial history. No fix PR. |
| [#3269](https://github.com/sipeed/picoclaw/issues/3269) | 37 days | Open | Critical reliability hole in agent loop; no workaround documented. No fix PR. |
| [#3340](https://github.com/sipeed/picoclaw/pull/3340) | 9 days | Open, stale-tagged | Ready fix for Slack media uploads; awaiting maintainer review/merge. |
| [#3345](https://github.com/sipeed/picoclaw/issues/3345) | 1 day | Open | Strategic feature proposal; early feedback could shape architecture for edge deployment. |

---
*Digest generated from GitHub data as of 2026-08-26. All links point to live GitHub items.*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-08-26

---

## 1. Today's Overview

NanoClaw shows **high development velocity** with 50 PRs updated in the last 24 hours (16 merged/closed, 34 open) and 5 new issues filed — all on 2026-08-25. The project is in an active **refactoring and hardening phase**: multiple core-team PRs target the agent runner, Slack adapter, Codex/OpenCode integrations, setup wizard, and container lifecycle. No new release was cut today. Issue volume is modest but surfaces **security-relevant bugs** (shell injection in `add-dial`, secret leakage in setup) and **architectural gaps** (skill refresh overwriting local adapters, per-agent scoping not covering future agents). Overall health: **strong contributor engagement, critical bugs being addressed, but several regressions introduced by recent refactors need fixes before next release.**

---

## 2. Releases

**No new releases today.** The last release data is not provided in the 24h window.

---

## 3. Project Progress — Merged / Closed PRs (2026-08-25)

| PR | Title | Area | Status |
|----|-------|------|--------|
| [#3544](https://github.com/nanocoai/nanoclaw/pull/3544) | fix(slack): add explicit room handoffs | Slack adapter | **Closed** (duplicate of #3545) |
| [#3540](https://github.com/nanocoai/nanoclaw/pull/3540) | fix(opencode): run the agent session in the agent workspace | OpenCode integration | **Closed** |
| [#3539](https://github.com/nanocoai/nanoclaw/pull/3539) | refactor(codex): keep the spec, drop the duplicated composer | Codex integration | **Closed** |
| [#3537](https://github.com/nanocoai/nanoclaw/pull/3537) | refactor(codex): keep the spec, drop the duplicated composer | Codex integration | **Closed** (duplicate of #3539) |
| [#3536](https://github.com/nanocoai/nanoclaw/pull/3536) | fix(compose): inline every instruction source into one project document | Agent composer / CLAUDE.md | **Closed** |
| [#2656](https://github.com/nanocoai/nanoclaw/pull/2656) | fix(add-mnemon): run mnemon setup in index.ts main(), not entrypoint.sh | Mnemon skill / container entrypoint | **Closed** |

**Key advances:**
- **Slack room handoffs** redesigned with explicit tools, mention validation, and no auto-mention on room creation (#3545 open, #3544 closed as duplicate).
- **OpenCode** now runs in the correct workspace (`/workspace/group/agent`), fixing project-document resolution (#3540).
- **Codex** composer deduplicated — single shared composer replaces divergent copies, fixing `cli_scope: disabled` command leakage (#3539).
- **Project document composition** inlined into a single file, bypassing `@` import security gate added by Claude Code update (#3536).
- **Mnemon skill** setup moved from overridden `entrypoint.sh` to `main()` so hooks actually register (#2656).

---

## 4. Community Hot Topics — Most Active Issues & PRs

| Item | Type | Activity Signal | Underlying Need |
|------|------|-----------------|-----------------|
| [#3543](https://github.com/nanocoai/nanoclaw/issues/3543) | Issue | New (0 comments, 0 👍) | **Security**: `owner_email` interpolated unquoted into `bash -c` — apostrophes break sign-in; shell metacharacters pass validation. Affects two dial skills. |
| [#3538](https://github.com/nanocoai/nanoclaw/issues/3538) | Issue | New (0 comments, 0 👍) | **Architecture**: Run NanoClaw containers on **household edge devices** (idle PCs, NAS, home servers) as opt-in workers — avoid cloud GPU costs. |
| [#3535](https://github.com/nanocoai/nanoclaw/issues/3535) | Issue | New (0 comments, 0 👍) | **Ops regression**: `add-vercel` rsyncs skill copies into every session dir, blocking spawn-time symlink sync and pinning groups to stale skills. |
| [#3532](https://github.com/nanocoai/nanoclaw/issues/3532) | Issue | New (0 comments, 0 👍) | **Authorization gap**: Per-agent tool scoping (`add-dial-tool`) only covers *existing* groups; newly created groups get the tool by default. |
| [#3529](https://github.com/nanocoai/nanoclaw/issues/3529) | Issue | New (0 comments, 0 👍) | **Upgrade safety**: `update-nanoclaw` skill refresh treats *all* channel imports as skill-sourced — overwrites/validates local adapters with no opt-out. |
| [#3311](https://github.com/nanocoai/nanoclaw/pull/3311) | PR | Updated today, created 2026-08-18 | **Reliability**: Route scheduled-task errors to operator (not as chat messages with missing routing fields). Fixes #3223. |
| [#3484](https://github.com/nanocoai/nanoclaw/pull/3484) | PR | Updated today, core-team | **Security**: Setup wizard pasted secrets (OAuth tokens, API keys) passed via `argv` — visible to `ps`/audit logs. Move to stdin/env. |
| [#3298](https://github.com/nanocoai/nanoclaw/pull/3298) | PR | Updated today, core-team, feature+skill | **DX**: Add **local web chat** channel — zero external account needed for first message / demo / local agent access. |
| [#2431](https://github.com/nanocoai/nanoclaw/pull/2431) | PR | Updated today, created 2026-05-12 | **Slack UX**: Conditional threading — DMs top-level, channels threaded. Long-standing (3+ months), still open. |

**Pattern:** Security hardening (secrets, shell injection), edge deployment demand, and skill/upgrade friction dominate. Several PRs (#3484, #3485, #3486, #3487) form a **setup wizard overhaul** — structured driver protocol, preseed catalog, timezone preseed, secret handling.

---

## 5. Bugs & Stability — Reported Today (Ranked by Severity)

| Severity | Issue | Description | Fix PR? |
|----------|-------|-------------|---------|
| **Critical** | [#3543](https://github.com/nanocoai/nanoclaw/issues/3543) | **Shell injection**: `owner_email` substituted unquoted into `bash -c` in two dial skills. Apostrophe emails break sign-in; metacharacters (`;`, `&&`, `$()`) pass regex validation and execute. | No PR yet |
| **High** | [#3484](https://github.com/nanocoai/nanoclaw/pull/3484) | **Secret leakage**: Setup wizard passes pasted OAuth tokens/API keys via command-line args (`onecli secrets create --value <token>`) — visible in process table, logs, audit. | **Yes** — #3484 (open) |
| **High** | [#3535](https://github.com/nanoclaw/nanoclaw/issues/3535) | **Stale skills pinned**: `add-vercel` rsyncs real copies into session dirs, blocking symlink sync at spawn. Groups stuck on old skill versions. | No PR yet |
| **Medium** | [#3532](https://github.com/nanocoai/nanoclaw/issues/3532) | **Authorization bypass**: Per-agent tool scoping doesn't cover groups created *after* scoping — new groups get tool by default. | No PR yet |
| **Medium** | [#3529](https://github.com/nanocoai/nanoclaw/issues/3529) | **Upgrade breaks local adapters**: Skill refresh validates/overwrites user-written adapters in `src/channels/index.ts` with no opt-out. | No PR yet |
| **Medium** | [#3311](https://github.com/nanoclaw/nanoclaw/pull/3311) | Scheduled-task errors written as chat messages with missing routing fields → delivery failures. | **Yes** — #3311 (open, fixes #3223) |

---

## 6. Feature Requests & Roadmap Signals

| Signal | Source | Likelihood for Next Version |
|--------|--------|----------------------------|
| **Household edge workers** — run containers on user-owned idle hardware (PCs, NAS, home servers) as opt-in pool | [#3538](https://github.com/nanocoai/nanoclaw/issues/3538) | **Medium** — architectural, needs scheduler / resource discovery / auth |
| **Local web chat channel** — zero-config, no external account, for demos & local access | [#3298](https://github.com/nanoclaw/nanoclaw/pull/3298) | **High** — core-team, feature+skill label, active |
| **Structured setup driver protocol** (`nanoclaw.driver.v1`) — programmatic install/preseed without terminal scraping | [#3485](https://github.com/nanoclaw/nanoclaw/pull/3485) | **High** — core-team, part of setup overhaul |
| **Preseed catalog CLI** (`--catalog-preseeds`) — expose all settings, types, validation for automation | [#3486](https://github.com/nanoclaw/nanoclaw/pull/3486) | **High** — core-team, pairs with #3485 |
| **Timezone preseed** (`--tz`) — skip interactive TZ detection in CI/automation | [#3487](https://github.com/nanoclaw/nanoclaw/pull/3487) | **High** — core-team, small scope |
| **Conditional Slack threading** (DMs=top-level, channels=threaded) | [#2431](https://github.com/nanoclaw/nanoclaw/pull/2431) | **Low-Medium** — 3+ months open, UX polish |
| **Explicit Slack room handoff tool** with mention validation | [#3545](https://github.com/nanoclaw/nanoclaw/pull/3545) | **High** — core-team, active, replaces auto-mention behavior |

**Prediction:** Next version will likely ship the **setup wizard overhaul** (#3484–#3487), **local web chat** (#3298), **Slack room handoffs** (#3545), and the **composer/inlining fixes** (#3536, #3539, #3540). Edge worker (#3538) is a larger initiative — may land as experimental flag.

---

## 7. User Feedback Summary — Pain Points & Use Cases

| Pain Point | Evidence | Impact |
|------------|----------|--------|
| **Shell injection in dial skills** — users with apostrophe emails (`o'connor@example.com`) cannot sign in; metacharacters execute | [#3543](https://github.com/nanocoai/nanoclaw/issues/3543) | Blocks onboarding; security risk |
| **Secrets exposed in process table** during setup — pasted tokens visible to other users/processes | [#3484](https://github.com/nanoclaw/nanoclaw/pull/3484) | Security compliance blocker for shared machines |
| **Skill upgrades overwrite local work** — no way to protect custom adapters during `update-nanoclaw` | [#3529](https://github.com/nanoclaw/nanoclaw/issues/3529) | Discourages customization; upgrade fear |
| **Stale skills after `add-vercel`** — rsync copies break symlink-based sync, groups pinned to old versions | [#3535](https://github.com/nanoclaw/nanoclaw/issues/3535) | Silent drift; debugging nightmare |
| **Tool scoping doesn't cover future agents** — new groups get tools they shouldn't | [#3532](https://github.com/nanoclaw/nanoclaw/issues/3532) | Authorization model incomplete |
| **No local-only channel** — every channel requires external account (Slack, Discord, etc.) | [#3298](https://github.com/nanoclaw/nanoclaw/pull/3298) | High friction for eval, demo, air-gapped use |
| **Setup wizard not automatable** — requires interactive terminal, no structured input/output | [#3485](https://github.com/nanoclaw/nanoclaw/pull/3485) | Blocks CI/CD, infrastructure-as-code |

**Positive signals:** Core team actively merging refactors (composer, OpenCode, Codex, project document). Contributors submitting fixes for long-standing issues (mnemon entrypoint #2656). Setup overhaul shows investment in **operational maturity**.

---

## 8. Backlog Watch — Stale / Needing Maintainer Attention

| Item | Age | Why It Matters |
|------|-----|----------------|
| [#2431](https://github.com/nanoclaw/nanoclaw/pull/2431) | **106 days** (opened 2026-05-12) | Conditional Slack threading — UX improvement, ready for review, still open. Low complexity, high user visibility. |
| [#2656](https://github.com/nanoclaw/nanoclaw/pull/2656) | **87 days** (opened 2026-05-31) | **Just closed today** — mnemon setup never ran due to entrypoint override. Fix validates the "skills in entrypoint.sh" pattern is broken. |
| [#3223](https://github.com/nanoclaw/nanoclaw/issues/3223) | Referenced by #3311 | Scheduled-task error routing — root cause of #3311. Should verify fix covers all task error paths. |
| [#3538](https://github.com/nanoclaw/nanoclaw/issues/3538) | New | Edge worker proposal — strategic direction. Needs architecture discussion / RFC before implementation. |
| [#3529](https://github.com/nanoclaw/nanoclaw/issues/3529) | New | Upgrade safety — affects all custom adapter users. Should gate next release until opt-out/protection exists. |

---

## Summary Metrics (24h)

| Metric | Value |
|--------|-------|
| Issues opened | 5 |
| PRs opened | ~34 (net open) |
| PRs merged/closed | 16 |
| Security-relevant items | 3 (#3543, #3484, #3532) |
| Core-team PRs active | 8+ |
| Zero-comment issues | 5/5 (all new) |

**Health indicator:** 🟢 **Active development** • 🟡 **Critical bugs unpatched** • 🟢 **Architectural refactors landing** • 🔴 **No release candidate visible**

---

*Digest generated from GitHub API data for nanocoai/nanoclaw on 2026-08-26. All links point to live GitHub items.*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

⚠️ Summary generation failed.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-08-26

## 1. Today's Overview
IronClaw shows **high velocity across multiple workstreams** with 60 total items updated (37 issues, 23 PRs) in 24 hours. The project is executing a **coordinated multi-epic push** spanning WebUI design system maturation (Phases 1–5), notification inbox durability, CI/CD pipeline modernization (cargo-nextest adoption), and agent/runtime performance fixes. No new release was cut today, but 10 PRs merged/closed signal substantial integration progress. The backlog reflects a **product hardening phase** — fixing regressions (device linking, log hangs, agent-loop stalls) while laying foundations for v1.4.0 roadmap items (persistent sandboxes, Slack bridge, remote workers).

---

## 2. Releases
**No new releases published today.** The latest release data shows zero new versions. The v1.4.0 roadmap epics (#7732, #7781, #7782, #4625, #7871) remain open and actively developed.

---

## 3. Project Progress — Merged/Closed PRs (10 items)

| PR | Title | Scope | Status |
|----|-------|-------|--------|
| [#7894](https://github.com/nearai/ironclaw/pull/7894) | ci: reduce required scope checkout transfer | CI optimization | **Closed** |
| [#7816](https://github.com/nearai/ironclaw/pull/7816) | feat(webui): add refresh and connect entries to OOBE suggestion drawer | WebUI onboarding | **Closed** |
| [#7861](https://github.com/nearai/ironclaw/pull/7861) | fix(extensions): restore device-link guidance on install/activate paths | Extensions/Telegram | **Closed** |
| [#7820](https://github.com/nearai/ironclaw/pull/7820) | test: scope-isolation suite consolidation probe (T2 follow-up) | CI/testing | **Closed** |
| [#7809](https://github.com/nearai/ironclaw/pull/7809) | ci: canonical preflight — one gate list, worktree-safe hooks, self-printing REPRO (T4) | CI/preflight | **Closed** |
| [#7819](https://github.com/nearai/ironclaw/pull/7819) | ci: PR/queue check convergence — planner drift guard, default-features clippy on PRs (T3) | CI/convergence | **Closed** |
| [#7846](https://github.com/nearai/ironclaw/pull/7846) | refactor(notifications): retire legacy approval fallback | Notifications/Inbox | **Closed** |
| [#7817](https://github.com/nearai/ironclaw/pull/7817) | ci: nextest test pipeline, full-failure signal, PR unthrottle (T2) | CI/nextest | **Closed** |
| [#7799](https://github.com/nearai/ironclaw/issues/7799) | CI expedite T2: nextest pipeline, full-failure signal, PR unthrottle | CI epic | **Closed** (issue) |
| [#7687](https://github.com/nearai/ironclaw/issues/7687) | Epic: Generalize WebUI notification center into durable user inbox | Notifications epic | **Closed** (issue) |
| [#7706](https://github.com/nearai/ironclaw/issues/7706) | Remove notification approval compatibility fallback | Notifications cleanup | **Closed** (issue) |

**Key advances today:**
- **CI modernization complete**: Nextest pipeline operational with full-failure signal, PR unthrottling, and canonical preflight gates (#7817, #7809, #7819, #7894).
- **Notification inbox durable**: Legacy approval fallback removed; inbox now exclusive source for notifications (#7846, #7687, #7706).
- **Device-link UX fixed**: Restored guidance on install/activate paths for Telegram/extensions (#7861).
- **OOBE suggestions enhanced**: Refresh/connect actions added to onboarding drawer (#7816).

---

## 4. Community Hot Topics — Most Active Issues/PRs

| Item | Type | Comments | 👍 | Core Need |
|------|------|----------|-----|-----------|
| [#7732](https://github.com/nearai/ironclaw/issues/7732) | Issue (Epic) | 9 | 0 | **Persistent per-user sandbox** via iron-proxy; defer loop executors — v1.4.0 roadmap blocker |
| [#7799](https://github.com/nearai/ironclaw/issues/7799) | Issue (CI) | 4 | 0 | **CI expedite T2** — nextest pipeline, full-failure signal, PR unthrottle (now closed) |
| [#7038](https://github.com/nearai/ironclaw/issues/7038) | Issue (Epic) | 3 | 0 | **Design System Phase 1** — Storybook integration & catalog (re-scoped) |
| [#7862](https://github.com/nearai/ironclaw/issues/7862) | Issue (Bug) | 3 | 0 | **Device link fails** with generic error when `telegram_api_id/api_hash` unconfigured |
| [#7891](https://github.com/nearai/ironclaw/issues/7891) | Issue (Perf) | 2 | 0 | **Extensions perf**: unprojected capability payloads + 24 KiB head-slice cost 14.3s inference on 2 emails |
| [#7781](https://github.com/nearai/ironclaw/issues/7781) | Issue (Epic) | 2 | 0 | **Design System Phases 2–3** — DESIGN.md governance + theme update & UI reskin |
| [#7491](https://github.com/nearai/ironclaw/pull/7491) | PR (XL) | — | 0 | **OMP core-tool contract** + engines + benchmark arm (coding tools unification) |

**Underlying needs:**  
- **Sandbox persistence** (#7732) is the top infrastructure blocker for v1.4.0 — current Docker-per-command model is unsustainable.  
- **Design system consolidation** (#7038, #7781, #7782) spans 5 phases; Phase 1 (Storybook) is live, Phases 2–3 (governance/reskin) and 4–5 (agentic components) are parallel tracks.  
- **Extension/runtime performance** (#7891, #7892) reveals prompt bloat and agent-loop pathologies costing 100s+ seconds per run.  
- **CI stability** (#7799) is being aggressively hardened — nextest adoption, failure visibility, and queue convergence are near-complete.

---

## 5. Bugs & Stability — Reported Today (Ranked by Severity)

| Severity | Issue | Description | Fix PR |
|----------|-------|-------------|--------|
| **High** | [#7888](https://github.com/nearai/ironclaw/issues/7888) | **Getting logs hangs indefinitely** on multiple instances — confirmed by two users on separate deployments. | None yet |
| **High** | [#7892](https://github.com/nearai/ironclaw/issues/7892) | **Agent-loop stall**: deferred tool found 15×, never invoked — 123s run with 4 distinct calls, no terminating guard. | None yet |
| **Medium** | [#7891](https://github.com/nearai/ironclaw/issues/7891) | **Extensions perf regression**: 49 KB raw MIME headers pushed unasked → 19.2s model inference on 2 `gmail.get_message` calls. | None yet |
| **Medium** | [#7862](https://github.com/nearai/ironclaw/issues/7862) | **Device link fails** with generic "Something went wrong" when `telegram_api_id/api_hash` unconfigured (Railway QA). | [#7861](https://github.com/nearai/ironclaw/pull/7861) **Closed** (partial — install/activate paths only) |
| **Medium** | [#7887](https://github.com/nearai/ironclaw/issues/7887) | **Extension lookup path improvises** device-link setup instructions (Telegram surface) — split from #7861. | None yet |
| **Low** | [#7890](https://github.com/nearai/ironclaw/issues/7890) | **app.css Tailwind colour-alias compat layer** (~100 lines) blocks WS3b reskin — technical debt. | None yet |
| **Low** | [#7870](https://github.com/nearai/ironclaw/issues/7870) | **Missing i18n** across exposed WebUI routes — 13 `chat.oobe.*` strings + `common.back/continue` unlocalized in 10 locales. | [#7877](https://github.com/nearai/ironclaw/pull/7877) **Open** |

**Critical gaps:**  
- **Log ingestion hang (#7888)** and **agent-loop livelock (#7892)** have no fix PRs — both can wedge user sessions indefinitely.  
- **Device-link UX (#7862, #7887)** partially fixed in #7861 but root cause (missing config validation + actionable error) remains.  
- **Extension prompt bloat (#7891)** is a performance regression with measurable 14s+ inference penalty.

---

## 6. Feature Requests & Roadmap Signals

| Request | Source | Likelihood for v1.4.0 | Rationale |
|---------|--------|------------------------|-----------|
| **Persistent per-user sandbox with iron-proxy** | [#7732](https://github.com/nearai/ironclaw/issues/7732) (Epic) | **Very High** | Explicit v1.4.0 roadmap epic; 9 comments; core infra blocker |
| **Slack-to-console bridge + rich interactive Slack UX** | [#7871](https://github.com/nearai/ironclaw/issues/7871) (Epic) | **High** | New epic today; addresses "thin chat transport" gap; operator demand |
| **Slack channel-routed personal/team agents** | [#4625](https://github.com/nearai/ironclaw/issues/4625) (Epic) | **Medium** | Long-standing (Jun 2026); Phase 1 "Slack-as-channel" defined |
| **Remote edge workers for scheduler/orchestrator** | [#7889](https://github.com/nearai/ironclaw/issues/7889) (RFC) | **Medium** | RFC stage; extends worker pool beyond single host; operator need |
| **Per-automation lessons file (memory)** | [#7893](https://github.com/nearai/ironclaw/issues/7893) | **Medium** | New today; solves "every run starts from zero" for scheduled automations |
| **Personality (agent.md) editor in Settings UI** | [#7895](https://github.com/nearai/ironclaw/issues/7895) | **Medium** | User-reported pain point; low implementation complexity |
| **Voice-to-text in WebUI composer** | [#7867](https://github.com/nearai/ironclaw/issues/7867) (Epic) | **Low** | Epic scoped; model tier not blocker; UX parity with Slack/Telegram |
| **OpenSSF Scorecard workflow** | [#7885](https://github.com/nearai/ironclaw/issues/7885) / [#7886](https://github.com/nearai/ironclaw/pull/7886) | **High** | PR open; security posture; low risk; likely in next CI release |

**Predicted v1.4.0 inclusions:** Persistent sandbox (#7732), Design System Phases 1–3 (#7038, #7781), Notification inbox durability (#7687), CI nextest pipeline (#7799), Slack channel routing Phase 1 (#4625), OpenSSF Scorecard (#7886).

---

## 7. User Feedback Summary

| Pain Point | Evidence | Impact |
|------------|----------|--------|
| **Personality setup difficulty** | [#7895](https://github.com/nearai/ironclaw/issues/7895): "me trying to set up personality with ironclaw… would be nice to have a section where I can do that" | Onboarding friction; direct Settings UI request |
| **Device linking opacity** | [#7862](https://github.com/nearai/ironclaw/issues/7862): Generic "Something went wrong" when Telegram credentials missing — no actionable guidance | Blocks Telegram integration; QA-reproduced |
| **Log access broken** | [#7888](https://github.com/nearai/ironclaw/issues/7888): "attempting to get logs gets stuck indefinitely" — confirmed on 2 instances | Operational blind spot; affects debugging |
| **Agent runs stall silently** | [#7892](https://github.com/nearai/ironclaw/issues/7892): 123s run with 31 capability calls, 4 distinct pairs, no terminating guard | Wasted compute; user perception of "broken agent" |
| **Extension prompt bloat** | [#7891](https://github.com/nearai/ironclaw/issues/7891): 2 email fetches → 19.2s inference from 49 KB unrequested MIME headers | Cost/latency surprise; trust erosion |
| **WebUI loading states missing** | [#7880](https://github.com/nearai/ironclaw/issues/7880): Notification Center Suspense boundary renders no fallback | Perceived slowness; no visual feedback |
| **Non-English WebUI routes broken** | [#7870](https://github.com/nearai/ironclaw/issues/7870): 13 OOBE strings + common actions unlocalized in 10 locales | i18n regression; blocks international users |

**Satisfaction signals:**  
- Active dogfooding on Railway QA (#7862) and multiple instances (#7888) shows real deployment usage.  
- OOBE suggestions now end-to-end on `main` (#7815) — onboarding flow closing gaps.  
- Design system Phase 1 (Storybook) live — visual regression surface operational (#7831).

---

## 8. Backlog Watch — Long-Unanswered / Needing Maintainer Attention

| Item | Age | Status | Why It Matters |
|------|-----|--------|----------------|
| [#4625](https://github.com/nearai/ironclaw/issues/4625) | **79 days** (since 2026-06-09) | Open, 1 comment | **Slack channel-routed agents** — foundational channel strategy; only 1 comment in 2.5 months; needs product/eng alignment |
| [#7732](https://github.com/nearai/ironclaw/issues/7732) | **8 days** | Open, 9 comments | **Persistent sandbox epic** — v1.4.0 blocker; high comment count but no child PRs visible; needs architectural decision on iron-proxy integration |
| [#7491](https://github.com/nearai/ironclaw/pull/7491) | **15 days** | Open (XL) | **OMP core-tool contract** — massive coding tools unification; "removed rather than hidden behind flag"; needs review bandwidth |
| [#7516](https://github.com/nearai/ironclaw/pull/7516) | **14 days** | Open (XL) | **IronHub agent link operator surface** — WebUI gap for hub registration; new contributor; needs security/UX review |
| [#788

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-08-26

## 1. Today's Overview
LobsterAI shows **high velocity** with 2 releases in 5 days and 9 PRs merged/closed in the last 24 hours. The team is actively polishing the **Library/Artifacts system** (local artifact lifecycle, preview UX, background refresh stability), rolling out a **Plan Model Catalog** in Settings, and hardening **analytics/attribution** for library-to-subscription conversion. Only 1 new community issue appeared (WeChat group capacity), indicating stable external feedback channels. Two long-running dependabot PRs and a March session-fork feature PR remain open, suggesting backlog triage capacity is focused on near-term delivery.

## 2. Releases

### LobsterAI 2026.8.25
**Key changes:**
- **Library/Artifacts overhaul** (PRs #2513, #2524, #2531, #2533): Cross-platform thumbnail generation, local artifact lifecycle management, preview UX differentiation (HTML pages vs. local services with distinct icons/labels), and a major fix for background-refresh flicker — now uses incremental merge, batched IPC queries, and preserves scroll/filter/pagination state.
- **Analytics & attribution** (PR #2529): Added library impression/filter/search/preview/favorite/refresh events; search length/result counts via range buckets (no raw query capture); funnel linking library → file share → paywall; 7-day last-touch attribution from publish CTA to subscription; retry/cleanup on logout/opt-out.
- **UX polish** (PR #2532): Sidebar login promo tip auto-fades after 5s; timers cleaned on auth change.

**Breaking changes / migration notes:** None explicitly noted. The artifact type split (HTML vs. local service) may affect any downstream consumers of artifact metadata — verify icon/label logic if integrating.

### LobsterAI 2026.8.21
**Key changes:**
- **DSH (Data Science Helper) analytics** (PR #2515): Usage tracking for enable-toggle and workbench-open events.
- **DSH version bump** to 0.1.1-rc.1 (PR #2516).
- **Refactor**: Usage analytics moved to dedicated module.

## 3. Project Progress (Merged/Closed PRs — 2026-08-25)

| PR | Area | Summary | Link |
|----|------|---------|------|
| #2535 | renderer, settings | Plan Model Catalog tab added above custom models; loads pricing catalog for text/image/video models; sticky category controls; lightweight diagnostics | [#2535](https://github.com/netease-youdao/LobsterAI/pull/2535) |
| #2534 | renderer, docs, main, cowork, im, artifacts | Release branch for 2026.8.20 (meta-PR) | [#2534](https://github.com/netease-youdao/LobsterAI/pull/2534) |
| #2533 | renderer, docs, artifacts | Artifact type split: HTML pages (code icon, “网页”, browser open) vs. Local services (globe icon, “本地服务”); synced directory icons/labels; added HTM icon mapping, i18n, policy tests; updated preview card design doc | [#2533](https://github.com/netease-youdao/LobsterAI/pull/2533) |
| #2532 | renderer | Sidebar free-token promo tip fades after 5s; timers cleaned on auth change | [#2532](https://github.com/netease-youdao/LobsterAI/pull/2532) |
| #2531 | renderer, main, library | Fixed library background-refresh flicker: split load/refresh/append states; merged history backfill + file-watch events with concurrency limit; added batch query by material ID for targeted updates; in-place merge preserves filters/pagination/scroll; delete task carries affected material IDs for group rollback; added refresh coordination, query state, IPC, local storage tests | [#2531](https://github.com/netease-youdao/LobsterAI/pull/2531) |
| #2530 | renderer, main, settings | Duplicate of #2535 (Plan Model Catalog) — likely merged via #2535 | [#2530](https://github.com/netease-youdao/LobsterAI/pull/2530) |
| #2529 | renderer, artifacts, analytics | Library analytics & publish-to-subscription attribution (see release notes) | [#2529](https://github.com/netease-youdao/LobsterAI/pull/2529) |
| #1275 | ci | `actions/stale` 9.1.0 → 10.2.0 | [#1275](https://github.com/netease-youdao/LobsterAI/pull/1275) |
| #1276 | ci | `actions/first-interaction` commit bump | [#1276](https://github.com/netease-youdao/LobsterAI/pull/1276) |

**Net advancement:** Library/Artifacts is now production-grade (stable refresh, clear type semantics, measurable funnels). Settings gains a monetization-facing model catalog. DSH analytics foundation laid.

## 4. Community Hot Topics

| Item | Type | Activity | Signal |
|------|------|----------|--------|
| [#2536](https://github.com/netease-youdao/LobsterAI/issues/2536) | Issue | 1 comment, 0 👍 | **WeChat group full** — users seek alternative community channels (Discord, QQ, GitHub Discussions). Indicates growing Chinese-user base; consider official Discord or GitHub Discussions for scalable support. |
| [#1159](https://github.com/netease-youdao/LobsterAI/pull/1159) | PR (open) | Stale since 2026-03-31, updated 2026-08-25 | **Session Fork** for cowork sessions — users want to branch conversations for experimentation without losing original context. High-value collab feature; likely blocked by review bandwidth. |
| [#1277](https://github.com/netease-youdao/LobsterAI/pull/1277) | PR (open) | Dependabot, Electron 40.2.1 → 43.4.1 | Major Electron version jump; needs compatibility testing (renderer/main API changes, native modules). |

## 5. Bugs & Stability

| Severity | Issue/PR | Description | Fix Status |
|----------|----------|-------------|------------|
| **High** | [#2531](https://github.com/netease-youdao/LobsterAI/pull/2531) | Library background refresh caused full-page skeleton flicker, losing scroll/filter state; file-watch events raced with pagination. | **Fixed & merged** — incremental merge, batched queries, state preservation, targeted update API, comprehensive tests added. |
| **Medium** | [#2533](https://github.com/netease-youdao/LobsterAI/pull/2533) | HTML pages and local services conflated in preview cards (same icon/label, same open behavior). | **Fixed & merged** — type split with distinct icons, labels, open handlers; design doc updated. |
| **Low** | [#2532](https://github.com/netease-youdao/LobsterAI/pull/2532) | Sidebar promo tip persisted indefinitely, timers leaked on auth change. | **Fixed & merged** — 5s auto-fade + cleanup. |

**No new crash reports or regressions** in today’s issue feed.

## 6. Feature Requests & Roadmap Signals

| Feature | Source | Likelihood for Next Version |
|---------|--------|-----------------------------|
| **Session Fork (cowork)** | PR [#1159](https://github.com/netease-youdao/LobsterAI/pull/1159) (Mar 2026) | Medium — high user value, but PR stale; may need rebase/design review. |
| **Electron 43 upgrade** | Dependabot PR [#1277](https://github.com/netease-youdao/LobsterAI/pull/1277) | High — security/maintenance; will land once CI passes. |
| **DSH workbench analytics expansion** | Release 2026.8.21 + PR #2515 | High — initial events shipped; expect richer funnel (code-run, export, error). |
| **Library → Subscription attribution dashboard** | PR #2529 (7-day last-touch) | Medium — data now collected; UI for PMs likely next. |
| **Multi-channel community (Discord/Discussions)** | Issue #2536 | High — low effort, immediate relief for WeChat overflow. |

## 7. User Feedback Summary

- **Pain point:** WeChat community group at capacity — users cannot join for peer support.  
- **Use case signal:** Session Fork request shows power users treating cowork sessions as branching workspaces (research, coding, writing).  
- **Satisfaction indicators:** No bug reports on core chat/model inference; recent PRs focus on *polish* (flicker, promo tips, type clarity) — suggests core loop is stable.  
- **Unspoken need:** Chinese-user dominance (WeChat) vs. English OSS norms — bilingual community infra gap.

## 8. Backlog Watch

| Item | Age | Why It Matters | Recommended Action |
|------|-----|----------------|---------------------|
| [#1159](https://github.com/netease-youdao/LobsterAI/pull/1159) Session Fork | 5 months | Differentiates cowork from linear chat; enables experimentation workflows. | Assign reviewer; schedule design sync; merge or close with rationale. |
| [#1277](https://github.com/netease-youdao/LobsterAI/pull/1277) Electron 43 | 5 months | Security patches, V8 updates, potential breaking API changes. | Run full CI matrix; if green, merge; if red, create spike task. |
| [#1275](https://github.com/netease-youdao/LobsterAI/pull/1275) / [#1276](https://github.com/netease-youdao/LobsterAI/pull/1276) stale CI actions | 5 months | Low risk, but keeps dependabot noise high. | Auto-merge if tests pass; else pin versions. |

---

**Health Score:** 🟢 **Strong** — frequent releases, zero critical bugs, feature velocity focused on monetization (model catalog, attribution) and retention (library UX).  
**Top Risk:** Community channel scaling (WeChat limit) + stale high-value PRs (#1159, #1277) consuming mental bandwidth.  
**Next Watch:** Electron 43 merge, Session Fork decision, Discord/Discussions launch.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-08-26

## 1. Today's Overview
Moltis shows steady development velocity with **5 PRs updated** and **2 issues updated** in the last 24 hours, though no new releases were cut. Activity is concentrated on **sandbox backend expansion** (Kubernetes, Coder), **tool schema hardening** for OpenAI compatibility, and **MCP/OAuth integrations** (Fastmail, Brave Search). One critical bug affecting shared Slack channels was closed without a fix PR visible in today's data, suggesting a configuration or upstream resolution. The project remains in active feature development phase with multiple sandbox backends and provider integrations progressing in parallel.

## 2. Releases
**No new releases** published today. The latest release version is not indicated in the provided data.

## 3. Project Progress — Merged/Closed PRs Today
| PR | Title | Author | Status | Impact |
|----|-------|--------|--------|--------|
| [#1243](https://github.com/moltis-org/moltis/pull/1243) | `fix(cron): preserve delivered channel context` | rubenssoto | **CLOSED** | Fixes follow-up questions losing context when scheduled messages are delivered to WhatsApp/other channels. Cron execution stays isolated, but final delivered text is appended as assistant message to the destination's existing conversation. Resolves history by exact channel ID. |

**Net progress:** One stability fix merged for multi-channel conversation continuity. No feature PRs merged today.

## 4. Community Hot Topics
### Most Active Issues/PRs (by comments/reactions)
| Item | Type | Comments | 👍 | Summary |
|------|------|----------|-----|---------|
| [#1118](https://github.com/moltis-org/moltis/issues/1118) | Issue (Feature) | 2 | 1 | **Kubernetes-native sandbox backend** with `runtimeClassName` support for VM-level isolation (Kata, gVisor). Open since Jun 12, updated today. |
| [#1199](https://github.com/moltis-org/moltis/pull/1199) | PR (Feature) | — | 0 | **Coder remote workspace sandbox** — ephemeral workspaces via REST API, PTY WebSockets, template/preset support. Open since Aug 15, updated today. |
| [#1232](https://github.com/moltis-org/moltis/pull/1232) | PR (Fix) | — | 0 | **OpenAI-safe object schemas** — closes objects with `additionalProperties: false`, fixes webhook patch fields & MCP env vars. Open since Aug 22. |

**Underlying needs:** 
- **Stronger isolation** for untrusted LLM-generated code execution (Kubernetes + `runtimeClassName` = VM-level sandboxing)
- **Cloud IDE integration** (Coder) for remote, reproducible agent environments
- **Provider compliance** — OpenAI's strict schema requirements are forcing schema normalization across tool definitions

## 5. Bugs & Stability
### Bugs Reported/Updated Today
| Issue | Severity | Status | Fix PR? | Summary |
|-------|----------|--------|---------|---------|
| [#1224](https://github.com/moltis-org/moltis/issues/1224) | **High** (tools broken) | **CLOSED** | ❌ No linked PR | **Tools stop working in shared Slack channels**. Author completed preflight checklist, using latest version. No comments or fix visible — may be configuration, upstream Slack API change, or closed as duplicate/not reproducible. |

**Assessment:** One high-severity regression closed without visible fix. Monitor for re-opening or related PRs. No new crash reports or data-loss bugs today.

## 6. Feature Requests & Roadmap Signals
### Active Feature Work (PRs open & updated today)
| PR | Feature Area | Maturity Signal |
|----|--------------|-----------------|
| [#1199](https://github.com/moltis-org/moltis/pull/1199) | **Coder sandbox backend** | Detailed implementation: REST API, PTY WebSockets, templates, presets, TTLs, env aliases, auto backend selection. Docs included. **Likely next release candidate.** |
| [#1118](https://github.com/moltis-org/moltis/issues/1118) | **Kubernetes sandbox + runtimeClassName** | Design phase (issue open 75 days). Strong community signal (👍1). Needed for enterprise/secure workloads. **High priority for 2026 H2.** |
| [#1245](https://github.com/moltis-org/moltis/pull/1245) | **Brave Search parameter validation** | Provider-specific localization params, enum normalization, fallback markets. **Incremental provider hardening.** |
| [#1244](https://github.com/moltis-org/moltis/pull/1244) | **Fastmail MCP OAuth scope registration** | RFC 7591 dynamic client reg, protected-resource scopes, regression test. **MCP compliance push.** |
| [#1232](https://github.com/moltis-org/moltis/pull/1232) | **OpenAI-safe tool schemas** | `additionalProperties: false`, fixed env var entries, webhook patch fields. **Blocker for OpenAI strict mode.** |

**Roadmap prediction:** Next version will likely ship **Coder sandbox** (#1199) and **OpenAI schema fixes** (#1232). Kubernetes sandbox (#1118) is strategic but earlier in lifecycle. MCP/OAuth hardening (#1244) suggests growing enterprise auth requirements.

## 7. User Feedback Summary
| Source | Pain Point / Use Case | Sentiment |
|--------|------------------------|-----------|
| [#1224](https://github.com/moltis-org/moltis/issues/1224) | Tools fail in **shared Slack channels** — breaks collaborative agent workflows | 😞 Frustrated (detailed preflight, no resolution) |
| [#1118](https://github.com/moltis-org/moltis/issues/1118) | Need **VM-isolated sandboxes** for untrusted LLM code in Kubernetes environments | 🎯 Clear enterprise demand |
| [#1199](https://github.com/moltis-org/moltis/pull/1199) | Desire **Coder integration** for remote, standardized dev environments | 👍 Proactive contribution (external contributor `penso`) |
| [#1232](https://github.com/moltis-org/moltis/pull/1232) | **OpenAI strict schema rejection** forcing null/empty values — blocks production use | 🔧 Technical blocker |

**Overall:** Users are pushing for **production-grade isolation** (K8s, Coder), **provider compatibility** (OpenAI, MCP), and **multi-channel reliability** (Slack, WhatsApp). Contributor `penso` driving two significant PRs (#1199, #1244) signals growing external engagement.

## 8. Backlog Watch — Stale/Needing Attention
| Item | Age | Type | Why It Matters |
|------|-----|------|----------------|
| [#1118](https://github.com/moltis-org/moltis/issues/1118) | **75 days** | Feature (K8s sandbox) | Strategic for secure/enterprise adoption. No PR yet. Needs design review or assignment. |
| [#1224](https://github.com/moltis-org/moltis/issues/1224) | **5 days** | Bug (Slack shared channels) | Closed without fix — high risk of regression or user churn. Needs post-mortem or re-open watch. |
| [#1199](https://github.com/moltis-org/moltis/pull/1199) | **11 days** | PR (Coder sandbox) | Comprehensive implementation waiting review. External contributor — maintainer bandwidth needed. |
| [#1232](https://github.com/moltis-org/moltis/pull/1232) | **4 days** | PR (OpenAI schemas) | Unblocks OpenAI strict mode. Low complexity, high impact — should be fast-tracked. |

**Maintainer action items:** 
1. Review/merge #1232 (OpenAI schemas) — quick win
2. Assign reviewer for #1199 (Coder sandbox) — external contributor, high completeness
3. Investigate #1224 closure — ensure not a silent regression
4. Kick off design for #1118 (K8s sandbox) — long-standing, high strategic value

---

**Project Health Indicators**
- ✅ **Active development** (5 PRs/24h)
- ✅ **External contributions** (2/5 PRs from non-core authors)
- ✅ **Multi-provider focus** (Brave, Fastmail, OpenAI, Slack, WhatsApp, Kubernetes, Coder)
- ⚠️ **One high-sev bug closed without fix** — monitor
- ⚠️ **Strategic feature (#1118) stalled 75 days** — needs prioritization

*Data sourced from GitHub API for moltis-org/moltis on 2026-08-26. Links point to live issues/PRs.*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (QwenPaw) Project Digest — 2026-08-26

---

## 1. Today's Overview
CoPaw shows **high velocity** with 84 total GitHub items updated in the last 24 hours (34 issues, 50 PRs). The project released **v2.1.1-beta.3**, indicating active beta iteration toward a stable 2.1.1. The issue/PR ratio (34:50) suggests strong contributor engagement—more PRs than issues means fixes and features are flowing faster than new problems are reported. Critical stability bugs (memory leaks, SSE loops, MCP reconnection failures) dominate open issues, while merged PRs show progress on test coverage (+5pp), security hardening, provider catalog updates, and creator-app enhancements. Overall health: **active development with stability debt being addressed**.

---

## 2. Releases
### v2.1.1-beta.3 (2026-08-25)
| Change | Details |
|--------|---------|
| **Console dependency pin** | `@agentscope-ai/chat` pinned to `1.1.72` ([#7257](https://github.com/agentscope-ai/QwenPaw/pull/7257)) |
| **Loop-engineering docs fix** | Corrected `PluginAPI` → `PluginApi` casing ([#7269](https://github.com/agentscope-ai/QwenPaw/pull/7269)) |
| **Integration test expansion** | (Truncated in feed; likely expands MCP/channel test matrix) |

**Breaking changes**: None noted.  
**Migration notes**: Beta users should pull latest Docker images / reinstall desktop bundles to get the pinned chat dependency and casing fix.

---

## 3. Project Progress (Merged/Closed PRs Today)
| PR | Area | Impact |
|----|------|--------|
| [#7276](https://github.com/agentscope-ai/QwenPaw/pull/7276) | **Deps** | Bumped `agentscope` to `2.0.7` — core framework sync |
| [#7292](https://github.com/agentscope-ai/QwenPaw/pull/7292) | **Testing** | +19 unit test files, +1,148 tests, coverage **58.04% → 63.06%** (+5.02pp); fixed `/root` home-dir classification |
| [#7119](https://github.com/agentscope-ai/QwenPaw/pull/7119) | **Security** | Master key file now created with `0o600` (owner-only) permissions |
| [#7277](https://github.com/agentscope-ai/QwenPaw/pull/7277) | **Providers** | Refreshed Kimi & Aliyun model catalogs (removed retired, added new models) |
| [#7300](https://github.com/agentscope-ai/QwenPaw/pull/7300) | **Docs** | Updated Scroll context manager blog |
| [#7228](https://github.com/agentscope-ai/QwenPaw/issues/7228) | **UI** | Fixed marketplace “Install” button showing on already-installed apps |
| [#7261](https://github.com/agentscope-ai/QwenPaw/issues/7261) | **Critical Bug** | Fixed runaway SSE serialization loop (100% CPU, unbounded memory) after agent-to-agent runs |
| [#7256](https://github.com/agentscope-ai/QwenPaw/issues/7256) | **UI** | Reverted left-menu “市场” → “应用” (more accurate label) |
| [#7279](https://github.com/agentscope-ai/QwenPaw/issues/7279) | **UX** | Deferred: model multi-choice via modal picker (Hermes-style) — marked *Close-and-review-later* |
| [#7263](https://github.com/agentscope-ai/QwenPaw/issues/7263) | **UX** | Deferred: task-complete toast/orange badge — marked *Close-and-review-later* |

**Net momentum**: Strong on test infrastructure, security hygiene, and provider parity; UX polish items deferred to post-2.1.1.

---

## 4. Community Hot Topics (Most Commented/Reactive)

| Item | Type | Comments | 👍 | Core Need |
|------|------|----------|----|-----------|
| [#338](https://github.com/agentscope-ai/QwenPaw/issues/338) | Feature | 9 | 1 | **Webhook API** — external apps want to push messages to CoPaw and receive async callbacks (key + polling) |
| [#7258](https://github.com/agentscope-ai/QwenPaw/issues/7258) | Bug | 6 | 0 | **WeChat Channel “Show Thinking” toggle ignored** — thinking process leaks despite setting OFF |
| [#6524](https://github.com/agentscope-ai/QwenPaw/issues/6524) | Bug | 6 | 0 | **MCP client doesn’t auto-recover after server restart** — stale `mcp-session-id` causes permanent failure until manual `list mcp` |
| [#5720](https://github.com/agentscope-ai/QwenPaw/issues/5720) | Bug | 5 | 0 | **Memory leak v1.1.12** — async task leakage + HTTP session accumulation → 5.5 MB/min growth → OOM kill → config corruption |
| [#6810](https://github.com/agentscope-ai/QwenPaw/issues/6810) | Bug | 5 | 0 | **Windows installer fails to kill locking processes** (browser extension NM host) → multiple “file in use” errors |
| [#7261](https://github.com/agentscope-ai/QwenPaw/issues/7261) | Bug | 4 | 0 | **SSE runaway loop** (fixed in beta.3) — 100% CPU, memory explosion post agent-to-agent |
| [#7013](https://github.com/agentscope-ai/QwenPaw/issues/7013) | Feature | 3 | 0 | **Unified tool panel** — file preview, diff, web preview, interactive terminal in Chat |
| [#7196](https://github.com/agentscope-ai/QwenPaw/issues/7196) | Feature | 3 | 1 | **Default thinking-process collapsed** — visual noise during long runs; want Hermes-style toggle |
| [#7285](https://github.com/agentscope-ai/QwenPaw/issues/7285) | Bug | 3 | 0 | **Long-session browser jank** — 1-2 min generation → 2 s/frame mouse lag, Console still streaming |
| [#7129](https://github.com/agentscope-ai/QwenPaw/issues/7129) | Bug | 2 | 0 | **Console render blocking** — WPR trace confirms Chrome main-thread blocked during dense thinking streaming |

**Pattern**: Users are hitting **production-scale pain points** (MCP reliability, memory, installer, long-session perf) and asking for **integration-grade APIs** (webhooks, tool panel). The thinking-process UI is a recurring UX friction.

---

## 5. Bugs & Stability (Ranked by Severity)

| Severity | Issue | Status | Fix PR / Notes |
|----------|-------|--------|----------------|
| **Critical** | [#7261](https://github.com/agentscope-ai/QwenPaw/issues/7261) SSE runaway loop → 100% CPU / OOM | **Closed** (beta.3) | Fixed in v2.1.1-beta.3 |
| **Critical** | [#5720](https://github.com/agentscope-ai/QwenPaw/issues/5720) Memory leak (async tasks + HTTP sessions) → OOM kill → config corruption | **Closed** (but root cause may persist in 2.x) | No linked PR; user provided detailed RCA — needs verification in 2.1.x |
| **High** | [#6524](https://github.com/agentscope-ai/QwenPaw/issues/6524) MCP client session-id stale after server restart | **Open** | No fix PR; requires reconnection logic + session invalidation |
| **High** | [#7218](https://github.com/agentscope-ai/QwenPaw/issues/7218) `incomplete chunked read` on long responses (180s upstream vs 130-140s client timeout) | **Open** | No fix PR; need configurable response timeout |
| **High** | [#7285](https://github.com/agentscope-ai/QwenPaw/issues/7285) Long-session browser jank (render-thread saturation) | **Open** | Related to [#7129](https://github.com/agentscope-ai/QwenPaw/issues/7129); virtualization / chunked DOM needed |
| **Medium** | [#7258](https://github.com/agentscope-ai/QwenPaw/issues/7258) WeChat Channel “Show Thinking” setting ignored | **Open** | No fix PR; likely console prop not passed to channel renderer |
| **Medium** | [#6810](https://github.com/agentscope-ai/QwenPaw/issues/6810) Windows installer doesn’t kill locking processes | **Open** | No fix PR; NSIS `KillProcess`/`FilesInUse` custom action needed |
| **Medium** | [#7266](https://github.com/agentscope-ai/QwenPaw/issues/7266) SubAgent uses wrong working directory (B instead of A) | **Open** | No fix PR; workspace context propagation bug |
| **Medium** | [#7288](https://github.com/agentscope-ai/QwenPaw/issues/7288) Large MCP results bypass scroll compaction → context overflow | **Open** | No fix PR; needs token-aware truncation in active turn |
| **Low** | [#7282](https://github.com/agentscope-ai/QwenPaw/issues/7282) Markdown list excessive vertical spacing | **Open** | CSS-only fix likely |

**Fix coverage**: 2/10 critical-high bugs have fixes merged; 8 remain open with no linked PRs.

---

## 6. Feature Requests & Roadmap Signals

| Request | Issue | Signals | Likelihood for 2.1.x / 2.2 |
|---------|-------|---------|----------------------------|
| **Webhook / async callback API** | [#338](https://github.com/agentscope-ai/QwenPaw/issues/338) | 9 comments, 1 👍, labeled `good first issue` | **High** — architectural fit, good-first-issue tag |
| **Unified tool panel (preview, diff, terminal)** | [#7013](https://github.com/agentscope-ai/QwenPaw/issues/7013) | 3 comments, affects Core+Console | **Medium** — large scope, may target 2.2 |
| **Default thinking collapsed + toggle** | [#7196](https://github.com/agentscope-ai/QwenPaw/issues/7196) | 3 comments, 1 👍, Hermes reference | **High** — low effort, high UX value |
| **Workspace-scoped Skill preload policy** | [#7182](https://github.com/agentscope-ai/QwenPaw/issues/7182) | 4 comments, `on_demand`/`preload` design | **Medium** — skill system maturation |
| **Model multi-choice modal picker** | [#7279](https://github.com/agentscope-ai/QwenPaw/issues/7279) | 1 comment, deferred | **Low** — marked *Close-and-review-later* |
| **Auto-clear completed background tasks** | [#7280](https://github.com/agentscope-ai/QwenPaw/issues/7280) | 1 comment, setting requested | **Medium** — simple toggle, low risk |
| **Task-complete orange badge / toast** | [#7263](https://github.com/agentscope-ai/QwenPaw/issues/7263) | 1 comment, deferred | **Low** — marked *Close-and-review-later* |
| **Skin gateway / theming** | [#7287](https://github.com/agentscope-ai/QwenPaw/issues/7287) | 1 comment, novel proposal | **Low** — exploratory, no implementation plan |

**Top candidates for next minor**: Webhook API, thinking-collapse default, MCP auto-reconnect, background-task auto-clear.

---

## 7. User Feedback Summary

| Theme | Representative Voices | Sentiment |
|-------|----------------------|-----------|
| **MCP reliability** | “Server restart breaks client permanently; manual `list mcp` required” ([#6524](https://github.com/agentscope-ai/QwenPaw/issues/6524)) | 😡 Frustrated — blocks production use |
| **Memory / stability** | “64 min → 580 MB → OOM kill → config corruption” ([#5720](https://github.com/agentscope-ai/QwenPaw/issues/5720)) | 😡 Critical — data loss risk |
| **Installer UX (Windows)** | “4+ ‘file in use’ dialogs, must force-quit” ([#6810](https://github.com/agentscope-ai/QwenPaw/issues/6810)) | 😠 Annoyed — breaks update flow |
| **Long-session browser perf** | “Mouse 2 s/frame, must refresh page” ([#7285](https://github.com/agentscope-ai/QwenPaw/issues/7285), [#7129](https://github.com/agentscope-ai/QwenPaw/issues/7129)) | 😠 Power users blocked |
| **Thinking-process noise** | “Severe visual distraction, want default collapsed like Hermes” ([#7196](https://github.com/agentscope-ai/QwenPaw/issues/7196)) | 😐 UX friction — daily driver pain |
| **Channel settings ignored** | “WeChat ‘Show Thinking’ off but still shows” ([#7258](https://github.com/agentscope-ai/QwenPaw/issues/7258)) | 😐 Trust erosion in settings |
| **SubAgent workspace context** | “Runs in wrong folder (B not A), no warning” ([#7266](https://github.com/agentscope-ai/QwenPaw/issues/7266)) | 😐 Silent failure — hard to debug |
| **Positive** | “Creator app live website + desktop ops + video gen” ([#7274](https://github.com/agentscope-ai/QwenPaw/pull/7274)) | 😊 Feature excitement |
| **Positive** | “Test coverage jump +5pp, security fix for master key” ([#7292](https://github.com/agentscope-ai/QwenPaw/pull/7292), [#7119](https://github.com/agentscope-ai/QwenPaw/pull/7119)) | 😊 Engineering quality signals |

**Net**: Power users (long sessions, MCP, Windows desktop) are **loudly blocked**; casual/web users see steady polish. The project is at a **“stability vs. features” inflection**.

---

## 8. Backlog Watch (Stale / Needs Maintainer Attention)

| Item | Age | Why It Matters | Suggested Action |
|------|-----|----------------|------------------|
| [#338](https://github.com/agentscope-ai/QwenPaw/issues/338) Webhook API | 5+ months (2026-03-02) | High community interest (9 comments), `good first issue`, enables ecosystem integrations | Assign to contributor or sprint; define spec (push + callback + key polling) |
| [#6524](https://github.com/agentscope-ai/QwenPaw/issues/6524) MCP auto-reconnect | 1 month | Blocks reliable remote MCP usage; no PR yet | Design session invalidation + exponential backoff; label `help wanted` |
| [#5720](https://github.com/agentscope-ai/QwenPaw/issues/5720) Memory leak RCA | 1.5 months | Detailed user RCA (async tasks + HTTP sessions); may still affect 2.x | Reprodu

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-08-26

## 1. Today's Overview

ZeroClaw shows **high governance and architecture activity** with 50 issues and 50 PRs updated in the last 24 hours. The project is in a **pre-v0.9.0 stabilization phase** characterized by multiple concurrent RFCs, security hardening efforts, and cross-platform CI expansion. No new releases were published. The issue/PR ratio (38 open issues vs 49 open PRs) suggests active development outpacing triage. Key themes: **security boundaries (cron scoping, delegate workspaces, SSRF hardening)**, **architecture decisions (memory storage, wire protocol, execution budgets)**, and **operational maturity (Windows/macOS CI, dependency reporting, telemetry pilot)**.

---

## 2. Releases

**No new releases** in the last 24 hours. Current version remains `0.8.4` (per RFC #6808 tracker). The project appears to be accumulating changes for a v0.9.0 milestone tracked in #7432 (auth, security, gateway, breaking changes).

---

## 3. Project Progress — Merged/Closed PRs Today

Only **1 PR merged/closed** in the last 24h (from 50 updated). Notable closures from the issue list (indicating completed work):

| PR/Issue | Title | Type | Status |
|----------|-------|------|--------|
| #9206 | [Bug]: agent cron runs intermittently resolve workspace_dir to / | Bug (S0 security) | CLOSED |
| #9769 | [Task]: make the withheld-capability notice visible when log persistence is disabled | Task | CLOSED |
| #10058 | [Bug]: ZeroCode file explorer search mode ignores row and page navigation | Bug (good first issue) | CLOSED |
| #8999 | [Bug]: ZeroCode streamed user turns look like log/API payloads to small local models | Bug | CLOSED |
| #9663 | fix(channels): bind Voice Wake to the agent transcription provider | Bug | CLOSED |
| #10257 | [Bug]: cron update --command writes unused column on agent jobs | Bug | CLOSED |
| #10271 | chore(util): consolidate crate-local floor_char_boundary copies onto std | Refactor | CLOSED |

**Progress signals**: Critical security bugs (cron workspace resolution, cron cross-agent access) are being fixed. UI/UX polish on ZeroCode continues. Technical debt reduction (UTF-8 truncation audit follow-up) is underway.

---

## 4. Community Hot Topics — Most Active Issues/PRs

### Top Issues by Comment Count

| Issue | Comments | Core Topic | Underlying Need |
|-------|----------|------------|-----------------|
| [#6808](https://github.com/zeroclaw-labs/zeroclaw/issues/6808) RFC: Work Lanes, Board Automation, and Label Cleanup | 24 | Governance / Process | **Maintainer scalability** — automate work routing to reduce manual triage burden; ratified, rollout in progress |
| [#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) Tracker: Maintainer decision queue for RFCs | 14 | Governance / Process | **Decision bottleneck** — formal queue for RFCs/design issues needing maintainer attention |
| [#9103](https://github.com/zeroclaw-labs/zeroclaw/issues/9103) RFC: separate authoritative memory storage from enrichment connectors | 14 | Architecture / Memory | **Data ownership clarity** — split storage (authoritative) from enrichment (optional) after prior rollout rejection |
| [#8396](https://github.com/zeroclaw-labs/zeroclaw/issues/8396) RFC: Make wire protocol first-class in provider construction | 12 | Architecture / Providers | **Provider ecosystem maturity** — standardize onboarding, reduce bespoke integrations |
| [#9965](https://github.com/zeroclaw-labs/zeroclaw/issues/9965) Task: harden runtime-written executable test fixtures | 9 | Testing / CI | **Test reliability** — fix flaky parallel test fixtures writing executables |

### Top PRs by Activity (Recent Updates)

| PR | Type | Risk | Focus |
|----|------|------|-------|
| [#10075](https://github.com/zeroclaw-labs/zeroclaw/pull/10075) fix(runtime): thread live config through gateway chat to tool registry | Bug fix | High | **SSRF hardening** — stacked slice (#3 of 3) for `file_download` security |
| [#10370](https://github.com/zeroclaw-labs/zeroclaw/pull/10370) fix(providers): harden Copilot credential cache | Security | High | **Credential hygiene** — remove predictable temp paths, requires maintainer review |
| [#10369](https://github.com/zeroclaw-labs/zeroclaw/pull/10369) feat(runtime)!: bound skill HTTP egress | Breaking change | High | **Egress control** — pin addresses, disable proxies/redirects, 1MiB response cap |
| [#10372](https://github.com/zeroclaw-labs/zeroclaw/pull/10372) feat(dev): add deterministic dependency footprint reports | CI/Tooling | Medium | **Supply chain visibility** — Cargo package/version/feature reports for 8 build profiles |
| [#10351](https://github.com/zeroclaw-labs/zeroclaw/pull/10351) feat(runtime): enforce execution-tree iteration budgets | Feature | High | **Resource governance** — implement `max_execution_tree_iterations` per #9323 |

**Analysis**: The community is focused on **governance scaling** (RFC process, decision queues) and **security architecture** (memory boundaries, wire protocol, egress control, credential handling). Maintainer bandwidth is a visible constraint (#8692 tracker exists because decisions are queued).

---

## 5. Bugs & Stability — Reported Today (Ranked by Severity)

| Issue | Severity | Component | Status | Fix PR? |
|-------|----------|-----------|--------|---------|
| [#10357](https://github.com/zeroclaw-labs/zeroclaw/issues/10357) Tool execution error path discards detailed error body | **S1 — workflow blocked** | tools/runtime | OPEN | [#10364](https://github.com/zeroclaw-labs/zeroclaw/pull/10364) (open) |
| [#9947](https://github.com/zeroclaw-labs/zeroclaw/issues/9947) Cron tools not scoped to owning agent — cross-agent read/trigger/modify/delete | **S0 — data loss/security** | runtime/daemon | IN PROGRESS | Likely linked to #10075 stack |
| [#9872](https://github.com/zeroclaw-labs/zeroclaw/issues/9872) Bounded delegate target resolves filesystem to delegator's workspace | **S2 — degraded behavior** | security/sandbox | ACCEPTED | No PR yet |
| [#10257](https://github.com/zeroclaw-labs/zeroclaw/issues/10257) cron update --command writes unused column on agent jobs | **S2 — degraded behavior** | runtime/daemon | CLOSED | Fixed |
| [#10058](https://github.com/zeroclaw-labs/zeroclaw/issues/10058) ZeroCode file explorer search ignores row/page navigation | **S2 — degraded behavior** | zerocode/tui | CLOSED | Fixed (good first issue) |
| [#10103](https://github.com/zeroclaw-labs/zeroclaw/issues/10103) ZeroCode Health status values misalign in French/Spanish | **S3 — minor** | zerocode/tui | IN PROGRESS | No PR yet |

**Critical pattern**: **Multi-agent security boundaries** are fragile — cron scoping (#9947), delegate workspace isolation (#9872), and tool error fidelity (#10357) all point to insufficient sandboxing in delegation/cron subsystems. Fix for #10357 already in PR #10364.

---

## 6. Feature Requests & Roadmap Signals

### High-Confidence Near-Term (v0.9.0 candidates)

| Feature | Source | Signal Strength |
|---------|--------|-----------------|
| **Execution-tree iteration budgets** | [#9323](https://github.com/zeroclaw-labs/zeroclaw/issues/9323) + [#10351](https://github.com/zeroclaw-labs/zeroclaw/pull/10351) | PR open, RFC accepted, CI green |
| **Bounded skill HTTP egress** | [#10369](https://github.com/zeroclaw-labs/zeroclaw/pull/10369) | Breaking change PR open, high priority |
| **Wire protocol as first-class provider primitive** | [#8396](https://github.com/zeroclaw-labs/zeroclaw/issues/8396) | RFC with 12 comments, needs maintainer review |
| **Memory storage/enrichment separation** | [#9103](https://github.com/zeroclaw-labs/zeroclaw/issues/9103) | RFC revised post-vote, 14 comments |
| **Windows/macOS CI matrix** | [#7461](https://github.com/zeroclaw-labs/zeroclaw/issues/7461) | In progress, lint/build already multi-OS |
| **Mattermost approval prompts** | [#10358](https://github.com/zeroclaw-labs/zeroclaw/pull/10358) | PR open, fills channel parity gap |
| **Git Channel in official artifacts/Docker** | [#10138](https://github.com/zeroclaw-labs/zeroclaw/issues/10138) + [#10363](https://github.com/zeroclaw-labs/zeroclaw/pull/10363) | Issue + PR pair, distribution work |

### Medium-Term / Exploratory

| Feature | Source | Note |
|---------|--------|------|
| **Household edge mesh (pull workers, signed receipts)** | [#10360](https://github.com/zeroclaw-labs/zeroclaw/issues/10360) | New RFC (2026-08-25), opt-in multi-host compute |
| **Gateway/Channels MCP registry caching consolidation** | [#10346](https://github.com/zeroclaw-labs/zeroclaw/issues/10346) | New RFC, architectural deduplication |
| **ZeroCode multi-session sidebar** | [#7543](https://github.com/zeroclaw-labs/zeroclaw/issues/7543) | In progress, UX parity with desktop agents |
| **Rust/WASM web UI (replace React/Vite)** | [#8132](https://github.com/zeroclaw-labs/zeroclaw/issues/8132) | Evaluation phase, needs author action |

**Prediction**: v0.9.0 will ship **execution budgets, skill egress bounds, cron security fixes, multi-OS CI, and wire-protocol provider changes** as breaking changes. WASM UI and edge mesh are v0.10+.

---

## 7. User Feedback Summary — Pain Points & Use Cases

| Pain Point | Evidence | Affected Users |
|------------|----------|----------------|
| **Cron jobs insecure in multi-agent setups** | #9947 (S0), #9206 (S0 fixed), #10257 (fixed) | Operators running multiple agents on shared daemon |
| **Delegation breaks filesystem isolation** | #9872 (S2) — bounded delegate writes to parent workspace | Users of `delegate` tool with `mode=bounded` |
| **Tool errors lose detail** | #10357 (S1) — agents see only "HTTP 400" | Agent developers, complex tool chains |
| **ZeroCode UX gaps** | #10058 (search nav), #10103 (i18n alignment), #8999 (local model confusion) | ZeroCode TUI users, non-English locales |
| **Provider onboarding friction** | #8396 RFC (12 comments) — wire protocol not first-class | Provider integrators, custom model hosts |
| **Memory architecture confusion** | #9103 RFC (14 comments) — storage vs enrichment boundary | Users of long-running agents with memory |
| **Windows/macOS not tested in CI** | #7461 (4 comments) — test suite Linux-only | Non-Linux developers, cross-platform adopters |

**Satisfaction signals**: Good-first-issue fixes (#10058, #10271) close quickly. Security issues get immediate attention (S0/S1). Frustration visible in RFC comment volumes — maintainers struggling to scale review bandwidth.

---

## 8. Backlog Watch — Stalled/Needs Maintainer Attention

| Item | Age | Blockers | Why It Matters |
|------|-----|----------|----------------|
| [#8396](https://github.com/zeroclaw-labs/zeroclaw/issues/8396) RFC: Wire protocol first-class | 60 days | `needs-maintainer-review` | Unblocks provider ecosystem standardization |
| [#9103](https://github.com/zeroclaw-labs/zeroclaw/issues/9103) RFC: Memory storage/enrichment separation | 41 days | `needs-maintainer-review`, `risk:high` | Core architecture boundary, prior rollout failed |
| [#8132](https://github.com/zeroclaw-labs/zeroclaw/issues/8132) Evaluate Rust/WASM web UI | 65 days | `needs-author-action` | Strategic direction: eliminate Node.js from build |
| [#9447](https://github.com/zeroclaw-labs/zeroclaw/pull/9447) fix(anthropic): classify incomplete terminal responses | 30 days | `needs-author-action`, `status:in-progress` | Provider reliability, affects Anthropic users |
| [#9935](https://github.com/zeroclaw-labs/zeroclaw/pull/9935) feat(vi): preserve unknown constraint types | 14 days | `needs-maintainer-review`, `do-not-merge` | Forward-compatibility for verification engine |
| [#9109](https://github.com/zeroclaw-labs/zeroclaw/pull/9109) feat(providers): native Hailo-Ollama support | 40 days | `needs-maintainer-review`, `do-not-merge` | Hardware acceleration support |
| [#10142](https://github.com/zeroclaw-labs/zeroclaw/pull/10142) feat(zerorelay): secure transport with blind relay | 7 days | `needs-author-action`, `size:XL` | Major security feature, supersedes #9080 |
| [#7432](https://github.com/zeroclaw-labs/zeroclaw/issues/7432) Tracker: v0.9.0 auth/security/gateway queue | 78 days | Tracking only | Milestone coordination surface — many deps here |

**Maintainer bandwidth alert**: 8 items explicitly tagged `needs-maintainer-review` or `needs-author-action` with `risk:high` or `size:XL`. The decision queue tracker (#8692) exists *because* this backlog is growing. Triage capacity is the project's current bottleneck.

---

## Health Indicators Summary

| Metric | Status | Trend |
|--------|--------|-------|
| **Security responsiveness** | 🟢 Strong | S0/S1 bugs fixed or have PRs within days |
| **Governance

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/DenisZheng/agents-radar).*