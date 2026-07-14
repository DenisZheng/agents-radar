# OpenClaw Ecosystem Digest 2026-07-07

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-07-07 01:59 UTC

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

# OpenClaw Project Digest — 2026-07-07

## Today's Overview

OpenClaw shows extremely high community engagement with **500 issues and 500 PRs updated in the last 24 hours**, indicating a highly active project. The ratio is constructive: 195 PRs were merged or closed (39%), while 403 issues remain open (80.6%). No new releases were published today, but the codebase is undergoing significant repair and feature work across the agent runtime, sandbox, multi-agent orchestration, and channel integrations. Project prioritization is evident from the **P0 "session hangs"** and **P1 regression bugs** now under active review. The **403 open issues** and **305 open PRs** suggest maintainer bandwidth may be strained, with many items needing product decisions, security reviews, or maintainer attention.

## Releases

*None in the last 24 hours.* The last published release was `v2026.6.11`, which introduced a regression related to reentrancy guards and reply session initialization (see Issue #98416 below).

## Project Progress

**195 PRs merged or closed today.** Key advancements include:

- **ACP recording correction** — PR #101245 fixes background turn tracking so cancelled turns are recorded as `cancelled` rather than `succeeded`, improving audit accuracy for agent coordination protocol.
- **WhatsApp direct-send timelock guard** — PR #101264 prevents WhatsApp direct sends during reachout timelocks, catching failures early instead of late indirect errors.
- **Health probe security hardening** — PR #100917 routes provider-local-service health probes through `fetchWithSsrFGuard`, preventing SSRF from misconfigured health URLs.
- **Session context preservation in WebChat** — PR #96391 solves session context loss on first send after page load, passing backing session ID through message context.
- **Malformed lsof handling** — PR #98505 ignores malformed PID records in listener diagnostics, preventing bogus busy-port reports.
- **Memory limit bounds** — Multiple PRs (#101259, #101261, #101260) add size-bounded response parsing across web-shared tools and QA-lab utilities.
- **CJK emphasis rendering fix** — PR #101230 fixes bold text with CJK punctuation immediately inside markdown delimiters, affecting Telegram and all shared-markdown channels.
- **SSH sandbox stream error handling** — PR #101031 fixes unhandled stream errors in SSH sandbox command execution.

## Community Hot Topics

### Most Active Issues (by comment count)

1. **[#75 — Linux/Windows Clawdbot Apps](https://openclaw/openclaw Issue #75)** — **110 comments**, 81 👍  
   *Top community demand.* The request for desktop apps beyond macOS continues to dominate. Users want feature parity with the macOS app on Linux and Windows. This is the single most-voted and most-discussed open issue, suggesting it's a critical platform gap.

2. **[#25592 — Text between tool calls leaks to messaging channels](https://openclaw/openclaw Issue #25592)** — 33 comments  
   A **Diamond Lobster**-rated P1 security/UX bug where internal agent processing output (error handling, acknowledgments) leaks to Slack, iMessage, etc. This is a significant UX concern that erodes trust in agent professionalism.

3. **[#9443 — Prebuilt Android APK releases (CLOSED)](https://openclaw/openclaw Issue #9443)** — 27 comments  
   Recently closed, indicating the project has addressed the request for Android companion app builds. Likely shipped with infrastructure for APK generation in releases.

4. **[#98416 — v2026.6.11 published dist missing reentrancy guard (CLOSED)](https://openclaw/openclaw Issue #98416)** — 20 comments  
   A critical P1 bug discovered in the latest release. The shutdown of a prior fix caused reply session initialization conflicts. Closed, suggesting a patch was hotfixed.

### Underlying Needs

The community is signaling three core needs:
- **Cross-platform parity** — Linux/Windows app support (Issue #75) and Android prebuilt releases (now closed).
- **Agent professionalism** — Internal processing should not leak to users (Issue #25592, #39847).
- **Stability in multi-agent and sandbox scenarios** — Race conditions, session corruption, and silent failures are recurring themes.

## Bugs & Stability

### Critical (P0)

| Issue | Summary | Status |
|-------|---------|--------|
| [#43661](https://openclaw/openclaw Issue #43661) | **Session hangs indefinitely when compaction times out** — causes repeated duplicate message sends every ~10 min with no recovery. Active user replies blocked. | Open, needs live repro |

### High Severity (P1)

| Issue | Summary | Fix PR? |
|-------|---------|---------|
| [#25592](https://openclaw/openclaw Issue #25592) | **Text between tool calls leaks to messaging channels** — Diamond Lobster rated, affects security and UX | No fix PR linked |
| [#22676](https://openclaw/openclaw Issue #22676) | **Signal daemon stop() race condition on SIGUSR1 restart** — orphaned processes, send failures | Linked PR open |
| [#29387](https://openclaw/openclaw Issue #29387) | **Bootstrap files in agentDir silently ignored** — only workspace files loaded | No fix PR |
| [#43367](https://openclaw/openclaw Issue #43367) | **Multi-agent orchestration unstable** — config overwrites, session-lock failures, detached child work | Linked PR open |
| [#31583](https://openclaw/openclaw Issue #31583) | **[Regression] `exec` tool does not inherit `skills.env`** — secrets cannot be injected into subprocesses | Linked PR open |
| [#43747](https://openclaw/openclaw Issue #43747) | **[Regression] Memory management chaos** — 3 users report inconsistent memory behavior | No fix PR |
| [#38327](https://openclaw/openclaw Issue #38327) | **[Regression] "Cannot convert undefined or null to object"** crash with Google Vertex/Gemini 3.1 | No fix PR |
| [#40611](https://openclaw/openclaw Issue #40611) | **Heartbeat drift fix (PR #39182) blocks Telegram** during active conversations | Linked PR open |
| [#41165](https://openclaw/openclaw Issue #41165) | **Telegram DMs still land in agent:main:main** — session pollution persists after fix attempt | Linked PR open |
| [#39847](https://openclaw/openclaw Issue #39847) | **Echo contamination** — internal metadata not stripped from outbound Discord delivery | Linked PR open |

### Notable Regressions

Three regressions stand out as concerning:
- **#31583** — `exec` tool env inheritance broken (P1, affects secret injection).
- **#43747** — Memory management behavior inconsistent across the same version.
- **#38327** — Gemini 3.1 provider crashes with null object error.

## Feature Requests & Roadmap Signals

### High Community Demand

1. **[#75 — Linux/Windows Desktop Apps](https://openclaw/openclaw Issue #75)** — 81 👍, 110 comments  
   *Prediction:* Likely targeted for next major release given sustained demand and platform expansion strategy.

2. **[#39604 — Private network fetch access](https://openclaw/openclaw Issue #39604)** — 11 👍  
   Opt-in `allowPrivateNetwork` for web_fetch tool. Indicates enterprise/self-hosted users need internal resource access.

3. **[#63829 — Per-agent memory-wiki vault configuration](https://openclaw/openclaw Issue #63829)** — 9 👍  
   Multi-agent teams need isolated knowledge wikis, not a shared global vault. Strong indicator of growing multi-agent deployments.

4. **[#42840 — MathJax/LaTeX in Control UI](https://openclaw/openclaw Issue #42840)** — 9 👍  
   Academic/scientific users want formula rendering. Low-implementation-cost quality-of-life improvement.

5. **[#37634 — Sandbox workspace writable with workspaceAccess=none](https://openclaw/openclaw Issue #37634)** — 7 👍  
   Current isolation is too strict — sandboxed sessions need write capabilities to their isolated workspace.

### Roadmap-Relevant RFCs

- **#42026 — Distributed Agent Runtime** — Splitting the monolithic gateway into control plane + agent runtime. Architectural shift, likely a vNext major feature.
- **#35203 — Multi-Agent Collaboration Enhancement** — Capability profiling, shared blackboard, layered memory, token governance. Indicates enterprise multi-agent is a strategic focus.
- **#43454 — Gateway lifecycle hooks** — Event-driven hooks for subagent completion, tool thresholds, turn completion. Would enable external observability.
- **#42475 — Per-agent cost budget enforcement** — Daily/monthly caps at the gateway level. High demand for cost governance.

## User Feedback Summary

### Pain Points

1. **Platform gaps** — Users on Linux/Windows feel second-class; iOS and Android are "simpler nodes" vs. full macOS app.
2. **Memory system chaos** — Three users (Issue #43747) report inconsistent memory behavior; the system is not predictable.
3. **Leaky agent internals** — Internal tool output, errors, and metadata are visible to users, damaging professional UX.
4. **Multi-agent unreliability** — Concurrent operations, session locks, and detached work make orchestration "unreliable in practice" (Issue #43367).
5. **Sandbox isolation UX friction** — Users want less restrictive sandbox defaults but can't easily configure them.

### Use Cases Emerged

- **Telegram Business bot integration** (Issue #20786) — enterprise communication platforms.
- **Feishu (Chinese enterprise messenger)** — multiple issues (#41744, #34528) from Asia-Pacific users.
- **Academic/scientific communication** — MathJax/LaTeX request indicates education and research adoption.
- **Multi-agent coding teams** — Parallel batch coding (Issue #43367), subagent orchestration with structured trajectories.

### Satisfaction Indicators

- Prebuilt Android APKs were delivered (Issue #9443 closed).
- The high volume of activity (500 issues/PRs/day) suggests a deeply engaged community.
- Many feature requests are RFC-quality with detailed proposals, indicating sophisticated power users building on OpenClaw.

## Backlog Watch

### High-Impact Items Needing Maintainer Attention

| Issue | Age | Impact | Status |
|-------|-----|--------|--------|
| [#75](https://openclaw/openclaw Issue #75) — Linux/Windows Apps | 6+ months (since Jan 2026) | Platform reach, 81 👍 | Needs product decision |
| [#25592](https://openclaw/openclaw Issue #25592) — Tool text leak | ~4.5 months | Security + UX, P1 | Needs product decision & security review |
| [#22676](https://openclaw/openclaw Issue #22676) — Signal daemon race | ~4.5 months | Crash loops, P1 | Linked PR open, needs review |
| [#29387](https://openclaw/openclaw Issue #29387) — Bootstrap file ignore | ~4 months | P1, breaks agent configuration | Needs product decision & security review |
| [#14785](https://openclaw/openclaw Issue #14785) — Tool schema token overhead | ~5 months | 3,500 tokens/session wasted | Needs product decision |
| [#43747](https://openclaw/openclaw Issue #43747) — Memory chaos (3 users) | ~4 months | P1 regression | Needs product decision |

### Items Stalled with Linked PRs Waiting for Review

- **#43367** — Multi-agent orchestration stability (P1, 13 comments)
- **#31583** — `exec` tool env regression (P1, 13 comments)
- **#40611** — Heartbeat fix blocking Telegram (P1, 6 comments)
- **#39847** — Discord echo contamination (P1, 6 comments)

**Overall Assessment:** OpenClaw is in a period of intense community-driven development with strong engagement. The project faces a growing backlog of P1 bugs and feature requests that risk becoming stale. The most urgent priorities are: (1) resolving the three high-severity P0/P1 memory and session corruption bugs, (2) addressing the tool text leak and metadata echo contamination for agent professionalism, and (3) making product decisions on long-standing high-vote items like Linux/Windows app support and sandbox writability. The community's sophisticated feature proposals (distributed runtime, multi-agent orchestration improvements, gateway lifecycle hooks) suggest the project is maturing toward enterprise-grade deployment scenarios.

---

## Cross-Ecosystem Comparison

Here is the cross-project comparison report based on the provided digest data.

---

## Cross-Project Ecosystem Comparison Report
**Date:** 2026-07-07
**Audience:** Technical Decision-Makers & Developers

### 1. Ecosystem Overview

The open-source personal AI assistant ecosystem is in a period of **intense, production-focused maturation**. The landscape is shifting from basic chatbot functionality toward enterprise-grade capabilities: multi-agent orchestration, robust security models, cross-platform deployment, and advanced observability. While projects like OpenClaw dominate in community scale and feature breadth, a wave of specialized forks (NanoClaw, ZeroClaw) and niche competitors (Hermes Agent, LobsterAI) are emerging to address specific pain points in security, sandboxing, and platform integration. The most critical signal from the community is a demand for **reliability and professionalism**—users are less interested in novel features than in fixing silent failures, preventing data leaks, and ensuring agents behave predictably in production workflows.

### 2. Activity Comparison

| Project | Issues (Open/Active) | PRs (Open/Active) | Release Today? | Community Health Signal |
| :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | High (403 open) | Very High (305 open) | No | **High engagement but strained.** Extreme volume (500 updated in 24h) with a large backlog of P1/P0 bugs. |
| **NanoBot** | Medium (39 open) | Very High (492 open) | No | **Audit-driven spike.** A 35-finding security audit inflated open count. Very high PR backlog suggests review bottleneck. |
| **Hermes Agent** | Medium (36 open) | Medium (38 open) | No | **Healthy iteration.** Active bug fixing and feature work with a manageable backlog. |
| **PicoClaw** | Low (4 updated) | Low (5 updated) | No | **Stable, focused.** Low activity but clear direction on Anthropic provider improvements. |
| **NanoClaw** | Low (2 open) | Medium (8 open) | No | **Systematic maintenance.** Active documentation and security policy updates. |
| **NullClaw** | None (0) | Low (1 open) | No | **Dormant.** No community engagement or development activity in 24h. |
| **IronClaw** | Medium (36 open) | High (37 open) | No | **Intense hardening phase.** Bug bash program driving quality improvements. |
| **LobsterAI** | None (0) | Low (1 open) | No | **Debt repayment sprint.** High merge velocity (12 PRs) but zero new issues. |
| **CoPaw (QwenPaw)** | Closed 9 | Very High (25 merged) | **Yes** (v1.1.12.post3) | **Stabilization push.** Focused on testing and patching regressions in pre-release v2.0.0. |
| **ZeroClaw** | High (47 open) | High (50 updated) | No | **Active feature development.** Major architectural work (goal-mode, realtime voice) underway. |
| **Moltis** | Low (0 new) | Low (2 open) | No | **Maintenance phase.** Quiet with key OAuth and Telegram fixes pending. |
| **TinyClaw / ZeptoClaw** | None (0) | None (0) | No | **Inactive.** |

**Key Takeaway:** The ecosystem is bifurcating. Flagship projects (OpenClaw, ZeroClaw, NanoBot) are overwhelmed by scale, while smaller, focused projects (Hermes, PicoClaw) maintain better triage hygiene.

### 3. OpenClaw's Position

OpenClaw remains the **central reference implementation and the largest community hub** within this ecosystem. Its advantages are clear:

- **Community Size:** With **500 issues/PRs updated in 24h**, its activity dwarfs all peers. It is the primary destination for feature requests and bug reports.
- **Feature Breadth:** OpenClaw is the most comprehensive platform, with native support for macOS, advanced sandboxing, multi-agent orchestration, and a wide array of channel integrations. It is the "standard" from which others fork.
- **Technical Approach:** Its architecture features a monolithic gateway combined with a complex agent runtime, supporting sophisticated workflows like SOPs (Standard Operating Procedures) and goal-mode.

**However, its position is challenged:**
- **Maintainer Strain:** With **403 open issues** and **305 open PRs**, the project is struggling with triage velocity. A critical P0 bug (session hangs) and several P1 regressions are unresolved. This creates room for leaner forks.
- **Platform Gap:** The community's #1 demand—Linux/Windows desktop apps—remains unfulfilled (Issue #75, 81 👍), a gap that Hermes Agent and others are exploiting.

**Comparison:**
- **vs. NanoBot:** OpenClaw is more feature-rich but less focused on security. NanoBot’s recent audit (35 findings) shows proactive security hardening that OpenClaw lacks.
- **vs. IronClaw:** OpenClaw is a general-purpose tool; IronClaw is more developer-centric, with a strong focus on CI/CD, testing, and infrastructure.
- **vs. Hermes Agent:** Hermes is more polished on desktop/Electron but has fewer total features than OpenClaw's core runtime.

### 4. Shared Technical Focus Areas

The following requirements are emerging across multiple projects, indicating ecosystem-wide priorities:

| Focus Area | Affected Projects (Signal Count) | Specific Community Need |
| :--- | :--- | :--- |
| **Multi-Agent Orchestration Reliability** | OpenClaw (High), NanoBot, IronClaw, ZeroClaw (High) | Concurrent operations fail, session locks break, child work detaches. Users need **stable, fault-tolerant coordination**. |
| **Security & Data Leakage** | OpenClaw (High), NanoBot (Critical), Hermes Agent, ZeroClaw | "Tool leaks" (OpenClaw #25592), plaintext API keys (NanoBot #4803), MCP auth bypass (Moltis). **Agent professionalism** is a universal demand. |
| **Cross-Platform Desktop Apps** | OpenClaw (#75, 81👍), Hermes Agent (#39308, #59915) | Linux and Windows users feel underserved. Hermes is fixing installer bugs; OpenClaw has a 6-month-old request. |
| **Memory & Context Management** | OpenClaw (P0 bug), NanoBot (DREAM fix), CoPaw (v2.0 regression), Hermes Agent | Users report "memory chaos" (OpenClaw #43747), context loss during compression (CoPaw), and cross-session leaks (Hermes). |
| **Channel Integration Parity** | OpenClaw (Telegram, Discord bugs), CoPaw (Feishu bug), ZeroClaw (Telegram, QQ, Discord), NanoBot (Mattermost) | Every major platform has bugs. Community demands reliable IM support, especially for enterprise channels (Feishu, Mattermost, Telegram). |
| **MCP (Model Context Protocol) Support** | ZeroClaw (TUI missing tools, P1 bug), PicoClaw (hardening), CoPaw, LobsterAI (transport fix) | MCP is becoming the standard for extending agent capabilities, but its integration is buggy and inconsistent. |
| **Cost Governance** | OpenClaw (#42475), IronClaw (#5739), LobsterAI (#2278, #2280) | Users want per-agent cost budgets, configurable context windows, and heartbeat toggles to control API spending. |
| **Observability / Audit Trails** | NanoClaw (#2967, merged), IronClaw (bug bash), OpenClaw (ACP recording fix) | Need for structured audit logs (NDJSON), better error reporting, and visibility into agent decision-making. |
| **SOP / Workflow Automation** | OpenClaw, ZeroClaw (#8681, #8747), Hermes Agent (#59907) | Advanced users want to define and execute structured, multi-step agent workflows with gates and approvals. |

### 5. Differentiation Analysis

While many projects share underlying code (being forks of OpenClaw or the OpenClaw/Claude lineage), their strategic focuses differ significantly:

| Project | Key Differentiation | Target User | Architectural Distinction |
| :--- | :--- | :--- | :--- |
| **OpenClaw** | **Comprehensive "reference" platform.** Broadest feature set, largest community. | Power users, integrators, researchers. | Monolithic gateway + complex agent runtime. Heavy on config. |
| **NanoBot** | **Security-audit driven.** Recent focus on fixing critical vulnerabilities (command injection, plaintext keys, resource limits). | Security-conscious developers, production deployments. | Python-based, strong on runtime security. |
| **Hermes Agent** | **Desktop-first experience.** Focused on macOS/Electron app polish, Codex integration, and IDE tooling. | Individual developers, coding workflows. | Electron-based desktop app with strong iMessage/Signal support. |
| **ZeroClaw** | **Rust-based performance & modern features.** Focus on realtime voice (Gemini Live), WASM plugins, and goal-mode orchestration. | Performance-sensitive users, early adopters of new AI features. | Rust-based core, WASM plugin system, realtime audio channel. |
| **IronClaw** | **Developer infrastructure & CI.** Heavy investment in testing, CI gates, and internal tooling. | Developer teams, enterprise deployment ops. | High test coverage, bug bash program, focus on CI reliability. |
| **CoPaw (QwenPaw)** | **Internationalization & Chinese ecosystem.** Strong Feishu/Lark integration and community. | Chinese-language users, enterprise teams in Asia. | Fork of OpenClaw with deep integrations for Chinese platforms. |
| **LobsterAI** | **UI/UX polish & Electron app.** Focus on Cowork UI, email skill, and XAI/Grok integration. | End-users seeking a polished, app-like experience. | Electron-based, strong UI customizability. |
| **NanoClaw** | **Systematic maintenance & governance.** Focus on documentation accuracy, security policies, and audit logs. | Newcomers and teams needing stable, well-documented deployments. | Prudent, slower-paced development with emphasis on quality. |
| **PicoClaw** | **Focused on Anthropic provider optimizations.** Improving caching and serialization for Claude API. | Users heavily reliant on the Anthropic API. | Lean codebase with specific fixes for anthropic-messages provider. |
| **Moltis** | **Steady, incremental improvements.** Focus on fixable infrastructure bugs (Docker, dependencies, MCP OAuth). | Self-hosters and Docker users. | Low-velocity, high-stability philosophy. |

### 6. Community Momentum & Maturity

**Tier 1: Rapid Iteration (High Risk/High Reward)**
- **OpenClaw:** Extreme velocity. Large community but fragile stability. Risk of **regression fatigue** among users.
- **NanoBot:** Spike in activity due to security audit. Momentum is high, but the **492 open PRs** signal a severe review bottleneck.
- **ZeroClaw:** Aggressive feature rollout (realtime voice, goal-mode, WASM). High innovation rate, but **blocking bugs** (MCP tools missing, Telegram broken) risk user churn.

**Tier 2: Healthy Stabilization (Solid, Predictable)**
- **IronClaw:** Strong "bug bash" culture. Good balance of feature work and quality assurance.
- **Hermes Agent:** Responsive maintainers. Active triage (7 duplicates closed). Good for users who want a **polished, less risky** experience.
- **CoPaw (QwenPaw):** Focused on stabilizing a major v2.0 pre-release. Patch releases are frequent and targeted.

**Tier 3: Maintenance Mode / Slow Development**
- **PicoClaw, NanoClaw, Moltis:** Low activity but stable. Ideal for users who need a reliable, less disruptive tool.
- **NullClaw, TinyClaw, ZeptoClaw:** **Inactive.** Should be considered abandoned unless new activity emerges.

### 7. Trend Signals

Based on community feedback aggregated across all projects, several clear industry trends are visible for AI agent developers:

1.  **The "Silent Failure" Crisis:** The #1 pain point is **agents that lie about success**. Users are frustrated by false "success" reports (IronClaw #5713, NanoClaw #2968, OpenClaw #25592). The industry must prioritize **error transparency and audit trails**.

2.  **Security is the New Moat:** As agents gain more capabilities (shell access, file system, web requests), security is no longer optional. The **plaintext API key** (NanoBot #4803) and **command injection** vulnerabilities will become untenable. Projects with proactive security audits (NanoBot) have a competitive advantage.

3.  **Multi-Agent is Hard:** The ecosystem is learning that multi-agent orchestration is not just about spawning agents; it's about **reliable coordination**. Session locks, detached child work, and config overwrites (OpenClaw #43367) are the technical debt of a feature shipped too early.

4.  **The Rise of Real-Time Voice:** Proposals for full-duplex, speech-to-speech channels (ZeroClaw #8780, NanoClaw #2960) signal a shift from text-based chat to **real-time, voice-native interaction**. This will require new architectural patterns (turn-taking, interrupt handling).

5.  **Tool Ecosystem Standardization (MCP):** The Model Context Protocol (MCP) is becoming a de facto standard, but its implementation is buggy. The demand for a **stable, reliable MCP client** is high across ZeroClaw, PicoClaw, and LobsterAI.

6.  **Demand for "Agent Professionalism":** The most requested feature is not a new capability, but **invisibility of internals**. Users want agents that don't show raw tool outputs, metadata, or error messages (OpenClaw #39847). This is a UX and trust requirement.

7.  **Platform Parity is a Table-Stakes Requirement:** The "Desktop app on macOS only" era is ending. Linux and Windows support is the #1 feature request for OpenClaw and a major pain point for Hermes Agent. **Cross-platform deployment is a non-negotiable requirement.**

**Value for Developers:** These trends indicate that the next wave of successful AI agents will be defined not by intelligence, but by **reliability, security, and invisibility**. The projects that invest heavily in these areas (IronClaw, NanoBot, Hermes Agent) are best positioned for enterprise adoption.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-07-07

## Today's Overview

NanoBot shows **very high activity** today, driven primarily by a comprehensive security and correctness audit. A single contributor (hamb1y) filed **35 findings** in a single issue (#4815), ranging from critical command injection vulnerabilities to code inefficiencies. While the project saw **8 merged/closed PRs** and **8 closed issues**, the open issue count is inflated to **39 active issues**, reflecting the audit's depth. A notable **500 PRs were updated** in the last 24 hours, but **492 remain open**, suggesting a substantial review backlog. No new releases were published today.

## Releases

**None.** No new versions were released today.

## Project Progress

**8 PRs were merged or closed today:**

- **PR #4673** (closed) — **`fix(dream): ground memory audit records in the real git diff`** — Fixes a critical data integrity issue where Dream consolidation logs could report changes that didn't match actual file diffs.
- **PR #4654** (closed) — **`fix(cli): print response text when streaming fails in interactive mode`** — Prevents silent answer loss when a provider returns a complete response without streaming callbacks.
- **PR #4459** (closed) — **`feat: add Mattermost channel support`** — New channel integration for Mattermost workspaces via WebSocket + REST API.
- **PR #4818** (closed) — **`fix(runtime): guard web_fetch signature against None URL`** — Fixes a false cache entry bug (`web_fetch:none`) that could block legitimate URL fetches.
- **PR #2060** (closed) — **`feat: shell tool: allow configurable specific paths when restrict_to_workspace=True`** — Adds `/dev/null` and other path exceptions for shell tool when workspace restriction is enabled.
- **PR #4765** (closed) — Bug fix for Nanobot object not supporting async context manager protocol.
- **PR #4619** (closed) — Enhancement for Feishu channel: sends system-level new session messages for visual separation.
- **PR #4655** (closed) — Fix for `read_file: Error: File not found: skills/long-goal/SKILL.md` in long-task scenarios.

**Key feature advancement:** The **Mattermost channel** (#4459) is a notable new integration for team collaboration use cases.

## Community Hot Topics

### Most Active Issues (by comment count)

1. **#4061** (6 comments, CLOSED) — `Bug: OpenAI-compatible text-format tool calls are not parsed into structured tool calls`  
   *[Issue](https://github.com/HKUDS/nanobot/issues/4061)* — Some providers emit tool calls as markup text instead of structured `tool_calls`. **Underlying need:** Better compatibility with non-standard OpenAI-compatible API providers.

2. **#4511** (4 comments, CLOSED) — `[bug] Windows: gateway --background option inconsistency`  
   *[Issue](https://github.com/HKUDS/nanobot/issues/4511)* — After restart, process state files don't match actual runtime. **Underlying need:** Robust process management on Windows.

3. **#3436** (3 comments, OPEN) — `[enhancement] Call external agent`  
   *[Issue](https://github.com/HKUDS/nanobot/issues/3436)* — Request for Nanobot to delegate work to external agent frameworks like OpenCode or Codex. **Underlying need:** Interoperability with the broader AI agent ecosystem; modular agent orchestration.

4. **#4544** (3 comments, CLOSED) — `[bug] [Windows] exec uses cmd.exe for single-line and PowerShell for multi-line`  
   *[Issue](https://github.com/HKUDS/nanobot/issues/4544)* — Inconsistent shell semantics on Windows between single-line and multi-line commands.

5. **#4637** (2 comments, OPEN) — `[bug] Telegram long message splits — trunks prior to final trunk cannot render`  
   *[Issue](https://github.com/HKUDS/nanobot/issues/4637)* — Long messages split by Telegram's API have rendering issues for earlier segments.

### Most Active Pull Requests

- **PR #4819** (OPEN) — `fix(memory): replace WeakValueDictionary with plain dict for consolidation locks`  
  *[PR](https://github.com/HKUDS/nanobot/pull/4819)* — Fixes a concurrency bug where GC could collect Lock objects, allowing duplicate consolidation operations.

- **PR #4771** (OPEN) — `Support document attachments in WebUI`  
  *[PR](https://github.com/HKUDS/nanobot/pull/4771)* — Extends WebUI beyond image attachments to support PDFs and other documents.

- **PR #4811** (OPEN) — `fix(runner): log suppressed prepare_call exceptions instead of silently swallowing`  
  *[PR](https://github.com/HKUDS/nanobot/pull/4811)* — Changes silent exception swallowing to logged warnings for tool preparation failures.

## Bugs & Stability

### Critical
- **#4815** (OPEN) — **Audit summary: 35 security/bug/refactor findings**  
  *[Issue](https://github.com/HKUDS/nanobot/issues/4815)* — Includes command injection, path escape, auth bypass, deserialization/eval vulnerabilities. **No fix PRs yet for most items.**
- **#4803** (OPEN) — **API keys stored as plaintext in config.json** — `repr=False` but not `exclude=True`; keys leak in serialization. **Fix PR: None yet.**
- **#4796** (OPEN) — **`restrict_to_workspace` defaults to False** — Full filesystem exposure by default. **Fix PR: None yet.** (PR #2060 addresses a related path exception but not the default).

### High
- **#4795** (OPEN) — **Streaming LLM calls bypass wall-clock timeout entirely** — `outer_timeout_s = None` for streaming; indefinite resource consumption possible. **Fix PR: None yet.**
- **#4797** (OPEN) — **No resource limits on shell subprocesses** — No ulimit, cgroups, CPU/memory caps. **Fix PR: None yet.**
- **#4798** (OPEN) — **Concurrent file writes from different sessions not serialized** — File corruption risk. **Fix PR: None yet.**
- **#4804** (OPEN) — **Leaked CancelledError silently swallowed in main agent loop** — MCP AnyIO interaction can drop iterations. **Fix PR: #4814** (OPEN).
- **#4800** (OPEN) — **`.strip()` on potentially list-form msg.content crashes on multimodal messages** — AttributeError risk. **Fix PR: #4813** (OPEN).
- **#4805** (OPEN) — **`suppress(Exception)` on prepare_call silently swallows tool validation errors** — Tools may proceed unprepared. **Fix PR: #4811** (OPEN).
- **#4801** (OPEN) — **Unprotected `message['role']` dict access — KeyError** on malformed session entries. **Fix PR: #4812** (OPEN).
- **#4799** (OPEN) — **External lookup signature creates false entry for None URLs** — Blocks subsequent fetches with `web_fetch:none` cache entry. **Fix PR: #4818** (CLOSED, already merged).
- **#4802** (OPEN) — **Token budget returns spurious 128 when context window is disabled (0)** — Wasteful but not corrupting. **Fix PR: #4817** (OPEN).
- **#4794** (OPEN) — **Exec sessions have no shutdown cleanup** — Orphaned child processes. **Fix PR: None yet.**
- **#4793** (OPEN) — **Global ExecSessionManager singleton shared across all agent loops** — Cross-session data visibility. **Fix PR: None yet.**
- **#4792** (OPEN) — **`/stop` silently discards pending queue messages** — Permanent message loss. **Fix PR: None yet.**
- **#4791** (OPEN) — **No channel-level message rate limiting** — Any paired user can flood the agent. **Fix PR: None yet.**

### Medium/Low
- **#4544** (CLOSED) — Windows exec shell inconsistency (fixed).
- **#4637** (OPEN) — Telegram long message rendering (no fix PR).
- **#4765** (CLOSED) — Async context manager protocol bug (fixed).
- **#4655** (CLOSED) — File not found in long-goal skill (fixed).

## Feature Requests & Roadmap Signals

### Strong Community Interest
1. **#3436** (OPEN) — **Call external agent** — Users want Nanobot to interoperate with OpenCode/Codex. This aligns with a trend toward **multi-agent orchestration**. *Likelihood for next version: Medium* — significant architectural change.
2. **#4771** (OPEN) — **Support document attachments in WebUI** — Extending beyond images to PDFs. *Likelihood: High* — PR already active.
3. **#4459** (CLOSED) — **Mattermost channel** — Recently merged, expanding enterprise team collaboration. *Already shipped.*

### Additional Signals
- **#4689** (OPEN) — **Surface OAuth status and expiry warnings** — Provider UX improvement for OAuth token management.
- **#4145** (OPEN) — **Weather Skill** — Community-contributed example skill, pending review.
- **#1290** (OPEN) — **fix(heartbeat): restore HEARTBEAT_OK_TOKEN and legacy callback support** — Stale PR from February, still open.

## User Feedback Summary

### Pain Points
1. **Windows support inconsistencies** — Multiple issues (#4511, #4544) highlight Windows as a second-class platform with process management and shell semantics issues. These have been addressed in recent fixes.
2. **Telegram message splitting** (#4637) — Long agent responses break visually, suggesting the channel adapter needs smarter message chunking.
3. **Opaque errors** — Users report silent failures (#4765 async context, #4655 file not found in long-goal) which the audit findings (#4805, #4804) confirm as systemic.
4. **Configuration security** — API keys stored in plaintext is a significant trust issue for production deployments (#4803).

### Satisfaction Signals
- **Mattermost integration** (#4459) was merged, addressing enterprise demand.
- **Document attachments** (#4771) are in progress, responding to WebUI feature requests.
- **Audit transparency** — The community may view the 35-finding audit as a sign of project maturity and active quality efforts.

## Backlog Watch

### Issues Needing Maintainer Attention

| Issue | Created | Days Open | Summary |
|-------|---------|-----------|---------|
| **#3436** | 2026-04-25 | **73** | Call external agent — significant architectural feature request with growing community interest |
| **#1290** (PR) | 2026-02-27 | **130** | Heartbeat fix — extremely stale PR with conflicts, may need closure or rebase |
| **#4145** (PR) | 2026-06-01 | **36** | Weather Skill — community contribution pending review |
| **#4689** (PR) | 2026-07-03 | **4** | OAuth status UX — could improve provider reliability perception |
| **#4671** (PR) | 2026-07-02 | **5** | SSRF fix with DNS pinning — security-sensitive, medium priority |

### Concerning Patterns
- The **492 open PRs** out of 500 updated in 24h suggests a severe review bottleneck. Many may be draft/stale PRs, but the ratio indicates maintainers cannot keep pace with contributions.
- The **35 audit findings** (#4815) represent the largest single quality intervention in the project's recent history. While beneficial, the sheer volume of open issues (39 active) may overwhelm maintainers and delay critical fixes (e.g., plaintext API keys, no rate limiting, orphaned processes).
- **Critical security findings have no fix PRs yet** (plaintext keys at #4803, full filesystem exposure at #4796). This is a **high-risk gap** for production users.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-07-07

## 1. Today's Overview

Hermes Agent is experiencing a **burst of community activity** with 50 issues and 50 PRs updated in the last 24 hours, signaling heavy testing and deployment stress. The project shows a healthy mix of bug fixes, feature contributions, and active user feedback — 36 open issues and 38 open PRs indicate sustained development momentum. Key themes today include **cross-session data leaks**, **Python 3.14 compatibility**, and **permission/security hardening**. No new releases were published today.

## 2. Releases

*No new releases published in the last 24 hours.* The latest release remains the prior version at `v0.18.0`. No migration notes or breaking changes to report.

## 3. Project Progress

**12 PRs were merged/closed today**, representing significant forward motion:

- **Bug Fixes**: 
  - [#41134](https://github.com/NousResearch/hermes-agent/pull/41134) — Codex gpt-5.5 autoraise now acts as a floor (never reduces user's configured threshold)
  - [#59202](https://github.com/NousResearch/hermes-agent/issues/59202) — Telegram gateway `connect()` hang on container boot fixed
  - [#39308](https://github.com/NousResearch/hermes-agent/issues/39308) — Windows Desktop installer failure with spaces in profile path resolved
  - [#20832](https://github.com/NousResearch/hermes-agent/issues/20832) — Auxiliary Copilot token refresh after IDE token expiry fixed
  - [#23670](https://github.com/NousResearch/hermes-agent/issues/23670) — Preflight compression now gracefully falls back instead of surfacing Codex OAuth 401

- **Deduplication/Consolidation**: Multiple issues about repeated Codex gpt-5.5 autoraise notices were closed as duplicates ([#54432](https://github.com/NousResearch/hermes-agent/issues/54432), [#48621](https://github.com/NousResearch/hermes-agent/issues/48621), [#54915](https://github.com/NousResearch/hermes-agent/issues/54915), [#55572](https://github.com/NousResearch/hermes-agent/issues/55572), [#46786](https://github.com/NousResearch/hermes-agent/issues/46786), [#47241](https://github.com/NousResearch/hermes-agent/issues/47241), [#42187](https://github.com/NousResearch/hermes-agent/issues/42187))

- **New Capabilities** (open but active): 
  - [#59907](https://github.com/NousResearch/hermes-agent/pull/59907) — Dynamic-workflow orchestration skill re-landed for review
  - [#58126](https://github.com/NousResearch/hermes-agent/pull/58126) — Stateless MCP HTTP client path added

## 4. Community Hot Topics

| Item | Type | Comments | 👍 | Link |
|------|------|----------|-----|------|
| Gateway RBAC permissions | Feature | 11 | 6 | [#527](https://github.com/NousResearch/hermes-agent/issues/527) |
| Photon iMessage RST_STREAM failure | Bug | 6 | 0 | [#55416](https://github.com/NousResearch/hermes-agent/issues/55416) |
| Google-antigravity P2 integration issues | Bug | 5 | 0 | [#50530](https://github.com/NousResearch/hermes-agent/issues/50530) |
| WhatsApp npm install timeout | Bug | 5 | 3 | [#14980](https://github.com/NousResearch/hermes-agent/issues/14980) |
| Desktop PageUp layout break | Bug | 4 | 2 | [#49978](https://github.com/NousResearch/hermes-agent/issues/49978) |
| Codex autoraise notice UX (multiple closed duplicates) | UX | 10+ total | 17+ | [#42187](https://github.com/NousResearch/hermes-agent/issues/42187) |

**Analysis**: The community's top concern is **authorization granularity** — users want Role-Based Access Control (RBAC) for gateway platforms, indicating Hermes is being deployed in multi-user environments. The **Codex gpt-5.5 notice duplication** (#42187, #47241, #46786, #54432 — all closed) shows responsive maintainers consolidating user feedback on UX issues. Several iMessage and messaging reliability bugs (#55416, #59202) reflect production deployment stress.

## 5. Bugs & Stability

### Critical (P1) — No critical bugs open
### High (P2)

- **#59305** — [Desktop] Cross-tab message leaking — messages from Tab A appear in Tab B. *Status: needs-repro.*
- **#50530** — Google-antigravity integration: sub-agent crashes, concurrent disconnects, 400 errors. *Status: Open, high-impact.*
- **#47475** — Messages leaking between conversation sessions (xiaomi provider). *Status: needs-repro.*
- **#58498** — Desktop ignores OpenAI Codex provider config, routes through Nous Portal instead. *Status: Open.*
- **#52401** — Desktop macOS: non-default profile shows data from default profile (cross-profile leak). *Status: Open.*
- **#59896** — `DaemonThreadPoolExecutor` breaks on Python 3.14 — this is a compatibility issue blocking early adopters on newest Python. *Status: Open duplicate.*

### Medium (P3)

- **#59762** — `kanban_complete` goal-mode judge gate never rejects (unpack error caught by fail-open). *Status: Open.*
- **#59202** — (closed) Telegram gateway connect() hang at boot — *fixed.*
- **#49978** — Desktop PageUp breaks layout — *Open, documented.*

### Fix PRs Published Today

- [#59840](https://github.com/NousResearch/hermes-agent/pull/59840) — Harden subprocess env handling (scrub secrets, isolate browser sessions)
- [#59918](https://github.com/NousResearch/hermes-agent/pull/59918) — Surface blocked AGENTS.md warning to users
- [#59912](https://github.com/NousResearch/hermes-agent/pull/59912) — Fix model-switch: merge configured models with live discovery instead of replacing
- [#59913](https://github.com/NousResearch/hermes-agent/pull/59913) — Raise Python ceiling to `<3.15` for Python 3.14 support
- [#59915](https://github.com/NousResearch/hermes-agent/pull/59915) — Add macOS Contacts entitlements for desktop app

## 6. Feature Requests & Roadmap Signals

### Likely in Next Release

1. **Gateway RBAC (Roles/Permissions)** — [#527](https://github.com/NousResearch/hermes-agent/issues/527) has 11 comments and 6 upvotes. The community clearly needs multi-tier access (Owner/Admin/User/Guest). *Prediction: High priority for next minor release.*

2. **Python 3.14 Support** — [#59896](https://github.com/NousResearch/hermes-agent/issues/59896) and PR [#59913](https://github.com/NousResearch/hermes-agent/pull/59913) directly address this. With Rust-backed dependencies shipping `cp314` wheels, the path is clear.

3. **Dynamic-workflow orchestration skill** — PR [#59907](https://github.com/NousResearch/hermes-agent/pull/59907) re-lands a previously reverted feature. This signals maintainer commitment to workflow automation.

### On the Horizon

- **RPM-based pre-emptive throttling** — [#7489](https://github.com/NousResearch/hermes-agent/issues/7489) (2 comments, 5 👍) requests pre-emptive rate limiting using `x-ratelimit` headers from Anthropic/OpenAI/OpenRouter.
- **Pre-turn memory health hook** — [#25061](https://github.com/NousResearch/hermes-agent/issues/25061) would make memory compaction rules reliable (3 comments).
- **`hermes skills lint` command** — [#37352](https://github.com/NousResearch/hermes-agent/issues/37352) would provide structured SKILL.md validation (3 comments).
- **Stateless MCP HTTP client** — PR [#58126](https://github.com/NousResearch/hermes-agent/pull/58126) adds an opt-in stateless path for MCP protocol 2026-07-28.
- **IMAP username override** — [#12232](https://github.com/NousResearch/hermes-agent/issues/12232) requests non-email IMAP usernames.

## 7. User Feedback Summary

### Pain Points (High Signal)

1. **Message leaks across sessions/tabs** — Reported in multiple issues (#59305 Desktop, #47475 Xiaomi, #52401 cross-profile). Users relying on Hermes for concurrent conversations find their context corrupted. *Severe trust impact.*

2. **Codex gpt-5.5 UX spam** — Despite multiple fixes, users report the compaction notice appearing on every message (7+ duplicate issues closed today). While maintainers are responsive, this suggests a persistent session-level idempotency problem.

3. **iMessage/Photon unreliability** — [#55416](https://github.com/NousResearch/hermes-agent/issues/55416) describes a complete service outage with `RST_STREAM code 2` — the sidecar stays alive but the stream is dead. This is a **core reliability issue** for users depending on iMessage integration.

4. **Windows/macOS installer friction** — Profile paths with spaces (#39308, *closed*), missing Contacts entitlements (#59915, *fix PR published*), and Electron-specific bugs (#40069, *closed*) indicate desktop packaging is still maturing.

### Satisfaction Signals

- High 👍 counts on Codex-related improvement issues (#42187 had 10 👍) show users appreciate proactive maintainers addressing UX polish.
- Active PR submissions from community members (ai-ag2026, kyssta-exe, jaredzimmerman, etc.) indicate a healthy contributor base.
- Users reporting duplicate issues about Codex notices are being handled promptly (7 closed today), signaling good triage processes.

## 8. Backlog Watch

### Critical Attention Needed

- **#50530** (June 22) — Google-antigravity P2 integration bugs remain open for 15 days with 5 comments but no assigned fix. Core functionality impaired for Gemini users.
- **#14980** (April 24) — WhatsApp npm install timeout is **74 days old** with 5 comments and 3 upvotes. This severely impacts Docker/NAS users (Unraid, etc.) and lacks a fix.
- **#7489** (April 11) — RPM throttling feature request is **87 days old** with 5 👍 but no maintainer response. This would prevent expensive 429 retry loops.
- **#37338** (June 2) — Skill metadata audit found broken references across 8+ built-in skills. Automated audit catches issues but no one is fixing them.

### Stale PRs

- **#57019** (July 2, 5 days) — Prompt prefix warmer for local backends. No maintainer review yet.
- **#58847** (July 5, 2 days) — Browser subprocess lifecycle isolation. No maintainer review yet.
- **#58849** (July 5, 2 days) — Auxiliary provider output normalization. No maintainer review yet.

### Recommendations

1. Prioritize a fix for **#50530** (Google-antigravity P2 bugs) given Gemini provider importance.
2. Address **#14980** (WhatsApp npm timeout) — a 74-day wait for Docker users is hurting adoption.
3. Respond to **#7489** (RPM throttling) to show community that feature requests are being triaged.
4. Review the 38 open PRs — several critical hardening fixes (#59840, #59912, #59915) are awaiting approval.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

Here is the project digest for PicoClaw based on the provided data for **2026-07-07**.

---

# PicoClaw Project Digest – 2026-07-07

## 1. Today's Overview
Project activity is moderate with a clear focus on **Anthropic provider reliability and caching**—the two most substantive items of the day (PR #3228, Issue #3229) both target the `anthropic-messages` provider. Four issues and five PRs were updated in the last 24 hours, but only one PR (#3227) was merged/closed, indicating a slight backlog in merging. The maintainers appear responsive to bug reports, as a critical serialization bug (PR #3227) was identified and fixed the same day it was filed. No new releases were cut, suggesting the team is batching fixes for a future version.

## 2. Releases
**None.** No new releases were published in the last 24 hours.

## 3. Project Progress
One pull request was merged, fixing a high-impact data integrity bug:

- **[CLOSED] PR #3227** – fix(providers): resolve tool_use name/args from Function on reloaded history  
  *by AayushGupta16*  
  **Impact:** Both Anthropic providers (`anthropic_messages` and the SDK-based `anthropic`) lost `ToolCall.Name` and `ToolCall.Arguments` after chat history was serialized and reloaded (those fields were tagged `json:"-"`). This caused replayed tool-use blocks to be empty or malformed. The fix wires those fields through the `Function` wrapper.  
  [View PR](https://github.com/sipeed/picoclaw/pull/3227)

## 4. Community Hot Topics
The most active discussion centers on **Anthropic prompt caching**:

- **Issue #2191 [CLOSED]** – "[BUG] anthropic_messages provider ignores SystemParts, breaks Anthropic prompt caching"  
  *Updated 2026-07-06, 4 comments*  
  The root of the caching problem: the provider flattens system messages to a single string, losing per-block `cache_control` markers. This issue was closed today, likely as a result of the new PR.  
  [View Issue](https://github.com/sipeed/picoclaw/issues/2191)

- **Issue #3229 [OPEN]** – "Proposal: rolling conversation cache breakpoints for anthropic-messages + keeping volatile runtime context out of the cached prefix"  
  *Author: AayushGupta16, 0 comments but 3 related PRs*  
  This proposal builds on the cache_control fix (PR #3228) and identifies a deeper need: in agentic loops, the conversation history dominates token usage, and users want flexible breakpoints to cache long prefixes while excluding volatile runtime context.  
  [View Issue](https://github.com/sipeed/picoclaw/issues/3229)

## 5. Bugs & Stability
Two bugs were reported today, one already with a fix PR in progress:

| Severity | Issue | Description | Fix PR? |
|----------|-------|-------------|---------|
| 🔴 High | #3230 | **Gemini API via OpenAI compat format returns `missing thought_signature` error** when tool use is sent. Affects versions 0.2.9–0.3.1. The `thought_signature` field is required by Gemini but absent from the OpenAI-format translation. | None yet |
| 🟡 Medium | #3226 | **write_file tool coaching destructive overwrite** – the tool’s overwrite guard text explicitly encouraged the model to replace the file, which led to unintended data loss. | Open PR #3226 (not yet merged) |

## 6. Feature Requests & Roadmap Signals
Two forward-looking requests emerged today:

1. **Rolling conversation cache breakpoints (Issue #3229)** – AayushGupta16 proposes that the `anthropic-messages` provider should allow configurable cache breakpoints on conversation history, not just the system prompt. This is likely to land in the next release, given that the same author already submitted the foundational cache_control fix (PR #3228).

2. **SearXNG BasicAuth support (Issue #3231)** – User oKatTjC requests that the SearXNG search tool support `basicauth` via request headers instead of URL-embedded credentials. This is a small ergonomic improvement but indicates growing use of self-hosted search backends.

3. **Remote Pico WebSocket mode (PR #3118)** – Now a month old, this PR adds `picoclaw agent --remote ws://...` mode. It hasn’t been merged, but it signals a roadmap move toward distributed or headless agent operation.

## 7. User Feedback Summary
Two pain points are clear from today’s data:

- **Anthropic caching is broken out-of-the-box** – The `anthropic-messages` provider has been silently discarding cache_control markers since at least March 2026 (Issue #2191). Users explicitly building cache-aware prompts on this provider got 0% cache hits. The fix (#3228) is under review.
- **Tool-use serialization is fragile** – The `json:"-"` tag on `ToolCall.Name`/`Arguments` meant that any round-trip through session history silently corrupted tool calls. This was caught by a user (AayushGupta16) who also submitted the fix, indicating advanced users are encountering these bugs in production-like loops.

Overall, sentiment appears constructive: users are submitting detailed bug reports and accompanying fix PRs, suggesting an engaged technical community.

## 8. Backlog Watch
Two long-running items remain unmerged:

- **PR #3118** – "Add remote Pico WebSocket mode" *(open since 2026-06-12, 24 days)*  
  *Author: jp39* – A significant feature addition that would enable running the agent over a WebSocket connection. No recent maintainer activity.  
  [View PR](https://github.com/sipeed/picoclaw/pull/3118)

- **PR #3115** – "Fix inline data URL media extraction for generic tool output" *(open since 2026-06-12, 24 days)*  
  *Author: jp39* – Fixes a corruption bug where base64-encoded data embedded in tool output text is incorrectly parsed as media attachments. No updates from maintainers.  
  [View PR](https://github.com/sipeed/picoclaw/pull/3115)

Both PRs were created by the same author on the same day and have not received maintainer review. They represent a meaningful gap in session history handling and remote connectivity that, if left unattended, could frustrate advanced users.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-07-07

## Today's Overview

NanoClaw continues to show strong development momentum with **10 pull requests updated in the last 24 hours** (8 open, 2 closed/merged), alongside **3 issues** (2 open, 1 closed). The project's maintainers are executing a **systematic documentation refresh sweep** across multiple PRs (#2961–#2964, #2962, #2963), indicating active codebase stabilization and alignment efforts. The closed PR #2967 introduces an opt-in local audit log—a significant new observability feature. However, a **medium-severity silent failure bug** (#2968) around MCP server connectivity was surfaced today without an existing fix, requiring attention. No new releases were published. Overall, the project is in a **healthy, active development phase** with a clear focus on documentation accuracy, security policy maturation, and agent-runner reliability improvements.

---

## Releases

**None** this period. The latest release remains v2.1.38 (referenced across several documentation PRs as the baseline for verification).

---

## Project Progress

**Merged/Closed PRs (2 total):**

- **#2967 [CLOSED] — feat: opt-in local audit log (AUDIT_ENABLED)**  
  Authored by `moshe-nanoco`. Adds structured NDJSON-based audit logging to `data/audit/`, with `ncl audit list` read-back and a post-write hook registry for future in-process exporters. Surfaces every `ncl` command across both transports. This is a significant **observability improvement** that addresses enterprise compliance and debugging needs.  
  [GitHub Link](https://github.com/nanocoai/nanoclaw/pull/2967)

- **#16 [CLOSED] — Escape special regex characters in assistant name trigger pattern**  
  Authored by `gavrielc` (from Feb 2026, closed today). Fixes a bug where special regex characters in `ASSISTANT_NAME` could break trigger pattern matching. A **correctness fix** for the agent runner's trigger system.  
  [GitHub Link](https://github.com/nanocoai/nanoclaw/pull/16)

**Open PRs advancing features (not yet merged):**

- **#2954** — Phase-1 security reporting & triage policy (SECURITY.md, triage framework). Signals **governance maturation**.  
  [GitHub Link](https://github.com/nanocoai/nanoclaw/pull/2954)

- **#2958** — Teams-CLI-first credentials flow in SSF directive grammar for `add-teams` skill. **Developer experience improvement** replacing a 7-step portal walkthrough.  
  [GitHub Link](https://github.com/nanocoai/nanoclaw/pull/2958)

---

## Community Hot Topics

**Most Active Issue:**

- **#2960 [CLOSED] — Proposal: Live Zoom voice agent + K-ai KB integration**  
  Authored by `vishalsachdev`. 1 comment, but notable for its scope: proposes Zoom RTMS integration, wake phrase ("Hey K-ai...") activation, Azure OpenAI Realtime API for voice, and full meeting transcription into K-ai's action-item extraction. This is a **high-value enterprise integration** that could unlock real-time meeting analytics.  
  [GitHub Link](https://github.com/nanocoai/nanoclaw/issues/2960)

**Most Active PR (by updates and scope):**

- **#2961 — docs: fix stale claims across README, CONTRIBUTING, CLAUDE.md and operational docs**  
  Authored by `glifocat`. Part of the ongoing documentation staleness sweep. Mechanical factual fixes including removal of shipped skills (`/add-signal`, `/add-matrix`), API endpoint corrections, and TUI prompt verbatim fixes. Represents **systematic maintenance** rather than community debate.  
  [GitHub Link](https://github.com/nanocoai/nanoclaw/pull/2961)

**Underlying Need Analysis:** The Zoom integration proposal (#2960) reveals demand for **real-time voice + knowledge base convergence**, suggesting users want NanoClaw agents to participate in live meetings, not just chat interfaces. The documentation sweep (#2961–#2964) indirectly reflects community frustration with **outdated docs causing setup friction**, a common pain point in fast-moving open-source projects.

---

## Bugs & Stability

**Medium Severity — Active, No Fix PR Exists**

- **#2968 [OPEN] — MCP server spawn/connect failures are silent**  
  Reported by `explorerleslie`. When an MCP server configured via `ncl groups config add-mcp-server` fails to spawn or connect (bad path, missing runtime dep, crash on startup), the system silently proceeds with remaining tools and **the agent can report success while missing critical tools**. Users may only discover failure via `docker logs`.  
  **Impact:** High for production reliability — trust in agent completions is undermined.  
  **Status:** No fix PR linked; needs maintainer prioritization.  
  [GitHub Link](https://github.com/nanocoai/nanoclaw/issues/2968)

**Lower Severity — Fix PRs Exist**

- **#2965 [OPEN] — fix(agent-runner): match rate_limit_event as top-level SDK message type**  
  Authored by `glifocat`. SDK 0.3.x changed how rate limit events are structured. Current code uses an outdated check (`message.type === 'system' && subtype === 'rate_limit_event'`) that will miss rate limit events in the new format.  
  **Impact:** Agent runner may not properly handle rate limits, potentially causing throttling or missed retries.  
  **Fix exists:** PR #2965 submitted (open).  
  [GitHub Link](https://github.com/nanocoai/nanoclaw/pull/2965)

- **#2966 [OPEN] — fix(agent-runner): record provider errors as failed, and mirror failed acks**  
  Also by `glifocat`. Provider errors in consumed batches are incorrectly recorded as `completed`, making failures indistinguishable from successes.  
  **Impact:** Audit trail and agent monitoring will be misleading.  
  **Fix exists:** PR #2966 submitted (as draft, semantics under discussion).  
  [GitHub Link](https://github.com/nanocoai/nanoclaw/pull/2966)

**Previously Fixed Bug:** PR #16 (regex escaping in assistant name) was closed today, resolving a potential silent failure in trigger pattern matching.

---

## Feature Requests & Roadmap Signals

**New Requests (from last 24h):**

- **#2960 — Live Zoom voice agent + K-ai KB integration**  
  A comprehensive proposal for real-time meeting participation. If adopted, this would be a **major v2.2 or v3.0 feature**, requiring significant architectural changes (Zoom RTMS integration, Azure OpenAI Realtime API support, transcript-action pipeline). Given the proposal is already closed ("review for Kumuda"), it may be in a private assessment phase.  
  [GitHub Link](https://github.com/nanocoai/nanoclaw/issues/2960)

- **#2959 — Image generation (logo for "Dream Design")**  
  A user (`rajpoot713`) requests logo generation capability. Currently in NanoClaw's scope, image generation is not a core feature. This may be deflected to LLM capabilities or forwarded to a design tool integration.  
  [GitHub Link](https://github.com/nanocoai/nanoclaw/issues/2959)

**Prediction for Next Version (v2.2):** Based on PR activity, the next minor release will likely include:
1. **Opt-in local audit log** (#2967, just merged)
2. **Security reporting & triage policy** (#2954, near merge)
3. **Teams-CLI-first credential flow** (#2958)
4. **Rate limit event fix** (#2965)
5. **Provider error recording fix** (#2966)

The Zoom integration (#2960) is too large for a point release and would likely target v3.0.

---

## User Feedback Summary

**Pain Points (explicit or implicit):**

1. **Silent MCP server failures (#2968):** Users are spending time debugging "successful" runs that actually lacked critical tools, eroding trust in the agent's completion reports.
2. **Documentation staleness (#2961–#2964):** The systematic sweep indicates accumulated drift between docs and actual code, causing setup and usage friction for new users.
3. **Outdated SDK adaptation (#2965):** The SDK 0.3.x rate limit change shows the project is still catching up with upstream dependency updates, which can cause subtle runtime bugs.

**Satisfaction Signals:**
- **Strong maintainer responsiveness:** 10 PRs updated in 24 hours, systematic fixes across agent-runner, docs, and security.
- **Enterprise users engaging:** The Zoom proposal (#2960) and audit log (#2967) suggest production/enterprise adoption with specific compliance and integration needs.

**Use Cases Emerging:**
- Real-time meeting transcription + KB querying (enterprise productivity)
- Secure, auditable agent operations (enterprise compliance)
- MCP-based tool ecosystem expansion (developer platform)

---

## Backlog Watch

**Important Issues/PRs Needing Maintainer Attention:**

1. **#2968 [OPEN] — MCP server spawn/connect failures are silent** (Created 2026-07-06, 0 comments, no fix)  
   **High priority.** This bug undermines confidence in all tool-based workflows. It likely needs a design discussion around error propagation strategy (throw vs. warn vs. retry). Should be triaged within 48 hours.  
   [GitHub Link](https://github.com/nanocoai/nanoclaw/issues/2968)

2. **#2960 [CLOSED] — Zoom voice agent proposal** (Created 2026-07-06)  
   While closed, this is clearly a high-value feature request. Maintainers should post a follow-up explaining the decision, timeline, or requirements for reconsideration, to keep the community engaged.  
   [GitHub Link](https://github.com/nanocoai/nanoclaw/issues/2960)

3. **#2954 [OPEN] — Security reporting & triage policy** (Created 2026-07-04, updated today)  
   Needs the two maintainer sign-offs mentioned in the PR description. This is important for project credibility and should be prioritized.  
   [GitHub Link](https://github.com/nanocoai/nanoclaw/pull/2954)

4. **#2966 [OPEN] — Provider error recording fix (draft)** (Created 2026-07-06)  
   Marked as draft with "semantics up for discussion." The underlying issue (false success recording) is a correctness concern. Needs maintainer review to move from draft to ready-for-merge.  
   [GitHub Link](https://github.com/nanocoai/nanoclaw/pull/2966)

**No stale (>7 days) unanswered issues observed** in the current window, which is a positive sign for community management responsiveness.

---

*Data compiled from nanocoai/nanoclaw GitHub activity on 2026-07-07.*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest — 2026-07-07

## 1. Today's Overview
NullClaw shows minimal activity in the last 24 hours, with zero new issues, zero merged PRs, and no new releases. The only piece of movement is a single open pull request (#956) that updates the Alpine base image from 3.23 to 3.24, proposed by Dependabot and last updated on 2026-07-06. The project appears to be in a quiet maintenance phase with no user-reported bugs, feature requests, or community discussion surfacing today. Overall, project health is stable but dormant, with no signs of active development or user engagement in this window.

## 2. Releases
**None** — No new releases were published on 2026-07-07. The latest release remains unknown from the provided data.

## 3. Project Progress
- **Merged/Closed PRs today:** 0
- **Active open PRs:** 1
  - **#956 (Open)** — `[dependencies, docker] ci(deps): bump alpine from 3.23 to 3.24 in the docker-images group`  
    *Author: dependabot[bot] | Created: 2026-06-15 | Updated: 2026-07-06 | Comments: 0*  
    A dependency bump updating the Alpine Linux base image from version 3.23 to 3.24, focusing on Docker images. No feature work or bug fixes advanced today.

## 4. Community Hot Topics
No issues or PRs generated comments or reactions in the last 24 hours. The single open PR (#956) has zero comments and zero reactions. **There are no active community discussions to report.** This suggests low community engagement or that recent development work has not prompted user feedback.

## 5. Bugs & Stability
- **New bugs reported today:** 0
- **Critical/High severity:** None
- **Fix PRs in progress:** None

No crashes, regressions, or stability issues were reported. The project appears stable from a bug perspective, though this could also reflect low usage or monitoring activity.

## 6. Feature Requests & Roadmap Signals
No feature requests were submitted or discussed today. Based on the lack of recent issue activity, no clear signals point toward upcoming features. The only ongoing maintenance action (Alpine 3.24 bump) suggests a focus on keeping CI/Docker infrastructure current, which may precede a broader update but provides no roadmap insight.

## 7. User Feedback Summary
No user feedback—pain points, use cases, or satisfaction indicators—was recorded in the last 24 hours. The complete absence of issue reports, comments, or reactions makes it impossible to assess user sentiment from this data window.

## 8. Backlog Watch
- **Long-unanswered Issues:** None (total issue count is 0).
- **Stale PRs needing maintainer attention:**  
  - **#956** — Open since 2026-06-15 (22 days), last updated 2026-07-06, with zero maintainer interaction beyond automated Dependabot activity. While Dependabot PRs are often low-priority, a 22-day wait for a simple base image bump may indicate maintainer bandwidth constraints or review bottlenecks.

**No other backlog items require immediate maintainer attention.**

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest
**Date:** 2026-07-07

## Today's Overview

IronClaw is in an intense development cycle with 41 issues and 50 PRs updated in the last 24 hours, signaling a highly active phase focused on production hardening and coverage completion. The project shows 36 open/active issues and 37 open PRs, with 13 PRs merged or closed today — a healthy balance of new work and resolution. The bug_bash program continues to drive P2/P3 quality improvements, while core contributors are advancing major architectural initiatives (gate-dispatch harness convergence, subagent thread harness, and frontend tooling migration). No new releases were published today, suggesting the team is consolidating changes ahead of a significant release.

## Releases

No new releases today. The last automated release PR (`#5598`) remains open and pending, tracking breaking API changes in `ironclaw_common` (0.4.2 → 0.5.0) and `ironclaw_skills` (0.3.0 → 0.4.0), with `ironclaw` itself pending a major bump from 0.24.0 to 0.29.1.

## Project Progress

**13 PRs merged or closed today** across several fronts:

- **Infrastructure & Dependency Fixes:** PR #5751 fixes a critical `SQLITE_MISUSE` bug (#5466) by pooling libSQL connections instead of opening a new connection per operation, resolving CAS corruption under concurrent workloads.
- **Test Coverage & Robustness:** PRs #5661 (CAS-contention + tombstone coverage), #5738 (extension activation-gating), #5740 (real egress pipeline + reopen-resume), and #5743 (WebUI v2 gate refresh over real dispatch) all merged, closing rows in the coverage roadmap.
- **Design & Documentation:** PR #5748 adds canonical subagent thread-harness design doc; PR #5176 (subagent foundational design + plan) was closed.
- **Bug Fixes:** PR #5579 fixes four wire-format OAuth bugs (expires_in coercion, DCR error bodies, optional endpoints, callback parsing).

**Key features advanced (open PRs)** :
- **Frontend Tooling Migration (Codex initiative):** PRs #5728–#5732 form a cohesive pipeline to switch WebUI from npm/esbuild to pnpm/Vite/TypeScript — scaffold (#5730), tooling switch (#5729), asset embedding (#5732), source migration (#5731), and ignore fixes (#5728).
- **Gate-Dispatch Harness Convergence:** PR #5735 (production crate change, zero behavior change) unlocks real gate-dispatch testing by making turn-run locators composable.
- **No-Borking-Failures Stack:** PR #5692 integrates the entire recoverability stack (#4841 + #5389/#5390/#5403/#5613) as one branch, preventing run-killing failures.

## Community Hot Topics

- **#5713** [CLOSED] *Triggered/scheduled runs that terminate Failed deliver no Slack notification* — 3 comments. This was a critical automation reliability bug where silent failures occurred because the Slack notification only handles `Completed/BlockedApproval/BlockedAuth` states but not `Failed`. **Closed and fixed.**
- **#5702** [OPEN] *GitHub issue search and create capabilities fail with HTTP 403* — 2 comments. A P2 bug_bash issue preventing the agent from interacting with GitHub issues despite configured integration. **No fix PR yet.**
- **#5553** [OPEN] *Approval notifications disappear instead of remaining in notification history* — 2 comments. A P2 UX bug where approval notifications flash and disappear, making it impossible to review pending approvals.
- **#5747** [OPEN] *Reborn: No way to unpair Slack on built-in host-beta mount* — New today, zero comments but important UX gap: once paired via `/pair`, there's no disconnect mechanism, effectively locking users into a Slack identity.
- **#5744** [OPEN] *Auth-resolution real dispatch arm unreachable* — New today, follows from the approval resolution work (#5722→#5735). The AUTH twin of the gate-dispatch coverage lane remains untested end-to-end.

**Analysis:** The community's underlying needs center on **reliability of automations** (notifications, error reporting, debugging) and **integration stability** (GitHub 403s, Slack pairing UX). The bug_bash program is effectively surfacing real-world pain points that affect daily user workflows.

## Bugs & Stability

**P0/P1 (Critical):**
- **#5713** [CLOSED] *Silent automation failures: Failed runs get no Slack notification* — **FIXED.** A production reliability issue where automation failures were invisible to users.
- **#5751** [OPEN PR] *libSQL SQLITE_MISUSE under concurrent CAS* — **Fix in progress (PR #5751).** A concurrency corruption bug in the filesystem layer.

**P2 (High Impact):**
- **#5702** *GitHub issue integration returns HTTP 403* — No fix yet. Blocks agent from interacting with GitHub issues.
- **#5553** *Approval notifications disappear* — No fix yet. Critical for workflow approval UX.
- **#5703** *Routine fails with generic error messages* — No fix yet. "invalid internal instruction" is opaque to users.
- **#5741** *builtin.http.save fails with OutputTooLarge* — New today. Saving web pages fails when response is large.
- **#5739** *Hardcoded 128K context budget ignores model's actual context_length* — New today. Wastes ~50% of larger model windows.
- **#5707** *Routine creation response exposes internal implementation details* — Security/privacy concern: raw cron syntax, internal command references shown to users.
- **#5734** *Official installers 404 due to tag mismatch* — New today. Download URLs for powershell/shell installers return 404s.

**P3 (Lower Impact):**
- **#5706** *Sidebar shows raw thread UUID when instance is lagging* — Cosmetic under load.
- **#5705** *Terminal icon has no disable option* — UI customization request.
- **#5704** *Image preview becomes transparent during active run* — Visual glitch during processing.
- **#5701** *Activity panel hides tool details during active run* — Real-time monitoring gap.
- **#5694** *clientActionId() throws on non-secure origins* — Breaks all mutating requests over plain HTTP (self-hosted).

## Feature Requests & Roadmap Signals

**Likely for next version:**
1. **Frontend Vite/TypeScript migration** — PRs #5728–#5732 are open and building on each other. This is a Codex initiative that will modernize the entire WebUI frontend toolchain. Strong candidate for merging in this release cycle.
2. **No-borking-failures recoverability stack (#5692)** — This large (XL) PR would eliminate run-killing failures entirely, replacing them with recovery mechanisms. It's been in development across multiple stacked PRs.
3. **Gate-dispatch harness convergence (#5735, #5743)** — Unlocks real integration testing for approval/auth resolution gates, closing a long-standing testing gap.
4. **Subagent thread harness** — PR #5748 (design doc just merged) + PR #5176 (closed foundational plan) point to this being a next-cycle feature, making subagents addressable and resumable.

**User-requested features from issues:**
- **Slack unpairing mechanism (#5747)** — Users need to disconnect/reconnect Slack without the current lock-in.
- **Tool permission save failure visibility (#5698)** — Silent failures in Settings → Tools permission changes.
- **Configurable context budget (#5739)** — Users with larger model context windows want to use their full budget.

## User Feedback Summary

**Pain Points:**
- **Automation reliability:** Users are experiencing silent failures (#5713), generic error messages (#5703), and inability to debug failed runs (#5507). This erodes trust in automation workflows.
- **Integration friction:** GitHub issues integration is broken (#5702), Slack pairing has no undo (#5747), and OAuth flows hit wire-format bugs (#5579).
- **UI/UX inconsistencies:** Approval notifications vanish (#5553), error banners float outside chat stream (#5708), and the activity panel lacks real-time updates (#5701).
- **Self-hosting issues:** The `clientActionId()` crash on plain HTTP (#5694) and 404 installers (#5734) hurt the self-hosted user experience.

**Satisfaction Signals:**
- The bug_bash initiative is actively catching real-world issues (8 new bug reports today), showing strong QA engagement.
- Core contributors are rapidly addressing infrastructure stability (libSQL pooling fix merged same day as discovery).
- The Codex frontend migration indicates investment in developer experience and long-term maintainability.

## Backlog Watch

**Issues needing maintainer attention:**
- **#5553** [OPEN since 2026-07-02] *Approval notifications disappear* — P2 bug_bash issue, 5 days old with no assignee. Affects core approval workflow usability.
- **#5702** [OPEN since 2026-07-06] *GitHub integration HTTP 403* — P2 blocking major integration. Should be triaged for fix priority.
- **#5698** [OPEN since 2026-07-06] *Surface tool permission save failures* — Simple UI fix (already have error in hook, just not displayed). Low-hanging fruit.

**PRs needing maintainer attention:**
- **#5598** [OPEN since 2026-07-03] *chore: release* — Automated release PR with breaking changes. Its continued open status may be blocking other work or indicates unresolved dependency issues.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

Here is the LobsterAI project digest for **2026-07-07**, based on an analysis of the last 24 hours of activity on the repository.

---

# LobsterAI Project Digest | 2026-07-07

## 1. Today's Overview
Activity on **LobsterAI** was extremely high today, with an unusual concentration of work repaying a technical debt "spike." A total of **12 Pull Requests were merged or closed**, and **1 PR remains open**. The velocity indicates a focused sprint on internal architecture, UI polish, and cross-cutting infrastructure (MCP, Cowork, OpenClaw). While there were **no new releases** and **no new issues** opened in the last 24 hours, the team successfully closed a large batch of feature and refactor PRs. Project health appears very strong, with a clear emphasis on cleaning up technical debt and hardening the application for stability.

## 2. Releases
**None.** No new versions of LobsterAI were published in the last 24 hours.

## 3. Project Progress
The team merged 12 PRs, covering significant improvements across the renderer, main process, and OpenClaw agent areas:

- **Agent Heartbeat & Cost Control:** PR [#2280](https://github.com/netease-youdao/LobsterAI/pull/2280) added a managed heartbeat cost-control policy and repaired legacy files. PR [#2278](https://github.com/netease-youdao/LobsterAI/pull/2278) added a UI toggle for the OpenClaw heartbeat setting, allowing users to enable/disable it (default: on).
- **Provider & Authentication Expansion:** PR [#2276](https://github.com/netease-youdao/LobsterAI/pull/2276) added **xAI (Grok) OAuth login support** using PKCE with a device-code fallback, including full model catalog registration.
- **MCP & Plugin System:** PR [#2277](https://github.com/netease-youdao/LobsterAI/pull/2277) fixed MCP transport config persistence, ensuring stale headers/env/args are cleared correctly. PR [#2279](https://github.com/netease-youdao/LobsterAI/pull/2279) hid the built-in xAI plugin from user sync to prevent duplication.
- **Email & Cowork UI:** PR [#2275](https://github.com/netease-youdao/LobsterAI/pull/2275) added multi-account support for the built-in IMAP-SMTP email skill with full account management UI. PR [#2274](https://github.com/netease-youdao/LobsterAI/pull/2274) gave the Cowork home screen a time-aware greeting and recent tasks view.
- **Refactoring & Cleanup:** PR [#2284](https://github.com/netease-youdao/LobsterAI/pull/2284) redesigned the model provider settings UI, removed the recent tasks card, and archived legacy cron files. PR [#2283](https://github.com/netease-youdao/LobsterAI/pull/2283) optimized the UI for skills, MCP, memory, and mail panels.

## 4. Community Hot Topics
There were **no highly-commented community issues** in this period. The only active topic of note is the **Dependency Bot**:

- **PR #1277** (Open): A long-running Dependabot PR attempting to bump `electron` from 40.2.1 to 43.0.0 and `electron-builder`. This is one of the highest-volume dependency updates for the project. The underlying need is a desire for updated Electron security fixes and API improvements, but the size of the jump suggests breaking changes are being carefully reviewed.

## 5. Bugs & Stability
No new bugs were reported via Issues in the last 24 hours. However, several **fix PRs were merged** addressing stability concerns:

- **High Severity:** PR [#2256](https://github.com/netease-youdao/LobsterAI/pull/2256) fixed a **white screen crash** that occurred when deleting an active model configuration. The same PR also fixed a scheduled task notification channel bug where the "不通知" option was not persisting.
- **Moderate Severity:** PR [#2281](https://github.com/netease-youdao/LobsterAI/pull/2281) fixed a race condition in Cowork where stale final syncs could restart context maintenance after chat errors, preventing potential infinite loops or degraded session state.
- **Low Severity:** PR [#2284](https://github.com/netease-youdao/LobsterAI/pull/2284) fixed a Windows-specific UX issue where a console window would appear when spawning Python processes.

## 6. Feature Requests & Roadmap Signals
No new feature requests were filed via Issues in the last 24 hours. However, the merged PRs strongly signal what is on the immediate roadmap:

- **xAI / Grok Integration:** The addition of OAuth and provider registration in PR [#2276](https://github.com/netease-youdao/LobsterAI/pull/2276) indicates that **Grok is now a first-class model provider** in the app, likely appearing in the next release.
- **Multi-Account Email:** PR [#2275](https://github.com/netease-youdao/LobsterAI/pull/2275) adds significant capability to the email skill. The inclusion of account management UI suggests this feature is ready for the upcoming version.
- **Agent Heartbeat Toggle:** The ability to disable the agent heartbeat (PR [#2278](https://github.com/netease-youdao/LobsterAI/pull/2278) and [#2280](https://github.com/netease-youdao/LobsterAI/pull/2280)) was a user-facing cost-control feature. Expect this to ship to help users reduce API spend.

## 7. User Feedback Summary
There is **no direct user feedback** (comments/sentiment) captured from the public Issues or PRs in the last 24 hours. The activity was almost entirely internal development. The most significant user-facing improvement is the **xAI (Grok) OAuth login**, which addresses a clear user need for easier access to Grok models without manual API key entry.

## 8. Backlog Watch
- **PR #1277** (Open, updated 2026-07-06): This Dependabot PR to bump Electron and Electron Builder remains open after over 3 months. It has **not yet received a maintainer review or merge**. This represents a significant security and compatibility gap (Electron 40.x to 43.x). Given the volume of merged PRs in the last 24 hours, the lack of attention to this dependency update is notable and should be prioritized.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

Here is the Moltis project digest for **2026-07-07**.

---

### Moltis Project Digest — 2026-07-07

**1. Today's Overview**
The Moltis project shows a low level of activity over the last 24 hours, with no new issues or releases. However, the tail end of a significant cleanup wave is visible: five pull requests were updated, with three being closed or merged. The project remains in a stable, maintenance-oriented phase, with notable fixes landing in the MCP OAuth and Docker deployment areas. The backlog contains two open PRs, including a critical dependency bump, which may require attention soon.

**2. Releases**
No new releases were published today.

**3. Project Progress**
Three pull requests were closed or merged in the last 24 hours, indicating progress in infrastructure, stability, and platform support:
- **PR #1122 (Merged):** [fix: drop VOLUME declarations that shadow the home bind mount](https://github.com/moltis-org/moltis/pull/1122) — Resolved a pathological Docker deployment case where declared `VOLUME` paths prevented bind mounts of the entire home directory from working correctly.
- **PR #1113 (Merged):** [hotfix(telegram): stream final replies without completion notify](https://github.com/moltis-org/moltis/pull/1113) — Fixed a Telegram streaming bug where the final answer was not properly streamed when completion notifications were disabled.
- **PR #1144 (Merged):** [feat(whatsapp): bump whatsapp-rust 0.5 -> 0.6 with LID-native addressing](https://github.com/moltis-org/moltis/pull/1144) — Upgraded the WhatsApp integration to use LID-native addressing, fixing inbound message failures after WhatsApp’s recent migration.

**4. Community Hot Topics**
No new issues were created or commented on heavily in the last 24 hours. The most active items remain the two open pull requests:
- **PR #1120 (Open):** [fix(mcp): use direct fetch for resource_metadata URL from WWW-Authenticate](https://github.com/moltis-org/moltis/pull/1120) — Targets a bug preventing MCP OAuth from working with Notion and Linear servers. This fix is critical for users of those services.
- **PR #1087 (Open):** [chore(deps): bump tar from 0.4.45 to 0.4.46](https://github.com/moltis-org/moltis/pull/1087) — A routine dependency bump from Dependabot that addresses security or stability changes in the `tar` crate.

**5. Bugs & Stability**
No new bugs were reported in the last 24 hours. However, one previously reported bug is actively being addressed:
- **OAuth MCP failure with `invalid_target` (Notion, Linear):** The fix is proposed in **PR #1120** (Open). Affects users relying on server-side OAuth flows for MCP metadata discovery. Severity: **High** (blocking integration for popular services). Fix exists but is not yet merged.

**6. Feature Requests & Roadmap Signals**
No new feature requests were filed in the last 24 hours. The merged PRs signal ongoing improvements:
- **WhatsApp LID-native addressing (PR #1144):** Points to proactive adaptation to upstream WhatsApp API changes. Expect this to be a standard integration in the next release.
- **Telegram streaming polish (PR #1113):** Suggests fine-tuning of the streaming UX, which may continue to evolve with user feedback on edit-in-place behavior.

**7. User Feedback Summary**
No direct user feedback or comments were recorded in the past 24 hours. Based on the merged PRs, implied pain points include:
- **Docker deployments failing silently** when home directory bind mounts were shadowed by `VOLUME` declarations (PR #1122). The fix restores expected behavior for users deploying via `docker-compose` or similar.
- **WhatsApp users losing inbound messages** after a WhatsApp-side migration (PR #1144). This fix restores functionality for those users.
- **Telegram users** suffering from missing final replies during streaming (PR #1113). The hotfix resolves a regression introduced in PR #1099.

**8. Backlog Watch**
No long-unanswered issues or PRs currently require maintainer attention. However, the two open PRs (#1120 and #1087) have been pending for extended periods:
- **PR #1120** (Open since June 13, 2026): Critical OAuth fix. Waiting for merge or further review.
- **PR #1087** (Open since May 29, 2026): Dependency bump. Maintainers may want to merge to keep the supply chain current.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

Here is the structured CoPaw project digest for 2026-07-07.

---

## CoPaw Project Digest — 2026-07-07

**Generated from:** [agentscope-ai/CoPaw](https://github.com/agentscope-ai/CoPaw)

### 1. Today's Overview
The CoPaw project is in a high state of activity driven by a significant testing and stabilization push. Over the last 24 hours, 9 issues were closed and 25 PRs were merged or closed, indicating a focused effort to resolve bugs and improve code quality. A major testing suite (`PR-A1` through `PR-A4`, and `PR-F1` through `PR-F3`) has been contributed, adding over 350 unit tests across the backend and console. Despite this, the project faces several critical bugs related to memory management, context compression, and streaming performance, with the community actively reporting issues found in both the stable `1.1.x` and pre-release `2.0.0` branches.

### 2. Releases
- **New Release:** `v1.1.12.post3`
- **Changelog:** This is a critical patch release that pins the `agent-client-protocol` (ACP) dependency to `>=0.9.0,<0.11.0`.
- **Key Fix:** Resolves a breaking change in a newer ACP release that caused import errors (`ImportError: cannot import name 'SetSessionModelResponse' from 'acp'`) and subsequent malfunctions in historical `1.x` versions of QwenPaw (`#5816`).
- **Migration Note:** This is a dependency pin; no code changes are required for users.

### 3. Project Progress
The project's progress is heavily focused on quality assurance and fixing regressions.

- **Massive Test Coverage:** A series of PRs (`#5809`, `#5811`, `#5812`, `#5813` for backend; `#5807`, `#5808`, `#5810` for frontend) from contributor `hanson-hex` introduce hundreds of unit tests and regression tests for core modules including `inbox`, `approvals`, `channels`, and `runtime`. **This is a significant improvement to project stability.**
- **ACP & Stability Fix:** The release `v1.1.12.post3` and its associated PR `#5818` were merged to fix a critical breaking change in an upstream dependency.
- **Context & Scroll Fixes:** PR `#5765` (under review) aims to fix multiple issues related to context management, including protecting the active turn from being evicted during scroll-based context compression.
- **Console Fixes:** PR `#5822` fixes UI bug `#5784`, where the context compression threshold displayed the wrong value for models shared across multiple providers. PR `#5768` (closed) fixed a timezone-naive datetime bug.
- **Bug Fix:** PR `#5654` (under review) corrects DingTalk channel delivery by preventing empty messages from being sent and raising proper errors on failure.

### 4. Community Hot Topics
The community is most active around stability issues and the upcoming v2.0.0 release.

- **[Bug] Console crashes with large tool-call history (`#5401`):** A highly active open issue (8 comments). The frontend crashes or white-screens when rendering sessions with large tool-call histories because the backend returns a content type (`type: "data"`) that the frontend cannot handle. This represents a critical usability issue for power users. [View Issue](https://github.com/agentscope-ai/QwenPaw/issues/5401)
- **[Bug] Feishu (Lark) Not Replying (`#5757`):** The most commented issue (11 comments). Users report that the Feishu channel bot stops responding after the first interaction in a session when deployed via Docker. This is a high-priority reliability issue for a major platform. [View Issue](https://github.com/agentscope-ai/QwenPaw/issues/5757)
- **[Feature] GitHub Issue Helper Skill (`#5567`):** A community-created skill that translates user complaints into standard GitHub Issues. This is a positive sign of community tooling and a desire to streamline the bug-reporting process. [View Issue](https://github.com/agentscope-ai/QwenPaw/issues/5567)
- **[Tracking] v2.0.0 Pre-release Bug Tracker (`#5273`):** The central hub for v2.0.0-alpha/beta feedback is still active, with consistent updates from the maintainer (`rayrayraykk`). This shows active pre-release development. [View Issue](https://github.com/agentscope-ai/QwenPaw/issues/5273)

### 5. Bugs & Stability
The project is dealing with several high-severity and medium-severity bugs.

**High Severity:**
- **Auto-Memory Never Triggers (`#5775`):** The `auto_memory_interval` feature in v2.0.0b3 is broken because the `MemoryMiddleware` state is lost when agents are rebuilt per-request.
- **Context Compression Loses Critical Messages (`#5710`):** The `LightContextManager` compresses all messages without "anchor points," causing the agent to lose context (e.g., forgetting which group chat it's in).
- **Gemini Embedding Silent Failure (`#5782`):** Google Gemini embeddings through an OpenAI-compatible endpoint returns `index=None`, causing vector search to silently fail and fall back to keyword search only. *This was fixed in `#5782` (closed).*

**Medium Severity:**
- **Console Streaming Lags (`#5725`):** The browser UI becomes unresponsive during streaming responses, especially with long outputs.
- **OCG Channel Fails with Memory Search (`#5773`):** Enabling `auto_memory_search` causes all requests to the OpenCode Go provider to time out or fail.
- **Cron API Returns Wrong Timezone (`#5779`):** The cron state API hardcodes UTC instead of using the job's configured timezone. *This was fixed in `#5779` (closed).*
- **Stale Message Treated as Active Task (`#5776`):** In long IM sessions, an old pinned message can be misinterpreted as the user's current task, leading to incorrect agent behavior.

### 6. Feature Requests & Roadmap Signals
Users are actively requesting features that enhance customization and expand platform support.

- **Granular Media Type Rejection (`#5821`):** A request to handle media rejection on a per-type basis (e.g., reject video but allow images) instead of an all-or-nothing approach. This is a likely candidate for the next patch release.
- **Multi-User Account Management (`#5780`):** A highly upvoted feature request for team environments, asking for user roles and per-user policies beyond the current single-bot model. This is a major feature that would likely target a future minor or major release (v1.2 or v2.0).
- **Selectable Notification Toggles (`#5797`):** Users want a per-cron-job toggle for desktop notifications. This small UX enhancement is a strong candidate for a quick community contribution.
- **Official Zalo Bot Channel (`#5168`):** A request from the Vietnamese community to add support for the Zalo messaging platform, similar to Telegram/Discord. This suggests growing interest from international markets.

### 7. User Feedback Summary
User feedback reveals a mix of satisfaction with the project’s breadth and frustration with reliability.

- **Satisfaction:** The community is proactive, creating tools like the "Issue Helper Skill" (`#5567`). There is clear demand for expanding IM channel support, indicating the core value proposition is strong.
- **Dissatisfaction (Pain Points):**
    - **Channel Instability:** The recurring issues with Feishu (`#5757`) and the OCG provider (`#5773`) erode trust in channel reliability.
    - **Performance Issues:** Console streaming lag (`#5725`) and frontend crashes (`#5401`) create a poor user experience.
    - **Context Management:** Users feel the agent "forgets" important instructions after context compression (`#5710`), which is a critical failure for its advertised agentic capabilities.
    - **UX Oversights:** The lack of a loading animation fail-safe (`#5790`) and the inability to select hidden folders in coding mode (`#5785`) point to unfinished UI polish.

### 8. Backlog Watch
Several important issues and PRs require maintainer attention.

- **Critical:** **[Bug] Console crashes with large tool-call history (`#5401`):** This has been open for two weeks with no clear path to resolution. It is a major UX blocker for advanced users.
- **Important:** **[Bug] Feishu Not Replying (`#5757`):** With 11 comments and no resolution, it is the most pressing stability issue for the Feishu user base.
- **Stale PR:** **[Feat] Dynamic tool support for AgentScope channels (`#4820`):** This PR has been closed with the label "Under Review" and has had no activity in over a month. If it represents a feature targeted for the next release, a status update would be beneficial.
- **Neglected Feature Request:** **[Feature] Add official Zalo Bot channel support (`#5168`):** Open since mid-June with no official response from maintainers. A simple acknowledgment would improve community relations.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-07-07

## Today's Overview
ZeroClaw shows **high activity** with 50 issues and 50 PRs updated in the last 24 hours, signaling a project in active development. The vast majority of issues remain **open (47/50)**, suggesting a healthy backlog of work underway. 9 PRs were merged or closed today, indicating steady codebase progress. No new releases were published. The project is currently organizing around **v0.8.3** and **v0.9.0** milestones, with significant architectural work on goal-mode, realtime voice channels, and security hardening dominating the conversation.

## Releases
No new releases were published on this date. The latest tracked release remains v0.8.1, with v0.8.3 milestone tracking active in [Issue #7320](https://github.com/zeroclaw-labs/zeroclaw/issues/7320).

## Project Progress
9 PRs were merged or closed today. Key advancements include:

- **CI/Workspace Awareness**: [PR #8776](https://github.com/zeroclaw-labs/zeroclaw/pull/8776) — `fix(ci): make local gates workspace-aware` — closes a critical CI gap where member-crate test targets were silently skipped (related to [Issue #8753](https://github.com/zeroclaw-labs/zeroclaw/issues/8753))
- **Security Advisory Cleanup**: [PR #8781](https://github.com/zeroclaw-labs/zeroclaw/pull/8781) — removed 18 stale advisory ignore entries, fixing a Security CI gate failure
- **ZeroCode UX Fixes**: [PR #8779](https://github.com/zeroclaw-labs/zeroclaw/pull/8779) — fallback to daemon final text when streaming text is missing; [PR #8777](https://github.com/zeroclaw-labs/zeroclaw/pull/8777) — strip markdown fences from code block copy text
- **Image Optimization**: [PR #8778](https://github.com/zeroclaw-labs/zeroclaw/pull/8778) — repository asset compression

## Community Hot Topics

### Most Active Issues
- **[#8193 — MCP tools missing from TUI sessions](https://github.com/zeroclaw-labs/zeroclaw/issues/8193)** (16 comments, **S1 severity**) — A blocking bug where MCP servers connect successfully to the gateway but tools never appear in TUI sessions. Two independent user reports confirmed. A regression guard was added today via [PR #8775](https://github.com/zeroclaw-labs/zeroclaw/pull/8775), suggesting a fix is near.
  
- **[#6808 — RFC: Work Lanes, Board Automation, and Label Cleanup](https://github.com/zeroclaw-labs/zeroclaw/issues/6808)** (13 comments) — A governance RFC for project management workflow improvements, now labeled as "accepted / rollout in progress." Indicates maturing project processes.

- **[#2503 — Missing napcat/onebot channel](https://github.com/zeroclaw-labs/zeroclaw/issues/2503)** (9 comments) — Long-standing feature request for QQ Bot protocol support. Still open and unresolved since March 2026.

- **[#8681 — Goal Mode Implementation Split Stack](https://github.com/zeroclaw-labs/zeroclaw/issues/8681)** (8 comments) — A new tracker coordinating the PR breakdown for the accepted goal-mode feature. This is a **hot architectural area** with multiple large PRs being prepared.

### Most Active PRs
- **[#7821 — SandboxPolicyConfig schema](https://github.com/zeroclaw-labs/zeroclaw/pull/7821)** — Adds OS-level sandbox policy model to RiskProfileConfig
- **[#8690 — Per-sender authorization for /model --agent](https://github.com/zeroclaw-labs/zeroclaw/pull/8690)** — Security fix for channel command authorization bypass
- **[#8747 — SOP advance gate rejection](https://github.com/zeroclaw-labs/zeroclaw/pull/8747)** — Fixes a vulnerability where SOP steps could be advanced while parked at a gate

### Underlying Needs
The community is pushing for **better tool discoverability** (MCP tools not reaching TUI), **broader channel support** (QQ/OneBot, voice channels, Gemini Live), and **security hardening** (sandboxing, authorization gates, secrets handling). The goal-mode feature is generating significant architectural discussion.

## Bugs & Stability

### High-Priority Bugs (P1, S1-S2)
| Issue | Severity | Summary | Has Fix PR? |
|-------|----------|---------|-------------|
| [#8193](https://github.com/zeroclaw-labs/zeroclaw/issues/8193) | S1 | MCP tools absent from TUI sessions | [PR #8775](https://github.com/zeroclaw-labs/zeroclaw/pull/8775) (test guard) |
| [#8505](https://github.com/zeroclaw-labs/zeroclaw/issues/8505) | S1 | Telegram channel cannot be configured | No |
| [#8753](https://github.com/zeroclaw-labs/zeroclaw/issues/8753) | S1 | CI gate misses member-crate test targets | [PR #8776](https://github.com/zeroclaw-labs/zeroclaw/pull/8776) (fix merged) |
| [#8675](https://github.com/zeroclaw-labs/zeroclaw/issues/8675) | S1 | Malformed tool-call arguments → provider 400 | No |
| [#8631](https://github.com/zeroclaw-labs/zeroclaw/issues/8631) | S2 | Headless SOP steps recorded as Completed without executing | [PR #8747](https://github.com/zeroclaw-labs/zeroclaw/pull/8747) |
| [#8690](https://github.com/zeroclaw-labs/zeroclaw/issues/8690) | P1 | /model --agent command bypasses sender authorization | [PR #8690](https://github.com/zeroclaw-labs/zeroclaw/pull/8690) |
| [#8741](https://github.com/zeroclaw-labs/zeroclaw/issues/8741) | S2 | Browser screenshot path not validated against workspace policy | [PR #8741](https://github.com/zeroclaw-labs/zeroclaw/pull/8741) |
| [#8751](https://github.com/zeroclaw-labs/zeroclaw/issues/8751) | S2 | LocalWhisperConfig defaults at zero (not serde defaults) | [PR #8751](https://github.com/zeroclaw-labs/zeroclaw/pull/8751) |

### Critical Observations
- The **CI quality gate gap** ([#8753](https://github.com/zeroclaw-labs/zeroclaw/issues/8753)) was acknowledged and fixed on the same day — excellent turnaround.
- Two **security-related bugs** (SOP gate bypass, browser path validation) received fix PRs simultaneously, showing active security hardening.
- The **MCP tools bug** ([#8193](https://github.com/zeroclaw-labs/zeroclaw/issues/8193)) remains unresolved after two weeks, though a regression test was added today.

## Feature Requests & Roadmap Signals

### High-Interest New Features
- **[#8780 — Realtime speech-to-speech channel (Gemini Live)](https://github.com/zeroclaw-labs/zeroclaw/issues/8780)** — *Just opened today*. A sibling to the voicehost channel ([#7943](https://github.com/zeroclaw-labs/zeroclaw/issues/7943)), this would let the model own audio/turn-taking while ZeroClaw supplies tools and memory. **Likely for v0.9.x** given the architectural scope.
- **[#8603 — OpenAI Chat Completions compatibility adapter](https://github.com/zeroclaw-labs/zeroclaw/issues/8603)** — RFC for allowing OpenAI-API-speaking clients (Open WebUI, LobeChat) to connect. **A high-impact feature** that would dramatically expand ZeroClaw's interoperability.

### Roadmap Predictions (v0.8.3 / v0.9.0)
Based on tracker assignments:
- **v0.8.3** (current milestone): Goal-mode split PRs, WASM/plugin platform, MCP dashboard, skills platform, cron improvements — many in-progress PRs target this.
- **v0.9.0** ([#7432](https://github.com/zeroclaw-labs/zeroclaw/issues/7432)): Auth/security hardening, gateway boundaries, A2A/multi-agent, tool policy, breaking changes. The **goal-mode feature** ([#8681](https://github.com/zeroclaw-labs/zeroclaw/issues/8681)) is being split into reviewable PRs now and may land in v0.8.3 or v0.9.0.

## User Feedback Summary

### Key Pain Points
1. **MCP tool visibility** ([#8193](https://github.com/zeroclaw-labs/zeroclaw/issues/8193)): Two independent users report that MCP-connected tools are invisible in the TUI — a blocking workflow issue.
2. **Telegram configuration failure** ([#8505](https://github.com/zeroclaw-labs/zeroclaw/issues/8505)): User reports even after following quickstart instructions, the Telegram channel doesn't work.
3. **Missing QQ/OneBot support** ([#2503](https://github.com/zeroclaw-labs/zeroclaw/issues/2503)): User cannot connect their existing bot infrastructure (9 comments, open since March).
4. **Per-chat model switching** ([#8600](https://github.com/zeroclaw-labs/zeroclaw/issues/8600)): User migrating from moltis wants the full model set from a provider, not just one.

### Satisfaction Signals
- The **early integration testing** via issues like [#5262](https://github.com/zeroclaw-labs/zeroclaw/issues/5262) (Agent Skills logo request) suggests the community sees ZeroClaw as a serious platform.
- Multiple users contributing **PRs for UX polish** (Ctrl+W word delete, markdown copy, image optimization) indicates a comfortable contributor experience.

## Backlog Watch

### Issues Needing Maintainer Attention
| Issue | Age | Type | Why Critical |
|-------|-----|------|--------------|
| [#2503](https://github.com/zeroclaw-labs/zeroclaw/issues/2503) | ~4 months | Feature | High community interest (9 comments), no movement since label changes |
| [#8398](https://github.com/zeroclaw-labs/zeroclaw/issues/8398) | 9 days | RFC | Plugin permission model has unresolved design questions; blocked waiting for maintainer review |
| [#8602](https://github.com/zeroclaw-labs/zeroclaw/issues/8602) | 4 days | Feature | Blocked on maintainer review — file_read enhancements (charset detection, PDF) are high-impact |
| [#8603](https://github.com/zeroclaw-labs/zeroclaw/issues/8603) | 4 days | RFC | OpenAI compatibility adapter — needs maintainer decision to proceed |
| [#7521](https://github.com/zeroclaw-labs/zeroclaw/issues/7521) | ~26 days | Feature | file_read non-UTF-8 text decoding — a common user need for international users |

### Unresolved Trackers with No Recent PRs
- [#7872](https://github.com/zeroclaw-labs/zeroclaw/issues/7872) — QQ group reply msg_id issue (blocked for ~19 days)
- [#7831](https://github.com/zeroclaw-labs/zeroclaw/issues/7831) — Discord channel parity (embeds, components, voice) — no PRs linked despite `no-stale` label

### Watch Item
The **CI quality gate fix** ([#8776](https://github.com/zeroclaw-labs/zeroclaw/pull/8776)) was merged today, but [Issue #8753](https://github.com/zeroclaw-labs/zeroclaw/issues/8753) remains open — it should be closed as resolved by the PR.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*