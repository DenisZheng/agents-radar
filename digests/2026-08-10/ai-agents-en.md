# OpenClaw Ecosystem Digest 2026-08-10

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-08-10 01:13 UTC

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

# OpenClaw Project Digest — 2026-08-10

---

## 1. Today's Overview

OpenClaw shows **exceptionally high development velocity** with 500 issues and 500 PRs updated in the last 24 hours — a volume suggesting either a major release push, automated bot activity, or coordinated triage sprint. The open/active issue count (428) dwarfs closed (72), and open PRs (324) exceed merged/closed (176), indicating a growing backlog. Critically, **no new releases** have been cut despite this churn. The issue landscape is dominated by **P1/P0 reliability bugs** — silent reply failures, session state corruption, message loss, and cross-channel duplicate delivery — many carrying the highest severity labels (🦞 diamond lobster, 🐚 platinum hermit). Multiple regressions from recent 6.x/7.x versions remain unresolved, and several "closed" issues (e.g., #116277 DeepSeek silent failure) show recurrence, suggesting fix validation gaps.

---

## 2. Releases

**No new releases** published in the last 24 hours. The latest stable appears to be `2026.7.x` series with `2026.7.2-beta.5` noted in issues. Operators upgrading from `2026.5.28 → 2026.6.1` report silent cron store migrations to SQLite with breaking config defaults (#90378). The `2026.7.1` update reportedly left managed installs pointing at old embedded Node runtimes (#107207).

---

## 3. Project Progress (Merged/Closed PRs Today)

176 PRs merged/closed in 24h — notable merges include:

| PR | Area | Summary |
|----|------|---------|
| [#110261](https://github.com/openclaw/openclaw/pull/110261) | ACP/Gateway | Fixed bound follow-up turns failing to reach external harnesses (Claude, Codex, Gemini) — resolved session-key misrouting |
| [#121310](https://github.com/openclaw/openclaw/pull/121310) | Tests | Removed low-value assertion-free session history test |
| [#121295](https://github.com/openclaw/openclaw/pull/121295) | Agents | Stage 1 refactor: moved swarm family into `src/agents/subagents/swarm/` for clearer ownership |

**Pattern**: Most merged PRs are small/refactor/cleanup. **Zero** major feature PRs or high-severity bugfix PRs show as merged today — the 176 count likely includes automated dependency updates, doc fixes, and test maintenance.

---

## 4. Community Hot Topics (Most Active Issues/PRs)

### Top Issues by Comment Count

| Issue | Comments | Severity | Core Problem |
|-------|----------|----------|--------------|
| [#116277](https://github.com/openclaw/openclaw/issues/116277) **CLOSED** | 196 | 🦞 Diamond Lobster | DeepSeek v4 Flash silent reply failure — "No reply generated" fallback posted. **Recurring per #121058** |
| [#121058](https://github.com/openclaw/openclaw/issues/121058) | 19 | 🦞 Diamond Lobster | Silent reply failures **still occurring after #116277 closed** — monitoring cron logs new occurrences daily |
| [#92201](https://github.com/openclaw/openclaw/issues/92201) | 21 | 🦪 Silver Shellfish | Embedded runner: Anthropic thinking signatures invalid on replay; recovery wrapper never fires (genericized error text) |
| [#22438](https://github.com/openclaw/openclaw/issues/22438) | 19 | 🌊 Off-Meta Tidepool | Tiered bootstrap file loading for progressive context control — bootstrap files consume tokens on every session |
| [#91009](https://github.com/openclaw/openclaw/issues/91009) | 18 | 🐚 Platinum Hermit | Codex PreToolUse hook relay spawns CPU-bound `openclaw-hooks` processes, stalls gateway RPC (~100% CPU each) |
| [#45740](https://github.com/openclaw/openclaw/issues/45740) | 16 | 🐚 Platinum Hermit | **Security**: `gh-issues` skill injects raw GitHub issue bodies into sub-agent prompts without sanitization |
| [#48003](https://github.com/openclaw/openclaw/issues/48003) | 16 | 🦞 Diamond Lobster | Steer mode doesn't inject messages mid-turn for main sessions — queued until turn completes |
| [#10659](https://github.com/openclaw/openclaw/issues/10659) | 15 | 🦞 Diamond Lobster | **Feature**: Masked secrets system — agents use API keys without seeing them (prevents leaks/prompt injection) |

### Top PRs by Activity (All "waiting on author" or "needs proof")

| PR | Status | Risk Flags | Summary |
|----|--------|------------|---------|
| [#120190](https://github.com/openclaw/openclaw/pull/120190) | Needs proof | 🚨 compatibility, 🚨 session-state | Compaction: bounded resumable recovery for preflight failures |
| [#114636](https://github.com/openclaw/openclaw/pull/114636) | Waiting on author | 🚨 automation, 🚨 compatibility, 🚨 availability | Hosting: profile inspection & conformance tooling (RFC 0023) |
| [#121122](https://github.com/openclaw/openclaw/pull/121122) | Waiting on author | 🚨 compatibility, 🚨 session-state | Workers: preserve disappeared-worker failures across restarts |
| [#121262](https://github.com/openclaw/openclaw/pull/121262) | Waiting on author | 🚨 compatibility | Cloud workers: support large Git workspaces (>25k mutation limit) |
| [#111205](https://github.com/openclaw/openclaw/pull/111205) | Needs proof | 🚨 compatibility, 🚨 security-boundary | Codex: config to disable/scope native hook relay (fixes #91009 CPU storm) |

**Underlying needs**: Operators desperately need **reliability over features** — silent failures, session corruption, and resource exhaustion (CPU/memory) dominate. The Codex hook relay (#91009) and compaction/recovery (#120190) are architectural pain points blocking production use.

---

## 5. Bugs & Stability (Ranked by Severity)

### 🔴 Critical (P0/P1, 🦞 Diamond Lobster / 🐚 Platinum Hermit)

| Issue | Severity | Status | Fix PR? | Description |
|-------|----------|--------|---------|-------------|
| [#116277](https://github.com/openclaw/openclaw/issues/116277) → [#121058](https://github.com/openclaw/openclaw/issues/121058) | 🦞 Diamond Lobster | **Recurring** | ❌ | DeepSeek v4 Flash silent reply failure — closed but **reoccurring daily**; no queued reply payload |
| [#91009](https://github.com/openclaw/openclaw/issues/91009) | 🐚 Platinum Hermit | Open | [#111205](https://github.com/openclaw/openclaw/pull/111205) (needs proof) | Codex hook relay spawns unbounded CPU-bound processes, stalls gateway |
| [#48920](https://github.com/openclaw/openclaw/issues/48920) | 🦞 Diamond Lobster (P0, ux-release-blocker) | Open | ❌ | Live docs ahead of release: `Heartbeat IsolatedSessions` documented but missing in `2026.3.13` |
| [#94939](https://github.com/openclaw/openclaw/issues/94939) | 🦞 Diamond Lobster | Open | ❌ | 6.x state migration leaves channel conversation-store SQLite empty (0 bytes) — breaks MS Teams proactive sends |
| [#96242](https://github.com/openclaw/openclaw/issues/96242) | 🦞 Diamond Lobster | Open | ❌ | **Duplicate Telegram messages** across 3+ independent delivery paths |
| [#105528](https://github.com/openclaw/openclaw/issues/105528) | 🐚 Platinum Hermit | Open | ❌ | `exec`/`read` tools silently return empty output on Windows (v2026.6.x regression) |
| [#97616](https://github.com/openclaw/openclaw/issues/97616) | 🦪 Silver Shellfish | Open | ❌ | **Zombie process leak** from hook/tool child processes — runtime degradation over time |

### 🟠 High (P1, Session/Message Loss)

| Issue | Severity | Status | Fix PR? | Description |
|-------|----------|--------|---------|-------------|
| [#48003](https://github.com/openclaw/openclaw/issues/48003) | 🦞 Diamond Lobster | Open | ❌ | Steer mode doesn't inject messages mid-turn |
| [#57901](https://github.com/openclaw/openclaw/issues/57901) | 🦪 Silver Shellfish | Open | ❌ | Safeguard compaction ignores `compaction.model` config — uses session model |
| [#47975](https://github.com/openclaw/openclaw/issues/47975) | 🦪 Silver Shellfish | Open | ❌ | Subagent sessions persist after completion; main session becomes unresponsive |
| [#87327](https://github.com/openclaw/openclaw/issues/87327) | 🦞 Diamond Lobster | Open | ❌ | Isolated agent runs stall in runtime-plugins phase before execution (hourly crons) |
| [#114211](https://github.com/openclaw/openclaw/issues/114211) | 🦐 Gold Shrimp | Open | ❌ | Matrix room agents loop on no-reply output, restart recovery, stale replay |

### 🟡 Medium (P2, Config/UX)

| Issue | Severity | Status | Fix PR? | Description |
|-------|----------|--------|---------|-------------|
| [#31583](https://github.com/openclaw/openclaw/issues/31583) | 🦞 Diamond Lobster | Open | ❌ | `exec` tool doesn't inherit `skills.entries.*.env` vars — secrets injection broken |
| [#52130](https://github.com/openclaw/openclaw/issues/52130) | 🦞 Diamond Lobster | Open | ❌ | Restart storm from `telegram.retry.jitter` type mismatch + misleading `doctor` SecretRef |
| [#78301](https://github.com/openclaw/openclaw/issues/78301) | 🐚 Platinum Hermit | Open | ❌ | Plugin loader: silent failures on legacy/invalid contracts — hours of debugging |
| [#120735](https://github.com/openclaw/openclaw/issues/120735) | 🦞 Diamond Lobster | Open | ❌ | Telegram inbound stickers arrive as raw file refs, no description, not staged to disk |

---

## 6. Feature Requests & Roadmap Signals

| Issue | Priority | Signals | Likelihood for Next Version |
|-------|----------|---------|----------------------------|
| [#10659](https://github.com/openclaw/openclaw/issues/10659) Masked Secrets | P1 🦞 | 15 comments, 4👍, security + session-state + auth-provider labels | **High** — security-critical, clear spec, multiple stakeholders |
| [#22438](https://github.com/openclaw/openclaw/issues/22438) Tiered Bootstrap Loading | P2 🌊 | 19 comments, product decision needed, linked PR open | **Medium** — architectural, needs design consensus |
| [#60572](https://github.com/openclaw/openclaw/issues/60572) Multi-Slot Memory Architecture | P2 🦞 | 6 comments, 3👍, replaces single memory slot | **Medium** — major refactor, but clear direction |
| [#67413](https://github.com/openclaw/openclaw/issues/67413) Per-Agent Dreaming Config | P2 🦞 | 8 comments, 5👍, solves OOM kills | **High** — operational pain, concrete solution |
| [#6757](https://github.com/openclaw/openclaw/issues/6757) Agent-Triggered Context Compaction | P2 🌊 | 8 comments, 2👍, agent autonomy | **Medium** — aligns with agentic roadmap |
| [#63990](https://github.com/openclaw/openclaw/issues/63990) Multi-Index Embedding Memory | P3 🌊 | 6 comments, 1👍, provider failover resilience | **Low** — niche, advanced |
| [#33975](https://github.com/openclaw/openclaw/issues/33975) Fallback Approval Mode + Model Attribution | P2 🌊 | 6 comments, transparency/control | **Medium** — UX polish, low risk |
| [#46656](https://github.com/openclaw/openclaw/issues/46656) Webchat Inline Button Support | P2 🌊 | 6 comments, 1👍, parity with Telegram | **Medium** — UI consistency |
| [#47677](https://github.com/openclaw/openclaw/issues/47677) Telegram Reaction Triggers | P2 🦞 | 6 comments, 2👍, first-class control surface | **Medium** — popular integration |
| [#54373](https://github.com/openclaw/openclaw/issues/54373) Context Provenance Metadata | P3 🌊 | 7 comments, 1👍, RFC stage | **Low** — research phase |

**Prediction**: Next version will likely ship **masked secrets (#10659)**, **per-agent dreaming config (#67413)**, and **Codex hook relay config (#111205)** — all have fix PRs in review. Tiered bootstrap (#22438) and multi-slot memory (#60572) are 2-3 releases out.

---

## 7. User Feedback Summary

### Pain Points (from issue narratives)
- **"Closed but not fixed"**: #116277 closed, but #121058 confirms silent failures continue daily — **trust erosion in issue resolution**
- **Upgrade trauma**: 5.28→6.1 migration silently converted cron stores to SQLite with breaking defaults (#90378); 6.11→7.1 left managed installs broken (#107207)
- **Silent data loss**: Empty SQLite conversation stores after migration (#94939), duplicate Telegram messages (#96242), empty tool output on Windows (#105528)
- **Debugging hell**: Plugin loader swallows errors (#78301), genericized error text prevents recovery (#92201), `doctor` gives misleading SecretRef (#52130)
- **Resource exhaustion**: Codex hook relay CPU storms (#91009), zombie process leaks (#97616), memory dreaming OOM kills (#67413)
- **Session fragility**: Subagents persist and block main session (#47975), steer mode broken (#48003), isolated runs stall pre-execution (#8732

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: AI Agent & Personal AI Assistant Open-Source Ecosystem (2026-08-10)

---

## 1. Ecosystem Overview

The personal AI agent ecosystem shows **bimodal maturity**: a cluster of production-grade platforms (OpenClaw, Hermes Agent, IronClaw, ZeroClaw) wrestling with reliability at scale, and a second tier of rapidly iterating projects (NanoBot, CoPaw, NanoClaw) prioritizing feature velocity and contributor growth. **Security hardening** (SSRF, webhook auth, supply-chain CVEs) and **session-state integrity** (silent failures, message loss, corruption) are the dominant cross-cutting concerns. No project cut a release today, indicating a **stabilization window** across the ecosystem. Community engagement is high where pain is acute — operators file detailed regressions, contributors submit targeted fixes — but maintainer review bandwidth is the universal bottleneck.

---

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Release Today | Health Score* | Activity Tier |
|---------|--------------|-----------|---------------|---------------|---------------|
| **OpenClaw** | 500 | 500 | ❌ | 🟡 **Strained** | **Critical Velocity** |
| **ZeroClaw** | 50 | 50 | ❌ | 🟡 **Strained** | **High Governance** |
| **Hermes Agent** | 50 | 50 | ❌ | 🟡 **Strained** | **High Stabilization** |
| **IronClaw** | 22 | 27 | ❌ | 🟢 **Healthy** | **Bug-Bash** |
| **CoPaw** | 16 | 50 | ❌ | 🟡 **Stretched** | **Feature Surge** |
| **NanoClaw** | 1 | 16 | ❌ | 🟡 **Bottlenecked** | **Refactor Batch** |
| **NanoBot** | 5 | 15 | ❌ | 🟠 **Security Debt** | **Maintenance** |
| **PicoClaw** | 3 | 6 | ❌ | 🟢 **Steady** | **Security Hardening** |
| **Moltis** | 2 | 1 | ❌ | 🟢 **Steady** | **Low Velocity** |
| **LobsterAI** | 3 | 0 | ❌ | 🔴 **Stagnant** | **Triage Only** |
| **NullClaw** | 0 | 0 | ❌ | ⚫ **Dormant** | **Inactive** |
| **TinyClaw** | 0 | 0 | ❌ | ⚫ **Dormant** | **Inactive** |
| **ZeptoClaw** | 0 | 0 | ❌ | ⚫ **Dormant** | **Inactive** |

*Health Score: 🟢 Healthy (merging, fixing, releasing) | 🟡 Strained (high volume, low merge rate, critical bugs) | 🟠 Security Debt (unpatched CVEs) | 🔴 Stagnant (no PR activity) | ⚫ Dormant (no updates)*

---

## 3. OpenClaw's Position

### Advantages vs Peers
- **Largest operational surface**: 500+ daily issue/PR updates indicate the broadest production deployment base and deepest integration matrix (multi-channel, multi-provider, enterprise gateways)
- **Most mature reliability taxonomy**: Diamond Lobster (🦞) / Platinum Hermit (🐚) severity labels map to concrete P0/P1 classes (silent reply, session corruption, duplicate delivery) — peers use generic severity
- **Security-boundary awareness**: Issues like `gh-issues` skill injection (#45740) and masked secrets (#10659) show proactive threat modeling absent in smaller projects

### Technical Approach Differences
| Dimension | OpenClaw | Typical Peer |
|-----------|----------|--------------|
| **Architecture** | Monolithic core with ACP/Gateway, subagent swarms, isolated sessions | Modular (NanoBot, IronClaw) or plugin-first (CoPaw, ZeroClaw) |
| **State Management** | Centralized conversation-store (SQLite), compaction, steer-mode injection | Distributed (ZeroClaw Hindsight), ephemeral (NanoBot), or file-based (PicoClaw) |
| **Channel Strategy** | Universal gateway + native adapters (Telegram, Matrix, Slack, Teams, Discord) | Channel-specific adapters (PicoClaw bridges, IronClaw progressive previews) |
| **Release Cadence** | Date-based (2026.7.x), beta-heavy, migration-breaking | Semantic (IronClaw 1.1.0), beta-gated (CoPaw v2.1.0b2), or irregular |

### Community Size Comparison
- **OpenClaw**: 428 open issues, 324 open PRs → **largest active contributor/operator base**
- **ZeroClaw**: 50/50 → high governance participation, smaller operator base
- **CoPaw**: 16/50 → strong contributor funnel (10+ first-time PRs/24h), smaller production footprint
- **Hermes Agent**: 50/50 → dedicated desktop/user base, accessibility advocates
- **NanoBot/IronClaw/PicoClaw**: 5–22 issues → niche but engaged communities

---

## 4. Shared Technical Focus Areas

| Requirement | Projects | Specific Needs |
|-------------|----------|----------------|
| **Session-State Reliability** | OpenClaw (#116277, #121058, #48003), Hermes Agent (#82616, #82756), ZeroClaw (#9284, #9192), IronClaw (#7349) | Silent reply detection, mid-turn injection, fork prevention, config flush races, history preservation on provider failure |
| **Security Hardening** | NanoBot (#5305, #5306), PicoClaw (#3322–3324), ZeroClaw (#9565, #9397), NanoClaw (#3207) | `exec` allowlist bypasses, SSRF in media downloads, webhook fail-open, CVE-gated base images, WhatsApp default-deny |
| **Token/Usage Observability** | NanoBot (#5266, #5299), OpenClaw (implied by silent failures), CoPaw (context-window fixes #6846) | Per-call token accounting, cost dashboards, context-window accuracy per model/provider |
| **Multi-Provider/Model Fidelity** | LobsterAI (#2453, #1187), CoPaw (#6812, #6809, #6844), ZeroClaw (#7100, #9757), OpenClaw (#116277) | Custom/OpenRouter model parsing, `$schema` stripping, vision/context caps, provider capability profiles |
| **Container/Hardened Deployment** | NanoClaw (#3217, #3208, #3207), ZeroClaw (#9690), NanoBot (#5295), PicoClaw (implied) | `pip` channel in `install_packages`, CVE-gated multi-arch publishing, Docker permission fixes, rustc pinning |
| **Desktop/Client Stability** | Hermes Agent (#63047, #77753), CoPaw (#6851–6852), IronClaw (#7346, #7348) | macOS beta freeze, frontend output collapse, emoji rendering, history loss on refresh |
| **Accessibility & UX Polish** | Hermes Agent (#26689), IronClaw (#7346, #7404), CoPaw (#6832, #6854) | VoiceOver/ARIA support, emoji shortcodes, approval purpose descriptions, mobile-responsive consoles |

---

## 5. Differentiation Analysis

| Project | Primary Focus | Target User | Technical Architecture | Key Differentiator |
|---------|---------------|-------------|------------------------|---------------------|
| **OpenClaw** | Enterprise-grade multi-channel gateway, subagent orchestration | Platform operators, orgs running fleets | Monolithic core + ACP gateway, isolated sessions, swarm subagents | **Scale & integration breadth** — Teams, Matrix, Telegram, Slack, custom channels |
| **ZeroClaw** | Security-first daemon, verifiable intent, policy governance | Security-conscious deployers, regulated envs | Rust daemon, capability-based auth, Hindsight memory, RFC-driven | **Formal security model** — fail-closed defaults, credential boundaries, verifiable intent |
| **Hermes Agent** | Desktop-first UX, local-first agent, accessibility | Power users, blind/low-vision users, local LLM runners | Tauri desktop, CLI/TUI, gateway optional, session continuity | **Desktop parity & a11y** — VoiceOver, SSH remote, in-app update |
| **IronClaw** | Automation platform, tool discovery at scale, web-push parity | Automation builders, web-centric teams | Reborn runtime, progressive tool disclosure, PWA/web-push | **Tool UX at scale** — 100–1000 tools, parallel batches, progressive previews |
| **CoPaw** | AgentScope-integrated, memory-centric (ReMe), community-driven | AgentScope developers, memory-heavy workloads | Python/ASGI, ReMe memory stack, OneBot/Telegram/Discord | **Memory as product** — Auto-Dream, ReMe4 roadmap, reranker, digest weights |
| **NanoClaw** | Hardened container images, channel expansion (Dial/SMS/voice) | Zero-trust deployers, telephony integrators | Container-first, module lifecycle, skill registry, DB migrations | **Voice/SMS native** — Dial adapter, AI voice calls, hardened multi-arch images |
| **NanoBot** | Lightweight personal assistant, WebUI, provider abstraction | Individual users, self-hosters | Go core, WebUI, ResponsesCapabilities profiles, skills | **Provider agility** — declarative capabilities, fast model switching |
| **PicoClaw** | Protocol bridging fidelity (Matrix, IRC, Telegram, Delta Chat) | Bridge operators, multi-protocol communities | Go bridges, SSRF-hardened media, native rendering | **Bridging quality** — IRCv3 long-msg, Telegram tables, Delta Chat cleanup |
| **LobsterAI** | Heterogeneous model routing, cross-model subtask orchestration | Multi-model power users, cost optimizers | Model-agnostic gateway, custom provider parsing | **Model fleet management** — planner/executor split, per-model context caps |
| **Moltis** | Vault-backed secrets, container orchestration, heartbeat config | Security-focused self-hosters, Apple Container adopters | Vault integration, Apple Container 1.x, settings integrity | **Secrets + container ops** — recovery phrase normalization, sandbox detection |
| **NullClaw/TinyClaw/ZeptoClaw** | *Inactive* | — | — | — |

---

## 6. Community Momentum & Maturity

| Tier | Projects | Signals |
|------|----------|---------|
| **Rapidly Iterating (Feature Velocity > Stability)** | CoPaw, NanoClaw, NanoBot | 10+ first-time contributor PRs/day (CoPaw), coordinated refactor batches (NanoClaw), CI hardening + feature PRs (NanoBot) |
| **Stabilizing (Bug-Bash / Reliability Sprint)** | OpenClaw, Hermes Agent, IronClaw, ZeroClaw, PicoClaw | Critical P0 bugs open, merge rate << update rate, security patches prioritized, no releases |
| **Maintenance Mode (Low Velocity, High Signal/Noise)** | Moltis, LobsterAI | Few but concrete bugs, stale feature requests, maintainer triage needed |
| **Dormant / At Risk** | NullClaw, TinyClaw, ZeptoClaw | Zero updates >24h, no recent releases, likely unmaintained |

**Key Insight**: The **stabilizing tier** contains the most widely deployed projects (OpenClaw, Hermes, ZeroClaw, IronClaw) — their operators are demanding reliability over features. The **rapidly iterating tier** (CoPaw, NanoClaw) shows healthy contributor funnels but risks technical debt accumulation (CoPaw: 49 open PRs, 1 merged).

---

## 7. Trend Signals for AI Agent Developers

| Trend | Evidence | Strategic Value |
|-------|----------|-----------------|
| **Reliability > Features** | OpenClaw: 0 feature PRs merged, 176 cleanup/fix PRs; Hermes: 5 bug merges, 0 features; IronClaw: 8 UI/stability merges | **Production agents need session guarantees, not new tools**. Invest in state machine testing, chaos injection, silent-failure detection. |
| **Security Defaults Flipping to Fail-Closed** | ZeroClaw (#9397 WhatsApp, #9565 webhooks), PicoClaw (SSRF fixes), NanoClaw (CVE gates), NanoBot (exec bypasses) | **Assume hostile inputs**. Audit all inbound paths (webhooks, media, tool args) for authz, SSRF, injection. |
| **Model/Provider Abstraction Layer Maturing** | ZeroClaw (#7100 per-model caps), CoPaw (#6809 sanitization, #6844 $schema), NanoBot (#5204 ResponsesCapabilities), LobsterAI (#2453 parsing) | **Build provider-agnostic capability contracts**. Hardcoded provider logic is technical debt. |
| **Container/Hardened Image as Default Deployment** | NanoClaw (CVE-gated multi-arch), ZeroClaw (rustc pin, #9690), NanoBot (Docker perm fix), PicoClaw (implied) | **Distribute as signed, scanned, multi-arch images**. `install_packages` must support all language ecosystems (pip, cargo, npm, apt). |
| **Memory Systems Becoming Product Differentiators** | CoPaw (ReMe4, Auto-Dream, reranker), ZeroClaw (Hindsight 7-PR stack), OpenClaw (compaction, steer-mode), Hermes (external memory provider) | **Long-term context management is a core feature**. Design for multi-slot, provenance-tagged, compaction-aware memory. |
| **Accessibility & Desktop Polish as Competitive Moats** | Hermes (#26689 VoiceOver), IronClaw (emoji, chronology, progressive previews), CoPaw (mobile console, approval UX) | **Non-technical users and enterprise buyers require a11y & UX parity**. Budget for screen-reader testing, mobile-responsive consoles. |
| **Governance Scaling via Automation** | ZeroClaw (#6808 Work Lanes, #9496 RFC overhaul), OpenClaw (diamond lobster triage), IronClaw (bot-delivered fixes #7402–7404) | **Automate triage, labeling, and regression detection**. Human review bandwidth is the universal constraint. |

---

## Summary for Decision-Makers

- **If deploying today**: **IronClaw** (healthiest merge rate, clear v1.2.0 roadmap) or **PicoClaw** (steady, security-patched) offer lowest operational risk. **OpenClaw** has the broadest integration but highest reliability debt.
- **If building on top**: **ZeroClaw** (security model), **CoPaw** (memory stack), or **NanoClaw** (hardened containers) provide the most differentiated primitives.
- **If contributing**: **CoPaw** (active first-time contributor program), **NanoClaw** (refactor batch needs reviewers), **Moltis** (low competition, clear bugs).
- **Avoid**: NullClaw, TinyClaw, ZeptoClaw (dormant). LobsterAI needs maintainer engagement before relying on it.

The ecosystem is **consolidating around three axes**: **reliability engineering**, **security-by-default**, and **memory/context as a service**. Projects that ship patches for silent failures, fail-open webhooks, and

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-08-10

## 1. Today's Overview
NanoBot shows **high maintenance velocity** with 20 total updates (5 issues, 15 PRs) in the last 24 hours, though no new release was cut. The project is actively addressing **two critical security advisories** (`exec.allowPatterns` bypasses), a Docker deployment regression, and token-usage observability gaps. Four PRs were merged today, primarily focused on CI hardening, WebUI fixes, and documentation. The backlog includes long-running feature work (computer-use tools, provider refactor) and a growing queue of user-reported bugs.

---

## 2. Releases
**No new releases** published today. The latest version remains unchanged.

---

## 3. Project Progress — Merged / Closed PRs Today
| PR | Type | Summary |
|----|------|---------|
| [#5308](https://github.com/HKUDS/nanobot/pull/5308) | **CI/CD, test** | Strengthened user-path coverage (CLI, WebUI chat forks, auth, failure boundaries); added V8 coverage reporting and enforced gates. |
| [#5307](https://github.com/HKUDS/nanobot/pull/5307) | **docs** | Restored Star History chart using a new provider after GitHub killed the original. |
| [#5304](https://github.com/HKUDS/nanobot/pull/5304) | **bug, webui, docs** | Fixed voice-input HTTPS requirement explanation in WebUI; documented trusted HTTPS options for LAN access. |
| [#4019](https://github.com/HKUDS/nanobot/pull/4019) | **feature** | **Closed** (not merged): GitAgent Protocol support (agent.yaml + SOUL.md) — author proposed portable agent standard; maintainers declined/archived. |

**Net progress:** CI reliability and WebUI usability improved; long-standing external protocol proposal closed.

---

## 4. Community Hot Topics (Most Active Items)
| Item | Activity | Core Need |
|------|----------|-----------|
| [#5266](https://github.com/HKUDS/nanobot/issues/5266) **Token consumption logging** | 13 comments, 3 days old | Users burn **millions of tokens in hours** with no visibility; demand per-call token accounting for cost control and debugging. |
| [#5295](https://github.com/HKUDS/nanobot/issues/5295) **Docker compose permission denied** | 5 comments, 2 days old | Deployment blocker: `entrypoint.sh` lacks execute bit in gateway image; users cannot start stack per `deployment.md`. |
| [#5255](https://github.com/HKUDS/nanobot/pull/5255) **Truthful API status for external servers** | Draft, updated today | WebUI falsely shows “Off” for externally managed `nanobot serve` instances; need accurate status reporting. |
| [#5204](https://github.com/HKUDS/nanobot/pull/5204) **Provider Responses capabilities refactor** | P1, updated today | Replace hard-coded provider checks with declarative `ResponsesCapabilities` profiles (OpenAI, Copilot, DeepSeek). |

**Signal:** Observability (tokens), deployability (Docker), and provider abstraction are the top friction points.

---

## 5. Bugs & Stability — Ranked by Severity
| Severity | Issue | Status | Fix PR? |
|----------|-------|--------|---------|
| **Critical (Security)** | [#5306](https://github.com/HKUDS/nanobot/issues/5306) `exec.allowPatterns` shell-chain bypass | Open, 0 comments | No |
| **Critical (Security)** | [#5305](https://github.com/HKUDS/nanobot/issues/5305) `exec.allowPatterns` allowlist bypass via OpenAI-compatible API | Open, 0 comments | No |
| **High (Deployment)** | [#5295](https://github.com/HKUDS/nanobot/issues/5295) Docker compose `entrypoint.sh` permission denied | Open, 5 comments | No |
| **High (Functional)** | [#5311](https://github.com/HKUDS/nanobot/issues/5311) Agnes AI double-encodes nested-object tool args | Open, 0 comments | No |
| **Medium** | [#5302](https://github.com/HKUDS/nanobot/pull/5302) Dream consolidation calls unavailable tools | PR open | **Yes (#5302)** |
| **Medium** | [#5303](https://github.com/HKUDS/nanobot/pull/5303) Weather skill `curl` alias issue on Windows | PR open | **Yes (#5303)** |
| **Medium** | [#5156](https://github.com/HKUDS/nanobot/pull/5156) Telegram silently stalls after network blips | PR open (12 days) | **Yes (#5156, #5301)** |

**Note:** Two critical security issues have **no fix PR yet** — maintainers should prioritize patches.

---

## 6. Feature Requests & Roadmap Signals
| Request | Source | Likelihood for Next Release |
|---------|--------|-----------------------------|
| **Per-call token usage logging & API** | [#5266](https://github.com/HKUDS/nanobot/issues/5266), [#5299](https://github.com/HKUDS/nanobot/pull/5299) | **High** — PR #5299 already exposes structured records via `/api/settings/usage/records`. |
| **Declarative provider capabilities (Responses API)** | [#5204](https://github.com/HKUDS/nanobot/pull/5204) | **High** — P1 refactor, active development. |
| **Model-agnostic computer-use tools (browser + desktop)** | [#4276](https://github.com/HKUDS/nanobot/pull/4276) | **Medium** — long-running (since Jun), conflicts, but core to agent vision. |
| **Agent Plugins + CLI Apps integration** | [#5288](https://github.com/HKUDS/nanobot/pull/5288) | **Medium** — architectural, enables portable skills. |
| **Marketplace skills shadow builtins** | [#5309](https://github.com/HKUDS/nanobot/pull/5309) | **High** — small fix, unblocks skill overrides. |
| **WeChat forced QR login** | [#5310](https://github.com/HKUDS/nanobot/pull/5310) | **High** — trivial fix, merged quickly. |

---

## 7. User Feedback Summary
| Pain Point | Evidence | Impact |
|------------|----------|--------|
| **Uncontrolled token burn** | “millions of tokens in 2 hours without noticeable activity” ([#5266](https://github.com/HKUDS/nanobot/issues/5266)) | Cost shock, no debugging path. |
| **Broken Docker deploy** | Fresh install fails with `Permission denied` on `entrypoint.sh` ([#5295](https://github.com/HKUDS/nanobot/issues/5295)) | Blocks new users; doc mismatch. |
| **Provider quirks break tools** | Agnes AI double-encodes nested objects ([#5311](https://github.com/HKUDS/nanobot/issues/5311)) | MCP tool calls fail silently. |
| **Security fear** | Two `exec` bypass advisories filed same day ([#5305](https://github.com/HKUDS/nanobot/issues/5305), [#5306](https://github.com/HKUDS/nanobot/issues/5306)) | Enterprise adoption risk. |
| **Telegram reliability** | Silent polling stall after proxy blips ([#5156](https://github.com/HKUDS/nanobot/pull/5156)) | Production bots go dark. |

**Positive signals:** Active PR authors (KDB-Wind, chengyongru, Re-bin) shipping fixes fast; WebUI polish (voice, skills, status) progressing.

---

## 8. Backlog Watch — Stale / High-Value Items Needing Attention
| Item | Age | Why It Matters |
|------|-----|----------------|
| [#4276](https://github.com/HKUDS/nanobot/pull/4276) **Computer-use tools** | 61 days | Flagship agent capability; conflicts & scope creep stall merge. |
| [#5204](https://github.com/HKUDS/nanobot/pull/5204) **Provider Responses refactor** | 9 days | P1 architectural cleanup; unblocks multi-provider reasoning/replay. |
| [#5255](https://github.com/HKUDS/nanobot/pull/5255) **External API status truthfulness** | 5 days | WebUI misleading for self-hosted `nanobot serve` operators. |
| [#5288](https://github.com/HKUDS/nanobot/pull/5288) **Agent Plugins + CLI Apps** | 3 days | Plugin ecosystem foundation; design review needed. |
| [#5156](https://github.com/HKUDS/nanobot/pull/5156) **Telegram stall recovery** | 12 days | Production-critical; watchdog PR ready but not merged. |
| **Security advisories #5305, #5306** | 1 day | **Zero-day risk**; no mitigation PR assigned. |

---

### Health Indicator Summary
| Dimension | Signal |
|-----------|--------|
| **Release cadence** | ⚠️ None today; last release date unknown |
| **Security responsiveness** | 🔴 Two critical issues, no fix PRs |
| **CI/CD maturity** | ✅ PR #5308 adds coverage gates |
| **Community engagement** | ✅ High comment volume on pain points |
| **Technical debt paydown** | ✅ Provider refactor, plugin integration advancing |

**Recommendation:** Cut a **security patch release** addressing #5305/#5306 and the Docker permission bug (#5295) within 24–48h. Merge #5299 (token records) and #5309 (skill shadowing) for user-facing relief. Assign maintainer review to #4276 and #5204 to unblock next minor.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-08-10

---

## 1. Today's Overview

Hermes Agent shows **very high activity** with 100 total updates (50 issues + 50 PRs) in the last 24 hours. The project is in an active stabilization phase: no new releases, but a significant volume of bug fixes targeting **session-state integrity**, **desktop responsiveness**, **cron/automation reliability**, and **security boundaries**. Three critical data-loss bugs (#82756, #82616, #82842) and multiple macOS/Windows desktop regressions dominate the open issue queue. The PR pipeline is heavily skewed toward fixes (≈90% bug/security/refactor), with only one notable feature draft (plan-secretary plugin). Community engagement is strong on accessibility (#26689) and session-reliability threads.

---

## 2. Releases

**No new releases** published today. The current latest remains **v0.20.0 (2026.8.3)**. Several merged PRs (e.g., #82539, #74411, #82442) contain fixes that will likely roll into a v0.20.1 patch.

---

## 3. Project Progress — Merged / Closed PRs Today

| PR | Type | Summary | Impact |
|----|------|---------|--------|
| [#82539](https://github.com/NousResearch/hermes-agent/pull/82539) | Bug | Catch `httpx.ConnectError` in xAI OAuth token refresh | Prevents CLI crash on DNS failure during `hermes model` |
| [#74411](https://github.com/NousResearch/hermes-agent/pull/74411) | Bug | Fix Desktop SSH version-check arg order (`python --version <script>`) | Restores SSH mode for git/venv installs |
| [#82442](https://github.com/NousResearch/hermes-agent/pull/82442) | Bug | `bootstrapSshConnectionInner` now resolves `hermes` binary not `venv/bin/python` | Fixes `--ssh-session-token-file` check on remote |
| [#74991](https://github.com/NousResearch/hermes-agent/pull/74991) | Bug | Preserve conversation history for external memory provider recovery | Prevents permanent loss of turns when provider temporarily unavailable |
| [#82616](https://github.com/NousResearch/hermes-agent/issues/82616) | Issue (Closed) | Tracking: gateway session continuity breaks under FTS corruption | Root-cause identified; fix PRs in flight (#82811, #82766) |

**Net progress**: Five bug-fix PRs merged, three critical-session-state issues closed with fixes staged. No feature work merged.

---

## 4. Community Hot Topics (Most Comments / Reactions)

| Item | Comments | 👍 | Core Need |
|------|----------|----|-----------|
| [#63047](https://github.com/NousResearch/hermes-agent/issues/63047) Desktop freeze after ~5 messages on macOS 27 beta | 19 | 0 | **Desktop stability on Apple Silicon / beta macOS** — users cannot use Settings or recover without force-quit. |
| [#26689](https://github.com/NousResearch/hermes-agent/issues/26689) Accessibility for blind VoiceOver users | 13 | 1 | **Screen-reader parity** — CLI/TUI/dashboard lack ARIA labels, focus management, and VoiceOver-friendly navigation. |
| [#82616](https://github.com/NousResearch/hermes-agent/issues/82616) Gateway session fork + stale resume after FTS corruption | 7 | 0 | **Session continuity guarantee** — orphan forks and stale resumes break the “one continuous session” contract. |
| [#66824](https://github.com/NousResearch/hermes-agent/issues/66824) / [#71987](https://github.com/NousResearch/hermes-agent/issues/71987) Cron `repeat='forever'` TypeError (`str` vs `int`) | 6 each | 0 | **Cron reliability** — YAML parsing of `none`/`forever` breaks scheduler; duplicate reports show wide impact. |
| [#82842](https://github.com/NousResearch/hermes-agent/issues/82842) Agent executed `rd /s /q C:\` on Windows | 1 | 0 | **Security boundary** — terminal tool escalated to destructive root deletion despite scoped approval. |

**Signal**: Desktop macOS stability, accessibility debt, and session-state correctness are the three loudest community pain points.

---

## 5. Bugs & Stability — Today’s Reports (Ranked by Severity)

| Severity | Issue | Component | Fix PR? |
|----------|-------|-----------|---------|
| **Critical (Data Loss / Security)** | [#82842](https://github.com/NousResearch/hermes-agent/issues/82842) `rd /s /q C:\` on Windows | `tool/terminal`, Windows | ❌ |
| **Critical (Data Loss)** | [#82756](https://github.com/NousResearch/hermes-agent/issues/82756) Desktop plain-Enter deleted ~65 messages (3rd occurrence) | `comp/desktop`, `area/sessions` | ✅ [#82811](https://github.com/NousResearch/hermes-agent/pull/82811), [#82766](https://github.com/NousResearch/hermes-agent/pull/82766) |
| **Critical (Session Integrity)** | [#82616](https://github.com/NousResearch/hermes-agent/issues/82616) Gateway session fork + stale resume after FTS corruption | `comp/gateway`, `area/sessions` | ✅ Tracking fixes in #82811 |
| **High (Availability)** | [#63047](https://github.com/NousResearch/hermes-agent/issues/63047) Desktop unresponsive after ~5 msgs on macOS 27 beta | `comp/desktop`, macOS | ❌ |
| **High (Functional)** | [#66824](https://github.com/NousResearch/hermes-agent/issues/66824) / [#71987](https://github.com/NousResearch/hermes-agent/issues/71987) Cron `repeat='forever'` TypeError | `comp/cron` | ✅ [#82845](https://github.com/NousResearch/hermes-agent/pull/82845), [#82848](https://github.com/NousResearch/hermes-agent/pull/82848) |
| **High (Functional)** | [#82846](https://github.com/NousResearch/hermes-agent/issues/82846) Smart-approval aux LLM call has no timeout → wedges session | `tool/approval`, `agent/auxiliary_client.py` | ❌ |
| **Medium** | [#80125](https://github.com/NousResearch/hermes-agent/issues/80125) Weixin `ret=-2` misreported as rate-limited | `comp/gateway`, `platform/wecom` | ❌ |
| **Medium** | [#78190](https://github.com/NousResearch/hermes-agent/issues/78190) Gmail MCP works in CLI but fails in gateway (OAuth 404) | `comp/gateway`, `tool/mcp` | ❌ |
| **Medium** | [#82805](https://github.com/NousResearch/hermes-agent/issues/82805) Intermittent empty HTTP 400 vs local llama.cpp (pooled httpx) | `comp/agent`, provider/llama.cpp | ❌ |
| **Medium** | [#80560](https://github.com/NousResearch/hermes-agent/issues/80560) Plugin SDK React #310 crash on Windows with any desktop plugin | `comp/plugins`, `platform/windows` | ❌ |
| **Medium** | [#82798](https://github.com/NousResearch/hermes-agent/issues/82798) `skills_guard` flags `__PLACEHOLDER__` as credential leak | `tool/skills` | ✅ [#82839](https://github.com/NousResearch/hermes-agent/pull/82839) |
| **Medium** | [#77753](https://github.com/NousResearch/hermes-agent/issues/77753) macOS in-app update deadlocks on stale `hermes-setup` binary | `comp/desktop`, `area/install-update` | ❌ |
| **Medium** | [#77211](https://github.com/NousResearch/hermes-agent/issues/77211) `hermes update` skips Node.js dep refresh after partial failure | `comp/cli`, `area/install-update` | ❌ |

**Pattern**: Session-state truncation bugs are recurring (3rd occurrence in #82756). Windows terminal tool safety and macOS desktop stability are platform-specific risk clusters.

---

## 6. Feature Requests & Roadmap Signals

| Issue | Signal | Likelihood for Next Version |
|-------|--------|-----------------------------|
| [#26689](https://github.com/NousResearch/hermes-agent/issues/26689) VoiceOver accessibility | Long-standing (open since May), 13 comments, 1 👍 — strong community advocacy | Medium — requires dedicated a11y sprint; may slip to v0.21 |
| [#15831](https://github.com/NousResearch/hermes-agent/issues/15831) Cron job chaining | 1 👍, low noise — clear automation workflow need | Low — no PR activity; backlog item |
| [#46064](https://github.com/NousResearch/hermes-agent/issues/46064) OpenRouter router models hidden from `hermes model` | Tool-support filter silently drops valid models | Medium — small filter fix; could land in patch |
| [#82316](https://github.com/NousResearch/hermes-agent/issues/82316) Desktop “New session in project” shouldn’t force drill-in view | UX polish, 1 comment | High — trivial UI fix, likely in v0.20.1 |
| [#81634](https://github.com/NousResearch/hermes-agent/pull/81634) **Draft PR**: `plan-secretary` plugin (human-confirmed, session-scoped task plans) | Only feature PR open; implements #81614 | Medium — draft, needs review; could be v0.21 flagship |

**Prediction**: Next patch (v0.20.1) will be **purely corrective** (session truncation, cron TypeError, SSH, skills_guard, xAI OAuth). Accessibility and job-chaining remain backlog candidates for v0.21.

---

## 7. User Feedback Summary — Pain Points & Use Cases

| Theme | Representative Voices |
|-------|-----------------------|
| **Desktop macOS instability** | “App becomes completely unresponsive… only recovery is force-quit” (#63047); “previous prompts and right-hand chat timeline disappear after sleep/reopen” (#82806 referenced in #82843) |
| **Session history loss** | Third silent truncation event (#82756) — users losing 65–300 messages; “stale truncate_before_user_ordinal + auto-attached confirm_truncate” |
| **Accessibility exclusion** | “Totally blind VoiceOver user… current UX is very difficult” (#26689) — missing ARIA, focus traps, screen-reader labels |
| **Automation reliability** | Cron `forever`/`none` parsing breaks every create/update (#66824, #71987); job chaining requested for years (#15831) |
| **Gateway/platform trust** | Weixin misreports errors (#80125); Gmail MCP works in CLI but not gateway (#78190); SSH version check broken for venv installs (#74411) |
| **Security boundaries** | Terminal tool deleted `C:\` despite scoped approval (#82842); smart-approval hang wedges session (#82846) |
| **Update/install friction** | macOS updater deadlock on stale binary (#77753); `hermes update` skips Node.js repair (#77211) |

**Sentiment**: High frustration on desktop stability and session integrity; strong loyalty from power users (detailed repros, bisects, fix proposals). Accessibility advocates feel neglected.

---

## 8. Backlog Watch — Stale / High-Impact Items Needing Maintainer Attention

| Item | Age | Why It Matters | Status |
|------|-----|----------------|--------|
| [#26689](https://github.com/NousResearch/hermes-agent/issues/26689) VoiceOver accessibility | 87 days | Legal/ethical risk; blocks blind users entirely | Open, no PR |
| [#63047](https://github.com/NousResearch/hermes-agent/issues/63047) macOS 27 beta freeze | 29 days | Blocks all macOS beta testers; 19 comments | Open, no PR |
| [#15831](https://github.com/NousResearch/hermes-agent/issues/15831) Cron job chaining | 106 days | High-value automation feature; low complexity | Open, no PR |
| [#82616](https://github.com/NousResearch/hermes-agent/issues/82616) FTS corruption → session fork | 1 day (but root cause old) | Core session contract violation; multiple user reports | Closed, but fix PRs (#82811, #82766) need merge |
| [#77753](https://github.com/NousResearch/hermes-agent/issues/77753) macOS updater deadlock | 7 days | Breaks in-app update for all pre-8c76fe19f users; no supported recovery | Open, no PR |
| [#80560](https://github.com/NousResearch/hermes-agent/issues/80560) Windows Plugin SDK React #310 | 4 days | Blocks all desktop plugins on Windows | Open, no PR |
| [#78190](https://github.com/NousResearch/hermes-agent/issues/78190) Gmail MCP gateway OAuth 404 | 6 days | Popular provider broken in gateway only | Open, no PR |

**Recommendation**: Prioritize merging #82811/#82766 (session truncation), #82845/#82848 (cron), #82839 (skills_guard), and #82539 (xAI OAuth) for v0.20.1. Assign macOS freeze (#63047) and Windows plugin crash (#80560) to platform owners immediately. Schedule accessibility sprint for #26689.

---

*Digest generated from GitHub data as of 2026-08-10 23:59 UTC. All links point to live NousResearch/hermes-agent issues/PRs.*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-08-10

## 1. Today's Overview
PicoClaw shows **moderate, focused activity** over the last 24 hours with 3 issue updates and 6 PR updates. The project is in a **stabilization and security-hardening phase**: no new releases, but multiple PRs address SSRF vulnerabilities across Weixin, WeCom, and generic inbound media download paths. A long-standing Matrix reconnection bug (#3203) was closed as stale, while two new feature requests target IRC long-message handling and native Telegram table rendering. The deltachat refactor (#3222) continues its multi-week cleanup. Overall health appears **steady**—maintainers are merging quick fixes (pnpm lock) and reviewing security patches, but no major version bump is imminent.

## 2. Releases
**No new releases** in the last 24 hours. Current latest remains **v0.2.9** (per issue #3203).

## 3. Project Progress — Merged / Closed PRs Today
| PR | Title | Status | Impact |
|----|-------|--------|--------|
| [#3326](https://github.com/sipeed/picoclaw/pull/3326) | fix(web): remove duplicate pnpm lock entries | **CLOSED** | Unblocks `pnpm install --frozen-lockfile` for frontend contributors; purely infra, no runtime change. |

*No other PRs were merged today.* The remaining 5 open PRs are under review or awaiting CI.

## 4. Community Hot Topics — Most Active Issues / PRs
| Item | Type | Comments | 👍 | Core Need |
|------|------|----------|----|-----------|
| [#3203](https://github.com/sipeed/picoclaw/issues/3203) | Issue (closed) | 8 | 2 | **Matrix reliability**: automatic reconnection after network/homeserver disruption so systemd can manage restarts. |
| [#3287](https://github.com/sipeed/picoclaw/issues/3287) | Issue (open) | 4 | 0 | **IRCv3 long-message support**: treat split IRC messages as a single logical message. |
| [#3222](https://github.com/sipeed/picoclaw/pull/3222) | PR (open) | — | 0 | **Delta Chat modernization**: drop legacy code, enforce secrets-in-JSON-RPC, update invite-link handling. |

**Analysis**: The Matrix reconnection issue (#3203) attracted the most discussion but was closed as *stale*—suggesting either the reporter’s environment changed or the maintainers consider it a configuration concern. The IRC and Telegram feature requests reflect **bridging fidelity** demands: users want protocol-native rendering (tables, long messages) rather than degraded fallbacks.

## 5. Bugs & Stability — Reported Today
| Severity | Item | Description | Fix PR? |
|----------|------|-------------|---------|
| **High (Security)** | [#3322](https://github.com/sipeed/picoclaw/pull/3322) | Inbound media downloads (QQ, Telegram, Discord, LINE, Slack) lacked SSRF protection—crafted URLs could hit loopback/RFC1918. | **Yes** – PR #3322 adds `BlockPrivateTargets` to `utils.DownloadFile`. |
| **High (Security)** | [#3324](https://github.com/sipeed/picoclaw/pull/3324) | Weixin media client followed redirects to private hosts. | **Yes** – PR #3324 introduces `CreateSafeHTTPClient` + `ValidateSafeHTTPURL`. |
| **High (Security)** | [#3323](https://github.com/sipeed/picoclaw/pull/3323) | WeCom media client same SSRF vector as Weixin. | **Yes** – PR #3323 mirrors #3324 fix. |
| **Medium (Reliability)** | [#3203](https://github.com/sipeed/picoclaw/issues/3203) | Matrix `/sync` loop dies silently on network disruption; no auto-reconnect. | **No** – closed stale, no fix PR. |

**Takeaway**: Three coordinated SSRF fixes landed in PRs today—strong signal the team is hardening inbound media paths across all major channels. The Matrix bug remains unresolved but deprioritized.

## 6. Feature Requests & Roadmap Signals
| Feature | Source | Likelihood for Next Release |
|---------|--------|-----------------------------|
| **Native Telegram table rendering** (GFM/HTML → Bot API rich messages) | [#3325](https://github.com/sipeed/picoclaw/issues/3325) + [#3327](https://github.com/sipeed/picoclaw/pull/3327) | **High** – PR #3327 already implements detection & send/edit/reply paths. |
| **IRCv3 long-message coalescing** | [#3287](https://github.com/sipeed/picoclaw/issues/3287) | **Medium** – clear spec (IRCv3 `labeled-response`/`message-tags`), but requires protocol-level changes in IRC bridge. |
| **Delta Chat cleanup & security** (secrets in JSON-RPC, drop password config) | [#3222](https://github.com/sipeed/picoclaw/pull/3222) | **High** – large refactor (-200 LOC), aligns with security posture; likely to land soon. |

**Prediction**: Next patch (v0.2.10) will likely bundle the SSRF fixes, pnpm lock fix, Delta Chat refactor, and Telegram table rendering. IRC long-message support may slip to a minor version.

## 7. User Feedback Summary
- **Pain points**:  
  - Matrix bridge perceived as fragile (silent death, no reconnect).  
  - IRC users see fragmented messages when clients auto-split >512 B.  
  - Telegram tables render as monospaced blocks, losing visual clarity.  
- **Use cases**:  
  - Multi-protocol bridging for communities relying on rich formatting (tables, long logs).  
  - Self-hosted deployments needing zero-touch resilience (systemd `Restart=on-failure` compatibility).  
- **Sentiment**: Mixed—security patches welcomed, but stale closure on #3203 frustrates Matrix admins. Feature PRs (#3327, #3222) show contributor momentum.

## 8. Backlog Watch — Stagnant / High-Value Items Needing Attention
| Item | Age | Why It Matters |
|------|-----|----------------|
| [#3203](https://github.com/sipeed/picoclaw/issues/3203) Matrix reconnection | 39 days (closed stale) | Core reliability for largest bridged protocol; reopen if regression confirmed. |
| [#3222](https://github.com/sipeed/picoclaw/pull/3222) Delta Chat refactor | 38 days | Large cleanup touching auth, invites, tests; merge conflict risk grows. |
| [#3287](https://github.com/sipeed/picoclaw/issues/3287) IRC long messages | 19 days | No PR yet; protocol design discussion needed. |

**Recommendation**: Prioritize review/merge of #3222 and #3327 (both near-ready). Re-evaluate #3203—if Matrix users report recurrence, reopen with a minimal reconnection PR.

---

*Data sourced from GitHub API (issues/PRs updated 2026-08-09 → 2026-08-10). All links point to sipeed/picoclaw.*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-08-10

## 1. Today's Overview
NanoClaw shows **high development velocity** with **16 active PRs** and **1 new issue** in the last 24 hours, but **zero merges or releases**. The project is in a heavy refactoring and feature-integration phase: multiple PRs from core contributors (`zvi-fried`, `OmriBenShoham`, `gabi-simons`, `brentkearney`, `ariel-greenfeld`) touch CLI input modes, channel adapters (Dial/SMS/voice), container hardening/CVE gates, Signal/Slack attachment handling, and internal architecture (module lifecycle, DB migrations, skill registry). The sole new issue (#3217) reveals a **blocking gap in hardened-image adoption** — `install_packages` lacks a `pip` channel, preventing Python-dependent agents from using prebuilt hardened images. No PRs were merged today, suggesting a review bottleneck or intentional batching.

## 2. Releases
**No new releases** in the last 24 hours. The last published version is not indicated in the data.

## 3. Project Progress
**No PRs merged or closed today.** All 16 PRs remain open. Key workstreams advancing in parallel:

| PR | Type | Area | Status |
|----|------|------|--------|
| [#3218](https://github.com/nanocoai/nanoclaw/pull/3218) | Feature | CLI: `--stdin-json` bounded input for host/container `ncl` clients | Open |
| [#3216](https://github.com/nanocoai/nanoclaw/pull/3216) | Docs | Hardened-image guide: documents `install_packages` covers apt/npm only | Open |
| [#3215](https://github.com/nanocoai/nanoclaw/pull/3215) | Fix | Permissions: redact DM resolution logs | Open |
| [#3214](https://github.com/nanocoai/nanoclaw/pull/3214) | Refactor | Host: unify module lifecycle hooks | Open |
| [#3213](https://github.com/nanocoai/nanoclaw/pull/3213) | Refactor | Channels: register question renderers | Open |
| [#3212](https://github.com/nanocoai/nanoclaw/pull/3212) | Refactor | DB: add module migration registry | Open |
| [#3211](https://github.com/nanocoai/nanoclaw/pull/3211) | Docs | Skills: define single-responsibility integration rule | Open |
| [#3210](https://github.com/nanocoai/nanoclaw/pull/3210) | Docs | Container: tell agent where received attachments land | Open |
| [#3209](https://github.com/nanocoai/nanoclaw/pull/3209) | Fix | Slack: surface pasted tables to agent | Open |
| [#3208](https://github.com/nanocoai/nanoclaw/pull/3208) | Feature (core-team) | CI: publish agent image to Docker Hub with CVE gates | Open |
| [#3207](https://github.com/nanocoai/nanoclaw/pull/3207) | Fix (core-team) | Container: bump pnpm/npm past critical `tar` CVE (GHSA-23hp-3jrh-7fpw) | Open |
| [#3186](https://github.com/nanocoai/nanoclaw/pull/3186) | Refactor | Host: add seams for skill-owned capabilities | Open (since 2026-08-04) |
| [#3142](https://github.com/nanocoai/nanoclaw/pull/3142) | Fix | Signal: forward image/file attachments via mounted inbox | Open (since 2026-07-27) |
| [#3050](https://github.com/nanocoai/nanoclaw/pull/3050) | Feature + Skill | Setup: add Dial to channel picker + wizard/skills | Open (since 2026-07-14) |
| [#3041](https://github.com/nanocoai/nanoclaw/pull/3041) | Feature + Skill | Channels: add Dial channel adapter (SMS + AI voice calls) | Open (since 2026-07-14) |
| [#2529](https://github.com/nanocoai/nanoclaw/pull/2529) | Fix | Signal: deliver inbound attachments to agent (not drop) | Open (since 2026-05-18) |

**Observation:** The batch of PRs from `zvi-fried` (#3212–#3215, #3218) appears to be a coordinated refactor of core internals (DB, lifecycle, channels, permissions, CLI). The Dial channel work (#3041, #3050) has been open for ~3 weeks. The Signal attachment fixes (#2529, #3142) span 3+ months.

## 4. Community Hot Topics
| Item | Activity | Underlying Need |
|------|----------|-----------------|
| [#3217](https://github.com/nanocoai/nanoclaw/issues/3217) `install_packages` lacks pip channel | 1 issue, 0 comments, 0 👍 | **Hardened-image adoption blocked** for Python-dependent agents. Users cannot use prebuilt secure images if their agents need `pip` packages. Directly limits production deployment of hardened containers. |
| [#3208](https://github.com/nanocoai/nanoclaw/pull/3208) Publish agent image to Docker Hub with CVE gates | Core-team PR, 0 comments | **Supply-chain security & distribution**: Automated, gated publishing of hardened multi-arch images. Critical for compliance and zero-trust deployments. |
| [#3207](https://github.com/nanocoai/nanoclaw/pull/3207) Bump pnpm/npm past critical `tar` CVE | Core-team PR, 0 comments | **Active CVE remediation**: `tar` < 7.5.19 flagged by grype in base image and pnpm. Blocks hardened-image verification. |
| [#3041](https://github.com/nanocoai/nanoclaw/pull/3041) / [#3050](https://github.com/nanocoai/nanoclaw/pull/3050) Dial channel (SMS + AI voice) | 2 PRs, open since 2026-07-14 | **New channel integration**: First-party voice/SMS channel. Expands NanoClaw beyond text chat into telephony. High strategic value. |
| [#2529](https://github.com/nanocoai/nanoclaw/pull/2529) Signal: deliver inbound attachments | Open since 2026-05-18 | **Signal parity**: Attachments currently dropped. Blocks real-world Signal bot use cases (images, PDFs, docs). |

**Pattern:** Security/hardening (3 PRs), channel expansion (Dial, Signal, Slack), and internal refactoring dominate. The pip-channel gap (#3217) is the only user-facing blocker reported today.

## 5. Bugs & Stability
| Severity | Issue/PR | Description | Fix PR Exists? |
|----------|----------|-------------|----------------|
| **Critical (Supply Chain)** | [#3207](https://github.com/nanocoai/nanoclaw/pull/3207) | `tar` CVE (GHSA-23hp-3jrh-7fpw) in npm 10.9.8 (base image) and pnpm 10.33.0. Grype flags critical. Base refresh alone insufficient. | **Yes** — #3207 bumps pnpm/npm |
| **High (Functional)** | [#3142](https://github.com/nanoclaw/pull/3142) | Signal adapter uses unmounted path `/workspace/extra/signal-attachments/<id>` for images; non-image/audio attachments (PDF, doc) also broken. | **Yes** — #3142 forwards via mounted inbox |
| **High (Functional)** | [#2529](https://github.com/nanoclaw/pull/2529) | Signal inbound attachments dropped entirely (closes #2528). | **Yes** — #2529 delivers to agent |
| **Medium (Usability)** | [#3209](https://github.com/nanoclaw/pull/3209) | Slack pasted tables not surfaced to agent. | **Yes** — #3209 surfaces tables |
| **Medium (Adoption Blocker)** | [#3217](https://github.com/nanoclaw/issues/3217) | `install_packages` has no `pip` channel → Python-dependent agents cannot use hardened prebuilt images. | **No** — docs PR #3216 only documents limitation |

**Note:** Three long-standing Signal attachment bugs (#2529, #3142) have fix PRs but remain unmerged for 2–3 months. The `tar` CVE fix (#3207) is fresh and security-critical.

## 6. Feature Requests & Roadmap Signals
| Signal | Source | Likelihood for Next Version |
|--------|--------|-----------------------------|
| **`pip` channel for `install_packages`** | [#3217](https://github.com/nanoclaw/issues/3217) (new issue) | **High** — Direct blocker for hardened-image adoption; docs PR #3216 acknowledges gap. Expect a `packages_pip` field soon. |
| **Dial channel (SMS + AI voice)** | [#3041](https://github.com/nanoclaw/pull/3041), [#3050](https://github.com/nanoclaw/pull/3050) | **High** — Feature skill PRs with wizard/skills integration; open 3 weeks, likely nearing review. |
| **Bounded JSON stdin for CLI** | [#3218](https://github.com/nanoclaw/pull/3218) | **Medium** — Generic `--stdin-json` for host/container clients; enables scripting/automation. |
| **Skill-owned capability seams** | [#3186](https://github.com/nanoclaw/pull/3186) | **Medium** — Refactor to let skills register capabilities; foundational for plugin architecture. |
| **Module migration registry** | [#3212](https://github.com/nanoclaw/pull/3212) | **Medium** — DB schema versioning for modules; enables safe upgrades. |
| **CVE-gated Docker Hub publishing** | [#3208](https://github.com/nanoclaw/pull/3208) | **High** — Core-team workflow; manual-dispatch, multi-arch, grype gate. Near production readiness. |

**Prediction:** Next version will likely include: `pip` channel support, Dial channel, CVE-gated image publishing, and the `tar` CVE fix. The internal refactors (#3212–#3215, #3218) may land together as a "platform stabilization" release.

## 7. User Feedback Summary
- **Pain point (new):** "Cannot adopt hardened prebuilt images because `install_packages` lacks pip support" ([#3217](https://github.com/nanoclaw/issues/3217)). User `stumpjumper` explicitly states this blocks Python-dependent agents.
- **Pain point (long-standing):** Signal attachments silently fail (images unreadable, non-image files dropped) — reported May 2026 ([#2528](https://github.com/nanoclaw/issues/2528) → #2529, #3142). Users cannot build reliable Signal bots.
- **Pain point (usability):** Slack pasted tables not reaching agent ([#3209](https://github.com/nanoclaw/pull/3209)).
- **Positive signal:** Core team investing heavily in supply-chain security (CVE gates, multi-arch publishing, base-image hygiene) — indicates production/enterprise focus.
- **No direct satisfaction/dissatisfaction comments** on PRs (all 0 comments). Community engagement appears low; development is core-team driven.

## 8. Backlog Watch
| Item | Age | Why It Needs Attention |
|------|-----|------------------------|
| [#2529](https://github.com/nanoclaw/pull/2529) Fix Signal inbound attachments | **85 days** (since 2026-05-18) | Fixes #2528. Core channel functionality broken. PR exists, unmerged. |
| [#3142](https://github.com/nanoclaw/pull/3142) Signal: forward attachments via mounted inbox | **14 days** (since 2026-07-27) | Complements #2529; fixes unmounted path bug. Still open. |
| [#3041](https://github.com/nanoclaw/pull/3041) Dial channel adapter | **27 days** (since 2026-07-14) | Major new channel (SMS/voice). Feature skill + wizard. Stalled in review? |
| [#3050](https://github.com/nanoclaw/pull/3050) Dial in channel picker + skills | **27 days** (since 2026-07-14) | Companion to #3041. Both need review to unblock voice/SMS. |
| [#3186](https://github.com/nanoclaw/pull/3186) Host seams for skill-owned capabilities | **6 days** (since 2026-08-04) | Foundational refactor for extensibility. Part of `zvi-fried` batch. |
| [#3217](https://github.com/nanoclaw/issues/3217) `install_packages` missing pip channel | **1 day** (new) | **Highest user impact** — blocks hardened-image adoption for Python workloads. No fix PR yet. |

**Maintainer action suggested:** Prioritize review/merge of Signal attachment fixes (#2529, #3142) and Dial channel (#3041, #3050). Create a fix PR for #3217 (add `packages_pip` to `install_packages` model) — this is a deployment blocker. The `tar` CVE fix (#3207) and publish workflow (#3208) should be fast-tracked for security.

---

**Project Health Indicators**
- ⚠️ **Merge throughput: 0/16** — Review bottleneck or batching
- ✅ **Security hygiene: Active** — CVE gating, base-image updates, supply-chain workflow
- ✅ **Architecture investment: High** — Module registry, lifecycle hooks, skill seams, DB migrations
- ⚠️ **Channel parity gaps** — Signal attachments broken 3 months; Slack tables; no pip in hardened images
- 📈 **Strategic expansion** — Dial (voice/SMS) signals move beyond text chat

*Data source: GitHub API snapshot for nanocoai/nanoclaw, 2026-08-10 00:00–23:59 UTC.*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-08-10

---

## 1. Today's Overview

IronClaw is in an active **bug-bash and stabilization phase** with no new releases today. The project saw **49 total updates** (22 issues, 27 PRs) in the last 24 hours, reflecting intensive triage and fix work. Seven issues were closed and eight PRs merged/closed, indicating steady resolution velocity. The issue backlog is dominated by **QA-identified bugs** (Slack integration, tool discovery, UI rendering, automation state consistency) and **architectural enhancements** around deferred tool discovery, parallel capability execution, and progressive previews. Core contributors and bots are delivering targeted fixes, while dependabot maintains dependency hygiene.

---

## 2. Releases

**No new releases** published today. Current stable remains `1.1.0` (referenced in #7400).

---

## 3. Project Progress — Merged / Closed PRs Today

| PR | Title | Impact |
|----|-------|--------|
| [#7171](https://github.com/nearai/ironclaw/pull/7171) | **fix(skills): one DB-backed tree for every skill mount, and make a skill's own commands runnable** | Resolves skill installation vanishing from Settings; unblocks skill activation and virtual FS mount (#6941 item 4). |
| [#7022](https://github.com/nearai/ironclaw/pull/7022) | **chore(deps): bump actions/setup-node 4.0.2 → 7.0.0, docker/login-action** | CI dependency modernization. |
| [#7387](https://github.com/nearai/ironclaw/pull/7387) | **chore(deps): 12 crate updates (base64, toml, rstest, etc.)** | Routine dependency maintenance. |
| [#7401](https://github.com/nearai/ironclaw/pull/7401) | **Reject streamed Responses requests with external tools** | Prevents zombie-thread creation (#7400) by returning 400 before submission. |
| [#7403](https://github.com/nearai/ironclaw/pull/7403) | **Fixed WebUI activity chronology** | Corrects out-of-order Activity blocks and progress messages (#7348). |
| [#7404](https://github.com/nearai/ironclaw/pull/7404) | **Rendered emoji shortcodes in chat Markdown** | Fixes raw `:wave:`/`:smile:` display (#7346). |
| [#7402](https://github.com/nearai/ironclaw/pull/7402) | **Report exact automation totals without widening the page** | Resolves agent/UI count mismatch (50 vs 61) (#7345). |
| [#7395](https://github.com/nearai/ironclaw/pull/7395) | **fix(outbound): close send-claim TOCTOU race and allow failed-row reopen** | Hardens outbound delivery reliability. |

*Eight PRs closed/merged — all focused on stability, UI correctness, and delivery hardening.*

---

## 4. Community Hot Topics — Most Active Issues & PRs

| Item | Comments | Core Need |
|------|----------|-----------|
| [#7405](https://github.com/nearai/ironclaw/issues/7405) **Improve deferred tool discovery with complete signatures and namespace-aware catalog previews** | 2 | Reduce model turns and improve catalog awareness at scale (100–1000 tools). PR [#7410](https://github.com/nearai/ironclaw/pull/7410) implements Phase 1. |
| [#7407](https://github.com/nearai/ironclaw/issues/7407) **Execute BatchPolicy::Parallel capability batches concurrently** | 2 | Unlock true parallelism for multi-tool-call turns; zero model-facing change. |
| [#7396](https://github.com/nearai/ironclaw/pull/7396) **feat(channels): generic progressive previews for Slack/Telegram** | 0 (XL scope) | First-class editable previews for chat channels; parity with web-push. |
| [#7398](https://github.com/nearai/ironclaw/pull/7398) **feat(web-push): browser push notifications + PWA** | 0 (XL scope) | Web app as first-party notification channel (RFC 8030/8291/8292). |
| [#7166](https://github.com/nearai/ironclaw/issues/7166) **[epic, v1.2.0] Tool disclosure follow-up** | 1 | Progressive tool disclosure as Reborn default; safety + efficiency. |
| [#7392](https://github.com/nearai/ironclaw/issues/7392) **[epic] Replace first-party coding tools with pinned omp tool surface** | 0 | Adopt `can1357/oh-my-pi` contract for coding tools; reduce maintenance surface. |

**Signal:** The community (core team) is converging on **tool-discovery UX at scale**, **parallel execution**, and **notification-channel parity** as v1.2.0 pillars.

---

## 5. Bugs & Stability — Today's Reports (Ranked by Severity)

| Severity | Issue | Status | Fix PR |
|----------|-------|--------|--------|
| **Critical** | [#7400](https://github.com/nearai/ironclaw/issues/7400) `stream: true` + caller `tools[]` on `/api/v1/responses` → mid-stream failure + **undeletable zombie thread** | Open | [#7401](https://github.com/nearai/ironclaw/pull/7401) (preventive 400) |
| **High** | [#7292](https://github.com/nearai/ironclaw/issues/7292) Installed tool unusable; runner heartbeat error after CoinGecko install | Closed | — |
| **High** | [#5882](https://github.com/nearai/ironclaw/issues/5882) Repeated Slack reconnect → broken auth flow ("Waiting for Slack..." indefinitely) | Open | — |
| **Medium** | [#7348](https://github.com/nearai/ironclaw/issues/7348) Activity tool calls & progress messages **out of chronological order** | Open | [#7403](https://github.com/nearai/ironclaw/pull/7403) ✅ |
| **Medium** | [#7346](https://github.com/nearai/ironclaw/issues/7346) Emoji shortcodes (`:wave:`, `:smile:`) rendered as plain text | Open | [#7404](https://github.com/nearai/ironclaw/pull/7404) ✅ |
| **Medium** | [#7349](https://github.com/nearai/ironclaw/issues/7349) Page refresh **loses run history & Activity timeline** | Open | — |
| **Medium** | [#7345](https://github.com/nearai/ironclaw/issues/7345) Agent reports 61 automations; UI shows 50 | Open | [#7402](https://github.com/nearai/ironclaw/pull/7402) ✅ |
| **Medium** | [#5522](https://github.com/nearai/ironclaw/issues/5522) Reborn routine fails on Slack DM read — no capability + `capability_info` retry loop | Closed | — |
| **Medium** | [#6046](https://github.com/nearai/ironclaw/issues/6046) Simple email-to-sheet workflow → **124 tool invocations** (excessive) | Open | — |
| **Low** | [#5551](https://github.com/nearai/ironclaw/issues/5551) Automation posts intermediate progress to Slack instead of final result | Open | — |
| **Low** | [#5878](https://github.com/nearai/ironclaw/issues/5878) Revoked GitHub token → misleading errors, no re-auth prompt | Open | — |

**Stability note:** Three medium-severity UI bugs fixed today via bot PRs (#7402–#7404). Critical API bug (#7400) has preventive mitigation; root-cause fix for zombie-thread cleanup still needed.

---

## 6. Feature Requests & Roadmap Signals

| Feature | Source | Likelihood for Next Release |
|---------|--------|-----------------------------|
| **Deferred tool discovery with complete signatures & namespace-aware previews** | [#7405](https://github.com/nearai/ironclaw/issues/7405) + [#7410](https://github.com/nearai/ironclaw/pull/7410) | **High** — Phase 1 PR open, baseline tests in [#7409](https://github.com/nearai/ironclaw/pull/7409) |
| **Parallel `BatchPolicy::Parallel` execution in `invoke_capability_batch`** | [#7407](https://github.com/nearai/ironclaw/issues/7407) | **High** — Zero model-facing change, pure runtime win |
| **Generic progressive previews for Slack/Telegram** | [#7396](https://github.com/nearai/ironclaw/pull/7396) | **High** — XL PR, channel-neutral contract |
| **Web Push / PWA as first-party notification channel** | [#7398](https://github.com/nearai/ironclaw/pull/7398) | **High** — XL PR, RFC-compliant, parity with Slack/Telegram |
| **Replace first-party coding tools with `oh-my-pi` pinned surface** | [#7392](https://github.com/nearai/ironclaw/issues/7392) | **Medium** — Epic, requires migration planning |
| **Stress coverage for built-in & durable write paths** | [#7360](https://github.com/nearai/ironclaw/issues/7360) | **Medium** — CI/infra investment |
| **Guardrails against routine-inception (self-replicating automations)** | [#6479](https://github.com/nearai/ironclaw/issues/6479) | **Medium** — Safety critical, no PR yet |
| **Slack DM read capability** | [#5522](https://github.com/nearai/ironclaw/issues/5522) | **Medium** — Blocked on capability surface |

**Prediction:** v1.2.0 will ship **parallel batch execution**, **enhanced tool discovery**, **progressive previews**, and **web-push notifications** as headline features.

---

## 7. User Feedback Summary — Pain Points & Use Cases

| Pain Point | Evidence | User Impact |
|------------|----------|-------------|
| **Slack integration fragility** | #5522, #5882, #5551, #7292 | Auth loops, missing DM read, wrong message delivered, tool install broken |
| **UI/UX regressions in chat** | #7346, #7348, #7349, #4341, #4344 | Emojis broken, history lost on refresh, timeline scrambled, CoT leakage |
| **Automation state opacity** | #7345, #5510, #6479 | Agent/UI count mismatch, cannot delete routines, routine-inception risk |
| **Tool discovery inefficiency** | #7405, #6046 | 124 calls for simple task; model turns wasted on schema fetching |
| **Token revocation handling** | #5878 | Misleading errors instead of re-auth flow |
| **Run delivery silence on failure** | #7131 (PR) | Creators unaware of triggered-run failures |

**Positive signal:** Bot-delivered fixes (#7402–#7404) show automated regression detection working for UI issues.

---

## 8. Backlog Watch — Stale / High-Value Items Needing Attention

| Item | Age | Why It Matters |
|------|-----|----------------|
| [#5882](https://github.com/nearai/ironclaw/issues/5882) **Slack reconnect → broken auth flow** | 32 days | Core integration; only fix = reinstall extension |
| [#6479](https://github.com/nearai/ironclaw/issues/6479) **Routines can create/modify other routines (self-replication risk)** | 19 days | Safety/guardrail gap; no PR |
| [#6046](https://github.com/nearai/ironclaw/issues/6046) **124 tool calls for simple email→sheet task** | 28 days | Efficiency/UX; indicates planner/tool-selection pathology |
| [#5510](https://github.com/nearai/ironclaw/issues/5510) **Cannot delete old routines** | 40 days | Compounds Slack target drift; user needs "complete restart" |
| [#7392](https://github.com/nearai/ironclaw/issues/7392) **Replace coding tools with `oh-my-pi` surface** | 2 days (epic) | Strategic technical debt reduction; needs design review |
| [#7166](https://github.com/nearai/ironclaw/issues/7166) **Tool disclosure follow-up (v1.2.0 epic)** | 6 days | Umbrella for progressive disclosure; track completion |
| [#4341](https://github.com/nearai/ironclaw/issues/4341) **Agent CoT exposed to user (Qwen model)** | 69 days | Model-specific rendering bug; may need model-agnostic fix |

**Recommendation:** Prioritize #5882 (Slack auth), #6479 (safety), and #6046 (efficiency) for next sprint. Assign owners for epics #7166 and #7392.

---

*Digest generated from GitHub data as of 2026-08-10. All links point to live items on github.com/nearai/ironclaw.*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-08-10

---

## 1. Today's Overview
LobsterAI shows **low code contribution activity** but **active issue triage** over the last 24 hours. Three issues were updated (all pre-existing, none new), reflecting ongoing community discussion around model configuration flexibility, provider parsing logic, and multi-agent orchestration. No pull requests were opened, merged, or closed, and no new releases were published. The project appears in a **maintenance-and-feedback-gathering phase**, with maintainers yet to engage on the latest reports.

---

## 2. Releases
**No new releases** in the last 24 hours. The latest published version remains prior to this reporting window.

---

## 3. Project Progress
**No merged or closed PRs today.** Zero pull request activity means no features, fixes, or refactors advanced through the merge pipeline. All momentum is currently in the issue tracker.

---

## 4. Community Hot Topics
| Issue | Title | Activity | Link |
|-------|-------|----------|------|
| **#2453** | 切换自定义模型，被系统定义为不许可？ | 1 comment, 0 👍, created & updated **today** | [#2453](https://github.com/netease-youdao/LobsterAI/issues/2453) |
| **#1187** | 建议在设置模型api的选项中增加上下文窗口大小设置和输出token设置 | 2 comments, 1 👍, stale since **2026-04-01** | [#1187](https://github.com/netease-youdao/LobsterAI/issues/1187) |
| **#2132** | 跨模型子任务调用的问题（主任务为M3擅长规划+验收监督汇报，子任务为deepseek擅长快速执行） | 1 comment, 0 👍, stale since **2026-06-09** | [#2132](https://github.com/netease-youdao/LobsterAI/issues/2132) |

**Analysis**:  
- **#2453** is the only *fresh* issue (filed today) and exposes a **provider/model parsing bug** affecting OpenRouter/NVIDIA free models — a clear usability blocker for multi-provider workflows.  
- **#1187** and **#2132** are *stale but re-surfaced* (updated today), signaling persistent unmet needs: **granular model parameter control** and **cross-model agent coordination**.  
- Underlying theme: **users want first-class support for heterogeneous model fleets** (different providers, context windows, pricing tiers) and **reliable inter-agent communication** across them.

---

## 5. Bugs & Stability
| Severity | Issue | Description | Fix PR? |
|----------|-------|-------------|---------|
| **High** | [#2453](https://github.com/netease-youdao/LobsterAI/issues/2453) | Custom model IDs like `custom_1/openai/gpt-oss-20b:free` misparsed → provider=`openai`, model=`gpt-oss-20b:free` → rejected as unauthorized. Breaks model switching in active threads. | No |
| **Medium** | [#1187](https://github.com/netease-youdao/LobsterAI/issues/1187) | Context overflow errors (`prompt too large`) due to missing `context_window` / `max_output_tokens` per-model settings. Users cannot tune per-model limits. | No |
| **Medium** | [#2132](https://github.com/netease-youdao/LobsterAI/issues/2132) | Cross-model subtask calls (e.g., M3 planner → DeepSeek executor) fail: gateway function calls not tracked in `sessions_list` or `subagents`, breaking notification/coordination. | No |

**No fix PRs exist for any of the above.** All three represent **unresolved regressions or architectural gaps**.

---

## 6. Feature Requests & Roadmap Signals
| Request | Source | Likelihood for Next Version |
|---------|--------|-----------------------------|
| Per-model `context_window` & `max_output_tokens` in settings UI | [#1187](https://github.com/netease-youdao/LobsterAI/issues/1187) | **High** — direct UX fix, low complexity, high user demand (1 👍, 2 comments) |
| Robust provider/model ID parsing for custom/OpenRouter/NVIDIA models | [#2453](https://github.com/netease-youdao/LobsterAI/issues/2453) | **High** — critical for multi-provider support, blocks free-tier usage |
| Cross-model subtask notification & coordination protocol | [#2132](https://github.com/netease-youdao/LobsterAI/issues/2132) | **Medium** — architectural, requires gateway/session redesign; but detailed spec provided by user |
| Explicit cross-model subtask invocation API (user-proposed design) | [#2132](https://github.com/netease-youdao/LobsterAI/issues/2132) | **Medium** — aligns with agent-orchestration trends; may wait for core stability |

**Prediction**: Next patch (vNext) will likely address **#2453** and **#1187** (settings + parsing). **#2132** may land in a minor feature release after design review.

---

## 7. User Feedback Summary
| Pain Point | Evidence | Impact |
|------------|----------|--------|
| **Model switching breaks in-thread** | #2453: “especially disruptive when switching models in a thread” | High — interrupts workflow, forces new threads |
| **No control over context/token limits** | #1187: “Context overflow… prompt too large” | High — hard failure on long contexts |
| **Cross-model agents don’t talk** | #2132: “gateway call not in sessions_list or subagents” | Medium-High — blocks advanced multi-agent patterns |
| **Free-tier models (OpenRouter/NVIDIA) unusable** | #2453: “error on both OpenRouter free and NVIDIA models” | Medium — limits cost-sensitive users |

**Use cases revealed**:  
- Heterogeneous model routing (planner + executor)  
- Cost optimization via free-tier providers  
- Long-context document processing  

**Sentiment**: Frustration on **reliability basics** (switching, context), curiosity/expectation on **agent orchestration**. No praise or satisfaction signals in recent data.

---

## 8. Backlog Watch
| Item | Age | Status | Why It Needs Attention |
|------|-----|--------|------------------------|
| [#1187](https://github.com/netease-youdao/LobsterAI/issues/1187) | **131 days** (since 2026-04-01) | Open, stale | Simple settings addition; 1 👍, 2 comments; blocks long-context users |
| [#2132](https://github.com/netease-youdao/LobsterAI/issues/2132) | **62 days** (since 2026-06-09) | Open, stale | Detailed technical spec provided; enables core multi-agent value prop |
| [#2453](https://github.com/netease-youdao/LobsterAI/issues/2453) | **1 day** (filed today) | Open, fresh | **Critical regression** for custom/OpenRouter models; zero workarounds |

**Maintainer action recommended**:  
1. **Triage #2453 immediately** — parse fix likely 1–2 lines in provider resolver.  
2. **Schedule #1187** for next patch — low effort, high relief.  
3. **Assign #2132** to architecture owner — design exists, needs implementation sprint.

---

*Digest generated from GitHub data as of 2026-08-10 00:00 UTC. All links point to live issues on github.com/netease-youdao/LobsterAI.*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-08-10

## 1. Today's Overview
Moltis saw light but focused activity over the last 24 hours: two new bug reports were filed and one security-oriented pull request was opened. No releases were published, and no PRs were merged or closed. The project remains in active maintenance mode with contributors addressing both a UI state-management defect and a container-runtime compatibility issue, while a vault hardening fix awaits review. Overall velocity is low but signal-to-noise is high—each item targets a concrete correctness or compatibility problem.

## 2. Releases
**No new releases** in the last 24 hours.

## 3. Project Progress
**Merged/Closed PRs today:** None.  
The single open PR (#1186) addresses a vault security hardening task but has not yet been reviewed or merged.

## 4. Community Hot Topics
| Item | Type | Engagement | Link |
|------|------|------------|------|
| #1187 | Bug | 0 comments, 0 👍 | [Heartbeat settings UI silently resets fields not represented by the form](https://github.com/moltis-org/moltis/issues/1187) |
| #1185 | Bug | 0 comments, 0 👍 | [Apple Container 1.x sandbox starts but Moltis treats it as not running](https://github.com/moltis-org/moltis/issues/1185) |
| #1186 | PR (fix) | 0 comments, 0 👍 | [fix(vault): normalize recovery phrase before hashing](https://github.com/moltis-org/moltis/pull/1186) |

*Analysis:* All three items are fresh (created 2026-08-08/09) and have not yet attracted community discussion. The two bugs affect distinct surfaces—settings persistence and container orchestration—while the PR targets a cryptographic consistency gap in vault unsealing. No single thread dominates; maintainer triage will set priority.

## 5. Bugs & Stability
| Severity | Issue | Summary | Fix PR? |
|----------|-------|---------|---------|
| **Medium** | [#1187](https://github.com/moltis-org/moltis/issues/1187) | Heartbeat settings form discards any field not explicitly rendered, causing silent data loss on save. Affects configuration integrity. | No |
| **Medium** | [#1185](https://github.com/moltis-org/moltis/issues/1185) | Apple Container 1.x sandbox reports “running” but Moltis misclassifies it as stopped, breaking workload scheduling on macOS. | No |

*Notes:* Both bugs are functional regressions with user-visible impact (lost settings, failed container ops). Neither has an attached fix PR yet.

## 6. Feature Requests & Roadmap Signals
No feature requests or enhancement issues were updated in the last 24 hours. The current signal is purely corrective: settings-form robustness, container-runtime compatibility, and vault cryptographic hygiene.

## 7. User Feedback Summary
- **Settings UX frustration:** User reports that editing heartbeat parameters wipes unrelated configuration fields, eroding trust in the UI’s safety.  
- **macOS container adoption blocker:** Early adopter of Apple Container 1.x finds Moltis unable to recognize running sandboxes, halting local development workflows.  
- **Security hygiene expectation:** The vault PR reflects an implicit user expectation that recovery phrases should be case- and dash-insensitive end-to-end, not just at unseal time.

## 8. Backlog Watch
| Item | Age | Why It Needs Attention |
|------|-----|------------------------|
| [#1187](https://github.com/moltis-org/moltis/issues/1187) | 1 day | Silent data loss in settings is a high-trust-risk bug; should be triaged and a fix PR opened before next release. |
| [#1185](https://github.com/moltis-org/moltis/issues/1185) | 2 days | Apple Container 1.x is a new runtime target; compatibility fix unblocks macOS users and signals platform support commitment. |
| [#1186](https://github.com/moltis-org/moltis/pull/1186) | 1 day | Security hardening for vault recovery; low-risk, high-value merge candidate once reviewed. |

---
*Digest generated from GitHub data covering 2026-08-09 → 2026-08-10. All links point to the canonical Moltis repository.*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-08-10

## 1. Today's Overview
CoPaw (github.com/agentscope-ai/QwenPaw) shows **very high development velocity** with 16 issues and 50 pull requests updated in the last 24 hours. Only 1 PR was merged (#6846, a first-time contributor adding DeepSeek V4 context windows), while 49 PRs remain open — many tagged `[Under Review]` or `[first-time-contributor]`. No new releases were cut. The project is in active feature development and bug-fix mode, with a strong influx of community contributions and several critical frontend/backend bugs surfacing in v2.1.0b2.

---

## 2. Releases
**No new releases today.** Current channel appears to be v2.1.0b2 (beta) based on issue reports.

---

## 3. Project Progress (Merged/Closed PRs)
| PR | Title | Type | Impact |
|----|-------|------|--------|
| [#6846](https://github.com/agentscope-ai/QwenPaw/pull/6846) | feat(providers): catalog DeepSeek V4 context windows (1M) | Feature / Config | Fixes context-window default fallback (131k → 1M) for `deepseek-v4-flash/pro`; prevents premature compaction. Merged. |

*49 other PRs remain open — notable ones under active review:*
- [#6360](https://github.com/agentscope-ai/QwenPaw/pull/6360) — Fix context injection role (system → user) to pass AgentScope validation
- [#6398](https://github.com/agentscope-ai/QwenPaw/pull/6398) — Add reranker support for ReMe memory search (backend)
- [#6715](https://github.com/agentscope-ai/QwenPaw/pull/6715) — OneBot: handle remote inbound voice/image media (CDN URLs)
- [#6809](https://github.com/agentscope-ai/QwenPaw/pull/6809) — Sanitize Chat Completions content for strict providers (StepFun, etc.)
- [#6843](https://github.com/agentscope-ai/QwenPaw/pull/6843) — Stream SSE in real-time via pure ASGI middleware (fixes buffered output)
- [#6845](https://github.com/agentscope-ai/QwenPaw/pull/6845) — Preserve assistant completion time on history reload
- [#6844](https://github.com/agentscope-ai/QwenPaw/pull/6844) — Strip `$schema` from Gemini tool schemas (fixes #6812)

---

## 4. Community Hot Topics (Most Active Issues/PRs)

| Item | Comments | Summary | Underlying Need |
|------|----------|---------|-----------------|
| [#2291](https://github.com/agentscope-ai/QwenPaw/issues/2291) | **66** | **Help Wanted: Open Tasks (S1)** — community task board, P0–P2 priorities. Long-running (since Mar 2026). | Structured onboarding & contributor coordination; maintainers need help triaging/executing roadmap. |
| [#6281](https://github.com/agentscope-ai/QwenPaw/issues/6281) | 5 | **Web Console Mobile Adaptation** | Mobile-first usage; users want to manage agents on phones/tablets. |
| [#6826](https://github.com/agentscope-ai/QwenPaw/issues/6826) | 4 | **Assistant message end time displays incorrectly** (shows seconds vs actual 2 min) | Accurate telemetry for debugging/UX; fix PR [#6845](https://github.com/agentscope-ai/QwenPaw/pull/6845) open. |
| [#6839](https://github.com/agentscope-ai/QwenPaw/issues/6839) | 3 | **MCP tool calls string→number coercion** breaks API calls | Type fidelity in tool calling; affects MCP integrations. |
| [#6812](https://github.com/agentscope-ai/QwenPaw/issues/6812) | 3 | **Gemini "Model 'unknown' execution failed"** due to `$schema` in tool schema | Provider compatibility; fix PR [#6844](https://github.com/agentscope-ai/QwenPaw/pull/6844) open. |
| [#6851–#6852](https://github.com/agentscope-ai/QwenPaw/issues/6851) | 2 each (×4 dup) | **Frontend collapses long multi-line tool output into unreadable blob** | Readability of agent/tool output; critical for debugging long runs. |

---

## 5. Bugs & Stability (Reported Today, Ranked by Severity)

| Severity | Issue | Description | Fix PR? |
|----------|-------|-------------|---------|
| **High** | [#6812](https://github.com/agentscope-ai/QwenPaw/issues/6812) | Gemini API rejects tool schemas with `$schema` field → "Model 'unknown' execution failed" | ✅ [#6844](https://github.com/agentscope-ai/QwenPaw/pull/6844) |
| **High** | [#6839](https://github.com/agentscope-ai/QwenPaw/issues/6839) | MCP tool params: numeric strings coerced to numbers → call failures (e.g., `assetInfo: "0.600001"` → `0.600001`) | ❌ |
| **High** | [#6847](https://github.com/agentscope-ai/QwenPaw/issues/6847) | Antivirus kills QwenPaw process during task execution (WorkBuddy unaffected) | ❌ — needs code signing / behavior analysis |
| **Medium** | [#6826](https://github.com/agentscope-ai/QwenPaw/issues/6826) | Assistant completion time shows seconds instead of actual minutes | ✅ [#6845](https://github.com/agentscope-ai/QwenPaw/pull/6845) |
| **Medium** | [#6851–#6852](https://github.com/agentscope-ai/QwenPaw/issues/6851) | Frontend renderer collapses long tool output (×4 duplicate reports) | ❌ |
| **Medium** | [#6853](https://github.com/agentscope-ai/QwenPaw/issues/6853) | `prompts.py` claims Dream writes to `MEMORY.md`; actually writes to `digest/` — never implemented | ❌ |
| **Low** | [#6841](https://github.com/agentscope-ai/QwenPaw/issues/6841) | Auto-Dream: single unit schema failure marks whole task error (no retry/tolerance) | ❌ |

---

## 6. Feature Requests & Roadmap Signals

| Issue | Signal | Likelihood for Next Version |
|-------|--------|----------------------------|
| [#6281](https://github.com/agentscope-ai/QwenPaw/issues/6281) | Mobile-responsive Web Console | **High** — 5 comments, clear UX gap; PR [#6312](https://github.com/agentscope-ai/QwenPaw/pull/6312) (theme/skin) suggests frontend investment |
| [#6832](https://github.com/agentscope-ai/QwenPaw/issues/6832) | Approval requests need human-readable purpose description | **High** — PR [#6854](https://github.com/agentscope-ai/QwenPaw/pull/6854) already implements localized purpose descriptions |
| [#6840](https://github.com/agentscope-ai/QwenPaw/issues/6840) | ReMe4 roadmap: Auto-Link, tri-modal search, 4-category digest weights | **Medium** — ReMe Light (0.4.1.4) shipped in 2.1.0b2; full ReMe4 tracked |
| [#6841](https://github.com/agentscope-ai/QwenPaw/issues/6841) | Auto-Dream retry + tolerance for partial failures | **Medium** — architectural, may wait for ReMe4 |
| [#6704](https://github.com/agentscope-ai/QwenPaw/pull/6704) | Session fork (snapshot conversation to new session) | **High** — PR open, `ready-for-human-review`, addresses #6560 |
| [#6842](https://github.com/agentscope-ai/QwenPaw/pull/6842) | Hidden agents flag (enabled but invisible in UI) | **High** — first-time contributor PR, plugin use-case |
| [#6398](https://github.com/agentscope-ai/QwenPaw/pull/6398) | Reranker support for ReMe memory search | **Medium** — backend work, under review |

---

## 7. User Feedback Summary (Pain Points & Use Cases)

| Theme | Evidence | Sentiment |
|-------|----------|-----------|
| **Frontend rendering broken for long output** | 4 duplicate issues (#6848–#6851) in one day — "unreadable blob" | 😡 Frustrated; blocks debugging |
| **Antivirus false positives** | #6847 with screenshots — "killed by AV, WorkBuddy not affected" | 😟 Concerned; trust/security blocker |
| **Provider compatibility gaps** | Gemini `$schema` (#6812), strict OpenAI-compat providers (#6809), Ascend-vLLM regression (#5584 closed but unresolved) | 😐 Tolerating workarounds; need robustness |
| **Approval UX opacity** | #6832 — users must read raw PowerShell to understand permission requests | 😐 Negative; PR #6854 addresses |
| **Memory system accuracy** | #6853 — docs claim Dream→MEMORY.md, reality is digest/ | 😕 Misleading; erodes trust in ReMe |
| **Mobile access** | #6281 — "convenient to operate on mobile" | 🙂 Positive intent; unmet need |
| **Session management** | #6704 (fork), #6750 (deadlock/oversized prompt) — active session workflow pain | 😐 Mixed; fixes in flight |

---

## 8. Backlog Watch (Stale/Important Items Needing Maintainer Attention)

| Item | Age / Status | Why It Matters |
|------|--------------|----------------|
| [#2291](https://github.com/agentscope-ai/QwenPaw/issues/2291) | **5 months** (Mar 2026), 66 comments | **Community task board** — 66 comments show engagement but many tasks "Not Started"; needs triage/owner assignment to convert interest into merged code. |
| [#6360](https://github.com/agentscope-ai/QwenPaw/pull/6360) | 19 days, `OPEN` | **Core fix**: context injection role `system→user` breaks AgentScope validation; blocks memory/context features. |
| [#6398](https://github.com/agentscope-ai/QwenPaw/pull/6398) | 18 days, `Under Review` | **ReMe reranker** — key for memory search quality; backend ready, needs review. |
| [#6312](https://github.com/agentscope-ai/QwenPaw/pull/6312) | 20 days, `OPEN` (draft) | **Theme/skin module** — Task 1 from #2291; draft for direction review; unblocks mobile/custom branding. |
| [#6704](https://github.com/agentscope-ai/QwenPaw/pull/6704) | 5 days, `ready-for-human-review` | **Session fork** — high-value UX feature; review-ready. |
| [#6809](https://github.com/agentscope-ai/QwenPaw/pull/6809) | 3 days, `OPEN` | **Provider sanitization** — fixes StepFun/strict provider rejections; broad compatibility impact. |

---

## Health Indicators
- **Contributor funnel healthy**: 10+ `[first-time-contributor]` PRs in 24h.
- **Review capacity stretched**: 49 open PRs vs 1 merged; several `Under Review` >1 week.
- **Bug regression in beta**: v2.1.0b2 introduced frontend rendering + provider compat issues.
- **Documentation drift**: #6853 reveals user-facing docs (prompts) not matching implementation.

> **Recommendation**: Prioritize merging #6844, #6845, #6854, #6704, #6809 to unblock users; assign reviewers to #6360, #6398, #6312 to clear backlog; triage #2291 tasks to active contributors.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-08-10

## 1. Today's Overview
ZeroClaw shows **high governance and security activity** with 50 issues and 50 PRs updated in the last 24 hours. The project is in a **pre-release stabilization phase** (current: 0.8.3, last beta: 0.8.0-beta-1) with no new releases today. Activity is heavily skewed toward **RFCs, security hardening, and architectural trackers** — 14 of the top 30 issues are RFCs or trackers, and multiple high-severity security bugs (S0/S1) are in progress. PR velocity is high but **merge rate is low** (only 1 closed/merged PR today), suggesting maintainer review bandwidth is the bottleneck.

---

## 2. Releases
**No new releases today.** Current stable: **v0.8.3**. The v0.8.4 release was blocked by a Containerfile rustc version mismatch (rustc 1.95.0 < declared MSRV) — see [#9690](https://github.com/zeroclaw-labs/zeroclaw/issues/9690) (closed).

---

## 3. Project Progress (Merged/Closed Today)
Only **1 PR merged/closed** in the last 24h, but **12 issues closed** — mostly bug fixes and duplicates:
- **#9690** (closed): Containerfile rustc pin fixed — unblocked `all-features` Docker builds.
- **#9192** (closed): TOCTOU in `shared_budget` + `SopEngine::finish_run` panic — runtime robustness fix.
- **#8560** (closed): `browser_open` hang on headless hosts — subprocess wait timeout added.
- **#8731** (closed): Stdio MCP servers leaking as zombies — reaping logic added.
- **#9834** (closed): Intermittent `zeroclaw-runtime` test flakes from global state — test isolation improved.
- **#9860** (closed, duplicate): Web UI freeze on filesystem channel event — duplicate of existing tracking.
- **#9656** (closed): Telegram typing indicator stuck during approval wait — UX fix in progress.

> **Signal:** Closing bugs faster than merging PRs suggests **triage > integration** right now.

---

## 4. Community Hot Topics (Most Discussed)

| Item | Type | Comments | Core Theme |
|------|------|----------|------------|
| [#6808](https://github.com/zeroclaw-labs/zeroclaw/issues/6808) | RFC/Tracker | 22 | **Work Lanes, Board Automation, Label Cleanup** — governance overhaul for routing work without maintainer overhead. Deferred ratification, rollout in progress since 0.8.0-beta-1. |
| [#7100](https://github.com/zeroclaw-labs/zeroclaw/issues/7100) | RFC | 12 | **Per-model capability & context-window config** — unify vision/context sources, fix provider-family defaults misreporting vision, remove 32k fallback. High risk (P1). |
| [#9397](https://github.com/zeroclaw-labs/zeroclaw/issues/9397) | RFC | 11 | **WhatsApp `allowed_groups` empty = permit-none** — security default flip. Empty list currently admits all groups; change to deny-all. P1, in-progress. |
| [#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) | Tracker | 11 | **Maintainer decision queue for RFCs/design issues** — active queue for items needing code-owner attention before accept/reject/defer. |
| [#8054](https://github.com/zeroclaw-labs/zeroclaw/issues/8054) | Bug (closed) | 10 | **System prompt tool-availability mismatch** across entry points (channels, gateway, WS, multimodal, `/think`). Core fixed in #8053; follow-ups remain. |
| [#8681](https://github.com/zeroclaw-labs/zeroclaw/issues/8681) | Tracker | 10 | **Goal mode implementation split stack** — coordinating PR split of `feat/goal-mode` into reviewable chunks. |

**Underlying needs:**  
- **Governance scaling** — maintainers overwhelmed by RFC/decision volume (#6808, #8692, #9496).  
- **Security defaults** — multiple "fail-open" configurations being flipped to fail-closed (#9397, #9565).  
- **Model capability fidelity** — providers misreporting vision/context causing runtime bugs (#7100, #9757).  
- **Memory/observability stack** — 7-PR Hindsight memory stack (#9064–#9069) + Langfuse backend (#9556) in review.

---

## 5. Bugs & Stability (Ranked by Severity)

| Severity | Issue | Status | Fix PR |
|----------|-------|--------|--------|
| **S0** (data loss/security) | [#9565](https://github.com/zeroclaw-labs/zeroclaw/issues/9565): Gateway webhook handlers **do not fail closed** (WhatsApp Cloud, Linq, WATI) — attacker-controllable messages dispatched without auth | `in-progress` | — |
| **S1** (workflow blocked) | [#9085](https://github.com/zeroclaw-labs/zeroclaw/issues/9085): Nested runtime panic in `try_enable_pgvector` on gateway/agent startup (Postgres + pgvector) | `accepted` | — |
| **S1** | [#8642](https://github.com/zeroclaw-labs/zeroclaw/issues/8642): MCP/tool-schema cloning → **unbounded RSS growth** in agent loop (split from OOM tracker #5542) | `accepted` | — |
| **S2** (degraded) | [#9284](https://github.com/zeroclaw-labs/zeroclaw/issues/9284): Config flush can **overwrite concurrent writes** (race in `RpcDispatcher::flush_config`) | `accepted` | — |
| **S2** | [#9486](https://github.com/zeroclaw-labs/zeroclaw/issues/9486): High-entropy detector **redacts Solana wallet addresses** on Telegram; `high_entropy_tokens=false` ignored on channel path | `accepted` | — |
| **S2** | [#9825](https://github.com/zeroclaw-labs/zeroclaw/issues/9825): Leak detector redacts **public blockchain IDs** (false positive) — needs publish-safe exceptions | `needs-review` | — |
| **S3** (minor) | [#9198](https://github.com/zeroclaw-labs/zeroclaw/issues/9198): Discord typing indicator **stuck after dashboard reload** | `accepted` | — |

> **Note:** Several S1/S2 bugs have **accepted** status but no linked fix PR — maintainer assignment needed.

---

## 6. Feature Requests & Roadmap Signals

| Signal | Source | Likelihood for Next Version |
|--------|--------|-----------------------------|
| **Per-model capability/context config** | [#7100](https://github.com/zeroclaw-labs/zeroclaw/issues/7100) (RFC, P1, 12 comments) | **High** — unblocks vision/context bugs, UI accuracy |
| **WhatsApp `allowed_groups` default flip** | [#9397](https://github.com/zeroclaw-labs/zeroclaw/issues/9397) (RFC, P1, in-progress) | **High** — security default, low complexity |
| **Hindsight memory stack (7 PRs)** | [#9064–#9069](https://github.com/zeroclaw-labs/zeroclaw/pull/9064) (XL, needs-author-action) | **Medium** — large stack, rebased Aug 3, review bottleneck |
| **Langfuse observability backend** | [#9556](https://github.com/zeroclaw-labs/zeroclaw/pull/9556) (L, needs-author-action) | **Medium** — standalone feature, OTel-based |
| **ICT channel adapter (enterprise messaging)** | [#9555](https://github.com/zeroclaw-labs/zeroclaw/pull/9555) (XL, closed) | **Low** — closed, may reopen |
| **ProviderErrorKind classification** | [#9557](https://github.com/zeroclaw-labs/zeroclaw/pull/9557) (M, needs-author-action) | **High** — improves error UX, small scope |
| **Per-agent env vars + confined HOME** | [#9875](https://github.com/zeroclaw-labs/zeroclaw/pull/9875) (new, today) | **Medium** — security/isolation, delegate tool |
| **RFC process streamlining** | [#9496](https://github.com/zeroclaw-labs/zeroclaw/issues/9496) (RFC, P1, 6 comments) | **Meta** — affects all future features |

**Prediction:** Next patch (0.8.4) will likely include: **#9565 fix, #9397 default flip, #9557, #9757 (Anthropic tool-result images), #9690 (Docker fix)**. Hindsight memory stack may slip to 0.9.0.

---

## 7. User Feedback Summary (Pain Points & Use Cases)

| Pain Point | Evidence | Frequency |
|------------|----------|-----------|
| **Webhook auth bypass** | [#9565](https://github.com/zeroclaw-labs/zeroclaw/issues/9565) — 3 webhook handlers accept unauthenticated messages | Critical (S0) |
| **Solana addresses redacted** | [#9486](https://github.com/zeroclaw-labs/zeroclaw/issues/9486) — Telegram users can't share wallet addresses | High (S2) |
| **Discord typing stuck** | [#9198](https://github.com/zeroclaw-labs/zeroclaw/issues/9198) — dashboard reload breaks indicator | Medium (S3) |
| **Config race on save** | [#9284](https://github.com/zeroclaw-labs/zeroclaw/issues/9284) — concurrent writes lost | High (S2) |
| **pgvector panic on startup** | [#9085](https://github.com/zeroclaw-labs/zeroclaw/issues/9085) — blocks Postgres+vector users | High (S1) |
| **MCP memory leak** | [#8642](https://github.com/zeroclaw-labs/zeroclaw/issues/8642) — RSS growth in long-running agents | High (S1) |
| **SOPs silently not loading** | [#9779](https://github.com/zeroclaw-labs/zeroclaw/issues/9779) — documented default ignored, no warning | High (P1) |
| **Cron SOPs can't do network** | [#9780](https://github.com/zeroclaw-labs/zeroclaw/issues/9780) — watch-loops unusable for external polling | Medium (P2) |

**Use cases emerging:**  
- Enterprise messaging (ICT, WhatsApp Cloud, Linq, WATI)  
- Blockchain agent interactions (Solana, public addresses)  
- Long-running agents with MCP tools (memory pressure)  
- Dashboard-driven daemon management (reload UX)  
- Home Assistant integration (native tool #8994 in review)

---

## 8. Backlog Watch (Stale High-Value Items)

| Item | Age | Risk | Why It Matters |
|------|-----|------|----------------|
| [#6971](https://github.com/zeroclaw-labs/zeroclaw/issues/6971) | 75 days | High | **Security posture RFC** — credential boundaries, ingress policy, sandboxing. No movement since May 27. |
| [#7130](https://github.com/zeroclaw-labs/zeroclaw/issues/7130) | 68 days | Medium | **`forbid(unsafe_code)` workspace-wide** — only `aardvark-sys` carve-out. CI-ready, needs merge. |
| [#7897](https://github.com/zeroclaw-labs/zeroclaw/issues/7897) | 54 days | High | **Hot-reload security policy/channel config** — avoid full daemon reload. Critical for ops. |
| [#8519](https://github.com/zeroclaw-labs/zeroclaw/issues/8519) | 41 days | High | **cargo-audit/deny drift + wasmtime-wasi CVEs** — supply chain risk. Accepted, no PR. |
| [#9101](https://github.com/zeroclaw-labs/zeroclaw/issues/9101) | 25 days | High | **Consolidate 3 signing mechanisms → 1** — CI time, asset bloat (53→20). Accepted. |
| [#9328](https://github.com/zeroclaw-labs/zeroclaw/issues/9328) | 17 days | High | **verifiable-intent: constraint eval without credential chain verify** — crypto logic bug. |
| [#9496](https://github.com/zeroclaw-labs/zeroclaw/issues/9496) | 13 days | High | **RFC process overhaul** — 7-day min discussion, manual votes slowing all decisions. |
| [#9530](https://github.com/zeroclaw-labs/zeroclaw/issues/9530) | 12 days | Low | **Risk precedence for test-only changes in high-risk paths** — docs conflict. |

> **Maintainer attention needed:** 8 items > 2 weeks old with `accepted`/`needs-maintainer-review` and **high risk**. Review bandwidth is the limiting factor.

---

## Health Indicators
| Metric | Status |
|--------|--------|
| **Issue throughput** | 12 closed / 50 updated → **24% closure rate** (healthy triage) |
| **PR merge rate** | 1 merged / 50 updated → **2% merge rate** (bottleneck) |
| **Security posture** | 3 S0/S1 bugs open, multiple fail-open defaults being fixed |
| **Governance debt** | 14 RFCs/trackers in top 30 — process reform (#9496) urgent |
| **Release readiness** | v0.8.4 blocked on Docker + several S1 bugs; 0.8.3 stable |

**Bottom line:** ZeroClaw is **architecturally maturing** but **operationally constrained** by maintainer review capacity. Security hardening and governance scaling are the dominant themes. Next release will be a **security/stability patch**, not a feature drop.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/DenisZheng/agents-radar).*