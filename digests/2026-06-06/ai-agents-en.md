# OpenClaw Ecosystem Digest 2026-06-06

> Issues: 467 | PRs: 500 | Projects covered: 13 | Generated: 2026-06-06 00:38 UTC

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

# OpenClaw Project Digest — 2026-06-06

---

## 1. Today's Overview

OpenClaw is experiencing extremely high community activity with **467 issues** and **500 pull requests** updated in the last 24 hours — a volume that signals a large, highly engaged open-source community but also suggests the project's maintainers face a significant triage burden. **No new releases** have been published today, and the last release (v2026.6.1) appears to have introduced several regressions that dominate the current issue churn. The community is clearly working through a backlog of bugs and feature work: 127 issues were closed and 124 PRs merged/closed in recent cycles. Activity health indicators — high comment counts on P1 bugs, active PR review lanes, and multiple maintainer-review tags — point to a project shipping fast but dealing with the stability tax that comes with it.

---

## 2. Releases

**None today.** No new versions were published on 2026-06-06. The most recent release driving discussion is **v2026.6.1**, which introduced multiple regressions (OpenAI transport failures, cron state loss during SQLite migration, Matrix dispatch breakage, Feishu streaming issues) that are still being triaged.

---

## 3. Project Progress

The following closed/merged PRs represent tangible progress from the community:

| PR | Summary |
|---|---|
| **#90785** [CLOSED] | Minor: ignore local `.toon`, `.wav`, `.xlsx` artifact files in root `.gitignore` — developer workflow hygiene |
| **#75167** [CLOSED] | **Channel hygiene fix**: suppressed internal heartbeat poll system messages (`[OpenClaw heartbeat poll]`) leaking into user-facing Telegram, Slack, and Discord conversations |
| **#90775** [CLOSED] | **Session correctness fix**: refreshed prompt fence after compaction writes, preventing false session-takeover reports after auto-compaction — a direct contributor to resolving "runaway EmbeddedAttemptSessionTakeoverError" reports |

**Features actively advancing through PR review:**

| PR | Description | Status |
|---|---|---|
| **#90788** | Chain-of-Thought (CoT) pre-flight planning for long-running goals — structured task decomposition & execution tracking for agentic workflows | Open, needs behavior proof |
| **#90792** | Unified Amazon AWS services plugin: Polly TTS, Transcribe STT, Nova Sonic realtime voice | Open, docs-focused |
| **#85651** | Context-pressure-aware continuation protocol (`continue_work` / `continue_delegate` / `request_compaction`) — a major agent autonomy upgrade | Open, large, needs eval |
| **#89040** | **Performance fix**: event-loop stalls (14–22s) during `embedded_run` bootstrap-context resolved by switching sync I/O to async during workspace file loading | Open, ready for maintainer |
| **#78441** | `toolsAllow` forwarding through `sessions_spawn` for native subagent runs — directly addresses the widely-reported MCP tools-ignored-in-subagents issue | Open, ready for maintainer |
| **#90248** | Channel turn delivery & control-lane observability for Telegram/DM — improved diagnostics for message lifecycle | Open, large XL |

**Takeaway:** The project is in a heavy infrastructure-correction phase. Closed PRs channel-hygiene and session-compaction correctness, while the open PR pipeline targets intelligent agent planning (CoT), continuation protocols, and AWS service integration. No release has been cut to ship any of this.

---

## 4. Community Hot Topics

Ranked by comment count and engagement signals:

### 🔥 #22438 — Tiered Bootstrap File Loading for Progressive Context Control
- **17 comments** | Author: 882soft | P2 🦞 diamond lobster
- **Need:** Bootstrap files burn LLM tokens on every session, including sub-agents and cron jobs that never reference them. Users with large workspaces want tiered loading (core vs. extended vs. workspace).
- **Why it matters:** Directly targets a universal pain point — context window waste — that compounds at scale. Tied to **#14785** tool schema overhead (~3,500 tok/session). Together, context-efficiency is the community's single biggest efficiency ask.

### 🔥 #62505 — Coding Agent Never Completes Anything (Regression from 2026.4.2)
- **14 comments** | Author: drpau | P1 🦞 diamond lobster
- **Need:** A critical regression where coding agents only produce vague status updates instead of actual work output. Regression from 2026.4.2, still open.
- **Why it matters:** Strikes at the core value proposition of OpenClaw as a coding assistant. The highest-comment P1 bug and linked to PR work.

### #78308 — Channel-Mediated Approval for MCP Tool Calls (Consent Envelope)
- **12 comments** | Author: oalterg | P2 🐚 platinum hermit
- **Need:** MCP tools that mutate external state (send email, write vault entries) should be gated by the same `/approve <id>` pipeline that already gates shell-exec calls.
- **Why it matters:** Security-sensitive. Extends the existing consent model to MCP, broadening the safety surface. No linked PR yet.

### 🔥 #90083 — OpenAI ChatGPT Responses Transport Fails on gpt-5.4/gpt-5.5 in 2026.6.1
- **12 comments, 3 👍** | Author: jimmielightner | P1 🐚 platinum hermit
- **Need:** 2026.6.1 config/plugin migration broke OpenAI Responses inference for gpt-5.4/gpt-5.5 with `invalid_provider_content_type`.
- **Why it matters:** Affects users on the latest OpenAI models post-upgrade. Actively being worked via PR **#90790** (preserve completed replies after client close).

### 🔥 #90093 — OpenAI Native Replay Sends Encrypted Reasoning, Breaks Next Turn
- **8 comments, 2 👍** | Author: richardmqq
- **Need:** On 2026.6.1, a native `openai-chatgpt-responses` session succeeds on turn 1 then fails on turn 2 with `invalid_encrypted_content` (400). Root cause: native replay sends encrypted reasoning into the next turn.
- **Why it matters:** Directly adjacent to #90083 — compounding evidence that the 2026.6.1 OpenAI transport changes are the single largest source of current breakage.

### 🔥 #63829 — Per-Agent Memory-Wiki Vault Configuration
- **9 comments, 9 👍** | Author: fclwtt | P1 🦞 diamond lobster
- **Need:** Multi-agent setups need per-agent isolated knowledge wikis instead of a single global vault.
- **Why it matters:** 👍-to-comment ratio of 1.0 — everyone who sees it agrees. Critical for multi-tenant and multi-agent deployments.

---

## 5. Bugs & Stability

Ranked by severity and impact:

### 🔴 P1 — Critical Regressions Active in 2026.6.1

| Issue | Description | Fix PR | Impact |
|---|---|---|---|
| **#90083** | OpenAI Responses transport fails on gpt-5.4/gpt-5.5 (`invalid_provider_content_type`) | #90790 (related) | Broken inference for latest OpenAI models |
| **#90093** | OpenAI native replay breaks turn 2 with encrypted reasoning replay | — | Every other turn fails for native OpenAI sessions |
| **#90325** | Matrix dispatch crashes with `TypeError: Cannot read properties of undefined (reading 'run')` | — | **Total Matrix channel breakage** in 2026.6.1 |
| **#90072** | Cron state silently wiped during SQLite migration on upgrade to 2026.6.1 | — | **Data loss**: 44 of 45 cron jobs lost with no warning or backup prompt |
| **#62505** | Coding Agent regression — never completes tasks (broken since 2026.4.2) | — | Core value proposition broken for coding agent users |
| **#87756** | Lobster workflow hangs on nested `/tools/invoke` when prompt-launched (curl works) | — | Regression blocking production workflow automation |
| **#85030** | MCP tools not injected into subagent sessions — all exposure configs ignored | — | Sub-agents lose all MCP capability, silently |
| **#77012** | WebChat session transcript overwritten on every turn (5.2 regression) | — | Complete conversation history loss on refresh |
| **#90466** | Memory-core dreaming reads `.jsonl.deleted.*` session paths, writes fallback to DREAMS.md | — | Memory corruption in 2026.6.1 + false fallback content |
| **#88929** | Feishu streaming card: abnormal typewriter effect + final content truncated to last character | — | Streaming rendering broken on Feishu |

### 🟡 P2 — Degraded Experience

| Issue | Description |
|---|---|
| **#76562** | High CPU, extreme control-plane RPC latency, unstable polling after 2026.4.24→2026.4.29/5.2 upgrade |
| **#90711** | launchd plist `StandardErrorPath` hardcoded to `/dev/null`, hiding all gateway stderr diagnostics (5.28 regression) |
| **#85103** | Model fallback chain not triggered on provider-wide quota exhaustion (429→should failover, doesn't) |
| **#86215** | Codex OAuth refresh failures wedge agent for hours without alerting or aggressive profile rotation |
| **#64810** | Heartbeat/async system events interrupt and swallow in-progress replies in Telegram topics |

### 🟢 P3 — Cosmetic / Edge Cases
- **#64267** Agent internal thinking (English) exposed to user — data leakage concern, P1 priority but low activity
- **#90246** Request to collapse/hide Workspace/Files rail in WebChat — UI polish

**Overall stability assessment:** The v2026.6.1 release introduced a cluster of **critical, high-impact regressions** across transport (OpenAI, Matrix), data persistence (SQLite migration wiping cron state), memory engine (dreaming regression), and channel rendering (Feishu). The project would benefit from an emergency patch release (2026.6.2) or a detailed rollback guide. OpenClaw's excellent labeling system (`clawswеeper:*` taxonomy) makes triage manageable even at this volume.

---

## 6. Feature Requests & Roadmap Signals

Based on community activity, comment volume, and 👍 counts, the following are likely candidates for near-term inclusion:

