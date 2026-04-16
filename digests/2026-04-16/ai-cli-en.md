# AI CLI Tools Community Digest 2026-04-16

> Generated: 2026-04-16 08:28 UTC | Tools covered: 8

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

**Cross-Tool AI CLI Ecosystem Analysis – April 16, 2026**

---

### **Ecosystem Overview**
The AI developer CLI landscape is rapidly converging around agentic workflows and MCP integration, with tools increasingly competing on UX polish, stability, and enterprise-grade reliability. While Claude Code leads in open-source adoption and multi-account support demand, OpenAI Codex drives momentum in goal-driven autonomous modes, and Kimi Code gains traction with reasoning transparency. Meanwhile, niche players like Pi and Qwen Code focus on specialized tooling and cost control, reflecting divergent strategies in an otherwise homogenizing market.

---

### **Activity Comparison**

| Tool               | Issues (Top 10) | PRs (Active) | Release Status         |
|--------------------|------------------|--------------|------------------------|
| **Claude Code**    | 10               | 5            | v2.1.110 (stable)      |
| **OpenAI Codex**   | 10               | 10           | rust-v0.121.0 + alpha  |
| **Gemini CLI**     | 10               | 10           | v0.38.1 (patch)        |
| **Copilot CLI**    | 10               | 5            | v1.0.28 (stable)       |
| **Kimi Code**      | 10               | 10           | v1.35.0 (stable)       |
| **OpenCode**       | 10               | 10           | No new release         |
| **Pi**             | 10               | 10           | v0.67.3 (stable)       |
| **Qwen Code**      | 10               | 10           | v0.14.5 (stable)       |

*Note: All tools show consistent issue/PR volume (~10 each), indicating mature, active communities.*

---

### **Shared Feature Directions**

