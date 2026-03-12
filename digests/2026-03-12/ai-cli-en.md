# AI CLI Tools Community Digest 2026-03-12

> Generated: 2026-03-12 05:50 UTC | Tools covered: 7

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

**AI CLI Tools Ecosystem Cross-Tool Comparison Report**  
*March 12, 2026*

---

### **1. Ecosystem Overview**  
The AI CLI tooling landscape is characterized by intense competition around agentic workflow stability, multimodal integration, and developer experience polish. All major tools—Claude Code, OpenAI Codex, Gemini CLI, Copilot CLI, Kimi Code CLI, OpenCode, and Qwen Code—are prioritizing session continuity, sandboxing, and extensibility via MCP, while grappling with recurring pain points in memory management, authentication reliability, and cross-platform consistency. The ecosystem is bifurcating into two camps: tightly integrated suites (Anthropic, OpenAI, Google) pushing proprietary enhancements, and open-core tools (OpenCode, Qwen) focusing on interoperability and customization.

---

### **2. Activity Comparison**

| Tool             | Issues Count* | PR Count* | New Release(s)       |
|------------------|---------------|-----------|------------------------|
| Claude Code      | ≥10           | ≥10       | v2.1.74                |
| OpenAI Codex     | ≥10           | ≥10       | 4 alpha builds         |
| Gemini CLI       | ≥10           | ≥10       | None                   |
| GitHub Copilot   | ≥10           | ≥2        | v1.0.4                 |
| Kimi Code CLI    | ≥10           | ≥10       | v1.20.0                |
| OpenCode         | ≥10           | ≥10       | None                   |
| Qwen Code        | ≥10           | ≥10       | v0.12.1-nightly        |

\* Based on top 10 hot issues and key PRs listed per digest

---

### **3. Shared Feature Directions**

