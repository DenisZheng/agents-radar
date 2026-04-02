# AI CLI Tools Community Digest 2026-04-02

> Generated: 2026-04-02 00:20 UTC | Tools covered: 7

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

**Cross-Tool AI CLI Ecosystem Comparison Report – April 2, 2026**

---

### **1. Ecosystem Overview**
The AI developer CLI landscape remains highly competitive and rapidly evolving, with all major vendors—Anthropic (Claude Code), OpenAI (Codex), Google (Gemini CLI), GitHub (Copilot CLI), Moonshot AI (Kimi Code), Anomaly Co (OpenCode), and Alibaba (Qwen Code)—focusing on agentic workflow reliability, plugin extensibility, and terminal-native UX. A recurring theme is the transition toward Rust or Bun runtimes for performance and safety, while token accounting transparency and cross-platform stability have emerged as critical pain points affecting enterprise adoption.

---

### **2. Activity Comparison**

| Tool           | Issues (Top 10 Engagement) | PRs (Top 10 Impact) | Releases (Last 24h)       |
|----------------|----------------------------|---------------------|-----------------------------|
| Claude Code    | 10                         | 10                  | v2.1.90 (stable)            |
| OpenAI Codex   | 10                         | 10                  | rust-v0.119.0-alpha.2       |
| Gemini CLI     | 10                         | 10                  | v0.37.0-preview.0           |
| Copilot CLI    | 10                         | 0                   | v1.0.16-0 (stable)          |
| Kimi Code      | 10                         | 10                  | v1.29.0 (stable)            |
| OpenCode       | 10                         | 10                  | v1.3.13 (minor bump)        |
| Qwen Code      | 10                         | 10                  | v0.14.0-preview.4 / .3      |

*Note: All tools maintain active issue/PR pipelines; only Copilot CLI reported no new PRs in last 24h.*

---

### **3. Shared Feature Directions**