- **MCP Integration & Tool Reliability**: All tools prioritize robust Model Context Protocol support—especially error handling (#43713, #18088, #25511) and session persistence during failures.
- **Thinking/Reasoning Transparency**: Visible reasoning streams are critical; both Kimi Code (#1865) and OpenCode users demand restored "thinking process" visibility post-updates.
- **Session State Integrity**: `/clear` reset semantics (#25500), plan state corruption, and orphaned temp scripts (#23571) plague multiple tools, signaling universal need for better session isolation.
- **Cost & Quota Visibility**: Token inflation (#46917), quota confusion (#3288, #3296), and billing opacity drive requests for real-time usage dashboards across platforms.
- **Cross-Platform Consistency**: VS Code vs CLI mismatches (skill triggering, tab completion) and Windows path bugs indicate fragmented UX expectations.

---

### **Differentiation Analysis**

| Tool          | Core Focus                          | Target Users                | Technical Distinctions                     |
|---------------|-------------------------------------|-----------------------------|--------------------------------------------|
| **Claude Code** | Open-source agentic dev, multi-account | Individual devs, teams      | TUI-first, strong sandboxing, LSP diagnostics |
| **Codex**       | Goal-driven autonomy, plugin ecosystems | Enterprise/Business users   | Alpha-rich roadmap, marketplace plugins    |
| **Kimi Code**   | Reasoning visibility, cross-platform | Developers valuing transparency | Unified `/setting`, thinking stream defaults |
| **Pi**          | Extension/plugin ecosystem, cloud-native | Tool builders, SaaS devs    | `renderShell: "self"`, prompt caching headers |
| **Qwen Code**   | Cost-controlled access, localization | Emerging markets, budget users | Aggressive free-tier changes, i18n focus |

*Copilot CLI and Gemini CLI lean toward Microsoft/Googl e integrations respectively but face similar pain points around stability and auth clarity.*

---

### **Community Momentum & Maturity**

- **Most Active Iteration**: **OpenAI Codex** pushes frequent alphas (goal mode at 5/5 stages) and plugin migrations, signaling rapid experimentation.
- **Highest Engagement**: **Claude Code’s** multi-account issue has 348 👍 and 60 comments—strong product-market fit for team use cases.
- **Stability Concerns**: **Claude Code (macOS crashes)**, **OpenCode (TUI crashes)**, and **Pi (orphaned processes)** reveal maturity gaps despite active development.
- **Enterprise Readiness**: **Pi** and **Codex** lead in cloud-native patterns (validation fallbacks, signal handling), while others lag in production-grade resilience.

---

### **Trend Signals**

1. **Agentic Workflow Standardization**: Goal tracking, interruptibility (`interrupt()` API in Pi), and session resumption are becoming de facto requirements.
2. **Cost as a Differentiator**: Unpredictable token use (Codex, Claude) and opaque quotas (Qwen) erode trust—expect built-in budgeting and per-model caps to rise.
3. **Security > Flexibility**: Sandbox bypasses (#43713), unapproved remote auth commands (#22191), and validation holes (#3112) push stricter execution controls.
4. **Local-First Resurgence**: Self-hosted providers (Ollama hang in OpenCode) and offline-capable tooling gain relevance amid cloud dependency complaints.
5. **MCP Becomes Mandatory**: Tools without deep MCP hooks (e.g., Copilot CLI’s limited CIMD support) risk falling behind in extensibility.

> **Strategic Insight**: The next 6 months will likely see consolidation around tools offering transparent reasoning, reliable MCP tooling, and granular cost control—with underperformers facing user attrition unless they address stability and trust gaps.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

**Claude Code Skills Community Highlights Report**  
*Data as of 2026-04-16*

---

### 1. **Top Skills Ranking**

The following Skills represent the most actively discussed community contributions, ranked by engagement (comments/👍 reactions):

1. **[skill-quality-analyzer & skill-security-analyzer](https://github.com/anthropics/skills/pull/83)**  
   *Functionality:* Meta-skills for auditing Claude Skills across structure, documentation, security, and performance. Evaluates SKILL.md quality, example completeness, and vulnerability patterns.  
   *Discussion Highlights:* Praised as foundational infrastructure for Skill maintainability; called a “must-have” for enterprise adoption.  
   *Status:* Open (since Nov 2025)

2. **[SAP-RPT-1-OSS Predictor Skill](https://github.com/anthropics/skills/pull/181)**  
   *Functionality:* Enables predictive analytics on SAP business data using SAP’s open-source tabular foundation model (Apache 2.0).  
   *Discussion Highlights:* Seen as critical for enterprise AI integration; requests added support for hybrid cloud deployments.  
   *Status:* Open (since Dec 2025)

3. **[record-knowledge Skill](https://github.com/anthropics/skills/pull/521)**  
   *Functionality:* Persists knowledge across sessions via tagged Markdown entries in `.claude/knowledge/`, solving context loss between chats.  
   *Discussion Highlights:* Widely requested for long-term agent memory; users report it as “game-changing” for iterative workflows.  
   *Status:* Open (since Mar 2026)

4. **[frontend-design Skill Improvements](https://github.com/anthropics/skills/pull/210)**  
   *Functionality:* Refined guidance for React/Vue component design, accessibility, and responsive layouts with actionable prompts.  
   *Discussion Highlights:* Requested clearer error-handling examples and TypeScript integration.  
   *Status:* Open (since Jan 2026)

5. **[masonry-generate-image-and-videos Skill](https://github.com/anthropics/skills/pull/335)**  
   *Functionality:* Generates images/videos via Masonry CLI using Imagen 3.0 and Veo 3.1 under the hood.  
   *Discussion Highlights:* High interest in cost controls and batch processing features.  
   *Status:* Open (since Feb 2026)

6. **[shodh-memory Skill](https://github.com/anthropics/skills/pull/154)**  
   *Functionality:* Persistent context system using vector-backed memory storage for cross-session agent continuity.  
   *Discussion Highlights:* Comparable to LangChain-style memory but native to Claude Code.  
   *Status:* Open (since Dec 2025)

7. **[testing-patterns Skill](https://github.com/anthropics/skills/pull/723)**  
   *Functionality:* Covers full testing stack: AAA pattern, Testing Library, Cypress, Jest, and test-driven development flows.  
   *Discussion Highlights:* Requested real-world bug-reproduction templates and CI/CD hooks.  
   *Status:* Open (since Mar 2026)

8. **[ODT/OpenDocument Support Skill](https://github.com/anthropics/skills/pull/486)**  
   *Functionality:* Creates, fills, parses, and converts .odt/.ods files with LibreOffice compatibility.  
   *Discussion Highlights:* Valued for open-standard document interoperability in government/academic sectors.  
   *Status:* Open (since Mar 2026)

---

### 2. **Community Demand Trends**

From active Issues, emerging demand clusters include:

- **Persistent Agent Memory**: Multiple users request cross-session knowledge retention (Issue #62, PR #521, PR #154).
- **Enterprise Integration**: Need for SSO-friendly tools (Issue #532) and org-wide skill sharing (Issue #228).
- **Document Format Interoperability**: Requests for ODT, DOCX integrity fixes (PR #541), and PDF/HTML conversion robustness.
- **Security Auditing**: Growing concern over trust boundaries in community skills (Issue #492); drives meta-audit tools like PR #83.
- **Workflow Automation**: Micropayment (PR #374) and macOS automation (PR #806) reflect push toward agentic autonomy.

---

### 3. **High-Potential Pending Skills**

Actively developed Skills nearing consensus:

- **[skill-quality-analyzer](https://github.com/anthropics/skills/pull/83)** – Already has strong support; likely to merge as core governance tool.
- **[record-knowledge](https://github.com/anthropics/skills/pull/521)** – Frequently cited as urgent; minimal friction expected.
- **[testing-patterns](https://github.com/anthropics/skills/pull/723)** – Comprehensive scope aligns with rising devops focus.
- **[SAP-RPT-1-OSS](https://github.com/anthropics/skills/pull/181)** – Enterprise traction suggests fast-track approval.

All four have >4 comments and active maintainer attention as of mid-April.

---

### 4. **Skills Ecosystem Insight**

The community’s strongest concentration is around **building reliable, persistent, and governable AI agents**, driven by demand for cross-session memory, skill auditability, and enterprise-grade integration—signaling a shift from utility-focused Skills toward full agent infrastructure.

---

**Claude Code Community Digest – April 16, 2026**

---

### **Today's Highlights**
The latest release (v2.1.110) introduces a new `/tui` command for flicker-free terminal rendering and refines transcript focus with `/focus`. Meanwhile, community momentum builds around multi-account support (#18435), with strong user demand (348 👍). A spike in macOS desktop crashes post-update signals urgent stability concerns.

---

### **Releases**
**v2.1.110**  
- Added `/tui` command and `tui` setting — run `/tui fullscreen` for improved terminal UI rendering  
- Changed `Ctrl+O` to toggle between normal/verbose transcripts only; added separate `/focus` command for view control  
- [Release Notes](https://github.com/anthropics/claude-code/releases/tag/v2.1.110)

---

### **Hot Issues**

1. **[#18435] Multi-Account Support in Desktop App**  
   *Why it matters:* Users need seamless switching between Claude accounts without re-login or context loss. High engagement (60 comments, 348 👍) indicates strong product-market fit.  
   → [Link](https://github.com/anthropics/claude-code/issues/18435)

2. **[#46917] Cache Token Inflation on v2.1.100+**  
   *Why it matters:* Sudden ~20K token increase per request breaks cost predictability, especially for enterprise users. Server-side routing suspected. Active bug report with reproduction steps.  
   → [Link](https://github.com/anthropics/claude-code/issues/46917)

3. **[#48281] macOS Desktop Crashes After Update**  
   *Why it matters:* Multiple reports of app crashes within seconds of launch suggest regression or memory issue. Low 👍 count but urgent for Mac users.  
   → [Link](https://github.com/anthropics/claude-code/issues/48281)

4. **[#43713] Sandbox Bypass via Shell Expansions**  
   *Why it matters:* Security-sensitive environments are affected by bypassed `autoAllowBashIfSandboxed`, allowing unhandled expansions like `source .venv/bin/activate`.  
   → [Link](https://github.com/anthropics/claude-code/issues/43713)

5. **[#17979] LSP Diagnostics Show Stale Data**  
   *Why it matters:* Rust-analyzer and other slow LSPs cause confusion when diagnostics lag behind file changes, breaking developer trust in real-time feedback.  
   → [Link](https://github.com/anthropics/claude-code/issues/17979)

6. **[#48280] Sleep ≥2s Blocked Unconditionally**  
   *Why it matters:* Legitimate heartbeat/polling patterns broken by blanket `sleep N` blocking, limiting agentic workflows.  
   → [Link](https://github.com/anthropics/claude-code/issues/48280)

7. **[#46144] First-Command `sleep` Blocking**  
   *Why it matters:* Workarounds needed for simple delays in agent scripts; impacts automation reliability.  
   → [Link](https://github.com/anthropics/claude-code/issues/46144)

8. **[#48992] `--break-system-packages` Allowed in Auto Mode**  
   *Why it matters:* Safety risk: auto-installers can bypass pip restrictions, potentially corrupting system Python.  
   → [Link](https://github.com/anthropics/claude-code/issues/48992)

9. **[#41973] MCP Agent Tool Lists Empty Agents**  
   *Why it matters:* Breaks core MCP functionality when running as server; affects plugin ecosystems.  
   → [Link](https://github.com/anthropics/claude-code/issues/41973)

10. **[#47625] `add-dir` Fails in Vertex API Mode**  
    *Why it matters:* Critical CLI command broken under Vertex AI integration, blocking cloud-native workflows.  
    → [Link](https://github.com/anthropics/claude-code/issues/47625)

---

### **Key PR Progress**

1. **[#48335] Fix Write Tool Content Handling**  
   Support `new_text` field for Write tool payloads, aligning with Edit tool behavior.  
   → [Link](https://github.com/anthropics/claude-code/pull/48335)

2. **[#39148] Preserve-Session Plugin**  
   Path-independent session history via UUID-based tracking — survives renames/moves.  
   → [Link](https://github.com/anthropics/claude-code/pull/39148)

3. **[#48714] Proposal Scraper Stop Hook Example**  
   New example for persisting proposal blocks during session interruptions.  
   → [Link](https://github.com/anthropics/claude-code/pull/48714)

4. **[#41447] Open Source Announcement PR**  
   Formalizes public transition to open source with multiple linked issues.  
   → [Link](https://github.com/anthropics/claude-code/pull/41447)

5. **[#48624] iOS Widget Integration**  
   Experimental iOS widget support for Claude Code.  
   → [Link](https://github.com/anthropics/claude-code/pull/48624)

*(Note: Remaining PRs lack detailed summaries or are closed/invalid.)*

---

### **Feature Request Trends**

- **Multi-Account & Profile Management**: Dominant request across desktop and IDE integrations.
- **TUI/UX Enhancements**: Improved focus modes, status message customization (`/focus`, disable thinking indicators).
- **Recursive Skill Discovery**: Organizing skills in subdirectories remains unresolved.
- **MCP & Plugin UX**: Custom icons, better tool injection visibility.
- **Session State Persistence**: Recap messages, renamed conversation highlighting.

---

### **Developer Pain Points**

1. **Stability on macOS**: Repeated crashes after updates disrupt workflow continuity.
2. **Cost Control**: Unexpected cache token inflation undermines budgeting.
3. **Sandbox Security Gaps**: Overly restrictive bash permissions block legitimate ops.
4. **LSP Feedback Latency**: Stale diagnostics erode confidence in real-time analysis.
5. **Agentic Workflow Limits**: Blanket `sleep` blocking kills polling/heartbeat patterns.
6. **Plugin Visibility**: Desktop app fails to detect plugin commands, unlike CLI.

--- 

*Prepared by Claude Code Technical Analyst Digest Bot*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

**OpenAI Codex Community Digest – April 16, 2026**

---

### **Today's Highlights**
OpenAI released **Codex rust-v0.121.0**, introducing marketplace plugin installation from GitHub, Git URLs, local directories, and `marketplace.json` endpoints (#17087, #17717, #17756), alongside TUI prompt history enhancements with `Ctrl+R` reverse search. A major issue around rapid token consumption (#14593) continues to draw strong community attention (544 comments, +223), highlighting ongoing concerns about cost-efficiency in long-running sessions.

---

### **Releases**
- **rust-v0.121.0**: Added support for installing plugin marketplaces via GitHub repos, Git URLs, local paths, or direct `marketplace.json` links; improved TUI prompt history with `Ctrl+R` reverse search and local recall.
- **rust-v0.122.0-alpha.1** & **v0.121.0-alpha.14/13**: Alpha releases with incremental updates.

---

### **Hot Issues**
1. **[#14593] Burning tokens very fast** – Users report excessive token usage during extended interactions, especially in Business-tier plans on VS Code. High engagement (544 comments, +223) signals urgency around rate-limit and cost controls.
2. **[#2109] Event Hooks** – Closed but highly upvoted (+526), this feature enables scripting around Codex behaviors via pattern-matching hooks—now under active development.
3. **[#12564] Rename task/thread titles** – Requested to improve navigation in complex workflows; modest traction (+47) but aligns with usability improvements.
4. **[#16850] CPU spikes during diff rendering** – Post-Codex file edits cause high CPU load and “open-in-target not supported” errors in VS Code, affecting Linux users.
5. **[#16402] Sandbox write regression on Linux (v0.118.0)** – Regression breaks sandbox functionality after upgrade; 13 comments indicate lingering impact despite fixes.
6. **[#8628] Auth confusion: “Upgrade to Plus” despite having it** – CLI incorrectly denies access even when subscription confirms Plus status—persistent auth inconsistency.
7. **[#2916] OpenAI service tier support** – Users want granular control over API tiers for cost/latency optimization; strong interest (+36).
8. **[#17880] Cloudflare CAPTCHA triggers false rate limits** – Web session-based auth loses chat history and hits rate limits due to unresolved CAPTCHAs—critical for Plus users.
9. **[#12324] Thread name in /statusline** – Enhances multi-tab terminal usability; useful for distinguishing parallel workflows (+11).
10. **[#18051] MCP hook request** – User seeks deeper integration with Model Context Protocol hooks, previously available only in Cursor.

---

### **Key PR Progress**
1. **[#18077] Goal mode TUI UX (5/5)** – Finalizes `/goal` command experience, status indicators, and snapshot handling for autonomous goal-driven workflows.
2. **[#18076] Goal mode core runtime (4/5)** – Implements continuation prompts, token accounting, budget enforcement, and interrupt/pause logic.
3. **[#18075] Goal mode model tools (3/5)** – Adds `get_goal`/`set_goal` tools enabling model-aware goal state management.
4. **[#18074] Goal mode app-server API (2/5)** – Exposes goal persistence and notifications via RPC layer.
5. **[#18073] Goal mode state foundation (1/5)** – Bootstraps feature flagging and thread-level goal storage.
6. **[#18055] External agent plugin migration** – Streamlines migration for configured marketplace plugins post-update.
7. **[#18054] Fix duplicate context statusline item** – Resolves UI clutter by removing redundant `context-remaining-percent`.
8. **[#18059] Fix invalid TUI resume hints** – Prevents premature resume suggestions before thread ID persistence.
9. **[#18057] Prefill rename prompt with thread name** – Improves UX by auto-populating `/rename` with current thread title.
10. **[#18088] MCP stdio transport executor (5/8)** – Introduces process-backed stdio communication for external MCP tools.

---

### **Feature Request Trends**
- **Enhanced TUI Experience**: Customizable status lines (#17827), thread naming (#12564, #12324), and better prompt history (`Ctrl+R`) are top requests.
- **Sandbox & Security Controls**: External approval reviewers (#17997), SSH key compatibility on Windows (#12226), and sandbox write reliability dominate.
- **MCP Integration**: Demand for richer MCP hooks and tooling support reflects broader AI agent interoperability needs.
- **Goal-Driven Workflows**: Autonomous goal tracking, resumption, and model-controlled goal updates are emerging as a strategic direction.

---

### **Developer Pain Points**
- **Token Overconsumption**: Rapid token burn in long sessions remains unresolved, especially for Business/Pro users.
- **Auth & Rate Limit Confusion**: Inconsistent messaging between CLI, web UI, and desktop app leads to blocked workflows.
- **Sandbox Instability**: Write failures on Linux (especially Ubuntu 25.10) and SSH key mismatches on Windows disrupt secure execution.
- **UI Performance**: Diff rendering spikes CPU usage in VS Code; thread disappearance suggests sync/cache flaws.
- **Missing Granular Controls**: Lack of service tier selection and external reviewer integration limits enterprise adoption.

--- 

*Generated by OpenAI Codex Technical Analyst | Data source: github.com/openai/codex*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

### Gemini CLI Community Digest – 2026-04-16

---

#### **Today's Highlights**  
The Gemini CLI team released **v0.38.1**, a patch addressing stability concerns from v0.38.0. Concurrently, several high-priority issues emerged around capacity management (429 errors), voice UX compliance warnings, and session state corruption after `/clear`. A wave of maintainer-only workstreams focuses on agent memory routing, AST-aware tooling, and ACP startup resilience.

---

#### **Releases**  
- **v0.38.1**: Patch release resolving instability introduced in v0.38.0 via cherry-picked fix (#25466).  
  [Full Changelog](https://github.com/google-gemini/gemini-cli/compare/v0.38.0...v0.38.1)

---

#### **Hot Issues**  

1. **[#24937] Capacity & 429 Error Tracking**  
   Centralized tracker for recurring "Too Many Requests" errors impacting reliability. Maintainers are coordinating retry logic improvements. *(20 comments)*  
   https://github.com/google-gemini/gemini-cli/issues/24937

2. **[#25323] RipGrep Download Failures Slow Startup**  
   Poor UX: 2+ minute hangs when GitHub is unreachable. Users request fail-fast behavior or bundled binaries. *(6 comments)*  
   https://github.com/google-gemini/gemini-cli/issues/25323

3. **[#25491] Voice Privacy Compliance Warning**  
   Enterprise users need clear UX signaling when voice data hits cloud endpoints—critical for compliance workflows. *(1 comment)*  
   https://github.com/google-gemini/gemini-cli/issues/25491

4. **[#25500] `/clear` Fails to Reset Plan State**  
   Session-scoped planning artifacts persist post-clear, breaking true conversation reset semantics. *(1 comment)*  
   https://github.com/google-gemini/gemini-cli/issues/25500

5. **[#25216] Temporary Path Handling Bug (`A:\`) on Windows**  
   `EISDIR` error during launch suggests flawed temp directory resolution on certain locales. *(1 comment)*  
   https://github.com/google-gemini/gemini-cli/issues/25216

6. **[#23571] Model Creates Orphaned Temp Scripts**  
   Agent generates scattered shell scripts without cleanup discipline, cluttering workspaces. *(1 👍)*  
   https://github.com/google-gemini/gemini-cli/issues/23571

7. **[#22819] Global vs Project Memory Routing Needed**  
   Ambiguous memory scope causes user preferences or project context to leak across sessions. Proposed separation into `~/.gemini/` and `.gemini/`. *(2 👍)*  
   https://github.com/google-gemini/gemini-cli/issues/22819

8. **[#22745] AST-Aware Codebase Navigation Investigation**  
   Evaluating whether syntax trees can reduce token noise and improve precision in file reads/search. *(5 comments, 1 👍)*  
   https://github.com/google-gemini/gemini-cli/issues/22745

9. **[#25166] Shell Command Hangs After Completion**  
   UI shows “Waiting input” even after command finishes—likely a process lifecycle bug. *(2 👍)*  
   https://github.com/google-gemini/gemini-cli/issues/25166

10. **[#24916] Permission Prompts Repeat Indefinitely**  
   File access dialogues don’t persist “allow always” choices, forcing repeated confirmations. *(3 comments)*  
    https://github.com/google-gemini/gemini-cli/issues/24916

---

#### **Key PR Progress**  

1. **[#25515] Fix `/clear` Plan Session Reset**  
   Resolves #25500 by rebinding storage and plan pointers to new session ID.  
   https://github.com/google-gemini/gemini-cli/pull/25515

2. **[#25514] Handle Malformed `projects.json` at ACP Startup**  
   Gracefully recovers from empty/corrupted project registry data instead of crashing.  
   https://github.com/google-gemini/gemini-cli/pull/25514

3. **[#25519] Improve Voice Model Selection UX**  
   Adds privacy notice for cloud transcription + instant dialog close on selection. Addresses #25491/#25492.  
   https://github.com/google-gemini/gemini-cli/pull/25519

4. **[#25426] Revive CI Bundling for 16-Core Test Speed**  
   Introduces artifact-centric pipeline to parallelize test shards across machines.  
   https://github.com/google-gemini/gemini-cli/pull/25426

5. **[#24736] Union-Find Context Compaction**  
   New clustering strategy for `AgentHistoryProvider` to optimize long-context retention.  
   https://github.com/google-gemini/gemini-cli/pull/24736

6. **[#25190] RAG Defense Sandbox**  
   Filters malicious injections in retrieval-augmented generation contexts via validation layer.  
   https://github.com/google-gemini/gemini-cli/pull/25190

7. **[#25511] OAuth Resource Prefix Validation**  
   Supports sub-path MCP servers (e.g., Zendesk) via relaxed URL matching. Fixes #25508.  
   https://github.com/google-gemini/gemini-cli/pull/25511

8. **[#25349] Enhance Grep-Code Prompts & File Detection**  
   Expands supported config files (.gitignore, .claude.vim, etc.) and improves search heuristics.  
   https://github.com/google-gemini/gemini-cli/pull/25349

9. **[#24973] Fix Windows SEA Permission Mocks**  
   Stabilizes CI on Windows runners by mocking POSIX permissions correctly.  
   https://github.com/google-gemini/gemini-cli/pull/24973

10. **[#22748] Auto-Detect pnpm Global Path (macOS/Windows)**  
   Improves installer robustness by detecting non-standard pnpm install locations.  
   https://github.com/google-gemini/gemini-cli/pull/22748

---

#### **Feature Request Trends**  
- **Voice UX Transparency**: Clear consent flows for cloud-based speech processing (#25491).  
- **Memory Isolation**: Distinguish global user prefs from project-specific context (#22819).  
- **AST-Powered Tools**: Leverage syntax trees to minimize token waste in code navigation (#22745).  
- **Session Integrity**: Ensure `/clear`, tool calls, and planning state fully reset (#25500, #25166).  
- **Enterprise Compliance**: Audit trails and permission persistence for regulated environments (#24916).

---

#### **Developer Pain Points**  
- **Capacity Limits**: Frequent 429s disrupt workflows; lack of proactive throttling feedback (#24937).  
- **Startup Reliability**: Network-dependent downloads (RipGrep) cause long delays or hangs (#25323).  
- **UI/UX Inconsistencies**: Voice model selection requires double-keypress; permission prompts repeat (#25492, #24916).  
- **State Corruption**: Mismanaged session IDs lead to stale planning artifacts post-`/clear` (#25500).  
- **Cross-Platform Bugs**: Path handling fails on Windows temp drives (`A:\`); SSH sessions break rendering (#25216, #24202).

--- 

*Generated by Gemini CLI Community Digest · Data source: github.com/google-gemini/gemini-cli*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

**GitHub Copilot CLI Community Digest – April 16, 2026**

---

### **Today's Highlights**

The latest release (v1.0.28) improves UX in submodules and reduces redundant agent notifications. However, rate-limiting issues remain a top concern, with multiple reports of abrupt throttling and misleading retry timers. The community is increasingly focused on customizability, model control, and stability in fleet/agent workflows.

---

### **Releases**

**v1.0.28** – Released April 16, 2026  
- Fixes incorrect repository path display in permission prompts when working within git submodules.  
- Prevents duplicate background completion notifications when `read_agent` is already waiting.  
- Updates MCP migration hint to link to platform-specific documentation.

> [Release Notes](https://github.com/github/copilot-cli/releases/tag/v1.0.28)

---

### **Hot Issues**

1. **[#618](https://github.com/github/copilot-cli/issues/618)** – *Custom Slash Commands from `.github/prompts/`*  
   Top-requested feature: support local prompt files as slash commands (like VS Code). Already has 95 👍.  
   *Why it matters:* Enables team-wide prompt standardization and reuse.

2. **[#2336](https://github.com/github/copilot-cli/issues/2336)** – *Strange Rate Limit Message*  
   Users report vague "rate limit" errors without actionable recovery info. Updated today; low engagement.  
   *Why it matters:* Obscure error messages hinder debugging and user trust.

3. **[#978](https://github.com/github/copilot-cli/issues/978)** – *Skills Not Used Unless Explicitly Stated*  
   Agents ignore pre-defined skills unless directly invoked—undermining modular workflow design.  
   *Why it matters:* Breaks composability of agent-based development.

4. **[#1477](https://github.com/github/copilot-cli/issues/1477)** – *"Continuing autonomously (3 premium requests)" After Model Completion*  
   Confusing messaging around paid usage post-free-tier exhaustion. Upvote count: 14.  
   *Why it matters:* Poor transparency around billing triggers.

5. **[#92](https://github.com/github/copilot-cli/issues/92)** – */ask Mode Request*  
   Users want a non-interventionist query mode that doesn’t auto-edit or run commands.  
   *Why it matters:* Critical for exploratory Q&A without side effects.

6. **[#732](https://github.com/github/copilot-cli/issues/732)** – *Auto-Approve Terminal Commands*  
   Request to auto-execute safe shell commands (e.g., `grep`) without confirmation. 18 upvotes.  
   *Why it matters:* Accelerates CI/CD and scripting workflows.

7. **[#2712](https://github.com/github/copilot-cli/issues/2712)** – *MS Legal Liability for Self-Rate-Limiting*  
   Raises concerns about unilateral service throttling without user consent.  
   *Why it matters:* Highlights governance and fairness in AI tooling.

8. **[#2696](https://github.com/github/copilot-cli/issues/2696)** – *Rate Limit Retry in 58 Hours!*  
   Extreme wait time suggests flawed backoff logic.  
   *Why it matters:* Unusable during extended sessions.

9. **[#2725](https://github.com/github/copilot-cli/issues/2725)** – *Model Picker Hides xHigh for GPT-5.4*  
   UI inconsistency where “xHigh” reasoning option is missing despite functional support.  
   *Why it matters:* Reduces model flexibility and discoverability.

10. **[#1305](https://github.com/github/copilot-cli/issues/1305)** – *Support CIMD for Remote OAuth MCP Servers*  
    Extension of MCP OAuth support via CIMD standard. 18 upvotes.  
    *Why it matters:* Expands integration capabilities for enterprise toolchains.

---

### **Key PR Progress**

1. **[#2565](https://github.com/github/copilot-cli/pull/2565)** – Guard against duplicate PATH entries on reinstall  
   Prevents shell profile bloat during repeated installs.

2. **[#2587](https://github.com/github/copilot-cli/pull/2587)** – Add automated issue classification with GitHub Agentic Workflows  
   Uses AI to auto-label new issues (`area:`, `triage`). Improves triage efficiency.

3. **[#1617](https://github.com/github/copilot-cli/pull/1617)** – Move `gradio/` to `examples/` + add migration script  
   Better repo organization and developer onboarding.

4. **[#2713](https://github.com/github/copilot-cli/pull/2713)** – Create blank.yml (closed as invalid)  
   Example of low-value contribution filtered out.

5. **[#2069](https://github.com/github/copilot-cli/pull/2069)** – Add devcontainer.json  
   Supports reproducible dev environments (now closed).

*(Note: Several other PRs were marked `[invalid]` and auto-closed.)*

---

### **Feature Request Trends**

- **Custom Slash Commands**: Strong demand for local prompt file support (Issue #618).
- **Non-Interactive / Ask Mode**: Need for read-only LLM interaction (Issue #92).
- **Auto-Approval Controls**: Users want granular control over command execution (Issue #732).
- **MCP & External Tool Integration**: Expansion beyond built-in tools (e.g., Issue #1305).
- **Context Window Monitoring**: Visual indicators for token/context usage (linked to #2342, #2266).

---

### **Developer Pain Points**

- **Unclear Rate Limiting**: Frequent, opaque throttling with long waits (Issues #2336, #2696, #2741).
- **Agent/Skill Invisibility**: Skills and agents not auto-triggered, requiring manual invocation.
- **Poor Headless Server Stability**: File descriptor leaks in macOS headless mode (#2389, #2707).
- **UI/UX Fragmentation**: Discrepancies between actual capabilities and picker options (e.g., missing xHigh).
- **Lack of Customization**: No support for custom prompt symbols, status lines, or themes (#2329, #2266).

--- 

*Generated by GitHub Copilot CLI Community Digest Bot – Powered by GitHub Data*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

Here's the Kimi Code CLI community digest for **2026-04-16**, distilled from recent GitHub activity:

---

### 1. Today's Highlights
The Kimi CLI team released version **1.35.0**, flipping the default `show_thinking_stream` to `true` for better reasoning visibility and fixing a critical Web UI deadlock on MCP connection failures. A key user pain point—the disappearance of the "thinking process" in both CLI and VS Code—is trending with growing frustration, prompting urgent attention.

---

### 2. Releases
**v1.35.0** (released 2026-04-15)  
- ✅ Default `show_thinking_stream = true` — fresh installs now stream reasoning by default  
- 🛠️ Web: Prevent session busy deadlock when workers crash or prompts fail  
- 📝 Docs: Fixed misplaced changelog entries for v1.34.0  
🔗 [Release Notes](https://github.com/MoonshotAI/kimi-cli/releases/tag/v1.35.0)

---

### 3. Hot Issues

| Issue | Summary | Impact |
|------|--------|--------|
| [#1865](https://github.com/MoonshotAI/kimi-cli/issues/1865) | Users report **thinking process missing** after recent update—felt as downgrade | 🔥 High engagement (11 comments, 👍3), major UX regression |
| [#1903](https://github.com/MoonshotAI/kimi-cli/issues/1903) | Error code 400 on `kimi-for-coding` model | ⚠️ Blocks coding workflow on macOS |
| [#1905](https://github.com/MoonshotAI/kimi-cli/issues/1905) | `/login OAuth wait cannot be cancelled with Esc` | 🐞 Frustrates auth flow; no workaround |
| [#1902](https://github.com/MoonshotAI/kimi-cli/issues/1902) | VS Code skill selection triggers immediate send (inconsistent with CLI) | 💬 UX inconsistency across platforms |
| [#1897](https://github.com/MoonshotAI/kimi-cli/issues/1897) | Web UI hangs indefinitely if MCP server fails | 🔌 Critical stability issue for tool integration |
| [#1894](https://github.com/MoonshotAI/kimi-cli/issues/1894) | No support for nested `.agents/skills/*/skills/` structure (unlike Codex) | 🧩 Limits skill reusability in monorepos |
| [#1891](https://github.com/MoonshotAI/kimi-cli/issues/1891) | Request unified `/setting` command to centralize config | ⚙️ Improves usability vs scattered `/mode`, `/editor`, etc. |
| [#1895](https://github.com/MoonshotAI/kimi-cli/issues/1895) | Add `ErrorCode` field to `ToolReturnValue` for better error classification | 🛠️ Enhances observability for custom tools |
| [#1882](https://github.com/MoonshotAI/kimi-cli/issues/1882) | Want WriteFile to request permission before execution | 🔐 Safety concern during long-running operations |
| [#1560](https://github.com/MoonshotAI/kimi-cli/issues/1560) | Tab completion in VS Code should stay in input mode after skill select | ⌨️ Inconsistent with CLI behavior |

---

### 4. Key PR Progress

| PR | Description |
|----|-------------|
| [#1906](https://github.com/MoonshotAI/kimi-cli/pull/1906) | ✅ Fixes un-cancellable OAuth wait in `/login` (addresses #1905) |
| [#1890](https://github.com/MoonshotAI/kimi-cli/pull/1890) | ✅ Clears stale prompts on error to prevent Web UI deadlock |
| [#1900](https://github.com/MoonshotAI/kimi-cli/pull/1900) | ✅ Flips `show_thinking_stream` default to `true` |
| [#1892](https://github.com/MoonshotAI/kimi-cli/pull/1892) | 🟢 Adds unified `/setting` TUI panel for all config options |
| [#1896](https://github.com/MoonshotAI/kimi-cli/pull/1896) | 🟢 Honors `http_proxy` env vars via `aiohttp trust_env=True` |
| [#1893](https://github.com/MoonshotAI/kimi-cli/pull/1893) | 🟢 Fixes non-UTF-8 filename handling in Git on Windows |
| [#1876](https://github.com/MoonshotAI/kimi-cli/pull/1876) | 🟢 Registers `/btw` as global slash command |
| [#1798](https://github.com/MoonshotAI/kimi-cli/pull/1798) | 🟢 Integrates telemetry tracking across modes |
| [#1767](https://github.com/MoonshotAI/kimi-cli/pull/1767) | ✅ Added YOLO mode toggle to Web UI |
| [#884](https://github.com/MoonshotAI/kimi-cli/pull/884) | 🟢 Bumped ruff to 0.15.0 (linting improvement) |

> *Note: Closed PRs marked ✅; Open PRs marked 🟢*

---

### 5. Feature Request Trends

- **Unified Configuration Experience**: Multiple requests for a single `/setting` command to replace fragmented configs (`/mode`, `/editor`, etc.)—highly requested (#1891).
- **Improved Tool Reliability & Observability**: 
  - Add structured error codes to tool outputs (#1895)
  - Support recursive/nested skill directories like Codex does (#1894)
  - Pre-approval prompts for file writes during uncertain durations (#1882)
- **Cross-Platform Consistency**: Align VS Code plugin behavior with CLI (e.g., skill selection not auto-triggering sends) (#1902, #1560).
- **Better Reasoning Transparency**: Restore and enhance visible thinking streams—currently perceived as degraded post-v1.33.

---

### 6. Developer Pain Points

- **Thinking Stream Regression**: After v1.33+, users note the reasoning trace is missing or collapsed—felt as a step backward despite claimed optimizations.
- **MCP Server Instability**: Failed MCP connections cause Web UI to freeze completely—no graceful degradation or timeout.
- **Authentication UX Gaps**: Non-cancellable OAuth waits block shell workflows; lack of feedback increases friction.
- **Inconsistent Tool Loading**: Nested skills (common in agentic repos) aren’t discovered by Kimi CLI but work in Codex.
- **Proxy Environment Blindness**: HTTP proxy settings ignored unless manually configured—problematic in corporate networks.

--- 

Let me know if you'd like deeper analysis on any section!

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

**OpenCode Community Digest – April 16, 2026**

---

### 1. Today's Highlights  
The community saw significant progress on authentication reliability with the closure of issue #8030 addressing Copilot quota overconsumption, alongside critical fixes for plugin installation failures behind proxies (#21098) and Windows Git binary detection (#21826). Several performance and stability improvements landed via recent PRs, including non-blocking VCS initialization and restored native ripgrep backend support.

---

### 2. Releases  
No new releases in the last 24 hours.

---

### 3. Hot Issues  

| Issue | Summary | Why It Matters | Reactions |
|------|--------|----------------|-----------|
| [#8030](https://github.com/anomalyco/opencode/issues/8030) ✅ | Copilot auth incorrectly counts agent-initiated requests as premium, depleting quotas rapidly | Major cost and UX concern for paid users; impacts billing accuracy | 220 comments, 79 👍 |
| [#21098](https://github.com/anomalyco/opencode/issues/21098) 🔴 | Plugin install fails behind corporate proxy due to malformed `fetch()` call | Blocks enterprise adoption where proxies are mandatory | 25 comments, 20 👍 |
| [#21826](https://github.com/anomalyco/opencode/issues/21826) 🔴 | Windows plugin installs fail with “No git binary found” even when Git is installed | Hinders cross-platform plugin ecosystem growth | 6 comments |
| [#22191](https://github.com/anomalyco/opencode/issues/22191) 🔴 | `auth login` auto-runs remote `.well-known/auth.command` without confirmation | Security risk: potential command injection from untrusted endpoints | 7 comments, 2 👍 |
| [#22644](https://github.com/anomalyco/opencode/issues/22644) 🔴 | Qwen models removed from Go subscription despite documentation claims | Breaks user expectations and trust in model availability | 5 comments, 7 👍 |
| [#22132](https://github.com/anomalyco/opencode/issues/22132) 🔴 | OpenCode hangs with local Ollama provider despite working `/v1/chat/completions` | Limits self-hosted LLM usability | 5 comments, 2 👍 |
| [#15617](https://github.com/anomalyco/opencode/issues/15617) 🔴 | Request: inline skill invocation via `$skill-name` syntax anywhere in prompt | Enhances composability and reduces verbosity in complex workflows | 6 comments, 6 👍 |
| [#22408](https://github.com/anomalyco/opencode/issues/22408) 🔴 | Request: integrate Kimi K2.6 model into Go plans | Expands access to cutting-edge reasoning capabilities | 5 comments, 12 👍 |
| [#22683](https://github.com/anomalyco/opencode/issues/22683) 🔴 | OpenCode 1.4.6 TUI crashes constantly after update | Critical regression affecting daily workflow | 4 comments |
| [#18024](https://github.com/anomalyco/opencode/issues/18024) 🔴 | Desktop UI shows blank white screen despite CLI functioning normally | Broken out-of-the-box experience on desktop | 4 comments |

---

### 4. Key PR Progress  

| PR | Summary | Impact |
|----|--------|--------|
| [#22772](https://github.com/anomalyco/opencode/pull/22772) ✅ | Restores `.gitignore` logic for config dirs and migrates to shared Npm service | Prevents accidental commits of node_modules; improves maintainability |
| [#22771](https://github.com/anomalyco/opencode/pull/22771) ✅ | Makes VCS init non-blocking via forked git resolution | Improves startup performance by decoupling branch detection |
| [#22770](https://github.com/anomalyco/opencode/pull/22770) 🔴 | Converts bin script to ESM and fixes local search path | Resolves `require is not defined` errors in CLI wrapper |
| [#22773](https://github.com/anomalyco/opencode/pull/22773) 🔴 | Restores native ripgrep backend with config isolation | Fixes slow/failing file searches caused by embedded WASM fallback |
| [#22581](https://github.com/anomalyco/opencode/pull/22581) 🔴 | Guards Anthropic thinking budgetTokens against zero output limits | Prevents API validation errors on custom providers without explicit caps |
| [#13854](https://github.com/anomalyco/opencode/pull/13854) 🔴 | Stops streaming markdown/code prematurely in TUI after message completion | Fixes display truncation in opentui for final tool outputs |
| [#13645](https://github.com/anomalyco/opencode/pull/13645) ✅ | Prevents crash when opening files instead of directories | Stabilizes project loading edge cases |
| [#13619](https://github.com/anomalyco/opencode/pull/13619) ✅ | Sanitizes tool JSON schemas for Claude API compatibility | Enables use of advanced thinking models like `claude-opus-4-6-thinking` |
| [#21308](https://github.com/anomalyco/opencode/pull/21308) ✅ | Moves auto-accept permissions control to Settings UI | Reduces friction during first-time setup |
| [#18767](https://github.com/anomalyco/opencode/pull/18767) 🔴 | Adds mobile touch optimization while preserving desktop UX | Prepares for broader accessibility across form factors |

---

### 5. Feature Request Trends  

- **Model Expansion**: Strong demand for newer reasoning models (Kimi K2.6, MiniMax-M2.7 display support).
- **Inline Skill Syntax**: Users want `$skill-name` syntax beyond prompt-start restrictions.
- **Config Persistence**: Requests for remembering default font size, zoom level, and session defaults.
- **Message Summarization Control**: Desire to disable automatic per-message summarization calls.
- **BMAD Workflow Integration**: Need for structured product development tooling within OpenCode ecosystem.

---

### 6. Developer Pain Points  

- **Proxy & Network Barriers**: Corporate environments block plugin installs due to proxy misconfiguration.
- **Windows-Specific Tooling Gaps**: Git detection issues and path separator mismatches break expected behavior.
- **Authentication Trust Model**: Auto-execution of remote auth commands lacks user confirmation.
- **Model Access Inconsistencies**: Documentation lists models not actually available in subscriptions.
- **UI Instability**: Recent versions (e.g., 1.4.6) exhibit frequent crashes and rendering failures.
- **Local LLM Integration Hurdles**: Self-hosted providers like Ollama suffer from hanging or silent failures.

--- 

*Prepared by Technical Analyst – AI Developer Tools Watchdog*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

### **Pi Community Digest – 2024-04-16**

---

#### **Today's Highlights**
The release of **v0.67.3** introduces a major UI customization feature allowing tool renderers to use `renderShell: "self"` for full control over their outer shell—ideal for stable large previews like edit diffs. This addresses long-standing UX friction around embedded tool outputs. Meanwhile, critical stability fixes target session corruption from malformed tool calls and prompt caching regressions in OpenAI-compatible proxies.

---

#### **Releases**
- **v0.67.3**: Introduced `renderShell: "self"` for custom/built-in tool renderers, enabling tools to own their outer shell instead of default boxed rendering—useful for persistent large previews (e.g., edit diffs). See [docs/extensions.md#custom-rendering](https://github.com/badlogic/pi-mono/blob/main/docs/extensions.md#custom-rendering).

---

#### **Hot Issues** *(Top 10 by engagement)*

| # | Issue | Summary & Impact |
|--|------|------------------|
| **#3112** | 🔓 Tool arguments not validated in Cloudflare Workers | Validation bypass in `validateToolArguments` allows unsafe LLM-sent data into tool execution—critical security gap in serverless deployments. ([Link](https://github.com/badlogic/pi-mono/issues/3112)) |
| **#3108** | ✅ Session becomes unrecoverable when model returns empty tool name | Malformed tool calls with empty `name` fields permanently corrupt session history, causing all subsequent requests to fail. High severity. ([Link](https://github.com/badlogic/pi-mono/issues/3108)) |
| **#3214** | 🔓 Cloud code assist API rejects due to schema meta-declarations | MCP tools including `$schema` trigger 400 errors with Google Cloud Code Assist + Anthropic models—breaking IDE integrations. ([Link](https://github.com/badlogic/pi-mono/issues/3214)) |
| **#3196** | 🚧 Prompt caching broken for OpenAI-compatible proxies | Cache headers missing for non-OpenAI providers using `openai-responses` path, leading to infinite cache misses. ([Link](https://github.com/badlogic/pi-mono/issues/3196)) |
| **#3057** | ✅ Detached bash child processes leak as orphans | Closing terminal spawns orphaned `bash` processes that accumulate RAM (~90GB observed), indicating poor signal handling. ([Link](https://github.com/badlogic/pi-mono/issues/3057)) |
| **#3212** | ✅ `session_shutdown` doesn’t fire on SIGHUP/SIGTERM | Extensions relying on cleanup hooks silently lose work during SSH disconnects or `kill` commands—contradicts documented behavior. ([Link](https://github.com/badlogic/pi-mono/issues/3212)) |
| **#3022** | ❓ Gemma4:31b-cloud multimodal can't 'see' images | Multimodal capability broken despite correct config; likely provider-side limitation or missing content-type headers. ([Link](https://github.com/badlogic/pi-mono/issues/3022)) |
| **#3167** | ✅ Pasting multiline text inserts CSI-u escape sequences | Terminal escape codes replace newlines when pasting from scrollback—severely degrades usability in tmux workflows. ([Link](https://github.com/badlogic/pi-mono/issues/3167)) |
| **#3005** | 💬 Make "UPDATE AVAILABLE" message toggleable | Users request disabling update banners due to complex update paths (e.g., NixOS); suggests integration with “Quiet startup”. ([Link](https://github.com/badlogic/pi-mono/issues/3005)) |
| **#3252** | ✅ `/model` overwrites persistent default without opt-out | No way to switch models per-session without altering global settings—limits ephemeral experimentation. ([Link](https://github.com/badlogic/pi-mono/issues/3252)) |

---

#### **Key PR Progress** *(Top 10 by relevance)*

| # | PR | Description |
|--|----|-----------|
| **#3267** | ⏳ Compact startup header/resource listings | Adds `Ctrl+O` toggle to collapse/expand paths at launch—addresses verbosity in resource display. Fixes #3147. ([Link](https://github.com/badlogic/pi-mono/pull/3267)) |
| **#3266** | ✅ Preserve `cache_write_tokens` in OpenAI Responses | Fixes omission where `input_tokens_details.cache_write_tokens` wasn’t extracted—resolves underreporting of cached tokens. ([Link](https://github.com/badlogic/pi-mono/pull/3266)) |
| **#3264** | ✅ Set session ID headers for all OpenAI-compatible responses | Removes restrictive guard so prompt caching works across all OpenAI-compatible endpoints (not just OpenAI). ([Link](https://github.com/badlogic/pi-mono/pull/3264)) |
| **#3261** | ✅ Harden Anthropic streaming with raw event parsing | Switches from high-level SDK streams to manual event iteration to avoid parser failures on malformed deltas. ([Link](https://github.com/badlogic/pi-mono/pull/3261)) |
| **#3248** | ⏳ OSC 8 hyperlinks in Markdown | Enables clickable file links in terminals supporting OSC 8—improves navigation in documentation. ([Link](https://github.com/badlogic/pi-mono/pull/3248)) |
| **#3247** | ✅ Typebox fallback for Cloudflare | Implements validation fallback to prevent crashes in Cloudflare Worker environments where Typebox isn’t available. ([Link](https://github.com/badlogic/pi-mono/pull/3247)) |
| **#3251** | ✅ Fix gemma4 ollama reasoning effort | Sets `"reasoning_effort": "none"` for Gemma4 via Ollama API to disable unnecessary thinking overhead. ([Link](https://github.com/badlogic/pi-mono/pull/3251)) |
| **#3197** | ⏳ Add `interrupt()` for graceful turn interruption | New API method to stop agent turns without destroying in-flight tool state—better than destructive `abort()`. ([Link](https://github.com/badlogic/pi-mono/pull/3197)) |
| **#3229** | ⏳ Hardened Anthropic tool-call streaming | Fallback to non-streaming if streaming fails mid-turn—mirrors Claude Code resilience patterns. ([Link](https://github.com/badlogic/pi-mono/pull/3229)) |
| **#3240** | ✅ Replace deprecated `exa` with `eza` | Updates `plan-mode` extension to use maintained `eza` binary instead of abandoned `exa`. ([Link](https://github.com/badlogic/pi-mono/pull/3240)) |

---

#### **Feature Request Trends**

- **Customizable UI Shells**: Developers want finer control over how tools render output (e.g., full-screen diffs, inline previews).
- **Session & Model Isolation**: Requests to decouple session-only model changes from persistent defaults (`/model` behavior).
- **Prompt Caching Universality**: Widespread demand for consistent cache header support across all OpenAI-compatible providers.
- **Startup UX Tweaks**: Collapsible resource listings and quiet modes requested to reduce visual noise.
- **Thinking Level Customization**: Per-model thinking budgets via `models.json` to align with provider-specific capabilities.

---

#### **Developer Pain Points**

- **Terminal Integration Bugs**: Multiline paste corruption (#3167), Shift+Enter broken in Zellij (#3256), spinner leaks (#3083) hinder daily workflow.
- **Cloud-Native Deployments**: Validation bypass in Cloudflare Workers (#3112) and missing Typebox fallbacks break serverless usage.
- **Signal Handling Failures**: Poor SIGHUP/SIGTERM response leads to data loss and orphaned processes (#3057, #3212).
- **Provider Fragmentation**: Inconsistent thinking budgets (#3251), missing cache headers (#3196), and schema conflicts (#3214) complicate multi-provider setups.
- **Documentation Gaps**: Skill loading workflows (`--no-skills --skill`) lack clear guidance despite existing functionality.

--- 

*Generated from [badlogic/pi-mono](https://github.com/badlogic/pi-mono) activity on 2026-04-16.*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

Here is the Qwen Code community digest for 2026-04-16.

---

## Qwen Code Community Digest - April 16, 2026

### 1. Today's Highlights

The Qwen Code team has released version 0.14.5, introducing a startup performance profiler and exposing context usage data in the SDK, alongside the core implementation of the `fork sub` feature. Concurrently, the community is actively discussing the discontinuation of the Qwen OAuth free tier, with many users reporting authentication and quota-related errors following this policy change.

### 2. Releases

**v0.14.5**
This release includes several key improvements:
*   **CLI/Sdk:** Exposes `/context` usage data in non-interactive mode and SDK API.
*   **CLI:** Adds a startup performance profiler to help diagnose initialization delays.
*   **Core:** Implements the `fork sub` feature.
[Release Page](https://github.com/QwenLM/qwen-code/releases/tag/v0.14.5)

### 3. Hot Issues

1.  **[#3203] Qwen OAuth Free Tier Policy Adjustment**: This is the most discussed issue, with 59 comments. It details the abrupt reduction of the daily free quota from 1000 to 100 requests and the planned complete closure of the free tier on April 15th, 2026. The community reaction is largely negative, expressing confusion and disappointment over the sudden change.
    [GitHub Issue #3203](https://github.com/QwenLM/qwen-code/issues/3203)
2.  **[#3277] Qwen Code MCP Client Limited to 2 Connections**: A critical bug report stating that the MCP client is artificially limited to 2 connections, causing it to break production multi-node infrastructures. This indicates a significant architectural limitation for enterprise-scale deployments.
    [GitHub Issue #3277](https://github.com/QwenLM/qwen-code/issues/3277)
3.  **[#3288] Free limits**: Users are reporting that despite documentation stating 1000 free requests per day, they are being hit with a limit of 100. This issue highlights a disconnect between official documentation and actual user experience after the recent policy change.
    [GitHub Issue #3288](https://github.com/QwenLM/qwen-code/issues/3288)
4.  **[#3314] Internal error: 401 invalid access token or token expired**: Multiple reports (also including #3312) of a 401 authentication error immediately after a successful login. This suggests a potential session management or token refresh problem following the OAuth policy changes.
    [GitHub Issue #3314](https://github.com/QwenLM/qwen-code/issues/3314)
5.  **[#3306] Why did you kick OAuth users OUT ????**: A strongly worded user lamenting the removal of the OAuth free tier, describing it as a betrayal and a loss of trust, highlighting the emotional impact of the policy change.
    [GitHub Issue #3306](https://github.com/QwenLM/qwen-code/issues/3306)
6.  **[#3302] Add /quota command**: A feature request to provide users with a way to check their remaining daily quota and usage metrics, addressing the anxiety caused by not knowing how close one is to the limit.
    [GitHub Issue #3302](https://github.com/QwenLM/qwen-code/issues/3302)
7.  **[#2905] InternalError.Algo.DataInspectionFailed**: Users are encountering an error when using the qwen3.6 model, indicating that the input text may contain inappropriate content. This points to a potential issue with the model's content filtering system.
    [GitHub Issue #2905](https://github.com/QwenLM/qwen-code/issues/2905)
8.  **[#3296] Context use 0% but prompt gives error**: A user reports that the IDE shows 0% context usage, yet they receive an error indicating the Qwen OAuth free tier quota has been exceeded. This suggests a UI/API inconsistency in displaying quota information.
    [GitHub Issue #3296](https://github.com/QwenLM/qwen-code/issues/3296)
9.  **[#3281] Qwen OAuth says authentication succeeded, but requests fail with free tier quota exceeded**: Similar to #3296, this issue confirms that authentication appears successful, but subsequent requests fail due to exceeding the free tier quota, reinforcing the widespread confusion around the new limits.
    [GitHub Issue #3281](https://github.com/QwenLM/qwen-code/issues/3281)
10. **[#94] Call model without file tree at context head**: A long-standing feature request suggesting that placing the entire file tree at the beginning of the context is inefficient and costly in terms of tokens. It proposes moving the file list to the bottom or removing it entirely to optimize token usage.
    [GitHub Issue #94](https://github.com/QwenLM/qwen-code/issues/94)

### 4. Key PR Progress

1.  **[#3319] feat(cli): add early input capture**: Prevents keystrokes typed before the REPL is ready from being silently dropped, improving CLI responsiveness.
    [GitHub PR #3319](https://github.com/QwenLM/qwen-code/pull/3319)
2.  **[#3329] feat(cli): display real-time token consumption**: Shows `↓ N tokens` and `↑ N tokens` during model execution, providing better visibility into token usage.
    [GitHub PR #3329](https://github.com/QwenLM/qwen-code/pull/3329)
3.  **[#3214] feat(core): replace fdir crawler with git ls-files + ripgrep fallback**: Replaces the slow fdir crawler for file autocomplete with a faster, two-tier strategy that respects `.gitignore`, improving performance on large repositories.
    [GitHub PR #3214](https://github.com/QwenLM/qwen-code/pull/3214)
4.  **[#3320] fix(core): limit skill watcher depth**: Fixes a bug where the skill file watcher exhausted file descriptors by recursively watching entire subtrees, preventing FD exhaustion and breaking shell commands.
    [GitHub PR #3320](https://github.com/QwenLM/qwen-code/pull/3320)
5.  **[#3328] feat(cli): localize slash command descriptions**: Improves internationalization (i18n) coverage for built-in and dynamic slash commands, enhancing the user experience for non-English speakers.
    [GitHub PR #3328](https://github.com/QwenLM/qwen-code/pull/3328)
6.  **[#3303] fix(editor): detect Zed.app on macOS**: Fixes an issue where the Zed editor was incorrectly reported as "Not installed" on macOS even when it was present, improving editor integration.
    [GitHub PR #3303](https://github.com/QwenLM/qwen-code/pull/3303)
7.  **[#3308] fix(cli): remember 'Start new chat session'**: Addresses the issue of the "Welcome Back" dialog repeatedly asking the user whether to start a new chat, improving session management.
    [GitHub PR #3308](https://github.com/QwenLM/qwen-code/pull/3308)
8.  **[#3313] fix(core): recover from truncated tool calls**: Fixes a bug where large WriteFile/ReadFile tool calls would fail if the model output was truncated due to max_tokens, enabling recovery via multi-turn continuation.
    [GitHub PR #3313](https://github.com/QwenLM/qwen-code/pull/3313)
9.  **[#3318] feat(cli): add API preconnect**: Reduces first-call latency by firing a fire-and-forget HEAD request early in startup to warm the TCP+TLS connection.
    [GitHub PR #3318](https://github.com/QwenLM/qwen-code/pull/3318)
10. **[#3255] refactor(core): move fork subagent params**: Cleans up the fork subagent's internal plumbing by deciding all necessary parameters at construction time rather than execution time, improving code maintainability.
    [GitHub PR #3255](https://github.com/QwenLM/qwen-code/pull/3255)

### 5. Feature Request Trends

Based on the issues, the most prominent trends in feature requests are:
*   **Improved Context Management:** Users frequently request more efficient ways to manage file context, such as moving the file tree to the bottom of the context or avoiding its inclusion altogether to reduce token costs.
*   **Enhanced Localization:** There is a clear demand for better internationalization support, specifically for non-English UI languages like Chinese, including localized slash command descriptions and cached dynamic translations.
*   **Better Quota Visibility:** A strong need exists for users to easily check their remaining daily quota and usage metrics, especially following the recent policy changes.
*   **Authentication & Billing Clarity:** With the shift away from OAuth, there is a growing need for clearer documentation and guidance on alternative authentication methods and billing plans.

### 6. Developer Pain Points

Developers are currently facing several key frustrations:
*   **Authentication Failures:** The widespread 401 "invalid access token or token expired" error is a major pain point, indicating potential issues with session management or token refresh mechanisms post-OAuth discontinuation.
*   **Confusing Free Tier Policy:** The abrupt reduction and eventual closure of the free tier have led to significant confusion and frustration among users, impacting their ability to use the tool effectively without paying.
*   **Performance Bottlenecks:** Slow file indexing and autocomplete, particularly on large repositories, remain a concern, though recent PRs aim to address these issues.
*   **UI/API Inconsistencies:** Discrepancies between what the UI displays (e.g., 0% context usage, successful authentication) and the actual API response (e.g., quota exceeded, authentication failure) are a source of frustration for users.
*   **Lack of Transparency:** The sudden nature of the free tier changes and the resulting widespread issues suggest a need for better communication and proactive updates to the developer community.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/DenisZheng/agents-radar).*