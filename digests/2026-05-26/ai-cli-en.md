# AI CLI Tools Community Digest 2026-05-26

> Generated: 2026-05-26 00:36 UTC | Tools covered: 8

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

# **Cross-Tool AI CLI Ecosystem Comparison Report (2026-05-26)**

---

## 1. **Ecosystem Overview**  
The AI developer tools CLI ecosystem in mid-2026 reflects a maturing landscape where **automation, security, and multi-provider support** are core themes. Tools like **Claude Code**, **OpenAI Codex**, and **Gemini CLI** dominate with enterprise-grade agent reliability, while newer entrants (e.g., **Kimi CLI**, **Qwen Code**) focus on niche optimizations (cost control, model flexibility). Community engagement is strongest around **MCP integration, billing transparency, and session persistence**—indicating demand for robust, predictable workflows.

---

## 2. **Activity Comparison**

| Tool             | Issues Today | PRs Today | Release Status          |
|------------------|--------------|-----------|-------------------------|
| Claude Code      | 10           | 7         | No new releases         |
| OpenAI Codex     | 10           | 10        | No new releases         |
| Gemini CLI       | 10           | 10        | No new releases         |
| GitHub Copilot   | 10           | 0         | `v1.0.55-0` released    |
| Kimi CLI         | 3            | 0         | No new releases         |
| OpenCode        | 10           | 10        | No new releases         |
| Qwen Code       | 10           | 10        | `v0.16.1-nightly`       |

*Notes*:  
- **GitHub Copilot** had the only release this day (`v1.0.55-0`), addressing SEA launch issues.  
- **OpenAI Codex**, **Gemini CLI**, and **Qwen Code** saw active PR backlogs, suggesting rapid iteration cycles.  
- **Kimi CLI** lagged with fewer issues/PRs, likely due to ongoing architectural rewrite.

---

## 3. **Shared Feature Directions**
### **Cross-Tool Requirements**
| Requirement                          | Tools Affected               | Key Issues/Features                                                                 |
|--------------------------------------|------------------------------|------------------------------------------------------------------------------------|
| **Billing Transparency**              | Claude Code, GitHub Copilot  | #46917 (cache token inflation), #42018 (EU VAT errors)                            |
| **MCP Enhancements**                 | OpenAI Codex, Claude Code    | #5059 (prebuilt prompts), #48243 (Notion plugin failures)                         |
| **Session Persistence & Recovery**    | Gemini CLI, OpenAI Codex     | #62272 (macOS JSONLs deletion), #20741 (chat history loss)                        |
| **Security & Secrets Protection**     | Claude Code, Kimi Code       | #62099 (credential-guard plugin), #2365 (Shell tool hangs)                        |
| **Tool Call Reliability**             | All major tools              | #24055 (output limits), #21409 (agent hangs), #2365 (WebSocket API failures)       |
| **Multi-Provider Support**            | OpenCode, Qwen Code, Gemini  | #4964 (Qwen 3.7 Max), #2854 (Gemini integration request)                         |

---

## 4. **Differentiation Analysis**
| Tool             | Focus Area                     | Target Users               | Technical Approach                              |
|------------------|-------------------------------|----------------------------|------------------------------------------------|
| **Claude Code**  | Enterprise billing, security   | Mid/large teams            | Anthropic’s MCP + hooks, cache token fixes      |
| **OpenAI Codex**  | TUI/Vim compatibility         | Power users, open-source   | React Ink, AST-aware tools, WebSocket stability |
| **Gemini CLI**   | Agent resilience, memory       | Automation-heavy workflows  | Subagent recovery, Auto Memory patch validation |
| **GitHub Copilot**| Workflow interruptions        | Developers using VS Code    | Plugin hooks, session CWD preservation          |
| **OpenCode**     | Multi-provider, TDI           | Cost-conscious developers  | OpenRouter/Bedrock/Qwen integrations            |
| **Kimi CLI**     | Skill directory nesting       | Complex agent architectures| Bun/TS rewrite, worker stability               |
| **Qwen Code**    | Daemon APIs, telemetry        | SDK/plugin developers      | `/session/:id/stats`, OpenAI-compatible fixes   |

*Key Insight*:  
- **Enterprise-focused tools (Claude, Gemini)** prioritize **reliability and cost controls**.  
- **TUI-centric tools (Codex, OpenCode)** invest in **cross-platform editing features**.  
- **Emerging tools (Kimi, Qwen)** tackle **niche optimizations (skills, APIs)**.

---

## 5. **Community Momentum & Maturity**
| Tool             | Activity Level | Strengths                          | Weaknesses                     |
|------------------|----------------|------------------------------------|--------------------------------|
| **Claude Code**  | High           | Billing/security, plugin ecosystem | MCP connectivity gaps          |
| **OpenAI Codex** | Very High      | Vim/TUI polish, model diversity    | Windows terminal bugs           |
| **Gemini CLI**   | High           | Agent stability, memory system      | Wayland/PowerShell instability |
| **GitHub Copilot**| Medium         | VS Code integration                | Session management flaws       |
| **OpenCode**     | High           | Multi-provider, cost tracking      | Model latency spikes           |
| **Kimi CLI**     | Low            | Skill nesting, worker stability    | Active rewrite risks           |
| **Qwen Code**    | High           | Daemon APIs, telemetry             | Build system quirks            |

**Maturity Leaders**: **Claude Code**, **OpenAI Codex**, and **Gemini CLI** have high engagement on critical path issues (billing, agents).  
**Rapid Iterators**: **Qwen Code** and **OpenCode** show frequent PR activity, aligning with market shifts (e.g., DeepSeek pricing).

---

