# AI CLI Tools Community Digest 2026-05-14

> Generated: 2026-05-14 00:36 UTC | Tools covered: 8

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

### **Cross-Tool AI CLI Ecosystem Analysis Report**  
*May 14, 2026*

---

#### **1. Ecosystem Overview**  
The AI developer tooling landscape continues to mature rapidly, with all major CLI tools—Claude Code, OpenAI Codex, GitHub Copilot CLI, Kimi Code CLI, Gemini CLI, OpenCode, Pi, and Qwen Code—focusing on agent reliability, platform robustness, and extensibility. A dominant theme is enhancing autonomous coding workflows through improved session management, multi-agent collaboration, and enterprise-grade observability. While some tools (e.g., Claude Code, OpenCode) lead in feature innovation like `/fork` and native LLM runtimes, others (e.g., Pi, Qwen Code) are addressing critical stability gaps around local model support and terminal compatibility. The ecosystem is bifurcating into two paths: cloud-first platforms optimizing for scale (Claude Code, OpenAI Codex), and local-first tools enabling offline/self-hosted inference (Pi, Gemini CLI).

---

#### **2. Activity Comparison**

| Tool               | Issues (Top 10) | PRs (Top 10) | New Release(s)         |
|--------------------|-----------------|--------------|------------------------|
| **Claude Code**    | 10              | 10           | v2.1.141 (May 14)      |
| **OpenAI Codex**   | 10              | 10           | None                   |
| **Gemini CLI**     | 10              | 10           | None                   |
| **GitHub Copilot CLI** | 10          | 2            | v1.0.48-0 (May 13)     |
| **Kimi Code CLI**  | 10              | 10           | v1.44.0 (PR merged May 13) |
| **OpenCode**       | 10              | 10           | v1.14.49 (May 13)      |
| **Pi**             | 10              | 10           | None                   |
| **Qwen Code**      | 10              | 10           | v0.15.11 (May 13)      |

*Note: All tools show consistent issue/PR volume (~10 each), indicating sustained community engagement. Only 4 tools released updates in the last 24h.*

---

#### **3. Shared Feature Directions**

| Requirement                          | Tools Affected                     | Specific Needs                                                                 |
|--------------------------------------|------------------------------------|--------------------------------------------------------------------------------|
| **Multi-account/profile isolation**  | Claude Code, Kimi Code CLI         | Secure credential switching across Desktop/Mobile; enterprise compliance       |
| **Session continuity & handoff**     | Kimi Code CLI, OpenCode, Pi        | Cross-device persistence, background task resumption, `--resume` UX improvements|
| **Local LLM integration**            | Pi, Gemini CLI, OpenCode           | Dynamic `/models` discovery, keyless auth for Ollama/LM Studio                 |
| **Shell/TUI reliability**            | Gemini CLI, Pi, OpenCode           | Output buffering fixes, Kitty protocol hardening, scrollback limitations       |
| **Agent sandboxing**                 | OpenCode                           | File-system isolation ("seatbelt"-like) for safe autonomous operations         |
| **Configurable review output**       | OpenAI Codex                       | Limit feedback items in `/review` command                                      |
| **Thinking model support**           | Pi, Kimi Code CLI                  | Align reasoning formats (e.g., K2.6, Opus 4.7) with tool call mapping         |

---

#### **4. Differentiation Analysis**

| Tool               | Feature Focus                      | Target Users                  | Technical Approach                     |
|--------------------|------------------------------------|-------------------------------|----------------------------------------|
| **Claude Code**    | Enterprise extensibility, hooks    | Teams, DevOps engineers       | Rich plugin API, TTY-aware terminal control |
| **OpenAI Codex**   | Stability, MCP toolchains          | Pro users, CI/CD pipelines    | Gated Code Mode, OAuth/MCP hardening   |
| **OpenCode**       | Local-first, schema customization  | Privacy-conscious devs        | Native LLM runtime, i18n-ready         |
| **Pi**             | Local model parity, security       | Self-hosters, researchers     | Keyless providers, supply chain hardening |
| **Qwen Code**      | Daemon scalability, telemetry      | Alibaba/cloud-native teams    | Hierarchical tracing, memory optimization |
| **Gemini CLI**     | Subagent autonomy, AST tooling     | Google Workspace users        | Skill libraries, RAG debugging         |

*Key differentiators:*  
- **Cloud vs. Local**: OpenAI Codex and Claude Code prioritize cloud integrations; Pi and Gemini CLI lead in local model support.  
- **Extensibility**: Claude Code’s hook system and OpenCode’s plugin model offer deepest customization.  
- **Enterprise Readiness**: Qwen Code and Claude Code address auth complexity and auditability best.

---

#### **5. Community Momentum & Maturity**

