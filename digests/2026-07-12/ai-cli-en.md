# AI CLI Tools Community Digest 2026-07-12

> Generated: 2026-07-12 01:29 UTC | Tools covered: 9

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

# AI CLI Developer Tools: Cross-Tool Ecosystem Comparison
**Date: 2026-07-12**

---

## 1. Ecosystem Overview

The AI CLI tools landscape on July 12, 2026 shows a mature but rapidly evolving ecosystem, with six actively maintained tools demonstrating divergent specializations and shared pain points. Claude Code leads in bug volume and enterprise-scale feature demands (multi-session orchestration), while OpenAI Codex landed the most significant architectural PRs (18 merged), focusing on deferred executor environments and platform determinism. Gemini CLI is in a high-velocity stabilization phase with 50 open issues, and smaller tools like Kimi CLI, Pi, Qwen Code, and DeepSeek TUI are demonstrating focused community-driven improvement cycles. Across all platforms, three universal challenges dominate: **multi-agent lifecycle reliability**, **MCP OAuth integration fragility**, and **Windows platform parity gaps**. No major releases occurred today, but the combined 60+ issues and 30+ PRs across all tools signal a healthy, feedback-driven development cadence.

---

## 2. Activity Comparison

| Tool | Active Issues (24h) | Open PRs (24h) | New Releases | Community Engagement (Avg Comments/Issue) | 
|------|---------------------|----------------|--------------|-------------------------------------------|
| **Claude Code** | 10 hot issues | 5 PRs | 0 | ~7.8 (high) |
| **OpenAI Codex** | 10 hot issues | 10 PRs | 0 | ~17.1 (very high) |
| **Gemini CLI** | 10 hot issues | 8 PRs | 0 | ~5.2 (moderate) |
| **GitHub Copilot CLI** | 10 hot issues | 1 PR | 0 | ~1.8 (low) |
| **Kimi Code CLI** | 3 hot issues | 5 PRs | 0 | ~0 (new issues) |
| **OpenCode** | 10 hot issues | 10 PRs | 0 | ~12.1 (high) |
| **Pi** | 10 hot issues | 10 PRs | 0 | ~4.0 (moderate) |
| **Qwen Code** | 10 hot issues | 10 PRs | 0 | ~4.2 (moderate) |
| **DeepSeek TUI** | 5 hot issues | 4 PRs | 0 | ~2.6 (low) |

