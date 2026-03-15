# AI CLI Tools Community Digest 2026-03-15

> Generated: 2026-03-15 00:21 UTC | Tools covered: 7

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

**Cross-Tool AI CLI Ecosystem Report – March 15, 2026**

---

### **1. Ecosystem Overview**  
The AI developer CLI landscape is maturing rapidly, with tools converging on core capabilities like session management, MCP integration, and IDE fusion—but diverging sharply in stability, observability, and cross-platform support. While major players (Claude Code, OpenAI Codex) lead in foundational agentic workflows, newer entrants (Gemini CLI, Kimi Code CLI) are closing gaps through aggressive feature iteration. A clear industry shift toward enterprise-grade reliability, real-time performance telemetry, and secure multi-account/session isolation is underway, driven by feedback around token efficiency, auth robustness, and TUI consistency.

---

### **2. Activity Comparison**  

| Tool               | Issues Count* | PRs Count* | Release Status                     |
|--------------------|---------------|------------|-------------------------------------|
| **Claude Code**    | 10            | 4          | v2.1.76 released (MCP elicitation) |
| **OpenAI Codex**   | 10            | 10         | Alpha builds (v0.115.0-α24), stable release imminent |
| **Gemini CLI**     | 10            | 10         | Nightly build updated (v0.35.0-n.20260314) |
| **GitHub Copilot** | 10            | 0          | No releases; trust score: 82.3/100   |
| **Kimi Code**      | 6             | 4          | No releases; focused on bug fixes   |
| **OpenCode**       | 10            | 10         | No releases; high-priority bugs active |
| **Qwen Code**      | 10            | 10         | Nightly build updated (v0.12.3-n.20260314) |

\*Based on top 10 issues/prs listed per tool

---

### **3. Shared Feature Directions**  