- **Token & Session Transparency**: All tools face demand for granular usage accounting (Claude #16157, Codex #14593, OpenCode #4659).
- **MCP Plugin Reliability**: Dynamic reload (#1708/Kimi), config management (`mcp.config.*`/Copilot), and permission handling (#2782/Qwen) are universal needs.
- **Terminal UX Consistency**: Alt-screen behavior (#2334/Copilot), scroll jank (#24470/Gemini), and rendering glitches (#1681/Kimi) span multiple platforms.
- **Agent Memory Management**: Sliding windows (#4659/OpenCode), compression (#24483/Gemini), and persistent context (#22819/Gemini) reflect shared architectural challenges.
- **Cross-Platform File Handling**: CRLF corruption (#1693/Kimi), path parsing (#2780/Qwen), and sandbox failures (#24365/Gemini) indicate infrastructure gaps.

---

### **4. Differentiation Analysis**

- **Claude Code**: Leads in agent orchestration (hook defer, EvalView plugin) and security guidance—targets power users needing auditability and enterprise-grade tooling. Heavy investment in open-sourcing core components.
- **Codex**: Focuses on IDE parity and multimodal voice input; Rust migration signals long-term performance goals but lags in macOS Intel support and real-time observability.
- **Gemini CLI**: Prioritizes memory services and skill extraction; strong on functional correctness (e.g., ContextCompressionService) but struggles with Windows sandbox reliability.
- **Copilot CLI**: Tight GitHub integration drives enterprise focus—custom slash commands and org model visibility dominate requests, yet suffers from terminal UX regressions.
- **Kimi Code**: Rapidly modernizing stack (Python→Bun+TypeScript) and emphasizing session hygiene (/title command, paste thresholds); however, AGENTS.md compliance and model integration remain weak.
- **OpenCode**: Architectural rigor via Effect system and snapshot isolation; excels in concurrent session safety but lacks vision/multimodal support and free-tier clarity.
- **Qwen Code**: Emphasizes multi-language reports and ACP reconnection logic; model availability (Qwen3.6) and quota transparency are key differentiators—and current liabilities.

---

### **5. Community Momentum & Maturity**

- **Most Active Communities**: **Claude Code** and **OpenAI Codex** lead in engagement volume (1,400+ comments on critical issues). Both show rapid iteration cycles with daily alpha/preview releases.
- **Rapid Iterators**: **Kimi Code** demonstrates aggressive refactoring velocity (full rewrite in progress) and weekly stable releases. **Gemini CLI** and **OpenCode** deliver high-impact bug fixes within hours of report.
- **Maturity Signals**: **Copilot CLI** and **Qwen Code** exhibit slower feature cadence but deep enterprise integrations (OAuth device flow, Coding Plan auth). **Claude Code’s** open-source push suggests maturing governance model.

---

### **6. Trend Signals**

- **Runtime Shift to Bun/Rust**: Kimi (Bun), Codex (Rust), and Claude (Rust reimplementation) converge on modern runtimes for better concurrency and type safety.
- **Enterprise Trust Gap**: Token burn regressions (#16157) and opaque billing (#41930) erode confidence—expect mandatory usage dashboards and SLA commitments.
- **Agent Safety Overhaul**: Tools must enforce AGENTS.md constraints (#1596/Kimi), prevent destructive ops (#31633/Claude), and improve subagent mode awareness (#23582/Gemini).
- **IDE-First Expectations**: Inline diffs, LSP integration, and mobile-to-desktop control (#9224/Codex) signal CLI must match IDE polish or risk obsolescence.
- **Free Tier Ambiguity**: Confusion around "free usage limits" (#15585/OpenCode, #2800/Qwen) will drive unified pricing communication standards industry-wide.

--- 

*Prepared for technical leadership assessing AI CLI tool strategy and roadmap alignment.*

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

**Claude Code Skills Community Highlights Report**  
*As of 2026-04-02*

---

### 1. **Top Skills Ranking**

Despite the data showing zero comments on all listed PRs, activity volume is inferred from recency, author reputation, and technical specificity. The most active submissions reflect strong community interest in document processing, AI agent memory, and quality engineering.

- **[document-typography](https://github.com/anthropics/skills/pull/514)** (PR #514)  
  Prevents typographic flaws in AI-generated docs: orphan word wrap, widow paragraphs, numbering misalignment. Targets a universal pain point in automated writing. *Status: Open*

- **[shodh-memory](https://github.com/anthropics/skills/pull/154)** (PR #154)  
  Persistent context system for AI agents using `proactive_context` calls to maintain state across conversations—critical for multi-turn workflows. *Status: Open*

- **[skill-quality-analyzer](https://github.com/anthropics/skills/pull/83)** (PR #83)  
  Meta-skill evaluating Skills across structure, security, performance, usability, and documentation—enabling self-improving Skill ecosystems. *Status: Open*

- **[testing-patterns](https://github.com/anthropics/skills/pull/723)** (PR #723)  
  Full-stack testing guidance including Testing Trophy, React Testing Library, unit/integration strategies, and what *not* to test. *Status: Open*

- **[plan-task](https://github.com/anthropics/skills/pull/522)** (PR #522)  
  Persists multi-step plans and progress via Markdown files in `.claude/tasks/`—enabling session continuity for complex projects. *Status: Open*

- **[ODT skill](https://github.com/anthropics/skills/pull/486)** (PR #486)  
  Creates, fills templates in, and parses OpenDocument Text (.odt) files—bridging LibreOffice/OnlyOffice workflows with Claude Code. *Status: Open*

---

### 2. **Community Demand Trends**

From open Issues, recurring themes indicate where future Skills are expected:

- **AI Agent Memory & Context Persistence**: Multiple users report losing context between sessions; demand for native memory layers (e.g., shodh-memory) is high.
- **Enterprise Integration**: Bedrock support (#29), org-wide sharing (#228), and SSO compatibility (#532) highlight need for broader deployment options.
- **Skill Reliability & Validation**: Duplicate skills from plugin installs (#189), frontmatter validation bugs (#36), and description parsing failures show friction in Skill creation/deployment.
- **Security & Trust Boundaries**: Concerns about `anthropic/` namespace spoofing (#492) underscore need for official verification mechanisms.
- **Testing & Quality Automation**: Requests for test generation and CI/CD integration suggest appetite for robust QA Skills beyond manual review.

---

### 3. **High-Potential Pending Skills**

These actively developed Skills show strong signals of imminent merge:

- **Quality Playbook** (#659): Revives traditional quality engineering with AI-powered checks—addresses gap in systematic QA automation.
- **Pre-Deployment Validator** (#740): Likely part of a suite including UX mapping and algorithmic art—targets DevOps-to-AI pipeline integration.
- **SAP-RPT-1-OSS Predictor** (#181): Enterprise-grade predictive analytics for SAP systems—suggests expansion into vertical-specific AI tools.
- **Buildr (Telegram Bridge)** (#419): Real-time session control via messaging app—indicates move toward external orchestration interfaces.

All remain open as of reporting date with recent updates through March 31, 2026.

---

### 4. **Skills Ecosystem Insight**

The community’s concentrated demand centers on **bridging gaps between AI output and production-ready artifacts**, particularly persistent context, document fidelity, and automated quality enforcement.

--- 

*Report compiled from anthropics/skills repository activity (GitHub API snapshot: 2026-04-02).*

---

**Claude Code Community Digest – April 2, 2026**

---

### **Today's Highlights**  
Claude Code released v2.1.90 with interactive `/powerup` lessons and improved offline support via `CLAUDE_CODE_PLUGIN_KEEP_MARKETPLACE_ON_FAILURE`. Meanwhile, a surge of critical issues (#16157, #38335) reveals widespread token overconsumption on Max plans since late March—prompting urgent community scrutiny and calls for transparency from Anthropic.

---

### **Releases**  
**v2.1.90**  
- Added `/powerup`: Interactive guided lessons with animated demos to onboard users faster.  
- Introduced `CLAUDE_CODE_PLUGIN_KEEP_MARKETPLACE_ON_FAILURE=1` to preserve cached plugins during failed `git pull` (critical for air-gapped environments).  
- Protected `.husky` files from deletion.  

**v2.1.89**  
- Enabled `"defer"` decision in `PreToolUse` hooks—allowing headless sessions to pause/resume via `-p --resume` for dynamic reevaluation.  
- Added `CLAUDE_CODE_NO_FLICKER=1` for flicker-free alt-screen rendering using virtualization tech.

---

### **Hot Issues** *(Top 10 by engagement)*  
1. **[#16157](https://github.com/anthropics/claude-code/issues/16157)** – *Max subscribers instantly hitting usage limits* (1,422+ comments, 645 👍). Users report 1–2 prompts exhausting 5-hour quotas—massive regression suspected post-March 23.  
2. **[#38335](https://github.com/anthropics/claude-code/issues/38335)** – *Abnormal session limits since Mar 23* (313 comments, 257 👍). Cross-platform reports confirm rapid quota drain even with minimal input.  
3. **[#41814](https://github.com/anthropics/claude-code/issues/41814)** – *Messages disappear after v2.1.89 update* (23 comments, 47 👍). UI regression breaks visibility mid-conversation—likely side effect of hook defer logic.  
4. **[#42052](https://github.com/anthropics/claude-code/issues/42052)** – *Max 20x plan: 100% usage after 2 hours* (12 comments, 8 👍). Light workloads now deplete tokens 5x faster than historical norms.  
5. **[#41788](https://github.com/anthropics/claude-code/issues/41788)** – *Max 20 plan exhausted in ~70 mins post-v2.1.89* (11 comments, 10 👍). Direct correlation with recent auto-update suggests version-specific bug.  
6. **[#38350](https://github.com/anthropics/claude-code/issues/38350)** – *Inflated rate limit consumption on macOS/Opus 4.6* (43 comments, 39 👍). Token accounting appears broken at API layer.  
7. **[#41930](https://github.com/anthropics/claude-code/issues/41930)** – *Widespread cost regression since Mar 23 – no comms from Anthropic* (6 comments, 10 👍). Paid developer voices frustration over lack of official notice.  
8. **[#40652](https://github.com/anthropics/claude-code/issues/40652)** – *CLI mutates prompt cache via billing hash substitution* (6 comments, 3 👍). Breaks long-session efficiency permanently—severe backend bug.  
9. **[#41506](https://github.com/anthropics/claude-code/issues/41506)** – *Token usage 3–5x higher since Mar 28–29* (8 comments, 9 👍). Linux/WSL users confirm spike without config changes.  
10. **[#41504](https://github.com/anthropics/claude-code/issues/41504)** – *Max plan quota exhausted twice in one day* (8 comments, 10 👍). Highlights loss of predictability for power users.

---

### **Key PR Progress** *(Top 10)*  
1. **[#41518](https://github.com/anthropics/claude-code/pull/41518)** – Fully open-sourcing Claude Code: Extracts 1,906 TypeScript files from `cli.js.map`, enables Bun-based builds with missing-module stubs.  
2. **[#41661](https://github.com/anthropics/claude-code/pull/41661)** – Adds 14 production-ready plugins: Security scanners, performance optimizers, fullstack automation tools.  
3. **[#42245](https://github.com/anthropics/claude-code/pull/42245)** – EvalView plugin: Enables AI agent regression testing via structural diffing of tool outputs vs golden baselines.  
4. **[#42205](https://github.com/anthropics/claude-code/pull/42205)** – Fixes Hookify matcher parsing: Trims spaces around tool names (e.g., `Edit space-or Write`) to prevent false negatives.  
5. **[#42162](https://github.com/anthropics/claude-code/pull/42162)** – Solves plugin import paths when installed via cache: Uses relative imports for `core/` modules.  
6. **[#41568](https://github.com/anthropics/claude-code/pull/41568)** – Rust reimplementation: 16-crate workspace with full QueryEngine, TUI, and streaming—claims 3x perf gain over Node.js.  
7. **[#42086](https://github.com/anthropics/claude-code/pull/42086)** – Docs: Adds README for `security-guidance` plugin covering 9 threat patterns (injection, misconfigs, etc.).  
8. **[#42197](https://github.com/anthropics/claude-code/pull/42197)** – UX refinement: Removes "maximalist chaos" from tone options in Design Thinking guidance.  
9. **[#42265](https://github.com/anthropics/claude-code/pull/42265)** – Modernizes install docs: Replaces deprecated npm with `curl | bash`/`irm | iex` per main README.  
10. **[#31633](https://github.com/anthropics/claude-code/pull/31633)** – Safe-edit-guard: Blocks Edit/Write on unread files to prevent regressions from blind edits.

---

### **Feature Request Trends**  
- **Transparent Usage Accounting**: Users demand real-time, granular token-by-tool breakdowns (e.g., per MCP call, file read).  
- **Offline Plugin Caching**: Persistent marketplace access without network (already partially addressed in v2.1.90).  
- **Session Persistence Across Renames**: Preserve context when project paths change (PR #39148 explores this).  
- **Open Source Availability**: Multiple PRs aim to unlock source code for auditability and customization.  
- **Better Error Clarity**: Rate limit errors should distinguish between user error, API bugs, or billing issues.

---

### **Developer Pain Points**  
- **Unpredictable Token Burn**: Core frustration centers on sudden, unexplained quota exhaustion—especially after stable months of use. No clear root cause yet; possible API-side metering bug or silent policy change.  
- **Version-Specific Regressions**: v2.1.89’s hook defer feature appears linked to UI/metering bugs (#41814, #41788).  
- **Lack of Communication**: High-paying users express distrust due to silence from Anthropic about the March 23 incident.  
- **Plugin Ecosystem Fragmentation**: Mixed signals—official repos vs community plugins create confusion (e.g., security-guidance plugin needs better docs).  
- **Debugging Overhead**: Cache corruption (#40652) and memory leaks (#41342) force manual workarounds instead of productive coding.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

**OpenAI Codex Community Digest – April 2, 2026**

---

### **Today's Highlights**
The Codex CLI team released `rust-v0.119.0-alpha.2`, continuing incremental improvements to the Rust-based core engine. A major community concern remains unresolved: rapid token burn during extended agentic workflows (#14593), with over 140 users upvoting and 369 comments highlighting its impact on cost-efficiency. Concurrently, significant architectural refactoring continues—MCP extraction into a dedicated crate (#15919) and tool spec modularization signal growing infrastructure maturity.

---

### **Releases**
- **rust-v0.119.0-alpha.2**: Internal alpha update; no public changelog provided. Part of ongoing stabilization ahead of stable Rust runtime rollout.

---

### **Hot Issues**

| Issue | Summary | Impact & Reaction |
|-------|---------|-------------------|
| [#14593](https://github.com/openai/codex/issues/14593) | Rapid token consumption in long-running agent sessions without clear visibility or throttling. | **Top concern**: 369 comments, 144 👍. Users report unexpected billing spikes; urgent need for per-session budget controls or real-time usage dashboards. |
| [#10410](https://github.com/openai/codex/issues/10410) | Lack of macOS Intel (x86_64) support in Codex Desktop App. | 226 👍, 154 comments. Critical blocker for legacy Mac users post-Apple Silicon transition; universal binary requested since Feb 2026. |
| [#8745](https://github.com/openai/codex/issues/8745) | LSP auto-detect/install for CLI to enhance code intelligence. | 222 👍, 44 comments. Enables richer context-aware suggestions across languages; aligns CLI with IDE-level experience. |
| [#2998](https://github.com/openai/codex/issues/2998) | IDE-integrated diff/approval UI (beyond terminal). | 126 👍, 42 comments. Seamless inline review UX expected by Cursor/VS Code users; currently fragmented between TUI and app. |
| [#9224](https://github.com/openai/codex/issues/9224) | Remote control via ChatGPT mobile app → desktop CLI. | 237 👍, 34 comments. Mobile-to-desktop workflow integration highly desired; referenced in related discussion #9200. |
| [#15764](https://github.com/openai/codex/issues/15764) | VS Code extension causes >100% CPU after v26.313.41514. | Regression reported March 25; high resource usage blocks adoption on Apple Silicon. |
| [#5576](https://github.com/openai/codex/issues/5576) | TUI output doesn’t reflow after terminal resize. | Affects usability in dynamic terminals; low engagement but UX friction noted. |
| [#13018](https://github.com/openai/codex/issues/13018) | Ability to permanently delete threads (not just archive). | 38 👍, 5 comments. Data hygiene pain point—users want full thread lifecycle control. |
| [#2788](https://github.com/openai/codex/issues/2788) | History-linked checkpoints for file state restoration. | 37 👍, 4 comments. Enables safe backtracking in complex multi-file edits; key for agent reliability. |
| [#16466](https://github.com/openai/codex/issues/16466) | Hooks lack stable bundle/plugin context for asset access. | 2 comments so far, but signals need for better plugin isolation/reusability in CLI hooks ecosystem. |

---

### **Key PR Progress**

| PR | Summary |
|----|--------|
| [#15919](https://github.com/openai/codex/pull/15919) | Extracts MCP runtime into standalone `codex-mcp` crate—improving modularity and enabling reuse across client implementations. |
| [#16482](https://github.com/openai/codex/pull/16482) | Removes redundant `client_common` tool re-exports, tightening crate boundaries post-refactoring. |
| [#16370](https://github.com/openai/codex/pull/16370) / [#16462](https://github.com/openai/codex/pull/16462) | Fixes Guardian event ordering for CommandExecution items, critical for frontend rendering of auto-review UIs. |
| [#16055](https://github.com/openai/codex/pull/16055) | Ensures forked agents inherit parent model settings (`model`, `reasoning_effort`), preserving consistency in multi-agent rollouts. |
| [#13637](https://github.com/openai/codex/pull/13637) | Preserves fork references across replay/resume, preventing history duplication and improving thread management. |
| [#15591](https://github.com/openai/codex/pull/15591) | Adds turn-level telemetry events for deeper observability into agent behavior and performance. |
| [#16477](https://github.com/openai/codex/pull/16477) | Moves pure tool discovery helpers to `codex-tools`, decoupling spec logic from core runtime. |
| [#16396](https://github.com/openai/codex/pull/16396) | Implements realtime WebRTC audio bridge for external PCM input—foundational for voice-first workflows. |
| [#16480](https://github.com/openai/codex/pull/16480) | Treats `refresh_interval_ms=0` as "no auto-refresh" for provider auth, aligning CLI with backend semantics. |
| [#15914](https://github.com/openai/codex/pull/15914) | Begins migrating runtime permissions to `PermissionProfile`, enabling finer-grained, persistent policy controls. |

---

### **Feature Request Trends**

1. **Enhanced IDE Integration**: Inline diff approval, LSP support, and sound notifications dominate requests (#2998, #8745, #3962).
2. **Cross-Platform Consistency**: macOS Intel support (#10410) and Windows terminal scrolling fixes (#16176) highlight platform parity gaps.
3. **User Control & Safety**: Thread deletion (#13018), hook context stability (#16466), and approval follow-up responsiveness (#16339) reflect demand for greater agency.
4. **Voice & Multimodal Input**: Voice dictation/mic input (#3000, #16404) remains stalled despite prior closure of #418.
5. **Observability & Debugging**: Turn-level telemetry (#15591), subagent analytics (#15915), and checkpointing (#2788) indicate maturation toward production-grade agent tooling.

---

### **Developer Pain Points**

- **Token Efficiency**: Uncontrolled token burn in agent loops (#14593) is the most severe operational risk cited.
- **CLI-TUI Usability**: Terminal resizing bugs (#5576), missing voice transcription (#16404), and delayed approval feedback (#16339) degrade trust in CLI reliability.
- **Extension Performance**: High CPU/memory usage in VS Code extension regressions (#15764, #16231) hinder daily use, especially on Apple Silicon.
- **Sandbox Limitations**: Linux sandbox failures under AppArmor (#15057) restrict deployment flexibility for enterprise users.
- **Plugin Fragmentation**: Hooks lack shared asset paths (#16466), and MCP tool resolution issues (#16390) complicate automation scripts.

--- 

*Generated automatically for the OpenAI Codex developer community.*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

**Gemini CLI Community Digest – April 2, 2026**

---

### 1. **Today's Highlights**
The Gemini CLI team released v0.37.0-preview.0, centralizing test agents into `test-utils` for reuse and reverting default agent activation to improve stability. Meanwhile, a surge of UI/UX feedback highlights growing user concerns around terminal rendering, scroll behavior, and sandbox reliability—particularly on Windows—with several high-priority fixes underway.

---

### 2. **Releases**

**v0.37.0-preview.0**  
- Centralized test agents into `test-utils` for improved code reuse (#23616)  
- Reverted default agent activation due to configuration issues (#23672)  
- Fixed minor plan-related telemetry (`tel`) handling  

*No new stable releases in the last 24 hours.*

---

### 3. **Hot Issues**

| # | Summary | Why It Matters | Community Reaction |
|---|--------|----------------|--------------------|
| [22745](https://github.com/google-gemini/gemini-cli/issues/22745) | Investigate AST-aware file operations to reduce token noise and improve precision | Could significantly enhance codebase navigation efficiency | 4 comments, no thumbs |
| [24434](https://github.com/google-gemini/gemini-cli/issues/24434) | Extraneous empty lines in terminal history output disrupt readability | Affects core UX during tool execution | 2 comments |
| [22863](https://github.com/google-gemini/gemini-cli/issues/22863) | Model generates unsafe object clones violating type safety | Risks runtime errors and poor maintainability | 2 comments |
| [22267](https://github.com/google-gemini/gemini-cli/issues/22267) | Browser Agent ignores `settings.json` overrides like `maxTurns` | Breaks user customization expectations | 2 comments |
| [23582](https://github.com/google-gemini/gemini-cli/issues/23582) | Subagents unaware of active approval modes (e.g., Plan Mode) | May lead to conflicting tool usage or failed executions | 👍1 |
| [22819](https://github.com/google-gemini/gemini-cli/issues/22819) | Need global vs. project memory routing clarity | Critical for persistent, context-aware agent behavior | 👍1 |
| [22809](https://github.com/google-gemini/gemini-cli/issues/22809) | Main agent lacks prompts to proactively use memory | Limits long-term user preference retention | 👍1 |
| [22323](https://github.com/google-gemini/gemini-cli/issues/22323) | Subagent falsely reports success after hitting turn limits | Masks interruptions and confuses users | 👍2 |
| [24365](https://github.com/google-gemini/gemini-cli/issues/24365) | `"GeminiSandbox.exe ENOENT"` blocks functionality on Windows | Major blocker for Windows users relying on sandboxed execution | Fresh issue (updated today) |
| [24470](https://github.com/google-gemini/gemini-cli/issues/24470) | Scroll jank and screen flashes in long chat histories | Degrades usability in extended sessions | 0 comments but visually reported |

---

### 4. **Key PR Progress**

| # | Title | Impact |
|---|------|--------|
| [24483](https://github.com/google-gemini/gemini-cli/pull/24483) | Land ContextCompressionService | Introduces upstreamed context compression to reduce LLM token pressure |
| [24457](https://github.com/google-gemini/gemini-cli/pull/24457) | Fix unsafe cloning + add eval | Addresses type-safety regression from model outputs |
| [24449](https://github.com/google-gemini/gemini-cli/pull/24449) | Fix vertical spacing in history view | Resolves visual clutter around tool outputs |
| [24475](https://github.com/google-gemini/gemini-cli/pull/24475) | Hide shell exit errors from user | Improves perceived stability by filtering internal noise |
| [24478](https://github.com/google-gemini/gemini-cli/pull/24478) | Add `/reload` command | Streamlines state refresh across agents, skills, and MCP servers |
| [24476](https://github.com/google-gemini/gemini-cli/pull/24476) | Fix Windows CI test execution | Unblocks reliable cross-platform testing |
| [24460](https://github.com/google-gemini/gemini-cli/pull/24460) | Enhance sandbox usability | Adds proactive permission hints and better denial detection |
| [24480](https://github.com/google-gemini/gemini-cli/pull/24480) | Improve Windows sandbox reliability | Fixes native helper process creation on Windows |
| [23799](https://github.com/google-gemini/gemini-cli/pull/23799) | Background process monitoring tools | Enables secure long-running task inspection |
| [24274](https://github.com/google-gemini/gemini-cli/pull/24274) | Background memory service for skill extraction | Auto-generates reusable SKILL.md files from past sessions |

---

### 5. **Feature Request Trends**

- **Memory & Personalization**: Users strongly advocate for smarter memory management—both global vs. project scoping ([#22819](https://github.com/google-gemini/gemini-cli/issues/22819)) and proactive prompting to trigger memory writes ([#22809](https://github.com/google-gemini/gemini-cli/issues/22809)).
- **Codebase Intelligence**: AST-aware tools are repeatedly requested to enable precise method-level reads and better code mapping ([#22745](https://github.com/google-gemini/gemini-cli/issues/22745), [#22746](https://github.com/google-gemini/gemini-cli/issues/22746)).
- **Agent Safety & Transparency**: There’s rising demand for stricter safeguards against destructive operations ([#22672](https://github.com/google-gemini/gemini-cli/issues/22672)) and accurate status reporting when limits are hit ([#22323](https://github.com/google-gemini/gemini-cli/issues/22323)).
- **UI/UX Refinement**: Scroll performance ([#24470](https://github.com/google-gemini/gemini-cli/issues/24470)), spacing consistency ([#22816](https://github.com/google-gemini/gemini-cli/issues/22816)), and terminal rendering cleanliness are top pain points.

---

### 6. **Developer Pain Points**

- **Sandbox Instability**: Windows users report frequent `"GeminiSandbox.exe ENOENT"` errors, halting workflow execution entirely.
- **Terminal Clutter**: Empty lines and misaligned margins in history output make logs hard to parse during complex agent interactions.
- **Configuration Overrides Ignored**: Settings like `maxTurns` or tool filters are not respected by agents, undermining user control.
- **Lack of Memory Awareness**: The main agent rarely initiates memory saves, requiring manual reminders and leading to repeated corrections.
- **Poor Error Visibility**: Shell exit codes and internal npm/git errors are surfaced as failures, confusing users about root cause.

--- 

*Prepared by Technical Analyst – AI Developer Tools Team*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

**GitHub Copilot CLI Community Digest – April 2, 2026**

---

### 1. **Today's Highlights**
The latest release (v1.0.16-0) fixes critical MCP server stability after user switches and improves BYOK token handling for Anthropic models. A new device code flow for OAuth in headless environments was added to enhance CI/CD compatibility. Several high-impact issues—including model entitlement mismatches and terminal usability regressions—remain under active discussion.

---

### 2. **Releases**

**v1.0.16-0**  
- Fixed: MCP servers now reload correctly after login/user switch + `/mcp reload`  
- Fixed: BYOK Anthropic provider respects `maxOutputTokens` limit  
- Removed: Deprecated `marketplaces` repo setting (use `extraKnownMarketplaces`)  

**v1.0.15**  
- Dropped support for legacy GPT-5.1-Codex models  
- Added subtle animated Copilot mascot blink in interactive mode  
- Improved account listing order in user switcher (`/user list`)  
- Introduced MCP config RPC commands: `mcp.config.list`, `.add`, `.update`, `.remove`  

**v1.0.15-2 / v1.0.15-1**  
- Added device code flow (RFC 8628) as fallback for MCP OAuth in headless/CI  
- Added `/mcp auth` command for re-authentication  

---

### 3. **Hot Issues**

| Issue | Summary | Impact & Reaction |
|------|--------|------------------|
| [#618](https://github.com/github/copilot-cli/issues/618) ✅ | Support custom slash commands via `.github/prompts/` dir | High demand (93 👍); aligns with VS Code extension parity |  
| [#223](https://github.com/github/copilot-cli/issues/223) 🔒 | "Copilot Requests" permission missing for org tokens | Enterprise pain point (60 👍); blocks automation compliance |  
| [#1703](https://github.com/github/copilot-cli/issues/1703) 🔒 | Fails to show org-enabled models (e.g., Gemini 3.1 Pro) | Critical gap vs. VS Code (26 👍); undermines org-wide deployments |  
| [#2334](https://github.com/github/copilot-cli/issues/2334) 🔒 | Alt-screen breaks navigation & search in terminal | Major UX regression (13 👍); disrupts workflows in large outputs |  
| [#1217](https://github.com/github/copilot-cli/issues/1217) 🔒 | No image paste support from Windows clipboard in WSL | Workflow blocker (46 👍); common cross-platform use case |  
| [#1403](https://github.com/github/copilot-cli/issues/1403) 🔒 | `${VAR}` env expansion broken in MCP configs post-v0.0.407 | Regression causing silent failures (2 👍); breaks secure token injection |  
| [#2421](https://github.com/github/copilot-cli/issues/2421) 🔒 | HTTP/2 GOAWAY race causes cascading retries & rate-limit waste | Systemic reliability issue (4 👍); impacts premium quota usage |  
| [#1148](https://github.com/github/copilot-cli/issues/1148) 🔒 | Forces CRLF line endings on LF files | File integrity concern (3 👍); violates Git hygiene expectations |  
| [#2078](https://github.com/github/copilot-cli/issues/2078) 🔒 | Request for `/btw` command | Lighthearted but signals desire for richer built-in shortcuts (18 👍) |  
| [#1211](https://github.com/github/copilot-cli/issues/1211) 🔒 | Custom terminal title disrupts status updates | Configuration friction (8 👍); limits customization flexibility |  

---

### 4. **Key PR Progress**  
*None reported in last 24h.*

---

### 5. **Feature Request Trends**

- **Custom Slash Commands**: Strong alignment with VS Code extension via `.github/prompts/` (Issue #618)
- **Model Consistency**: Demand to unify model visibility across CLI, web, and VS Code (Issues #1703, #2449)
- **MCP Enhancements**: Persistent config management (`mcp.config.*`), better auth flows, and env var support
- **Terminal Usability**: Restore non-alt-screen behavior (#2334), improve text selection contrast (#2216)
- **Enterprise Integration**: Org token permissions (#223), session metadata in hooks (#2458)

---

### 6. **Developer Pain Points**

- **Inconsistent Model Access**: CLI shows fewer models than web/VS Code despite same entitlements → erodes trust in tooling parity.
- **Authentication Friction**: Strict PAT format validation blocks proxy-based credential injection (#2431); device code flow only partially alleviates CI issues.
- **Terminal UX Degradation**: Alt-screen removal introduced scroll/search limitations; low-contrast text highlights hinder readability.
- **MCP Reliability**: Environment variable expansion regression and GOAWAY race conditions cause silent failures in automated pipelines.
- **Line Ending Corruption**: Uncontrolled CRLF conversion on Unix systems risks Git repository integrity.

--- 

*For full details, visit the [copilot-cli repository](https://github.com/github/copilot-cli).*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

**Kimi Code CLI Community Digest – 2026-04-02**

---

### **Today's Highlights**
Kimi Code CLI released version **1.29.0**, introducing hierarchical AGENTS.md support, a new `/title` command for session renaming, and critical fixes for Windows proxy handling and CRLF line ending corruption. A major refactor from Python to Bun + TypeScript + React Ink is underway (#1707), signaling a shift toward a terminal-native experience.

---

### **Releases**
**v1.29.0**  
- Hierarchical AGENTS.md loading (project root to working dir)  
- New `/title` slash command to manually rename sessions  
- Environment variables (`KIMI_CLI_PASTE_CHAR_THRESHOLD`, `KIMI_CLI_PASTE_LINE_THRESHOLD`) added to control paste folding  
- Fixes: Windows CRLF line ending conversion in `writetext`, SOCKS proxy scheme normalization, stale asset cache issues post-upgrade, and PowerShell path resolution on Windows  
- Session cleanup improved across all exit paths  

> Release notes: https://github.com/MoonshotAI/kimi-cli/releases/tag/v1.29.0

---

### **Hot Issues**

| # | Title / Summary | Why It Matters |
|---|------------------|----------------|
| [#1682](https://github.com/MoonshotAI/kimi-cli/issues/1682) | UX: Need double Enter to execute commands | Inconsistent with Claude Code; degrades command-line efficiency for power users |
| [#1681](https://github.com/MoonshotAI/kimi-cli/issues/1681) | UI rendering glitches: spacing, slashes, label leaks | Impacts readability and user confidence in input/output display |
| [#1615](https://github.com/MoonshotAI/kimi-cli/issues/1615) | GLM-5.1 feedback not received | Blocks key model integration; affects users relying on third-party models |
| [#1708](https://github.com/MoonshotAI/kimi-cli/issues/1708) | Dynamic MCP server/skill reload during sessions | High-value feature request enabling runtime extensibility without restarts |
| [#1705](https://github.com/MoonshotAI/kimi-cli/issues/1705) | Skill discovery ignores installed plugins | Limits plugin ecosystem integration; reduces toolchain flexibility |
| [#1702](https://github.com/MoonshotAI/kimi-cli/issues/1702) | Shell tool broken on Windows: powershell.exe not found | Critical regression affecting Windows users; breaks core functionality |
| [#1695](https://github.com/MoonshotAI/kimi-cli/issues/1695) | Openclaw scheduled tasks failing after connection | Indicates potential API instability or quota mismanagement under load |
| [#1691](https://github.com/MoonshotAI/kimi-cli/issues/1691) | Incremental session memory / zero-cost context compression | Addresses expensive `/compact` calls; vital for long-running agentic workflows |
| [#1596](https://github.com/MoonshotAI/kimi-cli/issues/1596) | Poor compliance with AGENTS.md constraints | Undermines agent reliability in constrained environments; undermines project-level guardrails |
| [#1602](https://github.com/MoonshotAI/kimi-cli/issues/1602) | Web access fails with blank screen | Major usability blocker for web-based interaction mode |

---

### **Key PR Progress**

| # | Description |
|---|-------------|
| [#1707](https://github.com/MoonshotAI/kimi-cli/pull/1707) | **Major rewrite**: Migrate entire codebase from Python to **Bun + TypeScript + React Ink** for native TUI performance and maintainability |
| [#1693](https://github.com/MoonshotAI/kimi-cli/pull/1693) | Fix Windows `writetext` converting LF → CRLF by disabling universal newlines in `aiofiles.open()` |
| [#1694](https://github.com/MoonshotAI/kimi-cli/pull/1694) | Normalize `socks://` → `socks5://` in proxy env vars to resolve startup failures with V2RayN/Clash |
| [#1700](https://github.com/MoonshotAI/kimi-cli/pull/1700) | Implement hierarchical AGENTS.md loading (`.kimi/AGENTS.md` > `AGENTS.md`) for better project context |
| [#1685](https://github.com/MoonshotAI/kimi-cli/pull/1685) | Add `/title` command and unify session state into single `state.json` file |
| [#1696](https://github.com/MoonshotAI/kimi-cli/pull/1696) | Inject `Cache-Control: no-cache` headers to prevent stale-asset 404s after CLI upgrades |
| [#1703](https://github.com/MoonshotAI/kimi-cli/pull/1703) | Resolve full PowerShell path on Windows when installed via `uv tool install` |
| [#1697](https://github.com/MoonshotAI/kimi-cli/pull/1697) | Respect terminal color capability in `render_to_ansi()` instead of forcing truecolor |
| [#1692](https://github.com/MoonshotAI/kimi-cli/pull/1692) | Handle `PermissionError` gracefully when listing directory entries (e.g., macOS Trash) |
| [#1698](https://github.com/MoonshotAI/kimi-cli/pull/1698) | Add env vars to tune paste text folding thresholds for better SSH/CJK terminal compatibility |

---

### **Feature Request Trends**

- **Dynamic Runtime Configuration**: Users demand hot-reloadable MCP servers and skills without restarting the CLI (notably #1708).
- **Enhanced Session Management**: Manual title setting, better state persistence, and smarter compaction are recurring asks (#1536, #1691).
- **Cross-Platform Consistency**: Line endings, shell tool behavior, and terminal rendering must align with expectations from tools like Claude Code (#1687, #1702).
- **Proxy & Network Flexibility**: Full SOCKS5 support and environment-aware HTTP client config remain unresolved pain points (#1674).

---

### **Developer Pain Points**

- **Windows Compatibility**: Multiple reports indicate regressions in shell execution, file I/O, and proxy usage—critical for enterprise adoption.
- **UI/UX Fragility**: Rendering inconsistencies (spacing, slashes, label exposure) suggest deeper terminal abstraction layer flaws.
- **Model Integration Gaps**: Lack of support for non-Kimi models (e.g., GLM-5.1) limits interoperability in mixed-model workflows.
- **Agent Constraint Bypass**: AGENTS.md directives are often ignored, reducing the tool’s usefulness in team or policy-driven environments.
- **Restart Friction**: No dynamic reloading of skills/MCPs forces frequent restarts, breaking fluid development flows.

--- 

*Generated by Kimi Code CLI Community Digest Bot · Data source: [MoonshotAI/kimi-cli](https://github.com/MoonshotAI/kimi-cli)*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

### OpenCode Community Digest – April 2, 2026

#### **Today's Highlights**
The community continues to focus on improving core reliability and developer experience in OpenCode. A critical fix was merged for cross-session snapshot contamination (#20560), addressing a regression introduced in v1.3.x that affected concurrent session stability. Additionally, multiple infrastructure improvements are underway, including Effect service adoption and CI report publishing, signaling continued investment in long-term maintainability.

---

#### **Releases**
- **v1.3.13**: Minor release bumping OpenTUI version (no functional changes reported).

---

#### **Hot Issues** *(Top 10 by engagement)*

1. **[#13768](https://github.com/anomalyco/opencode/issues/13768)** – *Assistant message prefill not supported with Opus 4.6*  
   Users frequently hit errors when using Claude Opus 4.6 due to missing assistant prefill support. With 50 comments and 18 upvotes, this blocks advanced agent workflows relying on model-driven context initialization.

2. **[#4659](https://github.com/anomalyco/opencode/issues/4659)** – *Sliding window context management for long-running sessions*  
   Proposes replacing destructive compaction with sliding windows to preserve full conversation history. 25 comments + 18 👍 reflect strong demand for smarter memory handling in extended agentic sessions.

3. **[#8003](https://github.com/anomalyco/opencode/issues/8003)** – *VS Code Integration for Diff Preview*  
   Requests native VS Code diff viewer integration to ease large-change review. Highest upvoted feature request (41 👍) indicates desire for tighter IDE ecosystem alignment.

4. **[#17047](https://github.com/anomalyco/opencode/issues/17047)** – *Tool.define() causes unbounded memory leak*  
   Critical bug where tool definitions accumulate closures, crashing long-running servers. 18 👍 show urgent concern over production stability.

5. **[#15585](https://github.com/anomalocoopencode/issues/15585)** – *Free model usage limits unexpectedly enforced*  
   Confusion around "free usage exceed" errors across Big Pickle and other free-tier models. Suggests poor communication about pricing changes post-v1.2.15.

6. **[#17376](https://github.com/anomalyco/opencode/issues/17376)** – *Infinite auth loop in Web Terminal (v1.2.25)*  
   Blocks basic terminal access after credential setup; impacts all web users. 12 comments signal widespread frustration.

7. **[#15728](https://github.com/anomalyco/opencode/issues/15728)** – *Read tool fails to pass image data to vision models*  
   Vision-capable models like Qwen3.5-plus receive raw file paths instead of encoded images, breaking multimodal analysis. 6 comments but technically significant.

8. **[#6972](https://github.com/anomalyco/opencode/issues/6972)** – *MCP client missing Accept header → Context7 406 errors*  
   Windows-specific HTTP header omission breaks MCP integrations. Zero 👍 suggests low visibility but concrete blocker.

9. **[#13819](https://github.com/anomalyco/opencode/issues/13819)** – *Deno runtime as alternative/complement to Bun*  
   Explores Deno’s npm compatibility for improved sandboxing and security. Niche but forward-looking architectural discussion.

10. **[#19952](https://github.com/anomalyco/opencode/issues/19952)** – *TypeScript LSP exhausts file descriptors via node_modules indexing*  
   Resource leak causes system freezes. High-severity performance issue requiring immediate attention.

---

#### **Key PR Progress** *(Top 10 by impact)*

1. **[#20560](https://github.com/anomalyco/opencode/pull/20560)** – *Fix cross-session patch contamination*  
   Prevents shared git index corruption during concurrent sessions—directly addresses regression from recent snapshot refactoring.

2. **[#20558](https://github.com/anomalyco/opencode/pull/20558)** – *Token refresh before expiry*  
   Implements proactive token renewal to avoid authentication failures in console environments.

3. **[#20547](https://github.com/anomalyco/opencode/pull/20547)** – *Publish unit test reports in GitHub Actions*  
   Enhances CI transparency with JUnit XML outputs and per-package shard parallelism.

4. **[#20551](https://github.com/anomalyco/opencode/pull/20551)** – *Speed up slow revert operations*  
   Optimizes `Snapshot.revert()` for large-scale file restores using batched git commands.

5. **[#20563](https://github.com/anomalyco/opencode/pull/20563)** – *Correct ProviderContext type mismatch*  
   Fixes plugin hook signature inconsistency affecting provider integrations.

6. **[#19955](https://github.com/anomalyco/opencode/pull/19955)** – *GitLab DWS tool approval via permission system*  
   Integrates GitLab Duo Workflow Service into OpenCode’s permission framework for secure automation.

7. **[#20496](https://github.com/anomalyco/opencode/pull/20496)** – *Refactor bash tool with Effect ChildProcess*  
   Replaces raw `spawn` with typed, composable effectful subprocesses for better error handling.

8. **[#20374](https://github.com/anomalyco/opencode/pull/20374)** – *Add Effect-returning MessageV2 functions*  
   Exposes async-safe variants of message DB operations for cleaner functional pipelines.

9. **[#20564](https://github.com/anomalyco/opencode/pull/20564)** – *Batch adjacent snapshot reverts*  
   Reduces git subprocess overhead during mass file restoration.

10. **[#14735](https://github.com/anomalyco/opencode/pull/14735)** – *Uniform scroll config across TUI components*  
   Ensures consistent scrolling behavior in shell, diff, and log views.

---

#### **Feature Request Trends**

- **Enhanced IDE Integration**: VS Code diff preview (#8003) and general editor tooling remain top asks.
- **Session Management Improvements**: Sliding-window context (#4659), persistent history (#20532), and global session list (#14561) reflect need for better long-term workflow tracking.
- **Better Export Capabilities**: Markdown/JSON session export (#9387) requested for auditability and sharing.
- **Permission System Expansion**: Multiple hooks proposed (`tui.footer.items`, `permission.ask`) to enable richer plugin customization.
- **Vision & Multimodal Support**: Read tool enhancements (#15728) needed for image-aware agents.

---

#### **Developer Pain Points**

- **Model Compatibility Gaps**: Assistant prefill limitation with Opus 4.6 (#13768) and missing GLM-5.1 (#19955) hinder adoption of newer models.
- **Memory & Performance Leaks**: Tool.define() closure accumulation (#17047) and TS LSP FD exhaustion (#19952) threaten stability in server environments.
- **Authentication Friction**: Web terminal auth loops (#17376) and unclear free-tier messaging (#15714, #15585) reduce trust and usability.
- **Cross-Platform Bugs**: Windows-specific issues dominate—TUI resize crashes (#7943), PowerShell tool quirks (#20527), and path normalization mismatches (#20354).
- **Documentation Gaps**: Several users report confusion around free model policies and ACP plugin interactions (#20559).

--- 

*Prepared by the OpenCode Technical Analyst Team*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

Here is the Qwen Code Community Digest for 2026-04-02.

***

### **Qwen Code Community Digest: April 2, 2026**

**1. Today's Highlights**
The Qwen Code team released a series of preview versions (v0.14.0-preview.4, v0.14.0-preview.3, and v0.13.2-preview.0) focused on stabilizing the CLI and fixing critical bugs related to path handling and proxy configuration. A significant number of new issues and pull requests were opened, highlighting active development in features like multi-language insight reports and ACP connection reliability, alongside user concerns about model availability and authentication.

**2. Releases**
*   **v0.14.0-preview.4:** Fixed path replacement in markdown files during extension install and normalized proxy URLs.
*   **v0.14.0-preview.3:** Contains fixes from preview.4.
*   **v0.13.2-preview.0:** Contains fixes from preview.4.
*   **v0.13.2-nightly.20260401.20e51e3d3:** Contains fixes from preview.4.

**3. Hot Issues**
*   **#2040 [OPEN] Supports project-level Insight:** Users are requesting project-level Insight functionality, as the current machine-level view is insufficient for multi-project environments. This is a top-requested feature with 24 comments.
    *   [Link](https://github.com/QwenLM/qwen-code/issues/2040)
*   **#2721 [OPEN] [status/needs-triage] 能否把 iflow cli 项目接过呀?**: This issue discusses the possibility of taking over the `iflow cli` project, citing its superior functionality compared to Qwen Code. It reflects user interest in alternative or more robust tooling.
    *   [Link](https://github.com/QwenLM/qwen-code/issues/2721)
*   **#2803 [CLOSED] [status/needs-triage, type/feature-request] Incorporate good idea/code from https://github.com/instructkr/claw-code**: This issue was closed after discussion about incorporating ideas from `claw-code`, following a leak of code from another AI company. It indicates an openness to external contributions.
    *   [Link](https://github.com/QwenLM/qwen-code/issues/2807)
*   **#2780 [OPEN] 路径识别异常:** A common bug where Qwen Code fails to correctly parse file paths copied directly from Windows Explorer, treating them as having spaces even when they don't, preventing tools from working.
    *   [Link](https://github.com/QwenLM/qwen-code/issues/2780)
*   **#2759 [OPEN] [status/needs-triage] Qwen3.6 not available in QwenCode:** Users are frustrated that the Qwen3.6 model is available in other platforms but not in Qwen Code, questioning the platform's commitment to its own models.
    *   [Link](https://github.com/QwenLM/qwen-code/issues/2759)
*   **#2790 [CLOSED] Feature Request: Make MODALITY_PATTERNS user-configurable via settings.json:** A request to allow users to customize `MODALITY_PATTERNS` without modifying source code was closed, suggesting it may have been implemented or deemed out of scope.
    *   [Link](https://github.com/QwenLM/qwen-code/issues/2790)
*   **#2783 [OPEN] [status/needs-triage, type/bug] 长期出现缺少参数的现象:** Users report frequent errors where required parameters for tools like `writefile` and `shell` are missing, indicating instability in tool execution.
    *   [Link](https://github.com/QwenLM/qwen-code/issues/2783)
*   **#2775 [CLOSED] [status/needs-triage, type/bug] [Web UI] Unable to terminate/cancel long-running task:** A known issue where the web UI becomes unresponsive and cannot cancel long-running tasks, leading to session lockups.
    *   [Link](https://github.com/QwenLM/qwen-code/issues/2775)
*   **#2800 [OPEN] How to view the quota:** A basic question about how to check usage quotas on the free plan, indicating a need for better transparency.
    *   [Link](https://github.com/QwenLM/qwen-code/issues/2800)
*   **#2782 [OPEN] [status/needs-triage, type/bug] "@qwen-code/sdk": "0.1.6": need permission to use the MCP tool:** A bug where the SDK fails to request permission for MCP tools, instead stating it needs permission without prompting the user.
    *   [Link](https://github.com/QwenLM/qwen-code/issues/2782)

**4. Key PR Progress**
*   **#2808 [CLOSED] feat(sdk): full CLI parity:** Extended the `@qwen-code/sdk` to activate the full agent stack, bringing SDK capabilities closer to the core CLI.
    *   [Link](https://github.com/QwenLM/qwen-code/pull/2808)
*   **#2802 [OPEN] fix(vscode): inherit model selection for new chat tabs:** Fixes a bug where new VS Code chat tabs would not inherit the model selection from existing tabs.
    *   [Link](https://github.com/QwenLM/qwen-code/pull/2802)
*   **#2805 [OPEN] feat: add multi-language support for /insight HTML report:** Implements multi-language support for the `/insight` command, addressing a key feature request for internationalization.
    *   [Link](https://github.com/QwenLM/qwen-code/pull/2805)
*   **#2804 [OPEN] fix: improve ACP connection reliability:** Adds spawn retry logic and auto-reconnect for the ACP process, aiming to resolve connection stability issues.
    *   [Link](https://github.com/QwenLM/qwen-code/pull/2804)
*   **#2490 [OPEN] [0.14.0] Add Coding Plan Authentication:** Introduces comprehensive authentication enhancements, including Alibaba Cloud Coding Plan support.
    *   [Link](https://github.com/QwenLM/qwen-code/pull/2490)
*   **#2796 [CLOSED] fix: resolve punycode to userland package and skip env var test in sandbox:** Fixes build warnings by resolving `punycode` to a userland package and skips environment variable tests in sandbox mode.
    *   [Link](https://github.com/QwenLM/qwen-code/pull/2796)
*   **#2792 [CLOSED] revert: PR #2666 ACP retry/reconnect logic:** Reverts a previous PR due to issues with stdout readiness checks in the CLI relaunch wrapper.
    *   [Link](https://github.com/QwenLM/qwen-code/pull/2792)
*   **#2666 [CLOSED] [0.14.0] feat(vscode): add retry logic and auto-reconnect for ACP connection:** Added robust retry logic and auto-reconnect for ACP connections in VS Code.
    *   [Link](https://github.com/QwenLM/qwen-code/pull/2666)
*   **#2428 [CLOSED] [0.14.0] feat(mcp): add reconnect command and implement auto-reconnect logic:** Added a `qwen mcp reconnect` CLI command and automatic reconnection logic for MCP servers.
    *   [Link](https://github.com/QwenLM/qwen-code/pull/2428)
*   **#2612 [CLOSED] [type/bug, 0.14.0] fix(cli): enhance KeypressProvider with kitty sequence timeout manage…:** Fixed kitty keyboard protocol buffer handling by adding a timeout mechanism to prevent input interruption issues.
    *   [Link](https://github.com/QwenLM/qwen-code/pull/2612)

**5. Feature Request Trends**
The most prominent trends in feature requests include:
*   **Enhanced Model Management:** A strong desire for greater flexibility, including support for Qwen3.6, cross-provider model selection for subagents, and a configurable "small/fast" model for lightweight tasks.
*   **Internationalization & Multi-language Support:** Requests for multi-language support extend beyond `/insight` to other parts of the application, indicating a global user base.
*   **Improved Tooling & Reliability:** There's a recurring need for better CLI stability, more reliable ACP connections, and enhanced MCP server management.
*   **User Experience Enhancements:** Features like project-level Insights, better account display, and more intuitive authentication flows (e.g., `/login` command) are frequently requested to improve overall usability.

**6. Developer Pain Points**
*   **Model Availability & Provider Switching:** The inability to access specific models like Qwen3.6 or switch providers (e.g., OpenRouter) is a significant pain point.
*   **CLI Stability & Configuration:** Issues such as incorrect path parsing, unhandled parameter errors in tools, and silent fallbacks during authentication are causing frustration.
*   **ACP Connection Reliability:** Frequent disconnections and unresponsiveness in both the VS Code extension and web UI are impacting productivity.
*   **MCP Tool Permissions:** Users are experiencing difficulties with MCP tool permissions, where the system fails to prompt for necessary authorizations.
*   **Lack of Transparency:** Questions regarding quota visibility and account status suggest a need for clearer information within the application.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/DenisZheng/agents-radar).*