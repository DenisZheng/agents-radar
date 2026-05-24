# AI CLI Tools Community Digest 2026-05-24

> Generated: 2026-05-24 00:36 UTC | Tools covered: 8

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

# **AI CLI Tools Ecosystem Cross-Tool Comparison Report (2026-05-24)**

---

## 1. **Ecosystem Overview**  
The AI CLI tools ecosystem in Q2 2026 is marked by a shift toward **reliability**, **cross-platform stability**, and **developer transparency**. Major players like Claude Code, OpenAI Codex, and Gemini CLI are addressing session/quota management, sandboxing, and permission models, while newer tools (e.g., Kimi CLI, OpenCode) focus on agent autonomy and project-level customization. Community sentiment prioritizes fixing "pain points" (e.g., macOS permission bugs, OOM crashes) over new features, reflecting maturity in core tooling.

---

## 2. **Activity Comparison**  

| Tool             | Issues Today | PRs Today | Releases Today | Release Notes Focus |
|------------------|--------------|-----------|----------------|---------------------|
| **Claude Code**  | 10           | 10        | `v2.1.150`     | Session limits, macOS permissions, context bugs |
| **OpenAI Codex** | 10           | 10        | `v0.134.0-alpha.3` | Sandbox fixes, usage tracking, TUI plugins |
| **Gemini CLI**   | 8            | 10        | *None*         | Subagent crashes, AST tools, routing rules |
| **GitHub Copilot**| 9           | 1         | `v1.0.52`      | Autopilot mode, MCP registry errors, clipboard fixes |
| **Kimi Code**    | 8            | 5         | *None*         | Session lazy-loading, thinking toggle, Windows logs |
| **OpenCode**     | 10           | 10        | `v1.15.10`     | Agent sandboxing, DeepSeek reasoning, mobile app |
| **Qwen Code**    | 7            | 10        | `v0.16.1`      | OOM fixes, daemon-mode docs, tool-result invariants |

---

## 3. **Shared Feature Directions**  

### **A. Session & Context Management**  
- **Tools**: Claude Code (`#38335`, `#61731`), OpenAI Codex (`#23794`), OpenCode (`#27167`)  
- **Need**: Persistent context indicators, quota visibility, and session persistence (e.g., `/goal` commands).  

### **B. Permission & Sandboxing**  
- **Tools**: Claude Code (`#61415`), OpenAI Codex (`#14338`), OpenCode (`#2242`)  
- **Need**: Granular control over compound commands, IME/TUI input corruption, and resource abuse prevention.  

### **C. Tool Reliability**  
- **Tools**: Gemini CLI (`#21983`), OpenAI Codex (`#24259`), Qwen Code (`#4185`)  
- **Need**: Sandbox fixes (Windows/macOS), PTY cleanup, and OOM mitigation strategies.  

### **D. MCP/Extension Flexibility**  
- **Tools**: GitHub Copilot (`#3436`), Kimi Code (`#2349`), OpenCode (`#7101`)  
- **Need**: Project-level MCP configs, custom registry URLs, and plugin installation fixes.  

---

## 4. **Differentiation Analysis**  

| **Tool**          | **Focus Area**                     | **Target Users**               | **Technical Approach**                     |
|--------------------|-----------------------------------|-------------------------------|-------------------------------------------|
| **Claude Code**    | Session limits, macOS permissions  | Enterprise devs, sysadmins     | Anthropic’s Sonnet model integration      |
| **OpenAI Codex**   | Sandbox stability, TUI plugins     | Cloud-native developers        | Web-based desktop with Rust toolchain      |
| **Gemini CLI**     | AST-aware tools, subagents         | ML engineers, data scientists  | Google’s Gemini LLM with TUI-first design |
| **GitHub Copilot** | Mobile/autopilot, MCP registries   | GitHub ecosystem users         | Cloud-first CLI with web app extensions    |
| **Kimi Code**      | Session navigation, thinking mode  | Chinese developers            | Local-first CLI with lightweight UX       |
| **OpenCode**       | Agent sandboxing, voice input      | Full-stack teams              | Multi-model (DeepSeek/OpenAI) hybrid      |
| **Qwen Code**      | Daemon-mode, OOM fixes             | Production SREs               | Node.js SDK + production-ready Mode B     |

---

## 5. **Community Momentum & Maturity**  
- **Most Active Communities**:  
  - **Claude Code** (10 issues/PRs today) leads in engagement due to enterprise adoption.  
  - **OpenAI Codex** (10 issues/PRs) benefits from its open-source toolchain focus.  
  - **OpenCode** (10 issues/PRs) has the highest volume of feature requests (e.g., sandboxing, voice input).  
- **Rapid Iteration**:  
  - **Qwen Code** (10 PRs today) aggressively addresses daemon-mode stability post-v0.16 release.  
  - **Gemini CLI** (10 PRs) focuses on AST tools and subagent reliability.  
- **Maturity Signals**:  
  - **Claude Code**, **OpenAI Codex**, and **GitHub Copilot** have detailed release notes, indicating stable maintenance cycles.  
  - **Kimi Code** and **OpenCode** show early-stage feature prioritization (e.g., lazy-loading, per-project prompts).  

---

## 6. **Trend Signals**  

