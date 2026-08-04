# OpenClaw Ecosystem Digest 2026-08-04

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-08-04 01:55 UTC

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

# OpenClaw Project Digest — 2026-08-04

## 1. Today's Overview

OpenClaw shows **extremely high velocity** with 500 issues and 500 PRs updated in the last 24 hours — an order of magnitude above typical open-source projects. Two patch releases (v2026.7.1-1 and v2026.7.1-2) shipped yesterday addressing Codex turn completion and npm plugin metadata handling. The backlog contains **467 open issues**, with a disproportionate share tagged **P1** and rated **"diamond lobster" (🦞)** — the project's highest severity tier — signaling systemic reliability problems in session state, message delivery, and provider failover. Maintainer-authored PRs (vincentkoc, steipete, joshavant) dominate recent merges, focusing on QA hardening, test isolation, and config schema corrections. The project is in a **stabilization sprint** rather than feature development.

---

## 2. Releases

### v2026.7.1-2 — `openclaw 2026.7.1-2` (2026-08-03)
**Fix:** npm plugin updates now accept singleton-array metadata from newer npm clients, allowing tracked official plugins to install and update to correction releases.  
**PR:** #108336  
**Impact:** Low — plugin ecosystem compatibility fix; no breaking changes.

### v2026.7.1-1 — `openclaw 2026.7.1-1` (2026-08-03)
**Fixes:**
- **Codex progress replies:** Keep app-server turns running after delivered progress messages so GPT/Codex reaches its authoritative terminal response instead of stopping mid-turn. (#106961, #108487)
- **Memory Core startup repair:** Recover derived legacy-index and ca (truncated in source)

**Impact:** Medium — addresses a core Codex integration regression where turns terminated prematurely. No migration needed.

---

## 3. Project Progress (Merged/Closed PRs Today)

| PR | Type | Summary | Area |
|----|------|---------|------|
| [#119032](https://github.com/openclaw/openclaw/pull/119032) | QA | Prove agent session scope continuity — real child-gateway test for canonical session reuse | `qa-lab`, `agents` |
| [#119021](https://github.com/openclaw/openclaw/pull/119021) | QA | Prove workspace mutation tools (`apply_patch`, `edit`) persist exact bytes and return actionable receipts | `qa-lab`, `tools` |
| [#118854](https://github.com/openclaw/openclaw/pull/118854) | Fix | Keep plugin model allowlists static; preserve runtime normalization for requested/resolved models | `gateway`, `plugins` |
| [#119046](https://github.com/openclaw/openclaw/pull/119046) | Fix | `gateway call` now honors local `--port` flag | `cli` |
| [#119045](https://github.com/openclaw/openclaw/pull/119045) | Fix | Stop xAI realtime sessions when playback acknowledgements stall (related to #116201) | `xai`, `realtime` |
| [#118781](https://github.com/openclaw/openclaw/pull/118781) | Fix | Isolate shared state between test files; resolves release-gate failures from cross-test pollution | `test`, `maintainer` |

**Pattern:** Maintainer-led QA hardening and config/schema correctness. No user-facing features merged today.

---

## 4. Community Hot Topics (Most Active Issues/PRs)

| Item | Comments | Reactions | Core Issue |
|------|----------|-----------|------------|
| [#116277](https://github.com/openclaw/openclaw/issues/116277) **CLOSED** | 100 | 0 | DeepSeek v4 Flash silent reply failure — "No reply was generated" fallback |
| [#116201](https://github.com/openclaw/openclaw/issues/116201) **OPEN** | 52 | 0 | Realtime voice retains unbounded provider/consult state — memory growth under slow/bursty conditions |
| [#7707](https://github.com/openclaw/openclaw/issues/7707) **OPEN** (2026-02) | 24 | 0 | **Memory Trust Tagging by Source** — prevent memory poisoning from untrusted content (web, 3rd-party) |
| [#44925](https://github.com/openclaw/openclaw/issues/44925) **OPEN** | 23 | 2 | Subagent completion silently lost — no retry, notification, or auto-restart on timeout |
| [#87744](https://github.com/openclaw/openclaw/issues/87744) **OPEN** | 17 | 3 | Codex-backed Telegram turns repeatedly time out waiting for `turn/completed` (since 2026.5.27) |
| [#84516](https://github.com/openclaw/openclaw/issues/84516) **OPEN** | 11 | 2 | Codex app-server: long replies silently truncated at ~1000-1100 chars (`stop=null`, `aborted=false`) |
| [#42840](https://github.com/openclaw/openclaw/issues/42840) **OPEN** | 9 | 10 👍 | **MathJax/LaTeX rendering in Control UI** — high community demand |
| [#118785](https://github.com/openclaw/openclaw/issues/118785) **OPEN** | 8 | 0 | QA: primary proof for 23 container IDs + 31 external app SDK IDs |

**Underlying Needs:**
- **Reliability over features:** Top issues are all P1 session-state/message-loss bugs
- **Observability gaps:** Multiple issues cite "silent" failures — no logs, no retries, no user notification
- **Provider integration fragility:** Codex, DeepSeek, xAI realtime all show integration-specific regressions
- **Memory system confusion:** #43747 (11 comments) describes "memory management in chaos" across team members

---

## 5. Bugs & Stability (Ranked by Severity)

### 🔴 Critical (P1, Diamond Lobster 🦞 — Session State / Message Loss)

| Issue | Status | Fix PR | Summary |
|-------|--------|--------|---------|
| [#116277](https://github.com/openclaw/openclaw/issues/116277) | **CLOSED** | Likely in v2026.7.1-1 | DeepSeek v4 Flash silent reply failure |
| [#116201](https://github.com/openclaw/openclaw/issues/116201) | **OPEN** | [#119045](https://github.com/openclaw/openclaw/pull/119045) (xAI partial) | Realtime voice unbounded state retention |
| [#44925](https://github.com/openclaw/openclaw/issues/44925) | **OPEN** | None | Subagent completion silently lost — no retry/notify/restart |
| [#87744](https://github.com/openclaw/openclaw/issues/87744) | **OPEN** | None | Codex Telegram turns timeout on `turn/completed` |
| [#84516](https://github.com/openclaw/openclaw/issues/84516) | **OPEN** | None | Codex replies silently truncated at ~1k chars |
| [#67777](https://github.com/openclaw/openclaw/issues/67777) | **OPEN** | None | Subagent completion lost on direct-announce timeout/drain/orphan prune |
| [#116022](https://github.com/openclaw/openclaw/issues/116022) | **OPEN** | None | `/new` reuses stable session ID, cannot recover retired Codex binding tombstone |
| [#115700](https://github.com/openclaw/openclaw/issues/115700) | **OPEN** | None | `chat.send` rejected with "thread switched branches" — stale `expectedLeafEntryId` |
| [#115037](https://github.com/openclaw/openclaw/issues/115037) | **OPEN** | None | Synthetic "No response requested" on resume triggers silent model downgrade |
| [#114234](https://github.com/openclaw/openclaw/issues/114234) | **OPEN** | None | Usage-cost refresh lock never releasable after container PID reuse |
| [#111010](https://github.com/openclaw/openclaw/issues/111010) | **OPEN** | None | Detached Codex subagents lose hook relay when parent turn releases |
| [#54488](https://github.com/openclaw/openclaw/issues/54488) | **OPEN** | None | Followup drain monopolizes session lane 20-30 min, blocks inbound dispatch |
| [#45573](https://github.com/openclaw/openclaw/issues/45573) | **OPEN** | None | Group chat sessions not persisted — only 1 session from 166+ messages |
| [#44134](https://github.com/openclaw/openclaw/issues/44134) | **OPEN** | None | Google Antigravity ban from frequent tool schema reloading (false positive) |

### 🟠 High (P1/P2, Platinum Hermit 🐚 / Silver Shellfish 🦪)

| Issue | Status | Fix PR | Summary |
|-------|--------|--------|---------|
| [#89315](https://github.com/openclaw/openclaw/issues/89315) | **OPEN** | None | Gateway heap grows unbounded → OOM kill on systemd --user (6 comments, 3 👍) |
| [#91144](https://github.com/openclaw/openclaw/issues/91144) | **OPEN** | [#119052](https://github.com/openclaw/openclaw/pull/119052) | Windows gateway Scheduled Task doesn't stay running |
| [#103804](https://github.com/openclaw/openclaw/issues/103804) | **OPEN** | None | Service-env generator double-quotes values, breaks `AWS_REGION` hostname |
| [#92633](https://github.com/openclaw/openclaw/issues/92633) | **OPEN** | None | `memory_search corpus=all` times out (15s) while individual corpora succeed |
| [#53408](https://github.com/openclaw/openclaw/issues/53408) | **OPEN** | None | Write/exec tool params silently dropped after long conversations |
| [#45494](https://github.com/openclaw/openclaw/issues/45494) | **OPEN** | None | Cron jobs silently time out during LLM outages instead of fast-failing |
| [#42820](https://github.com/openclaw/openclaw/issues/42820) | **OPEN** | None | Feishu `message` tool send action polluted by poll schema/guard |

### 🟡 Medium (P2/P3)

| Issue | Status | Fix PR | Summary |
|-------|--------|--------|---------|
| [#112906](https://github.com/openclaw/openclaw/issues/112906) | **OPEN** | None | `details` tags render broken in v2026.7.1+ (rich messages regression) |
| [#45765](https://github.com/openclaw/openclaw/issues/45765) | **CLOSED** | Likely fixed | `OPENCLAW_HOME=~/.openclaw` creates nested `~/.openclaw/.openclaw` |
| [#43747](https://github.com/openclaw/openclaw/issues/43747) | **OPEN** | None | Memory management chaos — inconsistent behavior across team |
| [#57256](https://github.com/openclaw/openclaw/issues/57256) | **OPEN** | None | `openclaw status` falsely reports mem0 as unavailable when working |

---

## 6. Feature Requests & Roadmap Signals

| Issue | Votes | Status | Likelihood for Next Version |
|-------|-------|--------|----------------------------|
| [#42840](https://github.com/openclaw/openclaw/issues/42840) MathJax/LaTeX in Control UI | 10 👍 | OPEN | **High** — clear UI gap, high community demand, low complexity |
| [#45758](https://github.com/openclaw/openclaw/issues/45758) YAML config support | 2 👍 | OPEN | **Medium** — common request, schema work needed |
| [#45508](https://github.com/openclaw/openclaw/issues/45508) Self-hosted STT/TTS in webchat | 2 👍 | OPEN | **Medium** — architectural, requires gateway changes |
| [#47910](https://github.com/openclaw/openclaw/issues/47910) Provider fallback by failure class | 0 | OPEN | **High** — addresses real pain (auth failures waste latency), maintainer interest |
| [#51441](https://github.com/openclaw/openclaw/issues/51441) Expose resolved backend model in session_status | 1 👍 | OPEN | **Medium** — observability need, LiteLLM proxy users |
| [#7707](https://github.com/openclaw/openclaw/issues/7707) Memory Trust Tagging by Source | 0 | OPEN | **Low** — security feature, needs design, "off-meta tidepool" |
| [#16670](https://github.com/openclaw/openclaw/issues/16670) Onboarding wizard: mandatory Memory/Embedding step | 1 👍 | OPEN | **High** — UX gap causing silent feature non-discovery |
| [#40786](https://github.com/openclaw/openclaw/issues/40786) `.gitignore`-like exclude patterns for backup CLI | 1 👍 | OPEN | **Medium** — practical, low risk |
| [#39406](https://github.com/openclaw/openclaw/issues/39406) Suppress transient tool error warnings | 1 👍 | OPEN | **Medium** — UX polish, config flag only |
| [#45501](https://github.com/openclaw/openclaw/issues/45501) Configurable `session.resetPrompt` | 1 👍 | OPEN | **Low** — niche customization |

**Prediction:** Next patch (v2026.7.1-3) will likely include MathJax support (#42840), provider fallback classification (#47910), and onboarding memory step (#16670). YAML config (#45758) and STT/TTS (#45508) are 1-2 releases out.

---

## 7. User Feedback Summary

### Pain Points (from issue narratives)
- **"Silent failures everywhere"** — Users repeatedly report: no error, no log, no retry, no notification. Subagent completions vanish (#44925, #67777), Codex turns truncate (#84516), model fallbacks happen invisibly (#115037).
- **"Memory is broken/confusing"** — #43747: team of 3 sees 3 different memory behaviors. #45573: 166 messages → 1 session. #92633: `corpus=all` times out but parts work.
- **"Provider integrations feel fragile"** — Codex (#8774

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: Personal AI Assistant / Agent Open-Source Ecosystem (2026-08-04)

---

## 1. Ecosystem Overview

The personal AI agent ecosystem shows **bimodal velocity**: a cluster of 5–6 projects (OpenClaw, NanoBot, Hermes Agent, IronClaw, CoPaw, ZeroClaw) operating at **high-to-extreme velocity** (50–500+ daily PR/issue updates), while the remainder are in **maintenance/stabilization** or **early-stage** phases. Across the board, **reliability hardening** dominates over feature development — session-state integrity, provider integration resilience, memory-system correctness, and cross-platform desktop stability are universal preoccupations. Release cadences vary: some projects (OpenClaw, Hermes Agent, CoPaw) ship frequent patches/betas; others (IronClaw, ZeroClaw) are in pre-milestone architectural transitions. Community scale ranges from **hundreds of contributors** (OpenClaw, Hermes Agent) to **small core teams** (Moltis, NullClaw, PicoClaw).

---

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Release Status | Health Score | Primary Phase |
|---------|--------------|-----------|----------------|--------------|---------------|
| **OpenClaw** | 500 | 500 | v2026.7.1-2 (patch, 2026-08-03) | 🟡 Caution | Stabilization sprint |
| **NanoBot** | ~10* | 36 | None today | 🟢 Healthy | Active maintenance |
| **Hermes Agent** | 50 | 50 | v0.20.0 "Herald" (2026-08-03) | 🟡 Caution | Post-release stabilization |
| **PicoClaw** | 8 | 5 | None (0.3.1 latest) | 🟢 Moderate | Stabilization |
| **NanoClaw** | ~5* | 9 | None | 🟢 Moderate | Container hardening |
| **NullClaw** | 1 | 5 | None | 🟢 Moderate | Streaming tool-call completion |
| **IronClaw** | 46 | 50 | Pending (#5598, 32 days open) | 🟡 Caution | Wave 3 architectural refactor |
| **LobsterAI** | 2* | 11 | None (v2026.3.30 latest) | 🟡 Moderate | Maintenance/stabilization |
| **TinyClaw** | 0 | 0 | — | 🔴 Inactive | No recent activity |
| **Moltis** | 0 | 1 | None | 🟡 Early | Focused feature development |
| **CoPaw (QwenPaw)** | 23 | 50 | v2.1.0-beta.1 (2026-08-03) | 🟢 Healthy | Pre-stable beta |
| **ZeptoClaw** | 0 | 0 | — | 🔴 Inactive | No recent activity |
| **ZeroClaw** | 50 | 50 | None (pre-v0.9.0) | 🟡 Caution | Pre-milestone hardening |

*Estimated from digest narratives where exact counts not provided.

---

## 3. OpenClaw's Position

### Advantages vs Peers
- **Scale & Velocity**: 10× typical OSS activity (500 issues/PRs/day); 467 open issues with formal severity tiering (P1, "diamond lobster").
- **Contributor Depth**: Maintainer-led (vincentkoc, steipete, joshavant) but with broad community; QA lab infrastructure (#119032, #119021) for session-scope and tool-persistence proofs.
- **Integration Breadth**: Codex, DeepSeek, xAI, Telegram, Google Antigravity, npm plugin ecosystem — more provider/channel surface than any peer.

### Technical Approach Differences
- **Session-State as Core Abstraction**: Turn lifecycle, binding tombstones, lane management, followup drains — OpenClaw treats session continuity as a kernel problem, not a UI concern.
- **Plugin/Provider Model**: Formal allowlists, runtime normalization, singleton-array metadata handling — designed for ecosystem extensibility.
- **Observability Gaps Acknowledged**: Explicit "silent failure" taxonomy (no logs, no retries, no notifications) driving QA investment.

### Community Size
- **Largest visible contributor base** (implied by 650+ Hermes Agent contributors vs OpenClaw's maintainer-dominated merges but higher raw velocity).
- **Highest issue density** — 467 open issues with structured severity suggests both scale and systematic triage.

---

## 4. Shared Technical Focus Areas

| Requirement | Projects Affected | Specific Needs |
|-------------|-------------------|----------------|
| **Session/turn reliability** | OpenClaw, Hermes Agent, CoPaw, ZeroClaw, IronClaw | Silent turn truncation (OpenClaw #84516), subagent completion loss (OpenClaw #44925), agent amnesia after failure (IronClaw #7075), approval timeout = denial (ZeroClaw #9642) |
| **Provider integration resilience** | OpenClaw, NanoBot, Hermes Agent, CoPaw, NullClaw, ZeroClaw | Opus 5 temp param (NanoBot #5235), DeepSeek silent failure (OpenClaw #116277), GPT-5.6 prompt caching (CoPaw #6649), streaming tool-calls (NullClaw #964/#965), Responses API proxy (ZeroClaw #9606) |
| **Memory system correctness** | OpenClaw, Hermes Agent, PicoClaw, ZeroClaw, IronClaw | Trust tagging by source (OpenClaw #7707), background review misclassification (Hermes #30220), routed-agent session parity (PicoClaw #3301), consolidation with schema validation (ZeroClaw #6998) |
| **Cross-platform desktop stability** | Hermes Agent, CoPaw, ZeroClaw, LobsterAI | WebView2 crashes (CoPaw #6647), macOS blank window (ZeroClaw #7527), Windows venv/.pyd locks (Hermes #78084/#78089), NSIS process leaks (LobsterAI #2420) |
| **Gateway/channel reliability** | OpenClaw, Hermes Agent, PicoClaw, NullClaw, ZeroClaw, IronClaw | Telegram gateway hangs (Hermes #67498, OpenClaw #87744), MCP failure hangs agent (PicoClaw #3269), Slack silence during long turns (ZeroClaw #7113), Telegram raw markdown (IronClaw #7072) |
| **Observability & audit integrity** | OpenClaw, ZeroClaw, IronClaw, NanoClaw | Turn-level OTel traces (ZeroClaw #6641), error recoverability contract (IronClaw #6284), engagement consistency (NanoClaw #3137), audit log corruption (ZeroClaw #9642) |

---

## 5. Differentiation Analysis

| Dimension | OpenClaw | NanoBot | Hermes Agent | PicoClaw | NanoClaw | CoPaw | ZeroClaw | IronClaw |
|-----------|----------|---------|--------------|----------|----------|-------|----------|----------|
| **Primary Focus** | Session kernel, provider breadth | Provider agility, WebUI polish | Multi-channel gateway, desktop app | Multi-tenant dispatch, Web UI perf | Container/engagement ops, iMessage | Multi-agent UX, ACP/skill ecosystem | Auth/security contracts, goal mode | Component contracts, hermetic testing |
| **Target Users** | Power users, plugin authors, integrators | Early model adopters, multi-provider users | Telegram/desktop power users, self-hosters | Discord/Telegram bot admins, multi-agent deployers | Enterprise/ops teams, channel managers | Developers, multi-agent workflow builders | Security-conscious self-hosters, SOP users | Platform builders, extension authors |
| **Architecture** | Monolithic core + plugin gateway | Modular provider/channel adapters | Gateway-centric, Tauri desktop | Dispatch-router + Web UI | Skill-based engagement, containerized agents | ACP-native, skill-first, subagent-heavy | Capability contracts, Matrix-native | WIT/Wasmi component model, layered crates |
| **Release Cadence** | Frequent patches (v2026.7.1-2) | As-needed, rapid fixes | Major + patches (v0.20.0 → v0.20.1 imminent) | Patch accumulation (0.3.2 pending) | Operational skills + container repins | Beta → stable (v2.1.0-beta.1) | Milestone-driven (v0.9.0) | Weekly Wednesday (blocked) |
| **Unique Strength** | Session-state depth, QA lab | Day-zero model support, i18n | Gateway/channel maturity, contributor scale | Dispatch rules, systemd integration | Engagement wiring, approval UX | Subagent tooling, ACP alignment | RFC-governed security architecture | Hermetic testing, component contracts |

---

## 6. Community Momentum & Maturity

| Tier | Projects | Characteristics |
|------|----------|-----------------|
| **Rapidly Iterating (High Velocity + Active Triage)** | OpenClaw, NanoBot, Hermes Agent, CoPaw, ZeroClaw | 50–500 daily updates; same-day critical fixes (NanoBot Opus 5, CoPaw WebView2); beta/milestone driven |
| **Stabilizing (Focused Fixes, Low Feature Churn)** | PicoClaw, NanoClaw, NullClaw, LobsterAI | 5–15 daily updates; patch accumulation; specific pain points (Web UI lag, MCP hangs, NSIS leaks) |
| **Architectural Transition (High Churn, Blocked Releases)** | IronClaw | 96 daily items but release PR stalled 32 days; Wave 3 refactor absorbing capacity; bug bash surfaced 7 P1/P2 |
| **Early / Niche** | Moltis | Single active PR (MCP repo bundles); no community feedback loop yet |
| **Dormant** | TinyClaw, ZeptoClaw | Zero 24h activity |

**Key Insight**: The "Rapidly Iterating" tier all share **provider/channel integration breadth** and **user-facing desktop/gateway surfaces** — they feel ecosystem pressure to support new models (Opus 5, GPT-5.6) and channels (Telegram, Slack, Matrix) immediately.

---

## 7. Trend Signals for AI Agent Developers

| Trend | Evidence | Strategic Value |
|-------|----------|-----------------|
| **Session continuity = kernel problem** | OpenClaw turn lifecycle, Hermes Agent error recoverability epic, ZeroClaw goal mode, IronClaw hermetic journey testing | Invest in **turn-level state machines** with explicit persistence, retry, and observability — not ad-hoc conversation history |
| **Provider abstraction must be version-aware** | NanoBot Opus 5 fix (model-family thresholds), CoPaw GPT-5.6 caching params, NullClaw streaming tool-calls, ZeroClaw Responses API proxy | Build **declarative capability contracts** per model family (not per model); expect rapid API evolution |
| **Memory systems need trust boundaries** | OpenClaw #7707 (source tagging), Hermes #30220 (misclassification), ZeroClaw #6998 (schema validation) | Design **provenance-tracked memory** with source trust tiers; separate authoritative storage from enrichment |
| **Desktop reliability is a differentiator** | CoPaw WebView2 crashes, Hermes Windows venv locks, ZeroClaw macOS blank window, LobsterAI NSIS fixes | **Bundled runtimes** (Python, Node), **process isolation**, and **crash-recovery UX** are table stakes for desktop agents |
| **MCP/Tool ecosystem standardization accelerating** | NullClaw streaming tool-calls, PicoClaw MCP hang, ZeroClaw SSRF gates, IronClaw MCP auth, Moltis repo bundles | **Remote MCP servers** with auth, transport pinning, and rollback will be the primary extensibility vector |
| **Audit/observability becoming compliance requirements** | ZeroClaw approval timeout = denial (#9642), IronClaw error recoverability contract, NanoClaw engagement consistency | **Turn-correlated traces** and **immutable decision logs** are moving from nice-to-have to security requirements |
| **Multi-agent UX still unsolved** | CoPaw #6621 (guidance), OpenClaw subagent hook relay (#111010), IronClaw multi-tool orchestration (#7074) | **Delegation protocols** (ACP), **cross-session context**, and **artifact namespacing** are the next UX frontier |

---

## Summary for Decision-Makers

- **OpenClaw** remains the **reference implementation for session-kernel depth** but carries highest technical debt in silent-failure observability.
- **NanoBot** and **CoPaw** lead on **provider agility and multi-agent tooling** — best signals for frontier-model integration patterns.
- **ZeroClaw** and **IronClaw** are investing in **formal contracts (RFC-governed, component-model)** — highest long-term architectural leverage but delayed releases.
- **Hermes Agent** has the **broadest channel/gateway maturity** and contributor scale — best reference for Telegram/desktop deployment.
- **PicoClaw**, **NanoClaw**, **NullClaw** demonstrate **niche operational excellence** (dispatch rules, engagement wiring, streaming tool-calls) — valuable for specific deployment models.

**Recommendation**: Teams building production agents should **adopt OpenClaw's session-state patterns**, **NanoBot's provider capability contracts**, **ZeroClaw's security/contract governance**, and **CoPaw's subagent/ACP tooling** — no single project leads all dimensions.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-08-04

## 1. Today's Overview
NanoBot shows **high velocity** with 36 PRs updated in the last 24 hours (24 merged/closed, 12 open), indicating an active maintenance and feature-development cycle. No new releases were published today. The project is actively addressing a critical Anthropic Opus 5 compatibility bug (#5235) and has closed a frontend MIME-type loading issue (#5190). PR activity spans provider integrations (Anthropic, DeepSeek, Gemini, Mattermost, ModelScope, Eden AI), WebUI/i18n polish, session/memory architecture, and gateway stability—signaling a broad, healthy contributor base.

## 2. Releases
**No new releases today.** The last release data is not provided in the current window.

## 3. Project Progress (Merged/Closed PRs Today)
| PR | Type | Summary | Area |
|----|------|---------|------|
| [#5228](https://github.com/HKUDS/nanobot/pull/5228) | Bug fix (P1) | Persist & display actual local trigger messages in WebUI session popover | WebUI, Automation |
| [#5227](https://github.com/HKUDS/nanobot/pull/5227) | Bug fix (P1) | Complete i18n audit: key/interpolation parity, fix CN terminology (网页→网络, 网页搜索→网络搜索), localize hardcoded labels | WebUI, i18n |
| [#5232](https://github.com/HKUDS/nanobot/pull/5232) | Feature (P2) | Add `groupPolicyInThread` for Mattermost: separate mention policy for threads vs. main channels, exposed in WebUI | Channel (Mattermost), WebUI |
| [#5214](https://github.com/HKUDS/nanobot/pull/5214) | Bug fix (P1) | Keep DeepSeek reasoning items wire-valid when replaying via OpenAI Responses API | Provider (DeepSeek) |
| [#5215](https://github.com/HKUDS/nanobot/pull/5215) | Bug fix (P1) | Deterministically close agent resources (exec sessions, MCP subprocesses) on gateway stop | Gateway, Stability |
| [#5229](https://github.com/HKUDS/nanobot/pull/5229) | Bug fix (P2) | Stabilize thread during IME input: defer autosizing, preserve scroll position | WebUI, Mobile/IME |
| [#5226](https://github.com/HKUDS/nanobot/pull/5226) | Bug fix (P2) | Dismiss mobile keyboard after send on touch-primary devices | WebUI, Mobile UX |
| [#5213](https://github.com/HKUDS/nanobot/pull/5213) | Bug fix (P2) | Fall back to `uv` when `pip` unavailable for plugin installation | Plugins, Installer |
| [#5141](https://github.com/HKUDS/nanobot/pull/5141) | Bug fix (P2) | Validate cron expression syntax at schedule creation time | Cron/Scheduler |
| [#4861](https://github.com/HKUDS/nanobot/pull/4861) | Feature (P2) | Add Eden AI as OpenAI-compatible gateway provider | Provider (New) |
| [#5038](https://github.com/HKUDS/nanobot/pull/5038) | Docs (P2) | Document ModelScope (魔搭) provider with JSON examples, image-gen setup, token guide | Docs, Provider |
| [#1550](https://github.com/HKUDS/nanobot/pull/1550) | Feature (Conflict) | Dual-mode `openai_codex`: OAuth + custom Responses API (api_base/api_key) | Provider (Codex) |

**Net progress**: 14 PRs merged/closed today covering P1 stability fixes (gateway, DeepSeek, WebUI triggers/i18n), P2 UX polish (IME, mobile keyboard, Mattermost threads), new provider integrations (Eden AI, ModelScope docs), and legacy PR resolution (Codex dual-mode).

## 4. Community Hot Topics
| Item | Type | Activity | Signal |
|------|------|----------|--------|
| [#5235](https://github.com/HKUDS/nanobot/issues/5235) | Issue (Open) | 1 comment, created 2026-08-03 | **Critical Anthropic Opus 5 compatibility**: `omit_temperature` substring list lacks `"opus-5"`; Opus 5 fully deprecates temperature → every request sends invalid param. Immediate blocker for Opus 5 users. |
| [#5236](https://github.com/HKUDS/nanobot/pull/5236) | PR (Open) | Created 2026-08-04 | **Fix for #5235**: Replaces hard-coded exclusions with model-family version thresholds; adds adaptive thinking + `output_config.effort` for Opus 5. High priority, likely to merge fast. |
| [#5234](https://github.com/HKUDS/nanobot/pull/5234) | PR (Open) | Created 2026-08-03 | **New provider: mst-python (Meta-Search Tool)**: Aggregates DuckDuckGo, Google, Brave, Bing via RRF. Community interest in richer web search coverage. |
| [#5211](https://github.com/HKUDS/nanobot/pull/5211) | PR (Open) | Updated 2026-08-03 | **Cross-session search & mentions**: `search_sessions`/`read_session`, `@` mention palette for other chats. High-value UX for power users. |
| [#5231](https://github.com/HKUDS/nanobot/pull/5231) | PR (Open) | Created 2026-08-03 | **Dream memory: archive idle sessions**: Ensures short idle sessions produce `history.jsonl` for Dream processing. Addresses memory pipeline gap. |

**Underlying needs**: (1) **Day-zero model support** — users expect new frontier models (Opus 5) to work immediately; (2) **Richer search** — single-engine search is insufficient; (3) **Conversation continuity** — cross-session context is becoming table-stakes; (4) **Memory pipeline completeness** — Dream needs reliable input for all sessions.

## 5. Bugs & Stability (Ranked by Severity)
| Severity | Issue/PR | Status | Fix PR |
|----------|----------|--------|--------|
| **Critical** | [#5235](https://github.com/HKUDS/nanobot/issues/5235) — Anthropic Opus 5 requests rejected (temperature param sent despite deprecation) | Open | [#5236](https://github.com/HKUDS/nanobot/pull/5236) (open, same-day) |
| **High** | [#5230](https://github.com/HKUDS/nanobot/pull/5230) — Gemini 400 INVALID_ARGUMENT on unsigned tool calls during provider replay | Open (P1) | PR #5230 (open) |
| **High** | [#5214](https://github.com/HKUDS/nanobot/pull/5214) — DeepSeek reasoning items cause deserialization errors in Responses API replay | **Closed** | Merged #5214 |
| **High** | [#5215](https://github.com/HKUDS/nanobot/pull/5215) — Gateway stop stalls with asyncio teardown noise (exec/MCP subprocesses) | **Closed** | Merged #5215 |
| **Medium** | [#5190](https://github.com/HKUDS/nanobot/issues/5190) — Frontend module scripts served as `text/plain` (MIME type) | **Closed** | Fixed (PR not linked in data) |
| **Medium** | [#5222](https://github.com/HKUDS/nanobot/pull/5222) — Telegram fenced code corruption with special-char languages (`c++`, `html+django`) | Open (P2) | PR #5222 (open) |
| **Medium** | [#5229](https://github.com/HKUDS/nanobot/pull/5229) — IME composition causes thread scroll jump/autosize flicker | **Closed** | Merged #5229 |
| **Low** | [#5226](https://github.com/HKUDS/nanobot/pull/5226) — Mobile keyboard stays open after send | **Closed** | Merged #5226 |
| **Low** | [#5213](https://github.com/HKUDS/nanobot/pull/5213) — Plugin enable fails when `pip` missing (uv-only env) | **Closed** | Merged #5213 |

**Stability outlook**: Critical Opus 5 bug has a same-day fix PR (#5236). Two P1 provider-replay bugs (Gemini, DeepSeek) are being addressed. Gateway shutdown reliability fixed. WebUI mobile/IME polish delivered.

## 6. Feature Requests & Roadmap Signals
| Feature | Source | Likelihood for Next Version |
|---------|--------|-----------------------------|
| **Opus 5 effort controls & adaptive thinking** | [#5236](https://github.com/HKUDS/nanobot/pull/5236) | **Very High** — P1 bug fix + feature, same-day PR |
| **Meta-Search Tool (mst-python) provider** | [#5234](https://github.com/HKUDS/nanobot/pull/5234) | **High** — New provider, P1 priority, RRF aggregation addresses clear user demand |
| **Cross-session search & `@` mention other chats** | [#5211](https://github.com/HKUDS/nanobot/pull/5211) | **High** — UX differentiator, WebUI integration, read-only bounded access |
| **Dream: archive idle sessions for memory** | [#5231](https://github.com/HKUDS/nanobot/pull/5231) | **Medium-High** — Closes memory pipeline gap, low-risk |
| **Mattermost thread-level mention policy** | [#5232](https://github.com/HKUDS/nanobot/pull/5232) | **Medium** — Merged today, niche but complete |
| **Responses API capabilities declarative model** | [#5204](https://github.com/HKUDS/nanobot/pull/5204) | **Medium** — Refactor (P1, conflict), enables cleaner multi-provider routing |
| **Eden AI gateway provider** | [#4861](https://github.com/HKUDS/nanobot/pull/4861) | **Done** — Merged today |
| **ModelScope provider docs** | [#5038](https://github.com/HKUDS/nanobot/pull/5038) | **Done** — Merged today |
| **Codex dual-mode (OAuth + custom Responses)** | [#1550](https://github.com/HKUDS/nanobot/pull/1550) | **Done** — Long-standing PR merged |

**Predicted next version themes**: Opus 5 full support, multi-engine search (mst), cross-session context, Dream memory completeness, Responses API provider abstraction maturity.

## 7. User Feedback Summary
| Pain Point / Use Case | Evidence | Sentiment |
|----------------------|----------|-----------|
| **New model day-zero breakage** | #5235: Opus 5 released 2026-07-24, NanoBot still sends deprecated `temperature` | 😡 Frustration — blocker for early adopters |
| **Frontend load failure** | #5190: MIME type `text/plain` for JS modules breaks app startup | 😡 Critical — but fixed |
| **Mobile UX friction** | #5226 (keyboard dismiss), #5229 (IME scroll jump) | 😐 Annoyance — both fixed today |
| **Cross-session workflow** | #5211: Users want to search/reference other chats via `@` mentions | 😃 Strong demand — power-user workflow |
| **Richer web search** | #5234: Single-engine search insufficient; want aggregated results | 😃 Demand — mst-python addresses directly |
| **Memory pipeline gaps** | #5231: Short idle sessions invisible to Dream | 😐 Silent data loss — fix in progress |
| **Telegram code rendering** | #5222: `c++`, `objective-c` code blocks corrupted | 😐 Niche but visible — fix open |
| **Plugin install in uv-only env** | #5213: `pip` missing breaks `nanobot plugins enable` | 😐 Installer gap — fixed |

**Overall satisfaction**: High velocity on fixes suggests responsive maintainers. Critical bugs get same-day attention. Feature PRs show community expanding provider ecosystem and UX depth.

## 8. Backlog Watch (Needs Maintainer Attention)
| Item | Age | Status | Why It Matters |
|------|-----|--------|----------------|
| [#5204](https://github.com/HKUDS/nanobot/pull/5204) | Opened 2026-08-01 | Open, **conflict**, P1 | Declarative `ResponsesCapabilities` — foundational refactor for multi-provider Responses routing; blocked by conflicts, needs rebase/review |
| [#5211](https://github.com/HKUDS/nanobot/pull/5211) | Opened 2026-08-01 | Open, updated 2026-08-03 | Cross-session search/mentions — high-value UX, needs review/merge |
| [#5234](https://github.com/HKUDS/nanobot/pull/5234) | Opened 2026-08-03 | Open, P1 | New provider (mst-python) — expands search significantly, test coverage needed |
| [#5231](https://github.com/HKUDS/nanobot/pull/5231) | Opened 2026-08-03 | Open | Dream idle-session archive — memory completeness, low risk |
| [#5230](https://github.com/HKUDS/nanobot/pull/5230) | Opened 2026-08-03 | Open, P1 | Gemini replay fix — provider interop stability |
| [#5222](https://github.com/HKUDS/nanobot/pull/5222) | Opened 2026-08-03 | Open, P2 | Telegram code fence fix — user-visible corruption |
| [#5233](https://github.com/HKUDS/nanobot/pull/5233) | Opened 2026-08-03 | Open, P2 | Duplicate of merged #5232 — should be closed |

**Action items**: Prioritize review of #5236 (Opus 5 fix), #5204 (Responses refactor), #5211 (cross-session), #5234 (mst provider). Close duplicate #5233. Monitor #5230/#5222 for provider/channel stability.

---

**Project Health Score**: 🟢 **Healthy** — High merge throughput, critical bugs addressed same-day, diverse contributor base, active feature pipeline. Main risk: #5204 conflict blocking provider abstraction; Opus 5 fix must merge before next release.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-08-04

## 1. Today's Overview

Hermes Agent is in a **high-velocity post-release stabilization phase** following the major v0.20.0 "Herald Release" on August 3rd. The project shows exceptional community scale (~3,650 commits, 1,400 merged PRs, 1,200 issues closed since v0.19.0) with 650+ contributors. Current activity is intense: 50 issues and 50 PRs updated in the last 24 hours, though only 5 PRs were merged/closed today — indicating a focus on triage and fix preparation rather than landing changes. The dominant theme is **platform-specific regressions** (Windows, Telegram gateway, Desktop app) introduced in v0.20.0, with multiple P1/P2 bugs blocking users on native Windows and Telegram gateway restarts.

---

## 2. Releases

### v2026.8.3 — Hermes Agent v0.20.0 "The Herald Release" (2026-08-03)
- **Scope**: Massive release — ~3,650 commits, ~1,400 merged PRs, ~5,200 files changed, ~559K insertions, ~405K deletions, ~1,200 issues closed, 650+ contributors
- **Highlights**: The release notes were truncated in the data, but the version codename "Herald" suggests significant gateway/messaging improvements. Given the bug reports filed since release, key areas likely include Telegram gateway refactor, desktop app updates, and platform abstraction layers.
- **Breaking Changes / Migration Notes**: Not explicitly listed, but the volume of post-release regressions (Telegram gateway hang, Windows venv blocker, desktop voice conversation, config.yaml write guard) suggests **config/schema migrations** and **gateway process management changes** that affect existing installations.
- **Action Items for Users**: 
  - Windows users: expect update/install friction (see bugs below)
  - Telegram gateway operators: test restart flows before deploying
  - Profile users: verify isolation after `--clone` (known incomplete)

---

## 3. Project Progress (Merged/Closed Today)

Only **5 PRs merged/closed** in the last 24h — the team is in triage/fix-authoring mode post-release:

| PR | Type | Summary | Impact |
|----|------|---------|--------|
| [#78083](https://github.com/NousResearch/hermes-agent/pull/78083) | Bug fix (cron) | Fix binary detection: check magic bytes instead of bare NUL for lifecycle guard (#77927) | Prevents script bypass via embedded NUL bytes |
| [#78057](https://github.com/NousResearch/hermes-agent/pull/78057) | Bug fix (plugins) | Gateway startup status notice no longer completes A2A tasks with unrelated text | Fixes Inkbox A2A task corruption |
| [#78072](https://github.com/NousResearch/hermes-agent/pull/78072) | Bug fix (cli/config) | Custom provider: `model.provider` now set to runtime name ("custom:Custom") not display name ("custom:9router") | Resolves "Unknown provider" error |
| [#78071](https://github.com/NousResearch/hermes-agent/pull/78071) | Bug fix (agent) | `sanitize_api_messages` now catches tool messages with missing/empty `tool_call_id` | Hardens message sequence repair |
| [#71322](https://github.com/NousResearch/hermes-agent/pull/71322) | Bug fix (gateway/discord) | `/resume` unblocked for pre-v23-migration sessions (NULL chat_id backfill) | Recovers session resume for old sessions |

**Net Progress**: 5 critical regression fixes landed; 45 PRs remain open (mostly authored today), signaling a **fix wave incoming**.

---

## 4. Community Hot Topics (Most Active Issues/PRs)

### Top Issues by Comment Count (7 comments each)

| Issue | Component | Core Problem | Underlying Need |
|-------|-----------|--------------|-----------------|
| [#66589](https://github.com/NousResearch/hermes-agent/issues/66589) | Telegram gateway | Startup notification fails with `send_path_degraded` after planned restart — race condition between flag clear and notification send | **Reliable gateway restart observability** for Telegram operators |
| [#30220](https://github.com/NousResearch/hermes-agent/issues/30220) | Agent/Memory/Skills | Background self-improvement review misclassifies content between memory/skill/user stores | **Trustworthy autonomous learning** — users need correct categorization |
| [#76886](https://github.com/NousResearch/hermes-agent/issues/76886) | Tools/File (regression in 0.19.1) | `read_file` reports valid UTF-8 as binary when 1000-byte sample cuts multibyte char | **Correct text detection** — regression blocking Obsidian/markdown workflows |
| [#67498](https://github.com/NousResearch/hermes-agent/issues/67498) | Telegram gateway | Gateway hangs at "Connecting to Telegram (attempt 1/8)" even with fallback IPs workaround — all threads idle | **Telegram connectivity reliability** — blocks fresh installs |
| [#39043](https://github.com/NousResearch/hermes-agent/issues/39043) | Signal adapter | Missing native quote/reply, edit, remote-delete, read-receipt support | **Feature parity with Signal CLI capabilities** — power users need full protocol support |

### Top PRs by Activity (all opened/updated today)

| PR | Type | Significance |
|----|------|--------------|
| [#78093](https://github.com/NousResearch/hermes-agent/pull/78093) | Bug fix (Telegram) | **Direct fix for #66589** — retries startup home-channel notification on `send_path_degraded` |
| [#78094](https://github.com/NousResearch/hermes-agent/pull/78094) | Bug fix (Windows update) | Fixes cmdline truncation (120 chars) breaking gateway exemption in desktop preflight |
| [#78095](https://github.com/NousResearch/hermes-agent/pull/78095) | Bug fix (Windows update) | Classifies long gateway command lines correctly in desktop preflight |
| [#78091](https://github.com/NousResearch/hermes-agent/pull/78091) | Feature (providers) | Adds **AgentRouter** as bundled model provider plugin (dual wire protocol) |
| [#63779](https://github.com/NousResearch/hermes-agent/pull/63779) | Feature (security) | Makes LLM security/safety guidance configurable (`security.redact_secrets`) |

**Signal**: Community is **mobilizing fixes for v0.20.0 regressions** within hours — especially Windows desktop update flow and Telegram gateway races. AgentRouter integration signals expanding provider ecosystem.

---

## 5. Bugs & Stability (Ranked by Severity)

### 🔴 P1 — Critical (Blocking installs/core flows)

| Issue | Component | Status | Fix PR |
|-------|-----------|--------|--------|
| [#67498](https://github.com/NousResearch/hermes-agent/issues/67498) | Telegram gateway | **Closed** (but workaround persists) | — |
| [#78052](https://github.com/NousResearch/hermes-agent/issues/78052) | Telegram gateway (v0.20.0) | **Open** — gateway process hang only; standalone adapter works | — |
| [#72454](https://github.com/NousResearch/hermes-agent/issues/72454) | Telegram gateway | **Open** — `Application.initialize()` hangs at attempt 1/8 (regression from #63309) | — |
| [#69216](https://github.com/NousResearch/hermes-agent/issues/69216) | Windows install | **Open** — `uv installed but not found` on native Windows 11 | — |

### 🟠 P2 — High (Major regressions, data integrity)

| Issue | Component | Status | Fix PR |
|-------|-----------|--------|--------|
| [#66589](https://github.com/NousResearch/hermes-agent/issues/66589) | Telegram gateway | **Open** — race on restart notification | [#78093](https://github.com/NousResearch/hermes-agent/pull/78093) |
| [#76886](https://github.com/NousResearch/hermes-agent/issues/76886) | Tools/File (0.19.1 regression) | **Open** — UTF-8 misclassified as binary | — |
| [#67629](https://github.com/NousResearch/hermes-agent/issues/67629) | Tools/Search (Windows) | **Open** — absolute path rewritten to MSYS form, native `rg` fails | — |
| [#64392](https://github.com/NousResearch/hermes-agent/issues/64392) | Skills/CLI | **Open** — duplicate skill names handled 3 different ways | — |
| [#68559](https://github.com/NousResearch/hermes-agent/issues/68559) | Gateway/Terminal/Docker | **Open** — multiplexed gateway ignores routed profile terminal backend | — |
| [#73692](https://github.com/NousResearch/hermes-agent/issues/73692) | Tools/Web/Config | **Open** — `disabled_toolsets: [browser]` silently removes `web_search` | — |
| [#76902](https://github.com/NousResearch/hermes-agent/issues/76902) | Desktop/Terminal | **Open** — `TERMINAL_CWD`=home dir causes full home scan for AGENTS.md | — |
| [#78089](https://github.com/NousResearch/hermes-agent/issues/78089) | Windows/Desktop update | **Open** — cmdline truncation defeats pausable-gateway exemption | [#78094](https://github.com/NousResearch/hermes-agent/pull/78094), [#78095](https://github.com/NousResearch/hermes-agent/pull/78095) |
| [#78084](https://github.com/NousResearch/hermes-agent/issues/78084) | Windows/Desktop update | **Open** — `.pyd` file lock (os error 5) bricks venv during update | — |

### 🟡 P3 — Medium (Usability, niche)

| Issue | Component | Status |
|-------|-----------|--------|
| [#75329](https://github.com/NousResearch/hermes-agent/issues/75329) | Desktop/TTS | **Open** — voice conversation works only first turn |
| [#77618](https://github.com/NousResearch/hermes-agent/issues/77618) | Desktop/macOS | **Open** — macOS 15 can't run (min version 12+) |
| [#78078](https://github.com/NousResearch/hermes-agent/issues/78078) | Desktop | **Open** — duplicate gateway status in status bar |
| [#78061](https://github.com/NousResearch/hermes-agent/issues/78061) | Agent/MCP | **Open** — tool chaining: binary output from MCP tool can't feed local tool without model re-emitting |

---

## 6. Feature Requests & Roadmap Signals

### Active Feature PRs (likely next release candidates)

| PR | Feature | Readiness |
|----|---------|-----------|
| [#78091](https://github.com/NousResearch/hermes-agent/pull/78091) | **AgentRouter provider** — dual-protocol relay for multiple upstream families | **Open, authored today** — high priority for provider diversity |
| [#49620](https://github.com/NousResearch/hermes-agent/pull/49620) | **Gateway system message suppression** — category-based mute (`progress`, `lifecycle`, `info`) | **Open, updated today** — addresses notification noise |
| [#49330](https://github.com/NousResearch/hermes-agent/pull/49330) | **i18n for gateway messages** — full coverage + config customization layer | **Open, updated today** — internationalization push |
| [#24180](https://github.com/NousResearch/hermes-agent/pull/24180) | **Telegram topic runtime model overrides** — per-topic provider/model/toolsets | **Open since May, updated today** — advanced routing |
| [#63779](https://github.com/NousResearch/hermes-agent/pull/63779) | **Configurable LLM security guidance** — `security.redact_secrets` toggle | **Open, updated today** — enterprise/compliance need |

### Top User-Requested Features (from Issues)

| Issue | Request | Votes (👍) | Likelihood |
|-------|---------|------------|------------|
| [#39043](https://github.com/NousResearch/hermes-agent/issues/39043) | Signal: native quote/reply, edit, remote-delete, read-receipts | 2 | High — protocol completeness |
| [#29771](https://github.com/NousResearch/hermes-agent/issues/29771) | Credential pool for search backends (Tavily/Exa) | 0 | Medium — architectural consistency |
| [#77367](https://github.com/NousResearch/hermes-agent/issues/77367) | Comprehensive OMP Analysis — LSP, AST, xd://, SQLite, conflict detection | 0 | Low — exploratory, large scope |
| [#78061](https://github.com/NousResearch/hermes-agent/issues/78061) | Tool chaining: consume previous tool output without model re-emitting | 0 | Medium — MCP/binary workflow enabler |

**Roadmap Prediction**: v0.20.1 will be a **stability patch** (Telegram, Windows, Desktop fixes). v0.21.0 will likely ship **AgentRouter provider, gateway message suppression, i18n, and configurable security controls** — all have active PRs updated today.

---

## 7. User Feedback Summary

### Pain Points (Direct from Issues)

| User Segment | Pain Point | Representative Issue |
|--------------|------------|----------------------|
| **Windows native users** | Install/update fundamentally broken: `uv` not found, venv blocked by `.pyd` locks, cmdline truncation | [#69216](https://github.com/NousResearch/hermes-agent/issues/69216), [#78084](https://github.com/NousResearch/hermes-agent/issues/78084), [#78089](https://github.com/NousResearch/hermes-agent/issues/78089) |
| **Telegram gateway operators** | Gateway hangs on connect; restart notifications lost; fallback IPs don't work | [#67498](https://github.com/NousResearch/hermes-agent/issues/67498), [#72454](https://github.com/NousResearch/hermes-agent/issues/72454), [#66589](https://github.com/NousResearch/hermes-agent/issues/66589) |
| **Desktop app users** | Voice conversation single-turn; macOS 15 incompatibility; status bar duplicates; update bricks venv | [#75329](https://github.com/NousResearch/hermes-agent/issues/75329), [#7761

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-08-04

---

## 1. Today's Overview
PicoClaw shows **moderate maintenance activity** with 13 total updates (8 issues, 5 PRs) in the last 24 hours. The project is in a **stabilization phase**: 5 issues and 3 PRs were closed, indicating active triage and resolution of outstanding bugs. No new release was published, suggesting the team is accumulating fixes for a future patch. Open issues highlight three critical areas: **Web UI performance degradation** with long chat histories, **MCP server failure handling** causing agent hangs, and **routing/context management gaps** for non-default agents. Two open PRs (#3316, #3315) directly address the routing and Telegram topic-support gaps.

---

## 2. Releases
**No new releases** in the last 24 hours. The latest published version remains **0.3.1** (commit `2cf030d2`). The closed PRs and issues suggest a **0.3.2 patch** is likely imminent, focusing on:
- Web UI input lag fix
- MCP connection resilience
- Japanese localization
- Routing/context fixes for dispatched agents
- Telegram private-chat topic support

---

## 3. Project Progress — Merged/Closed PRs Today
| PR | Type | Summary | Impact |
|----|------|---------|--------|
| [#3273](https://github.com/sipeed/picoclaw/pull/3273) | **Feature** | Add Japanese (`ja`) localization to WebUI (968-line translation + dayjs locale) | ✅ Closes #3272; expands i18n coverage |
| [#3267](https://github.com/sipeed/picoclaw/pull/3267) | **Bug Fix** | Fix antigravity token-refresh scope bug (incorrect scope passed) | ✅ Resolves auth failures for antigravity users |
| [#3202](https://github.com/sipeed/picoclaw/pull/3202) | **Bug Fix** | Strip leading/trailing underscores in agent/account ID normalization | ✅ Fixes routing ID validation edge cases |

**Net progress**: 3 PRs merged, covering **i18n, authentication stability, and routing correctness**.

---

## 4. Community Hot Topics
| Item | Activity | Core Need |
|------|----------|-----------|
| [#3281](https://github.com/sipeed/picoclaw/issues/3281) **Web UI chat input lag with long history** | 3 comments, 👍1, open 14 days | **Performance**: Input becomes unusable as session history grows; blocks daily usage for power users |
| [#3269](https://github.com/sipeed/picoclaw/issues/3269) **MCP failure hangs agent loop** | 2 comments, 👍1, open 15 days | **Resilience**: Single MCP server outage freezes entire chat interface; no timeout/fallback |
| [#3301](https://github.com/sipeed/picoclaw/issues/3301) **/clear & auto-compression broken for routed agents** | 1 comment, open 6 days | **Feature parity**: Dispatch rules create second-class agents that lose session management |
| [#3316](https://github.com/sipeed/picoclaw/pull/3316) **Fix routed-agent context management** | New PR, 0 comments | **Direct fix for #3301**: Implements history, summarization, compression, seahorse bootstrap for dispatched agents |

**Pattern**: Users running **multi-channel, multi-agent deployments** (Discord/Telegram + dispatch rules) are hitting **session-management gaps** and **infrastructure resilience** issues.

---

## 5. Bugs & Stability — Ranked by Severity
| Severity | Issue | Status | Fix PR? |
|----------|-------|--------|---------|
| **High** | [#3269](https://github.com/sipeed/picoclaw/issues/3269) MCP connection failure hangs agent loop indefinitely | 🟢 Open | ❌ No PR yet |
| **High** | [#3281](https://github.com/sipeed/picoclaw/issues/3281) Web UI input lag with moderate history length | 🟢 Open | ❌ No PR yet |
| **Medium** | [#3301](https://github.com/sipeed/picoclaw/issues/3301) `/clear` & auto-compression fail for non-default agents | 🟢 Open | ✅ [#3316](https://github.com/sipeed/picoclaw/pull/3316) open |
| **Medium** | [#3264](https://github.com/sipeed/picoclaw/issues/3264) `SplitMessage` infinite loop on oversized fenced-code info string | 🔴 Closed | ✅ Fixed in merged PR (not listed but implied) |
| **Low** | [#3268](https://github.com/sipeed/picoclaw/issues/3268) `exec` tool `action` param required (should default to `run`) | 🔴 Closed | ✅ Fixed |
| **Low** | [#3265](https://github.com/sipeed/picoclaw/issues/3265) Gateway fails on unknown `deltachat` channel type | 🔴 Closed | ✅ Fixed (config tolerance improved) |

**Critical path**: #3269 and #3281 have **no open fix PRs** — should be prioritized for next sprint.

---

## 6. Feature Requests & Roadmap Signals
| Request | Source | Likelihood for Next Version |
|---------|--------|----------------------------|
| **Japanese localization (WebUI + Launcher)** | [#3272](https://github.com/sipeed/picoclaw/issues/3272) / [#3273](https://github.com/sipeed/picoclaw/pull/3273) | ✅ **Merged** — will ship in 0.3.2 |
| **Launcher: detect external systemd gateway, tolerate unknown channel types** | [#3276](https://github.com/sipeed/picoclaw/issues/3276) | 🟡 High — aligned with headless/server deployment patterns |
| **Telegram private-chat topic support** | [#3315](https://github.com/sipeed/picoclaw/pull/3315) | 🟢 High — PR open, narrow scope, clear value |
| **Routed-agent session parity (history, compression, seahorse)** | [#3301](https://github.com/sipeed/picoclaw/issues/3301) / [#3316](https://github.com/sipeed/picoclaw/pull/3316) | 🟢 High — PR open, fixes regression for multi-agent users |
| **Web UI virtualized/scroll-windowed message rendering** | Implied by #3281 | 🟡 Medium — requires frontend refactor, not a quick fix |

**Roadmap signal**: The project is **hardening multi-tenant/multi-channel deployments** (systemd, dispatch rules, Telegram forums) and **expanding i18n** — moving beyond single-user desktop use cases.

---

## 7. User Feedback Summary
| Pain Point | Evidence | User Segment |
|------------|----------|--------------|
| **Web UI unusable with long conversations** | #3281: "very laggy when history has a little bit long" | Power users, long-running sessions |
| **MCP outage = total chat freeze** | #3269: "agent loop will hang, causing the Picoclaw chat interface to stop replying" | Users relying on MCP tools (files, APIs) |
| **Dispatch rules create broken agents** | #3301: `/clear` and auto-compression don't work for routed agents | Multi-bot/server admins (Discord/Telegram) |
| **Gateway startup fragile to config drift** | #3265: fails on unknown `deltachat` type even if not configured | Self-hosters, CI/CD deployments |
| **Tokenizer/normalization edge cases** | #3202, #3264: ID normalization, message splitting bugs | Developers extending routing/channels |

**Satisfaction signal**: Users are **investing in complex deployments** (systemd, dispatch rules, forums) but hitting **second-class citizen bugs** for non-happy-path configurations.

---

## 8. Backlog Watch — Stale/Unanswered Items Needing Attention
| Item | Age | Why It Matters |
|------|-----|----------------|
| [#3269](https://github.com/sipeed/picoclaw/issues/3269) **MCP failure hangs agent** | 15 days open, no fix PR | **High severity, no mitigation** — blocks reliability for tool-using agents |
| [#3281](https://github.com/sipeed/picoclaw/issues/3281) **Web UI input lag** | 14 days open, no fix PR | **UX regression** — affects all Web UI users with history > few dozen messages |
| [#3301](https://github.com/sipeed/picoclaw/issues/3301) **Routed agent session broken** | 6 days open, PR [#3316](https://github.com/sipeed/picoclaw/pull/3316) open but unreviewed | **Feature gap** — dispatch rules are a core multi-tenant feature |
| [#3315](https://github.com/sipeed/picoclaw/pull/3315) **Telegram private-chat topics** | 1 day old, no review | **Standards compliance** — Telegram API change, affects bot-forum users |
| [#3276](https://github.com/sipeed/picoclaw/issues/3276) **Launcher/systemd integration** | 15 days, closed but design discussion incomplete | **Ops friction** — headless deployments need clear ownership model |

**Recommendation**: Maintainers should **triage #3269 and #3281 immediately** (assign, label `P0`, or open spike PRs). Review **#3316 and #3315** this week to unblock multi-agent and Telegram-forum users.

---

*Digest generated from GitHub data as of 2026-08-04. Links point to live issues/PRs on github.com/sipeed/picoclaw.*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-08-04

## 1. Today's Overview
NanoClaw shows **high maintenance velocity** with 9 PRs updated in the last 24 hours (6 merged/closed, 3 open). The project is actively hardening its container infrastructure (agent image repin to `hardened-2026-08-02`), fixing session lifecycle bugs around transcript rotation and retention cleanup, and improving iMessage opt-in flows. One new user-facing regression surfaced: a `SyntaxError` from `@clack/core` using `node:util.styleText` (Node.js version compatibility). No new releases cut today.

## 2. Releases
**No new releases** published in the last 24 hours.

## 3. Project Progress — Merged/Closed PRs (6)

| PR | Type | Summary | Link |
|----|------|---------|------|
| #3182 | **Container/Infra** | Repinned agent Docker image to `hardened-2026-08-02` (sha256:af60e54f…, 621 MB). Same upstream base (`ai.echo.image.upstream.digest` unchanged), refreshed base layers. | [#3182](https://github.com/nanocoai/nanoclaw/pull/3182) |
| #3180 | **Operational Skill** | Surfaces hardened image migration via an operational/container skill (SKILL.md). Enables self-serve rollout visibility. | [#3180](https://github.com/nanocoai/nanoclaw/pull/3180) |
| #3137 | **Core/Engagement** | Fixes engagement consistency: keeps accumulated messages as context without triggering warm-container follow-ups; lets group-scoped agents inspect wirings and request approved engagement-policy updates; rejects invalid JS engagement regexes. | [#3137](https://github.com/nanocoai/nanoclaw/pull/3137) |
| #3181 | **Channel/iMessage** | Adds opt-in via first message to the assigned line (reduces unsolicited outreach). | [#3181](https://github.com/nanocoai/nanoclaw/pull/3181) |
| #3143 | **UI/Approval** | Preserves resolved approval card content (title, request details) while replacing buttons with muted decision/actor or timeout status; original body persists for terminal cards. | [#3143](https://github.com/nanocoai/nanoclaw/pull/3143) |
| #3178 | **Admin** | Closed — opened against wrong repository. No code change. | [#3178](https://github.com/nanocoai/nanoclaw/pull/3178) |

**Key themes:** Container hardening rollout, session/engagement reliability, approval UX polish, iMessage compliance.

## 4. Community Hot Topics

| Item | Activity | Signal |
|------|----------|--------|
| **#3092** `feat: support remote Streamable HTTP MCP servers` | Open since 2026-07-19, updated today (core-team, follows-guidelines) | **High strategic interest** — MCP (Model Context Protocol) remote server support is a major extensibility vector. Long-open PR suggests design review or dependency alignment needed. | [#3092](https://github.com/nanocoai/nanoclaw/pull/3092) |
| **#3179** `SyntaxError: node:util.styleText missing` | Created 2026-08-03, 1 comment, 0 👍 | **New regression** — `@clack/core@1.2.0` uses `styleText` from `node:util`, which requires Node.js ≥ 20.11.0 (stable in 22+). Indicates Node version mismatch in user env or CI. | [#3179](https://github.com/nanocoai/nanoclaw/issues/3179) |
| **#3184** `fix(claude): rotate on missing transcript` | Opened 2026-08-03, fix PR | **Session resilience** — Prevents "dead session" errors when transcript file vanishes; rotates instead of crashing. | [#3184](https://github.com/nanocoai/nanoclaw/pull/3184) |
| **#3183** `fix(group-init): pin cleanupPeriodDays` | Opened 2026-08-03, fix PR | **Retention safety** — Stops cold-session reaping after 30+ days of inactivity; avoids "No conversation found" errors for returning users. | [#3183](https://github.com/nanocoai/nanoclaw/pull/3183) |

**Underlying needs:** MCP ecosystem integration (remote servers), Node.js version alignment, session durability for long-lived conversations.

## 5. Bugs & Stability — Today’s Reports

| Severity | Issue | Description | Fix PR? |
|----------|-------|-------------|---------|
| **High** | #3179 | `SyntaxError: The requested module 'node:util' does not provide an export named 'styleText'` — breaks CLI startup (`@clack/core@1.2.0`). Requires Node ≥ 20.11.0. | ❌ No fix PR yet |
| **Medium** | (implied by #3184) | Session crashes with `No conversation found with session ID: <uuid>` when transcript file missing. | ✅ **#3184** (open) |
| **Medium** | (implied by #3183) | Users messaging quiet channels (30+ days) get raw `No conversation found` errors; session stuck. | ✅ **#3183** (open) |
| **Low** | #3143 (fixed) | Resolved approval cards lost title/request details on resolution. | ✅ Merged **#3143** |

**Action needed:** Pin Node.js version in CI/Dockerfile or downgrade `@clack/core` until Node 22+ is baseline.

## 6. Feature Requests & Roadmap Signals

| Signal | Source | Likelihood for Next Version |
|--------|--------|----------------------------|
| **Remote Streamable HTTP MCP servers** | #3092 (core-team, 16 days open) | **High** — Core-team label, follows guidelines, strategic for agent tooling ecosystem. |
| **Self-serve engagement wiring controls** | #3137 (merged) | **Delivered** — Agents can now inspect/adjust engagement policies. |
| **Hardened image migration visibility** | #3180 (merged) | **Delivered** — Operational skill for rollout transparency. |
| **iMessage opt-in compliance** | #3181 (merged) | **Delivered** — First-message opt-in flow. |

**Prediction:** MCP remote server support (#3092) is the most likely major feature in the next minor release, given core-team ownership and ecosystem momentum.

## 7. User Feedback Summary

| Pain Point | Evidence | Impact |
|------------|----------|--------|
| **Node.js version incompatibility** | #3179 — `@clack/core@1.2.0` uses `node:util.styleText` (Node 20.11+/22+) | Blocks users on older Node (e.g., 18, 20.10). CI may pass if pinned to ≥22. |
| **Session loss on transcript cleanup** | #3184, #3183 — "dead session" errors, cold-session reaping | Breaks long-running conversations; user sees cryptic UUID errors. |
| **Approval card context loss** | #3143 (fixed) — resolved cards lost title/details | Reduced auditability; fixed in merged PR. |
| **Unsolicited iMessage outreach** | #3181 (fixed) — no opt-in before first message | Compliance/UX risk; fixed with first-message opt-in. |

**Satisfaction signals:** Core-team PRs merging rapidly (6 in 24h) show strong internal velocity. User-reported regression (#3179) is fresh — response time will indicate support health.

## 8. Backlog Watch — Needs Maintainer Attention

| Item | Age | Risk | Why It Matters |
|------|-----|------|----------------|
| **#3092** `feat: remote Streamable HTTP MCP servers` | 16 days (opened 2026-07-19) | **Medium** | Core-team owned, follows guidelines, but stalled. MCP is a key differentiator for agent extensibility. |
| **#3179** `SyntaxError: node:util.styleText` | 1 day | **High** | User-facing crash. Requires Node version policy decision (pin/minimum) or dependency downgrade. |
| **#3184** `fix(claude): rotate on missing transcript` | 1 day | **Medium** | Open fix PR for session resilience. Should be reviewed/merged to prevent "dead session" reports. |
| **#3183** `fix(group-init): pin cleanupPeriodDays` | 1 day | **Medium** | Open fix PR for cold-session retention. Prevents silent failures for inactive channels. |

**Recommendation:** Prioritize #3179 (Node compat) and #3184/#3183 (session fixes) for immediate triage. Schedule design review for #3092 to unblock MCP remote support.

---

*Data source: GitHub API (nanocoai/nanoclaw), 2026-08-04 00:00 UTC snapshot. Links point to live issues/PRs.*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest — 2026-08-04

---

## 1. Today's Overview
NullClaw shows **moderate maintenance activity** with 5 PR updates and 1 issue update in the last 24 hours. Two significant streaming-related PRs (#964, #965) were closed/merged, advancing native tool-call support during streaming. Two new security-focused PRs (#982, #983) address proxy transport hardening for Telegram and provider requests. One active bug (#915) reports scheduler authorization failures with external Ollama hosts. No new releases were published.

---

## 2. Releases
**No new releases** in the last 24 hours.

---

## 3. Project Progress
| PR | Status | Summary |
|----|--------|---------|
| [#964](https://github.com/nullclaw/nullclaw/pull/964) | **Closed** | Enabled native API-level tool calls during streaming; preserves structured tool-call deltas in `StreamChatResult`; adds provider capability checks. |
| [#965](https://github.com/nullclaw/nullclaw/pull/965) | **Closed** | Added structured streaming tool-call support for SSE parser; handles servers emitting XML in `delta.content`; companion to #964. |
| [#983](https://github.com/nullclaw/nullclaw/pull/983) | Open | Security fix: routes non-streaming provider POSTs through pinned curl path for proxied requests; keeps credential headers out of argv via mode-0600 temp header file. |
| [#982](https://github.com/nullclaw/nullclaw/pull/982) | Open | Security fix: routes Telegram Bot API POSTs through curl transport when explicit proxy configured; retains native HTTP for direct connections. |
| [#956](https://github.com/nullclaw/nullclaw/pull/956) | Open | Dependabot: bumps Alpine base image from 3.23 → 3.24 in Docker images. |

**Key advancement**: Streaming tool-call execution is now natively supported at the API level (merged via #964/#965), unblocking pure-streamed tool responses.

---

## 4. Community Hot Topics
| Item | Type | Activity | Link |
|------|------|----------|------|
| **#915** Scheduler unauthorized with external Ollama | Issue | 4 comments, 1 👍 | [Issue #915](https://github.com/nullclaw/nullclaw/issues/915) |

**Analysis**: The sole active issue reveals a **scheduler authentication gap** when using remote Ollama instances. User runs NullClaw on Ubuntu with Ollama on a separate network host (RTX 3090, qwen3.6:27b). Tool calling works, but scheduler fails in both Telegram and CLI contexts. This suggests the scheduler path may not propagate credentials/headers correctly for proxied/remote LLM endpoints — a likely integration point for the proxy fixes in #982/#983.

---

## 5. Bugs & Stability
| Bug | Severity | Status | Fix PR? |
|-----|----------|--------|---------|
| **Scheduler unauthorized** with external Ollama host (#915) | **High** — breaks scheduled/automated workflows | Open, 4 comments | No direct fix PR yet; #982/#983 (proxy transport hardening) may address root cause |

**No new crashes or regressions reported today.** The two closed PRs (#964, #965) resolve a known streaming tool-call limitation, improving stability for agentic workflows.

---

## 6. Feature Requests & Roadmap Signals
| Signal | Source | Likelihood for Next Version |
|--------|--------|-----------------------------|
| **Native streaming tool-call execution** | Merged via #964 + #965 | ✅ **Already landed** — core streaming agent capability now complete |
| **Proxy-aware credential handling** | Active in #982, #983 | 🟡 **High** — security hardening for proxied provider/Telegram traffic |
| **Docker base image modernization** | Dependabot #956 (Alpine 3.24) | 🟢 **Routine** — low-risk maintenance |

**Prediction**: Next release will likely bundle the streaming tool-call fixes (#964/#965) with the proxy transport security patches (#982/#983) once reviewed.

---

## 7. User Feedback Summary
| Pain Point | Context | Sentiment |
|------------|---------|-----------|
| **Scheduler broken with remote Ollama** | External LLM host on same network; tool calling works otherwise | 😕 Frustrated — core automation feature unusable |
| **Proxy configuration not honored by scheduler** | Implied by #915 + #982/#983 alignment | 🔧 Technical — suggests transport layer inconsistency |

**Use case**: Self-hosted multi-machine AI stack (Ubuntu + Ollama on GPU node). User expects NullClaw to transparently handle auth across network boundaries.

---

## 8. Backlog Watch
| Item | Age | Risk | Notes |
|------|-----|------|-------|
| **#915** Scheduler unauthorized | Since 2026-05-15 (~80 days) | **High** | Long-standing, blocks automation for remote-LLM users. No maintainer response visible. May be fixed implicitly by #982/#983 merge. |
| **#956** Alpine 3.24 bump | Since 2026-06-15 (~50 days) | Low | Dependabot PR; standard maintenance. Should be merged before next Docker publish. |

**Action needed**: Maintainer review on #915 (critical for remote-LLM deployments) and #982/#983 (security hardening). The proxy transport fixes appear directly relevant to the scheduler bug.

---

*Digest generated from GitHub data as of 2026-08-04. Links point to live NullClaw repository.*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-08-04

## 1. Today's Overview
IronClaw is in the midst of a heavy architectural refactoring phase ("Wave 3 / Reborn"), with **96 total items updated in 24h** (46 issues, 50 PRs). The project shows **high velocity but elevated technical debt**: 37 issues remain open, dominated by structural cleanup (crate re-layering, coverage gaps, CI misconfigurations) and a cluster of **user-facing P1/P2 bugs** from a recent bug bash. No new releases were cut; the last release PR (#5598) remains open since July 3. Merge activity is steady (18 PRs closed/merged today), but most are internal refactors rather than user-visible features.

## 2. Releases
**No new releases today.** The pending release PR [#5598](https://github.com/nearai/ironclaw/pull/5598) (open since 2026-07-03) proposes breaking changes in `ironclaw_common` (0.4.2 → 0.5.0) and `ironclaw_skills` (0.3.0 → 0.4.0), plus a compatible bump for `ironclaw_safety`. A weekly Wednesday release strategy was documented in [#7049](https://github.com/nearai/ironclaw/pull/7049) (merged today), aligning Monday-to-Monday sprints with Monday RC, Tuesday QA, Wednesday promotion.

## 3. Project Progress — Merged / Closed PRs Today (18)
| PR | Title | Type | Impact |
|----|-------|------|--------|
| [#7064](https://github.com/nearai/ironclaw/pull/7064) | refactor(loop): shed model gateway & tool disclosure into `loop_host` (WS3/WS4) | Architectural move | Zero behavior change; completes WS3 runner sheds + WS4 re-layer |
| [#7040](https://github.com/nearai/ironclaw/pull/7040) | refactor(contracts): close WS2 strays & WS2.1 follow-ups | Architectural cleanup | Corrected two stale claims in CHECKLIST/PROPOSAL docs |
| [#7070](https://github.com/nearai/ironclaw/pull/7070) | fix(webui): unblock main E2E coverage — SSE keep_alive, admin retry, stale selectors | CI/Testing fix | Restores main Code Coverage (red since Jul 30); 5 E2E tests fixed |
| [#7024](https://github.com/nearai/ironclaw/pull/7024) | fix(extensions): resolve custom MCP auth during registration | Auth fix | `Auto` now does credential-free handshake; validates RFC 9728/8414 |
| [#7049](https://github.com/nearai/ironclaw/pull/7049) | docs: add weekly Wednesday release strategy | Process doc | Defines immutable artifacts, ownership, blocker handling, emergencies |
| [#7023](https://github.com/nearai/ironclaw/pull/7023) | chore(deps): bump everything-else group (6 updates) | Dependency bump | Routine maintenance |
| *5 other dependency/cleanup PRs* | | | |

**Net progress**: Wave 3 structural work advancing (sandbox merge, contracts flip, obligations split, secrets routing), CI health restored, MCP auth hardened.

## 4. Community Hot Topics — Most Active Issues / PRs
| Item | Comments | Core Theme |
|------|----------|------------|
| [#6284](https://github.com/nearai/ironclaw/issues/6284) (CLOSED) | 15 | **Epic: Error Recoverability Endgame** — contract that every mid-run error survives, is visible to model with cause + fix hint, and model gets a turn to act. Closed after acceptance. |
| [#6524](https://github.com/nearai/ironclaw/issues/6524) (CLOSED) | 4 | **Epic: Hermetic Capability & Journey Testing Platform** — deterministic coverage for every capability/journey. Closed. |
| [#7087](https://github.com/nearai/ironclaw/issues/7087) | 3 | **Reborn PR test planner hard-fails on `.claude/`, `Dockerfile`, `.githooks/`, etc.** — blocks Wave 3 PR #7084; fixed in that PR at `1f66b58`. |
| [#7085](https://github.com/nearai/ironclaw/issues/7085) | 2 | **`check-version-bumps.sh` skips WIT_TOOL_VERSION cross-check on macOS** (BSD sed lacks `\+`). Pre-existing, not Wave 3-introduced. |
| [#7060](https://github.com/nearai/ironclaw/issues/7060) | 2 | **Platform-owned WIT/extension changes fail Reborn scope classifier** — regression from bounded planner (#7019) + extensions relocation (#7037). |
| [#7065](https://github.com/nearai/ironclaw/pull/7065) | — (XL) | **Wave 3 WS3: merge sandbox lane + flip `ironclaw_mcp` onto contracts** — "one problem, not two"; main structural PR this week. |
| [#7096](https://github.com/nearai/ironclaw/pull/7096) | — (XL) | **Wave 3 WS3: route operator secrets through `product_contracts` port** — security-sensitive, ordering-constrained. |
| [#7094](https://github.com/nearai/ironclaw/pull/7094) | — (XL) | **Close Wave 2: extension registry re-layer, `include_str!` kills, nested-tree coverage** — bundles remaining WS2 items. |

**Underlying need**: The project is executing a **large-scale layering/contract refactor (Waves 2→3)** while simultaneously surfacing **production bugs** from a bug bash. Contributors are triaging both streams; CI tooling gaps (scope classifier, coverage, version-check script) are blocking structural PRs.

## 5. Bugs & Stability — Reported Today (Ranked by Severity)
| Severity | Issue | Summary | Fix PR? |
|----------|-------|---------|---------|
| **P1 (bug_bash)** | [#7069](https://github.com/nearai/ironclaw/issues/7069) | Google services require repeated authentication per service | ✅ [#7077](https://github.com/nearai/ironclaw/pull/7077) (open, fixes #7069) |
| **P1 (bug_bash)** | [#7074](https://github.com/nearai/ironclaw/issues/7074) | Multi-tool meeting research fails after Calendar retrieval — model calls unavailable function | ❌ |
| **P1 (security/tooling)** | [#7041](https://github.com/nearai/ironclaw/issues/7041) | WASM guest diagnostics can leak secrets via runtime, model causes, tracing | ❌ (stacked PR [#7048](https://github.com/nearai/ironclaw/pull/7048) exists) |
| **P1 (infra)** | [#7081](https://github.com/nearai/ironclaw/issues/7081) | Docker fail-closed gate wired to nothing (`IRONCLAW_REQUIRE_DOCKER_TESTS` never set) | ❌ |
| **P2 (bug_bash)** | [#7071](https://github.com/nearai/ironclaw/issues/7071) | "Reconnecting" status flashes on every SSE chunk | ❌ |
| **P2 (bug_bash)** | [#7075](https://github.com/nearai/ironclaw/issues/7075) | Agent ignores follow-up after failed run, resumes old task | ❌ |
| **P2 (bug_bash)** | [#7073](https://github.com/nearai/ironclaw/issues/7073) | Agent leaks internal tool names/routing in user responses | ❌ |
| **P2 (bug_bash)** | [#7072](https://github.com/nearai/ironclaw/issues/7072) | Telegram renders raw Markdown instead of formatted text | ❌ |
| **P2 (spec compliance)** | [#7068](https://github.com/nearai/ironclaw/issues/7068) | Hosted MCP: omitted `destructiveHint` reads as `false` (spec defaults to `true`) | ❌ |
| **P2 (coverage)** | [#7083](https://github.com/nearai/ironclaw/issues/7083) | Coverage dark for entire `crates/extensions/` family — `CRATE_RE` requires crate directly under `crates/` | ❌ (blocked by [#7094](https://github.com/nearai/ironclaw/pull/7094) which includes fix) |
| **Regression** | [#7060](https://github.com/nearai/ironclaw/issues/7060) | Platform WIT/extension changes fail Reborn scope classifier | ❌ |
| **Tooling** | [#7085](https://github.com/nearai/ironclaw/issues/7085) | `check-version-bumps.sh` skips WIT cross-check on macOS (BSD sed) | ❌ |
| **Tooling** | [#7087](https://github.com/nearai/ironclaw/issues/7087) | Reborn PR test planner hard-fails on `.claude/`, `Dockerfile`, etc. | ✅ Fixed in [#7084](https://github.com/nearai/ironclaw/pull/7084) at `1f66b58` |

**Pattern**: Bug bash surfaced **7 P1/P2 user-facing issues** (auth, streaming, agent logic, Telegram, MCP spec) — none have fix PRs yet except #7069. Infrastructure/tooling bugs block CI reliability.

## 6. Feature Requests & Roadmap Signals
| Signal | Source | Likelihood for Next Version |
|--------|--------|----------------------------|
| **Channel-first onboarding** — blank slate → guided setup for General Assistant | [#7044](https://github.com/nearai/ironclaw/issues/7044) (epic) | High — explicit initiative, linked to #7046 |
| **Configure all tools/channels/extensions from AI chat** | [#7046](https://github.com/nearai/ironclaw/issues/7046) (epic) | High — "IronClaw core" initiative, depends on onboarding |
| **Skills the model can self-create/find/choose/use** | [#6941](https://github.com/nearai/ironclaw/issues/6941) (epic, subset of #6565) | Medium — 21 ACs, 4 belong to others, measured |
| **Billing support escalation pathways on billing page** | [#7097](https://github.com/nearai/ironclaw/issues/7097) | Low — P2 feedback, single report |
| **OOBE automation-tasks prototype (carousel, inline cards, agent-mode pill)** | [#6994](https://github.com/nearai/ironclaw/pull/6994) (UI-only prototype) | Medium — design recovery, rebased, UI-only |
| **Expose custom MCP registration to model (`builtin.extension_register_hosted_mcp`)** | [#7088](https://github.com/nearai/ironclaw/pull/7088) | High — PR open, extends existing lifecycle pipeline |

**Prediction**: Next version will likely ship **onboarding/channel-first UX** (#7044/#7046) and **MCP registration via model** (#7088), while Wave 3 structural work completes. Skills epic (#6941) is too large for one cycle.

## 7. User Feedback Summary
**Pain points from bug bash (Railway instance `ironclaw-qa-testing-libsql.up.railway.app`):**
- **Auth fatigue**: Repeated Google OAuth per service ([#7069](https://github.com/nearai/ironclaw/issues/7069)) — "each Google service requests separate authentication"
- **Streaming UX**: "Reconnecting" flashes on every chunk ([#7071](https://github.com/nearai/ironclaw/issues/7071))
- **Agent amnesia**: Ignores follow-up after failure, resumes dead task ([#7075](https://github.com/nearai/ironclaw/issues/7075))
- **Leaky abstractions**: Internal tool names/routing shown to users ([#7073](https://github.com/nearai/ironclaw/issues/7073))
- **Telegram formatting broken**: Raw Markdown rendered ([#7072](https://github.com/nearai/ironclaw/issues/7072))
- **Multi-tool orchestration fails**: Calendar+Docs+news research fails on unavailable function ([#7074](https://github.com/nearai/ironclaw/issues/7074))

**Positive signal**: Error recoverability epic (#6284) closed — model now recovers from 100% of seen errors per contract.

## 8. Backlog Watch — Stale / High-Impact Items Needing Attention
| Item | Age / Status | Why It Matters |
|------|--------------|----------------|
| [#5598](https://github.com/nearai/ironclaw/pull/5598) | Open since **2026-07-03** (32 days) | **Release blocked** — breaking changes in `ironclaw_common`/`ironclaw_skills`; weekly Wednesday strategy now documented but no release cut |
| [#6565](https://github.com/nearai/ironclaw/issues/6565) (parent of #6941) | Referenced Jul 31 | **Skills epic** — 21 ACs, 4 owned by others (#6638, #4428, #5581, #4543); too large, needs decomposition |
| [#6729](https://github.com/nearai/ironclaw/issues/6729) / [#6655](https://github.com/nearai/ironclaw/pull/6655) | Referenced in #6481 | **Manifest-Driven Extension Lifecycle** epic closed but installation persistence work ongoing |
| [#6730](https://github.com/nearai/ironclaw/issues/6730) / [#6724](https://github.com/nearai/ironclaw/pull/6724) | Referenced in #6482 | **Pluggable Memory Providers** epic closed but provider contract work remains |
| [#7041](https://github.com/nearai/ironclaw/issues/7041) | Opened 2026-08-03 | **WASM secret leakage** — security-sensitive, stacked PR #7048 exists but unmerged |
| [#7067](https://github.com/nearai/ironclaw/issues/7067) | Opened 2026-08-03 | **ResourceGovernor dependency replacement** — last two `runtimes→kernel` layer exceptions (`ironclaw_mcp`, `ironclaw_sandbox`) |
| [#7092](https://github.com/nearai/ironclaw/issues/7092) | Opened 2026-08-04 | **`ironclaw_extension_host` re-layer to `loops`** — 12 product files + blocking edge (`ironclaw_extension_manager`) |
| [#7095](https://github.com/nearai/ironclaw/issues/7095) | Opened 2026-08-04 | **`ironclaw_extension_manager` (products) holds direct `ironclaw_secrets` edge** — violates §8.2 |

---

**Health Assessment**: 🟡 **Caution** — High refactor velocity (Wave 3) is necessary but absorbing capacity; **7 P1/P2 user bugs** from bug bash have no fixes yet; release process stalled >30 days. CI tooling gaps (coverage, scope classifier, version script) are actively blocking structural PRs. Recommend: **

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-08-04

## 1. Today's Overview
LobsterAI shows **moderate maintenance activity** with 11 PRs updated in the last 24 hours (6 merged/closed, 5 open) and 2 stale issues receiving updates. No new release was published. The merged PRs focus on Windows installer robustness (NSIS process cleanup), a startup credit campaign for user acquisition, a sidebar multi-agent task filter, and several reverted/experimental PRs from the same contributor. Open PRs are largely stale dependency bumps (Electron 40→43) and feature/fix PRs from April that remain unmerged. The project appears in a **maintenance/stabilization phase** with active internal development but slower community PR throughput.

## 2. Releases
**No new releases** in the last 24 hours. The latest version remains **v2026.3.30** (per issue #1206).

## 3. Project Progress — Merged/Closed PRs (2026-08-03)

| PR | Title | Area | Status | Summary |
|----|-------|------|--------|---------|
| [#2420](https://github.com/netease-youdao/LobsterAI/pull/2420) | `fix(nsis): re-kill survivor processes on every stop poll round` | platform: windows | **Merged** | Hardens the NSIS uninstaller/stop logic: re-issues `Stop-Process` on every polling round and logs survivor details (name/PID/path) on timeout. Fixes orphaned processes after updates/uninstall. |
| [#2419](https://github.com/netease-youdao/LobsterAI/pull/2419) | `feat(activity): add startup credit campaign` | renderer, docs, main, cowork | **Merged** | Adds a configurable startup credit campaign popup + persistent new-conversation-page entry (login continuation, claim flow, analytics). Targeted at NetEase user acquisition. |
| [#2418](https://github.com/netease-youdao/LobsterAI/pull/2418) | `feat(sidebar): add multi-agent task activity filter` | renderer, docs, cowork | **Merged** | Adds a Codex-inspired filter button in the sidebar (hidden when collapsed) with a blue indicator for tasks needing attention across agents. |
| [#2423](https://github.com/netease-youdao/LobsterAI/pull/2423) | Revert "Liuzhq/fix btw tools" | renderer, docs, main, openclaw, cowork, artifacts | **Closed** | Reverts #2422/#2421 (same author, same day). No description; likely experimental or broken. |
| [#2422](https://github.com/netease-youdao/LobsterAI/pull/2422) / [#2421](https://github.com/netease-youdao/LobsterAI/pull/2421) | Liuzhq/fix btw tools | renderer, docs, main, openclaw, cowork, artifacts | **Closed** | Two duplicate PRs closed same day; no description. Superseded by revert #2423. |

**Net progress**: 3 substantive merges (Windows stability, growth feature, multi-agent UX) + cleanup of experimental work.

## 4. Community Hot Topics
*No high-engagement items in the last 24h.* Both updated issues and all open PRs have **0 reactions and 0–1 comments**. The most “active” by update recency are the two stale issues (last updated 2026-08-03) and the dependabot PR #1277. Underlying needs visible:
- **Private deployment reliability** (#1206): Kimi 2.5 model repeats progress messages during document analysis — blocks private-deployment users.
- **Data portability** (#1213 / #1214): Users want Markdown export for conversations (currently only image export exists). A community PR (#1214) exists but is stale.

## 5. Bugs & Stability
| Severity | Issue | Description | Fix PR? |
|----------|-------|-------------|---------|
| **High** | [#1206](https://github.com/netease-youdao/LobsterAI/issues/1206) | Kimi 2.5 (private deployment) repeats current-action messages during document analysis; switching models works around it. Reproducible 100% on v2026.3.30 / Win10. | No open fix PR. |
| **Medium** | [#1209](https://github.com/netease-youdao/LobsterAI/pull/1209) (PR) | Web search fails on Chrome 130+ due to injected `--disable-blink-features=AutomationControlled` flag from external sources (leftover user-data-dir, env vars, config). Root-cause analyzed; fix likely in chrome-flags sanitization. | PR open (stale since April). |
| **Low** | [#1208](https://github.com/netease-youdao/LobsterAI/pull/1208) (PR) | Cowork: no inline retry button for transient errors (429, network, 5xx). PR adds `RETRYABLE_ERROR_KEYS` classification and a retry button in error bubbles. | PR open (stale since April). |

**Stability note**: The NSIS fix (#2420) addresses a Windows-process-leak regression; no crash reports surfaced today.

## 6. Feature Requests & Roadmap Signals
| Request | Source | Likelihood for Next Version |
|---------|--------|-----------------------------|
| **Markdown export for conversations** | [#1213](https://github.com/netease-youdao/LobsterAI/issues/1213) + community PR [#1214](https://github.com/netease-youdao/LobsterAI/pull/1214) | **High** — PR exists, uses existing `buildDisplayItems`/`buildConversationTurns`, only needs review/merge. |
| **Increase custom model provider limit (10 → 20)** | [#1212](https://github.com/netease-youdao/LobsterAI/pull/1212) | **Medium** — Simple config change (move hard-coded keys to dynamic list), but stale since April. |
| **Cowork inline retry for transient errors** | [#1208](https://github.com/netease-youdao/LobsterAI/pull/1208) | **Medium** — UX improvement, well-scoped PR, but no maintainer action. |
| **Electron 43 upgrade** | [#1277](https://github.com/netease-youdao/LobsterAI/pull/1277) (dependabot) | **Low/Medium** — Security/maintenance; requires testing. No human review yet. |
| **Startup credit campaign (growth)** | [#2419](https://github.com/netease-youdao/LobsterAI/pull/2419) — **already merged** | **Shipped** — Will appear in next release. |

## 7. User Feedback Summary
- **Pain point**: Private-deployment users on Kimi 2.5 experience **repeated progress spam** during document analysis, forcing model switch (#1206).
- **Workflow friction**: No **Markdown export** forces screenshots/manual copy for conversation records (#1213).
- **Reliability**: Cowork sessions die on 429/5xx with **no one-click retry** (#1208).
- **Positive signal**: Growth features (startup credits, multi-agent sidebar filter) are landing, indicating product investment in onboarding and multi-agent UX.

## 8. Backlog Watch — Stale Items Needing Maintainer Attention
| Item | Age | Why It Matters |
|------|-----|----------------|
| [#1214](https://github.com/netease-youdao/LobsterAI/pull/1214) — Markdown export | 4 months | Community-contributed, complete implementation, closes #1345 (referenced). High user demand, low merge risk. |
| [#1212](https://github.com/netease-youdao/LobsterAI/pull/1212) — Custom provider limit 10→20 | 4 months | Simple cap lift; unblocks power users managing many custom models. |
| [#1208](https://github.com/netease-youdao/LobsterAI/pull/1208) — Cowork retry button | 4 months | Improves resilience for transient API errors; well-typed error classification. |
| [#1209](https://github.com/netease-youdao/LobsterAI/pull/1209) — Web search Chrome flag fix | 4 months | Prevents breakage on Chrome 130+; root cause documented. |
| [#1277](https://github.com/netease-youdao/LobsterAI/pull/1277) — Electron 40→43 (dependabot) | 4 months | Security/maintenance; may need compatibility testing. |
| [#1206](https://github.com/netease-youdao/LobsterAI/issues/1206) — Kimi 2.5 duplicate progress | 4 months | High-severity bug for private deployments; no fix PR yet. |

---
**Health Indicator**: 🟡 **Moderate** — Core stability fixes merging, growth features shipping, but community PR backlog (4–5 months old) and a high-severity private-deployment bug remain unattended. Recommend maintainers prioritize #1214, #1206, and the stale PR batch review.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-08-04

## 1. Today's Overview
Moltis shows minimal GitHub activity in the past 24 hours with zero issue updates and only one active pull request. The project appears to be in a quiet development phase, with the sole ongoing work focused on extending MCP (Model Context Protocol) server management through managed repository bundles. No releases, bug reports, or community discussions were recorded today, suggesting a period of focused feature development rather than maintenance or incident response.

## 2. Releases
No new releases published today.

## 3. Project Progress
**Open PR advancing:**
- **#1183** — `feat(mcp): add managed repository bundles`  
  *Author: penso | Created: 2026-08-02 | Updated: 2026-08-03*  
  Adds managed Git repository bundles for discovering, previewing, installing, updating, rolling back, and removing MCP servers. Includes HTTPS credentials support, pinned managed SSH transport, vault lifecycle integration, and imported repository-backed MCP configurations. Aims to simplify web onboarding.  
  🔗 [moltis-org/moltis#1183](https://github.com/moltis-org/moltis/pull/1183)

No PRs merged or closed today.

## 4. Community Hot Topics
No issues or PRs with comments or reactions recorded in the last 24 hours. The only active item (#1183) has zero comments and zero reactions, indicating early-stage review or internal development.

## 5. Bugs & Stability
No bug reports, crashes, or regressions filed or updated today.

## 6. Feature Requests & Roadmap Signals
The sole active PR (#1183) signals a clear roadmap direction: **deepening MCP server lifecycle management via Git-backed repositories**. Features like vault integration, SSH transport pinning, and rollback capability suggest Moltis is moving toward enterprise-grade configuration management for AI agent tooling. If accepted, this would likely anchor the next minor release.

## 7. User Feedback Summary
No user-facing feedback (issues, discussions, or reactions) captured today. The absence of community input may reflect either stable current functionality or limited external engagement at this time.

## 8. Backlog Watch
No long-unanswered issues or stale PRs identified in today’s data. The single open PR (#1183) is only two days old and actively updated yesterday — no maintainer attention debt detected.

---

*Data sourced from GitHub API for moltis-org/moltis. Activity window: 2026-08-03 to 2026-08-04.*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (QwenPaw) Project Digest — 2026-08-04

---

## 1. Today's Overview
CoPaw shows **high velocity** with 73 total updates (23 issues, 50 PRs) in 24 hours and a new **v2.1.0-beta.1** release. The project is in active stabilization mode: 25 PRs merged/closed today address regressions from v2.0.1 (skill tags, spawn_subagent schema, WebView2 crashes, console timeouts, CI gates). Open issues cluster around **multi-agent UX gaps**, **provider compatibility** (Agentscope 2.0.4, GPT-5.6), **performance at scale** (MB-level API payloads, large shell output), and **desktop reliability** (WebView2, bundled Python). The beta release suggests a v2.1.0 stable is imminent.

---

## 2. Releases
### **v2.1.0-beta.1** (2026-08-03)
| Change | Type | PR / Author |
|--------|------|-------------|
| Fix stale channel identity leaking into new chats | Bug fix | [#6382](https://github.com/agentscope-ai/QwenPaw/pull/6382) @zhaozhuang521 |
| Wobble sidebar inbox on new approvals; color-code badge dot | Enhancement | [PR](https://github.com/agentscope-ai/QwenPaw/pull/...) @lalaliat |

**Notes**: Beta targeted for installation verification ([#6656](https://github.com/agentscope-ai/QwenPaw/issues/6656)). No breaking changes documented. Migration: upgrade via standard channels; verify desktop install on Windows/macOS/Linux.

---

## 3. Project Progress (Merged/Closed PRs Today)
| PR | Title | Impact |
|----|-------|--------|
| [#6661](https://github.com/agentscope-ai/QwenPaw/pull/6661) | CI: add platform publish workflow (manual dispatch) | Enables targeted plugin releases |
| [#6203](https://github.com/agentscope-ai/QwenPaw/pull/6203) | Fix Windows `tasklist` liveness probe (timeout, bounds, hide window) | Stabilizes background process mgmt on Windows |
| [#6653](https://github.com/agentscope-ai/QwenPaw/pull/6653) | CI: fence-aware Evidence extraction for real-behavior-proof | Fixes false negatives on fenced code blocks |
| [#6654](https://github.com/agentscope-ai/QwenPaw/pull/6654) | Cap Playwright < 1.62 for macOS desktop verify | Unblocks macOS release pipeline |
| [#6646](https://github.com/agentscope-ai/QwenPaw/pull/6646) | Fetch PR body via API for fork PRs in real-behavior-proof | Restores CI for external contributors |
| [#6579](https://github.com/agentscope-ai/QwenPaw/pull/6579) | Desktop: use bundled Python for script execution | Fixes [#6160](https://github.com/agentscope-ai/QwenPaw/issues/6160) — “Python not found” on Windows |
| [#6609](https://github.com/agentscope-ai/QwenPaw/pull/6609) | Fix `spawn_subagent` schema (optional `batch`) | Addresses [#6588](https://github.com/agentscope-ai/QwenPaw/issues/6588) part 1 |
| [#6547](https://github.com/agentscope-ai/QwenPaw/issues/6547) | Misplaced cursor in Coding Mode editor | UI regression fixed |
| [#6589](https://github.com/agentscope-ai/QwenPaw/issues/6589) | Large shell output freezes UI | Closed (fix likely in related PRs) |
| [#6626](https://github.com/agentscope-ai/QwenPaw/issues/6626) | Real behavior proof strips fenced Evidence | Fixed by [#6653](https://github.com/agentscope-ai/QwenPaw/pull/6653) |

**Net**: 10+ regressions from v2.0.1 resolved; CI/CD hardened for multi-platform releases.

---

## 4. Community Hot Topics (Most Active Issues/PRs)
| Item | Comments | Core Need |
|------|----------|-----------|
| [#6649](https://github.com/agentscope-ai/QwenPaw/issues/6649) **Support GPT-5.6 prompt caching** | 8 | **Provider parity** — `prompt_cache_key`, `prompt_cache_options`, `prompt_cache_breakpoint` for Responses API to cut latency/cost in multi-turn loops |
| [#6537](https://github.com/agentscope-ai/QwenPaw/issues/6537) **Skill tags disappear on restart** (CLOSED) | 11 | **Data persistence** — tags saved to `skill.json` but lost on manifest reconcile; fixed in v2.1.0-beta |
| [#6588](https://github.com/agentscope-ai/QwenPaw/issues/6588) **`spawn_subagent` empty `batch` placeholder → batch mode** | 6 | **Agent tooling contract** — LLMs send `batch=[]`/`""` for single-task; QwenPaw misclassifies as batch; PRs [#6595](https://github.com/agentscope-ai/QwenPaw/pull/6595), [#6658](https://github.com/agentscope-ai/QwenPaw/pull/6658), [#6609](https://github.com/agentscope-ai/QwenPaw/pull/6609) in flight |
| [#6612](https://github.com/agentscope-ai/QwenPaw/issues/6612) **Incompatible with agentscope 2.0.4.post1** | 2 | **Ecosystem sync** — `Msg.content` type change + tool-permission deadlock breaks proactive/memory subsystem |
| [#6608](https://github.com/agentscope-ai/QwenPaw/issues/6608) **Long-running shell bypasses timeout, orphans subprocess** | 3 | **Reliability** — 1.5h Feishu session block; needs per-channel total timeout + cleanup on cancel |
| [#6635](https://github.com/agentscope-ai/QwenPaw/issues/6635) / [#6633](https://github.com/agentscope-ai/QwenPaw/issues/6633) **Console/Skills pages timeout on slow networks (MB payloads)** | 1 each | **API pagination/compression** — `GET /api/skills` & chat history return full content uncompressed vs 30s frontend timeout |

**Pattern**: Users hit **scale limits** (large workspaces, long sessions, slow nets) and **ecosystem drift** (Agentscope, OpenAI Responses, ACP). Multi-agent discoverability ([#6621](https://github.com/agentscope-ai/QwenPaw/issues/6621)) is a recurring UX gap.

---

## 5. Bugs & Stability (Ranked by Severity)
| Severity | Issue | Status | Fix PR |
|----------|-------|--------|--------|
| **Critical** | [#6647](https://github.com/agentscope-ai/QwenPaw/issues/6647) Desktop UI black on WebView2 crash (`STATUS_IN_PAGE_ERROR`) | Open | — |
| **Critical** | [#6619](https://github.com/agentscope-ai/QwenPaw/issues/6619) `ToolCallBlock` missing `extra_content` → crash in `openai_chat_model_compat` | Open | — |
| **High** | [#6612](https://github.com/agentscope-ai/QwenPaw/issues/6612) Agentscope 2.0.4 incompatibility (proactive crashes, deadlock) | Open | — |
| **High** | [#6608](https://github.com/agentscope-ai/QwenPaw/issues/6608) Shell command timeout bypass + orphan subprocess | Open | — |
| **High** | [#6614](https://github.com/agentscope-ai/QwenPaw/issues/6614) WeChat cron push silent failure (`ret=-2 context_token` invalid) | Open | — |
| **Medium** | [#6625](https://github.com/agentscope-ai/QwenPaw/issues/6625) ACP `delegate_external_agent` loses final text on notification race | Open | [#6623](https://github.com/agentscope-ai/QwenPaw/pull/6623) |
| **Medium** | [#6588](https://github.com/agentscope-ai/QwenPaw/issues/6588) `spawn_subagent` empty batch placeholder misrouting | Open | [#6595](https://github.com/agentscope-ai/QwenPaw/pull/6595), [#6658](https://github.com/agentscope-ai/QwenPaw/pull/6658), [#6609](https://github.com/agentscope-ai/QwenPaw/pull/6609) |
| **Medium** | [#6635](https://github.com/agentscope-ai/QwenPaw/issues/6635) / [#6633](https://github.com/agentscope-ai/QwenPaw/issues/6633) Console/Skills MB payloads vs 30s timeout | Open | — |
| **Medium** | [#6565](https://github.com/agentscope-ai/QwenPaw/issues/6565) Multiline shell commands: newlines → spaces + Linux pipe bg hang | Open | — |
| **Low** | [#6583](https://github.com/agentscope-ai/QwenPaw/issues/6583) Drag-drop files single-line overflow | Open | — |
| **Low** | [#6643](https://github.com/agentscope-ai/QwenPaw/issues/6643) Artifacts pile in `media/` dir | Open | — |

**Note**: 6 bugs closed today (#6537, #6160, #6655, #6589, #6547, #6626) — good closure rate.

---

## 6. Feature Requests & Roadmap Signals
| Request | Issue | Signals |
|---------|-------|---------|
| **GPT-5.6 prompt caching** | [#6649](https://github.com/agentscope-ai/QwenPaw/issues/6649) | Explicit API param support; likely in v2.1.x |
| **Model fallback with cooldown** | [#2199](https://github.com/agentscope-ai/QwenPaw/pull/2199), [#6659](https://github.com/agentscope-ai/QwenPaw/pull/6659) | Two PRs active; addresses [#1327](https://github.com/agentscope-ai/QwenPaw/issues/1327), [#2089](https://github.com/agentscope-ai/QwenPaw/issues/2089); high priority for reliability |
| **User context pass-through (Chat→Agent→Tool→MCP→SKILL CLI)** | [#6525](https://github.com/agentscope-ai/QwenPaw/pull/6525) | Large PR, programmatic metadata flow; enables multi-tenant/audit |
| **File/folder management REST API** | [#6651](https://github.com/agentscope-ai/QwenPaw/pull/6651) | Completes Files page; 6 ops (CRUD, upload, download, list) |
| **Structured run outcome in SSE** | [#5930](https://github.com/agentscope-ai/QwenPaw/pull/5930) | API automation: Java/services need explicit success/failure/loop-detect |
| **Unified provider discovery & routing** | [#6302](https://github.com/agentscope-ai/QwenPaw/pull/6302) | Architectural; separates discovered vs configured models |
| **Drag-drop read original path (no upload)** | [#6642](https://github.com/agentscope-ai/QwenPaw/issues/6642) | UX parity with Cursor/Claude Desktop |
| **Per-task artifact directories** | [#6643](https://github.com/agentscope-ai/QwenPaw/issues/6643) | Organization; replaces flat `media/` |
| **Multi-agent collaboration guidance** | [#6621](https://github.com/agentscope-ai/QwenPaw/issues/6621) | Docs + default behavior; users expect auto-delegation |

**Prediction**: v2.1.0 will ship **model fallback**, **GPT-5.6 caching**, **bundled Python**, **skill payload optimization**, and **Files API**. Multi-agent UX and provider unification may slip to v2.2.

---

## 7. User Feedback Summary
| Theme | Representative Voices |
|-------|----------------------|
| **“It works but doesn’t guide me”** | [#6621](https://github.com/agentscope-ai/QwenPaw/issues/6621):

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-08-04

## 1. Today's Overview

ZeroClaw shows **high development velocity** with 100 total GitHub items updated in the last 24 hours (50 issues, 50 PRs). The project is in an **active pre-v0.9.0 hardening phase** — no new releases, but intense RFC activity, security hardening, and architectural refactoring across providers, channels, memory, and observability. The maintainer queue (#8692) and v0.9.0 tracker (#7432) indicate coordinated release planning. Risk labels are predominantly `high`, reflecting the scope of changes touching auth, gateway, tool policy, and session persistence.

---

## 2. Releases

**No new releases** in the last 24 hours. The project appears to be accumulating changes for a v0.9.0 milestone focused on auth/security/gateway breaking changes (tracked in #7432).

---

## 3. Project Progress — Merged/Closed PRs Today

| PR | Title | Area | Impact |
|----|-------|------|--------|
| [#9162](https://github.com/zeroclaw-labs/zeroclaw/pull/9162) | `refactor(providers): extract duplicated OAuth-refresh retry loop into oauth_common` | Providers, Security | Reduces code duplication across provider auth paths; improves maintainability of token refresh logic |
| [#6641](https://github.com/zeroclaw-labs/zeroclaw/pull/6641) | `feat: Turn-level OTel trace correlation` | Observability | Nests `llm.call`, `tool.call`, `memory.*` spans under a single turn trace — major observability improvement |
| [#7113](https://github.com/zeroclaw-labs/zeroclaw/pull/7113) | `feat(slack): show visible lifecycle progress while agent is working` | Channels (Slack) | UX improvement: eliminates silence during long-running agent turns in Slack |

**Closed issues** (7 total) include stale/accepted bugs (#6002 Telegram addressing, #1 XOR cipher — critical crypto flaw) and completed enhancements.

---

## 4. Community Hot Topics — Most Active Discussions

| Item | Comments | Type | Core Need |
|------|----------|------|-----------|
| [#8303](https://github.com/zeroclaw-labs/zeroclaw/issues/8303) RFC: Goal mode v1 — bounded foreground Matrix work | 11 | RFC (High risk) | Durable multi-turn agent execution with bounded scope; control-plane design for goal pursuit |
| [#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) Tracker: Maintainer decision queue for RFCs | 8 | Tracker | Centralized decision queue for RFCs, design issues, release policy — signals governance scaling |
| [#9488](https://github.com/zeroclaw-labs/zeroclaw/issues/9488) RFC: Unified attachment architecture for web chat and channels | 8 | RFC (High risk) | Consistent file/image handling across web UI and all channel adapters (Matrix, Slack, Telegram, etc.) |
| [#6157](https://github.com/zeroclaw-labs/zeroclaw/issues/6157) Bug: Nextcloud Talk wrong bot message API | 8 | Bug (Blocked, High risk) | Channel adapter correctness; unblocked Nextcloud Talk integration |
| [#7232](https://github.com/zeroclaw-labs/zeroclaw/issues/7232) RFC: Structured Observability Enhancement | 5 | RFC (High risk) | Rich events, OTel correlation, sensitive-data redaction in telemetry |
| [#9598](https://github.com/zeroclaw-labs/zeroclaw/issues/9598) RFC: Define SOP capability permission contract | 3 | RFC (High risk) | Authorization model for Standard Operating Procedures — critical for v0.9.0 security model |

**Pattern**: RFCs dominate discussion. Contributors are designing **cross-cutting contracts** (goals, attachments, observability, SOPs, telemetry) rather than isolated features. High `risk:high` labels indicate these are recognized as architectural decisions.

---

## 5. Bugs & Stability — Reported Today (Ranked by Severity)

| Issue | Severity | Component | Status | Fix PR? |
|-------|----------|-----------|--------|---------|
| [#9642](https://github.com/zeroclaw-labs/zeroclaw/issues/9642) Approval timeout recorded as explicit denial | **Critical** (falsifies audit trail) | Security, Channels, Runtime | In-progress | Likely (follow-up tracked) |
| [#9718](https://github.com/zeroclaw-labs/zeroclaw/issues/9718) Telegram duplicates when model emits tool_call + content | S2 (Degraded) | Runtime, Channels (Telegram) | Open | No PR yet |
| [#7527](https://github.com/zeroclaw-labs/zeroclaw/issues/7527) macOS desktop app reopens blank/no window | S1 (Workflow blocked) | Runtime, Desktop (Tauri) | Open, needs repro | No |
| [#6157](https://github.com/zeroclaw-labs/zeroclaw/issues/6157) Nextcloud Talk wrong bot API | S3 (Minor) | Channels | Blocked | No |
| [#6002](https://github.com/zeroclaw-labs/zeroclaw/issues/6002) Telegram "not clearly addressed to assistant" | S1 (Workflow blocked) | Runtime, Channels | Closed (stale) | N/A |

**Critical finding**: #9642 **corrupts audit logs** — timeout ≠ denial. This is a security/compliance regression. Fix is in progress.

---

## 6. Feature Requests & Roadmap Signals

| Signal | Source | Likelihood for v0.9.0 |
|--------|--------|----------------------|
| **Goal Mode v1** — bounded multi-turn agent execution | [#8303](https://github.com/zeroclaw-labs/zeroclaw/issues/8303) (RFC, 11 comments) | High — core agent runtime |
| **Unified Attachment Architecture** — cross-channel file handling | [#9488](https://github.com/zeroclaw-labs/zeroclaw/issues/9488) (RFC) | High — UX consistency |
| **SOP Permission Contract** — authorization for procedural skills | [#9598](https://github.com/zeroclaw-labs/zeroclaw/issues/9598) (RFC) | High — v0.9.0 security milestone |
| **Workspace-relative forbidden paths + .zeroclawignore** | [#8424](https://github.com/zeroclaw-labs/zeroclaw/issues/8424) (RFC) | Medium — security hardening |
| **Staged Opt-in Product Telemetry** | [#9621](https://github.com/zeroclaw-labs/zeroclaw/issues/9621) (RFC) | Medium — maintainer visibility |
| **Memory Consolidation with Schema Validation** | [#6998](https://github.com/zeroclaw-labs/zeroclaw/issues/6998) (RFC) | Medium — reliability |
| **ZeroCode SOP Pane MVP** — status visibility | [#9682](https://github.com/zeroclaw-labs/zeroclaw/issues/9682) (Tracker) | High — active implementation |
| **Gateway WebSocket Decoupling** — background turns, resume on reconnect | [#7759](https://github.com/zeroclaw-labs/zeroclaw/issues/7759) | High — UX/resilience |

**Prediction**: v0.9.0 will ship **auth/security/gateway breaking changes** (#7432), **Goal Mode**, **SOP auth**, and **unified attachments**. Memory refactor (#9072) and observability (#7232) may land in same or next release.

---

## 7. User Feedback Summary — Pain Points & Use Cases

| Pain Point | Evidence | Frequency |
|------------|----------|-----------|
| **Channel reliability** — Telegram duplicates, Nextcloud Talk API bugs, Slack silence during long turns | #9718, #6157, #7113 | 3+ issues |
| **Desktop app instability** — macOS blank window, permission detection | #7527 | 1 (but S1 severity) |
| **Audit log integrity** — timeout recorded as denial | #9642 | 1 (critical) |
| **Configuration complexity** — vision provider migration, forbidden paths only outside workspace | #9707, #8424 | 2 |
| **Observability gaps** — no turn-level traces, DORA metrics dormant | #6641, #9451 | 2 |
| **Provider compatibility** — OpenAI Responses proxy, Hailo-Ollama, DeepSeek tool parsing | #9606, #9109, #9723 | 3 PRs |

**Positive signals**: Contributors actively filing RFCs with Codex assistance, maintainers responsive (#6641 thread), structured review process (#8692 tracker).

---

## 8. Backlog Watch — Stalled High-Value Items Needing Attention

| Item | Age | Why It Matters | Blockers |
|------|-----|----------------|----------|
| [#1](https://github.com/zeroclaw-labs/zeroclaw/issues/1) **XOR cipher for secrets — CRITICAL** | 171 days | Fundamental crypto flaw; `needs-author-action` but no fix merged | Requires crypto redesign; may wait for v0.9.0 security overhaul |
| [#8132](https://github.com/zeroclaw-labs/zeroclaw/issues/8132) **Replace React/Vite with Rust→Wasm (Dioxus/Leptos/Yew)** | 43 days | Eliminates Node.js from build/runtime; reduces attack surface | `needs-author-action`; large migration (XL risk) |
| [#8713](https://github.com/zeroclaw-labs/zeroclaw/pull/8713) **SSRF gate for file_download with `allowed_private_hosts`** | 31 days | Security hardening; `stale-candidate`, `needs-author-action` | Review rounds completed; awaiting maintainer merge |
| [#9069](https://github.com/zeroclaw-labs/zeroclaw/pull/9069) **Dashboard: per-agent backend + memory count (stack 7/7)** | 21 days | Major ZeroCode UX; XL size, re-based 2026-08-03 | Complex multi-PR stack; needs review bandwidth |
| [#9072](https://github.com/zeroclaw-labs/zeroclaw/pull/9072) **Memory: separate authoritative storage from enrichment connectors** | 21 days | Architectural refactor for memory backend pluggability | XL risk; touches core contracts |
| [#9404](https://github.com/zeroclaw-labs/zeroclaw/pull/9404) **Providers: accept data-wrapped compatible chat responses** | 9 days | Provider compatibility; S size but principal contributor | Awaiting review |
| [#9574](https://github.com/zeroclaw-labs/zeroclaw/pull/9574) **Channels: authorize approval responders** | 4 days | **Security fix** — binds approvals to originating chat/room; P1, L size | `needs-author-action`; critical for multi-user channels |

**Top priority for maintainers**: #1 (crypto), #9574 (approval auth), #8713 (SSRF), #9642 (audit log fix) — all security-critical. The RFC queue (#8692) also needs triage to unblock contributors.

---

## Project Health Assessment

| Dimension | Status | Notes |
|-----------|--------|-------|
| **Velocity** | 🟢 High | 100 items/24h; balanced issue/PR ratio |
| **Security Posture** | 🟡 Active hardening | Multiple P1 fixes in flight; but #1 (XOR) unresolved 6 months |
| **Architectural Clarity** | 🟢 Improving | RFC process working; trackers coordinating cross-cutting changes |
| **Release Readiness** | 🟡 Pre-milestone | v0.9.0 scope defined (#7432); no release branch yet |
| **Contributor Experience** | 🟢 Good | Structured RFCs, Codex-assisted drafts, maintainer trackers |
| **Technical Debt** | 🟡 Managed | DORA telemetry retired (#9451); OAuth deduped (#9162); but crypto debt remains |

**Bottom line**: ZeroClaw is executing a **disciplined, high-risk architectural transition** toward v0.9.0. The critical crypto issue (#1) is the oldest and most dangerous open item — resolving it should be a gate for any security-sensitive release.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/DenisZheng/agents-radar).*