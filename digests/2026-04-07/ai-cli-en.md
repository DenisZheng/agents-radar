# AI CLI Tools Community Digest 2026-04-07

> Generated: 2026-04-07 00:22 UTC | Tools covered: 7

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

**Cross-Tool AI CLI Ecosystem Report – April 7, 2026**

---

### **1. Ecosystem Overview**  
The AI developer CLI tooling landscape in early 2026 is defined by rapid iteration toward agentic workflows, extensibility via MCP (Model Context Protocol), and heightened focus on usability, safety, and cross-platform stability. Tools are converging on core capabilities—context management, subagent orchestration, and terminal UI polish—while diverging in go-to-market positioning: enterprise-grade control (Claude Code), open-source flexibility (OpenCode), and platform-native integration (Copilot CLI, Codex). Token efficiency, session persistence, and permission granularity have emerged as critical battlegrounds.

---

### **2. Activity Comparison**

| Tool               | Issues (Hot/Live) | Pull Requests (Active) | New Releases (24h) | Notable Status                          |
|--------------------|-------------------|------------------------|--------------------|-------------------------------------------|
| **Claude Code**    | 10                | 10                     | No                 | Open-sourcing milestone; quota regressions |
| **OpenAI Codex**   | 10                | 10                     | Yes (v0.119.0-α)   | Alpha momentum; token inefficiency pains  |
| **Gemini CLI**     | 10                | 10                     | Yes (nightly v0.36)| Policy hardening; OAuth/model bugs        |
| **Copilot CLI**    | 10                | 0                      | Yes (v1.0.19)      | Stabilization phase; legacy issue cleanup |
| **Kimi Code CLI**  | 5                 | 4                      | No                 | UX rewrite initiative; background stalls  |
| **OpenCode**       | 10                | 10                     | Yes (v1.3.17)      | Mobile/touch focus; data-loss bug alert |
| **Qwen Code**      | 10                | 10                     | No                 | Subagent parity drive; TUI flicker fixes  |

*Note: All tools maintain active issue tracking; only OpenAI Codex and Gemini CLI released new builds in the last day.*

---

### **3. Shared Feature Directions**

