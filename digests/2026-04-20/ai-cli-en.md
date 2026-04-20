# AI CLI Tools Community Digest 2026-04-20

> Generated: 2026-04-20 00:25 UTC | Tools covered: 8

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Gemini CLI](https://github.com/google-gemini/gemini-cli)
- [GitHub Copilot CLI](https://github.com/github/copilot-cli)
- [Kimi Code CLI](https://github.com/MoonshotAI/kimi-cli)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Pi](https://github.com/badlogic/pi-mono)
- [Qwen Code](https://github.com/QwenLM/qwen-code)
- [Claude Code Skills](https://github.com/anthropics/skills)

---

## Cross-Tool Comparison

### **AI CLI Tools Ecosystem Cross-Tool Analysis Report**  
*April 20, 2026*

---

#### **1. Ecosystem Overview**  
The AI developer tools landscape remains highly fragmented, with each major provider—Anthropic (Claude Code), OpenAI (Codex), Google (Gemini CLI), GitHub (Copilot CLI), Moonshot AI (Kimi Code), and others—maintaining distinct codebases and feature sets. While all are converging on core agentic capabilities (MCP integration, subagents, goal mode), they diverge significantly in authentication models, sandboxing approaches, and cross-platform reliability. Community feedback consistently highlights three pain points: inconsistent session state management, opaque resource usage (tokens/memory), and platform-specific regressions that undermine enterprise adoption.

---

#### **2. Activity Comparison**

| Tool              | Issues (Top 10 Engagement) | PRs Updated Today | New Releases |
|-------------------|----------------------------|-------------------|--------------|
| **Claude Code**   | 10                         | 8                 | None         |
| **OpenAI Codex**  | 10                         | 10                | Alpha (Rust) |
| **Gemini CLI**    | 10                         | 10                | None         |
| **Copilot CLI**   | 10                         | 0                 | None         |
| **Kimi Code**     | 8                          | 4                 | None         |
| **OpenCode**      | 10                         | 10                | v1.14.18     |
| **Pi**            | 10                         | 10                | None         |
| **Qwen Code**     | 10                         | 10                | Nightly      |

*Note: All tools maintain active issue tracking; Copilot CLI shows zero PR activity despite high-impact issues.*

---

#### **3. Shared Feature Directions**

- **Agent Autonomy & Goal Management**: OpenAI Codex, Kimi Code, and Pi all prioritize goal-mode agents with token accounting, budget stopping, and persistent objectives—but lack consistent UX across platforms.
- **MCP Integration Reliability**: Claude Code’s “Channels Plugin Misleading Error” and Kimi Code’s MCP config leaks reveal systemic gaps in toolchain interoperability.
- **Session State Integrity**: Multiple tools report session corruption after interruptions (Pi #3344), stale skill arguments persisting post-compaction (Claude Code #50947), and orphaned temp scripts (Gemini CLI #23571).
- **Cross-Platform Consistency**: Desktop-CLI mismatches (Claude Code sidebar missing tab), SSH text corruption (Gemini CLI #24202), and Windows-specific crashes (Qwen Code path handling) persist.
- **Cost Transparency**: Rate limit opacity (Copilot CLI #2336, #2760) and hidden quota consumption (`/review` eating tokens in Codex #18194) frustrate Pro users.

---

#### **4. Differentiation Analysis**

| Dimension          | Leading Tools & Characteristics                                                                 |
|--------------------|--------------------------------------------------------------------------------------------------|
| **Authentication** | - *Claude Code/Copilot CLI*: Phone verification blockers vs. org-level model visibility gaps<br>- *Qwen Code*: OAuth-to-API-key regression causing widespread 401 errors<br>- *Gemini/Kimi*: Fewer auth issues but limited enterprise flexibility |
| **Sandboxing**     | - *OpenAI Codex*: Linux bwrap prompts degrade workflow efficiency (#14936)<br>- *Pi*: Schema validation breaks Cloud Code Assist integrations |
| **Enterprise Focus**| - *Copilot CLI/OpenCode*: Strong demand for permission controls (YOLO mode #11831), custom thinking levels<br>- *Claude Code*: Slack multi-workspace support requested by professionals |
| **Local Model Support** | - *OpenCode/Pi*: Explicit optimizations for Ollama, LM Studio, Bedrock<br>- *Qwen Code*: Nightly builds prioritize ACP hooks for local toolchains |

---

#### **5. Community Momentum & Maturity**

- **Highest Engagement**:  
  - **Claude Code** (#34229 phone verification has 700+ comments) and **OpenAI Codex** (remote dev request: 573 👍) show intense community pressure on blocking issues.  
  - **Qwen Code**’s free-tier reduction proposal (#3203) sparked 102 comments—indicating sensitivity to pricing shifts.

- **Rapid Iteration**:  
  - **OpenAI Codex** and **Gemini CLI** land 10+ PRs/day, focusing on goal-mode stack completion and security hardening.  
  - **Pi** and **OpenCode** rapidly fix provider-specific bugs (e.g., Azure OpenAI breakage, GovCloud Bedrock).

- **Maturity Signals**:  
  - **Copilot CLI**’s stagnant PR activity amid critical rate-limit bugs suggests backend prioritization over client fixes.  
  - **Kimi Code**’s subagent `work_dir` fix (#1933) demonstrates growing sophistication in nested agent control.

---

#### **6. Trend Signals**

- **Shift Toward Autonomous Agents**: Goal mode is no longer experimental—OpenAI Codex has shipped full TUI UX; Kimi Code and Pi are refining subagent context inheritance.
- **Provider Lock-in Risks**: Qwen Code’s OAuth deprecation and Claude Code’s phone verification create onboarding friction that may drive users to self-hosted alternatives like OpenCode.
- **Infrastructure Demands**: Memory leaks (OpenCode #20695), zombie processes (Codex #12491), and disk bloat (OpenCode #13479) expose unsustainable resource models for long-running sessions.
- **Security Over Flexibility**: Increasing focus on permission isolation (OpenCode MCP bypass #23045) and secure defaults (Gemini’s `execFileSync` replacement #24760) reflects regulatory pressures.
- **Developer-Centric UX**: Slash command expansion (`/restart`, `/btw`), session summaries, and terminal notifications signal a push toward conversational interfaces beyond pure automation.

> **Strategic Implication**: Teams evaluating tools should prioritize those with robust session state management, transparent cost controls, and cross-platform consistency—especially if deploying at scale or integrating with existing DevOps workflows. The coming quarter will likely see consolidation around MCP-compliant agent frameworks, but authentication stability remains the top blocker for mainstream adoption.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

**Claude Code Skills Community Highlights Report**  
*As of 2026-04-20*

---

### 1. Top Skills Ranking

The most-discussed pending Skills (by comment activity) show strong focus on **document quality**, **developer tooling**, and **enterprise integration**:

- **[skill-quality-analyzer & skill-security-analyzer](https://github.com/anthropics/skills/pull/83)** – Meta-skills for auditing Skill quality (structure, docs, examples) and security implications. Critical for maintaining ecosystem integrity. *(Open since Nov 2025)*
- **[SAP-RPT-1-OSS predictor skill](https://github.com/anthropics/skills/pull/181)** – Enables predictive analytics on SAP business data using SAP’s open-source tabular foundation model. Targets enterprise AI adoption. *(Open since Dec 2025)*
- **[masonry-generate-image-and-videos](https://github.com/anthropics/skills/pull/335)** – Integrates Masonry CLI for AI-generated images/videos via Imagen 3.0/Veo 3.1. Supports job management and multi-modal output. *(Open since Feb 2026)*
- **[x402 BSV auth + micropayment](https://github.com/anthropics/skills/pull/374)** – Adds decentralized payment layer for AI service discovery and microtransactions via Bitcoin SV. *(Open since Feb 2026)*
- **[shodh-memory](https://github.com/anthropics/skills/pull/154)** – Persistent memory system storing context across conversations in tagged Markdown files. Addresses core limitation of stateless interactions. *(Open since Dec 2025)*
- **[record-knowledge](https://github.com/anthropics/skills/pull/521)** – Captures user-discovered knowledge into searchable `.claude/knowledge/` entries for cross-session retention. Complements shodh-memory with lightweight capture. *(Open since Mar 2026)*
- **[codebase-inventory-audit](https://github.com/anthropics/skills/pull/147)** – Systematic audit workflow identifying orphaned code, unused assets, and documentation gaps. Produces `CODEBASE-STATUS.md`. *(Open since Dec 2025)*
- **[testing-patterns](https://github.com/anthropics/skills/pull/723)** – Comprehensive guidance covering Testing Trophy, React Testing Library, unit patterns, and edge-case strategies. *(Open since Mar 2026)*

All listed PRs remain **open**; none have merged yet as of April 2026.

---

### 2. Community Demand Trends

From active Issues, key unmet needs emerge:

- **Cross-organizational Skill sharing**: Users request native org-wide Skill libraries or sharing links instead of manual file transfer (Issue #228).
- **Enterprise SSO compatibility**: Many tools (e.g., skill-creator) require direct API keys, blocking SSO-based enterprise deployments (Issue #532).
- **Document format support**: Strong interest in OpenDocument (.odt/.ods), DOCX robustness (tracked changes/bookmark collisions), and typographic quality control.
- **AI agent infrastructure**: Persistent memory (#154), knowledge recording (#521), and governance patterns (#412) reflect demand for multi-turn agent capabilities.
- **MCP integration**: Desire to expose Skills as standardized MCP endpoints for interoperability (Issue #16).

---

### 3. High-Potential Pending Skills

These actively discussed PRs show high engagement and likely imminent inclusion:

| PR | Title | Focus Area |
|----|------|------------|
| [#83](https://github.com/anthropics/skills/pull/83) | skill-quality-analyzer / skill-security-analyzer | Meta-tooling |
| [#154](https://github.com/anthropics/skills/pull/154) | shodh-memory | Agent memory |
| [#521](https://github.com/anthropics/skills/pull/521) | record-knowledge | Knowledge persistence |
| [#181](https://github.com/anthropics/skills/pull/181) | SAP-RPT-1-OSS predictor | Enterprise analytics |
| [#374](https://github.com/anthropics/skills/pull/374) | x402 BSV auth + micropayment | Payment infrastructure |

Each has clear use cases, detailed implementation, and addresses documented pain points.

---

### 4. Skills Ecosystem Insight

The community’s most concentrated demand is for **AI agent infrastructure**—specifically persistent memory, knowledge recording, and cross-session context retention—to enable reliable, long-running autonomous workflows.

--- 

*Sources: [anthropics/skills](https://github.com/anthropics/skills) public repository data as of 2026-04-20.*

---

**Claude Code Community Digest – April 20, 2026**

---

### **Today’s Highlights**
The community continues to grapple with persistent stability and performance issues, most notably severe latency in long-context sessions (Issue #47731) and recurring problems with phone verification (#34229). Meanwhile, new feature requests are emerging around multi-workspace integrations (e.g., Slack) and session management enhancements. A small but active set of PRs suggests ongoing maintenance and documentation improvements.

---

### **Releases**
*No new releases reported in the last 24 hours.*

---

### **Hot Issues**  
*(Top by engagement and impact)*

1. **[Phone Verification Broken](https://github.com/anthropics/claude-code/issues/34229)** – Over 700 comments signal widespread frustration; users cannot complete onboarding or reset access. Likely blocking for new enterprise adoption.
2. **[Oversized Image Crashes Conversation](https://github.com/anthropics/claude-code/issues/13480)** – No recovery path after upload failure—critical UX flaw affecting visual workflows. High engagement (52 👍).
3. **[Channels Plugin Misleading Error](https://github.com/anthropics/claude-code/issues/36503)** – False “not available” message despite functional inbound notifications. Confusing user experience for plugin adopters.
4. **[Slack Multi-Workspace Support Request](https://github.com/anthropics/claude-code/issues/44243)** – Professionals managing multiple teams need unified access; 16 upvotes reflect strong use-case demand.
5. **[Custom statusLine Command Ignored](https://github.com/anthropics/claude-code/issues/13517)** – Breaks TUI customization on macOS; affects power users relying on status monitoring.
6. **[Severe Latency in Long Sessions](https://github.com/anthropics/claude-code/issues/47731)** – 20-minute turn times render extended coding sessions impractical; urgent performance concern.
7. **[Cowork VM “Not Available” on Windows](https://github.com/anthropics/claude-code/issues/50938)** – Virtualization fails silently even when SVM is enabled; limits collaborative development.
8. **[Token Limit Enforcement Bugs](https://github.com/anthropics/claude-code/issues/50740)** – Post-limit lockout disrupts workflow continuity; unclear if intentional or bug.
9. **[Stale Skill Arguments Persist After Compaction](https://github.com/anthropics/claude-code/issues/50947)** – Risk of AI acting on outdated instructions post-session summary; safety/security implication.
10. **[Desktop Sidebar Missing Scheduled Tab](https://github.com/anthropics/claude-code/issues/50928)** – Feature regression between web and desktop apps; inconsistent UX.

---

### **Key PR Progress**

1. **[Remove Retro-Futuristic Frontend Recommendation](https://github.com/anthropics/claude-code/pull/39043)** – Cleanup of outdated skill advice; aligns with current best practices.
2. **[Fix Changelog Skill Name](https://github.com/anthropics/claude-code/pull/50672)** – Corrects `/less-permission-prompts` typo in v2.1.111 changelog; avoids confusion.
3. **[Ethos Aegis Dev Standardization](https://github.com/anthropics/claude-code/pull/50643)** – Introduces CI/CD templates, issue tracking, and branding—suggests internal tooling evolution.
4. **[Readme Image Fixes](https://github.com/anthropics/claude-code/pull/50638)** – Minor docs polish for EU/SF regions.
5. **[Duplicate Imports Fix](https://github.com/anthropics/claude-code/pull/50595)** – Restores class structure while eliminating redundancy.
6. **[Wrangler Observability Bootstrap](https://github.com/anthropics/claude-code/pull/50578)** – Enhances logging/monitoring infrastructure for better debugging.
7. **[Veriflow Immune System Contract](https://github.com/anthropics/claude-code/pull/47895)** – Experimental integration with Veriflow for code verification (closed PR re-opened).
8. **[Group Patch Updates](https://github.com/anthropics/claude-code/pull/50637)** – Internal configuration updates (context-limited).

*Note: Many recent PRs appear experimental or internal; few directly address public-facing bugs.*

---

### **Feature Request Trends**

- **Multi-account/Workspace Integrations**: Slack, Teams, and similar tools require support for multiple workspaces per user.
- **Session Management Improvements**: Archiving, unarchiving, and restoring long-running conversations (Issue #30869).
- **Plugin Configuration Flexibility**: Desire for `default` values in `userConfig` (Issue #46477) and clearer plugin state signaling.
- **Desktop-CLI Consistency**: Bridging gaps between web/desktop UI features (e.g., missing scheduled tab).
- **Cost Transparency & Control**: Better visibility into token usage and hard limits enforcement (multiple cost-related reports).

---

### **Developer Pain Points**

- **Onboarding Blockers**: Phone verification failures prevent initial setup for many users.
- **Performance Degradation**: Long-context sessions suffer extreme latency, undermining core use cases.
- **State Corruption**: Skills and MCP connections sometimes retain stale arguments post-compaction—risking incorrect behavior.
- **Platform-Specific Instabilities**: Windows/macOS show divergent behaviors (Cowork VM, sidebar elements, permission prompts).
- **Lack of Recovery Paths**: Oversized images or quota limits leave users stranded without fallback options.
- **Documentation Gaps**: Typos and outdated references (e.g., changelog) erode trust in release notes.

--- 

*Sources: GitHub Issues & Pull Requests from [anthropics/claude-code](https://github.com/anthropics/claude-code), filtered for last 24h updates.*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

**OpenAI Codex Community Digest – April 20, 2026**

---

### **Today's Highlights**

The Codex team continues its rapid iteration cycle with multiple alpha releases of the Rust-based codex-rs engine and a major push toward goal-mode agent autonomy. A key theme this week is improving user experience around approval workflows, remote development support, and process lifecycle management—especially for MCP (Model Context Protocol) integrations. Notably, several high-engagement issues highlight growing demand for enhanced desktop app functionality and better sandboxing behavior.

---

### **Releases**

- **rust-v0.122.0-alpha.12** & **rust-v0.122.0-alpha.11**: Minor alpha updates to the Rust backend, likely refining internal tooling or dependency updates. No public-facing changelog provided; these appear to be stabilization builds ahead of a stable Rust release.

---

### **Hot Issues**

1. **[Remote Development in Codex Desktop App](https://github.com/openai/codex/issues/10450)**  
   Top-requested enhancement: native remote development akin to VS Code’s Remote-SSH. 👍 573 | 💬 145  
   *Why it matters:* Users want seamless access to remote servers without manual setup—critical for DevOps and distributed teams.

2. **[bwrap: Approval Prompt Shown for Almost Every Command](https://github.com/openai/codex/issues/14936)**  
   Regression in Linux sandboxing causing excessive approval prompts. 👍 20 | 💬 49  
   *Impact:* Degrades workflow efficiency; suggests misconfiguration in bubblewrap policy.

3. **[Codex Replies to Earlier Messages Instead of Latest](https://github.com/openai/codex/issues/8648)**  
   Context handling bug in multi-message threads. 👍 37 | 💬 45  
   *User impact:* Breaks conversational flow; undermines reliability of agentic interactions.

4. **[Empty .codex File Left Behind on Thread Start](https://github.com/openai/codex/issues/16088)**  
   Bug where starting a thread without an existing `.codex` file creates a malformed empty file. 👍 58 | 💬 21  
   *Technical concern:* Filesystem pollution; may affect CI/CD pipelines relying on clean state.

5. **[MCP Child Processes Not Reaped — Memory Leak](https://github.com/openai/codex/issues/12491)**  
   Zombie processes and 37GB memory leak post-task completion via Codex.app GUI. 👍 3 | 💬 13  
   *Severity:* Critical resource leak; impacts long-running workloads on macOS.

6. **[Stale Capacity Banner Displayed](https://github.com/openai/codex/issues/11635)**  
   UI incorrectly shows "model at capacity" even when responsive. 👍 6 | 💬 14  
   *UX flaw:* Confuses users about service availability during transient load spikes.

7. **[TUI Performance Regression (v0.116 → v0.117)](https://github.com/openai/codex/issues/16335)**  
   Sudden slowdown in TUI rendering on Windows. 👍 7 | 💬 12  
   *Regression impact:* Degrades CLI usability; likely tied to terminal abstraction changes.

8. **[Non-codex_apps MCP Calls Block on Approval Prompt](https://github.com/openai/codex/issues/15824)**  
   All external MCP tools now trigger app-tool approval flow unexpectedly. 👍 0 | 💬 10  
   *Security/workflow conflict:* Breaks non-interactive scripts relying on silent execution.

9. **[Playwright MCP Still Leaking After Fix](https://github.com/openai/codex/issues/17832)**  
   Orphaned stdio pairs and 13.6GB RSS despite prior patch (#16895). 👍 0 | 💬 7  
   *Ongoing issue:* Indicates incomplete fix or new edge case in process management.

10. **[review Error Eats Up 5hr Rate Limit](https://github.com/openai/codex/issues/18194)**  
    `/review` commands consume excessive quota without clear feedback. 👍 0 | 💬 6  
    *Cost concern:* Hidden usage inefficiency; affects budget-conscious Pro users.

---

### **Key PR Progress**

1. **[Rebrand “Approvals Reviewer” to “Auto-Review”](https://github.com/openai/codex/pull/18504)**  
   Aligns config naming with user-facing terminology (`auto_review` vs `guardian_subagent`). Improves API consistency.

2. **[Wire PatchUpdated Events Through App Server](https://github.com/openai/codex/pull/18289)**  
   Enables real-time progress feedback during patch application—foundational for better UX in Codex.app.

3. **[Warn When Trusting Git Subdirectories](https://github.com/openai/codex/pull/18602)**  
   Clarifies trust scope during onboarding by warning when subdir launch implies repo-wide trust.

4. **[Soften Fast Mode Plan Usage Copy](https://github.com/openai/codex/pull/18601)**  
   Updates promotional text to use generic “increased plan usage” instead of specific multipliers—more consistent messaging.

5. **[Goal Mode Core Runtime (4/5)](https://github.com/openai/codex/pull/18076)**  
   Implements token accounting, budget stopping, and resume logic for autonomous goal execution.

6. **[Goal Mode Model Tools (3/5)](https://github.com/openai/codex/pull/18075)**  
   Adds `get_goal`, `set_goal`, `update_goal` tools—enabling models to manage persistent objectives mid-execution.

7. **[Goal Mode App-Server API (2/5)](https://github.com/openai/codex/pull/18074)**  
   Exposes goal APIs over HTTP/WebSocket with notification support for live UI sync.

8. **[Goal Mode State Foundation (1/5)](https://github.com/openai/codex/pull/18073)**  
   Base layer for persisted goal storage behind feature flags—sets stage for full autonomy stack.

9. **[Goal Mode TUI UX (5/5)](https://github.com/openai/codex/pull/18077)**  
   Completes goal mode experience: `/goal` command, status indicators, snapshots, and history handling.

10. **[Fix Guardian Skills Message](https://github.com/openai/codex/pull/18599)**  
    Removes unintended skills message injection into guardian review threads—aligns with security isolation goals.

---

### **Feature Request Trends**

- **Remote Development Support**: Strong demand for SSH/WSL/cloud workspace integration in the desktop app.
- **Configurable Worktree Locations**: Users seek control over where Git worktrees are created.
- **Undo/Redo in TUI**: Familiar editing UX expected in prompt input fields.
- **Automatic App Update Control**: Desire to disable auto-updates for stability or compliance reasons.
- **Hierarchical Multi-Agent Systems**: Emerging interest in nested or parent-child agent architectures.

---

### **Developer Pain Points**

- **Excessive Sandbox Prompts**: Linux users report frequent approval requests due to overly restrictive bwrap policies.
- **Memory Leaks in MCP Integration**: Persistent zombie processes after task completion break reliability.
- **Rate Limit Opacity**: Lack of visibility into token consumption (e.g., `/review` eating quota) frustrates cost management.
- **Inconsistent Naming**: Internal terms like “Guardian” vs user-facing “Auto-Review” cause confusion in configs and telemetry.
- **Regression Instability**: Multiple performance regressions (TUI, model response ordering) indicate quality control gaps between versions.

--- 

*Generated from GitHub activity on openai/codex as of 2026-04-20.*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

**Gemini CLI Community Digest — 2026-04-20**

---

### **Today's Highlights**
The Gemini CLI team continues to focus on core stability and agent intelligence enhancements, with recent work addressing permission handling regressions, shell command execution hangs, and memory routing improvements. A new `/restart` slash command was introduced to improve session continuity during auto-updates, while ongoing investigations into AST-aware tooling aim to refine codebase navigation precision.

---

### **Releases**
No new releases in the last 24 hours.

---

### **Hot Issues** *(Top 10 by engagement)*

| # | Title & Summary | Why It Matters | Community Reaction |
|---|------------------|----------------|--------------------|
| [#24916](https://github.com/google-gemini/gemini-cli/issues/24916) | **Permission Loop Bug**: CLI repeatedly prompts for access to the same file despite “allow for all future sessions” selection. | Breaks workflow efficiency; suggests a regression in persistent permission caching. | 3 comments, 0 👍 – User-facing blocker. |
| [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) | **Shell Command Hang**: After executing commands like `ls`, CLI shows "Waiting input" even though execution completes. | Impacts automation and interactive use; points to flawed I/O state management. | 2 comments, 2 👍 – High frustration reported. |
| [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) | **AST-Aware Tooling EPIC**: Explores using Abstract Syntax Tree data to improve file reads, search, and code mapping accuracy. | Could significantly reduce token noise and misaligned edits in large repos. | 5 comments, 1 👍 – Strategic long-term investment. |
| [#22267](https://github.com/google-gemini/gemini-cli/issues/22267) | **Browser Agent Ignores Settings**: `settings.json` overrides (e.g., `maxTurns`) are ignored by Browser Agent. | Undermines configuration control and predictability. | 2 comments, 0 👍 – Configuration integrity concern. |
| [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) | **False Success Status**: Subagent hits `MAX_TURNS` but reports `GOAL` success, masking interruption. | Misleads users about task completion status. | 2 comments, 2 👍 – Critical UX flaw. |
| [#23571](https://github.com/google-gemini/gemini-cli/issues/23571) | **Scattered Temp Scripts**: Model creates temporary shell scripts across random directories. | Causes workspace pollution and cleanup overhead. | 2 comments, 0 👍 – Operational inefficiency. |
| [#22819](https://github.com/google-gemini/gemini-cli/issues/22819) | **Memory Routing Design**: Proposal to distinguish global vs. project-specific memory storage. | Enables better personalization and context isolation. | 1 comment, 2 👍 – Well-received architectural improvement. |
| [#22809](https://github.com/google-gemini/gemini-cli/issues/22809) | **Proactive Memory Writes**: Suggests tuning main agent prompt to encourage saving user preferences via memory tool. | Reduces repetitive corrections and improves consistency. | 1 comment, 1 👍 – Improves agent adaptability. |
| [#24202](https://github.com/google-gemini/gemini-cli/issues/24202) | **SSH Text Corruption**: After SSH login, terminal text becomes scrambled and unusable. | Blocks remote development workflows on Linux-to-Windows SSH. | 1 comment, 0 👍 – Platform-specific rendering bug. |
| [#25216](https://github.com/google-gemini/gemini-cli/issues/25216) | **EISDIR Error on Windows**: `realpath('A:\a')` fails due to directory named `GEMINI.md`. | Prevents CLI launch in certain Windows environments. | 1 comment, 0 👍 – Filesystem edge case on Windows. |

---

### **Key PR Progress** *(Top 10 Updates)*

| # | PR Summary | Impact |
|---|------------|--------|
| [#25670](https://github.com/google-gemini/gemini-cli/pull/25670) | Fixes duplicate `initialize()` call during agent reloads, preventing unnecessary reloading. | Improves performance and avoids race conditions in config refresh. |
| [#25663](https://github.com/google-gemini/gemini-cli/pull/25663) | Adds hostname to footer status bar for multi-session clarity (especially over SSH). | Enhances UX in distributed or containerized environments. |
| [#25662](https://github.com/google-gemini/gemini-cli/pull/25662) | Silently skips directory-named `GEMINI.md` files instead of crashing with `EISDIR`. | Resolves launch failure in projects with oddly named folders. |
| [#25660](https://github.com/google-gemini/gemini-cli/pull/25660) | Adds `delete` as alias for `/extensions uninstall`. | Lowers friction for new users unfamiliar with CLI conventions. |
| [#25657](https://github.com/google-gemini/gemini-cli/pull/25657) | Introduces `/restart` command that resumes chat after self-update. | Solves a known pain point (#16124): seamless post-update experience. |
| [#25163](https://github.com/google-gemini/gemini-cli/pull/25163) | Prevents infinite restart loop when IDE trust ≠ CLI trust on first launch. | Stabilizes onboarding for hybrid development setups. |
| [#25653](https://github.com/google-gemini/gemini-cli/pull/25653) | Ensures extension examples are copied to `dist/` during build. | Fixes `gemini extensions new` failures in installed packages. |
| [#24760](https://github.com/google-gemini/gemini-cli/pull/24760) | Replaces `execSync` with safer `execFileSync` in release scripts. | Hardens security posture against shell injection risks. |
| [#25453](https://github.com/google-gemini/gemini-cli/pull/25453) | Corrects broken API key validation logic that disabled key checks. | Restores critical security guardrail. |
| [#24973](https://github.com/google-gemini/gemini-cli/pull/24973) | Fixes Windows CI test failures due to missing POSIX mocks. | Improves cross-platform test reliability. |

---

### **Feature Request Trends**

Developers are increasingly requesting:
- **Enhanced Agent Intelligence**: More proactive memory usage, better tool selection, and contextual awareness (e.g., #22809, #22819).
- **Robustness in Edge Cases**: Handling of malformed paths (`EISDIR`), SSH sessions, and concurrent operations (#24202, #25216).
- **Configuration Reliability**: Ensuring settings (like `maxTurns`) are respected across agents (#22267).
- **Developer Experience**: Slash commands (`/restart`), clearer status indicators (hostname in footer), and smoother updates (#25663, #25657).

Long-term strategic directions include **AST-aware tooling** for precise code navigation and **behavioral evaluation frameworks** for testing agent reliability (#22745, #24353).

---

### **Developer Pain Points**

Recurring frustrations include:
- **Permission Management**: Repeated prompts despite prior approval (#24916).
- **Shell Execution Hangs**: CLI gets stuck waiting after command completion (#25166).
- **Misleading Feedback**: Agents reporting success after hitting turn limits (#22323).
- **Platform-Specific Bugs**: Text scrambling over SSH on Windows (#24202), path handling errors on Windows (#25216).
- **Extension & Update Friction**: Extension installation failures, broken rollback states (#25654), update-induced restarts (#25657).

These issues highlight gaps in state management, error signaling, and cross-platform consistency—areas where incremental fixes are yielding high user impact.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

**GitHub Copilot CLI Community Digest – April 20, 2026**

---

### 1. **Today's Highlights**

No new releases were published in the last 24 hours. However, multiple high-impact issues highlight growing concerns around model visibility, rate limiting behavior, and session stability—particularly for enterprise and Pro+ users. The community is actively calling for better transparency in usage tracking and improved error handling during network or quota constraints.

---

### 2. **Releases**

*None in the past 24 hours.*

---

### 3. **Hot Issues**

1. **[#1703](https://github.com/github/copilot-cli/issues/1703)** – *Copilot CLI fails to list org-enabled models (e.g., Gemini 3.1 Pro)*  
   Users report a discrepancy between VS Code Copilot and CLI regarding available models despite identical org settings. This undermines trust in cross-platform consistency. 👍 34

2. **[#2725](https://github.com/github/copilot-cli/issues/2725)** – *Model picker hides “Extra High” effort level for GPT-5.4 even though it still works*  
   UI inconsistency creates confusion when actual functionality exceeds displayed options. Community seeks alignment between picker and runtime capabilities. 👍 18

3. **[#2336](https://github.com/github/copilot-cli/issues/2336)** – *Strange rate limit message on moderate workloads*  
   Unexpected 429 errors occur without clear justification, suggesting flawed threshold logic or telemetry mismatch. 👍 6

4. **[#1897](https://github.com/github/copilot-cli/issues/1897)** – *“You are not authorized” despite enabled Copilot Pro + org policy*  
   Recurring auth failures frustrate enterprise users; appears tied to stale session state or policy sync delays. Updated today. 👍 1

5. **[#2078](https://github.com/github/copilot-cli/issues/2078)** – *Request: Add `/btw` slash command*  
   Popular demand for lightweight conversational cues like “by the way” to enhance natural interaction flow. 👍 26

6. **[#2421](https://github.com/github/copilot-cli/issues/2421)** – *HTTP/2 GOAWAY race condition causes cascading retries & wasted premium tokens*  
   Critical networking bug consolidating 5 prior reports. Undici HTTP/2 pool mishandles server-initiated stream termination, leading to silent overuse of paid quotas. 👍 16

7. **[#2760](https://github.com/github/copilot-cli/issues/2760)** – *Aggressive retry on 429 without backoff*  
   Immediate reconnection after rate limits triggers repeated throttling loops. Needs exponential backoff or jitter. 👍 2

8. **[#2797](https://github.com/github/copilot-cli/issues/2797)** – *Random negative usage percentages post-limit*  
   Usage display becomes unreliable once premium quota is exceeded, harming user confidence in billing and remaining balance. 👍 0

9. **[#2742](https://github.com/github/copilot-cli/issues/2742)** – *Persistent global 429 on active Pro+ account*  
   Critical outage-like experience lasting hours across all interfaces. Rebooting doesn’t resolve, indicating backend-side enforcement anomaly. 👍 0

10. **[#2840](https://github.com/github/copilot-cli/issues/2840)** – *Rate-limit aborts subagents, forcing main agent takeover*  
   Subagent spawning breaks under load, reducing efficiency and increasing latency for complex tasks. 👍 1

---

### 4. **Key PR Progress**

*No pull requests updated in the last 24 hours.*

---

### 5. **Feature Request Trends**

- **Enhanced Rate Limit UX**: Multiple users want real-time, granular visibility into both per-minute and weekly limits (e.g., progress bars, reset timers). See #[2827](https://github.com/github/copilot-cli/issues/2827), #[2828](https://github.com/github/copilot-cli/issues/2828).
- **Slash Command Expansion**: Requests for `/btw`, `/note`, and other conversational affordances to reduce typing overhead.
- **Customization & Accessibility**: Support for custom color themes and better terminal rendering in remote sessions (SSH/MobaXterm) highlighted in #[2830](https://github.com/github/copilot-cli/issues/2830), #[2841](https://github.com/github/copilot-cli/issues/2841).
- **Session Management Improvements**: Better session summaries, inferred behavioral postures, and cleanup of orphaned state folders requested in several issues.
- **MCP & Plugin Path Configuration**: Need for CLI-managed paths to custom skills/prompts/agents to support workflow automation (#[2829](https://github.com/github/copilot-cli/issues/2829)).

---

### 6. **Developer Pain Points**

- **Inconsistent Model Visibility**: Org-level model availability isn’t reflected in CLI despite being active in VS Code.
- **Unreliable Session State**: Frequent “session token expired” errors disrupt long-running autonomous workflows.
- **Poor Rate Limit Diagnostics**: Ambiguous messages and erratic usage displays make troubleshooting quotas difficult.
- **Network Resilience Deficits**: Race conditions in HTTP/2 handling lead to silent token waste and failed retries.
- **Authentication Flakiness**: Repeated “not authorized” errors despite valid credentials and enabled licenses.

These patterns suggest urgent need for backend telemetry alignment, clearer client-side signaling, and proactive quota communication.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

**Kimi Code CLI Community Digest – April 20, 2026**

---

### 1. **Today's Highlights**  
The Kimi Code CLI team released a fix for MCP config propagation to subagents (PR #1942), resolving a critical gap in toolchain integration. Concurrently, a new `work_dir` override mechanism was introduced for subagent dispatch (PR #1933), directly addressing workflow breakage in git worktrees (#1931). No new releases were published in the last 24 hours.

---

### 2. **Releases**  
*No new releases in the past 24 hours.*

---

### 3. **Hot Issues**  

| # | Title & Summary | Why It Matters | Reaction |
|---|------------------|----------------|----------|
| [1903](https://github.com/MoonshotAI/kimi-cli/issues/1903) | Error code: 400 on macOS with kimi-for-coding model | Indicates potential API/auth regression affecting local users; recurring across versions | 0 👍, 6 comments |
| [1939](https://github.com/MoonshotAI/kimi-cli/issues/1939) | ACP protocol mismatch: command + args format broken | Breaks agentic workflows relying on structured input parsing | Fresh issue, 2 comments |
| [1931](https://github.com/MoonshotAI/kimi-cli/issues/1931) | Subagents ignore parent’s working directory changes | Disrupts complex dev environments like git worktrees and monorepos | High relevance; led to targeted PR #1933 |
| [1927](https://github.com/MoonshotAI/kimi-cli/issues/1927) | Subagent infinite loop reading same file | Performance killer; suggests race condition or state leakage in subagent lifecycle | Urgent bug report |
| [1873](https://github.com/MoonshotAI/kimi-cli/issues/1873) | Install without admin rights on Windows | Enterprise adoption barrier due to restricted deployment policies | Persistent request since April 14 |
| [1936](https://github.com/MoonshotAI/kimi-cli/issues/1936) | Shell tool ignores overridden `work_dir` in subagents | Shows partial fix incompleteness despite PR #1933 landing | Points to remaining edge case |
| [1940](https://github.com/MoonshotAI/kimi-cli/issues/1940) | Auth failures when using VSCode/Cursor extension | Impacts IDE-integrated workflows; unclear if client-side or server issue | New, no responses yet |
| [1938](https://github.com/MoonshotAI/kimi-cli/issues/1938) | Request push notifications from Kimi-CLI-Web | Enhances mobile usability but lacks native notification support | Feature request with clear use case |

---

### 4. **Key PR Progress**  

| # | Title & Summary | Impact |
|---|------------------|--------|
| [1942](https://github.com/MoonshotAI/kimi-cli/pull/1942) | Fixes MCP configs not propagating to subagents; resumes sessions correctly | Critical for tool-aware agents using external MCP services |
| [1933](https://github.com/MoonshotAI/kimi-cli/pull/1933) | Adds `work_dir` override parameter to Agent tool | Resolves #1931 — enables proper directory isolation in nested agents |
| [1549](https://github.com/MoonshotAI/kimi-cli/pull/1549) | Introduces configurable compaction models for context management | Improves memory efficiency and cost control in long-running chats |
| [1935](https://github.com/MoonshotAI/kimi-cli/pull/1935) | Supports `updatedInput` in PreToolUse hooks for transparent rewriting | Extends hook system flexibility for custom command preprocessing |

---

### 5. **Feature Request Trends**  

- **Non-intrusive installation**: Multiple requests (e.g., #1873) emphasize need for user-space install options on locked-down systems.
- **Enhanced notification capabilities**: Users want real-time alerts from CLI/Web interfaces, especially for mobile collaboration (#1938).
- **Improved subagent context inheritance**: Beyond working directory, expectations around environment variables and session state persist.
- **ACP protocol robustness**: Stability and clarity around command/arg formatting remain fragile points in agentic interactions.

---

### 6. **Developer Pain Points**  

- **Subagent isolation flaws**: Working directory and MCP config leaks break complex automation pipelines.
- **Authentication instability**: Intermittent 400 errors and IDE-specific auth drops suggest inconsistent session handling.
- **Installation friction**: Lack of per-user install support limits enterprise and personal usage scenarios.
- **Hook system gaps**: While expanding, the hook API still lacks granular control over certain tool behaviors (e.g., Shell cwd).

--- 

*Generated by Kimi Code CLI Community Digest Bot • Data source: github.com/MoonshotAI/kimi-cli*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

**OpenCode Community Digest – April 20, 2026**

---

### **1. Today's Highlights**
The OpenCode team restored critical file search functionality with the v1.14.18 release, fixing a regression in native ripgrep backend support. A major performance issue thread (#20695) continues to draw significant attention, with over 60 comments and 36 upvotes as users seek memory optimization strategies. Several UI and provider integration fixes landed in recent commits, including better Azure OpenAI compatibility and improved terminal notification handling.

---

### **2. Releases**
**v1.14.18**: Restored native ripgrep backend for reliable file search and listing.  
**v1.14.17**: Preserved executable permissions during Docker builds; fixed unnecessary plugin reinstalls; defaulted Anthropic Bedrock Opus 4.7 to `display: summarized`; enhanced attachment type detection from file contents (e.g., images/PDFs).

> *Thank you to @ariane-emory for documenting the `--dangerously-skip-permissions` flag.*

---

### **3. Hot Issues**

| Issue | Summary | Impact |
|------|--------|--------|
| [#20695](https://github.com/anomalyco/opencode/issues/20695) | Centralized thread for diagnosing widespread memory leaks during long sessions. Users requested heap snapshot guidance. | 60 comments, 36 👍 — High engagement indicates systemic performance concerns. |
| [#8501](https://github.com/anomalyco/opencode/issues/8501) | Request to expand truncated pasted text (e.g., `[Pasted ~1 lines]`) inline instead of collapsing it. | 141 👍 — Strong user desire for richer context editing without losing prompt space. |
| [#7030](https://github.com/anomalyco/opencode/issues/7030) | Ollama + qwen2.5-coder tool calls appear successful but don’t modify files. | 18 👍 — Breaks core edit/write workflows for a popular local model combo. |
| [#22630](https://github.com/anomalyco/opencode/issues/22630) | OpenCode Desktop v1.4.6 shows blank window on macOS Tahoe (26.4). | Critical UX blocker for macOS beta users. |
| [#22444](https://github.com/anomalyco/opencode/issues/22444) | All Azure OpenAI models broken post-update. | Enterprise users impacted; urgent fix needed for cloud deployments. |
| [#23045](https://github.com/anomalyco/opencode/issues/23045) | MCP tools bypass agent permission filters despite deny rules. | Security/policy enforcement gap in multi-agent setups. |
| [#11532](https://github.com/anomalyco/opencode/issues/11532) | `/new` doesn’t reload `AGENTS.md`, breaking agent consistency. | Workflow friction for session resumption. |
| [#16367](https://github.com/anomalyco/opencode/issues/16367) | Remote attach hangs if any permission is set to "ask". | Blocks remote collaboration entirely under cautious configs. |
| [#12805](https://github.com/anomalyco/opencode/issues/12805) | Health check endpoint requires auth even when password-protected server enabled. | Inconsistent security behavior; violates standard practice. |
| [#11831](https://github.com/anomalyco/opencode/issues/11831) | Proposal for YOLO mode to auto-approve all permission prompts. | 20 👍 — Power-user demand for uninterrupted automation. |

---

### **4. Key PR Progress**

| PR | Summary |
|----|--------|
| [#23447](https://github.com/anomalyco/opencode/pull/23447) | Replaced `osascript` desktop notifications with OSC escape sequences for proper macOS focus handling. |
| [#23456](https://github.com/anomalyco/opencode/pull/23456) | Added global config/rules editor UI, addressing long-standing feature request #14614. |
| [#23439](https://github.com/anomalyco/opencode/pull/23439) | Fixed `--continue` hang in directories with no prior sessions. |
| [#23335](https://github.com/anomalyco/opencode/pull/23335) | Removed hardcoded DeepSeek/GLM blocklist from reasoning model variants. |
| [#12050](https://github.com/anomalyco/opencode/pull/12050) | Aligned plugin tool types with built-in tool capabilities (attachments, context). |
| [#17401](https://github.com/anomalyco/opencode/pull/17401) | Enabled PDF support in Amazon Bedrock tool results. |
| [#23441](https://github.com/anomalyco/opencode/pull/23441) | Clarified docs that `prompt` field supports multiple file references. |
| [#23451](https://github.com/anomalyco/opencode/pull/23451) | Added `x-session-affinity` header for Fireworks AI caching. |
| [#6370](https://github.com/anomalyco/opencode/pull/6370) | Enabled primary clipboard copy on Linux Wayland/X11 for middle-click paste. |
| [#21722](https://github.com/anomalyco/opencode/pull/21722) | Major UX overhaul aiming to close design gaps with competitor tools. |

---

### **5. Feature Request Trends**
- **Enhanced paste handling**: Expanding collapsed pasted text (#8501) and improving image/text paste reliability across terminals.
- **Provider integrations**: Kimi K2.6 support (#22408), NVIDIA models visibility (#22927).
- **Permission workflow simplification**: YOLO mode to skip all approval prompts (#11831); clearer documentation on mixing instructions with file refs (#20356).
- **UI/UX polish**: Sound alerts on task completion (#23184), mobile touch optimization (#18767), global config editing (#23456).
- **Terminal & notification fidelity**: Native OSC notifications (#23447), integrated PTY usage (#23449).

---

### **6. Developer Pain Points**
- **Memory bloat in long-running sessions** remains the top concern (#20695), with users struggling to diagnose leaks.
- **Versioning instability**: Frequent jumps (e.g., 1.4.x → 1.14.x in #23419) cause confusion and breakage.
- **Cross-platform inconsistencies**: Windows ARM64 TUI init fails (#19130), WSL glob tool WebAssembly errors (#22862), installer PATH issues (#13403).
- **Temporary file accumulation** after extended use drains disk space silently (#13479).
- **Provider-specific regressions**: Azure OpenAI, LM Studio first-prompt double-processing, and Bedrock PDF limitations reveal fragile abstraction layers.

--- 

*Generated by OpenCode Technical Analyst – Data sourced from anomalyco/opencode*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

**Pi Community Digest – April 20, 2026**

---

### 1. Today's Highlights  
The Pi team addressed critical tool-calling reliability issues, including corrupted conversation states after aborted tool calls and schema validation errors in Google Cloud Code Assist integrations. Several provider-specific enhancements were merged, such as AWS GovCloud Bedrock support and dynamic model listing for local LLM providers. A new feature allowing custom thinking levels per model was proposed and welcomed by the community.

---

### 2. Releases  
No new releases published in the last 24 hours.

---

### 3. Hot Issues  

| # | Title | Why It Matters | Reaction |
|---|-------|----------------|----------|
| [3214](https://github.com/badlogic/pi-mono/issues/3214) | Cloud Code Assist API rejects tool params with schema meta-declarations | Breaks MCP tool compatibility with Claude via Google’s proxy; affects jcodemunch tools | 11 comments, closed after fix |
| [2070](https://github.com/badlogic/pi-mono/issues/2070) | Numpad keys not recognized (e.g., `/`, `*`) | Impairs keyboard input on numeric keypads | 10 comments, closed |
| [3344](https://github.com/badlogic/pi-mono/issues/3344) | Aborted tool calls corrupt conversation state | Makes sessions unusable post-interruption | 7 comments, closed |
| [3208](https://github.com/badlogic/pi-mono/issues/3208) | Feature: Custom Thinking Levels per Model | Enables finer control over model reasoning modes (e.g., deep vs fast) | 👍6, open for implementation |
| [534](https://github.com/badlogic/pi-mono/issues/534) | Config folder violates XDG spec on Linux | Poor UX for Linux users expecting standard config locations | 👍11, closed |
| [3359](https://github.com/badlogic/pi-mono/issues/3359) | AWS GovCloud Bedrock model validation fails | Blocks access to government cloud AI services | 3 comments, closed |
| [3411](https://github.com/badlogic/pi-mono/issues/3411) | Claude models fail on `anyOf`/`const` in tool schemas via Antigravity | Same root cause as #3214 but surfaced again | 2 comments, closed |
| [3429](https://github.com/badlogic/pi-mono/issues/3429) | Images silently dropped for non-vision models | Loss of context when using multimodal inputs with text-only models | 👍1, closed |
| [3406](https://github.com/badlogic/pi-mono/issues/3406) | Scroll jumps to top on terminal resize (Windows) | Disrupts workflow during window management | 2 comments, closed |
| [3380](https://github.com/badlogic/pi-mono/issues/3380) | Software cursor visible in unfocused panes | Confusing UI when running Pi alongside other tools in tmux | 2 comments, closed |

---

### 4. Key PR Progress  

| # | Summary | Impact |
|---|---------|--------|
| [3412](https://github.com/badlogic/pi-mono/pull/3412) | Strip JSON schema meta fields for Cloud Code Assist | Fixes #3214 cleanly with minimal change |
| [3410](https://github.com/badlogic/pi-mono/pull/3410) | Sanitize tool schemas for Claude via Antigravity | Prevents 400 errors from unsupported schema keywords |
| [3400](https://github.com/badlogic/pi-mono/pull/3400) | Conditionally omit `maxTokens` in Bedrock requests | Avoids unnecessary token quota consumption |
| [3402](https://github.com/badlogic/pi-mono/pull/3402) | Pass `model.baseUrl` to BedrockRuntimeClient | Enables custom endpoints (VPC, proxies) |
| [3403](https://github.com/badlogic/pi-mono/pull/3403) | Add `--agents-file` CLI override | Supports multiple project context presets |
| [3408](https://github.com/badlogic/pi-mono/pull/3408) | “Remember for session” in Safe Guard prompts | Reduces repetitive confirmations |
| [3374](https://github.com/badlogic/pi-mono/pull/3374) | Browser-safe `/share` shortcuts | Prevents conflicts with common editor bindings |
| [3377](https://github.com/badlogic/pi-mono/pull/3377) | Detect Windows pnpm installs under `.pnpm` store | Fixes broken install instructions |
| [3409](https://github.com/badlogic/pi-mono/pull/3409) | Make OAuth callback host configurable | Solves SSH/headless login issues |
| [3421](https://github.com/badlogic/pi-mono/pull/3421) | Replace stale OpenRouter test model | Stabilizes CI tests |

---

### 5. Feature Request Trends  

- **Provider Extensibility**: Multiple requests for dynamic model discovery (ollama, LM Studio), custom OAuth bind hosts, and OpenRouter attribution headers.
- **UI/UX Flexibility**: Requests to customize working spinners, disable sticky headers, and improve focus-aware cursor behavior.
- **Tool & Session Management**: Support for named sessions, fork/duplicate sessions, and external-editor redraw optimization.
- **Schema & Compatibility**: Better handling of JSON Schema constructs (`anyOf`, `$schema`) across providers, especially for MCP tools.

---

### 6. Developer Pain Points  

- **Tool Call Reliability**: Frequent crashes or silent failures during tool execution—especially after interruptions or schema mismatches—are the most reported instability issues.
- **Cross-Platform Consistency**: Keyboard input (numpad), terminal resizing, and config directory placement vary unexpectedly across OSes.
- **Provider Fragmentation**: Each cloud or local LLM provider requires ad-hoc fixes for authentication, endpoint configuration, and schema validation.
- **Session State Corruption**: Interrupted interactions often leave sessions in broken states requiring restart.
- **Lack of Fine-Grained Control**: Limited customization of UI elements and default behaviors frustrates power users seeking tailored workflows.

--- 

*Data sourced from [badlogic/pi-mono](https://github.com/badlogic/pi-mono) as of 2026-04-20.*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

**Qwen Code Community Digest — 2026-04-20**

---

### 1. **Today’s Highlights**
A new nightly build (v0.14.5-nightly.20260420) introduces ACP hook support and UX optimizations for compact mode. Meanwhile, a surge in authentication-related bugs—particularly “401 invalid access token” errors—indicates growing instability around OAuth-to-API-key transitions and session persistence.

---

### 2. **Releases**
- **v0.14.5-nightly.20260420**  
  Added complete hooks support for ACP integration; optimized compact mode UX with improved shortcuts, settings sync, and safety controls.  
  [Release Link](https://github.com/QwenLM/qwen-code/releases/tag/v0.14.5-nightly.20260420)

---

### 3. **Hot Issues**

| # | Summary | Why It Matters | Community Reaction |
|---|--------|----------------|--------------------|
| [#3203](https://github.com/QwenLM/qwen-code/issues/3203) | Proposal to reduce Qwen OAuth free tier from 1k → 100 req/day and phase out free tier by Aug 2026 | Major policy shift affecting all free users; may disrupt workflows for developers relying on free quota | 102 comments, no upvotes yet—high discussion but low engagement |
| [#3427](https://github.com/QwenLM/qwen-code/issues/3427) | After login, persistent "Internal error: 401 invalid access token or token expired" | Indicates broken token validation logic post-login—critical UX blocker | 👍1, 4 comments |
| [#2786](https://github.com/QwenLM/qwen-code/issues/2786) | Agent ignores urgent user interruptions during chain-of-thought processing | Blocks real-time feedback in agentic coding flows | 👍1, 2 comments |
| [#2251](https://github.com/QwenLM/qwen-code/issues/2251) | VSCode extension fails after OAuth with `Connection error` or malformed message objects | Suggests auth handshake mismatch between CLI and IDE companion | 2 comments |
| [#3205](https://github.com/QwenLM/qwen-code/issues/3205) | VSCode plugin fails to trigger hooks while CLI succeeds | Highlights platform-specific implementation gaps | Closed but unresolved core issue |
| [#2134](https://github.com/QwenLM/qwen-code/issues/2134) | Request: Support API Key & Coding Plan auth in VSCode (like CLI) | Widens adoption among enterprise/API-key users | 👍1, 1 comment |
| [#3282](https://github.com/QwenLM/qwen-code/issues/3282) | MiniMax-2.7 model crashes during context compression due to token counting bug | Prevents use of popular third-party models | 1 comment |
| [#3447](https://github.com/QwenLM/qwen-code/issues/3447) | Context window fills without auto-compression, causing slowdowns | Degrades performance in long-running agent sessions | New, urgent workflow blocker |
| [#3444](https://github.com/QwenLM/qwen-code/issues/3444) | Feature: Allow disabling slash commands via config/env vars | Needed for multi-tenant/sandboxed deployments | New admin-control request |
| [#3398](https://github.com/QwenLM/qwen-code/issues/3398) *(PR)* | Replacing deprecated OAuth with Coding Plan/API Key flow in VSCode | Aligns IDE auth with modern API monetization strategy | Active PR addressing auth fragmentation |

> **Note**: Over 20+ open issues reference “401 invalid access token”—a systemic authentication regression.

---

### 4. **Key PR Progress**

| # | Summary | Impact |
|---|--------|--------|
| [#3292](https://github.com/QwenLM/qwen-code/pull/3292) | CLI session rewind & restore flows | Enables non-destructive history navigation |
| [#3448](https://github.com/QwenLM/qwen-code/pull/3448) | `--bare` startup mode for CI/scripted use | Improves reliability in automated environments |
| [#3451](https://github.com/QwenLM/qwen-code/pull/3451) | Normalize Windows PATH for MCP stdio servers | Fixes external tool launch failures on Windows |
| [#3398](https://github.com/QwenLM/qwen-code/pull/3398) | Replace OAuth with Coding Plan/API Key in VSCode | Addresses deprecation and expands auth options |
| [#3450](https://github.com/QwenLM/qwen-code/pull/3450) | Preserve stream message ordering in VSCode companion | Critical for timeline consistency during split responses |
| [#2593](https://github.com/QwenLM/qwen-code/pull/2593) | `/insight` command support in VSCode | Brings terminal feature to IDE UX |
| [#2592](https://github.com/QwenLM/qwen-code/pull/2592) | `/export` session command in VSCode | Enables IDE-native session sharing |
| [#2548](https://github.com/QwenLM/qwen-code/pull/2548) | Secondary picker for `/skills` in VSCode | Smoother skill selection UX |
| [#3214](https://github.com/QwenLM/qwen-code/pull/3214) | Replace fdir crawler with git+ripgrep fallback | Fixes slow autocomplete on large repos |
| [#860](https://github.com/QwenLM/qwen-code/pull/860) | Fix WriteFile crash on object content | Stabilizes file operations |

---

### 5. **Feature Request Trends**

- **Authentication Modernization**: Unified support for Coding Plan API keys and custom API keys across CLI and VSCode (see #2134, #3398).
- **Agent Interactivity**: Real-time interruption of agent reasoning chains (#2786).
- **Context Management**: Auto-compression on window overflow and reliable manual triggers (#3447).
- **Admin Controls**: Granular disabling of slash commands per deployment (#3444).
- **Multi-Modal Support**: PDF reading and Jupyter notebook parsing beyond text-only models (#3160).

---

### 6. **Developer Pain Points**

- **Authentication Instability**: Massive spike in 401 errors suggests broken token refresh or session migration logic after switching from OAuth to paid plans.
- **Platform Fragmentation**: CLI and VSCode handle auth differently—OAuth-only in IDE, richer options in CLI—creating inconsistency.
- **Agent Responsiveness**: Long-running agent thoughts block user input, breaking interactive debugging.
- **Third-Party Model Support**: Models like MiniMax-2.7 fail silently due to internal token counting bugs.
- **Performance Degradation**: No automatic context compression leads to sluggish behavior in extended conversations.

--- 

*Prepared by Technical Analyst — AI Developer Tools*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/DenisZheng/agents-radar).*