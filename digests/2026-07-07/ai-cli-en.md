# AI CLI Tools Community Digest 2026-07-07

> Generated: 2026-07-07 01:59 UTC | Tools covered: 9

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Gemini CLI](https://github.com/google-gemini/gemini-cli)
- [GitHub Copilot CLI](https://github.com/github/copilot-cli)
- [Kimi Code CLI](https://github.com/MoonshotAI/kimi-cli)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Pi](https://github.com/badlogic/pi-mono)
- [Qwen Code](https://github.com/QwenLM/qwen-code)
- [DeepSeek TUI](https://github.com/Hmbown/DeepSeek-TUI)
- [Claude Code Skills](https://github.com/anthropics/skills)

---

## Cross-Tool Comparison

# Cross-Tool Comparison Report: AI CLI Developer Tools Ecosystem
**Date:** 2026-07-07

---

## 1. Ecosystem Overview

The AI CLI tools landscape is experiencing a maturation phase characterized by three simultaneous pressures: **subagent reliability** across continuation boundaries, **cross-platform parity** (particularly Windows and ARM64), and **extensibility infrastructure** through MCP and hooks. Seven major tools—Claude Code, OpenAI Codex, Gemini CLI, GitHub Copilot CLI, Kimi Code, OpenCode, Pi, Qwen Code, and DeepSeek TUI—all show active development, but distinct philosophical approaches are emerging: Claude Code and Copilot CLI prioritize safety and production-grade workflows, Codex and Gemini push toward agentic autonomy, while smaller tools like Kimi Code and DeepSeek TUI focus on platform-specific UX polish. The community is increasingly vocal about billing transparency, session state management, and the need for modular, project-scoped agent configuration.

---

## 2. Activity Comparison

| **Tool** | **Hot Issues** | **PRs Updated** | **Release Status** | **Community Signal** |
|---|---|---|---|---|
| **Claude Code** | 10 active (high engagement: 635👍 multi-account) | 3 PRs (1 merged) | **v2.1.202** today – configurable workflow sizing | Highest engagement; safety filter false-positive wave on Linux |
| **OpenAI Codex** | 10 active (131 comments #30364) | 10 PRs (all open/merged) | **v0.143.0-alpha.37** (empty changelog) | Critical GPT-5.5 reasoning token bug dominating attention |
| **Gemini CLI** | 10 active (8👍 generalist hang #21409) | 10 PRs (3 merged) | **v0.51.0-nightly** – sandbox hardening, escape seq fix | Subagent false-success reporting is top pain |
| **Copilot CLI** | 10 active (18👍 project-scoped plugins #1665) | **0 PRs** | **v1.0.69-2** – MCP OAuth sign-in fix | Low PR throughput; voice mode ASR broken for all models |
| **Kimi Code** | 2 active (low engagement) | **0 PRs** | No new release (latest v0.22.0) | Quiescent; terminal corruption on Windows |
| **OpenCode** | 10 active (202👍 paste expand #8501) | 10 PRs (5 closed, 5 open) | **v1.17.14** – MCP adapter, pagination fix | High feature velocity; billing controversy heating up |
| **Pi** | 10 active (3–8 comments each) | 10 PRs (7 closed) | No new release | Rapid bugfix cycle; mitsuhiko driving constrained sampling |
| **Qwen Code** | 10 active (149 comments OAuth RFC #3203) | 10 PRs (4 merged) | **v0.19.6-nightly** – triage gate strengthening | Multi-workspace daemon and CI bot reliability key topics |
| **DeepSeek TUI** | 10 active (18+ child issues from maintainer) | 10 PRs (2 merged) | v0.8.67 merged to main (no tag) | Heavy QA cycle; sub-agent model routing is release-blocker |

**Observations:**
- **Codex**, **OpenCode**, **Pi**, and **Qwen Code** have the highest PR throughput (10 each), indicating active development cycles.
- **Copilot CLI** and **Kimi Code** have zero PRs in 24h — low iteration velocity.
- **DeepSeek TUI** has a massive issue burst from the maintainer (18+ issues in one day), signaling intense polish phase.

---

## 3. Shared Feature Directions

The following requirements appear **across multiple tool communities**, indicating industry-level demand:

| **Feature Direction** | **Tools Demanding It** | **Specific Needs** |
|---|---|---|
| **Subagent reliability & routing** | Claude Code, Codex, Gemini, Copilot, DeepSeek TUI, Pi | Model override persistence after continuation (#68147 CC); per-sub-agent provider routing (#3969 DeepSeek); false success reporting (#22323 Gemini) |
| **Project-scoped / hierarchical config** | Claude Code, Codex, Copilot, OpenCode | AGENTS.md progressive loading (#12115 Codex); project-scoped plugins (#1665 Copilot); per-repo configuration (#6380 Pi) |
| **MCP extensibility & tool permissions** | Claude Code, Copilot, OpenCode, Qwen Code | MCP tool whitelisting (#3028 Copilot); late-connecting MCP server bugs (#4038 Copilot); tool catalog pagination (OpenCode #31119) |
| **Cross-platform parity** | Claude Code, Copilot, Kimi Code, Qwen Code, OpenCode | Windows Cowork tab missing (#48407 CC); Windows hooks broken (#4001 Copilot); non-UTF-8 code pages (#6214 Qwen); ARM64 TUI crashes (#19130 OpenCode) |
| **Session state management** | Codex, Claude Code, Qwen Code, OpenCode | Session resume auth leaks (#3596 Copilot); conversation ordering (#8648 Codex); zombie sessions (#5964 Qwen); prompt leaking between sessions (#35587 OpenCode) |
| **Billing transparency** | OpenCode, Qwen Code | Content-filter charges for blocked output (#35644 OpenCode); free tier policy debate (#3203 Qwen); rate-limit instability (#31322 Codex) |
| **Voice / multimodal input** | Copilot, Claude Code | Voice mode ASR failures (#4024 Copilot); image paste fragility (#6250 Pi) |
| **Event-driven agent wake** | Claude Code, Codex | Wake-on-external-event primitives (#20312 Codex); idle session resume on file changes |

**Strongest convergence signal:** Subagent reliability and cross-platform parity are the **two most universal pain points**, affecting 6+ tools each.

---

## 4. Differentiation Analysis

| **Dimension** | **Claude Code** | **OpenAI Codex** | **Gemini CLI** | **Copilot CLI** | **OpenCode** | **Pi** | **Qwen Code** | **DeepSeek TUI** |
|---|---|---|---|---|---|---|---|---|
| **Primary focus** | Production safety & workflow orchestration | Agent autonomy & reasoning | Sandboxed execution & AST-awareness | GitHub ecosystem integration | Session identity & billing transparency | TUI polish & extension lifecycle | Multi-provider & CI/CD | Workflow orchestration & fleet routing |
| **Target user** | Enterprise teams, multi-account users | Power users, complex reasoning | Security-conscious devs | GitHub-centric teams | Plugin developers, i18n users | TUI-first, extension authors | CI/CD pipelines, multi-workspace | DeepSeek-centric, workflow-heavy |
| **Technical approach** | Dynamic workflow sizing, OpenTelemetry telemetry | Rust alpha, reasoning summarization | Zero-dependency sandboxing | OAuth callback, MCP server sign-in | Code Mode MCP adapter, gang-grill V2 | Constrained sampling, JSON-schema parsing | Daemon architecture, hot-reload plugins | Fleet model routing, constitution customization |
| **Differentiator** | Safety filter granularity | Reasoning token optimization | AST-driven codebase navigation | GitHub Actions integration | Billing safeguards & compliance | Community-driven bugfix velocity | Multi-workspace daemon | DeepSeek provider-first |

**Key insight:** Claude Code and Copilot CLI **prioritize safety and integration with existing ecosystems** (Anthropic, GitHub), while Codex and Gemini **push autonomous agent capabilities**. OpenCode and Pi are **most responsive to community bug reports**, with rapid fix cycles. Qwen Code and DeepSeek TUI are **building infrastructure for multi-tenant and multi-workflow deployments**.

---

## 5. Community Momentum & Maturity

| **Maturity Indicator** | **High** | **Medium** | **Low** |
|---|---|---|---|
| **Community engagement** | Claude Code (635👍 multi-account, 372👍 timeout bug) | Codex (228👍 token clustering) | Kimi Code (0👍 on both issues) |
| | OpenCode (202👍 paste expand) | Qwen Code (149 comments OAuth RFC) | |
| **Release cadence** | Claude Code (v2.1.202 today) | Qwen Code (nightly) | Copilot CLI (v1.0.69-2) |
| | Pi (high PR throughput) | Codex (alpha releases) | Kimi Code (no new release) |
| **Bugfix velocity** | Pi (7 PRs merged in 24h) | Qwen Code (4 PRs merged) | Copilot CLI (0 PRs in 24h) |
| | OpenCode (5 PRs merged) | Claude Code (1 PR merged) | |
| **Feature innovation** | DeepSeek TUI (fleet routing, constitution customization) | Codex (reasoning summary delivery) | Kimi Code (ACP usage exposure) |
| | Pi (constrained sampling, Requesty provider) | Gemini (AST-aware navigation) | |

**Rapidly iterating:** OpenCode, Pi, Qwen Code, DeepSeek TUI (high PR/issue throughput)
**Stable but slower:** Claude Code, Codex (fewer PRs but deeper architectural changes)
**Stagnant:** Kimi Code, Copilot CLI (low activity, no new features)

---

## 6. Trend Signals

### Strong Industry Trends (appearing across 3+ tools)

1. **Subagent orchestration maturity is the #1 gap.** Every tool with multi-agent capabilities (Claude Code, Codex, Gemini, Copilot, DeepSeek TUI, Pi) reports subagent reliability issues: false success reporting, model routing failures, token-budget exhaustion, and continuation boundary bugs. This is the **defining challenge** for AI CLI tools moving from demo to production.

2. **Cross-platform parity remains elusive.** Windows users consistently report missing features (Cowork tab, hooks, terminal rendering) and platform-specific bugs (non-UTF-8 encoding, ARM64 crashes, SIGPIPE). The industry is still macOS/Linux-first.

3. **MCP is becoming the universal extension protocol**, but integration quality varies. Tools supporting MCP (Claude Code, Copilot, OpenCode, Qwen Code) all report late-connection bugs, tool schema ordering issues, and permission granularity problems.

4. **Billing transparency is an emerging trust crisis.** OpenCode's content-filter billing controversy and Qwen Code's free-tier RFC debate signal that users expect **zero-cost for blocked output** and **predictable rate limits**. This will likely become a compliance requirement.

5. **Session state management is fragile across all tools.** Auth leaks between sessions, conversation ordering bugs, zombie sessions burning tokens, and prompt leaking between sessions are universal pain points. No tool has solved this cleanly.

### Weaker Signals (1-2 tools)

- **Voice/multimodal input** is early-stage (Copilot, Claude Code) and frequently broken.
- **AST-aware codebase navigation** is Gemini-specific and promising but unproven at scale.
- **Event-driven agent wake** (Codex, Claude Code requests) suggests the industry wants to move beyond turn-based interaction.
- **Constitution customization** (DeepSeek TUI) points toward user-configurable agent behavior policies.

### Recommendation for Developers

If you're evaluating which tool to invest in:

- **For production enterprise use:** Claude Code offers the most mature safety and workflow features, but monitor the Linux safety filter regression.
- **For autonomous agent experimentation:** Codex and Gemini push boundaries, but expect reliability issues with subagents.
- **For TUI-first or extension-heavy workflows:** Pi and OpenCode have the fastest bugfix cycles and most responsive communities.
- **For CI/CD and multi-workspace setups:** Qwen Code's daemon architecture is unique and promising.
- **For cross-platform teams:** No tool provides a seamless Windows experience yet—budget for workarounds.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
*Data as of 2026-07-07 | Source: github.com/anthropics/skills*

---

## 1. Top Skills Ranking

The following Pull Requests have attracted the most community discussion and represent the most-watched Skills activity:

### #1298 — fix(skill-creator): run_eval.py always reports 0% recall
**Status:** Open | **Author:** MartinCajiao | **Created:** 2026-06-10 | **Comments:** Highest in dataset
🔗 [PR #1298](https://github.com/anthropics/skills/pull/1298)

This is the most actively discussed PR in the repository. It addresses a critical bug in the `run_eval.py` script used by the skill-creator workflow: the evaluation pipeline systematically reports 0% recall for all skill descriptions, effectively causing the description-optimization loop to optimize against noise. The fix installs the eval artifact as a real skill, fixes Windows stream reading, trigger detection, and parallel workers. This PR directly addresses multiple unresolved issues (#556, #1169, #1061) and has 10+ independent reproductions confirming the defect.

### #514 — Add document-typography skill
**Status:** Open | **Author:** PGTBoos | **Created:** 2026-03-04
🔗 [PR #514](https://github.com/anthropics/skills/pull/514)

Proposes a typographic quality control skill that prevents common formatting issues in AI-generated documents: orphan word wrap, widow paragraphs, and numbering misalignment. The discussion highlights that these problems affect "every document Claude generates" and represent a universal pain point that users rarely request remediation for.

### #486 — Add ODT skill (OpenDocument text creation)
**Status:** Open | **Author:** GitHubNewbie0 | **Created:** 2026-03-01
🔗 [PR #486](https://github.com/anthropics/skills/pull/486)

A comprehensive skill for creating, filling, reading, and converting OpenDocument Format files (.odt, .ods). Includes template filling and ODT-to-HTML conversion. Triggers on mentions of "ODT", "ODS", "ODF", "OpenDocument", or "LibreOffice document".

### #1367 — feat(skills): add self-audit skill (v1.3.0)
**Status:** Open | **Author:** YuhaoLin2005 | **Created:** 2026-06-28 | **Updated:** 2026-07-02
🔗 [PR #1367](https://github.com/anthropics/skills/pull/1367)

Adds a universal output audit skill that performs mechanical file verification followed by a four-dimension reasoning quality audit in damage-severity priority order. Claims to work "with any project, any tech stack, any model." Very recent, with active discussion through early July.

### #210 — Improve frontend-design skill clarity and actionability
**Status:** Open | **Author:** justinwetch | **Created:** 2026-01-05
🔗 [PR #210](https://github.com/anthropics/skills/pull/210)

A substantive revision of the existing frontend-design skill to improve clarity, actionability, and internal coherence. Every instruction is designed to be executable within a single conversation, with specific enough guidance to steer behavior without over-constraining.

### #83 — Add skill-quality-analyzer and skill-security-analyzer to marketplace
**Status:** Open | **Author:** eovidiu | **Created:** 2025-11-06
🔗 [PR #83](https://github.com/anthropics/skills/pull/83)

Introduces two meta-skills: a comprehensive quality analyzer evaluating across five dimensions (Structure & Documentation, examples, resources) and a security analyzer. These are community tools for improving the Skills ecosystem itself.

### #723 — Add testing-patterns skill
**Status:** Open | **Author:** 4444J99 | **Created:** 2026-03-22
🔗 [PR #723](https://github.com/anthropics/skills/pull/723)

A comprehensive testing skill covering the full stack: testing philosophy (Trophy model), unit testing (AAA pattern, pure functions), React component testing (Testing Library), and guidance on what to test vs. what NOT to test.

---

## 2. Community Demand Trends

Analysis of Issues reveals the following most-anticipated Skill directions:

| Demand Area | Key Issues | Signal |
|---|---|---|
| **Security & Trust Boundaries** | #492 (34 comments) | Highest-comment issue. Community concerns about skills distributed under `anthropic/` namespace enabling trust boundary abuse. Demand for permission systems, security analyzers. |
| **Org-wide Skill Sharing** | #228 (14 comments, 7👍) | Strong demand for enterprise skill distribution without manual file sharing. |
| **Skill-creator Pipeline Reliability** | #556 (12 comments, 7👍), #1169, #1061 | Multiple overlapping bug reports about 0% recall in evaluation, Windows compatibility failures. The single highest-pain area. |
| **Agent Governance & Safety** | #412 (6 comments) | Proposal for governance patterns: policy enforcement, threat detection, trust scoring, audit trails. |
| **SharePoint/Enterprise Document Handling** | #1175 (4 comments) | Concerns about security and context window limits when processing SPO documents via Skills. |
| **MCP Integration** | #16 (4 comments) | Interest in exposing Skills as Model Context Protocol interfaces for broader tool interoperability. |

The community's most pressing pain point is **skill-creator infrastructure reliability** — particularly the evaluation pipeline producing 0% recall on all queries (#556, #1169, #1061), which makes the optimization loop worthless. The second-largest demand cluster is around **security and trust** (#492, #412), with the community seeking governance and verification mechanisms.

---

## 3. High-Potential Pending Skills

These open PRs have active discussion and are likely to land soon:

1. **#1367 — self-audit skill** (2026-06-28) — Very recent, 4-day active discussion. Universal output verification and reasoning audit. High demand signal given the security trend.
2. **#1302 — color-expert skill** (2026-06-10) — Self-contained color expertise covering naming systems (ISCC-NBS, Munsell, XKCD, RAL), color spaces (OKLCH, OKLAB, CAM16), and accessibility. Narrow scope, well-defined.
3. **#806 — sensory skill (macOS automation via AppleScript)** (2026-03-29) — Native macOS automation via `osascript` with a two-tier permission system. High novelty.
4. **#1323 — fix(skill-creator): trigger detection misses real skill name** (2026-06-16) — Another fix for the 0% recall bug family. Directly unblocks the entire skill-creation optimization loop.
5. **#181 — SAP-RPT-1-OSS predictor skill** (2025-12-28) — Enterprise ML skill for SAP's open source tabular foundation model. Niche but significant for enterprise users.

---

## 4. Skills Ecosystem Insight

**The community's most concentrated demand is for reliable skill-creation infrastructure and security governance** — the evaluation pipeline's 0% recall bug (#556, #1298, #1323) has paralyzed the skill optimization loop for months, while trust boundary concerns (#492) have exposed a fundamental security gap in how community skills are distributed under Anthropic's namespace. The community is effectively self-organizing to fix the tooling before building on top of it.

---

# Claude Code Community Digest — 2026-07-07

## Today's Highlights

A new release (v2.1.202) introduces configurable dynamic workflow sizing, while the community remains sharply focused on two fronts: a safety-filter false positive wave hitting Linux users on Opus 4.8, and ongoing frustration with subagent model handling across continuation boundaries. The most-discussed open feature request—multi-account management in Claude Desktop—continues to gain traction with 635 upvotes.

## Releases

**v2.1.202** — [Release](https://github.com/anthropics/claude-code/releases/tag/v2.1.202)
- Added a "Dynamic workflow size" setting in `/config` for controlling how large Claude generally makes dynamic workflows (small/medium/large agent counts). This is an advisory guideline, not an enforced cap.
- Added `workflow.run_id` and `workflow.name` OpenTelemetry attributes to telemetry.

## Hot Issues

1. **[#73125 — "No response after 60s — continued without an answer"](https://github.com/anthropics/claude-code/issues/73125)** [CLOSED]  
   *Labels: bug, api:bedrock, platform:linux, area:tui, area:tools, platform:vscode*  
   The highest-comment issue (135 comments, 372 👍). When `AskUserQuestion` receives no response within 60 seconds, Claude proceeds without input. Community sentiment suggests this silently breaks multi-step workflows where human review is expected. Closed in this cycle.

2. **[#18435 — Multi-account switching in Claude Desktop](https://github.com/anthropics/claude-code/issues/18435)** [OPEN]  
   *Labels: enhancement, area:auth, area:ide*  
   The most-upvoted open feature request (635 👍, 125 comments). Users managing multiple teams or personal/professional Claude accounts want profile-based switching without re-authentication. No movement from Anthropic yet.

3. **[#48407 — Cowork tab missing in desktop app on Windows 11](https://github.com/anthropics/claude-code/issues/48407)** [OPEN]  
   *Labels: bug, platform:windows, area:cowork, area:desktop*  
   A persistent Windows-specific regression (38 comments) where the Cowork collaboration UI is entirely absent in v1.2581.0. High impact for Windows users relying on pair-programming workflows.

4. **[#75062-#75074 series — Safety filter false positive wave on Linux](https://github.com/anthropics/claude-code/issues/75062)** [OPEN]  
   *Labels: bug, platform:linux, area:model, area:security*  
   A cluster of ~8 nearly identical issue filings (all by sworrl) reporting Opus 4.8's "cyber" safety filter blocking routine project examination, directory listing, and status checks. Each `session-halted` severity. The volume suggests a systemic false-positive regression, not isolated incidents.

5. **[#75043 — Nested subagent async/nesting bugs](https://github.com/anthropics/claude-code/issues/75043)** [OPEN]  
   *Labels: bug, has repro, platform:macos, area:agents*  
   Orchestrator-pattern users hit a wall: subagent children are always async regardless of `run_in_background`, completion notifications don't propagate to the subagent parent, and `TaskStop` fails with ownership errors after resume. Critical for anyone building multi-level agent hierarchies.

6. **[#62503 — Appeal form redirect loop after account restriction](https://github.com/anthropics/claude-code/issues/62503)** [OPEN]  
   *Labels: bug, platform:macos, area:auth*  
   Users whose accounts are restricted cannot complete the appeal form due to an infinite redirect loop (31 comments). This effectively locks affected users out permanently—a significant support escalations risk.

7. **[#68147 — Subagent model override silently dropped after continuation](https://github.com/anthropics/claude-code/issues/68147)** [OPEN]  
   *Labels: bug, area:cost, area:model, area:agents*  
   When a subagent is dispatched with an explicit `model` parameter, Claude Code applies it only to the first leg. After a `SendMessage` follow-up or post-compaction resume, the override is silently dropped—potentially switching to a more expensive model mid-task.

8. **[#14280 — Stream bash command output in real-time in VS Code](https://github.com/anthropics/claude-code/issues/14280)** [OPEN]  
   *Labels: enhancement, area:tools, area:ide*  
   Long-standing request (66 👍, since Dec 2025) for VS Code extension users: when Claude runs bash commands, output appears only on completion—no streaming. Developers monitoring long builds or deployments find this limiting.

9. **[#75072 — VS Code extension doesn't load local MCP servers](https://github.com/anthropics/claude-code/issues/75072)** [OPEN]  
   *Labels: bug, platform:windows, area:mcp, platform:vscode*  
   Newly filed: the VS Code extension's chat panel ignores MCP servers added via `claude mcp add` (stored in `.claude.json`). Only built-in claude.ai connectors load. This breaks custom tool integrations for extension users.

10. **[#75071 — One invalid hook matcher silently disables ALL settings.json hooks](https://github.com/anthropics/claude-code/issues/75071)** [OPEN]  
    *Labels: bug, has repro, platform:macos, area:mcp, area:hooks, regression*  
    Two bugs in one: a single schema-invalid hook matcher entry kills all hook types with zero warnings, and `PostToolUse` never fires for MCP tools. Caused a 30-hour debugging session for the reporter.

## Key PR Progress

1. **[#41453 — Add safe Stop hook wrapper with PID lock and timeout](https://github.com/anthropics/claude-code/pull/41453)** [OPEN]  
   Reference implementation for running background tasks from Stop hooks without runaway processes. Addresses a long-standing concern (#41393) where hooks must return JSON immediately—this adds PID-file locking and timeout enforcement.

2. **[#74857 — Clarify plugin MCP configuration scope](https://github.com/anthropics/claude-code/pull/74857)** [CLOSED]  
   Documentation fix clarifying that plugin `mcpServers` config is for plugin-bundled MCP definitions and is separate from user-level MCP allow/deny lists in `~/.claude.json`. A source of confusion for plugin developers.

3. **[#74722 — Support Conventional Branch naming in /commit-push-pr](https://github.com/anthropics/claude-code/pull/74722)** [OPEN]  
   Adds an optional `conventional` argument to `/commit-push-pr` that creates branch names per the Conventional Branch 1.0.0 spec (`<type>/<description>` with type inferred from diff). Reduces friction for teams enforcing branch naming conventions.

## Feature Request Trends

- **Account & session management**: Multi-account switching (#18435, 635 👍), Claude Family household plans (#75063, new), and session group reordering/pinning (#70104) dominate the UX wishlist. Users want Claude Code to work across organizational boundaries and multiple profiles.
- **Agent visibility & control**: Persistent model display in UI (#75047), subagent model exposure in status line (#73654), workflow progress consolidation (#63982), and distinct notification sounds for "needs input" vs "done" (#73384). The theme is "I need to know what Claude is doing and which model is running."
- **MCP & integration breadth**: Multi-Slack-workspace support (#44243, 64 👍) signals that Connector-based integrations need to handle multi-tenant setups. The VS Code MCP loading gap (#75072) suggests extension parity with CLI/desktop is still incomplete.

## Developer Pain Points

1. **Safety filter false positives**: The simultaneous flood of `[Bug][cyber]` filings (8+ issues in one day from a single reporter) on Linux/Opus 4.8 suggests a regression where routine operations trigger session-halting blocks. This is a productivity killer—users cannot examine their own projects.

2. **Subagent reliability after continuations**: Two related bugs (#68147, #75043) show that subagent behavior degrades after continuation boundaries—model overrides are dropped, async behavior is forced, and task stop commands fail. For users building orchestrator patterns, this is a showstopper.

3. **Silent hook failures**: Issue #75071 reveals that Claude Code silently discards all hooks when a single matcher entry is invalid, with zero warnings. Combined with the "non-blocking status code" false positive for successful hooks (#66952), the hook system has trust issues.

4. **Cross-platform parity gaps**: Windows users miss the Cowork tab (#48407), and the VS Code extension lacks local MCP support (#75072) and real-time bash streaming (#14280). The experience varies significantly by platform.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-07-07

## Today's Highlights

A new Rust alpha release (`v0.143.0-alpha.37`) shipped, though the release notes remain empty. Community attention remains laser-focused on a critical GPT-5.5 reasoning token clustering bug (#30364) that has accumulated 131 comments and 228 reactions, indicating widespread performance degradation on complex tasks. Meanwhile, infrastructure work accelerates with multiple PRs targeting Windows CI bottlenecks, proxy routing for inference traffic, and thread lifecycle atomicity — signaling a push toward production hardening.

## Releases

- **rust-v0.143.0-alpha.37** — Published as `0.143.0-alpha.37`. No changelog details provided.
  - [Release link](https://github.com/openai/codex/releases/tag/rust-v0.143.0-alpha.37)

## Hot Issues

1. **#30364 — GPT-5.5 reasoning-token clustering at 516/1034/1552**  
   Community-discovered pattern where `reasoning_output_tokens` consistently lands on fixed boundaries, leading to degraded complex task performance. 131 comments, 228 👍. This has become the single most engaged issue in the tracker, suggesting a systemic model-serving artifact.
   [Issue #30364](https://github.com/openai/codex/issues/30364)

2. **#8648 — Codex replies to earlier messages instead of latest**  
   Long-standing (since Jan 2026) conversation ordering bug where the assistant responds to stale messages in multi-turn chats. 87 comments, 55 👍. Still unaddressed despite being nearly 7 months old.
   [Issue #8648](https://github.com/openai/codex/issues/8648)

3. **#12115 — Dynamically loading nested AGENTS.md**  
   Feature request for on-demand AGENTS.md loading similar to Claude Code's behavior. 23 comments, 83 👍. Strong demand for hierarchical agent configuration that doesn't require manual flattening.
   [Issue #12115](https://github.com/openai/codex/issues/12115)

4. **#12862 — CLI: --worktree and --tmux flags**  
   Request for first-class isolated session management with git worktrees and tmux integration. 19 comments, 85 👍. Shows strong CLI power-user desire for reproducible sandboxed workflows.
   [Issue #12862](https://github.com/openai/codex/issues/12862)

5. **#30440 — Codex uses bundled pnpm instead of host toolchain**  
   Sandbox toolchain isolation breaks existing build scripts because Codex substitutes its own pnpm. 18 comments, 21 👍. Critical for monorepo teams with custom toolchain configurations.
   [Issue #30440](https://github.com/openai/codex/issues/30440)

6. **#24246 — macOS "Malware Blocked" alert for Codex helper**  
   Users encountering macOS security dialogs claiming the Codex helper contains malware. 14 comments, 10 👍. Trust and signing pipeline concerns for desktop users.
   [Issue #24246](https://github.com/openai/codex/issues/24246)

7. **#16933 — Hook additionalContext rendered as visible developer message**  
   CLI renders hook output intended to be invisible to the transcript as a visible developer message, contradicting documented integration behavior. 14 comments, 3 👍.
   [Issue #16933](https://github.com/openai/codex/issues/16933)

8. **#20683 — Computer Use crashes on Outlook inspection (macOS)**  
   `get_app_state` on Outlook triggers a crash in `SkyComputerUseService`. 13 comments. Impacts enterprise users relying on desktop automation.
   [Issue #20683](https://github.com/openai/codex/issues/20683)

9. **#20312 — Native event-driven session wake primitive**  
   Request for waking idle sessions on external events (chat mentions, MCP pushes, file changes). 9 comments, 3 👍. Highlights a fundamental architectural limitation for real-time agent use cases.
   [Issue #20312](https://github.com/openai/codex/issues/20312)

10. **#31322 — Usage limits regressed after morning normalization, draining 5x faster**  
    Recurring rate-limit issue where normalized consumption reverted to aggressive draining within a single day. 3 comments. Part of a growing pattern of rate-limit instability complaints.
    [Issue #31322](https://github.com/openai/codex/issues/31322)

## Key PR Progress

1. **#31306 — Support sequential cutoff reasoning summaries**  
   Adds a `stream_options.reasoning_summary_delivery = "sequential_cutoff"` mode, ignoring partial summary events and rendering only cutoff summaries. Likely a response to #30364's token clustering concerns.
   [PR #31306](https://github.com/openai/codex/pull/31306)

2. **#31335 — Route Responses API through system proxy**  
   Extends `respect_system_proxy` from auth traffic to the primary inference path, solving connectivity for users behind OS-managed proxies. First production use of proxy routing.
   [PR #31335](https://github.com/openai/codex/pull/31335)

3. **#31338 — Couple thread activity to submissions**  
   Mirrors submission reservations into a thread activity tree, making idle shutdown atomic and preventing session teardown from erasing completion barriers. Core concurrency correctness improvement.
   [PR #31338](https://github.com/openai/codex/pull/31338)

4. **#31333 — Track thread publication lifecycle**  
   Registers threads under stable IDs with parent tracking and incarnation generations to prevent stale handles from mutating replacement threads.
   [PR #31333](https://github.com/openai/codex/pull/31333)

5. **#31332 — Route build IO through shared CI setup**  
   Moves Cargo/Bazel filesystem paths behind shared CI setup, giving Windows jobs a Dev Drive-backed root. Addresses a major CI bottleneck.
   [PR #31332](https://github.com/openai/codex/pull/31332)

6. **#31339 — Measure Windows Bazel test bottlenecks**  
   Adds instrumentation to collect CPU, disk, network, and memory counters under forced test execution on Windows. Evidence-based CI optimization.
   [PR #31339](https://github.com/openai/codex/pull/31339)

7. **#31337 — Restore Codex environment setup table**  
   Fixes a regression where `environment.toml` omitted the required `[setup]` object, breaking codex worktree creation. Small but critical fix.
   [PR #31337](https://github.com/openai/codex/pull/31337)

8. **#31274 — Add externally provided Codex auth**  
   Adds an in-memory externally provided auth snapshot with explicit runtime capabilities through the existing `ExternalAuth` path. Enables delegated auth scenarios.
   [PR #31274](https://github.com/openai/codex/pull/31274)

9. **#31334 — Align skill creator paths with supported locations**  
   Documents and enforces the correct directory structure for skills: `.agents/skills` for repos, `$HOME/.agents/skills` for users, `/etc/codex/skills` for admin. Reduces user confusion.
   [PR #31334](https://github.com/openai/codex/pull/31334)

10. **#30138/#30139/#30141 — UserInstructions hook chain (3 PRs)**  
    A stacked series defining the UserInstructions hook contract, adding repeatable declarations, and loading aggregated instructions at session construction. Enables composable user-provided instruction pipelines.
    [PR #30138](https://github.com/openai/codex/pull/30138) | [PR #30139](https://github.com/openai/codex/pull/30139) | [PR #30141](https://github.com/openai/codex/pull/30141)

## Feature Request Trends

The community is converging on several clear demand signals:

- **Hierarchical agent configuration**: Multiple requests for nested AGENTS.md loading (#12115, 83 👍), indicating users want modular, directory-scoped agent behavior without flat configuration.
- **Event-driven agent wake primitives**: #20312 and related threads demand native support for waking idle sessions on external triggers (file changes, MCP events, chat mentions). Current turn-driven architecture is a blocker for reactive workflows.
- **Isolated session management**: #12862's demand for `--worktree`/`--tmux` (85 👍) shows power users want reproducible, sandboxed development environments without manual git worktree setup.
- **Rate-limit transparency**: #29618's request for detailed reset-credit exposure suggests users want to understand and predict consumption patterns, especially given the volatility reported in #31322.
- **Native event system**: A recurring theme of session lifecycle events, wake-on-event, and hook-based extensibility shows the community wants Codex to evolve from a chat interface toward an agent framework.

## Developer Pain Points

Several systemic frustrations emerge from this week's data:

- **Rate-limit instability is top of mind**: Issues #30364 (token clustering), #27142 (burning credits), #31322 (regression after normalization), and #31033 (context compaction) collectively paint a picture of unpredictable resource consumption that undermines trust in the platform.
- **Conversation state corruption**: #8648 (stale replies) and #29868 (ghost conversations) indicate fundamental issues with thread/session state management that persist for months without resolution.
- **Toolchain isolation breaks existing workflows**: #30440 (bundled pnpm) and #23574 (1M inotify watches) demonstrate that Codex's sandboxing and file-watching logic doesn't play well with established development environments.
- **macOS security friction**: #24246 (malware alert), #24006 (database access errors after update), and #25817 (Computer Use plugin failures) create a poor first impression and trust barrier for desktop users.
- **Hook transparency mismatch**: #16933's invisible-to-visible message rendering contradicts documented behavior and erodes confidence in the extensibility API.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

**Gemini CLI Community Digest**
**Date:** 2026-07-07

---

## Today's Highlights
Today's nightly release brings critical security hardening for macOS sandboxing and fixes a long-standing bug where escape sequences in string literals were corrupted. The community is heavily focused on subagent reliability and autonomy, with several high-priority bugs surfacing around agent hang, goal-reporting false positives, and destructive command execution. The most active discussions revolve around memory system deficiencies and the need for AST-aware codebase navigation.

---

## Releases
**v0.51.0-nightly.20260707.g15a9429b6** ([View Release](https://github.com/google-gemini/gemini-cli/releases/tag/v0.51.0-nightly.20260707.g15a9429b6))

Two fixes in this build:
- **Sandbox hardening**: The macOS sandbox now mounts `~/.gitconfig` as read-only, closing a vector where sandboxed processes could modify git aliases or hooks (PR [#28221](https://github.com/google-gemini/gemini-cli/pull/28221)).
- **Escape sequence preservation**: Escape sequences like `\n` and `\t` inside string literals are no longer converted to literal newlines when writing files, fixing a critical corruption bug for LLM-generated code (PR [#28299](https://github.com/google-gemini/gemini-cli/pull/28299)).

---

## Hot Issues (Top 10 by Community Activity)

1. **#22323 – Subagent recovery after MAX_TURNS reported as GOAL success** ([Issue](https://github.com/google-gemini/gemini-cli/issues/22323))
   - **Why it matters**: A subagent (`codebase_investigator`) reports "success" after hitting the turn limit without doing any analysis. This false-positive masks real failures and degrades trust in agent orchestration. 10 comments, 2 upvotes. *Priority P1, kind/bug.*

2. **#21409 – Generalist agent hangs indefinitely** ([Issue](https://github.com/google-gemini/gemini-cli/issues/21409))
   - **Why it matters**: Users report the generalist agent hangs for up to an hour on simple tasks (e.g., folder creation). Workaround requires disabling subagents entirely. 7 comments, 8 upvotes—highest community engagement this week. *Priority P1, kind/bug.*

3. **#19873 – Leverage model's bash affinity via Zero-Dependency OS Sandboxing** ([Issue](https://github.com/google-gemini/gemini-cli/issues/19873))
   - **Why it matters**: Proposes a fundamental architecture shift to let Gemini 3 models use native POSIX tools directly, reducing dependency on tool-specific abstractions. 8 comments, 1 upvote. *Priority P2, kind/enhancement.*

4. **#24353 – Robust component-level evaluations** ([Issue](https://github.com/google-gemini/gemini-cli/issues/24353))
   - **Why it matters**: Epic tracking 76 behavioral eval tests across 6 models. The community is pushing for standardized, reproducible evaluation infrastructure. 7 comments. *Priority P1, kind/customer-issue.*

5. **#22745 – Assess impact of AST-aware file reads, search, and mapping** ([Issue](https://github.com/google-gemini/gemini-cli/issues/22745))
   - **Why it matters**: Could reduce tool-call turns by 2-5x through precise method-boundary reads and AST-driven navigation. 7 comments, 1 upvote. *Priority P2, kind/feature.*

6. **#25166 – Shell command execution stuck with "Waiting input" after completion** ([Issue](https://github.com/google-gemini/gemini-cli/issues/25166))
   - **Why it matters**: Simple CLI commands (e.g., `ls`) hang even after completion, breaking workflows. 4 comments, 3 upvotes. *Priority P1, kind/bug.*

7. **#26522 – Auto Memory retries low-signal sessions indefinitely** ([Issue](https://github.com/google-gemini/gemini-cli/issues/26522))
   - **Why it matters**: Sessions deemed "low-signal" are never marked processed, causing infinite retries and wasted API calls. 5 comments. *Priority P2, kind/bug.*

8. **#21968 – Gemini does not use skills and sub-agents enough** ([Issue](https://github.com/google-gemini/gemini-cli/issues/21968))
   - **Why it matters**: Users with custom skills (e.g., `git`, `gradle`) report the model ignores them unless explicitly instructed. 6 comments. *Priority P2, kind/bug.*

9. **#22672 – Agent should stop/discourage destructive behavior** ([Issue](https://github.com/google-gemini/gemini-cli/issues/22672))
   - **Why it matters**: Model occasionally uses `git reset --force` or destructive DB commands when safer alternatives exist. 3 comments, 1 upvote. *Priority P2, kind/customer-issue.*

10. **#22267 – Browser Agent ignores settings.json overrides** ([Issue](https://github.com/google-gemini/gemini-cli/issues/22267))
    - **Why it matters**: `maxTurns` and other global/project settings are not respected by the browser agent, breaking user configuration expectations. 3 comments. *Priority P2, kind/bug.*

---

## Key PR Progress (Top 10 by Impact)

1. **#28221 – Make ~/.gitconfig read-only in macOS sandbox** ([PR](https://github.com/google-gemini/gemini-cli/pull/28221))
   - **What**: Removes `~/.gitconfig` from sandbox writable set. *Merged. Status: closed.*

2. **#28299 – Preserve escape sequences in string literals** ([PR](https://github.com/google-gemini/gemini-cli/pull/28299))
   - **What**: Fixes b-496211054: valid escape sequences no longer corrupted. *Merged. Status: closed.*

3. **#28223 – Bypass LLM correction for JSON and IPYNB files** ([PR](https://github.com/google-gemini/gemini-cli/pull/28223))
   - **What**: Prevents `write_file`/`replace` from corrupting `.json` and `.ipynb` files via aggressive unescaping. *Open. Status: need-issue.*

4. **#27971 – Strip thoughts from scrubbed history turns** ([PR](https://github.com/google-gemini/gemini-cli/pull/27971))
   - **What**: Resolves "thought leakage" where model reasoning leaks into plain-text history, causing infinite loops. *Open. Status: pr-nudge-sent.*

5. **#28244 – Safe test command for policy-engine docs** ([PR](https://github.com/google-gemini/gemini-cli/pull/28244))
   - **What**: Replaces dangerous `rm -rf /` example with a safe mock command. *Open. Status: none.*

6. **#28216 – Exclude transient CI credential files from workspace context** ([PR](https://github.com/google-gemini/gemini-cli/pull/28216))
   - **What**: Filters out `gha-creds-*.json` from workspace context to prevent accidental exposure. *Open. Status: need-issue.*

7. **#28089 – Implement MCP elicitation (form + url)** ([PR](https://github.com/google-gemini/gemini-cli/pull/28089))
   - **What**: Adds support for Model Context Protocol elicitation modes per 2025-11-25 spec. *Open. Status: pr-nudge-sent.*

8. **#28068 – Guard message inspectors against empty parts arrays** ([PR](https://github.com/google-gemini/gemini-cli/pull/28068))
   - **What**: Fixes vacuous `true` return for empty `parts` arrays, preventing categorization errors. *Merged. Status: closed.*

9. **#28301 – Bump version to nightly** ([PR](https://github.com/google-gemini/gemini-cli/pull/28301))
   - **What**: Automated version bump for today's nightly. *Open. Status: none.*

10. **#28223 (duplicate listing for completeness)** — *See above.*

---

## Feature Request Trends
- **AST-aware tooling** (#22745, #22746): Strong demand for abstract syntax tree parsing to improve method-boundary reads, reduce tool-call counts, and enable precise codebase mapping.
- **Zero-dependency OS sandboxing** (#19873): Users want to leverage Gemini 3's native bash proficiency without tool abstraction overhead, while maintaining security.
- **Subagent trajectory sharing** (#22598): Request to expose subagent execution paths via `/chat share` for easier debugging and evaluation.
- **Agent self-awareness** (#21432): Calls for the CLI to understand its own flags, hotkeys, and mechanics to act as its own user guide.
- **MCP elicitation** (#28089): Support for the Model Context Protocol's `form` and `url` elicitation modes, signaling demand for standardized agent-to-service interaction.

---

## Developer Pain Points
1. **False success reporting** (#22323): Subagents consistently misreport MAX_TURNS interruptions as successful GOAL completion, hiding real failures.
2. **Hanging execution** (#21409, #25166): Both generalist agents and simple shell commands frequently hang indefinitely, requiring manual cancellation.
3. **Destructive command generation** (#22672): Model occasionally uses force flags or destructive git operations without user confirmation.
4. **Memory system inefficiencies** (#26522, #26523, #26525): Auto Memory retries low-signal sessions, silently skips invalid patches, and lacks deterministic redaction for secrets.
5. **Tool overload** (#24246): 400 errors occur when >128 tools are available; no intelligent scoping mechanism exists.
6. **Subagent permission bypass** (#22093): Since v0.33.0, subagents run even when explicitly disabled in configuration.
7. **Terminal corruption** (#21924, #24935): High flicker on resize and corruption after exiting external editors in terminalBuffer mode.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest – 2026-07-07

## Today's Highlights
A minor patch release (v1.0.69-2) shipped today, improving MCP server sign‑in via the CLI OAuth callback flow and fixing a file‑inclusion issue. The community is increasingly focused on scoping plugins per project (Issue #1665) and on the ongoing reliability of multi‑agent orchestration (Issue #2367). A notable surge in triage‑tagged issues around MCP late connection bugs, voice mode ASR failures, and Windows hook compatibility signals growing adoption of advanced features—and the friction that comes with them.

## Releases
**v1.0.69-2** – *2026-07-07*  
- **Added:** `/rubber-duck` now appears in pre‑auth help and self‑documentation.  
- **Improved:** Sign‑in flow for MCP servers now uses the CLI OAuth callback pathway; full `/user` switch picker is revealed when the timeline is full (no longer clipped).  
- **Fixed:** File inclusion inside `n` was corrected.  
- [View release](https://github.com/github/copilot-cli/releases/tag/v1.0.69-2)

## Hot Issues
*(10 noteworthy items, ordered by community engagement)*

1. **#1665 – Project‑scoped plugins** *(CLOSED, 👍18)*  
   The most‑upvoted issue of the day. Currently plugins are global per‑user, but teams need repo/project‑specific logic. A merged PR suggests this is shipping soon.  
   [Issue #1665](https://github.com/github/copilot-cli/issues/1665)

2. **#1389 – Multi‑agent workflow system** *(CLOSED, 👍17)*  
   A feature request for a collaborative AI team (architecture, product, development agents) that orchestrates end‑to‑end development. Still closed with no merged PR—strong signal that users want this.  
   [Issue #1389](https://github.com/github/copilot-cli/issues/1389)

3. **#3596 – Session‑resume auth error** *(CLOSED, 👍11)*  
   Resuming a session causes `/model` to fail with “Not authenticated”. A high‑friction bug that forces users to start a fresh session.  
   [Issue #3596](https://github.com/github/copilot-cli/issues/3596)

4. **#3028 – MCP permissions / tool whitelisting** *(OPEN, 👍5)*  
   Users want fine‑grained allow‑listing of tools offered by MCP servers (similar to “trustedFolders”). Currently all tools are either allowed or blocked.  
   [Issue #3028](https://github.com/github/copilot-cli/issues/3028)

5. **#3074 – Add `/effort` command** *(OPEN, 👍6)*  
   Switching reasoning effort via `/model` is multi‑step. A dedicated `/effort` slider would let users quickly tune performance vs.‑depth.  
   [Issue #3074](https://github.com/github/copilot-cli/issues/3074)

6. **#1428 – Bash tool hangs in Nix shell** *(CLOSED, 👍7)*  
   The `bash` tool hangs for 30+ seconds inside a `nix develop` environment. Affects all users relying on Nix‑based dev shells.  
   [Issue #1428](https://github.com/github/copilot-cli/issues/1428)

7. **#4034 – Hook subprocess stdin EOF not closed for tool‑use hooks** *(CLOSED, 👍0)*  
   A subtle but severe bug: `$(cat)` patterns in custom hooks hang because the stdin write‑end is never closed for `preToolUse`/`postToolUse` hooks.  
   [Issue #4034](https://github.com/github/copilot-cli/issues/4034)

8. **#4038 – Late‑connecting MCP server injects empty user message** *(OPEN, triage)*  
   In non‑interactive mode (`copilot -p "..."`) an MCP server with 7+ tools causes the model to echo system‑prompt tool lists instead of answering.  
   [Issue #4038](https://github.com/github/copilot-cli/issues/4038)

9. **#4024 – Voice mode: all bundled ASR models return empty transcriptions** *(OPEN)*  
   `/voice` captures audio correctly but every transcription is empty—for all three built‑in models—likely a routing bug in the MultiModalProcessor.  
   [Issue #4024](https://github.com/github/copilot-cli/issues/4024)

10. **#4001 – Windows hooks incompatible with `.claude/settings.json`** *(OPEN)*  
    On Windows, hooks are executed via PowerShell instead of bash, and `$CLAUDE_PROJECT_DIR` is unset, breaking every hook and failing closed.  
    [Issue #4001](https://github.com/github/copilot-cli/issues/4001)

## Key PR Progress
*(No pull requests were updated in the last 24 hours.)*

## Feature Request Trends
- **Project‑scoped plugins (#1665, #4032):** The strongest community signal—users need per‑repo plugin configurations, not just global installs.  
- **Multi‑agent orchestration (#1389, #2367):** Users want the CLI to coordinate specialized sub‑agents (e.g., architecture, testing) without manual hand‑offs.  
- **Local / private models (#4003, #4037):** Demand is growing to support custom model endpoints (BYOK) in ACP server mode and in the CLI itself, mirroring VS Code’s model panel.  
- **Voice mode reliability (#4024, #4035):** Voice ASR is not yet production‑ready; users report silent failures across all bundled models and installer auth errors.  
- **Hooks ecosystem (#4001, #4034):** Hooks are increasingly used for custom workflows, but cross‑platform (especially Windows) and EOF handling remain fragile.

## Developer Pain Points
- **Authentication state leaks (#3596, #3902):** Resuming sessions or using ACP mode often results in stale auth states that require process restarts.  
- **Memory isolation (#3945):** Agent memories leak between repositories, causing incorrect assumptions about project context.  
- **Windows parity (#4001, #4034):** Hooks and tool integrations are still second‑class citizens on Windows—both execution environment and variable setup differ from macOS/Linux.  
- **MCP server quirks (#4038, #3028):** Late‑connecting MCP servers and a lack of tool‑level permissions create unpredictable behavior, especially in non‑interactive pipelines.  
- **Voice mode regression (#4024, #4035):** A flagship feature that is currently broken for all users—no transcription output and installer failures on private feeds.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-07-07

## 1. Today's Highlights
Activity was quiet on the release and PR front, with zero new releases or pull requests in the last 24 hours. Two issues were updated, one reporting a terminal rendering bug on Windows 11 and another requesting ACP-based usage limit exposure for IDE integration. The community remains focused on stability improvements and better platform extensibility.

## 2. Releases
No new releases were published in the last 24 hours. The latest known version remains **v0.22.0**.

## 3. Hot Issues
Two issues were updated in the last 24 hours; both are listed below as they represent the full set of community activity.

1. **[#2485 – [bug] code cli 错乱 || code cli is confused](https://github.com/MoonshotAI/kimi-cli/issues/2485)**  
   *Author: mynameiscuining | Updated: 2026-07-06 | Comments: 1*  
   **Why it matters:** Terminal output corruption after prolonged use on Windows 11. The first option in a selection menu disappears entirely. This affects developer UX for users on the dominant desktop platform. Community reaction is mild (0 upvotes), but the bug is reproducible and impacts reliability.

2. **[#2486 – Feature Request: Expose Kimi Code usage limits and reset times through ACP](https://github.com/MoonshotAI/kimi-cli/issues/2486)**  
   *Author: jgiacomini | Updated: 2026-07-06 | Comments: 0*  
   **Why it matters:** A developer building a Visual Studio 2026 ACP client wants to display usage limits and reset times (currently visible only in `/usage` console) via the ACP interface. This would enable richer IDE integrations and better user transparency. No upvotes yet, but the request targets a key ecosystem gap.

## 4. Key PR Progress
No pull requests were updated in the last 24 hours.

## 5. Feature Request Trends
Based on the two active issues, two distinct request directions emerge:

- **ACP API enrichment:** Expose usage quota and reset timestamps through the Anthropic Client Protocol (ACP) to enable third-party IDEs to show the same usage dashboard users see in the Kimi Code Console. This indicates growing demand for Kimi Code as a backend service rather than just a CLI tool.
- **Windows terminal stability:** Underlying performance and rendering fixes for Windows 11 users, especially regarding long-session terminal corruption.

## 6. Developer Pain Points
- **Terminal output corruption on Windows:** The `#2485` bug highlights a recurring frustration: the CLI becomes visually unusable after extended use, with menu items disappearing. This is a high-friction issue for Windows developers who rely on the CLI as a primary interface.
- **Lack of ACP-based usage introspection:** Developers integrating Kimi Code into custom IDEs (like Visual Studio 2026) cannot access usage limits programmatically, forcing them to rely on manual console checks or build workarounds.
- **Low community engagement on reported issues:** Both issues have zero upvotes, suggesting either low awareness, a small user base, or insufficient issue visibility. This may also indicate that bugs are reported but not prioritized by the community.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-07-07

## Today's Highlights

A flurry of V2 "gang-grill" cleanup issues were closed as the team consolidates the event schema redesign, while v1.17.14 shipped with a new Code Mode MCP adapter and pagination fixes. However, the community's attention is sharply focused on a **billing controversy** over content-filter charges for blocked output, with multiple users reporting no refunds and no human support responses.

## Releases

**v1.17.14** was released in the last 24 hours.

### Core Improvements
- Added a **Code Mode MCP adapter** for running confined orchestration scripts against connected MCP tools
- The `execute` tool is now hidden unless code mode is enabled

### Bugfixes
- Fixed paginated MCP tool catalogs losing tool metadata and output schema validation
- Additional unspecified preservation fix (truncated in source)

_No security advisories were published._

## Hot Issues

*Top 10 noteworthy issues by community impact and signal value.*

1. **[#8501 — [FEATURE]: Allow to expand the pasted text](https://github.com/anomalyco/opencode/issues/8501)**  
   *Comments: 28 | 👍 202*  
   Users love the paste-summarization feature but want to **expand** the collapsed snippet to edit or review it. 202 reactions signal near-universal demand. _Status: OPEN_

2. **[#4276 — Is zen/big-pickle glm 4.6?](https://github.com/anomalyco/opencode/issues/4276)** *(CLOSED)*  
   *Comments: 31 | 👍 3*  
   A long-running question about model lineage — users suspect Zen and Big-Pickle share architecture with GLM 4.6 (200k context). Closed without official confirmation, but remains a reference point for model-skepticism threads.

3. **[#31119 — [BUG]: Error: no such column: name](https://github.com/anomalyco/opencode/issues/31119)**  
   *Comments: 10 | 👍 8*  
   A regression hitting users upgrading from 1.16.2 — the app breaks entirely with a SQL schema mismatch. Blocks all usage until fixed. _Status: OPEN_

4. **[#34754 — The opencode funneling scam](https://github.com/anomalyco/opencode/issues/34754)** *(CLOSED)*  
   *Comments: 7 | 👍 0*  
   Heated user-report alleging UX dark patterns that charged users for **Zen** subscriptions when they intended to purchase **GO**. Closed with no resolution noted — community frustration is high.

5. **[#19130 — Windows ARM64 native: OpenTUI fails with bun:ffi dlopen TinyCC error](https://github.com/anomalyco/opencode/issues/19130)**  
   *Comments: 8 | 👍 7*  
   The native ARM64 binary works for CLI commands but the TUI crashes on startup. Windows-on-ARM adoption is growing, making this a platform-gap pain point. _Status: OPEN_

6. **[#34341 — V2: route progressive AGENTS.md through System Context](https://github.com/anomalyco/opencode/issues/34341)**  
   *Comments: 6 | 👍 0*  
   Core design issue for V2: current path-scoped `AGENTS.md` injection creates "sticky" user messages with accidental lifetimes. The proposed fix routes them through System Context for proper lifecycle management. _Status: OPEN_

7. **[#35644 — Content filter charges users for output it blocks — billing safeguard](https://github.com/anomalyco/opencode/issues/35644)**  
   *Comments: 1 | 👍 0*  
   A systemic billing issue: users pay full token costs for output that the content filter blocks before delivery. Zero output, full charge. Filed today. _Status: OPEN, tag: needs:compliance_

8. **[#35645 — No human support response on billing dispute — escalation request](https://github.com/anomalyco/opencode/issues/35645)**  
   *Comments: 1 | 👍 0*  
   User filed a billing dispute (#35475) for ~$20 in content-filter charges, posted 4 follow-ups, but only received automated replies. No human escalation path. _Status: OPEN, tag: needs:compliance_

9. **[#29175 — Direct child sessions hidden in parent session UI](https://github.com/anomalyco/opencode/issues/29175)**  
   *Comments: 3 | 👍 0*  
   Plugin-created child sessions via `session.create(parentID)` are invisible to the TUI because it only discovers subagents from native `task` tool metadata. Breaks plugin extensibility. _Status: OPEN_

10. **[#35611 — Go models inference slow/stuck on Windows (Desktop + TUI) after v1.17.14](https://github.com/anomalyco/opencode/issues/35611)**  
    *Comments: 2 | 👍 0*  
    Existing sessions on Windows stall at "thinking" post-update. Workaround: start a new session. Suggests a session-state migration regression. _Status: OPEN_

## Key PR Progress

*Top 10 pull requests driving the project forward.*

1. **[#35371 — feat(core): add durable compaction barrier](https://github.com/anomalyco/opencode/pull/35371)** *(CLOSED)*  
   Generalizes `session_input` into a typed durable inbox, introduces a manual compaction barrier, and blocks unprompted steers behind it. A foundational V2 infra change.

2. **[#35617 — feat(codemode): support promise chaining](https://github.com/anomalyco/opencode/pull/35617)** *(OPEN)*  
   Adds `then`, `catch`, `finally` support to sandbox promises, plus chainable `all`/`allSettled`/`race`. Makes Code Mode a viable scripting environment.

3. **[#35613 — feat(plugin): tool.execute.before can shortcircuit with canned output](https://github.com/anomalyco/opencode/pull/35613)** *(CLOSED)*  
   Plugins can now return a `{ title, output, metadata }` object from `tool.execute.before` to skip real tool execution entirely. Useful for mocking, caching, or access control.

4. **[#35629 — feat(core): expose OpenCode API in Code Mode](https://github.com/anomalyco/opencode/pull/35629)** *(OPEN)*  
   Registers the full V2 API under `tools.opencode.v2.*` for server-backed locations, enabling Code Mode scripts to call the same API as the TUI or desktop app.

5. **[#35311 — fix(core): Multiple clones of same repo are different projects](https://github.com/anomalyco/opencode/pull/35311)** *(OPEN)*  
   Closes **15 related issues** by correctly distinguishing separate clones of the same repository. A long-standing bug with a massive fix surface.

6. **[#35634 — fix(provider): ensure required array is present in object schemas](https://github.com/anomalyco/opencode/pull/35634)** *(OPEN)*  
   Fixes tool schemas with `additionalProperties: false` but no `required` field — the serialized `null` breaks strict JSON Schema validators. Closes #35528.

7. **[#35204 — fix(core): disable mcp tool call timeout](https://github.com/anomalyco/opencode/pull/35204)** *(CLOSED)*  
   Removes the SDK default request timeout for MCP `tools/call`, preventing premature cancellation of long-running tools that wait for user elicitation.

8. **[#35619 — feat(http-recorder): sync recorder v0.3](https://github.com/anomalyco/opencode/pull/35619)** *(OPEN)*  
   Syncs the in-sourced HTTP recorder with upstream 0.3 behavior, adding `hasCassetteSync` and `removeCassetteSync` for safe fixture gating. Important for test infrastructure.

9. **[#35635 — feat(desktop): support RTL direction and alignment](https://github.com/anomalyco/opencode/pull/35635)** *(OPEN)*  
   Implements dynamic RTL text direction and alignment for Persian, Arabic, Hebrew, etc. in desktop markdown rendering and input. Tag: `needs:compliance`.

10. **[#35612 — fix(nvidia): send correct reasoning control for MiniMax M3](https://github.com/anomalyco/opencode/pull/35612)** *(CLOSED)*  
    NVIDIA NIM's MiniMax-M3 uses a different thinking-mode parameter (`chat_template_kwargs.thinking_mode`) than the Anthropic-style shape. Fixes broken reasoning for this provider.

## Feature Request Trends

The past 24 hours reveal **five dominant feature request directions**:

1. **Session Identity & Organization** — Multiple requests (#30926, #35627, #35592) demand **auto-generated session titles** in the desktop app sidebar, replacing the generic "New session" label. The community wants topic-based naming for parallel session management.

2. **Clipboard & Paste UX** — Issue #8501 (202 👍) calls for **expandable paste previews**, while #26695 requests **Cmd+V image paste in TUI terminals**. Users need more control over what they paste and how it's represented.

3. **i18n & Accessibility** — Issue #35601 requests **Chinese (zh-CN) localization** for desktop app menus, and PR #35635 adds **RTL text support**. Global user base expansion is driving this.

4. **Billing Transparency & Safeguards** — Issues #35644, #35645, #35643 demand **no-charge for content-filtered output** and **human billing support**. This is currently the most emotionally charged topic in the community.

5. **Cross-Session Isolation** — Issue #35587 reports **prompt leaking between sessions** (arrow-up history contamination), pointing to a deeper need for hermetic session state.

## Developer Pain Points

*Recurring frustrations extracted from today's issues and PR conversations:*

- **Content-filter billing** is the top pain point: users are charged for blocked output with no recourse, and support automation loops without human escalation. Multiple "needs:compliance" tags appeared today.
- **Windows platform stability** on both ARM64 (#19130) and x64 (#35611) remains fragile — TUI crashes, slow inference, and desktop app session-load failures.
- **Session state corruption** across upgrades (#31119 SQL schema mismatch, #35611 migration regression) erodes trust in backward compatibility.
- **Plugin extensibility gaps** (#29175 child sessions invisible, #8820 "Other" provider option missing) frustrate users building custom integrations.
- **Billing dispute resolution** is a serious trust issue — users are publicly escalating to GitHub issues because support channels are unresponsive to billing errors.

*Maintainers are actively consolidating V2 architecture (6 closed gang-grill issues today) and improving MCP/Code Mode integration, but the user experience friction around billing and session management is generating louder community noise.*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# 🥧 Pi Community Digest — 2026-07-07

## 1. Today's Highlights
A major burst of extension lifecycle and TUI stability fixes landed this week, with 50 issues and 18 pull requests updated in the last 24 hours. The most impactful work includes Armin Ronacher's (mitsuhiko) PRs adding constrained sampling support and fixing null-content crash bugs, plus critical cache token double-counting fixes from the community. Two long-standing UX bugs—the `Escape`-during-run hang and empty tool result mislabeling—were finally closed after community escalation.

---

## 2. Releases
No new releases published in the last 24 hours.

---

## 3. Hot Issues (10 noteworthy)

### 🐛 #6376 — Thinking blocks inappropriately stripped in newer Claude models
**Status:** OPEN | **Comments:** 3
Newer Anthropic models (Sonnet 5, Opus 4.7/4.8) omit `thinking` text from their API response, causing Pi to strip thinking blocks from subsequent calls. Community notes this breaks extended reasoning chains. Requires distinguishing model-generations in the Anthropic adapter.
📎 [earendil-works/pi#6376](https://github.com/earendil-works/pi/issues/6376)

### 🐛 #6234 — Escape leaves Pi stuck in Working when extension hook never settles
**Status:** CLOSED | **Comments:** 8
Pressing Escape during a run leaves the TUI permanently stuck in "Working..." if an extension context hook doesn't settle. Users reported needing to kill and restart Pi. The double-Escape workaround is unreliable. One of the highest-comment threads this cycle.
📎 [earendil-works/pi#6234](https://github.com/earendil-works/pi/issues/6234)

### 🐛 #6103 — OpenAI Responses API mislabels empty tool results as "(see attached image)"
**Status:** CLOSED | **Comments:** 6
Empty tool outputs (e.g., `grep` with no matches) were labeled as having an attached image, causing hallucinations. This bug was latent in core but exposed by the `pi-hashline-edit-pro` extension. Community requested better empty-result placeholders.
📎 [earendil-works/pi#6103](https://github.com/earendil-works/pi/issues/6103)

### 🐛 #6362 — Paste counter not reverted when pasted content is removed
**Status:** CLOSED | **Comments:** 4
Deleting a paste marker (e.g., `[Paste #2 +12 lines]`) and then pasting new content assigns a new Paste #3 instead of recycling. Community strongly agreed this breaks undo expectations.
📎 [earendil-works/pi#6362](https://github.com/earendil-works/pi/issues/6362)

### 🐛 #6355/#6353 — Cache hit rate denominator double-counts cache tokens
**Status:** CLOSED | **Comments:** 2 each
Anthropic's API convention is that `input_tokens` already includes cache subtokens. Two code locations in `footer.ts` and `panel.ts` were adding them again, inflating CH% and context% metrics. Community member `keeplearning2026` provided exact line references and a fix PR.
📎 [earendil-works/pi#6355](https://github.com/earendil-works/pi/issues/6355) | [earendil-works/pi#6353](https://github.com/earendil-works/pi/issues/6353)

### 🐛 #6321 — `/fork` spawns one extra session per Enter while fork is running
**Status:** OPEN | **Comments:** 2
Confirmed in `pi -ne` mode. Pressing Enter in the fork selector calls `runtimeHost.fork()` which is awaited, but the selector closes before the fork fully resolves. Core issue, not extension-related.
📎 [earendil-works/pi#6321](https://github.com/earendil-works/pi/issues/6321)

### 🐛 #6250 — Ctrl+V image paste silently fails on Linux/X11 in Bun release binary
**Status:** OPEN | **Comments:** 2
Native clipboard binding (`@mariozechner/clipboard`) cannot resolve in the compiled Bun executable on X11. Worked in v0.78.0, broken in v0.80.3. Requires addon path resolution fix in the build pipeline.
📎 [earendil-works/pi#6250](https://github.com/earendil-works/pi/issues/6250)

### 🐛 #6359 — TUI segfaults on small-ICU Node builds (Intl.Segmenter null deref)
**Status:** CLOSED | **Comments:** 2
RHEL's minimal Node RPM lacks `Intl.Segmenter`, causing a segfault in the Pi TUI. `pi --mode json` works fine. Community and maintainers agreed on adding a feature-detection guard before calling `Intl.Segmenter`.
📎 [earendil-works/pi#6359](https://github.com/earendil-works/pi/issues/6359)

### 🐛 #6371 — Missing `thinkingLevelMap` for Sonnet 5 and Sonnet 4.6
**Status:** CLOSED | **Comments:** 2
`xhigh` thinking level hidden from the picker because these models lack the explicit mapping. Both models support effort `max` as their top tier. Simple config patch needed.
📎 [earendil-works/pi#6371](https://github.com/earendil-works/pi/issues/6371)

### 🐛 #6380 — Extension lifecycle: inconsistent loading on restart/resume vs `/new`
**Status:** CLOSED | **Comments:** 1
Extensions placed in `~/.pi/agent/extensions/` load on restart but not on `/new` sessions. Filesystem scanning is inconsistent across lifecycle events. Community flagged this as disruptive for extension developers.
📎 [earendil-works/pi#6380](https://github.com/earendil-works/pi/issues/6380)

---

## 4. Key PR Progress (10 important)

### #6341 — feat(ai): support constrained sampling (mitsuhiko)
**Status:** OPEN to-discuss
Adds `constrainedSampling` config for tools, enabling JSON-schema constrained and grammar-based constrained tool arguments. The `strict` mode maps to OpenAI's `strict: true`, while `jsonSchema` unlocks grammar-based sampling for Anthropic/other providers. Major for deterministic tool output.
📎 [earendil-works/pi#6341](https://github.com/earendil-works/pi/pull/6341)

### #6285 — fix(agent): fail tool calls from length-truncated assistant messages (mitsuhiko)
**Status:** OPEN to-discuss
Reworks malformed arguments handling. Treats `length` stop as an error condition for tool execution. Streamed tool-call arguments now go through a best-effort salvage parser to avoid truncated-argument crashes.
📎 [earendil-works/pi#6285](https://github.com/earendil-works/pi/pull/6285)

### #6343 — fix(ai,agent,coding-agent): normalize null message content at ingestion boundaries (mitsuhiko)
**Status:** CLOSED
Adds runtime normalization to ensure `content` field is never null or missing, addressing multiple crash reports (#6259, #6276, #4909, #2785, #1670). Community strongly backed this defensive fix.
📎 [earendil-works/pi#6343](https://github.com/earendil-works/pi/pull/6343)

### #6290 — fix(ai): use "(no tool output)" placeholder for empty tool results without images (tzwm)
**Status:** CLOSED
Replaces `"(see attached image)"` with `"(no tool output)"` when empty results lack image content. Fixes hallucinations and solves the core of Issue #6103. Clean, minimal change.
📎 [earendil-works/pi#6290](https://github.com/earendil-works/pi/pull/6290)

### #6352 — fix(coding-agent): correct cache hit rate denominator and context token double-count (keeplearning2026)
**Status:** CLOSED
Fixes the double-counting in `footer.ts` and `panel.ts` (Issues #6355/#6353). Community member submitted both the bug report and the fix PR within hours.
📎 [earendil-works/pi#6352](https://github.com/earendil-works/pi/pull/6352)

### #6350 — feat(coding-agent): add `before_provider_headers` extension hook (pmateusz)
**Status:** CLOSED
Extensions can now add, override, or remove outgoing provider HTTP headers. Enables integration with LLM gateways, custom auth, and proxy middleware. Community requested this long-term.
📎 [earendil-works/pi#6350](https://github.com/earendil-works/pi/pull/6350)

### #6309 — Improve project-local pi config (mitsuhiko)
**Status:** CLOSED
`pi config -l` now opens project-local configuration. `pi config` defaults to global. Makes per-project resource selection actually usable. Clean UX improvement.
📎 [earendil-works/pi#6309](https://github.com/earendil-works/pi/pull/6309)

### #6267 — feat(coding-agent): add InlineExtension type for named inline extension factories (any-victor)
**Status:** CLOSED
Adds `InlineExtension` union type so inline extension factories get proper typing. Closes #6260. Streamlines the developer experience for local extension authors.
📎 [earendil-works/pi#6267](https://github.com/earendil-works/pi/pull/6267)

### #6241 — fix(tui): avoid offscreen redraws for stable-height updates (dannote)
**Status:** CLOSED
TUI redraw fallback now clamps repainting to visible rows instead of full scrollback replay. Performance fix for stable-height updates; reduces flicker and CPU usage in large sessions.
📎 [earendil-works/pi#6241](https://github.com/earendil-works/pi/pull/6241)

### #5472 — feat(ai,coding-agent): add Requesty as native provider (Thibaultjaigu)
**Status:** CLOSED
Adds [Requesty](https://requesty.ai) as a native provider in `packages/ai`. Over 60,000 users. No more manual OpenAI-compatible endpoint configuration—`requesty/...` models work out of the box.
📎 [earendil-works/pi#5472](https://github.com/earendil-works/pi/pull/5472)

---

## 5. Feature Request Trends

### 🎯 Extension lifecycle & discovery (6+ requests)
- Deferred extension loading with three-tier strategy (lazy/async/sync) — Issue #6360, Issue #6380
- Session-scoped model overrides without mutating `settings.json` — Issue #6375
- `unknownToolResolver` hook for lazy tool discovery — Issue #6368
- `agent_idle` / `agent_run_end` RPC event for status sync — Issue #6363
- InlineExtension type for named factories — PR #6267

### 🎯 Provider & model improvements (4+ requests)
- OpenRouter server tools support — Issue #6365
- Session IDs for OpenRouter cache keys — Issue #6366
- Doubao (Volcengine Ark) as built-in provider — Issue #6328
- WebSocket support for Azure OpenAI — Issue #6372
- Requesty as native provider — PR #5472 (merged)

### 🎯 TUI & interactive mode (3+ requests)
- `/tree` full-detail inspect view for selected entries — Issue #6379
- Friendlier local extension identification in startup display — Issue #6325
- Jump-to-line-boundary on cursor up/down — PR #1050 (merged)

---

## 6. Developer Pain Points

### 🔸 **Clipboard & image handling fragility**
Three separate issues (#6250, #6373, #6362) around clipboard image paste failures: Native binding resolution on Linux/Bun, image-to-temp-file path problems with models that ignore file paths, and paste counter corruption on deletion. The community is asking for a unified, cross-platform clipboard/image pipeline.

### 🔸 **Extension lifecycle inconsistency**
Issue #6380 and #6360 both highlight that extension loading/unloading behaves differently on restart, `/new`, and resume. Developers want clear, documented lifecycle events and the ability to lazy-load extensions.

### 🔸 **Cache token accounting confusion**
Issues #6355/#6353 revealed that two separate locations in the TUI footer and panel were double-counting cache tokens against Anthropic's API convention. The community appreciates the quick fix PR #6352, but this points to a need for better token accounting test coverage.

### 🔸 **Thinking/Reasoning level clamping**
Issues #6376 (newer Claude models omitting thinking) and #6329 (level lost when switching between models with different reasoning tiers) show that thinking-level persistence across model switches is brittle. Developers want a model-agnostic thinking level abstraction.

### 🔸 **Local model server onboarding**
Issue #6305 highlights a newbie friction point: users who want to connect to local model servers (Ollama, vLLM) struggle with configuration. Requesting LAN auto-discovery or a simple URL input UI.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest – 2026-07-07

## Today’s Highlights
A major spike in bot and triage reliability issues dominated the past 24 hours, with the CI bot fabricating policy thresholds and `/review` downgrading its own approvals. On the feature side, the community saw early groundwork for **multi-workspace session support**, and a long-standing RFC about OAuth free-tier policy changes finally reached peak discussion. Several quick-fix PRs landed for PDF handling, Windows shell compat, and AutoMemory cursor advancement bugs.

## Releases
**v0.19.6-nightly.20260707.bcdb44c5d** was published with a single change that strengthens the PR triage gate:
- `fix(triage): strengthen PR gate with batch detection, problem existence check, and red flag patterns` by @pomelo-nwu – adds batch detection for large PRs, verifies problems actually exist in the codebase before flagging them, and applies red flag heuristics to reduce hallucinated policy enforcement.

> **No other release notes were provided.**

## Hot Issues (Top 10 by Activity)

1. **#3203 – Qwen OAuth Free Tier Policy Adjustment** – RFC with **149 comments** proposing to slash the free API tier from 1,000 to 100 requests/day and eventually close it entirely. The community remains deeply divided, with heavy pushback from solo developers and open-source maintainers.  
   [View Issue](https://github.com/QwenLM/qwen-code/issue/3203)

2. **#6378 – RFC: Support multiple workspaces in one qwen serve daemon** – Created yesterday, already at **19 comments**. Proposes moving from the current 1-daemon=1-workspace model to shared daemon with isolated per-workspace session trees. High interest from CI/CD and power users.  
   [View Issue](https://github.com/QwenLM/qwen-code/issue/6378)

3. **#6264 – `/review` skill consumes large amount of tokens** – User report with screenshots showing token overuse during code reviews. **6 comments** from others confirming similar observations; community is requesting per-skill token budgets.  
   [View Issue](https://github.com/QwenLM/qwen-code/issue/6264)

4. **#5964 – Zombie session burning 30M tokens (automatic disconnect not working)** – Chinese-language report with a dramatic "electronic cockroach" analogy. **5 comments**, includes traces of a session that ran 8 hours undetected. Priority P1, waiting for retest.  
   [View Issue](https://github.com/QwenLM/qwen-code/issue/5964)

5. **#6312 – Tracking: reduce per-session overhead on daemon session-creation path** – Tracking issue for a systemic performance problem where each `session/new` re-runs identical synchronous I/O. **5 comments** from core contributors exploring caching and lazy loading strategies.  
   [View Issue](https://github.com/QwenLM/qwen-code/issue/6312)

6. **#6338 – Stabilize tool schema order to avoid unnecessary prompt cache misses** – Closed as fixed. Tool registration order was non-deterministic under MCP discovery, causing cache misses and wasted tokens. Community relief in comments (“this was burning 15% of my daily budget”).  
   [View Issue](https://github.com/QwenLM/qwen-code/issue/6338)

7. **#6311 – AutoMemory cursor advances when forked agent “completes” without real work** – A local model hallucinated a bash command instead of writing a file, yet the memory cursor advanced and data was lost. **3 comments**, now fixed by PR #6398.  
   [View Issue](https://github.com/QwenLM/qwen-code/issue/6311)

8. **#6214 – Garbled text in run_shell_command output on Windows with non-UTF-8 code pages** – Persistent Windows encoding bug affecting CJK users. **3 comments**, root-cause traced to `cmd.exe` output encoding mismatch.  
   [View Issue](https://github.com/QwenLM/qwen-code/issue/6214)

9. **#6249 – Empty `arguments` string in streaming tool calls silently dropped** – Provider sends valid empty-arguments tool calls; the parser drops them, leading to retry loops and “Model stream ended with empty response text” errors. **2 comments**, closed with fix.  
   [View Issue](https://github.com/QwenLM/qwen-code/issue/6249)

10. **#6408 – Large PDF reads overflow prompt context** – A 100-page PDF injection caused "Context is too large" errors. **2 comments**, with PR #6409 already merged to gate PDF extraction to a safe budget.  
    [View Issue](https://github.com/QwenLM/qwen-code/issue/6408)

## Key PR Progress (Top 10)

1. **#6206 feat(qqbot): group message handling and cron-msg-experimental** – Splits a large QQ bot PR. Adds keyword triggers, @-mentions, and cron-based messaging for the QQ channel adapter. Preliminary code review ongoing.  
   [View PR](https://github.com/QwenLM/qwen-code/pull/6206)

2. **#6345 fix(cli): smoother streaming table rendering** – Polish to the TUI’s live-markdown table rendering: atomic row updates, fixed column widths during streaming, eliminated jitter and flash. Non-VP terminal users will see a major UX improvement.  
   [View PR](https://github.com/QwenLM/qwen-code/pull/6345)

3. **#6393 feat(cli): review auto-generated skills with inline preview and editor handoff** – When the skill reviewer stages new skills, the user now sees a code preview and can edit before deciding keep/discard. Also adds an in-dialog toggle to disable the feature entirely.  
   [View PR](https://github.com/QwenLM/qwen-code/pull/6393)

4. **#6398 fix(memory): don't advance AutoMemory extract cursor when agent makes zero tool calls** – Fix for #6311. The cursor only advances when the forked extractor agent actually calls tools, preventing silent memory-skip for hallucinated/empty completions. **Merged.**  
   [View PR](https://github.com/QwenLM/qwen-code/pull/6398)

5. **#6409 fix(core): Gate large PDF text extraction** – Adds a PDF read budget policy that prevents >10MB+ PDFs from injecting full text into the prompt. Large PDFs instead return a smart hint (use `pages=`). **Merged.**  
   [View PR](https://github.com/QwenLM/qwen-code/pull/6409)

6. **#6404 fix(core): Support large text range reads** – Instead of rejecting files >10MB, allows bounded line-range reads on large text/log files. Preserves encoding and line-ending metadata.  
   [View PR](https://github.com/QwenLM/qwen-code/pull/6404)

7. **#6410 feat(cli): Add Phase 2a workspace foundation** – Makes `--workspace` repeatable at the parser boundary, adds rejection logic for duplicate/nested/out-of-project workspace paths. All multi-workspace serve features remain gated (behind a flag).  
   [View PR](https://github.com/QwenLM/qwen-code/pull/6410)

8. **#6390 fix(shell): avoid Unix pager default on Windows** – Switches default `PAGER` from `cat` on Windows to unset unless explicitly configured. Fixes `run_shell_command` failures on Windows without WSL/Cygwin.  
   [View PR](https://github.com/QwenLM/qwen-code/pull/6390)

9. **#6377 fix(shell): block kill commands using pgrep command substitution** – Fixes #6246 by detecting `kill -9 $(pgrep node)` patterns that could wipe out Qwen Code’s own process. Adds pgrep-based command substitution to the self-kill guard.  
   [View PR](https://github.com/QwenLM/qwen-code/pull/6377)

10. **#6347 feat: extension file reload — watch for plugin changes and hot-reload runtime** – Auto-detects file changes in extension directories. Content changes (commands, skills, agents) apply inline; config/hook changes prompt `/reload-plugins`. Significant for extension developers.  
    [View PR](https://github.com/QwenLM/qwen-code/pull/6347)

## Feature Request Trends

- **Multi-workspace daemon architecture** – Two major proposals (#6378, PR #6410) signal a clear desire to share a single Qwen serve daemon across multiple projects/workspaces. The community sees this as critical for CI/CD pipelines and heavy multi-project users.
- **Selective deferred-tool visibility at startup** (#6368, PR #6372) – Users want a `tools.visible` setting to promote frequently-used deferred tools (e.g., `web_fetch`, `monitor_server`) to always-visible, removing the need for explicit `tool_search` calls.
- **Per-project model persistence** (PR #6060) – `/model --project` and `--global` flags for persisting model selection to project-level vs. user-level settings.
- **Per-session scheduled tasks** (PR #6389) – Each scheduled task runs in its own named, dedicated session. This keeps transcripts clean and gives scheduled jobs their own history instead of polluting user sessions.
- **Windows shell parity** – Multiple feature requests (#6214, #6298, #6390) targeting non-UTF-8 code pages, missing `cat` on Windows, and process management differences. Windows users are a growing segment demanding first-class support.

## Developer Pain Points

- **Token waste and zombie sessions** – Issues #5964 and #6264 highlight a recurring frustration: sessions that never disconnect, skill calls that burn excessive tokens, and a lack of automatic budget enforcement. Community members are asking for per-skill token caps and mandatory session timeout with logging.
- **Windows compatibility gaps** – At least 3 distinct bugs (#6214, #6298, #6390) involve shell execution on Windows: garbled output on non-UTF-8 code pages, missing `cat` command in pipe chains, and PAGER defaults that crash on native Windows. These create a poor early-trial experience for Windows users.
- **CI bot hallucination and false positives** – Issues #6365 and #6396 show the triage bot fabricating non-existent “core module protection policies” and the `/review` skill downgrading its own approvals because it counts its own check-run as pending CI. These automation bugs erode trust in the CI/CD feedback loop.
- **Streaming fragility with edge-case provider responses** – Issue #6249 (empty `arguments` string dropped) and #3804 (model stream ending with empty response text) point to brittle stream parsing. Developers using non-standard or lightweight providers are hit hardest, and retry loops waste tokens.
- **Compression and rewind incompatibility** – Issue #6318 reports that after `/compress`, the `/rewind` command fails even when targeting pre-compression positions. This breaks the core editing workflow for long-running sessions.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-07-07

## Today's Highlights
The v0.8.67 release has shipped to `main` (PR #4047), bringing Fleet/Workflow usability improvements, goal-timer fixes, and the `whaleflow→workflow` rename. However, a massive wave of 18+ child issues from the maintainer's internal review prompt have been opened, signaling a heavy QA and polish cycle ahead. The community is also actively submitting PRs for SIGPIPE crash fixes, UTF-8 cursor panics, and onboarding localization.

## Releases
**None in the last 24 hours.** The v0.8.67 release candidate was merged to `main` via PR #4047 earlier today, but no new version tag was published. The maintainer has opened a tracker (#4061) for the v0.8.67 release gates and a separate tracker for v0.8.68 work.

## Hot Issues (10 selected)

### [#4061 — v0.8.67 tracker: convert review/rebuild prompt into issue-driven release work](https://github.com/Hmbown/CodeWhale/issues/4061)
Maintainer-driven umbrella issue replacing a local prompt file. Represents the integration gate for the entire 0.8.67 QA pass. 18+ child issues hang off this.

### [#4065 — v0.8.68: fleet model-policy contract — decide, and prune two dead profile aliases](https://github.com/Hmbown/CodeWhale/issues/4065)
Decision record from a hidden branch; `FleetModelPolicy` + `Draft::manual()` are built but not harvested. Community should watch this for fleet routing improvements.

### [#4064 — Build constitution customization against the reduced 55-line constitution](https://github.com/Hmbown/CodeWhale/issues/4064)
A full constitution-customization stack exists on a hidden branch but targets the old 607-line constitution. Main now has 55 lines. Critical architectural alignment issue.

### [#4049 — Delegate sub-agents misroute DeepSeek model/provider and fail with model-not-found](https://github.com/Hmbown/CodeWhale/issues/4049)
Release-blocker severity. DeepSeek sessions work in the parent but delegated builder sub-agents fail with model-not-found. Community fix in PR #3969 is held for v0.8.68.

### [#4050 — Sub-agents must not complete successfully with empty child output](https://github.com/Hmbown/CodeWhale/issues/4050)
Workflow reliability issue. A child can finish on a tool call or max-steps without producing a summary, yet the runtime reports success. High-priority for production use.

### [#4054 — Non-verifiable goals should be completable and must stop continuation loops](https://github.com/Hmbown/CodeWhale/issues/4054)
Goals for docs/research/writing cannot be completed because the runtime requires a verifier receipt. Models get stuck in infinite continuation loops. Major UX blocker.

### [#4053 — Token-budget exhaustion should be a managed sub-agent failure/recovery path](https://github.com/Hmbown/CodeWhale/issues/4053)
Observed during dogfooding. Raw token-exhaustion text is surfaced to the user instead of a clean failure/recovery path. Impacts sub-agent reliability.

### [#4030 — Bug: panic on broken pipe (SIGPIPE) — crash dump when piping output](https://github.com/Hmbown/CodeWhale/issues/4030)
Two community upvotes. `codewhale doctor | head` panics with a crash dump instead of clean exit. Fix already submitted in PR #4043.

### [#4063 — Setup wizard step bodies are not scrollable — long steps unreadable at 80x24](https://github.com/Hmbown/CodeWhale/issues/4063)
UX regression in the setup wizard. No PageUp/PageDown or scroll offset. First-impression issue for new users.

### [#4062 — First-run onboarding hardcodes the DeepSeek provider](https://github.com/Hmbown/CodeWhale/issues/4062)
Contradicts the "every model/provider first-class" principle in CLAUDE.md. Non-DeepSeek API keys land in the DeepSeek slot. Community has mixed reactions — some rely on DeepSeek-centric defaults.

## Key PR Progress (10 selected)

### [#4047 — Release 0.8.67 — Fleet/Workflow usability, goal-timer fix, whaleflow→workflow rename](https://github.com/Hmbown/CodeWhale/pull/4047)
**CLOSED — Merged to `main`.** 78 commits clean fast-forward. Includes goal-timer fix and the `whaleflow` → `workflow` rename. No new version tag published; this is a release candidate.

### [#4046 — Layer 5.1: User command registry and loading boundary](https://github.com/Hmbown/CodeWhale/pull/4046)
**CLOSED — Merged.** From the staged command-boundary refactor epic (#2870). No production code changes — confirms the boundary already exists and passes acceptance criteria.

### [#4043 — fix(cli): reset SIGPIPE to SIG_DFL so piped output exits cleanly](https://github.com/Hmbown/CodeWhale/pull/4043)
**OPEN.** Direct fix for #4030. Resets SIGPIPE to default handler so piped output doesn't panic. Low-risk, high-value fix for shell scripting users.

### [#4045 — [codex] fix edit_file UTF-8 fuzzy cursor panic](https://github.com/Hmbown/CodeWhale/pull/4045)
**OPEN.** Fixes a panic when fuzzy-match cursor lands inside a CJK multibyte character. Important for East Asian language users.

### [#4044 — fix(onboarding): localize dynamic welcome steps](https://github.com/Hmbown/CodeWhale/pull/4044)
**OPEN.** Localizes the first-run welcome screen through the `MessageId` registry. Renders dynamic steps based on actual onboarding gates. Includes `zh-Hant` copy.

### [#3969 — Add per-sub-agent provider routing](https://github.com/Hmbown/CodeWhale/pull/3969)
**OPEN — Held for v0.8.68.** Adds explicit provider routing for sub-agents. Maintainer defers to align with fleet/routing redesign. Directly addresses #4049.

### [#4051 — v0.8.67: delegate cards should show spawned/running before done, never render empty ellipsis rows](https://github.com/Hmbown/CodeWhale/issues/4051)
Tracking for UITiming fix. UI shows `delegate done` before `delegate running` during fan-out bursts. Critical for operator confidence.

### [#4052 — v0.8.67: worktree=true should discover nested repos from harness directories](https://github.com/Hmbown/CodeWhale/issues/4052)
Worktree discovery fails when CWD is a harness directory above the real repo. Blocks workflows using parent-directory invocation.

### [#4055 — v0.8.67: teach operations as manager-owned fan-out plus fan-in, not flat agent swarms](https://github.com/Hmbown/CodeWhale/issues/4055)
Structured orchestration improvement. Currently agents spawn flat `agent` children with scattered results. Proposes manager-owned fan-out/fan-in through `workflow` tool.

### [#4057 — v0.8.67: bring shipped UI locale packs to parity or explicitly scope zh-Hant as partial](https://github.com/Hmbown/CodeWhale/issues/4057)
Locale completeness audit. `zh-Hant` has 202 keys vs 290 in `en.json`. Proposal to either fill gaps or document as partial. Community localization contributors should coordinate.

## Feature Request Trends

1. **Multi-provider provider routing for sub-agents** — Multiple issues (#4049, #4065, PR #3969) point to a strong demand for per-sub-agent model/provider assignment, especially for DeepSeek users. Community wants fleet-aware routing that mirrors the parent session's provider configuration.

2. **Structured workflow orchestration** — Issues #4055 and #4050 signal a push toward manager-owned fan-out/fan-in patterns rather than flat agent swarms. This mirrors production-grade agentic workflow patterns in the industry.

3. **Non-verifiable goal completion** — #4054 and related discussions show that users need goals to be completable without a verifier receipt. Research, docs, and writing workflows are blocked by the current verifier-gated design.

4. **Constitution customization UI** — #4064 and the hidden branch work indicate strong interest in making the 55-line constitution user-editable via CLI/TUI. This aligns with the broader open-source agent customization trend.

5. **Localization parity** — #4057 and PR #4044 show sustained community interest in i18n, particularly for `zh-Hant`. The maintainer is treating this as a release-blocker for v0.8.67.

## Developer Pain Points

- **Sub-agent reliability remains the #1 pain point.** Child agents fail silently with empty output (#4050), token-budget exhaustion is unmanaged (#4053), and model routing breaks in delegation (#4049). The community reaction in the comments thread for #4049 (9 comments in 24h) suggests developer trust in sub-agent workflows is fragile.

- **SIGPIPE crash on piped output** (#4030) is a recurring shell scripting annoyance. The fix (#4043) is trivial but the issue has been open since 2026-07-04 before receiving a PR — suggesting maintainer bandwidth is stretched.

- **Setup wizard UX regressions** (#4063, #4062) are creating a poor first-impression for new users. The DeepSeek-hardcoded onboarding is particularly frustrating for multi-provider users. 2 comments on #4029 show some community members are considering switching to alternative TUI interfaces.

- **The massive issue burst from the maintainer** (18+ issues in a single day) is a pattern that community members may find overwhelming. The maintained action plan in #4061 is helpful, but the sheer volume of unassigned, unreviewed issues could discourage external contributors from picking up work.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*