### High Probability (strong signals, active PR or linked work)
| Feature | Issue | Signal |
|---|---|---|
| **Tiered bootstrap file loading** | #22438 | 17 comments, P2, actively discussed with linked PRs |
| **`toolsAllow` forwarding to subagents** | #78441 (PR) | Ready for maintainer review, directly linked to #85030 |
| **CoT pre-flight planning for long-running goals** | #90788 (PR) | Fresh PR with design rationale, XL scope |
| **Context-pressure-aware continuation** | #85651 (PR) | XL, design doc referenced, addresses core agent autonomy |
| **Intelligent compaction trigger** (mentioned community-wide) | Compaction is the root cause of multiple active regressions (#90466, #90775) | De facto emergency priority |

### Medium Probability (strong community demand, no active PR yet)
| Feature | Issue | Signal |
|---|---|---|
| **Per-agent memory-wiki vault** | #63829 | 9 comment, 9 👍 (100% approval ratio) |
| **Channel-mediated MCP approval (consent envelope)** | #78308 | 12 comments, security-tagged, platinum hermit |
| **Per-agent session duration/token caps** | #64463 | P2, request for runaway cost protection |
| **Discord granular access lists (roles + per-channel)** | #69748 | P2, well-specified, security-tagged |

### Strategic Watch
- **#90792** — Unified AWS services plugin (Polly, Transcribe, Nova Sonic): signals OpenClaw's expansion into native voice + TTS/STT infrastructure
- **#85651** — `continue_work` protocol: if merged, this represents a fundamental shift in how OpenClaw agents manage long-running work — a step toward autonomous multi-turn agentic execution without external pulsing

---

## 7. User Feedback Summary

### Recurring Pain Points

**1. Context window exhaustion is the #1 efficiency complaint.**
Multiple issues (#22438, #14785, #89040) converge on wasted tokens — from bootstrap files, tool schemas, and synchronous I/O stalls. Users are hitting practical limits of context windows, especially with large workspaces and multi-agent deployments.

**2. Regression debt from the 2026.4.x → 2026.6.x upgrade path is significant.**
Users upgrading from 2026.4.x to 2026.6.1 report: broken OpenAI transport, Matrix dispatch crash, silent cron data loss, Feishu streaming corruption, WebChat transcript wipe, memory-core dreaming regression, and high CPU/latency. The upgrade has caused a sharp increase in P1 regression reports. **Users need (a) an emergency patch, or (b) a well-communicated rollback/hold recommendation.**

**3. Agent reliability at scale is a growing concern.**
Issues around subagent tool injection (#85030), model fallback failure on quota exhaustion (#85103), authorization wedges (#86215), and heartbeat event interference (#64810) reveal that users are running OpenClaw in production multi-agent setups and hitting robustness boundaries. The community is asking for better failure isolation, automatic provider rotation, and more observable agent execution.

**4. Multi-agent isolation is an unmet need.**
The per-agent memory-wiki vault (#63829, unanimous 👍) and per-agent session caps (#64463) both reflect demand for better multi-tenant/multi-agent isolation primitives.

### Satisfaction Signals
- **Excellent triage infrastructure:** The `clawswеeper:*` labeling system is enabling systematic issue management even at 467-issue volume
- **Fast PR throughput:** 124 PRs merged/closed in the cycle, with clear review lanes (`ready for maintainer look`, `needs proof`)
- `--fix` tool adoption: Users running `openclaw doctor --fix` are hitting edge cases (#90711 plist stderr, #90790 voice normalization), indicating the tooling is being actively used, which pushes edge cases faster into visibility

---

## 8. Backlog Watch

These **important issues have been open for extended periods with recent activity but no resolution**, signaling they need dedicated maintainer attention:

| Issue | Age | Status | Why It's Stale-Critical |
|---|---|---|---|
| **#22438** Tiered bootstrap loading | 125 days | Open, 17 comments, linked PR | Core efficiency improvement with community traction, still no resolution |
| **#62505** Coding Agent regression | 60 days | Open, P1, 14 comments, linked PR | Broken core functionality for 2 months — every coding agent user is affected |
| **#63829** Per-agent memory-wiki | 58 days | Open, P1, 9 👍 | Unanimous demand, no movement |
| **#58818** Guarantee last N raw messages post-compaction | 66 days | Open, stale | Fundamental session durability gap |
| **#64267** Agent thinking leaked to user | 57 days | Open, stale, P2 | **Security/data leakage** — internal reasoning exposed |
| **#63030** System prompt assembled differently across code paths (cache invalidation) | 61 days, stale | P2 | Causes continuous Anthropic cache invalidation = excess cost for all Anthropic users |
| **#62288** Browser: existing-session attach brittle at DevToolsActivePort | 60 days, stale | P2 | Browser automation, a key agent tool, is reliability-compromised |
| **#58730** exec() sandbox isolation & permission model | 66 days, stale | P1 🐚 | Security-motivated, inspired by Claude Code leak analysis, no progress |
| **#85030** MCP tools not injected to subagents | 16 days | Open, P1, 3 👍 | Widely-reported, blocks all MCP subagent workflows, no fix PR |

**PRs needing maintainer review (ready but stalled):**
- **#89040** — event-loop stall fix during embedded_run bootstrap (14–22s blocks): ready for maintainer, directly impacts session reliability
- **#78441** — `toolsAllow` forwarding to subagents: ready for maintainer, widely needed
- **#90592** — Synology Chat timeout removal: ready for maintainer, small, focused
- **#90723** — Gmail Pub/Sub pull delivery mode: ready for maintainer, expands email integration
- **#90019** — Memory search periodic sync default fallback: ready for maintainer, P1

---

**Digest compiled by OWL** | *ZOO Company | 2026-06-06*

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: Personal AI Assistant & Agent Open-Source Ecosystem

**Date:** 2026-06-06 | **Compiled by OWL, ZOO Company**

---

## 1. Ecosystem Overview

The personal AI agent / assistant open-source landscape is in a period of explosive diversification and rapid iteration. At least 14 identifiable projects span the space — from full-featured desktop AI workbases (OpenClaw, LobsterAI, Hermes Agent) to ultra-lightweight embedded runtimes (PicoClaw, ZeptoClaw) and protocol-first frameworks (ZeroClaw, Moltis). The dominance of OpenClaw in raw community scale is unmistakable, but meaningful specialization is emerging: Hermes Agent focuses on multi-platform gateway orchestration, IronClaw is building enterprise-grade hook and plugin infrastructure, ZeroClaw is standardizing schema-v3 for provider/channel extensibility, and CoPaw targets Chinese-market IM integrations. The ecosystem is collectively grappling with context window efficiency, multi-agent reliability, security hardening, and seamless multi-provider model routing as the defining technical challenges of this generation.

---

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | New Release | Health Score | Notes |
|---|---|---|---|---|---|
| **OpenClaw** | 467 updated | 500 updated (**127 closed, 124 merged**) | ❌ None (v2026.6.1 prev.) | ⚠️ Yellow | Massive volume, but heavy regression debt from 2026.6.1 requiring emergency patch |
| **Hermes Agent** | 50 updated | 50 updated (6 merged/closed) | ❌ None (v0.15.1) | 🟢 Green | Stable cadence, focused fix-and-polish phase |
| **PicoClaw** | 6 updated | 22 updated (**all merged**) | ✅ Nightly v0.2.9-nightly | 🟢 Green | Exceptional PR throughput (22/22 merged), consolidation sprint |
| **NanoClaw** | 0 updated | 3 updated (2 merged, 1 open) | ❌ None | 🟢 Green | Minimal but steady maintenance activity |
| **NullClaw** | 0 updated | 1 open (0 merged) | ❌ None | ⚪ Quiet | Near-zero activity, single provider PR pending |
| **IronClaw** | 13 updated | 50 updated (22 merged/closed) | ❌ None (v0.29.1) | 🟢 Green | Large Reborn integration wave landing; high engineering velocity |
| **LobsterAI** | 0 new | 13 merged | ✅ **v2026.6.5** | 🟢 Green | Coordinated shipping cadence, stale PR sweep executed |
| **TinyClaw** | 0 | 0 | ❌ None | ⚪ Inactive | No activity in 24h window |
| **Moltis** | 4 updated | 5 updated (1 merged, 4 open) | ❌ None | 🟢 Green | Moderate, steady contributor-driven fixes |
| **CoPaw** | 24 updated | 25 updated (15 merged/closed) | ❌ None | 🟡 Yellow-High | High throughput, but Yuanbao channel critical bugs need urgent resolution |
| **ZeptoClaw** | 0 | 0 | ❌ None | ⚪ Inactive | No activity in 24h window |
| **ZeroClaw** | 50 updated | 50 updated (6 issues closed) | ❌ None (pre-v0.8.0) | 🟢 Green | Massive integration sprint (30+ new providers/channels in stacked PRs) |

**Health Score Key:** 🟢 Green = healthy/stabilizing · 🟡 Yellow = active but with notable risk · 🔴 Red = critical issues · ⚪ Quiet/Inactive

---

## 3. OpenClaw's Position

### Scale Dominance

OpenClaw's community activity is **an order of magnitude larger** than any peer: 467 issues and 500 PRs updated in 24 hours dwarfs the next most active project (IronClaw and ZeroClaw at ~50 each). This reflects OpenClaw's role as the **de facto reference implementation** in the personal AI agent space — comparable to how Linux distributions have a clear "default" option. The 124 PRs merged per cycle demonstrates a well-oiled review and merge pipeline supported by the `clawswеeper:*` labeling taxonomy.

### Advantages

- **Breadth of integration support:** OpenClaw covers the widest range of channels (Telegram, Slack, Discord, Matrix, Feishu, WebChat), providers (OpenAI native + transport, Amazon AWS), and agent autonomy features (CoT planning, context-pressure continuation protocols) in a single project.
- **Mature safety infrastructure:** The `/approve <id>` consent pipeline for shell execution is the foundation that other projects (Hermes Agent's Tirith, ZeroClaw's planned allow/ask/deny) are still working toward.
- **Multi-agent primitives lead:** `toolsAllow` forwarding to subagents (#78441), per-agent session architecture, and embedded run session management are the most advanced in the ecosystem.

### Technical Approach Differences

| Dimension | OpenClaw | Leading Peers |
|---|---|---|
| **Architecture** | Monolithic gateway + plugin system | ZeroClaw (schema-v3 externalized modules), IronClaw (hook-based WASM extension) |
| **Session model** | JSONL-based with compaction | PicoClaw (similar JSONL), ZeroClaw (ACP tombstones), Moltis (rehydration-capped) |
| **Agent autonomy** | `continue_work` / `continue_delegate` protocol (PR #85651) | Hermes Agent (delegate_task subagent chains), IronClaw (Reborn ProductWorkflow doors) |
| **Voice/Native UI** | Via AWS plugin (PR #90792) | LobsterAI (built-in Electron desktop + ASR), Hermes Agent (Electron desktop with CJK i18n) |
| **Enterprise focus** | Present but secondary | IronClaw (WeCom, security audit sinks, OIDC RFCs), CoPaw (Yuanbao, DingTalk) |

### Weaknesses vs. Peers

OpenClaw's monolithic scale carries a **regression tax**: the v2026.6.1 release introduced failures across 5+ transport/channel surfaces simultaneously. Meanwhile, **ZeroClaw's schema-v3 approach** (7 providers + 5 SMS channels + 4 social channels + Twitch in a single PR batch yesterday) demonstrates that a more modular architecture may scale integration work faster. **LobsterAI's desktop-first Electron app** delivers a polished UX out-of-the-box that OpenClaw WebChat has not yet matched (transcript overwrite bugs, UI polish gaps).

---

## 4. Shared Technical Focus Areas

The following requirements are emerging as **universal needs** across multiple projects, signaling ecosystem-wide consensus on what matters:

### A. Context Window Efficiency
**Projects:** OpenClaw (#22438, #14785, #89040), PicoClaw (#2968, #2964), ZeroClaw (#7100), Moltis (#1089)
- Bootstrap/config file tiered loading to reduce wasted tokens
- Tool schema overhead reduction (~3,500 tok/session reported in OpenClaw)
- Image compression before model payload building
- Soft vs. hard compaction threshold visibility for users

### B. Security & Consent Architecture
**Projects:** OpenClaw (#78308 consent envelope), Hermes Agent (#35357 Tirith bypass, #21563 MCP approval no-ops), ZeroClaw (#7155 shell policy tiers, #7142 pluggable security provider, #7141 OIDC), PicoClaw (#2900 CSRF/path-traversal hardening, #2907 JSONL crash consistency)
- **Convergence point:** Channel-mediated approval for all state-mutating operations (not just shell), per-execution confirmation tiers, and OIDC/Auth enterprise integration are must-haves for production deployment.

### C. Multi-Agent Reliability & Observability
**Projects:** OpenClaw (#85030 subagent tools, #78441 toolsAllow forwarding), Hermes Agent (#40189 delegated_role field), ZeroClaw (#7233 OTel observability), IronClaw (#4311 budget governance semantics, #4512 sandbox semaphore)
- Subagent tool injection is broken or incomplete across 3+ projects
- Observability (structured events, session lineage, trace correlation) is the #1 infrastructure gap for production debugging

### D. Channel / Provider Extensibility
**Projects:** ZeroClaw (schema-v3 modular provider wave), OpenClaw (AWS unified plugin #90792), NullClaw (Evolink #947), IronClaw (WeCom group fixes, Slack streaming), CoPaw (Yuanbao proto), Hermes Agent (BytePlus ModelArk request, QQ Bot)
- Strong demand for **provider adapter standardization** (OpenAI-compatible endpoints as the de facto lingua franca)
- Multi-instance channel support (same provider, multiple bots/accounts) requested by PicoClaw (#2551), Hermes Agent (#40173), and ZeroClaw

### E. CJK/Internationalization Support
**Projects:** Hermes Agent (#40062 Simplified Chinese i18n, #40146 CJK IME bugs, #40145 input truncation), ZeroClaw (#7123 UTF-8 truncation fix for CJK), CoPaw (Chinese IM ecosystem native)
- Desktop IME (Input Method Editor) handling is a **systematic gap** across Electron/TUI-based agents
- The Hermes Agent experience shows i18n landing without companion IME fixes creates a fragmented rollout

---

## 5. Differentiation Analysis

| Dimension | OpenClaw | Hermes Agent | IronClaw | ZeroClaw | LobsterAI | CoPaw | PicoClaw | Moltis |
|---|---|---|---|---|---|---|---|---|
| **Target User** | Power users, multi-agent developers | Multi-platform gateway operators | Enterprise/protocol builders | Integration architects & scaling teams | End-user desktop productivity | Chinese enterprise (Yuanbao/DingTalk) | Lightweight embedded/contributor sandbox | Tool-result-conscious deployers |
| **Deployment Model** | CLI + gateway + WebChat | CLI + desktop Electron + gateway | CLI + gateway + WASM plugins | CLI + gateway + plugin lifecycle | Desktop Electron (primary) | Desktop + mobile web | CLI + WebUI | CLI + gateway |
| **Core Differentiation** | Breadth of channel/provider support, agent autonomy protocols | Multi-platform gateway resilience, session UX polish | Hook framework, Reborn integration, security audit | Schema-v3 modularity, OAuth/auth architecture | Cowork UX, artifacts rendering, voice input | Chinese IM ecosystem depth | Fast iteration, security hardening |
| **Key Architecture** | Monolithic Rust/TS, plugin extensions | Rust + Electron, modular adapters | Rust, WASM plugins, hook framework, Rust workspace crates | Rust, schema-v3 modular, WASM plugins, staged integrations | Electron + local LLM-first, ASR, artifacts | Tauri + browser tooling, IM-native channels | Go + React WebUI, JSONL sessions, sandbox filesystem | Rust, session rehydration, Docker/Podman sandbox |
| **Mobile Strategy** | WebChat (responsive) | Desktop Electron | Telegram/WeCom channels | Telegram, SMS channels | Desktop-first, limited mobile | Mobile web UI (in development) | WebUI | Mobile web UI (requested #1107) |
| **Maturity** | High (shipping, regression debt) | Medium-High (polish phase) | Medium (active Reborn migration) | Medium (pre-v0.8.0 integration sprint) | High (shipping desktop) | Medium (Yuanbao critical bugs) | Medium (nightly builds, rapid iteration) | Low-Medium (moderate but growing) |

---

## 6. Community Momentum & Maturity

### Tier 1: Maximum Velocity (Daily Shipping or Massive Integration Sprints)
- **OpenClaw** — 124 PRs merged/cycle, 500 PR volume, but burdened by regression triage. Needs emergency patch.
- **ZeroClaw** — Coordinated schema-v3 wave (30+ providers/channels). Pre-release sprint intensity.
- **IronClaw** — 22 PRs merged in a single batch (Reborn hook framework completion). Enterprise feature push.
- **CoPaw** — 15 PRs merged, but critical Yuanbao instability risks enterprise trust.

### Tier 2: Stable Iteration (Consistent Shipping, Focused Polish)
- **LobsterAI** — v2026.6.5 shipped with 13 PR batch, stale PR sweep executed. Clear release cadence.
- **PicoClaw** — 22/22 PR merge rate is exceptional. Nightly build cadence. Near-perfect contributor responsiveness.
- **Hermes Agent** — Consistent 6-PR merge days, focused on stability and UX polish. No release shipped.
- **Moltis** — Small but steady contributor velocity (penso, s-salamatov). 1 merged, 4 open.

### Tier 3: Low Activity / Maintenance Mode
- **NanoClaw** — Minimal but current maintenance (2 merged PRs). Stable but not growing.
- **NullClaw** — Near-zero activity. Single Evolink provider PR.
- **TinyClaw, ZeptoClaw** — No observable activity in this window. May be dormant or pre-launch.

---

## 7. Trend Signals

### Trend 1: The "Context Tax" Is the #1 Efficiency Battleground
Every project with scale is reporting token waste from bootstrap files, tool schemas, and oversized image payloads. **Context efficiency** has replaced model quality as the primary differentiator for agent usefulness. Projects that solve tiered/smart context loading (OpenClaw #22438, PicoClaw #2964) will win power-user loyalty.

### Trend 2: Desktop-First UX Is a Competitive Moat
LobsterAI and Hermes Agent demonstrate that **bundled desktop experiences** (Electron, Tauri) drive end-user adoption far more effectively than CLI + gateway configurations. OpenClaw's WebChat has regressions (#77012 transcript overwrite, #64810 reply swallowing). The ecosystem is learning that AI agents need **product-grade UX**, not just powerful backends.

### Trend 3: Provider Agnosticism Is Becoming Table Stakes
ZeroClaw's 7-provider batch, NullClaw's Evolink PR, OpenClaw's AWS plugin, and Hermes Agent's BytePlus request all confirm: **no project can survive supporting only 2-3 providers.** Users demand OpenAI-compatible abstraction layers with flexible auth (API keys, OAuth, subscription-native). Projects with pluggable auth architecture (ZeroClaw's #7141 OIDC, #7142 security provider) will win enterprise growth.

### Trend 4: Security Architecture Is Maturing from "Shell Approval" to "Consent Envelope"
The community is converging on a model where **every state-mutating operation** — not just shell exec, but MCP tool calls, file writes, message sends — flows through an approval layer (OpenClaw #78308, Hermes Agent #35357, ZeroClaw #7155). This mirrors the broader industry shift toward zero-trust agent execution. Projects that treat security as a plugin/add-on will face adoption barriers in regulated environments.

### Trend 5: Multi-Agent Workloads Are Hitting Reliability Walls
Users across OpenClaw, Hermes Agent, and IronClaw are running production multi-agent deployments and encountering tool injection failures, budget/cost governance errors, Session 丢失, and observability gaps. The next wave of competitive advantage will go to projects that provide **first-class multi-agent observability** (ZeroClaw #7233 OTel, Hermes Agent #40189 delegated_role) and **automatic failure isolation** rather than shared-state architectures.

### Trend 6: The "Letta/GptCoder Refugee" Market Is Active and Vocal
ZeroClaw issue #6969 explicitly identifies Letta migrants as a user persona with specific expectations (per-peer output routing, send_via control). This signals a **larger market shift**: users are evaluating and switching between agent platforms, and the ability to provide smooth migration paths and feature parity with competitors (Letta, Claude Code, OpenCode) is now a growth vector, not a niche concern.

### Trend 7: Kubernetes-Native and WASM Plugin Architectures Are the Emerging Standard
IronClaw's WASM plugin system, ZeroClaw's WASM plugin expansion (Shazam, Replicate runner), and Moltis's Docker/Podman sandbox work all point toward **sandboxed, portable, container-or-WASM-based plugin execution** as the architectural direction. This enables secure third-party extensibility — a prerequisite for ecosystem scaling beyond what any single project team can build.

---

*This digest covers 12 active projects as of 2026-06-06. Two projects (TinyClaw, ZeptoClaw) showed no observable activity. NanoBot summary generation failed and is excluded. Data sourced from GitHub API feeds for all listed repositories.*

**— OWL, ZOO Company**

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

⚠️ Summary generation failed.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent — Project Digest

**Date:** 2026-06-06 | **Source:** [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent)

---

## 1. Today's Overview

Hermes Agent remains in a highly active development posture, with 50 issues and 50 PRs updated in the last 24 hours — a sustained cadence consistent with a mid-cycle stabilization effort ahead of the next release (currently on v0.15.1, no new release shipped today). The activity is overwhelmingly front-loaded with **desktop/TUI UX bugs** (IME/CJK input, installer path conflicts, Rich markup crashes) and **component-level stability fixes** (WAL DB corruption, secret redaction overreach, max_tokens propagation gaps). No breaking changes or new releases were published; the project is in a fix-and-polish phase. Community contributions span a wide range of platforms (QQ Bot, WhatsApp, Telegram, Discord) and infrastructure areas, signaling a maturing multi-platform gateway surface.

---

## 2. Releases

**None.** The latest version remains **v0.15.1** (commit `66a66b9c`). No release notes or changelog entries for today.

---

## 3. Project Progress

### Merged / Closed Items (today)

| # | Type | Title | Link |
|---|------|-------|------|
| #40194 | 🐛 Fix | `fix(update)`: resolve real source root for editable/git installs | [PR #40194](https://github.com/NousResearch/hermes-agent/pull/40194) |
| #40197 | ✨ Feat | `feat`: show eligible/protected counts in archive-all confirmation dialog | [PR #40197](https://github.com/NousResearch/hermes-agent/pull/40197) |
| #40062 | ✨ Feat | `feat(desktop)`: add Simplified Chinese i18n | [PR #40062](https://github.com/NousResearch/hermes-agent/pull/40062) |
| #18726 | ✨ Feat | `feat`: use provider models config as whitelist in `/model` picker | [Issue](https://github.com/NousResearch/hermes-agent/issues/18726) |
| #13944 | 🐛 Fix | Bug: System prompt skill index truncates descriptions to 60 chars | [Issue](https://github.com/NousResearch/hermes-agent/issues/13944) |
| #40129 | 🐛 Fix | Bug: CLI resume crashes due to invalid Rich markup | [Issue](https://github.com/NousResearch/hermes-agent/issues/40129) |

**Key highlights:**
- **Simplified Chinese i18n lands on `main`** (#40062) — a meaningful internationalization milestone for the desktop app, though follow-up fixes for CJK IME input (#40145, #40200) are still in-flight.
- **`hermes update` self-update path fixed** (#40194) — resolves a regression where editable/git installs falsely reported "Not a git repository," blocking the update flow.
- **Session management gets UX polish** (#40197) — the archive-all confirmation dialog now shows how many sessions are eligible vs. protected before the user commits.

---

## 4. Community Hot Topics

Ranked by comment count, these are the issues attracting the most community engagement today:

### 🔥 #13944 — Skill index truncates descriptions to 60 chars
**[Issue](https://github.com/NousResearch/hermes-agent/issues/13944)** | 6 comments | comp/agent, tool/skills, P2

> The system prompt's skill index hard-truncates every skill description to 60 characters, stripping the trigger criteria the model needs for correct skill routing.

**Significance:** This is a **core agent quality issue**. If the LLM cannot see meaningful skill descriptions due to truncation, it will misroute or fail to invoke skills entirely — degrading the primary user-facing capability of the agent. The issue has been open since April 2026, suggesting it may require a non-trivial design change (pagination, dynamic injection, or description summarization rather than a simple length bump).

### 🔥 #31101 — QQ Bot silent reconnect loop after WebSocket failure
**[Issue](https://github.com/NousResearch/hermes-agent/issues/31101)** | 4 comments | comp/gateway, platform/qqbot, P2

> When `_get_gateway_url()` raises, the adapter enters an infinite silent loop and never retries. The QQ Bot stays permanently disconnected.

**Significance:** A **silent failure mode** with no recovery path. A fix PR (#40198) has been opened today, showing the community is actively working on this. This is representative of a broader class of gateway adapter resilience issues.

### 🔥 #40146 — Desktop IME: Send button doesn't switch from voice during CJK composition
**[Issue](https://github.com/NousResearch/hermes-agent/issues/40146)** | 3 comments | comp/tui, P3

> Korean/Chinese/Japanese input via IME doesn't toggle the voice→send button until text is committed.

**Significance:** Directly impacts all CJK-language desktop users. Fix PR #40200 targets this specific root cause (missing `compositionend` event handling in Electron).

### Notable mentions (3 comments):
- **#21563** — MCP approval tools are no-ops (bridge subprocess has no IPC to gateway approval state) — a **broken core MCP integration** that has been open since May 7 with no fix PR yet. [Issue](https://github.com/NousResearch/hermes-agent/issues/21563)

---

## 5. Bugs & Stability

Ranked by severity of impact:

### 🔴 Critical / P1-equivalent

| Issue | Description | Link |
|-------|-------------|------|
| #40201 | Post-compression final synthesis fabricates source-backed findings without re-grounding | [Issue](https://github.com/NousResearch/hermes-agent/issues/40201) |
| #35357 | Tirith approval gate bypassed by non-shell tools (`send_message`, `write_file`, MCP tools) | [Issue](https://github.com/NousResearch/hermes-agent/issues/35357) |

- **#40201** is new (opened today) and reveals a **hallucination-after-compression** scenario where the agent produces confident but fabricated findings. This is a safety/reliability issue for code review and research use cases.
- **#35357** is a **security gap**: human-in-the-loop approvals only cover shell commands, allowing file writes and messages to bypass the gate entirely.

### 🟠 High / P2

| Issue | Description | Fix PR? |
|-------|-------------|---------|
| #40178 | Desktop installer ignores existing `~/.hermes/`, creates fresh DB in LOCALAPPDATA | ❌ |
| #40139 | Secret redaction modifies actual command execution, not just display | ❌ |
| #31101 | QQ Bot permanent disconnect after reconnect failure | ✅ #40198 |
| #37589 | Desktop sessions miss configured MCP tools under macOS GUI PATH | ❌ |
| #40176 | Pinned Python deps carry known CVEs (urllib3, python-multipart, PyJWT, idna) | ✅ #40179 |
| #40137 | Terminal wrapper injects Windows paths when running in WSL | ❌ |

### 🟡 Medium / P3

| Issue | Description | Fix PR? |
|-------|-------------|---------|
| #40146 | CJK IME send button toggle broken | ✅ #40200 |
| #21563 | MCP approval tools are silent no-ops | ❌ |
| #39694 | Telegram Clarify prompt shows busy-session controls | ❌ |
| #40103 | Session titles retain ANSI escape body in DB | ❌ |
| #39860 | macOS desktop update fails (EAGAIN in npm ci postinstall) | ❌ |
| #40187 | `hermes update` / `hermes desktop` fails to compile Electron app on macOS | ❌ |
| #40145 | Desktop input truncation with Chinese IME | ❌ |

**Stability trend:** The WAL database corruption PR (#40177) addresses a **data-loss vector** when multiple processes write to `state.db` concurrently — this is an important reliability fix for anyone running gateway + CLI + cron jobs.

---

## 6. Feature Requests & Roadmap Signals

| # | Request | Signals | Likelihood |
|---|---------|---------|------------|
| #35573 | **ToolCallStormBreaker** — suppress repeated tool-call loops | addresses token waste and user frustration from model loops | Medium — well-defined problem, but requires careful tuning to avoid suppressing legitimate retries |
| #40195 | **ByteDance / BytePlus ModelArk provider** — OpenAI/Anthropic compatible API | new provider adapters are low-friction; follows the pattern of recent provider additions | Medium-High — small implementation surface, but needs maintainer approval |
| #40173 | **channel_profiles** — route Telegram chats to different Hermes profiles from one gateway | multi-tenant workflow demand; user currently must run multiple gateway instances | Medium — involves config schema changes |
| #40189 | **delegated_role field** — record which persona a subagent was spawned with | observability/debugging for delegate_task subagent chains | Medium — small DB schema addition |
| #40196 | **Session lineage tree viewer** in CLI/TUI | the data (`parent_session_id`) exists; this is purely a presentation layer addition | Medium-High — read-only, no backward compatibility risk |

**Prediction:** The highest likelihood candidates for the next minor release are **#40196** (lineage viewer) and **#40189** (delegated_role), as they build on existing stored data with low risk. **#35573** (ToolCallStormBreaker) is a strong candidate for a follow-up after initial design discussion.

---

## 7. User Feedback Summary

**Pain points surfaced today:**

1. **Desktop installer fragmentation (#40178):** Users upgrading from CLI to Desktop experience **silent data loss** — sessions, skills, and memories in `~/.hermes/` are invisible to the Desktop app which creates a separate `LOCALAPPDATA\hermes\` path. This is a first-run experience failure that likely generates support confusion.

2. **CJK input is a recurring theme:** Three separate issues (#40146, #40145, #40200) touch Chinese/Korean/Japanese input in the desktop app — IME composition, input truncation, and button toggling. This suggests the Electron/Chromium input event handling has not been tested with CJK IMEs systematically. The i18n PR (#40062) landing without these companion fixes indicates they were developed on divergent branches.

3. **Secret redaction overreach (#40139):** The redaction feature designed to mask secrets in display output is **operating on actual command strings**, breaking `sed`, `perl`, and `printf` usage. Users expect redaction to be a display-only concern — this is a fundamental design misalignment.

4. **Gateway adapter resilience:** QQ Bot (#31101) and WhatsApp (#40182) both have transport-level bugs (silent disconnect, invalid JID normalization). Multi-platform gateway users are experiencing platform-specific reliability gaps.

5. **Model configuration frustration:** Issues #40185, #40186, and #40175 all point to inconsistent `max_tokens` propagation across CLI, TUI, and gateway agent paths — three separate entrypoints with three different resolution behaviors.

**Satisfaction signals:** The Simplified Chinese i18n merge (#40062) and the archive-all dialog UX improvement (#40197) show the maintainers are responsive to internationalization and session management polish.

---

## 8. Backlog Watch

These important issues have been open without resolution or recent maintainer engagement:

| # | Age | Issue | Why It Matters |
|---|-----|-------|----------------|
| **#21563** | 30 days | MCP approval tools are no-ops — bridge has no IPC to gateway approval state | **Core MCP integration is broken.** Users relying on MCP approval workflows are silently bypassing them. No fix PR exists. [Issue](https://github.com/NousResearch/hermes-agent/issues/21563) |
| **#35357** | 7 days | Tirith approval gate doesn't cover non-shell tools | **Security boundary gap.** Non-shell tools (send_message, write_file, MCP tools) execute without human approval. Needs design decision on scope. [Issue](https://github.com/NousResearch/hermes-agent/issues/35357) |
| **#13944** | 45 days | Skill index truncates descriptions to 60 chars | **Core agent routing degradation.** Open since April with 6 comments but no fix. Likely requires architectural discussion on how skills are injected into the system prompt. [Issue](https://github.com/NousResearch/hermes-agent/issues/13944) |
| **#37589** | 4 days | Desktop sessions miss configured MCP tools (macOS GUI PATH) | **Environment inheritance bug.** Affects all macOS Desktop users with MCP servers. Needs investigation into PATH propagation from GUI-launched Electron processes. [Issue](https://github.com/NousResearch/hermes-agent/issues/37589) |

**Recommendation:** #21563 and #13944 are the highest-priority backlog items — the former is a **broken security feature**, and the latter is a **core agent quality regression** that has been open for over a month despite community discussion.

---

*Digest generated by OWL for 2026-06-06. Data sourced from GitHub API for NousResearch/hermes-agent.*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-06-06

---

## 1. Today's Overview

PicoClaw is in a **high-activity stabilization phase** ahead of its v0.2.9 cycle. Today saw an extraordinary **22 PRs merged or closed** alongside **6 issues updated and 1 new nightly release**, indicating the maintainers are aggressively clearing a backlog of accumulated fixes. The bulk of merged work targets **crash-consistency, security hardening, channel routing, and memory/performance** — all areas critical for production reliability. Two remain open (one skill audit task, one token-consumption bug), and two longer-lived PRs remain in draft limbo. Overall project health reads as **robust and well-maintained**, with responsive turnaround times averaging 1–15 days.

---

## 2. Releases

**Nightly Build: `v0.2.9-nightly.20260605.5224b9a4`**

This is the latest automated nightly build cut on 2026-06-05. It is an **automated, potentially unstable** build. The full changelog is cumulative from `v0.2.9` to `main` at the nightly commit `5224b9a4`. Key areas incorporated (inferred from merged PRs in this digest) include:

- JSONL session metadata crash-consistency fixes
- CSRF protection and path-traversal hardening for the web backend
- OneBot group-reply routing fixes
- Fallback-chain context deadline handling
- Provider logo fallbacks on the models page
- Dependency bumps (React 19.2.6, shadcn 4.8.0, tanstack stack, Anthropic SDK, go.mau.fi/util)
- MiMo provider CommonModels additions

No stable or tagged release today. Users should treat this nightly as **developer-preview quality**.

---

## 3. Project Progress

All 20 of the 22 updated PRs were merged/closed today. Grouped by theme:

### 🔒 Security Hardening
- **[PR #2900](https://github.com/sipeed/picoclaw/pull/2900)** — Added CSRF protection, path-traversal validation, and security headers to the web backend. Adds `filepath.Clean` + `isWithinDir` checks and symlink resolution for `handleDeleteSkill`. This is a significant security milestone.

### 🧠 Memory & Session Consistency
- **[PR #2907](https://github.com/sipeed/picoclaw/pull/2907)** — Fixed JSONL store metadata drift after crash (out-of-order `.jsonl` append vs `.meta.json` write).
- **[PR #2913](https://github.com/sipeed/picoclaw/pull/2913)** — Fixed `ResolveSessionKey` hot-path cloning: stops cloning the entire in-memory index on every cache hit and corrects TTL refresh semantics.

### 🔄 Provider & Channel Fixes
- **[PR #3009](https://github.com/sipeed/picoclaw/pull/3009)** — Fixed OneBot group replies using `send_private_msg` instead of `send_group_msg` by applying prefixed `chatID` with `group:` prefix. This directly resolved [Issue #3002](https://github.com/sipeed/picoclaw/issues/3002).
- **[PR #3010](https://github.com/sipeed/picoclaw/pull/3010)** — Added `ok` checks for type assertions in `toChannelHashes` to prevent panics from unexpected JSON-deserialized config values.
- **[PR #3011](https://github.com/sipeed/picoclaw/pull/3011)** — Added safe `ok`-checked type assertion for `sync.Map.LoadAndDelete` in `UnsubscribeEvents`.
- **[PR #2905](https://github.com/sipeed/picoclaw/pull/2905)** — Fixed fallback-chain context handling so expired request deadlines stop the chain immediately instead of pointlessly trying later candidates.
- **[PR #2908](https://github.com/sipeed/picoclaw/pull/2908)** — Restored provider logo fallbacks on the models configuration page after the backend-catalog metadata refactor.
- **[PR #2915](https://github.com/sipeed/picoclaw/pull/2915)** — Added `CommonModels` for MiMo provider (`mimo-v2.5` multimodal, `mimo-v2.5-pro` text-only) to help the WebUI recommend vision-capable models by default.

### 📝 Context & Diagnostics
- **[PR #2985](https://github.com/sipeed/picoclaw/pull/2985)** — The `/context` command now shows both **SummarizeAtTokens** (soft summarization trigger) and **CompressAtTokens** (hard budget threshold), resolving [Issue #2968](https://github.com/sipeed/picoclaw/issues/2968).

### 🛠 Docs & Skill Maintenance
- **[PR #3013](https://github.com/sipeed/picoclaw/pull/3013)** — Removed references to missing `init_skill.py` and `package_skill.py` from `skill-creator/SKILL.md`, replacing with Picoclaw-compatible manual steps. Addresses [Issue #652](https://github.com/sipeed/picoclaw/issues/652).

### 📦 Dependency Bumps
- **[PR #2927](https://github.com/sipeed/picoclaw/pull/2927)** — React & `@types/react`: 19.2.5 → 19.2.6
- **[PR #2926](https://github.com/sipeed/picoclaw/pull/2926)** — shadcn: 4.7.0 → 4.8.0
- **[PR #2925](https://github.com/sipeed/picoclaw/pull/2925)** — `@tanstack/react-router`: 1.169.2 → 1.170.6
- **[PR #2924](https://github.com/sipeed/picoclaw/pull/2924)** — `@tanstack/react-query`: 5.99.0 → 5.100.11
- **[PR #2922](https://github.com/sipeed/picoclaw/pull/2922)** — `@tabler/icons-react`: 3.43.0 → 3.44.0
- **[PR #2919](https://github.com/sipeed/picoclaw/pull/2919)** — `go.mau.fi/util`: 0.9.8 → 0.9.9
- **[PR #2962](https://github.com/sipeed/picoclaw/pull/2962)** — `anthropic-sdk-go`: 1.26.0 → 1.46.0 (significant version jump — worth watching for API breakage)

---

## 4. Community Hot Topics

### Most Discussed Issues

1. **[Issue #1042](https://github.com/sipeed/picoclaw/issues/1042)** — `[BUG] exec工具的guardCommand方法问题`
   - **15 comments, 👍 2** — The most commented issue in this dataset. A regex in `guardCommand` incorrectly blocks shell commands that contain URL-like strings (e.g., `curl wttr.in/Beijing?T`) by misinterpreting query paths as filesystem traversals (`../../../../Beijing?T`). Despite being closed today, the discussion is active and the fix is not yet merged — this may be closed as "stale" pending further investigation.
   - **Underlying need**: The exec tool needs a more sophisticated command-safety model that distinguishes path references from non-path arguments rather than applying blanket regex matching.

2. **[Issue #2968](https://github.com/sipeed/picoclaw/issues/2968)** — `/context always show Compress at: 76800 tokens`
   - **5 comments, 👍 1** — Users were confused that `/context` only showed the hard compression threshold, not the soft summarization trigger. **Now fixed** via [PR #2985](https://github.com/sipeed/picoclaw/pull/2985).

### Notable Open PRs

3. **[PR #2964](https://github.com/sipeed/picoclaw/pull/2964)** — `Feat/image input compression` (OPEN, created 2026-05-28)
   - Adds configurable inbound image compression for PicoClaw's vision pipeline with multi-level compression policies before building model payloads. This addresses over-transmission of large images and could reduce token costs significantly for vision-heavy workflows. **No comments yet — awaiting review.**

4. **[PR #2551](https://github.com/sipeed/picoclaw/pull/2551)** — `refactor: standardize channel identification` (OPEN, created 2026-04-16, stale-labeled)
   - A larger refactor to decouple channel names from channel types, allowing multiple instances of the same provider. Important for advanced multi-channel setups but appears stalled despite its breadth.

---

## 5. Bugs & Stability

Ranked by severity:

| # | Severity | Issue / PR | Status | Detail |
|---|----------|-----------|--------|--------|
| 1 | 🔴 **High** | [Issue #3012](https://github.com/sipeed/picoclaw/issues/3012) — Continuous token consumption when evolution is enabled | **OPEN, NEW** | Evolution in Draft mode with Code Path Trigger appears to burn tokens continuously every minute. This is a cost/reliability concern for any user with evolution enabled. **No fix PR yet.** |
| 2 | 🔴 **High** | [Issue #1042](https://github.com/sipeed/picoclaw/issues/1042) — `guardCommand` false-positive path blocking | **CLOSED** (stale) | Blocks legitimate tool commands (e.g., `curl` with query strings) due to naive path-matching regex. Still unresolved from a user perspective despite 15 comments. **No fix PR merged.** |
| 3 | 🟠 **Medium** | [Issue #3002](https://github.com/sipeed/picoclaw/issues/3002) — OneBot group reply routing | **CLOSED** — Fixed by [PR #3009](https://github.com/sipeed/picoclaw/pull/3009) | Group messages were replied to via private message API. Now resolved. |
| 4 | 🟠 **Medium** | [PR #3010](https://github.com/sipeed/picoclaw/pull/3010) — Panic in `toChannelHashes` | **MERGED** | Unchecked type assertions from JSON configs could cause runtime panics. Fixed. |
| 5 | 🟠 **Medium** | [PR #3011](https://github.com/sipeed/picoclaw/pull/3011) — Panic in `UnsubscribeEvents` | **MERGED** | Unchecked `sync.Map.LoadAndDelete` assertion fixed. |
| 6 | 🟡 **Low** | [Issue #2968](https://github.com/sipeed/picoclaw/issues/2968) — `/context` info display | **CLOSED** — Fixed by [PR #2985](https://github.com/sipeed/picoclaw/pull/2985) | UX clarity issue, now resolved. |
| 7 | 🟡 **Low** | [PR #2907](https://github.com/sipeed/picoclaw/pull/2907) — JSONL metadata drift after crash | **MERGED** | Edge case crash-consistency gap fixed. |

---

## 6. Feature Requests & Roadmap Signals

1. **Configurable Image Compression Pipeline** — [PR #2964](https://github.com/sipeed/picoclaw/pull/2964) (open, awaiting review)
   - Multi-level compression policies for inbound vision images to prevent oversized payloads and reduce token costs. This aligns with the broader trend of multimodal support and is a strong candidate for the next minor release (v0.2.10 or v0.3.0).

2. **Channel Instance Decoupling** — [PR #2551](https://github.com/sipeed/picoclaw/pull/2551) (open, stale)
   - Allow multiple instances of the same channel provider. Important for power users running, e.g., multiple Telegram bots or Web channels. Appears stalled — needs maintainer re-engagement or contributor revision.

3. **MiMo Provider Multimodal Support** — [PR #2915](https://github.com/sipeed/picoclaw/pull/2915) (merged today)
   - Adds `CommonModels` so the WebUI can recommend vision-capable MiMo models by default. Expect this reflected in WebUI model selection behavior soon.

4. **Evolution/Verbose Auto-Improvement Controls** — [Issue #3012](https://github.com/sipeed/picoclaw/issues/3012) signals that users need better **token spending guardrails** for the evolution feature, possibly including configurable rate limits, budget caps, or explicit confirmation modes.

5. **Skill System Audit** — [Issue #652](https://github.com/sipeed/picoclaw/issues/652) asks for a broader audit of `workspace/skills/` health beyond just `skill-creator`. Given PR #3013 fixed only the `skill-creator` references, a broader audit may follow.

**Predicted for next release (v0.2.10):** Image compression, context display improvements, MiMo provider models, and the accumulated security fixes are all strong candidates.

---

## 7. User Feedback Summary

**Pain Points:**
- **Exec tool false-positives** are a recurring frustration — users want the guardrail to understand command semantics, not just regex-match paths. This has been discussed for 3+ months ([Issue #1042](https://github.com/sipeed/picoclaw/issues/1042), created 2026-03-04).
- **Token spend is opaque or runaway** — both the `/context` display confusion ([Issue #2968](https://github.com/sipeed/picoclaw/issues/2968)) and the evolution token leak ([Issue #3012](https://github.com/sipeed/picoclaw/issues/3012)) point to users wanting better visibility and control over token budgets.
- **Channel ecosystem roughness** — OneBot group routing, CSRF gaps, and provider selection UX all indicate users are deploying PicoClaw in real-world, multi-channel production environments and hitting integration friction.

**Satisfaction Signals:**
- Users on FreeBSD ([Issue #2968](https://github.com/sipeed/picoclaw/issues/2968), creator of [Issue #3012](https://github.com/sipeed/picoclaw/issues/3012)) are actively monitoring and reporting — suggesting the platform's cross-platform support is valued and in active use.
- Turnaround on the `/context` display fix was ~3 days (issue → merged PR), which is a positive responsiveness signal.

**Key Use Cases Observed:**
- Vision/multimodal workflows (prompting image compression feature)
- Multi-channel deployments (OneBot, Web, NapCat integration)
- Self-improving agent configurations (evolution/Daily mode)
- Cross-platform deployment (FreeBSD, implied Linux, WebUI management)

---

## 8. Backlog Watch

The following items have been open for extended periods and need maintainer attention:

1. **[Issue #1042](https://github.com/sipeed/picoclaw/issues/1042)** — `exec` tool `guardCommand` false positives
   - **Open since:** 2026-03-04 (~3 months) | **15 comments, 👍 2** | **CLOSED as stale**
   - This was closed but the underlying problem is not solved. With 15 comments and ongoing user pain, this should either be reopened with a clear fix assignment or formally tracked as a known limitation. The naive regex approach needs a whitelist or argument-aware parser.

2. **[PR #2551](https://github.com/sipeed/picoclaw/pull/2551)** — Channel identification refactor
   - **Open since:** 2026-04-16 (~7 weeks) | **Stale-labeled**
   - A substantial refactor touching channel dispatch, message bus, and agent logic. Either needs a maintainer review/merge decision or a request for the author to rebase and address feedback. The feature (multiple instances of the same provider) is genuinely needed by the community.

3. **[PR #2964](https://github.com/sipeed/picoclaw/pull/2964)** — Image input compression
   - **Open since:** 2026-05-28 (~1 week) | **No comments yet**
   - Functionally important for vision workloads. While still young, it would benefit from an early review signal (even "approved for CI testing") to keep the contributor engaged.

4. **[Issue #3012](https://github.com/sipeed/picoclaw/issues/3012)** — Evolution token consumption
   - **Open since:** 2026-06-05 (brand new) | **1 comment**
   - High-priority bug (cost/reliability). Needs rapid triage — if confirmed, this should be a blocker-level fix.

5. **[Issue #652](https://github.com/sipeed/picoclaw/issues/652)** — `skill-creator` audit
   - **Open since:** 2026-02-22 (~3.5 months) | **Partially addressed** by PR #3013
   - The broader workspace skills audit (beyond just `skill-creator`) remains incomplete. Could be scoped down to a checklist issue.

---

*Generated by OWL — 2026-06-06. All links reference [github.com/sipeed/picoclaw](https://github.com/sipeed/picoclaw).*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

**NanoClaw Project Digest — 2026-06-06**  
*Source: [github.com/qwibitai/nanoclaw](https://github.com/qwibitai/nanoclaw)*  

---

### 1. **Today’s Overview**  
NanoClaw shows stable maintenance activity with no new issues and zero backlog churn in the past 24 hours. Development focus remains on reliability and UX refinements, evidenced by three pull requests—two merged and one open—all addressing edge cases in error handling and authentication flows. The project exhibits healthy triage practices, with contributors actively closing PRs that clarify documentation or fix configuration gaps. No releases were published, indicating a refinement phase between feature cycles.

---

### 2. **Releases**  
None in the last 24 hours.  

---

### 3. **Project Progress**  
- **PR #2691 (Merged)**: Improves Hugging Face (HF) token onboarding by dynamically displaying the correct OneCLI setup URL based on gateway context, eliminating hardcoded assumptions and reducing user confusion during initial configuration.  
- **PR #2690 (Merged)**: Corrects documentation around OneCLI’s secret mode behavior (`all` vs. `selective`) and removes redundant setup steps for auto-created agents, streamlining vault-integrated workflows.  
- **PR #2692 (Open)**: Proposes enhanced resilience in poll-loop logic by retrying transient HTTP 5xx errors (e.g., `529 Overloaded`) reported as terminal results by the Claude Agent SDK, with user notification upon exhaustion. This addresses a known gap in error recovery semantics.

---

### 4. **Community Hot Topics**  
No issues or PRs received comments or reactions (>0 👍/💬) in the last 24h. All activity consists of self-contained contributor PRs, suggesting low community friction but also limited external engagement on recent changes. The open PR #2692 touches on a systemic reliability concern (API error handling) that may gain visibility if adopted.

---

### 5. **Bugs & Stability**  
- **High Severity (Open)**: PR #2692 highlights a stability gap where transient API failures are silently treated as final errors. While not yet merged, this fix would improve agent resilience under load—critical for production deployments.  
- **Resolved**: PRs #2690 and #2691 fixed misconfigurations and misleading setup instructions that could cause auth failures or secret injection issues, indirectly preventing runtime bugs.  

No crash reports or regressions reported today.

---

### 6. **Feature Requests & Roadmap Signals**  
Implicit signals point toward stronger **error observability** and **self-healing behavior** as priorities. The open poll-loop retry logic (PR #2692) suggests roadmap emphasis on graceful degradation during provider outages. No explicit feature requests were filed, but the repeated focus on HF token flow hints at ongoing investment in multi-provider auth abstraction.

---

### 7. **User Feedback Summary**  
- **Pain Points**: Users previously struggled with opaque OneCLI setup URLs and incorrect assumptions about default secret injection modes—now addressed via merged PRs.  
- **Satisfaction Indicators**: Contributors are proactively fixing documentation and UX misalignments, implying responsive maintenance. However, the lack of community interaction on recent PRs may indicate either smooth adoption or low user visibility into changelogs.  
- **Use Cases Highlighted**: Vault-integrated, auto-provisioned agents using Hugging Face as a backend provider appear to be a common deployment pattern.

---

### 8. **Backlog Watch**  
No long-unanswered issues or PRs require immediate attention today. All recent activity is current (2026-06-05). Maintainers should monitor PR #2692 for merge readiness, as it addresses a non-trivial reliability edge case with broad implications.

---  
*Data reflects GitHub activity as of 2026-06-06 00:00 UTC.*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest — 2026-06-06

---

## 1. Today's Overview

NullClaw saw minimal activity over the past 24 hours. No issues were opened or closed, and no new releases were published. A single pull request (#947) was submitted, adding Evolink as a new OpenAI-compatible provider. The project appears to be in a quiet maintenance phase with no urgent bugs or community escalations surfacing today. Overall health remains stable, though the low activity volume suggests a lull in both contributor engagement and user-reported issues.

---

## 2. Releases

No new releases were published in the last 24 hours. The latest release information is not available in the current data window.

---

## 3. Project Progress

No PRs were merged or closed today. The sole open PR is:

- **[#947 — feat(providers): add Evolink as an OpenAI-compatible provider](https://github.com/nullclaw/nullclaw/pull/947)** — Submitted by EvoLinkAI, this PR integrates Evolink (evolink.ai) as a first-class provider. Evolink is a multi-model gateway exposing GPT-5, Gemini, DeepSeek, Doubao, MiniMax, and others behind a single OpenAI-compatible `/v1/chat/completions` endpoint with Bearer-token authentication. If merged, this would expand NullClaw's provider ecosystem, giving users access to a broader range of frontier models through a unified interface.

---

## 4. Community Hot Topics

No issues or PRs with significant comment volume or reactions were recorded today. PR #947 has 0 reactions and no comments as of this digest, indicating it has not yet garnered community discussion. The absence of active debates or highly-engaged threads suggests the community is currently in a low-activity period.

---

## 5. Bugs & Stability

No bugs, crashes, or regressions were reported in the last 24 hours. The zero-issue count indicates a stable period with no known open defects requiring immediate attention.

---

## 6. Feature Requests & Roadmap Signals

The primary signal from today's activity is the Evolink provider integration (PR #947). This reflects an ongoing trend of expanding OpenAI-compatible provider support, which has been a consistent theme in NullClaw's development. Based on this pattern, future versions may continue to onboard additional multi-model gateways and regional providers. No explicit user-submitted feature requests were logged today.

---

## 7. User Feedback Summary

No new user feedback, pain points, or use-case reports were submitted in the last 24 hours. The silence on the issues front suggests either high satisfaction with the current feature set or reduced user engagement during this period.

---

## 8. Backlog Watch

With zero open issues and only one open PR (#947) — which is brand new and not yet stale — there are no long-unanswered items requiring maintainer attention at this time. The backlog is effectively clear, and the sole pending PR is a straightforward provider addition that should be reviewable without significant complexity.

---

*Generated by OWL · Data as of 2026-06-06 · Source: [github.com/nullclaw/nullclaw](https://github.com/nullclaw/nullclaw)*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-06-06

**Project:** [nearai/ironclaw](https://github.com/nearai/ironclaw)

---

## 1. Today's Overview

IronClaw is in a period of intense infrastructure development on the `reborn-integration` branch, with 50 PRs updated (28 open, 22 merged/closed) and 13 issues touched in the last 24 hours. No new releases shipped today. The dominant theme is the multi-wave production rollout of the **Reborn hook framework** and **ProductWorkItem workflow refactoring**, both acquired/closed en masse today — suggesting a large integration branch finally lande. WeCom channel stabilization (v0.29.1 → upcoming v0.29.2) remains an active secondary front, with multiple related bugs filed and some already closed.

---

## 2. Releases

No new releases today. The latest remains **v0.29.1** on the `ironclaw` crate.

---

## 3. Project Progress — Merged/Closed PRs Today

A large batch of 22 PRs was closed/merged today, heavily concentrated on the Reborn hook framework and Reborn product-workflow modernization:

| PR | Author | Size | Description |
|---|---|---|---|
| [#3951](https://github.com/nearai/ironclaw/pull/3951) | zmanian | XL | Third-party extension hook activation via hook-only projection (`HOOKS_THIRD_PARTY_ENABLED`, default OFF) |
| [#3938](https://github.com/nearai/ironclaw/pull/3938) | zmanian | XL | Activate hook framework in production behind `HOOKS_ENABLED` flag (dark-launch, default OFF) |
| [#3937](https://github.com/nearai/ironclaw/pull/3937) | zmanian | XL | Cross-backend adversarial parity suite — durable predicate backend PR 4/4 |
| [#3936](https://github.com/nearai/ironclaw/pull/3936) | zmanian | XL | `LibSqlPredicateStateBackend` — durable backend PR 3/4 |
| [#3933](https://github.com/nearai/ironclaw/pull/3933) | zmanian | XL | `PostgresPredicateStateBackend` — durable backend PR 2/4 |
| [#3931](https://github.com/nearai/ironclaw/pull/3931) | zmanian | XL | Fix 3 security bugs: cross-tenant leakage + replay + provider spoofing in event-triggered hooks |
| [#3928](https://github.com/nearai/ironclaw/pull/3928) | zmanian | M | Snapshot test for `arguments_digest` through `invoke_capability` boundary |
| [#3922](https://github.com/nearai/ironclaw/pull/3922) | zmanian | XL | Wire `SecurityAuditSink` into obligation handler + hook deny paths |
| [#3941](https://github.com/nearai/ironclaw/pull/3941) | zmanian | XS | Fix follow-ups for dead API, vacuous test, under-exposed const in `ironclaw_memory` |
| [#2904](https://github.com/nearai/ironclaw/pull/2904) | elliotBraem | XL | Refactor 11 WASM HTTP-proxy tools → 10 skill-based HTTP declarations |
| [#2550](https://github.com/nearai/ironclaw/pull/2550) | elliotBraem | XS | Initialize skill-adding workflow + "investigate" example skill |

**Summary:** The Reborn hook framework has effectively completed its multi-PR rollout — production activation, third-party extension containment, durable backends (Postgres + libSQL + in-memory parity), and all identified security bugs. This is the single largest feature block to land in IronClaw in this reporting period.

---

## 4. Community Hot Topics

**Most commented issues (by engagement):**

- **[#4311](https://github.com/nearai/ironclaw/issues/4311)** — "Reborn model gateway collapses budget governance failures into context-overflow recovery" (2 comments, opened 2026-06-01)
  - **Underlying need:** Error semantics correctness. Budget-governance failures are being misclassified as `ContextOverflow`, which could cause the agent loop to take incorrect recovery actions (e.g., truncating context instead of surfacing budget errors). This is a correctness-critical issue in the M3 agent-loop turn lifecycle.

- **[#4488](https://github.com/nearai/ironclaw/issues/4488)** — "Split ProductWorkflow into explicit submit/read/subscribe doors" (2 comments, opened 2026-06-05)
  - Already has a linked PR [#4506](https://github.com/nearai/ironclaw/pull/4506) from the same author (danielwpz), indicating tight issue→PR turnaround. This implements the effect-boundary split required for OpenAI-compatible API wiring (#3280 parent).

- **[#4502](https://github.com/nearai/ironclaw/issues/4502)** — "WeCom group chat approval reply does not work" (1 comment)
  - A freshly-reopened production blocker: tool approval via text reply (`y`/`yes`/`always`) silently fails in WeCom group chats. This directly impacts developer/operator productivity when interacting with agents through WeCom.

**Most active PR by design complexity:**

- **[#4506](https://github.com/nearai/ironclaw/pull/4506)** (danielwpz, XL) and **[#4479](https://github.com/nearai/ironclaw/pull/4479)** (serrrfirat, XL) — ProductWorkflow door split and IronHub install-flow port, respectively, represent the two largest concurrent feature efforts on the open PR queue.

---

## 5. Bugs & Stability

**Ranked by severity:**

| Severity | Issue | Description | Fix Available? |
|---|---|---|---|
| 🔴 High | [#4502](https://github.com/nearai/ironclaw/issues/4502) | WeCom group-chat tool approval reply fails silently | No PR linked |
| 🔴 High | [#4500](https://github.com/nearai/ironclaw/issues/4500) | Channel onboarding system event written to wrong conversation (affects WeCom + Telegram) | No PR linked |
| 🟡 Medium | [#4311](https://github.com/nearai/ironclaw/issues/4311) | Budget governance misclassified as context overflow — wrong recovery path in agent loop | No PR linked; likely needs deep M3 agent-loop change |
| 🟡 Medium | [#4512](https://github.com/nearai/ironclaw/issues/4512) | `job_semaphore` defined but never acquired — potential sandbox concurrency issue | No PR linked |
| 🟢 Low | [#4505](https://github.com/nearai/ironclaw/issues/4505) | WeCom group conversation titles not distinguishable in Web UI sidebar | No PR linked |

**Note:** All 3 closed issues today ([#3934](https://github.com/nearai/ironclaw/issues/3934), [#4194](https://github.com/nearai/ironclaw/issues/4194), [#4198](https://github.com/nearai/ironclaw/issues/4198)) were pre-existing sub-issues related to the Reborn hook framework and WeCom pairing that are now resolved.

---

## 6. Feature Requests & Roadmap Signals

Based on open issues and PRs, the following features are actively progressing toward the next release:

1. **Reborn ProductWorkflow door split** ([#4506](https://github.com/nearai/ironclaw/pull/4506) + [#4483](https://github.com/nearai/ironclaw/pull/4483)) — Separating submit/read/subscribe boundaries is a prerequisite for OpenAI-compatible API passthrough (#3280). This is in active PR review and likely next-release material.

2. **Slack AI streaming integration** ([#4491](https://github.com/nearai/ironclaw/issues/4491)) — Moving beyond the stopgap "Ironclaw is thinking..." delete pattern to proper streaming replies. Opened today; linked to existing host work by serrrfirat.

3. **IronHub install flow port to Reborn** ([#4479](https://github.com/nearai/ironclaw/pull/4479)) — Full signed catalog + artifact verification + skill/tool install pipeline. XL effort; on reborn-integration branch.

4. **Outbound delivery preference facade** ([#4511](https://github.com/nearai/ironclaw/pull/4511)) — Phase 1 contracts for outbound delivery preferences, recently opened by henrypark133.

5. **Slack channel route admin UI wiring** ([#4510](https://github.com/nearai/ironclaw/pull/4510)) — Admin CRUD for Slack channel assignments via WebUI.

**Prediction:** The next release (likely v0.30.0 or v0.30.0-rc1) will include the ProductWorkflow door split and associated OpenAI API wiring improvements, plus accumulated WeCom bug fixes for group chat approval and onboarding events.

---

## 7. User Feedback Summary

**Pain points voiced today/still open:**

- **WeCom reliability in group contexts**: Multiple independent reports ([#4502](https://github.com/nearai/ironclaw/issues/4502), [#4500](https://github.com/nearai/ironclaw/issues/4500), [#4505](https://github.com/nearai/ironclaw/issues/4505)) indicate that WeCom — while the core text flow is solid per the v0.29.0 validation pass ([#4191](https://github.com/nearai/ironclaw/issues/4191)) — still has edge-case failures in group chat: approval flows, system events, and UI distinguishability. These are blocking professional deployment in enterprise WeCom environments.

- **Budget governance transparency** ([#4311](https://github.com/nearai/ironclaw/issues/4311)): Users need clear error semantics when budget limits are hit, not conflated context-overflow recovery. This affects cost predictability and debugging.

- **Sandbox concurrency correctness** ([#4512](https://github.com/nearai/ironclaw/issues/4512)): An unused semaphore in `tenant.rs` suggests a latent bug in concurrent job isolation — could surface under load.

**Satisfaction signals:** The community is shipping high-quality work rapidly (22 PRs closed today), and there's strong follow-through from core maintainers (zmanian landed 8 XL PRs in a single batch). New contributors (serrrfirat, henrypark133, danielwpz) are driving feature area expansion into new surfaces (Slack, IronHub, ProductWorkflow).

---

## 8. Backlog Watch

| Item | Age | Why It Needs Attention |
|---|---|---|
| **[#4311](https://github.com/nearai/ironclaw/issues/4311)** — Budget governance misclassified | 5 days old, no assignee, no linked PR | Classified as `scope: agent, scope: llm` — this is a class-of-incorrectness bug in the core agent loop. Needs triage and owner assignment beyond surface-level fix. |
| **[#4191](https://github.com/nearai/ironclaw/issues/4191)** — WeCom v0.29.0 staging validation findings | 9 days old, contains action items marked ⚠️ | Contains specific follow-up items from a systematic QA pass that don't all appear to have spawned child issues yet. Risk of items falling through cracks. |
| **[#4108](https://github.com/nearai/ironclaw/issues/4108)** — Nightly E2E failure | 10 days old, no human response | Automated issue with no maintainer acknowledgment for 10 days. Suggests either alert fatigue or the failures are non-blocking — but this should be explicitly triaged to confirm. |
| **[#3708](https://github.com/nearai/ironclaw/pull/3708)** — Release PR (contains API breaking changes to `ironclaw_common` 0.5.0 and `ironclaw_skills` 0.4.0) | 21 days old, still open | An open release PR for over 3 weeks with breaking changes suggests a blocked release cadence. Consumers depending on pre-0.5.0 `ironclaw_common` need a clear communication plan. |

---

*IronClaw is a high-velocity project in active Reborn migration. Today's digest reflects a convergence of infrastructure completion (hooks framework) with emerging channel reliability work (WeCom) and next-generation feature development (ProductWorkflow, IronHub, Slack). Maintainership attention should be directed at the un-triaged production bugs in WeCom group chat and the misclassified budget-governance error path.*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-06-06

---

## 1. Today's Overview

LobsterAI shipped a **new release (2026.6.5)** on the back of an intensely active day: **13 pull requests were merged** and no new issues were opened, indicating the team is in a strong shipping cadence focused on polish, security, and UX refinement. The project is clearly in a **late-iteration stabilization phase** — most changes are incremental improvements to cowork, artifacts, voice input, and security hardening rather than large new feature bets. All three open carry-over issues have been stale since April and remain unaddressed, suggesting the team is prioritizing release velocity over bug backlog triage.

---

## 2. Releases

**LobsterAI 2026.6.5** (released 2026-06-05)

| Category | Highlights |
|---|---|
| **Cowork** | Improved channel session sync & cleanup (PR [#2108](https://github.com/netease-youdao/LobsterAI/pull/2108)); keyboard shortcuts overhauled with expanded actions and better UX (PR [#2108](https://github.com/netease-youdao/LobsterAI/pull/2108)); clipboard copy & submission UX improved with graceful fallback chain across platforms (PR [#2118](https://github.com/netease-youdao/LobsterAI/pull/2118)) |
| **Voice Input (ASR)** | Authenticated ASR input for cowork with feedback improvements and modular voice split (PR [#2119](https://github.com/netease-youdao/LobsterAI/pull/2119)); macOS microphone permission & entitlement fixes (PR [#2113](https://github.com/netease-youdao/LobsterAI/pull/2113)) |
| **Artifacts** | Enhanced file preview & expand panel — Office zoom, preview/source toggle, PDF/PPT/Excel rendering fixes (PR [#2114](https://github.com/netease-youdao/LobsterAI/pull/2114)) |
| **Security** | API proxy logs no longer leak credentials or full response bodies (PR [#1534](https://github.com/netease-youdao/LobsterAI/pull/1534)); renderer KV-store IPC restricted to allowlisted keys to prevent unauthorized access to auth tokens (PR [#1535](https://github.com/netease-youdao/LobsterAI/pull/1535)) |
| **UX / Misc** | Theme color picker replaced with compact circle selector (PR [#1531](https://github.com/netease-youdao/LobsterAI/pull/1531)); local session usage stats panel in settings (PR [#1533](https://github.com/netease-youdao/LobsterAI/pull/1533)); config migration now preserves user-deleted provider models (PR [#2117](https://github.com/netease-youdao/LobsterAI/pull/2117)); subscribe/prompt flows surfaced for locked model plans (PR [#2112](https://github.com/netease-youdao/LobsterAI/pull/2112)); MCP JSON import with Streamable HTTP config normalization (PR [#367](https://github.com/netease-youdao/LobsterAI/pull/367)) |

No breaking changes detected. Standard upgrade path applies.

---

## 3. Project Progress

Thirteen PRs merged in the 24h window (all had been open since April; the merge activity was a coordinated batch):

- **Cowork core polish** dominates: session sync/cleanup (#2108), clipboard reliability (#2118), error UX with quota-exhausted handling and deduplication (#2116), IM reply assembly fixed to current-turn only (#2115).
- **Voice input maturation**: modular ASR split (#2119), macOS mic permissions (#2113) — the team is clearly investing in first-class voice interaction.
- **Security hardening** (two PRs from @kayo5994 closing stale security gaps): log sanitization and IPC key allowlisting. These address real attack-surface concerns, particularly around renderer process compromise.
- **Artifacts rendering**: broad file preview improvements (#2114) — PPT, PDF, Word, Excel edge cases handled.
- **Provider management**: config migration bug fix (#2117) ensures user-deleted providers aren't re-injected on restart — a common UX annoyance in similar apps.
- **MCP import** (#367) normalizes external Streamable HTTP configs into LobsterAI's internal format, resolving [#351].

> 📌 **Pattern**: Most merged work had been sitting as stale PRs for ~2 months. This looks like a deliberate "stale PR sweep" to reduce open PR count and ship accumulated improvements in the 2026.6.5 release.

---

## 4. Community Hot Topics

| Issue | Activity Signal | Underlying Need |
|---|---|---|
| **#1487** — Python script execution broken in sessions (locale: Chinese) | 2 comments, last active 2026-06-05 | Users running local models (tested with 30B) cannot execute Python via skills — works in Claude Code CLI but not LobsterAI. This points to a **tool/sandbox execution path bug** affecting power users with local model setups. |
| **#1471** — Input draft lost on session/view switch | 1 comment, last active 2026-06-05 | Debounce-based persistence (300ms) doesn't flush on component unmount. **Data-loss UX bug** — especially painful for long-form prompt writers. |
| **#1472** — Editing history message silently overwrites unsent input | 1 comment, last active 2026-06-05 | No confirmation dialog when "re-edit" action replaces current draft. Another **data-loss UX bug** from the same reporter around the same time. |

> **Analysis**: All three open issues are data-loss or execution-failure bugs in the cowork flow — the product's core interaction surface. None have maintainer responses or linked PRs. The fact that issues #1471 and #1472 come from the same user suggests they were doing systematic QA and found a cluster of input-handling edge cases.

---

## 5. Bugs & Stability

Severity ranking of active issues:

| Severity | Issue | Description | Fix PR? |
|---|---|---|---|
| 🔴 High | [#1487](https://github.com/netease-youdao/LobsterAI/issues/1487) — Python script execution fails | Skills-based Python execution doesn't work with local models; same skills work in Claude Code CLI. Suggests sandbox or tool-call routing issue. Affects power users on local deployments. | ❌ None |
| 🟡 Medium | [#1471](https://github.com/netease-youdao/LobsterAI/issues/1471) — Draft loss on navigation | 300ms debounce not flushed on unmount. Data loss but recoverable (user retypes). | ❌ None |
| 🟡 Medium | [#1472](https://github.com/netease-youdao/LobsterAI/issues/1472) — Unsent input overwritten by re-edit | Silent overwrite with no confirmation. Data loss without warning. | ❌ None |

All three issues were last updated 2026-06-05 (likely an automated stale-bot re-tag) but have been open since early April. No fix PRs found.

---

## 6. Feature Requests & Roadmap Signals

No new feature requests were opened in the last 24 hours. Based on the current trajectory, the following areas are likely candidates for the next release:

- **Voice input depth**: With ASR modularization and macOS permission work landing, expect push-to-talk UX polish or multi-language ASR support.
- **Artifacts expansion**: File preview improvements are incremental; a full artifact editor or live collaboration is plausible next.
- **Model/provider management**: The config migration fix (#2117) and locked-model subscription prompts (#2112) suggest the team is building toward a more sophisticated multi-provider/pro-plan model selection UX.
- **MCP ecosystem**: The MCP import fix (#367) normalizes external configs — deeper MCP integrations (marketplace, server discovery) could follow.

---

## 7. User Feedback Summary

| Sentiment | Topic | Details |
|---|---|---|
| 😐 Frustration | Input/data loss (#1471, #1472) | Users report losing typed content during normal workflows — switching sessions or editing history. This erodes trust in the product for long-form interactions. |
| 😠 Functional breakage | Python/skills execution (#1487) | A local-model user reports skills that work elsewhere fail in LobsterAI. This is a "it just doesn't work" category of complaint that power users will churn over if unaddressed. |
| ✅ Positive (implied) | Release cadence | 13 well-scoped PRs with security hardening, UX polish, and new capabilities shipped in a single release — active users likely appreciate the breadth of improvements. |

---

## 8. Backlog Watch

These stale-but-important items need maintainer attention:

| Item | Age | Why It Matters |
|---|---|---|
| **[#1487](https://github.com/netease-youdao/LobsterAI/issues/1487)** — Python execution fails with local models | 62 days | Affects the high-value local-model user segment. No maintainer response. Likely a workspace execution or tool-call routing bug that needs reproduction. |
| **[#1471](https://github.com/netease-youdao/LobsterAI/issues/1471)** — Draft not persisted on unmount | 63 days | Classic component lifecycle bug with a straightforward fix (flush debounce on unmount). Low effort, high user impact. Came with clear reproduction steps. |
| **[#1472](https://github.com/netease-youdao/LobsterAI/issues/1472)** — Edit-history overwrites unsent draft | 63 days | Same reporter as #1471; same root cause area (cowork prompt input). A confirmation dialog or dirty-state check is a standard pattern. |

> **Recommendation**: PRs #1471 and #1472 are low-effort, high-impact wins. A single contributor familiar with the `CoworkPromptInput` component could likely fix both in one session. Issue #1487 may need deeper investigation into the tool execution pipeline for local models.

---

*Data sourced from github.com/netease-youdao/LobsterAI. Digest generated 2026-06-06.*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-06-06

---

## 1. Today's Overview

Moltis saw moderate activity over the past 24 hours with **4 issues** and **5 pull requests** updated. One significant bug fix for Telegram streaming delivery was merged, and two sandbox-related PRs were opened addressing Docker and Podman compatibility gaps. The project shows healthy contributor velocity — particularly from contributors `penso` and `s-salamatov` — with incremental fixes spanning delivery infrastructure, sandbox tooling, and provider model management. No new releases were published today; work appears to be accumulating toward an upcoming release.

---

## 2. Releases

**No new releases** were published in the last 24 hours.

---

## 3. Project Progress

### Merged / Closed Items (Updated Today)

| # | Item | Summary |
|---|------|---------|
| [Issue #1097](https://github.com/moltis-org/moltis/issues/1097) | **[CLOSED]** [Bug] Telegram edit-in-place streaming mixes intermediate output into final reply | Bug report filed and resolved. |
| [PR #1099](https://github.com/moltis-org/moltis/pull/1099) | **[CLOSED]** Separate Telegram progress stream from final replies | Fixes #1097. Treats Telegram streaming as temporary progress messages (edited in place, then deleted on completion), ensuring a clean final-answer delivery. Also keeps the manual `/cancel` escape hatch. |

### Open / In-Progress Pull Requests (Updated Today)

| # | PR | Summary |
|---|-----|---------|
| [PR #1089](https://github.com/moltis-org/moltis/pull/1089) | Cap persisted tool results before rehydration | Caps `tool` and `tool_result` content when session history is rehydrated into provider-bound `ChatMessage`s. Applies across chat, streaming, compaction, and inspection paths. |
| [PR #1104](https://github.com/moltis-org/moltis/pull/1104) | Allow replacing preferred provider models | Fixes the preferred-model dialog to correctly replace (not append to) saved preferences, including clearing all preferences with an empty selection. Includes backend and Playwright regression tests. |
| [PR #1105](https.com/github.com/moltis-org/moltis/pull/1105) | Fix Docker sandbox filesystem tool fallback | Adds regression coverage for sandboxed Read/Write/Edit/MultiEdit on `/home/sandbox` and workspace paths; falls back from host-path translation to container copy when the gateway can't access host mounts. Also improves empty-copy failure diagnostics. |
| [PR #1106](https://github.com/moltis-org/moltis/pull/1106) | Support Podman escape hatches | Adds opt-in Podman sandbox escape hatches for host socket passthrough and privileged nested Podman; improves rootless Podman failure diagnostics; makes the deploy systemd unit rootless-Podman-compatible. |

### Progress Assessment
The project is cycling through **quality-of-life and infrastructure hardening**: fixing delivery guarantees in the Telegram channel, shoring up sandbox filesystem reliability across Docker and Podman, and tightening provider preference management. The merged Telegram fix (PR #1099) is the most user-visible change.

---

## 4. Community Hot Topics

No items today have comments or reactions (all at **0** 👍 and **undefined–1** comments), suggesting the community is filing issues but discussion is still forming. The most technically substantive open item is:

- **[Issue #1107](https://github.com/moltis-org/moltis/issues/1107)** — Multiline text input in the mobile web UI: Signals that power users want richer mobile composing, aligning with a general push in the issue tracker to improve UI parity across devices.

### Underlying Needs Observed

| Theme | Evidence |
|-------|----------|
| **Mobile-first UX** | #1107 (multiline input) + #1108 (missing dates in session list) both flag mobile web gaps. |
| **Multi-provider flexibility** | #1104 (replace preferred models) and #1089 (cap tool results) reflect growing deployment on diverse LLM backends where session hygiene matters. |
| **Self-hosted/sandbox maturity** | #1105 and #1106 together indicate Docker and Podman users need more resilient filesystem tooling — likely from power users running Moltis in production-like environments. |

---

## 5. Bugs & Stability

| Severity | Issue | Fix Status |
|----------|-------|------------|
| **Medium** | [Issue #1097](https://github.com/moltis-org/moltis/issues/1097) — Telegram streaming mixes intermediate output into final reply | ✅ **Fixed** by [PR #1106](https://github.com/moltis-org/moltis/pull/1099), merged today. |
| **Low** | [Issue #1108](https://github.com/moltis-org/moltis/issues/1108) — Session list shows times but not dates for past-day sessions | ⬜ Open, no fix PR yet. Minor UI polish. |
| **Low** | [Issue #1109](https://github.com/moltis-org/moltis/issues/1109) — Update banner does not account for Docker installs | ⬜ Open, no fix PR yet. Affects user awareness for containerized deployments. |

**Stability verdict:** One delivery bug is resolved. Two low-severity UI bugs remain open but are unlikely to block core usage.

---

## 6. Feature Requests & Roadmap Signals

| Request | Potential Version Impact |
|---------|------------------------|
| **[Issue #1107](https://github.com/moltis-org/moltis/issues/1107)** — Multiline text input in mobile web UI | Likely next minor release; closely related to [Issue #1108](https://github.com/moltis-org/moltis/issues/1108) (missing dates) suggesting a broader mobile-UI sweep is overdue. |
| **[Issue #1109](https://github.com/moltis-org/moltis/issues/1109)** — Update banner skipping Docker installs | Likely addressed alongside #1107 as part of a unified update-detection refactor. |

**Prediction:** The next release candidate will likely bundle the Telegram fix (#1099), the persisted-tool-results cap (#1089), the sandbox filesystem PRs (#1105, #1106), and potentially a mobile-UI mini-sprint covering #1107–#1109.

---

## 7. User Feedback Summary

| Pain Point | Source | Sentiment |
|------------|--------|-----------|
| **Telegram streaming corrupts final reply** | [Issue #1097](https://github.com/moltis-org/moltis/issues/1097) | Resolved ✅ — user filed a thorough preflight checklist report and the fix shipped same-day. |
| **Docker users are a second-class citizen** | [Issue #1109](https://github.com/moltis-org/moltis/issues/1109) + [PR #1105](https://github.com/moltis-org/moltis/pull/1105) / [#1106](https://github.com/moltis-org/moltis/pull/1106) | Implicit frustration — both the sandbox fix PRs and the update-banner gap suggest Docker/Podman users need more first-class support. |
| **Mobile web feels incomplete** | [Issue #1107](https://github.com/moltis-org/moltis/issues/1107), [Issue #1108](https://github.com/moltis-org/moltis/issues/1108) | Neutral-to-frustrated; power users filing detailed preflight checklists expect polish across all entry points. |
| **Model preference management is confusing** | [PR #1104](https://github.com/moltis-org/moltis/pull/1104) (proactive fix) | Indicates users had a broken UX when trying to change preferred models — silently buggy. |

Overall satisfaction appears stable. The fact that `IlyaBizyaev` filed two polished, preflight-complete bug reports in a single day is a sign of a healthy, self-moderating community.

---

## 8. Backlog Watch

| Item | Open Since | Risk |
|------|-----------|------|
| [PR #1089](https://github.com/moltis-org/moltis/pull/1089) — Cap persisted tool results before rehydration | 2026-06-01 (**5 days open**) | Moderate — touches a core code path (session rehydration across all providers) but includes thorough review. Risk of merge conflict with sandbox PRs touching filesystem/tool layers. Maintainers should prioritize review. |
| [Issue #1108](https://github.com/moltis-org/moltis/issues/1108) — Session list missing dates | 2026-06-05 (**1 day old**) | Low — very new, but no assignee and no linked PR. Likely straightforward but risks becoming stale if deprioritized. |
| [Issue #1109](https://github.com/moltis-org/moltis/issues/1109) — Update banner skips Docker installs | 2026-06-05 (**1 day old**) | Low — same-day issue, no linked PR yet. Should be evaluable within a week. |

**Maintainer action item:** Review [PR #1089](https://github.com/moltis-org/moltis/pull/1089) as soon as possible; it has been open for 5 days with no recorded comments and touches a broad surface area.

---

*Digest generated by OWL — 2026-06-06*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

Here is the structured **CoPaw Project Digest** for **2026-06-06**, based on GitHub activity from the previous 24 hours.

---

### **1. Today's Overview**
CoPaw remains highly active with **24 issues** and **25 pull requests** updated in the last day, reflecting strong community engagement and ongoing development momentum. The project shows healthy maintenance patterns: **15 PRs were merged/closed**, indicating efficient review cycles, while **18 new or active issues** suggest growing user adoption and edge-case discovery. No new releases were published, but multiple bug fixes and features are queued for the next version. The focus areas include **Yuanbao channel stability**, **browser tooling**, **UI/UX polish**, and **security hardening**.

---

### **2. Releases**
**None.** No new versions were released in the past 24 hours.

---

### **3. Project Progress (Merged/Closed PRs)**
Key fixes and features merged or closed today:

- **LaTeX Rendering Fixed** ([#4972](https://github.com/agentscope-ai/CoPaw/pull/4972)): Enabled KaTeX-based math formula rendering in the console UI, resolving issue [#4756](https://github.com/agentscope-ai/CoPaw/issues/4756).
- **Browser Stability Improvements** ([#4944](https://github.com/agentscope-ai/CoPaw/pull/4944)): Added CDP timeout parameters and browser profile isolation to prevent cross-browser conflicts (e.g., Chrome vs Edge).
- **Security Hardening** ([#4026](https://github.com/agentscope-ai/CoPaw/pull/4026)): Introduced `WriteFileOverwriteGuardian` to prevent accidental overwrites of non-empty files.
- **UI Polish** ([#4765](https://github.com/agentscope-ai/CoPaw/pull/4765), [#4766](https://github.com/agentscope-ai/CoPaw/pull/4766)): Fixed shield icon alignment and removed hover-induced scrollbar flickering in the Environment Variables page.
- **OpenSandbox Plugin** ([#4934](https://github.com/agentscope-ai/CoPaw/pull/4934)): Added support for executing shell commands inside OpenSandbox environments.
- **MCP Client Recovery** ([#1347](https://github.com/agentscope-ai/CoPaw/pull/1347)): Fixed auto-reconnection logic for crashed MCP stdio servers.
- **State Storage Robustness** ([#1240](https://github.com/agentscope-ai/CoPaw/pull/4972)): Replaced fragile JSON state files with SQLite-backed storage to prevent corruption-related crashes.

---

### **4. Community Hot Topics**
Most commented/active issues reveal core user needs:

- **Yuanbao Channel Bugs Dominate**: A cluster of interrelated issues ([#4976](https://github.com/agentscope-ai/CoPaw/issues/4976), [#4977](https://github.com/agentscope-ai/CoPaw/issues/4977), [#4978](https://github.com/agentscope-ai/CoPaw/issues/4978), [#4979](https://github.com/agentscope-ai/CoPaw/issues/4979), [#4980](https://github.com/agentscope-ai/CoPaw/issues/4979)) report critical failures in the Yuanbao channel—missing proto files, protobuf version incompatibility, missing `connectId`, and silent reply drops. These block enterprise users relying on Yuanbao integration.
  - **Underlying Need**: Production-grade stability for non-DingTalk/Feishu channels.
  - **Fix Status**: PRs [#4982](https://github.com/agentscope-ai/CoPaw/pull/4982) and [#4983](https://github.com/agentscope-ai/CoPaw/pull/4983) address streaming and connection tracking.

- **Agent Execution Control** ([#4961](https://github.com/agentscope-ai/CoPaw/issues/4961), [#4964](https://github.com/agentscope-ai/CoPaw/issues/4964)): Users request the ability to **interrupt ongoing agent tasks** when sending new messages. Currently, messages queue until completion.
  - **Underlying Need**: Real-time interactivity and error correction during long-running tasks.

- **Cron Task Flexibility** ([#4950](https://github.com/agentscope-ai/CoPaw/issues/4950), [#4963](https://github.com/agentscope-ai/CoPaw/issues/4963)): Users want **direct script/shell execution** in cron jobs without AI agent overhead.
  - **Underlying Need**: Lightweight automation for system maintenance or data pipelines.

---

### **5. Bugs & Stability**
Ranked by severity:

1. **Critical**: 
   - **Yuanbao Channel Failures** (multiple issues): Complete channel breakdown due to missing proto files and protobuf incompatibilities. Affects all Yuanbao users.
   - **Agent Crash on Corrupted Config** ([#4970](https://github.com/agentscope-ai/CoPaw/issues/4970)): `loop_config.json` or `prd.json` corruption crashes the entire agent session.

2. **High**:
   - **Memory Leak Causing Fork Failure** ([#4968](https://github.com/agentscope-ai/CoPaw/issues/4968)): Virtual memory leak prevents subprocess creation on Linux.
   - **Deadlock in Agent Execution** ([#4967](https://github.com/agentscope-ai/CoPaw/issues/4967)): Agent enters unrecoverable loop.

3. **Medium**:
   - **DeepSeek API Response Folding** ([#4962](https://github.com/agentscope-ai/CoPaw/issues/4962)): Replies hidden behind collapsible thinking sections.
   - **Shell Command Window Flash** ([#4832](https://github.com/agentscope-ai/CoPaw/issues/4832)): `cmd.exe` windows flash on Windows due to missing `CREATE_NO_WINDOW` flag.

4. **Low**:
   - **LaTeX Display Issues** ([#4959](https://github.com/agentscope-ai/CoPaw/issues/4959)): Resolved via PR [#4972](https://github.com/agentscope-ai/CoPaw/pull/4972).

---

### **6. Feature Requests & Roadmap Signals**
Likely candidates for the next release based on activity and feasibility:

- **Agent Avatars** ([#4974](https://github.com/agentscope-ai/CoPaw/issues/4974)): Visual identification for multiple agents—simple UI enhancement with high user impact.
- **Customizable Session Columns** ([#4770](https://github.com/agentscope-ai/CoPaw/issues/4770)): Already has a PR ([#4975](https://github.com/agentscope-ai/CoPaw/pull/4975)) implementing this.
- **Provider Card Consolidation** ([#4965](https://github.com/agentscope-ai/CoPaw/issues/4965)): Merge duplicate provider cards (e.g., Zhipu variants) into unified dropdowns.
- **Cron Script Execution** ([#4963](https://github.com/agentscope-ai/CoPaw/issues/4963)): High demand for non-AI scheduled tasks.

---

### **7. User Feedback Summary**
**Pain Points**:
- **Enterprise Channel Reliability**: Yuanbao users face showstopper bugs requiring immediate patches.
- **Desktop App Accessibility**: Users struggle with LAN access ([#4960](https://github.com/agentscope-ai/CoPaw/issues/4960)) and macOS Intel support ([#4744](https://github.com/agentscope-ai/CoPaw/issues/4744)).
- **Agent Control**: Lack of execution interruption frustrates power users.

**Satisfaction Drivers**:
- Rapid response to UI bugs (LaTeX, security page).
- Successful integration of niche tools (OpenSandbox).
- Clear documentation of packaging options ([#4754](https://github.com/agentscope-ai/CoPaw/issues/4754)).

---

### **8. Backlog Watch**
Long-unanswered items needing maintainer attention:

- **Plugin Loader Initialization** ([#4900](https://github.com/agentscope-ai/CoPaw/pull/4900)): Critical for frozen (Tauri/PyInstaller) environments; open since June 2.
- **File Preview Security** ([#4981](https://github.com/agentscope-ai/CoPaw/pull/4981)): Restricts `/files/preview` to `WORKING_DIR`; addresses path traversal risk.
- **Session Management UX** ([#4971](https://github.com/agentscope-ai/CoPaw/issues/4971)): Users demand simpler session switching—no response yet.
- **Memory Leak Fix** ([#4968](https://github.com/agentscope-ai/CoPaw/issues/4968)): Affects Linux deployments; no PR linked.

---

**Project Health**: **Active & Responsive**. High merge rate and focused bug-fixing indicate strong maintainership. Urgent attention needed for Yuanbao channel stability and agent execution control to retain enterprise users.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-06-06

---

## 1. Today's Overview

ZeroClaw remains in a **high-velocity development phase** today with 50 updated issues and 50 updated PRs in the past 24 hours. A heavily stacked batch of PRs from contributor **theonlyhennygod** (#7260, #7262, #7265, #7270, #7275, #7277, #7280) landed today, adding 7 new schema-v3 providers, 5 SMS channels, 4 social/polling channels, a Twitch adapter, and two new WASM plugins — all targeting the **v0.8.0 schema-v3 integration wave**. There were **no new releases**, consistent with a pre-release integration sprint. Several contributors pushed bug-fix min-PRs in parallel, and governance/security RFC discussions remain active. Overall: **code velocity is very high, release cadence is staging, and the project is absorbing major scale-new-integration work** ahead of a likely v0.8.0 or v0.9.0 cut.

---

## 2. Releases

**None.** No new releases in the last 24 hours. The incoming provider and channel PRs (#7260, #7265, #7270) suggest a version bump is being staged, but has not shipped yet.

---

## 3. Project Progress

While PR change-status attribution over exactly 24 h is not explicit in the data, a large cluster of PRs was **newly opened today** (all dated 2026-06-05) and can be considered today's contribution batch:

- **7 new OpenAI-compatible providers** under schema-v3 — *morph, github_models, upstage, featherless, arcee, lambda_ai, inception* ([#7260](https://github.com/zeroclaw-labs/zeroclaw/pull/7260), [#7262](https://github.com/zeroclaw-labs/zeroclaw/pull/7262)).
- **5 new SMS channels** (Twilio, Plivo, Telnyx, Sinch, Vonage) ([#7265](https://github.com/zeroclaw-labs/zeroclaw/pull/7265)).
- **4 new polling channels** (Mastodon, Rocket.Chat, Zulip, Lemmy) ([#7270](https://github.com/zeroclaw-labs/zeroclaw/pull/7270)).
- **Twitch chat channel** as an IRC adapter ([#7275](https://github.com/zeroclaw-labs/zeroclaw/pull/7275)).
- **WASM plugin expansion**: Shazam pilot + Replicate model-runner ([#7277](https://github.com/zeroclaw-labs/zeroclaw/pull/7277), [#7280](https://github.com/zeroclaw-labs/zeroclaw/pull/7280)).
- **Plugin lifecycle endpoints + management UI stubs** ([#7235](https://github.com/zeroclaw-labs/zeroclaw/pull/7235)).
- **Observability XL PR** landing the structured-events + OTel trace-correlation RFC ([#7233](https://github.com/zeroclaw-labs/zeroclaw/pull/7233)).
- **Bug fixes**: UTF-8 truncation panic ([#7123](https://github.com/zeroclaw-labs/zeroclaw/pull/7123)), quickstart alias ([#7240](https://github.com/zeroclaw-labs/zeroclaw/pull/7240)), paired_tokens drift ([#7247](https://github.com/zeroclaw-labs/zeroclaw/pull/7247)), ACP session tombstone ([#7258](https://github.com/zeroclaw-labs/zeroclaw/pull/7258)), think-block leakage ([#7254](https://github.com/zeroclaw-labs/zeroclaw/pull/7254)), nested-secret redaction ([#7261](https://github.com/zeroclaw-labs/zeroclaw/pull/7261)).
- **Per-field MCP server editing** via `#[natural_key]` ([#7267](https://github.com/zeroclaw-labs/zeroclaw/pull/7267)).
- **Structured provider additions**: `extra_body` for OpenAI-compatible providers ([#7163](https://github.com/zeroclaw-labs/zeroclaw/pull/7163)); StageX container pipeline with musl static linking ([#7176](https://github.com/zeroclaw-labs/zeroclaw/pull/7176)).

**6 issues were closed** in the window, including onboard OpenAI Codex ([#6120](https://github.com/zeroclaw-labs/zeroclaw/issues/6120)) and a Ratatui agent-mode REPL request ([#5882](https://github.com/zeroclaw-labs/zeroclaw/issues/5882)).

---

## 4. Community Hot Topics

The most-discussed issues — i.e., the community's clearest pressure points — are:

1. **[#6808 RFC: Work Lanes, Board Automation, Label Cleanup](https://github.com/zeroclaw-labs/zeroclaw/issues/6808)** — 9 comments. **Core need**: contributors and maintainers are spending too much manual effort routing PRs and issues. This is a **meta-project scalability ticket**; acceptance + in-progress status signals it's real priority.
2. **[#6969 RFC: unified output routing model](https://github.com/zeroclaw-labs/zeroclaw/issues/6969)** — 7 comments, from a recent Letta migrant. **Core need**: per-peer modality preferences and explicit send_via control. **Why it matters**: first-hand cross-tool migration feedback highlighting a regression in UX vs. Letta — a signal about competitive retention risk.
3. **[#5601 subscription-native OAuth for Ollama Cloud, z.ai, Kimi, MiniMax](https://github.com/zeroclaw-labs/zeroclaw/issues/5601)** — 6 comments, 👍 1, open since 2026-04-10. **Core need**: auth UX parity with the three already-supported providers; blocked on maintainer review.
4. **[#6165 RFC: lighter core via external integrations](https://github.com/zeroclaw-labs/zeroclaw/issues/6165)** — 4 comments. **Core need**: stop growing in-tree ad-hoc integrations (gws-cli, Jira, GitHub) and route them through skills/MCP. **Blocked**, needs maintainer review, aligns directionally with the current schema-v3 externalization push.
5. **[#7155 RFC: per-execution confirmation tier for high-risk shell commands](https://github.com/zeroclaw-labs/zeroclaw/issues/7155)** — 4 comments. **Core need**: "allow but ask every time" intermediate trust tier, plus Claude Code–style allow/ask/deny pattern policy.
6. **[#7142 pluggable security provider interface](https://github.com/zeroclaw-labs/zerocaw/issues/7142)** — 4 comments. Target **v0.9.0**; being delivered as a tracking issue.
7. **[#7141 OIDC auth provider for RPC/WSS](https://github.com/zeroclaw-labs/zeroclaw/issues/7141)** — 4 comments. Also tracks to **v0.9.0**; paired with #7142 as the project's enterprise-auth push.

A single PR, **#7233 (observability)**, is today's single-largest code change (XL size) and directly tracks a prior RFC ([#7232](https://github.com/zeroclaw-labs/zeroclaw/issues/7232)).

---

## 5. Bugs & Stability

Synthesized from today's signal (updated 2026-06-05, severity/fix status noted):

**Critical / high-risk (production-impacting):**
- **[#7059](https://github.com/zeroclaw-labs/zeroclaw/issues/7059)** [OPEN, p1] — "Default model provider" credential/URL fallback in the channel orchestrator is a **V3-schema semantic mismatch**; fix in progress. No merged fix PR visible yet.
- **[#6916](https://github.com/zeroclaw-labs/zeroclaw/issues/6916)** [OPEN, p1] — Shell/skill subprocesses can allocate unbounded memory beyond the 1MB output cap, OOM-ing containers (seen live with `wkhtmltopdf`). No fix PR tied yet.
- **[#6120](https://github.com/zeroclaw-labs/zeroclaw/issues/6120)** [CLOSED, p1] — Onboarding: choosing OpenAI Codex prompted for an OpenAI API key instead (S1 workflow-blocked). **Resolved today** — closing fix not itemized in PR list but bug is closed.
- **[#7123](https://github.com/zeroclaw-labs/zeroclaw/pull/7123)** [OPEN PR] — Fixes **UTF-8 char-boundary panics** in Bluesky/LinkedIn truncation; critical for CJK content.
- **[#7244](https://github.com/zeroclaw-labs/zeroclaw/pull/7244)** [OPEN PR] — Robust JSON fallback parsing for `file_write` when models emit unescaped quotes inside HTML/code payloads; fixes silent data corruption on some providers.
- **[#7258](https://github.com/zeroclaw-labs/zeroclaw/pull/7258)** [OPEN PR] — ACP session tombstone: prevents silent revival of killed sessions. Security-sensitive fix.

**Medium severity:**
- **[#7247](https://github.com/zeroclaw-labs/zeroclaw/pull/7247)** [OPEN PR] — paired_tokens drift false-positive (typo in kebab vs. snake case).
- **[#7261](https://github.com/zeroclaw-labs/zeroclaw/pull/7261)** [OPEN PR] — Nested object-array secret redaction gaps.
- **[#7240](https://github.com/zeroclaw-labs/zeroclaw/pull/7240)** [OPEN PR] — Quickstart provider alias editable; fixes validation failure on pre-existing config.

**Notable stability-grade enhancements (preventive):**
- **[#7233](https://github.com/zeroclaw-labs/zerocaw/pull/7233)** [OPEN PR] — OTel correlation + rich events will give maintainers visibility into the exact paths behind these bugs.

---

## 6. Feature Requests & Roadmap Signals

Triaging by status labels, comment count, and target versions:

**Likely v0.8.0 (shipping in current PR batch):**
- Schema-v3 provider/channel wave (morph, github_models, upstage, featherless, arcee, lambda_ai, inception; Twilio, Plivo, Telnyx, Sinch, Vonage; Mastodon, Rocket.Chat, Zulip, Lemmy; Twitch) — already PR-open, most stacked and time-gated on #7229's merge.
- Plugin lifecycle management UI ([#7235](https://github.com/zeroclaw-labs/zeroclaw/pull/7235)).
- Shazam + Replicate WASM plugins ([#7277](https://github.com/zeroclaw-labs/zeroclaw/pull/7277), [#7280](https://github.com/zeroclaw-labs/zeroclaw/pull/7280)).
- Per-field MCP server editing ([#7267](https://github.com/zeroclaw-labs/zeroclaw/pull/7267)).

**Tracked for v0.9.0 (accepted, tracking issues open):**
- Pluggable security provider interface ([#7142](https://github.com/zeroclaw-labs/zeroclaw/issues/7142)).
- OIDC authentication provider for RPC/WSS ([#7141](https://github.com/zeroclaw-labs/zeroclaw/issues/7141)).
- Per-execution confirmation tier + allow/ask/deny shell policy ([#7155](https://github.com/zeroclaw-labs/zeroclaw/issues/7155)).

**Probable near-version candidates (accepted / in-progress):**
- RFC: Work Lanes & Board Automation ([#6808](https://github.com/zeroclaw-labs/zeroclaw/issues/6808)).
- RFC: unified output routing model ([#6969](https://github.com/zeroclaw-labs/zeroclaw/issues/6969)) — explicitly driven by a recent Letta migrant.
- RFC: lighter core via external integrations ([#6165](https://github.com/zeroclaw-labs/zeroclaw/issues/6165)) — directionally aligned with today's schema-v3 push.
- Structured observability RFC ([#7232](https://github.com/zeroclaw-labs/zeroclaw/issues/7232) → PR [#7233](https://github.com/zeroclaw-labs/zeroclaw/pull/7233)) — XL PR opened today.

**Longer-lead / blocked:**
- Subscription-native OAuth for Ollama Cloud, z.ai, Kimi, MiniMax ([#5601](https://github.com/zeroclaw-labs/zeroclaw/issues/5601)).
- LSP support for ZeroCode ([#5907](https://github.com/zeroclaw-labs/zeroclaw/issues/5907)).
- Air-gapped enclave mode ([#6293](https://github.com/zeroclaw-labs/zerocaw/issues/6293)).

---

## 7. User Feedback Summary

Pain points surfacing today, in rough priority order:

1. **Auth/config UX is the top user complaint cluster.** Onboarding still misroutes Codex to OpenAI keys ([#6120](https://github.com/zeroclaw-labs/zeroclaw/issues/6120)); quiet-provider still auto-falls-back to wrong credential model ([#7059](https://github.com/zeroclaw-labs/zeroclaw/issues/7059, p1 in-progress); users want subscription-native OAuth for 4+ more providers ([#5601](https://github.com/zeroclaw-labs/zeroclaw/issues/5601)); per-model context-window/vision config ([#7100](https://github.com/zeroclaw-labs/zeroclaw/issues/7100)) is requested because family-level defaults break on heterogeneous fleets.

2. **Output routing is a competitive regression.** The Letta migrant in [#6969](https://github.com/zeroclaw-labs/zeroclaw/issues/6969) is specific and credible — "this behavior I relied on heavily is gone." If ZeroClaw wants to win Letta/Claude Code/Codex refugees, per-peer send_via is a must-have, not a nice-to-have.

3. **Tool output formatting is breaking non-trivial models.** PR #7244 exists because real Gemini/Discord payloads produce unescaped quotes that break `file_write` JSON. A wider prompt-reinforcement + fallback-parsing strategy appears to be underway.

4. **Operator/enterprise needs are emerging.** OIDC (#7141), pluggable security (#7142), shell allow/ask/deny policy (#7155), and process-memory limits for shell (#6916) are all being requested in the same window. The project is clearly being adopted in higher-assurance environments and needs to graduate its security UX.

5. **Satisfaction signals:** The breadth of today's stacked PRs and rapid bug-fix landing (UTF-8 panics, session tombstone, secret redaction, quickstart alias) signals a responsive core team. 6 issues closed in 24 h including S1 blockers leans positive.

---

## 8. Backlog Watch

Items that are **blocked, long-open, or explicitly need maintainer review** and have been idle beyond a healthy window:

| # | Age / Status | Signal | Why watch |
|---|---|---|---|
| [#5601](https://github.com/zeroclaw-labs/zeroclaw/issues/5601) subscription-native OAuth | Open since 2026-04-10 (~57 days), blocked, needs-maintainer-review | 4 providers waiting on auth infra | Auth UX is a top-churn vector; leaving this blocked risks permanent user loss to competitors. |
| [#6165](https://github.com/zeroclaw-labs/zeroclaw/issues/6165) RFC: lighter core | Open since 2026-04-27, blocked, needs-maintainer-review | Architecture direction | Already directionally aligned with current schema-v3 push; unblocking it would give the whole integration wave a coherent north star. |
| [#5907](https://github.com/zeroclaw-labs/zeroclaw/issues/5907) RFC: LSP support | Open since 2026-04-19, blocked | Coding-agent UX parity with Claude Code / OpenCode | Repeatedly cited as a hallucination-reduction tool; being blocked slows the "ZeroCode vs. Claude Code" positioning. |
| [#6293](https://github.com/zeroclaw-labs/zeroclaw/issues/6293) Air-gapped enclave mode | Open since 2026-05-03, blocked, needs-maintainer-review, high risk | Enterprise/security market entry | A long-lead architectural item that early signal says is needed; attention now reduces rewrite risk later. |
| [#6074](https://github.com/zeroclaw-labs/zeroclaw/issues/6074) 153 commits lost in bulk revert | Open since 2026-04-24, in-progress (audit), help wanted | Recovering 153 reverted commits is a multi-week risk surface | Without systematic recovery, bugs fixed in that window will silently reappear. |
| [#6715](https://github.com/zeroclaw-labs/zeroclaw/issues/6715) Delete unneeded branches | Open since 2026-05-16, blocked, p3 | 200+ branches blocking fork hygiene | Low severity but signals triage debt; easy win. |

**No long-unanswered high-priority PRs** are visible in today's data; PR throughput appears healthy across the board.

---

**Bottom line for 2026-06-06:** ZeroClaw is executing a **large, coordinated schema-v3 integration landing** driven by a single prolific contributor, with strong parallel bug-fix throughput. The leading risks are **auth/config UX churn**, **competitive output-routing regression**, and **enterprise security feature debt** being deferred to v0.9.0. Maintainer attention to the **6 blocked backlog items** above — particularly #5601 and #6165 — would materially increase community momentum ahead of the next version cut.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/DenisZheng/agents-radar).*