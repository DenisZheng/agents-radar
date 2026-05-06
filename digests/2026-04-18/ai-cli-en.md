# AI CLI Tools Community Digest 2026-04-18

> Generated: 2026-04-18 00:23 UTC | Tools covered: 8

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

### Cross-Tool Comparison Report: AI Developer CLI Ecosystem (April 18, 2026)

---

#### **1. Ecosystem Overview**

The AI CLI developer tools landscape is in a period of rapid evolution marked by architectural refactoring, growing pains around agentic workflow reliability, and intense competition for developer mindshare. Major players are shifting from monolithic JavaScript runtimes to native binaries and Rust-based backends to improve performance and stability. Simultaneously, the ecosystem is grappling with the complexities of multi-provider support, sandboxed tool execution, and enterprise-grade observability—while community sentiment increasingly demands transparency around billing, configuration fragility, and unannounced breaking changes.

---

#### **2. Activity Comparison**

| Tool               | Issues Count | PRs Count | Release Status                     |
|--------------------|--------------|-----------|-------------------------------------|
| Claude Code        | 10           | 3         | v2.1.113 (stable, native binary)    |
| OpenAI Codex       | 10           | 10        | 4 alpha builds (Rust migration)     |
| Gemini CLI         | 10           | 10        | v0.38.2 (patch/stable)              |
| GitHub Copilot CLI | 10           | 1         | v1.0.32 (stable, auto-model mode)   |
| Kimi Code CLI      | 10           | 10        | v1.36.0 (stable, max_steps=500)     |
| OpenCode           | 10           | 10        | v1.4.10 (stable, Bedrock regression)|
| Pi                 | 10           | 10        | v0.67.68 (Bedrock bearer token)     |
| Qwen Code          | 5            | 5         | v0.15.0-preview / nightly builds    |

*Note: All counts reflect top-10 hot issues and key PRs per digest; actual totals may be higher.*

---

#### **3. Shared Feature Directions**

Several cross-cutting requirements appear across 6–8 tools:

