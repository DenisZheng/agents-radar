# AI CLI Tools Community Digest 2026-05-04

> Generated: 2026-05-04 00:30 UTC | Tools covered: 8

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

**Cross-Tool AI CLI Ecosystem Analysis – May 4, 2026**

---

### **1. Ecosystem Overview**

The AI developer CLI tooling landscape in early May 2026 is defined by intense competition around agentic workflow reliability, multi-model/provider support, and cross-platform stability. Tools are rapidly converging on shared paradigms—such as MCP integration, subagent orchestration, and TUI enhancements—but diverge sharply in architectural philosophy: some prioritize composability (e.g., OpenCode’s Effect-based core), while others emphasize vertical integration (e.g., Copilot CLI’s GitHub-native workflows). A clear maturation signal is the shift from pure chat interfaces toward structured agent frameworks with lifecycle management, error handling, and observability.

---

### **2. Activity Comparison**

| Tool               | Issues Count (Top 10) | PR Count (Top 10) | New Release Today |
|--------------------|------------------------|-------------------|-------------------|
| Claude Code        | 10                     | 10                | No                |
| OpenAI Codex       | 10                     | 10                | No                |
| Gemini CLI         | 10                     | 10                | No                |
| GitHub Copilot CLI | 10                     | 0                 | No                |
| Kimi Code CLI      | 8                      | 1                 | No                |
| OpenCode           | 10                     | 10                | No                |
| Pi                 | 10                     | 10                | No                |
| Qwen Code          | 10                     | 10                | Yes (v0.15.6-nightly) |

> *Notes: All tools show consistent issue reporting volume; Copilot CLI uniquely lacks recent PR activity despite high-impact bugs. Qwen Code stands out with a nightly release addressing cache and proxy fixes.*

---

### **3. Shared Feature Directions**

Several requirements recur across multiple tools, reflecting ecosystem-wide priorities:

- **MCP & Plugin Ecosystem Maturation**  
  All tools except Copilot CLI reference MCP integration challenges (#9444, #26417, #1894). Common needs include nested skill discovery, persistent plugin data (`${CLAUDE_PLUGIN_DATA}`), and hook context preservation during tool execution—highlighting a gap in standardized agent extensibility.

- **Session & State Persistence**  
  Session loss on logout/restart appears in both Claude Code (#26452) and Pi (#4144), indicating systemic vulnerabilities in long-running agent state management. Workarounds like client-side plugins (#55864) suggest server-side fixes remain elusive.

- **Provider Abstraction & Multi-Model Support**  
  Auto-discovery for OpenAI-compatible endpoints (#6231, #2995) and OAuth conflicts (#18862) span OpenCode, Copilot CLI, and Kimi. Demand for clean provider switching (DeepSeek, LM Studio, NVIDIA NIM) signals lock-in concerns.

- **Terminal UX & Reliability**  
  Cross-platform input freezing (#53227), command corruption (#25884), and print-mode non-termination (#4134, #4103) affect usability. Vi-mode requests (#9184) and scrollable output (#2369) point to universal TUI improvement needs.

- **Memory & Context Management**  
  Token quota waste from repeated file reads (#24147), subagent overflow stalls (#25187), and stale caches (#3805) reflect unsolved scaling issues in agent memory routing and compaction.

---

### **4. Differentiation Analysis**

| Tool             | Primary Focus                          | Target Users                     | Technical Distinction                     |
|------------------|----------------------------------------|----------------------------------|-------------------------------------------|
| **Claude Code**  | Developer experience + plugin ecosystem| Individual devs, MCP integrators | Client-side session persistence workarounds; strong TUI focus |
| **OpenAI Codex** | Agent orchestration + desktop reach    | Enterprise teams, IDE users      | Frodex fork system; subagent surfaces; watchdog runtime |
| **Gemini CLI**   | Codebase intelligence + AST awareness  | Code-heavy workflows             | Behavioral evals suite; AST-aware tooling |
| **Copilot CLI**  | GitHub-integrated automation           | Org/enterprise DevOps            | Provider lock-in; `/remote` session scoping |
| **Kimi Code**    | Configurable multi-agent workflows     | Power users, niche providers     | Nested skill dirs; background task limits |
| **OpenCode**     | Composable AI primitives               | Plugin developers                | Effect-based LLM core; event-driven extensibility |
| **Pi**           | Lightweight scripting + zero-cost access| Indie devs, local LLM adopters | NVIDIA NIM integration; SSE fallback logic |
| **Qwen Code**    | Local/dev model compatibility          | Offline/local model users        | FileReadCache; `/doctor` diagnostics      |

---

### **5. Community Momentum & Maturity**

- **Most Active**: **OpenCode**, **Pi**, and **Qwen Code** show high PR velocity and rapid iteration on infrastructure (telemetry, caching, transport fallbacks), signaling aggressive maturity efforts.
- **Rapidly Iterating**: **Qwen Code**’s nightly releases and **Pi**’s emergency WebSocket fixes reflect responsive but reactive development cycles focused on stability.
- **Community Engagement**: **Claude Code** and **Codex** lead in comment/upvote volume, especially on billing (#31012) and authentication (#20161) issues—indicating mature but frustrated user bases demanding transparency.
- **Emerging Leaders**: **Gemini CLI**’s investment in behavioral evaluations and AST tooling suggests strategic bets on long-term agent intelligence over short-term features.

---

### **6. Trend Signals**

- **Shift Toward Agent Infrastructure**: Tools are evolving beyond chat into orchestrated agent systems (subagents, hooks, lifecycle controls). Expect more `/fork`, watchdog, and auto-compaction features.
- **Multi-Provider Reality**: Native support for non-OpenAI models (NVIDIA NIM, Kimi, Ollama) is no longer optional—it’s table stakes for adoption.
- **Production Readiness Gains**: Diagnostics (`/doctor`), bounded timeouts, and telemetry shutdown fixes reveal growing attention to CI/CD and containerized usage.
- **UX as Competitive Edge**: TUI responsiveness, command safety, and permission clarity differentiate tools more than raw capability today.
- **Compliance & Attribution**: Tracking AI authorship in Git (#3115) reflects enterprise pressure for auditability—a trend likely to expand.

For developers evaluating tooling: prioritize those investing in provider abstraction, session resilience, and agent lifecycle control—these will define longevity in an increasingly modular AI coding stack.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

### Claude Code Skills Community Highlights Report  
*Data as of 2026-05-04*

---

#### **1. Top Skills Ranking**  
*(Most-discussed pending Skills by community engagement)*  

1. **document-typography** (PR #514)  
   - *Functionality:* Automates typographic quality control for AI-generated docs (fixes orphan words, widow headers, numbering misalignment).  
   - *Discussion:* Praised for solving pervasive document aesthetics issues; no objections reported.  
   - *Status:* Open since Mar 4, 2026 | [Link](https://github.com/anthropics/skills/pull/514)  

2. **skill-quality-analyzer** + **skill-security-analyzer** (PR #83)  
   - *Functionality:* Meta-skills for auditing Skill code quality/security across structural, documentation, and dependency dimensions.  
   - *Discussion:* Requested by enterprise users for governance; flagged as high-value for ecosystem health.  
   - *Status:* Open since Nov 6, 2025 | [Link](https://github.com/anthropics/skills/pull/83)  

3. **frontend-design** (PR #210)  
   - *Functionality:* Enhanced UI/UX guidance for Claude to generate production-ready frontend code with accessibility best practices.  
   - *Discussion:* Focused on actionable instructions over theoretical concepts—aligns with developer workflow needs.  
   - *Status:* Open since Jan 5, 2026 | [Link](https://github.com/anthropics/skills/pull/210)  

4. **testing-patterns** (PR #723)  
   - *Functionality:* Comprehensive testing framework covering unit tests, React component testing, and end-to-end strategies.  
   - *Discussion:* High demand for standardized test generation in agent workflows.  
   - *Status:* Open since Mar 22, 2026 | [Link](https://github.com/anthropics/skills/pull/723)  

5. **servicenow** (PR #568)  
   - *Functionality:* Broad ServiceNow platform assistant covering ITSM, SecOps, SAM, FSM, and IntegrationHub scripting.  
   - *Discussion:* Enterprise IT teams seek native integration without third-party tools.  
   - *Status:* Open since Mar 8, 2026 | [Link](https://github.com/anthropics/skills/pull/568)  

---

#### **2. Community Demand Trends**  
*(From Issue discussions revealing unmet needs)*  

- **Persistent Memory Systems**: Strong interest in `shodh-memory` (Issue #154) for cross-conversation context retention.  
- **Document Standardization**: Multiple references to HADS (Human-AI Document Standard) for dual-readability docs.  
- **Enterprise Integration**: Requests for Bedrock compatibility (#29), org-wide skill sharing (#228), and SSO-friendly tooling (#532).  
- **Automation Frameworks**: Demand for AI-driven codebase audits (#147), daily Git reporting via Obsidian (#664), and SAP-RPT-1-OSS predictive analytics (#181).  
- **Security & Governance**: Concerns about trust boundaries in community skills (#492) paired with calls for formal quality/security analyzers.  

---

#### **3. High-Potential Pending Skills**  
*(Active PRs likely to merge soon based on specificity and recency)*  

| Skill | Key Feature | Why It’s Promising |  
|-------|-------------|---------------------|  
| **masonry-generate-image-and-videos** (PR #335) | AI-powered image/video generation via CLI | Directly addresses creative automation gap; uses established models (Imagen/Veo). |  
| **claude-obsidian-reporter** (PR #664) | Auto Git-to-Obsidian reports | Solves personal knowledge management workflows; leverages existing tooling. |  
| **SAP-RPT-1-OSS predictor** (PR #181) | Tabular ML for SAP data | Targets niche enterprise analytics use case with open-source model. |  

*Note: All three have clear problem statements, technical feasibility, and targeted user bases.*

---

#### **4. Skills Ecosystem Insight**  
The community’s most concentrated demand centers on **enterprise-grade document intelligence and workflow automation**, reflecting a shift from general-purpose skills toward domain-specific, production-hardened capabilities that integrate with existing corporate infrastructure (e.g., ServiceNow, SAP, Obsidian).

---

**Claude Code Community Digest – May 4, 2026**

---

### **Today’s Highlights**

No new releases were published in the last 24 hours. However, several high-impact bugs affecting session persistence, MCP tool output handling, and subscription recognition continue to draw strong community engagement. A notable PR introduces a client-side plugin to preserve session state after window closure—a direct response to widespread frustration around lost context.

---

### **Releases**

*No new releases in the past 24 hours.*

---

### **Hot Issues** (Top 10 by comment count)

1. **[#26452](https://github.com/anthropics/claude-code/issues/26452)** – *Session Disappeared After Logout / Restart*: Users report losing active sessions upon desktop logout or restart, with 41 comments and 21 upvotes. This reflects critical reliability concerns around session persistence, especially for long-running development tasks.

2. **[#31012](https://github.com/anthropics/claude-code/issues/31012)** – *Max 20x Subscription Not Recognized*: Multiple users confirm their Max-tier subscriptions are downgraded to Free Plan within Claude Code, causing API access failures. Despite being reported since March, it remains unresolved, fueling distrust in billing integration.

3. **[#9444](https://github.com/anthropics/claude-code/issues/9444)** – *Support for Plugin Dependencies & Shared Resources*: Highest-upvoted open issue (46 👍), proposing first-class support for inter-plugin data sharing and dependency management. Essential for advanced workflow automation and MCP ecosystem growth.

4. **[#29026](https://github.com/anthropics/claude-code/issues/29026)** – *Desktop App Ignores permissions.allow Settings*: On macOS, even when `permissions.allow` is configured, the desktop app still prompts for every tool call—breaking automation workflows. Seen as a regression in permission control consistency.

5. **[#24147](https://github.com/anthropics/claude-code/issues/24147)** – *Cache Read Tokens Consume 99%+ Quota*: CLAUDE.md re-reads linearly increase token usage, making large projects prohibitively expensive. Described as an “architectural scaling issue” with no current mitigation.

6. **[#55879](https://github.com/anthropics/claude-code/issues/55879)** – *Blank Screen on Windows + Cowork*: Max subscribers report 9-day outage with sandbox API errors rendering the UI unusable. Highlights instability in collaborative mode under load.

7. **[#53227](https://github.com/anthropics/claude-code/issues/53227)** – *Double-Esc Freezes TUI on macOS*: Pressing Esc twice to open message selector locks input dispatch entirely—even Ctrl+C fails. Impacts navigation in resumed sessions.

8. **[#51398](https://github.com/anthropics/claude-code/issues/51398)** – *${CLAUDE_PLUGIN_DATA} Not Persistent*: Environment variable resolves to per-conversation paths, wiping plugin-stored tokens on each new chat. Breaks stateful MCP integrations like auth caches.

9. **[#55677](https://github.com/anthropics/claude-code/issues/55677)** – *MCP Tool Drops text[] When structuredContent Present*: Model receives only JSON-structured output while raw text is discarded, breaking tools that rely on combined formats. Confirmed reproducible across CLI.

10. **[#55889](https://github.com/anthropics/claude-code/issues/55889)** – *Hook Context Lost for Bash Matcher*: Pre/PostToolUse hooks lose `additionalContext`, `systemMessage`, and stdout injection when targeting Bash commands in v2.1.123. Regresses custom tool orchestration capabilities.

---

### **Key PR Progress** (Top 10)

1. **[#55864](https://github.com/anthropics/claude-code/pull/55864)** – *session-persist plugin*: Introduces a client-side plugin to save and restore conversation state locally, mitigating session loss on window close. Directly addresses #26452 as a stopgap before server-side fixes.

2. **[#55834](https://github.com/anthropics/claude-code/pull/55834)** – *Fix false-positive update banner*: Corrects misleading “Update available!” alerts for non-npm installers (Homebrew/WinGet) by aligning version checks with actual distribution channels.

3. **[#55857](https://github.com/anthropics/claude-code/pull/55857)** – *Warn against npm update -g*: Documents known npm bug that can break global installs; advises safer upgrade practices to prevent environment corruption.

4. **[#46024](https://github.com/anthropics/claude-code/pull/46024)** – *Document --exclude-dynamic-system-prompt-sections*: Clarifies how prompt caching improves token efficiency in Print mode by moving dynamic sections into user messages.

5. **[#55832](https://github.com/anthropics/claude-code/pull/55832)** – *Clean up stray content in plugin-validator.md*: Fixes accidental chat dialogue at end of documentation file, improving maintainability.

6. **[#55900](https://github.com/anthropics/claude-code/issues/55900)** – *PostToolUse hook returns error reason*: Bug where hooks returning `{"ok": false}` terminate turns instead of feeding feedback to model—impacting error-handling workflows.

7. **[#55696](https://github.com/anthropics/claude-code/issues/55696)** – *Collapse MCP tool results by default*: Feature request to show args but hide payloads unless expanded—reduces noise in chat UI for complex tool outputs.

8. **[#40665](https://github.com/anthropics/claude-code/issues/40665)** – *Auto-compaction destroys context*: Closed but noted: compaction algorithms may discard all prior context unexpectedly, requiring manual recovery.

9. **[#40826](https://github.com/anthropics/claude-code/issues/40826)** – *Per-project plugin enable/disable*: Suggests project-local overrides for `enabledPlugins`, enabling mixed-plugin workspaces without global conflicts.

10. **[#38890](https://github.com/anthropics/claude-code/issues/38890)** – *Silent path rewriting in WSL*: Relative paths get converted to absolute Windows paths in transcripts, raising security and audit concerns.

---

### **Feature Request Trends**

- **Plugin Ecosystem Enhancement**: Strong demand for shared state between plugins (#9444), per-project plugin controls (#40826), and better MCP tool UX (#55696).
- **Session & State Management**: Persistent conversations across restarts and window closures remain top priorities, driving both feature requests and workarounds.
- **Transparency & Control**: Users want clearer visibility into token usage (#24147), session limits (#38826), and permission behavior (#29026).
- **Tool Output Handling**: Requests to improve how mixed-format MCP responses (text + structured) are presented to models (#55677).

---

### **Developer Pain Points**

- **Subscription Recognition Failures**: Repeated reports of paid plans not being honored, undermining trust in authentication systems.
- **Inconsistent Permission Behavior**: Global settings ignored in desktop app (macOS), especially for `Read`, `Glob`, and `Grep`.
- **MCP Integration Fragility**: Tool result truncation, non-persistent storage, and hook regressions hinder reliable external tool chaining.
- **CLI/TUI Instability**: Input freezing (#53227), text deletion bugs (#40741), and session file deletion post-exit (#40609) degrade usability.
- **Cost Obfuscation**: Lack of real-time quota tracking leads to unexpected overages due to inefficient context reuse (e.g., repeated CLAUDE.md reads).

--- 

*Prepared by AI Technical Analyst | Data sourced from GitHub.com/anthropics/claude-code*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

**OpenAI Codex Community Digest – May 4, 2026**

---

### **Today's Highlights**
No new releases in the past 24 hours. However, significant progress continues on the Frodex fork rollout system with multiple PRs restoring subagent surfaces, watchdog runtime support, and prompt cache preservation for efficient agent forking. Concurrently, user-reported issues highlight growing concerns around authentication flows requiring phone numbers, sandbox permission inconsistencies, and platform-specific app stability—particularly on Linux and Windows.

---

### **Releases**
None

---

### **Hot Issues**

1. **[#20161](https://github.com/openai/codex/issues/20161)** – *Codex requires phone number after SSO login*  
   After logging in via SSO on a new device, users are prompted to add a phone number despite prior account setup. This disrupts seamless cross-device access and raises privacy concerns. 38 👍, 45 comments reflect widespread frustration.

2. **[#11023](https://github.com/openai/codex/issues/11023)** – *Linux desktop app support needed*  
   Users demand native Linux support due to high power consumption on macOS and lack of availability. 104 👍 indicate strong community interest in expanding desktop reach beyond macOS/Windows.

3. **[#12161](https://github.com/openai/codex/issues/12161)** – *IDE extension stuck on "Thinking" on Windows*  
   Multiple IDEs (VS Code, Cursor, Windsurf) fail to respond during code generation on Windows, suggesting a regression in request handling or timeout logic.

4. **[#14919](https://github.com/openai/codex/issues/14919)** – *Bubblewrap sandbox fails post-update on Linux*  
   Post-CLI v0.115.0 update, `bwrap` errors block subagent execution in sandbox mode, breaking workflows on Ubuntu 24.04. 42 👍 signal impact on CLI users.

5. **[#18960](https://github.com/openai/codex/issues/18960)** – *Frequent reconnect loops in Codex App (WebSocket closure)*  
   Streaming sessions repeatedly drop and retry, degrading productivity. Seen across macOS Pro users, indicating possible server-side session management flaws.

6. **[#9184](https://github.com/openai/codex/issues/9184)** – *Request for vi/vim editing mode in TUI*  
   Inspired by Claude Code’s Vim integration, users want modal editing without full-pane takeover. 40 👍 show strong appetite for improved terminal UX.

7. **[#6038](https://github.com/openai/codex/issues/6038)** – *Support file inclusion via `@file.md` in AGENTS.md*  
   Enables dynamic context expansion—similar to Claude Code—to manage large or temporary files. 20 👍 reflect desire for richer agent configuration.

8. **[#19305](https://github.com/openai/codex/issues/19305)** – *Full Computer Use support for Windows Desktop App*  
   Requests native Windows Computer Use (beyond WSL/browser use), citing limitations in current implementation. 14 👍 highlight unmet enterprise needs.

9. **[#20351](https://github.com/openai/codex/issues/20351)** – *Phone number formatting bug (+251 → extra zero)*  
   Country code +251 gets altered during verification, blocking sign-up for Ethiopian users. Underscores global usability gaps.

10. **[#15310](https://github.com/openai/codex/issues/15310)** – *Automations silently fallback to workspace-write sandbox*  
    Scheduled tasks ignore `danger-full-access` settings, defaulting to restricted permissions. Affects automation reliability and security expectations.

---

### **Key PR Progress**

1. **[#20915](https://github.com/openai/codex/pull/20915)** – *Frodex: pin rollout references by segment*  
   Adds `SegmentId` to Frodex rollouts for granular traffic segmentation while preserving `ThreadId` for session continuity.

2. **[#20914](https://github.com/openai/codex/pull/20914)** – *Restore fork command & debug hooks*  
   Reintroduces `/fork` TUI support and ephemeral rollout debugging via `CODEX_MATERIALIZE_EPHEMERAL_ROLLOUTS`.

3. **[#20913](https://github.com/openai/codex/pull/20913)** – *Restore TUI subagent surface*  
   Brings back live subagent panel, watchdog status, and agent filtering in the terminal interface.

4. **[#20912](https://github.com/openai/codex/pull/20912)** – *Synchronize agent control tools*  
   Ensures tool lists remain consistent across parent/forked agents and restores watchdog helper controls as eager tools.

5. **[#20911](https://github.com/openai/codex/pull/20911)** – *Add custom models and role prompts*  
   Supports per-role prompt injection (`AGENTS.root.md`, etc.) and top-level `custom_models` config for tailored agent behavior.

6. **[#20910](https://github.com/openai/codex/pull/20910)** – *Watchdog runtime handles*  
   Formalizes watchdog as a first-class agent type with lifecycle management, wakeups, and synthetic boot context.

7. **[#20909](https://github.com/openai/codex/pull/20909)** – *Preserve fork prompt cache state*  
   Forked agents inherit parent’s prompt cache key and MCP snapshot for faster startup and reduced latency.

8. **[#20891](https://github.com/openai/codex/pull/20891)** – *Enforce Windows protected metadata targets*  
   Strengthens sandbox security by denying ACLs on critical metadata objects created within containers.

9. **[#20822](https://github.com/openai/codex/pull/20822)** – *Structured service tiers across core/app-server*  
   Unifies `ModelServiceTier` metadata for consistent tier naming, display, and API contracts.

10. **[#20837](https://github.com/openai/codex/pull/20837)** – *Add hook auto-review*  
   Allows trusted hooks to run automatically in auto-review mode, closing trust gaps during startup.

---

### **Feature Request Trends**

- **Desktop App Expansion**: Strong demand for Linux support (#11023) and native Windows Computer Use (#19305).
- **Enhanced Terminal UX**: Vi-mode in TUI (#9184), Shift+Enter newline (#8673), and better idle-state feedback (#20601).
- **Agent Configuration Flexibility**: File inclusion via `@file.md` in `AGENTS.md` (#6038) enables modular context management.
- **Cross-Platform Consistency**: Fixes for Windows app crashes (#16502), TUI freezes (#20601), and Linux sandbox breaks (#14919) point to fragmentation across OSes.

---

### **Developer Pain Points**

- **Authentication Friction**: Phone number requirement after SSO (#20161) and formatting bugs (#20351) hinder global accessibility.
- **Sandbox Permission Drift**: Automations ignore configured `danger-full-access`, falling back to overly restrictive policies (#15310).
- **CLI/App Instability**: Frequent WebSocket disconnects (#18960), TUI freezes (#20601), and immediate app closure on Windows (#16502) degrade reliability.
- **Context Management Limits**: GPT-5.5 remote compaction failures (#19558) and context window exhaustion (#18052) disrupt long-running tasks.
- **Platform Fragmentation**: Lack of Linux desktop app and inconsistent behavior between CLI, web, and desktop clients creates workflow friction.

--- 

*End of Digest*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

1.  **Today's Highlights**
    The Gemini CLI team continues to focus on refining the agent's core functionality, with several high-priority issues related to subagent behavior, memory management, and AST-aware tools under active investigation. A significant number of PRs address critical bug fixes, particularly around Windows shell command execution, terminal encoding, and race conditions in IDE initialization, indicating a strong push for stability and cross-platform reliability.

2.  **Releases**
    No new releases were published in the last 24 hours.

3.  **Hot Issues** (Top 10 by comment count)
    *   **[Robust component level evaluations (Issue #24353)](https://github.com/google-gemini/gemini-cli/issues/24353)**: This EPIC tracks the development of comprehensive evaluation frameworks for agent components, building upon the existing "behavioral evals" suite which has grown to 76 tests. It's crucial for ensuring the long-term quality and reliability of the agent's decision-making processes.
    *   **[Assess the impact of AST-aware file reads, search, and mapping (Issue #22745)](https://github.com/google-gemini/gemini-cli/issues/22745)**: Investigating whether Abstract Syntax Tree (AST) awareness can significantly improve the agent's efficiency and precision when interacting with codebases, potentially reducing token usage and misaligned reads. This is key for optimizing the agent's performance in large projects.
    *   **[CLI agent introduces invalid whitespaces/newlines in terminal commands (Issue #25884)](https://github.com/google-gemini/gemini-cli/issues/25884)**: A common user-facing bug where the agent generates malformed terminal commands due to extraneous whitespace or newlines, leading to execution errors. This directly impacts usability and trust in the tool's output.
    *   **[Subagent recovery after MAX_TURNS is reported as GOAL success, hiding interruption (Issue #22323)](https://github.com/google-gemini/gemini-cli/issues/22323)**: A critical agent logic flaw where a subagent incorrectly reports success upon hitting its turn limit, masking an actual interruption and preventing proper error handling. This affects the robustness of complex task execution.
    *   **[Gemini cli keeps asking for permissions on the same file (Issue #24916)](https://github.com/google-gemini/gemini-cli/issues/24916)**: A recurring permission prompt issue where the CLI repeatedly asks for access to the same file, suggesting a problem with its permission caching or state management, frustrating users.
    *   **[Raw XML tags from function calls are leaking into standard output (Issue #22441)](https://github.com/google-gemini/gemini-cli/issues/22441)**: Internal XML tags from the agent's function calls are being printed directly to the terminal instead of being parsed and hidden, creating clutter and confusion for users.
    *   **[Shell command execution gets stuck with "Waiting input" after command completes (Issue #25166)](https://github.com/google-gemini/gemini-cli/issues/25166)**: An agent state management problem where the CLI hangs indefinitely after executing a simple command, displaying an incorrect "Awaiting user input" status, blocking further interaction.
    *   **[Model frequently creates tmp scripts in random spots (Issue #23571)](https://github.com/google-gemini/gemini-cli/issues/23571)**: The agent's tendency to generate temporary scripts across various directories creates significant workspace overhead and cleanup challenges, impacting developer workflow efficiency.
    *   **[Browser Agent ignores settings.json overrides (e.g., maxTurns) (Issue #22267)](https://github.com/google-gemini/gemini-cli/issues/22267)**: A configuration management bug where the Browser Agent completely disregards user-defined settings in `settings.json`, such as `maxTurns`, leading to unexpected behavior and loss of control.
    *   **[MCP enable (Issue #26417)](https://github.com/google-gemini/gemini-cli/issues/26417)**: A recent issue concerning the integration of MCP (Model Context Protocol) servers, specifically a problem where a server is marked as connected but no tools are registered, indicating a potential bug or missing feature in the MCP enablement process.

4.  **Key PR Progress** (Top 10 by recency and priority)
    *   **[Docs audit: 2026-05-04 (PR #26418)](https://github.com/google-gemini/gemini-cli/pull/26418)**: Auto-generated documentation audit for the week, highlighting warnings like 256-color terminal support.
    *   **[fix(cli): use os.homedir() for home directory warning check (PR #26410)](https://github.com/google-gemini/gemini-cli/pull/26410)**: Fixes a bug where the "running in home directory" warning incorrectly triggered in subdirectories of the home directory by using the correct `os.homedir()` helper.
    *   **[fix: await IDE client initialization to prevent race condition (PR #26407)](https://github.com/google-gemini/gemini-cli/pull/26407)**: Addresses a race condition in app initialization where the IDE client connection was established asynchronously without being awaited, causing the function to resolve prematurely.
    *   **[fix(core): prefer pwsh.exe over Windows PowerShell (PR #25900)](https://github.com/google-gemini/gemini-cli/pull/25900)**: Improves Windows compatibility by preferring `pwsh.exe` over the older Windows PowerShell 5.1, fixing issues with embedded quotes in shell commands.
    *   **[fix(windows): Resolve hangs, zombie processes, and improve subagent reliability (PR #26392)](https://github.com/google-gemini/gemini-cli/pull/26392)**: Addresses critical Windows-specific startup hangs, zombie processes, and subagent reliability issues.
    *   **[fix(telemetry): stop buffering events when telemetry is disabled (PR #26404)](https://github.com/google-gemini/gemini-cli/pull/26404)**: Prevents unbounded growth of the telemetry buffer when telemetry is disabled, fixing memory leaks related to API/MCP errors.
    *   **[feat(cli): exit shell mode with backspace on empty input (PR #26358)](https://github.com/google-gemini/gemini-cli/pull/26358)**: Adds a more intuitive way to exit shell mode by allowing users to press backspace on an empty input buffer, enhancing user experience.
    *   **[fix(core): handle ENAMETOOLONG in robustRealpath (PR #26401)](https://github.com/google-gemini/gemini-cli/pull/26401)**: Handles `ENAMETOOLONG` errors in `robustRealpath` to prevent unhandled rejections when dealing with very long path tokens.
    *   **[fix(ui): strip trailing punctuation from URLs in inline markdown (PR #25098)](https://github.com/google-gemini/gemini-cli/pull/25098)**: Fixes broken clickable URLs in inline markdown by stripping trailing punctuation, improving link functionality.
    *   **[fix(core): Configure Windows PowerShell to output UTF-8 (PR #25102)](https://github.com/google-gemini/gemini-cli/pull/25102)**: Resolves terminal encoding bugs on Windows by explicitly configuring PowerShell to output stdout and stderr in UTF-8 format.

5.  **Feature Request Trends**
    The community is increasingly focused on enhancing the agent's intelligence, robustness, and configurability. Key trends include:
    *   **AST-Aware Tooling:** A strong interest in leveraging Abstract Syntax Trees (ASTs) for more precise file reading, codebase searching, and navigation within the agent's toolset.
    *   **Advanced Memory Management:** Requests for improved memory routing between global and project-specific contexts, and proactive prompting for the agent to utilize memory tools effectively.
    *   **Agent Behavior Refinement:** Numerous suggestions to tune the main agent's prompts to encourage safer, more efficient, and proactive behaviors, including discouraging destructive operations and better managing tool call retries.
    *   **Enhanced Behavioral Evaluations:** Continued demand for robust, component-level evaluation frameworks to ensure the agent's actions align with desired outcomes and to track its progress over time.

6.  **Developer Pain Points**
    Developers are encountering several recurring frustrations:
    *   **Malformed Command Output:** The agent sometimes generates terminal commands with unwanted whitespace or newlines, making them difficult to copy-paste and execute reliably.
    *   **Permission Management:** Users report persistent issues with the CLI repeatedly asking for file permissions, indicating a lack of proper permission caching or state tracking.
    *   **Terminal State Corruption:** Several issues point to problems with terminal rendering, especially during SSH sessions or when using external editors, leading to scrambled text or layout corruption.
    *   **Platform-Specific Bugs:** There are notable pain points on Windows, including hangs during startup, zombie processes, and encoding issues that hinder smooth operation.
    *   **Agent Reliability & Transparency:** Problems like subagents reporting incorrect statuses (e.g., success after hitting limits), getting stuck in "waiting input" states, or leaking internal XML tags reduce trust and usability of the agent.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

**GitHub Copilot CLI Community Digest – May 4, 2026**

---

### 1. **Today’s Highlights**
No new releases were published in the last 24 hours. However, several high-impact issues emerged, including support for DeepSeek API integration (#2995), persistent remote session failures in organization repos (#2751), and regression in MCP server loading after v1.0.40 (#3083). These reflect growing demand for multi-provider LLM support and stability concerns around configuration changes.

---

### 2. **Releases**
*No new releases in the past 24 hours.*

---

### 3. **Hot Issues**  
*(Top 10 most active or impactful)*

1. **[#2995](https://github.com/github/copilot-cli/issues/2995)** – Users cannot use DeepSeek API despite setting `COPILOT_PROVIDER_TYPE="openai"` and custom endpoints. The bug suggests incomplete provider abstraction, limiting access to non-OpenAI models.  
   → *8 comments, +6 thumbs up*  

2. **[#2751](https://github.com/github/copilot-cli/issues/2751)** – `/remote` command fails on organization-owned repos with “could not resolve repository”. Affects enterprise users relying on remote sessions.  
   → *6 comments, +12 thumbs up*  

3. **[#2369](https://github.com/github/copilot-cli/issues/2369)** – No scrollable output for long responses; terminal rendering is broken. Critical UX issue for interactive use.  
   → *2 comments, +4 thumbs up*  

4. **[#3083](https://github.com/github/copilot-cli/issues/3083)** – v1.0.40 broke automatic loading of `.mcp.json`, breaking local tooling workflows. Regression reported post-deprecation warning.  
   → *1 comment*  

5. **[#1354](https://github.com/github/copilot-cli/issues/1354)** – Feature request: model routing, per-agent model selection, and global hooks. Aligns with agentic workflows but currently unsupported.  
   → *3 comments, +5 thumbs up*  

6. **[#3092](https://github.com/github/copilot-cli/issues/3092)** – File references via `@` don’t list files in current directory (only absolute/parent paths work). Hinders local file discovery.  
   → *1 comment*  

7. **[#2979](https://github.com/github/copilot-cli/issues/2979)** – GitHub Android app blocks remote sessions after hitting monthly request limit, even with remaining budget—effectively read-only mode.  
   → *2 comments*  

8. **[#3098](https://github.com/github/copilot-cli/issues/3098)** – PowerShell `$home` variable collision can delete user profiles if scripts use lowercase `$home`. Security/UX risk in cross-platform scripting.  
   → *Fresh issue, flagged for triage*  

9. **[#3097](https://github.com/github/copilot-cli/issues/3097)** – Pasting long strings inserts spurious newlines, corrupting input. Impacts automation and code generation.  
   → *New, low engagement*  

10. **[#3095](https://github.com/github/copilot-cli/issues/3095)** – Request to add capability fields (tools, mcp-servers, etc.) to SKILL.md frontmatter for richer plugin metadata. Cross-platform concern (also filed in VS Code repo).  
    → *New feature alignment request*

---

### 4. **Key PR Progress**  
*No pull requests updated in the last 24 hours.*

---

### 5. **Feature Request Trends**  
Developers are increasingly demanding:
- **Multi-model/provider support** (DeepSeek, others beyond OpenAI) with clean configuration.
- **Fine-grained control over agent behavior**, especially per-subagent model selection and lifecycle hooks.
- **Enhanced ACP (Agent Client Protocol) compatibility**, including "Ask"-only modes for lightweight IDE integrations like Zed.
- **Robust file reference semantics** (`@`) that honor relative paths and project context.
- **Backward-compatible configuration evolution**, particularly around MCP server discovery and deprecation warnings.

These trends signal a shift toward composable, extensible agent frameworks rather than monolithic chat interfaces.

---

### 6. **Developer Pain Points**  
- **Configuration regressions**: Recent updates (e.g., v1.0.40) have broken expected behaviors like auto-loading `.mcp.json`.
- **Provider lock-in**: Limited support for non-OpenAI APIs forces manual overrides that often fail.
- **Terminal UX gaps**: Lack of scrolling, poor file mention resolution, and input corruption hinder productivity.
- **Enterprise friction**: Remote sessions fail in org-owned repos due to ambiguous auth/scoping logic.
- **Cross-platform scripting risks**: Case-insensitive shell variables introduce subtle bugs in generated code.

Addressing these will require both backward compatibility safeguards and clearer provider/model abstractions.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

### Kimi Code CLI Community Digest - 2026-05-04

#### 1. Today's Highlights
The community is actively addressing nested skill directory discovery with a new PR (#2146) targeting Issue #1894, aiming to align Kimi CLI's behavior with Codex's compatibility. A critical Windows-specific crash in v1.41.0 (Issue #2151) has surfaced, prompting immediate attention. Concurrently, developers are requesting enhanced configurability for prompt symbols, background task limits, and global agent conventions to improve workflow flexibility.

#### 2. Releases
No new releases were published in the last 24 hours.

#### 3. Hot Issues
*   **#1894: Nested Skill Directory Support** - A core compatibility gap with Codex; Kimi CLI fails to discover skills in deeply nested `.agents/skills/{name}/skills/xxx` structures.
    *   [Link](https://github.com/MoonshotAI/kimi-cli/issues/1894)
*   **#2157: Configurable Background Task Limit** - The hard concurrency limit of 4 background tasks blocks larger multi-agent workflows, preventing graceful queuing or handling of additional subagents.
    *   [Link](https://github.com/MoonshotAI/kimi-cli/issues/2157)
*   **#2155: Configurable Prompt Symbols** - Hardcoded emoji symbols in the TUI create UX friction, making it difficult for users to reference or search for specific prompts.
    *   [Link](https://github.com/MoonshotAI/kimi-cli/issues/2155)
*   **#2154: PermissionRequest Hook Event** - Lack of an auto-approval mechanism for safe operations within the existing hook system forces unnecessary manual confirmations for routine tasks.
    *   [Link](https://github.com/MoonshotAI/kimi-cli/issues/2154)
*   **#2153: Pillow Security Update (CVE-2026-25990)** - An out-of-bounds write vulnerability in the current `pillow==12.1.0` dependency blocks deployment in security-tight environments.
    *   [Link](https://github.com/MoonshotAI/kimi-cli/issues/2153)
*   **#2152: Global ~/.kimi/AGENTS.md Support** - Current `AGENTS.md` loading from only the working directory creates significant friction for managing shared conventions across multiple parallel projects.
    *   [Link](https://github.com/MoonshotAI/kimi-cli/issues/2152)
*   **#2151: Windows Terminal Crash & Image Attachment Broken** - A `NoneType` error on path completion and broken image transmission in Windows 10 terminals indicate critical stability issues.
    *   [Link](https://github.com/MoonshotAI/kimi-cli/issues/2151)
*   **#1493: CLI Animation Stutter** - The lack of rotating animation during Kimi's runtime makes it unclear if the process is stuck or still executing.
    *   [Link](https://github.com/MoonshotAI/kimi-cli/issues/1493)

#### 4. Key PR Progress
*   **#2146: Recursively Discover Skills in Nested Subdirectories** - Addresses Issue #1894 by adding a helper function to scan nested skill directories, improving compatibility with Codex.
    *   [Link](https://github.com/MoonshotAI/kimi-cli/pull/2146)

#### 5. Feature Request Trends
Developers are consistently requesting greater configurability and flexibility:
*   **Enhanced Multi-Agent Workflow Management**: This includes configurable concurrency limits for background tasks (#2157) and support for more complex nested agent/skill structures (#1894).
*   **Improved User Interface (TUI) Customization**: Users seek configurable prompt symbols (#2155) and better visual feedback during execution (#1493).
*   **Advanced Hook System Functionality**: There's a demand for programmatic auto-approval capabilities within the existing hook framework (#2154), alongside blocking dangerous actions.
*   **Global Configuration and Conventions**: Developers desire a global `~/.kimi/AGENTS.md` file (#2152) to manage shared rules across multiple projects.

#### 6. Developer Pain Points
Recurring frustrations include:
*   **Limited Concurrency and Scalability**: The hard-coded limit of 4 concurrent background tasks (#2157) hinders the adoption of more complex, larger-scale multi-agent workflows.
*   **Platform-Specific Bugs**: Critical crashes and feature breaks, particularly on Windows terminals (#2151), impact reliability and user experience.
*   **Inconsistent Behavior Across Tools**: The inability to load nested skills like Codex (#1894) creates fragmentation and confusion for developers using multiple tools.
*   **Lack of Flexibility in UI/UX**: Hardcoded elements, such as emoji symbols (#2155), restrict customization and can impede efficient interaction.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

**OpenCode Community Digest – May 4, 2026**

---

### **Today's Highlights**
The community is actively addressing memory profiling and tooling reliability amid rapid LLM model evolution. A major focus remains on stabilizing sub-agent context handling and improving provider compatibility, especially for OpenAI-compatible endpoints and custom OAuth flows. Several high-impact PRs landed to fix LSP timeouts and plugin event delivery, signaling progress in core infrastructure resilience.

---

### **Releases**
No new releases in the last 24 hours.

---

### **Hot Issues**

1. **[#20695](https://github.com/anomalyco/opencode/issues/20695)** – *Memory Megathread*  
   Centralized tracking of memory-related bugs across sessions. High engagement (73 comments, +44) reflects urgent need for heap snapshot support and better diagnostics. Critical for diagnosing long-running agent hangs.

2. **[#20650](https://github.com/anomalyco/opencode/issues/20650)** – *Kimi k2.5 Tool Calling Failures*  
   JSON parsing errors during bash tool invocations plague Kimi users. Low upvotes but frequent reports indicate instability with certain reasoning models’ tool output formatting.

3. **[#768](https://github.com/anomalyco/opencode/issues/768)** – *Copilot Premium Quota Display*  
   Users demand visibility into GitHub Copilot’s premium request limits instead of misleading $0.00 cost tracking. Strong community sentiment (+70) highlights UX gap in enterprise workflows.

4. **[#6231](https://github.com/anomalyco/opencode/issues/6231)** – *Auto-Discovery for OpenAI-Compatible Providers*  
   Manual model listing is tedious; auto-discovery requested for Ollama, LM Studio, etc. Highest upvotes (+106), showing strong desire for streamlined local LLM integration.

5. **[#21241](https://github.com/anomalyco/opencode/issues/21241)** – *Desktop App Blank Screen on macOS*  
   Fresh install crashes with white screen on M3 Macs. No traction yet—critical blocker for desktop adoption among Apple Silicon users.

6. **[#14808](https://github.com/anomalyco/opencode/issues/14808)** – *Plugin Event Listener Not Firing*  
   `session.created` events fail silently in custom plugins like Engram. Technical severity: impacts extensibility and observability layers.

7. **[#25187](https://github.com/anomalyco/opencode/issues/25187)** – *Sub-Agents Hang on Context Overflow*  
   Sub-agents lack auto-compaction, causing indefinite stalls. Contrasts with main agent behavior—major regression in multi-agent reliability.

8. **[#25644](https://github.com/anomalyco/opencode/issues/25644)** – *Raw Tool Markup in Reasoning Breaks Parsing*  
   `<tool_calls>` tags inside `<reasoning>` blocks corrupt downstream JSON parsing. Affects GPT-5.3+ and similar structured-output models.

9. **[#18862](https://github.com/anomalyco/opencode/issues/18862)** – *Stale OAuth Overrides Direct API Keys*  
   Codex OAuth hijacks OpenAI provider even when explicit keys are set. Security and configuration integrity concern for production setups.

10. **[#25472](https://github.com/anomalyco/opencode/issues/25472)** – *Claude Bursty Streaming via Copilot Provider*  
    Inconsistent token streaming vs smooth GPT responses suggests provider-side throttling or buffering logic differences.

---

### **Key PR Progress**

1. **[#24712](https://github.com/anomalyco/opencode/pull/24712)** – *Native LLM Core Foundation*  
   Introduces Effect-based typed LLM layer with provider adapters and tool runtime. Major architectural shift enabling safer, composable AI interactions.

2. **[#25649](https://github.com/anomalyco/opencode/pull/25649)** – *Increase JDTLS/KotlinLS LSP Timeout*  
   Fixes initialization failures for Java/Kotlin projects by extending timeout to 120s+ during Gradle sync.

3. **[#25573](https://github.com/anomalyco/opencode/pull/25573)** – *Route Provider Options Through openaiCompatible Key*  
   Ensures `reasoningEffort` and `variant` reach cf-ai-gateway correctly—fixes missing metadata in hybrid inference pipelines.

4. **[#25636](https://github.com/anomalyco/opencode/pull/25636)** – *Preserve Auth Token Credentials*  
   Maintains session security after app restart by embedding token-derived auth into web app server connections.

5. **[#25358](https://github.com/anomalyco/opencode/pull/25358)** – *Preserve Workspace Adapter Context*  
   Aligns workspace operations with Effect semantics while supporting legacy Promise-based plugins during migration.

6. **[#25549](https://github.com/anomalyco/opencode/pull/25549)** – *Featherless AI Provider*  
   Adds first-class support for Featherless.ai with concurrency gates to prevent rate limiting.

7. **[#25554](https://github.com/anomalyco/opencode/pull/25554)** – *Keep "New Chat" Icon Visible*  
   Responsive UI fix ensuring mobile/desktop parity in titlebar layout.

8. **[#12822](https://github.com/anomalyco/opencode/pull/12822)** – *Proxy Env Vars Instead of Snapshotting*  
   Prevents stale environment state in hot-reloaded contexts—critical for dynamic config changes.

9. **[#22753](https://github.com/anomalyco/opencode/pull/22753)** – *Move Plugin Initialization to Config Layer*  
   Solves TUI launch issues by deferring network resolution until instance provisioning.

10. **[#25640](https://github.com/anomalyco/opencode/pull/25640)** – *Enable Codex Spark via OAuth*  
   Restores access to `gpt-5.3-codex-spark` model through Codex authentication flow.

---

### **Feature Request Trends**

- **Model Auto-Discovery**: Users want zero-config support for local and OpenAI-compatible providers (Ollama, LM Studio).
- **Session Archival & Navigation**: Requests to view/archive past sessions improve workflow continuity.
- **Enhanced Reasoning Support**: Interleaved `reasoning` field and vLLM API compliance are emerging priorities.
- **Mobile/Touch Optimization**: Growing demand for responsive UI and touch-friendly controls.
- **Configurable Skill Paths**: Desire to restrict skill discovery directories for privacy/security.

---

### **Developer Pain Points**

- **Tool Execution Reliability**: Frequent JSON parse errors in tool calls due to malformed model outputs (esp. Kimi, GPT-5.x).
- **Provider Authentication Conflicts**: Stale OAuth credentials overriding direct API keys create silent failures.
- **LSP Timeouts in JVM Languages**: Java/Kotlin development blocked by insufficient LSP handshake timeouts.
- **Sub-Agent Context Management**: Lack of auto-compaction in spawned agents leads to deadlocks.
- **Streaming Inconsistencies**: Bursty vs continuous token delivery between models/providers affects real-time UX.
- **Plugin Event Delivery**: Core events like `session.created` not reaching registered listeners break plugin ecosystems.

--- 

*End of Digest*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

**Pi Community Digest – 2026-05-04**

---

### **Today's Highlights**

The Pi team addressed several critical stability and UX issues in the past 24 hours, including a CPU spin loop when terminals disconnect (#4144), WebSocket-related hangs in print mode (#4128, #4103), and crashes during image pasting on macOS (#4142). A notable feature addition is support for NVIDIA NIM as a first-class OpenAI-compatible provider (#4116), expanding free model access. Several infrastructure improvements were also merged to stabilize Codex streaming and session management.

---

### **Releases**

No new releases in the last 24 hours.

---

### **Hot Issues**

1. **[#4144] TUI crashes into 100% CPU spin when host terminal disappears**  
   Long-lived sessions hang after SSH disconnection or tmux pane kill due to missing EIO/SIGHUP guards in `process.stdout.write`. Critical for headless/remote workflows.

2. **[#4103] Codex WebSocket transport prevents --print mode from exiting**  
   Print mode fails to terminate after response due to lingering WebSocket connections. Confirmed across multiple providers using auto/websocket transport.

3. **[#4142] macOS image paste hard-aborts Pi without pasteboard permissions**  
   Sandboxed apps crash instead of failing gracefully when clipboard access is denied. Affects usability in restricted environments.

4. **[#4082] Xiaomi MiMo Token Plan regional providers not working**  
   Users cannot authenticate with China-specific endpoints; manual config doesn’t surface models in `/model` list. Blocked by incomplete provider registration logic.

5. **[#2994] `pi.sendUserMessage()` ignores built-in commands like `/reload`**  
   Commands are treated as natural language prompts instead of internal directives. Impacts automation and scripting reliability.

6. **[#4134] `pi -p` prompt mode hangs indefinitely after output**  
   Single-shot CLI invocations fail to exit despite correct response generation. Linked to session persistence bugs in print mode.

7. **[#3942] Self-update fails under npm --prefix installations (e.g., Nix)**  
   Global install path assumptions break custom npm prefixes. Hinders deployment in constrained environments like Nix shells.

8. **[#4146] UI freezes on large code block highlighting**  
   Profiling shows V8 main thread stuck in syntax highlighting; likely due to synchronous DOM updates blocking event loop.

9. **[#4138] Kimi K2.6 returns "Invalid request" schema error**  
   Provider-specific JSON schema expectations conflict with Pi’s tool parameter format. Requires adapter layer for Moonshot-style APIs.

10. **[#3966] Lack of built-in profile isolation for multi-project setups**  
    Developers need `--profile <name>` or env-based state segregation to avoid auth/session conflicts across workspaces. Currently requires manual `PI_CODING_AGENT_DIR` hacks.

---

### **Key PR Progress**

1. **[#4133]** Fall back from Codex WebSocket to SSE on errors  
   Improves resilience against socket closure (1000) and oversized payloads (1009).

2. **[#4127]** Disable provider session cache in print mode  
   Fixes hanging processes by preventing cached WebSockets from keeping Node alive post-response.

3. **[#4112]** Split Xiaomi MiMo into default (API billing) + per-region token plans  
   Resolves #4082 by decoupling global vs. regional authentication flows.

4. **[#4117]** Add `agent.stopAfterTurn()` control  
   Enables graceful turn termination for extensions needing fine-grained agent lifecycle hooks.

5. **[#4126]** Retry transient HTTP 404/408 responses  
   Expands retryable status codes beyond 429/5xx, aiding edge/CDN instability scenarios.

6. **[#4136]** Implement `/model -` to toggle previous model  
   Adds `cd -`-style navigation between last-used models via `_previousModel` tracking.

7. **[#4119]** Stabilize flaky tests via transport/env isolation  
   Forces SSE transport in Codex tests and clears SSH/MOSH vars to reduce local-state dependencies.

8. **[#4116]** Integrate NVIDIA NIM as OpenAI-compatible provider  
   Adds 50+ free endpoints, zero-cost evaluation path for coding-focused models.

9. **[#4125]** Diagnose Agent Manager overlay not rendering  
   Investigation ongoing—likely related to TUI component initialization or command routing.

10. **[#4130]** Propose exclusion flag for unused providers  
    Suggests config option to hide/logout-only providers from auto-selection without full logout.

---

### **Feature Request Trends**

- **Provider & Auth Modernization**: Demand for better support of region-specific providers (Xiaomi, Kimi), OAuth flows (Anthropic), and zero-cost endpoints (NVIDIA NIM).
- **CLI & Scripting Reliability**: Multiple reports highlight that `pi -p`, print mode, and command execution fail to terminate cleanly.
- **Profile/Workspace Isolation**: Strong desire for built-in `--profile` support to separate project contexts without manual directory management.
- **Error Handling & Debugging**: Requests for clearer error messages, debug modes, and fallback mechanisms (e.g., WebSocket → SSE).
- **UI Responsiveness**: Concerns about high CPU usage during text processing, especially in TUI and editor components.

---

### **Developer Pain Points**

- **Terminal Disconnection Instability**: Orphaned Pi processes consume resources indefinitely after SSH/tmux session loss.
- **Print Mode Non-Termination**: CLI invocations hang even when output is complete—critical for CI/automation use cases.
- **Platform-Specific Crashes**: macOS sandboxing and Windows Terminal input handling introduce unhandled exceptions.
- **Inconsistent Provider Behavior**: Regional endpoints, schema mismatches (Kimi), and auth flows lack standardization.
- **Lack of State Segregation**: No native way to isolate settings/auth per project, forcing brittle workarounds.

For full details, see: [badlogic/pi-mono](https://github.com/badlogic/pi-mono)

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

**Qwen Code Community Digest – May 4, 2026**

---

### 1. **Today's Highlights**  
The Qwen Code team released **v0.15.6-nightly.20260504**, introducing a file read cache to optimize long-running sessions and fixing proxy handling in CLI. Meanwhile, critical stability issues around memory display, MCP race conditions, and telemetry shutdown hangs are under active investigation—highlighting growing focus on production reliability.

---

### 2. **Releases**  
- **[v0.15.6-nightly.20260504](https://github.com/QwenLM/qwen-code/releases/tag/v0.15.6-nightly.20260504)**  
  - Introduced `FileReadCache` with short-circuit logic for unchanged file reads (PR #3717).  
  - Fixed CLI proxy configuration not being honored (PR #3766).

---

### 3. **Hot Issues**  

| Issue | Summary | Impact |
|------|--------|--------|
| [#3805](https://github.com/QwenLM/qwen-code/issues/3805) | `read`/`glob` tools fail or drop content in long-running sessions—linked to session bloat. | High: Affects core file interaction workflows; 2 comments, urgent triage needed. |
| [#3816](https://github.com/QwenLM/qwen-code/issues/3816) | `/memory show` command broken—returns empty output. | Medium: Blocks debugging and memory inspection; reported same day as regression. |
| [#3817](https://github.com/QwenLM/qwen-code/issues/3817) | Race condition in `McpClientManager` spawns duplicate MCP processes on restart. | High: Risk of resource leaks and instability in MCP-heavy setups. |
| [#3203](https://github.com/QwenLM/qwen-code/issues/3203) | Proposal to reduce OAuth free tier from 1K → 100 req/day and sunset it by Aug 2026. | Policy/Low: Sparked debate (121 comments); concerns over developer accessibility. |
| [#3802](https://github.com/QwenLM/qwen-code/issues/3802) | Switching to local LM Studio models fails with "Model is unloaded" pre-flight check. | Medium: Hinders offline/local development; Windows-specific edge case. |
| [#3748](https://github.com/QwenLM/qwen-code/issues/3748) | Non-interactive mode prints API errors thrice + double-wraps messages + stack trace. | UX/High: Poor error hygiene in CLI scripts; misleading logs. |
| [#3806](https://github.com/QwenLM/qwen-code/issues/3806) | UI flickering during streaming output in v0.15.6. | UX/Medium: Visual regression post-update; affects all platforms. |
| [#3804](https://github.com/QwenLM/qwen-code/issues/3804) | `AskUserQuestion` triggers `[API Error: Model stream ended with empty response]`. | Reliability/Medium: Intermittent but disruptive during interactive prompts. |
| [#3307](https://github.com/QwenLM/qwen-code/issues/3307) | Alibaba Cloud Coding Plan out-of-stock indefinitely ("restocking at ??/??"). | Ecosystem/Low: Impacts paid access path; unrelated to codebase but user-facing. |
| [#3803](https://github.com/QwenLM/qwen-code/issues/3803) | Proposal for `qwen serve` daemon mode to support persistent agent backends. | Strategic/High: Signals move toward serverless/background agent infrastructure. |

---

### 4. **Key PR Progress**  

| PR | Summary | Relevance |
|----|--------|----------|
| [#3810](https://github.com/QwenLM/qwen-code/pull/3810) | Fixes #3805: Clears `FileReadCache` on history rewrites to prevent stale reads in long sessions. | Direct fix for critical session-bug. |
| [#3814](https://github.com/QwenLM/qwen-code/pull/3814) | Prevents auto-memory recall from blocking main request thread via timeout isolation. | Improves responsiveness in memory-heavy chats. |
| [#3815](https://github.com/QwenLM/qwen-code/pull/3815) | Isolates fast-model side queries (e.g., recap) from main model config leakage. | Enables safer multi-model orchestration. |
| [#3813](https://github.com/QwenLM/qwen-code/pull/3813) | Adds bounded timeout (10s) to telemetry shutdown to avoid hanging exits. | Critical for CI/CD and graceful CLI termination. |
| [#3797](https://github.com/QwenLM/qwen-code/pull/3797) | New `/model list` subcommand for dynamic discovery of available models. | Improves scriptability and endpoint compatibility. |
| [#3799](https://github.com/QwenLM/qwen-code/pull/3799) | Normalizes `/models` parsing across OpenAI-compatible endpoints (handles `data`, `object`, bare arrays). | Robustness gain for heterogeneous backends. |
| [#3809](https://github.com/QwenLM/qwen-code/pull/3809) | Advises users to background long-running shell commands (>60s) after completion. | UX improvement for agentic workflows. |
| [#3785](https://github.com/QwenLM/qwen-code/pull/3785) | Adds `/doctor memory` diagnostic command for live memory health checks. | Debugging aid for memory management issues. |
| [#3115](https://github.com/QwenLM/qwen-code/pull/3115) | Tracks AI vs human authorship per-file in git commits—critical for compliance. | Enterprise/Governance use-case enablement. |
| [#3774](https://github.com/QwenLM/qwen-code/pull/3774) | Enforces prior read before allowing Edit/WriteFile mutations. | Safety: Prevents AI hallucinated edits without context awareness. |

---

### 5. **Feature Request Trends**  

- **Daemon/Server Mode**: Multiple mentions (#3803, #2271) signal demand for persistent `qwen serve` backend to support background agents and REST APIs.
- **Enhanced Diagnostics**: Requests for `/doctor`-style introspection (`#3785`) reflect need for better observability into memory, tools, and session state.
- **Compliance & Attribution**: Growing interest in tracking AI-generated changes in version control (`#3115`) for audit trails.
- **Multi-Model Safety**: Isolation of fast/slow model configs (`#3815`) and error classification (`#3798`) point to maturation of hybrid inference pipelines.
- **Local Development Support**: Improvements needed for LM Studio integration (`#3802`) and cross-platform tool reliability.

---

### 6. **Developer Pain Points**  

- **Session Instability**: Long-running chats suffer from dropped tool outputs (`#3805`), memory leaks (`#3816`), and caching bugs—indicating insufficient lifecycle management.
- **Error Hygiene**: Poor logging behavior in non-interactive mode (`#3748`) and ambiguous API errors (`#3804`) hinder automation and debugging.
- **MCP Process Management**: Race conditions in MCP restarts create zombie processes (`#3817`)—a scalability blocker for advanced agent setups.
- **Telemetry Shutdown Hangs**: Unbounded OTLP shutdown delays CLI exit (`#3813`)—problematic for containerized or scripted usage.
- **Free Tier Accessibility**: Policy tightening (`#3203`) may disproportionately affect indie devs and open-source contributors relying on free quotas.

--- 

*End of Digest*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/DenisZheng/agents-radar).*