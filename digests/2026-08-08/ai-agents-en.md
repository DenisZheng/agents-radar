# OpenClaw Ecosystem Digest 2026-08-08

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-08-08 01:07 UTC

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

# OpenClaw Project Digest — 2026-08-08

## 1. Today's Overview
OpenClaw exhibits **extremely high velocity** with 500 issues and 500 PRs updated in the last 24 hours (470 open issues, 411 open PRs, 89 PRs merged/closed). No new release was published today. The project is in a heavy stabilization phase: multiple P0/P1 regressions around session state, memory management, gateway reliability, and provider integrations are being actively triaged and fixed. The volume of "clawsweeper" (automated triage) tags indicates systematic bug-scrubbing across the codebase.

## 2. Releases
**No new releases today.** The latest version in circulation appears to be the `2026.7.2` beta series (e.g., `beta.5`, `beta.7`, commit `b4f01af`, `ee929db`). Several open issues reference regressions introduced in this series.

## 3. Project Progress (Merged/Closed PRs Today)
**89 PRs merged or closed** in the last 24h. The top-commented PRs shown are all still **open**, suggesting merged PRs were smaller, routine fixes. Notable open PRs nearing merge readiness (tagged `ready for maintainer look`, `proof: sufficient`, or `status: 📣 needs proof`):

