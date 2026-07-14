# OpenClaw Ecosystem Digest 2026-07-02

> Issues: 291 | PRs: 500 | Projects covered: 13 | Generated: 2026-07-02 00:28 UTC

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

# OpenClaw Project Digest — 2026-07-02

## Today's Overview

OpenClaw shows very high activity today with **291 issues updated** (175 open, 116 closed) and **500 pull requests updated** (455 open, 45 merged/closed) in the last 24 hours. The project released **no new versions** today. The high volume of open issues (60% open rate) and the large number of open PRs (91% open rate) suggests the maintainer team may be experiencing a growing review backlog, particularly as many PRs carry status tags like `📣 needs proof`, `⏳ waiting on author`, or `👀 ready for maintainer look`. A cluster of 8 high-severity P1 regression bugs were filed today, concentrated around the v2026.6.11 release, indicating that while the project remains extremely active, stability and review throughput are the primary near-term concerns.

## Releases

No new releases today.

## Project Progress

**45 PRs were merged or closed** today. Notable recent closures and merges:

- **[#98244]** [CLOSED] — `fix(openai-transport): 120-second timeout in OpenAI Responses API streaming` (P1, 4 comments) — Fixed streaming timeout despite successful API completion.
- **[#98266]** [CLOSED] — `Discord Gateway WebSocket should honor HTTP_PROXY/HTTPS_PROXY env proxy fallback` (P2, 3 comments) — Security-implicated fix merged.
- **[#98745]** [CLOSED] — `Bug: "reply session initialization conflicted" — session stuck in running status with GLM-5.2 cloud model` (P1, 3 comments) — Another P1 session-state bug closed.
- **[#98467]** [CLOSED] — `transcripts: file descriptor leak in readUtterancesFromDir stream cleanup` (P2, 3 comments) — Defensive resource leak fix.
- **[#94432]** [CLOSED] — `OpenAI/Codex OAuth provider fails with Cloudflare HTML 403 from chatgpt.com/backend-api` (P1, 3 comments) — Provider compatibility fix.

A major refactor PR **#98236** (`[do not merge] refactor: flip sessions and transcripts to sqlite storage`) is open with `👀 ready for maintainer look` status — this would be a significant architectural change tracked by issues #96625 and #88838.

New PRs with high signal today:
- **[#98806]** — `fix(telegram): webhook updates survive crashes and restarts via durable spooling` (P1, XL size) — Critical Telegram reliability fix for crash recovery.
- **[#98727]** — `feat: add durable routines registry` (P2, XL size) — Adds first-class registry for recurring team-operations routines (create, inspect, pause, delete).

## Community Hot Topics

### Most Active Issues (by comments)

1. **[#92201]** `[Diamond Lobster P1] Embedded runner: freshly streamed thinking signatures intermittently invalid on replay (Anthropic)` — **17 comments** — Author: @CarlCapital. A critical P1 where Anthropic thinking blocks fail signature validation on replay, and the recovery wrapper doesn't fire because error text is genericized. This affects all native Anthropic provider users with long-running sessions. No linked PR yet.

2. **[#7707]** `[Diamond Lobster P2] Feature Request: Memory Trust Tagging by Source` — **13 comments** — Author: @LumenLantern. One of the most-watched feature requests, proposing memory entries be tagged by trust level based on origin (user commands vs web scrapes vs third-party skills). This directly addresses the memory poisoning attack vector — a security-first design request that has been open since February.

3. **[#45608]** `[Diamond Lobster P2] Feature: Pre-reset agentic memory flush` — **11 comments, 4 👍** — Author: @kamikariat. Request to run silent agentic memory flush before `/new`/`/reset`/daily reset, preventing context loss. High-user-need feature with strong community support.

4. **[#94228]** `[Platinum Hermit P1] Native Anthropic path: replaying historical thinking blocks bricks long tool-use threads` — **10 comments, 2 👍** — Author: @eugkhp. Related to #92201 but specific to the `api=anthropic-messages` native path. Long-lived tool-use sessions permanently brick with `400 invalid_request_error`. Two overlapping P1 Anthropic thinking bugs indicate a systemic issue in the block signature validation path.

5. **[#85103]** `[Platinum Hermit P1] Model fallback chain not triggered on provider-wide quota exhaustion` — **10 comments, 1 👍** — Author: @rickrvo. When the primary provider (OpenAI Codex) hits quota, the fallback chain is bypassed and the session dies. A reliability-critical gap in the agent infrastructure.

### Most Active Pull Requests (by review activity)

- **[#75165]** `feat(agents): composable termination algebra + GSAR grounding scorer` (XL, 0 comments) — Long-running PR (since April) with proof supplied, waiting on author. Implements academic research paper (arXiv:2604.23366) for hallucination detection.
- **[#98236]** `[do not merge] refactor: flip sessions and transcripts to sqlite storage` (XL, P1) — Architectural refactor to eliminate legacy JSONL/sessions.json storage.
- **[#98806]** `fix(telegram): webhook updates survive crashes and restarts via durable spooling` (XL, P1) — Just opened today, critical for Telegram reliability.
- **[#76332]** `fix: harden subagent completion announce cleanup races` (M, P2) — Fixes multiple subagent lifecycle races that can orphan completed child runs.

## Bugs & Stability

### Today's P1 Regressions (v2026.6.11 release)

A concerning cluster of **8 P1 bugs** were reported today, many marked as regressions from the latest release:

| Issue | Summary | Severity | Fix PR? |
|-------|---------|----------|---------|
| **#98672** | `Sessions breaking constantly` — upgrade from 6.10→6.11 worked initially, then sessions fail with no reply | P1 Regression | None yet |
| **#98528** | `Tool output returns empty after first call per turn` — 6.11 regression where exec/web_fetch/web_search return empty after first success | P1 Regression | None yet |
| **#98745** | `"reply session initialization conflicted" — session stuck in running status` — GLM-5.2 cloud model | P1 Regression | **CLOSED** |
| **#98740** | `Mattermost native slash commands return 401 on every callback after 6.11 plugin externalization` | P1 Regression | None yet |
| **#98416** | `v2026.6.11 published dist missing reentrancy guard` — reply session initialization conflicted | P1 Regression | None yet |
| **#98565** | `Container image upgrades skip openclaw upgrade migrations before gateway startup` | P1 Upgrade lifecycle gap | None yet |
| **#98540** | `Composer shows idle state while agent is actively executing tools` — UI state regression | P2 Behavior | None yet |
| **#98672** | `Generic sessions constant breaking` — further reports of same regression pattern | P1 Regression | None yet |

### Other Active P1 Bugs

- **#92201** & **#94228** — Two Anthropic thinking block signature validation bugs (17 and 10 comments) — these have been open for 20+ days with no fix PR. Both have `clawsweeper:needs-maintainer-review` and `clawsweeper:needs-product-decision` tags. The persistence of these bugs suggests a difficult root cause in the Anthropic API integration logic.

- **#85030** — `MCP tools not injected into subagent sessions` — P1 diamond lobster, 9 comments, 4 👍. Open since May 21, still needs maintainer review. A fundamental architectural gap for the MCP ecosystem.

## Feature Requests & Roadmap Signals

### Strong Community Demand (High Reaction Score)

1. **Memory Trust Tagging by Source** (#7707) — 13 comments, P2 diamond lobster. Addresses memory poisoning attack vector. Open since February. This is likely to land in a future point release given the security implications and community engagement.

2. **Pre-reset agentic memory flush** (#45608) — 11 comments, 4 👍. Request to prevent context loss during session resets. Low implementation complexity — uses existing `runMemoryFlushIfNeeded` mechanism.

3. **Audit log for agent memory changes** (#20935) — 6 comments, P2 diamond lobster. Append-only audit log for Memory.md changes. Security/privacy feature.

4. **Topic-session families** (#90916) — 5 comments, 2 👍. Explicit topic lanes for one assistant across multiple named context lanes. A thoughtful UX request that extends the session model.

### Roadmap Signals from PRs

- **Durable Routines Registry** (PR #98727) — Just opened today. Would provide first-class create/inspect/pause/delete for recurring operations. Likely to be in next release.
- **SQLite Storage Flip** (PR #98236) — Architectural refactor to replace legacy JSONL/sessions.json with SQLite. Tagged `[do not merge]` but the issue tracker has this tracked for some time.
- **Composable Termination Algebra + GSAR** (PR #75165) — From academic paper. Open since April, proof supplied, waiting on author. This is a research-grade feature that may land in a minor version if the author returns.
- **User-specific Memory Isolation** (PR #47277) — Open since March. Would add per-user memory files for multi-user environments. High demand for enterprise deployments.

### Prediction for Next Release

The next release (likely v2026.6.12 or v2026.7.0) should include:
1. The reentrancy guard fix from #98416 (patch already exists in source)
2. The Telegram durable spooling fix from PR #98806
3. The SQLite storage flip (PR #98236) — if it clears review
4. Memory flush before reset (#45608) — low complexity, high demand
5. The Google Gemini CLI harness opt-in (PR #98343)

## User Feedback Summary

### Pain Points

1. **v2026.6.11 Stability Crisis** — Multiple users report sessions "breaking constantly" (#98672), tool outputs returning empty (#98528), and initialization conflicts (#98416, #98745). One user said: "Initially I upgraded from 2026.6.10 to 2026.6.11 and there were no issues. This morning, sessions started breaking for no reason. No changes were made."

2. **Anthropic Thinking Block Reliability** — Two P1 bugs (#92201, #94228) with a combined 27 comments describe a systemic problem where thinking blocks fail signature validation, causing permanent session bricking. Users report this happens unpredictably during long tool-use sessions. One user (@eugkhp) said "a long-lived multi-turn tool-use session eventually bricks permanently."

3. **Subagent/MCP Tool Isolation** — Issue #85030 describes how MCP tools are not injected into subagent sessions, with user @reidperyam providing extensive reproduction steps. The bug has 4 👍 indicating broad impact on multi-agent workflows.

4. **Android/Capability Advertisements** — Issue #87058 describes an Android node that connects but advertises zero commands, making it effectively unusable. User @AndrewEAUS provided detailed reproduction steps.

### Satisfaction Signals

- The 45 merged/closed PRs today (including high-priority fixes for OpenAI streaming timeout and session initialization conflicts) demonstrate responsive maintainer attention to critical issues.
- The Discord JSON.parse guard fix (PR #97889) was labeled `automerge-armed`, suggesting the team has streamlined workflows for lower-risk defensive fixes.
- Several users are running sophisticated multi-agent setups (subagents, MCP servers, multiple fallback chains) indicating the ecosystem is maturing beyond basic single-agent use cases.

## Backlog Watch

### Long-Unanswered Important Issues Needing Maintainer Attention

| Issue | Age | Priority | Last Activity | Why It Matters |
|-------|-----|----------|---------------|----------------|
| **#20935** — `Audit log for agent memory changes` | ~137 days (since Feb 19) | P2 Diamond Lobster | Jul 1 (only auto-updates) | Security baseline feature, needs product decision |
| **#7707** — `Memory Trust Tagging by Source` | ~149 days (since Feb 3) | P2 Diamond Lobster | Jul 1 (auto-update) | Security-critical, memory poisoning prevention |
| **#13615** — `Add rate limiting and throttling for external API calls` | ~141 days (since Feb 10) | P2 Diamond Lobster | Jul 1 (auto-update) | Cost control for production deployments |
| **#85030** — `MCP tools not injected into subagent sessions` | 42 days (since May 21) | P1 Diamond Lobster | Jul 1 | Blocks MCP adoption for multi-agent setups. Needs maintainer review. |
| **#92201** + **#94228** — Anthropic thinking bugs | 20-24 days | P1 Diamond/P1 Hermit | Jul 1 | Systemic Anthropic integration issues affecting all native API users. No fix PR. |
| **#85103** — `Model fallback chain not triggered` | 42 days (since May 21) | P1 Hermit | Jul 1 | Critical reliability gap. No fix PR exists. |

### PRs Stuck in Limbo

| PR | Age | Status | Risk |
|----|-----|--------|------|
| **#75165** — Composable termination algebra | 63 days | `⏳ waiting on author` | Author may have abandoned |
| **#75076** — Harden Control UI auth | 63 days | `📣 needs proof` | Security hardening, stale |
| **#76445** — Fix/cron duplicate name validation | 60 days | `📣 needs proof` | Functional bugfix, stale |
| **#47277** — User-specific memory isolation | 109 days | `📣 needs proof` | High-demand enterprise feature, very stale |

The backlog is concerning: 5+ high-severity security and reliability issues have been open for 40-150 days with no fix PR, while 4+ significant feature PRs have been awaiting review or author re-engagement for 60+ days. The 91% open PR rate (455 of 500) suggests the review pipeline is the primary bottleneck.

---

## Cross-Ecosystem Comparison

Here is the cross-project comparison report based on the provided digest data.

---

## Cross-Project Ecosystem Comparison Report
**Date:** 2026-07-02
**Analyst:** Senior Analyst, AI Agent & Personal Assistant Ecosystem

---

### 1. Ecosystem Overview

The open-source personal AI assistant landscape is experiencing a phase of **intense, bifurcated activity**. High-velocity projects like OpenClaw, Hermes Agent, and IronClaw are pushing the boundaries of agent autonomy, reliability, and multi-platform integration, while smaller projects like NanoBot and CoPaw are stabilizing core features and closing security gaps. A critical tension is emerging between **feature velocity and stability**, with several projects (notably OpenClaw and IronClaw) experiencing significant regression bugs following major releases. The ecosystem is also seeing a strong pull from the community for **security hardening** (memory isolation, credential management) and **production-grade reliability** (durable execution, graceful error handling), signaling a maturation beyond the "proof-of-concept" stage.

### 2. Activity Comparison

| Project | Issues (Open/Total) | PRs (Open/Closed) | Release Status | Health Score & Notes |
|---|---|---|---|---|
| **OpenClaw** | 175 / 291 | 455 / 45 | No new release | **HIGH but Volatile.** Massive activity, but a 60% open issue rate and 91% open PR rate indicate a severe review bottleneck. A cluster of 8 P1 regressions post-v2026.6.11 is concerning. |
| **Hermes Agent** | 48 / 50 | 37 / 13 | **v0.18.0 "Judgment"** (Just Released) | **HIGH.** Very active, with a major release just shipped. Post-release regressions (token bloat, gateway drain) are surfacing. Healthy merge velocity. |
| **IronClaw** | 19 / 26 | 44 / 6 | Pre-release (v2 "Reborn") | **HIGH but Unstable.** Heavy bug-bash phase with 12+ open QA issues. High number of P1s around routine creation and runner leases indicates core runtime instability pre-release. |
| **NanoBot** | ~8 (Low) | ~25 / 22 | No new release | **HEALTHY.** Low issue count, high merge rate (22/47 PRs). Rapid, controlled iteration on test infrastructure and security. Appears well-managed. |
| **ZeroClaw** | 50 / 50 | ~45 / 5 | Pre-release (v0.8.3) | **HIGH.** Very active with large feature PRs advancing (goal mode, durable memory). 7 critical S1 workflow-blocking bugs show high ambition but present stability challenges. |
| **CoPaw** | 16 / 21 | ~23 / 27 | No new release | **HEALTHY.** Strong maintenance velocity (27 PRs merged). Active bug-fix cycle, especially on plugin system and channel reliability. |
| **NanoClaw** | 6 / 6 | 6 / 6 | No new release | **MODERATE.** Moderate activity. Healthy merge rate (6/12 PRs) clearing a backlog. Critical day-one blocker issue for Docker setup is concerning. |
| **LobsterAI** | ~4 (Low) | ~4 / 21 | No new release | **HEALTHY.** Major merge day for features (Subagent panel, MCP integrations). Activity is spiking before a likely release. Low issue count is a positive sign. |
| **PicoClaw** | 2 / 2 | 9 / 2 | **Nightly v0.3.1** | **STEADY.** Moderate activity with incremental improvements. Small project, active community. |
| **NullClaw** | 1 / 1 | 0 / 0 | v2026.4.17 (Stale) | **INACTIVE.** Minimal activity. A single unresolved build issue over 2 months suggests a maintainer bandwidth problem. |
| **TinyClaw / Moltis / ZeptoClaw** | 0 | 0 | No data | **DORMANT.** No activity in the last 24 hours. These projects may be in a quiet phase or are effectively unmaintained. |

**Key Takeaway:** The ecosystem is dominated by a few high-velocity, high-ambition projects (OpenClaw, Hermes, IronClaw) that are iterating fast but incurring stability debt. A second tier (NanoBot, CoPaw, LobsterAI) is more balanced, focusing on polish and security.

### 3. OpenClaw's Position

- **Advantages:**
    1.  **Scale:** OpenClaw is the largest and most active project by a significant margin (291 issues, 500 PRs in 24h) dwarfing all others. This scale implies the largest feature set, broadest platform support, and deepest community.
    2.  **Maturity Trap:** OpenClaw is addressing the most advanced integration challenges (e.g., Anthropic thinking block signatures, complex multi-modal streaming) that smaller projects haven't encountered yet.
    3.  **Architectural Momentum:** The active push toward SQLite storage (PR #98236) and durable routines (PR #98727) shows a commitment to long-term architectural quality and removal of legacy technical debt.

- **Disadvantages vs. Peers:**
    1.  **Stability Gap:** OpenClaw's v2026.6.11 release is experiencing a far more severe regression crisis (8 P1 bugs clustered together) than Hermes Agent's v0.18.0 post-release reports. This directly impacts user trust.
    2.  **Review Bottleneck:** The 91% open PR rate is the worst in the ecosystem. Projects like NanoBot and CoPaw are merging a much higher percentage of their PRs, indicating a more responsive and efficient review process. OpenClaw's maintainer team appears overwhelmed.
    3.  **Backlog Bloat:** OpenClaw has a large number of high-priority issues (security, MCP, memory) that have been open for 40-150+ days. This backlog is deeper and older than any other active project, which risks feature stagnation for critical, non-regression items.

### 4. Shared Technical Focus Areas

Multiple projects are converging on the same architectural challenges, indicating strong, cross-cutting user demands:

- **Memory & Context Management (Universal):**
    - **Need:** Prevent context loss, improve memory isolation, and manage trust.
    - **Projects:** OpenClaw (Memory Trust Tagging #7707, Pre-reset flush #45608), IronClaw (Memory isolation #5460), CoPaw (Context "anchor" protection #5710, Headroom integration #5063), ZeroClaw (Durable memory store PR #8570).
- **Durable & Autonomous Execution:**
    - **Need:** Agents that can recover from crashes, survive restarts, and execute long-running or background tasks without supervision.
    - **Projects:** OpenClaw (Durable routines #98727, Telegram spooling #98806), Hermes Agent (Cron outputs to live session #5712), IronClaw (Goal mode), ZeroClaw (Goal mode #8303).
- **MCP (Model Context Protocol) Ecosystem Integration:**
    - **Need:** Seamless discovery, injection, and utilization of MCP tools across all interfaces (TUI, CLI, Web).
    - **Projects:** OpenClaw (MCP tools in subagents #85030), ZeroClaw (MCP tool visibility gap #8193, Resources-as-context PR #8508), NanoClaw (MCP template integration).
- **Security Hardening:**
    - **Need:** Protect against credential leaks, memory poisoning, and unauthorized access.
    - **Projects:** CoPaw (API key exposure in logs #5705, Web console password #5715), ZeroClaw (Zip-bomb vulnerability #8554), NanoBot (API auth bypass #4490), OpenClaw (Memory trust tagging #7707).
- **Platform-Specific Reliability:**
    - **Need:** Stable, functional integrations with major platforms (Telegram, Slack, Feishu, Discord).
    - **Projects:** OpenClaw (Telegram spooling), IronClaw (Slack consistency #5506), PicoClaw (Telegram reply-as-mention, QQ streaming), CoPaw (Feishu card parsing and bot filtering #5708-#5710).

### 5. Differentiation Analysis

| Axis | OpenClaw | Hermes Agent | IronClaw | ZeroClaw | NanoBot / CoPaw |
|---|---|---|---|---|---|
| **Primary Focus** | Maximal feature surface & integration | Agent autonomy & cron workflows | Production-grade, multi-tenant enterprise agent | Autonomous, goal-oriented, plugin-based agent | Stability, security, and platform polish |
| **Target User** | Power users & integrators needing deep customization | Automation & workflow developers | Enterprise ops & platform teams | Autonomous systems developers | Everyday users & community admins |
| **Architecture / Philosophy** | Heavy monolithic core with a large plugin/community ecosystem | "Judgment"-based model routing & background autonomy | "Reborn" v2 stack with strong test infrastructure & failure analysis | Rust-powered, WASM-plugin-centric architecture | Lean, rapidly iterating, highly responsive to bugs |
| **Key Differentiator** | **Breadth vs. Depth.** Handles the most complex integrations but struggles to maintain quality across all of them. | **Workflow & Autonomy.** Strongest focus on background cron jobs and autonomous task execution. | **Enterprise Readiness.** Deepest focus on test coverage, failure taxonomy, and multi-actor scenarios. | **Modularity & Durability.** Most aggressive push toward self-contained, durable agent goals via plugins. | **Balance & Responsiveness.** Highest PR merge rates and strongest focus on closing bugs quickly, sacrificing feature breadth for stability. |

### 6. Community Momentum & Maturity

- **Tier 1: Rapidly Iterating (High Risk/Reward)**
    - **OpenClaw, Hermes Agent, IronClaw, ZeroClaw:** These projects are making the most dramatic feature advances (autonomy, platform depth, enterprise features) but are incurring significant stability costs. They are suitable for developers who can tolerate churn in exchange for cutting-edge capabilities. **IronClaw** is the most unstable of the group (pre-release QA phase), while **OpenClaw** struggles with a broken review pipeline.

- **Tier 2: Stabilizing & Polishing**
    - **NanoBot, CoPaw, LobsterAI:** These projects have a healthier balance of features and stability. They are clearing their backlogs, responding quickly to bug reports, and shipping reliable releases. **LobsterAI** is emerging from a feature sprint into a stabilization phase. These are better choices for users who need a more dependable daily driver.

- **Tier 3: Low Activity / Dormant**
    - **NullClaw, TinyClaw, Moltis, ZeptoClaw:** These projects show minimal to no recent activity. **NullClaw's** single unresolved build issue over two months is a strong signal that the project lacks maintainer bandwidth. These should be avoided for new production deployments.

### 7. Trend Signals for AI Agent Developers

1.  **The "Durable Agent" is the Next Frontier:** The convergence of goal modes (ZeroClaw, IronClaw), durable routines (OpenClaw), and cron-injected sessions (Hermes) signals a clear industry move away from simple "chat-and-respond" agents toward **persistent, autonomous executors** that can pursue complex objectives over time, survive restarts, and report asynchronously.

2.  **Security is Now a Baseline Feature:** It is no longer an afterthought. User demand for memory isolation, credential redaction, and plugin sandboxing (zip-bomb prevention) indicates that enterprise and security-conscious users are now the primary growth market for these tools. Projects without a dedicated security track will be left behind.

3.  **MCP is a Distribution Channel, Not Just a Protocol:** The biggest UX pain points across ZeroClaw, OpenClaw, and CoPaw are not about *supporting* MCP, but about *discovering and managing* MCP tools effectively. The central challenge has shifted from "can we connect to tools?" to "can we make tools visible, manageable, and secure in the user interface?" This is a **UX and governance challenge** for the entire ecosystem.

4.  **The "One-Click Install" Dream is Not Yet Real:** Issues like ZeroClaw's installation friction, NanoClaw's broken Docker networking, and the prevalence of "day one blockers" show that the onboarding experience remains a significant barrier to mass adoption. The projects that solve this will gain a significant user base from the more technically adept competition.

5.  **Platform-Specific Fidelity is a Competitive Moat:** Users are not just asking for a "Telegram bot." They are asking for **Telegram bots that feel like Telegram** (reply-as-mention, durable webhook recovery) or **Feishu bots that handle interactive cards**. This level of platform-specific integration, beyond a generic adapter, is a key differentiator for user adoption.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

Here is the NanoBot project digest for July 2, 2026.

## NanoBot Project Digest | 2026-07-02

### 1. Today's Overview
NanoBot saw **very high activity** today, with 47 Pull Requests updated in the last 24 hours— including 22 that were merged or closed—and a further 8 Issues updated. The project appears to be in a phase of rapid internal improvement, with maintainers demonstrating significant velocity on test infrastructure, security hardening, and agent execution reliability. While no new releases were cut, the flurry of PR activity targeted for `main` suggests a major release may be imminent.

### 2. Releases
- **None**: No new versions were released today.

### 3. Project Progress
The project saw **22 PRs merged or closed** today, indicating a strong push to stabilize core subsystems. Key merged changes include:
- **Agent Runner & Testing Infrastructure (High volume)**: Merged PRs [#3982](https://github.com/HKUDS/nanobot/pull/3982), [#3983](https://github.com/HKUDS/nanobot/pull/3983), and [#4119](https://github.com/HKUDS/nanobot/pull/4119) indicate the team landed foundational test harnesses for the agent runner (scripted provider harness, blocked tool-call finish reasons) and a critical security fix for symlink workspace escapes.
- **Memory & Consolidation**: PR [#4193](https://github.com/HKUDS/nanobot/pull/4193) (memory lifecycle harness) was merged, paving the way for more reliable session consolidation.
- **API Security**: The security enhancement requiring authentication for the OpenAI-compatible API when bound to all interfaces (Issue [#4490](https://github.com/HKUDS/nanobot/pull/4490)) was closed, closing a significant external attack surface.

### 4. Community Hot Topics
The community is most engaged around foundational model access and platform-specific user experience:
- **OpenAI Response API & Anthropic OAuth**: Related Issues [#4612](https://github.com/HKUDS/nanobot/Issue/4612) (support OpenAI response API) and [#4604](https://github.com/HKUDS/nanobot/Issue/4604) (Anthropic OAuth) highlight a persistent user need for broader, more flexible model provider integrations. A corresponding PR [#4632](https://github.com/HKUDS/nanobot/pull/4632) for the Anthropic OAuth provider is already open and active.
- **Feishu Channel UX Enhancement**: Issue [#4619](https://github.com/HKUDS/nanobot/Issue/4619) requests a `system` message type for the Feishu channel to create visual separators for new sessions, reflecting a demand for richer platform-specific UI.

### 5. Bugs & Stability
| Severity | Issue | Description | Fix Pending? |
| :--- | :--- | :--- | :--- |
| **High** | [#4434](https://github.com/HKUDS/nanobot/Issue/4434) (CLOSED) | **Security Bypass**: MCP `enabledTools` deny-all policy could be bypassed, exposing resources & prompts to the model. | **Fixed/Closed** |
| **Medium** | [#4615](https://github.com/HKUDS/nanobot/Issue/4615) (CLOSED) | **Startup Crash**: `nanobot gateway` crashed on startup when `CronService` called `os.fsync()` on a parent directory (OSError). | **Fixed/Closed** |
| **Low-Medium** | [#4637](https://github.com/HKUDS/nanobot/Issue/4637) (OPEN) | **Telegram Rendering Bug**: Long messages split into trunks fail to render all but the final trunk. Affects usability for verbose agent outputs. | No PR linked yet |
| **Low** | [#4634](https://github.com/HKUDS/nanobot/Issue/4634) (OPEN) | **Edit Disambiguation**: `edit_file` tool targets the wrong occurrence of text, a dominant failure mode in benchmarks. A fix PR [#4635](https://github.com/HKUDS/nanobot/pull/4635) is already open. | PR Open |

### 6. Feature Requests & Roadmap Signals
- **Upcoming Release Predictions**:
    - **Anthropic OAuth Support**: PR [#4632](https://github.com/HKUDS/nanobot/pull/4632) is a top candidate for merging, driven by community demand (Issue [#4604](https://github.com/HKUDS/nanobot/Issue/4604)).
    - **Enhanced Agent Execution**: Several PRs from today (e.g., [#4623](https://github.com/HKUDS/nanobot/pull/4623) [spawn model override], [#4624](https://github.com/HKUDS/nanobot/pull/4624) [aggregated result mode]) suggest a focus on making subagents more flexible and controllable.
    - **Advanced Memory Management**: PRs [#4621](https://github.com/HKUDS/nanobot/pull/4621) (gate archives with provenance) and [#4626](https://github.com/HKUDS/nanobot/pull/4626) (opt-in eager consolidation) indicate significant work on memory reliability, likely targeting the "forgetfulness" pain point reported by users.
- **Long-term Signals**: The `heartbeat trigger` command (PR [#4620](https://github.com/HKUDS/nanobot/pull/4620)) suggests a roadmap toward more autonomous, scheduled agent behaviors.

### 7. User Feedback Summary
- **Pain Points**:
    - **Model Incompatibility**: Users are actively requesting direct support for non-standard OpenAI endpoints (Response API) and non-API-key authentication methods (Anthropic OAuth), indicating current integrations are a barrier for some.
    - **Unreliable Edit Execution**: The `edit_file` tool mis-firing on the wrong line (Issue [#4634](https://github.com/HKUDS/nanobot/Issue/4634)) is a known and measured pain point for code generation workflows.
    - **Platform-Specific UI**: The Feishu and Telegram channel issues show that users need better message formatting and session management to match platform conventions.
- **Satisfaction**: The rapid closure of the MCP security bypass (Issue [#4434](https://github.com/HKUDS/nanobot/Issue/4434)) and startup crash (Issue [#4615](https://github.com/HKUDS/nanobot/Issue/4615)) indicates a responsive development team.

### 8. Backlog Watch
- **No high-priority long-neglected items identified today**: The active issues and PRs are all recent (last 2-3 days) or have been resolved. The project maintainers appear to be keeping up with the current queue effectively.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — July 2, 2026

## Today's Overview

Hermes Agent has surged into an extraordinarily active phase with **50 issues** and **50 pull requests** updated in the last 24 hours, reflecting a vibrant open-source ecosystem with **370+ community contributors** to date. The project just shipped its **Judgment Release (v0.18.0)**, one of the largest releases in its history, encompassing approximately 1,720 commits and 949 closed issues. Agent autonomy, cron workflows, and platform integrations remain the dominant themes for both community questions and collaborator efforts. The sheer volume of activity — from 2:1 open-to-closed issue ratio (48 active / 2 closed) to 13 merged PRs alongside 37 open ones — indicates both healthy community engagement and rapid development velocity.

## Releases

### Hermes Agent v0.18.0 (v2026.7.1) — "The Judgment Release"
**Released:** July 1, 2026  
**Comparison:** v0.17.0 → v0.18.0  
**Changelog statistics:** ~1,720 commits · 998 merged PRs · 2,215 files changed · ~251,000 insertions · ~41,000 deletions · **949 issues closed**

This is a substantial release across many dimensions. Notable areas of work include:
- **Cron & background autonomy** — significant expansion of scheduled job capabilities
- **Over 370 distinct community contributors** acknowledged
- Major expansion of file, tool, and memory capabilities

**No explicit breaking changes or migration notes published in the release description.** However, given the volume (250K+ insertions, 41K deletions), users should validate custom configurations before upgrading. Community issues already surfaced post-release (e.g., issue #56533: ANSI escape leak from `/journey`; #56535: YAML integer `0` replacing `api_key` on credential clearing; #56524: Telegram update causing gateway drain timeout failures on macOS/launchd).

## Project Progress

**Merged/Closed PRs today:** **13** PRs were merged or closed across the period. Key accomplishments:

- [#56533](https://github.com/NousResearch/hermes-agent/issues/56533) **(CLOSED)** — The `/journey` slash command's raw ANSI escape code leak in TUI and Desktop has been resolved, fixing a visible user-facing display bug.

- [#49445](https://github.com/NousResearch/hermes-agent/issues/49445) **(CLOSED)** — The Exa search backend (`search.exa`/`web_search`/`web_extract`) was non-functional in the official Docker image since v0.17.0; a fix has been shipped.

- Significant infrastructure work is ongoing across 37 open PRs, including:
  - [#56706](https://github.com/NousResearch/hermes-agent/pull/56706) — Bounding messaging and computer-use token bloat with deterministic fast-path token accounting
  - [#56705](https://github.com/NousResearch/hermes-agent/pull/56705) — Fixing `MSYS_NO_PATHCONV` for Windows Git Bash subprocesses
  - [#56690](https://github.com/NousResearch/hermes-agent/pull/56690) — Fail-fast for headless OAuth token expiration in MCP contexts
  - [#56688](https://github.com/NousResearch/hermes-agent/pull/56688) — Registering Vertex AI provider in `PROVIDER_REGISTRY` and `HERMES_OVERLAYS` for full functional parity

## Community Hot Topics

- **[#5712: True Autonomy — Inject Cron Results into Live Gateway Chat Sessions](https://github.com/NousResearch/hermes-agent/issues/5712)** | **11 comments · 11 👍**  
  *Author: juice-digital* — One of the most upvoted active issues, and a clear signal of high demand: users want cron job outputs embedded into ongoing gateway chat sessions, not just isolated background execution. This bridges background autonomy with foreground interactivity.

- **[#13983: 16K Tokens Consumption by Default](https://github.com/NousResearch/hermes-agent/issues/13983)** | **6 comments · 1 👍**  
  *Author: mikelemo* — A prominent performance concern. The default agent consumes 16K+ tokens for the simple "who u?" prompt, which users find unexpectedly bloated. Community likely expects optimization on system prompt reduction or better compression of default instructions.

- **[#56524: Telegram Update Leaves Gateway Offline After Drain Timeout](https://github.com/NousResearch/hermes-agent/issues/56524)** | **6 comments**  
  *Author: aneym* — A reliability issue affecting Telegram gateway on macOS/launchd. A `hermes update` triggers restart but returns to the agent before the gateway fully drains, then the 180s drain timeout disconnects Telegram without proper recovery. Platform-specific urgency for Telegram users.

- **[#18019: Stream Stalled Mid Tool-Call](https://github.com/NousResearch/hermes-agent/issues/18019)** | **5 comments**  
  *Author: hosonfung* — Persistent streaming issue when writing large files, despite claimed prior fixes. Community workaround exists but core fix remains elusive.

- **[#56533: `/journey` Leaks Raw ANSI Escape Codes](https://github.com/NousResearch/hermes-agent/issues/56533)** | **4 comments** — **CLOSED** today, signalling prompt maintainer responsiveness.

## Bugs & Stability

### Critical / High Severity (P2)
- **[#56524: Telegram Update — Gateway Offline After Drain Timeout](https://github.com/NousResearch/hermes-agent/issues/56524)** — macOS/launchd, Telegram gateway offline post-update. No fix PR yet.
- **[#56704: `computer_use` capture crashes on Linux/WSL — `int(None)` on null pid](https://github.com/NousResearch/hermes-agent/issues/56704)** — Crash in `list_windows` for X11 windows with null PID. **Reassuringly, this was just filed today and represents a fresh regression.**
- **[#56503: Windows Subprocess Console Flashes](https://github.com/NousResearch/hermes-agent/issues/56503)** — Long-standing UX distraction on Windows for background processes.
- **[#56535: YAML integer `0` saved as `api_key` on credential clearing](https://github.com/NousResearch/hermes-agent/issues/56535)** — Auth flow fails for custom providers due to YAML serialization bug.
- **[#56673: Headless MCP OAuth Hangs on No-Refresh-Token Flow](https://github.com/NousResearch/hermes-agent/issues/56673)** — **Fix PR #56690 filed today**, which fast-fails with `OAuthNonInteractiveError` instead of hanging.

### Medium/Lower Severity (P3)
- [#56527](https://github.com/NousResearch/hermes-agent/issues/56527) — `x_search` reads unbounded upstream response bodies (resource exhaustion risk)
- [#56540](https://github.com/NousResearch/hermes-agent/issues/56540) — Telephony API leaks JSONDecodeError on malformed success bodies
- [#56536](https://github.com/NousResearch/hermes-agent/issues/56536) — MCP stdio ignores `env.PATHEXT` on Windows
- [#56505](https://github.com/NousResearch/hermes-agent/issues/56505) — Diagnostics upload-url response reads uncapped

## Feature Requests & Roadmap Signals

The following features, all filed today (July 2), represent clear community direction for v0.19.0 and beyond:

- **[#56551: First-class Pipeline support (YAML-driven multi-step workflows)](https://github.com/NousResearch/hermes-agent/issues/56551)** — The highest-signal feature request today. Users want explicit YAML-defined workflows instead of embedding pipeline logic inside cron prompts. This is a logical evolution of the cron system.

- **[#56655: Task-aware per-turn model routing via pre_llm_call plugin hook](https://github.com/NousResearch/hermes-agent/issues/56655)** — A plugin-pattern request for model selection per message based on task type (coding, reasoning, fast Q&A). Will heavily appeal to multi-provider users.

- **[#56204: Missing worker tool for re-parenting dependencies before self-closing](https://github.com/NousResearch/hermes-agent/issues/56204)** — A complex Kanban request for "fan-out + aggregator" patterns where completed tasks leave dependent tasks orphaned.

- **[#56492: "Learn mode" for non-yolo usage](https://github.com/NousResearch/hermes-agent/issues/56492)** — Auto-approval with config rule creation; reduces friction in Kanban mode's approval gates.

- **[#43625: Desktop app — live message sync from other platforms](https://github.com/NousResearch/hermes-agent/issues/43625)** — Desktop app is isolated from Telegram/Discord sessions; users want cross-platform message visibility.

**Prediction:** Pipeline support (#56551) and per-turn model routing (#56655) are likely to land in v0.19.0 due to high user demand and structural alignment with existing cron/plugin architectures.

## User Feedback Summary

Users are expressing **both satisfaction with rapid feature delivery and frustration with token overhead and stability regressions:**

- **Pain:** The default 16K token consumption for trivial queries (#13983) is the most vocal and repeated dissatisfaction point. "Bloatiest I had so far" is a direct user sentiment that should be addressed as a release-blocker for future updates.

- **Pain:** Post-release regressions in v0.18.0 are surfacing quickly — Docker image search (#49445), gateway drain failures (#56524), ANSI escape leaks (/journey, #56533), and YAML credential serialization (#56535). This suggests the release may benefit from a stability patch.

- **Satisfaction:** The cron/autonomy improvements in v0.18.0 are driving new use cases: users are building "fan-out + aggregator" patterns (#56204), requesting pipeline YAML (#56551), and asking for cron-injected chat sessions (#5712). These indicate successful delivery of the core "Judgment" promise.

- **Dissatisfaction:** Windows-specific issues (console flashes #56503, LanceDB failure #26141, subprocess PATHEXT #56536) remain a consistent point of friction, signalling Windows parity is still not mature.

## Backlog Watch

Several issues are aging without resolution and may need maintainer attention:

- **[#13983: 16K Token Consumption by Default](https://github.com/NousResearch/hermes-agent/issues/13983)** — Filed April 22 (72+ days). High impact on user-perceived performance. No fix PR or maintainer confirmation of expected behaviour. **Should be prioritized for next patch release.**

- **[#34693: PII patterns and `redact_level` config](https://github.com/NousResearch/hermes-agent/pull/34693)** — Open PR since May 29 (34+ days). This is a security-sensitive feature that would significantly enhance enterprise/regulated use cases. Notable that the same contributor (#naterchrdsn) is highly active on the project and has merged other work; this PR may be blocked on review bandwidth.

- **[#18507 / #18506: Matrix gateway tools and rendering](https://github.com/NousResearch/hermes-agent/pull/18507)** — Open since May 1 (62 days). Large feature addition for Matrix protocol support. This is a substantial scope item that could be a strong candidate for the next major feature release.

- **[#16693: Discord VC TTS silent despite success logs](https://github.com/NousResearch/hermes-agent/issues/16693)** — Filed April 27 (66 days). Reproducible audio failure in Discord voice channels with no fix. Likely requires deeper investigation of Discord voice protocol integration.

*All links updated as of 2026-07-02. Data sourced from [NousResearch/hermes-agent GitHub repository](https://github.com/NousResearch/hermes-agent).*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-07-02

## Today's Overview
The PicoClaw project shows moderate activity today with 2 issues updated and 11 pull requests touched in the last 24 hours, alongside a new nightly release. A freshly opened feature request for QQ channel streaming support and a critical Android/Termux crash bug represent the main tension points between platform expansion and stability. The project's open PR pipeline remains healthy with 9 open proposals, including several addressing security, sandboxing, and config management. One stale PR (turn.done lifecycle) was finally merged, signaling progress on a long-standing signaling gap. Overall, the project appears in a steady state of incremental improvement with active community engagement.

## Releases
- **Nightly Build v0.3.1-nightly.20260701.2cf030d2** — This is an automated build reflecting the latest main branch changes and may be unstable. No breaking changes or migration notes were documented. **Full Changelog**: https://github.com/sipeed/picoclaw/compare/v0.3.1...main

## Project Progress
### Merged/Closed PRs Today
- **PR #3116 [CLOSED]** — `fix(pico): complete turn.done lifecycle signaling` by @afjcjsbx. Merged after being open since June 12, this resolves a three-gap issue preserving `request_id` for queued steering/follow-up messages so every inbound Pico request receives proper lifecycle completion signals. This addresses the root issue #2984. [Link](https://github.com/sipeed/picoclaw/pull/3116)
- **PR #2975 [CLOSED]** — `feat(telegram): treat reply to bot message as mention in group chats` by @Jlan45. Now merged, this enables Telegram group chats to treat replying to a bot message as equivalent to @mentioning, improving UX for `mention_only: true` configurations. [Link](https://github.com/sipeed/picoclaw/pull/2975)

### Notable Open PRs Advancing
- **PR #3200** — `feat(models): add configurable default fallback chain` by @lc6464. A fresh proposal that adds a dedicated default-chain workflow on the models page in the web UI, letting users set fallback model order with backend persistence. [Link](https://github.com/sipeed/picoclaw/pull/3200)
- **PR #3202** — `fix(routing): strip leading/trailing underscores in ID normalization` by @Osamaali313. Addresses a normalization gap where `NormalizeAgentID`/`NormalizeAccountID` could produce IDs with leading or trailing underscores, violating the documented `^[a-z0-9][a-z0-9_-]{0,63}$` pattern. [Link](https://github.com/sipeed/picoclaw/pull/3202)

## Community Hot Topics
- **Issue #3164 [OPEN]** — `[BUG] Process hooks crash gateway on Android/Termux (v0.2.9, config v3)` by @AMEOBIUS — 1 comment. This bug report has received attention due to its severity (gateway crashes within 2 seconds of startup). Represents a significant platform-specific regression. [Link](https://github.com/sipeed/picoclaw/issues/3164)
- **Issue #3201 [OPEN]** — `[Feature] Support streaming output for QQ channel` by @YsLtr — 0 comments yet, but represents a clearly articulated use case from the QQ channel user base that aligns with existing StreamingCapable patterns in Telegram and Pico WebSocket channels. [Link](https://github.com/sipeed/picoclaw/issues/3201)
- **PR #3165 [OPEN]** — `fix(openai_compat): recover Seed XML tool calls` by @Alix-007 — Updated today, this PR addresses tool call recovery from Volcengine Doubao Seed XML blocks in OpenAI-compatible endpoints. Has been open since June 24 with no maintainer review yet. [Link](https://github.com/sipeed/picoclaw/pull/3165)

## Bugs & Stability
### High Severity
- **Issue #3164** — **Process hooks crash Android/Termux gateway** — PicoClaw v0.2.9 gateway crashes within 2 seconds of startup when any JSON-RPC over stdio process hook is active, even a minimal "hello world" hook. This is a platform-specific blocker for Android/Termux users. No fix PR exists yet. [Link](https://github.com/sipeed/picoclaw/issues/3164)

### Medium Severity
- **PR #3165** — Seed XML tool calls not being recovered from OpenAI-compatible responses — While not a crash, this bug leaks internal XML format to users and breaks tool call functionality for Volcengine Doubao users. A fix PR exists but is unreviewed. [Link](https://github.com/sipeed/picoclaw/pull/3165)

## Feature Requests & Roadmap Signals
- **QQ Channel Streaming (Issue #3201)** — Request to add `StreamingCapable` support to the QQ channel so users see token-by-token generation rather than waiting for full responses. Given that Telegram and Pico WebSocket already implement this pattern, the implementation risk is low and likely to land within 1-2 releases. [Link](https://github.com/sipeed/picoclaw/issues/3201)
- **Configurable Default Fallback Chain (PR #3200)** — A fully implemented PR (not just a request) for model fallback chain management in the web UI. Strong candidate for the next stable release given it has backend persistence and UI integration. [Link](https://github.com/sipeed/picoclaw/pull/3200)
- **Telegram Reply-as-Mention (PR #2975, merged)** — Now that this is merged, users running `mention_only: true` in Telegram group chats will enjoy much more natural interaction patterns. Likely to be in next stable.

## User Feedback Summary
- **Android/Termux users** are experiencing a full crash blocker (#3164) that makes the gateway unusable on mobile with any process hooks enabled — this is the most urgent user pain point visible today.
- **QQ channel users** explicitly expressed desire for streaming output (#3201), indicating active use of this channel and frustration with full-response latency.
- **Volcengine Doubao users** are likely encountering corrupted tool call experiences due to unrecovered Seed XML (#3165); the fix waits for maintainer review.
- **Telegram group chat users** benefit from the merged reply-as-mention feature (PR #2975), addressing a long-standing UX friction point.

## Backlog Watch
- **PR #3165** — `fix(openai_compat): recover Seed XML tool calls` — Open since June 24 with no maintainer comments or review. Affects a major Chinese LLM provider integration. [Link](https://github.com/sipeed/picoclaw/pull/3165)
- **PR #3161** — `fix(exec): keep deny patterns active for custom allow rules` — Open since June 23 with security implications; maintainer review needed to close a potential escalation vector. [Link](https://github.com/sipeed/picoclaw/pull/3161)
- **PR #3160** — `fix(auth): reject cross-site launcher setup requests` — Open since June 23, addresses CSRF-style vulnerability in first-run dashboard password setup. Security-sensitive fix awaiting maintainer attention. [Link](https://github.com/sipeed/picoclaw/pull/3160)
- **PR #3104, #3103, #3100** — Three dependency bump PRs (shadcn, typescript-eslint, vite-plugin-react) have been open since June 11 without review. While low risk, prolonged neglect of dependency updates can lead to cascading security issues.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-07-02

## Today's Overview

NanoClaw saw **moderate activity** over the last 24 hours, with **6 new open issues** (all raised by community member `allixsenos`) and **12 pull requests** updated — exactly half merged/closed and half still open. The issue queue is dominated by **infrastructure and reliability problems** in the OneCLI Docker setup, webhook server, and silent error paths, suggesting the project may be in a stabilization phase after rapid feature growth. No new releases were published today. The PR throughput is healthy, with several long-running PRs from April and June finally reaching resolution, balanced against new feature additions like agent templates and instance-wide defaults.

## Releases

No new releases published. The last release date is not available in the data.

## Project Progress

**6 PRs merged/closed today**, including several long-standing contributions:

- **[#2905 – fix(whatsapp): end the old socket on reconnect](https://github.com/nanocoai/nanoclaw/pull/2905)** — Critical memory leak fix: WhatsApp's frequent `reason: 408` reconnects were orphaning Baileys socket graphs (WebSocket, timers, event listeners), accumulating unbounded memory. This was merged same-day as filed.
- **[#2677 – fix(scheduling): retry pre-task script once on failure with diagnostics](https://github.com/nanocoai/nanoclaw/pull/2677)** — Merged after nearly a month open; improves scheduler resilience with automatic retry and diagnostic output.
- **[#1716 – feat: add /check-contribution operational skill](https://github.com/nanocoai/nanoclaw/pull/1716)** — Automates pre-flight validation for skill contributions (SKILL.md format, code quality, security). Took ~3 months to merge.
- **[#1257 – feat: support custom API endpoints (e.g., z.ai)](https://github.com/nanocoai/nanoclaw/pull/1257)** — Enables third-party Anthropic-compatible APIs mounted at sub-paths. From March, finally closed.
- **[#1693 – feat: /add-backup utility skill](https://github.com/nanocoai/nanoclaw/pull/1693)** — Automated state backup (messages.db, groups, sessions) to local git with optional remote push.
- **[#1597 – feat: add QMD skill for semantic conversation search](https://github.com/nanocoai/nanoclaw/pull/1597)** — Adds Query-Mediated Discussion search capability. From April.

**Key Theme:** The project is catching up on a backlog of feature skills that were submitted weeks to months ago, alongside fast-turnaround stability fixes.

## Community Hot Topics

**No issues received comments or reactions** — all 6 open issues are at 0 comments and 0 👍. This is unusual and may indicate either:
- Issues were just filed and haven't been noticed yet, or
- Community engagement on GitHub (as opposed to other channels) is low.

The **most substantive PR discussions** (by scope and recent activity):

- **[#2906 – feat: instance-wide default agent provider](https://github.com/nanocoai/nanoclaw/pull/2906)** — New feature allowing operators to set `DEFAULT_AGENT_PROVIDER` in `.env` instead of per group. Filed yesterday, still open.
- **[#2890 – feat(templates): agent template loader, setup flow, and docs](https://github.com/nanocoai/nanoclaw/pull/2890)** — Significant feature: templates as reusable bundles of instructions, MCP tools, and skills, loadable from public library, local path, or any git repo. Open since June 30.
- **[#2317 – feat: /add-voice-transcription-free-whisper skill](https://github.com/nanocoai/nanoclaw/pull/2317)** — Local voice transcription via openai-whisper or whisper.cpp. Open since May 7; still awaiting review.

**Underlying need:** The template system and default provider PRs signal that operators want **repeatable, shareable agent configurations** — a move toward production-grade deployment patterns. The voice transcription skill addresses a key accessibility/UX gap.

## Bugs & Stability

All **4 bugs filed today** are by `allixsenos` and represent **critical reliability issues** in the OneCLI/Docker setup:

1. **[#2903 – Default OneCLI setup broken: gateway binds 127.0.0.1 but clients target 10.0.0.1](https://github.com/nanocoai/nanoclaw/issues/2903)** — **Severity: CRITICAL.** Fresh installs can never reach the OneCLI gateway, making agents unresponsive despite successful channel pairing. This is a **day-one blocker** for new users. No fix PR yet.

2. **[#2902 – Silent message swallowing: channel-accepted messages that fail to reach agent are never reported](https://github.com/nanocoai/nanoclaw/issues/2902)** — **Severity: HIGH.** Messages successfully received on a channel (e.g., Telegram) but failing to spawn/wake an agent are silently dropped, with failure only written to a log file. Users see their messages disappear with no feedback. No fix PR yet.

3. **[#2901 – WEBHOOK_PORT silently ignored when set in .env](https://github.com/nanocoai/nanoclaw/issues/2901)** — **Severity: MEDIUM.** Configuration documented as settable in `.env` is only read from process environment variables, with no error or warning. Misleading for operators.

4. **[#2900 – Webhook server bind failure (EADDRINUSE) crashes entire host process](https://github.com/nanocoai/nanoclaw/issues/2900)** — **Severity: HIGH.** An optional infrastructure component's failure is uncaught, killing the entire host daemon and triggering crash-loop/circuit-breaker. Should degrade gracefully.

**Other PRs addressing bugs:**
- **[#2904 – fix(slack): reload thread history from platform on @mention](https://github.com/nanocoai/nanoclaw/pull/2904)** — Open; fixes `engage_mode: 'mention'` missing entire thread context on re-tag.
- **[#2899 – fix(discord): strip newline suffix from custom_id](https://github.com/nanocoai/nanoclaw/pull/2899)** — Open; fixes every DM approval-card button tap routing to "reject" instead of the intended action.

## Feature Requests & Roadmap Signals

**From merged PRs (likely in next release):**
- Custom API endpoint support (z.ai and similar)
- Automated state backup skill
- Semantic conversation search (QMD skill)
- Contribution pre-flight validation skill

**From open PRs (strong candidates for next version):**
- **Agent templates** ([#2890](https://github.com/nanocoai/nanoclaw/pull/2890)) — likely the most impactful upcoming feature; enables one-command deployment of complete agent configurations
- **Instance-wide default agent provider** ([#2906](https://github.com/nanocoai/nanoclaw/pull/2906)) — simplifies operator workflow
- **Free local voice transcription** ([#2317](https://github.com/nanocoai/nanoclaw/pull/2317)) — addresses a clear user need for privacy and cost savings

**From issues (potential roadmap items):**
- Graceful degradation paths for optional infrastructure (webhook server)
- Better error reporting back to users when agent spawning fails
- More robust Docker networking defaults

## User Feedback Summary

**Pain points (from issue reports):**

- **"It doesn't work out of the box"** — Issue [#2903](https://github.com/nanocoai/nanoclaw/issues/2903) describes a fundamental connectivity failure in the default Docker setup that blocks any agent communication.
- **"My messages disappear with no explanation"** — Issue [#2902](https://github.com/nanocoai/nanoclaw/issues/2902) highlights a UX failure where agent failures are completely invisible to users.
- **"Configuration doesn't work as documented"** — Issue [#2901](https://github.com/nanocoai/nanoclaw/issues/2901) shows a gap between documented behavior and actual implementation.
- **"A minor port conflict takes down everything"** — Issue [#2900](https://github.com/nanocoai/nanoclaw/issues/2900) frustrates operators running multiple services.

**Positive signals:**
- The volume of contributed features (backup, voice transcription, QMD search, agent templates) shows an **active and engaged contributor community** shipping real utility.
- **Long-standing PRs are finally being merged** — three from March/April went through today, suggesting maintainers are clearing the review backlog.

## Backlog Watch

**Issues/PRs needing maintainer attention (no recent activity, and not addressed by any open PR):**

1. **[#2903 – Default OneCLI setup broken](https://github.com/nanocoai/nanoclaw/issues/2903)** — Critical day-one blocker; no fix PR exists. Needs immediate maintainer response or assignment.

2. **[#2902 – Silent message swallowing](https://github.com/nanocoai/nanoclaw/issues/2902)** — High severity UX failure; no fix PR exists.

3. **[#2901 – WEBHOOK_PORT ignored in .env](https://github.com/nanocoai/nanoclaw/issues/2901)** — Medium severity configuration bug.

4. **[#2900 – Webhook bind failure crashes host](https://github.com/nanocoai/nanoclaw/issues/2900)** — High severity; graceful degradation needed.

5. **[#2317 – Voice transcription skill](https://github.com/nanocoai/nanoclaw/pull/2317)** — Open since May 7 (nearly 2 months); no recent maintainer activity. High-demand feature left unreviewed.

6. **[#2771 – Configurable --shm-size and --init for agent containers](https://github.com/nanocoai/nanoclaw/pull/2771)** — Open since June 15; addresses Chromium crashes in headless browsers due to small default `/dev/shm`. Important for stability of browser-capable agents.

**Observation:** The four issues filed yesterday by `allixsenos` have **zero responses** from maintainers or other community members. This silence risks contributor frustration and leaves known critical bugs unaddressed.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest — 2026-07-02

## Today's Overview
Project activity is minimal over the past 24 hours, with no new releases, no pull requests, and only one open issue updated. The sole update concerns a build failure on Android/Termux, which has been open since April 2026 and has accumulated six comments. This suggests the project may be in a low-maintenance or quiet phase, though the single open issue represents a sustained community pain point. No new code contributions or merges were recorded today.

## Releases
No new releases were published in the last 24 hours. The latest available version remains v2026.4.17.

## Project Progress
No pull requests were updated (merged, closed, or opened) in the last 24 hours. No feature advancements or bug fixes were recorded.

## Community Hot Topics
The only actively discussed item is **Issue #868**, a bug report regarding a build failure on Android/Termux (aarch64) when running `zig build -Doptimize=ReleaseSmall`. The error involves an `AccessDenied` on `options.zig linkat`. The issue has 6 comments and 0 reactions, indicating a focused but unresolved discussion. The underlying need is for cross-platform build compatibility, specifically for Android environments using Termux and Zig 0.16.0. No pull request has been linked to fix it.

- [Issue #868: zig build fails on Android/Termux (aarch64) with AccessDenied](https://github.com/nullclaw/nullclaw/issues/868)

## Bugs & Stability
**One open bug** of medium severity was updated today (no new bugs reported):
- **Issue #868**: Build failure on Android/Termux (aarch64) due to `AccessDenied` during linking. This blocks deployment on Android devices using Termux and Zig 0.16.0. No fix PR exists.

No crashes, regressions, or other stability issues were reported in the last 24 hours.

## Feature Requests & Roadmap Signals
No new feature requests were filed or updated in the last 24 hours. There are no signals indicating planned features for the next release.

## User Feedback Summary
The only user pain point conveyed today is from a Termux user on Android (Xiaomi Redmi Note 9, LineageOS) who cannot build NullClaw due to a filesystem permission issue during the Zig linker step. This reflects dissatisfaction with cross-platform build reliability, particularly on non-standard Linux environments. No positive or negative feedback about other aspects of the project was recorded.

## Backlog Watch
**Issue #868** (created 2026-04-23, updated 2026-07-01) remains open with no assignee and no linked PR. It has been unanswered by maintainers for over two months, which may indicate a lack of maintainer bandwidth or difficulty reproducing the issue. This issue is the only long-unanswered item currently outstanding and warrants maintainer attention to either fix the build or document a workaround.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — July 2, 2026

## Today's Overview

IronClaw had a heavy development day with **50 PRs updated** and **26 issues active**, signaling sustained high-velocity engineering. The project remains pre-release for its "Reborn" v2 architecture; no new stable releases were cut today. A bug bash is clearly underway — 19 issues are open, 12 of which are QA-labeled from the testing team — and merged PRs show strong momentum in test coverage (6 closed PRs adding integration-tier seams), infrastructure hardening (credential injection and WASM tool installation), and UX polish (notification headers, composer fixes). However, the volume of P1 bugs — especially around routine creation, runner lease expiration, and credential provider logic — suggests the Reborn stack is still in a stabilization phase ahead of a broader rollout. The project's health is productive but noisy, with engineering output focused on closing the gap between feature completeness and production reliability.

---

## Releases

**No new releases today.** The last open release PR (#5311) from June 26 remains unmerged; it proposes breaking API changes across `ironclaw_common` (0.4.2 → 0.5.0) and `ironclaw_skills` (0.3.0 → 0.4.0), suggesting a coordinated release is pending stabilization of the Reborn backend.

---

## Project Progress

**6 PRs merged today** (all closed within the 24h window):

- **#5482** — `test(reborn): int-tier coverage for trigger-management verbs (T0-TRIGGERS)` (henrypark133): Adds integration tests for `trigger_create/list/pause/resume/remove` through the real agent-loop path. Advances Reborn backend coverage roadmap.
- **#5483** — `test(reborn): prove credential injection reaches the wire (T0-SECRET-INJECT)` (henrypark133): Verifies that secrets actually appear on outbound HTTP requests, not just in authorization logic. Closes a coverage gap.
- **#5484** — `test(reborn): error/deny-path coverage for http/shell/mcp tools (T0-ERRPATHS)` (henrypark133): Extends happy-path tests with error and denial scenarios for built-in tools.
- **#5481** — `test(reborn): system-prompt capture seam for model-visible prompt asserts` (henrypark133): Enables tests to assert on what the model actually sees in prompts.
- **#5440** — `test(reborn): PR-E1 seam constructors for integration coverage` (henrypark133): Framework enablers unlocking Tier-2 integration tests, rebased onto one-runtime group harness.
- **#4941** — `feat(tools): add Slack personal (user-token) tool` (sergeiest): Adds a new WASM tool enabling IronClaw to act as the user via personal `xoxp-` tokens, enabling `search_messages` and other capabilities unavailable to bot tokens.

Additionally, **#5488**, **#5443**, **#5458**, **#5457**, **#5289**, **#5246**, and **#5333** were closed — covering skill activation noise removal, automation notifications, a double-header bug on the Logs page, Logs page loading issues, and a generic "driver protocol error" fix.

---

## Community Hot Topics

- **#5459** `Configurable skills and tools` (zetyquickly, 1 comment): The most-watched issue today. It defines the roadmap for admin/user-installed WASM tools and skills with shared vs. private scoping. Two companion PRs landed: #5499 (WASM tool install from zip + tenant-shared credentials) and #5513 (admin UI for tenant-shared credentials). This is the foundation for IronClaw's plugin/extension ecosystem — expect this to dominate deliverables for the next sprint.

- **#5495** `Daily ironclaw failure taxonomy — 2026-07-01` (pranavraja99): A systematic breakdown of benchmark suite failures, analyzing pinchbench and Reborn CI results. This signals a growing maturity in failure analysis, though it indicates persistent instability in the Reborn runtime that blocks E-MULTIUSER scenarios.

- **#5476** `Reborn runs fail with "could not start agent runtime" / "runner lease expired" under turn-state CAS contention` (thisisjoshford): One of several runner-lease issues. The combination of CAS contention and model latency causes routine runs to fail, blocking routine-dependent workflows.

---

## Bugs & Stability

### P1 Bugs (most severe)

1. **#5456** — *Routine runs fail with runner lease expiration*: 90-second inactivity threshold too aggressive for multi-tool routines. **Dominant failure pattern during 6/30 testing.** No fix PR yet.

2. **#5504** — *Routine creation hangs without returning result*: Chat shows initial planning message but never returns confirmation. Critical for the routine creation workflow.

3. **#5415** — *Multi-tool Google Sheets workflow fails with protocol violation*: Fails consistently on 18–25 tool-call workflows. Blocks real-world automation flows.

4. **#5505** — *Routine creation prompt is embedded inside the created routine*: Self-referential prompts cause routines to repeatedly attempt creation instead of executing intended tasks.

5. **#5476** — *Runner lease expired under CAS contention + model latency*: See above. Compound failure with #5456.

6. **#5479** — *Second thread with distinct actor fails (driver_unavailable/unknown thread)*: Blocks E-MULTIUSER (multi-actor group harness). Fails deterministically 8/8 tests.

### P2 Bugs

- **#5507** — Failed runs show "No thread attached" preventing debugging
- **#5508** — Slack delivery target "not found" despite active connection
- **#5506** — Slack bot redirects to WebUI instead of delivering results
- **#5509** — Chat creation latency scales with conversation history
- **#5416** — Incorrect Google connection state causes contradictory auth flow

### P3 Bugs

- **#5510** — No working mechanism to delete old routines
- **#5458** — Double header on Logs page (CLOSED)
- **#5457** — Logs page never loads entries (CLOSED)

### Regression/Long-Running

- **#4108** — Nightly E2E continues to fail (since May 27)

### Fix PRs in Progress

- **#4927** — Fix credential-free hosted MCP providers (open, experienced contributor)
- **#5511** — Allow WebUI SSO relogin to replace stale token (open, core contributor)
- **#4841** — No run-borking failures + retryable failed runs (open, large scope, core contributor)

---

## Feature Requests & Roadmap Signals

- **Configurable skills/tools (#5459)**: The most signal-heavy feature. Two PRs already tackle WASM tool install and credential management. Likely to be included in the next release as the foundation for IronClaw's extension marketplace.
- **Context management with progressive tool disclosure (#5149)**: Open PR cutting per-call prompt size from 91 tools to a focused subset. Addresses latency/timeout issues that plague production. Likely next release candidate.
- **Compact Google extension capabilities (#5503)**: Adds efficient Gmail/Calendar summaries without fanout. Responds to the "protocol violation" and latency complaints (#5415).
- **Slack personal OAuth flow (#5502)**: Converts Slack personal from manual token paste to browser OAuth. Reduces friction for multi-user Slack workflows.
- **Header notifications for automation tasks (#5443, CLOSED)**: Now implemented. Users will see real-time notification indicators when automation triggers create threads.
- **Global auto-approve shortcut (#5246, CLOSED)**: Implemented. Addressed user feedback about discoverability of global approval settings.

---

## User Feedback Summary

- **Pain Point — Routine creation is broken**: Multiple users reported that asking IronClaw to create a routine either hangs indefinitely (#5504), generates self-referential prompts (#5505), or produces routines that cannot be deleted (#5510). This is the top user-facing failure.
- **Pain Point — Slack integration is inconsistent**: Users report the Slack bot redirecting to WebUI instead of delivering results (#5506), and being told to reconnect Slack when it's already connected (#5508). This erodes trust in real-time delivery.
- **Pain Point — Google Sheets workflows fail**: Users trying to automate "check email and add to spreadsheet" hit consistent protocol violations (#5415). This is a core promised use case for IronClaw.
- **Pain Point — Could not start agent runtime**: Users see "could not start agent runtime" / "runner lease expired" errors (#5476, #5456). Runs fail silently with no debugging path (#5507).
- **Satisfaction — Memory isolation incomplete**: Users report that memories saved by one agent are visible to all workspace users (#5460). Privacy concern for team deployments.
- **Dissatisfaction — Chat delays**: Creating a new chat takes seconds, and delay grows with history (#5509). Users on railway-staging find this disruptive.

---

## Backlog Watch

- **#4108** (Nightly E2E failed, created May 27): **5 weeks stale**. Nightly CI has been failing for over a month across multiple shards (extensions, all-features hosted build, fixups). No active resolution PR. This is a critical infrastructure gap — no one can be confident that new changes don't break the full test suite.
- **#4787** (Barcelona Hackathon fork, created June 12): This "NO MERGE" fork is diverging significantly from main. If hackathon users depend on it, they're on an unsupported branch. Maintainers should either merge compatible changes or communicate a supported alternative path.
- **#4930** (fix test_auto_setup with DATABASE_URL, created June 15): Blocks contributors with populated `.env` files from running setup tests. Small fix but open for 17 days — new contributors hitting this may abandon onboarding.
- **#4927** (allow credential-free MCP providers, created June 15): Blocks hosted MCP providers without credentials from dispatching. Open for 17 days with experienced contributor facing friction.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

Here is the **LobsterAI Project Digest** for **2026-07-02**, generated from the provided GitHub data.

---

## LobsterAI Project Digest: 2026-07-02

### 1. Today's Overview
The project shows **very high activity** on July 1, 2026, with a significant spike in merging and closing work (21 PRs merged/closed vs. 4 open). A major release is pending, as the volume of merged features (Artifact auto-preview, new MCP integrations, Subagent panels) suggests a near-term build. While the number of newly created issues is low (4), the depth of discussion (including a detailed architectural recommendation) indicates an engaged, power-user community. The project appears to be in a **feature-completion and stabilization sprint**, with 4 stale PRs still awaiting resolution.

### 2. Releases
**None.** No new releases were generated in the last 24 hours.

### 3. Project Progress
This was a major merge day, advancing several core features:

- **Cowork (Sub-Agent & Artifacts):**
    - **PR #2249** (merged): Added a dedicated Subagent artifact panel, allowing users to view subagent details in a right-side panel instead of replacing the main session.
    - **PR #2248** (merged): Implemented automatic opening of newly generated preview cards (`artifacts`), prioritizing local services, docs, HTML, and video.
- **MCP & Integrations:**
    - **PR #2244** (merged): Added **Qichacha** (enterprise data) to the MCP marketplace, along with grouped multi-server management UI.
- **Stability & Fixes:**
    - **PR #2247** (merged): Fixed session file lock collisions in Cowork by delaying plan recovery until the abort lifecycle settles.
    - **PR #2246** (merged): Fixed a black screen issue when closing macOS fullscreen apps via the tray icon.
    - **PR #2251** (merged): Improved shared-deployment reliability by using a dedicated Node environment for executing build commands.
    - **PR #2245** (merged): Fixed several edge cases in usage analytics reporting.
- **General UX:**
    - **PR #1242 & #1291** (stale, merged): Core UX enhancements for clearing attachments/inputs and a new scheduled task import/export feature were finally merged, indicating backlog clearance.

### 4. Community Hot Topics

- **[ISSUE #2239] - Trend Analysis: "OpenClaw -ization" of Programming Tools**
    - *Link:* [Issue #2239](https://github.com/netease-youdao/LobsterAI/issues/2239)
    - *Activity:* New, 0 comments.
    - *Analysis:* This is a high-signal, visionary feature request. The author argues that the lines between AI coding tools and general Agents are blurring. They suggest LobsterAI should embrace this by deepening its integration with programming workflows (e.g., via the MCP protocol) to become a system-level orchestration hub. This reflects a sophisticated user base looking beyond simple task automation toward full development lifecycle management.

- **[ISSUE #2243] - Performance Bottleneck of `skills.load.watch` Feature**
    - *Link:* [Issue #2243](https://github.com/netease-youdao/LobsterAI/issues/2243)
    - *Activity:* New, 0 comments.
    - *Analysis:* A concrete, high-severity pain point. A user with 174 skills reports that the automatic file-watching feature (`skills.load.watch`) causes severe CPU/IO overhead and token waste. The core request is to make this feature **manual** via a UI toggle. This is a critical performance report that will likely be prioritized.

### 5. Bugs & Stability

| Severity | Issue/PR | Description | Status |
| :--- | :--- | :--- | :--- |
| **Medium** | **PR #2252** | Deleting an active custom model in settings causes a white screen crash. The fix awaits a state update before removal. | **Open Fix (PR #2252)** |
| **Medium** | **PR #2247** | Session file lock collisions in Cowork plan recovery mode could cause data corruption or crashes. | **Closed/Fixed (PR #2247)** |
| **Low** | **Issue #1361** | UI language bug: The "Delete" button in the custom Agent settings is in English instead of Chinese. | **Open (Stale)** |
| **Low** | **Issue #1425** | Shortcut key input lacks duplicate validation; users can assign the same hotkey twice. | **Closed (Stale)** |

### 6. Feature Requests & Roadmap Signals

The following are strong signals for upcoming features based on community demand and developer activity:

- **High Probability (Next Release):** Based on the massive merge activity, we predict a release featuring the **Subagent Artifact Panel**, **Automatic Preview Cards**, and the **Qichacha MCP integration**.
- **Medium Probability:** The request for a **model selector in the task input toolbar** (PR #1364, open) is a long-standing UX improvement that aligns with the project's focus on streamlining the Cowork interface.
- **Low Probability (Strategic):** The "OpenClaw-ization" suggestion (Issue #2239) is a strategic direction that won't appear in a single release but could influence the roadmap for Q3/Q4 2026.

### 7. User Feedback Summary

- **Pain Points:**
    - **Performance:** The `skills.watch` feature is a major performance drain for users with large skill libraries (Issue #2243).
    - **Localization:** Inconsistencies in Chinese/English UI persist (Issue #1361).
    - **UX Friction:** Users find the model selector inconveniently placed when creating tasks, requiring frequent mouse travel (PR #1364).
- **Satisfaction:**
    - Positive sentiment around the merging of community-contributed import/export features (PR #1291, #1366), which were long-awaited "stale" items.
- **Use Case Shift:** The community is signaling a desire to use LobsterAI not just as a personal assistant, but as a **central orchestration tool** for development workflows (Issue #2239).

### 8. Backlog Watch

The following items remain open for an extended period (over 3 months) and require maintainer attention:

1.  **PR #1362 - ESC key support for permission modals** - [Link](https://github.com/netease-youdao/LobsterAI/pull/1362)
    - *Status:* Open, stale. A small UX improvement that has been pending since April. Low risk, high value for polish.
2.  **PR #1367 - Duplicate task name validation** - [Link](https://github.com/netease-youdao/LobsterAI/pull/1367)
    - *Status:* Open, stale. A straightforward validation fix for scheduled tasks. Looks complete and is blocking a quality-of-life feature.
3.  **Issue #1361 - Delete button in English** - [Link](https://github.com/netease-youdao/LobsterAI/issues/1361)
    - *Status:* Open, stale. A simple localization bug that has been reported for 3 months. Quick fix for improving polish in the Chinese market.

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

Here is the project digest for **CoPaw** based on GitHub activity on **2026-07-02**.

---

## CoPaw Project Digest
**Date:** 2026-07-02

### 1. Today's Overview
The project is experiencing **very high activity**, with **50 Pull Requests** and **21 Issues** updated in the last 24 hours. There appear to be two major streams of work: an ongoing feature push for **ReMe memory integration** (specifically v0.4 rerankers) and a significant **bug-fix cycle** driven by user feedback on stability and security. The closure rate is healthy, with **5 issues** and **27 PRs** merged/closed today, indicating strong maintenance velocity. However, the backlog of open issues (16) and the volume of new bug reports suggest the project is navigating a period of rapid iteration.

### 2. Releases
**No new releases** were published today. The latest stable version appears to be **v1.1.12.post2**, with a **v2.0.0-beta.2** pre-release mentioned in issue reports.

### 3. Project Progress
The team merged **27 PRs** today, focusing heavily on platform stability and backend fixes.

- **Platform Stability:**
    - **Plugin System:** Fixed the plugin market download routing issue to prevent v1.x/v2.x incompatibility ([PR #5612](https://github.com/agentscope-ai/CoPaw/pull/5612)). A follow-up fix ensures old plugin versions are retained on release and failed load states are cleaned up ([PR #5695](https://github.com/agentscope-ai/CoPaw/pull/5695)).
    - **Desktop & Sandbox:** Fixed a macOS sandbox missing bracket syntax error ([PR #5454](https://github.com/agentscope-ai/CoPaw/pull/5454)). Fixed desktop screenshot functionality within the workspace ([PR #5641](https://github.com/agentscope-ai/CoPaw/pull/5641)). Added coding mode `project_dir` as read-write ([PR #5645](https://github.com/agentscope-ai/CoPaw/pull/5645)).
    - **Context & Caching:** Capped the file size for the `send_file_to_user` tool to prevent resource exhaustion ([PR #5457](https://github.com/agentscope-ai/CoPaw/pull/5457)). Updated detector cache keys to avoid serving outdated security patterns ([PR #5500](https://github.com/agentscope-ai/CoPaw/pull/5500)).
- **Documentation & Routing:**
    - Added a new **Architecture page** (EN + ZH) to the website to help users understand the Agent OS structure ([PR #5653](https://github.com/agentscope-ai/CoPaw/pull/5653)).
    - A significant refactor added a **Blog section** to the website, improved SEO, and restructured the documentation navigation ([PR #5697](https://github.com/agentscope-ai/CoPaw/pull/5697)).

### 4. Community Hot Topics
The community is highly engaged, with several deep technical discussions and feature debates.

- **Context Compression:**
    - **Issue #5063** (Closed): Integrate Headroom for 60-95% token reduction—a high-value feature for cost management.
    - **Issue #5710** (Open): A critical bug report that the current `LightContextManager` lacks "anchors," causing it to accidentally delete key instructions or context (like "which channel am I in?"). This points to a major architectural pain point in memory management.
- **Security Concerns (High Priority):**
    - **Issue #5715** (Closed): A request to add password protection to the Web Console, which is currently fully open-access.
    - **Issue #5705** (Open): A detailed feature request to fix API key exposure in logs (`dialog/*.jsonl`) and `agent.json`. The user provided a thorough audit of the current state.
    - **Issue #5711** (Open): A comprehensive gap analysis comparing CoPaw against competitors regarding tool calling, memory, and rule enforcement.

### 5. Bugs & Stability
Several new bugs and regressions were reported today, indicating a need for regression testing.

- **Critical: Channel Message Loss & Corruption:**
    - **Feishu (飞书) Issues (#5708, #5709, #5710):** A single user (ZhaoX666) filed three separate critical bugs:
        - **#5709:** Feishu bot erroneously drops messages from other bots, breaking multi-agent communication.
        - **#5708:** Interactive card messages from Feishu are not parsed.
        - **#5710:** Context compression removes key context anchors.
    - **QQ Channel (#5696):** WebSocket reconnection causes internal HTTP client to become `None`, crashing the bot until restart.
- **Moderate:**
    - **Plugin (SSH) (#5689):** Uninstalling the Remote SSH plugin leaves orphaned module references, causing dialog errors.
    - **Concurrency (#5701):** The agent freezes under concurrent web UI access on v1.1.10.
    - **Router/Proxy Issues (#5658):** The agent fails to connect to models behind proxy/forwarding services (e.g., 9Router).
- **Low Severity:**
    - **CSS Prefix Mismatch (#5688):** Global styles use `ant-` prefixes despite a `qwenpaw-` prefix configuration, likely causing styling failures.

### 6. Feature Requests & Roadmap Signals
The community is signaling strong demand for **security hardening**, **memory stability**, and **process isolation**.

- **Security & Access Control (High Signal):**
    - **#5715:** Web Console password protection (now closed, likely accepted).
    - **#5705:** Secret key masking in logs and configs.
- **Memory & Context Management:**
    - The Headroom integration (#5063) and the "anchor" protection proposal (#5710) indicate a desire for smarter, safer context management.
    - A PR is active to add a **Reranker** configuration UI for ReMe memory ([PR #5691](https://github.com/agentscope-ai/CoPaw/pull/5691)).
- **Usability & UX:**
    - **#5670:** Removal of the 10k character limit on chat input.
    - **#5712:** Ability to select and auto-copy text from chat messages (a basic UX miss).
- **Remote SSH Cleanup (#5689)** and **Plugin Market Versioning (#5612)** suggest the plugin system is a high-feedback area.

### 7. User Feedback Summary
- **Satisfaction Driver:** The rapid merging of PRs (27 today) and the new Architecture page show a responsive team.
- **Pain Points (High Velocity):**
    - **"Plugins break when removed or updated"** — The SSH error (#5689) is a core reliability concern.
    - **"Validation loops are annoying"** — #5703: User disabled tool approval, but the system still prompts for approval (sandbox detection error).
    - **"Model connections are fragile"** — Issues with 9Router (#5658) and other proxies are blocking users in restricted network environments.
    - **"UI is non-standard"** — The inability to select text (#5712) and the CSS prefix mismatch (#5688) frustrate power users.

### 8. Backlog Watch
- **[PR #4224](https://github.com/agentscope-ai/CoPaw/pull/4224) (Open):** First-time contributor fix for ReMe memory index refresh. This is a **long-running open PR** (since May 11) awaiting review. This could be a good candidate for maintainer attention to encourage community contributions.
- **[Issue #5273](https://github.com/agentscope-ai/CoPaw/pull/5273) (Open):** The v2.0.0 pre-release bug tracker. While actively used (updated today), it centralizes all v2 issues. Maintainers should ensure individual critical bugs (like the Feishu channel failures) are moved to their own issues for clarity.
- **[Issue #5688](https://github.com/agentscope-ai/CoPaw/issues/5688) (Open):** The CSS prefix mismatch is a low-priority UX bug, but it signals potential larger issues with the frontend build configuration that could cause more severe styling regressions in the future.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-07-02

## 1. Today's Overview

ZeroClaw is in a high-velocity development phase with 50 issues and 50 pull requests updated in the last 24 hours, indicating a very active community and maintainer team. The project shows strong forward momentum toward the v0.8.3 release, with multiple large feature PRs (goal mode, durable memory store, MCP resources-as-context, Telegram streaming) all advancing simultaneously. However, the high number of S1 (workflow-blocked) bugs — 7 critical issues open — suggests the current 0.8.x cycle is stretching across both feature work and stability hardening. Four issues were closed today, and five PRs were merged, showing steady throughput. The project remains in active development with no new tagged release today.

## 2. Releases

No new releases were published today. The most recent release remains v0.8.x (no exact version specified in data). Maintainers appear focused on v0.8.3, which is tracked across multiple trackers for WASM plugins, provider message serialization, runtime execution, and observability/CI/docs work.

## 3. Project Progress

Five PRs were closed or merged today. The most significant changes advanced:

- **[Skills security hardening](https://github.com/zeroclaw-labs/zeroclaw/pull/8574)** — `extract_zip_secure` now guards against zip-bomb inflation with decompression-side limits (entry count, expansion ratio, uncompressed size caps), closing vulnerability #8554
- **[Dependency cleanup](https://github.com/zeroclaw-labs/zeroclaw/pull/8575)** — Removed stale RUSTSEC-2024-0370 audit ignore after Tauri desktop code removal (#8544), cleaning up the dependency supply chain
- **[Audit policy documentation](https://github.com/zeroclaw-labs/zeroclaw/pull/8543)** — Updated maintainer audit-policy.md and cleared a now-redundant `proc-macro-error` ignore
- **[Outdated dependency report](https://github.com/zeroclaw-labs/zeroclaw/issues/8585)** closed as the CI bot's automated dependency check was completed

Major open PRs still in progress with significant changes:
- **[Feat(runtime): implement goal mode](https://github.com/zeroclaw-labs/zeroclaw/pull/8393)** (XL size) — Implements RFC #8303 for durable bounded autonomous sessions
- **[Feat(memory): epic A durable store seam](https://github.com/zeroclaw-labs/zeroclaw/pull/8570)** (XL size) — Extends the Memory trait with supersede, dedup, budget, and policy-gate
- **[Feat(mcp): resources-as-context, pinning, and named-prompt rendering](https://github.com/zeroclaw-labs/zeroclaw/pull/8508)** (L size) — Agent-loop surface for MCP resource/prompt features
- **[Feat(matrix): add single-message progress drafts](https://github.com/zeroclaw-labs/zeroclaw/pull/8443)** (XL size) — New streaming mode for Matrix channel

## 4. Community Hot Topics

| Issue/PR | Comments | Topic | Underlying Need |
|---|---|---|---|
| [#8193](https://github.com/zeroclaw-labs/zeroclaw/issues/8193) | 13 | MCP tools missing from TUI sessions while gateway sees them | **Core UX gap** — Users deploying MCP servers cannot use discovered tools in TUI, blocking migration from gateway-only setups |
| [#6808](https://github.com/zeroclaw-labs/zeroclaw/issues/6808) | 13 | RFC: Work Lanes, Board Automation, and Label Cleanup | **Governance maturity** — Community wants clearer contribution workflows and label hygiene as project scales |
| [#8226](https://github.com/zeroclaw-labs/zeroclaw/issues/8226) | 5 | Per-agent custom environment variables | **Multi-tenancy need** — Operators managing multiple agents with different credentials/tokens need per-agent env isolation |
| [#8043](https://github.com/zeroclaw-labs/zeroclaw/issues/8043) | 4 | Retire standalone aardvark-sys crate | **Architecture simplification** — Reducing crate count by folding hardware-specific crate into zeroclaw-hardware |
| [#8303](https://github.com/zeroclaw-labs/zeroclaw/issues/8303) | 3 (👍1) | Goal mode for bounded autonomous sessions | **Durable execution** — Users want agents that can pursue objectives until completion without interactive supervision |

The MCP tool visibility gap (#8193) remains the single most discussed issue, with two users confirming the workflow-blocking severity. The goal mode RFC (#8303) received a 👍 from the community, and its implementation PR (#8393) is now active and large, signaling strong maintainer buy-in.

## 5. Bugs & Stability

**S1 (Workflow Blocked) — Critical:**

| Issue | Component | Problem | Fix Status |
|---|---|---|---|
| [#8193](https://github.com/zeroclaw-labs/zeroclaw/issues/8193) | Zerocode TUI | MCP tools not visible in TUI sessions despite gateway seeing them | Open, accepted, risk:high |
| [#8553](https://github.com/zeroclaw-labs/zeroclaw/issues/8553) | Tools | Agent cannot use env vars as http_request secrets | Open, accepted, risk:high |
| [#6891](https://github.com/zeroclaw-labs/zeroclaw/issues/6891) | Web Gateway | Scheduled Jobs edit gives API 422 due to stale form | Open, accepted, risk:medium |
| [#8559](https://github.com/zeroclaw-labs/zeroclaw/issues/8559) | Web Dashboard | Agents stop work when exiting chat window | Open, accepted, risk:high |
| [#8563](https://github.com/zeroclaw-labs/zeroclaw/issues/8563) | Web Dashboard | SOPs not available to agents in chat sessions | Open, accepted, risk:high |
| [#8554](https://github.com/zeroclaw-labs/zeroclaw/issues/8554) | Security/Sandbox | Skill zip extractor vulnerable to zip-bomb inflation | **FIX PRs submitted**: #8574 and #8548 both merged today |

**S2 (Degraded Behavior):**

| Issue | Component | Problem | Fix Status |
|---|---|---|---|
| [#8302](https://github.com/zeroclaw-labs/zeroclaw/issues/8302) | Web Dashboard | Configured MCP servers not showing discovered tools in tool list | Open, in-progress |
| [#5269](https://github.com/zeroclaw-labs/zeroclaw/issues/5269) | Runtime/Daemon | Installation docs need improvement, missing `cargo binstall` instructions | Open, accepted |

The zip-bomb vulnerability (#8554) received the fastest response — two independent fix PRs were submitted (#8574 by wangmiao0668000666, #8548 by ConYel) demonstrating strong security-conscious community engagement. The MCP double-visibility gap (tools missing in both TUI #8193 and web dashboard #8302) suggests a systemic issue with how MCP tool discovery results propagate from gateway to session runtimes.

## 6. Feature Requests & Roadmap Signals

**Likely for v0.8.3 (based on active trackers and large PRs):**
- **Goal mode** ([#8303](https://github.com/zeroclaw-labs/zeroclaw/issues/8303), PR [#8393](https://github.com/zeroclaw-labs/zeroclaw/pull/8393)) — Durable bounded autonomous sessions, implementation PR is XL size and active
- **Durable memory store** (PR [#8570](https://github.com/zeroclaw-labs/zeroclaw/pull/8570)) — Extended Memory trait with supersede, dedup, budget, policy gate — just submitted yesterday
- **MCP resources-as-context** (PR [#8508](https://github.com/zeroclaw-labs/zeroclaw/pull/8508)) — Brings MCP resource/prompt features into agent loop
- **WASM plugin program** ([#7314](https://github.com/zeroclaw-labs/zeroclaw/issues/7314)) — v0.8.3 tracker for plugin architecture, channel host bindings PR (#8551) active
- **OpenAI-compatible chat completions endpoint** ([#8550](https://github.com/zeroclaw-labs/zeroclaw/issues/8550)) — Would allow standard clients (Open WebUI, LobeChat) to connect

**Emerging signals for v0.9.0+:**
- **Mixture-of-Agents (MoA) virtual model provider** ([#8568](https://github.com/zeroclaw-labs/zeroclaw/issues/8568)) — Just filed yesterday (July 1), suggests interest in multi-model orchestration
- **Replace React/Vite with Rust→Wasm framework** ([#8132](https://github.com/zeroclaw-labs/zeroclaw/issues/8132)) — Ambitious architectural change to eliminate Node.js dependency
- **OCI-compliant container registries for plugins** ([#7497](https://github.com/zeroclaw-labs/zeroclaw/issues/7497)) — Would standardize WASM plugin distribution

## 7. User Feedback Summary

**Pain Points:**
- **MCP tool visibility gap** (#8193, #8302) — Users deploying MCP servers expect tools to appear in all interfaces (TUI, web dashboard) but they only appear in gateway. Two separate users reporting this suggests a broad configuration pattern that doesn't propagate correctly.
- **Agent persistence gap** (#8559) — Users cannot background agent tasks or monitor progress asynchronously; exiting the chat window stops all work, which is contrary to the "delegation" use case ZeroClaw enables.
- **SOP integration missing from web dashboard** (#8563) — Standard Operating Procedures configured on disk are invisible to agents running through the web chat interface, blocking structured workflows for web-first users.
- **Environment variable secrets** (#8553) — Cannot use existing process env vars (e.g., `SLACK_BOT_TOKEN`) for `http_request` auth, forcing redundant credential management.
- **Installation friction** (#5269) — Users still find `cargo binstall zeroclaw` undocumented, suggesting the install experience is a barrier for new users.

**Satisfaction Signals:**
- Active PR contributions from diverse authors (vrurg, Nillth, LiLan0125, tidux, wangmiao0668000666, metalmon, singlerider) indicate a healthy contributor ecosystem
- The goal mode RFC (#8303) received a 👍 from a user, showing desire for autonomous execution
- Two separate community members submitted fix PRs for the zip-bomb vulnerability (#8574, #8548) within 24 hours of the bug report, demonstrating strong security responsiveness

## 8. Backlog Watch

**Issues needing maintainer attention (long-open, important):**

| Issue | Age | Status | Reason for Concern |
|---|---|---|---|
| [#6074](https://github.com/zeroclaw-labs/zeroclaw/issues/6074) | ~69 days | In-progress, accepted | 153 commits lost in bulk revert (March 28) still not fully recovered — tracking for recovery but no clear progress |
| [#5269](https://github.com/zeroclaw-labs/zeroclaw/issues/5269) | ~89 days | Accepted | Installation documentation improvement request — 3 months old, still S2 degraded behavior |
| [#6891](https://github.com/zeroclaw-labs/zeroclaw/issues/6891) | ~39 days | Accepted | Scheduled Jobs edit broken since v0.8.0-beta — S1 workflow blocked but open over a month |

**Blocked PRs needing author action or maintainer review:**
- [#7497](https://github.com/zeroclaw-labs/zeroclaw/issues/7497) (OCI registries for plugins) — Blocked, needs-maintainer-review, created June 11
- [#8550](https://github.com/zeroclaw-labs/zeroclaw/issues/8550) (OpenAI-compatible endpoint) — Blocked, needs-maintainer-review, created June 30
- [#8541](https://github.com/zeroclaw-labs/zeroclaw/issues/8541) (Matrix thread-scoped history) — Blocked, needs-maintainer-review, created June 30
- [#8393](https://github.com/zeroclaw-labs/zeroclaw/pull/8393) (Goal mode implementation) — Needs-author-action, despite being a massive XL PR, suggesting it may need revision before maintainer review

**Tracker issues that could use community engagement:**
- [#7314](https://github.com/zeroclaw-labs/zeroclaw/issues/7314) — v0.8.3 WASM plugin program (2 comments total, last activity June 6)
- [#8073](https://github.com/zeroclaw-labs/zeroclaw/issues/8073) — v0.8.3 observability/CI/docs tracker (0 comments)
- [#8360](https://github.com/zeroclaw-labs/zeroclaw/issues/8360) — v0.8.3 provider serialization tracker (1 comment)

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*