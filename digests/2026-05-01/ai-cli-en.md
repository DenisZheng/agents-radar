# AI CLI Tools Community Digest 2026-05-01

> Generated: 2026-05-01 00:33 UTC | Tools covered: 8

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

**Cross-Tool AI CLI Ecosystem Report – May 1, 2026**

---

### **1. Ecosystem Overview**  
The AI CLI tooling landscape is rapidly maturing, with leading tools (Claude Code, OpenAI Codex, GitHub Copilot CLI) converging on agentic workflows, persistent memory, and enterprise-grade governance. However, fragmentation persists in platform support, authentication models, and observability—especially around sub-agent token accounting, cross-platform clipboard handling, and secure credential management. While most tools now offer MCP integration and TUI enhancements, stability regressions and billing opacity remain critical pain points across the board.

---

### **2. Activity Comparison**  

| Tool               | Hot Issues (Top 10) | Key PRs Merged | New Releases | Release Status       |
|--------------------|---------------------|----------------|--------------|----------------------|
| **Claude Code**    | 10                  | 10             | None         | Stable (v2.1.118+)   |
| **OpenAI Codex**   | 10                  | 10             | `rust-v0.128.0` | Stable + Alpha       |
| **Gemini CLI**     | 10                  | 10             | v0.41.0-p1, v0.40.1 | Patch releases      |
| **GitHub Copilot CLI** | 10           | 1                 | v1.0.40-3    | Stable (v1.0.40+)    |
| **Kimi Code CLI**  | 7                   | 10             | v1.41.0      | Stable               |
| **OpenCode**       | 10                  | 10             | None         | Active dev (main)    |
| **Pi**             | 10                  | 10             | v0.71.0      | Major provider shift |
| **Qwen Code**      | 10                  | 10             | v0.15.6      | Stable               |

> *Note: All tools maintain active issue tracking; only Kimi Code CLI and Pi released new versions in the last 24h.*

---

### **3. Shared Feature Directions**  

