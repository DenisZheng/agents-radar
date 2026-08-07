# OpenClaw Ecosystem Digest 2026-08-07

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-08-07 02:21 UTC

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

# OpenClaw Project Digest — 2026-08-07

## 1. Today's Overview
OpenClaw exhibits **extremely high velocity** with 500 issues and 500 PRs updated in the last 24 hours (430 issues and 402 PRs still open). The project is in active stabilization mode: 98 PRs were merged/closed today, addressing regressions in model integrations (DeepSeek, Claude CLI, Bedrock), channel delivery (LINE, Feishu, Telegram, WhatsApp), compaction logic, and Windows/Docker compatibility. No new release was cut, but the volume of P0/P1 fixes suggests a **2026.8.x patch/beta is imminent**. Community engagement is strong—top issues carry 100+ comments and 80+ reactions—indicating a invested user base running OpenClaw in production (Telegram, Feishu, WhatsApp, LINE, Home Assistant).

---

## 2. Releases
**No new releases today.** The latest stable remains `2026.7.1` / `2026.7.2-beta.x`. The open PR queue contains numerous `P1`/`P0` fixes targeting the 2026.8.1 pre-FRV (Feature Release Verification) path, so a beta or patch drop is likely within days.

---

## 3. Project Progress (Merged/Closed PRs Today)
98 PRs merged/closed in 24h. Highlights from the latest PR batch (all links are to openclaw/openclaw):

