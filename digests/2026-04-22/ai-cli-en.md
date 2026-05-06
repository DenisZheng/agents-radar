# AI CLI Tools Community Digest 2026-04-22

> Generated: 2026-04-22 00:24 UTC | Tools covered: 8

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

**AI CLI Tools Ecosystem Cross-Comparison Report – April 22, 2026**

---

### **1. Ecosystem Overview**  
The AI CLI developer tool landscape is rapidly maturing, with major players—Claude Code, OpenAI Codex, Gemini CLI, Kimi Code CLI, OpenCode, Pi, and Qwen Code—focusing on stability, extensibility, and cross-platform parity. A dominant theme is improving agentic workflow reliability, particularly around subagent management, MCP integration, and sandboxed tool execution. Concurrently, widespread demand exists for better authentication flows, observability (e.g., streaming progress), and enterprise-grade configuration control. While some tools prioritize deep IDE integration (e.g., Copilot CLI’s ACP support), others emphasize local model compatibility or cloud provider breadth, reflecting divergent architectural strategies amid shared pain points in performance and UX consistency.

---

### **2. Activity Comparison**

| Tool               | Hot Issues (≥5 comments) | Key PRs (last 24h) | Release Status                     |
|--------------------|--------------------------|--------------------|------------------------------------|
| **Claude Code**     | 8                        | 4                  | v2.1.117 (stable)                  |
| **OpenAI Codex**   | 10                       | 10                 | Rust alphas (v0.123.0-alpha.7)     |
| **Gemini CLI**      | 10                       | 10                 | v0.39.0-preview.2 (preview)        |
| **Kimi Code CLI**   | 10                       | 10                 | No new release                     |
| **OpenCode**        | 10                       | 10                 | v1.14.20 (stable)                  |
| **Pi**              | 10                       | 10                 | v0.68.1 (patch)                    |
| **Qwen Code**       | 8                        | 10                 | v0.15.0-preview.1 (preview/nightly)|

*Note: All tools show high issue engagement (>2 comments avg), indicating active community scrutiny.*

---

### **3. Shared Feature Directions**

