# OpenClaw Ecosystem Digest 2026-06-02

> Issues: 471 | PRs: 500 | Projects covered: 13 | Generated: 2026-06-02 00:43 UTC

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

# OpenClaw Project Digest — 2026-06-02

---

## 1. Today's Overview

OpenClaw is in an extremely high-activity phase with **471 issues** and **500 PRs** updated in the last 24 hours, indicating a large and highly engaged contributor base pushing rapid iteration. Three new beta releases landed today (v2026.6.1-beta.2, v2026.6.1-beta.1, v2026.5.31-beta.4), all focused on the same core theme: **runtime resilience** — cleaner recovery from interrupted tool calls, stale session bindings, compaction handoffs, and media delivery retries across Telegram, WhatsApp, iMessage, and Slack. The project is clearly in a stabilization sprint ahead of a stable v2026.6.1 release. With 295 open active issues and 396 open PRs, the backlog is substantial, and maintainer bandwidth appears to be a bottleneck given the volume of PRs flagged `needs-maintainer-review`.

---

## 2. Releases

Three beta releases were published today, all incremental builds on the same stabilization work:

| Version | Key Focus |
|---|---|
| **v2026.6.1-beta.2** | Agents/CLI runtimes recover cleanly from interrupted tool calls, stale session bindings, compaction handoffs, media delivery retries. Channel delivery steadier across Telegram, WhatsApp, iMessage, Slack. |
| **v2026.6.1-beta.1** | Same core fixes as above (earlier beta iteration). |
| **v2026.5.31-beta.4** | Same core fixes (earlier beta iteration). |

