# AI CLI Tools Community Digest 2026-04-28

> Generated: 2026-04-28 00:30 UTC | Tools covered: 8

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

**AI Developer Tools Ecosystem Cross-Tool Comparison Report**  
*April 28, 2026*

---

### **1. Ecosystem Overview**

The AI CLI tools ecosystem is in a period of rapid convergence and differentiation, with major players—Claude Code, OpenAI Codex, Gemini CLI, GitHub Copilot CLI, Kimi Code CLI, OpenCode, Pi, and Qwen Code—competing on core agent capabilities while diverging in platform focus and extensibility. All tools are prioritizing stability, security, and developer experience amid growing adoption, though each faces distinct pain points around authentication, streaming reliability, permission models, and cross-platform consistency. The community is increasingly demanding finer control over agent behavior, better observability, and tighter integration with local toolchains and remote development workflows.

---

### **2. Activity Comparison**

| Tool               | Issues (Top 10 Engagement) | PRs (Top 10 Updates) | New Release(s) Today |
|--------------------|----------------------------|----------------------|------------------------|
| **Claude Code**    | 10                         | 10                   | No                     |
| **OpenAI Codex**   | 10                         | 10                   | 4 alpha builds         |
| **Gemini CLI**     | 10                         | 10                   | v0.41.0-nightly        |
| **Copilot CLI**    | 10                         | 0                    | v1.0.37                |
| **Kimi Code CLI**  | 6                          | 10                   | No                     |
| **OpenCode**       | 10                         | 10                   | v1.14.28               |
| **Pi**             | 10                         | 10                   | v0.70.5, v0.70.4, v0.70.3 |
| **Qwen Code**      | 10                         | 10                   | v0.15.2-nightly        |

> *All tools maintain high issue/PR engagement, but Copilot CLI had no new PRs in the last 24 hours, while Pi showed the most release velocity with three incremental fixes.*

---

### **3. Shared Feature Directions**

Multiple tools are converging on similar feature demands:

