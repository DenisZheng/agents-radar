# OpenClaw Ecosystem Digest 2026-07-21

> Issues: 354 | PRs: 500 | Projects covered: 13 | Generated: 2026-07-21 02:03 UTC

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

# Cross-Project Comparison Report: Personal AI Assistant / Agent Open-Source Ecosystem
**Date:** 2026-07-21 | **Scope:** 13 projects analyzed from community digests

---

## 1. Ecosystem Overview

The personal AI assistant/agent open-source landscape is **highly fragmented yet converging on shared architectural patterns**. Of 13 tracked projects, 7 show active development (NanoBot, Hermes Agent, PicoClaw, NanoClaw, IronClaw, LobsterAI, CoPaw), 3 are dormant (TinyClaw, Moltis, ZeptoClaw), and 3 had data failures or minimal activity (OpenClaw, NullClaw, ZeroClaw). The active cohort is racing toward **production-grade, multi-platform, self-hostable assistants** with emphasis on: unified turn/session lifecycles, secure credential handling, local model optimization (Ollama), and cross-channel session continuity (Telegram, Feishu, Matrix, Discord, custom channels). No single project dominates; instead, a **polycentric ecosystem** is emerging where each project specializes — NanoBot on platform integrations, IronClaw on architectural rigor, CoPaw on agent-mode flexibility, LobsterAI on desktop UX polish.

---

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Merged PRs | Release Status | Health Score |
|---------|--------------|-----------|------------|----------------|--------------|
| **NanoBot** | 7 | 30 | 11 | Accumulating for next | 🟢 Healthy |
| **Hermes Agent** | 50 | 50 | 8 | v0.19.0 shipped (regressions) | 🟡 Stabilizing |
| **PicoClaw** | 11 | 10 | 5 | v0.3.1 (main unstable) | 🟡 Active but fragile |
| **NanoClaw** | 6 | 20 | 6 | Pre-release consolidation | 🟢 Strong |
| **NullClaw** | 0 | 1 (Dependabot) | 0 | Stagnant | 🔴 Dormant |
| **IronClaw** | 43 | 50 | 28 | 1.0.0-rc.1 in prep | 🟡 High-risk transition |
| **LobsterAI** | 0 | 5 open / 10 merged* | 10 | Pre-release batch | 🟢 High velocity |
| **TinyClaw** | 0 | 0 | 0 | — | ⚫ Inactive |
| **Moltis** | 0 | 0 | 0 | — | ⚫ Inactive |
| **CoPaw** | 30 | 42 | 10 | v2.0.1 beta prep | 🟡 Good, critical bugs |
| **ZeptoClaw** | 0 | 0 | 0 | — | ⚫ Inactive |
| **OpenClaw** | — | — | — | — | ⚠️ Data failed |
| **ZeroClaw** | — | — | — | — | ⚠️ Data failed |

*LobsterAI: 10 PRs merged on 2026-07-20, 5 open as of digest.

**Activity Tiers:**
- **Tier 1 (High velocity, multi-contributor):** NanoBot, IronClaw, CoPaw, NanoClaw
- **Tier 2 (Steady, feature-focused):** LobsterAI, PicoClaw
- **Tier 3 (Release stabilization):** Hermes Agent
- **Tier 4 (Low/maintenance):** NullClaw
- **Tier 5 (Inactive):** TinyClaw, Moltis, ZeptoClaw

---

## 3. OpenClaw's Position

*Data unavailable due to summary generation failure.*  
**Inferred from ecosystem context:** As the "core reference" (github.com/openclaw/openclaw), OpenClaw likely serves as the **upstream architectural foundation** or shared library layer for downstream forks (PicoClaw, NanoClaw, IronClaw, ZeptoClaw, ZeroClaw — all sharing "Claw" naming). Its absence from active digests suggests either:
- **Stable core** with low churn (mature APIs, infrequent breaking changes)
- **Decoupled governance** where downstream projects drive visible innovation
- **Private/internal development** with periodic public syncs

**Expected advantages vs peers:** Canonical data models, provider abstraction layer, session/turn primitives, security primitives.  
**Expected technical approach:** Minimalist, protocol-oriented, dependency-light — enabling downstream specialization.  
**Community size signal:** If 5+ active forks exist, OpenClaw likely has **quiet but broad adoption** as a building block rather than end-user product.

---

## 4. Shared Technical Focus Areas (Cross-Project Requirements)