## 6. **Trend Signals**
### **Developer-Centric Insights**
1. **Cost Control & Pricing Adaptation**  
   - **Claude Code’s** cache token inflation (#46917) and **OpenCode’s** DeepSeek price drop (#28846) highlight demand for **transparent, adaptive billing**.
2. **Automation & Agent Reliability**  
   - **Gemini CLI’s** subagent turn limit reporting (#22323) and **Claude Code’s** MCP reconnection (#61415) signal frustration with **unpredictable automation**.
3. **Security & Hygiene**  
   - **Claude Code’s** credential-guard (#62099) and **Qwen Code’s** telemetry context leaks (#4486) reveal **secrets and observability** as pain points.
4. **Multi-Provider Flexibility**  
   - **OpenCode’s** Qwen 3.7 Max (#4964) and **OpenAI Codex’s** model diversity (#2854) show **tooling fragmentation** driving need for **universal compatibility layers**.

### **Strategic Value**
- **For Engineers**: Prioritize tools with **stable APIs** (Gemini) or **TDI polish** (OpenAI Codex).  
- **For Teams**: Choose **enterprise-focused** options (Claude) over **niche optimizers** (Kimi) unless specialized needs exist.  
- **For Ecosystem Growth**: **MCP standardization** (#5059) and **session goals** (#27167) are cross-tool adoption levers.

--- 

**Report generated from community data as of May 26, 2026.**

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# **Claude Code Skills Community Highlights Report (as of 2026-05-26)**  

---

## **1. Top Skills Ranking**  
*(Most-discussed PRs by comments/attention)*  

### **Document Typography Skill (#514)**  
🔹 **Functionality**: Prevents common typographic flaws in AI-generated documents (orphans, widows, numbering misalignment).  
🔹 **Status**: Open | **GitHub**: [anthropics/skills PR #514](https://github.com/anthropics/skills/pull/514)  
🔹 **Discussion**: High impact on document quality but lacks community engagement (0👍).  

### **ODT Skill (#486)**  
🔹 **Functionality**: Supports OpenDocument Format (.odt/.ods) creation, filling, and conversion to HTML.  
🔹 **Status**: Open | **GitHub**: [anthropics/skills PR #486](https://github.com/anthropics/skills/pull/486)  
🔹 **Discussion**: Targets open-source document workflows; low visibility but niche demand.  

### **ServiceNow Platform Skill (#568)**  
🔹 **Functionality**: Covers scripting, architecture, SecOps, ITAM/SAM, FSM, SPM, CSDM, and IntegrationHub.  
🔹 **Status**: Open | **GitHub**: [anthropics/skills PR #568](https://github.com/anthropics/skills/pull/568)  
🔹 **Discussion**: Broad enterprise use-case; no feedback yet.  

### **Skill Quality & Security Analyzers (#83)**  
🔹 **Functionality**: Meta-skills for evaluating skill structure, documentation, and security compliance.  
🔹 **Status**: Open | **GitHub**: [anthropics/skills PR #83](https://github.com/anthropics/skills/pull/83)  
🔹 **Discussion**: Critical for maintainability but untested in practice.  

### **AURELION Suite (#444)**  
🔹 **Functionality**: Structured cognitive/memory framework (kernel, advisor, agent, memory).  
🔹 **Status**: Open | **GitHub**: [anthropics/skills PR #444](https://github.com/anthropics/skills/pull/444)  
🔹 **Discussion**: Knowledge management focus; no adoption signals.  

---

## **2. Community Demand Trends**  
*(Top anticipated skill categories from Issues/PRs)*  

- **Enterprise Integration**:  
  - SharePoint Online (#1175), SAP-RPT-1-OSS (#181), ServiceNow (#568) show strong interest in vertical-specific automation.  
- **Security & Governance**:  
  - Trust boundary abuse (#492), skill validation (#83), and agent governance (#412) highlight safety needs.  
- **Workflow Automation**:  
  - Masonry image/video generation (#335), n8n workflows (#190), and ODT (#486) reflect tooling consolidation.  
- **Debugging & Testing**:  
  - `run_eval.py` failures (#556), testing patterns (#723), and code audits (#147) emphasize reliability tools.  

---

## **3. High-Potential Pending Skills**  
*(Active-discussion PRs not merged)*  

| **PR**               | **Key Feature**                          | **GitHub Link** |
|----------------------|-----------------------------------------|----------------|
| #444 (AURELION)     | Cognitive/memory framework              | [Link](https://github.com/anthropics/skills/pull/444) |
| #568 (ServiceNow)   | Full-service enterprise integration     | [Link](https://github.com/anthropics/skills/pull/568) |
| #190 (n8n-builder)  | Low-code workflow automation            | [Link](https://github.com/anthropics/skills/pull/190) |
| #723 (testing-patterns)| Comprehensive testing methodology    | [Link](https://github.com/anthropics/skills/pull/723) |

---

## **4. Skills Ecosystem Insight**  
**"The community is driving demand for vertical-specific, security-aware automation skills—especially for document processing, enterprise platforms (ServiceNow, SharePoint), and structured knowledge frameworks (AURELION)."**  

### **Key Gaps Identified**:  
- **Skill Validation Tools**: Needed for meta-skills like #83.  
- **Cross-Platform Sharing**: Issue #228 requests org-wide skill libraries.  
- **MCP Optimization**: Issue #1102 highlights data compression needs for large-scale integrations.  

**GitHub Links**: [Skills Repo](https://github.com/anthropics/skills) | [Issues](https://github.com/anthropics/skills/issues)

---

# Claude Code Community Digest – May 26, 2026  

## **Today's Highlights**  
- A critical bug in **v2.1.100+** causing a ~20K-token inflation in `cache_creation_input_tokens` (Issue #46917) has sparked significant community discussion, with 214👍 as users highlight billing impacts.  
- The **`credential-guard`** plugin (#62099) was proposed to prevent hardcoded secrets from being written to files, addressing a top security concern.  
- Multiple macOS and Windows issues persist around MCP connectivity, session data loss, and permissions (e.g., #61415, #62272).  

---

### **Releases**  
*No new releases in the last 24 hours.*  

---

### **Hot Issues**  
1. **[Cache Token Inflation v2.1.100+](#46917)**  
   - Users report a ~20K-token increase in `cache_creation_input_tokens` between v2.1.98 and v2.1.100+, despite smaller payloads. Likely a server-side issue affecting billing. [214👍](https://github.com/anthropics/claude-code/issues/46917)  

2. **[API Response Exceeds 32K Token Limit](#24055)**  
   - High-traffic bug where Claude’s responses hit the 32K output token cap, with 133 comments seeking workarounds. [85👍](https://github.com/anthropics/claude-code/issues/24055)  

3. **[MCP Reconnection Failures (macOS)](#61415)**  
   - Users unable to enable "Bypass Permissions" mode on macOS, stuck in "Accept Edits." [9👍](https://github.com/anthropics/claude-code/issues/61415)  

4. **[Session Data Deletion (macOS)](#62272)**  
   - Local chat JSONLs deleted despite `cleanupPeriodDays: 36500`, risking lost work. [0👍](https://github.com/anthropics/claude-code/issues/62272)  

5. **[Subagent Prompt Caching Disabled](#29966)**  
   - Subagents spawned via the Agent SDK lack prompt caching by default, increasing costs. [5👍](https://github.com/anthropics/claude-code/issues/29966)  

6. **[Notion Plugin Internal Server Error](#48243)**  
   - Notion MCP server fails after reinstalls, with no clear error logs. [16👍](https://github.com/anthropics/claude-code/issues/48243)  

7. **[Effort Level UI Downgrade](#30726)**  
   - Settings UI silently downgrades "max" effort level when interacting with dropdowns. [30👍](https://github.com/anthropics/claude-code/issues/30726)  

8. **[Remote Trigger MCP Tool Failures](#43461)**  
   - ~90% failure rate for remote triggers due to MCP connectivity issues. [0👍](https://github.com/anthropics/claude-code/issues/43461)  

9. **[Goal Hook Fails with Long Text](#58192)**  
   - `/goal` command truncates prompts exceeding length limits, blocking large workflows. [9👍](https://github.com/anthropics/claude-code/issues/58192)  

10. **[EU VAT Billing Errors](#42018)**  
    - B2B EU customers incorrectly charged VAT, requiring manual refunds. [0👍](https://github.com/anthropics/claude-code/issues/42018)  

---

### **Key PR Progress**  
1. **[Credential-Guard Plugin](#62099)**  
   - New PreToolUse hook blocks hardcoded secrets (API keys, passwords) from file writes. [Fixes #62095](https://github.com/anthropics/claude-code/pull/62099)  

2. **[Dedupe Bot Improvements](#62262)**  
   - Dedupe bot now ignores closed/duplicate issues to avoid false positives. [Fixes #62257](https://github.com/anthropics/claude-code/pull/62262)  

3. **[Sandbox Filesystem Example](#62261)**  
   - Added `allowSkillsWrites` example settings to control sandboxed filesystem access. [Fixes #62259](https://github.com/anthropics/claude-code/pull/62261)  

4. **[Build Command Guardrails](#62264)**  
   - Prevents build tools (`cmake`, `npm`) from running in Bash tool calls. [New feature](https://github.com/anthropics/claude-code/pull/62264)  

5. **[Empty Bug Report Triage](#62260)**  
   - Auto-flags empty/missing bodies in triage script. [Improves issue quality](https://github.com/anthropics/claude-code/pull/62260)  

6. **[@claude Trigger Fix](#62023)**  
   - Fixes `@claude-*` false positives in GitHub workflows. [Fixes workflow misconfigurations](https://github.com/anthropics/claude-code/pull/62023)  

7. **[Hookify Event Filtering](#62315)**  
   - Improves pre/post hooks to filter events more accurately. [Enables better debugging](https://github.com/anthropics/claude-code/pull/62315)  

---

### **Feature Request Trends**  
- **MCP Enhancements**:  
  - Email attachment support for Microsoft 365 (#30533), tmux notification fixes (#19976).  
- **Cost Optimization**:  
  - Opt-out of built-in deferred tools (#54716), subagent prompt caching (#29966).  
- **Security**:  
  - Credential-guard plugin (#62099), sandboxed filesystem controls (#62261).  
- **UX/UI**:  
  - Prevent pinned session deletion (#62104), effort level UI stability (#30726).  

---

### **Developer Pain Points**  
1. **Billing Surprises**: Cache token inflation (#46917) and EU VAT errors (#42018) frustrate cost transparency.  
2. **Data Loss Risks**: Unpredictable session deletions (#62272, #62252) threaten project history.  
3. **MCP Instability**: Reconnection failures (#61415, #48243) and remote trigger crashes (#43461) hinder automation.  
4. **Permission Bugs**: macOS/Windows permission modes (#61415) and CLI defaults (#50408) cause setup hurdles.  
5. **Tool Limits**: Output caps (#24055) and goal text truncation (#58192) block long-running tasks.  

For full context, explore the [GitHub repo](https://github.com/anthropics/claude-code)!

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# **OpenAI Codex Community Digest | 2026-05-26**

---

## **Today's Highlights**  
No new releases were published in the past 24 hours. The community is actively addressing GPU usage, context window management, and MCP integration issues, with several high-engagement GitHub issues and pull requests advancing Vim-like TUI features.

---

## **Releases**  
*No new versions released.*

---

## **Hot Issues (Top 10)**  

### **1. High GPU Usage During App "Thinking" (#16857)**  
- **Issue**: Users on macOS report excessive GPU consumption due to tiny animations during "thinking" states.  
- **Impact**: Wastes compute resources; may throttle performance.  
- **Community Reaction**: 34👍, 35 comments—developers urge optimization of idle-state rendering.  
🔗 [Link](https://github.com/openai/codex/issues/16857)

### **2. Context Window Auto-Compaction Fails in Long Sessions (#10823)**  
- **Issue**: Auto-compaction fails after prolonged sessions, causing context overflow errors.  
- **Impact**: Breaks workflows requiring long-running code reviews or debugging.  
- **Community Reaction**: 5👍 but high urgency—users demand persistent compaction status tracking.  
🔗 [Link](https://github.com/openai/codex/issues/10823)

### **3. Project Chat Histories Disappear After Update (#20741)**  
- **Issue**: Users on macOS lost chat histories post-update, likely due to database corruption.  
- **Impact**: Data loss risk for collaborative projects.  
- **Community Reaction**: 10👍—calls for better backup mechanisms.  
🔗 [Link](https://github.com/openai/codex/issues/20741)

### **4. Chrome Extension Unavailable in Web Store (#21700)**  
- **Issue**: Computer Use Chrome extension is blocked by Chrome Web Store, breaking remote control flows.  
- **Impact**: Blocks mobile/desktop integration.  
- **Community Reaction**: 16👍—demands offline installer or store reactivation.  
🔗 [Link](https://github.com/openai/codex/issues/21700)

### **5. MCP Prompts Feature Request (#5059)**  
- **Issue**: Developers want MCP servers to support prebuilt prompts (beyond tools).  
- **Impact**: Streamlines multi-step automation (e.g., Git + LLM workflows).  
- **Community Reaction**: 30👍—widely requested for MCP standardization.  
🔗 [Link](https://github.com/openai/codex/issues/5059)

### **6. Terminal ANSI Rendering Bugs (#23740)**  
- **Issue**: Codex CLI v0.131+ corrupts Windows Terminal output with raw ANSI sequences.  
- **Impact**: Breaks TUI usability on Windows.  
- **Community Reaction**: 7👍—needs proper terminal emulation fixes.  
🔗 [Link](https://github.com/openai/codex/issues/23740)

### **7. Google Drive Sheets Write Quota Errors (#24373)**  
- **Issue**: Google Sheets plugin loses write permissions after reinstall, returning 429 errors.  
- **Impact**: Blocks collaborative data editing.  
- **Community Reaction**: 2👍—requires OAuth scope validation fixes.  
🔗 [Link](https://github.com/openai/codex/issues/24373)

### **8. Settings Config Persistence Failures (#24065)**  
- **Issue**: Approval/sandbox settings fail to save in `config.toml` post-marketplace updates.  
- **Impact**: Admin policies reset unexpectedly.  
- **Community Reaction**: 0👍—urgent for enterprise users.  
🔗 [Link](https://github.com/openai/codex/issues/24065)

### **9. GPT-5.5 Performance Degradation (#24431)**  
- **Issue**: Reports of erratic model behavior (e.g., broken changes, failed bug fixes).  
- **Impact**: Reduces reliability for critical tasks.  
- **Community Reaction**: 0👍—needs model health diagnostics.  
🔗 [Link](https://github.com/openai/codex/issues/24431)

### **10. Vim-like Composer Features (#24480–#24498)**  
- **Progress**: PR series implements full Vim keybindings (counts, registers, visual modes) in TUI.  
- **Impact**: Enhances IDE-like navigation for power users.  
- **Community Reaction**: Active development—high demand for modal editing.  
🔗 [PRs: #24480–#24498](https://github.com/openai/codex/pulls?q=is%3Apr+author%3Afcoury-oai)

---

## **Key PR Progress (Top 10)**

### **1. Vim Keybinding Stack (#24480–#24498)**  
- **Features**: Adds Vim motions (`f`, `F`), counts (`d3w`), registers (`"a`), visual modes, and dot-repeat.  
- **Why**: Power users demand native Vim compatibility in Codex TUI.  
🔗 [PR #24480](https://github.com/openai/codex/pull/24480)

### **2. Review Story Cockpit (#24358)**  
- **Features**: Interactive UI for reviewing AI-generated changes (step-by-step intent analysis).  
- **Why**: Addresses file-oriented diff limitations.  
🔗 [PR #24358](https://github.com/openai/codex/pull/24358)

### **3. Analytics for Rejected Requests (#24488)**  
- **Fixes**: Tracks validation failures (e.g., oversized input) for better debugging.  
- **Why**: Improves error visibility in API calls.  
🔗 [PR #24488](https://github.com/openai/codex/pull/24488)

### **4. Disable `request_user_input` Tool (#24494)**  
- **Feature**: Config knob to suppress interactive tool prompts (useful for automation).  
- **Why**: Needed for scriptable workflows.  
🔗 [PR #24494](https://github.com/openai/codex/pull/24494)

### **5. macOS Malloc Diagnostics (#24479)**  
- **Fixes**: Restores allocator logging flags (reverted from hardening).  
- **Why**: Debugging memory leaks without suppressing diagnostics.  
🔗 [PR #24479](https://github.com/openai/codex/pull/24479)

### **6. WebSocket Remote-Control Logging (#24473)**  
- **Fixes**: Surface connection stalls in app-server remote sessions.  
- **Why**: Improves troubleshooting for mobile/desktop control.  
🔗 [PR #24473](https://github.com/openai/codex/pull/24473)

### **7. CODEX_ENV_FILE Support (#24468)**  
- **Feature**: Persists env vars for shell hooks (e.g., approval policies).  
- **Why**: Enables cross-session environment consistency.  
🔗 [PR #24468](https://github.com/openai/codex/pull/24468)

### **8. Markdown Table Rendering (#24489)**  
- **Fixes**: Matches App’s table styling (vs. boxed grids).  
- **Why**: Visual coherence across platforms.  
🔗 [PR #24489](https://github.com/openai/codex/pull/24489)

### **9. Reject Empty Base64 Images (#24376)**  
- **Security**: Blocks malformed image inputs (prevents thread poisoning).  
- **Why**: API input sanitization.  
🔗 [PR #24376](https://github.com/openai/codex/pull/24376)

### **10. Dot Repeat for Vim Changes (#24498)**  
- **Features**: Replays edits via `.` keystroke (Vim-style repeat).  
- **Why**: Essential for batch editing.  
🔗 [PR #24498](https://github.com/openai/codex/pull/24498)

---

## **Feature Request Trends**
1. **MCP Integration** (#5059): Prebuilt prompts and standardized tooling.  
2. **Persistent Context Status** (#10823, #24366): Auto-compaction visibility.  
3. **Vim Modal Editing**: Full keybindings (#24480–#24498).  
4. **Sandbox/Approval Persistence** (#24065): Config file reliability.  
5. **Offline Installers** (#21700): Critical for enterprise.  

---

## **Developer Pain Points**
- **Resource Waste**: GPU/CPU overuse (#16857).  
- **Data Loss**: Chat history corruption (#20741).  
- **Windows TUI Bugs**: ANSI/PowerShell issues (#23740, #21082).  
- **OAuth Scope Failures**: Google Sheets (#24373).  
- **Model Reliability**: Erratic GPT-5.5 behavior (#24431).  
- **Config Sync**: Settings persistence (#24065).  

--- 

*Digest curated from GitHub activity as of May 26, 2026.*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# **Gemini CLI Community Digest – May 26, 2026**

---

## **Today's Highlights**  
No new releases in the last 24 hours. The community is actively addressing critical issues around agent reliability, memory system bugs, and tool execution stability. Notable progress includes fixes for terminal resizing, clipboard handling, and AST-aware file operations.

---

## **Releases**  
*No updates in the last 24 hours.*

---

## **Hot Issues** (Top 10)  

### **1. [Generalist Agent Hangs #21409]** *(Priority P1, 👍8)*  
The generalist agent hangs indefinitely when deferred to (e.g., folder creation). Users must explicitly instruct the model not to use sub-agents to resolve. High engagement suggests a systemic need for better agent fallback logic.  
🔗 [GitHub Issue](https://github.com/google-gemini/gemini-cli/issues/21409)

### **2. [Subagent Recovery After MAX_TURNS #22323]** *(Priority P1, 👍2)*  
`codebase_investigator` subagent incorrectly reports `GOAL success` after hitting `MAX_TURNS`, masking interruptions. Critical for debugging workflows where turn limits are hit unexpectedly.  
🔗 [GitHub Issue](https://github.com/google-gemini/gemini-cli/issues/22323)

### **3. [AST-Aware File Tools Impact Assessment #22745]** *(Priority P2, 👍1)*  
Investigating whether AST-aware tools (e.g., AST grep) can improve file reads, search precision, and codebase mapping efficiency. Potential quality gains if adopted.  
🔗 [GitHub Issue](https://github.com/google-gemini/gemini-cli/issues/22745)

### **4. [Shell Command Execution Stuck #25166]** *(Priority P1, 👍3)*  
CLI hangs post-command completion with "Awaiting input" despite command finishing. Affects simple shell ops, suggesting a process cleanup bug.  
🔗 [GitHub Issue](https://github.com/google-gemini/gemini-cli/issues/25166)

### **5. [Browser Subagent Wayland Failure #21983]** *(Priority P1, 👍1)*  
Browser subagent fails on Wayland sessions, breaking automation workflows. Cross-platform compatibility gap.  
🔗 [GitHub Issue](https://github.com/google-gemini/gemini-cli/issues/21983)

### **6. [Auto Memory Redaction Logging #26525]** *(Priority P2)*  
Auto Memory logs unredacted secrets before model redaction occurs. Security risk; requires deterministic redaction.  
🔗 [GitHub Issue](https://github.com/google-gemini/gemini-cli/issues/26525)

### **7. [Invalid Auto Memory Patches Quarantine #26523]** *(Priority P2)*  
Memory inbox skips invalid patches silently (malformed, out-of-root). Needs validation/quarantine mechanisms.  
🔗 [GitHub Issue](https://github.com/google-gemini/gemini-cli/issues/26523)

### **8. [Model Creates Temporary Scripts Randomly #23571]** *(Priority P2)*  
Model spawns tmp scripts across directories, complicating cleanup. Suggests need for temp directory constraints.  
🔗 [GitHub Issue](https://github.com/google-gemini/gemini-cli/issues/23571)

### **9. [Browser Agent Ignores Settings Overrides #22267]** *(Priority P2)*  
Browser Agent bypasses `settings.json` configs (e.g., `maxTurns`), reducing user control.  
🔗 [GitHub Issue](https://github.com/google-gemini/gemini-cli/issues/22267)

### **10. [Agent Destructive Behavior #22672]** *(Priority P2, 👍1)*  
Risk of unsafe commands (`git reset --force`). Need safeguards for destructive actions.  
🔗 [GitHub Issue](https://github.com/google-gemini/gemini-cli/issues/22672)

---

## **Key PR Progress** (Top 10)  

### **1. **[Fix Terminal Bracketed-Paste Handling #27054]** *(Priority P2)*  
Enables image pasting in Windows Terminal and adds UI styling for clarity. Fixes UX gaps for cross-platform workflows.  
🔗 [PR #27054](https://github.com/google-gemini/gemini-cli/pull/27054)

### **2. **[Add Configurable Tool Call Timeout #27438]** *(Priority P2)*  
Centralized timeout enforcement for tool calls (via `tools.callTimeout`) prevents indefinite hangs.  
🔗 [PR #27438](https://github.com/google-gemini/gemini-cli/pull/27438)

### **3. **[Ensure Non-Interactive Shell Stability #27418]** *(Priority P1)*  
Fixes crashes when `enableInteractiveShell: false` is set, improving CLI robustness for automation.  
🔗 [PR #27418](https://github.com/google-gemini/gemini-cli/pull/27418)

### **4. **[Numeric Routing Rules #27406]** *(Priority P2)*  
Configurable task-to-model routing (e.g., `complexityScoreToModelMappings`) replaces binary thresholds.  
🔗 [PR #27406](https://github.com/google-gemini/gemini-cli/pull/27406)

### **5. **[Add `/compress` Slash Command #27151]** *(Priority P2)*  
Long-running ACP sessions now support explicit history compression via `/compress` to avoid context-window limits.  
🔗 [PR #27151](https://github.com/google-gemini/gemini-cli/pull/27151)

### **6. **[Session Resume PTY Fix #27429]** *(Priority P1)*  
Handles stale PTY file descriptors during `--resume` to prevent crashes.  
🔗 [PR #27429](https://github.com/google-gemini/gemini-cli/pull/27429)

### **7. **[Bracketed-Paste Synthesis #26905]** *(Priority P1)*  
Fixes multi-line paste submission issues in Windows Terminal/PowerShell by auto-generating bracketed markers.  
🔗 [PR #26905](https://github.com/google-gemini/gemini-cli/pull/26905)

### **8. **[Fallback to Gemini 2.5 Flash Lite #26914]** *(Priority P1)*  
Free-tier users now fall back to `gemini-2.5-flash-lite` when quotas exhausted.  
🔗 [PR #26914](https://github.com/google-gemini/gemini-cli/pull/26914)

### **9. **[Extension Update Safety #26930]** *(Priority P2)*  
Restores previous extensions if update installation fails, avoiding breakage.  
🔗 [PR #26930](https://github.com/google-gemini/gemini-cli/pull/26930)

### **10. **[Settings Deep Merge #26931]** *(Priority P2)*  
Fixes workspace/user settings merge behavior to preserve nested keys.  
🔗 [PR #26931](https://github.com/google-gemini/gemini-cli/pull/26931)

---

## **Feature Request Trends**  
- **AST-Aware Tools**: Multiple issues (#22745, #22747) advocate AST-based file reads/searches for precision over plain-text parsing.  
- **Agent Resilience**: Frequent requests for subagent recovery (#22323), session takeover (#22232), and destructive action guards (#22672).  
- **Memory System**: Demand for Auto Memory improvements (redaction, patch validation, retry logic) (#26523, #26522).  
- **Tool Control**: Configurable tool timeouts (#27438) and routing (#27406) for finer-grained orchestration.  

---

## **Developer Pain Points**  
1. **Agent Reliability**: Hanging sub-agents (#21409), incorrect status reporting (#22323), and browser failures (#21983) disrupt workflows.  
2. **Terminal Bugs**: Shell command hangs (#25166), resize flickering (#21924), and corruption in external editors (#24935) degrade UX.  
3. **Security & Logging**: Unredacted Auto Memory logging (#26525) and random temp files (#23571) raise concerns about hygiene.  
4. **Platform Gaps**: Wayland/PowerShell/Windows Terminal inconsistencies (#21983, #27054) require platform-specific fixes.  
5. **Resource Limits**: Tool call limits (#24246) and quota fallbacks (#26914) frustrate large-scale usage.  

--- 

*Report generated from GitHub data as of May 26, 2026.*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest (2026-05-26)

## 1. **Today's Highlights**  
A critical fix was released (`v1.0.55-0`) resolving extension launch issues in single-executable applications (SEA). Meanwhile, multiple high-profile issues surfaced around session management, plugin hooks, and model availability, indicating active community engagement with edge-case workflows.

---

## 2. **Releases**  
- **`v1.0.55-0`** (24h)  
  - **Fix**: Extensions now launch correctly when the CLI runs as a single-executable application ([Issue #3508](https://github.com/github/copilot-cli/issues/3508)).

---

## 3. **Hot Issues**  
### **Top Community Concerns**
1. **[Silent Command Rewrites (#2643)](https://github.com/github/copilot-cli/issues/2643)**  
   *Why it matters*: Hooks rewriting commands still force confirmation dialogs despite `permissionDecision: allow`. Affects automation workflows (9 comments, no thumbs-up yet).

2. **[Shift+Enter Behavior (#2776)](https://github.com/github/copilot-cli/issues/2776)**  
   *Why it matters*: Users can’t insert new lines—only submit prompts. Blocks multi-line prompt composition.

3. **[Remote Session Disabled Warning (#3442)](https://github.com/github/copilot-cli/issues/3442)**  
   *Why it matters*: Enterprise users see misleading "contact admin" messages after v1.0.51 update (👍10).

4. **[Gemini Model Availability (#2854)](https://github.com/github/copilot-cli/issues/2854)**  
   *Why it matters*: 15+ users request Google Gemini integration for model diversity.

5. **[Plugin Working Directory Empty (#3508)](https://github.com/github/copilot-cli/issues/3508)**  
   *Why it matters*: Lifecycle hooks lose working directory info post-v1.0.51, breaking path-sensitive tools.

6. **[MCP Tool Array Handling (#3030)](https://github.com/github/copilot-cli/issues/3030)**  
   *Why it matters*: Sub-agents fail when MCP servers return JSON arrays—critical for tool interoperability.

7. **[Archive/Restore Sessions (#3518)](https://github.com/github/copilot-cli/issues/3518)**  
   *Why it matters*: Accidental session archives are irreversible; long-term context loss risk.

8. **[LSP Ignorance (#3516)](https://github.com/github/copilot-cli/issues/3516)**  
   *Why it matters*: CLI bypasses Microsoft C++ LSP when available, violating tooling best practices.

9. **[Out-of-Order Messages (#3517)](https://github.com/github/copilot-cli/issues/3517)**  
   *Why it matters*: Async message delivery breaks conversational state tracking.

10. **[Session CWD Reset (#3515)](https://github.com/github/copilot-cli/issues/3515)**  
    *Why it matters*: Resumed sessions default to `/` instead of preserving original CWD.

---

## 4. **Key PR Progress**  
*No PRs updated in last 24h.*

---

## 5. **Feature Request Trends**  
- **Model Diversity**: Demand for alternative models (e.g., [Google Gemini (#2854)](https://github.com/github/copilot-cli/issues/2854)).  
- **Session Management**:  
  - Archive/restore functionality (#3518).  
  - Enhanced hook data (sessionId, assistantResponse) (#2458).  
- **Tool Interoperability**:  
  - Silent command rewrites (#2643).  
  - MCP array support (#3030).  
- **UX Improvements**: Shift+Enter behavior (#2776), LSP prioritization (#3516).

---

## 6. **Developer Pain Points**  
- **Workflow Interruptions**: Forced confirmations (#2643), out-of-order messages (#3517).  
- **State Loss**: Broken working directories (#3508), accidental session archives (#3518).  
- **Tooling Conflicts**: CLI ignoring LSP (#3516), sub-agent failures (#3030).  
- **Enterprise Bugs**: Misconfigured remote sessions (#3442).  

*Community sentiment*: High engagement on edge-case fixes, with recurring themes around automation, tooling reliability, and state preservation.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# **Kimi Code CLI Community Digest (2026-05-26)**  

---

## **1. Today's Highlights**  
- A critical issue (#2365) was reported where `kimi-code-worker` hangs when using the **Shell tool via WebSocket API**, blocking interactive workflows on Linux/Python 3.12/3.13.  
- An ongoing refactor (#1707) to rewrite Kimi CLI from Python to **Bun + TypeScript + React Ink** remains active, signaling a major architectural shift (~32k lines of code).  
- Two high-priority enhancement requests (#1894, #2232) highlight nested skill directory support and adjustable background task timeouts, impacting multi-agent workflows.  

---

## **2. Releases**  
*No new releases in the last 24 hours.*  

---

## **3. Hot Issues**  

### **🔹 #1894 [Open] Nested Skill Directory Support**  
**Why it matters**: Codex’s recursive loading of `.agents/skills/{name}/skills/xxx` is blocked in Kimi CLI, limiting complex agent structures ([Issue](https://github.com/MoonshotAI/kimi-cli/issues/1894)).  
**Community reaction**: 4 comments, no upvotes—users demand parity with Codex for multi-tiered skills.  

### **🔹 #2232 [Open] Adjustable Background Task Timeout**  
**Why it matters**: Tasks fail prematurely due to fixed timeouts; users need manual adjustment for long-running jobs ([Issue](https://github.com/MoonshotAI/kimi-cli/issues/2232)).  
**Community reaction**: 2 comments—common frustration with "overly optimistic" default limits.  

### **🔹 #2365 [Open] `kimi-code-worker` Shell Tool Hang (WebSocket API)**  
**Why it matters**: Critical bug blocks shell interactions on Linux/WebSocket, halting automation ([Issue](https://github.com/MoonshotAI/kimi-cli/issues/2365)).  
**Community reaction**: New report—urgent fix needed for CLI workflows.  

---

## **4. Key PR Progress**  

### **🚧 #1707 [Open] Full Rewrite to Bun + TS + React Ink**  
**Scope**: Complete migration from Python to modern stack (TS/React Ink), including ~32k LOC and 37 tests ([PR](https://github.com/MoonshotAI/kimi-cli/pull/1707)).  
**Status**: In progress—potential performance gains but breaking changes ahead.  

---

## **5. Feature Request Trends**  
1. **Nested Skill Support**: Recursive loading for `.agents/skills/*/skills/*` paths (vs. Codex).  
2. **Configurable Timeouts**: Adjustable background task timeouts for flexibility.  
3. **WebSocket Stability**: Fix Shell tool hangs in `kimi-code-worker`.  
4. **Multi-Plan Integration**: Easier setup for Kimi Coding Plan vs. third-party tools like `crow-cli` (#2173).  

---

## **6. Developer Pain Points**  
- **Workflow Breakdowns**: Nested skill limitations (#1894) and Shell hangs (#2365) disrupt complex automation.  
- **Rigid Defaults**: Fixed timeouts (#2232) force workarounds for long tasks.  
- **Migration Risks**: Python-to-TS rewrite (#1707) may introduce breaking changes.  
- **Documentation Gaps**: No clear guidance for WebSocket API troubleshooting.  

**GitHub Links**: [Issues](https://github.com/MoonshotAI/kimi-cli/issues), [PRs](https://github.com/MoonshotAI/kimi-cli/pulls)

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# **OpenCode Community Digest – May 26, 2026**  

---

## **Today's Highlights**  
- OpenCode’s TUI now supports a `/disconnect` slash command (#29237 PR), letting users manually disconnect providers without config edits.  
- A critical fix prevents `process.exit()` on Windows from killing parent terminals (#29281 PR), improving CLI stability.  
- The `simplify` built-in skill (#29280 PR) is added to clean up code changes via Git diffs, addressing a common post-edit workflow gap.  

---

## **Releases**  
*No new releases in the last 24h.*  

---

## **Hot Issues (Top 10 Noteworthy)**  

### **1. Kimi k2.5 Tool-Calling Bug (#20650)**  
🔗 [Issue](https://github.com/anomalyco/opencode/issues/20650)  
- **Problem**: Kimi k2.5 fails with invalid JSON parsing during tool calls, causing API errors (69 comments).  
- **Community Impact**: High engagement; developers seek quick fixes for production use.  

### **2. GPT Model Latency Spikes (#29079)**  
🔗 [Issue](https://github.com/anomalyco/opencode/issues/29079)  
- **Problem**: Inconsistent response times (44 comments, 24👍), frustrating real-time workflows.  
- **Why It Matters**: Users rely on OpenCode for rapid iteration; latency disrupts productivity.  

### **3. DeepSeek V4 Pro Thinking Mode Bug (#24722)**  
🔗 [Issue](https://github.com/anomalyco/opencode/issues/24722)  
- **Problem**: Omitted `reasoning_content` triggers 400 errors when thinking mode is enabled (13 comments).  
- **Impact**: Blocks reasoning-based workflows; requires API-level fixes.  

### **4. Bun Install Breaks After v1.15.1 (#27906)**  
🔗 [Issue](https://github.com/anomalyco/opencode/issues/27906)  
- **Problem**: Postinstall scripts break Bun installs (11 comments).  
- **Scope**: Non-NPM package managers face compatibility hurdles.  

### **5. Session Goals Slash Command (#27167)**  
🔗 [Issue](https://github.com/anomalyco/opencode/issues/27167)  
- **Request**: Persistent session goals (e.g., `/goal`) for multi-task projects (24 comments, 31👍).  
- **Trend**: Strong demand for stateful session management.  

### **6. DeepSeek Price Drop Adjustment (#28846)**  
🔗 [Issue](https://github.com/anomalyco/opencode/issues/28846)  
- **Proposal**: Update Go subscription limits after DeepSeek’s 75% price cut (11 comments, 15👍).  
- **Urgency**: Pricing sync needed to reflect market shifts.  

### **7. Infinite Compaction Loop (#27924)**  
🔗 [Issue](https://github.com/anomalyco/opencode/issues/27924)  
- **Bug**: Failed compaction causes infinite loops (4 comments).  
- **Risk**: Session corruption if not fixed.  

### **8. Web TUI Fork Error (#29262)**  
🔗 [Issue](https://github.com/anomalyco/opencode/issues/29262)  
- **Error**: `--continue --fork` shows server errors due to dummy session IDs (5 comments).  
- **User Impact**: Fork workflows broken until resolved.  

### **9. Monorepo Subagent Dispatch (#29271)**  
🔗 [Issue](https://github.com/anomalyco/opencode/issues/29271)  
- **Feature Request**: Directory parameter for task tools in monorepos (2 comments).  
- **Use Case**: Scalability for large codebases.  

### **10. Go Subscription Verification (#29207)**  
🔗 [Issue](https://github.com/anomalyco/opencode/issues/29207)  
- **Problem**: Active subscriptions show as expired (3 comments).  
- **Pain Point**: Billing reliability concerns.  

---

## **Key PR Progress (Top 10 Fixes/Features)**

### **1. Global Server State Management (#29285)**  
🔗 [PR](https://github.com/anomalyco/opencode/pull/29285)  
- **Change**: Moves server SDK and sync state globally, enabling multi-server support.

### **2. `/disconnect` Slash Command (#29237)**  
🔗 [PR](https://github.com/anomalyco/opencode/pull/29237)  
- **Fix**: Adds provider disconnection without manual config edits.

### **3. Bash Tool Parameter Flexibility (#26419)**  
🔗 [PR](https://github.com/anomalyco/opencode/pull/26419)  
- **Improvement**: Makes bash tool description optional (#20669).

### **4. Simplify Built-In Skill (#29280)**  
🔗 [PR](https://github.com/anomalyco/opencode/pull/29280)  
- **New Feature**: Auto-cleans Git diffs post-edits via `simplify`.

### **5. Env Variable Syntax Support (#29282)**  
🔗 [PR](https://github.com/anomalyco/opencode/pull/29282)  
- **Fix**: Supports both `${env:VAR}` and `{env:VAR}` in configs.

### **6. Windows Terminal Safety (#29281)**  
🔗 [PR](https://github.com/anomalyco/opencode/pull/29281)  
- **Critical**: Prevents `process.exit()` from killing parent terminals.

### **7. Queued Follow-Ups Restored (#29265)**  
🔗 [PR](https://github.com/anomalyco/opencode/pull/29265)  
- **Fix**: Reverts queued follow-ups after unintended removal.

### **8. Clipboard Fix for GNU Screen (#28592)**  
🔗 [PR](https://github.com/anomalyco/opencode/pull/28592)  
- **UX**: Fixes OSC52 clipboard under GNU screen.

### **9. Schema Ownership Migration (#29068)**  
🔗 [PR](https://github.com/anomalyco/opencode/pull/29068)  
- **Refactor**: Moves Drizzle schemas to `core` package.

### **10. Image Fallback Vision (#24382)**  
🔗 [PR](https://github.com/anomalyco/opencode/pull/24382)  
- **Enhancement**: Describes screenshots when models lack vision support.

---

## **Feature Request Trends**
1. **Session Lifecycle Tools**: Persistent goals (`/goal`), compaction tweaks (#27167, #5200).  
2. **Monorepo Support**: Subagent dispatch (#29271), workspace isolation.  
3. **Provider Management**: `/disconnect`, better error handling (#29237, #20650).  
4. **Pricing Sync**: Adapt to DeepSeek’s cuts (#28846, #29115).  

---

## **Developer Pain Points**
1. **Tool-Calling Bugs**: Kimi/DeepSeek issues (#20650, #24722) disrupt workflows.  
2. **Performance Fluctuations**: GPT latency (#29079) and slow UI (#27106) frustrate users.  
3. **Platform-Specific Bugs**: Bun/Breaks (#27906), Windows terminal crashes (#29281).  
4. **Billing Confusion**: Go subscriptions show incorrect status (#29207, #29135).  

**Next Steps**: Prioritize tool-calling fixes, session goals, and pricing adjustments based on community feedback.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# **Pi Community Digest – May 26, 2026**  

---

## **Today's Highlights**  
- A major **interactive mode crash fix (#4982)** resolves terminal EPIPE errors during large outputs.  
- **OpenRouter cost tracking (#4985)** now aligns with provider-reported pricing in session logs.  
- **Qwen 3.7 Max via DashScope (#4964)** is added as a new OpenAI-compatible provider for Chinese developers.  

---

## **Releases**  
*No new releases in the last 24 hours.*  

---

## **Hot Issues (Top 10 Noteworthy)**  

### **1. [Issue #4945] `openai-codex` TUI hangs on "Working..." (🔴 High Priority)**  
**Why?** Users report interactive TUI freezes without recovery until pressing Escape. Discussed in PR [#4991](https://github.com/earendil-works/pi/pull/4991) to disable 429 retries.  
👍 8 reactions | 📌 19 comments  

### **2. [Issue #4929] Silent `pi update` with `pnpm v11` (🔴 Bug)**  
**Why?** Older Pi versions persist when using `pnpm install -g @earendil-works/pi-coding-agent`. Fixing version-check logic may prevent unexpected upgrades.  
📌 5 comments | 💬 Confirmed by user  

### **3. [Issue #4801] DeepSeek v4 Pro xhigh invalid on OpenRouter (🔴 Bug)**  
**Why?** API rejects `"xhigh"` reasoning effort; docs suggest it should be accepted. PR [#4971](https://github.com/earendil-works/pi/pull/4971) adds Anthropic-compatible provider fixes.  
👍 1 reaction | 📌 5 comments  

### **4. [Issue #4993] AWS Bedrock Qwen models "invalid identifier" (🔴 Bug)**  
**Why?** Specific Qwen models fail validation. May require provider config updates.  
📌 1 comment  

### **5. [Issue #4983] Token counting inconsistency for images (🔴 Bug)**  
**Why?** Images in `user` messages count 0 tokens, but `toolResult` counts 1,200. Affects cost estimation and memory management.  
📌 1 comment  

### **6. [Issue #4972] Editor word movement skips Chinese punctuation (🔴 Bug)**  
**Why?** Option+Left/Right doesn’t stop at fullwidth commas. Needs Unicode-aware cursor logic.  
📌 1 comment  

### **7. [Issue #4970] TUI differential renderer skips painted messages (🔴 Performance)**  
**Why?** Streamed assistant responses sometimes freeze. Workaround: `requestRender(true)` forces redraw.  
📌 1 comment  

### **8. [Issue #4957] Expose editor cursor position API (🔴 Feature Request)**  
**Why?** Extensions need programmatic access to cursor location (`ctx.ui.getEditorCursor()`).  
📌 3 comments | 👍 0 reactions  

### **9. [Issue #4981] Typed settings schema for extensions (🔴 Feature Request)**  
**Why?** Developers want type-safe settings registration via `pi.settings.register()`.  
📌 1 comment  

### **10. [Issue #4995] Skill commands restore expanded blocks (🔴 UI Bug)**  
**Why?** `/tree`/`/fork` rewrites `<skill>` blocks instead of original command. Fixed in PR [#4994](https://github.com/earendil-works/pi/pull/4994).  
📌 1 comment  

---

## **Key PR Progress (Top 10 Updates)**

### **1. [PR #4985] OpenRouter cost tracking**  
Now syncs provider-reported costs with session logs. Fixes pricing discrepancies.

### **2. [PR #4994] Fix skill command restore**  
Collapses `<skill>` blocks back to `/skill:name` in forks/trees.

### **3. [PR #4982] Terminal EPIPE crash fix**  
Prevents interactive mode crashes from broken pipes.

### **4. [PR #4964] Add Qwen 3.7 Max via DashScope**  
First-class Alibaba Bailian provider for OpenAI-compatible calls.

### **5. [PR #4971] Anthropic thinking block compatibility**  
Fixes empty `thinkingSignature` support for providers replaying messages.

### **6. [PR #4978] Streaming behavior in input events**  
Exposes `streamingBehavior` to extensions (`steer`/`followUp`).

### **7. [PR #4974] Rollback + hooks + RPC memory**  
Bundles fixes for file diffs, change reviews, and memory APIs.

### **8. [PR #4965] Kitty flag 2 disabled**  
Prevents VS Code viewport reset on focus regain.

### **9. [PR #4958] Compaction abort controller race fix**  
Stabilizes manual/auto compaction lifecycle.

### **10. [PR #4979] Codex websocket timeout**  
Forces idle connections to close after inactivity.

---

## **Feature Request Trends**
1. **Provider Flexibility**: Demand for more OpenAI-compatible backends (Qwen, DashScope, Bedrock).  
2. **Extension APIs**: Cursor control (`getEditorCursor`), typed settings (`register`), and streaming behavior hints.  
3. **UI Consistency**: Skill command restoration, markdown rendering polish, and TDI stability.  
4. **Cost Transparency**: Accurate token/cost reporting across providers (OpenRouter, Bedrock).  

---

## **Developer Pain Points**
- **Interactive Mode Crashes**: EPIPE errors (#4984) and hangs (#4945) disrupt workflow.  
- **Version Management**: Silent `pi update` issues (#4929) with `pnpm`.  
- **Provider Bugs**: Invalid model IDs (#4993), reasoning effort errors (#4801), and Qwen failures.  
- **Tool Call Failures**: Edit validation (#4990) and transient crashes (#4970) reduce reliability.  
- **Unicode Support**: Fullwidth character handling (#4972) needs refinement.  

---

*Digest powered by GitHub data from [earendil-works/pi-mono](https://github.com/badlogic/pi-mono).*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# **Qwen Code Community Digest – May 26, 2026**

---

## **Today's Highlights**
- Qwen Code released **v0.16.1-nightly** with a critical build-system fix (`TS5055` stale output cleanup).  
- Two major daemon-mode API endpoints were proposed in PRs: `/session/:id/compress` and `/session/:id/stats`, addressing TUI gaps (#4514).  
- A UI bug affecting long conversations (freezing, choppy rendering) was reported multiple times (#4442).

---

## **Releases**
- **`v0.16.1-nightly.20260525.84f408017`**  
  - **Fix:** Clean stale TypeScript build outputs to prevent `TS5055` errors ([PR #4453](https://github.com/QwenLM/qwen-code/pull/4453)).

---

## **Hot Issues**

| Issue | Summary | Why It Matters |
|-------|---------|----------------|
| **[#4175](https://github.com/QwenLM/qwen-code/issues/4175)** | **Mode B roadmap for v0.16 production readiness** | Key milestone tracking; 40+ comments signal strong community interest in stable daemon mode. |
| **[#4514](https://github.com/QwenLM/qwen-code/issues/4514)** | Daemon capability backlog & prioritized gaps | Critical for SDK/plugin developers; defines next-phase priorities. |
| **[#4488](https://github.com/QwenLM/qwen-code/issues/4488)** | VS Code plugin visibility issue on newer versions | Blocks IDE integration; affects user experience. |
| **[#4479](https://github.com/QwenLM/qwen-code/issues/4479)** | Token consumption analytics request | Demand from users to track usage (e.g., "3M tokens per task"). |
| **[#4513](https://github.com/QwenLM/qwen-code/issues/4513)** | PNG inlineData rejection in OpenAI-compatible APIs | Multimodal input compatibility gap. |
| **[#4494](https://github.com/QwenLM/qwen-code/issues/4494)** | Side queries ignore output language config | Localization UX flaw; impacts multilingual workflows. |
| **[#4441](https://github.com/QwenLM/qwen-code/issues/4441)** | WeChat bot image send failures | File path restrictions block integrations. |
| **[#4501](https://github.com/QwenLM/qwen-code/issues/4501)** | `enable_thinking` not applied to qwen3 series | Model-specific thinking mode misconfiguration. |
| **[#4486](https://github.com/QwenLM/qwen-code/issues/4486)** | Telemetry trace ID escaping session context | OTLP observability bug spans lose parent context. |
| **[#4509](https://github.com/QwenLM/qwen-code/issues/4509)** | Audit log polish items post-R5 review | UI/UX refinements after PR #4386 audit. |

---

## **Key PR Progress**

| PR | Summary |
|----|---------|
| **[#4516](https://github.com/QwenLM/qwen-code/pull/4516)** | Adds `POST /session/:id/compress` and `POST /session/:id/_meta` for manual session compaction (T1.3 + T1.4 from #4514). |
| **[#4515](https://github.com/QwenLM/qwen-code/pull/4515)** | Exposes `GET /session/:id/stats` and `/export` (T2.5 + T2.6) for cross-client session data access. |
| **[#4504](https://github.com/QwenLM/qwen-code/pull/4504)** | Introduces `POST /session/:id/recap` for one-sentence session summaries. |
| **[#4519](https://github.com/QwenLM/qwen-code/pull/4519)** | Fixes side queries to respect `output-language.md` settings (e.g., Chinese prompts now return Chinese). |
| **[#4520](https://github.com/QwenLM/qwen-code/pull/4520)** | Truncates oversized tool responses to avoid model API errors. |
| **[#4521](https://github.com/QwenLM/qwen-code/pull/4521)** | Handles GET SSE stream fallbacks for MCP transports. |
| **[#4517](https://github.com/QwenLM/qwen-code/pull/4517)** | Refreshes raw model defaults (fixes OpenAI-compatible multimodal quirks). |
| **[#4522](https://github.com/QwenLM/qwen-code/pull/4522)** | Ensures session teardown uses correct ACP channel info (fixes #4325). |
| **[#4482](https://github.com/QwenLM/qwen-code/pull/4482)** | Improves telemetry error logging for OTLP bridges (e.g., ARMS backend). |
| **[#4377](https://github.com/QwenLM/qwen-code/pull/4377)** | Adds hooks for slash-command prompt expansion (settings, blocking behavior). |

---

## **Feature Request Trends**
1. **Daemon Mode APIs**: Strong demand for HTTP/SSE endpoints (e.g., `/stats`, `/export`, `/compress`) to enable SDKs/plugins (#4514, #4515).
2. **Token Analytics**: Users want real-time token consumption tracking (#4479).
3. **Multimodal Compatibility**: Fixes for OpenAI/DeepSeek image handling (#4513, #4453).
4. **Localization**: Output language support across side queries (#4494, #4519).
5. **Session Recaps**: One-punch summaries for resuming workflows (#4504).

---

## **Developer Pain Points**
- **Build System Stability**: Frequent `TS5055` errors require stale output cleanup (#4453, #4524).
- **IDE Integration**: Plugin visibility bugs in VS Code (#4488).
- **Telemetry Bugs**: Trace ID mismatches and export failures (#4486, #4482).
- **Tooling Gaps**: Missing `/list-extensions` CLI command (#4450).
- **File Path Restrictions**: WeChat bot image send failures (#4441).
- **Long-Conversation Freezes**: UI hangs with large histories (#4442).

--- 

*For more details, explore the [GitHub Issues](https://github.com/QwenLM/qwen-code/issues) and [PRs](https://github.com/QwenLM/qwen-code/pulls).*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/DenisZheng/agents-radar).*