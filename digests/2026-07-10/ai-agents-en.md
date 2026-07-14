# OpenClaw Ecosystem Digest 2026-07-10

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-07-10 01:49 UTC

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

# OpenClaw Project Digest — 2026-07-10

## Today's Overview

OpenClaw shows **extremely high activity** with 500 issues and 500 PRs updated in the last 24 hours—indicating a large, actively maintained open-source ecosystem. The project maintains a **healthy 2:1 open-to-closed ratio** across both issues (313 open vs 187 closed) and PRs (298 open vs 202 merged/closed). No new releases were published today. The most critical patterns emerging are **message-loss bugs** (8 high-severity P1 issues), persistent **session-state corruption** problems, and a major **dashboard modularization** effort advancing through 15+ interdependent PRs. A troubling cluster of **security-related issues** around prompt injection (Issue #45740) and tool simulation (Issue #45049) suggests foundational architectural concerns in the agent loop.

**Key Metrics:** 500 Issues active, 500 PRs active, 0 releases, 2.6K total comments across tracked items.

---

## Releases

None — no new releases published on 2026-07-10.

---

## Project Progress

### Merged/Closed PRs Today (202 of 500 total)
- **#103204** [gateway, maintainer] — Fixed OpenRouter and Fireworks live coverage in release validation test suites
- **#103175** [docs] — Added documentation page for the "Lobster" pet feature (part of user-facing settings)

### The "Modular Dashboard" Initiative (Massive Feature Push)
A **coordinated 15+ PR series** (#101097, #101098, #101329, #101354, #101792, #101826, #101829, #101841, #101878, #101899, #101900, #101908, #101913, #101919) is advancing a major architectural overhaul of the web UI dashboard, including:
- **Workspaces tab** — live grid, built-in widgets, Overview-as-data view
- **Sandboxed custom widgets** — with approval flow for security
- **Widget write-back** — persistent state via setState bridge
- **Chart widgets** — SVG-based line/bar/area/sparkline/gauge
- **Preview widget** — embed live URLs with reload/viewport controls
- **Ops widgets** — agent status panel + approvals queue
- **Stateful notes widget** — persistent markdown/todo
- **Inter-widget pub/sub** — tab-scoped message bus
- **Stream + computed data bindings** — event-driven widget updates
- **Living Answers + action-form** — chat↔dashboard integration
- **Workspace time-travel + blame** — version history with provenance
- **Apps layer** — full-bleed tabs + widget gallery
- **Control hub** — per-agent nesting, shared/private tabs, presence
- **Distribution** — shareable deep links, export/import

### Other Notable PRs
- **#102261** [P1] — Interactive parity with Codex runtime: ask-user-question, plan mode, goal mode (video proof provided)
- **#98558** [P1] — Fix for pairing/preserving authorized senders when allowFrom reads fail (spans 20+ components)
- **#93952** [P1] — Hard-deadline runtime auth refresh to prevent gateway deadlock (ready for maintainer review)

---

## Community Hot Topics

### Most Active Issues (by comment count)

1. **#44925** [P1, Diamond Lobster] — Subagent completion silently lost (21 comments)
   - https://github.com/openclaw/openclaw/issues/44925
   - *Analysis:* The community is deeply concerned about silent failures in subagent orchestration. Three failure patterns identified (E31, E42, E45) all result in lost work with no retry or notification. This is **the #1 trust issue** for the project.

2. **#63918** [CLOSED, P2] — Cron agentTurn sends thinking=none to OpenAI (18 comments)
   - https://github.com/openclaw/openclaw/issues/63918
   - *Analysis:* Configuration inconsistency between cron jobs and supported model parameters. Closed with fix, but highlights ongoing fragility in the cron/scheduling system.

3. **#99241** [P1, Platinum Hermit] — Tool outputs render as image attachments (15 comments)
   - https://github.com/openclaw/openclaw/issues/99241
   - *Analysis:* A **critical usability regression** — ANSI-heavy tool workflows become completely opaque to agents when output collapses to image placeholders. Closely related to Issue #100782 (closed, with fix).

4. **#73148** [CLOSED, P2] — Image tool: opaque "Failed to optimize image" (15 comments)
   - https://github.com/openclaw/openclaw/issues/73148
   - *Analysis:* Poor error messaging when optional dependency (sharp) is missing. Closed, but the underlying pattern of unclear dependency errors remains.

5. **#45740** [P2, Diamond Lobster] — gh-issues skill: untrusted issue body injection (14 comments)
   - https://github.com/openclaw/openclaw/issues/45740
   - *Analysis:* **Security concern** — raw GitHub issue bodies injected directly into sub-agent prompts without sanitization. Community calling for prompt isolation measures.

### Most Upvoted Issues
- **#45608** [Feature] — Pre-reset agentic memory flush (4 👍)
- **#73148** [Closed] — Image tool opaque error (3 👍)
- **#84569** [P1] — WhatsApp session stalls (3 👍)
- **#99241** [P1] — Tool outputs as image attachments (2 👍)
- **#89278** [P1] — OAuth refresh timeout (2 👍)

---

## Bugs & Stability

### Critical (P1) Bugs

| Issue | Title | Impact | Fix PR? |
|-------|-------|--------|---------|
| #44925 | Subagent completion silently lost | message-loss, session-state | ❌ (needs product decision) |
| #99241 | Tool outputs render as image attachments | message-loss, session-state | ❌ (needs product decision) |
| #89278 | OAuth refresh timeout (10s) breaks cron | message-loss, auth-provider | ❌ (needs product decision) |
| #49876 | Cron sessions deliver hallucinated output | security, session-state | ❌ (needs product decision) |
| #52249 | ACP parent session stuck until refresh | message-loss, session-state | ❌ (needs maintainer review) |
| #84569 | WhatsApp session stalls on long model_call | message-loss, session-state | ❌ (has linked PR open) |
| #45494 | Cron jobs silently time out on API errors | data-loss, auth-provider | ❌ (needs live repro) |
| #54155 | Gateway memory leak: 389MB → 14.7GB/4 days | crash-loop, session-state | ❌ (needs maintainer review) |
| #99912 | Agent heartbeat routes to wrong session | message-loss, session-state | ❌ (needs maintainer review) |
| #53540 | Embedded runner connection lost on large params | message-loss, session-state | ❌ (needs live repro) |

### High-Severity Security Issues
- **#45740** [P2] — gh-issues skill prompt injection via issue bodies (no fix PR, needs security review)
- **#45049** [P1] — Agent loop allows simulated (fake) tool calls instead of real invocation (no fix PR)
- **#46786** [P1] — tools.elevated.enabled:true breaks exec routing—all exec bypasses sandbox (no fix PR)
- **#92516** [P1] — Containerized deploys can't use externalized channel plugins (no fix PR)
- **#52130** [P1] — Restart storm from Telegram retry jitter type mismatch (no fix PR)

### Regressions Reported Today
- **#102175** [P2] — room_event forces message_tool_only despite visibleReplies=automatic (12 comments, created 2026-07-08)
- **#99912** [P1] — Agent heartbeat routes to wrong agent's session (created 2026-07-04)

### Key Fixes Landed
- **#102351** [P2] — Gateway broadcast payload memory leak fix (ready for maintainer look)
- **#102649** [P2] — Detect MIME from encoded URL extensions (ready for maintainer look)

---

## Feature Requests & Roadmap Signals

### High-Community-Interest Features

1. **Pre-reset agentic memory flush** (#45608, 11 comments, 4 👍)
   - Running memory flush before /new, /reset, and daily reset—using same mechanism as compaction
   - *Prediction:* Likely to land in next 1-2 releases given 4 upvotes and clear architectural alignment

2. **Persistent task-status surface** (#52640, 7 comments, 2 👍)
   - First-class status display for long-running channel turns (Discord first)
   - *Prediction:* Medium priority—dashboard modularization may absorb this

3. **YAML configuration support** (#45758, 7 comments, 2 👍)
   - YAML as alternative to JSON5 for config files
   - *Prediction:* Low priority (P3), but clear user demand from Ops community

4. **Configurable session startup message** (#45501, 6 comments, 1 👍)
   - `session.resetPrompt` to customize /new and /reset startup text
   - *Prediction:* Simple feature, could ship in next minor release

5. **System event priority/bypass-queue mode** (#50739, 7 comments, 2 👍)
   - Reliable in-session alerts that bypass congested LLM request queues
   - *Prediction:* Important for reliability—may accelerate after recent message-loss complaints

### Dashboard R&D
The modular dashboard PR series (#101097–#101919) represents the project's biggest feature investment. The initiative adds **20+ new capabilities** including custom widgets, data bindings, time-travel, and inter-widget communication. Given the PR volume (15+ interleaved PRs), this likely targets the **next major release**.

---

## User Feedback Summary

### Top Pain Points (from issue narratives)

1. **Silent work loss** — Subagent completions disappearing (#44925), tool results invisible to agents (#99241), cron hallucinating instead of failing (#49876)
2. **OAuth reliability** — Auth refresh timeout breaks cron/heartbeat (#89278), deadlock on stuck refresh (#93952)
3. **WhatsApp instability** — Session stalls on long model calls (#84569), inbound images wedge message lane for ~3min (#96834)
4. **Memory/state bloat** — skillsSnapshot and systemPromptReport accumulated on every run (#45718), cost dashboard omits archive files (#46252)
5. **Plugin ecosystem friction** — Self-hosted deploys can't trust channel plugins (#92516), external plugin loading broken

### Use Cases (inferred from issues)
- **Telegram forum bots** — Silent completion loss observed in forum mode (#44925)
- **Enterprise/SaaS** — Containerized self-hosted deploys blocked on plugin trust (#92516)
- **Multi-instance deployments** — Docker sandbox name collisions across 5+ instances (#51363)
- **WhatsApp customer engagement** — Image handling and session stalls (#96834, #84569)
- **Cron automation** — OAuth refresh failures (#89278), hallucinated output (#49876), timeout on API errors (#45494)

### Satisfaction Signals
- **High engagement** — 1,000+ combined issues/PRs active, suggesting strong user investment
- **Feature demand** — 15+ dashboard PRs indicate responsive development to UX improvement requests
- **Testing maturity** — QA Lab extensions (#101253, #102262) show investment in automated validation

### Dissatisfaction Signals
- **Stale bugs** — 5+ P1 issues tagged "stale" with no fix progress for months
- **Security gaps** — Prompt injection (#45740), tool simulation (#45049), sandbox escape (#43996) remain unaddressed
- **Config friction** — XDG_CONFIG_HOME not expanded (#53628), OPENCLAW_HOME nesting bug (#45765)

---

## Backlog Watch

### Stale Critical Issues (No Fix PR, Needs Maintainer Attention)

| Issue | Age | Impact | Status |
|-------|-----|--------|--------|
| **#49876** | ~3.5 months | Cron hallucinates output (security) | stale, P1, needs security review |
| **#50739** | ~3.5 months | System events unreliable during congestion | stale, P2, needs security review |
| **#45494** | ~4 months | Cron jobs silently time out | stale? (tagged regression), P1 |
| **#45740** | ~4 months | Prompt injection via gh-issues skill | stale? (no stale tag), P2 |
| **#45049** | ~4 months | Agent loop allows fake tool calls | stale? (no stale tag), P1 |
| **#45608** | ~4 months | Pre-reset memory flush needed | stale? (no stale tag), P2 |
| **#46252** | ~4 months | Cost dashboard omits archive files | stale, P2 |

### PRs Needing Maintainer Review
- **#93952** [P1] — Hard-deadline auth refresh (ready for maintainer look, created 2026-06-17)
- **#75662** [P2] — Pause yielded main-session runs (ready for maintainer look, created 2026-05-01 — **70 days waiting**)
- **#103112** [P2] — Preserve tools when local-model lean agents use provider overrides (created 2026-07-09, needs proof)

### Blocked Releases
- **#102175** [P2] — room_event regression blocks beta release (tagged "Beta release blocker: No" but destabilizes prompt cache)

---

*Generated 2026-07-10 from 1,000 tracked GitHub items (500 Issues, 500 PRs)*

---

## Cross-Ecosystem Comparison

Here is the cross-project comparison report based on the July 10, 2026 community digest summaries.

---

## Cross-Project Comparison Report: Personal AI Agent Open-Source Ecosystem

**Date:** 2026-07-10

### 1. Ecosystem Overview

The personal AI agent open-source ecosystem is undergoing a **divergent maturation phase**, characterized by a split between massive, rapidly iterating core projects and smaller, focused niches. **OpenClaw** remains the 800-pound gorilla with thousands of daily contributions, but its size is generating significant friction from **message-loss bugs, security vulnerabilities, and a complex dashboard overhaul**. A second tier of projects, including **NanoBot, Hermes Agent, and CoPaw (v2.0)**, are experiencing high-intensity stabilization periods, prioritizing reliability and platform-specific hardening over raw feature velocity. Meanwhile, specialized clients like **PicoClaw** (embedded/Pi) and **LobsterAI** (desktop UI) are advancing their unique value propositions. A critical undercurrent across nearly all active projects is a **tension between sandbox security and agent freedom**, with users demanding better control, observability, and reliability over new features.

### 2. Activity Comparison

| Project | Issues (Open/Total) | PRs (Open/Total) | Release Status | Health Score (Qualitative) |
| :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 313 / 500 | 298 / 500 | No new release | **Low** (High activity, but critical bugs & security gaps) |
| **NanoBot** | ~15 / 22 | ~10 / 22 | No new release | **Moderate** (Intense bug-fixing, high regression rate) |
| **Hermes Agent** | ~36 / 50 | ~34 / 50 | No new release | **Moderate** (Heavy stabilization phase, credential chaos) |
| **PicoClaw** | 3 / 3 | 12 / 16 | No new release (v0.2.9) | **Good** (Healthy, but growing backlog bloat) |
| **NanoClaw** | 9 / 9 | 14 / 14 | No new release | **Moderate-Strained** (Fast feature velocity, security backlog) |
| **NullClaw** | 0 | 0 | N/A | **Dormant** |
| **IronClaw** | ~14 / 32 | ~22 / 50 | No new release (pending) | **Low-Moderate** (Intense Slack/approval UX failures) |
| **LobsterAI** | ~4 / 5 | ~3 / 14 | No new release | **High** (11 PRs merged, strong polish focus) |
| **TinyClaw** | 0 | 0 | N/A | **Dormant** |
| **Moltis** | 0 | 1 | No new release | **Very Low** (Minimal activity, proactive model support only) |
| **CoPaw** | 20 / 35 | 18 / 50 | **v2.0.0-beta.5** (Hot) | **Low-Moderate** (High velocity, significant v2.0 regressions) |
| **ZeptoClaw** | 0 | 0 | N/A | **Dormant** |
| **ZeroClaw** | 36 / 36 | 50 / 50 | No new release | **Moderate** (Deep in major feature work, config UX pain) |

*Note: Health Score reflects project stability, user satisfaction, and backlog health, not development activity.*

### 3. OpenClaw's Position

- **Advantages vs. Peers:**
    - **Unrivaled Community & Scale:** 500+ issues/PRs daily dwarfs every other project. This creates a massive feedback loop for bug discovery and feature requests.
    - **Dashboard as a Platform:** The 15+ PR modular dashboard initiative is an architectural leap no other project matches, aiming to turn the web UI into a composable workspace.
    - **Feature Completeness:** Has the most comprehensive set of channels (Telegram, Discord, WhatsApp, Cron, etc.) and agent capabilities (subagents, memory, skills).

- **Technical Approach Differences:**
    - **Gateway-Centric Architecture:** OpenClaw's core strength is its real-time gateway, but this is also its biggest fragility. The "message-loss" and "session-state corruption" bug cluster (P1s like #44925, #99241) is a direct consequence of this complexity. In contrast, **NanoBot** and **Hermes** have simpler, more isolated session managers.
    - **Security as an Afterthought:** OpenClaw has foundational architectural problems (prompt injection #45740, fake tool calls #45049) that are *not* being treated with the same urgency as feature work. **ZeroClaw** is actively prioritizing SSRF and auth hardening for its v0.9.0 milestone, a more proactive stance.

- **Community Size Comparison:**
    - **OpenClaw** (2.6K comments today) is in a league of its own.
    - **CoPaw** (64 comments on a single onboarding issue) shows a strong, engaged community, likely the second largest.
    - **ZeroClaw** and **Hermes Agent** have active but smaller, more focused developer communities.
    - **LobsterAI** and **PicoClaw** have niche but passionate user bases.

### 4. Shared Technical Focus Areas

The following requirements are emerging as industry-wide pain points:

1.  **Silent Failure & Observability (5 projects):**
    - **OpenClaw:** Subagent completion lost (#44925), tool output invisible (#99241), cron hallucinations (#49876).
    - **NanoBot:** Endless loop on `complete_goal` tool (#4864), WhatsApp responses broken (#4823).
    - **Hermes Agent:** Agent violates saved rules (#60429), silent data loss from session compression (#61145).
    - **IronClaw:** Slack notifications delivered to wrong user (#5877), opaque "model output could not be used" errors (#5883).
    - **NanoClaw:** Silent blackholing on Telegram (#2989), no-reply on long turns (#2985).
    - **Need:** A universal, standard way for agents to surface *why* an action failed or a message was lost.

2.  **Sandbox vs. Agent Autonomy Tension (3 projects):**
    - **CoPaw:** Users requesting a "disable sandbox" toggle (#5879) because it blocks installing Python packages.
    - **OpenClaw:** `tools.elevated.enabled:true` bypassing sandbox entirely (#46786), a security gap.
    - **NanoBot:** Proposal for a `SandboxDriver` interface (#931) to make the sandbox configurable.
    - **Need:** A **graduated security model** (e.g., per-tool allow/deny/ask) rather than a binary sandbox on/off.

3.  **Provider & Credential Reliability (3 projects):**
    - **OpenClaw:** OAuth refresh timeout (#89278), gateway deadlock (#93952).
    - **Hermes Agent:** Model-scoped 429 exhausting entire credential pool (#61451), `/mode` switch cross-wiring `base_url` (#47828).
    - **ZeroClaw:** 120-second hardcoded timeout breaking Anthropic synthesis tasks (#8762).
    - **Need:** Robust credential pool management with per-model rate limiting and graceful degradation.

### 5. Differentiation Analysis

| Project | Core Focus | Target User | Key Differentiator |
| :--- | :--- | :--- | :--- |
| **OpenClaw** | The "iOS" of AI agents | Power users & developers | Most complete, integrated *platform*; massive ecosystem |
| **NanoBot** | Headless task automation | Operations & automation engineers | Lean, reliable runtime; strong on MCP & tool exec safety |
| **Hermes Agent** | Desktop-centric agent | Professional solopreneurs | Rich desktop client (Hermes Desktop); strong TUI & Tray app |
| **PicoClaw** | Resource-constrained edge | Embedded & Raspberry Pi | Optimized for ARM/Low-memory; channel-focused (QQ, Matrix) |
| **NanoClaw** | Secure, multi-tenant agent | Security-conscious teams | "Guarded actions" architecture; scheduled tasks control plane |
| **IronClaw** | Enterprise Slack automation | Business workflows | Deep Slack integration; routine/approval flow focus |
| **LobsterAI** | Chinese-market desktop UX | Chinese-speaking users | Localized UI; Cowork input system; Windows/Mac client |
| **CoPaw** | Multi-channel, China-first | Chinese developers & users | Best Chinese channel support; v2.0 refactor for extensibility |
| **ZeroClaw** | Plugin/WASM ecosystem | Plugin developers & tinkerers | WASM-based plugin system; OpenAI-compatible endpoint |
| **Moltis** | Model compatibility layer | Developers who chase new models | Fastest to add new models (e.g., GPT-5.6); minimal overhead |

### 6. Community Momentum & Maturity

- **Tier 1: Rapidly Iterating (High Instability):**
    - **OpenClaw:** The dashboard modularization is a massive positive step, but the volume of P1 bugs and security issues makes this a high-risk, high-reward project to deploy to production.
    - **CoPaw:** v2.0.0-beta.5 shows clear momentum, but the regression density is high. For users who *need* the new features, it's worth trying; for stability-seekers, v1.1.x remains the safe choice.

- **Tier 2: Stabilization & Hardening:**
    - **NanoBot & Hermes Agent:** Both are actively fixing regressions from recent feature releases. These projects are good candidates for production use *if* you can tolerate some channel-specific instability (e.g., WhatsApp in NanoBot).
    - **ZeroClaw:** In the middle of a major feature push (WASM, multi-user). Ambitious, but currently chaotic for new users.
    - **IronClaw:** Heavily focused on Slack UX. If Slack is your primary channel, the recent bug cluster makes it difficult to recommend right now.

- **Tier 3: Stable & Mature:**
    - **LobsterAI & PicoClaw:** These are the safest bets for their specific use cases. LobsterAI is polishing a mature desktop client, and PicoClaw is a well-understood, resource-efficient project. The only risk is maintainer bandwidth for PicoClaw's growing backlog.

- **Tier 4: Dormant / Niche:**
    - **NullClaw, TinyClaw, ZeptoClaw:** No activity. Effectively abandoned or archived.
    - **Moltis:** Low activity, but serves a specific, stable purpose (model compatibility). A "set it and forget it" tool.

### 7. Trend Signals for AI Agent Developers

1.  **"Reliability over Features" is the Next Frontier:** The single loudest signal across the ecosystem is user frustration with **silent failures**. Developers should prioritize building agents that can articulate *why* they failed (observability), self-heal from session corruption, and surface delivery receipts. A disposable, opaque agent is a trust-breaker.

2.  **The "Sandbox War" is Unresolved:** The tension between security and autonomy is the defining philosophical debate. The best approach is a **gradated policy system**, not a binary switch. Think "App Permissions" for agents: allow/deny/ask for each tool, with clear UI. Projects that solve this elegantly will win the trust of both security teams and power users.

3.  **Multi-Model Credential Management is a Hard Problem:** As users run models from 5+ providers simultaneously, static API keys are insufficient. The ecosystem is converging on **credential pools** (rotation, rate-limiting, per-model scoping). This is a core infrastructure piece any serious agent framework must implement.

4.  **Observability is an Emerging Platform Opportunity:** The lack of a universal agent observability layer is creating a market gap. Tools that can TUI-debug message flow, track token usage per session, and surface "ghost" errors (NanoBot #2995) are invaluable. Projects like **IronClaw** with its QA probes and **NanoClaw** with its `/add-audit` skill are early movers here.

5.  **The "Chinese Stack" is a Parallel Ecosystem:** LobsterAI, CoPaw, and to some extent PicoClaw reveal a distinct ecosystem of Chinese developers and users. Their requirements (Feishu, WeChat Work, QQ channels, Chinese locale UIs) are not being addressed by Western-centric projects. For any developer targeting the global market, this is a critical differentiator or integration point.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

Here is the project digest for **NanoBot** (github.com/HKUDS/nanobot) for **2026-07-10**.

---

## NanoBot Project Digest – 2026-07-10

### 1. Today's Overview
NanoBot is in a period of **high operational intensity**. The project saw 22 issues and 22 PRs updated in the last 24 hours, signaling a large burst of community and maintainer activity. While no new releases were cut today, the project is processing a significant volume of **regression bugs** and **stability patches** across critical subsystems (MCP, WebUI, WhatsApp, exec sandbox). The development focus is clearly shifting from feature velocity toward hardening the runtime, improving tool execution safety, and addressing user-reported regressions introduced in recent updates (e.g., v0.2.2). The backlog also contains a healthy number of stale feature requests, indicating sustained community interest in expanding channel support and agent orchestration.

### 2. Releases
**None.** No new versions were tagged today.

### 3. Project Progress
Five pull requests were merged or closed today, reflecting active maintenance:

- **[#4862 – fix(exec): isolate exec session managers](https://github.com/HKUDS/nanobot/pull/4862)** (Closed & Merged) – Critical architectural fix giving each `AgentLoop` and `SubagentManager` its own session manager, preventing session collisions.
- **[#4857 – Add Dockerfile arg to override optional Python dependencies](https://github.com/HKUDS/nanobot/pull/4857)** (Closed & Merged) – Enhances container build flexibility by allowing users to specify `NANOBOT_EXTRAS` at build time.
- **[#4859 – fix(matrix): preserve mxc markdown image sources](https://github.com/HKUDS/nanobot/pull/4859)** (Closed & Merged) – Fixes a regression where Matrix `mxc://` image sources were being rewritten as harmful links.
- **[#4629 – fix(exec): block relative symlink workspace escapes](https://github.com/HKUDS/nanobot/pull/4629)** (Closed & Merged) – Security fix preventing symlink traversal outside the restricted workspace.
- **[#935 – Remote MCP URL (Streamable HTTP) times out](https://github.com/HKUDS/nanobot/pull/935)** (Closed) – Closed, likely as a dupe or superseded by ongoing MCP work.

### 4. Community Hot Topics
The most active discussions revolve around **configuration confusion** and **feature requests for better control**:

- **Issue #912 – Task-Specific Model Configuration** (5 comments, 3 👍) – [[Link]](https://github.com/HKUDS/nanobot/issues/912) A high-demand feature requesting separate models for conversational vs. tool-use vs. browser-use tasks. This is the most-upvoted open feature request and a strong candidate for a future release.
- **Issue #4823 – WhatsApp Group Responses Broken** (4 comments) – [[Link]](https://github.com/HKUDS/nanobot/issues/4823) Users report that post-v0.2.2, WhatsApp group responses are being sent to all groups the number is in, bypassing the `group_allow` filter. This is a clear regression affecting channel-specific routing.
- **Issue #1006 – Control plane for subagents (list/kill)** (3 comments) – [[Link]](https://github.com/HKUDS/nanobot/issues/1006) Users want the ability to inspect and terminate running subagents, highlighting a gap in operational tooling for multi-agent workflows.
- **Issue #1267 – Zhipu provider doesn't work** (6 comments) – [[Link]](https://github.com/HKUDS/nanobot/issues/1267) A closed issue regarding balance errors with the Zhipu AI provider.

**Underlying need:** The community is demanding more granular control over model selection and multi-agent lifecycle management, while struggling with recent channel-specific regressions.

### 5. Bugs & Stability
Three new high-priority bugs were reported today, with several fix PRs already in flight:

- **High Severity: [#4864 – Endless loop on `complete_goal` tool](https://github.com/HKUDS/nanobot/issues/4864)** – The `complete_goal` tool enters an infinite loop because the gateway now passes the `recap` parameter as a raw string instead of a JSON object. Likely introduced by a recent serialization change. Fix PR: **None yet**.

- **High Severity: [#4823 – WhatsApp groups broken](https://github.com/HKUDS/nanobot/issues/4823)** – A regression in message routing for WhatsApp group conversations. Fix PR: **None identified yet**.

- **Medium Severity: [#4860 – `onboard` and `webui` commands missing](https://github.com/HKUDS/nanobot/issues/4860)** – Users installing via `uv tool install` find that documented commands are not available. This suggests a packaging or CLI entry-point issue.

**Active Fix PRs in review:**
- [#4843 – fix(mcp): defer stale stack cleanup during reconnect](https://github.com/HKUDS/nanobot/pull/4843) – Fixes MCP gateway crash on reconnect.
- [#4840 – fix(shell): reap zombie processes](https://github.com/HKUDS/nanobot/pull/4840) – Addresses resource leaks in the shell/exec session.
- [#4844 – Gate sustained goals behind explicit runtime mode](https://github.com/HKUDS/nanobot/pull/4844) – Redesigns the goal tool system to prevent misuse.
- [#4816 – fix(runner): narrow BaseException catch to Exception](https://github.com/HKUDS/nanobot/pull/4816) – Prevents catastrophic error swallowing in tool execution.

### 6. Feature Requests & Roadmap Signals
Beyond task-specific models, several features signal where NanoBot might be heading:

- **Multi-Tenant Gateway ([#936](https://github.com/HKUDS/nanobot/issues/936))** – A single gateway instance managing multiple agents. **Prediction:** This is a natural next step for scale-out and will likely appear in v0.3.x.
- **Pre-handler Message Routing ([#990](https://github.com/HKUDS/nanobot/issues/990))** – A zero-token hook to route specific messages away from the LLM (e.g., diary entries). **Prediction:** Likely to be added as a plugin/hook extension.
- **SimpleX Chat Support ([#240](https://github.com/HKUDS/nanobot/issues/240))** – Request for a decentralized channel. **Prediction:** Low probability for immediate next release; requires significant protocol work.
- **Sandbox for Untrusted Plugins ([#931](https://github.com/HKUDS/nanobot/issues/931))** – Proposal for a `SandboxDriver` interface. **Prediction:** Not imminent in v0.2.x, likely a v0.4.0 long-term goal.

### 7. User Feedback Summary
Users are clearly frustrated by **recent regressions**, but remain engaged:

- **Pain Point:** WhatsApp channel broke in v0.2.2 – users can no longer restrict responses to specific groups.
- **Pain Point:** The `complete_goal` tool is stuck in an infinite loop due to a JSON parsing issue, making goal completion unusable.
- **Dissatisfaction:** Hallucinations in the `exec` tool (Issue #937) remain a persistent concern, though no new reports were filed today.
- **Satisfaction:** The community is actively submitting high-quality PRs (e.g., new providers like Eden AI, guided setup flows), indicating strong developer buy-in.
- **Use Case:** Users are heavily relying on NanoBot for task automation (cron jobs, goals, message routing) and are vocal about needing better observability and control.

### 8. Backlog Watch
Several important items remain unresolved and should be escalated:

- **Issue #896 – Media files never cleaned up in Telegram/Discord** (2 months stale, 1 comment) – [[Link]](https://github.com/HKUDS/nanobot/issues/896) Causes unbounded disk growth. No maintainer response.
- **Issue #940 – AI agent cannot access host filesystem** (2 months stale) – [[Link]](https://github.com/HKUDS/nanobot/issues/940) Blocks skill creation and media processing. Core architectural limitation.
- **Issue #990 – Pre-handler hook** (2 months stale) – [[Link]](https://github.com/HKUDS/nanobot/issues/990) Significant token-cost saving opportunity, no maintainer engagement.
- **PR #4622 – Cron job model presets** (Open, 9 days old) – [[Link]](https://github.com/HKUDS/nanobot/pull/4622) A polished feature with tests, awaiting merge. Fixes Issue #4378.
- **PR #4145 – Weather Skill** (Open, 40 days old) – [[Link]](https://github.com/HKUDS/nanobot/pull/4145) A contributed skill example that has been languishing without review.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

Here is the project digest for **Hermes Agent** based on GitHub activity on **2026-07-10**.

---

## Hermes Agent Project Digest — 2026-07-10

### 1. Today's Overview
Activity is high but turbulent. **50 issues** and **50 PRs** were updated in the last 24 hours, with a significant number of reports (14 issues) being closed—suggesting an active triage and fix cycle. However, the **new issue creation rate outpaces closures**, and several reports are **duplicates** of recent features, indicating that users are encountering bugs from newly released or rolled-back features. The project appears to be in a **heavy stabilization phase** following recent merges (e.g., credential pools, MoA presets, Discord/Feishu adapters). A strong focus is on **provider authentication**, **session hygiene**, and **test reliability**, with nine fix PRs opened today alone. No new releases were tagged today.

### 2. Releases
**None.** No new releases were published on this date.

### 3. Project Progress
**16 PRs were merged or closed today.** Key advancements:

- **Gateway Reliability (P1):** `#60794` (Discord heartbeat stalls) and `#61145` (session-hygiene destructive deletion) were both fixed and closed via merged PRs.
- **Config Robustness:** `#40834` (malformed scalar sections) and `#58277` (empty YAML key crash) were closed, improving startup resilience.
- **Multi-key Credential Pools:** Critical fix `#61296` (`switch_model` cross-wiring `base_url`) and `#61487` (cascade-marking keys) were both resolved.
- **Desktop/Client:** `#60583` (inaccurate token/s) and `#61657` (Windows desktop build failure) were closed.
- **Tooling:** `#55503` (Holographic memory write lock) fixed via merged PR.
- **Test Pollution:** `#61673` (cron tests writing live `jobs.json`) was closed—addressing a real user-impacting test bug.

### 4. Community Hot Topics
The most active discussions reflect **deep user frustration with credential and model switching**:

- **#18715 (8 comments, 20 👍) [OPEN]:** *"Support remote Hermes agent with local tool execution"* — The most upvoted issue. Users want a **thin-client topology** where a remote agent (with skills, memory) runs locally. This is a strong signal for a **split-architecture** feature roadmap.
- **#38963 (9 comments) [CLOSED]:** *"hermes desktop strat fail, it say no git???"* — A user-facing installer bug on Windows. While closed, the volume of comments indicates Windows desktop onboarding is a persistent pain point.
- **#61487 (5 comments) [CLOSED]:** *"zai provider pool cascade-marks every key"* — A high-impact credential management bug. The fact it was closed quickly suggests maintainers are prioritizing **multi-key pool reliability**.
- **#35410 (3 comments) [OPEN]:** *"Dashboard logout should redirect to IdP end-session endpoint"* — A security/convenience request that has been open since May. Users want proper **SSO logout** (RP-initiated logout), not just local session clearing.

### 5. Bugs & Stability
| Severity | Issue/PR | Summary | Fix PR Exists? |
| :--- | :--- | :--- | :--- |
| **P1 - Critical** | `#60794` [CLOSED] | Discord gateway heartbeat stalls due to synchronous SQLite in `build_channel_directory`. | ✅ Merged |
| **P1 - Critical** | `#61145` [CLOSED] | Gateway auto-compress **deletes** transcript instead of soft-archiving (silent data loss). | ✅ Merged |
| **P2 - High** | `#61451` [OPEN] | Model-scoped 429 (e.g., "Fable") exhausts entire Anthropic credential, blocking other models. | ❌ Open |
| **P2 - High** | `#60429` [OPEN] | Agent **violates saved rules** (memory/skills)—"save a rule… it will violate the rule". | ❌ Open, needs-repro |
| **P2 - High** | `#47828` [CLOSED] | `/mode` model switch keeps old provider's `base_url`, causing 400 errors. | ✅ Merged |
| **P2 - High** | `#60715` [OPEN] | Nous inference API completely unreachable (timeouts); user cannot use portal. | ❌ Open (likely environmental) |
| **P2 - High** | `#61661` [OPEN] | `honcho_conclude` tool sends empty API key—auth failure. | ❌ Open |
| **P2 - Medium** | `#58572` [OPEN] | Gateway crashes on Nous Portal token expiry with **no remote recovery** (headless users locked out). | ❌ Open |

**Notable:** Two P1 bugs (Discord heartbeat, session data loss) were fixed today—very high-value stability wins.

### 6. Feature Requests & Roadmap Signals
- **Top Feature Demand:** `#18715` (remote agent + local tools) — If adopted, this would be a **v1.0-level architecture shift**. Likely to be discussed for next minor release.
- **Self-contained Desktop Client:** `#61329` (thin-client installer for remote backend) — A direct downstream of `#18715`. Signals users want **Herpes Desktop as pure frontend**.
- **Per-cron Reasoning Effort:** `#23524` — Long-lived (May), 3 comments. Small change, high user control. Likely for next patch.
- **Auto Reasoning Mode:** `#40306` (ChatGPT-style auto-detect when to think) — A quality-of-life feature that would differentiate Hermes. Likely in a future minor update.
- **Dashboard SSO Logout:** `#35410` — Security/compliance feature. Open since May; maintainer attention needed.

### 7. User Feedback Summary
- **Pain Point #1 — Credential & Provider Chaos:** Users are frustrated that switching models (`/mode`) or using credential pools leads to **endpoint/credential cross-wiring**. Multiple issues (`#47828`, `#61296`, `#61487`, `#61451`) all stem from the same root: credential rotation logic is fragile.
- **Pain Point #2 — Rules/Memory Non-Compliance:** `#60429` shows a user who set rules that the agent **actively violates**. This is a **core trust issue** for agentic use.
- **Pain Point #3 — Windows Desktop Onboarding:** `#38963` and `#61657` show repeated **installer failures** on Windows 11, suggesting the Electron-based desktop build process is unreliable.
- **Satisfaction Signal:** The closure of `#60794` and `#61145` (data loss, Discord stall) will likely improve sentiment among heavy Discord/gateway users.
- **Use Case Demand:** Professional users (e.g., `#18715`, `#17977`) clearly want **workstation-grade setups**: remote agents, local tools, and customizable TUI.

### 8. Backlog Watch
These items have been open for **extended periods** without maintainer response and carry significant weight:

- **`#18715`** (May 2) — 20 👍, 8 comments. **No maintainer reply.** The most popular request. Silence here risks user abandonment.
- **`#17977`** (April 30) — Configurable panels/skin parity. **No maintainer reply.** Visual customization is a common ask.
- **`#29248`** (May 20) — `/reasoning max` rejected by frontend despite adapter support. **No maintainer reply.** A P2 inconsistency that should be trivial to fix.
- **`#35410`** (May 30) — Dashboard SSO logout. **No maintainer reply.** A security gap in enterprise deployments.
- **`#48269`** (June 18) — Desktop `vision_analyze` ignores config. **No maintainer reply.** A platform-specific bug affecting desktop users.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-07-10

## Today's Overview

The PicoClaw project shows **moderate activity** over the past 24 hours, with **3 open issues** (none closed) and **16 pull requests** in motion (12 open, 4 merged/closed). No new releases were published. The issue tracker remains stable with three active items, while the PR queue reflects a healthy mix of **dependency updates** (6 of the 16 PRs), **bug fixes**, and **feature work**. The most significant area of activity is infrastructure: multiple Dependabot bumps for AWS SDK, Golang sync, GitHub Copilot SDK, and Pion RTP libraries signal ongoing maintenance rigor. Notably, the Copilot SDK dependency is being upgraded across a major version boundary (0.2.0 → 1.0.x), which may indicate an upcoming integration change or API compatibility shift.

## Releases

**No new releases** were published in the last 24 hours. The project remains on **v0.2.9** (git revision 2992...). No migration notes or breaking change advisories are available at this time.

## Project Progress

Four pull requests were **merged or closed** in the last 24 hours:

- **[PR #3226] fix(tools): stop write_file from coaching destructive overwrite (#3150)** (closed by ACMYuechen) — Addresses a behavioral issue where the `write_file` tool, when targeting an existing file like `memory/MEMORY.md`, would "frame" it purely as a replace operation and even coach the model toward destructive overwrite instead of suggesting merge or append strategies. A user-facing fix that prevents accidental data loss.

- **[PR #3171] fix(line): add ok checks for sync.Map type assertions in Send** (closed by chengzhichao-xydt) — Hardens the LINE channel's `Send` method against potential panics by adding `ok` checks for type assertions on `sync.Map` loads. Prevents crashes from unexpected map value types.

- **[PR #3226]** (duplicate identifier — the above linechannel fix) and **two Dependabot PRs** — **[PR #3213]** (bump `aws-sdk-go-v2/config` 1.32.25→1.32.27) and **[PR #3207]** (bump `copilot-sdk/go` 0.2.0→1.0.5) were also closed/merged, keeping dependencies current.

## Community Hot Topics

**Most active issues and PRs** based on comment counts:

- **[Issue #3201] [Feature] Support streaming output for QQ channel** — 2 comments, by YsLtr. This feature request asks for token-by-token streaming support (similar to Telegram and Pico WebSocket channels) for the QQ messaging platform. The need is clear: users on QQ experience full-response latency while other channel users enjoy real-time incremental output. The request is technically straightforward as the project already has a `StreamingCapable` interface pattern implemented elsewhere.

- **[Issue #3206] v2→v3 config migration fails with false 'unknown field(s)'** — 1 comment, by OhYash. A user reports a fresh install fails during v2→v3 config migration due to fields `build_info` and `session.dm_scope` being flagged as unknown. This occurs on v0.2.9, which suggests either a regression in the migration code or a version mismatch in the config schema validator.

- **[Issue #3203] [BUG] Matrix sync loop has no reconnection logic** — 1 comment, by weissfl. The Matrix channel's `/sync` long-poll loop silently dies after network disruption or homeserver restart, with no auto-reconnection. Since the main process stays alive, systemd's `Restart=on-failure` does not trigger, leading to a dead but "alive" agent.

**Underlying needs:** Users are pushing for **channel parity** (QQ streaming), **reliable operation** (Matrix reconnection), and **smooth upgrades** (config migration). These reflect a mature user base that expects professional-grade reliability and feature consistency across all supported channels.

## Bugs & Stability

**Three bugs** are currently open, ranked by severity:

| Severity | Issue | Description | Fix PR? |
|----------|-------|-------------|---------|
| **High** | [#3203] | Matrix sync loop silent death — agent becomes non-functional without systemd noticing | No open fix PR |
| **Medium** | [#3206] | v2→v3 config migration fails on fresh install — blocked setup for new users | No open fix PR |
| **Low-Medium** | [#3201] | QQ missing streaming (feature gap, not a crash) | No fix PR (feature request) |

The Matrix reconnection bug is the most critical: it creates a **silent failure** that monitoring systems cannot detect, meaning production deployments could lose communication for extended periods. The config migration bug blocks new users entirely.

No new bugs were reported in the last 24 hours; all three were previously created (July 1–2) and remain open.

## Feature Requests & Roadmap Signals

Two features are actively being developed or requested:

- **[PR #3118] Add remote Pico WebSocket mode to picoclaw agent** (by jp39, 28 days open, 34 comments) — Extends the `picoclaw agent` command to support `--remote ws://...` connections. This would allow the agent CLI to function as a remote client to a Pico WebSocket server. Still open, suggesting complexity or scope creep.

- **[Issue #3201] QQ channel streaming** — A clean, straightforward feature request following an established pattern. Given that streaming capability is a documented interface and already implemented in two channels, this is a **strong candidate for the next release**.

Other PRs signal **platform expansion**: The Linux ARMv7 build target (PR #3205) suggests active work on Raspberry Pi support, and the Bedrock Converse prompt caching feature (PR #3163) indicates advanced LLM API optimization integration.

**Prediction for next version (v0.3.0 or v0.2.10):** Likely includes Matrix reconnection fix, config migration fix, and QQ streaming. The Copilot SDK major version bump may also land, potentially unlocking new Copilot integration capabilities.

## User Feedback Summary

**Pain points expressed by users:**

1. **"Silent death" on Matrix** (Issue #3203) — User weissfl reports that after a network disruption, the Matrix channel dies without any error, and systemd cannot restart it. This creates a support burden for administrators who must manually detect and restart agents.

2. **"Impossible to get started"** (Issue #3206) — User OhYash reports that even a fresh install of the latest release fails to load config, preventing first use entirely. This is a significant first-impression problem.

3. **Write_file destructive behavior** (PR #3226, now fixed) — The `write_file` tool actively coached the model toward destructive overwrites rather than suggesting non-destructive alternatives, risking user data loss.

4. **Raspberry Pi / ARM platform gaps** (PR #3205) — User sarwonous reports no ARM build target for the launcher and parsing failures with the 9router gateway, indicating that ARM/Raspberry Pi users face a rough experience.

**Positive signals:** The fact that tools like `write_file` behavior and LINE channel panic safety are being proactively hardened (and merged quickly) suggests the maintainers are responsive to safety concerns.

## Backlog Watch

**Long-unanswered items needing maintainer attention:**

| Item | Age | Description | Status |
|------|-----|-------------|--------|
| **[PR #3118]** Remote Pico WebSocket mode | 28 days, 0 comments from maintainers | Adds `--remote ws://...` to agent CLI. No maintainer response visible in the PR summary or data. | Stalled — likely requires architectural decisions. |
| **[PR #3115]** Fix inline data URL media extraction | 28 days | Fixes session corruption from `data:` URIs in plain text tool output. No merge or maintainer response. | Medium priority — data corruption is a serious bug. |
| **[Issue #3206]** Config migration failure | 8 days | Blocks new user setup entirely. 1 comment (likely from author). No maintainer triage visible. | **Critical** — blocks new deployments. |
| **[Issue #3203]** Matrix reconnection | 8 days | Silent death of Matrix channel. 1 comment. No maintainer response. | **Critical** — production reliability issue. |
| **[Issue #3201]** QQ streaming | 9 days | Feature request, 2 comments. No maintainer response. | Low urgency but user demand is clear. |

**Notable observation:** The two **critical-severity bugs** (config migration, Matrix reconnection) have been open for 8 days with **no visible maintainer response**. This is concerning for project health. The two 28-day-old PRs with no review activity suggest possible maintainer bandwidth issues or a triage bottleneck.

---

*Data sourced from github.com/sipeed/picoclaw, snapshot 2026-07-10. All links are to the sipeed/picoclaw repository.*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-07-10

## Today's Overview

NanoClaw is in a **high-velocity development cycle**, with 9 open issues and 14 open PRs updated in the last 24 hours. The project is actively shipping the **scheduled-tasks train** (Parts 2 and 3 merged this week) and a major **guarded-actions security architecture** is landing. Three PRs were merged/closed today, covering container runtime resilience, line-ending consistency, and task session isolation. The issue tracker shows several Telegram-specific bugs and two critical security advisories (#2827, #2762) awaiting maintainer resolution. Overall project health is **strong but strained** — rapid feature velocity is outpacing the resolution of security and stability concerns.

## Releases
**No new releases** today. The last tag remains unreported; the project appears to be in a continuous pre-release phase with active trunk development.

## Project Progress

Three PRs were merged or closed today:

- **#2993 [CLOSED]** — `Make NanoClaw resilient to a down container runtime` (shiranLupo). Prevents process crash when Docker Desktop is not running; Discord and scheduled tasks now survive a missing runtime gracefully.
- **#2981 [CLOSED]** — `Scheduled tasks: ncl tasks control plane, isolated sessions, script gate` (omri-maya, Part 2/5). Ships full `ncl tasks` resource with create/update/run/append-log, per-series isolated sessions, run history, and pre-task approval gate.
- **#2621 [CLOSED]** — `chore: add .gitattributes to enforce LF line endings for shell scripts` (GarethWright). Cross-platform line-ending normalization for contributors on Windows.

**Features that advanced today** (open + ongoing):
- #2988 `Tasks: one-door delivery` — Part 3/5 of tasks train; restricts task-fires to `send_message` as the sole outbound path
- #2986 `Guarded-actions phase 2` — Centralized `guard()` decision function for all privileged actions
- #2987 `/add-audit skill` — SIEM-shaped NDJSON audit log for the ncl command surface
- #2983 `Per-group harness capability toggles` — Lean defaults for new groups, grandfather existing

## Community Hot Topics

1. **#2989 Telegram: channels silently blackholed** (1 comment) — `allixsenos` reports that the Telegram adapter omits `allowed_updates`, causing Telegram to persist a narrow filter server-side. When the bot token was previously used with a restricted `allowed_updates`, channels go dark. **Underlying need**: deterministic Telegram polling configuration independent of token history.

2. **#2985 opencode provider: silent no-reply on long turns** (1 comment) — `fjnoyp` consistently reproduces a bug where the agent completes a long turn but no reply is delivered and no error is raised. Traced to missing `session.idle` in the final text snapshot. **Underlying need**: reliable delivery guarantees for long-running agentic turns.

3. **#2997 Recurring tasks with fixed text stop after first fire** (0 comments) — `glifocat` reports `hasIdenticalSend` incorrectly matches sends from previous fires, blocking recurring reminders. The only trace is a dropped echo log line. **Underlying need**: deduplication logic must scoped to within-session, not cross-session.

## Bugs & Stability

**Critical severity:**
- **#2989 Telegram: channels silently blackholed** — No delivery, no error. Affects all Telegram channel users who have previously used the same bot token. No fix PR yet.
- **#2985 opencode provider: silent no-reply** — Agent completes, answer lost, no error. Affects long agentic turns with opencode provider. No fix PR yet.
- **#2827 / #2762 Security: MCP server approval flow hides `args` and `env`** — Two advisories on the same root cause: approval card shows only server name, allowing hidden payload to be approved. **37 days since #2762 filed**, still no resolution. No fix PR.

**High severity:**
- **#2995 Outbound messages to offline channel adapter marked delivered** — Messages silently dropped when adapter is not registered. **Fix PR #2996 open** (route into retry path).
- **#2997 Recurring tasks with fixed text stop after first fire** — Reminder text deduplication over-scopes. No fix PR yet.

**Medium severity:**
- **#2992 Scheduled tasks invisible across sessions of the same agent group** — `list_tasks`/`cancel_task` only operate on calling session's DB. Multi-group agent groups cannot manage shared tasks. No fix PR.
- **#2991 Telegram: `sender_scope='known'` never engages** — Channel posts are anonymous; `known` scope never matches. No fix PR.
- **#2990 Telegram: bot does not react to being added to a chat** — `my_chat_member` updates silently discarded. No fix PR.

## Feature Requests & Roadmap Signals

- **Scheduled-tasks train (Parts 3-5)** — #2988 (one-door delivery) merged; Parts 4 and 5 still in pipeline. This is the largest roadmap item in flight.
- **Guarded-actions phase 2** — #2986 centralizes all privileged action decisions into `guard()`. Likely to land in next release.
- **Local audit logging** — #2987 `/add-audit skill` — SIEM-shaped, append-only NDJSON. Likely to ship alongside guarded-actions.
- **Telegram rich rendering** — #2877 uses Bot API 10.1 `sendRichMessage`. Still open; will enable native rich text rendering on Telegram.
- **Per-group capability toggles** — #2983 lets operators disable excess harness features per group. Lean defaults for new groups.

## User Feedback Summary

**Pain points (consistent themes):**
1. **Silent failures** dominate feedback — three separate bugs (#2985, #2995, #2989) where the bot appears to ignore messages, mark as delivered, or produce no reply without any error surfaced to the user or host logs.
2. **Telegram reliability** is a recurring concern — #2989, #2991, #2990 all affect Telegram users specifically, covering channel visibility, scope-based engagement, and membership detection.
3. **Task management fragmentation** — #2992 shows that multi-session agent groups cannot see or manage each other's scheduled tasks, breaking cross-session workflows.
4. **Recurring task usability** — #2997 breaks the core use case of daily/weekly recurring reminders with stable text.

**Satisfaction signals:** The rapid merging of the scheduled-tasks train (#2980, #2981, #2988) and container resilience fix (#2993) show the maintainers are actively addressing core infrastructure pain points. The no-reply bug (#2985) hit `fjnoyp` "consistently" — indicating it's a blocker for serious opencode provider usage.

## Backlog Watch

| Issue/PR | Age | Status | Concern |
|----------|-----|--------|---------|
| **#2827** Security: MCP server approval smuggling | 19 days | OPEN, 0 comments | 2 advisories, same root cause — no maintainer response visible. **Critical security vulnerability**. |
| **#2762** Security: hidden `args`/`env` in approval flow | 26 days | OPEN, 0 comments | Older sibling of #2827, same vulnerability. **No activity from maintainers**. |
| **#2226** fix: throw on missing channel adapter | 68 days | OPEN, 0 comments | Early (May) alternative approach to #2995/#2996 — superseded but not closed. |
| **#2544** Telegram: enable message_reaction + callback_query | 53 days | OPEN, 0 comments | Enhancement PR; no merge conflicts mentioned but no movement since May. |
| **#2618** Multimodal/ reactions v1 restoration | 46 days | OPEN, 0 comments | Large feature (image/voice/PDF + reactions); no maintainer review visible. |
| **#1598** add-remote-storage skill + ncl mount commands | 99 days | OPEN, 0 comments | **Oldest open PR** — submitted via `/contribute` in April, no maintainer engagement. |

**Critical:** The two security advisories (#2827, #2762) on MCP server approval smuggling have **no maintainer comments and no fix PR** after 19-26 days. This is a significant project risk for production deployments.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-07-10

## Today's Overview

IronClaw shows a day of intense stabilization activity with 32 issues updated in the last 24 hours and 50 PRs updated, indicating a sustained push toward production quality. The project saw heavy activity in the `bug_bash` category, with 18 new P2 and P3 bugs filed on July 9 alone, many clustered around Slack integration, authentication flows, and routine execution reliability. On the positive side, the team closed 28 PRs (merged/closed out of 50 updated), with a clear pattern of structural improvements: default-backed builders, CI pipeline hardening, and the beginning of a major runner control plane reorganization (Wave 4). The absence of a new release this period suggests the team is accumulating fixes before cutting a version that bundles the Slack automation corrections and the WASM tool install foundation being prepared in the PR stack.

## Releases

No new releases were published in the last 24 hours. The pending release PR (#5598) remains open, proposing bumps for four crates including `ironclaw` (0.24.0 → 0.29.1) with breaking changes in `ironclaw_common` and `ironclaw_skills`. Given the volume of fixes landing, a release is likely imminent but has not yet been cut.

## Project Progress

**28 PRs merged or closed today**, spanning three main themes:

- **Structural cleanup (ilblackdragon's setter chain migration):** A stack of ~10 PRs merged that convert sparse, default-heavy Rust struct construction across Reborn crates to fluent `::default().set_*()` chains. This touches `event store tests`, `memory native fixtures`, `trigger poller config`, `reborn composition fixtures`, `CLI config fixtures`, and more. The work is mechanical but improves readability and reduces boilerplate.

- **CI and build hardening:** 
  - PR #5652 (merged): Denies `unused_must_use` at the workspace level — discarded `Result` values now fail the build. Zero current fires across the entire workspace.
  - PR #5900 (open): Adds a new hosted Postgres API capacity nightly job that boots a real `ironclaw-reborn serve` against `pgvector` in GitHub Actions.

- **Legacy removal:** PRs #5826 and #5827 (both closed) delete legacy v1 coverage-focused test binaries and their orphaned trace fixtures, reducing CI maintenance cost.

- **Feature advancement:**
  - PR #5499 (open, XL): Lays the foundation for configurable WASM tools in Reborn: install from zip, env-provisioned tenant-shared credentials.
  - PR #5899 (open): QA 9 automation delivery probes for Slack automation failure classes—intentionally RED against current main, to be turned green by #5898.
  - PR #5901 (open, XL): Co-locates and names the Reborn runner control plane, completing Wave 4's actionable deliverables.
  - PR #5902 (open): Fix for context compaction error (#5838) by persisting LocalDev tool results outside the model context.
  - PR #5898 (open): Fixes three recurring Slack automation failures (per-trigger delivery, ID→name enrichment, single-delivery contract).

## Community Hot Topics

**Most active issues by comment count:**

| Issue | Comments | Description |
|-------|----------|-------------|
| [#5553](https://github.com/nearai/ironclaw/issues/5553) | 4 | Approval notifications disappear instead of remaining in notification history |
| [#5747](https://github.com/nearai/ironclaw/issues/5747) | 3 | No way to unpair Slack on built-in host-beta mount |
| [#5701](https://github.com/nearai/ironclaw/issues/5701) | 3 | Activity panel hides tool details and does not update during active run |

These top-commented issues all relate to **fundamental UX gaps in the automation approval flow and activity visibility**. The approval notification issue (#5553) has been open since July 2 with 4 comments but no fix PR yet—users cannot reliably see or act on approval requests. The Slack unpairing issue (#5747) highlights a UI dead-end where users get stuck after initial Slack pairing with no escape. The activity panel transparency issue (#5701) suggests users need real-time visibility into what their automations are doing. All three signal a broader pattern: the automation user experience remains opaque and difficult to manage.

**No PRs generated significant comment discussion** today, indicating most code review is happening in-line rather than in issue discussion threads.

## Bugs & Stability

**Highest severity (P1):**
- [#5877](https://github.com/nearai/ironclaw/issues/5877) — **Slack notification delivered to the wrong user.** Sensitive workflow results sent to an unrelated recipient. No fix PR identified yet.
- [#5504](https://github.com/nearai/ironclaw/issues/5504) — (Closed) Routine creation hangs indefinitely without returning result or error. Likely fixed but closed without explicit fix notes.

**Medium severity (P2) — 14 bugs filed on July 9 alone**, with notable clusters:

| Issue | Problem | Fix Status |
|-------|---------|------------|
| [#5886](https://github.com/nearai/ironclaw/issues/5886) | Pending approval blocks subsequent automation runs | No PR |
| [#5887](https://github.com/nearai/ironclaw/issues/5887) | Run hits max action limit, discards all progress | No PR |
| [#5878](https://github.com/nearai/ironclaw/issues/5878) | Revoked GitHub token produces misleading errors | No PR |
| [#5885](https://github.com/nearai/ironclaw/issues/5885) | Approval notification opens action without showing approval card | No PR |
| [#5884](https://github.com/nearai/ironclaw/issues/5884) | Routine loses credentials after external token revocation | No PR |
| [#5883](https://github.com/nearai/ironclaw/issues/5883) | Generic "model output could not be used" after successful exec | No PR |
| [#5882](https://github.com/nearai/ironclaw/issues/5882) | Repeated Slack reconnect leaves auth flow broken | No PR |
| [#5881](https://github.com/nearai/ironclaw/issues/5881) | Auth notification sent to wrong Slack app/channel | No PR |
| [#5880](https://github.com/nearai/ironclaw/issues/5880) | Slack auth completed externally not reflected in Web UI | No PR |
| [#5879](https://github.com/nearai/ironclaw/issues/5879) | Stale error banner persists after successful response | No PR |
| [#5838](https://github.com/nearai/ironclaw/issues/5838) | Context compaction error despite successful tool execution | **PR #5902** (open, fixes it) |
| [#5836](https://github.com/nearai/ironclaw/issues/5836) | Routine fails every 5 min with "No thread attached" | No PR |
| [#5553](https://github.com/nearai/ironclaw/issues/5553) | Approval notifications disappear (open since July 2, 4 comments) | No PR |

**Lower severity (P3) — 6 new bugs:**
- [#5891](https://github.com/nearai/ironclaw/issues/5891) — "Last completed" displays active run timestamp
- [#5890](https://github.com/nearai/ironclaw/issues/5890) — Slack notifications from inconsistent sender identity
- [#5889](https://github.com/nearai/ironclaw/issues/5889) — "Load older messages" button non-functional
- [#5888](https://github.com/nearai/ironclaw/issues/5888) — Cannot delete old threads from thread list
- [#5706](https://github.com/nearai/ironclaw/issues/5706) — (Closed) Raw thread ID shown in sidebar under load
- [#5705](https://github.com/nearai/ironclaw/issues/5705) — (Closed) Terminal icon has no disable option

**Positive note:** The P1 routine creation hang (#5504) and several P3 UI bugs (#5706, #5705) were closed today, suggesting the team is triaging lower-hanging issues. The critical Slack notification misdelivery bug (#5877) has no fix yet and represents the highest-priority open stability concern.

## Feature Requests & Roadmap Signals

- [**CLI/TUI for Managing Secrets**](https://github.com/nearai/ironclaw/issues/2601) — Issue #2601, open since April 18 with 1 comment, requests better documented secret management. This long-standing request remains unaddressed but given the current token revocation failures (#5878, #5884), the UX gap around credential management becomes more urgent. Likely to be addressed in a future release focused on authentication DX.

- [**WASM tool install from zip**](https://github.com/nearai/ironclaw/pull/5499) — PR #5499 lays foundation for configurable WASM tools, a significant feature enabling third-party tool extension. This appears destined for the next release.

- [**JMT x402 Agent Tools (25 endpoints)**](https://github.com/nearai/ironclaw/pull/5903) — PR #5903 from a new contributor adds 25 paid x402 endpoints on Base mainnet for web search, AI analysis, crypto/stock data, etc. This signals growing external ecosystem interest.

- **Default-backed builder pattern** — The setter chain migration that dominated today's merged PRs is not user-facing but indicates the team is investing in code quality infrastructure before cutting the next release.

## User Feedback Summary

**Strong dissatisfaction** with core automation reliability, especially around Slack and approval flows:

- **Slack integration is the most painful area:** Users report notifications going to wrong channels (#5877, #5881), no way to unpair (#5747), auth flows breaking after reconnect (#5882), and inconsistent sender identity (#5890). The word "broken" appears repeatedly in user reports.

- **Approval flow UI is effectively unusable:** Notifications disappear (#5553), approval cards don't render when clicked (#5885), pending approvals block future runs (#5886), and external auth completions aren't reflected in the Web UI (#5880). Users cannot reliably approve or deny actions.

- **Automation runs fail silently:** Routines fail with opaque errors like "model output could not be used" (#5883), context compaction errors (#5838), and "No thread attached" (#5836). The activity panel provides no real-time visibility (#5701) and sticky error banners persist across successful runs (#5879).

- **Thread/account management is missing:** Users cannot delete old threads (#5888) or unpair Slack accounts (#5747), leading to clutter and dead-end states.

The lack of a "delete thread" feature and the inability to unpair Slack are the most basic missing capabilities that frustrate regular users.

## Backlog Watch

- [**Issue #2601**](https://github.com/nearai/ironclaw/issues/2601) — **CLI/TUI for Managing Secrets** (open since April 18, 1 comment, 0 👍). This user-proposed feature for credential management has received no maintainer response. Given the current token revocation debacle (#5878, #5884), this is increasingly relevant but remains untouched.

- [**Issue #5553**](https://github.com/nearai/ironclaw/issues/5553) — **Approval notifications disappear** (open since July 2, 4 comments, most-commented open issue). Despite being the most active issue, no PR has been opened. The approval UX gap is now the subject of multiple downstream bugs (#5885, #5886, #5880).

- [**Issue #5747**](https://github.com/nearai/ironclaw/issues/5747) — **No way to unpair Slack** (open since July 7, 3 comments). A basic UI/UX gap with no progress. Users are effectively trapped after pairing.

- **The Slack bug cluster:** Issues #5877 through #5882 (six P2 bugs filed July 9) share the same root cause—broken Slack auth and routing—and none yet have fix PRs, though PR #5898 promises to fix "three recurring Slack automation failures." The scope overlap between these issues and the PR suggests coordinated fixes are in progress but haven't landed yet.

**Watch for:** PR #5898 (Slack automation fixes) and PR #5902 (context compaction fix) as the most critical incoming stability patches. Their merge will likely trigger the pending release in PR #5598.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

Here is the LobsterAI project digest for 2026-07-10.

---

## LobsterAI Project Digest: 2026-07-10

### 1. Today's Overview
The project saw very high activity today, with 14 Pull Requests (PRs) updated—a significant spike driven by the closure of 11 PRs. This indicates a strong push to merge features and fixes before a potential release cycle. The 5 updated Issues were largely older items marked as "stale," with only 1 new issue closed. No new releases were cut today, suggesting the merged work is accumulating for a future version. Overall, the project health appears robust with high contributor engagement.

### 2. Releases
No new releases were published today.

### 3. Project Progress
Today was dominated by the merging of fixes and features across the Cowork, OpenClaw, and Renderer areas.

- **Cowork & Input Refinements:**
    - [#2308](https://github.com/netease-youdao/LobsterAI/pull/2308) **[MERGED]**: Fixed null byte injection crashes in OpenClaw gateway prompts.
    - [#2307](https://github.com/netease-youdao/LobsterAI/pull/2307) **[MERGED]**: Refined UI for prompt modes and steer follow-up handling, including moving status bars above the input.
    - [#2299](https://github.com/netease-youdao/LobsterAI/pull/2299) **[MERGED]**: Fixed tool history syncing for subagent child sessions.
    - [#2300](https://github.com/netease-youdao/LobsterAI/pull/2300) **[MERGED]**: Enabled file attachments (dragged, pasted, images) in the steer queue for follow-up messages.
    - [#1397](https://github.com/netease-youdao/LobsterAI/pull/1397) **[MERGED]**: Localized compact time suffixes (e.g., "26m" → "26分钟") in the session list.

- **Agent & UI Improvements:**
    - [#2305](https://github.com/netease-youdao/LobsterAI/pull/2305) **[MERGED]**: Synced agent display names with OpenClaw for better subagent identification.
    - [#2304](https://github.com/netease-youdao/LobsterAI/pull/2304) **[MERGED]**: Improved sidebar task pagination and introduced drag-and-drop agent reordering (dnd-kit).
    - [#2302](https://github.com/netease-youdao/LobsterAI/pull/2302) **[MERGED]**: Added a Windows-specific branded title bar with native controls.
    - [#2301](https://github.com/netease-youdao/LobsterAI/pull/2301) **[MERGED]**: Explicitly disabled the "memory dreaming" feature in OpenClaw config when the user has it toggled off.

- **Bug Fixes & Platform:**
    - [#2306](https://github.com/netease-youdao/LobsterAI/pull/2306) **[OPEN]**: Fixing IM group task routing for scheduled tasks.
    - [#2303](https://github.com/netease-youdao/LobsterAI/pull/2303) **[MERGED]**: Added support for agent-scoped local tools, allowing non-main desktop agents to use `AskUserQuestion`.
    - [#1396](https://github.com/netease-youdao/LobsterAI/pull/1396) **[MERGED]**: Enhanced the Windows uninstaller to fully clean up user data and handle running applications gracefully.

### 4. Community Hot Topics
The most active discussions were on long-standing feature requests, all created by user **MaoQianTu** on April 2nd, 2026. These issues have received comments and are being tracked but remain open, indicating a backlog of desired UX improvements.

- **#1339** ([Issue](https://github.com/netease-youdao/LobsterAI/issues/1339)): **Missing message timestamps.** This is the most actively discussed feature request. A linked PR [#1340](https://github.com/netease-youdao/LobsterAI/pull/1340) was opened on the same day but remains stale, suggesting the implementation may need revision or maintainer attention.
- **#1341** ([Issue](https://github.com/netease-youdao/LobsterAI/issues/1341)): **No keyboard history in input box.** A PR [#1342](https://github.com/netease-youdao/LobsterAI/pull/1342) exists but is also stale. The community's underlying need is for **power-user efficiency**.
- **#1343** ([Issue](https://github.com/netease-youdao/LobsterAI/issues/1343)): **No full-text search within messages.** Users want to find conversations by content, not just titles.
- **#1345** ([Issue](https://github.com/netease-youdao/LobsterAI/issues/1345)): **No Markdown export.** Users need to extract conversation text for editing and note-taking, finding image exports cumbersome.

The lack of new comments on the active PRs this week suggests these features are waiting on a maintainer decision or re-scoping.

### 5. Bugs & Stability
No critical new bugs were reported today. The primary stability work involved proactive fixes:

- **Medium (Data Loss Risk)**: [#1394](https://github.com/netease-youdao/LobsterAI/issues/1394) **[CLOSED]**: A bug where non-repeating scheduled tasks were permanently deleted after a single execution. This was closed as "stale," implying the behavior might have been intentional or the issue was resolved in a previous commit. It remains a potential UX surprise for users.
- **Low (Correctness)**: PR [#2308](https://github.com/netease-youdao/LobsterAI/pull/2308) fixed a crash-by-design where null bytes in user prompts would be hard-rejected by the OpenClaw gateway.
- **Low (Platform)**: PR [#1396](https://github.com/netease-youdao/LobsterAI/pull/1396) fixed a stability issue where the uninstaller might fail to close the running application or leave behind orphaned user data.

### 6. Feature Requests & Roadmap Signals
The project's roadmap signals a focus on **polishing the fundamental user experience** of the Cowork interface.

- **High Likelihood for Next Version:**
    - **Message Timestamps** ([#1339](https://github.com/netease-youdao/LobsterAI/issues/1339)): A design proposal exists (HH:MM, with full date on hover). Likely to be picked up given it is the oldest and most discussed UX request.
    - **History Navigation** ([#1341](https://github.com/netease-youdao/LobsterAI/issues/1341)): Predicted for the next version as it directly increases workflow speed for debugging and re-running tasks.
    - **Attachments in Steer Queue** ([#2300](https://github.com/netease-youdao/LobsterAI/pull/2300)): *Already merged today.* This new feature is a clear roadmap signal that multi-modal and interactive follow-ups are a priority.
- **Medium Likelihood:**
    - **Full-Text Search** ([#1343](https://github.com/netease-youdao/LobsterAI/issues/1343)): A major feature that requires indexing and search engine work. It is a strong "next major version" candidate.
    - **Drag-and-Drop Agent Ordering** ([#2304](https://github.com/netease-youdao/LobsterAI/pull/2304)): *Already merged today.* This aligns with the "WinUI" aesthetic seen in PR [#2302](https://github.com/netease-youdao/LobsterAI/pull/2302), suggesting a user-customizable sidebar is a key goal.

### 7. User Feedback Summary
Feedback from the community, primarily from user **MaoQianTu**, highlights friction in daily conversation management:

- **Pain Points:**
    - Inability to tell *when* a message was sent, making long sessions hard to follow.
    - Inability to quickly re-send or edit previous commands, breaking their flow for iterative tasks.
    - Inability to find conversations by content, forcing reliance on memory of session titles.
    - Inability to export conversation text, forcing users to work with inflexible image files.
- **Satisfaction Drivers:** The rapid closing of 11 PRs today suggests high satisfaction with developer responsiveness on critical bugs (e.g., crash prevention, uninstall cleanup) and performance (sidebar pagination).

### 8. Backlog Watch
Several important feature-request PRs are now **stale** and require maintainer review, testing, or decision.

| Issue | PR | Age | Status | Risk |
| :--- | :--- | :--- | :--- | :--- |
| **#1339** - Message Timestamps | [#1340](https://github.com/netease-youdao/LobsterAI/pull/1340) | 3 months | Stale PR | High. User request is clear; code exists but is not reviewed. |
| **#1341** - Input History | [#1342](https://github.com/netease-youdao/LobsterAI/pull/1342) | 3 months | Stale PR | High. Same as above. |
| **#1343** - Full-Text Search | None | 3 months | Stale Issue | Medium. A design proposal is needed. |
| **#1345** - Markdown Export | None | 3 months | Stale Issue | Medium. A simple feature request, but no implementation exists. |

**Recommendation:** The maintainers should prioritize reviewing PRs [#1340](https://github.com/netease-youdao/LobsterAI/pull/1340) and [#1342](https://github.com/netease-youdao/LobsterAI/pull/1342) to either accept, request changes, or provide a reason for declining. These are relatively simple UX improvements that would close the most popular open issues.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest – 2026-07-10

## 1. Today's Overview
Moltis is in a **quiet maintenance phase** today, with no new issues, no new releases, and only a single open pull request. No closed or merged PRs were recorded, and the project's open issue count remains at zero, suggesting either very healthy issue resolution or low recent usage. The sole activity is a forward-looking open PR ( #1146 ) adding GPT-5.6 model support, which indicates active preparation for upcoming AI model rollouts. Overall project velocity is low today, with a focus on future-proofing rather than bugfixing.

## 2. Releases
**No new releases.** The latest release remains unchanged from the previous period. No migration notes or breaking changes to report.

## 3. Project Progress
No PRs were merged or closed in the last 24 hours. The only open PR is:
- **[#1146 – Add GPT-5.6 model support](https://github.com/moltis-org/moltis/pull/1146)** (open, authored `PeterDaveHello`) – adds support for GPT-5.6 Sol, Terra, and Luna variants to OpenAI and OpenAI Codex fallback catalogs, including the new `gpt-5.6` Sol alias and updated configuration templates. Not yet merged; represents the day's only forward progress.

## 4. Community Hot Topics
The **only active item** is:
- **[PR #1146 – Add GPT-5.6 model support](https://github.com/moltis-org/moltis/pull/1146)** – has 0 comments and 0 reactions, but is the sole community engagement today. The underlying need is clear: users/contributors are proactively ensuring Moltis supports the latest OpenAI model generations (Sol, Terra, Luna) with correct context window limits (1.05M API, 372K backend). This signals that the community values being ahead of provider API changes.

## 5. Bugs & Stability
**No bugs, crashes, or regressions reported today.** The project has zero open issues, which suggests either excellent stability, or that the project may be in a low-activity period with users not filing new problems. No fix PRs are pending.

## 6. Feature Requests & Roadmap Signals
The single feature request this period is embedded in **[PR #1146](https://github.com/moltis-org/moltis/pull/1146)** , which is not a user-requested feature but a proactive addition by a contributor. This suggests the community expects Moltis to stay current with major AI model releases. **Prediction:** this PR is likely to be merged in the next release cycle, as GPT-5.6 is an upcoming major provider model. No other feature signals were detected today.

## 7. User Feedback Summary
**No user feedback captured today.** With zero open issues and zero comments on PRs, there is no quantifiable user sentiment. This may indicate satisfied users, low active usage, or that feedback is collected through other channels (e.g., Discord, closed issues). No pain points or use-case descriptions were available.

## 8. Backlog Watch
**No long-unanswered items** – the project has zero open issues, and the only open PR (#1146) is less than 24 hours old. No items require maintainer attention at this time. The clean backlog is a positive health signal, though it may also reflect low engagement volume.

**Summary:** Moltis is in a calm, stable state with no outstanding bugs or user complaints. The sole activity is future-proofing for GPT-5.6 support. Maintainers may wish to review and merge PR #1146 to keep the project aligned with upcoming model launches.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-07-10

## Today's Overview

CoPaw shows **very high activity** today with 35 issues and 50 PRs updated in the last 24 hours, alongside a new **v2.0.0-beta.5 release**. The project is clearly in an intense development sprint, with 32 merged/closed PRs (64% closure rate) and 15 closed issues. However, the open issue count (20 active issues) suggests a moderate backlog is accumulating as new bugs are filed rapidly. The beta release signals that the **v2.0.0 transition is accelerating**, but users are reporting significant regressions and sandbox-related frustrations that need attention. Overall, the project is healthy but showing **growing pains typical of a major version refactor**.

---

## Releases

### v2.0.0-beta.5 (latest)
- **Published:** 2026-07-09
- **Scope:** Two targeted fixes to the **scroll/eviction index** system:
  - Fixed un-headlined evicted spans not being labeled in the eviction index
  - Anchored the live turn with a seam banner in the eviction index

**Breaking Changes:** None noted  
**Migration Notes:** No specific migration required from v2.0.0-beta.4

---

## Project Progress

**32 PRs merged/closed today**, suggesting a **high-velocity bug-fix and test-investment day**. Key advances:

| Type | Highlights |
|------|------------|
| **Tests** | Sprint 4.1 integration tests covering `/api/tool-calls/*` and `/api/console/chat/task` (21 cases) (#5895); Channel module unit tests (176 cases) (#5812); Runtime/security regression tests (43 cases) (#5813) |
| **MCP Fixes** | Runtime approval level applied to driver policy (#5864); MCP version chore fix (#5904) |
| **Message Formatting** | Whitespace-prefixed tool-call JSON arguments recovered (#5841); Structured Error object for frontend SDK compatibility (#5905) |
| **Channels** | DingTalk delivery failures now surfaced properly (#5654); `/stop` command user-level isolation fixed (#5835) |
| **Security** | `rm -rf ${HOME}` bypass fixed by splitting detection/extraction (#5866); Driver OFF approval level honored (#5853) |
| **Reasoning** | `preserve_thinking` default flipped to `false` to prevent reasoning loops (#5870) |
| **TUI/ACP** | Approvals and warmup sessions improved (#5892) |
| **Docs** | Documentation updated for QwenPaw 2.0 (#5899) |

**Still open but progressing:** Event-driven subagent lifecycle (#5637), Chat input queue session ID fix (#5514), Message text selection/copy UX (#5739), ReMe0.4 reranker for memory search (#5692), Windows desktop GUI automation (#5187)

---

## Community Hot Topics

### Most Active Discussions

1. **[#2291 — 🐾 Help Wanted: Open Tasks — Come Contribute!](https://github.com/agentscope-ai/QwenPaw/issues/2291)** (64 comments)
   - **Need:** Community onboarding and task allocation. A **new task claim** (#5909 for configurable theme/skin module) was opened today, showing the system is working.
   - *Project health signal:* Maintainers are actively driving community contributions.

2. **[#5757 — [Bug]: 飞书信息不回复情况](https://github.com/agentscope-ai/QwenPaw/issues/5757)** (13 comments)
   - **Need:** Feishu (Lark) channel silently dropping responses after the first reply. Affects both Docker and hosted instances.
   - *Frustration level:* High — communication channel is completely broken.

3. **[#5379 — [Bug]: Internal Server Error on startup](https://github.com/agentscope-ai/QwenPaw/issues/5379)** (10 comments, CLOSED)
   - **Need:** Fresh Python installs crash immediately with `get_remote_addr(transport)` error.
   - *Resolution:* Closed — presumably fixed.

4. **[#5879 — [Feature]: 增加可关闭沙箱的功能](https://github.com/agentscope-ai/QwenPaw/issues/5879)** (6 comments)
   - **Need:** Users want to **disable the sandbox** for trusted, self-hosted environments. Sandbox prevents agent from installing Python packages.
   - *Sentiment:* Strong dissatisfaction — "sandbox seriously limits agent capabilities."
   - *Conflict:* This clashes with the security team's recent work on sandbox hardening (#5866, #5911).

### Underlying Themes
- **China-based users** are the most vocal voice today, filing bugs in Chinese and reporting channel-specific issues (Feishu, DingTalk, QQ, WeChat Work).
- **Sandbox vs. freedom** tension is the #1 philosophical debate.
- **v2.0 beta users** are reporting regressions that weren't present in v1.1.x.

---

## Bugs & Stability

### Critical Severity
| Bug | Description | Fix Status |
|-----|-------------|------------|
| **#5856** – Tool_call structure lost during context compaction | `LightContextManager.pre_reasoning()` converts structured tool_call data to plain text, permanently losing tool usage information, causing 400 errors | **No fix PR yet** |
| **#5911** – Windows AppContainer sandbox ignores configured shell (`SHELL`) | Always uses `cmd.exe` even when PowerShell is configured | **No fix PR yet** |
| **#5906** – Anti-repetition false positive | Triggers "Doom loop" on normal conversations that aren't actually repeated | **No fix PR yet** |
| **#5896** – Iteration limit counting bug | Counts from last trigger, not new message, causing premature `Max iterations (100) reached` | **No fix PR yet** |
| **#5872** – Docker: browser_use fails (dbus) | Chromium exits immediately due to dbus connection failure in Docker | **No fix PR yet** |
| **#5900** – MCP `streamable_http` no auto-reconnect | Session terminated → client permanently skipped for rest of session | **No fix PR yet** |

### High Severity
| Bug | Description | Fix Status |
|-----|-------------|------------|
| **#5910** – Auto Memory Search malformed function_call (OpenAI Responses API) | Causes Cloudflare 502 errors on every request | **No fix PR yet** |
| **#5859** – OpenCode DeepSeek model fails | `auto_memory_search` injects messages missing `reasoning_content` field | **No fix PR yet** |
| **#5858** – Assistant messages silently dropped by base formatter | Breaks `tool_use`/`tool_result` pairing | **No fix PR yet** |
| **#5771** – `model_factory.py` WARNING log spam | Debug logs at WARNING level cause log flooding | **Fix PR #5908** (open) |
| **#5797** – Cron task notifications lack user toggle | Popup notifications were removed globally instead of being user-configurable | **No fix PR yet** |

### Medium/Low Severity (fixed today or with pending PRs)
- **#5898** – OneBot channel enabled by default → infinite watchdog restart loop → **CLOSED**
- **#5893** – WeChat Work QR code generation broken (greedy regex) → **CLOSED** with fix
- **#5868** – Matrix channel token login fails → **CLOSED**
- **#5863** – Coding session images not rendering → **CLOSED**
- **#5784** – Frontend compression threshold shows wrong provider → **CLOSED**
- **#5841** – Whitespace-prefixed tool-call JSON → **FIXED** in PR #5841

### Regression Watch
The most concerning pattern is **v2.0.0-beta.4/5 users** filing bugs that were not present in v1.1.12:
- #5906 (anti-repetition false positive)
- #5896 (iteration limit)
- #5872 (sandbox-docker issues)
- #5856 (context compaction data loss)

---

## Feature Requests & Roadmap Signals

### Likely to Ship Soon (P0/P1 priority)
| Request | Why |
|---------|-----|
| **Configurable theme/skin module** (#5909) | P0 task claimed from #2291, design proposal already filed |
| **Sandbox toggle/disable** (#5879) | **Highest demand feature** — multiple users requesting it, might need compromise (e.g., allow-list instead of full disable) |
| **Session grouping & import/export** (#5903) | Basic UX need for power users managing many sessions |

### Likely in Next Release (v2.0.0-rc or v2.0.0 stable)
| Request | Why |
|---------|-----|
| **Cron notification user toggle** (#5797) | Strong backlash against removal of popups (#4803) |
| **Token information per session** (#4767) | Still open after 43 days; fundamental for context management |
| **Session groups** (#5903) | Low implementation cost, high UX impact |

### Should Be Considered for v2.1.0
| Request | Why |
|---------|-----|
| **File/image rendering in coding workspace** (#5863) | Closed as bug, but user expected rich media rendering — core UX gap |
| **Computer use (Windows desktop GUI)** (#5187) | Large PR still open; significant feature for enterprise users |

### Roadmap Signal
The **two biggest tensions** in the community are:
1. **Sandbox security vs. agent freedom** — Trusted self-hosted users feel crippled
2. **Notifications (cron popups) vs. noise** — Users want control, not binary on/off

These are not technical bugs but **design philosophy decisions** that will shape v2.0's adoption.

---

## User Feedback Summary

### What's Working Well
- **v2.0 refactor momentum** is real — test coverage is expanding rapidly (241+ new tests this week)
- **Community contribution system** (#2291) is gaining traction with actual task claims
- **Channel diversity** (Feishu, DingTalk, QQ, WeChat, Matrix, Discord) is valued, though each has bugs

### What's Not Working
- **Sandbox/security overreach** is the #1 pain point: "Sandbox seriously limits agent capabilities" / "Can't even let agent install Python packages"
- **V2.0 regressions** are shaking user confidence: beta.4/5 users report features working in v1.1.x that now break
- **Chinese channel reliability** is poor: Feishu (#5757), WeChat Work (#5893), QQ (#5887) all have active issues
- **Context compaction** silently destroys tool-call data (#5856) — a **silent data corruption bug**
- **Log spam** from `model_factory.py` is drowning out real warnings
- **"/stop" not isolating users** in DM sessions (#5835) — privacy/cross-user concern
- **OneBot channel default-on** wasted resources for users who don't use it (#5898)

### Sentiment Snapshot
- **Frustration:** High — many issues filed by power users who clearly care about the project
- **Language:** ~60% of issues are in Chinese; the project has a large China-based user base
- **Satisfaction:** Mixed — users who loved v1.x are struggling with v2.0 beta instability

---

## Backlog Watch

### Needs Maintainer Attention

| Issue | Age | Why It Matters |
|-------|-----|----------------|
| [#5856 – Tool_call structure lost during context compaction](https://github.com/agentscope-ai/QwenPaw/issues/5856) | 2 days | **Silent data corruption** — every user with long conversations will hit this. No fix PR exists. |
| [#5872 – Docker: browser_use fails (dbus)](https://github.com/agentscope-ai/QwenPaw/issues/5872) | 1 day | Docker deployment is a primary use case; this blocks browser automation entirely. |
| [#5911 – Windows AppContainer sandbox ignores shell](https://github.com/agentscope-ai/QwenPaw/issues/5911) | <1 day | Fresh new issue, but affects advanced Windows users. |
| [#5900 – MCP streamable_http no auto-reconnect](https://github.com/agentscope-ai/QwenPaw/issues/5900) | 1 day | MCP is a core extensibility feature; session drops without recovery is critical. |
| [#5906 – Anti-repetition false positive](https://github.com/agentscope-ai/QwenPaw/issues/5906) | 1 day | "Doom loop" trigger on valid conversations is a **user trust issue**. |
| [#5896 – Iteration limit counting bug](https://github.com/agentscope-ai/QwenPaw/issues/5896) | 1 day | **Usability regression** — agents stop working mid-conversation. |
| [#5910 – Auto Memory Search malformed function_call for OpenAI](https://github.com/agentscope-ai/QwenPaw/issues/5910) | <1 day | Cloudflare 502 errors on every request — blocks OpenAI users from using memory search. |
| [#5859 – OpenCode DeepSeek fails](https://github.com/agentscope-ai/QwenPaw/issues/5859) | 2 days | Missing `reasoning_content` field — blocks DeepSeek users. |
| [#5797 – Cron notification toggle](https://github.com/agentscope-ai/QwenPaw/issues/5797) | 4 days | Community has been discussing since #4776 (May); no action yet. |
| [#5187 – Windows desktop GUI automation (computer_use)](https://github.com/agentscope-ai/QwenPaw/issues/5187) | 26 days | Large PR, no maintainer review activity in last week. Risk of bit rot. |

### Summary
The **backlog is growing faster than it's being closed** in the last 48 hours, as v2.0.0-beta.5 shipped with multiple critical regressions. The **#5856 (context compaction data loss)** and **#5910 (Auto Memory Search OpenAI 502)** are the most urgent — they silently corrupt or deny service. The **sandbox tension (#5879)** is not a bug but a design debate that needs a maintainer decision to defuse community frustration.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

Here is the ZeroClaw project digest for July 10, 2026, based on the provided data.

**Note on Data:** The provided data likely reflects a snapshot from the *morning* of July 10, showing activity from the previous 24 hours. The "Today" analysis is based on this snapshot.

---

### ZeroClaw Project Digest — 2026-07-10

**1. Today's Overview**

ZeroClaw shows an extremely high level of activity today, with **36 open/active issues** and **50 active pull requests (PRs)** in the last 24 hours, reflecting a large, fast-moving development cycle. The project is deep in execution mode, with a strong focus on finishing touches for major features like the **plugin/WASM system**, **SSRF security hardening**, and **Discord channel parity**. The closure of several high-priority bugs (`#6699`, `#7809`, `#5903`) and the merging of small, critical fixes indicate a healthy balance of feature work and stability patching. With **0 new releases**, the team appears to be consolidating work for a potential upcoming cut.

**2. Releases**

No new releases were published in the last 24 hours.

**3. Project Progress**

A substantial number of features and fixes were completed, primarily through merged PRs:
- **Security Hardening (High):** PR #7836 (by ZOOWH, merged/closed) fixed a critical bug where channel messages ignored runtime profile flags for strict tool parsing and parallel execution, closing Issue #7809.
- **Runtime & Cron Stability:** PR #8866 (by perlowja) fixes the MCP process leak bug (Issue #5903) by sharing the MCP registry across heartbeat ticks instead of creating new ones. PR #8881 (by ryanlee486) added missing channels (WeChat, Signal, Email) to the cron delivery schema.
- **Observability:** PR #8884 (by WeeLi-009) added tests for UTF-8 truncation in LLM request logging. PR #8872 (by tidux) fixed the Zerocode TUI to use the correct runtime profile for its context meter.
- **CLI & Config:** PR #8873 (by tidux) fixed a UTF-8 safety issue in the CLI exit prompt, part of an ongoing audit for this bug class.
- **Major Trackers:** The `v0.8.3` tracker (#8073), `multi-user milestone` tracker (#8290), and `v0.9.0 auth/security` tracker (#7432) all received updates, showing progress on several parallel tracks.

**4. Community Hot Topics**

The most active discussions center around configuration complexity and foundational architecture.
- **[Issue #5862] (13 comments): "zeroclaw does not know it can add cron."** 📌 This remains a top pain point. The user tried to ask the agent to schedule a task, but it failed because it didn't know about its own `cron` tool. This points to a need for the agent to have better self-awareness or "meta-cognition" about its own capabilities.
- **[Issue #6808] (13 comments): "RFC: Work Lanes, Board Automation, and Label Cleanup."** 📌 This internal governance RFC is highly active, signaling the team is actively refining their development workflow to keep up with the project's scale.
- **[Issue #5287] (4 comments, 2 👍): "Local-First Mode for Small Models."** 📌 A feature request for a "compact local-model mode" continues to receive support, indicating strong demand from users running local models who are frustrated by prompt bloat and tool leakage.

**5. Bugs & Stability**

Activity on bugs was high, with several critical issues being addressed.
- **Critical/High Severity:**
    - **`[Bug #8915]` (S2 - Degraded):** `agent_start/agent_end` events are never emitted for channel and orchestration turns, breaking observability for critical user flows. **No fix PR noted.**
    - **`[Bug #8762]` (S2 - Degraded):** The Anthropic provider uses a fixed 120-second total timeout, causing long-running synthesis tasks to fail. **No fix PR noted.**
    - **`[Bug #8760]` (S2 - Degraded, *CLOSED*):** Daemon-owned agent output was incorrectly leaking into daemon stdout. **FIXED** by PR #8760.
    - **`[Bug #8044]` (S1-S2, *CLOSED*):** The `/model --agent` scope lacked per-sender authorization, posing a security risk. **FIXED** by PR #8044.
    - **`[Bug #8578]` (S3 - Minor):** On failure to start, the `zerocode` daemon doesn't terminate the process, leaving a zombie. **No fix PR noted.**
- **Medium Severity:**
    - **`[Bug #8875]` (S2 - Degraded, *CLOSED*):** Misleading config migration warning. **FIXED** by PR #8875.
    - **`[Bug #8810]` (S2 - Degraded):** Documentation is wrong for the Telegram channel example. **No fix PR noted.**

**6. Feature Requests & Roadmap Signals**

The roadmap is being driven by several large trackers and open feature requests.
- **Strong Signal for v0.9.0:** The `v0.9.0` tracker (#7432) (auth, security, gateway) and the `multi-user` tracker (#8290) are very active, indicating these are the next major milestones.
- **OpenAI-Compatibility is a Priority:** **Issue #8550** ("Add OpenAI-compatible chat completions endpoint") has 4 comments and is marked `status:accepted`. This is a clear signal that the team intends to make ZeroClaw a drop-in replacement for other tools.
- **ZeroCode Evolution:** Requests for a right-click context menu (`Feature #8919`) and a unified plugin catalog pane (`Issue #8907`) show that the ZeroCode TUI is being actively polished for a better user experience.
- **Community Request:** The **`Local-First Mode`** (#5287) feature request is accepted and remains a high-interest item.

**7. User Feedback Summary**

User sentiment is mixed, reflecting a powerful but complex tool in rapid development.
- **Pain Points:**
    - **Configuration & Debugging:** Users are hitting walls with configuration. One user had to reset completely to get a new model to appear in chat (`#8094`). Another found documentation to be incorrect, calling the output "slop" (`#8810`).
    - **Unexpected Agent Behavior:** The agent's inability to understand its own `cron` capabilities (`#5862`) frustrates users who expect a higher level of autonomy.
    - **Provider Issues:** Users are struggling with non-standard providers like `Qwen` (`#6558`) and `Amazon Bedrock` (`#8925`), often getting unhelpful `All providers/models failed` errors.
- **Satisfaction:** Despite frustrations, users are actively contributing features and reporting bugs in detail, which is a sign of high engagement and a belief in the project's potential.

**8. Backlog Watch**

Several critical items require maintainer attention to avoid stalling:
- **[Issue #5862] (Critical P2): "zeroclaw does not know it can add cron."** This has been open since April 18, 2026, with 13 comments. The user is blocked, and the issue is marked `stale-candidate` and `needs-author-action`. A maintainer decision is needed: either implement the enhancement or provide a clear workaround so the user can proceed.
- **[Issue #6517] (P2): "Context Overflow Causes Hallucination / Topic Drift."** Open since May 7, this is a classic runtime degradation issue. It is marked `stale-candidate` and lacks a clear resolution path. This affects user trust in long-running conversations.
- **[PR #8443] (XL): "feat(matrix): add single-message progress drafts."** This large PR (by vrurg) has been open since June 28 and is marked `needs-author-action`. It is a critical feature for Matrix channel parity and appears to be blocked on author feedback.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*