| Requirement | Projects Affected | Specific Needs |
|-------------|-------------------|----------------|
| **Local model performance (Ollama KV-cache)** | NanoBot (#4867), PicoClaw (#3251), CoPaw | Prompt-prefix stability, cache token observability, template standardization |
| **Credential security (plaintext keys in config)** | NanoBot (#4803), IronClaw (Gmail auto-auth #6348), PicoClaw (#3275) | `exclude=True` serialization, env-var migration, secret scanning, OAuth consent compliance |
| **Unified turn/session lifecycle** | NanoBot (#4993), IronClaw (Reborn), CoPaw (agent modes), LobsterAI | Single state machine, subagent/background turn visibility, stream resumption |
| **Cross-channel session continuity** | NanoBot (#4335), Hermes Agent (#4335, #68301), IronClaw (Telegram/WebUI #6349), CoPaw | Unified history across CLI, Telegram, Feishu, WebUI, Desktop; session bridging |
| **Self-hosting simplicity (one-click deploy)** | NanoBot (Render #4937, Dokploy #5007), PicoClaw (systemd #3276), NanoClaw (container #3060) | Docker Compose templates, PaaS buttons (Render, Railway, Dokploy), systemd integration |
| **Multi-agent / subagent reliability** | NanoBot (#4954, #4992), IronClaw (ACP #2277), CoPaw (#4873), Hermes Agent | Persistent identities, shared state, agent-to-agent comms, polling storm prevention |
| **WebUI/desktop UX polish** | NanoBot (Streamdown, activity language), Hermes Agent (sidebar #67600), CoPaw (zoom #6252, mobile #6281), LobsterAI (scroll/flicker fixes) | Real-time subagent visibility, keyboard nav, accessibility, artifact rendering, session grouping |
| **Provider integration resilience** | NanoBot (OpenAI-compat images), PicoClaw (Antigravity #3274, Gemini #3230), CoPaw (AIOnly #6271), Hermes Agent (OpenRouter #57642) | Schema transformation, fallback chains, model list freshness, streaming terminal markers |

---

## 5. Differentiation Analysis

| Project | Primary Focus | Target Users | Technical Architecture | Unique Differentiator |
|---------|---------------|--------------|------------------------|----------------------|
| **NanoBot** | **Platform integrations & operational robustness** | Self-hosters, power users, small teams | Go monolith, WebSocket gateways per channel, TurnContext state machine | Widest channel support (QQ, Feishu, Telegram, Matrix, Discord, Render, Dokploy); pragmatic bug velocity |
| **Hermes Agent** | **Extensible plugin ecosystem & cross-platform unity** | Developers, researchers, privacy-focused users | Python, plugin-based tools, session store abstraction, cron/skills | Largest contributor base (450+); native session bridging (CLI↔Telegram); skill/library system |
| **PicoClaw** | **Lightweight, embedded & mobile deployment** | IoT/edge developers, Android/Termux users, Chinese ecosystem | Go, minimal deps, Antigravity (Google) provider, Matrix/WeChat gateways | Small binary, Android service, WeChat/Matrix native, Chinese provider support (DashScope, Zhipu) |
| **NanoClaw** | **Multi-tenant admin & channel expansion** | Enterprise/team admins, APAC deployments | TypeScript/Node, Chat SDK adapters, RBAC/approval primitives, container-first | Role-based approval flows, LINE/Dial/WhatsApp Cloud channels, CalDAV MCP baked in |
| **IronClaw** | **Architectural correctness & mediated credentials** | Security-conscious orgs, platform builders | Rust, DeploymentConfig composition, capability-based auth, ACP-ready | Formal architecture docs (§4.4, §5.3.2), ratchet-enforced simplification, MSI installer, GCP/Railway CI |
| **LobsterAI** | **Desktop UX excellence & collaborative browsing** | Knowledge workers, researchers, Windows users | Electron/React, OpenClaw-backed, artifact/annotation IPC, NSIS installer | Browser multi-annotation attachments, AI skin creation flow, silent Windows updates, POPO IM |
| **CoPaw** | **Agent-mode flexibility & reasoning transparency** | AgentScope users, Chinese LLM ecosystem, desktop/TUI users | Python/TypeScript, AgentScope 2.x, ReMe memory, Kanban apps, unified browser SDK | Thinking-block serialization, per-session model overrides, AIOnly provider (190+ models), Chrome extension pairing |
| **NullClaw** | *Minimal maintenance* | *Legacy/ niche* | *Unknown* | *Base image updates only* |

---

## 6. Community Momentum & Maturity

| Project | Momentum | Maturity Indicators | Risk Factors |
|---------|----------|---------------------|--------------|
| **NanoBot** | 🚀 **Rapid iteration** — 30 PRs/day, 11 merges, clear backlog burn-down | High: CI/CD, multi-platform bins, issue templates, security triage | Subagent/WebUI merge coordination; security code fix lag |
| **IronClaw** | 🚀 **Massive refactor velocity** — 50 PRs, 28 merges, v1 deletion complete | Medium: Architecture docs, ratchet enforcement, RC prep | 17 new bugs from bug bash; streaming/onboarding regressions; test oracle gap |
| **CoPaw** | 🚀 **High contributor count** — 72 items, 42 PRs, first-timers welcomed | Medium: v2.0.x, beta prep, observability (Langfuse) | Critical thinking-block bug (#6257); stale subagent concurrency (#4873); no release since v2.0.0 |
| **NanoClaw** | 📈 **Consolidation sprint** — 20 PRs, all bugs have fix PRs, channel PRs ready | High: RBAC hardening, container pinning, migration modules | Core-team review bottleneck on LINE/Dial PRs |
| **LobsterAI** | 📈 **Sprint burst** — 10 merges in 1 day, heavy features landing | Medium: Design docs, regression tests, Windows build hygiene | 110-day stale Dependabot PRs (Electron 43, React 19) |
| **Hermes Agent** | 🔄 **Post-release stabilization** — 50 issues/PRs but mostly regressions | High: 2,245 commits since v0.18, 3,300 issues closed | Critical sdist test artifact (#68311); plugin handler crash (#68318); cron auth regression |
| **PicoClaw** | 🔧 **Maintenance with regressions** — fixes + new breaks on `main` | Low: v0.3.1 stale, `main` unstable, Android/Matrix gaps | Antigravity OAuth blocked; MCP hang; Matrix no reconnect; stale closures |
| **NullClaw** | 😴 **Passive maintenance** — 1 Dependabot PR in 36 days | Low: No human review, no features | Supply-chain risk from stale base images |
| **TinyClaw / Moltis / ZeptoClaw** | ⚫ **Inactive** — Zero activity | Unknown | Abandoned or private development |

---

## 7. Trend Signals for AI Agent Developers

| Trend | Evidence Across Projects | Strategic Implication |
|-------|--------------------------|----------------------|
| **1. Session/turn lifecycle unification is the new baseline** | NanoBot (#4993), IronClaw (Reborn), CoPaw (agent modes), Hermes Agent (stream fixes) | **Invest in a single, auditable state machine** for turns — enables subagents, streaming resumption, WebUI sync, and audit trails. Fragmented mini-loops cause bugs. |
| **2. Credential security is a compliance blocker, not a nice-to-have** | NanoBot (#4803), IronClaw (#6348), PicoClaw (#3275), Hermes Agent (bearer token #27601) | **Adopt `exclude=True` + env-var migration + secret scanning** now. Plaintext keys in config.json block enterprise adoption and invite CVEs. |
| **3. Local model (Ollama) optimization is a retention lever** | NanoBot (#4867, #4998), PicoClaw (#3251), CoPaw (reasoning blocks) | **Standardize prompt templates, expose cache metrics, preserve prefix stability**. 60s/turn is a "unusable" threshold for consumer GPU users. |
| **4. Cross-channel session continuity = user retention** | NanoBot (#4335), Hermes Agent (#4335, #68301), IronClaw (#6349), CoPaw (#6287) | **Build session bridging layer or unified store early**. Users expect history to follow them across CLI, Telegram, WebUI, Desktop. |
| **5. One-click self-hosting expands addressable market** | NanoBot (Render, Dokploy), PicoClaw (systemd), NanoClaw (container `--init`), LobsterAI (NSIS silent) | **Provide PaaS buttons + systemd units + container `--init`**. Non-technical adopters are a large segment; deployment friction is the #1 churn cause. |
| **6. Multi-agent architectures moving from fire-and-forget to persistent collaboration** | NanoBot (#5000), IronClaw (#2277 ACP), CoPaw (#4873), Hermes Agent (skills) | **Design for agent identities, shared state, and inter-agent comms**. ACP (Agent Communication Protocol) is emerging as the interop standard. |
| **7. Desktop/WebU convergence on "activity stream" UX** | NanoBot (Streamdown), Hermes Agent (sidebar), CoPaw (zoom, mobile), LobsterAI (artifact panel) | **Unified activity language + structured tool rendering** is expected. Raw JSON/logs are unacceptable for end-users. |
| **8. Chinese ecosystem providers & channels are first-class targets** | PicoClaw (DashScope, Zhipu, WeChat), NanoClaw (LINE, Dial, WeChat Cloud), CoPaw (AIOnly, Aliyun models) | **Support OpenAI-compatible Chinese providers + native channels (WeChat, Feishu, DingTalk, LINE)** for APAC adoption. |
| **9. Architectural ratchets (enforced simplification) prevent tech debt** | IronClaw (deployment-mode 5→3, feature flags, bucket leaks) | **Codify architectural decisions as CI-enforced ratchets** (line budgets, forbidden imports, config-only composition). |
| **10. Release artifacts can be attack vectors** | Hermes Agent (sdist

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-07-21

---

## 1. Today's Overview

NanoBot shows **high development velocity** with 30 PRs and 7 issues updated in the last 24 hours. The project is actively addressing a mix of **critical bugs** (WebSocket reconnect loops, subagent delivery failures, security concerns), **platform integrations** (Feishu, Telegram, Dokploy, Render), and **architectural improvements** (unified turn lifecycle, multi-agent collaboration proposals). Eleven PRs were merged/closed today, indicating strong maintainer throughput. No new release was published, suggesting changes are accumulating for a future release. The community is actively discussing security (plaintext API keys), local model performance (Ollama caching), and next-generation agent architecture.

---

## 2. Releases

**No new releases today.** The latest changes are in open/merged PRs and will likely ship in the next version.

---

## 3. Project Progress — Merged/Closed PRs Today (11)

| PR | Type | Summary | Impact |
|----|------|---------|--------|
| [#4993](https://github.com/HKUDS/nanobot/pull/4993) | Refactor (P1) | Unified internal turn lifecycle — merged system-message mini-loop into main `TurnContext` state machine | Eliminates duplicated prompt construction, persistence, and delivery logic; foundation for reliable subagent handling |
| [#4998](https://github.com/HKUDS/nanobot/pull/4998) | Docs (P2) | Added Ollama prompt-cache diagnostics guide + stable template for tool definitions | Directly addresses #4867 (60s/turn Ollama penalty); enables users to diagnose/fix caching |
| [#4768](https://github.com/HKUDS/nanobot/pull/4768) | Bug (P1) | Exponential backoff for QQ WebSocket reconnect (fixes #4767) | Stops error-log flooding on DNS/network failure; improves stability on unreliable networks |
| [#5008](https://github.com/HKUDS/nanobot/pull/5008) | Bug | Preserve all images when merging consecutive multimodal user turns | Fixes album/multi-image loss in OpenAI-compatible providers |
| [#4982](https://github.com/HKUDS/nanobot/pull/4982) | Bug (P2) | Feishu: avoid infinite loop in fallback text chunks when `limit <= 0` | Prevents hang on edge-case message splitting |
| [#4981](https://github.com/HKUDS/nanobot/pull/4981) | Bug (P2) | Telegram: avoid infinite loop in markdown split when `max_len <= 0` | Same guard as above for Telegram channel |
| [#4937](https://github.com/HKUDS/nanobot/pull/4937) | Feature (P2) | One-click Deploy to Render (gateway + WebUI, persisted sessions) | Lowers self-hosting barrier; adds Render to supported platforms |
| [#5004](https://github.com/HKUDS/nanobot/pull/5004) | Bug (P1) | Tolerate `EINVAL` on session directory `fsync` (shared filesystems) | Improves robustness on NFS, FUSE, etc. |
| [#4999](https://github.com/HKUDS/nanobot/issues/4999) | Issue (Closed) | Duplicate of #5000 — multi-agent collaboration proposal | Closed in favor of consolidated discussion |
| [#4867](https://github.com/HKUDS/nanobot/issues/4867) | Issue (Closed) | Ollama caching enhancement | Addressed via #4998 documentation + template; underlying prompt-prefix preservation still tracked in #2463 |

**Key advancement:** The unified turn lifecycle (#4993) and subagent delivery fixes (#4992, #4954, #4988) are converging to make background/async agent workflows reliable.

---

## 4. Community Hot Topics

| Item | Activity | Core Need |
|------|----------|-----------|
| [#4867](https://github.com/HKUDS/nanobot/issues/4867) Ollama 60s/turn penalty | 15 comments, closed today | **Local model performance** — users need prompt-prefix stability for KV-cache reuse; critical for self-hosted LLMs on consumer GPUs |
| [#4803](https://github.com/HKUDS/nanobot/issues/4803) Plaintext API keys in config | 1 comment, 15 days open | **Security hygiene** — `repr=False` ≠ `exclude=True`; secrets written to disk; PR #5010 adds env-var guidance |
| [#5000](https://github.com/HKUDS/nanobot/issues/5000) Multi-agent collaboration proposal | 1 comment, created today | **Architectural evolution** — move beyond fire-and-forget subagents to persistent, state-sharing agents with identities |
| [#4864](https://github.com/HKUDS/nanobot/issues/4864) `complete_goal` endless loop | 4 comments, 1 👍 | **Tool gateway bug** — gateway parses `recap` as string not JSON; blocks goal completion flows |
| [#1503](https://github.com/HKUDS/nanobot/issues/1503) Dokploy template | 1 comment, 4+ months open | **Easy self-hosting** — non-technical users want one-click deploy; PR #5007 now delivers this |

**Underlying theme:** Users are pushing NanoBot from "CLI agent" toward **production-grade, self-hosted, multi-platform AI assistant** — demanding security, observability, and operational simplicity.

---

## 5. Bugs & Stability — Ranked by Severity

| Severity | Issue/PR | Status | Fix PR |
|----------|----------|--------|--------|
| **Critical** | [#4864](https://github.com/HKUDS/nanobot/issues/4864) `complete_goal` infinite loop (gateway parses JSON as string) | Open | None yet |
| **High** | [#4803](https://github.com/HKUDS/nanobot/issues/4803) API keys stored plaintext in `config.json` | Open | [#5010](https://github.com/HKUDS/nanobot/pull/5010) docs mitigation (env vars); code fix pending |
| **High** | [#4954](https://github.com/HKUDS/nanobot/pull/4954) Late subagent turns invisible in WebUI | Open (conflict) | PR #4954 + #4992 + #4988 in progress |
| **High** | [#4928](https://github.com/HKUDS/nanobot/pull/4928) Heartbeat routes to wrong channel in unified sessions | Open (conflict) | PR #4928 |
| **Medium** | [#4767](https://github.com/HKUDS/nanobot/issues/4767) QQ WebSocket reconnect log spam | Closed | [#4768](https://github.com/HKUDS/nanobot/pull/4768) merged (exponential backoff) |
| **Medium** | [#5005](https://github.com/HKUDS/nanobot/pull/5005) Over-aggressive `rm` blocking breaks test/build cleanup | Open | PR #5005 |
| **Low** | [#4982](https://github.com/HKUDS/nanobot/pull/4982), [#4981](https://github.com/HKUDS/nanobot/pull/4981) Message-split hangs on `limit <= 0` | Closed | Both merged |

**Note:** Subagent/WebUI delivery bugs (#4954, #4992, #4988) are interlocking — the unified turn lifecycle (#4993) is the prerequisite fix.

---

## 6. Feature Requests & Roadmap Signals

| Signal | Source | Likelihood for Next Version |
|--------|--------|-----------------------------|
| **Multi-agent collaboration** (persistent identities, shared state, agent-to-agent comms) | [#5000](https://github.com/HKUDS/nanobot/issues/5000) | Medium — architectural; needs design consensus |
| **Feishu `groupPolicy: listen`** (context-only ingestion, reply on mention) | [#5009](https://github.com/HKUDS/nanobot/pull/5009) | High — PR open, P1, with tests |
| **Telegram custom Bot API base URL** (self-hosted/enterprise gateways) | [#4919](https://github.com/HKUDS/nanobot/pull/4919) | High — PR open, P2, implements #4702 |
| **Dokploy one-click deploy template** | [#1503](https://github.com/HKUDS/nanobot/issues/1503) + [#5007](https://github.com/HKUDS/nanobot/pull/5007) | High — PR open, addresses 4-month-old request |
| **Guarded Tool Gateway for channels** (opt-in, sandboxed tool execution) | [#5006](https://github.com/HKUDS/nanobot/pull/5006) | Medium — P1, closes #4911, security-sensitive |
| **Ollama prompt-cache stable template** | [#4998](https://github.com/HKUDS/nanobot/pull/4998) (merged) | Done — docs shipped; template available |
| **WebUI polish: unified activity language, Streamdown rendering** | [#4963](https://github.com/HKUDS/nanobot/pull/4963) | Medium — UX polish, conflict state |

**Predicted next-release cluster:** Feishu listen mode, Telegram custom API, Dokploy/Render deploy docs, Tool Gateway, subagent/WebUI fixes, security docs.

---

## 7. User Feedback Summary

| Pain Point | Evidence | User Impact |
|------------|----------|-------------|
| **Ollama unusably slow** (60s/turn) | #4867: "totally unusable with Ollama and 32 GB VRAM" | Blocks local-model adopters; high urgency |
| **Secrets in config file** | #4803: "`exclude=True` missing on `api_key`" | Security compliance blocker for orgs |
| **Subagent results lost in WebUI** | #4954, #4992, #4988: late results invisible, wrong turn ID | Breaks async workflows; WebUI feels broken |
| **QQ bot log spam on network issues** | #4767: "excessive error logs every 5 seconds" | Operational noise; fixed by #4768 |
| **Goal completion broken** | #4864: `complete_goal` loops on JSON parse error | Blocks automation/agentic workflows |
| **Self-hosting too hard for non-tech users** | #1503 (4 months), #5007 (Dokploy), #4937 (Render) | Adoption barrier; two templates now in PR |

**Satisfaction signals:** Active PR engagement, quick merges on clear fixes (backoff, split guards, fsync), community contributing deploy templates.

---

## 8. Backlog Watch — Stale/Important Items Needing Attention

| Item | Age | Why It Matters | Suggested Action |
|------|-----|----------------|------------------|
| [#4803](https://github.com/HKUDS/nanobot/issues/4803) Plaintext API keys | 15 days | Security regression risk; `repr=False` ≠ serialization exclusion | Merge code fix (add `exclude=True` + migration) alongside #5010 docs |
| [#4864](https://github.com/HKUDS/nanobot/issues/4864) `complete_goal` loop | 12 days | Core automation tool broken; gateway serialization regression | Assign owner; likely one-line JSON parse fix in gateway |
| [#1503](https://github.com/HKUDS/nanobot/issues/1503) Dokploy template | 140 days | Long-standing community request; PR #5007 ready | Review/merge #5007; close issue |
| [#2463](https://github.com/HKUDS/nanobot/issues/2463) (referenced in #4867) Prompt prefix preservation | Older | Root cause of Ollama caching; architectural | Track if prompt-prefix stabilization lands |
| [#4954](https://github.com/HKUDS/nanobot/pull/4954) / [#4992](https://github.com/HKUDS/nanobot/pull/4992) / [#4988](https://github.com/HKUDS/nanobot/pull/4988) Subagent WebUI delivery | 5-6 days | Interlocking PRs with conflicts; critical for WebUI UX | Coordinate rebase/merge order after #4993 unified lifecycle |

---

**Overall Health:** 🟢 **Healthy velocity** — high PR throughput, critical bugs getting fixes, community-driven features landing. **Watch areas:** security code fix for #4803, gateway bug #4864, and subagent/WebUI merge coordination. The project is evolving rapidly toward a polished, multi-platform, self-hostable AI assistant framework.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-07-21

## 1. Today's Overview
Hermes Agent shipped **v0.19.0 "The Quicksilver Release"** yesterday (2026-07-20), a massive milestone representing ~2,245 commits, ~1,065 merged PRs, and ~3,300 issues closed since v0.18.0 with 450+ community contributors. The project remains highly active: **50 issues** and **50 PRs** updated in the last 24 hours. However, the new release has surfaced a cluster of regressions — plugin handler crashes, desktop sidebar failures for the `default` profile, cron authentication regressions, and a critical test artifact that can kill a user's entire session. The maintainer team is triaging rapidly, with multiple hotfix PRs opened today.

## 2. Releases
### v0.19.0 — "The Quicksilver Release" (2026-07-20)
- **Scope:** Major feature release after extensive development cycle
- **Key Metrics:** 2,245 commits | 1,065 merged PRs | 2,465 files changed | 300K+ insertions | 36K deletions | 3,300 issues closed
- **Breaking Changes / Migration Notes:** Not explicitly listed in release notes, but several v0.19.0 regressions indicate:
  - Plugin tool handler signature changed — now receives unexpected `task_id` kwarg ([#68318](https://github.com/NousResearch/hermes-agent/issues/68318))
  - BlueBubbles duplicate-turn bug persists ([#45317](https://github.com/NousResearch/hermes-agent/pull/45317))
  - Cron job primary model calls fail with 401 due to provider collapsing to "custom" ([#66868](https://github.com/NousResearch/hermes-agent/issues/66868))
  - Desktop session sidebar empty for `default` profile ([#67600](https://github.com/NousResearch/hermes-agent/issues/67600))
- **Critical Packaging Defect:** Every published sdist (0.13.0–0.19.0) includes `tests/test_live_system_guard_self_test.py` without its fixture dependency `tests/conftest.py`; running packaged tests executes `os.kill(-1, SIGTERM)` and **kills the user's entire session** ([#68311](https://github.com/NousResearch/hermes-agent/issues/68311), P1). Fix PR opened: [#68317](https://github.com/NousResearch/hermes-agent/pull/68317).

## 3. Project Progress (Merged/Closed Today)
| PR | Type | Summary |
|----|------|---------|
| [#54895](https://github.com/NousResearch/hermes-agent/pull/54895) | Feature (CLOSED) | WebUI: show runtime model & fallback indicator in sidebar badge |
| [#57642](https://github.com/NousResearch/hermes-agent/pull/57642) | Feature (CLOSED) | Detect/warn when curated OpenRouter models removed from live API |
| [#46511](https://github.com/NousResearch/hermes-agent/pull/46511) | Bug (CLOSED) | Cron jobs fallback when OAuth credential pool exhausted |
| [#67817](https://github.com/NousResearch/hermes-agent/pull/67817) | Bug (CLOSED) | Telegram `'HTTPXRequest' object attribute 'do_request' is read-only` |
| [#66611](https://github.com/NousResearch/hermes-agent/pull/66611) | Bug (CLOSED) | Desktop "Already up to date" overlay close button unresponsive |
| [#67194](https://github.com/NousResearch/hermes-agent/pull/67194) | Bug (CLOSED) | Windows installer failure (Hermes-Setup.exe) |
| [#68301](https://github.com/NousResearch/hermes-agent/pull/68301) | Feature (CLOSED, duplicate) | Native session bridging desktop ↔ Telegram |

**Net Progress:** 8 PRs closed/merged; 42 PRs remain open — many opened today as hotfixes for v0.19.0 regressions.

## 4. Community Hot Topics
| Item | Comments | Reactions | Core Need |
|------|----------|-----------|-----------|
| [#67600](https://github.com/NousResearch/hermes-agent/issues/67600) Desktop session sidebar empty for `default` profile | 9 | 0 | **Regression**: Named profiles work; `default` profile shows empty sidebar despite backend serving rows. Blocks desktop users on default profile. |
| [#4335](https://github.com/NousResearch/hermes-agent/issues/4335) Cross-platform session context sharing (CLI ↔ Telegram) | 8 | 2 👍 | **Architecture**: Users want unified conversation history across gateway platforms. Requires session store unification or bridging layer. |
| [#68311](https://github.com/NousResearch/hermes-agent/issues/68311) **CRITICAL**: sdist test kills user session via `os.kill(-1, SIGTERM)` | 3 | 0 | **Security/Stability**: Packaged test artifact is a loaded gun. Affects all users installing via pip. Fix PR [#68317](https://github.com/NousResearch/hermes-agent/pull/68317) open. |
| [#4256](https://github.com/NousResearch/hermes-agent/issues/4256) Configurable keybindings via config.yaml | 3 | 6 👍 | **UX**: Hardcoded keybindings conflict with tmux/screen/editor muscle memory. High community demand (6 👍). |
| [#66868](https://github.com/NousResearch/hermes-agent/issues/66868) Cron job primary model call fails 401 (provider collapses to "custom") | 5 | 0 | **Regression**: Cron jobs authenticate differently than gateway sessions. Same provider/key works in Telegram but not cron. |
| [#34372](https://github.com/NousResearch/hermes-agent/issues/34372) BlueBubbles webhook duplicate `updated-message` processing | 5 | 0 | **Data Integrity**: Every iMessage processed twice with different chat-ids. PR [#45317](https://github.com/NousResearch/hermes-agent/pull/45317) open but not merged. |
| [#68318](https://github.com/NousResearch/hermes-agent/issues/68318) v0.19.0 plugin handlers crash — unexpected `task_id` kwarg | 1 | 0 | **Regression**: All plugin tools using single-args handler shape crash on load. Blocks plugin ecosystem. |

**Underlying Themes:** 
- **Release stabilization** dominates — multiple v0.19.0 regressions across desktop, cron, plugins, gateway.
- **Cross-platform session unity** is a top user ask (#4335, #68301).
- **Security hardening** continues (SSRF fix [#65613](https://github.com/NousResearch/hermes-agent/pull/65613), webhook auth [#66369](https://github.com/NousResearch/hermes-agent/pull/66369), bearer token [#27601](https://github.com/NousResearch/hermes-agent/pull/27601)).

## 5. Bugs & Stability (Ranked by Severity)
| Severity | Issue | Status | Fix PR |
|----------|-------|--------|--------|
| **P0 / Critical** | [#68311](https://github.com/NousResearch/hermes-agent/issues/68311): Packaged test executes `os.kill(-1, SIGTERM)` killing user session | Open | [#68317](https://github.com/NousResearch/hermes-agent/pull/68317) (make canary fail closed) |
| **P0 / Critical** | [#68318](https://github.com/NousResearch/hermes-agent/issues/68318): Plugin handlers crash on `task_id` kwarg — all plugin tools broken | Open | None yet |
| **P1** | [#67600](https://github.com/NousResearch/hermes-agent/issues/67600): Desktop sidebar empty for `default` profile only | Open | None yet |
| **P1** | [#66868](https://github.com/NousResearch/hermes-agent/issues/66868): Cron primary model call 401 — provider collapses to "custom" | Open | None yet |
| **P1** | [#61573](https://github.com/NousResearch/hermes-agent/issues/61573): Desktop message queued in busy session delivered to unrelated idle session | Open | None yet |
| **P2** | [#34372](https://github.com/NousResearch/hermes-agent/issues/34372): BlueBubbles duplicate inbound turns | Open | [#45317](https://github.com/NousResearch/hermes-agent/pull/45317) (open) |
| **P2** | [#68261](https://github.com/NousResearch/hermes-agent/issues/68261): TUI skill credential prompts routed to wrong session | Open | None yet |
| **P2** | [#57626](https://github.com/NousResearch/hermes-agent/issues/57626): "Skill library update" injection pollutes delegate_task sub-agents | Open | None yet |
| **P2** | [#55369](https://github.com/NousResearch/hermes-agent/issues/55369): Union int\|string tool args drop leading zeros ("007" → 7) | Open | None yet |
| **P2** | [#55551](https://github.com/NousResearch/hermes-agent/issues/55551): Groq STT missing language param — poor non-English transcription | Open | None yet |
| **P2** | [#3944](https://github.com/NousResearch/hermes-agent/issues/3944): Slack integration fails (slack-bolt not installed) | Open | None yet |
| **P2** | [#2788](https://github.com/NousResearch/hermes-agent/issues/2788): Cron jobs never run / fail silently | Open | None yet |
| **P3** | [#7135](https://github.com/NousResearch/hermes-agent/issues/7135): Hindsight local plugin on macOS Apple Silicon daemon timeout | Open | None yet |
| **P3** | [#67316](https://github.com/NousResearch/hermes-agent/issues/67316): Skills only callable at start of prompt | Open | None yet |
| **P3** | [#68244](https://github.com/NousResearch/hermes-agent/issues/68244): Post-update dashboard fails to start | Open | None

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-07-21

## 1. Today's Overview
PicoClaw shows **high community engagement** with 21 items (11 issues, 10 PRs) updated in the last 24 hours. The project is in active maintenance mode with multiple regression fixes, provider updates, and localization work underway. No new release was published today, but the `main` branch is receiving rapid fixes for critical regressions (Antigravity provider, config persistence, MCP hangs). The issue mix reveals a project scaling across platforms (Android, headless Linux, Matrix, WeChat) and providers (Google, Anthropic, DashScope, OpenAI-compatible), surfacing integration friction at the edges.

## 2. Releases
**No new releases today.** Latest published version remains **v0.3.1**. The `main` branch (commit `85dcfcc`) contains unreleased fixes and regressions — users building from source should expect instability until v0.3.2.

## 3. Project Progress — Merged/Closed PRs Today
| PR | Type | Summary | Impact |
|----|------|---------|--------|
| [#3277](https://github.com/sipeed/picoclaw/pull/3277) | **Fix** | Deferred-tool visibility heal + sliding TTL + SSE tool-call index fix | Restores MCP tool discovery after restarts/TTL expiry; prevents model calling vanished tools |
| [#3192](https://github.com/sipeed/picoclaw/pull/3192) | **Chore** | Bump goreleaser base images `alpine:3.21 → 3.23` | Supply-chain hygiene; aligns with main Dockerfiles |
| [#3191](https://github.com/sipeed/picoclaw/pull/3191) | **Chore** | Remove duplicate `build/` entry in `.gitignore` | Trivial cleanup |
| [#276](https://github.com/sipeed/picoclaw/pull/276) | **Docs** | Polish README wording, branding, formatting | Improved onboarding clarity |
| [#277](https://github.com/sipeed/picoclaw/pull/277) | **Chore** | Update `make deps` logic to prevent frequent dependency version updates | Build reproducibility |

**Net progress:** Critical agent/toolchain stability fix (#3277) landed; routine hygiene PRs merged; two long-open PRs (#276, #277 from Feb) finally closed.

## 4. Community Hot Topics
| Item | Activity | Core Need |
|------|----------|-----------|
| [#3203](https://github.com/sipeed/picoclaw/issues/3203) Matrix sync loop — no reconnection logic | 3 comments, 👍1 | **Production reliability**: Matrix gateway silently dies on network blip; systemd restart ineffective. Need exponential backoff + health endpoint. |
| [#3182](https://github.com/sipeed/picoclaw/issues/3182) Android service launch failure + path setting broken | 4 comments | **Mobile viability**: Service won't start; settings path immutable. Blocks Android deployment. |
| [#3274](https://github.com/sipeed/picoclaw/issues/3274) Antigravity provider `INVALID_ARGUMENT` regression on `main` | 1 comment | **Provider regression**: Tool schema transform "simple" insufficient post-v0.3.1; blocks Google OAuth users on latest code. |
| [#3278](https://github.com/sipeed/picoclaw/issues/3278) Antigravity OAuth blocked by Google policy | 0 comments | **Auth compliance**: Google rejects OAuth consent screen — app needs verification or policy fixes. |
| [#3272](https://github.com/sipeed/picoclaw/issues/3272) / [#3273](https://github.com/sipeed/picoclaw/pull/3273) Japanese localization | 0 comments (issue), PR open | **Internationalization**: WebUI lacks Japanese despite docs having it; PR adds full `ja.json` (968 lines). |

**Pattern:** Users deploying headless/server (Matrix, systemd, Antigravity) hit resilience gaps; mobile (Android) remains fragile; i18n demand growing.

## 5. Bugs & Stability — Ranked by Severity
| Severity | Issue | Status | Fix PR? |
|----------|-------|--------|---------|
| **Critical** | [#3269](https://github.com/sipeed/picoclaw/issues/3269) MCP server connection failure → agent loop hangs, chat stops replying | Open | No |
| **Critical** | [#3274](https://github.com/sipeed/picoclaw/issues/3274) Antigravity provider `INVALID_ARGUMENT` on `main` — regression from v0.3.1 | Open | No |
| **High** | [#3203](https://github.com/sipeed/picoclaw/issues/3203) Matrix `/sync` loop dies permanently on network disruption; no auto-reconnect | Open | No |
| **High** | [#3275](https://github.com/sipeed/picoclaw/issues/3275) `model_list` entries lose `api_keys`/fields after config rewrite via Launcher WebUI / auth login | Closed (stale) | No — root cause likely persists |
| **High** | [#3182](https://github.com/sipeed/picoclaw/issues/3182) Android: service won't launch; path setting unchangeable | Open | No |
| **Medium** | [#3278](https://github.com/sipeed/picoclaw/issues/3278) Antigravity OAuth blocked by Google policy non-compliance | Open | No — requires Google app verification |
| **Medium** | [#3230](https://github.com/sipeed/picoclaw/issues/3230) Function call missing `thought_signature` calling Gemini via OpenAI compat (Cloudflare AI Gateway) | Closed (stale) | No — may need provider-side fix |
| **Low** | [#3276](https://github.com/sipeed/picoclaw/issues/3276) Launcher hard-fails on unknown channel types; assumes it owns gateway lifecycle (systemd conflict) | Open | No |

**Note:** Two bugs closed as "stale" (#3230, #3275) without clear resolution — likely still affect users.

## 6. Feature Requests & Roadmap Signals
| Request | Source | Likelihood for Next Version |
|---------|--------|----------------------------|
| **Japanese WebUI/Launcher localization** | [#3272](https://github.com/sipeed/picoclaw/issues/3272) + [PR #3273](https://github.com/sipeed/picoclaw/pull/3273) | **High** — PR ready, 968-line translation complete |
| **DashScope (Bailian) TTS provider + WeChat audio sending** | [PR #3270](https://github.com/sipeed/picoclaw/pull/3270) | **High** — Full implementation PR open |
| **Rolling conversation cache breakpoints for Anthropic Messages** | [#3229](https://github.com/sipeed/picoclaw/issues/3229) | **Medium** — Advanced optimization; needs design review |
| **SearXNG search BasicAuth header support** | [#3231](https://github.com/sipeed/picoclaw/issues/3231) | **Low** — Closed stale; may resurface |
| **Launcher: detect externally-managed gateway (systemd), tolerate unknown channel types** | [#3276](https://github.com/sipeed/picoclaw/issues/3276) | **Medium** — Infra-focused; aligns with headless deployment trend |
| **Update default model names to 2026-07 latest (GPT-5.6, Claude 4.1, etc.)** | [PR #3271](https://github.com/sipeed/picoclaw/pull/3271) | **High** — Routine maintenance PR open |

**Predicted v0.3.2 scope:** Japanese i18n, DashScope TTS, model list refresh, Antigravity regression fix, MCP hang fix, Matrix reconnect logic.

## 7. User Feedback Summary
| Pain Point | Evidence | User Context |
|------------|----------|--------------|
| **Headless/server deployment friction** | #3203 (Matrix), #3276 (systemd gateway), #3274/3278 (Antigravity OAuth) | Linux VM/Tailscale, systemd services, production gateways |
| **Mobile/Android broken** | #3182 — service launch fail, settings locked | Mobile users, likely Termux or native APK |
| **Provider integration brittleness** | #3274 (Antigravity schema), #3230 (Gemini/OpenAI compat), #3251 (Anthropic cache tokens missing) | Multi-provider power users, Cloudflare AI Gateway |
| **Agent/toolchain instability** | #3269 (MCP hang), #3277 (deferred tool TTL fix merged) | Agentic workflows, long sessions, tool-heavy usage |
| **Config persistence losses** | #3275 (api_keys stripped on rewrite) | WebUI/Launcher users managing models via UI |
| **Internationalization gap** | #3272 — docs have Japanese, WebUI doesn't | Japanese-speaking community |

**Sentiment:** Frustration with regressions on `main` and production gaps (Matrix, Android, OAuth), but active contributors submitting fixes (honbou, m4n3z40, MrTreasure, LeaderOnePro).

## 8. Backlog Watch — Needs Maintainer Attention
| Item | Age | Why It Matters |
|------|-----|----------------|
| [#3203](https://github.com/sipeed/picoclaw/issues/3203) Matrix sync reconnection logic | 19 days (created 2026-07-02) | **Production blocker** for Matrix gateway; silent failure = undetected downtime. Needs exponential backoff + health check. |
| [#3182](https://github.com/sipeed/picoclaw/issues/3182) Android service launch + settings | 25 days (created 2026-06-26) | **Platform gap** — Android support advertised but broken. No PR yet. |
| [#3269](https://github.com/sipeed/picoclaw/issues/3269) MCP hang on connection failure | 1 day (new) | **Critical UX** — chat interface freezes completely. High user impact. |
| [#3274](https://github.com/sipeed/picoclaw/issues/3274) Antigravity regression on `main` | 1 day (new) | **Regression** — blocks Google provider users on latest code. |
| [#3278](https://github.com/sipeed/picoclaw/issues/3278) Google OAuth policy rejection | 1 day (new) | **Auth breakage** — requires Google Cloud Console app verification or OAuth config changes. |
| [#3254](https://github.com/sipeed/picoclaw/pull/3254) Model resolution: prefer verbatim matches over provider-alias splits | 8 days (open) | **Core logic fix** — prevents wrong model selection; stale, needs review. |
| [#3251](https://github.com/sipeed/picoclaw/pull/3251) Capture Anthropic prompt cache token usage | 9 days (open) | **Observability** — operators can't verify cache effectiveness; PR ready. |
| [#3270](https://github.com/sipeed/picoclaw/pull/3270) DashScope TTS + WeChat audio | 1 day (open) | **Feature PR** — complete implementation; expands China ecosystem support. |
| [#3273](https://github.com/sipeed/picoclaw/pull/3273) Japanese localization | 1 day (open) | **i18n PR** — high-quality, ready to merge. |
| [#3271](https://github.com/sipeed/picoclaw/pull/3271) Model list refresh (GPT-5.6, Claude 4.1, etc.) | 1 day (open) | **Maintenance PR** — keeps defaults current. |

---

**Project Health Score: 7/10**  
✅ Active contributor base, rapid fix turnover, clear roadmap signals (i18n, TTS, model refresh)  
⚠️ Critical regressions on `main`, production gaps (Matrix, Android, OAuth), stale closures without fixes  
🎯 **Next 2 weeks:** Expect v0.3.2 with Antigravity fix, MCP hang fix, Japanese i18n, DashScope TTS, model refresh. Matrix reconnect and Android need dedicated engineering effort.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-07-21

## 1. Today's Overview
NanoClaw shows **high contributor activity** with 26 total updates (6 issues, 20 PRs) in the last 24 hours, yet zero new releases — indicating a heavy development/integration phase. The workload splits cleanly: **security hardening** around role/approval primitives (4 PRs from k-fls), **channel expansion** (LINE, Dial, WhatsApp Cloud fixes), and **attachment reliability** fixes across chat-sdk bridges. No critical regressions are reported; the open issues are largely follow-ups to recent merges (e.g., WhatsApp Cloud instance re-key migration). Project health appears strong — active core-team review, clear PR templates, and rapid turnaround on security fixes.

## 2. Releases
**No new releases** in the last 24 hours.

## 3. Project Progress — Merged/Closed PRs Today
| PR | Type | Summary |
|----|------|---------|
| [#3110](https://github.com/nanocoai/nanoclaw/pull/3110) | **Container/Feature** | Bakes `caldav-mcp@0.8.0` into the base agent image (pinned, supply-chain vetted). Enables `/add-caldav-tool` skill out-of-the-box. |
| [#3108](https://github.com/nanocoai/nanoclaw/pull/3108) | **Fix (core)** | Rehydrates inbound attachments when adapters omit `fetchData` (bytes on host, not URL). Unblocks Telegram voice/audio, iMessage, others. |
| [#3107](https://github.com/nanocoai/nanoclaw/pull/3107) | **Fix (skill)** | Documents and copies the WhatsApp Cloud `messaging_groups` row adoption module (companion to #3106). |
| [#3087](https://github.com/nanocoai/nanoclaw/pull/3087) | **Fix (WhatsApp)** | Engages mention-mode wiring on typed `@`-mentions in groups — restores expected bot response behavior. |
| [#2642](https://github.com/nanocoai/nanoclaw/pull/2642) | **Fix (skill)** | Pins `@chat-adapter/telegram@4.26.0` to match root `chat@^4.24.0` resolution, avoiding peer-dep mismatch. |
| [#1110](https://github.com/nanocoai/nanoclaw/pull/1110) | **Fix (tests)** | Aligns container-runtime tests with current implementation (`--mount` bind syntax, `system status`, retry semantics). |

**Net effect**: Core attachment pipeline stabilized, WhatsApp Cloud migration path documented, container image gains CalDAV MCP, test suite modernized.

## 4. Community Hot Topics
| Item | Activity | Signal |
|------|----------|--------|
| [#3096](https://github.com/nanocoai/nanoclaw/issues/3096) — `/add-line` skill proposal | 1 comment, 0 👍 | **Regional demand**: LINE is dominant in JP/TW/TH; no `@chat-adapter/line` exists yet. Community explicitly requesting via RFS process. |
| [#3105](https://github.com/nanocoai/nanoclaw/issues/3105) — WhatsApp Cloud migration strands `messaging_groups` | 0 comments, 0 👍 | **Silent data loss on upgrade**: Existing installs lose WhatsApp connectivity after `/update-skills`. Blocker for production upgrades. |
| [#3100](https://github.com/nanocoai/nanoclaw/issues/3100) — Revoking last owner leaves no root of trust | 0 comments, 0 👍 | **Security architecture gap**: CLI allows deleting the final global `owner` row, bricking admin capability. |
| [#2918](https://github.com/nanocoai/nanoclaw/pull/2918) — LINE channel adapter + skill | 0 comments, 0 👍 | **Largest open feature PR**: Native adapter + skill, 18 days open. Core-team review pending; likely next major channel. |
| [#3044](https://github.com/nanocoai/nanoclaw/pull/3044) — Inbound attachment download fix | 0 comments, 0 👍 | **High-impact bug fix**: Restores Telegram voice/audio, affects all Chat SDK bridges. 7 days open, needs merge. |

**Underlying needs**: Multi-region channel parity (LINE), zero-downtime upgrades (WhatsApp Cloud), and hardening of RBAC primitives before broader adoption.

## 5. Bugs & Stability — Today’s Reports (Ranked by Severity)
| Severity | Issue | Fix PR? | Notes |
|----------|-------|---------|-------|
| **Critical** | [#3105](https://github.com/nanocoai/nanoclaw/issues/3105) WhatsApp Cloud upgrade mutes existing installs (stranded `messaging_groups` rows) | Yes: [#3106](https://github.com/nanocoai/nanoclaw/pull/3106) + [#3107](https://github.com/nanocoai/nanoclaw/pull/3107) | Migration module written; needs review/merge. Silent failure — no alerting. |
| **High** | [#3100](https://github.com/nanocoai/nanoclaw/issues/3100) `ncl roles revoke` allows deleting last global owner | Yes: [#3104](https://github.com/nanocoai/nanoclaw/pull/3104) | PR adds guard; awaiting review. |
| **High** | [#3099](https://github.com/nanocoai/nanoclaw/issues/3099) Approval routing allows self-approval & privilege inversion | Yes: [#3103](https://github.com/nanocoai/nanoclaw/pull/3103) | PR enforces privilege-proportional, target-excluded routing. |
| **Medium** | [#3098](https://github.com/nanocoai/nanoclaw/issues/3098) Approval cards show raw CLI, not resolved effect | Yes: [#3102](https://github.com/nanocoai/nanoclaw/pull/3102) | PR renders structured cards (user name, before/after, scope). |
| **Medium** | [#3097](https://github.com/nanocoai/nanoclaw/issues/3097) `ncl roles grant --role admin` without `--group` = silent global admin | Yes: [#3101](https://github.com/nanocoai/nanoclaw/pull/3101) | PR requires explicit `--scope`. |
| **Medium** | [#3044](https://github.com/nanocoai/nanoclaw/pull/3044) / [#3108](https://github.com/nanocoai/nanoclaw/pull/3108) / [#3109](https://github.com/nanocoai/nanoclaw/pull/3109) Inbound attachments dropped when `fetchData` missing | Fixed in #3108 (core) + #3109 (iMessage) + #3044 (Telegram) | Triple-PR fix covering Chat SDK bridge, Telegram, iMessage (HEIC→JPEG). |

**Stability takeaway**: All today’s bugs have **corresponding fix PRs** — mostly from core team (cfis, glifocat, k-fls). No unaddressed regressions.

## 6. Feature Requests & Roadmap Signals
| Signal | Evidence | Likelihood for Next Release |
|--------|----------|----------------------------|
| **LINE Official Account channel** | Issue [#3096](https://github.com/nanocoai/nanoclaw/issues/3096) + PR [#2918](https://github.com/nanocoai/nanoclaw/pull/2918) (native adapter + skill, 18d open) | **High** — only missing core-team review; fits RFS process. |
| **Dial (SMS + AI voice) channel** | PR [#3041](https://github.com/nanocoai/nanoclaw/pull/3041) (adapter) + [#3050](https://github.com/nanocoai/nanoclaw/pull/3050) (wizard/skill) | **High** — both PRs open 7d, follow skill template, new channel category. |
| **Voice transcription (on-device Whisper)** | PR [#2459](https://github.com/nanocoai/nanoclaw/pull/2459) (69d open, pairs with #2317) | **Medium** — long review cycle; opt-in, no cloud deps. |
| **Traditional Chinese docs** | PR [#2950](https://github.com/nanocoai/nanoclaw/pull/2950) (README_zh-TW.md) | **High** — pure docs, low risk, aligns with LINE rollout. |
| **Container `--init` for zombie reaping** | PR [#3060](https://github.com/nanocoai/nanoclaw/pull/3060) (4d open) | **High** — operational fix, corrects docs claim. |

**Prediction**: Next release will likely bundle **LINE**, **Dial**, **WhatsApp Cloud migration fix**, and **RBAC hardening** — a “channels + security” milestone.

## 7. User Feedback Summary
| Pain Point / Use Case | Source | Sentiment |
|------------------------|--------|-----------|
| **WhatsApp Cloud upgrade breaks existing installs silently** | [#3105](https://github.com/nanocoai/nanoclaw/issues/3105) | 😠 Frustration — “first `/update-skills` mutes WhatsApp” |
| **No LINE support in APAC regions** | [#3096](https://github.com/nanocoai/nanoclaw/issues/3096) | 🙏 Request — “dominant messenger in JP/TW/TH” |
| **Admin approval UX is opaque (raw CLI strings)** | [#3098](https://github.com/nanocoai/nanoclaw/issues/3098) | 😕 Confusion — “approver asked to approve blind” |
| **Accidental global admin grants too easy** | [#3097](https://github.com/nanocoai/nanoclaw/issues/3097) | ⚠️ Fear — “privilege escalation easy” |
| **Telegram voice notes arrive as empty placeholders** | [#3044](https://github.com/nanocoai/nanoclaw/pull/3044) | 😞 Broken — “audio/ogg attachment, no bytes” |
| **iMessage attachments HEIC not viewable** | [#3109](https://github.com/nanocoai/nanoclaw/pull/3109) | 😕 Inconvenience — “filename only, no conversion” |

**Overall**: Users are **power-users/admins** hitting edge cases in multi-channel, multi-tenant ops. They file precise, code-linked issues and often supply fix PRs. Satisfaction hinges on **upgrade safety** and **approval clarity**.

## 8. Backlog Watch — Stale but Important
| Item | Age | Why It Matters | Action Needed |
|------|-----|----------------|---------------|
| [#2918](https://github.com/nanocoai/nanoclaw/pull/2918) LINE channel adapter + skill | 18 days | **Largest pending feature**; unblocks APAC adoption. Core-team review bottleneck. | Assign reviewer; merge if CI green. |
| [#2459](https://github.com/nanocoai/nanoclaw/pull/2459) Voice transcription skill (Whisper.cpp) | 69 days | **Unique on-device AI feature**; no cloud key needed. Long review cycle. | Re-ping maintainers; split if too large. |
| [#3044](https://github.com/nanocoai/nanoclaw/pull/3044) Telegram attachment fix | 7 days | **User-visible regression**; voice notes broken. Fix ready, needs merge. | Merge after #3108 (core fix) lands. |
| [#3060](https://github.com/nanocoai/nanoclaw/pull/3060) Container `--init` flag | 4 days | **Operational correctness**; fixes PID 1 zombie reaping, corrects docs. | Low risk — merge soon. |
| [#2950](https://github.com/nanocoai/nanoclaw/pull/2950) Traditional Chinese README | 17 days | **Localization** for LINE launch region. Pure docs. | Quick win — merge. |

---

**Bottom line**: NanoClaw is in a **consolidation + expansion** sprint — hardening the security/approval foundation while adding two major channels (LINE, Dial) and fixing the WhatsApp Cloud upgrade path. All critical bugs have fixes in review. The next 48h will likely see the RBAC PRs (#3101–#3104) and attachment fixes (#3044, #3108, #3109) merged, clearing the way for the channel PRs to land.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest — 2026-07-21

## 1. Today's Overview
NullClaw shows minimal activity over the past 24 hours with zero issue updates, zero merged/closed PRs, and no new releases. The sole activity is a single open Dependabot PR (#956) updating the Alpine Linux base image in Docker configurations from 3.23 to 3.24. This indicates a maintenance-only phase with no active feature development, bug fixes, or community discussions currently in progress. Project health appears stable but quiet—no regressions or incidents reported.

## 2. Releases
No new releases published today or in the recent window covered by this data.

## 3. Project Progress
No PRs were merged or closed in the last 24 hours. The only open PR is a routine dependency update (see Section 4). No feature advancements or bug fixes landed today.

## 4. Community Hot Topics
| Item | Type | Status | Comments | Reactions | Link |
|------|------|--------|----------|-----------|------|
| #956 | PR | Open | 0 | 0 👍 | [nullclaw/nullclaw#956](https://github.com/nullclaw/nullclaw/pull/956) |

**Analysis**: The only active item is an automated Dependabot PR bumping `alpine:3.23 → 3.24` in the `docker-images` group. Zero comments or reactions indicate no human review or discussion yet. This reflects a project in passive maintenance mode—contributors are not actively engaging with dependency updates, which may signal limited maintainer bandwidth or low priority for Docker base-image freshness.

## 5. Bugs & Stability
No bugs, crashes, or regressions reported or updated in the last 24 hours. No fix PRs exist in the current window.

## 6. Feature Requests & Roadmap Signals
No new feature requests, issue discussions, or roadmap signals observed today. The absence of user-driven issues or proposal PRs suggests either:
- Feature parity is satisfactory for current users, or
- Community engagement is low / project visibility is limited.

No predictable next-version features can be inferred from today’s data.

## 7. User Feedback Summary
No user feedback (issues, discussions, reactions, or review comments) recorded in the last 24 hours. Pain points, use cases, and satisfaction signals are not observable from current activity.

## 8. Backlog Watch
| Item | Type | Age | Concern | Link |
|------|------|-----|---------|------|
| #956 | PR | 36 days (opened 2026-06-15) | Dependabot PR stale—no maintainer review/merge. Alpine 3.24 includes security patches and package updates; delaying merges increases supply-chain risk. | [#956](https://github.com/nullclaw/nullclaw/pull/956) |

**Recommendation**: Maintainers should prioritize reviewing/merging #956 to keep Docker images current. If bandwidth is constrained, consider enabling Dependabot auto-merge for patch-level base-image updates with passing CI.

---

*Data sourced from GitHub API for `nullclaw/nullclaw` covering 2026-07-20 → 2026-07-21. Digest generated 2026-07-21.*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-07-21

## 1. Today's Overview

IronClaw is in the midst of a **major architectural transition** ("Reborn") with intense refactoring activity. Over the past 24 hours, **50 PRs were updated** (28 merged/closed) and **43 issues updated** (3 closed), indicating a highly active codebase. The dominant theme is the **retirement of the v1 legacy monolith (`src/`)** and consolidation around the new `DeploymentConfig`-based composition model. No new releases were published today, but a `1.0.0-rc.1` release candidate is being prepared on a dedicated branch. The project shows strong velocity but carries elevated risk due to the scale of concurrent structural changes.

---

## 2. Releases

**No new releases published today.**  
A release candidate **`ironclaw-v1.0.0-rc.1`** is in progress on branch `release-fix-1.0.0-rc.1` (PR [#6383](https://github.com/nearai/ironclaw/pull/6383)). This RC strips the "Reborn" codename and addresses an MSI installer blocker. The tag push previously failed due to `cargo-dist` issues; the fix isolates the release from ongoing v1-deletion refactors on `main`.

---

## 3. Project Progress (Merged/Closed PRs Today)

| PR | Title | Scope | Significance |
|----|-------|-------|--------------|
| [#6375](https://github.com/nearai/ironclaw/pull/6375) | **Delete v1 legacy monolith (`src/`) and cut deploy over to Reborn** | XL, high risk, cross-cutting | **Landmark change**: removes the entire legacy `ironclaw-legacy` binary; repoints Railway, GCP systemd, Docker CI to Reborn stack. |
| [#6374](https://github.com/nearai/ironclaw/pull/6374) | Eliminate `local_trigger_access`; trigger-fire access is config + identity (§4.4) | XL, low risk, docs | Removes ~1,464 LOC shadow store that duplicated state; final Bucket-1 leak per architecture simplification doc. |
| [#6378](https://github.com/nearai/ironclaw/pull/6378) / [#6377](https://github.com/nearai/ironclaw/pull/6377) | Remove dead feature flags (`libsql-secrets`, `filesystem-goal-store`) | L/M, low risk | Continues runner feature-flag cleanup; reduces `ironclaw_runner` to a single flag. |
| [#6337](https://github.com/nearai/ironclaw/pull/6337) | Keep chat streams active and resume without replay | XL, low risk, docs | Fixes streaming resilience: timeouts on inactivity (not total duration), requires real provider terminal marker, preserves per-thread stream state. |
| [#6379](https://github.com/nearai/ironclaw/pull/6379) | Repair post-merge red `main` (release-plz + replay-gate legacy refs) | M, medium risk | Fixed two push-only workflows that referenced deleted Tier-B crates (`ironclaw_gateway`, `ironclaw_legacy`, `ironclaw_tui`). |
| [#6178](https://github.com/nearai/ironclaw/pull/6178), [#6179](https://github.com/nearai/ironclaw/pull/6179) | Automation error banner dismissible; Settings import success reporting fixed | M, low risk | UX polish on admin/automation surfaces. |
| [#6335](https://github.com/nearai/ironclaw/issues/6335) | Host-authored capability remediation silently placeholder'd | Closed | Root cause identified in #6309 regression. |

**Net effect**: The v1→Reborn migration is **effectively complete at the deployment level**; remaining work is follow-up cleanup (Issue [#6369](https://github.com/nearai/ironclaw/issues/6369)) and stabilization.

---

## 4. Community Hot Topics (Most Active Issues/PRs)

| Item | Comments | Core Need / Signal |
|------|----------|-------------------|
| **PR [#6382](https://github.com/nearai/ironclaw/pull/6382)** — `refactor(turns): simplify filesystem_store` | (new, XL) | **Maintainability crisis** in `filesystem_store`: dead parallel impl, duplicated crash-safety transitions, giant files. Retires blob store, dedups transitions. |
| **PR [#6386](https://github.com/nearai/ironclaw/pull/6386)** — `consolidate all pre-flight policy into authorize()` | (new, XL) | **Security architecture milestone** (§5.3.2/§9): make `authorize()` the single pre-flight policy site; closes gap where `Authorized` seal existed structurally but wasn't enforced. |
| **PR [#6387](https://github.com/nearai/ironclaw/pull/6387)** — `shrink deployment-mode branching ratchet 5→3` | (new, XL) | **Architecture ratchet enforcement**: reduce `DeploymentConfig` branching allowlist toward §4.4 target of only `deployment.rs`. |
| **Issue [#6263](https://github.com/nearai/ironclaw/issues/6263)** — Retire `InMemoryTurnStateStore` (final store consolidation) | 9 💬 | **Test oracle + livelock evidence required** before removing last `InMemory*Store` ratchet entry (~4,260 LOC). Blocked on Slice 0 oracle. |
| **Issue [#6274](https://github.com/nearai/ironclaw/issues/6274)** — Finish `DeploymentConfig` as main composition config | 4 💬 | **Composition unfinished**: `DeploymentConfig` landed but remains incomplete across §4.4/§5.6/§5.11. Track 1 in PR [#6387](https://github.com/nearai/ironclaw/pull/6387). |
| **Issue [#6190](https://github.com/nearai/ironclaw/issues/6190)** — Multiple conflicting error banners for single failed request | 4 💬 | **Error UX consolidation**: streaming + context-limit errors show simultaneously; need single actionable message per execution. |
| **Issue [#6189](https://github.com/nearai/ironclaw/issues/6189)** — Retryable stream error leaves completed response in failed state | 4 💬 | **False-positive error banner**: "Replay unavailable" shown despite successful completion; confuses users. |
| **Issue [#2277](https://github.com/nearai/ironclaw/issues/2277)** — ACP-backed child thread backends for delegated external agents | 2 💬, 1 👍 | **Strategic extensibility**: delegate to Codex, Droid, OpenCode via ACP while preserving parent/child thread semantics. Long-standing (Apr 2026). |

**Pattern**: The hottest items are **architectural ratchets** (enforcing simplification decisions) and **streaming/error UX** regressions surfaced by bug bash.

---

## 5. Bugs & Stability (Reported Today, Ranked by Severity)

| Severity | Issue | Description | Fix PR? |
|----------|-------|-------------|---------|
| **P1 (Critical)** | [#6360](https://github.com/nearai/ironclaw/issues/6360) | Provider onboarding: no "back" navigation after selecting provider; must cancel entire flow to switch. | No |
| **P1** | [#6348](https://github.com/nearai/ironclaw/issues/6348) | Gmail extension auto-authorizes on reinstall without OAuth prompt; immediate account access. **Security/consent violation.** | No |
| **P1** | [#6351](https://github.com/nearai/ironclaw/issues/6351) | Multi-tool requests fail with "checkpoint unavailable/unreachable" errors; blocks core functionality. | No |
| **P2 (High)** | [#6190](https://github.com/nearai/ironclaw/issues/6190) | Multiple conflicting error banners for single failed request (streaming + context limit). | No |
| **P2** | [#6189](https://github.com/nearai/ironclaw/issues/6189) | "Retryable error: Replay unavailable" banner shown after successful response completion. | No |
| **P2** | [#6352](https://github.com/nearai/ironclaw/issues/6352) | Streamed response replays in loop on page return; chunks flash/replace repeatedly. | No |
| **P2** | [#6350](https://github.com/nearai/ironclaw/issues/6350) | Assistant switches response language unexpectedly (English prompt → Ukrainian response). | No |
| **P2** | [#6353](https://github.com/nearai/ironclaw/issues/6353) | Long assistant messages truncated without expansion indicator or "show more". | No |
| **P2** | [#6349](https://github.com/nearai/ironclaw/issues/6349) | Telegram chat history rendered inconsistently in WebUI: fragmented layout, duplicated prompts, misplaced tool activity. | No |
| **P2** | [#6329](https://github.com/nearai/ironclaw/issues/6329) | `extension_lifecycle.rs` at 8,789 lines — **far exceeds 3,000-line architecture budget**; decomposition tracking issue filed. | No (tracking only) |
| **P2** | [#6359](https://github.com/nearai/ironclaw/issues/6359) | Test `reborn_trace_first_party_tool_coverage` reads real `$HOME` state; fails locally, passes in CI (clean `$HOME`). | No |
| **P2** | [#6347](https://github.com/nearai/ironclaw/issues/6347) | Slack instance-readiness lacks caller-level test coverage; harness forces Slack configured. | No |
| **P3 (Medium)** | [#6334](https://github.com/nearai/ironclaw/issues/6334) | Workspace tree lacks keyboard navigation/accessibility; assistive tech cannot identify hierarchy. | No |
| **P3** | [#6333](https://github.com/nearai/ironclaw/issues/6333) | Loading older messages jumps viewport; loses reading position. | No |
| **P3** | [#6332](https://github.com/nearai/ironclaw/issues/6332) | Workspace deep links don't expand tree to selected file. | No |
| **P3** | [#6331](https://github.com/nearai/ironclaw/issues/6331) | Tool permission dropdown flickers to old value while saving. | No |
| **P3** | [#6330](https://github.com/nearai/ironclaw/issues/6330) | Admin user details stale after role/status updates; separate query key not invalidated. | No |
| **P3** | [#6362](https://github.com/nearai/ironclaw/issues/6362) | Duplicate "Test connection" / "Fetch models" buttons in provider config; same validation flow. | No |

**Observation**: **17 new bugs filed today** (mostly from a "bug_bash"), heavily concentrated in **streaming UX, onboarding, extensions, and WebUI**. No fix PRs yet — triage/assignment phase. The two P1s (#6360, #6348) are **onboarding/security** and should be prioritized.

---

## 6. Feature Requests & Roadmap Signals

| Signal | Source | Likelihood for Next Version |
|--------|--------|----------------------------|
| **ACP child thread backends** (delegate to Codex/Droid/OpenCode) | Issue [#2277](https://github.com/nearai/ironclaw/issues/2277) (Apr 2026, 2💬, 1👍) | Medium — strategic but complex; depends on thread tree stability post-Reborn. |
| **IronHub extension install flow (Reborn-native)** | Issue [#6320](https://github.com/nearai/ironclaw/issues/6320) | High — tracked as enhancement, based on #4479; fits post-migration extensibility. |
| **Thread-scoped MCP sessions & programmatic MCP config** | Issue [#6325](https://github.com/nearai/ironclaw/issues/6325) | High — based on #6244; aligns with Reborn's mediated credentials model. |
| **WebUI workspace redesign + chat-first onboarding** | Issue [#6324](https://github.com/nearai/ironclaw/issues/6324) | High — based on #6162/#6163; addresses P1 onboarding gaps (#6360). |
| **In-chat command coverage backlog** | Issue [#6384](https://github.com/nearai/ironclaw/issues/6384) (created today) | Medium — prioritized backlog for planning; no implementation proposed yet. |
| **Narrow Reborn hooks to invocation authorization policy** | Issue [#6371](https://github.com/nearai/ironclaw/issues/6371) | Medium — architectural discussion; outcome affects hook surface in next cycle. |

**Prediction**: The next version (post-`1.0.0-rc.1`) will likely ship **WebUI onboarding fixes (#6324)**, **MCP thread-scoping (#6325)**, and **IronHub install flow (#6320)** — all Reborn-native enhancements unblocked by v1 deletion. ACP delegation (#2277) remains a longer-horizon bet.

---

## 7. User Feedback Summary (Pain Points & Use Cases)

| Pain Point | Evidence | User Impact |
|------------|----------|-------------|
| **Streaming reliability & error clarity** | #6189, #6190, #6352, #6337 (fix merged) | Users see false errors, looping replays, truncated responses; trust in output degraded. |
| **Onboarding friction** | #6360 (no back), #6362 (duplicate buttons), #6348 (auto-auth) | First-run experience broken; security consent bypassed; provider switching painful. |
| **Cross-channel history inconsistency** | #6349 (Telegram↔WebUI) | Multi-device users get fragmented, duplicated, misplaced conversations. |
| **Language unpredictability** | #6350 (English→Ukrainian) | Non-deterministic output language breaks workflow for multilingual users. |
| **Checkpoint instability** | #6351 (unavailable/unreachable) | Multi-tool agent runs fail silently; core automation unreliable. |
| **Accessibility gaps** | #6334 (tree nav), #6331 (dropdown flicker), #6333 (viewport jump) | Keyboard/screen-reader users blocked; power users lose context. |
| **Extension lifecycle opacity** | #6348 (Gmail auto-auth), #6347 (Slack test gap) | Users unaware of granted permissions; testing blind spots. |

**Satisfaction signal**: The **bug bash** (17 P2+ issues in 24h) indicates **accumulated UX debt** surfacing now that Reborn is deployed. Users are hitting edges in streaming, onboarding, and multi-channel sync — the "last mile" of the migration.

---

## 8. Backlog Watch (Long-Unanswered / Needs Maintainer Attention)

| Item | Age | Why It Matters | Status |
|------|-----|----------------|--------|
| **Issue [#2277](https://github.com/nearai/ironclaw/issues/2277)** — ACP child thread backends | 3+ months | Strategic extensibility; enables IronClaw as "manager of agents". No movement since April. | Open, 2💬, 1👍 |
| **Issue [#6263](https://github.com/nearai/ironclaw/issues/6263)** — Retire `InMemoryTurnStateStore` | 2 days (but final ratchet step) | **Blocks test oracle completion**; needs Slice 0 oracle + no-livelock evidence. 9💬 shows active debate. | Open, 9💬 |
| **Issue [#6329](https://github.com/nearai

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-07-21

## 1. Today's Overview
LobsterAI showed **high merge velocity** yesterday with **10 PRs closed/merged** in a single day, indicating an active development sprint. No new issues were filed in the last 24 hours, and no releases were cut. The open PR queue is small (5), dominated by long-stale Dependabot upgrades (Electron, React, Headless UI) that have lingered since April. One new feature PR (#2368) for silent Windows updates was opened today. Overall project health appears strong: rapid iteration on cowork, artifacts, auth, and Windows packaging, with technical debt (dependency upgrades) accumulating but not blocking current work.

## 2. Releases
**No new releases** in the last 24 hours.

## 3. Project Progress — Merged/Closed PRs (2026-07-20)

| PR | Area | Summary |
|----|------|---------|
| [#2367](https://github.com/netease-youdao/LobsterAI/pull/2367) | build, windows | **Explicit channel entry points for Windows dist builds** — adds `dist-win-channel.cjs` / `dist-win-web.cjs` to pass `keyfrom`/`web-installer` env vars per build, preventing leakage between builds. |
| [#2366](https://github.com/netease-youdao/LobsterAI/pull/2366) | renderer, docs, main, cowork, artifacts | **Browser multi-annotation attachments** — new annotation protocol, webview preload, screenshot asset storage IPC; batch create annotations in embedded browser, save cropped screenshots, surface as draft attachments with badge count; metadata + OpenClaw prompt integration; design doc + tests. |
| [#2365](https://github.com/netease-youdao/LobsterAI/pull/2365) | docs, main, openclaw | **OpenClaw config hot-reload via RPC ack** — replaces file-watcher reload with RPC acknowledgment for reliability. |
| [#2364](https://github.com/netease-youdao/LobsterAI/pull/2364) | renderer, main | **Prevent scroll jumps on session refresh** — scopes refresh events by session ID, preserves loaded message history. |
| [#2361](https://github.com/netease-youdao/LobsterAI/pull/2361) | renderer, main | **AI skin creation flow improvements** — persistent entry in Appearance settings, onboarding, framework prompt first in "Try Asking", workflow persists across follow-up turns. |
| [#2362](https://github.com/netease-youdao/LobsterAI/pull/2362) | renderer | **Cron UI bug fix** — details not elaborated in summary. |
| [#2363](https://github.com/netease-youdao/LobsterAI/pull/2363) | main | **Prevent periodic IM message flicker** — compares matching history windows during reconciliation, preserves older messages when repairing mismatched gateway tail. |
| [#2360](https://github.com/netease-youdao/LobsterAI/pull/2360) | renderer, main | **Preserve local callback across login retries** — reuses active callback server for repeated/concurrent login attempts; adds lifecycle diagnostics + regression tests. |
| [#2359](https://github.com/netease-youdao/LobsterAI/pull/2359) | renderer, cowork, artifacts | **Stabilize artifact preview panel & input layout** — stable keys for drag handle/content to avoid subtree rebuild on expand toggle; sync input height in layout phase to reduce flash. |
| [#1349](https://github.com/netease-youdao/LobsterAI/pull/1349) | im | **Real API validation for POPO connectivity test** — fixes false-positive "验证通过" by actually calling POPO API to validate `appKey`/`appSecret` (closes #1287). |

**Theme of the day:** Cowork/IM stability (scroll, flicker, reconciliation), artifact UI polish, Windows build hygiene, and a major collaborative browsing feature (multi-annotation).

## 4. Community Hot Topics
No issues updated in the last 24h. The most "active" PRs by virtue of being the only new work are:

| PR | Type | Signal |
|----|------|--------|
| [#2368](https://github.com/netease-youdao/LobsterAI/pull/2368) | **Feature** (open, created today) | Silent Windows update install via `/S` NSIS flag, PowerShell elevation, localized UAC-decline error (exit 1223), auto-relaunch. Addresses enterprise/managed-device deployment friction. |
| [#2366](https://github.com/netease-youdao/LobsterAI/pull/2366) | **Feature** (merged) | Multi-annotation in embedded browser — heavy IPC + Redux + asset storage work; likely driven by power-user research/knowledge-work flows. |
| [#1277](https://github.com/netease-youdao/LobsterAI/pull/1277) | **Dependency** (stale, updated today) | Electron 40→43, electron-builder bump — blocked 3+ months; may need maintainer triage for breaking changes. |

**Underlying needs:** Enterprise Windows deployment (silent installs), deep browser-based research workflows (annotations), and clearing the dependency backlog before it blocks Electron upgrades.

## 5. Bugs & Stability — Fixed Today
All fixed via merged PRs above. Ranked by user-visible impact:

| Severity | Bug | Fix PR |
|----------|-----|--------|
| **High** | POPO connectivity test always passed regardless of credentials | [#1349](https://github.com/netease-youdao/LobsterAI/pull/1349) |
| **Medium** | IM message list flickered periodically during reconciliation | [#2363](https://github.com/netease-youdao/LobsterAI/pull/2363) |
| **Medium** | Scroll position jumped on session refresh | [#2364](https://github.com/netease-youdao/LobsterAI/pull/2364) |
| **Medium** | Artifact preview panel rebuilt on expand/collapse, input area flashed | [#2359](https://github.com/netease-youdao/LobsterAI/pull/2359) |
| **Low** | Login callback server not reused across retries (potential port conflicts) | [#2360](https://github.com/netease-youdao/LobsterAI/pull/2360) |
| **Low** | Cron UI bug (unspecified) | [#2362](https://github.com/netease-youdao/LobsterAI/pull/2362) |

**No new bugs reported today.** Regression coverage added for auth (#2360) and IM reconciliation (#2363).

## 6. Feature Requests & Roadmap Signals
| Signal | Source | Likelihood for Next Version |
|--------|--------|-----------------------------|
| **Silent Windows auto-update** | [#2368](https://github.com/netease-youdao/LobsterAI/pull/2368) (open, authored by maintainer `fisherdaddy`) | **High** — maintainer-driven, clear enterprise value, small scope. |
| **AI skin creation onboarding & persistence** | [#2361](https://github.com/netease-youdao/LobsterAI/pull/2361) (merged) | **Delivered** — already in main. |
| **Browser multi-annotation as first-class attachments** | [#2366](https://github.com/netease-youdao/LobsterAI/pull/2366) (merged) | **Delivered** — heavy feature, likely headline for next release. |
| **Electron 43 / React 19 / Headless UI 2 upgrades** | [#1277](https://github.com/netease-youdao/LobsterAI/pull/1277), [#1283](https://github.com/netease-youdao/LobsterAI/pull/1283), [#1282](https://github.com/netease-youdao/LobsterAI/pull/1282) (all stale) | **Medium** — overdue; may ship as a "maintenance release" once tested. |
| **OpenClaw config hot-reload reliability** | [#2365](https://github.com/netease-youdao/LobsterAI/pull/2365) (merged) | **Delivered** — infra improvement. |

**Prediction:** Next release will bundle the cowork/annotation feature (#2366), AI skin flow (#2361), and a batch of stability fixes (#2359, #2360, #2363, #2364). Silent Windows update (#2368) may land in the same or immediate follow-up.

## 7. User Feedback Summary
No direct user issues/comments in the last 24h. Inferred pain points from merged fixes:

| Pain Point | Evidence |
|------------|----------|
| **"POPO test lies to me"** — users could enter garbage credentials and see success | Fixed by #1349 (real API validation) |
| **"Message list jumps/flickers while I'm reading"** | Fixed by #2363, #2364 |
| **"Expanding an artifact makes the input box flicker"** | Fixed by #2359 |
| **"Logging in again breaks because port is busy"** | Fixed by #2360 |
| **"I want to annotate multiple parts of a web page and send them together"** | Addressed by #2366 (multi-annotation attachments) |
| **"Enterprise IT needs silent installs without UAC prompts"** | Addressed by #2368 (in progress) |

## 8. Backlog Watch — Stale PRs Needing Maintainer Attention
| PR | Age | Risk | Recommendation |
|----|-----|------|----------------|
| [#1277](https://github.com/netease-youdao/LobsterAI/pull/1277) | 110 days | **High** — Electron 40→43 includes V8/Node/Chromium updates; may break native modules or IPC. Blocked on test pass. | Assign owner; run full CI; merge or rebase. |
| [#1283](https://github.com/netease-youdao/LobsterAI/pull/1283) | 110 days | **High** — React 18→19 is a major version with concurrent features, deprecations. | Test with component suite; likely needs codemods. |
| [#1282](https://github.com/netease-youdao/LobsterAI/pull/1282) | 110 days | **Medium** — Headless UI 1→2 has breaking API changes. | Verify dialog/menu/dropdown usage. |
| [#1284](https://github.com/netease-youdao/LobsterAI/pull/1284) | 110 days | **Low** — Syntax highlighter bump; usually safe. | Quick smoke test; merge. |

**Action item:** The four Dependabot PRs have been stale since April. With 10 PRs merged yesterday, the team has velocity — allocate one sprint day to clear this debt before it compounds with Electron 44+.

---

*Digest generated from GitHub data as of 2026-07-21 00:00 UTC. Links point to netease-youdao/LobsterAI.*

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

# CoPaw (QwenPaw) Project Digest — 2026-07-21

## 1. Today's Overview
CoPaw (QwenPaw) shows **high development velocity** with 72 total GitHub items updated in the last 24 hours (30 issues, 42 PRs). The project is in active v2.0.x maintenance with v2.0.1 beta underway. No new release was published today. The issue/PR ratio (30:42) indicates strong contributor engagement — more PRs than issues suggests active feature development and bug fixing rather than just triage. Key focus areas: AgentScope 2.x integration, reasoning/thinking block handling, browser automation unification, memory system stability, and desktop/TUI polish.

## 2. Releases
**No new releases today.** Latest published version remains `v2.0.0.post3` (ReMe `0.4.1.1`). Several PRs target `v2.0.1b1` (e.g., #6282, #6273), indicating a beta release is in preparation.

## 3. Project Progress — Merged/Closed PRs (Last 24h)
| PR | Title | Type | Impact |
|----|-------|------|--------|
| [#6150](https://github.com/agentscope-ai/QwenPaw/pull/6150) | feat(pawapp): add pawapp sdk and kanban app | Feature | New plugin framework + Kanban app (closed/merged) |
| [#6235](https://github.com/agentscope-ai/QwenPaw/pull/6235) | feat(memory): enhance ReMe Light index maintenance stability and chunking | Feature/Stability | Index rebuild made explicit; reme-ai upgraded to `0.4.1.3`; chunking/logging improvements |
| [#5922](https://github.com/agentscope-ai/QwenPaw/pull/5922) | feat(observability): track user/session/version on langfuse traces | Observability | Langfuse trace IDs fixed (`uuid4().hex`); user/session/version propagation |
| [#6210](https://github.com/agentscope-ai/QwenPaw/pull/6210) | refactor: make the default loop an agent mode | Refactor | ReAct loop → `DefaultMode`; explicit stop-handler ownership per mode |
| [#6250](https://github.com/agentscope-ai/QwenPaw/pull/6250) | fix: sandbox fallback hardcoded approval | Bugfix | Added config to bypass sandbox-unavailable approval prompt |
| [#6246](https://github.com/agentscope-ai/QwenPaw/pull/6246) | fix: `_saved_tool_refs` crashes `recall_history` (filename too long) | Bugfix | Truncates long tool-result filenames in search |
| [#6255](https://github.com/agentscope-ai/QwenPaw/pull/6255) | fix: chat error (openai.BadRequestError) | Bugfix | Addresses 400 error during chat |
| [#5961](https://github.com/agentscope-ai/QwenPaw/pull/5961) | fix: v2.0.0 infinite write/delete loop with qwen3.7-plus | Bugfix | Resolves agent stuck in write/delete cycle |
| [#5958](https://github.com/agentscope-ai/QwenPaw/pull/5958) | question: AgentScope permission control in QwenPaw | Clarification | Confirmed permission system not directly exposed |
| [#5959](https://github.com/agentscope-ai/QwenPaw/pull/5959) | question: script upgrade to v2.0.0 | Support | Script upgrade path clarified |

**Net progress**: Memory subsystem hardened, observability fixed, agent-mode architecture refactored, sandbox approval configurable, several v2.0.0 regressions resolved.

## 4. Community Hot Topics (Most Comments/Reactions)
| Item | Comments | 👍 | Core Need |
|------|----------|-----|-----------|
| [#6257](https://github.com/agentscope-ai/QwenPaw/issues/6257) **Bug: Multiple tool calls produce identical thinking output** | 13 | 0 | **Critical UX/debugging issue** — thinking blocks duplicated across tool calls in one turn, hiding per-call reasoning. Affects AgentScope 2.x multi-tool turns. |
| [#5961](https://github.com/agentscope-ai/QwenPaw/issues/5961) **v2.0.0 循环执行问题** (closed) | 8 | 0 | Agent stuck in write/delete loop with qwen3.7-plus — **model-specific prompt/loop interaction bug**. |
| [#4873](https://github.com/agentscope-ai/QwenPaw/issues/4873) **Two subagents → main agent infinite fast polling** | 5 | 0 | **Concurrency design flaw** — background subagent polling overwhelms main agent; Feishu interrupt broken. |
| [#6242](https://github.com/agentscope-ai/QwenPaw/issues/6242) **Console embedding dimensions not sent to OpenAI-compatible APIs** | 3 | 0 | Config UI field (`use_dimensions`) not passed to provider — **settings leakage**. |
| [#6282](https://github.com/agentscope-ai/QwenPaw/issues/6282) **Reasoning relay repeats first thinking block across AgentScope 2 tool iterations** | 1 | 1 | **Duplicate of #6257** — same root cause in shared provider formatter. PR [#6280](https://github.com/agentscope-ai/QwenPaw/pull/6280) under review. |

**Underlying theme**: AgentScope 2.x multi-turn reasoning/thinking serialization is fragile — multiple issues/PRs converge on the same formatter bug.

## 5. Bugs & Stability — Ranked by Severity
| Severity | Issue | Status | Fix PR |
|----------|-------|--------|--------|
| **Critical** | [#6257](https://github.com/agentscope-ai/QwenPaw/issues/6257) / [#6282](https://github.com/agentscope-ai/QwenPaw/issues/6282) — Identical thinking blocks across tool calls | Open | [#6280](https://github.com/agentscope-ai/QwenPaw/pull/6280) (Under Review) |
| **High** | [#6197](https://github.com/agentscope-ai/QwenPaw/issues/6197) — Desktop binary hangs on `nvidia-smi` hang (Windows) | Open | — |
| **High** | [#4873](https://github.com/agentscope-ai/QwenPaw/issues/4873) — Subagent concurrency → main agent polling storm + Feishu interrupt broken | Open | — |
| **High** | [#6241](https://github.com/agentscope-ai/QwenPaw/issues/6241) — Agent repeats output + `memory_search` doom loop (framework lacks repeat detection) | Open | [#6041](https://github.com/agentscope-ai/QwenPaw/pull/6041) (exempts read-only tools) |
| **Medium** | [#6246](https://github.com/agentscope-ai/QwenPaw/issues/6246) — `recall_history` crashes on long filename (OSError 36) | **Closed** | [#6246](https://github.com/agentscope-ai/QwenPaw/pull/6246) merged |
| **Medium** | [#6239](https://github.com/agentscope-ai/QwenPaw/issues/6239) — Windows PATH concatenation drops `;` → child processes lose npm globals | Open | — |
| **Medium** | [#6261](https://github.com/agentscope-ai/QwenPaw/issues/6261) — Offline code mode: file preview fails (needs online resources) | Open | — |
| **Medium** | [#6252](https://github.com/agentscope-ai/QwenPaw/issues/6252) — Desktop (Tauri) zoom shortcuts broken on Linux | Open | — |
| **Low** | [#5688](https://github.com/agentscope-ai/QwenPaw/issues/5688) — CSS prefix mismatch `ant-` vs `qwenpaw-` | Open | — |
| **Low** | [#6249](https://github.com/agentscope-ai/QwenPaw/issues/6249) — Source TUI stuck at "warming" | Open | — |

## 6. Feature Requests & Roadmap Signals
| Request | Issue/PR | Likelihood for Next Version |
|---------|----------|----------------------------|
| **Auto-attach current real time to LLM context** | [#6283](https://github.com/agentscope-ai/QwenPaw/issues/6283) | High — solves date confusion in resumed sessions; labeled Core/Backend |
| **`ask_user_question` tool (Human-in-the-Loop)** | [#6274](https://github.com/agentscope-ai/QwenPaw/issues/6274) | High — structured HITL with multi-choice; affects Core + Console |
| **Session grouping/folders in Desktop sidebar** | [#6287](https://github.com/agentscope-ai/QwenPaw/issues/6287) | Medium — Console-only, clear UX value |
| **Disable/customize built-in tool descriptions (save 8-10k tokens)** | [#6286](https://github.com/agentscope-ai/QwenPaw/issues/6286) | Medium — token optimization, backward-compatible |
| **Add `qwen3.8-max-preview` to Aliyun model list** | [#6285](https://github.com/agentscope-ai/QwenPaw/issues/6285) | High — trivial config update, model already available |
| **AIOnly as built-in provider (190+ models)** | [#6268](https://github.com/agentscope-ai/QwenPaw/issues/6268) / [#6271](https://github.com/agentscope-ai/QwenPaw/pull/6271) | High — PR under review, OpenAI-compatible |
| **Unified Browser (one SDK, any backend)** | [#6276](https://github.com/agentscope-ai/QwenPaw/pull/6276) | High — major refactor, replaces legacy browser stack |
| **Chrome Extension plugin (pairing + native messaging)** | [#6157](https://github.com/agentscope-ai/QwenPaw/pull/6157) | Medium — depends on #6276 |
| **Per-session model overrides** | [#5992](https://github.com/agentscope-ai/QwenPaw/pull/5992) | Medium — Settings modal + chat header selector |
| **One-click agent config copy** | [#6262](https://github.com/agentscope-ai/QwenPaw/pull/6262) | Medium — backend API + modal UI |
| **Windows GUI automation (UIA + Tauri Control Mode)** | [#5187](https://github.com/agentscope-ai/QwenPaw/pull/5187) | Low — long-open, complex, platform-specific |
| **Minimize to system tray** | [#6264](https://github.com/agentscope-ai/QwenPaw/issues/6264) | Low — Desktop only, closed but no PR |
| **Mobile-responsive Web Console** | [#6281](https://github.com/agentscope-ai/QwenPaw/issues/6281) | Low — Console only, new issue |

**Predicted v2.0.1 scope**: Thinking-block fix (#6280), time-injection (#6283), `qwen3.8-max-preview` (#6285), AIOnly provider (#6271), unified browser (#6276), per-session model overrides (#5992), agent config copy (#6262).

## 7. User Feedback Summary
| Pain Point | Evidence | Sentiment |
|------------|----------|-----------|
| **Thinking blocks duplicated** — users cannot debug per-tool reasoning | #6257 (13 comments), #6282 (1👍) | 😡 Frustrated — core debugging UX broken |
| **Agent stuck in loops** (write/delete, memory_search) | #5961, #6241 | 😡 Frustrated — v2.0.0 regression |
| **Subagent concurrency unusable** — polling storm, no Feishu interrupt | #4873 (5 comments, open since Jun) | 😐 Annoyed — blocks multi-task workflows |
| **Desktop startup hangs on GPU issues** | #6197 | 😡 Blocked — Windows binary unusable for some |
| **Offline mode broken** — file preview needs network | #6261 | 😐 Disappointed — air-gapped environments unsupported |
| **Token waste from unused built-in tools** | #6286 | 😐 Cost-conscious — 8-10k tokens/request |
| **Console not mobile-friendly** | #6281 | 😐 Request — limits on-the-go use |
| **Session history unmanageable** — no folders/grouping | #6287 | 😐 Organizational pain |
| **Config UI fields not propagated** (embedding dimensions) | #6242 | 😐 Settings leakage |
| **Zoom broken on Linux Desktop** | #6252 | 😐 Accessibility issue |

**Positive signals**: Active contributor base (42 PRs/24h), first-time contributors welcomed (#5922, #6041, #6203, #6271), rapid bug fix turnaround (multiple same-day closes).

## 8. Backlog Watch — Stale/Needs Attention
| Item | Age | Why It Matters |
|------|-----|----------------|
| [#4873](https://github.com/agentscope-ai/QwenPaw/issues/4873) **Subagent concurrency polling storm** | 50 days (since 2026-06-01) | Blocks background multi-agent workflows; Feishu interrupt broken; 5 comments, no PR |
| [#5688](https://github.com/agentscope-ai/QwenPaw/issues/5688) **CSS prefix mismatch `ant-` vs `qwenpaw-`** | 20 days | Console styling likely broken; low effort fix, no movement |
| [#6197](https://github.com/agentscope-ai/QwenPaw/issues/6197) **Desktop hangs on `nvidia-smi`** | 5 days | Windows binary startup failure; needs timeout/fallback in frozen binary |
| [#6239](https://github.com/agentscope-ai/QwenPaw/issues/6239) **Windows PATH `;` dropped** | 3 days | Breaks npm globals in child processes; AI-drafted but valid |
| [#5187](https://github.com/agentscope-ai/QwenPaw/pull/5187) **Windows GUI automation (UIA)** | 37 days | Large PR, no review movement; platform-specific but high value |
| [#6151](https://github.com/agentscope-ai/QwenPaw/pull/6151) **Background tool call offload refactor** | 6 days | Fixes #6056 (3 bugs); core async architecture, needs review |
| [#6157](https://github.com/agentscope-ai/QwenPaw/pull/6157) **Chrome Extension plugin** | 6 days | Depends on #6276; enables user's own browser control |

---

**Project Health Score**: 🟡 **Good but with critical v2.0.x regressions**  
- ✅ High velocity, active contributors, rapid fixes  
- ✅ Architectural improvements (agent modes, unified browser, memory stability)  
- ⚠️ **Critical thinking-block bug** affects core debugging UX (fix in review)  
- ⚠️ Several **stale high-impact issues** (subagent concurrency, Windows PATH, desktop GPU hang)  
- ⚠️ **No release since v2.0.0.post3** — users on broken version

**Recommendation**: Prioritize merging #6280 (thinking fix), cut v2.0.1 with accumulated fixes, then address backlog items #4873, #6197, #6239.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

⚠️ Summary generation failed.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/DenisZheng/agents-radar).*