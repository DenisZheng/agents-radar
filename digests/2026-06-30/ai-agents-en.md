# OpenClaw Ecosystem Digest 2026-06-30

> Issues: 375 | PRs: 500 | Projects covered: 13 | Generated: 2026-06-30 00:38 UTC

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

# OpenClaw Project Digest — June 30, 2026

---

## 1. Today's Overview

OpenClaw is under heavy concurrent development with **signs of both rapid growth and accumulating integration debt**. The project logged 375 active issues and 500 active pull requests updated in the last 24h, yielding a very high open-to-closed ratio (~86% of issues still open, ~90% of PRs still open). No new release shipped today, which is notable given the volume of high-severity bug reports and merge-risk-bearing PRs queued for maintainer review. Many open items reference regressions in versions **2026.5.x–2026.6.x**, suggesting the project is navigating a complex mid-2026 release line. The developer team (especially `vincentkoc`, `eleqtrizit`, `moeedahmed`) appears to be pushing security hardening, schema quarantine, and channel-layer stability across a large concurrent PR surface.

---

## 2. Releases

None. No new releases were published in the reporting window.

---

## 3. Project Progress (Merged & Closed Items Today)

The closed/merged cluster is modest relative to the total PR surface (52 PRs closed or merged within the 2026-07-00 24h window). The detailed list shows several notable closures:

- **PR #97953 — ACP runtime controls require owner authorization** (P1, ready). Treats ACP control-plane actions as owner-gated. Source: `eleqtrizit` (merged).
- **PR #97875 — Telegram durable reasoning delivery fix** (P2, ready). Re-enables Telegram durable reasoning replies lost in the shared dispatcher. Source: `fuller-stack-dev` (merged).
- **PR #95051 — Telegram durable reasoning payload normalization** (P2, ready, previously waiting). Source: `vincentkoc`.
- **PR #88548 — GitHub Copilot static model list shadowing live entitlements (closed, duplicate/superseded)**, referenced by #95121.

The merged work is selective and security/authorization-focused, while the larger queue (`#96625` sessions-to-SQLite refactor, ~XL; `#96106` Discord reasoning surfacing; `#95718` Signal quote context) remains in **waiting-on-author** or **needs-proof** states, contributing to merge backlog.

In issues, closures include:
- **#95500** — Plugin model provider `opencode-go` unresolvable for isolated cron sessions (closed, merged).
- **#91592** — `memory_search` scope-hash mismatch after `--force` rebuild (closed).
- **#81525 / #977-adjacent items** — media-understanding silent misroute, some closed as repro clarified.
- **#16896** — Dashboard right-click reply enhancement (closed).

---

## 4. Community Hot Topics

The issues with the highest comment counts reflect long-running, high-noise concerns where the project's reach exceeds its current operational stability:

