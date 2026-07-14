# OpenClaw Ecosystem Digest 2026-07-05

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-07-05 01:56 UTC

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

Here is the project digest for the OpenClaw project on 2026-07-05.

---

### OpenClaw Project Digest: 2026-07-05

#### 1. Today's Overview
Project activity remains at a high, sustained volume, with 500 issues and 500 PRs updated in the last 24 hours. While no new releases were cut today, the core maintainers are actively processing contributions, as indicated by 47 closed issues and 152 merged/closed PRs. The project is in a heavy "stabilization and fix" phase, with a significant backlog of high-severity bugs (P1/P0) and a high volume of open PRs (348) awaiting review. The "clawsweeper" label system is heavily utilized to triage this work, but many items remain stalled awaiting maintainer review or product decisions.

#### 2. Releases
- **New Releases:** None.
- **Note:** A notable regression was reported where **Live Docs are ahead of the current release**, specifically the `IsolatedSessions` heartbeat feature is documented but not present in version `2026.3.13`. This creates confusion for users trying to configure the gateway (Issue #48920).

#### 3. Project Progress
Today saw significant progress with 152 PRs being merged or closed. Key fixes included:
- **Core Stability:**
    - `PR #100136`: Fix for hiding duplicate channel delivery mirrors in Slack, cleaning up the user interface.
    - `PR #100013`: Fixed subagent truncation logic to stay within the requested max length.
    - `PR #100134`: Fixed `truncateOutput` to avoid splitting UTF-16 surrogate pairs, preventing crashes in strict UTF-8 encoders.
    - `PR #100059`: ([AI-assisted]) Polish of the Android home overview layout.
- **Maintenance:**
    - `PR #100083`: Updated linter dependencies (`oxlint-tsgolint`), improving code quality tooling.
    - `PR #100122`: Enabled a new lint rule to prevent accidental sharing of mutable objects across arrays.
    - `PR #98831`: Cleaned up stale `replayThinkingEnabled` plumbing from the Anthropic provider, reducing code debt.
- **Security:**
    - `PR #91584` (Closed): Fixed a vulnerability where Slack channels with `requireMention: true` could accept unmentioned messages when bot identity was unverifiable. The system now fails closed.

#### 4. Community Hot Topics
The community is highly focused on reliability and security, with the most discussed issues reflecting deep frustration with silent failures.

- **Subagent Reliability (#44925):** With 20 comments, this diamond-lobster-rated bug details several patterns where subagent task completions are silently lost, including when the final announcement fails or when the agent times out. Users want guaranteed notification of completion or failure.
- **Multi-Encoding Filename Support (#48788):** (18 comments) A proposal for a centralized utility to handle filenames in various encodings (Shift-JIS, EUC-KR) across all chat channels, indicating a growing international user base.
- **Signal Daemon Race Condition (#22676):** (17 comments, updated today) A long-standing P1 bug where restarting the Signal gateway causes orphaned processes and send failures due to a race condition. This is a critical reliability issue for Signal users.
- **Control UI Security & UX (#32473):** (17 comments, 5 👍) A regression where the Control UI refuses to work without HTTPS or localhost, locking out users on VPS setups. This highlights a tension between security enforcement and deployment flexibility.
- **Tiered Bootstrap Loading (#22438):** (17 comments) A feature request to allow users to control which files are loaded into an agent's context to save on LLM token costs. This reflects a desire for more granular cost and performance management.

#### 5. Bugs & Stability
Stability remains the project's primary concern, with several critical and long-standing bugs highlighted today.

- **P0 / Critical:**
    - **Cloud Credits Bug (#99594):** A cloud-hosted instance incorrectly reports "out of credits" despite a $109 balance and an active Pro plan. This is a release-blocking issue that completely prevents usage for affected users. (Fix PR: None yet)
    - **Live Docs Ahead of Release (#48920):** A regression where documented features are not yet in the shipped build, causing user confusion. (Fix PR: None yet)
- **P1 / High:**
    - **Silent Subagent Failure (#44925):** Multiple failure modes in subagent orchestration cause work to be lost without notification. This is a core trust and reliability issue that affects all complex agent workflows. (Fix PR: None yet)
    - **Signal Daemon Race Condition (#22676):** Leads to process orphaning and message send failures on restart. This has been open since February and is a significant pain point for Signal users. (Fix PR: None yet)
    - **"Steer" Mode Bug (#48003):** The `steer` mode for message injection is broken, preventing real-time intervention in an ongoing agent turn. (Fix PR: None yet)
    - **Multi-Agent Orchestration Instability (#43367):** Concurrent operations in multi-agent setups can cause config overwrites, session locks, and detached child processes. (Fix PR: None yet)
    - **Security: Scope Stripping (#51396):** A regression where `clearUnboundScopes()` incorrectly strips operator permissions for non-local, token-authenticated clients, breaking backend integrations. (Fix PR: None yet)
    - **Orphaned Lock Files (#49603):** Gateway restarts fail to clear old lock files if the process PID is the same, leading to state corruption. (Fix PR: None yet)
- **P2 / Notable:**
    - **Hardcoded Workspace Path (#51429):** A developer's personal workspace path (`/Users/wangtao`) was accidentally merged into the code, creating a broken directory structure for new users. This highlights a failure in the code review process.
    - **Memory Management Chaos (#43747):** A regression where memory storage and chunking behavior is inconsistent across different user machines, causing confusion and unpredictable agent behavior.
    - **Gateway Memory Leak (#54155):** The gateway process can leak from 389MB to 14.7GB over 4 days, impacting long-term server stability. (Fix PR: None yet)

#### 6. Feature Requests & Roadmap Signals
Users are requesting features that bring more control, security, and observability to the platform.

- **Security & Governance (Likely for next release):**
    - **Pre-response Enforcement Hooks (#13583):** Users want hard, mechanical gates to ensure the agent makes mandatory tool calls before responding, crucial for high-stakes workflows. The high consensus and clear use-case suggest this is a priority.
    - **Unbypassable Outbound Policy (#56349):** A related request for a single, enforceable boundary for all outbound messages to prevent policy bypasses.
- **Cost & Performance Management:**
    - **Per-Agent Cost Budgets (#42475):** Operators want to set daily/monthly caps at the gateway level to prevent runaway spend without external monitoring. Given the loud feedback on costs, this is a strong candidate.
    - **Tiered Bootstrap Loading (#22438):** Users want fine-grained control over what context is loaded into an agent's prompt to save tokens and improve efficiency.
- **Ecosystem & Community:**
    - **ClawHub Ecosystem (#50090):** A feature request to truly realize the promise of a community skill marketplace. The current "wide gap between promise and practice" is a recurring complaint.
    - **YAML Config Support (#45758):** A small but quality-of-life improvement to use YAML for configuration, aligning with DevOps tooling standards.

#### 7. User Feedback Summary
The dominant theme in user feedback is **frustration with unreliability and silent failures**. Users are not just reporting bugs; they are expressing a loss of trust. The sentiment is that the agent cannot be relied upon for complex or sensitive tasks because it may silently lose work (Issue #44925), fabricate results on failure (Issue #49876), or hang indefinitely (Issue #43661). There is significant dissatisfaction with the state of the **community skill ecosystem (ClawHub)** (Issue #50090), which is seen as a broken promise. Positive signals include demand for features like **filesystem sandboxing** (Issue #7722) and **LaTeX support** (Issue #42840), indicating a user base that wants to use OpenClaw for sophisticated, professional tasks but is held back by stability issues.

#### 8. Backlog Watch
Several high-severity issues and PRs have been languishing, awaiting maintainer action.

- **Critical / P0:**
    - **Cloud "Out of Credits" Bug (#99594):** (Opened 2026-07-03) This is a release-blocker for a paying user, yet has received no maintainer response.
    - **Live Docs Ahead of Release (#48920):** (Opened 2026-03-17) A regression with a simple root cause (docs vs. release) that has been open for nearly 4 months.
- **Long-standing P1s:**
    - **Signal Daemon Race Condition (#22676):** (Opened 2026-02-21) A critical reliability bug for the Signal channel that has seen no fix PR in over 4 months.
    - **"Steer" Mode Bug (#48003):** (Opened 2026-03-16) A P1 bug that cripples a core feature, with no fix in sight.
- **Stalled PRs:**
    - `PR #51762`: Fix for honoring the `default_agent` config. This P2 fix for a well-understood problem has been waiting for proof from the author for over 3 months.
    - `PR #91584` (Closed today): While this specific PR was handled, it was open for nearly a month despite being a security fix that "fails closed." This suggests a bottleneck in the review process for security-related changes.

---

## Cross-Ecosystem Comparison

# Cross-Project Ecosystem Comparison Report
**Personal AI Assistant / Open-Source Agent Landscape | 2026-07-05**

---

## 1. Ecosystem Overview

The open-source personal AI assistant ecosystem is experiencing a **maturation phase** characterized by intense stabilization efforts, security hardening, and feature consolidation. Activity remains high across core projects, with OpenClaw, ZeroClaw, and IronClaw leading in development velocity (500+ combined PRs updated in 24 hours). The ecosystem is converging on several shared priorities: reliable multi-agent orchestration, container-level security sandboxing, encrypted channel support, and production-grade error handling. However, a **clear stability gap** persists—while NanoBot and IronClaw show disciplined maintenance patterns with rapid bug closure, OpenClaw suffers from a critical backlog of P0/P1 issues (including a cloud billing blocker and doc-regression that has gone unaddressed for 4 months). Mobile and internationalization support remain underdeveloped across the board, with PicoClaw and NanoClaw being the only projects actively addressing Matrix encryption and Windows/Android platform gaps.

---

## 2. Activity Comparison

| Project | Issues Updated (24h) | PRs Updated (24h) | PRs Merged/Closed | Release Status | Health Score |
|---------|---------------------|-------------------|-------------------|----------------|--------------|
| **OpenClaw** | 500 | 500 | 152 | No new release; doc-regression (4mo open) | 🟡 **Stabilizing** — high fix velocity but critical backlog |
| **ZeroClaw** | 50 | 50 | 2 | Pre-v0.8.3; 3 active release trackers | 🟡 **Active dev** — heavy feature push, slow defect closure |
| **IronClaw** | 8 open, 1 closed | 43 | 16 | Unreleased; breaking changes pending | 🟢 **High maturity** — systematic CI/tooling improvements |
| **NanoBot** | 2 closed | 13 | 7 | No new release; fixes accumulating | 🟢 **Healthy** — rapid bug closure, security-aware |
| **NanoClaw** | 1 open | 39 | 22 | v2.1.38; v2.2 imminent | 🟢 **Strong** — maintainer-responsive, cleanup-focused |
| **Hermes Agent** | 50 | 50 | 8 | v0.18.0; no new release | 🟡 **Active dev** — high triage, slow merge rate |
| **PicoClaw** | 4 | 7 | 2 | v0.2.4-based builds | 🟡 **Moderate** — small team, stale security issues |
| **CoPaw** | 11 | 3 | 0 | QwenPaw 2.0b3 beta | 🟡 **Beta phase** — critical memory bugs unaddressed |
| **LobsterAI** | 1 | 3 | 2 | Latest stable unchanged | 🟢 **Quiet maintenance** — low activity, stable |
| **NullClaw** | 0 | 0 | 0 | N/A | ⚪ Dormant |
| **TinyClaw** | 0 | 0 | 0 | N/A | ⚪ Dormant |
| **Moltis** | 0 | 0 | 0 | N/A | ⚪ Dormant |
| **ZeptoClaw** | 0 | 0 | 0 | N/A | ⚪ Dormant |

**Key observations:**
- Only 8 of 13 projects showed any activity; 5 are effectively dormant
- **OpenClaw** and **Hermes Agent** have the widest gap between open items and closures (47 closed issues vs 500 updated; 6 closed issues vs 50 updated)
- **IronClaw** and **NanoBot** lead in systematic quality practices (CI benchmarking, `unused_must_use` deny enforcement, `asyncio.Lock` for race conditions)
- **ZeroClaw** merges only 4% of its updated PRs, suggesting review bottlenecks despite high feature velocity

---

## 3. OpenClaw's Position

### Advantages vs Peers
- **Largest community and contribution volume** — 500 daily PR updates dwarf all competitors (next closest: ZeroClaw/IronClaw at 43–50)
- **Broadest channel support** — Slack, Signal, Discord, Telegram, Matrix, WhatsApp; extensive multi-platform coverage
- **Richest feature surface** — Subagents, SOP workflows, ClawHub skill marketplace, tiered bootstrap loading
- **Most mature documentation** — Despite the doc-regression bug, OpenClaw's documentation ecosystem is the most comprehensive by volume

### Technical Approach Differences
- **"Clawsweeper" triage system** — Unique label-based triage for managing high-volume contributions; no other project has this scale of contribution management
- **IsolatedSessions / heartbeat architecture** — Novel approach to gateway session management (though documented but unimplemented in current release)
- **Heavy reliance on contributor PRs** — 348 open PRs indicates a more decentralized contribution model than NanoBot or IronClaw

### Community Size Comparison
- OpenClaw's 500 daily updates vs. IronClaw's 43 and NanoClaw's 39 indicates roughly **10x the contribution volume** of the next most active project
- However, **merge/closure ratio** (30% of PRs closed) is lower than NanoClaw's (56%) and IronClaw's (37%), indicating potential review bottlenecks
- The **P0 cloud billing bug** (#99594) with zero maintainer response in 2 days is a red flag for community trust

### Critical Weaknesses
- **P0/P1 backlog** — Cloud credits bug, silent subagent failure, Signal daemon race condition (open since February)
- **Doc-regression (#48920)** unaddressed for 4 months — undermines trust in feature documentation
- **Community skills ecosystem** (#50090) described as "wide gap between promise and practice" — the ClawHub marketplace is seen as underdelivering
- **No release in 24h period** despite high fix velocity — suggests release process is complex or blocked

---

## 4. Shared Technical Focus Areas

| Focus Area | Projects Involved | Specific Requirements |
|------------|-------------------|----------------------|
| **Multi-agent orchestration reliability** | OpenClaw, NanoBot, ZeroClaw, PicoClaw | Subagent completion guarantees, session isolation, MCP tool sharing, configurable inheritance |
| **Matrix/E2EE support** | PicoClaw, OpenClaw (implied) | Replace `libolm` with `vodozemac`; encrypted message handling failures |
| **Security hardening** | All active projects | SSRF prevention (DNS pinning), credential leak prevention, file-system sandboxing, per-capability OAuth scopes |
| **Platform portability** | NanoBot, Hermes, PicoClaw | Windows gateway crash fixes, Android service launch, WSL2 CPU spikes, Python 3.14 compatibility |
| **Cost & token management** | OpenClaw, ZeroClaw | Per-agent cost budgets, tiered context loading, caching control for providers (Bedrock, etc.) |
| **Observability & error reporting** | IronClaw, ZeroClaw, LobsterAI | Wiring-parity tripwires, structured error classification, progress indicators during long tasks |
| **Mobile & internationalization** | PicoClaw, OpenClaw, NanoBot | Mobile viewport fixes, multi-encoding filename support (Shift-JIS, EUC-KR), i18n fallbacks |

**Notable pattern:** **Security and reliability** are the universal themes. Every active project is making at least one infrastructure-level security or stability improvement this cycle. No project is purely "feature-only" — all are paying down technical debt.

---

## 5. Differentiation Analysis

| Dimension | OpenClaw | IronClaw | NanoBot | ZeroClaw | PicoClaw |
|-----------|----------|----------|---------|----------|----------|
| **Target user** | Power users, multi-platform teams | Developer platform, CI-heavy orgs | Individual users, desktop-first | ZeroCode/citizen developers | Embedded/Linux, ARM/Mobile |
| **Primary language** | TypeScript/Node.js | Rust | Python | Rust | Go |
| **Agent model** | Plugin-based, subagent orchestration | Crate-based, deterministic CI | MCP tool-first, asyncio-native | Goal-mode, SOP-driven workflows | Lightweight, single-binary |
| **Channel strategy** | Broad support (Slack, Signal, Discord, etc.) | Slack OAuth focus | Copilot, DingTalk, WebUI | TUI-first, ZeroCode LSP | Matrix, minimal web |
| **Security approach** | Permission scopes, stewardship | Rust `unused_must_use`, denial-by-default | SSRF pinning, atomic writes | High-entropy detectors, SOP approval | Waiting for Matrix crypto upgrade |
| **Release cadence** | Frequent but unstable | Planned, breaking-change-aware | Rapid patch, accumulating | Tracker-driven, pre-release | Slow, v0.2.x |
| **Community contribution model** | High-volume, decentralized | Controlled, cross-team | Contributor-friendly, small core | PR series, RFC-heavy | Small team, help-wanted labels |

**Key insight:** IronClaw and ZeroClaw are **architectural opposites** — IronClaw prioritizes correctness (Rust + CI ratcheting), while ZeroClaw prioritizes feature velocity (goal mode, SOP editor, WASM plugins). OpenClaw sits in the middle with the broadest community but weakest stability guarantees. NanoBot is the **most "personal assistant"** project — desktop-first, streaming UI, mobile viewport — while PicoClaw targets **embedded/edge deployment**.

---

## 6. Community Momentum & Maturity

### Activity Tiers

| Tier | Projects | Characteristics |
|------|----------|-----------------|
| **Tier 1: High-Volume Iteration** | OpenClaw, ZeroClaw | 500+ issues/PRs daily; heavy feature push; critical stability gaps; review bottleneck risk |
| **Tier 2: Mature Maintenance** | IronClaw, NanoClaw, NanoBot | 13–43 PRs daily; disciplined testing; systematic improvements; high merge-to-update ratios |
| **Tier 3: Moderate Development** | Hermes Agent, CoPaw, PicoClaw | 4–50 issues daily; beta-phase or small-team; known quality issues |
| **Tier 4: Quiet/Low Activity** | LobsterAI | 1–3 PRs; stable but slow |
| **Dormant** | NullClaw, TinyClaw, Moltis, ZeptoClaw | Zero activity; effectively archived or paused |

### Maturity Indicators

- **Rapidly iterating (but unstable):** OpenClaw, ZeroClaw — feature breadth outstrips quality control
- **Stabilizing:** NanoBot, IronClaw — focused on CI, security, and error handling before next release
- **Beta-phase with critical bugs:** CoPaw — strong community enthusiasm for v2.0 but memory/search bugs unaddressed
- **Steady state:** LobsterAI — low activity but no regressions reported

### Contributor Health
- **IronClaw** has the healthiest contributor model — systematic PR review (200+ file changes in OAuth stack), mentorship of new contributors (PR #5042 by `[new]` author)
- **NanoClaw** shows remarkable maintainer responsiveness — @gavrielc merged 15 PRs in 24 hours
- **OpenClaw** faces a contributor bottleneck — 348 open PRs and 47 closed issues suggests reviewers are overwhelmed
- **PicoClaw** and **CoPaw** have clear "help wanted" gaps — critical features (vodozemac migration, memory state fix) are stalled without maintainer bandwidth

---

## 7. Trend Signals

### Industry Trends Extracted from Community Feedback

1. **Reliability over feature breadth**
   - Users across OpenClaw, ZeroClaw, and CoPaw consistently prioritize **guaranteed task completion** over new capabilities
   - Silent failures (subagent work loss, scroll compression, MCP crashes) erode trust faster than missing features
   - *Signal:* The "stabilization phase" is not optional — it's demanded by the user base

2. **Security as a first-class concern, not an afterthought**
   - DNS rebinding prevention (NanoBot #4671), credential redaction (Hermes #58594), OAuth scope minimization (IronClaw #5650), and display-integrity spoofing (NanoClaw #2923) are being addressed **proactively**, not reactively
   - *Signal:* Enterprise and production users are driving security requirements; projects that don't prioritize this will lose adoption

3. **Cost transparency and control**
   - Per-agent budgets (OpenClaw #42475), tiered context loading (#22438), and provider-specific caching toggles (ZeroClaw #8720) indicate users want **granular cost management**
   - *Signal:* The "unlimited API key" era is ending; projects must expose cost telemetry

4. **Multi-agent orchestration is the core differentiator**
   - Every active project is building subagent/session/role management: OpenClaw (subagent truncation fixes), NanoBot (MCP inheritance for subagents #4697), ZeroClaw (goal-mode controllers), CoPaw (memory-state per-session)
   - *Signal:* Single-agent assistants are commodity; the value is in **orchestration, isolation, and tool sharing across agents**

5. **Desktop/mobile gaps are becoming blockers**
   - Android launch failures (PicoClaw #3182), mobile viewport clipping (NanoBot #4694), WSL2 CPU spikes (Hermes #31513), Windows stop crashes (NanoBot #4690) — these are **cross-project pain points** that limit adoption beyond developer workstations
   - *Signal:* The next stage of growth requires platform completeness; desktop and mobile users are a growing segment

6. **Developer tooling converges on "no-code" paradigms**
   - ZeroClaw's ZeroCode TUI, SOP visual editor, and goal-mode are attempting to make agent creation accessible to **non-programmers**
   - OpenClaw's ClawHub skills marketplace and YAML config (#45758) point in the same direction
   - *Signal:* The audience is broadening from "AI developers" to "workflow designers" — projects that reduce coding friction will capture this market

### Value for AI Agent Developers

1. **Build reliability first.** The community is clear: a stable single agent beats an unstable multi-agent system. Invest in error recovery, idempotent operations, and crash-durable state before adding features.

2. **Design for multi-agent from day one.** Session isolation, configurable tool inheritance, and deterministic routing are not "premium features" — they are baseline expectations.

3. **Instrument everything.** Cost per agent, token budgets, and provider caching toggles are becoming table stakes. Expose these as configuration knobs, not hardcoded defaults.

4. **Platform portability is a moat.** The projects that invest in Windows, Android, and mobile across their stack will capture users that Chrome-only or Linux-only projects miss.

5. **Security is not negotiable.** DNS rebinding, credential leaks, and UI spoofing are not edge cases — they are attack vectors that will be exploited. Fail closed, audit logs, and minimal privilege by default are the new standard.

6. **Community management scales with tooling.** OpenClaw's "clawsweeper" label system and ZeroClaw's release trackers show that manual triage does not scale. Automated CI gates, code review SLAs, and contributor recognition programs are essential for projects targeting high-velocity ecosystems.

---

*Data snapshot: 2026-07-05 00:00 UTC. Analysis based on community digest summaries from 13 projects in the personal AI assistant / agent open-source ecosystem.*

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-07-05

## 1. Today's Overview

NanoBot shows **high activity** today with 13 PRs updated in the last 24 hours (7 merged/closed, 6 open) and 2 closed issues. The project is in a **strong maintenance phase**, with multiple critical bug fixes merged (token refresh race condition, MCP crash containment, file system durability), alongside significant **security hardening** (SSRF DNS pinning) and **UI/UX improvements** (mobile viewport, streaming Markdown reveal). No new releases were cut today, indicating the team may be consolidating fixes before a planned release. The **open PR count of 6** suggests active development continues on new features like Mattermost integration and configurable MCP inheritance.

## 2. Releases

**No new releases today.** The last release date is not available from this snapshot. Given the volume of merged fixes (especially P0/P1 severity), a release may be imminent.

## 3. Project Progress — Merged/Closed PRs

**7 PRs merged/closed today**, addressing critical stability, provider issues, and platform compatibility:

| PR | Description | Impact |
|----|-------------|--------|
| **#4666** `fix(mcp): contain malformed tool results` (P1) | Wraps MCP result rendering in exception handling; marks timeouts, cancellations, retry failures, and execution exceptions as structured tool errors | **Prevents process crashes** from malformed MCP tool calls (fixes #4652) |
| **#4684** `fix(copilot): guard token refresh with asyncio.Lock` (P2) | Adds `asyncio.Lock` to `_get_copilot_access_token()` to prevent concurrent token refresh race condition | **Stabilizes GitHub Copilot provider** under concurrent requests |
| **#4653** `fix(pairing): restore durable atomic writes` (P1) | Adds `fsync` calls to `_write_text_atomic` for crash-durable writes in pairing module | **Prevents data corruption** on system crash during pairing file writes |
| **#4690** `fix(gateway): handle Windows stop fallback` (P2) | Catches `OSError [WinError 87]` on Windows when `CTRL_BREAK_EVENT` fails; falls back to `taskkill` | **Fixes gateway stop crash** on Windows |
| **#4692** `fix(config): serialize model presets as camelCase` (P2) | Serializes `model_presets` as `modelPresets` in config files while accepting both forms | **Aligns config with documentation** naming conventions |
| **#4646** `fix(dingtalk): stop stream task on shutdown` (P2) | Tracks DingTalk channel task for clean cancellation; closes websocket on `stop()` | **Prevents resource leaks** on DingTalk shutdown |
| **#4695** `Merge/upstream 2026 06 26` | Synced upstream changes | **Keeps fork in sync** |

## 4. Community Hot Topics

| Item | Comments | 👍 | Summary |
|------|----------|---|---------|
| **[#4652](HKUDS/nanobot Issue #4652): MCP tool call crash** | 3 | 0 | User reports **process crash on MCP tool call exceptions**. Triggered by empty/error returns. **Fix merged in #4666** |
| **[#4677](HKUDS/nanobot Issue #4677): Copilot token refresh race condition** | 1 | 0 | **Concurrent token refresh race** causes stale tokens and authentication failures under load. **Fix merged in #4684** |

**Underlying need analysis:** Both issues reveal a pattern: users are **running NanoBot under production-like concurrent workloads** (multiple simultaneous chat requests), exposing race conditions and crash paths that single-user testing misses. The community values **production reliability** and **graceful error handling** over silent failures.

## 5. Bugs & Stability

| Severity | Issue | Status | Details |
|----------|-------|--------|---------|
| **P0** | [#4671](HKUDS/nanobot PR #4671) — SSRF DNS bypass (OPEN) | **Fix open** — Pins validated DNS for SSRF checks, prevents DNS rebinding attacks | Security advisory level |
| **P1** | [#4652](HKUDS/nanobot Issue #4652) — MCP crash on tool exceptions | **Fixed** in #4666 | Process terminates on malformed MCP returns |
| **P1** | [#4653](HKUDS/nanobot PR #4653) — Non-atomic pairing writes | **Fixed** — Restored `fsync` for crash durability | Data loss risk on power failure |
| **P2** | [#4677](HKUDS/nanobot Issue #4677) — Copilot token race condition | **Fixed** in #4684 | Auth failures under concurrent requests |
| **P2** | [#4690](HKUDS/nanobot PR #4690) — Windows gateway stop crash | **Fixed** — `OSError` on CTRL_BREAK_EVENT | Windows users could not stop gateway cleanly |
| **P2** | [#4646](HKUDS/nanobot PR #4646) — DingTalk shutdown hang | **Fixed** — Stream task not cancelled | Resource leak on channel shutdown |
| **P2** | [#4694](HKUDS/nanobot PR #4694) — Mobile viewport clipping (OPEN) | **Fix open** — Chat/composer forced wider than 100vw | Mobile UX broken on narrow screens |
| **P2** | [#4698](HKUDS/nanobot PR #4698) — Non-standard OAuth error messages (OPEN) | **Fix open** — Inconsistent `oauth_cli_kit` errors across CLI/WebUI | Confusing user experience |

**Severity assessment:** The P0 SSRF fix (#4671) is the most critical open item—a **security vulnerability** that could allow DNS rebinding attacks. The P1 MCP crash fix (#4666) was already merged, which is the highest-impact stability win today.

## 6. Feature Requests & Roadmap Signals

| Feature | PR/Issue | Status | Likelihood for Next Release |
|---------|----------|--------|---------------------------|
| **Configurable MCP inheritance for subagents** | [#4697](HKUDS/nanobot PR #4697) (OPEN) | New PR — lets specialist subagents inherit MCP servers from the main agent | **High** — addresses a common workflow gap (subagents can't use database/search tools) |
| **Streaming Markdown reveal animation** | [#4696](HKUDS/nanobot PR #4696) (OPEN) | New PR — buffered rAF scheduler with natural reading speed, punctuation pauses, left-to-right code reveal | **High** — pure UX improvement, low risk, authored by regular contributor |
| **Mattermost channel support** | [#4459](HKUDS/nanobot PR #4459) (OPEN, 13 days old) | Long-standing PR adding WebSocket + REST Mattermost integration with streaming responses | **Medium** — valuable for enterprise users, but requires maintainer review of WebSocket reliability |
| **Mobile viewport fix** | [#4694](HKUDS/nanobot PR #4694) (OPEN) | Fixes narrow viewport clipping for mobile browsers | **High** — quick fix, addresses clear UX regression |
| **OAuth error standardization** | [#4698](HKUDS/nanobot PR #4698) (OPEN) | Consistent error messages for `oauth_cli_kit` across CLI/WebUI | **High** — small change, improves debugging experience |

**Roadmap signal:** The subagent MCP inheritance feature (#4697) is a significant architectural change—it would enable **agent tool sharing**, making NanoBot more useful as a multi-agent platform. This alongside the streaming UI polish suggests the project is maturing toward a **production-quality multi-agent assistant**.

## 7. User Feedback Summary

**Pain points:**
- **Crash sensitivity on MCP tool calls** (Issues #4652, #4302): Users report NanoBot crashes entirely when external tools return errors—no graceful recovery. The fix (#4666) addresses this.
- **Token refresh instability under load** (Issue #4677): Users running concurrent Copilot requests experience authentication failures every ~30 minutes when token expiry triggers race conditions. Now fixed.
- **Windows platform friction** (PR #4690): Gateway stop command crashes with cryptic `OSError` on Windows. Users likely had to kill processes manually. Now fixed.
- **Poor mobile experience** (PR #4694): WebUI on phones forces chat area wider than screen, clipping content. Still pending fix.

**Positive signals:**
- The community actively contributes **platform-specific fixes** (Windows, DingTalk, Copilot) showing broad deployment diversity.
- **Streaming UI improvements** (#4696) suggest core UX is stable enough for polish—a sign of project maturation.

## 8. Backlog Watch

| Item | Age | Priority | Reason for Attention |
|------|-----|----------|---------------------|
| **#4459** — Mattermost channel support | **13 days open** | Medium | First real community contribution for a new channel; needs maintainer review of WebSocket reconnection logic. Could attract **enterprise/self-hosted** users |
| **#4671** — SSRF DNS pinning (P0 Security) | **3 days open** | **Critical** | **Security vulnerability fix**—must be reviewed and merged urgently to prevent DNS rebinding attacks. Already has implementation and verification steps |
| **#4697** — MCP inheritance for subagents | **1 day open** | Medium-High | Architectural feature with potential breaking changes; needs review of configuration schema before next release |

**Maintainer attention needed:** The **SSRF security fix (#4671)** is the most time-sensitive item—it's labeled P0 and addresses a real attack vector. The **Mattermost PR (#4459)** has been waiting 13 days without maintainer comment, which may discourage new contributors if left unattended.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-07-05

## Today's Overview

Hermes Agent shows very high activity with 50 issues and 50 PRs updated in the last 24 hours, indicating a vibrant development cycle. The open/active issue count (44) significantly outweighs closed items (6), suggesting the project is prioritizing triage and discussion over rapid closure today. A notable cluster of bug fixes, security patches, and feature enhancements across the Telegram, Matrix, and Docker subsystems indicates broad cross-platform maintenance. No new releases were published today, but the volume of merged-style PRs points to a pending release candidate building.

## Releases

No new releases were published today. The latest available version remains v0.18.0.

## Project Progress

Today's merged/closed PRs (8 items) include several targeted fixes and features advancing toward stability:

- **Multi-provider delegate tool fix** (#43185 by rafaumeu) addressed all 8-reviewer feedback from the multi-provider code review on #43134, improving the delegation subsystem's provider integration.
- **Telegram security patch** (#58594 by AlexFucuson9) redacts bot tokens from transport error logs, closing a credential leakage vector on the Telegram gateway.
- **write_file summarizer crash fix** (#58595 by AlexFucuson9) resolves an `AttributeError: 'dict' object has no attribute 'count'` in context compression when tool call content is parsed as dict instead of string.
- **Context Health phases 1-9** (#58597 by JandY95) introduces a major auto-context-governance framework spanning policy models, pre-turn intake guards, working context enforcement, task registry, and provider-payload boundary enforcement.
- **Python 3.14 compatibility fix** (#58598 by liuhao1024) adapts `DaemonThreadPoolExecutor` for the new `_worker` signature, fixing all concurrent features on Python 3.14.
- **Vision fallback fix** (#58600 by webtecnica) extends auxiliary.vision fallback to all providers with unknown vision capability, fixing DeepSeek and similar models.
- **Docker sandbox egress control** (#58601 by suzu784) adds a per-allowlist filtered proxy mode for container networking.
- **Kanban empty-diff rejection** (#58602 by suzu784) adds deterministic fail-closed checks for worktree completions with zero commits/changes.

## Community Hot Topics

The most active discussions this period reveal strong interest in agent memory systems and workspace flexibility:

1. **Knowledgebase RAG System** ([#844](https://github.com/NousResearch/hermes-agent/issues/844) — 7 comments, 4 👍)
   - *Underlying need:* Users want Hermes to autonomously index local document directories for conversational retrieval, suggesting a desire for "set-and-forget" local RAG that doesn't require manual embedding pipelines.

2. **Scope-Recall Memory Provider RFC** ([#42864](https://github.com/NousResearch/hermes-agent/issues/42864) — 6 comments)
   - *Underlying need:* A standalone memory plugin author seeks official documentation and integration guidelines, indicating the community is building third-party memory solutions that need project-level recognition.

3. **Per-session workspace selection** ([#40297](https://github.com/NousResearch/hermes-agent/issues/40297) — 5 comments, 9 👍)
   - *Underlying need:* Desktop users want the ability to switch project directories mid-session without restarting, reflecting real multi-folder workflows rather than single-project use.

4. **Credential pool exhaustion / misleading 401** ([#40960](https://github.com/NousResearch/hermes-agent/issues/40960) — 3 comments)
   - Experienced users are hitting API rate-limit handling issues that obscure the real problem (quota exhaustion) behind misleading auth errors.

## Bugs & Stability

**Critical / P1:**
- **Discord default allowlist regression** (#58583, PR #58583 exists): v0.18.0 silently blocks ALL Discord messages when no allowlists are configured — a default-install breakage. Fix PR by AlexFucuson9 restores allow-all default.

**High / P2:**
- **Vision fallback failure with DeepSeek** (#58581, PR #58600 exists): Primary text-only model fails first call instead of routing to auxiliary vision provider.
- **DaemonThreadPoolExecutor Python 3.14 crash** (#58596, PR #58598 exists): All concurrent features break on Python 3.14 due to removed `_initializer` attribute.
- **verify-on-stop silently replaces subagent output** (#58490, needs-repro): Subagent results lost during verification, documented in #52612 for foreground case but newly reported for delegate_task.
- **Telegram polling infinite reconnect loop** (#58484, P2, needs-repro): Retry counter never increments, causing never-ending reconnect for Docker deployments.
- **WebUI resume hides active CLI sessions** (#58518, CLOSED): Sessions in-progress from CLI not visible for WebUI continuation until after final output.
- **Qwen3.6 / vLLM thinking context lost** (#56004): Multi-turn reasoning stripped on replay for Qwen models served via vLLM.
- **Desktop ignores OpenAI Codex provider** (#58498): Routes GPT-5.5 requests through Nous Portal instead of configured Codex OAuth, while CLI works correctly.
- **Desktop Docker terminal hangs** (#58510): Terminal pane hangs on "Connecting..." with OrbStack on macOS, though agent terminal tool works.

**Medium / P3:**
- **Windows Matrix backend fails on refresh** (#58458): Lazy deps pin marks never-enabled backends active, causing pip install failures for python-olm.
- **TUI not resizing properly** (#35530): Terminals that don't emit resize events leave UI misaligned.
- **Profile Codex auth ignores global pool** (#34143): Named profiles can report missing credentials even when global Codex auth is valid.
- **Skills treated as advisory** (#58569): Agent loads skills but ignores mandatory instructions, using wrong tools.
- **Hindsight memory causes identity confusion** (#21709): Literary fiction stored in memory leads agent to adopt fictional character identity.

## Feature Requests & Roadmap Signals

Several features show strong community interest and implementation readiness:

- **Cross-channel context digest** (#58590 PR, merged-style): Opt-in digest for new sessions to see recent activity across channels without merging conversations — likely for next minor release.
- **Eden AI provider** (#58571): Multi-provider aggregator with OpenAI-compatible endpoint — low complexity, high utility, probable next release.
- **Free LLM provider profiles** (#58586 PR, merged-style): Bundled Groq, Mistral AI, Cerebras profiles for zero-cost onboarding — strong signal for next release.
- **Sub-provider drill-down model picker** (#58580 PR): Group-by-subprovider for aggregators like OpenRouter — likely next release.
- **WhatsApp QR color-inversion detection** (#58038): Dark-mode terminal usability fix for WhatsApp pairing — low effort, high user impact.
- **Voice wake word for Desktop** (#49383, 2 comments, 2 👍): "Hey Hermes" hands-free invocation — longer-term feature.
- **WhatsApp setup wizard** (#58041): One-command configuration to match Telegram's simplicity — signals platform parity demand.
- **Fable copilot for planning** (#58370, CLOSED): Expensive-model planning overlay using Anthropic Fable — experimental feature merged.

## User Feedback Summary

- **Satisfaction drivers:** Users appreciate the CLI's consistent cross-platform behavior — multiple reports contrast CLI working correctly where Desktop/WebUI fails (auth routing, session visibility). The skills hub and RAG features generate excitement and community plugin development.
- **Pain points:** 
  - Desktop onboarding is confusing — fresh installs default to wrong provider routing (Codex vs. Portal) and sessions don't persist properly.
  - Credential/hardware complexity — users struggle with auth fallbacks, credential pool exhaustion, and misleading error messages.
  - Docker/Windows/WSL2 users face systematic issues (D-state processes, CPU spikes, terminal hangs) that degrade the gateway experience.
  - Skills are treated as "advisory" rather than mandatory — users expect strict instruction following from loaded skills.
- **Use cases:** Multi-folder workspace switching, local document RAG, cross-platform chat (Telegram, Discord, WhatsApp, Signal), long-running agent sessions with memory persistence.

## Backlog Watch

Long-unanswered issues requiring maintainer attention:

1. **Hindsight memory identity confusion** ([#21709](https://github.com/NousResearch/hermes-agent/issues/21709) — opened 2026-05-08, 1 comment): Agent adopts fictional character identity from novel content stored in memory. No maintainer response in 58 days. Could indicate deeper architectural question about memory scoping.

2. **TUI resize handling** ([#35530](https://github.com/NousResearch/hermes-agent/issues/35530) — opened 2026-05-30, 2 comments): SIGWINCH fallback for terminals that don't emit resize events. 36 days without maintainer engagement.

3. **Profile Codex auth staleness** ([#34143](https://github.com/NousResearch/hermes-agent/issues/34143) — opened 2026-05-28, 2 comments): Named profile credential resolution ignores valid global Codex auth. 38 days unattended, though similar pattern appears in today's Desktop Codex issue (#58498).

4. **Gateway idle WSL2 CPU spike** ([#31513](https://github.com/NousResearch/hermes-agent/issues/31513) — opened 2026-05-24, 1 comment): 100% CPU from wslhost when gateway idle on Windows 10. 42 days without resolution.

*Note:* Issues #21709 and #34143 were both cross-referenced in today's activity but lack direct maintainer responses, suggesting they may need escalation for triage.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-07-05

## Today's Overview
PicoClaw shows moderate but steady activity with 4 issues and 7 PRs updated in the last 24 hours. The project has 3 open issues and 5 open PRs, with 2 PRs merged or closed today, including a fix for the agent session routing bug. No new releases were published, though several maintenance tasks (Docker base image bumps, `.gitignore` cleanup, i18n syncs) are in progress. The community remains engaged on encryption-related and Android platform issues, while a new feature PR introducing per-agent runtime overrides signals ongoing architectural evolution.

## Releases
No new releases have been published since the last digest. The project continues to operate on v0.2.4-based builds (per user-reported version v0.2.4-9-ged618e1). Users are advised to track the latest main branch for the most recent fixes.

## Project Progress
Two pull requests were merged/closed in the last 24 hours:

- **PR #3224 (Merged)** — `fix(agent): clear routed agent session`  
  *Author: Ethan1918* — [Link](https://github.com/sipeed/picoclaw/pull/3224)  
  Fixes a critical bug where `/clear` would clear the default agent's session instead of the currently routed non-default agent's session. This resolves a user-facing issue in multi-agent configurations.

- **PR #3221 (Closed)** — Revert `"test: cover sandbox fs Windows path handling"`  
  *Author: afjcjsbx* — [Link](https://github.com/sipeed/picoclaw/pull/3221)  
  Reverted PR #3158 due to an import error in `pkg/providers/openai_compat/provider.go`. Likely a CI or compilation regression that was caught and rolled back quickly.

## Community Hot Topics
Most active discussions by comments and reactions:

- **#3088** — `[Feature] use vodozemac instead of libolm`  
  [Issue](https://github.com/sipeed/picoclaw/issues/3088) | 4 comments, 2 👍  
  Users strongly support replacing the unmaintained and insecure `libolm` library with `vodozemac`, the official Matrix replacement. This is labeled "help wanted, priority: high" but has been stale for 24 days. The community's demand reflects growing security concerns around Matrix encryption dependencies.

- **#3150** — `[BUG]它给自己整失忆了` ("It made itself forget")  
  [Issue](https://github.com/sipeed/picoclaw/issues/3150) | 4 comments  
  A closed stale bug about memory loss behavior. While closed, the 0 reactions and brief discussion suggest it may have been a transient or environment-specific issue.

- **#3194** — `[BUG] Received encrypted message but crypto is not enabled`  
  [Issue](https://github.com/sipeed/picoclaw/issues/3194) | 1 comment  
  A recently opened (June 27) bug about Matrix encrypted messages arriving but crypto not being enabled. This pairs with #3088 — users are encountering real encryption gaps in the Matrix channel.

## Bugs & Stability
Three active bugs were reported/updated in the last 24 hours:

- **#3194 (Open, High)** — `Received encrypted message but crypto is not enabled`  
  *[Link](https://github.com/sipeed/picoclaw/issues/3194)*  
  Matrix encrypted messages fail to process when crypto isn't enabled. User on v0.2.4. **No fix PR exists yet.** This is a significant functional gap for Matrix users.

- **#3182 (Open, Medium-High)** — `Android version`  
  *[Link](https://github.com/sipeed/picoclaw/issues/3182)*  
  Service fails to launch on Android despite full permissions. User cannot change path from settings. Affects mobile deployment. **No fix PR exists.**

- **#3150 (Closed)** — Memory loss bug (stale, closed). Likely resolved or determined non-reproducible.

**Regression watch:** PR #3221's revert of a Windows sandbox test fix indicates CI/compilation fragility in the codebase that may affect Windows users.

## Feature Requests & Roadmap Signals
Requests currently visible:

- **#3088** — Replace `libolm` with `vodozemac` (high priority, help wanted). Given security implications and the parallel bug #3194, this is likely to be prioritized for the next release.

- **PR #3225 (Open)** — `Support agent-specific runtime overrides`  
  *[Link](https://github.com/sipeed/picoclaw/pull/3225)*  
  Adds `max_tokens`, summarization thresholds, and `split_on_marker` per-agent configuration. This is a significant feature for power users managing multiple agents. If reviewed and merged quickly, it could land in the next minor release.

- **Chore PRs #3190-3192** (i18n syncs, Docker bumps, `.gitignore` cleanup) — These are low-risk maintenance tasks that should merge soon and improve developer experience and localization completeness.

**Next release prediction:** Likely includes #3225 (agent overrides), #3224 (session clear fix), and the pending chore PRs. The `vodozemac` migration (#3088) may slip if maintainer bandwidth is limited.

## User Feedback Summary
Pain points and use cases from recent activity:

- **Matrix encryption is a major pain point** — Two separate issues (#3194, #3088) directly relate to encryption failures and library insecurity. Users are clearly relying on PicoClaw for Matrix E2EE and finding it broken or insecure.
- **Android support is fragile** — #3182 shows the standalone Android service fails to start with path permission errors, limiting mobile adoption.
- **Multi-agent users need better session isolation** — The `/clear` fix (#3224) was directly driven by user reports of incorrect session clearing. The new agent overrides PR (#3225) also points to increasing demand for per-agent granularity.
- **Localization completeness matters** — PR #3190 syncs missing keys for Bengali and Czech, suggesting an active international user base.

Overall sentiment is constructive but with clear frustration around encryption and mobile platform support.

## Backlog Watch
Items needing maintainer attention:

- **#3088 (Open, 24 days stale)** — `[Feature] use vodozemac instead of libolm`  
  *[Link](https://github.com/sipeed/picoclaw/issues/3088)*  
  Labeled "help wanted, priority: high" but no assignment or recent maintainer comment. This is the most impactful pending feature/security fix.

- **#3182 (Open, 9 days)** — `Android version` service launch failure  
  *[Link](https://github.com/sipeed/picoclaw/issues/3182)*  
  User awaiting a response or workaround. No PR or assignment.

- **#3194 (Open, 8 days)** — Matrix encrypted message handling bug  
  *[Link](https://github.com/sipeed/picoclaw/issues/3194)*  
  Zero comments from maintainers. Directly related to #3088's resolution timeline.

- **PRs #3190-3192 (7 days stale)** — Chore PRs by chengzhichao-xydt  
  All open, unreviewed. Low risk, high value (Docker consistency, i18n fallbacks, gitignore cleanup). These are ideal "first-responder" merges to keep velocity.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-07-05

## 1. Today's Overview

NanoClaw shows **elevated maintenance velocity** with 39 pull requests updated in the last 24 hours—22 of which were merged or closed—indicating a sustained cleanup and stabilization push by the core team. The single open issue (#2923) is a security concern discovered during an audit, not a user regression. No new releases were cut today, but the volume of merged PRs (particularly from maintainer @gavrielc) suggests a v2.2 release candidate may be approaching. Overall project health is **strong**, with the team actively addressing technical debt, doc staleness, and security perimeter hardening in the v2 codebase.

## 2. Releases

**None.** The latest tagged release remains v2.1.38 (referenced in PR #2953). The burst of cleanup PRs touching dead code, stale docs, and deprecated exports suggests a release readiness review may be imminent.

## 3. Project Progress

**22 PRs merged/closed today**, dominated by maintainer @gavrielc (15 merges) plus contributions from @glifocat and @stumpjumper. Key advances:

| Area | PRs | Impact |
|------|-----|--------|
| **Security perimeter** | #2945, #2934, #2943 | Rewrote SECURITY.md for v2 container model; routed egress-lockdown and resource-cap env vars through `readEnvFile`; fixed mount allowlist to honor `readOnly` key |
| **Dead code removal** | #2940, #2936, #2935, #2946 | Deleted deprecated shims from April 2026 DB split, unused CLI vocabulary, dead v1 config knobs, and the defunct `data/env/env` mirror that leaked secrets |
| **Bug fixes** | #2937, #2942, #2948 | Re-provision missing session folders on write (fixes documented reset workflow); moved `inReplyTo` into session state for cross-process MCP tools; fixed stale architecture/scheduling docs |
| **CLI improvements** | #2939 | Added `ncl groups config add-mount/remove-mount` with host-only enforcement |
| **Docs** | #2953, #2948 | Corrected stale mount topology in SECURITY.md, v1-era scheduling docs |
| **Build/infra** | #2931 | Docker image builds now async (`exec` instead of `execSync`)—fixes host freezes during package installs |
| **UI** | #2933 | Approval cards now use Slack `primary` (green) and `danger` (red) button styles |

## 4. Community Hot Topics

### Most active open PRs (by comment count, all show `undefined` comments but top of list):

- **#2956** — `fix(agent-runner): suppress duplicate delivery when the final output repeats tool-sent content` (Author: @stumpjumper, 2026-07-05)
  - Addresses a real user-facing bug: agents using `send_message` MCP tool produce double messages when final output echoes tool content. The fix adds a deduplication check matching `<message>` blocks against last-sent content.
  - [GitHub: nanocoai/nanoclaw PR #2956](https://github.com/nanocoai/nanoclaw/pull/2956)

- **#2955** — `fix(router): mention-sticky must not subscribe the channel root or accumulate-only sessions` (Author: @dim0627, 2026-07-04)
  - Fixes a subtle routing bug where mention-sticky mode incorrectly treats mere session existence as thread subscription. Two edge cases identified: channel root sessions and accumulate-only sessions.
  - [GitHub: nanocoai/nanoclaw PR #2955](https://github.com/nanocoai/nanoclaw/pull/2955)

- **#2952** — `Skill/add opencode stack` (Author: @javexed, 2026-07-04)
  - Community-contributed skill for the Opencode integration stack (new channel/integration). Indicates growing ecosystem interest from external contributors.
  - [GitHub: nanocoai/nanoclaw PR #2952](https://github.com/nanocoai/nanoclaw/pull/2952)

- **#2949** — `feat(skill): /add-litellm — minimal model router` (Author: @javexed, 2026-07-04)
  - Utility skill adding LiteLLM integration for local server model routing. Community-driven, suggests demand for multi-provider LLM orchestration.
  - [GitHub: nanocoai/nanoclaw PR #2949](https://github.com/nanocoai/nanoclaw/pull/2949)

**Analysis:** The community contribution pattern (3 of top-5 open PRs from non-maintainers @javexed, @dim0627) is healthy. The duplicate delivery fix (#2956) and mention-sticky routing fix (#2955) address real user pain points that likely generated support tickets.

## 5. Bugs & Stability

### Critical:
- **#2923** — `[SECURITY] ask_user_question card can be defaced by a forged click before origin authz` (Open, no comments)
  - A forged button click on an `ask_user_question` card can **overwrite displayed text** (e.g., attacker name appears as selected label) even when origin auth correctly rejects the response. This is a display-integrity spoof vulnerability, not agent compromise, but allows UI-level impersonation. **No fix PR exists yet.** Severity: **High** (user-facing spoofing, no workaround documented).
  - [GitHub: nanocoai/nanoclaw Issue #2923](https://github.com/nanocoai/nanoclaw/issues/2923)

### High:
- **Duplicate message delivery** (PR #2956, in review) — Agents using `send_message` MCP tool cause double messages. Fix proposed and under review.

### Medium:
- **Mention-sticky false subscription** (PR #2955, in review) — Channel root sessions and accumulate-only sessions incorrectly treated as subscribed. Fix proposed.
- **Session folder missing after `rm -rf`** (PR #2937, merged) — Documented reset workflow broke; now fixed by re-provisioning on write.

### Low (documentation/regression):
- **Stale architecture docs** (PR #2948, merged) — Scheduling docs described v1 container mechanics that no longer exist.
- **Dead `data/env/env` mirror** (PR #2946, merged) — Setup was writing secrets to a path nobody reads since Feb 2026.

**Assessment:** The #2923 security issue is the most concerning unresolved item. The duplicate-delivery bug (#2956) likely affects production agents using MCP tools. All other identified bugs have fix PRs merged or in review.

## 6. Feature Requests & Roadmap Signals

### User-requested features visible in open PRs:
- **LiteLLM model router** (#2949) — Community request for a minimal multi-provider LLM router using LiteLLM. Likely to land as a utility skill.
- **Opencode stack skill** (#2952) — New channel integration for Opencode. Indicates demand for code-specific agent use cases.
- **Security reporting policy** (#2954) — Phase 1 of a formal security-contribution policy (4 new files, draft status). Signals the team is maturing vulnerability handling.

### Predicted for next release (v2.2 likely):
- **Security doc rewrite** (#2945, merged) — Already in main; v2 perimeter documentation is release-ready.
- **Mount allowlist `readOnly` support** (#2943, merged) — Honors per-root read-only mount flags.
- **Async Docker builds** (#2931, merged) — Non-blocking agent image builds.
- **Approval card colored buttons** (#2933, merged) — UI polish for Slack integration.

## 7. User Feedback Summary

While no explicit user feedback surveys exist in this data, the following pain points emerge from engineering work:

### Pain points addressed in merged PRs:
- **Agent double-messaging** (#2956 fix) — Users reported messages delivered twice when agents used `send_message` MCP tool. The proposed fix suppresses duplicate delivery via content matching.
- **Host freezes during image builds** (#2931 fix) — `execSync` blocked the single-threaded host for up to 15 minutes during Docker builds. Now async.
- **Security docs misleading** (#2945 fix) — Users trying to understand v2 container security were reading v1-era docs. Now rewritten.
- **Reset workflow broken** (#2937 fix) — Operators following the documented `rm -rf` reset found sessions wouldn't recreate. Now fixed.
- **Secrets leaked to unused path** (#2946 fix) — `.env` contents (bot tokens, API keys) were being written to a path nobody reads, creating confusion and potential exposure risk.

### Unaddressed pain points:
- **Security defacement** (#2923) — Users relying on `ask_user_question` cards for sensitive approvals are vulnerable to UI spoofing. No fix yet.
- **Cross-process `inReplyTo` failures** (#2942, now merged) — Agent-to-agent replies broke when MCP server ran in separate process.

## 8. Backlog Watch

### Critical:
- **Issue #2923** — Security vulnerability (card defacement). Open since 2026-07-04 with no assignee and 0 comments. **Needs immediate maintainer triage.** Given the project's security focus (evidenced by #2945, #2954), this should be prioritized.
  - [GitHub: nanocoai/nanoclaw Issue #2923](https://github.com/nanocoai/nanoclaw/issues/2923)

### Requires maintainer review:
- **PR #2954** — Security reporting policy (Phase 1). Open since 2026-07-04, draft status pending maintainer sign-offs. Important for project governance.
  - [GitHub: nanocoai/nanoclaw PR #2954](https://github.com/nanocoai/nanoclaw/pull/2954)

### Community contributions awaiting review:
- **PR #2952** — Opencode stack skill (@javexed, not yet merged)
- **PR #2951** — Opencode environment variable fixes (@javexed, not yet merged)
- **PR #2949** — LiteLLM model router skill (@javexed, not yet merged)

**No Long-Standing Unanswered Items:** All open PRs are recent (last 2 days). The only unattended issue (#2923) is also very recent. The project's maintainer team (particularly @gavrielc) is remarkably responsive—15 merges in 24 hours suggests healthy engagement levels.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-07-05

## Today's Overview

The IronClaw project is experiencing a **high-activity phase** with 43 pull requests updated in the last 24 hours, 16 of which were merged or closed. The project remains **unreleased** since the last tag, with significant integrations and refactors underway across the Slack channel stack, CI/CD pipeline, and test infrastructure. Active issue volume is moderate (8 open, 1 closed), but the PR pipeline indicates a sustained push toward platform stability and developer experience improvements. A major cross-cutting theme this week is the migration of Slack integration from pairing codes to **personal OAuth**, spanning 4 stacked PRs totaling 200+ files changed, alongside a new state migration tool for legacy v1/engine-v2 users.

---

## Releases

**No new releases in the last 24 hours.** The release automation PR [#5598](https://github.com/nearai/ironclaw/pull/5598) remains open, proposing the following version bumps pending CI sign-off:

- `ironclaw_common`: 0.4.2 → **0.5.0** (⚠️ breaking change)
- `ironclaw_skills`: 0.3.0 → **0.4.0** (⚠️ breaking change)
- `ironclaw`: 0.24.0 → **0.29.1** (major jump, many changes)
- `ironclaw_safety`: 0.2.2 → 0.2.3 (compatible)
- Several other crates with minor bumps

**Migration Note:** Teams consuming `ironclaw_common` or `ironclaw_skills` should prepare for API-breaking changes once this release merges.

---

## Project Progress

**16 PRs merged/closed today,** reflecting meaningful progress across several fronts:

### Features & Major Advances
- **[PR #5627](https://github.com/nearai/ironclaw/pull/5627) [MERGED]** — New `ironclaw_reborn_migration` crate: a library + binary that converts legacy IronClaw **v1** and **engine-v2** persisted state into the **Reborn** substrate. Handles silent-loss detection with a manifest of unmapped values.
- **[PR #5635](https://github.com/nearai/ironclaw/pull/5635) [MERGED]** — Benchmarked and replaced the one-job-per-Reborn-crate matrix with 12 named crate buckets, reducing CI job count while maintaining package-specific feature flags.
- **[PR #5606](https://github.com/nearai/ironclaw/pull/5606) [MERGED]** — Added OVH Redis sccache to Reborn gateway smoke CI, shortening the smoke test from ~48 min baseline (cache-only, not distributed compile).
- **[PR #5042](https://github.com/nearai/ironclaw/pull/5042) [MERGED]** — `fix(agent-loop)`: one-line answers naming a `__`-tool are no longer misclassified as transcript artifacts; real answers now surface when a single line mentions a tool result.

### Tooling & Developer Experience
- **[PR #5383](https://github.com/nearai/ironclaw/pull/5383) [MERGED]** — Published a findings + remediation-plan document mapping every reborn-binary run error to recoverable vs run-borking, with a path to two-bucket end state (security errors stop the run, all others surface).
- **[PR #5642](https://github.com/nearai/ironclaw/pull/5642) [OPEN]** — Wiring-parity tripwire for integration harness vs production local-dev shape, zero `src/` changes, targeted for #5637.

### CI & Quality
- **Integration coverage pipeline** — `tests/integration/coverage-exempt` and vendor-list now exist, pending flip from informational to ratchet (Issue #5638 still open).
- **`unused_must_use` deny** — PR [#5652](https://github.com/nearai/ironclaw/pull/5652) promotes this to workspace-wide deny; zero current fires, meaning Rust error handling discipline is already high.

---

## Community Hot Topics

### Most Active Pull Requests

**1. [PR #5645](https://github.com/nearai/ironclaw/pull/5645) — Swap Slack pairing codes for personal OAuth (stack 3/4)**
- **Size:** XL (121 files, deletion-dominated) | **Risk:** medium | **Scope:** channel/cli, channel/web, tool, pairing, docs
- **Analysis:** The centerpiece of the Slack OAuth rollout. Deletes the entire pairing-code infrastructure (`slack_personal_binding_pairing`, `slack_pairing_notifier`, `channel_connection_resume`) and wires OAuth flows. High-risk due to surface area but deletion-heavy suggests net simplification.

**2. [PR #5644](https://github.com/nearai/ironclaw/pull/5644) — Slack personal OAuth foundations (stack 2/4)**
- **Size:** XL (77 files) | **Risk:** low | **Scope:** docs
- **Analysis:** Dormant additive layer — both old (pairing) and new (OAuth) flows coexist; nothing user-visible until PR 3 flips the surface. OAuth primitives in `ironclaw_auth`, per-capability scope split (read vs chat:write) is the key design detail.

**3. [PR #5646](https://github.com/nearai/ironclaw/pull/5646) — Reject legacy `[slack]` config fields (stack 4/4)**
- **Size:** M | **Risk:** low | **Scope:** docs, breaking change
- **Analysis:** Final slice — operator-facing breaking change. Once merged, `ironclaw-reborn serve` rejects legacy `install_path` and `client_id` config fields. Deliberately last and independently revertable.

**Underlying need:** Users and operators need a **simpler, more secure Slack integration** that doesn’t require pairing codes. The 4-stack PR series delivers this while preserving backward compatibility until the very last step (PR 4). The per-capability scope split (Issue [#5650](https://github.com/nearai/ironclaw/issues/5650)) addresses a specific user security concern: granting only read vs write scopes per capability.

### Most Active Issues

**1. [Issue #5650](https://github.com/nearai/ironclaw/issues/5650) — Slack personal OAuth: per-capability scope split**
- **Status:** Open | **Comments:** 0 | **👍:** 0
- **Analysis:** Follow-up from PR #5644 review — all five `slack_user` capabilities (including read-only `search_messages`) currently carry the full 11-scope set including `chat:write`. This is a design/security refinement; users expect minimal privilege grants.

---

## Bugs & Stability

### Critical / Potential Blockers

**1. [Issue #5647](https://github.com/nearai/ironclaw/issues/5647) — Bridged tool disclosure + narrowed capability allowlist strips bridge meta-tools**
- **Severity:** ⚠️ **High** — latent, but triggers when both bridged disclosure AND narrowed capability allowlist are active together
- **Mechanism:** When bridged disclosure defers a >32-tool catalog, synthetic `ironclaw.*` bridge capability IDs are not part of any granted capability set, so the bridge meta-tools disappear.
- **Fix status:** No fix PR yet; discovered while building int-tier coverage for REBORN_TOOL_DISCLOSURE=Bridged.

**2. [Issue #5640](https://github.com/nearai/ironclaw/issues/5640) — Harness gap: no RecordingSecurityAuditSink double in integration harness**
- **Severity:** ⚠️ **Medium** — causes test shape mismatch with production; `hook_security_audit_sink` is always `None` in harness but `Some(TracingSecurityAuditSink)` in production
- **Fix status:** PR [#5642](https://github.com/nearai/ironclaw/pull/5642) adds a wiring-parity tripwire that will detect this gap (but doesn't fill it yet).

**3. [Issue #4108](https://github.com/nearai/ironclaw/issues/4108) — Nightly E2E failed (recurring)**
- **Severity:** ⚠️ **Medium** — persistent, last updated 2026-07-04 after the 2026-05-27 original creation; still failing
- **Status:** No active fix PR. The nightly E2E workflow failure merits investigation; this could be masking deeper regressions.

### Moderate / Notable

**4. [Issue #5641](https://github.com/nearai/ironclaw/issues/5641) — `EXPECTED_PRODUCTION_SHAPE` is hand-derived; no production-side shape accessor**
- **Severity:** ⚠️ **Low-Medium** — a maintenance burden; manual re-derivation of the shape literal is error-prone and requires re-derivation when the production literal changes.
- **Fix status:** No PR yet; the issue suggests adding a `--dump-shape` CLI flag.

**5. [Issue #5636](https://github.com/nearai/ironclaw/issues/5636) — CI job-level `if` skips block Railway deploys (“Wait for CI”)**
- **Severity:** ⚠️ **Low-Medium** — blocks deploys to `main` when an intentionally skipped job (like “No panics”) is in skipped state instead of passing
- **Fix status:** No PR yet; likely a CI configuration change to make the aggregate gate the sole deploy condition.

**6. [Issue #5638](https://github.com/nearai/ironclaw/issues/5638) — Flip integration-tier coverage from informational to ratchet**
- **Severity:** ⚠️ **Low** — enhancement; the coverage report exists but doesn't enforce minimums
- **Prerequisites:** Seed `tests/integration/coverage-exempt` and vendor-list must be finalized before flipping.

---

## Feature Requests & Roadmap Signals

### Likely in Next Version

1. **Slack Personal OAuth** — The 4-stack PR series (5643–5646) is progressing through CI: foundations (PR #5644) are open, the swap (PR #5645) is in review, and the rejection of legacy config (PR #5646) is ready. **This will land in the next release**, likely as v0.30.x.

2. **Legacy State Migration** — PR [#5627](https://github.com/nearai/ironclaw/pull/5627) already merged: the `ironclaw_reborn_migration` binary ships with the next release, enabling v1/engine-v2 → Reborn migration without silent data loss.

3. **Wiring-Parity Automation** — Issue [#5641](https://github.com/nearai/ironclaw/issues/5641) requests a `--dump-shape` CLI flag to eliminate hand-transcribed shape literals. If implemented, this would ship in the next minor release.

4. **Error Recoverability Enforcement** — PR [#5651](https://github.com/nearai/ironclaw/pull/5651) (static enforcement that failures surface) and PR [#5652](https://github.com/nearai/ironclaw/pull/5652) (`unused_must_use` deny) are both open and code-complete. These will likely land in the next release to harden error handling.

5. **Final-Answer Nudge for Interactive Runs** — PR [#5304](https://github.com/nearai/ironclaw/pull/5304) (enable final-answer nudge for interactive runs) has been open since June 26 and may merge in the next release.

### Predictions for Next Version (v0.30.0 or v0.29.x)
- Slack personal OAuth (replaces pairing codes)
- Legacy state migration tool
- Workspace-wide `unused_must_use` deny
- Final-answer nudge for interactive runs
- Wiring-parity tripwire (already on main via PR #5642)

---

## User Feedback Summary

Based on the issue and PR content, the following **real user pain points** are visible:

1. **Slack configuration friction** — Users must navigate pairing codes. The entire Slack OAuth stack (PRs #5643–#5646) is a direct response to this ergonomic complaint. The breaking change in PR #5646 (rejecting legacy `[slack]` fields) means operators **must** migrate their config files, but the OAuth flow is simpler end-to-end.

2. **CI deployment blocks** — Issue [#5636](https://github.com/nearai/ironclaw/issues/5636) describes an operational frustration: “Wait for CI” on Railway blocks deployments when an intentionally skipped job is in “skipped” state. This is a CI configuration pain point affecting the core team.

3. **Coverage regression invisibility** — Issue [#5638](https://github.com/nearai/ironclaw/issues/5638) notes that coverage drops are currently informational only. Teams cannot know if a PR degrades test coverage. Flipping to ratchet will give immediate feedback.

**Satisfaction signals:**
- PR [#5042](https://github.com/nearai/ironclaw/pull/5042) (fixing one-line tool-answer rejection) was authored by a `[new]` contributor, indicating an accessible onboarding experience.
- PR [#5642](https://github.com/nearai/ironclaw/pull/5642) (wiring-parity tripwire) received focused, zero-`src/`-change attention, showing a mature CI culture.

**Dissatisfaction signal:**
- Issue [#4108](https://github.com/nearai/ironclaw/issues/4108) (Nightly E2E failures) has been open since May 27 with no fix PR, suggesting the nightly E2E may be unstable or insufficiently triaged.

---

## Backlog Watch

### Long-Unanswered Important Items

1. **[Issue #4108](https://github.com/nearai/ironclaw/issues/4108) — Nightly E2E failed** (open since 2026-05-27, updated 2026-07-04)
   - **Priority:** ⚠️ **High** — recurring failure in a scheduled safety-net workflow
   - **Status:** 0 comments, no assignment, no linked PR
   - **Risk:** This may be masking deeper regressions. The nightly E2E has been failing for over a month; a root-cause triage is overdue.

2. **[PR #5550](https://github.com/nearai/ironclaw/pull/5550) — Dependabot bump: everything-else group with 13 updates** (open since 2026-07-02)
   - **Priority:** ⚠️ **Medium** — dependency hygiene
   - **Notable:** Bumps `agent-client-protocol` from 0.10.4 → 1.0.1 (a major version jump). This could introduce breaking changes if the protocol has evolved significantly.

3. **[PR #5304](https://github.com/nearai/ironclaw/pull/5304) — Enable final-answer nudge for interactive runs** (open since 2026-06-26)
   - **Priority:** ⚠️ **Medium** — user-facing quality-of-life improvement
   - **Status:** 0 comments, no assignment — this small change (XS size, experienced contributor) appears to be waiting for reviewer bandwidth.

4. **[Issue #5638](https://github.com/nearai/ironclaw/issues/5638) — Flip integration-tier coverage from informational to ratchet** (open since 2026-07-04)
   - **Priority:** ⚠️ **Medium** — CI hardening
   - **Prerequisites:** `coverage-exempt` and vendor-list seeding must be completed; no PR yet.

---

**Project Health Assessment:** ❖ **Positive** — high commit velocity, systematic approach to technical debt (wiring parity, error hardening), and a clear Slack OAuth roadmap. The main risk factors are the unresolved Nightly E2E failure (Issue #4108) and the 4-stack Slack OAuth PR series being 200+ files of high-risk, high-impact changes that must land without regression. The CI team is actively benchmarking and optimizing (PRs #5648, #5635), which should improve deployment reliability.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

Here is the LobsterAI project digest for **2026-07-05**.

---

## LobsterAI Project Digest – 2026-07-05

**Data Snapshot:** 1 open Issue updated, 3 PRs updated (2 merged/closed), 0 new releases.

### 1. Today's Overview
The project is in a **moderate maintenance phase** with no new releases but a solid focus on codebase cleanup and proxy infrastructure. Two pull requests were successfully merged, both authored by **fisherdaddy**, targeting agent identity management and system proxy propagation. Activity is low overall (only 1 stale issue updated in the last 24h), suggesting a slow development sprint or a team focus on internal stability. The single open issue (#1352) remains unresolved, indicating a known user-facing bug that has not yet been prioritized.

### 2. Releases
**None.** No new releases were published in the last 24 hours. The latest stable version is unchanged from previous periods.

### 3. Project Progress
Two PRs were merged today, advancing the agent and browser infrastructure:

- **[#2272 (Merged) – fix(agent): migrate legacy AGENTS.md identity blocks to IDENTITY.md**](https://github.com/netease-youdao/LobsterAI/pull/2272)  
  **Author:** fisherdaddy  
  **What changed:** A migration script that detects and removes legacy identity content from `AGENTS.md` files. This ensures per-agent identity no longer conflicts with the new managed `IDENTITY.md` system. Includes backup and safe-skip logic per agent.  
  **Impact:** Reduces configuration conflicts for multi-agent setups; improves data integrity.

- **[#2271 (Merged) – fix: propagate system proxy to managed browser**](https://github.com/netease-youdao/LobsterAI/pull/2271)  
  **Author:** fisherdaddy  
  **What changed:** Forces the managed browser (likely used for automation/rendering) to respect the system proxy settings.  
  **Impact:** Essential for users in corporate or restricted network environments; fixes connectivity issues when rendering or opening external content.

- **[#1350 (Open/Stale) – skills file generation blocks without feedback**](https://github.com/netease-youdao/LobsterAI/pull/1350)  
  **Author:** jimmy-xz  
  **Status:** Open, no comments, no maintainer response. This PR remains open with no activity since creation (2026-04-02).

### 4. Community Hot Topics
The community is quiet, with only one active discussion:

- **#1352 (OPEN) – Task dialog: attachment upload fails during task execution**  
  [Issue Link](https://github.com/netease-youdao/LobsterAI/issues/1352)  
  **Author:** devilszy  
  **Activity:** 1 comment, updated recently (2026-07-04)  
  **Analysis:** A clear user-facing bug where clicking the upload attachment button yields no response while a task is running. The one comment likely suggests this is a UI/state lock issue. Given the "stale" label and creation date (April 2026), this has been known for months without resolution. Users expect reliable file interaction during long-running tasks.

### 5. Bugs & Stability
Only one bug report is active, making severity assessment straightforward:

- **#1352 – Attachment upload unresponsive during task execution** (Medium)  
  **Severity:** Medium (blocks a core workflow: file uploads during task execution)  
  **Fix PR?** None. No associated PR exists.  
  **Workaround?** Unknown; likely requires finishing the task before uploading.  
  **Risk of regression:** Low.

**No new bugs, crashes, or regressions** were reported in the last 24 hours. The current bug is a known, unresolved legacy issue.

### 6. Feature Requests & Roadmap Signals
There are **no new feature requests** in the last 24 hours. However, the following signals from stale issues point to potential roadmap items:

- **Enhanced user feedback during agent operations** (implied by #1350) – Users want visible progress or intermediate state indicators when the agent is generating files or thinking. This could evolve into a "thinking status bar" or "live log display" feature.
- **Proxy/network reliability** (from #2271 merged today) – The proxy fix indicates a growing need for enterprise/corporate network compatibility. Expect more work on proxy authentication and proxy-per-profile settings.

**Prediction:** Next minor release (e.g., v1.x) could include a "user-facing task progress UI" based on the repeated frustration expressed in #1350 and #1352.

### 7. User Feedback Summary
- **Pain point:** Long-running tasks (file generation, attachment uploads) have poor or absent feedback. Users report "blocking with no error" and "no intermediate state display." This erodes trust and reduces productivity.
- **Use case:** Developers using the Skill-Creator agent to generate skill files locally expect real-time logs or progress bars.
- **Satisfaction:** Negative sentiment on task visibility; satisfaction likely higher for infrastructure fixes (proxy propagation) which solve networking problems silently.

### 8. Backlog Watch
Two items require maintainer attention:

1. **#1352 – Attachment upload bug** (Open, stale since April 2026, 1 comment, no maintainer response)  
   *Why watch:* Long-running known bug affecting a core input mechanism. No PR or assignee.  
   *Risk:* High – users can neither upload attachments during tasks nor get feedback on failure.

2. **#1350 – Skills generation blocking without progress feedback** (Open, stale since April 2026, no comments or maintainer participation)  
   *Why watch:* This is a PR, not just an issue, meaning a partial solution already exists but is stalled. Users explicitly compare the OpenClaw model version behavior unfavorably to the mainline.  
   *Risk:* Medium – blocks skill creation workflows for regular users.

**Recommendation:** The maintainer team should triage #1352 (assign severity, add a milestone) and either merge or provide a status update on PR #1350.

---

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

# CoPaw Project Digest — 2026-07-05

## 1. Today's Overview
CoPaw saw **moderate activity** over the past 24 hours with 11 issues updated and 3 pull requests submitted, though none were merged. The project remains in an **active development phase** with a clear focus on memory management, model compatibility, and user experience improvements. The 2.0 beta continues to generate community feedback, with eight open bugs and two closed issues reflecting ongoing stabilization work. No new releases were published today.

## 2. Releases
No new releases were published today. The latest available version remains QwenPaw `2.0.0b3` (beta) and stable `1.1.12`.

## 3. Project Progress
**No pull requests were merged or closed today.** Three PRs remain open:
- **PR #5777** *(feat: memory)* — Adds auto-memory turn state management to `BaseMemoryManager`, addressing the root cause of Issue #5775 (memory interval never triggers). This is the most actionable fix in progress.
- **PR #5598** *(feat: console)* — Adds LLM fallback configuration UI for agent and global model pages.
- **PR #5597** *(feat: backend)* — Implements per-agent and global LLM model fallback with safe retry boundaries.

Both fallback PRs (#5597, #5598) have been open since June 29 and show no recent commits, suggesting they may be awaiting review or additional testing.

## 4. Community Hot Topics
The most engaged items reflect **two distinct user communities** — 2.0 beta testers and stable-channel users:

| Issue/PR | Comments | Theme |
|----------|----------|-------|
| **#2865** (Open, 4 comments) | 4 | Feature: Custom agent names/avatars in chat |
| **#5775** (Open, 2 comments) | 2 | **Bug**: Auto-memory interval broken in 2.0b3 — *top stability concern* |
| **#5772** (Closed, 2 comments) | 2 | **Bug**: LM Studio model switching corrupts multimodal cache |
| **#5770** (Open, 2 comments) | 2 | Question/Encouragement: Community anticipating v2.0 |
| **#5773** (Open, 2 comments) | 2 | **Bug**: Memory search crashes OpenCode channel (Chinese) |
| **#5575** (Issue #5575? Not in data) | N/A | *(none identified outside data set)* |

**Underlying needs:**
- Users want **customization** (agent names/avatars — #2865) and **visibility** (timezone-correct cron state — #5779)
- The 2.0 beta community is **actively testing memory features** and finding critical regressions (#5775, #5778, #5776)
- **Channel-specific reliability** is a recurring pain point (OpenCode #5773, Google/Gemini #5774)

## 5. Bugs & Stability
**8 open bugs** were reported or updated today. Ranked by severity:

### 🔴 Critical / High Severity
1. **#5775** — `Auto-memory interval never triggers` (QwenPaw 2.0b3). MemoryMiddleware state lost per-request. **Fix PR #5777 exists** (adds per-session tracking). Most impactful bug in the data.
2. **#5778** — `Scroll compression loses context, causes off-track responses` (QwenPaw 2.0). Core context preservation failure. Also breaks `reasoning_content` + `auto_memory_search` combo. **No fix PR yet.**
3. **#5776** — `Stale pinned user message treated as active task` in long-lived IM sessions. A message from June 28 was still active on July 3. **No fix PR yet.**
4. **#5773** — Memory search crashes `OpenCode` channel with all DeepSeek models when `auto_memory_search_config.enabled = true`. Channel-specific, but blocks an entire provider path. **No fix PR yet.**

### 🟡 Medium Severity
5. **#5772** (Closed) — `_is_bad_request_or_media_error()` treats all HTTP 400 as media rejection, poisoning capability cache when LM Studio model is switching. **Closed** — likely resolved.
6. **#5774** — `Google Gemini channel reports errors` (QwenPaw 1.1.12post2) — endpoint format issue. **No fix PR yet.**
7. **#5779** — `Cron state API returns UTC time instead of job's configured timezone`. Dev infrastructure issue. **No fix PR yet.**

### 🟢 Low Severity (Log Spam/Quality)
8. **#5771** — `model_factory.py` debug logs incorrectly use `WARNING` level, causing log spam. Annoyance, not crash. **No fix PR yet.**

**Summary:** Three critical bugs (#5775, #5778, #5776) directly impact user experience in long sessions. Only #5775 has a corresponding fix in progress (PR #5777).

## 6. Feature Requests & Roadmap Signals
**Most-requested features from open issues:**
- **#2865** (235 days old): Custom agent names and avatars via URL — *oldest open feature request, 1 👍, low community traction*
- **#2830** (Closed today): System tray minimize + feedback entry point — *closed, not implemented*
- **#5770**: Community enthusiasm for v2.0 — not a feature request but a **strong signal** that users are watching the beta closely

**Roadmap predictions:**
- **Next v2.0 beta release** will likely include:
  - **Auto-memory state fix** (PR #5777 is active and directly targets #5775)
  - **LLM model fallback** (PRs #5597/#5598 — backend + UI, in review since June 29)
- **Stretch goals** from beta feedback: scroll compression redesign (#5778), stale-context cleanup (#5776)
- **Long-term**: Custom agent avatars (#2865) shows user interest in personalization but is very low-priority for 2.0 launch

## 7. User Feedback Summary
**Real pain points expressed by users:**

| User | Issue | Pain Point |
|------|-------|------------|
| howyoungchen | #5775, #5776 | Reliable memory persistence in long sessions — *core to AI assistant trust* |
| elain0205 | #5778 | "Model forgets what it was doing, like a different person" — *context loss destroys user confidence* |
| Cederys | #5773 | Channel-specific failures are confusing — "works one minute, breaks the next" |
| no-teasy | #5774 | Google channel errors break a major provider — *platform lock-in anxiety* |
| vipcys001-bot | #5770 | **Positive**: High anticipation for v2.0, community morale is good |
| quanrennsxsb | #5772 | Silent model behavior changes (images stripped without warning) — *trust-breaking* |
| CCkerber | #2830 | Desktop users want better background behavior (tray minimize) |
| feng183043996 | #5779 | Dev/ops users need correct timezone handling for cron jobs |

**Satisfaction signals:** The closed issues (#2830 suggestions acknowledged, #5772 fixed and closed) show maintainers are responsive. The "hope v2.0 amazes everyone" comment (#5770) reflects **positive anticipation** despite bugs.

## 8. Backlog Watch
Items needing maintainer attention:

| Issue | Age | Status | Risk |
|-------|-----|--------|------|
| **#2865** — Custom agent avatars | 93 days (opened Apr 3) | Open, no recent activity | 🟢 Low — niche request, likely post-v2.0 |
| **#5597** — LLM fallback (backend) | 6 days (Jun 29) | Open, no activity in 5 days | 🟡 Medium — valuable feature, stalled |
| **#5598** — LLM fallback (UI) | 6 days (Jun 29) | Open, no activity in 5 days | 🟡 Medium — UI counterpart to #5597 |
| **#5777** — Auto-memory state fix | 1 day (Jul 4) | Open, active (the newest PR) | 🔴 Needs review to close #5775 quickly |

**Flagged:** PR #5777 should be prioritized for review and merge — it directly resolves the highest-severity bug (#5775) affecting the 2.0 beta. The two fallback PRs (#5597/#5598) need a decision: merge or request updates before going stale.

---

*Data snapshot: 2026-07-05 00:00 UTC | CoPaw project health: 🟡 Active development with critical memory bugs being addressed.*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-07-05

## Today's Overview

ZeroClaw shows a high-activity day with **50 issues and 50 PRs updated** in the last 24 hours, though new merges are minimal (2 closed/merged PRs). The project is in a heavy development phase centered on the **goal mode implementation split** (tracker #8681) and the **upcoming v0.8.3 release**, with three active release trackers (#8360, #8071, #7314) coordinating work across providers, runtime execution, and WASM plugins. The open/active ratio is concerning at 39 open vs 11 closed issues, suggesting the team is pushing forward new features faster than closing out existing defects. A notable stacked PR series from contributor **vrurg** (PRs #8687, #8688, #8689) is landing the goal command admission and controller architecture across multiple crates simultaneously. No new releases were published today.

## Releases

**No new releases today.** The project appears to be in pre-release work toward v0.8.3, with trackers open for provider serialization (#8360), runtime execution (#8071), WASM plugins (#7314), and observability/CI/docs (#8073).

## Project Progress

**Merged/closed PRs (2):**
- Several issues were closed, including the critical **MCP tools missing from TUI** bug (#8193), the **Scheduled Jobs API 422** error (#6891), and the **context_compression dropping tool calls** for OpenAI-compatible providers (#6361) — all high-severity S1 blockers that appear to have been resolved.
- The **SOP audit silently no-op** bug (#6689) was also closed, indicating the SOP observability pipeline is now functional.

**Key feature advances (open PRs with activity):**
- **Goal mode implementation** (PRs #8687, #8688, #8689 by vrurg) — Adds goal controller, verifier, trusted goal tools, and channel `/goal` command admission. This is the largest feature landing this cycle.
- **OpenAI channel** (PR #8710 by titilambert) — New high-risk XL PR adding an OpenAI-compatible HTTP bridge for Home Assistant and other tools.
- **Visual SOP authoring** (PR #8590 by singlerider) — The largest PR this cycle with `size:XL`, adds SOP editor surfaces, channel fan-in, and tests. Still open and seeking beta testers.
- **Anthropic refusal fail-over** (PR #8721 by IftekharUddin) — New provider reliability improvement for Claude 4+ safety classifiers.
- **Context window usage bar** (PR #7946 by eugeneb50) — Adds ctx usage display to TUI, gateway chat, and CLI.

## Community Hot Topics

1. **[#8193] MCP tools/tool_search missing from TUI** (CLOSED, 15 comments) — Highest-activity issue. Two users reported MCP servers connect and expose tools via gateway, but TUI sessions don't receive them. **Closed today** — this was the most painful user-facing bug in the last two weeks.  
   https://github.com/zeroclaw-labs/zeroclaw/issues/8193

2. **[#6808] RFC: Work Lanes, Board Automation, and Label Cleanup** (OPEN, 13 comments) — A governance RFC now at revision 10, spanning 0.8.0-beta-1 through current 0.8.1. Proposes routing improvements without manual maintenance burden.  
   https://github.com/zeroclaw-labs/zeroclaw/issues/6808

3. **[#8681] Goal mode implementation split stack** (OPEN, 7 comments) — New tracker coordinating the split of goal-mode work into reviewable PRs (the #8687/#8688/#8689 series). Created just yesterday and already active.  
   https://github.com/zeroclaw-labs/zeroclaw/issues/8681

4. **[#6361] context_compression drops tool calls** (CLOSED, 5 comments) — S1 blocker for MiniMax and OpenAI-compatible providers. Multi-turn tool conversations were completely unusable. Resolved this cycle.  
   https://github.com/zeroclaw-labs/zeroclaw/issues/6361

**Trend analysis:** The community is most engaged around **tool visibility issues** (MCP tools not reaching TUI), **provider compatibility bugs** (MiniMax, vLLM, OpenRouter), and the **goal-mode feature** which multiple contributors are building simultaneously. The SOP visual editor PR (#8590) is explicitly calling for beta testers, indicating a push for real-world validation before v0.8.3 ships.

## Bugs & Stability

### Critical (S1 — workflow blocked)

| Issue | Component | Status | Fix PR? |
|-------|-----------|--------|---------|
| [#8193] MCP tools/tool_search missing from TUI | zerocode/tui, runtime, gateway | **CLOSED** | Resolved |
| [#6361] context_compression drops tool_calls entirely | provider (OpenAI-compatible) | **CLOSED** | Resolved |
| [#8675] Malformed native tool-call arguments → provider 400 → empty reply | provider (OpenAI/OpenRouter) | **OPEN** | None yet |
| [#8654] skill-review fork panics (out-of-range slice) → SIGSEGV | skills/review.rs | **OPEN** | None yet |

### High (S2 — degraded behavior)

| Issue | Component | Status | Fix PR? |
|-------|-----------|--------|---------|
| [#8678] advance_step has no run-status guard — SOP approval bypass | sop/engine | **OPEN** | None yet |
| [#8695] Cron jobs recall memory even when `uses_memory = false` | memory | **OPEN** | PR #8676 (adds CLI/tool exposure but may not fix root cause) |
| [#8615] Compatible provider silently deletes content via `<think>` tag stripping | provider | **OPEN** | None yet |
| [#8722] High-entropy detector redacts legitimate generated filenames | security/sandbox | **OPEN** | PR #8723 (fix proposed today by vrurg) |
| [#8664] ZeroCode code-block Copy includes Markdown fences | zerocode/tui | **OPEN** | None yet |
| [#8646] ZeroCode Logs detail hides event attributes | zerocode/tui | **OPEN** | None yet |
| [#8644] ZeroCode completes Code turn with no visible output | zerocode/tui | **OPEN** | None yet |

**Notable regressions:** The **#8654 skill-review panic** is a SIGSEGV-level crash (exit code 139 under `panic=abort`) triggered after tool-heavy turns. The **#8678 SOP approval bypass** allows a driver to skip approval gates via `sop_advance` — a security integrity issue though scoped to the run's driver.

**New bug today:** [#8722] — High-entropy detector misclassifying legitimate filenames. A fix PR (#8723 by vrurg) was opened the same day.

## Feature Requests & Roadmap Signals

1. **[#8719] SOP routing: false `when` should advance to next step** — User-requested behavior change for multi-phase SOPs where a loop condition failing should fall through to a finalize/review step rather than end the run. Likely for v0.8.3 as SOP features are in active development.  
   https://github.com/zeroclaw-labs/zeroclaw/issues/8719

2. **[#8720] Disable cachePoint for Bedrock Nova 2 Lite** — Support request to disable caching for Amazon Bedrock's Nova 2 Lite model. No existing config key exists.  
   https://github.com/zeroclaw-labs/zeroclaw/issues/8720

3. **[#8587] More SOP examples to syntax docs** — User requests better documentation examples for the SOP engine. Accepted with priority P3.  
   https://github.com/zeroclaw-labs/zeroclaw/issues/8587

4. **[#4832] Config option to disable LeakDetector high-entropy redaction** — Long-standing request (since March 2026) for a config toggle. Still open with no active PR.  
   https://github.com/zeroclaw-labs/zeroclaw/issues/4832

**Prediction:** SOP routing improvements (#8719), Bedrock caching toggle (#8720), and the high-entropy detector false-positive fix (#8722/PR #8723) are likely targets for v0.8.3 given current active development.

## User Feedback Summary

**Pain points surfacing today:**
- **Bedrock Nova 2 Lite caching errors** — User `ngamradt` reports intermittent caching errors with no config disable option (#8720).
- **SOP workflow limitations** — User `metalmon` reports that false `when` conditions end the run instead of falling through to the next step, preventing multi-phase SOPs (#8719).
- **Cron memory recall bug** — User `databillm` reports that `uses_memory = false` doesn't fully disable memory recall for scheduled jobs (#8695), with a fix PR (#8676) now open.
- **Leak detector false positives** — User `vrurg` reports legitimate filenames being redacted as high-entropy tokens (#8722), with a fix PR submitted same day (#8723).

**Positive signals:**
- MCP tool visibility (#8193) and Scheduled Jobs editing (#6891) bugs were closed, removing two major workflow blockers.
- The SOP editor PR (#8590) is openly recruiting beta testers, suggesting the team values real user feedback before release.

## Backlog Watch

1. **[#4832] Config option to disable LeakDetector high-entropy redaction** — **OPEN since March 27, 2026** (101 days). Accepted P2 with risk:high, but no PR assigned. A closely related bug (#8722) was filed today with a quick fix PR, but the broader config toggle remains unaddressed.  
   https://github.com/zeroclaw-labs/zeroclaw/issues/4832

2. **[#7497] OCI-Compliant Container Registries as Plugin Storage** — **OPEN since June 11, 2026** (24 days). A significant RFC proposing replacement of JSON index with OCI registries for WASM plugins. Only 3 comments and status:blocked. This architecture decision may be stalling the plugin program.  
   https://github.com/zeroclaw-labs/zeroclaw/issues/7497

3. **[#6808] Work Lanes and Label Cleanup RFC** — **OPEN since May 20, 2026** (46 days). Now at revision 10 and accepted, but rollout appears to be in progress slowly. The label taxonomy changes affect all issue triage.  
   https://github.com/zeroclaw-labs/zeroclaw/issues/6808

4. **[#6717] Integrate arch-review artifact into PR review session** — **OPEN since May 16, 2026** (50 days). A small `size:XS` PR with no maintainer feedback. Not critical but indicates PR review bottlenecks.  
   https://github.com/zeroclaw-labs/zeroclaw/pull/6717

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*