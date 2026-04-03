# AI CLI Tools Community Digest 2026-04-03

> Generated: 2026-04-03 00:21 UTC | Tools covered: 7

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

**AI CLI Tools Ecosystem Cross-Tool Comparison Report – April 3, 2026**

---

### **1. Ecosystem Overview**  
The AI CLI developer tools ecosystem is in a period of rapid maturation and competitive differentiation. Four major entrants—Claude Code, OpenAI Codex, Gemini CLI, GitHub Copilot CLI, Kimi Code CLI, OpenCode, and Qwen Code—are converging on core agentic workflows while diverging in platform focus, model support, and extensibility models. A clear trend toward transparency (e.g., open-sourcing Claude Code), sandbox refinement, and cross-platform consistency dominates development priorities. Meanwhile, monetization friction—especially erratic rate limiting and opaque billing—remains a shared pain point across paid tiers.

---

### **2. Activity Comparison**

| Tool | Issues Count* | PRs Updated Today | Releases (Last 24h) |
|------|----------------|--------------------|---------------------|
| **Claude Code** | 10+ | 10 | v2.1.91 (Mar 30) |
| **OpenAI Codex** | 10 | 10 | Rust alphas (Mar 30–31) |
| **Gemini CLI** | 10 | 10 | v0.37.0-preview.1 (Mar 31) |
| **GitHub Copilot CLI** | 10 | 0 | v1.0.16 (Mar 31) |
| **Kimi Code CLI** | 10 | 10 | v1.30.0 (Mar 31) |
| **OpenCode** | 10 | 10 | None |
| **Qwen Code** | 10 | 10 | v0.14.0-preview.5 / nightly (Mar 31 + Mar 30) |

\* *Based on "Hot Issues" list count; actual totals likely higher.*

All tools maintain active issue tracking and regular PR cadence, with most shipping daily or near-daily updates. Only GitHub Copilot CLI lacks new PR activity today despite recent releases.

---

### **3. Shared Feature Directions**

Several requirements appear consistently across multiple tool communities:

- **Semantic Codebase Indexing** (#5181 Codex, #22745 Gemini): Critical for large-repo navigation without token exhaustion.
- **MCP Configuration Portability** (#32145 Claude, #12878 Codex, #1711 Kimi): Demand for file-based (`settings.json`) MCP management over UI-only flows.
- **Session Persistence & Relocation Robustness** (#39148 Claude, #1716 Kimi): Path-independent session IDs survive project moves.
- **Transparent Cost Controls**: Real-time usage dashboards requested to counter erratic Max plan depletion (Claude #38335, #41930).
- **Cross-Platform Terminal Consistency**: SSH text scrambling (#24202 Gemini), WSL permission bugs (#37192 Claude), PowerShell detection (#1702 Kimi).
- **Clipboard Integration**: `/copy` command trending (Kimi #1725 → merged, Copilot CLI feature request #1217).

These signals indicate industry-wide prioritization of observability, portability, and reliability over raw capability expansion.

---

### **4. Differentiation Analysis**

| Tool | Core Focus | Target Users | Technical Distinctions |
|------|-----------|--------------|------------------------|
| **Claude Code** | Agentic workflow depth, enterprise-grade sandboxing | High-tier subscribers, DevOps teams | Open-sourced core (#41447), `_meta` annotations for result sizing, skill shell execution controls |
| **OpenAI Codex** | Infrastructure robustness, async performance | Enterprise/R&D teams, Rust-native integrators | Heavy internal refactoring (async handlers, model manager extraction), Bazel-driven cross-platform builds |
| **Gemini CLI** | UX polish, memory-aware agents | General developers, Google Workspace users | Memory subagent architecture, AST-aware tooling roadmap, ink-based terminal rendering |
| **GitHub Copilot CLI** | CI/CD integration, policy enforcement | GitHub-centric teams, compliance-conscious orgs | Tight GitLab/DWS workflow support, permission request types, alt-screen UX debates |
| **Kimi Code CLI** | Usability & Windows parity | Emerging markets (China), Windows-first devs | PowerShell path fixes, `--plan` flag early adoption, Claude-compatible plugin layer (draft) |
| **OpenCode** | Model flexibility, local inference | Offline/self-hosted users, privacy-focused teams | Per-provider cache configs, user-overridable input limits, effectful sharing subsystem |
| **Qwen Code** | Open-source alignment, Chinese-language support | Academic/research users, OpenRouter adopters | Rapid Qwen 3.6 rollout, ACP integration, union-type MCP validation |

Notably, **Claude Code** leads in transparency and agent control granularity; **Kimi** and **Qwen** compete aggressively on regional model availability; **Codex** emphasizes engineering rigor; while **Copilot CLI** doubles down on enterprise policy hooks.

---

### **5. Community Momentum & Maturity**

- **Most Active**: **Claude Code** (#38335 has 365 comments), **Kimi Code CLI** (strong engagement on usability wins), and **OpenCode** (#1505 has 122 comments) show highest community density.
- **Rapid Iteration**: **Kimi Code CLI** delivers on long-requested features within days (e.g., `--plan`, `/copy`); **Qwen Code** rapidly added Qwen 3.6 post-user demand.
- **Maturity Indicators**: **Claude Code**’s open-core release signals confidence; **Codex**’s Rust modularization reflects long-term architecture planning; **Gemini CLI**’s preview stabilization suggests nearing GA readiness.
- **Underdog Momentum**: **Qwen Code** and **Kimi** are gaining traction by addressing gaps left by others (e.g., Qwen 3.6 availability).

No tool shows declining engagement—even those with critical bugs (e.g., Claude’s rate limiting) maintain high issue velocity, indicating healthy feedback loops.

---

### **6. Trend Signals**

- **Transparency Over Black-Box Magic**: Open-sourcing Claude Code and improving auditability (Codex source attribution #41611, Qwen error surfacing #2840) reflect market pressure for explainability.
- **Monetization Friction Escalating**: Erratic quota burn rates across all paid tiers signal unsustainable UX—expect dashboard/tooling investments soon.
- **Agent Orchestration Rising**: Requests for “agent teams” (Codex #11436), workflow pipelines (Kimi #1721), and subagent coordination (Gemini #23582) mark shift from single-agent to multi-agent systems.
- **Platform Fragmentation Still Hindering Adoption**: Windows instability (multiple tools), Termux absence (Copilot #1257), and macOS sandbox conflicts remain blockers for inclusive tooling.
- **Model Agnosticism Gaining Traction**: User-defined input limits (OpenCode #16306), OpenRouter support (Qwen #2785), and ACP integration (Qwen #2828) show move away from vendor lock-in.

For developers: **prioritize tools with strong MCP support, transparent cost modeling, and cross-platform stability**. For teams: **evaluate agent orchestration needs early**, as single-turn agents are becoming table stakes.

--- 

*Report generated by Senior Technical Analyst – AI Developer Tools Ecosystem*

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

**Claude Code Skills Community Highlights Report**  
*Data as of 2026-04-03*

---

### 1. **Top Skills Ranking**  
*(Sorted by community engagement via PR comments)*  

- **[#514](https://github.com/anthropics/skills/pull/514)**: *document-typography* — Addresses critical typographic flaws in AI-generated docs (orphan words, widowed headers, numbering misalignment). Highlighted for universal relevance across all document types. **Status**: Open | Draft  
- **[#210](https://github.com/anthropics/skills/pull/210)**: *frontend-design* — Revamped to enhance clarity and actionable guidance for UI/UX workflows. Focused on real-time, single-conversation usability. **Status**: Open | Draft  
- **[#83](https://github.com/anthropics/skills/pull/83)**: *skill-quality-analyzer & skill-security-analyzer* — Meta-skills offering structural, security, and performance audits of other skills. Emphasizes governance and reliability. **Status**: Open | Draft  
- **[#486](https://github.com/anthropics/skills/pull/486)**: *ODT skill* — Enables creation, templating, and conversion of OpenDocument Format (.odt) files to HTML. Targets enterprise LibreOffice/Google Docs interoperability. **Status**: Open | Draft  
- **[#509](https://github.com/anthropics/skills/pull/509)**: *CONTRIBUTING.md* — Critical documentation gap fix improving repo health score from 25% to compliant status. Foundational for contributor onboarding. **Status**: Open | Draft  

> *Note: All top-ranked PRs are currently open or draft; none have merged yet as of reporting date.*

---

### 2. **Community Demand Trends**  
From high-comment Issues, key unmet needs include:  

- **Persistent Memory Systems**: *shodh-memory* (Issue #154) reflects demand for cross-session context retention—critical for multi-turn agentic workflows.  
- **Enterprise Integration**: Requests for Bedrock compatibility (#29), org-wide sharing (#228), and SSO support (#532) highlight friction in scaling skills beyond individual users.  
- **Security & Governance**: Concerns over trust boundaries (#492) and meta-auditing tools (#83) signal maturity demands around skill vetting and namespace integrity.  
- **Workflow Automation**: Multiple proposals (e.g., pre-deployment validation in #740) indicate desire for end-to-end CI/CD-aligned skill pipelines.  

---

### 3. **High-Potential Pending Skills**  
Active, well-discussed PRs likely to merge soon:  

- **[#723](https://github.com/anthropics/skills/pull/723)**: *testing-patterns* — Comprehensive testing taxonomy covering unit, integration, React, and contract tests. Strong alignment with dev workflow gaps.  
- **[#659](https://github.com/anthropics/skills/pull/659)**: *quality-playbook* — Automated QA system revival leveraging AI for cost-effective quality engineering—addresses overlooked but vital SDLC layer.  
- **[#806](https://github.com/anthropics/skills/pull/806)**: *sensory* — Native macOS automation via AppleScript bypasses screenshot limitations. Tiered permission model balances safety and utility.  
- **[#335](https://github.com/anthropics/skills/pull/335)**: *masonry-generate-image-and-videos* — Integrates Imagen/Veo for multimodal generation, filling creative output void in current skillset.  

---

### 4. **Skills Ecosystem Insight**  
The community’s most concentrated demand is for **robust, production-grade tooling that bridges AI capabilities with real-world operational workflows**, particularly around persistent memory, enterprise integration, and automated quality assurance.

---

**Claude Code Community Digest – April 3, 2026**

---

### **Today's Highlights**
A critical memory leak surfaced in v2.1.91’s inline shell execution for skills, prompting an urgent fix. Simultaneously, widespread reports indicate abnormal rate limit exhaustion across Max plans since late March—impacting both CLI and desktop users—with no official mitigation communicated. The community is actively tracking root causes spanning MCP integration, context compression bugs, and sandbox permission regressions.

---

### **Releases**
**v2.1.91**: Introduces `_meta["anthropic/maxResultSizeChars"]` annotation to bypass tool result truncation (up to 500K chars), enabling full DB schema passthrough. Adds `disableSkillShellExecution` flag to prevent unintended shell execution within skills. [Release Notes](https://github.com/anthropics/claude-code/releases/tag/v2.1.91)

---

### **Hot Issues**

| Issue | Summary | Why It Matters | Community Reaction |
|------|--------|----------------|------------------|
| [#38335](https://github.com/anthropics/claude-code/issues/38335) | Max plan sessions deplete 2–3× faster than documented since Mar 23 | Direct cost impact for high-tier subscribers; suggests backend accounting or tokenization regression | 365 comments, +294 👍 |
| [#41788](https://github.com/anthropics/claude-code/issues/41788) | Max 20 plan hits 100% usage in ~70 mins post-v2.1.89 | First-time anomaly; implies per-message token inflation or hidden overhead | 26 comments, +44 👍 |
| [#42052](https://github.com/anthropics/claude-code/issues/42052) | 15% of Max quota consumed after 2h light work (5 commits) | Contradicts "light usage" expectations; signals opaque cost model | 19 comments, +9 👍 |
| [#1421](https://github.com/anthropics/claude-code/issues/1421) | Recurring JS heap OOM crashes during "thinking" phase | Blocks long-running agentic workflows; indicates memory management flaw | 64 comments, +30 👍 |
| [#41930](https://github.com/anthropics/claude-code/issues/41930) | Broad usage drain across all paid tiers; multiple root causes suspected | Calls out lack of transparency; urges Anthropic to communicate diagnostics | 9 comments, +14 👍 |
| [#41814](https://github.com/anthropics/claude-code/issues/41814) | Terminal messages vanish mid-conversation post-v2.1.89 | Breaks UX continuity; suggests rendering or streaming buffer bug | 50 comments, +86 👍 |
| [#37192](https://github.com/anthropics/claude-code/issues/37192) | Desktop ignores WSL permission configs, prompting per-file approval | Hinders automation in WSL environments; points to path resolution bug | 8 comments, +1 👍 |
| [#32145](https://github.com/anthropics/claude-code/issues/32145) | Request: user-managed MCP config via `~/.claude/settings.json` | Improves portability and version control of MCP setups | 6 comments, +9 👍 |
| [#42857](https://github.com/anthropics/claude-code/issues/42857) | macOS sandbox blocks `SystemConfiguration` API, crashing Rust tools | Breaks interoperability with CLI tools like Codex; security vs. compatibility tradeoff | New, 1 comment |
| [#42837](https://github.com/anthropics/claude-code/issues/42837) | Bash cwd reset between calls despite project-level persistence | Regresses expected behavior; impacts multi-step terminal workflows | 4 comments |

---

### **Key PR Progress**

| PR | Summary | Impact |
|----|--------|--------|
| [#35710](https://github.com/anthropics/claude-code/pull/35710) | Prevents Windows BSOD via tool-mutex plugin limiting concurrent fs ops | Critical stability fix for Win users |
| [#42807](https://github.com/anthropics/claude-code/pull/42807) | Restores stop/prompt hook patterns in Hookify | Fixes broken pre/post-hook logic for stop/prompt events |
| [#42701](https://github.com/anthropics/claude-code/pull/42701) | Fixes `init-firewall.sh` crash on duplicate IP domains | Stabilizes devcontainer provisioning |
| [#42505](https://github.com/anthropics/claude-code/pull/42505) | Corrects `git checkout -b` instead of invalid `--branch` flag | Unblocks `/commit-push-pr` workflow |
| [#38728](https://github.com/anthropics/claude-code/pull/38728) | Adds `memory-alert` plugin for RSS monitoring | Proactive debugging aid for memory leaks |
| [#41611](https://github.com/anthropics/claude-code/pull/41611) | Adds missing source attribution | Improves auditability and compliance |
| [#41447](https://github.com/anthropics/claude-code/pull/41447) | Open-sources Claude Code core | Major transparency milestone; enables self-hosting/contrib |
| [#42265](https://github.com/anthropics/claude-code/pull/42265) | Updates deprecated npm install docs to curl-based flows | Aligns with modern secure install practices |
| [#39148](https://github.com/anthropics/claude-code/pull/39148) | Preserves session history across project moves/renames | Solves path-dependent session loss |
| [#42665](https://github.com/anthropics/claude-code/pull/42665) | Adds comprehensive codebase documentation | Accelerates onboarding and debugging |

---

### **Feature Request Trends**
- **MCP Configuration Portability**: Users demand declarative, file-based MCP server management (e.g., via `settings.json`) rather than UI-only setup (#32145).
- **Thinking Status Customization**: Requests to disable or theme the random thinking words (“mulling”, “forging”) for accessibility or aesthetic reasons (#42851).
- **Session Persistence Robustness**: Desire for path-independent session IDs that survive project relocation (#39148).
- **Transparent Cost Controls**: Need for real-time token usage dashboards and per-workflow budgeting to counter erratic Max plan depletion (#38335, #41930).

---

### **Developer Pain Points**
- **Erratic Rate Limiting**: Multiple reports confirm Max plan quotas are burning at 10–15%/hour even during trivial edits—far exceeding advertised rates.
- **Memory Instability**: JavaScript heap exhaustion during “thinking” phases disrupts long-lived agent sessions, especially on macOS/Linux (#1421).
- **Sandbox Overreach**: macOS seatbelt policies now block legitimate system APIs used by third-party CLI tools (e.g., Rust’s `system-configuration` crate).
- **Hook Inconsistencies**: Pre-tool-use hooks fail silently on slash commands, breaking enforcement pipelines (#42250).
- **Terminal Rendering Glitches**: Post-update message disappearance corrupts conversational context visibility (#41814).

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

**OpenAI Codex Community Digest – April 3, 2026**

---

### **Today's Highlights**

The Codex team released three alpha Rust updates (v0.119.0-alpha.5 through -alpha.3), focusing on internal infrastructure improvements and sandboxing refinements. A notable regression surfaced in CLI v0.118.0 where token usage is misreported as "Other," prompting immediate investigation. Additionally, Windows-specific crashes and MCP authentication gaps continue to draw active community attention.

---

### **Releases**

- **rust-v0.119.0-alpha.5** (Mar 31): Internal refactoring for better async handling and tool handler optimizations.
- **rust-v0.119.0-alpha.4** (Mar 31): Continued modularization of core components, including models manager extraction.
- **rust-v0.119.0-alpha.3** (Mar 30): Fixes to shell-aware test execution and Bazel build configuration for cross-platform consistency.

> *No user-facing CLI or app releases today.*

---

### **Hot Issues**

1. **[Semantic Codebase Indexing & Search](https://github.com/openai/codex/issues/5181)**  
   Users urgently need semantic search to navigate large codebases—current grep-based context retrieval fails at scale. Strong demand (+31 👍) with 17 comments highlights this as a top UX blocker for agentic workflows.

2. **[Windows Crash with WSL Config Location](https://github.com/openai/codex/issues/13699)**  
   Enterprise Windows users report crashes when Codex attempts to read WSL paths. Critical for hybrid dev environments; 15 comments reflect growing frustration among Pro subscribers.

3. **[npm Install Broken on Windows Post Dist-Tag Change](https://github.com/openai/codex/issues/11744)**  
   Regression after packaging changes prevents global installation on Windows via npm. Noted by 17 users—impacting CI/CD pipelines and local setups.

4. **[Langfuse Tracing Integration Proposal](https://github.com/openai/codex/issues/1721)**  
   Request for structured observability in agent runs. Popular among teams using LLM monitoring stacks; 15 👍 indicate strong enterprise interest.

5. **[RISC-V Support Request](https://github.com/openai/codex/issues/6150)**  
   First-party support needed for `riscv64` Linux (Ubuntu 24.04). Niche but important for embedded/cloud-native developers; limited traction so far.

6. **[MCP Login Missing OAuth Resource Indicator](https://github.com/openai/codex/issues/13891)**  
   Auth tokens issued for wrong audience due to omitted `resource` field in OAuth flow. Security-sensitive; updated yesterday with 6 comments.

7. **[Auto Reasoning Effort Tiering](https://github.com/openai/codex/issues/8649)**  
   Dynamic selection of reasoning tiers (min/low/…/xhigh) per task. Inspired by Claude Code’s approach; 3 👍 but clear use-case value.

8. **[Agent Teams Functionality](https://github.com/openai/codex/issues/11436)**  
   Multi-agent collaboration akin to Claude Code’s “teams.” High visibility (+11 👍); suggests competitive feature parity expectations.

9. **[Token Usage Misreported as "Other" in v0.118.0](https://github.com/openai/codex/issues/16610)**  
   New bug in recent release breaks billing transparency. Opened yesterday with 4 comments—likely to spike engagement.

10. **[Configurable Plans Save Directory](https://github.com/openai/codex/issues/12878)**  
    Desire to control where `.codex/plans/` files are stored. Useful for version control hygiene; 8 👍 shows recurring pain point.

---

### **Key PR Progress**

1. **[Extract Models Manager from Core](https://github.com/openai/codex/pull/16508)**  
   Decouples model metadata logic from core, enabling cleaner provider abstractions.

2. **[Fix Windows ShellCommand Cleanup](https://github.com/openai/codex/pull/15890)**  
   Improves process tree termination on Windows during timeouts using `taskkill /T /F`.

3. **[Harden Sandbox Mount Order Tests](https://github.com/openai/codex/pull/15930)**  
   Makes mount ordering assertions host-agnostic to fix flaky CI on non-root systems.

4. **[Native Async ToolHandler Implementation](https://github.com/openai/codex/pull/16630)**  
   Drops `async-trait` macro to cut compile times by 63% in `codex-core`.

5. **[Type-Erased ToolHandler](https://github.com/openai/codex/pull/16627)**  
   Further reduces monomorphization overhead, improving build performance across tool handlers.

6. **[Fork Sessions into Multiplexer Panes](https://github.com/openai/codex/pull/14428)**  
   Adds tmux/zellij-aware pane spawning for session forks—enhances multi-threaded agent workflows.

7. **[Guardian Event Ordering Fix](https://github.com/openai/codex/pull/16462)**  
   Ensures predictable rendering of auto-review payloads in the frontend.

8. **[Move Shell Logic Out of Core](https://github.com/openai/codex/pull/16533)**  
   Resolves dependency inversion around `ShellType`, reducing duplication between crates.

9. **[Windows Bazel Test Coverage Fix](https://github.com/openai/codex/pull/16528)**  
   Addresses coverage gaps in Rust tests on Windows Bazel pipeline.

10. **[CRLF Setting for Windows](https://github.com/openai/codex/issues/9915)** *(linked issue)*  
   While not yet implemented, underlying work may involve patch handling—currently open as enhancement.

---

### **Feature Request Trends**

- **Semantic Search & Context Management**: Dominant ask (#5181, #13142)—users struggle with large-codebase navigation.
- **Observability & Tracing**: Langfuse integration (#1721) signals need for structured telemetry in agent runs.
- **Platform Expansion**: RISC-V support (#6150) and improved Windows/Linux sandboxing show demand beyond x86_64.
- **Dynamic Reasoning Control**: “Auto” reasoning tiering (#8649) reflects desire for adaptive compute allocation.
- **Team Collaboration**: Agent teams (#11436) mirror trends seen in competing AI coding assistants.
- **Customization & Control**: Configurable plan dirs (#12878), CRLF settings (#9915), and hook notifications (#12341) emphasize configurability needs.

---

### **Developer Pain Points**

- **Windows Instability**: Multiple reports of crashes (#13699), broken installs (#11744), and shell command issues plague Windows users.
- **Sandbox Restrictions**: Gradle denial (#5228) and lack of allow-listing (#12716) hinder corporate adoption.
- **Context Window Limitations**: Without semantic indexing, agents hit token walls quickly in medium-to-large repos.
- **Billing Transparency**: Misreported token usage (#16610) erodes trust in subscription models.
- **Auth Complexity**: MCP OAuth flows omit critical parameters (#13891), causing misconfigured tokens.

--- 

*End of Digest*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

**Gemini CLI Community Digest – 2026-04-03**

---

### 1. Today's Highlights  
The Gemini CLI team released **v0.37.0-preview.1**, applying a targeted patch to stabilize the preview build. Concurrently, UI flicker issues on terminal rendering are being addressed via an experimental `TerminalBuffer` mode in PR #24512. Several high-priority agent and core-layer bugs—including clipboard behavior on macOS and SSH text scrambling—are under active investigation.

---

### 2. Releases  
**v0.37.0-preview.1** (2026-04-02): A maintenance release cherry-picking a fix from earlier in the preview cycle to ensure version consistency. No functional changes reported.  
[Full Changelog](https://github.com/google-gemini/gemini-cli)

---

### 3. Hot Issues  

| Issue | Summary | Impact |
|------|--------|--------|
| [#24557](https://github.com/google-gemini/gemini-cli/issues/24557) | On macOS, pasting large content with CMD+V triggers multiple unintended prompt submissions. Users report this disrupts workflow during code paste operations. | High — affects core input handling; 7 comments, no upvotes yet. |
| [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) | Epic tracking AST-aware file reads/search for improved codebase navigation efficiency. Proposes reducing token noise and misaligned edits. | Strategic — guides future agent tooling direction; 4 comments. |
| [#22863](https://github.com/google-gemini/gemini-cli/issues/22863) | Frequent unsafe object cloning by generated code risks type safety. Example shows incomplete proxy implementations. | Medium — impacts reliability of auto-generated code; 2 comments. |
| [#22267](https://github.com/google-gemini/gemini-cli/issues/22267) | Browser Agent ignores `settings.json` overrides like `maxTurns`, breaking user control over session length. | P2 — undermines configuration flexibility; 2 comments. |
| [#24202](https://github.com/google-gemini/gemini-cli/issues/24202) | Text scrambles when using Gemini CLI over SSH on Windows-to-gLinux setups, making it unusable. | UX-critical — blocks remote usage; 1 comment. |
| [#23582](https://github.com/google-gemini/gemini-cli/issues/23582) | Subagents lack awareness of Approval Mode constraints (e.g., Plan vs Auto-Edit), causing policy violations. | Security/UX risk — 1 👍. |
| [#23571](https://github.com/google-gemini/gemini-cli/issues/23571) | Model spills temporary scripts across random directories, complicating workspace cleanup. | Productivity drain — 1 comment. |
| [#22819](https://github.com/google-gemini/gemini-cli/issues/22819) | Memory routing needs global vs. project separation via `~/.gemini/` and `.gemini/`. | Enhances personalization — 1 👍. |
| [#22809](https://github.com/google-gemini/gemini-cli/issues/22809) | Main agent lacks prompting to proactively use memory subagent for user preferences. | Improves long-term context retention — 1 👍. |
| [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) | Subagent incorrectly reports "GOAL success" after hitting MAX_TURNS, hiding interruptions. | Misleading UX — 2 👍. |

---

### 4. Key PR Progress  

| PR | Change | Status |
|----|--------|--------|
| [#24512](https://github.com/google-gemini/gemini-cli/pull/24512) | Introduces `TerminalBuffer` mode to eliminate UI flicker during rendering. | Open |
| [#24275](https://github.com/google-gemini/gemini-cli/pull/24275) | Adds `_meta.legacyState` typing for AgentProtocol objects + `useAgentProtocol` flag. | Open |
| [#24577](https://github.com/google-gemini/gemini-cli/pull/24577) | Fixes sandbox approval persistence for tools like npm after session allow. | Open |
| [#24582](https://github.com/google-gemini/gemini-cli/pull/24582) | Simplifies sandbox status labels in footer (Docker/Podman/macOS unified). | Open |
| [#24571](https://github.com/google-gemini/gemini-cli/pull/24571) | Removes broken PowerShell translation for `__write` on Windows; fixes native helper. | Open |
| [#23956](https://github.com/google-gemini/gemini-cli/pull/23956) | Restores autocomplete execution & subcommand disclosure after regression. | Open |
| [#24476](https://github.com/google-gemini/gemini-cli/pull/24476) | Enables Windows CI tests by fixing argument parsing & enforcing non-zero exit checks. | Open |
| [#24578](https://github.com/google-gemini/gemini-cli/pull/24578) | Fixes crash from invalid `data.slice()` call due to unsafe typing assumptions. | Open |
| [#24468](https://github.com/google-gemini/gemini-cli/pull/24468) *(closed)* | Leveraged new ink TerminalBuffer renderer; resolved snapshot diffs. | Closed |
| [#24376](https://github.com/google-gemini/gemini-cli/pull/24376) | Enhances tool confirmation UI with clearer visual boundaries for commands/diffs. | Open |

---

### 5. Feature Request Trends  

- **Memory Intelligence**: Users want better prompting and routing for persistent user/project-specific memory (issues #22819, #22809).
- **AST-Aware Tooling**: Demand for smarter codebase navigation via abstract syntax tree context (issue #22745).
- **Approval Mode Integration**: Subagents need explicit awareness of execution modes to avoid policy conflicts (#23582).
- **Compact Output Defaults**: Strong interest in enabling “Compact Tool Output” by default to reduce visual clutter (#24509).
- **Cross-Platform Consistency**: Requests for robust SSH support and consistent terminal behavior across OSes (#24202).

---

### 6. Developer Pain Points  

- **Uncontrolled Input Handling**: Large pastes triggering unintended prompts break interactive flow (#24557).
- **Sandbox Configuration Fragility**: Inconsistent tool approval persistence, especially for network-accessing tools (#24577).
- **UI Instability**: Flickering and scroll jitter in long chat sessions degrade usability (#24470).
- **Misleading Agent Feedback**: Agents claiming success despite hitting turn limits obscure real failures (#22323).
- **Windows-Specific Bugs**: Native helper crashes and PowerShell translation errors hinder Windows adoption (#24571).

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

**GitHub Copilot CLI Community Digest – 2026-04-03**

---

### **Today's Highlights**
The latest release, v1.0.16, introduces critical improvements to MCP tool handling and authentication resilience, including better error visibility and reconnection logic. Concurrently, a surge of user reports highlights growing instability around HTTP/2 connection management and persistent UI bugs—particularly the "Loading environment" spinner—indicating backend reliability concerns that may impact developer productivity.

---

### **Releases**
**v1.0.16 (2026-04-02)**  
- Fixed SQL prompt tags appearing when `sql` tool is excluded via `excludedTools` or `availableTools`.  
- MCP tool calls now display tool name and parameter summary in the timeline for improved observability.  
- MCP servers reconnect correctly with valid auth when the working directory changes.  
- Added `PermissionRequest` type support.  
*Pre-release: v1.0.16-1*

---

### **Hot Issues**

1. **[#2101](https://github.com/github/copilot-cli/issues/2101)** – Frequent transient API errors leading to rate limit messages despite retries (16 comments, +12). Users report repeated failures even after brief waits, suggesting poor retry logic or misconfigured quotas.

2. **[#2479](https://github.com/github/copilot-cli/issues/2479)** – Custom MCP servers blocked by policy due to 404 on registry fetch (5 comments, +10). Even paid users face this, undermining trust in MCP functionality.

3. **[#2421](https://github.com/github/copilot-cli/issues/2421)** – HTTP/2 GOAWAY race condition causes cascading retries and wasted premium requests (+8). Consolidates multiple related bug reports; points to systemic networking layer flaws.

4. **[#2334](https://github.com/github/copilot-cli/issues/2334)** – Removal of alt-screen breaks usability: no scrollback, search, or history visibility (+14). Strong community backlash over degraded UX.

5. **[#135](https://github.com/github/copilot-cli/issues/135)** – Light theme not rendering correctly in terminal (+9). Aesthetic regression affecting visual consistency across environments.

6. **[#2462](https://github.com/github/copilot-cli/issues/2462)** & **[#2459](https://github.com/github/copilot-cli/issues/2459)** – "Loading environment" indicator hangs indefinitely despite full load completion (+6 each). Critical UI feedback loop failure.

7. **[#2285](https://github.com/github/copilot-cli/issues/2285)** – Copied commands contain invisible Unicode BOM characters, causing “command not found” in external shells (+3). Impacts workflow integration.

8. **[#2050](https://github.com/github/copilot-cli/issues/2050)** – Claude Sonnet 4.6 fails with HTTP/2 GOAWAY errors; Gemini Pro works fine (+4). Model-specific reliability gap.

9. **[#2434](https://github.com/github/copilot-cli/issues/2434)** – Loss of Gemini Pro model support since v1.0.14 (+5). Users forced to switch tools due to missing option.

10. **[#1257](https://github.com/github/copilot-cli/issues/1257)** – No Termux/Android support due to missing native `pty.node` module (+7). Mobile accessibility remains unaddressed.

---

### **Key PR Progress**
*No pull requests were updated in the last 24 hours.*

---

### **Feature Request Trends**
- **Enhanced command discoverability**: Users want autocomplete, descriptions, or a help menu for slash commands like `/fleet`, `/delegate`, etc. (#2489)
- **Restore legacy UX elements**: Demand to bring back “no-alt-screen” mode for better terminal navigation and history access (#2334)
- **Cross-platform clipboard/image paste**: Especially in WSL/Windows contexts (#1217)
- **Model flexibility**: Reintroduce dropped models like Gemini Pro (#2434) and allow per-agent model specification in plugin YAML frontmatter (#2492)
- **Transparent agent spawning**: Notify users when background agents spawn sub-agents (#2493)

---

### **Developer Pain Points**
- **Unreliable network handling**: Recurring HTTP/2 GOAWAY issues lead to silent failures and wasted quota (#2421, #2050, #2101)
- **Poor error diagnostics**: Transient errors mask root causes; lack of actionable feedback during rate limiting or auth expiry
- **UI/UX regressions**: Persistent loading states and broken copy-paste mechanisms disrupt core workflows
- **Platform fragmentation**: Missing support on Android/Termux and inconsistent behavior between OSes
- **MCP policy enforcement opacity**: Automatic blocking of custom MCP servers without clear justification or override options (#2479, #2481)

--- 

*For full context, see the [issue tracker](https://github.com/github/copilot-cli/issues).*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

**Kimi Code CLI Community Digest – 2026-04-03**

---

### **Today's Highlights**
The Kimi Code CLI team released version **1.30.0**, focusing on Windows PowerShell path resolution improvements and a new `--plan` flag for CLI sessions. A surge of user feedback highlights growing demand for better session management, clipboard integration, and cross-platform line-ending handling. Several long-standing pain points around agent stability and documentation clarity are now actively being addressed.

---

### **Releases**

**v1.30.0**  
- Fixed full PowerShell path detection on Windows (PR #1703, #1713)  
- Added `--plan` flag to start CLI sessions directly in plan mode (#1666)  
- Enhanced export UX with confirmation prompts and session preview (#1727)  
- Improved subagent exception handling to prevent silent failures (#1730)  
- Introduced sensitive file protection via `SensitiveFileGuard` system (#1722)  

[Full Changelog](https://github.com/MoonshotAI/kimi-cli/pull/1734)

---

### **Hot Issues**

| ID | Title & Summary | Why It Matters |
|----|------------------|----------------|
| [#1671](https://github.com/MoonshotAI/kimi-cli/issues/1671) | **Bug**: Code quoting triggers content filter false positives (Error 400). | Users report legitimate code references flagged as "high risk," blocking normal workflows. Closed after validation logic update. |
| [#1719](https://github.com/MoonshotAI/kimi-cli/issues/1719) | **Enhancement**: Support configurable line endings (CRLF vs LF) on Windows. | Prevents unwanted `.gitattributes` churn; critical for teams enforcing LF across platforms. Still open. |
| [#1711](https://github.com/MoonshotAI/kimi-cli/issues/1711) | **Enhancement**: Urgent plea to improve KIMI Code documentation clarity. | Highlights poor model support listing, missing Web Search/Fetch details, and console bugs (e.g., accidental API key deletion). Open. |
| [#1695](https://github.com/MoonshotAI/kimi-cli/issues/1695) | **Bug**: Scheduled tasks fail post-Openclaw integration with rate-limit errors. | Suggests backend overload or quota misalignment; affects paid Allgletto users relying on automation. Closed as server-side issue. |
| [#1735](https://github.com/MoonshotAI/kimi-cli/issues/1735) | **Bug**: Uploaded files disappear from workspace in long sessions. | Breaks context continuity in `/sessions`; confusing UX for multi-turn development. Open. |
| [#1666](https://github.com/MoonshotAI/kimi-cli/issues/1666) | **Feature Request**: Add `--plan` flag to bypass interactive activation. | Requested since v1.28; finally implemented in v1.30.0. Closed. |
| [#1729](https://github.com/MoonshotAI/kimi-cli/issues/1729) | **Enhancement**: Custom session naming/renaming. | Improves session organization in large projects. Open. |
| [#1725](https://github.com/MoonshotAI/kimi-cli/issues/1725) | **Feature Request**: `/copy` command to save assistant response to clipboard. | Addresses manual selection friction; PR already merged (#1726). |
| [#1721](https://github.com/MoonshotAI/kimi-cli/issues/1721) | **Feature Request**: Workflow orchestration for structured agent pipelines. | Proposes deterministic control beyond prompt-based agents—aligns with rising MLOps/AIOps use cases. Open. |
| [#1702](https://github.com/MoonshotAI/kimi-cli/issues/1702) | **Bug**: Shell tool fails on Windows if `powershell.exe` not in PATH. | Root cause: hardcoded assumption about PowerShell presence. Fixed in v1.30.0 with fallback logic. Closed. |

---

### **Key PR Progress**

| ID | Title | Impact |
|----|------|--------|
| [#1734](https://github.com/MoonshotAI/kimi-cli/pull/1734) | Bump to v1.30.0 + deps | Ships core fixes: session resume, `/undo`, `/fork`, `--plan`, export UX, sensitive file guard |
| [#1726](https://github.com/MoonshotAI/kimi-cli/pull/1726) | feat(slash): `/copy` command | Solves high-friction text capture; directly addresses #1725 |
| [#1723](https://github.com/MoonshotAI/kimi-cli/pull/1723) | feat(shell): `/undo` & `/fork` | Enables non-destructive experimentation and history navigation |
| [#1722](https://github.com/MoonshotAI/kimi-cli/pull/1722) | feat(grep): `include_ignored` + SensitiveFileGuard | Protects secrets while allowing opt-in `.gitignore` bypass |
| [#1730](https://github.com/MoonshotAI/kimi-cli/pull/1730) | fix(subagent): graceful exception handling | Prevents "None" error spam during tool failures |
| [#1716](https://github.com/MoonshotAI/kimi-cli/pull/1716) | feat(cli): `--session`/`--resume` picker | Reintroduces unified session restore UX (reverted earlier due to design conflicts) |
| [#1717](https://github.com/MoonshotAI/kimi-cli/pull/1717) | fix(skill): merge brand + generic skill dirs | Fixes silent skill loss when generic dir exists but is empty |
| [#1724](https://github.com/MoonshotAI/kimi-cli/pull/1724) | fix(approval): prevent parallel approval hang | Stabilizes interactive shell during concurrent subagent requests |
| [#1715](https://github.com/MoonshotAI/kimi-cli/pull/1715) | feat(plugin): Claude-compatible local plugin layer | Draft PR enabling hybrid plugin ecosystems; responds to #1714 |
| [#1650](https://github.com/MoonshotAI/kimi-cli/pull/1650) | feat(web): embedded runtime by default | Switches default execution model to reduce process overhead and improve isolation |

---

### **Feature Request Trends**

- **Session Management**: Custom naming, persistent context, and visual organization remain top priorities.
- **Developer Experience**: Clipboard integration (`/copy`), undo/fork workflows, and clearer CLI flags reduce cognitive load.
- **Cross-Platform Consistency**: Line ending configuration (#1719), shell tool reliability on Windows.
- **Workflow Orchestration**: Structured, multi-step agent pipelines beyond single-turn interactions (#1721).
- **Plugin Ecosystem**: Claude-style local plugin compatibility to enable extensibility without vendor lock-in (#1714, #1715).

---

### **Developer Pain Points**

- **False-Positive Content Filtering**: Legitimate code snippets trigger security filters (#1671).
- **Inconsistent Documentation**: Model support, Web Search features, and UI behaviors poorly documented (#1711).
- **Session Context Loss**: Files uploaded in web UI vanish from active workspace over time (#1735).
- **Agent Instability**: Subagents crash silently or hang during approval cycles (#1720, #1730).
- **Windows-Specific Bugs**: PowerShell detection and CRLF enforcement break Git hygiene (#1702, #1719).

> *Note: The community shows strong engagement around usability enhancements and platform consistency. Maintainers are responsive—many feature requests from early April are already implemented or in progress.*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

**OpenCode Community Digest – April 3, 2026**

---

### **Today’s Highlights**
No new releases were published in the last 24 hours. However, significant progress is underway on Windows compatibility fixes for both the TUI and SDK layers, with multiple PRs targeting spawn and process-handling regressions. A major discussion around memory usage diagnostics has been consolidated into a central thread to streamline troubleshooting across reported heap issues.

---

### **Releases**
*None in the past 24 hours.*

---

### **Hot Issues**

1. **[#1505](https://github.com/anomalyco/opencode/issues/1505)** – `shift+enter` keybinding broken in OpenTUI  
   The widely used shortcut fails to insert newlines, while `ctrl+j` works—causing workflow disruption for users relying on standard input conventions. With 122 comments and strong community support (92 👍), this UX regression is actively prioritized.

2. **[#13768](https://github.com/anomalyco/opencode/issues/13768)** – Opus 4.6 lacks assistant message prefill support  
   Blocks seamless conversation flow when using GitHub Copilot models; forces unnatural conversation endings. Reported by a frequent user, it reflects growing friction with high-end model integrations.

3. **[#5361](https://github.com/anomalyco/opencode/issues/5361)** – TUI freezes ~10 sec periodically on WSL2 (regression since v1.0.129)  
   Input buffering during freezes degrades usability on Linux/WSL environments. Noted as a critical blocker for DevOps workflows; 15 upvotes signal urgency among cross-platform users.

4. **[#4406](https://github.com/anomalyco/opencode/issues/4406)** – Why must Read tool precede Edit tool?  
   Raises design clarity concerns: if file content is already in context, redundant Read calls seem inefficient. Zero 👍 but 31 comments indicate developer confusion about tool semantics—potentially impacting agent efficiency.

5. **[#459](https://github.com/anomalyco/opencode/issues/459)** – Privacy & data collection clarification request  
   Seeks explicit documentation on local-first guarantees and telemetry. Strong privacy-conscious response (46 👍) underscores demand for transparency, especially for enterprise adoption.

6. **[#20694](https://github.com/anomalyco/opencode/issues/20694)** – MySQL “No database selected” error on first launch  
   Prevents initial setup on remote VPS instances due to misconfigured IP usage tracking. First-time user impact; suggests backend initialization path issues under non-default DB contexts.

7. **[#20650](https://github.com/anomalyco/opencode/issues/20650)** – Kimi k2.5 tool-calling fails with malformed JSON  
   Model attempts invalid `bash` tool invocation with unterminated string—highlighting fragile JSON parsing in dynamic tool dispatch. Critical for agents using reasoning models.

8. **[#20695](https://github.com/anomalyco/opencode/issues/20695)** – Memory Megathread for heap snapshot collection  
   Centralized effort to diagnose recurring memory bloat reports. Community-driven initiative urging users to share profiles; reflects systemic concern about resource management in long-running sessions.

9. **[#7292](https://github.com/anomalyco/opencode/issues/7292)** – Plan mode edits files unexpectedly with Gemini 3 Pro  
   Agents bypass user intent during planning feedback cycles. Suggests misalignment between plan representation and execution logic in certain model backends.

10. **[#19081](https://github.com/anomalyco/opencode/issues/19081)** – `reasoning_content` stripped on replay → invalidates KV cache  
   Breaks local inference consistency when thinking tokens are dropped from history. Impacts offline/self-hosted use cases reliant on cache integrity.

---

### **Key PR Progress**

1. **[#20772](https://github.com/anomalyco/opencode/pull/20772)** – Fix Windows opencode spawn/shutdown via `cross-spawn`  
   Replaces brittle `child_process.spawn` with cross-platform helper to resolve ENOENT errors on Windows CLI launches.

2. **[#20764](https://github.com/anomalyco/opencode/pull/20764)** – WIP: SDK spawn fix on Windows  
   Early-stage work to audit and replace Node spawn usage in SDK layer for better Windows compatibility.

3. **[#20765](https://github.com/anomalyco/opencode/pull/20765)** – Serialize startup refreshes across processes using Flock  
   Prevents duplicate model fetches during concurrent CLI/TUI startups, improving reliability and reducing API churn.

4. **[#16306](https://github.com/anomalyco/opencode/pull/16306)** – Honor user-defined model input limits (e.g., gpt-5.4)  
   Enables override of hardcoded token caps for long-context models, addressing #16298 directly.

5. **[#5422](https://github.com/anomalyco/opencode/pull/5422)** – Provider-specific cache config system  
   Introduces per-provider caching strategies to slash token usage—already showing measurable gains in internal A/B tests with Claude Opus 4.5.

6. **[#20770](https://github.com/anomalyco/opencode/pull/20770)** – Use session CWD for command substitution (`!\`...\``)  
   Fixes incorrect working directory resolution in slash commands, ensuring substitutions reflect the active session context.

7. **[#20769](https://github.com/anomalyco/opencode/pull/20769)** – Tolerate wrapped workflow tool arguments  
   Expands GitLab DWS JSON parser to accept fenced blocks and prose-wrapped payloads, reducing parse failures.

8. **[#20768](https://github.com/anomalyco/opencode/pull/20768)** – Lazy-load `bun:ffi` on Windows  
   Avoids startup crashes when Bun FFI isn’t available, fixing TUI launch failures on some Windows builds.

9. **[#19916](https://github.com/anomalyco/opencode/pull/19916)** – Preserve custom tool arg descriptions & validation  
   Restores Zod metadata after JSON export and adds runtime input checks—critical for plugin ecosystem stability.

10. **[#20596](https://github.com/anomalyco/opencode/pull/20596)** – Effectify share-next module  
   Migrates sharing subsystem to repo’s effectful architecture, enabling better state lifecycle management and testability.

---

### **Feature Request Trends**

- **Cross-platform robustness**: Enhanced Windows/TUI/SDK parity remains dominant, driven by WSL2 freeze reports and spawn errors.
- **Model flexibility**: User-overridable input limits and broader provider support (especially OpenAI-compatible) top wishlists.
- **Privacy transparency**: Clearer documentation on data handling and telemetry opt-outs requested by security-conscious teams.
- **Agent control semantics**: Confusion around mandatory Read-before-Edit and plan-mode behavior indicates need for configurability or better defaults.
- **MCP performance**: Asynchronous loading of MCP servers is sought to eliminate startup blocking, especially for remote tools.

---

### **Developer Pain Points**

- **Windows instability**: Recurring issues with process spawning, ANSI escape corruption, and FFI availability degrade DX.
- **Tool calling fragility**: Models generating malformed JSON for tools (e.g., Kimi k2.5) expose brittle parsing logic.
- **Memory bloat**: Scattered reports of heap growth suggest insufficient garbage collection or context accumulation in long sessions.
- **Session/CWD misalignment**: Commands using `!\`...\`` fail to respect session directory, breaking automation scripts.
- **Cache inconsistency**: Stripped `reasoning_content` corrupts replay and cache validity—problematic for local inference setups.

--- 

*Prepared by OpenCode Technical Analyst | Data source: [anomalyco/opencode](https://github.com/anomalyco/opencode)*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

**Qwen Code Community Digest – April 3, 2026**

---

### **Today's Highlights**
The Qwen Code team released v0.14.0-preview.5 and a corresponding nightly build, both focusing on stability improvements including path normalization in Markdown files and proxy URL handling. Meanwhile, strong user demand for Qwen 3.6 model integration continues to surge across multiple open issues, reflecting growing anticipation for next-gen inference support.

---

### **Releases**

- **v0.14.0-preview.5**: Fixed path replacement logic during extension installation and improved proxy URL parsing by normalizing inputs without protocol prefixes ([PR #2769](https://github.com/QwenLM/qwen-code/pull/2769), [PR #2745](https://github.com/QwenLM/qwen-code/pull/2745)).  
- **v0.14.0-nightly.20260402.a5f17ee39**: Same fixes as above; included in nightly release.

---

### **Hot Issues**

1. **[#2832](https://github.com/QwenLM/qwen-code/issues/2832)** — Urgent request for Qwen 3.6 availability, with users frustrated it’s supported in OpenCode but not Qwen Code.  
2. **[#2806](https://github.com/QwenLM/qwen-code/issues/2806)** — Chinese-language plea for Qwen 3.6 support, gaining 👍 from community.  
3. **[#2306](https://github.com/QwenLM/qwen-code/issues/2306)** — Critical crash when selecting "always allow" for command execution post-upgrade to v0.12.0; indicates regression in permission flow.  
4. **[#2740](https://github.com/QwenLM/qwen-code/issues/2740)** — Session freezes due to missing tree-sitter WASM file at non-standard path; blocks basic shell usage.  
5. **[#2759](https://github.com/QwenLM/qwen-code/issues/2759)** — Embarrassment over Qwen 3.6 absence compared to OpenCode; highlights competitive gap.  
6. **[#2809](https://github.com/QwenLM/qwen-code/issues/2809)** — PostToolUse hook data (`additionalContext`) not surfaced to model despite documentation claiming otherwise.  
7. **[#677](https://github.com/QwenLM/qwen-code/issues/677)** — Long-running Sass refactoring causes infinite loop; P1 priority suggests impact on real workflows.  
8. **[#2828](https://github.com/QwenLM/qwen-code/issues/2828)** — ACP integration fails in non-interactive mode when slash commands require confirmation.  
9. **[#2785](https://github.com/QwenLM/qwen-code/issues/2785)** — Inability to switch to OpenRouter models despite correct `settings.json` configuration.  
10. **[#2839](https://github.com/QwenLM/qwen-code/issues/2839)** — MCP tool validation incorrectly rejects union types (e.g., `list[str] | None`); breaks type-safe integrations.

---

### **Key PR Progress**

1. **[#2820](https://github.com/QwenLM/qwen-code/pull/2820)** — 🎉 Added Qwen3.6-Plus model support; updates default configs and README.  
2. **[#2841](https://github.com/QwenLM/qwen-code/pull/2841)** — Fixes abort listener leak in hook error handlers, preventing memory leaks.  
3. **[#2840](https://github.com/QwenLM/qwen-code/pull/2840)** — Exposes channel send errors via `BlockStreamer.lastSendError`, replacing silent failures.  
4. **[#2831](https://github.com/QwenLM/qwen-code/pull/2831)** — Implements `PermissionDenialTracker` to escalate context on repeated denied tool calls.  
5. **[#2834](https://github.com/QwenLM/qwen-code/pull/2834)** — Restores previous theme on `/theme` cancel (fixes #2833).  
6. **[#2835](https://github.com/QwenLM/qwen-code/pull/2835)** — Awaits async chain in extension refresh flow to prevent race conditions.  
7. **[#2770](https://github.com/QwenLM/qwen-code/pull/2770)** — Adds Ctrl+O toggle between compact/verbose output modes for cleaner terminal UX.  
8. **[#2827](https://github.com/QwenLM/qwen-code/pull/2827)** — Introduces HTTP, Function, and Async hooks for extensible automation.  
9. **[#2732](https://github.com/QwenLM/qwen-code/pull/2732)** — Math rendering (LaTeX, fractions) + Markdown validator to prevent leakage.  
10. **[#2683](https://github.com/QwenLM/qwen-code/pull/2683)** — Properly parses `EDITOR` env var with arguments (e.g., `code --wait`).

---

### **Feature Request Trends**

- **Qwen 3.6 Integration**: Dominant ask across multiple issues (#2832, #2806, #2759); users want parity with OpenCode.  
- **Enhanced Tooling & Hooks**: Requests for Jupyter notebook support (#2816), universal output budgeting (#2818), microcompact context compression (#2817), and HTTP/Function hooks (#2827).  
- **Permission & Feedback Loops**: Desire for smarter denial tracking (#2819) and contextual fallbacks to avoid repetitive rejections.  
- **UI/UX Refinements**: Theme persistence (#2833), follow-up suggestions (#2525), and compact mode toggle (#2770).

---

### **Developer Pain Points**

- **Model Availability Gap**: Users express frustration that Qwen 3.6 is accessible elsewhere but not in Qwen Code.  
- **Hook Reliability Issues**: Both PostToolUse data leakage (#2809) and abort listener leaks (#2841) suggest fragile hook infrastructure.  
- **Configuration Fragility**: Multiple reports of broken provider switching (#2785), locale-driven file regeneration (#2830), and version conflicts during install (#2810).  
- **MCP & Type Safety**: Union-type validation errors (#2839) hinder robust MCP integration.  
- **Permission Flow Instability**: Crashes after “always allow” selections (#2306) indicate unstable auth state management.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/DenisZheng/agents-radar).*