- **Thinking Effort Granularity**: Claude Code, Pi, Kimi, and Qwen all implement multi-tier reasoning levels (`off/min/med/high/xhigh`), with demand for `max` tier alignment (Pi #3299).
- **MCP Tool Observability & Reliability**: Token accounting gaps (#Claude #50061), schema misreporting, session-scoped restarts (#Codex #18333), and content type limitations (#Kimi #1919) plague multiple tools.
- **Session Lifecycle Management**: Programmatic renaming (#Claude #44786), persistence across path moves (#Codex PR #39148), and custom IDs (#Pi #3271) are consistently requested.
- **Provider Parity & Cloud Expansion**: AWS Bedrock integration regressions (#Claude #49238), Nebius support (#Pi #3346), and OpenAI-compatible prompt caching (#Pi #3186) highlight fragmentation.
- **Sandbox & Permission Consistency**: ACL handling (#Codex #14585), GPU access (#Codex #17644), and network allowlist logic (#Claude #30112) differ significantly across platforms.
- **Accessibility & Internationalization**: RTL text rendering (#Gemini #25243), screen reader support (#OpenCode #25218), and SSH-aware terminal behavior (#Gemini #24202) are recurring pain points.

---

#### **4. Differentiation Analysis**

- **Claude Code** leads in agentic workflow maturity (plan sessions, MCP integration) but suffers from opaque billing and abrupt UX changes (`/buddy` removal). Targets power users needing fine-grained control.
- **OpenAI Codex** is aggressively migrating to Rust for performance, focusing on device-key auth and IDE parity. Its alpha-heavy release cycle signals high internal velocity but unstable public API.
- **Gemini CLI** emphasizes local model support (Gemma 4) and strategic investments in AST-aware navigation—positioning Google as an advocate for on-device intelligence.
- **GitHub Copilot CLI** prioritizes VS Code integration and organizational model visibility, lagging behind desktop app reliability but excelling in CI/CD contexts.
- **Kimi Code CLI** differentiates via aggressive reasoning chain extension (`max_steps=500`) and adaptive thinking for Opus 4.7+, targeting users who value long-horizon planning over cost efficiency.
- **OpenCode** focuses on collaborative workspaces and plugin ecosystems, with recent fixes aimed at TUI stability and remote reconnection—appealing to team-based development.
- **Pi** acts as a lightweight SDK rather than full CLI, emphasizing extensibility and provider abstraction. Its strength lies in developer-facing flexibility for custom agent frameworks.
- **Qwen Code** is experimental, pushing ACP hooks and dual-output modes early, appealing to developers building integrations rather than end-users seeking turnkey solutions.

---

#### **5. Community Momentum & Maturity**

- **Most Active Communities**: OpenAI Codex, Kimi Code CLI, and Pi show high PR velocity (10+ merged PRs) and rapid iteration cycles, indicating strong internal engineering focus.
- **Stability Leaders**: GitHub Copilot CLI and Gemini CLI maintain consistent stable releases with patch-level updates, reflecting mature user bases less tolerant of disruption.
- **High Engagement Signals**: 
  - Claude Code’s `#bringbackbuddy` issue (840 👍) reveals deep emotional attachment to past features.
  - Codex’s token burn reports (550 comments) and Copilot’s quota confusion indicate billing/transparency crises affecting trust.
  - OpenCode’s Cmd+V exit bug and Qwen’s 401 auth wall represent critical UX blockers requiring immediate attention.
- **Early Adopters vs Mainstream**: Tools like Pi and Qwen cater to SDK/experimental users; Claude Code and Copilot CLI serve broader professional audiences demanding reliability.

---

#### **6. Trend Signals**

- **Agentic Workflow Complexity is Rising**: Longer reasoning chains, subagent coordination, and tool orchestration are exposing systemic issues in streaming, error recovery, and state management across all major tools.
- **Billing Transparency is Becoming a Competitive Moat**: Unexpected token depletion (#Claude #38335), plan downgrades (#Kimi #1916), and quota mismatches (#Qwen #3267) threaten adoption in cost-sensitive environments.
- **Provider Fragmentation Demands Abstraction Layers**: Native support for Bedrock, Vertex, Ollama, MiniMax, and custom endpoints is creating "provider sprawl"—users want unified APIs.
- **Terminal UX Remains Fragile**: Scroll jank, input lag, permission prompts, and cross-platform inconsistencies suggest terminal-based interfaces still haven’t reached production-grade polish.
- **Security & Compliance Features Gain Traction**: Bearer token auth (#Pi), device-key signing (#Codex), and sandbox hardening reflect enterprise readiness demands.

*Recommendation for Developers*: Prioritize tools with strong MCP observability, clear token accounting, and flexible provider configuration if building agent frameworks. For individual productivity, evaluate stability vs. innovation tradeoffs—Claude Code offers advanced agent features but erratic updates; Copilot/Gemini provide reliability at the cost of cutting-edge capabilities.*

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

**Claude Code Skills Community Highlights Report**  
*Data as of 2026-04-18*

---

### 1. **Top Skills Ranking**

The most-discussed Skills (by community attention) currently have **no comments**, indicating a highly active but early-stage discussion phase. Top contenders include:

- **[document-typography](https://github.com/anthropics/skills/pull/514)**  
  *Functionality:* Prevents typographic errors in AI-generated docs—orphan word wrap, widow paragraphs, and numbering misalignment.  
  *Status:* Open | Focus on improving document aesthetics for professional output.

- **[skill-quality-analyzer & skill-security-analyzer](https://github.com/anthropics/skills/pull/83)**  
  *Functionality:* Meta-skills that evaluate other Skills across structure, documentation, security, performance, and maintainability.  
  *Status:* Open | Aims to elevate Skill quality standards through automated auditing.

- **[frontend-design](https://github.com/anthropics/skills/pull/210)**  
  *Functionality:* Guides Claude in creating accessible, responsive UIs with modern frameworks (React, Vue, etc.).  
  *Status:* Open | Recently updated for clarity and actionability.

- **[ODT skill](https://github.com/anthropics/skills/pull/486)**  
  *Functionality:* Full support for OpenDocument Format (.odt/.ods): creation, templating, and conversion to HTML.  
  *Status:* Open | Targets open-source document interoperability.

- **[SAP-RPT-1-OSS predictor skill](https://github.com/anthropics/skills/pull/181)**  
  *Functionality:* Enables predictive analytics on SAP business data using SAP’s open-source tabular foundation model.  
  *Status:* Open | Enterprise AI integration focus.

---

### 2. **Community Demand Trends**

From open Issues, recurring themes suggest strong community appetite for:

- **Persistent Memory Systems**: Multiple proposals (e.g., #154, #521) highlight demand for cross-session context retention.
- **Enterprise Integration**: Requests for Bedrock compatibility (#29), org-wide skill sharing (#228), and SSO-friendly tooling (#532).
- **Security & Governance**: Concerns about trust boundaries in community skills (#492) and need for agent governance patterns (#412, closed but influential).
- **Automation & Payments**: Interest in native OS automation (#806) and decentralized payment systems like x402 (#374).
- **Testing & Quality Assurance**: Growing calls for standardized testing workflows and pattern libraries (#723).

---

### 3. **High-Potential Pending Skills**

These PRs show sustained activity and technical maturity:

- **[record-knowledge](https://github.com/anthropics/skills/pull/521)** – Implements persistent knowledge storage via tagged Markdown entries.
- **[shodh-memory](https://github.com/anthropics/skills/pull/154)** – Advanced memory system with semantic indexing and retrieval.
- **[testing-patterns](https://github.com/anthropics/skills/pull/723)** – Comprehensive guide covering unit, integration, and React component testing best practices.
- **[x402 BSV auth + micropayment](https://github.com/anthropics/skills/pull/374)** – Decentralized payment layer for AI service access via natural language commands.

All are **open**, well-documented, and address clear user pain points around context loss, verification, and monetization.

---

### 4. **Skills Ecosystem Insight**

The community’s most concentrated demand centers on **enhancing Claude’s autonomy through persistent memory, governance, and enterprise-grade tooling**—moving beyond single-session tasks toward reliable, auditable, and scalable agentic workflows.

---

**Claude Code Community Digest – April 18, 2026**

---

### **Today’s Highlights**

A major architectural shift in v2.1.113 moves the CLI from bundled JavaScript to a native binary per platform, improving performance and reliability. Meanwhile, community sentiment is sharply divided over the sudden removal of `/buddy`—a highly requested feature with strong emotional resonance—while session token accounting and Bedrock integration regressions continue to frustrate users.

---

### **Releases**

**v2.1.113**  
- Switched CLI runtime from bundled JS to native binaries via optional platform-specific dependencies for improved stability and startup speed.  
- Introduced `sandbox.network.deniedDomains` setting to override broader allowlists by explicitly blocking specific domains.  

[Release Details](https://github.com/anthropics/claude-code/releases/tag/v2.1.113)

---

### **Hot Issues**

1. **[#38335]** *Max plan sessions depleting abnormally fast since March 23*  
   Users report rapid exhaustion of session tokens despite unchanged usage patterns; 425 👍, 643 comments reflect widespread concern about billing transparency and service reliability.  
   → [Link](https://github.com/anthropics/claude-code/issues/38335)

2. **[#45596]** *“Bring Back Buddy” — Emotional outcry over `/buddy` skill disappearance*  
   The assistant vanished without announcement after v2.1.97, causing terminal workflow disruption. With 840 👍 and intense discussion, this isn’t just a bug—it’s a UX regression affecting developer habits.  
   → [Link](https://github.com/anthropics/claude-code/issues/45596)

3. **[#49238]** *Opus 4.7 broken on AWS Bedrock (Linux)*  
   Critical API regression blocks Opus 4.7 access via Bedrock; 97 👍 indicates impact on enterprise users relying on hybrid cloud setups.  
   → [Link](https://github.com/anthropics/claude-code/issues/49238)

4. **[#30112]** *Cowork network egress allowlist failing—custom domains blocked with 403*  
   Despite correct configuration, internal tooling fails due to flawed allowlist logic; 38 👍 shows growing pains in multi-tenant/cowork environments.  
   → [Link](https://github.com/anthropics/claude-code/issues/30112)

5. **[#45335]** *Max 5x gift subscription auto-canceled after ~1 week*  
   Unexplained plan downgrade with no user action; affects trust in promotional offers and account management.  
   → [Link](https://github.com/anthropics/claude-code/issues/45335)

6. **[#5017]** *Multi-line paste truncation on Windows TUI*  
   Breaks copy-paste workflows in prompt input; persistent issue since 2025, now resurfacing with 20 👍.  
   → [Link](https://github.com/anthropics/claude-code/issues/5017)

7. **[#48407]** *Cowork tab missing in Desktop App v1.2581.0 (Windows 11)*  
   Regression breaks core collaboration feature; low engagement (2 👍) suggests underreported severity among desktop users.  
   → [Link](https://github.com/anthropics/claude-code/issues/48407)

8. **[#50020]** *Custom keybindings ignored in Chat context since v2.1.105–107*  
   Silent regression disrupts power-user workflows; first reported today, zero 👍 yet—early signal.  
   → [Link](https://github.com/anthropics/claude-code/issues/50020)

9. **[#49138]** *Bedrock fallback probing adds 4.3s to startup on Linux*  
   Performance degradation in auto-fallback logic; affects cold-start latency for Bedrock-dependent users.  
   → [Link](https://github.com/anthropics/claude-code/issues/49138)

10. **[#50061]** */context under-reports MCP tool schema token usage (~100K hidden)*  
    Misleading cost reporting masks real MCP overhead; 3 👍 but technically critical for observability.  
    → [Link](https://github.com/anthropics/claude-code/issues/50061)

---

### **Key PR Progress**

1. **[#39148]** *feat: add preserve-session plugin for path-independent history*  
   Solves session persistence when projects move/rename via UUID-based tracking.  
   → [Link](https://github.com/anthropics/claude-code/pull/39148)

2. **[#49825]** *[BUGFIX] Devcontainer firewall init script handles duplicate IPs*  
   Prevents initialization failures due to overlapping network rules in containerized dev environments.  
   → [Link](https://github.com/anthropics/claude-code/pull/49825)

3. **[#49767]** *docs: Warp marketplace plugin setup & verification*  
   Adds end-to-end guidance for Warp integration, including jq dependency and live notification testing.  
   → [Link](https://github.com/anthropics/claude-code/pull/49767)

*(Remaining PRs either closed or lack substantive detail in summary.)*

---

### **Feature Request Trends**

- **Time-aware reasoning**: Multiple requests (e.g., #49084, #32913) ask for structured date/time injection into prompts so Claude can reason about elapsed time, session duration, or temporal context.
- **Session automation**: Programmatic renaming (#44786), lazy context loading (#44536), and built-in update notifications (#50153) highlight demand for smarter session lifecycle management.
- **MCP observability**: Users want transparent token accounting for MCP tools (#50061) and better schema consumption visibility.
- **Cross-platform polish**: Russian voice input (#50214), improved Windows TUI (#5017), and Chrome extension connectivity (#50215) reflect localization and platform parity needs.

---

### **Developer Pain Points**

- **Unannounced breaking changes**: Sudden removal of `/buddy` and silent keybinding regressions erode trust in upgrade stability.
- **Billing opacity**: Rapid token depletion (#38335) and unexpected plan downgrades (#45335) create financial uncertainty.
- **Platform-specific bugs**: Persistent Windows/TUI issues, macOS desktop regressions, and Linux Bedrock problems fragment user experience.
- **Observability gaps**: Poor token accounting (especially MCP schemas) and lack of structured time context hinder debugging and cost control.
- **Configuration fragility**: Allowlist misbehavior (#30112), config rewrite anomalies (#48560), and permission bypass failures (#43406) suggest systemic config handling flaws.

--- 

*Generated from GitHub activity for anthropics/claude-code as of 2026-04-18.*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

**OpenAI Codex Community Digest – April 18, 2026**

---

### **Today's Highlights**  
OpenAI released four new alpha versions of the Rust-based Codex CLI (v0.122.0-alpha.6 through .9), signaling ongoing internal refactoring ahead of a stable release. Concurrently, multiple high-impact bugs surfaced—particularly around sandbox permissions, token efficiency regressions, and desktop app UI glitches—driving urgent community engagement. On the development front, significant progress was made on device-key authentication infrastructure for macOS and MCP tool integration.

---

### **Releases**  
- **rust-v0.122.0-alpha.9**: Internal alpha build advancing pre-release testing pipeline  
- **rust-v0.122.0-alpha.8**: Continuation of Rust backend iteration  
- **rust-v0.122.0-alpha.7**: Stability-focused internal updates  
- **rust-v0.122.0-alpha.6**: Early-stage refactoring milestone  

*Note: No user-facing releases; all are internal alpha builds.*

---

### **Hot Issues**  

1. **[#14593](https://github.com/openai/codex/issues/14593)** – Users report rapid token burn during extended sessions, with 550 comments and 225 upvotes. High-priority concern affecting Business-tier users on VS Code.  
2. **[#10450](https://github.com/openai/codex/issues/10450)** – Feature request for remote development support in the Codex Desktop App (565 👍). Strong demand for parity with VS Code Remote SSH capabilities.  
3. **[#14936](https://github.com/openai/codex/issues/14936)** – Sandbox regression on Linux causes excessive approval prompts due to bwrap misconfiguration (48 comments). Impacts developer workflow continuity.  
4. **[#18258](https://github.com/openai/codex/issues/18258)** – macOS Computer Use plugin shows "unavailable" despite correct config (24 👍). Critical blocker for automation use cases.  
5. **[#18345](https://github.com/openai/codex/issues/18345)** – Token usage spiked ~60% in v0.121.0 vs v0.116.0 for identical tasks (5 comments). Regression detected post-upgrade.  
6. **[#18333](https://github.com/openai/codex/issues/18333)** – MCP stacks restart per session causing memory leaks and slowdowns (7 comments). Affects persistent agent workflows.  
7. **[#17644](https://github.com/openai/codex/issues/17644)** – Full-access sandbox blocks Metal/GPU access on Apple Silicon, breaking MLX workloads (8 comments). Hardware-specific limitation reported.  
8. **[#18264](https://github.com/openai/codex/issues/18264)** – New desktop app sessions suffer ~8-second message delays after update (11 comments). Performance regression noted on Darwin ARM64.  
9. **[#14585](https://github.com/openai/codex/issues/14585)** – Windows sandbox incorrectly sets ACLs on new folders, breaking `apply_patch` (7 comments). File system permission issue across Windows environments.  
10. **[#17880](https://github.com/openai/codex/issues/17880)** – “Recursive Context Poisoning” triggers false rate limits and history loss via Cloudflare WAF (11 comments). Security/connectivity edge case with severe UX impact.

---

### **Key PR Progress**  

1. **[#18254](https://github.com/openai/codex/pull/18254)** – Introduces `codex-uds` crate for async Unix domain sockets, enabling efficient inter-process communication.  
2. **[#18428](https://github.com/openai/codex/pull/18428)** – Defines device-key v2 protocol for secure local key enrollment and signing.  
3. **[#18429](https://github.com/openai/codex/pull/18429)** – Implements `codex-device-key` crate for cross-platform key storage abstraction.  
4. **[#18431](https://github.com/openai/codex/pull/18431)** – Adds macOS Secure Enclave-backed key provider leveraging hardware protection classes.  
5. **[#18289](https://github.com/openai/codex/pull/18289)** – Wires `patch_updated` events through app_server to improve real-time edit progress visibility.  
6. **[#18395](https://github.com/openai/codex/pull/18395)** – Adds inline toggle controls for plugin enablement in `/plugins` browse menu.  
7. **[#18298](https://github.com/openai/codex/pull/18298)** – Implements skill metadata trimming and budget-aware context allocation to prevent overflow.  
8. **[#18432](https://github.com/openai/codex/pull/18432)** – Directly exposes builtin `codex_apps` tools marked as `direct_expose`.  
9. **[#17245](https://github.com/openai/codex/pull/17245)** – Adds configurable TUI keymaps and Vim mode support with guided picker UI.  
10. **[#18387](https://github.com/openai/codex/pull/18387)** – Deflakes flaky filesystem watch tests by removing OS-dependent notify probes.

---

### **Feature Request Trends**  

- **Remote Development Support**: Multiple requests (#10450, #13762) highlight need for seamless WSL/cloud workspace integration.  
- **Manual `/compact` Command**: Desired in desktop app to match CLI functionality (#11325).  
- **Approval Notifications**: Users want desktop alerts when permissions are requested (#17716).  
- **Plugin Permission Controls**: UI dropdown stuck in read-only state blocks customization (#15300).  
- **Cross-Platform Sandbox Consistency**: Windows/Linux/macOS exhibit divergent behavior in file/ACL handling and network access.

---

### **Developer Pain Points**  

- **Sandbox Permission Overhead**: Excessive approval prompts (#14936), broken ACLs (#14585), and GPU/network restrictions (#17644) hinder productivity.  
- **Token Efficiency Regressions**: Sudden increases in token consumption (#18345) without clear cause or mitigation.  
- **Desktop App Instability**: Freezing shells (#16374), blurred overlays (#18341), and delayed messaging (#18264) degrade reliability.  
- **MCP Tool Reliability**: Frequent full-stack restarts per session (#18333) and interception concerns (#16940) undermine trust in tool execution.  
- **IDE Integration Gaps**: Broken file links in chat (#17649, #18217) and inconsistent behavior across platforms frustrate editors.

--- 

*For full details, visit [openai/codex](https://github.com/openai/codex).*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

**Gemini CLI Community Digest – 2026-04-18**

---

### **Today's Highlights**
The Gemini CLI team released **v0.38.2**, a patch addressing stability concerns in prior builds. A major focus this week is on improving agent reliability—particularly around subagent timeouts, permission persistence, and shell command handling—as reflected in several high-priority open issues. Additionally, support for **Gemma 4 models** has been merged via PR #25604, expanding local inference capabilities.

---

### **Releases**
- **v0.38.2**: Patch release resolving versioning inconsistencies from the previous pre-release cycle. No functional changes beyond stabilization ([Full Changelog](https://github.com/google-gemini/gemini-cli/compare/v0.38.1...v0.38)).

---

### **Hot Issues**

| Issue | Summary | Impact |
|------|--------|--------|
| [#25323](https://github.com/google-gemini/gemini-cli/issues/25323) | RipGrep download failures cause 2+ minute delays on startup when GitHub access is restricted. Users request fail-fast behavior or bundled binaries. | Blocks CLI startup in air-gapped environments; 7 comments. |
| [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) | Epic evaluating AST-aware codebase navigation to reduce token waste and improve precision in large repos. | Strategic direction for agent intelligence; 5 comments, 👍1. |
| [#24916](https://github.com/google-gemini/gemini-cli/issues/24916) | Repeated permission prompts for same file despite “allow for all future sessions” option. | UX friction during onboarding; 3 comments. |
| [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) | Shell commands complete but CLI hangs waiting for input—critical for automation workflows. | Breaks non-interactive use cases; 2 comments, 👍2. |
| [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) | Subagent incorrectly reports success after hitting `MAX_TURNS`, masking interruption. | Misleading feedback undermines debugging; 2 comments, 👍2. |
| [#22267](https://github.com/google-gemini/gemini-cli/issues/22267) | Browser Agent ignores `settings.json` overrides like `maxTurns`. | Configuration drift reduces predictability; 2 comments. |
| [#25216](https://github.com/google-gemini/gemini-cli/issues/25216) | Path resolution fails on Windows with drives like `A:\`, causing crashes. | OS-specific regression affecting enterprise users. |
| [#24202](https://github.com/google-gemini/gemini-cli/issues/24202) | Text scrambling in terminal after SSH sessions—unusable state. | Hinders remote development workflows. |
| [#23571](https://github.com/google-gemini/gemini-cli/issues/23571) | Model generates scattered temporary scripts across directories. | Pollutes workspace and complicates cleanup. |
| [#25218](https://github.com/google-gemini/gemini-cli/issues/25218) | Streaming tables re-render incrementally, breaking screen reader layouts. | Accessibility regression requiring urgent fix. |

---

### **Key PR Progress**

| PR | Summary |
|----|--------|
| [#25604](https://github.com/google-gemini/gemini-cli/pull/25604) | Adds native support for Gemma 4 thinking models (`gemma-4-31b-it`, `gemma-4-26b-a4b-it`). |
| [#25601](https://github.com/google-gemini/gemini-cli/pull/25601) | Splits `memoryManager` flag into granular `autoMemory` toggle for better UX control. |
| [#25498](https://github.com/google-gemini/gemini-cli/pull/25498) | Introduces `gemini gemma` CLI command for streamlined local model management and logging. |
| [#25461](https://github.com/google-gemini/gemini-cli/pull/25461) | Throttles shell output updates to prevent UI jank during verbose command execution. |
| [#25362](https://github.com/google-gemini/gemini-cli/pull/25362) | Enables Vertex AI region override via `vertexLocation` config for preview model access. |
| [#25243](https://github.com/google-gemini/gemini-cli/pull/25243) | Implements universal RTL/BiDi text rendering with ANSI escape code preservation. |
| [#21873](https://github.com/google-gemini/gemini-cli/pull/21873) | Fixes MCP tool name collisions in subagent delegation by using unqualified names internally. |
| [#25066](https://github.com/google-gemini/gemini-cli/pull/25066) | Silently skips directories with EPERM errors (e.g., macOS `.Trash`) during structure scanning. |
| [#25426](https://github.com/google-gemini/gemini-cli/pull/25426) | Revives CI bundling to enable 16-core parallel test execution, cutting runtime significantly. |
| [#20683](https://github.com/google-gemini/gemini-cli/pull/20683) | Displays actual GCP project used by Code Assist OAuth in `/about` command. |

---

### **Feature Request Trends**
- **AST-Aware Code Navigation**: Multiple investigations (#22745, #22746) suggest strong interest in leveraging abstract syntax trees to reduce token usage and improve context accuracy.
- **Memory System Refinement**: Requests to distinguish global vs. project memory scopes (#22819), prompt tuning for proactive memory writes (#22809), and behavioral evals for memory safety (#23897).
- **Local Model Ecosystem**: Growing demand for easier Gemma model setup (`gemini gemma` command) and robust evaluation infrastructure (#24353).
- **Accessibility & Internationalization**: Universal RTL/BiDi support (#25243), screen reader compatibility fixes (#25218), and SSH-aware rendering logic (#24546).

---

### **Developer Pain Points**
- **Startup Delays**: RipGrep network issues cause unnecessary waits (Issue #25323).
- **Permission Inconsistency**: “Allow for all future sessions” not respected across restarts (Issue #24916).
- **Shell Command Hangs**: Completed commands still block input waiting (Issue #25166).
- **Path Handling Fragility**: Failures on alternate drive letters (Windows) and SSH sessions (Issue #25216, #24202).
- **Tool Limit Overflows**: 400 errors triggered by >128 available tools (Issue #24246).
- **Configuration Drift**: Settings like `maxTurns` ignored by certain agents (Issue #22267).

--- 

*Generated by Gemini CLI Community Digest Bot • Data sourced from [google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli)*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

**GitHub Copilot CLI Community Digest – 2026-04-18**

---

### 1. **Today's Highlights**  
The latest release (v1.0.32) introduces an `auto` model selection feature and improved usage warnings, while addressing feedback handling in non-writable directories. Concurrently, several high-priority issues—including Bash hang regressions, rate limit anomalies, and MCP server visibility problems—continue to draw significant community attention.

---

### 2. **Releases**  
**v1.0.32** (2026-04-17)  
- Added support for short session ID prefixes (7+ hex chars) with `--resume` and `/resume`.  
- Introduced `auto` model mode to let Copilot dynamically select the best available model per session.  
- Added `--print-debug-info` flag to surface version, terminal capabilities, and environment variables.  
- Displayed proactive warnings at 75% and 90% of weekly usage limits.  
- Fixed: `/feedback` now saves bundles to TEMP when the working directory is not writable.  
> [Release Notes](https://github.com/github/copilot-cli/releases/tag/v1.0.32)

---

### 3. **Hot Issues**  

| Issue | Summary | Impact & Reaction |
|-------|--------|------------------|
| [#575](https://github.com/github/copilot-cli/issues/575) <br> *(CLOSED)* | All shell commands hang indefinitely on macOS; affects basic operations like `echo`. | Resolved in recent patch. Users reported severe workflow disruption; 32 comments indicate widespread impact. |
| [#2591](https://github.com/github/copilot-cli/issues/2591) | Single session triggers excessive premium request consumption during tool invocations. | Critical billing concern: one prompt may consume 80–100 requests. 👍12, active discussion. |
| [#1703](https://github.com/github/copilot-cli/issues/1703) | Missing org-enabled models (e.g., Gemini 3.1 Pro) vs. VS Code Copilot. | Inconsistent UX across tools despite identical org settings. 👍33 shows strong demand for parity. |
| [#2725](https://github.com/github/copilot-cli/issues/2725) | Model picker hides "Extra High" effort level for GPT-5.4 despite functional fallback. | UI inconsistency creates confusion; users must use undocumented `/model xhigh`. 👍15. |
| [#2336](https://github.com/github/copilot-cli/issues/2336) | Erroneous rate-limit messages appear even under normal usage. | Undermines trust in quota reporting; frequent false positives reported. 👍4. |
| [#2583](https://github.com/github/copilot-cli/issues/2583) | `copilot update` command broken post-1.0.17 on Windows. | Blocks self-updates; critical for maintaining security patches. No 👍 yet. |
| [#1838](https://github.com/github/copilot-cli/issues/1838) | CLI hangs in Nix/direnv environments due to I/O deadlock. | Major blocker for Nix-based dev workflows; 👍9 indicates developer frustration. |
| [#2692](https://github.com/github/copilot-cli/issues/2692) | Web Search via github-mcp-server fails with HTTP errors. | Breaks core MCP integration; impacts research-heavy tasks. 👍2. |
| [#2797](https://github.com/github/copilot-cli/issues/2797) | Usage % becomes random/negative after hitting premium limits. | Quota display corruption erodes user confidence. Posted same day. |
| [#2742](https://github.com/github/copilot-cli/issues/2742) | Global 429 error on paid Pro+ accounts despite valid tokens. | Critical service degradation claim; suggests backend misconfiguration. |

---

### 4. **Key PR Progress**  

| PR | Description |
|----|-------------|
| [#2800](https://github.com/github/copilot-cli/pull/2800) | Adds initial devcontainer configuration—improves onboarding for contributors. Still open with no reviews. |

*(Note: Only one PR updated in last 24h.)*

---

### 5. **Feature Request Trends**  
- **MCP & ACP Integration**: Multiple requests (e.g., [#1255], [#1040]) highlight incomplete support for Agentic Client Protocol (ACP) and dynamic MCP server loading during sessions.  
- **Enhanced Text Editing**: Requests for better cursor control, word deletion (Ctrl+Backspace), and copy/paste support (e.g., [#1160], [#2159]).  
- **Review Mode**: Proposal for a dedicated “review mode” to streamline code change validation (Issue [#1529]).  
- **XDG Compliance Fixes**: Persistent complaints about incorrect config paths violating XDG standards (e.g., [#1750], [#1347], [#1954]).  

---

### 6. **Developer Pain Points**  
- **Bash/Shell Hang Regressions**: Recurring instability in command execution, especially in constrained environments (Nix, SSH).  
- **Quota & Billing Confusion**: Inaccurate usage reporting, phantom rate limits, and unexpected premium request inflation.  
- **Model Visibility Gaps**: CLI lags behind VS Code Copilot in exposing organization-approved models.  
- **Terminal Rendering Performance**: Lagging UI updates and input freezing during long conversations (Issue [#2625]).  
- **MCP Server Reliability**: Tools disappear or fail to initialize, breaking agentic workflows.  

--- 

*Prepared by AI Technical Analyst – Focus: Developer Tool Ecosystem Intelligence*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

**Kimi Code CLI Community Digest – 2026-04-18**

---

### **Today's Highlights**
Version **1.36.0** of Kimi CLI has been released, introducing a significant increase in the default `max_steps_per_turn` from 100 to 500—addressing concerns around overly constrained agentic workflows and enabling longer reasoning chains without manual intervention. Concurrently, several UI and API stability fixes were merged to improve user experience in both terminal and web interfaces.

---

### **Releases**
**v1.36.0**  
- Increased default `max_steps_per_turn` from 100 to 500 to support extended agentic turns (PR #1908).  
- Fixed moon spinner fallback during turn gaps for better UX (PR #1909).  

> See full changelog: [MoonshotAI/kimi-cli/releases/tag/v1.36.0](https://github.com/MoonshotAI/kimi-cli/releases/tag/v1.36.0)

---

### **Hot Issues**

1. **[OPEN] #1903**: Users report consistent `Error code: 400` when using `kimi-for-coding`, suggesting an API-level regression possibly tied to recent model updates like K2.6.  
   *Impact*: Blocks core coding functionality; 5 comments, no upvotes yet.  
   🔗 https://github.com/MoonshotAI/kimi-cli/issues/1903

2. **[OPEN] #1874**: User severely impacted by K2.6-code-preview’s excessive thinking (>50 steps, 60k+ tokens), disrupting workflow due to unproductive reasoning loops.  
   *Impact*: Highlights poor cost-control in long-reasoning modes; 👍1, 2 comments.  
   🔗 https://github.com/MoonshotAI/kimi-cli/issues/1874

3. **[OPEN] #1924**: API incorrectly rejects all temperature values except 0.6 across models, indicating a backend validation bug.  
   *Impact*: Breaks fine-grained control over output randomness; 1 comment.  
   🔗 https://github.com/MoonshotAI/kimi-cli/issues/1924

4. **[OPEN] #1888**: K2.6 causes infinite loops in Claude Code integration, likely due to malformed response handling.  
   *Impact*: Integration breakage with popular AI dev tools.  
   🔗 https://github.com/MoonshotAI/kimi-cli/issues/1888

5. **[OPEN] #1926**: Post-update “rumination” behavior—model repeats identical content endlessly.  
   *Impact*: Severe usability degradation after update; reported on version 1.26.  
   🔗 https://github.com/MoonshotAI/kimi-cli/issues/1926

6. **[OPEN] #1925**: Strong demand to revert to K2.5 system prompt, citing loss of personality and increased hallucinations in K2.6.  
   *Impact*: Model quality perception shift; emotional user feedback.  
   🔗 https://github.com/MoonshotAI/kimi-cli/issues/1925

7. **[OPEN] #1923**: Criticizes lack of incremental streaming—users can’t inspect intermediate reasoning.  
   *Impact*: Hinders debugging and trust in agent outputs.  
   🔗 https://github.com/MoonshotAI/kimi-cli/issues/1923

8. **[OPEN] #1919**: MCP servers returning non-text content (e.g., JSON) fail to surface beyond `content.text`.  
   *Impact*: Limits tool interoperability and structured data handling.  
   🔗 https://github.com/MoonshotAI/kimi-cli/issues/1919

9. **[OPEN] #1916**: WSL2 on Windows 11 login flow hangs at subscription page—likely UI or auth routing issue.  
   *Impact*: Prevents onboarding for Linux-in-Windows users.  
   🔗 https://github.com/MoonshotAI/kimi-cli/issues/1916

10. **[OPEN] #1914**: Installation blocked in regions where GitHub is inaccessible due to uv installer dependency.  
    *Impact*: Global accessibility barrier; affects China, Russia, etc.  
    🔗 https://github.com/MoonshotAI/kimi-cli/issues/1914

---

### **Key PR Progress**

1. **[CLOSED] #1922**: Bumped CLI to v1.36.0 with Kosong v0.50.0, including Opus 4.7 adaptive thinking fixes.  
2. **[CLOSED] #1918**: Added proper adaptive thinking support for Anthropic Opus 4.7+, extending effort levels (`xhigh`, `max`).  
3. **[CLOSED] #1921**: Fixed markdown spacing rendering in web UI for cleaner display.  
4. **[CLOSED] #1920**: Restored copy/download/preview buttons on code blocks after Radix Slot event handler override.  
5. **[CLOSED] #1912**: Fixed PyInstaller skill path resolution in frozen builds via Makefile env var.  
6. **[CLOSED] #1917**: Reverted accidental direct push of Anthropic thinking effort refactor to preserve review process.  
7. **[CLOSED] #1692**: Gracefully handle `PermissionError` during directory listing (e.g., macOS Trash).  
8. **[CLOSED] #1712**: Enabled `--agent-file` flag for `kimi web` to customize session agents via YAML.  
9. **[CLOSED] #1701**: Added visual status dots in web sidebar for active/busy sessions.  
10. **[OPEN] #1911**: Fix `_use_adaptive_thinking()` to recognize Opus 4.7+ instead of only 4.6.  

---

### **Feature Request Trends**

- **Custom project-level system prompts** (#1856): Users want per-project `system_prompt.md` overrides.
- **VS Code font size isolation** (#1680): Independent scaling for Kimi panel vs editor.
- **Plan mode UX improvement** (#1672): Replace file-based plans with inline interactive planning like Claude Code.
- **Model version rollback / selection** (#1925): Explicit opt-out or downgrade path for K2.6.
- **Streaming reasoning output** (#1923): Real-time visibility into internal thought process.
- **MCP content enrichment** (#1919): Support richer message structures beyond plain text.

---

### **Developer Pain Points**

- **Uncontrolled long-thinking loops**: Especially post-K2.6 update, agents consume excessive tokens without progress.
- **API instability**: 400 errors and temperature validation bugs suggest backend regressions.
- **Installation barriers**: Reliance on GitHub for uv bootstrap creates geofenced access issues.
- **Poor observability**: Lack of streaming or step-by-step logs makes debugging agent failures hard.
- **Platform-specific quirks**: Permission errors in macOS/Linux, WSL2 login hangs, and VS Code integration gaps.

--- 

*Generated by Kimi Code CLI Community Digest Bot • Data as of 2026-04-18*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

**OpenCode Community Digest – April 18, 2026**

---

### 1. Today's Highlights  
OpenCode released **v1.4.10**, restoring critical workspace history sync and fixing a crash in experimental mode. A major regression in provider loading (Bedrock) from v1.4.7/1.4.8 was reported and is under active investigation. The community also sees growing demand for better TUI responsiveness, clipboard reliability, and clearer context tracking.

---

### 2. Releases  

#### **v1.4.10**  
- Restored workspace session history on reconnect so existing sessions catch up before live sync resumes  
- Passed OTEL exporter settings into managed workspaces for full telemetry coverage  
- Normalized provider metadata defaults to prevent model loading failures with incomplete catalog data  
- Fixed Windows `Ctrl+Z` terminal suspend behavior  

#### **v1.4.9**  
- Added **LLM Gateway as a first-class provider**, including config support and usage reporting  
- Limited GitHub Copilot Opus 4.7 models to `medium` reasoning effort to avoid unsupported variants  
- Improved remote workspace reconnection with exponential backoff and clearer error messaging  

#### **v1.4.8**  
- Fixed crash when experimental mode is enabled  
- Enabled plugin tools to return metadata in execute results  
- Showed real filenames instead of `/dev/null` in revert diffs  
- Enhanced handling when a workspace no longer exists  
- Fixed Windows `Ctrl+Z` terminal suspend issue  

> *All releases: [anomalyco/opencode/releases](https://github.com/anomalyco/opencode)*

---

### 3. Hot Issues  

| # | Summary | Why It Matters | Community Reaction |
|---|--------|----------------|--------------------|
| [#23110](https://github.com/anomalyco/opencode/issues/23110) | **Regression**: No providers load from project config (Bedrock) in v1.4.7/1.4.8 | Breaks core functionality for AWS Bedrock users; downgrade required | 👍 4, 💬 10 |
| [#16100](https://github.com/anomalyco/opencode/issues/16100) | Numpad keys ignored in VS Code 1.110 integrated terminal | Impairs usability inside IDEs | 👍 10, 💬 14 |
| [#4821](https://github.com/anomalyco/opencode/issues/4821) | Request: Ability to **unqueue** messages | Prevents overcorrection during agent runs | 👍 34, 💬 12 *(most liked)* |
| [#23200](https://github.com/anomalyco/opencode/issues/23200) | Cmd+V triggers app exit instead of paste | Critical UX bug on macOS | 💬 7 |
| [#22862](https://github.com/anomalyco/opencode/issues/22862) | Glob tool fails with WebAssembly parsing error in WSL2 | Blocks file operations in Linux/WSL | 👍 2, 💬 7 |
| [#22630](https://github.com/anomalyco/opencode/issues/22630) | OpenCode Desktop shows blank window on macOS 26.4 (Tahoe) | App unusable after update | 👍 1, 💬 7 |
| [#20631](https://github.com/anomalyco/opencode/issues/20631) | Need finer-grained **context panel breakdown** by source | Hard to trace where context comes from | 👍 1, 💬 6 |
| [#23098](https://github.com/anomalyco/opencode/issues/23098) | Stuck on splashscreen after updating to v1.4.8 | Update bricked many users | 💬 6 |
| [#23204](https://github.com/anomalyco/opencode/issues/23204) | Cmd+Return should insert newline, not be blocked | Inconsistent keyboard behavior | 💬 5 |
| [#20118](https://github.com/anomalyco/opencode/issues/20118) | SQLite journal_mode=WAL failure on Nix systems | Causes startup crashes on Linux/macOS | 👍 3, 💬 5 |

---

### 4. Key PR Progress  

| # | Title | Impact |
|---|------|--------|
| [#23202](https://github.com/anomalyco/opencode/pull/23202) | Fix Cmd+V paste vs exit bug | Addresses high-priority macOS UX issue |
| [#22461](https://github.com/anomalyco/opencode/pull/22461) | Prevent stale `project.sync()` overwrites | Stabilizes TUI state during async updates |
| [#22676](https://github.com/anomalyco/opencode/pull/22676) | Use proper globbing for file tools | Fixes permission matching logic |
| [#12856](https://github.com/anomalyco/opencode/pull/12856) | Fix snapshot pruning bug | Improves storage cleanup accuracy |
| [#23191](https://github.com/anomalyco/opencode/pull/23191) | Fail fast on missing session | Prevents silent freezes in v1.4.9 |
| [#22927](https://github.com/anomalyco/opencode/pull/22927) | Add NVIDIA to provider list | Expands cloud model access |
| [#19545](https://github.com/anomalyco/opencode/pull/19545) | Remote control + `opencode serve` | Enables distributed collaboration |
| [#12633](https://github.com/anomalyco/opencode/pull/12633) | Auto-accept permissions toggle | Reduces interruptions in build mode |
| [#20467](https://github.com/anomalyco/opencode/pull/20467) | Fix blank assistant text regression | Resolves AI SDK v6 migration flaw |
| [#5134](https://github.com/anomalyco/opencode/pull/5134) | Support JSONC in theme files | Improves configuration flexibility |

---

### 5. Feature Request Trends  

- **Context Transparency**: Users want granular visibility into how context is assembled (source files, tokens, roles). (#20631)
- **Clipboard Reliability**: macOS-friendly fallbacks beyond `xclip`, especially for GUI apps. (#12800)
- **Session Control**: Ability to cancel or unqueue queued messages mid-execution. (#4821)
- **Theme Customization**: Support for user-defined themes via `$OPENCODE_CONFIG_DIR/themes`. (#23157)
- **Feedback Signals**: Audio cues when tasks complete (e.g., typing sounds). (#23184)
- **Keyboard Consistency**: Proper handling of meta-key combos like Cmd+Return and Cmd+V across platforms. (#23200, #23204)

---

### 6. Developer Pain Points  

- **Provider Loading Regressions**: v1.4.7+ broke Bedrock and generic OpenAI-compatible providers—no clear rollback path.  
- **WSL2/WebAssembly Conflicts**: Glob tool fails due to SIMD-enabled WASM modules not being supported in WSL environments.  
- **Terminal Integration Gaps**: Poor key handling in embedded terminals (VS Code, iTerm) and mouse/scroll restoration issues post-exit.  
- **Startup Performance**: High CPU/file watcher timeouts on launch, especially after updates.  
- **Cross-Platform Clipboard**: Reliance on `xclip` breaks macOS; lack of native fallback causes silent failures.  
- **Silent Crashes**: Unexplained session termination in build/plan modes without logs or error feedback.  

--- 

*Generated by the OpenCode Technical Analyst Team*  
*Based on data from [anomalyco/opencode](https://github.com/anomalyco/opencode)*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

### Pi Community Digest – April 18, 2026

---

#### **Today's Highlights**
The Pi SDK team released version **0.67.68**, introducing AWS Bedrock bearer token authentication for secure Converse API access without local SigV4 credentials. A surge of activity around OpenAI-compatible provider parity—especially for prompt caching, tool execution modes, and model-specific thinking levels—reflects growing demand for enterprise-grade reliability. Several critical bug fixes address streaming failures, session corruption, and extension visibility issues.

---

#### **Releases**
- **v0.67.68**: Adds support for `AWS_BEARER_TOKEN_BEDROCK` to authenticate Amazon Bedrock sessions via the Converse API, eliminating the need for locally managed SigV4 keys (see [docs](https://github.com/badlogic/pi-mono/blob/main/docs/providers.md#amazon-bedrock)).  
- **v0.67.67**: Minor release focused on stability; no major new features reported.

---

#### **Hot Issues** *(Top 10 by engagement)*

| # | Issue | Summary & Impact |
|---|-------|------------------|
| **3271** | [OPEN] Allow custom session-ids | Users building agent harnesses want fine-grained control over session IDs for state management and integration with external systems. High-priority for SDK developers. [[link]](https://github.com/badlogic/pi-mono/issues/3271) |
| **3005** | Make "UPDATE AVAILABLE" message toggleable | Annoying UX regression for NixOS and CI environments where update checks are unreliable or intrusive. Two users upvoted as valid pain point. [[link]](https://github.com/badlogic/pi-mono/issues/3005) |
| **3022** | gemma4:31b-cloud multimodal can't process images | Blocks multimodal workflows using Ollama-hosted Gemma models, a key use case for visual coding agents. [[link]](https://github.com/badlogic/pi-mono/issues/3022) |
| **3318** | Improvements to Image Pasting | Proposal to enhance image handling beyond temp files—critical for model compatibility. [[link]](https://github.com/badlogic/pi-mono/issues/3318) |
| **3299** | Add "max" thinking level for Opus 4.7 sync | Aligns Pi’s thinking ladder with Claude Code’s five-rung structure (`off/minimal/low/medium/high/xhigh/max`). Important for consistency. [[link]](https://github.com/badlogic/pi-mono/issues/3299) |
| **3344** | Aborted tool calls corrupt conversation state | Severe UX bug: Ctrl+C during tool calls leaves sessions in broken state due to orphaned `tool_use` blocks. [[link]](https://github.com/badlogic/pi-mono/issues/3344) |
| **3338** | Mistral Small 4 rejects reasoning mode | Regression after SDK updates—blocks advanced reasoning features for a popular small-model tier. [[link]](https://github.com/badlogic/pi-mono/issues/3338) |
| **3186** | openai-completions ignores sessionId/cacheRetention | Direct OpenAI calls miss prompt caching benefits, unlike `openai-responses`. Inconsistent behavior breaks performance expectations. [[link]](https://github.com/badlogic/pi-mono/issues/3186) |
| **3313** | Regression: thinking.display not supported on Bedrock | Fix needed: extra `thinking.enabled.display` field causes validation errors on certain Bedrock model configurations. [[link]](https://github.com/badlogic/pi-mono/issues/3313) |
| **3308** | `[Extensions]` startup summary collapses entries | Loss of clarity in extension listing makes debugging multi-package setups difficult. [[link]](https://github.com/badlogic/pi-mono/issues/3308) |

---

#### **Key PR Progress** *(Top 10)*

| # | PR | Description |
|---|----|-----------|
| **3336** | [CLOSED] Fix JSON string parsing in tool args | Solves crashes when models like Opus 4.6 send stringified JSON arrays instead of parsed objects. Critical for stable tool use. [[link]](https://github.com/badlogic/pi-mono/pull/3336) |
| **3345** | [CLOSED] Per-tool sequential execution mode | Enables forcing tools to run sequentially—addresses race conditions in UI-heavy tools (e.g., input/select prompts). [[link]](https://github.com/badlogic/pi-mono/pull/3345) |
| **3346** | [CLOSED] Add Nebius Token Factory provider | New OpenAI-compatible provider supporting Nebius AI Studio models—expands global cloud coverage. [[link]](https://github.com/badlogic/pi-mono/pull/3346) |
| **3349** | [CLOSED] Support video/audio in prompts | Extends media handling beyond images to include audio/video MIME types in multimodal requests. [[link]](https://github.com/badlogic/pi-mono/pull/3349) |
| **3350** | [CLOSED] Expand manifest globs before loading | Fixes package installation bugs where glob patterns weren’t resolved, breaking skill loading. [[link]](https://github.com/badlogic/pi-mono/pull/3350) |
| **3312** | [CLOSED] Interactive extension widgets | Adds focus/event APIs for extensions to build rich interactive UIs within Pi sessions. [[link]](https://github.com/badlogic/pi-mono/pull/3312) |
| **3321** | [CLOSED] Show meaningful extension names | Displays actual file names instead of `index.ts` in startup list—improves debuggability. [[link]](https://github.com/badlogic/pi-mono/pull/3321) |
| **3316** | [CLOSED] Retry on "Network connection lost" | Treats dropped HTTP streams as retryable, preventing silent failures mid-response. [[link]](https://github.com/badlogic/pi-mono/pull/3316) |
| **3264** | [CLOSED] Set session ID headers for all OpenAI compat | Ensures prompt caching works across all OpenAI-compatible endpoints, not just api.openai.com. [[link]](https://github.com/badlogic/pi-mono/pull/3264) |
| **3229** | [OPEN] Harden Anthropic tool-call streaming | Switches to raw event iteration + non-stream fallback—closer to Claude Code resilience. [[link]](https://github.com/badlogic/pi-mono/pull/3229) |

---

#### **Feature Request Trends**

Developers are pushing for:
- **Enhanced OpenAI Compatibility**: Full parity in prompt caching (`sessionId`, `cacheRetention`) across all OpenAI-style providers.
- **Fine-Grained Session Control**: Custom session-ID generation, deletion of active sessions, and scoped model binding per project.
- **Improved Extension Ecosystem**: Configurable keybindings, dependency management between packages, and better runtime visibility.
- **Multimodal Robustness**: Better image/video handling, error recovery during media processing, and model-specific MIME type support.
- **Cloud Provider Expansion**: Native support for GovCloud, Nebius, and other regional AI stacks beyond AWS/GCP/Azure.

---

#### **Developer Pain Points**

- **Inconsistent Provider Behavior**: Major fragmentation between `openai-responses` vs `openai-completions` and Bedrock/Vertex implementations.
- **Tool Execution Reliability**: Parallel tool calls interfere with interactive UIs; no way to enforce ordering.
- **Debugging Overhead**: Opaque extension names, collapsed startup summaries, and lack of session-state diagnostics slow development.
- **Streaming Instability**: Network drops cause silent hangs; no idle-timeout detection for stalled LLM streams.
- **Documentation Gaps**: `/exit` command exists but isn’t implemented; many shortcuts mislabeled (e.g., Ctrl+T/O on Windows).

--- 

*Generated from GitHub activity on `badlogic/pi-mono` as of 2026-04-18.*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

**Qwen Code Community Digest – April 18, 2026**

---

### 1. **Today's Highlights**  
The Qwen Code team released two key updates: a new nightly build (v0.14.5-nightly) with enhanced ACP hooks and compact mode UX improvements, and the first preview of v0.15.0 featuring expanded hook support and dual-output TUI modes. Concurrently, users report widespread authentication issues (401 errors), prompting urgent attention from maintainers.

---

### 2. **Releases**  

- **v0.15.0-preview.0**: Introduces complete ACP hooks integration, optimized compact mode UI with shortcuts and safety controls, and initial HTTP hooks support. [Release Link](https://github.com/QwenLM/qwen-code/releases/tag/v0.15.0-preview.0)  
- **v0.14.5-nightly.20260418.418acc548**: Includes same core changes as above; part of ongoing pre-release testing.  

> *No stable release this cycle.*

---

### 3. **Hot Issues**  

| # | Summary | Impact |
|---|---------|--------|
| [#3203](https://github.com/QwenLM/qwen-code/issues/3203) | Proposal to reduce OAuth free tier from 1K → 100 req/day and phase out free access by Aug 2026. | High engagement (93 comments); community split on sustainability vs. accessibility. |
| [#3403](https://github.com/QwenLM/qwen-code/issues/3403) | Persistent "401 invalid access token" despite fresh login and idle sessions. | Critical auth regression affecting multiple users; likely tied to recent OAuth→API key migration. |
| [#3144](https://github.com/QwenLM/qwen-code/issues/3144) | Terminal scroll "bouncing" during agent streaming due to excessive redraws. | Disrupts UX significantly; reported across platforms. |
| [#3338](https://github.com/QwenLM/qwen-code/issues/3338) / [#3361](https://github.com/QwenLM/qwen-code/issues/3361) | Model hallucinates empty shell output even when tools succeed. | Indicates miscommunication between tool execution logs and LLM context parsing. |
| [#3267](https://github.com/QwenLM/qwen-code/issues/3267) | Users hit daily quota after <1 request—contradicts advertised 1K limit. | Suggests quota enforcement logic flaw post-OAuth transition. |

*Other notable issues include session persistence bugs (#1855), Vim mode navigation requests (#2561), and terminal redraw optimizations (#3144).*

---

### 4. **Key PR Progress**  

| # | Title | Description |
|---|-------|-------------|
| [#3388](https://github.com/QwenLM/qwen-code/pull/3388) | Prompt Hook Type with LLM Evaluation | Adds AI-driven decision logic for hooks—enabling conditional workflow control via model-based input analysis. |
| [#3352](https://github.com/QwenLM/qwen-code/pull/3352) | Dual-Output Sidecar Mode | Enables concurrent JSON event streaming alongside TUI rendering—useful for logging, monitoring, or integration pipelines. |
| [#3242](https://github.com/QwenLM/qwen-code/pull/3242) | Preserve Startup Input | Fixes dropped keystrokes during CLI init by buffering early TTY input and replaying it post-mount. |
| [#3404](https://github.com/QwenLM/qwen-code/pull/3404) | `/doctor` Diagnostic Command | New slash command for health checks: validates Node.js/npm versions, auth status, and config integrity. |
| [#3297](https://github.com/QwenLM/qwen-code/pull/3297) | Lazy Tool Registry Registration | Prevents duplicate tool instantiation under concurrency; fixes SubagentManager listener leaks. |

*Additional PRs focus on MiniMax provider support, Zed.app detection on macOS, and input lag fixes in VSCode companion.*

---

### 5. **Feature Request Trends**  

- **Quota Transparency & Control**: Requests for per-session usage dashboards, customizable rate limits, and clearer messaging around free tier adjustments (#3267, #3203).  
- **Editor Integration Polish**: Enhanced Vim mode navigation (@file autocomplete), better Zed.app detection, and improved terminal stability (#2561, #3303, #3144).  
- **Workflow Intelligence**: Demand for batch parallel operations, task list views, and subagent parity with Claude Code (#3043, #2987, #2409).  
- **Customization**: Options to disable/modify "thinking" UI quotes and streamline approval workflows (#2034, #1387).

---

### 6. **Developer Pain Points**  

- **Authentication Instability**: Widespread 401 errors suggest systemic issues with token refresh or migration from OAuth to API keys. Multiple reports indicate problems persist even after reauthentication.  
- **Tool Output Misinterpretation**: Models frequently claim shell outputs are empty despite successful execution—indicating a disconnect between tool result serialization and LLM context ingestion.  
- **Terminal UX Fragility**: Rapid scroll jumps during streaming break focus; early input loss at startup adds friction to CLI adoption.  
- **Quota Confusion**: Inconsistent enforcement of daily limits contradicts documentation, eroding trust in billing transparency.

--- 

*For full details, refer to individual GitHub links above.*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/DenisZheng/agents-radar).*