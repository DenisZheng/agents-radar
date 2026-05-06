# AI CLI Tools Community Digest 2026-04-25

> Generated: 2026-04-25 00:25 UTC | Tools covered: 8

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

### **Cross-Tool AI CLI Ecosystem Report – April 25, 2026**

---

#### **1. Ecosystem Overview**  
The AI developer CLI tooling landscape is rapidly converging around agentic workflows, with strong demand for session management, MCP integration, and cross-platform stability. Tools are increasingly targeting enterprise-grade reliability, observability, and extensibility—evidenced by focus on hooks, streaming parsers, and provider-agnostic architectures. At the same time, fragmentation persists in authentication flows, model configuration, and terminal UX across platforms (Windows, macOS, Linux/WSL). DeepSeek’s rise has accelerated reasoning-aware tooling, while competition drives innovation in non-interactive modes, auto-compaction, and sandbox controls.

---

#### **2. Activity Comparison**  

| Tool               | Issues Count (Top 10) | PRs Updated (24h) | Release Status                     |
|--------------------|------------------------|-------------------|------------------------------------|
| **Claude Code**    | 10                     | 3                 | v2.1.120 released; urgent bug fixes|
| **OpenAI Codex**   | 10                     | 10                | rust-v0.125.0 + alpha v0.126.0     |
| **Gemini CLI**     | 10                     | 10                | v0.40.0-preview.3 + patch v0.39.1  |
| **Copilot CLI**    | 10                     | 1                 | v1.0.36-1 released                 |
| **Kimi Code CLI**  | 10                     | 10                | v1.39.0 released                   |
| **OpenCode**       | 10                     | 10                | v1.14.24 released                  |
| **Pi-mono**        | 10                     | 10                | v0.70.2 released                   |
| **Qwen Code**      | 10                     | 10                | v0.15.2 released                   |

> *All tools maintain consistent issue/PR volume (~10 each), indicating sustained community engagement. Only Copilot CLI shows minimal recent PR activity despite high issue counts.*

---

#### **3. Shared Feature Directions**  

