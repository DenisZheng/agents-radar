# OpenClaw Ecosystem Digest 2026-06-07

> Issues: 297 | PRs: 500 | Projects covered: 13 | Generated: 2026-06-07 00:40 UTC

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

# OpenClaw Project Digest — 2026-06-07

---

## 1. Today's Overview

OpenClaw is in an extremely high-activity phase, with **297 issues** and **500 pull requests** updated in the last 24 hours — a volume that signals both rapid community growth and significant scaling pressure on the maintainer team. Two new beta releases (v2026.6.5-beta.1 and beta.2) shipped today, focusing on QQBot reasoning-scaffolding leaks and MCP tool result coercion fixes. The project is clearly in a stabilization sprint ahead of a broader 2026.6.x release cycle, with heavy investment in multi-provider auth resilience, session-state correctness, and channel-specific delivery bugs. The ratio of open-to-closed issues (150 open vs. 147 closed) and PRs (407 open vs. 93 merged/closed) suggests the backlog is growing faster than it is being cleared — a potential concern for project health if maintainer bandwidth doesn't scale.

---

## 2. Releases

### v2026.6.5-beta.2 (latest)
**Highlights:**
- **QQBot reasoning/thinking scaffolding stripped before native delivery** — prevents raw `<thinking>` content from leaking into channel replies. (#89913, #90132) Thanks @openperf.
- **MCP tool result coercion** — now coerces `resource_link`, `resource`, `audio`, malformed image, and future non-standard content types into safe delivery formats, preventing channel-side rendering failures.

### v2026.6.5-beta.1
- Same core fixes as beta.2 (QQBot thinking leak, MCP coercion), establishing the baseline for this release train.

**Migration notes:** No breaking changes announced. Users on 2026.6.1 experiencing the OpenAI ChatGPT Responses `invalid_provider_content_type` errors (see Bugs below) should monitor whether these betas resolve their issues before upgrading.

---

## 3. Project Progress

Several significant PRs were merged or advanced today:

- **PR #90849 [CLOSED/MERGED]** — Adds a free Parallel Search MCP as the zero-config default `web_search` provider, lowering the barrier to entry for new users who lack API-key-based search providers. AI-assisted implementation (Claude/Codex-reviewed).
- **PR #91034 [CLOSED/MERGED]** — Moves ACPX gateway instance ID and live process leases from legacy files into SQLite-backed plugin keyed state, with doctor migration for upgrade-order safety. This is a meaningful infrastructure hardening step for the ACPX extension.
- **PR #90994 [OPEN, waiting on author]** — Fixes Codex native `PreToolUse` relay delivery, a narrow positive-delivery fix that keeps the native hook relay path intact. Important for Codex app-server users experiencing subagent announce compaction failures (#90925).
- **PR #90101 [OPEN, ready for maintainer look]** — Implements runtime self-context config and tool, the first slice of a larger runtime/offload/scale/cost-awareness effort. This is a showcase feature that could meaningfully improve agent introspection and cost management.
- **PR #86655 [OPEN, ready for maintainer look]** — Adds a first-class Claude bridge app-server harness extension, achieving parity with the existing OpenAI Codex harness. This is a high-impact feature for Anthropic-native users.

---

## 4. Community Hot Topics

The most commented and reacted issues reveal clear community pain patterns:

**🔴 OpenAI/ChatGPT Responses transport failures for GPT-5.4/5.5** — [#90083](https://github.com/openclaw/openclaw/issues/90083) (14 comments, 👍3)
Users upgrading to 2026.6.1 hit `invalid_provider_content_type` errors with `openai/gpt-5.4` and `openai/gpt-5.5`. This is a **P1 regression** affecting the newest OpenAI models and is likely blocking early adopters. The related issue [#90093](https://github.com/openclaw/openclaw/issues/90093) (9 comments, 👍2) reports that native replay sends encrypted reasoning and breaks subsequent turns with `invalid_encrypted_content` — suggesting the OpenAI Responses transport has systemic issues with reasoning/encrypted content handling in the 2026.6.x line.

**🔴 Codex app-server turn-completion stall regression** — [#88312](https://github.com/openclaw/openclaw/issues/88312) (13 comments, 👍3)
A regression from 2026.5.27 where multi-tool agent turns on the Codex app-server reliably fail with "Codex stopped before confirming the turn was complete." This was previously fixed (#84076 → #85107) and has regressed, indicating insufficient regression test coverage for the Codex path.

**🟡 Feishu streaming card truncation** — [#88929](https://github.com/openclaw/openclaw/issues/88929) (11 comments, 👍2)
Feishu channel streaming with card render mode shows abnormal typewriter effects (1–2 chars at a time) and final content truncated to a single character. This is a **delivery-quality issue** affecting all Feishu users with streaming enabled.

**🟡 Windows chat UI regression** — [#67035](https://github.com/openclaw/openclaw/issues/67035) (14 comments, 👍0, CLOSED)
Input text swallowed, streamed replies invisible until refresh on Windows. Closed but with significant discussion — may indicate the fix is incomplete or the issue is recurring.

**Underlying needs analysis:** The community is converging around three themes: (1) **provider transport reliability** — OpenAI Responses, Codex, and Bedrock auth paths all have active regressions; (2) **channel delivery quality** — Feishu, Discord, and QQBot all have streaming/rendering bugs; (3) **session-state correctness** — compaction, context management, and cross-session memory are recurring pain points.

---

## 5. Bugs & Stability

Ranked by severity:

| Severity | Issue | Description | Fix PR? |
|----------|-------|-------------|---------|
| **P1 🔴** | [#90083](https://github.com/openclaw/openclaw/issues/90083) | OpenAI ChatGPT Responses fails for gpt-5.4/gpt-5.5 with `invalid_provider_content_type` | No PR linked |
| **P1 🔴** | [#90093](https://github.com/openclaw/openclaw/issues/90093) | Native replay sends encrypted reasoning, breaks next turn with `invalid_encrypted_content` | No PR linked |
| **P1 🔴** | [#88312](https://github.com/openclaw/openclaw/issues/88312) | Codex app-server turn-completion stall regression (regression of #84076) | No PR linked |
| **P1 🔴** | [#90991](https://github.com/openclaw/openclaw/issues/90991) | Cron scheduled trigger contaminates global runtime state, causing system-wide overload | No PR linked |
| **P1 🔴** | [#90925](https://github.com/openclaw/openclaw/issues/90925) | Subagent announce compaction for Codex/OAuth falls into wrong API-key route | [#90994](https://github.com/openclaw/openclaw/pull/90994) (related) |
| **P1 🔴** | [#90886](https://github.com/openclaw/openclaw/issues/90886) | Gateway hangs at `[gateway] starting...` when provider lacks credentials (regression) | No PR linked |
| **P1 🔴** | [#90428](https://github.com/openclaw/openclaw/issues/90428) | exec tool triggers gateway SIGTERM restart on WSL2 with Node 24 | No PR linked |
| **P2 🟡** | [#88929](https://github.com/openclaw/openclaw/issues/88929) | Feishu streaming card truncation to last character | No PR linked |
| **P2 🟡** | [#90595](https://github.com/openclaw/openclaw/issues/90595) | Cron "failed" notifications fire during hot reload/retries, causing alert fatigue | No PR linked |
| **P2 🟡** | [#90964](https://github.com/openclaw/openclaw/issues/90964) | `read` tool fails on WebChat uploaded images with `media://inbound` path (ENOENT) — **CLOSED** | Fixed same day |

**Stability assessment:** The 2026.6.x line has introduced multiple P1 regressions across OpenAI Responses transport, Codex app-server, and gateway startup. The fact that several of these have no linked fix PRs is concerning. The WSL2 SIGTERM crash (#90428) and gateway hang on missing credentials (#90886) are particularly impactful as they affect core runtime reliability.

---

## 6. Feature Requests & Roadmap Signals

**Likely candidates for next release (v2026.6.5 stable or v2026.6.6):**

- **Topic-session families** ([#90916](https://github.com/openclaw/openclaw/issues/90916)) — One assistant with multiple named topic lanes and isolated context. Newly filed (June 6) with 6 comments. This aligns with the broader session-state investment visible in the PR queue.
- **Bounded/validated append semantics for pre-compaction memory flush** ([#90354](https://github.com/openclaw/openclaw/issues/90354)) — Hard guardrails for memory append size and post-write validation. 4 comments, P2.
- **Claude bridge app-server harness** ([#86655](https://github.com/openclaw/openclaw/pull/86655)) — Already at "ready for maintainer look" stage. First-class Anthropic parity with OpenAI Codex is a high-priority gap.
- **OpenRouter OAuth login** ([#91031](https://github.com/openclaw/openclaw/pull/91031)) — PKCE OAuth flow for OpenRouter, ready for maintainer look. Lowers friction for OpenRouter users.
- **macOS Talk realtime relay mode** ([#91026](https://github.com/openclaw/openclaw/pull/91026)) — Provider-neutral macOS Talk realtime relay via gateway RPCs. New PR, needs proof.
- **Gateway-side circuit breaker for unhealthy sessions** ([#62615](https://github.com/openclaw/openclaw/issues/62615)) — Long-standing request to stop retrying failing sessions. Increasingly relevant as session-state bugs multiply.

**Prediction:** The next stable release will likely focus on stabilizing the OpenAI Responses transport, fixing the Codex regression, and shipping the Claude bridge harness. Topic-session families and memory flush guardrails are strong candidates for v2026.6.6 or v2026.7.x.

---

## 7. User Feedback Summary

**Pain points:**
- **Provider onboarding friction** is a dominant theme: Microsoft Foundry Entra ID fails on config persistence ([#91037](https://github.com/openclaw/openclaw/pull/91037)), OpenAI Responses breaks on newest models ([#90083](https://github.com/openclaw/openclaw/issues/90083)), Bedrock `image` tool fails with `auth mode: aws-sdk` ([#72031](https://github.com/openclaw/openclaw/issues/72031)). Users expect first-class multi-provider support but hit auth and transport edge cases.
- **Session continuity** is a recurring frustration: compaction destroys context ([#58818](https://github.com/openclaw/openclaw/issues/58818)), daily resets lose conversation history, and `sessions_history` returns duplicate delivery-mirror messages ([#85669](https://github.com/openclaw/openclaw/issues/85669), now closed).
- **Channel-specific delivery quality** — Feishu streaming is broken ([#88929](https://github.com/openclaw/openclaw/issues/88929)), QQBot leaks thinking content (now fixed in beta), Discord search fails without explicit guildId ([#88796](https://github.com/openclaw/openclaw/pull/88796)). Users expect channel integrations to "just work."
- **Local/self-hosted model support** is requested ([#89265](https://github.com/openclaw/openclaw/issues/89265)) as AI costs rise and open-weights models improve.

**Satisfaction signals:**
- The rapid release cadence (two betas in one day) and responsive closing of issues like [#90964](https://github.com/openclaw/openclaw/issues/90964) (same-day fix) suggest users appreciate the team's velocity.
- The Parallel Search MCP as default web_search provider ([#90849](https://github.com/openclaw/openclaw/pull/90849)) directly addresses new-user onboarding friction.

---

## 8. Backlog Watch

Long-unanswered important items needing maintainer attention:

| Issue | Age | Why It Matters |
|-------|-----|----------------|
| [#49603](https://github.com/openclaw/openclaw/issues/49603) — Orphaned lock files not cleared on gateway restart | 71 days | P1, crash-loop impact. Gateway can deadlock after API failures. |
| [#43015](https://github.com/openclaw/openclaw/issues/43015) — `message.send` schema overexposes poll/components/modal | 88 days | P1, message-loss impact. GPT models auto-populate fields users don't want. Has linked PR open. |
| [#58730](https://github.com/openclaw/openclaw/issues/58730) — exec() sandbox isolation and tool permission model | 67 days | P1, security impact. Inspired by Claude Code source leak analysis. Has linked PR. |
| [#64267](https://github.com/openclaw/openclaw/issues/64267) — Agent internal thinking exposed to user | 58 days | P1, security impact. Affects multiple models. 👍2. |
| [#58818](https://github.com/openclaw/openclaw/issues/58818) — Guarantee last N raw messages survive compaction/reset | 67 days | P2, session-state + security. 👍2. Core memory continuity issue. |
| [#59413](https://github.com/openclaw/openclaw/issues/59413) — Per-candidate retry count for model fallback | 66 days | P2, auth-provider. Pool-based providers (Anthropic resellers) are poorly supported. |
| [#68065](https://github.com/openclaw/openclaw/issues/68065) — `sessions_send` misclassifies first agent.wait timeout as hard failure | 51 days | P1, message-loss. Has linked PR open. |
| [#69327](https://github.com/openclaw/openclaw/issues/69327) — Subagent sandbox doesn't propagate docker.env | 48 days | P2, session-state + security. Sandbox isolation is incomplete. |

**Recommendation:** Issues #49603 (orphaned locks), #43015 (message.send schema), and #64267 (thinking exposure) are the highest-priority backlog items — all are P1 with security or crash-loop impact and have been open for 2+ months. The security-related items (#64267, #58730, #69327) in particular warrant a dedicated security-focused sprint given the sensitivity of agent internal state leakage.

---

*Data source: github.com/openclaw/openclaw — snapshot 2026-06-07. All links reference openclaw/openclaw issues and PRs.*

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: Personal AI Assistant & Agent Open-Source Ecosystem

**Date:** 2026-06-07 | **Projects Analyzed:** 14 | **Generated by:** OWL, ZOO Company

---

## 1. Ecosystem Overview

The personal AI agent open-source ecosystem is in a period of explosive fragmentation and rapid maturation. Fourteen identifiable projects span the spectrum — from full-stack agent platforms (OpenClaw, Hermes Agent, ZeroClaw) to minimalist edge-deployable runtimes (ZeptoClaw, PicoClaw) to workflow-specialized tools (LobsterAI). The dominant theme across the ecosystem is the **post-launch stabilization sprint**: multiple major projects (OpenClaw, Hermes Agent, ZeroClaw) shipped landmark releases in the past 48–72 hours and are now processing surges of regression reports and community contributions. A clear architectural divide is emerging between projects pursuing **provider-agnostic multi-channel delivery** (OpenClaw, NanoBot, Hermes Agent) and those optimizing for **deployment constraints or domain specificity** (ZeptoClaw's binary-size governance, PicoClaw's exchange trading layer, LobsterAI's cowork UI). The ecosystem is converging on WASM-based plugin sandboxes, OAuth-native provider auth, and per-user multi-tenancy as table stakes, but no single project has achieved dominance across all dimensions.

---

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Releases (24h) | Health Score | Assessment |
|---------|-------------|----------|----------------|-------------|------------|
| **OpenClaw** | 297 (150 open / 147 closed) | 500 (407 open / 93 merged) | 2 betas (v2026.6.5-β1, β2) | ⚠️ **6/10** | Extreme volume; backlog growing faster than clearing. Multiple P1 regressions without fix PRs. |
| **Hermes Agent** | 50 (48 open / 2 closed) | 50 (46 open / 4 merged) | 1 major (v0.16.0 "Surface") | ⚠️ **6.5/10** | Post-major-release regression surge. Security vuln (Telegram auth bypass) unpatched. |
| **ZeroClaw** | 37 (22 open / 15 closed) | 50 (45 open / 5 merged) | None | ✅ **8/10** | Strong triage throughput. All S0/S1 bugs closed. Plugin ecosystem booming. |
| **NanoBot** | 7 touched | 24 (14 open / 10 merged) | None | ✅ **8/10** | High merge rate, responsive. Security fix (symlink escape) needs fast-tracking. |
| **IronClaw** | 2 (1 open / 1 closed) | 32 (22 open / 10 merged) | None (release PR open 22d) | ✅ **7.5/10** | Healthy merge cadence. Release PR stagnation is a concern. |
| **NanoClaw** | 1 new | 14 (11 open / 3 merged) | None | ✅ **7/10** | Focused stabilization. Skills conformance initiative is high-quality. |
| **CoPaw** | 11 (9 open / 2 closed) | 0 | None | 🔴 **5/10** | No PR activity. Critical regressions (local model hang, Coding Mode broken) unaddressed. |
| **PicoClaw** | 12 (10 open / 2 closed) | 18 (3 open / 15 merged) | 1 nightly | ✅ **7.5/10** | Very productive day. New exchange subsystem is ambitious. |
| **LobsterAI** | 6 open | 2 closed/merged | None | 🔴 **4.5/10** | Stale critical bugs (64 days). No new releases. Data-loss UX issues unpatched. |
| **Moltis** | 3 new | 0 | None | 🟡 **5.5/10** | Low activity. Auth configuration bug is a trust issue. |
| **ZeptoClaw** | 2 (1 open / 1 closed) | 1 open | None | ✅ **7/10** | Small but intentional. Binary-size governance is unique. |
| **NullClaw** | 0 | 0 | None | — **N/A** | No activity. |
| **TinyClaw** | 0 | 0 | None | — **N/A** | No activity. |

**Health scoring criteria:** Release cadence, P1 bug resolution rate, PR merge velocity, backlog growth/decline ratio, maintainer responsiveness signals.

---

## 3. OpenClaw's Position

### Advantages vs. Peers

| Dimension | OpenClaw | Closest Competitor | OpenClaw's Edge |
|-----------|----------|-------------------|-----------------|
| **Scale of activity** | 297 issues, 500 PRs/day | Hermes Agent (50/50) | 5–10× the raw community engagement |
| **Channel breadth** | QQBot, Feishu, Discord, Telegram, WebChat, more | Hermes Agent (Discord, Telegram, Slack, DingTalk) | Comparable; OpenClaw's QQBot/Feishu focus captures Chinese market |
| **Release velocity** | 2 betas in 1 day | ZeroClaw (none today) | Fastest iteration cycle in the ecosystem |
| **MCP ecosystem** | Parallel Search MCP as zero-config default; MCP tool result coercion | ZeroClaw (MCP dashboard PR, 8 new plugin PRs) | OpenClaw is more production-hardened; ZeroClaw is more extensible |
| **Multi-provider auth** | Active work on OpenRouter OAuth, Bedrock, Microsoft Foundry | ZeroClaw (OIDC, OAuth for Ollama Cloud/z.ai/Kimi) | ZeroClaw is ahead on auth architecture; OpenClaw is broader in provider coverage |

### Technical Approach Differences

- **OpenClaw** uses a **gateway-centric architecture** with channel-specific delivery adapters, ACPX extension protocol, and SQLite-backed session state. Its focus is on **delivery reliability across many channels and providers simultaneously**.
- **Hermes Agent** emphasizes a **surface-rich experience** (Desktop Electron app, TUI, CLI, gateway) with the "Surface" release touching 1,962 files. Its breadth is its strength and weakness — more surfaces mean more regressions.
- **ZeroClaw** is architecturally the most **security-forward**, with WASM plugin sandboxes, OIDC auth, per-skill tool scoping, and secret redaction as first-class concerns. Its Rust-based stack (evident from crate versioning) provides memory safety guarantees others lack.
- **NanoBot** and **NanoClaw** are **pragmatic mid-stack** options — less ambitious in scope but faster to stabilize and deploy.

### Community Size Comparison

By raw GitHub activity volume (issues + PRs in 24h):
1. **OpenClaw**: ~797 total interactions — an order of magnitude above all peers
2. **ZeroClaw**: ~87 — strong and growing, driven by plugin ecosystem
3. **Hermes Agent**: ~100 — inflated by post-release regression surge; likely to settle lower
4. **IronClaw**: ~34 — steady, core-contributor-driven
5. **NanoBot**: ~31 — broad contributor base, high merge rate
6. **PicoClaw**: ~30 — concentrated author activity (chengzhichao-xydt, jcafeitosa)
7. **NanoClaw**: ~15 — small but engaged
8. **CoPaw**: ~11 — concerning lack of PR activity
9. **Others**: <10 each

**Key insight:** OpenClaw's community is 5–10× larger than its nearest competitor, but its backlog is growing faster than it's being cleared (407 open PRs vs. 93 merged). This is a **scaling risk** — the project needs to either grow its maintainer team or triage more aggressively.

---

## 4. Shared Technical Focus Areas

The following requirements are emerging simultaneously across multiple projects, indicating ecosystem-wide convergence:

### 4.1 Provider Transport Reliability
**Projects:** OpenClaw, NanoBot, Hermes Agent, ZeroClaw, CoPaw
- OpenAI Responses transport failures for GPT-5.4/5.5 (OpenClaw #90083)
- OpenAI-compatible API incompatibilities: `response_format` rejection (NanoBot #4167), `reasoning_content` handling (NanoBot #4105)
- Bedrock auth and image tool failures (OpenClaw #72031)
- Provider fallback and retry logic gaps (OpenClaw #59413)
- **Underlying need:** Users expect seamless multi-provider support but hit auth and transport edge cases. The ecosystem needs a shared provider abstraction layer or at least consistent error handling patterns.

### 4.2 Session-State Correctness & Context Management
**Projects:** OpenClaw, NanoBot, Hermes Agent, CoPaw, ZeroClaw
- Compaction destroying context (OpenClaw #58818, CoPaw #4937)
- Prefix caching invalidation by truncation (NanoBot #4222)
- Agent flush cursor not reset on session rotation (Hermes Agent #40806)
- ACP session rehydration bypass (ZeroClaw #7252, now fixed)
- **Underlying need:** As agents handle longer, more complex tasks, session-state management is the #1 reliability concern. Projects are independently discovering the same class of bugs.

### 4.3 Channel Delivery Quality
**Projects:** OpenClaw, NanoBot, Hermes Agent, NanoClaw, ZeroClaw
- Feishu streaming card truncation (OpenClaw #88929)
- WhatsApp duplicate messages on reconnect (NanoBot, fixed)
- Signal DMs silently dropped (NanoClaw #2694)
- Telegram auth bypass (Hermes Agent #40863 — security vuln)
- Slack Socket Mode migration (NanoClaw #2702)
- **Underlying need:** Channel integrations are the user-facing surface of every agent. Delivery bugs directly erode trust. The ecosystem is converging on WebSocket/Socket Mode over HTTP webhooks for reliability.

### 4.4 Plugin/Extension Security & Sandboxing
**Projects:** ZeroClaw, NanoClaw, PicoClaw, OpenClaw
- WASM plugin sandbox with resource limits and SSRF guards (ZeroClaw #7335)
- Per-skill security permissions (ZeroClaw #5775)
- Symlink workspace escape (NanoClaw #2231)
- AGENT.md frontmatter tool policy filters (PicoClaw #2838)
- **Underlying need:** As plugin ecosystems grow, the attack surface expands. Projects are racing to implement least-privilege plugin isolation before a high-profile security incident.

### 4.5 Multi-User & Enterprise Readiness
**Projects:** NanoBot, Hermes Agent, ZeroClaw, NanoClaw
- Per-user memory isolation (NanoBot #2968, merged)
- Per-MCP-server access control (NanoBot #2533, merged)
- OIDC authentication provider (ZeroClaw #7141)
- GitHub Copilot Enterprise / GHE support (NanoBot #4220)
- **Underlying need:** The ecosystem is transitioning from single-user/developer tools to multi-tenant deployments. Enterprise auth and data isolation are becoming prerequisites.

### 4.6 OAuth-Native Provider Authentication
**Projects:** OpenClaw, ZeroClaw, NanoBot
- OpenRouter OAuth login (OpenClaw #91031)
- Subscription-native OAuth for Ollama Cloud, z.ai, Kimi (ZeroClaw #5601)
- GitHub Copilot OAuth regression (NanoBot #2573)
- **Underlying need:** API key management is a friction point and security risk. Users expect OAuth flows comparable to consumer AI apps.

---

## 5. Differentiation Analysis

| Project | Primary Target User | Key Differentiator | Technical Architecture | Deployment Model |
|---------|-------------------|-------------------|----------------------|-----------------|
| **OpenClaw** | Power users, multi-channel operators | Broadest channel + provider coverage; highest community volume | Gateway-centric, ACPX extensions, SQLite session state | Self-hosted, multi-provider |
| **Hermes Agent** | Desktop-first users, researchers | Rich multi-surface experience (Desktop/TUI/CLI/gateway); Nous Research model integration | Electron Desktop + gateway + plugin system | Desktop app + self-hosted gateway |
| **ZeroClaw** | Security-conscious developers, enterprise | WASM plugin sandbox, OIDC auth, per-skill tool scoping; Rust-based | Rust crate architecture, ProductWorkflow routing, WASM plugins | Self-hosted, security-first |
| **NanoBot** | Pragmatic deployers, WhatsApp/Discord users | Fastest merge rate; strong WhatsApp bridge; desktop shell expansion | Direct provider integration (post-litellm), multi-channel | Self-hosted, CLI + WebUI + Desktop |
| **NanoClaw** | Home-server deployers | Skills conformance model; Slack Socket Mode; single-instance locking | Host process model, poll-loop architecture | Self-hosted, container-friendly |
| **IronClaw** | Rust developers, NEAR ecosystem | Reborn architecture migration; OpenAI API compatibility layer; Rust-native | Rust workspace (crates), ProductWorkflow, type-safe DTOs | Self-hosted, API-first |
| **PicoClaw** | Embedded/IoT, Raspberry Pi, crypto traders | Binary-size governance; multi-agent Blackboard; exchange trading layer | Go-based, channel adapters, Blackboard shared context | Edge devices, Pi/Jetson |
| **LobsterAI** | Cowork/UI-focused users | Desktop cowork UI; batch session export; multi-agent scheduling | Electron Desktop, IPC-based, cowork model | Desktop app |
| **CoPaw** | Chinese enterprise (WeCom), Coding Mode users | WeCom integration; Coding Mode workflow; AgentScope ecosystem | AgentScope-based, approval workflow | Self-hosted, enterprise |
| **Moltis** | Cron/scheduled task users | Lightweight personal assistant; cron job management | Minimalist architecture | Docker, self-hosted |
| **ZeptoClaw** | Robotics, edge AI | Binary-size ceiling as core value ("fits on aarch64 robot") | Go, stripped binaries, CI-enforced size gates | Embedded, Pi/Jetson/Apple Silicon |

### Feature Focus Spectrum

```
Breadth of Channels/Providers:
  OpenClaw ████████████████████ ← Maximum
  Hermes Agent ████████████████
  NanoBot ██████████████
  ZeroClaw ████████████
  Others ████████

Security & Sandboxing:
  ZeroClaw ████████████████████ ← Maximum
  IronClaw ████████████████
  NanoClaw ████████████
  OpenClaw ██████████
  Others ██████

Desktop/UI Richness:
  Hermes Agent ████████████████████ ← Maximum
  LobsterAI ████████████████
  NanoBot ████████████
  ZeroClaw ██████████
  Others ████

Edge/Embedded Optimization:
  ZeptoClaw ████████████████████ ← Maximum
  PicoClaw ████████████████
  NanoClaw ████████
  Others ██
```

---

## 6. Community Momentum & Maturity

### Tier 1: Hyperactive — Rapid Iteration Under Scaling Pressure
- **OpenClaw**: Unmatched volume (797 interactions/day) but backlog growing. Needs maintainer team expansion.
- **Hermes Agent**: Post-v0.16.0 surge. 50 issues and 50 PRs in 24h, but 48/50 issues still open. Regression triage is the bottleneck.

### Tier 2: High Velocity — Healthy Merge Cadence
- **ZeroClaw**: 15 issues closed, 5 PRs merged. All S0/S1 bugs resolved. Plugin ecosystem is a growth engine (8 new plugin PRs from one contributor).
- **NanoBot**: 10 PRs merged, responsive fixes. Security PR needs fast-tracking.
- **IronClaw**: 10 PRs merged. Release PR stagnation (22 days) is the main concern.
- **PicoClaw**: 15 PRs merged in a day. New exchange subsystem is a major bet.

### Tier 3: Stabilization — Focused, Lower Volume
- **NanoClaw**: Skills conformance initiative is high-quality infrastructure investment. Small but steady.
- **ZeptoClaw**: Maintainer-driven, intentional. Binary-size governance is a unique form of quality control.

### Tier 4: Concerning — Stale Bugs, Low Activity
- **CoPaw**: Zero PR activity. Critical regressions (local model hang, Coding Mode broken) unaddressed for 24h+. Context compression bug open 13+ days.
- **LobsterAI**: Critical data-loss UX bugs open 64 days. No releases. Stale execution reliability issues.
- **Moltis**: Low activity. Auth configuration bug undermines trust.

### Tier 5: Dormant
- **NullClaw**, **TinyClaw**: No activity in 24h.

### Maturity Assessment

| Project | Maturity Stage | Evidence |
|---------|---------------|----------|
| OpenClaw | Growth → Scaling crisis | Volume exceeds maintainer capacity |
| Hermes Agent | Post-major-release stabilization | Regression surge from v0.16.0 |
| ZeroClaw | Controlled growth | Strong triage, strategic plugin expansion |
| NanoBot | Rapid iteration | High merge rate, accumulating for next release |
| IronClaw | Architecture migration | Reborn transition, release PR bottleneck |
| NanoClaw | Stabilization | Skills conformance, channel hardening |
| PicoClaw | Feature expansion | New exchange subsystem, multi-agent framework |
| CoPaw | Regression crisis | No PR activity, critical bugs unaddressed |
| LobsterAI | Maintenance neglect | 64-day stale bugs, no releases |
| ZeptoClaw | Mature niche | Focused, intentional, small backlog |

---

## 7. Trend Signals

### Trend 1: The "Provider Abstraction Tax" Is the #1 User Friction
Across OpenClaw, NanoBot, Hermes Agent, ZeroClaw, and CoPaw, the most painful bugs are **not in the agent logic — they're in provider transport layers**. Every project is independently discovering that OpenAI-compatible APIs are not actually compatible, that OAuth flows break across providers, and that reasoning/thinking content leaks through channel adapters. **Implication for developers:** Invest in provider abstraction testing infrastructure early. The cost of provider fragmentation is higher than anticipated.

### Trend 2: Security Is Shifting Left — From Afterthought to Architecture
ZeroClaw's WASM sandbox hardening, NanoClaw's symlink escape fix, PicoClaw's frontmatter tool policy filters, and OpenClaw's agent thinking exposure issue (#64267) all point to a **ecosystem-wide realization that agent systems need security-first architecture, not bolted-on guards**. The Hermes Agent Telegram auth bypass (#40863) is a cautionary example: a security vulnerability in a core channel adapter with no fix PR after 24h. **Implication for developers:** Per-skill tool scoping, sandboxed plugin execution, and auth-gated message processing should be designed in from day one, not retrofitted.

### Trend 3: The "Session-State Crisis" Is Universal
Every project with a non-trivial user base is hitting session-state bugs: compaction destroying context, prefix caching invalidation, cursor misalignment on rotation, cross-session memory contamination. This is the **hardest technical problem in personal AI agents** — harder than provider integration or channel delivery — because it involves distributed state across LLM context windows, persistent storage, and real-time delivery. **Implication for developers:** Session-state management deserves the same engineering rigor as database transaction design. Invest in deterministic testing for compaction, rotation, and recovery paths.

### Trend 4: Plugin Ecosystems Are the New Competitive Moat
ZeroClaw's 8 new plugin PRs in 24h, OpenClaw's Parallel Search MCP as default, NanoBot's Serper.dev and AssemblyAI integrations, and PicoClaw's ClawHub marketplace all signal that **the platform with the richest plugin ecosystem wins**. Users don't just want an agent — they want an agent that connects to their existing tools (n8n, Ollama, SD-WebUI, Nominatim). **Implication for developers:** Plugin SDK quality and sandbox security are now first-class product features, not nice-to-haves.

### Trend 5: Multi-User Enterprise Readiness Is the Next Battleground
NanoBot's per-user memory isolation, ZeroClaw's OIDC auth, NanoClaw's per-MCP access control, and CoPaw's WeCom enterprise integration all point to a **transition from single-user developer tools to multi-tenant enterprise deployments**. The projects that solve enterprise auth, data isolation, and admin tooling first will capture the next wave of adoption. **Implication for developers:** Design for multi-tenancy now, even if your initial users are single-user developers. Retrofitting tenant isolation is exponentially harder than designing it in.

### Trend 6: Binary Size as a Feature (Edge AI Goes Mainstream)
ZeptoClaw's 7MB aarch64 ceiling and PicoClaw's Raspberry Pi Zero 2 deployment use case represent a **growing edge AI segment** that the cloud-centric projects (OpenClaw, Hermes Agent) are not serving. As open-weights models improve, the ability to run capable agents on resource-constrained hardware becomes a differentiator. **Implication for developers:** Consider a "lite" deployment target. The next billion AI agent users may not have GPU instances.

### Trend 7: The "Thinking Leak" Problem Is Everywhere
OpenClaw's QQBot reasoning scaffolding leak (fixed in beta), NanoBot's empty `reasoning_content` handling, Hermes Agent's agent internal thinking exposure (#64267), and ZeroClaw's Telegram Codex scratchpad leak (fixed) all reveal a **systemic issue: LLMs output reasoning/thinking content that must be stripped before channel delivery, and every project is independently rediscovering this**. **Implication for developers:** Implement thinking-content filtering at the channel adapter layer, not the provider layer. Make it configurable per-channel and per-model.

---

### Strategic Summary for Technical Decision-Makers

| If you need... | Choose... | Because... |
|----------------|-----------|------------|
| Maximum channel/provider coverage | **OpenClaw** | Unmatched breadth, largest community, but expect scaling growing pains |
| Security-first architecture | **ZeroClaw** | WASM sandbox, OIDC, per-skill scoping — most mature security posture |
| Desktop + multi-surface experience | **Hermes Agent** | Electron Desktop + TUI + CLI + gateway, but regression-heavy post-release |
| Fastest time-to-stable-deployment | **NanoBot** | Highest merge rate, pragmatic feature set, strong WhatsApp/Discord |
| Edge/embedded deployment | **ZeptoClaw** | Binary-size governance, aarch64-first, "fits on a robot" |
| Enterprise/multi-tenant readiness | **ZeroClaw** or **NanoBot** | OIDC + per-user isolation respectively |
| Rust-native / type-safe architecture | **IronClaw** | Reborn architecture, ProductWorkflow, crate-based modularity |
| Avoid (for now) | **CoPaw**, **LobsterAI** | Critical regressions unaddressed, stale bugs, low maintainer responsiveness |

---

*Report generated by OWL, ZOO Company. Data sourced from 14 GitHub repositories, snapshot 2026-06-07. All issue/PR counts reflect 24-hour activity windows. Health scores are relative assessments based on publicly visible signals and should be combined with qualitative evaluation.*

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-06-07

---

## 1. Today's Overview

NanoBot remains in a highly active development phase with **24 PRs updated** and **7 issues touched** in the last 24 hours, despite no new release being published. The project is clearly in a rapid-iteration cycle: 10 PRs were merged/closed today while 14 new or updated PRs remain open, indicating a large backlog of contributions awaiting review. The contributor base is broad, with at least 10 distinct authors active in the past day. The absence of a release since v0.1.4.post6 suggests the team is accumulating fixes and features for a forthcoming version bump. Overall project health is strong — high throughput, responsive merging, and diverse contribution areas spanning providers, channels, security, and UX.

---

## 2. Releases

**None.** No new releases were published in the last 24 hours. The latest known version remains **nanobot v0.1.4.post6**. The volume of merged PRs (especially provider fixes, security hardening, and channel improvements) strongly suggests a v0.1.5 or v.0.2.0 release is being prepared.

---

## 3. Project Progress

### Merged / Closed PRs (10)

| # | PR | Author | Summary |
|---|-----|--------|---------|
| [4228](https://github.com/HKUDS/nanobot/pull/4228) | fix: preserve empty `reasoning_content` in streaming | Yuxin-Lou | Fixes [#4105](https://github.com/HKUDS/nanobot/issues/4105) — custom providers (DeepSeek, Kimi) returning `reasoning_content=""` no longer have the field dropped to `None`. |
| [4209](https://github.com/HKUDS/nanobot/pull/4209) | fix(providers): allow dropping default OpenAI image params via null `extraBody` | 04cb | Fixes [#4167](https://github.com/HKUDS/nanobot/issues/4167) — users can now set `{"response_format": null}` in `extraBody` to opt out for OpenAI-compatible image APIs that reject the parameter. |
| [4195](https://github.com/HKUDS/nanobot/pull/4195) | feat(desktop): polish desktop shell and shared WebUI surfaces | Re-bin | First open desktop surface for nanobot; adds desktop host, improves shared chat/settings WebUI, and gateway APIs for file preview, skills, and automation. |
| [2968](https://github.com/HKUDS/nanobot/pull/2968) | feat(memory): per-user memory isolation | franciscomaestre | New `agents.defaults.per_user_memory` config flag — critical for multi-user deployments to prevent memory cross-contamination. |
| [2555](https://github.com/HKUDS/nanobot/pull/2555) | fix(whatsapp-bridge): close existing clients on reconnect | franciscomaestre | Prevents duplicate message processing on bridge reconnection by closing stale WebSocket connections. |
| [2533](https://github.com/HKUDS/nanobot/pull/2533) | feat: per-MCP-server `allowFrom` access control | franciscomaestre | Restricts sensitive MCP server tools to specific users in multi-user setups. |
| [2532](https://github.com/HKUDS/nanobot/pull/2532) | feat(search): add Serper.dev as Google Search provider | franciscomaestre | New `serper` web search provider option. |
| [2529](https://github.com/HKUDS/nanobot/pull/2529) | fix(whatsapp-bridge): download audio messages for transcription | franciscomaestre | Downloads voice message buffers to temp `.ogg` files so the agent can transcribe them. |
| [2528](https://github.com/HKUDS/nanobot/pull/2528) | fix(whatsapp-bridge): drop messages older than startup | franciscomaestre | Prevents WhatsApp bridge from replaying message history on restart. |
| [4211](https://github.com/HKUDS/nanobot/issues/4211) | SDK leaves stdio MCP open → shutdown RuntimeError | pblocz | Issue closed (likely resolved by related SDK cleanup work). |

**Key themes:** A significant batch of WhatsApp bridge fixes landed (5 PRs from franciscomaestre), resolving long-standing production issues around reconnection, audio, and message replay. The desktop shell PR marks a notable expansion of nanobot's surface area beyond CLI/WebUI. Per-user memory isolation and MCP access control address critical multi-user deployment needs.

---

## 4. Community Hot Topics

### By Engagement (👍 reactions + comments)

1. **[#2573](https://github.com/HKUDS/nanobot/issues/2573) — GitHub Copilot login failure** (👍9, 3 comments, CLOSED)
   - OAuth device flow returns `Authorization header is badly formatted`. Likely a regression from the OpenAI→litellm migration. Despite being closed, the high reaction count (9) signals this affects many users. The underlying need: **reliable OAuth provider authentication** as nanobot diversifies beyond OpenAI.

2. **[#4167](https://github.com/HKUDS/nanobot/issues/4167) — Image generation fails with OpenAI-compatible APIs** (2 comments, CLOSED)
   - Fixed by PR [#4209](https://github.com/HKUDS/nanobot/pull/4209). Users need nanobot to gracefully handle API incompatibilities with OpenAI-compatible endpoints, not hard-fail on unsupported parameters.

3. **[#4105](https://github.com/HKUDS/nanobot/issues/4105) — Custom provider drops empty reasoning_content** (1 comment, OPEN)
   - Fixed by PR [#4228](https://github.com/HKUDS/nanobot/pull/4228) (merged). However, a competing fix PR [#4227](https://github.com/HKUDS/nanobot/pull/4227) remains open, suggesting the fix may need refinement.

4. **[#4222](https://github.com/HKUDS/nanobot/issues/4222) — max_messages truncation invalidates prefix caching** (0 comments, OPEN)
   - A technically deep issue: `max_messages` truncation and microcompact cause message prefix shifts on nearly every turn, defeating prompt/prefix caching optimizations. This has significant **cost and latency implications** for users leveraging prefix caching with providers like Claude or GPT.

5. **[#4220](https://github.com/HKUDS/nanobot/issues/4220) — GitHub Copilot for Business / Enterprise support** (0 comments, OPEN)
   - Requests different API endpoints for GitHub Enterprise Server. Signals enterprise adoption interest.

**Underlying needs analysis:** The community is pushing nanobot toward (a) **multi-provider robustness** — graceful handling of API differences across OpenAI-compatible endpoints, (b) **enterprise readiness** — GHE support, per-user isolation, access control, and (c) **cost optimization** — prefix caching efficiency.

---

## 5. Bugs & Stability

### Ranked by Severity

| Severity | Issue | Status | Fix PR | Description |
|----------|-------|--------|--------|-------------|
| 🔴 High | [#4222](https://github.com/HKUDS/nanobot/issues/4222) | OPEN | None | Prefix/prompt caching continuously invalidated by truncation + microcompact. Causes increased latency and API costs on every turn. |
| 🔴 High | [#4211](https://github.com/HKUDS/nanobot/issues/4211) | CLOSED | None (issue closed) | SDK leaves stdio MCP connections open → `RuntimeError: exit cancel scope in a different task` at shutdown. Affects all SDK-embedded users. |
| 🟡 Medium | [#4105](https://github.com/HKUDS/nanobot/issues/4105) | OPEN | [#4228](https://github.com/HKUDS/nanobot/pull/4228) (merged) + [#4227](https://github.com/HKUDS/nanobot/pull/4227) (open) | Empty `reasoning_content` dropped for custom providers. Fix merged but competing PR suggests edge cases remain. |
| 🟡 Medium | [#4223](https://github.com/HKUDS/nanobot/issues/4223) | OPEN (PR open) | [#4223](https://github.com/HKUDS/nanobot/pull/4223) | WeChat channel enters permanent dead loop after session token expires — fails to reload state after pause. |
| 🟡 Medium | [#4221](https://github.com/HKUDS/nanobot/issues/4221) | OPEN (PR open) | [#4221](https://github.com/HKUDS/nanobot/pull/4221) | Relative symlink workspace escape in `ExecTool` — security vulnerability allowing reads outside working directory. |
| 🟢 Low | [#2573](https://github.com/HKUDS/nanobot/issues/2573) | CLOSED | None identified | GitHub Copilot OAuth login broken (👍9). Closed but no linked fix PR visible — needs verification. |
| 🟢 Low | [#4167](https://github.com/HKUDS/nanobot/issues/4167) | CLOSED | [#4209](https://github.com/HKUDS/nanobot/pull/4209) (merged) | Image generation `response_format` incompatibility. Fixed. |

**Notable:** The symlink escape ([#4221](https://github.com/HKUDS/nanobot/pull/4221)) is a **security fix** that should be prioritized for the next release. The prefix caching issue ([#4222](https://github.com/HKUDS/nanobot/issues/4222)) has no fix PR yet and directly impacts users' API bills.

---

## 6. Feature Requests & Roadmap Signals

| Request | Issue | Likelihood in Next Release | Rationale |
|---------|-------|---------------------------|-----------|
| WebUI Cron Job Management | [#4221](https://github.com/HKUDS/nanobot/issues/4218) | Medium | Natural complement to the existing WebUI surfaces; cron CLI is already feature-complete. |
| GitHub Copilot Enterprise / GHE | [#4220](https://github.com/HKUDS/nanobot/issues/4220) | Medium | Aligns with enterprise adoption signals (per-user memory, MCP access control already merged). |
| WhatsApp forwarded message detection | [#4226](https://github.com/HKUDS/nanobot/pull/4226) | High | PR already open; incremental improvement to existing bridge. |
| Cron silent mode + `lock_recipient` | [#4225](https://github.com/HKUDS/nanobot/pull/4225) | High | PR already open; addresses real production monitoring use cases. |
| AssemblyAI transcription provider | [#4224](https://github.com/HKUDS/nanobot/pull/4224) | High | PR already open; follows the pattern of adding provider options (Serper already merged). |
| SSRF protection for MCP HTTP URLs | [#4123](https://github.com/HKUDS/nanobot/pull/4123) | High | Security hardening; validates URLs before probing. |
| Chat sender identity context | [#4033](https://github.com/HKUDS/nanobot/pull/4033) | Medium | Enables multi-user channel awareness (Discord); significant refactor. |

**Prediction:** The next release will likely be **v0.1.5** focused on stability (WhatsApp fixes, reasoning_content fix, image param fix, symlink security) with select feature additions (AssemblyAI, cron silent mode, WhatsApp forwarding). The desktop shell ([#4195](https://github.com/HKUDS/nanobot/pull/4195)) may be held for a **v0.2.0** as it represents a new product surface.

---

## 7. User Feedback Summary

**Pain Points:**
- **Provider fragmentation is the #1 friction.** Users struggle with OpenAI-compatible API differences — `response_format` incompatibilities ([#4167](https://github.com/HKUDS/nanobot/issues/4167)), `reasoning_content` handling ([#4105](https://github.com/HKUDS/nanobot/issues/4105)), and OAuth flow breakage ([#2573](https://github.com/HKUDS/nanobot/issues/2573)). The migration from litellm to direct OpenAI appears to have introduced regressions.
- **Multi-user deployments are underserved but rapidly improving.** Per-user memory ([#2968](https://github.com/HKUDS/nanobot/pull/2968)), MCP access control ([#2533](https://github.com/HKUDS/nanobot/pull/2533)), and sender identity ([#4033](https://github.com/HKUDS/nanobot/pull/4033)) show the project is actively closing this gap.
- **Channel reliability (WhatsApp, WeChat) is a recurring theme.** Multiple fixes for duplicate messages, audio transcription, history replay, and token expiry recovery indicate these channels are used in production but need hardening.
- **WebUI feature parity with CLI is lacking.** The cron job management request ([#4218](https://github.com/HKUDS/nanobot/issues/4218)) highlights that power users must fall back to CLI for common tasks.

**Use Cases Observed:**
- Multi-user Discord/WhatsApp deployments with shared agents
- Custom provider setups (DeepSeek, Kimi, Agnes AI) for cost/performance optimization
- SDK-embedded nanobot in larger applications
- Background monitoring via cron jobs

**Satisfaction signals:** High PR merge rate (10 today) and responsive fixes suggest users feel heard. The 👍9 on the Copilot login issue, however, indicates frustration when regressions affect widely-used auth flows.

---

## 8. Backlog Watch

### Issues/PRs Needing Maintainer Attention

| Item | Age | Why It Matters |
|------|-----|----------------|
| [#4222](https://github.com/HKUDS/nanobot/issues/4222) — Prefix caching invalidation | 1 day (OPEN, no fix PR) | Directly impacts API costs for all users with prefix caching enabled. Technically complex but high impact. |
| [#4223](https://github.com/HKUDS/nanobot/pull/4223) — WeChat session expiry dead loop | 1 day (PR open) | Production-breaking for WeChat users. PR is ready for review. |
| [#4221](https://github.com/HKUDS/nanobot/pull/4221) — Symlink workspace escape | 1 day (PR open) | **Security vulnerability.** Should be fast-tracked. |
| [#4094](https://github.com/HKUDS/nanobot/pull/4094) — Channel dispatch durability | 8 days (OPEN) | Fixes 3 channel issues ([#4062](https://github.com/HKUDS/nanobot/issues/4062), [#4063](https://github.com/HKUDS/nanobot/issues/4063), [#4064](https://github.com/HKUDS/nanobot/issues/4064)). Stale — needs review or closure. |
| [#4033](https://github.com/HKUDS/nanobot/pull/4033) — Chat sender identity context | 9 days (OPEN) | Significant feature for multi-user channels. No maintainer response visible. |
| [#4123](https://github.com/HKUDS/nanobot/pull/4123) — SSRF protection for MCP URLs | 7 days (OPEN) | Security hardening. Ready for review. |
| [#4227](https://github.com/HKUDS/nanobot/pull/4227) — Competing fix for reasoning_content | 1 day (OPEN) | Duplicate of merged [#4228](https://github.com/HKUDS/nanobot/pull/4228). Needs maintainer to evaluate if additional changes are warranted or close as duplicate. |

**Recommendation:** Prioritize review of the security PRs ([#4221](https://github.com/HKUDS/nanobot/pull/4221), [#4123](https://github.com/HKUDS/nanobot/pull/4123)) and the WeChat fix ([#4223](https://github.com/HKUDS/nanobot/pull/4223)) for immediate merge. Triage the stale channel dispatch PR ([#4094](https://github.com/HKUDS/nanobot/pull/4094)) and assign an owner to the prefix caching issue ([#4222](https://github.com/HKUDS/nanobot/issues/4222)).

---

*Data source: [github.com/HKUDS/nanobot](https://github.com/HKUDS/nanobot) | Digest generated: 2026-06-07*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-06-07

---

## 1. Today's Overview

Hermes Agent remains in a period of exceptionally high activity following the landmark v0.16.0 "Surface" release on June 5. Today saw **50 issues updated** (48 still open) and **50 PRs updated** (46 open, 4 merged/closed), indicating the post-release surge of bug reports and community contributions is fully underway. The project is processing a large volume of feedback across multiple surfaces — Desktop, gateway, CLI, and platform adapters (Discord, Telegram, Slack, DingTalk). The pace of new issues (many filed today and yesterday) suggests v0.16.0's broad scope has surfaced regressions and edge cases that the community is actively triaging alongside the maintainers.

---

## 2. Releases

### v2026.6.5 — Hermes Agent v0.16.0 "The Surface" (June 5, 2026)

This is a **major release** by any metric:

- **874 commits** · **542 merged PRs** · **1,962 files changed** · **205,216 insertions** · **46,217 deletions**
- **399 issues closed** (2 P0, 62 P1, 16 security-tagged)
- **170 community contributors** (including co-authors)

The release is titled "The Surface," suggesting a broad, sweeping update that touches many surfaces of the product — Desktop UI, gateway, CLI, platform adapters, tooling, and memory systems. The sheer volume of changes (nearly 2K files) means a higher-than-usual regression surface, which is consistent with the flood of new bug reports seen in the past 48 hours. Users upgrading from v0.15.2 should expect significant changes across the board and should review the full release notes carefully before deploying in production.

---

## 3. Project Progress

### Merged/Closed PRs (Today)

| PR | Description |
|---|---|
| **#38255** | **fix(install): require Node >=20.19/22.12 for desktop build** — Resolves opaque `exit code 1` failures on Apple Silicon machines with older Node versions. A straightforward but important build infrastructure fix. |
| **#35544** | **fix(tui): show child transcript sessions in resume** — The TUI session picker now includes child sessions containing actual transcripts, filtering out empty shell/coordination rows. Closes #35542. |
| **#40870** | **feat(memory): mirror Hindsight writes to owned log** — Adds a fail-closed owned-log mirror to the Hindsight memory provider, ensuring Tier-0 owned-log entries are recorded before derived Hindsight writes. |

### Notable Open PRs (Active Today)

- **#40886** — `fix(camofox): honour browser.command_timeout instead of hardcoded 30s` — Direct fix for issue #40843.
- **#40882** — `fix(model): prevent wizard from overwriting model.base_url when adding provider` — Fixes #40862, a config corruption bug.
- **#40881** — `feat: inject current wall-clock time on every API turn` — Addresses temporal drift in long-running sessions.
- **#40876** — `feat: Add Cursor provider integration` — New first-class provider for Cursor's native Agent API.
- **#40817** — `feat(dingtalk): proactive message sending via OToMessage batchSend API` — Fixes DingTalk's broken proactive messaging.
- **#40806** — `fix(agent): reset flush cursor when compression rotates the session` — P1 fix for context compression session rotation.
- **#40869** — `fix(config): clear stale model.base_url when model.provider changes via config set` — Companion fix to #40882.

The project is advancing fixes rapidly — several PRs filed today are already targeting bugs reported within the last 24 hours, indicating a responsive maintainer team.

---

## 4. Community Hot Topics

### Most Discussed Issues (by comment count)

1. **[#5354](https://github.com/NousResearch/hermes-agent/issues/5354)** — *Deterministic Workflow Engine (Lobster-style)* — 8 comments, 👍8
   - **Underlying need:** Users want a way to define deterministic, repeatable workflows without relying on LLM re-planning for every execution. This is a request for a "compiled" or "hardcoded" execution path for mission-critical or repetitive tasks (PR monitoring, API key rotation) to reduce token costs and latency. This signals a maturation in the user base — moving from exploratory AI agent usage to production-grade automation.

2. **[#531](https://github.com/NousResearch/hermes-agent/issues/531)** — *User Workspace & Knowledge Base — Persistent Document Storage, Search, and RAG Integration* — 4 comments, 👍2
   - **Underlying need:** The current ephemeral document cache (24-hour TTL, flat UUID naming) is insufficient for users who want the agent to build persistent knowledge over time. This is a foundational feature request for RAG-capable personal knowledge management.

3. **[#38412](https://github.com/NousResearch/hermes-agent/issues/38412)** — *Desktop "Remote gateway" can't connect over WebSocket* — 3 comments
   - **Underlying need:** The packaged Electron Desktop client cannot establish WebSocket connections to remote gateways, making the remote gateway mode effectively broken for Desktop users.

4. **[#37661](https://github.com/NousResearch/hermes-agent/issues/37661)** — *mem0-temporal-hygiene plugin* — 3 comments
   - **Underlying need:** The Mem0 OSS memory provider has time-blindness and conflict resolution gaps. A community member has already built and published a plugin addressing this, signaling both the need and the community's willingness to fill gaps.

5. **[#27683](https://github.com/NousResearch/hermes-agent/issues/27683)** — *web_tools.py: missing plugin initialization causes silent failures* — 3 comments
   - **Underlying need:** Web search, extract, and crawl tools fail silently on fresh installs because the plugin system isn't initialized before the web registry is consulted. This is a fundamental out-of-box experience issue.

6. **[#25309](https://github.com/NousResearch/hermes-agent/issues/25309)** — *Dreaming — Automatic Background Memory Consolidation* — 3 comments
   - **Underlying need:** Inspired by biological sleep cycles, users want automatic background consolidation of short-term memories into long-term storage during quiet hours.

---

## 5. Bugs & Stability

### P1 — Critical

| Issue | Description | Fix PR |
|---|---|---|
| **[#40863](https://github.com/NousResearch/hermes-agent/issues/40863)** | **Telegram: removed users can inject prompts before auth check** — Users removed from `TELEGRAM_ALLOWED_USERS` still have their messages fully processed (text batching, MessageEvent construction, agent dispatch) before rejection. This is a **security vulnerability**. | None yet |
| **[#40695](https://github.com/NousResearch/hermes-agent/issues/40695)** | **Discord gateway heartbeat blocked by synchronous SQLite polling** — Long-running Discord sessions intermittently lose heartbeat, causing gateway instability. | None yet |
| **[#8090](https://github.com/NousResearch/hermes-agent/issues/8090)** | **`NameError: name 'RedactingFormatter' not defined` crashes gateway on startup** — Regression from PR #7991 (component-separated logging). Gateway fails to start entirely. 👍4 | None yet |
| **[#40806](https://github.com/NousResearch/hermes-agent/issues/40806)** | **Agent flush cursor not reset on session rotation** — When context compression fires, the flush cursor may not reset, causing data loss or duplication. | **#40806** (PR open) |

### P2 — High

| Issue | Description | Fix PR |
|---|---|---|
| **[#38412](https://github.com/NousResearch/hermes-agent/issues/38412)** | Desktop Remote gateway WebSocket rejected (403) | None yet |
| **[#27683](https://github.com/NousResearch/hermes-agent/issues/27683)** | Web tools silently fail on fresh install (plugin init order) | None yet |
| **[#40820](https://github.com/NousResearch/hermes-agent/issues/40820)** | Desktop installer fails on macOS when home path contains spaces | None yet |
| **[#40818](https://github.com/NousResearch/hermes-agent/issues/40818)** | DingTalk proactive messaging always fails | **#40817** (PR open) |
| **[#32217](https://github.com/NousResearch/hermes-agent/issues/32217)** | SSRF check blocks web tools inside NVIDIA OpenShell sandbox | None yet |
| **[#40840](https://github.com/NousResearch/hermes-agent/issues/40840)** | Tools wizard writes ESC character to `.env` on Windows, breaking web_search permanently | None yet |
| **[#40852](https://github.com/NousResearch/hermes-agent/issues/40852)** | Discord `/model` slash command validates current model against new provider's catalog, blocking provider switches | None yet |
| **[#40862](https://github.com/NousResearch/hermes-agent/issues/40862)** | Model wizard overwrites `model.base_url` when adding new provider | **#40882**, **#40869** (PRs open) |
| **[#40416](https://github.com/NousResearch/hermes-agent/issues/40416)** | Telegram context compaction visually deletes messages from user's chat — terrible UX | None yet |

### P3 — Medium

| Issue | Description | Fix PR |
|---|---|---|
| **[#40843](https://github.com/NousResearch/hermes-agent/issues/40843)** | Camofox HTTP client ignores `browser.command_timeout` (hardcoded 30s) | **#40886** (PR open) |
| **[#39472](https://github.com/NousResearch/hermes-agent/issues/39472)** | Desktop dashboard serves 404 on macOS (ASAR-internal path issue) | None yet |
| **[#40676](https://github.com/NousResearch/hermes-agent/issues/40676)** | Model picker hides active model when not in curated list | None yet |
| **[#40855](https://github.com/NousResearch/hermes-agent/issues/40855)** | Desktop app displays `voice.record_key` in Settings but never registers the shortcut | None yet |
| **[#40854](https://github.com/NousResearch/hermes-agent/issues/40854)** | Collapsible/foldable verbose output for TUI tool calls | None yet |

**Stability Assessment:** The Telegram auth bypass (#40863) is the most urgent issue — it's a security vulnerability with no fix PR yet. The gateway startup crash (#8090) is also critical as it blocks the entire gateway from launching. The Desktop installer failure on macOS with spaces in paths (#40820) affects a subset of users but is a hard blocker for those affected.

---

## 6. Feature Requests & Roadmap Signals

### Likely Candidates for Next Release (v0.16.1 or v0.17.0)

1. **Cursor Provider Integration** ([#40876](https://github.com/NousResearch/hermes-agent/pull/40876)) — A complete first-class provider integration is already in PR. Given Cursor's popularity and the completeness of the PR (transport, auth, model discovery, CLI support), this is highly likely to land soon.

2. **Wall-Clock Time Injection** ([#40881](https://github.com/NousResearch/hermes-agent/pull/40881)) — A simple, high-value fix for temporal awareness in long-running sessions. Low risk, clear benefit.

3. **DingTalk Proactive Messaging** ([#40817](https://github.com/NousResearch/hermes-agent/pull/40817)) — Fixes a completely broken feature for DingTalk users. The PR is already open and addresses all three root causes.

4. **Model Wizard Config Fixes** ([#40882](https://github.com/NousResearch/hermes-agent/pull/40882), [#40869](https://github.com/NousResearch/hermes-agent/pull/40869)) — Two complementary PRs fixing the model wizard's tendency to corrupt `config.yaml`. These are likely to be fast-tracked as they address a regression that can silently break user configurations.

5. **Discord Bot Mention Handling** ([#40884](https://github.com/NousResearch/hermes-agent/pull/40884)) — Fixes bot-to-bot trigger issues in Discord when `DISCORD_ALLOW_BOTS=mentions`.

### Longer-Term Signals

- **Deterministic Workflow Engine** ([#5354](https://github.com/NousResearch/hermes-agent/issues/5354)) — This is a significant architectural ask (Lobster-style compiled workflows). The 👍8 and 8 comments suggest real demand, but this would likely be a v0.17.0 or later feature.
- **Persistent Knowledge Base / RAG** ([#531](https://github.com/NousResearch/hermes-agent/issues/531)) — A foundational feature that would transform Hermes from a stateless agent into a persistent assistant. This has been open since March and is a clear gap in the product.
- **Dreaming / Background Memory Consolidation** ([#25309](https://github.com/NousResearch/hermes-agent/issues/25309)) — An innovative feature inspired by biological sleep cycles. Would differentiate Hermes from competitors.

---

## 7. User Feedback Summary

### Pain Points

1. **Desktop app quality** — Multiple issues (#38412, #40820, #39472, #40855, #40484, #40676) point to the Electron Desktop app being a significant source of friction. WebSocket connectivity, installer robustness, frontend serving, keyboard shortcuts, and UI polish are all problem areas. The Desktop appears to be the least mature surface of the project.

2. **Configuration fragility** — The model wizard corrupting `config.yaml` (#40862, #40862), the tools wizard writing ESC characters on Windows (#40840), and the Discord `/model` command blocking provider switches (#40852) all point to configuration management being error-prone and insufficiently validated.

3. **Platform adapter inconsistencies** — DingTalk can't send proactive messages (#40818), Telegram has auth bypass and UX issues (#40863, #40416), Discord has heartbeat and model switching bugs (#40695, #40852), and Slack silently drops app/webhook messages (#40883). Each platform adapter has its own set of edge cases and bugs.

4. **Web tools reliability** — Web search/extract/crawl fail silently on fresh installs (#27683), SSRF checks are too aggressive in sandboxed environments (#32217), and the Camofox backend ignores configured timeouts (#40843). The web tooling stack needs hardening.

5. **Temporal awareness** — Users report the agent losing track of time in long-running sessions (#40881), saying "good morning" at 3 PM and getting weekdays wrong.

### Satisfaction Signals

- The community is actively building plugins to fill gaps (mem0-temporal-hygiene #37661), indicating investment in the ecosystem.
- High engagement on feature requests (👍8 on #5354) shows users are thinking deeply about production use cases.
- Korean localization PR (#40716, #4072) signals international community growth.

---

## 8. Backlog Watch

### Long-Unanswered Important Issues

| Issue | Age | Description | Risk |
|---|---|---|---|
| **[#8090](https://github.com/NousResearch/hermes-agent/issues/8090)** | ~2 months (Apr 12) | Gateway crashes on startup (`RedactingFormatter` not defined) — **P1 regression from #7991** | **Critical** — Blocks gateway startup entirely. 👍4. No fix PR. |
| **[#531](https://github.com/NousResearch/hermes-agent/issues/531)** | ~3 months (Mar 6) | Persistent user workspace / knowledge base — foundational feature gap | **High** — Core UX limitation. No assignee or milestone visible. |
| **[#5354](https://github.com/NousResearch/hermes-agent/issues/5354)** | ~2 months (Apr 5) | Deterministic workflow engine — highly requested (👍8) | **Medium** — Significant architectural work, but strong community demand. |
| **[#27683](https://github.com/NousResearch/hermes-agent/issues/27683)** | ~2 weeks (May 18) | Web tools silently fail on fresh install — out-of-box experience | **High** — Affects all new users who rely on web tools. No fix PR. |
| **[#32217](https://github.com/NousResearch/hermes-agent/issues/32217)** | ~2 weeks (May 25) | SSRF check blocks web tools in NVIDIA OpenShell sandbox | **Medium** — Affects users in enterprise/research sandboxed environments. |

### PRs Needing Maintainer Attention

- **#40806** — P1 agent flush cursor fix. Open, no review activity visible.
- **#40817** — DingTalk proactive messaging fix. Open, addresses a completely broken feature.
- **#40882 / #40869** — Model wizard config corruption fixes. Both open, both address a regression that can silently break user setups.

---

*Data source: NousResearch/hermes-agent GitHub repository. Digest generated for 2026-06-07.*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-06-07

---

## 1. Today's Overview

PicoClaw remains in an active development phase surrounding the **v0.2.9** nightly cycle. The project saw high throughput on 2026-06-06: **12 issues** (10 open, 2 closed) and **18 PRs** (3 open, 15 closed), indicating a very productive day of integration and cleanup. The most significant development is an apparent **new exchange/trading subsystem** being authored by `jcafeitosa` under the "EXM" (exchange) and "RG" (risk) task prefixes, with 8 new issues and several implementation PRs. A fresh **nightly build (`v0.2.9-nightly.20260606.89ee8f1b`)** was published, reflecting these changes. Stability and defensive-code fixes dominate the merged PRs, suggesting the team is tightening up the codebase ahead of a broader release.

---

## 2. Releases

**nightly — `v0.2.9-nightly.20260606.89ee8f1b`** (2026-06-06)

Automated nightly build; full changelog against v0.2.9 available at [compare/v0.2.9...main](https://github.com/sipeed/picoclaw/compare/v0.2.9...main).

Key changes rolled into this nightly include:

- **New Exchange subsystem scaffolding** — `pkg/exchange/types.go`, lock-free ring buffer for order books, Binance REST & WebSocket connectors (by `jcafeitosa`)
- **Risk Manager interface** — `pkg/risk/types.go` under SDD-002
- **ClawHub message types and core hub** — following SDD-009
- **Defensive stability fixes** — goroutine leak cleanup in `Manager.Reload()`, nil-safe type assertions across Slack/Feishu/WhatsApp/LINE, base64 encoder Close-on-error fix
- **AGENT.md frontmatter tool policy filters** — allow/deny glob pattern support for tools and MCP servers
- **Slack channel improvements** — formatting, channel-level allow/ignore routing filters
- **Provider support** — DeepSeek-AI protocol for modelscope.cn
- **Channel support** — Google Chat channel
- **CI/CD** — GitHub Actions pipeline with test, build, lint steps
- **Documentation** — Traditional Chinese (zh-TW) locale additions
- **Breaking/migration notes:** None explicitly stated, but the new exchange subsystems and frontmatter policy filters may require configuration adjustments for users upgrading from v0.2.8 or earlier.

---

## 3. Project Progress

**Merged/Closed PRs (15 total):**

| PR | Summary | Domain |
|----|---------|--------|
| [#3014](https://github.com/sipeed/picoclaw/pull/3014) / [#3016](https://github.com/sipeed/picoclaw/pull/3016) | Fix goroutine leak in `Manager.Reload()` — cancel old `dispatchTask` context | Gateway/Channels |
| [#3021](https://github.com/sipeed/picoclaw/pull/3021) | Safe startup info map access to prevent nil-agent panic | Agent |
| [#3022](https://github.com/sipeed/picoclaw/pull/3022) | Add `ok` checks for `sync.Map` type assertions (Slack, Windows, Feishu) | Channels |
| [#3023](https://github.com/sipeed/picoclaw/pull/3023) | Check `Close()` errors in updater extraction functions | Updater |
| [#3017](https://github.com/sipeed/picoclaw/pull/3017) | Close base64 encoder on `io.Copy` error path | Agent |
| [#3019](https://github.com/sipeed/picoclaw/pull/3019) | Type-switch capture fix, nil guard, `LastInsertId` error check (WhatsApp, Config) | Channels/Config |
| [#3018](https://github.com/sipeed/picoclaw/pull/3018) | `ok` checks for type assertions + `os.Getwd` error handling (LINE, Evolution store) | Channels/Store |
| [#3020](https://github.com/sipeed/picoclaw/pull/3020) | Slack formatting + channel allow/ignore routing filters | Slack |
| [#2965](https://github.com/sipeed/picoclaw/pull/2965) | Fix workspace guard misreading scheme-less URLs (e.g., `curl wttr.in/...`) | Executor |
| [#2838](https://github.com/sipeed/picoclaw/pull/2838) | Frontmatter tool policy filters (allow/deny globs) in `AGENT.md` | Agent |
| [#2662](https://github.com/sipeed/picoclaw/pull/2662) | Unify vendors table in providers documentation | Docs |
| [#2711](https://github.com/sipeed/picoclaw/pull/2711) | Fix copy button in HTTP non-secure context (clipboard fallback) | Frontend |
| [#830](https://github.com/sipeed/picoclaw/pull/830) | Add Google Chat channel support | Channels |
| [#1112](https://github.com/sipeed/picoclaw/pull/1112) | Add DeepSeek-AI protocol support for modelscope.cn | Provider |
| [#423](https://github.com/sipeed/picoclaw/pull/423) | Base multi-agent collaboration framework with shared context (Blackboard) | Agent |
| [#3013](https://github.com/sipeed/picoclaw/pull/3013) | Remove missing skill-creator helper script references | Docs |

**Key themes:** A major defensive/code-safety push (authored largely by `chengzhichao-xydt`) closed out 7+ PRs fixing goroutine leaks, unchecked type assertions, and unhandled errors. The merge of PR #423 introduces a **multi-agent collaboration framework** with a thread-safe shared "Blackboard" context — this is a significant architectural addition.

---

## 4. Community Hot Topics

1. **[#2625](https://github.com/sipeed/picoclaw/issues/2625) — Provide compiled builds with WhatsApp support** (👍 1, 8 comments) — Closed as stale. User pain point: Raspberry Pi Zero 2 users must compile from source to get WhatsApp support. Signals ongoing demand for multi-architecture pre-built binaries with optional channel support baked in.

2. **[#2929](https://github.com/sipeed/picocaw/issues/2929) — First-class agent-to-agent communication for cooperative workflows** (👍 2, 3 comments) — Closed as stale. The newly merged PR #423 ("Base multi-agent collaboration framework") appears to be a direct response to this request, implementing a shared context pool and agent handoff.

3. **[#3030](https://github.com/sipeed/picoclaw/issues/3030) / [#3024](https://github.com/sipeed/picoclaw/issues/3024) — Exchange/ClawHub subsystem tasks** (multiple, by `jcafeitosa`) — These 8 new issues (EX-001 through EX-005, RG-001, EXM-001 through EXM-003) form a coordinated effort to build a cryptocurrency trading layer. All are freshly opened with minimal engagement so far — this is likely internal team work being tracked publicly.

---

## 5. Bugs & Stability

| Severity | Issue | Status | Fix Available |
|----------|-------|--------|---------------|
| 🔴 High | QQ channel token retrieval timeout on Windows ([#3015](https://github.com/sipeed/picoclaw/issues/3015)) | Open, new | No PR filed yet |
| 🟡 Low | WhatsApp missing from default arm64 builds ([#2625](https://github.com/sipeed/picoclaw/issues/2625)) | Closed stale | Request, not a bug |
| ✅ Fixed | Goroutine leak on `Manager.Reload()` | Closed | [PR #3014](https://github.com/sipeed/picoclaw/pull/3014), [#3016](https://github.com/sipeed/picoclaw/pull/3016) |
| ✅ Fixed | Nil panics on type assertions (Slack, Feishu, WhatsApp, LINE) | Closed | [PR #3018](https://github.com/sipeed/picoclaw/pull/3018), [#3019](https://github.com/sipeed/picoclaw/pull/3019), [#3021](https://github.com/sipeed/picoclaw/pull/3021), [#3022](https://github.com/sipeed/picoclaw/pull/3022) |
| ✅ Fixed | Corrupt updater extraction on Close errors | Closed | [PR #3023](https://github.com/sipeed/picoclaw/pull/3023) |
| ✅ Fixed | Scheme-less URL guard false-positive | Closed | [PR #2965](https://github.com/sipeed/picoclaw/pull/2965) |

The most pressing open bug is **#3015** (QQ channel failure on Windows), which affects users on a specific platform+channel combination. Given that multiple Windows-related fixes were merged on the same day (`platform_windows.go` sync.Map fix in #3022), this may be related but no direct fix PR yet exists.

---

## 6. Feature Requests & Roadmap Signals

**Active/Promising:**

- **Cryptocurrency Trading Layer** — The 8 EX/RG/EXM-prefix issues opened by `jcafeitosa` on 2026-06-06 represent a major new subsystem: Exchange interface, Binance REST + WebSocket connectors, lock-free order book ring buffer, risk manager, and a CLI (`cmd/clawtrade`). This is likely being designed for an upcoming **v0.3.0** trading feature release.
- **Multi-agent Collaboration** — Now merged (PR #423). The follow-up need from #2929 (peer-to-peer agent communication) may now be implementable atop this framework.
- **ClawHub** — Message types and hub (EXM-001 / SDD-009) suggest a centralized plugin/skill marketplace or inter-agent message routing system in development.

**Backlog/Unlikely Soon:**

- Pre-built WhatsApp-included binaries ([#2625](https://github.com/sipeed/picoclaw/issues/2625)) — Closed stale; no sign of build pipeline changes addressing per-architecture optional features.
- Traditional Chinese docs ([#2935](https://github.com/sipeed/picoclaw/pull/2935)) — Stale PR, open but no recent activity.

---

## 7. User Feedback Summary

**Pain Points:**

- **Platform-specific builds:** Raspberry Pi Zero 2 (arm64) users cannot easily use WhatsApp because it is excluded from default builds ([#2625](https://github.com/sipeed/picoclaw/issues/2625)). Users must compile from source with specific flags, creating friction for rapid updates.
- **Windows compatibility:** QQ channel fails entirely on Windows with a token retrieval timeout ([#3015](https://github.com/sipeed/picoclaw/issues/3015)), breaking a key use case for Chinese-language users on Windows.
- **Secure-context requirements:** Frontend clipboard copy broke on HTTP (non-HTTPS) deployments ([#2711](https://github.com/sipeed/picoclaw/pull/2711)), common for local/network installations — now fixed.

**Satisfaction Signals:**

- High volume of merged PRs (15 in one day) and steady nightly builds suggest users are getting regular improvements.
- The multi-agent framework merge and the new exchange subsystem signal ambitious roadmap delivery, likely satisfying users who requested agent-to-agent communication ([#2929](https://github.com/sipeed/picoclaw/issues/2929)).

**Use Cases Observed:**

- Embedded/IoT deployment on Raspberry Pi Zero 2 for lightweight AI assistant gateway use
- Windows desktop users relying on QQ channel for Chinese-market messaging
- Teams wanting multi-agent workflows with shared context
- Trading/crypto users experimenting with bot-driven exchange automation

---

## 8. Backlog Watch

| Item | Age/Last Update | Priority | Note |
|------|----------------|----------|------|
| [#3015](https://github.com/sipeed/picoclaw/issues/3015) — QQ channel failure on Windows | Updated 2026-06-06 | 🔴 High | New, no fix PR yet. First reported <24h ago but affects a major platform+channel combo. Needs triage. |
| [#2935](https://github.com/sipeed/picoclaw/pull/2935) — Traditional Chinese (zh-TW) localization | Stale, updated 2026-06-06 | 🟡 Medium | Stale PR; passes CI but needs review. Blocks Chinese-TW community adoption. |
| [#423](https://github.com/sipeed/picoclaw/pull/423) — Multi-agent framework | Merged 2026-06-06 | ℹ️ Info | Now merged (WIP → closed). Follow-up work expected to flesh out Blackboard/handoff features. |
| [#2929](https://github.com/sipeed/picoclaw/issues/2929) — Agent-to-agent communication | Closed stale | 🟡 Medium | Original request closed, but PR #423's merge may partially satisfy it. Worth reopening or tracking as a new issue if Blackboard doesn't fully cover the use case. |

---

*Data source: [github.com/sipeed/picoclaw](https://github.com/sipeed/picoclaw) — snapshot 2026-06-07. All links verified against the live repository as of this date.*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-06-07

**Repository:** [github.com/qwibitai/nanoclaw](https://github.com/qwibitai/nanoclaw)

---

## 1. Today's Overview

NanoClaw saw a highly active day with **14 PRs updated** (11 open, 3 merged) and **1 new issue** filed, despite no new releases. The project is in a clear stabilization and conformance phase: multiple contributors are simultaneously fixing channel adapter bugs (Signal, Slack), hardening the CLI and container runtime, and executing a systematic skills-library retrofit. The volume of open PRs (11) against only 3 closed suggests the maintainers have a significant review backlog. No new version shipped, indicating the team is batching changes.

---

## 2. Releases

**None.** No new releases were published in the last 24 hours.

---

## 3. Project Progress

Three PRs were merged/closed today, each representing meaningful progress:

| # | PR | Author | Summary |
|---|-----|--------|---------|
| [#2698](https://github.com/qwibitai/nanoclaw/pull/2698) | Skills conformance: exemplars + fleet retrofit | gavrielc | Systematic overhaul of the skill library so every skill conforms to a maintainability model (minimal additive reach-ins, integration tests, idempotent `REMOVE.md`, no `VERIFY.md`). Non-conforming skills are retired or rewritten. |
| [#2696](https://github.com/qwibitai/nanoclaw/pull/2696) | feat(add-dashboard): make the skill conformant | gavrielc | First exemplar of the skills upgradeability model. Fixed silent drift in the `add-dashboard` skill where five DB module imports broke after a core reorganization. Added an in-process-seam integration test. |
| [#2697](https://github.com/qwibitai/nanoclaw/pull/2697) | feat(host): single-instance lock to prevent duplicate messages | simonstudios | Adds a file-based lock so that running two host processes simultaneously (e.g., manual `pnpm run dev` alongside the installed service) no longer causes the agent to deliver duplicate messages. |

**Key themes:** The skills conformance initiative (led by gavrielc) is clearly a top-level project priority — two of the three closed PRs belong to this effort. The host duplicate-message fix addresses a real operational reliability issue.

---

## 4. Community Hot Topics

Most PRs and the single issue have **0 comments and 0 reactions**, so activity is best measured by PR volume and author concentration rather than discussion heat.

**Most active contributor today:** `cfis` has **7 open PRs** updated in the last 24h, spanning Signal adapter fixes, poll-loop improvements, Podman rootless support, mount security, and MCP transport expansion. This represents a significant breadth of contribution.

**Most thematically significant cluster:** The **Slack Socket Mode migration** (PRs [#2702](https://github.com/qwibitai/nanoclaw/pull/2702) and [#2700](https://github.com/qwibitai/nanoclaw/pull/2700) by `mperraillon`) — both the Slack adapter and the `/add-slack` skill are being switched from HTTP webhook mode to Socket Mode. This reflects an underlying user need: **eliminating the requirement for a publicly reachable URL**, which is a common deployment barrier for self-hosted users behind NATs or firewalls.

**Underlying needs analysis:**
- **Deployment simplicity:** Socket Mode for Slack, single-instance locking, and Podman rootless fixes all point to users running NanoClaw in constrained/home-server environments.
- **Skills maintainability:** The conformance retrofit signals that the skill library had accumulated drift and technical debt, and the project is investing in long-term maintainability.
- **Channel reliability:** Multiple Signal and poll-loop fixes indicate that message delivery correctness across channels is an ongoing focus area.

---

## 5. Bugs & Stability

### New Bug Reported Today

| Severity | Issue | Description | Fix PR? |
|----------|-------|-------------|---------|
| 🔴 **Medium** | [#2701](https://github.com/qwibitai/nanoclaw/issues/2701) — `ncl groups restart --rebuild` fails when both `packages_apt` and `packages_npm` are empty | The rebuild command errors with *"No packages to install. Use install_packages first."* even though there are no packages to install. A normal restart works fine. Rebuild should skip package installation when no packages are configured. | ❌ None yet |

### Open Fix PRs (Bugs Addressed but Not Yet Merged)

| Severity | PR | Bug | Channel/Area |
|----------|-----|-----|--------------|
| 🔴 **High** | [#2694](https://github.com/qwibitai/nanoclaw/pull/2694) | Signal DMs silently dropped because `isMention`/`isGroup` not set on inbound messages | Signal |
| 🔴 **High** | [#2695](https://github.com/qwibitai/nanoclaw/pull/2695) | Signal inbound image attachments unreadable from container (host path not mounted) | Signal |
| 🟡 **Medium** | [#2702](https://github.com/qwibitai/nanoclaw/pull/2702) | Slack adapter uses HTTP webhook mode but codebase assumes Socket Mode — misconfiguration for most users | Slack |
| 🟡 **Medium** | [#2699](https://github.com/qwibitai/nanoclaw/pull/2699) | `ncl groups create` generates UUIDs starting with digits, which OneCLI rejects as invalid agent identifiers | CLI |
| 🟡 **Medium** | [#2531](https://github.com/qwibitai/nanoclaw/pull/2531) | Duplicate text delivered to user when `send_message` fires mid-turn | Poll loop |
| 🟢 **Low** | [#2184](https://github.com/qwibitai/nanoclaw/pull/2184) | Raw session-invalid error shown to user before retry on stale Claude Code session | Poll loop |
| 🟢 **Low** | [#2230](https://github.com/qwibitai/nanoclaw/pull/2230) | Rootless Podman fails to map host user correctly | Container runner |
| 🟢 **Low** | [#2349](https://github.com/qwibitai/nanoclaw/pull/2349) | Mount security allowlist crashes on entries missing `path` field | Container security |

**Stability assessment:** The Signal adapter has the most critical open bugs (dropped DMs, unreadable images). The Slack Socket Mode mismatch is a significant configuration issue affecting all Slack users. The new rebuild bug (#2701) is straightforward and likely quick to fix once triaged.

---

## 6. Feature Requests & Roadmap Signals

| Signal | PR/Issue | Description | Likelihood of Next Version |
|--------|----------|-------------|---------------------------|
| MCP transport expansion | [#2208](https://github.com/qwibitai/nanoclaw/pull/2208) | Add HTTP and SSE transport support for MCP servers (currently stdio-only) | **High** — PR is open and addresses a clear integration gap |
| Google Contacts integration | [#2693](https://github.com/qwibitai/nanoclaw/pull/2693) | New `/add-google-contacts-tool` skill, sibling to existing Gmail and GCal tools | **High** — follows established pattern, low risk |
| Skills conformance model | [#2698](https://github.com/qwibitai/nanoclaw/pull/2698) (merged) | Systematic skill library maintainability framework | **Already shipping** — will land in next release |
| Slack Socket Mode | [#2702](https://github.com/qwibitai/nanoclaw/pull/2702), [#2700](https://github.com/qwibitai/nanoclaw/pull/2700) | Migrate Slack from HTTP webhooks to Socket Mode | **High** — two coordinated PRs suggest this is prioritized |

**Prediction:** The next release will likely include the skills conformance framework, Slack Socket Mode, Signal adapter fixes, and the Google Contacts skill. MCP HTTP/SSE transport is a strong candidate if the PR passes review.

---

## 7. User Feedback Summary

**Pain points identified today:**

1. **Rebuild workflow broken for minimal configurations** ([#2701](https://github.com/qwibitai/nanoclaw/issues/2701)) — Users who don't need extra packages hit an unnecessary error during `--rebuild`. This is a UX friction point for simpler deployments.

2. **Slack setup complexity** (PRs [#2702](https://github.com/qwibitai/nanoclaw/pull/2702), [#2700](https://github.com/qwibitai/nanoclaw/pull/2700)) — The current Slack integration requires a publicly reachable webhook URL, which is a significant barrier for self-hosted users. The community is actively migrating to Socket Mode to remove this requirement.

3. **Signal reliability gaps** (PRs [#2694](https://github.com/qwibitai/nanoclaw/pull/2694), [#2695](https://github.com/qwibitai/nanoclaw/pull/2695)) — Signal users are experiencing silent message loss (DMs dropped) and inability to receive images, suggesting the Signal channel needs more real-world testing.

4. **Duplicate messages in development** ([#2697](https://github.com/qwibitai/nanoclaw/pull/2697)) — Developers running the host process manually alongside the installed service see confusing duplicate responses. Now fixed.

**Satisfaction signals:** The breadth of contributions (especially `cfis`'s 7 PRs) suggests an engaged contributor base. The skills conformance initiative shows the project is investing in long-term quality, which is a positive signal for adopters.

---

## 8. Backlog Watch

These PRs have been open for **weeks to over a month** with no visible maintainer action and address non-trivial issues:

| PR | Age | Author | Description | Risk of Staleness |
|----|-----|--------|-------------|-------------------|
| [#2531](https://github.com/qwibitai/nanoclaw/pull/2531) | ~20 days | cfis | Suppress duplicate text when `send_message` fires mid-turn | **High** — poll-loop correctness fix, affects user-facing output |
| [#2184](https://github.com/qwibitai/nanoclaw/pull/2184) | ~36 days | cfis | Retry immediately on stale session instead of showing error | **Medium** — UX improvement, not blocking |
| [#2230](https://github.com/qwibitai/nanoclaw/pull/2230) | ~35 days | cfis | Map host user via keep-id on rootless Podman | **Medium** — affects Podman users specifically |
| [#2349](https://github.com/qwibitai/nanoclaw/pull/2349) | ~30 days | cfis | Tolerate allowlist entries missing `path` field | **Low** — edge case in mount security |
| [#2208](https://github.com/qwibitai/nanoclaw/pull/2208) | ~35 days | cfis | Support HTTP and SSE MCP server transports | **High** — feature addition, may need design discussion |

**Note:** `cfis` has 5 PRs open for 30+ days. While some may be waiting on design review or maintainer bandwidth, the poll-loop duplicate fix (#2531) and MCP transport expansion (#2208) seem like they should be relatively uncontroversial and could benefit from a status update or merge.

---

*Generated by OWL on 2026-06-07. Data reflects GitHub activity in the 24-hour window ending 2026-06-07.*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-06-07

---

## 1. Today's Overview

IronClaw is in a period of intense development activity with **32 PRs updated** in the last 24 hours (22 open, 10 merged/closed) and **2 issues updated** (1 open, 1 closed). No new releases were published today. The project is clearly deep into the "Reborn" architecture phase, with the majority of active PRs touching Reborn-specific subsystems: product workflow routing, WebChat v2, Slack channel integration, extension lifecycle, and LLM tool-call parsing. The volume of merged/closed PRs (10) indicates a healthy review-and-merge cadence, while the 22 open PRs suggest a substantial pipeline of work in progress. The single open issue (nightly E2E failure) is a CI reliability concern rather than a user-facing bug.

---

## 2. Releases

**No new releases today.** The most recent release PR (#3708) remains open, bumping `ironclaw_common` from 0.4.2 → 0.5.0 (breaking), `ironclaw_skills` from 0.3.0 → 0.4.0 (breaking), `ironclaw_safety` from 0.2.2 → 0.2.3 (compatible), and the main `ironclaw` crate from 0.24.0 → 0.29.1. This release has been open since May 16 and was last updated June 6, suggesting it is accumulating changes for a larger coordinated cut.

---

## 3. Project Progress

The following PRs were merged or closed in the last 24 hours, representing concrete forward progress:

| PR | Summary | Significance |
|---|---|---|
| [#4520](https://github.com/nearai/ironclaw/pull/4520) | CI: keep Reborn-only PRs out of legacy tests | Improves CI signal-to-noise; Reborn-scoped PRs no longer trigger irrelevant legacy test suites. Dynamic test discovery across 4 partitions. |
| [#4509](https://github.com/nearai/ironclaw/pull/4509) | Add Slack channel subject routing | Enables Slack host-beta channel route config; wires Slack channel IDs to product route subjects with proper DM personal/shared fallback semantics. |
| [#4508](https://github.com/nearai/ironclaw/pull/4508) | Gate repeated-call stops behind warning | Converts repeated capability-call signatures from immediate no-progress stop into a two-stage warning gate with persisted state — a UX improvement for agent loop control. |
| [#4486](https://github.com/nearai/ironclaw/pull/4486) | docs(reborn): subagent + compaction unified design | Documents the unified design for background subagents, proactive context compaction, and WebUI run nesting. Introduces `PostCapabilityStage` as the single owner of the post-capability/pre-prompt seam. |
| [#4485](https://github.com/nearai/ironclaw/pull/4485) | docs(reborn): subagent + compaction unified design (duplicate scope) | Same design doc merged with broader scope labels (DB MIGRATION, extensions, etc.), likely a scope-label correction. |

**Key themes advancing today:**
- **CI/CD hygiene** (#4520): Reborn-only changes are now properly isolated from legacy test runs, reducing CI noise and improving developer velocity.
- **Slack channel integration** (#4509): A concrete step toward multi-channel support in the Reborn architecture, with proper routing semantics.
- **Agent loop robustness** (#4508): The repeated-call warning gate is a meaningful improvement to the agent's loop control, preventing premature stops while still detecting unproductive cycles.
- **Design documentation** (#4485, #4486): The subagent + compaction unified design doc is now merged, providing architectural clarity for a complex subsystem.

---

## 4. Community Hot Topics

**Most active PRs by update recency and scope:**

1. **[#4523](https://github.com/nearai/ironclaw/pull/4523)** — `fix(host_api): round-trip system sentinel through string_id Deserialize`
   - **Author:** matiasbenary (regular contributor) | Risk: Low | Size: M
   - Fixes an asymmetry where `TenantId`/`UserId` deserialization rejected the `\x1fSYSTEM\x1f` sentinel, causing LLM settings endpoints (`/api/webchat/v2/llm/*`) to fail with `service_unavailable`. This is a correctness bug in the host API's identity layer with direct impact on WebChat v2 LLM configuration.

2. **[#4522](https://github.com/nearai/ironclaw/pull/4522)** — `feat(llm): scaffold tool_args.rs shared parsing primitives (RC3/M9 Phase A)`
   - **Author:** henrypark133 (core) | Risk: Low | Size: Docs
   - Phase A of the RC3/M9 provider parsing framework. Installs shared utility primitives for tool-call argument parsing. Phases B and C will add `ToolCall.arguments_parse_error` and the `NormalizingProvider` decorator that closes audit RC1 universally. This is foundational infrastructure for reliable LLM tool-call handling.

3. **[#4511](https://github.com/nearai/ironclaw/pull/4511)** — `[codex] Add outbound preference facade contracts`
   - **Author:** henrypark133 (core) | Risk: Low | Size: XL
   - Phase 1 of outbound delivery preference contracts, adding `OutboundPreferencesProductFacade` wiring and validated DTOs. This enables users to control where agent output is delivered (channel selection), a key UX feature for multi-channel deployments.

4. **[#4489](https://github.com/nearai/ironclaw/pull/4489)** — `feat(reborn): add OpenAI-compatible product refs`
   - **Author:** hanakannzashi (core) | Risk: Medium | Size: XL
   - Adds typed opaque OpenAI-compatible public refs (`chatcmpl-*`, `resp_*`) with durable adapters for idempotency replay/conflict handling. This is critical infrastructure for OpenAI API compatibility, enabling IronClaw to serve as a drop-in OpenAI proxy.

5. **[#4495](https://github.com/nearai/ironclaw/pull/4495)** — `feat(reborn): route chat completions through ProductWorkflow`
   - **Author:** hanakannzashi (core) | Risk: Low | Size: XL
   - Routes non-streaming `POST /v1/chat/completions` through ProductWorkflow instead of the v1 gateway or direct LLM proxy. This is the core routing change that makes the Reborn architecture the default path for OpenAI-compatible requests.

**Underlying needs analysis:**
- The community (primarily core contributors) is focused on **completing the Reborn architecture migration**, with particular emphasis on OpenAI API compatibility, multi-channel routing, and LLM tool-call reliability.
- The `tool_args.rs` parsing framework (#4522) addresses a class of bugs where malformed tool-call arguments from LLMs cause downstream failures — a common pain point in production agent systems.
- Outbound preference contracts (#4511) signal growing demand for **multi-channel delivery control**, likely driven by users deploying IronClaw across Slack, WebChat, and CLI simultaneously.

---

## 5. Bugs & Stability

### Open Issues

| Severity | Issue | Details |
|---|---|---|
| 🔴 **High** | [#4108](https://github.com/nearai/ironclaw/issues/4108) — Nightly E2E failed | The nightly E2E workflow failed on the `Full E2E / E2E (extensions)` job. This has been open since May 27 with no comments, suggesting it may be an intermittent or low-priority CI failure. However, persistent E2E failures can mask real regressions. |
| 🟢 **Low** | [#3805](https://github.com/nearai/ironclaw/issues/3805) — [Reborn] Lane 5: implement Notion MCP capability path | Closed. Was a feature implementation task for adding Notion as the first concrete MCP tool package in the capability catalog. |

### Bug-fix PRs

| PR | Bug Fixed | Status |
|---|---|---|
| [#4523](https://github.com/nearai/ironclaw/pull/4523) | `TenantId`/`UserId` deserialization rejected `\x1fSYSTEM\x1f` sentinel, breaking LLM settings endpoints | **Open** — needs review/merge |
| [#3981](https://github.com/nearai/ironclaw/pull/3981) | Adds test coverage for runtime HTTP sensitive-header classification and redaction markers | **Open** — security-focused test addition |

**Stability assessment:** The nightly E2E failure (#4108) is the most concerning stability signal. It has persisted for 11 days without resolution or commentary, which could indicate either a flaky test environment or a genuine regression that hasn't been triaged. The host API deserialization bug (#4523) is a concrete correctness issue with a fix already in PR form — once merged, it should resolve LLM settings failures for WebChat v2 users.

---

## 6. Feature Requests & Roadmap Signals

**Active feature development (from open PRs):**

| Feature | PR(s) | Readiness |
|---|---|---|
| **OpenAI API compatibility layer** | [#4489](https://github.com/nearai/ironclaw/pull/4489), [#4495](https://github.com/nearai/ironclaw/pull/4495) | Advanced — core routing and ref stores in progress |
| **Slack channel integration** | [#4509](https://github.com/nearai/ironclaw/pull/4509) (merged), [#4510](https://github.com/nearai/ironclaw/pull/4510) | Channel routing merged; admin wiring in progress |
| **WebChat v2 session & thread management** | [#4519](https://github.com/nearai/ironclaw/pull/4519), [#4516](https://github.com/nearai/ironclaw/pull/4516) | Session capabilities endpoint and thread deletion in PR |
| **Outbound delivery preferences** | [#4511](https://github.com/nearai/ironclaw/pull/4511) | Phase 1 contracts in progress |
| **LLM tool-call parsing framework** | [#4522](https://github.com/nearai/ironclaw/pull/4522) | Phase A scaffold merged; Phases B-C upcoming |
| **Reborn config seeding** | [#4517](https://github.com/nearai/ironclaw/pull/4517) | First-run config.toml generation in PR |
| **Extension lifecycle E2E** | [#4518](https://github.com/nearai/ironclaw/pull/4518) | E2E coverage for extension search/install/activate/remove |
| **Local-dev approval gates** | [#4186](https://github.com/nearai/ironclaw/pull/4186) | Approval-aware authorizer for local development |
| **Notion MCP integration** | [#3805](https://github.com/nearai/ironclaw/issues/3805) (closed issue) | Was tracked as Lane 5; issue closed but no merged PR visible — may be pending or deferred |

**Predicted next release contents:**
Based on the open release PR (#3708) and the volume of Reborn-related work, the next release will likely include:
- OpenAI-compatible chat completions routing through ProductWorkflow
- Slack channel subject routing
- WebChat v2 session and thread management endpoints
- The `ironclaw_common` 0.5.0 and `ironclaw_skills` 0.4.0 breaking changes (scope TBD from release notes)

---

## 7. User Feedback Summary

**Pain points evident from today's data:**

1. **CI reliability concerns:** The nightly E2E failure (#4108) has been open for 11 days with no response. For users depending on IronClaw's stability guarantees, unanswered CI failures erode confidence. The fact that it's an automated issue with 0 comments suggests it may be falling through the cracks.

2. **LLM settings endpoint failures:** PR #4523 reveals that `TenantId`/`UserId` deserialization was rejecting the system sentinel, causing `/api/webchat/v2/llm/*` endpoints to fail. This would manifest as users being unable to configure LLM settings through the WebChat v2 UI — a direct user-facing pain point.

3. **JSON sanitization needs:** PR #4521 (new contributor) adds a JSON cleaner for sanitizing messy JSON data. This suggests that users or developers are encountering malformed JSON from LLM outputs or external tools that needs to be cleaned before processing — a common pain point in agent systems.

4. **Documentation gaps being actively addressed:** Multiple design docs (#4485, #4486) and the LLM parsing framework scaffold (#4522) indicate that the team is investing in documentation and shared primitives, likely in response to onboarding friction or architectural complexity.

**Satisfaction indicators:**
- The high merge rate (10 PRs closed/merged in 24h) suggests a responsive maintainer team.
- Regular contributors (serrrfirat, henrypark133, hanakannzashi) are actively pushing multi-faceted improvements across the stack.
- New contributors (Dannye013, failuresmith) are submitting PRs, indicating an accessible contribution process.

---

## 8. Backlog Watch

The following items have been open for extended periods and may need maintainer attention:

| Item | Age | Concern |
|---|---|---|
| **[#4108](https://github.com/nearai/ironclaw/issues/4108)** — Nightly E2E failed | 11 days | No comments, no assignment. Persistent E2E failures can mask real regressions. Needs triage to determine if it's a flaky test or genuine breakage. |
| **[#3708](https://github.com/nearai/ironclaw/pull/3708)** — chore: release | 22 days | Release PR has been open since May 16. Contains breaking changes to `ironclaw_common` and `ironclaw_skills`. The longer this stays open, the more breaking changes accumulate, making the eventual migration harder for users. |
| **[#4002](https://github.com/nearai/ironclaw/pull/4002)** — chore(deps): bump actions group (16 updates) | 14 days | Dependabot PR with 16 GitHub Actions updates. While individually low-risk, the batch nature and age suggest it may have merge conflicts or be deprioritized. Stale action versions can cause CI security and reliability issues. |
| **[#4186](https://github.com/nearai/ironclaw/pull/4186)** — [codex] Wire local-dev approval gates | 10 days | Medium-risk, XL-sized PR for local-dev approval authorizer. May need review from maintainers familiar with the authorization subsystem. |
| **[#3981](https://github.com/nearai/ironclaw/pull/3981)** — test: cover runtime HTTP redaction markers | 14 days | Security-focused test PR from a new contributor. Deserves timely review given the security scope. |

**Recommendation:** The release PR (#3708) and the E2E failure (#4108) are the two most time-sensitive items. The release PR's breaking changes should be shipped or deliberately deferred, and the E2E failure should be triaged to prevent regression blindness.

---

*Data source: nearai/ironclaw GitHub repository. Digest generated 2026-06-07.*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-06-07

---

## 1. Today's Overview

LobsterAI shows moderate community activity with **6 open issues** and **2 closed PRs** updated in the last 24 hours, but no new releases. The project is in a maintenance-heavy phase: most issues are long-standing UI/UX bugs (stale since April) that have recently resurfaced through user re-engagement, and the two closed PRs address feature enhancements (batch export, multi-agent task scheduling) that have been in the pipeline since early April. The absence of new releases suggests the team is likely accumulating changes for a future version. Overall project health is stable but the growing stale issue backlog warrants attention.

---

## 2. Releases

**None.** No new releases in the last 24 hours.

---

## 3. Project Progress

Two PRs were closed/merged today, both originally opened on 2026-04-07:

- **PR #1529** — *feat(cowork): Batch export for selected sessions as JSON* ([netease-youdao/LobsterAI#1529](https://github.com/netease-youdao/LobsterAI/pull/1529))
  Adds a bulk export button in cowork batch mode, serializing selected sessions (with full message history) into a structured JSON file via a new `cowork:session:exportBatch` IPC handler. Closes #1528.

- **PR #1530** — *feat(scheduledTask): Agent selector for new scheduled tasks in multi-agent setups* ([netease-youdao/LobsterAI#1530](https://github.com/netease-youdao/LobsterAI/pull/1530))
  Introduces an Agent ownership selector when creating scheduled tasks, visible only when >1 agent is enabled. Defaults to the main agent. Improves clarity around which agent a scheduled task belongs to, especially for tasks created via conversation.

Both features address real usability gaps in multi-agent workflows and data portability.

---

## 4. Community Hot Topics

| Issue | Activity Signal | Underlying Need |
|---|---|---|
| **#2120** — Feature suggestions ([link](https://github.com/netease-youdao/LobsterAI/issues/2120)) | Newest issue (created 2026-06-06), 1 comment | User wants: (1) task queueing/pre-input while agent is busy (inspired by WorkBuddy), (2) longer task execution timeouts for long-running scripts, (3) 3-column skill UI layout for ultrawide screens. Signals demand for **workflow continuity** and **power-user UX polish**. |
| **#1495** — Unexplained process interruption ([link](https://github.com/netease-youdao/LobsterAI/issues/1495)) | 👍: 1 (only upvoted issue), 1 comment | User experiences frequent mid-task termination. Root cause unclear (client vs. model-side). This is a **reliability concern** affecting trust. |
| **#1496** — Task shows complete but returns nothing ([link](https://github.com/netease-youdao/LobsterAI/issues/1496)) | 2 comments | Task status UI says "done" but no output is returned. Suggests a **state synchronization bug** between the agent execution layer and the UI. |

---

## 5. Bugs & Stability

Ranked by severity:

| Severity | Issue | Description | Fix PR? |
|---|---|---|---|
| 🔴 **High** | [#1496](https://github.com/netease-youdao/LobsterAI/issues/1496) — Task completes with no return | Silent failure: UI reports completion but no output delivered. Core functionality broken. | ❌ None |
| 🔴 **High** | [#1495](https://github.com/netease-youdao/LobsterAI/issues/1495) — Random process interruption | Tasks terminate unexpectedly mid-execution. User cannot distinguish client vs. model issue. | ❌ None |
| 🟡 **Medium** | [#1468](https://github.com/netease-youdao/LobsterAI/issues/1468) — Agent creation modal: unsaved changes lost silently | No confirmation dialog when closing modal with unsaved data. | ❌ None |
| 🟡 **Medium** | [#1469](https://github.com/netease-youdao/LobsterAI/issues/1469) — Agent settings panel: unsaved changes lost silently | Same pattern as #1468 but for the settings panel. | ❌ None |
| 🟡 **Medium** | [#1470](https://github.com/netease-youdao/LobsterAI/issues/1470) — MCP server config modal: unsaved changes lost silently | Same pattern extended to MCP configuration (including API keys). Highest data-loss risk of the three. | ❌ None |

**Pattern note:** Issues #1468, #1469, and #1470 all share the same root cause — missing unsaved-changes confirmation guards across modals. A single shared `useUnsavedChanges` hook or HOC could fix all three simultaneously.

---

## 6. Feature Requests & Roadmap Signals

From **Issue #2120** ([link](https://github.com/netease-youdao/LobsterAI/issues/2120)):

1. **Task queuing / pre-input** — Allow users to queue the next task while the current one runs. This is a workflow continuity feature likely to be well-received by power users running multi-step automations. *Probability of near-term implementation: Medium-High* (clear user demand, conceptually straightforward).

2. **Extended task execution timeout** — Long-running scripts (e.g., data scraping) get terminated prematurely. Users need configurable or significantly longer timeouts. *Probability: High* (reliability fix, not a feature per se).

3. **3-column skill UI for ultrawide displays** — Layout optimization for 2560×1600+ screens. *Probability: Low-Medium* (cosmetic, niche screen sizes).

---

## 7. User Feedback Summary

**Pain points:**
- **Data loss anxiety** — Three separate modals silently discard user input (#1468, #1469, #1470). Users are losing agent configurations, system prompts, and MCP server credentials (including API keys) without warning. This is the most critical UX issue.
- **Execution reliability** — Tasks either return nothing (#1496) or terminate randomly (#1495). Users are losing trust in the platform's core execution capability.
- **Workflow friction** — Users cannot queue tasks or run long scripts (#2120), forcing manual babysitting of the agent.

**Use cases observed:**
- Long-running data acquisition scripts monitored by the agent (#2120)
- Multi-agent setups where task ownership clarity matters (#1530 PR)
- Batch session management and export for cowork workflows (#1529 PR)

**Sentiment:** Users are engaged and providing detailed, constructive feedback (screenshots, structured suggestions), but frustration is building around reliability and data-loss issues that have persisted since April without resolution.

---

## 8. Backlog Watch

These stale issues have been open since **April 2026** with minimal maintainer response and represent meaningful UX/reliability gaps:

| Issue | Days Open | Risk |
|---|---|---|
| [#1468](https://github.com/netease-youdao/LobsterAI/issues/1468) — Agent creation unsaved changes | ~64 days | User data loss |
| [#1469](https://github.com/netease-youdao/LobsterAI/issues/1469) — Agent settings unsaved changes | ~64 days | User data loss |
| [#1470](https://github.com/netease-youdao/LobsterAI/issues/1470) — MCP config unsaved changes | ~64 days | **API key loss** |
| [#1495](https://github.com/netease-youdao/LobsterAI/issues/1495) — Random interruption | ~61 days | Core reliability |
| [#1496](https://github.com/netease-youdao/LobsterAI/issues/1496) — Empty task completion | ~61 days | Core functionality |

**Recommendation:** The three unsaved-changes issues (#1468–#1470) should be fast-tracked as a single fix. The execution reliability issues (#1495, #1496) need root-cause investigation and a public status update to maintain community confidence.

---

*Digest generated by OWL for 2026-06-07. Data source: [github.com/netease-youdao/LobsterAI](https://github.com/netease-youdao/LobsterAI)*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-06-07

---

## 1. Today's Overview

Moltis saw modest activity on 2026-06-06, with **3 new issues** filed and **no pull requests or releases**. All three issues remain open and unresolved, indicating the project is in a bug-triage and feature-solicitation phase rather than an active development sprint. The absence of any merged PRs or new releases suggests maintainers may be in a review/backlog-grooming cycle. Overall project health appears stable but with a growing open-issue surface that warrants attention.

---

## 2. Releases

**None.** No new versions were published in the last 24 hours.

---

## 3. Project Progress

**No PRs were merged or closed today.** There is no new feature delivery or bug-fix deployment to report for this cycle.

---

## 4. Community Hot Topics

All three issues are freshly opened (2026-06-06) with minimal engagement so far, but the most commented issue is:

- **[#1112 — Disabling auth doesn't seem to disable auth (Docker)](https://github.com/moltis-org/moltis/issues/1112)** — 1 comment, the only issue with community interaction so far. This signals a **configuration/UX pain point** in Docker deployments where the auth toggle is either non-functional or poorly documented. Users expect a clear on/off switch for authentication in containerized setups, and the current behavior undermines trust in configuration reliability.

The other two issues have zero comments but represent meaningful signals (see sections 5 and 6).

---

## 5. Bugs & Stability

| Severity | Issue | Summary | Fix PR? |
|----------|-------|---------|---------|
| 🔴 **High** | [#1112](https://github.com/moltis-org/moltis/issues/1112) — Auth disable broken in Docker | A core security/configuration feature appears non-functional. Users cannot reliably disable authentication, which is critical for local/dev deployments and trusted-network setups. | ❌ None |
| 🟡 **Medium** | [#1111](https://github.com/moltis-org/moltis/issues/1111) — Archiving a cron session has no visible effect | UI/state-management bug. The archive action provides no feedback, leaving users uncertain whether the operation succeeded. Impacts workflow reliability for scheduled task management. | ❌ None |

**No fix PRs exist for either bug.** Issue #1112 is the most urgent, as it touches security configuration and could block users from deploying Moltis in environments where auth is handled externally.

---

## 6. Feature Requests & Roadmap Signals

- **[#1110 — Keyword to suppress cron job notifications (e.g., `NO_REPLY`)](https://github.com/moltis-org/moltis/issues/1110)**
  - **User need:** Users running frequent cron jobs are overwhelmed by notification noise. They want a lightweight, inline keyword mechanism to suppress output notifications without disabling the job itself.
  - **Roadmap likelihood:** **High.** This is a low-complexity, high-impact quality-of-life improvement that aligns with Moltis's focus on personal AI assistant workflows. A `NO_REPLY` or similar sentinel keyword is a common pattern in similar tools and would be straightforward to implement at the prompt-parsing or cron-execution layer.
  - **Predicted for:** Likely candidate for the next minor release, especially if upvoted by the community.

---

## 7. User Feedback Summary

| Pain Point | Source | Sentiment |
|------------|--------|-----------|
| Auth configuration is unreliable in Docker | [#1112](https://github.com/moltis-org/moltis/issues/1112) | 😟 Frustrated — expected behavior doesn't match actual behavior |
| Cron session management lacks feedback | [#1111](https://github.com/moltis-org/moltis/issues/1111) | 😕 Confused — unsure if actions took effect |
| Cron notification fatigue | [#1110](https://github.com/moltis-org/moltis/issues/1110) | 😤 Annoyed — wants granular control over notifications |

**Key takeaway:** Users are actively using Moltis for **scheduled/automated tasks (cron)** and **Docker-based self-hosted deployments** — two core use cases. The feedback cluster around these areas suggests the project's power-user base is growing, and polish on configuration reliability and notification management is becoming a priority.

---

## 8. Backlog Watch

All three issues are **less than 24 hours old**, so none qualify as long-unanswered. However, early maintainer triage is recommended:

- **[#1112](https://github.com/moltis-org/moltis/issues/1112)** — Already has a community comment; a maintainer response or label assignment would signal that the issue is acknowledged and reduce user frustration.
- **[#1111](https://github.com/moltis-org/moltis/issues/1111)** and **[#1110](https://github.com/moltis-org/moltis/issues/1110)** — Both from the same author (`IlyaBizyaev`), suggesting an engaged user who may have more feedback if these are addressed promptly.

**No stale or long-neglected issues** were flagged in today's data window.

---

*Data source: [github.com/moltis-org/moltis](https://github.com/moltis-org/moltis) | Digest generated: 2026-06-07*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-06-07

**Repository:** [agentscope-ai/CoPaw](https://github.com/agentscope-ai/CoPaw)

---

## 1. Today's Overview

CoPaw saw moderate community activity on 2026-06-07, with **11 issues updated** (9 open, 2 closed) and **no pull requests** opened or merged. No new releases were published. The project is in a **bug-heavy stabilization phase** following the v1.1.9 and v1.1.10 releases, with multiple regressions and UX pain points surfacing from the community. The absence of any PR activity suggests maintainers have not yet begun addressing the current wave of reported issues.

---

## 2. Releases

**None.** No new versions were released today. The latest known version remains **v1.1.10**.

---

## 3. Project Progress

**No PRs were merged or closed today.** There is no visible forward progress on code changes. Two issues were closed, but both were self-resolved or informational:

- **#4984** — User discovered the `/approval approve` command already existed; closed by the author.
- **#4661** — Context-length compression bug from v1.1.8post1; closed (likely superseded by the still-open #4937).

---

## 4. Community Hot Topics

The most commented and active issues reveal clear underlying user needs:

| Issue | Comments | Signal |
|---|---|---|
| **#4661** — [Context compression ignores model config](https://github.com/agentscope-ai/CoPaw/issues/4661) | 6 | Users with large-context models (200K–512K) are being hard-capped at 131K/128K. This is a **core configuration trust issue** — users set a value and the system silently ignores it. |
| **#4937** — [`/compact` ignores `max_input_length`](https://github.com/agentscope-ai/CoPaw/issues/4937) | 5 | Direct continuation of #4661 on v1.1.10. Confirms the bug is **not fixed** and affects multiple model providers (MiniMax M3, DeepSeek). |
| **#4886** — [Add MAX Messenger channel](https://github.com/agentscope-ai/CoPaw/issues/4886) | 2 | Russian-speaking market expansion request. Fits CoPaw's "Every channel" positioning. |
| **#4971** — [Session management is too cumbersome](https://github.com/agentscope-ai/CoPaw/issues/4971) | 2 | UX friction: switching sessions requires too many clicks. Users want a sidebar or quick-switch UI. |

**Underlying needs:** (1) Configuration reliability — users need the system to respect explicit model settings; (2) Session UX — power users managing many sessions need faster navigation; (3) Channel ecosystem growth — regional messenger support.

---

## 5. Bugs & Stability

Ranked by severity:

### 🔴 Critical — Regressions in v1.1.9 / v1.1.10

1. **#4989** — [Local Qwen3.6-27B model hangs indefinitely on v1.1.9/1.1.10](https://github.com/agentscope-ai/CoPaw/issues/4989)
   - **Severity:** Critical. Complete loss of functionality for local vLLM users. Works in v1.1.5.post2, broken in newer versions. No error logs — silent failure.
   - **Fix PR:** None.

2. **#4987** — [Session switch always fails in Coding Mode](https://github.com/agentscope-ai/CoPaw/issues/4987)
   - **Severity:** High. Regression from v1.1.9 → v1.1.10. Coding Mode is a core workflow; broken session switching blocks developer users entirely.
   - **Fix PR:** None.

### 🟠 High — Persistent / Unresolved

3. **#4937** — [`/compact` ignores model `max_input_length`, uses 128K default](https://github.com/agentscope-ai/CoPaw/issues/4937)
   - **Severity:** High. Affects all users with models >128K context. Configuration is silently ignored, leading to premature memory compression and degraded conversation quality.
   - **Fix PR:** None. Related to closed #4661 — suggests the fix was incomplete.

4. **#4988** — [Session filename duplicates session ID, causing Windows `MAX_PATH` overflow](https://github.com/agentscope-ai/CoPaw/issues/4988)
   - **Severity:** Medium-High. Blocks all Windows users with long session IDs or deep directory structures. `PathTooLongException` is a hard crash.
   - **Fix PR:** None.

### 🟡 Medium — UX / Channel Issues

5. **#4990** — [WeCom (企业微信) tool-calling returns error when tool info display is disabled](https://github.com/agentscope-ai/CoPaw/issues/4990)
   - **Severity:** Medium. Affects enterprise WeCom users. Fallback error message is unhelpful.
   - **Fix PR:** None.

6. **#4985** — [File deletion command display doesn't wrap, requires horizontal scroll](https://github.com/agentscope-ai/CoPaw/issues/4985)
   - **Severity:** Low-Medium. UI readability issue.
   - **Fix PR:** None.

---

## 6. Feature Requests & Roadmap Signals

| Issue | Description | Likelihood in Next Version |
|---|---|---|
| **#4886** — MAX Messenger channel | Russian-market messenger integration | Medium — aligns with channel expansion strategy |
| **#4971** — Session sidebar / quick-switch | Reduce clicks to switch conversations | Medium-High — clear UX pain, likely low implementation cost |
| **#4986** — Real-time shell/file output streaming | Show live execution feedback (à la Cursor, Workbuddy) | Medium — frequently requested UX pattern in AI coding tools |

**Prediction:** The next release (likely v1.1.11 or v1.2.0) will prioritize **bug fixes** (context compression, Coding Mode session switching, local model hang) over new features. The session UX improvement (#4971) is a strong candidate as a quick-win feature addition.

---

## 7. User Feedback Summary

**Pain points:**
- **Configuration is not trusted.** Users set `max_input_length` explicitly and the system silently falls back to 128K/131K defaults (#4661, #4937). This erodes confidence in the entire configuration system.
- **Silent failures.** The local model hang (#4989) produces no error logs, leaving users with a spinning loader and no diagnostic path. This is the worst possible failure mode for self-hosted users.
- **Coding Mode regression.** Users who rely on Coding Mode for development workflows are completely blocked (#4987). The fact that it worked in v1.1.9 and broke in v1.1.10 suggests insufficient regression testing.
- **Windows support is an afterthought.** The `MAX_PATH` issue (#4988) indicates Windows path length constraints were not considered in the session file naming design.

**Satisfaction signals:**
- One user (#4984) self-resolved and closed their issue positively, indicating the feature set is comprehensive when discoverable.
- Users are actively testing new model integrations (MiniMax M3, Qwen3.6-27B, DeepSeek v4), showing strong adoption of the multi-model configuration system.

---

## 8. Backlog Watch

Issues that need **maintainer attention** — either long-unanswered or high-impact:

| Issue | Age | Status | Why It Needs Attention |
|---|---|---|---|
| **#4661** — Context compression ignores config | 13 days | Closed but unresolved in practice | Superseded by #4661 but the underlying bug persists in v1.1.10. Needs explicit confirmation of fix scope. |
| **#4937** — `/compact` ignores `max_input_length` | 4 days | Open, 5 comments | Direct duplicate/continuation of #4661. Affects multiple model providers. No maintainer response yet. |
| **#4886** — MAX Messenger channel | 5 days, 2 comments | Open | Feature request with clear market rationale. Needs triage/design discussion. |
| **#4989** — Local model hang on v1.1.9/1.1.10 | 1 day | Open | **Most urgent.** Complete functionality loss for local deployment users. No maintainer acknowledgment. |
| **#4987** — Coding Mode session switch broken | 1 day | Open | Regression in a core workflow. Needs immediate triage. |
| **#4988** — Windows `MAX_PATH` overflow | 1 day | Open | Blocks all Windows users with certain configurations. Likely a one-line fix. |

**Recommendation:** Maintainers should prioritize acknowledging #4989 and #4987 as regressions, and confirm whether #4937 is a duplicate or a distinct issue from the closed #4661. The context compression configuration bug has been open in some form for nearly two weeks with no resolution signal.

---

*Generated by OWL — ZOO Company*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw Project Digest — 2026-06-07

---

## 1. Today's Overview

ZeptoClaw saw modest but focused activity over the past 24 hours, with 2 issues updated (1 opened, 1 closed) and 1 PR still open. The project is in a **binary-size governance phase**: the maintainer is tightening CI gates to enforce a strategic "fits on a robot" size ceiling, primarily targeting aarch64 (Pi/Jetson/Apple silicon). No new releases shipped. Overall health is stable — activity is low-volume but highly intentional, centered on infrastructure hardening rather than feature development.

---

## 2. Releases

**None.** No new versions were published in the last 24 hours.

---

## 3. Project Progress

- **Closed Issue [#612](https://github.com/qhkm/zeptoclaw/issues/612)** — The audit of ~800KB binary-size drift (from a 6.2MB low-water mark) was resolved. The investigation confirmed the current stripped `darwin-arm64` binary sits at ~6.98MB, only 21KB under a 7MB target, prompting the gate to be tightened from the interim 7.5MB ceiling.
- **Open PR [#611](https://github.com/qhkm/zeptoclaw/pull/611)** — Promotes the existing `binary-size` CI job from a push-to-main-only post-mortem check to a **PR-time gate** at 7.5MB. This PR has been open since June 1 and was last updated June 6; it remains unmerged, likely pending the follow-up work tracked in Issue #629.

---

## 4. Community Hot Topics

| Item | Comments | 👍 | Why It Matters |
|---|---|---|---|
| [#612](https://github.com/qhkm/zeptoclaw/issues/612) — Binary-size drift audit | 1 | 0 | Revealed that the project's core value proposition ("fits on a robot") is at risk from gradual binary bloat. |
| [#629](https://github.com/qhkm/zeptoclaw/issues/629) — aarch64 binary-size gate | 0 | 0 | Splits the size gate by architecture: aarch64 at 7MB (the "real robot moat") vs. x86_64 at ~11MB (accepted linker reality). |

**Underlying need:** The project's identity is built on running on resource-constrained edge hardware. The community (driven by the sole maintainer) is proactively preventing silent binary-size regression before it becomes a user-facing problem. The key architectural insight is that **aarch64 is the strategic target**, not x86_64 — the two architectures need separate size budgets.

---

## 5. Bugs & Stability

**No bugs, crashes, or regressions reported today.** All activity is infrastructure/CI-focused. The binary-size drift flagged in [#612](https://github.com/qhkm/zeptoclaw/issues/612) is a **preventive stability concern** (P2-high) rather than a runtime defect — it was closed after the audit confirmed the current state and informed the new gate policy.

---

## 6. Feature Requests & Roadmap Signals

- **Per-architecture binary-size gates** ([Issue #629](https://github.com/qhkm/zeptoclaw/issues/629)): The most likely next change. This would add an `aarch64`-specific 7MB gate alongside the existing x86_64 gate, formalizing the "robot moat" as a first-class CI invariant.
- **Tightening the x86_64 gate from 11MB downward**: Not yet requested, but the audit in #612 suggests the team is aware that even the x86_64 budget has headroom for optimization.

**Prediction:** The next release (likely a patch) will include the dual-architecture size gate from PR #611 + Issue #629, with no user-facing feature changes.

---

## 7. User Feedback Summary

No direct user feedback was recorded in the last 24 hours. The activity is entirely maintainer-driven infrastructure work. However, the **implicit user pain point** being addressed is: *edge-device users need ZeptoClaw to remain small enough to deploy on Raspberry Pi / Jetson / Apple Silicon robots without storage pressure.* The maintainer is treating binary size as a **proxy for user satisfaction** in the embedded/robotics use case.

---

## 8. Backlog Watch

| Item | Age | Risk | Recommendation |
|---|---|---|---|
| [PR #611](https://github.com/qhkm/zeptoclaw/pull/611) — binary-size PR gate | 6 days open, last updated June 6 | **Medium** — This PR enables the gate but at 7.5MB, which Issue #612 identified as too loose. It may need revision or a follow-up PR to lower the ceiling before merging. | Maintainer should decide: merge #611 as-is and follow up with #629, or revise #611 to incorporate the aarch64-specific gate directly. |
| [Issue #629](https://github.com/qhkm/zeptoclaw/issues/629) — aarch64 gate | 1 day old | **Low** — Fresh issue, clearly scoped. | Likely to be addressed in the next PR cycle given its P2-high priority. |

**No long-unanswered items** are present. The backlog is small and actively managed.

---

*Data source: [github.com/qhkm/zeptoclaw](https://github.com/qhkm/zeptoclaw) | Digest generated 2026-06-07*

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

🦉 **ZeroClaw Project Digest — 2026-06-07**

---

## 1. Today's Overview

ZeroClaw is experiencing very high development velocity with 37 issues updated and 50 PRs touched in the last 24 hours. The project is deep in the v0.8.x milestone cycle, with active parallel workstreams on plugin infrastructure (WASM sandbox hardening, remote registry, SDK maturity), security hardening (OIDC auth, tool scoping, secret redaction), and a rapidly expanding plugin ecosystem. Fifteen issues and 5 PRs were closed in the period, indicating healthy triage throughput. No new releases were published, suggesting the team is accumulating changes for a coordinated milestone drop. The overall health signal is **strong** — high engagement, rapid closure of S0/S1 bugs, and architectural trackers (WASM plugins, MCP dashboard, v0.8.x release queue) all actively coordinated.

---

## 2. Releases

**None.** No new versions were published on 2026-06-07. The last visible activity centers on v0.8.0–v0.8.3 milestone trackers and PRs targeting `master`, suggesting the next release is consolidating.

---

## 3. Project Progress (Merged/Closed PRs)

The following PRs were closed/merged in the last 24 hours:

| # | PR | Key Contribution |
|---|-----|-----------------|
| [#7334](https://github.com/zeroclaw-labs/zeroclaw/pull/7334) | `fix(channels/telegram): clamp zero draft update interval` | Closes [#7332](https://github.com/zeroclaw-labs/zeroclaw/issues/7332) — prevents Telegram streaming flood when `draft_update_interval_ms = 0` |
| [#7281](https://github.com/zeroclaw-labs/zeroclaw/pull/7281) | `fix(policy): stop path guard false-positives on heredoc bodies` | Closes [#7133](https://github.com/zeroclaw-labs/zeroclaw/issues/7133) — tilde tokens inside heredoc/stdin data no longer falsely flagged as forbidden paths |
| [#7297](https://github.com/zeroclaw-labs/zeroclaw/pull/7297) | `feat(gateway): per-request agent dispatch for POST /webhook` | Adds `?agent=` query param support to `/webhook`, unifying with `/ws/chat` routing |

Additionally, these issues were closed (indicating merged fixes or resolution): [#7068](https://github.com/zeroclaw-labs/zeroclaw/issues/7068) (Telegram Codex scratchpad leak), [#6875](https://github.com/zeroclaw-labs/zeroclaw/issues/6875) (Llama 4 `<tool_calls>` parser), [#7252](https://github.com/zeroclaw-labs/zeroclaw/issues/7252) (ACP session rehydration kill bypass), [#7299](https://github.com/zeroclaw-labs/zeroclaw/issues/7299) (commitment stale-window cooldown bypass), among others.

---

## 4. Community Hot Topics

### Issues with highest engagement (comments):

1. **[#5601](https://github.com/zeroclaw-labs/zeroclaw/issues/5601)** — **[Feature] Add subscription-native OAuth support for Ollama Cloud, z.ai, Kimi, MiniMax** (7 comments, 👍1)
   - **Underlying need:** Users are fatigued by managing static API keys. They want ZeroClaw's auth experience to match OAuth-native providers (like what already exists for OpenAI, Anthropic). This is a *provider onboarding quality-of-life* request with security implications.
   - **Signal:** Blocked but accepted — likely queued behind v0.9.0 architecture work.

2. **[#7184](https://github.com/zeroclaw-labs/zeroclaw/issues/7184)** — **RFC: Move translated .ftl and .po files into a git submodule** (4 comments)
   - **Underlying need:** i18n translation churn pollutes main repo history. Community maintainers want a clean separation so translation contributions don't create noise in core development.
   - **Signal:** Low-risk infrastructure RFC; low controversy.

3. **[#7141](https://github.com/zeroclaw-labs/zeroclaw/issues/7141)** — **[Feature] OIDC Authentication Provider support** (4 comments)
   - **Underlying need:** Enterprise and self-hosted users want ZeroClaw to integrate with corporate identity providers (Okta, Keycloak, etc.). This is a *gateway/security architecture* addition with P1 priority and accepted status.
   - **Signal:** Targeted for v0.9.0. High strategic value for enterprise adoption.

### PRs with highest activity:

4. **[#7229](https://github.com/zeroclaw-labs/zeroclaw/pull/7229)** — **`feat(web): MCP, Skills, Plugins & Providers dashboard tabs`** (XL, open)
   - Four first-class management dashboard tabs. This is the single largest open PR by scope and directly enables the v0.8.3 milestone [#7320](https://github.com/zeroclaw-labs/zeroclaw/issues/7320).

5. **[#7335](https://github.com/zeroclaw-labs/zeroclaw/pull/7335)** — **`feat(plugins): sandbox isolation — resource limits, SSRF egress guard, env scoping`**
   - Critical security hardening for the WASM plugin system. The plugin sandbox previously had *zero* resource/network bounds despite running untrusted WASM. This is a foundational security fix.

---

## 5. Bugs & Stability

### Closed today (S0–S1 severities):

| Severity | Issue | Status | Fix PR |
|----------|-------|--------|--------|
| **S0** | [#7252](https://github.com/zeroclaw-labs/zeroclaw/issues/7252) — `session/kill` rehydrates ACP sessions from durable history | Closed | Merged |
| **S0** | [#6978](https://github.com/zeroclaw-labs/zeroclaw/issues/6978) — Nested secrets leak in object-array config display | Closed | Merged |
| **S1** | [#7068](https://github.com/zeroclaw-labs/zeroclaw/issues/7068) — Telegram sends Codex scratchpad as final response | Closed | Merged (1 comment) |
| **S1** | [#6875](https://github.com/zeroclaw-labs/zeroclaw/issues/6875) — `<tool_calls>` plural tag not parsed (Llama 4 Scout) | Closed | Merged |
| **S0** | [#7126](https://github.com/zeroclaw-labs/zeroclaw/issues/7126) — Web UI "Clear all" doesn't wipe backend session history | Closed | Merged |

### Open high-severity bugs needing attention:

| Severity | Issue | Age | Notes |
|----------|-------|-----|-------|
| **S1** | [#7312](https://github.com/zeroclaw-labs/zeroclaw/issues/7312) — Bedrock Qwen fails on second prompt | Today | No comments yet; recently filed |
| **S1** | [#7227](https://github.com/zeroclaw-labs/zeroclaw/issues/7227) — Quickstart hardcodes provider alias collision | 2d | Closed (merged fix) |
| **S2** | [#7151](https://github.com/zeroclaw-labs/zeroclaw/issues/7151) — Telemetry leaks tool_call onto chat WebSocket | 4d | Closed (merged fix) |
| **S2** | [#7197](https://github.com/zeroclaw-labs/zeroclaw/issues/7197) — Web toolbar slow + visible cmd windows on Windows | 3d | Closed (merged fix) |

**Assessment:** All S0/S1 bugs from the last 48h have been resolved. The only new S1 bug ([#7312](https://github.com/zeroclaw-labs/zeroclaw/issues/7312)) is hours old and needs triage.

---

## 6. Feature Requests & Roadmap Signals

### Likely in v0.8.x (current cycle):

- **[#7320](https://github.com/zeroclaw-labs/zeroclaw/issues/7320)** — **v0.8.3 MCP dashboard & web/plugin-management surfaces** — PR [#7229](https://github.com/zeroclaw-labs/zeroclaw/pull/7229) is already open and large; this is the most imminent feature.
- **[#7314](https://github.com/zeroclaw-labs/zeroclaw/issues/7314)** — **v0.8.2 WASM plugin program** — Multiple stacked PRs ([#7335](https://github.com/zeroclaw-labs/zeroclaw/pull/7335), [#7336](https://github.com/zeroclaw-labs/zeroclaw/pull/7336), [#7337](https://github.com/zeroclaw-labs/zeroclaw/pull/7337)) actively landing sandbox hardening, signature verification, and tool namespacing.
- **[#6970](https://github.com/zeroclaw-labs/zeroclaw/issues/6970)** — **v0.8.1 integration/channel/provider/tool queue** — Feishu hardening PR [#7256](https://github.com/zeroclaw-labs/zeroclaw/pull/7256) is open.

### Likely in v0.9.0 (next major):

- **[#7141](https://github.com/zeroclaw-labs/zeroclaw/issues/7141)** — OIDC Authentication Provider (P1, accepted, explicitly targeted v0.9.0)
- **[#5601](https://github.com/zeroclaw-labs/zeroclaw/issues/5601)** — Subscription-native OAuth for Ollama Cloud, z.ai, Kimi, MiniMax (P2, blocked/accepted)

### Plugin ecosystem expansion (ongoing):

A remarkable **8 new plugin PRs** were opened in the last 24 hours by `theonlyhennygod`: ACE-Step music generation ([#7331](https://github.com/zeroclaw-labs/zeroclaw/pull/7331)), n8n workflow trigger ([#7328](https://github.com/zeroclaw-labs/zeroclaw/pull/7328)), SD-WebUI image gen ([#7325](https://github.com/zeroclaw-labs/zeroclaw/pull/7325)), Nominatim geocoding ([#7327](https://github.com/zeroclaw-labs/zeroclaw/pull/7327)), LanguageTool grammar ([#7326](https://github.com/zeroclaw-labs/zeroclaw/pull/7326)), Ollama embeddings ([#7324](https://github.com/zeroclaw-labs/zeroclaw/pull/7324)), remove.bg ([#7319](https://github.com/zeroclaw-labs/zeroclaw/pull/7319)), plus a remote plugin registry ([#7333](https://github.com/zeroclaw-labs/zeroclaw/pull/7333)). This signals a **strategic push toward self-hosted, privacy-first tooling** as a competitive differentiator.

---

## 7. User Feedback Summary

**Pain points surfaced today:**

- **Provider auth friction:** Users don't want to manage API keys manually. The demand for subscription-native OAuth ([#5601](https://github.com/zeroclaw-labs/zeroclaw/issues/5601)) and OIDC ([#7141](https://github.com/zeroclaw-labs/zeroclaw/issues/7141)) reflects a desire for ZeroClaw to feel as seamless as consumer AI apps.
- **Plugin trust & security:** Multiple issues ([#5775](https://github.com/zeroclaw-labs/zeroclaw/issues/5775), [#6914](https://github.com/zeroclaw-labs/zeroclaw/issues/6914), [#6915](https://github.com/zeroclaw-labs/zeroclaw/issues/6915), [#6917](https://github.com/zeroclaw-labs/zeroclaw/issues/6917)) highlight that users are deploying skills/plugins in multi-skill environments and need per-skill sandboxing, tool scoping, and temporary elevation — not global `allow_scripts` flags.
- **Web UI polish:** Several bugs ([#7126](https://github.com/zeroclaw-labs/zeroclaw/issues/7126), [#7151](https://github.com/zeroclaw-labs/zeroclaw/issues/7151), [#7156](https://github.com/zeroclaw-labs/zeroclaw/issues/7156), [#7197](https://github.com/zeroclaw-labs/zeroclaw/issues/7197)) reveal that the web dashboard is a primary interaction surface and users expect it to be as reliable as the CLI. All were closed today — good responsiveness.
- **Self-hosted philosophy:** The plugin PRs overwhelmingly target self-hosted backends (Ollama, n8n, SD-WebUI, ACE-Step, Nominatim, LanguageTool). This is a clear signal that ZeroClaw's core user base values data sovereignty.

**Satisfaction indicators:** Rapid closure of S0 bugs, active maintainer engagement on RFCs, and the sheer volume of plugin contributions suggest a healthy, motivated community.

---

## 8. Backlog Watch

These important items have been open for extended periods without resolution:

| Issue | Age | Status | Risk |
|-------|-----|--------|------|
| **[#5601](https://github.com/zeroclaw-labs/zerocaw/issues/5601)** — OAuth for Ollama Cloud, z.ai, Kimi, MiniMax | 57d | Blocked/accepted | Users on these providers are stuck with static keys; growing provider list makes this more urgent |
| **[#5775](https://github.com/zeroclaw-labs/zeroclaw/issues/5775)** — Per-skill security permissions | 53d | Blocked/accepted | Security gap widens as plugin ecosystem grows; directly related to sandbox PRs landing now |
| **[#5908](https://github.com/zeroclaw-labs/zeroclaw/issues/5908)** — Debian container CI/CD builds | 49d | Blocked/accepted | Deployment friction for server users; no container image automation |
| **[#6715](https://github.com/zeroclaw-labs/zeroclaw/issues/6715)** — Delete unneeded branches (200+ stale) | 22d | Blocked/accepted | Repository hygiene; contributor onboarding friction |
| **[#6906](https://github.com/zeroclaw-labs/zeroclaw/issues/6906)** — Improve Nix flake | 13d | Blocked/accepted | Nix users can't install zeroclaw as a package; only gets a toolchain |

**Recommendation:** The per-skill security permissions ([#5775](https://github.com/zeroclaw-labs/zeroclaw/issues/5775)) should be unblocked and prioritized now that the WASM sandbox hardening PRs are landing — the infrastructure it depends on is becoming available. The Nix flake issue ([#6906](https://github.com/zeroclaw-labs/zeroclaw/issues/6906)) is a quick win that would improve the contributor experience.

---

*OWL — ZeroClaw Project Digest — 2026-06-07*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/DenisZheng/agents-radar).*