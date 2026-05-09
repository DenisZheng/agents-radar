# AI CLI Tools Community Digest 2026-05-09

> Generated: 2026-05-09 00:32 UTC | Tools covered: 8

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

**Cross-Tool AI CLI Ecosystem Analysis – May 9, 2026**

---

### **1. Ecosystem Overview**  
The AI developer tools ecosystem continues to mature with strong community engagement across major platforms. Five key CLI tools—Claude Code, OpenAI Codex, Gemini CLI, GitHub Copilot CLI, Kimi Code, OpenCode, Pi, and Qwen Code—are converging on core capabilities like MCP integration, agent delegation, and cross-platform consistency while maintaining distinct differentiation in enterprise focus, open-source governance, and model provider strategy. A clear trend toward extensible architectures (ACP, custom providers) and observability (telemetry, cost tracking) is emerging as users demand greater control over complex workflows.

---

### **2. Activity Comparison**

| Tool               | Issues (Top 10+) | PRs Active | New Release | Critical Fixes Today |
|--------------------|------------------|------------|-------------|----------------------|
| **Claude Code**     | 8                | 8          | v2.1.137    | Windows activation   |
| **OpenAI Codex**    | 10               | 10         | rust-v0.130.0 | `/compact` regression |
| **Gemini CLI**      | 10               | 10         | None        | Performance regression (v0.35.3) |
| **Copilot CLI**     | 10               | 2          | v1.0.44     | Sub-agent session corruption |
| **Kimi Code**       | 10               | 10         | None        | Windows POSIX alignment |
| **OpenCode**        | 10               | 10         | None        | Subagent permission hangs |
| **Pi**              | 10               | 10         | None        | TUI crash on wide lines |
| **Qwen Code**       | 10               | 10         | v0.15.9     | Auth & model override bugs |

*All tools show sustained development activity; only Claude Code, OpenAI Codex, Copilot CLI, and Qwen Code released updates in the last 24 hours.*

---

### **3. Shared Feature Directions**

