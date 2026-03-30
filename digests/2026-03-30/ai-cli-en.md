# AI CLI Tools Community Digest 2026-03-30

> Generated: 2026-03-30 02:15 UTC | Tools covered: 7

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Gemini CLI](https://github.com/google-gemini/gemini-cli)
- [GitHub Copilot CLI](https://github.com/github/copilot-cli)
- [Kimi Code CLI](https://github.com/MoonshotAI/kimi-cli)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Qwen Code](https://github.com/QwenLM/qwen-code)
- [Claude Code Skills](https://github.com/anthropics/skills)

---

## Cross-Tool Comparison

**AI CLI Tools Ecosystem Analysis – March 30, 2026**

---

### **1. Ecosystem Overview**  
The AI developer tools landscape is rapidly maturing, with major players converging on agentic workflows, session persistence, and MCP integration. Community feedback reveals widespread demand for improved safety controls, cross-platform stability, and granular model/agent management. While some tools (e.g., Kimi Code) emphasize rapid feature iteration, others (e.g., GitHub Copilot CLI) grapple with legacy compatibility and permission models. The shift toward composable agent ecosystems—enabled by plugins, subagents, and tool namespaces—is now the dominant development vector across all platforms.

---

### **2. Activity Comparison**  

| Tool               | Issues (Top 10) | Open PRs | New Release(s)       | Key Focus                     |
|--------------------|------------------|----------|------------------------|-------------------------------|
| **Claude Code**    | 10               | 10       | v2.1.87 (critical fix) | Session mgmt, MCP hardening   |
| **OpenAI Codex**   | 10               | 10       | None                   | Agent namespace stabilization |
| **Gemini CLI**     | 10               | 10       | None                   | Voice mode, security fixes    |
| **Copilot CLI**    | 10               | 4        | None                   | Security regressions, TUI UX  |
| **Kimi Code**      | 10*              | 3        | None                   | Tracing, shell context        |
| **OpenCode**       | 10               | 10       | v1.3.5                 | Async hooks, token accuracy   |
| **Qwen Code**      | 10               | 10       | Nightly build          | Windows fixes, cron tools     |

*\*Includes closed issues in top 10*

> **Release Status**: Only Claude Code and OpenCode shipped stable patches; Qwen Code focused on nightly improvements; others prioritized bug fixes over releases.

---

### **3. Shared Feature Directions**  

| Requirement                          | Tools Involved                  | Notes                                                                 |
|--------------------------------------|----------------------------------|-----------------------------------------------------------------------|
| **Granular Auto-Approval Rules**     | Kimi, Claude, OpenCode           | Safety control parity with YOLO modes                                 |
| **Session Persistence & Migration**  | All except Codex                 | Path-independent IDs, project context loading                         |
| **MCP Integration Modernization**    | OpenCode, Claude, Gemini         | OAuth-based setup, subagent tool access, GitLab hooks                 |
| **Voice Input Support**              | Gemini, Kimi                     | Local Whisper backend, real-time processing                           |
| **Subagent/Teammate Modes**          | Kimi, Qwen, Claude               | Multi-agent coordination vs. isolated workers                         |
| **Model-Specific Controls**          | OpenCode, Qwen                   | `/fast` mode, thinking variant toggles                                |
| **Terminal Safety Guards**           | All                              | Pre-tool-use hooks, file operation confirmations                      |

---

### **4. Differentiation Analysis**  

- **Claude Code**: Leader in enterprise-grade safety (permission guards, session audit), but plagued by quota miscalculations and phone verification failures. Targets professional teams needing reliability.
- **OpenAI Codex**: Focuses on IDE-native experience with agent namespace stability and thread telemetry. Less emphasis on CLI-specific features; assumes VS Code integration as primary interface.
- **Gemini CLI**: Strong on voice/local processing and security (command injection prevention). Capacity issues with Ultra model hurt paid user trust.
- **GitHub Copilot CLI**: Faces structural challenges—subagent hook bypass (#2392) and plugin discovery bugs undermine its extensibility claims. More reactive than proactive.
- **Kimi Code**: Rapidly iterating on observability (tracing visualizer) and shell context awareness. Lags in IDE integration (JetBrains ACP missing).
- **OpenCode**: Balanced maturity with strong async/plugin support. Token counting errors and desktop UI regressions indicate quality gaps despite active dev.
- **Qwen Code**: Most unstable (Windows/shell crashes), but aggressively adding agentic features (cron loops, follow-up suggestions). Lacks production packaging.

---

### **5. Community Momentum & Maturity**  

- **Highest Engagement**: **Claude Code** (#34229 phone verification issue has 615 comments) and **OpenAI Codex** (#14593 token burn with 319 comments) show intense community scrutiny.
- **Rapid Iteration**: **Kimi Code** resolved Linux input regression in <24h and merged shell context injection; **Qwen Code** ships nightly builds daily with hotfixes.
- **Maturity Gaps**: **Copilot CLI** and **Qwen Code** have critical blocking bugs (ACCESS_VIOLATION, malformed URL crashes) that suggest insufficient test coverage or release discipline.
- **Consistent Themes**: All tools report session instability, model visibility limits, or permission UX friction—indicating systemic industry challenges in agent orchestration.

---

### **6. Trend Signals**  

- **Agent Observability is Critical**: Tracing visualizers (`/vis` in Kimi), thread telemetry (Codex), and heap/CPU skills (Gemini) reflect demand for debuggability in long-running tasks.
- **Safety Over Convenience**: Auto-approval rules, pre-hook enforcement, and thinking content hiding signal users prioritize control over "set-and-forget" automation.
- **IDE-Centric Design Wins**: Features like inline chat (Kimi #1634), popup windows (Codex #15162), and VS Code companion integrations dominate feature requests.
- **Cross-Platform Stability Remains Broken**: Windows shell failures (Qwen, Copilot), macOS terminal quirks (Claude), and Flatpak restrictions (Codex) highlight unfinished portability work.
- **MCP Adoption Accelerates**: OAuth-based setup, tool naming in prompts, and GitLab hooks show MCP becoming the de facto standard for external tooling integration.

> **Strategic Takeaway**: Developers should prioritize tools with robust session management, observable agent execution, and flexible approval workflows. For production use, avoid platforms with unresolved stability issues (e.g., Qwen Code on Windows, Copilot CLI’s subagent risks).

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

**Claude Code Skills Community Highlights Report**  
*Data as of 2026-03-30*

---

### 1. **Top Skills Ranking**

The most-discussed pending Skills (by comment activity) reflect strong community interest in **document quality control**, **codebase maintenance**, and **enterprise integration**:

- **[skill-quality-analyzer & skill-security-analyzer](https://github.com/anthropics/skills/pull/83)**  
  *Meta-skills for auditing other Skills’ structure, documentation, and security posture.*  
  Discussed as foundational tools to improve overall Skill ecosystem reliability.

- **[shodh-memory](https://github.com/anthropics/skills/pull/154)**  
  *Persistent memory system enabling AI agents to retain context across conversations.*  
  Highlighted for solving Claude Code’s stateless session limitation—key for multi-turn workflows.

- **[roadmap-pilot](https://github.com/anthropics/skills/pull/536)**  
  *Incremental codebase cleanup autopilot that processes one task per session with Git tracking.*  
  Praised for preventing context overflow during large refactoring efforts; complements `init-roadmap`.

- **[SAP-RPT-1-OSS predictor skill](https://github.com/anthropics/skills/pull/181)**  
  *Integration with SAP’s open-source tabular foundation model for predictive analytics on SAP data.*  
  Noted as a rare enterprise-specific AI model adapter—demonstrates demand for vertical SaaS integrations.

- **[plan-task](https://github.com/anthropics/skills/pull/522)**  
  *Persists multi-step plans and task progress between sessions via Markdown files.*  
  Addresses core user pain point: plan continuity across Claude Code restarts.

> All listed PRs are currently **OPEN** and under active development or review.

---

### 2. **Community Demand Trends**

From Issue discussions, three emerging themes dominate anticipated Skill directions:

- **Workflow Automation**: Multiple users request skills for **automated codebase audits** (e.g., orphaned files, unused dependencies), **incremental roadmap execution**, and **task persistence**—indicating a shift from one-off assistance to sustained agentic support.

- **Enterprise Integration**: Strong interest in **ServiceNow**, **SAP**, and standardized **MCP (Model Context Protocol)** exposure of Skills suggests organizations seek to embed Claude into existing ITSM/ITOM stacks.

- **Document Engineering**: Beyond basic writing, users want **typographic enforcement**, **ODT/HTML interoperability**, and **accessibility compliance**—showing maturity in content lifecycle management demands.

Additionally, several users explicitly call for **better governance**, including **agent trust scoring**, **audit trails**, and **namespace security** to prevent impersonation risks.

---

### 3. **High-Potential Pending Skills**

These actively discussed but not yet merged PRs signal imminent ecosystem expansion:

- **[masonry-generate-image-and-videos](https://github.com/anthropics/skills/pull/335)** – Adds generative media capabilities via Masonry CLI.
- **[x402 BSV auth + micropayment](https://github.com/anthropics/skills/pull/374)** – Enables pay-per-use AI service discovery and authentication.
- **[servicenow](https://github.com/anthropics/skills/pull/568)** – Broad ServiceNow platform assistant covering SecOps, ITAM, FSM, and IntegrationHub.
- **[a11y-auditor](https://github.com/anthropics/skills/pull/288)** – WCAG-compliant accessibility checker for generated web content.

These represent high-impact additions likely to be prioritized given their cross-functional utility.

---

### 4. **Skills Ecosystem Insight**

The community’s most concentrated demand centers on **making Claude Code persistently agentic**—specifically through **cross-session memory**, **task continuity**, and **automated codebase stewardship**—revealing a strategic push beyond reactive assistance toward autonomous workflow integration.

---

**Claude Code Community Digest – March 30, 2026**

---

### **Today's Highlights**
A critical fix for Cowork Dispatch message delivery was released in v2.1.87, addressing a regression impacting team workflows. The community continues to report widespread session throttling and rate limit anomalies despite Claude Max subscriptions, with over 600 users affected by phone verification failures alone. Meanwhile, active development includes new plugins for test generation, session management, and global Hookify rule support.

---

### **Releases**
- **v2.1.87** – Fixed messages in Cowork Dispatch not getting delivered.  
  [Release Context](https://github.com/anthropics/claude-code/releases/tag/v2.1.87)

---

### **Hot Issues**

1. **[#34229](https://github.com/anthropics/claude-code/issues/34229)** – Phone verification failure blocks access for 684+ users; top-voted issue with 615 comments. Affects onboarding and account recovery.
2. **[#29579](https://github.com/anthropics/claude-code/issues/29579)** – Users with Claude Max hit API rate limits at 16% usage (Windows); suggests quota miscalculation or enforcement bug.
3. **[#6457](https://github.com/anthropics/claude-code/issues/6457)** – macOS users exceed 5-hour daily limit in <90 minutes; indicates aggressive or inaccurate usage tracking.
4. **[#38335](https://github.com/anthropics/claude-code/issues/38335)** – Abnormal session exhaustion since March 23; 99 upvotes signal systemic concern.
5. **[#18170](https://github.com/anthropics/claude-code/issues/18170)** – Copy-paste includes unwanted indentation/trailing spaces (150 👍); UX friction in terminal workflows.
6. **[#8674](https://github.com/anthropics/claude-code/issues/8674)** – VS Code extension fails to detect Git Bash on Windows (34 👍); impacts cross-platform developers.
7. **[#5826](https://github.com/anthropics/claude-code/issues/5826)** – Custom MCP servers fail due to mandatory OAuth 2.1; locks out non-OAuth enterprise setups.
8. **[#34413](https://github.com/anthropics/claude-code/issues/34413)** – Duplicate of #29579: Windows rate limit errors; confirms platform-specific issue.
9. **[#38350](https://github.com/anthropics/claude-code/issues/38350)** – Inflated session usage metrics (30 👍); undermines trust in billing transparency.
10. **[#39713](https://github.com/anthropics/claude-code/issues/39713)** – Plan Mode bypasses restrictions post-v2.1.83; security regression flagged as urgent.

---

### **Key PR Progress**

1. **[#36433](https://github.com/anthropics/claude-code/pull/36433)** – Adds `agent-wallet` plugin for AI agent payments via x402 protocol.
2. **[#35864](https://github.com/anthropics/claude-code/pull/35864)** – `worktree-guardian`: Protects uncommitted work in agent-created worktrees from silent deletion.
3. **[#39148](https://github.com/anthropics/claude-code/pull/39148)** – `preserve-session`: Maintains session history across directory moves/renames using UUID mapping.
4. **[#40594](https://github.com/anthropics/claude-code/pull/40594)** – `test-writer`: End-to-end test generation with framework detection and coverage analysis.
5. **[#29835](https://github.com/anthropics/claude-code/pull/29835)** – `agents-md`: Loads AGENTS.md as fallback when CLAUDE.md absent.
6. **[#40586](https://github.com/anthropics/claude-code/pull/40586)** – `session-manager`: Lists and resumes project-specific sessions via `/sessions`.
7. **[#33015](https://github.com/anthropics/claude-code/pull/33015)** – `tmp-cleanup`: Mitigates `/tmp` file leaks from Bash tool invocations (#8856).
8. **[#40456](https://github.com/anthropics/claude-code/pull/40456)** – Fixes session resume crash on empty Edit tool calls (`H.startsWith` error).
9. **[#40572](https://github.com/anthropics/claude-code/pull/40572)** – Global Hookify rules support via `~/.claude/` directory.
10. **[#34286](https://github.com/anthropics/claude-code/pull/34286)** – Hardens sensitive file guard with structured risk-based permissions.

---

### **Feature Request Trends**

- **Configurable context compaction thresholds** (#40757): Users want control over auto-compact trigger points beyond hardcoded 420K token limit.
- **MCP server disable flag** (#39662): Need per-server enable/disable without full removal.
- **Invertable Plan Mode defaults**: Requests to show “clear context” by default (opt-out vs opt-in).
- **Global project context loading**: Leverage `AGENTS.md` or shared `.claude/project-context.md` across repos.
- **Improved session persistence**: Path-independent session IDs and audit tools for workspace migration.

---

### **Developer Pain Points**

- **Rate limit & quota inaccuracies**: Frequent false positives on usage caps despite Max plan subscription (macOS/Windows).
- **Session instability**: Crashes during resume (Edit tool edge cases), especially after Chrome extension disconnects (#40756).
- **Copy-paste fidelity**: Terminal output formatting corrupts clipboard content due to prompt-aligned indentation.
- **MCP authentication rigidity**: No option to bypass OAuth 2.1 for custom servers; breaks SSE/HTTP integrations.
- **Git safety regressions**: Unauthorized `git reset --hard` operations every 10 minutes (#40710, now closed but pattern noted).

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

**OpenAI Codex Community Digest – March 30, 2026**

---

### **Today's Highlights**

The community continues to focus on platform stability and model reliability, with ongoing discussions around token burn rates in the IDE extension and degraded GPT-5.2 Codex performance now resolved. A major enhancement request for macOS Intel support in the desktop app remains highly requested, reflecting continued demand across Apple hardware ecosystems. Underlying architectural improvements continue through PRs focused on agent tooling namespace stabilization and watchdog timer refinements.

---

### **Releases**

No new releases observed in the last 24 hours.

---

### **Hot Issues**

1. **[#14593](https://github.com/openai/codex/issues/14593)** – Users report rapid token consumption in VS Code extension (Business tier), prompting concern about billing efficiency and usage transparency. With 319 comments and 105 upvotes, this signals widespread impact.
2. **[#10410](https://github.com/openai/codex/issues/10410)** – Strong demand for x86_64 macOS support in the Codex Desktop App; 216 upvotes reflect frustration over lack of Universal Binary availability on legacy Intel Macs.
3. **[#9224](https://github.com/openai/codex/issues/9224)** – Remote control via mobile ChatGPT integration is desired by power users seeking cross-device workflow continuity—224 upvotes indicate high developer interest.
4. **[#11981](https://github.com/openai/codex/issues/11981)** – Persistent 100% CPU usage even during idle states raises performance concerns on macOS; low engagement suggests niche but severe impact.
5. **[#10438](https://github.com/openai/codex/issues/10438)** – Closed after regression: GPT-5.2 Codex quality dropped due to routing misconfiguration—resolved but highlights fragility of model-tier logic.
6. **[#14297](https://github.com/openai/codex/issues/14297)** – Post-update reconnect loops in Codex App cause delayed responses—regression post-March 19 update affects ARM macOS users.
7. **[#15162](https://github.com/openai/codex/issues/15162)** – “Open in Popup Window” now replaces rather than opens multiple windows—UX regression noted by Pro users.
8. **[#16189](https://github.com/openai/codex/issues/16189)** – CapsLock/Shift key handling broken in TUI prompt input within VS Code terminal—critical for international keyboard layouts.
9. **[#5259](https://github.com/openai/codex/issues/5259)** – Terminal resize causes scrollback re-rendering failure—affects narrow-terminals and remote sessions; 20 upvotes show sustained relevance.
10. **[#15648](https://github.com/openai/codex/issues/15648)** – Error: GPT-5.3-Codex-Spark unsupported with ChatGPT accounts—confusing model-tier access rules spark confusion.

---

### **Key PR Progress**

1. **[#16197](https://github.com/openai/codex/pull/16197)** – Adds ordered subagent model fallback with per-candidate reasoning effort configuration—improves resilience in quota-constrained environments.
2. **[#16181](https://github.com/openai/codex/pull/16181)** – Exposes agent tools under stable `agents` namespace while preserving backward compatibility—clears path for future extensibility.
3. **[#15690](https://github.com/openai/codex/pull/15690)** – Introduces thread lifecycle telemetry events (`thread/start`, `thread/fork`, etc.)—foundational for observability and debugging.
4. **[#16207](https://github.com/openai/codex/pull/16207)** – Removes deprecated `spawn_mode` from agent roles, simplifying config surface—aligns with role-driven watchdog behavior.
5. **[#16191](https://github.com/openai/codex/pull/16191)** – Enables non-curated plugin cache refresh using version metadata—supports dynamic plugin ecosystems.
6. **[#16202](https://github.com/openai/codex/pull/16202)** – Fixes bottom-pane teardown after paste operations—resolves TUI state inconsistency bugs.
7. **[#16201](https://github.com/openai/codex/pull/16201)** – Refreshes stale rate limit data in `/status` endpoint—prevents frozen weekly quota display in active sessions.
8. **[#16199](https://github.com/openai/codex/pull/16199)** – Resets watchdog timer on user input—improves responsiveness and prevents premature termination.
9. **[#16198](https://github.com/openai/codex/pull/16198)** – Renders watchdog countdown in subagent panel—enhances visibility into long-running tasks.
10. **[#16193](https://github.com/openai/codex/pull/16193)** – Moves discovery/suggestion tool specs out of `codex-core` into `codex-tools`—continues modularization effort.

---

### **Feature Request Trends**

- **Cross-platform desktop app parity**: Demand for x86_64 macOS support (#10410) underscores need for consistent binary availability.
- **Remote/mobile integration**: Seamless control from phone/tablet via ChatGPT app tab (#9224).
- **Enhanced session synchronization**: Account-linked sync across devices for chat history and context (#12593).
- **Dynamic API key management**: Support for external key helpers (e.g., OAuth refresh) via `apiKeyHelper` config (#4484).
- **Improved terminal UX**: Scrollback re-rendering on resize (#5259), Enter key recovery after completion (#12645).

---

### **Developer Pain Points**

- **Token inefficiency**: Rapid token burn in IDE extension triggers cost anxiety despite Business subscriptions.
- **Model instability**: GPT-5.x series shows inconsistent behavior—either degraded output or unexpected routing (#10438, #13823).
- **Tool-call leakage**: JSON envelopes occasionally appear in assistant text, suggesting serialization bugs (#13114).
- **Platform-specific encoding issues**: Windows EOL corruption (#13148) and Norwegian character mojibake (#13743).
- **Sandbox permission errors**: Flatpak VS Code users blocked from writing to workspace due to bubblewrap restrictions (#15678).
- **CPU thermal spikes**: Post-task CPU load surges in VS Code extension (#16185) risk hardware longevity.
- **Watchdog unpredictability**: Premature termination or lack of feedback during multi-step tasks frustrates debugging.

--- 

*Generated from GitHub activity on openai/codex as of 2026-03-30.*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

**Gemini CLI Community Digest - 2026-03-30**

**Today's Highlights**
The community continues to grapple with capacity issues on the Gemini Ultra model, while significant progress is being made on voice mode implementation and persistent task tracking infrastructure. Several critical security fixes have also been merged, including command injection prevention and clipboardy compatibility improvements.

**Releases**
No new releases in the last 24 hours.

**Hot Issues**
1. **#23362**: Users report 429 Resource Exhausted errors specifically with Gemini Pro accounts, but not API keys - suggests account-level throttling or abuse detection differences (6 comments)
2. **#24103**: Frustration over inconsistent Ultra model availability causing unreliable experience for paid users (6 comments, 5 👍)  
3. **#23858**: Agent modifies files during plan mode without user consent, raising safety concerns (4 comments)
4. **#22745**: Epic investigating AST-aware codebase navigation tools to improve precision and reduce token usage
5. **#22855**: Request for `/plan` command to accept inline prompts instead of requiring separate planning interface (2 👍)
6. **#23724**: Implementation of persistent project-level tracker storage for better task state management across sessions
7. **#23571**: Model generates temporary scripts in random directories, creating cleanup overhead (community wants better workspace control)
8. **#22819**: Proposal for global vs project memory routing to organize user preferences and project-specific context
9. **#22809**: Enhancement to main agent prompt to encourage proactive memory writes for user preference capture
10. **#24175**: Voice mode feature request with local Whisper backend support (linked to #24174 PR)

**Key PR Progress**
1. **#24177**: Fixes error classification logic to properly handle zero retry delays from API responses
2. **#24174**: Implements real-time voice mode with both cloud and local Whisper.cpp backends 
3. **#24171**: Prevents CLI crash when clipboardy fails due to missing sysctl on macOS systems
4. **#24170**: Critical security fix preventing command injection via shell substitution syntax
5. **#24081**: Resolves sandbox build issues on Windows and Linux platforms
6. **#23942**: Fixes GCP project ID resolution for proper trace export with CLI authentication
7. **#24123**: Optimizes plan editing to avoid unnecessary replans when no changes are made
8. **#24040**: Corrects autocomplete behavior for subcommand suggestions
9. **#24167**: Adds comprehensive heap/CPU investigation pipeline as built-in skills
10. **#24157**: Introduces unified context management with multi-tiered history distillation

**Feature Request Trends**
- Enhanced voice input capabilities (both cloud and local processing)
- Improved task tracking with persistent storage and better UX
- More granular memory management (global vs project separation)
- AST-aware code navigation tools for precision improvements
- Better plan mode controls and safety mechanisms
- Compact tool output formatting for improved readability

**Developer Pain Points**
- **Capacity limitations**: Recurring 429 errors particularly affecting Pro account users vs API key users
- **Inconsistent model availability**: Ultra model shows unpredictable availability patterns
- **Workspace pollution**: Temporary file generation in random locations creates cleanup burden  
- **Plan mode safety**: Concerns about unintended file modifications during planning phases
- **Startup reliability**: Platform-specific issues affecting Windows/Linux builds and macOS clipboard integration

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

**GitHub Copilot CLI Community Digest – March 30, 2026**

---

### 1. Today's Highlights

No new releases were published in the last 24 hours. However, the project sees steady activity with multiple critical bug reports and usability improvements surfacing—particularly around session reliability, model visibility, and plugin installation quirks. The most active discussions focus on subagent security gaps and terminal compatibility regressions introduced in recent versions.

---

### 2. Releases

*No releases in the last 24 hours.*

---

### 3. Hot Issues

| # | Summary | Why It Matters | Reactions |
|--|--------|----------------|-----------|
| [#1274](https://github.com/github/copilot-cli/issues/1274) | Frequent 400 errors during code reviews suggest either client-side malformed requests or backend validation drift. | Breaks core developer workflow; impacts trust in CLI stability. | 5 👍, 11 comments |
| [#2012](https://github.com/github/copilot-cli/issues/2012) | Raw Unicode line separators (U+2028/U+2029) in `events.jsonl` corrupt JSON parsing during `/resume`. | Silent data corruption leads to session loss; violates expected file format contracts. | 1 👍 |
| [#2133](https://github.com/github/copilot-cli/issues/2133) | Array syntax for `model` field in `.agent.md` is rejected by CLI but supported by VS Code Copilot Chat. | Creates interoperability break between IDEs; confuses users relying on standardized agent configs. | 2 comments |
| [#2392](https://github.com/github/copilot-cli/issues/2392) | Pre-tool-use hooks are bypassed in subagents spawned via the task tool. | Major security/permission flaw—allows privilege escalation within agent ecosystems. | Fresh (same day) |
| [#2390](https://github.com/github/copilot-cli/issues/2390) | `copilot plugin install <repo>` fails to detect `.github/plugin/plugin.json`. | Plugin discovery broken for GitHub-hosted skills; undermines extensibility. | Fresh |
| [#2389](https://github.com/github/copilot-cli/issues/2389) | Headless server leaks kqueue file descriptors under load, breaking bash tools after prolonged use. | Resource exhaustion in long-running workflows; affects production deployments. | Fresh |
| [#2388](https://github.com/github/copilot-cli/issues/2388) | Output truncation omits Aspire Dashboard URLs when using `!aspire run`. | Critical info loss for observability setups; misleading user experience. | Fresh |
| [#2387](https://github.com/github/copilot-cli/issues/2387) | Windows crashes with ACCESS_VIOLATION during AI model requests—no graceful recovery. | Platform-specific instability; blocks Windows adoption. | Fresh |
| [#2386](https://github.com/github/copilot-cli/issues/2386) | Only GPT-4.1 visible at `/models`; others trigger 400 errors post-selection. | Limits model choice and suggests API misconfiguration or filtering logic bug. | Fresh |
| [#2384](https://github.com/github/copilot-cli/issues/2384) | Terminal.app mouse copy broken due to removed `--no-alt-screen` option in v1.0.12. | Regressive change affecting macOS default terminal; poor UX for accessibility. | Fresh |

---

### 4. Key PR Progress

| # | Summary | Impact |
|--|--------|--------|
| [#678](https://github.com/github/copilot-cli/pull/678) *(CLOSED)* | Added initial devcontainer configuration for reproducible local development. | Enables consistent onboarding for contributors. |
| [#2316](https://github.com/github/copilot-cli/pull/2316) *(OPEN)* | Devcontainer now includes GitHub CLI feature via ghcr.io/devcontainers/features/github-cli:1. | Simplifies CI/CD integration in containerized environments. |
| [#2381](https://github.com/github/copilot-cli/pull/2381) *(CLOSED)* | Fixed fish shell PATH configuration by avoiding POSIX export syntax. | Resolves silent PATH failures for fish users. |
| [#2380](https://github.com/github/copilot-cli/pull/2380) *(CLOSED)* | Switched temp directory cleanup to `EXIT` trap for robustness across error paths. | Prevents leftover temp files on install failures. |

---

### 5. Feature Request Trends

- **Improved skill/agent discoverability**: Users want better formatting, pagination, and visual cues for `/skills list` output (Issue #1445).
- **Enhanced agent transparency**: Requests to surface agent metadata (title, description, model info) during selection (Issues #2382, #2383).
- **Auto-resume/share behavior**: Desire for optional “auto-share on exit” to preserve context across restarts (Issue #2227).
- **Cross-platform terminal compatibility**: Need for configurable TUI modes (e.g., alt-screen opt-out) to support legacy terminals like Terminal.app (Issue #2384).

---

### 6. Developer Pain Points

- **Session fragility**: Corrupted session files and inconsistent resume behavior degrade productivity.
- **Model visibility gaps**: Users cannot access or reliably switch beyond GPT-4.1, suggesting either API limitations or frontend filtering bugs.
- **Permission bypass risks**: Subagent tool execution ignores pre-use hooks—a critical oversight for multi-agent safety.
- **Plugin ecosystem friction**: Poor plugin discovery and installation from GitHub repos limits community contribution.
- **Platform-specific instability**: Windows crashes and macOS terminal quirks highlight insufficient cross-platform testing.
- **Lack of observability**: Missing dashboard URLs and truncated command outputs obscure important operational feedback.

--- 

*Generated by AI Technical Analyst · Source: github.com/github/copilot-cli*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

**Kimi Code CLI Community Digest – March 30, 2026**

---

### 1. **Today's Highlights**
No new releases were published in the last 24 hours. However, several notable bugs and enhancements emerged, including OAuth-related API key errors post-login, JetBrains ACP compatibility issues, and growing demand for granular auto-approval controls and improved agent collaboration modes. A new tracing visualizer enhancement also advanced, bringing richer debugging capabilities.

---

### 2. **Releases**
*No releases reported in the last 24 hours.*

---

### 3. **Hot Issues**  
*(Top 10 most relevant or impactful issues)*  

1. **[#1635] OAuth login followed by `/SKILL:KIMI-CLI-HELP` fails with "incorrect API KEY"**  
   *Impact:* Breaks core functionality after authentication; affects VS Code plugin users relying on built-in help.  
   *Reaction:* No reactions yet; flagged as urgent due to blocking workflow.

2. **[#1629] JetBrains AI Assistant integration fails with "ACP Not supported" error**  
   *Impact:* Hinders IDE ecosystem adoption; suggests incomplete ACP (Agent Communication Protocol) implementation.  
   *Reaction:* Reported by active user; likely impacts professional developer tooling workflows.

3. **[#1634] Request: Add Codex-style inline chat feature to Kimi Code**  
   *Impact:* Competitive feature gap vs. OpenAI’s offering; improves UX for interactive coding sessions.  
   *Reaction:* Simple request; signals market expectation alignment.

4. **[#1633] Feature Request: Agent Swarm / Teammates mode (not subagent)**  
   *Impact:* Enables multi-agent coordination—critical for complex task decomposition.  
   *Reaction:* Clear distinction made from existing subagent model; implies roadmap evolution.

5. **[#1632] Option to hide thinking content from terminal when using reasoning models**  
   *Impact:* Improves readability during long-running reasoning tasks; reduces noise.  
   *Reaction:* Practical UX improvement; low effort, high value.

6. **[#1631] Granular Auto-Approval Rules like Claude Code**  
   *Impact:* Allows selective trust of tools without enabling full YOLO mode; enhances safety control.  
   *Reaction:* Direct comparison to leading competitor; indicates feature parity pressure.

7. **[#1627] Linux input parsing broken in version 1.27.0**  
   *(CLOSED)*  
   *Impact:* Critical regression affecting Linux users; resolved within 24h.  
   *Status:* Closed—likely patched quickly.

8. **[#1630] PR #1630: Enhanced Tracing Visualizer with Network Access & `/vis` Command**  
   *(Included here due to high technical interest)*  
   *Impact:* Adds real-time debugging visibility into agent execution flow; supports LAN sharing.  
   *Progress:* Actively developed; integrates with `kimi web` behavior.

9. **[#1587] Shell Mode Output Injection & Persistent `cd`**  
   *Impact:* Improves context awareness by feeding shell history into LLM memory; fixes directory drift.  
   *Progress:* Merged updates; improves reliability of agent-environment interaction.

10. **[#1628] Refactor: Rename `extra_skills_dirs` → `skills_dirs` for clarity**  
    *(CLOSED)*  
    *Impact:* Corrects misleading parameter semantics; prevents configuration confusion.  
    *Status:* Resolved; improves maintainability.

> *GitHub Links*:  
> - [#1635](https://github.com/MoonshotAI/kimi-cli/issues/1635)  
> - [#1629](https://github.com/MoonshotAI/kimi-cli/issues/1629)  
> - [#1634](https://github.com/MoonshotAI/kimi-cli/issues/1634)  
> - [#1633](https://github.com/MoonshotAI/kimi-cli/issues/1633)  
> - [#1632](https://github.com/MoonshotAI/kimi-cli/issues/1632)  
> - [#1631](https://github.com/MoonshotAI/kimi-cli/issues/1631)  
> - [#1627](https://github.com/MoonshotAI/kimi-cli/issues/1627)  
> - [PR #1630](https://github.com/MoonshotAI/kimi-cli/pull/1630)  
> - [PR #1587](https://github.com/MoonshotAI/kimi-cli/pull/1587)  
> - [PR #1628](https://github.com/MoonshotAI/kimi-cli/pull/1628)

---

### 4. **Key PR Progress**  
*(Top 10 significant pull requests)*  

1. **PR #1630**: Adds network-accessible tracing visualizer (`/vis`) with LAN IP detection and event-rich display. Enables remote debugging of agent sessions.
2. **PR #1587**: Injects shell command output into conversation context as `<system-reminder>` messages; implements persistent working directory across sessions.
3. **PR #1628**: Renames misleadingly named config parameter from `extra_skills_dirs` to `skills_dirs` to reflect actual override behavior.
4. *(No other open PRs beyond these three in last 24h.)*

---

### 5. **Feature Request Trends**  
Developers are increasingly requesting:
- **Enhanced agent collaboration frameworks** (e.g., Agent Swarm vs. isolated subagents)
- **Granular safety/automation controls**, mirroring industry leaders like Claude Code
- **UX refinements** around thinking model output visibility and IDE integration polish
- **Competitive parity features**, especially inline chat interfaces akin to Codex/GPTs

These reflect a shift toward more sophisticated, production-grade agent orchestration and user experience maturity.

---

### 6. **Developer Pain Points**  
- **Authentication instability**: Post-OAuth token handling breaks expected CLI behaviors (#1635)
- **IDE integration gaps**: JetBrains ACP support is missing, limiting enterprise adoption (#1629)
- **Configuration clarity**: Misnamed parameters cause confusion about skill directory behavior (#1628)
- **Thinking model verbosity**: Real-time reasoning logs clutter terminals unnecessarily (#1632)

These recurring themes highlight areas where Kimi Code CLI lags behind competitors in robustness and usability—particularly in secure, integrated development environments.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

**OpenCode Community Digest – March 30, 2026**

---

### **Today's Highlights**  
OpenCode v1.3.5 is now available with critical fixes for async plugin hooks and improved GPT prompting. A major bug affecting token counting on Anthropic/Bedrock has been resolved in the latest patch. The community continues to push forward on MCP integration, session persistence, and TUI usability enhancements.

---

### **Releases**  
**v1.3.5** (Released)  
- Fixed async plugin hook handling to prevent race conditions  
- Refined GPT system prompt for minimalism and reduced file reference friction  

*No new releases reported for the past 24 hours.*

---

### **Hot Issues**  

1. **[#988] OAuth-based MCP Remote Setup** – *36 comments, 👍79*  
   Simplifying secure MCP server installation via OAuth 2.1 eliminates manual secret management. High demand for this UX improvement.

2. **[#12338] Claude Opus 4.6 Token Limit Bug** – *30 comments, 👍25*  
   Despite enabling "long context," sessions fail at ~200k tokens due to incorrect internal limits. Widely reported regression.

3. **[#3176] Git Abuse & Session Snapshots** – *15 comments, 👍5*  
   OpenCode performs `git add .` on large repos during snapshotting, consuming excessive disk and triggering anti-bot alerts.

4. **[#2656] Hotkey Toggle Between "Accept All" / "Approve Edits"** – *12 comments, 👍17*  
   Critical workflow gap: users need quick switching between bulk accept and selective approval modes mid-session.

5. **[#16499] Add `/fast` Mode Support for GPT-5.4** – *8 comments, 👍53*  
   Most upvoted request: expose OpenAI’s new fast reasoning mode directly within TUI controls.

6. **[#16077] Persistent Session Memory** – *8 comments, 👍1*  
   Enables continuity across CLI sessions by loading prior conversation state—ideal for long-running dev tasks.

7. **[#17982] Premature Prompt Loop After `finish=stop`** – *7 comments, 👍2*  
   Claude Opus 4.6 exits normally but triggers redundant prefill errors in subagent loops.

8. **[#15805] Hide Full Skill Content Display** – *6 comments, 👍0*  
   Reduces noise when skills load; only show tool description instead of full `SKILL.md`.

9. **[#18933] Desktop UI Flash/Blank Screen Regression** – *4 comments, 👍0*  
   Post-v1.3.0 desktop app becomes unusable on Linux Mint—sidebar works but content area vanishes.

10. **[#19696] Variant Selector Only Shows "Thinking"** – *2 comments, 👍9*  
    After upgrading to 1.3.4+, users can’t disable thinking variant or deselect it entirely.

---

### **Key PR Progress**  

1. **[#19970] Fix Windows Session Diff Data Loss** – Race condition fix via SQLite retry logic for FK constraint failures  
2. **[#19969] Preserve Start Time on Aborted Tools** – Fixes misleading zero-duration metrics for interrupted tool calls  
3. **[#18767] Mobile Touch Optimization** – Adaptive UI for touch devices without breaking desktop experience  
4. **[#15869] All-Projects Toggle in Session List** – Quick-switch between project-scoped and global sessions  
5. **[#19934] Auto-Extract GitHub Issue Prompts** – Eliminates need for `PROMPT` env var when issues are assigned  
6. **[#19609] Remove Hard Cap on AGENTS.md Template** – Allows unlimited-length agent instructions  
7. **[#19603] Restore Directory Tree in System Prompt** – Re-enables `<directories>` placeholder for git projects  
8. **[#19618] Show Specific MCP Tool Names in Permissions** – Fixes wildcard (`*`) display in permission prompts  
9. **[#19954] Use Roots Filter Instead of Time-Based** – Fixes truncated `/sessions` list in TUI for heavy subagent users  
10. **[#19963] Favicon Rendering for Projects** – Adds project-specific icons to desktop sidebar  

---

### **Feature Request Trends**  

- **MCP Integration Modernization**: OAuth-based setup (#988), subagent tool access (#16491), and GitLab Duo workflow hooks (#19958) dominate backend tooling discussions.  
- **TUI Usability**: Project-aware terminal titles (#19968), status indicators on avatars (#12077), and auto-complete fixes (#19152) highlight frontend friction.  
- **Session & Context Management**: Persistent memory (#16077), infinite compression loops (#19687), and token limit awareness (#12338) reflect growing complexity demands.  
- **Model Control Enhancements**: Native support for `/fast` mode (#16499) and per-model capability checks (#19966) signal desire for granular LLM control.  

---

### **Developer Pain Points**  

- **Token Accounting Errors**: Misreported usage on Anthropic/Bedrock inflates costs and confuses billing (#PR #19758 fixed).  
- **Subagent Tool Isolation**: Child agents spawned via Task tool lose MCP permissions despite registry visibility (#16491).  
- **Local Model Compatibility**: Models lacking `tool_call` support (e.g., older Ollama variants) silently fail without proper capability checks (#19966).  
- **Desktop Stability**: Post-v1.3.0 UI regressions cause blank screens on Linux/macOS (#18933, #19046).  
- **CLI/TUI Discrepancies**: TUI shows limited sessions vs. full CLI list (#16733), creating confusion about data scope.  

--- 

*Generated from [github.com/anomalyco/opencode](https://github.com/anomalyco/opencode)*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

**Qwen Code Community Digest – March 30, 2026**

---

### **1. Today's Highlights**  
The Qwen Code team released a nightly build (v0.13.1-nightly.20260330) focused on documentation cleanup and version bump. In parallel, several critical fixes landed for Windows shell command failures and permission dialog infinite loops in WebUI, addressing widespread user complaints. Additionally, new features like follow-up suggestions, cron-based session loops, and Markdown-for-Agents support were merged to enhance agentic workflows.

---

### **2. Releases**  
- **v0.13.1-nightly.20260330.070ec5b43**: Minor release with updated references from "Bailian" to "ModelStudio" in README files and version bump by @qwen-code-ci-bot ([PR #2716](https://github.com/QwenLM/qwen-code/pull/2716)).

*No stable release this cycle; focus remains on nightly improvements.*

---

### **3. Hot Issues**  

| Issue | Summary | Why It Matters |
|------|--------|----------------|
| [#2727](https://github.com/QwenLM/qwen-code/issues/2727) | Shell commands fail on Windows even when packages are installed | Blocks core functionality for Windows users relying on npm/npx scripts |
| [#2736](https://github.com/QwenLM/qwen-code/issues/2736) | CLI crashes due to malformed URL in config | Prevents any use of `qwen` command after installation |
| [#2740](https://github.com/QwenLM/qwen-code/issues/2740) | Freezes when running shell commands due to missing tree-sitter WASM | Critical stability issue affecting all shell tool usage |
| [#2735](https://github.com/QwenLM/qwen-code/issues/2735) | Cannot ask questions in planning mode | Breaks interactive workflow essential for multi-step tasks |
| [#2409](https://github.com/QwenLM/qwen-code/issues/2409) | Request: Subagent parity with Claude Code | Major feature gap limiting competitive utility vs. rivals |
| [#2447](https://github.com/QwenLM/qwen-code/issues/2447) | Need Skill Testing Framework (record, replay, assertions) | No way to validate hundreds of skills before PR merge |
| [#2359](https://github.com/QwenLM/qwen-code/issues/2359) | Lack of standalone binary builds (Node SEA) | Hinders deployment in headless/containerized environments |
| [#2040](https://github.com/QwenLM/qwen-code/issues/2040) | Project-level Insight reports needed | Current machine-level only limits project-specific analysis |
| [#252](https://github.com/QwenLM/qwen-code/issues/252) | Integrate with Kilo Code as provider | Enables broader IDE ecosystem interoperability |
| [#2724](https://github.com/QwenLM/qwen-code/issues/2724) | IntelliJ plugin fails with local Ollama models | Regression impacting JetBrains IDE users |

*Community sentiment: High frustration around instability on Windows and lack of production-ready packaging.*

---

### **4. Key PR Progress**  

| PR | Summary | Impact |
|----|--------|--------|
| [#2733](https://github.com/QwenLM/qwen-code/pull/2733) | Fix Git Bash path resolution for node-pty on Windows | Resolves #2727 — enables shell commands in WSL/Git Bash |
| [#2737](https://github.com/QwenLM/qwen-code/pull/2737) | Prevent thinking loop in default permission mode | Fixes UI freeze when user ignores permission prompts |
| [#2739](https://github.com/QwenLM/qwen-code/pull/2739) | Localize `/insight` report per user language | Addresses localization gap in reporting feature |
| [#2525](https://github.com/QwenLM/qwen-code/pull/2525) | Add follow-up suggestions (like Claude’s NES) | Improves post-task guidance and workflow continuity |
| [#2731](https://github.com/QwenLM/qwen-code/pull/2731) | Cron tools for in-session loop scheduling | Allows model to monitor long-running jobs autonomously |
| [#2734](https://github.com/QwenLM/qwen-code/pull/2734) | Support Markdown for Agents spec in WebFetch | Reduces token usage by ~80% on compatible sites |
| [#2593](https://github.com/QwenLM/qwen-code/pull/2593) | `/insight` support in VSCode companion | Brings rich reporting into IDE without terminal switch |
| [#2548](https://github.com/QwenLM/qwen-code/pull/2548) | Secondary picker for `/skills` slash command | Enhances UX by avoiding accidental skill execution |
| [#2687](https://github.com/QwenLM/qwen-code/pull/2687) | Enhanced `/review` with verification & PR comments | Adds false positive filtering and actionable feedback |
| [#2728](https://github.com/QwenLM/qwen-code/pull/2728) | Centralize IDE diff handling in CoreToolScheduler | Solves token waste and multi-edit bugs (#2702, #2709) |

*Ongoing momentum on UX polish, reliability, and agent capabilities.*

---

### **5. Feature Request Trends**  

- **Subagent System Parity with Claude Code** (#2409): Users demand full subagent functionality (plugins, markdown frontmatter, autonomy levels).
- **Skill Testing Infrastructure** (#2447): Urgent need for automated validation of hundreds of built-in skills.
- **Standalone Binary Distribution** (#2359): Many want Node-free deployment via static binaries or Docker images.
- **Project-Level Insights** (#2040): Move beyond machine-wide analysis to per-project codebase insights.
- **IDE Integration Depth**: Requests to support more editors (Kilo Code, deeper JetBrains integration).

*Top trend: Closing the gap with competing AI dev tools through richer agentic features.*

---

### **6. Developer Pain Points**  

- **Windows-Specific Tool Failures**: Shell commands, CLI startup, and file path handling remain unstable.
- **Lack of Packaging Options**: Absence of native executables limits CI/CD and remote development scenarios.
- **Permission Dialog Loops**: Default permission mode causes unresponsive UI if user doesn’t act.
- **No Skill Test Coverage**: Manual testing required for every skill change—no automated guardrails.
- **Local Model Support Gaps**: IntelliJ plugin misbehaves with self-hosted models like Ollama.

*Recommendation: Prioritize Windows stability, binary distribution, and skill test automation in next milestones.*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/DenisZheng/agents-radar).*