| Requirement                          | Tools Reporting It                     |
|--------------------------------------|----------------------------------------|
| Session continuity & context retention | Gemini (#21792), OpenCode (#16878), Copilot (#892) |
| Plan Mode UI/UX consistency          | Qwen (#1985), Kimi (#1406), Claude (#N/A yet) |
| Multimodal input (images/videos/PDFs)| Codex (#1797), Copilot (#1241), Kimi (#1398) |
| Sandboxing/file access control       | Copilot (#892), Claude (security plugin #33390), Gemini (#21901) |
| API key login support                | Kimi (#1412), OpenCode (#11830), Qwen (implied auth fragility) |
| Terminal UX refinements              | OpenCode (#1764 Vim motions), Copilot (#1284 arrow keys), Qwen (#2101 input freeze) |

---

### **4. Differentiation Analysis**

- **Tightly Integrated Suites (Anthropic, OpenAI, Google)**: Focus on deep IDE integration, enterprise-grade security hooks, and proprietary agent behaviors (e.g., Claude’s `/context` optimization, Codex’s fork sessions). They lead in observability (Copilot’s OpenTelemetry) and architectural rigor (Gemini’s `AgentLoopContext` migration).
  
- **Open-Core & Emerging Players (Kimi, Qwen, OpenCode)**: Emphasize accessibility (API key logins), cross-platform robustness (Windows fixes), and community-driven features (Vim motions, session export). Kimi stands out with rapid iteration on web UI controls; Qwen excels in ACP protocol compliance and migration utilities.

- **Target Users**: 
  - Enterprise teams favor Copilot, Claude, and Gemini for policy enforcement and audit trails.
  - Solo devs and automation-focused users prefer OpenCode, Kimi, and Qwen for flexibility and cost transparency.

---

### **5. Community Momentum & Maturity**

- **Most Active Communities**: **OpenCode** and **Kimi Code CLI** show highest engagement density (multiple high-comment issues, rapid PR turnover), indicating strong grassroots adoption. **Qwen Code** demonstrates aggressive bug-fixing velocity despite lower visibility.
  
- **Rapid Iteration**: **Kimi** and **Qwen** are shipping nightly/hotfix builds daily, reflecting startup-like agility. **Claude Code** and **Copilot CLI** maintain steady cadence but lag in addressing long-standing UX complaints (e.g., menu-bar mode).

- **Maturity Signals**: **Gemini CLI** and **OpenAI Codex** exhibit mature architecture patterns (contextual state management, lifecycle hooks) but face growing user fatigue around connectivity and model access inconsistencies.

---

### **6. Trend Signals**

- **Shift Toward Agent Self-Awareness**: Multiple tools request agents to introspect capabilities (#21432 Gemini, #12239 Codex), signaling demand for smarter, adaptive toolchains over static prompt engineering.

- **Security as Differentiator**: Granular permission controls, sandbox modes, and “hook-integrity-guards” (#33390 Claude) are becoming table stakes for enterprise deployment.

- **Multimodal Expansion Beyond Code**: PDF ingestion (#1797 Codex), image pasting (#1241 Copilot), and video handling (#1398 Kimi) reveal convergence toward general-purpose developer copilots—not just code assistants.

- **Platform Fragmentation Risk**: Linux/macOS/Windows-specific bugs (Alpine crashes, Windows TUI freezes, ARM support gaps) threaten parity across developer environments if unaddressed.

> **Strategic Takeaway**: Developers should prioritize tools with robust session management, transparent billing, and cross-platform reliability. Enterprises will gravitate toward platforms offering enforceable sandboxing and auditability—even at the cost of flexibility.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

**Claude Code Skills Community Highlights Report**  
*Data as of 2026-03-12*

---

### 1. **Top Skills Ranking**

- **[skill-quality-analyzer & skill-security-analyzer](https://github.com/anthropics/skills/pull/83)**  
  A meta-skill suite for auditing existing Skills across structure, security, and usability. Currently under review; aims to standardize Skill quality assurance.  

- **[document-typography](https://github.com/anthropics/skills/pull/514)**  
  Automatically detects and fixes typographic flaws (orphans, widows, numbering misalignment) in AI-generated docs. High relevance for enterprise users; actively discussed for inclusion.  

- **[SAP-RPT-1-OSS predictor](https://github.com/anthropics/skills/pull/181)**  
  Integrates SAP’s open-source tabular foundation model for predictive analytics on SAP data. Targets ERP professionals; PR updated March 11, 2026.  

- **[shodh-memory](https://github.com/anthropics/skills/pull/154)**  
  Persistent memory system for cross-session context retention. Enables Claude agents to recall prior interactions—critical for long-running workflows.  

- **[plan-task](https://github.com/anthropics/skills/pull/522)** & **[record-knowledge](https://github.com/anthropics/skills/pull/521)**  
  Paired skills for multi-step task persistence (`plan-task`) and knowledge archival (`record-knowledge`). Both leverage `.claude/` directories for state management.  

---

### 2. **Community Demand Trends**

From Issues, recurring themes include:
- **Enterprise Integration**: Support for AWS Bedrock (Issue #29), SSO/API key limitations (Issue #532).
- **Trust & Security**: Concerns about namespace impersonation (Issue #492), skill validation gaps.
- **Workflow Automation**: Multi-session planning, audit trails, and governance patterns (e.g., Issue #412).
- **MCP Alignment**: Desire to expose Skills via Model Context Protocol (Issue #16) and integrate with MCP tools (Issue #369).

---

### 3. **High-Potential Pending Skills**

- **[frontend-design](https://github.com/anthropics/skills/pull/210)**: Enhanced clarity for UI/UX guidance; recently updated.
- **[codebase-inventory-audit](https://github.com/anthropics/skills/pull/147)**: Systematic cleanup tool; addresses technical debt visibility.
- **[AURELION skill suite](https://github.com/anthropics/skills/pull/444)**: Cognitive framework with structured reasoning templates; niche but well-structured.

All are open and actively maintained as of March 2026.

---

### 4. **Skills Ecosystem Insight**

The community’s strongest demand centers on **persistent agentic capabilities**—memory, planning, and governance—to bridge session-to-session gaps and enable reliable, auditable AI workflows.

---

**Claude Code Community Digest – March 12, 2026**

---

### 1. Today's Highlights  
Anthropic released **v2.1.74**, introducing actionable context optimization tips via `/context`, a new `autoMemoryDirectory` setting, and fixes for memory leaks during streaming operations. Meanwhile, the community continues to grapple with severe memory leaks in v2.1.72–v2.1.73 across platforms, with multiple reports of processes consuming over 120GB RAM before being OOM-killed. Several high-priority bugs around plan-mode race conditions, MCP tool availability, and authentication flows remain unresolved.

---

### 2. Releases  

**v2.1.74**  
- Added actionable suggestions to `/context` command: identifies context-heavy tools, memory bloat, and capacity warnings with specific optimization tips  
- Introduced `autoMemoryDirectory` setting to configure custom auto-memory storage paths  
- Fixed memory leak where stream handling caused unbounded growth  

**v2.1.73**  
- Added `modelOverrides` setting to map model picker entries to custom provider model IDs (e.g., Bedrock inference profile ARNs)  
- Enhanced OAuth/login error guidance for SSL certificate issues (corporate proxies, `NODE_EXTRA_CA_CERTS`)  
- Partial fix for memory-related regressions (incomplete changelog)

---

### 3. Hot Issues  

| Issue | Summary | Impact |
|-------|--------|--------|
| [#4953](https://github.com/anthropics/claude-code/issues/4953) | Severe memory leak on Linux causing 120+ GB RAM usage and OOM kills during extended sessions | ⭐️ 60 upvotes; critical stability blocker for production use |
| [#27242](https://github.com/anthropics/claude-code/issues/27242) | No UI access to post-compaction/history-cleared conversation data despite preservation in `transcript.jsonl` | ⭐️ 44 upvotes; major UX gap undermining trust in memory systems |
| [#32683](https://github.com/anthropics/claude-code/issues/32683) | CLI crashes on Windows due to unhandled edge case in preflight checks | ⭐️ 12 upvotes; blocks new users from adopting CLI |
| [#2682](https://github.com/anthropics/claude-code/issues/2682) | MCP tools connect successfully but never appear in conversation interface | ⭐️ 19 upvotes; breaks core extensibility promise |
| [#32982](https://github.com/anthropics/claude-code/issues/32982) | Remote Control sessions die after ~20 min idle despite keepalive TTL settings | ⭐️ 16 upvotes; disrupts long-running agent workflows |
| [#33011](https://github.com/anthropics/claude-code/issues/33011) | IDE extension fails to set Effort = AUTO due to config parsing bug | ⭐️ 8 upvotes; limits automation flexibility |
| [#16082](https://github.com/anthropics/claude-code/issues/16082) | Request for macOS menu-bar-only mode (hide Dock icon) | ⭐️ 47 upvotes; top-voted enhancement request |
| [#30864](https://github.com/anthropics/claude-code/issues/30864) | Demand for ARM processor support in `cowork` feature | ⭐️ 21 upvotes; important for M-series Mac/Linux ARM users |
| [#29559](https://github.com/anthropics/claude-code/issues/29559) | v2.1.63 crashes on Alpine Linux (musl) due to missing `posix_getdents` symbol | ⭐️ 13 upvotes; breaks minimal-container deployments |
| [#33357](https://github.com/anthropics/claude-code/issues/33357) | Code-review plugin spams permission prompts and makes unnecessary `cd` calls | High frustration; reported as unusable without babysitting |

---

### 4. Key PR Progress  

| PR | Summary |
|----|---------|
| [#33397](https://github.com/anthropics/claude-code/pull/33397) | Fixes code-review plugin excessive permission prompts by eliminating redundant `cd` wrappers |
| [#33390](https://github.com/anthropics/claude-code/pull/33390) | Introduces “hook-integrity-guard” security plugin to prevent self-modification of safety infrastructure |
| [#33443](https://github.com/anthropics/claude-code/pull/33443) | Updates Dockerfile to use native installer instead of deprecated npm install |
| [#33234](https://github.com/anthropics/claude-code/pull/33234) | Handles initial commit edge case in `/commit-commands:commit` to avoid fatal Git errors |
| [#33224](https://github.com/anthropics/claude-code/pull/33224) | Makes Node.js version in DevContainer configurable via env var |
| [#30636](https://github.com/anthropics/claude-code/pull/30636) | Standardizes 25+ stale documentation URLs to canonical domains (`code.claude.com`) |
| [#33351](https://github.com/anthropics/claude-code/pull/33351) | Adds workaround for false-positive update banners on Homebrew/WinGet installs |
| [#33472](https://github.com/anthropics/claude-code/pull/33472) | Prevents inline-comment spam by passing `confirmed=true` to GitHub MCP tool |
| [#33312](https://github.com/anthropics/claude-code/pull/33312) | Escapes special chars in `$ARGUMENTS` to prevent bash injection attacks |
| [#5609](https://github.com/anthropics/claude-code/pull/5609) | Enhances DevContainer firewall with hybrid static/dynamic IP management for CDNs |

---

### 5. Feature Request Trends  

- **Memory & Context Management**: Users urgently want non-lossy alternatives to compaction (e.g., session-level CAG), better visibility into preserved history, and smarter auto-memory organization.
- **Platform Support**: Strong demand for ARM compatibility (especially in `cowork`) and musl/libc variant support (Alpine Linux).
- **UI/UX Refinements**: Menu-bar-only mode (macOS), terminal title customization, and improved navigation in `/config` modal.
- **Security & Reliability**: More granular control over permissions, reduced prompt fatigue, and hardened plugin sandboxing.

---

### 6. Developer Pain Points  

- **Memory Leaks**: Recurring issue across versions (Linux, Windows, macOS); impacts all user tiers, especially long-running agent sessions.
- **Plugin Friction**: Code-review and skill-creator plugins suffer from excessive permission prompts, path manipulation (`cd` loops), and platform-specific subprocess failures.
- **Authentication & Connectivity**: Corporate proxy environments still struggle with SSL cert validation; remote-control timeouts undermine reliability.
- **Documentation Fragmentation**: Stale URLs and inconsistent domain routing confuse users; update banners mislead package-manager-based installs.
- **Edge-Case Handling**: Initial commits, empty repos, and malformed arguments trigger ungraceful crashes instead of clean fallbacks.

--- 

*For full details, visit the [Claude Code GitHub repo](https://github.com/anthropics/claude-code).*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

**OpenAI Codex Community Digest – March 12, 2026**

---

### 1. **Today's Highlights**  
The Codex CLI team released four alpha versions (v0.115.0-alpha.4 through alpha.7), signaling active development on core runtime stability and sandboxing improvements. Meanwhile, community frustration grows around persistent connectivity issues in the desktop app and model access restrictions for paid users, with several high-impact bugs receiving significant engagement. Parallel engineering efforts focus on improving tool-call ergonomics, fork session management, and telemetry instrumentation.

---

### 2. **Releases**  
- **rust-v0.115.0-alpha.7** (Mar 12)  
- **rust-v0.115.0-alpha.6** (Mar 12)  
- **rust-v0.115.0-alpha.5** (Mar 12)  
- **rust-v0.115.0-alpha.4** (Mar 12)  
- **rust-v0.114.0-alpha.7** (Mar 12)  

*Note: No detailed changelogs provided; these represent incremental internal Rust-based builds.*

---

### 3. **Hot Issues**  

| # | Title & Summary | Why It Matters | Community Reaction |
|---|------------------|----------------|--------------------|
| **[#14048](https://github.com/openai/codex/issues/14048)**<br>*CLI hangs indefinitely on all prompts* | Critical regression affecting v0.111.0+ across Windows/WSL; blocks basic usage. | Severely impacts workflow reliability for CLI-centric developers. | 🟢 **Closed**, but 125 comments + 77 upvotes show widespread impact. Likely resolved in recent alphas. |
| **[#2109](https://github.com/openai/codex/issues/2109)**<br>*Event Hooks* | Proposal to allow script triggers via pattern-matching on Codex events (e.g., pre/post task). | Enables automation integration beyond current `/fork`/`/review` surface. | 🔴 **Open**, 489 👍—strong demand for extensibility hooks. |
| **[#14331](https://github.com/openai/codex/issues/14331)**<br>*GPT-5.3-Codex not working in paid accounts* | Paid users report inability to use newer codex-optimized models despite subscription. | Undermines value proposition of Pro/Business tiers. | 🔴 **Open**, 0 👍 yet critical for monetization trust. |
| **[#14209](https://github.com/openai/codex/issues/14209)**<br>*Worsening reconnecting issue (Europe)* | Users describe escalating disconnection loops in Codex App, especially regionally. | Degrades UX for remote teams relying on stable IDE integration. | 🔴 **Open**, 16 👍—suggests infrastructure or regional routing problems. |
| **[#1797](https://github.com/openai/codex/issues/1797)**<br>*PDF support* | Request to ingest PDFs for Q&A about charts, tables, text. | Expands use case from code-only to document intelligence. | 🔴 **Open**, 82 👍—high interest in multimodal context. |
| **[#14120](https://github.com/openai/codex/issues/14120)**<br>*Context compaction hangs for hours* | Model struggles to summarize long histories before acting—blocks progress. | Context management is foundational; failure cripples complex tasks. | 🔴 **Open**, 1 👍—but severity noted by heavy users. |
| **[#11427](https://github.com/openai/codex/issues/11427)**<br>*Multiple terminals in Codex App* | Wish for tabbed terminal sessions within a single Environment. | Improves multitasking during debugging/automation workflows. | 🔴 **Open**, 15 👍—UX refinement request. |
| **[#8758](https://github.com/openai/codex/issues/8758)**<br>*Image generation from Codex* | Desire to generate visuals (banners, diagrams) directly within tooling. | Bridges gap between code and design—useful for dev tools & docs. | 🔴 **Open**, 33 👍—creative developer need. |
| **[#14346](https://github.com/openai/codex/issues/14346)**<br>*Context compaction hanging in VS Code extension* | Extension fails to manage growing context windows efficiently. | Directly impacts IDE experience; compounding frustration. | 🔴 **Open**, 13 👍—extension-specific regression suspected. |
| **[#12239](https://github.com/openai/codex/issues/12239)**<br>*Set reasoning effort per automation* | Allow tuning `low`/`medium`/`extra high` per automation rule. | Enables cost/performance tradeoff control—key for enterprise use. | 🔴 **Open**, 8 👍—granular optimization desired. |

---

### 4. **Key PR Progress**  

| # | Title | Impact |
|---|-------|--------|
| **[#14403](https://github.com/openai/codex/pull/14403)**<br>*User-friendly tool call messages* | Adds curated, human-readable messages for tool invocations (e.g., clearer param names). | Improves transparency during agentic flows. |
| **[#14428](https://github.com/openai/codex/pull/14428)**<br>*Fork sessions into new multiplexer panes* | Supports `/fork` in tmux/zellij with automatic pane creation. | Enhances TUI productivity for terminal multiplexers. |
| **[#13432](https://github.com/openai/codex/pull/13432)**<br>*Route zsh-fork through unified exec* | Ensures consistent shell execution path for approval/sandboxing logic. | Fixes fd-handling edge cases in long-lived sessions. |
| **[#14287](https://github.com/openai/codex/pull/14287)**<br>*Add tool_suggest tool* | Introduces suggestion engine for next-step actions. | Extends agent capability without manual prompting. |
| **[#14422](https://github.com/openai/codex/pull/14422)**<br>*Make collab spawn metadata accurate* | Aligns completion metadata with initialization config. | Fixes trace inaccuracies in collaborative sessions. |
| **[#14173](https://github.com/openai/codex/pull/14173)**<br>*Preserve split filesystem semantics in Linux sandbox* | Maintains expected behavior when splitting file views in sandboxed envs. | Critical for Linux users relying on advanced IDE features. |
| **[#14430](https://github.com/openai/codex/pull/14430)**<br>*Telemetry: emittance* | Adds structured metadata emission for user message types. | Enables better observability and debugging. |
| **[#14429](https://github.com/openai/codex/pull/14429)**<br>*Use granted permissions in apply_patch* | Applies sandbox-approved permissions directly to patch operations. | Prevents redundant rejections after successful permission grant. |
| **[#14295](https://github.com/openai/codex/pull/14295)**<br>*Support waiting for code_mode sessions* | Persists runner process state for synchronous code-mode tasks. | Stabilizes execution flow in automated scripting. |
| **[#13882](https://github.com/openai/codex/pull/13882)**<br>*Fix stdio-to-uds peer-close flake* | Makes socket shutdown robust against premature peer disconnects. | Reduces test instability in inter-process communication. |

---

### 5. **Feature Request Trends**  
- **Event-driven automation**: Users want scripts triggered by Codex events (e.g., `#2109`).  
- **Multimodal ingestion**: PDF/image support (#1797) and general document understanding are recurring asks.  
- **Customization of AI behavior**: Per-automation reasoning levels (#12239), image generation (#8758), and review instructions (#10874) reflect desire for fine-grained control.  
- **IDE/TUI enhancements**: Multi-terminal support (#11427), better error fallbacks (#13551), and accented character handling (#13638) point to UX polish needs.  

---

### 6. **Developer Pain Points**  
- **Connectivity & stability**: Reconnecting loops (#14209), thread hanging (#14406), and network startup failures (#14401) plague desktop app users.  
- **Model access inconsistency**: Paid users locked out of GPT-5.x models (#14331, #14190) erode trust in tiered offerings.  
- **Context management failures**: Compaction stalling (#14120, #14346) breaks long-running conversations and automations.  
- **Sandbox regressions**: Trusted directories disabled by default (#14345) hinder local development workflows.  
- **Tool-call opacity**: Leaked envelopes (#13114) and unclear permissions (#14429) complicate debugging agent behaviors.  

--- 

*Generated from GitHub activity on openai/codex as of 2026-03-12.*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

**Gemini CLI Community Digest – March 12, 2026**

---

### 1. Today's Highlights  
The CLI team prioritized performance and session continuity this week, with two major architectural PRs landing: **code splitting** and **deferred UI loading** (PR #22117) to drastically reduce startup time, alongside a full migration to `AgentLoopContext` (PR #22115). Simultaneously, user-facing improvements include a new interactive repository visualizer (PR #22118) and enhanced tool-call visibility (PR #22106), signaling a strong focus on developer experience and long-running agent coherence.

---

### 2. Releases  
No new releases in the last 24 hours.

---

### 3. Hot Issues  

| Issue | Summary | Why It Matters | Reaction |
|-------|---------|----------------|----------|
| [#21806](https://github.com/google-gemini/gemini-cli/issues/21806) | Policy `allow` for `exit_plan_mode` bypasses confirmation but leaves `approvalPayload = null`, breaking audit trails. | Security/policy enforcement gap; critical for enterprise users relying on approval workflows. | 7 comments, no 👍 yet |
| [#21925](https://github.com/google-gemini/gemini-cli/issues/21925) | Hand icon appears during long shell scripts even when no action is required. | Confusing UX—users think input is expected when it isn’t. | 5 comments; visual evidence shared |
| [#22123](https://github.com/google-gemini/gemini-cli/issues/22123) | `gemini-3.1-pro-preview-customtools` not being used despite config. | Blocks access to latest model features. | 3 comments |
| [#21792](https://github.com/google-gemini/gemini-cli/issues/21792) | Epic tracking session continuity & coherence improvements. | Addresses core limitation of linear chat history in complex tasks. | 2 comments |
| [#21461](https://github.com/google-gemini/gemini-cli/issues/21461) | Shell aliases (e.g., `! baz`) don’t work. | Breaks common dev workflows reliant on aliases. | 2 comments |
| [#22028](https://github.com/google-gemini/gemini-cli/issues/22028) | Terminal scrolls to top on any click in VS Code. | Disrupts workflow during extended sessions. | 1 comment |
| [#21901](https://github.com/google-gemini/gemini-cli/issues/21901) | No tool isolation between main agent and subagents. | Risks unintended tool usage by subagents. | 1 comment |
| [#21890](https://github.com/google-gemini/gemini-cli/issues/21890) | Compression logic ignores system instructions/tool defs. | Inaccurate token counting leads to wasted context. | 1 comment |
| [#21432](https://github.com/google-gemini/gemini-cli/issues/21432) | Agent should self-report its own flags/hotkeys. | Enables better self-documentation and UX. | 1 comment |
| [#22116](https://github.com/google-gemini/gemini-cli/issues/22116) | Request to improve startup via code splitting & deferred loading. | Direct precursor to today’s performance PR #22117. | 0 comments |

---

### 4. Key PR Progress  

| PR | Summary | Impact |
|----|--------|--------|
| [#22117](https://github.com/google-gemini/gemini-cli/pull/22117) | Enable esbuild code splitting + deferred UI loading. | Reduces CLI startup time significantly. |
| [#22115](https://github.com/google-gemini/gemini-cli/pull/22115) | Fully migrate `packages/core` to `AgentLoopContext`. | Centralizes agent state management; enables future continuity features. |
| [#22118](https://github.com/google-gemini/gemini-cli/pull/22118) | Add interactive `gemini visualize [path]` command. | New dev tool for repo exploration via terminal UI. |
| [#22106](https://github.com/google-gemini/gemini-cli/pull/22106) | Show pending/confirming tool calls + clean up "thinking" noise. | Improves transparency during agent execution. |
| [#21369](https://github.com/google-gemini/gemini-cli/pull/21369) | Fix paste placeholder expansion in `ask_user`. | Resolves broken pasting of large text blocks. |
| [#21934](https://github.com/google-gemini/gemini-cli/pull/21934) | Include surface ID in User-Agent header. | Enables enterprise traffic differentiation. |
| [#22110](https://github.com/google-gemini/gemini-cli/pull/22110) | Make startup non-blocking. | Users can type immediately after launch. |
| [#19989](https://github.com/google-gemini/gemini-cli/pull/19989) | Remove `any` types in logger/HTTP patches. | Improves type safety across core modules. |
| [#18499](https://github.com/google-gemini/gemini-cli/pull/18499) | Add voice input with pluggable backends (`gemini`/`whisper`). | Future-proofs multimodal input. |
| [#22069](https://github.com/google-gemini/gemini-cli/pull/22069) | Fix MCP FQN validation for subagents. | Restores compatibility with standard MCP tool names. |

---

### 5. Feature Request Trends  

- **Session Continuity**: Multiple issues (#21792, #21887) emphasize improving context retention beyond linear chat histories—via compression refinement, JIT memory loading (#22057), and checkpoint enhancements (#21920).
- **Performance Optimization**: High demand for faster startup and smoother UI (evidenced by #22116 and implemented in #22117/#22119).
- **Agent Self-Awareness**: Requests for the CLI to introspect its own capabilities (#21432) and recommend skill/memory updates (#21421).
- **Tool Isolation & Safety**: Need for isolating subagent tools (#21901) and warning against dangerous policy rules (#21596).
- **Enhanced Shell Integration**: Support for aliases (#21461) and better handling of long-running commands (#21925).

---

### 6. Developer Pain Points  

- **Unreliable Plan Mode Behavior**: Policy decisions affecting confirmation flows are inconsistently applied (#21806), undermining trust in automated approvals.
- **Terminal UX Glitches**: Scrolling issues (#22028), missing spaces in subagent thoughts (#21688), and incorrect hand icons create friction during active use.
- **TypeScript Technical Debt**: Widespread `any` usage persists (#19989, #19996), slowing development and increasing bug risk.
- **MCP Tool Compatibility**: Subagents fail to recognize standard MCP FQNs (#22069), limiting integration with external tools.
- **Ambiguous Documentation**: Misleading allowlist behavior in shell tools (#18813) and unclear model selection paths (#22123) frustrate new users.

--- 

*Generated by Gemini CLI Community Digest Bot • Data from github.com/google-gemini/gemini-cli*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

**GitHub Copilot CLI Community Digest – March 12, 2026**

---

### **Today's Highlights**
The latest release (v1.0.4) introduces OpenTelemetry instrumentation for enhanced observability and CommonJS support for extensions, improving debugging and plugin flexibility. A new adaptive color engine improves terminal UX across platforms, while shell command execution via `session.shell.exec` enables richer agent tooling. Meanwhile, persistent model selection and sandbox mode remain top-requested features amid growing concerns around MCP server access and authentication flows.

---

### **Releases**
**v1.0.4** (March 11, 2026)  
- Added `session.shell.exec` and `session.shell.kill` RPC methods for streaming shell command output  
- Enabled OpenTelemetry instrumentation for monitoring agent sessions and LLM calls  
- Extended extension support to CommonJS modules (`extension.cjs`)  
- Introduced adaptive color engine with dynamic themes and graceful degradation on limited-color terminals  
- Improved `/pr view` command replaces deprecated `/pr open`  

*Patches: v1.0.4-1, v1.0.4-2, v1.0.4-3 address OAuth re-authentication, plugin loading in ACP mode, and Windows compatibility.*

---

### **Hot Issues**

1. **[#33] Support OAuth HTTP MCP servers**  
   Users seek integration with Figma and Atlassian MCP servers using OAuth. High engagement (31 comments, 104 👍) reflects demand for broader third-party tool access.  
   → [github.com/github/copilot-cli/issues/33](https://github.com/github/copilot-cli/issues/33)

2. **[#1202] Screen flickers with cursor blink during rejection prompts**  
   Visual glitch in Windows Terminal under PowerShell disrupts user experience. Noted by multiple users; urgent UI fix needed.  
   → [github.com/github/copilot-cli/issues/1202](https://github.com/github/copilot-cli/issues/1202)

3. **[#1595] Cannot access any model despite valid Enterprise subscription**  
   Access denied errors contradict org-level entitlements. Suggests policy sync gap between VS Code and CLI.  
   → [github.com/github/copilot-cli/issues/1595](https://github.com/github/copilot-cli/issues/1595)

4. **[#1284] Arrow keys output raw escape sequences instead of navigating**  
   Terminal input handling broken—likely due to alt-screen or TUI regression. Blocks interactive workflows.  
   → [github.com/github/copilot-cli/issues/1284](https://github.com/github/copilot-cli/issues/1284)

5. **[#1754] AssertionError + HTTP/2 GOAWAY during retrospective generation**  
   Deep I/O deadlock in undici HTTP client causes session crashes. Affects reliability in production-like usage.  
   → [github.com/github/copilot-cli/issues/1754](https://github.com/github/copilot-cli/issues/1754)

6. **[#1048] Allow reasoning effort configuration via CLI flags**  
   Closed but previously requested—users want fine-grained control over model behavior beyond TUI.  
   → [github.com/github/copilot-cli/issues/1048](https://github.com/github/copilot-cli/issues/1048)

7. **[#1241] Cannot paste images from clipboard into prompts**  
   Critical for visual debugging and bug reporting. Missing core multimodal capability.  
   → [github.com/github/copilot-cli/issues/1241](https://github.com/github/copilot-cli/issues/1241)

8. **[#1703] Inconsistent model visibility vs VS Code Copilot**  
   CLI omits org-enabled models like Gemini 3.1 Pro. Indicates API/model list divergence.  
   → [github.com/github/copilot-cli/issues/1703](https://github.com/github/copilot-cli/issues/1703)

9. **[#1838] Hangs in Nix/direnv environments due to subprocess I/O deadlock**  
   Environment-specific blocking issue; impacts reproducibility in containerized dev setups.  
   → [github.com/github/copilot-cli/issues/1838](https://github.com/github/copilot-cli/issues/1838)

10. **[#892] Add sandbox mode to restrict file system access**  
    Top-requested security feature: isolate agent to workspace root. 18 👍 shows strong enterprise interest.  
    → [github.com/github/copilot-cli/issues/892](https://github.com/github/copilot-cli/issues/892)

---

### **Key PR Progress**

1. **[#1968] Retry install without token on SSO auth failure**  
   Improves robustness when `GITHUB_TOKEN` lacks SAML authorization but repo is public.  
   → [github.com/github/copilot-cli/pull/1968](https://github.com/github/copilot-cli/pull/1968)

2. **[#1365] Fix prerelease filtering & simplify terminal detection**  
   Streamlines installation logic and removes redundant checks in `install.sh`.  
   → [github.com/github/copilot-cli/pull/1365](https://github.com/github/copilot-cli/pull/1365)

---

### **Feature Request Trends**

- **Sandboxing & Security**: Isolate agent file access (e.g., #892) to prevent unintended modifications.
- **MCP Integration**: Broader support for OAuth-based and third-party MCP servers (#33, #1976).
- **Model Persistence**: Retain selected models across sessions (#1869).
- **Multimodal Input**: Paste images directly into prompts (#1241, #1276).
- **Customization Controls**: Configurable submit keys for IME users (#1972), user-level hooks (#1067).
- **Observability**: Enhanced telemetry and logging (already delivered via OpenTelemetry).

---

### **Developer Pain Points**

- **Authentication Friction**: Frequent OAuth/MCP failures, especially with org policies and dynamic client registration (#1951, #1976).
- **Inconsistent Model Lists**: Discrepancy between CLI and VS Code exposes fragmentation in Copilot ecosystem (#1703).
- **Terminal UI Regressions**: Alt-screen behavior, mouse wheel capture (#1944), and arrow key misbehavior disrupt daily use (#1284).
- **Environment-Specific Hangs**: Deadlocks in Nix/direnv setups indicate poor subprocess isolation (#1838).
- **Lack of Sandbox Controls**: Agents can read/write outside workspace—raises security concerns for teams.

--- 

*For full details, visit the [copilot-cli GitHub repository](https://github.com/github/copilot-cli).*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

**Kimi Code CLI Community Digest - 2026-03-12**

---

### **Today's Highlights**

The Kimi Code CLI team released version 1.20.0, introducing a toggle for Plan Mode in the web UI and fixing critical issues with file mention indexing and media part handling during compaction. A notable community concern revolves around inconsistent behavior when using multiple agents, sparking debate over membership claims.

---

### **Releases**

**v1.20.0**  
- Added Plan Mode toggle in web UI to persist plan state across sessions  
- Fixed staleness issues in file mention index during session switches  
- Improved error handling for media parts during context compaction  

[Release Details](https://github.com/MoonshotAI/kimi-cli)

---

### **Hot Issues**

1. **[#1383] Multiple Agent Restriction Under Alleged Membership Rights**  
   Users report that despite being on a premium plan supporting multiple agents, concurrent "crayfish" (agent) usage triggers rate limits or blocking. This suggests a discrepancy between advertised features and actual behavior.  
   *Status: OPEN | 5 comments*

2. **[#1413] AskUserQuestion Tool Fails at Last Option in Terminal**  
   In v1.20.0, the terminal-based interactive prompt tool cannot accept input when selecting the final option—breaking core user interaction workflows.  
   *Status: CLOSED | 2 comments*

3. **[#1389] HTTP Header Pollution Causes LLM Provider Connection Errors**  
   On certain Linux systems, kernel version strings containing `#` characters corrupt HTTP headers, leading to failed connections with downstream LLM providers.  
   *Status: OPEN | 2 comments*

4. **[#1412] Request: Support Kimi-Code API Key Login**  
   Users want direct login via kimi-code API key instead of OAuth flow—a common pain point for automation and CI/CD integrations.  
   *Status: OPEN | 👍1*

5. **[#1409] Web Mode Refreshes and Connects to Wrong Port**  
   When invoking `/web`, the frontend repeatedly refreshes and binds to incorrect ports, making stable access impossible.  
   *Status: OPEN*

6. **[#1070] Login Failure Due to Network Unreachable on auth.kimi.com**  
   Intermittent connectivity to authentication endpoints blocks new logins, especially on restricted networks.  
   *Status: CLOSED | 4 comments*

7. **[#1395] Invalid Video URL Part Type Error**  
   Sending messages with `video_url` parts results in malformed requests rejected by the API (`position 1 with role 'user'`).  
   *Status: CLOSED*

8. **[#1390] Video Attachment Triggers Error Response**  
   Uploading video attachments fails with unhandled errors, limiting multimodal use cases.  
   *Status: CLOSED*

9. **[#1404] Reckless Behavior in Planning Mode**  
   The agent generates overly aggressive or unsafe plans without sufficient caution—raising reliability concerns.  
   *Status: OPEN*

10. **[#1398] Compaction Includes Media Parts, Causing API 400 Errors**  
    Auto-compaction attempts to send image/audio/video URLs to the API, which rejects them as invalid message types.  
    *Status: CLOSED* — Fixed by filtering non-text parts during compaction.

---

### **Key PR Progress**

1. **[#1411] Fix Usage Bar Color Logic**  
   Correctly display color based on **usage ratio** (used/total), not remaining quota—fixes inverted red/green indicators.  

2. **[#1410] Sanitize HTTP Header Values**  
   Strip unsafe ASCII chars (e.g., `#`) from header values to prevent connection failures on Linux kernels.  

3. **[#1408] Bump Versions to 1.20.0 & kosong 0.45.0**  
   Sync dependencies and version tags post-release.  

4. **[#1406] Add Plan Mode Toggle & Preview UI**  
   Introduce UI controls to enable/disable plan mode explicitly and preview generated plans inline.  

5. **[#1407] Friendly 429 Rate Limit Error Message**  
   Replace generic errors with clear guidance when hitting API rate limits, improving UX during bursts.  

6. **[#1405] Establish Playwright E2E Test Suite**  
   Set up end-to-end testing infrastructure to catch regressions in the web interface early.  

7. **[#1403] Scope File-Mention Completion to Typed Prefix**  
   Optimize `@` file completion so it only searches within directories matching the typed prefix, fixing slowness in large repos.  

8. **[#1402] Session Import/Export/Delete via CLI & UI**  
   Enable users to package, share, and manage conversation sessions as ZIP files.  

9. **[#1401] Fix Whitespace in OAuth Headers on Linux**  
   Trim trailing whitespace from header values to resolve auth failures on specific Linux distributions.  

10. **[#1399] Rename “Attachment” → “DynamicInjection”**  
    Reflect architectural shift toward dynamic prompt injection; improves code clarity and provider isolation.  

---

### **Feature Request Trends**

- **API Key-Based Authentication**: Several users request direct login via personal API keys (e.g., #1412).
- **Better Multimodal Support**: Issues around video/audio/image handling suggest demand for richer media integration.
- **Improved Plan Mode Controls**: Users seek more granular control and visibility into planning behavior (#1404, #1406).
- **Session Management Tools**: Export/import functionality is frequently requested for backup and sharing (#1402).

---

### **Developer Pain Points**

- **Unreliable Multi-Agent Access**: Despite premium claims, concurrent agent usage often fails or throttles unexpectedly (#1383).
- **Header Sanitization Bugs**: Platform-specific quirks (Linux kernel versions, Windows paths) break HTTP communication (#1410, #1401).
- **File Mention Performance**: Large repositories suffer slowdowns due to unfiltered directory traversal during `@` completion (#1403).
- **Inconsistent Error Messaging**: Generic “Connection error” responses obscure root causes like rate limits (#1407) or invalid payloads (#1398).

--- 

*Generated by Kimi Code CLI Community Bot*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

**OpenCode Community Digest – March 12, 2026**

---

### 1. **Today's Highlights**
No new releases were published in the last 24 hours. The community continues to focus on stabilizing core functionality, with active development around Windows shell integration, TUI rendering fixes, and cost calculation accuracy. Several high-impact bugs—particularly around session persistence and UI freezes—are receiving targeted patches.

---

### 2. **Releases**
*No new releases in the past 24 hours.*

---

### 3. **Hot Issues**  
*(Top issues by comment count and engagement)*

1. **#11112**: Users report persistent "Preparing write..." hangs during file operations (40 comments, +19). Affects workflow continuity; appears tied to tool execution timeouts.  
   🔗 [anomalyco/opencode#11112](https://github.com/anomalyco/opencode/issues/11112)

2. **#4140**: Black screen in OpenTUI after v1.0.47 upgrade (36 comments, +13). Downgrade to 1.0.46 resolves it—suggests regression in Electron or rendering pipeline.  
   🔗 [anomalyco/opencode#4140](https://github.com/anomalyco/opencode/issues/4140)

3. **#1764**: Feature request for Vim motion support in input prompts (30 comments, +113). Strong demand (+👍113) citing ClaudeCode as precedent. High UX improvement potential.  
   🔗 [anomalyco/opencode#1764](https://github.com/anomalyco/opencode/issues/1764)

4. **#12338**: Token limit confusion: system shows 185k tokens used but throws error at 200k+ (26 comments, +24). Misleading internal accounting logic for Opus 4.6.  
   🔗 [anomalyco/opencode#12338](https://github.com/anomalyco/opencode/issues/12338)

5. **#7602**: Native model fallback/failover needed (17 comments, +49). Critical for reliability—users want automatic retry across models on rate limits or errors.  
   🔗 [anomalyco/opencode#7602](https://github.com/anomalyco/opencode/issues/7602)

6. **#12083**: Intranet connectivity failures block access despite troubleshooting (16 comments, +4). Suggests environment-specific proxy or auth issues not covered in docs.  
   🔗 [anomalyco/opencode#12083](https://github.com/anomalyco/opencode/issues/12083)

7. **#16878**: Old sessions fail to load post-restart (11 comments). Impacts session recovery—critical for long-running agents.  
   🔗 [anomalyco/opencode#16878](https://github.com/anomalyco/opencode/issues/16878)

8. **#13217**: Task halts unexpectedly after compaction step (9 comments, +12). Intermittent but disruptive; may indicate race condition or resource exhaustion.  
   🔗 [anomalyco/opencode#13217](https://github.com/anomalyco/opencode/issues/13217)

9. **#17122**: Linux TUI exhibits infinite render loop with garbled output (6 comments). Likely terminal state corruption or event handling bug.  
   🔗 [anomalyco/opencode#17122](https://github.com/anomalyco/opencode/issues/17122)

10. **#11830**: Multi-account OAuth with auto-relogin requested (14 comments, +8). Enables credential rotation to avoid rate limiting in enterprise setups.  
    🔗 [anomalyco/opencode#11830](https://github.com/anomalyco/opencode/issues/11830)

---

### 4. **Key PR Progress**  
*(Most impactful open/closed PRs updated recently)*

1. **#17135** (OPEN): Adds PowerShell/pwsh shell support natively on Windows—addresses missing CLI tooling parity.  
   🔗 [PR #17135](https://github.com/anomalyco/opencode/pull/17135)

2. **#17127** (OPEN): Fixes `@` key not triggering file selector in TUI prompt—improves usability.  
   🔗 [PR #17127](https://github.com/anomalyco/opencode/pull/17127)

3. **#17124** (CLOSED): Attempted Vim mode implementation via `/vim` command—closed without merge.  
   🔗 [PR #17124](https://github.com/anomalyco/opencode/pull/17124)

4. **#17134** (OPEN): Implements cursor-based pagination for session history using SQLite indexes—scalability win.  
   🔗 [PR #17134](https://github.com/anomalyco/opencode/pull/17134)

5. **#17130** (OPEN): Corrects cache read cost fallback for providers lacking input caching (e.g., Together.AI Kimi-K2.5)—fixes billing inaccuracies.  
   🔗 [PR #17130](https://github.com/anomalyco/opencode/pull/17130)

6. **#17125** (CLOSED): Fixed Electron `file://` protocol asset loading by correcting path resolution.  
   🔗 [PR #17125](https://github.com/anomalyco/opencode/pull/17125)

7. **#17126** (CLOSED): Guards comment accessor against undefined values in message timeline.  
   🔗 [PR #17126](https://github.com/anomalyco/opencode/pull/17126)

8. **#16389** (OPEN): Restores lost sessions in Git worktrees and orphan branches via improved VCS detection.  
   🔗 [PR #16389](https://github.com/anomalyco/opencode/pull/16389)

9. **#16843** (OPEN): Aligns Windows titlebar theming with app theme in Electron.  
   🔗 [PR #16843](https://github.com/anomalyco/opencode/pull/16843)

10. **#11217** (OPEN): Enables per-subtask model overrides via `@agent:provider/model` syntax—granular control over agent intelligence.  
    🔗 [PR #11217](https://github.com/anomalyco/opencode/pull/11217)

---

### 5. **Feature Request Trends**

- **Enhanced Editor Integration**: Vim motions (#1764), hot-reload of configs (#8751), and beautified question tool display (#12781) signal strong desire for deeper IDE-like interactivity.
- **Reliability & Observability**: Model fallback/failover (#7602), token usage visibility (#13003), and session lifecycle management (#16201) reflect need for robustness in production use.
- **Multi-Environment Support**: Windows ARM64 (#4340), proxy-aware API calls (#16847), and per-session MCP config (#7004) highlight cross-platform and enterprise requirements.
- **Cost Transparency**: Accurate billing for non-caching models (#17121) and Azure completions endpoints (#17128) point to growing financial accountability needs.

---

### 6. **Developer Pain Points**

- **Session Instability**: Multiple reports (#16878, #16389, #16814) indicate systemic issues with session restoration across restarts, worktrees, or repo changes.
- **UI Rendering Bugs**: TUI black screens (#4140), infinite renders (#17122), and garbled mouse events (#16027) suggest Electron/Terminal abstraction layer fragility.
- **Token Accounting Confusion**: Discrepancies between displayed vs. actual token budgets (#12338) erode trust in cost estimates.
- **Limited Fallback Logic**: Absence of inter-model failover forces manual intervention on LLM errors—hampers autonomous agent workflows.
- **Documentation Gaps**: Installation path customization (#7675), plugin setup (#10268), and OAuth flows lack clear guidance, increasing support burden.

--- 

*Generated from GitHub activity on anomalyco/opencode – March 12, 2026.*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

**Qwen Code Community Digest – March 12, 2026**

---

### **Today's Highlights**
The Qwen Code team released a hotfix nightly build (v0.12.1-nightly.20260312) addressing session ID handling in `/export` commands to prevent incorrect session exports. Concurrently, multiple critical bug fixes are under active development—particularly around file I/O reliability in VS Code and OAuth UI flickering on Windows—with several PRs merged or awaiting review today.

---

### **Releases**
- **v0.12.1**: Fixed MCP scope handling per RFC 9728 and cleared stale error messages on new queries.
- **v0.12.1-preview.0**: Same fixes as above; pre-release candidate.
- **v0.12.1-nightly.20260312.2a836639**: Hotfix ensuring `/export` uses the current session ID instead of loading the last saved session ([PR #2268](https://github.com/QwenLM/qwen-code/pull/2268)).

---

### **Hot Issues** *(Top 10 by engagement)*

1. **[#2101](https://github.com/QwenLM/qwen-code/issues/2101)**: Users report inability to type after pressing spacebar in v0.11.1—affects input responsiveness in CLI/UI. 10 comments, 5 upvotes.  
2. **[#2261](https://github.com/QwenLM/qwen-code/issues/2261)**: `write_file` tool fails silently on Windows x64 despite accepting command. Diagnosed as reproducible regression. 8 comments.  
3. **[#1870](https://github.com/QwenLM/qwen-code/issues/1870)**: Missing option to place Qwen Chat in secondary sidebar—limits workflow customization for power users. 5 comments.  
4. **[#2049](https://github.com/QwenLM/qwen-code/issues/2049)**: `security.auth.selectedType` gets overwritten if `OLLAMA_API_KEY` is unset, corrupting settings. Security concern flagged.  
5. **[#2191](https://github.com/QwenLM/qwen-code/issues/2191)**: Web search consistently returns 429 Throttling errors (>3 days). Impacts research-heavy use cases.  
6. **[#1985](https://github.com/QwenLM/qwen-code/issues/1985)**: Request to toggle Plan Mode directly in VSCode companion (like CLI’s Shift+Tab cycle). UX consistency ask.  
7. **[#2229](https://github.com/QwenLM/qwen-code/issues/2229)**: Basic file ops fail on Windows 11 with v0.12.0—blocks core functionality.  
8. **[#2201](https://github.com/QwenLM/qwen-code/issues/2201)**: Read tool loops endlessly over first 100–300 lines instead of targeted reads. Agent behavior anomaly.  
9. **[#2306](https://github.com/QwenLM/qwen-code/issues/2306)**: Crash upon selecting “always allow” during cmd execution permission prompt—introduced in v0.12.0.  
10. **[#2304](https://github.com/QwenLM/qwen-code/issues/2304)**: `<think>` tag causes UI freeze/thaw cycles, wasting LLM tokens—visible rendering bug in web UI.

---

### **Key PR Progress** *(Top 10 active contributions)*

1. **[#2315](https://github.com/QwenLM/qwen-code/pull/2315)**: Remove QR code from OAuth flow to eliminate screen flickering on Windows PowerShell (performance UX fix).  
2. **[#2305](https://github.com/QwenLM/qwen-code/pull/2305)**: Add path validation to ACP `writeTextFile` handler to reject malformed paths before write attempts.  
3. **[#2298](https://github.com/QwenLM/qwen-code/pull/2298)**: Improve ACP file operation error mapping—maps ENOENT to proper RESOURCE_NOT_FOUND for better client feedback.  
4. **[#2308](https://github.com/QwenLM/qwen-code/pull/2308)**: Enable Tab key selection in completion menu (slash/file autocomplete), not just Enter.  
5. **[#2203](https://github.com/QwenLM/qwen-code/pull/2203)**: Introduce 10 lifecycle hooks for extensibility (session start, tool exec, subagent calls, etc.). Major architectural enhancement.  
6. **[#2295](https://github.com/QwenLM/qwen-code/pull/2295)**: Fallback to local FS when ACP `writeTextFile` fails due to non-existent path—critical for new file creation.  
7. **[#2288](https://github.com/QwenLM/qwen-code/pull/2288)**: New `migrate-to-qwen` skill to auto-migrate configs from other AIs (e.g., Cline, Cody).  
8. **[#2286](https://github.com/QwenLM/qwen-code/pull/2286)**: Disable symlinks during git clone on Windows to avoid install failures for non-admin users.  
9. **[#2291](https://github.com/QwenLM/qwen-code/pull/2291)**: Map filesystem ENOENT errors to ACP protocol correctly in `readTextFile`.  
10. **[#1904](https://github.com/QwenLM/qwen-code/pull/1904)**: Normalize Windows `Path`/`PATH` env keys to ensure consistent shell command resolution.

---

### **Feature Request Trends**

- **Sidebar Customization**: Multiple requests (#1870, #1972) for configurable chat panel placement (primary/secondary sidebar).
- **Plan Mode Accessibility**: Users want CLI-style mode toggling (including Plan Mode) exposed in GUI (#1985).
- **Clipboard Integration**: Direct screenshot paste into chat (#1951) requested by designers and testers.
- **File Path Autocompletion**: Support `@`-triggered path suggestions after custom commands (#2055).
- **Subagent Context Passing**: Ability to pass runtime variables to child agents (#2124).

---

### **Developer Pain Points**

- **File Operation Failures**: Recurring issues with `write_file`, `read_file`, and new file creation—especially on Windows—suggest gaps in ACP-local FS synchronization logic.
- **Permission Prompt Crashes**: UI instability when granting persistent command permissions (#2306).
- **Throttling & Auth Instability**: 429 errors on web search and token expiration warnings indicate backend rate limiting or auth refresh deficiencies.
- **Input Responsiveness Bugs**: Spacebar and typing freezes (#2101) point to event loop or focus management flaws in older versions.
- **Error Message Ambiguity**: Poor user-facing error differentiation (e.g., invalid path vs. permission denied) forces trial-and-error debugging.

--- 

*For full details, visit the [Qwen Code GitHub repo](https://github.com/QwenLM/qwen-code).*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/DenisZheng/agents-radar).*