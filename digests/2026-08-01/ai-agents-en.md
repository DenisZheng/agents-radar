# OpenClaw Ecosystem Digest 2026-08-01

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-08-01 02:10 UTC

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

# OpenClaw Project Digest — 2026-08-01

## 1. Today's Overview

OpenClaw shows **exceptionally high development velocity** with 500 issues and 500 PRs updated in the last 24 hours. The project maintains a massive active backlog (465 open issues, 361 open PRs) with 35 issues closed and 139 PRs merged/closed today — indicating strong maintainer throughput despite the volume. No new release was published today. The issue landscape is dominated by **session-state reliability bugs** (memory leaks, transcript corruption, restart recovery failures), **multi-channel message delivery regressions** (Telegram, Matrix, Slack, LINE, Feishu), and **gateway stability concerns** (OOM crashes, heap growth, child process leaks). Security-hardening work (masked secrets, token disclosure prevention) and platform expansion (Linux/Windows apps, Azure Foundry support) signal strategic roadmap priorities.

---

## 2. Releases

**No new releases today.** The latest release data shows none in the feed.

---

## 3. Project Progress — Merged/Closed PRs Today (139 total)

Key merged fixes advancing stability and correctness:

| PR | Area | Summary | Risk Rating |
|----|------|---------|-------------|
| [#101414](https://github.com/openclaw/openclaw/pull/101414) | agents | Classify Anthropic `invalid_request_error` as format error for failover | 🦐 Gold Shrimp |
| [#108404](https://github.com/openclaw/openclaw/pull/108404) | agents | Honor server `Retry-After` on Anthropic rate-limited turns | 🦐 Silver Shellfish |
| [#107943](https://github.com/openclaw/openclaw/pull/107943) | agents | Preserve `Retry-After` header for auto-retry backoff | 🧂 Unranked Krab |
| [#101932](https://github.com/openclaw/openclaw/pull/101932) | gateway | Avoid stalls when parent token probing hangs | 🐚 Platinum Hermit |
| [#108963](https://github.com/openclaw/openclaw/pull/108963) | gateway | Fix CLI probes failing when `gateway.bind ≠ loopback` | 🧂 Unranked Krab |
| [#105170](https://github.com/openclaw/openclaw/pull/105170) | scripts | Refuse GraphQL prepare push when rebases rewrite ancestry | 🐚 Platinum Hermit |
| [#111888](https://github.com/openclaw/openclaw/pull/111888) | config | Reject `gateway.port` values above TCP range (1–65535) | 🧂 Unranked Krab |
| [#111107](https://github.com/openclaw/openclaw/pull/111107) | gateway | Report correct timeout status when `agent --json` exits on `toolUse` | 🐚 Platinum Hermit |

**Pattern**: Recent merges focus on **provider resilience** (Anthropic retry handling), **gateway/network correctness** (binding, CLI probes), and **config validation hardening** — foundational stability work.

---

## 4. Community Hot Topics — Most Active Issues/PRs

### Top 5 Issues by Comment Count

| Issue | Comments | 👍 | Core Theme | Link |
|-------|----------|-----|------------|------|
| **#75** Linux/Windows Clawdbot Apps | 116 | 80 | **Platform parity** — macOS/iOS/Android exist; Linux/Windows missing | [#75](https://github.com/openclaw/openclaw/issues/75) |
| **#91588** Gateway Memory Leak — RSS 350MB → 15.5GB | 23 | 1 | **Critical stability** — OOM kills, launchd restart loops | [#91588](https://github.com/openclaw/openclaw/issues/91588) |
| **#7707** Memory Trust Tagging by Source | 23 | 0 | **Security** — Prevent memory poisoning from untrusted sources | [#7707](https://github.com/openclaw/openclaw/issues/7707) |
| **#116201** Realtime voice retains unbounded provider state | 16 | 0 | **Resource bounds** — Consult work, audio frames, pre-ready audio unbounded | [#116201](https://github.com/openclaw/openclaw/issues/116201) |
| **#10659** Masked Secrets — Prevent Agent from Accessing Raw API Keys | 15 | 4 | **Security** — Secrets usable but not readable by agent | [#10659](https://github.com/openclaw/openclaw/issues/10659) |

### Top PRs Needing Review (by risk/complexity)

| PR | Status | Risk | Summary |
|----|--------|------|---------|
| [#117129](https://github.com/openclaw/openclaw/pull/117129) | 👀 ready | 🚨 security-boundary | Prevent webhook bearer token disclosure (cron jobs) |
| [#117141](https://github.com/openclaw/openclaw/pull/117141) | 👀 ready | 🚨 session-state, message-delivery | Keep subagent status consistent after restart/large fan-outs |
| [#117158](https://github.com/openclaw/openclaw/pull/117158) | 👀 ready | 🚨 session-state | Unify filtered session list ownership in Control UI |
| [#117074](https://github.com/openclaw/openclaw/pull/117074) | 📣 needs proof | 🚨 session-state | Fix cron-heavy agents accumulating invisible session store debris |
| [#116666](https://github.com/openclaw/openclaw/pull/116666) | 👀 ready | 🚨 availability | Prevent cron saturation from starving hook dispatch |

**Underlying needs**: Users are screaming for **desktop platform parity** (#75, 80👍), **gateway memory stability** (multiple OOM issues), and **security hardening** (masked secrets, token disclosure). The session-state subsystem is the epicenter of instability.

---

## 5. Bugs & Stability — Ranked by Severity

### 🔴 Critical (P0 / Crash-Loop / Data Loss)

| Issue | Severity | Status | Fix PR? |
|-------|----------|--------|---------|
| [#91588](https://github.com/openclaw/openclaw/issues/91588) Gateway RSS 350MB → 15.5GB over days, OOM kills | P0, crash-loop | Open | No |
| [#115908](https://github.com/openclaw/openclaw/issues/115908) Transcript projection livelock under sustained writes, stalls main thread | P1, crash-loop | Open | No |
| [#114255](https://github.com/openclaw/openclaw/issues/114255) Restart mid-run leaves `status=running` with live restart-recovery claim; agent stops replying | P1, message-loss | Open | No |
| [#97616](https://github.com/openclaw/openclaw/issues/97616) Unreaped hook/tool child processes → zombie accumulation | P1, crash-loop | Open | No |
| [#87109](https://github.com/openclaw/openclaw/issues/87109) Gateway heap 558MB → 1073MB+ at idle; cron jobs silently fail | P1, crash-loop | Open | No |

### 🟠 High (P1 / Message Loss / Session Corruption)

| Issue | Severity | Status | Fix PR? |
|-------|----------|--------|---------|
| [#86519](https://github.com/openclaw/openclaw/issues/86519) Agent repeats identical replies 2-10x on Telegram (regression 5.20) | P1, regression | Open | No |
| [#114137](https://github.com/openclaw/openclaw/issues/114137) Visible channel turns dispatch with no reply payload — text in transcript, never delivered | P1, message-loss | Open | No |
| [#113306](https://github.com/openclaw/openclaw/issues/113306) SQLite snapshot restore lacks crash/identity guarantees | P1, data-loss | Open | No |
| [#116418](https://github.com/openclaw/openclaw/issues/116418) Ollama provider never selected as primary in 2026.7.1 | P1, regression | Open | No |
| [#114211](https://github.com/openclaw/openclaw/issues/114211) Matrix agents loop on no-reply output, replay stale state | P1, message-loss | Open | No |
| [#96692](https://github.com/openclaw/openclaw/issues/96692) Slack thread replies generated but not delivered after origin tuple lost | P1, message-loss | Open | No |
| [#86012](https://github.com/openclaw/openclaw/issues/86012) LINE messages silently lost — reply token expiry, no push fallback | P1, message-loss | Open | No |
| [#116868](https://github.com/openclaw/openclaw/issues/116868) SQLite sessions fall back to frozen JSONL, resurrect completed tasks | P1, session-state | Closed | Likely in #116868 |
| [#115476](https://github.com/openclaw/openclaw/issues/115476) Context refresh after compaction replays old Telegram `message_id` — missing dedup | P1, message-loss | Open | No |
| [#48810](https://github.com/openclaw/openclaw/issues/48810) Compaction retry creates orphan fork in `parentId` chain | P1, data-loss | Open | No |
| [#85844](https://github.com/openclaw/openclaw/issues/85844) Auto-update leaves running gateway with stale hashed bundle imports | P1, crash-loop | Open | No |

### 🟡 Medium (P2 / UX Friction / Token Waste)

| Issue | Severity | Status | Fix PR? |
|-------|----------|--------|---------|
| [#67419](https://github.com/openclaw/openclaw/issues/67419) Bootstrap files re-injected every turn, wasting 20-30% tokens | P2, session-state | Open | No |
| [#95610](https://github.com/openclaw/openclaw/issues/95610) Prompt-cache prefix churn defeats OpenAI automatic caching | P2, other | Open | No |
| [#77930](https://github.com/openclaw/openclaw/issues/77930) Discord channel not loaded in 2026.5.4 (works in beta.1) | P2, regression | Open | Linked PR open |
| [#46786](https://github.com/openclaw/openclaw/issues/46786) `tools.elevated.enabled: true` breaks exec routing logic | P1, regression | Open | No |
| [#51429](https://github.com/openclaw/openclaw/issues/51429) Hardcoded workspace path `/Users/wangtao` shipped in release | P2, behavior | Open | No |

**Observation**: 15+ P0/P1 bugs active simultaneously, many without fix PRs. Session-state, message-delivery, and gateway-memory subsystems are in **crisis mode**.

---

## 6. Feature Requests & Roadmap Signals

### High-Engagement Feature Requests

| Issue | 👍 | Theme | Likelihood for Next Version |
|-------|-----|-------|----------------------------|
| [#75](https://github.com/openclaw/openclaw/issues/75) Linux/Windows Clawdbot Apps | 80 | **Platform parity** — #1 community ask | High — 80👍, P2, "help wanted" |
| [#10659](https://github.com/openclaw/openclaw/issues/10659) Masked Secrets | 4 | **Security** — Secrets usable but not readable | High — P1, security-review label |
| [#7707](https://github.com/openclaw/openclaw/issues/7707) Memory Trust Tagging by Source | 0 | **Security** — Prevent memory poisoning | Medium — P2, security-review |
| [#45608](https://github.com/openclaw/openclaw/issues/45608) Pre-reset agentic memory flush | 4 | **Session hygiene** — Align `/new`, `/reset`, daily reset with compaction flush | Medium — P2 |
| [#90916](https://github.com/openclaw/openclaw/issues/90916) Topic-session families for multi-context lanes | 2 | **Architecture** — Named topic lanes with isolated context | Low — "stale", P2, off-meta |
| [#87325](https://github.com/openclaw/openclaw/issues/87325) Azure Foundry GPT Realtime Talk via gateway relay | 1 | **Provider expansion** — Azure AI Foundry support | Medium — P2, security-review |
| [#10687](https://github.com/openclaw/openclaw/issues/10687) Fully dynamic model discovery (OpenRouter+) | 3 | **Model agility** — Live catalog vs static generated | Medium — P2, live-repro |
| [#9986](https://github.com/openclaw/openclaw/issues/9986) Trigger model fallback on context length exceeded | 0 | **Resilience** — Fallback on context overflow, not just API errors | Medium — P2 |
| [#13219](https://github.com/openclaw/openclaw/issues/13219) Per-model usage logging for cost tracking | 1 | **Observability** — Native cost tracking | Low — P2, off-meta |
| [#113251](https://github.com/openclaw/openclaw/issues/113251) Image viewing in webchat file viewer | 0 | **UX** — WebChat file viewer enhancement | Low — P2 |

### PRs Signaling Near-Term Delivery

| PR | Status | Feature |
|----|--------|---------|
| [#115698](https://github.com/openclaw/openclaw/pull/115698) | 📣 needs proof | Local faster-whisper realtime transcription provider |
| [#111541](https://github.com/openclaw/openclaw/pull/111541) | ⏳ waiting on author | Localization: locale context and message rendering |
| [#117157](https://github.com/openclaw/openclaw/pull/117157) | 📣 needs proof | Replace duplicated locale bundles with canonical translation memory |
| [#117128](https://github.com/openclaw/openclaw/pull/117128) | ⏳ waiting on author | Preflight exec provider command paths before config acceptance |

**Prediction**: Next version will likely ship **Linux/Windows app parity** (community pressure), **masked secrets** (security priority), **local Whisper transcription**, and **localization overhaul**. Gateway memory fixes are prerequisites for any stable release.

---

## 7. User Feedback Summary — Real Pain Points

| Pain Point | Evidence | User Impact |
|------------|----------|-------------|
| **No Linux/Windows desktop apps** | #75: 116 comments, 80👍, "Similar feature set to macOS ideally" | **Blocker for non-macOS users**; forces workarounds or abandonment |
| **Gateway OOM crashes daily** | #91588: "RSS grows 350MB → 15.5GB over 2-3 days", "repeated launchd-handoff restart cycles" | **Unusable for long-running agents**; requires manual restarts |
| **Telegram duplicate messages** | #86519: "2-10x per user message", "5.22 reduced severity but did not fully fix" | **Broken UX**; users receive spammy replies |
| **Messages silently lost** | #114137 (Signal), #86012 (

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: Personal AI Assistant / Agent Open-Source Ecosystem
**Snapshot Date:** 2026-08-01 | **Projects Analyzed:** 13 (10 active, 3 inactive)

---

## 1. Ecosystem Overview

The personal AI assistant/agent open-source landscape is **highly fragmented but technically vibrant**, with 10 actively maintained projects pursuing distinct architectural philosophies. A clear bifurcation exists: **platform-scale frameworks** (OpenClaw, IronClaw, ZeroClaw, Hermes Agent) investing in multi-tenant runtimes, plugin ecosystems, and enterprise-grade security, versus **lightweight, channel-focused bots** (NanoBot, NanoClaw, PicoClaw, Moltis, CoPaw, LobsterAI) optimizing for protocol breadth, desktop UX, and single-user deployments. No project has achieved dominant market share; instead, each occupies a niche defined by runtime model (containerized vs. native), target user (developer vs. power-user vs. enterprise), and extension strategy (skills/plugins vs. channel adapters). The ecosystem shows **convergent evolution on critical pain points** — session-state reliability, gateway memory management, secret handling, and cross-platform desktop parity — suggesting these are universal requirements for production-grade AI assistants.

---

## 2. Activity Comparison

| Project | Issues Updated (24h) | PRs Updated (24h) | Open Issues | Open PRs | Merged/Closed PRs (24h) | Latest Release | Health Score |
|---------|---------------------|-------------------|-------------|----------|------------------------|----------------|--------------|
| **OpenClaw** | 500 | 500 | 465 | 361 | 139 | None recent | 🟡 Crisis-stable |
| **Hermes Agent** | 50 | 50 | ~50+ | ~50+ | 7 (high-impact) | v0.19.1 (2026-07-20) | 🟡 Stabilizing |
| **IronClaw** | 38 | 50 | ~30+ | ~20+ | 9 | None (auto-release PR open) | 🟢 Refactoring |
| **ZeroClaw** | 50 | 50 | ~30+ (RFC-heavy) | ~20+ | 13 | None | 🟡 Design-phase |
| **CoPaw** | 20 | 41 | ~20+ | 28 | 6 | v2.0.1 | 🟢 Stabilizing |
| **NanoClaw** | 8 | 10 | ~10+ | ~10+ | 4 | v2.1.54 | 🟢 Expanding |
| **NanoBot** | 4 | 16 | ~5+ | ~10+ | 6 | None recent | 🟢 Healthy |
| **Moltis** | 2 | 6 | ~5+ | 4 | 2 | None recent | 🟢 Steady |
| **LobsterAI** | 4 (stale-closed) | 11 (merged) | Low | Low | 11 | 2026.7.31 (merged) | 🟢 Maintenance |
| **PicoClaw** | 2 | 3 | ~3+ | 3 | 0 | v0.3.1 | 🟡 Review-blocked |
| **NullClaw** | 0 | 0 | Low | 1 | 0 | None | 🔴 Dormant |
| **TinyClaw** | 0 | 0 | — | — | 0 | — | 🔴 Inactive |
| **ZeptoClaw** | 0 | 0 | — | — | 0 | — | 🔴 Inactive |

**Key Observations:**
- **Velocity Tier 1 (500+/day):** OpenClaw — outlier scale, crisis-mode bug volume
- **Velocity Tier 2 (50/day):** Hermes, IronClaw, ZeroClaw — architectural refactoring phases
- **Velocity Tier 3 (10–60/day):** CoPaw, NanoClaw, NanoBot — active feature/bug sprints
- **Velocity Tier 4 (<10/day):** Moltis, LobsterAI, PicoClaw — maintenance/polish cycles
- **Release Cadence:** Only LobsterAI shows recent version cut; most projects accumulate changes for batched releases

---

## 3. OpenClaw's Position

### Advantages vs Peers
| Dimension | OpenClaw Advantage |
|-----------|-------------------|
| **Scale & Throughput** | 10× PR merge rate (139/24h) vs next highest (IronClaw 9, Hermes 7); demonstrates unmatched maintainer capacity |
| **Channel Breadth** | Native support for 8+ channels (Telegram, Matrix, Slack, LINE, Feishu, Signal, Discord, WebChat) — most projects cover 2–4 |
| **Security Investment** | Active masked-secrets (#10659), memory trust-tagging (#7707), token-disclosure prevention (#117129) — enterprise-grade |
| **Platform Parity Demand** | #1 community ask (Linux/Windows apps, 80👍) signals largest addressable non-macOS user base |

### Technical Approach Differences
- **Gateway-Centric Architecture**: Dedicated gateway process managing multi-channel routing, session persistence, and provider failover — unlike NanoBot/NanoClaw's embedded runtimes or IronClaw's contract-based crate graph.
- **Session-State as Core Subsystem**: Explicit SQLite/JSONL transcript projection, compaction, and restart-recovery — treated as first-class reliability surface rather than implementation detail.
- **Provider Resilience Layer**: Anthropic retry-after handling, rate-limit failover, model fallback chains — operational maturity exceeding peers.

### Community Size Comparison
- **GitHub Engagement**: OpenClaw #75 (116 comments, 80👍) > Hermes #52261 (6 comments) > IronClaw #6284 (15 comments) > CoPaw #6537 (10 comments)
- **Contributor Breadth**: 139 merged PRs/24h implies large active committer pool; most peers show <10 merged PRs/day
- **Issue Depth**: 15+ concurrent P0/P1 bugs indicates production deployments at scale uncovering edge cases smaller projects haven't reached

---

## 4. Shared Technical Focus Areas

| Requirement | Projects Affected | Specific Needs |
|-------------|------------------|----------------|
| **Session-State Reliability** | OpenClaw, Hermes Agent, IronClaw, ZeroClaw, CoPaw, NanoBot | Transcript corruption fixes, restart recovery, compaction integrity, SQLite/JSONL migration (NanoBot #5173), memory/category separation (ZeroClaw #9048) |
| **Gateway/Memory Stability** | OpenClaw, Hermes Agent, IronClaw, ZeroClaw | OOM crash loops (OpenClaw #91588, #87109), heap growth, child process leaks, cache-byte-identicality (IronClaw #6984–#6987), Landlock sandbox breaks (ZeroClaw #8973) |
| **Secret/Security Hardening** | OpenClaw, IronClaw, ZeroClaw, Moltis, NanoClaw | Masked secrets (OpenClaw #10659), token disclosure prevention (OpenClaw #117129), cross-user memory leaks (IronClaw #6900), path-traversal RCE fixes (Moltis #1180), KeySource abstraction (ZeroClaw #9127) |
| **Desktop Platform Parity** | OpenClaw, Hermes Agent, CoPaw, PicoClaw | Linux/Windows native apps (OpenClaw #75), Windows update reliability (Hermes #75584, #75598), bundled Python runtime (CoPaw #6160), web UI CPU perf (PicoClaw #3292) |
| **Multi-Channel Message Delivery** | OpenClaw, NanoBot, CoPaw, Moltis, NanoClaw | Telegram duplicate/regression (OpenClaw #86519), Weixin session expiry (NanoBot #5195), Feishu/OneBot audio (CoPaw #6544), NIP-29 group chat (Moltis #1168), Dial/SMS (NanoClaw #3041) |
| **Provider Resilience & Fallback** | OpenClaw, Hermes Agent, ZeroClaw, NanoClaw, CoPaw | Anthropic retry-after (OpenClaw #101414), local MLX error classification (Hermes #52261), OpenAI-compatible endpoint (ZeroClaw #8550), model fallback chains (PicoClaw #3200, NanoClaw) |
| **Observability & Cost Tracking** | OpenClaw, IronClaw, ZeroClaw, Hermes Agent | Per-model usage logging (OpenClaw #13219), OTel conversation correlation (ZeroClaw #8933), token estimation accuracy (IronClaw #6989), prompt cache hit-rate (LobsterAI #2413) |

---

## 5. Differentiation Analysis

| Project | Primary Focus | Target User | Technical Architecture | Extension Model |
|---------|--------------|-------------|------------------------|-----------------|
| **OpenClaw** | **Multi-channel gateway platform** | Developers running production bots across 5+ channels | Gateway process + agent workers + SQLite/JSONL session store; provider-agnostic routing | Channel adapters, provider plugins, skill system |
| **IronClaw** | **Multi-tenant runtime with formal contracts** | Enterprise/teams needing isolation, auditability | Crate-graph with neutral contracts (`ironclaw_loop_contracts`, etc.), sealed evidence minting, capability-based security | Hosted MCP servers, WASM plugins (planned), skill marketplace |
| **ZeroClaw** | **Security-first agent OS** | Security-conscious operators, compliance workloads | Landlock/WASM sandboxing, A2A protocol, capability-tiered shell approval, memory lifecycle policies | Plugin catalog (unified), A2A inbound/outbound, computer-use sidecar |
| **Hermes Agent** | **Local-first desktop agent with TUI/WebUI** | Power users, local inference enthusiasts | Python monolith with platform adapters (Telegram 9k LOC, Matrix 3k LOC), MLX/oMLX optimization, voice pipeline | Skill system, subagent delegation, provider CLIs |
| **NanoBot** | **Lightweight multi-channel bot with WebUI** | Self-hosters, Termux/Android users | Node.js/TypeScript, SQLite sessions, channel adapters (Weixin, Slack, Telegram), WebUI dashboard | Skills, session management, model switching |
| **NanoClaw** | **Runtime-plural channel integrator** | Developers needing Docker/K8s/native flexibility | Container runtime abstraction (Docker, Apple Container, native), channel adapters (iMessage, Dial, Telegram voice) | Skills, runtime providers, channel adapters |
| **CoPaw** | **Desktop-first agent with AgentScope integration** | Chinese-market desktop users, AgentScope ecosystem | Tauri/Rust + Python (AgentScope), desktop-native UX, memory/dream subsystem | Skills, ACP protocol, provider unification |
| **Moltis** | **Decentralized/Nostr-native agent mesh** | Nostr/Buzz community, privacy-focused teams | Rust, NIP-29/42/47 protocol stack, relay-based comms, operator-gated privileges | Nostr relays, channel types, vector memory backends |
| **LobsterAI** | **Polished desktop/Web UI for OpenClaw** | End-users wanting SaaS-like UX on self-hosted | Electron/React frontend on OpenClaw backend, OAuth providers, cache-stability patches | OpenClaw ecosystem, cowork multi-agent |
| **PicoClaw** | **Protocol-diverse lightweight bridge** | IRC/DeltaChat/SimpleX communities | Go, channel-centric, model fallback chains, web chat UI | Channel adapters (IRC, DeltaChat, SimpleX), model chains |

**Architectural Spectrum:**  
`Gateway/Platform (OpenClaw)` → `Contract/Runtime (IronClaw, ZeroClaw)` → `Desktop Monolith (Hermes, CoPaw)` → `Channel Bot (NanoBot, NanoClaw, PicoClaw, Moltis)` → `UI Layer (LobsterAI)`

---

## 6. Community Momentum & Maturity

| Tier | Projects | Signals |
|------|----------|---------|
| **Rapidly Iterating (Architectural Refactor)** | IronClaw, ZeroClaw, Hermes Agent | 50+ PRs/day, RFC-heavy backlogs, stacked PR chains, pre-release stabilization |
| **High-Velocity Feature/Bug Sprint** | OpenClaw, CoPaw, NanoClaw, NanoBot | 10–500 PRs/day, user-facing bugs fixed in hours, release candidates staging |
| **Stabilizing / Polish** | Moltis, LobsterAI | Security hardening, UX gaps closed, low open bug count, maintenance cadence |
| **Review-Constrained** | PicoClaw | 3 substantial PRs aging 29–35 days, zero merges, maintainer bandwidth bottleneck |
| **Dormant / Inactive** | NullClaw, TinyClaw, ZeptoClaw | Zero 24h activity, no releases, minimal community |

**Maturity Indicators:**
- **Production Hardening**: OpenClaw, IronClaw, ZeroClaw, Moltis show security-first fixes (Landlock, path-traversal, cross-user leaks, token disclosure)
- **Enterprise Readiness**: IronClaw (multi-tenant contracts), ZeroClaw (A2A, compliance), OpenClaw (masked secrets, audit trails) lead
- **User Onboarding Focus**: CoPaw (bundled Python, artifact access), LobsterAI (sidebar resize, keyboard hints, skeleton loading), Hermes (collapsible reasoning blocks)

---

## 7. Trend Signals for AI Agent Developers

### 1. **Session-State is the New Database**
Every project with >6-month history has hit session corruption, compaction failures, or restart-recovery bugs. **Investment in transcript projection correctness, crash-safe persistence, and category-separated memory (conversation vs. curated LT) is now table stakes.** Projects without this (NanoBot pre-SQLite, PicoClaw) are migrating urgently.

### 2. **Gateway Memory Management = Availability**
Unbounded RSS growth (OpenClaw 350MB→15.5GB, Hermes idle heap 2×, IronClaw p95 135s DB writes) causes silent OOM kills. **Byte-identical prompt prefixes for cache_control (IronClaw pi-harness), bounded provider state (OpenClaw #116201), and child-process reaping are survival features.**

### 3. **Secret Handling Moving from "Config" to "Runtime Boundary"**
Masked secrets (OpenClaw), KeySource abstraction (Zero

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-08-01

## 1. Today's Overview
NanoBot shows **high maintenance velocity** with 16 PRs updated and 4 issues addressed in the last 24 hours. The project is actively resolving platform compatibility issues (Termux, Windows MIME types), Weixin channel session recovery bugs, and WebUI performance bottlenecks. A major architectural migration from JSONL to SQLite session storage (#5173) was merged, indicating continued investment in scalability. No new releases were published, suggesting changes are accumulating for a future version bump. The 6 merged/closed PRs today demonstrate strong reviewer throughput.

## 2. Releases
**No new releases** in the last 24 hours. The project appears to be in a development accumulation phase with multiple fixes and features staged in open PRs.

## 3. Project Progress — Merged/Closed PRs (6)

| PR | Title | Category | Impact |
|----|-------|----------|--------|
| [#5196](https://github.com/HKUDS/nanobot/pull/5196) | fix(weixin): recover refreshed state after session expiry | Bug Fix (P2) | Resolves #5195: Weixin channel now reloads `account.json` after 60-min pause, preventing permanent silent failure loop |
| [#4223](https://github.com/HKUDS/nanobot/pull/4223) | fix(weixin): reload session state after pause expiry | Bug Fix (Channel) | Duplicate/alternative fix for same Weixin session expiry issue; closed in favor of #5196 |
| [#5192](https://github.com/HKUDS/nanobot/pull/5192) | fix(slack): scope channel thread openers to their own session | Bug Fix (P2) | Prevents unrelated Slack threads from sharing opening-turn context |
| [#5193](https://github.com/HKUDS/nanobot/pull/5193) | fix(webui): preserve user scroll ownership near tail | Bug Fix (P2) | Improves WebUI chat scrolling UX — user retains control when scrolling up slightly |
| [#5173](https://github.com/HKUDS/nanobot/pull/5173) | feat(session): migrate session storage from JSONL to SQLite | **Major Feature** | **Architectural migration**: `sessions.db` now sole runtime store; JSONL imported transactionally on first startup; enables WebUI session listing & Dream pruning via `SessionManager` |
| [#5189](https://github.com/HKUDS/nanobot/pull/5189) | fix(config): install timezone data on all platforms | Bug Fix (P1) | Fixes #5187: bundles `tzdata` for Termux/minimal Linux; enables `nanobot webui` on Android Termux |

**Key Advancement**: The SQLite migration (#5173) is the most significant change — it unblocks future session management features (search, export, stats) and improves concurrent access reliability.

## 4. Community Hot Topics

| Item | Activity | Signal |
|------|----------|--------|
| [#5195](https://github.com/HKUDS/nanobot/issues/5195) (Closed) | 2 comments, 0 👍 | **Weixin QR re-login flow broken** — user pain point: re-scanning QR immediately hits `errcode -14`; fixed by #5196 |
| [#5198](https://github.com/HKUDS/nanobot/issues/5198) (Open) | 0 comments | **Model switching UX gap** — users expect per-session model selection like SaaS UIs; `/model` command appears non-functional |
| [#5190](https://github.com/HKUDS/nanobot/issues/5190) (Open) | 0 comments | **Windows MIME type regression** — static `.js` served as `text/plain`; fix in #5191 |
| [#5184](https://github.com/HKUDS/nanobot/pull/5184) (Open) | 0 comments | **WebUI Quick/Temporary Chat** — feature request for ephemeral & persistent lightweight chat modes |

**Underlying Needs**: 
- **Multi-platform robustness** (Termux, Windows) is a recurring theme
- **Session/channel state recovery** reliability is critical for long-running bot deployments
- **WebUI parity with SaaS chat UX** (model switching, quick chat) is a user expectation gap

## 5. Bugs & Stability — Ranked by Severity

| Severity | Issue | Status | Fix PR |
|----------|-------|--------|--------|
| **Critical (Platform Block)** | [#5187](https://github.com/HKUDS/nanobot/issues/5187): `nanobot` fails on Termux (missing tzdata) | **Fixed** | [#5189](https://github.com/HKUDS/nanobot/pull/5189) merged |
| **Critical (Platform Block)** | [#5190](https://github.com/HKUDS/nanobot/issues/5190): Windows MIME type `text/plain` breaks module loading | Open | [#5191](https://github.com/HKUDS/nanobot/pull/5191) open |
| **High (Channel Reliability)** | [#5195](https://github.com/HKUDS/nanobot/issues/5195): Weixin re-login overwrites token → permanent `errcode -14` loop | **Fixed** | [#5196](https://github.com/HKUDS/nanobot/pull/5196) merged |
| **Medium (Session Integrity)** | [#5201](https://github.com/HKUDS/nanobot/pull/5201): Malformed persisted session summary crashes `AutoCompact` | Open (P1) | PR open with fix + tests |
| **Medium (Exec Reliability)** | [#5200](https://github.com/HKUDS/nanobot/pull/5200): `wait_for` targets lost on response truncation | Open (P1) | PR open with fix + regression test |
| **Medium (Slack UX)** | [#5192](https://github.com/HKUDS/nanobot/issues/5192): Thread openers share channel session | **Fixed** | [#5192](https://github.com/HKUDS/nanobot/pull/5192) merged |

**Stability Note**: Two P1 fixes (#5201, #5200) are open but have test coverage — likely to merge soon. The Termux and Weixin fixes are already merged, removing two critical deployment blockers.

## 6. Feature Requests & Roadmap Signals

| Feature | Evidence | Likelihood for Next Version |
|---------|----------|----------------------------|
| **DeepSeek Responses API support** | [#5197](https://github.com/HKUDS/nanobot/pull/5197) (Open, P1, tests) | **High** — provider expansion, reuses existing Responses machinery |
| **WebUI Quick Chat & Temporary Chat** | [#5184](https://github.com/HKUDS/nanobot/pull/5184) (Open) | **High** — UX parity with SaaS, reuses session/streaming stack |
| **Per-session model switching** | [#5198](https://github.com/HKUDS/nanobot/issues/5198) (Issue) | **Medium** — requires CLI + WebUI work; no PR yet |
| **Session export/import/search/stats** | [#1565](https://github.com/HKUDS/nanobot/pull/1565) (Open, conflict, 5 months old) | **Medium** — now unblocked by SQLite migration (#5173) |
| **Skill status CLI** | [#1319](https://github.com/HKUDS/nanobot/pull/1319) (Open, conflict, 5 months old) | **Low** — stalled, conflicts indicate design churn |
| **Validation None-handling** | [#1656](https://github.com/HKUDS/nanobot/pull/1656) (Open, conflict, 5 months old) | **Low** — minor fix, long-stalled |

**Prediction**: Next release will likely include DeepSeek Responses API, Quick/Temporary Chat, and the P1 stability fixes (#5201, #5200, #5191). Session management commands (#1565) are now feasible post-SQLite but need rebase.

## 7. User Feedback Summary

| Pain Point | Source | User Impact |
|------------|--------|-------------|
| **Termux incompatibility** | #5187 | "Why not? I was bored" — hobbyist/developer testing on mobile Linux blocked |
| **Weixin re-login broken** | #5195 | Production bot operators hit permanent silent failure after QR re-scan |
| **Windows WebUI broken** | #5190 | Frontend module loading fails on Windows due to registry MIME mismatch |
| **No per-session model switch** | #5198 | Power users forced to reconfigure entire instance to change models |
| **Scroll UX in long threads** | #5193 | WebUI auto-scroll fights user when reading history near bottom |

**Positive Signal**: Quick turnaround on Termux (#5187 → #5189 in 1 day) and Weixin (#5195 → #5196 same day) shows maintainers prioritize user-blocking bugs.

## 8. Backlog Watch — Stalled High-Value Items

| Item | Age | Blockers | Maintainer Action Needed |
|------|-----|----------|--------------------------|
| [#1565](https://github.com/HKUDS/nanobot/pull/1565) Session export/import/search/stats | 5 months | Merge conflicts (pre-SQLite schema) | **Rebase onto #5173** — now architecturally aligned; high user demand |
| [#1319](https://github.com/HKUDS/nanobot/pull/1319) Skill status CLI | 5 months | Merge conflicts, design scope creep | **Scope down** to MVP: `nanobot skill status` showing install/load health |
| [#1656](https://github.com/HKUDS/nanobot/pull/1656) Validation None-handling | 5 months | Merge conflicts | **Trivial fix** — apply to current validation code path |
| [#4223](https://github.com/HKUDS/nanobot/pull/4223) Weixin reload after pause (alt fix) | 2 months | Superseded by #5196 | **Close** — duplicate resolved |

**Recommendation**: Prioritize rebasing #1565 — the SQLite migration (#5173) was the prerequisite, and session management CLI is a top community ask. The two 5-month-old PRs (#1319, #1656) are low-effort wins if conflicts are resolved.

---

**Project Health Score**: 🟢 **Healthy** — High velocity, critical bugs fixed rapidly, architectural migration landed, clear roadmap signals. Main risk: stale PR backlog consuming reviewer attention.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-08-01

## 1. Today's Overview

Hermes Agent shows **exceptionally high velocity** with 50 issues and 50 PRs updated in the last 24 hours — a signal of both active development and accumulating technical debt. The project is in a **stabilization phase post-v0.19.1**, with multiple regression reports (Windows update failures, Telegram typing indicator, voice feedback loops) and a concerted "god-file decomposition" refactoring campaign targeting the largest platform adapters (Telegram: 9,184 lines, Matrix: 3,770 lines). No new release was cut today, but the volume of hotfix PRs suggests a patch release (v0.19.2) is imminent. Community engagement is strong: issues carry detailed reproduction steps, and several PRs directly close reported bugs within hours.

## 2. Releases

**No new releases today.** The latest tagged release remains v0.19.1 (2026-07-20). Given the cluster of regression fixes merged/opened today (PRs #75763, #75773, #75777, #75779, #75767, #75765, #75771), a **v0.19.2 patch** is likely within 24–48 hours. Maintainers should watch for:
- **Breaking change risk**: PR #75763 reapplies four local patches dropped by the 0.19.1 autostash — verify config migration paths.
- **Migration note**: Windows users on interrupted v0.19.1 installs need manual cleanup (Issue #75584).

## 3. Project Progress — Merged/Closed Today

| PR / Issue | Type | Summary | Link |
|------------|------|---------|------|
| #75768 | Bug fix (closed) | Telegram typing indicator stuck indefinitely in multi-profile setup (regression in v0.19.0) | [#75768](https://github.com/NousResearch/hermes-agent/issues/75768) |
| #75737 | Feature (closed) | Per-subagent toolset restriction in `delegate_task` — reduces token bloat | [#75737](https://github.com/NousResearch/hermes-agent/issues/75737) |
| #75763 | Bug fix (open PR) | Reapplies 4 local patches lost in 0.19.1 update (handoff/compression race, cursor retry, etc.) | [#75763](https://github.com/NousResearch/hermes-agent/pull/75763) |
| #75773 | Bug fix (open PR) | Bootstrap: strips mismatched-Python-version site-packages from `sys.path` | [#75773](https://github.com/NousResearch/hermes-agent/pull/75773) |
| #75779 | Bug fix (open PR) | Preserves MiniMax-M3 thinking blocks on `/anthropic` replay after tool calls | [#75779](https://github.com/NousResearch/hermes-agent/pull/75779) |
| #75767 | Bug fix (open PR) | Uses UUID for cross-session image upload filename uniqueness | [#75767](https://github.com/NousResearch/hermes-agent/pull/75767) |
| #75765 | Bug fix (open PR) | Uses canonical `strip_think_blocks` in max-iterations summary (fixes GLM/XM leaks) | [#75765](https://github.com/NousResearch/hermes-agent/pull/75765) |
| #75771 | Bug fix (open PR) | Salvages poll-loop guard + orphaned-pipe drain for process tool | [#75771](https://github.com/NousResearch/hermes-agent/pull/75771) |

**Net progress**: 2 issues closed, 7 high-impact bug-fix PRs opened (most targeting regressions from v0.19.1). The refactoring campaign advanced with 3 new decomposition PRs (#75787, #75754, #75741).

## 4. Community Hot Topics — Most Active Discussions

| Item | Comments | Core Need | Link |
|------|----------|-----------|------|
| **#52261** Provider memory/resource 400s misclassified as `context_overflow` → destructive compress/reset loop (local MLX/oMLX) | 6 | **Critical for local inference users**: error classification logic treats OOM as context overflow, triggering endless compression cycles that destroy session state | [#52261](https://github.com/NousResearch/hermes-agent/issues/52261) |
| **#75598** Windows update instability: multiple gateways conflicting, profile switching broken | 5 | **Windows desktop reliability**: update mechanism leaves orphaned processes/gateways; profile isolation broken | [#75598](https://github.com/NousResearch/hermes-agent/issues/75598) |
| **#72776** Session workspace hijacked to unrelated git repo when non-git workspace touches any git directory | 5 | **Session integrity**: TUI/CLI on Windows incorrectly rebases workspace context after tool calls enter git dirs | [#72776](https://github.com/NousResearch/hermes-agent/issues/72776) |
| **#43666** Redaction gaps at persistence boundary: tool output file dumps, compaction blocks, DB URIs | 4 | **Security compliance**: secrets (passwords) found in plaintext in `state.db` after one session — redaction not applied to all persistence paths | [#43666](https://github.com/NousResearch/hermes-agent/issues/43666) |
| **#72421** Auxiliary Azure Foundry calls fail with HTTP 401 (title gen, smart approval) while main conversation works | 4 | **Enterprise auth**: token propagation to background LLM tasks broken for Entra ID | [#72421](https://github.com/NousResearch/hermes-agent/issues/72421) |
| **#69161** Feature: "Collapse thinking/reasoning blocks by default" display setting (Desktop) | 4 (+1 👍) | **UX polish**: streaming reasoning blocks cause chat window scroll thrashing | [#69161](https://github.com/NousResearch/hermes-agent/issues/69161) |
| **#20717** Feature: Dynamic Context Pruning (proactive vs reactive compression) | 4 (+2 👍) | **Architecture**: give model first-class context management before window pressure | [#20717](https://github.com/NousResearch/hermes-agent/issues/20717) |

**Pattern**: Top issues cluster around **local inference reliability**, **Windows desktop stability**, **session/workspace integrity**, and **security boundaries** — all high-impact for power users and enterprise adopters.

## 5. Bugs & Stability — Ranked by Severity

| Severity | Issue | Description | Fix PR? |
|----------|-------|-------------|---------|
| **P0 (Crash/Regression)** | [#75584](https://github.com/NousResearch/hermes-agent/issues/75584) | Windows update fails after interrupted install: `hermes.exe` missing + `node_modules` ENOTEMPTY + "UPDATE DIDN'T FINISH" | — |
| **P0 (Crash/Regression)** | [#75780](https://github.com/NousResearch/hermes-agent/issues/75780) | CLI continuous voice barge-in transcribes TTS output → unbounded feedback loop (regression of #5485) | — |
| **P0 (Data Loss)** | [#52261](https://github.com/NousResearch/hermes-agent/issues/52261) | Local MLX/oMLX 400s misclassified as `context_overflow` → destructive compress/reset loop destroys session | — |
| **P1 (Security)** | [#43666](https://github.com/NousResearch/hermes-agent/issues/43666) | Secrets (passwords) in plaintext in `state.db` — redaction gaps at persistence boundary | — |
| **P1 (Security)** | [#7484](https://github.com/NousResearch/hermes-agent/issues/7484) | Session fixation via predictable session ID derivation (SHA256 of first message + system prompt) | — |
| **P1 (Regression)** | [#75768](https://github.com/NousResearch/hermes-agent/issues/75768) | Telegram typing indicator stuck indefinitely (multi-profile) — **CLOSED** but root cause may persist | ✅ Closed |
| **P2 (Functional)** | [#72776](https://github.com/NousResearch/hermes-agent/issues/72776) | Session workspace hijacked to unrelated git repo on Windows | — |
| **P2 (Functional)** | [#73060](https://github.com/NousResearch/hermes-agent/issues/73060) | Gateway `/stop` discards only queue head; FIFO overflow runs anyway | — |
| **P2 (Functional)** | [#75724](https://github.com/NousResearch/hermes-agent/issues/75724) | Full pre-update backup aborts on non-SQLite `.db` files in `HERMES_HOME` (Windows) | — |
| **P2 (Functional)** | [#70077](https://github.com/NousResearch/hermes-agent/issues/70077) | Restore checkpoint fails "session not found" after stop + edit + rerun | — |
| **P2 (Functional)** | [#75684](https://github.com/NousResearch/hermes-agent/issues/75684) | `/memory` and `/skills` use default profile home instead of routed profile in multiplex | — |
| **P2 (Platform)** | [#66392](https://github.com/NousResearch/hermes-agent/issues/66392) | Linux/X11: `computer_use` CUA pointer crashes KDE Plasma/Qt session (upstream cua-driver) | — |
| **P3 (Functional)** | [#75725](https://github.com/NousResearch/hermes-agent/issues/75725) | MiniMax-M3 interleaved thinking stops after first tool-call turn (`/anthropic` endpoint) | ✅ [#75779](https://github.com/NousResearch/hermes-agent/pull/75779) |
| **P3 (Functional)** | [#75708](https://github.com/NousResearch/hermes-agent/issues/75708) | mem0 plugin ignores `gateway_session_key` for user_id scoping on API server path | — |
| **P3 (Functional)** | [#74965](https://github.com/NousResearch/hermes-agent/issues/74965) | Telegram albums split across turns when sibling downloads finish after debounce | — |
| **P3 (Functional)** | [#60637](https://github.com/NousResearch/hermes-agent/issues/60637) | Email gateway UID trimming replays old unread mail in large inboxes | — |
| **P3 (Security)** | [#36645](https://github.com/NousResearch/hermes-agent/issues/36645) | `terminal/execute_code` bypasses `HERMES_WRITE_SAFE_ROOT` file safety | — |

**Fix coverage**: 2/17 high-severity bugs have open fix PRs (#75725, #75768). The Windows update cluster (#75598, #75584, #75724) and local inference loop (#52261) remain unaddressed.

## 6. Feature Requests & Roadmap Signals

| Feature | Issue | Signals | Likelihood (Next Version) |
|---------|-------|---------|---------------------------|
| **Dynamic Context Pruning** | [#20717](https://github.com/NousResearch/hermes-agent/issues/20717) | 4 comments, 2 👍; architectural shift from reactive compression → proactive model-managed context | Medium (needs design decision) |
| **Collapse reasoning blocks by default (Desktop)** | [#69161](https://github.com/NousResearch/hermes-agent/issues/69161) | 4 comments, 1 👍; UX polish, PR #75783 already implements for TUI | **High** (PR open for TUI, Desktop likely next) |
| **Per-subagent toolset restriction** | [#75737](https://github.com/NousResearch/hermes-agent/issues/75737) | Closed same-day; reduces token bloat 21→minimal toolsets | **High** (already merged/closed) |
| **Skill-to-skill dependencies (`depends_on`)** | [#71853](https://github.com/NousResearch/hermes-agent/issues/71853) | PR #75782 open; enforces install-time dependency graph | Medium |
| **Alibaba provider models: `qwen3.6-flash`, `deepseek-v4-flash/pro`** | [#19128](https://github.com/NousResearch/hermes-agent/issues/19128) | 4 comments; enterprise demand for Alibaba models | Low (provider catalog update) |
| **Discord outbound `@Name` → `<@id>` mention resolution** | [#69203](https://github.com/NousResearch/hermes-agent/issues/69203) | 2 comments; parity with Feishu adapter | Low |
| **Subagent non-convergence guardrail (opt-in)** | [#414...](https://github.com/NousResearch/hermes-agent/pull/68348) | PR #68348 open; detects child agents burning iterations without output | Medium (needs decision) |
| **Compute provider abstraction (Modal + computer-use)** | [#69086](https://github.com/NousResearch/hermes-agent/pull/69086) | PoC open; capability-driven tool attachment on leased sandboxes | Low (exploratory) |
| **Stream TTS into Discord voice channels while model writes** | [#75775](https://github.com/NousResearch/hermes-agent/pull/75775) | PR open; consumes existing streaming TTS producer | Medium |

**Roadmap read**: Near-term focus is **stabilization (v0.19.2)** + **TUI/Desktop UX polish** (collapsible reasoning, code block readability). Medium-term: **subagent governance** (toolset restriction, non-convergence guards, skill deps). Long-term: **compute provider abstraction**, **dynamic context pruning**.

## 7. User Feedback Summary — Pain Points & Use Cases

| Theme | Representative Voices | Sentiment |
|-------|----------------------|-----------|
| **Windows update/reliability crisis** | "problems started about a week ago... whole program unstable... multiple gateways running that are conflicting" (#75598); "hermes.exe missing + node_modules ENOTEMPTY + desktop UPDATE DIDN'T FINISH" (#75584); "full pre-update backup aborts when HERMES_HOME contains a non-SQLite .db file" (#75724) | 😡 **High frustration** — core install/update loop broken on Windows |
| **Local inference (MLX/oMLX) unusable** | "suspect this hits anyone running Hermes against a local MLX/oMLX server... destructive compress/reset loop" (#52261) | 😡 **Blocking** — error classification destroys sessions |
| **Session/workspace integrity** | "Session workspace hijacked to unrelated git repo when non-git workspace touches any git directory" (#72776); "Restore checkpoint fails with 'session not found' after stopping a request and editing the prompt" (#70077) | 😟 **Trust erosion** — users lose work/context |
| **Security/compliance gaps** | "23 plaintext hits of a password in state.db after one session" (#43666); "Session fixation via predictable session ID derivation" (#7484) | 😟 **Blocker for enterprise** — audit findings |
| **Voice UX regressions** | "CLI continuous voice barge-in transcribes TTS output and enters feedback loop" (#75780, regression of #5485) | 😡 **Regression** — previously fixed, now back |
| **Platform adapter quirks**

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-08-01

## 1. Today's Overview
PicoClaw shows steady maintenance activity with **5 active items updated yesterday** (2 issues, 3 PRs) but no merged code or releases in the last 24 hours. The project is in a **pre-release refinement phase** — contributors are polishing DeltaChat integration, adding a new Simplex channel, and designing a configurable model fallback chain, while two user-facing bugs (IRC message splitting, chat-input CPU spike) await triage. Overall health appears **stable but backlog-heavy**: several PRs have been open for 3–4 weeks without review, suggesting maintainer bandwidth constraints.

## 2. Releases
**No new releases** in the last 24 hours. The latest published version remains **v0.3.1** (per issue #3292 environment).

## 3. Project Progress
**No PRs merged or closed today.** All three active PRs are still in review:

| PR | Title | Status | Age | Key Changes |
|----|-------|--------|-----|-------------|
| [#3222](https://github.com/sipeed/picoclaw/pull/3222) | `refactor(deltachat): cleanup implementation, documentation -200LOC` | Open | 29 days | Removes legacy code, drops password-based email config, renames `invite_link` → `join_invite_link`, adds full DeltaChat docs section |
| [#3193](https://github.com/sipeed/picoclaw/pull/3193) | `Added simplex channel type` | Open | 35 days | New channel backend for SimpleX Chat (non-breaking feature) |
| [#3200](https://github.com/sipeed/picoclaw/pull/3200) | `feat(models): add configurable default fallback chain` | Open | 31 days | Web UI + backend API for defining/defaulting model fallback chains with drag-and-drop reordering |

**Signal:** The DeltaChat refactor (#3222) and model fallback chain (#3200) are likely candidates for the next minor release (v0.4.0), while SimpleX support (#3193) expands the channel ecosystem.

## 4. Community Hot Topics
| Item | Type | Activity | Core Need |
|------|------|----------|-----------|
| [#3287](https://github.com/sipeed/picoclaw/issues/3287) | Feature | 2 comments, updated 2026-07-31 | **IRCv3 long-message reassembly** — users need PicoClaw to stitch split IRC messages (>512 B) into single logical units for coherent AI responses. |
| [#3292](https://github.com/sipeed/picoclaw/issues/3292) | Bug (stale) | 1 comment, updated 2026-07-31 | **Chat-input focus CPU spike** (Debian/Firefox, v0.3.1) — high CPU when input box is focused, possibly a render-loop or event-listener leak in the web UI. |
| [#3222](https://github.com/sipeed/picoclaw/pull/3222) | PR | 29 days open, updated 2026-07-31 | **DeltaChat modernization** — maintainers cleaning technical debt before v0.4; community watching for breaking config changes. |

**Underlying theme:** Users are pushing PicoClaw into **multi-protocol, long-session scenarios** (IRC bridges, persistent web chat) where message integrity and resource efficiency become critical.

## 5. Bugs & Stability
| Severity | Issue | Description | Fix PR? |
|----------|-------|-------------|---------|
| **High** | [#3292](https://github.com/sipeed/picoclaw/issues/3292) | CPU usage spikes when chat input box is focused (web UI, Firefox/Debian). Affects laptop battery/thermal; no workaround. | ❌ None |
| **Medium** | [#3287](https://github.com/sipeed/picoclaw/issues/3287) | IRC messages >512 B are split by clients; PicoClaw treats fragments as separate messages, breaking context. | ❌ None |

**Note:** Both bugs are **user-visible regressions in v0.3.1** with no linked fix PRs. The CPU issue (#3292) is marked `stale` but recently updated — may need maintainer re-triage.

## 6. Feature Requests & Roadmap Signals
| Request | Source | Likelihood for Next Version | Rationale |
|---------|--------|-----------------------------|-----------|
| **IRCv3 message reassembly** | [#3287](https://github.com/sipeed/picoclaw/issues/3287) | 🟡 Medium | Protocol-compliance gap; requires IRC parser changes. |
| **Configurable model fallback chain** | [#3200](https://github.com/sipeed/picoclaw/pull/3200) | 🟢 High | PR already implements UI + API; near merge-ready. |
| **SimpleX Chat channel** | [#3193](https://github.com/sipeed/picoclaw/pull/3193) | 🟢 High | Non-breaking new channel; expands privacy-focused user base. |
| **DeltaChat config simplification** | [#3222](https://github.com/sipeed/picoclaw/pull/3222) | 🟢 High | Breaking config changes (password removal, field renames) signal v0.4.0 milestone. |

**Prediction:** v0.4.0 will likely bundle the DeltaChat refactor, model fallback chain, and SimpleX channel — a **protocol-expansion + UX-polish release**.

## 7. User Feedback Summary
| Pain Point | Evidence | Impact |
|------------|----------|--------|
| **Web UI performance** | #3292: CPU spike on input focus (Firefox, Debian) | Blocks daily usage for Linux/web users; laptop fans spin. |
| **IRC fragmentation** | #3287: Long messages split into incoherent fragments | Breaks AI context for IRC-bridged communities (e.g., Libera.Chat, OFTC). |
| **DeltaChat config friction** | #3222: Password-based config deprecated, secrets moved to JSON-RPC | Admins must migrate configs; documentation in flux. |
| **Positive** | #3193, #3200: Contributors actively adding channels + model UX | Community investing in extensibility; project direction aligned with multi-protocol AI assistant vision. |

## 8. Backlog Watch — Needs Maintainer Attention
| Item | Stale Since | Why It Matters |
|------|-------------|----------------|
| [#3193](https://github.com/sipeed/picoclaw/pull/3193) **SimpleX channel** | 2026-06-27 (35 days) | Complete feature PR, zero review comments. SimpleX is a growing privacy-first protocol; merging signals protocol diversity commitment. |
| [#3200](https://github.com/sipeed/picoclaw/pull/3200) **Model fallback chain** | 2026-07-01 (31 days) | High-value UX feature with UI + API; blocker for users managing multiple model providers. |
| [#3222](https://github.com/sipeed/picoclaw/pull/3222) **DeltaChat refactor** | 2026-07-03 (29 days) | **-200 LOC cleanup + breaking config changes**; must be reviewed before v0.4 to avoid migration chaos. |
| [#3292](https://github.com/sipeed/picoclaw/issues/3292) **Input-box CPU bug** | 2026-07-24 (8 days, marked `stale`) | User-facing perf regression; needs profiling + fix before next release. |
| [#3287](https://github.com/sipeed/picoclaw/issues/3287) **IRC long-message support** | 2026-07-22 (10 days) | Protocol compliance gap; affects all IRC-bridged deployments. |

---

**Bottom line:** PicoClaw is **feature-rich but review-constrained**. Three substantial PRs (+2 bugs) sit idle for weeks. Prioritizing review/merge of #3193, #3200, #3222 would unblock a strong v0.4.0, while #3292 and #3287 need quick triage to prevent user churn.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-08-01

## 1. Today's Overview
NanoClaw shows **high development velocity** with 18 total items updated in the last 24 hours (8 issues, 10 PRs), though all issues remain open indicating active triage rather than resolution. The project is in a **multi-track expansion phase**: hardening security boundaries (origin validation, log redaction), extending channel integrations (iMessage, Dial/SMS, Telegram voice), and pursuing runtime flexibility (Apple Container, native host mode, Kubernetes pod spawning). No new release shipped today; the last tagged release appears to be v2.1.54 (referenced in PR #3163). Community engagement is moderate—several issues carry 👍 but comment threads are short (1–3 comments), suggesting focused technical discussions rather than broad debate.

## 2. Releases
**No new releases today.**  
PR #3163 (closed) *restored the v2.1.54 release path*, implying a recent release pipeline issue that has been remediated. No changelog or breaking-change notes are visible in today’s data.

## 3. Project Progress — Merged / Closed PRs (2026-08-01)
| PR | Type | Summary | Impact |
|----|------|---------|--------|
| [#3165](https://github.com/nanocoai/nanoclaw/pull/3165) | Chore/Tooling | Codex/Copilot changes (closed same-day) | Internal dev-experience tweak |
| [#3163](https://github.com/nanocoai/nanoclaw/pull/3163) | Release Engineering | Restore v2.1.54 release path | Unblocks publishing; no user-facing change |
| [#1678](https://github.com/nanocoai/nanoclaw/pull/1678) | Docs/Skills | Update voice transcription skills for Telegram + Linux | Expands `use-local-whisper` beyond WhatsApp |
| [#3076](https://github.com/nanocoai/nanoclaw/pull/3076) | Feature/Skill | Unified local+hosted iMessage adapter targeting spectrum-ts v11 | Consolidates iMessage integration; supersedes earlier attempts |

**Net progress**: Release pipeline stabilized; iMessage and voice-transcription skills modernized; two low-risk tooling PRs landed.

## 4. Community Hot Topics (Most Active Items)
| Item | Type | Comments | 👍 | Core Need |
|------|------|----------|----|-----------|
| [#1184](https://github.com/nanocoai/nanoclaw/issues/1184) | Issue | 3 | 1 | **Deploy in restricted K8s (Sealos)** — user wants to run NanoClaw in locked-down clusters without privileged containers. |
| [#1732](https://github.com/nanocoai/nanoclaw/issues/1732) | Issue | 3 | 0 | **Native runner mode** — bypass Docker for tmux, headed browsers, macOS APIs; “container isolation is a hard blocker”. |
| [#2809](https://github.com/nanocoai/nanoclaw/pull/2809) | PR | – | 0 | **Apple Container runtime + remote OneCLI gateway** — env-gated `CONTAINER_RUNTIME=container`; work-in-progress since June. |
| [#2651](https://github.com/nanocoai/nanoclaw/pull/2651) | PR | – | 0 | **Validate pending question response origin** — security hardening for `ask_user_question`; open since May. |
| [#3041](https://github.com/nanocoai/nanoclaw/pull/3041) | PR | – | 0 | **Dial channel adapter (SMS + AI voice calls)** — new channel integration; awaiting review. |

**Underlying theme**: *Runtime portability* (K8s, native host, Apple Container) and *channel breadth* (iMessage, Dial, Telegram voice) are the top community pulls. Security hardening (#2651, #2923) runs in parallel but attracts less public discussion.

## 5. Bugs & Stability — Reported Today
| Severity | Issue | Summary | Fix PR? |
|----------|-------|---------|---------|
| **High** | [#3162](https://github.com/nanocoai/nanoclaw/issues/3162) | Telegram pairing permanently broken if boot-time `getMe` fails; no retry or user-visible error. | No |
| **Medium** | [#2923](https://github.com/nanocoai/nanoclaw/issues/2923) | `ask_user_question` card text can be spoofed via forged click before origin authz (display integrity). | Partially — [#2651](https://github.com/nanocoai/nanoclaw/pull/2651) adds origin validation but UI spoof remains. |
| **Medium** | [#2589](https://github.com/nanocoai/nanoclaw/issues/2589) | `host.docker.internal` unresolvable in Apple Container microVM; no `--add-host` support. | No |
| **Low** | [#2588](https://github.com/nanocoai/nanoclaw/issues/2588) | `skill/apple-container` branch out of sync with main; `/convert-to-apple-container` skill fails immediately. | Tracked in [#2809](https://github.com/nanocoai/nanoclaw/pull/2809) (WIP). |

**Stability signal**: Telegram channel has a **silent, permanent failure mode** (#3162) — highest user-impact bug today. Apple Container path is fundamentally broken until #2809 lands.

## 6. Feature Requests & Roadmap Signals
| Request | Source | Likelihood for Next Version |
|---------|--------|-----------------------------|
| **Native host runner (no Docker)** | [#1732](https://github.com/nanocoai/nanoclaw/issues/1732), [#1225](https://github.com/nanocoai/nanoclaw/issues/1225) | High — multiple users, clear use-cases (tmux, headed browsers, macOS APIs) |
| **Kubernetes pod spawning** | [#2354](https://github.com/nanocoai/nanoclaw/issues/2354) | Medium — 👍 1, aligns with enterprise deployment needs |
| **Apple Container as first-class runtime** | [#2809](https://github.com/nanocoai/nanoclaw/pull/2809) | High — PR open since June, env-gated, default unchanged |
| **Dial channel (SMS + AI voice)** | [#3041](https://github.com/nanocoai/nanoclaw/pull/3041) | Medium — feature-complete PR awaiting review |
| **Hosted iMessage (Photon) registration flow** | [#3164](https://github.com/nanocoai/nanoclaw/pull/3164) | High — supersedes stale #2999, core-team labeled |
| **Security reporting/triage policy** | [#2954](https://github.com/nanocoai/nanoclaw/pull/2954) | High — docs-only, core-team labeled, near merge |

**Prediction**: Next minor release (v2.1.55+) will likely ship Apple Container runtime, Dial channel, hosted iMessage, and the security policy. Native host runner and K8s pod spawning are larger architectural shifts likely targeting v2.2+.

## 7. User Feedback Summary
| Pain Point | Evidence | Sentiment |
|------------|----------|-----------|
| **Docker dependency blocks adoption** | #1184 (K8s), #1732 (tmux/browsers), #1225 (no Docker on Windows/Linux) | Frustrated but appreciative of minimalist design |
| **Apple Container support incomplete** | #2588, #2589 — branch broken, hostname resolution fails | Blocked; awaiting #2809 |
| **Telegram reliability** | #3162 — silent permanent pairing failure | Critical for affected users |
| **Security transparency** | #2954 (policy), #2923 (UI spoof), #2651 (origin validation) | Proactive hardening noticed; no complaints |
| **Skill discovery/updates** | #1678, #3076 — voice & iMessage skills modernized | Positive; reduces friction |

**Overall**: Users value NanoClaw’s minimalism and security posture but hit hard walls when environments forbid Docker or require host-level integrations. The project is responding with runtime plurality and channel expansion.

## 8. Backlog Watch — Stale / Needs Maintainer Attention
| Item | Age | Why It Matters | Suggested Action |
|------|-----|----------------|------------------|
| [#2651](https://github.com/nanocoai/nanoclaw/pull/2651) | 63 days | Security fix for `ask_user_question` origin validation; blocks full mitigation of #2923 | Request review / merge |
| [#2809](https://github.com/nanocoai/nanoclaw/pull/2809) | 44 days | Apple Container runtime + remote OneCLI gateway; unblocks #2588, #2589 | Prioritize review / CI validation |
| [#2954](https://github.com/nanocoai/nanoclaw/pull/2954) | 28 days | Security reporting & triage policy (docs only) | Quick merge — low risk |
| [#1732](https://github.com/nanocoai/nanoclaw/issues/1732) | 113 days | Native runner mode — high-value feature, no PR yet | Design discussion / spike PR |
| [#2354](https://github.com/nanocoai/nanoclaw/issues/2354) | 85 days | K8s pod spawning runtime — enterprise path | Assign owner / RFC |

---

**Health Indicators**  
- ✅ Active development (18 updates/24h)  
- ✅ Security-first mindset (multiple hardening PRs)  
- ⚠️ High-impact bug with no fix PR (#3162)  
- ⚠️ Several high-value PRs aging >4 weeks  
- 📈 Clear roadmap signals: runtime plurality + channel breadth  

*Data sourced from GitHub API snapshot 2026-08-01; all links point to nanocoai/nanoclaw.*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest — 2026-08-01

## 1. Today's Overview
NullClaw shows minimal activity in the last 24 hours with zero issue updates, zero merged/closed PRs, and no new releases. The sole active movement is PR #981, an open feature PR adding a `grok-cli` provider for xAI’s Grok CLI, which remains under review. Overall project velocity appears low; the repository is in a maintenance/feature-addition phase with no urgent bug firefighting or release pressure.

## 2. Releases
No new releases published today.

## 3. Project Progress
No PRs were merged or closed today. The only in-flight change is PR #981 (open), which introduces a new optional CLI-based provider delegating to the local `grok` binary. This follows the existing pattern used by `codex-cli`, `gemini-cli`, and `claude-cli` providers.

## 4. Community Hot Topics
| Item | Type | Activity | Summary |
|------|------|----------|---------|
| [PR #981](https://github.com/nullclaw/nullclaw/pull/981) | Feature PR | 0 comments, 0 👍 | Adds `grok-cli` provider for xAI Grok CLI. No community discussion yet; maintainers may want to solicit feedback on optional dependency handling and CLI version compatibility. |

*Underlying need:* Users want first-class support for the emerging xAI Grok CLI alongside existing CLI providers, indicating demand for multi-vendor LLM CLI integration.

## 5. Bugs & Stability
No bugs, crashes, or regressions reported or updated today.

## 6. Feature Requests & Roadmap Signals
- **Grok CLI provider** (PR #981) — The only active feature work. Given the pattern of adding CLI providers, the next likely candidates would be providers for other emerging local CLIs (e.g., `llama-cli`, `mistral-cli`) or enhancements to the provider abstraction (auto-detection, health checks).

## 7. User Feedback Summary
No user-facing issues, discussions, or feedback captured in the last 24 hours. The project currently lacks visible community pain points or satisfaction signals.

## 8. Backlog Watch
No long-unanswered issues or stale PRs surfaced in today’s data. The only open PR (#981) is two days old and still within a normal review window.

---

*Data source: GitHub API snapshot for nullclaw/nullclaw (issues, PRs, releases) as of 2026-08-01.*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-08-01

## 1. Today's Overview

IronClaw is in a **high-velocity architectural refactoring phase** with 50 PRs updated and 38 issues touched in the last 24 hours. The dominant theme is **Wave 1 of the target architecture migration** (WS1.1–WS1.7), extracting neutral contracts from `ironclaw_host_api` into dedicated crates (`ironclaw_loop_contracts`, `ironclaw_extension_contracts`, `ironclaw_product_contracts`) while sealing evidence minting and narrowing `ironclaw_common`. Simultaneously, a **P0 cache-performance program** (pi-harness adoption) has spawned 4 critical issues (#6984–#6987) to make prompt prefixes byte-identical across turns for Anthropic cache_control. Security regressions are active: a cross-user memory leak in shared channels (#6900) and shared home directory exposure (#6866). No releases shipped today.

---

## 2. Releases

**No new releases** in the last 24 hours. The automated release PR #5598 (opened 2026-07-03) remains open, proposing breaking changes to `ironclaw_common` (0.4.2 → 0.5.0) and `ironclaw_skills` (0.3.0 → 0.4.0).

---

## 3. Project Progress — Merged/Closed PRs Today

| PR | Title | Area | Impact |
|----|-------|------|--------|
| [#6977](https://github.com/nearai/ironclaw/pull/6977) | **refactor(contracts): extract ironclaw_extension_contracts and close dual import paths (WS1.3)** | Architecture | Carves extension-tier contracts out of `ironclaw_host_api`; repoints all consumers; closes dual import paths. |
| [#6975](https://github.com/nearai/ironclaw/pull/6975) | **refactor(contracts): extract ironclaw_loop_contracts and flip agent_loop (WS1.2)** | Architecture | Creates `crates/ironclaw_loop_contracts`; flips `ironclaw_agent_loop` onto it; adds enforcement + CI registration. |
| [#6967](https://github.com/nearai/ironclaw/pull/6967) | **refactor(contracts): complete turn vocabulary in host_api and retire turns shims (WS1.1)** | Architecture | Completes neutral turn vocabulary; retires shim layer. |
| [#6930](https://github.com/nearai/ironclaw/pull/6930) | **feat(extensions): register hosted MCP servers** | Extensions/MCP | Tenant-runtime registration for hosted MCP servers; auto-detects no-auth, bearer, OAuth; full lifecycle integration. |
| [#6908](https://github.com/nearai/ironclaw/pull/6908) | **fix(webui): paginate admin users list** | Admin UI | Fixes #6903 — cursor-based pagination for >100 users; adds loading/retry states. |
| [#6979](https://github.com/nearai/ironclaw/pull/6979) | **docs(target-architecture): reconcile with #6930 hosted-MCP registration** | Docs | Updates 5 markdown files to reflect hosted MCP server registration. |
| [#4022](https://github.com/nearai/ironclaw/pull/4022) | **fix(tools): HTTP response error is recoverable, not run-aborting** | Tools/Recovery | Reverts regression from #4014 where remote HTTP errors aborted entire agent runs. |
| [#3942](https://github.com/nearai/ironclaw/pull/3942) | **refactor(trace): PilotAllowlist enum + caller-level error-branch tests** | Tracing | Strong typing for PilotAllowlist; adds error-branch tests. |
| [#3952](https://github.com/nearai/ironclaw/pull/3952) | **feat(filesystem): TOCTOU-harden LocalFilesystem via fd-relative openat2/O_NOFOLLOW** | Security/FS | Kernel-race-free per-tenant filesystem boundary; highest-leverage multi-tenant security item. |

**Open but advancing** (stacked PR chain): [#6980](https://github.com/nearai/ironclaw/pull/6980) (WS1.4: `ironclaw_product_contracts` + adapter), [#6981](https://github.com/nearai/ironclaw/pull/6981) (WS1.5: sealed evidence minting), [#6982](https://github.com/nearai/ironclaw/pull/6982) (WS1.6/1.7: narrow `ironclaw_common`, shed product→runner edges), [#6938](https://github.com/nearai/ironclaw/pull/6938) (skills: model chooses skill, not keyword scorer), [#6917](https://github.com/nearai/ironclaw/pull/6917) (webui: authenticated workspace file previews), [#6973](https://github.com/nearai/ironclaw/pull/6973) (perf: recover Postgres capacity regressed by row-native process journal).

---

## 4. Community Hot Topics — Most Active Issues/PRs

| Item | Type | Comments | Core Need |
|------|------|----------|-----------|
| [#6284](https://github.com/nearai/ironclaw/issues/6284) | Issue (Epic) | 15 | **Error recoverability endgame** — every mid-run error must survive, be visible to model with cause + success hint, give model a turn to act, never report non-success as success. |
| [#6963](https://github.com/nearai/ironclaw/issues/6963) | Issue | 5 | **Path-keyed CI gates survival** — 8 gates (6 silent, 2 loud) still keyed to flat `crates/ironclaw_*` layout; block first `git mv` of WS10. |
| [#6524](https://github.com/nearai/ironclaw/issues/6524) | Issue (Epic) | 4 | **Hermetic capability/journey testing platform** — answer mechanically: does every supported capability & critical journey have deterministic coverage? |
| [#6940](https://github.com/nearai/ironclaw/issues/6940) | Issue (Bug) | 2 | **IronHub skill CTA 404s** — every skill's call-to-action button returns 404; ownership unclear. |
| [#6920](https://github.com/nearai/ironclaw/issues/6920) | Issue (Closed) | 2 | **Target-architecture baselines & exception ratchets** — prerequisite cleanup for WS0; now closed. |
| [#6565](https://github.com/nearai/ironclaw/issues/6565) | Issue (Epic) | 2 | **Reliable Skill Discovery, Routing, Activation** — model doesn't reliably find/select/activate best skill; keyword/regex pipeline not run in primary path. |

**Underlying pattern**: The project is simultaneously **re-architecting its crate graph** (WS1.x) and **hardening runtime correctness** (error recoverability, skill routing, hermetic testing). Contributors are tracking cross-cutting concerns via epics with many acceptance criteria.

---

## 5. Bugs & Stability — Ranked by Severity

| Severity | Issue | Summary | Fix PR? |
|----------|-------|---------|---------|
| **P0 (Security)** | [#6900](https://github.com/nearai/ironclaw/issues/6900) | **Cross-user memory leak**: shared-channel default subject binding collapses all users into operator's memory namespace. | No PR yet |
| **P0 (Security)** | [#6866](https://github.com/nearai/ironclaw/issues/6866) | **Shared home directory**: all users see all workspaces; privacy violation. | No PR yet |
| **P0 (Performance/Cache)** | [#6984](https://github.com/nearai/ironclaw/issues/6984) | **Cache**: missing explicit Anthropic `cache_control` breakpoints; relies on auto-caching. | No PR yet |
| **P0 (Performance/Cache)** | [#6985](https://github.com/nearai/ironclaw/issues/6985) | **Cache**: prompt prefix mutated per-run (nudges, timestamp, memory retrieval) — invalidates cached prefix. | No PR yet |
| **P0 (Performance/Cache)** | [#6986](https://github.com/nearai/ironclaw/issues/6986) | **Cache**: tool array not byte-identical — progressive disclosure promotes tools mid-run. | No PR yet |
| **P0 (Performance/Cache)** | [#6987](https://github.com/nearai/ironclaw/issues/6987) | **Cache**: regression test needed to pin byte-identical prompt prefix across turns. | No PR yet |
| **P1 (Token Accounting)** | [#6989](https://github.com/nearai/ironclaw/issues/6989) | **Token estimation** uses `content_ref` string length, not referenced content. | No PR yet |
| **P1 (Compaction)** | [#6988](https://github.com/nearai/ironclaw/issues/6988) | **Compaction** triggers at hardcoded 128k context limit instead of actual model window. | No PR yet |
| **P1 (Compaction)** | [#6990](https://github.com/nearai/ironclaw/issues/6990) | **Compaction summarization** must not pollute prompt cache or session affinity. | No PR yet |
| **P2 (Functional)** | [#6940](https://github.com/nearai/ironclaw/issues/6940) | IronHub skill CTA returns 404 for all skills. | No PR yet |
| **P2 (Auth)** | [#6972](https://github.com/nearai/ironclaw/issues/6972) | New account email authentication not working. | No PR yet |
| **P2 (Perf/DB)** | [#6974](https://github.com/nearai/ironclaw/issues/6974) | libSQL `thread_store_writes` p95 37–135s in tool-heavy stress cases (post-#6696). | PR [#6973](https://github.com/nearai/ironclaw/pull/6973) open |
| **P2 (CI)** | [#6978](https://github.com/nearai/ironclaw/issues/6978) | `reborn-tests.yml` workflow_dispatch fails roll-up: `critical-mutation` skipped but disallowed. | No PR yet |

**Note**: The 4 P0 cache issues (#6984–#6987) are part of the **pi-harness adoption program** (see PR [#6991](https://github.com/nearai/ironclaw/pull/6991) for the research doc). No fix PRs exist yet — they are day-0 filed.

---

## 6. Feature Requests & Roadmap Signals

| Signal | Source | Likelihood for Next Version |
|--------|--------|----------------------------|
| **Model-chosen skill activation** (not keyword scorer) | Epic [#6565](https://github.com/nearai/ironclaw/issues/6565), PR [#6938](https://github.com/nearai/ironclaw/pull/6938), sub-epic [#6941](https://github.com/nearai/ironclaw/issues/6941) | **High** — PR #6938 open and stacked; part of measured subset epic |
| **Admin-managed agents as UserId subjects** | Epic [#6578](https://github.com/nearai/ironclaw/issues/6578) | **Medium** — foundational for multi-tenant; no PR yet |
| **Migration tool for legacy agent setup/memory** | Issue [#6939](https://github.com/nearai/ironclaw/issues/6939) | **Medium** — user-facing switching cost blocker |
| **`hub` alias for `ironhub` CLI subcommand** | Issue [#6983](https://github.com/nearai/ironclaw/issues/6983) | **High** — trivial CLI alias; user-reported docs friction |
| **Standardize "Tools" vs "Extensions" terminology** | Issue [#6971](https://github.com/nearai/ironclaw/issues/6971) | **Medium** — product clarity; affects UI/docs |
| **Reborn → Ironclaw 1.0 branding on extensions page** | Issue [#6854](https://github.com/nearai/ironclaw/issues/6854) | **High** — simple string replace; external messaging consistency |
| **Linux service install: enable user lingering** | Issue [#6976](https://github.com/nearai/ironclaw/issues/6976) | **High** — unattended VM/server reliability; one-line systemd fix |
| **Hermetic E2E testing platform** | Epic [#6524](https://github.com/nearai/ironclaw/issues/6524), sync issue [#6962](https://github.com/nearai/ironclaw/issues/6962) | **Medium-long** — large infra investment; manual Notion sync underway |

---

## 7. User Feedback Summary

| Pain Point | Frequency | Evidence |
|------------|-----------|----------|
| **IronHub skill CTA broken (404)** | Single report, but "across all skills" | [#6940](https://github.com/nearai/ironclaw/issues/6940) — user unsure who owns property |
| **New account email auth fails** | Single report, blocks onboarding | [#6972](https://github.com/nearai/ironclaw/issues/6972) — "unable to authenticate and access product" |
| **Shared home directory = privacy leak** | Reported by tobias.holenstein | [#6866](https://github.com/nearai/ironclaw/issues/6866) — "all users can see all workspaces" |
| **High switching cost from legacy (Hermes/Openclaw)** | Multiple users resist clean slate | [#6939](https://github.com/nearai/ironclaw/issues/6939) — "no way to carry over prior setup, config, memory" |
| **CLI subcommand naming friction** | User preparing release docs | [#6983](https://github.com/nearai/ironclaw/issues/6983) — wants `hub` alias for `ironhub` |
| **Terminology confusion: Tools vs Extensions** | User asks for clarity | [#6971](https://github.com/nearai/ironclaw/issues/6971) — "whether product should conform to one term" |
| **Reborn branding still visible externally** | User-reported inconsistency | [#6854](https://github.com/nearai/ironclaw/issues/6854) — extensions page uses "Reborn" not "Ironclaw 1.0" |
| **Linux service install unreliable on VMs** | User on Debian/Proxmox | [#6976](https://github.com/nearai/ironclaw/issues/6976) — missing `loginctl enable-linger` |

**Sentiment**: Friction-heavy onboarding (auth, migration, CLI), privacy concern (shared FS), and polish gaps (404s, branding, terminology). No positive feedback captured in today's issues.

---

## 8. Backlog Watch — Long-Unanswered / Needs Maintainer Attention

| Item | Age | Why It Matters | Status |
|------|-----|----------------|--------|
| [#6284](https://github.com/nearai/ironclaw/issues/6284) **Error recoverability endgame** | Opened 2026-07-19 (13 days) | Epic with 5-part contract; defines runtime correctness floor. 15 comments but

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-08-01

## 1. Today's Overview
LobsterAI performed a significant **stale cleanup** on 2026-07-31, closing 4 long-standing issues (all created 2026-04-02) and merging 11 corresponding PRs in a single day. No new releases were published. The project shows a healthy pattern of batch-processing backlog items, with recent work focusing on UI/UX polish (sidebar resize, keyboard hints, skeleton loading), OAuth integration, and OpenClaw prompt-stability fixes. One PR (#2234) remains open from June, addressing cron yield descendant finalization. Overall activity is **maintenance-heavy with zero new feature proposals** in the last 24h.

## 2. Releases
**No new releases** in the last 24h. The last release PR (#2416 “Release/2026.7.31”) was merged but contains no changelog entries in the provided data.

## 3. Project Progress — Merged/Closed PRs (2026-07-31)

| PR | Area | Summary | Linked Issue |
|----|------|---------|--------------|
| [#1315](https://github.com/netease-youdao/LobsterAI/pull/1315) | Renderer / Sidebar | **Drag-to-resize sidebar** (180–480px), persists width, drag handle with `col-resize` cursor | Closes #1314 |
| [#1318](https://github.com/netease-youdao/LobsterAI/pull/1318) | Renderer / Sidebar | **Keyboard shortcut badges** (`<kbd>`) on “New Task” (Ctrl/Cmd+N) & “Search” (Ctrl/Cmd+F) with macOS/Win platform awareness | Closes #1317 |
| [#1320](https://github.com/netease-youdao/LobsterAI/pull/1320) | Renderer / Store | **Skeleton loading state** for session list via `sessionsLoaded` flag, eliminates “empty state flash” on startup | Closes #1319 |
| [#1321](https://github.com/netease-youdao/LobsterAI/pull/1321) | Settings | **Dismiss overlays** (cowork memory editor, model connection-test modal) when switching settings tabs | Fixes #1307 |
| [#1308](https://github.com/netease-youdao/LobsterAI/pull/1308) | Cowork | **Isolate home-screen input draft per agent** — prevents draft leakage when switching agents | — |
| [#172](https://github.com/netease-youdao/LobsterAI/pull/172) | Main / OAuth | **Antigravity OAuth integration** + OpenAI-compatible proxy support; SQLite persistence for OAuth profiles | — |
| [#2413](https://github.com/netease-youdao/LobsterAI/pull/2413) | OpenClaw | **Byte-stable live prompt tool-result history** — passes `aggregateMaxCharsOverride=null` to preserve prefix cache (DeepSeek hit-rate restored from ~57% → ~100%) | — |
| [#2414](https://github.com/netease-youdao/LobsterAI/pull/2414) | Cowork | **Prevent BTW tool protocol leakage** — sanitizes provider tool-call markup from side-chat results | — |
| [#2415](https://github.com/netease-youdao/LobsterAI/pull/2415) | OpenClaw | **Drop aggregate cap in live tool-result projection** — same cache-stability fix as #2413, different code path | — |
| [#2417](https://github.com/netease-youdao/LobsterAI/pull/2417) | Renderer / Sites | **Copy success feedback** for site URLs & share codes (reuses conversation copy icon) | — |
| [#2416](https://github.com/netease-youdao/LobsterAI/pull/2416) | Release | **Release/2026.7.31** — version bump (no changelog visible in data) | — |

**Net impact**: 4 UX polish features shipped, 3 OpenClaw cache-stability fixes, 1 OAuth provider added, 1 settings overlay bug fixed, 1 draft-isolation improvement.

## 4. Community Hot Topics
All 4 issues updated yesterday were **stale-closed with 2 comments each** — no new discussion. The most “active” by reaction count is flat (all 👍: 0).  
**Underlying needs** visible in the closed batch:
- **Resizable sidebar** → users on small/large screens need layout flexibility.
- **Visible keyboard shortcuts** → discoverability for power users.
- **Loading-state clarity** → eliminate confusion during cold start.
- **Table rendering fidelity** (#1311) — raw tag leakage & lack of hover-expand for truncated cells.

No new issues/PRs opened in the last 24h.

## 5. Bugs & Stability
| Severity | Bug | Status | Fix PR |
|----------|-----|--------|--------|
| **High** | Settings overlay (memory editor / model test modal) remains mounted as full-window `absolute inset-0` layer after tab switch, blocking clicks | ✅ Fixed | [#1321](https://github.com/netease-youdao/LobsterAI/pull/1321) |
| **High** | DeepSeek prefix cache hit-rate collapsed to ~57% due to live prompt rewriting unchanged tool-result history on every turn | ✅ Fixed | [#2413](https://github.com/netease-youdao/LobsterAI/pull/2413), [#2415](https://github.com/netease-youdao/LobsterAI/pull/2415) |
| **Medium** | BTW tool-call markup leaked into side-chat results | ✅ Fixed | [#2414](https://github.com/netease-youdao/LobsterAI/pull/2414) |
| **Low** | Session list shows “暂无历史记录” flash during initial load | ✅ Fixed | [#1320](https://github.com/netease-youdao/LobsterAI/pull/1320) |
| **Low** | Table cells render raw `<br>` tags; long text truncated without hover-expand | ✅ Fixed (stale-closed) | Implied in #1311 closure |

**No new bugs reported** in the last 24h.

## 6. Feature Requests & Roadmap Signals
| Request | Source | Likelihood for Next Version |
|---------|--------|-----------------------------|
| **Cron yield descendant finalization** (multi-round parent/child agent continuation) | Open PR [#2234](https://github.com/netease-youdao/LobsterAI/pull/2234) (stale, 1 month old) | **High** — only open feature PR, covers 3 scenarios, test plan drafted |
| **Table hover-expand for truncated text** | Closed issue #1311 | **Medium** — UX polish, already acknowledged |
| **Antigravity OAuth provider** | Merged PR #172 | **Done** — shipped in cleanup batch |
| **Per-agent home-screen draft isolation** | Merged PR #1308 | **Done** |

**Prediction**: Next version will likely include the cron yield fix (#2234) plus any accumulated patches since 2026.7.31.

## 7. User Feedback Summary
- **Pain points** (from stale issues):  
  - Fixed sidebar width frustrates both small-screen (too wide) and large-screen (truncated titles) users.  
  - Hidden keyboard shortcuts increase onboarding friction.  
  - Cold-start “empty state flash” causes momentary data-loss anxiety.  
  - Table rendering shows raw HTML tags; no way to read full truncated cell content.
- **Satisfaction signals**:  
  - All four pain points addressed and merged in one day — maintainers responsive to backlog.  
  - DeepSeek cache regression (57% → 100%) fixed promptly, indicating performance sensitivity.
- **Use cases**: Multi-agent workflows (cron, parallel/serial child agents), OAuth provider diversity, long-context sessions where prefix cache matters.

## 8. Backlog Watch
| Item | Age | Risk | Action Needed |
|------|-----|------|---------------|
| [#2234](https://github.com/netease-youdao/LobsterAI/pull/2234) **fix(openclaw): cron yield descendant finalization** | Open since 2026-06-30 (32 days) | **High** — only open feature PR, enables multi-round agent orchestration; test plan incomplete (checkboxes unchecked) | **Maintainer review & test execution** — unblock for merge |
| [#1311](https://github.com/netease-youdao/LobsterAI/issues/1311) Table raw-tag / hover-expand | Closed stale 2026-07-31 | **Low** — fixed in cleanup, but verify table rendering regression tests exist | Add automated visual test for table cells |
| [#172](https://github.com/netease-youdao/LobsterAI/pull/172) Antigravity OAuth | Merged stale 2026-07-31 | **Low** — new provider; monitor for auth-edge cases in production | Telemetry on OAuth success/failure rates |

---

**Bottom line**: LobsterAI executed a **high-efficiency backlog flush** yesterday, delivering 4 user-facing UX improvements and 3 critical cache-stability fixes. The sole remaining open work is the cron yield continuation PR (#2234), which should be the immediate focus for the next release cycle. Project health: **stable, maintainer-responsive, low open bug count**.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-08-01

## 1. Today's Overview
Moltis shows steady development velocity with **8 total updates** (2 issues, 6 PRs) in the last 24 hours. The project is actively hardening security (two critical path-fix PRs), expanding protocol support (NIP-29 group chat for Buzz/Nostr), and delivering a long-requested UX feature (Markdown copy/export). No new release was cut today, but two PRs were merged—one closing a feature request from June. Open PR count remains healthy at 4, indicating continuous flow without backlog stagnation.

## 2. Releases
No new releases published today.

## 3. Project Progress — Merged/Closed PRs
| PR | Title | Type | Impact |
|----|-------|------|--------|
| [#1168](https://github.com/moltis-org/moltis/pull/1168) | `feat(nostr): add NIP-29 group chat support for Buzz channels` | Feature | **Major protocol expansion** — enables Moltis to interoperate with Block’s Buzz workspace via NIP-29 group chat over NIP-42 auth. Opens path for decentralized multi-agent/human team channels. |
| [#1176](https://github.com/moltis-org/moltis/pull/1176) | `feat(web): add Markdown copy and session export` | Feature | **Closes #1131** — users can now copy assistant replies as raw Markdown (preserving formatting, images, no model metadata) and export full sessions with paginated history. Directly addresses a top-voted enhancement. |

## 4. Community Hot Topics
| Item | Activity | Signal |
|------|----------|--------|
| [#1170](https://github.com/moltis-org/moltis/pull/1170) `fix(channels): gate /sh and privileged tools behind per-account operators list` | Updated **today** (2026-08-01), open | **Access-control hardening** — separates *channel access* from *privileged command execution* (host tools, `/sh`). Critical for multi-tenant or semi-trusted deployments. |
| [#1180](https://github.com/moltis-org/moltis/pull/1180) `fix(security): harden model and zip paths` | Created & updated **yesterday**, open | **High-severity supply-chain fixes** — prevents arbitrary file write via malicious HuggingFace repos or zip archives (path-traversal → RCE). Author states they want these in before adopting Moltis. |
| [#1181](https://github.com/moltis-org/moltis/issues/1181) `[Bug]: Issue with GPT 5.6 Luna` | Created **yesterday**, 0 comments | **New model compatibility regression** — early report, no reproduction yet. Watch for follow-up; may indicate provider-API drift. |

> **Underlying needs**: Contributors are prioritizing **production hardening** (operator gates, path sanitization) and **protocol interoperability** (Nostr/Buzz) over net-new features—signaling a move toward 1.0 stability.

## 5. Bugs & Stability
| Severity | Issue/PR | Status | Fix PR |
|----------|----------|--------|--------|
| **Critical (RCE vector)** | Zip/HF repo path traversal → arbitrary file write | Reported in [#1180](https://github.com/moltis-org/moltis/pull/1180) | **Yes — #1180** (open, ready for review) |
| **High** | Missing signature verification on node pairing | Reported in [#1179](https://github.com/moltis-org/moltis/pull/1179) | **Yes — #1179** (open, ready for review) |
| **Medium** | GPT 5.6 "Luna" compatibility regression | [#1181](https://github.com/moltis-org/moltis/issues/1181) (open) | None yet |
| **Low** | Markdown copy/export missing | [#1131](https://github.com/moltis-org/moltis/issues/1131) | **Fixed — #1176 merged** |

> **Action**: Security PRs #1179 and #1180 should be fast-tracked; they block adoption for at least one prospective user.

## 6. Feature Requests & Roadmap Signals
| Request | Source | Likelihood for Next Release |
|---------|--------|-----------------------------|
| **NIP-29 group chat (Buzz)** | [#1168](https://github.com/moltis-org/moltis/pull/1168) merged | ✅ **Shipped** |
| **Markdown copy/export** | [#1131](https://github.com/moltis-org/moltis/issues/1131) → [#1176](https://github.com/moltis-org/moltis/pull/1176) merged | ✅ **Shipped** |
| **Zvec/redb vector memory backend** | [#1158](https://github.com/moltis-org/moltis/pull/1158) (open, feature-gated) | 🟡 **Experimental** — behind `zvec` flag; needs benchmarking & review |
| **Per-account operator gates** | [#1170](https://github.com/moltis-org/moltis/pull/1170) (open) | 🟢 **High** — security-critical, clean diff |
| **GPT 5.6 Luna support** | [#1181](https://github.com/moltis-org/moltis/issues/1181) (open) | 🟡 **Reactive** — depends on provider API stability |

## 7. User Feedback Summary
- **Positive**: Markdown export (#1131, +1 👍) delivered quickly after request (44 days); user-facing UX gap closed.
- **Security-conscious adopters**: At least one user (tsauvajon) is **blocking adoption** on two hardening fixes (#1179, #1180)—indicates Moltis is evaluated for production/trusted workloads.
- **Protocol integrators**: NIP-29/Buzz support signals demand for **decentralized, relay-based agent-team workspaces**.
- **Experimental backend users**: PR #1158 author runs embedding model on independent `llama-cpp-server` — shows community building custom RAG stacks on Moltis.

## 8. Backlog Watch — Items Needing Maintainer Attention
| Item | Age | Why It Matters |
|------|-----|----------------|
| [#1179](https://github.com/moltis-org/moltis/pull/1179) `fix(gateway): verify node pairing signatures` | 1 day | **AuthZ bypass risk** — pending request binding not enforced. Small, focused fix. |
| [#1180](https://github.com/moltis-org/moltis/pull/1180) `fix(security): harden model and zip paths` | 1 day | **RCE via supply chain** — two independent path-traversal bugs. High leverage. |
| [#1170](https://github.com/moltis-org/moltis/pull/1170) `fix(channels): gate /sh and privileged tools` | 6 days | **Privilege separation** — prevents channel members from escalating to host commands. |
| [#1158](https://github.com/moltis-org/moltis/pull/1158) `feat(memory): add zvec vector database memory backend` | 15 days | **Alternative vector backend** — feature-gated, but needs perf/accuracy review before default enable. |
| [#1181](https://github.com/moltis-org/moltis/issues/1181) `Bug: Issue with GPT 5.6 Luna` | 1 day | **New model regression** — triage needed; may require provider adapter update. |

---

**Health Indicators**  
🟢 **Security responsiveness**: Two critical fixes opened same day as discovery.  
🟢 **Feature delivery**: Top-voted enhancement shipped in < 2 months.  
🟡 **Review throughput**: 4 open PRs, 2 merged today — maintainers keeping pace.  
🟡 **Issue triage**: New bug (#1181) uncommented; assign owner for reproduction.

**Next likely release**: Security patch (v0.x.y+1) merging #1179, #1180, #1170 + NIP-29 + Markdown export.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (QwenPaw) Project Digest — 2026-08-01

## 1. Today's Overview
CoPaw (QwenPaw) shows **high velocity with 61 total updates** (20 issues + 41 PRs) in the last 24 hours, signaling an active stabilization sprint around v2.0.1. The ratio of open PRs (28) to merged/closed (13) suggests maintainers are triaging a backlog of fixes—particularly around **AgentScope 2.0.4 compatibility, shell-command reliability, memory/dream subsystem correctness, and desktop UX polish**. No new release was cut today, but multiple merged PRs (#6573, #6592, #6602, #6606) indicate imminent patch candidates. Community engagement is strong: several first-time contributors have PRs under review, and critical regressions (agent.json corruption, skill-tag loss, empty-model-response) have attracted rapid fix attempts.

---

## 2. Releases
**No new releases today.**  
Current latest: **v2.0.1 (Desktop)**. The open PRs #6573 (audio transcription), #6592 (memory flush), #6602 (session integrity), #6606 (read_file numeric ranges) and #6528 (agent.json corruption) are all merged/closed and likely candidates for a **v2.0.2** patch release. Watch for breaking changes in AgentScope dependency pinning (#6612, #6615).

---

## 3. Project Progress — Merged / Closed PRs Today
| PR | Type | Summary | Linked Issue |
|----|------|---------|--------------|
| [#6573](https://github.com/agentscope-ai/CoPaw/pull/6573) | **Bug Fix** | Restore audio transcription for channel messages (Feishu/OneBot) broken after AgentScope 2.0 migration | #6544 |
| [#6592](https://github.com/agentscope-ai/CoPaw/pull/6592) | **Bug Fix** | Flush Auto-Memory before Scroll context eviction; fixes early-session events missing from daily memory | #6555 |
| [#6602](https://github.com/agentscope-ai/CoPaw/pull/6602) | **Bug Fix** | Preserve in-flight streams & messages when switching Coding↔Chat modes or sessions | #6558 |
| [#6606](https://github.com/agentscope-ai/CoPaw/pull/6606) | **Bug Fix** | `read_file` now accepts numeric-string line ranges (e.g., `"10-20"`) | — |
| [#6563](https://github.com/agentscope-ai/CoPaw/issues/6563) | **CI Fix** | `real-behavior-proof.yml` workflow unblocked for fork PRs (Resource not accessible by integration) | #6563 |
| [#6529](https://github.com/agentscope-ai/CoPaw/issues/6529) | **Bug Fix** | ACP `new_session` response now includes `models` field for client model discovery | #6529 |

**Net progress:** 6 user-visible bugs fixed, CI unblocked for external contributors, ACP protocol compliance improved.

---

## 4. Community Hot Topics (Most Comments / Reactions)
| Item | Type | Comments | 👍 | Core Need |
|------|------|----------|-----|-----------|
| [#6537](https://github.com/agentscope-ai/CoPaw/issues/6537) | Bug | 10 | 0 | **Skill tags persist to disk but vanish on restart** — manifest reconciliation discards them; regression of #3270 |
| [#6601](https://github.com/agentscope-ai/CoPaw/issues/6601) | Bug | 5 | 0 | **Silent empty responses** when context window nears limit — no error surfaced, session stalls |
| [#6563](https://github.com/agentscope-ai/CoPaw/issues/6563) | CI Bug | 5 | 0 | **All fork PRs blocked** by `real-behavior-proof.yml` — now fixed via #6563 (closed) |
| [#6588](https://github.com/agentscope-ai/CoPaw/issues/6588) | Bug | 4 | 0 | **`spawn_subagent` single-task mode broken** — `batch` required in schema despite `None` default |
| [#6083](https://github.com/agentscope-ai/CoPaw/issues/6083) | Feature | 4 | 0 | **Desktop: one-click workspace artifact access** — users leave app to find generated files |
| [#6160](https://github.com/agentscope-ai/CoPaw/issues/6160) | Question | 4 | 0 | **Bundled Python runtime** — Windows users lack system Python; Conda envs not detected |

**Signal:** Desktop UX (artifact access, bundled Python, input-box visibility #6549) and **silent-failure resilience** (empty responses, shell timeouts, memory gaps) are top community pain points.

---

## 5. Bugs & Stability — Ranked by Severity
| Severity | Issue | Status | Fix PR |
|----------|-------|--------|--------|
| **Critical** | [#6520](https://github.com/agentscope-ai/CoPaw/issues/6520) `agent.json` systemic corruption (BOM, missing quotes, double-encoding) on Windows | Open | [#6528](https://github.com/agentscope-ai/CoPaw/pull/6528) (open, first-time contributor) |
| **Critical** | [#6612](https://github.com/agentscope-ai/CoPaw/issues/6612) QwenPaw 2.0.1 + AgentScope 2.0.4.post1: proactive crashes (`Msg.content` type) & tool-permission deadlock | Open | [#6615](https://github.com/agentscope-ai/CoPaw/pull/6615) (open) |
| **High** | [#6608](https://github.com/agentscope-ai/CoPaw/issues/6608) Long shell commands bypass timeout, orphan subprocess, block Feishu session 1.5h | Open | [#6610](https://github.com/agentscope-ai/CoPaw/pull/6610) (open) |
| **High** | [#6589](https://github.com/agentscope-ai/CoPaw/issues/6589) `execute_shell_command` huge output freezes UI (main-thread render) | Open | [#6610](https://github.com/agentscope-ai/CoPaw/pull/6610) (open) |
| **High** | [#6537](https://github.com/agentscope-ai/CoPaw/issues/6537) Skill tags lost on restart (regression) | Open | — |
| **Medium** | [#6601](https://github.com/agentscope-ai/CoPaw/issues/6601) Silent empty response near context limit | Open | — |
| **Medium** | [#6588](https://github.com/agentscope-ai/CoPaw/issues/6588) `spawn_subagent` single-task unusable | Open | [#6609](https://github.com/agentscope-ai/CoPaw/pull/6609) (open) |
| **Medium** | [#6555](https://github.com/agentscope-ai/CoPaw/issues/6555) Dream/memory misses early events scrolled out before daily MD | Closed | [#6592](https://github.com/agentscope-ai/CoPaw/pull/6592) (merged) |
| **Medium** | [#6558](https://github.com/agentscope-ai/CoPaw/issues/6558) Session UI: messages lost on mode/session switch | Closed | [#6602](https://github.com/agentscope-ai/CoPaw/pull/6602) (merged) |
| **Medium** | [#6544](https://github.com/agentscope-ai/CoPaw/issues/6544) Feishu audio transcription silent failure | Closed | [#6573](https://github.com/agentscope-ai/CoPaw/pull/6573) (merged) |

**Watchlist:** #6520 (data corruption), #6612 (dependency incompatibility), #6608/#6589 (shell subsystem) have active fix PRs but not yet merged.

---

## 6. Feature Requests & Roadmap Signals
| Request | Issue | Likelihood for Next Version |
|---------|-------|-----------------------------|
| **Desktop: workspace artifact quick-access button** | [#6083](https://github.com/agentscope-ai/CoPaw/issues/6083) | High — clear UX gap, 4 comments, aligned with #6607 (global hotkey) |
| **Bundled / embedded Python runtime** | [#6160](https://github.com/agentscope-ai/CoPaw/issues/6160) | Medium — Windows-onboarding blocker, needs packaging work |
| **Collapsible thought/tool traces in Console** | [#6260](https://github.com/agentscope-ai/CoPaw/issues/6260) | Medium — 1 👍, UX polish, low backend impact |
| **Unified cleanup page (memory, backups, workspaces, inbox)** | [#6593](https://github.com/agentscope-ai/CoPaw/issues/6593) | Low-Medium — new scope, but addresses storage bloat complaints |
| **Rename “QwenPaw Desktop” → “QwenPaw”** | [#6587](https://github.com/agentscope-ai/CoPaw/issues/6587) | Trivial — likely in next desktop build |
| **NVIDIA NIM provider support** | [#6526](https://github.com/agentscope-ai/CoPaw/pull/6526) | High — PR open, extends provider ecosystem |
| **Global-hotkey floating quick-input (Doubao-style)** | [#6607](https://github.com/agentscope-ai/CoPaw/pull/6607) | High — PR open, implements #6568 |

**Predicted v2.0.2 scope:** AgentScope compat fixes, shell-command hardening, memory flush, audio transcription, session integrity, agent.json safe I/O, ACP models field.  
**Predicted v2.1 scope:** Desktop UX bundle (artifact access, bundled Python, collapsible traces, global hotkey), provider unification (#6302), NIM provider.

---

## 7. User Feedback Summary — Real Pain Points
| Theme | Representative Voices |
|-------|----------------------|
| **Silent failures erode trust** | “Model returns empty response, QwenPaw doesn’t error — session dies” (#6601); “Cron shows success but WeChat push never arrives” (#6614) |
| **Data loss on restart / switch** | “Skill tags vanish after reboot” (#6537); “Switching modes loses last message” (#6558); “Early session events never make it to memory” (#6555) |
| **Shell subsystem unreliability** | “1.5h orphan process blocks entire Feishu session” (#6608); “Huge output freezes UI, must force-kill” (#6589); “Output truncated >30KB” (#6512) |
| **Windows onboarding friction** | “agent.json corrupted by BOM / sync tools” (#6520); “No system Python, Conda not detected” (#6160); “Input box hidden at 150% scaling” (#6549) |
| **Desktop UX gaps** | “Must leave app to open workspace files” (#6083); “Thought traces drown results” (#6260); “No cleanup UI, storage grows unbounded” (#6593) |
| **Integration protocol gaps** | “ACP `new_session` lacks `models` field — client can’t list models” (#6529) |

**Sentiment:** Users appreciate the agent capabilities but are **frustrated by desktop polish, Windows compatibility, and silent failure modes** that break long-running or unattended workflows.

---

## 8. Backlog Watch — Stale / High-Impact Items Needing Maintainer Attention
| Item | Age | Why It Matters |
|------|-----|----------------|
| [#6083](https://github.com/agentscope-ai/CoPaw/issues/6083) Desktop workspace artifact access | 18 days | High user impact, low complexity, blocks non-technical users |
| [#6160](https://github.com/agentscope-ai/CoPaw/issues/6160) Bundled Python runtime | 16 days | Windows adoption blocker; needs packaging decision |
| [#6260](https://github.com/agentscope-ai/CoPaw/issues/6260) Collapsible thought traces | 13 days | UX debt, 1 👍, improves readability significantly |
| [#6520](https://github.com/agentscope-ai/CoPaw/issues/6520) `agent.json` corruption | 4 days | **Critical data-loss bug**; PR #6528 waiting review |
| [#6612](https://github.com/agentscope-ai/CoPaw/issues/6612) AgentScope 2.0.4 incompatibility | 1 day | **Blocks upgrades**; PR #6615 waiting review |
| [#6537](https://github.com/agentscope-ai/CoPaw/issues/6537) Skill tags regression | 4 days | Regression of #3270; no fix PR yet |
| [#6601](https://github.com/agentscope-ai/CoPaw/issues/6601) Silent empty response | 1 day | Framework-level; needs model-layer guard |
| [#6512](https://github.com/agentscope-ai/CoPaw/issues/6512) Shell output truncation / auto-file | 4 days | Related to #6589/#6608; needs streaming or file-spool design |

---

**Bottom line:** CoPaw is in a **stabilization sprint** — core bugs are being fixed rapidly (6 merged today), but **Windows data integrity, AgentScope version lockstep, and shell-command robustness** remain the highest-risk areas. Desktop UX polish (artifact access, bundled Python, collapsible traces) is the most requested feature cluster and would significantly widen the non-developer audience.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-08-01

## 1. Today's Overview

ZeroClaw shows **high architectural churn with zero releases** — 50 issues and 50 PRs updated in 24 hours signals intense design-phase activity rather than shipping velocity. The issue queue is dominated by RFCs (28 of 30 top issues are `type:rfc`), indicating the project is in a **major architectural redesign phase** across memory, security, plugin runtime, observability, and agent autonomy. PR activity leans toward bug fixes and incremental enhancements (13 merged/closed), but no release has cut since the last cycle. Project health: **active but pre-release**, with maintainer review capacity appearing as the primary bottleneck (nearly every RFC carries `needs-maintainer-review`).

---

## 2. Releases

**No new releases today.** The last published version remains unlisted in the data. Given the volume of open RFCs with `risk:high` and `priority:p1/p2`, a release cut is unlikely until several architectural tracks converge.

---

## 3. Project Progress — Merged / Closed PRs (13 total)

| PR | Type | Summary | Impact |
|----|------|---------|--------|
| [#9279](https://github.com/zeroclaw-labs/zeroclaw/pull/9279) | **Bug fix (zerocode)** | Fixed picker modal width measurement using display cells (not Unicode scalars); adds CJK regression tests | UX stability for terminal UI |
| [#9292](https://github.com/zeroclaw-labs/zeroclaw/pull/9292) | **Bug fix (zerocode)** | Preserves session picker scroll offset for mouse hit-testing | UX stability |
| [#8438](https://github.com/zeroclaw-labs/zeroclaw/pull/8438) | **Feature (cron)** | Adds `shell_output_format` config for raw stdout output (default stays wrapped) | Operator flexibility for cron jobs |
| [#6724](https://github.com/zeroclaw-labs/zeroclaw/issues/6724) | **Bug fix (channel/daemon)** | Fixed crashloop when Signal/Voice Call channels enabled with empty credentials | **High-severity stability** — supervisor restart loop eliminated |
| [#8973](https://github.com/zeroclaw-labs/zeroclaw/issues/8973) | **Bug fix (runtime/security)** | Landlock sandbox now allows `/dev/null` access for shell tool on Fedora | **High-severity** — shell tool was completely broken under Landlock |

**Pattern:** Recent merges are **targeted bug fixes** (crashloops, sandbox breaks, UI regressions) rather than RFC implementations. The RFC pipeline remains in design review.

---

## 4. Community Hot Topics — Most Discussed Issues & PRs

| Item | Comments | Core Need |
|------|----------|-----------|
| [#9048](https://github.com/zeroclaw-labs/zeroclaw/issues/9048) RFC: Separate conversation history from agent-curated long-term memory | 14 | **Memory architecture split** — runtime still mixes session turns (`MemoryCategory::Conversation`) with curated long-term memory; want clean lifecycle boundary |
| [#9127](https://github.com/zeroclaw-labs/zeroclaw/issues/9127) RFC: Abstract `KeySource` trait for master-key classification | 11 | **Secret management maturity** — 93 `#[secret]` fields, 59 `#[credential_class]` fields; need deployment-form-aware key sourcing (HSM, KMS, file, env) |
| [#7155](https://github.com/zeroclaw-labs/zeroclaw/issues/7155) RFC: Per-execution confirmation tier for high-risk shell commands | 9 | **Security UX gap** — current `auto_approve`/wildcard/session allow is too coarse; want Claude Code-style allow/ask/deny per command pattern |
| [#8933](https://github.com/zeroclaw-labs/zeroclaw/issues/8933) RFC: Cross-turn conversation correlation in OTel export | 9 | **Observability** — need `gen_ai.conversation.id` propagated through turn lifecycle for distributed tracing |
| [#9106](https://github.com/zeroclaw-labs/zeroclaw/issues/9106) RFC: A2A outbound client (`A2ATool`) | 8 | **Inter-agent collaboration** — inbound A2A server exists (v0.8.2); outbound missing, forcing chat-relay workarounds |
| [#6850](https://github.com/zeroclaw-labs/zeroclaw/issues/6850) RFC: Decouple memory lifecycle policy from storage backends | 7 | **Architecture** — `Memory` trait conflates storage ops with consolidation/governance; want policy layer separate from backends |
| [#6909](https://github.com/zeroclaw-labs/zeroclaw/issues/6909) RFC: Computer-use support for desktop screen interaction | 7 | **New capability** — secure-by-default desktop automation (screen perception, a11y, input); sidecar `browser.backend="computer_use"` exists but unmaintained |

**Underlying theme:** **Production hardening** — memory boundaries, secret classification, shell safety, observability correlation, and agent-to-agent protocol completion. These are not "nice-to-haves"; they block enterprise/compliance adoption.

---

## 5. Bugs & Stability — Reported Today (Ranked by Severity)

| Issue | Severity | Status | Fix PR? |
|-------|----------|--------|---------|
| [#8973](https://github.com/zeroclaw-labs/zeroclaw/issues/8973) Landlock blocks shell access to `/dev/null` on Fedora | **Critical (S2)** — shell tool completely non-functional under sandbox | Open | No fix PR yet |
| [#6724](https://github.com/zeroclaw-labs/zeroclaw/issues/6724) Empty-credential channels crashloop supervisor | **High** — infinite restart every ~2s | **Closed** (fix merged) | Fixed via daemon/channel validation |
| [#7960](https://github.com/zeroclaw-labs/zeroclaw/pull/7960) `execute_pipeline` bypasses per-agent `ToolAccessPolicy` | **High** — denied tools invokable via pipeline | Open (needs author action) | PR open, stale-candidate |
| [#9433](https://github.com/zeroclaw-labs/zeroclaw/pull/9433) `ensure_no_escalation_beyond` doesn't validate `allowed_tools`/`excluded_tools` | **High** — security policy escalation gap | Open (needs author action) | PR open |
| [#9424](https://github.com/zeroclaw-labs/zeroclaw/pull/9424) Semantic-empty terminal completions accepted as success | **Medium** — blank outputs treated as valid | Open (in progress) | PR open |
| [#9038](https://github.com/zeroclaw-labs/zeroclaw/pull/9038) Lark channel hardcodes `receive_id_type=chat_id` | **Medium** — fails for non-`oc_` recipients | Open | PR open |

**Stability signal:** Two **critical sandbox/security bugs** (Landlock, policy escalation) remain open with PRs in review. The crashloop fix landed quickly, suggesting triage works for clear regressions.

---

## 6. Feature Requests & Roadmap Signals

| RFC / Issue | Priority | Likelihood for Next Version | Rationale |
|-------------|----------|----------------------------|-----------|
| [#8550](https://github.com/zeroclaw-labs/zeroclaw/issues/8550) OpenAI-compatible chat completions endpoint | P2, **in-progress, accepted** | **High** — active implementation, unblocks Open WebUI/LobeChat/custom clients |
| [#7155](https://github.com/zeroclaw-labs/zeroclaw/issues/7155) Per-execution shell confirmation tier | P1, **rfc** | **Medium-High** — P1 + high engagement (9 comments), but complex UX/security interplay |
| [#9106](https://github.com/zeroclaw-labs/zeroclaw/issues/9106) A2A outbound client (`A2ATool`) | P2, **rfc** | **Medium** — inbound shipped; outbound is logical pair; 8 comments show demand |
| [#8303](https://github.com/zeroclaw-labs/zeroclaw/issues/8303) Goal mode for bounded autonomous sessions | P2, **rfc** | **Medium** — 5 comments, 1 👍; addresses core "agent autonomy" gap |
| [#6996](https://github.com/zeroclaw-labs/zeroclaw/issues/6996) Granular sandbox policy (fs/network) | P2, **in-progress** | **Medium** — active work, aligns with Landlock fix urgency |
| [#8135](https://github.com/zeroclaw-labs/zeroclaw/issues/8135) Wasm-first plugin runtime (default-on, signed) | P2, **rfc** | **Low-Medium** — major architectural shift; depends on #7674 (eliminate Node.js) |
| [#6489](https://github.com/zeroclaw-labs/zeroclaw/issues/6489) "Everything is a plugin" unified catalog | P2, **tracker** | **Low** — long-term tracker; phased, not imminent |

**Prediction:** **OpenAI-compatible endpoint (#8550)** and **granular sandbox (#6996)** are closest to shipping. **Shell confirmation tier (#7155)** and **A2A outbound (#9106)** have strong momentum but need maintainer bandwidth.

---

## 7. User Feedback Summary — Pain Points & Use Cases

| Pain Point | Evidence | Affected Users |
|------------|----------|----------------|
| **Shell tool broken under Landlock on Fedora** | [#8973](https://github.com/zeroclaw-labs/zeroclaw/issues/8973) — "`sh` cannot access `/dev/null`" | Linux/Fedora users with sandbox enabled |
| **Supervisor crashloop on empty channel config** | [#6724](https://github.com/zeroclaw-labs/zeroclaw/issues/6724) — "restarts every ~2 seconds forever" | Dashboard users adding Signal/Voice Call without credentials |
| **No standard API for external clients** | [#8550](https://github.com/zeroclaw-labs/zeroclaw/issues/8550) — "Open WebUI, LobeChat, custom integrations cannot connect" | Integrators, UI builders |
| **Shell approval too coarse** | [#7155](https://github.com/zeroclaw-labs/zeroclaw/issues/7155) — "no reliable middle tier between blocking and allowing broadly" | Security-conscious operators, teams |
| **Memory mixing session history with curated LT memory** | [#9048](https://github.com/zeroclaw-labs/zeroclaw/issues/9048) — "implementation still mixes them in important paths" | Long-running agent users, memory-dependent workflows |
| **No outbound A2A — forced chat relay** | [#9106](https://github.com/zeroclaw-labs/zeroclaw/issues/9106) — "inter-agent collaboration forced through chat relay" | Multi-agent system builders |
| **CJK terminal UI broken (picker width, scroll)** | [#9279](https://github.com/zeroclaw-labs/zeroclaw/pull/9279), [#9292](https://github.com/zeroclaw-labs/zeroclaw/pull/9292) — fixed today | East Asian language users |

**Satisfaction signal:** Users are **filing detailed RFCs and bugs** — not abandoning. The project attracts operators building production systems (enterprise integrations, multi-agent, compliance). Dissatisfaction is **specific and technical**, not existential.

---

## 8. Backlog Watch — Stalled High-Value Items Needing Maintainer Attention

| Item | Age | Blockers | Why It Matters |
|------|-----|----------|----------------|
| [#7155](https://github.com/zeroclaw-labs/zeroclaw/issues/7155) Shell confirmation tier RFC | 59 days (created 2026-06-03) | **P1, needs-maintainer-review, risk:high** — 9 comments, no decision | Core security UX; blocks safe shell adoption |
| [#6850](https://github.com/zeroclaw-labs/zeroclaw/issues/6850) Decouple memory lifecycle from backends | 71 days (2026-05-22) | **needs-maintainer-review, risk:high** — 7 comments | Architectural prerequisite for memory governance |
| [#6909](https://github.com/zeroclaw-labs/zeroclaw/issues/6909) Computer-use desktop automation | 68 days (2026-05-25) | **needs-maintainer-review, risk:high, desktop** — 7 comments | Major new capability; sidecar exists but unmaintained |
| [#6489](https://github.com/zeroclaw-labs/zeroclaw/issues/6489) "Everything is a plugin" unified catalog | 87 days (2026-05-06) | **tracker, needs-maintainer-review** — 6 comments | Long-term architecture; coordinates Integrations + Plugins merge |
| [#7960](https://github.com/zeroclaw-labs/zeroclaw/pull/7960) `execute_pipeline` bypasses ToolAccessPolicy | 43 days (2026-06-19) | **needs-author-action, stale-candidate, risk:high** — security escalation | **Open PR with security impact** — marked stale-candidate |
| [#8973](https://github.com/zeroclaw-labs/zeroclaw/issues/8973) Landlock `/dev/null` fix | 21 days (2026-07-11) | **No fix PR** — critical bug on Fedora | Blocks sandbox adoption on major distro |
| [#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) Maintainer decision queue tracker | 28 days (2026-07-04) | **Meta-tracker** — 5 comments | **Exists to surface this exact problem** — RFC review capacity |

**Maintainer bandwidth alert:** 7+ high-risk RFCs + critical bugs await decisions. The decision queue tracker (#8692) was created *because* of this backlog. Without dedicated RFC review cycles, architectural drift will continue.

---

## Summary Metrics

| Metric | Value | Trend |
|--------|-------|-------|
| Open RFCs (top 30) | 28 / 30 | 🔴 High design WIP |
| Critical bugs open | 2 (Landlock, pipeline policy bypass) | 🔴 Unfixed |
| Merged PRs (24h) | 13 | 🟢 Healthy fix throughput |
| Maintainer-review needed | 22+ issues | 🔴 Bottleneck |
| Releases this cycle | 0 | 🔴 No ship |

**Bottom line:** ZeroClaw is **architecturally ambitious but review-constrained**. The project solves hard problems (memory isolation, sandboxing, agent protocols, plugin security) that matter for production AI agents — but the RFC-to-merge pipeline is clogged. Prioritizing **maintainer review capacity** (or delegated code-owner authority) would unlock more value than any single feature.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/DenisZheng/agents-radar).*