- **Reasoning-Aware Tooling**: All tools now support `reasoning_content` from providers like DeepSeek (e.g., Kimi, Pi-mono, Qwen, OpenCode), but inconsistent handling causes API errors (#2043, #3636, #24104).
- **MCP Integration & Observability**: Requests for programmatic control over MCP servers (`/mcp show`, disable/enable), better plugin lifecycle events (`session.created`), and reduced redundant initialization (#18333, #2630).
- **Non-Interactive & Scriptable Modes**: Demand for headless auth, double-ESC cancellation, JSON output, and CI-friendly execution (Claude’s `ultrareview`, Copilot’s double-Esc).
- **Session Management**: Archiving, renaming, concurrency, and persistent memory across sessions (Copilot: #2966; Gemini: memory routing ambiguity #22819).
- **Provider Flexibility**: Multi-model fallback resilience (#3555), custom API key UX (#3582), and OpenRouter/OAuth support (#3576).

*Tools most frequently requesting these: Claude Code, Copilot CLI, Kimi, Qwen Code, Pi-mono.*

---

#### **4. Differentiation Analysis**  

| Tool             | Key Focus                          | Target Users               | Technical Approach                     |
|------------------|------------------------------------|----------------------------|----------------------------------------|
| **Claude Code**  | Enterprise reliability, hooks      | DevOps, CI/CD pipelines    | Hookify framework, PowerShell-first Win|
| **OpenAI Codex** | Agent orchestration, TUI UX        | Researchers, power users   | Goal mode, active threads, Guardian    |
| **Gemini CLI**   | Observability, reflex-based agents | AI engineers               | Time-series metrics, subagent tracking |
| **Copilot CLI**  | IDE integration, security          | GitHub-centric teams       | Plugin isolation, CRLF enforcement     |
| **Kimi**         | Schema rigor, ACP compliance       | Compliance-sensitive orgs  | Strict tool schemas, approval events   |
| **OpenCode**     | Multi-agent workflows, web UI      | Full-stack developers      | Subagents, TanStack Query sync         |
| **Pi-mono**      | Lightweight extensibility          | Extension builders         | Minimal SDK, `runWhenIdle` API         |
| **Qwen Code**    | Cost control, local vision         | Budget-conscious/Local dev | Auto-titling, I/O batching             |

*Notably, only Kimi and Copilot emphasize strict schema validation or security controls; others prioritize flexibility and extensibility.*

---

#### **5. Community Momentum & Maturity**  

- **Most Active Iteration**: **Kimi**, **OpenCode**, **Pi-mono**, and **Qwen Code** all have 10+ merged/fixed PRs in 24h—indicating rapid iteration cycles.
- **Highest Engagement**: **Claude Code** (#13480: 62👍) and **OpenAI Codex** (#10450: 603👍) lead in community concern, though Codex’s remote development request dwarfs technical bugs.
- **Maturity Signals**:  
  - **Copilot CLI** shows declining momentum (1 PR today vs. 10+ elsewhere).  
  - **Gemini CLI** and **OpenCode** demonstrate architectural shifts (reflexes, subagents) suggesting maturity beyond MVP.  
  - **Qwen Code**’s performance optimization (#3581: 91% I/O reduction) signals production-readiness focus.

---

#### **6. Trend Signals**  

- **Reasoning Model Integration Is Now Critical**: Inconsistent `reasoning_content` handling across providers creates a universal pain point—expect hardened support as standard.
- **MCP Is the New IPC Layer**: Beyond tool execution, MCP is becoming central to session state, plugin discovery, and cross-tool interoperability.
- **Terminal UX Convergence**: Double-Esc, OSC notifications, and scrollback fixes reflect cross-tool alignment on professional terminal experience.
- **Enterprise Readiness Gains Priority**: Hooks, audit trails, sandbox controls, and OAuth flows indicate shift from experimentation to production deployment.
- **Cost Transparency Demanded**: Quota changes (Qwen), billing mismatches (Claude), and token accounting gaps signal need for built-in cost tracking.

> **Recommendation for Developers**: Prioritize `reasoning_content` robustness, MCP observability, and non-interactive session APIs. Tools like Kimi and OpenCode offer advanced agent frameworks worth evaluating for complex use cases.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

**Claude Code Skills Community Highlights Report**  
*As of 2026-04-25*

---

### 1. Top Skills Ranking

While the provided dataset shows **no PRs with recorded comments**, indicating limited discussion activity, the most active community signals emerge from issue threads and high-engagement proposals:

1. **[skill-quality-analyzer & skill-security-analyzer](https://github.com/anthropics/skills/pull/83)**  
   A meta-skill framework for evaluating and auditing other Skills across structure, security, and usability dimensions—currently under review.

2. **[testing-patterns](https://github.com/anthropics/skills/pull/723)**  
   Comprehensive guidance on unit/integration testing strategies, React Testing Library patterns, and test pyramid implementation—actively refined per feedback.

3. **[servicenow](https://github.com/anthropics/skills/pull/568)**  
   Enterprise ITSM platform integration covering scripting, SecOps, ITAM/SAM, FSM, and IntegrationHub workflows—broad organizational interest noted.

4. **[shodh-memory](https://github.com/anthropics/skills/pull/154)**  
   Persistent memory system enabling cross-conversation context retention for agentic workflows—addressing core AI continuity needs.

5. **[SAP-RPT-1-OSS predictor](https://github.com/anthropics/skills/pull/181)**  
   Specialized skill leveraging SAP’s open-source tabular foundation model for predictive analytics on enterprise data—targeted at SAP-centric teams.

> *All listed PRs remain OPEN as of 2026-04-25.*

---

### 2. Community Demand Trends

From Issue discussions, key unmet demands include:

- **Cross-platform automation**: Native macOS (`sensory` skill) and Linux equivalents requested via AppleScript/Python tools (Issue #806).
- **Skill discoverability & sharing**: Urgent need for org-level skill libraries or direct sharing links to replace manual file transfers (Issue #228).
- **Security hardening**: Concerns about trust boundaries when community skills masquerade as official Anthropic tools (Issue #492).
- **Enterprise integration**: Support for AWS Bedrock usage and SSO-compatible tooling (Issues #29, #532).
- **Document standardization**: Requests for typographic quality control (orphan/widow prevention), ODT/ODS support, and DOCX bookmark safety (PRs #514, #486, #541).

---

### 3. High-Potential Pending Skills

Active development with strong conceptual grounding:

- **[masonry-generate-image-and-videos](https://github.com/anthropics/skills/pull/335)**: AI media generation via Masonry CLI—ready for integration.
- **[codebase-inventory-audit](https://github.com/anthropics/skills/pull/147)**: Systematic cleanup of orphaned code and documentation gaps—addresses growing technical debt in large repos.
- **[xiao](https://github.com/anthropics/skills/pull/997)**: Xiaomi vacuum control agent—demonstrates IoT device automation viability.

These reflect a trend toward **operational automation** (IoT, enterprise systems) and **developer productivity** (audits, testing).

---

### 4. Skills Ecosystem Insight

The community’s most concentrated demand centers on **enterprise-grade reliability and interoperability**, with urgent needs for secure skill distribution, cross-system compatibility (Bedrock, SSO), and robust governance frameworks to maintain trust in community contributions.

---

**Claude Code Community Digest – April 25, 2026**

---

### 1. Today's Highlights  
Claude Code v2.1.120 removes Git for Windows dependency on Windows systems, defaulting to PowerShell as the shell tool. A new `claude ultrareview [target]` CLI subcommand enables non-interactive UltraReview execution from CI or scripts, with optional JSON output. Multiple critical bugs—including session crashes due to undefined functions and OAuth token persistence failures—have surfaced in recent builds, prompting urgent community attention.

---

### 2. Releases  

**v2.1.120**  
- **Windows**: No longer requires Git for Windows; falls back to PowerShell when absent.  
- **CLI**: Added `ultrareview` subcommand for scripted usage: `claude ultrareview <target>` prints findings to stdout; `--json` returns raw structured data.  

[Release Details](https://github.com/anthropics/claude-code/releases/tag/v2.1.120)

---

### 3. Hot Issues (Top 10 by Engagement)

| Issue | Summary | Why It Matters | Reaction |
|------|--------|----------------|---------|
| [#13480](https://github.com/anthropics/claude-code/issues/13480) | Oversized image upload permanently corrupts conversation state | Blocks recovery without restarting chat; impacts debugging workflows | 👍62, 💬58 |
| [#10747](https://github.com/anthropics/claude-code/issues/10747) | Request to add delete/rename actions in VS Code extension UI | Missing essential session management UX | 👍50, 💬40 |
| [#42776](https://github.com/anthropics/claude-code/issues/42776) | Windows Desktop app fails to relaunch due to orphaned file locks | Prevents user access post-crash; affects reliability | 👍14, 💬56 |
| [#14362](https://github.com/anthropics/claude-code/issues/14362) | Sonnet model double-counts against both "All models" and "Somente Sonnet" quotas | Incorrect billing/usage attribution | 👍13, 💬11 |
| [#51828](https://github.com/anthropics/claude-code/issues/51828) | Scrollback duplication persists after terminal resize (macOS + VS Code) | Degrades readability and usability during active sessions | 👍9, 💬8 |
| [#49479](https://github.com/anthropics/claude-code/issues/49479) | ESC key during MCP tool call kills all Python stdio MCPs (regression since v2.1.104) | Critical regression breaking automation pipelines | 👍2, 💬5 |
| [#50100](https://github.com/anthropics/claude-code/issues/50100) | Bedrock Opus 4.7 rejects `thinking.type.enabled` config | Blocks use of latest Anthropic models via AWS | 👍5, 💬5 |
| [#52819](https://github.com/anthropics/claude-code/issues/52819) | `/ultrareview` consumes free trial despite crashing before completion | Wastes limited free credits | 👍2, 💬4 |
| [#53012](https://github.com/anthropics/claude-code/issues/53012) | `sandbox.excludedCommands` ignored on macOS—still enforces network sandboxing | Misleading docs; undermines security assumptions | 👍0, 💬3 |
| [#52882](https://github.com/anthropics/claude-code/issues/52882) | TUI freezes in `/mcp` modal on WSL2 without `--debug` flag | Hinders cross-platform development workflows | 👍0, 💬2 |

---

### 4. Key PR Progress

| PR | Summary | Impact |
|----|--------|--------|
| [#52668](https://github.com/anthropics/claude-code/pull/52668) | Hookify now includes hook-specific warnings in PreToolUse/PostToolUse events | Improves observability and debugging for custom hooks |
| [#52666](https://github.com/anthropics/claude-code/pull/52666) | Corrects brand casing in README (GitHub, macOS) | Enhances documentation consistency |
| [#52650](https://github.com/anthropics/claude-code/pull/52650) | *(Unclear scope)* | Pending review; minimal description provided |

*Note: Only 3 PRs updated in last 24h; most are documentation or minor fixes.*

---

### 5. Feature Request Trends

- **Session Management in IDE**: Users strongly request ability to delete or rename chats directly within VS Code extension (#10747).
- **Programmatic Knowledge Sync**: Developers want API/sync mechanism to update Team Project knowledge files programmatically (#47744).
- **Improved Sandbox Controls**: Clearer enforcement (or exemption) logic for `sandbox.excludedCommands` expected across platforms.
- **Non-Interactive Auth Flows**: Support needed for OAuth token refresh in headless/subprocess environments (#53063).

---

### 6. Developer Pain Points

- **Session Corruption**: Large image uploads can irreversibly break conversation state (#13480).
- **Model Configuration Bugs**: Recent changes to thinking budgets cause errors with Bedrock’s newer inference profiles (#50100, #51439, #51711).
- **CLI Stability Regression**: Undefined function errors (`UKH`, `g9H`) crash resume/continue flows in v2.1.120 (#53044, #53053, #53064).
- **MCP Reliability Issues**: Tool execution halts unexpectedly (ESC kills MCPs), and responses with mixed content types are hidden (#45575, #49479).
- **Auth & Persistence Failures**: Custom MCP connectors lose OAuth tokens after restart; silent failures obscure root causes (#52565, #53059).
- **Terminal UI Glitches**: Scrollback duplication on resize remains unfixed despite prior reports (#51828, #52945).

--- 

*Prepared by Claude Code Community Analyst – Technical Insights for AI Developer Tools*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

**OpenAI Codex Community Digest – April 25, 2026**

---

### **Today's Highlights**  
OpenAI released **rust-v0.125.0**, introducing Unix socket support for app-server integrations and enhanced plugin management. The alpha release **v0.126.0-alpha.1** signals upcoming stability improvements. Meanwhile, the community continues to push for broader platform support—especially Linux and remote development—while grappling with regressions in context handling and MCP performance.

---

### **Releases**  
- **rust-v0.125.0**: Adds Unix socket transport for app-server integrations, enabling more resilient local deployments (#18255). Introduces pagination-friendly resume/fork, sticky environments, and remote thread config plumbing (#18892, #18897, #19008). Also supports installing/upgrading remote plugins via app-server plugin management (#19014).  
- **rust-v0.126.0-alpha.1** & **v0.125.0-alpha.3/2**: Alpha builds with incremental fixes; no detailed changelog yet.

---

### **Hot Issues**  

| Issue | Summary | Community Reaction |
|------|--------|------------------|
| [#10450](https://github.com/openai/codex/issues/10450) | Remote Development in Desktop App | 👍603 | Critical missing feature for distributed workflows; users compare unfavorably to VS Code’s remote capabilities. |
| [#11023](https://github.com/openai/codex/issues/11023) | Linux Desktop App Support | 👍63 | High demand—users report macOS instability, pushing them toward Linux as primary dev environment. |
| [#13917](https://github.com/openai/codex/issues/13917) | Windows PowerShell Host Failure (8009001d) | 0 👍 | Blocks core functionality on Windows; no traction despite clear reproduction steps. |
| [#18333](https://github.com/openai/codex/issues/18333) | Repeated MCP Stack Initialization Causing Slowdown | 👍6 | Regressive behavior post-update; impacts session startup time and memory usage severely. |
| [#19185](https://github.com/openai/codex/issues/19185) | `config.toml` Context Settings Ignored | 👍17 | Configuration drift undermines reliability of long-running sessions. |
| [#19433](https://github.com/openai/codex/issues/19433) | Inconsistent Stream Disconnects on Resume | New | Some sessions fail randomly; others stable—suggests race condition or resource exhaustion. |
| [#18404](https://github.com/openai/codex/issues/18404) | Computer Use Plugin Unavailable Despite Enabled MCP | 👍4 | Confusing UX: MCP server appears active but plugin remains disabled on Intel Macs. |
| [#19255](https://github.com/openai/codex/issues/19255) | Auto Compact Errors Persist | 👍6 | Recurring issue affecting context management in CLI workflows. |
| [#19329](https://github.com/openai/codex/issues/19329) | Automatic Compact Recurring Error | 👍3 | Impacts Pro users; suggests backend compaction logic instability. |
| [#16857](https://github.com/openai/codex/issues/16857) | High GPU Usage from Animation Leak | 👍19 | Performance drain during “thinking” state; trivial UI element causing real hardware cost. |

---

### **Key PR Progress**  

| PR | Description |
|----|-----------|
| [#19458](https://github.com/openai/codex/pull/19458) | Simplifies Codex Library file hooks by removing dev routing and tightening upload paths. |
| [#18077](https://github.com/openai/codex/pull/18077) | Finalizes TUI UX for goal mode (`/goal` command, status indicators, snapshots). |
| [#18076](https://github.com/openai/codex/pull/18076) | Implements core runtime for active thread goals with scheduler abstraction. |
| [#19468](https://github.com/openai/codex/pull/19468) | Fixes Bazel runfiles path resolution in `cargo_bin()`, critical for internal tooling. |
| [#19467](https://github.com/openai/codex/pull/19467) | Routes MCP elicitations through Guardian review for approval workflows. |
| [#19456](https://github.com/openai/codex/pull/19456) | Adds remote plugin uninstall API, completing CRUD for marketplace plugins. |
| [#19280](https://github.com/openai/codex/pull/19280) | Migrates thread turns list loading to ThreadStore for consistency and scalability. |
| [#19160](https://github.com/openai/codex/pull/19160) | Makes `apply_patch` streaming parser stateful for better progress tracking. |
| [#19432](https://github.com/openai/codex/pull/19432) | Adds token usage metadata to turn tracing spans for improved observability. |
| [#19391](https://github.com/openai/codex/pull/19391) | Refactors permissions to use profile-backed runtime config (Managed/Disabled/External). |

---

### **Feature Request Trends**  
- **Linux Desktop App**: Explicitly requested due to macOS instability and lack of native support.  
- **Remote Development**: Users want full-featured remote workspace integration akin to VS Code Remote SSH.  
- **1M Token Context for GPT-5.5**: Community notes API documentation claims 1M tokens while Codex limits to ~400K.  
- **Better Context Metadata Consistency**: Multiple reports of mismatched context window reporting breaking safety assumptions.  
- **Improved MCP Integration**: Requests for clearer feedback on plugin availability and reduced redundant server spawning.  

---

### **Developer Pain Points**  
- **Platform Fragmentation**: Windows (PowerShell host), Intel Macs (blurred UI overlay), and Linux (missing app) suffer from inconsistent experiences.  
- **Context Management Instability**: Auto-compaction errors, ignored config settings, and token count mismatches undermine trust in long sessions.  
- **MCP Performance Regression**: Repeated full-stack initialization per session causes unacceptable latency and memory pressure.  
- **Ambiguous Error Handling**: “Stream disconnected before completion” lacks actionable diagnostics.  
- **UI/UX Leaks**: Non-functional animations consuming GPU resources highlight poor performance hygiene.  

--- 

*Generated from GitHub activity on openai/codex.*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

**Gemini CLI Community Digest - 2026-04-25**

**1. Today's Highlights**
The Gemini CLI team released v0.40.0-preview.3 and patched v0.39.1 to address critical backspace handling regressions on Windows. A major architectural shift began with the introduction of time-series analysis for repo-metrics and reflex refactoring in PR #25945, signaling a move toward more observable agentic workflows.

**2. Releases**
- **v0.40.0-preview.3**: Patched backspace handling regression affecting Windows users (PR #25942).
- **v0.39.1**: Released to fix stability issues from v0.39.0 (see changelog [here](https://github.com/google-gemini/gemini-cli/compare/v0.39.0...v0.39.1)).

**3. Hot Issues**
1. **AST-aware file operations** (#22745): Investigating precision gains via AST context to reduce token noise and misaligned reads—5 comments, 👍1.
2. **Permission prompts looping** (#24916): Users repeatedly asked to approve file access despite "allow always"—3 comments, reported across platforms.
3. **Subagent turn-limit false success** (#22323): Codebase investigator reports completion even when max turns hit—3 comments, 👍2.
4. **Shell command hangs post-execution** (#25166): Commands finish but UI waits indefinitely—2 comments, 👍3.
5. **MCP tool hallucination with hyphens** (#25952): Model misnames tools like `hyphen-server` → `hyphen_server`—new issue, immediate triage needed.
6. **Backspace deletes entire words/lines** (#25951): Language-dependent input corruption—new issue, visual evidence provided.
7. **Browser Agent ignores settings.json** (#22267): `maxTurns` etc. not respected—2 comments, no upvotes yet.
8. **Temp script sprawl** (#23571): Cleanup overhead from scattered generated files—2 comments.
9. **Terminal corruption after SSH** (#24202): Text scrambling when launched over SSH—status marked possible duplicate.
10. **Memory routing ambiguity** (#22819): Global vs. project memory scope needs clarity—1 comment, 👍2.

**4. Key PR Progress**
1. **Repo-metrics time-series** (#25945): Introduces observability layer for agent decisions; renames "processes" to "reflexes".
2. **Auto-memory scratchpad persistence** (#25873): Stores session workflow hints to improve skill extraction accuracy.
3. **File backup & revert system** (#25947): Transactional file ops to prevent destructive loops—requires issue tracking.
4. **Ollama compression routing** (#25915): Offloads `/compress` to local models via Ollama—addresses latency concerns.
5. **Permanent tool approval default** (#25823): Enables "Allow for all future sessions" by default—merged and closed.
6. **Windows backspace fix** (#25862): Refined heuristic to distinguish Backspace vs. Ctrl+Backspace.
7. **MCP compact output** (#25912): Applies text summarization to MCP tool responses.
8. **Session ID flag** (#24976): Adds `--session-id` for deterministic session orchestration.
9. **Sandbox docs update** (#25930): Expands Docker/Podman sandboxing guidance.
10. **Keyboard protocol restore** (#25944): Re-enables Kitty/modifyOtherKeys after terminal clears.

**5. Feature Request Trends**
- **Agent memory management**: Proactive prompting to write preferences (#22809), clear global/project separation (#22819), auto-skill extraction (#25895).
- **Code intelligence**: AST-aware navigation and mapping (#22746) to reduce token waste.
- **Tool reliability**: Prevent destructive commands (#22672), limit concurrent tools to avoid 400 errors (#24246).
- **UI/UX polish**: Fix backspace/input bugs (#25951), resolve terminal rendering glitches (#25218, #24935).

**6. Developer Pain Points**
- **Input handling broken on Windows**: Backspace behaves erratically across terminals (#25941 reverted, #25862 ongoing).
- **SSH session instability**: Launching over SSH causes display corruption (#24202).
- **Overly verbose tool outputs**: Especially for MCP tools lacking compact mode (#25912 just fixed).
- **Permission fatigue**: Repeated auth prompts despite user consent (#24916).
- **Lack of agent transparency**: Subagents hide interruptions (e.g., turn limits) as success (#22323).

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

**GitHub Copilot CLI Community Digest – 2026-04-25**

---

### 1. **Today's Highlights**
The latest release, v1.0.36-1, introduces a key UX improvement requiring double Esc to cancel in-flight work—preventing accidental interruptions—alongside better visibility into session changes via an added `changes` statusline toggle. Meanwhile, users report growing frustration with platform-specific bugs on Alpine Linux and Windows, while feature requests increasingly target session management, MCP integration, and per-agent configuration flexibility.

---

### 2. **Releases**

**v1.0.36-1 (2026-04-24)**  
- **Added**: Toggle `changes` statusline to display added/removed line counts during sessions.  
- **Improved**: Require double Esc to cancel ongoing operations, reducing unintended cancellations.  
- **Fixed**: Custom instruction files in `.gitignored` directories (e.g., `.github/instructions/`) now load correctly.  

**v1.0.36 (2026-04-24)**  
- Subcommand picker now shows a selection indicator (`❯`).  
- Improved error messaging with direct links when multiple Copilot licenses are detected.  
- Fixed hook execution: `preToolUse.matcher` is now respected, ensuring tools only run for matched names.  

**v1.0.36-0 (2026-04-24)**  
- **Improved**: Claude Opus 4.6 defaults to medium reasoning effort.  
- **Fixed**: Saving debug logs or feedback bundles no longer overwrites existing archives.  
- **Fixed**: Custom agents/skills/commands from `~/.claude/` are excluded from CLI loading (aligns with security best practices).

---

### 3. **Hot Issues**

| Issue | Summary | Why It Matters | Community Reaction |
|-------|---------|----------------|--------------------|
| [#107](https://github.com/github/copilot-cli/issues/107) | Segmentation fault on tool calls under Alpine Linux | Blocks Dockerized workflows using minimal base images | 👍4, 💬13 |
| [#2205](https://github.com/github/copilot-cli/issues/2205) | Mouse scroll navigates input instead of history in Terminator | Breaks terminal usability in popular emulators | 👍5, 💬8 |
| [#254](https://github.com/github/copilot-cli/issues/254) | Repeated login prompts despite active GitHub auth | Disrupts workflow continuity | 👍3, 💬8 |
| [#1148](https://github.com/github/copilot-cli/issues/1148) | Forces CRLF line endings even on LF files | Corrupts cross-platform repos; violates Git hygiene | 👍5, 💬5 |
| [#1680](https://github.com/github/copilot-cli/issues/1680) | Hardcoded `pwsh.exe` breaks PowerShell 5.1-only Windows 11 | Makes CLI unusable on default Win11 installs | 👍8, 💬5 |
| [#1464](https://github.com/github/copilot-cli/issues/1464) | Skills beyond ~32 tokens ignored due to prompt truncation | Limits extensibility of custom skill ecosystem | 👍4, 💬3 |
| [#2630](https://github.com/github/copilot-cli/issues/2630) | Custom agents with `mcp-servers` lose MCP connectivity | Undermines toolchain integration for subagents | 👍0, 💬3 |
| [#2966](https://github.com/github/copilot-cli/issues/2966) | No built-in support for concurrent CLI sessions | Hinders power-user productivity across tasks/repos | 👍0, 💬1 |
| [#2964](https://github.com/github/copilot-cli/issues/2964) | Lack of diff-only view for agent changes | Obscures code review context among session artifacts | 👍0, 💬1 |
| [#2511](https://github.com/github/copilot-cli/issues/2511) | Missing `wl-copy` check on Wayland causes copy failures | Frustrates Linux/Wayland users | 👍3, 💬1 |

---

### 4. **Key PR Progress**

| PR | Summary | Impact |
|----|--------|--------|
| [#2957](https://github.com/github/copilot-cli/pull/2957) | Fixes extension bootstrap path mismatch causing SEA cache errors | Resolves plugin loading on macOS/Windows where universal/darwin-arm64 paths conflict | 

*(Note: Only one PR updated in last 24h; others pending)*

---

### 5. **Feature Request Trends**

- **Session Management**: Users demand native support for multiple concurrent sessions (e.g., across branches/tasks), especially with `--autopilot`.
- **MCP Integration**: Requests include browsing/disabling MCP servers interactively (`/mcp show` menu) and discovering registry-configured servers.
- **Agent & Model Flexibility**: Strong push for per-agent reasoning effort settings and model overrides in YAML frontmatter.
- **Terminal UX Enhancements**: Diff-only views, branch name display, and improved scroll behavior requested.
- **Plugin Controls**: Need to toggle plugins enabled/disabled without uninstalling.

---

### 6. **Developer Pain Points**

- **Platform Fragmentation**: Critical bugs affect Alpine Linux (segfaults), Windows (PowerShell 5.1 incompatibility), and Wayland (clipboard issues).
- **Line Ending Corruption**: Automatic CRLF conversion breaks LF-only projects, risking CI/CD failures.
- **Authentication Drift**: Frequent re-login prompts disrupt authenticated workflows.
- **Extension Reliability**: Universal vs. platform-specific cache path mismatches cause silent plugin failures.
- **Context Window Pressure**: Frequent auto-compaction in Opus 4.7 reduces effective context despite Pro+ subscription.

--- 

*Generated for GitHub Copilot CLI maintainers and contributors. For full details, visit the [issue tracker](https://github.com/github/copilot-cli/issues) and [release notes](https://github.com/github/copilot-cli/releases).*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

**Kimi Code CLI Community Digest – 2026-04-25**

---

### 1. Today's Highlights  
Kimi Code CLI released version **1.39.0**, introducing support for preserving thinking traces via the `KIMI_MODEL_THINKING_KEEP` environment variable and fixing critical shell caret rendering issues. A major fix for UTF-8 BOM handling in config files (PR #2065) resolves startup crashes reported by Windows users. Additionally, a new ACP notification system for approval requests (PR #2068) improves user experience during tool execution.

---

### 2. Releases  
**v1.39.0** ([Release Notes](https://github.com/MoonshotAI/kimi-cli/releases/tag/v1.39.0))  
- Fixed caret display in shell input fields (#2005)  
- Added `KIMI_MODEL_THINKING_KEEP` env var to preserve model reasoning traces (#2029)  

---

### 3. Hot Issues  

| ID | Summary | Impact & Reaction |
|----|--------|-------------------|
| [#1990](https://github.com/MoonshotAI/kimi-cli/issues/1990) | Terminal closes entirely after sending messages in IntelliJ IDEA | High severity; blocks IDE integration—users report no workaround yet. No upvotes but active discussion. |
| [#2043](https://github.com/MoonshotAI/kimi-cli/issues/2043) | UTF-8 BOM in config.toml causes fatal parse error | Critical on Windows/macOS when editors auto-add BOM—blocks all users with such configs. Quickly resolved by PR #2065. |
| [#2058](https://github.com/MoonshotAI/kimi-cli/issues/2058) | Custom agent startup ignores AGENTS.md context loading | Impacts workflow reliability—users expect project-specific agents to auto-load docs. Minimal engagement so far. |
| [#2059](https://github.com/MoonshotAI/kimi-cli/issues/2059) | Error messages consume tokens without clear accounting | Frustrates power users tracking token budgets—no transparency in billing logic. One upvote signals community concern. |
| [#2061](https://github.com/MoonshotAI/kimi-cli/issues/2061) | MCP tool schema validation fails due to Moonshot JSON flavor mismatch | Breaks external MCP integrations (e.g., Unity-MCP)—requires schema alignment with OpenAI/Anthropic standards. |
| [#2066](https://github.com/MoonshotAI/kimi-cli/issues/2066) | Hardcoded PowerShell 5.1 ignores installed pwsh | Limits Windows developer flexibility—many rely on modern PowerShell 7+ features. User submitted implementation already. |
| [#2051](https://github.com/MoonshotAI/kimi-cli/issues/2051) | Shell transcript hides skill/flow slash prompts | Reduces auditability of interactive sessions—critical for debugging multi-step workflows. |
| [#2038](https://github.com/MoonshotAI/kimi-cli/issues/2038) | Git subprocess calls cause typing lag in normal prompt | Degrades UX during routine editing—subprocesses should not block main thread. Isolated via binary search by reporter. |
| [#1458](https://github.com/MoonshotAI/kimi-cli/issues/1458) | VS Code reports "Connection error" despite working CLI | Confusing IDE integration failure—possibly proxy/firewall related. Still open after 6 weeks. |
| [#1823](https://github.com/MoonshotAI/kimi-cli/issues/1823) | Approval requests have fixed 300s timeout—no customization | Forces abrupt cancellations in long-running tasks—requested configurable or unlimited option. Moderate traction (2👍). |

---

### 4. Key PR Progress  

| PR | Summary | Status |
|----|--------|--------|
| [#2065](https://github.com/MoonshotAI/kimi-cli/pull/2065) | Tolerate UTF-8 BOM in config files using `utf-8-sig` | **Merged** |
| [#2068](https://github.com/MoonshotAI/kimi-cli/pull/2068) | Emit `kimi/approval_required` ACP event before approval prompts | **Open** |
| [#2067](https://github.com/MoonshotAI/kimi-cli/pull/2067) | Fix large-context timeouts via httpx keepalive tuning & retries | **Open** |
| [#2063](https://github.com/MoonshotAI/kimi-cli/pull/2063) | Add `default_skills` config to auto-activate skills on session start | **Open** |
| [#2064](https://github.com/MoonshotAI/kimi-cli/pull/2064) | Respect `KIMI_SHARE_DIR` for plan file storage | **Open** |
| [#2045](https://github.com/MoonshotAI/kimi-cli/pull/2045) | Decouple `--yolo` (auto-approve) from `--afk` (non-interactive) modes | **Open** |
| [#2057](https://github.com/MoonshotAI/kimi-cli/pull/2057) | Replace assert → RuntimeError in ACP session invariants | **Open** |
| [#2056](https://github.com/MoonshotAI/kimi-cli/pull/2056) | Eliminate TOCTOU race in WireFile.append_record | **Open** |
| [#2036](https://github.com/MoonshotAI/kimi-cli/pull/2036) | Enable strict schema mode for core tools (Shell, ReadFile, etc.) | **Open** |
| [#1960](https://github.com/MoonshotAI/kimi-cli/pull/1960) | RalphFlow: ephemeral context + convergence detection for loops | **Open** |

---

### 5. Feature Request Trends  

- **Configurable approval timeouts** (Issue #1823): Users demand control over long-running tool approvals.  
- **Auto-activation of skills** (Issue #2062 / PR #2063): Streamline onboarding by pre-loading frequently used skills.  
- **Shell compatibility improvements**: Native PowerShell 7+ support (Issue #2066), better transcript fidelity (Issue #2051).  
- **Enhanced visibility**: Token usage transparency (Issue #2059), agent task counts in status bar (PR #2041).  
- **Robustness hardening**: Virtual interface IP detection (Issue implied in #2050), schema validation for MCP tools (Issue #2061).  

---

### 6. Developer Pain Points  

- **Configuration fragility**: UTF-8 BOM handling breaks builds (Issue #2043); hardcoded paths ignore `KIMI_SHARE_DIR`.  
- **IDE integration instability**: Terminal crashes in IntelliJ (Issue #1990), spurious connection errors in VS Code (#1458).  
- **Opacity in resource usage**: Unaccounted token consumption during errors (Issue #2059), lack of per-tool strict mode opt-in.  
- **Subprocess interference**: Git calls in UI toolbar cause input lag (Issue #2038).  
- **Schema fragmentation**: MCP tool definitions incompatible with Moonshot’s JSON flavor (Issue #2061).  

> _Note: All items link to their respective GitHub entries._

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

**OpenCode Community Digest – April 25, 2026**

---

### 1. **Today's Highlights**
The latest release (v1.14.24) resolves critical DeepSeek reasoning content handling and model config inheritance issues, ensuring stable multi-turn conversations with advanced models. A new experimental HTTP API endpoint was also added. Additionally, TUI improvements now render all user message text blocks fully instead of truncating to the first block.

---

### 2. **Releases**
- **v1.14.24**: Fixed DeepSeek assistant messages to always include `reasoning_content`, preventing provider formatting failures; ensured inherited model configs preserve interleaved capabilities. Added an experimental HTTP API endpoint.
- **v1.14.23**: Improved `.npmrc` registry support for package version checks and updates.
- **TUI Update**: Now renders *all* non-synthetic text in user messages—no more truncated output.

---

### 3. **Hot Issues** *(Top by engagement)*

| # | Title & Summary | Why It Matters | Community Response |
|---|------------------|----------------|--------------------|
| [6680](https://github.com/anomalyco/opencode/issues/6680) | **View archived sessions on desktop**<br>Request: Add sidebar menu option to show archived sessions via modal. | Enhances UX for long-term session management. | 👍2 / 💬25 |
| [24104](https://github.com/anomalyco/opencode/issues/24104) | **DeepSeek thinking mode breaks after first response**<br>`reasoning_content` not passed back on continuation → API errors. | Blocks multi-turn reasoning workflows with DeepSeek. | 👍0 / 💬19 |
| [24190](https://github.com/anomalyco/opencode/issues/24190) | **Multi-turn tool calls fail with DeepSeek V4**<br>Second+ turns return 400 due to missing `reasoning_content`. | Critical regression for agentic tool use cases. | 👍6 / 💬17 |
| [14808](https://github.com/anomalyco/opencode/issues/14808) | **"session.created" event not firing for plugins**<br>Plugin ecosystem broken for session lifecycle hooks. | Breaks plugin reliability and state tracking. | 👍12 / 💬16 |
| [24039](https://github.com/anomalyco/opencode/issues/24039) | **Add GPT-5.5 support for OpenAI provider**<br>First-class model integration needed. | Aligns OpenCode with latest OpenAI offerings. | 👍12 / 💬16 |
| [17516](https://github.com/anomalyco/opencode/issues/17516) | **`opencode run` hangs post-tool execution**<br>Process never exits despite completion. | Disrupts automation and CI/CD pipelines. | 👍6 / 💬13 |
| [19947](https://github.com/anomalyco/opencode/issues/19947) | **NVIDIA NIM returns numeric tool IDs → Zod validation fails**<br>`expected id to be a string` error. | Incompatible with providers returning non-string IDs. | 👍0 / 💬10 |
| [13682](https://github.com/anomalyco/opencode/issues/13682) | **Authorization link unclickable/copyable in SSH remote setups**<br>Claude auth broken under SSH + Windows client. | Prevents authentication in common dev environments. | 👍4 / 💬10 |
| [13626](https://github.com/anomalyco/opencode/issues/13626) | **Auto-sync projects from server in web UI**<br>New device/browser should fetch remote projects. | Improves cross-device continuity. | 👍0 / 💬7 |
| [11831](https://github.com/anomalyco/opencode/issues/11831) | **YOLO Mode: Auto-approve all permission prompts**<br>Skip "ask" prompts for trusted users. | High demand from power users seeking workflow speed. | 👍20 / 💬5 |

---

### 4. **Key PR Progress** *(Top by impact)*

| # | Title | Description | Status |
|---|------|-------------|--------|
| [24218](https://github.com/anomalyco/opencode/pull/24218) | **Auto-enable interleaved for reasoning models** | Fixes #24104: Ensures reasoning-capable models default `interleaved: true`. | ⏳ Open |
| [24149](https://github.com/anomalyco/opencode/pull/24149) | **Scout subagent for repo research** | New built-in agent with `repo_clone`, `repo_overview`, and caching. | ⏳ Open |
| [24174](https://github.com/anomalyco/opencode/pull/24174) | **Background subagent support** | Non-blocking tasks via `task(background=true)` + `task_status` tool. | ⏳ Open |
| [11832](https://github.com/anomalyco/opencode/pull/11832) | **Multi-account OAuth + auto-relogin** | Browser-based credential rotation using Puppeteer. | ⏳ Open |
| [24228](https://github.com/anomalyco/opencode/pull/24228) | **Roslyn support for Razor/C# scripts** | Adds `.csx` and Razor LSP integration. | ⏳ Open |
| [23792](https://github.com/anomalyco/opencode/pull/23792) | **Sync state via TanStack Query** | Centralizes sync logic for config, MCP, LSP. | ⏳ Open |
| [23557](https://github.com/anomalyco/opencode/pull/23557) | **Interactive split-footer mode for `run`** | Enables step-by-step execution review. | ⏳ Open |
| [20602](https://github.com/anomalyco/opencode/pull/20602) | **Shell as config + desktop UI** | Configurable shell per project with GUI toggle. | ⏳ Open |
| [23912](https://github.com/anomalyco/opencode/pull/23912) | **Web embeddable in iframes** | Enables reverse-proxy subpath hosting. | ⏳ Open |
| [21161](https://github.com/anomalyco/opencode/pull/21161) | **Hindi README translation** | Expands localization efforts. | ✅ Merged |

---

### 5. **Feature Request Trends**

- **Model & Provider Expansion**: Strong demand for **GPT-5.5**, **Qwen3.5+/3.6+** in Go tier, and broader DeepSeek V4/V3 support.
- **Workflow Automation**: “**YOLO Mode**” (auto-approve permissions) and **background subagents** top wishlists for power-user efficiency.
- **Cross-Device Sync**: Auto-sync projects across devices/browsers requested repeatedly (esp. in web UI).
- **Enhanced TUI UX**: Archiving sessions, better shell command output (`!ls`), and image paste into `questions` tool are recurring asks.
- **Localization**: Hindi README completed; likely more language requests pending.

---

### 6. **Developer Pain Points**

- **DeepSeek Reasoning Stability**: Multiple reports of **multi-turn failures** due to missing `reasoning_content`—critical blocker for production agents.
- **Tool Call Validation Errors**: Providers like **NVIDIA NIM** returning numeric IDs break strict Zod schemas.
- **Process Hangs**: `opencode run` failing to exit after tool completion disrupts scripting.
- **Plugin Event Reliability**: `"session.created"` not firing undermines plugin ecosystems.
- **Authentication UX**: Remote SSH + Windows clients struggle with OAuth link usability.
- **Disk Usage**: Uncontrolled log growth on Windows flagged as compliance risk.
- **WSL Compatibility**: v1.14.21/22 cause “Exec format error” in WSL1—regression suspected.

--- 

*Generated from anomalyco/opencode GitHub activity.*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

**Today's Highlights**
Pi-mono v0.70.2 fixes a provider retry/timeout forwarding bug that caused SDK validation errors when `retry.provider.timeoutMs` was undefined. v0.70.1 adds DeepSeek V4 Flash/Pro support with `DEEPSEEK_API_KEY` authentication, expanding AI provider options. Several PRs address critical reasoning_content handling for DeepSeek models to prevent 400 API errors.

**Releases**
- **v0.70.2**: Fixed provider retry/timeout forwarding to omit undefined controls, preventing downstream SDK validation errors like "timeout must be an integer".
- **v0.70.1**: Added DeepSeek provider support with V4 Flash/Pro models and `DEEPSEEK_API_KEY` authentication. Introduced provider request timeout/retry controls via `retry.provider.{timeoutMs,retries}` configuration.

**Hot Issues**
1. [#3636](https://github.com/badlogic/pi-mono/issues/3636) (9 comments): DeepSeek 4 reasoning_content requirement causing 400 errors - critical for users leveraging thinking mode.
2. [#2023](https://github.com/badlogic/pi-mono/issues/2023) (7 comments): Request for `pi.runWhenIdle()` API to schedule work after agent settles - important for extension developers.
3. [#3543](https://github.com/badlogic/pi-mono/issues/3543) (5 comments): URL gating preventing long cache retention usage - affects caching functionality.
4. [#3630](https://github.com/badlogic/pi-mono/issues/3630) (4 comments): LaTeX math rendering request in markdown - valuable for technical documentation.
5. [#3648](https://github.com/badlogic/pi-mono/issues/3648) (4 comments): Ctrl-C not captured on macOS IME - usability issue for Chinese input users.
6. [#3254](https://github.com/badlogic/pi-mono/issues/3254) (3 comments): Prevent `/model` from overwriting persistent defaults - requested by power users.
7. [#3684](https://github.com/badlogic/pi-mono/issues/3684) (3 comments): `/retry` command for failed operations - useful for API rate limit scenarios.
8. [#3619](https://github.com/badlogic/pi-mono/issues/3619) (3 comments): Google Vertex missing model.baseUrl forwarding - affects proxy/gateway configurations.
9. [#3675](https://github.com/badlogic/pi-mono/issues/3675) (3 comments): Ctrl+G flicker/jump behavior - UI responsiveness issue.
10. [#2144](https://github.com/badlogic/pi-mono/issues/2144) (3 comments): Image paste support needed - feature parity with competitors like Claude Code.

**Key PR Progress**
1. [#3680](https://github.com/badlogic/pi-mono/pull/3680): Adds built-in `pi update` command for self-updating capability.
2. [#3651](https://github.com/badlogic/pi-mono/pull/3651): Fixes custom provider override edge case where only baseURL changes.
3. [#3669](https://github.com/badlogic/pi-mono/pull/3669): Repopulates editor prompt history after `/reload` command.
4. [#3664](https://github.com/badlogic/pi-mono/pull/3664): Ensures Anthropic tool_use.id always matches required pattern.
5. [#3661](https://github.com/badlogic/pi-mono/pull/3661): Adds xhigh reasoning support specifically for DeepSeek V4 Pro.
6. [#3659](https://github.com/badlogic/pi-mono/pull/3659): Injects empty reasoning_content for DeepSeek tool-call history compatibility.
7. [#3656](https://github.com/badlogic/pi-mono/pull/3656): Preserves actual reasoning_content during DeepSeek assistant message replay.
8. [#3650](https://github.com/badlogic/pi-mono/pull/3650): Omits tools field instead of sending empty array to fix DashScope errors.
9. [#3632](https://github.com/badlogic/pi-mono/pull/3632): Adds persistModelChanges setting to control session-only model selection.
10. [#3644](https://github.com/badlogic/pi-mono/pull/3644): Core DeepSeek provider implementation with thinking mode support.

**Feature Request Trends**
- **Enhanced Provider Support**: DeepSeek integration, Azure Foundry support, and improved OpenRouter compatibility
- **UI/UX Improvements**: LaTeX math rendering, better clipboard image handling, and refined keyboard shortcuts
- **Extension APIs**: Programmatic session switching, idle-time scheduling (`runWhenIdle`), and working loader customization
- **Configuration Controls**: Model persistence settings, timeout/retry configuration, and cache retention policies

**Developer Pain Points**
- **DeepSeek Reasoning Content Handling**: Multiple issues (#3636, #3668, #3655) reveal inconsistent reasoning_content requirements across providers
- **Provider Configuration Complexity**: Missing timeout/retry controls (#3627) and incomplete baseUrl forwarding (#3619) create configuration friction
- **Windows Compatibility**: Path handling with spaces breaks plugin installation (#3642)
- **Session Management**: Editor history repopulation broken after reload (#3667), affecting workflow continuity
- **API Limitations**: Context window mismatches (#3647, #3641) and restrictive authentication billing (#3670) impact reliability

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

**Qwen Code Community Digest – April 25, 2026**

---

### **Today's Highlights**
The Qwen Code team released **v0.15.2**, introducing auto-titling for sessions via a lightweight model and fixing internationalization sync issues. A critical performance optimization in PR #3581 cuts I/O overhead on tool-heavy paths by 91%, directly improving responsiveness during complex agent workflows. Concurrently, user demand is rising around API key management, multi-provider model configuration, and visual input support in CLI tools.

---

### **Releases**
- **v0.15.2** (2026-04-25):  
  - Auto-title sessions using a fast model; new `/rename --auto` command added (#3540)  
  - Fixed empty `'pages'` parameter handling in `ReadFile` utility (#3559)  
  - Resolved i18n synchronization gaps (#3559)

---

### **Hot Issues** *(Top 10 by engagement)*

1. **#3203**: Free tier quota reduced to 100 req/day; full phaseout planned by mid-May. Users express concern over accessibility.  
   🔗 [Issue #3203](https://github.com/QwenLM/qwen-code/issues/3203)

2. **#3579 / #3578**: DeepSeek API errors when `reasoning_content` omitted in thinking mode. Closed quickly but highlights integration fragility with third-party reasoning APIs.  
   🔗 [Issue #3579](https://github.com/QwenLM/qwen-code/issues/3579)

3. **#3595**: Local vision models fail to process images via `readfile`, though MCP-based usage works. Suggests config or adapter mismatch.  
   🔗 [Issue #3595](https://github.com/QwenLM/qwen-code/issues/3595)

4. **#3524**: Persistent 401 errors despite valid tokens—possibly token refresh logic gap.  
   🔗 [Issue #3524](https://github.com/QwenLM/qwen-code/issues/3524)

5. **#3566**: React infinite loop in `/skills list` UI due to missing dependency array in `useEffect`. Blocks skill discovery.  
   🔗 [Issue #3566](https://github.com/QwenLM/qwen-code/issues/3566)

6. **#3582**: Poor UX for custom API key setup in `/auth`—forces users to leave CLI and edit JSON manually.  
   🔗 [Issue #3582](https://github.com/QwenLM/qwen-code/issues/3582)

7. **#3555**: Duplicate model IDs across providers cause parsing failures. Limits fallback resilience.  
   🔗 [Issue #3555](https://github.com/QwenLM/qwen-code/issues/3555)

8. **#3594**: `/review` ignores CLI language setting, outputs English only. Minor but confusing for non-en users.  
   🔗 [Issue #3594](https://github.com/QwenLM/qwen-code/issues/3594)

9. **#3052**: Request for one-click copy button on LLM responses—missing vs. competitors like Claude Code.  
   🔗 [Issue #3052](https://github.com/QwenLM/qwen-code/issues/3052)

10. **#3601**: Nightly release pipeline failed today—build instability noted among contributors.  
    🔗 [Issue #3601](https://github.com/QwenLM/qwen-code/issues/3601)

---

### **Key PR Progress** *(Top 10 active PRs)*

1. **#3581** (`CLOSED`): Reduced synchronous I/O calls in chat recording by 91% via batched fs operations—major win for tool-heavy workloads.  
   🔗 [PR #3581](https://github.com/QwenLM/qwen-code/pull/3581)

2. **#3598** (`OPEN`): Adds `--json-schema` flag for structured output in headless mode—enables programmatic result parsing.  
   🔗 [PR #3598](https://github.com/QwenLM/qwen-code/pull/3598)

3. **#3576** (`OPEN`): Introduces OpenRouter OAuth flow and model catalog integration—expands auth options.  
   🔗 [PR #3576](https://github.com/QwenLM/qwen-code/pull/3576)

4. **#3538** (`OPEN`): LLM-generated summaries for parallel tool batches improve transparency in compact view.  
   🔗 [PR #3538](https://github.com/QwenLM/qwen-code/pull/3538)

5. **#3600** (`OPEN`): Fixes shell line continuation parsing (addresses #3158). Critical for multi-line commands.  
   🔗 [PR #3600](https://github.com/QwenLM/qwen-code/pull/3600)

6. **#3156** (`OPEN`): Strips dangerous patterns from YOLO auto-approve to prevent unsafe command injection.  
   🔗 [PR #3156](https://github.com/QwenLM/qwen-code/pull/3156)

7. **#3441** (`OPEN`): Conversation rewind via double-ESC or `/rewind`—reduces frustration with missteps.  
   🔗 [PR #3441](https://github.com/QwenLM/qwen-code/pull/3441)

8. **#3495** (`OPEN`): Preserves settings-sourced API keys when env vars are missing—fixes auth regression.  
   🔗 [PR #3495](https://github.com/QwenLM/qwen-code/pull/3495)

9. **#3539** (`OPEN`): `/branch` command forks conversations—enables safe experimentation without losing context.  
   🔗 [PR #3539](https://github.com/QwenLM/qwen-code/pull/3539)

10. **#3562** (`OPEN`): OSC notifications for iTerm2/Kitty/Ghostty replace basic beeps—better UX across terminals.  
    🔗 [PR #3562](https://github.com/QwenLM/qwen-code/pull/3562)

---

### **Feature Request Trends**

- **Multi-provider model resilience**: Users want seamless fallback when same model appears under different vendor IDs (#3555).
- **Improved authentication UX**: Streamlined API key setup—especially for custom endpoints and OpenRouter (#3582).
- **Visual input support**: Vision-capable models should work natively in CLI `readfile`, not just via MCP (#3595).
- **Billing & cost tracking**: Per-model token pricing and session-level cost reporting requested (#3585).
- **Local deployment clarity**: Confusion persists around configuring local models post-v0.15.x (#3532).

---

### **Developer Pain Points**

- **Auth complexity**: Manual `settings.json` edits required for most non-OAuth flows deter casual users.
- **Inconsistent behavior**: Same model works via MCP but fails in native CLI—suggests abstraction layer bug.
- **UI instability**: React loops and unresponsive slash commands break core workflows (/skills, /review).
- **Missing polish**: Copy-button, language consistency, and notification UX lag behind competitors.
- **Documentation gaps**: Local model setup and ACP HTTP transport lack clear guidance.

--- 

*Generated from GitHub activity on [QwenLM/qwen-code](https://github.com/QwenLM/qwen-code)*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/DenisZheng/agents-radar).*