- **Agent Control & Observability**: Session naming (#Claude #Copilot), runtime identity mapping (Kimi #2082), and verbose mode for subagents (Gemini #23608) appear across platforms.
- **Security & Permissions**: Granular auto-approval rules (Kimi #2092, Claude #43713), workspace trust enforcement (Gemini nightly), and enterprise config isolation (OpenCode #22296).
- **Cross-Platform Terminal UX**: Dynamic terminal titles (Kimi #2083), shell completion scripts (Copilot #v1.0.37), and WSL/Windows Terminal detection (#Copilot #2991, #Claude #8034).
- **MCP & Plugin Integration**: Tool name collision resolution (Gemini #21873), external session import (Codex #19895), and sandboxed plugin configs (#Copilot #3000).
- **Billing & Quota Transparency**: Per-model cost estimates (Qwen #3631), token usage visibility (OpenCode #24434), and quota exhaustion bugs (#Copilot #2591, #Codex #19242).

---

### **4. Differentiation Analysis**

| Tool               | Primary Focus                          | Target Users                     | Technical Distinctions                     |
|--------------------|----------------------------------------|----------------------------------|--------------------------------------------|
| **Claude Code**    | Deep coding + Git integration          | Solo devs, OSS contributors      | Open-source ambition (#41447), TUI-first   |
| **OpenAI Codex**   | Rust-based rearchitecture, MCP support | Enterprise teams, custom model users | Alpha-heavy Rust rewrite, Ollama regression fixes |
| **Gemini CLI**     | Google Cloud integration, security     | GCP users, regulated industries  | Workspace trust, Cloud Shell auth hardening  |
| **Copilot CLI**    | GitHub ecosystem alignment             | GitHub-centric developers        | Location-based permissions by default      |
| **Kimi Code CLI**  | Approval workflow customization        | Automation-focused users         | Configurable timeout, soul-mode reminders  |
| **OpenCode**       | Desktop/TUI hybrid, mobile touch       | General developers, IDE power users | Bun compatibility, AST caching proposals   |
| **Pi**             | Multi-provider flexibility             | Polyglot stack developers        | Cloudflare AI Gateway, Azure Cognitive Services |
| **Qwen Code**      | Reasoning model support, localization  | Global users, reasoning-heavy tasks | `<think>` tag preservation, Catalan i18n   |

---

### **5. Community Momentum & Maturity**

- **Most Active Communities**: **Pi** and **OpenCode** show highest release cadence and breadth of fixes; **Qwen Code** rapidly iterating on reasoning model support.
- **Rapid Iteration**: **OpenAI Codex** (4 alphas/day), **Qwen Code** (nightly builds), and **Pi** (3 releases in 24h) demonstrate aggressive development cycles.
- **Maturity Indicators**: **Claude Code** and **Copilot CLI** have stable releases but lag in PR activity; **Gemini CLI** shows strong security focus but slower feature velocity.
- **Emerging Players**: **Kimi Code CLI** and **Qwen Code** gaining traction with unique approval and reasoning features, respectively.

---

### **6. Trend Signals**

- **Reasoning Model Support Becomes Critical**: DeepSeek V4 and thinking-tier models drive demand for preserved `reasoning_content` (Qwen, Codex, Pi) and `<think>` rendering (Kimi, Qwen).
- **Local & Custom Model Integration Surges**: Regressions with Ollama (Codex), Minimax (Pi), and Kimi (OpenCode) reveal fragility in local provider support.
- **Security Over Safety**: Workspace trust, temp dir permissions, and enterprise config isolation rise above generic safety checks.
- **Billing Transparency Urgency**: Silent quota drains (#Copilot #2591) and credit disappearance (#Codex #19242) erode user trust—cost estimation becomes table stakes.
- **Cross-Platform Consistency Demands Growth**: macOS ARM64 crashes (#Copilot #2812), Windows auth loops (#OpenCode #17376), and WSL terminal detection gaps highlight fragmentation.

---

*Prepared for technical decision-makers assessing AI CLI tool investment and integration priorities.*

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

**Claude Code Skills Community Highlights Report**  
*Data as of 2026-04-28*

---

### **1. Top Skills Ranking**

Based on community engagement (comments + reactions), the most-discussed Skills include:

- **skill-quality-analyzer & skill-security-analyzer** ([PR #83](https://github.com/anthropics/skills/pull/83)): A meta-skill suite evaluating Claude Skills across structure, documentation, security, performance, and usability. High interest in standardized quality control for Skill development.
- **shodh-memory** ([PR #154](https://github.com/anthropics/skills/pull/154)): Introduces persistent memory for AI agents via `proactive_context`, enabling context retention across sessions—critical for long-running workflows.
- **SAP-RPT-1-OSS predictor** ([PR #181](https://github.com/anthropics/skills/pull/181)): Specialized skill leveraging SAP’s open-source tabular foundation model for predictive analytics within enterprise SAP environments.
- **masonry-generate-image-and-videos** ([PR #335](https://github.com/anthropics/skills/pull/335)): Enables AI-generated image/video creation using Imagen 3.0 and Veo 3.1 via Masonry CLI, expanding multimodal output capabilities.
- **codebase-inventory-audit** ([PR #147](https://github.com/anthropics/skills/pull/147)): Systematic codebase cleanup tool identifying orphaned files, unused dependencies, and documentation gaps through a 10-step audit workflow.

Status: All listed PRs remain **OPEN**, indicating active development or review phases.

---

### **2. Community Demand Trends**

From Issue discussions, key unmet needs emerge:

- **Cross-platform automation**: Requests for native OS integration (e.g., macOS AppleScript via [PR #806](https://github.com/anthropics/skills/pull/806)) highlight demand for deeper system-level control beyond browser-based actions.
- **Enterprise-grade governance**: Multiple users advocate for **agent-governance** patterns (Issue #412) to enforce safety policies, audit trails, and trust scoring in autonomous agent deployments.
- **Standardization & discoverability**: Strong desire for **org-wide skill sharing** (Issue #228) and clear namespace boundaries (Issue #492) to avoid duplication and build trust in community contributions.
- **Testing & QA automation**: Interest in formalizing testing workflows, including **testing-patterns** ([PR #723](https://github.com/anthropics/skills/pull/723)), which covers unit, integration, and React component testing best practices.
- **Documentation interoperability**: Skills like **HADS** ([PR #616](https://github.com/anthropics/skills/pull/616)) reflect demand for AI-human co-readable doc formats that reduce maintenance overhead.

---

### **3. High-Potential Pending Skills**

These active PRs show strong traction and may merge soon:

- **servicenow** ([PR #568](https://github.com/anthropics/skills/pull/568)): Comprehensive ServiceNow platform assistant covering ITSM, SecOps, ITAM/SAM, FSM, SPM, CSDM, and IntegrationHub—targeting enterprise IT operations.
- **claude-obsidian-reporter** ([PR #664](https://github.com/anthropics/skills/pull/664)): Generates structured Git reports directly into Obsidian vaults, appealing to knowledge workers managing personal wikis.
- **testing-patterns** ([PR #723](https://github.com/anthropics/skills/pull/723)): Covers full-stack testing strategies with practical implementation guidance, addressing widespread pain points in software reliability.
- **document-typography** ([PR #514](https://github.com/anthropics/skills/pull/514)): Addresses critical formatting issues in AI-generated docs (orphans, widows, numbering), improving professional output quality.

All are under active development with recent updates through April 2026.

---

### **4. Skills Ecosystem Insight**

The community’s most concentrated demand centers on **enterprise integration, operational automation, and standardized quality assurance**, reflecting a shift from general-purpose utilities toward specialized, production-grade AI workflows tailored for complex organizational environments.

--- 

*Report generated by technical analysis of anthropics/skills repository activity.*

---

**Claude Code Community Digest – April 28, 2026**

---

### **Today's Highlights**
The community continues to focus on stability and usability improvements amid growing adoption. A critical OAuth token delivery failure in the claude.ai MCP connector (#46140) remains unresolved, raising concerns about authentication reliability. Meanwhile, several high-impact bugs—including TUI freezes during `/config` usage (#46918), rewind crashes on macOS arm64 (#53804), and oversized image handling (#13480)—are drawing strong user feedback due to their disruptive nature.

---

### **Releases**
No new releases in the last 24 hours.

---

### **Hot Issues** *(Top 10 by engagement)*

1. **[#46987](https://github.com/anthropics/claude-code/issues/46987)** – *Stream idle timeout* on macOS with Anthropic API  
   Users report repeated partial responses and timeouts across multiple sessions today. With 149 comments and 140 👍, this points to a systemic API or client-side streaming issue affecting reliability.

2. **[#13480](https://github.com/anthropics/claude-code/issues/13480)** – Oversized images permanently break conversations  
   Even moderately large images trigger an unrecoverable state where the chat becomes unusable without restarting. High engagement (73 comments, 72 👍) suggests widespread frustration among desktop and CLI users.

3. **[#12513](https://github.com/anthropics/claude-code/issues/12513)** – Request to disable auto worktree creation for solo devs  
   Solo developers find automatic Git worktree generation disruptive when using the standalone macOS app. Strong support (59 👍) indicates a need for better UX customization in single-user contexts.

4. **[#43713](https://github.com/anthropics/claude-code/issues/43713)** – `autoAllowBashIfSandboxed` bypassed for shell expansions  
   Security-conscious users note that seemingly safe commands with pipes or expansions still prompt for approval despite sandbox settings. 37 👍 reflect growing concern over permission model rigidity.

5. **[#25045](https://github.com/anthropics/claude-code/issues/25045)** / [#29355](https://github.com/anthropics/claude-code/issues/29355)** – Programmatic session renaming via skills or ticket IDs  
   Two near-duplicate requests advocate for dynamic session naming triggered by context (e.g., Linear tickets). Combined 104 👍 signal strong demand for improved workflow integration.

6. **[#8034](https://github.com/anthropics/claude-code/issues/8034)** – `/terminal-setup` rejects GNOME Terminal  
   Linux users relying on GNOME Terminal are blocked from setup, despite its prevalence. 31 👍 show community pushback against arbitrary terminal exclusions.

7. **[#53804](https://github.com/anthropics/claude-code/issues/53804)** – Rewind command freezes terminal on macOS M-series  
   The `/rewind` feature causes complete terminal lockup requiring force-quit. Fresh report from yesterday underscores urgency around TUI responsiveness.

8. **[#46140](https://github.com/anthropics/claude-code/issues/46140)** – claude.ai MCP OAuth completes but Bearer token never sent  
   Critical auth flow failure where authorization succeeds but downstream MCP requests lack valid tokens. Only 1 👍 so far, but severity warrants attention.

9. **[#51588](https://github.com/anthropics/claude-code/issues/51588)** – Auth blocked post-account reinstatement  
   Users reinstated by Trust & Safety still cannot log in due to stale internal flags. 6 👍 highlight gaps between policy resolution and system sync.

10. **[#52299](https://github.com/anthropics/claude-code/issues/52299)** – `<Box>` nesting inside `<Text>` crashes TUI in tmux agents  
   UI rendering bug causing crashes specifically in split-pane agent scenarios. Narrow but impactful for advanced users.

---

### **Key PR Progress** *(Top 10 updates)*

1. **[#54103](https://github.com/anthropics/claude-code/pull/54103)** – Fix missing git commands in `allowed-tools` for commit-push-pr  
   Expands allowed bash tools to include `git diff`, `git branch --show-current`, and checkout/switch variants to prevent mid-flow permission prompts.

2. **[#54094](https://github.com/anthropics/claude-code/pull/54094)** – Quote `${CLAUDE_PLUGIN_ROOT}` in plugin hooks  
   Prevents path word-splitting errors when plugin root contains spaces—critical for Windows/macOS paths like “Company Name”.

3. **[#33070](https://github.com/anthropics/claude-code/pull/33070)** – Add `reframe` plugin for structured problem-solving  
   Introduces cognitive frameworks (first principles, inversion) grounded in codebase context to help break debugging stalemates.

4. **[#41447](https://github.com/anthropics/claude-code/pull/41447)** – Open source Claude Code  
   Major milestone: proposes full public release of the CLI tool, closing multiple long-standing feature requests.

5. **[#33224](https://github.com/anthropics/claude-code/pull/33224)** – Make Node.js version configurable in DevContainer  
   Upgrades default from Node 20 (EOL April 2026) to Node 24 LTS, aligning with modern development standards.

6. **[#33234](https://github.com/anthropics/claude-code/pull/33234)** – Handle repos with no commits in `/commit`  
   Fixes fatal error when running commit commands in brand-new repositories lacking any prior commits.

7. **[#5609](https://github.com/anthropics/claude-code/pull/5609)** – Hybrid firewall IP management for DevContainers  
   Improves CDN compatibility by combining static Meta API CIDRs with dynamic IP sets for GitHub Actions and cloud environments.

8. **[#30823](https://github.com/anthropics/claude-code/pull/30823)** – Add vibeguard plugin for secret detection  
   Community plugin that blocks prompts containing PII/secrets and redacts them with placeholder tags for safe resubmission.

9. **[#53831](https://github.com/anthropics/claude-code/pull/53831)** – Commit provenance snapshot for auditability  
   Documents metadata and rationale behind specific commits for compliance or investigation purposes.

10. **[#43824](https://github.com/anthropics/claude-code/pull/43824)** – Fix high-severity shell injection in GitHub workflow  
   Patches YAML variable interpolation flaw in `.github/workflows/claude-dedupe-issues.yml`, addressing security scanner findings.

---

### **Feature Request Trends**

- **Session Management**: Multiple requests (#25045, #29355) seek programmatic control over session naming—especially integration with ticketing systems (Linear, Jira).
- **Terminal & IDE Integration**: Requests for broader terminal emulator support (GNOME Terminal #8034) and IDE-specific enhancements (VSCode crash fixes #49558).
- **Security & Permissions**: Users want finer-grained control over bash permissions (#43713) and ability to disable auto-worktrees (#12513) to reduce friction.
- **Observability & Debugging**: New plugins like `reframe` (#33070) and secret guards (#30823) reflect desire for structured reasoning and safety tooling.

---

### **Developer Pain Points**

- **Unreliable Streaming**: Frequent API timeouts and partial responses (#46987) erode trust in production workflows.
- **TUI Instability**: Freezing during config access (#46918) and rewind (#53804) disrupts deep coding sessions.
- **Permission Model Rigidity**: Sandboxed environments struggle with common shell constructs (pipes, expansions), forcing manual approvals (#43713).
- **Cross-Platform Inconsistencies**: Issues persist across macOS (M-series), Windows, and WSL, suggesting architecture-level gaps in abstraction layers.
- **Auth & Billing Confusion**: Silent extra billing due to string matching (`HERMES.md` #53262) and broken OAuth flows (#46140) create financial and operational risk.

--- 

*Prepared by Claude Code Technical Analyst – April 28, 2026*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

**OpenAI Codex Community Digest – April 28, 2026**

---

### 1. **Today's Highlights**  
OpenAI released four alpha versions of the Rust-based Codex CLI (v0.126.0-alpha.4 through alpha.8), continuing iterative improvements to core tooling. Concurrently, significant user demand emerged around remote development capabilities and context window expansion for GPT-5.5. A critical regression in MCP tool invocation for custom/local models was also reported in recent releases.

---

### 2. **Releases**  
- **rust-v0.126.0-alpha.8**: Latest alpha build in ongoing Rust rearchitecture  
- **rust-v0.126.0-alpha.7**, **alpha.6**, **alpha.4**: Intermediate alphas addressing stability and feature parity  

*(No detailed release notes provided; updates appear focused on internal refactoring.)*

---

### 3. **Hot Issues**  

| # | Title | Impact | Reaction |
|---|------|--------|----------|
| [10450](https://github.com/openai/codex/issues/10450) | Remote Development in Desktop App | Major UX gap vs VS Code; blocks professional workflows | 👍615, 💬171 |
| [19464](https://github.com/openai/codex/issues/19464) | Support 1M token context for GPT-5.5 | Critical for large-codebase reasoning | 👍80, 💬62 |
| [9224](https://github.com/openai/codex/issues/9224) | Remote Control from mobile app | Enables seamless cross-device coding | 👍321, 💬44 |
| [13917](https://github.com/openai/codex/issues/13917) | Windows PowerShell host startup failure | Blocks Windows users from basic functionality | 💬37 |
| [19204](https://github.com/openai/codex/issues/19204) | Safety checks flagging verified content | Undermines trust in safety systems | 👍19, 💬19 |
| [13733](https://github.com/openai/codex/issues/13733) | Token waste from polling background processes | High cost inefficiency in active sessions | 👍13, 💬14 |
| [19871](https://github.com/openai/codex/issues/19871) | MCP regression for Ollama/custom providers | Breaks local AI integration post v0.117.0 | 💬2 |
| [19242](https://github.com/openai/codex/issues/19242) | Credit disappearance without usage records | Financial transparency concern | 💬7 |
| [19732](https://github.com/openai/codex/issues/19732) | Idle memory generation draining credits | Hidden usage during inactivity | 💬2 |
| [13508](https://github.com/openai/codex/issues/13508) | Large image upload crashes app thread | Prevents multimodal use cases | 💬2 |

---

### 4. **Key PR Progress**  

| # | Summary | Purpose |
|---|---------|---------|
| [19895](https://github.com/openai/codex/pull/19895) | External agent session import support | Enables interoperability with other agent frameworks |
| [19778](https://github.com/openai/codex/pull/19778) | List hooks via app-server RPC | Improves plugin management visibility |
| [19481](https://github.com/openai/codex/pull/19481) | Remove ghost snapshots from Responses API | Cleans up legacy code and reduces complexity |
| [19852](https://github.com/openai/codex/pull/19852) | Enforce preserved paths in Linux sandbox | Strengthens security by protecting metadata dirs |
| [19773–19776](https://github.com/openai/codex/pull/19773) | Thread session state → permission profiles | Standardizes runtime permissions model |
| [18593–18594](https://github.com/openai/codex/pull/18593) | Configurable keymaps + `/keymap` TUI command | Improves customization and discoverability |
| [19846–19847](https://github.com/openai/codex/pull/19846) | Preserved path policy primitive | Unified cross-platform protection of agent artifacts |
| [19458](https://github.com/openai/codex/pull/19458) | Library file upload/download hooks | Integrates ChatGPT Library into Codex workflow |
| [17373](https://github.com/openai/codex/pull/17373) | Keyed serialization for stateful RPCs | Enables scalable concurrent request handling |
| [19892](https://github.com/openai/codex/pull/19892) | Extract filesystem API into `codex-file-system` crate | Decouples exec-server dependencies for maintainability |

---

### 5. **Feature Request Trends**  
- **Remote Development Integration**: Strong demand for native remote control (CLI/app sync, mobile access) to match VS Code’s ecosystem ([#10450](https://github.com/openai/codex/issues/10450), [#9224](https://github.com/openai/codex/issues/9224)).  
- **Expanded Context Windows**: Users urgently seek 1M+ token support for GPT-5.5 to handle monorepos and long-horizon tasks ([#19464](https://github.com/openai/codex/issues/19464)).  
- **Cross-Platform Consistency**: Thread naming, notification behavior, and config persistence need alignment between CLI, desktop app, and web UI.  
- **Custom Model & MCP Ecosystem**: Reliable tool-calling support for local models (Ollama, etc.) is a top priority after recent regressions ([#19871](https://github.com/openai/codex/issues/19871)).

---

### 6. **Developer Pain Points**  
- **Rate Limit & Billing Transparency**: Multiple reports of unexpected credit depletion, plan mismatches, and lack of granular usage logs hinder budgeting and debugging ([#19242](https://github.com/openai/codex/issues/19242), [#19889](https://github.com/openai/codex/issues/19889)).  
- **Platform-Specific Bugs**: Windows PowerShell integration failures and macOS syspolicyd hangs break core functionality on major OSes ([#13917](https://github.com/openai/codex/issues/13733), [#19885](https://github.com/openai/codex/issues/19885)).  
- **Token Inefficiency**: Background polling during long-running processes consumes tokens unnecessarily due to redundant API calls ([#13733](https://github.com/openai/codex/issues/13733)).  
- **Safety System Confusion**: Legitimate code being flagged as unsafe erodes developer confidence in the toolchain ([#19204](https://github.com/openai/codex/issues/19204)).

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

**Today's Highlights**

The Gemini CLI team released a security-focused nightly build (v0.41.0-nightly.20260427.g42587de73) that enforces workspace trust in headless mode and improves .env file handling. A major community concern remains the widespread 403 PERMISSION_DENIED error affecting Google One AI Premium subscribers, despite correct account identification.

**Releases**

*   **v0.41.0-nightly.20260427.g42587de73**: Released today. This build focuses on security enhancements, specifically enforcing workspace trust in headless mode and improving the secure loading of .env files.

**Hot Issues**

1.  **[#24517](https://github.com/google-gemini/gemini-cli/issues/24517)**: **403 PERMISSION_DENIED for Google One AI Premium subscribers.** This is the most discussed issue with 152 comments and 61 upvotes. Users report their subscription tier is correctly identified, but all API requests are blocked with a 403 error before processing, indicating a critical authentication or authorization problem.
2.  **[#22745](https://github.com/google-gemini/gemini-cli/issues/22745)**: **Assess impact of AST-aware codebase tools.** An EPIC tracking investigations into whether AST-aware tools can improve precision, reduce token noise, and streamline navigation within the codebase. This is a high-priority internal investigation.
3.  **[#22323](https://github.com/google-gemini/gemini-cli/issues/22323)**: **Subagent recovery after MAX_TURNS misreported as success.** A P1 issue where subagents incorrectly report "GOAL" success even when they hit their turn limit, hiding legitimate interruptions and confusing users about task progress.
4.  **[#24115](https://github.com/google-gemini/gemini-cli/issues/24115)**: **Chinese text appearing in English-only chats.** A user reports unexpected Chinese output in an English conversation, prompting a request for chat history logs to investigate potential shims or polyfills causing language leakage.
5.  **[#24916](https://github.com/google-gemini/gemini-cli/issues/24916)**: **Persistent permission prompts for the same file.** Users report that the CLI repeatedly asks for permissions on the same file, failing to remember previously granted "allow for all future sessions" instructions.
6.  **[#25411](https://github.com/google-gemini/gemini-cli/issues/25411)**: **Agent stalling for hours on small tasks.** A user experienced a three-hour stall after providing a small build log, expecting some form of activity or status update, highlighting agent responsiveness issues.
7.  **[#25166](https://github.com/google-gemini/gemini-cli/issues/25166)**: **Shell command execution hangs after completion.** A core issue where simple shell commands finish but the CLI remains stuck in a "Waiting input" state, requiring manual intervention.
8.  **[#23571](https://github.com/google-gemini/gemini-cli/issues/23571)**: **Model creates numerous temporary scripts.** The agent frequently generates temporary scripts in random locations, creating significant cleanup overhead for users.
9.  **[#24246](https://github.com/google-gemini/gemini-cli/issues/24246)**: **400 error with over 128 tools.** The CLI throws a 400 error when more than 400 tools are enabled, limiting functionality for complex agent configurations.
10. **[#25216](https://github.com/google-gemini/gemini-cli/issues/25216)**: **Failure to open in a temporary path on Windows.** A critical error (`EISDIR`) occurs when trying to access a directory as a file in a temporary path, breaking basic functionality on Windows.

**Key PR Progress**

1.  **[#26084](https://github.com/google-gemini/gemini-cli/pull/26084)**: **Fix 400 error with >128 tools.** Implements `smartLimitTools` in `ToolRegistry` to ensure `getFunctionDeclarations` respects the Gemini API's 128-tool limit by prioritizing built-in tools.
2.  **[#26063](https://github.com/google-gemini/gemini-cli/pull/26063)**: **Restrict permissions on project temp dir tree.** A security-focused fix that tightens permissions on sensitive generated state (conversation history, memory, etc.) under `~/.gemini/` to prevent unauthorized access, closing #24743.
3.  **[#26079](https://github.com/google-gemini/gemini-cli/pull/26079)**: **Better error message for failed cloudshell-gca auth.** Provides a clearer error message when Cloud Shell GCA authentication fails, improving user experience and debugging.
4.  **[#26078](https://github.com/google-gemini/gemini-cli/pull/26078)**: **Preserve Request headers in DevTools logger.** Fixes a bug where headers were stripped when using `Request` objects in DevTools fetch interceptor, ensuring accurate logging for debugging network requests.
5.  **[#26073](https://github.com/google-gemini/gemini-cli/pull/26073)**: **Fix remaining issues with generalist profile.** Addresses unspecified problems related to the generalist profile, likely improving overall agent stability.
6.  **[#23608](https://github.com/google-gemini/gemini-cli/pull/23608)**: **Make subagents aware of active approval modes.** Ensures subagents understand global Approval Modes (Plan Mode, Auto-Edit Mode), preventing them from attempting globally blocked actions and getting stuck in failure loops.
7.  **[#21873](https://github.com/google-gemini/gemini-cli/pull/21873)**: **Resolve MCP tool name collisions for subagents.** Fixes issues where subagents invoking MCP tools encountered name collisions by enabling unqualified names and dynamic mapping back to fully-qualified names during execution.
8.  **[#25291](https://github.com/google-gemini/gemini-cli/pull/25291)**: **User-friendly error messages on invalid API Keys.** Improves error handling for invalid API keys by providing clear messages and redirecting users to re-authenticate via `gemini login`, resolving #23535.
9.  **[#25945](https://github.com/google-gemini/gemini-cli/pull/25945)**: **Nightly metric analysis bot.** Implements an agent that runs nightly to analyze metrics time series and suggest repository management improvements, such as automated triage processes.
10. **[#20738](https://github.com/google-gemini/gemini-cli/pull/20738)**: **Make maxFileCount configurable for file search.** Addresses silent truncation of file searches in large workspaces by exposing `context.fileFiltering.maxFileCount` as a configurable user setting, allowing safer increases to the hard limit.

**Feature Request Trends**

*   **Enhanced Agent Intelligence & Robustness:** A strong trend towards making the agent more proactive, intelligent, and resilient. This includes encouraging it to write to memory more often, updating task trackers during replanning, and stopping destructive behaviors.
*   **Improved Subagent Management:** Features like verbose mode for subagents, better awareness of approval modes, and improved robustness against API errors are frequently requested to enhance debugging and reliability.
*   **Codebase Navigation & Understanding:** Investigations into AST-aware tools for more precise file reads, search, and codebase mapping are ongoing, aiming to reduce noise and improve efficiency.
*   **Developer Experience & Debugging Tools:** Requests for better visibility into agent thinking (verbose mode), more robust evaluations, and improved error messaging are common, indicating a need for greater transparency and control.

**Developer Pain Points**

*   **Authentication/Authorization Issues:** The top pain point, exemplified by the 403 PERMISSION_DENIED error for premium subscribers, is causing significant frustration and blocking usage.
*   **Agent Stalling/Responsiveness:** Users frequently report the agent becoming unresponsive or "stalling" for extended periods (e.g., 3 hours on a small task), which severely impacts productivity.
*   **Permission Prompts:** Repeated, unmemorized permission requests for files are a persistent annoyance, breaking workflow continuity.
*   **Tool Limitations:** The 128-tool limit for the Gemini API is a hard constraint that developers encounter when configuring complex agents.
*   **Shell Command Hanging:** After executing simple shell commands, the CLI often hangs in a "Waiting input" state, requiring manual intervention.
*   **Cross-Platform Issues:** Problems like failing to open temporary paths on Windows (`EISDIR`) highlight platform-specific bugs that affect usability.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

**GitHub Copilot CLI Community Digest – April 28, 2026**

---

### 1. **Today's Highlights**

The latest release (v1.0.37) introduces persistent location-based permissions by default and adds static shell completion scripts for Bash, Zsh, and Fish—improving usability and session consistency. Meanwhile, critical bugs around quota exhaustion from single prompts (#3010), MCP configuration isolation (#3000), and agent mode confusion (#3006) are drawing urgent community attention.

---

### 2. **Releases**

**v1.0.37** (April 27, 2026)  
- Location-based permission persistence enabled by default across sessions in the same directory  
- New `copilot completion <bash|zsh|fish>` subcommand generates static shell completion scripts  

---

### 3. **Hot Issues**

| # | Summary | Why It Matters | Reactions |
|---|--------|----------------|-----------|
| [2591](https://github.com/github/copilot-cli/issues/2591) | Single prompt triggers 80–100 premium requests via internal tool invocations | Drains user quotas unexpectedly; undermines cost predictability | 👍13, 31 comments |
| [1703](https://github.com/github/copilot-cli/issues/1703) | Missing org-enabled models (e.g., Gemini 3.1 Pro) vs. VS Code Copilot | Inconsistent model availability breaks workflow parity | 👍40, 25 comments |
| [3000](https://github.com/github/copilot-cli/issues/3000) | `--config-dir` fails to isolate plugin configs | Prevents project-specific plugin sandboxing | 👍0, 3 comments |
| [2969](https://github.com/github/copilot-cli/issues/2969) | Autopilot loops infinitely on blocked tasks, consuming quota per iteration | Wastes credits and blocks progress | 👍0, 3 comments |
| [2895](https://github.com/github/copilot-cli/issues/2895) | `/compact` strips `<agent_instructions>` from custom agents | Corrupts agent context during memory compaction | 👍1, 2 comments |
| [2792](https://github.com/github/copilot-cli/issues/2792) | Request for configurable planning vs. execution model switching | Could optimize cost/performance trade-offs | 👍3, 2 comments |
| [2372](https://github.com/github/copilot-cli/issues/2372) | Auto-scroll disrupts reading long outputs | Harms UX during verbose agent responses | 👍3, 1 comment |
| [2812](https://github.com/github/copilot-cli/issues/2812) | Native macOS ARM64 binary crashes silently | Blocks Apple Silicon users from using latest version | 👍0, 1 comment |
| [2991](https://github.com/github/copilot-cli/issues/2991) | WSL doesn’t detect Windows Terminal for setup | Limits integration in hybrid dev environments | 👍0, 1 comment |
| [3010](https://github.com/github/copilot-cli/issues/3010) | One prompt drains ~40% of monthly quota instantly | Same root cause as #2591; urgent fix needed | 👍0, 0 comments |

---

### 4. **Key PR Progress**

*No pull requests were updated in the last 24 hours.*

---

### 5. **Feature Request Trends**

Developers increasingly seek:
- **Better agent control & feedback**: Auto-injection of “Co-authored by Copilot” commits (#1455), clearer thinking-mode state indicators (#3005)
- **Enhanced terminal UX**: Collapsible output sections (#1787), mouse scroll behavior fixes (#2405), disable auto-scroll (#2372)
- **MCP & plugin management**: Isolated config directories (#3000), disable option in `/mcp show` menu (#2956), OAuth fallback for remote containers (#3009)
- **Model transparency**: Explain tier gating (e.g., GPT-5.4’s “Extra High” hiding) (#2990), ACP mode descriptions (#2794)

---

### 6. **Developer Pain Points**

- **Quota unpredictability**: Silent multi-request loops (#2591, #3010) erode trust in billing
- **Inconsistent model visibility**: Org-level model access disparities between CLI and IDE (#1703)
- **Agent misattribution**: Custom agents not properly loaded despite correct status display (#3006)
- **Terminal integration gaps**: Broken mouse handling (#2405), invisible glyphs (#3004), inaccessible spawned shells (#3001)
- **Configuration fragility**: Plugin/config isolation broken by `--config-dir` (#3000), skill loading failures (#2977)

--- 

*Prepared by GitHub Copilot CLI Technical Analyst – April 28, 2026*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

**Kimli Code CLI Community Digest – April 28, 2026**

---

### **Today's Highlights**
No new releases were published in the last 24 hours. However, several active pull requests address critical UX and stability issues, including indefinite approval timeouts (resolving #1823), improved session visibility via dynamic terminal titles (#1475 regression fix), and better error logging for hook failures. A notable trend is growing demand for granular control over auto-approval rules and session lifecycle management.

---

### **Releases**
*No new releases in the past 24 hours.*

---

### **Hot Issues**

1. **[#1823](https://github.com/MoonshotAI/kimi-cli/issues/1823)** – *Feature Request: Configurable Approval Request Timeout*  
   Users want to eliminate or extend the hardcoded 5-minute timeout on approval prompts. This affects long-running agent tasks requiring manual intervention. Two users upvoted; discussion includes use cases for “unlimited” mode in batch workflows.

2. **[#2074](https://github.com/MoonshotAI/kimi-cli/issues/2074)** – *Web Mode JS MIME Type Error on Windows*  
   JavaScript files served by `/web` mode are returned with incorrect MIME types (`text/plain` instead of `application/javascript`), breaking local web interfaces. Reported on Windows 10; impacts debugging and interactive tool use.

3. **[#2091](https://github.com/MoonshotAI/kimi-cli/issues/2091)** – *Session Slowness After MATLAB Work in v1.37.0*  
   Specific sessions become unresponsive (seconds per token) after extended MATLAB usage—suggesting memory bloat or context corruption. No upvotes yet, but indicates potential resource leak or state pollution bug.

4. **[#2090](https://github.com/MoonshotAI/kimi-cli/issues/2090)** – *Inconsistent Indentation in First Line*  
   In `/login` mode, first line of output has extra indentation vs. subsequent lines—likely a formatting bug in prompt rendering under WSL2. Low urgency but affects readability.

5. **[#2089](https://github.com/MoonshotAI/kimi-cli/issues/2089)** – *Enhancement: Add “Remove Session Execution” Command*  
   User requests a built-in way to delete session data without manual file cleanup. Suggests missing API endpoint or CLI subcommand for session hygiene.

6. **[#2051](https://github.com/MoonshotAI/kimi-cli/issues/2051)** – *(Closed)* *Shell Transcript Hides Skill/Flow Slash Prompts*  
   Previously closed by PR #2052, which fixed echo suppression for `/skill:*` and `/flow:*` commands in shell transcripts. Important for auditability and user clarity during agent interactions.

---

### **Key PR Progress**

1. **[#2092](https://github.com/MoonshotAI/kimi-cli/pull/2092)** – *feat(config): Granular Auto-Approval Rules*  
   Introduces per-action glob patterns in `config.toml` to auto-approve MCP tools, file reads, etc., inspired by Claude Code. Enables fine-grained trust policies.

2. **[#2087](https://github.com/MoonshotAI/kimi-cli/pull/2087)** – *fix(approval): Scope Pending Requests Lifecycle*  
   Makes foreground/subagent approvals wait indefinitely by default, preventing accidental cancellation after 5 minutes. Also cancels stale approvals when parent process exits.

3. **[#2082](https://github.com/MoonshotAI/kimi-cli/pull/2082)** – *feat(session): Expose Runtime Identity (PID + Session ID)*  
   Adds external observability: links OS PID to Kimi session ID, enabling monitoring/debugging tools to correlate processes with sessions.

4. **[#2083](https://github.com/MoonshotAI/kimi-cli/pull/2083)** – *feat(proctitle): Dynamic Terminal Title with CWD + Topic*  
   Fixes regression from v1.15.0 by restoring informative tab titles using current working directory and session topic—critical for multi-session workflows.

5. **[#2088](https://github.com/MoonshotAI/kimi-cli/pull/2088)** – *chore(config): Raise Default max_steps_per_turn to 1000*  
   Increases agent turn step limit from 500 to 1000, reducing premature termination in complex reasoning chains.

6. **[#2003](https://github.com/MoonshotAI/kimi-cli/pull/2003)** – *fix(soul): Re-inject Yolo Reminder After Context Compaction*  
   Ensures users see the "yolo mode" warning again after context summarization, avoiding confusion about safety settings.

7. **[#1852](https://github.com/MoonshotAI/kimi-cli/pull/1852)** – *fix: Log Hook Task Exceptions*  
   Critical fix: previously silent exceptions in pre/post hooks (e.g., tool use, LLM calls) are now logged, improving debuggability of plugin integrations.

8. **[#2080](https://github.com/MoonshotAI/kimi-cli/pull/2080)** – *fix(web): Show Diff in ToolInput UI*  
   Improves web interface clarity by displaying changesets (new/old) instead of raw JSON, aiding review of file edits or code diffs.

9. **[#2050](https://github.com/MoonshotAI/kimi-cli/pull/2050)** – *fix(utils): Detect Virtual Interface IPs*  
   Fixes 403 errors when accessing `--public --host 0.0.0.0` via Tailscale/WireGuard by recognizing virtual network addresses as valid origins.

10. **[#2085](https://github.com/MoonshotAI/kimi-cli/pull/2085)** – *test(ai): Add E2E Accuracy Benchmarking*  
    Introduces accuracy tracking against TerminalBench 2 to measure impact of new features on real-world task success—first step toward quantitative ML eval in CI.

---

### **Feature Request Trends**

- **Configurable Approval Timeouts**: Multiple users request eliminating or extending the 5-minute cap (Issue #1823).
- **Granular Auto-Approval Policies**: Inspired by Claude Code, users seek rule-based allowlists/denylists for actions/tools.
- **Session Management APIs**: Requests for programmatic deletion or inspection of session state (#2089).
- **Improved Observability**: Need to map PIDs to sessions and enhance logging/debugging signals (#2082).

---

### **Developer Pain Points**

- **Hardcoded Timeouts**: The 5-minute approval window disrupts automation and long-running agents.
- **Silent Failures in Hooks**: Pre/post-tool-use callbacks failing without logs make plugin development frustrating (#1852).
- **Virtual Network Access Issues**: Local dev behind Tailscale/WireGuard fails due to overly strict origin checks.
- **Transcript Clarity**: Hidden slash-command echoes reduce transparency in interactive shells.
- **Resource Leaks**: Sessions degrade performance after prolonged use (e.g., MATLAB integration), suggesting memory or context issues.

--- 

*End of Digest*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

**OpenCode Community Digest – April 28, 2026**

---

### 1. Today's Highlights  
The latest release (v1.14.28) fixes critical upgrade issues for Bun users and improves terminal UX with configurable shells and reduced noise. Meanwhile, a major storage persistence bug discovered on April 27 (#24628) has sparked urgent discussion, affecting session continuity since January. Several high-impact PRs are advancing agent configurability, TUI responsiveness, and mobile touch support.

---

### 2. Releases  

**v1.14.28**  
- Fixed `opencode upgrade` failure when using Bun outside a `package.json` directory.  
- Added configurable default shell for terminals and agent commands via Desktop settings.  
- Reduced extraneous terminal output during TUI workspace creation.  
- Restored default toast timeout behavior in OpenTUI.

**v1.14.27**  
- Introduced per-terminal shell configuration and desktop-level management UI.
- Minimized background terminal chatter during workspace initialization.

---

### 3. Hot Issues  

| # | Title | Impact & Reaction |
|---|------|-------------------|
| **#24628** [CLOSED] Storage Persistence Bug | Critical: Session data stopped writing to disk since Jan 31, 2026. No new sessions persisted despite successful processor completion. | High urgency; 11 comments, no upvotes—community alerted but unresolved at close. |
| **#23887** [OPEN] Kimi K2.6/K2.5 "Provider returned error" on CLI | OpenCode Go fails specifically with Kimi models while other providers work. Affects Windows/Linux users. | 24 comments, 👍4; widespread frustration across platforms. |
| **#24184** [OPEN] Stale IDE context after file closure | TUI retains closed-file context in prompts, misleading LLM responses. | 18 comments, 👍2; UX regression post-v1.14.23 noted by active devs. |
| **#17376** [OPEN] Infinite auth loop in Web Terminal | After credential setup, terminal repeatedly prompts despite correct input. Blocks web usage. | 16 comments, 👍14; highly voted usability blocker. |
| **#10490** [OPEN] Disable copy-on-select by default | Requests config option to turn off mouse-selection clipboard auto-copy. | 12 comments, 👍21; strong preference for opt-in behavior. |
| **#5121** [OPEN] Winget installation support | Asks who maintains the official winget package amid version mismatches. | 12 comments, 👍18; growing demand for native Windows packaging. |
| **#23666** [OPEN] Model picker silently resets after first message | Selected model reverts to agent default post-response. Breaks workflow consistency. | 7 comments, 👍1; subtle but disruptive UI flaw. |
| **#21470** [OPEN] Heavy CPU utilization | OpCode consumes excessive CPU vs. waiting on APIs—token-heavy sessions show poor performance. | 6 comments, 👍6; performance concern for power users. |
| **#23928** [OPEN] AI responses truncated at `<` or `<=` | Streaming cuts off mid-token during structured comparisons. | 6 comments, 👍1; intermittent but reproducible text corruption. |
| **#24560** [OPEN] SQLite Symbol Index for AST queries | Proposal to replace volatile AST cache with persistent symbol lookup via SQLite. | 4 comments; technical deep dive on scalable code analysis. |

---

### 4. Key PR Progress  

| # | Summary | Status |
|---|--------|--------|
| **#24692** | Fix non-Git projects using root dir as worktree, breaking permissions | OPEN |
| **#22296** | Prevent user env vars from overriding enterprise managed-settings.json | OPEN |
| **#24693** | Align legacy & Effect HTTP API boolean query parsing for sessions | OPEN |
| **#18767** | Mobile touch optimization preserving desktop experience | OPEN |
| **#13854** | Stop streaming markdown prematurely after message completion | OPEN |
| **#24691 / #24690 / #24689** | Add `order` field to agent config for custom Tab cycling | CLOSED (compliance review) |
| **#24434** | Show per-message token counts in TUI metadata footer | OPEN |
| **#12633** | Auto-accept edit permissions via Shift+Tab toggle | OPEN |
| **#24661** | File context toggle + editor reconnect backoff logic | CLOSED |
| **#22047** | Expose `--dangerously-skip-permissions` as top-level flag | OPEN |

---

### 5. Feature Request Trends  

- **Archived Session Visibility**: Users want access to historical chats via sidebar menu (#6680).  
- **Model Context Control**: Demand for granular control over compaction/model selection (e.g., GPT-5.5 context mismatch #24561).  
- **Platform Integration**: DeepSeek-V4 support requested (#24093), plus LiteLLM autoloading (#13891).  
- **UI/UX Refinements**: Disable copy-on-select (#10490), fix double-ESC interruptions (#24217), improve TUI logo burst (#23062).  
- **Mobile & Accessibility**: Touch-optimized interface (#18767), better search in project dialogs (#7111).

---

### 6. Developer Pain Points  

- **Storage Reliability**: Persistent session loss since late January remains unaddressed despite recent discovery.  
- **Provider-Specific Errors**: Kimi K2.x models consistently fail via OpenCode Go, suggesting API contract drift.  
- **Permission & Security Overhead**: Enterprise environments report bypass risks due to misordered config merging (#22296).  
- **TUI State Inconsistencies**: Footer displays stale provider info (#23741), model picker resets (#23666), and interrupted streams (#24685).  
- **Cross-Platform Fragmentation**: Musl binaries break on Chimera Linux (#24639); Windows-specific auth loops persist (#17376).  

> _For full details, visit: https://github.com/anomalyco/opencode_

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

**Pi Community Digest - April 28, 2026**

---

### **Today's Highlights**
Pi v0.70.3 introduces self-update capability via `pi update`, enabling seamless version management alongside package updates. The release also adds Azure Cognitive Services endpoint support for Azure OpenAI. Several critical stability fixes address startup failures and HTML export vulnerabilities, while new Cloudflare AI integrations expand provider coverage.

---

### **Releases**
- **v0.70.5**: Fixed HTML export preserving ANSI-renderer trailing padding as extra blank wrapped lines.
- **v0.70.4**: Resolved packaged `pi` startup failure caused by session selector importing source-only utility paths.
- **v0.70.3**: 
  - Added `pi update` command to self-upgrade pi and installed packages ([PR #3680](https://github.com/badlogic/pi-mono/pull/3680)).
  - Integrated Azure Cognitive Services endpoints for Azure OpenAI compatibility.

---

### **Hot Issues** *(Top 10 by engagement)*

1. **[#3715]** Long-running local LLM tool calls terminate at 5 minutes due to undici’s default `bodyTimeout`; retry timeout settings cannot override this cap. Users report frustration with incomplete responses from vLLM-hosted models like Qwen3-thinking.  
   *Status: Closed* | *Comments: 8* | *👍: 2*

2. **[#3846]** Post-update crash in v0.70.3 due to missing module `/src/utils/paths.js` in `@mariozechner/pi-coding-agent`. Affects users who rely on the coding agent extension.  
   *Status: Closed* | *Comments: 4*

3. **[#3823]** "pi install" inconsistently uses npm instead of pnpm when pi itself is installed via pnpm, causing environment mismatches (e.g., Nix setups).  
   *Status: Closed* | *Comments: 4*

4. **[#3779]** Opencode Minimax-m2.5-free returns 400 errors because unsupported Anthropic-specific fields (`eager_input_streaming`, `cache_control`) are sent by default.  
   *Status: Closed* | *Comments: 4*

5. **[#3817]** Request to add Image content type to Assistant Message interface for native image generation support via OpenRouter/providers.  
   *Status: Closed* | *Comments: 4*

6. **[#3787]** DeepSeek V4 Flash silently clamps `reasoning_effort: xhigh` to `high`, despite API docs confirming full support. Inconsistent with fixed Pro variant (#3662).  
   *Status: Closed* | *Comments: 4* | *👍: 1*

7. **[#3767]** Symlinked resource directories cause inconsistent path resolution between `pi config` and runtime initialization across skill/resource types.  
   *Status: Closed* | *Comments: 4*

8. **[#3850]** Feature request: Add Cloudflare Workers AI and AI Gateway as built-in providers for unified access to OpenAI/Anthropic/Workers models with observability and caching.  
   *Status: Closed* | *Comments: 3*

9. **[#3828]** OpenCode Go provider fails to load Qwen3.5/Qwen3.6 models with 404 errors during prompting despite correct selection.  
   *Status: Closed* | *Comments: 3*

10. **[#3840]** General complaint about v0.70.3 installation breaking TUI launch after update—echoes broader instability concerns.  
    *Status: Closed* | *Comments: 3*

---

### **Key PR Progress** *(Top 10 by impact)*

1. **[#3861][OPEN]** Fixes Bun compatibility by detecting `bun` runtime and constructing correct global `node_modules` paths instead of relying on nonexistent `bun root -g`.  
   Addresses #3809.

2. **[#3856][OPEN]** Adds Cloudflare AI Gateway provider with support for unified routing, caching, and billing across OpenAI/Anthropic/Workers AI via `CLOUDFLARE_*` env vars. Closes #3850.

3. **[#3851][CLOSED]** Integrates Cloudflare Workers AI as a first-class provider using OpenAI-compatible endpoint format. Builds foundational support for GPU-hosted OSS models.

4. **[#3819][CLOSED]** Escapes base64 image data in HTML exports to prevent XSS-like attribute injection via malformed `src="data:...`. Fixes #3811.

5. **[#3818][CLOSED]** Deduplicates symlinked resources during startup to resolve configuration/runtime inconsistencies (#3767).

6. **[#3802][CLOSED]** Disables unsupported Anthropic tool fields (`eager_input_streaming`, etc.) for Opencode Minimax-m2.5-free to fix 400 errors (#3779).

7. **[#3807][CLOSED]** Workarounds Bun sandbox limitations where `process.env` is empty, restoring API key detection and PATH resolution.

8. **[#3799][CLOSED]** Extends Azure OpenAI provider to support `*.cognitiveservices.azure.com` domains beyond `*.openai.azure.com`.

9. **[#3855][CLOSED]** Prevents loading test/spec files as extensions by filtering out `*.test.ts/js`/`*.spec.ts/js` patterns.

10. **[#3837][CLOSED]** Corrects broken documentation links in `packages/coding-agent/docs/index.md` to avoid double `/latest/` segments.

---

### **Feature Request Trends**

- **Provider Expansion**: Multiple requests for Cloudflare Workers AI, AI Gateway, and Together AI integration to unify multi-provider workflows.
- **Model Flexibility**: Desire for per-model variant selection (e.g., GPT-5.5 context tiers) and dynamic model lists (>800 entries).
- **Image Support**: Strong demand for native image content handling in assistant messages and tool outputs.
- **Keyboard & UX Polish**: Italian keyboard duplication bug (#3780), terminal overlay width issues (#3814), and autolink corruption (#3815).
- **Documentation Clarity**: Requests to respect custom paths like `PI_CODING_AGENT_DIR` in docs and fix hardcoded references.

---

### **Developer Pain Points**

- **Installation & Runtime Instability**: Recurring crashes post-v0.70.3 due to module resolution failures, especially with Bun/npm mismatches.
- **Provider Compatibility**: Many providers (Opencode, Fireworks, DeepSeek) require per-model tweaks to disable unsupported Anthropic features or adjust thinking levels.
- **Sandbox Limitations**: Bun’s empty `process.env` inside Linux sandboxes breaks dependency resolution and API key detection.
- **HTML Export Security**: Poor escaping of image data in exported HTML poses potential injection risks.
- **Symlink Handling**: Complex setups with symlinked configs/resources lead to subtle bugs in config persistence and startup logic.

--- 

*Generated by Pi Technical Analyst Bot | Data: github.com/badlogic/pi-mono*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

**Qwen Code Community Digest — April 28, 2026**

---

### 1. **Today's Highlights**
The Qwen Code team released a nightly build (v0.15.2-nightly.20260428) with Catalan language support and fixes for VS Code companion slash commands and CLI gradient rendering. A surge of DeepSeek V4 API errors (#3579, #3619, #3658, #3670, #3679) reveals a critical regression in reasoning_content handling during model switches or history loads, prompting urgent fixes in PRs #3637 and #3682. Meanwhile, background task management and cost estimation features are advancing rapidly, signaling major UX improvements on the horizon.

---

### 2. **Releases**
- **v0.15.2-nightly.20260428.1befabe58** ([link](https://github.com/QwenLM/qwen-code/releases/tag/v0.15.2-nightly.20260428.1befabe58))  
  - Adds support for Catalan language.  
  - Fixes VS Code companion slash command completion after message submit.  
  - Guards against incomplete gradient rendering in CLI.

---

### 3. **Hot Issues**

| Issue | Summary & Impact |
|------|------------------|
| [#3579](https://github.com/QwenLM/qwen-code/issues/3579) | Reopens conflict between thought-stripping logic (#3304 vs #3579): preserving `reasoning_content` on model switch is essential for DeepSeek V4 compatibility. 9 comments; indicates unresolved correctness gap. |
| [#3619](https://github.com/QwenLM/qwen-code/issues/3619) | Users report DeepSeek V4 API 400 errors due to missing `reasoning_content`. Directly tied to tool calls in thinking mode. High community visibility. |
| [#3669](https://github.com/QwenLM/qwen-code/issues/3669) | Custom models (e.g., MiniMax M2.7) fail to render `<think>` tags correctly, breaking transparency in reasoning chains. Visual evidence provided. |
| [#3530](https://github.com/QwenLM/qwen-code/issues/3530) | “Maximum update depth exceeded” crashes during model switching—likely React useEffect loop. 👍2 upvotes; affects stability. |
| [#3323](https://github.com/QwenLM/qwen-code/issues/3323) | Requests localized slash-command descriptions for non-English UIs. Important for global adoption. |
| [#3634](https://github.com/QwenLM/qwen-code/issues/3634) | Roadmap doc for background task management: Phase A/B/C now tracked openly. Signals strategic direction. |
| [#3644](https://github.com/QwenLM/qwen-code/issues/3644) | `/rewind` fails when IDE integration enabled—conflict between features. Reported by multiple users. |
| [#3678](https://github.com/QwenLM/qwen-code/issues/3678) | Dark-only export HTML theme causes eye strain. 👍2 upvotes; accessibility concern. |
| [#3670](https://github.com/QwenLM/qwen-code/issues/3670) | Random 400 errors with DeepSeek V4 + tool tasks (Playwright, MCP). Suggests concurrency or serialization bug. |
| [#3679](https://github.com/QwenLM/qwen-code/issues/3679) | Context window misreported as 131K instead of 1M for DeepSeek-V4—impacts user confidence in token limits. |

---

### 4. **Key PR Progress**

| PR | Description |
|----|-------------|
| [#3637](https://github.com/QwenLM/qwen-code/pull/3637) | Fixes `mergeConsecutiveAssistantMessages` to preserve `reasoning_content`, directly addressing DeepSeek V4 400 errors. |
| [#3682](https://github.com/QwenLM/qwen-code/pull/3682) | Stops stripping reasoning content on model switch/history load—aligns with user expectations post-#3579. |
| [#3642](https://github.com/QwenLM/qwen-code/pull/3642) | Introduces managed background shell pool + `/tasks` command for long-running processes (e.g., `npm run dev`). Major infra upgrade. |
| [#3631](https://github.com/QwenLM/qwen-code/pull/3631) | Adds model cost estimation via `/stats model` with per-model pricing config—transparency for billing-conscious users. |
| [#3673](https://github.com/QwenLM/qwen-code/pull/3673) | Implements autoSkill: extracts reusable workflows into project skills after 20+ tool calls. Opt-in feature. |
| [#3667](https://github.com/QwenLM/qwen-code/pull/3667) | Switches CLI TUI from polling to event-driven header refresh on model change—improves responsiveness. |
| [#3677](https://github.com/QwenLM/qwen-code/pull/3677) | Adds OpenAI-compatible MiniMax provider with proper `<think>` tag parsing—fixes #3669. |
| [#3680](https://github.com/QwenLM/qwen-code/pull/3680) | Expands TUI markdown rendering to include Mermaid, math, task lists—better terminal UX. |
| [#3214](https://github.com/QwenLM/qwen-code/pull/3214) | Replaces slow fdir crawler with `git ls-files` + ripgrep fallback for `@` file mentions—performance win for large repos. |
| [#3656](https://github.com/QwenLM/qwen-code/pull/3656) | Recovers malformed JSONL records (`}{`) during session load—fixes corruption from interrupted writes (#3606). |

---

### 5. **Feature Request Trends**
- **Localization**: Slash commands and UI text need full i18n support (esp. Chinese), including dynamic translation caching (#3323).
- **Export Theme Flexibility**: Dark mode only in HTML exports hurts usability—request for light theme toggle (#3678).
- **Visual Studio Extension**: Demand for native VS (not VS Code) integration (#3625).
- **Background Task Management**: Unified dashboard for spawned shells/subagents via `/tasks` command (#3642, #3634).
- **Billing Transparency**: Per-model cost estimates and session-level billing summaries requested (#3631, #3668).

---

### 6. **Developer Pain Points**
- **DeepSeek V4 Compatibility**: Recurring 400 errors due to `reasoning_content` mishandling—critical blocker for users.
- **Session Corruption**: Interrupted JSONL writes cause parse failures (`}{` glued records)—affects session recovery.
- **IDE Integration Conflicts**: Features like `/rewind` break when `ide.enabled=true`—poor feature isolation.
- **Model Switching Instability**: React loops and state mismatches during model changes (#3530).
- **Tool Output Handling**: Media-rich tool results (images/audio) violate strict OpenAI specs—causes 400s in LM Studio (#3616).

--- 

*Generated by AI Technical Analyst – focusing on actionable insights for developer tools.*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/DenisZheng/agents-radar).*