- **MCP & Remote Tool Integration**: Required by all tools (Codex, Pi, Kimi, OpenCode) for secure external tool orchestration.
- **Subagent System Parity**: Explicitly requested in Claude Code (#42776), Qwen Code (#2409), and implied in Gemini’s memory system refactor.
- **Authentication Simplification**: OpenCode and Qwen Code users demand CLI-guided auth flows instead of manual `settings.json` edits.
- **Cross-Platform Shell Consistency**: Windows/Linux/macOS gaps affect file ops, TUI rendering, and process cleanup (noted in Kimi, Pi, Gemini).
- **Streaming Observability**: Collapsed tool outputs (#51713 in Claude), flickering transcripts (#3371 in Pi), and missing thinking summaries (#49322) hinder debugging.
- **Local Model Support**: XML tool call parsing (Pi #3516), AWS Bedrock/SigV4 (Codex #17820), and Fireworks AI integration reflect push toward hybrid deployments.

---

### **4. Differentiation Analysis**

| Dimension          | Leading Tools                          | Differentiators                                                                 |
|--------------------|----------------------------------------|---------------------------------------------------------------------------------|
| **Target Users**   | Enterprise (Copilot CLI, Pi)           | Focus on org-scoped tokens, sandbox policies, and auditability                  |
| **Architecture**   | Local-first (Gemini, Pi)               | Async boot, deep merge configs, extension APIs for plugins                      |
| **Cloud Focus**    | Multi-provider (Pi, Codex)             | Native AWS Bedrock, Fireworks AI, Azure OpenAI support                          |
| **IDE Integration**| Standardized protocol (ACP)            | Copilot CLI (closed), Qwen Code (in-progress), Kimi (JetBrains errors)         |
| **Model Strategy** | Provider-agnostic (OpenCode, Pi)       | Built-in providers + OpenRouter compatibility                                    |
| **Stability Emphasis** | Rapid iteration (Codex alphas)      | Frequent Rust updates; aggressive alpha cadence                                |

---

### **5. Community Momentum & Maturity**

- **Most Active Communities**: **Pi** and **Qwen Code** lead with 10 concurrent high-priority issues/PRs, reflecting rapid iteration and strong developer feedback loops.
- **Rapid Iteration Signals**: 
  - **OpenAI Codex** pushes daily Rust alphas despite stability complaints.
  - **Gemini CLI** and **Kimi Code CLI** release multiple previews weekly to address regressions (e.g., duplicate agent init #25670).
  - **Pi**’s v0.68.1 hotfix for Bedrock regions shows responsive patching culture.
- **Maturity Indicators**: **Claude Code** and **OpenCode** maintain stable releases with focused fixes, suggesting stabilized core workflows but lagging on extensibility hooks.

---

### **6. Trend Signals**

- **Shift Toward Agentic Reliability**: Subagents, convergence detection (RalphFlow), and turn-limit transparency (#22323) signal maturity beyond simple chat interfaces.
- **Enterprise Readiness Gap**: Fine-grained token permissions (#223 in Copilot CLI) and execpolicy conflicts (#15298 in Codex) reveal unfinished compliance tooling.
- **Local Cloud Convergence**: Hybrid deployments (local models + cloud tools via MCP) are becoming baseline expectations, not differentiators.
- **UX Fragmentation Risk**: Inconsistent slash commands (`/focus` missing on Windows #51756), shell redirection (PowerShell vs. Bash #25769), and session resumption create friction across tools.
- **Developer Demand for Transparency**: Real-time token usage, model switching logs, and streaming progress bars (#1972 in Kimi) reflect need for observability in autonomous agents.

--- 

*Recommendation for Developers*: Prioritize tools with robust MCP support and clear extension APIs (e.g., Pi, OpenCode) if building integrations; opt for Claude Code or Copilot CLI for enterprise stability, but monitor authentication and quota handling closely.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

## Claude Code Skills Community Highlights Report  
*Data as of 2026-04-22*

---

### **Top Skills Ranking**  
Most-discussed community-submitted Skills by engagement:

1. **[skill-quality-analyzer & skill-security-analyzer](https://github.com/anthropics/skills/pull/83)** (PR #83)  
   *Comprehensive meta-tools for auditing Skill quality and security across structure, documentation, code hygiene, and permission scope.*  
   - First proposed Nov 2025; still open after 5+ months of refinement  
   - Sparked discussion about standardized evaluation frameworks for Skills

2. **[SAP-RPT-1-OSS predictor skill](https://github.com/anthropics/skills/pull/181)** (PR #181)  
   *Enables predictive analytics on SAP business data using SAP’s open-source tabular foundation model (Apache 2.0 licensed).*  
   - Targets enterprise AI integration use cases  
   - Demonstrates growing demand for domain-specific ML Skills

3. **[shodh-memory: persistent context system](https://github.com/anthropics/skills/pull/154)** (PR #154)  
   *Teaches Claude to maintain rich, structured memory across conversations via `proactive_context` calls—critical for agentic workflows.*  
   - Addresses core limitation in multi-turn agent continuity  
   - High interest from developers building autonomous agents

4. **[masonry-generate-image-and-videos](https://github.com/anthropics/skills/pull/335)** (PR #335)  
   *AI-powered image/video generation via Masonry CLI with support for Imagen 3.0 and Veo 3.1 models.*  
   - Reflects surge in multimodal content creation demand  
   - Includes job management and history tracking

5. **[frontend-design skill clarity improvements](https://github.com/anthropics/skills/pull/210)** (PR #210)  
   *Revised guidance for UI/UX design tasks to ensure actionable, single-conversation execution.*  
   - Focuses on improving Skill reliability over feature expansion

*(All listed PRs remain OPEN as of 2026-04-22)*

---

### **Community Demand Trends**  
Key unmet needs emerging from Issues & Discussions:

- **Enterprise Integration**: Direct org-wide skill sharing (Issue #228), Bedrock compatibility (Issue #29), and SSO-friendly tooling (#532)
- **Trust & Governance**: Secure distribution boundaries for community skills under official namespaces (Issue #492), audit trails for agent actions
- **Testing & Validation**: Automated Skill testing frameworks, trigger reliability fixes (`run_eval.py` 0% success rate – Issue #556)
- **Workflow Automation**: Persistent memory systems (#154), codebase audits (#147), and document conversion pipelines (ODT/HADS – PRs #486, #622)

---

### **High-Potential Pending Skills**  
Active, well-developed proposals likely to merge soon:

- **[testing-patterns](https://github.com/anthropics/skills/pull/723)** (PR #723): Full-stack testing guidance covering Testing Trophy, React Testing Library, AAA patterns  
- **[document-typography](https://github.com/anthropics/skills/pull/514)** (PR #514): Typographic QA for AI docs—fixes orphan lines, widows, numbering alignment  
- **[hads-convert](https://github.com/anthropics/skills/pull/622)** (PR #622): Universal document-to-HADS converter for technical specs  
- **[sensory (macOS automation)](https://github.com/anthropics/skills/pull/806)** (PR #806): Native AppleScript control bypassing screenshot limitations  

*(All updated within last month; minimal blockers reported)*

---

### **Skills Ecosystem Insight**  
The community is coalescing around **enterprise-grade agent orchestration**, demanding robust governance, persistent state, and secure integration—moving beyond single-task utilities toward full workflow autonomy.

---

**Claude Code Community Digest – April 22, 2026**

---

### **Today’s Highlights**
Claude Code released v2.1.117 with support for enabling forked subagents in external builds and improved `/model` persistence across restarts. Meanwhile, user-facing stability remains a top concern, with recurring reports of API timeouts, session corruption, and unexpected usage limit resets—particularly affecting macOS and Windows users on Max subscriptions.

---

### **Releases**

**v2.1.117**  
- Enabled `CLAUDE_CODE_FORK_SUBAGENT=1` to allow forked subagent execution in external builds  
- Added MCP server loading via frontmatter for `--agent` main-thread sessions  
- Enhanced `/model` selection persistence even when projects pin specific models  

[Release Notes](https://github.com/anthropics/claude-code/releases/tag/v2.1.117)

---

### **Hot Issues**

1. **[#16157](https://github.com/anthropics/claude-code/issues/16157)**: Max subscription users report instant hitting of weekly limits despite no visible usage—1452 comments, 681 👍. Indicates potential billing or quota miscalculation at scale.
2. **[#42796](https://github.com/anthropics/claude-code/issues/42796)** (Closed): Feb model updates broke complex engineering workflows—565 comments, 2049 👍. Highlights regression in agentic reasoning reliability.
3. **[#46987](https://github.com/anthropics/claude-code/issues/46987)**: Frequent “Stream idle timeout” errors on macOS/Anthropic API—108 comments, 97 👍. Suggests backend stream handling instability under load.
4. **[#42776](https://github.com/anthropics/claude-code/issues/42776)**: Windows Desktop fails to relaunch due to file locks—48 comments, 12 👍. Impacts workflow continuity for desktop users.
5. **[#49322](https://github.com/anthropics/claude-code/issues/49322)**: Opus 4.7 thinking summaries not rendering in VS Code—18 comments, 17 👍. Affects transparency into model reasoning.
6. **[#44657](https://github.com/anthropics/claude-code/issues/44657)**: Subagent Write tool blocks filenames like “report.md” without opt-out—4 comments, 8 👍. Seen as overly restrictive naming policy.
7. **[#51760](https://github.com/anthropics/claude-code/issues/51760)**: Background bash children survive session close, causing runaway output files up to 4.86 TB—2 comments. Severe resource leak on Windows.
8. **[#51713](https://github.com/anthropics/claude-code/issues/51713)**: MCP tool calls always collapsed—hides streaming progress during long operations. Limits observability.
9. **[#51767](https://github.com/anthropics/claude-code/issues/51767)**: Feature request for `SessionRenamed` hook event—1 comment. Desired for external integrations (e.g., tmux).
10. **[#51756](https://github.com/anthropics/claude-code/issues/51756)**: `/focus` command missing on Windows despite being documented—1 comment. Inconsistent cross-platform CLI parity.

---

### **Key PR Progress**

1. **[#41611](https://github.com/anthropics/claude-code/pull/41611)**: Adding missing source files to resolve build or runtime omissions.
2. **[#51452](https://github.com/anthropics/claude-code/pull/51452)**: Rewriting README.md for clarity and fixing broken npm badge—improves onboarding.
3. **[#51451](https://github.com/anthropics/claude-code/pull/51451)**: Strengthening security policy with HackerOne-only reporting path.
4. **[#51395](https://github.com/anthropics/claude-code/pull/51395)**: Internal GPS logging instrumentation (likely for debugging or telemetry).

*Note: Only 4 active PRs updated in the last 24h; most are documentation or internal infrastructure.*

---

### **Feature Request Trends**

- **Configurable UI/UX**: Custom color themes and input highlighting (#25366), LaTeX rendering (#44479)
- **Hook Events**: Session rename events for external system sync (#51767)
- **Tool Permissions**: Allow subagents to write standard report/summary filenames (#44657)
- **CLI Enhancements**: Cross-platform slash command consistency (e.g., `/focus` on Windows) (#51756)

Developers increasingly seek extensibility through hooks, better visibility into agent actions, and reduced friction in long-running workflows.

---

### **Developer Pain Points**

- **API Reliability**: Timeouts and partial responses disrupt iterative development—especially with streaming and MCP tools.
- **Platform Fragmentation**: Inconsistent behavior between macOS, Windows, and Linux in CLI commands, TUI rendering, and file handling.
- **Resource Management**: Uncontrolled background processes and unbounded output file growth cause system instability.
- **Billing Transparency**: Sudden usage resets and lack of real-time quota visibility frustrate power users.
- **Model Behavior Regression**: Post-update degradation in autonomous task completion reduces trust in agentic capabilities.

These issues reflect growing demands for stability, observability, and control as Claude Code evolves into a core development assistant.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

**OpenAI Codex Community Digest – April 22, 2026**

---

### 1. Today’s Highlights  
OpenAI continues its aggressive alpha cadence with six new Rust releases (v0.123.0-alpha.2 through -alpha.7), signaling active development ahead of a potential stable 0.123.0 launch. Meanwhile, the community is rallying around critical stability issues—particularly memory leaks in VS Code and persistent CPU spikes in the desktop app—while pushing forward on foundational infrastructure like remote MCP support and AWS Bedrock integration.

---

### 2. Releases  
**Rust v0.123.0-alpha.7** (and predecessors up to alpha.2) released. These incremental alphas suggest ongoing refinement toward the next major release, though no changelog details are provided in this snapshot. Expect continued focus on sandboxing, TUI polish, and backend transport layer improvements.

---

### 3. Hot Issues  

| # | Issue Summary | Why It Matters | Community Reaction |
|---|---------------|----------------|--------------------|
| [14593](https://github.com/openai/codex/issues/14593) | Token burn rate dramatically increased in recent versions | Users report rapid token depletion during normal usage; impacts cost-efficiency for Pro/Business tiers | **555 comments**, **234 👍**: Widespread concern about regression |
| [10450](https://github.com/openai/codex/issues/10450) | Missing remote development support in Codex Desktop App | Blocks teams using cloud-based workspaces or WSL environments | **148 comments**, **580 👍**: High demand for parity with VS Code Remote SSH |
| [18463](https://github.com/openai/codex/issues/18463) | Critical CPU usage spiking to 240% after repeated app reopen | Degrades performance on all platforms; makes multitasking impossible | **8 comments**, **2 👍**: Severe usability blocker reported by multiple users |
| [17257](https://github.com/openai/codex/issues/17257) | Memory leak in VS Code extension under "Extra High" context mode | Causes IDE slowdowns and crashes over long sessions | **6 comments**, **8 👍**: Confirmed by Pro users on macOS |
| [18881](https://github.com/openai/codex/issues/18881) | MCP child processes leaking in long-running daemon mode | Leads to resource exhaustion and instability | **3 comments**, **0 👍**: Technical severity high but low visibility |
| [11678](https://github.com/openai/codex/issues/11678) | CLI typing lag introduced in v0.100+ on Windows | Breaks interactive workflows for terminal-based automation | **17 comments**, **4 👍**: Regression affecting core UX |
| [18755](https://github.com/openai/codex/issues/18755) | Mac app crashes on older OS versions due to incorrect build targeting | Prevents adoption from users not on macOS 15+ | **8 comments**, **15 👍**: Packaging misalignment issue |
| [15298](https://github.com/openai/codex/issues/15298) | `default.rules` ignored even when execpolicy allows commands | Undermines security model expectations | **6 comments**, **6 👍**: Trust & safety implications |
| [18247](https://github.com/openai/codex/issues/18247) | Request for per-automation full permissions in sandbox | Enables advanced scripting use cases | **7 comments**, **0 👍**: Niche but requested by power users |
| [18853](https://github.com/openai/codex/issues/18853) | Git commit messages contain literal `\n` instead of newlines | Affects version control hygiene | **4 comments**, **0 👍**: Minor but annoying formatting bug |

---

### 4. Key PR Progress  

| # | Title | Impact |
|---|------|--------|
| [18584](https://github.com/openai/codex/pull/18584) | Wire remote streamable HTTP MCP | Enables secure, scalable remote tool integration |
| [18583](https://github.com/openai/codex/pull/18583) | Add executor-backed RMCP HTTP client | Decouples network logic from MCP orchestration |
| [17820](https://github.com/openai/codex/pull/17820) | AWS SigV4 auth for OpenAI-compatible providers | Expands compatibility with Bedrock/AOA endpoints |
| [18871](https://github.com/openai/codex/pull/18871) | Agent identity crate extraction | Improves modularity and testability of agent auth flow |
| [18446](https://github.com/openai/codex/pull/18446) | Reserve missing preserved paths in Linux sandbox | Fixes sandbox escape vulnerabilities |
| [18914](https://github.com/openai/codex/pull/18914) | Fix Windows paste burst interval regression | Restores consistent cross-platform input behavior |
| [18745](https://github.com/openai/codex/pull/18745) | Sticky thread environment selections | Allows persistent runtime configurations across turns |
| [18416](https://github.com/openai/codex/pull/18416) | Turn-scoped environment selections | Adds fine-grained control per interaction |
| [18284](https://github.com/openai/codex/pull/18284) | Sync session permission profiles | Ensures UI reflects actual runtime policy state |
| [18867](https://github.com/openai/codex/pull/18867) | Anchor relative deny globs in sandbox | Prevents path confusion across sessions |

---

### 5. Feature Request Trends  

- **Remote Development Support**: Top request (#10450) seeks native integration with WSL, SSH, or cloud-hosted dev environments.
- **Per-Automation Sandbox Policies**: Users want granular permission scoping for automations without affecting interactive threads (#16695).
- **Dotfile Visibility**: File viewers should surface `.agents`, `.codex`, and other hidden config folders for better discoverability (#18299).
- **AWS Provider Support**: First-class Bedrock/Mantle authentication via SigV4 enables enterprise hybrid-cloud deployments (#17820).
- **Context Management Improvements**: Clearer compaction controls and memory leak fixes dominate feedback around long-running sessions.

---

### 6. Developer Pain Points  

- **Performance Degradation**: Multiple reports of severe CPU/memory bloat in both desktop app and VS Code extension, especially under heavy context loads.
- **Platform-Specific Regressions**: Windows CLI input lag, macOS packaging mismatches, and Linux sandbox path handling show inconsistent cross-platform maintenance.
- **Sandbox Policy Confusion**: Developers struggle with how `default.rules`, execpolicy, and session overrides interact, leading to unexpected denials or security gaps.
- **MCP Reliability Issues**: Process leaks and stale tool registrations break automation pipelines, particularly in daemon or server contexts.
- **Lack of Transparency**: Minimal release notes and sparse documentation hinder debugging and upgrade planning.

--- 

*Generated from GitHub activity on openai/codex as of 2026-04-22.*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

**Gemini CLI Community Digest - 2026-04-22**

---

### 1. **Today's Highlights**

The Gemini CLI team released **v0.39.0-preview.2**, addressing a critical duplicate initialization bug that caused performance issues and streaming failures during agent reloads. This patch follows closely on v0.39.0-preview.1, which itself was a hotfix for path resolution in plan directories. Concurrently, significant community attention is focused on core stability issues, particularly excessive project scanning and PTY exhaustion on macOS, indicating growing concerns around resource efficiency and long-running session reliability.

---

### 2. **Releases**

**v0.39.0-preview.2** (2026-04-21)  
A maintenance release addressing a regression introduced in the previous preview. The primary fix resolves a duplicate call to `loadAgents` during agent refreshes (`/agents reload`), which was causing unnecessary overhead and breaking streaming functionality. This ensures smoother operation during configuration changes and improves overall CLI responsiveness.  
[Full Changelog](https://github.com/google-gemini/gemini-cli/releases/tag/v0.39.0-preview.2)

*Note: No new major features were added; this is a stabilization release.*

---

### 3. **Hot Issues**

1. **[#25672](https://github.com/google-gemini/gemini-cli/issues/25672): Excessive Project-Wide Scanning**  
   Users report that small Go file edits trigger full-project analysis, including loading the entire standard library and cgo files—severely impacting performance. This points to overly aggressive indexing logic.  
   *(6 comments, high impact)*

2. **[#25583](https://github.com/google-gemini/gemini-cli/issues/25583): PTY Master Device Exhaustion on macOS**  
   Long-running sessions in YOLO mode eventually hit macOS’s PTY limit (`kern.tty.ptmx_max = 511`), crashing all terminal sessions with "Device not configured." A systemic resource leak.  
   *(5 comments, critical for power users)*

3. **[#22323](https://github.com/google-gemini/gemini-cli/issues/22323): Subagent Misreporting GOAL Success After MAX_TURNS**  
   The `codebase_investigator` subagent incorrectly reports success even when it hits its turn limit, masking interruptions. This undermines trust in automated workflows.  
   *(3 comments, 👍2)*

4. **[#24916](https://github.com/google-gemini/gemini-cli/issues/24916): Repeated Permission Prompts for Same File**  
   Users must repeatedly grant access to identical files—suggesting flawed permission caching or state management in the security layer.  
   *(3 comments)*

5. **[#25166](https://github.com/google-gemini/gemini-cli/issues/25166): Shell Command Hangs with "Waiting Input"**  
   Simple commands complete but leave the CLI stuck waiting for user input, blocking further execution. Indicates broken shell process cleanup.  
   *(2 comments, 👍3)*

6. **[#23571](https://github.com/google-gemini/gemini-cli/issues/23571): Model Creates Spurious Temp Scripts**  
   Restricted shell access leads to scattered temporary scripts across directories, complicating workspace hygiene and cleanup. Suggests poor tool confinement.  
   *(2 comments)*

7. **[#22267](https://github.com/google-gemini/gemini-cli/issues/22267): Browser Agent Ignores settings.json Overrides**  
   Critical configuration like `maxTurns` is ignored by the Browser Agent, rendering project-level tuning ineffective. A major gap in configurability.  
   *(2 comments)*

8. **[#25216](https://github.com/google-gemini/gemini-cli/issues/25216): EISDIR Error on Temporary Path 'A:\'**  
   Launching in certain Windows environments fails due to illegal directory operations, likely related to path normalization or temp directory handling.  
   *(1 comment)*

9. **[#24202](https://github.com/google-gemini/gemini-cli/issues/24202): Text Scrambling After SSH Sessions**  
   Post-SSH text rendering corruption makes the CLI unusable—highlighting terminal emulation incompatibilities under SSH tunnels.  
   *(1 comment)*

10. **[#25218](https://github.com/google-gemini/gemini-cli/issues/25218): Streaming Table Rendering Glitches**  
    Tables re-render incrementally during streaming, corrupting screen reader output and visual layout. AUX accessibility concern.  
    *(0 comments, newly surfaced)*

---

### 4. **Key PR Progress**

1. **[#25716](https://github.com/google-gemini/gemini-cli/pull/25716): Refactor Memory Management**  
   Replaces slow `MemoryManagerAgent` with direct prompt-driven memory editing across four tiers, eliminating subagent latency and improving responsiveness.

2. **[#25775](https://github.com/google-gemini/gemini-cli/pull/25775): Add `/note` Slash Command**  
   Introduces `/note <text>` and `/note view` to capture timestamped workspace notes in `notes.md`, enhancing context retention without modifying code.

3. **[#25758](https://github.com/google-gemini/gemini-cli/pull/25758): Async Boot Optimization**  
   Fetches experiments and quota asynchronously during startup, drastically reducing CLI boot time by parallelizing network calls.

4. **[#25770](https://github.com/google-gemini/gemini-cli/pull/25770): Deep Merge for A2A Settings**  
   Fixes configuration override bugs by implementing immutable deep merge, ensuring nested settings (e.g., `fileFiltering`) aren’t accidentally overwritten.

5. **[#25720](https://github.com/google-gemini/gemini-cli/pull/25720): Enhanced Shell Validation**  
   Adds recursive validation for shell command sub-commands and introduces `tools.core` allowlist for granular policy control.

6. **[#25426](https://github.com/google-gemini/gemini-cli/pull/25426): CI Test Speed Boost via Bundling**  
   Revives artifact-centric CI pipeline, enabling pre-built bundle distribution and unlocking 16-core test parallelism for faster feedback loops.

7. **[#25339](https://github.com/google-gemini/gemini-cli/pull/25339): Fix Terminal UI Glitches**  
   Removes problematic background color from input fields to restore proper rendering in tmux and other true-color terminals.

8. **[#25409](https://github.com/google-gemini/gemini-cli/pull/25409): Wire Up ContextManager & AgentChatHistory**  
   Integrates new conversation persistence layer to improve state management across agent interactions.

9. **[#25769](https://github.com/google-gemini/gemini-cli/pull/25769): Windows Shell Interop**  
   Adds support for `&&`, `||`, and `/dev/null` redirection in PowerShell/CMD, closing cross-platform shell compatibility gaps.

10. **[#25670](https://github.com/google-gemini/gemini-cli/pull/25670): Fix Duplicate Agent Initialization**  
    Eliminates redundant `initialize()` calls during agent refresh, resolving performance degradation and streaming failures.

---

### 5. **Feature Request Trends**

- **Intelligent Codebase Navigation**: Multiple requests (e.g., #22745, #22746) advocate for AST-aware tools to precisely locate methods and reduce token noise during code search.
- **Robust Memory System**: Users want better memory routing between global/user vs. project-specific contexts (#22819) and proactive prompting to encourage memory writes (#22809).
- **Subagent Policy Awareness**: Agents should respect active approval modes (e.g., Plan vs. Auto-Edit) and avoid conflicting tool definitions (#23582).
- **Behavioral Evaluation Framework**: EPICs like #24353 call for standardized component-level evals to ensure agent reliability and safety.
- **Cross-Platform Consistency**: Requests for consistent shell behavior across OSes (#25769), especially Windows interoperability and SSH session handling (#24546).

---

### 6. **Developer Pain Points**

- **Performance Overhead**: Excessive scanning (#25672) and slow boot times (#25758) hinder productivity, especially in large workspaces.
- **Terminal Instability**: PTY leaks (#25583), SSH text corruption (#24202), and rendering glitches (#24470, #25218) break workflow continuity.
- **Configuration Fragility**: Settings overrides are inconsistently applied (Browser Agent ignoring `settings.json`), and permission prompts repeat unnecessarily.
- **Lack of Tool Confinement**: Models generate scattered temp files (#23571) and ignore safety constraints, risking workspace pollution.
- **Poor Observability**: Subagents hide interruptions (e.g., hitting `MAX_TURNS`) and fail to report rejections promptly, obscuring root causes.

--- 

*Generated automatically from GitHub activity for developers building with Gemini CLI.*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

**GitHub Copilot CLI Community Digest – April 22, 2026**

---

### 1. **Today's Highlights**
The CLI team released v1.0.35-2 with improved auto-mode resilience and HTTP hook support in v1.0.35-0. A surge of user reports indicates growing instability around Claude Opus 4.6/4.5 model access, prompting urgent attention from maintainers. Community momentum continues behind ACP integration (#222) and shell completion requests (#334).

---

### 2. **Releases**

**v1.0.35-2**  
- Added `continueOnAutoMode` config to auto-switch models on rate limits instead of pausing  
- Fixed auto-mode failures when switching to models lacking configured reasoning effort  
- Resolved partial breakage in pattern-specific instruction file handling  

**v1.0.35-1** *(Pre-release)*  
**v1.0.35-0**  
- Introduced HTTP hook support for posting JSON payloads to external URLs  
- Enhanced `grep`/`glob` tools to accept multiple search paths  
- Hidden subagent thinking from timeline; fixed custom agent name visibility in status line  

---

### 3. **Hot Issues**

| # | Title | Why It Matters | Community Response |
|---|-------|----------------|--------------------|
| [222](https://github.com/github/copilot-cli/issues/222) | **ACP Support** | Enables IDE/text editor AI agent integrations via open protocol | ✅ Closed after implementation; 146 👍 |
| [223](https://github.com/github/copilot-cli/issues/223) | **Fine-grained token permissions missing for org tokens** | Critical for enterprise security compliance | 65 👍, active discussion on org-level PAT controls |
| [2625](https://github.com/github/copilot-cli/issues/2625) | **Poor terminal rendering performance** | Degrades UX during long conversations; causes unresponsiveness | 3 👍, widespread frustration reported |
| [2873](https://github.com/github/copilot-cli/issues/2873) | **Lost Opus model access despite Pro subscription** | Sudden regression affecting paying users | New issue (4 👍), urgent triage needed |
| [2867](https://github.com/github/copilot-cli/issues/2867) | **Opus 4.6 returns "model not supported" post-quota reset** | Suggests quota system may permanently block model | 1 👍, linked to rate-limiting logic |
| [334](https://github.com/github/copilot-cli/issues/334) | **Shell completions support** | Standard expectation for modern CLIs; improves discoverability | 11 👍, high engagement |
| [2078](https://github.com/github/copilot-cli/issues/2078) | **Add `/btw` command** | Lightweight conversational utility like `/gpt` or `/todo` | 26 👍, simple but highly requested |
| [2870](https://github.com/github/copilot-cli/issues/2870) | **Auto-mode fails due to reasoning level mismatch** | Auto-switching broke after model update | Just closed—likely resolved |
| [2753](https://github.com/github/copilot-cli/issues/2753) | **Plugin skills not injected into agent prompt** | Breaks extensibility; only builtin skills visible | Technical deep dive required |
| [2885](https://github.com/github/copilot-cli/issues/2885) | **`/ask` should not prompt for follow-up** | Misleading behavior: `/ask` is single-turn but asks for input | New, nuanced UX concern |

---

### 4. **Key PR Progress**

| # | Summary | Impact |
|---|---------|--------|
| [2887](https://github.com/github/copilot-cli/pull/2887) | Safe cleanup of stale direct-install binaries | Prevents accumulation of orphaned CLI copies across reinstalls |
| [2800](https://github.com/github/copilot-cli/pull/2800) | Initial devcontainer configuration | Accelerates onboarding for contributors and local dev setups |

*(Note: Only 2 PRs updated in last 24h; both are foundational infrastructure improvements.)*

---

### 5. **Feature Request Trends**

- **IDE/Editor Integration**: ACP adoption signals shift toward standardized AI agent communication.
- **Model Management**: Users demand better control over reasoning levels, quotas, and fallback behaviors.
- **CLI Modernization**: Shell completions, slash commands (`/btw`), and inline feedback workflows are top UX priorities.
- **Enterprise Readiness**: Fine-grained token permissions and org-scoped auth are critical for corporate adoption.
- **Extensibility**: Plugin skill injection and MCP tool integration remain unresolved pain points.

---

### 6. **Developer Pain Points**

- **Model Availability Instability**: Multiple reports (#2661, #2873, #2878) indicate sudden loss of access to Opus models despite valid subscriptions—suggesting backend entitlement checks or API changes not reflected in CLI.
- **Terminal Performance Degradation**: Long-running sessions suffer severe lag/hang times (#2625), disrupting flow.
- **Non-Interactive Mode Limitations**: MCP sampling fails silently in `-p` mode even with `--allow-all`, breaking automation scripts (#2882).
- **Configuration Fragmentation**: Lack of user-level hook config (#2875) and inconsistent theming (#2830) hinder personalization.
- **Error Obfuscation**: Generic “model not supported” errors (#2867) lack actionable diagnostics.

--- 

*Generated automatically by GitHub Copilot CLI Community Bot.*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

**Kimi Code CLI Community Digest - 2026-04-22**

### 1. Today's Highlights
The community continues to focus on stability and UX improvements, with several critical bug fixes addressing terminal hangs and authentication issues. A new RalphFlow architecture is being introduced for better agent iteration control. Voice input support emerges as a top feature request.

### 2. Releases
*No new releases in the last 24 hours*

### 3. Hot Issues

**[#1984](https://github.com/MoonshotAI/kimi-cli/issues/1984)** - Terminal hang on exit causing session termination problems. Users report sessions becoming unresponsive when exiting, requiring force-closure. This impacts workflow continuity significantly.

**[#1975](https://github.com/MoonshotAI/kimi-cli/issues/1975)** - Kosong's Anthropic provider violating API spec by splitting parallel tool_results into multiple user messages. This breaks expected behavior and creates compatibility issues with Claude Code patterns.

**[#1961](https://github.com/MoonshotAI/kimi-cli/issues/1961)** - Windows login failure when selecting Kimi Code option. Users encounter upload errors during authentication, blocking access on Windows platforms.

**[#1960](https://github.com/MoonshotAI/kimi-cli/issues/1960)** - RalphFlow architecture introduces ephemeral context and convergence detection for preventing infinite loops in multi-step workflows. This addresses core agent reliability concerns.

**[#1934](https://github.com/MoonshotAI/kimi-cli/issues/1934)** - Voice input mode requested for hands-free interaction. Users want voice support similar to Claude Code for brainstorming and long prompts.

**[#1925](https://github.com/MoonshotAI/kimi-cli/issues/1925)** - K2.6 model regression causing increased hallucinations and loss of personality compared to K2.5. Users strongly prefer reverting to previous system prompt behavior.

**[#1967](https://github.com/MoonshotAI/kimi-cli/issues/1967)** - JetBrains integration failing with ACP process initialization errors. This affects IDE plugin functionality and developer experience.

**[#1965](https://github.com/MoonshotAI/kimi-cli/issues/1965)** - WSL2 Tmux character display issues at screen edges. Visual artifacts disrupt terminal usability in common development environments.

**[#1969](https://github.com/MoonshotAI/kimi-cli/issues/1969)** - Windows installation failures due to Python's os.replace() limitations. Atomic file operations fail on Windows, breaking CLI installation process.

**[#1560](https://github.com/MoonshotAI/kimi-cli/issues/1560)** - VSCode skill interaction optimization needed. Users want Tab completion behavior to match CLI patterns rather than immediately executing skills.

### 4. Key PR Progress

**[#1985](https://github.com/MoonshotAI/kimi-cli/pull/1985)** - Fixes terminal hang on exit by implementing proper MCP connection cleanup and non-blocking TTY handling, directly addressing #1984.

**[#1978](https://github.com/MoonshotAI/kimi-cli/pull/1978)** - Merges parallel tool_results into single user messages per Anthropic API spec, fixing structural compatibility issues in kosong's chat provider.

**[#1960](https://github.com/MoonshotAI/kimi-cli/pull/1960)** - Introduces RalphFlow architecture with ephemeral context and convergence detection for robust multi-step agent workflows.

**[#1972](https://github.com/MoonshotAI/kimi-cli/pull/1972)** - Adds visual progress bar with color coding replacing plain-text context indicators, improving UI clarity and matching popular plugins like claude-hud.

**[#1979](https://github.com/MoonshotAI/kimi-cli/pull/1979)** - Improves approval cancellation feedback display, fixing misleading "Rejected by user" timeout messages.

**[#1963](https://github.com/MoonshotAI/kimi-cli/pull/1963)** - Enables PreToolUse hooks to modify tool arguments via updatedInput, adding flexibility for custom tool processing.

**[#1935](https://github.com/MoonshotAI/kimi-cli/pull/1935)** - Adds updatedInput support for transparent command rewriting in PreToolUse hooks, expanding hook capabilities.

**[#1832](https://github.com/MoonshotAI/kimi-cli/pull/1832)** - Fixes UserPromptSubmit hook losing prompt data when user_input contains list[ContentPart], restoring hook functionality.

**[#1784](https://github.com/MoonshotAI/kimi-cli/pull/1784)** - Adds AWS Bedrock Mantle platform support to /login flow, expanding cloud provider options.

**[#1957](https://github.com/MoonshotAI/kimi-cli/pull/1957)** - Fixes list_sessions returning empty results without cwd parameter, restoring session history functionality in editors like Zed.

### 5. Feature Request Trends

- **Voice input support** - Hands-free interaction for brainstorming and long prompts
- **Customizable themes** - Support for terminal color schemes beyond binary dark/light
- **Remote control capabilities** - Enhanced agent autonomy and control features  
- **Skill interaction improvements** - Better Tab completion and selection behavior
- **Vendor directory indexing** - Ability to index files in vendor directories
- **Enhanced authentication flows** - Better OAuth and external provider support

### 6. Developer Pain Points

- **Terminal instability** - Hanging on exit and connection leaks disrupting workflows
- **Model regression issues** - K2.6 introducing more hallucinations than K2.5
- **Platform-specific bugs** - Windows installation and login failures
- **IDE integration problems** - JetBrains and VSCode extension issues
- **Authentication complexity** - Subagent OAuth failures and external provider support gaps
- **Visual display issues** - Character corruption in WSL2/Tmux environments
- **Hook functionality gaps** - Missing prompt data and limited modification capabilities

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

**OpenCode Community Digest – 2026-04-22**

---

### **Today's Highlights**
The OpenCode community saw the release of **v1.14.20**, which includes a fix for system theme regression in the TUI and improved Windows dynamic imports. A critical issue with **Copilot Opus 4.6** not supporting assistant message prefill has drawn significant attention, with 60 comments and 23 upvotes, indicating widespread impact on users relying on this model. Several high-priority PRs are progressing toward stabilizing core tooling and enhancing plugin extensibility.

---

### **Releases**
- **v1.14.20**: Fixed system theme regression in TUI; added `GET /config` to experimental HTTP API; resolved local dynamic import issues on Windows under Node.js, improving plugin/tool loading reliability.

---

### **Hot Issues**
1. **[#13768](https://github.com/anomalyco/opencode/issues/13768)** – Copilot Opus 4.6 lacks assistant message prefill support, breaking conversation flow unless ended by user. High engagement (60 comments, 23 👍) reflects urgent need for compatibility.
2. **[#13984](https://github.com/anomalyco/opencode/issues/13984)** – Clipboard copy/paste fails in CLI despite visual feedback. Users report no functional workaround; affects basic interactivity.
3. **[#14194](https://github.com/anomalyco/opencode/issues/14194)** – Concurrent local + Docker usage corrupts SQLite DB due to shared config directories. Critical for containerized workflows.
4. **[#17516](https://github.com/anomalyco/opencode/issues/17516)** – `opencode run` hangs after tool execution completes, requiring manual kill. Blocks automation pipelines.
5. **[#23599](https://github.com/anomalyco/opencode/issues/23599)** – System theme no longer passes through terminal colors post-update. Reverted by some users to v1.14.18.
6. **[#22100](https://github.com/anomalyco/opencode/issues/22100)** – Concern over insecure `pip3` usage with permissive configs. Raises security awareness around TUI package management.
7. **[#23658](https://github.com/anomalyco/opencode/issues/23658)** – Terminal background turns white after upgrade to v1.14.19 on macOS. Directly tied to recent theme changes.
8. **[#23704](https://github.com/anomalyco/opencode/issues/23704)** – xAI/Grok via OpenRouter rejects schemas with `additionalProperties: false`. Breaks tool calling for these models.
9. **[#19548](https://github.com/anomalyco/opencode/issues/19548)** – Stale assistant text replays into later prompts, corrupting context in TUI sessions.
10. **[#20510](https://github.com/anomalyco/opencode/issues/20510)** – Agents from `.agents/` folder fail to load, disrupting agent-driven workflows.

---

### **Key PR Progress**
1. **[#12042](https://github.com/anomalyco/opencode/pull/12042)** – Introduces SDK v2 alongside legacy v1 to ease plugin migration and prevent breaking changes.
2. **[#23768](https://github.com/anomalyco/opencode/pull/23768)** – Fixes icon override logic in project edit dialog, resolving display inconsistencies.
3. **[#23766](https://github.com/anomalyco/opencode/pull/23766)** – Disables problematic tool streaming for Anthropic-backed providers to avoid gateway errors.
4. **[#18306](https://github.com/anomalyco/opencode/pull/18306)** – Adds Open WebUI provider support, expanding LLM backend options.
5. **[#22612](https://github.com/anomalyco/opencode/pull/22612)** – Handles chat tool call IDs correctly for Kimi/NVIDIA models, fixing integration gaps.
6. **[#21343](https://github.com/anomalyco/opencode/pull/21343)** – Prevents unwanted scroll snap during LLM streaming, improving readability.
7. **[#21347](https://github.com/anomalyco/opencode/pull/21347)** – Ensures bash tool sees standard PATH dirs on macOS, fixing command failures.
8. **[#21349](https://github.com/anomalyco/opencode/pull/21349)** – Allows forking from AI messages, enabling richer session branching.
9. **[#23760](https://github.com/anomalyco/opencode/pull/23760)** – Adds interactive terminal tool with persistent PTY sessions for advanced agent control.
10. **[#23612](https://github.com/anomalyco/opencode/pull/23612)** – Fixes Roslyn LSP sync range and workspace symbol queries, stabilizing C# tooling.

---

### **Feature Request Trends**
- **Kimi K2.6 Integration** (#22408): Strong demand (18 👍) to add support for new Kimi reasoning models.
- **Flatpak Desktop App** (#5651): Long-standing request (29 👍) for Linux packaging beyond deb/rpm.
- **Voice/Dictation Plugins** (#17425): Repeated calls for voice input via plugins, citing accessibility and usability benefits.
- **Configurable Sidebar Width** (#6087): UX improvement to adapt layout across terminal sizes.
- **Azure OpenAI Resource Support** (#23598): Enterprise users seek better Azure cloud integration.

---

### **Developer Pain Points**
- **Model Compatibility**: Multiple reports of streaming truncation (#15774), schema mismatches (#23704), and missing features (e.g., Opus 4.6 prefill #13768).
- **CLI Stability**: Copy/paste failure (#13984), hanging processes (`opencode run` #17516), and upgrade/auth issues (#23434).
- **Cross-Platform Consistency**: Theme regressions (#23599), path handling (#21347), and Docker/local conflicts (#14194).
- **Security & Permissions**: Concerns about managed settings bypass (#22292) and arbitrary `pip` execution (#22100).
- **Plugin Ecosystem Maturity**: Gaps in SDK (#12042), voice input (#17425), and agent loading (#20510) hinder extension adoption.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

Here is the Pi community digest for 2026-04-22.

---

### **Today's Highlights**

The Pi development community has seen the release of v0.68.1, introducing Fireworks AI as a first-class provider with built-in models and dedicated authentication. A significant regression in v0.68.0 that broke non-US East Bedrock regions has been identified and is under active investigation, highlighting a key area of focus. The community is also actively discussing the need to support programmatic tool calling and better integration between extensions, indicating major upcoming architectural improvements.

### **Releases**

*   **v0.68.1**: This patch introduces support for the Fireworks AI provider, complete with built-in models and authentication via the `FIREWORKS_API_KEY` environment variable. It also adds a new configurable setting, `terminal.imageWidthCells`, for customizing the width of inline images within the terminal. For more details, see the [README.md#providers--models](README.md#providers--models) and [docs/providers.md](docs/providers.md).

### **Hot Issues**

1.  **[v0.68.0 `cache_control` broke Firepass endpoint (#3498)](https://github.com/badlogic/pi-mono/issues/3498)**: A critical regression in v0.68.0 added `cache_control` to Anthropic requests, which inadvertently broke compatibility with providers like Fireworks AI that do not accept this field. This directly led to the release of v0.68.1.
2.  **[Bedrock provider forces us-east-1, breaking other regions (#3481)](https://github.com/badlogic/pi-mono/issues/3481)**: Users report that the Bedrock provider now incorrectly defaults to the `us-east-1` endpoint, causing authentication failures for tokens scoped to other regions like `us-west-2`. This is a high-priority bug affecting a core AWS integration.
3.  **[Parallel tool calls stuck pending until slowest finishes (#3503)](https://github.com/badlogic/pi-mono/issues/3503)**: When multiple tools are invoked simultaneously, each call remains in a "pending" state until the slowest one completes, creating a poor user experience and UI flicker. This is a significant UX blocker for workflows relying on concurrent operations.
4.  **[Streaming transcript flickers and history disappears (#3371)](https://github.com/badlogic/pi-mono/issues/3371)**: During long markdown outputs, the streaming transcript visibly flickers and loses its scroll history, making it difficult to follow the conversation flow. This is a notable rendering issue impacting readability.
5.  **[Recursive settings look-up (#2514)](https://github.com/badlogic/pi-mono/issues/2514)**: A feature request to allow extensions to inherit and resolve settings from parent configurations, improving modularity and reducing configuration duplication across different agent setups.
6.  **[Programmatic tool calling (#3497)](https://github.com/badlogic/pi-mono/issues/3497)**: Developers want to be able to invoke tools (and slash commands) from other extensions programmatically, enabling richer integrations and composable "tool frontends" like a command palette.
7.  **[Qwen3.6 `preserve_thinking` still fails (#3479)](https://github.com/badlogic/pi-mono/issues/3479)**: Users continue to experience issues with Qwen3.6's thinking mode, where the model fails to maintain context or remember previous information, despite fixes in other environments.
8.  **[Fuzzy find doesn't follow symlinks (#3507)](https://github.com/badlogic/pi-mono/issues/3507)**: The file search functionality ignores symbolic links, preventing users from easily navigating projects that rely on symlinked directories. This is a common frustration for developers working with complex project structures.
9.  **[Crash in pi-tui caused by `this.text.trim is not a function` (#3480)](https://github.com/badlogic/pi-mono/issues/3480)**: A runtime crash occurs in the text component when handling certain inputs, likely due to a type error where `text` is not a string. This affects local model usage and requires a fix in the TUI rendering logic.
10. **[Scroll position jumps to top on window resize (Windows Terminal) (#3406)](https://github.com/badlogic/pi-mono/issues/3406)**: Resizing the Windows Terminal window causes the chat history scroll position to jump unexpectedly to the top, disrupting the user's place in the conversation. This is a platform-specific UI annoyance.

### **Key PR Progress**

1.  **[feat(tui,coding-agent): add registerMentionProvider extension API (#3517)](https://github.com/badlogic/pi-mono/pull/3517)**: Introduces a new API for extensions to provide custom completion sources for the `@` mention syntax, enhancing editor integration and discoverability.
2.  **[Resilient dispatcher - support XML-style tool calls from local models (#3516)](https://github.com/badlogic/pi-mono/pull/3516)**: Adds support for parsing and executing XML-style tool calls emitted by local proxy models (e.g., Qwen), fixing a major gap in local agent functionality.
3.  **[feat(ai): add Claude 4.7 full family support (#3499)](https://github.com/badlogic/pi-mono/pull/3499)**: Implements comprehensive support for the new Claude Sonnet 4.7 and Haiku 4.7 models, including guardrails for their unique parameter requirements (e.g., rejecting temperature).
4.  **[feat(coding-agent): add images.maxWidthCells setting (#3492)](https://github.com/badlogic/pi-mono/pull/3492)**: Allows users to configure the maximum width of inline images displayed in the terminal, addressing a common feedback point for better image visibility.
5.  **[fix(typebox): migrate to v1 with extension compat (#3474)](https://github.com/badlogic/pi-mono/pull/3474)**: Migrates the internal schema validation library from AJV to TypeBox 1.x, improving performance and maintainability while ensuring backward compatibility for existing extensions.
6.  **[Apply model switches to the next queued request (#2713)](https://github.com/badlogic/pi-mono/pull/2713)**: Changes the behavior of mid-conversation model switching so that changes apply to the next queued request rather than the current one, providing a more intuitive and predictable user experience.
7.  **[fix(anthropic): harden tool-call streaming and recovery (#3229)](https://github.com/badlogic/pi-mono/pull/3229)**: Improves the robustness of streaming responses from Anthropic models, adding fallbacks for failed streams and aligning closer to the behavior of competing tools like Claude Code.
8.  **[Add kimi-coding K2.6 model (#3477)](https://github.com/badlogic/pi-mono/pull/3477)**: Integrates the new Kimi K2.6 reasoning model into the built-in provider, expanding the range of available powerful reasoning agents.
9.  **[feat(extensions): add paper-audit MVP (#3505)](https://github.com/badlogic/pi-mono/pull/3505)**: Adds a new extension for academic paper auditing, demonstrating the extensibility of the coding agent platform.
10. **[docs(coding-agent): fix promptGuidelines examples (#3489)](https://github.com/badlogic/pi-mono/pull/3489)**: Corrects documentation examples for `promptGuidelines` to explicitly name tools, preventing confusion for agents trying to use mentioned tools.

### **Feature Request Trends**

*   **Programmatic Tool Integration:** A strong trend is emerging around allowing extensions to interact with tools programmatically. This includes invoking tools from other extensions and building higher-level "tool frontends" like command palettes, aiming for greater composability.
*   **Improved Local Model Support:** There is consistent demand for better integration and tool execution capabilities for locally hosted models, particularly concerning XML-style tool call parsing and resolving issues with models like Qwen.
*   **Enhanced Settings & Configuration:** Requests for features like recursive settings lookup and path expansion (`~`, `$HOME`) in `settings.json` indicate a desire for more flexible and powerful configuration management.
*   **UI/UX Refinements:** Several recurring pain points relate to the terminal UI, including issues with scroll position preservation during resizes, flickering during streaming, and the display width of inline images.

### **Developer Pain Points**

*   **Provider Compatibility Regressions:** The recent v0.68.0 release introduced a critical regression that broke non-AWS US East Bedrock providers, highlighting the challenge of maintaining broad compatibility across diverse LLM providers.
*   **Tool Execution Reliability:** Issues with parallel tool calls getting stuck and bash tools misreporting exit codes (e.g., `grep`, `diff`, `test`) represent significant pain points for developers relying on complex tool workflows.
*   **Local Development Friction:** Crashes related to local model interactions (e.g., `this.text.trim is not a function`) and difficulties with symlink handling in fuzzy find create friction for developers using Pi as a local coding assistant.
*   **Configuration Complexity:** While powerful, the current settings system can be rigid, leading to requests for features like recursive settings inheritance and path expansion to simplify multi-machine or complex project setups.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

**Qwen Code Community Digest – 2026-04-22**

---

### **Today's Highlights**
The Qwen Code team released `v0.15.0-preview.1`, introducing refined ACP hooks support and UX improvements for compact mode. A surge in authentication errors (401) across CLI and VSCode extensions indicates ongoing stability concerns, prompting multiple bug reports and fixes. The community is actively pushing for better subagent parity with Claude Code and improved Chinese-localized tooling.

---

### **Releases**

#### **[v0.15.0-preview.1](https://github.com/QwenLM/qwen-code/releases/tag/v0.15.0-preview.1)**
- Adds complete hooks support for ACP integration.
- Optimizes compact mode UX with shortcuts, settings sync, and safety enhancements.
- Introduces HTTP hook functionality (incomplete summary).

#### **[v0.14.5-nightly.20260422.d1c8dff4d](https://github.com/QwenLM/qwen-code/releases/tag/v0.14.5-nightly.20260422.d1c8dff4d)**
- Includes same core changes as above preview release.

---

### **Hot Issues**

| Issue | Summary | Impact |
|------|--------|--------|
| [#2409](https://github.com/QwenLM/qwen-code/issues/2409) *(CLOSED)* | Request to bring subagent system to feature parity with Claude Code (currently ~40–45% implemented). | High interest: 👍3; signals roadmap priority for agentic workflows. |
| [#3496](https://github.com/QwenLM/qwen-code/issues/3496) *(OPEN)* | User asks for domestic Chinese search API compatibility (e.g., Alibaba Bailing, Zhipu GLM) after free webSearch was discontinued. | Reflects localization need in China; PR #3502 already proposes GLM web search integration. |
| [#2427](https://github.com/QwenLM/qwen-code/issues/2427) *(CLOSED)* | Frustration over manual API key setup via `settings.json` instead of CLI-guided flow like OpenCode. | 👍1; highlights UX friction in auth experience. |
| [#3501](https://github.com/QwenLM/qwen-code/issues/3501) *(OPEN)* | Persistent "Internal error: 401 invalid access token or token expired" during login. | Critical auth regression affecting new users. |
| [#2134](https://github.com/QwenLM/qwen-code/issues/2134) *(CLOSED)* | VS Code extension lacks full auth method parity with CLI (only supports OAuth vs. CLI’s richer options). | Suggests future work on IDE-auth unification. |
| [#3049](https://github.com/QwenLM/qwen-code/issues/3049) *(CLOSED)* | WriteFile tool fails silently when creating large HTML files due to missing `file_path` param after truncation. | Tool reliability issue impacting file operations. |
| [#3464](https://github.com/QwenLM/qwen-code/issues/3464) *(OPEN)* | Third-party models (e.g., GLM-5/5.1) exhibit severe performance degradation ("降智") compared to Qwen-native models. | Indicates model-specific tuning gaps or prompt injection artifacts. |
| [#945](https://github.com/QwenLM/qwen-code/issues/945) *(OPEN)* | How to disable thinking mode via `"chat_template_kwargs": {"enable_thinking": false}`? | Shows confusion around advanced model configuration. |
| [#3483](https://github.com/QwenLM/qwen-code/issues/3483) *(CLOSED)* | Auth error + ACP process crashes on startup (SIGTERM). | Blocks core functionality; likely related to token refresh logic. |
| [#3447](https://github.com/QwenLM/qwen-code/issues/3447) *(OPEN)* | Context window not auto-compressing during long tasks, causing slowdowns and lag. | Impacts usability in extended coding sessions. |

---

### **Key PR Progress**

| PR | Summary |
|----|--------|
| [#3508](https://github.com/QwenLM/qwen-code/pull/3508) *(OPEN)* | Caps inline shell output at configurable line limit to prevent terminal viewport overflow from long logs. |
| [#3455](https://github.com/QwenLM/qwen-code/pull/3455) *(OPEN)* | Offloads `@`-picker file indexing to worker threads to eliminate UI freezes in large repos. |
| [#3502](https://github.com/QwenLM/qwen-code/pull/3502) *(OPEN)* | Adds ZhipuAI (GLM) web search provider to address domestic API demand (#3496). |
| [#3499](https://github.com/QwenLM/qwen-code/pull/3499) *(CLOSED)* | Fixes null content serialization in reasoning-only responses to avoid downstream 400 errors. |
| [#3505](https://github.com/QwenLM/qwen-code/pull/3505) *(OPEN)* | Rejects truncated `write_file` calls early to avoid misleading parameter errors. |
| [#3494](https://github.com/QwenLM/qwen-code/pull/3494) *(OPEN)* | Implements Python SDK foundation per #3010 request. |
| [#3377](https://github.com/QwenLM/qwen-code/pull/3377) *(OPEN)* | Expands slash commands to support non-interactive & ACP modes (Phase 2 of refactor). |
| [#3471](https://github.com/QwenLM/qwen-code/pull/3471) *(OPEN)* | Adds model-facing controls for subagents: stop, message send, live transcript access. |
| [#3214](https://github.com/QwenLM/qwen-code/pull/3214) *(OPEN)* | Replaces slow fdir crawler with `git ls-files` + `ripgrep` for faster file mention autocomplete. |
| [#3318](https://github.com/QwenLM/qwen-code/pull/3318) *(OPEN)* | Preconnects API endpoint on startup to reduce first-call latency by 100–200ms. |

---

### **Feature Request Trends**

- **Subagent System Parity**: Strong demand to match Claude Code’s subagent capabilities (Issue #2409).
- **Authentication Simplification**: Users want CLI-guided API key setup and VS Code auth unification (Issues #2427, #2134).
- **Chinese-Localized Tooling**: Web search with domestic providers (Alibaba, Zhipu/GLM) is a top ask (Issues #3496, PR #3502).
- **Session Management**: Commands like `/history clear`, `/chat save/list`, and auto-titling are requested (PRs #3190, #3093).
- **Developer Experience**: Real-time token tracking, collapsible tool outputs, and voice input are recurring wishes.

---

### **Developer Pain Points**

- **Authentication Instability**: Widespread 401 errors suggest flawed token handling or OAuth deprecation fallout.
- **Tool Reliability**: Large file writes and context compression failures disrupt workflows.
- **Localization Gaps**: Lack of native Chinese search APIs and unclear OpenTelemetry docs frustrate regional users.
- **Performance Bottlenecks**: File indexing and shell output rendering cause unresponsiveness in large codebases.
- **Missing SDKs**: No official Python SDK creates friction for non-JS/Node.js developers.

--- 

*Prepared by Technical Analyst – AI Developer Tools Team*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/DenisZheng/agents-radar).*