# OpenClaw Ecosystem Digest 2026-04-21

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-04-21 00:16 UTC

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

# OpenClaw Project Digest — 2026-04-21

## 1. Today's Overview

OpenClaw shows **extremely high community activity** with 500 issues and 500 PRs updated in the last 24 hours, indicating a mature, actively maintained project with substantial user adoption. The project is currently in a **stabilization phase** — no new releases were cut today, but heavy engineering focus is evident across gateway reliability, UI polish, and multi-channel integrations. A notable concern is the **high open-to-closed ratio** (314 open issues vs. 186 closed; 338 open PRs vs. 162 merged/closed), suggesting potential backlog accumulation. The most active work streams center on transcript persistence, media handling, CLI performance, and security infrastructure.

---

## 2. Releases

**No new releases** were published today. The latest release remains prior to 2026-04-21.

---

## 3. Project Progress

### Merged/Closed PRs Today (Selected Significant Items)

| PR | Description | Impact |
|:---|:---|:---|
| [#43961](https://github.com/openclaw/openclaw/pull/43961) | **SIGKILL stale process when graceful shutdown times out** — forces SIGKILL after 10s SIGTERM window expires on gateway restart/stop | Fixes gateway restart reliability; prevents port conflicts from zombie processes |
| [#57737](https://github.com/openclaw/openclaw/pull/57737) | **Telegram polling stall threshold: 90s → 300s** | Reduces false gateway restarts during legitimate LLM processing |
| [#68721](https://github.com/openclaw/openclaw/pull/68721) | **Codex app-server: default approvals to on-request** | Security hardening — prevents silent command execution |
| [#69072](https://github.com/openclaw/openclaw/pull/69072) | **Codex session lane release on projector throw** | Fixes critical follow-up message freezing in Codex sessions |
| [#68310](https://github.com/openclaw/openclaw/pull/68310) | **Retry silent `stopReason=error` turns** | Improves resilience for non-frontier models in embedded runner |
| [#43392](https://github.com/openclaw/openclaw/pull/43392) | **WebSocket 1006 race condition fix** | Prevents abnormal closure errors from handler attachment timing |
| [#67280](https://github.com/openclaw/openclaw/pull/67280) | **ACP session key reuse for persistent spawns** | Enables proper session resumption with labels |
| [#69477](https://github.com/openclaw/openclaw/pull/69477) | **Default Moonshot to Kimi 2.6** | Keeps bundled provider current with upstream API |

### Open PRs Advancing (High Priority)

| PR | Description | Status |
|:---|:---|:---|
| [#69500](https://github.com/openclaw/openclaw/pull/69500) | **Restore managed media transcript persistence in webchat** — image-only and agent-run audio replies render live but fail to persist | Open, XL size, created today |
| [#69479](https://github.com/openclaw/openclaw/pull/69479) | **CLI: keep channel status checks off plugin runtimes** — fixes cold command latency spikes from unnecessary plugin imports | Open, XL size, addresses #69042 |
| [#69483](https://github.com/openclaw/openclaw/pull/69483) | **GHSA detector-review pipeline + OpenGrep CI workflows** — turns security advisories into reusable scanning rules | Open, major security infrastructure |
| [#69486](https://github.com/openclaw/openclaw/pull/69486) | **Ancestry-aware cleanup of rewrite-abandoned transcript entries** — fixes transcript bloat from append-only semantics | Open, L size |
| [#68612](https://github.com/openclaw/openclaw/pull/68612) | **WhatsApp typing indicator through acceptance + debounce** | Open, XL size, UX improvement |

---

## 4. Community Hot Topics

### Most Active Issues (by Comment Count + Engagement)

| Issue | Comments | 👍 | Core Need |
|:---|:---:|:---:|:---|
| [#75](https://github.com/openclaw/openclaw/issues/75) **Linux/Windows Clawdbot Apps** | 88 | 71 | **Cross-platform parity** — macOS/iOS/Android have native apps; Linux/Windows users excluded from full ClawdBot experience. This is the **#1 user-requested feature by far**, dating to January 2026. |
| [#37757](https://github.com/openclaw/openclaw/issues/37757) **IDENTITITY.md typo** | 26 | 0 | Polish/quality — cosmetic bug in system prompt display undermines professional perception |
| [#48205](https://github.com/openclaw/openclaw/issues/48205) **Gateway restarts every ~50 min ("reason=none")** | 21 | 0 | **Operational reliability** — production deployments unstable, monitoring blind to root cause |
| [#34830](https://github.com/openclaw/openclaw/issues/34830) **401 missing auth header (OpenRouter regression)** | 20 | 0 | **Auth/config regression** — upgrade broke existing working setups |
| [#37623](https://github.com/openclaw/openclaw/issues/37623) **GPT-5.4 configurable but not supported at runtime** | 16 | 7 | **Model support transparency** — config suggests capability that doesn't exist; user confusion |

### Underlying Needs Analysis

- **Platform expansion** dominates user demand (#75) — the 71 upvotes represent substantial unmet need for desktop Linux/Windows parity
- **Gateway stability** is a recurring operational pain point (#48205, #40089) — restart logic has multiple failure modes
- **Config-model runtime mismatch** (#37623) indicates need for stricter validation or "coming soon" flags

---

## 5. Bugs & Stability

### Critical/High Severity

| Issue | Severity | Status | Fix PR? | Description |
|:---|:---:|:---:|:---:|:---|
| [#48205](https://github.com/openclaw/openclaw/issues/48205) Gateway restarts ~50min | **Critical** | Closed | Partial | Process crash with no actionable reason; closed but pattern suggests systemic issue |
| [#68944](https://github.com/openclaw/openclaw/issues/68944) CLI hangs at WebSocket handshake | **Critical** | Open | No | All CLI subcommands hang indefinitely after `connect.challenge` — **regression in 2026.4.15** |
| [#68735](https://github.com/openclaw/openclaw/issues/68735) LLM request failed: provider rejected schema | **High** | Open | No | **Regression 2026.4.14→2026.4.15**, github-copilot/gpt-5-mini fails after first message |
| [#65603](https://github.com/openclaw/openclaw/issues/65603) Azure Foundry GPT: provider rejected request schema | **High** | Open | No | Regression in 2026.4.11 — reasoning + tool calling broken |
| [#37834](https://github.com/openclaw/openclaw/issues/37834) Session context corruption: permanent 400 loop | **High** | Open | No | Orphaned `tool_use` ID after abort causes unrecoverable session state |

### Medium Severity

| Issue | Status | Fix PR? | Notes |
|:---|:---:|:---:|:---|
| [#52037](https://github.com/openclaw/openclaw/issues/52037) Codex OAuth token refresh not persisting | Open | No | Tokens lost on refresh → re-auth every ~8h |
| [#64454](https://github.com/openclaw/openclaw/issues/64454) Slack subagent messages bypass thread routing | Open | No | Missing `subagent_delivery_target` hook |
| [#58602](https://github.com/openclaw/openclaw/issues/58602) Discord `/new` slash command timeout | Open | No | Needs `deferReply()` — 3s Discord limit |
| [#65993](https://github.com/openclaw/openclaw/issues/65993) Feishu streaming card: duplicate/truncated messages | Open | No | Long reply rendering broken |

### Regressions Cluster (2026.4.x)

Multiple **2026.4.14→2026.4.15 regressions** detected:
- [#68735](https://github.com/openclaw/openclaw/issues/68735): github-copilot/gpt-5-mini schema rejection
- [#68944](https://github.com/openclaw/openclaw/issues/68944): WebSocket handshake hang

This suggests **release quality process gaps** in the 2026.4.x series.

---

## 6. Feature Requests & Roadmap Signals

| Issue | 👍 | Description | Likelihood in Next Version |
|:---|:---:|:---|:---:|
| [#75](https://github.com/openclaw/openclaw/issues/75) Linux/Windows Clawdbot Apps | 71 | Native desktop apps for missing platforms | Medium — high demand, but XL effort; may be prioritized for H2 2026 |
| [#34097](https://github.com/openclaw/openclaw/issues/34097) Native MCP server integration | 3 | Model Context Protocol support (Claude Desktop, Cursor standard) | **High** — industry standard momentum; relatively self-contained |
| [#6731](https://github.com/openclaw/openclaw/issues/6731) Safe/unsafe ClawdBot modes | 0 | Rust-inspired safety sandboxing | Low — architectural, philosophical; no maintainer engagement |
| [#65906](https://github.com/openclaw/openclaw/pull/65906) `{context}`/`{contextPercent}` template variables | — | Context window usage in response prefixes | **In Progress** — PR open, small scope |

### Emerging Signals

- **MCP (Model Context Protocol)** is becoming table-stakes for agent frameworks; OpenClaw's lack of native support risks competitive positioning
- **Context window transparency** (#65906) indicates user need for visibility into resource constraints
- **Security/sandboxing** (#6731, #69483) growing theme — enterprise readiness

---

## 7. User Feedback Summary

### Pain Points (Explicit)

| Theme | Evidence | Severity |
|:---|:---|:---:|
| **Gateway reliability** | #48205, #40089, #68944 — restarts, hangs, dead services | Critical |
| **Upgrade fragility** | #34830, #68735, #65603, #35078 — regressions across 2026.3.x→2026.4.x | High |
| **Platform exclusion** | #75 — Linux/Windows users second-class | High |
| **Auth/OAuth fragility** | #52037, #34117, #35095 — token refresh, key validation, JWT audience | High |
| **Media handling** | #69500 (fix in progress), #69309 — silent drops, persistence failures | Medium |
| **Channel-specific quirks** | Slack threads (#64454), Discord timeouts (#58602), Feishu cards (#65993), WhatsApp latency (#68612) | Medium |

### Use Cases & Satisfaction

- **Multi-channel deployments** are common (Telegram, Discord, Slack, Feishu, WhatsApp, Teams) — users expect parity across all
- **Embedded/agent modes** heavily used — #30025, #37623, #37591 indicate active agent development
- **Docker + sandbox** (#31331) attempted but workspace access broken — power user friction

### Dissatisfaction Signals

- "Stale" label prevalence on important issues (#37757, #37623, #37591, #35807) suggests **maintainer bandwidth constraints**
- Multiple "regression" labels indicate **quality perception erosion**
- #68944 reporter (#48205 same author) — repeat victim of gateway instability

---

## 8. Backlog Watch

### Long-Unanswered Important Issues (Needs Maintainer Attention)

| Issue | Age | Last Update | Risk |
|:---|:---:|:---|:---|
| [#75](https://github.com/openclaw/openclaw/issues/75) Linux/Windows Clawdbot Apps | ~4 months | 2026-04-20 | **Highest user demand** — 71 👍, no maintainer response visible; platform strategy gap |
| [#37623](https://github.com/openclaw/openclaw/issues/37623) GPT-5.4 config/runtime mismatch | ~6 weeks | 2026-04-20 | User confusion, stale label; model support claims need validation |
| [#37591](https://github.com/openclaw/openclaw/issues/37591) macOS `system.run.prepare` missing | ~6 weeks | 2026-04-20 | Blocks `system.run` on macOS nodes; 5 👍 |
| [#35807](https://github.com/openclaw/openclaw/issues/35807) PowerShell pipeline corruption | ~6 weeks | 2026-04-20 | Windows exec tool broken; supersedes locked #6443 |
| [#35805](https://github.com/openclaw/openclaw/issues/35805) Governance file drift detection | ~6 weeks | 2026-04-20 | Silent coordination failures; supersedes locked #7050 |
| [#40089](https://github.com/openclaw/openclaw/issues/40089) Gateway restart leaves service dead | ~6 weeks | 2026-04-20 | Production operational risk; no PR linked |

### PRs Needing Review/Merge

| PR | Age | Size | Blocker? |
|:---|:---:|:---:|:---|
| [#57843](https://github.com/openclaw/openclaw/pull/57843) Delivery hook cancellation disambiguation | ~3 weeks | M | Core delivery reliability |
| [#10356](https://github.com/openclaw/openclaw/pull/10356) Typecast TTS provider | ~10 weeks | L | Community contribution, Asian language support |
| [#68534](https://github.com/openclaw/openclaw/pull/68534) Dreaming cooldown guard | ~3 days | M | Prevents token explosion (34M+ tokens consumed) |

---

## Project Health Assessment

| Metric | Assessment |
|:---|:---|
| **Activity** | 🔥 Very High — 1000 items updated/24h indicates vibrant ecosystem |
| **Responsiveness** | ⚠️ Concerning — high open/closed ratio, "stale" label overuse, repeat regressions |
| **Stability** | ⚠️ Degrading — 2026.4.x series showing multiple regressions; gateway reliability chronic |
| **Community** | ✅ Strong — detailed bug reports, active PRs, multi-platform usage |
| **Strategic** | ⚠️ At Risk — #75 platform gap, MCP missing, quality process gaps |

**Recommendation**: Immediate focus on 2026.4.15 regression triage (#68735, #68944), plus process improvement to prevent release-series quality decay. Long-term: resource #75 or communicate roadmap clearly.

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: Personal AI Agent Open-Source Ecosystem
**Date:** 2026-04-21 | **Projects Analyzed:** 11

---

## 1. Ecosystem Overview

The personal AI assistant/agent open-source ecosystem is experiencing intense parallel development across multiple architectural philosophies, from Zig-based microkernels (NullClaw) to TypeScript-heavy gateway systems (OpenClaw, PicoClaw) and Rust-influenced frameworks (ZeroClaw). All projects share a common challenge: bridging LLM provider fragmentation with reliable multi-channel deployment while managing the tension between rapid feature expansion and production stability. The space is consolidating around MCP (Model Context Protocol) as a de facto standard for tool integration, though implementation maturity varies dramatically. Enterprise adoption signals—multi-tenancy, security hardening, OAuth robustness—are increasingly visible, yet most projects remain pre-1.0 with significant quality process gaps.

---

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Release Status | Health Score* | Phase |
|:---|:---:|:---:|:---|:---:|:---|
| **OpenClaw** | 500 | 500 | None (stabilization) | ⚠️ 6/10 | Stabilization |
| **NanoBot** | 12 | 51 | None | ✅ 7/10 | Production hardening |
| **Hermes Agent** | 50 | 50 | None | ⚠️ 6/10 | Feature expansion |
| **PicoClaw** | 13 | 114 | Nightly v0.2.6 | 🔴 4/10 | Stability crisis |
| **NanoClaw** | 1 | 25 | None | ✅ 7/10 | v2 stabilization |
| **NullClaw** | 1 | 3 | None | ⚠️ 5/10 | Reactive stabilization |
| **IronClaw** | 50 | 50 | None | ⚠️ 5/10 | Quality hardening |
| **LobsterAI** | 1 | 50 | None | ✅ 7/10 | Enterprise deployment |
| **TinyClaw** | 0 | 1 | None | ✅ 6/10 | Maintenance |
| **Moltis** | 9 (all closed) | 17 | **20260420.02** | ✅ 8/10 | Active shipping |
| **CoPaw/QwenPaw** | 42 | 50 | v1.1.3-beta.1 | ⚠️ 6/10 | Rebrand recovery |
| **ZeroClaw** | 46 | 50 | None (v0.7.4 pending) | ⚠️ 6/10 | Architectural transition |
| **ZeptoClaw** | 0 | 0 | None | 🔴 2/10 | Dormant |

*\*Health Score composite: activity level, open/closed ratio, regression frequency, release cadence, issue resolution speed*

---

## 3. OpenClaw's Position

| Dimension | OpenClaw | Peer Comparison |
|:---|:---|:---|
| **Scale** | 1000 items/24h (highest raw volume) | 2-10× NanoBot, Hermes, IronClaw; comparable to PicoClaw PRs but more balanced |
| **Maturity** | Reference implementation status; widest channel coverage (Telegram, Discord, Slack, Feishu, WhatsApp, Teams) | NanoClaw, Moltis comparable; PicoClaw broader but unstable |
| **Technical approach** | Gateway-centric with Codex app-server integration; transcript-persistence architecture; ACP session management | ZeroClaw microkernel, NullClaw Zig-native, NanoBot memory-batched I/O |
| **Community** | Largest external contributor base; 71 👍 on #75 indicates substantial user demand | Hermes (21 👍 on memory), Moltis (zero open issues = tight feedback loop) |
| **Critical gaps** | Linux/Windows desktop apps absent; MCP native support missing; 2026.4.x regression cluster | NanoClaw has Signal/Matrix E2EE; Moltis has self-improving agents; ZeroClaw has WASM plugins |

**Verdict:** OpenClaw maintains **ecosystem reference status** by breadth and documentation, but faces **competitive erosion** in security (Moltis' Agent Shield), local-first deployment (NanoClaw's Ollama/Whisper), and architectural innovation (ZeroClaw's microkernel). Its stabilization phase risks ceding mindshare to faster-shipping alternatives if quality process gaps persist.

---

## 4. Shared Technical Focus Areas

| Requirement | Projects | Specific Needs |
|:---|:---|:---|
| **MCP ecosystem maturity** | NanoBot, PicoClaw, NanoClaw, Moltis, IronClaw | Native server integration (NanoBot #2389), per-chat scoping (NanoBot #2424), legacy SSE transport (Moltis #805), lifecycle management (PicoClaw #1666) |
| **Gateway reliability** | OpenClaw, PicoClaw, NullClaw, Hermes | SIGKILL stale processes (OpenClaw #43961), accept-loop CPU spin (NullClaw #851), OAuth expiry (PicoClaw #2163), restart context loss (Hermes #13121) |
| **Cross-platform desktop** | OpenClaw, CoPaw, ZeroClaw | Linux/Windows native apps (OpenClaw #75), macOS build fixes (CoPaw #3622), ARM64 binaries (ZeroClaw #4842) |
| **Provider schema resilience** | OpenClaw, NanoBot, PicoClaw, Hermes, Moltis | GPT-5.x runtime validation (OpenClaw #37623), DeepSeek deserialization (NanoBot #3328), `openai_compat` auth header drops (PicoClaw #2578), JSON truncation (Hermes #12242), Gemini thought_signature (Moltis #795) |
| **State persistence** | IronClaw, Hermes, OpenClaw | Messages disappear on refresh (IronClaw #2285), session context corruption (OpenClaw #37834), iCloud Drive latency (Hermes #10047) |
| **Security/sandboxing** | Moltis, ZeroClaw, CoPaw, NanoClaw | Agent Shield multi-user (PicoClaw #2313), shell guard bypass (ZeroClaw #5773), `ShellEvasionGuardian` (CoPaw #3400), unknown-channel approval (NanoClaw #1877) |

---

## 5. Differentiation Analysis

| Project | Core Differentiator | Target User | Architecture Signature |
|:---|:---|:---|:---|
| **OpenClaw** | Reference breadth; Codex integration | Multi-channel deployers | Gateway + transcript persistence |
| **NanoBot** | Performance engineering; MCP depth | Production operators | Memory-batched I/O, bounded queues |
| **Hermes Agent** | Multimodal STT; private inference (TEE) | Privacy-conscious enterprises | `hermes_mem` subsystem, NEAR AI/Phala |
| **PicoClaw** | Low-cost hardware deployment | Raspberry Pi/edge users | Multi-provider gateway, resource-constrained optimization |
| **NanoClaw** | Local-first; privacy channels | Self-hosters, home automation | Ollama/Whisper native, Signal/Matrix E2EE |
| **NullClaw** | Zig-native; minimal footprint | Embedded systems | POSIX-bypass networking, SysVinit |
| **IronClaw** | TEE/confidential computing; NEAR ecosystem | Web3/TEE developers | WASM runtime, credential injection |
| **LobsterAI** | Enterprise IM (NetEase/DingTalk/Popo) | Chinese workplace users | Electron app, SQLite durability |
| **Moltis** | Self-improving agent loop | Autonomous agent researchers | Skill creation/deployment pipeline |
| **CoPaw/QwenPaw** | Console plugin ecosystem; Plan mode | Multi-agent workflow builders | Per-agent model assignment, semantic routing |
| **ZeroClaw** | Microkernel; WASM plugin bridge | Extensible agent platform | Workspace split, Extism WASM, schema versioning |

---

## 6. Community Momentum & Maturity

| Tier | Projects | Characteristics |
|:---|:---|:---|
| **🔥 Rapid iteration** | Moltis, NanoBot, CoPaw | Same-day resolution rates; active shipping; contributor growth |
| **⚡ High velocity, quality debt** | OpenClaw, Hermes, IronClaw, ZeroClaw | 50-100 items/day; regression clusters; open:closed ratios >2:1 |
| **🛠️ Stabilizing** | NanoClaw, LobsterAI | Lower issue volume; focused hardening; production polish |
| **🚨 Crisis mode** | PicoClaw | Authentication catastrophically broken; 106 open PRs vs 8 merged; nightly builds required for stability |
| **😴 Maintenance/dormant** | NullClaw, TinyClaw, ZeptoClaw | Minimal activity; reactive bug fixes; unclear forward momentum |

**Key inflection:** Moltis demonstrates that **controlled velocity with zero open issues** is achievable; PicoClaw shows the opposite extreme where high PR volume without merge capacity creates instability. OpenClaw risks sliding from tier 2 toward tier 3 if 2026.4.x regressions aren't contained.

---

## 7. Trend Signals

| Trend | Evidence | Value for Developers |
|:---|:---|:---|
| **MCP as table stakes** | NanoBot's 6 MCP PRs, PicoClaw #1666, Moltis #805, IronClaw #1378 | Standardize tool integration; reduce per-provider adapter burden |
| **Voice modality emergence** | Hermes Gemini STT (#13174), ZeroClaw full-duplex voice (#5896), Moltis voice docs (#802) | Prepare for ambient/phone-call interaction patterns |
| **Self-hosted/local model surge** | NanoClaw Ollama (#1859), Whisper (#1876), ZeroClaw llama.cpp (#5815), PicoClaw edge deployment | Reduce API costs and data exposure; expect hardware optimization demands |
| **Memory architecture competition** | Hermes `hermes_mem` (#6323, 21 👍), ZeroClaw Dream Mode (#5849), Moltis self-improvement (#803) | Persistent, cross-session memory becoming core differentiator |
| **Security hardening acceleration** | Multiple shell guards, TEE attestation, multi-user Agent Shield | Enterprise adoption requires provable sandboxing |
| **Rebrand fragility** | CoPaw→QwenPaw migration crisis (#3356) | Plan directory migration tooling; avoid hardcoded names |
| **Schema versioning necessity** | ZeroClaw schema v2→v3 (#5947), OpenClaw config/runtime mismatches (#37623) | Invest in forward-compatible configuration systems early |
| **Platform parity pressure** | OpenClaw #75 (71 👍), ZeroClaw ARM64 (#4842), CoPaw Windows path issues | Desktop and ARM cannot remain second-class; container-first is insufficient |

---

*Report compiled from 11 project digests covering 1,372 issues and 1,061 PRs updated 2026-04-20 to 2026-04-21.*

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-04-21

## 1. Today's Overview

NanoBot showed **exceptionally high development velocity** with 51 PRs updated in the last 24 hours (30 merged/closed, 21 open) and 12 issues active. The project is in a **mature maintenance-and-optimization phase** with no new releases, but substantial engineering effort focused on performance hardening, correctness fixes, and multi-channel stability. A notable concentration of work addresses agent loop reliability, memory/cursor corruption, and streaming improvements—suggesting the core runtime is being production-hardened for scale.

---

## 2. Releases

**None** — No new releases published. The project remains at its previous version; all changes are on `main`/development branch.

---

## 3. Project Progress

### Merged/Closed PRs Today (30 total; key highlights)

| PR | Author | Summary | Impact |
|:---|:---|:---|:---|
| [#3158](https://github.com/HKUDS/nanobot/pull/3158) | mohamed-elkholy95 | **Mega-PR split into 6 focused PRs** — agent performance, responsiveness & correctness enhancements from ~66.5K LOC analysis | Foundation for all below |
| [#3184](https://github.com/HKUDS/nanobot/pull/3184) | mohamed-elkholy95 | Profiling infrastructure: `ProfilingHook` for iteration/timing measurement | Observability |
| [#3183](https://github.com/HKUDS/nanobot/pull/3183) | First-token streaming priority + Responses API failure tracking | Fixes cross-stream corruption, improves perceived latency | Critical UX |
| [#3182](https://github.com/HKUDS/nanobot/pull/3182) | Cache bootstrap files, tool schemas, Dream skill list | Reduces 4 disk reads → 4 `stat()` calls per prompt | Performance |
| [#3181](https://github.com/HKUDS/nanobot/pull/3181) | Memory & history I/O: batching, `writelines()`, `mmap` for consolidation | 2-3x history throughput, 50% consolidation time reduction | Scalability |
| [#3180](https://github.com/HKUDS/nanobot/pull/3180) | Bounded `MessageBus` queues + tool routing context safety | Prevents unbounded memory growth, fixes context leaks | Stability |
| [#3240](https://github.com/HKUDS/nanobot/pull/3240) | Harden shell-expansion bypass protections for `history.jsonl`/`.dream_cursor` | Security fix for #2989 bypass | Security |
| [#3297](https://github.com/HKUDS/nanobot/pull/3297) | Anthropic: strip trailing assistant messages to prevent prefill 400 error | Provider compatibility | Reliability |
| [#3299](https://github.com/HKUDS/nanobot/pull/3299) | Preserve partial context when `/stop` cancels a task | Fixes #2966 — user data loss on interruption | UX |
| [#2417](https://github.com/HKUDS/nanobot/pull/2417) | **Fallback models support** — automatic failover on 429/500/502/503 | Production resilience | Major feature |
| [#2523](https://github.com/HKUDS/nanobot/pull/2523) | Prevent MCP-dependent tasks delegated to subagents (which lack MCP) | Fixes silent failures in multi-agent workflows | Correctness |
| [#2416](https://github.com/HKUDS/nanobot/pull/2416) | Handle MCP `ImageContent` in tool responses (base64 images) | Enables QR codes, screenshots in chat | Feature |
| [#2424](https://github.com/HKUDS/nanobot/pull/2424) | Per-chat MCP server scoping via `allowedChats` | Multi-tenant MCP routing | Enterprise |
| [#3335](https://github.com/HKUDS/nanobot/pull/3335) | "Sayg system" / "最终机制" (final mechanism) | Unclear scope; closed without detail | Opaque |

**Key trajectory**: The mohamed-elkholy95 PR cluster represents a systematic performance engineering push. The conversun MCP-related merges (from March, updated today) show MCP ecosystem maturation.

---

## 4. Community Hot Topics

### Most Active by Engagement

| Item | Comments | Analysis |
|:---|:---|:---|
| [#3143](https://github.com/HKUDS/nanobot/issues/3143) — LLM error 1214, "messages parameter is illegal" (Feishu token consolidation) | **9 comments** | **Critical production pain**: Feishu users hitting 65K token limits with high frequency. Token consolidation chunking (13 msgs) failing. Root cause: LLM provider rejecting malformed messages after consolidation. **Need**: Robust token management for enterprise IM platforms. |
| [#2389](https://github.com/HKUDS/nanobot/issues/2389) — OpenWebUI as official channel? | 3 comments | **Ecosystem expansion demand**: Users want unified UI layer. OpenWebUI is becoming a standard frontend for local/remote LLMs. **Need**: Decoupled channel architecture, or official UI partnership. |
| [#3326](https://github.com/HKUDS/nanobot/issues/3326) — MCP root-level notifications (scheduled reminders) | 3 comments | **MCP protocol depth**: Users pushing beyond basic tools to MCP's full lifecycle. **Need**: First-class MCP notification/notification support, not just tools. |
| [#3333](https://github.com/HKUDS/nanobot/issues/3333) — QQ channel non-streaming,封号 (account ban) risk | 2 comments | **Platform compliance**: QQ's anti-bot detection triggered by non-streaming patterns. **Need**: Streaming implementation for QQ, or stealth mode. |

**Underlying pattern**: Platform-specific fragility (Feishu tokens, QQ bans) and ecosystem integration breadth (OpenWebUI, MCP depth) are the dominant community needs.

---

## 5. Bugs & Stability

| Severity | Issue | Description | Fix Status |
|:---|:---|:---|:---|
| 🔴 **High** | [#3328](https://github.com/HKUDS/nanobot/issues/3328) | DeepSeek "failed to deserialize" error after 0.1.5→0.1.5.post1 upgrade; breaks all Telegram messages | **No fix PR yet** — regression, config migration issue suspected |
| 🔴 **High** | [#3324](https://github.com/HKUDS/nanobot/issues/3324) | WinError 193 (invalid Win32 app) on `chrome-devtools-mcp` via npx on Windows | **No fix PR yet** — Node/Windows path handling |
| 🟡 **Medium** | [#3315](https://github.com/HKUDS/nanobot/issues/3315) | Telegram "Message too long" on streaming overflow | Closed — likely fixed by streaming improvements |
| 🟡 **Medium** | [#3073](https://github.com/HKUDS/nanobot/issues/3073) | Infinite `read_file` loop on `history.jsonl` without progress | Closed — agent loop fix |
| 🟡 **Medium** | [#3319](https://github.com/HKUDS/nanobot/issues/3319) | Cron jobs leak intermediate tool hints to user channel | Closed — `on_progress` routing fix |
| 🟢 **Low** | [#2921](https://github.com/HKUDS/nanobot/issues/2921) | MSTeams restart notify config exposed but unimplemented | Open — stale config debt |

**Regression alert**: The DeepSeek deserialization failure (#3328) is a **post-upgrade breaking change** affecting all Telegram users — highest priority for next hotfix.

---

## 6. Feature Requests & Roadmap Signals

| Request | Issue/PR | Likelihood in Next Version | Rationale |
|:---|:---|:---|:---|
| **Human takeover / bot pause** | [#3322](https://github.com/HKUDS/nanobot/issues/3322) | High | Clear enterprise need (WhatsApp handoff); small scope |
| **OpenWebUI official channel** | [#2389](https://github.com/HKUDS/nanobot/issues/2389) | Medium | Ecosystem trend; requires architectural decision |
| **MCP notifications/root-level** | [#3326](https://github.com/HKUDS/nanobot/issues/3326) | Medium | Protocol completeness; MCP is strategic |
| **QQ streaming** | [#3333](https://github.com/HKUDS/nanobot/issues/3333) | Medium | Platform survival (封号 = account ban) |
| **Behavioral learning guide** | [#3339](https://github.com/HKUDS/nanobot/pull/3339) | High (docs) | PR already open; zero core changes |
| **Spawn status/cancel tools** | [#3303](https://github.com/HKUDS/nanobot/pull/3303) | High | PR open; subagent orchestration is active dev area |
| **Cursor recovery hardening** | [#3340](https://github.com/HKUDS/nanobot/pull/3340) | High | PR open; fixes production crash |

**Prediction**: Next release will emphasize **subagent observability** (spawn status/cancel), **resilience** (cursor recovery, fallback models already merged), and **MCP ecosystem depth**.

---

## 7. User Feedback Summary

### Pain Points
- **Upgrade fragility**: DeepSeek regression (#3328) shows config/schema changes between patch versions breaking production
- **Platform-specific limits**: Feishu token ceilings, QQ anti-bot, Telegram message length — each channel has unique constraints not fully abstracted
- **Windows support gaps**: MCP + Node toolchain assumptions fail on Windows (#3324)
- **Context loss on interruption**: `/stop` destroying partial work — now fixed (#3299), but discovery latency hurt users

### Use Cases
- **Enterprise IM integration** (Feishu, QQ, MSTeams, WhatsApp) — multi-channel is core value prop
- **MCP-as-plugin-ecosystem** — users treating MCP servers like app store, needing per-chat scoping and image handling
- **Human-in-the-loop workflows** — explicit demand for pause/resume, takeover in customer service scenarios

### Satisfaction Signals
- Active PR contributions (mohamed-elkholy95's deep performance work, conversun's MCP features) suggest **invested power users**
- Quick turnaround on #2966 → #3299 (context preservation) shows responsive maintainers

### Dissatisfaction Signals
- "这类错误出现的频率挺高的" (this error occurs frequently) — #3143 on Feishu
- 0.1.5.post1 breaking DeepSeek without migration path — release engineering concern

---

## 8. Backlog Watch

| Item | Age | Risk | Needs |
|:---|:---|:---|:---|
| [#2921](https://github.com/HKUDS/nanobot/issues/2921) MSTeams restart notify unimplemented | ~12 days | Config debt confusing users | Decision: implement or deprecate config keys |
| [#2389](https://github.com/HKUDS/nanobot/issues/2389) OpenWebUI channel | ~28 days | Ecosystem positioning | Maintainer RFC on channel architecture |
| [#3202](https://github.com/HKUDS/nanobot/pull/3202) Bound inbound queue (revised from #3180) | 4 days | Memory safety in production | Review — supersedes closed #3180 |
| [#3204](https://github.com/HKUDS/nanobot/pull/3204) ProfilingHook (revised from #3184) | 4 days | Observability standard | Review — env-var activation pattern |

**Attention needed**: The mohamed-elkholy95 revision cycle (#3180→#3202, #3184→#3204) suggests iterative review but risks contributor fatigue. The MSTeams config debt (#2921) is a small papercut that accumulates trust damage.

---

*Digest generated from HKUDS/nanobot GitHub activity for 2026-04-20/21.*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-04-21

## 1. Today's Overview

Hermes Agent shows **very high development velocity** with 100 items updated in the last 24 hours (50 issues, 50 PRs), indicating an active, fast-moving codebase. The project is in a **feature expansion phase** with significant work on memory architecture (`hermes_mem`), multimodal capabilities (Gemini STT, audio input), and platform integrations (WhatsApp, Telegram, Slack). However, **stability concerns persist**: multiple critical bugs around infinite loops, JSON parsing failures, and provider authentication errors suggest growing pains as the system scales to more backends and use cases. No new release was cut today, leaving recent fixes unreleased. The contributor base appears broad with 32 open PRs awaiting review, signaling healthy community engagement but potential maintainer bandwidth constraints.

---

## 2. Releases

**No new releases** — version remains unchanged from prior release.

---

## 3. Project Progress

### Merged/Closed PRs (18 total, notable items)

| PR | Author | Summary | Impact |
|:---|:---|:---|:---|
| [#13119](https://github.com/NousResearch/hermes-agent/pull/13119) | pc418 | Fixed streaming stub format mismatch for Anthropic API mode | **Critical fix**: Prevents duplicate/corrupted messages when streams interrupt |
| [#13231](https://github.com/NousResearch/hermes-agent/pull/13231) | OutThisLife | Hardened TUI against V8 OOM crashes and GatewayClient memory leaks | **Major stability**: Fixes long-session crashes; unbounded array growth |
| [#13233](https://github.com/NousResearch/hermes-agent/pull/13233) | rodrigoeqnit | Refactor/monoliths — closed without merge | Architectural cleanup attempt, outcome unclear |
| [#13234](https://github.com/NousResearch/hermes-agent/pull/13234) | thapecroth | Classified z.ai payment errors correctly; added 400 diagnostics | Provider error handling precision |
| [#13201](https://github.com/NousResearch/hermes-agent/issues/13201) | hermes-auto | Webhook adapter surfaced as first-class capability (tracking issue closed) | Documentation/discoverability win |

**Features advancing:**
- **Private inference**: PR [#12201](https://github.com/NousResearch/hermes-agent/pull/12201) (amiller) adds NEAR AI + Phala AI with Intel TDX attestation and E2EE — significant enterprise/security positioning
- **Multimodal STT**: PR [#13174](https://github.com/NousResearch/hermes-agent/pull/13174) (Twanislas) introduces native Gemini multimodal speech-to-text with "Auditory Scene Analysis"
- **Memory subsystem**: PRs [#13236](https://github.com/NousResearch/hermes-agent/pull/13236), [#11685](https://github.com/NousResearch/hermes-agent/pull/11685) (rfpassos) draft `hermes_mem` schema and implementation plan — foundational for persistent memory

---

## 4. Community Hot Topics

| Rank | Item | Comments | 👍 | Analysis of Underlying Need |
|:---|:---|:---:|:---:|:---|
| 1 | [#7893](https://github.com/NousResearch/hermes-agent/issues/7893) Gemini auth "Multiple credentials" bug | 17 | 0 | **Provider credential hygiene**: Users struggle with overlapping auth mechanisms (API key vs. Vertex AI). Need clearer credential precedence and validation. |
| 2 | [#6323](https://github.com/NousResearch/hermes-agent/issues/6323) Add mempalace external memory | 11 | 21 | **Long-horizon agent memory**: High vote count shows demand for cross-session persistence beyond context windows. Community wants pluggable memory architecture. |
| 3 | [#9782](https://github.com/NousResearch/hermes-agent/issues/9782) nix-darwin support | 7 | 0 | **Mac developer experience**: Nix ecosystem fragmentation (nixos vs. nix-darwin) blocks adoption for macOS power users. |
| 4 | [#12242](https://github.com/NousResearch/hermes-agent/issues/12242) StepFun JSON truncation bug | 7 | 1 | **Robust JSON handling**: Naive string truncation breaks strict API consumers. Need semantic JSON-aware compression. |
| 5 | [#12639](https://github.com/NousResearch/hermes-agent/issues/12639) Native Google/Vertex AI provider | 5 | 2 | **Cost/rate-limit avoidance**: OpenRouter markups and limits drive demand for direct provider integration. |

**Key insight**: The most engaged topics cluster around **memory architecture** (external memory, context compression, session continuity) and **provider ecosystem breadth** (Gemini, Vertex, StepFun, z.ai). Users want Hermes to be provider-agnostic without sacrificing reliability.

---

## 5. Bugs & Stability

| Severity | Issue | Description | Fix PR? |
|:---|:---|:---|:---:|
| **🔴 Critical** | [#13208](https://github.com/NousResearch/hermes-agent/issues/13208) | **Infinite tool call loops** — 90+ iterations on simple errors, no loop detection | ❌ No |
| **🔴 Critical** | [#13121](https://github.com/NousResearch/hermes-agent/issues/13121) | Gateway restart loses immediate pre-restart context (JSONL vs SQLite mismatch) | ❌ No |
| **🟡 High** | [#12068](https://github.com/NousResearch/hermes-agent/issues/12068) | Memory save fails on llama.cpp — unescaped apostrophes in JSON | ❌ No |
| **🟡 High** | [#12242](https://github.com/NousResearch/hermes-agent/issues/12242) | `context_compressor` creates invalid JSON via naive truncation | ✅ Fixed in related work? (context compression area active) |
| **🟡 High** | [#10147](https://github.com/NousResearch/hermes-agent/issues/10147) | OAuth refresh token race — concurrent crons revoke session | ❌ No |
| **🟡 High** | [#12952](https://github.com/NousResearch/hermes-agent/issues/12952) | Custom keepalive transport breaks ChatGPT Codex backend | ❌ No |
| **🟢 Medium** | [#13091](https://github.com/NousResearch/hermes-agent/issues/13091) | `/v1/props` should be `GET /props` for llama.cpp compatibility | ❌ No |
| **🟢 Medium** | [#13206](https://github.com/NousResearch/hermes-agent/issues/13206) | Webhook crashes when `TELEGRAM_HOME_CHANNEL` is username not numeric ID | ❌ No |
| **🟢 Medium** | [#13195](https://github.com/NousResearch/hermes-agent/issues/13195) | Telegram groups split into unexpected sessions from `message_thread_id` | ❌ No |

**Pattern**: JSON serialization safety and session state durability are recurring failure modes. The [#13208](https://github.com/NousResearch/hermes-agent/issues/13208) infinite loop bug is particularly alarming — suggests missing guardrails in the agent execution loop.

---

## 6. Feature Requests & Roadmap Signals

| Feature | Issue/PR | Likelihood in Next Version | Rationale |
|:---|:---|:---:|:---|
| Native `hermes_mem` memory subsystem | [#6323](https://github.com/NousResearch/hermes-agent/issues/6323), PRs [#13236](https://github.com/NousResearch/hermes-agent/pull/13236), [#11685](https://github.com/NousResearch/hermes-agent/pull/11685) | **High** | Multiple PRs, schema drafted, high community votes (21 👍) |
| Gemini native provider (bypass OpenRouter) | [#12639](https://github.com/NousResearch/hermes-agent/issues/12639) | **High** | Auth bug [#7893](https://github.com/NousResearch/hermes-agent/issues/7893) being fixed; PR [#13174](https://github.com/NousResearch/hermes-agent/pull/13174) adds Gemini STT — full provider likely follows |
| WhatsApp read receipts | PR [#13185](https://github.com/NousResearch/hermes-agent/pull/13185) | **High** | Small, complete PR ready |
| Skills lifecycle management | [#11425](https://github.com/NousResearch/hermes-agent/issues/11425) | **Medium** | Well-scoped but no PR yet; 89+ skills creates real pain |
| NEAR AI/Phala private inference | PR [#12201](https://github.com/NousResearch/hermes-agent/pull/12201) | **Medium** | Large security feature, may need extended review |
| Windows WSL auto-start | PR [#13179](https://github.com/NousResearch/hermes-agent/pull/13179) | **Medium** | Complete solution, documentation included |
| Slack Block Kit migration | [#8552](https://github.com/NousResearch/hermes-agent/issues/8552) | **Low-Medium** | Platform-specific, lower priority vs. core stability |

---

## 7. User Feedback Summary

### Pain Points
- **"It forgets everything"**: Session continuity gaps ([#11793](https://github.com/NousResearch/hermes-agent/issues/11793), [#13121](https://github.com/NousResearch/hermes-agent/issues/13121)), iCloud Drive latency ([#10047](https://github.com/NousResearch/hermes-agent/issues/10047)), and lack of persistent memory ([#6323](https://github.com/NousResearch/hermes-agent/issues/6323)) frustrate users building workflows
- **"Works with X but not Y"**: Provider fragmentation — Gemini auth ([#7893](https://github.com/NousResearch/hermes-agent/issues/7893)), StepFun strictness ([#12242](https://github.com/NousResearch/hermes-agent/issues/12242)), z.ai error classification ([#13234](https://github.com/NousResearch/hermes-agent/pull/13234)), llama.cpp quirks ([#13091](https://github.com/NousResearch/hermes-agent/issues/13091), [#12068](https://github.com/NousResearch/hermes-agent/issues/12068))
- **"Crashes after running for hours"**: TUI OOM ([#13231](https://github.com/NousResearch/hermes-agent/pull/13231) fixed), but infinite loops ([#13208](https://github.com/NousResearch/hermes-agent/issues/13208)) remain unaddressed
- **Docker/ deployment friction**: Config via env vars unclear ([#12188](https://github.com/NousResearch/hermes-agent/issues/12188)), health checks need mode awareness ([#9751](https://github.com/NousResearch/hermes-agent/issues/9751))

### Positive Signals
- Strong community contribution (50 PRs in 24h)
- Proactive security work (TDX attestation, E2EE)
- Multimodal expansion (audio input, Gemini STT) shows technical ambition

---

## 8. Backlog Watch

| Item | Age | Risk | Needs |
|:---|:---|:---|:---|
| [#6323](https://github.com/NousResearch/hermes-agent/issues/6323) mempalace external memory | ~13 days | **High** | Maintainer decision on architecture — community PR exists but needs alignment with `hermes_mem` roadmap |
| [#5346](https://github.com/NousResearch/hermes-agent/issues/5346) Shift+Enter CLI newline | ~16 days | Low | Simple UX fix, 7 👍, low complexity — candidate for quick win |
| [#3002](https://github.com/NousResearch/hermes-agent/issues/3002) NeuTTS install failure | ~26 days | Medium | Environment setup reliability — pip missing in venv suggests packaging issue |
| [#7446](https://github.com/NousResearch/hermes-agent/pull/7446) Configurable heartbeats | ~11 days | Medium | Gateway UX polish — configurable intervals, per-platform overrides |
| [#11685](https://github.com/NousResearch/hermes-agent/pull/11685) / [#13236](https://github.com/NousResearch/hermes-agent/pull/13236) hermes_mem docs | 4+ days | **High** | Two overlapping PRs for same feature need consolidation |

**Critical attention needed**: The [#13208](https://github.com/NousResearch/hermes-agent/issues/13208) infinite loop bug (0 comments, 0 👍, filed today) risks being buried despite severity — no PR exists and it's a reliability showstopper for production use.

---

*Digest generated from 50 issues and 50 PRs updated 2026-04-20 to 2026-04-21.*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-04-21

## 1. Today's Overview

PicoClaw shows **extremely high community activity** with 114 PRs and 13 issues updated in the last 24 hours, indicating a vibrant but potentially overwhelmed development ecosystem. The project released a new nightly build (`v0.2.6-nightly.20260420.6126ede9`) while grappling with critical authentication and provider regressions in the v0.2.6 stable release. With 106 open PRs against only 8 merged/closed, the merge queue is severely backlogged, suggesting maintainer bandwidth constraints. Provider compatibility (OpenAI-compatible, DeepSeek, Antigravity/Google) dominates both bug reports and active development, reflecting PicoClaw's positioning as a multi-provider AI agent gateway. The project appears to be in a **stability crisis** — multiple core authentication mechanisms are broken in production while the community actively submits fixes that remain unmerged.

---

## 2. Releases

### [v0.2.6-nightly.20260420.6126ede9](https://github.com/sipeed/picoclaw/compare/v0.2.6...main) (Nightly Build)
- **Automated nightly build** from commit `6126ede9`
- **⚠️ Warning**: Marked as potentially unstable; use with caution
- **Notable**: This nightly includes fixes not yet in stable v0.2.6, including the uppercase model identifier fix (see Issue #2597, closed today)
- **Migration note**: Users experiencing v0.2.6 stable bugs (especially provider authentication) may need to test this nightly, though stability is not guaranteed

---

## 3. Project Progress

### Closed PRs Today (8 total, select highlights):

| PR | Author | Description | Status |
|---|---|---|---|
| [#2343](https://github.com/sipeed/picoclaw/pull/2343) | manaporkun | Bumped Antigravity client to v1.25.0 for Gemini 3.1 model access | **Merged** |
| *(remaining 7 closed PRs not detailed in source data)* | — | — | — |

### Key Open PRs with Recent Activity (advancing toward merge):

| PR | Author | Domain | Progress |
|---|---|---|---|
| [#2163](https://github.com/sipeed/picoclaw/pull/2163) | andressg79 | Provider (OAuth) | Fixes Google Antigravity token refresh scope preservation — addresses production OAuth expiry bug |
| [#2413](https://github.com/sipeed/picoclaw/pull/2413) | ex-takashima | Channel (LINE) | Refactors to official LINE Bot SDK v8, reducing 270 lines of custom crypto/HTTP code |
| [#2313](https://github.com/sipeed/picoclaw/pull/2313) | stevef1uk | Multi-domain | Major "Agent Shield" security hardening + multi-user support — **architecturally significant** |
| [#1666](https://github.com/sipeed/picoclaw/pull/1666) | tong3jie | Tool (MCP) | Refactors MCP Manager for process lifecycle, resilience, and concurrency safety |
| [#1683](https://github.com/sipeed/picoclaw/pull/1683) | badgerbees | Provider | Implements strict mode compatibility for third-party OpenAI-compatible providers |

---

## 4. Community Hot Topics

### Most Active Issues (by comment count):

| Rank | Issue | Comments | Link | Underlying Need |
|---|---|---|---|---|
| 1 | **#2578** — `openai_compat` provider never sends Authorization header | **11 comments** | [sipeed/picoclaw#2578](https://github.com/sipeed/picoclaw/issues/2578) | **Critical production reliability**: API key handling is fundamentally broken across all config sources, making the primary provider unusable. Community desperately needs credential pipeline audit. |
| 2 | **#1757** — Hourly cron tasks cause channel errors | 4 comments | [sipeed/picoclaw#1757](https://github.com/sipeed/picoclaw/issues/1757) | **Scheduling/channel lifecycle management**: Users want reliable long-running autonomous agents; cron/channel interaction is brittle on resource-constrained devices (Raspberry Pi Zero). |
| 3 | **#2367** — Chinese localization remains in English mode | 3 comments | [sipeed/picoclaw#2367](https://github.com/sipeed/picoclaw/issues/2367) | **Internationalization completeness**: Android app polish for global market; suggests QA gaps in UI localization. |
| 4 | **#2368** — Android app model "not configured" despite settings | 3 comments | [sipeed/picoclaw#2368](https://github.com/sipeed/picoclaw/issues/2368) | **Mobile UX parity with web**: Config sync between web interface and Android app is broken; blocks mobile adoption. |
| 5 | **#2513** — Gateway start abnormal (DingTalk channel) | 3 comments | [sipeed/picoclaw#2513](https://github.com/sipeed/picoclaw/issues/2513) | **Enterprise channel stability**: DingTalk integration fails silently after startup; enterprise users need reliable gateway. |

### Most Significant Active PRs (by architectural impact):

| PR | Link | Why It Matters |
|---|---|---|
| #2313 (Agent Shield) | [sipeed/picoclaw#2313](https://github.com/sipeed/picoclaw/pull/2313) | Security hardening + multi-user — **blocker for enterprise adoption** |
| #1666 (MCP Manager refactor) | [sipeed/picoclaw#1666](https://github.com/sipeed/picoclaw/pull/1666) | Fixes resource leaks and race conditions in tool execution |
| #1229 (OpenAI Responses API) | [sipeed/picoclaw#1229](https://github.com/sipeed/picoclaw/pull/1229) | Future-proofs for GPT-5 model family |

---

## 5. Bugs & Stability

### 🔴 Critical (Production-Breaking)

| Issue | Link | Description | Fix PR? |
|---|---|---|---|
| **#2578** | [sipeed/picoclaw#2578](https://github.com/sipeed/picoclaw/issues/2578) | `openai_compat` **silently drops all API keys** — no Authorization header sent; breaks ALL HTTP-based models | **No dedicated fix PR identified**; related: #1460, #1683 touch serialization |
| **#2602** | [sipeed/picoclaw#2602](https://github.com/sipeed/picoclaw/issues/2602) | OAuth failures for OpenAI AND Antigravity — "Authorization Errors" on Raspberry Pi/arm64 | **#2163** addresses Antigravity refresh; may partially help |

### 🟠 High (Major Feature Broken)

| Issue | Link | Description | Fix PR? |
|---|---|---|---|
| **#2584** | [sipeed/picoclaw#2584](https://github.com/sipeed/picoclaw/issues/2584) | DeepSeek provider 401 "Authentication Fails (governor)" — valid keys rejected | **Closed today** — likely provider-side or config issue; no code fix confirmed |
| **#2598** | [sipeed/picoclaw#2598](https://github.com/sipeed/picoclaw/issues/2598) | WebUI completely broken after 0.2.4 → 0.2.6 upgrade | **No fix PR** |
| **#2513** | [sipeed/picoclaw#2513](https://github.com/sipeed/picoclaw/issues/2513) | Gateway abnormal start with DingTalk channel | **No fix PR** |
| **#1757** | [sipeed/picoclaw#1757](https://github.com/sipeed/picoclaw/issues/1757) | Cron scheduling breaks Telegram channel | **No fix PR** |

### 🟡 Medium (Localized Impact)

| Issue | Link | Description | Fix PR? |
|---|---|---|---|
| **#2600** | [sipeed/picoclaw#2600](https://github.com/sipeed/picoclaw/issues/2600) | MCP sends `null` arguments when all params optional — violates spec | **No fix PR** |
| **#2368** | [sipeed/picoclaw#2368](https://github.com/sipeed/picoclaw/issues/2368) | Android app model config not persisting | **No fix PR** |
| **#2367** | [sipeed/picoclaw#2367](https://github.com/sipeed/picoclaw/issues/2367) | Chinese text in English mode (Android) | **No fix PR** |

### ✅ Fixed Today

| Issue | Link | Resolution |
|---|---|---|
| **#2597** | [sipeed/picoclaw#2597](https://github.com/sipeed/picoclaw/issues/2597) | Gateway refused to start with uppercase model identifiers — **fixed in nightly** `6126ede9` |
| **#2584** | [sipeed/picoclaw#2584](https://github.com/sipeed/picoclaw/issues/2584) | DeepSeek 401 — closed, possibly user-resolved or provider-side |

---

## 6. Feature Requests & Roadmap Signals

| Request | Issue/PR | Link | Likelihood in Next Version |
|---|---|---|---|
| **Email as native channel** | #2421 | [sipeed/picoclaw#2421](https://github.com/sipeed/picoclaw/issues/2421) | **Medium** — clear enterprise use case, but channel backlog is large |
| **LINE SDK v8 migration** | #2413, #500 | [sipeed/picoclaw#2413](https://github.com/sipeed/picoclaw/pull/2413) | **High** — two competing PRs, maintenance reduction clear win |
| **MQTT channel health checks** | #1706 | [sipeed/picoclaw#1706](https://github.com/sipeed/picoclaw/pull/1706) | **Medium-High** — IoT/automation use case, code complete |
| **HTTP ingress for Pico channel** | #1657 | [sipeed/picoclaw#1657](https://github.com/sipeed/picoclaw/pull/1657) | **Medium** — enables webhook integrations, minimal scope |
| **Affine workspace integration** | #1124 | [sipeed/picoclaw#1124](https://github.com/sipeed/picoclaw/pull/1124) | **Low-Medium** — knowledge management niche, large PR surface |
| **Multi-user + security hardening** | #2313 | [sipeed/picoclaw#2313](https://github.com/sipeed/picoclaw/pull/2313) | **Uncertain** — architecturally critical but massive PR, needs deep review |
| **OpenAI Responses API support** | #1229 | [sipeed/picoclaw#1229](https://github.com/sipeed/picoclaw/pull/1229) | **High** — GPT-5 readiness, competitive necessity |

### Predicted v0.2.7 Priorities:
1. **Provider authentication emergency fixes** (#2578, #2602 area)
2. **LINE SDK modernization** (#2413 or #500)
3. **OpenAI Responses API** (#1229) for GPT-5 launch readiness

---

## 7. User Feedback Summary

### 😫 Critical Pain Points

| Theme | Evidence | Severity |
|---|---|---|
| **Authentication is catastrophically broken** | #2578 (API keys dropped), #2602 (OAuth fails), #2584 (DeepSeek 401), #2368 (Android config ignored) | 🔴 Existential — users cannot connect to ANY major provider reliably |
| **Upgrade fragility** | #2598 (WebUI broken 0.2.4→0.2.6), #2597 (uppercase model IDs break gateway) | 🔴 High — patch releases are not safe |
| **Mobile (Android) is second-class** | #2367, #2368 — config doesn't sync, localization incomplete | 🟠 Medium — blocks mobile-first users |
| **Resource-constrained deployment issues** | #1757 (Pi Zero cron failures), #2602 (ARM64 OAuth issues) | 🟠 Medium — edge/IoT use case degraded |

### 😊 Positive Signals

| Theme | Evidence |
|---|---|
| **Active community fixing issues** | 114 PRs updated, including security hardening (#2313), SDK modernization (#2413), provider resilience (#1342) |
| **Nightly builds available** | Users can test fixes before stable release |
| **Broad channel/provider support** | Users actively extending to LINE, DingTalk, Feishu, MQTT, email |

### Use Case Patterns
- **Personal automation on low-cost hardware** (Raspberry Pi Zero, Android) — reliability-critical
- **Enterprise multi-channel deployment** (DingTalk, Feishu, Telegram) — needs stability + security
- **Multi-provider AI gateway** — OpenAI-compatible, DeepSeek, Google Antigravity, Gemini — authentication must "just work"

---

## 8. Backlog Watch

### ⚠️ High-Impact Items Stagnating

| Item | Age | Link | Risk |
|---|---|---|---|
| **#500 — LINE SDK refactor** | ~2 months | [sipeed/picoclaw#500](https://github.com/sipeed/picoclaw/pull/500) | Superseded by #2413 (newer, more complete), but **both unmerged** — indicates channel maintainer gap |
| **#1780 — QQ connection stability** | ~1 month | [sipeed/picoclaw#1780](https://github.com/sipeed/picoclaw/pull/1780) | Chinese market critical; configurable reconnection is production-ready code |
| **#957 — Config override bug** | ~1.5 months | [sipeed/picoclaw#957](https://github.com/sipeed/picoclaw/pull/957) | **User-reported 401 errors from bad defaults** — directly related to current #2578 crisis |
| **#1261 — Exec tool environment sanitization** | ~1.5 months | [sipeed/picoclaw#1261](https://github.com/sipeed/picoclaw/pull/1261) | **Security-critical**: secrets leaking to LLM via environment variables; marked "urgent" by author |
| **#2313 — Agent Shield / Multi-user** | ~2.5 weeks | [sipeed/picoclaw#2313](https://github.com/sipeed/picoclaw/pull/2313) | Massive PR touching 6 domains; may need decomposition to merge |

### 🚨 Maintainer Attention Needed

1. **Triage #2578 immediately** — this is a production outage for all `openai_compat` users; 11 comments suggest community frustration
2. **Resolve LINE SDK PR collision** (#500 vs #2413) — pick one, close the other
3. **Security audit for #1261 and #2313** — secrets leakage and multi-user hardening cannot wait
4. **Android app dedicated maintainer** — two open issues (#2367, #2368) with no engagement suggest platform neglect

---

*Digest generated from GitHub activity 2026-04-20. All links: https://github.com/sipeed/picoclaw*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-04-21

## 1. Today's Overview

NanoClaw shows **high development velocity** with 25 PRs updated in the last 24 hours (17 open, 8 merged/closed) against a single active issue. The project is in an active **v2 stabilization and ecosystem expansion phase**, with heavy focus on channel adapter diversity (Signal, Matrix), local AI provider integrations (Ollama, Whisper), and MCP skill ecosystem growth. No new releases were cut, suggesting maintainers are accumulating changes rather than shipping incrementally. The contributor base appears broad and engaged, with `ira-at-work`, `bitcryptic-gw`, and `gavrielc` driving multiple parallel workstreams.

---

## 2. Releases

**No new releases** — None published.

---

## 3. Project Progress

### Merged/Closed PRs (8 items)

| PR | Author | Summary | Link |
|:---|:---|:---|:---|
| #1843 | chiptoe-svg | **Codex provider via app-server JSON-RPC** — Full agent loop with Claude-SDK parity (streaming, MCP, native compaction, approvals) using OpenAI's `codex app-server` instead of the JS SDK. **Significant: enables non-Claude planner option.** | [qwibitai/nanoclaw#1843](https://github.com/qwibitai/nanoclaw/pull/1843) |
| #1859 | wilderfield | **Ollama provider skill** — Routes any agent group to local Ollama instance with network isolation docs | [qwibitai/nanoclaw#1859](https://github.com/qwibitai/nanoclaw/pull/1859) |
| #1864 | talmosko-code | **OpenCode provider fix** — Pinned SDK/CLI to 1.4.17 after breaking API rewrite in 1.14.x (UUID → `ses_` prefix); added overlay propagation | [qwibitai/nanoclaw#1864](https://github.com/qwibitai/nanoclaw/pull/1864) |
| #1873 | ira-at-work | **`.env*` gitignore expansion** — Catches `.env.local`, `.env.production`, etc. | [qwibitai/nanoclaw#1873](https://github.com/qwibitai/nanoclaw/pull/1873) |
| #1877 | gavrielc | **Engagement policy refactor + unknown-channel approval flow** — Moves `shouldEngage` to router, adds owner-approval for unknown channels | [qwibitai/nanoclaw#1877](https://github.com/qwibitai/nanoclaw/pull/1877) |
| #1727 | bitcryptic-gw | **Native credential proxy** — Alternative to OneCLI gateway for Unraid template var injection; syncs env at startup | [qwibitai/nanoclaw#1727](https://github.com/qwibitai/nanoclaw/pull/1727) |
| #1869 | gavrielc | **v1→v2 action items (5 items)** — Dead config deletion, timezone formatting, etc. | [qwibitai/nanoclaw#1869](https://github.com/qwibitai/nanoclaw/pull/1869) |

**Key advances:** Local/self-hosted AI provider ecosystem solidified (Ollama + Codex + OpenCode fixes); security posture improved with unknown-channel gating; infrastructure hardening for container deployments (Unraid, credential proxy).

---

## 4. Community Hot Topics

| PR/Issue | Activity Signal | Underlying Need | Link |
|:---|:---|:---|:---|
| #1870 ASSISTANT_NAME bug | **Only open issue, 0 comments** — but naming is fundamental identity UX | Users expect consistent assistant persona across all channel contexts; current architecture leaks default "Andy" name through channel skill registration path | [qwibitai/nanoclaw#1870](https://github.com/qwibitai/nanoclaw/issues/1870) |
| #1845 ISO 8601 timestamp normalization | Open, v2 iteration | Data portability and correct temporal ordering across timezones; previous fix insufficient | [qwibitai/nanoclaw#1845](https://github.com/qwibitai/nanoclaw/pull/1845) |
| #1624 Matrix E2EE + per-group config | Large feature PR, sustained updates | **Privacy-first communication** demand; users want Matrix's encryption without sacrificing per-group model/effort tuning | [qwibitai/nanoclaw#1624](https://github.com/qwibitai/nanoclaw/pull/1624) |
| #1327 Home Assistant MCP | Long-running (Mar 22), sustained interest | **Smart home integration** is a major use case; users want agent control of physical environments | [qwibitai/nanoclaw#1327](https://github.com/qwibitai/nanoclaw/pull/1327) |

**Analysis:** The community is prioritizing **deployment flexibility** (local models, self-hosted services, E2EE channels) and **identity control** (naming, per-group configuration). The "Andy" default name hardcoded in channel skills suggests early architectural debt in configuration propagation.

---

## 5. Bugs & Stability

| Severity | Item | Status | Details | Link |
|:---|:---|:---|:---|:---|
| **Medium** | #1870 ASSISTANT_NAME not applied in group skills | **Open, no fix PR** | Configuration drift: `.env` setting bypassed by channel skill registration path; affects user-facing identity | [qwibitai/nanoclaw#1870](https://github.com/qwibitai/nanoclaw/issues/1870) |
| **Medium** | #1845 ISO 8601 timestamp normalization (v2) | Open PR | Previous normalization incomplete; auto-generated timestamps still inconsistent, affecting debugging and audit trails | [qwibitai/nanoclaw#1845](https://github.com/qwibitai/nanoclaw/pull/1845) |
| **Low** | #1817 Mount path errors unhelpful | Open PR | UX issue: `/setup` gives technically-correct but unactionable error; fix improves guidance to parent directory | [qwibitai/nanoclaw#1817](https://github.com/qwibitai/nanoclaw/pull/1817) |
| **Low (mitigated)** | #1864 OpenCode SDK breakage | **Closed** | External dependency broke API contract; now pinned with overlay propagation | [qwibitai/nanoclaw#1864](https://github.com/qwibitai/nanoclaw/pull/1864) |

**Stability assessment:** No critical crashes or security vulnerabilities in today's data. Main risk is **configuration propagation consistency** (#1870) affecting production deployments with custom branding.

---

## 6. Feature Requests & Roadmap Signals

| Feature | Evidence | Likelihood in Next Release |
|:---|:---|:---|
| **Signal channel (v2)** | PR #1875 open, complete skill docs | **High** — infrastructure ready, needs merge |
| **Local Whisper transcription** | PR #1876 open, dual backend support | **High** — privacy-aligned, no external dependencies |
| **Pre-commit hooks** | PR #1874 open (prettier, eslint, tsc, vitest) | **High** — code quality, low risk |
| **Matrix E2EE channel** | PR #1624 open since Apr 4, large scope | **Medium** — complex, may need additional review cycles |
| **YouTube history tool** | PR #1872 open, works around removed API | **Medium** — creative workaround (OAuth + Takeout), but fragile |
| **Home Assistant MCP** | PR #1327 open since Mar 22 | **Medium** — mature use case, may need maintainer bandwidth |
| **Tailscale MCP** | PR #1260 open since Mar 19 | **Lower** — niche networking use case |
| **Vikunja task management** | PR #1742 open since Apr 11 | **Medium** — clear scope, self-hosted alignment |

**Predicted next release themes:** "Local-first and private" — Signal, Whisper, Ollama, plus Matrix E2EE if stabilized.

---

## 7. User Feedback Summary

### Pain Points
| Issue | Evidence | Severity |
|:---|:---|:---|
| **Default "Andy" name unchangeable in groups** | #1870 | Medium — breaks branding/identity expectations |
| **Setup path errors are cryptic** | #1817 | Low-Medium — onboarding friction |
| **Credential configuration fails silently** | #1290 (open, pre-flight validation) | Medium — container restart loops, stale state |
| **Read-only `.claude.json` crashes agent silently** | #1090 (open) | Medium — EROFS aborts before any API calls |

### Use Cases Emerging
- **Self-hosted home automation** (Home Assistant + Unraid + Tailscale network)
- **Privacy-conscious messaging** (Signal, Matrix E2EE replacing conventional channels)
- **Local/edge AI** (Ollama, Whisper — avoiding cloud API costs and data exposure)
- **Media archival** (YouTube history workaround — users want personal data agents)

### Satisfaction Signals
- High contributor engagement (25 PRs/day)
- Proactive infrastructure fixes (credential proxy, pre-commit hooks)
- Rapid response to external breaking changes (OpenCode pin)

---

## 8. Backlog Watch

| PR/Issue | Age | Risk | Action Needed | Link |
|:---|:---|:---|:---|:---|
| #1090 `.claude.json` EROFS crash | **37 days** | **High** — silent startup failure, affects all container users with read-only mounts | Maintainer review; fix is small (mount writable + seed minimal config) | [qwibitai/nanoclaw#1090](https://github.com/qwibitai/nanoclaw/pull/1090) |
| #1260 Tailscale MCP | **33 days** | Medium — networking integration, OAuth complexity | Security review of token caching logic | [qwibitai/nanoclaw#1260](https://github.com/qwibitai/nanoclaw/pull/1260) |
| #1188 UnraidClaw MCP | **35 days** | Medium | Functional review against UnraidClaw API | [qwibitai/nanoclaw#1188](https://github.com/qwibitai/nanoclaw/pull/1188) |
| #1290 Credential pre-flight validation | **32 days** | **High** — prevents data corruption on misconfiguration | Merge or request changes; fixes known issue #1289 | [qwibitai/nanoclaw#1290](https://github.com/qwibitai/nanoclaw/pull/1290) |
| #1327 Home Assistant MCP | **30 days** | Medium — high community interest | Review MCP server scope and container integration | [qwibitai/nanoclaw#1327](https://github.com/qwibitai/nanoclaw/pull/1327) |

**Critical attention needed:** #1090 and #1290 are stability fixes with extended open duration; #1090 in particular has a clear, minimal fix path but has languished for over a month despite affecting container reliability.

---

*Digest generated from GitHub activity 2026-04-20 to 2026-04-21. All links: https://github.com/qwibitai/nanoclaw*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest — 2026-04-21

## 1. Today's Overview

NullClaw shows **focused but constrained activity** today, with 3 open PRs and 1 active issue all revolving around a critical gateway stability problem on resource-limited hardware. No releases were cut, suggesting maintainers are prioritizing stabilization over shipping. The entire day's activity clusters around a single incident: a CPU-spinning bug in the gateway's accept loop on ARM devices (Raspberry Pi 5), with two competing fix approaches now in flight. This concentration indicates either a recent regression from the Zig 0.16 migration or heightened production deployment on edge hardware. Project health is **stable but reactive**—good responsiveness to bugs, yet no forward-looking feature work visible.

---

## 2. Releases

*No new releases today.*

---

## 3. Project Progress

**No PRs were merged or closed today.** All three active PRs remain open, representing work-in-progress toward stabilization rather than completed advancement:

| PR | Status | Purpose |
|:---|:---|:---|
| [#858](https://github.com/nullclaw/nullclaw/pull/858) | Open | Alternative fix: bypasses Zig stdlib networking with direct POSIX read/write in `Stream` |
| [#853](https://github.com/nullclaw/nullclaw/pull/853) | Open | Direct fix for #851: adds bounded backoff to gateway accept loop |
| [#856](https://github.com/nullclaw/nullclaw/pull/856) | Open | Hardens SysVinit script for RTC-less embedded hardware |

The project is in a **stabilization holding pattern**—two PRs (#853, #858) offer different architectural responses to the same underlying gateway regression, requiring maintainer decision on approach.

---

## 4. Community Hot Topics

### Most Active Discussion: Gateway CPU Spin on ARM ([#851](https://github.com/nullclaw/nullclaw/issues/851))
- **2 comments**, reported by `Trez-zerT` on Raspberry Pi 5 (Debian trixie, aarch64)
- `strace` evidence shows `accept4()` → `EAGAIN` tight loop consuming 100% CPU core at idle

**Underlying need:** Production deployment on ARM edge devices is clearly happening (Pi 5, PogoPlug V4 in #856), yet the Zig 0.16 migration introduced networking regressions not caught by existing CI. The community needs **reliable gateway behavior on non-x86 platforms with constrained resources**.

### Competing Fix Philosophies ([#853](https://github.com/nullclaw/nullclaw/pull/853) vs [#858](https://github.com/nullclaw/nullclaw/pull/858))
| Approach | Author | Philosophy |
|:---|:---|:---|
| #853 | `manelsen` | **Local fix**: Add backoff to accept loop, keep Zig stdlib |
| #858 | `jmylchreest` | **Systemic workaround**: Bypass stdlib entirely with direct POSIX I/O |

**Tension:** #858 frames itself as "targeted workaround" but implies deeper stdlib distrust post-migration. Maintainer choice here signals architectural direction—whether to patch around or replace Zig's networking abstractions.

---

## 5. Bugs & Stability

| Severity | Item | Description | Fix Status |
|:---|:---|:---|:---|
| **Critical** | [#851](https://github.com/nullclaw/nullclaw/issues/851) | Gateway CPU spin on `accept4()` EAGAIN; renders Pi 5 deployments unusable | **Two competing PRs**: [#853](https://github.com/nullclaw/nullclaw/pull/853) (backoff), [#858](https://github.com/nullclaw/nullclaw/pull/858) (POSIX bypass) |
| **High** | [#858](https://github.com/nullclaw/nullclaw/pull/858) (implicit) | HTTP gateway `/health`, `/ready` hang under load post-Zig 0.16; causes k8s CrashLoopBackOff | PR open, unmerged |
| **Medium** | [#856](https://github.com/nullclaw/nullclaw/pull/856) | SysVinit script fails on RTC-less boot; service ordering incorrect | PR open, unmerged |

**Regression pattern:** The Zig 0.16 migration (`70d7f72`) appears to have introduced **multiple networking stability issues** not present previously. The k8s health check hang and the accept-loop spin may share root cause (Zig stdlib async I/O changes).

---

## 6. Feature Requests & Roadmap Signals

*No explicit feature requests opened today.*

**Inferred roadmap signals from activity patterns:**

| Signal | Likelihood | Rationale |
|:---|:---|:---|
| Embedded/ARM as **tier-1 platform** | High | Two PRs explicitly target ARMv5TE (PogoPlug) and aarch64 (Pi 5) |
| Zig stdlib networking **abstraction review** | Moderate | #858's POSIX bypass suggests maintainer-level decision pending on stdlib trust |
| k8s/health-check **hardening** | Moderate | #858 explicitly mentions production k8s deployment pain |
| NTP/clock-sync **service integration** | Low | #856 adds `Should-Start: ntp ntpsec`—narrow but real operational need |

**Next version likely focus:** Stability release addressing Zig 0.16 networking regressions, with embedded boot reliability as secondary theme.

---

## 7. User Feedback Summary

### Explicit Pain Points (from issue/PR text)
- **"Pegs CPU core"** — idle resource consumption makes Pi 5 deployment non-viable ([#851](https://github.com/nullclaw/nullclaw/issues/851))
- **"k8s liveness probes to time out"** — production orchestration failure, pod cycling ([#858](https://github.com/nullclaw/nullclaw/pull/858))
- **"RTC-less hardware"** — embedded devices fail to boot service reliably without clock synchronization ([#856](https://github.com/nullclaw/nullclaw/pull/856))

### Use Case Profile
Users are running NullClaw in **two distinct environments**:
1. **Cloud-native edge**: k8s-managed ARM64 nodes (Pi 5) with health-checked gateways
2. **Legacy embedded**: SysVinit-based ARMv5 devices without hardware clocks

**Satisfaction/dissatisfaction:** The rapid dual-PR response to #851 suggests healthy contributor engagement, but the *need* for two competing fixes indicates **architectural uncertainty post-migration** that may erode deployer confidence.

---

## 8. Backlog Watch

| Item | Age | Risk | Action Needed |
|:---|:---|:---|:---|
| [#851](https://github.com/nullclaw/nullclaw/issues/851) | 2 days | **Escalating** — two PRs now diverge on fix approach | **Maintainer decision required**: choose between #853 (backoff) and #858 (POSIX bypass), or integrate both |
| [#858](https://github.com/nullclaw/nullclaw/pull/858) | 1 day | Moderate — unreviewed | Code review; assess whether stdlib bypass sets precedent for other I/O paths |
| [#853](https://github.com/nullclaw/nullclaw/pull/858) | 2 days | Moderate — unreviewed | Evaluate if backoff constants are sufficient or mask deeper issue |
| [#856](https://github.com/nullclaw/nullclaw/pull/856) | 1 day | Low — narrow scope | Routine review; validate LSB header syntax, PogoPlug test claim |

**Critical decision point:** The project needs maintainer intervention to resolve #851's fix strategy. Leaving both #853 and #858 open without direction risks contributor friction and delays a stability release that production deployments appear to need urgently.

---

*Digest generated from github.com/nullclaw/nullclaw activity for 2026-04-21.*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-04-21

## 1. Today's Overview

IronClaw shows **intense development velocity** with 50 issues and 50 PRs touched in the last 24 hours, indicating a large, active team pushing toward a major milestone. The project is in a **quality-hardening phase** with significant Bug Bash activity (4/17, 4/20) and a major architectural initiative around **Engine V2** gaining structure. No new releases were cut, suggesting the team is accumulating changes for a larger version bump rather than shipping incrementally. The high open-to-closed ratio (41:9 issues, 35:15 PRs) indicates a growing backlog that may need attention. Critical focus areas include Telegram/Web channel reliability, OAuth/auth flow robustness, and Engine V2 quality gates.

---

## 2. Releases

**No new releases** — None published in the last 24 hours.

---

## 3. Project Progress

### Closed PRs (15 total, notable items)

| PR | Author | Summary | Impact |
|:---|:---|:---|:---|
| [#2632](https://github.com/nearai/ironclaw/pull/2632) | henrypark133 | Hide external threads from browser active thread restore | Prevents Telegram/WASM threads from incorrectly restoring in web UI |
| [#2630](https://github.com/nearai/ironclaw/pull/2630) | henrypark133 | Unlock REPL stdin when auth is required | Fixes CLI auth flow blocking on REPL input |

### Open PRs Advancing Key Work

| PR | Author | Scope | What It Advances |
|:---|:---|:---|:---|
| [#2728](https://github.com/nearai/ironclaw/pull/2728) | serrrfirat | CLI migration tooling | First-class `ironclaw migrate` CLI for OpenClaw/Hermes adopters |
| [#2727](https://github.com/nearai/ironclaw/pull/2727) | serrrfirat | Skills/registry | `CLAWHUB_ENABLED` flag to disable public registry (enterprise/air-gapped deployments) |
| [#2754](https://github.com/nearai/ironclaw/pull/2754) | serrrfirat | Security | Self-service user secrets + durable binding approvals |
| [#2715](https://github.com/nearai/ironclaw/pull/2715) | serrrfirat | UI/UX | Design system visual language + Lucide icons in gateway |
| [#2761](https://github.com/nearai/ironclaw/pull/2761) | serrrfirat | Engine V2 quality | Milestone 0 replay/eval suite strengthening |
| [#2746](https://github.com/nearai/ironclaw/pull/2746) | ilblackdragon | Auth robustness | OAuth URL parameter truncation fix via `url::Url` proper API |
| [#2700](https://github.com/nearai/ironclaw/pull/2700) | zmanian | UX polish | Descriptive chat titles instead of hex hash IDs |

**Engine V2** is the dominant theme: PRs #2728, #2727, #2726, #2761, #2757, #2760 all cluster around migration tooling, quality evaluation, routing hardening, and failure recovery.

---

## 4. Community Hot Topics

### Most Active Issues (by comment count)

| Issue | Comments | Status | Underlying Need |
|:---|:---|:---|:---|
| [#2229](https://github.com/nearai/ironclaw/issues/2229) Google Sheets OAuth blocked: Error 400 invalid_request | **10** | Open | **OAuth flow fragility** — Google provider-specific URL construction bugs; blocks enterprise GSuite integration |
| [#2285](https://github.com/nearai/ironclaw/issues/2285) Chat messages disappear on page refresh | **7** | Open | **State persistence reliability** — users lose context during long-running operations; fundamental trust issue |
| [#1537](https://github.com/nearai/ironclaw/issues/1537) WASM credential injection fails on NEAR AI hosted TEE | **4** | Open | **TEE runtime security model** — secrets stored but never injected; breaks confidential computing promise |
| [#2731](https://github.com/nearai/ironclaw/issues/2731) Telegram messages rendered as separate Engine conversations | **3** | Open | **Cross-channel identity/threading** — Telegram ↔ web conversation unification for multi-modal agent experience |
| [#2721](https://github.com/nearai/ironclaw/issues/2721) Engine V2 quality: Milestone 0 + multi-route execution | **2** | Open | **Architecture debt** — over-reliance on single CodeAct path makes simple tasks expensive, weakens finalization |

**Analysis**: The top issues reveal a project scaling its **integration surface** (OAuth, multi-channel) faster than its **reliability foundations** (state persistence, credential injection). The Engine V2 epic (#2721) is the team's bet to solve the cost/finalization problem, but it's still in design.

---

## 5. Bugs & Stability

| Severity | Issue | Status | Fix PR? | Description |
|:---|:---|:---|:---|:---|
| **P1** | [#2731](https://github.com/nearai/ironclaw/issues/2731) Telegram → separate Engine conversations | Open | **None yet** | Breaks multi-channel user experience |
| **P1** | [#2732](https://github.com/nearai/ironclaw/issues/2732) Assistant suggests Brave Search API vs. internal NEAR search | Open | **None yet** | Tool routing confusion; cost/reliability impact |
| **P1** | [#2580](https://github.com/nearai/ironclaw/issues/2580) Agent claims Telegram sent but no delivery | **Closed** | N/A | Fixed in prior cycle |
| **P1** | [#2581](https://github.com/nearai/ironclaw/issues/2581) Chain-of-thought leaked to user | Open | **None yet** | Trust/safety issue — internal reasoning exposed |
| **P1** | [#2584](https://github.com/nearai/ironclaw/issues/2584) Internal system files visible in app UI | Open | **None yet** | Information disclosure/security boundary |
| **P2** | [#2229](https://github.com/nearai/ironclaw/issues/2229) Google Sheets OAuth 400 error | Open | **#2746** (related auth URL fix) | OAuth URL construction; PR #2746 addresses similar class |
| **P2** | [#2285](https://github.com/nearai/ironclaw/issues/2285) Messages disappear on refresh | Open | **None yet** | Core state management — no PR identified |
| **P2** | [#2729](https://github.com/nearai/ironclaw/issues/2729) Version mismatch after Google Docs connect | Open | **None yet** | Extension metadata sync |
| **P2** | [#2730](https://github.com/nearai/ironclaw/issues/2730) Duplicate confirmation after Telegram connect | Open | **None yet** | UI state management |
| **P2** | [#2543](https://github.com/nearai/ironclaw/issues/2543) Linear MCP auth not recognized post-OAuth | Open | **None yet** | Token persistence/validation gap |

**Regression signals**: Multiple P1s from Bug Bash 4/20 suggest **staging quality is not production-ready**. The cluster of Telegram+Web UI issues (#2730, #2731, #2729, #2285) indicates recent gateway refactoring (#2599, #2683) may have introduced instability.

---

## 6. Feature Requests & Roadmap Signals

| Issue/PR | Signal | Likely Next Version? |
|:---|:---|:---|
| [#2721](https://github.com/nearai/ironclaw/issues/2721) Engine V2 Milestone 0 | **Core roadmap** — multi-route execution, reduced orchestrator churn | v0.26.0 or v1.0-beta |
| [#2722](https://github.com/nearai/ironclaw/issues/2722) Replay/eval suite | Quality infrastructure for V2 | Same |
| [#2723](https://github.com/nearai/ironclaw/issues/2723) Tighten orchestrator loop | Performance/cost optimization | Same |
| [#2642](https://github.com/nearai/ironclaw/issues/2642) Credential profiles for multiple accounts | **Enterprise feature** — multi-tenant Google/Notion/etc. | v0.26.0 |
| [#2719](https://github.com/nearai/ironclaw/issues/2719) GitHub-native merge queue | **CI/CD modernization** — replace 135k LOC batch PRs | Infrastructure; not user-facing |
| [#1378](https://github.com/nearai/ironclaw/pull/1378) Per-channel MCP/built-in tool filtering | Multi-tenant deployment hardening | v0.26.0 |
| [#2636](https://github.com/nearai/ironclaw/issues/2636) Remove skill size limit (506KB → 64KB max) | Developer experience — "no similar project does this" | Likely accepted; simple change |

**Prediction**: Engine V2 + credential profiles + per-channel tool filtering form the **v0.26.0 feature set**. The merge queue migration (#2719) is prerequisite for sustainable velocity.

---

## 7. User Feedback Summary

### Pain Points (from QA Bug Bash reports)

| Theme | Evidence | Severity |
|:---|:---|:---|
| **Auth flow fragility** | #2229 (Google), #2543 (Linear), #2729 (Google Docs version mismatch) | High — blocks onboarding |
| **State loss / non-persistence** | #2285 (messages disappear), #1595 (LLM forgets Telegram enabled) | High — erodes trust |
| **Cross-channel inconsistency** | #2731 (Telegram threads split), #2730 (duplicate confirmations), #2580 (undelivered messages) | High — multi-channel value proposition at risk |
| **Internal leakage** | #2581 (CoT exposed), #2584 (system files visible) | Critical — security perception |
| **TEE/runtime reliability** | #1537 (WASM creds not injected) | High — breaks confidential computing narrative |
| **Setup friction** | #2703 (Dockerfile.worker distribution) | Medium — "why download entire repo for one file?" |

### Satisfaction Indicators
- Active QA program (Bug Bash 4/16, 4/17, 4/20) shows **investment in quality**
- Rapid issue filing by joe-rlo suggests **engaged internal QA**, but may also indicate **too many bugs escaping to staging**

---

## 8. Backlog Watch

### Long-running issues needing attention

| Issue | Age | Risk | Why It Needs Action |
|:---|:---|:---|:---|
| [#1537](https://github.com/nearai/ironclaw/issues/1537) WASM credential injection fails on TEE | **30 days** | **High** | Core security promise (TEE) broken; 4 comments but no fix PR |
| [#1595](https://github.com/nearai/ironclaw/issues/1595) LLM forgets activated Telegram | **28 days** | Medium | Persistent state architecture problem; workaround degrades UX |
| [#2437](https://github.com/nearai/ironclaw/issues/2437) nearai_chat doesn't normalize tool schemas | **6 days** | Medium | Provider compatibility — breaks GitHub tool, likely others |
| [#1378](https://github.com/nearai/ironclaw/pull/1378) Per-channel MCP/tool filtering | **33 days** | Medium | Large XL PR open since March 18; may need rebase/review |

### PRs at risk of staleness

| PR | Age | Risk | Status |
|:---|:---|:---|:---|
| [#1378](https://github.com/nearai/ironclaw/pull/1378) | 33 days | **Merge conflicts likely** | Open, XL scope, contributor: experienced (not core) — needs core sponsor |
| [#2367](https://github.com/nearai/ironclaw/pull/2367) | 9 days | Medium | Auth unification — large scope, may need staged merge |

---

## Project Health Assessment

| Dimension | Score | Notes |
|:---|:---|:---|
| **Velocity** | ⬆️ High | 100 items touched in 24h |
| **Quality gate** | ⬇️ Concerning | Many P1s from Bug Bash; high open:closed ratio |
| **Architecture** | ➡️ Transitioning | Engine V2 is major bet; migration tooling suggests commitment |
| **Community** | ➡️ Internal-heavy | Most activity from core team (serrrfirat, ilblackdragon, henrypark133); limited external contribution |
| **Release readiness** | ⬇️ Not ready | No release in 24h; staging accumulation pattern |

**Recommendation**: The team should consider a **stability sprint** to close the P1 Bug Bash cluster before advancing Engine V2 features, or risk compounding reliability debt during architectural transition.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-04-21

**Repository:** [netease-youdao/LobsterAI](https://github.com/netease-youdao/LobsterAI)

---

## 1. Today's Overview

LobsterAI experienced **exceptionally high development velocity** on 2026-04-20 with **50 PRs updated** (22 open, 28 merged/closed) against just **1 active issue**, indicating a mature, fast-moving codebase with active internal or core contributor development. The project shows no new releases, suggesting work is accumulating toward a future version rather than incremental shipping. Activity spans UI polish, enterprise IM integrations (DingTalk, Popo), infrastructure resilience (SQLite backup, update flows), and dependency modernization—reflecting a product in active enterprise deployment phase with simultaneous polish and hardening efforts.

---

## 2. Releases

**No new releases** — None published.

---

## 3. Project Progress

### Merged/Closed PRs Today (28 total, key highlights)

| PR | Area | Description | Link |
|:---|:---|:---|:---|
| #1768 | renderer, main | Fix IM synchronization issue | [PR #1768](https://github.com/netease-youdao/LobsterAI/pull/1768) |
| #1762 | docs, skills | Support Popo cloud documents and group history message retrieval | [PR #1762](https://github.com/netease-youdao/LobsterAI/pull/1762) |
| #1761 | renderer, main, im | **DingTalk QR code scanning for bot configuration** — device auth flow mirroring Feishu experience | [PR #1761](https://github.com/netease-youdao/LobsterAI/pull/1761) |
| #1759 | platform: windows | **Preserve user-created skills during Windows overlay upgrade** — critical data loss prevention | [PR #1759](https://github.com/netease-youdao/LobsterAI/pull/1759) |
| #1758 | main, openclaw | Fix `OPENCLAW_HOME` path mismatch for exec-approvals | [PR #1758](https://github.com/netease-youdao/LobsterAI/pull/1758) |
| #1757 | main, openclaw | Fix DingTalk agentBinding configuration | [PR #1757](https://github.com/netease-youdao/LobsterAI/pull/1757) |
| #1755 | main, openclaw | Disable built-in `mcporter` skill to prevent MCP confusion (transitional measure) | [PR #1755](https://github.com/netease-youdao/LobsterAI/pull/1755) |
| #1754 | renderer, main | **Separate manual update flow from auto predownload** — better user control | [PR #1754](https://github.com/netease-youdao/LobsterAI/pull/1754) |
| #1752 | renderer, docs, main | **SQLite auto backup and recovery** — corruption resilience | [PR #1752](https://github.com/netease-youdao/LobsterAI/pull/1752) |

**Key advances:**
- **Enterprise IM expansion**: DingTalk QR auth + Popo cloud docs integration deepens workplace platform coverage
- **Data durability**: SQLite backup/recovery and Windows upgrade skill preservation address production deployment risks
- **MCP architecture clarification**: Disabling conflicting built-in `mcporter` signals maturing integration strategy

---

## 4. Community Hot Topics

**Note:** No PRs/Issues have comments or reactions (all show 0 👍, undefined/0 comments), indicating **low external community engagement** — activity appears driven by internal NetEase Youdao developers.

| Item | Type | Topic | Link |
|:---|:---|:---|:---|
| #1751 | Issue | **Scheduled task notification text incorrect** — UI copy bug in timer task setup | [Issue #1751](https://github.com/netease-youdao/LobsterAI/issues/1751) |
| #544 | PR (stale, updated) | **Agent persona selection** — "technical expert", "virtual girlfriend" presets | [PR #544](https://github.com/netease-youdao/LobsterAI/pull/544) |

**Underlying need analysis:**
- **#1751**: Localization/QA gap — timer task feature has copy mismatch between notification method labels and actual behavior, suggesting rushed feature shipping without full i18n review
- **#544**: Strong signal for **character/persona marketplace** demand — 1-month-old PR with screenshot demo indicates user-facing customization is a wanted differentiator; stagnation suggests product decision pending

---

## 5. Bugs & Stability

| Severity | Item | Description | Fix Status |
|:---|:---|:---|:---|
| 🔴 **Critical** | #1756 (OPEN) | **Crawler tasks continue after session stop** — `stopSession()` fire-and-forget `chat.abort` races against `handleApprovalRequested()`, causing unkillable background crawlers | **Fix PR open**, needs merge |
| 🟡 **High** | #1758 (CLOSED) | `OPENCLAW_HOME` mispointed to vendor dir → exec-approvals.json unreachable | ✅ Fixed |
| 🟡 **High** | #1759 (CLOSED) | Windows overlay upgrade **deleted user-created skills** | ✅ Fixed |
| 🟡 **High** | #1754 (CLOSED) | Manual update check auto-downloaded without user consent | ✅ Fixed |
| 🟢 **Medium** | #1757 (CLOSED) | DingTalk agentBinding config broken | ✅ Fixed |
| 🟢 **Medium** | #1768 (CLOSED) | IM sync failure | ✅ Fixed |
| 🟢 **Low** | #1751 (OPEN) | Timer task notification copy error | **Unfixed** |

**Stability assessment:** Strong same-day fix rate for critical/high issues. The open #1756 is concerning for production use with web scraping agents—**recommend priority merge**.

---

## 6. Feature Requests & Roadmap Signals

| Signal | Source | Likelihood in Next Version |
|:---|:---|:---|
| **Image avatars for agents** | #1760 (OPEN) | **High** — PR open, extends existing emoji system non-disruptively |
| **Skeleton loading states** | #1769 (OPEN) | **High** — UI consistency polish, low risk |
| **Enhanced empty states** | #1770 (OPEN) | **High** — Pattern already established in `CoworkSessionList` |
| **Agent persona presets** | #544 (OPEN, stale) | **Medium** — Product decision needed; 1 month old |
| **Popo integration expansion** | #1762 (CLOSED), #1767 (OPEN) | **High** — Active enterprise priority |
| **React 19 + Vite 8 modernization** | #1764, #1766, #1763 (OPEN) | **Medium** — Dependency batch, may need coordination |
| **Electron 41 upgrade** | #1277 (OPEN, updated) | **Medium** — Stale since April 2, reactivated |

**Predicted next release themes:** Enterprise IM parity (DingTalk/Popo), agent personalization (avatars + personas), UI loading/empty state polish, infrastructure modernization.

---

## 7. User Feedback Summary

**Direct user pain points (from issues/PRs):**

| Pain Point | Evidence | Severity |
|:---|:---|:---|
| **Tasks don't actually stop when told to** | #1756 — crawler continues post-stop | Critical UX betrayal |
| **Lost custom skills on Windows update** | #1759 — data loss during upgrade | High trust erosion |
| **Unexpected auto-download on update check** | #1754 — bandwidth/control frustration | Medium |
| **Confusing MCP server scanning messages** | #1755 — `mcporter` misleads users | Medium confusion |
| **Timer task setup copy is wrong** | #1751 — misleads about notification method | Low but sloppy |

**Use case signals:** Heavy enterprise deployment (DingTalk/Popo), multi-agent workflows (avatar differentiation needed), long-running automation tasks (crawler stop control critical).

**Satisfaction:** Likely mixed — robust same-day bug fixes show responsive team, but #1756 and #1759-class bugs suggest production rough edges.

---

## 8. Backlog Watch

| Item | Age | Risk | Action Needed |
|:---|:---|:---|:---|
| **#544 — Agent persona selection** | 32 days | **Feature stagnation** — community-visible PR with demo screenshot, no maintainer response | Product decision: merge, reject, or request changes |
| **#1277 — Electron + electron-builder upgrades** | 19 days | **Security/deprecation risk** — reactivated by dependabot, still open | Merge or close; Electron 40→41 has security implications |
| **#1751 — Timer task copy bug** | 1 day | Minor but unaddressed | Quick fix, good first issue for new contributor |

**Maintainer attention recommended:** #544 most urgently needs closure to signal community PR health; #1277 for security hygiene.

---

*Digest generated from GitHub activity data for 2026-04-20. All links reference github.com/netease-youdao/LobsterAI.*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

# TinyClaw Project Digest — 2026-04-21

**Repository:** [TinyAGI/tinyagi](https://github.com/TinyAGI/tinyagi)

---

## 1. Today's Overview

TinyClaw exhibits **minimal activity** on 2026-04-21, with only one pull request receiving an update in the past 24 hours and zero new issues or releases. The project appears to be in a **stable maintenance phase** rather than active feature development. With no open issues or PRs currently active, the maintainer team has achieved a clean backlog state—though this may also indicate reduced community engagement or a lull between development cycles. The single closed PR from yesterday represents a configuration-system bug fix, suggesting ongoing polish of core infrastructure. Overall project health reads as **stable but quiet**, with no immediate stability concerns or community friction points.

---

## 2. Releases

*No new releases in the past 24 hours. No releases currently published.*

---

## 3. Project Progress

### Merged/Closed PRs (Updated 2026-04-20)

| PR | Title | Author | Status | Significance |
|:---|:---|:---|:---|:---|
| [#276](https://github.com/TinyAGI/tinyagi/pull/276) | fix(heartbeat): honor top-level `heartbeat.enabled=false` setting | [ZVNC28](https://github.com/ZVNC28) | **Closed/Merged** | Configuration system integrity |

**Technical Summary:**  
This fix resolves a **configuration schema mismatch** where `settings.json` supported a top-level `heartbeat.enabled` boolean that was never actually consumed by the runtime. The `Settings` TypeScript type only declared `heartbeat.enabled` nested within `AgentConfig`, causing `startHeartbeat()` at [`packages/main/src/index.ts:272`](https://github.com/TinyAGI/tinyagi/blob/main/packages/main/src/index.ts) to execute unconditionally. The fix ensures user-intended heartbeat suppression is respected, improving **predictable resource usage** and **operator control** in production deployments.

**Impact:** Eliminates silent configuration failures; reduces unexpected background process overhead.

---

## 4. Community Hot Topics

*No active discussions or highly-engaged items today. The project shows **zero open issues and zero open PRs**—an unusually quiet state.*

### Recently Closed Item of Note:
- **[PR #276](https://github.com/TinyAGI/tinyagi/pull/276)** — While closed with zero reactions/comments, this fix addresses a **foot-gun configuration bug** that likely caused production friction (heartbeat processes running despite explicit disablement). The lack of community commentary may indicate: (a) the bug affected few users, (b) workarounds were already in place, or (c) community size is small.

**Underlying Need:** Users expect hierarchical configuration to behave intuitively—top-level flags should override or consistently propagate to nested defaults.

---

## 5. Bugs & Stability

| Severity | Item | Status | Details |
|:---|:---|:---|:---|
| **Medium** (now resolved) | Top-level `heartbeat.enabled` ignored | **Fixed in [PR #276](https://github.com/TinyAGI/tinyagi/pull/276)** | Silent failure mode; heartbeat ran despite explicit disable |

**No new bugs reported today.** The fixed issue had **medium severity** due to:
- **Silent failure** (no error thrown, just ignored config)
- **Resource waste** in constrained environments
- **Operational surprise** for users expecting clean shutdown/disable behavior

**Regression Risk:** Low—fix is narrow and type-safe.

---

## 6. Feature Requests & Roadmap Signals

*No explicit feature requests in today's data.*

**Inferred Signals from Recent Fix:**

| Signal | Implication | Likelihood in Next Version |
|:---|:---|:---|
| Configuration validation/strictness | Schema enforcement to catch ignored fields early | **High** — natural follow-up to #276 |
| Hierarchical config inheritance | Clear precedence rules (global → agent → runtime) | **Medium** — architectural improvement |
| Heartbeat observability | Metrics/logging for heartbeat state | **Low-Medium** — operational enhancement |

**Predicted Next Work:** Given the configuration fix, maintainers may invest in:
- JSON Schema validation for `settings.json`
- Runtime warnings for unrecognized/ignored configuration keys
- Documentation clarifying configuration hierarchy

---

## 7. User Feedback Summary

*No direct user feedback (issues, discussions, or commented PRs) in the past 24 hours.*

**Indirect Pain Points (from PR #276 analysis):**

| Pain Point | Evidence | Severity |
|:---|:---|:---|
| Configuration doesn't behave as documented/expected | `heartbeat.enabled` at top-level existed in schema but was ignored | Moderate |
| Silent failures over loud errors | No warning that setting was ineffective | Moderate |
| Production operational friction | Unwanted heartbeat processes in resource-sensitive deployments | Context-dependent |

**Satisfaction Indicator:** Neutral-to-positive. The fix was merged promptly (~10 days from creation to closure), suggesting responsive maintenance. However, zero community engagement on the PR itself limits visibility into user sentiment.

---

## 8. Backlog Watch

| Item | Age | Risk | Action Needed |
|:---|:---|:---|:---|
| *None currently* | — | — | — |

**Assessment:** With **zero open issues and zero open PRs**, TinyClaw has no backlog requiring immediate attention. This is a double-edged signal:

- **Positive:** Pristine maintenance state, all known issues addressed
- **Concern:** May indicate low adoption, insufficient issue reporting culture, or maintainer bandwidth constraints in triage

**Recommendation for Maintainers:**  
Consider proactive outreach—release notes communication, good-first-issue tagging, or community check-ins—to distinguish "healthy zero backlog" from "disengaged community." The configuration fix in PR #276 warranted broader visibility; a patch release or changelog entry would signal active stewardship.

---

*Digest generated from GitHub activity data for 2026-04-21. All links reference [github.com/TinyAGI/tinyagi](https://github.com/TinyAGI/tinyagi).*

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-04-21

## 1. Today's Overview

Moltis demonstrated **exceptionally high development velocity** on 2026-04-20 with 17 PRs updated (12 merged/closed, 5 open) and 9 issues closed with zero remaining open. The project shipped release `20260420.02` with substantial cross-cutting improvements spanning provider compatibility, sandbox infrastructure, channel integrations, and a major new self-improving agent architecture. All active issues from the past 24 hours were resolved, indicating strong maintainer responsiveness. The contributor `penso` dominated merged work with 10 PRs, while automated documentation batches from `Cstewart-HC` suggest mature CI/CD pipelines.

---

## 2. Releases

### [20260420.02](https://github.com/moltis-org/moltis/releases/tag/20260420.02)

Shipped 2026-04-20. No explicit changelog provided in release metadata, but the tag correlates with these major integration points:

| Area | Notable Inclusions |
|------|------------------|
| **Agent Architecture** | Self-improving agent loop (PR #803): autonomous skill creation, memory lifecycle management, deployment pipeline |
| **Provider Support** | Kimi K2.6 models (PR #809), Fireworks Kimi router fixes (PR #812), Gemini thought_signature round-tripping (PR #795), OpenRouter + Google AI Studio compatibility (implied by issue closure) |
| **Sandbox** | Podman BuildKit image verification (PR #811), Node.js 22 LTS upgrade (PR #807) |
| **Channels** | Slack slash command fix (PR #804), centralized command registry (PR #794), Telegram abort operations (issue #788) |
| **Web UI** | Markdown HTML rendering (PR #808), GitHub Issues/Discussions link badges (PR #806) |
| **MCP** | Legacy SSE transport for endpoint discovery (PR #805) |
| **Skills** | 101 bundled default skills with category UI (PR #797) |

**Breaking Changes**: None explicitly flagged. The Node.js 22 upgrade (PR #807) may affect sandbox users relying on Node 20-specific behavior.

**Migration Notes**: Users on Podman should verify sandbox image availability post-upgrade; the fix in PR #811 auto-handles BuildKit delegation edge cases.

---

## 3. Project Progress

### Merged/Closed PRs (12 items)

| PR | Author | Summary | Impact |
|:---|:-------|:--------|:-------|
| [#803](https://github.com/moltis-org/moltis/pull/803) | penso | **Self-improving agent loop** — skills, memory lifecycle, deployment | 🔴 Major architectural advancement |
| [#797](https://github.com/moltis-org/moltis/pull/797) | penso | 101 bundled default skills with category UI and format fallback | 🔴 Core capability expansion |
| [#812](https://github.com/moltis-org/moltis/pull/812) | penso | Disable strict tools for Fireworks Kimi router | 🟡 Provider compatibility |
| [#811](https://github.com/moltis-org/moltis/pull/811) | penso | Verify image in Podman store after BuildKit build | 🟡 Infrastructure reliability |
| [#809](https://github.com/moltis-org/moltis/pull/809) | penso | Add Kimi K2.6 to Moonshot/Kimi Code providers | 🟡 Model support |
| [#808](https://github.com/moltis-org/moltis/pull/808) | penso | Render markdown as HTML in chat messages | 🟢 UX improvement |
| [#807](https://github.com/moltis-org/moltis/pull/807) | penso | Install Node.js 22 LTS via NodeSource in sandbox | 🟢 Dependency modernization |
| [#806](https://github.com/moltis-org/moltis/pull/806) | penso | GitHub Issues/Discussions links with count badges | 🟢 Community transparency |
| [#805](https://github.com/moltis-org/moltis/pull/805) | penso | Legacy SSE transport for MCP endpoint discovery | 🟡 Protocol compatibility |
| [#804](https://github.com/moltis-org/moltis/pull/804) | penso | Strip leading slash from Slack commands | 🟡 Integration fix |
| [#795](https://github.com/moltis-org/moltis/pull/795) | penso | Gemini thought_signature round-tripping and schema validation | 🟡 Provider reliability |
| [#794](https://github.com/moltis-org/moltis/pull/794) | penso | Centralized command registry for all channels | 🟢 Architecture cleanup |

### Key Feature Advancements

- **Autonomous agent capabilities**: PR #803 introduces a production-grade self-improvement loop with skill patching, memory prefetch/summarization, and deployment hooks—positioning Moltis competitively against OpenAI's Operator and similar agentic systems.
- **Skill ecosystem maturation**: PR #797's 101 bundled skills with `BundledSkillStore` and dev-mode fallback establishes a distribution model for pre-vetted capabilities.

---

## 4. Community Hot Topics

### Most Active Discussion

| Item | Comments/Reactions | Analysis |
|:---|:---|:---|
| [#769](https://github.com/moltis-org/moltis/issues/769) — Docs: heartbeat/cron behavior with multi-agent workspaces | 5 comments, 0 👍 | **Highest engagement**. Reveals architectural complexity in workspace/session isolation that documentation alone cannot resolve. Users need clarity on: (a) heartbeat scope across agent contexts, (b) session history access boundaries, (c) cron job ownership in multi-tenant deployments. Underlying need: **operational runbooks for production multi-agent orchestration**. |

### Emerging Patterns

- **Provider fragmentation pain**: Issues #810, #793, #375, #278 all trace to provider-specific schema/transport incompatibilities (Fireworks, OpenRouter, Gemini, SSE MCP). The rapid PR response suggests this is a known strategic challenge.
- **Channel parity expectations**: Issue #788 (Telegram abort) and PR #794 (centralized commands) show users expect consistent behavior across all integrations.

---

## 5. Bugs & Stability

| Severity | Issue | Fix PR | Details |
|:---|:---|:---|:---|
| **High** | [#796](https://github.com/moltis-org/moltis/issues/796) — Sandbox image not exported to Podman store after buildkit build | [#811](https://github.com/moltis-org/moltis/pull/811) | Rootless Podman 5.4.2: BuildKit delegation leaves images inaccessible. **Regression from prior fix** (PR #765). Fix forces export→load pipeline. |
| **High** | [#810](https://github.com/moltis-org/moltis/issues/810) — 400 error with Fireworks Fire Pass (Kimi K2.5 Turbo) | [#812](https://github.com/moltis-org/moltis/pull/812) | Moonshot backend rejects strict tool schemas. Immediate fix deployed same day. |
| **Medium** | [#798](https://github.com/moltis-org/moltis/issues/798) — Slack slash commands return "invalid channel input: unknown command" | [#804](https://github.com/moltis-org/moltis/pull/804) | Double-slash bug (`//new`) from unhandled leading `/`. Quick fix. |
| **Medium** | [#793](https://github.com/moltis-org/moltis/issues/793) — OpenRouter + Google AI Studio = HTTP 400 | *(implied by closure)* | Likely fixed in provider schema updates; no explicit PR linked in data. |
| **Medium** | [#375](https://github.com/moltis-org/moltis/issues/375) — Gemini thought_signature missing in functionCall | [#795](https://github.com/moltis-org/moltis/pull/795) | Metadata preservation through round-trip. Root cause: allowlist-based field filtering. |
| **Medium** | [#278](https://github.com/moltis-org/moltis/issues/278) — Can't add SSE MCP | [#805](https://github.com/moltis-org/moltis/pull/805) | Legacy SSE protocol unsupported. Servers: Baserow, NocoDB, lox-mcp. |
| **Low** | [#776](https://github.com/moltis-org/moltis/issues/776) — task_list.list bug | *(closed, no PR in data)* | Minimal detail; likely minor UI/API inconsistency. |

**Stability Assessment**: All reported bugs from the period have **same-day resolution**. The Podman regression (#796) is concerning as a follow-on failure from PR #765, suggesting sandbox test coverage gaps for rootless container runtimes.

---

## 6. Feature Requests & Roadmap Signals

| Request | Issue/PR | Likelihood in Next Version | Rationale |
|:---|:---|:---|:---|
| **Voice integration** | [PR #802](https://github.com/moltis-org/moltis/pull/802) (AutoDoc batch) | 🔶 High | Documentation being actively updated; feature likely shipping or in beta |
| **Session branching** | [PR #801](https://github.com/moltis-org/moltis/pull/801) (AutoDoc batch) | 🔶 High | Same pattern as voice; docs precede release |
| **Nix Flake support** | [PR #745](https://github.com/moltis-org/moltis/pull/745) | 🔶 Moderate | Open since 2026-04-16, community contribution, needs maintainer review |
| **Abort operations from Telegram** | [#788](https://github.com/moltis-org/moltis/issues/788) | 🟢 Shipped | Closed; likely in 20260420.02 |
| **Browser automation** | [PR #800](https://github.com/moltis-org/moltis/pull/800) (AutoDoc batch) | 🔶 High | Documentation active for channels, discord, nostr, browser-automation |

**Predicted Next Release Themes**: Voice modality, session management (branching/checkpoints), and browser automation appear documentation-ready. The Nix Flake (PR #745) would expand addressable developer audience significantly.

---

## 7. User Feedback Summary

### Pain Points

| Theme | Evidence | Severity |
|:---|:---|:---|
| **Provider compatibility whack-a-mole** | Issues #810, #793, #375, #278, PRs #812, #795, #805 | 🔴 High — recurring pattern |
| **Podman/rootless container friction** | Issues #796, prior PR #765 | 🟡 Medium — regression risk |
| **Documentation gaps for operational complexity** | Issue #769 (5 comments) | 🟡 Medium — multi-agent deployments |
| **Command inconsistency across channels** | Issues #788, #798, PR #794 | 🟡 Medium — UX fragmentation |

### Use Cases Emerging

- **Enterprise multi-agent workspaces**: Issue #769's depth suggests production deployments with isolation requirements
- **Model router arbitrage**: Rapid Kimi K2.6 adoption (PR #809) and Fireworks fixes (PR #812) indicate users aggressively pursuing cost/performance optimization across providers
- **MCP ecosystem integration**: Legacy SSE support (PR #805) for Baserow/NocoDB shows database-centric automation workflows

### Satisfaction Signals

- **Same-day resolution rate**: 100% for 24h issues
- **No open issues** from the period
- **Proactive model support**: Kimi K2.6 added within hours of launch (benchmarks cited in PR #809)

---

## 8. Backlog Watch

| Item | Age | Status | Risk | Action Needed |
|:---|:---|:---|:---|:---|
| [PR #745](https://github.com/moltis-org/moltis/pull/745) — Nix Flake | 4 days | Open | 🟡 Moderate | Maintainer review for NixOS community adoption; low conflict risk |
| [PR #799-802](https://github.com/moltis-org/moltis/pulls?q=is%3Apr+author%3ACstewart-HC) — AutoDoc batches 1-4 | 1 day | Open | 🟢 Low | Automated docs likely awaiting merge window; batch dependency ordering |
| [Issue #769](https://github.com/moltis-org/moltis/issues/769) area | — | Closed | — | **Follow-up risk**: Documentation fix may not address underlying architectural complexity; monitor for reopening or related issues |

**Critical Attention**: The Nix Flake (PR #745) represents a **platform expansion opportunity** with minimal maintenance burden (declarative packaging). Stale open PRs risk contributor disengagement.

---

*Digest generated from GitHub activity 2026-04-20. All links: https://github.com/moltis-org/moltis*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-04-21

## 1. Today's Overview

CoPaw/QwenPaw shows **very high development velocity** with 92 total items updated in the last 24 hours (42 issues, 50 PRs), indicating an active, rapidly evolving project. The 33 merged/closed PRs versus 17 open suggests maintainers are keeping pace with contributions. However, the project faces **growing pains from its rebrand**: multiple issues report confusion between legacy `.copaw` and new `.qwenpaw` directories, with data migration problems affecting Windows users. The v1.1.3-beta.1 release signals continued iteration on the console plugin system. Community engagement is strong with 58 comments on the open task list alone, though the high volume of "first-time-contributor" PRs suggests the project is successfully attracting new developers.

---

## 2. Releases

### v1.1.3-beta.1
- **Version bump**: `1.1.3b1` by @xieyxclack ([#3524](https://github.com/agentscope-ai/QwenPaw/pull/3524))
- **Console/Plugin enhancements**: Major console plugin system improvements by @zhaozhuang521 ([#3357](https://github.com/agentscope-ai/QwenPaw/pull/3357))
- **Documentation**: Added documentation for enhanced console plugin system by @zhijianma

**Migration note**: This beta continues the QwenPaw rebrand; users upgrading from CoPaw should monitor for `.copaw` → `.qwenpaw` path migration issues (see [#3356](https://github.com/agentscope-ai/QwenPaw/issues/3356), [#3598](https://github.com/agentscope-ai/QwenPaw/issues/3598)).

---

## 3. Project Progress

### Merged/Closed PRs Today (33 total, notable items):

| PR | Author | Description | Impact |
|:---|:---|:---|:---|
| [#3585](https://github.com/agentscope-ai/QwenPaw/pull/3585) | @pxdawn | Telegram typing indicator persists during tool execution | UX improvement for long-running operations |
| [#3620](https://github.com/agentscope-ai/QwenPaw/pull/3620) | @xieyxclack | Version bump to 1.1.3b2 | Release pipeline |
| [#3622](https://github.com/agentscope-ai/QwenPaw/pull/3622) | @rayrayraykk | Fix macOS desktop build | **Critical platform stability** |
| [#3534](https://github.com/agentscope-ai/QwenPaw/pull/3534) | @jinglinpeng | Full backup/restore system with `.zip` snapshots | **Major reliability feature** |
| [#3400](https://github.com/agentscope-ai/QwenPaw/pull/3400) | @gnipping | `ShellEvasionGuardian` — quote-aware shell obfuscation detection | **Security hardening** |
| [#2950](https://github.com/agentscope-ai/QwenPaw/pull/2950) | @octo-patch | Suppress CMD console window on Windows shell execution | Windows UX fix |
| [#3614](https://github.com/agentscope-ai/QwenPaw/pull/3614) | @hongxicheng | Fix `bot_prefix` not applied to DingTalk webhook replies | Channel bugfix |
| [#3616](https://github.com/agentscope-ai/QwenPaw/pull/3616) | @zhaozhuang521 | Fix skill page search when tags are empty | Console UI fix |
| [#1598](https://github.com/agentscope-ai/QwenPaw/pull/1598) | @Nioolek | Multi-agent heartbeat build fix | Core stability |

**Key advancement**: Backup/restore system merged — addresses major operational gap for production deployments. Security tooling (`ShellEvasionGuardian`) shows mature engineering focus.

---

## 4. Community Hot Topics

### Most Active Discussions

| Item | Comments | Analysis |
|:---|:---|:---|
| [#2291](https://github.com/agentscope-ai/QwenPaw/issues/2291) 🐾 Help Wanted: Open Tasks | **58 comments** | **Central coordination hub** — actively managed task board with P0-P2 priorities; indicates healthy contributor onboarding but also suggests project needs more maintainers to handle volume |
| [#3356](https://github.com/agentscope-ai/QwenPaw/issues/3356) WORKING_DIR points to old `.copaw` after upgrade | **20 comments** | **Rebrand migration crisis** — Windows users experiencing data split between old/new directories; core infrastructure debt from name change |
| [#2953](https://github.com/agentscope-ai/QwenPaw/issues/2953) Wrong info after `copaw app start` | 6 comments | Persistent logging issue showing incorrect workspace status messages |
| [#3582](https://github.com/agentscope-ai/QwenPaw/issues/3582) Localhost auth bypass broken (401 on 127.0.0.1) | 5 comments | **Documentation/security gap** — docs promise localhost bypass but implementation fails |

**Underlying needs**: 
- **Migration tooling** is urgently needed for the CoPaw→QwenPaw transition
- **Better Windows testing** — majority of path/auth issues are Windows-specific
- **Documentation accuracy** — security docs don't match implementation

---

## 5. Bugs & Stability

| Severity | Issue | Status | Fix PR? | Details |
|:---|:---|:---|:---|:---|
| 🔴 **High** | [#3356](https://github.com/agentscope-ai/QwenPaw/issues/3356) WORKING_DIR migration failure | OPEN | No | Data split between `.copaw`/`.qwenpaw` on Windows; affects all upgrades |
| 🔴 **High** | [#3582](https://github.com/agentscope-ai/QwenPaw/issues/3582) Localhost auth bypass broken | OPEN | No | 401 errors on 127.0.0.1 despite documented bypass |
| 🟡 **Medium** | [#2953](https://github.com/agentscope-ai/QwenPaw/issues/2953) Wrong info after app start | OPEN | No | Incorrect workspace status logging since v1.0.1 |
| 🟡 **Medium** | [#3573](https://github.com/agentscope-ai/QwenPaw/issues/3573) cron `channel=weixin` KeyError | OPEN | No | Weixin channel not found in cron execution context |
| 🟡 **Medium** | [#3002](https://github.com/agentscope-ai/QwenPaw/issues/3002) OpenAI Responses API incompatibility | OPEN | No | Azure OpenAI proxy returns 400 for GPT-5.3 series |
| 🟡 **Medium** | [#3568](https://github.com/agentscope-ai/QwenPaw/issues/3568) Invalid YAML skill crashes entire QwenPaw | **CLOSED** | [#3568](https://github.com/agentscope-ai/QwenPaw/issues/3568) | **Fixed** — fatal error isolation improved |
| 🟡 **Medium** | [#3600](https://github.com/agentscope-ai/QwenPaw/issues/3600) Frontend images 404 after brief display | **CLOSED** | Unknown | Image serving regression |
| 🟡 **Medium** | [#3578](https://github.com/agentscope-ai/QwenPaw/issues/3578) White screen on launch | **CLOSED** | [#3622](https://github.com/agentscope-ai/QwenPaw/pull/3622) | **Fixed** — macOS desktop build fix |
| 🟢 **Low** | [#3211](https://github.com/agentscope-ai/QwenPaw/issues/3211) llama.cpp GLIBC mismatch in Docker | OPEN | No | Official Docker image lacks compatible llama.cpp |

**Stability assessment**: The rebrand migration is the **top stability risk**. The closed fixes for macOS launch failure and YAML crash show responsive maintenance, but Windows path issues persist without dedicated migration tooling.

---

## 6. Feature Requests & Roadmap Signals

| Feature | Issue/PR | Likelihood in Next Version | Rationale |
|:---|:---|:---|:---|
| **Per-agent model assignment** | [#3599](https://github.com/agentscope-ai/QwenPaw/pull/3599) OPEN | **High** | PR open with UI + backend complete; clear user need for multi-model workflows |
| **Plan mode / PlanNotebook integration** | [#2904](https://github.com/agentscope-ai/QwenPaw/pull/2904) OPEN, [#3629](https://github.com/agentscope-ai/QwenPaw/pull/3629) OPEN | **High** | Two competing PRs indicate strong momentum; core to agent evolution narrative |
| **Semantic skill routing** | [#3117](https://github.com/agentscope-ai/QwenPaw/pull/3117) OPEN | Medium | Performance optimization for many skills; needs discussion per labels |
| **ACP (Agent Communication Protocol) official SDK** | [#3589](https://github.com/agentscope-ai/QwenPaw/pull/3589) OPEN | Medium | Infrastructure-heavy; aligns with AgentScope 2.0 direction |
| **Configurable shell timeout** | [#3593](https://github.com/agentscope-ai/QwenPaw/issues/3593) OPEN | Medium | Simple config exposure; good first issue |
| **Hermes-inspired auto-evolution** | [#3516](https://github.com/agentscope-ai/QwenPaw/issues/3516) OPEN | Low | Philosophical/roadmap question; no implementation path |
| **Claude Code-style frontend** | [#3627](https://github.com/agentscope-ai/QwenPaw/issues/3627) OPEN | Low | Cosmetic; low priority vs functional gaps |

**Prediction**: v1.1.3 stable will likely include per-agent model selection and progress/PlanNotebook features, continuing the console enhancement theme.

---

## 7. User Feedback Summary

### Pain Points

| Theme | Evidence | Severity |
|:---|:---|:---|
| **Rebrand confusion** | [#3356](https://github.com/agentscope-ai/QwenPaw/issues/3356), [#3598](https://github.com/agentscope-ai/QwenPaw/issues/3598) | Critical — data loss risk |
| **Windows second-class experience** | [#3356](https://github.com/agentscope-ai/QwenPaw/issues/3356), [#2950](https://github.com/agentscope-ai/QwenPaw/pull/2950), [#3578](https://github.com/agentscope-ai/QwenPaw/issues/3578), [#3597](https://github.com/agentscope-ai/QwenPaw/issues/3597) | High — path, console, GLIBC, OSError issues |
| **Approval fatigue for automation** | [#3586](https://github.com/agentscope-ai/QwenPaw/issues/3586) | Medium — undermines cron value |
| **Channel-specific bugs** | [#3573](https://github.com/agentscope-ai/QwenPaw/issues/3573) weixin, [#3523](https://github.com/agentscope-ai/QwenPaw/issues/3523) WeCom, [#3613](https://github.com/agentscope-ai/QwenPaw/issues/3613) file sending | Medium — enterprise integration gaps |
| **Frontend polish gaps** | [#3627](https://github.com/agentscope-ai/QwenPaw/issues/3627) "not advanced enough", Python icon | Low — aesthetic/UX debt |

### Positive Signals
- **Strong contributor growth**: Multiple first-time contributors successfully merging PRs
- **Backup/restore merged**: Shows project maturation for production use
- **Security investment**: `ShellEvasionGuardian` demonstrates responsible engineering

### Use Cases Emerging
- **Enterprise WeChat/WeCom integration** — multiple issues around group chat identification, image handling
- **Multi-agent handoff workflows** — [#3623](https://github.com/agentscope-ai/QwenPaw/issues/3623) requests inter-agent session feedback
- **Scheduled automation** — cron usage growing but approval friction blocking

---

## 8. Backlog Watch

| Item | Age | Risk | Action Needed |
|:---|:---|:---|:---|
| [#2291](https://github.com/agentscope-ai/QwenPaw/issues/2291) Open Tasks hub | 27 days | Low | Healthy; maintainer @cuiyuebing actively managing |
| [#2904](https://github.com/agentscope-ai/QwenPaw/pull/2904) Plan mode | 18 days | Medium | Large feature PR; needs maintainer review/merge decision |
| [#3117](https://github.com/agentscope-ai/QwenPaw/pull/3117) Semantic skill routing | 13 days | Medium | Marked "need discussions" — maintainer guidance required |
| [#3548](https://github.com/agentscope-ai/QwenPaw/pull/3548) Memory rebuild | 4 days | Low | Recent; aligns with AgentScope 2.0 — watch for merge |
| [#3211](https://github.com/agentscope-ai/QwenPaw/issues/3211) Docker llama.cpp GLIBC | 11 days | Medium | No response; affects local model deployment in containers |
| [#3516](https://github.com/agentscope-ai/QwenPaw/issues/3516) Hermes auto-evolution | 4 days | Low | Roadmap question; needs product direction |

**Maintainer attention recommended**: 
1. **Windows migration tooling** — no dedicated issue/PR exists for automated `.copaw` → `.qwenpaw` migration
2. **Plan mode PRs** — two competing implementations ([#2904](https://github.com/agentscope-ai/QwenPaw/pull/2904), [#3629](https://github.com/agentscope-ai/QwenPaw/pull/3629)) need consolidation decision
3. **Semantic routing** — "need discussions" label stale; community waiting for architectural guidance

---

*Digest generated from GitHub activity 2026-04-20 to 2026-04-21. All links reference https://github.com/agentscope-ai/QwenPaw.*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-04-21

## 1. Today's Overview

ZeroClaw shows **high-velocity development** with 46 issues and 50 PRs updated in the last 24 hours, indicating an active pre-release sprint toward v0.7.4. The project is in a **major architectural transition**: five foundational RFCs were accepted last week covering microkernel architecture, CI/CD, governance, documentation standards, and code quality—positioning the codebase for v1.0.0 maturity. No new release was cut today, but milestone tracking for v0.7.4 (#5877) shows active coordination. The community is pushing hard on plugin security, voice interaction, and multi-agent capabilities while wrestling with post-microkernel-split publishing and build issues.

---

## 2. Releases

**No new releases.** The v0.7.4 milestone is in progress (#5877), renumbered from v0.7.2 after an emergency v0.7.3 ship due to "broken tags blowout." Release automation remains a known pain point being addressed through RFC #5579 and recent CI cleanup (#5915).

---

## 3. Project Progress

### Merged/Closed PRs (Recent, High-Impact)

| PR | Author | Summary | Impact |
|---|---|---|---|
| [#5774](https://github.com/zeroclaw-labs/zeroclaw/pull/5774) | RyanHoldren | Fixed skill tool registration in gateway path; tools from SKILL.toml files now properly register and excluded-tool filters apply | **S1 fix** — unblocked web UI skill usage |
| [#5773](https://github.com/zeroclaw-labs/zeroclaw/pull/5773) | RyanHoldren | Fixed shell guard bypass: wildcard `allowed_commands=["*"]` with `block_high_risk_commands=false` now properly allows backticks, `$()`, `${}`, `<()`, `>()` | **Security fix** — guard logic consistency |
| [#5915](https://github.com/zeroclaw-labs/zeroclaw/pull/5915) | WareWolf-MoonWall | Deleted 5 "vibe-coded" workflow files causing automation chaos | CI stability |

### Architecture & Infrastructure Landed

- **Microkernel workspace split** (#5559) is complete; follow-up fix for `cargo publish` resolved (#5811)
- **RFC acceptance sweep**: All 5 v0.7.0 foundational RFCs now accepted (#5574, #5576, #5577, #5579, #5653, #5615)

---

## 4. Community Hot Topics

| Issue/PR | Comments | Topic | Underlying Need |
|---|---|---|---|
| [#5574](https://github.com/zeroclaw-labs/zeroclaw/issues/5574) | 9 | **RFC: Microkernel Transition** | Escape reactive growth; intentional v1.0 architecture |
| [#3642](https://github.com/zeroclaw-labs/zeroclaw/issues/3642) | 7 | **"Full" Docker image** | Lower barrier to entry for non-technical users; feature flags like WhatsApp confuse newcomers |
| [#5348](https://github.com/zeroclaw-labs/zeroclaw/issues/5348) | 5 | **Web dashboard build failure** | Developer experience gap — dashboard requires manual Node build |
| [#5877](https://github.com/zeroclaw-labs/zeroclaw/issues/5877) | 5 | **v0.7.4 milestone tracking** | Release predictability after v0.7.3 emergency |
| [#4842](https://github.com/zeroclaw-labs/zeroclaw/issues/4842) | 4 | **aarch64 binary download wrong arch** | ARM/edge device support (Raspberry Pi) |
| [#5849](https://github.com/zeroclaw-labs/zeroclaw/issues/5849) | 4 | **Dream Mode — memory consolidation** | Long-term autonomy; agent "sleep" for reflection |

**Analysis**: The community is split between **infrastructure maturity** (microkernel, CI, docs) and **user-facing capabilities** (Docker, voice, ARM support). The high engagement on #3642 (Docker) signals onboarding friction is a retention risk.

---

## 5. Bugs & Stability

| Severity | Issue | Description | Fix PR? |
|---|---|---|---|
| **S1** — workflow blocked | [#5815](https://github.com/zeroclaw-labs/zeroclaw/issues/5815) | Provider ignores `llamacpp` config object (schema v2 regression) | ❌ Open |
| **S1** — workflow blocked | [#4842](https://github.com/zeroclaw-labs/zeroclaw/issues/4842) | `zeroclaw update` downloads x86_64 binary on aarch64/ARM64 | ❌ Open |
| **S1** — workflow blocked | [#5850](https://github.com/zeroclaw-labs/zeroclaw/issues/5850) | Skill-defined tools return "Unknown tool" in web UI | ✅ Fixed by [#5774](https://github.com/zeroclaw-labs/zeroclaw/pull/5774) |
| **S1** — workflow blocked | [#5941](https://github.com/zeroclaw-labs/zeroclaw/issues/5941) | "No tool call found for function call output" — provider/model failure | ❌ Open |
| **S2** — degraded | [#5948](https://github.com/zeroclaw-labs/zeroclaw/issues/5948) | ACP mode non-JSON logs break agentic.nvim client | ❌ Open |
| **S2** — degraded | [#4857](https://github.com/zeroclaw-labs/zeroclaw/issues/4857) | Cannot add cron from UI due to unclear security restrictions | ❌ Open |
| **S0** — data loss/security | [#5847](https://github.com/zeroclaw-labs/zeroclaw/issues/5847) | Undocumented `gateway.web_dist_dir` / `ZEROCLAW_WEB_DIST_DIR` usage | ❌ Open |

**Regression pattern**: Schema v2 (#5815) and microkernel split (#5811, resolved) introduced config/provider breakage. The S1 density (4 open) suggests v0.7.4 stabilization should prioritize these over new features.

---

## 6. Feature Requests & Roadmap Signals

| Feature | Issue | Likelihood in v0.7.x | Signal Strength |
|---|---|---|---|
| **Full-duplex voice with barge-in** | [#5896](https://github.com/zeroclaw-labs/zeroclaw/issues/5896), PR [#5942](https://github.com/zeroclaw-labs/zeroclaw/pull/5942) | **High** — PR open, trait defined | 🔥 Strong |
| **Dream Mode / memory consolidation** | [#5849](https://github.com/zeroclaw-labs/zeroclaw/issues/5849) | Medium — concept stage, needs RFC | Medium |
| **Multi-agent UX flow** | [#5890](https://github.com/zeroclaw-labs/zeroclaw/issues/5890) | Medium — 7-day discussion period active | Medium |
| **WASM plugin bridge (Extism)** | [#5912](https://github.com/zeroclaw-labs/zeroclaw/issues/5912) | **High** — Phase 2 D2, infrastructure landed | 🔥 Strong |
| **Postgres memory backend** | PR [#5946](https://github.com/zeroclaw-labs/zeroclaw/pull/5946) | **High** — PR ready, feature-gated | 🔥 Strong |
| **Schema v3 migration** | [#5947](https://github.com/zeroclaw-labs/zeroclaw/issues/5947) | **Blocking** — merge gate for breaking changes | 🔥 Critical path |
| **"Full" Docker image** | [#3642](https://github.com/zeroclaw-labs/zeroclaw/issues/3642) | Medium — community demand, resource tradeoff | Medium |

**Prediction**: v0.7.4 will likely ship voice duplex, WASM plugins, Postgres backend, and schema v3. Dream Mode and multi-agent flow are v0.8.0+ candidates.

---

## 7. User Feedback Summary

### Pain Points
- **Onboarding cliff**: Docker complexity (#3642), undocumented env vars (#5847), manual dashboard build (#5348)
- **Architecture-specific neglect**: ARM64 users broken by update mechanism (#4842)
- **Config fragility**: Schema migrations break existing setups (#5815, #5947)
- **Security opacity**: Cron blocked with no actionable error (#4857)

### Use Cases Emerging
- **Voice-first agents**: Tavina.ai operator requesting phone-call-like interaction (#5896)
- **Edge deployment**: Raspberry Pi as target platform (#4842)
- **Plugin ecosystem**: WASM security concerns (SSRF #5918, env allowlist #5919) indicate third-party extensibility demand

### Satisfaction/Dissatisfaction
- **Positive**: Rapid RFC process, accepted governance framework, active maintainer presence (WareWolf-MoonWall)
- **Negative**: "Vibe-coded" automation caused harm (#5915), emergency releases suggest release discipline gaps

---

## 8. Backlog Watch

| Issue/PR | Age | Problem | Action Needed |
|---|---|---|---|
| [#3642](https://github.com/zeroclaw-labs/zeroclaw/issues/3642) | ~5 weeks | Full Docker image | Maintainer decision on build matrix; 3 👍 indicates demand |
| [#4842](https://github.com/zeroclaw-labs/zeroclaw/issues/4842) | ~3 weeks | aarch64 binary download | Simple fix (target triple detection); unassigned |
| [#5099](https://github.com/zeroclaw-labs/zeroclaw/pull/5099) | ~3 weeks | WhatsApp feature flag wiring | Author action needed; channel parity blocked |
| [#5733](https://github.com/zeroclaw-labs/zeroclaw/pull/5733) | ~1 week | Model quick-switcher + persistent WebSocket | Review pending; UX improvement |
| [#5853](https://github.com/zeroclaw-labs/zeroclaw/pull/5853) | ~3 days | Self-heal orphaned tool_result blocks | Needs maintainer review; Signal/Anthropic reliability |
| [#5580](https://github.com/zeroclaw-labs/zeroclaw/pull/5580) | ~2 weeks | Dashboard `/api/channels` endpoint | Author action needed; frontend-backend sync |

**Risk**: The WhatsApp (#5099) and dashboard (#5580) PRs are stalled with `needs-author-action`. These represent channel coverage and UI completeness gaps that could compound onboarding issues.

---

*Digest compiled from 46 issues and 50 PRs updated 2026-04-20 to 2026-04-21.*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*