Multiple communities are demanding:
- **Enhanced Agent Observability**: Real-time token usage visualization (#1972 Kimi, #2188 Kimi, #4317 Pi), thinking trace visibility (#1864 Kimi), and per-message timing metadata (#4317 Pi).
- **Cross-Platform Terminal Robustness**: Fixes for emoji/table rendering (#3205 Copilot CLI), CRLF handling (#2191 Kimi), and narrow-terminal stability (#4302 Pi, #4233 Pi).
- **Custom Provider & BYOK Support**: Native integration for internal/OpenRouter/Azure models (#2185 Kimi, #26422 OpenCode, #3762 Qwen Code).
- **Session & Context Management**: Union-find compaction (Gemini), union-find clustering (Gemini), and persistent session hydration (#26414 OpenCode).
- **Security Hardening**: Plugin trust controls (#21768 Codex), OAuth callback leaks (#23563 OpenCode), and sandboxed tool execution (#21819 Codex).

*Notably absent: native multi-account CLI auth profiles appear requested in Codex (#4432) but not yet adopted by others.*

---

### **4. Differentiation Analysis**

| Tool            | Primary Focus                          | Target Users                  | Technical Distinction                     |
|-----------------|----------------------------------------|-------------------------------|-------------------------------------------|
| **Claude Code** | Enterprise IDE integration             | Professional devs, teams        | Auto Mode rule enforcement, OTel feedback |
| **Codex**       | Headless orchestration, plugin markets | DevOps, remote workflows      | `codex remote-control`, marketplace APIs  |
| **Gemini CLI**  | Cloud-native agent delegation          | Google Workspace enterprises    | ACP-compliant IDE tool rendering          |
| **Copilot CLI** | GitHub-native agent scripting          | CI/CD engineers, GitHub users   | Slash command extensibility, BYOK hooks   |
| **Kimi Code**   | POSIX-aligned Windows experience       | Cross-platform developers       | Git Bash backend, adaptive timeouts       |
| **OpenCode**    | Custom provider flexibility            | Open-source & internal teams    | `@ai-sdk/openai-compatible` support     |
| **Pi**          | Lightweight, extensible TUI            | Minimalists, async-first devs   | Zig backend, footer providers           |
| **Qwen Code**   | Configurable workspace & attribution   | Researchers, audit-heavy teams  | Commit-level AI contribution tracking     |

*Key divergence*: Enterprise-grade safety (Claude’s hard_deny, Copilot’s hook trust) vs. open customization (OpenCode’s custom providers, Pi’s footer APIs).

---

### **5. Community Momentum & Maturity**

- **Most Active**: OpenCode, Kimi Code, and Pi show 10+ concurrent PRs/issues with rapid iteration cycles.
- **Highest Urgency**: Gemini CLI’s performance regression (v0.35.3) and authentication loops dominate user sentiment.
- **Maturity Signals**: Claude Code and Codex demonstrate structured release cadences and enterprise telemetry features.
- **Adoption Pressure**: Qwen Code’s free-tier reduction (#3203) and Copilot CLI’s PowerShell security alerts reflect monetization/compliance tensions.
- **Innovation Leaders**: Pi leads in architectural experimentation (Zig, async persistence); Kimi leads in cross-platform parity (PowerShell→Git Bash).

---

### **6. Trend Signals**

- **Shift from Assistant to Orchestrator**: Tools increasingly support delegated agents (Gemini’s WORKER model, Copilot’s sub-agents) and bus-driven task dispatch (Pi’s `--mode worker-loop`).
- **Observability Becomes Core UX**: Token usage bars, timing metadata, and cost tracking move beyond logs into real-time UI (Kimi’s progress bar, Pi’s footer providers).
- **Security > Convenience**: Expect tighter sandboxing (Codex’s `--dangerously-bypass-hook-trust` flag) and explicit permission models (OpenCode’s sessionID filter fix).
- **Provider Fragmentation**: Native support for non-OpenAI clouds (DeepSeek, Kimi, Vertex AI) challenges walled-garden assumptions.
- **Developer Experience Dominates**: Rendering stability, input handling, and error clarity outrank new model capabilities in priority rankings.

> **Strategic Takeaway**: The next wave of AI CLI tools will differentiate not by raw intelligence but by **workflow resilience**, **observability depth**, and **cross-environment consistency**—especially across Windows, WSL, and cloud-hosted sessions.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

**Claude Code Skills Community Highlights Report**  
*Data as of 2026-05-09*

---

### 1. **Top Skills Ranking**

- **[#83](https://github.com/anthropics/skills/pull/83)** – *skill-quality-analyzer & skill-security-analyzer*: Adds meta-skills for evaluating and auditing other Skills’ quality and security posture across structural, documentation, performance, and permission dimensions. Still under review; highly anticipated for governance.
- **[#210](https://github.com/anthropics/skills/pull/210)** – *frontend-design*: Revises the existing frontend skill to improve clarity, specificity, and actionability—ensuring Claude can reliably follow design instructions in single conversations. Open for feedback.
- **[#154](https://github.com/anthropics/skills/pull/154)** – *shodh-memory*: Introduces persistent memory for AI agents via `proactive_context` calls, enabling cross-conversation context retention. Demonstrates growing demand for agentic continuity.
- **[#147](https://github.com/anthropics/skills/pull/147)** – *codebase-inventory-audit*: Systematic cleanup and audit workflow identifying orphaned code, unused assets, and documentation gaps. Reflects developer focus on maintainability.
- **[#360](https://github.com/anthropics/skills/pull/360)** – *appdeploy*: Enables direct deployment of full-stack web apps using AppDeploy.ai, closing the loop from generation to production. High utility for end-to-end workflows.

> All top-ranked PRs remain open with active development or refinement phases.

---

### 2. **Community Demand Trends**

From Issues, key unmet needs include:
- **Enterprise-grade sharing**: Org-wide skill distribution (Issue #228) with shared libraries or direct links—currently manual and fragmented.
- **Security & trust boundaries**: Concerns over community skills impersonating official ones under `anthropic/` namespace (Issue #492), signaling need for stricter curation.
- **Integration flexibility**: Support for AWS Bedrock usage (Issue #29) and MCP exposure (Issue #16) points to desire for broader model and protocol interoperability.
- **Plugin reliability**: Duplicate skill loading from overlapping plugins like `document-skills` and `example-skills` (Issue #189); requires marketplace.json alignment.

Emerging functional demands: predictive analytics (SAP-RPT-1-OSS skill #181), document format support (ODT #486), macOS automation (#806), and testing patterns (#723).

---

### 3. **High-Potential Pending Skills**

Actively developed Skills likely to merge soon:
- **[#723](https://github.com/anthropics/skills/pull/723)** – *testing-patterns*: Comprehensive guidance on unit, integration, and React component testing strategies—addresses critical gap in test-driven development support.
- **[#444](https://github.com/anthropics/skills/pull/444)** – *AURELION suite*: Structured cognitive framework (kernel, advisor, agent, memory) for professional knowledge management; aligns with advanced agent orchestration trends.
- **[#568](https://github.com/anthropics/skills/pull/568)** – *servicenow*: Broad ITSM/SecOps platform assistant covering scripting, architecture, incident response, and integration—enterprise automation flagship.
- **[#335](https://github.com/anthropics/skills/pull/335)** – *masonry-generate-image-and-videos*: Leverages Masonry CLI for AI-generated media, extending creative capabilities beyond text.

These reflect maturation toward production-ready, niche-domain expertise.

---

### 4. **Skills Ecosystem Insight**

The community’s most concentrated demand centers on **enterprise-grade agent orchestration**, driven by needs for persistent memory, secure skill governance, cross-organizational sharing, and seamless deployment—signaling a shift from isolated utilities to integrated, trustworthy AI workflow ecosystems.

---

**Claude Code Community Digest – May 9, 2026**

---

### 1. Today's Highlights  
The Claude Code VS Code extension for Windows experienced a critical regression in v2.1.136, where a hardcoded Linux CI build path caused activation failures across multiple reports (57+ comments). Anthropic released v2.1.137 to fix this packaging bug and introduced new configuration options for enterprise feedback collection via OpenTelemetry and Auto Mode rule enforcement.

---

### 2. Releases  
**v2.1.137**  
- Fixed Windows extension activation failure due to incorrect packaging (GitHub [link](https://github.com/anthropics/claude-code/releases/tag/v2.1.137))

**v2.1.136**  
- Added `CLAUDE_CODE_ENABLE_FEEDBACK_SURVEY_FOR_OTEL` flag for enterprises using OpenTelemetry to capture session quality surveys  
- Introduced `settings.autoMode.hard_deny` to unconditionally block actions regardless of user intent (GitHub [link](https://github.com/anthropics/claude-code/releases/tag/v2.1.136))

---

### 3. Hot Issues  

| Issue | Summary | Impact & Reaction |
|------|--------|-------------------|
| [#57415](https://github.com/anthropics/claude-code/issues/57415) | Windows extension fails to activate due to hardcoded Linux CI path in `createRequire()` — confirmed regression from prior fixes | 11 comments, 6 👍 — widespread impact; users report inability to use core IDE integration |
| [#49479](https://github.com/anthropics/claude-code/issues/49479) | ESC during MCP tool call kills all Python stdio MCPs on macOS — regression since v2.1.104 | 7 comments, 2 👍 — disrupts multi-tool workflows; labeled "PLEASE FIX NOW!" |
| [#57316](https://github.com/anthropics/claude-code/issues/57316) | Image paste (`Ctrl+V`) broken in TUI on Windows across terminals and WSL setups | 6 comments — affects UX for visual input; workaround exists but not intuitive |
| [#51040](https://github.com/anthropics/claude-code/issues/51040) | Google Drive/Gmail/Calendar MCP integrations lack write operations (move, delete, rename) | 5 comments, 1 👍 — limits productivity with first-party tools; requested feature for years |
| [#53442](https://github.com/anthropics/claude-code/issues/53442) | Cowork Google Drive MCP cannot access Workspace Shared Drives | 5 comments, 7 👍 — shared collaboration blocked; highly voted among enterprise users |
| [#56693](https://github.com/anthropics/claude-code/issues/56693) | CLI leaks memory unboundedly during sessions; observed 113GB usage on 24GB Mac | 2 comments, 1 👍 — system-level crash risk; severe stability concern |
| [#57460](https://github.com/anthropics/claude-code/issues/57460) | Extension fails to activate on Windows — same Linux path issue as #57415 | 5 comments, 1 👍 — duplicate but confirms severity across environments |
| [#57433](https://github.com/anthropics/claude-code/issues/57433) | Regression: extension activation fails on Windows in v2.1.136 | 4 comments, 2 👍 — early detection shows rapid community response |
| [#57495](https://github.com/anthropics/claude-code/issues/57495) | Reproducible Windows activation failure due to hardcoded CI path | 3 comments, 1 👍 — provides clean repro case; helps maintainers prioritize fix |

---

### 4. Key PR Progress  

| PR | Description | Status |
|----|-------------|--------|
| [#57199](https://github.com/anthropics/claude-code/pull/57199) | Fixes code-review skill to preserve newlines in summary comments using `--body-file` | Open |
| [#57267](https://github.com/anthropics/claude-code/pull/57267) | Adds paginated GitHub API helper for stale-issue sweep automation | Open |
| [#57223](https://github.com/anthropics/claude-code/pull/57223) | Implements Superpowers Process Gate for frontend-design skill (brainstorm → plan → review) | Closed |
| [#57190](https://github.com/anthropics/claude-code/pull/57190) | Removes non-resolvable `statsig.anthropic.com` from firewall script | Open |
| [#57333](https://github.com/anthropics/claude-code/pull/57333) | Updates README.md for clarity or links | Open |
| [#56784](https://github.com/anthropics/claude-code/pull/56784) | Pins GitHub Actions to commit SHAs for security | Closed |
| [#14842](https://github.com/anthropics/claude-code/pull/14842) | Updates documentation links to point to new Claude Code site | Open |
| [#34735](https://github.com/anthropics/claude-code/pull/34735) | Updates CI actions | Open |

> *Note: Several PRs lack detailed descriptions in the data source.*

---

### 5. Feature Request Trends  

- **Enhanced Google Workspace Integration**: Users demand full CRUD support (not just read/create) for Google Drive, Gmail, and Calendar via first-party MCP connectors.
- **Cross-Platform Clipboard Support**: Strong request for consistent image/clipboard paste behavior in TUI across Windows, macOS, and WSL.
- **Enterprise Observability**: Interest in deeper telemetry integration, particularly via OpenTelemetry for session quality feedback loops.
- **Auto Mode Rule Control**: Demand for stricter safety controls (`hard_deny`) in Auto Mode to prevent unintended actions.

---

### 6. Developer Pain Points  

- **Windows Packaging Flakiness**: Recurring issue with platform-specific paths leaking into bundled extensions — now a regression hotspot starting at v2.1.136.
- **MCP Instability**: Multiple reports of MCP tools failing unexpectedly (e.g., ESC killing all Python stdio processes), breaking multi-agent workflows.
- **Memory Leaks in CLI**: Node.js process consuming unbounded RAM during long sessions poses system stability risks.
- **Inconsistent UI Behavior**: Platform-specific quirks like broken clipboard pasting on Windows reduce reliability of core interactions.

--- 

*Prepared by Claude Code Technical Analyst – May 9, 2026*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

**OpenAI Codex Community Digest – May 9, 2026**

---

### 1. **Today's Highlights**  
OpenAI released **Codex Rust v0.130.0**, introducing a streamlined `codex remote-control` CLI for headless app-server management and enhanced plugin sharing with metadata controls (#21424, #21447). A critical regression in `/compact` handling surfaced in v0.129.0, now under active investigation (#21671). Meanwhile, the community continues to push for deeper remote development and multi-account support, reflecting growing enterprise adoption.

---

### 2. **Releases**  

#### **rust-v0.130.0**  
- **New**: `codex remote-control` command enables simplified headless server startup for remote orchestration (#21424).  
- **Enhanced**: Plugin details now display bundled hooks; plugin sharing includes link metadata and discoverability controls (#21447, #21495, #21637).  

> *Note: Alpha releases (v0.130.0-alpha.x) were also published but contain no new user-facing features.*

---

### 3. **Hot Issues**  

| Issue | Summary | Reaction |
|-------|--------|--------|
| [#14593](https://github.com/openai/codex/issues/14593) | Token consumption spikes dramatically—users report ~6% usage per message, indicating severe rate-limit miscalculation. | 🔥 572 comments, +250 👍 |
| [#10450](https://github.com/openai/codex/issues/10450) | Demand for native remote development in Codex Desktop App, especially SSH/WSL2 integration. | 💬 174 comments, +644 👍 |
| [#20161](https://github.com/openai/codex/issues/20161) | Phone verification broken post-SSO login—frustrates users without phone numbers on file. | 🔒 Closed after fix |
| [#8259](https://github.com/openai/codex/issues/8259) | Generated Markdown tables are unreadable due to malformed whitespace formatting. | 📝 31 comments, +115 👍 |
| [#20552](https://github.com/openai/codex/issues/20552) | File tree toggle in desktop app fails reliably on macOS despite being enabled. | 🖥️ 26 comments |
| [#18993](https://github.com/openai/codex/issues/18993) | VS Code extension can’t open past conversation history—regression suspected. | 🐞 24 comments, +41 👍 |
| [#4432](https://github.com/openai/codex/issues/4432) | Request for `--auth-profile` CLI flag to support multiple accounts natively. | 🏢 12 comments, +94 👍 |
| [#19910](https://github.com/openai/codex/issues/19910) | Active goal continuation lost during mid-turn compaction—undermines goals feature reliability. | 🎯 Praised as life-changing, but flawed UX |
| [#16889](https://github.com/openai/codex/issues/16889) | Usage limits consumed 10× faster than expected—likely backend bug. | ⏱️ 10 comments |
| [#19305](https://github.com/openai/codex/issues/19305) | Full Computer Use support needed for Windows-native workflows (not just WSL/Browser). | 🪟 10 comments, +14 👍 |

---

### 4. **Key PR Progress**  

| PR | Description |
|----|-------------|
| [#21762](https://github.com/openai/codex/pull/21762) | Share project hook trust across Git worktrees—improves usability in monorepos. |
| [#21819](https://github.com/openai/codex/pull/21819) | Add test coverage for sandboxed `apply_patch` with symbolic links. |
| [#21844](https://github.com/openai/codex/pull/21844) | Ignore stale `/tmp` `.git` markers during project discovery to prevent false negatives. |
| [#21396](https://github.com/openai/codex/pull/21396) | Introduce CLI commands for managing plugin marketplaces (`marketplace list`, `add`, etc.). |
| [#21617](https://github.com/openai/codex/pull/21617) | Support environment-specific routing for `apply_patch` tool calls. |
| [#21853](https://github.com/openai/codex/pull/21853) | Fix updater daemon race condition after binary rollout. |
| [#20718](https://github.com/openai/codex/pull/20718) *(closed)* | Lifecycle management for `app-server` daemon over SSH—now integrated. |
| [#21768](https://github.com/openai/codex/pull/21768) | Add `--dangerously-bypass-hook-trust` flag for headless use cases. |
| [#21825](https://github.com/openai/codex/pull/21825) *(closed)* | Increase timeouts for exec-server transport in remote environments. |
| [#20147](https://github.com/openai/codex/pull/20147) | Feature flag for network proxy control—decouples permissions from proxy startup. |

---

### 5. **Feature Request Trends**  

- **Remote Development Maturation**: Deep demand for native remote session support (SSH, WSL2, cross-machine sync) via CLI and Desktop App (#10450, #21816).  
- **Multi-Account & Auth Flexibility**: Users seek first-class CLI auth profiles (`--auth-profile`) to manage client or team accounts securely (#4432).  
- **Plugin Ecosystem Expansion**: Marketplace-integrated plugins with discoverability and versioning (#21396).  
- **Computer Use Accessibility**: Full native OS-level Computer Use on Windows/macOS beyond Browser Use (#19305, #21700).  
- **Context Preservation**: Preventing loss of active goals, thread summaries, or prompts during auto-compaction (#19910, #21140).

---

### 6. **Developer Pain Points**  

- **Token Accounting Bugs**: Multiple reports of abnormal token burn rates due to hidden LLM calls or misattributed usage (#14593, #16889, #21746).  
- **Cross-Platform Consistency**: Inconsistent behavior between CLI, TUI, and Desktop App—especially around tool availability (e.g., Chrome plugin tools missing at runtime) (#21791, #21822).  
- **Sandbox & Security Edge Cases**: Hard-link writes and symbolic link handling causing permission errors in sandboxed environments (#21845, #21819).  
- **Regression Resilience**: Auto-compact and session history features regressing post-upgrade (v0.129.0), breaking workflow continuity (#18993, #21671).  
- **Regional Feature Gating**: Geo-restricted access to Chrome extensions or Computer Use APIs in EU/Norway (#21598, #21700).

--- 

*Prepared by OpenAI Codex Technical Analyst Team*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

Here is the Gemini CLI Community Digest for 2026-05-09.

***

### 1. Today's Highlights

The community digest for May 9th, 2026, focuses on critical stability and performance issues following the v0.35.3 release. A major refactoring effort to eliminate unsafe type assertions in the core is underway. The community has also raised urgent concerns about authentication loops, quota limitations, and a significant performance regression that severely impacts user experience.

### 2. Releases

No new releases were published in the last 24 hours.

### 3. Hot Issues

Here are the ten most noteworthy issues based on comment count and community reaction:

1.  **Performance Regression (v0.35.3) (#24294):** Users report extreme slowdowns (>1 minute per simple prompt), making the CLI unusable. The issue is resolved by downgrading to v0.34.0. This is a top priority for users.
    *   [View Issue](https://github.com/google-gemini/gemini-cli/issues/24294)

2.  **Fix Unsafe Type Assertions (Refactoring Plan) (#19708):** This meta-issue tracks a large-scale refactoring to replace `as Type` casts with proper runtime validation (Zod, instanceof, type guards). It's a significant effort for codebase safety.
    *   [View Issue](https://github.com/google-gemini/gemini-cli/issues/19708)

3.  **Verification Loop Bug (#19936):** Users get stuck in a loop when verifying their pro account, receiving an "Authentication successful" message but being unable to proceed, effectively blocking access.
    *   [View Issue](https://github.com/google-gemini/gemini-cli/issues/19936)

4.  **Infinite 429 Retry Loops & Context Bloat (Pro Accounts) (#23984):** Pro accounts are trapped in persistent retry loops with "High Demand" throttling messages, even when quotas are unused, due to recursive filesystem scans.
    *   [View Issue](https://github.com/google-gemini/gemini-cli/issues/23984)

5.  **Can't use Gemini 3.1 Pro Preview with AI Pro Plan (#24222):** AI Pro plan subscribers cannot access the `gemini-3.1-pro-preview` model, despite having paid for it, indicating a potential shadow-ban or permission error.
    *   [View Issue](https://github.com/google-gemini/gemini-cli/issues/24222)

6.  **Pro Account Treated as Standard-Tier (#23973):** A user with a Google AI Pro account is incorrectly identified as standard-tier within the CLI, preventing them from accessing Pro features.
    *   [View Issue](https://github.com/google-gemini/gemini-cli/issues/23973)

7.  **CLI Unusable for Days (#24322):** Despite reinstalls and cache cleanup, users report the CLI is completely non-functional, requesting guidance on refunds.
    *   [View Issue](https://github.com/google-gemini/gemini-cli/issues/24322)

8.  **Chinese in English Chat (#24115):** The agent outputs Chinese characters in an English-only conversation, suggesting a locale or system configuration issue.
    *   [View Issue](https://github.com/google-gemini/gemini-cli/issues/24115)

9.  **ToolOutputMaskingService Redundant Serialization (#24028):** The service redundantly JSON-serializes tool responses twice per turn, leading to unnecessary performance overhead.
    *   [View Issue](https://github.com/google-gemini/gemini-cli/issues/24028)

10. **/clear Command Fails to Abort Stream (#26402):** The `/clear` command does not abort any in-flight streaming requests, and an "Active Topic" marker leaks into subsequent sessions, causing UI pollution.
    *   [View Issue](https://github.com/google-gemini/gemini-cli/issues/26402)

### 4. Key PR Progress

Ten important pull requests showing active development:

1.  **Implement Scheduled Agent and Worker Delegation Model (#26717):** Introduces a new `WORKER` agent, refactoring existing `interactive` and `scheduled` brains to mandate delegation of research and triage tasks for improved modularity and security.
    *   [View PR](https://github.com/google-gemini/gemini-cli/pull/26717)

2.  **Prevent Ghost Text Wrapping Infinite Loop (#26324):** Fixes a bug where long unbroken ghost-text words could cause the interactive CLI to hang indefinitely during text wrapping.
    *   [View PR](https://github.com/google-gemini/gemini-cli/pull/26324)

3.  **Resolve Windows Hangs and Zombie Processes (#26392):** Addresses critical issues affecting Windows environments, including hangs, zombie processes, and subagent reliability.
    *   [View PR](https://github.com/google-gemini/gemini-cli/pull/26392)

4.  **Externalize https-proxy-agent (#26361):** Fixes proxy support by externalizing `https-proxy-agent` from the esbuild bundle, resolving `TypeError: HttpsProxyAgent is not a constructor`.
    *   [View PR](https://github.com/google-gemini/gemini-cli/pull/26361)

5.  **Treat GET 404 as 405 in StreamableHTTPClientTransport (#24847):** Fixes an SDK error where a `GET 404` request (which should be silently ignored per MCP spec) was throwing an error instead of treating it as a `405 Method Not Allowed`.
    *   [View PR](https://github.com/google-gemini/gemini-cli/pull/24847)

6.  **Require Mode When Setting Policy (#24758):** A breaking change that requires specifying `modes` when setting a policy, providing safer defaults and preventing all modes by default.
    *   [View PR](https://github.com/google-gemini/gemini-cli/pull/24758)

7.  **Merge Auto Modes into Single Auto Mode (#26714):** Simplifies model management by unifying multiple "Auto" options (`Auto (Gemini 3)` and `Auto (Gemini 2.5)`) into a single, context-aware "Auto" mode.
    *   [View PR](https://github.com/google-gemini/gemini-cli/pull/26714)

8.  **Prefix Tool Call IDs with Tool Names (#26676):** Prefixes internal `toolCallId` with the tool name for ACP compliant IDEs, giving them a stable way to identify which tool is executing and render tool-specific UIs.
    *   [View PR](https://github.com/google-gemini/gemini-cli/pull/26676)

9.  **Use snake_case thought_signature for Vertex AI Compatibility (#26652):** Fixes a 400 INVALID_ARGUMENT error with Vertex AI by changing property naming from camelCase (`thoughtSignature`) to snake_case (`thought_signature`).
    *   [View PR](https://github.com/google-gemini/gemini-cli/pull/26652)

10. **Union-Find Context Compaction (#24736):** Adds union-find clustering as an alternative compression strategy for `AgentHistoryProvider`, improving context management by grouping semantically similar messages.
    *   [View PR](https://github.com/google-gemini/gemini-cli/pull/24736)

### 5. Feature Request Trends

Analysis of open issues reveals these emerging feature directions:

*   **Improved Authentication Flow:** Users seek a more reliable and less frustrating authentication process, especially for Pro accounts, with better error messages and clearer feedback.
*   **Enhanced Quota Management:** There's a strong demand for clear visibility into usage quotas and limits, both for free and paid tiers, to prevent unexpected blocks or surprises.
*   **Better Performance Monitoring & Diagnostics:** Developers and power users want tools to diagnose performance bottlenecks and understand resource consumption more deeply.
*   **Robust Error Handling & Feedback:** Requests focus on consistent, informative, and actionable error messages, particularly for network issues (e.g., 429s) and API compatibility problems.
*   **Advanced Context Management:** Features like smarter context compaction, union-find clustering, and improved snapshotting are sought to optimize memory usage and response times.
*   **IDE Integration Improvements:** Enhancements to the Agent Client Protocol (ACP) for better tool rendering and integration within various IDEs are a recurring theme.
*   **Model Management Simplification:** The trend is towards consolidating multiple "Auto" model modes into a single, intelligent option that dynamically routes based on task complexity.

### 6. Developer Pain Points

Recurring frustrations and high-frequency requests include:

*   **Performance Regression:** The most pressing issue, with users reporting severe slowdowns post-v0.35.3, directly impacting usability.
*   **Authentication Loops:** A critical blocker for Pro users, where the verification process gets stuck, preventing access to paid features.
*   **Quota Limitations & Visibility:** Confusion and frustration around daily call limits for free users, and a general lack of clear quota information for all tiers.
*   **Inconsistent Error Handling:** Poorly formatted, uninformative, or missing error messages, particularly for network errors and API compatibility issues, hinder debugging.
*   **Copy/Paste Shortcut Failures:** Loss of standard keyboard shortcuts (`ctrl+insert`, `shift+insert`) for copy/paste disrupts workflow.
*   **Terminal Title Padding:** Annoying trailing spaces in terminal titles (especially in tmux) due to hardcoded padding.
*   **Extension Documentation Inaccuracy:** Documentation stating that extension folder names must match extension names, while in practice they do not, leads to confusion.
*   **Test Environment Pollution:** Test artifacts being generated in the main workspace directory, requiring manual cleanup or `.gitignore` updates.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

**GitHub Copilot CLI Community Digest – May 9, 2026**

---

### 1. **Today's Highlights**

The latest release, v1.0.44, introduces key improvements to slash command flexibility and userPromptSubmitted hook capabilities—enabling direct request handling without LLM calls. Concurrently, users report persistent rendering bugs in markdown tables with emojis and symlink path resolution on WSL, while new issues highlight instability in sub-agent sessions and silent failures in non-interactive mode.

---

### 2. **Releases**

**v1.0.44 (May 8)**  
- Slash commands now support mid-input invocation and multiple skill triggers per message.  
- `userPromptSubmitted` hooks can bypass the LLM entirely, returning responses directly (improving extensibility).  
- Faster `/user list` and `/user switch` for multi-account workflows.

**v1.0.44-3**  
- Clarified that `userPromptSubmitted` hooks may return responses without model calls (fixing prior ambiguity).

---

### 3. **Hot Issues** *(Top by engagement)*

| Issue | Summary | Impact |
|------|--------|--------|
| [#2630](https://github.com/github/copilot-cli/issues/2630) | Custom agents with MCP servers fail to connect in CLI sub-agent or `--prompt` contexts. | Breaks advanced agent workflows relying on external tools. |
| [#2543](https://github.com/github/copilot-cli/issues/2543) | Concurrent sub-agent events corrupt session state, causing permanent “tool_use ids without tool_result” errors. | Blocks iterative agent-based development. |
| [#1412](https://github.com/github/copilot-cli/issues/1412) | PowerShell tools trigger false-positive security alerts (e.g., Elastic EDR). | Hinders adoption due to enterprise security friction. |
| [#1433](https://github.com/github/copilot-cli/issues/1433) | `COPILOT_CUSTOM_INSTRUCTIONS_DIRS` doesn’t resolve NFS-mounted paths correctly. | Limits configuration portability across network filesystems. |
| [#3189](https://github.com/github/copilot-cli/issues/3189) | `copilot -p` exits silently with code 1 and no logs on macOS. | Non-interactive scripting broken post-update. |
| [#3200](https://github.com/github/copilot-cli/issues/3200) | Request: `/delegate uncommited` to avoid auto-commit/push. | Desired for safe delegation during exploratory work. |
| [#3195](https://github.com/github/copilot-cli/issues/3195) | Reasoning fields from BYOK providers aren’t mapped to events. | Misses reasoning visibility in custom integrations. |
| [#3049](https://github.com/github/copilot-cli/issues/3049) | File write failures when generating plans without code changes. | Frustrates planning-first workflows. |
| [#3192](https://github.com/github/copilot-cli/issues/3192) | Custom status line commands ignored when `footer.showCustom=true`. | Configuration UX inconsistency. |
| [#3205](https://github.com/github/copilot-cli/issues/3205) | Emoji column misalignment persists despite #2764 closure. | Rendering regression undermines reliability. |

---

### 4. **Key PR Progress**

| PR | Description |
|----|-------------|
| [#3199](https://github.com/github/copilot-cli/pull/3199) | Updates Homebrew cask URLs to reflect moved CLI formulae (`copilot-cli`, `copilot-cli@prerelease`). Critical for install automation. |
| [#2800](https://github.com/github/copilot-cli/pull/2800) | Adds initial devcontainer config for consistent local development environments. |

*(Only 2 PRs updated in last 24h; others pending longer.)*

---

### 5. **Feature Request Trends**

- **Enhanced Agent Flexibility**: Users want better control over sub-agent lifecycle (pre/post hooks, uncommitted delegation, model alignment).
- **BYOK & External Provider Support**: Clear API surfaces for custom model providers and improved Azure OpenAI Responses API compatibility.
- **Terminal Rendering Robustness**: Fixes for emoji/table formatting, symlink awareness (WSL), and keyboard input fidelity.
- **Security & Governance**: Enterprise concerns around MCP registry enforcement and secure variable scoping in PowerShell scripts.

---

### 6. **Developer Pain Points**

- **Session Corruption**: Concurrent sub-agent usage leads to unrecoverable session state errors (#2543).
- **Silent Failures**: Non-interactive mode crashes without diagnostics (#3189); file writes fail under edge cases (#3049).
- **Rendering Fragility**: Markdown tables break with emojis or long links; terminal output is inconsistent across platforms.
- **Configuration Ambiguity**: Environment variables like `COPILOT_CUSTOM_INSTRUCTIONS_DIRS` behave unpredictably on networked filesystems.
- **Security Overreach**: PowerShell scripts generated by the CLI trigger EDR alerts, complicating enterprise use.

--- 

*Prepared by GitHub Copilot CLI Technical Analyst Team.*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

**Kimi Code CLI Community Digest – 2026-05-09**

---

### **Today's Highlights**
The Kimi Code CLI team is actively addressing critical stability and usability issues, particularly around Windows compatibility and long-running shell operations. A major refactor to replace PowerShell with Git Bash on Windows (#2186) and adaptive timeouts for slow commands (#2200) signal a shift toward POSIX-aligned behavior. Meanwhile, community feedback highlights growing demand for better context visualization and cross-platform consistency.

---

### **Releases**
*No new releases in the last 24 hours.*

---

### **Hot Issues** *(Top 10)*

1. **[#1864](https://github.com/MoonshotAI/kimi-cli/issues/1864)** – Users want full visibility into the model’s thinking traces directly in CLI output. Currently suppressed, this reduces debugging transparency for complex reasoning tasks. 12 comments, 10 upvotes.
2. **[#2152](https://github.com/MoonshotAI/kimi-cli/issues/2152)** – Proposal for a global `~/.kimi/AGENTS.md` file to share coding conventions across projects. Addresses workflow fragmentation when managing multiple repos. 3 comments, 2 upvotes.
3. **[#2165](https://github.com/MoonshotAI/kimi-cli/issues/2165)** – Invalid tool calls corrupt entire sessions by breaking history replay—critical for reliability. No votes yet; flagged as blocking.
4. **[#2178](https://github.com/MoonshotAI/kimi-cli/issues/2178)** – Windows `.exe` reports blank version info, causing VS Code extension to reject it as incompatible. Impacts IDE integration. 2 comments.
5. **[#2189](https://github.com/MoonshotAI/kimi-cli/issues/2189)** – Enabling “Plan” mode introduces garbled text in subsequent interactions on Windows. Localized but disruptive UX bug.
6. **[#2197](https://github.com/MoonshotAI/kimi-cli/issues/2197)** – Subprocess execution via `kaos.exec()` resets TrueType fonts in Windows console—visual regression affecting readability.
7. **[#2195](https://github.com/MoonshotAI/kimi-cli/issues/2195)** – Fixed 60-second shell timeout lacks configurability or adaptiveness for long-running commands (e.g., builds). Hard limit causes hangs.
8. **[#2193](https://github.com/MoonshotAI/kimi-cli/issues/2193)** – After 3 LLM timeouts, background auto-trigger permanently disables—breaking unattended task processing. Serious regression.
9. **[#2191](https://github.com/MoonshotAI/kimi-cli/issues/2191)** – `StrReplaceFile` silently converts CRLF→LF on Windows, forcing agents to abandon native tools. Regression from earlier fix attempt.
10. **[#2188](https://github.com/MoonshotAI/kimi-cli/issues/2188)** – Request to replace plain-text context indicator with color-coded progress bar for better visual feedback during token usage.

---

### **Key PR Progress** *(Top 10)*

1. **[#2200](https://github.com/MoonshotAI/kimi-cli/pull/2200)** – Adaptive shell timeouts: extends duration for known slow patterns (git, builds) while preserving 60s default for normal commands.
2. **[#2199](https://github.com/MoonshotAI/kimi-cli/pull/2199)** – Fixes Windows subprocess spawning: suppresses unwanted console windows via `CREATE_NO_WINDOW`, resolving #2197.
3. **[#2198](https://github.com/MoonshotAI/kimi-cli/pull/2198)** – Defers slash command updates in ACP to avoid race condition causing missing commands in v1.41.0.
4. **[#2196](https://github.com/MoonshotAI/kimi-cli/pull/2196)** – Sanitizes malformed tool call history after invalid JSON, preventing session corruption (#2165).
5. **[#2183](https://github.com/MoonshotAI/kimi-cli/pull/2183)** – Eagerly attaches image paths at prompt time instead of deferring—improves reliability for multimodal inputs.
6. **[#2186](https://github.com/MoonshotAI/kimi-cli/pull/2186)** – Refactors Windows Shell backend from PowerShell to Git Bash, aligning command semantics with Unix-like environments.
7. **[#1972](https://github.com/MoonshotAI/kimi-cli/pull/1972)** – Introduces color-coded Unicode progress bar for context usage (mirroring claude-hud), improving UX visibility.
8. **[#2177](https://github.com/MoonshotAI/kimi-cli/pull/2177)** – Clears partial UI output on LLM retry to prevent artifact concatenation during transient failures.
9. **[#2187](https://github.com/MoonshotAI/kimi-cli/pull/2187)** – Bumps Pillow to 12.2.0 to patch CVE-2026-25990 (PSD out-of-bounds write), easing security compliance.
10. **[#2185](https://github.com/MoonshotAI/kimi-cli/pull/2185)** – Allows API-key auth to bypass forced OAuth in ACP contexts, restoring functionality for JetBrains/IDEA users.

---

### **Feature Request Trends**

- **Context Visualization**: Multiple requests (e.g., #1864, #2188, #1972) push for richer, real-time display of token usage and model reasoning traces.
- **Cross-Project Consistency**: Desire for shared agent rules via global `AGENTS.md` (#2152) reflects need for standardized workflows across codebases.
- **Windows Compatibility**: High frequency of bugs and feature gaps related to PowerShell vs. POSIX command handling, line endings (CRLF), and console behavior.

---

### **Developer Pain Points**

- **Inconsistent Line Endings**: `StrReplaceFile` corrupting CRLF→LF breaks Windows-native tool usage—regression despite prior fixes.
- **Hardcoded Timeouts**: Fixed 60s shell timeout fails on legitimate long operations (builds, clones), with no override mechanism.
- **Session Corruption**: Malformed tool calls or repeated LLM timeouts can permanently disable background task monitoring (#2193).
- **Windows-Specific Friction**: Font resetting, version metadata absence, and PowerShell/Unix command mismatches degrade experience on native Windows.
- **IDE Integration Breakage**: VS Code extension rejects CLI due to missing version info; ACP auth flow conflicts with API-key setup.

--- 

*Generated by Kimi Code CLI Community Digest Bot – Powered by GitHub Insights*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

### OpenCode Community Digest - May 9, 2026

**Today's Highlights**
The community continues to focus on critical stability and permission issues. A major fix was merged to resolve subagent permission hangs by removing an overly restrictive session filter in `run.ts`. Several new PRs address UI hydration problems, custom provider capabilities, and shell output normalization.

**Releases**
No new releases in the last 24 hours.

**Hot Issues**

1. **Free Model Usage Limits (#15585)**: Users report hitting "free usage exceed" errors with all three free models simultaneously. This raises questions about whether OpenCode truly implements usage limits for free-tier models. (20 comments, 👍7)

2. **Pip3 Security Concerns (#22100)**: Critical security issue where OpenCode TUI runs pip3 with permissive read-only configurations that could install untrusted packages. Community demands clarification on why OpenCode feels entitled to modify system software. (10 comments)

3. **Inconsistent Path Handling (#20045)**: Edit permissions use relative paths while external_directory uses absolute paths, causing agent-level path rules to silently fail when they should work. (9 comments)

4. **Markdown Rendering Regression (#21299)**: Since OpenTUI upgrade from 0.1.79 to 0.1.88+, markdown formatting (headings, bold, code blocks) appears as raw text instead of being rendered properly. (7 comments, 👍1)

5. **ACP Registry Agent Loading Stuck (#24061)**: Agent panel remains stuck on loading indefinitely after installing OpenCode agent via ACP Registry, requiring manual intervention to resolve. (6 comments)

6. **OAuth Callback Server Leak (#23563)**: OAuth callback server on port 19876 never stops after authentication completes, causing cross-instance CSRF errors when running multiple OpenCode instances. (4 comments, marked urgent)

7. **Skill System Not Invoking Properly (#24831)**: Using `/skill-name` command only copies base skill prompt without actually invoking the full skill system, breaking referenced file access. (4 comments)

8. **Git Integration Process Lock (#26339)**: Git processes spawn uncontrollably during normal operation, locking the UI and preventing user interaction until manually terminated. (4 comments)

9. **Custom Provider Cost Tracking Broken (#17223)**: Cost tracking displays $0.00 for custom providers using @ai-sdk/openai-compatible despite proper configuration. Built-in providers work correctly via models.dev data. (3 comments, 👍15 - highest endorsement)

10. **Agent Task Termination (#21534)**: Long-running tasks stop unexpectedly after seconds/minutes without clear indication of why or how to resume. Often shows current todo list before halting. (3 comments, 👍2)

**Key PR Progress**

1. **[fix(run): remove sessionID filter] (#26427)**: Critical fix addressing subagent permission hangs by removing the `permission.sessionID !== sessionID` filter that prevented proper permission processing for task tools.

2. **[fix(ui): normalize shell output carriage returns] (#26426)**: Fixes web shell output rendering by normalizing carriage returns to display progress-style command output as separate lines consistently.

3. **[fix(opencode): default custom provider capabilities to true] (#26422)**: Addresses issue #22673 by setting default capabilities (reasoning, attachment, tool calling) to true for custom models added via config, preventing overly restrictive defaults.

4. **[fix(opencode): make bash tool description parameter optional] (#26420)**: Resolves compatibility issues with existing configurations by making the bash tool description parameter optional, fixing #13618.

5. **[fix(app): hydrate session before prompt submit] (#26414)**: Fixes web UI crash when submitting prompts on existing sessions after refresh/restart by ensuring proper session hydration before submission.

6. **[feat(core): smarter worktree naming] (#26368)**: Improves worktree display logic to use parent folder name when linked worktrees share basename with primary checkout, avoiding naming conflicts.

7. **[feat(skills): ui-ux-hypermezcla design skill] (#26396)**: Adds unified design skill combining ADHD/frontend/typography expertise for improved cognitive load reduction and production-grade UX patterns.

8. **[fix: repair truncated JSON tool inputs] (#24289)**: Uses jsonrepair library to handle malformed JSON in LLM tool call arguments, fixing multiple related truncation issues (#24177, #20650, #20786).

9. **[feat(app): mobile touch optimization] (#18767)**: Ongoing effort to optimize OpenCode app for mobile/touch devices while preserving desktop experience, focusing on gesture support and responsive layouts.

10. **[feat: basic PWA support] (#19173)**: Adds progressive web app capabilities so OpenCode feels more like a native installed application with offline functionality and better integration.

**Feature Request Trends**

- **Cost Tracking Enhancement**: Multiple reports indicate cost tracking fails for custom providers even when properly configured, suggesting need for standardized cost field handling across all provider types.
  
- **Security Hardening**: Growing concern about package installation security and permissive configurations that may allow execution of untrusted code.
  
- **Path Consistency**: Requests for unified path handling between edit permissions and external directories to ensure consistent behavior across different configuration formats.
  
- **Mobile Optimization**: Continued demand for better mobile/touch support, including PWA features and responsive design improvements.
  
- **Documentation Expansion**: Requests for better documentation around Forgejo/GitLab integrations and MCP server setup procedures.

**Developer Pain Points**

- **Custom Provider Limitations**: Significant frustration with inconsistent behavior between built-in and custom providers, particularly regarding capability defaults and cost tracking.
  
- **Permission System Complexity**: Subagent permission handling remains problematic, with filters causing hangs and inconsistent rule evaluation across different context levels.
  
- **Memory Management**: Occasional OOM crashes related to VCS diff auto-fetch functionality, indicating memory leaks or unbounded data processing.
  
- **UI State Synchronization**: Web UI frequently loses session state after refreshes, requiring manual rehydration or restart to continue previous conversations.
  
- **Git Integration Instability**: Uncontrolled git process spawning locks the application interface, disrupting workflow continuity.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

**Pi Community Digest – May 9, 2026**

---

### **Today's Highlights**
The Pi development team continues to address critical stability and UX issues in the TUI, including crashes from wide terminal lines and broken slash command autocompletion. A major refactoring wave is underway, with multiple PRs targeting extensibility via footer providers and async session persistence. New platform support (Windows via Zig) and improved image handling round out today’s progress.

---

### **Releases**
No new releases in the last 24 hours.

---

### **Hot Issues** *(Top by engagement)*

1. **#3929** – Bun startup crash due to missing `package.json` in global install dir  
   *Why it matters:* Blocks users on Bun runtime; regression from prior fixes for `bun root -g`.  
   [Link](https://github.com/earendil-works/pi/issues/3929)

2. **#4185** – Poor color contrast in zsh/tmux environments  
   *Why it matters:* Accessibility and usability concern affecting CLI workflow clarity.  
   [Link](https://github.com/earendil-works/pi/issues/4185)

3. **#4233** – Request: always show model provider in footer  
   *Why it matters:* Power users need visibility into active provider without multi-provider mode.  
   [Link](https://github.com/earendil-works/pi/issues/4233)

4. **#2616** – SessionManager uses blocking I/O, breaking async/database persistence  
   *Why it matters:* Core architectural flaw hinders scalability and integration with external stores.  
   [Link](https://github.com/earendil-works/pi/issues/2616)

5. **#2317** – Agent stuck in "working" state indefinitely  
   *Why it matters:* Critical UX blocker preventing task completion.  
   [Link](https://github.com/earendil-works/pi/issues/2317)

6. **#3978** – `pi config` mislabels skill sources due to hardcoded path  
   *Why it matters:* Confusing UI showing incorrect provenance for user-installed skills.  
   [Link](https://github.com/earendil-works/pi/issues/3978)

7. **#4317** – Persist timing metadata per message part (thinking/text/toolCall)  
   *Why it matters:* Enables observability and debugging of multimodal assistant responses.  
   [Link](https://github.com/earendil-works/pi/issues/4317)

8. **#4302** – TUI crashes when rendered line exceeds terminal width  
   *Why it matters:* Stability issue in narrow terminals (e.g., tmux panes).  
   [Link](https://github.com/earendil-works/pi/issues/4302)

9. **#4313** – Limit message history rendering to avoid memory bloat  
   *Why it matters:* Long sessions degrade performance and navigation.  
   [Link](https://github.com/earendil-works/pi/issues/4313)

10. **#4278** – Slash command autocomplete fails on queued (Alt+Enter) submissions  
    *Why it matters:* Inconsistent behavior between immediate and queued input modes.  
    [Link](https://github.com/earendil-works/pi/issues/4278)

---

### **Key PR Progress**

1. **#4331** – Support Cmd+V image paste via empty bracketed paste detection on macOS  
   Fixes silent failure when pasting images from clipboard.  
   [Link](https://github.com/earendil-works/pi/pull/4331)

2. **#4329** – Add `--mode worker-loop` for bus-driven task dispatch  
   Enables integration into orchestration systems like boss-pi via Unix socket messaging.  
   [Link](https://github.com/earendil-works/pi/pull/4329)

3. **#4327** – Wrap list items with indentation in TUI  
   Improves readability in narrow terminals where GPT-generated lists are common.  
   [Link](https://github.com/earendil-works/pi/pull/4327)

4. **#4299** / **#4028** – Preserve `.agents` provenance in skill metadata  
   Fixes mislabeling in `pi config` by tracking actual skill source paths.  
   [Link](https://github.com/earendil-works/pi/pull/4299)

5. **#4320** – Add Windows platform support to Zig backend  
   Replaces POSIX-only APIs with cross-platform equivalents using Win32 NT calls.  
   [Link](https://github.com/earendil-works/pi/pull/4320)

6. **#4318** – Move changelog acknowledgment to local state.json  
   Decouples internal state from user-editable settings.json for safer dotfile sharing.  
   [Link](https://github.com/earendil-works/pi/pull/4318)

7. **#4301** – Fix TUI crash on over-wide changed lines  
   Truncates non-image lines exceeding terminal width instead of crashing.  
   [Link](https://github.com/earendil-works/pi/pull/4301)

8. **#4312** – DeepSeek/Kimi tool schema fix + auto-detection  
   Handles `null` parameters and improves API compatibility.  
   [Link](https://github.com/earendil-works/pi/pull/4312)

9. **#4304** – Cross-device sync via shared/ and device-specific profiles  
   Restructures personal config to support synchronized setups across laptops/VPS.  
   [Link](https://github.com/earendil-works/pi/pull/4304)

10. **#4282** – Fix Termux docs: correct `termux-open --chooser` flag  
    Resolves broken open-file functionality in Android Termux environment.  
    [Link](https://github.com/earendil-works/pi/pull/4282)

---

### **Feature Request Trends**

- **Enhanced TUI Observability**: Users want per-part timestamps, virtual scrollback limits, and better error signaling (e.g., aborted vs. natural stops).
- **Extension API Expansion**: Requests for click handlers, cursor position exposure, and footer customization via `addFooterProvider`.
- **Cross-Platform Consistency**: Hotkey labels (“Option” vs. “Alt” on macOS), VCS status configurability, and Windows/Linux/macOS parity.
- **Cost-Aware Hierarchical AI**: Proposal for confidence-gated escalation from cheap to smart models within a single session.
- **Native Document & Image Support**: PDF/file input and image output via provider-native APIs (OpenAI, Google, OpenRouter).

---

### **Developer Pain Points**

- **Blocking I/O in Core Modules**: SessionManager’s reliance on synchronous file operations limits async adoption.
- **Inconsistent Input Handling**: Alt+Enter queues inputs but skips autocompletion and formatting.
- **Terminal Width Sensitivity**: Crashes and layout breaks in narrow or resized terminals (<80 cols).
- **Permission Errors on Install**: EACCES during npm install due to improper directory creation.
- **Tool Schema Rigidity**: Local OpenAI-compatible servers reject object-style `tool_choice`, requiring string-only values.
- **State Management Fragmentation**: Changelog ack stored in settings.json risks user modification; needs isolation.

--- 

*Generated from github.com/badlogic/pi-mono activity as of 2026-05-09.*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

### **Qwen Code Community Digest – 2026-05-09**

---

#### **1. Today's Highlights**  
A new nightly release (v0.15.9-nightly.20260509) fixes CLI argument validation for the `/model` command. The stable v0.15.9 introduces telemetry opt-in and commit attribution features. Meanwhile, authentication and model configuration issues remain top concerns, with multiple reports of 401 errors and unexpected model overrides in both CLI and VS Code extensions.

---

#### **2. Releases**  

**v0.15.9**  
- Adds **telemetry opt-in** via sensitive span attributes for improved observability (#3893).  
- Introduces **commit attribution with per-file AI contribution tracking**, enhancing traceability in version control workflows.  
- Full changelog: [v0.15.9](https://github.com/QwenLM/qwen-code/compare/v0.15.9...)  

**v0.15.9-nightly.20260509**  
- Fixes a bug where `/model <id>` incorrectly opened the picker instead of switching models interactively (#3944).  
- Validates `/model` command arguments to prevent malformed inputs.  

---

#### **3. Hot Issues**  

| Issue | Summary | Impact |
|------|--------|--------|
| [#3203](https://github.com/QwenLM/qwen-code/issues/3203) | Free tier reduced from 1,000 → 100 daily requests; full phase-out planned by July 2026. | High—community expresses concern over access fairness. |
| [#3740](https://github.com/QwenLM/qwen-code/issues/3740) | Non-Coding Plan OpenAI-compatible models get overwritten on startup. | Medium—breaks user-configured workflows. |
| [#3877](https://github.com/QwenLM/qwen-code/issues/3877) | `.env` with `OPENCODE_GO_API_KEY` ignored; forces re-authentication. | High—direct auth failure despite correct setup. |
| [#3914](https://github.com/QwenLM/qwen-code/issues/3914) | "Connection error" despite valid API key and reachable endpoint. | Medium—suggests networking or SDK-level bugs. |
| [#3936](https://github.com/QwenLM/qwen-code/issues/3936) | Russian text garbled in UI (mojibake). | Low—localization issue, but affects non-Latin users. |
| [#3548](https://github.com/QwenLM/qwen-code/issues/3548) | Request: configurable `plansDirectory` like Gemini/Claude. | Medium—improves workspace flexibility. |
| [#3838](https://github.com/QwenLM/qwen-code/issues/3838) | Terminal UI enters infinite scroll loop during long outputs. | High—severe UX breakage. |
| [#3945](https://github.com/QwenLM/qwen-code/issues/3945) | Large files can’t be edited due to `read_file` truncation + “fully read” requirement. | Medium—blocks file operations on large codebases. |
| [#3745](https://github.com/QwenLM/qwen-code/issues/3745) | VS Code omits "(Discontinued)" label for deprecated Qwen OAuth models. | Medium—risks confusion and broken usage. |
| [#3213](https://github.com/QwenLM/qwen-code/issues/3213) | Terminal display corrupts after resize events. | Medium—persistent rendering flaw across versions. |

---

#### **4. Key PR Progress**  

| PR | Change | Status |
|----|--------|--------|
| [#3975](https://github.com/QwenLM/qwen-code/pull/3975) | Adds `/directory remove` CLI subcommand. | Open |
| [#3935](https://github.com/QwenLM/qwen-code/pull/3935) | `/commit` slash command: auto-stage + commit with co-author. | Open |
| [#3861](https://github.com/QwenLM/qwen-code/pull/3861) | Preserves comments/formatting in `settings.json` post-migration. | Open |
| [#3849](https://github.com/QwenLM/qwen-code/pull/3849) | Centralizes cross-auth model resolution in `ModelRegistry`. | Open |
| [#3868](https://github.com/QwenLM/qwen-code/pull/3868) | Uses debugLogger for skipped dir warnings + dedups paths. | Closed |
| [#3879](https://github.com/QwenLM/qwen-code/pull/3879) | Reactive context compression on overflow errors. | Open |
| [#2953](https://github.com/QwenLM/qwen-code/pull/2953) | Supports `QWEN_HOME` env var for custom config dir. | Open |
| [#3762](https://github.com/QwenLM/qwen-code/pull/3762) | VS Code: message editing & metadata UI. | Open |
| [#3775](https://github.com/QwenLM/qwen-code/pull/3775) | Routes side queries through chokepoint for consistency. | Open |
| [#3969](https://github.com/QwenLM/qwen-code/pull/3969) | Implements Ctrl+B promote-to-background keybinding. | Open |

---

#### **5. Feature Request Trends**  

- **Configurable Workspace & Session Management**: Users want control over `plansDirectory`, runtime output location, and session branching (e.g., #3548, #2119).
- **Enhanced CLI Interactivity**: Improved input editing (Ctrl+Backspace, text selection), better slash command discovery, and OSC 8 hyperlink wrapping (#3926, #3736, #3954).
- **Enterprise Integration**: Support for internal providers (Idealab), customizable config dirs via env vars, and CI/CD optimizations (#3953, #2953, #3958).
- **UI/UX Polish**: Terminal rendering stability, model selection persistence in VS Code, and clearer subagent approval prompts (#3745, #3960).

---

#### **6. Developer Pain Points**  

- **Authentication Fragility**: Multiple reports of 401 errors despite valid keys, environment variables being ignored, and inconsistent auth flows between CLI/VS Code.
- **Model Configuration Overrides**: Non-default OpenAI-compatible models are silently replaced at startup, breaking user intent.
- **Large File Operations Blocked**: Edit tool fails on files > provider’s read limit due to mandatory “full read” check.
- **Terminal Rendering Instability**: Infinite scroll loops and display corruption after resize or long outputs degrade productivity.
- **Localization Gaps**: UTF-8/multibyte character corruption (e.g., Russian) indicates inadequate terminal encoding handling.

> _For real-time updates, follow [@QwenLM](https://github.com/QwenLM) and join discussions on GitHub._

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/DenisZheng/agents-radar).*