### **A. Platform-Specific Stability**  
- **Windows/macOS**: OpenAI Codex (#24259, #61415), Kimi Code (#2348), Qwen Code (#4920) highlight OS fragmentation as a top pain point.  
- **Android/Termux**: GitHub Copilot (#3333), OpenCode (#6536) signal demand for cross-compatibility.  

### **B. Transparency & Debugging**  
- **Usage Tracking**: OpenAI Codex (#24124), Qwen Code (#4421) propose token/context logging.  
- **Reproducibility**: Qwen Code’s ring-buffer diagnostics (#4421) mirror Claude Code’s panel fixes (#61731).  

### **C. Security & Permissions**  
- **Sandboxed Agents**: OpenCode (#2242), Gemini CLI (#22093) emphasize controlled tool execution.  
- **False Positives**: Claude Code (#61185), OpenAI Codex (#23381) need better AUP alignment.  

### **D. Developer-Centric UX**  
- **Keyboard Shortcuts**: Kimi Code (#2352), Gemini CLI (#27389) prioritize ergonomic controls.  
- **Context Isolation**: OpenCode (#27167), Claude Code (#49335) request `/context` segmentation.  

---

### **Strategic Implications**  
- **Enterprise Tools**: Claude Code and OpenAI Codex lead in session/quota transparency.  
- **Emerging Players**: Kimi Code and OpenCode differentiate via local-first/agent autonomy.  
- **Cross-Trends**: Sandboxing, platform-specific fixes, and context management dominate community feedback—**prioritize these areas** in next-gen tooling investments.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# **Claude Code Skills Community Highlights Report**  
*(As of 2026-05-24)*  

---

## **1. Top Skills Ranking (Most Discussed)**  

### **Document Typography Quality Control (#514)**  
🔗 [PR #514](https://github.com/anthropics/skills/pull/514)  
- **Functionality**: Prevents common typographic issues in AI-generated documents (orphan words, widows, numbering misalignment).  
- **Discussion**: High demand for polished document outputs; users rarely explicitly request typography fixes.  
- **Status**: Open (👍 0, no comments yet).  

### **ODT Creation & Parsing (#486)**  
🔗 [PR #486](https://github.com/anthropics/skills/pull/486)  
- **Functionality**: Enables OpenDocument Format (ODT) creation, template filling, and HTML conversion.  
- **Discussion**: Critical for open-standard document workflows (LibreOffice/ISO compliance).  
- **Status**: Open (👍 0, 37 days since creation).  

### **ServiceNow Platform Skill (#568)**  
🔗 [PR #568](https://github.com/anthropics/skills/pull/568)  
- **Functionality**: Broad ServiceNow platform assistant covering ITSM, SecOps, CSDM, IntegrationHub, etc.  
- **Discussion**: Enterprise adoption focus; addresses multi-module automation needs.  
- **Status**: Open (👍 0, active updates).  

### **AURELION Cognitive Framework (#444)**  
🔗 [PR #444](https://github.com/anthropics/skills/pull/444)  
- **Functionality**: Adds AURELION’s kernel, advisor, agent, and memory skills for structured knowledge management.  
- **Discussion**: Rising interest in persistent context/memory systems for long-term projects.  
- **Status**: Open (👍 0, 82 days).  

### **Testing Patterns Suite (#723)**  
🔗 [PR #723](https://github.com/anthropics/skills/pull/723)  
- **Functionality**: Comprehensive testing guidance (unit tests, React component tests, Trophy model principles).  
- **Discussion**: High-priority for code quality assurance in AI-assisted development.  
- **Status**: Open (👍 0, 40 days).  

---

## **2. Community Demand Trends**  
From top **Issues**, key anticipated skill directions:  
- **Workflow Automation**:  
  - *AppDeploy* (#360): Direct webapp deployment via CLI.  
  - *n8n Builder/Debugger* (#190): Low-code workflow tools.  
- **Security & Compliance**:  
  - Agent governance patterns (#412), SharePoint permission logic (#1175).  
- **Enterprise Integration**:  
  - SAP-RPT-1-OSS (#181), ServiceNow (#568).  
- **Documentation & Auditability**:  
  - *Codebase Inventory Audit* (#147), *Skill Quality Analyzer* (#83).  

---

## **3. High-Potential Pending Skills**  
These active PRs show momentum but remain unmerged:  
- **PDF Case-Sensitivity Fixes (#538)**: Critical for file handling robustness.  
- **AppleScript macOS Automation (#806)**: Native OS integration vs. screenshot reliance.  
- **N8N Workflow Expertise (#190)**: Production-tested low-code automation.  
- **Masonry Image/Video Gen (#335)**: Multimodal content generation.  
🔗 See [Top PRs](#1-top-skills-ranking) for links.  

---

## **4. Skills Ecosystem Insight**  
**"The community is converging on three pillars:**  
1. **Enterprise-grade automation** (ServiceNow, AppDeploy, n8n),  
2. **Structured memory/context** (AURELION, Shodh-Memory),  
3. **Quality guardrails** (typography, testing, security).  
*This reflects a shift from standalone tooling to integrated, auditable, and persistent workflows."*  

---  
**GitHub Links**: All PRs/Issues listed above are clickable.

---

# **Claude Code Community Digest – May 24, 2026**

---

## **Today’s Highlights**
- Release `v2.1.150` rolled out with internal infrastructure improvements (no user-facing changes).  
- Multiple high-priority issues surfaced around session limits (`#38335`), macOS permission mode bugs (`#61415`, `#60724`), and false-positive security blocks (`#61185`).  
- Documentation PRs added for troubleshooting context window downgrades (`#61731`) and stale background processes (`#61750`).

---

## **Releases**  
- **`v2.1.150`**  
  - Internal infrastructure updates only (no visible user changes).  
  - *Note*: A regression in this version caused the Sonnet 4.6 context limit to display as 200K instead of 1M (fixed in [PR #61738](https://github.com/anthropics/claude-code/pull/61738)).

---

## **Hot Issues**  

| Issue | Summary | Why It Matters | Reaction |
|-------|---------|----------------|----------|
| **[#38335](https://github.com/anthropics/claude-code/issues/38335)** | Max plan session limits exhausted abnormally fast since March 23. | High-impact workflow interruption; 731 comments, 457 upvotes. | Developers report losing work mid-task due to quota mismanagement. |
| **[#61415](https://github.com/anthropics/claude-code/issues/61415)** | macOS Bypass Permissions mode fails ("Permission mode couldn't be changed"). | Blocks critical CLI automation workflows. | 13 comments, 4 upvotes—regression from v2.1.148. |
| **[#61185](https://github.com/anthropics/claude-code/issues/61185)** | False-positive cyber safeguards block sysadmin audits. | Breaks legitimate admin tasks (e.g., `sudo`, `journalctl`). | 9 comments—security researchers impacted. |
| **[#895](https://github.com/anthropics/claude-code/issues/895)** | Missing `content` parameter error on `Write` tool. | Intermittent but disruptive for file generation. | 50 comments—common edge case. |
| **[#61828](https://github.com/anthropics/claude-code/issues/61828)** | "Usage limit reached" despite low usage (2%). | Billing confusion wastes time. | 5 comments—Windows/macOS users affected. |
| **[#61912](https://github.com/anthropics/claude-code/issues/61912)** | OAuth refresh corrupts credentials during Cloudflare 5xx errors. | Auth loops break sessions. | New issue (2 comments)—upstream API instability. |
| **[#61749](https://github.com/anthropics/claude-code/issues/61749)** | Model behavior template ambiguity options added. | Improves bug reporting clarity. | Community-driven PR (giruuuuj). |
| **[#48977](https://github.com/anthropics/claude-code/issues/48977)** | Authorized CTF/security research blocked mid-session. | Violates AUP intent; kills long-running analysis. | 4 comments—whitehat frustration. |
| **[#61906](https://github.com/quotients/anthropics/claude-code/issues/61906)** | Max plan limits interrupt real work. | Churn risk for paid users. | 2 comments—workflow disruption. |
| **[#61915](https://github.com/anthropics/claude-code/issues/61915)** | IME preedit text leaks into TUI as attachment chips. | macOS input corruption (Chinese IME). | 2 comments—localized UX bug. |

---

## **Key PR Progress**  

| PR | Summary | Impact |
|----|---------|--------|
| **[#61757](https://github.com/anthropics/claude-code/pull/61757)** | Docs: Cowork add-in removal workaround. | Fixes M365 integration pain points. |
| **[#61738](https://github.com/anthropics/claude-code/pull/61738)** | Sonnet 4.6 context limit docs update. | Addresses 200K vs 1M confusion post-v2.1.150. |
| **[#61742](https://github.com/anthropics/claude-code/pull/61742)** | Agent View TUI working directory limitation. | Clarifies agent session constraints. |
| **[#61741](https://github.com/anthropics/claude-code/pull/61741)** | Stale bg-spare cleanup script. | Mitigates orphaned project directories. |
| **[#61731](https://github.com/anthropics/claude-code/pull/61731)** | Context panel downgrade fix. | Prevents silent 1M→200K drops. |
| **[#61722](https://github.com/anthropics/claude-code/pull/61722)** | Summarizer consent fabrication. | Fixes false "approved" log entries. |
| **[#61705](https://headless)** | Billing disclaimer for `claude -p`. | Warns about unexpected billing modes. |
| **[#61749](https://anthropics/claude-code/pull/61749)** | Model behavior template updates. | Better bug categorization. |
| **[#61744](https://github.com/anthropics/claude-code/pull/61744)** | Project skills load timing docs. | Explains first-turn skill delays. |
| **[#61727](https://github.com/anthropics/claude-code/pull/61727)** | Cursor extension Web session fixes. | Resumes broken web-tier sessions. |

---

## **Feature Request Trends**  
1. **MCP Server Control**: Requests per-project opt-outs ([#61379](https://github.com/anthropics/claude-code/issues/61379)) and schema caching tweaks.  
2. **Permission Flexibility**: Skipping prompts for low-risk commands ([#46363](https://github.com/anthropics/claude-code/issues/46363)) and compound Bash handling ([#16561](https://github.com/anthropics/claude-code/issues/16561)).  
3. **Context Management**: Isolate `/release-notes` from conversation history ([#49335](https://github.com/anthropics/claude-code/issues/49335)) and `/context` inflation fixes ([#61907](https://github.com/anthropics/claude-code/issues/61907)).  
4. **Security Workflow**: Context-aware CTF/penetration testing support ([#48977](https://github.com/anthropics/claude-code/issues/48977), [#40518](https://github.com/anthropics/claude-code/issues/40518)).  

---

## **Developer Pain Points**  
- **Session Limits**: Frequent complaints about abrupt Max plan quota hits (#38335, #61828, #61906).  
- **Permissions**: Compound command prompts (#16561), IME/TUI bugs (#61915), and macOS toggle failures (#61415, #60724).  
- **Context Bugs**: `/context` inflation (#61907), false consent logs (#61722), and panel-induced limit drops (#61731).  
- **Tooling**: MCP server token waste (#61379), project skill delays (#61744), and background process leaks (#61750).  
- **UX**: Status bar truncation (#61736), infinite scrolling (#61729), and input corruption (#61915).  

*Community sentiment*: Developers prioritize reliability (session/quota management) over new features, with frustration around permission models and hidden costs.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# **OpenAI Codex Community Digest – May 24, 2026**

---

## **1. Today's Highlights**
- The Codex Rust toolchain released `v0.134.0-alpha.3`, focusing on stability and sandbox improvements.  
- A major focus of community discussion is the **context/token usage indicator** in the Desktop app ([Issue #23794](https://github.com/openai/codex/issues/23794)), with 141 comments highlighting its importance for developer visibility.  
- New **usage tracking** features are in progress via PRs (#24121–#24124), enabling token-consumption insights.

---

## **2. Releases**
- **Rust CLI: v0.134.0-alpha.3**  
  - Focus: Sandbox reliability, Windows/OS-specific fixes, and improved TUI diagnostics.  
  - [Release Notes](https://github.com/openai/codex/releases/tag/rust-v0.134.0-alpha.3)

---

## **3. Hot Issues (Top 10 Noteworthy)**
| Issue | Summary | Impact |
|-------|---------|--------|
| **[#23794](https://github.com/openai/codex/issues/23794)** | Desktop app no longer shows context/token usage after update (141 comments). | Critical for developers monitoring session limits; widespread frustration. |
| **[#3962](https://github.com/openai/codex/issues/3962)** | Request audible completion sound (164 👍s). | UX enhancement for long-running tasks in background. |
| **[#9508](https://github.com/openai/codex/issues/9508)** | Weekly limit reset non-determinism (28 👍s). | Billing transparency issue affecting Pro users. |
| **[#18960](https://github.com/openai/codex/issues/18960)** | WebSocket reconnect loops in macOS (24 👍s). | Stability concern for streaming workflows. |
| **[#8784](https://github.com/openai/codex/issues/8784)** | Add `codex delete <session>` (92 👍s). | Cleanup utility for abandoned sessions. |
| **[#23381](https://github.com/openai/codex/issues/23381)** | False-positive cybersecurity warnings blocking Gov/GSM dev work (17 comments). | Safety-checks may hinder legitimate use cases. |
| **[#22700](https://github.com/openai/codex/issues/22700)** | iOS remote control revocation bug (30 👍s). | Session management flaw in mobile pairing. |
| **[#14338](https://github.com/openai/codex/issues/14338)** | Writable `.git` dir in Linux sandbox (9 👍s). | Workflow flexibility request for bubblewrap. |
| **[#24031](https://github.com/openai/codex/issues/24031)** | GPT-5.5 1M context window support (11 👍s). | High-demand feature for large-context models. |
| **[#24259](https://github.com/openai/codex/issues/24259)** | Windows ARM64 sandbox intermittent failures. | Platform-specific reliability gap. |

---

## **4. Key PR Progress (Top 10)**
| PR | Summary |
|----|---------|
| **[#24257](https://github.com/openai/codex/pull/24257)** | Fix TUI plugin config reads to avoid stale client-local state. |
| **[#24266](https://github.com/openai/codex/pull/24266)** | Source TUI plugins from app-server list only. |
| **[#24127](https://github.com/openai/codex/pull/24127)** | App-server RPC for next-prompt suggestions. |
| **[#24126](https://github.com/openai/codex/pull/24126)** | Core suggestion engine for next-prompt logic. |
| **[#24124](https://github.com/openai/codex/pull/24124)** | CLI `/usage` command for token consumption. |
| **[#24123](https://github.com/openai/codex/pull/24123)** | App-server usage report API. |
| **[#24265](https://github.com/openai/codex/pull/24265)** | TUI MCP inventory sync with app-server. |
| **[#24122](https://github.com/openai/codex/pull/24122)** | Token attribution tracking for local tools/apps. |
| **[#24255](https://github.com/openai/codex/pull/24255)** | Route TUI trust persistence via app server. |
| **[#24261](https://github.com/openai/codex/pull/24261)** | `codex doctor` now includes environment diagnostics. |

---

## **5. Feature Request Trends**
- **Context Management**:  
  - Requests for persistent context indicators (#23794), larger windows (#24031), and cleanup tools (#8784) dominate.
- **UX Improvements**:  
  - Audible task completion (#3962), status bars, and usage reports (#24124) are recurring themes.
- **Sandbox Flexibility**:  
  - Linux OpenBSD (#21977), Windows elevation (#19315), and `.git` writeability (#14338) are top pain points.
- **Billing Transparency**:  
  - Deterministic rate-limit resets (#9508) and accurate token tracking (#24121) are critical for Pro users.

---

## **6. Developer Pain Points**
- **Visibility Gaps**:  
  - Missing context/token indicators (#23794) and false-positive safety checks (#23381) disrupt workflows.
- **Sandbox Bugs**:  
  - Windows (#24259, #19315) and macOS (#18960) sandbox failures cause intermittent failures.
- **Platform-Specific Issues**:  
  - iOS remote control bugs (#22700) and ARM64 sandbox errors (#24259) highlight platform fragmentation.
- **CLI/TUI Confusion**:  
  - Multiple CLI versions (#22705) and raw ANSI output (#23031) confuse debugging efforts.

**Key Takeaway**: Developers prioritize **reliability**, **transparency**, and **cross-platform consistency**. The upcoming usage-tracking PRs (#24121–#24124) and sandbox fixes aim to address these pain points.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# **Gemini CLI Community Digest – May 24, 2026**  

---

## **Today's Highlights**  
No new releases in the last 24 hours. Key activity includes:  
- **High-priority fixes** for subagent crashes (e.g., browser agent Wayland failures) and memory inbox patch validation issues (#21983, #26523).  
- **Routing enhancements** with configurable numeric rules (#27406), addressing user complaints about static complexity thresholds.  
- **Security hardening**, including MCP server blacklist bypass prevention (#27377) and Auto Memory session retry logic (#26522).  

---

## **Releases**  
*None published this week.*  

---

## **Hot Issues**  

### **1. Robust Component-Level Evaluations (#24353)**  
*Priority: P1 | Comments: 7*  
Follow-up to behavioral eval tests (#15300), now covering 76+ tests. Community engagement is low (👍 0), suggesting maintainers need more visibility into testing workflows. [🔗 Issue](https://github.com/google-gemini/gemini-cli/issues/24353)  

### **2. Generalist Agent Hangs (#21409)**  
*Priority: P1 | Comments: 7 | 👍 8*  
User reports indefinite hangs when deferring to subagents. High upvotes indicate frustration with blocking UX. Root cause likely relates to agent initialization or turn limits. [🔗 Issue](https://github.com/google-gemini/gemini-cli/issues/21409)  

### **3. Browser Agent Ignores `settings.json` Overrides (#22267)**  
*Priority: P2 | Comments: 3*  
Browser agent bypasses maxTurns/configurations, risking uncontrolled resource usage. Needs fix for config consistency. [🔗 Issue](https://github.com/google-gemini/gemini-cli/issues/22267)  

### **4. Shell Command Execution Stuck (#25166)**  
*Priority: P1 | Comments: 4 | 👍 3*  
CLI hangs post-command completion, even for trivial commands. Likely a PTY cleanup bug. [🔗 Issue](https://github.com/google-gemini/gemini-cli/issues/25166)  

### **5. Memory Inbox Patch Validation (#26523)**  
*Priority: P2 | Comments: 3*  
Silently skips invalid patches (malformed, out-of-root targets). Could lead to data integrity risks if unpatched files are modified. [🔗 Issue](https://github.com/google-gemini/gemini-cli/issues/26523)  

### **6. AST-Aware File Read Investigation (#22745)**  
*Priority: P2 | Comments: 7*  
Proposes AST tools (tilth/glyph) for precise file navigation, reducing misaligned reads. Early-stage feedback positive (👍 1). [🔗 Issue](https://github.com/google-gemini/gemini-cli/issues/22745)  

### **7. Model Creates Temp Scripts Randomly (#23571)**  
*Priority: P2 | Comments: 3*  
Uncontrolled script generation across directories complicates cleanup. Suggests lack of sandbox enforcement. [🔗 Issue](https://github.com/google-gemini/gemini-cli/issues/23571)  

### **8. Subagent Permission Bypass (#22093)**  
*Priority: P2 | Comments: 2*  
Subagents (e.g., generalist) activate despite `disabled=true` in configs. Security concern if unintended tool access occurs. [🔗 Issue](https://github.com/google-gemini/gemini-cli/issues/22093)  

### **9. Server-Driven Model Management (#20878)**  
*Priority: P2 | Comments: 2*  
Proposal to fetch model lists remotely (e.g., via `LoadCodeAssist`). Aligns with dynamic routing needs. [🔗 Issue](https://github.com/google-gemini/gemini-cli/issues/20878)  

### **10. RCE Vulnerability in MCP Blacklist (#27377)**  
*Critical*  
Bypasses user blacklists via workspace-scoped MCP servers. PR adds input sanitization. [🔗 PR](https://github.com/google-gemini/gemini-cli/pull/27377)  

---

## **Key PR Progress**  

### **1. Configurable Numeric Routing (#27406)**  
Adds per-model complexity-score mappings in `settings.json`, replacing binary thresholds. Resolves #21805. [🔗 PR](https://github.com/google-gemini/gemini-cli/pull/27406)  

### **2. PTY Memory Leak Fix (#27154)**  
Fixes `ShellExecutionService` leaks by forcing synchronous PTY cleanup. Prevents file descriptor exhaustion. [🔗 PR](https://github.com/google-gemini/gemini-cli/pull/27154)  

### **3. MCP Blacklist Hardening (#27377)**  
Blocks malicious MCP servers that bypass `excluded`/`allowed` lists. Critical security fix. [🔗 PR](https://github.com/google-gemini/gemini-cli/pull/27377)  

### **4. AST Version Parsing (#27375)**  
Fixes Vertex AI model ID regex (`projects/.../models/`) to restore tool access (e.g., web search). [🔗 PR](https://github.com/google-gemini/gemini-cli/pull/27375)  

### **5. Command Substitution Toggle (#27400)**  
New `allowCommandSubstitution` in settings to avoid wasted turns on blocked commands. [🔗 PR](https://github.com/google-gemini/gemini-cli/pull/27400)  

### **6. Session Context Filtering (#27391)**  
Hides internal `<session_context>` XML blocks from TUI resumes. Improves readability. [🔗 PR](https://github.com/google-gemini/gemini-cli/pull/27391)  

### **7. Duplicate Slash Commands (#27092)**  
Prevents duplicate command loading when home/project dirs collide. Edge-case fix. [🔗 PR](https://github.com/google-gemini/gemini-cli/pull/27092)  

### **8. Grep Node Deprecation (#27379)**  
Removes `shell: true` in `GrepLogic#isCommandAvailable` to comply with Node 22+ security policies. [🔗 PR](https://github.com/google-gemini/gemini-cli/pull/27379)  

### **9. Environment Variable Permissions (#24782)**  
Introduces `allowEnv` policy to run `VAR=value shell_cmd` without confirmation. [🔗 PR](https://github.com/google-gemini/gemini-cli/pull/24782)  

### **10. Routing Classifier Bypass (#27389)**  
Prevents orphaned function responses after history pruning. Fixes "400 Bad Request" errors. [🔗 PR](https://github.com/google-gemini/gemini-cli/pull/27389)  

---

## **Feature Request Trends**  
1. **AST-Aware Tools**: Multiple requests (#22745, #22747, #22746) for AST parsing (tilth/glyph) to improve file/codebase navigation precision.  
2. **Agent Autonomy**: Demand for self-awareness (#21432) and subagent backgrounding (#22741) to reduce manual intervention.  
3. **Configurable Routing**: Push for dynamic model selection (#27406, #20878) beyond static thresholds.  
4. **Memory/Inbox Reliability**: Validations for patch handling (#26523, #26516) and signal-based retries (#26522).  

---

## **Developer Pain Points**  
- **Stuck Processes**: Frequent CLI hangs post-execution (#25166, #21983) suggest PTY/sandbox cleanup gaps.  
- **Permission Confusion**: Subagents activating despite `disabled=true` (#22093) requires config enforcement.  
- **Resource Abuse**: Browser agent ignores maxTurns (#22267) and script sprawl (#23571) risk uncontrolled resource use.  
- **Security Risks**: Unpatched memory patches (#26523) and MCP bypass (#27377) highlight urgent hardening needs.  
- **Tool Limitations**: Static thresholds (#21805) and AST adoption lag (#22745) hinder flexibility.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# **GitHub Copilot CLI Community Digest – May 24, 2026**

---

## **1. Today's Highlights**  
- **v1.0.52** released with fixes for stdin handling in non-interactive commands, improved Autopilot mode permissions, and a vertical scrollbar in the main conversation view.  
- Key issues flagged: **Autonomous continuation after premium requests (#1477)** and **Android/Termux support broken due to glibc dependency (#3333)** are top concerns.  
- New bug reports highlight **MCP registry URL misconstruction (#3436)** and **clipping in terminal transcript rendering (#3482)**.

---

## **2. Releases**  
### **v1.0.52 (May 23, 2026)**  
- **Non-interactive subcommands** (`plugin list`, `mcp list`, etc.) no longer consume `stdin`.  
- **Vertical scrollbar** added to the main conversation view with mouse drag support.  
- **Autopilot mode** permission prompts now behave predictably.  
🔗 [Release Notes](https://github.com/github/copilot-cli/releases/tag/v1.0.52)  

---

## **3. Hot Issues**  
| # | Issue Summary | Why It Matters | Reaction |
|---|--------------|----------------|----------|
| **[#1477](https://github.com/github/copilot-cli/issues/1477)** | Autopilot triggers unexpected "Continuing autonomously" messages after premium requests. | Users report it feels like a bug, disrupting workflow trust. | 👍18, 💬10 |
| **[#3333](https://github.com/github/copilot-cli/issues/3333)** | Android/Termux support broken due to `glibc` vs. `Bionic libc` conflict. | Blocks CLI use on Android/Termux environments. | 👍1, 💬4 |
| **[#3436](https://github.com/github/copilot-cli/issues/3436)** | `/mcp search` misses `/v0.1/` segment in custom MCP registry URLs. | Breaks org-level MCP registries without manual path fixes. | 👍1, 💬2 |
| **[#3481](https://github.com/github/copilot-cli/issues/3481)** | `contextTier=long_context` not applied on startup. | Long-context features fail silently in non-interactive sessions. | 👍0, 💬0 |
| **[#3496](https://github.com/github/copilot-cli/issues/3496)** | Copy/paste fails in Timeline for single-line selections. | UI regression affecting text reuse. | 👍0, 💬0 |
| **[#3486](https://github.com/github/copilot-cli/issues/3486)** | `/mcp show` can’t scroll all tools for an MCP server. | Limits visibility of available tools. | 👍0, 💬0 |
| **[#3483](https://github.com/github/copilot-cli/issues/3483)** | Clipboard copy broken on Ubuntu. | Blocks standard text operations. | 👍0, 💬0 |
| **[#3480](https://github.com/github/copilot-cli/issues/3480)** | No way to specify model in Rubber Duck mode. | Forces reliance on default models (e.g., OPUS 4.7). | 👍0, 💬0 |
| **[#3479](https://github.com/github/copilot-cli/issues/3479)** | `/env` doesn’t list loaded extensions. | Hinders AI agent tool discovery. | 👍0, 💬0 |
| **[#2284](https://github.com/github/copilot-cli/issues/2284)** | Persist `/add-dir` permissions across sessions. | Requires reconfiguration after each restart. | 👍12, 💬3 |

---

## **4. Key PR Progress**  
| # | PR Summary | Impact |
|---|------------|--------|
| **[#2381](https://github.com/github/copilot-cli/pull/2381)** | Added Fish shell PATH configuration support. | Fixes silent PATH setup for Fish users. |

---

## **5. Feature Request Trends**  
- **Persistent permissions** (#2284): Directory access rules lost post-session is a top ask.  
- **Model selection flexibility** (#3480): Demand for explicit control over Rubber Duck mode models.  
- **Enterprise/MCP fixes**: Custom registry URL handling (#3436) and session enablement (#3442) need attention.  
- **UI/UX**: Scrollable tool lists (#3486), clipboard fixes (#3483), and Timeline copy-paste (#3496).  

---

## **6. Developer Pain Points**  
- **Platform fragmentation**: Linux/Android/Termux support gaps (#3333, #3483).  
- **Silent failures**: Configuration corruption (trustedFolders paths #3487/3488), dropped SKILL.md files (#3494).  
- **Tool discoverability**: Missing extension listings in `/env` (#3479), unscrollable tool outputs (#3486).  
- **Premium friction**: Unwanted autonomous continuation prompts (#1477) and session enablement blocks (#3442).  

--- 

**Stay tuned for updates on these critical issues!** 🚀

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# **Kimi Code CLI Community Digest – May 24, 2026**  

---

## **1. Today's Highlights**  
The Kimi Code CLI community is actively addressing session management, MCP tool improvements, and Windows-specific logging issues. Recent PRs focus on background MCP loading, log rotation fixes, and user-requested features like `/thinking` slash commands. No new releases in the last 24 hours.

---

## **2. Releases**  
*No new releases published today.*

---

## **3. Hot Issues**  

### **🔹 #2357: Load Latest Messages First in Sessions**  
*Why it matters:* Users want to avoid waiting for full session history when switching contexts. Proposed lazy-loading of recent messages improves UX. [GitHub Issue](https://github.com/MoonshotAI/kimi-cli/issues/2357)  

### **🔹 #2352: /thinking Slash Command & Ctrl+T Shortcut**  
*Why it matters:* Simplifies toggling thinking mode (currently requires model reselection). A `/thinking` command + `Ctrl+T` shortcut would streamline workflow. [GitHub Issue](https://github.com/MoonshotAI/kimi-cli/issues/2352)  

### **🔹 #2348: Loguru PermissionError on Windows (Multi-Process)**  
*Why it matters:* Concurrent processes fail to rotate logs due to file locks on Windows. Fix needed for multi-user environments. [GitHub Issue](https://github.com/MoonshotAI/kimi-cli/issues/2348)  

### **🔹 #2351: Shell Mode History Visibility to Agent Mode**  
*Why it matters:* Isolation between Shell (`Ctrl-X`) and Agent modes forces manual copy-pasting. Unified history would improve debugging. [GitHub Issue](https://github.com/MoonshotAI/kimi-cli/issues/2351)  

### **🔹 #2347: Show SessionStart Hook stdout**  
*Why it matters:* Users need hooks (e.g., project health checks) to display output automatically during session initialization. [GitHub Issue](https://github.com/MoonshotAI/kimi-cli/issues/2347)  

*(See full list below.)*

---

## **4. Key PR Progress**  

### **🔹 #2355: Defer MCP Startup Failures Without Aborting**  
*Fix:* Background MCP servers no longer block interactive sessions if startup fails. Adds resilience for unstable tool connections. [PR Link](https://github.com/MoonshotAI/kimi-cli/pull/2355)  

### **🔹 #2354: Per-Process Logs on Windows**  
*Fix:* Prevents log conflicts by using `kimi.<pid>.log` per process instead of shared files. Critical for multi-instance usage. [PR Link](https://github.com/MoonshotAI/kimi-cli/pull/2354)  

### **🔹 #2158: Ctrl+T Toggle for Thinking Content**  
*Feature:* Runtime toggle to show/hide model reasoning (e.g., Kimi-K2-Thinking-Turbo) via keyboard. Closes #1632. [PR Link](https://github.com/MoonshotAI/kimi-cli/pull/2158)  

### **🔹 #2353: Tighten Web App Layout Spacing**  
*UX Fix:* Reduces visual clutter in the web UI while preserving safe-area padding. [PR Link](https://github.com/MoonshotAI/kimi-cli/pull/2353)  

### **🔹 #2350: Non-UTF8 Worker Output Handling**  
*Fix:* Allows worker processes (e.g., on Windows) to emit locale-encoded bytes without crashing. Resolves UnicodeDecodeError edge cases. [PR Link](https://github.com/MoonshotAI/kimi-cli/pull/2350)  

### **🔹 #2349: Project-Level MCP Configuration**  
*Feature:* Merge/override strategy for `.mcp-conf` files at repo/project level. Enables granular tool control. [PR Link](https://github.com/MoonshotAI/kimi-cli/pull/2349)  

*(Full list below.)*

---

## **5. Feature Request Trends**  
Top requested enhancements:  
- **Session Navigation:** Lazy-load latest messages (#2357), unified history across modes (#2351).  
- **Shortcut Improvements:** `/thinking` command + `Ctrl+T` (#2352), thinking visibility toggle (#2158).  
- **Hook Usability:** Display `SessionStart` hook output (#2347).  
- **MCP Tooling:** Background loading (#2355), project-level configs (#2349).  

---

## **6. Developer Pain Points**  
Recurring frustrations:  
- **Windows Multi-Process Conflicts:** Log rotation failures (#2348), worker encoding errors (#2350).  
- **Workflow Inefficiencies:** Manual copy-pasting between Shell/Agent modes (#2351), verbose model reselection for thinking mode (#2352).  
- **Tool Reliability:** MCP startup timeouts blocking sessions (#2343, fixed in #2355).  

---

### **📌 Full Lists**  
**Issues:** [#2357](#), [#2352](#), [#2348](#), [#2351](#), [#2347](#), [#2346](#), [#2345](#), [#2344](#), [#2343](#), [#2342](#)  
**PRs:** [#2355](#), [#2354](#), [#2353](#), [#2350](#), [#2349](#), [#2348](#), [#2347](#), [#2346](#), [#2345](#), [#2344](#)  

*Contributions welcome! Check GitHub links for details.*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# **OpenCode Community Digest – May 24, 2026**  

---

## **Today’s Highlights**  
- Release `v1.15.10` restored legacy desktop flows for project/session opening after a regression.  
- Key issues around **sandboxed agent execution**, **custom system prompts**, and **voice input** dominate discussions.  
- Major PRs focus on **LLM provider normalization** (OpenAI/DeepSeek reasoning support) and **session message ordering**.  

---

## **Releases**  
### **v1.15.10 (Desktop)**  
- **Bugfixes**: Restored legacy production flows for opening projects and starting sessions.  
🔗 [Release Notes](https://github.com/anomalyco/opencode/releases/tag/v1.15.10)  

---

## **Hot Issues** *(Top 10 Noteworthy)*  

1. **[Sandboxed Agent Execution](#2242)**  
   - Users want restricted terminal access (e.g., no cross-directory file edits). Similar to `gemini-cli`/`codex-cli`.  
   - **34 comments | 👍 46**  
   🔗 [#2242](https://github.com/anomalyco/opencode/issues/2242)  

2. **[Custom System Prompts by Project/Directory](#7101)**  
   - Request for per-project or directory-level system prompts (e.g., via `AGENTS.md`).  
   - **34 comments | 👍 111**  
   🔗 [#7101](https://github.com/anomalyco/opencode/issues/7101)  

3. **[Speech-to-Text Input](#4695)**  
   - Voice control for "lazy" developers (popular feature request).  
   - **31 comments | 👍 152**  
   🔗 [#4695](https://github.com/anomalyco/opencode/issues/4695)  

4. **[Native Session Goals](#27167)**  
   - Persistent session goals (e.g., `/goal`) for task focus.  
   - **20 comments | 👍 25**  
   🔗 [#27167](https://github.com/anomalyco/opencode/issues/27167)  

5. **[Mobile App Support](#6536)**  
   - Demand for native mobile app vs. browser-only access.  
   - **13 comments | 👍 42**  
   🔗 [#6536](https://github.com/anomalyco/opencode/issues/6536)  

6. **[Git Abuse Warnings](#3176)**  
   - Criticism of excessive `git add .` in large directories.  
   - **16 comments | 👍 7**  
   🔗 [#3176](https://github.com/anomalyco/opencode/issues/3176)  

7. **[Long-Running Bash Truncation](#11313)**  
   - Commands with large outputs fail silently, causing retry loops.  
   - **14 comments | 👍 6**  
   🔗 [#11313](https://github.com/anomalyco/opencode/issues/11313)  

8. **[Edit Tool Indentation Bug](#14612)**  
   - AI replaces tabs with double tabs in edited files (diff hides the issue).  
   - **10 comments | 👍 1**  
   🔗 [#14612](https://github.com/anomalyco/opencode/issues/14612)  

9. **[DeepSeek Thinking Toggle](#24610)**  
   - Request UI button to disable DeepSeek’s default reasoning mode.  
   - **3 comments | 👍 5**  
   🔗 [#24610](https://github.com/anomalyco/opencode/issues/24610)  

10. **[Compaction Infinite Loop](#27924)**  
    - Sessions stuck recompacting when compression fails.  
    - **3 comments | 👍 0**  
    🔗 [#27924](https://github.com/anomalyco/opencode/issues/27924)  

---

## **Key PR Progress** *(Top 10 Impactful)*  

1. **[LLM Provider Normalization](#29025)**  
   - Preserves OpenAI-compatible reasoning continuations (DeepSeek/Anthropic).  
   🔗 [#29025](https://github.com/anomalyco/opencode/pull/29025)  

2. **[Reasoning Header Separation](#29028)**  
   - Fixes TUI rendering of collapsed/expanded thinking blocks.  
   🔗 [#29028](https://github.com/anomalyco/opencode/pull/29028)  

3. **[Message Timestamps](#28458)**  
   - Adds context-aware timestamps (date + time) for messages.  
   🔗 [#28458](https://github.com/anomalyco/opencode/pull/28458)  

4. **[Retry Cap](#29047)**  
   - Limits retries at 5 attempts to prevent infinite loops.  
   🔗 [#29047](https://github.com/anomalyco/opencode/pull/29047)  

5. **[Empty Output Fallback](#29048)**  
   - Triggers fallback if a tool returns empty output (e.g., rate limits).  
   🔗 [#29048](https://github.com/anomalyco/opencode/pull/29048)  

6. **[Session Message Ordering](#29035)**  
   - Ensures prompt loop uses chronological message IDs.  
   🔗 [#29035](https://github.com/anomalyco/opencode/pull/29035)  

7. **[GC Death Spiral Fix](#29029)**  
   - Normalizes `MessageV2` shapes to stabilize memory usage.  
   🔗 [#29029](https://github.com/anomalyco/opencode/pull/29029)  

8. **[FPS Terminal Fix](#13901)**  
   - Fixes CPU overuse in web interface’s terminal animation.  
   🔗 [#13901](https://github.com/anomalyco/opencode/pull/13901)  

9. **[Cancel Queued Prompts](#27399)**  
   - Adds "Cancel" action in TUI for queued user inputs.  
   🔗 [#27399](https://github.com/anomalyco/opencode/pull/27399)  

10. **[Provider Headers Preservation](#24066)**  
    - Retains custom `User-Agent` headers from `opencode.json`.  
    🔗 [#24066](https://github.com/anomalyco/opencode/pull/24066)  

---

## **Feature Request Trends**  
- **Agent Sandboxing (#2242)**: Top-priority security concern.  
- **Per-Project Context (#7101)**: Flexible prompt management.  
- **Voice Control (#4695)**: Mobile-friendly UX demand.  
- **Session Goals (#27167)**: Task persistence (e.g., `/goal`).  
- **Mobile App (#6536)**: Native app integration.  
- **Thinking Toggle (#24610)**: Model-specific reasoning control.  

---

## **Developer Pain Points**  
1. **Tool Reliability**:  
   - Edit tool bugs (tabs, generics stripping—[#14612, #21911]).  
   - Git abuse warnings ([#3176]) and command truncation ([#11313]).  
2. **Debugging Friction**:  
   - Debugger setup issues ([#5443]) and LSP misconfigurations ([#7405]).  
3. **Performance**:  
   - Compaction loops ([#27924]) and TUI responsiveness ([#25637]).  
4. **Provider Compatibility**:  
   - Gemini/Vertex errors ([#28732], [#14627]) and OpenAI reasoning fixes ([#29025]).  

--- 

**Stay tuned for next week’s digest!** 🚀

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

---

### **Pi Community Digest – May 24, 2026**  

---

#### **Today's Highlights**  
The Pi team released `v0.75.5` with improved file tool performance on Windows and cleaner read tool output. Key issues addressed include session folder collisions (`#4877`), extension compatibility with Bun (`#4160`), and a critical bug breaking all tools in `v0.75.4` (`#4908`). Notable PRs added Alibaba DashScope provider support (#4926) and startup timing diagnostics (#4925).  

---

#### **Releases**  
- **`v0.75.5`** (May 23):  
  - **Faster file tools**: Async filesystem operations for streaming (Windows focus).  
  - **Cleaner read output**: Collapsed `read` tools show only the line by default (`Ctrl+O` expands full content).  
  [Release Notes](https://github.com/earendil-works/pi-mono/releases/tag/v0.75.5)  

---

#### **Hot Issues**  
1. **[Session folder collision](#4877)**: Sessions from different paths may share folders (e.g., `/a-b/c-d` and `/a/b/c/d` both map to `--a-b-c-d--`). Could cause unexpected data mixing.  
2. **[Bun runtime issues](#4160)**: Extensions fail without `npm`/`node` installed; users must manually install dependencies.  
3. **[Critical tool crash in v0.75.4](#4908/4909)**: All extensions/tools break due to `message.content is not iterable`. Blocks workflows entirely.  
4. **[Shift+Enter broken](#4918)**: No multi-line input in CLI; workaround via `Ctrl+J` needed.  
5. **[Cyrillic OAuth names break API](#4927)**: ChatGPT profiles with non-ASCII names cause encoding errors.  
6. **[Edit tool invalid JSON](#4934)**: Qwen3 Coder generates malformed payloads, failing validation.  
7. **[Gemini schema rejection](#4932)**: `const` in tool schemas triggers 400 errors; requires JSON Schema adjustment.  
8. **[Lemonada context usage misreported](#4924)**: Local models show `0.0%` usage despite working.  
9. **[URL word-wrap breaks links](#4923)**: Long URLs split at hyphens, making them unclickable.  
10. **[Auth lock starvation](#4919)**: Force-quit instances leave stale locks, blocking credential reads.  

---

#### **Key PR Progress**  
1. **[Tool permissions & /yolo mode](#4936)**: Add session-level gates for side-effect tools (bash/edit/write); promptless "yolo" mode for testing.  
2. **[Fix Apple Terminal Shift+Enter](#4922)**: Replicate Claude Code’s behavior for macOS users.  
3. **[Alibaba DashScope provider](#4926)**: First-class support for Qwen 3.7 Max via OpenAI-compatible endpoint.  
4. **[Startup timing diagnostics](#4925)**: New `--startup` flag replaces manual `PI_TIMING=1` env var.  
5. **[Reclaim auth locks](#4921)**: Fix stale lock starvation causing "No API key found" errors.  
6. **[Async fs ops in tools](#4756)**: Defender sync hangs on Windows; image resizing moved to workers.  
7. **[OpenAI Codex model hydration](#4913)**: Fetch live ChatGPT models for logged-in accounts.  
8. **[Strip `const` from schemas](#4930)**: Fix Gemini API compatibility.  
9. **[Detect `nul` device bug](#4920)**: Bash tool now handles Windows `NUL` correctly.  
10. **[Bun background processes leak](#4915)**: Investigate memory spikes post-launch.  

---

#### **Feature Request Trends**  
- **Tool Permissions**: Multiple requests for finer-grained control over side-effect tools (#4936, #4879).  
- **Provider Expansion**: Demand for more first-class providers (e.g., Alibaba DashScope, #4926).  
- **UI Improvements**: Keyboard navigation (#4928), scrollback (#4917), and URL handling (#4923).  
- **Configuration Flexibility**: Env vars in `settings.json` (#3833), model name display (#1840).  
- **Debugging Tools**: Startup profiling (#4925), auth lock visibility (#4919).  

---

#### **Developer Pain Points**  
1. **Extension Compatibility**: Bun/npm conflicts (#4160) and tool crashes (#4908) block workflows.  
2. **Performance Hangs**: Defender sync delays on Windows (#4756); startup slowness (#4925).  
3. **CLI UX**: Broken shortcuts (Shift+Enter, #4918) and poor error messaging (auth locks, #4919).  
4. **Platform Bugs**: `NUL` mishandling (#4920), Cyrillic OAuth failures (#4927).  
5. **Tooling Gaps**: No `setCursor()` API (#4928), context reporting (#4924).  

--- 

*Digest generated from GitHub data: [badlogic/pi-mono](https://github.com/badlogic/pi-mono)*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# **Qwen Code Community Digest – May 24, 2026**

---

## **1. Today's Highlights**
- Release `v0.16.1` landed with critical fixes for tool-use↔tool-result consistency and daemon-mode stability ([Release Notes](https://github.com/QwenLM/qwen-code/releases/tag/v0.16.1)).
- A major **OOM issue in long sessions** (#4185) was highlighted, impacting Node/V8 heap pressure, with community discussion on memory compaction strategies.
- The team pushed a **daemon-mode deep-dive documentation set** ([PR #4412](https://github.com/QwenLM/qwen-code/pull/4412)), aiding developers in debugging and extending Mode B (`qwen serve`).

---

## **2. Releases**
- **v0.16.1** (latest):  
  - Fixed `core/cli` tool-use↔tool-result invariants across failure paths (@wenshao).  
  - Addressed build system issues (`npm run build`) due to stale `.d.ts` files ([Issue #4447](https://github.com/QwenLM/qwen-code/issues/4447)).

---

## **3. Hot Issues**
| Issue | Summary & Impact |
|-------|------------------|
| **[#4185](https://github.com/QwenLM/qwen-code/issues/4185)** | OOM crashes in long sessions due to V8 heap limits. Critical for production workloads; community proposes ring-buffer diagnostics ([PR #4421](https://github.com/QwenLM/qwen-code/issues/4421)). |
| **[#4175](https://github.com/QwenLM/qwen-code/issues/4175)** | Mode B roadmap toward v0.16 "production-ready." 36 comments from devs prioritizing daemon stability, auth, and session multiplexing. |
| **[#4452](https://github.com/QwenLM/qwen-code/issues/4452)** | Microsoft Claude Code plugin installation fails. Blocking extensibility; needs CLI fixes (`--list-extensions`). |
| **[#4419](https://github.com/QwenLM/qwen-code/issues/4419)** | File naming standardization (kebab-case + ESLint enforcement). Consistency request for large-scale projects. |
| **[#4466](https://dev.qwen-code.org/issues/4466)** | Env var substitution in `settings.json` fails silently. Security/credential risk reported by Docker MCP users. |
| **[#4448](https://github.com/QwenLM/qwen-code/issues/4448)** | Invalid `settings.json` keys launch without error. UX gap for configuration validation. |
| **[#4450](https://github.com/QwenLM/qwen-code/issues/4450)** | CLI `--list-extensions` command non-functional. Extension management blocker. |
| **[#4471](https://github.com/QwenLM/qwen-code/issues/4471)** | Task UI hangs during execution. Reported by QA engineers debugging workflows. |
| **[#4421](https://github.com/QwenLM/qwen-code/issues/4421)** | Local diagnostic framework proposal: Ring buffer + `/bug collect bundle` for reproducible issues. High engagement (2 comments). |
| **[#4431](https://github.com/QwenLM/qwen-code/pull/4431)** | Fixed `atomicWriteFile` stripping file ownership permissions. Critical for shared-write scenarios. |

---

## **4. Key PR Progress**
| PR | Description |
|----|-------------|
| **[#4412](https://github.com/QwenLM/qwen-code/pull/4412)** | Added `docs/developers/daemon/` deep-dive docs for Mode B internals. |
| **[#4454](https://github.com/QwenLM/qwen-code/pull/4454)** | New `PostToolBatch` hook for post-resolution tool-call logic. Enhances extensibility. |
| **[#4468](https://github.com/QwenLM/qwen-code/pull/4468)** | Memory-leak-debug skill for heap snapshots. Directly addresses OOM (#4185). |
| **[#4353](https://github.com/QwenLM/qwen-code/pull/4353)** | Unified SDK gaps from [renderer-layer review](https://github.com/QwenLM/qwen-code/pull/4328#issuecomment-4494179724). |
| **[#4455](https://github.com/QwenLM/qwen-code/pull/4455)** | Excluded workspace packages from NOTICES.txt generation. Build-system fix. |
| **[#4470](https://github.com/QwenLM/qwen-code/pull/4470)** | Fixed text buffer race condition in CLI input handling. |
| **[#4375](https://github.com/QwenLM/qwen-code/pull/4375)** | Strengthened system prompts for code-first editing discipline. |
| **[#4460](https://github.com/QwenLM/qwen-code/pull/4460)** | F2 cleanup: Observability fixes for MCP server errors. |
| **[#4379](https://github.com/QwenLM/qwen-code/pull/4379)** | Feishu (Lark) channel adapter for enterprise messaging. |
| **[#4410](https://github.com/QwenLM/qwen-code/pull/4410)** | Isolated telemetry spans for subagent invocations. Better traceability. |

---

## **5. Feature Request Trends**
- **Daemon-Mode Stability**: Focus on production readiness ([#4175](https://github.com/QwenLM/qwen-code/issues/4175)) with auth, multiplexing, and observability.
- **Memory Management**: Ring buffers, OOM diagnostics, and heap-snapshot tools ([#4185](https://github.com/QwenLM/qwen-code/issues/4185), [#4421](https://github.com/QwenLM/qwen-code/issues/4421)).
- **Extensibility**: Standardized file naming, CLI extensions, and plugin installation fixes ([#4419](https://github.com/QwenLM/qwen-code/issues/4419), [#4452](https://github.com/QwenLM/qwen-code/issues/4452)).
- **Configuration Safety**: Settings validation, env var resolution, and credential security ([#4466](https://github.com/QwenLM/qwen-code/issues/4466), [#4448](https://github.com/QwenLM/qwen-code/issues/4448)).

---

## **6. Developer Pain Points**
- **OOM Crashes**: Recurring long-session memory issues (#4185) require proactive heap monitoring.
- **CLI Tooling**: Broken commands (`--list-extensions`, `#4450`) hinder extension workflows.
- **Build System**: Stale artifacts (#4447) and NOTICE.txt generation bugs slow CI/CD.
- **Configuration Errors**: Silent failures in `settings.json` (#4448) frustrate setup.

*For full context, explore [GitHub Issues](https://github.com/QwenLM/qwen-code/issues) and [PRs](https://github.com/QwenLM/qwen-code/pulls).*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/DenisZheng/agents-radar).*