- **Session Lifecycle Control**: All tools request session listing/deletion (Claude #13514, Codex #6500, Gemini #21792, Copilot #2038).  
- **Theme & Terminal Integration**: Auto-sync with system dark mode (Claude #2990), flicker-free streaming (Copilot #1599), scroll stability (Gemini #22028).  
- **MCP & Tool Extensibility**: Project-specific MCP configs (Copilot #288), subagent tool isolation (Gemini #22374), skill lifecycle clarity (Qwen #2338).  
- **Performance Observability**: Built-in dashboards (`/perf`) appear in Gemini (#22485) and requested in Claude (#34074).  
- **Multi-Account Support**: Enterprise needs drive demand for per-connector accounts (Claude #27302, Qwen sidebar flexibility #1308).  

---

### **4. Differentiation Analysis**  

| Dimension           | Leaders                          | Emerging Players                  |
|---------------------|----------------------------------|-----------------------------------|
| **Target Users**    | Enterprise/dev teams (Claude, Codex) | Developers seeking innovation (Gemini, Qwen) |
| **Technical Focus** | Stability, observability, MCP depth | Rapid iteration, sandboxing, extensibility |
| **IDE Integration** | Native extensions (VS Code, Cursor) | Lightweight CLI-first (Kimi, OpenCode) |
| **Security Model**  | Trust gates, auth hardening (Codex PR #14718) | Sandboxing via bubblewrap (Gemini #22399) |
| **Monetization Fit**| Premium quotas, model switching (OpenCode #8030) | Freemium + open-source (Qwen, Kimi) |

Claude Code and OpenAI Codex prioritize architectural rigor and enterprise readiness; Gemini and Qwen emphasize speed-to-market and user experience polish; Kimi and OpenCode focus on niche integrations and developer ergonomics.

---

### **5. Community Momentum & Maturity**  

- **Most Active**: **OpenAI Codex** and **Qwen Code** show balanced issue/PR velocity with deep technical engagement (e.g., app-server refactoring, multi-model arbitration).  
- **Fastest Iterating**: **Gemini CLI** and **Claude Code** push nightly/alpha updates weekly, responding quickly to UX pain points (scrolling, flickering, timeout handling).  
- **Highest Engagement**: **Claude Code** dominates comment volume on UX bugs (e.g., #826: 324 comments), signaling passionate but frustrated users.  
- **Maturity Indicator**: **GitHub Copilot CLI**, though inactive recently, maintains a verified trust score (82.3), suggesting institutional confidence despite low recent activity.  

---

### **6. Trend Signals**  

- **Shift from “Assistant” to “Agent Orchestrator”**: Tools are adding explicit subagent monitoring (#34251), session checkpointing (#21792), and tool-call validation (#2374)—reflecting move beyond simple chat completion.  
- **Rise of Developer-Centric Observability**: `/perf` commands and rate-limit telemetry indicate demand for production-grade debugging.  
- **Cross-Platform Fragmentation Still Acute**: Windows/WSL2 instability (OpenCode #5361), macOS Intel legacy support (Codex #10410), and Gitbash incompatibility (Kimi #1436) remain unresolved across most tools.  
- **Enterprise Readiness Gap**: Multi-tenancy, project trust gates, and XDG compliance (#2035) are critical missing pieces for large organizations—only partially addressed in Codex and Claude.  

> **Strategic Takeaway**: Developers should prioritize tools with strong session isolation, transparent resource usage, and responsive maintainers during rapid iteration phases. Enterprises will require hardened auth, auditability, and cross-workspace consistency—areas where Codex and Claude currently lead.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

**Claude Code Skills Community Highlights Report**  
*Data as of 2026-03-15*

---

### 1. **Top Skills Ranking**

The most actively discussed Skills (by community engagement) are:

1. **[shodh-memory](https://github.com/anthropics/skills/pull/154)** – A persistent memory system for AI agents that maintains context across conversations using `proactive_context` hooks and structured memory storage. Enables Claude to recall user preferences, past interactions, and project-specific knowledge. Currently **open**, under active development since December 2025.

2. **[skill-quality-analyzer & skill-security-analyzer](https://github.com/anthropics/skills/pull/83)** – Meta-skills for auditing other Skills across five dimensions: structure, documentation, security, performance, and compatibility. Designed to improve overall Skill ecosystem quality. Status: **Open**, submitted November 2025.

3. **[frontend-design](https://github.com/anthropics/skills/pull/210)** – Enhanced guidance for generating production-ready UI code with clear actionability, component structure, and accessibility best practices. Focuses on reducing ambiguity in design-to-code translation. Status: **Open**, updated March 7, 2026.

4. **[masonry-generate-image-and-videos](https://github.com/anthropics/skills/pull/335)** – Integration with Masonry CLI for text-to-image/video generation using Imagen 3.0 and Veo 3.1. Supports job management, status tracking, and download workflows. Status: **Open**, last updated March 14, 2026.

5. **[SAP-RPT-1-OSS predictor](https://github.com/anthropics/skills/pull/181)** – Predictive analytics skill leveraging SAP’s open-source tabular foundation model for business data forecasting. Apache 2.0 licensed. Status: **Open**, updated March 11, 2026.

6. **[document-typography](https://github.com/anthropics/skills/pull/514)** – Automated typographic quality control addressing orphan words, widow paragraphs, and numbering misalignment in AI-generated documents. Targets universal document output issues. Status: **Open**, created March 4, 2026.

7. **[codebase-inventory-audit](https://github.com/anthropics/skills/pull/147)** – Systematic cleanup tool identifying orphaned code, unused files, documentation gaps, and infrastructure bloat via a 10-step workflow culminating in `CODEBASE-STATUS.md`. Status: **Open**, last updated February 4, 2026.

8. **[x402 BSV auth + micropayment](https://github.com/anthropics/skills/pull/374)** – Enables natural-language-driven discovery, authentication, and micropayments for AI services via the x402 protocol on Bitcoin SV. Supports commands like `/x402 generate...` or `/x402 transcribe...`. Status: **Open**, updated February 17, 2026.

---

### 2. **Community Demand Trends**

From open Issues, recurring themes indicate strong community interest in:

- **Enterprise Integration**: Multiple reports (e.g., #29, #389) highlight demand for AWS Bedrock compatibility and stable API performance—especially around Opus 4.5—suggesting need for broader model support.
- **Security & Trust Boundaries**: Issue #492 raises concerns about skills distributed under the `anthropic/` namespace enabling impersonation attacks, calling for stricter verification mechanisms.
- **Personal Assistant Capabilities**: PR #299 (Google Workspace integration) reflects desire for AI agents to autonomously manage emails, calendars, and tasks—blurring line between coding agent and general-purpose assistant.
- **Evaluation & Validation Infrastructure**: Issue #556 reveals critical flaw in `run_eval.py` failing to trigger skills during testing (~0% success rate), undermining confidence in skill reliability.
- **Accessibility & Compliance**: The inclusion of `a11y-auditor` in PR #288 signals growing emphasis on WCAG compliance within developer tools.

---

### 3. **High-Potential Pending Skills**

These open PRs show high activity and may merge soon:

- **[CONTRIBUTING.md addition](https://github.com/anthropics/skills/pull/509)** – Directly addresses community health gap; essential for onboarding new contributors.
- **[YAML quoting requirements](https://github.com/anthropics/skills/pull/359)** – Critical fix preventing silent parsing failures in Skill metadata.
- **[UTF-8 encoding fix](https://github.com/anthropics/skills/pull/284)** – Resolves cross-platform inconsistencies in reading `SKILL.md` files.
- **[ODT creation & parsing](https://github.com/anthropics/skills/pull/486)** – Adds native OpenDocument Format support for LibreOffice/Google Docs interoperability.
- **[Whitespace preservation in DOCX](https://github.com/anthropics/skills/pull/143)** – Ensures Word compatibility by avoiding unnecessary XML reformatting.

All were submitted within the past 6 weeks and address foundational usability or interoperability pain points.

---

### 4. **Skills Ecosystem Insight**

The community’s most concentrated demand centers on **enhancing Claude’s operational autonomy through persistent memory, enterprise-grade reliability, and seamless third-party integrations**, reflecting a shift from pure coding assistance toward generalized, trustworthy AI agent capabilities.

---

**Claude Code Community Digest – March 15, 2026**

---

### **Today's Highlights**
Claude Code v2.1.76 introduces MCP elicitation support, enabling interactive input dialogs during agent tasks—a significant step in dynamic tooling integration. The release also adds `Elicitation` hooks for programmatic response interception, empowering advanced workflow customization. Meanwhile, community engagement remains high around UI stability, session management, and cross-platform parity, with several critical bugs receiving renewed attention.

---

### **Releases**
- **v2.1.76**  
  - Added **MCP elicitation support**: Servers can now request structured user input mid-task via interactive forms or URL prompts.  
  - Introduced `Elicitation` and `ElicitationResult` hooks to intercept and override user responses before submission.  
  - Partial CLI flag documentation (`-n / --nam…`) noted but incomplete in changelog.

---

### **Hot Issues** *(Top 10 by comment count)*

| Issue | Summary | Impact & Reaction |
|------|--------|------------------|
| [#826](https://github.com/anthropics/claude-code/issues/826) | Console scrolls to top when Claude appends text on macOS/iTerm2 | Major UX disruption; 324 comments, 586 👍 — widespread frustration among Mac users |
| [#769](https://github.com/anthropics/claude-code/issues/769) | Screen flickering during active calls across Windows/Linux terminals | Affects usability in VS Code/Cursor; 291 comments, 281 👍 — flagged as urgent by multiple teams |
| [#2990](https://github.com/anthropics/claude-code/issues/2990) | Request for automatic light/dark theme sync with system terminal | 32 comments, 174 👍 — highly requested for consistent theming experience |
| [#27302](https://github.com/anthropics/claude-code/issues/27302) | Support multiple accounts per connector in web version | 46 comments, 50 👍 — enables enterprise multi-tenancy workflows |
| [#34229](https://github.com/anthropics/claude-code/issues/34229) | Phone verification failure blocking access | New issue (24h old), 30 comments — potential auth regression |
| [#13514](https://github.com/anthropics/claude-code/issues/13514) | Feature: Delete Claude Code sessions manually | 30 comments, 49 👍 — critical for memory/quota control |
| [#23472](https://github.com/anthropics/claude-code/issues/23472) | Opus 4.6 reports “long context beta not available” despite Max subscription | 28 comments — indicates possible API misalignment |
| [#13354](https://github.com/anthropics/claude-code/issues/13354) | Continue sessions after hitting token limits | 26 comments, 40 👍 — improves long-running task resilience |
| [#16021](https://github.com/anthropics/claude-code/issues/16021) | Excessive `<system-reminder>` messages flooding context on macOS | 24 comments — performance/quality concern due to noise injection |
| [#24147](https://github.com/anthropics/claude-code/issues/24147) | CLAUDE.md re-reads consume 99%+ of token quota via cache reads | 7 comments, 7 👍 — exposes architectural inefficiency in context handling |

---

### **Key PR Progress** *(Top 10)*

| PR | Summary | Status |
|----|--------|--------|
| [#34168](https://github.com/anthropics/claude-code/pull/34168) | **Sessions plugin**: `/sessions:list` and `/sessions:delete` commands | Open — addresses #13514 directly |
| [#34251](https://github.com/anthropics/claude-code/pull/34251) | **Agent-status plugin**: Monitors subagent activity and logs | Open — solves silent agent failures |
| [#34257](https://github.com/anthropics/claude-code/pull/34257) | **Sensitive-file-guard plugin**: Prevents accidental overwrite of `.env`, configs | Open — security-focused mitigation |
| [#34286](https://github.com/anthropics/claude-code/pull/34286) | Harden sensitive file guard confirmation flow with structured risk levels | Open — improves safety UX |
| [#34399](https://github.com/anthropics/claude-code/pull/34399) | AI fitness optimization (internal?) | Open — unclear scope; low signal |
| [#34074](https://github.com/anthropics/claude-code/issues/34074) *(Note: Issue, not PR)* | Request to expose rate limit data in status line JSON | Open — would enhance monitoring |

> *Note: Only 4 substantive PRs were updated in the last 24h; others lack detail or appear inactive.*

---

### **Feature Request Trends**

Developers are increasingly requesting:
- **Session lifecycle controls**: Delete, list, and manage sessions (#13514, #34168)
- **Enhanced theming**: Auto-sync with terminal/system dark mode (#2990)
- **Multi-account support**: For enterprise/web environments (#27302)
- **Better visibility into agent/subagent state** (#34251)
- **Rate limit telemetry**: Real-time usage metrics in status line (#34074)

These reflect a shift toward observability, control, and enterprise readiness.

---

### **Developer Pain Points**

Recurring frustrations include:
- **UI instability**: Console scrolling (#826), screen flickering (#769, #18084)
- **Inefficient context handling**: Token bloat from repeated CLAUDE.md reads (#24147), excessive `<system-reminder>` noise (#16021)
- **Cross-platform inconsistency**: Remote Control missing in VS Code extension (#28951), PATH exports ignored in extensions (#34377)
- **Auth and quota issues**: Rate limiting (#34413), phone verification failures (#34229), model switching affecting other sessions (#17820)
- **MCP integration gaps**: Subagents failing to use project-scoped MCP servers (#13898, #25200)

Many pain points stem from insufficient isolation between sessions, poor visibility into internal state, and inconsistent behavior across IDE integrations.

--- 

*Generated from GitHub activity on `anthropics/claude-code` as of 2026-03-15.*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

**OpenAI Codex Community Digest – March 15, 2026**

---

### 1. Today’s Highlights  
The Codex team has released three alpha updates to the Rust CLI (v0.115.0-alpha.24 through -alpha.23), focusing on internal improvements and stability ahead of a potential stable release. Concurrently, significant progress is being made in refactoring the TUI architecture to run atop the app-server layer, enabling unified session lifecycle management across CLI, TUI, and desktop clients. This foundational shift supports better cross-platform consistency and future extensibility.

---

### 2. Releases  
**Rust CLI v0.115.0-alpha.24** (and two prior alphas): Internal maintenance and stabilization work; no user-facing changes documented. These builds continue the incremental refinement path toward a stable v0.115.0 release.

---

### 3. Hot Issues  

| Issue | Summary & Impact | Community Reaction |
|------|------------------|-------------------|
| [#10410](https://github.com/openai/codex/issues/10410) | **macOS Intel x86_64 support for Desktop App**: Critical for users on legacy Mac hardware lacking Apple Silicon. Blocking adoption for many enterprise and older developer machines. | 163 👍, 121 comments — High demand with strong engagement. |
| [#14593](https://github.com/openai/codex/issues/14593) | **VS Code extension burning tokens rapidly post-update**: Affects paid Business subscribers on Windows; suggests regression in rate-limiting or context handling. | 19 👍, 37 comments — Urgent bug affecting core productivity. |
| [#10384](https://github.com/openai/codex/issues/10384) *(CLOSED)* | **`request_user_input` tool now available in code mode**: Major enhancement enabling interactive debugging during agentic workflows. | 99 👍 before closure — Well-received feature rollout. |
| [#12661](https://github.com/openai/codex/issues/12661) | **Markdown `file://` links open externally instead of in VS Code**: Breaks workflow integration on Windows; confuses users expecting IDE-native behavior. | 25 👍, 23 comments — UX friction point. |
| [#3049](https://github.com/openai/codex/issues/3049) | **Configurable hotkeys in TUI**: Long-standing request for accessibility and customization. Hardcoded bindings limit power-user efficiency. | 63 👍, 15 comments — Persistent feature ask. |
| [#6500](https://github.com/openai/codex/issues/6500) | **Interactive session management like tmux**: Enables multi-conversation isolation — vital for complex development tasks. | 24 👍, 6 comments — Niche but passionate demand. |
| [#14694](https://github.com/openai/codex/issues/14694) | **`apply_patch` fails when `~/.codex` is symlinked**: Regression introduced with memories feature; breaks workflows using alternate storage locations. | 6 comments — Technical edge case with real-world impact. |
| [#4550](https://github.com/openai/codex/issues/4550) | **Make TUI command folding/truncation configurable**: Forces output truncation hurts debugging and script reuse. | 25 👍, 3 comments — UX refinement needed. |
| [#14425](https://github.com/openai/codex/issues/14425) | **Context compaction hangs indefinitely**: Blocks long-running sessions; appears model-agnostic but tied to recent memory system changes. | 2 👍, 3 comments — Operational blocker. |
| [#2909](https://github.com/openai/codex/issues/2909) | **Multi-root workspace support**: Essential for polyrepo development environments common in modern engineering teams. | 77 👍, 5 comments — Broad appeal among VS Code users. |

---

### 4. Key PR Progress  

| PR | Description |
|----|-------------|
| [#14710](https://github.com/openai/codex/pull/14710), [#14717](https://github.com/openai/codex/pull/14717) | **Move TUI onto app-server**: Parallel implementation allows gradual migration; decouples transport layer from core, enabling consistent event delivery across UIs. |
| [#14699](https://github.com/openai/codex/pull/14699) | **Route fresh-session lifecycle via app-server**: Ensures server-side notifications (e.g., skills updates) trigger correctly during new thread creation. |
| [#14615](https://github.com/openai/codex/pull/14615) | **Refactor TUI skills loading**: Centralizes skills API under app-server, eliminating duplication and improving maintainability. |
| [#13678](https://github.com/openai/codex/pull/13678), [#13679](https://github.com/openai/codex/pull/13679) | **Watchdog runtime & subagent UI foundation**: Introduces structured monitoring and agent handoff capabilities within TUI. |
| [#14602](https://github.com/openai/codex/pull/14602) | **Preserve background terminals on interrupt + rename `/cleanup` to `/stop`**: Improves reliability for dev server workflows; clarifies command semantics. |
| [#13825](https://github.com/openai/codex/pull/13825) | **Custom model aliases in config.toml**: Allows per-project model overrides with token limits and context windows. |
| [#13537](https://github.com/openai/codex/pull/13537) | **Add `--fork <SESSION_ID>` to `codex exec`**: Enables non-interactive session reuse — critical for CI/CD and automation. |
| [#12481](https://github.com/openai/codex/pull/12481) | **Safe auto-unarchive during resume**: Prevents accidental corruption of archived threads during lookup. |
| [#14668](https://github.com/openai/codex/pull/14668) | **Reuse guardian session across approvals**: Optimizes performance by preserving prompt cache keys between review cycles. |
| [#14718](https://github.com/openai/codex/pull/14718) | **Trust-gate project hooks and exec policies**: Security hardening ensures untrusted `.codex/` configs remain disabled until explicitly trusted. |

---

### 5. Feature Request Trends  

- **Cross-platform compatibility**: macOS Intel x86_64 support (#10410) remains a top ask for legacy hardware users.
- **Enhanced session management**: Tree-based conversations (#12450), tmux-like sessions (#6500), and safe deletion flows (#14713) reflect growing need for structured workflow organization.
- **IDE integration polish**: Multi-root workspaces (#2909), file link handling (#12661), and configurable hotkeys (#3049) highlight desires for tighter editor fusion.
- **CLI observability & control**: Custom compaction hooks (#11912), remote session sync (#14722), and model aliasing (#13825) indicate matured CLI usage requiring deeper customization.

---

### 6. Developer Pain Points  

- **Windows-specific issues dominate**: Path length limits (#14230), WSL worktree detection (#13618), PowerShell encoding warnings (#13755), and app crashes (#14036) reveal inconsistent Windows support.
- **Memory and context management regressions**: Compaction hangs (#14425), token burn (#14593), and subagent config not respected (#14671) suggest instability in recent memory-system updates.
- **TUI usability friction**: Forced output truncation (#4550) and lack of session persistence (#3417) degrade the CLI experience despite powerful core functionality.
- **Authentication and sandboxing bugs**: Symlink handling in sandboxes (#14694), auth recovery visibility (#14611), and project trust gates (#14718) point to edge cases in security and portability.

--- 

*End of Digest*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

**Gemini CLI Community Digest – March 15, 2026**

---

### **Today's Highlights**
The Gemini CLI team released a new nightly build (v0.35.0-nightly.20260314) with updated changelog formatting. A surge of high-priority issues highlights growing instability in agent context handling and model responsiveness—particularly around `/plan` mode and gemini-3.1-pro-preview timeouts. Meanwhile, major feature work is underway for an in-CLI performance dashboard (`/perf`) and native Linux sandboxing via bubblewrap.

---

### **Releases**
- **v0.35.0-nightly.20260314.3038fdce2**: Updated changelog entry for v0.33.1. No functional changes reported.  
🔗 [Full Changelog](https://github.com/google-gemini/gemini-cli/compare/v0.35.0-nightly.20260313.bb060d7a9...v0.35.0-nightly.20260314.3038fdce2)

---

### **Hot Issues**
1. **[#22266]** Agent drops context after approving `/plan` — critical regression affecting workflow continuity. 6 comments; users report silent failures mid-execution.  
2. **[#22415]** CLI hangs indefinitely with gemini-3.1-pro-preview, suggesting retry-loop bug. 5 comments; urgent triage needed.  
3. **[#21925]** Hand icon appears unnecessarily during long shell scripts—misleading UX signal. 5 comments; @jacob314 provided reproduction.  
4. **[#22458]** Non-responsive CLI in interactive mode with no clear error path. 4 comments; impacts reliability.  
5. **[#22028]** Terminal scrolls to top on any click—severe TUI instability in VS Code. 3 comments; visual disruption.  
6. **[#22307]** Plan mode shows stale plan from prior request instead of current one. 2 comments; data inconsistency.  
7. **[#21792]** Epic: Improving Session Continuity & Coherence — foundational refactor needed for long-running agents. 2 comments; strategic priority.  
8. **[#21688]** Sub-agent thought messages concatenated without spacing — poor real-time readability. 2 comments.  
9. **[#21461]** Shell aliases not supported (e.g., `! baz hello` fails). 2 comments; breaks common workflows.  
10. **[#22483]** Feature request: `/perf` command for in-CLI performance monitoring — high engagement, seen as essential for debugging. 2 comments.

---

### **Key PR Progress**
1. **[#22484]** Fix MCP server config merging — resolves conflict between user settings and extension-provided servers. Critical for extensibility.  
2. **[#22485]** Add `/perf` performance dashboard — enables session-level observability (memory, tools, timing).  
3. **[#22399]** Implement native Linux sandbox using bubblewrap — replaces Docker/Podman dependency, improves portability.  
4. **[#22480]** Handle `ENAMETOOLONG` crashes on long `@` inputs — prevents unhandled rejections.  
5. **[#22456]** New interactive PoliciesDialog for `/policies` — modernizes policy management UX.  
6. **[#22407]** Fix subagent history deletion leak — cleans up orphaned files on `--delete-session`.  
7. **[#22472]** Debug Companion subsystem — AI-powered debugging tools with DAP integration.  
8. **[#22467]** Cap shell output at 10MB to prevent RangeError — stability fix for large outputs.  
9. **[#22412]** Full "GEMINI CLI" ASCII logo for logged-out state — branding refresh.  
10. **[#22468]** Extract SessionBrowser state hooks — phase 5 of UI refactor for maintainability.

---

### **Feature Request Trends**
- **Performance Observability**: Strong demand for built-in metrics (`/perf`) to debug slowdowns and memory use.
- **Session Longevity**: Multiple requests for better context retention, checkpointing, and compression control (e.g., `/compress` guidance).
- **Tool Isolation**: Needed separation between main agent and subagent toolsets to avoid interference.
- **Enhanced Memory System**: JIT loading, workspace-level storage, and auto-recommendation of skill updates.
- **Shell Integration**: Support for aliases, improved bracketed paste handling, and flicker-free resize behavior.
- **Debugging Infrastructure**: Debug Companion and crash resilience improvements signal focus on developer experience.

---

### **Developer Pain Points**
- **Context Collapse**: Agents forgetting prior plans or dropping context after approvals (#22266, #21792).
- **Model Instability**: gemini-3.1-pro-preview causes indefinite hangs (#22415), undermining trust.
- **UX Noise**: Unnecessary hand icons and scrolling disruptions degrade usability (#21925, #22028).
- **Shell Limitations**: Lack of alias support and poor handling of long commands break automation (#21461, #22467).
- **Extensibility Bugs**: MCP config conflicts and missing internal doc access in subagents hinder customization (#22374, #22484).

--- 

*For full details, visit the [GitHub repository](https://github.com/google-gemini/gemini-cli).*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

**GitHub Copilot CLI Community Digest – March 15, 2026**

---

### **Today's Highlights**  
No new releases were published in the last 24 hours. However, several high-priority issues surfaced around model configuration granularity, terminal UX flickering, and MCP authentication flows. The project received a verified trust score of 82.3/100 from Nerq (Issue #2031), reinforcing its stability. Notably, multiple users reported session-level model switching failures (Issue #2041) and broken skill loading in prompt mode (Issue #2040), indicating gaps in core agent behavior.

---

### **Releases**  
*No new releases in the past 24 hours.*

---

### **Hot Issues**  
1. **[#196](https://github.com/github/copilot-cli/issues/196)** – CLI fails entirely on Windows across PowerShell and CMD. Closed after 182 days; 14 comments, 👍4. Critical for Windows developers—resolved but highlights platform fragility.  
2. **[#288](https://github.com/github/copilot-cli/issues/288)** – Request to support per-repo or per-folder MCP configs. Open, 8 comments, 👍5. Enables environment-specific tooling without global overrides.  
3. **[#1599](https://github.com/github/copilot-cli/issues/1599)** – Terminal text flickers during streaming responses. Open, 5 comments, 👍7. Major UX blocker affecting readability and professionalism.  
4. **[#2032](https://github.com/github/copilot-cli/issues/2032)** – Allow configurable models for sub-tasks like compaction. Open, 1 comment. Addresses performance/cost trade-offs via task-specific LLM routing.  
5. **[#2041](https://github.com/github/copilot-cli/issues/2041)** – Model flag ignored mid-session. Open, no engagement yet. Suggests state persistence bug in model selection logic.  
6. **[#2040](https://github.com/github/copilot-cli/issues/2040)** – Slash commands (/skills) not loaded in `-p` mode. Open, no engagement. Breaks workflow automation via custom skills.  
7. **[#2038](https://github.com/github/copilot-cli/issues/2038)** – Bookmark feature for conversation navigation. Open, no engagement. Improves long-session usability.  
8. **[#2037](https://github.com/github/copilot-cli/issues/2037)** – Sub-command filtering in `--allow-tool shell`. Open, no engagement. Needed for least-privilege security policies.  
9. **[#2036](https://github.com/github/copilot-cli/issues/2036)** – Avoid redundant OAuth prompts for shared MCP servers. Open, no engagement. Reduces auth friction.  
10. **[#2035](https://github.com/github/copilot-cli/issues/2035)** – Ignores `XDG_CONFIG_HOME` env var. Open, no engagement. Violates Unix conventions and hinders containerized workflows.

---

### **Key PR Progress**  
*No pull requests updated in the last 24 hours.*

---

### **Feature Request Trends**  
- **Model Flexibility**: Users want granular control over which AI models handle specific tasks (e.g., exploration vs. compaction). See #1263 (closed), #2032 (open).  
- **MCP Configuration Granularity**: Support for project-specific MCP configs alongside global ones (#288).  
- **Terminal UX Improvements**: Fix flickering text streams (#1599) and convert markdown links to OSC 8 hyperlinks (#2033).  
- **Security & Compliance**: Sub-command filtering for shell tools (#2037) and XDG compliance (#2035).  
- **Workflow Automation**: Bookmarking (#2038), auto-submit initial prompts (#2028), and silent handling of elicitations in autopilot (#2029).

---

### **Developer Pain Points**  
- **Platform Instability**: Windows compatibility remains fragile (#196).  
- **Inconsistent State Management**: Model switches don’t persist mid-session (#2041); skills fail to load in non-interactive modes (#2040).  
- **Poor Terminal Integration**: Streaming output is unreadable due to flickering (#1599); raw URLs break terminal link detection (#2033).  
- **Authentication Friction**: Redundant OAuth prompts waste time (#2036).  
- **Configuration Rigidity**: Hardcoded paths ignore standard env vars like `XDG_CONFIG_HOME` (#2035), breaking portable setups.

--- 

*Generated by GitHub Copilot CLI Community Digest – March 15, 2026*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

**Kimi Code CLI Community Digest – March 15, 2026**

---

### 1. Today's Highlights  
No new releases in the past 24 hours. However, several high-impact bug reports and fixes emerged around clipboard handling on macOS, excessive log output during startup, and Windows file locking issues—all addressed promptly by maintainers. A new enhancement request for PicoClaw integration signals growing ecosystem interoperability needs.

---

### 2. Releases  
None

---

### 3. Hot Issues  

| # | Title & Summary | Why It Matters | Reactions |
|---|------------------|----------------|-----------|
| [625](https://github.com/MoonshotAI/kimi-cli/issues/625) | Request `/timeout` flag to override default 60s timeout | Critical for long-running tasks (e.g., heavy installs or code generation); current hard limit causes failures | 3 comments, 0 upvotes |
| [1433](https://github.com/MoonshotAI/kimi-cli/issues/1433) | Clipboard image paste fails on macOS with Cmd+V (only Ctrl+V works) | Blocks native Mac UX; breaks workflow for users relying on system clipboard shortcuts | 2 comments, 1 upvote |
| [1427](https://github.com/MoonshotAI/kimi-cli/issues/1427) | Excessive debug logs printed at CLI startup | Degrades user experience, especially in CI or silent environments | 1 comment |
| [1437](https://github.com/MoonshotAI/kimi-cli/issues/1437) | Enter key appends `[13u` instead of sending message in VS Code terminal | Corrupts input in integrated terminals; suggests terminal event handling bug | 0 comments |
| [1436](https://github.com/MoonshotAI/kimi-cli/issues/1436) | Kimi fails to start in Gitbash on Windows | Limits accessibility for Windows users preferring Unix-like shells | 0 comments |
| [1435](https://github.com/MoonshotAI/kimi-cli/issues/1435) | Add support for PicoClaw AI agent framework | Enables broader ecosystem integration; aligns with open-agent trends | 0 comments |

---

### 4. Key PR Progress  

| # | Summary | Impact |
|---|--------|--------|
| [1400](https://github.com/MoonshotAI/kimi-cli/pull/1400) | Migrate from deprecated `acp.TerminalHandle` to new ACP 0.8 API | Maintains compatibility with updated MCP standards |
| [1439](https://github.com/MoonshotAI/kimi-cli/pull/1439) | Improve dev setup docs: clarify Web UI hot-reload instructions | Lowers onboarding barrier for contributors |
| [1438](https://github.com/MoonshotAI/kimi-cli/pull/1438) | Add `asyncio.Lock` to prevent concurrent `context.jsonl` write conflicts on Windows | Fixes race condition causing `PermissionError` |
| [1434](https://github.com/MoonshotAI/kimi-cli/pull/1434) | Handle macOS bracketed paste events for Cmd+V image insertion | Directly addresses Issue #1433 clipboard regression |

---

### 5. Feature Request Trends  

- **Configurable Timeouts**: Users need per-command timeout control (Issue #625).
- **Cross-Platform Clipboard Consistency**: macOS-specific paste behavior undermines usability.
- **IDE Integration Stability**: Problems in VS Code and Gitbash indicate fragile terminal event routing.
- **Ecosystem Interoperability**: Requests like PicoClaw support (#1435) show demand for third-party toolchain compatibility.

---

### 6. Developer Pain Points  

- **Terminal Event Handling**: Inconsistent behavior across platforms (macOS Cmd+V vs Ctrl+V, Linux/Windows keycodes).
- **File Locking on Windows**: Concurrent async writes to `context.jsonl` cause crashes.
- **Excessive Verbose Logging**: Noisy startup logs hinder debugging in automated workflows.
- **Lack of Timeout Flexibility**: Fixed 60-second cap disrupts long-running operations.

--- 

*Generated automatically from GitHub activity via Kimi Code CLI Community Digest Engine.*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

**OpenCode Community Digest – March 15, 2026**

---

### 1. **Today's Highlights**

No new releases were published in the last 24 hours. However, several high-impact bugs affecting core functionality—including memory leaks on macOS, TUI freezes on WSL2, and SSE timeouts during file operations—have been actively updated by the community. A notable surge in feature requests around mobile support and plugin extensibility reflects growing demand for broader accessibility and customization.

---

### 2. **Releases**

*No new releases in the past 24 hours.*

---

### 3. **Hot Issues**

1. **[#8030](https://github.com/anomalyco/opencode/issues/8030)** – Copilot auth incorrectly counts agent-initiated requests as premium, rapidly depleting user quotas.  
   *179 comments, 62 👍* – Developers report unexpected quota exhaustion; urgency due to billing impact.

2. **[#12687](https://github.com/anomalyco/opencode/issues/12687)** – Severe memory leak and disk swell cause macOS kernel panics under load.  
   *28 comments, 0 👍* – Critical stability issue reported at scale; no immediate workaround noted.

3. **[#5361](https://github.com/anomalyco/opencode/issues/5361)** – TUI freezes intermittently (~10 sec) on WSL2, with input buffering afterward.  
   *30 comments, 12 👍* – Regressed in v1.0.129; affects Windows/WSL users significantly.

4. **[#17318](https://github.com/anomalyco/opencode/issues/17318)** – “SSE read timed out” error during file writing when chaining skills (e.g., brainstorm → planning).  
   *22 comments, 14 👍* – Impacts workflow continuity; tied to recent compaction logic changes.

5. **[#16470](https://github.com/anomalyco/opencode/issues/16470)** – Code output invisible in light theme due to color scheme bug.  
   *21 comments, 16 👍* – UX blocker for many users; urgent fix needed.

6. **[#8619](https://github.com/anomalyco/opencode/issues/8619)** – Request for native StatusLine hook to avoid injecting context into LLM prompts.  
   *10 comments, 22 👍* – High-priority plugin dev request to prevent token waste.

7. **[#6536](https://github.com/anomalyco/opencode/issues/6536)** – Feature: Mobile app for iOS/Android or responsive web UI.  
   *8 comments, 29 👍* – Strong consensus for mobile access; currently relies on browser-only mode.

8. **[#2845](https://github.com/anomalyco/opencode/issues/2845)** – Disable disruptive clipboard/text selection overrides for better terminal integration.  
   *8 comments, 21 👍* – Frequent pain point among power terminal users.

9. **[#10288](https://github.com/anomalyco/opencode/issues/10288)** – Repeat of mobile/web UI request with emphasis on developer mobility.  
   *5 comments, 32 👍* – Top-voted feature request this cycle.

10. **[#17307](https://github.com/anomalyco/opencode/issues/17307)** – Aggressive timeouts in v1.2.25 break large-context sessions with local models.  
    *5 comments, 4 👍* – Requires manual timeout adjustments; poor out-of-box experience.

---

### 4. **Key PR Progress**

1. **[#17529](https://github.com/anomalyco/opencode/pull/17529)** – Fixes DeepSeek API `reasoning_content` handling and adds tests. Addresses multiple related issues (#17523, #9397, #5577).

2. **[#16625](https://github.com/anomalyco/opencode/pull/16625)** – Prevents mobile scroll flickering during AI streaming via touch event fixes.

3. **[#13795](https://github.com/anomalyco/opencode/pull/13795)** – Adds `Session.messageCount()` endpoint for efficient message counting (closes #14602).

4. **[#12679](https://github.com/anomalyco/opencode/pull/12679)** – Enables Vim motions in prompt input (toggleable), improving editor parity.

5. **[#13854](https://github.com/anomalyco/opencode/pull/13854)** – Fixes streaming markdown/code truncation after message completion.

6. **[#16791](https://github.com/anomalyco/opencode/pull/16791)** – Supports subpath imports in plugin specifiers (e.g., `websxa/opencode`).

7. **[#17517](https://github.com/anomalyco/opencode/pull/17517)** – Ensures plugin event hooks are awaited, preventing silent failures (#14808).

8. **[#17520](https://github.com/anomalyco/opencode/pull/17520)** – Fixes comment submission in desktop app & Safari (resolves #11947).

9. **[#15685](https://github.com/anomalyco/opencode/pull/15685)** – Adds `--command` flag support in TUI, aligning with `run --command`.

10. **[#17170](https://github.com/anomalyco/opencode/pull/17170)** – Corrects malformed logo in CLI help output.

---

### 5. **Feature Request Trends**

- **Mobile/Web App**: Multiple overlapping requests for native mobile support or a responsive web UI (#6536, #10288).
- **Plugin Extensibility**: Desire for clean hooks (e.g., StatusLine, custom session IDs) without polluting LLM context (#8619, #13004).
- **Prompt Enhancement Tools**: Requests for context-aware prompt transformation akin to Kilo/Augment Code (#10237).
- **Configurable Limits**: Session list cap (hardcoded 100) and compaction thresholds seen as blocking productivity (#17389, #10017).
- **Local Model Optimization**: Timeouts and schema loading tuned for larger local LLMs (#17307, #17482).

---

### 6. **Developer Pain Points**

- **Quota Misattribution**: Agent-initiated requests wrongly billed as premium (#8030).
- **TUI Instability**: Freezes on WSL2 and blank screens after external vim use (#5361, #15166).
- **Streaming Reliability**: SSE timeouts and truncated outputs during complex toolchains (#17318).
- **Theme & Readability Bugs**: Light mode rendering failures for code blocks (#16470).
- **Clipboard Conflicts**: Unwanted overrides disrupt standard OS/terminal workflows (#2845, #10780).
- **Platform-Specific Crashes**: Memory leaks on macOS, bash tool errors on Windows (#12687, #17458).

--- 

*Generated from [anomalyco/opencode](https://github.com/anomalyco/opencode)*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

**Qwen Code Community Digest – March 15, 2026**

---

### **Today's Highlights**
The Qwen Code team released a new nightly build (v0.12.3-nightly.20260314.f1ee4638), addressing critical stability issues and expanding core capabilities. A wave of user-requested features—especially sidebar customization in VS Code, multi-model collaboration, and improved skill extensibility—gained traction with both bug fixes and new implementations landing today.

---

### **Releases**
- **v0.12.3-nightly.20260314.f1ee4638**  
  Latest nightly build includes fixes for token handling, CLI input quirks, and path corruption in model outputs. Full changelog: [GitHub Compare](https://github.com/QwenLM/qwen-code/compare/v0.12.3...v0.12.3-nightly.20260314.f1ee4638)

---

### **Hot Issues**

| # | Title | Impact & Reaction |
|---|------|-------------------|
| 1870 | Missing Option to Open Qwen Chat in Primary/Secondary Sidebar (VS Code) | Users frustrated by limited workspace flexibility; issue closed but feedback indicates ongoing demand. ([#1870](https://github.com/QwenLM/qwen-code/issues/1870)) |
| 2198 | Cannot Type Spacebar Character in CLI Input | Critical UX blocker—prevents natural command entry. Closed after fix, but highlights input handling fragility. ([#2198](https://github.com/QwenLM/qwen-code/issues/2198)) |
| 1972 | Icon in Side Panel for Quick Access | Feature request to improve accessibility via secondary panel icon. Gaining traction among power users. ([#1972](https://github.com/QwenLM/qwen-code/issues/1972)) |
| 1308 | Move Qwen Window to Activity Bar / Secondary Sidebar | Highly upvoted (👍7) request aligning Qwen with other AI coding assistants like GitHub Copilot. ([#1308](https://github.com/QwenLM/qwen-code/issues/1308)) |
| 2194 | Add `--worktree` Flag for Isolated Sessions | Proposal to enable parallel worktree-based sessions—addresses concurrency conflicts in monorepos. ([#2194](https://github.com/QwenLM/qwen-code/issues/2194)) |
| 2338 | `/skills` Confusion on Skill Activation | Users report skills not auto-activating despite correct installation. Indicates unclear skill lifecycle management. ([#2338](https://github.com/QwenLM/qwen-code/issues/2338)) |
| 2329 | `AskUserQuestion` Not Wrapping Question in Array | Breaking change in skill syntax causing tool-call failures. Requires documentation update. ([#2329](https://github.com/QwenLM/qwen-code/issues/2329)) |
| 330 | Auto-Save Conversation History | Repeatedly requested feature for session continuity and auditability. Still open as enhancement. ([#330](https://github.com/QwenLM/qwen-code/issues/330)) |
| 2382 | VS Code Extension Fails After v0.12.3 Upgrade | Regression reported immediately post-release—users downgrading or awaiting patch. ([#2382](https://github.com/QwenLM/qwen-code/issues/2382)) |
| 2384 | Input Length Exceeds Model Limit (400 Error) | API validation error due to incorrect max_token inference—affects long-context workflows. ([#2384](https://github.com/QwenLM/qwen-code/issues/2384)) |

---

### **Key PR Progress**

| # | Summary | Status |
|---|---------|--------|
| 2380 | Support `extends: bundled` for skill extension | 🟢 Open — Enables modular skill customization without full overrides |
| 2376 | Multi-model code review with arbitration | 🟢 Open — Parallel reviews + arbitrator for robust code analysis |
| 2374 | Fix race conditions in prompt cancellation | 🟢 Open — Resolves "tool_calls must be followed" errors during streaming |
| 2371 | Add `/btw` slash command for ephemeral questions | 🟢 Open — Non-intrusive side queries during active tasks |
| 2367 | Strip orphaned user entries on retry | 🟢 Open — Prevents API contract violations in continuation flows |
| 2354 | Correct hook settings schema validation | 🟢 Open — Fixes misconfigured hook object structure |
| 2348 | Ship bundled `/review` skill out-of-the-box | ✅ Merged — No-config code review now available |
| 2361 | Handle LLM failures gracefully in `/insight` | ✅ Merged — Improves resilience of qualitative reporting |
| 2188 | VS Code sidebar + multi-position chat layout | ✅ Merged — Native drag-and-drop support for chat UI |
| 2368 | Fix `/memory show --project/global` to list all context files | 🟢 Open — Now respects `AGENTS.md` in addition to `QWEN.md` |

---

### **Feature Request Trends**

- **Workspace Flexibility**: Demand for customizable chat placement (primary/secondary sidebar, activity bar) in VS Code.
- **Skill Ecosystem Expansion**: Requests for built-in skills (`/review`, `/btw`), better skill discovery, and extended skill configuration via `SKILL.md`.
- **Concurrency & Isolation**: `--worktree` support for parallel sessions; Git-aware session sandboxing.
- **History Management**: Automatic conversation saving, project-local history storage, and per-chat export commands.
- **CLI Usability**: Paste support in input fields, undo functionality (`/undo`), and clearer error recovery paths.

---

### **Developer Pain Points**

- **Input Field Bugs**: Spacebar and paste failures in CLI break basic interaction flow (#2198, #2383).
- **API Contract Violations**: Tool-call sequencing errors ("must be followed by tool messages") plague retries and subagent calls (#2190, #2360).
- **Model Configuration Gaps**: Lack of auto-detection for `max_tokens` causes truncation on non-Qwen models (#2356).
- **Extension Instability**: Regression in v0.12.3 affects VS Code integration reliability (#2382).
- **Ambiguous Memory Resolution**: Conflict between `.qwen/QWEN.md` and project-level `QWEN.md` leads to unexpected behavior (#968).

> *Note: Many issues stem from tight coupling between tool execution, memory context, and session state—suggesting need for stronger isolation primitives.*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/DenisZheng/agents-radar).*