- **Context Efficiency**: Zero-cost compression (#1691 Kimi), `/compact` cost reduction (#24147 Claude), and automatic memory config (#24474 Gemini) reflect universal demand to reduce LLM token burn during long sessions.
- **Clipboard & Media Input**: Alt+V paste image shortcuts appear across Kimi (#781), Gemini (#15051), and Copilot contexts—indicating a UX standard for richer input beyond text.
- **MCP Tool Reliability**: Local server detection (#679 Copilot), sandbox failures (#10601 Codex), and Windows auth gaps (#44436 Claude) show persistent infrastructure fragility around external tooling.
- **Session Introspection**: `/thinkback` (Qwen), history search (#714 Copilot), and timeline views signal growing need to audit agent decisions post-execution.
- **Permission Safety**: Bypass permissions broken (#36168 Claude), approval bypasses (#41148), and policy enforcement gaps (#599 Copilot) highlight urgent need for robust guardrails without workflow friction.

---

### **4. Differentiation Analysis**

| Tool             | Primary Focus                  | Target Users              | Technical Approach                         |
|------------------|--------------------------------|---------------------------|--------------------------------------------|
| **Claude Code**  | Agentic autonomy + enterprise control | Paid users, teams         | Closed-core → open-source pivot; aggressive caching |
| **Codex**        | Observability & Azure integration | Cloud-native devs         | Rust-based; heavy instrumentation          |
| **Gemini CLI**   | Policy-driven safety           | Google Workspace orgs     | Mode-aware execution; strict TOML policies |
| **Copilot CLI**  | IDE/plugin ecosystem           | GitHub-centric developers | JavaScript/TypeScript; VS Code extension-first |
| **Kimi Code**    | Lightweight TUI performance    | Individual builders       | Python-to-Bun rewrite for speed            |
| **OpenCode**     | Cross-provider compatibility   | Open-source enthusiasts   | Neutral multi-model SDK                    |
| **Qwen Code**    | Subagent orchestration         | Chinese market + open models | Node.js + ACP protocol emphasis        |

*Clarification*: While all tools support multiple providers, their strategic bets differ—e.g., Qwen prioritizes subagent parity with Claude, while OpenCode aims for provider-agnostic neutrality.

---

### **5. Community Momentum & Maturity**

- **Most Active**: **Claude Code** and **OpenCode** lead engagement (300+ comments on major issues), reflecting large user bases and high expectations post-open-sourcing.
- **Rapid Iteration**: **Qwen Code** and **Gemini CLI** show dense PR activity focused on UI stabilization and security hardening, indicating mature but refinement-stage products.
- **Stabilization Phase**: **Copilot CLI** has closed 10+ high-impact issues in a single digest, suggesting consolidation after earlier instability.
- **Nascent Innovation**: **Kimi Code**’s full rewrite signals architectural ambition but risks fragmentation during transition.

---

### **6. Trend Signals**

- **Agentic Observability Is Now Essential**: `/thinkback`, session timelines, and context dumps are no longer nice-to-haves—they’re required for debugging complex autonomous tasks.
- **Token Economics Drive UX Design**: Quota mismanagement (#24147), polling inefficiencies (#13733), and compression costs shape how tools expose modes (e.g., `/fast`, YOLO).
- **Platform Fragmentation Remains a Barrier**: macOS SSH (#26694), Windows sandboxing (#10601), and Linux GLIBC deps (#2926) continue to exclude enterprise or legacy environments.
- **Security vs. Convenience Tradeoffs Are Sharpening**: Permission bypasses, environment redaction conflicts, and accidental deletions (#21236) force tighter UX design for safety controls.
- **Mobile and Touch Support Is Emerging**: OpenCode and Kimi are explicitly adding gesture navigation, anticipating non-desktop adoption.

--- 

*Prepared for technical decision-makers evaluating AI CLI tool investments and integrations.*

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

**Claude Code Skills Community Highlights Report (as of 2026-04-07)**

---

### **1. Top Skills Ranking**

The most-discussed Skills by community engagement (based on comment volume and interaction) are:

- **[skill-quality-analyzer & skill-security-analyzer](https://github.com/anthropics/skills/pull/83)**  
  A meta-skill suite for auditing and improving Claude Skills themselves—evaluating structure, security, and usability. Currently in review, this reflects growing demand for self-improving skill ecosystems.

- **[shodh-memory](https://github.com/anthropics/skills/pull/154)**  
  Introduces persistent memory across conversations for AI agents, enabling context retention via `proactive_context`. Highlighted for its potential to transform long-running workflows; currently under active development.

- **[testing-patterns](https://github.com/anthropics/skills/pull/723)**  
  Comprehensive guide covering unit, integration, React component testing, and the Testing Trophy model. Widely anticipated for improving code reliability and developer experience.

- **[SAP-RPT-1-OSS predictor](https://github.com/anthropics/skills/pull/181)**  
  Integrates SAP’s open-source tabular foundation model into Claude for predictive analytics on enterprise data. Targets SAP-centric teams seeking native ML capabilities within Claude Code.

- **[masonry-generate-image-and-videos](https://github.com/anthropics/skills/pull/335)**  
  Enables AI-powered image/video generation via Masonry CLI using models like Imagen 3.0 and Veo 3.1. Appeals to content creators and designers needing multimodal output directly in workflow.

- **[pre-deployment validator](https://github.com/anthropics/skills/pull/740)**  
  One of 11 bundled skills focused on pre-launch checks (security, performance, compliance). Part of a broader push toward production-grade deployment automation.

> *Note: All listed PRs remain OPEN as of 2026-04-07.*

---

### **2. Community Demand Trends**

From Issue discussions, key unmet needs include:

- **Enterprise Integration**: Multiple users request AWS Bedrock compatibility (#29) and org-wide skill sharing (#228), signaling need for tighter SaaS/clustering support.
- **Security & Trust**: Concerns about namespace impersonation (#492) and secure skill distribution highlight urgency around governance frameworks.
- **Workflow Automation**: Persistent requests for agent governance patterns (#412) and audit trails point to rising complexity in multi-agent systems.
- **Document Integrity**: Widespread interest in preserving formatting during DOCX/ODT processing (e.g., #143, #541), especially for legal and publishing use cases.
- **MCP Standardization**: Proposal to expose Skills via Model Context Protocol (#16) suggests alignment with emerging ecosystem standards.

---

### **3. High-Potential Pending Skills**

Actively discussed but not yet merged PRs that may soon enter the official collection:

- **[document-typography](https://github.com/anthropics/skills/pull/514)** – Automated typographic quality control (orphan words, widows, numbering). Addresses a universal pain point in document generation.
- **[quality-playbook](https://github.com/anthropics/skills/pull/659)** – Systematic quality engineering applied at project scale, including test strategy and defect prevention.
- **[sensory (macOS automation)](https://github.com/anthropics/skills/pull/806)** – Native AppleScript integration for UI automation, filling a gap in OS-specific tooling.
- **[codebase-inventory-audit](https://github.com/anthropics/skills/pull/147)** – Deep scan for dead code, unused assets, and documentation gaps—high utility for maintenance-heavy repos.

These reflect strong signals of immediate applicability and user readiness.

---

### **4. Skills Ecosystem Insight**

**Community demand is sharply focused on elevating Claude Skills from isolated utilities to integrated, trustworthy components of robust AI-driven development and operational pipelines.**

---

**Claude Code Community Digest – April 7, 2026**

---

### **Today’s Highlights**

No new releases in the past 24 hours. However, two critical user-reported regressions dominate recent activity: a surge in Max-plan quota exhaustion (Issue #38335) and widespread usability degradation post-February updates (#42796). Meanwhile, community momentum builds behind open-sourcing efforts (PR #41447), signaling a potential inflection point for transparency and extensibility.

---

### **Releases**

*No new releases reported in the last 24 hours.*

---

### **Hot Issues**

1. **[#38335](https://github.com/anthropics/claude-code/issues/38335)** – *Max plan sessions exhausting abnormally fast since March 23*  
   Users report rapid token depletion despite unchanged workflows—likely tied to aggressive context caching or backend enforcement changes. 437 comments; 👍 346. Critical for paid users.

2. **[#42796](https://github.com/anthropics/claude-code/issues/42796)** – *Unusable for complex engineering tasks after Feb updates*  
   Closed but highly active; reflects sharp drop in reasoning quality during long-horizon planning/editing. 66 comments; 👍 367. Indicates systemic regression in agentic behavior.

3. **[#27801](https://github.com/anthropics/claude-code/issues/27801)** – *Cowork VM service not starting, persists after reboot*  
   Blocks collaborative coding via remote workspaces. Lingering infrastructure bug affecting macOS/Linux. 57 comments; 👍 33.

4. **[#36168](https://github.com/anthropics/claude-code/issues/36168)** – *“Bypass permissions” broken in v2.1.77+*  
   Security UX regression disables a key developer workflow shortcut. 39 comments; 👍 45.

5. **[#1302](https://github.com/anthropics/claude-code/issues/1302)** – *Custom terminal theme support request*  
   Long-standing ask for beyond 6 built-in themes. 29 comments; 👍 122—high engagement shows UI polish is a priority.

6. **[#26694](https://github.com/anthropics/claude-code/issues/26694)** – *Support macOS as SSH remote host*  
   Currently only Linux allowed; blocks cross-platform dev ops. 13 comments; 👍 37.

7. **[#24147](https://github.com/anthropics/claude-code/issues/24147)** – *Cache reads consume 99.9% of quota due to CLAUDE.md re-reading*  
   Architectural inefficiency scales with project size. 10 comments; 👍 11.

8. **[#42670](https://github.com/anthropics/claude-code/issues/42670)** – *Alternate screen buffer kills scrollback in v2.1.89+*  
   UX regression breaks conversation history access on macOS. 4 comments; 👍 9.

9. **[#41148](https://github.com/anthropics/claude-code/issues/41148)** – *Model ignores review-before-acting constraint when resuming from compressed context*  
   Safety guardrail bypassed silently—dangerous for production use. 7 comments; 👍 0.

10. **[#44436](https://github.com/anthropics/claude-code/issues/44436)** – *Cowork fails on Windows Plan9 shares with access denied error*  
   New issue filed yesterday; suggests sandbox/auth integration gaps on Windows. 2 comments.

---

### **Key PR Progress**

1. **[#41447](https://github.com/anthropics/claude-code/pull/41447)** – *Open source Claude Code*  
   Major milestone: closes multiple legacy issues and enables public contribution.

2. **[#41611](https://github.com/anthropics/claude-code/pull/41611)** – *Add missing source*  
   Complements open-source push by restoring core codebase visibility.

3. **[#41661](https://github.com/anthropics/claude-code/pull/41661)** – *14 Revolutionary Plugins*  
   Expands ecosystem with security, performance, and fullstack automation tools.

4. **[#41938](https://github.com/anthropics/claude-code/pull/41938)** – *DevContainer Bash script for Linux/macOS*  
   Addresses OS fragmentation; previously only PowerShell available.

5. **[#44393](https://github.com/anthropics/claude-code/pull/44393)** – *Respect DAYS_BACK in backfill script*  
   Fixes workflow logic bug causing stale comment processing.

6. **[#44159](https://github.com/anthropics/claude-code/pull/44159)** – *Java security guidance patterns*  
   Extends `security-guidance` plugin to Java—filling critical coverage gap.

7. **[#44071](https://github.com/anthropics/claude-code/pull/44071)** – *Capitalize “Get Started” heading*  
   Minor docs cleanup aligning with style guide.

8. **[#44055](https://github.com/anthropics/claude-code/pull/44055)** – *Fix YAML frontmatter in agent files*  
   Resolves parsing errors breaking plugin loading.

9. **[#1](https://github.com/anthropics/claude-code/pull/1)** – *Create SECURITY.md*  
   Establishes security policy framework ahead of public auditability.

10. **[#41938](https://github.com/anthropics/claude-code/pull/41938)** – *Linux/macOS DevContainer script*  
   Improves DX for containerized development environments.

---

### **Feature Request Trends**

- **Theme customization** (#1302): Demand for deeper TUI personalization.
- **Multi-account switching** (#30031): Needed for org/personal account separation.
- **SSH macOS support** (#26694): Cross-platform remote workspace parity.
- **YOLO mode in permission cycle** (#15898): Streamline trusted workflows.
- **GPU passthrough in sandbox** (#13108): Enable local ML/compute tasks.
- **Exit hooks with codes** (#27244): Integrate into CI/CD pipelines.
- **Visual scrollback cues** (#34269): Improve conversation navigation UX.

---

### **Developer Pain Points**

- **Quota mismanagement**: Cache read tokens drain Max plan faster than expected (#24147, #38335).
- **Permission UX regressions**: Bypass permissions broken (#36168), alternate screen buffer kills history (#42670).
- **Platform fragmentation**: No macOS SSH support, DevContainer scripts limited to Windows.
- **Security/safety gaps**: Model skips review constraints when resuming sessions (#41148).
- **Inconsistent behavior across contexts**: Chrome extension auth broken by env vars (#29924), MCP tools missing in cloud tasks (#43397).

--- 

*Prepared by Claude Code Technical Analyst Digest Bot*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

**OpenAI Codex Community Digest – April 7, 2026**

---

### **Today's Highlights**
The community continues to focus on token efficiency and agent reliability amid rapid CLI evolution. A new alpha release (rust-v0.119.0-alpha.12) was published, while ongoing work in analytics instrumentation and real-time app-server APIs signals deeper observability investments. Several high-impact bugs—especially around context exhaustion, Windows sandboxing, and subagent lifecycle management—remain unresolved.

---

### **Releases**
- **rust-v0.119.0-alpha.12** released today. No detailed changelog provided in this snapshot.

---

### **Hot Issues**

1. **[#14593](https://github.com/openai/codex/issues/14593)** – *Burning tokens very fast*  
   Users report aggressive token consumption during background polling loops, especially with long-running processes like `cargo build`. With 450 comments and 170 👍, this highlights a critical inefficiency in how Codex handles conversation history during tool polling.

2. **[#10450](https://github.com/openai/codex/issues/10450)** – *Remote Development in Codex Desktop App*  
   Top-voted issue (499 👍) requesting native remote development support for the desktop app, contrasting its current limitations with VS Code’s SSH/WSL capabilities. Signals strong demand for richer local-to-remote workflows.

3. **[#10601](https://github.com/openai/codex/issues/10601)** – *Sandbox setup error on Windows*  
   Windows users encounter persistent sandbox initialization failures post-update. Low engagement suggests either widespread impact or user frustration leading to disengagement.

4. **[#14936](https://github.com/openai/codex/issues/14936)** – *bwrap: Approval prompt shown for almost every command*  
   Regression causing excessive approval prompts even for safe commands. Impacts trust and usability of sandboxed execution, particularly on Linux.

5. **[#13733](https://github.com/openai/codex/issues/13733)** – *Background process polling wastes tokens*  
   Technical deep dive reveals each status poll triggers full API round-trip with entire history—proportional token burn. Directly tied to #14593; same root cause.

6. **[#16158](https://github.com/openai/codex/issues/16158)** – *App unresponsive after startup*  
   macOS app hangs ~5 minutes post-launch due to plugin update checks. Indicates performance bottlenecks in startup sequence.

7. **[#16006](https://github.com/openai/codex/issues/16006)** – *"New Plugin" → "Skills" fallback*  
   UI inconsistency after March 2026 plugin update rollout. Confuses users about available features.

8. **[#12414](https://github.com/openai/codex/issues/12414)** – *Unbounded memory growth on Windows idle*  
   codex-cli v0.104.0 consumes up to 90GB RAM when idle—severe OOM risk. Critical stability issue for enterprise users.

9. **[#14513](https://github.com/openai/codex/issues/14513)** – *Mid-turn execution halt + old answer*  
   Agent loses context mid-task and regresses to prior unrelated responses. Breaks reliability expectations.

10. **[#10823](https://github.com/openai/codex/issues/10823)** – *Unable to compact VERY long sessions*  
   Context compaction fails under load, hitting rate limits. Exacerbates context window exhaustion problems.

---

### **Key PR Progress**

1. **[#16964](https://github.com/openai/codex/pull/16964)** – Honor null thread instructions  
   Introduces tri-state handling for thread instructions to allow explicit blank-slate overrides.

2. **[#16870](https://github.com/openai/codex/pull/16870)** – Denormalize thread metadata onto turn events  
   Enables richer analytics by embedding thread-level metadata directly in turn records.

3. **[#16706](https://github.com/openai/codex/pull/16706)** – Add steering metadata  
   Extends telemetry to capture model steering signals for better behavioral analysis.

4. **[#16659](https://github.com/openai/codex/pull/16659)** – Add queued submission metadata  
   Tracks latency and queueing behavior in turn processing pipeline.

5. **[#16641](https://github.com/openai/codex/pull/16641)** – Add token usage metadata  
   Implements fine-grained token accounting per turn for billing/analytics.

6. **[#16960](https://github.com/openai/codex/pull/16960)** – Add app-server realtime call creation  
   Experimental WebRTC integration for real-time collaborative coding sessions.

7. **[#16950](https://github.com/openai/codex/pull/16950)** – Preserve accidental /clear recovery via /resume  
   Adds resilience against accidental session clears by retaining displaced threads.

8. **[#16949](https://github.com/openai/codex/pull/16949)** – Use model speed tiers for Fast Mode  
   Decouples Fast Mode from hardcoded models, enabling dynamic support based on model metadata.

9. **[#16953](https://github.com/openai/codex/pull/16953)** – Add alarm tool  
   Introduces cross-client scheduling mechanism for `/loop`-style automation with persistence.

10. **[#16944](https://github.com/openai/codex/pull/16944)** – Expand tool search to custom MCPs  
    Generalizes MCP tool discovery beyond built-in tools, improving extensibility.

---

### **Feature Request Trends**

- **Remote Development Support**: Strong demand for integrated SSH/WSL/SCP-like workflows in the desktop app (#10450).
- **Context Management Improvements**: Users seek automatic, reliable compaction and smarter context pruning (#10823, #12790).
- **UI/UX Enhancements**: Sound notifications (#3962), export messages as Markdown (#2880), and clearer mode defaults (#13942).
- **Agent Lifecycle Clarity**: Need to distinguish main vs. subagent events in hooks (#16226) and prevent premature termination (#16900).

---

### **Developer Pain Points**

- **Token Inefficiency**: Polling loops and redundant API calls burn credits rapidly (#14593, #13733).
- **Context Window Exhaustion**: Frequent "ran out of room" errors despite recent releases (#10877, #12468).
- **Platform-Specific Instabilities**: Windows sandbox failures (#10601), memory leaks (#12414), and extension loading hangs (#15975).
- **Agent Reliability**: Subagents misinterpret intent or fail to signal completion (#13491, #15723).
- **Azure Integration Gaps**: Foundry tool sessions still require manual patches post-v0.118.0 (#16916).

--- 

*End of Digest*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

**Gemini CLI Community Digest – April 7, 2026**

---

### 1. **Today's Highlights**  
The Gemini CLI team released a new nightly build (v0.36.0-nightly.20260406.15298b28c) focused on terminal serializer optimizations and automatic memory configuration. A major enterprise policy change was also introduced requiring explicit `modes` in TOML rules to prevent unintended cross-mode execution—this breaking change aims to improve safety defaults but may affect legacy policies. Additionally, several high-impact bugs related to OAuth permissions, model selection for Google AI Pro users, and SSH display corruption are actively being investigated.

---

### 2. **Releases**  
**v0.36.0-nightly.20260406.15298b28c**  
- Optimized terminal serialization performance (#24485)  
- Auto-configured memory settings for improved stability (#24474)  
- Enforced linting rules disallowing unused error variables in catch blocks (#24486)  
[🔗 Release Notes](https://github.com/google-gemini/gemini-cli/releases/tag/v0.36.0-nightly.20260406.15298b28c)

---

### 3. **Hot Issues**  

| # | Issue Summary | Why It Matters | Community Reaction |
|---|---------------|----------------|--------------------|
| [16060](https://github.com/google-gemini/gemini-cli/issues/16060) | Crashes after update v0.23 when resuming chats | Blocks core user workflow; appears regression in session persistence | 👍4, 22 comments |
| [21847](https://github.com/google-gemini/gemini-cli/issues/21847) | `BeforeModel` hook ignores `llm_request.model` override | Breaks advanced customization of model routing | 15 comments, labeled "help wanted" |
| [24734](https://github.com/google-gemini/gemini-cli/issues/24734) | OAuth succeeds but returns 403 despite valid Google AI Pro subscription | Prevents access to paid features even after authentication | 👍3, reported same day |
| [12446](https://github.com/google-gemini/gemini-cli/issues/12446) | Stuck on "auto" model despite Google AI Pro subscription | Misconfiguration leads to suboptimal model usage | 👍3 |
| [24796](https://github.com/google-gemini/gemini-cli/issues/24796) | PTY leaks on macOS causing resource exhaustion | System-level issue affecting long-running sessions | Freshly reported, no 👍 yet |
| [23264](https://github.com/google-gemini/gemini-cli/issues/23264) | Quota for one model blocks others with available quota | Poor quota isolation logic | 3 comments |
| [20394](https://github.com/google-gemini/gemini-cli/issues/20394) | Thought chain exposed + infinite loop during image uploads | Security & UX concern: internal reasoning visible to users | 4 comments |
| [18302](https://github.com/google-gemini/gemini-cli/issues/18302) | Environment variable redaction ignores allowlist entries | Security misconfiguration silently redacts allowed vars | 👍2 |
| [15051](https://github.com/google-gemini/gemini-cli/issues/15051) | Request: Alt+V shortcut to paste clipboard images | High demand for richer media input UX | 👍9 |
| [24202](https://github.com/google-gemini/gemini-cli/issues/24202) | Text scrambled after SSH connection on Windows | Hinders remote development workflows | 1 comment |

---

### 4. **Key PR Progress**  

| # | PR Summary | Impact |
|---|-----------|--------|
| [24758](https://github.com/google-gemini/gemini-cli/pull/24758) | Makes `modes` field mandatory in policy TOML files | Critical security hardening—prevents accidental global rule application |
| [24784](https://github.com/google-gemini/gemini-cli/pull/24784) | Fixes `BeforeModel` hook model override not propagating to API calls | Resolves #21847—restores intended customization behavior |
| [24793](https://github.com/google-gemini/gemini-cli/pull/24793) | Adds selective topic expansion + click-to-expand in history | Improves navigation in long conversations |
| [24795](https://github.com/google-gemini/gemini-cli/pull/24795) | Fixes incorrect tmux alternate buffer warning | Eliminates false positives for non-tmux users |
| [24767](https://github.com/google-gemini/gemini-cli/pull/24767) | Respects global env var allowlist in redaction logic | Fixes regression from recent security updates |
| [24677](https://github.com/google-gemini/gemini-cli/pull/24677) | Refines tool output formatting in compact mode | Enhances readability in dense terminal views |
| [24665](https://github.com/google-gemini/gemini-cli/pull/24665) | Fixes copy mode flickering and notification text | Stabilizes clipboard integration UX |
| [24566](https://github.com/google-gemini/gemini-cli/pull/24566) | Ensures `skills list` outputs to stdout in non-interactive mode | Restores scriptability for automation pipelines |
| [24752](https://github.com/google-gemini/gemini-cli/pull/24752) | Introduces decoupled ContextManager/Sidecar architecture | Major backend refactor enabling better isolation (part of #24751 series) |
| [24661](https://github.com/google-gemini/gemini-cli/pull/24661) | Adds `extensions select` command for bulk enable/disable | Addresses friction in managing extension configurations |

---

### 5. **Feature Request Trends**  

- **Clipboard Image Support**: Multiple requests (e.g., #15051) seek dedicated shortcuts (like Alt+V) to paste images directly—mirroring trends in Codex/Claude Code.
- **SSH Session Detection & Compatibility**: Issues like #24202 and #24546 highlight poor handling of SSH environments, suggesting need for auto-detection and rendering fixes.
- **Policy Rule Simplification**: Enterprise users push for less redundant TOML structures (#24769) and clearer mode-specific defaults (#24797).
- **Extension Command Enhancements**: Requests to thread variables through custom commands (#15993) and bulk-select extensions (#24661) reflect growing reliance on extensibility.
- **Quota & Model Isolation Improvements**: Users report that hitting one model’s quota blocks others—indicating need for per-model quota tracking or smarter fallbacks.

---

### 6. **Developer Pain Points**  

- **Session Persistence Failures**: Frequent crashes when resuming chats post-update (#16060) erode trust in stateful interactions.
- **Inconsistent Environment Variable Handling**: Redaction logic now conflicts with allowlists (#18302), breaking secure MCP server setups.
- **Poor SSH Terminal Rendering**: Scrambled text after SSH on Windows (#24202) disrupts remote dev workflows.
- **Unintended Tool Behavior in Plan Mode**: Subagents operate without awareness of approval modes (#23582), leading to policy violations.
- **Build/Import Errors**: Missing exports like `buildSegmentsForVisualSlice` (#16147) surface in edge cases but block compilation.
- **PTY Resource Leaks**: On macOS, leaked pseudo-terminals accumulate rapidly (#24796), risking system instability.

--- 

*Prepared by Technical Analyst – AI Developer Tools Team*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

**GitHub Copilot CLI Community Digest – April 7, 2026**

---

### **Today's Highlights**

The latest release (v1.0.19) introduces persistent MCP session control via `/mcp enable` and `/mcp disable`, improves OpenTelemetry tracing with streaming timing attributes, and fixes critical permission issues on macOS for plugin hooks. Concurrently, the community has resolved several high-impact bugs around UI readability, session hangs, and custom instruction loading—reflecting active stabilization efforts ahead of broader adoption.

---

### **Releases**

**v1.0.19** (released April 6, 2026)  
- Persistent `/mcp enable/disable` state across CLI sessions  
- Enhanced OpenTelemetry spans: internal span kind for subagents; `github.copilot.time_to_first_chunk` added to streaming chat traces  
- Fixed execution of plugin hook scripts lacking execute permissions (now corrected on macOS)  
- Improved UX: slash command timeline now includes action names (e.g., "Review", "Plan")  
- Skip redundant IDE auto-connect when session already in use  

*(Full changelog: [Release v1.0.19](https://github.com/github/copilot-cli/releases/tag/v1.0.19))*

---

### **Hot Issues**

1. **#679 – Local MCP Server Not Detected After v0.0.359**  
   Users report broken local MCP integration starting mid-December 2025. With 18 comments and 5 upvotes, this is a blocker for many developers relying on custom tooling.  
   *Status:* Closed (likely addressed in recent patch)

2. **#713 – Custom Instructions Ignored Despite Documentation Promises**  
   Critical regression: `.github/instructions/**/*.instructions.md`, `AGENTS.md`, and other config files are not auto-included as claimed. Highest 👍 count (18), indicating widespread frustration.  
   *Status:* Closed

3. **#737 – YOLO Mode Toggle Mid-Session Requested**  
   Users want dynamic risk-level switching during active sessions (e.g., Ctrl+Y). Growing interest in workflow flexibility.  
   *Status:* Closed

4. **#714 – Session History Search Needed**  
   No built-in way to search past JSONL session logs. Top-voted feature request (9 👍) for productivity recovery.  
   *Status:* Closed

5. **#599 – Enterprise MCP Policy Enforcement Gap**  
   Enterprises require pre-enforcement of MCP allowlists before tool activation. Key blocker for org-wide rollout.  
   *Status:* Closed

6. **#548 – Claude Sonnet 4.5 / GPT-5 Sessions Hang Indefinitely**  
   Regression from v0.0.355 causing unresponsive sessions. Reverting to v0.0.353 resolves it.  
   *Status:* Closed

7. **#693 – MCP Tools Hidden When Agent Is Exposed as Tool**  
   Post-v0.0.361, agent-defined MCP tools disappear if the agent itself becomes a tool. Confusing architecture change.  
   *Status:* Closed

8. **#688 – Bash Tool Ignores User Shell Configs (`~/.bashrc`, `BASH_ENV`)**  
   Safety wrappers (e.g., `rm` → `trash`) break silently. Security-conscious users demand shell fidelity.  
   *Status:* Closed

9. **#604 – `create` Tool Fails with JSON Parsing Errors**  
   Reproducible failure when creating large or multiple files: malformed JSON prompts. Impacts file-generation workflows.  
   *Status:* Closed

10. **#528 – Duplicate File Permission Requests**  
    First write always triggers two identical permission dialogs. Annoying but non-blocking UX flaw.  
    *Status:* Closed

---

### **Key PR Progress**

*No pull requests updated in the last 24 hours.*

---

### **Feature Request Trends**

- **Dynamic Model Switching**: Users want to switch models per-request without global context reset (#844).
- **Session Management Enhancements**: Mid-session toggles (YOLO mode), history search, and resumption (#714, #737).
- **Shell Integration**: Better respect for user shell configs and terminal keybindings (#540, #688).
- **Enterprise Tooling**: Full support for enterprise MCP policies and WSL terminals (#475, #599).
- **UI/UX Polish**: Readability fixes, keyboard shortcuts (Ctrl+J newline), and reduced friction (#547, #660).

---

### **Developer Pain Points**

- **MCP Reliability**: Local server detection regressions disrupt toolchains.
- **Custom Instructions Broken**: Core promise of auto-loading instructions fails in practice.
- **Model-Specific Quirks**: Gemini 3 Pro lacks explanations; Claude/GPT models hang unexpectedly.
- **Permission Overhead**: Redundant auth prompts and missing shell environment inheritance.
- **Documentation Misalignment**: Feature claims (e.g., instruction loading) don’t match reality.

For full details, see:  
[#679](https://github.com/github/copilot-cli/issues/679) | [#713](https://github.com/github/copilot-cli/issues/713) | [#737](https://github.com/github/copilot-cli/issues/737) | [#714](https://github.com/github/copilot-cli/issues/714) | [#599](https://github.com/github/copilot-cli/issues/599) | [#548](https://github.com/github/copilot-cli/issues/548) | [#693](https://github.com/github/copilot-cli/issues/693) | [#688](https://github.com/github/copilot-cli/issues/688) | [#604](https://github.com/github/copilot-cli/issues/604) | [#528](https://github.com/github/copilot-cli/issues/528)

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

**Kimi Code CLI Community Digest - 2026-04-07**

---

### **Today's Highlights**
No new releases in the past 24 hours. The community is actively addressing UI/UX inconsistencies, background process stability, and proposing a full tech stack rewrite from Python to Bun+TypeScript+React Ink. A key enhancement request focuses on zero-cost context compression via incremental session memory.

---

### **Releases**
*No new releases in the last 24 hours.*

---

### **Hot Issues**
1. **[#781] Windows Terminal Ctrl+V Paste Image Issue**  
   Users report that `Ctrl+V` fails to paste images into Kimi CLI when running in Windows Terminal due to OS-level shortcut conflicts. Two users upvoted; community seeks an alternative like `Alt+V`.  
   [Link](https://github.com/MoonshotAI/kimi-cli/issues/781)

2. **[#1691] Incremental Session Memory for Zero-Cost Context Compression**  
   Proposes pre-building structured summaries during sessions so `/compact` incurs no LLM cost. Addresses expensive re-compression calls in long chats.  
   [Link](https://github.com/MoonshotAI/kimi-cli/issues/1691)

3. **[#1765] Mouse Click Interrupts CLI Execution**  
   Closed after author clarified mistake—originally reported as unintended interruptions when clicking inside terminal.  
   [Link](https://github.com/MoonshotAI/kimi-cli/issues/1765)

4. **[#1770] Poor Readability in GNOME Terminal with Light Theme**  
   Dark theme clashes with light terminal schemes, making code illegible. First report; likely UX gap in cross-platform theming.  
   [Link](https://github.com/MoonshotAI/kimi-cli/issues/1770)

5. **[#1768] Background Multi-Agent Runs Cause Stalls & Timeouts**  
   Concurrent agent tasks block main thread, triggering provider timeouts and event-loop errors. Critical for multi-agent reliability.  
   [Link](https://github.com/MoonshotAI/kimi-cli/issues/1768)

---

### **Key PR Progress**
1. **[#1709] Fix Diff Highlight Offsets with Tab Expansion**  
   Aligns syntax highlighting offsets when tabs are expanded to spaces—fixes display bugs in diff views.  
   [Link](https://github.com/MoonshotAI/kimi-cli/pull/1709)

2. **[#1707] Full Rewrite: Python → Bun + TypeScript + React Ink**  
   Major refactor aiming for better performance, type safety, and native TUI experience. Includes 166 TS files and comprehensive test suite.  
   [Link](https://github.com/MoonshotAI/kimi-cli/pull/1707)

3. **[#1771] Enforce String Content in Tool Messages**  
   Fixes OpenAI API compliance by ensuring `content` is always stringified for `role: "tool"` messages. Resolves 400 errors on complex tool outputs.  
   [Link](https://github.com/MoonshotAI/kimi-cli/pull/1771)

4. **[#1769] Graceful MCP Server Connection Failure Handling**  
   Prevents crashes when MCP servers fail to start (e.g., port conflicts), improving resilience of agent workflows.  
   [Link](https://github.com/MoonshotAI/kimi-cli/pull/1769)

---

### **Feature Request Trends**
- **Context Efficiency**: Multiple suggestions emphasize reducing token usage and LLM costs during long sessions (#1691).
- **Cross-Platform UI Consistency**: Theming issues span Windows Terminal and Linux GNOME, indicating need for adaptive color schemes.
- **Background Task Management**: Users want non-blocking multi-agent operations without cascading failures.
- **Clipboard Integration**: Native image paste support beyond text, especially on Windows.

---

### **Developer Pain Points**
- **Stability Under Load**: Background agents stalling CLI or causing unhandled exceptions disrupt workflows.
- **API Compliance Edge Cases**: Tool message formatting inconsistently handled across providers.
- **Terminal UX Fragmentation**: Theme mismatches and OS-specific shortcuts break immersion.
- **Performance Bottlenecks**: Long sessions suffer from expensive re-compression; lack of incremental state management.

--- 

*Generated by Kimi Code CLI Community Digest Bot*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

**OpenCode Community Digest – April 7, 2026**

---

### **Today's Highlights**
OpenCode v1.3.17 released with improved Cloudflare Workers AI setup validation and restored Windows terminal input handling. A critical data-loss bug involving accidental session deletion via `Ctrl+Shift+Backspace` was reported (Issue #21236), prompting urgent attention from maintainers. Meanwhile, multiple PRs advance mobile touch support, MCP Apps integration, and provider SDK updates.

---

### **Releases**
**v1.3.17**  
- **Core**: Enhanced Cloudflare Workers AI onboarding with clearer error messaging for missing account details (mchenco).  
- **TUI**: Restored default kitty keyboard handling on Windows to fix input regression introduced in prior rollback.

*(v1.3.16 also noted: Azure model support, ACP session config exposure, token total fixes)*

---

### **Hot Issues** *(Top by engagement)*

1. **[#13768](https://github.com/anomalyco/opencode/issues/13768)** – Copilot Opus 4.6 fails with "assistant message prefill not supported"  
   *Why it matters*: Breaks conversational flow in high-end models; affects professional users relying on Copilot integration.  
   *Reaction*: 52 comments, 21 👍 — widely acknowledged as blocking workflow.

2. **[#20650](https://github.com/anomalyco/opencode/issues/20650)** – Kimi k2.5 tool-calling JSON parsing errors  
   *Why it matters*: Invalid tool invocation syntax corrupts automation pipelines.  
   *Reaction*: 37 comments — urgent due to production impact.

3. **[#13984](https://github.com/anomalyco/opencode/issues/13984)** – Copy-paste broken in CLI (`Ctrl+V` yields nothing)  
   *Why it matters*: Core UX flaw undermines basic editing workflows.  
   *Reaction*: 20 comments, 8 👍 — reported across platforms.

4. **[#21164](https://github.com/anomalyco/opencode/issues/21164)** – Alibaba Qwen 3.6 rate-limiting error mitigation request  
   *Why it matters*: Users hit API quotas unexpectedly; needs client-side throttling controls.  
   *Reaction*: 18 comments — growing concern over cloud cost unpredictability.

5. **[#16499](https://github.com/anomalyco/opencode/issues/16499)** – Request `/fast` mode for GPT-5.4 in TUI  
   *Why it matters*: Feature parity with official clients; improves responsiveness.  
   *Reaction*: 62 👍 — top-voted feature this week.

6. **[#6719](https://github.com/anomalyco/opencode/issues/6719)** – Add `/reload` slash command for config reloading  
   *Why it matters*: Streamlines development without restarting sessions.  
   *Reaction*: 40 👍 — long-standing productivity ask.

7. **[#8501](https://github.com/anomalyco/opencode/issues/8501)** – Expand `[Pasted X lines]` summary on demand  
   *Why it matters*: Balances prompt cleanliness with editability.  
   *Reaction*: 115 👍 — highly requested refinement.

8. **[#21100](https://github.com/anomalyco/opencode/issues/21100)** – Web UI crash: `e.diffs.map is not a function`  
   *Why it matters*: Post-release regression in v1.3.15 blocks web usage.  
   *Reaction*: 10 comments — severity flagged as blocker.

9. **[#14674](https://github.com/anomalyco/opencode/issues/14674)** – `/dump-context` for debugging inference payloads  
   *Why it matters*: Essential for prompt engineering and agent introspection.  
   *Reaction*: 15 👍 — developer tooling gap highlighted.

10. **[#21236](https://github.com/anomalyco/opencode/issues/21236)** – Accidental session deletion via `Ctrl+Shift+Backspace`  
    *Why it matters*: Data-loss risk with no recovery mechanism — critical safety issue.  
    *Reaction*: 2 comments but flagged as urgent; likely to escalate.

---

### **Key PR Progress**

1. **[#21247](https://github.com/anomalyco/opencode/pull/21247)** – Bump Anthropic AI SDK + remove patch  
   Updates dependencies cleanly; closes ecosystem drift.

2. **[#21192](https://github.com/anomalyco/opencode/pull/21192)** – Fix TUI theme command capitalization  
   Improves UX consistency in command palette.

3. **[#21185](https://github.com/anomalyco/opencode/pull/21185)** – Add `variant_list` keybind for model switching  
   Enhances keyboard navigation for power users.

4. **[#15926](https://github.com/anomalyco/opencode/pull/15926)** – MCP Apps rich iframe UI support  
   Enables embedded interactive tools via sandboxed iframes — major extensibility win.

5. **[#18007](https://github.com/anomalyco/opencode/pull/18007)** – Session.start lifecycle hooks  
   Plugin authors can now react to session start/resume events.

6. **[#18767](https://github.com/anomalyco/opencode/pull/18767)** – Mobile touch optimization  
   Preserves desktop experience while adding gesture support.

7. **[#13854](https://github.com/anomalyco/opencode/pull/13854)** – Stop streaming markdown after message completion  
   Fixes rendering artifacts in completed responses.

8. **[#21246](https://github.com/anomalyco/opencode/pull/21246)** – Guard against undefined agents/MCP state at boot  
   Prevents fatal crashes during plugin initialization.

9. **[#21243](https://github.com/anomalyco/opencode/pull/21243)** – BasePath support for web app subpaths  
   Enables deployment under reverse proxies or CDN prefixes.

10. **[#19135](https://github.com/anomalyco/opencode/pull/19135)** – Restore Home/End prompt navigation  
    Fixes broken keybindings affecting text editing.

---

### **Feature Request Trends**

- **Model-specific controls**: Fast modes (GPT-5.4 `/fast`), variant switching, and per-model configuration (e.g., Azure options).
- **Config hot-reload**: `/reload` command remains the most upvoted productivity enhancement.
- **Context inspection**: `/dump-context` and similar introspection tools requested for debugging.
- **Safety & UX hardening**: Permission bypass flags (`--dangerously-skip-permissions`) and confirmation dialogs for destructive actions.
- **Mobile/desktop parity**: Touch optimization and responsive design improvements gaining momentum.

---

### **Developer Pain Points**

- **Tool-calling instability**: Multiple reports of models (Kimi, Gemma, Copilot) failing on structured tool invocations due to JSON formatting or schema mismatches.
- **Clipboard/terminal quirks**: Copy-paste and keyboard handling inconsistent across OSes, especially Windows/Terminal.
- **Plugin ecosystem friction**: Proxy-related npm install failures (#21098), lifecycle hook gaps, and opaque error messages.
- **Session persistence bugs**: Concurrency issues (`SQLITE_BUSY`), accidental deletion, and migration glitches post-`git init`.
- **Web client regressions**: JavaScript runtime errors in bundled assets breaking core UI functionality.

--- 

*Prepared by OpenCode Technical Analyst | Data source: github.com/anomalyco/opencode*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

**Qwen Code Community Digest – April 7, 2026**

---

### 1. **Today's Highlights**  
The Qwen Code team continues to prioritize subagent system parity with Claude Code (#2409), while addressing critical UI/UX regressions such as TUI flickering during parallel subagent execution (#2928) and focus conflicts in confirmation prompts (#2929). A new `/thinkback` command (#2917) enables session timeline review, signaling growing emphasis on agentic workflow introspection.

---

### 2. **Releases**  
No new releases in the last 24 hours.

---

### 3. **Hot Issues**  

| # | Title | Impact & Reaction |
|---|-------|-------------------|
| [#2409](https://github.com/QwenLM/qwen-code/issues/2409) | Subagent parity w/ Claude Code | High-priority feature request; 6 comments, 2 upvotes. Core structure exists but lacks ~55% of advanced capabilities. |
| [#2928](https://github.com/QwenLM/qwen-code/issues/2928) | TUI flickers during parallel subagents | Critical UX bug reported by multiple users—immediate fix needed for stable agent workflows. |
| [#2929](https://github.com/QwenLM/qwen-code/issues/2929) | Concurrent subagent input focus conflicts | Prevents reliable keyboard interaction when multiple agents prompt simultaneously—high severity. |
| [#2927](https://github.com/QwenLM/qwen-code/issues/2927) | `git status` bypasses approval modes | Security concern: unsafe command execution regardless of approval settings. |
| [#2844](https://github.com/QwenLM/qwen-code/issues/2844) | Model list still shows v3.5-plus instead of v3.6 | Minor but disruptive versioning inconsistency affecting user expectations post-update. |
| [#2800](https://github.com/QwenLM/qwen-code/issues/2800) | How to view quota on free plan | Common usability gap—users can’t monitor usage limits easily. |
| [#2672](https://github.com/QwenLM/qwen-code/issues/2672) | Auto-expose MCP tools for web research | Enhances extensibility; aligns with modern AI tooling trends like Cursor/Aider. |
| [#2903](https://github.com/QwenLM/qwen-code/issues/2903) | JetBrains terminal flickering | IDE integration friction point—affects developer productivity significantly. |
| [#2882](https://github.com/QwenLM/qwen-code/issues/2882) | WeChat QR scan fails with "upgrade interface" error | Regional access barrier due to outdated WeChat API compatibility. |
| [#2926](https://github.com/QwenLM/qwen-code/issues/2926) | Node.js GLIBC_2.27 missing on CentOS 7 | Blocks deployment on legacy Linux environments—common in enterprise setups. |

---

### 4. **Key PR Progress**  

| # | Title | Description |
|---|--------|-------------|
| [#2930](https://github.com/QwenLM/qwen-code/pull/2930) | Fix concurrent subagent focus | Serializes confirmation prompts to prevent input collisions—direct response to #2929. |
| [#2932](https://github.com/QwenLM/qwen-code/pull/2932) | Enhance `/review` with deterministic analysis | Adds autofix, security hardening, and competitive benchmarking vs. Copilot/Claude. |
| [#2917](https://github.com/QwenLM/qwen-code/pull/2917) | Add `/thinkback` command | Session timeline visualization using LLM-generated summaries—new introspection capability. |
| [#2931](https://github.com/QwenLM/qwen-code/pull/2931) | Fix contributor docs | Aligns setup guides with actual `qwen` binary and `~/.qwen` paths—improves onboarding. |
| [#2858](https://github.com/QwenLM/qwen-code/pull/2858) | Coerce JSON strings in MCP `anyOf`/`oneOf` | Fixes schema validation failures from LLM-generated stringified arrays/objects. |
| [#2875](https://github.com/QwenLM/qwen-code/pull/2875) | Harden context-usage display | Defends against missing `tokenLimit` in ACP responses—stabilizes VSCode extension. |
| [#2874](https://github.com/QwenLM/qwen-code/pull/2874) | Force fresh ACP session on new-session | Resolves silent reuse bug in IDE—now properly resets context when creating new sessions. |
| [#2916](https://github.com/QwenLM/qwen-code/pull/2916) | Expose `/context` in SDK mode | Enables programmatic access to token usage data—critical for CI/automation workflows. |
| [#2914](https://github.com/QwenLM/qwen-code/pull/2914) | Improve markdown table rendering | Fixes column width, wrapping, alignment—enhances readability of agent outputs. |
| [#2770](https://github.com/QwenLM/qwen-code/pull/2770) | Compact/verbose toggle (Ctrl+O) | Reduces visual noise during long runs—similar to Claude Code’s UX refinement. |

---

### 5. **Feature Request Trends**  
- **Subagent Ecosystem Expansion**: Users demand full parity with Claude Code’s subagent framework, especially around autonomous task delegation and plugin integration (#2409, #2672).  
- **Session Introspection Tools**: Requests for timeline views (`/thinkback`), customizable status lines (`/statusline`), and better context tracking reflect need for observability in agentic workflows.  
- **MCP Tool Automation**: Desire to auto-expose MCP tools (e.g., `search_web`, `read_url`) without manual configuration highlights shift toward plug-and-play AI toolchains.  
- **IDE/CLI UX Refinement**: Keyboard shortcuts (`/rename`, Ctrl+R), compact mode toggles, and stable terminal rendering are recurring asks for smoother developer experience.  

---

### 6. **Developer Pain Points**  
- **Legacy OS Support**: Node.js dependency breaks on CentOS 7 due to missing GLIBC—blocks adoption in conservative environments (#2926).  
- **Unreliable Terminal Behavior**: Flickering in both native TUI and JetBrains terminals disrupts focus and readability (#2928, #2903).  
- **Inconsistent Safety Enforcement**: Commands like `git status` bypass approval modes entirely, raising security concerns (#2927).  
- **Poor Observability**: Lack of built-in quota visibility (#2800) and opaque context usage outside CLI hinder debugging and cost management.  
- **Documentation Drift**: Contributor guides reference outdated paths and missing sections, increasing onboarding friction (#2931).

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/DenisZheng/agents-radar).*