**Analysis:** The three releases share identical changelog highlights, suggesting a rapid beta cadence focused on validating the same set of runtime recovery fixes across different channel configurations. The referenced PRs (#88129, #88136, #88141, #88162, #88182) are the critical stabilization work. No breaking changes or migration notes are indicated. The project appears to be converging toward a stable **v2026.6.1** release, with the beta cycle validating channel-specific delivery reliability.

---

## 3. Project Progress

The release notes point to these merged PRs as the primary advancement today:

- **#88129, #88136, #88141, #88162, #88182** — Core runtime recovery improvements for interrupted tool calls, stale session bindings, compaction handoffs, and media delivery retries.

These fixes address a class of reliability issues that have been recurring across multiple beta cycles. The fact that they span five separate PRs suggests the fixes were deliberately kept small and reviewable (consistent with the branch-by-abstraction approach tracked in issue #88838).

**Notable open PRs advancing key areas:**

- **PR #89261 & #89262** (jalehman) — Add public transcript identity API and scoped transcript target writers, foundational work for the session/transcript SQLite migration tracked in #88838. These are the "Path 3" seam work enabling incremental migration away from file-based session storage.
- **PR #88748** (jason-allen-oneal) — Bridges Gemini OAuth profiles into the CLI runtime, addressing auth-provider compatibility for Google Gemini users.
- **PR #88946** (steipete) — Fixes live model inference edge cases including silent no-reply payload handling and Azure AI Foundry compatibility.
- **PR #89040** (Jerry-Xin) — Performance fix for event-loop stalls during `embedded_run` bootstrap (14-22s stalls causing message loss).
- **PR #89039** (Jerry-Xin) — Prevents silent message loss from `EmbeddedAttemptSessionTakeoverError` during OpenAI SDK retries.

---

## 4. Community Hot Topics

### Most Discussed Issues (by comment count)

1. **[#80171](https://github.com/openclaw/openclaw/issues/80171)** — *Codex-vs-Pi runtime parity QA harness* (15 comments, CLOSED/stale) — A long-running RFC tracking OpenClaw's transition from Pi to Codex as the default OpenAI runtime. The closure suggests this workstream has been resolved or deprioritized.

2. **[#80380](https://github.com/openclaw/openclaw/issues/80380)** — *Update to gemini-3.1-flash-lite GA* (14 comments, 👍4, OPEN) — Users want OpenClaw to migrate from the preview to the GA version of Gemini 3.1 Flash-Lite. A straightforward dependency/model-config update that's likely low-effort.

3. **[#88838](https://github.com/openclaw/openclaw/issues/88838)** — *Track core session/transcript SQLite migration via accessor seam* (12 comments, OPEN) — A meta-tracking issue for incrementally migrating session state to SQLite. This is a significant architectural undertaking. PRs #89261 and #89262 are the first concrete steps.

4. **[#84038](https://github.com/openclaw/openclaw/issues/84038)** — *doctor --fix silently migrates openai-codex/ config to openai/, breaking PI+OAuth runtime* (12 comments, 👍3, CLOSED) — A serious regression where the doctor command's auto-fix behavior destroyed intentional configuration. Closed, suggesting a fix was merged.

5. **[#86820](https://github.com/openclaw/openclaw/issues/86820)** — *Codex OAuth compaction falls back to direct OpenAI API and fails without OPENAI_API_KEY* (12 comments, 👍6, CLOSED) — High-reaction bug where OAuth-authenticated sessions silently fell back to API key auth during compaction. The 👍6 indicates this affected many users.

### Underlying Needs

The hot topics reveal three major user needs:
- **Runtime reliability**: Users are frustrated by silent failures in auth, compaction, and session management that are difficult to diagnose.
- **Migration safety**: The `doctor --fix` issue (#84038) shows users need auto-repair tools that don't destroy intentional configuration.
- **Storage modernization**: The SQLite migration (#88838) signals that the file-based session store is hitting scalability limits.

---

## 5. Bugs & Stability

### Critical (P1) Open Bugs

| Issue | Severity | Description | Fix PR? |
|---|---|---|---|
| **[#86519](https://github.com/openclaw/openclaw/issues/86519)** | 🔴 P1 regression | Agent sends 2-10x duplicate replies on Telegram after 5.20 update | None visible |
| **[#88312](https://github.com/openclaw/openclaw/issues/88312)** | 🔴 P1 regression | Codex app-server turn-completion stall — regression of previously fixed #84076 | None visible |
| **[#87744](https://github.com/openclaw/openclaw/issues/87744)** | 🔴 P1 | Codex-backed Telegram turns repeatedly timeout waiting for turn/completed | None visible |
| **[#86215](https://github.com/openclaw/openclaw/issues/86215)** | 🟠 P1 | Codex OAuth refresh failures wedge agent for hours without alerting | None visible |
| **[#80607](https://github.com/openclaw/openclaw/issues/80607)** | 🟠 P1 perf | Non-default multi-agent uses embedded_run — 10-17s latency per message | None visible |
| **[#78055](https://github.com/openclaw/openclaw/issues/78055)** | 🟠 P1 | Subagent announce delivers stale output; sessions inherit unrelated history | None visible |

### Closed Today (Fixed)

| Issue | Description |
|---|---|
| **[#84038](https://github.com/openclaw/openclaw/issues/84038)** | doctor --fix config migration breaking PI+OAuth runtime |
| **[#86820](https://github.com/openclaw/openclaw/issues/86820)** | Codex OAuth compaction fallback failure |
| **[#87177](https://github.com/openclaw/openclaw/issues/87177)** | Message duplication in QQBot channel |
| **[#88102](https://github.com/openclaw/openclaw/issues/88102)** | Codex runtime rejects openai/gpt-5.5 |
| **[#84820](https://github.com/openclaw/openclaw/issues/84820)** | Unclosed FileHandle crashes gateway on Node ≥24 |
| **[#57019](https://github.com/openclaw/openclaw/issues/57019)** | Session write lock race condition |

### Stability Assessment

The project has a **high regression rate** — multiple P1 issues are explicitly tagged as regressions from recent releases (5.20, 5.27). The Codex runtime is a particular pain point, with turn-completion stalls, OAuth issues, and Telegram delivery failures. The fact that #88312 is a regression of a *previously fixed* issue (#84076) suggests insufficient regression test coverage. The three beta releases today are directly addressing these stability concerns.

---

## 6. Feature Requests & Roadmap Signals

### Likely in Next Release (v2026.6.1 stable)

- **Gemini 3.1 Flash-Lite GA migration** ([#80380](https://github.com/openclaw/openclaw/issues/80380)) — Low effort, high demand (👍4), aligns with Google's deprecation timeline.
- **Session/transcript SQLite migration** ([#88838](https://github.com/openclaw/openclaw/issues/88838)) — Foundational PRs (#89261, #89262) already in progress; likely to land incrementally.

### Medium-Term Candidates

- **Channel-mediated MCP tool approval** ([#78301](https://github.com/openclaw/openclaw/issues/78301)) — Security feature for consent-gated MCP tool calls. 11 comments, tagged security. Important for enterprise/multi-user deployments.
- **Telegram bot-to-bot and guest-bot modes** ([#79077](https://github.com/openclaw/openclaw/issues/79077)) — 👍7 (highest reaction count among feature requests), aligns with Telegram's May 2026 platform release.
- **Multi-agent collaboration enhancement** ([#35203](https://github.com/openclaw/openclaw/issues/35203)) — RFC for capability profiling, shared blackboard, layered memory. Ambitious; likely a longer-term roadmap item.
- **i18n for slash command descriptions** ([#79458](https://github.com/openclaw/openclaw/issues/79458)) — Accessibility/internationalization improvement for non-English users.

### Architectural Signal

The SQLite session migration and the transcript identity API work suggest OpenClaw is undergoing a **significant storage layer modernization**. This is the kind of foundational work that enables future features (better multi-agent, session search, analytics) but may introduce compatibility risks in the short term.

---

## 7. User Feedback Summary

### Pain Points

1. **Silent failures dominate user complaints**: Issues like [#85692](https://github.com/openclaw/openclaw/issues/85692) (Feishu agent returns replies=0 with no error logged), [#80040](https://github.com/openclaw/openclaw/issues/80040) (cascading auth failures producing empty placeholder replies), and [#88369](https://github.com/openclaw/openclaw/issues/88369) (isolated cron self-conflicts) all share a theme: **failures are invisible until the user notices missing output**. Users are asking for better alerting and diagnostics.

2. **Configuration fragility**: The `doctor --fix` issue (#84038) and the Codex model routing issue (#88102) both reflect that **configuration changes — whether automatic or from upgrades — can silently break working setups**. Users running production OpenClaw instances on VPS infrastructure are particularly affected.

3. **Multi-agent performance**: Issue [#80607](https://github.com/openclaw/openclaw/issues/80607) (10-17s latency for non-default agents) and [#89139](https://github.com/openclaw/openclaw/issues/89139) (webchat destroying prompt cache with 93%→29% hit rate) indicate that **multi-agent and webchat users experience significantly degraded performance** compared to single-agent Feishu/Telegram users.

4. **Channel-specific reliability**: Telegram (duplicate replies, turn timeouts), QQBot (message duplication), Discord (gateway READY event failures), and Feishu (silent failures, session rebuilds) all have active P1 bugs. **No channel is immune**, but Telegram and Feishu appear to have the most active issues.

### Satisfaction Signals

- The high volume of PRs (500 updated in 24h) and the rapid beta release cadence suggest **maintainers are responsive** and the project is actively addressing issues.
- The structured QA harness work (#80171, #80397) and the branch-by-abstraction migration approach (#88838) indicate **maturing engineering practices**.
- Community members are contributing detailed root cause analyses (e.g., [#85692](https://github.com/openclaw/openclaw/issues/85692) with three-model investigation), showing a **highly technical and engaged user base**.

---

## 8. Backlog Watch

### Long-Unanswered Important Issues

| Issue | Age | Why It Matters |
|---|---|---|
| **[#35203](https://github.com/openclaw/openclaw/issues/35203)** — Multi-agent collaboration RFC | 90 days | Architectural RFC with no maintainer response; blocks community multi-agent contributions |
| **[#42820](https://github.com/openclaw/openclaw/issues/42820)** — Feishu message tool poll schema pollution | 83 days | P1 bug affecting Feishu users; has linked PR but no movement |
| **[#77666](https://github.com/openclaw/openclaw/issues/77666)** — Feishu group messages replies=0 | 28 days | 👍4, affects group chat functionality; no resolution |
| **[#77717](https://github.com/openclaw/openclaw/issues/77717)** — Feishu bot identity recovery race condition | 28 days | P1, permanent disconnection bug; has reproduction steps |
| **[#78301](https://github.com/openclaw/openclaw/issues/78301)** — Plugin loader silent failures | 27 days | Developer experience issue costing hours of debugging |

### PRs Needing Maintainer Attention

- **PR #88946** (steipete) — "Fix live model inference edge cases" — Size XL, flagged with merge-risk for compatibility, auth-provider, and session-state. This is a high-impact PR that touches critical paths.
- **PR #89157** (steipete) — "Document reusable helper contracts" — Size XL, ready for maintainer look. Documentation PRs of this size are often deprioritized but are essential for contributor onboarding.
- **PR #87072** (anagnorisis2peripeteia) — "Opt-in interleaved progress lane for Telegram" — Size XL, has proof supplied. This is a user-visible feature that improves Telegram UX.

### Recommendation

The project's **PR review backlog is the primary bottleneck**. With 396 open PRs and many flagged `needs-maintainer-review`, the project would benefit from either additional maintainer bandwidth or a more structured triage process to prioritize PRs that fix P1 regressions over new features.

---

*Data source: github.com/openclaw/openclaw — snapshot 2026-06-02. All links reference openclaw/openclaw issues and PRs.*

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: Personal AI Assistant & Agent Open-Source Ecosystem

**Date:** 2026-06-02 | **Analyst:** OWL, ZOO Company | **Projects Analyzed:** 15

---

## 1. Ecosystem Overview

The personal AI agent open-source ecosystem is experiencing explosive growth, with 15 tracked projects spanning the maturity spectrum—from hyperactive coordination platforms like OpenClaw (471 issues, 500 PRs daily) to dormant projects like TinyClaw (zero activity). The dominant theme across the ecosystem is a **post-capability race shift toward reliability engineering**: virtually every project is grappling with runtime resilience, session management correctness, and multi-channel delivery stability rather than racing to add new model providers. Multi-agent orchestration has emerged as the next frontier, with OpenClaw, Hermes, PicoClaw, and CoPaw all investing in collaboration infrastructure. Token cost optimization, once a niche concern, is now a first-class priority as users deploy agents at scale. The ecosystem is fragmenting into three tiers by activity and maturity: **production-grade platforms** shipping稳定 releases daily, **rapid-growth projects** stabilizing after major architectural overhauls, and **specialized/small projects** filling niche gaps in edge deployment, privacy, or platform-specific UX.

---

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Releases Today | Open Issues / PRs | Health Score* |
|---|---|---|---|---|---|
| **OpenClaw** | 471 updated | 500 updated | 3 betas (v2026.6.1-β1/2, v2026.5.31-β4) | 295 active / 396 open | ⚡ **A** (high volume, rapid beta cadence, but P1 regression cluster) |
| **Hermes Agent** | 50 updated | 50 updated | None (v0.15.1 stable) | — / 28 open | 🟢 **A-** (strong merge rate, 22 PRs closed, accumulating for next release) |
| **IronClaw** | 12 updated | 46 updated | None | 10+ open / 14 open | 🟡 **B+** (high PR throughput, but Reborn compaction audit cluster #4311–#4314 unresolved) |
| **CoPaw** | 50 updated | 35 updated | 2 (v1.1.10 stable + β2) | 32 open / 26 open | 🟢 **A-** (strong release cadence, AgentScope 2.0 migration in progress) |
| **NanoBot** | 28 updated | 30 updated | 1 major (v0.2.1, 84 PRs merged) | 13 open / 13 open | 🟢 **A** (cleanest issue resolution rate: 25 closed / 3 new) |
| **LobsterAI** | 1 new | 12 updated | 1 (v2026.6.1) | 1 open / ~4 stale | 🟢 **B+** (all code PRs closed same-day; billing UX issue open) |
| **ZeptoClaw** | 0 new issue | 18 updated | None | 1 open / 2 open | 🟢 **B** (17/18 PRs merged; CI/binary-size hardening phase) |
| **ZeroClaw** | 36 updated | 37 updated | None | 28 open / many open | 🟡 **B** (strong PR quality, but P1 security gap #7063 just reported, PostgreSQL crash unaddressed) |
| **PicoClaw** | 7 updated | 11 updated | 1 nightly | 4 open / 6 open | 🟡 **B** (5 PRs merged; guardCommand issue stale 3 months) |
| **NanoClaw** | 3 updated | 5 updated | None | 2 open / 4 open | 🟢 **B+** (small but focused; A2A routing bug fixed; compact critical bug) |
| **Moltis** | 0 updated | 4 updated | None | — / 1 open | 🟢 **B** (quiet but stable; NEAR AI + Codex reliability landed) |
| **NullClaw** | 0 updated | 1 updated (opened) | None | ~1 stale / 1 open | 🔴 **D** (near-zero activity; only 1 PR for Telegram typing indicator) |
| **TinyClaw** | 0 updated | 0 updated | None | — | 🔴 **F** (no activity whatsoever) |
| *(Others)* | — | — | — | — | — |

*\*Health Score considers: resilience of release cadence, P1/Security gap status, stale issue/PR ratio, maintainer responsiveness, and architectural trajectory.*

---

## 3. OpenClaw's Position

**Advantages vs. Peers:**

- **Unmatched activity scale**: OpenClaw's 500 PRs/471 issues in 24h dwarfs the next most active project (Hermes at 50 each). This is **10× the throughput** of any competitor, indicating either a dramatically larger contributor base or a fundamentally different development model (likely both: a large-org-backed project with many parallel workstreams).
- **Strongest multi-channel investment**: No other project matches OpenClaw's breadth of channel-specific reliability work across Telegram, WhatsApp, iMessage, Slack, Discord, and Feishu simultaneously. Three beta releases in one day all addressing channel delivery resilience is unmatched.
- **Architectural migration leadership**: The SQLite session migration (#88838) with its branch-by-abstraction approach is the most sophisticated storage modernization effort in the ecosystem. The transcript identity API (#89261, #89262) establishes a seam pattern that other projects will likely emulate.
- **Runtime QA maturity**: The Codex-vs-Pi parity QA harness (#80171, #80397) represents a level of engineering discipline not visible in other projects' public artifacts.

**Technical Approach Differences:**

| Dimension | OpenClaw | Closest Alternatives |
|---|---|---|
| **Session storage** | Migrating file → SQLite (incremental) | IronClaw: PostgreSQL (first-class). ZeroClaw: PostgreSQL (but crashing, #6472). Hermes: unspecified |
| **Compaction strategy** | Actively fixing via 5 PRs (#88129–#88182) | IronClaw: Reborn compaction cluster (#4309–#4314) represents parallel effort with ~6 open bugs. Nanoclaw: basic A2A routing fix |
| **Runtime architecture** | Multi-runtime (Codex + Pi + embedded_run) | Hermes: DAG/cron-centric with gateway pattern. IronClaw: Reborn host model with WASM capabilities |
| **Auth model** | Multi-provider OAuth (Gemini, Codex, OpenAI) | IronClaw: PKCE OAuth with GSuite/Notion muxed provider. CoPaw: AgentScope 2.0 migration |
| **Release cadence** | 3 betas/day (extreme) | NanoBot: major version every ~2 weeks. Hermes: accumulating. CoPaw: stable-beta pairs |

**Community Size Estimation:**

By raw activity, OpenClaw is **5–10× larger** than the next-most-active project. Its 396 open PRs represent a community contribution volume that would take NanoBot (30 PRs/day) **13 days to accumulate**. This scale is both an advantage (breadth of platform support, diverse contributions) and a risk (maintainer bandwidth bottleneck explicitly called out in Section 8 of OpenClaw's digest).

---

## 4. Shared Technical Focus Areas

The following requirements are emerging as **cross-project convergence themes**:

### 4.1 Runtime Resilience & Recovery
**Projects: OpenClaw, Hermes Agent, NanoClaw, Moltis, IronClaw**

| Need | Evidence |
|---|---|
| **Interrupted tool call recovery** | OpenClaw: 5 PRs (#88129–#88182). Moltis: persisted tool result capping (#1089). Hermes: silent Discord response drops (#29346 → #34336) |
| **Session state corruption resilience** | NanoClaw: transcript crash-loop (#2669). Hermes: malformed jobs.json crashes cron (#36867). IronClaw: compaction summary write outlives checkpoint (#4309) |
| **Provider failure isolation** | NanoClaw: provider failure recovery stack (#2666). ZeroClaw: Ollama session poisoning (#5962). Moltis: explicit provider capabilities (#1090) |

### 4.2 Token Cost Optimization at Scale
**Projects: ZeroClaw, PicoClaw, NanoBot, CoPaw**

- ZeroClaw: Skill compilation/minimization RFC (#5146, 👍1, 8 comments) — "why inject 400+ lines of prose on every call?"
- PicoClaw: Skill catalog XML no longer injected on intermediate turns (#2781) — direct token reduction
- NanoBot: Heartbeat LLM skip when no tasks (#2406, 3 PRs merged)
- CoPaw: Two-layer context window protection against oversized shell output (#4787)

**Shared insight**: Users hit cost walls not from model pricing but from **context bloat** — skill catalogs, conversation history, and tool outputs compound. The next battleground is context efficiency, not model selection.

### 4.3 Multi-Agent Orchestration
**Projects: Hermes Agent, OpenClaw, PicoClaw, CoPaw, NanoBot, IronClaw**

| Project | Investment |
|---|---|
| **Hermes** | Multi-role auto-routing via gateway hooks (#5146, 👍14), Kanban orchestration (#35986), cron delivery awareness (#37070) |
| **PicoClaw** | Agent Collaboration Bus with per-agent mailboxes (#2937) |
| **CoPaw** | SharedMCPPool for 300+ agents (#4849), spawn_subagent tool (#4806) |
| **NanoBot** | DingTalk group user isolation (#4016), silent cron delivery (#3126) |
| **IronClaw** | WASM capability dispatch with scoped context (#4304, #4306) |
| **OpenClaw** | Multi-agent performance (10-17s latency issue #80607), session-aware collaboration patterns |

### 4.4 Security Boundary Hardening
**Projects: ZeroClaw, Hermes Agent, PicoClaw, IronClaw, CoPaw**

- **Tool allowlist bypass**: ZeroClaw (#7063, channel-served agents skip `apply_policy_tool_filter`), PicoClaw (#1042 guardCommand false positives vs. sandboxing tension)
- **SSRF / DNS rebinding**: ZeroClaw (#6974, private DNS host allowlist)
- **WhatsApp LID bypass**: ZeroClaw (#650, `allowed-numbers` bypass for LID contacts)
- **OAuth/PKCE infrastructure**: Hermes (#35028), IronClaw (#4297 GSuite PKCE), ZeroClaw (#6979 credential fallback)

### 4.5 Session/Context Storage Modernization
**Projects: OpenClaw, IronClaw, ZeroClaw, NanoBot, NanoClaw**

A systemic pattern: every project that scaled beyond single-user, single-channel deployments hit the **file-based session storage wall**. The responses vary:
- OpenClaw → SQLite migration via accessor seam (#88838)
- IronClaw → PostgreSQL with budget tracking (#3899)
- NanoClaw → A2A session routing fix (#2331)
- NanoBot → Retention result refactor (#4143) and event bus decoupling (#4135)

---

## 5. Differentiation Analysis

### Feature Focus Matrix

| Project | Primary Focus | Secondary Focus | Unique Niche |
|---|---|---|---|
| **OpenClaw** | Multi-channel delivery reliability | Runtime resilience, storage migration | Scale/scope of channel coverage |
| **Hermes Agent** | Cron-driven automation + multi-agent orchestration | Search backend diversity, data durability | Deterministic workflow engine (RFC), Kanban patterns |
| **NanoBot** | WebUI-as-workbench | Chinese IM channels (Napcat QQ, DingTalk) | Consumer-friendly agent runtime; local Whisper transcription |
| **IronClaw** | Reborn architecture (WASM capabilities, stateless agents) | Multi-tenant OAuth, budget governance | TEE-aware, cloud-native from ground-up |
| **CoPaw** | Desktop IDE-like multi-agent UX | AgentScope 2.0 ecosystem, shared MCP infrastructure | Spawn subagent, Windows polish, conversation management |
| **ZeroClaw** | Security boundary correctness | Lean channel bundle, token-minimal skills | Agent eval harness, `.well-known` skill URI standards |
| **LobsterAI** | Kit/Expert Store ecosystem | Cowork conversation forking, Artifact reliability | Commercial product with subscription model (unique in set) |
| **PicoClaw** | Edge/embedded deployment | Agent collaboration, provider breadth | RISC-V support, low-resource targets (Sipeed/Mǎtóu) |
| **NanoClaw** | A2A (Agent-to-Agent) communication correctness | Container diversity (Podman/LXC) | Rootless/multi-user deployment focus |
| **Moltis** | Provider architecture rigor (explicit capabilities) | Decentralized AI (NEAR Cloud, TEE) | Privacy-by-design provider selection |
| **ZeptoClaw** | Binary size optimization, Rust-based efficiency | CI/security audit rigor | Sub-7MB binary target (hardware/IoT adjacent) |

### Target User Segments

| Segment | Best-Fit Projects |
|---|---|
| **Enterprise multi-channel deployments** | OpenClaw (breadth), Hermes (cron/automation), IronClaw (multi-tenant) |
| **Chinese-market IM integration** | NanoBot (QQ/DingTalk), LobsterAI (WeChat/Feishu/QQ), CoPaw (WeChat/Feishu) |
| **Privacy-first self-hosted** | Moltis (NEAR AI, TEE), ZeroClaw (lean bundle, security focus), NanoBot (local Whisper) |
| **Developer/power-user desktop** | CoPaw (IDE-like UX, conversation rollback), Hermes (deterministic workflows) |
| **Edge/embedded hardware** | PicoClaw (RISC-V, Sipeed), ZeptoClaw (Rust, <7MB binary) |
| **Production SaaS/team-scale** | IronClaw (Reborn stateless model, budgets), OpenClaw (scale), ZeroClaw (eval harness) |

### Technical Architecture Spectrum

```
Monolithic ←——————————————————————→ Modular/Plugin

LobsterAI    OpenClaw    CoPaw    Hermes    IronClaw    ZeroClaw    Moltis    ZeptoClaw
(Desktop     (Runtime    (Agent-   (Gateway   (WASM       (Plugin     (Provider  (Single
 agent)       platform)   Scope)     pattern)   capabilities) architecture) registry)  binary)
```

---

## 6. Community Momentum & Maturity

### Tier 1: Hyperactive Production Platforms
**OpenClaw, Hermes Agent, CoPaw** — Shipping multiple releases or betas per day, managing 50–500 concurrent PRs. These are the "industrial-grade" projects. OpenClaw leads in raw volume; Hermes leads in architectural ambition (deterministic workflows + multi-agent Kanban); CoPaw leads in user-facing polish (Desktop UX, Spawn Subagent).

### Tier 2: Rapid-Growth Stabilization
**NanoBot, IronClaw, ZeroClaw, PicoClaw, NanoClaw** — Fresh off major releases or architectural overhauls (NanoBot v0.2.1 with WebUI, IronClaw Reborn integration sprint, ZeroClaw lean channel bundle). All are in "land the plane" mode: high PR throughput but wrestling with regression clusters and audit findings. **NanoBot stands out** for having the cleanest 24h bug resolution rate (25 closed / 3 new).

### Tier 3: Maintenance & Niche Focus
**LobsterAI, Moltis, ZeptoClaw** — Active but narrow focus. LobsterAI is commercial (subscription model), so community activity is naturally lower. Moltis and ZeptoClaw are architecturally focused on specific differentiators (provider capabilities, binary size) rather than broad feature expansion.

### Tier 4: Stalled / Dormant
**NullClaw, TinyClaw** — Effectively inactive. NullClaw has 1 PR for a Telegram typing indicator; TinyClaw has zero activity. These may be pet projects or deprioritized forks.

### Maturity Trajectory

```
                    PRODUCTION READINESS →
                    
    TinyClaw ✕     NullClaw ○     ZeptoClaw ◐     PicoClaw ◐
                                            NanoClaw ◐     Moltis ◐
                                                    CoPaw ●     NanoBot ●
                                                            IronClaw ◉
                                                                    OpenClaw ◉
                                                                            Hermes ◉

    ✕ = dormant   ○ = minimal   ◐ = building   ● = stabilizing   ◉ = industrial
```

---

## 7. Trend Signals

### 7.1 The Reliability Reckoning
**Signal strength: 🔴 Strongest trend across all 15 projects**

The ecosystem has moved past the "can we build it?" phase into "can we keep it running?" This is the dominant signal. 13 of 15 active projects have today's work dominated by bug fixes, recovery paths, regression tests, or crash-loop prevention. Users no longer tolerate silent failures—they want **loud invariants** (Hermes #34336), **crash-loop protection** (NanoClaw #2670), and **automatic recovery** (OpenClaw media delivery retries).

**Implication**: The next competitive moat is **observability**, not capability breadth. Projects that invest in diagnostics, alerting, and self-healing (not just features) will win the production deployment vote.

### 7.2 Skills Are Becoming a First-Class Systems Problem
**Signal strength: 🟠 Strong across 8+ projects**

Skills started as Markdown prompt files. They are now a **token economics problem** (ZeroClaw #5146, PicoClaw #2781), a **security surface** (Hermes #37036 skills_guard false positives), and a **platform/API standard** (OpenClaw transcript identity API, NanoBot telemetry, ZeroClaw `.well-known` URI discussion). The projects that treat skills as a compile-time optimization target (not runtime prompt injection) will see 2–5× token cost reductions.

**Implication**: Expect a "skill compiler" pattern to emerge—distilling prose to minimal tool-call specifications at load time (NanoBot v0.3.0 may pioneer this via its provider registry work).

### 7.3 Multi-Agent Is No Longer Speculative
**Signal strength: 🟠 Strong across 6+ projects**

Multi-agent moved from RFC/architecture discussion to production feature in this quarter. CoPaw has SharedMCPPool for 300+ agents. Hermes has Kanban orchestration and cron delivery awareness. PicoClaw has a collaboration bus PR ready for merge. OpenClaw's multi-agent performance is a top-6 P1 issue. ZeroClaw's delegate-agent tool-filter bypass (#7063) is explicitly a multi-agent security gap.

**Implication**: The field will converge on a **shared multi-agent interoperability standard** within 12 months. Projects with protocol-level session routing (NanoClaw A2A fix) and capability-scoped contexts (IronClaw #4304) are laying groundwork.

### 7.4 Chinese IM Channels Are a Distinct Ecosystem Layer
**Signal strength: 🟡 Medium-strong, concentrated**

NanoBot (Napcat QQ, DingTalk), LobsterAI (WeChat, Feishu, QQ), CoPaw (WeChat, Feishu), IronClaw (Feishu websocket PR #4178), and OpenClaw (WeCom silent failures) all treat Chinese IM as a first-class platform. No Western-centric project (ZeptoClaw, Moltis, NullClaw) has any Chinese platform support. This is a **structural bifurcation** of the ecosystem, not a gap that will be filled by internationalization.

**Implication**: Developers targeting international markets should pick ZeptoClaw/Moltis/ZeroClaw. Developers targeting China should default to NanoBot or CoPaw as the integration base layer.

### 7.5 Privacy-Preserving & Decentralized AI Is Emerging
**Signal strength: 🟡 Medium, early-signal**

Moltis added NEAR AI Cloud with TEE-aware recommendations (#1031). IronClaw references stateless multi-tenant architecture targeting cloud-native deployments. Hermes users explicitly request Searxng (self-hosted search, #5941, 👍30). NanoBot added local Whisper transcription for offline use. OpenClaw's SQLite migration reduces cloud dependency for session storage.

**Implication**: Expect "sovereign AI agent" to become a distinct product category within 12–18 months, driven by enterprise data-residency requirements and individual privacy demand. Projects already architecting for this (Moltis, IronClaw, NanoBot offline features) have a first-mover advantage.

### 7.6 Rust Is Re-entering the Agent Runtime Conversation
**Signal strength: 🟡 Medium, infrastructure-signal**

ZeptoClaw's entire project is Rust-based with explicit binary size budgets (7MB target). IronClaw's Reborn trigger poller and capability infrastructure is Rust (WASM dispatch). These are the only two Rust-native projects in the cohort, but both are investing in **resource efficiency** (binary size, memory safety, WASM sandboxing) where TypeScript/Cross-language stacks carry inherent runtime overhead.

**Implication**: For hardware-adjacent deployments (IoT edge, browser extensions, WASM plugins), Rust-native agent runtimes will carve out a growing niche. ZeptoClaw's sub-7MB binary target is a bellwedge for this trend.

### 7.7 Desktop/IDE-Like Interaction Models Are Rising
**Signal strength: 🟡 Medium, UX-signal**

CoPaw (#4789 conversation rollback/delete, "like Trae IDE") and LobsterAI (Cowork conversation forking #2085) both signal a shift from "chat with your agent" to **"collaborate with your agent in an IDE-like workspace."** NanoBot's WebUI-as-workbench (#4135) reinforces this. Users want branching conversations, granular rollback, file-level context management, and visual workspace metaphors—not linear chat.

**Implication**: The next generation of agent interfaces will look more like **IDEs than chat apps**. Projects investing in desktop UX (CoPaw, LobsterAI) and structured workspace concepts (NanoBot) are positioning for this shift.

---

### Key Takeaways for AI Agent Developers

1. **For production deployments today**: OpenClaw (multi-channel reliability), Hermes (automation/cron), or CoPaw (desktop/multi-agent) — but budget for managing regression risk.
2. **For new projects entering the space**: Differentiate on observability/diagnostics rather than features—that's the unsolved gap. A project that makes agent failures *visible and debuggable* would fill a clear need.
3. **For architectural planning**: Plan for multi-agent from day one. Session routing, capability scoping, and tool policy enforcement must be designed for multi-agent contexts (ZeroClaw's #7063 is a cautionary tale of bolt-on agent support creating security gaps).
4. **For token economics**: Skill compilation/minimization is the highest-ROI optimization available. A skill system that only injects what the selected skill needs could cut costs 60–80% for multi-skill deployments.
5. **For hardware/edge targets**: PicoClaw (ML-compatible SBCs) and ZeptoClaw (Rust, <7MB) are the only projects addressing resource-constrained deployment—a genuinely underserved niche.

---

*Report generated by OWL — ZOO Company | Data snapshot: 2026-06-02 | Sources: Individual project digests from github.com/openclaw/openclaw, github.com/HKUDS/nanobot, github.com/nousresearch/hermes-agent, github.com/sipeed/picoclaw, github.com/qwibitai/nanoclaw, github.com/nullclaw/nullclaw, github.com/nearai/ironclaw, github.com/netease-youdao/LobsterAI, github.com/TinyAGI/tinyagi, github.com/moltis-org/moltis, github.com/agentscope-ai/CoPaw, github.com/qhkm/zeptoclaw, github.com/zeroclaw-labs/zeroclaw*

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-06-02

---

## 1. Today's Overview

NanoBot enters June with strong forward momentum. A major milestone release **v0.2.1** shipped overnight (84 PRs merged, 17 new contributors), centering on a greatly matured WebUI that is now the primary workspace surface. Activity remains intense: 30 PRs and 28 issues moved in the last 24 hours, with healthy resolution rates (17 PRs closed/merged, 25 issues closed). Three new issues and thirteen new PRs remain open, signaling active but manageable churn. The project is in a feature-shipping phase, with the community layering on channel expansions (Napcat QQ, Volcengine search), reliability fixes, and platform-deployment features on top of the v0.2.x foundation.

---

## 2. Releases

### v0.2.1 — "The Agent Got a Real Workbench"

- **84 PRs merged, 17 new contributors**
- **WebUI overhaul** is the headline: the chat surface is smoother, faster, and more trustworthy. Live file edits now surface as activity traces; tool call traces render inline with the conversation.
- The release positions the WebUI not just as a chat window but as the place where work actually happens — replacing terminal-first workflows for many users.
- No breaking changes or migration notes are called out in the release copy.

---

## 3. Project Progress (Merged / Closed Today)

| PR | Summary |
|---|---|
| [#4135](https://github.com/HKUDS/nanobot/pull/4135) | **WebUI runtime state refactored onto event bus** — decouples goal/turn/model state publishing from the WebUI via a typed `RuntimeEventPublisher` and `WebuiTurnCoordinator` subscribers. Improves maintainability of the new WebUI-centric architecture. |
| [#4143](https://github.com/HKUDS/nanobot/pull/4143) | **Session retention result refactored** into a named `RetentionResult` (closed issue [#4136](https://github.com/HKUDS/nanobot/issues/4136)). Clarifies the contract between retention, archive, and consolidation — critical groundwork for context-window management. |
| [#3509](https://github.com/HKUDS/nanobot/pull/3509) | **Napcat QQ channel merged** — OneBot v11 Forward WebSocket support for private/group QQ chats, with image sending, group reply policies, and welcome notifications. Backported as [#4146](https://github.com/HKUDS/nanobot/pull/4146) to main. |
| [#3723](https://github.com/HKUDS/nanobot/pull/3723) | **Local Whisper transcription** via `faster-whisper` — C++/ONNX reimplementation, no API key or network needed. Addresses privacy-conscious users and offline deployments. |
| [#4016](https://github.com/HKUDS/nanobot/pull/4016) | **DingTalk group user isolation** — new `group_user_isolation` config gives each user an independent session key within group chats, preventing context crosstalk. |
| [#3126](https://github.com/HKUDS/nanobot/pull/3126) | **Silent cron runs** — progress/tool-hint output suppressed for `deliver: false` cron jobs, fixing noisy scheduled tasks (addressed [#3064](https://github.com/HKUDS/nanobot/issues/3064)). |
| [#4124](https://github.com/HKUDS/nanobot/pull/4124) | **XML tool-call handling for mimo/glm models** — prevents raw XML from leaking into chat channels when OpenAI-compatible models emit tool calls as text instead of structured `tool_calls`. |
| [#2415](https://github.com/HKUDS/nanobot/pull/2415) / [#2435](https://github.com/HKUDS/nanobot/pull/2435) / [#2482](https://github.com/HKUDS/nanobot/pull/2482) | **Heartbeat LLM skip** — three parallel PRs all landed to optimize heartbeat by skipping the LLM call when `HEARTBEAT.md` has no active tasks (addresses [#2406](https://github.com/HKUDS/nanobot/issues/2406)). |

**Thematic signal**: The codebase is undergoing a deep architectural shift — the WebUI event bus refactor, session retention semantics, and silent cron delivery all point to the project maturing from a "chatbot harness" into a structured agent runtime with reliable delivery guarantees.

---

## 4. Community Hot Topics

### Most Commented / Reactive Issues (24h window)

| Issue | 👍 | Comments | Theme |
|---|---|---|---|
| [#2880](https://github.com/HKUDS/nanobot/issues/2880) — Agent mode returns errors on every message | — | 18 | **Reliability** |
| [#1932](https://github.com/HKUDS/nanobot/issues/1932) — Skills cannot be disabled, only deleted | — | 8 | Config usability |
| [#101](https://github.com/HKUDS/nanobot/issues/101) — Support free APIs (Google, Grok) as defaults | — | 6 | Cost reduction |
| [#3028](https://github.com/HKUDS/nanobot/issues/3028) — Heartbeat creates duplicate scheduled tasks | — | 4 | Cron/heartbeat correctness |
| [#1536](https://github.com/HKUDS/nanobot/issues/1536) — MCP retry logic on connection drop | 3 | 4 | Resilience |

### Analysis of Underlying Needs

- **Agent-mode reliability is the #1 pain point**. Issue #2880 (18 comments) reports total failure in non-agent ("agent" binary) mode — a fundamental regression that blocks entire user segments. The fact that it persisted from April through June before closure (likely superseded by v0.2.1) suggests it was a deep configuration or model-provider routing bug.
- **Skills are too rigid**. Multiple users want enable/disable toggles (#1932) and dynamic tool loading (#118). As the skill library grows, binary all-or-nothing activation is becoming a real UX friction.
- **Cost sensitivity is rising**. Requests for free API tiers (#101), heartbeat LLM skip (#2406), and cache-miss token optimization (open discussion #4142) show the community is price-aware — especially as users deploy to channels where message volume is high.
- **IM platform parity**. The Napcat QQ merger, DingTalk user isolation, and multiple channel requests (Signal #49, WebSocket server #2819) confirm that non-Telegram channels are a major adoption driver, especially in China and enterprise settings.

---

## 5. Bugs & Stability

| Severity | Issue / Bug | Status | Fix PR? |
|---|---|---|---|
| 🔴 Critical | [#2880](https://github.com/HKUDS/nanobot/issues/2880) — Any message returns error in agent mode (18 reports, persisted 2+ months) | **Closed** (June 1, likely resolved in v0.2.1) | Presumably fixed in release |
| 🔴 Critical | [#4133](https://github.com/HKUDS/nanobot/issues/4133) — Agent response silently fails to deliver after tool calls on Telegram | **Closed** | May relate to #4124 (fix landed same day) |
| 🟠 High | [#4128](https://github.com/HKUDS/nanobot/issues/4128) — `retain_recent_legal_suffix` duplicates user messages between archive and kept sets | **Closed** | [#4129](https://github.com/HKUDS/nanobot/pull/4129) merged; follow-up refactor [#4143](https://github.com/HKUDS/nanobot/pull/4143) |
| 🟠 High | [#3028](https://github.com/HKUDS/nanobot/issues/3028) — Heartbeat creates redundant scheduled tasks | **Closed** | Silent cron fix [#3126](https://github.com/HKUDS/nanobot/pull/3126) merged |
| 🟡 Medium | [#3633](https://github.com/HKUDS/nanobot/issues/3633) — "Duplicate item found with id" error when using GPT-5.5 (Codex) | **Closed** | Upstream provider issue |
| 🟡 Medium | [#4069](https://github.com/HKUDS/nanobot/issues/4069) — Dream cron job registered without enabled/memory-mode gate | **Closed** | Governance/config fix |
| 🟡 Medium | [#1536](https://github.com/HKUDS/nanobot/issues/1536) — No MCP reconnection retry logic | **Closed** (June 1) | Likely addressed in release |
| 🟢 Low | [#2071](https://github.com/HKUDS/nanobot/issues/2071) — DuckDuckGo web search default not recognized | **Closed** | — |
| 🟢 Low | [#1350](https://github.com/HKUDS/nanobot/issues/1350) — `send_progress`/`send_tool_hints` ignored in gateway mode | **Closed** | Loop.py fix |

**Stability snapshot**: The bug resolution rate is high — nearly every reported issue from the last 24h closed same-day. The silent delivery failure (#4133) is the most concerning because it could recur if the root cause isn't in #4124's fix scope. The session duplication bug (#4128) and its rapid fix → refactor cycle is a positive signal about code review quality.

---

## 6. Feature Requests & Roadmap Signals

### Open PRs Likely to Land in v0.2.2 / v0.3.0

| PR | Description | Confidence |
|---|---|---|
| [#4148](https://github.com/HKUDS/nanobot/pull/4148) | **Inline edit button for sent messages in WebUI** — aligns with v0.2.1's WebUI-first narrative | High |
| [#4139](https://github.com/HKUDS/nanobot/pull/4139) | **Cloud platform deployment layer** (HF Spaces, ModelScope) — 9 files, +851 lines, zero dependency | Medium-High |
| [#4141](https://github.com/HKUDS/nanobot/pull/4141) | **Volcengine web search provider** — fills a provider gap in the Chinese market | High |
| [#4138](https://github.com/HKUDS/nanobot/pull/4138) | **`tools.file.enable` toggle** — parity with `tools.exec.enable` / `tools.web.enable`; critical for MCP-only deployments | High |
| [#4126](https://github.com/HKUDS/nanobot/pull/4126) | **Azure AAD auth for OpenAI provider** — enterprise identity, no API key | Medium |
| [#4122](https://github.com/HKUDS/nanobot/pull/4122) | **WebUI voice recording + local ASR transcription** (FunASR) | Medium |
| [#4145](https://github.com/HKUDS/nanobot/pull/4145) | **Weather skill** (example skill with tests) | High |

### Open Discussion / Feature Issues

- [#4132](https://github.com/HKUDS/nanobot/issues/4132) — Custom image generation provider (e.g., Agnes AI): The `generate_image` tool is hardcoded to built-in providers. A plugin/registry pattern would unblock this.
- [#4142](https://github.com/HKUDS/nanobot/issues/4142) — Cache-miss input token optimization: Open discussion about provider-specific cost reduction (relevant for DeepSeek v4 Flash/Pro). Could lead to prompt-caching strategy configuration.

**Next-version prediction**: v0.2.2 will likely be a polish release — WebUI message editing, cloud deployment support, file-tool toggles, and the Volcengine search provider. v0.3.0 will expand on the provider registry (custom image gen, AAD auth) and multimodal input (voice recording).

---

## 7. User Feedback Summary

### Recurring Pain Points

1. **Agent-mode fragility** — Multiple users report total agent failure (#2880), silent delivery drops (#4133), and cron reminders not arriving (#2601). The agent runtime's reliability on real channels (especially Telegram) remains the top concern.
2. **Skills are hard to manage** — No enable/disable toggle (#1932), no conditional loading (#118). Users treat skills as plugins, not core tools.
3. **No status visibility** — Users stuck on mobile-only channels cannot check if the bot is busy (#2131). A `/status` command or activity indicator in the WebUI is requested.
4. **Heartbeat and cron are confusing conceptually** — Heartbeat spawning duplicate cron tasks (#3028), cron sending thinking messages (#3064), and the Dream job missing an enabled gate (#4069) all indicate the task/motivation subsystem needs a unified design.
5. **Platform-specific config is error-prone** — WhatsApp `allowFrom` format mismatch (#115), media path not nesting under workspace (#1862).

### Positive Sentiment Indicators

- v0.2.1's release note signals a genuine step change — the WebUI is now a "real workbench," not a glorified terminal.
- 17 new contributors in one release is a strong community health signal.
- Active community-sourced PRs for Chinese IM platforms (Napcat QQ, DingTalk isolation) show organic regional adoption.

### Satisfaction Trajectory

The project appears to be transitioning from "early adopter tool" to "production-ready agent runtime." The burst of stability-focused PRs (silent cron, session dedup, XML tool-call cleanup) alongside the WebUI investment suggests the maintainers are hearing feedback. The gap: enterprise observability (status commands, silent failures) and channel-specific polish still lag behind core capability.

---

## 8. Backlog Watch

### Long-Unanswered Issues Needing Attention

| Issue | Age | Risk | Why It Matters |
|---|---|---|---|
| [#2601](https://github.com/HKUDS/nanobot/issues/2601) — Cron reminders not delivered in agent mode | 64 days (Mar 29 → Jun 1 closed) | Medium | Core reliability; closed only after 2+ months |
| [#3028](https://github.com/HKUDS/nanobot/issues/3028) — Heartbeat creates duplicate scheduled tasks | 52 days (Apr 11 → Jun 1 closed) | Medium | Semantic confusion between heartbeat and cron; silent cron fix (#3126) may or may not fully resolve |
| [#2406](https://github.com/HKUDS/nanobot/issues/2406) — Skip heartbeat LLM when no tasks | 70 days (Mar 23 → Jun 1 closed) | Low | Three PRs merged to address it — good resolution, but took 10 weeks |

### PRs Aging Without Review

The PR list doesn't show obvious stale PRs in the top-20 by activity, but the presence of **both** `[closed]` and `[open]` variants of the Napcat QQ PR (#3509 closed, #4146 open) suggests branch-sync friction. Maintainers should confirm #4146 against current main before merge to avoid regressions.

### Watch Item: #4136 (→ #4143)

The [session retention refactor](https://github.com/HKUDS/nanobot/issues/4136) flagged an API smell in how retention results were communicated between `Session` and downstream callers. The fix (#4143) landed same-day, which is excellent — but the semantic complexity (archive skip count, consolidation cursor, dropped vs. kept messages) makes this a regression-prone area. Recommend thorough integration testing before v0.2.2 freeze.

---

*Data window: ~24h ending 2026-06-02. Generated from 28 issues and 30 PRs. All links reference `github.com/HKUDS/nanobot`.*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-06-02

---

## 1. Today's Overview

Hermes Agent remains in a period of sustained, high-intensity community engagement, though no new release has landed today (v0.15.1 is the current release). In the past 24 hours, **50 issues** (39 open, 11 closed) and **50 pull requests** (28 open, 22 merged/closed) were updated, indicating a highly active contributor base and a substantial merge cadence from maintainers. Activity is concentrated in the gateway, agent core, and cron subsystems, with several reliability fixes reaching closure. The project is absorbing a large volume of new platform integrations, search backend requests, and multi-agent orchestration proposals—signaling that Hermes is maturing from an individual assistant framework into a multi-platform, multi-agent platform, but is contending with growing complexity in gateway reliability and agent session management.

---

## 2. Releases

**No new releases today.** The project is still shipping on the v0.15.x line. The high PR merge rate (22 closed/merged in 24h) suggests a release candidate may be accumulating significant changes for the next minor version.

---

## 3. Project Progress

Merged/closed PRs in the past 24 hours deliver meaningful reliability and correctness improvements:

| PR | Area | Impact |
|---|---|---|
| **#35028** [CLOSED] [agent] fix(agent): resolve agent cwd from TERMINAL_CWD via one reader | Agent core, cron, Telegram | **Closes #24882, #24969, #27383** — Unifies working directory resolution so the agent reports and operates in the correct configured directory instead of the daemon install path. This was a long-standing correctness issue affecting gateway, cron, and Telegram sessions. |
| **#34336** [CLOSED] [gateway] fix(gateway): close silent response loss after agent tool calls | Gateway, Discord | **Closes #29346** — Fixes a severe gateway bug where tool-using turns produced a correct final answer that the user never received. Adds a loud invariant alert so non-empty responses that fail to send are surfaced rather than silently dropped. |
| **#35117** [CLOSED] [gateway/wecom] fix(weixin): asyncio.wait_for timeout bug + regression tests | Gateway, WeCom | Carries @caojiguang's production Weixin asyncio-timeout fix with a full regression suite. Clusters related timeout issues for WeCom platform stability. |
| **#37088** [CLOSED] [codex] fix(codex): recover from Responses SDK parser crash on null response.output | Codex backend | Prevents a `TypeError` crash when the OpenAI Responses SDK receives a `None` output—improves resilience of the Codex integration. |
| **#37085** [CLOSED] [dashboard] fix(dashboard): surface Docker update guidance instead of generic failure | Dashboard, Docker | **Closes #34347** — Frontend companion to prior backend guard. Docker-container users now see actionable guidance instead of a raw `SystemExit` on the Update button. |
| **#35988** [CLOSED] [plugins/memory] fix: honcho_conclude silently failing with missing workspace_id | Honcho memory plugin | Fixes silent `honcho_conclude` failures caused by a missing workspace_id in session manager write paths. |
| **#35606** [CLOSED] [gateway/bluebubbles] feat(bluebubbles): support group mention gating | BlueBubbles/iMessage | Adds optional `require_mention` for group chats, bringing BlueBubbles in line with 8 other platforms that already support mention gating. |

**Cumulative signal:** The project is closing out a cluster of gateway correctness bugs (silent response drops, working directory mismatches) while steadily expanding platform coverage. The closure of three long-standing working-directory issues (#24882, #24969, #27383) via a single unified fix (#35028) is a notable quality win.

---

## 4. Community Hot Topics

The most discussed issues (by comment count and 👍 reactions) reveal clear community priorities:

### Top by 👍 Reactions

| Issue | Topic | 👍 | Underlying Need |
|---|---|---|---|
| **#5941** — [Feature] Add Searxng as a default web search provider | Self-hosted search backend | **30** | Users want a non-managed, cost-free, privacy-preserving alternative to Firecrawl/Tavily. Self-hosted search is essential for privacy-conscious and budget-limited deployments. |
| **#10644** — [Feature] Add Brave Search as a native web search backend | Cost-effective search | **23** | Free tier + better pricing than alternatives. Multiple search backend requests suggest the community is dissatisfied with current provider lock-in and wants plug-and-play swappability. |
| **#12238** — [Feature] Built-in automatic backup & version control for agent data | Data durability | **13** | Users fear losing memories, skills, and learned state. As Hermes agents accumulate experience, the need for built-in backup/versioning becomes critical—currently users must DIY this. |
| **#5143** — [Feature] Multi-Role Auto-Routing via Gateway Hooks | Multi-agent routing | **14** | A reworked v2 proposal for the v0.14.0 architecture. The community wants a contextual classifier approach to route messages to the right agent with misroute recovery. This is a demand for better multi-agent orchestration at the gateway level. |
| **#5354** — [Feature] Deterministic Workflow Engine (Lobster-style) | Deterministic automation | **8** | Users want to reduce token costs and latency for repetitive/critical tasks by moving away from LLM re-planning every step. Points to demand for a hybrid approach: LLM for complex reasoning, deterministic engine for routine workflows. |

### Top by Comment Activity

| Issue | Topic | Comments |
|---|---|---|
| **#5354** — Deterministic Workflow Engine | 7 | — |
| **#11312** [CLOSED] — Gateway working directory config not respected | 6 | (Fixed via related PR efforts) |
| **#5143** — Multi-Role Auto-Routing via Gateway Hooks | 5 | — |
| **#10644** — Brave Search backend | 5 | — |
| **#5941** — Searxng search provider | 5 | — |
| **#13484** — Native Google Cloud Vertex AI provider | 5 | — |

**Analysis:** The strongest community signals are around (1) **search backend diversity** (Searxng @ 👍30, Brave @ 👍23)—users are cost- and privacy-sensitive; (2) **data durability** for agent state (@ 👍13)—as agents become more valuable, users need guarantees; (3) **multi-agent orchestration** (auto-routing, Kanban reliability)—deployments are scaling from single-agent to multi-agent patterns.

---

## 5. Bugs & Stability

### New or Active High-Severity Bugs

| Severity | Issue | Description | Fix PR |
|---|---|---|---|
| **P1** | **#36867** — [P1] `load_jobs()` raises uncaught `AttributeError` on non-dict jobs.json | Corrupt or malformed `cron/jobs.json` (e.g., bare array) crashes the **entire cron subsystem**, since all cron code paths go through `load_jobs()`. | ⚠️ No fix PR yet |
| **P1** | **#29346** — [P1] Discord tool-using responses silently dropped | Non-empty responses after `response ready` log never sent to user. **Fixed.** | ✅ **#34336** (merged) |
| **P2** | **#19776** — [P2] Discord gateway connect timeout too short when slash command sync >30s | Fixed 30s timeout kills connect during slow slash-command registration. | ⚠️ No fix PR yet |
| **P2** | **#29711** — [P2] Discord mixed attachments send non-image data URLs as `input_image` | Produces HTTP 400 Responses API errors when documents are included alongside images in Discord messages. | ⚠️ No fix PR yet |
| **P2** | **#35703** [CLOSED] — MCP server tools missing from api_server platform agent | MCP tools available on Slack/CLI but not through `POST /v1/chat/completions`. Likely fixed in current cycle. | ✅ Closed |
| **Bug** | **#37036** — skills_guard false-positive blocks `mksglu/context-mode` (12 false DANGEROUS findings) | Security scan blocks a community skill due to instructional prose being flagged. Could deter community skill contributions. | ⚠️ No fix PR yet |
| **Bug** | **#37070** — Agent has no awareness of cron job deliveries | Cron output delivered to chat is invisible to the interactive agent on the next turn, creating a reasoning gap. | ✅ **#37073** (open PR), **#37071** (open PR) |

### Regression Watch

Several PRs explicitly address regressions or recurrent pain points:
- **#37090** (open) tracks local runtime reliability customizations that must be preserved across safe-update flows.
- **#35028** fixes a regression where `hermes update` overwrites working directory configs (concern raised in **#11312**).

---

## 6. Feature Requests & Roadmap Signals

### Likely Candidates for Next Version (based on PR momentum and community demand)

| Feature | Issue | Signal Strength | Rationale |
|---|---|---|---|
| **Cron delivery awareness** | #37070 | 🔴 High | Two open PRs (#37073, #37071) directly addressing this. Strong user need + active dev. |
| **Service tier support (flex/priority)** | #12700 | 🟡 Medium | PR #37059 is open, adding `service_tier` for Gemini + fixing OpenRouter tier resolution. Directly reduces costs for cron/background jobs. |
| **Brave Search backend** | #10644 | 🟡 High demand (👍23) | No open PR yet, but highest community interest. Strong candidate if a contributor picks it up. |
| **Searxng search backend** | #5941 | 🟡 High demand (👍30) | No open PR yet. Different user segment from Brave (self-hosted vs. managed). |
| **xAI video model routing** | n/a | 🟢 In progress | PR #37089 open, fixing text-to-video vs. image-to-video model selection for the 1.5-preview model. |
| **Per-channel slash command allowlists** | #37072 (from issue #37004) | 🟡 Medium | Security/access control feature for group chats (use case: Signal groups). |
| **Multi-profile shared memory store** | #31388 | 🟡 Medium | RFC stage. Important for multi-profile deployments. |
| **Google Cloud Vertex AI provider** | #13484 | 🟡 Medium | 👍10, authentication machinery gap identified. No open PR. |

**Features unlikely in *next* version but architecturally significant:**
- **Deterministic Workflow Engine** (#5354, 👍8) — Large design discussion, no PR in sight. Architectural shift.
- **Dashboard auth propagation to agent sessions** (#35408) — Requires plumbing authenticated user identity through the session stack.
- **NAIV Google Meet realtime voice plugin** (#36903) — Nova-internal scoped, not broadly generalizable.

---

## 7. User Feedback Summary

### Pain Points
- **Gateway reliability on Discord** remains a recurring frustration: silent response drops (#29346, now fixed), connect timeouts during large slash-command sync (#19776), non-image attachment handling (#29711). Users deploying Hermes as a Discord bot encounter multiple rough edges.
- **Working directory confusion** has been a persistent issue across platforms (Telegram, cron, gateway). Users expect `terminal.cwd` to be respected everywhere; it wasn't. **Now resolved** via #35028.
- **Cron subsystem fragility**: A single malformed `jobs.json` can take down *all* cron functionality (#36867). Users running scheduled workloads need graceful degradation.
- **Cron output opacity**: The agent cannot reason about its own scheduled outputs (#37070). This undermines users who build cron-driven workflows expecting the agent to have continuity of awareness.
- **Skills_guard false positives** (#37036) risk alienating community skill contributors. If legitimate community skills are blocked, the ecosystem effect is reduced.
- **MCP tools unavailable via REST API** (#35703, now closed) — Users who access Hermes programmatically via `POST /v1/chat/completions` had a different tool surface than interactive users, creating inconsistent behavior.

### Satisfaction Signals
- The closure of the silent-discord-response-drop bug (a very visible, user-impacting issue) and the unified working-directory fix should generate meaningful goodwill.
- The search backend diversity requests (Searxng @ 👍30, Brave @ 👍23) indicate users *want* to extend and customize Hermes—a sign of a healthy plugin ecosystem demand.
- The multi-agent orchestration discussion (auto-routing #5143, Kanban #35986) shows advanced users are pushing Hermes into team-scale deployments, validating the project's direction.

### Use Cases Emerging
- **Cron-driven automation + multi-agent Kanban orchestration**: Users are building serious multi-step, multi-agent workflows that require reliability guarantees.
- **Privacy-first self-hosted deployments**: Searxng and Vertex AI requests signal users who want to run Hermes in self-contained infrastructure.
- **Group chat access control**: Per-channel slash command allowlists and mention gating requests reflect real deployment in Signal/Discord group environments where bots must be restricted.

---

## 8. Backlog Watch

### Issues Needing Maintainer Attention

| Issue | Age | Description | Why It Matters |
|---|---|---|---|
| **#9220** — WhatsApp `/sethome` doesn't persist across restarts | ~50 days old | Home channel configuration lost on restart. No response. | Affects WhatsApp users' basic UX. Low activity but fundamental bug. |
| **#36867** — P1: `load_jobs()` crashes cron subsystem on bad JSON | **Reported today** | Entire cron system taken down by malformed config. | P1 severity, no fix PR, affects all cron users. Needs triage. |
| **#19776** — Discord connect timeout too short | ~29 days old | Slash command sync timeouts on slow startups. No fix PR. | Blocks Hermes deployment for users with large command sets. |
| **#37036** — skills_guard false positives | **Reported today** | Community skills blocked by security scan. | Could suppress community contributions if not addressed. |
| **#31388** — RFC: Multi-profile shared memory store | ~9 days old | Design discussion for multi-profile memory. Low traction (0 👍, 3 comments). | Important architectural discussion for multi-profile users. Needs maintainer engagement to validate direction. |
| **#35986** — Kanban orchestration gaps (umbrella issue) | ~2 days old | Maps landscape of reliability gaps in multi-agent Kanban. Early stage but signals growing complexity. | As users adopt multi-agent patterns, this umbrella will collect actionable sub-issues. |

---

*Digest compiled from GitHub data as of 2026-06-02. For real-time updates, visit [github.com/nousresearch/hermes-agent](https://github.com/nousresearch/hermes-agent).*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-06-02

---

## 1. Today's Overview

PicoClaw shows **high activity** today with 18 total updates (7 issues, 11 PRs) and a nightly release (`v0.2.9-nightly.20260601.ba806592`). The project is in active development — the `v0.2.9`→`main` branch divergence is accumulating changes. A healthy 5 of 11 PRs were merged/closed today, indicating good maintainer throughput. The issue queue skews toward bugs and stability (4 of 7 issues are bug reports), with several stale items suggesting attention gaps. The contributor community is broad and global, submitting across provider integrations, agent tooling, and core stability fixes.

---

## 2. Releases

- **Nightly**: `v0.2.9-nightly.20260601.ba806592`
  - Automated nightly build for the `main` branch tip.
  - **⚠️ Warning**: These are automated and potentially unstable.
  - **Changelog diff**: [`v0.2.9...main`](https://github.com/sipeed/picoclaw/compare/v0.2.9...main)

No stable/pinned release today.

---

## 3. Project Progress

### Merged / Closed PRs (5)

| # | PR | Summary |
|---|---|---|
| [#2977](https://github.com/sipeed/picoclaw/pull/2977) | `feat(cron): add get and update actions to cron tool` | Agents can now inspect and partially update cron jobs, removing the need for `remove → recreate` rescheduling flows. |
| [#2982](https://github.com/sipeed/picoclaw/pull/2982) | `fix(bedrock): drop temperature for models that deprecate it (Opus 4.8)` | Fixes a hard failure path for Claude Opus 4.8 on AWS Bedrock by omitting `temperature` parameter. |
| [#2781](https://github.com/sipeed/picoclaw/pull/2781) | `perf: reduce skill catalog token usage on tool iterations and subsequent turns` | The skill catalog XML is no longer injected on every intermediate LLM request — significant token reduction for multi-turn sessions. |
| [#2890](https://github.com/sipeed/picoclaw/pull/2890) | `fix: resolve symlinks in cwdPath on macOS` | macOS path validation failure resolved (symlink `/var` → `/private/var` mismatch). |
| [#2893](https://github.com/sipeed/picoclaw/pull/2893) | `feat: add Server酱³ Bot (SC3Bot) channel support` | New Chinese-market notification channel with polling + webhook modes. |

### Notable Open PRs awaiting merge

| # | PR | Summary |
|---|---|---|
| [#2983](https://github.com/sipeed/picoclaw/pull/2983) | `fix(agent): retry empty LLM response` | Addresses silent agent stalls when OpenAI-compatible providers return HTTP 200 with `content: null`. |
| [#2937](https://github.com/sipeed/picoclaw/pull/2937) | `Feat/agent collaboration` | Major feature: Agent Collaboration Bus with per-agent mailboxes and collaboration threads. |
| [#2917](https://github.com/sipeed/picoclaw/pull/2917) | `feat(provider): add NEAR AI Cloud provider` | New LLM provider using `nearai` protocol, TEE-capable, with catalog fetch. |

---

## 4. Community Hot Topics

### Most Discussed Issues

| Issue | Comments | 👍 | Why It's Hot |
|---|---|---|---|
| [#1042](https://github.com/sipeed/picoclaw/issues/1042) — `exec`工具 `guardCommand` 误拦截无路径命令 | 15 | **2** | Core sandboxing falsely blocks read-only API commands (e.g., `curl -s "wttr.in/Beijing?T"` → matched as path `../../../../Beijing?T`). Users calling external weather/tools APIs get blocked. **Root cause**: regex is too greedy on URL-like strings. |
| [#2887](https://github.com/sipeed/picoclaw/issues/2887) — `.deb` RISC-V not functional with OpenAI model | 8 | 0 | Cross-compilation / architecture compatibility concern. Suggests PicoClaw's RISC-V `.deb` build has a regression or missing runtime dependency. |
| [#2720](https://github.com/sipeed/picoclaw/issues/2720) — Singleton PID check doesn't verify process identity | 7 | 0 | **High priority** — gateway crash-loop when PID gets reassigned to unrelated processes. Real reliability issue in production deployments. |

### Underlying Needs Analysis

- **Safety vs. usability tension**: Issue [#1042](https://github.com/sipeed/picoclaw/issues/1042) (open since March) highlights a fundamental conflict — users want security sandboxing but **not at the cost of blocking legitimate tool calls**. The community is asking for a smarter sandbox policy.
- **Multi-architecture support**: [#2887](https://github.com/sipeed/picoclaw/issues/2887) signals growing interest in RISC-V edge deployment, but current release engineering may not fully cover it.
- **Process management robustness**: [#2720](https://github.com/sipeed/picoclaw/issues/2720) is a real-world production issue that affects anyone on systems with aggressive PID reuse.

---

## 5. Bugs & Stability

| Severity | Issue | Summary | Fix PR Available? |
|---|---|---|---|
| 🔴 **High** | [#2720](https://github.com/sipeed/picoclaw/issues/2720) | Singleton PID loop causes crash loop | ✅ Open: [#2813](https://github.com/sipeed/picoclaw/pull/2813) (verification of gateway identity) |
| 🔴 **High** | [#2887](https://github.com/sipeed/picoclaw/issues/2887) | `.deb` on RISC-V non-functional with OpenAI | ❌ No fix tracked yet |
| 🟡 **Medium** | [#1042](https://github.com/sipeed/picoclaw/issues/1042) | `guardCommand` falsely blocks non-path commands | ❌ Open since March, stale, no PR |
| 🟡 **Medium** | [#2981](https://github.com/sipeed/picoclaw/issues/2981) | Documentation out of sync with `v0.2.9` changes | ❌ Created today, awareness issue |
| 🟠 **Low** | [#2796](https://github.com/sipeed/picoclaw/issues/2796) | Chat history only shows last user message | ❌ No PR, stale |

---

## 6. Feature Requests & Roadmap Signals

| Request | Likelihood of Next Version | Evidence |
|---|---|---|
| **Agent Collaboration Bus** | High (PR nearly ready) | [#2937](https://github.com/sipeed/picoclaw/pull/2937) is mature and feature-complete |
| **Cron tool `get`/`update` actions** | ✅ **Merged** | [#2977](https://github.com/sipeed/picoclaw/pull/2977) already landed |
| **NEAR AI Cloud provider** | Medium | [#2917](https://github.com/sipeed/picoclaw/pull/2917) open, small scope, clean integration |
| **Retry empty LLM responses** | High | [#2983](https://github.com/sipeed/picoclaw/pull/2983) open today, addresses real pain |
| **Documentation overhaul** | Medium | [#2981](https://github.com/sipeed/picoclaw/issues/2981) signals docs debt growing with `v0.2.9` |
| **Permissions system for tools** | Emerging | Related [#1042](https://github.com/sipeed/picoclaw/issues/1042) comments suggest desire for per-tool permission levels |

---

## 7. User Feedback Summary

### Pain Points
- **Multi-model setup friction**: Users on Anthropic face 2 separate config frustrations — default model ID uses wrong separator ( [#2941](https://github.com/sipeed/picoclaw/issues/2941) ) and `temperature` not omitted for newer models ( [#2939](https://github.com/sipeed/picoclaw/issues/2939) ). Both have open PRs, which is encouraging.
- **Agent silences**: When an LLM returns `content: null` (HTTP 200 but empty), the agent silently stalls — no retry, no error. [#2983](https://github.com/sipeed/picoclaw/pull/2983) addresses this.
- **History UX**: Chinese-language users report chat history only showing the last user message ( [#2796](https://github.com/sipeed/picoclaw/issues/2796) ), degrading usability for review.

### Satisfaction Signals
- Active community contributing across **channels** (SC3Bot, NEAR AI), **providers** (Anthropic/Bedrock fixes), and **core features** (agent collaboration).
- 5 PRs merged today shows the project is **responsive** to contributions.

---

## 8. Backlog Watch

These items are long-unanswered and deserve maintainer attention:

| Item | Age | Why It Matters |
|---|---|---|
| [#1042](https://github.com/sipeed/picoclaw/issues/1042) — `guardCommand` false positives | **⭐ 3 months** (Mar 4) | 15 comments, 2 👍 — this is the most engaged issue in the project. Affects every user using `exec` with `restrict_to_workspace: true`. No maintainer response in comments; no linked PR. |
| [#2887](https://github.com/sipeed/picoclaw/issues/2887) — RISC-V `.deb` broken | 16 days | Cross-platform claim → breaks on RISC-V; signals release process gap. |
| [#2796](https://github.com/sipeed/picoclaw/issues/2796) — Chat history message loss | 26 days | Core UX regression in conversation history. No engagement. |
| [#2813](https://github.com/sipeed/picoclaw/pull/2813) — PID identity verification | 26 days (open PR) | Direct fix for high-priority bug [#2720](https://github.com/sipeed/picoclaw/issues/2720), marked stale. Needs review. |

---

*Project Health Assessment*: ⚡ **Active and responsive** — strong PR throughput, broad contributor base, but with growing backlog on high-engagement bugs and documentation debt. Prioritizing the stale `guardCommand` issue and RISC-V support gap would significantly improve user trust.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-06-02

**Repository:** [github.com/qwibitai/nanoclaw](https://github.com/qwibitai/nanoclaw)

---

## 1. Today's Overview

NanoClaw saw robust activity over the past 24 hours with **3 updated issues (1 closed, 2 new)** and **5 pull requests (1 closed, 4 open)** — a healthy signal for a fast-moving AI agent project. The day's most significant development is the **closed A2A session-routing bug (#2331)**, a high-precision fix critical for multi-channel correctness. The project is currently in a bug-squash and resilience phase: three of five open PRs (#2670, #2666, #2669) center on **agent-runner crash recovery and self-healing**, suggesting the maintainers are investing heavily in operational robustness. No new releases shipped, but the merged work signals an upcoming patch cycle.

---

## 2. Releases

No new versions released in the past 24 hours. *(Latest tag was prior to this digest period.)*

---

## 3. Project Progress

| # | Action | Summary |
|---|--------|---------|
| **#2331 Issue** | 🔒 **Closed** | `findSessionByAgentGroup` in `src/db/sessions.ts` was sorting by `created_at DESC` to select a target session for A2A replies, routing responses to the *wrong* (newest) session in multi-channel groups. The fix commit closed this high-priority A2A routing bug. |
| **#2664 PR** | 🔒 **Closed** | Ran the browser scraping sidecar inside the v2 container environment ("run browser scraping sidecar in v2 container"). Merged/closed — likely iterating container architecture. |

> 💡 **Takeaway:** The project is tightening its A2A communication correctness and container infrastructure — both essential for production reliability of multi-agent sessions.

---

## 4. Community Hot Topics

| Item | Comments | 👍 | Why it matters |
|------|----------|-----|----------------|
| [Issue #2669](https://github.com/nanocoai/nanoclaw/issues/2669) — Corrupt resumed transcript crash-loop | 0 | ⚠️ High priority | Agent sessions can get permanently stuck in a 400 error cycle when resuming with poisoned transcripts. Affects anyone using long-lived or crash-recovered sessions. |
| [Issue #2668](https://github.com/nanocoai/nanoclaw/issues/2668) — No per-tool timeout for MCP tools | 0 | ⚠️ High priority | A single hung MCP tool can block an entire session for ~30 minutes before cold-kill. Impacts all deployments using MCP tool integrations. |
| [Issue #2331](https://github.com/nanocoai/nanoclaw/issues/2331) — A2A wrong session routing (closed) | 1 | 🔒 Closed | Resolved multi-channel A2A reply routing. |

**Underlying Need:** Users running **multi-agent, multi-channel setups with MCP integrations** are hitting hard edges around session management resilience. The convergence of #2669, #2668, and #2331 reveals a pattern: NanoClaw's session lifecycle (creation → resume → tool execution → inter-agent reply) needs tighter failure boundaries at every stage.

---

## 5. Bugs & Stability

Ranked by severity:

| # | Bug | Severity | Fix PR | Status |
|---|-----|----------|--------|--------|
| **#2669** | Corrupt resumed transcript causes infinite crash-loop (400 "thinking blocks cannot be modified") | 🔴 **Critical** — sessions permanently stuck | [PR #2670](https://github.com/nanocoai/nanoclaw/pull/2670) exists | PR open, needs review |
| **#2668** | No per-tool timeout — hung MCP tool blocks session up to 30 min | 🟠 **High** — operational availability impact | ❌ No fix PR yet | Unresolved |
| **#2331** | A2A replies routed to wrong session (closed) | 🟠 **High** — multi-channel correctness | ✅ Fixed & closed | Resolved |

> ⚠️ **Stability Pulse:** One critical bug (#2669) already has a well-targeted PR (#2670) that reclassifies the SDK 400 as a recoverable result event. However, #2668 (per-tool timeout) has **no fix PR** and directly impacts production reliability for MCP-heavy deployments — this should be next on the maintainer priority list.

---

## 6. Feature Requests & Roadmap Signals

While today's activity is predominantly bug-fix oriented, several PRs encode important **capability upgrades**:

- **[PR #2666](https://github.com/nanocoai/nanoclaw/pull/2666)** — "Provider failure recovery: rollback, replay, in-turn ack, friendly fallback" — This is a **major resilience feature** adding retry/replay semantics to provider calls, likely supporting multi-provider failover. Blocked by #2667.
- **[PR #2667](https://github.com/nanocoai/nanoclaw/pull/2667)** — Rootless Podman / root-container user support — Expands deployment options (LXC, rootless Podman) which broadens NanoClaw's target infrastructure.
- **[PR #2346](https://github.com/nanocoai/nanoclaw/pull/2346)** — Unknown slash commands now treated as normal chat instead of erroneously escalated to Claude Code slash commands.

**Prediction for next version:** Expect a **patch/bugfix release** focused on the #2331 A2A fix and #2664 container v2 work, followed by a **minor release** incorporating the provider failure recovery stack (#2666 + #2667). Per-tool timeout (#2668) may land as a fast-follow.

---

## 7. User Feedback Summary

| Pain Point | Source | Sentiment |
|------------|--------|-----------|
| Agent sessions silently — or loudly — breaking with no self-healing | #2669 | 😠 **Frustrated**: crash-loop fills logs, requires manual intervention |
| Long/unbounded MCP tool hangs blocking entire sessions | #2668 | 😤 **Bothered**: affects real-time responsiveness expectations |
| A2A inter-agent replies going to wrong session in group chats | #2331 (fixed) | 😊 **Relieved**: acknowledged and resolved |
| Slash commands mysteriously swallowed or misrouted | [PR #2346](https://github.com/nanocoai/nanoclaw/pull/2346) | 🤐 **Awaiting merge**: open 3+ weeks, needs maintainer attention |

**Use Cases Sighted:** Multi-channel deployments (likely messaging platforms like Telegram/Discord), MCP tool integration (external APIs and services), crash resilience in long-lived agent sessions, and containerized deployment diversity (Docker, Podman, LXC).

---

## 8. Backlog Watch

| Item | Age / Staleness | Why It Needs Attention |
|------|-----------------|------------------------|
| **[PR #2346](https://github.com/nanocoai/nanoclaw/pull/2346)** — Unknown slash commands treated as chat | 🕐 Opened **May 8** (~25 days old), updated June 1 | Fixes a clear bug where slash commands were silently dropped. Simple, contained fix. No review comments — likely needs only a maintainer to merge. |
| **[Issue #2668](https://github.com/nanocoai/nanoclaw/issues/2668)** — Per-tool timeout missing | 🕐 New (June 1) but no PR | Zero responses, no linked PR. A design-level issue that needs discussion or prioritization signal from maintainers. |

> 📌 **Maintainer Action Items:**
> 1. Review and merge [PR #2346](https://github.com/nanocoai/nanoclaw/pull/2346) — low-risk, high-quality fix, sitting too long.
> 2. Provide triage signal on [Issue #2668](https://github.com/nanocoai/nanoclaw/issues/2668) — acknowledge the timeout gap or assign.
> 3. Unblock [PR #2666](https://github.com/nanocoai/nanoclaw/pull/2666) by prioritizing merge/feedback on its dependency [PR #2667](https://github.com/nanocoai/nanoclaw/pull/2667).

---

*Digest generated by OWL — ZOO Company*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

**1. Today's Overview**
NullClaw experienced minimal project activity over the past 24 hours, with no newly opened or closed issues and no releases. The sole activity stems from a single open pull request addressing a user experience issue within the Telegram integration. No code was merged today, indicating a quiet or review-pending period for the project. Overall, the project remains stable but shows low instantaneous momentum for June 2nd.

**2. Releases**
No new releases were recorded today.

**3. Project Progress**
No PRs were merged and no issues were closed today. The only forward movement is the opening of [PR #943](https://github.com/nullclaw/nullclaw/pull/943), which aims to resolve a Telegram-specific UX delay. If merged, this will advance the chat interface's responsiveness during inline button interactions, marking a minor but notable improvement in the Telegram integration.

**4. Community Hot Topics**
Activity is extremely quiet, with no highly commented or reacted issues/PRs today. The only active item is [PR #943](https://github.com/nullclaw/nullclaw/pull/943) (👍 0, Comments: undefined), which addresses the lack of visual feedback (`typing…` indicator) in Telegram when processing callback queries. The underlying need here is transparent agent latency: users require visual confirmation that the AI is processing their request, especially when model inference takes 5–30 seconds, to prevent confusion or duplicate inputs.

**5. Bugs & Stability**
*   **Medium Severity: Missing Telegram typing indicator during callback queries** ([PR #943](https://github.com/nullclaw/nullclaw/pull/943), Closes #942). When a user presses an inline button (e.g., an `nc_choices` option), the chat goes completely silent while the agent processes the choice. For model calls taking 5–30 seconds, this absence of a `typing…` indicator creates a perception of the bot crashing or hanging. A fix PR is currently open and awaiting review.

**6. Feature Requests & Roadmap Signals**
No explicit feature requests were made today. The open PR implicitly signals a roadmap focus on polishing multi-platform UX, specifically ensuring that asynchronous agent processing states (like typing indicators) are consistently communicated across all interaction paradigms (text vs. inline buttons) in Telegram. 

**7. User Feedback Summary**
The identified pain point revolves around agent latency transparency during interactive UI elements. Users pressing inline buttons experience a "dead chat" state for up to 30 seconds, leading to potential frustration or repeated clicks. The desired use case is a responsive UI that mirrors the behavior of standard text inputs, maintaining trust that the assistant is actively working on the request.

**8. Backlog Watch**
With zero issues updated in the last 24 hours, the wider issue backlog is currently stagnant. [PR #943](https://github.com/nullclaw/nullclaw/pull/943) requires maintainer attention to review and merge, as it directly resolves the silence/stability perception bug outlined in its parent issue (#942).

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-06-02

---

## 1. Today's Overview

IronClaw maintained exceptional momentum today with **46 PRs updated** (32 merged/closed, 14 still open) and **12 issues reopened or created**, indicating a high-throughput sprint phase on the `reborn-integration` branch. The project is deep in active-development territory: there were **no new releases** today, suggesting the team is batching changes rather than cutting intermediate versions. The overwhelming majority of today's work centers on the **Reborn architecture** — specifically compaction/correctness, trigger polling, OAuth/WebUI UX, and capability porting (GitHub, GSuite, Feishu). PR throughput is robust but the issue queue is visibly backlogging: ten of the twelve touched issues remain open, with several containing deep-dive analyses that have not yet received maintainer response. Overall project health is **active but with growing review latency risk** — the volume of open work-in-progress items could become brittle if not throttled.

---

## 2. Releases

None. No new version was published today.

---

## 3. Project Progress

### Merged / Closed PRs (32 total, highlights below)

| # | PR | What shipped |
|---|---|---|
| [#4301](https://github.com/nearai/ironclaw/pull/4301) | **PR15: Trigger poller core** | Backend-agnostic `TriggerPollerWorker::tick_once(now)` added to `ironclaw_triggers`, with injected ports for prompt materialization and trusted trigger firing — the foundation for Reborn scheduled triggers. |
| [#4280](https://github.com/nearai/ironclaw/pull/4280) | **Port GitHub capabilities to Reborn** | Expanded bundled Reborn GitHub extension to the full v1 capability surface; routes `github.*` capability IDs through host-stamped invocation context (+ DB migration). |
| [#4297](https://github.com/nearai/ironclaw/pull/4297) | **Enable GSuite OAuth setup and recovery** | Added Google-specific OAuth start/callback with PKCE / static redirect URI; wired into Reborn serve/runtime config. |
| [#4300](https://github.com/nearai/ironclaw/pull/4300) | **Wire Reborn Notion OAuth provider** | Replaced single-provider Google-only adapter with a shared, muxed OAuth host client; added Notion MCP OAuth exchange/refresh. |
| [#4293](https://github.com/nearai/ironclaw/pull/4293) | **Surface activated GSuite capabilities to the model** | First-party dynamic secrets (Gmail, Google Calendar) stay visible without static grants; adds Google API network policy (+ DB migration). |
| [#4299](https://github.com/nearai/ironclaw/pull/4299) | **Migrate bundled extension manifest hash on startup** | Startup no longer hard-fails when a bundled extension manifest version changes — enables graceful binary updates. |
| [#4305](https://github.com/nearai/ironclaw/pull/4305) | **Progressively disclose Reborn skill activation context** | Filters model-selected skills before loading; re-aligns local-dev skill budget with legacy 6k-token limit. |
| [#4277](https://github.com/nearai/ironclaw/pull/4277) | **PR7: Product outbound orchestration seam** | Outbound policy validation before adapter render; verified target metadata propagation. |
| [#3899](https://github.com/nearai/ironclaw/pull/3899) | **Reborn budgets: full follow-ups** | Implemented all remaining tracks from the budget foundation (provider tokens, loop-level usage aggregation, cost projection). |
| [#4292](https://github.com/nearai/ironclaw/pull/4292) | **PR14: Trigger materialization turn-state seams** | Adds `TriggerPromptMaterializer` port and `active_run_ref_state` classification as next trigger-loop seam. |
| [#4295](https://github.com/nearai/ironclaw/pull/4295) | **Stop processing after cancelled gate resolution** | WebUI no longer returns to processing state after denied/cancelled gate; clears stale pending state. |
| [#4306](https://github.com/nearai/ironclaw/pull/4306) | **Validate provider capability inputs** | Runtime tool-call arguments validated against JSON Schema before capability dispatch; closes bypass found during audit. |

**Trajectory:** The team is clearly executing a multi-week Reborn integration sprint. Core infrastructure (trigger poller, compaction, outbound orchestration) is landing in incremental PRs while capability porting (GitHub → GSuite → Notion → Feishu) proceeds in parallel. OAuth/WebUI work is also converging toward feature-complete login support.

---

## 4. Community Hot Topics

### Most commented/discussed issues

| # | Issue | Signal |
|---|---|---|
| [#3281](https://github.com/nearai/ironclaw/issues/3281) | **[CLOSED] Add EventStreamManager for durable projection fanout** | 👍: 0, **Comments: 6** — Most commented issue today. Recently closed after discussion around scoped projection snapshots → durable replayable streams for Web SSE/WebSocket. Long-running P0, created May 6. Closure suggests major architecture landing. |
| [#4279](https://github.com/nearai/ironclaw/issues/4279) | **Roadmap inquiry: Reborn branch features and cloud-native architecture** | User questions maintainer roadmap for stateless agent model in multi-tenant settings. No maintainer response yet — represents external interest/workload not yet addressed. |
| [#4278](https://github.com/nearai/ironclaw/issues/4278) | **Unbounded conversation growth / context window exhaustion in ENGINE_V2** | User flagged scalability risk (all messages in one JSON blob). Zero reviews/assignees; touches the heart of the compaction work now landing. |
| [#4108](https://github.com/nearai/ironclaw/issues/4108) | **Nightly E2E failed** | Automated CI failure report (v2-engine lane). Unanswered — blocker signal. |

### Active PRs with high engagement

- [#4308](https://github.com/nearai/ironclaw/pull/4308) — XL harness coverage for trigger poller (open, fresh reviews).
- [#4304](https://github.com/nearai/ironclaw/pull/4304) — Reviewed plan for capability-scoped runtime context in prompt bundles.
- [#4178](https://github.com/nearai/ironclaw/pull/4178) — XL Feishu websocket event intake (open since May 28, awaiting review).
- [#4294](https://github.com/nearai/ironclaw/pull/4294) — OAuth Google/GitHub integration on WebUI v2 SPA (sibling of #4287 issue).

**Underlying needs:** Two dominant currents — (1) *Reborn runtime correctness* (compaction, error clas­sification, context overflow, budget governance) reflecting a system nearing production hardness; and (2) *Multi-tenant/cloud-native readiness* (OAuth, extension lifecycle, Feishu/Notion connectivity) pointing to broader market targeting beyond WebChat.

---

## 5. Bugs & Stability

| Severity | # | Issue / PR | Description | Fix status |
|---|---|---|---|---|
| 🔴 **High** | [#4311](https://github.com/nearai/ironclaw/issues/4311) | Budget governance failures collapsed into context-overflow recovery | Model gateway misclassifies non-budget errors as `ContextOverflow`, corrupting retry/recovery behavior. | No fix PR yet |
| 🔴 **High** | [#4310](https://github.com/nearai/ironclaw/issues/4310) | Context-overflow recovery emits `ShrinkContext` without actually shrinking | Executor retries with the same oversized prompt, potentially causing infinite retry loops. | No fix PR yet |
| 🔴 **High** | [#4309](https://github.com/nearai/ironclaw/issues/4309) | Compaction summary write outlives failed `BeforeModel` checkpoint → blocks retries | Summary artifact persists but watermark is only in memory; retry reconstructs same range → duplicated work / stall. | No fix PR yet |
| 🟠 **Medium** | [#4314](https://github.com/nearai/ironclaw/issues/4314) | `CompactionLeakDetected` milestone never emitted; dead code | Milestone exists but production path doesn't fire it. Security audit surface reduced. | No fix PR yet; low effort fix |
| 🟠 **Medium** | [#4313](https://github.com/nearai/ironclaw/issues/4313) | Compaction milestone payload schema mismatches `LoopHostMilestoneKind` enum | Projection ambiguity — may impact user-facing compacted-run summaries. | No fix PR yet |
| 🟠 **Medium** | [#4312](https://github.com/nearai/ironclaw/issues/4312) | Compaction progress not surfaced in live projection / WebUI | Users see agent as stalled during long prompt preparation. UX-level bug. | No fix PR yet |
| 🟡 **Low** | [#4108](https://github.com/nearai/ironclaw/issues/4108) | Nightly E2E failure (v2-engine lane) | Automated CI regression. | No investigation posted |
| ✅ **Fixed** | [#4306](https://github.com/nearai/ironclaw/pull/4306) (CLOSED) | Bypass of JSON Schema validation before WASM capability dispatch | Security-sensitive; now gates dispatch. | Merged |
| ✅ **Fixed** | [#4299](https://github.com/nearai/ironclaw/pull/4299) (CLOSED) | Startup hard-fail on bundled extension manifest hash change | Reborn runtime silently broken after deploy. | Merged |
| ✅ **Fixed** | [#4295](https://github.com/nearai/ironclaw/pull/4295) (CLOSED) | WebUI stuck in processing after cancelled gate | Visible user-facing regression. | Merged |

**Severity analysis:** Three 🔴 high-severity issues (#4311, #4310, #4309) form a logical cluster around compaction and error-recovery correctness on the Reborn loop. They share the attacker/maintainer label `henrypark133` and were likely surfaced during a single focused audit — suggesting a cohesive fix episode is likely incoming but has not yet shipped. Until resolved, the Reborn compaction path carries real risk of silent misbehavior in production.

---

## 6. Feature Requests & Roadmap Signals

| Signal | Items | Likelihood & Notes |
|---|---|---|
| OAuth on WebUI (Google + GitHub) | [#4287](https://github.com/nearai/ironclaw/issues/4287), [#4294](https://github.com/nearai/ironclaw/pull/4294) | **High near-term** — PR already open; only wiring remains. GSuite, Notion OAuth already merged. Feishu (#4178) following. Cloud-native auth is clearly a release theme. |
| Trigger poller production readiness | [#4301](https://github.com/nearai/ironclaw/pull/4301), [#4308](https://github.com/nearai/ironclaw/pull/4308), [#4303](https://github.com/nearai/ironclaw/issues/4303) | **High near-term** — Core merged, harness coverage PR is open, and a modularization issue is already filed. Expect `TriggerPollerWorker` refactor and full activation within 1–2 weeks. |
| Reborn compaction correctness cluster | [#4311](https://github.com/nearai/ironclaw/issues/4311), [#4310](https://github.com/nearai/ironclaw/issues/4310), [#4309](https://github.com/nearai/ironclaw/issues/4309), [#4312](https://github.com/nearai/ironclaw/issues/4312), [#4313](https://github.com/nearai/ironclaw/issues/4313), [#4314](https://github.com/nearai/ironclaw/issues/4314) | **Medium-term fix cluster** — All six issues by the same audit-focused contributor are essentially a MRP (minimal Reborn production) checklist. Expect a bundled fix PR or a corrective mini-sprint. |
| Capability-scoped runtime context in prompt bundles | [#4304](https://github.com/nearai/ironclaw/pull/4304) (plan PR, open) | **Medium** — Plan reviewed; implementation likely next sprint. |
| Feishu/Lark websocket intake | [#4178](https://github.com/nearai/ironclaw/pull/4178) (PR, open since 05-28) | **Medium** — Larger PR, already includes protobuf decode + connection mode. Needs review bandwidth; likely queued after OAuth push. |
| Reborn budget full-stack completion | [#3899](https://github.com/nearai/ironclaw/pull/3899) + [#4286](https://github.com/nearai/ironclaw/pull/4286) | **High near-term** — Budget foundation merge complete today; credit-exhaustion surface mapping PR (#4286) already open, likely to follow within days. |

---

## 7. User Feedback Summary

- **[@liaoqianchuan](https://github.com/nearai/ironclaw/issues/4279)** — High enthusiasm for Reborn's stateless agent model and cloud-native direction, but explicitly asked for roadmap clarification. Touches multi-tenant/multi-user concerns that haven't been publicly answered. Signals an external developer evaluating IronClaw for production use.
- **[@liaoqianchuan](https://github.com/nearai/ironclaw/issues/4278)** — Performance concern about unbounded conversation growth and memory table bloat. User is effectively *beta-testing via code review* and surfacing scaling risks ahead of the team's own compaction work. Demonstrates engaged but cautious community perception.
- **[@thisisjoshford](https://github.com/nearai/ironclaw/pull/4302)** — Docs-only contributor proposing systematic reconciliation of AGENTS.md crate maps. Indicates that internal documentation has drifted enough to warrant community QA — a sign the reborn refactor is large enough to outpace its own docs.
- **[@octo-patch](https://github.com/nearai/ironclaw/pull/4298)** — User-initiated PR to upgrade MiniMax default model. Signals that third-party model catalog freshness is an implicit user expectation.
- **[@italic-jinxin](https://github.com/nearai/ironclaw/issues/4287)** — OAuth login on WebUI framed as a must-have UX path; the user is ready to contribute (and has a companion PR #4294 open).

**Overall sentiment:** The community is technically sharp, proactively auditing architecture, but pacing behind the core team's PR velocity. Roadmap opacity (#4279, #4278) is a current friction point.

---

## 8. Backlog Watch

The following items have been dormant or unanswered despite apparent urgency:

| # | Item | Age / Status | Why it matters |
|---|---|---|---|
| [#4108](https://github.com/nearai/ironclaw/issues/4108) | Nightly E2E failure | Created 2026-05-27, **no maintainer comment**, still open | Nightly CI-red means `reborn-integration` is in a broken-test state. Build quality signal is currently stale. |
| [#4311](https://github.com/nearai/ironclaw/issues/4311) – [#4314](https://github.com/nearai/ironclaw/issues/4314) | Reborn loop compaction + error-classification audit cluster | All opened 2026-06-01, **zero comments/assignees** | Six issues by a single deep-dive auditor, representing a systematic correctness gap in the core Reborn agent loop. Until acknowledged, there is no visible remediation ETA. |
| [#4278](https://github.com/nearai/ironclaw/issues/4278) | Unbounded conversation growth / context window exhaustion in ENGINE_V2 | Opened 2026-06-01, **zero comments** | Real user-identified scaling risk directly related to compaction work. Low-hanging prioritization signal for the team already working on #4310 / #4311. |
| [#4279](https://github.com/nearai/ironclaw/issues/4279) | Roadmap inquiry for Reborn + cloud-native | Opened 2026-06-01, **no maintainer reply** | External evaluator considering production adoption. Public reply would reduce speculation and build credibility. |
| [#4178](https://github.com/nearai/ironclaw/pull/4178) | Feishu websocket intake | PR open since 2026-05-28, **no review** | Large feature PR with binary protobuf handling — needs SME bandwidth. Staleness risks future rebase cost. |
| [#4303](https://github.com/nearai/ironclaw/issues/4303) | Split `TriggerPollerWorker` into focused modules | Opened 2026-06-01, **no comments** | Follow-on directly referenced by maintainers; planned refactor of already-merged code. Delay increases future complexity. |

**Key risk:** The compaction-audit cluster (#4311–#4314) is the most important unresponded item — these issues collectively define the correctness envelope of the Reborn agent loop. If the maintainer response latency on this cluster extends beyond a few days, downstream PRs (trigger poller productionization, budget follow-ups) may silently depend on broken assumptions.

---

*Digest generated by OWL · 2026-06-02 · Data source: IronClaw (github.com/nearai/ironclaw)*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-06-02

---

## 1. Today's Overview

LobsterAI showed exceptionally high activity on June 1, 2026, with 12 PRs closed/merged, 1 new release (v2026.6.1), and 1 fresh issue. All 12 PRs were resolved within a single day, indicating outstanding maintainer responsiveness. The project is deep in an active development cycle centered around the **Kit Expert Store**, Cowork conversation improvements, and Artifact stability. However, a notable user complaint surfaced in a Chinese-language community about subscription point expiry, suggesting a billing/account UX pain point that warrants attention.

---

## 2. Releases

### LobsterAI 2026.6.1 — Released 2026-06-01
🔗 [View on GitHub](https://github.com/netease-youdao/LobsterAI/releases)

**Key Changes:**

| Change | Type | PR |
|---|---|---|
| **Expert Kit Store & Conversation Integration** — UI + Redux integration for Kit marketplace; install/uninstall/kit metadata in conversation input | Feature | [#2060](https://github.com/netease-youdao/LobsterAI/pull/2060) |
| **Plugin Update Check** — Support checking for updates from both npm and ClawHub sources | Feature | [#2069](https://github.com/netease-youdao/LobsterAI/pull/2069) |
| MCP stability fix | Fix | Included above |

**Breaking Changes:** None explicitly noted.

**Migration Notes:** No migration steps identified for this release. The Kit Store introduction is additive. Users with existing plugin configurations from npm/ClawHub sources should be able to use the new update-check functionality without reconfiguration.

---

## 3. Project Progress

### Merged/Closed PRs (June 1, 2026)

| # | Area | Summary |
|---|---|---|
| [#2090](https://github.com/netease-youdao/LobsterAI/pull/2090) | multi-area | **Release 2026.5.28 back-merge** — 73 commits; brings Kit marketplace, Cowork local forking, plugin update checks |
| [#2089](https://github.com/netease-youdao/LobsterAI/pull/2089) | renderer, core | **MiniMax M3 model + BYOK default context windows** updated |
| [#2088](https://github.com/netease-youdao/LobsterAI/pull/2088) | renderer | **Kits UI update** — visual polish pass on Kit management screens |
| [#2087](https://github.com/netease-youdao/LobsterAI/pull/2087) | renderer, cowork | **Kits optimization** — performance/logic refinements for Kit handling |
| [#2086](https://github.com/netease-youdao/LobsterAI/pull/2086) | multi-area, Windows | **WeChat bug fix** during updates/reinstalls — stability-critical for Windows users |
| [#2073](https://github.com/netease-youdao/LobsterAI/pull/2073) | renderer, cowork, artifacts | **Artifacts: clear error toasts for missing local files** — surfaced UX improvement instead of silent failure |
| [#2085](https://github.com/netease-youdao/LobsterAI/pull/2085) | renderer, cowork | **Cowork: local conversation forking** — fork a conversation from any assistant message; preserves compacted context |
| [#2084](https://github.com/netease-youdao/LobsterAI/pull/2084) | renderer | **Kit uninstall confirmation modal** — prevents accidental skill removal |
| [#2083](https://github.com/netease-youdao/LobsterAI/pull/2083) | renderer, cowork | **Localized skill descriptions from installed Kits** — i18n improvement |
| [#2082](https://github.com/netease-youdao/LobsterAI/pull/2082) | core | **Additional logging** — observability improvement |
| [#2080](https://github.com/netease-youdao/LobsterAI/pull/2080) | renderer, cowork | **Kits + file upload UI optimization** |

**Active Themes:**
1. **Kit/Expert Suite Maturity** — The Kit Store is moving rapidly from initial feature to polished product (UI, confirmation flows, localization, update checking).
2. **Cowork Evolution** — Local conversation forking is a significant UX upgrade, allowing users to branch discussion threads without losing context.
3. **Stability & Polish** — Artifact error reporting, WeChat reinstall fixes, and file-accessibility toasts show a strong focus on production reliability.

---

## 4. Community Hot Topics

### 🔴 Active Issue

**[Issue #2081](https://github.com/netease-youdao/LobsterAI/issues/2081)** — *"订阅的5500积分还没用 月底直接清零了"* (5,500 subscription points expired and were reset at month end)
- **Author:** zjk648491625 | **Comments:** 1 | **Reactions:** 0
- **Underlying Need:** User expects a grace period, rollover, or expiration notice before points are wiped. This signals a **billing/account lifecycle UX gap** — the issue is not about functionality but transparency of subscription terms. Likely represents a cohort of Chinese-language power users with prepaid credit balance.
- **Risk:** If unaddressed, this could generate broader sentiment erosion around pricing fairness.

---

## 5. Bugs & Stability

### Reported Bugs (Ranked by Severity)

| Severity | Description | Fix PR | Status |
|---|---|---|---|
| 🔴 **Medium** | User subscription points (5,500) silently expired at month-end without warning or rollover | — | **Unfixed** — [#2081](https://github.com/netease-youdao/LobsterAI/issues/2081) |
| 🟢 Low | WeChat client crashes during app updates/reinstalls on Windows | [#2086](https://github.com/netease-youdao/LobsterAI/pull/2086) | ✅ Fixed |
| 🟢 Low | Artifacts silently failing when local files are moved or deleted | [#2073](https://github.com/netease-youdao/LobsterAI/pull/2073) | ✅ Fixed |
| 🟢 Low | Accidental Kit uninstallation without confirmation | [#2084](https://github.com/netease-youdao/LobsterAI/pull/2084) | ✅ Fixed |

**Summary:** All code-level bugs from the 24h window were resolved same-day. The only unresolved issue is a policy/UX concern (point expiration), not a technical bug, but the severity is elevated because it directly impacts paying user trust.

---

## 6. Feature Requests & Roadmap Signals

| Signal | Likelihood | Evidence |
|---|---|---|
| **Kit Store expansion & discovery** | 🔮 High | Multiple PRs this week focused on Kit UI, localization, and install flows — expect store browse/search/categories in next release |
| **Cowork conversation management** | 🔮 High | Local forking just landed (#2085); expect merge, diff, or offline export of forked conversations soon |
| **Plugin ecosystem integration** | 🔮 Medium-High | npm + ClawHub update checking (#2069) signals push toward a richer plugin marketplace |
| **Subscription/credit management UI** | 🟡 Unknown | Issue #2081 highlights user need for usage dashboards and expiration countdowns — could emerge in a future release if user volume grows |
| **Model provider flexibility** | 🟡 Medium | MiniMax M3 + BYOK context window updates (#2089) suggest ongoing multi-provider support investment |

**Predicted Next Release (v2026.6.2 or v2026.7.x) Focus:** Kit Store discovery improvements, Cowork conversation export, and additional Artifact/enterprise stability fixes.

---

## 7. User Feedback Summary

### Pain Points
- **Subscription point management** — User with 5,500 prepaid points lost them to a monthly reset with no advance notice or grace period. This is the single most impactful UX concern for paying users.
- **Silent file-link failures** — Users were frustrated when artifact links broke without clear error messaging (now fixed in [#2073](https://github.com/netease-youdao/LobsterAI/pull/2073)).

### Satisfaction Signals
- Rapid maintainers: All 12 PRs closed and 1 release shipped in a single day — community-facing velocity is very strong.
- The Kit Store concept is receiving strong investment (UI, i18n, uninstall confirmation, update checking) — suggests the project is actively converting a core feature into a platform.
- Cowork local forking (#2085) addresses real power-user needs around conversation branching.

### Key Use Cases Observed
- **Chinese-language enterprise users** relying on IM integrations (WeChat, DingTalk, Feishu, QQ)
- **Kit/Skill enthusiasts** building or exploring the Expert Suite ecosystem
- **Collaborative Cowork users** who need conversation branching for complex multi-thread workflows

---

## 8. Backlog Watch

### Items Needing Maintainer Attention

| Item | Age | Area | Concern |
|---|---|---|---|
| **[Issue #2081](https://github.com/netease-youdao/LobsterAI/issues/2081)** | 1 day | billing/UX | Subscription point expiration without warning — paying user issue, no maintainer comment yet |
| **[PR #1464](https://github.com/netease-youdao/LobsterAI/pull/1464)** 🔄 stale | 58 days (opened Apr 4) | IM (DingTalk/Feishu/QQ) | Duplicate instance name and credential validation — **stale**, needs maintainer decision (close or review); prevents duplicate bot registration conflicts |

**Recommendation:**
- **#2081** should receive a response within 24-48h given it involves a paying user's tangible financial loss (5,500 points). Even if the policy is "by design," transparency and a warning mechanism should be discussed.
- **#1464** should either be reviewed/merged or formally closed with rationale. At 58 days stale, it risks losing contributor goodwill from @gongzhi-netease. The fix it proposes (duplicate validation for IM instances) is low-risk and high-value.

---

*Digest generated by OWL · Data source: github.com/netease-youdao/LobsterAI · Coverage: 2026-06-01 activity*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-06-02

---

## 1. Today's Overview

Moltis saw moderate activity on 2026-06-02 with **4 pull requests updated and merged**, though no new issues were filed in the last 24 hours. The project is clearly in active development with a focus on **provider architecture refinements** and **tool-call reliability**. Three PRs were closed/merged on June 1, suggesting a focused push to land improvements before the week progressed. The lack of new issues may indicate either relative stability or low community engagement on this particular day. One open PR remains active and addresses session persistence concerns.

---

## 2. Releases

**No new releases** were published in the reported period.

---

## 3. Project Progress

Three PRs were merged/closed, advancing several areas of the codebase:

- **[PR #1090](https://github.com/moltis-org/moltis/pull/1090) — "refactor(providers): use explicit OpenAI capabilities" (Author: `penso`)**
  A significant architectural refactor that replaces implicit, URL/name-based behavior checks on OpenAI-compatible providers with **explicit capability policies**. Built-in and resolved model capabilities are now wired through a registration system, while custom providers default to strict, conservative defaults. The addition of regression tests signals an ongoing effort to make provider behavior more deterministic and reduce ambiguity when integrating new OpenAI-compatible endpoints.

- **[PR #1031](https://github.com/moltis-org/moltis/pull/1031) — "Add NEAR AI Cloud provider" (Author: `PierreLeGuen`)**
  Adds **NEAR AI Cloud** as a new OpenAI-compatible provider behind `NEARAI_API_KEY` at `https://cloud-api.near.ai/v1`. Models are discovered dynamically from NEAR's public `/v1/model/list` catalog, and the PR surfaces **TEE-aware (Trusted Execution Environment) recommendations and capabilities**. This expands Moltis's multi-provider ecosystem and reflects a growing demand for privacy-preserving and decentralized AI infrastructure options.

- **[PR #1088](https://github.com/moltis-org/moltis/pull/1088) — "Handle OpenAI Codex final tool-call arguments" (Author: `s-salamatov`)**
  Fixes a gap in the OpenAI Codex provider where `response.function_call_arguments.done` payloads were not being properly recorded. The PR synthesizes streaming argument deltas from final arguments when none were emitted and ensures empty accumulated argument strings still flow through decode diagnostics. This directly improves **tool-call reliability** for the Codex provider.

- **[PR #1089](https://github.com/moltis-org/moltis/pull/1089) — "Cap persisted tool results before rehydration" (Author: `s-salamatov`) — 🟡 OPEN**
  Addresses the issue of oversized tool and tool-result content being rehydrated into `ChatMessage`s unboundedly. The capping logic is applied across multiple flows: normal chat, streaming chat, retry-after-compaction, prompt inspection, silent memory turns, and LLM-backed compaction prompts. This is a **stability and memory-usage** fix that prevents context window overflows.

---

## 4. Community Hot Topics

Notable activity (by recency and scope of impact):

- **[PR #1089](https://github.com/moltis-org/moltis/pull/1089)** — Capping persisted tool results: This touches a broad set of code paths (normal chat, streaming, compaction, memory), suggesting the underlying need is **production-grade session handling** — users are likely hitting context limits or performance degradation when sessions with heavy tool-use history are restored.

- **[PR #1090](https://github.com/moltis-org/moltis/pull/1090)** — Explicit provider capabilities: The community appears to be pushing toward **more declarative provider configuration**, reducing the trial-and-error involved in adding or debugging OpenAI-compatible endpoints. This is a foundational improvement that affects every integration going forward.

- **[PR #1031](https://github.com/moltis-org/moltis/pull/1031)** — NEAR AI Cloud: Decentralized and privacy-focused AI infrastructure is clearly emerging as a use case the community wants first-class support for.

No issues with significant comment counts or reactions were reported during this window.

---

## 5. Bugs & Stability

- **🔴 Missing argument deltas in OpenAI Codex provider ([PR #1088](https://github.com/moltis-org/moltis/pull/1088))** — Moderate-severity bug where final tool-call arguments were not recorded, potentially causing tool invocations to fail silently or produce missing-argument errors. **Fix already merged.**

- **🔴 Unbounded tool-result rehydration ([PR #1089](https://github.com/moltis-org/moltis/pull/1089))** — Potentially high-severity issue where persisted tool results of arbitrary size are loaded back into session context without limits, risking context overflow and degraded performance across all chat modes. **Fix open, awaiting merge.**

- **[PR #1090](https://github.com/moltis-org/moltis/pull/1090)** includes regression tests, suggesting that prior behavior was indeed fragile and had caused or could cause correctness issues.

No crash reports or regressions were reported on issues in the last 24h.

---

## 6. Feature Requests & Roadmap Signals

- **TEE-aware provider recommendations** (from PR #1031): The addition of TEE-aware capabilities to NEAR AI Cloud's model catalog suggests that Moltis may evolve toward **privacy-scored or trust-level-aware model routing** in the future.

- **Explicit provider capability registration** (from PR #1090): This architectural shift opens the door for richer provider metadata — rate limits, vision/tool support, reasoning token handling, etc. — to be declared rather than inferred, which will likely appear in future versions as a formal capability schema.

- **Session persistence hardening** (from PR #1089): As Moltis handles more complex, long-running tool-using sessions, expect continued investment in **context management, compaction strategies, and memory-safe rehydration**.

---

## 7. User Feedback Summary

No direct user issues were filed in the last 24 hours. However, the nature of the merged and active PRs reveals inferred user pain points:

| Pain Point | Evidence |
|---|---|
| **Tool-call failures with Codex provider** | PR #1088 — silent missing-argument errors were being surfaced at the diagnostic layer |
| **Context overflow on session restore** | PR #1089 — unbounded tool results in rehydrated history |
| **Unpredictable behavior with new OpenAI-compatible providers** | PR #1090 — shift from implicit heuristics to explicit capability declarations |
| **Demand for decentralized/privacy-preserving AI** | PR #1031 — NEAR AI Cloud with TEE support |

Overall, the trajectory suggests users are deploying Moltis in **production-adjacent, multi-provider, tool-heavy workflows** and encountering edge cases that require deeper architectural fixes rather than surface patches.

---

## 8. Backlog Watch

- **[PR #1089](https://github.com/moltis-org/moltis/pull/1089)** — "Cap persisted tool results before rehydration": This PR was created on June 1 and is still open as of this digest. Given the breadth of code paths it touches (normal chat, streaming chat, compaction, memory turns), merge should be prioritized to prevent ongoing context-overflow issues in production sessions.

- No long-unanswered issues were reported in the 24-hour window. The **0 open/0 closed issues** count suggests the issue tracker is either very recently cleared or that the community is more active via PRs than issue filing — worth monitoring as a potential signal of underreported friction.

---

*Data window: 2026-06-01 to 2026-06-02 | Source: github.com/moltis-org/moltis*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-06-02

## 1. Today's Overview

CoPaw shows continued high development activity with 50 issues updated (32 open, 18 closed) and 35 PRs (26 open, 9 merged/closed) in the last 24h, alongside 2 new releases. The project is in a rapid stabilization phase around the v1.1.10 release, with the team simultaneously tackling Windows-specific reliability issues, cron/schedule system bugs, channel delivery problems, and a major upstream migration to AgentScope 2.0. Multiple contributors are actively shipping fixes, though open PR volume (26) indicates review bandwidth may be a bottleneck.

## 2. Releases

### v1.1.10 (stable)
- **New Feature — Spawn Subagent**: `spawn_subagent` tool added for ephemeral in-workspace sub-agent execution, enabling short-lived sub-agent tasks without persistent session overhead. ([#4806](https://github.com/agentscope-ai/QwenPaw/pull/4806))
- **Coding Mode — Open Directory Tab**: New "Open Directory" tab for referencing local project files directly within the coding assistant workflow.
- **New Feature — SharedMCPPool**: MCP server instances now shared across agents, resolving resource exhaustion with large agent fleets. ([#4849](https://github.com/agentscope-ai/QwenPaw/pull/4849))

### v1.1.10-beta.2
- Website header style fix and auto-continue video feature ([#4812](https://github.com/agentscope-ai/QwenPaw/pull/4812))
- Skill tag preservation and enable/disable state fixes

## 3. Project Progress

**Merged/Closed Today:**
- **v1.1.10 release cut** ([#4867](https://github.com/agentscope-ai/QwenPaw/pull/4867)) — stabilization pass
- **SharedMCPPool** ([#4849](https://github.com/agentscope-ai/QwenPaw/pull/4849)) — critical performance fix allowing MCP server reuse across hundreds of agents, resolving process explosion on Windows
- **Browser process tree cleanup on Windows** ([#4853](https://github.com/agentscope-ai/QwenPaw/pull/4853)) — kills entire process tree and cleans lock files post-session
- **`multi_agent_collaboration` skill alignment** ([#4211](https://github.com/agentscope-ai/QwenPaw/pull/4211)) — updated to use current built-in inter-agent tools

**Actively Under Review:**
- **AgentScope 2.0 migration** ([#4846](https://github.com/agentscope-ai/QwenPaw/pull/4846)) — marked as breaking change, WIP
- **Feishu group session sharing mode** ([#4821](https://github.com/agentscope-ai/QwenPaw/pull/4821))
- **Context window protection** ([#4787](https://github.com/agentscope-ai/QwenPaw/pull/4787)) — two-layer defense against oversized shell output bloating context

## 4. Community Hot Topics

| # | Item | Comments | Topic |
|---|------|----------|-------|
| 1 | [#4653](https://github.com/agentscope-ai/QwenPaw/issues/4653) | 9 | **Cron jobs sharing sessions with user messages cause task interruption** — core scheduling reliability |
| 2 | [#4789](https://github.com/agentscope-ai/QwenPaw/issues/4789) | 9 👍1 | **Conversation rollback/delete like Trae IDE** — users want granular conversation management with file rollback |
| 3 | [#4808](https://github.com/agentscope-ai/QwenPaw/issues/4808) | 7 | **Skill not found errors** — SKILL.md configuration confusion |
| 4 | [#4649](https://github.com/agentscope-ai/QwenPaw/issues/4649) | 6 | **Orphan cron jobs execute indefinitely** — scheduler cleanup failure |
| 5 | [#4835](https://github.com/agentscope-ai/QwenPaw/issues/4835) | 4 | **Single invalid job breaks entire workspace** — needs graceful degradation |

**Underlying Needs Analysis:**
- Users strongly desire **per-conversation granular control** (rollback, branching, deletion) — this is a competitive feature expected by IDE users
- **Cron/scheduling reliability** is the most active pain area, with 3+ related high-engagement issues. Users running automated tasks need confidence they'll execute completely.
- **Error isolation** — one bad config shouldn't crash everything. Users are hitting cascade failures in cron and MCP systems.

## 5. Bugs & Stability

**High Severity:**
| Bug | Fix PR | Status |
|-----|--------|--------|
| Browser temp lock files persist on Windows, breaking backups ([#4844](https://github.com/agentscope-ai/QwenPaw/issues/4844)) | [#4853](https://github.com/agentscope-ai/QwenPaw/pull/4853) | ✅ Merged |
| MCP server process explosion with 300+ agents ([#4842](https://github.com/agentscope-ai/QwenPaw/issues/4842)) | [#4849](https://github.com/agentscope-ai/QwenPaw/pull/4849) | ✅ Merged |
| Orphan cron jobs execute indefinitely ([#4649](https://agentscope-ai/QwenPaw/issues/4649)) | None yet | 🔴 Open |
| Coding Mode conversation switch triggers full page refresh ([#4819](https://github.com/agentscope-ai/QwenPaw/issues/4819)) | None yet | 🔴 Open |
| One invalid job breaks entire workspace start ([#4835](https://agentscope-ai/QwenPaw/issues/4835)) | None yet | 🔴 Open |

**Medium Severity:**
| Bug | Fix PR | Status |
|-----|--------|--------|
| MCP processes accumulate across restarts ([#4834](https://github.com/agentscope-ai/QwenPaw/issues/4834)) | None | 🟡 Open |
| Cron task share_session=true produces empty traces ([#4818](https://github.com/agentscope-ai/QwenPaw/issues/4818)) | [#4822](https://github.com/agentscope-ai/QwenPaw/pull/4822) | 🟡 Open PR |
| New session loads raw compressed context, infinite inflation ([#4872](https://github.com/agentscope-ai/QwenPaw/issues/4872)) | None | 🔴 Open |
| pip upgrade leaves ghost builtin skill dirs on Windows ([#4839](https://github.com/agentscope-ai/QwenPaw/issues/4839)) | None | 🟡 Closed |
| Windows desktop shell commands pop visible CMD windows ([#4777](https://github.com/agentscope-ai/QwenPaw/issues/4777)) | None | 🟡 Open |
| Custom LiteLLM can't use ChatGPT Responses API routes ([#4880](https://github.com/agentscope-ai/QwenPaw/issues/4880)) | None | 🔴 Open |
| Upgrade resets disabled builtin skills to enabled ([#4807](https://github.com/agentscope-ai/QwenPaw/issues/4807)) | None | 🟡 Closed |

**Low Severity / Fixed:**
- WeChat cron message delivery failure due to openid handling ([#4878](https://github.com/agentscope-ai/QwenPaw/issues/4878)) — fix PRs [#4883](https://github.com/agentscope-ai/QwenPaw/pull/4883), [#4884](https://github.com/agentscope-ai/QwenPaw/pull/4884) open

## 6. Feature Requests & Roadmap Signals

| Feature | Issue | Signals |
|---------|-------|---------|
| **Conversation rollback/delete with file revert** | [#4789](https://github.com/agentscope-ai/QwenPaw/issues/4789) (9 comments) | High demand; competitive pressure from Trae; likely v1.1.11 or v1.2 |
| **Model fallback chain for LLM resilience** | [#4882](https://github.com/agentscope-ai/QwenPaw/issues/4882) | Day-old but architecturally significant; complements existing retry/routing |
| **Agent-scoped web login accounts** | [#4859](https://github.com/agentscope-ai/QwenPaw/issues/4859) | Multi-tenant deployment need; early request |
| **Windows silent shell execution** | [#4777](https://github.com/agentscope-ai/QwenPaw/issues/4777) | Desktop UX polish; straightforward fix |
| **Token usage badge in conversations** | [#4433](https://github.com/agentscope-ai/QwenPaw/pull/4433) (under review) | Already in progress; likely next release |
| **Font size adjustable (Desktop)** | [#4154](https://github.com/agentscope-ai/QwenPaw/issues/4154) | Long-standing accessibility request |
| **Desktop auto-updater (Tauri)** | [#4669](https://github.com/agentscope-ai/QwenPaw/pull/4669) (under review) | Improving release adoption friction |

**Likely Next Release (v1.1.11):** Conversation management features, model fallback chain, cron reliability fixes (orphan cleanup + error isolation).

## 7. User Feedback Summary

**Pain Points:**
- **Windows reliability is the #1 complaint cluster**: browser lock files, ghost MCP processes, CMD window popups, pip upgrade residue, Edge exit code 21. Windows users face a compounding stability tax.
- **Cron system fragility**: jobs interrupt each other, orphan indefinitely, fail silently, or break the entire workspace. Automated task users are among the most engaged (and most frustrated).
- **Upgrade regression pattern**: disabled skills re-enable, config changes cause breakage. Users lose trust in update safety.
- **Context management confusion**: users don't understand when/why context compression happens, leading to unexpected behavior ([#4871](https://github.com/agentscope-ai/QwenPaw/issues/4871), [#4872](https://github.com/agentscope-ai/QwenPaw/issues/4872)).

**Use Cases Emerging:**
- Multi-agent deployments (300+ agents) with shared MCP infrastructure
- Scheduled/cron-based automation with delivery to WeChat, Feishu, Telegram
- Desktop IDE-like experience with conversation branching and file management
- Skill-as-plugin ecosystem (external skill proposals like "Before You Build" [#4841](https://github.com/agentscope-ai/QwenPaw/issues/4841))

**Satisfaction Signals:** Active community engagement (high comment counts indicate users feel heard). The rapid cadence of actual merged fixes (SharedMCPPool, browser cleanup in one release cycle) shows responsive development.

## 8. Backlog Watch

| Item | Days Open | Why It Matters |
|------|-----------|---------------|
| [#4649](https://github.com/agentscope-ai/QwenPaw/issues/4649) — Orphan cron jobs | 9 days | No PR; silent failure mode with no workaround |
| [#4835](https://github.com/agentscope-ai/QwenPaw/issues/4835) — Single job breaks workspace | 2 days | No PR; improves on [#4649] but still needs maintainer priority |
| [#4872](https://github.com/agentscope-ai/QwenPaw/issues/4872) — Context inflation on new session | 1 day | Recently reported but touches core agent behavior; 2 comments already |
| [#4777](https://github.com/agentscope-ai/QwenPaw/issues/4777) — Desktop CMD popup | 5 days | Windows desktop UX degradation; likely easy fix |
| [#4731](https://github.com/agentscope-ai/QwenPaw/issues/4731) — Browser launch failure (Edge exit 21) | 5 days | Blocks browser tooling entirely for affected Windows users |
| [#4154](https://github.com/agentscope-ai/QwenPaw/issues/4154) — Font size adjustable | 24 days | Longest-standing open feature request in recent batch |
| [#4846](https://github.com/agentscope-ai/QwenPaw/pull/4846) — AgentScope 2.0 migration | 1 day (WIP, breaking) | Highest-impact PR; needs early review to surface breaking changes before merge |

**Alert:** The AgentScope 2.0 migration PR ([#4846](https://github.com/agentscope-ai/QwenPaw/pull/4846)) is the most consequential pending change but currently has unreviewed "breaking change" impact. Given the cron system bug cluster (#4649, #4653, #4818, #4835) all still open, the maintainers face a tension between urgent stability fixes and strategic infrastructure upgrade.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

1. **Today's Overview**
ZeptoClaw experienced high volumetric activity in the last 24 hours, driven predominantly by bulk dependency updates and CI infrastructure improvements. With 17 out of 18 pull requests closed/merged and only 1 active issue, the project is in a maintenance and hardening phase rather than a feature-development cycle. The most significant structural change was merging a critical provider fallback bug fix alongside strategic binary-size CI gate adjustments. No new releases were cut, indicating these changes are being staged for a future stable tag.

2. **Releases**
No new releases were published today.

3. **Project Progress**
Merged PRs today advanced project stability, CI rigor, and dependency hygiene:
*   **Critical Bug Fix:** [PR #610](https://github.com/qhkm/zeptoclaw/pull/610) (cherry-picked from [PR #592](https://github.com/qhkm/zeptoclaw/pull/592)) landed a fix ensuring keyword fallbacks no longer claim unconfigured providers, resolving a 100% error rate for NIM-served Photon instances.
*   **Security Advisory Clearances:** [PR #594](https://github.com/qhkm/zeptoclaw/pull/594) resolved repo-wide CI blocks caused by a zero-tolerance `deny.toml` policy by bumping lettre and diesel to clear RUSTSEC advisories.
*   **CI Enhancements:** [PR #611](https://github.com/qhkm/zeptoclaw/pull/611) opened to promote the `binary-size` job to a PR gate at a 7.5MB ceiling.
*   **Dependency Bumps:** 13 Dependabot PRs were merged, updating core Rust crates (tower-http 0.6.10, clap 4.6.1, uuid 1.23.1, mail-parser 0.11.3, bcrypt 0.19.1), GitHub Actions (taiki-e/install-action, cargo-deny-action), JS doc/panel tooling (Astro 6.3.x, Starlight 0.39.2, ESLint 10.3.0), and Docker base images (Rust 1.95-slim-trixie, Debian trixie-slim).

4. **Community Hot Topics**
There are no highly active discussions or hot topics based on reactions or comments in today's data. All issues and PRs currently show 0 comments and 0 reactions. The underlying need driving the open PR/Issue chain ([PR #611](https://github.com/qhkm/zeptoclaw/pull/611) / [Issue #612](https://github.com/qhkm/zeptoclaw/issues/612)) is maintainers actively wrestling with binary size creep (~800KB drift since a 6.2MB low water mark), striving to enforce stricter performance budgets before the binary naturally exceeds the 7MB target.

5. **Bugs & Stability**
*   **[HIGH] Provider Fallback Misconfiguration:** [PR #610](https://github.com/qhkm/zeptoclaw/pull/610) / [PR #592](https://github.com/qhkm/zeptoclaw/pull/592). `infer_provider_name_for_model` ignored `available_providers`, causing a 100% error rate on specific NIM-served models. **Status: Fixed/Merged.**
*   **[MEDIUM] CI Security Audit Gridlock:** [PR #594](https://github.com/qhkm/zeptoclaw/pull/594). New RUSTSEC advisories surfaced for lettre/diesel, breaking all CI checks due to zero-tolerance policy. **Status: Fixed/Merged.**
*   **[LOW] Binary Size Drift:** [Issue #612](https://github.com/qhkm/zeptoclaw/issues/612). darwin-arm64 binary is at 6.98MB, very close to the 7MB strategic target. **Status: Open, mitigation in progress via [PR #611](https://github.com/qhkm/zeptoclaw/pull/611).**

6. **Feature Requests & Roadmap Signals**
No explicit user-requested features were opened today. However, [Issue #612](https://github.com/qhkm/zeptoclaw/issues/612) and [PR #611](https://github.com/qhkm/zeptoclaw/pull/611) signal an internal roadmap priority: enforcing aggressive binary-size constraints (tightening the gate from 7.5MB down to 7MB). This indicates the next release will likely feature aggressive tree-shaking, feature-flag trimming, or dependency substitution to reclaim the ~800KB size drift.

7. **User Feedback Summary**
The most concrete user pain point highlighted today was a complete inference failure (100% error rate) for NIM-served Photon instances using model ID `openai/gpt-oss-120b` ([PR #592](https://github.com/qhkm/zeptoclaw/pull/592)). Users relying on self-hosted or reverse-proxied LLM endpoints were silently misrouted to unconfigured providers. The cherry-pick and merge of this fix in [PR #610](https://github.com/qhkm/zeptoclaw/pull/610) resolves this satisfaction hit, though the original fork-authored PR required significant CI re-engineering to merge, indicating that external contributors may face friction when CI security audits fail.

8. **Backlog Watch**
*   [Issue #612](https://github.com/qhkm/zeptoclaw/issues/612) - Opened yesterday with 0 comments. It tracks the strategic goal of tightening the binary-size gate to 7MB. Maintainer attention is needed to align [PR #611](https://github.com/qhkm/zeptoclaw/pull/611)'s 7.5MB temporary ceiling with this 7MB target.
*   [PR #611](https://github.com/qhkm/zeptoclaw/pull/611) - Open, awaiting review. It introduces a CI gate that will intentionally fail PRs increasing the binary size beyond 7.5MB. Needs maintainer merge to finalize the defensive perimeter against size drift.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-06-02

---

## 1. Today's Overview

ZeroClaw remains in a period of intense pre-release development activity, with 36 issues and 37 pull requests touched in the last 24 hours. No new tagged release landed today; the project appears to be accumulating changes toward a **v0.8.0-beta-2** milestone. The volume of high-risk bug fixes (PostgreSQL gateway crash, Gemini history serializer failure, WhatsApp security bypass, tool allowlist circumvention) signals the project is stabilizing a large surface area across channels, providers, and runtime ahead of the next release. Community engagement is active on skills architecture and token-efficiency topics, but the issue queue is growing faster than it is closing — 28 of 36 recently updated issues remain open.

---

## 2. Releases

**No new releases today.** No release notes to report.

---

## 3. Project Progress (Merged/Closed PRs Today)

| # | PR | What Landed | Significance |
|---|-----|-------------|-------------|
| **#7031** | [fix(channels): redact Discord delivery failure targets](https://github.com/zeroclaw-labs/zeroclaw/pull/7031) | Discord attachment failures no longer echo raw marker targets; only failed-file-count is reported. | Reduces information leakage in channel error paths. |
| **#6983** | [fix(runtime): fall back before visible stream errors](https://github.com/zeroclaw-labs/zeroclaw/pull/6983) | Restores the stream-error recovery path from #4675. On pre-visible-failure, `turn_streamed` retries via non-streaming channel. | Resolves cases where certain provider failures produced silent blank responses to users. |
| **#6979** | [fix(email): ignore blank SMTP credential overrides](https://github.com/zeroclaw-labs/zeroclaw/pull/6979) | Blank `smtp_username`/`smtp_password` values now correctly fall back to shared IMAP credentials. | Fixes the issue reported in #6881; deployed the same day. |
| **#6974** | [fix(web_fetch): honor private DNS host allowlist](https://github.com/zeroclaw-labs/zeroclaw/pull/6974) | `web_fetch.allowed_private_hosts` can explicitly bypass DNS public-IP validation. | Security hardening — allows intentional private-host fetching while keeping SSRF guard intact. |
| **#6972** | [fix(tools): resolve image_info paths through policy](https://github.com/zeroclaw-labs/zeroclaw/pull/6972) | `ImageInfoTool` now resolves paths through `PathGuardedTool` before proceeding. | Completes the path-resolution fix lost during the #6074 bulk revert. |
| **#6931** | [fix(channels): restore date-only channel prompt context](https://github.com/zeroclaw-labs/zeroclaw/pull/6931) | Switches channel prompt date context from wall-clock datetime to date + UTC offset, preventing prompt cache churn every second. | Recovery slice from the #6074 revert audit; improves prompt cache hit rates. |
| **#6904** | [feat(channels): define lean default channel bundle](https://github.com/zeroclaw-labs/zeroclaw/pull/6904) | Narrows the default build to ACP server, webhook, email, and Telegram only. Long-tail channels (QQ, IRC, Mattermost, WeCom, etc.) are opt-in. | Reduces binary bloat and maintenance surface, aligns with the "keep core lean" discussion from #6165. |
| **#6833** | [feat(tools): add Jina AI as web_search provider](https://github.com/zeroclaw-labs/zeroclaw/pull/6833) | Jina AI search and parse support added with free-tier-friendly defaults. | Responds to #6827; gives users a zero-credit-card web search option. |
| **#7049** | [fix(providers): omit temperature for kimi-k2 models in compatible.rs](https://github.com/zeroclaw-labs/zeroclaw/pull/7049) | `OpenAiCompatibleModelProvider` no longer forces `temperature: 0.7` when the model enforces a fixed temperature. | Closes #7022; unblocks Moonshot Kimi k2.5/k2.6 users. |

---

## 4. Community Hot Topics

### 🔥 Top Issues by Engagement

1. **[#5146 — Token consumption minimization via skill compilation](https://github.com/zeroclaw-labs/zeroclaw/issues/5146)** (8 comments, 👍1)
   The most-discussed active issue. Users are questioning why a 400+ line SKILL.md prose document is injected on every LLM call for simple tasks (e.g., weather lookup). The underlying need: **skill compilation/minimization** — distilling skills to the minimal tool-call specification only when the agent has already selected that skill, rather than injecting the full Markdown body into every prompt. This is a core cost-efficiency concern.

2. **[#5962 — Ollama Provider call failed when tools are needed](https://github.com/zeroclaw-labs/zeroclaw/issues/5962)** (6 comments)
   Users report that after a failed tool-using request through Ollama, *all* subsequent messages in the same session fail. The underlying need: **session-level error isolation** — the provider error should not permanently poison the conversation state.

3. **[#6378 — Discord Bot respond only in specific channels](https://github.com/zeroclaw-labs/zeroclaw/issues/6378)** (6 comments)
   Requests `allowed_channels` config for Discord, mirroring `allowed_rooms` already supported by Matrix and Nextcloud Talk. Underlying need: **consistent channel-scoping policy across all messaging providers**.

### 🔥 Notable Open PRs

- **[#6848 — introduce zerocode TUI, RPC socket transport, DenyWithEdit approval, and beta-2 integration](https://github.com/zeroclaw-labs/zeroclaw/pull/6848)** — The largest open PR (size: XL). Intended as the basis for v0.8.0-beta-2. Covers TUI, transport, provider spanning, and every major crate. A workhorse PR.
- **[#7067 — Phase 0 agent eval harness](https://github.com/zeroclaw-labs/zeroclaw/pull/7067)** — Deterministic replay eval for LLM trace fixtures. Directly implements the request from #7065.
- **[#7066 — excise default-model-provider credential fallback](https://github.com/zeroclaw-labs/zeroclaw/pull/7066)** — Implements the V3 schema cleanup requested in issue #7059.

---

## 5. Bugs & Stability (Reported Today)

| Severity | # | Issue | Status | Fix in Progress |
|----------|---|-------|--------|-----------------|
| 🔴 P1 / S2 | **[#6472](https://github.com/zeroclaw-labs/zeroclaw/issues/6472)** | Gateway panics on PostgreSQL: "Cannot start a runtime from within a runtime" | In-progress | No fix PR opened yet |
| 🔴 P1 | **[#6302](https://github.com/zeroclaw-labs/zeroclaw/issues/6302)** | Gemini returns 400: assistant `tool_call` emitted before first user turn (history serializer invariant) | In-progress | No fix PR yet; critical for Gemini users |
| 🔴 P1 | **[#6350](https://github.com/zeroclaw-labs/zeroclaw/issues/6350)** | WhatsApp Web `allowed-numbers` bypassed for LID-based contacts; silent message drops | In-progress | No fix PR yet; silent security failure |
| 🔴 P1 | **[#7063](https://github.com/zeroclaw-labs/zeroclaw/issues/7063)** | Channel-served agents bypass per-agent tool allowlist (`apply_policy_tool_filter` skipped in `start_channels`) | **Just reported** | No fix; new security boundary escape |
| 🔴 P1 | **[#5155](https://github.com/zeroclaw-labs/zeroclaw/issues/5155)** | Delegate agents ignore `prompt_injection_mode`; always inject full skills (compact config overridden) | In-progress | No fix PR yet |
| 🟡 P2 | **[#6683](https://github.com/zeroclaw-labs/zeroclaw/issues/6683)** | `skill_manage patch` ignores cooldown — unbounded patches per skill | In-progress | Exists in test code but not wired into production path |
| 🟡 P2 | **[#6645](https://github.com/zeroclaw-labs/zeroclaw/issues/6645)** | `SkillImprover` and `skill_manage` only handle `SKILL.toml`, not `manifest.toml` | Accepted, not started | Bundled skills use `manifest.toml`; these tools silently skip them |
| 🟢 Info | **[#7068](https://github.com/zeroclaw-labs/zeroclaw/issues/7068)** | Telegram sends internal tool transcript/scratchpad as final response when using Codex backend | Open, 1 comment | Telemetry/routing bug |

**Key risk:** Issue #7063 is a newly reported **security gap** — channel-routed agents (Telegram, webhook, etc.) can use any tool regardless of the configured `allowed_tools` policy. If confirmed, this should be fast-tracked.

---

## 6. Feature Requests & Roadmap Signals

| # | Feature | Signal Strength | Likely Target |
|---|---------|----------------|---------------|
| **[#7065](https://github.com/zeroclaw-labs/zeroclaw/issues/7065)** | Agent evaluation harness (`zeroclaw eval`) — replay + live modes | **High** — PR #7067 already open on same day | v0.8.0 or v0.8.1 |
| **[#5146](https://github.com/zeroclaw-labs/zeroclaw/issues/5146)** | Token minimization via skill compilation | **High** — most-commented active issue, |v1 concern | Likely v0.9 or v1.0 |
| **[#6250](https://github.com/zeroclaw-labs/zeroclaw/issues/6250)** | Extract `require_auth` to route-layer middleware on `/api/config` and `/api/onboard` | Medium — accepted, P1 | v0.8.x |
| **[#6289](https://github.com/zeroclaw-labs/zeroclaw/issues/6289)** | Prompt-triggered install suggestions for missing skills/plugins | Medium — ties to #6253 v0.7.6 tracker | v0.8.0-beta-2 or v0.8.1 |
| **[#6365](https://github.com/zeroclaw-labs/zeroclaw/issues/6365)** | Dashboard "Update ZeroClaw" button | Medium — in-progress | v0.8.0-beta-2 |
| **[#4853](https://github.com/zeroclaw-labs/zeroclaw/issues/4853)** | Install skills from `.well-known` URI (Agent Skills group standard) | Medium — aligns with Cloudflare/Vercel adoption | v0.8.1+ |

**Prediction:** The eval harness (#7065/#7067) is the newest feature request that is most likely to land in the next release cycle (v0.8.1), given that a working PR already exists. Skill compilation (#5146) is the most impactful long-term item but architecturally complex — likely a v1.0 milestone.

---

## 7. User Feedback Summary

**Pain Points (High Impact):**
- **Token waste on skill injection**: Users are frustrated (and rightly so) that every LLM call pays for 400+ lines of skill prose it doesn't need. This is the single most-discussed UX/cost issue ([#5146](https://github.com/zeroclaw-labs/zeroclaw/issues/5146)).
- **Provider session poisoning**: Ollama failures break entire sessions ([#5962](https://github.com/zeroclaw-labs/zeroclaw/issues/5962)). Gemini users experience workflow-blocking 400s due to chat history ordering ([#6302](https://github.com/zeroclaw-labs/zeroclaw/issues/6302)). These are S1 blockers for affected users.
- **Security policy bypass**: The WhatsApp `allowed-numbers` ([#6350](https://github.com/zerocaw-labs/zeroclaw/issues/6350)) and channel tool-allowlist ([#7063](https://github.com/zeroclaw-labs/zeroclaw/issues/7063)) gaps mean configured security boundaries are silently ineffective. Users relying on these controls have a false sense of safety.

**Use Cases:**
- Multi-channel deployments (Discord + Telegram + WhatsApp) with per-channel throttling and allowlist needs.
- Self-hosted inference behind corporate TLS PKI ([PR #5797](https://github.com/zeroclaw-labs/zeroclaw/pull/5797)).
- Delegated agent workflows (Codex backend via Telegram) with tool delegation.
- Fleet of machines connected via gateway WebSocket nodes.

**Satisfaction Signals:**
- Users are actively contributing fixes (9 closed PRs today from 5 different contributors), indicating healthy community buy-in.
- The lean channel bundle initiative (#6904/#6895) responds to real bloat complaints.
- Jina AI web search addition addresses a real need for a free-tier search provider.

---

## 8. Backlog Watch

These important items have been open for extended periods without resolution:

| # | Issue | Days Open | Why It Needs Attention |
|---|-------|-----------|----------------------|
| **[#5146](https://zeroclaw-labs/zeroclaw/issues/5146)** | Token minimization via skill compilation | ~65 days | Most-commented issue; directly impacts cost for every user |
| **[#5962](https://zeroclaw-labs/zeroclaw/issues/5962)** | Ollama provider session poisoning | ~42 days | S1 for Ollama users; no PR yet |
| **[#5155](https://zeroclaw-labs/zeroclaw/issues/5155)** | Delegate agents ignore `prompt_injection_mode` | ~65 days | Delegate path,; fix requires a small targeted change |
| **[#4853](https://zeroclaw-labs/zeroclaw/issues/4853)** | Install skills from `.well-known` URI | ~67 days | External standards body (Agent Skills group) is moving forward; ZeroClaw should adopt |
| **[#6472](https://zeroclaw-labs/zeroclaw/issues/6472)** | Gateway panics on PostgreSQL | ~27 days | PostgreSQL is a first-class documented storage backend; this is a runtime crash |
| **[#6350](https://zeroclaw-labs/zeroclaw/issues/6350)** | WhatsApp LID bypass on `allowed-numbers` | ~30 days | Silent security failure; no observable error to the operator |
| **[#6302](https://zeroclaw-labs/zeroclaw/issues/6302)** | Gemini history serializer invariant violation | ~30 days | Blocks all Gemini users with tool calls |
| **[#5797](https://zeroclaw-labs/zeroclaw/pull/5797)** | TLS CA cert path for custom providers | ~47 days (PR) | Open PR; enterprise/corporate deployments are blocked without this |

---

*Analysis generated by OWL — ZOO | Data reflects GitHub activity as of 2026-06-02*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/DenisZheng/agents-radar).*