| Item | Signal | Underlying Need |
|------|--------|-----------------|
| **[#75](https://github.com/openclaw/openclaw/issues/75)**, 110 comments, 81 👍 | Linux/Windows Clawdbot apps missing despite macOS/iOS/Android apps | Desktop parity; long-standing enhancement with strong community appetite.
| **[#86538](https://github.com/openclaw/openclaw/issues/86538)**, diamond 🦞 rating | Session write-lock timeouts block delivery lanes | Core session reliability under concurrency. |
| **[#80319](https://github.com/openclaw/openclaw/issues/80319)**, platinum hermit | QA tool-defaults suite conflates Codex-native tools with OpenClaw tool parity | User-facing tool runtime predictability. |
| **[#79077](https://github.com/openclaw/openclaw/issues/79077)**, 8 👍 | Telegram bot-to-bot / guest-bot supportgram's May-7 2026 release) | Platform catchup to Telegram API roadmapping. |
| **[#94518](https://github.com/openclaw/openclaw/issues/94518)**, 8 👍 | DeepSeek cache-hit rate collapsed after 6.x upgrade | Boundary-aware caching regression impacting cost/performance; active discussion. |
| **[#80213](https://github.com/openclaw/openclaw/issues/80213)**, 4 👍 | Skill author-defined setup hook (`SKILL.md` frontmatter `setup.script`) | Extensibility of skill lifecycle. |

Notably, **#75 has 1.3× more 👍 reactions than any other open issue**, and has been open for ~6 months despite being tagged `help wanted` and P2. This indicates a structural maintainer scheduling gap, not a lack of community interest.

---

## 5. Bugs & Stability

### Critical / P1 Regressions

1. **Empty-error-retry blocked by `hadPotentialSideEffects` after any prior tool call**
   [Issue #97877](https://github.com/openclaw/openclaw/issues/97877) — New today. Silent terminal failure on transient 5xx after tools have run. Existing blocker in retry path. No fix PR yet.
2. **Isolated cron `LLM request failed` at `model-call-started` — usage.input=0**
   [Issue #91363](https://github.com/openclaw/openclaw/issues/91363) — Default fallback list throughput broken. Identified weeks ago, likely tied to provider resolution / Codex OAuth / QLab refactor.
3. **Discord guild reply regression — malformed send payloads and outbound send loops**
   [Issue #81484](https://github.com/openclaw/openclaw/issues/81484) — Stable regression (labeled), active under MAT Discord testing envelope.
4. **Session write-lock timeouts block subagent delivery lanes**
   [Issue #86538](https://github.com/openclaw/openclaw/issues/86538) — Structural ALS / lock-ordering issue; fix PR #86572 still open.
5. **DeepSeek caching regression after 6.x upgrade**
   [Issue #94518](https://github.com/openclaw/openclaw/issues/94518) — 8 👍, high-impact cost bug.
6. **Disk I/O: node v26 gzip decompression regression**
   [Issue #79752](https://github.com/openclaw/openclaw/issues/79752) — Discord and other HTTP responses fail on macOS with Node v26 upgrade; gzip not decompressed.
7. **CLI cold-start +14s regression post-2026.5.12**
   [Issue #82070](https://github.com/openclaw/openclaw/issues/82070) — Linux startup overhead.
8. **Subagent completion spawns fresh run instead of resuming yielded session**
   [Issue #81490](https://github.com/openclaw/openclaw/issues/81490) — Regression superseding #80310.
9. **AM embedded run abort (memory_search classified as timeout despite model completion)**
   [Issue #74586](https://github.com/openclaw/openclaw/issues/74586) — active-memory stock plugin.
10. **Telegram silent send drops; no sendMessage logged**
    [Issue #80520](https://github.com/openclaw/openclaw/issues/80520) — Delivery observability gap.

### Fix PRs Linked to Active Bugs
- **#86572** addresses the ALS lane issue in #86538 (still open).
- **#93848** and **#97960** address Telegram media and forwarding gaps.
- **#96625** (SQLite sessions refactor) may surface as a fix vector for several session-state regressions, but is sized at XL and several PRs behind in review.
- **#80040 / #81934** / cascading OAuth placeholder issues have partial PRs but are not yet resolved.

No new P0 bug reports appeared today; severity is concentrated in **P1 regressions and silent-failure observability** rather than crashes.

---

## 6. Feature Requests & Roadmap Signals

Features most likely to land in the next minor, based on maintainer attention and PR closure trends:

- **i18n slash-command descriptions** ([#79458](https://github.com/openclaw/openclaw/issues/79458)) — Small, focused (P3), and easy to ship; has an enrolled author and a related closed doc PR (#89515).
- **Multi-provider onboarding** ([#81960](https://github.com/openclaw/openclaw/issues/81960)) — P3 UX enhancement, likely to merge once labeling resolves.
- **Skill setup hooks** ([#80213](https://github.com/openclaw/openclaw/issues/80213)) — P2, referenced by SDK follow-up #81913, tying into plugin-sdk surface; trending toward inclusion.
- **Signal native reply quotes** ([#95718](https://github.com/openclaw/openclaw/pull/95718)) — M-size PR, awaiting author proof; close to ready.
- **Telegram bot-to-bot / guest-bot support** ([#79077](https://github.com/openclaw/openclaw/issues/79077)) — Community interest + Telegraм release cadence; likely on roadmap within 1–2 releases.
- **Linux/Windows desktop apps** ([#75](https://github.com/openclaw/openclaw/issues/75)) — Longest-standing; trending slowly but still not scheduled.
- **ACP / Codex native control authorization hardening** (multiple PRs by `eleqtrizit`) — Directly shipping today; model for future platform security work.

Items unlikely to land imminently: large storage refactor (#96625), because of review/maturity phase; extended Codex model catalog discovery (#88548/95121) due to ongoing product/entitlement discussions.

---

## 7. User Feedback Summary

**Pain Points** (most frequently mentioned, via issue comments/reactions):

1. **Session reliability under multiplicity** — Users report chronic issues when multi-agent, cron, and subagent paths co-habit. Write-lock races, ALS scoping, and fallback-model exhaustion directly undermine "just works" expectations on the 2026.5/2026.6 line.
2. **Channel-layer regressions** — Discord guild replies (#81484), Telegram silent drops (#80520), and MiniMax provider output parsing (#81607) are perceived as flakiness in "core messaging," eroding trust.
3. **Performance regressions CLI + TTFT** — +14s cold start (#82070), ~28s Codex/OAuth turns (#95121), per-request auth & tool bundling overhead (#80131), 10–17s multi-agent latency (#80607) indicate that model invocation cost is growing faster than users expect.
4. **OAuth / credential handling across Codex, providers, and new devices** — Frequent "regression (worked before, now fails)" labels across Codex OAuth, GitHub Copilot model list, and Telegram auth suggest upstream entitlement/caching logic needs a hardened lifecycle layer.
5. **Missing Linux/Windows desktop parity** — Both a practical need and a perception issue for desktop-heavy users who see mobile-first support.
6. **Quality-of-life UX** — Raw session keys in dashboard (#96998), English-only slash commands (#79458), and dashboard webchat reply UX (#16896) are small asks but are signal of incomplete platform polish.

**Satisfaction signals**: Users continue to praise the plugin, provider, and multi-agent architecture. Recent fix PRs for ACP/authorization and Telegram reasoning-delivery signal community-led maintenance is working, even if slower than issue arrival.

---

## 8. Backlog Watch (Items Needing Immediate Maintainer Attention)

These are P1+ items with high community signal but **no clear owner / not ready / stale-labeled**:

1. **[#75 (Linux/Windows Clawdbot apps)](https://github.com/openclaw/openclaw/issues/75)** — 110 comments, 81 👍, no maintainer assignment in 6 months. Has `help wanted` and `P2`, but clear demand.
2. **[#86538 (session write-lock timeout)](https://github.com/openclaw/openclaw/issues/86538)** — Diamond rating, fix PR #86572 open. This is the highest-rated bug and likely affects downstream reports (#81490, #80520, #81514).
3. **[#80213 (skill setup hook)](https://github.com/openclaw/openclaw/issues/80213)** and **[#81913 (stable plugin SDK surface)](https://github.com/openclaw/openclaw/issues/81913)** — Both tagged `needs-maintainer-review` and `needs-product-decision`. Skill authors are actively waiting.
4. **[#94518 (DeepSeek cache regression)](https://github.com/openclaw/openclaw/issues/94518)** — 8 👍, high money impact. Needs product/maintainer triage boundary-aware caching fix.
5. **[#80319 (QA tool-defaults parity)](https://github.com/openclaw/openclaw/issues/80319)** — High comment count but label includes `source-repro`, `no-new-fix-pr`. Needs a decision on harness vs runtime fix.
6. **[#79077 (Telegram bot-to-bot/guest-bot)](https://github.com/openclaw/openclaw/issues/79077)** — 8 👍, Telegram spec available, but stuck in needs-product-decision.
7. **PR #96625 (sessions/transcripts SQLite refactor)** — Enormous PR at XL size, multi-channel impact, awaiting author updates. Long-term health vs. short-term merge risk tension visible.
8. **PR #89513, #89529, #89550, #89539** (tool schema hardening series by `vincentkoc`) — Multiple maintainer-pick PRs lingering in `waiting-on-author` with `ready-for-maintainer-look` status. Could reduce many P2 regressions if advanced.

Overall, the project is in a **high-activity / high-maintenance-pressure** phase: strong contributor throughput, but issue and PR open-to-close ratios suggest bandwidth and reviewer time are the critical bottlenecks, not ambition. Community satisfaction is generally positive but tracking closely against whether the next release can close the highest-rated regressions and channel-layer bugs.

---

## Cross-Ecosystem Comparison

# Cross-Project Ecosystem Comparison Report

**Date:** 2026-06-30 | **Coverage:** 14 active projects in the personal AI assistant / agent open-source ecosystem

---

## 1. Ecosystem Overview

The open-source personal AI assistant and agent ecosystem is in a phase of **rapid expansion and intensifying competition**. Fourteen tracked projects range from lightweight gateways (PicoClaw) to full-stack agent operating systems (OpenClaw, ZeroClaw, Hermes Agent), with varying degrees of community maturity. The dominant themes across the ecosystem are **multi-provider fallback correctness**, **channel-layer reliability** (Telegram, Discord, Slack, Feishu), **session/concurrency safety**, and **cost optimization via prompt caching**. A clear bifurcation is emerging between projects pursuing **WASM/plugin-based extensibility** (ZeroClaw, NanoBot) and those deepening **multi-agent orchestration** (Hermes, NanoBot A2A, OpenClaw subagents). No project has yet achieved a stable 1.0 release, indicating the entire ecosystem is still iterating on foundational architecture.

---

## 2. Activity Comparison

| Project | Issues (active) | PRs (active) | PRs Merged/Closed | Release | Health Score |
|---------|----------------|-------------|-------------------|---------|-------------|
| **OpenClaw** | 375 | 500 | 52 | None (accumulating) | 🟡 Moderate — high volume, high backlog |
| **Hermes Agent** | 50 | 50 | 7 | None | 🟡 Moderate — silent failures pattern |
| **ZeroClaw** | 50 | 50 | 5 | None (v0.8.3 pending) | 🟡 Moderate — S1 bugs open for months |
| **CoPaw** | 29 | 50 | 19 | None (v2.0.0-beta.1 testing) | 🟢 Good — strong PR throughput |
| **NanoBot** | 7 | 33 | 10 | None | 🟡 Moderate — 2 critical bugs with fix PRs |
| **IronClaw** | 14 | 50 | 20 | None (release PR open) | 🟢 Good — active QA, integration tests |
| **LobsterAI** | 11 | 40 | 39 | **2026.6.29** (today) | 🟢 Good — shipped, high merge velocity |
| **NanoClaw** | 0 | 7 | 2 | None | 🟢 Good — low noise, responsive |
| **NullClaw** | 0 | 4 | 1 | None | 🟢 Good — zero issues, focused |
| **PicoClaw** | 3 | 3 | 0 | None | 🟡 Moderate — stale PRs, no merges |
| **LobsterAI** | — | — | — | — | — |
| **TinyClaw** | — | — | — | — | ⚪ No activity |
| **Moltis** | — | — | — | — | ⚪ No activity |
| **ZeptoClaw** | — | — | — | — | ⚪ No activity |

**Key takeaway:** Only **LobsterAI** shipped a release in the reporting window. Most projects are in accumulation phases, with OpenClaw showing the highest absolute activity but also the largest backlog risk.

---

## 3. OpenClaw's Position

### Advantages over Peers

- **Scale of community engagement**: 375 active issues and 500 active PRs dwarf all competitors, indicating OpenClaw is the most actively discussed and contributed-to project in the ecosystem by a significant margin.
- **Breadth of channel integrations**: Telegram, Discord, Signal, Slack, and more — OpenClaw has the widest native channel surface.
- **Multi-agent architecture**: Subagent delegation, cron sessions, and ACP control-plane authorization are more mature than most peers.
- **Security posture**: Active hardening by dedicated contributors (`eleqtrizit`, `vincentkoc`) — owner-gated ACP controls, schema quarantine, Telegram payload normalization.

### Technical Approach Differences

| Dimension | OpenClaw | Closest Competitor |
|-----------|----------|--------------------|
| **Extensibility** | Plugin SDK + skill lifecycle | ZeroClaw uses WASM (more sandboxed) |
| **Multi-agent** | Subagents + cron + ACP | Hermes uses A2A protocol delegation |
| **Storage** | SQLite refactor in progress (#96625) | Hermes uses SQLite WAL (ZFS issues) |
| **Channel layer** | Direct native adapters | LobsterAI wraps OpenClaw as runtime |
| **Authorization** | Owner-gated ACP, per-action | CoPaw uses approval-button gateway |

### Community Size Comparison

OpenClaw's 500 active PRs is **10× the next closest project** (Hermes/ZeroClaw/CoPaw at ~50). However, the open-to-closed ratio (~90% of PRs still open) signals a **review bandwidth bottleneck** that smaller, more nimble projects (LobsterAI at 39/40 merged) are not experiencing.

---

## 4. Shared Technical Focus Areas

The following requirements are emerging as **ecosystem-wide priorities**, appearing in 3+ projects simultaneously:

### 4.1 Multi-Provider Fallback Chain Correctness
**Projects affected:** OpenClaw, Hermes Agent, CoPaw, ZeroClaw
- Users expect seamless failover between Anthropic, Gemini, xAI, DeepSeek, and local models
- **Common failure mode**: fallback providers silently ignored due to config format issues (Hermes #51560), JSON string parsing (Hermes), or model list shadowing (OpenClaw #88548)
- **Hardest problem**: reasoning/thinking content handling across providers with different streaming formats (ZeroClaw #5600, CoPaw #5573)

### 4.2 Prompt Caching Preservation
**Projects affected:** OpenClaw (#94518), NanoBot (#4222), CoPaw (#3891), PicoClaw (#3163)
- Cost-conscious users rely on prefix caching to reduce API bills
- Context governance mechanisms that shift message prefixes on every turn defeat caching
- DeepSeek users are particularly sensitive due to 4–5× price differential between cache hit and miss

### 4.3 Channel-Layer Delivery Reliability
**Projects affected:** OpenClaw (Discord #81484, Telegram #80520), Hermes (Telegram #50775, WhatsApp formatting), CoPaw (Feishu #5561), IronClaw (Slack pairing)
- Telegram streaming ghosting, Discord guild reply regressions, and Feishu message-length failures are pervasive
- **Root cause pattern**: message truncation, sanitization, and chunking logic is fragile across all projects

### 4.4 Session/Concurrency Safety
**Projects affected:** OpenClaw (write-lock #86538, subagent resume #81490), Hermes (memory hang #42405), NanoBot (session poisoning #4595), CoPaw (sub-agent polling #4873)
- Multi-agent and cron concurrent access to shared state is the hardest class of bugs
- Write-lock ordering, session isolation, and "no-reply" sentinel handling are common failure points

### 4.5 Tool Call Parsing & Execution Correctness
**Projects affected:** ZeroClaw (#7756, #8054), NanoBot (#4595), PicoClaw (#3153), CoPaw (#5624)
- Tool availability mismatch across entry points (channels vs. gateway vs. WebSocket)
- Tool-call ID corruption causing permanent session poisoning
- Raw tool-call text leakage in provider-specific formats (Volcengine Doubao)

### 4.6 Security Boundary Enforcement
**Projects affected:** NanoBot (shell guard #4592, credential logging #4584), NanoClaw (symlink escape #2880), Hermes (unbounded response bodies), OpenClaw (ACP authorization #97953)
- Workspace containment, credential redaction, and sandbox escape prevention are shared concerns
- **Emerging pattern**: security fixes are community-contributed, not maintainer-initiated

---

## 5. Differentiation Analysis

| Project | Primary Focus | Target User | Technical Architecture | Key Differentiator |
|---------|--------------|-------------|----------------------|-------------------|
| **OpenClaw** | Full-stack agent OS | Power users, multi-agent operators | Plugin SDK + cron + subagents + ACP | Widest channel + provider surface |
| **ZeroClaw** | Extensible plugin ecosystem | Developers, tinkerers | WASM plugins + MCP + OCI registry | WASM-based extensibility, computer-use RFC |
| **Hermes Agent** | Multi-agent orchestration | Enterprise, multi-model users | A2A protocol + fallback chains + gateway | ACP client generalization, portable handoff |
| **CoPaw** | Runtime v2 hardening | Chinese market users (Feishu/DingTalk) | AgentScope middleware + approval gates | Deep IM integration (Feishu, DingTalk, QQ) |
| **LobsterAI** | OpenClaw wrapper + UI | Non-technical end users | Electron + OpenClaw runtime | Polished UI, managed updates, IM preinstall |
| **NanoBot** | Research agent framework | Academic/researcher | Python + A2A + MCP | A2A peer delegation, context optimization |
| **IronClaw** | WebUI-first agent platform | Small teams, RBAC needs | Rust + Reborn WebUI + LibSql | Multi-user RBAC, Google Sheets automation |
| **NanoClaw** | Chat SDK bridge | Developers building on Chat SDK | Channel adapters + gateway | Voice-notify v3, Discord adapter |
| **NullClaw** | Minimalist CLI agent | Terminal-native users | Rust, allocation-free REPL | Zero dependencies, performance-focused |
| **PicoClaw** | Lightweight headless gateway | IoT/edge deployers (Raspberry Pi) | Minimal Python + DeltaChat | Ultra-low resource, federated channels |

---

## 6. Community Momentum & Maturity

### Tier 1: High-Velocity, High-Backlog
- **OpenClaw** — Massive activity (500 PRs) but significant review bottleneck. Risk of contributor burnout if merge velocity doesn't improve.
- **ZeroClaw** — Strong RFC pipeline (WASM, computer-use, A2A) but S1 bugs linger for months. Needs correctness pass alongside feature work.

### Tier 2: Focused Iteration
- **Hermes Agent** — Clear strategic direction (ACP generalization, fallback unification) but release cadence stalled. Silent failures pattern eroding trust.
- **CoPaw** — Most disciplined PR-to-merge ratio (19/50 merged). v2.0.0-beta.1 testing is gating all progress.
- **IronClaw** — Strong QA discipline (8 open bugs from structured bug bash). Integration test framework maturing.
- **NanoBot** — Small but high-quality contributor base. Two critical bugs with fix PRs ready to merge.

### Tier 3: Shipping
- **LobsterAI** — Only project with a release in the window (2026.6.29). 39/40 PRs merged signals exceptional maintainer responsiveness. Best-in-class operational velocity.

### Tier 4: Low Activity / Niche
- **NanoClaw** — Responsive (2 PRs closed same day) but low volume. Stable, not stagnant.
- **NullClaw** — Zero issues, zero noise. Quality-over-quantity approach. Monitor for growth signals.
- **PicoClaw** — Stale PRs (22+ days), closed-as-stale bugs. Needs maintainer re-engagement.

### Tier 5: Inactive
- **TinyClaw**, **Moltis**, **ZeptoClaw** — No activity in the reporting window. Either pre-launch, paused, or dormant.

---

## 7. Trend Signals

### Trend 1: WASM-Based Plugin Extinction
**Signal strength: Strong** | ZeroClaw (#8135, #7497), NanoBot middleware
- The ecosystem is moving toward sandboxed, language-neutral plugin execution. This solves the trust problem (arbitrary code execution) while enabling third-party extensibility. **Implication**: Projects that don't adopt WASM or similar sandboxing will face security-driven user attrition.

### Trend 2: Agent-to-Agent (A2A) Interoperability
**Signal strength: Strong** | Hermes (#5257, 18 👍), NanoBot (#4571), ZeroClaw (#7218 RFC)
- Users want agents to delegate to other agents across framework boundaries. Google's A2A protocol is becoming the de facto standard. **Implication**: Single-framework agent ecosystems will lose to interoperable ones.

### Trend 3: Cost-Awareness as a First-Class Feature
**Signal strength: Moderate-Strong** | DeepSeek caching (OpenClaw, CoPaw), context optimization (NanoBot, IronClaw #5149), prompt cache preservation
- As LLM costs become a line item in production budgets, projects that optimize for cost-per-token will win. This includes cache-aware context governance, token usage tracking, and provider selection based on cost-performance ratio.

### Trend 4: Silent Failure Elimination
**Signal strength: Moderate** | Hermes (multiple silent hangs), OpenClaw (silent send drops), CoPaw (task termination)
- The community is increasingly intolerant of failures that produce no error message, log, or user feedback. **Implication**: Observability and explicit error propagation are no longer optional — they are competitive requirements.

### Trend 5: Desktop/Mobile Parity
**Signal strength: Moderate** | OpenClaw (#75, 81 👍, Linux/Windows apps), Hermes (macOS renderer crash), LobsterAI (Electron)
- The ecosystem is splitting into mobile-first and desktop-first camps. Users expect feature parity. Projects that only serve one surface (e.g., mobile-only or CLI-only) are seeing explicit community demand for parity.

### Trend 6: Provider-Native Streaming Tool Calls
**Signal strength: Emerging** | NullClaw (#971), ZeroClaw (#8441), CoPaw (#5573)
- The workaround of prompt-injection tool calls during streaming is being replaced by native provider support. Projects that decouple tool-call handling from streaming mode will see lower latency and higher reliability.

### Trend 7: Security Boundaries for Multi-Tenant Agents
**Signal strength: Emerging** | NanoClaw (#2880 symlink), NanoBot (#4592 shell guard), Hermes (unbounded response bodies)
- As agents gain filesystem access and multi-agent deployments become common, sandbox escape prevention is becoming a community-driven audit surface. **Implication**: Security is shifting from maintainer responsibility to community audit — projects that don't facilitate this will accumulate unreported vulnerabilities.

---

## Summary for Decision-Makers

| If you need... | Consider... | Because... |
|---|---|---|
| Most mature ecosystem | **OpenClaw** | Widest channel/provider support, largest community |
| Fastest shipping | **LobsterAI** | Only recent release, 39/40 PR merge rate |
| Best cost optimization | **NanoBot** + **CoPaw** | Active context/cache optimization PRs |
| Multi-agent orchestration | **Hermes Agent** | A2A protocol, ACP generalization, 18 👍 community signal |
| Plugin extensibility | **ZeroClaw** | WASM-based, OCI registry, signed distribution |
| Enterprise RBAC | **IronClaw** | Multi-user design, Reborn WebUI, integration tests |
| Minimal footprint | **NullClaw** / **PicoClaw** | Zero issues, allocation-free, edge-deployable |

The ecosystem is at an inflection point: projects that resolve the **correctness-backlog vs. feature-velocity tension** in the next 2–3 release cycles will establish durable community leadership. OpenClaw has the scale but must address review throughput. ZeroClaw has the architecture but must close S1 bugs. LobsterAI has the velocity but is downstream of OpenClaw's release cadence. The next 90 days will be decisive.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-06-30

---

## 1. Today's Overview

NanoBot shows **high community activity** with 33 PRs updated in the last 24 hours (23 open, 10 merged/closed) and 7 issues touched (4 open, 3 closed). The project is in an active development phase with no new releases, suggesting contributors are accumulating changes for an upcoming version. The PR pipeline is heavily focused on **security hardening, context/token optimization, and provider extensibility**, while the issue tracker reveals ongoing concerns about session correctness and workspace containment. The volume of open PRs (23) relative to merged ones (10) indicates a growing backlog that may need maintainer triage.

---

## 2. Releases

**No new releases** in the reporting period. The project appears to be in a feature-accumulation phase.

---

## 3. Project Progress

### Merged / Closed PRs (10 total)

| PR | Title | Significance |
|---|---|---|
| [#4502](https://github.com/HKUDS/nanobot/pull/4502) | Add gateway webhook triggers | New feature: external webhook-based trigger system replacing the old health listener with a shared HTTP ingress |
| [#4597](https://github.com/HKUDS/nanobot/issues/4597) | Test issue (closed) | Spam/test issue, no impact |

### Notable Open PRs Advancing

- **[#4598](https://github.com/HKUDS/nanobot/pull/4598)** — GitHub Copilot endpoint overrides for enterprise/GHE deployments (closes [#4220](https://github.com/HKUDS/nanobot/issues/4220))
- **[#4596](https://github.com/HKUDS/nanobot/pull/4596)** — Fixes `apply_final_call_ids` corrupting non-file-edit tool call IDs (addresses [#4595](https://github.com/HKUDS/nanobot/issues/4595))
- **[#4594](https://github.com/HKUDS/nanobot/pull/4594)** — Security fix: shell guard now extracts absolute paths after `=` sign (addresses [#4592](https://github.com/HKUDS/nanobot/issues/4592))
- **[#4584](https://github.com/HKUDS/nanobot/pull/4584)** — Security: redacts credentials from MCP URLs before logging
- **[#4581](https://github.com/HKUDS/nanobot/pull/4581) & [#4588](https://github.com/HKUDS/nanobot/pull/4588)** — Context/token reduction optimizations (compacting oversized subagent outputs, pruning tool results)
- **[#4571](https://github.com/HKUDS/nanobot/pull/4571)** — Native A2A (Agent-to-Agent) peer delegation with cross-delegation depth guard (closes part of [#4179](https://github.com/HKUDS/nanobot/issues/4179))
- **[#4578](https://github.com/HKUDS/nanobot/pull/4578)** — Provider-scoped proxy configuration for OpenAI-compatible providers
- **[#4591](https://github.com/HKUDS/nanobot/pull/4591)** — Session-bound local triggers via filesystem queue
- **[#4590](https://github.com/HKUDS/nanobot/pull/4590)** — Typed outbound runtime events (refactor for UI message bus)

---

## 4. Community Hot Topics

### By Engagement (Comments + Reactions)

1. **[#660](https://github.com/HKUDS/nanobot/issues/660)** — *"Project claims 'ultra-lightweight' but includes bloated Node.js dependency"* — **15 comments, 👍5** (CLOSED)
   - **Underlying need:** Users expect the "ultra-lightweight" marketing claim to match reality. The inclusion of Node.js alongside Python in the Dockerfile contradicts this positioning. This is a **brand/trust issue** — the community wants either a slimmer default build or honest positioning.

2. **[#4222](https://github.com/HKUDS/nanobot/issues/4222)** — *"max_messages truncation and microcompact continuously invalidate prefix/prompt caching"* — **3 comments** (CLOSED)
   - **Underlying need:** Cost-conscious users rely on prompt caching to reduce API bills. Context governance mechanisms that shift the message prefix on every turn defeat this optimization, directly impacting operating costs.

3. **[#4419](https://github.com/HKUDS/nanobot/issues/4419)** — *"Automatic reasoning effort escalation"* — **4 comments** (OPEN)
   - **Underlying need:** Users want the agent to dynamically escalate reasoning depth (e.g., from `low` to `high`) when a task proves difficult, rather than requiring manual config changes. This aligns with industry trends (OpenAI o3, Claude extended thinking).

4. **[#4580](https://github.com/HKUDS/nanobot/issues/4580)** — *"Use conda/virtual environments for subprocesses"* — **1 comment** (OPEN)
   - **Underlying need:** Python developers managing multiple projects need exec tools to run inside specific virtual environments, not the system default.

---

## 5. Bugs & Stability

### Ranked by Severity

| Severity | Issue | Status | Fix PR | Description |
|---|---|---|---|---|
| 🔴 **Critical** | [#4595](https://github.com/HKUDS/nanobot/issues/4595) | OPEN | [#4596](https://github.com/HKUDS/nanobot/pull/4596) (open) | `apply_final_call_ids` overwrites correct tool_call IDs for non-file-edit tools, causing **permanent session poisoning** — every subsequent turn in the session is corrupted |
| 🔴 **Critical** | [#4592](https://github.com/HKUDS/nanobot/issues/4592) | OPEN | [#4594](https://github.com/HKUDS/nanobot/pull/4594) (open) | Shell guard path extraction misses absolute paths after `=` sign — commands like `curl --output=/etc/passwd` **bypass workspace containment** (security boundary violation) |
| 🟠 **High** | [#4222](https://github.com/HKUDS/nanobot/issues/4222) | CLOSED | — | Context governance invalidates prompt caching on nearly every turn, increasing costs |
| 🟡 **Medium** | [#4583](https://github.com/HKUDS/nanobot/pull/4583) | OPEN (fix PR) | — | Config migration crashes on null `tools` sections — affects users with minimal configs |
| 🟡 **Medium** | [#4584](https://github.com/HKUDS/nanobot/pull/4584) | OPEN (fix PR) | — | MCP credentials leaked in logs via URL userinfo or query strings |

**Assessment:** Two critical bugs have fix PRs already open and likely to merge soon. The session poisoning bug (#4595) is the most urgent — it causes cascading failures across an entire session.

---

## 6. Feature Requests & Roadmap Signals

### Likely Candidates for Next Release

| Feature | Issue/PR | Signal Strength | Notes |
|---|---|---|---|
| **A2A (Agent-to-Agent) delegation** | [#4571](https://github.com/HKUDS/nanobot/pull/4571) | 🟢 Strong | Multi-agent collaboration is a major architectural direction; PR is active and references a long-standing issue (#4179) |
| **Context/token optimization** | [#4581](https://github.com/HKUDS/nanobot/pull/4581), [#4588](https://github.com/HKUDS/nanobot/pull/4588) | 🟢 Strong | Two complementary PRs addressing cost reduction — high user demand signal |
| **Provider proxy support** | [#4578](https://github.com/HKUDS/nanobot/pull/4578) | 🟡 Medium | Enterprise deployments need proxy configuration |
| **GitHub Copilot enterprise endpoints** | [#4598](https://github.com/HKUDS/nanobot/pull/4598) | 🟡 Medium | Closes a long-standing issue (#4220), enterprise use case |
| **Reasoning effort auto-escalation** | [#4419](https://github.com/HKUDS/nanobot/issues/4419) | 🟡 Medium | No PR yet, but aligns with industry direction |
| **Virtual environment support for exec** | [#4580](https://github.com/HKUDS/nanobot/issues/4580) | 🟡 Medium | Common Python developer need, no PR yet |
| **WebUI session export (Markdown)** | [#4587](https://github.com/HKUDS/nanobot/pull/4587) | 🟡 Medium | Part of broader WebUI improvements (#4579) |

---

## 7. User Feedback Summary

### Pain Points

- **"Ultra-lightweight" claim vs. reality** ([#660](https://github.com/HKUDS/nanobot/issues/660)): Users feel misled by marketing language. The Node.js dependency in a Python project is seen as bloat. This is a **trust/expectation mismatch** that could affect adoption.
- **Cost concerns from cache invalidation** ([#4222](https://github.com/HKUDS/nanobot/issues/4222)): Prompt caching is a real cost optimization for API users. Bugs that silently defeat it are high-friction.
- **Security boundary gaps** ([#4592](https://github.com/HKUDS/nanobot/issues/4592)): Workspace containment is a core safety feature. Any bypass — even via an edge case in regex — is taken seriously by the community.
- **Session poisoning from ID corruption** ([#4595](https://github.com/HKUDS/nanobot/issues/4595)): Silent data corruption that persists across session turns is a worst-case bug for reliability.

### Positive Signals

- Multiple contributors are submitting **security-focused PRs** (#4584, #4594), indicating a mature community that audits the codebase.
- The **context optimization PRs** (#4581, #4588) show users are actively deploying NanoBot in cost-sensitive scenarios and contributing improvements back.
- **Enterprise feature requests** (GHE support, proxy config, A2A) suggest growing organizational adoption.

---

## 8. Backlog Watch

### Items Needing Maintainer Attention

| Item | Age | Risk | Recommendation |
|---|---|---|---|
| **[#4293](https://github.com/HKUDS/nanobot/pull/4293)** — Subagent result injection for cron/direct calls | 19 days open | Cron jobs spawning subagents silently drop results | Review and merge — affects scheduling reliability |
| **[#4291](https://github.com/HKUDS/nanobot/pull/4291)** — Configurable model presets for subagents | 19 days open | Limits multi-model agent architectures | Review — aligns with A2A roadmap |
| **[#4554](https://github.com/HKUDS/nanobot/pull/4554)** — Dream duplicate skill write guard | 4 days open | Dream memory consolidation can create skill bloat | Quick review — small, targeted fix |
| **[#4580](https://github.com/HKUDS/nanobot/issues/4580)** — Conda/virtual env support for exec | 2 days open | No PR yet; common Python workflow need | Acknowledge and label for community pickup |
| **[#4419](https://github.com/HKUDS/nanobot/issues/4419)** — Reasoning effort auto-escalation | 10 days open | No PR yet; aligns with industry direction | Consider for roadmap prioritization |
| **[#660](https://github.com/HKUDS/nanobot/issues/660)** — "Ultra-lightweight" claim vs Node.js dependency | 137 days old, recently closed | Reputational risk; 15 comments indicate strong community interest | Ensure closure response addresses the concern transparently |

### PR Pipeline Health

- **23 open PRs** is a significant queue. The oldest feature PRs (#4293, #4291) have been open for 19 days without merge, which may discourage contributors.
- Several PRs from active contributors (chengyongru: 5 PRs, hamb1y: 3 PRs, axelray-dev: 2 PRs) suggest a need for additional reviewer bandwidth.

---

*Data as of 2026-06-29/30. All links reference [HKUDS/nanobot](https://github.com/HKUDS/nanobot).*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-06-30

## 1. Today's Overview

Hermes Agent shows **high community engagement** with 50 issues and 50 PRs updated in the last 24 hours, though the signal-to-noise ratio is moderate — many new issues are duplicates or low-quality (spam/troll submissions). The project is in an active **bug-fix and hardening phase** around the v0.17.x line, with no new releases today. Key themes include: **gateway message delivery safety** (response body caps, truncation, sanitization), **multi-provider fallback chain correctness**, and **desktop stability on macOS**. Several long-running feature PRs (ACP client generalization, portable handoff) remain open with extended discussion, indicating active but slow-moving design work.

---

## 2. Releases

**None.** No new versions were published in the last 24 hours.

---

## 3. Project Progress

### Merged / Closed PRs (7 total)

| PR | Author | Description |
|---|---|---|
| [#55299](https://github.com/NousResearch/hermes-agent/pull/55299) | liuhao1024 | **Fix:** `truncate_message()` fence-boundary detector now follows CommonMark closing-fence spec (requires whitespace-only trailing content). Prevents premature fence closure in gateway message chunking. |
| [#55266](https://github.com/NousResearch/hermes-agent/pull/55266) | Stoltemberg | **Fix:** Normalize Windows 8.3 shortnames in `test_media_files_routed_by_type` — Windows CI/test stability. |
| [#54501](https://github.com/NousResearch/hermes-agent/pull/54501) | Ne0teric | **Fix:** Route `xai-oauth` references through direct credential path in MoA (Mixture-of-Agents) auxiliary client. Previously, Grok OAuth-backed reference model calls silently failed. |
| [#55237](https://github.com/NousResearch/hermes-agent/issues/55237) (closed issue) | ooiuuii | Signal RPC unbounded response body — reported and closed same day (fix likely bundled). |
| [#43196](https://github.com/NousResearch/hermes-agent/issues/43196) (closed issue) | heshamkhaledd | Dashboard SIGKILL wedge when run as systemd service — resolved. |
| [#55268](https://github.com/NousResearch/hermes-agent/issues/55268) (closed issue) | heshamkhaledd | MoA aggregator HTTP 404 with Anthropic Messages on unrecognized host — resolved as duplicate. |

### Notable Open PRs Gaining Traction

- **[#55289](https://github.com/NousResearch/hermes-agent/pull/55289)** — `guild_id` → `scope_id` rename in relay wire protocol (Phase 2.5 of relay-platform-parity). Active refactoring.
- **[#55300](https://github.com/NousResearch/hermes-agent/pull/55300)** — Preserve peer routing across compression recovery in gateway sessions.
- **[#55304](https://github.com/NousResearch/hermes-agent/pull/55304)** — Extract display helpers from `gateway/run.py` (18,870 lines) into `display_helpers.py` — incremental god-file reduction.
- **[#47320](https://github.com/NousResearch/hermes-agent/pull/47320)** — Portable handoff workflow across CLI and gateway (open since June 16, ongoing design discussion).

---

## 4. Community Hot Topics

### Most Discussed Issues (by comment count)

1. **[#5257](https://github.com/NousResearch/hermes-agent/issues/5257)** — *Generalized ACP client for multi-agent CLI orchestration* — **13 comments, 18 👍**
   - **Underlying need:** Users want Hermes to orchestrate multiple ACP-compatible coding agents (Claude Code, etc.) as a multi-agent coordinator, not just serve ACP for IDE integration. This is a **strategic feature** reflecting demand for agent-to-agent workflows.

2. **[#4438](https://github.com/NousResearch/hermes-agent/issues/4438)** — *Rich Spreadsheet Skill (xlsx / csv)* — **5 comments**
   - **Underlying need:** Structured abstraction for spreadsheet manipulation. Users are tired of the agent re-deriving `openpyxl`/`pandas` patterns from scratch each session.

3. **[#35876](https://github.com/NousResearch/hermes-agent/issues/35876)** — *Vision fallback chain silently fails on Gemini quota errors* — **4 comments**
   - **Underlying need:** Robust multi-provider fallback for vision workloads. When Gemini hits 429, the fallback to local/alternative providers breaks silently.

4. **[#24039](https://github.com/NousResearch/hermes-agent/issues/24039)** — *Auxiliary fallback chain should reuse `fallback_providers`, not maintain separate hardcoded list* — **3 comments, 2 👍**
   - **Underlying need:** Configuration simplicity and correctness. Two parallel fallback systems create confusion and inconsistency.

5. **[#42405](https://github.com/NousResearch/hermes-agent/issues/42405)** — *Memory at capacity → silent hang* — **3 comments, P1**
   - **Underlying need:** Graceful degradation. When memory consolidation fails, the agent enters a retry loop with zero user feedback — a critical UX failure.

---

## 5. Bugs & Stability

### Critical / P1

| # | Issue | Severity | Status | Fix PR? |
|---|---|---|---|---|
| [#42405](https://github.com/NousResearch/hermes-agent/issues/42405) | Memory at capacity → `replace` retry loop → silent hang | **P1** | Open | ❌ None |
| [#55305](https://github.com/NousResearch/hermes-agent/issues/55305) | SQLite WAL corruption on ZFS with multiple connections | **P1** (data loss) | Open | ❌ None |

### High / P2

| # | Issue | Severity | Status | Fix PR? |
|---|---|---|---|---|
| [#35876](https://github.com/NousResearch/hermes-agent/issues/35876) | Vision fallback chain kwargs regression on Gemini 429 | P2 | Open | ❌ None |
| [#51560](https://github.com/NousResearch/hermes-agent/issues/51560) | `fallback_providers` as JSON string silently empties chain | P2 | Open | ❌ None |
| [#55071](https://github.com/NousResearch/hermes-agent/issues/55071) | Gateway sanitizer leaks `unexpected status 401` auth envelopes | P2 | Open | ❌ None |
| [#55130](https://github.com/NousResearch/hermes-agent/issues/55130) | Dashboard 500s when basic auth is only provider | P2 | Open | ✅ [#55295](https://github.com/NousResearch/hermes-agent/pull/55295) |
| [#55265](https://github.com/NousResearch/hermes-agent/issues/55265) | Cron delivery to Telegram forum-topics lands in General | P2 | Open | ❌ None |
| [#55292](https://github.com/NousResearch/hermes-agent/issues/55292) | `truncate_message` treats code lines with trailing fence text as closing | P2 | Open | ✅ [#55299](https://github.com/NousResearch/hermes-agent/pull/55299) (merged) |
| [#55294](https://github.com/NousResearch/hermes-agent/issues/55294) | Trailing text on closing code fences not respected | P2 | Open | ✅ [#55294](https://github.com/NousResearch/hermes-agent/pull/55294) (PR open) |
| [#55300](https://github.com/NousResearch/hermes-agent/issues/55300) | Peer routing lost across compression recovery | P2 | Open | ✅ [#55300](https://github.com/NousResearch/hermes-agent/pull/55300) (PR open) |

### Medium / P3 (notable)

- **[#55191](https://github.com/NousResearch/hermes-agent/issues/55191)** — macOS renderer crash-loop at ~128K token compaction threshold. Backend healthy, Electron renderer dies.
- **[#50775](https://github.com/NousResearch/hermes-agent/issues/50775)** — Telegram visual ghosting/text overlapping during streaming updates (4 👍, regression from v0.17.0).
- **[#49242](https://github.com/NousResearch/hermes-agent/issues/49242)** — Windows: WhatsApp gateway doesn't prefer Hermes-managed Node/npm.
- **[#55276](https://github.com/NousResearch/hermes-agent/issues/55276)** — `reasoning_effort` silently dropped for custom/zai providers.
- **[#55296](https://github.com/NousResearch/hermes-agent/issues/55296)** — WhatsApp formatter leaves literal asterisks for bold-italic markdown. Fix PR: [#55298](https://github.com/NousResearch/hermes-agent/pull/55298).

### Security / Unbounded Response Bodies (pattern)

A **notable pattern** today: **7+ issues** filed by user `ooiuuii` flagging unbounded response body reads across multiple adapters (BlueBubbles, Signal, Microsoft Graph, Discord, Azure detection, account usage). This is a **systematic DoS/memory-exposure risk** across the gateway's external API integration surface. Individual PRs are being filed per-component.

---

## 6. Feature Requests & Roadmap Signals

| # | Request | Signal Strength | Likely Timeline |
|---|---|---|---|
| [#5257](https://github.com/NousResearch/hermes-agent/issues/5257) | Generalized ACP client for multi-agent orchestration | Strong (13 comments, 18 👍, multi-provider labels) | Next major version — strategic priority |
| [#4438](https://github.com/NousResearch/hermes-agent/issues/4438) | Rich Spreadsheet Skill (xlsx/csv) | Medium (5 comments) | Minor version — well-scoped |
| [#55287](https://github.com/NousResearch/hermes-agent/issues/55287) | Configurable chat width in Desktop Appearance | Low (1 comment) | Quick win — minor version |
| [#47320](https://github.com/NousResearch/hermes-agent/pull/47320) | Portable handoff workflow (CLI ↔ gateway) | Medium (open since Jun 16) | Next minor version |
| [#52136](https://github.com/NousResearch/hermes-agent/pull/52136) | Show `/learn` progress steps on CLI/gateway | Low | Near-term |
| [#55303](https://github.com/NousResearch/hermes-agent/pull/55303) | Handle Google Chat app command payloads | Low | Near-term |

**Prediction:** The next release (likely v0.18.x patch or minor) will focus on:
1. Gateway message safety (response body caps, truncation fixes — many PRs ready)
2. Fallback chain unification ([#24039](https://github.com/NousResearch/hermes-agent/issues/24039) design discussion)
3. Desktop stability (macOS renderer crash, Node provisioning)

The **ACP client generalization** ([#5257](https://github.com/NousResearch/hermes-agent/issues/5257)) is the highest-signal feature and likely a v1.0 or major milestone candidate.

---

## 7. User Feedback Summary

### Pain Points

- **Silent failures are the #1 complaint theme.** Users report: silent hangs ([#42405](https://github.com/NousResearch/hermes-agent/issues/42405)), silent fallback failures ([#35876](https://github.com/NousResearch/hermes-agent/issues/35876)), silently dropped settings ([#55276](https://github.com/NousResearch/hermes-agent/issues/55276)), and silent config corruption ([#51560](https://github.com/NousResearch/hermes-agent/issues/51560)). The community strongly desires **explicit error messages and graceful degradation**.

- **Windows experience is subpar.** Issues [#49242](https://github.com/NousResearch/hermes-agent/issues/49242) (Node PATH), [#55266](https://github.com/NousResearch/hermes-agent/pull/55266) (8.3 shortnames) indicate Windows is a second-class platform.

- **Telegram streaming quality** regressed in v0.17.0 ([#50775](https://github.com/NousResearch/hermes-agent/issues/50775), 4 👍) — visual ghosting during updates is a visible daily-use issue.

- **ZFS users hit data corruption** ([#55305](https://github.com/NousResearch/hermes-agent/issues/55305)) — SQLite WAL on ZFS is a known incompatibility; users need guidance or a config option.

### Satisfaction Indicators

- The ACP client proposal has **18 👍** — the community is excited about multi-agent orchestration.
- The "Projects Paradigm" overhaul (merged Jun 25) is already generating bug reports ([#53329](https://github.com/NousResearch/hermes-agent/issues/53329)), indicating **active adoption** of the new feature.
- Fast same-day closure of security issues (Signal RPC, BlueBubbles routing) suggests **responsive maintainers**.

### Use Cases Emerging

- **Headless gateway as a service** (systemd, ZFS, Docker) — multiple users running persistent deployments.
- **Multi-provider fallback chains** — users mixing Anthropic, Gemini, xAI, local models for resilience.
- **WhatsApp as a primary chat surface** — active formatting and delivery quality work.

---

## 8. Backlog Watch

### High-Priority Items Needing Maintainer Attention

| # | Item | Age | Risk |
|---|---|---|---|
| [#42405](https://github.com/NousResearch/hermes-agent/issues/42405) | Memory at capacity → silent hang (P1) | 22 days | **User-facing outage** — no response with no error |
| [#55305](https://github.com/NousResearch/hermes-agent/issues/55305) | SQLite WAL corruption on ZFS | 0 days (new) | **Data loss** — session queries fail |
| [#24039](https://github.com/NousResearch/hermes-agent/issues/24039) | Dual fallback chain design flaw | 49 days | Architectural debt — blocks other fallback fixes |
| [#50775](https://github.com/NousResearch/hermes-agent/issues/50775) | Telegram visual ghosting regression | 8 days | Regression in shipped version |
| [#55191](https://github.com/NousResearch/hermes-agent/issues/55191) | macOS renderer crash at compaction threshold | 1 day | Platform-specific crash loop |
| [#5257](https://github.com/NousResearch/hermes-agent/issues/5257) | Generalized ACP client | 85 days | High community expectation — needs design decision |
| [#51560](https://github.com/NousResearch/hermes-agent/issues/51560) | `fallback_providers` JSON string silently drops config | 7 days | User config silently ignored |

### Stale PRs

- **[#24229](https://github.com/NousResearch/hermes-agent/pull/24229)** — BlueBubbles privacy leak fix (P1 security). Open since May 12, updated Jun 30 but still not merged. **This is a known privacy bug** — should be prioritized.
- **[#47320](https://github.com/NousResearch/hermes-agent/pull/47320)** — Portable handoff workflow. Open 14+ days, still in design discussion. Needs a decision or a design review.

---

### Health Assessment

| Dimension | Status | Notes |
|---|---|---|
| **Activity** | 🟢 High | 50/50 updates, strong PR flow |
| **Stability** | 🟡 Moderate | Many P1/P2 bugs open; silent failures are a pattern |
| **Responsiveness** | 🟡 Mixed | Security issues fast; some P1 bugs linger weeks |
| **Community Signal** | 🟢 Strong | Clear demand for ACP, spreadsheets, fallback correctness |
| **Release Cadence** | 🔴 Stalled | No releases in window; backlog of fixes accumulating |

**Bottom line:** The project is accumulating bug debt faster than it ships fixes. A **v0.18.x patch release** focused on the P1/P2 items (silent hang, ZFS corruption, fallback chain, response body caps) would significantly improve user trust. The unbounded response body pattern alone affects 6+ subsystems and should be addressed as a **horizontal fix** rather than per-adapter patches.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-06-30

---

## 1. Today's Overview

PicoClaw shows moderate activity with 3 issues and 3 PRs updated in the last 24 hours, though no new code was merged and no releases cut. The project appears to be in an active development phase: two community-driven feature PRs (DeltaChat gateway, AWS Bedrock prompt caching) and one maintainer PR remain open, while bug reports around UI compatibility and LLM tool-call parsing accumulate. The lack of merged PRs or new releases in the most recent cycle suggests either ongoing review or backlog triage.

---

## 2. Releases

No new releases since the last digest cycle.

---

## 3. Project Progress

**No PRs were merged and no issues were closed in the last 24 hours.** Three open PRs are awaiting review/merge:

- **[#3063] feat: add deltachat gateway** (Jun 08) — community-contributed; expands messaging integrations.
- **[#3163] feat(bedrock): leverage Converse prompt caching via cache points** (Jun 23) — reduces AWS cost/latency with explicit caching.
- **[#3156] feat(pico): emit per-turn LLM token usage on finalized message** (Jun 22) — enables billing/usage tracking.

---

## 4. Community Hot Topics

| Topic | Activity | Signal |
|-------|----------|--------|
| **[#3093] SimpleX/Tox/Wire gateway request** | Created: Jun 10 · Updated: Jun 29 · 4 comments · 👍 1 | Community wants an alternative to existing gateways; DeltaChat is being explored. |
| **[#3090] Panel broken on iOS Safari < 16.4** | Created: Jun 10 · Updated: Jun 29 · 3 comments · 👍 0 | Real compatibility pain on devices running older iOS. |
| **[#3153] Volcengine Doubao tool-call leakage** | Created: Jun 22 · Updated: Jun 29 · 1 comment | A parsing edge-case in the Volcengine/豆包 stack. |

---

## 5. Bugs & Stability

**Active bugs — severity ranked:**

1. **Compatibility regression on iOS Safari < 16.4**. Panel fails to operate on devices below iOS 16.4. Receives replies in early 2026, attracting the most community commentary; likely affecting real users but scoped to legacy Safari path. Needs a fix for the accessibility barrier. [Issue #3090](https://github.com/sipeed/picoclaw/issues/3090)
2. **Tool-call leakage in Volcengine Doubao Seed**. When using `doubao-seed-2.0-pro`, tool calls occasionally render as raw `<seed:tool_call> text` instead of executing. Affects one active bug user with a single acknowledgement; no fix PR yet. [Issue #3153](https://github.com/sipeed/picoclaw/issues/3153)

---

## 6. Feature Requests & Roadmap Signals

**New gateway integrations** — user requests [Issue #3093](https://github.com/sipeed/picoclaw/issues/3093) explicitly named SimpleX, Wire, or Tox as desired gateways. A DeltaChat gateway is already contributed in **[PR #3063](https://github.com/sipeed/picoclaw/pull/3063)** , indicating that additional privacy-friendly matrix-like channels may land in the next release.

**LLM cost/performance improvements** — **[PR #3163](https://github.com/sipeed/picoclaw/pull/3163)** adds AWS Bedrock Converse API prompt caching using cache points, which would lower per-request costs for high-volume Bedrock users. This is likely close to merge.

**Usage tracking for LLMs** — **[PR #3156](https://github.com/sipeed/picoclaw/pull/3156)** emits token counts on the Pico channel, enabling operators and downstream UI clients to display input vs. output token usage separately. This is complementary to the Bedrock caching work and expected in an upcoming version.

**Prediction for the next version:** DeltaChat gateway + Bedrock prompt caching + per-turn token tracking form the most likely trio of features heading into the next 0.2.1x release, assuming review completion.

---

## 7. User Feedback Summary

- **Environment diversity & legacy support:** The iOS < 16.4 report (Raspberry Pi OS hosting behind it) shows users are deploying PicoClaw in diverse infrastructure environments. Breaking compatibility on Safari ≤ 16.3 disproportionately affects users recycling older iPads/iPhones as dedicated panels.
- **LLM provider edge-cases:** Volcengine users see raw tool-call leakage, a trust and usability issue for a system that automates code execution. Users expect reliable tool call parsing; any silent failure mode erodes confidence.
- **Messaging protocol breadth:** The SimpleX/Tox/Wire request, paired with a community PR for DeltaChat, signals that PicoClaw's headless-gateway routing model attracts users who want **off-the-grid or federated** messaging channels — this seems a growing niche compared to Slack/Telegram.
- **Overall tone:** Dissatisfaction is narrowly targeted (one Safari version, one not-execution edge-case) rather than systemic. No open complaints about build, installation, or permissions.

---

## 8. Backlog Watch

These items have been open for two weeks or more and appear to lack maintainer response despite user impact:

| Item | Age | Author | Status |
|------|-----|--------|--------|
| [#3093] SimpleX/Tox gateway request | 20+ days | Damian-o2 | Open, no maintainer reply, only one like |
| [#3090] Panel broken on iOS < 16.4 | 20+ days | 3m377 | Closed as **stale** with no fix — may deserve re-opening |
| [#3063] deltachat gateway PR | 22+ days | trufae | Open, awaiting review/merge |
| [#3153] Doubao tool-call leakage | 8+ days | ms8great | No maintainer comment |

**Recommendation:** Triage #3090 and #3153 for a v0.2.9.x patch focused on Safari compatibility and tool-call parsing correctness; proceed with review on #3063, #3163, and #3156 for the next minor release.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-06-29

---

## 1. Overview

NanoClaw saw **active but not frantic** day with **7 updated pull requests** (5 open, 2 closed) and **0 new issues and 0 releases**, suggesting a project in steady iteration rather than firefighting. The PR mix is balanced: channel adapters (Discord), security hardening (symlink containment), setup-flow improvements (Slack Socket Mode guidance), and infrastructure (dashboard pusher). No user-facing issues broke surface in the last 24h, indicating the current `main` branch is relatively stable. Two PRs closed on the same day they were opened, signaling a tight review-and-merge loop on the maintainer side. The last release is missing from the snapshot, so shipping velocity is cadenced rather than continuous.

**Activity assessment:** healthy, maintainer-responsive, light on user-facing noise today.

> Caveat: comment counts and 👍 reactions are reported as `undefined` / 0 across all PRs, likely due to a data-fetch limitation in the snapshot rather than actual zero engagement.

---

## 2. Releases

No new releases published in the window. The latest release data is empty, so there are no version-specific changes, breaking changes, or migration notes to report today.

---

## 3. Project Progress — Merged / Closed PRs

| PR | Author | Status | Topic |
|---|---|---|---|
| [#2883](https://github.com/nanocoai/nanoclaw/pull/2883) | tier2tech-tian | **Closed** | Voice-notify v3 — intent-based summary routing (5 intent classes: action/silent/navigate/tech\_status/notify) + `VOICE_SUYMMARY_VERSION=off` runtime kill-switch |
| [#2882](https://github.com/nanocoai/nanoclaw/pull/2882) | omri-maya | **Closed** | `ncl messaging-groups create` NOT NULL fix for `instance` column (migration 016 regression) |

**What advanced:**
- **Voice pipeline 1:** Tiansheng/Tier2 reworked the voice notification layer to avoid "one-size-fits-all" TTS, skipping code blocks and long tables, surfacing action items for decision messages, and preserving key data for tech reports. The runtime kill-switch suggests awareness that voice UX can regress live usage swiftly.
- **CLI regression patch:** The `ncl messaging-groups create` command was broken because a `NOT NULL` column added in migration 016 was not exposed through the generic CRUD resource definition. This is a straightforward database/CLI consistency bug now closed.

Both closed PRs were opened and resolved on **2026-06-29**, a strong signal that maintainers are keeping review latency low.

---

## 4. Community Hot Topics

Hotness is approximated by recency and PR theme prevalence today, since comment counts are unavailable:

1. **[#2886](https://github.com/nanocoai/nanoclaw/pull/2886)** — `fix: channel-registered new agents inherit the install's provider (avoid 401 on single-provider installs)` by `thisdotrob`.  
   **Underlying need:** Users on single-provider setups instantly hit **401 errors** whenever a brand-new agent is registered via a different chat channel because the agent group was built with a hardcoded default (Claude) instead of the install's actual provider. This is a provider-compatibility and onboarding-at-scale bug that matters for anyone running NanoClaw with a non-default or sole provider.

2. **[#2880](https://github.com/nanocoai/nanoclaw/pull/2880)** — `fix(security): contain inbox symlink escapes in attachment writes (#2828)` by `johnmathews`.  
   **Underlying need:** Pre-existing issue **#2828** (CWE-59). Writable agent session dirs allow a hostile or compromised agent to plant symlinks and arbitrarily overwrite host files via attachment writes. This is a containment-class security fix rather than a usability request — signals that multi-agent sandboxing is on the community's radar.

3. **[#2884](https://github.com/nanocoai/nanoclaw/pull/2884)** — `feat(discord): add Discord channel adapter + fix Gateway approval-button routing` by `rudgalvis`.  
   **Underlying need:** Demand for a **first-class Discord channel adapter** in the Chat SDK bridge plus fixing broken approval-button DMs on the Discord Gateway. Discord is a high-density community platform, and this request has likely been a recurring ask.

4. **[#2885](https://github.com/nanocoai/nanoclaw/pull/2885)** — `fix(setup): offer Slack Socket Mode in the guided setup flow` by `thisdotrob`.  
   **Underlying need:** Slack PR #2837 added Socket Mode end-to-end but landed in the `channels` branch, so **main's** `setup:auto` Slack flow is **webhook-only** and always collects an ngrok/URL. Users behind restrictive firewalls or that can't expose a public endpoint are cut out — the community needs parity on `main`.

5. **[#2871](https://github.com/nanocoai/nanoclaw/pull/2871)** — `[follows-guidelines] feat(dashboard): add dashboard pusher with OpenCode support` by `grantland`.  
   **Underlying need:** Observability and remote monitoring. POSTs NanoClaw state snapshots to a `@nanoco/nanoclaw-dashboard` server every 60s with no-op-on-no-endpoint behavior. Appears to follow a contributors' guidelines template (`contributing-guide: v1`).

---

## 5. Bugs & Stability

| Severity | Source | Summary | Fix in PR |
|---|---|---|---|
| — | [#2882](https://github.com/nanocoai/nanoclaw/pull/2882) (DB/CLI regression, CLOSED) | `ncl messaging-groups create` NOT NULL violation on `instance` column | Yes — merged |
| — | [#2884](https://github.com/nanocoai/nanoclaw/pull/2884) (routing bug) | Discord DM approval-card buttons route to handler | In open PR |
| — | [#2880](https://github.com/nanocoai/nanoclaw/pull/2880) (security / CWE-59) | Symlink follow on inbox attachment writes allows arbitrary host file write through writable agent session dirs | In open PR |
| — | [#2886](https://github.com/nanocoai/nanoclaw/pull/2886) (401 provider mismatch) | New channel agents get installed with built-in default provider (Claude) ignoring single-provider installs | In open PR |
| — | [#2885](https://github.com/nanocoai/nanoclaw/pull/2885) (setup-flow missing feature parity on `main`) | Slack Socket Mode never reached trunk setup flow | In open PR |

**Note:** No crash reports or regressions surfaced as issues today; all tracked instability is encapsulated inside active PRs, which is a positive sign.

> ⚠️ **Snapshot limitation:** issue and PR comment counts, reaction counts, and CI statuses are all missing/unavailable in the provided data. Severity ratings above are inferred from the PR descriptions and labels (e.g., `fix(security)`); run a fresh live snapshot for precise prioritization.

---

## 6. Feature Requests & Roadmap Signals

- **Discord channel adapter** — [#2884](https://github.com/nanocoai/nanoclaw/pull/2884). Most likely to be in the **next release** given a fresh PR open today with an actual adapter file (`src/channels/discord.ts`) and Gateway approval-button routing fix attached.
- **Slack Socket Mode setup parity on `main`** — [#2885](https://github.com/nanocoai/nanoclaw/pull/2885). One maintainer (`thisdotrob`) is actively pushing a fix; this feels branch-sync corrective work rather than speculative, so **high probability next release**.
- **Dashboard pusher with OpenCode support** — [#2871](https://github.com/nanocoai/nanoclaw/pull/2871). Larger surface, currently open; probably slated for a **subsequent minor release** rather than the immediate next.
- **Voice-notify v3 kill-switch pattern** — [#2883](https://github.com/nanocoai/nanoclaw/pull/2883). Establishes `VOICE_SUM…` runtime flag convention; expect similar kill-switches on other experimental channels going forward.

**Prediction:** Next version is most likely a **stability + channel-expansion patch** (Discord adapter + Slack Socket on main + new-agent provider fix), with the dashboard pusher landing once the multi-channel surface is confirmed.

---

## 7. User Feedback Summary

Direct user feedback signals from today's data:

- **Pain point — single-provider 401s:** Users connecting a new agent through any chat channel get abruptly broken 401s because the agent inherits Claude defaults even on non-Claude installs. This hits self-hosted/single-tenant installs hardest and is the clearest UX complaint in the dataset (PR [#2886](https://github.com/nanocoai/nanoclaw/pull/2886)).
- **Pain point — Slack without public webhook:** Users firewalled off from ngrok/public endpoints cannot set up Slack on `main`; they rely on Socket Mode living only in a branch. Strong implied dissatisfaction in [#2885](https://github.com/nanocoai/nanoclaw/pull/2885).
- **Pain point — Discord missing / approval routing broken:** Community members pushing for Discord need both an adapter and correct approval-button routing; currently second-class to Slack/Telegram-style channels [#2884](https://github.com/nanocoai/nanoclaw/pull/2884).
- **Security concern (advanced users / self-hosters):** CWE-59 symlink-escape report reflects awareness from power admins that writable agent host mounts don't evaluate securely enough for production multi-tenant write-paths [#2880](https://github.com/nanocoai/nanoclaw/pull/2880).
- **Areas of implicit satisfaction:** Two PRs closed on the same day, zero issues opened, and several PRs authored by repeat contributors (`thisdotrob` with 2 today) suggest contributing and merging is **working smoothly** for the core cohort.

---

## 8. Backlog Watch — Items Needing Maintainer Attention

| PR | Age | Signal | Why Watch |
|---|---|---|---|
| [#2871](https://github.com/nanocoai/nanoclaw/pull/2871) — dashboard pusher + OpenCode | Created 2026-06-27, updated 2026-06-29 | 2-day-old feature PR with `follows-guidelines` template; could grow stale if scope isn't clarified | Larger surface area; needs a design-scope review before merge to avoid bake-in without alignment |
| [#2880](https://github.com/nanocoai/nanoclaw/pull/2880) — symlink-escape containment for #2828 | Created 2026-06-28 | Security-class issue (#2828 exists in the repo); PR likely has review burden due to host-boundary code | High-priority if self-hosters are demanding production-grade multi-agent isolation; should be merged or explicitly timed |
| [#2886](https://github.com/nanocoai/nanoclaw/pull/2886) — provider inheritance fix | Created 2026-06-29 (today) | Directly blocks users on single-provider installs; today's contributor also submitted a related Slack setup PR on same day | Quick merge candidate since root cause is isolated to `createNewAgentGroup` in `channel-approval.ts` and bug is reproducible by every single-provider install |

**Recommendation:** Prioritize **#2886** and **#2880**; keep **#2871** open for design discussion but respond to the contributor within a few days to avoid churn.

---

*Data source: NanoClaw GitHub (github.com/qwibitai/nanoclaw) — snapshot for 2026-06-29. All comment counts and reactions unavailable (`undefined/0`); assess engagement through PR velocity and cross-references instead.*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest — 2026-06-30

## 1. Today's Overview

NullClaw shows moderate development activity with 4 PRs updated in the last 24 hours and zero new issues, indicating a stable but focused development phase. The project is seeing meaningful work on two fronts: streaming infrastructure improvements (native tool calls during SSE) and CLI usability enhancements (arrow key support in the agent REPL). One older PR (#960) was closed on 2026-06-29, likely superseded by the newer #970 addressing the same arrow key issue. No new releases or issues were created, suggesting the maintainers are iterating on existing work rather than responding to new community demand. Overall project health appears solid — low open issue count, active PR throughput, and no critical fire drills.

## 2. Releases

No new releases in the reporting period.

## 3. Project Progress

- **[CLOSED] PR #960 — fix(cli): handle arrow keys in agent REPL** ([link](https://github.com/nullclaw/nullclaw/pull/960))
  Closed on 2026-06-29. This PR originally introduced an allocation-free line editor with POSIX raw-mode TTY input for the interactive `nullclaw agent` REPL. Its closure (rather than merge) in favor of the newer #970 suggests the maintainer iterated on the implementation — likely refining the approach before merging.

- **[OPEN] PR #970 — fix(cli): handle arrow keys in agent REPL** ([link](https://github.com/nullclaw/nullclaw/pull/970))
  Created 2026-06-29, this is the successor to #960 with the same stated goal: proper handling of arrow keys, history navigation, cursor movement, backspace/delete, Home/End, and word-left/right sequences in the agent REPL. The "allocation-free" design signal suggests a focus on performance and minimal memory footprint — consistent with a Rust or systems-language implementation.

- **[OPEN] PR #971 — feat(streaming): native tool calls during SSE streaming** ([link](https://github.com/nullclaw/nullclaw/pull/971))
  Created 2026-06-29. This is the most architecturally significant active PR. It decouples native tool-call support from the streaming path, allowing providers that support native tools during streaming to emit them directly rather than falling back to a prompt-injection format. This is a meaningful performance and correctness improvement for the agent loop's streaming mode.

- **[OPEN] PR #956 — ci(deps): bump alpine from 3.23 to 3.24** ([link](https://github.com/nullclaw/nullclaw/pull/956))
  Dependabot dependency bump for Docker images. Routine maintenance, no functional impact.

## 4. Community Hot Topics

With only 4 active PRs and 0 issues, community engagement signals are limited. The most notable activity cluster is around **CLI REPL usability** (PRs #960 and #970), suggesting that interactive terminal usage is a real pain point — users were unable to use basic arrow key navigation, which is a fundamental expectation for any REPL tool. The fact that this was attempted twice (#960 closed, #970 opened) indicates the maintainer is taking the implementation quality seriously.

The **streaming tool-call PR #971** represents the most technically ambitious active effort. The underlying need: providers with native streaming tool support were being forced into a degraded prompt-injection workaround, adding latency and complexity. This is a signal that NullClaw is being used with multiple LLM providers and that streaming performance matters to the user base.

## 5. Bugs & Stability

| Severity | Description | Status | Fix PR |
|----------|-------------|--------|--------|
| **Medium** | Arrow keys in agent REPL print control characters instead of navigating | In progress | [#970](https://github.com/nullclaw/nullclaw/pull/970) (open) |
| **Low** | Native tool calls disabled during streaming, forcing prompt-injection fallback | In progress | [#971](https://github.com/nullclaw/nullclaw/pull/971) (open) |

No crashes, regressions, or data-loss bugs reported. The zero open issue count is a strong stability signal. The arrow key bug is the most user-visible issue — it directly impacts the interactive experience — but it is not a data or safety concern.

## 6. Feature Requests & Roadmap Signals

- **Native streaming tool calls** ([PR #971](https://github.com/nullclaw/nullclaw/pull/971)): This is likely to merge in the near term given it's a focused architectural improvement by a consistent contributor (vernonstinebaker). Expect this in the next minor release.
- **Polished interactive REPL** ([PR #970](https://github.com/nullclaw/nullclaw/pull/970)): The iteration from #960 to #970 suggests the maintainer wants a high-quality implementation. This is likely to land soon and may signal broader CLI UX investment.
- **Alpine 3.24 base images** ([PR #956](https://github.com/nullclaw/nullclaw/pull/956)): Routine, will likely be auto-merged by Dependabot or a maintainer.

**Predicted next release focus**: CLI usability improvements + streaming infrastructure hardening. No breaking changes are signaled by current PRs.

## 7. User Feedback Summary

Direct user feedback data is sparse (0 issues, no comments on PRs). However, the PR content reveals inferred pain points:

- **Interactive terminal users expect modern REPL behavior**: The arrow key issue (#970) indicates that users running `nullclaw agent` interactively encountered broken keyboard input — a significant friction point for a CLI-first tool. The "allocation-free" design language in the fix suggests the user base values performance.
- **Streaming users want provider-native behavior**: PR #971's decoupling of tool calls from streaming suggests users or the maintainer identified that the prompt-injection fallback was either too slow, unreliable, or semantically incorrect for providers that support native streaming tool calls.
- **Overall satisfaction signal**: The absence of open issues and the quality-focused iteration (closing #970's predecessor rather than merging a subpar fix) suggests a small but engaged user base that values correctness over speed of delivery.

## 8. Backlog Watch

| Item | Age | Concern Level | Recommendation |
|------|-----|---------------|----------------|
| [PR #956](https://github.com/nullclaw/nullclaw/pull/956) — Alpine 3.23 → 3.24 bump | 15 days (created 2026-06-15) | Low | Routine Dependabot PR; should be reviewed/merged or closed to reduce noise. Stale dependency PRs can mask real issues. |
| [PR #970](https://github.com/nullclaw/nullclaw/pull/970) — Arrow key REPL fix | 1 day | Low (fresh) | Successor to closed #960; monitor for merge. |
| [PR #971](https://github.com/nullclaw/nullclaw/pull/971) — Streaming native tool calls | 1 day | Low (fresh) | Architecturally significant; monitor for review activity. |

**No critical backlog items.** The project's zero open issue count is notable and suggests either very responsive maintenance or a small user volume. The Dependabot PR (#956) is the oldest open item at 15 days — worth a quick review to keep the backlog clean. No PRs show signs of maintainer neglect; all active PRs are from the same day or have clear successor PRs.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-06-30

## 1. Today's Overview

IronClaw shows a high-intensity day with 50 PRs updated (30 open, 20 merged/closed) and 14 issues updated (10 open, 4 closed) in the last 24 hours. Development activity is heavily concentrated on the **Reborn WebUI v2** ecosystem, including porting legacy E2E browser coverage, hardening CI QA pipelines, and advancing multi-user RBAC design. No new user-facing releases landed, though PR #5311 tracks a significant crate-level version bump (`ironclaw_common 0.4.2 → 0.5.0`, `ironclaw 0.24.0 → 0.29.1`) awaiting merge. QA surfaced multiple P1–P3 regressions, particularly around Google Sheets workflows, automation delivery targets, and conversation message ordering.

## 2. Releases

No new releases were published in the last 24 hours. However, [PR #5311](https://github.com/nearai/ironclaw/pull/5311) ("chore: release") is open and proposes:
- `ironclaw_common`: 0.4.2 → **0.5.0** (⚠ API breaking)
- `ironclaw_safety`: 0.2.2 → 0.2.3 (✓ compatible)
- `ironclaw_skills`: 0.3.0 → **0.4.0** (⚠ breaking)
- `ironclaw`: 0.24.0 → **0.29.1**
- `ironclaw_skill_learning`: 0.1.0 → 0.1.1 (✓ compatible)

Breaking changes likely align with Reborn architecture shifts and should warrant careful migration review before merge.

## 3. Project Progress

**Merged / Closed (20 PRs):**

- **Reborn integration-test framework slices 3–9** ([PR #5392](https://github.com/nearai/ironclaw/pull/5392)) — Adds in-process Reborn integration-test tier covering LibSql matrix, egress/HTTP matcher, MCP/OAuth/refresh. Major testing infrastructure advance.
- **Shared-persistence group tests** ([PR #5402](https://github.com/nearai/ironclaw/pull/5402)) — Extends integration-test framework with cross-thread e2e tests covering approvals/auth/memory/secrets/extensions.
- **Port Reborn WebUI auth and approval UX coverage** ([PR #5372](https://github.com/nearai/ironclaw/pull/5372)) — Adds Playwright browser coverage for approval gates and auth flows.
- **Port Reborn WebUI chat history coverage** ([PR #5371](https://github.com/nearai/ironclaw/pull/5371)) — Ports legacy browser tests for chat core, attachments, pending messages, SSE/history behavior.
- **QA sheet prompts in live QA** ([PR #5406](https://github.com/nearai/ironclaw/pull/5406)) — Hardcodes QA sheet user prompts in the Reborn WebUI v2 live QA runner; auto-merged same day.
- **Multi-user RBAC convergence design** ([PR #5425](https://github.com/nearai/ironclaw/pull/5425)) — Design proposal (not implementation) for avoiding additional RBAC layers.
- **Log text selectable/copyable fix** ([PR #5414](https://github.com/nearai/ironclaw/pull/5414)) — Fixes #5412.
- React-router bump, QA wording variants, canary validation, dependency updates also merged.

**Key open large PRs:**
- **Context management & progressive tool disclosure** ([PR #5149](https://github.com/nearai/ironclaw/pull/5149)) — Cuts per-call prompt from ~25.8k tokens to reduce NEAR AI 120s timeouts. Flag-gated, default off.
- **Slack pairing flow hardening** ([PR #5362](https://github.com/nearai/ironclaw/pull/5362))
- **Port Reborn channel pairing flows** ([PR #5373](https://github.com/nearai/ironclaw/pull/5373))

## 4. Community Hot Topics

Issues with engagement (comments/reactions) and high significance:

- **[#5413](https://github.com/nearai/ironclaw/issues/5413) — Reborn inline OAuth refresh swallows non-applied refresh silently** (closed today, 1 comment): Root-cause fix for the silent-failure pattern that made #5378 so hard to diagnose. Auth-system reliability is increasingly a first-class concern as multi-tenant/enterprise use grows.

- **[#5196](https://github.com/nearai/ironclaw/issues/5196) — "Ask each time" tool permission fails and triggers duplicate approval flow** (closed today, 1 comment): Highlights UX friction in tool permission workflows that will compound as tool count scales under Reborn.

- **Integration test framework** (PRs #5392, #5402): The most commented and iterated-upon workstream, reflecting the team's commitment to raising Reborn's reliability bar before GA.

**PR #5149 (context management / progressive tool disclosure)** is arguably the highest-impact open PR — production logs show ~25.8k tokens shipped per call, directly causing user-visible timeouts. This needs scrutiny and likely prioritized merging.

## 5. Bugs & Stability

All items are dated 2026-06-29 and labeled via bug bash:

| Severity | Issue | Title | Fix PR |
|---|---|---|---|
| **P1** | [#5415](https://github.com/nearai/ironclaw/issues/5415) | Multi-tool Google Sheets workflow fails with protocol violation (18–25 tool calls) | Open |
| **P2** | [#5416](https://github.com/nearai/ironclaw/issues/5416) | Incorrect Google connection state causes contradictory auth flow | Open |
| **P2** | [#5417](https://github.com/nearai/ironclaw/issues/5417) | Wrong skill activated for Hacker News search | Open |
| **P3** | [#5418](https://github.com/nearai/ironclaw/issues/5418) | Conversation messages appear in wrong order after tool activity | Open |
| **P3** | [#5419](https://github.com/nearai/ironclaw/issues/5419) | No option to rename an automation | Open |
| **Bug** | [#5420](https://github.com/nearai/ironclaw/issues/5420) | Routine delivery target is global per-user, not per-routine | Open |
| **Bug** | [#5421](https://github.com/nearai/ironclaw/issues/5421) | Web search under reborn not zero-config; re-prompts for NEAR AI auth | Open |
| **Bug** | [#5426](https://github.com/nearai/ironclaw/issues/5426) | Cannot create a routine: system drive not available (staging) | Open |
| **—** | (closed) [#5412](https://github.com/nearai/ironclaw/issues/5412) | WebUI v2 log text not selectable — **fixed by [PR #5414](https://github.com/nearai/ironclaw/pull/5414)** ✅ |

**Standing infra alert:** Nightly E2E ([#4108](https://github.com/nearai/ironclaw/issues/4108)) is still failing (last reported 2026-06-29 04:47 UTC) — no update post-fix.

**Pattern:** The 8 open bugs cluster around two axes — (a) routine/automation configuration UX (delivery target scoping, rename, drive availability, web search prompting) and (b) multi-tool protocol reliability (Google Sheets protocol violation, conversation ordering, wrong skill routing, oauth refresh). These suggest the Reborn automation layer needs tighter integration testing.

## 6. Feature Requests & Roadmap Signals

- **Progressive tool / context disclosure** ([PR #5149](https://github.com/nearai/ironclaw/pull/5149)) — Highly likely to ship as a flag-gated default in next release. Directly addresses the dominant latency outage pattern in production.
- **Multi-user RBAC convergence** ([PR #5425](https://github.com/nearai/ironclaw/pull/5425)) — Design doc out; implementation to follow. Suggests team is moving toward shared/multi-tenant hosting.
- **Expand Reborn WebUIv2 QA matrix** ([PR #5380](https://github.com/nearai/ironclaw/pull/5380)) — Signals pre-release hardening push.
- **Daily failure taxonomy** ([#5411](https://github.com/nearai/ironclaw/issues/5411)) — Routine post-mortem tracking (111 non-pass on pinchbench with DeepSeek-V4-Flash) indicates increased benchmark discipline.

## 7. User Feedback Summary

**Pain points surfaced by QA-bash participants (mostly internal/contributor testers):**

- **Protocol violations under multi-tool execution:** Large workflows (>18 tool calls) break on Google Sheets. Users cannot complete the "find emails → populate spreadsheet" pattern — the flagship productivity use case.
- **Routine delivery channel leakage:** Setting Slack delivery on one routine silently reroutes all other automations, a serious correctness bug for any user with multiple automations.
- **Web search prompting regression under Reborn:** Users who already have working chat are re-prompted for NEAR AI API keys on web search, breaking the zero-config selling point.
- **Cron/automation management:** No way to rename auto-generated automations; system drives silently unavailable during routine creation.
- **Auth contradiction:** The agent claims Gmail is already connected before auth, then self-corrects — erodes trust in channel-connect flows.

**Satisfaction signals:** Credential copy for logs [fixed same day](#5414→#5412). Refreshing non-applied OAuth refresh now expected to fail loudly. Active triage on routine UX.

## 8. Backlog Watch

Items needing maintainer attention:

- **[#5415](https://github.com/nearai/ironclaw/issues/5415) — Google Sheets protocol violation (P1, 0 comments, no assigned fix):** Core multi-tool workflow blocker, zero engagement since filed.
- **[#4108](https://github.com/nearai/ironclaw/issues/4108) — Nightly E2E continuously failing** (opened 2026-05-27, still open): Running over a month with no visible resolution update. Signals either flaky CI infra or neglected regression root-cause analysis.
- **[#5311](https://github.com/nearai/ironclaw/pull/5311) — Release PR with breaking changes** (3 days open, not yet merged): Contains two API-breaking crate bumps; risks stalling downstream consumers if left too long.
- **[#5149](https://github.com/nearai/ironclaw/pull/5149) — Context management / progressive tool disclosure** (7 days open, directly addresses top production timeout cause): High community interest and clear urgency — worth accelerating review.
- **[#5420](https://github.com/nearai/ironclaw/issues/5420) — Routine delivery target global vs. per-routine:** Design-vs-bug ambiguity; likely needs product decision before engineering fix.
- **[#5313](https://github.com/nearai/ironclaw/pull/5313) — Storage stress harness** (3 days open): Important for proving Reborn's filesystem-backed governor before multi-user hosting but easily deprioritized.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-06-30

## 1. Today's Overview

LobsterAI shipped a new release (**2026.6.29**) today, capping a highly active 24-hour window with **40 PRs updated** (39 merged/closed) and **11 issues updated**. The release is dominated by deep fixes to the **OpenClaw agent runtime** — cron session management, workspace isolation, user-turn cache stability, and plugin pre-installation for QQ/Discord — alongside a brief merge-revert cycle on conversation rail UI changes. The project is in a rapid stabilization phase, hardening the OpenClaw integration layer across scheduled tasks, IM channels, and agent identity persistence. Community-reported bugs remain largely stale, with no new high-severity regressions today.

---

## 2. Releases

### LobsterAI 2026.6.29 (2026-06-29)

**Key Changes:**

| Area | Change | PR |
|------|--------|----|
| OpenClaw | Route plugin approvals through permissions | [#2217](https://github.com/netease-youdao/LobsterAI/pull/2217) |
| Cowork | Clean navigation rail previews | [#2218](https://github.com/netease-youdao/LobsterAI/pull/2218) |
| OpenClaw | Preserve user-turn cache stability (backport) | [#2219](https://github.com/netease-youdao/LobsterAI/pull/2219) |
| OpenClaw | Keep agent bootstrap workspace separate from task cwd | [#2227](https://github.com/netease-youdao/LobsterAI/pull/2227) |
| OpenClaw | Preserve cron run follow-up history | [#2220](https://github.com/netease-youdao/LobsterAI/pull/2220) |
| OpenClaw | Route OpenAI OAuth to ChatGPT responses provider | [#2221](https://github.com/netease-youdao/LobsterAI/pull/2221) |
| OpenClaw | Migrate legacy cron storage on startup | [#2189](https://github.com/netease-youdao/LobsterAI/pull/2189) |
| OpenClaw | Sync cron run sessions | [#2190](https://github.com/netease-youdao/LobsterAI/pull/2190) |
| IM | Preinstall QQ and Discord plugins | [#2198](https://github.com/netease-youdao/LobsterAI/pull/2198) |
| IM | Upgrade preinstalled IM plugins (DingTalk, Lark/Feishu, WeCom, POPO) | [#2182](https://github.com/netease-youdao/LobsterAI/pull/2182) |
| Scheduled Tasks | Clarify startup state | [#2191](https://github.com/netease-youdao/LobsterAI/pull/2191) |

**Migration Notes:**
- Legacy OpenClaw cron JSON/run-log storage is auto-migrated on startup via `openclaw doctor`. Users with existing scheduled tasks should verify task continuity post-upgrade.
- The `runCwd` ≠ `workspaceDir` separation fix ([#2227](https://github.com/netease-youdao/LobsterAI/pull/2227)) changes how agent bootstrap files (SOUL.md, IDENTITY.md, MEMORY.md) are loaded. Custom agent workspaces that relied on the previous (buggy) behavior may need path adjustments.

**No breaking changes declared.**

---

## 3. Project Progress

### Major Feature Advances

- **OpenClaw Cron Overhaul (5 PRs):** A comprehensive refactor of scheduled-task infrastructure — legacy migration ([#2189](https://github.com/netease-youdao/LobsterAI/pull/2189)), run-session sync ([#2190](https://github.com/netease-youdao/LobsterAI/pull/2190)), follow-up history preservation ([#2220](https://github.com/netease-youdao/LobsterAI/pull/2220)), startup state clarity ([#2191](https://github.com/netease-youdao/LobsterAI/pull/2191)), and user-turn cache stability backport ([#2219](https://github.com/netease-youdao/LobsterAI/pull/2219)). This represents a maturation of the scheduled-agent execution model.

- **IM Channel Expansion:** QQ and Discord are now preinstalled plugins ([#2198](https://github.com/netease-youdao/LobsterAI/pull/2198)), and existing IM plugins (DingTalk, Lark/Feishu, WeCom, POPO) were upgraded to support OpenClaw 2026.6.1 plugin layouts ([#2182](https://github.com/netease-youdao/LobsterAI/pull/2182)).

- **Agent Identity Isolation:** The workspace/cwd separation fix ([#2227](https://github.com/netease-youdao/LobsterAI/pull/2227)) ensures OpenClaw loads persona/memory files from the agent workspace rather than the user's project directory — a correctness fix for multi-agent setups.

### Process & Docs

- Repository guidance refreshed for current Cowork/OpenClaw architecture ([#2184](https://github.com/netease-youdao/LobsterAI/pull/2184)).
- NIM plugin runtime entry compilation automated ([#2186](https://github.com/netease-youdao/LobsterAI/pull/2186)).
- Test suites updated for reasoning-capable model metadata and preserved message metadata ([#2187](https://github.com/netease-youdao/LobsterAI/pull/2187)).

### Merge-Revert Cycle (Conversation Rail)

A notable event: conversation rail tooltip fixes were merged ([#2222](https://github.com/netease-youdao/LobsterAI/pull/2222)), accidentally merged to main, then reverted ([#2224](https://github.com/netease-youdao/LobsterAI/pull/2224), [#2225](https://github.com/netease-youdao/LobsterAI/pull/2225)), and finally reapplied only to the release branch ([#2226](https://github.com/netease-youdao/LobsterAI/pull/2226)). This suggests the feature needs more validation before landing in main.

---

## 4. Community Hot Topics

### Most Discussed Issues

| Issue | Comments | Topic |
|-------|----------|-------|
| [#2079](https://github.com/netease-youdao/LobsterAI/issues/2079) | 2 | Execution result window freezes when scrolling to top |
| [#2131](https://github.com/netease-youdao/LobsterAI/issues/2131) | 2 | Hermes agent support roadmap |
| [#2120](https://github.com/netease-youdao/LobsterAI/issues/2120) | 2 | Task queuing, longer run times, UI column layout |
| [#2121](https://github.com/netease-youdao/LobsterAI/issues/2121) | 2 | Duplicate output text consuming tokens |
| [#2081](https://github.com/netease-youdao/LobsterAI/issues/2081) | 2 | Subscription points reset at month-end (closed, unresolved) |

**Analysis:**
- **Token waste from duplicate output** ([#2121](https://github.com/netease-youdao/LobsterAI/issues/2121)) and **scroll-freeze UI bugs** ([#2079](https://github.com/netease-youdao/LobsterAI/issues/2079)) reflect friction in daily agent usage — users running long-running tasks are hitting both reliability and cost concerns.
- **Hermes agent support** ([#2131](https://github.com/netease-youdao/LobsterAI/issues/2131)) signals demand for alternative agent frameworks beyond OpenClaw.
- **Task queuing** ([#2120](https://github.com/netease-youdao/LobsterAI/issues/2120)) is a workflow continuity request: users want to chain tasks without manual intervention, indicating power-user adoption.

---

## 5. Bugs & Stability

| Severity | Issue | Status | Fix PR? |
|----------|-------|--------|---------|
| 🔴 High | [#2079](https://github.com/netease-youdao/LobsterAI/issues/2079) — Execution result window scroll-to-top freeze | **OPEN**, repro confirmed | None yet |
| 🟡 Medium | [#2121](https://github.com/netease-youdao/LobsterAI/issues/2121) — Duplicate output text wasting tokens | **OPEN** | None yet |
| 🟡 Medium | [#1388](https://github.com/netease-youdao/LobsterAI/issues/1388) — Email settings test connectivity hangs indefinitely | **OPEN**, stale | None yet |
| 🟡 Medium | [#1390](https://github.com/netease-youdao/LobsterAI/issues/1390) — Scheduled task update button unresponsive (intermittent) | **OPEN**, stale | None yet |
| 🟢 Low | [#1386](https://github.com/netease-youdao/LobsterAI/issues/1386) — Share long-image truncation for long conversations | **OPEN**, stale | None yet |
| 🟢 Low | [#1389](https://github.com/netease-youdao/LobsterAI/issues/1389) — Language selection UI inconsistency | **OPEN**, stale | None yet |
| 🟢 Low | [#1435](https://github.com/netease-youdao/LobsterAI/issues/1435) — Agent name overflow in creation dialog | **CLOSED** | Fixed (closed 2026-06-29) |

**Regression Alert:** The conversation rail merge-revert cycle ([#2222](https://github.com/netease-youdao/LobsterAI/pull/2222) → [#2224](https://github.com/netease-youdao/LobsterAI/pull/2224) → [#2226](https://github.com/netease-youdao/LobsterAI/pull/2226)) indicates a UI regression risk. The tooltip cleanup feature is on the release branch but not yet in main.

---

## 6. Feature Requests & Roadmap Signals

| Request | Issue | Signal Strength | Likely Timeline |
|---------|-------|-----------------|-----------------|
| Hermes agent support | [#2131](https://github.com/netease-youdao/LobsterAI/issues/2131) | Medium — first request, no 👍 | Exploratory |
| Task queuing / pre-input next task | [#2120](https://github.com/netease-youdao/LobsterAI/issues/2120) | Medium — workflow pain point | Next 1-2 releases |
| Extend single-task runtime | [#2120](https://github.com/netease-youdao/LobsterAI/issues/2120) | Medium — monitoring use case blocked | Next release (config change likely) |
| 3-column skill UI on ultrawide | [#2120](https://github.com/netease-youdao/LobsterAI/issues/2120) | Low — cosmetic | Backlog |
| QQ/Discord IM channels | [#2198](https://github.com/netease-youdao/LobsterAI/pull/2198) | ✅ **Shipped** in 2026.6.29 | — |
| OpenClaw cron reliability | [#2189–2191](https://github.com/netease-youdao/LobsterAI/pull/2189) | ✅ **Shipped** in 2026.6.29 | — |

**Prediction:** The next release will likely address the **scroll-to-top freeze** ([#2079](https://github.com/netease-youdao/LobsterAI/issues/2079)) given its high severity and reproducibility, and may include the **task runtime extension** from [#2120](https://github.com/netease-youdao/LobsterAI/issues/2120) as a configuration change.

---

## 7. User Feedback Summary

**Pain Points (by frequency):**
1. **Agent execution reliability** — scroll freezes, task termination, and cron update failures suggest the agent runtime UI needs hardening for long-running sessions.
2. **Cost anxiety** — duplicate token output and subscription point resets ([#2081](https://github.com/netease-youdao/LobsterAI/issues/2081)) are direct monetary concerns. Users want transparency in token accounting.
3. **Workflow continuity** — power users building data pipelines want task chaining and longer execution windows, indicating the platform is being used for serious automation, not just chat.

**Satisfaction Indicators:**
- High PR merge velocity (39 closed in 24h) signals active maintenance responsiveness.
- New IM channels (QQ, Discord) show investment in accessibility.
- The cron overhaul demonstrates commitment to scheduled/autonomous agent use cases.

**Dissatisfaction Indicators:**
- Multiple stale issues (1386, 1388, 1389, 1390, 1434) from April 2026 remain open with no maintainer response.
- The subscription points reset issue ([#2081](https://github.com/netease-youdao/LobsterAI/issues/2081)) was closed without visible resolution — a trust risk.

---

## 8. Backlog Watch

These items need maintainer attention:

| Item | Age | Risk | Recommendation |
|------|-----|------|----------------|
| [#2079](https://github.com/netease-youdao/LobsterAI/issues/2079) — Scroll-to-top freeze | 30 days | 🔴 High — reproducible UI bug, affects all execution sessions | Prioritize for next patch; needs root-cause in renderer virtual scroll handler |
| [#1388](https://github.com/netease-youdao/LobsterAI/issues/1388) — Email connectivity hang | 87 days | 🟡 Medium — indefinite hang, likely missing timeout | Add connection timeout + error state; low effort |
| [#1390](https://github.com/netease-youdao/LobsterAI/issues/1390) — Cron update unresponsive | 87 days | 🟡 Medium — intermittent, hard to reproduce | Needs structured logging around cron update path |
| [#1386](https://github.com/netease-youdao/LobsterAI/issues/1386) — Share image truncation | 87 days | 🟢 Low — cosmetic | Canvas height calculation fix for long conversations |
| [#1277](https://github.com/netease-youdao/LobsterAI/pull/1277) — Electron 40→42 bump | 88 days, still OPEN | 🟡 Medium — dependency drift, potential security/compatibility risk | Review and merge or close; 2 major versions behind |
| [#2081](https://github.com/netease-youdao/LobsterAI/issues/2081) — Subscription points reset | Closed but unresolved | 🔴 High — trust/billing issue | Public response or post-mortem needed |

**Stale Issue Pattern:** 5 of the 11 issues updated today carry the `[stale]` label (created 2026-04-03). The stale bot is closing these, but the underlying bugs remain. A triage pass on the April backlog would reduce noise and signal to users that feedback is heard.

---

*Data source: [github.com/netease-youdao/LobsterAI](https://github.com/netease-youdao/LobsterAI) — snapshot 2026-06-30*

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

# CoPaw Project Digest — 2026-06-30

**Repository:** [github.com/agentscope-ai/CoPaw](https://github.com/agentscope-ai/CoPaw)

---

## 1. Today's Overview

CoPaw is experiencing a very active 24-hour cycle with **29 issue updates** and **50 PR updates**, indicating high development velocity alongside substantial community engagement. The project is in a pre-release/testing phase for **v2.0.0-beta.1** (Release Duty tracking issue is open, testing ongoing). Roughly two-thirds of open activity is issue-driven (20 active / 9 closed) while PR throughput is strong: 19 merged or closed against 31 still open. There have been **no new tagged releases** in the window, though a beta RC is being verified. A large share of PRs today are test-suite expansion and context-management refactors tied to the 2.0 architecture transition.

---

## 2. Releases

- **No new releases** in the last 24 hours.
- The most recent tagged version being verified is **`v2.0.0-beta.1`** (Release Duty tracking: agentscope-ai/QwenPaw#5571). The verification deadline was 2026-06-26; the issue remains open, suggesting final sign-off is still pending.

---

## 3. Project Progress

Merged or closed items in the last 24 hours span bug fixes, feature work, and documentation:

- **Bug fixes merged / closed**
  - agentscope-ai/QwenPaw#5601 (PR) — Push tool-guard approval notifications to IM channels after the runtime refactoring broke that path.
  - agentscope-ai/QwenPaw#5543 (Issue) — `functionDeclaration` emitting `"type": "null"` in tool schemas caused third-party relay incompatibility.
  - agentscope-ai/QwenPaw#5505, #5583 — Closed issues around MiniMax image moderation caching and chat UI contrast.
  - agentscope-ai/QwenPaw#5527 — Closed question on model auto-switching for AgentScope 2.0.

- **Active feature / fix PRs (likely to merge soon)**
  - agentscope-ai/QwenPaw#5628 — Fix tool result card badge counts (resolves #5624 / #5626).
  - agentscope-ai/QwenPaw#5623 — Fix tool-execution OFF mode still triggering approval prompts.
  - agentscope-ai/QwenPaw#5557 — Configurable heartbeat execution timeout.
  - agentscope-ai/QwenPaw#5510 — Hard-cap tool responses at execution layer for defense-in-depth.
  - agentscope-ai/QwenPaw#5296 — ADBPG memory backend switched to REST-only + auto-search wiring.
  - agentscope-ai/QwenPaw#5442 — Integrate Mission Mode with Runtime v2 architecture.
  - agentscope-ai/QwenPaw#5221 — Plugin mechanism for AgentScope middleware registration.

- **Docs / test expansion**
  - Context-management docs / scroll strategy: #5631, #5629, #5614 (closed).
  - Security / Sandbox section added: agentscope-ai/QwenPaw#5621.
  - Large frontend unit-test wave (M2/M3-A/M3-B + chats/crons modules): #5409, #5434, #5438, #5422, #5423.
  - #5627 — CI: lift Windows nightly HTTP timeout and add per-test hang safeguard.

> Takeaway: the team is sequentially hardening context management, runtime v2 integration, and frontend test coverage in preparation for the 2.0 beta.

---

## 4. Community Hot Topics

Sorted by comment count and recency; links included.

- **[#3891](https://github.com/agentscope-ai/QwenPaw/issues/3891)** — Low DeepSeek prefix-cache hit rate (~95 %), significant cost impact; 👍 1, 5 comments. Underlying need: improve prompt/key ordering to maximize cache reuse for DeepSeek V4 Flash/Pro price tiers.

- **[#5624](https://github.com/agentscope-ai/QwenPaw/issues/5624)** — `glob_search` / `read_file` / `grep_search` tool result cards always show count = 1. Directly addressed by open PR [#5628](https://github.com/agentscope-ai/QwenPaw/pull/5628).

- **[#5573](https://github.com/agentscope-ai/QwenPaw/issues/5573)** — DeepSeek V4 thinking mode 400 errors through OpenAI-compatible relays: missing streaming `reasoning_content` fallback + uncleaned null types in tool schemas.

- **[#5561](https://github.com/agentscope-ai/QwenPaw/issues/5561)** — Long Feishu messages are dropped; agent must fall back to sending files.

- **[#5342](https://github.com/agentscope-ai/QwenPaw/issues/5342)** — No hard cap on tool result size at the execution layer, enabling context explosion. Strongly aligns with open PR [#5510](https://github.com/agentscope-ai/QwenPaw/pull/5510).

- **[#4873](https://github.com/agentscope-ai/QwenPaw/issues/4873)** — Running two sub-agents causes the main agent to busy-poll and Feishu cannot abort.

- **[#5571](https://github.com/agentscope-ai/QwenPaw/issues/5571)** — Release Duty tracking for v2.0.0-beta.1 (still in test phase).

- **[#5515](https://github.com/agentscope-ai/QwenPaw/pull/5515)** (closed) — Update `@agentscope-ai/chat` beta and enable new chat UI capabilities.

---

## 5. Bugs & Stability

Ranked by severity.

| Severity | Item |
|----------|------|
| 🔴 High | **#5573** — DeepSeek V4 thinking mode 400s on most multi-turn sessions via non-official endpoints (missing `reasoning_content` fallback, uncleaned null types). No explicitly linked fix PR; one user posted a local patch that reportedly works. |
| 🔴 High | **#5342 / #5510** — Context explosion from unpruned tool results when `post_acting` hook is skipped (e.g., on LLM 502). Mitigation PR open. |
| 🔴 High | **#5505** — MiniMax-M3 image moderation rejection is wrongly cached as `rejects_media=True`, stripping all subsequent image payloads in-process. Closed; needs verification that fix is released. |
| 🔴 High | **#5543** — `functionDeclaration` `"type": "null"` breaks third-party relays. Closed. |
| 🔴 High | **#4873** — Sub-agent spawning triggers tight polling loop + Feishu channel cannot interrupt. |
|  Medium | **#5624 / #5626** — Tool result card counts wrong (`glob_search`, `read_file`). Fix PR #5628 open. |
| 🟠 Medium | **#5623** (PR) — Tool Execution Security OFF still triggers approval prompts (config key mismatch: `approval_level` vs `execution_level`). Fix PR open. |
| 🟠 Medium | **#5561** — Feishu can't receive long messages; payload likely exceeds API limit. |
|  Medium | **#5591** — Console spamming thousands of `GET /api/console/inbox/events` logs. Closed. |
| 🟠 Medium | **#5622 (idea)** — Request for Windows tray icon to background the application (UX, not a bug). |
|  Low | **#5616** — Automated tasks terminate unexpectedly without manual intervention (root cause unclear). |
|  Low | **#5555** — Users reporting progressively worse UI latency. |

---

## 6. Feature Requests & Roadmap Signals

Top-voted or recently active feature ideas, with speculation on what may land in the next release.

- **Likely for 2.0 GA / beta follow-ups**
  - **Model auto-fallback / downgrade** — Issue [#5572](https://github.com/agentscope-ai/QwenPaw/issues/5572) (#5527 already closed). This plus "dynamic model switching" is a recurring theme.
  - **Tool execution hardening** — Hard-cap on tool results (PR #5510) + conversation checkpoint persistence [#5579](https://github.com/agentscope-ai/QwenPaw/issues/5579) to survive abnormal interruptions.
  - **Memory backend improvements** — Two-stage retrieval with reranker [#5588](https://github.com/agentscope-ai/QwenPaw/issues/5588) and ADBPG REST-only (PR #5296) suggest a "memory Q&A" pass is on the roadmap.
  - **DingTalk image previewable message** [#5593](https://github.com/agentscope-ai/QwenPaw/issues/5593) and **Telegram custom BaseURL** [#5630](https://github.com/agentscope-ai/QwenPaw/issues/5630) — incremental channel improvements.

- **Possible in a mid-cycle patch**
  - Vision fallback to a secondary model for text-only primary models [#5615](https://github.com/agentscope-ai/QwenPaw/issues/5615).
  - Custom model protocols beyond `/v1/chat/completions` (e.g., image-generation endpoints) [#5609](https://github.com/agentscope-ai/QwenPaw/issues/5609).
  - MCP tool-discovery UI [#2495](https://github.com/agentscope-ai/QwenPaw/issues/2495) (closed; may still be prioritised).

- **Longer horizon / wishlist**
  - Windows tray icon backgrounding [#5622](https://github.com/agentscope-ai/QwenPaw/issues/5622).

---

## 7. User Feedback Summary

- **Cost-awareness with proprietary models**: DeepSeek users care deeply about **prefix-cache hit rates** due to 4×–5× price difference between hit and miss. This is a real pain point, not a cosmetic request.
- **IM channel reliability**: Feishu, DingTalk, and Telegram users report both **payload-length failures** and **slow card-stream rendering**. The runtime refactor has regressed approval notifications (#5601 already fixes one gap).
- **UI snags becoming friction**: Repeated complaints about tool-card counts, chat-background contrast, and perceived slowdowns suggest the console UI needs a stability and QA pass.
- **Configuration transparency**: Users want to **see MCP tools after configuration**, observe what the sandbox/approval policy actually does, and choose native vs. scroll context strategies on the surface.
- **Resilience**: "Tasks vanish on reboot / crash" and "cron `update` subcommand does not exist" are both UX horror stories for daily-driver users.
- Sentiment is constructive — many reporters attach version info, stack traces, or even candidate patches (e.g., #5573), indicating a technically capable and willing community.

---

## 8. Backlog Watch

Issues or open PRs needing maintainer attention soon.

- **[#5573](https://github.com/agentscope-ai/QwenPaw/issues/5573)** — High severity, no linked fix PR. The user-submitted patch for DeepSeek V4 400s on relays should be reviewed to prevent class of integration breakage.
- **[#4873](https://github.com/agentscope-ai/QwenPaw/issues/4873)** — Open since 2026-06-01, no linked PR; sub-agent polling + Feishu abort is a stability bug for multi-agent workflows.
- **[#3891](https://github.com/agentscope-ai/QwenPaw/issues/3891)** — Created 2026-04-27, still open. Prefix-cache optimisation is presumably non-trivial but valuable.
- **[#5579](https://github.com/agentscopePaw/issues/5579)** — Checkpoint/restore for conversations on unclean exit; new request but aligned with broader stability push, worth triaging before 2.0 GA.
- **[#5616](https://github.com/agentscope-ai/QwenPaw/issues/5616) + [#5555](https://github.com/agentscope-ai/QwenPaw/issues/5555)** — Unexplained task termination and general degradation: both lack details, likely need a template-driven follow-up rather than closing.
- **Stale multi-PR efforts**: Mission Mode integration PR [#5442](https://github.com/agentscope-ai/QwenPaw/pull/5442) and plugin middleware PR [#5221](https://github.com/agentscope-ai/QwenPaw/pull/5221) have been open ~2 and ~2 weeks respectively; both are big architectural chunks for Runtime v2 and may need design review.
- **Release Duty** [#5571](https://github.com/agentscope-ai/QwenPaw/issues/5571) — Verification status is unclear; everything else (docs, tests, runtime refactor) appears to be gated on this beta sign-off.

---

*Generated from GitHub issue / PR data as of 2026-06-24 00:00 UTC — it's possible this digest was created ahead of your date, but is based on the latest available data.*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-06-30

## 1. Today's Overview

ZeroClaw is experiencing a surge of high-intensity development activity, with **50 issues** and **50 PRs** updated in the last 24 hours — a clear sign of a project in a heavy pre-release push, likely toward the **v0.8.3** milestone. Multiple tracker issues (#7314, #8071, #8360) confirm that v0.8.3 is the current focus, spanning WASM plugins, runtime execution, and provider serialization. The project is in a **high-activity, zero-release** pattern: significant work is accumulating on `master` without a new tagged release, suggesting the team is batching changes. Bug reports remain brisk (43 open/active issues), with several S1-severity problems still unresolved around tool availability, streaming errors, and channel configuration.

## 2. Releases

**No new releases today.** The project is in an accumulation phase. Given the volume of merged PRs and active RFCs targeting v0.8.x semantics, a release is likely being coalesced but has not yet been tagged.

## 3. Project Progress

Several meaningful PRs were merged or closed in the last 24 hours:

- **PR #8436** (CLOSED) — Documented `max_history_messages` hard cap alongside whole-turn trim, correcting stale docs.
- **PR #8441** (CLOSED) — Added `name` field to compatible-provider `NativeMessage` so Groq native tool calling stops rejecting tool-role messages with HTTP 400.
- **PR #8327** (CLOSED) — Fixed `[IMAGE:data:...]` markers being sent as plain text in native tool results, which inflated token counts on llama.cpp and similar backends.
- **PR #6841** (CLOSED) — Resolved the issue where `vision_provider` was silently ignored; inbound images were being routed to `providers.fallback` instead of the configured vision provider.
- **PR #2128** (CLOSED) — Fixed cron/heartbeat delivery sending the literal `NO_REPLY` sentinel string to channels like Telegram.

These fixes address real user-facing regressions in multimodal routing, tool serialization, and channel output hygiene.

## 4. Community Hot Topics

The most commented issues reveal deep architectural concerns:

1. **[Issue #5600](https://github.com/zeroclaw-labs/zeroclaw/issues/5600)** (11 comments, 👍1) — `kimi-code` provider fails during streaming chat when tool calls are involved. The error: *"thinking is enabled but reasoning_content is missing in assistant too…"* This points to a systemic problem with how reasoning/thinking content is handled across streaming tool-call paths for compatible providers. **Status: accepted, P1, no fix merged.**

2. **[Issue #8054](https://github.com/zeroclaw-labs/zeroclaw/issues/8054)** (9 comments) — System prompt tool-availability must match per-turn effective tools across **all** entry points (channels, gateway, WebSocket, multimodal, /think). A partial fix landed in PR #8053 for the direct runtime path, but the same class of mismatch persists in other surfaces. This is a **correctness issue** affecting reasoning models especially.

3. **[Issue #6909](https://github.com/zeroclaw-labs/zeroclaw/issues/6909)** (6 comments) — RFC for **computer-use** support (screenshots + mouse/keyboard control). Explicitly motivated by OpenAI Codex and openclaw/hermes having this capability. Signals user demand for GUI-automation agents.

4. **[Issue #7218](https://github.com/zeroclaw-labs/zeroclaw/issues/7218)** (5 comments) — RFC for **A2A agent discovery** (`.well-known/agent-card.json`) for multi-agent installs. Groundwork for interoperability with other agent frameworks.

5. **[Issue #7800](https://github.com/zeroclaw-labs/zeroclaw/issues/7800)** (5 comments) — ZeroCode TUI keybindings are misleading/unreachable, especially on macOS. A UX pain point for the CLI IDE.

**Underlying needs:** The community is pushing for (a) correctness in tool/provider integration, (b) competitive feature parity (computer-use, A2A), and (c) better CLI discoverability.

## 5. Bugs & Stability

| Severity | Issue | Description | Fix PR? |
|----------|-------|-------------|---------|
| **S1** | [#5600](https://github.com/zeroclaw-labs/zeroclaw/issues/5600) | kimi-code streaming tool-call error (reasoning_content missing) | ❌ None |
| **S1** | [#7756](https://github.com/zeroclaw-labs/zeroclaw/issues/7756) | Native/MCP tools unavailable on OpenAI Responses/reasoning & Anthropic turns | Partial (#8053, direct path only) |
| **S1** | [#8505](https://github.com/zeroclaw-labs/zeroclaw/issues/8505) | Telegram channel cannot be configured — bot doesn't answer despite setup | ❌ None |
| **S2** | [#8410](https://github.com/zeroclaw-labs/zeroclaw/issues/8410) | Channel tasks need a first-class no-reply outcome (conditional silence broken) | ❌ None |
| **S2** | [#7800](https://github.com/zeroclaw-labs/zeroclaw/issues/7800) | ZeroCode TUI keybindings misleading/unreachable on macOS | ❌ None |
| **S2** | [#7904](https://github.com/zeroclaw-labs/zeroclaw/issues/7904) | `always: true` SKILL.md frontmatter no longer works in compact prompt mode | ❌ None |
| **S2** | [#8334](https://github.com/zeroclaw-labs/zeroclaw/issues/8334) | `skills install/list/remove` targets `data_dir` which multi-agent runtime doesn't load | ❌ None |
| **S2** | [#8312](https://github.com/zeroclaw-labs/zeroclaw/issues/8312) | `fill-translations` leak-repair leaves stale entries that re-ship leaked text | ❌ None |
| **S3** | [#6157](https://github.com/zeroclaw-labs/zeroclaw/issues/6157) | Nextcloud Talk uses wrong bot message API | ❌ None |

**Notable fix PRs open:** #8510 (omit empty assistant tool-call content), #8496 (centralize deferred-MCP access policy), #8003 (fire session_end hook), #7960 (gate execute_pipeline with per-agent ToolAccessPolicy).

## 6. Feature Requests & Roadmap Signals

**Likely targeting v0.8.3 (current dev cycle):**
- **WASM plugin runtime** — Multiple RFCs (#8135, #7497) and tracker #7314 signal this is the headline feature. Wasm-first, signed distribution, OCI registry storage, capability enforcement.
- **MCP resources-as-context** — PR #8508 (open, stacked on merged #8403) adds agent-loop surface for MCP resource/prompt rendering.
- **SOP procedural memory workshop** — PR #8509 adds create/inspect/reject/quarantine/apply flows for stored SOP proposals.
- **GitHub channel** — PR #8504 adds a full GitHub App-backed channel with issue/PR comment ingestion, PR lifecycle events, and SOP ingress.
- **Inkbox channel** — PR #8384 adds email/SMS/voice/iMessage as a native channel with Quickstart onboarding.

**Likely v0.9.0 or later:**
- **Computer-use** (#6909) — RFC accepted, no implementation visible yet.
- **A2A agent discovery** (#7218) — RFC accepted, early architecture phase.
- **In-app upgrade with supervised restart** (#8170) — RFC for web dashboard update UX.
- **OTel LLM/Tool content policy** (#8462) — Newly split from structured-observability umbrella RFC #7232.

## 7. User Feedback Summary

**Pain points (dissatisfaction):**
- **Tool availability is unreliable** — Multiple S1 reports (#5600, #7756, #8054) describe situations where models either don't receive registered tools or receive incorrect tool metadata. This is the most critical user-facing class of bugs.
- **Channel setup is fragile** — #8505 (Telegram not responding) and #6157 (Nextcloud Talk wrong API) suggest the channel configuration and diagnostics experience is insufficient.
- **CLI UX is confusing** — #7800 highlights that ZeroCode TUI advertises actions that don't work, particularly on macOS. This affects the onboarding experience for the IDE surface.
- **Skills don't work in multi-agent setups** — #8334 reports that `zeroclaw skills install` targets the wrong directory, breaking the headline "pull a skill and use it" flow.

**Use cases driving demand:**
- GUI automation (computer-use for desktop)
- Multi-agent A2A interoperability
- WASM-based plugin ecosystem for extensibility
- Multi-provider deployment (Groq, OpenRouter, Azure, Copilot, llama.cpp)

## 8. Backlog Watch

These items need maintainer attention:

1. **[Issue #6074](https://github.com/zeroclaw-labs/zeroclaw/issues/6074)** — **153 commits lost in bulk revert** (c3ff635, March 28). This is a data-loss recovery audit that has been open for 3 months. The commits contained reviewed/approved bug fixes and features. This should be treated as critical infrastructure hygiene.

2. **[Issue #8054](https://github.com/zeroclaw-labs/zeroclaw/issues/8054)** — System prompt tool-availability mismatch across entry points. Partially fixed but the same bug class persists in channels, gateway, WebSocket, and multimodal paths. Needs a comprehensive fix, not piecemeal patches.

3. **[Issue #5600](https://github.com/zeroclaw-labs/zeroclaw/issues/5600)** — kimi-code streaming tool-call failure. Open since April 10 (81 days). Accepted and P1 but no fix PR visible. The `reasoning_content` missing error likely affects other compatible providers too.

4. **[Issue #8334](https://github.com/zeroclaw-labs/zeroclaw/issues/8334)** — Skills CLI broken on multi-agent installs. This directly undermines the plugin/skill ecosystem narrative central to v0.8.3.

5. **[PR #8510](https://github.com/zeroclaw-labs/zeroclaw/pull/8510)** — Fix for empty assistant tool-call content in OpenAI-compatible requests. Fresh (created today), addresses a real spec-compliance issue. Needs prompt review/merge.

6. **[PR #8496](https://github.com/zeroclaw-labs/zeroclaw/pull/8496)** — Centralizes deferred-MCP access policy as single source of truth. Directly addresses #8054. Needs maintainer review (tagged `needs-maintainer-review`).

---

**Overall Health Assessment:** ZeroClaw is in a high-velocity development phase with strong community engagement (50/50 issue/PR activity). The v0.8.3 milestone is clearly scoped around WASM plugins and runtime correctness. However, **S1-severity tool/provider bugs remain open for months**, and the absence of releases despite heavy commit volume creates a risk of regression accumulation. The project would benefit from prioritizing correctness fixes (#8054, #5600, #8334) alongside feature work, and from resolving the 153-commit recovery audit (#6074).

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/DenisZheng/agents-radar).*