| Requirement                          | Tools Involved                     | Notes                                                                 |
|--------------------------------------|------------------------------------|-----------------------------------------------------------------------|
| **Persistent Memory/Context**        | Kimi, Claude, OpenCode, Qwen       | Requested for session continuity; Kimi’s ACP session/list still missing |
| **Per-Tool Permissions**             | Copilot CLI, Kimi, Claude          | Granular allowlists vs. global access (#1973, #2114)                  |
| **Sub-Agent Token Accounting**       | Claude, Gemini, OpenCode           | Hidden usage breaks cost predictability (#55121, #22323)              |
| **ACP Protocol Compliance**          | Kimi, OpenCode, Qwen               | Essential for IDE integrations (Zed, VSCode)                          |
| **Cross-Platform Clipboard Support** | Kimi, Pi, Claude, Copilot CLI      | Fails in WSL, Windows Terminal, headless Linux                        |
| **Session Recovery & Undo**          | Codex, Qwen, OpenCode              | `/undo` missing or broken after deletions                             |
| **Billing Transparency**             | Claude, Kimi                       | Token vs. API request confusion, silent overcharges (#53262)         |

---

### **4. Differentiation Analysis**  

- **Enterprise Focus**:  
  - **Claude Code** leads with Web4 Governance Plugin (#20448), cryptographic provenance, and audit trails.  
  - **GitHub Copilot CLI** emphasizes CI/CD via `client_credentials` OAuth and MCP server extensibility.  
  - **Pi** targets self-hosters with local-LLM providers (Llama.cpp, Ollama) and ephemeral credentials.

- **Developer Experience**:  
  - **OpenAI Codex** excels in automation reliability with persisted `/goal` workflows and TUI controls.  
  - **Kimi Code CLI** prioritizes IDE parity through ACP wire persistence and replayable history.  
  - **Gemini CLI** lags in responsiveness (10-min latency), hurting usability despite stable patches.

- **Provider Strategy**:  
  - **Pi** and **OpenCode** support multi-cloud (Bedrock, OpenRouter, Cloudflare); others are vendor-locked.  
  - **Qwen Code** and **Kimi** optimize for cost-efficient reasoning models but face token-billing friction.

---

### **5. Community Momentum & Maturity**  

- **Most Active**: **OpenCode** and **Claude Code** have high issue engagement (70+ comments on memory thread; 177 👍 on billing bug).  
- **Rapid Iteration**: **Pi** (v0.71.0 provider shift) and **Kimi** (v1.41.0 ZIP plugin install) show aggressive feature velocity.  
- **Stable but Stalled**: **Gemini CLI** has minimal new features despite growing backlog (2,342 issues).  
- **Enterprise Adoption Signals**: **Copilot CLI**’s auth improvements and **Claude Code**’s governance plugin indicate institutional push.

---

### **6. Trend Signals**  

- **Shift to Agentic Observability**: Real-time token counters, cache read metrics, and sub-agent tracing are becoming standard expectations (Claude #55133, Codex #20257).  
- **Security as Core Requirement**: Tool injection risks (Pi #4018 grep RCE), auth sandboxing, and config validation are rising priorities.  
- **Platform Fragmentation Persists**: macOS Intel/M1 divergence, Windows Defender false positives, and WSL clipboard gaps hinder universal adoption.  
- **BYOK & Cost Control**: Users demand transparent billing (token vs. API calls) and BYOK quota management (OpenCode #25148).  
- **IDE Integration Maturity**: Full ACP compliance is table stakes—tools without it (e.g., Kimi pre-session/list) lose developer trust.

--- 

*Prepared for technical decision-makers seeking strategic insights into AI CLI tool evolution and investment priorities.*

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

**Claude Code Skills Community Highlights Report**  
*As of 2026-05-01*

---

### 1. **Top Skills Ranking**

While no PRs in the top 50 by comments exceed 10 interactions, several high-engagement Skills demonstrate strong community interest:

- **[skill-quality-analyzer & skill-security-analyzer](https://github.com/anthropics/skills/pull/83)**  
  A meta-skill suite evaluating Claude Skills across structure, security, and documentation quality. Designed for enterprise governance, it assesses five weighted dimensions including compliance and vulnerability detection. Status: Open (Nov 2025–Jan 2026).

- **[SAP-RPT-1-OSS predictor skill](https://github.com/anthropics/skills/pull/181)**  
  Enables predictive analytics on SAP business data using SAP’s open-source tabular foundation model (Apache 2.0). Targets enterprise users needing integration with SAP ecosystems. Status: Open (Dec 2025–Mar 2026).

- **[codebase-inventory-audit](https://github.com/anthropics/skills/pull/147)**  
  Systematic cleanup tool identifying orphaned code, unused files, and infrastructure bloat via a 10-step workflow. Outputs a unified `CODEBASE-STATUS.md`. Status: Open (Dec 2025–Feb 2026).

- **[shodh-memory](https://github.com/anthropics/skills/pull/154)**  
  Persistent memory layer for AI agents using vector embeddings stored locally. Maintains conversational context across sessions via `proactive_context` triggers. Status: Open (Dec 2025–Mar 2026).

- **[ServiceNow platform skill](https://github.com/anthropics/skills/pull/568)**  
  Broad ITSM/SecOps assistant covering scripting, FSM, Vulnerability Response, and IntegrationHub. Aims to unify ServiceNow workflows within Claude. Status: Open (Mar–Apr 2026).

---

### 2. **Community Demand Trends**

From active Issues, key thematic demands emerge:

- **Enterprise Integration**: Multiple users request deeper SAP, ServiceNow, and AWS Bedrock support (Issues #29, #568).
- **Skill Governance**: Strong interest in standardized evaluation, security scanning, and organizational sharing (Issues #228, #83, #556).
- **Automation & Reporting**: End-of-day Git-to-Obsidian reporting (#664) and document typography control (#514) reflect needs for polished output generation.
- **Trust & Security**: Concerns about namespace impersonation (#492) and API key dependencies (#532) highlight enterprise adoption barriers.

Notably absent from Issues: direct requests for code review or test-generation Skills—suggesting these may already be partially covered by existing capabilities.

---

### 3. **High-Potential Pending Skills**

These open PRs show sustained activity and likely imminent merge:

- **[testing-patterns](https://github.com/anthropics/skills/pull/723)** (Mar–Apr 2026): Comprehensive testing guidance across unit, React, and E2E layers; aligns with growing dev workflow demand.
- **[frontend-design](https://github.com/anthropics/skills/pull/210)** (Jan–Mar 2026): Revamped UI/UX guidance prioritizing actionable, single-conversation execution.
- **[masonry-generate-image-and-videos](https://github.com/anthropics/skills/pull/335)** (Feb–Mar 2026): AI media generation via CLI tools (Imagen/Veo); capitalizes on multimodal trending use cases.
- **[HADS](https://github.com/anthropics/skills/pull/616)** (Mar–Apr 2026): Human-AI Document Standard for dual-human/AI-readable technical docs—addresses emerging doc-as-code practices.

All are in final review stages with minimal blocking feedback.

---

### 4. **Skills Ecosystem Insight**

The community’s most concentrated demand is for **enterprise-grade governance and interoperability**: skills that enable secure, auditable, and cross-platform integration of Claude into institutional workflows—particularly around SAP, ServiceNow, persistent memory, and automated compliance reporting.

--- 

*Sources: anthropics/skills PRs #514, #538, #83, #210, #486, #539, #541, #509, #723, #95, #181, #335, #806, #147, #154, #568, #666, #664, #616 and Issues #62, #228, #202, #556, #189, #492, #412, #29, #16, #184, #61, #868, #532, #406, #403.*

---

**Claude Code Community Digest – May 1, 2026**

---

### **Today’s Highlights**

No new releases in the past 24 hours. The community is actively tracking a critical billing bug where the presence of `HERMES.md` in Git history silently routes usage to extra billing instead of plan quota (Issue #53262), which has already cost users hundreds of dollars. Meanwhile, performance regressions and authentication issues continue to surface, with memory leaks (#54200) and OAuth failures (#54443) affecting stability across platforms.

---

### **Releases**

None reported in the last 24 hours.

---

### **Hot Issues**

1. **[#53262](https://github.com/anthropics/claude-code/issues/53262)** – *HERMES.md triggers unintended extra usage billing*  
   A severe billing edge case: if a repo contains a file named `HERMES.md`, all requests are misrouted to “extra usage” instead of Max plan quota. Users report silent overcharges (e.g., $200 burned). High engagement (81 comments, 👍177). Critical for financial transparency.

2. **[#41581](https://github.com/anthropics/claude-code/issues/41581)** – *Max plan downgraded to Free without user action*  
   Subscription tier corruption suspected—Max users suddenly lose access despite no change on their end. Low 👍 but concerning for trust and billing integrity.

3. **[#3473](https://github.com/anthropics/claude-code/issues/3473)** – *Change working directory mid-session*  
   Longstanding request for session flexibility. 71 upvotes signal strong demand among polyglot developers managing multi-project workflows.

4. **[#16550](https://github.com/anthropics/claude-code/issues/16550)** – *Allow Claude to write/update project files*  
   Core capability gap preventing autonomous agent workflows. 38 👍 reflect developer desire for true file-system interaction beyond read-only mode.

5. **[#55053](https://github.com/anthropics/claude-code/issues/55053)** – *Session window depletes 5–10× faster since Apr 29*  
   Sudden spike in token consumption per session, especially with sub-agents. Impacts productivity and cost predictability—users report ~20% burn/hour on light tasks.

6. **[#50466](https://github.com/anthropics/claude-code/issues/50466)** – *v2.1.113 crashes on AVX2-less Intel Macs (Ivy Bridge)*  
   Regression from v2.1.112; SIGILL errors break older hardware. Niche but important for legacy macOS support.

7. **[#53872](https://github.com/anthropics/claude-code/issues/53872)** – *Opus 4.7 context capped at 500K despite Max x20*  
   Server-side enforcement bug ignoring subscription tier. Affects Windows/Linux users relying on large-context models.

8. **[#24285](https://github.com/anthropics/claude-code/issues/24285)** – *Can’t see Claude’s thinking anymore*  
   TUI rendering regression hiding internal monologue. 26 👍 indicate UX degradation impacting debugging and transparency.

9. **[#54200](https://github.com/anthropics/claude-code/issues/54200)** – *Memory leak since v2.1.118 causing 10GB RAM spikes*  
   Severe performance regression—idle sessions consume excessive memory. Linux-specific but alarming for long-running agents.

10. **[#55121](https://github.com/anthropics/claude-code/issues/55121)** – *Token counter omits sub-agent usage by up to 10×*  
    UI undercounts actual API consumption when sub-agents spawn. Masks real costs and hampers session planning.

---

### **Key PR Progress**

1. **[#55098](https://github.com/anthropics/claude-code/pull/55098)** – *Statusline script with context & rate-limit bars*  
   Adds real-time visibility into context usage and 5-hour session limits via shell statusline. Helps users monitor consumption proactively.

2. **[#19871](https://github.com/anthropics/claude-code/pull/19871)** – *Fix duplicate IP handling in devcontainer firewall*  
   Prevents `ipset add` failures when DNS resolves duplicates (e.g., VS Code Marketplace). Improves reliability in containerized environments.

3. **[#54873](https://github.com/anthropics/claude-code/pull/54873)** – *Replace hand-rolled YAML parser + fix Write hookify bug*  
   Fixes two silent bugs: double-escaped backslashes in frontmatter parsing and missing `new_text` field in Write events. Critical for hook reliability.

4. **[#20448](https://github.com/anthropics/claude-code/pull/20448)** – *Web4 Governance Plugin (AI trust & audit framework)*  
   Introduces cryptographic provenance, entity witnessing, and R6 audit trails for regulated or enterprise use cases.

5. **[#55156](https://github.com/anthropics/claude-code/pull/55156)** – *Fix 400 error on image paste without caption*  
   Addresses API rejection when pasting images lacking captions due to invalid `cache_control`.

6. **[#40141](https://github.com/anthropics/claude-code/pull/40141)** – *CUA screenshots not saved to disk properly*  
   Corrects `save_to_disk: true` behavior in computer-use tools—now returns actual file path.

7. **[#52814](https://github.com/anthropics/claude-code/pull/52814)** – *Fix /tmp ownership collision in multi-user macOS setups*  
   Resolves desktop app crashes caused by shared temp file permissions.

8. **[#55149](https://github.com/anthropics/claude-code/pull/55149)** – *Reduce main-thread blocking in Desktop app IndexedDB sync*  
   Mitigates input lag on Windows caused by large LocalStorage syncs.

9. **[#55123](https://github.com/anthropics/claude-code/pull/55123)** – *Unwedge Dispatch sessions after pairing state corruption*  
   Attempts to recover from server-side pairing locks after failed updates.

10. **[#55133](https://github.com/anthropics/claude-code/pull/55133)** – *Expose cache read/write tokens in usage display*  
    First step toward surfacing hidden cost drivers—cache reads often dominate spend.

---

### **Feature Request Trends**

- **Dynamic session control**: Changing working directory mid-session (#3473), auto-naming based on conversation topic (#37777).
- **Enhanced observability**: Real-time token counters including sub-agent and cache metrics (#55121, #55133), statusline integration (#55098).
- **File system autonomy**: Ability to write/update files directly (#16550), better screenshot tool outputs (#40141).
- **Enterprise-grade governance**: Audit trails, cryptographic provenance, and compliance hooks (via #20448 and related enhancements).

---

### **Developer Pain Points**

- **Billing opacity**: Silent routing to extra usage due to filename quirks (#53262), misleading token counters (#55121).
- **Platform instability**: Memory leaks (#54200), OAuth refresh failures (#54443), desktop app crashes on shared systems (#52814).
- **Agent visibility loss**: Sub-agent API calls invisible in UI, hiding real consumption.
- **Hook fragility**: Custom YAML parsing bugs (#54873), unreliable HTTP event delivery (#30170).
- **Performance regressions**: Session window depletion spikes (#55053), main-thread blocking in Electron app (#55149).

--- 

*End of digest.*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

**OpenAI Codex Community Digest – May 1, 2026**

---

### **Today's Highlights**

The latest stable release, `rust-v0.128.0`, introduces robust persisted `/goal` workflows with full app-server API integration and TUI controls for create, pause, resume, and clear operations—significantly enhancing automation reliability. Concurrently, a surge of user-reported platform-specific bugs on Windows and macOS highlights growing pains in cross-environment consistency, particularly around browser-use plugins and authentication flows.

---

### **Releases**

- **`rust-v0.128.0`**: Introduces persisted `/goal` workflows with app-server APIs, model tools, runtime continuation, and TUI controls (create, pause, resume, clear). Also includes `codex update`, configurable keymaps, plan-mode nudges, and action-required terminal output improvements.  
  🔗 [Release Notes](https://github.com/openai/codex/releases/tag/rust-v0.128.0)

- Alpha releases (`v0.129.0-alpha.1`, `v0.128.0-alpha.1`, `v0.126.0-alpha.1`) continue iterative testing ahead of next stable cycle.

---

### **Hot Issues**

1. **[#18258](https://github.com/openai/codex/issues/18258)**: macOS users report "Computer Use plugin unavailable" despite bundled files present. Workaround provided; 36 upvotes indicate widespread frustration with plugin detection logic.  
2. **[#9203](https://github.com/openai/codex/issues/9203)**: Strong demand to restore `/undo` command after accidental file deletion—168 upvotes reflect critical UX gap in session recovery.  
3. **[#18341](https://github.com/openai/codex/issues/18341)**: Persistent translucent overlay blurs Composer on Intel Macs—visual regression affecting usability.  
4. **[#20161](https://github.com/openai/codex/issues/20161)**: Post-login SSO now requires phone number even if not set—confusing auth flow escalation.  
5. **[#4218](https://github.com/openai/codex/issues/4218)**: Shift+Enter regressed to send prompt instead of newline—disrupts editing workflow on macOS.  
6. **[#19563](https://github.com/openai/codex/issues/19563)**: Desktop thrashes between resume/unsubscribe under high heartbeat load—automation stability concern.  
7. **[#18450](https://github.com/openai/codex/issues/18450)**: Remote compact tasks fail due to stream disconnection—intermittent connectivity issues impacting long-running goals.  
8. **[#17893](https://github.com/openai/codex/issues/17893)**: Heartbeat automations advance schedule but never execute—silent failure mode in automation engine.  
9. **[#19271](https://github.com/openai/codex/issues/19271)**: Windows Defender flags bundled Node.js as trojan—security false positive breaking Browser Use skill.  
10. **[#20315](https://github.com/openai/codex/issues/20315)**: Same issue—Windows Defender quarantines browser-client.mjs during navigation attempts.  

---

### **Key PR Progress**

1. **[#11868](https://github.com/openai/codex/pull/11868)**: Fixes execpolicy matching for shell redirections (e.g., `> /tmp/log`)—resolves repeated approval prompts.  
2. **[#20298](https://github.com/openai/codex/pull/20298)**: Surfaces admin-disabled remote plugin status in UI—improves plugin availability clarity.  
3. **[#20314](https://github.com/openai/codex/pull/20314)**: Gates multi-environment tool surface behind turn selection—prevents confusion in complex setups.  
4. **[#20336](https://github.com/openai/codex/pull/20336)**: Unwraps PowerShell `-Command` wrappers on Windows for execpolicy—fixes rule mis-matches.  
5. **[#20098](https://github.com/openai/codex/pull/20098)**: Ignores dangerous project-level config keys—enhances security by preventing injection via malformed configs.  
6. **[#20257](https://github.com/openai/codex/pull/20257)**: Adds thread metadata (e.g., `local`, `ssh`, `remote_control`) to app-server protocol—enables better observability.  
7. **[#20267](https://github.com/openai/codex/pull/20267)**: Emits analytics for remote plugin installs—tracks adoption without compromising privacy.  
8. **[#19631](https://github.com/openai/codex/pull/19631)**: Colors TUI statusline from active theme—improves visual feedback and accessibility.  
9. **[#20341](https://github.com/openai/codex/pull/20341)**: Switches remote control to v3 segmented protocol—supports large message handling reliably.  
10. **[#18748](https://github.com/openai/codex/pull/18748)**: Emits terminal tool review events—adds structured telemetry for debugging user interactions.  

---

### **Feature Request Trends**

- **Session Recovery**: Reintroduction of `/undo` remains top-requested feature for mitigating accidental changes.  
- **Dynamic Model Control**: On-the-fly adjustment of reasoning effort in CLI (e.g., via `/reasoning`) requested frequently.  
- **Enhanced Hook System**: Demand for symmetric `SessionEnd` hook to complement existing `SessionStart`.  
- **Cross-Platform Consistency**: ARM64 emulation support on Windows and stable performance on WSL/Linux highlighted repeatedly.  
- **Authentication Clarity**: Users seek transparency when SSO triggers additional verification steps like phone entry.  

---

### **Developer Pain Points**

- **Platform Fragmentation**: Significant divergence in behavior between macOS (Apple Silicon vs Intel), Windows (MSIX packaging), and Linux/WSL—especially around browser-use, automations, and file watching.  
- **Security False Positives**: Bundled binaries (Node.js, browser clients) frequently flagged by antivirus software, blocking core functionality.  
- **Automation Reliability**: Scheduled automations often fail silently or create empty sessions—lack of execution guarantees frustrate power users.  
- **Auth Flow Escalation**: Sudden requirement for phone numbers post-login breaks SSO expectations and confuses enterprise users.  
- **TUI Regression Management**: Minor input handling regressions (e.g., Shift+Enter, Alt+Enter) have high visibility due to reliance on keyboard workflows.  

--- 

*Prepared by OpenAI Codex Technical Analyst Team*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

**Gemini CLI Community Digest - 2026-05-01**

---

### 1. **Today's Highlights**
The Gemini CLI team released patch versions v0.41.0-preview.1 and v0.40.1, focusing on stability fixes. A critical community concern is the severe latency in responses, with users reporting up to 10-minute delays for complex projects, significantly impacting usability. The backlog of open issues continues to grow (2342), prompting automated efforts to optimize stale policies and improve repository health metrics.

---

### 2. **Releases**
- **v0.41.0-preview.1**: Cherry-picks a fix from PR #26153 to address a regression in the preview release. ([Full Changelog](https://github.com/google-gemini/gemini-cli/compare/v0.41.0-preview.0...v0.41.0-preview.1))
- **v0.40.1**: Applies the same fix as above to the stable v0.40.x release line. ([Full Changelog](https://github.com/google-gemini/gemini-cli/compare/v0.40.0...v0.40.1))

---

### 3. **Hot Issues**
1. **[#26197](https://github.com/google-gemini/gemini-cli/issues/26197)**: Users report extreme latency (10+ minutes) making the tool unusable for serious development. This is the most commented issue (8 comments, 👍5).  
2. **[#22745](https://github.com/google-gemini/gemini-cli/issues/22745)**: An internal EPIC exploring AST-aware file reads to improve codebase navigation efficiency.  
3. **[#22323](https://github.com/google-gemini/gemini-cli/issues/22323)**: Subagents incorrectly report success after hitting turn limits, masking interruptions. Priority P1.  
4. **[#24916](https://github.com/google-gemini/gemini-cli/issues/24916)**: Persistent permission prompts for the same file frustrate users.  
5. **[#25166](https://github.com/google-gemini/gemini-cli/issues/25166)**: Shell commands hang indefinitely after completion, despite no input needed. 👍3.  
6. **[#22267](https://github.com/google-gemini/gemini-cli/issues/22267)**: Browser Agent ignores `settings.json` overrides like `maxTurns`. Priority P2.  
7. **[#25216](https://github.com/google-Gemini/gemini-cli/issues/25216)**: Critical error on Windows when opening paths starting with `A:\`.  
8. **[#24202](https://github.com/google-gemini/gemini-cli/issues/24202)**: Text becomes scrambled when running SSH, breaking the UI.  
9. **[#22819](https://github.com/google-gemini/gemini-cli/issues/22819)**: Need to distinguish between global and project-specific memory storage. 👍2.  
10. **[#23823](https://github.com/google-gemini/gemini-cli/issues/23823)**: Update internal tools to use the newer 3.1 Flash Lite model. 👍2.  

---

### 4. **Key PR Progress**
1. **[#26304](https://github.com/google-gemini/gemini-cli/pull/26304)**: Proposes optimizing the stale issue policy to combat repository bloat.  
2. **[#26303](https://github.com/google-gemini/gemini-cli/pull/26303)**: Enhances bot system prompts with nuanced conflict detection and validation.  
3. **[#26287](https://github.com/google-gemini/gemini-cli/pull/26287)**: Fixes voice transcription insertion to respect cursor position.  
4. **[#26284](https://github.com/google-gemini/gemini-cli/pull/26284)**: Adds a wave animation UI for voice mode feedback.  
5. **[#23608](https://github.com/google-gemini/gemini-cli/pull/23608)**: Makes subagents aware of active approval modes to prevent blocked actions.  
6. **[#26292](https://github.com/google-gemini/gemini-cli/pull/26292)**: Adds behavioral evaluation for `write_file` tool selection.  
7. **[#26286](https://github.com/google-gemini/gemini-cli/pull/26286)**: Fixes stale state after using `/rewind`.  
8. **[#25222](https://github.com/google-gemini/gemini-cli/pull/25222)**: Replaces unsafe type assertions with Zod validation for improved type safety.  
9. **[#25643](https://github.com/google-gemini/gemini-cli/pull/25643)**: Throttles shell output updates to reduce UI jank during high-volume streams.  
10. **[#25641](https://github.com/google-gemini/gemini-cli/pull/25641)**: Coerces environment variable strings to correct types (boolean/number) in settings.  

---

### 5. **Feature Request Trends**
- **Memory Management**: Clear separation between global and project-specific memory contexts (#22819).  
- **Agent Intelligence**: Improve subagent awareness of approval modes and proactive memory writes (#22819, #22809).  
- **Performance Optimization**: Address latency issues and streaming UI rendering (#26197, #25218).  
- **Codebase Navigation**: Explore AST-aware tools for more precise file analysis (#22745).  
- **Evaluation Framework**: Expand behavioral evaluations for agent behaviors like tool rejection handling (#23897).  

---

### 6. **Developer Pain Points**
- **Severe Latency**: The most reported blocker; responses can take 10+ minutes, rendering the tool impractical for large projects.  
- **UI/UX Glitches**: Scrambled text over SSH (#24202), hanging shell commands (#25166), and scroll/jump issues in long chats (#24470).  
- **Configuration Confusion**: Environment variables not coercing to correct types (#25641), browser agent ignoring `settings.json` (#22267).  
- **Permission Overhead**: Repeated prompts for the same file permissions (#24916).  
- **Tool Limitations**: Subagent failures masked as successes (#22323), excessive temporary script generation (#23571).

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

**GitHub Copilot CLI Community Digest – May 1, 2026**

---

### 1. **Today's Highlights**
The latest release (v1.0.40-3) introduces support for `client_credentials` OAuth flow in MCP servers, enabling fully automated authentication—ideal for CI/CD and headless environments. Session history, file tracking, and slash-command access to skills are now available to all users, enhancing transparency and control. Meanwhile, critical stability issues persist on Alpine Linux, and tool permission granularity remains a top pain point among developers.

---

### 2. **Releases**

#### v1.0.40-3
- Added support for `client_credentials` OAuth grant type for MCP servers, enabling fully headless authentication without a browser  
- Improved startup performance and added “Exiting…” stderr output on Ctrl+C for better shutdown visibility  
- Introduced `/research` subagent orchestration  

#### v1.0.40-2
- Fixed an issue where `/update` would re-submit prompts after restarting

#### v1.0.40-1
- Detects Azure DevOps repos and auto-disables GitHub MCP server  
- Enabled session history, file tracking, and `/chronicle` command globally  
- Skills now accessible via slash commands in ACP clients, aligning with CLI behavior  
- Improved CLI startup speed  

---

### 3. **Hot Issues**

1. **[#107](https://github.com/github/copilot-cli/issues/107)**: Segmentation faults during tool calls on Alpine Linux inside Docker containers. Affects reliability in minimal containerized dev environments. 14 comments, 4 👍  
2. **[#1973](https://github.com/github/copilot-cli/issues/1973)**: Requests per-tool permission whitelist instead of global `/allow-all`. Highly requested (13 👍) to prevent accidental destructive operations.  
3. **[#1799](https://github.com/github/copilot-cli/issues/1799)**: Users want to disable alt-screen terminal mode due to rendering bugs. 8 comments, 4 👍  
4. **[#1322](https://github.com/github/copilot-cli/issues/1322)**: Subagent tool call visibility lacking vs. VS Code’s detailed drill-down. 10 👍 show strong demand for richer observability.  
5. **[#2769](https://github.com/github/copilot-cli/issues/2769)**: Copilot Pro+ weekly rate limit not resetting at expected time. Confuses users about quota resets.  
6. **[#2795](https://github.com/github/copilot-cli/issues/2795)**: `--agent` flag fails when combined with `--plugin-dir` and `-p`. Hinders plugin-based agent workflows.  
7. **[#1082](https://github.com/github/copilot-cli/issues/1082)**: CLI hangs on `sudo` commands without prompting. Blocks tasks requiring elevated privileges. 10 👍 highlight workflow disruption.  
8. **[#1995](https://github.com/github/copilot-cli/issues/1995)**: Request for persistent per-tool permissions. 7 👍 indicate widespread need for fine-grained control.  
9. **[#3059](https://github.com/github/copilot-cli/issues/3059)**: Deprecation of `.vscode/mcp.json` breaks existing setups; users demand backward compatibility or migration path.  
10. **[#3060](https://github.com/github/copilot-cli/issues/3060)**: `store_memory` fails for non-GitHub remotes (e.g., Azure DevOps). Limits extensibility outside GitHub ecosystem.

---

### 4. **Key PR Progress**

1. **[#1968](https://github.com/github/copilot-cli/pull/1968)**: Implements retry logic for install failures when authenticated requests fail due to SSO/SAML restrictions—improving robustness in enterprise auth flows.

*(Note: Only one PR updated in the last 24h.)*

---

### 5. **Feature Request Trends**

Developers are increasingly demanding:
- **Granular tool permissions** (per-tool allowlists vs. all-or-nothing)
- **Enhanced subagent visibility** into tool calls and reasoning
- **Cross-platform clipboard handling** (especially Windows/WSL UTF-8 → UTF-16LE issues)
- **Support for non-GitHub VCS** (e.g., jj-vcs, Azure DevOps)
- **Persistent configuration sync** between CLI updates and config files
- **Better error messaging around rate limits** with actionable guidance
- **Async hook execution** to avoid blocking tool completion

These reflect a shift toward production-grade usability, observability, and platform neutrality.

---

### 6. **Developer Pain Points**

- **Stability on minimal OSes**: Alpine Linux segfaults break CI and containerized usage (#107).
- **Authentication friction**: Frequent re-login required post-logout; no persistent token caching (#3057).
- **Permission rigidity**: No way to pre-approve safe tools without exposing system (#1973, #1995).
- **Terminal rendering regressions**: Alt-screen mode causes display issues (#1799).
- **Plugin/config drift**: Updates don’t sync version metadata, leading to confusion (#3058).
- **Lack of execution telemetry**: No timers or feedback on long-running shell commands (#3055).
- **MCP configuration fragmentation**: Deprecation of `.vscode/mcp.json` forces dual-maintenance burden (#3059).

---

*For full details, visit [copilot-cli GitHub repo](https://github.com/github/copilot-cli).*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

**Kimi Code CLI Community Digest – May 1, 2026**

---

### **Today’s Highlights**

The Kimi Code CLI team released version 1.41.0 with key fixes for clipboard functionality on headless Linux and plugin installation from ZIP URLs. Several high-impact PRs are addressing ACP protocol gaps, shell UX improvements, and configuration flexibility. Meanwhile, community feedback highlights growing demand for persistent memory systems and better cross-platform clipboard support.

---

### **Releases**

**v1.41.0**  
- Fixed clipboard paste on headless Linux over SSH (#2115)  
- Added support for installing plugins directly from `.zip` URLs (#2126)  
- Release automation updated (#2130)

---

### **Hot Issues**

1. **[#1283](https://github.com/MoonshotAI/kimi-cli/issues/1283)** – *Feature Request: Memory System*  
   Users want persistent context across sessions (e.g., project patterns, user instructions). This would significantly enhance workflow continuity—currently under discussion with 5 comments but no upvotes yet.

2. **[#1617](https://github.com/MoonshotAI/kimi-cli/issues/1617)** – *Ctrl-V paste fails in Windows Terminal*  
   A longstanding bug preventing image/paste operations in Windows environments. Affects usability for Windows developers using Kimi CLI natively; still open after months.

3. **[#2131](https://github.com/MoonshotAI/kimi-cli/issues/2131)** – *Environment variable pollution crashes desktop app*  
   Kimi CLI modifies session env vars in a way that breaks the Electron-based desktop client upon restart. Raised by a VMware user; indicates integration fragility between CLI and GUI layers.

4. **[#2127](https://github.com/MoonshotAI/kimi-cli/issues/2127)** – *Missing ACP `session/list/get` methods block Zed history*  
   Critical for IDE integrations like Zed. Without these ACP endpoints, historical conversations aren’t restored—breaking core developer workflows relying on context persistence.

5. **[#1994](https://github.com/MoonshotAI/kimi-cli/issues/1994)** – *Token-based usage calculation feels restrictive*  
   Users report rapid token depletion with complex reasoning models (e.g., K2.6), leading to frustration despite advertised "high concurrency." Community questions whether billing aligns with actual API request volume or just token count.

6. **[#2122](https://github.com/MoonshotAI/kimi-cli/issues/2122)** – *Shell mode defaults to /bin/sh instead of user shell*  
   Developers using zsh/fish find their environment broken when `Ctrl+X` launches a non-default shell. Simple fix but impacts daily productivity for many CLI-centric users.

7. **[#2121](https://github.com/MoonshotAI/kimi-cli/issues/2121)** – *Shift+Enter line break not supported*  
   Contrasts with industry standards (Claude Code, etc.). While minor, it affects editing ergonomics—especially for multi-line code or prose input.

---

### **Key PR Progress**

1. **[#2136](https://github.com/MoonshotAI/kimi-cli/pull/2136)** – Reduces latency in hidden modal input rendering during completion  
2. **[#2135](https://github.com/MoonshotAI/kimi-cli/pull/2135)** – Throttles toolbar git metadata polling to improve terminal responsiveness  
3. **[#2134](https://github.com/MoonshotAI/kimi-cli/pull/2134)** – Ignores xterm focus events to prevent input leakage (`[I`/`[O]` escape sequences)  
4. **[#2133](https://github.com/MoonshotAI/kimi-cli/pull/2133)** – Ensures custom agent prompts inherit `AGENTS.md` instructions automatically  
5. **[#2132](https://github.com/MoonshotAI/kimi-cli/pull/2132)** – Implements replayable session history via ACP wire persistence (critical for IDE sync)  
6. **[#2114](https://github.com/MoonshotAI/kimi-cli/pull/2114)** – Introduces granular auto-approval rules in config.toml (inspired by Claude Code)  
7. **[#2129](https://github.com/MoonshotAI/kimi-cli/pull/2129)** – Makes plan files respect `KIMI_SHARE_DIR`, fixing path hardcoding  
8. **[#1972](https://github.com/MoonshotAI/kimi-cli/pull/1972)** – Adds color-coded visual progress bar for context usage (mimicking claude-hud)  
9. **[#2126](https://github.com/MoonshotAI/kimi-cli/pull/2126)** – Closed: Enables plugin install from ZIP URLs (now in v1.41.0)  
10. **[#2115](https://github.com/MoonshotAI/kimi-cli/pull/2115)** – Closed: Fixes clipboard paste in headless Linux/SSH (now in v1.41.0)

---

### **Feature Request Trends**

- **Persistent Context & Memory System**: Repeatedly requested (#1283) as a top priority—users expect Kimi CLI to retain project state and preferences across restarts.
- **Improved Clipboard Support**: Cross-platform paste functionality (especially images on Windows/Linux) remains a pain point.
- **ACP Protocol Completion**: Full implementation of `session/list`, `session/get`, and related endpoints needed for IDE compatibility (Zed, etc.).
- **Configurable Shell Behavior**: Defaulting to user’s `$SHELL` instead of `/bin/sh` is expected in modern CLI tools.
- **Enhanced Usage Transparency**: Clearer distinction between token counts vs. API requests in billing metrics.

---

### **Developer Pain Points**

- **Clipboard Inconsistencies**: Paste works inconsistently across platforms (Windows Terminal, headless Linux), disrupting copy-paste workflows.
- **ACP Gaps**: Lack of full ACP compliance prevents seamless integration with third-party editors.
- **Billing Confusion**: Token-heavy reasoning models consume quotas quickly, raising concerns about value-for-money despite high throughput claims.
- **Environment Pollution**: CLI-side env modifications interfere with desktop app stability.
- **Missing Industry UX Norms**: Shift+Enter line breaks, proper shell selection, and visual feedback (e.g., progress bars) lag behind competitors like Claude Code.

--- 

Let me know if you'd like deeper analysis on any section!

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

**OpenCode Community Digest — May 1, 2026**

---

### 1. Today's Highlights

No new releases were published in the last 24 hours. However, several critical fixes targeting context overflow handling in sub-agents and reasoning content leakage during session compaction have been merged or are under active review. Additionally, a high-priority memory issue thread (#20695) continues to gather community attention with 70 comments, underscoring ongoing performance concerns around heap usage.

---

### 2. Releases

_No releases reported in the last 24 hours._

---

### 3. Hot Issues

1. **#20695 [OPEN] [perf, core] Memory Megathread**  
   A central hub for reporting memory leaks and heap issues across sessions. With 70 comments and strong engagement (👍41), this thread highlights systemic performance bottlenecks that affect long-running agent workflows. Contributors are urged to submit heap snapshots rather than speculative solutions.  
   🔗 https://github.com/anomalyco/opencode/issues/20695

2. **#25148 [CLOSED] Free BYOK request cap exceeded**  
   Users reported hitting monthly free-tier limits despite active OpenCode Go subscriptions. The issue was quickly resolved by redirecting users to purchase additional credits via OpenRouter. Still, it raised awareness about BYOK (Bring Your Own Key) quota management.  
   🔗 https://github.com/anomalyco/opencode/issues/25148

3. **#14194 [OPEN] Database corruption when sharing configs between local and Docker**  
   SQLite database corruption occurs when running OpenCode both natively and in Docker while sharing config directories, especially during concurrent sessions. This impacts reproducibility and deployment reliability. Updated just yesterday with detailed diagnostics.  
   🔗 https://github.com/anomalyco/opencode/issues/14194

4. **#24648 [OPEN] AWS Bedrock multi-model conversation handoff failure**  
   When switching between models (e.g., Opus for planning, Sonnet for building) in separate agent roles, conversation continuity breaks with `undefined:` errors. Suggests improper state isolation in Bedrock provider logic.  
   🔗 https://github.com/anomalyco/opencode/issues/24648

5. **#24751 [CLOSED] GPT-5.5 context limits ignored due to hardcoded values**  
   Hardcoded context window sizes bypassed user-defined settings in `opencode.jsonc`. Fixed after PR #24212 introduced unintended restrictions; now respects configuration files.  
   🔗 https://github.com/anomalyco/opencode/issues/24751

6. **#20261 [OPEN] TUI color rendering glitch after editor mode exit**  
   UI colors become dimmed or misaligned upon returning from inline editor mode. Affects visual consistency in OpenTUI, particularly noticeable on terminals without truecolor support.  
   🔗 https://github.com/anomalyco/opencode/issues/20261

7. **#11391 [OPEN] Google Stitch + MCP server integration guide needed**  
   User seeks documentation or support for connecting Google Stitch with an external MCP server within OpenCode. Indicates gaps in ecosystem tooling visibility.  
   🔗 https://github.com/anomalyco/opencode/issues/11391

8. **#24803 [CLOSED] DeepSeek V4 thinking mode missing in multi-turn contexts**  
   Reasoning content (`thinking`) wasn’t forwarded back to API in follow-up turns, causing invalid request errors. Now addressed in latest patch.  
   🔗 https://github.com/anomalyco/opencode/issues/24803

9. **#23566 [OPEN] Docs incorrectly claim LSP is enabled by default**  
   Despite official stance that LSP is opt-in, documentation still implies auto-enabling. Confusing new users expecting language-server features out-of-the-box.  
   🔗 https://github.com/anomalyco/opencode/issues/23566

10. **#6273 [OPEN] Vue syntax highlighting broken in editor**  
   No syntax highlighting appears when editing `.vue` files, despite claimed LSP support for Vue. Hinders developer experience in frontend projects.  
    🔗 https://github.com/anomalyco/opencode/issues/6273

---

### 4. Key PR Progress

1. **#25180 [OPEN] fix: enable auto-compaction for sub-agents**  
   Solves indefinite hangs in sub-agents during context overflow by ensuring compaction triggers correctly. Critical for stability in multi-agent plans.  
   🔗 https://github.com/anomalyco/opencode/pull/25180

2. **#25186 [OPEN] provider: split Bedrock Claude into 200K/1M context variants**  
   Improves model selection clarity by separating large-context options behind proper headers/product choices, reducing user error.  
   🔗 https://github.com/anomalyco/opencode/pull/25186

3. **#25185 [OPEN] session: synthesize missing `reasoning-start` events**  
   Normalizes streaming behavior so downstream code can assume every reasoning delta has a matching start marker, fixing ordering bugs.  
   🔗 https://github.com/anomalyco/opencode/pull/25185

4. **#25184 [OPEN] session: add `stripReasoning` option for safety**  
   Allows explicit dropping of reasoning blobs during compaction or model switches to prevent cross-provider API violations.  
   🔗 https://github.com/anomalyco/opencode/pull/25184

5. **#21907 [OPEN] feat: add free model resolution**  
   Enables `--model free` to dynamically select available free-tier models across providers, improving accessibility.  
   🔗 https://github.com/anomalyco/opencode/pull/21907

6. **#23612 [OPEN] fix lsp sync range & workspaceSymbol query**  
   Corrects broken symbol search in .NET/C# projects by fixing empty query transmission and improving synchronization logic.  
   🔗 https://github.com/anomalyco/opencode/pull/23612

7. **#23927 [OPEN] preserve Bedrock Claude reasoning replay**  
   Fixes interleaved reasoning token replay in Bedrock Claude streams, maintaining correct message reconstruction.  
   🔗 https://github.com/anomalyco/opencode/pull/23927

8. **#24512 [BETA] Refactor v2 session events as schemas**  
   Modernizes event system using Effect schemas for better type safety and testability. Part of larger backend restructuring.  
   🔗 https://github.com/anomalyco/opencode/pull/24512

9. **#18767 [OPEN] Mobile Touch Optimization**  
   Introduces responsive touch gestures and layout adjustments for mobile use while preserving desktop UX. Targets growing mobile dev adoption.  
   🔗 https://github.com/anomalyco/opencode/pull/18767

10. **#13854 [OPEN] stop streaming markdown after completion**  
   Fixes premature truncation of final markdown/code blocks in TUI by deriving streaming state from `message.time.completed`.  
    🔗 https://github.com/anomalyco/opencode/pull/13854

---

### 5. Feature Request Trends

- **Enhanced Context Management**: Multiple requests emphasize better handling of large conversations, including smarter compaction, overflow detection, and reasoning-aware summarization.
- **Provider-Specific Model Clarity**: Users want clearer distinctions between similar models (e.g., Bedrock Claude’s 200K vs 1M tokens) and improved configuration UX.
- **Tool & Agent Timeout Controls**: Requests for configurable timeouts on Task tool invocations and subagent operations to prevent hangs.
- **Cross-Platform Clipboard & UI Consistency**: Issues with clipboard functionality on Linux and inconsistent TUI rendering suggest need for platform-aware UI abstractions.
- **Documentation Accuracy**: Growing friction due to outdated or misleading docs—especially around LSP defaults and feature availability.

---

### 6. Developer Pain Points

- **Memory & Performance Instability**: Recurring reports of heap bloat and unresponsive agents point to insufficient garbage collection or inefficient history compaction.
- **Database Corruption Risks**: Shared volume mounts between host and containers cause SQLite integrity failures under concurrency—critical for CI/CD and team workflows.
- **Provider API Edge Cases**: DeepSeek, Bedrock, and MiniMax exhibit non-standard behaviors (e.g., missing `reasoning-start`, bearer auth mismatches) that break expected semantics.
- **Configuration Drift**: Hardcoded values (context limits, timeouts) override user preferences, undermining trust in config-driven customization.
- **Missing Local Dev Tooling**: Lack of GUI-based setup for local Ollama and unclear ACP/Zed integration paths frustrate self-hosted developers.

--- 

*Prepared by OpenCode Technical Analyst | Data source: github.com/anomalyco/opencode*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

**Pi Community Digest – May 1, 2026**

---

### 1. **Today’s Highlights**  
The Pi ecosystem saw a major provider shift with the deprecation of Google Gemini CLI and Antigravity support in v0.71.0, now replaced by Cloudflare AI Gateway integration. Concurrently, security-focused enhancements like restricted auth access and in-memory credential handling were merged to improve extension safety. A surge of fixes targeted cross-platform tooling issues—particularly around WSL clipboard handling, Bun/npm self-update conflicts, and Fireworks/Kimi model compatibility regressions.

---

### 2. **Releases**  
**v0.71.0** introduces Cloudflare AI Gateway as a new built-in provider (requires `CLOUDFLARE_API_KEY`, `ACCOUNT_ID`, and `GATEWAY_ID`). **Breaking change**: Built-in Google Gemini CLI and Google Antigravity providers have been removed; users must migrate to alternative providers. [Release Notes](https://github.com/badlogic/pi-mono/releases/tag/v0.71.0)

---

### 3. **Hot Issues**  
1. **[#3959]** Mistral API errors (404) across multiple models despite valid keys—suggests endpoint misconfiguration or provider routing bug. *Status: Closed*  
2. **[#3462]** Request for auto-refreshing Bedrock bearer tokens per session, not just at startup—critical for short-lived corporate credentials. *Status: Closed*  
3. **[#3941]** Copy button broken on Firefox at pi.dev/packages—UI inconsistency affecting package discovery. *Status: Closed*  
4. **[#4035]** Introduced opt-in restricted mode to prevent extensions from accessing `authStorage` via `ctx.modelRegistry`. *Status: Closed*  
5. **[#3942]** Self-update fails when Pi installed via `npm --prefix` under Nix environments—path resolution regression. *Status: Open*  
6. **[#2469]** Clipboard image paste silently fails in WSL terminals—cross-platform input handling gap. *Status: Closed*  
7. **[#2717]** Hardcoded context-file search logic (`AGENTS.md`, `CLAUDE.md`) blocks customization—calls for configurability. *Status: Closed*  
8. **[#3575]** Anthropic proxy regression due to `eager_input_streaming` field rejection by backends—tool definition incompatibility. *Status: Closed*  
9. **[#3828]** Qwen3.5/Qwen3.6 Plus models return 404 via OpenCode Go provider—endpoint or model ID drift? *Status: Closed*  
10. **[#4018]** Grep tool enables RCE via ripgrep `--pre` argument injection—unvalidated LLM-controlled pattern allows arbitrary code execution. *High severity*—*Status: Closed*

---

### 4. **Key PR Progress**  
1. **[#3856]** ✅ Added Cloudflare AI Gateway provider with full auth flow and caching support.  
2. **[#4025]** ✅ Enabled `PI_CODING_AGENT_AUTH_JSON` env var for ephemeral in-memory credentials.  
3. **[#4024]** ✅ Added `PI_CODING_AGENT_SESSION_DIR` environment variable override.  
4. **[#3678]** ✅ Fixed Fireworks Anthropic tool compatibility flags to avoid backend rejection.  
5. **[#4005]** ⏳ Proposed Xiaomi MiMo provider (OpenAI-completions compatible).  
6. **[#4007]** ✅ Added official local-LLM provider extensions (Llama.cpp, LM Studio, vLLM, Ollama).  
7. **[#3991]** ✅ Mitigated duplicate session entry corruption causing `/tree` hangs.  
8. **[#3868]** ⏳ Migrating syntax highlighting to Shiki for better theme consistency.  
9. **[#4013]** ✅ Removed `detached: true` spawn flag on Windows to restore `pwsh.exe` output.  
10. **[#3955]** ✅ Improved edit tool error reporting using proper error codes instead of generic "File not found".

---

### 5. **Feature Request Trends**  
- **Provider Flexibility**: Users demand more built-in cloud AI gateways (Cloudflare, soon Xiaomi) and deprecation clarity for legacy providers (Antigravity, Qwen OAuth).  
- **Security & Isolation**: Strong interest in restricting extension access to auth data (`ctx.modelRegistry` sandboxing) and ephemeral credential injection.  
- **Cross-Platform UX**: Requests for system dark/light mode sync, improved WSL clipboard support, and Firefox-compatible UI components.  
- **Session Management**: Better cwd restoration on session resume and configurable context file discovery paths.

---

### 6. **Developer Pain Points**  
- **Self-Update Breakage**: Conflicts between installation methods (Bun vs npm) and non-standard prefixes (Nix, custom dirs) break update workflows.  
- **Provider Instability**: Frequent API changes (Qwen discontinuation, Fireworks routing shifts) require rapid adaptation or fallback strategies.  
- **Tool Injection Vulnerabilities**: Built-in tools like `grep` expose shell injection risks via unvalidated LLM inputs—highlighting need for stricter sandboxing.  
- **Extension Auth Complexity**: Lack of fine-grained control over credential lifetime and visibility frustrates secure deployment scenarios.  
- **UI Inconsistencies**: Low-contrast dropdowns (Chrome/Linux), duplicated renderings after tool blocking, and theme refresh gaps degrade developer experience.

--- 

*For full details, visit the [GitHub repo](https://github.com/badlogic/pi-mono).*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

**Qwen Code Community Digest - May 1, 2026**

---

### **Today's Highlights**
The Qwen Code team released version 0.15.6 with critical fixes for memory management and CLI stability, including improved file read caching and proxy handling. Several high-priority issues around auto-memory recall blocking user input and reasoning mode errors on DeepSeek V4 Pro have surfaced, prompting urgent attention. A new desktop app package and enhanced VSCode message editing capabilities are also under active development.

---

### **Releases**
- **v0.15.6** (May 1, 2026):  
  Fixed memory transcript path handling in `/dream`, stabilized SubAgent display to prevent flicker, and ensured sticky todo panel behavior.
- **v0.15.6-nightly.20260501.8b6b0d64f**:  
  Introduced `FileReadCache` to optimize repeated file reads and added support for honoring proxy settings in CLI.
- **v0.15.6-preview.0**:  
  Same fixes as v0.15.6; preview release for early testing.

---

### **Hot Issues**
1. **[#3652](https://github.com/QwenLM/qwen-code/issues/3652)**: Input length validation error (`Range of input length should be [1, 983616]`) breaks long conversations—users report frustration over repeated prompts when continuing sessions.  
2. **[#3000](https://github.com/QwenLM/qwen-code/issues/3000)**: Lack of memory diagnostics tools (heap analysis, leak detection) limits debugging capabilities—labeled as P3 with growing demand for observability.  
3. **[#3738](https://github.com/QwenLM/qwen-code/issues/3738)**: Download failures due to connection errors affect offline model access—reported across regions with no clear resolution path.  
4. **[#3185](https://github.com/QwenLM/qwen-code/issues/3185)**: Windows CLI hangs on `/quit` with `"ansiRegex3 is not a function"`—blocks clean exits, especially problematic for automation scripts.  
5. **[#3730](https://github.com/QwenLM/qwen-code/issues/3730)**: Post-update task auto-stop without user instruction disrupts long-running workflows—users note regression from prior stable versions.  
6. **[#3426](https://github.com/QwenLM/qwen-code/issues/3426)**: VSCode plugin ignores `contextPercentageThreshold` and `contextWindowSize` settings—causes context overflow despite configuration.  
7. **[#3678](https://github.com/QwenLM/qwen-code/issues/3678)**: Request for light theme in exported HTML reports—upvoted by 3 users citing eye strain from default dark mode.  
8. **[#3757](https://github.com/QwenLM/qwen-code/issues/3757)**: JetBrains AI integration returns 401—unclear if quota exhaustion or config issue; urgent need for diagnostic clarity.  
9. **[#3750](https://github.com/QwenLM/qwen-code/issues/3750)**: DeepSeek V4 Pro + thinking mode fails with 400 error due to missing `reasoning_content` relay—regression since v0.15.4.  
10. **[#3759](https://github.com/QwenLM/qwen-code/issues/3759)**: Auto-memory recall blocks every user turn for ~5s before timeout—severely degrades responsiveness in interactive use.

---

### **Key PR Progress**
1. **[#3777](https://github.com/QwenLM/qwen-code/pull/3777)**: Restores broken stdin-close test after #3723 merged—critical for abort/lifecycle reliability.  
2. **[#3774](https://github.com/QwenLM/qwen-code/pull/3774)**: Enforces prior file read before mutation via `FileReadCache`—prevents out-of-sync edits and improves correctness.  
3. **[#3749](https://github.com/QwenLM/qwen-code/pull/3749)**: Fixes non-interactive mode double-wrapping API errors—cleans up stderr output and stack traces.  
4. **[#3698](https://github.com/QwenLM/qwen-code/pull/3698)**: Runs chat compression before ACP sends—addresses #3652 input length validation bug.  
5. **[#3762](https://github.com/QwenLM/qwen-code/pull/3762)**: Adds message edit/rewind UI in VSCode—enables inline corrections and metadata viewing.  
6. **[#3739](https://github.com/QwenLM/qwen-code/pull/3739)**: Implements background agent resume/continuation—recover interrupted agents via transcript-first design.  
7. **[#3604](https://github.com/QwenLM/qwen-code/pull/3604)**: Parallelizes skill loading and adds path-conditional activation—improves cold-start performance significantly.  
8. **[#3743](https://github.com/QwenLM/qwen-code/pull/3743)**: Prevents file paths from being parsed as slash commands—fixes false positives like `/api/...`.  
9. **[#3771](https://github.com/QwenLM/qwen-code/pull/3771)**: Restores Ctrl+E/F focus for running SubAgents—resolves dual-reflow flicker introduced in v0.15.6.  
10. **[#3778](https://github.com/QwenLM/qwen-code/pull/3778)**: Adds standalone desktop app package—bundles Qwen ACP SDK for native cross-platform installation.

---

### **Feature Request Trends**
- **Lightweight/fast model separation**: Multiple requests (#2791, #3760) advocate for dedicated `fastModel` configuration to avoid unnecessary reasoning overhead in side queries.  
- **Memory system enhancements**: AutoSkill extraction (#3673), decoupled recall flow (#3761), and better diagnostics (#3000) dominate discussions around persistent context management.  
- **UI/UX improvements**: Light/dark theme toggle for exports (#3678), expanded SubAgent visibility (#3758), and slash command discovery (#3736) reflect growing polish demands.  
- **Config persistence**: `/directory add` not saving to `settings.json` (#3746) and proxy key support (#3742) highlight friction in local workspace setup.

---

### **Developer Pain Points**
- **Responsiveness regressions**: Auto-memory recall timing out (~5s delay per turn) and SubAgent focus bugs disrupt fluid interaction—especially damaging for complex coding tasks.  
- **Inconsistent behavior across models**: Thinking mode failures on DeepSeek V4 Pro and misapplied per-model settings on fastModel cause confusion and API errors.  
- **CLI instability on Windows**: Hanging on `/quit` and ansi regex errors break shell scripting integrations.  
- **Lack of observability**: No built-in memory/heap diagnostics force developers to rely on external tools, slowing debugging cycles.  
- **Config fragility**: Settings changes (e.g., proxy, directories) often don’t persist or are ignored by extensions, undermining reproducibility.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/DenisZheng/agents-radar).*