| PR | Area | Summary |
|----|------|---------|
| [#120110](https://github.com/openclaw/openclaw/pull/120110) | gateway | Derive lock/coordinator paths from resolved state dir (fixes sandboxed multi-instance contention) |
| [#120108](https://github.com/openclaw/openclaw/pull/120108) | gateway, agents | Prevent duplicate/lost agent delivery; fix synthetic sub-agent reseeding from lossy transcripts |
| [#117456](https://github.com/openclaw/openclaw/pull/117456) | channel: LINE | Honor provider message action/delivery contracts (quick replies, Flex, imagemaps) — **P1, merge-risk: compatibility + message-delivery** |
| [#117022](https://github.com/openclaw/openclaw/pull/117022) | channel: Telegram | Preserve visible voice-privacy fallback (VOICE_MESSAGES_FORBIDDEN → text recovery) — **P1** |
| [#119169](https://github.com/openclaw/openclaw/pull/119169) | channels | Treat `adapter_returned_no_identity` as potentially visible (durable delivery) — **P1** |
| [#119827](https://github.com/openclaw/openclaw/pull/119827) | channels | Bound ingress claim `IN` lists below SQLite bind-variable limit (prevents permanent queue stall) — **P1** |
| [#116253](https://github.com/openclaw/openclaw/pull/116253) | embedded-runner | Flush partial streaming output before run-budget abort (preserves visible text on timeout) — **P1** |
| [#120020](https://github.com/openclaw/openclaw/pull/120020) | agent-core | Preserve explicit `reasoning: off` through Agent Core handoff (fixes Qwen/vLLM defaulting to `high`) — **P2** |
| [#118680](https://github.com/openclaw/openclaw/pull/118680) | config | Accept declared model compatibility routing settings (unblocks OpenAI-compat config) — **P2** |
| [#118831](https://github.com/openclaw/openclaw/pull/118831) | macOS | Restore Settings pane scrolling (cached ZStack intercept) — **P2** |

**Theme:** Delivery reliability (LINE/Telegram/WhatsApp/Feishu), compaction/token accounting fixes, Windows/Docker test stability, and gateway multi-instance safety.

---

## 4. Community Hot Topics (Most Active Issues)
| Issue | Comments | 👍 | Status | Core Need |
|-------|----------|-----|--------|-----------|
| [#75](https://github.com/openclaw/openclaw/issues/75) | 116 | 80 | **CLOSED** | **Linux/Windows native apps** — users want parity with macOS/iOS/Android; closed but signals strong platform gap |
| [#116277](https://github.com/openclaw/openclaw/issues/116277) | 114 | 0 | **CLOSED** | **DeepSeek v4 Flash silent failure** — model returns no reply, fallback triggers; high visibility due to production impact |
| [#7707](https://github.com/openclaw/openclaw/issues/7707) | 28 | 0 | OPEN | **Memory Trust Tagging** — prevent memory poisoning from untrusted sources (web, 3rd-party skills); security/UX hybrid |
| [#27445](https://github.com/openclaw/openclaw/issues/27445) | 12 | 5 | OPEN | **`announceTarget` for sub-agent completion** — route announces to parent session for multi-step orchestration |
| [#88657](https://github.com/openclaw/openclaw/issues/88657) | 10 | 1 | OPEN | **DeepSeek V4 Flash incomplete turns** — regression in 2026.5.27/28 (`payloads=0, tools=2, stopReason=stop`) |
| [#119263](https://github.com/openclaw/openclaw/issues/119263) | 6 | 0 | OPEN | **Agent DB v14→v15 migration fails** — `no such column: entry_valid`; gateway refuses start (**P0, ux-release-blocker**) |
| [#118772](https://github.com/openclaw/openclaw/issues/118772) | 5 | 0 | OPEN | **Premature compaction at 4–8% context** — `totalTokens` inflated across turns causing data loss (**P0, data-loss**) |

**Underlying signals:**  
- **Model integration fragility** (DeepSeek, Kimi, Bedrock, Ollama, claude-cli) — users hit silent failures, missing reasoning streams, signature replay bugs.  
- **Channel delivery gaps** — LINE, Feishu, Telegram, WhatsApp, Nextcloud Talk all have open P1 delivery bugs.  
- **Compaction/token accounting** — multiple P0/P1 issues around premature compaction, budget timeouts, and token inflation.  
- **Windows/Docker parity** — test teardown hangs, bind-mount failures, build stalls.

---

## 5. Bugs & Stability (Ranked by Severity)

### 🔴 P0 / Release Blockers
| Issue | Title | Fix PR? |
|-------|-------|---------|
| [#119263](https://github.com/openclaw/openclaw/issues/119263) | Agent DB v14→v15 migration fails: `no such column: entry_valid`; gateway refuses start | ❌ No linked PR |
| [#118772](https://github.com/openclaw/openclaw/issues/118772) | Embedded runner `totalTokens` inflation → premature compaction at 4–8% (data loss) | ❌ No linked PR |
| [#115546](https://github.com/openclaw/openclaw/issues/115546) | CLI-budget compaction timeout fires far below deadline (4.9s–50s), 100% failure on large sessions | ❌ No linked PR |

### 🟠 P1 (High Impact)
| Issue | Title | Fix PR? |
|-------|-------|---------|
| [#116277](https://github.com/openclaw/openclaw/issues/116277) | DeepSeek v4 Flash silent reply failure — no reply generated | ✅ **CLOSED** (likely fixed in beta) |
| [#115700](https://github.com/openclaw/openclaw/issues/115700) | `chat.send` rejected with "thread switched branches" after model completes (stale `expectedLeafEntryId`) | ❌ No linked PR |
| [#119087](https://github.com/openclaw/openclaw/issues/119087) | Gateway cold start regressed ~2.5x (2026.7.1→7.2) on 1-vCPU | ❌ No linked PR |
| [#92186](https://github.com/openclaw/openclaw/issues/92186) | Foreground reply fence cancels delivery to earlier concurrent WhatsApp messages | ❌ No linked PR |
| [#109881](https://github.com/openclaw/openclaw/issues/109881) | Bedrock `bedrock-converse-stream`: no thinking-signature replay protection → permanently bricks Claude 4+ | ❌ No linked PR |
| [#86012](https://github.com/openclaw/openclaw/issues/86012) | LINE channel: messages silently lost (reply token expiry + no push fallback) | ✅ **PR #117456** (open, needs proof) |
| [#86050](https://github.com/openclaw/openclaw/issues/86050) | Gateway buffers claude-cli stream events; surfaces see only final message | ❌ No linked PR |
| [#117445](https://github.com/openclaw/openclaw/issues/117445) | `@openclaw/feishu` decodes inbound DM as "?" and never replies | ❌ No linked PR |
| [#117209](https://github.com/openclaw/openclaw/issues/117209) | `AuthProfileStoreUnreadable` sticky after runtime snapshot publication failure | ❌ No linked PR |
| [#117609](https://github.com/openclaw/openclaw/issues/117609) | Transient LLM/socket errors not retried at embedded-assistant stage (long turns die whole) | ❌ No linked PR |

### 🟡 P2 (Significant)
| Issue | Title | Fix PR? |
|-------|-------|---------|
| [#88657](https://github.com/openclaw/openclaw/issues/88657) | DeepSeek V4 Flash incomplete turns (regression 2026.5.27/28) | ❌ |
| [#88079](https://github.com/openclaw/openclaw/issues/88079) | WebChat: `reasoning_content` not streamed for Kimi Code & DeepSeek Reasoner | ❌ |
| [#77625](https://github.com/openclaw/openclaw/issues/77625) | `reasoningDefault=stream` causes infinite reasoning recursion | ❌ |
| [#77685](https://github.com/openclaw/openclaw/issues/77685) | Feishu streaming card: final text loss, stale content, duplication | ❌ |
| [#116512](https://github.com/openclaw/openclaw/issues/116512) | Telegram progress duplicates first commentary when snapshot IDs change | ❌ |
| [#101445](https://github.com/openclaw/openclaw/issues/101445) | Embedded Ollama reports `payloads=0 tools=0` despite valid `tool_calls` | ❌ |
| [#102755](https://github.com/openclaw/openclaw/issues/102755) | Project won't start on Windows/WSL (build hangs on 2nd launch) — **beta blocker** | ❌ |
| [#119796](https://github.com/openclaw/openclaw/issues/119796) | Windows: vitest teardown `EBUSY unlink` on agent state DB | ❌ |
| [#58139](https://github.com/openclaw/openclaw/issues/58139) | `memory-lancedb` fails with Windows Docker bind mount | ❌ |
| [#90595](https://github.com/openclaw/openclaw/issues/90595) | Cron "failed" notifications fire during hot reload/retries → alert fatigue | ❌ |

---

## 6. Feature Requests & Roadmap Signals
| Issue | Votes | Signal |
|-------|-------|--------|
| [#7707](https://github.com/openclaw/openclaw/issues/7707) Memory Trust Tagging by Source | 0 | **Security hardening** — prevent prompt injection via memory poisoning; needs product/security review |
| [#27445](https://github.com/openclaw/openclaw/issues/27445) `announceTarget` for sub-agent completion routing | 5 | **Orchestration** — enable parent-agent workflow control; linked PR open |
| [#15032](https://github.com/openclaw/openclaw/issues/15032) Per-spawn tool restrictions for sub-agents | 0 | **DMZ isolation** — critical for prompt-injection defense; linked PR open |
| [#6757](https://github.com/openclaw/openclaw/issues/6757) Agent-triggered context compaction (self-compact tool) | 2 | **Autonomy** — agents compact own context without user intervention |
| [#90354](https://github.com/openclaw/openclaw/issues/90354) Bounded/validated append for pre-compaction memory flush | 1 | **Reliability** — hard guardrails on append size, validation, silent failure handling |
| [#88154](https://github.com/openclaw/openclaw/issues/88154) Slack Modal Support for Interactive Workflows | 1 | **UX** — structured input via native Slack modals |
| [#44309](https://github.com/openclaw/openclaw/issues/44309) One-way dispatch mode for A2A handoffs | 1 | **Architecture** — fire-and-forget agent-to-agent without reply-back ping-pong |
| [#45565](https://github.com/openclaw/openclaw/issues/45565) Route gateway lifecycle warnings to dedicated channel | 1 | **Observability** — reduce noise in conversation channels |
| [#45771](https://github.com/openclaw/openclaw/issues/45771) Built-in pace-aware rate limiting for autonomous agents | 2 | **Cost control** — track consumption pace, auto-throttle |
| [#73537](https://github.com/openclaw/openclaw/issues/73537) Production-readiness stability label on releases | 2 | **Release process** — users running in production need clearer stability signals |

**Prediction:** Next version will likely include **sub-agent tool restrictions (#15032)**, **announceTarget routing (#27445)**, and **compaction guardrails (#90354)** — all have linked PRs and address core multi-agent reliability. Memory trust tagging (#7707) is high-value but needs

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: Personal AI Assistant / Agent Open-Source Ecosystem
**Date:** 2026-08-07 | **Scope:** 13 projects analyzed

---

## 1. Ecosystem Overview

The personal AI agent open-source landscape is **polarized between high-velocity leaders and dormant forks**. Three projects—**OpenClaw, CoPaw, and IronClaw**—demonstrate production-grade velocity (50–500+ daily updates) with active stabilization cycles, while **6 of 13 projects show zero activity** in the last 24 hours. A clear tiering has emerged: **Tier 1** (OpenClaw, CoPaw, IronClaw, ZeroClaw, NanoBot, Hermes, NanoClaw) are actively iterating on delivery reliability, multi-channel support, and security hardening; **Tier 2** (PicoClaw, LobsterAI) exhibit maintenance-only cadence with stale backlogs; **Tier 3** (NullClaw, TinyClaw, Moltis, ZeptoClaw) appear abandoned or in extended hiatus. The ecosystem is converging on **multi-model orchestration, channel delivery guarantees, and runtime observability** as table-stakes requirements.

---

## 2. Activity Comparison

| Project | Issues Updated (24h) | PRs Updated (24h) | PRs Merged (24h) | Latest Release | Release Status | Health Score* |
|---------|---------------------|-------------------|------------------|----------------|----------------|---------------|
| **OpenClaw** | 500 | 500 | 98 | 2026.7.1 / 2026.7.2-beta | **Imminent patch/beta** | 🟢 **Excellent** |
| **CoPaw** | 34 | 50 | 29 | v2.0.1 / v2.1.0-beta.2 | **RC imminent** | 🟢 **Excellent** |
| **IronClaw** | 50 | 50 | ~15 | **v1.1.0 (2026-08-06)** | **Stable released** | 🟢 **Excellent** |
| **ZeroClaw** | 35 | 50 | 7 | 0.8.4 | Pre-v0.9.0 hardening | 🟢 **Strong** |
| **Hermes Agent** | ~50 | ~50 | 7 | v0.20.0 | Post-release hotfix needed | 🟡 **Good** |
| **NanoBot** | 10 | 17 | 5 | Not specified | Patch pending | 🟢 **Strong** |
| **NanoClaw** | 2 | 14 | 8 | Not specified | Patch pending | 🟢 **Strong** |
| **PicoClaw** | 0 | 2 | 1 | Not specified | Maintenance | 🟡 **Fair** |
| **LobsterAI** | 5 | 2 (stale) | 0 | Not specified | Stale backlog | 🔴 **Weak** |
| **NullClaw** | 0 | 0 | 0 | — | **No activity** | ⚫ **Dormant** |
| **TinyClaw** | 0 | 0 | 0 | — | **No activity** | ⚫ **Dormant** |
| **Moltis** | 0 | 0 | 0 | — | **No activity** | ⚫ **Dormant** |
| **ZeptoClaw** | 0 | 0 | 0 | — | **No activity** | ⚫ **Dormant** |

*Health Score: 🟢 Active stabilization/release cadence | 🟡 Maintenance mode/stale backlog | 🔴 Stalled | ⚫ No detectable activity

---

## 3. OpenClaw's Position

### Advantages vs. Peers
- **Scale of velocity:** 10× PR throughput vs. next tier (500 vs. 50 PRs/day), indicating massive contributor base and automation
- **Production deployment breadth:** Explicitly runs in Telegram, Feishu, WhatsApp, LINE, Home Assistant—widest channel matrix in ecosystem
- **Issue engagement depth:** Top issues carry 100+ comments / 80+ reactions, signaling invested production users, not just evaluators
- **Stabilization discipline:** 98 PRs merged in 24h with P0/P1 triage shows mature release engineering

### Technical Approach Differences
| Dimension | OpenClaw | Typical Peer Approach |
|-----------|----------|----------------------|
| **Gateway architecture** | Centralized state dir, lock/coordinator paths, multi-instance sandbox safety | Single-instance or naive multi-process |
| **Channel delivery** | Provider contract enforcement (LINE Flex, Telegram voice fallback, WhatsApp fence) | Best-effort, often lossy |
| **Compaction/token accounting** | Explicit budget tracking, embedded-runner flush on abort, inflation detection | Ad-hoc or missing |
| **Model integration** | Compatibility routing, reasoning stream preservation, signature replay protection | Direct API passthrough |

### Community Size Comparison
- **OpenClaw:** 430 open issues, 402 open PRs, 100+ comment threads → **largest active community**
- **CoPaw:** 17 open issues, ~20 open PRs → **highly engaged but smaller**
- **IronClaw:** 27 open issues, 33 open PRs → **growing post-release**
- **ZeroClaw/Hermes/NanoBot/NanoClaw:** 10–35 open issues each → **mid-tier**

---

## 4. Shared Technical Focus Areas

| Requirement | Projects Affected | Specific Needs |
|-------------|-------------------|----------------|
| **Multi-channel delivery reliability** | OpenClaw (LINE, Telegram, WhatsApp, Feishu), IronClaw (Slack, Telegram), NanoBot (Matrix, Weixin), CoPaw (Matrix), ZeroClaw (Telegram), NanoClaw (Telegram) | Provider contract adherence, fallback chains, deduplication, command limits |
| **Model integration hardening** | OpenClaw (DeepSeek, Claude CLI, Bedrock, Kimi, Ollama), CoPaw (DeepSeek, OpenRouter, Kimi), NanoBot (per-session model switching), Hermes (xAI/Grok), ZeroClaw (Bedrock Nova, compatible providers) | Reasoning stream preservation, silent failure detection, capability probing, signature replay |
| **Runtime observability & debugging** | IronClaw (Inspector: live diagnostics, prompt inspection, model stats), Hermes (god-file sharding for maintainability), ZeroClaw (verifiable-intent, provenance), CoPaw (session load hangs) | Live run inspection, prompt capture, token/cost tracking, state visualization |
| **Security & credential hygiene** | NanoBot (API key leak to subprocess/env), ZeroClaw (XOR cipher for secrets, pipeline confused deputy), Hermes (emission gaps, secret redaction), CoPaw (MalwareBytes false positive) | Zero-trust subprocess isolation, secret storage audit, supply-chain transparency |
| **Upgrade / state migration safety** | OpenClaw (Agent DB v14→v15 failure), NanoClaw (transactional upgrades), ZeroClaw (SOP config migration), LobsterAI (gateway restart UX) | Atomic migrations, rollback capability, schema versioning |
| **Sub-agent / multi-agent orchestration** | OpenClaw (announceTarget, per-spawn tool restrictions), Hermes (agent_context hardcoded), CoPaw (spawn_subagent batch placeholder), ZeroClaw (A2A outbound client) | Parent-agent routing, tool sandboxing, lifecycle coordination |

---

## 5. Differentiation Analysis

| Project | Primary Focus | Target User | Architectural Signature |
|---------|---------------|-------------|------------------------|
| **OpenClaw** | **Universal gateway** — multi-channel, multi-model, production hardening | Teams running bots in production across IM platforms | Centralized gateway + embedded runner + channel adapters; SQLite state + lock coordination |
| **CoPaw** | **Desktop-first agent** — AgentScope 2.0 integration, thinking-mode models, browser/Shell tools | Power users / developers wanting local autonomous agent | Electron + Rust backend; CodeMirror editor; MCP + AgentScope protocol |
| **IronClaw** | **Extensible runtime** — MCP server registration, IronHub marketplace, WASM sandbox, Slack/Telegram routines | Builders of composable agent workflows & integrations | Routine engine + capability system + extension marketplace; Docker/Railway profiles |
| **ZeroClaw** | **Policy-governed automation** — SOP engine, verifiable intent, A2A, ZeroCode DSL | Enterprise / compliance-heavy automation | SOP runtime + policy gates + A2A client; strong auth/security focus |
| **Hermes Agent** | **Developer experience** — plugin interface, god-file sharding, desktop/cloud parity | Hackers / contributors extending agent internals | Monolithic core → modular sharding; launchd/SSH/desktop unification |
| **NanoBot** | **WebUI polish & security** — drag-drop sessions, ephemeral chats, cold-start perf, Matrix | Privacy-conscious users wanting SaaS-like UX self-hosted | React WebUI + Python backend; Matrix-first; security-first subprocess model |
| **NanoClaw** | **Skill hygiene & scheduling** — skill pre-flight, recurrence recovery, Telegram correctness | Users relying on scheduled tasks & skill marketplace | Skill pre-flight separation; namespaced identities; Chat SDK alignment |
| **PicoClaw** | **Platform completeness** — QQ Channel media, model fallback chains | Chinese IM platform users | Go-based; channel-specific feature parity |
| **LobsterAI** | **Management UI** — agent/page interaction, per-model token config | Teams needing admin dashboard for agents | React management console; Cowork/OpenClaw integration |

---

## 6. Community Momentum & Maturity

### **Rapidly Iterating (Weekly Release Cadence)**
| Project | Signal |
|---------|--------|
| **OpenClaw** | 500 PRs/day, 98 merges/day, imminent 2026.8.x beta |
| **CoPaw** | 29 merges/day, v2.1.0 RC imminent, 84 updates/day |
| **IronClaw** | v1.1.0 released yesterday, 50 PRs/day, Inspector stack in flight |
| **ZeroClaw** | 7 merges/day, v0.9.0 tracker active, RFC governance scaling |

### **Stabilizing / Pre-Release Hardening**
| Project | Signal |
|---------|--------|
| **Hermes Agent** | God-file sharding campaign (20 files), but v0.20.0 regressions unpatched (desktop panel, memory sync, MCP stdio) |
| **NanoBot** | Security fixes (2 P1) + Matrix fix + UX polish merged; next patch will bundle |
| **NanoClaw** | Critical upgrade fix (#3195) open, Telegram/scheduling fixes merged, Tavily skill ready |

### **Maintenance Mode / Stale Backlog**
| Project | Signal |
|---------|--------|
| **PicoClaw** | 1 merged PR (QQ media), 1 open PR 37 days unreviewed |
| **LobsterAI** | 2 stale PRs (4+ months), 3 stale issues resurfaced, 1 new high-impact bug (#2443) |

### **Dormant / No Detectable Activity**
| Project | Last Activity Signal |
|---------|---------------------|
| NullClaw, TinyClaw, Moltis, ZeptoClaw | None in 24h window; likely archived or private development |

---

## 7. Trend Signals for AI Agent Developers

| Trend | Evidence Across Projects | Strategic Value |
|-------|-------------------------|-----------------|
| **Channel delivery as differentiable feature** | 7/8 active projects fixing Telegram, Slack, LINE, Feishu, WhatsApp, Matrix, Weixin bugs | **Moat:** Reliable multi-IM delivery is hard; winners own distribution |
| **Model-agnostic reasoning stream handling** | OpenClaw, CoPaw, NanoBot, Hermes, ZeroClaw all battling `reasoning_content`, thinking tags, signature replay | **Table stakes:** Must preserve reasoning across OpenAI, Anthropic, DeepSeek, Kimi, Bedrock, xAI |
| **Sub-agent sandboxing & tool restriction** | OpenClaw (#15032), Hermes (plugin interface), ZeroClaw (A2A outbound), CoPaw (spawn_subagent) | **Security primitive:** DMZ isolation for prompt-injection defense becoming standard |
| **Observability as product requirement** | IronClaw Inspector (4 PRs), Hermes sharding for debuggability, ZeroClaw provenance RFC | **User expectation:** "Why did the agent do that?" must be answerable in production |
| **Upgrade/migration as reliability pillar** | OpenClaw (DB v14→v15 blocker), NanoClaw (transactional upgrade), ZeroClaw (SOP config migration) | **Operational maturity:** Self-updating agents need atomic, rollback-safe state transitions |
| **Governance scaling via RFC/automation** | ZeroClaw (work lanes, RFC queue), Hermes (god-file sharding epic), IronClaw (docs boundary CI) | **Sustainability:** Projects >20 contributors need automated triage and architectural guardrails |
| **Security hygiene as competitive differentiator** | NanoBot (subprocess env leak), ZeroClaw (XOR cipher), Hermes (emission gaps), CoPaw (AV false positive) | **Trust signal:** Enterprise adoption blocked by credential handling, supply-chain transparency |

---

## Summary for Technical Decision-Makers

| If you need... | Best-fit project(s) | Rationale |
|----------------|---------------------|-----------|
| **Production multi-IM bot today** | **OpenClaw** | Widest channel matrix, active production users, imminent stable release |
| **Local desktop autonomous agent** | **CoPaw** | Best desktop UX, browser/shell tools, thinking-model support, AgentScope integration |
| **Composable workflow runtime + marketplace** | **IronClaw** | Routine engine, MCP/IronHub extensions, WASM sandbox, v1.1.0 stable |
| **Policy-governed enterprise automation** | **ZeroClaw** | SOP engine, verifiable intent, A2A, strong auth roadmap |
| **Hackable core for research/contribution** | **Hermes Agent** | Plugin interface, god-file sharding, desktop/cloud/SSH unification |
| **Self-hosted SaaS-like chat UX** | **NanoBot** | WebUI polish, ephemeral chats, Matrix-first, security-hardened |
| **Scheduled tasks + skill ecosystem** | **NanoClaw** | Recurrence recovery, skill pre-flight, Telegram correctness |

**Bottom line:** The ecosystem has consolidated around **3–4 viable production-grade platforms** (OpenClaw, CoPaw, IronClaw, ZeroClaw) with distinct architectural opinions. New entrants should **contribute to these** rather than fork—velocity and community compounding effects are decisive.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-08-07

---

## 1. Today's Overview
NanoBot shows **high development velocity** with 27 total updates (10 issues, 17 PRs) in the last 24 hours. The project is in active feature development and hardening phase: 5 PRs were merged/closed today, delivering UX improvements (drag-and-drop sessions, temporary chat mode, motion polish), a critical Matrix compatibility fix, and a cold-start performance optimization. Security remains a top focus — two P1 fixes address API key leakage into subprocesses and process environment. No new release was cut today; the next version will likely bundle these accumulated fixes and features.

---

## 2. Releases
**No new releases published today.** The last release data is not provided in the current window. Expect a patch/minor release soon given the volume of merged fixes (security, Matrix, WebUI, performance).

---

## 3. Project Progress — Merged & Closed PRs (5)

| PR | Type | Summary | Impact |
|----|------|---------|--------|
| [#5261](https://github.com/HKUDS/nanobot/pull/5261) | Feat (WebUI) | Drag sidebar sessions into composer & reorder sessions | ✅ **Merged** — improves session discovery & manual ordering |
| [#5248](https://github.com/HKUDS/nanobot/pull/5248) | Bug (Matrix) | Send non-empty POST body on room join for Continuwuity compatibility | ✅ **Merged** — fixes auto-join on invite (closes #5247) |
| [#5267](https://github.com/HKUDS/nanobot/pull/5267) | Polish (WebUI) | Tighten transitions (220ms), anchor content, respect reduced motion | ✅ **Merged** — perceived latency & accessibility |
| [#5259](https://github.com/HKUDS/nanobot/pull/5259) | Fix (WebUI) | Enforce memory-only temporary sessions (no disk writes) | ✅ **Merged** — stacks on #5252, guarantees ephemeral chats |
| [#5262](https://github.com/HKUDS/nanobot/pull/5262) | Perf (WebUI) | Pre-compressed gzip assets, chunk splitting, regression guard | ✅ **Merged** — reduces cold-start payload |

**Net progress**: WebUX polish + Matrix reliability + security hardening + performance baseline.

---

## 4. Community Hot Topics (Most Engagement)

| Item | Type | Comments | 👍 | Signal |
|------|------|----------|----|--------|
| [#5198](https://github.com/HKUDS/nanobot/issues/5198) | Bug | 3 | 0 | **Model switching UX broken** — users expect per-session model picker like SaaS UIs; `/model` command appears ineffective. High friction for multi-model workflows. |
| [#4290](https://github.com/HKUDS/nanobot/issues/4290) | Bug | 2 | 0 | **Cron + subagent race** — long-standing (Jun 10) workflow breakage when subagents spawn; main agent loses reply window. Blocks automation reliability. |
| [#5270](https://github.com/HKUDS/nanobot/pull/5270) | Security Fix (P1) | — | 0 | **API key leak to CLI subprocesses** — active review; critical for multi-tenant / shared environments. |
| [#5269](https://github.com/HKUDS/nanobot/pull/5269) | Security Fix (P1) | — | 0 | **API keys written to process `os.environ`** — cross-provider credential swap/leak risk. |

**Underlying needs**:  
- **Per-session model control** (not global fallback chain)  
- **Deterministic subagent/cron coordination**  
- **Zero-trust credential handling** — no secrets in subprocess env or global process state

---

## 5. Bugs & Stability — Today’s Reports (Ranked by Severity)

| Severity | Issue | Status | Fix PR? |
|----------|-------|--------|---------|
| **P0** | [#5271](https://github.com/HKUDS/nanobot/pull/5271) Stale background task (`maybe_generate_webui_title`) overwrites session after `/new` | Open PR | ✅ #5271 (open) |
| **P1** | [#5270](https://github.com/HKUDS/nanobot/pull/5270) CLI app subprocesses inherit full `os.environ` → API key leak | Open PR | ✅ #5270 (open) |
| **P1** | [#5269](https://github.com/HKUDS/nanobot/pull/5269) Providers write API keys into process-global `os.environ` | Open PR | ✅ #5269 (open) |
| **P2** | [#5273](https://github.com/HKUDS/nanobot/issues/5273) Session retention trimming drops `_channel_delivery` proactive messages | Open Issue | ✅ #5272 (open) |
| **P2** | [#5264](https://github.com/HKUDS/nanobot/issues/5264) History endpoint omits `media_urls` for files outside media root | Open Issue | ✅ #5268 (open) |
| **P2** | [#5263](https://github.com/HKUDS/nanobot/pull/5263) Weixin channel protocol drift (QR, binding, delivery) | Open PR | ✅ #5263 (open) |
| **P2** | [#5265](https://github.com/HKUDS/nanobot/pull/5265) Tools accept `NaN`/`Infinity` for `number` params | Open PR | ✅ #5265 (open) |
| **Unprioritized** | [#5198](https://github.com/HKUDS/nanobot/issues/5198) Cannot change model per session (UI + `/model` command) | Open Issue | ❌ |
| **Unprioritized** | [#4290](https://github.com/HKUDS/nanobot/issues/4290) Cronjob ends early with subagent | Open Issue | ❌ |
| **Unprioritized** | [#5278](https://github.com/HKUDS/nanobot/issues/5278) Session history inside agent workspace (security/isolation) | Open Issue | ❌ |

**Note**: 7 of 10 bugs already have fix PRs open — strong fix velocity. The three unprioritized bugs (#5198, #4290, #5278) need triage and prioritization.

---

## 6. Feature Requests & Roadmap Signals

| Signal | Source | Likelihood for Next Version |
|--------|--------|-----------------------------|
| **Per-session model switching** (UI + command) | [#5198](https://github.com/HKUDS/nanobot/issues/5198) (3 comments) | High — UX parity with SaaS; blocks multi-model workflows |
| **Temporary / ephemeral chat mode** | [#5252](https://github.com/HKUDS/nanobot/pull/5252) + [#5259](https://github.com/HKUDS/nanobot/pull/5259) (merged) | **Already merged** — will ship in next release |
| **Shared project terminal (PTY/ConPTY)** | [#5253](https://github.com/HKUDS/nanobot/pull/5253) | Medium — complex, has conflicts, but high value for dev workflows |
| **Metasearch provider (mst-python / RRF)** | [#5234](https://github.com/HKUDS/nanobot/pull/5234) | Medium — new provider, tests included, expands research capability |
| **Idle session archival for Dream (memory)** | [#5231](https://github.com/HKUDS/nanobot/pull/5231) | Medium — enables long-tail memory processing |
| **Session-level temp file isolation** | [#5276](https://github.com/HKUDS/nanobot/issues/5276) | Low-Medium — security/isolation hardening, needs design |
| **Matrix thread/reply semantics parity** | [#5274](https://github.com/HKUDS/nanobot/issues/5274), [#5275](https://github.com/HKUDS/nanobot/issues/5275) | Low — niche channel polish |
| **Token consumption logging** | [#5266](https://github.com/HKUDS/nanobot/issues/5266) | Low — observability, no PR yet |

**Predicted next release bundle**: Temporary chat, drag-and-drop sessions, Matrix Continuwuity fix, cold-start perf, motion polish, + the two P1 security fixes if merged in time.

---

## 7. User Feedback Summary (Pain Points & Use Cases)

| Pain Point | Evidence | Frequency |
|------------|----------|-----------|
| **Model switching broken per session** | #5198: “Clicking model blip allows no change… `/model` command seemingly does nothing” | 3 comments, explicit UX gap |
| **Automation reliability (cron + subagents)** | #4290: “main agent doesn't have chance to reply subagent's result” | 2 comments, 2-month old |
| **Token burn opacity** | #5266: “million tokens in 2 hours without noticeable activity” | 1 issue, high cost anxiety |
| **Session isolation / security** | #5278: “session history should not live inside agent workspace”; #5276: temp file isolation | 2 new issues, security-conscious users |
| **Media attachment persistence** | #5264: history endpoint loses `media_urls` for non-media-root files | 1 issue, breaks UX on refresh |
| **Matrix UX parity** | #5274, #5275: missing reply-in-thread, reply-to-message semantics | 2 issues, power users on Matrix |

**Satisfaction signals**:  
- WebUI polish PRs (#5261, #5267, #5262) show team investing in **perceived quality**  
- Temporary chat (#5252/5259) addresses **privacy/ephemeral use case**  
- Security fixes (#5270, #5269) respond to **credential hygiene** concerns  

**Dissatisfaction**: Model switching, cron reliability, and token opacity remain unresolved user-facing gaps.

---

## 8. Backlog Watch — Stale / Needing Maintainer Attention

| Item | Age | Why It Matters | Action Needed |
|------|-----|----------------|---------------|
| [#4290](https://github.com/HKUDS/nanobot/issues/4290) Cron + subagent race | **58 days** (Jun 10) | Blocks reliable scheduled workflows; no fix PR | **Triage → prioritize P1/P2, assign owner** |
| [#5198](https://github.com/HKUDS/nanobot/issues/5198) Model switching per session | **7 days** (Jul 31) | Core UX gap vs. SaaS parity; 3 comments | **Design decision**: per-session model state vs. global fallback |
| [#5278](https://github.com/HKUDS/nanobot/issues/5278) Session history in workspace | **New** (Aug 7) | Security/isolation regression from PR #713 | **Architectural review** — revert or harden isolation |
| [#5276](https://github.com/HKUDS/nanobot/issues/5276) Session-level temp file isolation | **1 day** | Complements #5278; sandboxing completeness | **Design + threat model** |
| [#5234](https://github.com/HKUDS/nanobot/pull/5234) mst-python metasearch provider | **4 days** | New provider, expands research; needs review | **Review + test validation** |
| [#5253](https://github.com/HKUDS/nanobot/pull/5253) Shared project terminal | **2 days** | High-value dev feature; marked `conflict` | **Resolve conflicts + rebase** |
| [#5231](https://github.com/HKUDS/nanobot/pull/5231) Archive idle sessions for Dream | **4 days** | Memory system completeness | **Review + merge if tests pass** |

**Recommendation**: Prioritize #4290 (oldest functional bug), #5198 (high user visibility), and #5278 (security regression). The two P1

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-08-07

## 1. Today's Overview
Hermes Agent shows **high refactoring velocity** with a declared "god-file sharding" campaign underway across 20+ large modules (6k–10k lines each). The project processed **100 total issue/PR updates** in 24 hours, but **zero releases** — indicating a pre-release stabilization phase. Critical regressions in v0.20.0 (desktop panel missing, memory provider sync broken, MCP stdio crash) coexist with active feature work (xAI/Grok parity, plugin interface expansion, optional financial skills). The backlog carries **long-standing Feishu/Lark card approval bugs** (error 200340/220343) spanning 4+ months across multiple duplicates.

## 2. Releases
**No new releases** in the last 24 hours. Latest known version remains v0.20.0 (per issue #79407 regression report). The project appears to be in a **post-v0.20.0 hotfix/refactor window** before v0.21.0.

## 3. Project Progress — Merged/Closed PRs Today (7)
| PR | Title | Component | Impact |
|----|-------|-----------|--------|
| [#80699](https://github.com/NousResearch/hermes-agent/pull/80699) | Desktop tools reach on remote/cloud backends | `comp/desktop`, `comp/tui`, `tool/terminal` | **Fixed**: Tools (pane, browser, reactions) now available when connecting to gateway URL or Hermes Cloud — previously gated by `HERMES_DESKTOP=1` only |
| [#79868](https://github.com/NousResearch/hermes-agent/pull/79868) | Fix launchd plist reload stranding gateway | `comp/cli`, `comp/gateway` | **Fixed**: Gateway no longer unregisters from launchd on plist reload; `KeepAlive` can revive it |
| [#80709](https://github.com/NousResearch/hermes-agent/pull/80709) | Fix `read_file` false-positive binary on UTF-8 truncation | `comp/tools`, `tool/file` | **Fixed**: UTF-8 multi-byte split at byte 1000 no longer triggers binary detection |
| [#80717](https://github.com/NousResearch/hermes-agent/pull/80717) | `read_file`: transcode UTF-16 → UTF-8 (port from kimi-code) | `comp/tools`, `tool/file` | **New**: Windows Notepad/PowerShell UTF-16 files now readable instead of refused as binary |
| [#80716](https://github.com/NousResearch/hermes-agent/pull/80716) | Large pastes → `.txt` attachment chips (ChatGPT-style) | `comp/desktop` | **New**: >10k char pastes become downloadable chips, not input floods |
| [#80712](https://github.com/NousResearch/hermes-agent/pull/80712) | Surface MCP tool-result `_meta` to model | `comp/agent`, `tool/mcp` | **New**: Server `_meta` (validated payloads, browser-handoff URLs) now visible to model |
| [#80714](https://github.com/NousResearch/hermes-agent/pull/80714) | Return zero-match probe paths (closes #80522) | `comp/tools` | **Fixed**: Case-insensitive/hidden file matches now returned to model, not just hinted |

> **Net**: 3 regression fixes, 3 UX improvements, 1 protocol enhancement — all merged same-day.

## 4. Community Hot Topics (Most Comments/Engagement)

| Item | Comments | Core Need |
|------|----------|-----------|
| [#78647](https://github.com/NousResearch/hermes-agent/issues/78647) Epic: Shard all 20 god files | 53 | **Architectural mandate**: Decompose 6k–10k line files into clean modules; "never reverted" policy |
| [#64182](https://github.com/NousResearch/hermes-agent/issues/64182) Plugin Interface Expansion tracking | 27 | **Contributor enablement**: Stable, publishable plugin interface for community PRs |
| [#78645](https://github.com/NousResearch/hermes-agent/issues/78645) Shard `context_compressor.py` (6,789 lines) | 19 | **Concrete god-file slice**: First wave of epic; needs module boundary decisions |
| [#80424](https://github.com/NousResearch/hermes-agent/issues/80424) Grok/xAI Feature Parity Campaign | 9 | **Provider alignment**: Full xAI platform parity (Models, Function calling, Reasoning, Imagine, Voice) |
| [#79407](https://github.com/NousResearch/hermes-agent/issues/79407) Desktop bottom panel missing in v0.20.0 | 8 | **Critical regression**: Desktop app reduced to "viewer-only shell" — blocks all CLI/Gateway interaction |

**Pattern**: Top discussions are **internal architecture governance** (god-file sharding, plugin contracts) and **v0.20.0 regressions** — not new feature requests. Community energy is directed at *stabilizing the foundation*.

## 5. Bugs & Stability — Ranked by Severity

| Severity | Issue | Component | Status | Fix PR? |
|----------|-------|-----------|--------|---------|
| **P0 — Blocker** | [#79407](https://github.com/NousResearch/hermes-agent/issues/79407) Desktop bottom operation panel missing — app is viewer-only | `comp/desktop`, `platform/windows` | Open | No |
| **P0 — Blocker** | [#80710](https://github.com/NousResearch/hermes-agent/issues/80710) Desktop self-update corrupts Python runtime on Windows | `comp/desktop`, `platform/windows` | Open | No |
| **P1 — Critical** | [#79339](https://github.com/NousResearch/hermes-agent/issues/79339) `MemoryProvider.sync_turn()` never called in 0.20 — external backends silent fail | `comp/agent`, `tool/memory` | Open | No |
| **P1 — Critical** | [#80652](https://github.com/NousResearch/hermes-agent/issues/80652) MCP stdio bridge crashes on `args: null` config | `comp/agent`, `tool/mcp` | Open | No |
| **P1 — Critical** | [#80646](https://github.com/NousResearch/hermes-agent/issues/80646) `agent_context` hardcoded to `"primary"` — subagent/cron/flush logic dead | `comp/agent`, `comp/plugins`, `tool/memory` | Open | No |
| **P2 — High** | Feishu/Lark card approval buttons error 200340/220343/200343 | `comp/gateway`, `platform/feishu` | Open (4+ dup issues: [#7675](https://github.com/NousResearch/hermes-agent/issues/7675), [#13924](https://github.com/NousResearch/hermes-agent/issues/13924), [#25886](https://github.com/NousResearch/hermes-agent/issues/25886), [#38305](https://github.com/NousResearch/hermes-agent/issues/38305), [#10073](https://github.com/NousResearch/hermes-agent/issues/10073)) | PR [#10256](https://github.com/NousResearch/hermes-agent/pull/10256) exists but unmerged |
| **P2 — High** | [#79628](https://github.com/NousResearch/hermes-agent/issues/79628) `use_gateway: true` discards valid direct credential when gateway unauthenticated | `comp/cli`, `comp/tools`, `tool/web/tts/browser` | Open | No |
| **P2 — High** | [#74411](https://github.com/NousResearch/hermes-agent/issues/74411) Desktop SSH mode version-check arg order wrong → false unsupported claims | `backend/ssh`, `comp/desktop` | Open | No |
| **P3 — Medium** | [#77484](https://github.com/NousResearch/hermes-agent/issues/77484) Security: emission gaps — raw process list, traceback in tool result, key regex misses | `comp/agent`, `comp/tools`, `tool/terminal` | Open | No |
| **P3 — Medium** | [#77162](https://github.com/NousResearch/hermes-agent/issues/77162) Security: exact-value secret redaction missing on tool-result → provider egress | `comp/agent`, `comp/cli`, `tool/terminal` | Open | No |

> **Signal**: 3 P0/P1 regressions introduced in v0.20.0 (desktop panel, memory sync, MCP stdio) + 1 Windows updater corruption. **No fix PRs yet** for top 5. Feishu card bug has a fix PR (#10256) stalled since June.

## 6. Feature Requests & Roadmap Signals

| Request | Source | Likelihood for Next Version |
|---------|--------|----------------------------|
| **xAI/Grok full platform parity** | [#80424](https://github.com/NousResearch/hermes-agent/issues/80424) (meta-issue) | **High** — Active campaign, 9 comments, aligns with provider expansion |
| **Plugin interface stabilization** | [#64182](https://github.com/NousResearch/hermes-agent/issues/64182) | **High** — Community-contributor unblocker; 27 comments |
| **Per-job `deliver_profile` for cron** | [#70849](https://github.com/NousResearch/hermes-agent/issues/70849) | **Medium** — Niche but clean multiplexing gap |
| **Revelata deepKPI financial skills** | [#80592](https://github.com/NousResearch/hermes-agent/pull/80592) (PR open) | **Medium** — Optional-skills catalog expansion; namespaced, low risk |
| **Laravel LSP for `.blade.php`** | [#75720](https://github.com/NousResearch/hermes-agent/pull/75720) (PR open) | **Medium** — Complements intelephense; contained change |
| **`auth_type="none"` for no-auth providers** | [#80633](https://github.com/NousResearch/hermes-agent/pull/80633) (PR open) | **High** — Fixes 401 rejection on free tiers; already implemented |
| **MCP record/replay fixtures** | [#80475](https://github.com/NousResearch/hermes-agent/pull/80475) (PR open) | **High** — Closes real-protocol test gap; deterministic CI value |

**Prediction**: v0.21.0 will likely ship **god-file sharding wave 1**, **xAI parity**, **auth_type=none**, **MCP fixtures**, and **hotfixes for v0.20.0 regressions**. Financial skills and Laravel LSP are optional adds.

## 7. User Feedback Summary — Pain Points & Use Cases

| Pain Point | Evidence | Affected Users |
|------------|----------|----------------|
| **Desktop v0.20.0 unusable** — bottom panel gone, update corrupts runtime | [#79407](https://github.com/NousResearch/hermes-agent/issues/79407), [#80710](https://github.com/NousResearch/hermes-agent/issues/80710) | Windows desktop users (all) |
| **Memory providers silently broken** — no turns received, no errors | [#79339](https://github.com/NousResearch/hermes-agent/issues/79339) | Plugin authors, external memory backend users |
| **Feishu/Lark approval workflow broken for 4+ months** — must type `/approve` manually | 5 duplicate issues, 20+ combined comments | Feishu/Lark enterprise teams |
| **MCP stdio crash on common config** (`args: null`) | [#80652](https://github.com/NousResearch/hermes-agent/issues/80652) | MCP server operators |
| **SSH mode falsely claims unsupported** — blocks git/source installs | [#74411](https://github.com/NousResearch/hermes-agent/issues/74411) | Remote/SSH developers |
| **Large pastes flood composer** — no attachment fallback | [#66622](https://github.com/NousResearch/hermes-agent/issues/66622) → fixed in [#80716](https://github.com/NousResearch/hermes-agent/pull/80716) | Desktop power users |

**Positive signals**: UTF-16 file support ([#80717](https://github.com/NousResearch/hermes-agent/pull/80717)), large-paste handling ([#80716](https://github.com/NousResearch/hermes-agent/pull/80716)), MCP `_meta` visibility ([#80712](https://github.com/NousResearch/hermes-agent/pull/80712)) — all merged today, addressing real workflow friction.

## 8. Backlog Watch — Stalled High-Impact Items

| Item | Age | Why It Matters | Blocked On |
|------|-----|----------------|------------|
| [#10256](https://github.com/NousResearch/hermes-agent/pull/10256) Feishu card approval fix | ~3 months | Unblocks 5 duplicate issues; enterprise Feishu users | Maintainer review/merge |
| [#78647](https://github.com/NousResearch/hermes-agent/issues/78647) God-file sharding epic | 3 days (but policy since 2026-08) | Architectural debt across 20 files; "never reverted" mandate | Module boundary decisions per file (e.g., [#78645](https://github.com/NousResearch/hermes-agent/issues/78645), [#78637](https://github.com/NousResearch/hermes-agent/issues/78637), [#78632](https://github.com/NousResearch/hermes-agent/issues/78632)) |
| [#64182](https://github.com/NousResearch/hermes-agent/issues/64182) Plugin interface expansion | 24 days | Contributor PRs queued behind unstable interface | Design consensus on shared contracts |
| [#77484](https://github.com/NousResearch/hermes-agent/issues/77484) Security emission gaps | 4 days | Medium-severity leaks: raw commands, tracebacks, keys in checkpoints | Security review + redaction wrapper rollout |
| [#79339](https://github.com/NousResearch/hermes-agent/issues/79339) `sync_turn` never called | 2 days | Silent data loss for external memory backends | Root cause in agent loop; needs v0.20.1 hotfix |

---

### Project Health Scorecard (2026-08-07)
| Dimension | Score | Trend |
|-----------|-------|-------|
| **Release Cadence** | ⚠️ Low | No release in cycle; v0.20.0 regressions accumulating |
| **Bug Triage** | 🔴 Critical | 3 P0/P1 regressions unpatched; Feishu fix stalled 3 months |
| **Refactor Velocity** | 🟢 High | 20-file god-file sharding campaign active; 3 slices in PR today |
| **Community Contribution** | 🟡 Medium | Plugin interface blocked; but optional skills, LSP, MCP fixtures incoming |
| **Security Posture** | 🟡 Medium | Two MEDIUM emission-gap issues open; no exploit reports |

**Bottom line**: Hermes is **refactoring hard while regressions burn**. The god-file sharding epic is the right long-term play, but v0.20.0 needs a **hotfix branch immediately** (desktop panel, memory sync, MCP stdio, Windows updater). Feishu card fix (#10256) should be fast-tracked — it's the oldest high-impact stall.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-08-07

## 1. Today's Overview
PicoClaw showed modest maintenance activity in the past 24 hours with **2 pull requests updated** (1 merged, 1 open) and **zero issue activity**. The merged PR (#1349) delivers a significant enhancement to QQ Channel attachment handling, while the open PR (#3200) introduces a user-facing configuration feature for model fallback chains. No new releases were published. Overall project velocity appears low but steady, with development focused on platform integrations and UI/UX improvements for model management.

## 2. Releases
**No new releases** in the last 24 hours.

## 3. Project Progress
### Merged / Closed PRs
- **#1349** `[type: enhancement, domain: channel, go]` **feat(qq): support parsing and replying to more attachment types** — *Closed 2026-08-06*  
  **Changes:**  
  1. Parsing of QQ Channel emoji structures  
  2. Handling incoming voice, image, video, and file messages from QQ Channel  
  3. Replying with local voice, image, video, and file attachments (upload-before-send)  
  4. Prioritizes Markdown replies; falls back to plain text on failure  
  **Impact:** Completes QQ Channel media parity, enabling richer bot interactions on that platform.  
  🔗 [#1349999]

### Open PRs
- **#3200** `[OPEN]` **feat(models): add configurable default fallback chain** — *Created 2026-07-01, Updated 2026-08-06*  
  **Scope:** Web UI + backend API for defining a default model chain (primary + ordered fallbacks), persistable and reorderable.  
  **Status:** Awaiting review; no comments or reactions recorded.  
  🔗 [#3200](https://github.com/sipeed/picoclaw/pull/3200)

## 4. Community Hot Topics
With **zero issue updates** and only **one open PR without comments/reactions**, there are no active community discussions or hot topics in the last 24 hours. The two PRs represent internal/feature work rather than community-driven requests.

## 5. Bugs & Stability
**No bug reports, crashes, or regressions** were filed or updated in the last 24 hours. The merged PR (#1349) is an enhancement, not a bug fix.

## 6. Feature Requests & Roadmap Signals
| PR | Feature | Likelihood for Next Release |
|----|---------|-----------------------------|
| #3200 | Configurable default fallback chain for models (UI + API persistence) | **High** — PR is open, recently updated, and addresses a clear UX gap in multi-model workflows. |
| #1349 (merged) | QQ Channel rich-media support | **Delivered** — Already merged; will ship in next cut. |

**Prediction:** The model fallback chain (#3200) is the strongest candidate for the next minor release, as it improves core multi-model usability.

## 7. User Feedback Summary
No direct user feedback (issues, comments, reactions) surfaced in the last 24 hours. The two PRs reflect **maintainer/contributor-driven improvements** rather than reported pain points:
- QQ Channel media support (#1349) targets platform completeness.
- Model fallback chain (#3200) targets operational flexibility for multi-model deployments.

## 8. Backlog Watch
No long-unanswered issues or PRs appear in the provided 24-hour window. However, **PR #3200 has been open since 2026-07-01 (37 days) without review activity** — maintainers should prioritize triage to avoid contributor stall.

---

**Project Health Indicator:** 🟢 **Low churn, steady feature delivery** — No regressions, no community fires, but review throughput appears thin (one month-old PR awaiting attention).

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-08-07

---

## 1. Today's Overview
NanoClaw shows **high maintenance velocity** with 14 PRs updated in the last 24 hours (8 merged/closed, 6 open) and 2 issues updated. The project is actively addressing **upgrade reliability**, **skill hygiene**, **Telegram channel robustness**, and **scheduling resilience**. No new releases were cut today. Core-team members (glifocat, yairixStudio) are driving multiple fixes, indicating sustained internal investment. The open PR backlog includes a critical transactional upgrade fix (#3195) directly addressing today's new issue (#3194).

---

## 2. Releases
**No new releases published today.** The latest release data is not provided in the 24-hour window.

---

## 3. Project Progress — Merged/Closed PRs Today (8)

| PR | Type | Summary | Impact |
|----|------|---------|--------|
| [#3172](https://github.com/nanocoai/nanoclaw/pull/3172) | Refactor (core-team) | Removed stale `qodo` and Google MCP skills that depended on unconfigured SaaS integrations | Eliminates broken bundled skills; resolves [Issue #3171](https://github.com/nanocoai/nanoclaw/issues/3171) |
| [#2873](https://github.com/nanocoai/nanoclaw/pull/2873) | Fix (core-team) | Split skill pre-flight checks from credential validation so `/update-skills` can refresh code without re-auth | Improves skill update UX; unblocks automated skill refresh |
| [#2678](https://github.com/nanocoai/nanoclaw/pull/2678) | Fix | Re-arm recurrence from `failed` recurring tasks (not just `completed`) | Prevents permanently failed scheduled tasks from stalling recurrence |
| [#2679](https://github.com/nanocoai/nanoclaw/pull/2679) | Fix | New `notifyFailedTasks` sweep hook surfaces permanently failed scheduled tasks to the user | Turns silent log entries into actionable user notifications |
| [#2644](https://github.com/nanocoai/nanoclaw/pull/2644) | Fix | `extractReplyContext` now sets `isReplyToBot` when quoted message authored by bot | Enables reliable reply-to-bot detection for Telegram |
| [#2643](https://github.com/nanocoai/nanoclaw/pull/2643) | Fix | `evaluateEngage` now triggers on direct @mention, DM, or reply-to-bot even without keyword match | Fixes bot silence when directly addressed without keyword |
| [#2591](https://github.com/nanocoai/nanoclaw/pull/2591) | Fix | User IDs now namespaced by channel-type prefix (e.g., `tg:123`) instead of bare colon | Prevents cross-channel ID collisions; improves multi-channel identity |
| [#2213](https://github.com/nanocoai/nanoclaw/pull/2213) | Fix | Accept media-only messages (photo/video/file without caption) on Telegram/Chat SDK | Stops silent dropping of media-only user messages |

**Key theme:** Scheduling reliability, Telegram channel correctness, skill system hygiene, and identity namespacing.

---

## 4. Community Hot Topics

| Item | Activity | Underlying Need |
|------|----------|-----------------|
| [#3194](https://github.com/nanocoai/nanoclaw/issues/3194) **Issue** — `/update-nanoclaw` can stamp success without recoverable cutover | New today (0 comments, 0 👍) but **critical severity**; directly tracked by PR [#3195](https://github.com/nanocoai/nanoclaw/pull/3195) | **Transactional upgrades**: users need atomic, rollback-safe updates covering Git, SQLite, gitignored config, and external components |
| [#3195](https://github.com/nanocoai/nanoclaw/pull/3195) **PR** — `fix(update): make NanoClaw upgrades transactional` (core-team) | Open, created 2026-08-06 | Direct fix for #3194; high priority for next release |
| [#3190](https://github.com/nanocoai/nanoclaw/pull/3190) **PR** — `feat: add Tavily MCP tool skill` | Open, 2 days old | **Web search capability** via Tavily MCP; utility skill (no source changes) — community demand for built-in search tools |
| [#3186](https://github.com/nanocoai/nanoclaw/pull/3186) **PR** — `refactor: add host seams for skill-owned capabilities` | Open, 3 days old | **Extensibility**: allows skills to register capabilities with the host, enabling richer skill-host contracts |

**Signal:** Upgrade safety and skill extensibility are the top architectural conversations.

---

## 5. Bugs & Stability — Ranked by Severity

| Severity | Issue/PR | Status | Fix PR |
|----------|----------|--------|--------|
| **Critical** | [#3194](https://github.com/nanocoai/nanoclaw/issues/3194) — `/update-nanoclaw` leaves SQLite, config, external components unprotected during update | **Open** | [#3195](https://github.com/nanocoai/nanoclaw/pull/3195) (open, core-team) |
| **High** | [#3171](https://github.com/nanocoai/nanoclaw/issues/3171) — Bundled qodo skills require unconfigured SaaS API key | **Closed** | [#3172](https://github.com/nanocoai/nanoclaw/pull/3172) (merged) |
| **Medium** | [#2213](https://github.com/nanocoai/nanoclaw/pull/2213) — Media-only Telegram messages silently dropped | **Closed** | Merged |
| **Medium** | [#2643](https://github.com/nanocoai/nanoclaw/pull/2643) — Bot ignores direct @mention/DM/reply without keyword | **Closed** | Merged |
| **Medium** | [#2644](https://github.com/nanocoai/nanoclaw/pull/2644) — Reply-to-bot detection broken in Telegram | **Closed** | Merged |
| **Medium** | [#2678](https://github.com/nanocoai/nanoclaw/pull/2678) — Failed recurring tasks never re-arm | **Closed** | Merged |
| **Low** | [#2705](https://github.com/nanocoai/nanoclaw/pull/2705) — `use-native-credential-proxy` skill silently falls back to OneCLI gateway | **Open** (since 2026-06-07) | Open PR, stale |

**Note:** The critical upgrade bug (#3194) has an active fix PR (#3195) from core-team. The credential proxy bug (#2705) has been open >2 months without merge.

---

## 6. Feature Requests & Roadmap Signals

| Signal | Source | Likelihood for Next Version |
|--------|--------|-----------------------------|
| **Tavily MCP search skill** | [PR #3190](https://github.com/nanocoai/nanoclaw/pull/3190) (utility skill, follows guidelines) | **High** — ready-to-merge utility skill, no source changes needed |
| **Host seams for skill-owned capabilities** | [PR #3186](https://github.com/nanocoai/nanoclaw/pull/3186) (refactor, core extensibility) | **Medium** — architectural, may need design review |
| **Telegram rich message support** | [PR #3193](https://github.com/nanocoai/nanoclaw/pull/3193) (Chat SDK update) | **High** — follows recent Telegram fixes (#2213, #2643, #2644) |
| **Transactional upgrades** | [Issue #3194](https://github.com/nanocoai/nanoclaw/issues/3194) + [PR #3195](https://github.com/nanocoai/nanoclaw/pull/3195) | **Critical** — blocker for reliable self-updates |
| **`--rw` flag for `groups config add-mount`** | [PR #3149](https://github.com/nanocoai/nanoclaw/pull/3149) (CLI enhancement) | **Medium** — small CLI UX improvement |

**Prediction:** Next patch will likely include #3195 (transactional upgrade), #3190 (Tavily skill), #3193 (Telegram SDK), and #3149 (CLI flag). Host seams (#3186) may target a minor version.

---

## 7. User Feedback Summary

| Pain Point | Evidence | Frequency |
|------------|----------|-----------|
| **Upgrades can corrupt state** | [#3194](https://github.com/nanocoai/nanoclaw/issues/3194) — SQLite, config, external components unprotected | New, critical |
| **Bundled skills broken out of the box** | [#3171](https://github.com/nanocoai/nanoclaw/issues/3171) — qodo skills need unconfigured SaaS | Resolved via skill removal (#3172) |
| **Media-only messages lost** | [#2213](https://github.com/nanocoai/nanoclaw/pull/2213) — photos/videos/files without caption dropped | Fixed |
| **Bot ignores direct address** | [#2643](https://github.com/nanocoai/nanoclaw/pull/2643) — @mention/DM/reply without keyword = silence | Fixed |
| **Failed scheduled tasks disappear** | [#2678](https://github.com/nanocoai/nanoclaw/pull/2678), [#2679](https://github.com/nanocoai/nanoclaw/pull/2679) — no re-arm, no notification | Fixed |
| **Credential proxy doesn't actually bypass gateway** | [#2705](https://github.com/nanocoai/nanoclaw/pull/2705) — silent fallback to OneCLI | **Unfixed >2 months** |

**Satisfaction signal:** Rapid fixes for Telegram and scheduling bugs show responsiveness. The stale credential proxy PR (#2705) and new critical upgrade bug (#3194) are dissatisfaction vectors.

---

## 8. Backlog Watch — Needing Maintainer Attention

| Item | Age | Why It Matters |
|------|-----|----------------|
| [#2705](https://github.com/nanocoai/nanoclaw/pull/2705) `fix(use-native-credential-proxy): actually bypass the OneCLI gateway` | **61 days** (opened 2026-06-07) | Security/privacy: skill promises to bypass gateway but silently falls back; affects credential isolation |
| [#3149](https://github.com/nanocoai/nanoclaw/pull/3149) `fix(cli): add --rw flag to groups config add-mount` | 9 days | Small CLI gap; blocks read-write mount use cases |
| [#3186](https://github.com/nanocoai/nanoclaw/pull/3186) `refactor: add host seams for skill-owned capabilities` | 3 days | Architectural; enables next-gen skill capabilities; needs core-team design sign-off |
| [#3190](https://github.com/nanocoai/nanoclaw/pull/3190) `feat: add Tavily MCP tool skill` | 2 days | High-value utility skill; ready for review/merge |
| [#3193](https://github.com/nanocoai/nanoclaw/pull/3193) `fix(telegram): update Chat SDK for rich messages` | 1 day | Follows recent Telegram fixes; keeps channel current |

**Action items:** Prioritize #3195 (transactional upgrade) and #2705 (credential proxy). Review #3190 and #3193 for quick merges. Schedule design review for #3186.

---

*Digest generated from GitHub data as of 2026-08-07. All links point to nanocoai/nanoclaw repository.*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-08-07

---

## 1. Today's Overview

IronClaw released **v1.1.0** on 2026-08-06 — the first stable release since 1.0.0 — headlined by **extension reach** (arbitrary hosted MCP server registration, IronHub deep-link installs, durable cross-channel file attachments, and Slack improvements). The project is in a **high-velocity bug-bash/qa phase**: 50 issues and 50 PRs updated in the last 24 hours, with 27 issues and 33 PRs still open. A significant chunk of activity centers on the new **Inspector/debugging subsystem** (4 large PRs adding live diagnostics, prompt inspection, model-call statistics, and a debug panel), while the remainder addresses regressions in routines, Slack delivery, activity panel UX, authentication flows, and libSQL FTS recall. Overall health: **active stabilization post-release** with a strong focus on observability and integration reliability.

---

## 2. Releases

### `ironclaw-v1.1.0` (2026-08-06)
[Release Notes](https://github.com/nearai/ironclaw/releases/tag/ironclaw-v1.1.0)

| Category | Details |
|----------|---------|
| **Headline Features** | • Register arbitrary hosted MCP servers<br>• Install extensions from IronHub deep links<br>• Durable file attachments that persist across channels<br>• Slack integration improvements |
| **Promoted From** | `1.1.0-rc.1` plus fixes listed under "Fixed since 1.1.0-rc.1" |
| **Breaking Changes** | None explicitly noted in summary; verify MCP registration API and Slack delivery changes if upgrading from 1.0.x |
| **Migration Notes** | Existing MCP registrations should continue working; new definition-only registration model (see PR #7253) keeps custom MCP private by default. Slack personal-DM target restoration (PR #7300) may affect routing for pre-existing routines. |

---

## 3. Project Progress (Merged/Closed PRs Today)

| PR | Title | Scope | Impact |
|----|-------|-------|--------|
| [#7235](https://github.com/nearai/ironclaw/pull/7235) | feat(inspector): add operator inspection API and live updates | **Inspector / Diagnostics** | Core observability backend: bounded run snapshots, prompt diagnostics, tool activity details, live event stream with cursor resume & keepalive |
| [#7289](https://github.com/nearai/ironclaw/pull/7289) | fix(memory): sanitize FTS queries so natural-language recall works on libSQL (#7275) | **Memory / libSQL FTS** | Fixes production recall defect; validates persistent-memory recall across conversations on embedded-libSQL backend |
| [#7303](https://github.com/nearai/ironclaw/pull/7303) | fix(docker): install curl so orchestrator healthchecks can run | **Docker / CI** | Unblocks hosted staging nodes stuck in `error` status despite healthy app |
| [#7259](https://github.com/nearai/ironclaw/pull/7259) | docs: enforce docs/ publication boundary (frozen .mintignore + CI gate) | **Documentation / CI** | Closes live leak of internal docs (`docs/design/`, `docs/research/`) on public Mintlify site |
| [#5504](https://github.com/nearai/ironclaw/issues/5504) | [QA] Routine creation hangs without returning result or error | **Routines** | Closed — root cause likely addressed in v1.1.0 routine execution path |
| [#5557](https://github.com/nearai/ironclaw/issues/5557) | Logs deep link requires opening twice to load selected conversation | **UI / Logs** | Closed — deep-link navigation fixed |
| [#5704](https://github.com/nearai/ironclaw/issues/5704) | Image preview becomes transparent while chat is active | **UI / Chat** | Closed — opacity regression fixed |
| [#5705](https://github.com/nearai/ironclaw/issues/5705) | Terminal icon in chat UI has no disable option | **UI / Chat** | Closed — toggle added or icon removed |
| [#5706](https://github.com/nearai/ironclaw/issues/5706) | Sidebar shows raw thread ID when instance is lagging | **UI / Sidebar** | Closed — loading state handling improved |
| [#5838](https://github.com/nearai/ironclaw/issues/5838) | Run fails with context compaction error despite successful tool execution | **Agent Runtime** | Closed — compaction retry logic hardened |
| [#5877](https://github.com/nearai/ironclaw/issues/5877) | Slack notification delivered to the wrong user | **Slack / Security** | **Critical** — misrouted notifications; closed with routing fix |
| [#3533](https://github.com/nearai/ironclaw/issues/3533) | Telegram in v0.28.1 does not automatically setup from UI | **Telegram** | Closed — legacy issue resolved in current stack |
| [#3535](https://github.com/nearai/ironclaw/issues/3535) | UI Timestamps are incorrect for conversations | **UI / Chat** | Closed — timestamp rendering fixed |

---

## 4. Community Hot Topics (Most Active Issues/PRs)

| Item | Type | Comments | Signals |
|------|------|----------|---------|
| [#5553](https://github.com/nearai/ironclaw/issues/5553) | Bug | 4 | **Approval notifications vanish** — users lose critical consent prompts for capabilities (web search, etc.). High UX risk: silent failures erode trust. |
| [#5702](https://github.com/nearai/ironclaw/issues/5702) | Bug | 4 | **GitHub integration returns HTTP 403** — authenticated operations (issue search/create) fail despite configured integration. Blocks developer workflows. |
| [#5522](https://github.com/nearai/ironclaw/issues/5522) | Bug | 3 | **Reborn routine fails reading Slack DMs** — missing Slack read capability triggers `capability_info` retry loop. Exposes capability discovery gap. |
| [#5701](https://github.com/nearai/ironclaw/issues/5701) | Bug | 3 | **Activity panel hides tool details & doesn't update live** — operators can't debug in-flight runs. Core observability gap. |
| [#5834](https://github.com/nearai/ironclaw/issues/5834) | Bug | 3 | **Slack disconnect rejected by agent** — agent claims inability, delivers unrelated content. Self-service integration management broken. |
| [#7236](https://github.com/nearai/ironclaw/pull/7236) | PR | — | **Inspector debug panel shell + live diagnostics client** — opt-in via `?debug=true`. Largest open PR; enables real-time run inspection. |
| [#7277](https://github.com/nearai/ironclaw/pull/7277) | PR | — | **Model call statistics in Inspector** — per-call latency, tokens, cache, fallbacks. Critical for cost/performance tuning. |
| [#7239](https://github.com/nearai/ironclaw/pull/7239) | PR | — | **Prompt inspection & Prompt tab** — captures exact host-resolved prompt pre-invocation. Essential for prompt engineering & debugging. |

**Underlying Needs**:  
1. **Observability** — Operators need live, granular visibility into runs (tools, prompts, model calls) — addressed by Inspector PRs.  
2. **Integration Reliability** — Slack, GitHub, MCP capabilities fail silently or misroute; users cannot self-serve disconnect/reconnect.  
3. **Approval UX** — Consent flows for capabilities are fragile; notifications disappear, blocking human-in-the-loop workflows.  
4. **Routine Execution Stability** — Lease expiration, thread attachment, context compaction, and "no thread attached" errors plague scheduled runs.

---

## 5. Bugs & Stability (Reported/Updated Today, Ranked by Severity)

| Severity | Issue | Description | Fix PR / Status |
|----------|-------|-------------|-----------------|
| **Critical** | [#5877](https://github.com/nearai/ironclaw/issues/5877) | Slack notifications sent to wrong user — data leakage risk | Closed (fix merged) |
| **High** | [#5553](https://github.com/nearai/ironclaw/issues/5553) | Approval notifications disappear — users miss capability consent prompts | Open — no linked fix PR yet |
| **High** | [#5702](https://github.com/nearai/ironclaw/issues/5702) | GitHub issue search/create returns 403 — integration non-functional | Open — no linked fix PR yet |
| **High** | [#5456](https://github.com/nearai/ironclaw/issues/5456) | Runner lease expires (90s) before multi-tool routines complete | Open — lease threshold too aggressive |
| **High** | [#5836](https://github.com/nearai/ironclaw/issues/5836) | Scheduled routines fail with "No thread attached" — 0% success rate | Open — systemic thread attachment bug |
| **Medium** | [#5522](https://github.com/nearai/ironclaw/issues/5522) | Reborn routine fails reading Slack DMs — missing capability + retry loop | Open |
| **Medium** | [#5701](https://github.com/nearai/ironclaw/issues/5701) | Activity panel collapses tool details, no live updates | Open |
| **Medium** | [#5834](https://github.com/nearai/ironclaw/issues/5834) | Agent rejects Slack disconnect request, gives unrelated response | Open |
| **Medium** | [#5707](https://github.com/nearai/ironclaw/issues/5707) | Routine creation response exposes internal implementation details | Open |
| **Medium** | [#5776](https://github.com/nearai/ironclaw/issues/5776) | Long-output prompt → model timeouts → degraded to generic "invalid result" | Open — timeout handling + error masking |
| **Medium** | [#7275](https://github.com/nearai/ironclaw/issues/7275) | libSQL FTS recall broken for natural-language queries (punctuation, reserved words) | Fixed in [#7289](https://github.com/nearai/ironclaw/pull/7289) / [#7288](https://github.com/nearai/ironclaw/pull/7288) |
| **Low** | [#5557](https://github.com/nearai/ironclaw/issues/5557) | Logs deep link requires double-click | Closed |
| **Low** | [#5704](https://github.com/nearai/ironclaw/issues/5704) | Image preview transparency during active run | Closed |
| **Low** | [#5705](https://github.com/nearai/ironclaw/issues/5705) | Terminal icon lacks disable toggle | Closed |
| **Low** | [#5706](https://github.com/nearai/ironclaw/issues/5706) | Sidebar shows raw thread UUID under load | Closed |

---

## 6. Feature Requests & Roadmap Signals

| Signal | Source | Likelihood for Next Version |
|--------|--------|----------------------------|
| **Inspector / Live Diagnostics** | PRs [#7235](https://github.com/nearai/ironclaw/pull/7235), [#7236](https://github.com/nearai/ironclaw/pull/7236), [#7239](https://github.com/nearai/ironclaw/pull/7239), [#7277](https://github.com/nearai/ironclaw/pull/7277) | **Very High** — 4 large PRs in flight, opt-in via `?debug=true`, addresses top community pain (observability) |
| **Explicit Channel Delivery Tool (Two-Lane Model)** | PR [#7157](https://github.com/nearai/ironclaw/pull/7157) | **High** — approved design doc, implements conversation lifecycle + notification channels, deletes delivery heuristics |
| **Nostr Host Functions for WASM Tools** | PR [#7184](https://github.com/nearai/ironclaw/pull/7184) | **Medium** — adds `nostr-sign-event`, `nostr-publish`, `nostr-fetch`; expands WASM sandbox capabilities |
| **Docker & Railway User Sandbox Profiles** | PR [#7214](https://github.com/nearai/ironclaw/pull/7214) | **High** — explicit profiles for hosted deployments, tenant+user scoping, non-root workers |
| **Guidance Unification (Canonical Docs + CI Gate)** | PR [#7306](https://github.com/nearai/ironclaw/pull/7306) | **High** — follows [#7264](https://github.com/nearai/ironclaw/pull/7264); prevents doc rot, single source of truth |
| **Private MCP Registration (Definition-Only)** | PR [#7253](https://github.com/nearai/ironclaw/pull/7253) | **High** — aligns with v1.1.0 "extension reach"; keeps custom MCP private by default |
| **Slack Personal-DM Target Restoration** | PR [#7300](https://github.com/nearai/ironclaw/pull/7300) | **High** — fixes regression from v1.1.0, standardized canaries |
| **OAuth Scope Parameter Fix (Empty Ceiling)** | PR [#7309](https://github.com/nearai/ironclaw/pull/7309) | **Medium** — RFC 6749 compliance, unblocks recipes with empty scope |

**Predicted Next Version (1.1.1 / 1.2.0)**: Inspector observability stack, channel delivery tool, sandbox profiles, MCP registration hardening, and routine execution stability fixes (lease, thread attachment).

---

## 7. User Feedback Summary (Real Pain Points)

| Pain Point | Evidence | User Impact |
|------------|----------|-------------|
| **"I can't trust approval flows"** | [#5553](https://github.com/nearai/ironclaw/issues/5553) — notifications flash/disappear; subsequent approvals never appear | Users cannot reliably grant capabilities; workflows stall silently |
| **"GitHub integration is broken"** | [#5702](https://github.com/nearai/ironclaw/issues/5702) — 403 on issue search/create despite config | Developers blocked from issue-driven automation |
| **"Routines just fail with no debug info"** | [#5456](https://github.com/nearai/ironclaw/issues/5456), [#5836](https://github.com/nearai/ironclaw/issues/5836), [#5507](https://github.com/nearai/ironclaw/issues/5507) — lease expiry, "no thread attached", disabled "Open run" button | Scheduled automation unreliable; post-mortem impossible |
| **"Activity panel is useless during runs"** | [#5701](https://github.com/nearai/ironclaw/issues/5701) — collapsed summary, no live updates | Operators fly blind during long-running multi-tool executions |
| **"Slack disconnect doesn't work / notifications go to wrong person"** | [#5834](https://github.com/nearai/ironclaw/issues/5834), [#5877](https://github.com/nearai/ironclaw/issues/5877) | Integration management broken; privacy breach risk |
| **"Chat creation gets slower as history grows"** | [#5509](https://github.com/nearai/ironclaw/issues/5509) — frontend latency scales with conversation count | Power users penalized; workaround = delete history |
| **"Can't delete old routines"** | [#5510](https://github.com/nearai/ironclaw/issues/5510) — no working delete mechanism | Stale routines pollute workspace, compound Slack

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-08-07

## 1. Today's Overview
LobsterAI saw **no new releases** and **zero merged/closed PRs** in the last 24 hours. Activity consists of **5 issues updated** (3 stale issues from April 2026 resurfaced, 2 new issues filed yesterday/today) and **2 stale PRs** (both from April 2026) receiving updates. The project is in a **maintenance/backlog-clearing phase** with community members raising usability bugs and feature requests, but no active development merges today. Stale labels on older items suggest a backlog that has not been triaged or resolved for months.

## 2. Releases
**No new releases** published today. Latest release data not provided in the 24-hour window.

## 3. Project Progress
**No PRs merged or closed today.** The two open PRs are both marked `[stale]` and have been open since April 2026:
- **#1197** – *Agent management page interaction optimization* (simplify delete flow, sidebar improvements) — [PR #1197](https://github.com/netease-youdao/LobsterAI/pull/1197)
- **#1199** – *feat(model): add context window and token settings* (per-model `contextWindow`/`maxTokens`, persist/export, propagate to Cowork/OpenClaw) — [PR #1199](https://github.com/netease-youdao/LobsterAI/pull/1199)

Neither has recent review activity; both conflict with main branch and await maintainer attention.

## 4. Community Hot Topics
| Item | Type | Comments | Reactions | Summary |
|------|------|----------|-----------|---------|
| [#1196](https://github.com/netease-youdao/LobsterAI/issues/1196) | Issue (stale) | 1 | 0 | **Forced creation of 6 system files (Agents.md, User.md, etc.) in every working directory** — users want global/shared config or hidden-directory storage like Claude Code. |
| [#1198](https://github.com/netease-youdao/LobsterAI/issues/1198) | Issue (stale) | 1 | 0 | **Gateway restart UX broken**: progress bar disappears mid-restart, status unknown, subsequent chats show “model unavailable” with browser-service errors. |
| [#2443](https://github.com/netease-youdao/LobsterAI/issues/2443) | Bug (new) | 0 | 0 | **Model IDs containing slashes (e.g., `deepseek-ai/DeepSeek-V4-Flash`) fail in UI** for custom OpenAI-compatible providers (SiliconFlow). Blocks model selection. |
| [#2444](https://github.com/netease-youdao/LobsterAI/issues/2444) | Feature Request (new) | 0 | 0 | **Input-box edit mode**: toggle to make Enter=newline, Ctrl+Enter=send, with expanded editing area and optional WYSIWYG Markdown. |
| [#2442](https://github.com/netease-youdao/LobsterAI/issues/2442) | Question (new) | 0 | 0 | **Why shell wrapper remains PowerShell 5.1** instead of upgrading to 7.4 (pwsh). User suspects Node.js default spawn behavior. |

**Underlying needs**: Users want **less filesystem noise**, **reliable gateway/restart feedback**, **compatibility with modern provider model IDs**, and **power-user editing ergonomics**. The stale issues indicate these pain points have persisted for months without resolution.

## 5. Bugs & Stability
| Severity | Issue | Description | Fix PR? |
|----------|-------|-------------|---------|
| **High** | [#2443](https://github.com/netease-youdao/LobsterAI/issues/2443) | Custom provider model IDs with `/` (common in SiliconFlow, HuggingFace, etc.) cannot be selected in Settings → Models. Affects all OpenAI-compatible services using namespaced model IDs. | No |
| **Medium** | [#1198](https://github.com/netease-youdao/LobsterAI/issues/1198) | Gateway restart loses progress indication; post-restart chats show “model unavailable” and browser-service errors. User cannot determine restart status. | No |
| **Low** | [#1196](https://github.com/netease-youdao/LobsterAI/issues/1196) | Forced creation of 6 markdown files pollutes working directories; files reappear after deletion. Workflow disruption. | No |

No bug-fix PRs opened today.

## 6. Feature Requests & Roadmap Signals
1. **Per-model token/context configuration** — Already implemented in stale PR [#1199](https://github.com/netease-youdao/LobsterAI/pull/1199) (contextWindow, maxTokens per model, persisted/exported). Likely candidate for next release if merged.
2. **Global/shared system prompts** — Issue [#1196](https://github.com/netease-youdao/LobsterAI/issues/1196) requests Claude-Code-style global `agents.md` instead of per-project files.
3. **Input-box edit mode** — Issue [#2444](https://github.com/netease-youdao/LobsterAI/issues/2444) proposes a toggle for Enter=newline / Ctrl+Enter=send with expanded editor. High usability value for long prompts.
4. **Agent management UX** — PR [#1197](https://github.com/netease-youdao/LobsterAI/pull/1197) simplifies delete flow (card-level action vs. detail panel). Ready but stalled.

**Prediction**: If maintainers triage the stale PRs, **#1199 (model token settings)** and **#1197 (Agent UI)** are closest to ship. The new feature request **#2444** aligns with competitor UX (e.g., ChatGPT, Claude) and may be prioritized.

## 7. User Feedback Summary
- **Frustration with filesystem hygiene**: “Too messy, files reappear after deletion” ([#1196](https://github.com/netease-youdao/LobsterAI/issues/1196)).
- **Unreliable gateway/restart experience**: “Progress bar vanishes, don’t know if it’s done, then model unavailable” ([#1198](https://github.com/netease-youdao/LobsterAI/issues/1198)).
- **Provider compatibility gap**: “SiliconFlow model IDs with slashes don’t work in UI” ([#2443](https://github.com/netease-youdao/LobsterAI/issues/2443)).
- **Editing friction**: “Shift+Enter for newline is error-prone; need dedicated edit mode” ([#2444](https://github.com/netease-youdao/LobsterAI/issues/2444)).
- **Technical curiosity/concern**: “Why stuck on PowerShell 5.1?” ([#2442](https://github.com/netease-youdao/LobsterAI/issues/2442)) — suggests users notice underlying tech stack aging.

Overall sentiment: **Power users hitting workflow and compatibility walls**; stale issues indicate unresolved friction.

## 8. Backlog Watch — Items Needing Maintainer Attention
| Item | Age | Why It Matters |
|------|-----|----------------|
| [PR #1199](https://github.com/netease-youdao/LobsterAI/pull/1199) | 4+ months | Adds per-model `contextWindow`/`maxTokens` — core config feature; conflicts with main, needs rebase/review. |
| [PR #1197](https://github.com/netease-youdao/LobsterAI/pull/1197) | 4+ months | Agent management UX improvement; delete-from-card, sidebar fixes. Ready but stale. |
| [Issue #1196](https://github.com/netease-youdao/LobsterAI/issues/1196) | 4+ months | Filesystem pollution — affects every user, every project. Simple fix: global config dir or hidden folder. |
| [Issue #1198](https://github.com/netease-youdao/LobsterAI/issues/1198) | 4+ months | Gateway restart UX regression; blocks confidence in background services. |
| [Issue #2443](https://github.com/netease-youdao/LobsterAI/issues/2443) | 1 day | **New, high-impact bug**: breaks model selection for major providers (SiliconFlow, etc.). Should be triaged immediately. |

**Recommendation**: Prioritize merging **#1199** and **#1197** (rebasing first), fix **#2443** (likely a validation/sanitization issue on model ID input), and address **#1196**/**#1198** as quality-of-life/stability items. The backlog shows a project with valuable contributions stalled by lack of triage bandwidth.

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

# CoPaw (QwenPaw) Project Digest — 2026-08-07

## 1. Today's Overview
CoPaw shows **very high development velocity** with 84 total GitHub updates in 24 hours (34 issues, 50 PRs). The project is in active stabilization mode: 29 PRs were merged/closed today, addressing critical bugs in provider tool-calls, MCP integration, desktop UI, session persistence, and AgentScope 2.0 compatibility. No new release was cut, but the volume of fixes suggests a **2.1.0 release candidate** is imminent. Open issue count remains elevated (17 active), with several high-impact regressions still unresolved.

## 2. Releases
**No new releases today.** The last published version is **v2.0.1** with **v2.1.0-beta.1/2** in testing. Today's merged PRs collectively address most known blockers for a stable 2.1.0 release.

## 3. Project Progress — Merged/Closed PRs Today
| PR | Type | Summary | Impact |
|----|------|---------|--------|
| [#6605](https://github.com/agentscope-ai/QwenPaw/pull/6605) | **Fix** | Return typed `ToolCallBlock` objects from thinking/text tags; preserves JSON args, unique stream IDs | **Critical** — fixes provider tool-call parsing for Responses-compatible models |
| [#6664](https://github.com/agentscope-ai/QwenPaw/pull/6664) | **Fix** | Degrade gracefully when Codex CLI absent | **High** — unblocks harness tests/CI |
| [#6530](https://github.com/agentscope-ai/QwenPaw/pull/6530) | **Fix** | Editable per-tool call limit names (blur commit, trim, dedupe) | **Medium** — UX polish for tool governance |
| [#6744](https://github.com/agentscope-ai/QwenPaw/pull/6744) | **Fix** | Atomic agent/ACL config writes on shared filesystems (OSSFS/FUSE) | **High** — prevents config corruption on network mounts |
| [#6731](https://github.com/agentscope-ai/QwenPaw/pull/6731) | **Fix** | `execute_shell_command` crash on `sandbox_config` dataclass error | **Critical** — restores shell tool usability |
| [#6707](https://github.com/agentscope-ai/QwenPaw/pull/6707) | **Fix** | 400 error when thinking-mode history contains tool calls + `reasoning_content` | **High** — unblocks DeepSeek/thinking models in long sessions |
| [#6708](https://github.com/agentscope-ai/QwenPaw/pull/6708) | **Fix** | Retry on SSE in-stream 503 (gateway error inside 200 OK stream) | **High** — improves provider resilience |
| [#6687](https://github.com/agentscope-ai/QwenPaw/pull/6687) | **Fix** | OpenRouter multimodal probe overwriting true capabilities with false | **Medium** — restores image/video support detection |
| [#6762](https://github.com/agentscope-ai/QwenPaw/pull/6762) | **Fix** | Desktop: tool-call block line-wrapping (CodeMirror `lineWrapping`) | **Medium** — UX fix for long shell commands |
| [#6698](https://github.com/agentscope-ai/QwenPaw/pull/6698) | **Fix** | Browser SDK `open()` WireProtocolError (isolated Playwright) | **High** — restores browser tool in Desktop beta |
| [#6557](https://github.com/agentscope-ai/QwenPaw/pull/6557) | **Fix** | MCP tool names starting with `-` causing 400 on strict LLMs (Kimi) | **High** — MCP compatibility |
| [#6476](https://github.com/agentscope-ai/QwenPaw/pull/6476) | **Fix** | Matrix E2E encryption (olm/vodozemac + peerc) | **Medium** — channel reliability |
| [#6611](https://github.com/agentscope-ai/QwenPaw/pull/6611) | **Refactor** | Align Scroll/memory with AgentScope 2.0 lifecycle (single context protocol) | **Architectural** — reduces state inconsistency risk |
| [#6741](https://github.com/agentscope-ai/QwenPaw/pull/6741) + [#6739](https://github.com/agentscope-ai/QwenPaw/pull/6739) | **Feat/Docs** | ReMe embedding model factory, connectivity validation, config guides (OpenAI, DashScope, Gemini, Ollama) | **High** — completes memory/embedding configuration story |

## 4. Community Hot Topics (Most Comments/Reactions)
| Item | Status | Comments | Core Need |
|------|--------|----------|-----------|
| [#6684](https://github.com/agentscope-ai/QwenPaw/issues/6684) Channel retry functionality | ✅ Closed | 8 | **Self-healing channels** — auto-reconnect when Matrix/self-hosted services start slower than QwenPaw |
| [#6588](https://github.com/agentscope-ai/QwenPaw/issues/6588) `spawn_subagent` empty `batch` placeholder | ✅ Closed | 6 | **Correct batch-mode detection** — don't treat empty placeholder as batch |
| [#6601](https://github.com/agentscope-ai/QwenPaw/issues/6601) Empty response not reported | 🔴 **Open** | 5 | **Silent failure detection** — long sessions hit context window, model returns empty, no error surfaced |
| [#6667](https://github.com/agentscope-ai/QwenPaw/issues/6667) DeepSeek thinking mode fails multi-turn | ✅ Closed | 5 | **`reasoning_content` persistence** — OpenAI formatter drops `ThinkingBlock`, breaks multi-turn |
| [#6732](https://github.com/agentscope-ai/QwenPaw/issues/6732) MCP tools regularly fail, require restart | 🔴 **Open** | 3 | **MCP connection lifecycle** — tools become "unregistered/nonexistent" after hours; only container restart fixes |
| [#6700](https://github.com/agentscope-ai/QwenPaw/issues/6700) Large tool output → session load hang | ✅ Closed | 3 | **Output truncation + history pagination** — MB-scale tool results freeze web console |
| [#6612](https://github.com/agentscope-ai/QwenPaw/issues/6612) QwenPaw 2.0.1 + AgentScope 2.0.4.post1 incompatibility | 🔴 **Open** | 3 | **Version pinning/compatibility** — proactive subsystem crashes (`Msg.content` type, tool-permission deadlock) |

**Underlying theme**: Users are hitting **statefulness bugs** in long-running sessions (MCP disconnection, context overflow, thinking-mode history corruption) and **integration fragility** (AgentScope version skew, provider capability detection).

## 5. Bugs & Stability — Today's Reports (Ranked by Severity)
| Severity | Issue | Status | Fix PR? | Notes |
|----------|-------|--------|---------|-------|
| **Critical** | [#6775](https://github.com/agentscope-ai/QwenPaw/issues/6775) Malware Bytes flags Desktop Windows as Trojan Loader | 🔴 Open | No | **New today**. False positive likely, but blocks adoption; needs code-signing/SBOM transparency |
| **Critical** | [#6768](https://github.com/agentscope-ai/QwenPaw/issues/6768) Agent infinite loop after multi-step task (hours unresponsive) | 🔴 Open | No | **New today**. Session blocked; messages received but not processed |
| **High** | [#6732](https://github.com/agentscope-ai/QwenPaw/issues/6732) MCP tools periodically invalidate (nightly/hourly) | 🔴 Open | No | Requires Docker restart; suggests connection leak or session expiry |
| **High** | [#6612](https://github.com/agentscope-ai/QwenPaw/issues/6612) AgentScope 2.0.4.post1 incompatibility (proactive crashes, deadlock) | 🔴 Open | Partial ([#6615](https://github.com/agentscope-ai/QwenPaw/pull/6615) fixes config loading) | Blocks upgrade; two distinct runtime failures |
| **High** | [#6601](https://github.com/agentscope-ai/QwenPaw/issues/6601) Empty response silent failure in long sessions | 🔴 Open | No | Framework-level; model returns empty near context limit, no error |
| **High** | [#6726](https://github.com/agentscope-ai/QwenPaw/issues/6726) Long session + heavy tool usage → 400 "tool must respond to tool_calls" | 🔴 Open | No | History corruption after 20–30+ tool_call/tool_result pairs |
| **Medium** | [#6756](https://github.com/agentscope-ai/QwenPaw/issues/6756) `run_tool_batch` → "No toolkit available in current context" | 🔴 Open | No | ContextVar injection missing at `POST_AGENT_BUILD` |
| **Medium** | [#6755](https://github.com/agentscope-ai/QwenPaw/issues/6755) Cross-day session date/weekday confusion (scheduling errors) | 🔴 Open | No | Agent thinks "today is Wed" when it's Thu; off-by-one in date reasoning |
| **Medium** | [#6722](https://github.com/agentscope-ai/QwenPaw/issues/6722) Background forked subagent reports success but worktree commit missing | 🔴 Open | No | Silent data loss in forked workflows |
| **Low** | [#6770](https://github.com/agentscope-ai/QwenPaw/issues/6770) Chrome tab lifetime not configurable across responses | 🔴 Open | No | Browser SDK UX |
| **Low** | [#6761](https://github.com/agentscope-ai/QwenPaw/issues/6761) MCP 2026-07-28 stateless spec support? | 🔴 Open | No | Protocol breaking change; client may need rewrite |

## 6. Feature Requests & Roadmap Signals
| Request | Source | Likelihood for Next Version | Rationale |
|---------|--------|

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-08-07

## 1. Today's Overview
ZeroClaw shows **high governance and stabilization activity** with 35 issues and 50 PRs updated in the last 24 hours. The project is in a **pre-v0.9.0 hardening phase** — multiple RFCs for architecture, security, and governance are in progress or accepted, while critical bug fixes (pipeline security bypass, Telegram command limits, SOP reliability) are being merged. No new release was cut today, but 7 PRs were closed/merged, indicating steady integration velocity. The backlog contains several **high-severity security and correctness bugs** (confused deputy in pipelines, verifiable-intent chain verification, SOP silent failures) that are actively being addressed.

---

## 2. Releases
**No new releases today.** Current version remains **0.8.4** (implied by issue #9800). The v0.9.0 milestone tracker (#7432) shows auth, security hardening, gateway boundaries, and breaking changes queued.

---

## 3. Project Progress — Merged/Closed PRs Today
| PR | Title | Area | Impact |
|----|-------|------|--------|
| [#9737](https://github.com/zeroclaw-labs/zeroclaw/pull/9737) | `fix(tools): enforce agent policy in pipelines` | Security / Runtime | **Critical fix** for confused deputy (issue #7947) — `execute_pipeline` now respects per-agent `ToolAccessPolicy` |
| [#8927](https://github.com/zeroclaw-labs/zeroclaw/pull/8927) | `fix(providers): remove unconditional strip_think_tags from compatible provider` | Providers | Fixes silent content deletion for reasoning models (issue #8615) |
| [#8943](https://github.com/zeroclaw-labs/zeroclaw/pull/8943) | `fix(providers): exclude Nova 2 from Bedrock prompt caching` | Providers / Bedrock | Resolves 400 errors for `us.amazon.nova-2-lite-v1:0` (issue #8720) |
| [#8963](https://github.com/zeroclaw-labs/zeroclaw/pull/8963) | `fix(channels): cap Telegram bot commands and repair truncation WARN` | Channels / Telegram | Fixes `BOT_COMMANDS_TOO_MUCH` when tools+skills+builtins > 100 (issue #8950) |
| [#9329](https://github.com/zeroclaw-labs/zeroclaw/pull/9329) | `refactor(zerocode): derive slash commands from shared command catalogue` | ZeroCode / CLI | Unifies command definitions (closes #9172) |
| [#9659](https://github.com/zeroclaw-labs/zeroclaw/pull/9659) | `fix(docs): disambiguate contextual protected literals` | Docs | Fixes false positives for "Signal"/"Filesystem" in markdown |
| [#9763](https://github.com/zeroclaw-labs/zeroclaw/pull/9763) | Flaky test fix: `onepassword_reference_load_does_not_block_runtime_worker` | CI / Config | Removes wall-clock assertion causing CI flakes |

**Net: 7 PRs closed/merged**, covering **security, provider compatibility, channel limits, CLI consistency, and CI stability**.

---

## 4. Community Hot Topics — Most Active Issues/PRs
| Item | Comments | Type | Core Need |
|------|----------|------|-----------|
| [#6808](https://github.com/zeroclaw-labs/zeroclaw/issues/6808) RFC: Work Lanes, Board Automation, Label Cleanup | 19 | Governance | **Maintainer scaling** — automate routing, reduce label debt, formalize work lanes |
| [#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) Tracker: Maintainer decision queue for RFCs | 11 | Governance | **Decision bottleneck** — central queue for RFC/design approvals before merge |
| [#9106](https://github.com/zeroclaw-labs/zeroclaw/issues/9106) RFC: A2A outbound client (A2ATool) | 11 | Architecture | **Agent-to-agent calls** — enable proactive outbound A2A (inbound shipped in v0.8.2) |
| [#9246](https://github.com/zeroclaw-labs/zeroclaw/issues/9246) RFC: Preserve Todo tracker config during ZeroCode migration | 11 | ZeroCode / Config | **Config migration safety** — avoid data loss when moving ownership |
| [#6954](https://github.com/zeroclaw-labs/zeroclaw/issues/6954) RFC: Provenance & reply contract for internally initiated turns | 10 | Runtime / Architecture | **Conversation integrity** — binding, identity, lifecycle for agent-initiated turns |
| [#7100](https://github.com/zeroclaw-labs/zeroclaw/issues/7100) RFC: Per-model capability & context-window config | 8 | Gateway / Providers | **Accurate model metadata** — vision, context window, UI display from single source |
| [#9397](https://github.com/zeroclaw-labs/zeroclaw/issues/9397) RFC: Empty WhatsApp `allowed_groups` = permit-none | 7 | Security / Channels | **Secure default** — change empty list from "allow all" to "allow none" |

**Pattern:** Governance/process RFCs dominate discussion (3 of top 7), signaling **maintainer bandwidth constraints**. Architecture RFCs (A2A, provenance, model caps) show **multi-agent and gateway maturity** goals.

---

## 5. Bugs & Stability — Ranked by Severity
| Severity | Issue | Status | Fix PR |
|----------|-------|--------|--------|
| **CRITICAL (S0)** | [#1](https://github.com/zeroclaw-labs/zeroclaw/issues/1) XOR cipher for stored secrets — broken crypto | Open (2026-02) | None yet |
| **HIGH (S0)** | [#7947](https://github.com/zeroclaw-labs/zeroclaw/issues/7947) `execute_pipeline` bypasses per-agent tool gating (confused deputy) | **Closed** | [#9737](https://github.com/zeroclaw-labs/zeroclaw/pull/9737) ✅ |
| **HIGH** | [#9328](https://github.com/zeroclaw-labs/zeroclaw/issues/9328) `verifiable-intent` evaluates constraints without verifying credential chain | Open | None |
| **HIGH** | [#9770](https://github.com/zeroclaw-labs/zeroclaw/issues/9770) `cron update` silently discards 6 declarative job fields | Open | None |
| **HIGH** | [#9779](https://github.com/zeroclaw-labs/zeroclaw/issues/9779) `sops_dir` documented default not honored — SOPs silently never load | Open | None |
| **HIGH** | [#9784](https://github.com/zeroclaw-labs/zeroclaw/issues/9784) Multi-step SOP marked failed mid-step with no audit event | Open | None |
| **HIGH** | [#9799](https://github.com/zeroclaw-labs/zeroclaw/issues/9799) Ephemeral daemon spins 140-177% CPU, repeated DB handles | Open (filed today) | None |
| **MEDIUM** | [#9780](https://github.com/zeroclaw-labs/zeroclaw/issues/9780) Cron SOPs lack HTTP/shell/notify capabilities — can't do network work | Open | None |
| **MEDIUM** | [#9783](https://github.com/zeroclaw-labs/zeroclaw/issues/9783) `SopEngine::finish_run` discards failure reason | Open | None |
| **MEDIUM** | [#9800](https://github.com/zeroclaw-labs/zeroclaw/issues/9800) SIGTERM leaves terminal raw/mouse-tracking enabled | Open (filed today) | None |

**Critical finding:** The **XOR cipher issue (#1)** has been open since **February 2026** with no fix — this is a **credential storage vulnerability**. The pipeline confused deputy (#7947) was fixed today via #9737. **SOP subsystem has 5 high-severity bugs** filed in the last 2 days (#9770, #9779, #9783, #9784, #9780), indicating a **regression cluster**.

---

## 6. Feature Requests & Roadmap Signals
| Signal | Source | Likelihood for v0.9.0 |
|--------|--------|----------------------|
| **A2A outbound client (A2ATool)** | [#9106](https://github.com/zeroclaw-labs/zeroclaw/issues/9106) (accepted RFC) | High — inbound shipped, outbound tracked |
| **Per-model capability/context config** | [#7100](https://github.com/zeroclaw-labs/zeroclaw/issues/7100) (needs review) | High — blocks accurate UI/budgeting |
| **Work lanes & board automation** | [#6808](https://github.com/zeroclaw-labs/zeroclaw/issues/6808) (in progress) | Medium — governance, not user-facing |
| **Grok Build ACP provider** | [#9104](https://github.com/zeroclaw-labs/zeroclaw/pull/9104) (open PR) | Medium — new provider family |
| **Context compaction anchored to model window ratio** | [#9535](https://github.com/zeroclaw-labs/zeroclaw/pull/9535) (open PR) | High — runtime improvement |
| **WASM plugin call timeout bound** | [#9403](https://github.com/zeroclaw-labs/zeroclaw/pull/9403) (open PR) | High — stability for plugins |
| **Telegram per-user sessions in groups** | [#9772](https://github.com/zeroclaw-labs/zeroclaw/pull/9772) (open PR) | Medium — UX for shared groups |
| **Forbidden paths with glob patterns** | [#9776](https://github.com/zeroclaw-labs/zeroclaw/pull/9776) (open PR) | Medium — security policy flexibility |
| **RFC process streamlining** | [#9496](https://github.com/zeroclaw-labs/zeroclaw/issues/9496) (open) | Low — meta, but may unblock others |

**v0.9.0 themes emerging:** Auth/security hardening (tracker #7432), A2A completeness, gateway/model metadata accuracy, plugin/WASM stability, SOP reliability.

---

## 7. User Feedback Summary — Pain Points & Use Cases
| Pain Point | Evidence | User Impact |
|------------|----------|-------------|
| **SOP system unreliable** | 5 high-sev bugs in 2 days (#9770, #9779, #9780, #9783, #9784) | Cron SOPs can't do network work; silent failures; no audit trail; config ignored |
| **Telegram bot breaks at scale** | [#8950](https://github.com/zeroclaw-labs/zeroclaw/issues/8950) — command limit 100 | Groups with many tools/skills can't register commands |
| **Bedrock Nova 2 caching errors** | [#8720](https://github.com/zeroclaw-labs/zeroclaw/issues/8720) — random 400s | Users must disable caching via config (now fixed in #8943) |
| **Compatible provider deletes reasoning content** | [#8615](https://github.com/zeroclaw-labs/zeroclaw/issues/8615) — silent `​` tag stripping | Invisible content loss for reasoning models (fixed in #8927) |
| **ZeroCode terminal corruption on SIGTERM** | [#9800](https://github.com/zeroclaw-labs/zeroclaw/issues/9800) — mouse tracking stuck | Requires manual `reset` after crash/termination |
| **Daemon CPU runaway** | [#9799](https://github.com/zeroclaw-labs/zeroclaw/issues/9799) — 17h, 177% CPU | Resource exhaustion on long-running ephemeral daemons |
| **Kimi Code provider missing** | [#657](https://github.com/zeroclaw-labs/zeroclaw/issues/657) — closed but no PR linked | User has subscription, can't use with ZeroClaw |
| **CLI `cron add` examples broken** | [#9672](https://github.com/zeroclaw-labs/zeroclaw/issues/9672) — all 3 examples fail | New users cannot follow docs |

**Positive signals:** Quick fixes for Telegram (#8963), Bedrock (#8943), compatible provider (#8927), pipeline security (#9737) show **responsive maintainers** for reported bugs.

---

## 8. Backlog Watch — Stale High-Priority Items Needing Attention
| Item | Age | Risk | Why It Matters |
|------|-----|------|----------------|
| [#1](https://github.com/zeroclaw-labs/zeroclaw/issues/1) **XOR cipher for secrets** | 6 months | **CRITICAL** | Credentials stored with broken crypto; no fix PR; CWE-327 |
| [#6808](https://github.com/zeroclaw-labs/zeroclaw/issues/6808) RFC: Work Lanes/Board Automation | 3 months | Medium | Governance debt blocking maintainer scaling; "ratification deferred" |
| [#6954](https://github.com/zeroclaw-labs/zeroclaw/issues/6954) RFC: Provenance for internal turns | 2.5 months | High | Architectural foundation for multi-agent conversation integrity |
| [#7100](https://github.com/zeroclaw-labs/zeroclaw/issues/7100) RFC: Per-model capability config | 2 months | High | Blocks accurate context budgeting, vision detection, UI |
| [#7432](https://github.com/zeroclaw-labs/zeroclaw/issues/7432) v0.9.0 auth/security tracker | 2 months | High | **Milestone tracker** — all breaking changes queued here |
| [#9106](https://github.com/zeroclaw-labs/zeroclaw/issues/9106) RFC: A2A outbound client | 3 weeks | High | Completes A2A support; needed for agent-to-agent workflows |
| [#9328](https://github.com/zeroclaw-labs/zeroclaw/issues/9328) Verifiable-intent chain verification | 2 weeks | High | Security feature evaluates constraints without crypto verification |
| [#9496](https://github.com/zeroclaw-labs/zeroclaw/issues/9496) RFC: Streamline RFC process | 1 week | Medium | Meta — but may unblock other RFCs stuck in process |

**Maintainer attention needed most on:** #1 (security), #7432 (release coordination), #6954/#7100/#9106 (architectural RFCs), and the **SOP bug cluster** (#9770, #9779, #9783, #9784) filed this week.

---

## Project Health Indicators
| Metric | Status | Trend |
|--------|--------|-------|
| **Issue throughput** | 35 updated/24h (11 closed) | 🟢 Healthy |
| **PR throughput** | 50 updated/24h (7 merged) | 🟢 Healthy |
| **Critical security debt** | 1 CRITICAL open 6mo (#1) | 🔴 Concerning |
| **High-sev regression cluster** | 5 SOP bugs in 48h | 🟡 Watch |
| **

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/DenisZheng/agents-radar).*