# OpenClaw Ecosystem Digest 2026-08-18

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-08-18 00:51 UTC

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

# OpenClaw Project Digest — 2026-08-18

## 1. Today's Overview

OpenClaw shows **extremely high velocity** with 500 issues and 500 PRs updated in the last 24 hours, though no new release has shipped. The project is in a heavy maintenance and stabilization phase: 124 PRs were merged/closed today, but 376 remain open — many tagged `waiting on author` or `ready for maintainer look`. Critical bugs around session state loss, gateway CPU wedging, OAuth refresh failures, and child-process leaks dominate the top issues. The backlog contains numerous long-standing P1/P2 items (some open since March) that have recently been re-triaged with `clawsweeper` labels, indicating a systematic cleanup effort. Overall health: **active but congested** — merge throughput is good, but review capacity appears to be the bottleneck.

## 2. Releases

**No new releases today.** The latest version in circulation appears to be `2026.6.1` (referenced in #91009). Several issues reference regressions introduced in `2026.3.2`, `2026.4.24`, `2026.5.4`, suggesting a rapid release cadence with occasional stability regressions.

## 3. Project Progress — Merged/Closed PRs Today (124 total)

Key merged fixes and features (from the top 30 by activity):

| PR | Area | Summary | Risk Tags |
|----|------|---------|-----------|
| [#120900](https://github.com/openclaw/openclaw/pull/120900) | UI/Security | **Closed** — Review install-policy warnings in Control UI; admins can acknowledge and continue plugin installs | 🚨 security-boundary, 🐚 platinum hermit |
| [#116489](https://github.com/openclaw/openclaw/pull/116489) | Security/Gateway | **Closed** — Require acknowledgement for install-policy warnings across CLI/Gateway | 🚨 security-boundary, 🚨 compatibility, 🐚 platinum hermit |
| [#120404](https://github.com/openclaw/openclaw/pull/120404) | Agents | **Closed** — Fix memory-flush append-only write to return outputSchema-conforming details | 🐚 platinum hermit |
| [#125242](https://github.com/openclaw/openclaw/pull/125242) | Web UI | **Closed** — Refine Markdown prose presentation in Control UI | 🦐 gold shrimp |
| [#102636](https://github.com/openclaw/openclaw/pull/102636) | Agents | **Closed** — Skip orchestrator framing for solo agents without subagents (was confusing models) | 🐚 platinum hermit |

**Pattern:** Recent merges focus on **security hardening (install policies), UI polish, and agent behavior fixes**. Many merged PRs carry `platinum hermit` (highest severity) or `gold shrimp` ratings.

## 4. Community Hot Topics — Most Active Issues/PRs

### Top 5 Issues by Comment Count (all updated today)

| Issue | Comments | 👍 | Core Problem | Labels |
|-------|----------|-----|--------------|--------|
| [#77598](https://github.com/openclaw/openclaw/issues/77598) | 23 | 1 | **24-hr live dev agent observation** — tracking agent behavior/trajectory without intervention | maintainer, P2, impact:session-state, impact:message-loss |
| [#91009](https://github.com/openclaw/openclaw/issues/91009) | 20 | 2 | **Codex hook relay spawns CPU-bound processes** stalling gateway RPC on `2026.6.1` | P1, impact:crash-loop, impact:message-loss, 🐚 platinum hermit |
| [#68596](https://github.com/opencclaw/openclaw/issues/68596) | 15 | 8 | **Configurable streaming watchdog timeout** — extended-reasoning models (kimi-k2.5, DeepSeek-R1) trigger false watchdog resets | P2, impact:ux-friction, 🦞 diamond lobster |
| [#62505](https://github.com/openclaw/openclaw/issues/62505) | 15 | 1 | **Coding agent never completes work** — regression from `2026.4.2`; only vague status updates | bug, regression, P1, impact:session-state, 🦞 diamond lobster |
| [#38327](https://github.com/openclaw/openclaw/issues/38327) | 14 | 3 | **"Cannot convert undefined or null to object"** with `google-vertex/gemini-3.1-pro-preview` on `2026.3.2` | bug, regression, P1, impact:auth-provider, 🐚 platinum hermit |

**Underlying needs:** Users are hitting **stability regressions** (message loss, agent stalls, provider crashes) especially with newer models and long-running sessions. The `clawsweeper:needs-maintainer-review` and `clawsweeper:needs-product-decision` tags on nearly all top issues indicate **product/architecture decisions are blocking fixes**.

### Top PRs by Activity (most are fresh, awaiting review)

| PR | Status | Area | Key Tags |
|----|--------|------|----------|
| [#125485](https://github.com/openclaw/openclaw/pull/125485) | Open | Agents | `fix: remind exec models to quote shell metacharacters` |
| [#124974](https://github.com/openclaw/openclaw/pull/124974) | Open | AI/Responses | `fix: accept retained messages from Responses compact` — 🐚 platinum hermit, 👀 ready for maintainer look |
| [#125383](https://github.com/openclaw/openclaw/pull/125383) | Open | Docs/llama.cpp | `fix: support embedding-only managed servers` — 🦐 gold shrimp, ⏳ waiting on author |
| [#125469](https://github.com/openclaw/openclaw/pull/125469) | Open | Voice-call | `fix: keep realtime calls alive through brief stream reconnects` — P1, 🚨 message-delivery/availability |
| [#125458](https://github.com/openclaw/openclaw/pull/125458) | Open | Voice-call/Gateway | `fix: survive gateway in-process restart and stop CLI dead-ends` — 🚨 security-boundary/compatibility/availability |

**Signal:** Voice-call resilience and Responses API compatibility are active investment areas.

## 5. Bugs & Stability — Critical Issues Reported/Updated Today

Ranked by severity (issue-rating) and impact:

| Severity | Issue | Summary | Fix PR? |
|----------|-------|---------|---------|
| 🐚 **Platinum Hermit** (highest) | [#91009](https://github.com/openclaw/openclaw/issues/91009) | Codex hook relay spawns runaway CPU processes, stalls gateway | No |
| 🐚 **Platinum Hermit** | [#38327](https://github.com/openclaw/openclaw/issues/38327) | Gemini 3.1 Pro on Vertex crashes with "Cannot convert undefined or null to object" | No |
| 🐚 **Platinum Hermit** | [#86215](https://github.com/openclaw/openclaw/issues/86215) | Codex OAuth refresh failures wedge agent for hours without alerting/profile rotation | No |
| 🐚 **Platinum Hermit** | [#50093](https://github.com/openclaw/openclaw/issues/50093) | WhatsApp backfill misses messages after reconnection | No |
| 🦞 **Diamond Lobster** | [#62505](https://github.com/openclaw/openclaw/issues/62505) | Coding agent regression: never completes tasks (since `2026.4.2`) | No |
| 🦞 **Diamond Lobster** | [#68596](https://github.com/openclaw/openclaw/issues/68596) | Streaming watchdog false positives on extended-reasoning models | No |
| 🦞 **Diamond Lobster** | [#74586](https://github.com/openclaw/openclaw/issues/74586) | Active-memory aborts `memory_search` tool calls, misclassifies as timeout | No |
| 🦞 **Diamond Lobster** | [#67777](https://github.com/openclaw/openclaw/issues/67777) | Subagent completion delivery lost on timeout/drain/orphan prune | No |
| 🦞 **Diamond Lobster** | [#67419](https://github.com/openclaw/openclaw/issues/67419) | Session context bloat: bootstrap files re-injected every turn (20-30% tokens) | No |
| 🦐 **Gold Shrimp** | [#77598](https://github.com/openclaw/openclaw/issues/77598) | Live dev agent behavior tracking (observational) | N/A |
| 🦐 **Gold Shrimp** | [#97616](https://github.com/openclaw/openclaw/issues/97616) | **Child process leaks** — unreaped `openclaw-hooks`, `bash`, `codex` zombies accumulate | No |
| 🦐 **Gold Shrimp** | [#39476](https://github.com/openclaw/openclaw/issues/39476) | A2A `sessions_send` causes duplicate messages via callback loops | No |
| 🦪 **Silver Shellfish** | [#51429](https://github.com/openclaw/openclaw/issues/51429) | Hardcoded workspace path `/Users/wangtao` shipped in release | No |
| 🦪 **Silver Shellfish** | [#75782](https://github.com/openclaw/openclaw/issues/75782) | Embedded-run "auth" stage blocks 10-15s synchronously every run | No |

**Critical clusters:**
1. **Gateway stability** — CPU wedging (#91009, #124516 PR), child process leaks (#97616), restart deadlocks (#125458 PR)
2. **Session/message integrity** — duplicate transcripts (#69208), lost completions (#67777), context bloat (#67419)
3. **Provider/auth reliability** — OAuth refresh wedging (#86215), Gemini/Vertex crashes (#38327), billing cooldown persistence (#70903)
4. **Model compatibility** — extended reasoning watchdog (#68596), Responses API compact handling (#124974 PR)

**Fix PRs exist for:** #124516 (session store CPU wedge), #124974 (Responses compact), #125458 (voice-call restart), #125469 (voice-call reconnect), #102636 (solo agent framing) — but most critical bugs **lack fix PRs**.

## 6. Feature Requests & Roadmap Signals

High-engagement feature requests (👍 ≥ 5, updated today):

| Issue | 👍 | Area | Likelihood for Next Version |
|-------|-----|------|----------------------------|
| [#68596](https://github.com/openclaw/openclaw/issues/68596) | 8 | **Configurable streaming watchdog timeout** | High — P2, clear UX pain, affects reasoning models |
| [#42840](https://github.com/openclaw/openclaw/issues/42840) | 10 | **MathJax/LaTeX in Control UI** | Medium — P3, UI-only, PR-ready |
| [#67413](https://github.com/openclaw/openclaw/issues/67413) | 5 | **Per-agent dreaming config** (prevent OOM) | High — P2, operational reliability |
| [#60572](https://github.com/openclaw/openclaw/issues/60572) | 3 | **Multi-slot memory architecture** | Medium — architectural, needs design decision |
| [#71058](https://github.com/openclaw/openclaw/issues/71058) | 1 | **Multiple Azure/Teams bots per gateway** | Medium — P2, enterprise need |
| [#66252](https://github.com/openclaw/openclaw/issues/66252) | 1 | **Per-agent TTS/STT overrides** | Medium — P3, i18n/accessibility |
| [#45758](https://github.com/openclaw/openclaw/issues/45758) | 2 | **YAML config support** | Low — P3, nice-to-have |
| [#50199](https://github.com/openclaw/openclaw/issues/50199) | 0 | **Skill priority configuration** | Low — needs design |

**Roadmap signals from PRs:**
- **Voice-call hardening** — multiple PRs (#125469, #125458, #124162) targeting restart survival, reconnect resilience, disconnection watchdog
- **Responses API / compact support** — #124974, #124303 (context window provenance)
- **Control UI polish** — draft persistence (#125332), Markdown rendering (#125219, #125242), slash command staging (#123356)
- **Security/Install policy** — #120900, #116489 (acknowledgement flows)
- **Gateway scaling** — #122764 (queue arbitration), #124516 (session store CPU), #125465 (remove obsolete reverse tunnel)

**Prediction:** Next release will likely be a **stability/voice-call/UI polish drop** rather than major new features. Multi-slot memory and per-agent dreaming need product decisions first.

## 7. User Feedback Summary — Real Pain Points

| Theme | Representative Issues | User Impact |
|-------|----------------------|-------------|
| **Agent reliability regression** | [#62505](https://github.com/openclaw/openclaw/issues/62505) "never completes anything", [#53408](https://github.com/openclaw/openclaw/issues/53408) "write/exec params silently dropped after long convos" | **High** — core workflow broken for coding agents |
| **Message/session loss** | [#91009](https://github.com/openclaw/openclaw/issues/91009) gateway stalls, [#67777](https://github.com/openclaw/openclaw/issues/67777) subagent completions lost, [#50093](https://github.com/openclaw/openclaw/issues/50093) WhatsApp backfill missing | **High** — data loss, trust erosion |
| **Provider/auth fragility** | [#86215](https://github.com/openclaw/openclaw/issues/86215) OAuth wedging for hours, [#38327](https://github.com/openclaw/openclaw/issues/38327) Gemini crash, [#70903](https://github.com/openclaw/openclaw/issues/70903) billing cooldown persists after recovery | **High** — silent failures, no alerting |
| **Resource leaks/degradation** | [#97616](https://github.com/openclaw/openclaw/issues/97616) zombie processes, [#67413](https://github.com/openclaw/openclaw/issues/67413) dreaming OOM, [#12

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: AI Agent & Personal AI Assistant Open-Source Ecosystem (2026-08-18)

---

## 1. Ecosystem Overview

The personal AI agent ecosystem shows **bimodal maturity**: a cluster of high-velocity, production-hardening projects (OpenClaw, Hermes, IronClaw, ZeroClaw, CoPaw, NanoClaw) operating at 40–500 PRs/day with structured RFC/governance processes, and a long tail of niche or early-stage efforts (PicoClaw, Moltis, LobsterAI, NanoBot) focused on specific integrations or UX polish. **No dominant standard has emerged**—each project pursues distinct architectural bets (multi-channel gateways, local-first runtimes, plugin ecosystems, or protocol-level interoperability). Community engagement correlates strongly with **multi-platform deployment complexity** (Slack/Telegram/Feishu/Web), not model capabilities. The landscape is consolidating around **three pillars**: session durability, provider-agnostic tooling, and security-boundary hardening.

---

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Merged (24h) | Latest Release | Health Score* |
|---------|--------------|-----------|--------------|----------------|---------------|
| **OpenClaw** | 500 | 500 | 124 | 2026.6.1 (stale) | 🟡 Congested |
| **ZeroClaw** | 50 | 50 | 15 | 0.8.4 (pre-v0.9) | 🟢 RFC-Active |
| **Hermes Agent** | 50 | 50 | 15 | v0.20.3 (08-16) | 🟢 Stable Cadence |
| **IronClaw** | 28 | 44 | 16 | v1.3.0-rc.1 (08-17) | 🟢 Pre-Release |
| **CoPaw/QwenPaw** | 14 | 35 | 22 | v2.1.0 (recent) | 🟢 High Velocity |
| **NanoClaw** | 4 | 42 | 25 | — (accumulating) | 🟢 Refactoring |
| **NanoBot** | 3 | 15 | 5 | — | 🟡 Stabilizing |
| **LobsterAI** | 5 | 18 | 18 | — | 🟡 Backlog Clearing |
| **Moltis** | 3 | 9 | 6 | — | 🟢 Steady |
| **PicoClaw** | 3 | 4 | 2 | — | 🟡 Maintenance |
| **NullClaw** | 0 | 1 | 0 | — | 🔴 Dormant |
| **TinyClaw** | 0 | 0 | 0 | — | 🔴 Inactive |
| **ZeptoClaw** | 0 | 0 | 0 | — | 🔴 Inactive |

*Health Score: 🟢 = active iteration + clear direction; 🟡 = active but bottlenecked/stale bugs; 🔴 = no meaningful activity.

**Key Insight**: Top 6 projects account for **92% of all PR merges** (223/243). Release cadence varies: Hermes/IronClaw ship RCs/patches biweekly; OpenClaw/ZeroClaw/NanoClaw accumulate on `main` for larger drops.

---

## 3. OpenClaw's Position

### Advantages vs Peers
- **Scale of operation**: 10× issue/PR volume of nearest peer (ZeroClaw/Hermes); battle-tested at enterprise scale.
- **Security-boundary maturity**: Install-policy acknowledgements (#120900, #116489), OAuth refresh hardening (#86215), child-process leak tracking (#97616) exceed most peers.
- **Voice-call/realtime investment**: 4+ PRs targeting gateway restart survival, reconnect resilience, disconnection watchdogs—unmatched in ecosystem.
- **Model-compatibility breadth**: Active fixes for Responses API compact, extended-reasoning watchdogs, Vertex/Gemini, Codex hook relay.

### Technical Approach Differences
| Dimension | OpenClaw | Peers (Median) |
|-----------|----------|----------------|
| **Architecture** | Monolithic gateway + plugin SDK | Modular channel layers (NanoClaw, ZeroClaw) or embedded runtimes (Hermes, IronClaw) |
| **Session Model** | Centralized session store (CPU wedge risk) | Distributed/per-channel (NanoClaw driver seam, ZeroClaw runtime-owned) |
| **Extensibility** | Plugin SDK + install policy | ACP/MCP-first (ZeroClaw, Moltis), PawApp runtime (CoPaw), skill containers (LobsterAI) |
| **Governance** | `clawsweeper` labels, maintainer bottleneck | RFC queues (ZeroClaw), maintainer-decision queue (Hermes), open PR merges (NanoClaw) |

### Community Size Comparison
- **OpenClaw**: Largest visible contributor base (500 PRs/day implies 50+ active committers), but review capacity is the bottleneck.
- **Hermes/ZeroClaw/IronClaw**: 10–20 core maintainers with structured triage.
- **CoPaw/NanoClaw**: Strong first-time contributor pipelines (4–6 merged today).
- **Others**: 1–3 maintainers; community contribution sporadic.

---

## 4. Shared Technical Focus Areas (Cross-Project Convergence)

| Requirement | Projects | Specific Needs |
|-------------|----------|----------------|
| **Session/Message Durability** | OpenClaw (#67777, #69208), Hermes (#77462), IronClaw (#7275), ZeroClaw (#6954), NanoClaw (#3301) | Subagent completion delivery, context bloat (20–30% tokens), cross-session recall, audit trails |
| **Gateway/Process Stability** | OpenClaw (#91009, #97616), NanoBot (#4864, #5171), IronClaw (#7714), ZeroClaw (#9314), Moltis (#1095) | CPU wedging, child-process leaks, libSQL starvation, Telegram polling stalls, Podman parity |
| **Provider/Auth Resilience** | OpenClaw (#86215, #38327), NanoBot (#5413), Hermes (#77529), ZeroClaw (#9544), LobsterAI (#1635) | OAuth refresh wedging, fallback on exceptions, local model parity (Ollama), API key leakage |
| **Multi-Channel/Platform Parity** | CoPaw (#7011, #7085), ZeroClaw (#9487, #9488), NanoClaw (Slack wave), IronClaw (#7715, #7716), LobsterAI (#1662) | Per-channel model config, session isolation, unified attachment handling, MCP transport completeness |
| **Security Boundaries** | OpenClaw (#120900), ZeroClaw (#9973, #10000, #6971), Hermes (#77462, #83565), IronClaw (#7155) | Install-policy ack, API key header migration, Windows ACLs, shell confirm-tier, credential inheritance |
| **Tool/Function Calling Reliability** | OpenClaw (#124974, #68596), Hermes (#88661), ZeroClaw (#9594), CoPaw (#7063), Moltis (#1103) | MCP timeout reconnect, streaming watchdog, structured output, shadow DOM, atomic budget accounting |
| **Observability/Debugging** | OpenClaw (#77598), ZeroClaw (#6954, #7704), Hermes (#88701), NanoClaw (#3303), CoPaw (#7075) | Live agent tracing, provenance, session activity API, task run details, benchmark taxonomy |

---

## 5. Differentiation Analysis

| Project | Primary Focus | Target User | Architectural Signature |
|---------|---------------|-------------|-------------------------|
| **OpenClaw** | Enterprise gateway + plugin marketplace | Platform operators, SaaS builders | Centralized gateway, install-policy security, voice-call first-class |
| **ZeroClaw** | Protocol-level agent runtime (ACP, Chat Completions) | Framework integrators, OSS ecosystem | RFC-governed, transport-agnostic sessions, security-pipeline-as-code |
| **Hermes Agent** | Desktop-first personal assistant + multi-bot | Power users, local-inference enthusiasts | Embedded `hermes serve`, god-file sharding, WhatsApp/Telegram cloud adapters |
| **IronClaw** | Coding agent + durable execution (libSQL) | Developers, CI/CD automation | Action-budget accounting, WASM tool sandbox, OMP core-tool contract |
| **CoPaw/QwenPaw** | Multi-IM workspace (DingTalk/Feishu/WeChat/QQ) | Chinese enterprise teams, multi-tenant deployments | PawApp runtime, per-channel config, Console UX polish |
| **NanoClaw** | Channel abstraction layer + pluggable runtimes | Platform builders needing Slack/Discord/Web parity | Driver seam (Docker→Podman/Firecracker), `extendTool` MCP extension |
| **NanoBot** | Telegram/Slack bot framework + WebUI | Bot developers, small-team automation | Native TypeScript TUI, spend firewall, side conversations |
| **LobsterAI** | Electron desktop app + agent orchestration | Local-first users, multi-agent workflow composers | Per-agent workdirs, MD workflow proposal, OpenClaw runtime embedding |
| **Moltis** | Browser automation + external agent federation | Web-agent builders, ACP/OpenAI-compatible consumers | Shadow DOM piercing, MiniMax/ACP agent registry, managed Files library |
| **PicoClaw** | Lightweight multi-channel (IRC/Weixin/Slack) | Hobbyists, niche community bots | Single-binary, config-override resilience, IRCv3 reassembly |

**Strategic Clusters**:
1. **Gateway Platforms**: OpenClaw, ZeroClaw, NanoClaw — compete on extensibility & multi-tenancy
2. **Personal Assistants**: Hermes, IronClaw, CoPaw, LobsterAI — compete on UX, local inference, platform integrations
3. **Specialized Runtimes**: NanoBot (bot framework), Moltis (browser/ACP), PicoClaw (lightweight) — niche dominance

---

## 6. Community Momentum & Maturity

### Tier 1: Rapid Iteration + Production Hardening (Weekly+ Releases)
- **Hermes Agent**: Biweekly patches (v0.20.3 → v0.20.4 imminent), god-file sharding complete, desktop stability fixes landing daily.
- **IronClaw**: RC cut 08-17, write-reduction epic 80% merged, notification inbox + ACP serve + OMP tools queued for v1.4.
- **CoPaw**: v2.1.0 recent, 22 PRs/day, but **2 critical v2.1.0 regressions** (#7063, #7082) demand hotfix.

### Tier 2: High Velocity, Pre-Release Accumulation
- **OpenClaw**: Massive throughput but **review bottleneck** (376 open PRs, `waiting on author`/`ready for maintainer`); no release since 2026.6.1.
- **ZeroClaw**: 50 PRs/day, 13 RFCs in maintainer queue (#8692), v0.9.0 gated on auth/security/gateway decisions.
- **NanoClaw**: 25 merges/day, stacked architectural PRs (driver seam, channel layer v2), no release cadence visible.

### Tier 3: Stabilization & Niche Polish
- **NanoBot**: Telegram polling fixed, TUI modernization done, spend firewall requested—transitioning to cost-governance phase.
- **Moltis**: Steady 6 merges/day, Podman blocker (76 days) is sole high-risk item; Files library (#1206) next major lift.
- **LobsterAI**: Batch-merged 18 April PRs today (UX polish, dsh runtime), but **Ollama/MCP bugs stale 128 days**.

### Tier 4: Low Activity / Maintenance
- **PicoClaw**: Critical Antigravity 429 (#3339) + ready Slack fix (#3340) need same-day action.
- **NullClaw/TinyClaw/ZeptoClaw**: No meaningful signal.

---

## 7. Trend Signals for AI Agent Developers

| Trend | Evidence | Strategic Value |
|-------|----------|-----------------|
| **ACP (Agent Communication Protocol) as Interop Layer** | ZeroClaw (#8603 Chat Completions), Moltis (ACP agent registry), NanoClaw (MCP `extendTool`), Hermes (MCP tool reliability) | **High** — Emerging standard for agent-to-agent/tool communication; early adopters gain ecosystem leverage. |
| **Session Durability > Model Capabilities** | 7/13 projects cite message loss, context bloat, cross-session recall as top pain | **Critical** — Users tolerate model limits; they abandon agents that lose work. Invest in deterministic session stores. |
| **Security Boundaries Moving Downstack** | OpenClaw install-policy, ZeroClaw credential boundaries, Hermes Windows ACLs, IronClaw shell confirm-tier | **High** — Enterprise adoption requires auditable, layered security (gateway → runtime → tool sandbox). |
| **Multi-Channel Config as Table Stakes** | CoPaw per-channel models, ZeroClaw unified attachments, NanoClaw channel layer, IronClaw Slack/Telegram/MCP onboarding | **Medium-High** — Single-config deployments are legacy; per-platform model/policy routing expected. |
| **Local-First + Cloud-Hybrid Runtime** | Hermes/Ollama, LobsterAI/dsh, Moltis/WASM, PicoClaw/env-override, NanoBot/venv adoption | **Medium** — Privacy-sensitive users demand local inference with cloud fallback; abstraction layers winning. |
| **Observability as Product Feature** | OpenClaw live tracing, ZeroClaw provenance, Hermes session activity API, CoPaw cron run details | **Medium** — "Why did the agent do that?" is the #1 support question; built-in replay/debug tooling differentiates. |
| **Cost Governance Emerging** | NanoBot spend firewall (#5409), IronClaw

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-08-18

## 1. Today's Overview

NanoBot shows **high development velocity** with 15 PRs updated in the last 24 hours (5 merged/closed, 10 open), indicating active iteration across gateway stability, WebUI enhancements, Telegram reliability, and CLI refactoring. Three issues were updated, including a critical Telegram polling stall bug (#5171) now fixed via PR #5156, a gateway JSON serialization bug causing endless loops (#4864), and a new feature request for spend firewalls (#5409). The project is in a **stabilization and platform-hardening phase** with strong focus on Windows compatibility, process management, and provider resilience. No releases were cut today.

---

## 2. Releases

**No new releases** published in the last 24 hours.

---

## 3. Project Progress — Merged/Closed PRs Today

| PR | Title | Area | Impact |
|----|-------|------|--------|
| [#5416](https://github.com/HKUDS/nanobot/pull/5416) | `fix(gateway): stabilize process identities` | Gateway / Process Management | Replaces locale-dependent `ps lstart` with native `proc_pidinfo` birth timestamps; unifies process-identity contract across macOS, Windows (FILETIME), Linux. Critical for reliable gateway client lease tracking. |
| [#5301](https://github.com/HKUDS/nanobot/pull/5301) | `fix(telegram): bridge stdlib logging and detect stalled polling` | Telegram Bot | Bridges Python stdlib logging into loguru; adds lightweight liveness check that logs stalled polling without teardown. Observability foundation for #5156. |
| [#5156](https://github.com/HKUDS/nanobot/pull/5156) | `fix(telegram): recover from silently stalled polling` | Telegram Bot | **Fixes #5171**. Implements watchdog that rebuilds stalled Telegram polling connection pools after transient network failures. Prevents permanent message loss while process stays alive. |
| [#5410](https://github.com/HKUDS/nanobot/pull/5410) | `fix(goal): stop repeating clarification replies` | Agent Runtime / Goals | Stops automatic re-injection of sustained-goal continuation after normal model responses; preserves continuation only at actual tool-call budget boundary. Eliminates repetitive clarification loops. |
| [#5406](https://github.com/HKUDS/nanobot/pull/5406) | `feat(cli): add native TypeScript terminal UI` | CLI / TUI | **Major UI overhaul**. Supersedes #4329. Introduces native TypeScript-based terminal UI (TUI) as default, with `--classic` escape hatch for Python fallback. Cross-terminal fixes included. |

**Summary**: Five PRs merged today address **critical stability bugs** (Telegram polling stall, gateway process identity, goal clarification loops) and deliver a **major CLI/TUI modernization**. The Telegram fix (#5156) resolves a production-severity silent failure mode.

---

## 4. Community Hot Topics

| Item | Type | Activity | Underlying Need |
|------|------|----------|-----------------|
| [#4864](https://github.com/HKUDS/nanobot/issues/4864) | Issue (bug) | 7 comments, 👍1, updated 2026-08-17 | **Gateway JSON serialization regression**: `complete_goal` tool receives `recap` as bare string instead of JSON object. Blocks goal completion flows. Likely introduced by recent tool parameter serialization change. |
| [#5171](https://github.com/HKUDS/nanobot/issues/5171) | Issue (bug) | 0 comments, closed 2026-08-17 | **Silent Telegram polling stall**: After transient network blip, bot stops receiving messages permanently with zero logs. **Fixed by #5156** (merged today). |
| [#5409](https://github.com/HKUDS/nanobot/issues/5409) | Issue (feature) | 0 comments, created 2026-08-17 | **Spend firewall / cost control**: Request for hybrid spend firewall to prevent infinite loops bankrupting LLM budgets. Signals commercialization concerns and multi-tenant cost governance needs. |
| [#5408](https://github.com/HKUDS/nanobot/pull/5408) | PR (feature) | Open, p2, conflict | **WebUI follow-up suggestions**: DeerFlow-style ephemeral suggestions after successful turns. Provider-neutral, strict line protocol. Enhances conversational UX. |
| [#5364](https://github.com/HKUDS/nanobot/pull/5364) | PR (feature) | Open, p2, conflict | **WebUI temporary side conversations**: `/side` command for isolated parallel chats with tab switching, independent drafts/streaming. Transient (not persisted). Power-user workflow enhancement. |

**Analysis**: The community is focused on **reliability** (gateway/Telegram bugs) and **WebUI sophistication** (side conversations, follow-ups). The spend firewall request (#5409) hints at upcoming commercial/multi-tenant requirements.

---

## 5. Bugs & Stability — Ranked by Severity

| Severity | Issue/PR | Status | Fix PR | Description |
|----------|----------|--------|--------|-------------|
| **Critical** | [#5171](https://github.com/HKUDS/nanobot/issues/5171) | Closed | [#5156](https://github.com/HKUDS/nanobot/pull/5156) ✅ **MERGED** | Telegram polling stalls silently after transient network failure; messages pile up server-side; process stays alive but logs nothing. **Fixed by watchdog that rebuilds connection pools.** |
| **High** | [#4864](https://github.com/HKUDS/nanobot/issues/4864) | Open | — | `complete_goal` endless loop: gateway parses `recap` parameter as bare string instead of JSON object. Tool parameter serialization regression. Blocks goal completion. |
| **High** | [#5407](https://github.com/HKUDS/nanobot/pull/5407) | Open (p2) | **PR open** | Cron heartbeat/dream jobs persist in `jobs.json` even when disabled via config (`gateway.heartbeat.enabled=false`). Jobs keep firing, burning tokens. |
| **Medium** | [#5415](https://github.com/HKUDS/nanobot/pull/5415) | Open (p2) | **PR open** | Windows venv child process adoption: managed gateway interpreter fails to adopt recorded PID of direct venv launcher, breaking background/on-demand lifecycle. |
| **Medium** | [#5412](https://github.com/HKUDS/nanobot/pull/5412) | Open | **PR open** | Background gateway/API process output block-buffered (non-TTY), delaying startup logs in log files. |
| **Medium** | [#5413](https://github.com/HKUDS/nanobot/pull/5413) | Open | **PR open** | Provider fallback policy not applied when LLM provider *raises exception* (vs returning error response). Exception escapes fallback loop. |
| **Low** | [#5341](https://github.com/HKUDS/nanobot/pull/5341) | Open (p2, conflict) | **PR open** | Windows PowerShell: bare `curl` resolves to `Invoke-WebRequest` alias, not cURL executable. Weather skill examples fail first attempt. |

**Note**: Critical Telegram bug resolved today. Gateway JSON bug (#4864) and cron job leak (#5407) are highest-priority open items.

---

## 6. Feature Requests & Roadmap Signals

| Signal | Source | Likelihood for Next Version | Rationale |
|--------|--------|-----------------------------|-----------|
| **WebUI follow-up suggestions** (DeerFlow-style) | [#5408](https://github.com/HKUDS/nanobot/pull/5408) | **High** | PR open, p2, provider-neutral design, matches modern agent UX patterns. |
| **WebUI temporary side conversations** (`/side` command) | [#5364](https://github.com/HKUDS/nanobot/pull/5364) | **High** | PR open, p2, well-scoped (transient, tabbed, parallel streaming). Power-user demand. |
| **Hybrid spend firewall / cost control** | [#5409](https://github.com/HKUDS/nanobot/issues/5409) | **Medium-High** | New issue, commercialization driver. Likely to become priority as project monetizes. |
| **Native TypeScript TUI as default CLI** | [#5406](https://github.com/HKUDS/nanobot/pull/5406) | **Done (merged today)** | Major UX upgrade landed. `--classic` preserves Python fallback. |
| **Session messaging via mentions** (WebUI cross-session) | [#5358](https://github.com/HKUDS/nanobot/pull/5358) | **Medium** | PR open, enables multi-agent/workspace collaboration. Stable `@name` identity. |
| **Slack file download redirect validation** | [#5414](https://github.com/HKUDS/nanobot/pull/5414) | **Medium** | Security hardening for Slack integration. Open PR. |

**Prediction**: Next version will likely include the WebUI enhancements (#5408, #5364, #5358), Slack security fix (#5414), and possibly initial spend control primitives responding to #5409.

---

## 7. User Feedback Summary

| Pain Point / Use Case | Evidence | Sentiment |
|----------------------|----------|-----------|
| **Silent Telegram failures in production** | #5171: "bot can stop receiving messages **permanently** while the process keeps running and the log stays completely silent" | 😡 **High frustration** — silent data loss is worst-case |
| **Goal completion broken by gateway regression** | #4864: "complete_goal keeps erroring... gateway is parsing the recap parameter as a bare string instead of a JSON object" | 😡 **Blocking** — core agent loop broken |
| **Windows compatibility friction** | #5341 (curl alias), #5415 (venv PID adoption), #5406 (TUI cross-terminal) | 😐 **Ongoing** — active investment in Windows parity |
| **Cron jobs ignoring disable config** | #5407: "startup printed `✗ Heartbeat: disabled` while previously persisted system job... kept firing on its schedule, burning tokens" | 😟 **Cost leak** — unexpected token spend |
| **Desire for DeerFlow-like WebUX** | #5408, #5364: follow-up suggestions, side conversations | 😊 **Positive pull** — users want richer conversational UX |
| **Cost governance for commercialization** | #5409: "power users running infinite loops and bankrupting your LLM budget" | 🧠 **Strategic** — forward-looking, not yet a daily pain |

**Overall**: Users experience **acute reliability pain** (Telegram, gateway, cron) but are **pulling for advanced WebUI features**. Windows users face persistent friction. Cost control is emerging as a strategic requirement.

---

## 8. Backlog Watch — Items Needing Maintainer Attention

| Item | Age | Status | Why It Matters |
|------|-----|--------|----------------|
| [#4864](https://github.com/HKUDS/nanobot/issues/4864) | 40 days (created 2026-07-09) | **Open, 7 comments** | **Core gateway bug** breaking `complete_goal`. High engagement (7 comments). Likely serialization regression. Blocks goal-oriented agents. |
| [#5407](https://github.com/HKUDS/nanobot/pull/5407) | 1 day | **Open PR, p2** | Cron job leak burns tokens when disabled. Config-drive disable not honored. Direct cost impact. |
| [#5415](https://github.com/HKUDS/nanobot/pull/5415) | 1 day | **Open PR, p2** | Windows gateway venv adoption broken. Affects background/on-demand lifecycle on Windows. |
| [#5341](https://github.com/HKUDS/nanobot/pull/5341) | 7 days | **Open PR, p2, conflict** | Windows weather skill broken by `curl` alias. Has merge conflict — needs rebase/resolution. |
| [#5413](https://github.com/HKUDS/nanobot/pull/5413) | 1 day | **Open PR** | Provider fallback gap: exceptions escape fallback loop. Resilience hole. |
| [#5412](https://github.com/HKUDS/nanobot/pull/5412) | 1 day | **Open PR** | Background process log buffering delays observability. Easy fix (flush), high ops value. |
| [#5358](https://github.com/HKUDS/nanobot/pull/5358) | 6 days | **Open PR** | WebUI cross-session messaging. Enables multi-agent workflows. Stable `@name` identity design. |

**Top Priority**: **#4864** (oldest, highest community engagement, breaks core loop) and **#5407** (direct token burn). Both need triage/fix this sprint.

---

*Digest generated from GitHub data as of 2026-08-18. All links point to HKUDS/nanobot repository.*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-08-18

---

## 1. Today's Overview

Hermes Agent maintains **high velocity** with 50 issues and 50 PRs updated in the last 24 hours. The project just shipped **v0.20.3 (v2026.8.16.2)** on August 16 — a patch release rolling up ~125 PRs since v0.20.2. Current activity shows a strong focus on **security hardening**, **desktop stability** (orphaned backends, plugin clutter), **session state integrity**, and **MCP tool reliability**. The issue/PR ratio (34 open / 35 open) indicates active triage but a growing backlog of unresolved items.

---

## 2. Releases

### v2026.8.16.2 — Hermes Agent v0.20.3 (2026-08-16)
- **Type**: Patch release (stable tag for Docker images, hosted deployments, fresh installs)
- **Scope**: ~125 PRs merged since v0.20.2
- **Breaking changes**: None noted — patch-level only
- **Migration notes**: Standard upgrade; downstream consumers should pull new Docker images
- **Link**: [Release v2026.8.16.2](https://github.com/NousResearch/hermes-agent/releases/tag/v2026.8.16.2)

---

## 3. Project Progress — Merged/Closed Today (15 PRs)

| PR | Title | Area | Status |
|----|-------|------|--------|
| [#88787](https://github.com/NousResearch/hermes-agent/pull/88787) | fix(cron): configurable media-send timeout + non-empty failure reasons | cron, config | **Closed** (salvages #87965, #87967) |
| [#87967](https://github.com/NousResearch/hermes-agent/pull/87967) | feat(cron): make media-send timeout configurable via `HERMES_CRON_MEDIA_SEND_TIMEOUT` | cron | Closed (superseded) |
| [#87965](https://github.com/NousResearch/hermes-agent/pull/87965) | fix(cron): media-send failure logs empty reason on timeout | cron | Closed (superseded) |
| [#88788](https://github.com/NousResearch/hermes-agent/pull/88788) | fix(desktop): Bots pane as Sessions-zone tab; Cronjobs pane only in Bots mode | desktop, UI | **Closed** |
| [#88785](https://github.com/NousResearch/hermes-agent/pull/88785) | fix(bot-mode): ownership-based sweep hides CLI-born Bot Mode sessions | plugins, desktop, sessions | **Closed** |
| [#88793](https://github.com/NousResearch/hermes-agent/pull/88793) | fmt(js): `npm run fix` auto-fix | formatting | Closed (auto-merged) |
| [#80065](https://github.com/NousResearch/hermes-agent/issues/80065) | feat(whatsapp): Cloud adapter DM-only group drop | gateway, whatsapp | Closed (duplicate, folded) |
| [#80059](https://github.com/NousResearch/hermes-agent/issues/80059) | feat(whatsapp): outbound sticker send | gateway, plugins, whatsapp | Closed (duplicate, folded) |
| [#78789](https://github.com/NousResearch/hermes-agent/issues/78789) | feat(telegram): setChatMenuButton/getChatMenuButton | plugins, telegram | Closed (duplicate, folded) |
| [#76064](https://github.com/NousResearch/hermes-agent/issues/76064) | Desktop: demo plugins enabled by default | desktop | **Closed** |
| [#76245](https://github.com/NousResearch/hermes-agent/issues/76245) | Hermes Desktop: backend not reliably drained on quit | desktop | **Closed** |
| [#80898](https://github.com/NousResearch/hermes-agent/issues/80898) | macOS: orphaned `hermes serve` backends accumulate | desktop | **Closed** |
| [#57921](https://github.com/NousResearch/hermes-agent/issues/57921) | `hermes_state.py`: timeout=1.0 causes "database is locked" | gateway, dashboard | **Closed** |
| [#79101](https://github.com/NousResearch/hermes-agent/issues/79101) | API server stores virtual model alias as real model | gateway | **Closed** |
| [#86986](https://github.com/NousResearch/hermes-agent/issues/86986) | Termux: make native pkg install first-class Android path | cli, install | **Closed** |

**Key progress**: Desktop stability fixes (orphan processes, plugin defaults, pane layout), cron reliability (configurable timeouts, better logging), and several duplicate/cleanup closures.

---

## 4. Community Hot Topics — Most Active Issues/PRs

| Item | Comments | Area | Core Need |
|------|----------|------|-----------|
| [#78647](https://github.com/NousResearch/hermes-agent/issues/78647) **CLOSED** | 76 | refactor, agent | **God-file decomposition epic** — 20/20 files sharded; policy: "all god files are sharded, never reverted" |
| [#66616](https://github.com/NousResearch/hermes-agent/issues/66616) **OPEN** | 48 | skills, automation | **Skills index stale/degraded** — index 29.8h old (limit 26h); cron/rebuild pipeline needs attention |
| [#77305](https://github.com/NousResearch/hermes-agent/issues/77305) **OPEN** | 5 | agent, delegation | **Delegation budget bug** — failed API calls consume subagent iteration budget, starving fallback chain |
| [#83565](https://github.com/NousResearch/hermes-agent/issues/83565) **OPEN** | 5 | tools, auth, security | **Child-process credential inheritance** — tracker epic for trusted credentials leaking to untrusted child processes |
| [#87654](https://github.com/NousResearch/hermes-agent/issues/87654) **OPEN** | 5 | agent, browser, vision | **Vision tools disappear after first probe** — `_AuxProbeClientStub` cached incorrectly |
| [#88706](https://github.com/NousResearch/hermes-agent/issues/88706) **OPEN** | 4 | security, multi-comp | **Security gaps behind #88232/#88435** — provenance, authority, use-time hardening campaign |
| [#78539](https://github.com/NousResearch/hermes-agent/issues/78539) **OPEN** | 3 | docs, cli | **README contradicts busy model** — interrupt guidance stale; high-value quick starts missing |

**Analysis**: The top two items reflect **architectural discipline** (god-file sharding complete) and **operational debt** (skills index automation failing). Security (#88706, #83565) and delegation reliability (#77305) are emerging cross-cutting concerns.

---

## 5. Bugs & Stability — Ranked by Severity

| Severity | Issue | Description | Fix PR? |
|----------|-------|-------------|---------|
| **CRITICAL** | [#77462](https://github.com/NousResearch/hermes-agent/issues/77462) | Windows `_secure_file` no-op — secrets readable by SYSTEM/Administrators (verified live) | ❌ Open |
| **HIGH** | [#88661](https://github.com/NousResearch/hermes-agent/issues/88661) | MCP tool timeout parks server connection — entire toolset unregisters, no auto-reconnect | ❌ Open |
| **HIGH** | [#87654](https://github.com/NousResearch/hermes-agent/issues/87654) | Vision tools (`vision_analyze`/`browser_vision`) disappear after first availability probe | ❌ Open |
| **HIGH** | [#77305](https://github.com/NousResearch/hermes-agent/issues/77305) | Failed delegation API calls consume iteration budget, starving fallback chain | ❌ Open |
| **HIGH** | [#77529](https://github.com/NousResearch/hermes-agent/issues/77529) | Secret provenance lost after failed refresh — MCP children drop still-present secrets | ❌ Open |
| **MEDIUM** | [#78793](https://github.com/NousResearch/hermes-agent/issues/78793) | `write_file`/`patch` corrupt git-managed state (`.git/HEAD`, `refs/`, `index`) | ❌ Open |
| **MEDIUM** | [#84033](https://github.com/NousResearch/hermes-agent/issues/84033) | macOS `computer_use` daemon loses Accessibility TCC identity when launched as embedded child | ❌ Open |
| **MEDIUM** | [#88762](https://github.com/NousResearch/hermes-agent/issues/88762) | Qwen 3.8 fails where Qwen 3.6 works (local inference regression) | ❌ Open |
| **MEDIUM** | [#66616](https://github.com/NousResearch/hermes-agent/issues/66616) | Skills index stale (29.8h vs 26h limit) — automated freshness probe failing | ❌ Open |
| **LOW** | [#48860](https://github.com/NousResearch/hermes-agent/issues/48860) | OAuth prompt sanitizer rewrites `hermes-agent.nousresearch.com` → dead domain | ❌ Open |

**Note**: Several desktop stability bugs closed today (#76064, #76245, #80898, #57921) — good progress on orphan-process and DB-lock issues.

---

## 6. Feature Requests & Roadmap Signals

| Issue/PR | Signal | Likelihood for Next Version |
|----------|--------|----------------------------|
| [#84177](https://github.com/NousResearch/hermes-agent/issues/84177) | **Design mode** — element selection from desktop preview/browser → agent context (1 👍) | Medium — UX differentiation, desktop-focused |
| [#88795](https://github.com/NousResearch/hermes-agent/pull/88795) | **Plugin SDK: `host.revealPane()`** — commands can summon dismissed panes (fixes #88658) | High — small API addition, already in PR |
| [#88794](https://github.com/NousResearch/hermes-agent/pull/88794) | **Multi-client docs** — multiple Desktop clients → one `hermes serve` backend | High — documentation only, addresses #88650 |
| [#72638](https://github.com/NousResearch/hermes-agent/pull/72638) | **OpenAI Responses `text.verbosity`** config (`low`/`medium`/`high`) | Medium — provider-specific, needs decision |
| [#85774](https://github.com/NousResearch/hermes-agent/pull/85774) | **Inworld provider** — OpenAI-compatible endpoint at `api.inworld.ai` | Medium — new provider, first-class support |
| [#88701](https://github.com/NousResearch/hermes-agent/pull/88701) | **Sanitized session activity read model** — `GET /api/sessions/{id}/activity` | High — API surface, observability focus |
| [#87407](https://github.com/NousResearch/hermes-agent/pull/87407) | **Dashboard: profile listing provenance** — observable fallback source | Low — observability only |
| [#86856](https://github.com/NousResearch/hermes-agent/pull/86856) | **Kanban: versioned signal read model** — narrow integration surface | Low — plugin-facing |
| [#11239](https://github.com/NousResearch/hermes-agent/issues/11239) | **Env-backed secret refs for MCP config** — avoid secret-bearing config.yaml (2 👍) | High — security hygiene, long-standing |

**Prediction**: Next patch (v0.20.4) will likely include: plugin SDK `revealPane()`, multi-client docs, Inworld provider, and session activity API. The env-backed MCP secrets (#11239) and design mode (#84177) are stronger candidates for v0.21.

---

## 7. User Feedback Summary — Pain Points & Use Cases

| Theme | Evidence | Sentiment |
|-------|----------|-----------|
| **Desktop instability on macOS** | #80898 (orphaned `hermes serve`), #76245 (backend not killed on quit), #84033 (TCC identity loss) | 😡 Frustrated — "accumulate across repeated restarts", "linger as orphans" |
| **Plugin clutter in production** | #76064 (demo plugins enabled by default, 2 👍) | 😡 "UI clutter in production builds" |
| **MCP reliability** | #88661 (timeout parks connection, no reconnect), #77529 (secret provenance loss) | 😟 Blocked — "whole toolset unregisters", "no auto-reconnect until gateway restart" |
| **Model regression** | #88762 (Qwen 3.8 fails vs 3.6 works) | 😟 "Tried all possible fixes" — local inference broken |
| **Documentation drift** | #78539 (README contradicts busy model), #78567 (colon syntax documented but rejected) | 😕 Confused — "stale against current main" |
| **Security anxiety** | #77462 (Windows ACL hole, CRITICAL), #88706 (provenance/authority gaps) | 😰 Concerned — "verified live on Windows host", "ten-part hardening campaign" |
| **Positive: Architecture discipline** | #78647 (20/20 god files sharded, 76 comments) | 👍 Respect — "Standing policy: all god files are sharded, never reverted" |

**Top use cases visible**: Local inference (Qwen), multi-client desktop deployments, MCP toolchains, cron/media workflows, Telegram/WhatsApp bot development.

---

## 8. Backlog Watch — Long-Unanswered / Needs Maintainer Attention

| Item | Age | Why It Matters | Blockers |
|------|-----|----------------|----------|
| [#11239](https://github.com/NousResearch/hermes-agent/issues/11239) | **~4 months** (2026-04-16) | Env-backed MCP secrets — config.yaml secret-bearing by default; 2 👍 | Needs design decision on secret reference syntax |
| [#48860](https://github.com/NousResearch/hermes-agent/issues/48860) | **~2 months** (2026-06-19) | OAuth sanitizer breaks docs URL → NXDOMAIN; 1 👍 | Simple fix but touches anthropic_adapter prompt logic |
| [#66616](https://github.com/NousResearch/hermes-agent/issues/66616) | **~1 month** (2026-07-18) | Skills index automation degraded (48 comments) — affects /docs/skills | Cron workflow or deploy-site.yml needs debugging |
| [#77462](https://github.com/NousResearch/hermes-agent/issues/77462) | **15 days** (2026-08-03) | **CRITICAL Windows ACL hole** — `_secure_file` no-op, secrets exposed | Requires Windows ACL API (`icacls`/`SetSecurityInfo`) implementation |
| [#83565](https://github.com/NousResearch/hermes-agent/issues/83565) | **7 days** (2026-08-11) | Child-process credential inheritance epic — multiple PRs/issues bound here | Cross-cutting; needs unified credential propagation model |
| [#77476](https://github.com/NousResearch/hermes-agent/issues/77476) | **15 days** (2026-08-03) | CI fragility: exit-code-5=

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-08-18

## 1. Today's Overview
PicoClaw showed moderate maintenance activity on 2026-08-17 with **3 issue updates** and **4 PR updates**, but no new releases. The project is actively addressing stability bugs (agent tool-loop hangs, config/env override failures) and channel integrations (Slack file uploads, Weixin multi-instance). Two long-stale PRs (#271 from Feb, #2606 from Apr) were finally closed, indicating a backlog-clearing effort. One new critical bug (#3339: Google Antigravity 429 quota errors) appeared yesterday with no resolution yet. Overall health: **steady maintenance mode with emerging integration friction**.

## 2. Releases
**No new releases** in the last 24 hours. The latest published version remains unchanged.

## 3. Project Progress — Merged/Closed PRs (2026-08-17)
| PR | Title | Domain | Impact |
|----|-------|--------|--------|
| [#3312](https://github.com/sipeed/picoclaw/pull/3312) | `fix(agent): stop turn early on repeated identical tool failure` | Agent core | **High** — Stops silent spin loops when a tool fails identically (e.g., `git` without creds, shell guard blocks). Fixes user-facing "never gets an answer" bug (#3311). |
| [#271](https://github.com/sipeed/picoclaw/pull/271) | `fix: env overrides when config.json is missing` | Config / Deployment | **High** — Ensures env vars apply even without `config.json` (common in Fly/secret-only deployments). Prevents default-model fallback (glm-4.7) and missing-credential crashes. Includes regression test. |
| [#2606](https://github.com/sipeed/picoclaw/pull/2606) | `feat: enhance Weixin channel support and configuration` | Channel / Weixin | **Medium** — Multi-instance support, dynamic handling, validation, error handling, docs. Long-stale (Apr), now merged. |

**Open PR still pending:** [#3340](https://github.com/sipeed/picoclaw/pull/3340) `fix(slack): set FileSize on media upload params` — Slack SDK v0.23.1 rejects zero-length `FileSize` in `files.upload.v2` flow; fix adds required length upfront.

## 4. Community Hot Topics
| Item | Type | Activity | Underlying Need |
|------|------|----------|-----------------|
| [#3287](https://github.com/sipeed/picoclaw/issues/3287) | Feature (IRC) | 6 comments, stale since Jul 22 | **IRCv3 message fragmentation**: Users need PicoClaw to reassemble >512-byte messages split by IRC clients into single cohesive messages. Critical for IRC power users/bots. |
| [#3311](https://github.com/sipeed/picoclaw/issues/3311) | Bug (Agent loop) | 2 comments, closed via #3312 | **Silent agent hang**: Tool fails identically → agent retries to `max_tool_iterations` → user sees no reply. Fixed by #3312 (early exit on repeated identical failure). |
| [#3339](https://github.com/sipeed/picoclaw/issues/3339) | Bug (Antigravity) | 0 comments, created Aug 17 | **Google Antigravity 429 quota errors** despite valid OAuth scopes & model discovery. Blocks all generation. Urgent — no workaround, no PR yet. |

## 5. Bugs & Stability — Ranked by Severity
| Severity | Issue | Status | Fix PR |
|----------|-------|--------|--------|
| **Critical** | [#3339](https://github.com/sipeed/picoclaw/issues/3339) Antigravity 429 on every generation | **Open, 0 comments** | None |
| **High** | [#3311](https://github.com/sipeed/picoclaw/issues/3311) Agent silent loop on repeated tool failure | **Closed** | [#3312](https://github.com/sipeed/picoclaw/pull/3312) merged |
| **High** | [#271](https://github.com/sipeed/picoclaw/pull/271) Env overrides ignored when `config.json` missing | **Closed** | [#271](https://github.com/sipeed/picoclaw/pull/271) merged |
| **Medium** | [#3340](https://github.com/sipeed/picoclaw/pull/3340) Slack `FileSize=0` rejection on media upload | **Open PR** | [#3340](https://github.com/sipeed/picoclaw/pull/3340) (ready) |
| **Low/Medium** | [#3287](https://github.com/sipeed/picoclaw/issues/3287) IRC long-message fragmentation | **Open, stale** | None |

## 6. Feature Requests & Roadmap Signals
| Signal | Source | Likelihood for Next Version |
|--------|--------|-----------------------------|
| **IRCv3 message reassembly** | [#3287](https://github.com/sipeed/picoclaw/issues/3287) (6 comments, stale) | **Medium** — Clear spec (IRCv3 `message-tags`/`batch`), but stale; may need champion. |
| **Weixin multi-instance & config hardening** | [#2606](https://github.com/sipeed/picoclaw/pull/2606) (merged) | **Delivered** — Already in main. |
| **Slack SDK v0.23.1 compatibility** | [#3340](https://github.com/sipeed/picoclaw/pull/3340) | **High** — Small fix, blocks media uploads; likely merged soon. |
| **Agent resilience: early exit on repeated failure** | [#3312](https://github.com/sipeed/picoclaw/pull/3312) (merged) | **Delivered** — Pattern may extend to other retry loops. |

## 7. User Feedback Summary
- **Pain points**:  
  - **Silent agent hangs** (#3311) — "message asking agent to run `git` never got a reply" (Telegram production).  
  - **Config fragility** (#271) — Fly/secret-only deployments silently fall back to default model (glm-4.7) and crash on missing creds.  
  - **Antigravity quota wall** (#3339) — Valid auth + model discovery works, but every generation returns 429; no quota details in response.  
  - **IRC message splitting** (#3287) — Long messages arrive fragmented; bot treats each fragment as separate message.  
- **Positive**: Weixin channel enhancements (#2606) merged after long review; config fix (#271) includes regression test — shows quality focus.

## 8. Backlog Watch — Needs Maintainer Attention
| Item | Age | Why It Matters |
|------|-----|----------------|
| [#3287](https://github.com/sipeed/picoclaw/issues/3287) IRC long-message support | 27 days (stale) | 6 comments, clear spec, no PR. IRC users blocked. |
| [#3339](https://github.com/sipeed/picoclaw/issues/3339) Antigravity 429 | 1 day | **Critical regression** — all Google Antigravity generation broken. No PR, no workaround. |
| [#3340](https://github.com/sipeed/picoclaw/pull/3340) Slack FileSize fix | 1 day | Ready, small, blocks media uploads. Should be fast-merged. |
| [#271](https://github.com/sipeed/picoclaw/pull/271) Env override fix | 6 months | Finally merged — but shows config-related PRs can stall extremely long. |
| [#2606](https://github.com/sipeed/picoclaw/pull/2606) Weixin enhancement | 4 months | Merged — but long review cycle suggests channel PRs need faster triage. |

---

**Bottom line**: PicoClaw is fixing high-impact stability bugs (agent loops, config overrides) and clearing stale PRs, but **two urgent items need action today**: the Antigravity 429 outage (#3339) and the ready-to-merge Slack fix (#3340). The IRC feature (#3287) remains a community-requested gap. Release cadence appears low — consider a patch cut once #3339/#3340 land.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-08-18

## 1. Today's Overview

NanoClaw shows **high development velocity** with 42 PRs updated in the last 24 hours (25 merged/closed, 17 open) and 4 active issues. The project is in a **major architectural refactoring phase** — multiple core-team PRs are landing foundational infrastructure: a session-runtime driver seam (Docker as built-in), channel-layer libraries for Slack, router/delivery hooks, and MCP tool extension points. No new releases were published today. The merge ratio (~60%) indicates healthy throughput, though several open PRs are stacked dependencies suggesting ongoing work streams.

---

## 2. Releases

**No new releases today.** The project appears to be accumulating changes on `main` for a future version bump.

---

## 3. Project Progress — Merged/Closed PRs Today (25 items)

### Channel & Platform Infrastructure (Slack-focused wave)
| PR | Title | Type | Link |
|----|-------|------|------|
| #3310 | Restore `slack-formatting` container skill lost in upstream-main merge | Fix/Restore | [#3310](https://github.com/nanocoai/nanoclaw/pull/3310) |
| #3309 | Slack: defaults factory, membership, onboarding, a2a guard (wave B — per-thread everywhere) | Feature | [#3309](https://github.com/nanocoai/nanoclaw/pull/3309) |
| #3305 | Slack: shared channel-layer library + canvas cluster (wave A, includes main sync) | Feature | [#3305](https://github.com/nanocoai/nanoclaw/pull/3305) |
| #3304 | Channels: adapter-declared session-mode context defaults (threads stamp derived) | Feature | [#3304](https://github.com/nanocoai/nanoclaw/pull/3304) |
| #3292 | Channels: bridge inbound-policy registration seam | Feature | [#3292](https://github.com/nanocoai/nanoclaw/pull/3292) |
| #3297 | Setup: per-channel pre-step and companion-skill declarations for wizard | Feature | [#3297](https://github.com/nanocoai/nanoclaw/pull/3297) |
| #3293 | Router: session-created hook for brand-new engaged sessions | Feature | [#3293](https://github.com/nanocoai/nanoclaw/pull/3293) |
| #3294 | Delivery: post-delivery hook with first-delivery context | Feature | [#3294](https://github.com/nanocoai/nanoclaw/pull/3294) |
| #3295 | Channels: generic membership-event hook on Chat SDK bridge | Feature | [#3295](https://github.com/nanocoai/nanoclaw/pull/3295) |

### Core Runtime & Agent-Runner Extensibility
| PR | Title | Type | Link |
|----|-------|------|------|
| #3296 | Agent-runner: `extendTool` — additive MCP tool schema & description extension | Feature | [#3296](https://github.com/nanocoai/nanoclaw/pull/3296) |

### Documentation Fix
| PR | Title | Type | Link |
|----|-------|------|------|
| #1143 (issue) | Skills docs reference `/data/env` path that no longer exists | Doc Bug (Closed) | [#1143](https://github.com/nanocoai/nanoclaw/issues/1143) |

> **Pattern:** 9 Slack/channel PRs merged in a single day — this is a **coordinated "wave" landing** of the channel abstraction layer. The `extendTool` MCP extension point (#3296) is a notable plugin-style API addition.

---

## 4. Community Hot Topics

| Item | Activity | Signal |
|------|----------|--------|
| **#3301** Tasks firing in chat sessions lose logs/replies (one-door regression) | Created 2026-08-17, 0 comments | **Critical regression** from #2988 (v2.1.48). Affects all pre-existing task rows in chat sessions. Fix PR #3303 open. |
| **#3203** Codex provider emits undeclared `file` event → typecheck failure + dropped images | Created 2026-08-08, 1 comment | **Provider contract break** — blocks `/add-codex` on main. Needs `ProviderEvent` union update. |
| **#3289** / **#3291** Unbounded pending-message polling loads all due rows into JS | Created 2026-08-17, 0 comments | **Scalability/DoS risk** — backlog accumulation can OOM the runner. Fix PR #3291 open. |
| **#3299** `@openai/codex` pin 0.138.0 → 0.146.0 before GPT-5.4 retirement (2026-08-31) | Created 2026-08-17, 0 comments | **Time-bound dependency upgrade** — hard deadline Aug 31. |
| **#3306** Session-runtime driver seam (Docker built-in) — purely additive, all-green | Open, stacked on #3307/3308 | **Foundational refactor** — enables alternate runtimes (Podman, Firecracker, etc.) without host changes. |

> **Underlying needs:** (1) Stabilize the "one-door" task delivery model (#3301/#3303), (2) Complete the channel abstraction layer for multi-platform parity, (3) Harden runtime boundaries via driver seam (#3306), (4) Address technical debt in provider contracts (#3203) and polling bounds (#3289).

---

## 5. Bugs & Stability — Ranked by Severity

| Severity | Issue | Description | Fix PR |
|----------|-------|-------------|--------|
| **Critical** | **#3301** | Tasks in chat sessions: logs dropped, replies eaten, series unlisted — regression from #2988 (v2.1.48) | [#3303](https://github.com/nanocoai/nanoclaw/pull/3303) (open) |
| **High** | **#3203** | Codex provider emits undeclared `file` event → container typecheck fails; generated images silently dropped | None yet |
| **High** | **#3289** | `getPendingMessages()` loads *all* due rows into memory before `max` — OOM risk on backlog | [#3291](https://github.com/nanocoai/nanoclaw/pull/3291) (open) |
| **Medium** | **#3300** | `formatAttachments` escapes all fields except `type` — potential XML injection in agent-facing output | [#3300](https://github.com/nanocoai/nanoclaw/pull/3300) (open) |
| **Medium** | **#3299** | `@openai/codex` 0.138.0 defaults to GPT-5.4 retiring 2026-08-31 — `/add-codex` will break | [#3299](https://github.com/nanocoai/nanoclaw/pull/3299) (open) |
| **Low** | **#1143** | Skills docs reference removed `/data/env` path | Closed (doc update) |

> **Note:** #3301 is the most user-visible regression — it breaks task observability in chat sessions. #3289/#3291 is a latent stability risk that could cause runner crashes under load.

---

## 6. Feature Requests & Roadmap Signals

| Signal | Evidence | Likelihood for Next Version |
|--------|----------|----------------------------|
| **Pluggable session runtimes** | #3306 (driver seam), #3307 (host→driver), #3308 (group folder guard) — all open, stacked | **High** — foundational, purely additive, test suite green |
| **Channel abstraction v2** | 9 Slack/channel PRs merged today (waves A+B); #3298 (local web chat) open | **High** — wave B (#3309) just landed; local web chat is logical next adapter |
| **MCP tool extension API** | #3296 `extendTool` merged — additive schema/description/passthrough | **High** — enables skill authors to extend base tools without forks |
| **Router/delivery observability hooks** | #3293 (session-created), #3294 (post-delivery) merged | **High** — enables platform-specific onboarding, analytics |
| **Setup wizard extensibility** | #3297 (pre-step, companion skills) merged | **Medium** — reduces friction for new channel integrations |
| **OneCLI gateway bind fix** | #3302 (docker-compose gateway address) open | **Medium** — operational fix for hybrid deployments |

> **Prediction:** Next version will ship the **driver seam** (#3306/3307), **channel layer v2** (Slack per-thread + local web chat #3298), and **MCP extension API** (#3296). The one-door regression (#3301) must be fixed before or with that release.

---

## 7. User Feedback Summary

| Pain Point | Source | Impact |
|------------|--------|--------|
| **Task logs/replies vanish in chat sessions** | #3301 (glifocat) — "every legacy task row fires in chat mode" | High — breaks debugging & auditability for all pre-2.1.48 tasks |
| **Codex image generation silently fails** | #3203 (mshirel) — "generated images are silently dropped" | Medium — affects Codex skill users; no error surface |
| **Setup wizard inflexible for programmatic creds** | Implied by #3297 (pre-step hook) | Low-Medium — operator friction for automated deployments |
| **Documentation stale** | #1143 (bot-triaged) — `/data/env` references | Low — already closed |

> **No direct end-user comments** on issues today — most activity is core-team/internal. The triage bot (#1143) suggests automated doc hygiene.

---

## 8. Backlog Watch — Needs Maintainer Attention

| Item | Age | Risk | Why It Matters |
|------|-----|------|----------------|
| **#3203** Codex provider `file` event undeclared | 10 days (2026-08-08) | Blocks `/add-codex` on main; images dropped silently | Provider contract must be updated; affects AI coding workflow |
| **#3301** One-door task regression | 1 day (2026-08-17) | Data loss (logs/replies) for all legacy chat-session tasks | Fix PR #3303 exists but unmerged — should be fast-tracked |
| **#3289** / **#3291** Unbounded pending-message polling | 1 day | OOM/DoS under backlog load | Fix PR #3291 open — needs review for bounds correctness |
| **#3299** Codex pin upgrade before GPT-5.4 retirement | 1 day | Hard deadline: **2026-08-31** (13 days) | Time-sensitive; will break `/add-codex` if missed |
| **#3306** Driver seam (stacked on #3307, #3308) | 1 day | Foundational refactor — blocks runtime pluggability | Large stacked series; needs architectural review & merge coordination |

> **Priority order for maintainers:** #3299 (deadline) → #3301 (regression) → #3203 (contract break) → #3289 (stability) → #3306 stack (strategic).

---

## Links Reference

- **Issues:** [#1143](https://github.com/nanocoai/nanoclaw/issues/1143) | [#3203](https://github.com/nanocoai/nanoclaw/issues/3203) | [#3301](https://github.com/nanocoai/nanoclaw/issues/3301) | [#3289](https://github.com/nanocoai/nanoclaw/issues/3289)
- **Key PRs:** [#3303](https://github.com/nanocoai/nanoclaw/pull/3303) | [#3306](https://github.com/nanocoai/nanoclaw/pull/3306) | [#3307](https://github.com/nanocoai/nanoclaw/pull/3307) | [#3308](https://github.com/nanocoai/nanoclaw/pull/3308) | [#3291](https://github.com/nanocoai/nanoclaw/pull/3291) | [#3299](https://github.com/nanocoai/nanoclaw/pull/3299) | [#3298](https://github.com/nanocoai/nanoclaw/pull/3298) | [#3296](https://github.com/nanocoai/nanoclaw/pull/3296) | [#3309](https://github.com/nanocoai/nanoclaw/pull/3309) | [#3310](https://github.com/nanocoai/nanoclaw/pull/3310)

---

*Digest generated from GitHub API data for nanocoai/nanoclaw on 2026-08-18. All links point to github.com/nanocoai/nanoclaw.*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest — 2026-08-18

---

## 1. Today's Overview

NullClaw shows minimal activity over the last 24 hours. No issues were opened, updated, or closed, and no pull requests were merged. The sole activity is a single Dependabot-generated PR (#956) updating the Alpine Linux base image in the Docker image group from 3.23 to 3.24. This PR has been open since June 15 and remains unmerged as of the latest update on August 17. The project appears to be in a maintenance-only phase with no active feature development, bug fixes, or community discussion visible in the tracked period.

---

## 2. Releases

**No new releases** published in the last 24 hours.

---

## 3. Project Progress

**No PRs merged or closed today.** The only open PR (#956) is a routine dependency bump and has not advanced toward merge. No feature work, bug fixes, or refactors were completed in the observed window.

---

## 4. Community Hot Topics

| Item | Type | Comments | Reactions | Link |
|------|------|----------|-----------|------|
| #956 | PR (open) | 0 | 0 👍 | [nullclaw/nullclaw#956](https://github.com/nullclaw/nullclaw/pull/956) |

**Analysis:** The only tracked item is an automated dependency update with zero human engagement. No community discussions, feature debates, or bug reports are active. This suggests either a stable, low-maintenance project or a community that has migrated discussions elsewhere (e.g., Discord, forums).

---

## 5. Bugs & Stability

**No bugs, crashes, or regressions reported or updated in the last 24 hours.** No issue activity implies either high stability or lack of user reporting. No fix PRs exist because no bugs were surfaced.

---

## 6. Feature Requests & Roadmap Signals

**No feature requests or roadmap signals detected.** No issues labeled `enhancement`, `feature`, or similar were created or updated. The absence of user-driven requests makes it difficult to predict the next version's scope. The only signal is infrastructure maintenance (Alpine 3.24), suggesting the next release may be a patch-level Docker image refresh.

---

## 7. User Feedback Summary

**No user feedback captured in issues or PR discussions today.** With zero comments across all tracked items, there is no qualitative data on pain points, use cases, or satisfaction. This gap limits insight into real-world usage and should be monitored—if persistent, it may indicate low visibility or an inactive user base.

---

## 8. Backlog Watch

| Item | Type | Age | Status | Link |
|------|------|-----|--------|------|
| #956 | PR (dependabot) | 65 days (opened 2026-06-15) | Open, unmerged, no review | [nullclaw/nullclaw#956](https://github.com/nullclaw/nullclaw/pull/956) |

**Note:** PR #956 has lingered for over two months without maintainer attention. While low-risk (base image bump), its stagnation suggests either insufficient CI capacity to validate the update, or maintainer bandwidth constraints. Recommend triaging: either merge after CI pass, or close with note if Alpine 3.24 introduces incompatibilities.

---

**Project Health Indicator:** 🟡 **Low Activity / Maintenance Mode**  
*No merges, no issues, no community interaction in 24h. Single stale dependabot PR. Monitor for maintainer engagement.*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-08-18

## 1. Today's Overview
IronClaw is in an intense pre-release stabilization phase with **v1.3.0-rc.1** shipped yesterday. The project shows **high velocity**: 28 issues and 44 PRs updated in 24 hours, with a 36% PR merge rate (16/44). The dominant theme is **database write-pressure reduction** (Epic #7591 targeting ~60% fewer durable writes) and a **notification system overhaul** (#7687–#7691). A critical libSQL starvation bug (#7714) was diagnosed and a fix PR (#7717) opened same-day. Several customer-facing regressions persist (AGENTS.md sync, persistent memory recall, Slack/Telegram/MCP onboarding gaps).

## 2. Releases
### ironclaw-v1.3.0-rc.1 (2026-08-17)
- **Release candidate** for 1.3.0; no release notes published in the feed.
- **Install**: `curl --proto '=https' --tlsv1.2 -LsSf https://github.com/nearai/ironclaw/releases/download/ironclaw-v1.3.0-rc.1/ironclaw-installer.sh | sh`
- **Watch for**: Forward-ported 1.2 fixes (Windows FS/release reliability, clean JSON output, runtime curl healthchecks) via PR #7663 (merged). No breaking changes documented yet.

## 3. Project Progress — Merged/Closed Today (16 PRs)
| PR | Title | Area | Impact |
|----|-------|------|--------|
| [#7663](https://github.com/nearai/ironclaw/pull/7663) | fix(release): forward-port 1.2 fixes and thread repair | Release engineering | Restores Windows reliability, thread-index repair |
| [#7594](https://github.com/nearai/ironclaw/pull/7594) | [Tier 1] Route loop milestone sink through CoalescingEventSink | DB write reduction (Epic #7591) | ~30 pool checkouts/turn eliminated via batched INSERTs |
| [#7598](https://github.com/nearai/ironclaw/pull/7598) | [Tier 2] Collapse capability invocation-state writes to gate/terminal edges | DB write reduction | **Largest single win**: −40 to −60 rows/turn, 30→10 journal cmds |
| [#7605](https://github.com/nearai/ironclaw/pull/7605) | [Tier 3] Fold message lookup-index sibling rows into message row | DB write reduction | Cuts 1–3 full entry rows + trigger fan-out per message |
| [#7647](https://github.com/nearai/ironclaw/pull/7647) | feat(automations): deterministic no-delivery outcome for scheduled runs | Automations | Adds typed `[SILENT]` suppression contract |
| [#7637](https://github.com/nearai/ironclaw/pull/7637) | Type the design-system component boundary | Frontend/TypeScript | Explicit prop types for shared components |
| [#7703](https://github.com/nearai/ironclaw/pull/7703) | feat(wasm): typed WIT tool response and bundled guest migration | WASM/Extensions | Normalizes capability responses (superseded by #7711) |
| [#7710](https://github.com/nearai/ironclaw/pull/7710) | fix(slack): address multi-agent review findings on #7682 | Slack/UX | Hardens connect-link landing, extension resolution |

**Net effect**: The Tier 1–3 write-reduction PRs (#7594, #7598, #7605) are **merged and deployed**, delivering the bulk of Epic #7591's ~60% target. Automation silence semantics and WASM response typing also land.

## 4. Community Hot Topics (Most Comments/Engagement)
| Item | Comments | Type | Core Need |
|------|----------|------|-----------|
| [#7275](https://github.com/nearai/ironclaw/issues/7275) | 4 | Bug (closed) | **Persistent memory recall broken across conversations** — user feedback from #7185; tools exist but production verification failed |
| [#7591](https://github.com/nearai/ironclaw/issues/7591) | 3 | Epic | **DB write pressure reduction** — coordinating 4+ sub-issues; static audit found 22 rows/turn baseline |
| [#3762](https://github.com/nearai/ironclaw/issues/3762) | 2 | Bug (customer, P1, v1.4.0) | **AGENTS.md edits in WebUI don't update system prompt** — 3-month-old regression blocking identity customization |
| [#7701](https://github.com/nearai/ironclaw/issues/7701) | 2 | Task (Tier 2) | Collapse resource-governor reserve+reconcile into one write (−11 rows/turn) |
| [#7603](https://github.com/nearai/ironclaw/issues/7603) | 2 | Task (Tier 3) | Batch BeforeModel checkpoints per-N iterations (−14 rows/turn) |
| [#7604](https://github.com/nearai/ironclaw/issues/7604) | 2 | Task (Tier 3) | Collapse paired row writes across 4 domains (−11 event rows + halves) |

**Signal**: The write-reduction epic (#7591) is the **primary engineering focus**; customer pain (#3762, #7275) remains unresolved despite tooling existing.

## 5. Bugs & Stability — Ranked by Severity
| Severity | Issue | Description | Fix PR |
|----------|-------|-------------|--------|
| **Critical** | [#7714](https://github.com/nearai/ironclaw/issues/7714) | libSQL: single shared write connection starves resource-governor journal under load → cascading authority invalidation, permanent reservation leaks, capability calls fail | [#7717](https://github.com/nearai/ironclaw/pull/7717) (open, same-day) |
| **High** | [#7702](https://github.com/nearai/ironclaw/issues/7702) | Obligation audit records (`AuditBefore`/`AuditAfter`) **never attached in production** — violates documented host-api contract | None yet |
| **High** | [#7705](https://github.com/nearai/ironclaw/issues/7705) | Unbounded shutdown flush + latching `pending_flush_error` in `CoalescingEventSink` — can hang on wedged backend | None yet |
| **Medium** | [#7716](https://github.com/nearai/ironclaw/issues/7716) | MCP server flow missing bearer token auth + STDIO/HTTP transport options (QA bug bash P2) | None |
| **Medium** | [#7715](https://github.com/nearai/ironclaw/issues/7715) | Telegram connection lacks consent/selection between bot vs personal account (QA bug bash P2) | None |
| **Medium** | [#3762](https://github.com/nearai/ironclaw/issues/3762) | AGENTS.md edits in WebUI don't propagate to system prompt (customer, P1, v1.4.0 target) | None |
| **Medium** | [#7275](https://github.com/nearai/ironclaw/issues/7275) | Persistent memory not recalled across conversations (closed but root cause unverified) | — |

**Note**: #7714 is a **production-blocking cascade** on libSQL; fix PR #7717 is the highest-priority review item.

## 6. Feature Requests & Roadmap Signals
| Signal | Source | Likelihood for v1.3/v1.4 |
|--------|--------|--------------------------|
| **Durable notification inbox** (approvals, auth, blocked runs, run outcomes) | Epic #7687 + 4 sub-issues (#7688–#7691) | **High** — 4 PRs' worth of contracts/storage/UI in flight |
| **GitHub Projects v2 field manipulation** | [#7719](https://github.com/nearai/ironclaw/issues/7719) | Medium — unblocks internal dogfooding (#7716 priority update) |
| **ACP (Agent Communication Protocol) stdio serve** | [#7513](https://github.com/nearai/ironclaw/pull/7513) | **High** — enables Copilot/VS Code integration; XL PR, 1 week old |
| **Nostr host functions for WASM tools** | [#7184](https://github.com/nearai/ironclaw/pull/7184) | Medium — 2 weeks old, reborn/nostr niche |
| **OOBE automation-tasks prototype** (carousel, cards, agent-mode pill) | [#6994](https://github.com/nearai/ironclaw/pull/6994) | Medium — gated behind `oobe_suggestions` flag, 18 days old |
| **OMP core-tool contract + engines + benchmark** | [#7491](https://github.com/nearai/ironclaw/pull/7491) | **High** — consolidates 6 coding tools (`read`/`write`/`edit`/`glob`/`grep`/`bash`); XL, 1 week old |
| **Structured output finalization (provider-neutral)** | [#7693](https://github.com/nearai/ironclaw/pull/7693) | Medium — host-owned finalization step, no core loop changes |
| **Durable backend suggestions API** | [#7694](https://github.com/nearai/ironclaw/pull/7694) | Medium — async suggestion generation via unbounded runner |

**Prediction**: v1.3.0 will ship with write-reduction, WASM response typing, and Slack connect fix. v1.4.0 targets notification inbox, ACP serve, OMP coding tools, and AGENTS.md sync (#3762).

## 7. User Feedback Summary
| Pain Point | Evidence | Affected Surface |
|------------|----------|------------------|
| **Identity files not live-reloading** | #3762: "Editing AGENTS.md in web UI does not update system prompt for current or future conversations" — 3 months open, customer-tagged P1 | WebUI, System Prompt |
| **Memory not persisting across chats** | #7275: "Information explicitly established in one conversation is not reliably recalled in a later conversation" — user feedback from #7185 | Persistent Memory, Cross-thread |
| **Slack onboarding is public & manual** | #7681: "Unlinked-user connect message is public in shared channels and requires manual round trip" | Slack, Onboarding |
| **MCP server setup incomplete** | #7716: "Missing bearer key auth and STDIO/HTTP transport options" — QA bug bash blocker | MCP, Extensions |
| **Telegram connection ambiguous** | #7715: "No option to choose between bot and personal account; user not informed which mode" | Telegram, Onboarding |
| **Benchmark transparency** | #7704: Daily failure taxonomy shows storage write-lane contention as largest fixable defect | Observability, Benchmarks |

**Sentiment**: Power users (dogfooding team) are filing high-quality bug bash issues (#7714–#7716). Long-standing customer regressions (#3762, #7275) suggest **feedback loop from external users is slow**.

## 8. Backlog Watch — Stale & High-Value Items Needing Attention
| Item | Age | Why It Matters | Status |
|------|-----|----------------|--------|
| [#3762](https://github.com/nearai/ironclaw/issues/3762) | 92 days | **Customer P1**, blocks AGENTS.md-driven customization; tagged v1.4.0 | Open, no PR |
| [#6994](https://github.com/nearai/ironclaw/pull/6994) | 18 days | **OOBE/onboarding prototype** — first-run experience; gated behind flag | Open XL PR, design docs exist |
|

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-08-18

## 1. Today's Overview
LobsterAI shows **high maintenance velocity** with 18 PRs merged/closed in the last 24 hours, though most originated in April 2026 and were batch-processed today. The project is actively polishing UX (context menus, toast notifications, modal behavior, session grouping) and integrating new runtime providers (DeepSeek Harness, OrcaRouter). No new release was cut. Seven issues remain open — four are stale bugs from April (Ollama, MCP, scheduled tasks, groupPolicy) and one is a new community outreach (#2500) proposing cross-platform agent communication via VOKO. Overall health: **active maintenance backlog clearing, but user-facing bugs persist**.

## 2. Releases
**None** — no new versions published today.

## 3. Project Progress (Merged/Closed PRs Today)

| PR | Area | Change | Impact |
|----|------|--------|--------|
| [#2506](https://github.com/netease-youdao/LobsterAI/pull/2506) | docs | Add DeepSeek Harness (dsh) runtime setup instructions | Enables new local LLM runtime option |
| [#2505](https://github.com/netease-youdao/LobsterAI/pull/2505) | renderer, main | Feat: dsh process launcher | Core integration for DeepSeek Harness runtime |
| [#2502](https://github.com/netease-youdao/LobsterAI/pull/2502) | renderer, build, main, macos | Feat: dsh engine integration | Full engine wiring for dsh |
| [#2503](https://github.com/netease-youdao/LobsterAI/pull/2503) | main | Fix(electron): add edit context menu for text inputs | Native Cut/Copy/Paste/Select All in prompt fields |
| [#2501](https://github.com/netease-youdao/LobsterAI/pull/2501) | renderer | Fix(skills): portal upgrade progress overlay | Full-screen skill upgrade progress, better logging |
| [#1661](https://github.com/netease-youdao/LobsterAI/pull/1661) | main, cowork | Fix(log): sanitize exported logs | **Security** — removes API keys, tokens, secrets from exported logs |
| [#1663](https://github.com/netease-youdao/LobsterAI/pull/1663) | main, openclaw | Feat(openclaw): upgrade OpenClaw to v2026.4.12 | Runtime upgrade, plugin-sdk fix |
| [#1667](https://github.com/netease-youdao/LobsterAI/pull/1667) | stale | Fix(Settings): Qwen console links → Bailian | Updates deprecated DashScope links to Alibaba Bailian |
| [#1668](https://github.com/netease-youdao/LobsterAI/pull/1668) | renderer, main, openclaw, cowork | Feat(agent): per-agent working directory | Each non-main agent gets isolated workspace |
| [#1669](https://github.com/netease-youdao/LobsterAI/pull/1669) | renderer | Feat: fix settings model provider UX | Test-connection disable logic, custom provider name display |
| [#1675](https://github.com/netease-youdao/LobsterAI/pull/1675) | renderer, cowork | Feat(cowork): group session list by time period | Pinned → Today → Yesterday → 7d → 30d → Monthly |
| [#1636](https://github.com/netease-youdao/LobsterAI/pull/1636) | renderer, cowork | Feat(cowork): floating "scroll to bottom" button | Standard chat UX parity (Slack, Discord, ChatGPT) |
| [#1637](https://github.com/netease-youdao/LobsterAI/pull/1637) | renderer, cowork | Feat(cowork): "Regenerate" button on AI replies | Re-send last user message for new completion |
| [#1639](https://github.com/netease-youdao/LobsterAI/pull/1639) | renderer, cowork, im | Fix(i18n): hardcoded English tooltips | All button tooltips now use i18n keys |
| [#1640](https://github.com/netease-youdao/LobsterAI/pull/1640) | renderer, cowork | Feat(tool-result): copy button on tool outputs | Bash, Diff, standard tool results copyable |
| [#1641](https://github.com/netease-youdao/LobsterAI/pull/1641) | renderer | Feat(modal): unified Esc-to-close | All modals now dismissible via Escape key |
| [#1642](https://github.com/netease-youdao/LobsterAI/pull/1642) | renderer, main | Feat: Windows right-click "Open with LobsterAI" | Shell extension for directory context menu |
| [#1660](https://github.com/netease-youdao/LobsterAI/pull/1660) | renderer, cowork | Feat(cowork): non-main agent welcome shows name/desc | Personalized landing per agent |

**Summary**: Today’s merge wave delivers **security hardening (log sanitization), UX polish (modals, toasts, session grouping, copy buttons), new runtime support (dsh, OpenClaw upgrade), and agent isolation (per-agent workdirs)**. Most PRs were authored in April and landed today — suggesting a coordinated release-prep sprint.

## 4. Community Hot Topics

| Item | Type | Activity | Signal |
|------|------|----------|--------|
| [#2500](https://github.com/netease-youdao/LobsterAI/issues/2500) | Issue | Created & updated today, 1 comment | **Cross-platform agent interop proposal** — VOKO author pitches A2A communication layer (OpenClaw, AstrBot, VOKO IM already integrated). LobsterAI could become a VOKO node. |
| [#1653](https://github.com/netease-youdao/LobsterAI/issues/1653) | Issue | Stale (Apr 13), updated today, 2 comments | `groupPolicy` resets to `allowlist` periodically — config persistence bug affecting multi-agent policies. |
| [#1635](https://github.com/netease-youdao/LobsterAI/issues/1635) | Issue | Stale (Apr 12), updated today, 1 comment | **Ollama local models unusable** (qwen3, gemma4) — works in CherryStudio, fails in LobsterAI with SSE error. Core local-LLM blocker. |
| [#1662](https://github.com/netease-youdao/LobsterAI/issues/1662) | Issue | Stale (Apr 14), updated today, 1 comment | **Non-SSE MCP engines broken** — only SSE transport works; stdio/HTTP MCP servers fail. |
| [#1644](https://github.com/netease-youdao/LobsterAI/issues/1644) | Issue | Stale (Apr 12), updated today, 1 comment | **Feature request**: MD-based workflow to orchestrate multiple agents — main agent cannot discover/call other user-created agents. |

**Underlying needs**: (1) **Local model reliability** (Ollama, MCP stdio) — critical for privacy/offline users; (2) **Agent ecosystem composability** — users want agents to discover and delegate to each other; (3) **Config stability** — `groupPolicy` regression erodes trust in multi-agent setups; (4) **Standards alignment** — VOKO proposal signals demand for A2A/interop protocols.

## 5. Bugs & Stability (Ranked by Severity)

| Severity | Issue | Status | Fix PR? |
|----------|-------|--------|---------|
| **High** | [#1635](https://github.com/netease-youdao/LobsterAI/issues/1635) Ollama models fail (qwen3, gemma4) — SSE error | Open, stale | No |
| **High** | [#1662](https://github.com/netease-youdao/LobsterAI/issues/1662) Non-SSE MCP engines unusable | Open, stale | No |
| **Medium** | [#1653](https://github.com/netease-youdao/LobsterAI/issues/1653) `groupPolicy` overwritten to `allowlist` periodically | Open, stale | No |
| **Medium** | [#1643](https://github.com/netease-youdao/LobsterAI/issues/1643) Scheduled task save shows false "unsaved content" toast | Open, stale | No |
| **Medium** | [#1671](https://github.com/netease-youdao/LobsterAI/issues/1671) MD→Word conversion cuts off mid-stream (`sse response finish reason: full`) | Open, stale | No |

**Note**: The critical log-sanitization bug (exposed API keys in exported logs) was fixed in [#1661](https://github.com/netease-youdao/LobsterAI/pull/1661) and merged today.

## 6. Feature Requests & Roadmap Signals

| Request | Source | Likelihood for Next Version |
|---------|--------|----------------------------|
| **MD-based workflow / agent orchestration** | [#1644](https://github.com/netease-youdao/LobsterAI/issues/1644) | Medium — aligns with per-agent workdirs ([#1668](https://github.com/netease-youdao/LobsterAI/pull/1668)) and non-main agent welcome ([#1660](https://github.com/netease-youdao/LobsterAI/pull/1660)); needs agent registry/discovery |
| **VOKO cross-platform A2A integration** | [#2500](https://github.com/netease-youdao/LobsterAI/issues/2500) | Low (external proposal) — but strategic; could position LobsterAI as interop hub |
| **Ollama / local model parity with CherryStudio** | [#1635](https://github.com/netease-youdao/LobsterAI/issues/1635) | High — blocker for local-first users; likely prioritized post-release |
| **Full MCP transport support (stdio, HTTP)** | [#1662](https://github.com/netease-youdao/LobsterAI/issues/1662) | High — MCP is core extensibility; SSE-only is a regression |
| **Per-agent working directories** | [#1668](https://github.com/netease-youdao/LobsterAI/pull/1668) | **Done** — merged today |
| **Session list time grouping** | [#1675](https://github.com/netease-youdao/LobsterAI/pull/1675) | **Done** — merged today |

**Prediction**: Next patch will likely address the **Ollama/MCP transport bugs** and **groupPolicy regression** — they’re the loudest user-facing regressions. Agent orchestration (MD workflow) is a bigger architectural lift, possibly targeted for a minor version.

## 7. User Feedback Summary

| Pain Point | Evidence | Sentiment |
|------------|----------|-----------|
| **Local models broken** | [#1635](https://github.com/netease-youdao/LobsterAI/issues/1635) — "Ollama models from qwen3 to gemma4 all fail; CherryStudio works fine" | 😡 Frustrated — core feature regression |
| **MCP limited to SSE** | [#1662](https://github.com/netease-youdao/LobsterAI/issues/1662) — "Non-SSE MCP engines cannot be found/used" | 😕 Disappointed — blocks stdio/HTTP tool servers |
| **Config instability** | [#1653](https://github.com/netease-youdao/LobsterAI/issues/1653) — "`groupPolicy` overwritten to allowlist every while" | 😟 Anxious — trust issue for team/multi-agent use |
| **False unsaved toast** | [#1643](https://github.com/netease-youdao/LobsterAI/issues/1643) — "Manual scheduled task save shows 'unsaved content' but actually saved" | 😐 Annoyed — UX polish gap |
| **Streaming cutoff** | [#1671](https://github.com/netease-youdao/LobsterAI/issues/1671) — "MD→Word stops halfway with `sse response finish reason: full`" | 😕 Concerned — data loss risk |
| **Positive: UX improvements landing** | 18 PRs merged today — scroll-to-bottom, regenerate, copy tool results, Esc modals, session grouping, per-agent workdirs | 🙂 Encouraged — visible polish velocity |

**Net sentiment**: Users hit **hard blockers on local LLMs and MCP**, but see **rapid UX iteration**. Trust hinges on fixing the runtime regressions.

## 8. Backlog Watch (Needs Maintainer Attention)

| Item | Age | Why It Matters |
|------|-----|----------------|
| [#1635](https://github.com/netease-youdao/LobsterAI/issues/1635) Ollama models unusable | 128 days | Blocks local-first workflow; works in competitors; no fix PR |
| [#1662](https://github.com/netease-youdao/LobsterAI/issues/1662) Non-SSE MCP broken | 126 days | Core extensibility broken; stdio/HTTP are standard MCP transports |
| [#1653](https://github.com/netease-youdao/LobsterAI/issues/1653) `groupPolicy` reset | 127 days | Multi-agent policy regression; config persistence bug |
| [#1644](https://github.com/netease-youdao/LobsterAI/issues/1644) MD workflow / agent orchestration | 128 days | High-value feature request; enables agent-as-service composition |
| [#1277](https://github.com/netease-youdao/LobsterAI/pull/1277) Electron 40→43 bump (dependabot) | 138 days | **Open, unmerged** — major Electron upgrade; may fix upstream bugs but needs testing |

**Action items**: (1) Triage Ollama/MCP bugs — assign to runtime team; (2) Investigate `groupPolicy` persistence; (3) Review Electron 43 upgrade for compatibility; (4) Design RFC for agent registry/orchestration per [#1644](https://github.com/netease-youdao/LobsterAI/issues/1644).

---

*Digest generated from GitHub data as of 2026-08-18. Links point to netease-youdao/LobsterAI.*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-08-18

## 1. Today's Overview
Moltis shows **healthy, steady development velocity** with 9 PRs updated in the last 24 hours (6 merged/closed, 3 open) and 3 issue updates. The project is actively addressing both long-standing bugs (Podman support, browser shadow DOM) and new feature work (external agent model/effort selection, MiniMax Code ACP agent, managed Files library). CI hygiene is being enforced (file-size limits), and dependency maintenance is current. No releases were cut today, but several merged PRs represent user-facing improvements likely bound for the next release.

## 2. Releases
**No new releases published today.** The last release information is not included in the provided data.

## 3. Project Progress — Merged/Closed PRs (Last 24h)

| PR | Type | Summary | Impact |
|----|------|---------|--------|
| [#1125](https://github.com/moltis-org/moltis/pull/1125) | Feature | **Model & effort selection for external agents** — adds `models`/`efforts` config, `/model` UI entries under `external-agent/<kind>`, persistence, and validation. | Major UX improvement for multi-provider workflows; enables first-class model switching for ACP/OpenAI-compatible agents. |
| [#1130](https://github.com/moltis-org/moltis/pull/1130) | Feature | **Configurable WebUI RPC timeout** — implements #1127. | Directly addresses a user-requested enhancement; reduces friction for slow/remote backends. |
| [#1204](https://github.com/moltis-org/moltis/pull/1204) | Feature | **MiniMax Code ACP agent** — adds `acp-minimax-code` kind, executable detection, registry entry, docs, and UI fixtures. | Expands supported agent ecosystem; zero-config discovery for MiniMax users. |
| [#1103](https://github.com/moltis-org/moltis/pull/1103) | Bugfix | **Efficient shadow DOM piercing** for browser snapshots/ref-based lookups. | Fixes a long-standing browser automation limitation; improves reliability of DOM interactions. |
| [#1207](https://github.com/moltis-org/moltis/pull/1207) | Chore | **Dependency bumps**: wasmtime-wasi, cmov, quinn-proto, serde_with. | Routine maintenance; keeps WASM runtime, crypto, QUIC, and serialization deps current. |
| [#1087](https://github.com/moltis-org/moltis/pull/1087) | Chore | **tar 0.4.45 → 0.4.46**. | Minor dependency update. |

## 4. Community Hot Topics

| Item | Activity | Underlying Need |
|------|----------|-----------------|
| [#1095](https://github.com/moltis-org/moltis/issues/1095) **Podman not working via moltis** (2 comments, open since Jun 3) | Highest engagement among open issues; 2 comments indicate active debugging. | **Container runtime parity** — users expect Podman to work as a drop-in Docker alternative for agent isolation. Blocking for rootless/SELinux environments. |
| [#1202](https://github.com/moltis-org/moltis/issues/1202) **Format CI gate red: two files >1500 lines** (closed, 0 comments) | CI enforcement triggered immediate attention; fixed same day. | **Codebase maintainability** — automated guardrails prevent creeping file bloat; signals disciplined review culture. |
| [#1127](https://github.com/moltis-org/moltis/issues/1127) **Configure RPC timeout** (closed, 0 comments) | Resolved via #1130 within 2 months of filing. | **Operational flexibility** for high-latency or unreliable network paths between WebUI and backend. |

## 5. Bugs & Stability

| Severity | Issue/PR | Status | Fix PR |
|----------|----------|--------|--------|
| **High** | [#1095](https://github.com/moltis-org/moltis/issues/1095) Podman broken | **Open** — no fix PR yet | None |
| **Medium** | [#1187](https://github.com/moltis-org/moltis/issues/1187) `heartbeat.update` overwrites config with defaults | **Open** — fix in [#1209](https://github.com/moltis-org/moltis/pull/1209) | #1209 (open) |
| **Medium** | [#1205](https://github.com/moltis-org/moltis/issues/1205) `heartbeat.active_hours` ignored | **Open** — fix in [#1208](https://github.com/moltis-org/moltis/pull/1208) | #1208 (open) |
| **Low** | Shadow DOM lookup inefficiency | **Fixed** — merged in [#1103](https://github.com/moltis-org/moltis/pull/1103) | #1103 |

**Note:** Two heartbeat-related regressions (#1187, #1205) have open fix PRs (#1209, #1208) authored by maintainer Lstarsky0, suggesting rapid resolution.

## 6. Feature Requests & Roadmap Signals

| Request | Signal Strength | Likelihood for Next Release |
|---------|-----------------|-----------------------------|
| **External agent model/effort selection** (#1125) | **Merged** — full implementation with UI, config, persistence | ✅ Already in main |
| **Configurable RPC timeout** (#1127/#1130) | **Merged** — direct user request, quick turnaround | ✅ Already in main |
| **MiniMax Code ACP agent** (#1204) | **Merged** — community contribution, complete with docs/UI | ✅ Already in main |
| **Managed Files library + Settings browser** (#1206) | **Open PR** — large scope (persistent FS APIs, Finder-style UI, container mounts) | 🟡 High — maintainer-authored, aligns with "personal AI assistant" vision |
| **Heartbeat config patch semantics** (#1187/#1209) | **Open PR** — fixes surprising default-overwrite behavior | 🟢 High — small, targeted fix |
| **Heartbeat active hours enforcement** (#1205/#1208) | **Open PR** — completes documented-but-unused feature | 🟢 High — small, completes existing design |

**Prediction:** Next release will likely include the three merged features plus the two heartbeat fixes. The Files library (#1206) is substantial and may target a subsequent minor version.

## 7. User Feedback Summary

| Pain Point / Use Case | Evidence | Sentiment |
|------------------------|----------|-----------|
| **Podman support essential for rootless/SELinux deployments** | #1095 open 76 days, user provided full context | 😟 Frustrated — blocker for production use |
| **Need model switching across diverse agent providers** | #1125 merged, comprehensive implementation | 😊 Satisfied — feature delivered |
| **RPC timeouts too aggressive for remote backends** | #1127 filed, #1130 merged quickly | 😊 Responsive — maintainers acted fast |
| **Heartbeat config updates unexpectedly reset values** | #1187 filed, fix PR #1209 open | 😐 Annoyed — regression in config UX |
| **Active hours setting documented but non-functional** | #1205 filed, fix PR #1208 open | 😐 Confused — feature gap |
| **Browser automation fails on shadow DOM** | #1103 merged after alternative PR path | 😊 Relieved — long-standing limitation fixed |

## 8. Backlog Watch — Items Needing Maintainer Attention

| Item | Age | Risk | Why It Matters |
|------|-----|------|----------------|
| [#1095](https://github.com/moltis-org/moltis/issues/1095) **Podman not working** | 76 days | **High** — blocks adoption in regulated/rootless environments; no fix PR | Core runtime compatibility; multiple users likely affected silently |
| [#1209](https://github.com/moltis-org/moltis/pull/1209) **heartbeat.update patch semantics** | 1 day | Medium — config corruption risk on partial updates | Small fix, high correctness impact; authored by maintainer |
| [#1208](https://github.com/moltis-org/moltis/pull/1208) **heartbeat active hours enforcement** | 1 day | Low-Medium — feature completeness | Completes documented behavior; low risk |
| [#1206](https://github.com/moltis-org/moltis/pull/1206) **Managed Files library + Settings browser** | 1 day | **Strategic** — large surface area, new attack surface (FS APIs) | Defines "personal AI assistant" file interaction model; needs thorough review |

---

**Overall Health:** 🟢 **Good** — consistent merge velocity, responsive to user requests, CI guardrails active, dependency hygiene maintained. Primary risk is the **long-open Podman issue (#1095)** which may indicate a platform-specific gap needing dedicated investigation. The upcoming Files library (#1206) represents a significant architectural expansion requiring careful review.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (QwenPaw) Project Digest — 2026-08-18

---

## 1. Today's Overview

CoPaw (QwenPaw) shows **high development velocity** with 35 PRs and 14 issues updated in the last 24 hours. The project is in active feature development and bug-fixing mode post v2.1.0 release, with a strong focus on Console UX improvements, plugin ecosystem expansion (DataPaw, AnySearch), and multi-channel reliability. The merge rate (22/35 PRs closed) indicates healthy maintainer throughput. No new release was cut today, suggesting the team is accumulating changes for a near-term v2.1.1 or v2.2 milestone.

---

## 2. Releases

**No new releases published today.**  
Latest known version: **v2.1.0** (referenced in multiple issues). The project appears to be in a stabilization/feature-packing window after the 2.1.0 release.

---

## 3. Project Progress — Merged/Closed PRs (Last 24h)

| PR | Title | Type | Impact |
|----|-------|------|--------|
| [#7083](https://github.com/agentscope-ai/QwenPaw/pull/7083) | `feat(console): compact background task list and add scroll hint` | UI/UX | Improves Console chat input visibility when many background tasks run |
| [#7017](https://github.com/agentscope-ai/QwenPaw/pull/7017) | `fix(console): open newly installed PawApps without reload` | UX/Plugin | Eliminates manual refresh after installing apps from App Center |
| [#5151](https://github.com/agentscope-ai/QwenPaw/pull/5151) | `fix(GitPanel): fix tabs styles not applied due to incorrect class prefix` | Bugfix | Resolves CSS prefix mismatch (`qwenpaw` vs `ant-`) breaking GitPanel tabs |
| [#6975](https://github.com/agentscope-ai/QwenPaw/pull/6975) | `fix(console): update context-usage ring after compact` | Bugfix | Fixes context usage indicator not refreshing after `/compact` command |
| [#6981](https://github.com/agentscope-ai/QwenPaw/pull/6981) | `feat(console): remove approval hints from i18n placeholders` | I18n/Cleanup | Removes `/approve` `/deny` hints from chat input across 7 locales |
| [#6968](https://github.com/agentscope-ai/QwenPaw/pull/6968) | `fix(token-usage): stop counting image base64 as text tokens` | Bugfix | Prevents context usage ring from falsely showing 100% after image uploads |
| [#6940](https://github.com/agentscope-ai/QwenPaw/pull/6940) | `feat(pawapp): add native DataPaw app runtime and durable analysis workspace` | Feature | **Major**: New DataPaw app for data analysis with persistent workspace (first-time contributor) |

**Key advancement**: DataPaw native app runtime merged (#6940), expanding the PawApp ecosystem. Console UX polish continues across token counting, background tasks, i18n, and plugin install flow.

---

## 4. Community Hot Topics — Most Active Issues/PRs

| Item | Comments | Type | Core Need |
|------|----------|------|-----------|
| [#6405](https://github.com/agentscope-ai/QwenPaw/issues/6405) | 7 | Question/Bug | **MCP tool resolution broken in v2.0+** — tools renamed to `[mcp-key]__[tool_name]` but "Tool not found" errors persist (Docker v2.0.0post3) |
| [#7011](https://github.com/agentscope-ai/QwenPaw/issues/7011) | 6 | Bug | **Cross-session interference** — Console stop request cancels active Feishu session due to session identity collision across UI sessions (v2.1.0) |
| [#7085](https://github.com/agentscope-ai/QwenPaw/issues/7085) | 3 | Enhancement | **Per-channel model configuration** — Users need different models per channel (DingTalk: gpt-4o, WeChat: qwen-max, Console: local llama.cpp) |
| [#6925](https://github.com/agentscope-ai/QwenPaw/issues/6925) | 2 | Enhancement | **Unified agent collaboration view** — Multi-agent conversations spawn separate sessions; users want single-window collaboration history |

**Underlying signals**: 
- **Multi-tenancy/session isolation** is fragile (#7011) — critical for production deployments
- **Channel-aware configuration** (#7085) is a top feature ask — reflects real-world multi-platform deployment needs
- **MCP integration stability** (#6405) remains a pain point post-v2.0 migration

---

## 5. Bugs & Stability — Ranked by Severity

| Severity | Issue | Description | Fix PR? |
|----------|-------|-------------|---------|
| **Critical** | [#7063](https://github.com/agentscope-ai/QwenPaw/issues/7063) | Agent crashes on **every tool call**: `_acting()` returns coroutine but `_execute_tool_call` uses `async for` → `TypeError` (v2.1.0) | ❌ No PR yet |
| **Critical** | [#7082](https://github.com/agentscope-ai/QwenPaw/issues/7082) | Console startup fails: Pydantic `_StructuredOutputDynamicClass` not fully defined → `MODEL_EXECUTION_ERROR` (v2.1.0) | ❌ No PR yet |
| **High** | [#7011](https://github.com/agentscope-ai/QwenPaw/issues/7011) | Feishu session cancelled by unrelated Console stop request — session identity leak across UI sessions | ❌ No PR yet |
| **High** | [#7088](https://github.com/agentscope-ai/QwenPaw/issues/7088) | OneBot/NapCat passes short-lived QQ image URLs (signed `rkey` expires ~2h) to LLM → 400 download errors, poisons session history | ✅ Related: [#7087](https://github.com/agentscope-ai/QwenPaw/pull/7087) (localizes remote media URLs client-side) |
| **Medium** | [#7084](https://github.com/agentscope-ai/QwenPaw/issues/7084) | History sidebar unclickable when only 1 conversation exists — works after 2nd conversation created | ❌ No PR yet |
| **Medium** | [#7051](https://github.com/agentscope-ai/QwenPaw/issues/7051) | Console images lost on session reload — backend serves data URL, frontend shows broken thumbnail | ❌ No PR yet |
| **Medium** | [#7076](https://github.com/agentscope-ai/QwenPaw/issues/7076) | qwenpaw-creator: LLM model config returns 404 (v2.1.0) | ❌ No PR yet |
| **Medium** | [#7077](https://github.com/agentscope-ai/QwenPaw/issues/7077) | Plugin runtime hooks lost after workspace reload (hot-install) — `workspace_created` not re-fired | ❌ No PR yet |

**Top priorities for maintainers**: #7063 and #7082 are **regressions blocking core functionality** (tool execution, console startup) in v2.1.0 and should be hotfixed immediately.

---

## 6. Feature Requests & Roadmap Signals

| Request | Issue/PR | Likelihood for Next Version | Rationale |
|---------|----------|----------------------------|-----------|
| **Per-channel model config** | [#7085](https://github.com/agentscope-ai/QwenPaw/issues/7085) | High | 3 comments, clear multi-platform use case, aligns with channel architecture |
| **PowerContext long-term memory backend** | [#7079](https://github.com/agentscope-ai/QwenPaw/issues/7079) + [#7080](https://github.com/agentscope-ai/QwenPaw/pull/7080) | High | PR already opened (first-time contributor), uses existing `BaseMemoryManager` extension point |
| **AnySearch web search integration** | [#6817](https://github.com/agentscope-ai/QwenPaw/pull/6817), [#7081](https://github.com/agentscope-ai/QwenPaw/pull/7081) | High | Two PRs (one closed, one open), replaces Tavily, includes MCP client + SearchProvider |
| **Cron job run details (timing, duration, status)** | [#7075](https://github.com/agentscope-ai/QwenPaw/issues/7075) | Medium | UX gap for long-running jobs; UI mockup provided |
| **Persistent workspace artifact cards in chat** | [#6719](https://github.com/agentscope-ai/QwenPaw/pull/6719) | Medium | WorkBuddy-style UX, PR open since Aug 5, detects file changes per turn |
| **Session-scoped multi-project directories** | [#6976](https://github.com/agentscope-ai/QwenPaw/pull/6976) | Medium | Architectural improvement for multi-repo workflows |
| **Unified provider discovery & model routing** | [#6302](https://github.com/agentscope-ai/QwenPaw/pull/6302) | Low (large scope) | Massive refactor (catalog-driven, capability-aware routing), open since Jul 21 |

**Predicted next-release candidates**: PowerContext memory (#7080), AnySearch (#7081), per-channel models (#7085), DataPaw release pipeline (#7089).

---

## 7. User Feedback Summary — Pain Points & Use Cases

| Theme | Evidence | Sentiment |
|-------|----------|-----------|
| **v2.0/v2.1 migration friction** | #6405 (MCP tool naming), #7063 (tool call crash), #7082 (startup crash), #7076 (creator 404) | 😡 **Frustrated** — core workflows broken post-upgrade |
| **Multi-channel production needs** | #7085 (per-channel models), #7011 (Feishu/Console isolation), #7088 (OneBot URL expiry) | 😐 **Pragmatic** — users deploying across DingTalk, WeChat, Feishu, QQ, Console simultaneously |
| **Console UX polish expected** | #7084 (history click), #7051 (image persistence), #7083 (task list), #6968 (token count) | 🙂 **Constructive** — detailed bug reports with version info, some with screenshots |
| **Plugin/extensibility appetite** | #7079/#7080 (PowerContext), #6940 (DataPaw merged), #6817/#7081 (AnySearch), #7077 (hook persistence) | 😃 **Enthusiastic** — community building memory backends, search providers, data apps |
| **Observability gaps** | #7075 (cron run details), #7048 (cron update silent failure) | 😐 **Operational** — need visibility into background job execution |

**Notable quote** (from #7085): *"Current model config is global or agent-level — changing default model affects all channels. We need DingTalk=gpt-4o, WeChat=qwen-max, Console=local llama.cpp"*

---

## 8. Backlog Watch — Stale/Important Items Needing Attention

| Item | Age | Status | Why It Matters |
|------|-----|--------|----------------|
| [#6302](https://github.com/agentscope-ai/QwenPaw/pull/6302) | 28 days | Open | **Unified provider/model routing** — foundational refactor for multi-provider support; no recent maintainer review |
| [#6515](https://github.com/agentscope-ai/QwenPaw/pull/6515) | 21 days | Open | **Volcengine Agent Plan + Xiaomi MiMo providers** — adds two major Chinese LLM providers; community demand likely high |
| [#6719](https://github.com/agentscope-ai/QwenPaw/pull/6719) | 13 days | Open | **Workspace artifact cards** — UX differentiator (WorkBuddy-style); persists file changes per chat turn |
| [#6976](https://github.com/agentscope-ai/QwenPaw/pull/6976) | 5 days | Open | **Multi-project directories per session** — enables monorepo/multi-repo agent workflows |
| [#7011](https://github.com/agentscope-ai/QwenPaw/issues/7011) | 4 days | Open | **Cross-session cancellation bug** — data integrity risk for multi-channel deployments; 6 comments, no fix PR |
| [#7063](https://github.com/agentscope-ai/QwenPaw/issues/7063) | 2 days | Closed (invalid?) | **Tool call crash** — marked "bug, invalid" but describes clear `async for` vs coroutine mismatch; needs verification if fixed elsewhere |
| [#6405](https://github.com/agentscope-ai/QwenPaw/issues/6405) | 26 days | Closed | **MCP tool not found** — 7 comments, closed but unclear if resolved; Docker v2.0.0post3 users may still hit this |

**Maintainer action recommended**: Triage #6302, #6515, #6719 for review/merge; investigate #7063 closure reason; confirm #6405 resolution for Docker users.

---

## Project Health Indicators

| Metric | Signal |
|--------|--------|
| **PR merge rate** | 63% (22/35) — healthy |
| **First-time contributor PRs** | 4+ merged/closed today (#6940, #6817, #7080, #7081, #7086, #7089) — strong community onboarding |
| **Critical bug density** | 2 blockers in v2.1.0 (#7063, #7082) — concerning for recent release |
| **Feature vs. fix balance** | ~60% features/enhancements in open PRs — forward momentum |
| **Multi-platform focus** | 4+ channel-related issues/PRs (Feishu, OneBot, DingTalk, WeChat) — production hardening phase |

**Bottom line**: CoPaw is evolving rapidly with strong community contributions, but v2.1.0 has **two critical regressions** that should trigger a hotfix (v2.1.1) before new features land. The plugin ecosystem (DataPaw, AnySearch, PowerContext) is maturing well.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-08-18

## 1. Today's Overview

ZeroClaw shows **high governance and architecture activity** with 50 issues and 50 PRs updated in the last 24 hours. The project is in a **pre-v0.9.0 RFC-heavy phase** — 20+ open RFCs cover authentication, security pipelines, gateway boundaries, channel architecture, and telemetry. No new releases were cut. Merged PRs (15) focus on **security hardening** (SSRF guards, API key leakage fixes, atomic budget accounting), **channel reliability** (WhatsApp, Telegram, Email, QQ, Mattermost), and **CI infrastructure** (shared Clippy runner, scheduled cross-platform tests). The maintainer decision queue (#8692) tracks 13 active RFCs awaiting rulings, indicating a structured but bottleneck-prone governance process.

## 2. Releases

**No new releases** in the last 24 hours. Current version remains **0.8.4** (per RFC #6808 tracker). The v0.9.0 milestone is tracked in #7432 (auth, security, gateway, breaking changes).

## 3. Project Progress — Merged/Closed PRs (Last 24h)

| PR | Type | Summary | Risk |
|----|------|---------|------|
| [#9973](https://github.com/zeroclaw-labs/zeroclaw/pull/9973) | **Security Fix** | Remove Gemini API keys from URLs → use `x-goog-api-key` header | P1, High |
| [#10000](https://github.com/zeroclaw-labs/zeroclaw/pull/10000) | **Security Fix** | Bound QQ & Mattermost inbound attachment downloads (10/25 MiB) | P1, High |
| [#9996](https://github.com/zeroclaw-labs/zeroclaw/pull/9996) | **Security Fix** | Atomic action-budget accounting (fixes #9849 race) | High |
| [#9993](https://github.com/zeroclaw-labs/zeroclaw/pull/9993) | **Security Fix** | Stop implicit local-file reads in Email attachments | High |
| [#9612](https://github.com/zeroclaw-labs/zeroclaw/pull/9612) | **Reliability** | Tie WhatsApp Cloud approval token to guard — prevent orphaned entries | P1, High |
| [#9765](https://github.com/zeroclaw-labs/zeroclaw/pull/9765) | **Bug Fix** | Load SOP definitions from shared workspace, not `data_dir` | P1, High |
| [#9544](https://github.com/zeroclaw-labs/zeroclaw/pull/9544) | **Bug Fix** | Honor configured provider fallbacks in delegation | P2, High |
| [#9398](https://github.com/zeroclaw-labs/zeroclaw/pull/9398) | **CI** | Add scheduled macOS/Windows test matrix (nightly + manual) | High |
| [#10039](https://github.com/zeroclaw-labs/zeroclaw/pull/10039) | **CI** | Share Clippy runner across required/advisory workflows | High |
| [#10043](https://github.com/zeroclaw-labs/zeroclaw/pull/10043) | **CI** | Remove duplicate architecture test guards from Lint job | High |
| [#9547](https://github.com/zeroclaw-labs/zeroclaw/pull/9547) | **Deps** | Upgrade CPAL 0.15.3 → 0.18.1 for Voice Wake | High |
| [#10010](https://github.com/zeroclaw-labs/zeroclaw/pull/10010) | **Test Fix** | Avoid ETXTBSY race in cron custom-shell test | High |
| [#10021](https://github.com/zeroclaw-labs/zeroclaw/pull/10021) | **Runtime** | Apply target thinking to independent delegates | P2, High |
| [#10003](https://github.com/zeroclaw-labs/zeroclaw/pull/10003) | **Providers** | Exact accounting for Reliable provider rejected/accepted attempts | P2, High |
| [#7884](https://github.com/zeroclaw-labs/zeroclaw/pull/7884) | **CI** | Extract shared Clippy runner (follow-up) | High |

**Theme:** Security hardening dominates (6/15 PRs), followed by cross-platform CI maturity and provider/channel reliability.

## 4. Community Hot Topics — Most Active Issues/PRs

| Item | Comments | Core Topic | Underlying Need |
|------|----------|------------|-----------------|
| [#6808](https://github.com/zeroclaw-labs/zeroclaw/issues/6808) | 23 | Work Lanes, Board Automation, Label Cleanup | **Governance scalability** — automate triage/routing to reduce maintainer toil |
| [#8603](https://github.com/zeroclaw-labs/zeroclaw/issues/8603) | 23 | Chat Completions Profile (OpenAI-compatible API) | **Ecosystem integration** — support Open WebUI, LobeChat, Continue.dev, Aider, LangChain, OpenAI SDK |
| [#8303](https://github.com/zeroclaw-labs/zeroclaw/issues/8303) | 22 | Goal Mode v1 — bounded foreground Matrix work | **Agent durability** — multi-turn objective pursuit with clean handoff semantics |
| [#7155](https://github.com/zeroclaw-labs/zeroclaw/issues/7155) | 20 | Per-execution confirmation for high-risk shell commands | **Operator safety** — Claude Code-style allow/ask/deny policy for shell |
| [#9487](https://github.com/zeroclaw-labs/zeroclaw/issues/9487) | 19 | Runtime-owned conversation sessions + transport adapters | **Architecture unification** — single session model across WebSocket, ACP, webhooks, ACP |
| [#9488](https://github.com/zeroclaw-labs/zeroclaw/issues/9488) | 18 | Unified attachment architecture for web chat & channels | **Consistent UX** — same attachment handling across all surfaces |
| [#7141](https://github.com/zeroclaw-labs/zeroclaw/issues/7141) | 16 | Pluggable inbound auth & canonical principals (Rev 8) | **Identity foundation** — OIDC, SSO, principal normalization for v0.9.0 |
| [#6954](https://github.com/zeroclaw-labs/zeroclaw/issues/6954) | 15 | Provenance & reply contract for internally initiated turns | **Auditability** — traceability for cron/background agent actions |
| [#6971](https://github.com/zeroclaw-labs/zeroclaw/issues/6971) | 15 | Security posture, credential boundaries, universal ingress policy | **Security consolidation** — single inspectable policy surface |
| [#6165](https://github.com/zeroclaw-labs/zeroclaw/issues/6165) | 15 | Lighter core via external integrations (MCP, etc.) | **Core reduction** — move long-tail integrations out of default build |

**Pattern:** The top discussions are **architectural RFCs**, not bug reports. Contributors and maintainers are designing v0.9.0's security, gateway, and agent-runtime contracts. High comment counts reflect **design contention** and **cross-cutting impact**.

## 5. Bugs & Stability — Reported Today (Ranked by Severity)

| Issue | Severity | Component | Fix PR? | Status |
|-------|----------|-----------|---------|--------|
| [#10023](https://github.com/zeroclaw-labs/zeroclaw/issues/10023) | P2 (Medium) | Provider fallback logging | ❌ | Open — logs requested model, not pinned fallback |
| [#9594](https://github.com/zeroclaw-labs/zeroclaw/issues/9594) | S2 (Degraded) | Coding-agent tools double-charge action budget | ✅ [#9996](https://github.com/zeroclaw-labs/zeroclaw/pull/9996) | **Closed** — atomic accounting merged |
| [#9849](https://github.com/zeroclaw-labs/zeroclaw/issues/9849) | S2 (Degraded) | RateLimitedTool non-atomic check-then-record | ✅ [#9996](https://github.com/zeroclaw-labs/zeroclaw/pull/9996) | **Closed** — same fix as #9594 |
| [#10011](https://github.com/zeroclaw-labs/zeroclaw/issues/10011) | High (Test) | Daemon heartbeat test writes+executes runtime binary | ❌ | Open — task to replace with symlink to `sh` |
| [#9314](https://github.com/zeroclaw-labs/zeroclaw/pull/9314) | P1 (High) | Telegram long-poll offset advanced before delivery | ✅ [#9314](https://github.com/zeroclaw-labs/zeroclaw/pull/9314) | **Closed** — offset moved after delivery/permanent skip |

**Stability signal:** Two S2 budget-accounting bugs fixed in same PR (#9996). Telegram message-loss bug fixed. One new provider logging bug (#10023) and one test flakiness task (#10011) remain open.

## 6. Feature Requests & Roadmap Signals

| Signal | Source | Likelihood for v0.9.0 |
|--------|--------|----------------------|
| **OpenAI Chat Completions API** | [#8603](https://github.com/zeroclaw-labs/zeroclaw/issues/8603) (23 comments, accepted) | **High** — broad ecosystem demand, multiple client targets |
| **Goal Mode v1 (bounded multi-turn)** | [#8303](https://github.com/zeroclaw-labs/zeroclaw/issues/8303) (22 comments, accepted) | **High** — core agent durability, narrowed scope per Rev 2 |
| **Shell confirm-tier (allow/ask/deny)** | [#7155](https://github.com/zeroclaw-labs/zeroclaw/issues/7155) (20 comments, accepted) | **High** — security-critical, P1, Claude Code parity |
| **Runtime-owned sessions + transport adapters** | [#9487](https://github.com/zeroclaw-labs/zeroclaw/issues/9487) (19 comments) | **Medium-High** — architectural prerequisite for unified gateway |
| **Unified attachment architecture** | [#9488](https://github.com/zeroclaw-labs/zeroclaw/issues/9488) (18 comments) | **Medium** — couples with #9487 |
| **Pluggable auth / canonical principals** | [#7141](https://github.com/zeroclaw-labs/zeroclaw/issues/7141) (16 comments, Rev 8) | **High** — v0.9.0 Identity & Access milestone |
| **Security decision pipeline + restrictive overlays** | [#7142](https://github.com/zeroclaw-labs/zeroclaw/issues/7142) (11 comments, Rev 6) | **High** — v0.9.0 security architecture |
| **Staged opt-in telemetry** | [#9621](https://github.com/zeroclaw-labs/zeroclaw/issues/9621) (7 comments, accepted) | **Medium** — operator-reviewed, privacy-first |
| **Agent export portable bundle** | [#9986](https://github.com/zeroclaw-labs/zeroclaw/pull/9986) (open PR) | **Medium** — CLI feature, not RFC-gated |
| **Whitelist empty `allowed_groups` = permit-none (WhatsApp)** | [#9397](https://github.com/zeroclaw-labs/zeroclaw/issues/9397) (12 comments, in-progress) | **High** — security default fix, P1 |

**Prediction:** v0.9.0 will ship **Auth/Z security overhaul** (#7141, #7142, #6971), **Chat Completions gateway** (#8603), **Goal Mode** (#8303), and **Shell confirm-tier** (#7155). Transport/session unification (#9487/#9488) may slip to v0.9.1.

## 7. User Feedback Summary

| Pain Point | Evidence | Frequency |
|------------|----------|-----------|
| **No OpenAI-compatible API** — blocks Open WebUI, LobeChat, Continue.dev, Aider, LangChain, OpenAI SDK users | [#8603](https://github.com/zeroclaw-labs/zeroclaw/issues/8603) summary lists 7+ clients | High — explicit client enumeration |
| **Shell command safety** — operators want per-execution confirm, not blanket allow/deny | [#7155](https://github.com/zeroclaw-labs/zeroclaw/issues/7155) Rev 3 scope confirmed by maintainer | High — P1, 20 comments |
| **Agent sessions don't persist across turns** — need durable goal pursuit | [#8303](https://github.com/zeroclaw-labs/zeroclaw/issues/8303) "bounded foreground Matrix work" | Medium — 22 comments |
| **Attachment handling inconsistent** across web, WhatsApp, Telegram, Email | [#9488](https://github.com/zeroclaw-labs/zeroclaw/issues/9488) + fixes in #9993, #10000, #9612 | Medium — 18 comments + 3 security fixes |
| **Telegram message loss** on transient download/transcription failure | [#9314](https://github.com/zeroclaw-labs/zeroclaw/pull/9314) "lost the update permanently" | Low (fixed) — but high impact for affected users |
| **Provider fallback logging confusion** — shows requested model, not actual served model | [#10023](https://github.com/zeroclaw-labs/zeroclaw/issues/10023) "gemini fallback pinned to gemini-3-flash shows requested" | Low — new, P2 |
| **RFC process too slow** — 7-day minimum, unanimity, manual votes | [#9496](https://github.com/zeroclaw-labs/zeroclaw/issues/9496) "slower and more cumbersome" | Meta — maintainer pain, 9 comments |

**Satisfaction signals:** Security fixes merged rapidly (same-day for #9996, #9973, #10000). Dissatisfaction centers on **missing ecosystem API** and **governance velocity**.

## 8. Backlog Watch — Stalled/Needing Maintainer Attention

| Item | Age | Blockers | Why It Matters |
|------|-----|----------|----------------|
| [#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) Maintainer decision queue | 45 days (2026-07-04) | 13 RFCs awaiting rulings | **Governance bottleneck** — tracks all accept/reject/defer decisions |
| [#7141](https://github.com/zeroclaw-labs/zeroclaw/issues/7141) Pluggable auth (Rev 8) | 76 days | In-progress, needs final review | **v0.9.0 gate** — identity foundation for all security work |
| [#6971](https://github.com/zeroclaw-labs/zeroclaw/issues/6971) Security posture consolidation | 83 days | Accepted, no implementation tracker | **Cross-cutting** — credentials, ingress, sandboxing, tool approval |
| [#9346](https://github.com/zeroclaw-labs/zeroclaw/issues/9346) Unified package/capability catalog | 25 days | Accepted, depends on #8908/#8909 | **Plugin/

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/DenisZheng/agents-radar).*