**Key Observations:**
- **OpenAI Codex** dominates in community engagement per issue (avg 17.1 comments), driven by the high-profile SSD write amplification bug (#28224, 145 comments)
- **OpenCode** and **Claude Code** show the strongest feature request momentum (153 👍 for `/btw` command, 55 comments on inter-session communication)
- **GitHub Copilot CLI** exhibits the lowest engagement despite critical data corruption bugs, suggesting a less vocal user base or newer tool maturity
- **Kimi Code CLI** shows the smallest footprint but focused, community-contributed fixes (3 PRs from a single contributor)

---

## 3. Shared Feature Directions

| Common Requirement | Affected Tools | Specific Needs |
|-------------------|----------------|----------------|
| **Multi-session orchestration** | Claude Code (#24798), Kimi Code (ACP parity), Qwen Code (multi-workspace daemon RFC #6378) | Inter-session messaging, dependency-aware sequencing, parallel agent coordination |
| **MCP OAuth stability** | Claude Code (#76769), GitHub Copilot CLI (#4085, #4089, #4096), Qwen Code (#6639), Pi (WebSocket credential isolation) | OAuth token bridging, auto-reconnect on auth expiry, 401 recovery paths |
| **Windows platform parity** | Claude Code (4+ active Windows bugs), OpenAI Codex (sandbox failures #22428, #32487), GitHub Copilot CLI (#4095 file locking), OpenCode (clipboard #36470), Pi (ESC[3J scroll issue #6502), Qwen Code (daemon restart state loss) | Cowork/HCS services, screenshot tools, file locking, clipboard, terminal scrollback |
| **Model safety/filter false positives** | Claude Code (Fable 5 over-filtering #76800, "money shot" #76540), Gemini CLI (subagent false GOAL success #22323) | Overly aggressive content filters, silent model downgrades, hallucinated search results |
| **Context/cost transparency** | Claude Code (cost notifications #74709), OpenAI Codex (Sol context threshold #32486, rate limit tracking), Gemini CLI (recursive reasoning limits #28164) | Spend alerts, model fallback notifications, context budget warnings |
| **Agent lifecycle reliability** | Claude Code (MCP server SIGINT #76769, Agent Teams delays #76500), Gemini CLI (agent hangs #21409), OpenAI Codex (subagent model enforcement #31814) | Turn limits, subagent recovery, process respawning, resource cleanup |
| **Voice mode** | GitHub Copilot CLI (proxy download failure #4083, auto-submit #4090, mute playback #4092) | Corporate proxy support, UX polish, platform compatibility |
| **Evaluation infrastructure** | Gemini CLI (#24353 behavioral evals), Qwen Code (session recovery automation #6695) | Automated testing, regression prevention, session repair |

---

## 4. Differentiation Analysis

| Dimension | Claude Code | OpenAI Codex | Gemini CLI | GitHub Copilot CLI | Pi | Qwen Code |
|-----------|-------------|--------------|------------|-------------------|-----|-----------|
| **Primary Focus** | Enterprise multi-agent orchestration | Core architecture & provider stability | Agent reliability & eval infrastructure | MCP ecosystem & session integrity | Cross-provider model integration | Multi-workspace daemon & Web Shell |
| **Target Users** | Large projects, parallel workflows | High-engagement devs, plugin authors | Security-conscious, evaluation-driven | GitHub ecosystem, enterprise MCP | Multi-model users, extension developers | Qwen/DashScope users, Web-first workflows |
| **Technical Approach** | Distributed agent system (session communication) | Deferred executors, platform determinism | Behavioral evals, recursive reasoning guards | OAuth client, session storage | Provider abstraction, constrained sampling | Daemon-based multi-workspace architecture |
| **Maturity Signal** | High bug volume (4+ Windows, 3+ MCP) | Heavy maintenance (18 merged PRs) | Stabilization (50 open, retesting) | Early-stage (data corruption, low engagement) | Fast model adoption (GPT-5.6 family) | Active RFC process (multi-workspace) |
| **Differentiator** | Most advanced inter-session features | Largest community engagement per issue | Most rigorous eval pipeline | Tightest GitHub ecosystem integration | Best cross-provider flexibility | Strongest Web-based TUI |

---

## 5. Community Momentum & Maturity

| Tool | Stage | Momentum Indicators | Risk Factors |
|------|-------|--------------------|--------------|
| **OpenAI Codex** | **Mature / Heavy Maintenance** | 18 PRs merged today, highest avg engagement (17.1 comments/issue), 432 👍 on SSD issue | Cost surprise risks (Sol context threshold), 4+ Windows sandbox failures |
| **Claude Code** | **Mature / Feature Expansion** | 55 comments on inter-session comms #24798, most diverse bug surface (10 active issues) | Windows platform instability (4+ active bugs), MCP lifecycle fragility |
| **OpenCode** | **Growth / Feature Addition** | 153 👍 on `/btw` command, 10 PRs active, strong V2 TUI effort | CPU usage regressions (#30086, #19466), provider compatibility gaps |
| **Pi** | **Rapid Iteration** | 10 PRs today, fast GPT-5.6 adoption, community-contributed fixes | Configuration friction (compaction bypass), cross-platform terminal issues |
| **Gemini CLI** | **Stabilization** | 8 PRs, 50 open issues with retesting labels, eval infrastructure buildout | Agent hangs (#21409), false GOAL success (#22323) — core reliability issues |
| **Qwen Code** | **Architecture Evolution** | Multi-workspace RFC (#6378), 10 PRs, Web Shell composer redesign | Daemon state loss on restart, DashScope streaming reliability |
| **GitHub Copilot CLI** | **Early Growth** | 10 issues (mostly triage), 3 MCP OAuth bugs | **Data corruption severity** (#4098, #4097), lowest engagement → small user base |
| **DeepSeek TUI** | **Niche / Community-Driven** | Cross-platform patches (NetBSD, Android), i18n (Korean) | Anthropic API compatibility issues, low issue volume |
| **Kimi Code CLI** | **Early Stability** | 3 bugs, 5 PRs mostly by 1 contributor (#nankingjing) | Very small footprint, low community engagement |

---

## 6. Trend Signals

**1. Multi-Agent Orchestration is the Next Frontier**
Claude Code (#24798 inter-session communication) and Qwen Code (#6378 multi-workspace daemon) are independently converging on the same insight: single-session agents are insufficient for large-scale development. Expect this to become the dominant architectural theme in H2 2026.

**2. MCP Ecosystem is at an Inflection Point**
The OAuth token bridging failures (GitHub Copilot CLI: 3+ issues, Qwen Code: #6639, Claude Code: #76769) represent the #1 integration blocker. Until MCP standardizes auth lifecycle management, enterprise adoption will stall. The community is signaling this urgently.

**3. Platform Parity is the Cost of Growth**
Windows-specific bugs appear in 7 of 9 tools, with Claude Code alone accumulating 4+ active Windows issues. The macOS-first development habit is creating a platform debt that enterprise users are now paying. Cross-platform testing infrastructure is a strategic investment.

**4. Cost Transparency Becomes a Competitive Differentiator**
OpenAI Codex (Sol context threshold #32486), Claude Code (spend notifications #74709), and Gemini CLI (recursive reasoning limits #28164) all face user demand for usage visibility. The tool that solves cost governance best will win budget-constrained enterprise customers.

**5. Evaluation Infrastructure is Maturing**
Gemini CLI's behavioral eval epic (#24353, 76 tests) represents the most systematic approach to regression prevention. As AI CLI tools become more autonomous, the quality of evaluation pipelines will determine which tools can safely scale agent autonomy.

**6. Hallucination in Tool Outputs is a Trust Crisis**
GitHub Copilot CLI's `web_search` fabricating answers (#4093) and Claude Code's inappropriate phrase generation (#76540) show that model-level safeguards are insufficient when tools can confidently return false information. This is a distinct class of AI safety failure requiring tool-level validation, not just prompt engineering.

**7. The Asian Tool Ecosystem is Growing**
Kimi Code CLI, Qwen Code, and DeepSeek TUI represent a significant East Asian development cluster, with i18n efforts (Korean, Chinese) and DashScope provider integration. These tools are building for non-English-first workflows, a market segment ignored by the US-centric tools.

**Recommendation for Developers:** Invest in **multi-session orchestration** and **MCP auth lifecycle management** as foundational capabilities. Treat **Windows parity** as a hard requirement, not a nice-to-have. Implement **spend governance** early — the community is already showing it will switch tools over cost surprises.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

Here is the community highlights report for the **anthropics/skills** repository, based on data from 2026-07-12.

---

## 1. Top Skills Ranking (by Discussion Activity)

| Rank | Skill / PR | Functionality | Discussion Highlights | Status |
| :--- | :--- | :--- | :--- | :--- |
| **1** | **skill-creator fix: run_eval.py 0% recall** ([#1298](https://github.com/anthropics/skills/pull/1298)) | Fixes the core evaluation loop where `run_eval.py` always reports 0% recall, making the description-optimization loop optimize against noise. | The most critical infrastructure issue. Multiple independent reproductions (#556, #1169). The fix involves installing the eval artifact as a real skill and fixing Windows stream reading. | Open |
| **2** | **document-typography** ([#514](https://github.com/anthropics/skills/pull/514)) | Enforces typographic quality: prevents orphan word wrap, widow paragraphs, and numbering misalignment in AI-generated documents. | High interest in reducing cosmetic defects that are common across all Claude-generated docs. Users note these issues are rarely manually flagged. | Open |
| **3** | **skill-quality-analyzer & skill-security-analyzer** ([#83](https://github.com/anthropics/skills/pull/83)) | Meta-skills that evaluate other skills across five quality dimensions (structure, documentation, security, etc.). | Debate on whether meta-skills should live in the core repo or a separate evaluator package. | Open |
| **4** | **self-audit skill (v1.3.0)** ([#1367](https://github.com/anthropics/skills/pull/1367)) | Mechanical file verification + four-dimension reasoning audit (damage-severity priority order) before delivery. | Novel approach: a gate that audits Claude’s own output. Community interest in universal output quality guarantees. | Open |
| **5** | **testing-patterns** ([#723](https://github.com/anthropics/skills/pull/723)) | Covers the full testing stack: testing trophy model, unit tests, React Testing Library, Playwright e2e, and CI integration. | Broadly useful across tech stacks. Discussion focused on scope (should it cover mobile testing?) and integration with existing test runners. | Open |
| **6** | **ODT skill (OpenDocument)** ([#486](https://github.com/anthropics/skills/pull/486)) | Creates, fills, reads, and converts `.odt` and `.ods` files. Triggers on any mention of ODF standards or LibreOffice. | Community interest in expanding beyond DOCX/PDF. Discussion on template engine integration and LibreOffice CLI dependency. | Open |
| **7** | **color-expert** ([#1302](https://github.com/anthropics/skills/pull/1302)) | Self-contained color expertise: naming systems (ISCC-NBS, Munsell, XKCD, RAL), color spaces (OKLCH, OKLAB, CAM16), and use-case tables. | Niche but highly specialized. Appreciated for being data-rich without external API calls. | Open |

---

## 2. Community Demand Trends (from Issues)

The community’s most-anticipated new Skill directions, distilled from the most active issues:

| Demand Theme | Key Issue | Signal | Use Case |
| :--- | :--- | :--- | :--- |
| **Identity & Trust Boundary Abuse** | [#492](https://github.com/anthropics/skills/issues/492) — 34 comments | **Most active issue.** Community skills distributed under `anthropic/` namespace impersonate official skills. | Security: Users demand namespace verification, permission scoping, and signing of official skills. |
| **Org-Wide Skill Sharing** | [#228](https://github.com/anthropics/skills/issues/228) — 14 comments | **Second most active.** Current `.skill` file download/upload flow is friction-heavy. | Enterprise: Direct skill sharing via library or link within organizations. |
| **Core Infrastructure Stability (Windows)** | [#556](https://github.com/anthropics/skills/issues/556), [#1061](https://github.com/anthropics/skills/issues/1061), [#1169](https://github.com/anthropics/skills/issues/1169) — 12+ comments each | Persistent `run_eval.py` 0% recall bug across Windows and some Unix environments. | Reliability: The skill-creator loop is not working for a significant portion of users. |
| **Reasoning Quality Gate Pipeline** | [#1385](https://github.com/anthropics/skills/issues/1385) — 3 comments | Proposal for pre-task calibration, adversarial review, and delivery verification in a pipeline. | Quality assurance: A structured approach to auditing Claude’s reasoning before output. |
| **Agent Governance & Safety** | [#412](https://github.com/anthropics/skills/issues/412) — 6 comments | Request for a skill teaching AI agent safety patterns (policy enforcement, threat detection, trust scoring). | Safety & governance: Closing the gap in the skills collection for controlling autonomous agent behavior. |

**Signal:** *Security (trust boundary), enterprise distribution, and quality assurance infrastructure* are the dominant demand themes.

---

## 3. High-Potential Pending Skills (Active-comment PRs Not Yet Merged)

These skills have substantial community discussion and infrastructure importance, suggesting they may land soon:

| Skill | PR | Last Updated | Why It Matters |
| :--- | :--- | :--- | :--- |
| **run_eval.py trigger detection fix** | [#1323](https://github.com/anthropics/skills/pull/1323) | 2026-07-04 | Directly addresses the #1 blocker for skill creators (0% recall). |
| **self-audit (v1.3.0)** | [#1367](https://github.com/anthropics/skills/pull/1367) | 2026-07-02 | Universal output quality gate; v1.3.0 adds mechanical verification. |
| **color-expert** | [#1302](https://github.com/anthropics/skills/pull/1302) | 2026-06-12 | Niche but complete; no external dependencies. |
| **testing-patterns** | [#723](https://github.com/anthropics/skills/pull/723) | 2026-04-21 | Covers a gap in the collection; broad applicability across stacks. |
| **document-typography** | [#514](https://github.com/anthropics/skills/pull/514) | 2026-03-13 | Solves a universal document quality problem. |

---

## 4. Skills Ecosystem Insight

**The community’s most concentrated demand is for *infrastructure that ensures quality and trust* — fixing the broken evaluation loop (run_eval.py), verifying that skills are authentic (trust boundary), and providing a reliable pipeline to audit Claude’s own output before delivery.**

---

# Claude Code Community Digest
**2026-07-12**

---

## Today's Highlights

The community continues to push Claude Code toward multi-session orchestration and enterprise reliability. The most-discussed open issue remains **Inter-session communication (#24798)**, which is driving demand for persistent workflows across parallel Claude sessions. Meanwhile, a surge of Windows and Linux compatibility bugs—spanning Cowork, MCP server stability, and authentication—suggests the platform is straining to keep up with cross-OS parity demands.

## Releases

No releases were published in the last 24 hours.

---

## Hot Issues

### 1. [Inter-session communication for multi-Claude workflows](https://github.com/anthropics/claude-code/issues/24798)
**55 comments | 👍 18 | Open | Enhancement**
The #1 community pain point: users running parallel Claude sessions cannot coordinate work across modules. This feature would enable sequencing higher-level processes with dependencies—essentially turning Claude Code into a distributed agent system. High engagement suggests this is a critical blocker for large-scale project adoption.

### 2. [Windows: Cowork not working (missing HCS services)](https://github.com/anthropics/claude-code/issues/74649)
**51 comments | Open | Bug**
Cowork is completely broken on Windows 11 Pro due to missing `vfpext` Hyper-V services. This is the single highest-comment bug currently open, affecting enterprise Windows users who rely on parallel agent workflows. Zero upvotes suggests either a niche user segment or frustration-driven fatigue.

### 3. [LLM output contains "The money shot"](https://github.com/anthropics/claude-code/issues/76540)
**2 comments | Open | Bug**
A content-safety failure where Claude generated the phrase "The money shot" in output. While low engagement, this highlights ongoing concerns about inappropriate language filtering in production models.

### 4. [Model fallback notification missing on Windows](https://github.com/anthropics/claude-code/issues/76793)
**1 comment | Open | Bug**
Silent fallback from Fable 5 to Opus 4.8 when usage limits hit 93%, with no UI notification. Frustrating for users who pay for premium models and don't realize they're being downgraded mid-session.

### 5. [Agent Teams mailbox: 5-62 min delays, lost reports](https://github.com/anthropics/claude-code/issues/76500)
**1 comment | Open | Bug**
Experimental Agent Teams feature exhibits severe mailbox delivery defects: messages delayed 5-62 minutes, final reports lost, and `/clear` queue leaks. This is a major reliability issue for anyone relying on multi-agent coordination.

### 6. [Bash permission matcher misparses quoted arguments](https://github.com/anthropics/claude-code/issues/76795)
**1 comment | Open | Bug**
Permissions system incorrectly treats `|` inside quoted strings as pipeline operators, forcing unnecessary confirmation prompts. This is particularly severe for `grep` commands with regex patterns—breaks the trust model for script execution.

### 7. [stdio MCP server SIGINT'd + not respawned (regression)](https://github.com/anthropics/claude-code/issues/76769)
**1 comment | Open | Bug**
MCP servers using stdio transport are killed after ~4 hours and never respawned. This is a regression from v2.1.206, causing long-running sessions to silently lose tool access. The dependency on #43177 (no auto-reconnect) makes this doubly painful.

### 8. [Screenshot tool times out on Windows](https://github.com/anthropics/claude-code/issues/76649)
**1 comment | Open | Bug**
The `computer { action: "screenshot" }` tool consistently times out after 30 seconds on Windows. This blocks any visual workflow that requires browser automation or UI testing.

### 9. [Fable 5 safeguards over-triggering on personal device config](https://github.com/anthropics/claude-code/issues/76800)
**0 comments | Open | Bug**
Fable 5's safety filters are auto-downgrading users to Opus 4.8 for legitimate work (installing OS on personal devices, home-lab setup). Four false positives in two days—highlights overly aggressive content filtering in the latest model.

### 10. [Duplicated channel plugin spawning (409 Conflict)](https://github.com/anthropics/claude-code/issues/36800)
**16 comments | CLOSED | Bug**
Claude spawns duplicate Telegram channel processes mid-session, causing 409 conflicts and tool loss. The underlying harness bug (untriggered duplicate spawn, no tool re-registration after lifecycle churn, no debounce) was eventually fixed, but the investigation raised deeper questions about process lifecycle management.

---

## Key PR Progress

### 1. [Remove "retro-futuristic" from Frontend Design Skill](https://github.com/anthropics/claude-code/pull/39043)
**Open | 0 comments**
A tongue-in-cheek PR by t3dotgg removing "retro-futuristic" as a design recommendation for frontend skills. While humorous, it reflects community desire for more grounded, practical design guidance.

### 2. [Fix macOS system certificates + NO_PROXY for Bun runtime](https://github.com/anthropics/claude-code/pull/76640)
**Open | 0 comments**
Addresses the "Self-signed certificate" errors on macOS when using Bun runtime (introduced in v2.1.17+). Fixes SSL context not loading macOS system certificate store and `NO_PROXY` environment variable handling. Essential for any macOS user behind a corporate proxy.

### 3. [Harden YAML, path, and symlink handling in plugins](https://github.com/anthropics/claude-code/pull/76581)
**Open | 0 comments**
Security hardening for official plugin scripts: prevents YAML frontmatter breakout, path traversal, and symlink-based credential overwrite. Includes fixes for `ralph-wiggum` setup, `completion_promise` escaping, and directory traversal guards.

### 4. [Align plugin docs with v2.1.207 shell-injection fix](https://github.com/anthropics/claude-code/pull/76576)
**Open | 0 comments**
Updates plugin documentation to match v2.1.207's shell-injection fix, which now rejects `${user_config.*}` in shell-form hook/monitor/MCP commands and stops reading `pluginConfigs` from project-level settings. Essential reading for plugin developers.

### 5. [Fix reproducibility audit design defects](https://github.com/anthropics/claude-code/pull/76673)
**CLOSED | 0 comments**
A comprehensive Japanese-language PR fixing multiple design defects found during reproducibility audit. Covers issue triage lifecycle (external edits shouldn't cancel initial triage), invalid state handling, Ralph state isolation per session, and shell unreachability fixes.

---

## Feature Request Trends

1. **Multi-session orchestration** (#24798): The dominant community ask—users want to chain Claude sessions together for complex, multi-module workflows with dependency management and inter-session messaging.

2. **Mid-task steering parity** (#71726, #76777): Users want the Desktop app to allow message injection while Claude is working (like CLI's "steering" behavior), and `/fork` to be available during active execution.

3. **Cost transparency** (#74709, #57998): Demand for threshold-based spending notifications at 80%/90%/100% of daily/weekly/monthly limits, plus the ability to relocate `%APPDATA%` on Windows for storage management.

4. **Terminal customization** (#17951): Script-based terminal title configuration (analogous to `statusLine`) so users can dynamically set window titles based on session state or project context.

5. **Expanded paste editing** (#76801): Users want to view, edit, and expand collapsed large paste blocks before sending them as prompts—a quality-of-life gap in the current TUI.

---

## Developer Pain Points

| Pain Point | Root Cause | Frequency |
|---|---|---|
| **Windows platform instability** | Cowork broken (#74649), screenshot timeout (#76649), preview tool fail (#68341), silent model fallback (#76793) | Very High – 4+ active bugs |
| **MCP server lifecycle fragility** | SIGINT after 4 hours (#76769), no reconnection logic (#43177), duplicate spawning (#36800) | High – recurring across versions |
| **Model safety false positives** | Fable 5 over-filtering (#76800), inappropriate output (#76540), silent fallback (#76793) | High – undermines trust in model selection |
| **Authentication friction** | Headless server auth blocked (#65506), org policy 403s (#65714), max plan token limits (#65694) | Medium – blocks CI/CD and remote usage |
| **Retry loop / cost explosions** | Oversized images cause 35× cost inflation (#65636), tool call parsing infinite loops (#64990) | Medium – expensive when triggered |

The community is signaling a clear need for: **platform parity** (Windows/Linux still lag macOS), **agent lifecycle reliability** (MCP servers + Agent Teams), and **costguardrails** (spend notifications, model fallback transparency).

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest
**Date: 2026-07-12**

## Today's Highlights
A heavy maintenance wave landed today with 18 pull requests merged, focusing on core architecture improvements: deferred executor environments, stable plugin metadata caching, and deterministic Windows process launching. Concurrently, the community continues to escalate concerns about GPT-5.6 Sol's subagent model enforcement and runaway SSD write amplification from SQLite feedback logs, with both issues attracting significant engagement.

## Releases
No new releases in the last 24 hours.

## Hot Issues
*(Selected from top 30 by comment count, updated within 24h)*

1. **[#28224: Codex SQLite feedback logs can write ~640 TB/year and rapidly consume SSD endurance](https://github.com/openai/codex/issues/28224)** — *145 comments, 432 👍*
   Update indicates 85% of logs are avoided after three merged PRs (0.142.0), credited to @jif-oai. Closed by author after fix verification. Remains a cautionary tale for telemetry overhead.

2. **[#31814: GPT-5.6 Sol cannot specify subagent models, forcing all subagents to also be Sol instances](https://github.com/openai/codex/issues/31814)** — *49 comments, 102 👍*
   MultiAgent V2 overrides user model selection, defaulting `hide_spawn_agent_metadata` to true. Developers report inability to mix Sol and Luna in the same workflow.

3. **[#28190: `rg` is blocked by macOS](https://github.com/openai/codex/issues/28190)** — *46 comments, 71 👍*
   Codex CLI 0.139.0 on macOS sees `rg` (ripgrep) blocked by system policies. Users on macOS 15.x experiencing search tool failures.

4. **[#31606: Reset failed, did not apply and 1 reset is wasted](https://github.com/openai/codex/issues/31606)** — *33 comments, 40 👍*
   Codex App version 26.623.141536 on Windows: resets consumed but not applied, reducing usable resets. High frustration for Pro subscribers.

5. **[#28969: Add setting to disable the auto-resolve in 60 seconds for questions](https://github.com/openai/codex/issues/28969)** — *26 comments, 105 👍*
   Users want configurable timeout before CLI auto-resolves unanswered questions. Currently hardcoded to 60 seconds, causing premature turn completion.

6. **[#32032: Computer Use 1.0.1000366 crashes at launch on macOS 15.7.7](https://github.com/openai/codex/issues/32032)** — *20 comments, 11 👍*
   Missing Swift Concurrency symbol triggers `dyld` crash on macOS 15.7.7. Regression related to prior issue #22822.

7. **[#31836: Projects Sort By Last updated only sorts tasks within project groups, not projects](https://github.com/openai/codex/issues/31836)** — *14 comments, 9 👍*
   macOS desktop app: "Sort By Last updated" selection does not change project ordering, only intra-group task sorting. Misleading UX.

8. **[#22428: Windows Desktop sandbox fails with CreateProcessAsUserW failed](https://github.com/openai/codex/issues/22428)** — *14 comments, 7 👍*
   Sandbox command execution fails on Windows with setup refresh errors. Stale issue persisting across several app versions.

9. **[#32486: Default GPT-5.6 context can cross the 272K higher-usage threshold](https://github.com/openai/codex/issues/32486)** — *5 comments, 0 👍*
   New issue: GPT-5.6's default context configuration may silently enter higher pricing band without user opt-in. Critical for cost-conscious developers.

10. **[#32502: VS Code extension does not show subagent activity and loses conversation state](https://github.com/openai/codex/issues/32502)** — *3 comments, 0 👍*
    Fresh report: VS Code extension 1.128.0 on Windows fails to display subagent status and drops conversation continuity.

## Key PR Progress
*(10 notable pull requests merged in the last 24h)*

1. **[#30016: core: inherit current step environments in subagents](https://github.com/openai/codex/pull/30016)** — @sayan-oai
   Subagents now inherit environments from the request-owned `StepContext` instead of the stale `TurnContext` snapshot, critical for deferred executors.

2. **[#30017: core: refresh turn diff roots from step context](https://github.com/openai/codex/pull/30017)** — @sayan-oai
   Fixes path formatting when deferred environments attach mid-turn; diff tracker now uses current environment set.

3. **[#29960: Cache stable executor skills and project them per model step](https://github.com/openai/codex/pull/29960)** — @jif-oai
   Skill metadata discovered once per environment, not re-read every sampling step. Performance optimization for multi-step turns.

4. **[#29946: Cache stable plugin metadata separately from live MCP runtimes](https://github.com/openai/codex/pull/29946)** — @jif-oai
   Separates plugin manifest caching from MCP process lifecycle, preventing unnecessary restarts when only metadata changes.

5. **[#30020: core: pass step environments to turn input extensions](https://github.com/openai/codex/pull/30020)** — @sayan-oai
   Turn-input extensions now receive deferred environments from the first `StepContext`, closing a gap in executor integration.

6. **[#30036: Make Windows executable resolution deterministic](https://github.com/openai/codex/pull/30036)** — @jif-oai
   Stacked on #29845: Forces Windows to use explicit `application_path` preventing PATH-based ambiguity when launching child processes.

7. **[#31526: [tools] Restrict hosted threads to server-registered tools](https://github.com/openai/codex/pull/31526)** — @richardc-oai
   Adds `server_registered_tools_only` feature with exact MCP allowlist, preventing hosted clients from accessing unintended tools.

8. **[#32460: Emit thread-idle lifecycle after guardian interrupts](https://github.com/openai/codex/pull/32460)** — @copyberry[bot]
   Extension lifecycle events now fire when guardian interrupts active turns after repeated review denials.

9. **[#32485: Use available width for skill names in the toggle view](https://github.com/openai/codex/pull/32485)** — @copyberry[bot]
   Fixes truncation of skill display names to 21 characters; now uses available popup width.

10. **[#32305: Improve file blob upload diagnostics](https://github.com/openai/codex/pull/32305)** — @copyberry[bot]
    Adds `x-ms-client-request-id` to blob uploads and strips signed URLs from error messages for security.

## Feature Request Trends
- **Linux desktop app**: Issue #11023 (733 👍, 164 comments) remains the top-voted feature. Community frustration with macOS power consumption and lack of native Linux support.
- **Headless remote hosts for mobile**: Issue #23200 (31 👍) requests mobile Codex operation without requiring a desktop machine online, targeting SSH-based Linux server workflows.
- **Configurable auto-resolve timeout**: Issue #28969 (105 👍) demands user-controllable duration before CLI auto-completes unanswered questions.
- **Subagent model steering**: Multiple issues (#31814, #32291) ask for explicit subagent model selection without workarounds.
- **Sandbox reliability**: Series of Windows sandbox failures (#22428, #28248, #32487) indicate need for better error recovery and Smart App Control compatibility.

## Developer Pain Points
- **Cost surprises**: GPT-5.6 silently exceeding 272K context threshold (#32486) and rate limit counter instability (#31606, #32410, #32279) erode trust in usage tracking.
- **Cross-platform fragmentation**: Linux desktop app missing (33% of reported pain points), Windows sandbox failures (3 active issues), and macOS Computer Use crash (#32032).
- **State loss**: Conversation archiving failures (#28276), secondary session expiration (#30350), and VS Code state drops (#31100, #32502).
- **SSD endurance concerns**: SQLite logging (#28224) served as a wake-up call; community now watches telemetry write patterns closely.
- **Subagent opacity**: Inability to see subagent activity in VS Code (#32502) and premature turn completion (#27352) reduce trust in multi-agent workflows.
- **Security software conflicts**: Norton (#25425) and Smart App Control (#32487) blocking Codex processes on Windows; macOS SIP blocking `rg` (#28190).

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-07-12

## Today's Highlights

The Gemini CLI project remains in a high-velocity stabilization phase, with no new releases in the last 24 hours. The maintainer team is actively processing a backlog of 50 open issues, many of which are labeled `status/need-retesting` and `status/bot-triaged`, suggesting a strong push toward closing out long-standing bugs. Key areas of focus include agent reliability (especially subagent lifecycle and recursive reasoning limits), shell execution hangs, and deeper evaluation infrastructure for agent behaviors.

---

## Releases

No new releases were published in the last 24 hours.

---

## Hot Issues (Top 10)

**1. [#22323 – Subagent recovery after MAX_TURNS reported as GOAL success](https://github.com/google-gemini/gemini-cli/issues/22323)**  
A critical `priority/p1` bug where a subagent (`codebase_investigator`) reports `status: "success"` with `Termination Reason: "GOAL"` even when it hit its maximum turn limit without performing any analysis. This masks real failures and degrades trust in the agent's reporting. 10 comments, 2 👍.

**2. [#21409 – Generalist agent hangs](https://github.com/google-gemini/gemini-cli/issues/21409)**  
High-severity bug (`priority/p1`): Gemini CLI hangs indefinitely when deferring to the generalist agent for simple tasks (e.g., folder creation). The workaround — instructing the model not to use subagents — points to deep issues in agent orchestration. 7 comments, 8 👍 — the most-liked open bug.

**3. [#25166 – Shell command execution stuck with "Waiting input" after completion](https://github.com/google-gemini/gemini-cli/issues/25166)**  
A `priority/p1` core bug: shell commands that finish successfully still show as active and "awaiting user input." This forces manual intervention. 4 comments, 3 👍.

**4. [#24353 – Robust component level evaluations](https://github.com/google-gemini/gemini-cli/issues/24353)**  
An epic (`priority/p1`) tracking the build-out of behavioral eval tests. Currently 76 tests across 6 Gemini models. Aims to mature the evaluation pipeline — critical for preventing regressions. 7 comments.

**5. [#21968 – Gemini does not use skills and sub-agents enough](https://github.com/google-gemini/gemini-cli/issues/21968)**  
Anecdotal but widely felt: even with well-described custom skills (e.g., Gradle, Git), the model rarely invokes them autonomously. Must be explicitly instructed, defeating the purpose of skill definitions. 6 comments.

**6. [#22745 – Assess impact of AST-aware file reads, search, and mapping](https://github.com/google-gemini/gemini-cli/issues/22745)**  
`priority/p2` epic exploring whether Abstract Syntax Tree-aware tools improve reading precision, reduce token waste, and enable better codebase navigation. Could be a major quality-of-life improvement. 7 comments, 1 👍.

**7. [#26522 – Stop Auto Memory from retrying low-signal sessions indefinitely](https://github.com/google-gemini/gemini-cli/issues/26522)**  
Auto Memory only marks a session "processed" when the extractor explicitly reads it. Low-signal sessions that are skipped remain unprocessed and get re-surfaced endlessly — causing spurious retries. 5 comments.

**8. [#22093 – Subagents running without permission since v0.33.0](https://github.com/google-gemini/gemini-cli/issues/22093)**  
A regression where subagents (like `generalist`) start executing even when agent mode is disabled in configuration. User expected only MCP functionality. 2 comments, `status/need-retesting`.

**9. [#20079 – Symlinked agent files not recognized](https://github.com/google-gemini/gemini-cli/issues/20079)**  
A long-standing pain: `~/.gemini/agents/filename.md` symlinks are silently ignored. Surprising for users who manage dotfiles via symlinks. 4 comments.

**10. [#24246 – 400 error with >128 tools](https://github.com/google-gemini/gemini-cli/issues/24246)**  
When more than 128 tools are enabled, the CLI hits a 400 API error. The agent should intelligently scope available tools rather than dumping all. 3 comments.

---

## Key PR Progress (Top 10)

**1. [#28183 – fix(vscode-ide-companion): preserve terminal focus when closing diff tabs](https://github.com/google-gemini/gemini-cli/pull/28183)**  
VS Code extension fix: after approving an edit, keyboard focus now stays in the integrated terminal rather than being stolen. Reduces friction in multi-edit workflows. `priority/p1`, `area/extensions`, `help wanted`.

**2. [#28359 – fix(core): strip login/interactive shell wrappers in stripShellWrapper](https://github.com/google-gemini/gemini-cli/pull/28359)**  
Policy engine fix: `bash -lc "..."` wrappers were not being stripped, so the policy engine never re-checked the inner payload. Now handles `-l`, `-i`, `--login` variants.

**3. [#28349 – fix(cli): guard customDeepMerge against circular references](https://github.com/google-gemini/gemini-cli/pull/28349)**  
Fixes `#28270`: settings with circular references (e.g., `obj.self = obj`) caused `RangeError: Maximum call stack size exceeded` in the settings manager.

**4. [#28164 – fix(core): limit recursive reasoning turns per single user request](https://github.com/google-gemini/gemini-cli/pull/28164)**  
Closed PR enforcing a strict 15-turn limit on recursive reasoning per user request, protecting local CPU resources and API quotas from infinite loops. Customizable via `maxSessionTurns`.

**5. [#28319 – refactor(a2a-server): enforce path trust check prior to environment loading](https://github.com/google-gemini/gemini-cli/pull/28319)**  
Security-focused refactor: workspace path trust is now checked *before* loading environment variables. Uses `AsyncLocalStorage` to isolate task environments.

**6. [#28247 – fix(core): match ls ignore globs by relative path](https://github.com/google-gemini/gemini-cli/pull/28247)**  
`ls` ignore patterns with path separators (e.g., `node_modules/**`) now match against workspace-relative paths instead of basenames only. Fixes `#28207`.

**7. [#28248 – docs: explain MCP env expansion](https://github.com/google-gemini/gemini-cli/pull/28248)**  
Adds documentation for MCP server path/environment variable expansion syntax — `$VAR`, `${VAR}`, `${VAR:-fallback}`, Windows `%VAR%`. Also documents unsupported syntax like `{{VAR}}` and `~`.

**8. [#28023 – chore(deps): bump @modelcontextprotocol/sdk](https://github.com/google-gemini/gemini-cli/pull/28023)**  
Dependency bump from 1.23.0 to 1.26.0 for the VS Code IDE companion package.

**9. [#23313 – Change the steering eval test to always pass](https://github.com/google-gemini/gemini-cli/issues/23313)**  
(Not a PR, but a notable issue) The steering evaluation test was temporarily commented out — now needs a permanent fix to always pass. Highlights fragility in the eval suite.

**10. [#21924 – High performance and flicker-free behavior on terminal resize](https://github.com/google-gemini/gemini-cli/issues/21924)**  
An ongoing effort (`priority/p2`, `area/core`) to eliminate flicker on terminal resize by migrating to `RenderStatic` and batching history updates. Critical for production UX.

---

## Feature Request Trends

1. **Evaluation Infrastructure** – There is a clear push toward *behavioral evaluations* at both component and end-to-end levels (`#24353`). The community and maintainers want robust, automated testing to prevent regressions.

2. **AST-Aware Code Navigation** – Multiple issues (`#22745`, `#22746`) explore using Abstract Syntax Trees for file reading, search, and codebase mapping. The goal: reduce token waste and turn count by reading exact method bounds instead of full files.

3. **Agent Self-Awareness & UX** – Requests (`#21432`, `#22598`) ask the agent to understand its own capabilities, flags, and hotkeys — and to make subagent trajectories visible via `/chat share` for debugging.

4. **Safety & Destructive Behavior Prevention** – Issue `#22672` calls for the agent to prefer safe alternatives in git/DB operations (e.g., avoid `git reset --force`). This reflects growing concern about autonomous agent safety.

5. **Better Tool Scoping** – The 128-tool limit (`#24246`) and under-use of skills (`#21968`) both point to a need for *intelligent tool selection* — the agent should dynamically scope available tools rather than dumping all or ignoring custom skills.

---

## Developer Pain Points

1. **Agent Hangs & Stuck Shells** – The most upvoted bugs (`#21409`, `#25166`) involve the CLI hanging indefinitely — on subagent deferral or after a shell command completes. These are severe productivity blockers.

2. **False Success Reporting** – Issue `#22323` shows that subagents can report "GOAL" success after hitting turn limits without doing any work. This makes debugging and trust extremely difficult.

3. **Ignored Configuration** – The browser agent ignoring `settings.json` overrides (`#22267`) and subagents running despite being disabled (`#22093`) erode user control over tool behavior.

4. **Auto Memory Inefficiencies** – Low-signal sessions are retried forever (`#26522`), invalid patches are silently skipped (`#26523`), and secrets are exposed before redaction (`#26525`). The memory feature, while powerful, has significant quality and privacy gaps.

5. **Terminal & TUI Flicker** – Resizing the terminal causes visible flicker (`#21924`), and exiting external editors leaves terminal corruption (`#24935`). These are polish issues but affect daily usability.

6. **Messy Workspace Cleanup** – The model frequently creates temporary edit scripts in random directories (`#23571`), making it hard to produce clean commits without manual cleanup.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-07-12

## Today's Highlights
Three critical issues surfaced today: session corruption bugs (#4098, #4097) that can permanently break resumed sessions and blow past CAPI size limits, and a Windows plugin update blocker (#4095) that prevents installation while VS Code is running. Meanwhile, the broader MCP (Model Context Protocol) ecosystem continues to face friction, with multiple reports of OAuth servers connecting but failing to expose tools to agent sessions.

---

## Releases
No new releases in the last 24 hours.

---

## Hot Issues

### 1. Resuming a session can leave truncated and concatenated events in events.jsonl [#4098](https://github.com/github/copilot-cli/issues/4098)
**Triage** — File corruption bug: resumed sessions produce malformed JSONL with incomplete event prefixes merged into following events. Once corrupted, the session cannot be resumed again. No comments yet, but this is a high-severity data integrity issue for long-running workflows.

### 2. apply_patch stores deleted binary in session history, permanently exceeding CAPI 5 MB limit [#4097](https://github.com/github/copilot-cli/issues/4097)
**Triage** — When `apply_patch` deletes a large binary file, the entire binary is stored as a text diff in `result.detailedContent`. This bloat persists in conversation history, making subsequent requests exceed CAPI's 5 MB limit—and `/compact` cannot fix it. No community reaction yet.

### 3. Third-party MCP server shows "Connected" but tools are missing from CLI sessions [#4096](https://github.com/github/copilot-cli/issues/4096)
**Triage** — Atlassian Remote MCP shows green "Connected" in the app UI, yet no tools appear in CLI sessions. The OAuth token is apparently never bridged to the agent runtime. Zero comments, but corroborates #4089 and #4086.

### 4. Windows: plugin update fails with "Access is denied (os error 5)" while VS Code is running [#4095](https://github.com/github/copilot-cli/issues/4095)
**Triage** — The Copilot extension holds watcher handles on `installed-plugins` directory, blocking `copilot plugin update` on Windows until VS Code is fully closed. A clear platform-specific regression affecting productivity.

### 5. Deleting a session in the app doesn't remove it from session-store.db / VS Code Copilot Chat history [#4094](https://github.com/github/copilot-cli/issues/4094)
**Triage** — Deleting a session from the desktop app UI does not propagate to the shared `~/.copilot` session store. Rows remain in `data.db`, `session-store.db`, and VS Code's cache, creating orphaned sessions that waste storage and memory.

### 6. Atlassian MCP server: OAuth succeeds but zero tools exposed to sessions [#4089](https://github.com/github/copilot-cli/issues/4089)
**OPEN** — Same root cause as #4096. OAuth completes successfully, yet `tools/list` returns empty for the Atlassian server while other HTTP MCP servers work fine. Community: 2 comments, 0 reactions.

### 7. Voice mode download fails with corporate proxy ENOTFOUND [#4083](https://github.com/github/copilot-cli/issues/4083)
**OPEN** — The Foundry Local Core NuGet package download fails behind corporate proxies. A community-contributed patch script is attached. Affects enterprise users who rely on voice mode.

### 8. MCP OAuth flow broken: servers marked needs-auth during discovery [#4085](https://github.com/github/copilot-cli/issues/4085)
**OPEN** — OAuth-requiring MCP servers (Azure AD, Microsoft Work IQ) have their auth flow cancelled immediately because no auth handler is registered during discovery. Servers remain permanently `needs-auth`. No reactions yet.

### 9. MCP OAuth client discovery: servers connect briefly then disconnect [#4084](https://github.com/github/copilot-cli/issues/4084)
**OPEN** — Multiple OAuth-protected MCP servers show green/connected but consistently fail to deliver tools in sessions. Reproduction steps provided. Community: 0 comments.

### 10. web_search tool returns fabricated answers with no grounding [#4093](https://github.com/github/copilot-cli/issues/4093)
**OPEN** — The built-in `web_search` tool hallucinates detailed answers when retrieval finds nothing relevant, instead of reporting "no results." This is a trust and safety issue for agents that rely on search for factual grounding.

---

## Key PR Progress

### 1. [#2565](https://github.com/github/copilot-cli/pull/2565) — install: guard against duplicate PATH entries on reinstall
**OPEN** — Fixes a long-standing installer bug where rerunning the installer appends duplicate PATH lines to shell profiles. The fix checks for existing entries rather than relying on `command -v copilot` (which requires a shell restart). Simple but impactful for CI/CD and multi-install scenarios.

---

## Feature Request Trends

1. **Dynamic context injection in Skills** (`#4088`) — Users want `!command` placeholders in `SKILL.md` files to inject live command output into skill prompts, enabling more responsive agent behaviors.

2. **Cross-app session sync** (`#4082`) — The ability to see CLI-started sessions in the desktop app and vice versa, including import/export. A strong signal that users work across multiple Copilot surfaces.

3. **Voice mode improvements** — Multiple requests: auto-submit on spacebar release (`#4090`), mute system playback during capture (`#4092`), and better proxy support (`#4083`).

4. **Opt-in model discovery for BYOK/custom providers** (`#3795`) — Users want the CLI to query custom provider APIs for available models instead of requiring manual `COPILOT_MODEL` configuration.

5. **Global instructions documentation** (`#3983`) — A simple but high-demand (2 👍) request: clarify how `AGENTS.md` / `CLAUDE.md` / `instructions.md` are discovered and used.

---

## Developer Pain Points

- **MCP OAuth token bridging is broken** — Three separate issues (#4084, #4085, #4089, #4096) describe the same pattern: OAuth servers connect in UI but never deliver tools to CLI agent sessions. This is the #1 integration blocker for enterprise MCP tooling.
- **Session data corruption and bloat** — Truncated JSONL on resume (#4098) and binary bloat from deleted files (#4097) destroy session resumability and exceed API limits. Both are data integrity failures that undermine trust in long-running agent sessions.
- **Windows plugin management friction** — File locking by VS Code (#4095) and orphaned session data (#4094) degrade the Windows experience significantly.
- **Voice mode reliability** — ASR failures (#4024), proxy download failures (#4083), and missing PTT UX (#4090, #4092) collectively make voice mode unreliable for production use.
- **Search hallucination** — The `web_search` tool (#4093) confidently fabricates answers, which could lead to dangerous misguidance in agent-driven workflows.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-07-12

## 1. Today's Highlights

The Kimi CLI community saw a surge in quality-of-life bug fixes, with three PRs merged or opened by contributor **nankingjing** addressing long-standing annoyances in background agent task timing, text truncation, and ACP server configuration parity. No new releases were published, but the project continues to mature with focused patches. The most notable open issue is a surprising UX bug where `CHANGELOG.md` files are incorrectly listed as usable skills in autocomplete.

## 2. Releases

*No new releases in the last 24 hours.*

---

## 3. Hot Issues

| # | Issue | Why It Matters |
|---|-------|----------------|
| 1 | [#2491] Bug: kimi-datasource CHANGELOG.md incorrectly listed as a skill | A confusing UX bug where `/skill` autocomplete suggests `CHANGELOG` as a real skill. Users may waste time invoking a doc file. Reported by zhangleilaoge, 0 comments yet — needs community validation. [GitHub](https://github.com/MoonshotAI/kimi-cli/issues/2491) |
| 2 | [#1762] (Referenced by PR #1771) Tool message content must be string | Not directly listed but the parent issue driving a critical API compliance fix. Affects all users relying on multi-part tool responses. [GitHub](https://github.com/MoonshotAI/kimi-cli/issues/1762) |
| 3 | [#2464] (Referenced by PR #2490) ACP server lacks global MCP config | Users of Zed, JetBrains AI Assistant, or orchestration tools lose access to custom tools. This parity gap erodes the "it just works" promise of Kimi CLI. [GitHub](https://github.com/MoonshotAI/kimi-cli/issues/2464) |

*Only three notable issues surfaced in the last 24h; the remaining are tracked as PR-associated bugs.*

---

## 4. Key PR Progress

| # | PR | What It Does | Status |
|---|----|--------------|--------|
| 1 | [#1771] fix: always stringify tool message content in Chat Completions provider | Fixes 400 errors when tool results contain multiple ContentParts. Strictly required by OpenAI API spec. **he-yufeng** | Open since Apr, just updated. [GitHub](https://github.com/MoonshotAI/kimi-cli/pull/1771) |
| 2 | [#1769] fix: graceful degradation when MCP server fails to connect | Prevents infinite "thinking" state when MCP startup fails (e.g. port conflict). Catches `MCPRuntimeError` in `_agent_loop()`. **he-yufeng** | Open since Apr, updated Jul 11. [GitHub](https://github.com/MoonshotAI/kimi-cli/pull/1769) |
| 3 | [#2493] Fix: record started_at for background agent tasks | Background agent tasks silently lose duration reporting. This PR makes them match bash worker behavior. **nankingjing** | Fresh, 0 comments. [GitHub](https://github.com/MoonshotAI/kimi-cli/pull/2493) |
| 4 | [#2492] fix: shorten_middle output exceeds target width | The `...` ellipsis is not accounted for, causing text truncation to always be 3 chars too long. Trivial but annoying in TTY layouts. **nankingjing** | Fresh, 0 comments. [GitHub](https://github.com/MoonshotAI/kimi-cli/pull/2492) |
| 5 | [#2490] fix(acp): load global MCP config in kimi acp server | Solves #2464 — ACP clients now see user-configured MCP servers. **nankingjing** | Fresh, 0 comments. [GitHub](https://github.com/MoonshotAI/kimi-cli/pull/2490) |

---

## 5. Feature Request Trends

Based on cross-referencing open issues and PR motivations, the most-requested feature directions are:

- **ACP / multi-session parity**: Users want the ACP server to fully mirror interactive CLI capabilities, especially custom MCP tools.
- **Graceful error handling**: Multiple PRs target crash loops and infinite hangs, indicating a strong desire for robustness over new features.
- **Agent observability**: The `started_at` fix for background agents hints at a broader need for better execution telemetry.

No new feature *requests* were filed in the last 24h — the community is currently in a "fix what's broken" phase.

---

## 6. Developer Pain Points

- **API compliance friction**: The necessity of PR #1771 (tool content must be string) suggests the CLI has been silently accepting array responses that OpenAI rejects, causing confused 400 errors in production.
- **Silent failures / deadlocks**: PR #1769 (MCP connection failure) and the uncaught `MCPRuntimeError` point to a pattern where errors leave users with an unresponsive "thinking" state — no error message, no fallback.
- **Inconsistent background behavior**: The fact that background agent tasks don't record `started_at` while bash tasks do suggests the agent backend code paths are less mature and more prone to subtle bugs.
- **Text layout bugs**: The `shorten_middle` width issue and the `CHANGELOG` auto-complete bug both harm day-to-day CLI ergonomics, indicating UI polish gaps that frustrate frequent users.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest
**Date:** 2026-07-12

---

## 1. Today's Highlights

The community remains focused on two persistent pain points: **high CPU usage** during idle periods (issues #30086, #19466, and closed #4804) and **model compatibility** with the latest GPT-5.6 Luna variant (issues #36140, #36247). A surge of community enthusiasm is building around the proposed `/btw` command (#16992, 153 👍), inspired by Anthropic's Claude Code, signaling strong demand for lightweight context injection. The V2 TUI is also seeing active bugfixing, with PRs addressing clipboard behavior on Windows and sidebar persistence.

---

## 2. Releases

No new releases in the past 24 hours.

---

## 3. Hot Issues

1. **#16992 – [FEATURE]: add /btw command**  
   *Author: eladcandroid | 👍: 153 | Comments: 18*  
   The most upvoted open feature request. Users want an inline `/btw` command to quickly inject context without derailing the conversation, mirroring Anthropic's Claude Code.  
   [GitHub](https://github.com/anomalyco/opencode/issues/16992)

2. **#36140 – GPT-5.6 Luna returns model not found with ChatGPT OAuth**  
   *Author: AidenGeunGeun | 👍: 70 | Comments: 16*  
   Critical model availability bug: `gpt-5.6-luna` is listed in the provider UI but returns HTTP 404. Multiple users confirm reproduction.  
   [GitHub](https://github.com/anomalyco/opencode/issues/36140)

3. **#30086 – High CPU usage in newer versions of OpenCode**  
   *Author: DenisSilent | 👍: 13 | Comments: 24*  
   A top performance regression. Users report that CPU usage spikes dramatically after recent updates, degrading multi-session workflows even on high-end hardware.  
   [GitHub](https://github.com/anomalyco/opencode/issues/30086)

4. **#8816 – [FEATURE]: provide llms.txt and docs as markdown**  
   *Author: SamuelMiller | 👍: 35 | Comments: 16*  
   Growing request for LLM-friendly documentation in `llms.txt` format, enabling better tool-augmented development with OpenCode's own docs.  
   [GitHub](https://github.com/anomalyco/opencode/issues/8816)

5. **#19466 – opencode is using CPU for doing nothing!**  
   *Author: Jaaaky | 👍: 11 | Comments: 14*  
   Related to #30086: when rate-limited and retrying, OpenCode burns ~50% of a single i9-14900 core while ostensibly idle.  
   [GitHub](https://github.com/anomalyco/opencode/issues/19466)

6. **#29548 – OpenAI provider headers timeout after 10000ms on 1.15.11**  
   *Author: rayborg | 👍: 4 | Comments: 12*  
   Regression in provider networking: increasing `headerTimeout` works around the issue, but the default 10s timeout is too aggressive.  
   [GitHub](https://github.com/anomalyco/opencode/issues/29548)

7. **#22132 – OpenCode 1.4.3 hangs with local Ollama provider on simple prompts**  
   *Author: Luporosso76 | 👍: 5 | Comments: 12*  
   Local-first workflows suffer: Ollama integration hangs even on trivial prompts, though direct API calls work fine.  
   [GitHub](https://github.com/anomalyco/opencode/issues/22132)

8. **#36247 – GPT-5.6 Codex OAuth uses 1.05M metadata instead of 500k total**  
   *Author: nabilfreeman | 👍: 0 | Comments: 3*  
   Context limit mismatch when using Codex OAuth: the tool reports 1.05M input tokens, but the backend enforces a lower 500k budget, causing unexpected truncation.  
   [GitHub](https://github.com/anomalyco/opencode/issues/36247)

9. **#36465 – "Revert message" should not modify code**  
   *Author: iAvoe | 👍: 0 | Comments: 4*  
   A UX/safety concern: reverting a message also modifies working tree files without warning, and can corrupt Git history when applied to old conversations.  
   [GitHub](https://github.com/anomalyco/opencode/issues/36465)

10. **#33766 – opencode run exits with "unexpected server error"**  
    *Author: jjdredd | 👍: 0 | Comments: 6*  
    Non-actionable error in non-interactive mode. Users encounter `UnknownError` with no clear path to resolution.  
    [GitHub](https://github.com/anomalyco/opencode/issues/33766)

---

## 4. Key PR Progress

1. **#33563 – fix(ui): keep permission dock buttons in view on long requests**  
   *Author: Arcadi4*  
   Fixes permission prompt overflow when patterns are long, keeping action buttons visible. Reopens a previously stalled fix.  
   [GitHub](https://github.com/anomalyco/opencode/pull/33563)

2. **#36475 – fix(cli): keep update preflight through TUI loading**  
   *Author: kitlangton*  
   Prevents terminal blanking during TUI startup while the update check completes.  
   [GitHub](https://github.com/anomalyco/opencode/pull/36475)

3. **#36471 – feat(tui): paste clipboard on right click**  
   *Author: aditya-vithaldas*  
   Adds right-click paste support in the TUI when mouse capture is enabled. Closes #36456.  
   [GitHub](https://github.com/anomalyco/opencode/pull/36471)

4. **#36469 – fix(tui): respect sidebar width threshold**  
   *Author: aditya-vithaldas*  
   Fixes a V2 TUI bug where the sidebar would not close when the window was narrow.  
   [GitHub](https://github.com/anomalyco/opencode/pull/36469)

5. **#36468 – fix(opencode): preserve valid empty JSON config**  
   *Author: aditya-vithaldas*  
   Prevents a dangling comma when `$schema` is injected into an empty config object. Closes #36374.  
   [GitHub](https://github.com/anomalyco/opencode/pull/36468)

6. **#36470 – fix(tui): Windows clipboard - use PowerShell directly for text paste**  
   *Author: MysticDevloper*  
   Addresses two Windows clipboard bugs: admin terminal paste breaks and visual text shrinking on copy.  
   [GitHub](https://github.com/anomalyco/opencode/pull/36470)

7. **#35405 – fix(llm): unflatten Gemini tool call args with dot-bracket notation**  
   *Author: kagura-agent*  
   Fixes Gemini models returning flattened JSON for tool calls (e.g., `questions[0].header`), breaking structured outputs.  
   [GitHub](https://github.com/anomalyco/opencode/pull/35405)

8. **#34794 – feat(provider): add --model free to pick a random zero-cost opencode model**  
   *Author: caretak3r*  
   Introduces `--model free` for cost-free exploration by randomly selecting from available Zen models.  
   [GitHub](https://github.com/anomalyco/opencode/pull/34794)

9. **#35866 – docs: update xAI branding to SpaceXAI**  
   *Author: devinoldenburg*  
   Renames provider labels, OAuth methods, and model catalog entries to reflect xAI's rebranding to SpaceXAI.  
   [GitHub](https://github.com/anomalyco/opencode/pull/35866)

10. **#36466 – fix(cli): load v2 tui config**  
    *Author: opencode-agent[bot]*  
    Fixes V2 TUI ignoring `tui.json` keybindings because it initialized with an empty config.  
    [GitHub](https://github.com/anomalyco/opencode/pull/36466)

---

## 5. Feature Request Trends

- **Lightweight context injection**: The `/btw` command (#16992) is the most-requested new feature, allowing users to sprinkle context without full conversation derailment.
- **Copy-on-select toggle**: Users want opt-out of automatic clipboard pollution (#4751) – a long-running request (25 comments, 18 👍) that was recently closed.
- **LLM-friendly documentation**: Demand for `llms.txt` / structured Markdown docs (#8816) signals the community wants to use OpenCode to improve itself.
- **Session management ergonomics**: Users want a session picker at startup (#36134) and automated session naming (#36439).
- **Anonymized data sharing**: A proposal to opt-in to sharing conversation data with open-source model providers (#35303) suggests users want to improve the ecosystem they depend on.
- **Audible notifications**: Bell ANSI on completion/user-ack (#36472) reflects desire for better async workflow awareness.

---

## 6. Developer Pain Points

- **CPU usage regressions (High frequency)**: Issues #30086, #19466, and closed #4804 all describe the same core problem – runaway CPU consumption during idle/rate-limited states. This is the most common complaint across the last 24 hours.
- **Model provider friction**: GPT-5.6 Luna not found (#36140) and Codex OAuth context limit mismatches (#36247) highlight ongoing integration pain with new model variants.
- **V2 TUI regressions**: Custom leader keys ignored (#36458), missing initial user messages (#35988), and sidebar persistence bugs (#36469) show the V2 TUI is still stabilizing.
- **Provider timeout regressions**: The 10s header timeout (#29548) and local Ollama hangs (#22132) suggest recent networking changes have introduced fragility across providers.
- **Data loss and corruption**: "Revert message" modifying working tree (#36465), duplicate sessions (#36464), and broken Git history are high-severity concerns for users who rely on OpenCode as a daily driver.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# 🥧 Pi Community Digest — 2026-07-12

## Today's Highlights

The community is buzzing with GPT-5.6 family integration across OpenAI, Codex, and GitHub Copilot providers — over **8 issues and PRs** landed today alone to support Sol, Terra, and Luna models. A major `constrainedSampling` PR for provider-side tool argument validation is open for discussion, and critical fixes landed for Codex WebSocket credential isolation, Bedrock `AWS_PROFILE` authentication, and Node CLI startup performance.

## Releases

No new releases in the last 24 hours. The repository has no tagged release activity for this date.

---

## Hot Issues

### 1. [#6475 — Add GPT-5.6 (Sol/Terra/Luna) to GitHub Copilot provider catalog](https://earendil-works/pi/issues/6475)
**CLOSED** · 👍 8 · High community demand. GitHub Copilot rolled out three new GPT-5.6 variants yesterday; the community rapidly requested catalog entries. Promptly closed after implementation.

### 2. [#6097 — Add support for 'max' thinking level](https://earendil-works/pi/issues/6097)
**CLOSED** · 👍 18 · OpenAI introduced a sixth "max" thinking level for GPT-5.6 Sol, mirroring Anthropic Opus. Strong community support (18 upvotes) — closed quickly, indicating fast-track adoption.

### 3. [#6510 — Copilot mai-code-1-flash-picker fails due to wrong API endpoint](https://earendil-works/pi/issues/6510)
**CLOSED** · Model routing bug: `mai-code-1-flash-picker` requires Copilot's `/responses` endpoint but Pi routed to `/chat/completions`. Community identified root cause and opened companion fix PRs.

### 4. [#6524 — Hide GPT-5.6 reasoning-summary empty placeholders](https://earendil-works/pi/issues/6524)
**OPEN** · GPT-5.6 Terra/Sol sometimes emit empty `<\!-- -->` placeholders in visible thinking blocks. Community requesting filtering logic in the TUI display layer.

### 5. [#6502 — Windows Terminal scrolls to top when pi-tui sends ESC[3J](https://earendil-works/pi/issues/6502)
**OPEN** · TUI escape sequence `\x1b[3J` clears the terminal scrollback buffer on Windows Terminal, causing disruptive auto-scrolling. Hot candidate for a TUI fix.

### 6. [#6558 — Tool result attaches to wrong branch after tree navigation](https://earendil-works/pi/issues/6558)
**CLOSED** · Concurrency bug: `/tree` branch switching mid-tool-execution can route `toolResult` to the wrong branch, causing provider rejection. Reported and closed same day — likely urgent fix landed.

### 7. [#6529 — Support GPT-5.6 prompt cache options in OpenAI Responses](https://earendil-works/pi/issues/6529)
**CLOSED** · GPT-5.6 requires new `prompt_cache_options` (implicit mode, 30m TTL) instead of legacy `prompt_cache_retention`. Community contributor submitted a fix PR that was merged.

### 8. [#6456 — ctrl-p should show previous prompt/input, not change model](https://earendil-works/pi/issues/6456)
**CLOSED** · UX friction: users migrating from Claude/Codex expect `Ctrl+P` for command history, but Pi bound it to model switching. Community feedback on discoverability.

### 9. [#5916 — Support provider extensions with model aliases and improve search](https://earendil-works/pi/issues/5916)
**OPEN** · Active discussion (12 comments) on making OpenRouter provider configuration discoverable through UI rather than manual `models.json` overrides. Long-running, still `inprogress`.

### 10. [#6472 — compaction.enabled=false bypassed by overflow recovery path](https://earendil-works/pi/issues/6472)
**CLOSED** · Config setting bypass — when context overflow hits, the recovery path triggers compaction regardless of `compaction.enabled: false`. Community identified a clean bypass in the code path.

---

## Key PR Progress

### 1. [#6534 — feat(ai): add developer message role (OPEN)](https://earendil-works/pi/pulls/6534)
Experimental PR by **mitsuhiko** aligning with RFC 54. Adds `developer` as a new message role — signals architectural expansion beyond `user`/`assistant`/`system`.

### 2. [#6341 — feat(ai): support constrained sampling (OPEN)](https://earendil-works/pi/pulls/6341)
Blockbuster feature by **mitsuhiko**: opt-in `constrainedSampling` config for tools, enabling provider-side JSON schema validation and regex-constrained tool input. Open for community discussion.

### 3. [#6533 — fix: Codex compaction returns "Model not found" for gpt-5.6-luna (OPEN)](https://earendil-works/pi/pulls/6533)
Compaction fails with 404 for Luna. Root cause: the Codex API internally maps model IDs to tier-suffixed slugs that the no-tools registry does not recognize.

### 4. [#6556 — fix(coding-agent): expose Codex responses API to extensions (CLOSED)](https://earendil-works/pi/pulls/6556)
Extension plumbing fix — makes `closeOpenAICodexWebSocketSessions` importable from extensions via loader aliases and Bun virtual modules.

### 5. [#6530 — perf(coding-agent): cut Node CLI startup cost (CLOSED)](https://earendil-works/pi/pulls/6530)
Performance optimization: fast-path `--version` before loading heavy modules, moved Bun-only virtual module imports to lazy entries. Reduces Node startup latency meaningfully.

### 6. [#6532 — Fix Bedrock AWS_PROFILE authentication regression (CLOSED)](https://earendil-works/pi/pulls/6532)
After Bedrock API-key support landed, internal `"<authenticated>"` sentinel was treated as a bearer token and sent to AWS, causing 403s. Separates API-key login from ambient credential resolution.

### 7. [#6528 — fix(ai): support GPT-5.6 prompt cache options (CLOSED)](https://earendil-works/pi/pulls/6528)
Adds `prompt_cache_options` for GPT-5.6 in OpenAI Responses API, omitting legacy `prompt_cache_retention`. Community-contributed fix.

### 8. [#6539 — fix(ai): bind Codex WebSocket reuse to account (CLOSED)](https://earendil-works/pi/pulls/6539)
Security fix: cached Codex WebSocket was keyed only by session ID; account change could reuse stale authenticated socket. Now binds ownership to JWT-derived account claim.

### 9. [#6540 — fix(coding-agent): surface provider errors to the LLM via advisories (CLOSED)](https://earendil-works/pi/pulls/6540)
Previously silent failures (context overflow, retry exhaustion, compaction failure) now injected as visible advisories, enabling LLM to recover adaptively.

### 10. [#6496 — fix(ai): support OpenRouter session affinity (OPEN)](https://earendil-works/pi/pulls/6496)
Adds session ID headers for OpenRouter prompt caching stickiness. OpenRouter requires different header semantics than standard OpenAI, enabling cached prompt reuse across requests.

---

## Feature Request Trends

- **GPT-5.6 Model Integration** — Dominant theme today: Sol/Terra/Luna support across OpenAI, Codex, and GitHub Copilot providers, including proper thinking levels, prompt caching, and endpoint routing.
- **Extension API Expansion** — Multiple requests for `requestReload()` (deferred canonical reload), `compact()` API in extension context, and public `pi-ai` subpath exports for extensions.
- **Constrained/Structured Output** — The `constrainedSampling` PR and associated RFC 54 discussion indicate demand for provider-native tool argument validation.
- **Dynamic Tool Loading** — Continued interest in mid-conversation tool additions (message-anchored tool loading) to avoid bloating initial request tool lists.
- **OpenRouter Provider UX** — Users want UI configuration for provider extensions and model aliases rather than editing `models.json` manually.

---

## Developer Pain Points

- **Configuration friction**: Setting `compaction.enabled: false` is bypassed by overflow recovery paths. CLI options like `-nt`, `--system-prompt` are not persisted across sessions.
- **Cross-platform terminal issues**: Windows Terminal scrollback clearing (`ESC[3J`), `Ctrl+P` keyboard shortcut conflicts with Unix muscle memory, legacy `Alt+symbol` key handling gaps.
- **Extension developer noise**: Importing Typebox schemas from extension code fails due to missing module resolution, `input` extension events not firing for `steer()`/`followUp()`, and public API subpaths being inaccessible.
- **Provider authentication regressions**: Bedrock `AWS_PROFILE` broke after API-key login changes; Cloudflare Workers AI still returns 404 for some users; Codex WebSocket sessions can retain stale credentials across account switches.
- **Context window clamping conflict**: Clamping `max_tokens` to context window prevents users from setting artificial, lower limits — breaks scenarios like proxy-based overrides or cost-controlled generation.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-07-12

## Today's Highlights
This week's activity centers on **multi-workspace daemon architecture**, **session recovery reliability**, and **Web Shell UX enhancements**. A significant RFC proposes breaking the "1 daemon = 1 workspace" assumption, while multiple memory-management bugs and tool-result corruption issues are actively being addressed. A batch of Web Shell composer toolbar improvements (git branch display, workspace switching, custom session group colors) signals growing polish for the browser-based interface.

## Releases
No new releases in the last 24 hours. The current stable version remains the one referenced in issues: Qwen Code 0.19.8.

## Hot Issues

1. **[[RFC] Support multiple workspaces in one qwen serve daemon](https://github.com/QwenLM/qwen-code/issues/6378)** (#6378, Open, 20 comments) — The most-discussed issue this week. Proposes allowing a single `qwen serve` process to host multiple workspaces, with per-session isolation. Community is debating backward compatibility and daemon-level resource management.

2. **[[BUG] Memory index stale after /remember; memory lost on compaction](https://github.com/QwenLM/qwen-code/issues/6487)** (#6487, Open, 3 comments) — Two independent bugs degrade long-session memory: index not updated in system prompt after `/remember`, and microcompaction clearing managed memory content. Critical for power users running extended coding sessions.

3. **[[BUG] Claude Opus 4.6-4.8 fall back to incorrect limits](https://github.com/QwenLM/qwen-code/issues/6719)** (#6719, Closed, 2 comments) — These models incorrectly get 200K input/64K output instead of the official 1M input/128K output. Quickly fixed by the community (@yiliang114), with a follow-up (#6734) adjusting the `max_tokens` constant to 128,000.

4. **[[BUG] MCP servers with HTTP transport show offline on 401 — OAuth not triggered](https://github.com/QwenLM/qwen-code/issues/6639)** (#6639, Closed, 3 comments) — MCP servers returning 401 are stuck "offline" with no recovery path. The root cause: the SDK drops HTTP status codes during connection failures, preventing OAuth re-authentication.

5. **[[BUG] Daemon restart drops workspaces registered from Web Shell](https://github.com/QwenLM/qwen-code/issues/6726)** (#6726, Closed, 2 comments) — Workspaces added dynamically through Web Shell are lost after daemon restart. Highlights the need for persistent workspace registration in the multi-workspace feature (#6378).

6. **[[BUG] Qwen 3.7 Max returns `<think>` tags in content instead of reasoning_content](https://github.com/QwenLM/qwen-code/issues/6666)** (#6666, Open, 3 comments) — The DashScope API sometimes mixing reasoning output into the visible `content` field causes downstream parsing issues. Affects all users of Qwen 3.7 Max.

7. **[[BUG] Ctrl+V paste broken on macOS standalone: missing @teddyzhu/clipboard](https://github.com/QwenLM/qwen-code/issues/6590)** (#6590, Closed, 5 comments) — Standalone macOS builds are missing a native clipboard module, making image pasting silently fail. The fix requires bundling the native module. Tagged `welcome-pr`.

8. **[[FEATURE] Chat recording reports success before JSONL writes are durable](https://github.com/QwenLM/qwen-code/issues/6742)** (#6742, Open, 1 comment) — Async JSONL writer acknowledges success before the write hits disk. If a queued write fails, the parent-chain pointer advances past a gap, corrupting the session log.

9. **[[FEATURE] Redesign Web Shell composer toolbar with workspace, context, and git branch](https://github.com/QwenLM/qwen-code/issues/6699)** (#6699, Open, 3 comments) — Inspired by Codex desktop client, this proposes adding workspace switching, execution context selection, and git branch info directly in the composer toolbar. A companion PR #6725 adds the git branch indicator.

10. **[[BUG] DashScope/Qwen models return empty content causing InvalidStreamError](https://github.com/QwenLM/qwen-code/issues/6670)** (#6670, Closed, 1 comment) — Intermittent empty frames from DashScope streaming break client-side parsing. High priority for Qwen model users on this API.

## Key PR Progress

1. **[fix(prompt-cache): stabilize deferred tool calls](https://github.com/QwenLM/qwen-code/pull/6723)** (#6723, Open) — Addresses #6721 by keeping provider tool declarations stable after deferred discovery. Instead of mutating the function declaration set, the model receives schema as controlled content, preserving prompt cache prefixes.

2. **[feat(web-shell): add workspace Goals page; fix /goal loss on daemon resume](https://github.com/QwenLM/qwen-code/pull/6561)** (#6561, Open) — Provides a visual Goals page in Web Shell and fixes a bug where `/goal` settings silently disappeared when the daemon restarted.

3. **[feat(serve): support runtime workspace removal](https://github.com/QwenLM/qwen-code/pull/6745)** (#6745, Open) — Enables removing workspaces from a running daemon via authenticated endpoints, completing the multi-workspace lifecycle (add → remove).

4. **[fix(web-shell): avoid duplicate inline tag tooltips](https://github.com/QwenLM/qwen-code/pull/6729)** (#6729, Closed) — Makes native `title` tooltip a fallback when a custom React tooltip is provided, using `aria-describedby` for accessibility. Fixes #6728.

5. **[fix: Make chat recording failures durable and visible](https://github.com/QwenLM/qwen-code/pull/6743)** (#6743, Open) — Keeps async serialization but makes the durability contract explicit: first write failure permanently stops the recorder and preserves the rejected write chain for debugging.

6. **[feat(serve): add extension management v2](https://github.com/QwenLM/qwen-code/pull/6638)** (#6638, Open) — Introduces per-workspace extension activation policies under the `extension_management_v2` capability, with global defaults and exact workspace overrides.

7. **[fix(mcp): recover OAuth authentication after HTTP 401](https://github.com/QwenLM/qwen-code/pull/6732)** (#6732, Closed) — Adds a HEAD probe to detect 401 challenges before attempting OAuth recovery, fixing the "stuck offline" MCP issue.

8. **[perf(core): lazy-load web-tree-sitter runtime](https://github.com/QwenLM/qwen-code/pull/6747)** (#6747, Open) — Moves `web-tree-sitter` from static import to first-use dynamic import, reducing startup cost while keeping initialization deduplicated.

9. **[feat(cli): add /reload-env command for hot-reloading API keys](https://github.com/QwenLM/qwen-code/pull/6707)** (#6707, Open) — New slash command reloads environment variables and API keys from `settings.json` and `.env` without restarting the session, calling `refreshAuth()` to rebuild the client.

10. **[feat(cli): add runtime daemon channel control](https://github.com/QwenLM/qwen-code/pull/6741)** (#6741, Open) — Complete lifecycle control for daemon channel workers: enable, replace, query, reload, and stop through HTTP endpoints, SDK, or CLI.

## Feature Request Trends

- **Multi-workspace daemon architecture** (#6378, #6646, #6746) — The dominant theme this week. Multiple issues and PRs build toward supporting multiple workspaces in a single daemon, with qualified APIs and cross-workspace session visibility.
- **Web Shell composer toolbar enhancements** (#6699, #6702, #6725, #6744) — Several requests for inline workspace switching, git branch display, execution context selection, and custom session group colors in the browser UI.
- **Session recovery automation** (#6695, #6710, #6730) — Growing demand for automatic interrupted-turn continuation after session load/environment restart, with a unified recovery service that classifies and repairs session history.
- **Improved memory management** (#6487, #6713) — Users want durable long-session memory that survives microcompaction and properly updates the system instruction after `/remember`.
- **Inline model switching** (#5967) — The ability to switch models mid-prompt using `/model <id> <prompt>` continues to gather support as a workflow efficiency improvement.

## Developer Pain Points

1. **Memory corruption in long sessions** — Two independent memory bugs (#6487, #6713) cause managed memory to be cleared by microcompaction and index files to go stale after `/remember`. This is the top pain point for power users running extended coding sessions.

2. **Daemon state loss on restart** — Workspace registrations (#6726), session `/goal` settings (#6561), and channel configuration (#6695) are all lost when the daemon restarts, forcing manual reconfiguration.

3. **Empty/truncated responses from DashScope** (#6666, #6670) — Qwen 3.7 Max intermittently returns reasoning in the wrong field or empty content, causing `InvalidStreamError` and requiring retry logic.

4. **MacOS packaging gaps** (#6590) — The standalone macOS build is missing native clipboard modules, making image pasting silently fail. This is a basic usability regression for macOS users.

5. **MCP authentication deadlocks** (#6639, #6732) — MCP servers behind HTTP 401 are stuck "offline" indefinitely because the SDK drops the status code and never triggers the OAuth recovery path.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-07-12

## Today’s Highlights
The DeepSeek TUI ecosystem continues to see active community contributions despite no new releases today. Two cross-platform build patches (NetBSD, Android/Termux) highlight growing demand for non-standard platform support. The Anthropic API compatibility layer remains a hot topic, with two related issues and one fix PR submitted in the last 24 hours.

## Releases
No new releases in the last 24 hours.

## Hot Issues

1. **#4227 – feat: 🐋 help JayBeest map the CodeWhale tsunami 🌊**  
   *(Author: JayBeest, Updated: 2026-07-11, Comments: 5)*  
   A workflow/skill proposal to help contributors set up and maintain CodeWhale dev environments, especially given 10+ PRs/day velocity. Community engagement suggests strong interest in onboarding tooling.  
   [Hmbown/CodeWhale Issue #4227](https://github.com/Hmbown/CodeWhale/issues/4227)

2. **#4329 – Anthropic API error (HTTP 400: missing `tool_result`)**  
   *(Author: lixin34, Updated: 2026-07-11, Comments: 4)*  
   `tool_use` blocks lacking corresponding `tool_result` blocks causing API rejection. A critical bug affecting Anthropic provider workflows.  
   [Hmbown/CodeWhale Issue #4329](https://github.com/Hmbown/CodeWhale/issues/4329)

3. **#4345 – Key binding unfriendly; cannot run in terminal (Chinese)**  
   *(Author: hutong9, Updated: 2026-07-11, Comments: 2)*  
   User reports TUI key bindings are not terminal-friendly. Suggests usability pain point for non-standard keyboard layouts.  
   [Hmbown/CodeWhale Issue #4345](https://github.com/Hmbown/CodeWhale/issues/4345)

4. **#4350 – Cargo build fails on Android/Termux (rquickjs bindings)**  
   *(Author: Michael2008S, Updated: 2026-07-11, Comments: 1)*  
   Missing platform bindings for `aarch64-linux-android`. A blocker for mobile developers.  
   [Hmbown/CodeWhale Issue #4350](https://github.com/Hmbown/CodeWhale/issues/4350)

5. **#4326 – Perf: explain and bound RSS after cancelling 32-worker storm**  
   *(Author: Hmbown, Updated: 2026-07-11, Comments: 1)*  
   Post-cancellation RSS not settling as expected. Could indicate allocator retention or a real memory leak. High-priority for stability.  
   [Hmbown/CodeWhale Issue #4326](https://github.com/Hmbown/CodeWhale/issues/4326)

*(Note: Only 5 issues were updated in the last 24h, so the top 5 are listed.)*

## Key PR Progress

1. **#4349 – Update Cargo.toml to allow build under NetBSD**  
   *(Author: ci4ic4, Updated: 2026-07-11)*  
   Generates rquickjs bindings for NetBSD. Also applicable to FreeBSD, OpenBSD, DragonFly.  
   [Hmbown/CodeWhale PR #4349](https://github.com/Hmbown/CodeWhale/pull/4349)

2. **#4348 – fix(tui): bill Anthropic cache-write tokens at published rates**  
   *(Author: knqiufan, Updated: 2026-07-11)*  
   Fixes misattribution of `cache_creation_input_tokens`; adds `cache_write_per_million` to TUI pricing display.  
   [Hmbown/CodeWhale PR #4348](https://github.com/Hmbown/CodeWhale/pull/4348)

3. **#4347 – i18n: add Korean (ko) locale support**  
   *(Author: moduvoice, Updated: 2026-07-11)*  
   New `ko.json` with 752 translated keys. Expands non-English accessibility.  
   [Hmbown/CodeWhale PR #4347](https://github.com/Hmbown/CodeWhale/pull/4347)

4. **#4346 – fix: sanitize tool input_schema for Anthropic adapter**  
   *(Author: qinlinwang, Updated: 2026-07-11)*  
   Fixes Anthropic rejection when `input_schema` contains `oneOf`/`anyOf`/`allOf`. Directly addresses Issue #4329’s root cause.  
   [Hmbown/CodeWhale PR #4346](https://github.com/Hmbown/CodeWhale/pull/4346)

## Feature Request Trends
- **Cross-platform portability** (Android, BSDs) — requests for native builds on non-Linux OSes, especially mobile.
- **i18n expansion** — Korean support added; community interest in broader locale coverage.
- **Workflow/sub-agent onboarding** — tooling to help contributors quickly set up dev environments in high-velocity projects.

## Developer Pain Points
- **Anthropic API compatibility** — multiple issues/PRs around `tool_use`/`tool_result` validation and pricing token accounting.
- **Non-standard platform builds** — missing rquickjs bindings for Android (Termux) and BSDs cause build failures.
- **TUI usability** — key binding issues (non-QWERTY, terminal-friendly) and post-cancellation memory management remain unresolved frustrations.
- **High-velocity project maintenance** — the 10+ PRs/day pace creates onboarding friction, as highlighted in Issue #4227.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*