- **Most Active Communities**:  
  - **Claude Code**: High engagement (#18435 has 500+ upvotes); rapid iteration (v2.1.141 adds `terminalSequence`).  
  - **OpenCode**: Strong feature demand (Agent Teams, VS Code extension); native runtime preview signals maturity.  
  - **Pi**: Critical bug focus (supply chain, local model bugs) shows responsive maintainers.  

- **Rapid Iteration**:  
  - **Kimi Code CLI**: Fixed stderr leaks in <24h post-v1.43.0 regression.  
  - **GitHub Copilot CLI**: ARM64 fix shipped within 24h of report.  
  - **Gemini CLI**: Memory system hardening via snapshot recovery PRs.  

- **Maturity Indicators**:  
  - **Stalled Projects**: OpenAI Codex has no new releases but addresses systemic issues (e.g., MCP elicitations).  
  - **Early-Stage**: Pi’s extension service registry and Qwen Code’s daemon mode are emerging priorities.

---

#### **6. Trend Signals**

| Industry Trend                     | Evidence from Communities                                                                 | Developer Value Proposition                          |
|-----------------------------------|------------------------------------------------------------------------------------------|------------------------------------------------------|
| **Agent Autonomy Rising**         | Requests for proactive subagents (Gemini CLI #21968), configurable thinking levels (Pi #3299) | Reduce manual oversight; enable parallel tasking   |
| **Local Inference Adoption**      | Pi’s keyless provider PR, OpenCode’s native runtime, Gemini CLI’s Ollama support         | Lower latency/cost; offline capability               |
| **Security Hardening**            | Pi’s Mistral package pinning, OpenCode’s sandboxing requests, command injection fixes    | Mitigate supply chain risks; enforce policy compliance |
| **IDE Integration Demand**        | OpenCode’s VS Code extension request (80+ 👍), Kimi’s Git attribution PR                  | Seamless workflow embedding                          |
| **Observability Standardization** | Qwen Code’s telemetry spans, OpenAI Codex’s debug dumps, Claude Code’s hook logging     | Debug production agents; trace complex sessions      |

*Strategic Insight:* Developers should prioritize tools aligning with their infrastructure (cloud/local) while monitoring security and observability investments—these will define long-term viability as agents become more autonomous.

--- 

*Prepared by Senior Technical Analyst – AI Developer Tools Ecosystem*

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

**Claude Code Skills Community Highlights Report**  
*Analysis as of 2026-05-14*

---

### 1. Top Skills Ranking

The most actively discussed skills reflect community focus on **document quality**, **enterprise integration**, and **developer tooling**.

- **[skill-quality-analyzer & skill-security-analyzer](https://github.com/anthropics/skills/pull/83)**  
  *Two meta-skills for auditing other skills across structure, security, and documentation quality.*  
  Discussed extensively for improving skill ecosystem reliability; currently open with strong traction as foundational tools.

- **[frontend-design clarity improvements](https://github.com/anthropics/skills/pull/210)**  
  Revises instructions to be more actionable for Claude’s execution within a single conversation. Focuses on reducing ambiguity in UI/UX guidance. Open since January 2026.

- **[AppDeploy full-stack deployment skill](https://github.com/anthropics/skills/pull/360)**  
  Enables direct public deployment of web apps via AppDeploy.ai from Claude Code. Highly relevant for rapid prototyping workflows. Updated May 2026.

- **[SAP-RPT-1-OSS predictive analytics skill](https://github.com/anthropics/skills/pull/181)**  
  Integrates SAP’s open-source tabular foundation model into Claude for enterprise-grade business forecasting. Reflects demand for vertical-specific AI capabilities.

- **[testing-patterns comprehensive guide](https://github.com/anthropics/skills/pull/723)**  
  Covers full testing stack—unit, integration, React component testing—with best practices like Testing Trophy and AAA patterns. Opened March 2026.

- **[masonry-generate-image-and-videos](https://github.com/anthropics/skills/pull/335)**  
  Enables AI-generated image/video creation via Masonry CLI (using Imagen 3.0/Veo 3.1). Targets creative automation use cases.

---

### 2. Community Demand Trends

From open issues, key anticipated directions include:

- **Enterprise workflow integration**: Multiple requests for native support of platforms like ServiceNow, SAP, and AWS Bedrock (#29, #568).
- **Skill discoverability & sharing**: Strong demand for org-wide skill libraries or sharing links (#228); current manual process is seen as friction-heavy.
- **Security & governance**: Concerns about trust boundaries in community skills and need for agent governance patterns (#412, #492).
- **MCP standardization**: Requests to expose skills as standardized MCP endpoints for interoperability (#16), though some note data bloat risks (#1102).

---

### 3. High-Potential Pending Skills

These PRs show high engagement and are likely to merge soon:

- **[AURELION skill suite](https://github.com/anthropics/skills/pull/444)** – A cognitive framework with kernel, advisor, agent, and memory modules for structured knowledge management.
- **[sensory macOS automation](https://github.com/anthropics/skills/pull/806)** – Native AppleScript control via `osascript`, enabling precise Mac interaction without screenshot dependency.
- **[ODT/OpenDocument support](https://github.com/anthropics/skills/pull/486)** – Full ODT/ODS file creation, templating, and conversion to HTML—addressing open-document format gaps.
- **[shodh-memory persistent context](https://github.com/anthropics/skills/pull/154)** – Persistent memory system for cross-conversation continuity among AI agents.

All remain open with recent activity through April–May 2026.

---

### 4. Skills Ecosystem Insight

The community’s most concentrated demand centers on **bridging operational silos between AI capabilities and real-world enterprise workflows**, particularly around secure, shareable, and platform-integrated skill deployment.

---

**Claude Code Community Digest – May 14, 2026**

---

### **Today's Highlights**

Claude Code v2.1.141 introduces the `terminalSequence` field in hook output, enabling richer desktop notifications and terminal control without requiring a controlling TTY. This enhances extensibility for plugin developers and desktop integrations. A surge of feedback highlights strong demand for multi-account support across Claude Desktop and mobile apps, reflecting growing enterprise use cases.

---

### **Releases**

**v2.1.141**  
- Added `terminalSequence` field to hook JSON output, allowing hooks to emit desktop notifications, window titles, and terminal bells independently of terminal ownership.  
- Introduced `CLAUDE_CODE_PLUGIN_PREFER_HTTPS` environment variable to default GitHub plugin clones to HTTPS over SSH when SSH is unavailable.

---

### **Hot Issues**

1. **[#18435](https://github.com/anthropics/claude-code/issues/18435)** – Multi-account switching in Claude Desktop  
   *Why it matters:* Enterprise users need isolated profiles for team or personal accounts. Already has 90+ comments and 500 upvotes.  
   *Reaction:* High engagement signals urgent need as teams scale usage.

2. **[#36151](https://github.com/anthropics/claude-code/issues/36151)** – Multi-account support in Claude Mobile  
   *Why it matters:* Mobile users want same flexibility as desktop. 58 comments, 222 upvotes. Linked to #18435 but platform-specific UX concerns raised.

3. **[#28077](https://github.com/anthropics/claude-code/issues/28077)** – CLI TUI scrollback limitation blocks conversation history review  
   *Why it matters:* Critical usability issue in terminal mode—older messages vanish before context compression. 31 comments, 62 upvotes.

4. **[#47104](https://github.com/anthropics/claude-code/issues/47104)** – Windows 11 Pro: Cowork, Connectors, OAuth all broken post-update  
   *Why it matters:* Widespread regression after auto-update; affects core workflows. 11 comments, 3 upvotes—urgent but limited visibility.

5. **[#58885](https://github.com/anthropics/claude-code/issues/58885)** – Stale-worktree cleanup uses `rm -rf`, risking untracked code loss  
   *Why it matters:* Silent data loss bug in v2.1.141; high severity due to destructive fallback logic. Zero comments but critical impact potential.

6. **[#58881](https://github.com/anthropics/claude-code/issues/58881)** – Plugin lock files leak on session crash  
   *Why it matters:* Accumulating `.in_use/<pid>` files cause disk bloat and stale state. Same author filed related GC issues (#58880, #58882).

7. **[#58625](https://github.com/anthropics/claude-code/issues/58625)** – Payment fails when upgrading Max → Max 20x  
   *Why it matters:* Monetization barrier with unresponsive support. Low engagement (7 votes), suggests systemic payment gateway issue.

8. **[#56142](https://github.com/anthropics/claude-code/issues/56142)** – Mid-session prompt suggestions auto-submit on Enter (Windows)  
   *Why it matters:* Interferes with editing; confusing behavior during active sessions. Recently closed after fix in v2.1.126.

9. **[#58584](https://github.com/anthropics/claude-code/issues/58584)** – Chrome extension + Desktop MCP handshake silently fails  
   *Why it matters:* Browser-MCP integration broken in latest versions; affects web dev toolchains.

10. **[#58887](https://github.com/anthropics/claude-code/issues/58887)** – Session start hooks ignored consistently  
    *Why it matters:* Breaks automation reliability; contradicts documented behavior. First reported today—investigation needed.

---

### **Key PR Progress**

1. **[#58842](https://github.com/anthropics/claude-code/pull/58842)** – Use `git diff --stat` in commit commands to reduce context bloat  
   Reduces token overhead by avoiding full diffs in `/commit`.

2. **[#58744](https://github.com/anthropics/claude-code/pull/58744)** – Add `/teach` command for incremental project knowledge transfer  
   Lets users guide Claude via topic-based learning into `CLAUDE.md`.

3. **[#58646](https://github.com/anthropics/claude-code/pull/58646)** – `git-aware-history`: unify session history across git worktrees  
   Solves fragmentation where deleting a worktree orphans its history.

4. **[#56334](https://github.com/anthropics/claude-code/pull/56334)** – Document Windows Developer Mode requirement for symlinks  
   Addresses silent failures in agent output on Windows.

5. **[#58657](https://github.com/anthropics/claude-code/pull/58657)** – Clarify instruction precedence (user vs project)  
   Improves mental model for `CLAUDE.md` and global settings interaction.

6. **[#58656](https://github.com/anthropics/claude-code/pull/58656)** – Document plugin `bin/` executable support  
   Enables plugins to expose shell commands directly.

7. **[#58655](https://github.com/anthropics/claude-code/pull/58655)** – Fix `clean_gone` positional substitution bug  
   Prevents broken branch parsing due to `$1` stripping.

8. **[#58789](https://github.com/anthropics/claude-code/pull/58789)** – Add troubleshooting section for upstream API errors  
   Guides users through common auth and connectivity issues.

9. **[#58644](https://github.com/anthropics/claude-code/pull/58644)** – Chainable Bash hook example with safety guidance  
   Helps plugin devs avoid unsafe auto-approval of compound commands.

10. **[#58639](https://github.com/anthropics/claude-code/pull/58639)** – Support `AGENTS.md` in review workflows  
    Treats `AGENTS.md` as first-class project instruction alongside `CLAUDE.md`.

---

### **Feature Request Trends**

- **Multi-account/profile management**: Dominant theme across Desktop and mobile; implies need for secure credential isolation and UI switchers.
- **Enhanced TUI/CLI UX**: Scrollback, input history control, and visual clarity in terminal mode are frequently requested.
- **Plugin ecosystem maturity**: Requests for garbage collection, migration hooks, and better lifecycle management indicate need for production-grade tooling.
- **Documentation gaps**: Multiple open docs PRs show missing or outdated guidance around hooks, permissions, and model config.

---

### **Developer Pain Points**

- **Session history fragmentation** across git worktrees frustrates workflow continuity.
- **Silent data loss** from aggressive cleanup logic (e.g., `rm -rf` fallbacks) erodes trust.
- **Hook reliability issues**: Both execution omission (`#58887`) and missing fields (`#58858`) break automation.
- **Authentication confusion**: Mixed signals between API key precedence, org status, and subscription billing cause user churn.
- **Platform-specific quirks**: Windows symlink requirements, macOS IME key handling, and Linux Vertex API edge cases fragment experience.

--- 

*Prepared by Claude Code Technical Analyst – May 14, 2026*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

**OpenAI Codex Community Digest – May 14, 2026**

---

### 1. **Today's Highlights**
No new releases were published in the last 24 hours. However, critical stability and performance issues are actively being reported across CLI, TUI, and desktop app surfaces—especially around workspace dependency management on Windows, memory leaks in Codex.app GUI, and session persistence bugs. Several key PRs address foundational improvements to MCP tool handling, remote environment testing, and Code Mode file tools.

---

### 2. **Releases**
*None in the last 24 hours.*

---

### 3. **Hot Issues** *(Top by engagement)*

1. **[#14860](https://github.com/openai/codex/issues/14860)** – Remote compact task crashes with error in v0.114.0 on Linux (GPT-5.4).  
   *67 comments, 49 👍* — Indicates widespread regression affecting Pro users; context compaction appears unstable post-update.

2. **[#12491](https://github.com/openai/codex/issues/12491)** – Codex.app GUI spawns 1,300+ zombie processes and 37GB memory leak after task completion.  
   *23 comments, 3 👍* — Severe resource leak traced to un-reaped MCP child processes; impacts all macOS/Win users via GUI wrapper.

3. **[#21527](https://github.com/openai/codex/issues/21527)** – Performance complaints: VS Code plugin and desktop app feel “really too slow”.  
   *16 comments, 7 👍* — Suggests systemic latency regressions possibly tied to model routing or UI rendering overhead.

4. **[#5547](https://github.com/openai/codex/issues/5547)** – Request to make `/review` configurable (e.g., limit number of feedback items).  
   *15 comments, 59 👍* — Highly upvoted enhancement showing demand for fine-grained control over AI code review output.

5. **[#21000](https://github.com/openai/codex/issues/21000)** – Codex Web fails to create PRs ("Failed to create PR") after any task.  
   *13 comments, 8 👍* — Blocks core Git integration workflow; likely related to recent auth or API changes.

6. **[#20301](https://github.com/openai/codex/issues/20301)** – Low cache hit rate when using GPT-5.5 in WSL2.  
   *13 comments, 4 👍* — Points to inefficient caching logic with newer models, increasing cost and latency.

7. **[#12862](https://github.com/openai/codex/issues/12862)** – Proposal: Add `--worktree` and `--tmux` flags for one-command isolated sessions.  
   *12 comments, 53 👍* — Strong community push for better dev-environment isolation without manual scripting.

8. **[#16886](https://github.com/openai/codex/issues/16886)** – TUI logs grow unbounded and aren’t rotated on macOS.  
   *8 comments, 2 👍* — File descriptor exhaustion risk in long-running sessions; affects iTerm2 users heavily.

9. **[#20741](https://github.com/openai/codex/issues/20741)** – Desktop app chat histories vanish after update (macOS M5 Max).  
   *7 comments, 5 👍* — Data loss bug post-update suggests broken migration or local DB corruption path.

10. **[#21828](https://github.com/openai/codex/issues/21828)** – Repeated ESC[0 q cursor resets cause flicker in Emacs Eat mode.  
    *6 comments, 0 👍* — Terminal escape sequence handling flaw disrupts editor-native workflows.

---

### 4. **Key PR Progress** *(Most impactful recent changes)*

1. **[#22580](https://github.com/openai/codex/pull/22580)** – Block appserver startup if state DB cannot be opened.  
   Prevents silent failures during initialization due to race conditions or permission issues.

2. **[#22399](https://github.com/openai/codex/pull/22399)** – Route delegated MCP elicitations back to child session.  
   Fixes broken user prompts in `/review` threads where responses were sent to wrong session context.

3. **[#22524](https://github.com/openai/codex/pull/22524)** – POC: Expose gated Code Mode files tools.  
   Introduces native support for file operations (read/write/copy) within Code Mode tool-calls.

4. **[#22523](https://github.com/openai/codex/pull/22523)** – POC: Add Code Mode file broker.  
   Centralizes byte transfer between file refs before provider adapters engage—improves reliability and testability.

5. **[#22579](https://github.com/openai/codex/pull/22579)** – Fix remote environment test fixtures.  
   Ensures tests can properly select both local and remote environments during execution.

6. **[#22402](https://github.com/openai/codex/pull/22402)** – App-server: Select permission profiles by ID.  
   Decouples client-requested profile assignment from raw value replacement, improving security and consistency.

7. **[#22575](https://github.com/openai/codex/pull/22575)** – Support explicit MCP OAuth client IDs.  
   Enables integration with OAuth providers requiring pre-registered client IDs.

8. **[#21392](https://github.com/openai/codex/pull/21392)** – Fix escaped shell args in safety checks.  
   Strengthens command injection safeguards by inspecting parsed argv instead of raw strings.

9. **[#22565](https://github.com/openai/codex/pull/22565)** – Remove deprecated `experimental_use_freeform_apply_patch` config.  
   Cleans up legacy experimental flag now encoded directly into model configuration.

10. **[#22573](https://github.com/openai/codex/pull/22573)** – Simplify TUI startup test coverage.  
   Removes flaky, expensive tests that spawned PTYs; focuses coverage on actual startup paths.

---

### 5. **Feature Request Trends**

- **Configurable `/review` output**: Users want to limit or customize the scope of AI-generated feedback (Issue #5547).
- **Improved terminal/workspace isolation**: Demand for built-in `--worktree` and `--tmux` flags to streamline safe experimentation (Issue #12862).
- **Independent context compaction model**: Suggestion to decouple compaction model from active session model for efficiency (Issue #22486).
- **Better worktree awareness in GUI**: Status bar should display branch/path info and auto-create branches for new worktrees (Issue #22130).
- **Parallel task handling**: Desire to run multiple sub-tasks simultaneously within a single chat session (Issue #22561).

---

### 6. **Developer Pain Points**

- **Windows compatibility gaps**: Multiple reports of white-screen hangs, disabled repair buttons, and unsupported OS warnings on Win10/11 (Issues #19811, #19770, #21650).
- **Session/data persistence failures**: Chat histories disappear or show stale content after updates or restarts (Issues #20741, #21076).
- **Memory/resource leaks**: Zombie processes, unrotated logs, and OOM crashes in long-running sessions (Issues #12491, #16886, #18041).
- **MCP tool schema degradation**: Complex schemas with `$defs/$ref` break tool exposure to models (Issue #13746).
- **Terminal rendering glitches**: Escape sequence conflicts with editors like Emacs Eat disrupt UX (Issue #21828).

--- 

*Generated by OpenAI Codex Community Analyst – May 14, 2026*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

**Gemini CLI Community Digest – May 14, 2026**

---

### **Today's Highlights**

The Gemini CLI team continued refining agent reliability and platform robustness this week. A key focus remains on stabilizing subagent behavior, improving shell command execution, and enhancing internal evaluation infrastructure. Several maintainer-only issues highlight ongoing work around memory systems, AST-aware tooling, and enterprise-grade observability.

---

### **Releases**

No new releases in the last 24 hours.

---

### **Hot Issues**

1. **[#24353](https://github.com/google-gemini/gemini-cli/issues/24353)**: *Robust component-level evaluations*  
   Follow-up to earlier behavioral eval efforts—now with 76 tests generated across six model versions. Maintainers are building a scalable framework for fine-grained agent component testing. High priority due to impact on reliability.

2. **[#22323](https://github.com/google-gemini/gemini-cli/issues/22323)**: *Subagent falsely reports GOAL success after hitting MAX_TURNS*  
   Critical bug where `codebase_investigator` incorrectly marks completion instead of interruption. Users report hidden workflow failures; marked as P1 with two 👍 reactions.

3. **[#26563](https://github.com/google-gemini/gemini-cli/issues/26563)**: *"save_memory" tool not found*  
   Regression affecting memory functionality—users can’t store facts via `/memory add`. Appears related to recent skill/tool refactoring. No fix yet.

4. **[#25166](https://github.com/google-gemini/gemini-cli/issues/25166)**: *Shell hangs showing “Waiting input” after command finishes*  
   Recurring UX flaw where completed shell commands remain active. Three users confirmed; one gave +1. Likely race condition in output polling logic.

5. **[#22745](https://github.com/google-gemini/gemini-cli/issues/22745)**: *Assess AST-aware file reads & code mapping*  
   Strategic investigation into whether parsing-aware tools reduce token noise and improve precision. Could reshape how agents navigate large repos.

6. **[#22232](https://github.com/google-gemini/gemini-cli/issues/22232)**: *Browser agent lock recovery & session takeover*  
   Proposal to replace “fail-fast” browser locking with graceful recovery—critical for persistent sessions in CI or multi-user environments.

7. **[#22093](https://github.com/google-gemini/gemini-cli/issues/22093)**: *(Sub)agents running without permission since v0.33.0*  
   Permission regression: subagents activated despite disabled configs. Suggests config merge logic may have changed unexpectedly.

8. **[#26525](https://github.com/google-gemini/gemini-cli/issues/26525)**: *Add deterministic redaction to Auto Memory logging*  
   Security concern: secrets may leak via logs before redaction completes. Urgent for enterprise compliance; part of broader memory system hardening.

9. **[#23571](https://github.com/google-gemini/gemini-cli/issues/23571)**: *Model creates tmp scripts in random directories*  
   Cleanup burden during commits due to scattered temp files. Affects workspace hygiene—especially painful in monorepos.

10. **[#21968](https://github.com/google-gemini/gemini-cli/issues/21968)**: *Gemini rarely uses custom skills/sub-agents autonomously*  
   Anecdotal but recurring feedback: agents ignore registered capabilities unless explicitly prompted. Hinders adoption of skill libraries.

---

### **Key PR Progress**

1. **[#27024](https://github.com/google-gemini/gemini-cli/pull/27024)**: *Add strict config traversal & partner integration rules to GEMINI.md*  
   Documents new conventions for state lifecycle tracing and immutable client contracts—improving cross-team alignment.

2. **[#26361](https://github.com/google-gemini/gemini-cli/pull/26361)**: *Externalize https-proxy-agent bundle*  
   Fixes proxy support errors by unbundling HttpsProxyAgent—critical for corporate network users.

3. **[#26951](https://github.com/google-gemini/gemini-cli/pull/26951)**: *Implement issue-fixer skill & mandate selection*  
   Adds specialized bot mode for auto-fixing GitHub issues—aligns with internal automation goals.

4. **[#27021](https://github.com/google-gemini/gemini-cli/pull/27021)**: *Prevent credential conflicts on enterprise gateways*  
   Solves auth header clashes when both API keys and gateway tokens are present—important for Vertex AI integrations.

5. **[#26939](https://github.com/google-gemini/gemini-cli/pull/26939)**: *Fix snapshot recovery across sessions*  
   Addresses #26927: ensures context snapshots persist correctly between restarts.

6. **[#25900](https://github.com/google-gemini/gemini-cli/pull/25900)**: *Prefer pwsh.exe over Windows PowerShell 5.1*  
   Resolves quote-handling bugs in shell commands on modern Windows systems.

7. **[#27016](https://github.com/google-gemini/gemini-cli/pull/27016)**: *Expose RAG snippets to local log file*  
   Adds opt-in `logRagSnippets` setting for debugging Code Customization behavior—valuable for enterprise troubleshooting.

8. **[#27020](https://github.com/google-gemini/gemini-cli/pull/27020)**: *Buffer chat compression telemetry*  
   Improves performance by deferring OTel events while preserving Clearcut logging—addresses #23445.

9. **[#26955](https://github.com/google-gemini/gemini-cli/pull/26955)**: *Throttle shell output to prevent UI jank*  
   Caps live buffer at 100k chars and throttles updates to 1s intervals—reduces React churn during long-running commands.

10. **[#26868](https://github.com/google-gemini/gemini-cli/pull/26868)**: *Add system PATH fallback for ripgrep*  
   Ensures `rg` works even if bundled binary is missing—improves portability.

---

### **Feature Request Trends**

- **Enhanced agent autonomy**: Users want subagents and skills to activate proactively (#21968).
- **Improved shell reliability**: Consistent handling of completed commands, aliases, and output buffering (#21461, #25166).
- **AST-aware tooling exploration**: Interest in smarter code navigation using parse trees (#22745, #22746).
- **Enterprise observability**: Demand for debuggable RAG snippets and policy warnings (#17833, #21596, #27016).
- **Browser agent resilience**: Automatic session recovery and lock management for persistent browsing (#22232).

---

### **Developer Pain Points**

- **Inconsistent subagent activation**: Despite configuration, agents sometimes run without user intent (#22093).
- **Shell command quirks**: Commands finish but UI hangs; aliases don’t resolve (#21461, #25166).
- **Memory tool regressions**: `/memory add` fails silently (#26563); Auto Memory has edge cases around patch validation (#26523).
- **Temp file sprawl**: Model-generated scripts scatter across filesystem, complicating cleanup (#23571).
- **Lack of proactive safety**: Agents occasionally suggest destructive ops (e.g., `git reset --force`) without guardrails (#22672).

--- 

*Generated from [google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli)*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

**GitHub Copilot CLI Community Digest – May 14, 2026**

---

### 1. Today’s Highlights

The latest release **v1.0.48-0** introduces critical stability fixes for Windows ARM64 users after prebuilt native modules were mistakenly shipped as x64 instead of ARM64-compatible binaries, causing widespread startup failures. In parallel, improvements to session resumption and MCP tool integration enhance agent reliability and developer productivity. The community continues to push for better observability, cross-platform parity, and enhanced agent tooling—evident in both open issues and closed feedback.

---

### 2. Releases

**v1.0.48-0**
- Fixed: Auto-disables built-in `github-mcp-server` in Azure DevOps-only workspaces during prompt/headless mode.
- Improved: `/ask` no longer prompts for unresponsive follow-ups; skill content excludes YAML frontmatter metadata.

**v1.0.47**
- Added: `/fork` command with optional name parameter; forked sessions display origin in dialog.
- Improved: `--resume` now supports Copilot Cloud Agent sessions without branch changes.
- Fixed: Correct model availability shown to Copilot Max subscribers; added `j/k` navigation in `/diff` view.

**v1.0.47-0**
- Reiterated support for `j/k` key navigation in `/diff` and improved `--resume` behavior for cloud agents.

> Full changelog: [v1.0.48-0](https://github.com/github/copilot-cli/releases/tag/v1.0.48-0), [v1.0.47](https://github.com/github/copilot-cli/releases/tag/v1.0.47)

---

### 3. Hot Issues

| Issue | Summary | Why It Matters | Reaction |
|-------|---------|----------------|----------|
| [#2630](https://github.com/github/copilot-cli/issues/2630) | Custom agents with `mcp-servers` fail to connect in sub-agent or `--prompt` contexts | Breaks core extensibility for advanced workflows using external tools | 9 comments, 0 👍 |
| [#2058](https://github.com/github/copilot-cli/issues/2058) | `/fork` allows branching sessions for side tasks without derailing main objective | Enables multitasking within long-running coding sessions | 9 comments, 7 👍 |
| [#1433](https://github.com/github/copilot-cli/issues/1433) | `COPILOT_CUSTOM_INSTRUCTIONS_DIRS` doesn’t work on NFS-mounted directories | Limits configuration flexibility in networked or containerized environments | 8 comments, 6 👍 |
| [#3304](https://github.com/github/copilot-cli/issues/3304) | Frequent `ERR_HTTP2_INVALID_SESSION` errors disrupt interaction flow | Degrades reliability during extended reasoning tasks | 6 comments, 0 👍 |
| [#3281](https://github.com/github/copilot-cli/issues/3281) | Post-upgrade, CLI fails due to missing native bindings from npm optional dependency bug | Blocks all usage after update; requires manual cleanup | 6 comments, 0 👍 |
| [#3287](https://github.com/github/copilot-cli/issues/3287) | Same native binding error affects session persistence | Confirmed blocker for multiple users post-v1.0.46 | Closed (6 comments, 1 👍) |
| [#3260](https://github.com/github/copilot-cli/issues/3260) | Copy/paste broken over SSH inside tmux on macOS→Windows Server 2025 | Impacts remote development workflows | 4 comments, 0 👍 |
| [#3013](https://github.com/github/copilot-cli/issues/3013) | Hooks don’t apply to background/task agents—potential security gap | Agents bypass safety controls when launched programmatically | 2 comments, 0 👍 |
| [#3083](https://github.com/github/copilot-cli/issues/3083) | `.mcp.json` no longer auto-loaded since v1.0.40 | Breaks repo-level MCP server configuration | 2 comments, 0 👍 |
| [#3309](https://github.com/github/copilot-cli/issues/3309) | Windows ARM64 prebuilds ship x64 `runtime.node`, not ARM64 | Causes immediate crash on ARM64 Windows installs | 0 comments, 0 👍 |

---

### 4. Key PR Progress

| PR | Summary | Impact |
|----|---------|--------|
| [#772](https://github.com/github/copilot-cli/pull/772) | Adds installation script via curl | Simplifies onboarding and reduces setup friction |
| [#2587](https://github.com/github/copilot-cli/pull/2587) | Implements AI-driven issue classification using GitHub Agentic Workflows | Automates triage, improves maintainer efficiency |

> No new open PRs in last 24h; two recently merged.

---

### 5. Feature Request Trends

Developers are increasingly requesting:
- **Enhanced session management**: Features like `/fork`, favorites, and better resume UX (#2058, #3300).
- **MCP server accessibility**: Full visibility and tool access in `/research` and sub-agents (#3302, #2630).
- **Tool-callable context controls**: Ability to invoke `/cwd` or other TUI commands programmatically (#3035).
- **Local web UI**: Browser-based interface akin to `opencode web` for non-TUI workflows (#3301).
- **Cross-platform consistency**: Especially around native module delivery and SSH/tmux compatibility (#3260, #3309).

These reflect a shift toward richer, more observable, and composable AI-assisted coding environments.

---

### 6. Developer Pain Points

Recurring frustrations include:
- **Native binding failures** due to incorrect prebuilt modules (ARM64/x64 mismatch) and npm optional dependency bugs—blocking basic functionality (#3306, #3307, #3309).
- **Inconsistent MCP server loading**: Deprecation warnings followed by silent breakage in config file handling (#3083).
- **Limited agent sandboxing**: Hooks bypassed in background agents create perceived security risks (#3013).
- **SSH/tmux edge cases**: Copy/paste broken in specific remote terminal setups (#3260).
- **Lack of organizational telemetry**: Enterprises lack insight into skill usage and CLI adoption (#3305).

These indicate urgent needs around platform stability, documentation clarity, and enterprise-grade observability.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

**Kimi Code CLI Community Digest – 2026-05-14**

---

### **Today's Highlights**
The Kimi Code CLI team released version 1.44.0, addressing several stability and usability issues. A key focus this week is mitigating regressions introduced in v1.43.0, particularly stderr leaks from MCP subprocesses into the TUI—now being actively fixed. Meanwhile, community feedback highlights growing demand for better internationalization support and session continuity across devices.

---

### **Releases**
**v1.44.0** ([PR #2262](https://github.com/MoonshotAI/kimi-cli/pull/2262))  
- Bumped CLI and kimi-code to 1.44.0  
- Reorganized breaking change documentation under version headers  

> No new releases in the past 24 hours.

---

### **Hot Issues (Top 10)**

1. **[#2268](https://github.com/MoonshotAI/kimi-cli/issues/2268)** – *Insane degradation since model change*  
   Users report severe performance and quality regression after switching to K2.6; tasks that worked well in v1.30.0 with `kimi-for-coding` now fail or hallucinate. 👍1  

2. **[#2077](https://github.com/MoonshotAI/kimi-cli/issues/2077)** – *K2.6 model overloaded – unusable under normal load*  
   Critical bug affecting macOS users: K2.6 constantly retries tool calls and fails under moderate usage. Allegretto members confirm widespread impact. 👍1  

3. **[#2258](https://github.com/MoonshotAI/kimi-cli/issues/2258)** – *The bundled CLI is unavailable*  
   Windows users cannot launch CLI despite subscription; image evidence suggests installer corruption or path misconfiguration.  

4. **[#2267](https://github.com/MoonshotAI/kimi-cli/issues/2267)** – *Free version does not work*  
   Free-tier users get authorization errors even after login—suggests backend API changes broke unauthenticated flows.  

5. **[#2263](https://github.com/MoonshotAI/kimi-cli/issues/2263)** / [#2265](https://github.com/MoonshotAI/kimi-cli/issues/2265) / [#2251](https://github.com/MoonshotAI/kimi-cli/issues/2251) – *MCP stderr leaks into terminal/TUI*  
   Multiple OS platforms affected post-v1.43.0 update; breaks interactive UI rendering and obscures logs. High-priority regression.  

6. **[#2269](https://github.com/MoonshotAI/kimi-cli/issues/2269)** – *Remote Control / Multi-Device Session Handoff*  
   Feature request for cross-device session persistence—critical for developers using laptops, mobiles, and desktops.  

7. **[#2270](https://github.com/MoonshotAI/kimi-cli/issues/2270)** – *Add multi-language (i18n) support for CLI output*  
   First-day issue requesting zh-CN localization; reflects global user base needs beyond English-only UX.  

8. **[#2232](https://github.com/MoonshotAI/kimi-cli/issues/2232)** – *Background tasks need adjustable timeout*  
   Users frustrated by hardcoded timeouts killing long-running tasks prematurely during context estimation.  

9. **[#1925](https://github.com/MoonshotAI/kimi-cli/issues/1925)** – *Support downgrade to K2.5 system prompt*  
   Many find K2.6 less creative and more hallucinatory; nostalgia for prior “personality” in coding assistant behavior.  

10. **[#2178](https://github.com/MoonshotAI/kimi-cli/issues/2178)** – *Blank FileVersionInfo on Windows causes VS Code extension rejection*  
   Metadata corruption in v1.41.0 breaks IDE integration—impacting developer toolchain compatibility.  

---

### **Key PR Progress (Top 10)**

1. **[#2259](https://github.com/MoonshotAI/kimi-cli/pull/2259)** – *Fix: redirect stdio MCP stderr to logs*  
   Directly addresses stderr leak regression by routing MCP server errors to per-server log files instead of polluting TUI.

2. **[#2262](https://github.com/MoonshotAI/kimi-cli/pull/2262)** – *Release: v1.44.0*  
   Coordinated version bump aligning CLI and kimi-code components.

3. **[#2236](https://github.com/MoonshotAI/kimi-cli/pull/2236)** – *Fix: bound broadcast queues & capped web store cache*  
   Prevents memory exhaustion in high-session environments via bounded async queues and LRU-like session caching.

4. **[#2231](https://github.com/MoonshotAI/kimi-cli/pull/2231)** – *Fix: reuse TCPConnector to prevent connection leaks*  
   Improves HTTP efficiency by reusing persistent connections across tool calls and auth flows.

5. **[#2261](https://github.com/MoonshotAI/kimi-cli/pull/2261)** – *Feat: slash command alias resolution*  
   Enhances UX by resolving aliases (e.g., `/help` → `/doc help`) and displaying canonical names in telemetry.

6. **[#2255](https://github.com/MoonshotAI/kimi-cli/pull/2255)** – *Feat: Shift+Enter for newlines*  
   Adds common editor shortcut for line breaks in interactive shell, improving text editing ergonomics.

7. **[#2246](https://github.com/MoonshotAI/kimi-cli/pull/2246)** – *Feat: --prompt-interactive flag*  
   Allows passing initial prompt to shell UI while keeping session open—resolves #2240.

8. **[#2176](https://github.com/MoonshotAI/kimi-cli/pull/2176)** – *Fix(hooks): extract text from ContentPart for UserPromptSubmit*  
   Ensures hooks receive correct prompt text when input contains mixed ContentPart types.

9. **[#2008](https://github.com/MoonshotAI/kimi-cli/pull/2008)** – *Test fix: eliminate flaky approval-wait tests*  
   Stabilizes CI by replacing tight polling loops with proper status wait mechanisms.

10. **[#2256](https://github.com/MoonshotAI/kimi-cli/pull/2256)** – *Feat: official Co-authored-by trailer with GitHub avatar*  
   Adds branded attribution to commits generated by Kimi, enhancing collaboration transparency.

---

### **Feature Request Trends**

- **Internationalization**: Strong push for i18n starting with Simplified Chinese (zh-CN) support (#2270).
- **Session Continuity**: Remote handoff/multi-device sync requested to match modern dev workflows (#2269).
- **Model Flexibility**: Desire to toggle between K2.5 and K2.6 system prompts due to perceived quality drop (#1925).
- **Configurable Timeouts**: Background task timeout adjustment needed to align with actual execution duration (#2232).
- **IDE Integration**: Better Git commit attribution and VS Code compatibility improvements (#2256, #2178).

---

### **Developer Pain Points**

- **MCP Stderr Leaks**: Recurring issue post-v1.43.0 severely degrades TUI experience on Linux/macOS.
- **K2.6 Instability**: New model causes excessive retries, hangs, and hallucinations—many revert to older versions.
- **Windows Installation Failures**: Bundled CLI broken for some Windows users; manual install required (#2258).
- **Free Tier Breakage**: Authentication flow fails for free users, blocking access entirely (#2267).
- **Memory & Connection Leaks**: Unbounded queues and fresh TCP connectors per request cause scalability issues in heavy usage.

--- 

*Generated automatically by AI Technical Analyst – Kimi Code CLI Community Digest*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

**OpenCode Community Digest – May 14, 2026**

---

### **Today's Highlights**
The latest release (v1.14.49) introduces DigitalOcean OAuth and Inference Router support, improves default configuration behavior with auto-generated `opencode.jsonc`, and enables full schema customization out of the box. On the development front, a new native LLM runtime preview is now available for opt-in testing, signaling progress toward performance and reliability enhancements in core execution paths.

---

### **Releases**
**v1.14.49**  
- Added v2 model and provider listing API  
- Integrated DigitalOcean OAuth and Inference Router support (@Spherrrical)  
- Auto-generates global `opencode.jsonc` when no config exists  
- Enabled `customize-opencode` by default with linked full schema  
- Improved autocomplete functionality  

---

### **Hot Issues** *(Top 10 by engagement)*

1. **[#12661](https://github.com/anomalyco/opencode/issues/12661)** – *Agent Teams Equivalent*: Strong community demand (~110 👍) for Claude Code-style multi-agent collaboration features. Suggests a major UX evolution toward team-based coding workflows.
2. **[#11176](https://github.com/anomalyco/opencode/issues/11176)** – *Official VS Code Extension*: High interest (~80 👍) to bring OpenCode into the IDE ecosystem, enabling tighter integration with development environments.
3. **[#2242](https://github.com/anomalyco/opencode/issues/2242)** – *Sandboxed Agent Execution*: Users seek file-system isolation for agents—similar to macOS "seatbelt"—to prevent unintended side effects during autonomous operations.
4. **[#6209](https://github.com/anomalyco/opencode/issues/6209)** – *iTerm Scrolling Bug*: Reports that output scrolls incorrectly in iTerm2, breaking TUI usability for long command outputs.
5. **[#25879](https://github.com/anomalyco/opencode/issues/25879)** – *Missing opencode-cli TUI*: After upgrade from v1.14.30 to v1.14.39, users lost access to the standalone terminal UI; unclear if deprecated or relocated.
6. **[#25168](https://github.com/anomalyco/opencode/issues/25168)** – *Jinja Template Crash*: Post-compaction crashes with LM Studio/Qwen3 due to malformed message structure—blocks reliable usage with certain local models.
7. **[#24316](https://github.com/anomalyco/opencode/issues/24316)** – *Tool Call Progress Hang*: Observed freezing during reasoning/thinking phases with Qwen 3.6 35B—potential inference stack issue.
8. **[#26697](https://github.com/anomalyco/opencode/issues/26697)** – *SSE Stream Early Termination*: Event stream closes after `server.connected`, cutting off real-time updates in headless/server modes.
9. **[#26230](https://github.com/anomalyco/opencode/issues/26230)** – *Double Compaction on Opus 4.7*: Token usage spikes due to redundant context compaction—impacting cost and latency predictability.
10. **[#27096](https://github.com/anomalyco/opencode/issues/27096)** – *Keybinding Regression*: Emacs/Ctrl bindings broken after v1.14.48; appears scancode vs keycode mapping issue affecting non-QWERTY layouts.

---

### **Key PR Progress** *(Top 10 Active Contributions)*

1. **[#27114](https://github.com/anomalyco/opencode/pull/27114)** – *Native LLM Runtime Preview*: Experimental opt-in backend using direct provider APIs instead of AI SDK, aiming to reduce overhead and improve streaming fidelity.
2. **[#26949](https://github.com/anomalyco/opencode/pull/26949)** – *Virtualized Timeline Rendering*: Improves TUI performance by virtualizing session history rows—critical for long-running chats.
3. **[#27347](https://github.com/anomalyco/opencode/pull/27347)** – *models.dev into Core*: Moves external model registry logic into `@opencode-ai/core`, simplifying maintenance and enabling better caching.
4. **[#27403](https://github.com/anomalyco/opencode/pull/27403)** – *Preserve Tool Error Defects*: Ensures tool failures retain original error context for debugging—addresses opacity in error handling.
5. **[#27402](https://github.com/anomalyco/opencode/pull/27402)** – *User Message Access in Hooks*: Exposes user prompt data to `experimental.chat.system.transform`, enabling richer plugin-level message manipulation.
6. **[#27399](https://github.com/anomalyco/opencode/pull/27399)** – *Cancel Queued Prompts*: Adds “Cancel” action in message actions dialog—addresses longstanding UX gap (#20090, #6942).
7. **[#27187](https://github.com/anomalyco/opencode/pull/27187)** – *Italian Localization*: Expands i18n coverage, supporting broader European adoption.
8. **[#27405](https://github.com/anomalyco/opencode/pull/27405)** – *Optional Small Model Fallback*: Makes invalid `small_model` config non-fatal, improving robustness in edge cases.
9. **[#27353](https://github.com/anomalyco/opencode/pull/27353)** – *Stderr Truncation Tracking*: Enhances process monitoring by distinguishing stderr overflows from stdout—useful for debugging long-lived subprocesses.
10. **[#18767](https://github.com/anomalyco/opencode/pull/18767)** – *Mobile Touch Optimization*: Adaptive UI improvements for touchscreen devices without disrupting desktop workflow.

---

### **Feature Request Trends**

- **Multi-Agent Collaboration**: Several issues reference Claude Code’s Agent Teams as a model; community seeks native support for collaborative agent workflows.
- **IDE Integration**: Desire for official VS Code extension to embed OpenCode directly into editors.
- **Enhanced Security & Isolation**: Demand for sandboxing mechanisms to limit agent file system access.
- **Local Image Understanding**: Regression reported in image reading capability (since April 29); previously supported for HTML/image analysis tasks.
- **Headless & Server Reliability**: SSE stream stability and compaction behavior under load are recurring concerns in production use cases.

---

### **Developer Pain Points**

- **Configuration Fragility**: Granular permission rules not respected (e.g., `read: ask` overridden), leading to confusion about security boundaries.
- **Model Configuration Misalignment**: TUI doesn’t reflect config changes (e.g., `openrouter/auto`)—breaks transparency.
- **Regression Bugs**: Keybindings, scrolling, and notification delivery broke in recent minor releases, indicating insufficient regression testing.
- **Performance Variability**: Sessions alternate between fast and unresponsive states; suspected memory or compaction thrashing.
- **Platform-Specific Failures**: Segfaults in NixOS/WSL, RPM update failures on Fedora, and macOS permission quirks highlight inconsistent cross-platform support.
- **Documentation Gaps**: Many features (e.g., additional working directories, MCP toggling) lack clear guidance, increasing support burden.

--- 

*Generated from GitHub activity on anomalyco/opencode – May 14, 2026.*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

**Pi Community Digest – May 14, 2026**

---

### **Today's Highlights**  
The Pi development team has been actively addressing critical stability and compatibility issues, particularly around local model support and terminal input handling. A major security incident involving a compromised Mistral package was mitigated with immediate version pinning (#4432). Several infrastructure improvements were merged to harden dependency management and reduce attack surface.

---

### **Releases**  
*No new releases in the last 24 hours.*

---

### **Hot Issues**  

1. **[#3357](https://github.com/earendil-works/pi/issues/3357)** – *Official local LLM provider extension*  
   Community-driven request to dynamically fetch model lists from `{baseUrl}/models`, enabling seamless integration with llama.cpp, Ollama, LM Studio, and other OpenAI-compatible backends. Highly requested (👍23), seen as foundational for local inference workflows.

2. **[#2023](https://github.com/earendil-works/pi/issues/2023)** – *Add `pi.runWhenIdle()` API*  
   Users need a way to schedule background tasks after agent initialization without disrupting active sessions. Suggested use case: runtime reloads or maintenance hooks via `/reload-runtime`. Still open and under discussion.

3. **[#4251](https://github.com/earendil-works/pi/issues/4251)** – *Kimi K2.6 reasoning_content missing error*  
   Critical bug affecting Claude-like reasoning models when used with OpenCode Go plan. Error occurs because `reasoning_content` isn’t properly mapped in tool call messages—blocks agentic loops. No upvotes yet; urgent fix needed.

4. **[#4338](https://github.com/earendil-works/pi/issues/4338)** – *Agent gets stuck saying "working" but makes no progress*  
   Recurring UX pain point where agents loop indefinitely without output. Likely tied to unhandled async states or retry logic flaws. User reports session resets required.

5. **[#3299](https://github.com/earendil-works/pi/issues/3299)** – *Add “max” thinking level for sync with Opus 4.7*  
   Feature parity request to extend thinking ladder to seven levels (`off/minimal/low/medium/high/xhigh/max`). Closed due to refactor, but likely to resurface post-restructuring.

6. **[#4462](https://github.com/earendil-works/pi/issues/4462)** – *sanitizeSurrogates breaks thinking signatures on replay*  
   After ~20 turns with high-thinking models, surrogate sanitization corrupts reasoning blocks, causing API rejection. Impacts long-running subagent sessions using OAuth providers like Claude Opus 4.7.

7. **[#4323](https://github.com/earendil-works/pi/issues/4323)** – *Wezterm kitty keyboard causes broken Esc key*  
   Terminal-specific regression: `enable_kitty_keyboard = true` mangles escape sequences, printing raw codes instead of triggering commands. Affects keybindings and navigation.

8. **[#4497](https://github.com/earendil-works/pi/issues/4497)** – *Auto-compaction never triggers for local models*  
   Local providers (Ollama/LM Studio) return zero token usage, so compaction logic skips them entirely. Blocks memory management for self-hosted setups despite correct contextWindow settings.

9. **[#4439](https://github.com/earendil-works/pi/issues/4439)** – *Harmony response format corrupts tool names*  
   Models using Harmony format emit tool names with `<|channel|>` tokens that aren’t parsed correctly, leading to “Tool not found” errors. Parser lacks special handling for delimiter tokens.

10. **[#4307](https://github.com/earendil-works/pi/issues/4307)** – *macOS bun binary misses clipboard optional dep*  
    Clipboard image paste fails on macOS because `@mariozechner/clipboard` isn’t bundled in native binaries. Only shell fallback exists, which doesn’t support images—breaks screenshot workflows.

---

### **Key PR Progress**  

1. **[#4498](https://github.com/earendil-works/pi/pull/4498)** – *feat(agent): keyless providers*  
   Introduces `keyless` flag for providers, simplifying local model registration by removing auth boilerplate. Mutual exclusion enforced between `apiKey`, `oauth`, and `keyless`.

2. **[#4496](https://github.com/earendil-works/pi/pull/4496)** – *fix(compaction): auto-compaction for local models*  
   Fixes core bug where zero-usage objects prevent compaction. Adds heuristic fallback using timestamp + message count to trigger compaction even without token data.

3. **[#4482](https://github.com/earendil-works/pi/pull/4482)** – *Address kitty protocol edge-case in Wezterm*  
   Prevents double-Escape parsing by checking for nested sequences. Fixes broken `Esc` key behavior when `enable_kitty_keyboard` is enabled.

4. **[#4463](https://github.com/earendil-works/pi/pull/4463)** – *Fix TUI crash on large markdown*  
   Resolves stack overflow in `markdown.ts` caused by spread operator exceeding JS engine limits (>65k args). Replaces with iterative rendering.

5. **[#4473](https://github.com/earendil-works/pi/pull/4473)** – *Mark inception/mercury-2 thinkingLevelMap.off as null*  
   Ensures these OpenRouter models omit `reasoning` param instead of defaulting to `"none"`, fixing silent failures in thinking-enabled flows.

6. **[#4483](https://github.com/earendil-works/pi/pull/4483)** – *Harden .npmrc & pin @mistralai/mistralai@2.2.1*  
   Mitigates supply chain risk after public report of malicious package version. Disables pre-install scripts and pins vulnerable dependency.

7. **[#4458](https://github.com/earendil-works/pi/pull/4458)** – *Add Windows ARM64 Binary Output*  
   Enables native ARM64 builds for Windows users (requires Bun ≥1.3.10). Expands hardware reach for Apple Silicon Windows machines.

8. **[#4461](https://github.com/earendil-works/pi/pull/4461)** – *Fix image rendering offset in narrow viewports*  
   Corrects vertical positioning logic for images taller than terminal height by removing erroneous cursor movement during Kitty image display.

9. **[#4468](https://github.com/earendil-works/pi/pull/4468)** – *Replace cli-highlight with minimal shim*  
   Reduces bundle size and removes deprecated deps (`chalk`, `supports-color`). Maintains syntax highlighting fidelity with lighter footprint.

10. **[#4470](https://github.com/earendil-works/pi/pull/4470)** – *Vendor proxy agents for Bedrock/Codex*  
    Drops legacy SOCKS/PAC proxy libraries (@tootallnate/quickjs-emscripten etc.), centralizes HTTP(S) resolution, and simplifies maintainability.

---

### **Feature Request Trends**  

- **Local-first LLM Integration**: Dynamic discovery (`/models` endpoint), keyless auth, and robust support for Ollama/LM Studio are top priorities.
- **Thinking/Reasoning Model Support**: Requests to align thinking levels (e.g., adding “max”), fix signature corruption in long sessions, and improve compatibility with Kimi/Claude reasoning formats.
- **Extension Service Registry**: Desire for typed cross-extension services beyond event bus—structured APIs for permissions, tools, and lifecycle hooks.
- **Terminal Compatibility Hardening**: Focus on Kitty protocol nuances across terminals (Wezterm, iTerm, Termux) and reliable clipboard/image handling.
- **Observability & Debugging**: Retry watchdogs, debug dumps, and clearer error contexts for stuck agents or failed compactions.

---

### **Developer Pain Points**  

- **Inconsistent Local Model Behavior**: Auto-compaction and usage tracking fail silently with self-hosted models, requiring manual intervention.
- **Fragile Terminal Input**: Kitty protocol assumptions break in popular terminals like Wezterm, especially with advanced keyboard modes.
- **Memory Leaks in Long Sessions**: Large markdown or repeated tool calls cause stack overflows or unbounded rendering—needs better streaming/chunking.
- **Supply Chain Risks**: Dependency vulnerabilities (e.g., Mistral AI package) expose users to compromised packages if not pinned early.
- **Lack of Typed Extension Contracts**: Event bus-based comms make it hard to enforce interfaces between extensions; type safety erodes over time.

--- 

*Generated by Pi Community Digest Bot – Powered by GitHub Activity Analysis*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

**Qwen Code Community Digest – May 14, 2026**

---

### 1. **Today's Highlights**
The Qwen Code team released v0.15.11 with performance optimizations to session metadata handling and improved test stability. A major architectural discussion on daemon mode (qwen serve) advanced into implementation phase with PR #4113. Several critical bugs around context window misreporting, tool output failures, and command substitution security were reported and are under active triage.

---

### 2. **Releases**

**v0.15.11**  
- Performance: Bounded session-list metadata reads to head/tail 64KB and introduced lazy message counting to reduce memory pressure.
- Testing: Stabilized main branch end-to-end tests for reliability in CI/CD pipelines.
🔗 [Release Notes](https://github.com/QwenLM/qwen-code/releases/tag/v0.15.11)

> Note: Preview and nightly builds contain identical changes but serve different release channels.

---

### 3. **Hot Issues**

| Issue | Summary | Impact & Reaction |
|------|--------|------------------|
| [#3730](https://github.com/QwenLM/qwen-code/issues/3730) | Auto-task termination without user input after v0.15.x upgrade | Users report unexpected interruptions during long-running tasks; 7 comments seeking clarification or fix |
| [#3803](https://github.com/QwenLM/qwen-code/issues/3803) | Daemon mode design proposal (14-chapter series) | Highlighted as roadmap milestone; 4 comments discussing feasibility; 👍1 upvote |
| [#4035](https://github.com/QwenLM/qwen-code/issues/4035) | DashScope-intl endpoint compatibility failure due to undici dispatcher | Blocks international users; 4 comments + 👍2 indicating urgency |
| [#4076](https://github.com/QwenLM/qwen-code/issues/4076) | Tool calls returning empty responses despite correct setup | Reported by Windows user with full config details; 3 comments, 👍1 |
| [#4089](https://github.com/QwenLM/qwen-code/issues/4089) | Context window ignored in settings.json (shows 1M tokens instead of configured 262K) | Directly impacts model behavior; 3 comments, no upvotes yet |
| [#4111](https://github.com/QwenLM/qwen-code/issues/4111) | SessionStart hook not injecting additionalContext/systemMessage into session | Internal Alibaba team reporting integration break; 2 comments |
| [#4098](https://github.com/QwenLM/qwen-code/issues/4098) | `/compress` command fails to summarize history when threshold exceeded | Core session management regression suspected; 2 comments |
| [#4093](https://github.com/QwenLM/qwen-code/issues/4093) | Command substitution (`$()`) not consistently blocked in shell commands | Security concern raised by huww98; inconsistent enforcement noted |
| [#4128](https://github.com/QwenLM/qwen-code/issues/4128) | Nightly build release pipeline failed today | Automated workflow failure; no user impact yet |
| [#3706](https://github.com/QwenLM/qwen-code/issues/3706) | Batch deletion of sessions requested | Feature request from maintainer qqqys; considered useful UX enhancement |

---

### 4. **Key PR Progress**

| PR | Description | Status |
|----|-------------|--------|
| [#4113](https://github.com/QwenLM/qwen-code/pull/4113) | Refactor: enforce one daemon per workspace architecture | Open |
| [#4102](https://github.com/QwenLM/qwen-code/pull/4102) | Post-promote stream redirect for background task outputs | Open |
| [#4125](https://github.com/QwenLM/qwen-code/pull/4125) | Trim old terminal results, show newest first in task UI | Open |
| [#4126](https://github.com/QwenLM/qwen-code/pull/4126) | Unify telemetry span creation for hierarchical tracing | Open |
| [#4123](https://github.com/QwenLM/qwen-code/pull/4123) | Add `/goal` command with judge-driven turn continuation | Open |
| [#3981](https://github.com/QwenLM/qwen-code/pull/3981) | Fix async exit bug in search input on empty query (Windows Backspace) | Open |
| [#4127](https://github.com/QwenLM/qwen-code/pull/4127) | Memory-based chat compression to prevent heap OOM | Open |
| [#4064](https://github.com/QwenLM/qwen-code/pull/4064) | Add file restoration support to `/rewind` | Open |
| [#4120](https://github.com/QwenLM/qwen-code/pull/4120) | Built-in status line presets with interactive dialog | Open |
| [#4097](https://github.com/QwenLM/qwen-code/pull/4097) | Hierarchical session tracing with proper parent-child spans | Open |

---

### 5. **Feature Request Trends**

- **Daemon Mode & Hosted Deployment**: Strong push for production-grade `qwen serve` with persistent workspace isolation (linked to #3803).
- **Authentication Simplification**: Multiple requests to improve custom API key setup flow and deprecate complex OAuth (e.g., OpenRouter) (#3582, #4108).
- **Headless Safety Controls**: Demand for configurable execution budgets in non-interactive modes to prevent runaway agents (#4103).
- **IDE Integration Enhancements**: Requests for better context preservation, rewind warnings, and structured output documentation (#4051, #4122).
- **Telemetry Hardening**: Production-ready OpenTelemetry configuration and trace correlation improvements (#3731).

---

### 6. **Developer Pain Points**

- **Context Window Misconfiguration**: Users report settings.json values being ignored (Issue #4089), leading to unexpected token limits.
- **Tool Output Nullification**: Despite valid MCP/config setups, tools return empty content (Issue #4076, #4114).
- **Inconsistent Security Policies**: Command substitution is sometimes allowed, sometimes blocked—opaque behavior creates risk (Issue #4093).
- **Memory Pressure in Long Sessions**: Heap exhaustion occurs even with compaction enabled (addressed in PR #4127 but still emerging).
- **Authentication Complexity**: Custom API key flows require manual `settings.json` edits and provider docs navigation (Issue #3582).

--- 

*Prepared by Technical Analyst – AI Developer Tools Team*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/DenisZheng/agents-radar).*