| PR | Title | Area | Status |
|----|-------|------|--------|
| [#119778](https://github.com/openclaw/openclaw/pull/119778) | `fix(gateway): return retryable chat send error during transcript rebuild` | Gateway | 👀 ready for maintainer look |
| [#120271](https://github.com/openclaw/openclaw/pull/120271) | `fix(cron): cap command payload outputMaxBytes to prevent unbounded output buffering` | Cron | ⏳ waiting on author |
| [#120279](https://github.com/openclaw/openclaw/pull/120279) | `fix(qqbot): validate gateway heartbeat_interval before scheduling` | Channel: QQBot | ⏳ waiting on author |
| [#120283](https://github.com/openclaw/openclaw/pull/120283) | `fix(browser): validate extension relay frame fields before handling` | Browser Ext | ⏳ waiting on author |
| [#120148](https://github.com/openclaw/openclaw/pull/120148) | `fix(model-fallback): treat empty non-GPT completions as failed candidates` | Model Fallback | 📣 needs proof |
| [#120044](https://github.com/openclaw/openclaw/pull/120044) | `fix(gateway): usage.status no longer waits on provider HTTP` | Gateway/UI | 📣 needs proof |
| [#116382](https://github.com/openclaw/openclaw/pull/116382) | `fix: avoid false branch-switch errors after background updates` | Session State | 📣 needs proof |
| [#113429](https://github.com/openclaw/openclaw/pull/113429) | `fix(codex): prevent session-changed errors after /new` | Codex | 📣 needs proof |
| [#89040](https://github.com/openclaw/openclaw/pull/89040) | `perf: avoid event-loop stall during embedded_run bootstrap-context` | Performance | 📣 needs proof |
| [#120340](https://github.com/openclaw/openclaw/pull/120340) | `fix(codex): reduce memory use for concurrent native hooks` | Codex/Memory | 📣 needs proof |

## 4. Community Hot Topics (Most Active Issues)

| Issue | Comments | Priority | Core Need |
|-------|----------|----------|-----------|
| [#116277](https://github.com/openclaw/openclaw/issues/116277) **DeepSeek v4 Flash silent reply failure** | 129 | P1 🔴 **CLOSED** | Provider reliability: silent failures with generic fallback hurt trust; need observable error propagation. |
| [#116201](https://github.com/openclaw/openclaw/issues/116201) **Realtime voice unbounded provider/consult state** | 59 | P1 | Resource bounds: voice sessions leak frames/state under bursty conditions; hard ownership limits needed. |
| [#7707](https://github.com/openclaw/openclaw/issues/7707) **Memory Trust Tagging by Source** | 29 | P2 | Security: prevent memory poisoning from untrusted sources (web, 3rd-party skills); tagging + provenance. |
| [#77598](https://github.com/openclaw/openclaw/issues/77598) **Track live dev agent behavior (24h watch)** | 23 | P2 | Observability: longitudinal agent behavior study; community wants transparency into autonomous runs. |
| [#91588](https://github.com/openclaw/openclaw/issues/91588) **Critical: Gateway Memory Leak → 15.5 GB RSS** | 22 | **P0** 🔴 | Stability: leak causes repeated OOM kills + restart loops; blocks production use. |
| [#22438](https://github.com/openclaw/openclaw/issues/22438) **Tiered bootstrap file loading** | 18 | P2 | Token economy: bootstrap files consume 20–30% context every turn; progressive loading requested. |
| [#99551](https://github.com/openclaw/openclaw/issues/99551) **Codex worker runaway hardening sprint** | 16 | P2 | Resilience: harden failure modes from a specific worker incident without changing prior fix. |
| [#78308](https://github.com/openclaw/openclaw/issues/78308) **Channel-mediated approval for MCP tool calls** | 16 | P2 | Safety: extend `/approve` flow to MCP mutations (email, vault writes) via consent envelope. |
| [#101290](https://github.com/openclaw/openclaw/issues/101290) **CLI startup corrupts live state DB (SQLite malformed)** | 14 | **P0** 🔴 | Data integrity: `openclaw.sqlite` corruption on macOS while gateway runs; vanilla SQLite control passes. |
| [#51429](https://github.com/openclaw/openclaw/issues/51429) **Hardcoded workspace path (/Users/wangtao) shipped** | 13 | P2 | Build hygiene: user-specific path baked into release; erodes confidence in release process. |

**Underlying themes**: **session-state corruption**, **unbounded resource growth**, **silent failures**, **token waste**, and **supply-chain trust** (hardcoded paths, memory poisoning).

## 5. Bugs & Stability (Ranked by Severity)

### 🔴 P0 — Critical / Data Loss / Crash Loops
| Issue | Summary | Fix PR? |
|-------|---------|---------|
| [#91588](https://github.com/openclaw/openclaw/issues/91588) | Gateway RSS grows 350 MB → 15.5 GB in 2–3 days → OOM kill → `launchd-handoff` restart loop | ❌ |
| [#101290](https://github.com/openclaw/openclaw/issues/101290) | CLI preflight (`doctor`, `status`) corrupts live `openclaw.sqlite` on macOS (2026.6.6) | ❌ |
| [#119263](https://github.com/openclaw/openclaw/issues/119263) | Agent DB v14→v15 migration fails: `no such column: entry_valid`; gateway refuses to start | ❌ |
| [#118772](https://github.com/openclaw/openclaw/issues/118772) | Embedded-agent-runner inflates `sessionEntry.totalTokens` → premature compaction at 4–8% context (data loss) | ❌ |

### 🟠 P1 — Major Regressions / Silent Failures / Availability
| Issue | Summary | Fix PR? |
|-------|---------|---------|
| [#116201](https://github.com/openclaw/openclaw/issues/116201) | Realtime voice retains unbounded provider/consult state (frames, pre-ready audio) | ❌ |
| [#119087](https://github.com/openclaw/openclaw/issues/119087) | Gateway cold start regressed ~2.5× (2026.7.1-β.1 → 2026.7.2-β.7) on 1 vCPU | ❌ |
| [#109145](https://github.com/openclaw/openclaw/issues/109145) | Gateway HTTP server listens but **does not accept connections** (v2026.7.1-β.5) | ❌ |
| [#86684](https://github.com/openclaw/openclaw/issues/86684) | `sessions_yield` subagent wake compacts parent branch at low context (65k/1.05M) | ❌ |
| [#85030](https://github.com/openclaw/openclaw/issues/85030) | MCP tools **not injected** into `sessions_spawn` subagents (all allowlists ignored) | ❌ |
| [#115700](https://github.com/openclaw/openclaw/issues/115700) | `chat.send` rejected with "thread switched branches" — stale `expectedLeafEntryId` | [#116382](https://github.com/openclaw/openclaw/pull/116382) 📣 needs proof |
| [#116022](https://github.com/openclaw/openclaw/issues/116022) | `/new` reuses stable session ID; cannot recover retired Codex binding tombstone | ❌ |
| [#94939](https://github.com/openclaw/openclaw/issues/94939) | 6.x migration leaves channel conversation

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: AI Agent & Personal Assistant Open-Source Ecosystem
**Snapshot Date: 2026-08-08**

---

## 1. Ecosystem Overview

The personal AI assistant/agent open-source ecosystem exhibits **bimodal maturity**: a cluster of high-velocity, production-hardening projects (OpenClaw, Hermes Agent, IronClaw, ZeroClaw, CoPaw) operating at 50–500 daily issue/PR updates, and a second tier of focused, release-driven tools (LobsterAI, NanoBot) shipping user-facing patches weekly. No project has reached a stable 1.0; all are in pre-release or rapid beta cycles. The dominant theme across active projects is **stabilization over feature expansion**—memory integrity, session-state correctness, provider reliability, and security boundaries now outweigh novel capability work. Community engagement is deep but fragmented: each project cultivates its own plugin/channel/provider ecosystem with minimal cross-pollination.

---

## 2. Activity Comparison

| Project | Issues Updated (24h) | PRs Updated (24h) | Merged/Closed PRs | Open Issues | Open PRs | Release Today? | Latest Release | Health Score* |
|---------|---------------------|-------------------|-------------------|-------------|----------|----------------|----------------|---------------|
| **OpenClaw** | 500 | 500 | 89 | 470 | 411 | No | 2026.7.2 β series | 🟡 High velocity, stabilization debt |
| **Hermes Agent** | 50 | 50 | 3 | ~50 | ~50 | No | Pre-2026.08.08 | 🟡 Intense refactor, low closure |
| **IronClaw** | 50 | 50 | 12 | 36 | 38 | No | ~1.1.0-rc.1 | 🟢 High velocity, steady closure |
| **ZeroClaw** | 50 | 50 | 3 | 45 | 47 | No | Continuous (master) | 🟠 High breadth, low closure (6%) |
| **CoPaw (QwenPaw)** | 31 | 49 | 22 | 20 | ~27 | **Yes** v2.1.0-β.2 | 2026.08.08 | 🟢 High velocity, healthy merge rate (45%) |
| **NanoBot** | 10 | 21 | 11 | ~10 | ~10 | No | Pre-2026.08.08 | 🟢 Focused, strong throughput |
| **LobsterAI** | 7 | 7 | 6 | 4 | 1 | **Yes** v2026.8.7 | 2026.08.07 | 🟢 Stable cadence, maintenance mode |
| **PicoClaw** | — | — | — | — | — | — | — | ⚪ Data unavailable |
| **NanoClaw** | — | — | — | — | — | — | — | ⚪ Data unavailable |
| **NullClaw** | 0 | 0 | 0 | 0 | 0 | No | — | ⚪ Dormant |
| **TinyClaw** | 0 | 0 | 0 | 0 | 0 | No | — | ⚪ Dormant |
| **Moltis** | 0 | 0 | 0 | 0 | 0 | No | — | ⚪ Dormant |
| **ZeptoClaw** | 0 | 0 | 0 | 0 | 0 | No | — | ⚪ Dormant |

*Health Score: 🟢 = sustainable velocity + closure; 🟡 = high velocity but accumulation risk; 🟠 = architectural churn; ⚪ = insufficient data/inactive.

---

## 3. OpenClaw's Position

### Advantages vs. Peers
- **Scale of operation**: 10× the daily issue/PR volume of the next project (500 vs. 50), indicating the largest contributor base and most battle-tested code paths.
- **Systemic bug-scrubbing infrastructure**: Automated "clawsweeper" triage tags reveal a mature quality-engineering investment absent elsewhere.
- **Provider/gateway abstraction depth**: Issues like gateway memory leaks (#91588), model fallback semantics (#120148), and transcript rebuild retries (#119778) show a platform-level integration layer that peers handle at the application level.
- **Session-state ownership model**: Explicit branch-switching, compaction, and subagent yield semantics (#116382, #86684, #113429) are more sophisticated than the flat conversation histories in NanoBot/LobsterAI.

### Technical Approach Differences
| Dimension | OpenClaw | Peers (IronClaw, Hermes, ZeroClaw) |
|-----------|----------|-----------------------------------|
| **Architecture** | Monolithic core with embedded runner, gateway, and provider mesh | Modular: separate daemon/runtime (ZeroClaw), plugin-first (IronClaw), god-file sharding (Hermes) |
| **Session Model** | Branch-aware, token-accounted, compaction-driven | Conversation-linear (NanoBot, LobsterAI) or Kanban/task-oriented (Hermes, CoPaw) |
| **Provider Integration** | Gateway-mediated, retry/fallback logic centralized | Direct SDK calls (NanoBot), provider unification RFC (ZeroClaw), model-driven skill selection (IronClaw) |
| **Security Boundary** | Memory trust tagging (#7707), MCP consent envelopes (#78308) | Workspace-relative forbidden paths (ZeroClaw), session sandboxing (NanoBot), skill ACLs (CoPaw) |

### Community Size Comparison
- **OpenClaw**: ~500 active issues/PRs/day → estimated **50–100 regular contributors** (inferred from triage bot activity and PR comment density).
- **Hermes/ZeroClaw/IronClaw**: ~50 items/day each → **10–20 regular contributors**.
- **CoPaw/NanoBot**: 20–80 items/day → **5–15 regular contributors**.
- **LobsterAI**: <10 items/day → **<5 core maintainers**, user-facing patch flow.

---

## 4. Shared Technical Focus Areas (Cross-Project Requirements)

| Requirement | Projects Affected | Specific Needs |
|-------------|-------------------|----------------|
| **Session/Context Integrity** | OpenClaw (#91588, #101290, #119263), Hermes (#79278, #79624), ZeroClaw (#9805, #9786), CoPaw (#6796) | Prevent compaction data loss, fix DB corruption on restart, guarantee subagent yield semantics, stop silent SOP/agent drops |
| **Provider Reliability & Observability** | OpenClaw (#116277, #120148), NanoBot (#5266), IronClaw (#6989), ZeroClaw (#9816), CoPaw (#6812) | Token usage logging per call, cost tracking (Anthropic $0.00 bug), streaming error propagation, schema token reduction |
| **Security Boundaries & Sandbox** | OpenClaw (#7707, #78308), NanoBot (#5278), ZeroClaw (#8424, #9815), IronClaw (#7214), CoPaw (#6786) | Memory provenance tagging, MCP tool consent, workspace-relative forbidden paths, Docker/Railway sandbox profiles, Telegram ACL persistence |
| **Channel/Transport Hardening** | OpenClaw (#120279, #120283), NanoBot (#5263, #5156), IronClaw (#6475–6644), Hermes (#63485, #79331), CoPaw (#6782, #6786) | Heartbeat validation, QR verification, delivery retries, Telegram rich-message parity, Docker plugin market availability |
| **Memory System Evolution** | OpenClaw (#7707, #22438), NanoBot (#5231, #5280), Hermes (#509), IronClaw (#7185), ZeroClaw (#9246) | Tiered bootstrap loading, Dream/archive idle sessions, cognitive memory ops (LLM-driven consolidation), cross-conversation recall, config migration preservation |
| **Windows/Desktop Stability** | OpenClaw (#101290), Hermes (#80968, #81290, #80569), LobsterAI (#2446, #2450), CoPaw (#6810, #6806, #6807) | SQLite corruption on macOS/Windows, ConPTY TUI crashes, secondary window black screen, NSIS locked-file upgrades, WebView2/extension host issues |
| **Plugin/Extensibility Standardization** | NanoBot (#5288), ZeroClaw (#9810, #9346), IronClaw (#6938, #7177), Hermes (#64182), CoPaw (#6782) | Unified plugin catalog (Agent Plugins v1), declarative skill activation, schema-aware tool search, marketplace reliability |

---

## 5. Differentiation Analysis

| Project | Primary Focus | Target User | Technical Architecture | Key Differentiator |
|---------|---------------|-------------|------------------------|---------------------|
| **OpenClaw** | **Core platform / reference runtime** | Framework builders, power users, enterprise integrators | Monolithic TS/Node gateway + embedded runner + provider mesh | Deepest session-state model; branch-aware compaction; gateway as reliability layer |
| **Hermes Agent** | **Multi-agent orchestration & desktop UX** | Developers building autonomous workflows, researchers | God-file sharding in progress; Kanban/cron primitives; TUI + Desktop + Discord/Telegram | First-class cron/kanban delegation; policy fallback to local models; "Teams" product vision |
| **IronClaw** | **Channel-centric assistant with progressive disclosure** | End-users wanting Slack/Telegram/GitHub integration | Plugin-first; explicit channel delivery tool; Inspector observability | Two-lane channel delivery; doc-truth pipeline; progressive tool disclosure default-on |
| **ZeroClaw** | **Daemonized, policy-governed automation** | Operators running headless SOPs, cron, MCP servers | Rust daemon + CLI + OTel-native; SOP (Standard Operating Procedure) DSL | SOP headless execution; workspace-relative security; plugin catalog RFC; hardware crate consolidation |
| **CoPaw (QwenPaw)** | **Chinese-cloud LLM integration + browser automation** | Chinese-market developers, browser-automation users | Electron + ACP runner; Chrome DevTools Protocol; ReMe memory | Volcengine/Xiaomi provider hooks; Chrome tab lifetime config; WeChat localized approvals |
| **NanoBot** | **Multi-channel personal assistant with memory (Dream)** | Self-hosters wanting Telegram/WhatsApp/Matrix/WebUI | Go core + TypeScript WebUI; Dream memory system; session sandboxing | Dream idle-session archival; per-session sandbox; Agent Plugins v1 unification |
| **LobsterAI** | **Polished desktop client for OpenClaw/OpenAI-compatible APIs** | End-users wanting native UI, Markdown/LaTeX, Cowork search | Electron renderer + OpenClaw backend; Windows installer hardening | Rapid patch releases (2026.8.5 → 2026.8.7); Cowork conversation search; math rendering |
| **PicoClaw / NanoClaw** | **Embedded/edge inference** | Hardware makers, IoT | (Data unavailable) | Likely WASM/Edge-optimized runtimes |

---

## 6. Community Momentum & Maturity

### Tier 1: **Rapidly Iterating / Pre-Stabilization** (High velocity, architectural flux)
- **OpenClaw**: Highest raw velocity; systematic bug-scrubbing indicates **stabilization sprint** before major release.
- **Hermes Agent**: God-file sharding epic (#78647, 60 comments) = **architectural refactor in flight**; low PR closure (3/50) signals churn.
- **ZeroClaw**: RFC-driven governance (4/5 top issues are RFCs); **broadening scope faster than closing** (6% PR closure).
- **CoPaw**: Beta 2 shipped with hotfixes; **critical Docker/MCP regressions** (#6782, #6732) block extensibility.

### Tier 2: **Feature-Complete / Hardening** (Steady closure, user-facing polish)
- **IronClaw**: 12/50 PRs merged; progressive disclosure default-on; doc-truth pipeline (5 PRs) = **release preparation**.
- **NanoBot**: 11/21 PRs merged; security + token observability + plugin unification = **production-readiness sprint**.

### Tier 3: **Stable Cadence / Maintenance** (Low volume, high predictability)
- **LobsterAI**: Weekly patches; UI/UX paper cuts; **mature product rhythm**.

### Tier 4: **Dormant / Insufficient Data**
- NullClaw, TinyClaw, Moltis, ZeptoClaw, PicoClaw, NanoClaw.

---

## 7. Trend Signals for AI Agent Developers

| Signal | Evidence | Strategic Implication |
|--------|----------|----------------------|
| **Session-state correctness > new tools** | 7/9 active projects report compaction/DB/branch-switch bugs as P0/P1 | Invest in **formal session models** (branch DAG, compaction invariants) before adding providers. |
| **Token observability is a cost-of-entry feature** | NanoBot (#5266, 10 comments), IronClaw (#6989), ZeroClaw (#9816), OpenClaw (#224

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-08-08

## 1. Today's Overview
NanoBot shows **high development velocity** with 21 PRs and 10 issues updated in the last 24 hours. The project is in active maintenance mode with **11 PRs merged/closed** and **2 issues closed**, indicating strong throughput. No new releases were cut today. Key focus areas include session isolation/security hardening, WebUI polish, Telegram/WhatsApp channel reliability, memory system (Dream) improvements, and token consumption observability. The codebase is undergoing significant refactoring around session storage, sandboxing, and plugin architecture.

## 2. Releases
**No new releases** published in the last 24 hours.

## 3. Project Progress — Merged/Closed PRs (11)
| PR | Type | Summary | Link |
|----|------|---------|------|
| #5287 | Fix | Preserve global `sendProgress`/`sendToolHints` defaults for channels; add Mattermost regression test | [#5287](https://github.com/HKUDS/nanobot/pull/5287) |
| #5285 | Fix | Preserve newly created topic route in WebUI until optimistic session list acknowledges it | [#5285](https://github.com/HKUDS/nanobot/pull/5285) |
| #5284 | Refactor | Remove legacy `/api/sessions/{key}/messages` route and associated media hydration code | [#5284](https://github.com/HKUDS/nanobot/pull/5284) |
| #5282 | Fix | Modernize dependency recovery guidance (Langfuse, Olostep, WeChat, oauth-cli-kit) | [#5282](https://github.com/HKUDS/nanobot/pull/5282) |
| #5281 | Fix | Keep WebUI activity text crisp while fading edges (gradient overlay fix) | [#5281](https://github.com/HKUDS/nanobot/pull/5281) |
| #5280 | Fix | Archive short idle sessions for Dream memory system | [#5280](https://github.com/HKUDS/nanobot/pull/5280) |
| #5277 | Feat | Expand model preset editor inline in WebUI | [#5277](https://github.com/HKUDS/nanobot/pull/5277) |
| #5272 | Fix | Preserve proactive `_channel_delivery` messages during session retention trimming (fixes #5273) | [#5272](https://github.com/HKUDS/nanobot/pull/5272) |
| #5268 | Fix | Stage out-of-media-root attachments on history reads for WebUI (fixes #5264) | [#5268](https://github.com/HKUDS/nanobot/pull/5268) |
| #5263 | Fix | Harden Weixin channel: protocol headers, QR verification, delivery retries, login lifecycle | [#5263](https://github.com/HKUDS/nanobot/pull/5263) |
| #5231 | Feat | Archive idle sessions for Dream (memory system) | [#5231](https://github.com/HKUDS/nanobot/pull/5231) |

**Net advancement**: Session history security (#5279/#5272), WebUI route stability (#5285/#5284), channel reliability (Weixin #5263, Matrix #5286 open), memory/Dream coverage (#5231/#5280), and plugin integration groundwork (#5288 open).

## 4. Community Hot Topics
| Item | Activity | Core Need | Link |
|------|----------|-----------|------|
| **#5266** Token consumption logging | 10 comments, opened 2026-08-06 | **Observability**: Users burn millions of tokens in hours without visibility into which calls consume them. Request: log token usage per call. | [#5266](https://github.com/HKUDS/nanobot/issues/5266) |
| **#5149** WhatsApp audio sending broken | 5 comments, opened 2026-07-28 | **Channel parity**: Audio receive works; send fails with ffmpeg warnings. Blocks voice workflows. | [#5149](https://github.com/HKUDS/nanobot/issues/5149) |
| **#5198** Cannot change model per-session | 3 comments, opened 2026-07-31 | **UX parity**: Model selector in UI and `/model` command don't switch active model; only fallback works. | [#5198](https://github.com/HKUDS/nanobot/issues/5198) |
| **#5278** Security: session history inside workspace | 1 comment, opened 2026-08-07 | **Security boundary**: Session files at `<workspace>/sessions/` are readable by agent tools when `restrict_to_workspace=true`. PR #5279 addresses. | [#5278](https://github.com/HKUDS/nanobot/issues/5278) |
| **#5288** Agent Plugins + CLI Apps integration | Open PR, updated 2026-08-08 | **Extensibility**: Unify plugin package format (Agent Plugins v1) with CLI Apps catalog; single install boundary. | [#5288](https://github.com/HKUDS/nanobot/pull/5288) |

**Underlying theme**: Users demand **production-grade observability (tokens)**, **channel feature parity (audio, stickers, reactions)**, **session-level control (model switching, isolation)**, and **security boundaries** — all signals of maturing from dev-tool to deployed assistant.

## 5. Bugs & Stability — Ranked by Severity
| Severity | Issue | Status | Fix PR | Link |
|----------|-------|--------|--------|------|
| **High** | Session history readable by agent tools (security boundary bypass) | Open | #5279 (open) | [#5278](https://github.com/HKUDS/nanobot/issues/5278) |
| **High** | Token consumption runaway — no observability | Open | — | [#5266](https://github.com/HKUDS/nanobot/issues/5266) |
| **Medium** | WhatsApp audio send broken (ffmpeg) | Open | — | [#5149](https://github.com/HKUDS/nanobot/issues/5149) |
| **Medium** | `/goal` produces duplicate replies while waiting for user | Open | — | [#5256](https://github.com/HKUDS/nanobot/issues/5256) |
| **Medium** | Cannot change active model per session (UI + CLI) | Open | — | [#5198](https://github.com/HKUDS/nanobot/issues/5198) |
| **Medium** | Telegram polling stalls silently after network blip | Open | #5156 (open) | [#5156](https://github.com/HKUDS/nanobot/pull/5156) |
| **Low** | Session retention trimming drops proactive delivery messages | **Closed** | #5272 (merged) | [#5273](https://github.com/HKUDS/nanobot/issues/5273) |
| **Low** | History endpoint missing `media_urls` for files outside media root | **Closed** | #5268 (merged) | [#5264](https://github.com/HKUDS/nanobot/issues/5264) |

**Note**: Two high-severity items (#5278, #5266) lack merged fixes; #5279 is open but addresses #5278 directly.

## 6. Feature Requests & Roadmap Signals
| Signal | Evidence | Likelihood for Next Version |
|--------|----------|----------------------------|
| **Per-session sandbox isolation** | #5283 (PR open), #5276 (issue), #5279 (PR) | High — security-driven, multiple PRs in flight |
| **Token usage logging/quotas** | #5266 (10 comments, high pain) | High — direct cost impact for users |
| **Agent Plugins v1 unified with CLI Apps** | #5288 (PR open, Re-bin) | High — architectural unification |
| **Telegram stickers + agent-initiated reactions** | #5289 (issue, bot-authored) | Medium — channel parity |
| **Model switching per session (UI + CLI)** | #5198 (3 comments, UX gap) | Medium — user-facing polish |
| **WebUI temporary chat mode** | #5252 (PR open) | Medium — ephemeral conversation UX |
| **Matrix thread-scoped sessions** | #5286 (PR open) | Medium — channel-specific isolation |
| **Atomic JSONL write deduplication** | #5290 (issue), #5291 (PR) | Low-Medium — internal code health |

**Prediction**: Next release will likely ship **session sandboxing (#5283/#5279)**, **token logging (#5266)**, and **plugin unification (#5288)** as headline features.

## 7. User Feedback Summary
| Pain Point | Frequency | Representative Quote |
|------------|-----------|----------------------|
| **Token burn without visibility** | High (10 comments on #5266) | "million just in some 2 hours without any noticable activity" |
| **Audio/voice features broken on WhatsApp** | Persistent (opened 2026-07-28) | "nanobot will not send audio message on whatsapp. it does receive them." |
| **Model switching doesn't work** | Multiple reports | "Clicking the model blip near the chat input box allows no change" |
| **Session history security concern** | New, security-labeled | "agent can `read_file` / `list_dir` session files" |
| **WebUI route loss on new topic** | Fixed today (#5285) | — |
| **Proactive notifications dropped** | Fixed today (#5272) | — |

**Satisfaction signals**: Rapid fixes for WebUI regressions (#5285, #5281, #5277) and session retention (#5272) show maintainers responsive to UX bugs. Dissatisfaction centers on **cost control (tokens)**, **media parity**, and **security boundaries**.

## 8. Backlog Watch — Stale/Needing Attention
| Item | Age | Why It Matters | Link |
|------|-----|----------------|------|
| **#4276** Model-agnostic computer use (computer_use + browser tools) | Open since 2026-06-10 (59 days) | Major feature: desktop/browser automation as native tools. Large PR, needs review. | [#4276](https://github.com/HKUDS/nanobot/pull/4276) |
| **#5156** Telegram polling stall recovery | Open since 2026-07-29 (10 days) | Silent failure mode in production; PR exists but unmerged. | [#5156](https://github.com/HKUDS/nanobot/pull/5156) |
| **#5149** WhatsApp audio send | Open since 2026-07-28 (11 days) | Core media feature broken; no PR yet. | [#5149](https://github.com/HKUDS/nanobot/issues/5149) |
| **#5198** Per-session model switching | Open since 2026-07-31 (8 days) | UX parity with SaaS AI; no PR yet. | [#5198](https://github.com/HKUDS/nanobot/issues/5198) |
| **#5266** Token consumption logging | Open since 2026-08-06 (2 days) | High user pain, 10 comments; no PR yet. | [#5266](https://github.com/HKUDS/nanobot/issues/5266) |

**Maintainer action suggested**: Prioritize #5266 (token logging) and #5156 (Telegram reliability) for immediate PRs; assign #4276 for architectural review; triage #5149/#5198 for channel/UX parity sprint.

---

**Project Health Indicator**: 🟢 **Healthy velocity** (11 merges/day), 🟡 **Security debt** (session history exposure), 🟡 **Observability gap** (token logging), 🟢 **Active refactoring** (plugins, sessions, WebUI).

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-08-08

## 1. Today's Overview
Hermes Agent shows **very high activity** with 100 total items updated in the last 24 hours (50 issues, 50 PRs). The project is in an intense refactoring and stabilization phase: a repo-wide "god-file sharding" epic (#78647) dominates discussion (60 comments), while critical bugs in context compression, gateway crashes, and session-state integrity are being actively triaged. No new release was cut today, but three PRs were merged/closed, indicating steady forward momentum. The workload spans architecture, plugins, desktop/TUI, Telegram/Discord integrations, and Windows compatibility — suggesting the team is hardening the platform across all surfaces.

## 2. Releases
**No new releases published today.** The latest version remains whatever was shipped prior to 2026-08-08.

## 3. Project Progress — Merged/Closed PRs Today
| PR | Title | Type | Impact |
|----|-------|------|--------|
| [#80808](https://github.com/NousResearch/hermes-agent/pull/80808) | `fix(agent): require actionable handoffs at implementation boundaries` | Bug fix (P2) | Ensures agents emit structured handoffs (blocker, remaining scope, side-effects) when stopping at permission/safety/workspace boundaries — improves user visibility into incomplete work. |
| [#81412](https://github.com/NousResearch/hermes-agent/pull/81412) | `Add policy fallback delegation to local Qwen` | Feature | Adds policy-only fallback routing from primary orchestrator to a local Qwen subagent; distinguishes model-reported policy restrictions from provider blocks; persists idempotent fallback jobs, leases, and verification results. |
| [#11349](https://github.com/NousResearch/hermes-agent/issues/11349) | `docs(discord): six documentation drifts vs actual behavior + /voice join missing from slash UI` | Docs (Closed) | Resolves six Discord integration doc/code mismatches and fixes missing `/voice join` in slash-command autocomplete. |

## 4. Community Hot Topics — Most Active Issues/PRs
| Item | Comments | Area | Core Need |
|------|----------|------|-----------|
| [#78647](https://github.com/NousResearch/hermes-agent/issues/78647) **Epic: Shard all 20 god files** | 60 | Architecture/Refactor | **Repo-wide decomposition mandate** — "all god files are sharded, never reverted." Contributors need clear module boundaries, shared interfaces, and a phased plan to avoid regressions. |
| [#64182](https://github.com/NousResearch/hermes-agent/issues/64182) **Plugin Interface Expansion — community ideas** | 30 | Plugins | **Stable, publishable plugin API** — contributors with queued PRs need a finalized interface to ship community plugins without repeated rework. |
| [#17565](https://github.com/NousResearch/hermes-agent/issues/17565) **Configurable Temperature Parameter** | 11 (+13 👍) | Agent/Config | **User-facing temperature control** — currently hardcoded or provider-default (1.0), causing hallucinations. High community demand (13 reactions). |
| [#79278](https://github.com/NousResearch/hermes-agent/issues/79278) **Context compression drops in-flight tool chain** | 10 | Agent/Compression (P1) | **Data-loss bug** — preflight compression during tool execution loses results, causing unsafe replays of non-idempotent operations. |
| [#65365](https://github.com/NousResearch/hermes-agent/issues/65365) **OAuth (Claude Pro/Max): memory/session_search tools trigger 400** | 8 | Auth/Anthropic (P1) | **Blocking integration bug** — built-in tools cause deterministic HTTP 400 "out of extra usage" on Anthropic OAuth, rendering memory features unusable for Claude subscribers. |

**Underlying theme:** Contributors and users are pushing for **architectural clarity (god-file sharding, plugin API)** and **reliability fixes (compression, OAuth, Windows/desktop stability)** before new features.

## 5. Bugs & Stability — Reported Today (Ranked by Severity)
| Issue | Severity | Component | Status | Fix PR? |
|-------|----------|-----------|--------|---------|
| [#79278](https://github.com/NousResearch/hermes-agent/issues/79278) Context compression drops in-flight tool chain — side effect completes, result lost, agent replays unsafely | **P1 (Critical)** | Agent/Compression | Open | No |
| [#79624](https://github.com/NousResearch/hermes-agent/issues/79624) Gateway crashes `exit(1)` during preflight compaction on restart — oversized session kills process | **P1 (Critical)** | Gateway/Sessions | Open | No |
| [#65365](https://github.com/NousResearch/hermes-agent/issues/65365) OAuth: `memory`/`session_search` tools trigger Anthropic 400 "out of extra usage" | **P1 (Critical)** | Auth/Anthropic/Memory | Open | No |
| [#80968](https://github.com/NousResearch/hermes-agent/issues/80968) Gateway crashes on Windows with `--tui` after any command (ConPTY) | **P2 (High)** | TUI/Windows | Open | No |
| [#81290](https://github.com/NousResearch/hermes-agent/issues/81290) Secondary Desktop window stays black, no diagnostics/recovery (Windows) | **P2 (High)** | Desktop/Windows | Open | No |
| [#80569](https://github.com/NousResearch/hermes-agent/issues/80569) Windows install leaves duplicate startup entries, can respawn after update | **P2 (High)** | Desktop/Windows/Install | Open | No |
| [#80280](https://github.com/NousResearch/hermes-agent/issues/80280) Kanban timed-out workers leave descendant process groups alive — concurrent mutation risk | **P3 (Medium)** | Cron/Kanban | Open | **Yes: [#81411](https://github.com/NousResearch/hermes-agent/pull/81411)** (signal whole process group) |
| [#80507](https://github.com/NousResearch/hermes-agent/issues/80507) Delegated child Kanban exit guard exhausts parent turn budget | **P3 (Medium)** | Agent/Cron/Delegate | Open | No |
| [#75444](https://github.com/NousResearch/hermes-agent/issues/75444) Kanban auto-decomposer re-dispatches escalated triage tasks (infinite block bounce) | **P3 (Medium)** | Cron/Kanban | Open | No |
| [#79728](https://github.com/NousResearch/hermes-agent/issues/79728) Kanban block-loop recovery triage auto-decomposed into duplicate work | **P3 (Medium)** | Cron/Kanban | Open (Duplicate) | No |
| [#54523](https://github.com/NousResearch/hermes-agent/issues/54523) Remote desktop over Tailscale: async routes block event loop 10-25s, starving WS | **P2 (High)** | CLI/Desktop/Gateway | Open | No |
| [#63485](https://github.com/NousResearch/hermes-agent/issues/63485) Telegram: top-level inbound `rich_message` updates silently ignored | **P3 (Medium)** | Gateway/Telegram | Open | **Yes: [#81346](https://github.com/NousResearch/hermes-agent/pull/81346)** (keep code blocks on legacy path) |
| [#81368](https://github.com/NousResearch/hermes-agent/issues/81368) Telegram: Bot API 10.1 `rich_message` dropped (duplicate of #63485) | **P3 (Medium)** | Plugins/Telegram | Open (Duplicate) | **Yes: [#81346](https://github.com/NousResearch/hermes-agent/pull/81346)** |
| [#79331](https://github.com/NousResearch/hermes-agent/issues/79331) Telegram Rich Messages omit code-block copy affordance | **P2 (High)** | Gateway/Telegram | **Closed** | **Fixed: [#81346](https://github.com/NousResearch/hermes-agent/pull/81346)** |
| [#46100](https://github.com/NousResearch/hermes-agent/issues/46100) Telegram batch/media-group attachments split across turns | **P2 (High)** | Gateway/Telegram | **Closed** | No (closed, fix status unclear) |
| [#22418](https://github.com/NousResearch/hermes-agent/issues/22418) macOS Atomic Hermes desktop-gateway conflicts with CLI `--replace`, blocks Discord token | **P2 (High)** | Gateway/Discord/macOS | Open | No |

**Critical cluster:** Context compression + gateway restart crashes + Anthropic OAuth tool rejection are **P1 session-state risks** with no fix PRs yet. Windows TUI/desktop crashes are **P2 platform blockers**.

## 6. Feature Requests & Roadmap Signals
| Issue | Priority | Signal | Likelihood for Next Version |
|-------|----------|--------|----------------------------|
| [#17565](https://github.com/NousResearch/hermes-agent/issues/17565) Configurable temperature parameter | P3, 13 👍 | **High user demand** — hardcoded temp causes hallucinations; simple config exposure | **High** — low complexity, high impact |
| [#13332](https://github.com/NousResearch/hermes-agent/issues/13332) Hybrid tool pre-selection (semantic + keyword) — RAG-style schema injection | P3, 4 👍 | **Token optimization** — 14k tokens per call; avoids extra LLM round trips | **Medium** — requires schema indexing work |
| [#509](https://github.com/NousResearch/hermes-agent/issues/509) Cognitive memory operations (LLM-driven encoding, consolidation, adaptive recall) | P3, 4 👍 | **Memory system overhaul** — inspired by CrewAI; moves beyond flat text files | **Low-Medium** — major redesign, but tracked by maintainer (teknium1) |
| [#18374](https://github.com/NousResearch/hermes-agent/issues/18374) Cronjob: expose full prompt via `get/include_prompt` for sandboxed agents | P3, 5 👍 | **Sandboxed agent parity** — currently only 100-char preview returned | **High** — small API addition |
| [#28056](https://github.com/NousResearch/hermes-agent/issues/28056) In-run quality gates with bounded retry for cron/agent runs | P3 | **Reliability for automation** — security patrols, compliance, code review need completion criteria | **Medium** — aligns with Kanban hardening |
| [#73888](https://github.com/NousResearch/hermes-agent/issues/73888) Desktop Projects: distinguish explicit workspaces, discovered repos, unassigned Home | P3 | **UX clarity** — three entity types conflated in one "Project" list | **High** — **PR [#81359](https://github.com/NousResearch/hermes-agent/pull/81359) open** |
| [#80383](https://github.com/NousResearch/hermes-agent/issues/80383) Desktop sidebar: distinguish explicit projects from auto-discovered repos | P3 | **Same as above** — visual distinction needed | **High** — **PR [#81359](https://github.com/NousResearch/hermes-agent/pull/81359) addresses** |
| [#81405](https://github.com/NousResearch/hermes-agent/issues/81405) First-class Teams — persistent multi-profile teams with Quick Chat, channels, shared capabilities | P3 | **Next major product pillar** — builds on Profiles + Kanban primitives | **Low** — large scope, early RFC stage |
| [#81416](https://github.com/NousResearch/hermes-agent/pull/81416) Models: warn on data-training tiers at model selection | P3 | **Privacy/transparency** — Meta Muse Spark discounted because it trains on user data | **High** — simple UI guard, **PR open** |
| [#81419](https://github.com/NousResearch/hermes-agent/pull/81419) Providers: discover pip-installed model providers via entry points | P3 | **Plugin ecosystem** — closes gap between docs and reality | **High** — **PR open**, unblocks community providers |
| [#81424](https://github.com/NousResearch/hermes-agent/pull/81424) Background review config gate (master toggle for post-turn memory/skill review) | P3 | **Observability/control** — default-on gate with nested settings | **High** — **PR open**, low risk |

**Top candidates for next release:** Temperature config (#17565), Desktop project distinction (#73888/#80383 via PR #81359), Provider entry-point discovery (#81419), Data-training tier warning (#81416), Background review gate (#81424).

## 7. User Feedback Summary — Pain Points & Use Cases
| Pain Point | Evidence | Impact |
|------------|----------|--------|
| **Context compression loses tool results** | [#79278](https://github.com/NousResearch/hermes-agent/issues/79278) — "side effect completes, result never reaches agent, agent replays — unsafe for non-idempotent ops" | **Critical reliability gap** — users cannot trust long-running tool chains |
| **Gateway crashes on large session restart** | [#79624](https://github.com/NousResearch/hermes-agent/issues/79624) — "preflight compaction crashes process with exit(1)" | **Data loss risk** — sessions >98k tokens kill gateway on restart |
| **Anthropic OAuth breaks with memory tools** | [#65365](https://github.com/NousResearch/hermes-agent/issues/65365) — "deterministically triggers HTTP 400 'out of extra usage'" | **Blocks Claude Pro/Max users** from using memory/session_search |
| **Windows TUI unusable** | [#80968](https://github.com/NousResearch/hermes-agent/issues/80968) — "type any command, press Enter, gateway exits" | **Platform blocker** for Windows users |
| **Desktop windows go black (Windows)** | [#81290](https://github.com/NousResearch/hermes-agent/issues/81290) — "secondary window completely black, no diagnostics" | **Workflow disruption** — requires window recreation |
| **Duplicate startup entries on Windows** | [#80569](https://github.com/NousResearch/hermes-agent/issues/80569) — "multiple gateway launchers after install/update" | **System pollution** — scheduled tasks + Run keys + Startup folder |
| **No temperature control → hallucinations** | [#17565](https://github.com/NousResearch/hermes-agent/issues/17565) — "hardcoded via `_fixed_temperature_for_model()` or provider default (1.0)" | **Quality degradation** — 13 👍 shows broad impact |
| **Tool schema overhead (14k tokens)** | [#13332](https://github.com/NousResearch/hermes-agent/issues/13332) — "injects full schemas for ALL enabled tools regardless of relevance" | **Cost/latency** — 30+ tools = massive token waste |
| **Telegram code blocks lack copy button** | [#79331](https://github.com/NousResearch/hermes-agent/issues/79331) — "legacy MarkdownV2 path keeps it, rich message path drops it" | **Developer UX** — fixed via PR #81346 |
| **Kanban workers leak processes** | [#80280](https://github.com/NousResearch/hermes-agent/issues/80280) — "timed_out workers leave descendant process groups alive" | **Resource leaks, concurrent mutation** — PR #81411 in progress |

**

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

⚠️ Summary generation failed.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

⚠️ Summary generation failed.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-08-08

## 1. Today's Overview

IronClaw shows **high development velocity** with 50 issues and 50 PRs updated in the last 24 hours. The project is in active feature development and bug-fixing mode, with no new releases today. Key themes include: **progressive tool disclosure** (now default-on), **documentation truth pipeline** to prevent docs/code drift, **memory persistence across conversations**, **channel/Telegram/Slack reliability**, and **stress-testing infrastructure expansion**. The 14 closed issues and 12 merged/closed PRs indicate steady closure rate, while 36 open issues and 38 open PRs show substantial work in flight.

## 2. Releases

**No new releases today.** The latest release activity appears to be around the `1.1.0-rc.1` timeframe (referenced in issue #7380 regarding upgrade gaps).

---

## 3. Project Progress — Merged/Closed Today

| PR / Issue | Title | Category | Link |
|------------|-------|----------|------|
| **#7372** | test(disclosure): pin wide-catalog schema-token reduction floor and make drift visible | Tool Disclosure / Testing | [PR #7372](https://github.com/nearai/ironclaw/pull/7372) |
| **#7157** | feat: explicit channel delivery tool — two lanes, notification channels, delivery heuristics deleted | Channels / Core Architecture | [PR #7157](https://github.com/nearai/ironclaw/pull/7157) |
| **#7224** | [Inspector] Add the Activity timeline and turn navigation | Observability / Inspector | [Issue #7224](https://github.com/nearai/ironclaw/issues/7224) |
| **#7367** | Docs drift: published docs still say chat cannot connect channels, feeding model refusals | Documentation / Channels | [Issue #7367](https://github.com/nearai/ironclaw/issues/7367) |
| **#6476** | Slack extension_activate fails with encoding error, causing model to hallucinate admin requirements | Slack Integration / Bug | [Issue #6476](https://github.com/nearai/ironclaw/issues/6476) |
| **#6644** | Telegram replies delivered to wrong user message | Telegram / Bug | [Issue #6644](https://github.com/nearai/ironclaw/issues/6644) |
| **#6643** | Telegram messages accepted but never processed after pairing | Telegram / Bug | [Issue #6643](https://github.com/nearai/ironclaw/issues/6643) |
| **#6475** | Telegram /pair command not recognized, trapping user in pairing loop | Telegram / Bug | [Issue #6475](https://github.com/nearai/ironclaw/issues/6475) |
| **#6810** | Make progressive tool disclosure default-on without degrading everyday tool use | Tool Disclosure / Epic | [Issue #6810](https://github.com/nearai/ironclaw/issues/6810) |
| **#4874** | Bug: WebChat v2 chat send fails with "Illegal invocation" over plain HTTP | WebChat / Security | [Issue #4874](https://github.com/nearai/ironclaw/issues/4874) |
| **#7214** | feat(sandbox): add explicit Docker and Railway user sandbox profiles | Sandbox / Infrastructure | [PR #7214](https://github.com/nearai/ironclaw/pull/7214) |
| **#7324** | chore(deps): bump the everything-else group across 1 directory with 11 updates | Dependencies | [PR #7324](https://github.com/nearai/ironclaw/pull/7324) |

**Key Advances:**
- **Progressive tool disclosure** is now default-on (#6810 closed, #7372 adds regression test)
- **Channel delivery redesigned** with explicit two-lane model (#7157 merged)
- **Inspector Activity timeline** implemented for real-time observability (#7224)
- **Sandbox profiles** for Docker/Railway added (#7214)
- **Multiple Telegram/Slack bugs** resolved in batch

---

## 4. Community Hot Topics — Most Active Issues/PRs

| Item | Comments | Summary | Underlying Need |
|------|----------|---------|-----------------|
| **[#7340](https://github.com/nearai/ironclaw/issues/7340)** No way to reset model settings to factory defaults | 6 | Users cannot restore original model/provider config after changes | **Config recoverability** — users need safe reset path |
| **[#6989](https://github.com/nearai/ironclaw/issues/6989)** Token accounting: hybrid provider-usage + tail estimates | 4 | `ModelWorkRequest` estimates from reference string length, not content | **Accurate token estimation** for cost/latency prediction |
| **[#7317](https://github.com/nearai/ironclaw/issues/7317)** Proposal: Doc-Truth Verification Pipeline | 3 | Breaking changes shipped without doc updates (3 confirmed cases) | **Docs↔code sync** — prevent drift via automated gates |
| **[#7360](https://github.com/nearai/ironclaw/issues/7360)** Expand stress coverage across built-in and durable write paths | 2 | Nightly stress test doesn't exercise tool calls | **Reliability under load** — catch regressions in write paths |
| **[#7185](https://github.com/nearai/ironclaw/issues/7185)** Memory not reliably recalled across conversations | 2 | Context from conversation A not available in B | **Cross-conversation memory** — core assistant capability |
| **[#7292](https://github.com/nearai/ironclaw/issues/7292)** Installed tool cannot be used; runner heartbeat error | 2 | CoinGecko tool installs but fails at runtime | **Tool activation reliability** — install ≠ usable |

**PRs with notable discussion:**
- **[#7374](https://github.com/nearai/ironclaw/pull/7374)** feat(disclosure): bulk `tool_describe` to collapse per-schema round-trips (XL, core) — performance optimization for tool disclosure
- **[#6938](https://github.com/nearai/ironclaw/pull/6938)** fix(skills): the model chooses the skill, not a keyword scorer (XL, core) — architectural shift to model-driven skill selection
- **[#7375](https://github.com/nearai/ironclaw/pull/7375)** docs: fix live drift in extension, responses API, and channel docs (doc-truth PR 1/5)
- **[#7379](https://github.com/nearai/ironclaw/pull/7379)** release(docs): deploy public docs from `docs-live` branch moved by stable releases (doc-truth PR 4/5)

---

## 5. Bugs & Stability — Reported Today (Ranked by Severity)

| Severity | Issue | Description | Fix PR? |
|----------|-------|-------------|---------|
| **Critical** | **[#7298](https://github.com/nearai/ironclaw/issues/7298)** Request fails before send / monitoring loses runner contact | Infrastructure errors causing run failures on Railway QA | No |
| **Critical** | **[#5456](https://github.com/nearai/ironclaw/issues/5456)** Routine runs fail with runner lease expiration (90s too aggressive) | Multi-tool routines timeout during inference/API calls | No |
| **High** | **[#7292](https://github.com/nearai/ironclaw/issues/7292)** Installed tool unusable; runner heartbeat error | Tool installs but fails at invocation time | No |
| **High** | **[#7074](https://github.com/nearai/ironclaw/issues/7074)** Multi-tool meeting research fails after calendar data retrieval | Model calls unavailable function post-Calendar success | No |
| **High** | **[#7344](https://github.com/nearai/ironclaw/issues/7344)** Slack connection not recognized despite ACTIVE status | Assistant denies working Slack connection | No |
| **High** | **[#7247](https://github.com/nearai/ironclaw/issues/7247)** Agent falsely claims GitHub already connected | Hallucinated auth state without verification | No |
| **High** | **[#7295](https://github.com/nearai/ironclaw/issues/7295)** Agent leaks/confuses Slack user identity in response | DM attributed to wrong user (sergey.astretsov) | No |
| **Medium** | **[#6590](https://github.com/nearai/ironclaw/issues/6590)** `serve` fails on Windows: workspace root overlaps skill root | Windows dev environment broken | No |
| **Medium** | **[#7368](https://github.com/nearai/ironclaw/issues/7368)** Channel turns take minutes on DeepSeek-class models | Latency behind Telegram "never processed" issue | No |
| **Medium** | **[#7369](https://github.com/nearai/ironclaw/issues/7369)** No way to capture traces when agent errors | UI trace button missing during errors | No |
| **Medium** | **[#7185](https://github.com/nearai/ironclaw/issues/7185)** Memory not reliably recalled across conversations | Three root causes; **fix PR #7365 open** | **Yes: #7365** |
| **Medium** | **[#6989](https://github.com/nearai/ironclaw/issues/6989)** Token accounting estimates from ref string, not content | Incorrect token estimates for ModelWorkRequest | No |
| **Low** | **[#7340](https://github.com/nearai/ironclaw/issues/7340)** No reset to factory defaults for model settings | UX gap — no recovery path | No |
| **Low** | **[#7246](https://github.com/nearai/ironclaw/issues/7246)** Agent hallucinates automation status | Fabricates running automations that don't exist | No |
| **Low** | **[#7294](https://github.com/nearai/ironclaw/issues/7294)** Agent incorrectly remembers Telegram routine from another scope | Cross-thread/scope memory leakage | No |

**Critical infrastructure issues** (#7298, #5456) affect run reliability on Railway. **Tool/channel integration bugs** cluster around Slack/Telegram/GitHub — suggesting connection state synchronization problems. **Memory/hallucination issues** (#7185, #7246, #7247, #7294, #7295) point to systemic context/state management gaps.

---

## 6. Feature Requests & Roadmap Signals

| Signal | Source | Likelihood for Next Version |
|--------|--------|----------------------------|
| **Doc-Truth Verification Pipeline** | [#7317](https://github.com/nearai/ironclaw/issues/7317) + PRs #7375-#7379, #7381 | **Very High** — 5-PR implementation already open |
| **Progressive Tool Disclosure enhancements** | [#6810](https://github.com/nearai/ironclaw/issues/6810) closed, [#7374](https://github.com/nearai/ironclaw/pull/7374), [#7385](https://github.com/nearai/ironclaw/pull/7385) | **High** — default-on shipped; bulk describe + metrics in flight |
| **Model-driven Skill Selection** | [#6938](https://github.com/nearai/ironclaw/pull/6938) | **High** — XL PR, core author, stacked on epic #6941 |
| **Reset to Factory Defaults (model settings)** | [#7340](https://github.com/nearai/ironclaw/issues/7340) | **Medium** — clear UX need, 6 comments |
| **Stress Coverage for Tool Calls** | [#7360](https://github.com/nearai/ironclaw/issues/7360) + [#7382](https://github.com/nearai/ironclaw/pull/7382) | **High** — PR open for scripted tool-call workload |
| **Persisted-State Compatibility Enforcement** | [#7380](https://github.com/nearai/ironclaw/issues/7380) | **High** — epic to prevent upgrade gaps like 1.0→1.1 |
| **Schema-Aware Ranked Tool Search** | [#7177](https://github.com/nearai/ironclaw/issues/7177) | **Medium** — P2 suggested, improves disclosure retrieval |
| **Cross-Conversation Memory Fix** | [#7185](https://github.com/nearai/ironclaw/issues/7185) + [#7365](https://github.com/nearai/ironclaw/pull/7365) | **High** — PR open with 3 root cause fixes |
| **Channel Delivery Tool (two-lane model)** | [#7157](https://github.com/nearai/ironclaw/pull/7157) merged + [#7377](https://github.com/nearai/ironclaw/pull/7377) | **Done/Iterating** — core merged, follow-ups open |
| **Windows Dev Support** | [#6590](https://github.com/nearai/ironclaw/issues/6590) | **Medium** — blocks Windows contributors |

**Predicted next version (v1.2.0+):** Doc-truth pipeline, tool disclosure metrics/bulk-describe, memory fixes, stress test expansion, persisted-state compatibility gates. Model-driven skills likely in same or following release.

---

## 7. User Feedback Summary — Real Pain Points

| Pain Point | Evidence | Impact |
|------------|----------|--------|
| **"I changed model settings and can't get defaults back"** | [#7340](https://github.com/nearai/ironclaw/issues/7340) — 6 comments, customer-reported | Config frustration; no recovery path |
| **"Agent doesn't remember what I told it in previous chats"** | [#7185](https://github.com/nearai/ironclaw/issues/7185) — Champions weekly check-in, multiple testers | Core assistant trust erosion |
| **"Slack shows connected but agent says it's not"** | [#7344](https://github.com/nearai/ironclaw/issues/7344), [#6476](https://github.com/nearai/ironclaw/issues/6476), [#7295](https://github.com/nearai/ironclaw/issues/7295) | Channel integration unreliable |
| **"Telegram pairing loops / messages lost / wrong replies"** | [#6475](https://github.com/nearai/ironclaw/issues/6475), [#6643](https://github.com/nearai/ironclaw/issues/6643), [#6644](https://github.com/nearai/ironclaw/issues/6644) — all closed but cluster suggests fragility | Messaging channel trust |
| **"Agent hallucinates: says GitHub connected / automation running / wrong user"** | [#7247](https://github.com/nearai/ironclaw/issues/7247), [#7246](https://github.com/nearai/ironclaw/issues/7246), [#7295](https://github.com/nearai/ironclaw/issues/7295) | **Systemic hallucination** — agent confabulates state |
| **"Runs fail with lease expiration / runner contact lost"** | [#5456](https://github.com/nearai/ironclaw/issues/5456), [#7298](https://github.com/nearai/ironclaw/issues/7298) | Infrastructure unreliability for multi-step tasks |
| **"Windows dev environment broken"** | [#6590](https://github.com/nearai/ironclaw/issues/6590) | Contributor friction |
| **"Docs say X but code does Y"** | [#7317](https://github.com/nearai/ironclaw/issues/7317), [#7367](https://github.com/nearai/ironclaw/issues/7367) — 3 confirmed drift cases | Developer/user misdirection |

**Overall sentiment:** Users encounter **state synchronization bugs** (connection status, memory, auth) and **hallucinated confidence** from the agent. Infrastructure reliability for long-running

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-08-08

## 1. Today's Overview
LobsterAI shipped **v2026.8.7** today, a focused patch release addressing three items: a Cowork conversation-search feature, Markdown/LaTeX delimiter handling, and a Windows installer watchdog crash. In the last 24 h the repository saw **7 issue updates** (4 still open, 3 closed as stale) and **7 PR updates** (6 merged/closed, 1 open). Activity is moderate and maintenance-oriented—no major feature work landed, but the team is clearing a backlog of stale April issues and fixing regressions introduced in the recent 2026.8.5 cycle. Overall project health appears stable with a steady cadence of small, user-facing fixes.

## 2. Releases
### **LobsterAI 2026.8.7** (2026-08-07)
| Change | Type | PR | Notes |
|--------|------|----|-------|
| Cowork: title-bar conversation search | Feature | [#2435](https://github.com/netease-youdao/LobsterAI/pull/2435) | Adds in-conversation search entry in Cowork title bar |
| Markdown: LaTeX math delimiters | Feature | [#2449](https://github.com/netease-youdao/LobsterAI/pull/2449) | Improves rendering of `$...$` / `$$...$$` delimiters |
| Windows installer: null watchdog exit-code rescue | Fix | [#2446](https://github.com/netease-youdao/LobsterAI/pull/2446) | Prevents installer crash when watchdog returns null exit code |

**Breaking changes / migration**: None reported. All changes are additive or corrective.

## 3. Project Progress (Merged/Closed PRs Today)
| PR | Area | Summary | Linked Issue |
|----|------|---------|--------------|
| [#2451](https://github.com/netease-youdao/LobsterAI/pull/2451) | `renderer, docs, main, openclaw, cowork, windows` | **Release 2026.8.5 → main** – rolls up Cowork search, math rendering, IM analytics, OpenClaw config, plugin install, Windows reliability | Release branch |
| [#2450](https://github.com/netease-youdao/LobsterAI/pull/2450) | `renderer` | Restores fullscreen code-toolbar clicks on Windows (overlay kept out of Electron drag regions) | — |
| [#2449](https://github.com/netease-youdao/LobsterAI/pull/2449) | `renderer, main, openclaw` | Fixes Markdown LaTeX math delimiters | — |
| [#2448](https://github.com/netease-youdao/LobsterAI/pull/2448) | `renderer, openclaw, cowork` | Implements Cowork chat search (title-bar entry) | — |
| [#2445](https://github.com/netease-youdao/LobsterAI/pull/2445) | `main, openclaw` | Strips plugin-index-managed keys from `config.set` to avoid config pollution | — |
| [#2446](https://github.com/netease-youdao/LobsterAI/pull/2446) | `docs, windows` | Rescues null watchdog exit code in Windows installer extractor | — |

**Net advancement**: UI polish (search, math, fullscreen), config hygiene, and Windows installer hardening.

## 4. Community Hot Topics
| Item | Type | Comments | 👍 | Core Need / Signal |
|------|------|----------|----|---------------------|
| [#2443](https://github.com/netease-youdao/LobsterAI/issues/2443) | Issue (Open) | 1 | 0 | **Model IDs with slashes (e.g., `deepseek-ai/DeepSeek-V4-Flash`) break UI selection** for custom OpenAI-compatible providers (SiliconFlow). Blocking for multi-vendor model users. |
| [#2444](https://github.com/netease-youdao/LobsterAI/issues/2444) | Issue (Open) | 0 | 0 | **Input-box “edit mode” request**: default Enter=new-line, Ctrl+Enter=send, with expanded textarea. UX pain point for long-prompt authors. |
| [#2447](https://github.com/netease-youdao/LobsterAI/issues/2447) | Issue (Open) | 1 | 0 | **Silent execution failure**—no output, no error. Screenshot suggests agent/tool chain stall. |
| [#1195](https://github.com/netease-youdao/LobsterAI/issues/1195) | Issue (Open, stale) | 2 | 0 | **Custom skill installs to OpenClaw path but disappears from panel after restart**—path mismatch between installer and loader. |
| [#1273](https://github.com/netease-youdao/LobsterAI/issues/1273) | Issue (Closed, stale) | 2 | 0 | **sql.js WASM OOM/corruption under high-frequency writes**—architectural storage risk. |

**Takeaway**: The freshest friction points are **provider/model ID parsing** (#2443) and **prompt-authoring UX** (#2444). The stale-but-unfixed skill-install bug (#1195) and WASM storage limit (#1273) indicate deeper architectural debt.

## 5. Bugs & Stability (Ranked by Severity)
| Severity | Issue | Status | Fix PR? | Notes |
|----------|-------|--------|---------|-------|
| **High** | [#2447](https://github.com/netease-youdao/LobsterAI/issues/2447) – Silent execution failure (no output, no error) | Open | No | User reports complete stall; needs reproduction & logging. |
| **High** | [#1273](https://github.com/netease-youdao/LobsterAI/issues/1273) – sql.js WASM `memory access out of bounds` + DB corruption risk | Closed (stale) | No | Root cause: non-atomic `fs.writeFileSync` + WASM heap fragmentation. Architectural fix (e.g., SQLite native, WAL, or periodic vacuum) still pending. |
| **Medium** | [#2443](https://github.com/netease-youdao/LobsterAI/issues/2443) – Slashed model IDs unusable in UI (SiliconFlow) | Open | **Yes** – [#2452](https://github.com/netease-youdao/LobsterAI/pull/2452) (open) | PR preserves provider prefix when model ID contains `/`. Awaiting review/merge. |
| **Medium** | [#1195](https://github.com/netease-youdao/LobsterAI/issues/1195) – Custom skill installed to OpenClaw dir but missing from panel after restart | Open (stale) | No | Path resolution mismatch; skill loader doesn’t scan OpenClaw directory. |
| **Low** | [#2450](https://github.com/netease-youdao/LobsterAI/pull/2450) – Fullscreen code toolbar clicks broken on Windows | Fixed (merged) | Yes | Overlay z-order/drag-region fix shipped in 2026.8.7. |

## 6. Feature Requests & Roadmap Signals
| Request | Source | Likelihood for Next Minor |
|---------|--------|---------------------------|
| **Input-box edit mode** (Enter=new-line, Ctrl+Enter=send, expanded textarea, optional WYSIWYG) | [#2444](https://github.com/netease-youdao/LobsterAI/issues/2444) | **High** – pure UI, low risk, strong UX value for power users. |
| **Per-agent IM bot & model binding** (multi-agent teams with distinct bots/models) | [#1265](https://github.com/netease-youdao/LobsterAI/issues/1265) (stale) | **Medium** – requires config schema & runtime changes; may wait for multi-agent refactor. |
| **Atomic, corruption-proof DB writes** (replace `fs.writeFileSync` + sql.js) | [#1273](https://github.com/netease-youdao/LobsterAI/issues/1273) | **Low** – architectural; likely deferred to major version or native SQLite migration. |
| **Skill loader scanning OpenClaw directory** | [#1195](https://github.com/netease-youdao/LobsterAI/issues/1195) | **Medium** – fixes broken custom-skill workflow; small scope. |

## 7. User Feedback Summary
| Pain Point | Frequency | Representative Quote |
|------------|-----------|----------------------|
| **Prompt authoring friction** (Shift+Enter vs Enter) | 1 new issue, 0 comments but clear UX gap | “Writing long prompts requires frequent line breaks; forgetting Shift sends half-finished message.” ([#2444](https://github.com/netease-youdao/LobsterAI/issues/2444)) |
| **Custom provider model IDs with slashes unusable in UI** | 1 new issue, 1 comment | “Model ID `deepseek-ai/DeepSeek-V4-Flash` cannot be selected in Settings → Models.” ([#2443](https://github.com/netease-youdao/LobsterAI/issues/2443)) |
| **Silent agent/tool failures** | 1 new issue, 1 comment | Screenshot shows empty execution panel—no output, no error toast. ([#2447](https://github.com/netease-youdao/LobsterAI/issues/2447)) |
| **Skill installation appears successful but vanishes on restart** | 1 stale issue, 2 comments | “Installed to OpenClaw skill dir, restart → skill panel empty.” ([#1195](https://github.com/netease-youdao/LobsterAI/issues/1195)) |
| **DB crashes under heavy Cowork usage** | 1 stale issue, 2 comments | “WASM `memory access out of bounds` after long sessions; DB file corrupts on hard kill.” ([#1273](https://github.com/netease-youdao/LobsterAI/issues/1273)) |

**Sentiment**: Users appreciate rapid patch releases (2026.8.5 → 2026.8.7 in days) but hit **sharp edges** in multi-provider model config, long-prompt writing, and skill/plugin persistence. No systemic outrage—mostly “paper cuts” and one silent-failure mystery.

## 8. Backlog Watch (Stale / Unanswered Items Needing Maintainer Attention)
| Item | Age | Why It Matters | Suggested Action |
|------|-----|----------------|------------------|
| [#1195](https://github.com/netease-youdao/LobsterAI/issues/1195) – Skill install path mismatch | 4 months | Blocks custom-skill workflow on Windows; simple path-config fix. | Add OpenClaw skill dir to loader scan paths; add integration test. |
| [#1273](https://github.com/netease-youdao/LobsterAI/issues/1273) – sql.js WASM OOM & corruption | 4 months | Data-loss risk for heavy Cowork users; architectural. | Prototype native `better-sqlite3` backend or implement atomic write + periodic vacuum; document workaround. |
| [#1265](https://github.com/netease-youdao/LobsterAI/issues/1265) – Per-agent IM/model binding | 4 months | Enables true multi-agent teams; high-value for power users. | Design config extension (`agent.imBotId`, `agent.modelId`); schedule for next minor. |
| [#2452](https://github.com/netease-youdao/LobsterAI/pull/2452) – Fix slashed model IDs (open PR) | 1 day | Unblocks SiliconFlow & similar providers. | **Priority review/merge**—small, targeted, user-facing. |
| [#2447](https://github.com/netease-youdao/LobsterAI/issues/2447) – Silent execution failure | 1 day | Potential regression in agent/tool pipeline. | Request logs/repro; add error-boundary telemetry. |

---
*Digest generated from GitHub API data as of 2026-08-08. All links point to netease-youdao/LobsterAI.*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-08-08

## 1. Today's Overview
CoPaw (QwenPaw) shows **high velocity with 80 total items updated in 24h** (31 issues, 49 PRs). The project released **v2.1.0-beta.2** with two critical CI/workspace fixes. Open issues (20) slightly exceed closed (11), indicating active discovery. PR merge rate is healthy at ~45% (22/49). Community engagement is strong — top issues have 6-8 comments each, signaling real user pain points around Docker deployment, MCP reliability, and desktop UX regressions.

## 2. Releases
### v2.1.0-beta.2
| Change | Type | Link |
|--------|------|------|
| `fix(ci)`: Fence-aware section extraction in real-behavior-proof (fixes #6626) | Bug fix / CI | [#6653](https://github.com/agentscope-ai/QwenPaw/pull/6653) |
| `fix(checkpoints)`: Restore auto snapshots in web workspace bootstrap | Bug fix / Workspace | [#6](https://github.com/agentscope-ai/QwenPaw/pull/6) |

**No breaking changes or migration notes** — both are targeted hotfixes for beta stability.

## 3. Project Progress (Merged/Closed PRs Today)
| PR | Title | Area | Status |
|----|-------|------|--------|
| [#4694](https://github.com/agentscope-ai/QwenPaw/pull/4694) | feat(website): downloads UI Refactoring and opt | Website/UX | **Closed** (long-running, 2.5 months) |
| [#6116](https://github.com/agentscope-ai/QwenPaw/issues/6116) | [Bug] Doom loop: agent repeatedly triggers same tool call | Agent loop safety | **Closed (wontfix)** |
| [#6789](https://github.com/agentscope-ai/QwenPaw/issues/6789) | Telegram 401 Unauthorized / GitHub binding stuck | Auth/Telegram | **Closed** |
| [#6790](https://github.com/agentscope-ai/QwenPaw/issues/6790) | Desktop mode double-click to open | Desktop UX | **Closed** |
| [#6796](https://github.com/agentscope-ai/QwenPaw/issues/6796) | Can't submit new session during task execution (beta2) | Chat/UX | **Closed** |
| [#6797](https://github.com/agentscope-ai/QwenPaw/issues/6797) | Desktop mode text selection/copy broken | Desktop UX | **Closed** |
| [#6787](https://github.com/agentscope-ai/QwenPaw/issues/6787) | Duplicate of #6786 (Telegram ACL reset) | Auth/Telegram | **Closed** |
| [#6773](https://github.com/agentscope-ai/QwenPaw/issues/6773) | Linux doom-loop / rubric gates inactive in `/goal` | Agent safety | **Closed** |
| [#6717](https://github.com/agentscope-ai/QwenPaw/issues/6717) | Test patrol bot | CI/Infra | **Closed** |
| [#6619](https://github.com/agentscope-ai/QwenPaw/issues/6619) | ToolCallBlock missing `extra_content` field crash | Providers/OpenAI compat | **Closed** |
| [#6565](https://github.com/agentscope-ai/QwenPaw/issues/6565) | execute_shell_command: multiline → space + PIPE hang | Shell/Tools | **Closed** |
| [#6480](https://github.com/agentscope-ai/QwenPaw/issues/6480) | nohup/background commands hang agent | Shell/Tools | **Closed** |

**Key advancement**: Multiple shell/tool execution bugs closed (#6565, #6480, #6619), plus desktop UX regressions addressed (#6797, #6790). The "doom loop" safety issue (#6116, #6773) was closed as `wontfix` — maintainers may need to revisit if community pushes back.

## 4. Community Hot Topics (Most Active Issues/PRs)
| Item | Comments | Type | Core Need |
|------|----------|------|-----------|
| [#6116](https://github.com/agentscope-ai/QwenPaw/issues/6116) | 8 | 🐛 Closed (wontfix) | **Agent loop safety** — users lose tokens/API calls to runaway tool calls; want earlier detection |
| [#6782](https://github.com/agentscope-ai/QwenPaw/issues/6782) | 8 | 🐛 **Open** | **Docker plugin/app market broken** — "under maintenance" error blocks core extensibility |
| [#6732](https://github.com/agentscope-ai/QwenPaw/issues/6732) | 6 | 🐛 **Open** | **MCP tools silently fail** until container restart — reliability blocker for tool-heavy workflows |
| [#6490](https://github.com/agentscope-ai/QwenPaw/issues/6490) | 4 | ✨ **Open** | **Provider expansion** — Volcengine Agent Plan + Xiaomi MiMo (Chinese cloud LLMs) |
| [#6786](https://github.com/agentscope-ai/QwenPaw/issues/6786) | 4 | 🐛 **Open** | **Telegram ACL reset** on per-task workspace spawn — breaks multi-user bots |
| [#6770](https://github.com/agentscope-ai/QwenPaw/issues/6770) | 3 | ✨ **Open** | **Chrome tab lifetime config** — browser automation persistence across turns |
| [#6780](https://github.com/agentscope-ai/QwenPaw/issues/6780) | 3 | ❓ **Open** | **Idle freeze** after ~10 min — process becomes unresponsive, requires kill/restart |

**Underlying themes**: 
- **Deployment friction** (Docker, Windows installer locking files [#6810](https://github.com/agentscope-ai/QwenPaw/issues/6810))
- **Tool/MCP reliability** — core agent capability failing silently
- **Multi-user/ACL gaps** in ACP/multica workflows
- **Desktop UX regressions** in v2.1 beta (text selection, double-click, session submission)

## 5. Bugs & Stability (Reported Today, Ranked by Severity)
| Severity | Issue | Description | Fix PR? |
|----------|-------|-------------|---------|
| 🔴 **Critical** | [#6782](https://github.com/agentscope-ai/QwenPaw/issues/6782) | Docker plugin/app market permanently "under maintenance" — blocks all extensions | ❌ |
| 🔴 **Critical** | [#6732](https://github.com/agentscope-ai/QwenPaw/issues/6732) | MCP tools stop working until container restart — no logs, silent failure | ❌ |
| 🔴 **Critical** | [#6813](https://github.com/agentscope-ai/QwenPaw/issues/6813) | `consume_model_response` raises `KeyError: '__aiter__'` — breaks auto-title generation | ❌ |
| 🟠 **High** | [#6810](https://github.com/agentscope-ai/QwenPaw/issues/6810) | Windows install/update fails — NSIS can't overwrite locked files (browser extension NM host) | ❌ |
| 🟠 **High** | [#6812](https://github.com/agentscope-ai/QwenPaw/issues/6812) | Gemini provider sends `$schema` field — rejected by Google API (400) | ❌ |
| 🟠 **High** | [#6786](https://github.com/agentscope-ai/QwenPaw/issues/6786) | Telegram ACL whitelist resets per ACP task — approved users blocked | ✅ [#6788](https://github.com/agentscope-ai/QwenPaw/pull/6788) |
| 🟠 **High** | [#6785](https://github.com/agentscope-ai/QwenPaw/issues/6785) | Custom persona `.md` files hidden in Console UI (regression) | ✅ [#6808](https://github.com/agentscope-ai/QwenPaw/pull/6808) |
| 🟠 **High** | [#6794](https://github.com/agentscope-ai/QwenPaw/issues/6794) | Agent Kanban: POST `/api/agent-kanban/issues` returns 405; hot-reload 404 | ❌ |
| 🟡 **Medium** | [#6803](https://github.com/agentscope-ai/QwenPaw/issues/6803) | OpenAI-compat requests carry Responses-API fields — rejected by strict providers (StepFun) | ✅ [#6809](https://github.com/agentscope-ai/QwenPaw/pull/6809) |
| 🟡 **Medium** | [#6775](https://github.com/agentscope-ai/QwenPaw/issues/6775) | MalwareBytes flags Windows desktop as Trojan Loader (false positive?) | ❌ |
| 🟡 **Medium** | [#6807](https://github.com/agentscope-ai/QwenPaw/issues/6807) | qwenpaw-creator plugin: video/image generation broken on Windows | ❌ |
| 🟡 **Medium** | [#6806](https://github.com/agentscope-ai/QwenPaw/issues/6806) | qwenpaw-creator: cannot save model config (500) on Windows | ❌ |
| 🟡 **Medium** | [#6811](https://github.com/agentscope-ai/QwenPaw/issues/6811) | OpenAI Responses summary ignores `disable_thinking`, misreports 60s timeout | ❌ |
| 🟡 **Medium** | [#6770](https://github.com/agentscope-ai/QwenPaw/issues/6770) | Chrome tab lifetime not configurable across response cycles | ❌ |
| 🟡 **Medium** | [#6780](https://github.com/agentscope-ai/QwenPaw/issues/6780) | Process freezes after ~10 min idle — requires restart | ❌ |

**Fix PRs exist for 4/15 high+ bugs** — ACL reset, custom personas, OpenAI-compat sanitization, and (partial) shell temp leakage.

## 6. Feature Requests & Roadmap Signals
| Request | Issue | Signals | Likelihood for Next Release |
|---------|-------|---------|----------------------------|
| **Volcengine Agent Plan + Xiaomi MiMo providers** | [#6490](https://github.com/agentscope-ai/QwenPaw/issues/6490) | Explicit PR-ready ask; Chinese cloud LLM demand | 🟢 High — provider adds are low-risk |
| **Chrome tab lifetime config** | [#6770](https://github.com/agentscope-ai/QwenPaw/issues/6770) | Power-user browser automation need; upstream main branch verified | 🟡 Medium — needs design |
| **WeChat Chinese approval replies (允许/拒绝)** | [#6728](https://github.com/agentscope-ai/QwenPaw/issues/6728) via [#6804](https://github.com/agentscope-ai/QwenPaw/pull/6804) | PR open, localized UX | 🟢 High — PR ready |
| **Mailbox/email management assistant** | [#6800](https://github.com/agentscope-ai/QwenPaw/pull/6800) | New plugin-scale feature; first-time contributor | 🟡 Medium — needs review |
| **ReMe memory: embedding validation, Daily Paper, cron tasks** | [#6772](https://github.com/agentscope-ai/QwenPaw/pull/6772) | Major memory subsystem PR; config UI included | 🟡 Medium — large scope |
| **ACP runner: update deprecated npm packages** | [#6792](https://github.com/agentscope-ai/QwenPaw/issues/6792) | `@zed-industries/*` packages deprecated | 🟢 High — maintenance |
| **qwen3.8-max-preview in Aliyun model list** | [#6285](https://github.com/agentscope-ai/QwenPaw/issues/6285) | Model list hardcoded; upstream supports it | 🟢 High — trivial data update |

## 7. User Feedback Summary
| Pain Point | Evidence | Sentiment |
|------------|----------|-----------|
| **Docker deployment broken** | [#6782](https://github.com/agentscope-ai/QwenPaw/issues/6782) (8 comments), plugin market unusable |

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-08-08

## 1. Today's Overview
ZeroClaw shows **high engineering velocity** with 50 issues and 50 PRs updated in the last 24 hours, though only 3 PRs were merged/closed — indicating active development and review cycles rather than completion. The project is in a **heavy refactoring and hardening phase**: multiple RFCs around architecture (provider unification, plugin catalog, observability), critical security fixes (shell containment, API key leakage, forbidden paths), and daemon/runtime stability work dominate. No new release was cut today. The ratio of open-to-closed work (47:3 PRs, 45:5 issues) suggests the team is broadening scope faster than closing, which warrants monitoring for release readiness.

## 2. Releases
**No new releases today.** The last release data is not shown in this window; the project appears to be on a pre-release or continuous-delivery cadence from `master`.

## 3. Project Progress — Merged/Closed Today
| PR / Issue | Title | Area | Status |
|------------|-------|------|--------|
| [#9836](https://github.com/zeroclaw-labs/zeroclaw/pull/9836) | fix(transcription): make local_whisper bearer_token optional | CI, deps, transcription | **Closed** |
| [#8933](https://github.com/zeroclaw-labs/zeroclaw/issues/8933) | RFC: Add cross-turn conversation correlation to OTel export | Observability, OTel | **Closed** (accepted) |
| [#9246](https://github.com/zeroclaw-labs/zeroclaw/issues/9246) | RFC: Preserve Todo tracker config during ZeroCode ownership migration | Config, ZeroCode | **Closed** (in-progress → accepted) |
| [#6055](https://github.com/zeroclaw-labs/zeroclaw/issues/6055) | Slack: hydrate thread context from conversations.replies on first mention | Channel: Slack | **Closed** (accepted) |
| [#9386](https://github.com/zeroclaw-labs/zeroclaw/issues/9386) | Bug: Gemini API key in request URL survives sanitize_api_error and leaks to chat | Security, Provider: Gemini | **Closed** (accepted) |

**Net progress**: 5 items closed (3 PRs, 2 RFCs accepted, 1 bug fix accepted). The closed RFCs (#8933, #9246) signal architectural decisions now moving to implementation. The security leak fix (#9386) is a high-severity closure.

## 4. Community Hot Topics — Most Discussed (by comment count)
| Item | Comments | Area | Core Need |
|------|----------|------|-----------|
| [#8933](https://github.com/zeroclaw-labs/zeroclaw/issues/8933) RFC: Cross-turn OTel correlation | 13 | Observability | **Production-grade tracing**: correlate multi-turn conversations in OTel for debugging/analytics |
| [#9246](https://github.com/zeroclaw-labs/zeroclaw/issues/9246) RFC: Todo tracker config migration | 12 | Config, ZeroCode | **State preservation** during ownership handoff — critical for user trust in automation |
| [#5937](https://github.com/zeroclaw-labs/zeroclaw/issues/5937) Refactor: Unify providers & reqwest client | 12 | Providers, Architecture | **Reduce duplication & inconsistency** in provider layer — blocked by architectural scope |
| [#8424](https://github.com/zeroclaw-labs/zeroclaw/issues/8424) RFC: Workspace-relative forbidden paths + .zeroclawignore | 10 | Security, Config | **Protect sensitive files inside workspace** (`.env`, config files) — current model only blocks outside paths |
| [#8043](https://github.com/zeroclaw-labs/zeroclaw/issues/8043) RFC: Retire aardvark-sys crate | 9 | Hardware, Architecture | **Simplify build & unsafe surface** by folding FFI crate into `zeroclaw-hardware` |

**Signal**: Top discussions are **RFCs** (4 of 5), not bugs — the community is debating **architectural direction** (observability, security boundaries, provider architecture, hardware integration). This is a healthy sign of maturing governance but slows feature delivery.

## 5. Bugs & Stability — Reported Today (Ranked by Severity)
| Issue | Severity | Area | Fix PR? | Summary |
|-------|----------|------|---------|---------|
| [#9840](https://github.com/zeroclaw-labs/zeroclaw/issues/9840) Daemon steals/unlinks `daemon.sock` on start/exit | **S1 — Workflow blocked** | Daemon, Runtime | No | Second daemon breaks first; socket left unusable for all |
| [#9816](https://github.com/zeroclaw-labs/zeroclaw/issues/9816) Anthropic provider reports $0.00 spend — budget caps never fire | **P1 / High** | Provider: Anthropic, Cost | No | `cost_usd` always 0.0; daily/monthly budgets ineffective |
| [#9815](https://github.com/zeroclaw-labs/zeroclaw/issues/9815) `forbidden_paths` unreachable under `allowed_roots`/workspace | **P1 / High** | Security, Config | No | Allow-list check short-circuits before forbid-list — **security bypass** |
| [#9805](https://github.com/zeroclaw-labs/zeroclaw/issues/9805) SOP auto-mode from channel/cron triggers never executes, rots as `running` | **P1 / High** | SOP, Daemon, Runtime | No | Headless dispatch lacks agent loop; holds concurrency slot forever |
| [#9775](https://github.com/zeroclaw-labs/zeroclaw/issues/9775) OpenRouter streaming drops `provider_extra` | **S1 — Workflow blocked** | Provider: OpenRouter | **[#9775](https://github.com/zeroclaw-labs/zeroclaw/pull/9775)** (open) | `merge_extra_body` not called in stream path |
| [#9770](https://github.com/zeroclaw-labs/zeroclaw/issues/9770) `cron update` silently discards 6 declarative job columns | **P1 / High** | Cron, CLI | No | Changes to `command`, `schedule`, `allowed_tools`, etc. lost without error |
| [#9825](https://github.com/zeroclaw-labs/zeroclaw/issues/9825) Leak detector redacts public blockchain addresses (false positive) | **Medium** | Security: Leak Detection | No | Payment URLs broken; entropy heuristic over-redacts |
| [#9820](https://github.com/zeroclaw-labs/zeroclaw/issues/9820) Calculator tool: model emits `<TOOLCALL>` pseudo-syntax instead of real function call | **Medium** | Tool: Calculator, Provider | No | Model (Nemotron) not respecting function-calling format |
| [#9821](https://github.com/zeroclaw-labs/zeroclaw/issues/9821) Cron tool never invoked; agent falls back to `shell crontab` (blocked by policy) | **Medium** | Tool: Cron, Agent | No | Tool registration/visibility issue on aarch64 |
| [#9786](https://github.com/zeroclaw-labs/zeroclaw/issues/9786) Malformed `SOP.toml` silently dropped — `sop list` omits, `sop validate` reports success | **P1 / High** | SOP, CLI, Docs | No | **Silent failure** — indistinguishable from typo/deleted SOP |

**Critical cluster**: Daemon socket handling (#9840), Anthropic cost tracking (#9816), forbidden-paths bypass (#9815), and SOP headless execution (#9805) are **all P1/S1 with no fix PR yet** — these block production reliability.

## 6. Feature Requests & Roadmap Signals
| Issue / PR | Signal | Likelihood for Next Version |
|------------|--------|----------------------------|
| [#9810](https://github.com/zeroclaw-labs/zeroclaw/issues/9810) RFC: Load Agent Plugins 1.0 (skill + MCP packages) | **High** — vendor-neutral plugin standard; filed by core contributor (NiuBlibing) | **High** — aligns with #6489 catalog vision; RFC just opened |
| [#9346](https://github.com/zeroclaw-labs/zeroclaw/issues/9346) RFC: Unified package/capability/config/runtime-state catalog | **High** — product-level catalog across integrations, built-ins, plugins | **High** — consolidates #8908, #8909; needs maintainer review |
| [#9824](https://github.com/zeroclaw-labs/zeroclaw/issues/9824) Simplify default web tools to `web_fetch` + `web_research` + `http_request` | **Medium** — UX simplification; moves raw search behind sub-agent | **Medium** — PR [#9833](https://github.com/zeroclaw-labs/zeroclaw/pull/9833) open implementing `web_research` delegate |
| [#8965](https://github.com/zeroclaw-labs/zeroclaw/pull/8965) Skills: declarative auto-activation with provider switch & image-turn blocking | **High** — stacked PR, large scope (XL), needs rebase on #9563 | **Medium** — depends on channel/media fixes landing first |
| [#9828](https://github.com/zeroclaw-labs/zeroclaw/pull/9828) Agent-facing config authoring with operator-approved policy previews | **High** — 6-commit stack; replaces raw `echo > config.toml` | **High** — security-critical; enables safe agent self-configuration |
| [#8043](https://github.com/zeroclaw-labs/zeroclaw/issues/8043) Retire `aardvark-sys` crate (fold into `zeroclaw-hardware`) | **Medium** — reduces unsafe surface; RFC accepted | **Medium** — follows #8028 gating; build break on `hardware` feature ([#9832](https://github.com/zeroclaw-labs/zeroclaw/issues/9832)) suggests urgency |

**Roadmap prediction**: Next version will likely include **plugin catalog unification (#9346/#9810)**, **web tool simplification (#9824/#9833)**, **agent config authoring (#9828)**, and **hardware crate consolidation (#8043)** — all have active PRs/RFCs. Observability OTel correlation (#8933) is accepted but implementation not yet visible.

## 7. User Feedback Summary — Real Pain Points
| Source | Pain Point | Evidence |
|--------|------------|----------|
| [#9825](https://github.com/zeroclaw-labs/zeroclaw/issues/9825) | **Leak detector breaks legitimate workflows** — public blockchain addresses redacted, payment URLs undeliverable | "False positive rather than a bug… the problem is that the thing it is designed to detect and the thing it is catching are not the same" |
| [#9820](https://github.com/zeroclaw-labs/zeroclaw/issues/9820) + [#9821](https://github.com/zeroclaw-labs/zeroclaw/issues/9821) | **Tool calling unreliable on aarch64/Nemotron** — calculator emits pseudo-syntax; cron tool invisible to agent | Prebuilt aarch64 (RPi 5) + NVIDIA NIM model; tools work via CLI but not agent |
| [#9786](https://github.com/zeroclaw-labs/zeroclaw/issues/9786) | **Silent SOP failures** — malformed config dropped with no diagnostic; `validate` lies | "`sop validate` reports success… indistinguishable from a typo or a deleted SOP" |
| [#9656](https://github.com/zeroclaw-labs/zeroclaw/issues/9656) | **Telegram typing indicator stuck during approval wait** — looks like working turn | "Blocked turn looks like a working one" — UX confusion during human-in-the-loop |
| [#9780](https://github.com/zeroclaw-labs/zeroclaw/issues/9780) | **Cron SOPs cannot do network work** — no HTTP capability; shell/notify placeholders unsatisfiable | "Docs present cron-triggered SOPs as way to build watch-loops… in practice cannot perform any network work" |
| [#9832](https://github.com/zeroclaw-labs/zeroclaw/issues/9832) | **`zeroclaw-hardware` fails to compile with `--features hardware`** — unresolved `aardvark_sys` import | Docker build on aarch64 Debian; blocks hardware feature adoption |

**Theme**: **Reliability gaps in edge cases** (aarch64, headless, approval flows, config validation) and **overzealous security tooling** (leak detector, forbidden paths) are the top user frustrations. Users expect "it works on CLI → it works in agent" parity.

## 8. Backlog Watch — Stale High-Value Items Needing Maintainer Attention
| Item | Age | Status | Why It Matters |
|------|-----|--------|----------------|
| [#5937](https://github.com/zeroclaw-labs/zeroclaw/issues/5937) Unify providers architecture & reqwest client | ~4 months | Open, accepted, needs author action | **Foundational refactor** — blocks consistent provider behavior, duplicates config; 12 comments show deep engagement |
| [#8424](https://github.com/zeroclaw-labs/zeroclaw/issues/8424) Workspace-relative forbidden paths + `.zeroclawignore` | ~1.5 months | Open, RFC, needs author action | **Security gap** — cannot protect `.env`, `config.yaml` inside workspace; 10 comments, high risk |
| [#7130](https://github.com/zeroclaw-labs/zeroclaw/issues/7130) `forbid(unsafe_code)` workspace-wide with `aardvark-sys` carve-out | ~2 months | Open, accepted, no stale | **Supply-chain hardening** — only one `unsafe` crate allowed; blocked by #8043 retirement |
| [#8948](https://github.com/zeroclaw-labs/zeroclaw/pull/8948) Reap exited stdio MCP server processes (zombies) | ~1 month | Open, needs author action | **Daemon stability** — zombie processes pile up; partial fix in #9418 but PR stalled |
| [#8964](https://github.com/zeroclaw-labs/zeroclaw/pull/8964) Sanitize streaming draft partials at assistant boundary | ~1 month | Open, needs author action | **Security** — streaming drafts bypass leak detection; raw `<tool_call>` can leak |
| [#9384](https://github.com/zeroclaw-labs/zeroclaw/pull/9384) Resolve shell command paths to block symlink escapes | ~2 weeks | Open, distinguished contributor | **Defense-in-depth** — partial mitigation for symlink escapes in workspace; not complete fix |
| [#7232](https://github.com/zeroclaw-labs/zeroclaw/issues/7232) Structured observability: rich events, OTel trace correlation, bridge refactor | ~2 months | Closed but needs maintainer review | **Observability foundation** — accepted RFC but implementation tracking unclear |

**Action needed**: #5937 (providers), #8424 (forbidden paths), and #8948 (MCP zombies) are **architectural blockers with community consensus** but stalled on author/maintainer bandwidth. The `aardvark-sys` retirement (#8043) unblocks #7130 (unsafe forbid) and fixes #9832 (build break).

---

## Health Indicators Summary
| Metric | Signal |
|--------|--------|
| **Issue/PR velocity** | High (100 total updates/24h) but **low closure rate** (6% PRs, 10% issues) |
| **Security posture** | **Active hardening** (4 P

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/DenisZheng/agents-radar).*