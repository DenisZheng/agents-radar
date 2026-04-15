# AI CLI Tools Community Digest 2026-04-10

> Generated: 2026-04-10 00:13 UTC | Tools covered: 8

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

# AI CLI Tools Ecosystem Cross-Comparison Report
*2026-04-10 Community Digest Analysis*

---

## 1. Ecosystem Overview

The AI CLI tools landscape is experiencing intense convergence on agentic workflows, with all major players racing to solve multi-turn reliability, permission persistence, and cross-platform stability. Memory management and sub-agent orchestration have emerged as the defining technical battlegrounds, while Windows compatibility and authentication resilience remain universal pain points. The field is splitting between **terminal-native rewrites** (Kimi's Bun/TypeScript migration, Codex's Rust CLI) and **incremental evolution** (Claude Code, Gemini CLI), suggesting divergent bets on performance vs. ecosystem continuity. Enterprise adoption pressures are driving rapid investment in MDM deployment, policy enforcement, and cost transparency features across all tools.

---

## 2. Activity Comparison

| Tool | Issues (24h) | PRs (24h) | Release Status | Notable Activity |
|:---|:---:|:---:|:---|:---|
| **Claude Code** | 10+ tracked | 10+ open/merged | v2.1.98 shipped | Google Vertex wizard, Perforce mode; `/buddy` removal backlash (253 👍) |
| **OpenAI Codex** | 10+ hot issues | 10+ active | 5 alpha releases (α25–29) | Rapid Rust CLI iteration; rate-limit crisis (#14593: 501 comments) |
| **Gemini CLI** | 10+ issues | 10+ PRs | v0.37.1 + v0.39.0-nightly | Memory leak fixes, AST-aware tooling epics |
| **GitHub Copilot CLI** | 10+ critical | 1 minor | v1.0.22 | Model availability crisis; HTTP/2 GOAWAY unsolved |
| **Kimi CLI** | 4 issues | 9 PRs | No release | 4 coordinated auth fixes; TypeScript rewrite (#1707) |
| **OpenCode** | 10+ issues | 10+ PRs | v1.4.2 | Plugin ecosystem APIs; Memory Megathread (#20695) |
| **Pi** | 10 issues | 10 PRs | No release | Provider integration fixes; extension API expansion |
| **Qwen Code** | 10 issues | 10 PRs | v0.14.2-nightly | QWEN.md adherence crisis; parallel agent PRs |

---

## 3. Shared Feature Directions

| Requirement | Tools | Specific Community Needs |
|:---|:---|:---|
| **Session/Chat Management** | Kimi (#1814), Qwen (#3032, #2999), Gemini, Claude Code | Cross-directory session discovery, rename/delete, persistent session resumption |
| **Permission Persistence** | Qwen (#3067, #3066), Gemini (#24916), Claude Code (#30953), Copilot CLI (#2398) | "Allow always" actually persisting, approval mode inheritance to sub-agents |
| **Sub-Agent Orchestration** | Claude Code (#45958, #44971), Qwen (#2864, #2886), OpenCode (#20368), Codex (#17247-17250) | Parallel execution, lifecycle hooks, cost control, fork inheritance |
| **Windows Parity** | Claude Code (#14828, #38188), Codex (#17083, #17135), Pi (#2744), Gemini (#24202) | Sandbox stability, console flashing, MSIX permissions, SSH encoding |
| **Cost Transparency** | Claude Code (#45958), Codex (#14593, #2591), Copilot CLI (#2421) | Token burning visibility, request multiplication alerts, deterministic billing |
| **MCP Ecosystem Hardening** | Copilot CLI (#2236, #2552), Claude Code (#35899, #45897), Kimi (#1816) | Cold-start reliability, connector token availability, schema sanitization |
| **Context/Compaction Controls** | Codex (#11325, #14339), Qwen (#2871) | Manual `/compact`, clear-before-plan, queue editing |

---

## 4. Differentiation Analysis

| Dimension | Claude Code | OpenAI Codex | Gemini CLI | GitHub Copilot CLI | Kimi CLI | OpenCode | Pi | Qwen Code |
|:---|:---|:---|:---|:---|:---|:---|:---|:---|
| **Core Architecture** | Proprietary TypeScript; plugin hooks | Rust rewrite (stabilizing) | React Ink + Node; AST-aware focus | GitHub-native; policy-heavy | Python → **Bun/TS rewrite** | TUI-first; plugin SDK | Extension-heavy; multi-provider | QWEN.md rules; agent teams |
| **Target User** | Enterprise engineering teams | OpenAI ecosystem; rapid iteration | Google Cloud developers | GitHub Enterprise; policy-gated orgs | Multi-instance power users | Plugin developers; local model users | Extension builders; tinkerers | Alibaba Cloud; Qwen model users |
| **Key Differentiator** | Cowork/Dispatch split; Vertex integration | `/compact` CLI; guardian safety; steering analytics | Ink UI maturity; memory routing architecture | Native GitHub policy; Copilot subscription bundle | Radical rewrite for terminal-native perf | Open plugin ecosystem; server endpoints | Provider flexibility; autocomplete APIs | QWEN.md project rules; parallel tool execution |
| **Critical Weakness** | Silent feature removals; cold-start MCP | Rate-limit opacity; sandbox UX friction | File staleness; SSH fragility | Model availability crisis; silent premium waste | Auth fatigue; pre-rewrite instability | Memory leaks; Copilot provider fragility | Terminal stability; provider cooling | QWEN.md ignored; permission drift |
| **Enterprise Readiness** | High (MDM templates, Perforce) | Medium (stabilizing) | Medium (nightly cadence) | High (policy engine) | Low (rewrite in progress) | Medium (plugin maturity) | Low (extension focus) | Medium (agent teams experimental) |

---

## 5. Community Momentum & Maturity

### 🔥 Highest Momentum
| Tool | Evidence | Assessment |
|:---|:---|:---|
| **OpenAI Codex** | 5 alpha releases in 24h; 501-comment issue; heavy analytics instrumentation | Aggressive stabilization push; preparing for GA |
| **Kimi CLI** | 4 coordinated auth PRs; TypeScript rewrite gaining attention; same-day issue→PR response | Architectural bet with high execution velocity |
| **Claude Code** | 253-upvote backlash in 24h; open-source pressure (#41518, #41447); enterprise feature shipping | Largest emotional community investment; trust erosion risk |

### 🏛️ Most Mature
| Tool | Evidence | Assessment |
|:---|:---|:---|
| **Claude Code** | Plugin ecosystem, MDM deployment, multi-SCM support, most enterprise features | Functional breadth leader; stability questions |
| **Gemini CLI** | AST-aware epics, memory routing architecture, visual regression testing infrastructure | Technical depth leader; slower feature velocity |
| **OpenCode** | Server endpoint APIs, comprehensive hook system, plugin PATH handling | Ecosystem extensibility leader; resource stability gaps |

### ⚠️ At-Risk
| Tool | Evidence | Assessment |
|:---|:---|:---|
| **GitHub Copilot CLI** | Model listing failures; HTTP/2 GOAWAY unsolved; only 1 PR in 24h | Infrastructure debt; engineering focus elsewhere |
| **Qwen Code** | 7-month-old P1 bug (#674 QWEN.md ignored); permission persistence failures | Core value proposition broken; community patience thinning |

---

## 6. Trend Signals

| Signal | Evidence | Implications for Developers |
|:---|:---|:---|
| **Terminal-native rewrites accelerating** | Kimi (Python→Bun/TS), Codex (→Rust) | Performance and bundle size becoming competitive differentiators; expect migration friction |
| **Agent cost control as first-class concern** | Claude Code #45958 (15M token stall), Codex #14593 (burning tokens), Copilot #2591 (80-100x request multiplication) | Production agent deployment requires budget guards; vendor transparency still inadequate |
| **Permission UX as trust battleground** | "Allow always" failures across Qwen, Gemini, Copilot; YOLO mode demand | Friction vs. safety tradeoff unresolved; expect regulatory pressure on "actual full access" modes |
| **MCP as critical infrastructure** | Cold-start failures, connector token availability, scheduled task reliability | MCP server authors need session warming patterns; vendors must solve headless authentication |
| **Memory management as scaling bottleneck** | OpenCode Memory Megathread, Gemini React Fiber leaks, Claude Code cache opacity | Long-running sessions require explicit resource management; expect OOM guardrails |
| **Windows as persistent second-class platform** | 4+ tools with active Windows-specific issue clusters | Cross-platform teams should budget platform-specific QA; WSL not a panacea |
| **Open-source pressure mounting** | Claude Code #41518 (1,906 files extracted), #41447 (formal proposal) | Vendor lock-in concerns driving community reverse-engineering; may force licensing shifts |

---

*Report compiled from 2026-04-10 community digests across 8 active AI CLI tools. Data reflects GitHub issue/PR activity, release velocity, and community engagement metrics.*

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
*Data as of 2026-04-10 | Repository: [anthropics/skills](https://github.com/anthropics/skills)*

---

## 1. Top Skills Ranking

| Rank | Skill | PR | Status | Description | Discussion Highlights |
|:---|:---|:---|:---|:---|:---|
| 1 | **Document Typography** | [#514](https://github.com/anthropics/skills/pull/514) | 🟡 Open | Typographic quality control for AI-generated documents—prevents orphans, widows, and numbering misalignment | Addresses universal pain point affecting "every document Claude generates"; zero 👍 suggests early-stage visibility rather than lack of interest |
| 2 | **Skill Quality & Security Analyzers** | [#83](https://github.com/anthropics/skills/pull/83) | 🟡 Open | Meta-skills for evaluating Claude Skills across 5 quality dimensions and security posture | Long-running PR (Nov 2025) establishing quality standards for the ecosystem itself |
| 3 | **Frontend Design** | [#210](https://github.com/anthropics/skills/pull/210) | 🟡 Open | Improved clarity and actionability for frontend design guidance | Focus on "single-conversation executability"—making skills actually usable in practice |
| 4 | **ODT (OpenDocument)** | [#486](https://github.com/anthropics/skills/pull/486) | 🟡 Open | Native ODT creation, template filling, and HTML parsing for LibreOffice/OnlyOffice workflows | Enterprise document pipeline integration; addresses gap vs. DOCX dominance |
| 5 | **DOCX Tracked Changes Fix** | [#541](https://github.com/anthropics/skills/pull/541) | 🟡 Open | Critical bugfix for document corruption when adding tracked changes to bookmarked documents | Technical depth: resolves `w:id` collision in OOXML shared ID space |
| 6 | **System Documentation** | [#95](https://github.com/anthropics/skills/pull/95) | 🟡 Open | Comprehensive evidence management system docs with flowcharts and architecture diagrams | Unusually detailed for a single PR; suggests enterprise compliance use case |
| 7 | **SAP-RPT-1-OSS Predictor** | [#181](https://github.com/anthropics/skills/pull/181) | 🟡 Open | Integration with SAP's open-source tabular foundation model for predictive analytics | Bridges Claude Code to enterprise ERP data; Apache 2.0 alignment |
| 8 | **Skill-Creator Validation** | [#539](https://github.com/anthropics/skills/pull/539) | 🟡 Open | Pre-parse YAML validation to catch unquoted descriptions with special characters | Developer experience improvement preventing "silent YAML parsing failures" |

---

## 2. Community Demand Trends

From Issue analysis, four dominant Skill directions emerge:

| Trend | Evidence | Representative Issues |
|:---|:---|:---|
| **Enterprise Governance & Safety** | [#412](https://github.com/anthropics/skills/issues/412) (agent-governance proposal), [#492](https://github.com/anthropics/skills/issues/492) (trust boundary security) | Policy enforcement, threat detection, audit trails for multi-agent systems |
| **Cross-Session Memory & Context** | [#521](https://github.com/anthropics/skills/pull/521) (record-knowledge), [#154](https://github.com/anthropics/skills/pull/154) (shodh-memory) | Persistent knowledge across Claude Code sessions; team-shared learning |
| **MCP/Protocol Interoperability** | [#16](https://github.com/anthropics/skills/issues/16) | Exposing Skills as Model Context Protocol servers for API standardization |
| **Enterprise Platform Integration** | [#29](https://github.com/anthropics/skills/issues/29) (AWS Bedrock), [#228](https://github.com/anthropics/skills/issues/228) (org-wide sharing) | Multi-cloud deployment, SSO/enterprise auth, organizational skill libraries |

---

## 3. High-Potential Pending Skills

Active PRs with substantive discussion likely to merge:

| Skill | PR | Why It Matters | Blockers |
|:---|:---|:---|:---|
| **Testing Patterns** | [#723](https://github.com/anthropics/skills/pull/723) | Comprehensive testing stack coverage (Testing Trophy, React, E2E, performance) | Recent submission (Mar 22); awaiting review |
| **Sensory (macOS Automation)** | [#806](https://github.com/anthropics/skills/pull/806) | Native AppleScript automation replacing screenshot-based computer use | Tiered permission model needs validation |
| **Codebase Inventory Audit** | [#147](https://github.com/anthropics/skills/pull/147) | Systematic orphaned code detection and documentation gap analysis | Mature since Dec 2025; may be waiting for skill-creator improvements |
| **Masonry Image/Video Generation** | [#335](https://github.com/anthropics/skills/pull/335) | Imagen 3.0 and Veo 3.1 integration for media workflows | CLI dependency management |
| **x402 BSV Micropayments** | [#374](https://github.com/anthropics/skills/pull/374) | Natural language micropayments for AI services | Niche blockchain use case; may need ecosystem maturity |

---

## 4. Skills Ecosystem Insight

> **The community's most concentrated demand is for enterprise-grade reliability infrastructure**—skills that persist context across sessions, enforce governance policies, integrate with existing enterprise systems (SAP, AWS Bedrock, ODT/DOCX pipelines), and operate securely within organizational trust boundaries, rather than incremental workflow automation tools.

---

*Report generated from 50 PRs and 50 Issues in anthropics/skills repository.*

---

# Claude Code Community Digest — 2026-04-10

## Today's Highlights

The community is in uproar over the silent removal of `/buddy` in v2.1.97, with a consolidated plea gathering 253 upvotes and 75 comments in a single day. Meanwhile, a major model quality issue (#42796) involving February updates impairing complex engineering tasks was finally closed after 228 comments and 1,085 upvotes, suggesting Anthropic may have deployed a fix. The ecosystem also saw significant infrastructure work with a new Google Vertex AI setup wizard and multiple community security plugins.

---

## Releases

**v2.1.98** — [Release Notes](https://github.com/anthropics/claude-code/releases/tag/v2.1.98)

| Feature | Description |
|--------|-------------|
| Google Vertex AI Setup Wizard | Interactive onboarding for GCP authentication, project/region configuration, credential verification, and model pinning—accessible from login screen under "3rd-party platform" |
| Perforce Mode | New `CLAUDE_CODE_PERFORCE_MODE` environment variable for Perforce SCM workflows |

---

## Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|--------------|------------------|
| [#42796](https://github.com/anthropics/claude-code/issues/42796) | [CLOSED] Claude Code unusable for complex engineering tasks with Feb updates | **Resolution of a critical regression** affecting core developer workflows; 1,085 upvotes made this the highest-visibility model quality issue in months | 228 comments, celebratory closure after apparent fix deployment |
| [#45596](https://github.com/anthropics/claude-code/issues/45596) | Bring Back Buddy — A Consolidated Plea from the Community | **Silent feature removal** without changelog notice; `/buddy` provided companion status line that many developers relied on for session context | 253 upvotes, 75 comments, emotional community response ("No farewell. One day we had a companion") |
| [#27302](https://github.com/anthropics/claude-code/issues/27302) | Support multiple Connector accounts (same connector, different accounts) | **Enterprise blocker** — users with personal + work Gmail/Google Workspace accounts cannot use both simultaneously | 145 upvotes, 111 comments, persistent since February |
| [#35899](https://github.com/anthropics/claude-code/issues/35899) | Scheduled tasks cannot access MCP connectors until user message warms session | **Automation reliability** — scheduled agents fail on cold starts, breaking CI/CD integrations | 36 comments, active debugging |
| [#15148](https://github.com/anthropics/claude-code/issues/15148) | LSP plugin `lspServers` config not processed from marketplace.json | **Language server ecosystem broken** — TypeScript, Python, Go LSP plugins install but don't function | 64 upvotes, 15 comments, root cause identified |
| [#43713](https://github.com/anthropics/claude-code/issues/43713) | `autoAllowBashIfSandboxed` bypassed for shell expansions | **Security UX regression** — sandboxed users get spurious permission prompts for basic commands | 13 upvotes, 7 comments, affects automated workflows |
| [#45897](https://github.com/anthropics/claude-code/issues/45897) | Scheduled trigger MCP connectors fail — tokens not available in remote execution | **Remote agent reliability** — scheduled agents on claude.ai cannot access MCP tools that work locally | 2 comments, critical for headless automation |
| [#45958](https://github.com/anthropics/claude-code/issues/45958) | Parallel Agent dispatch: 90min stall silently burns ~15M cache_read tokens | **Cost and reliability crisis** — agent teams can silently consume massive resources without progress | 2 comments, severe production impact |
| [#44971](https://github.com/anthropics/claude-code/issues/44971) | SubagentStop hook does not fire when team agents terminate via shutdown protocol | **Lifecycle management broken** — external orchestration systems leak phantom agent counts | 8 comments, affects enterprise integrations |
| [#45937](https://github.com/anthropics/claude-code/issues/45937) | Dispatch main conversation permanently offline despite working Cowork tasks | **Cowork/Dispatch split-brain** — mobile-to-desktop sync broken while individual tasks work | 5 comments, UX inconsistency |

---

## Key PR Progress

| # | PR | Description | Status |
|---|-----|-------------|--------|
| [#41518](https://github.com/anthropics/claude-code/pull/41518) | Fully Open Source Claude Code | Extracted 1,906 TypeScript files from source maps, built working Bun bundler configuration; runs `--version`/`--help` | Open — community reverse-engineering effort |
| [#41447](https://github.com/anthropics/claude-code/pull/41447) | feat: open source claude code ✨ | Formal open-sourcing proposal closing multiple long-standing requests (#59, #456, #2846, #22002, #41434) | Open — awaiting Anthropic response |
| [#45866](https://github.com/anthropics/claude-code/pull/45866) | Add MDM deployment example templates | Enterprise IT templates: managed-settings.json, macOS .plist/.mobileconfig, Windows PowerShell/Intune | **Merged** |
| [#45865](https://github.com/anthropics/claude-code/pull/45865) | fix(auto-close): preserve existing labels when closing duplicates | Bugfix: GitHub API was stripping triage labels (`bug`, `has repro`, platform tags) on duplicate closure | **Merged** |
| [#45854](https://github.com/anthropics/claude-code/pull/45854) | fix(ralph-wiggum): isolate loops to the originating session | Session-scoped `/ralph-loop` enforcement using `SessionStart` hook; prevents cross-session interference | Open |
| [#45621](https://github.com/anthropics/claude-code/pull/45621) | feat: add notify-on-complete plugin | Ready-to-use Stop hook for macOS notifications when Claude finishes; handles UTF-8 and terminal-notifier/fallback | Open |
| [#45604](https://github.com/anthropics/claude-code/pull/45604) | feat: add commit-guard plugin | Pre-commit hook blocking sensitive files (`.env`, `*.pem`, `credentials.json`, SSH keys) from git | Open |
| [#45599](https://github.com/anthropics/claude-code/pull/45599) | feat: add bash-workdir-guard plugin | `PreToolUse` hook preventing `cd`/`pushd` outside project boundary; suggests `git -C`, `make -C` alternatives | Open |
| [#45603](https://github.com/anthropics/claude-code/pull/45603) | fix(security-guidance): move debug log out of /tmp | Security hardening: moved world-readable log to `~/.claude/`; fixed boolean env var parsing | Open |
| [#45694](https://github.com/anthropics/claude-code/pull/45694) | fix: use jq for JSON construction in log-issue-events workflow | Infrastructure: replaced brittle `sed` escaping with `jq --arg` for proper Unicode/newline handling | Open |

---

## Feature Request Trends

| Trend | Evidence | Momentum |
|-------|----------|----------|
| **Multi-account connector support** | #27302 (145 👍), #36024 (23 👍) | High — enterprise adoption blocker |
| **Configurable/diabled status line** | #45596 (Buddy removal backlash), #34469, #45973, #17367, #16865, #9530 | Very high — UX customization demand |
| **Persistent permissions** | #30953 (managed-settings.json for all permissions) | Medium — security/enterprise need |
| **Enhanced LSP integration** | #15619, #15168, #15148 | Medium — language server ecosystem gaps |
| **Windows parity** | #14828, #31449, #38188, #29367, #45953, #41498 | High — platform-specific bugs accumulate |

---

## Developer Pain Points

| Pain Point | Manifestation | Frequency |
|------------|-------------|-----------|
| **Silent feature removals** | `/buddy` disappeared without changelog notice (#45596) | Recurring trust issue |
| **Cold-start reliability** | Scheduled agents, MCP connectors, and LSP servers fail until manually warmed (#35899, #45897) | High — affects automation |
| **Cost opacity in agent teams** | Silent token burning during stalls (#45958), fabricated GPU estimates (#45005) | Critical for production use |
| **Windows second-class citizenship** | Console flashing (#14828), MSIX permission issues (#38188), proxy/NAT problems (#29367), missing env file support (#45953), Bun crashes on AVX-512 (#41498) | Very high — disproportionate platform pain |
| **LSP configuration fragility** | marketplace.json parsing failures, "No LSP server available" despite installed servers (#15148, #15168, #15619) | Medium — core IDE feature broken |
| **Hook lifecycle inconsistencies** | SubagentStop not firing on shutdown protocol (#44971), session isolation gaps | Medium — enterprise orchestration blocked |

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-04-10

## 1. Today's Highlights

The Codex team shipped five rapid-fire Rust CLI alpha releases (v0.119.0-alpha.25–29) as they iterate toward stable. Meanwhile, rate-limit and token consumption bugs dominate community discussion, with one issue (#14593) attracting 501 comments and 191 upvotes—making it the most tracked problem in the repo. On the PR front, heavy investment in analytics instrumentation and Windows sandbox stability signals preparation for broader enterprise rollout.

---

## 2. Releases

**Rust CLI v0.119.0-alpha.25 through alpha.29** — Five incremental alpha releases in 24 hours indicate active stabilization work. No detailed changelogs provided; typical for pre-release cadence. Users on bleeding-edge builds should expect rapid iteration.

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|--------------|------------------|
| [#14593](https://github.com/openai/codex/issues/14593) | **Burning tokens very fast** — Business tier users report extreme token consumption rates | Direct revenue impact; makes Codex economically unusable for teams | 🔥 501 comments, 191 👍 — highest engagement in repo |
| [#11325](https://github.com/openai/codex/issues/11325) | **Manual `/compact` command in Codex app** — CLI has it, desktop app lacks it | Critical for long-context workflows; memory pressure management | 44 comments, 126 👍 — long-standing parity gap |
| [#14936](https://github.com/openai/codex/issues/14936) | **bwrap: Approval prompt shown for almost every command** — Linux sandbox regression | Destroys flow state; "Full Access" setting ignored | 38 comments, 16 👍 — sandbox UX breakdown |
| [#15393](https://github.com/openai/codex/issues/15393) | **High CPU utilization with IDE extension** — VS Code extension pegs cores | Performance regression affecting daily productivity | 13 comments, 20 👍 — extension stability concern |
| [#16759](https://github.com/openai/codex/issues/16759) | **Full Access still shows permission prompts** — "YOLO mode" requested | Setting/expectation mismatch; power users blocked | 9 comments, 1 👍 — configuration clarity issue |
| [#14329](https://github.com/openai/codex/issues/14329) | **Team/Business accounts excluded from usage reset** — Billing/pooling bug | Enterprise trust erosion; "ignored every single time" per author | 9 comments, 10 👍 — B2B reliability crisis |
| [#16553](https://github.com/openai/codex/issues/16553) | **Large `~/.ssh/config` causes unresponsive startup** — SSH parsing bottleneck | Blocks users with complex infrastructure setups | 7 comments, 1 👍 — enterprise workflow blocker |
| [#17083](https://github.com/openai/codex/issues/17083) | **Windows memory allocation failure (code=3221226505)** — Rust OOM crash | Platform-specific stability issue; proxy-related trigger suspected | 5 comments — Windows reliability gap |
| [#17192](https://github.com/openai/codex/issues/17192) | **100% weekly usage on 1 prompt** — Rate limit accounting bug | Fresh reset consumed immediately; makes product unusable | 3 comments, closed — critical severity, fast resolution |
| [#17135](https://github.com/openai/codex/issues/17135) | **Windows Sandbox required but cannot be installed** — Enterprise deployment blocker | Codex fails to initialize on locked-down Windows environments | 3 comments — enterprise IT friction |

---

## 4. Key PR Progress

| # | PR | Description | Impact |
|---|-----|-------------|--------|
| [#17271](https://github.com/openai/codex/pull/17271) | **Fix stale proxy env restoration after shell snapshots** | Restores managed proxy vars from live process env; deduplicates `MANAGED_PROXY_ENV_KEYS` | Fixes proxy-related auth/tooling failures in containerized environments |
| [#17155](https://github.com/openai/codex/pull/17155) | **Add compaction analytics event** | Telemetry for manual/local compaction events | Enables usage pattern analysis; privacy-preserving instrumentation |
| [#15981](https://github.com/openai/codex/pull/15981) | **Fix symlinked writable roots in sandbox permissions** | Preserves logical symlink paths; binds real targets in bwrap; adds regression tests | Resolves permission edge cases with monorepos and symlinked project structures |
| [#17266](https://github.com/openai/codex/pull/17266) | **Improve hook status rendering** | Reduces noise in hook display; transient activity hidden unless output exists | Cleaner TUI experience; faster scanning of hook severity |
| [#16706](https://github.com/openai/codex/pull/16706) | **Add steering metadata to analytics** | Captures user steering/intervention patterns | Product insight into human-AI collaboration flows |
| [#17264](https://github.com/openai/codex/pull/17264) | **Stream Realtime V2 Codex progress** | Progress updates streamed as user messages; final output single-shot | Better perceived responsiveness for long-running Codex tasks |
| [#17269](https://github.com/openai/codex/pull/17269) | **Send only transcript deltas on guardian followups** | Eliminates redundant full-history sends to guardian threads | Latency reduction for safety review; cost optimization |
| [#15578](https://github.com/openai/codex/pull/15578) | **Add Windows sandbox unified exec runtime support** | Extends `windows-sandbox-rs` for both restricted-token and elevated-runner backends | Critical path for Windows enterprise deployment parity |
| [#17247-17250](https://github.com/openai/codex/pull/17247) | **Forked agent inheritance stack** (3 PRs) | Parent model config, prompt-cache keys, and MCP manager preserved across agent forks | Eliminates cold-start overhead for subagents; tool surface consistency |
| [#17260](https://github.com/openai/codex/pull/17260) | **Clean up guardian config and context** | Explicit subagent inheritance policy; narrower guardian prompt | Security review efficiency; reduced prompt injection surface |

---

## 5. Feature Request Trends

1. **Context Management Parity** — CLI's `/compact` command universally requested for App/IDE (#11325); "clear context before implementing plan" workflow from competitors desired (#14339)

2. **Deterministic Rate Limiting** — Weekly reset timing and visibility into consumption math heavily requested (#9508, #14329, #17157); business tier users feel systematically disadvantaged

3. **Multi-Environment/Terminal Support** — Multiple terminals per environment (#11427), tab titles for conversations (#9849), and better session organization

4. **Model Selection Flexibility** — Plan in high-reasoning, implement in faster model (#14969); per-phase model control

5. **YOLO/Trusted Mode** — "Full Access" that actually means full access without prompts (#16759); friction reduction for verified workflows

---

## 6. Developer Pain Points

| Category | Summary | Frequency |
|----------|---------|-----------|
| **Rate Limit Accounting** | Token consumption appears non-deterministic; resets exclude business tiers; single prompts consuming entire weekly allocation | 🔴 Critical — 6+ issues, 500+ comments |
| **Sandbox UX Friction** | "Full Access" setting ignored; bwrap prompts on every command; approval delays break agent flow | 🔴 High — 4+ issues |
| **Cross-Platform Stability** | Windows memory crashes, SSH config parsing hangs, high CPU on Linux extensions | 🟡 Elevated — 3+ issues |
| **Context/Session Management** | No manual compact in App, lost thread history on restart, no multi-terminal support | 🟡 Elevated — long-standing gaps |
| **Enterprise Deployment** | Windows Sandbox requirements, proxy env handling, large config file performance | 🟡 Growing — B2B blocker pattern |

---

*Digest compiled from github.com/openai/codex — 2026-04-10*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-04-10

---

## 1. Today's Highlights

The v0.37.1 stable release shipped alongside a v0.39.0 nightly, marking steady iteration on core infrastructure. Community activity surged around file detection reliability, with multiple PRs landing to fix `@` mention menu staleness and memory leak issues that caused degraded performance in long sessions. AST-aware tooling and memory routing continue to dominate maintainer roadmap discussions.

---

## 2. Releases

| Version | Key Changes |
|---------|-------------|
| **v0.37.1** | Patch release; [full changelog](https://github.com/google-gemini/gemini-cli/compare/v0.37.0...v0.37.1) |
| **v0.39.0-nightly.20260409** | Ink UI library bumped to 6.6.8; conductor directory added to ignore patterns; changelog automation for preview builds |

---

## 3. Hot Issues

| Issue | Why It Matters | Community Signal |
|-------|--------------|----------------|
| [#21230](https://github.com/google-gemini/gemini-cli/issues/21230) **feat: visualize tool and /visualize command** | Mermaid diagram rendering as terminal ASCII art—bridges documentation and CLI workflows. 22 comments show strong design iteration. | High engagement; implementation PR merged |
| [#11462](https://github.com/google-gemini/gemini-cli/issues/11462) **Visual regression testing for terminal UI** | Terminal apps are notoriously fragile across environments; this would prevent rendering regressions. 12 comments, active PR in progress. | Long-standing need; contributor stepping up |
| [#17906](https://github.com/google-gemini/gemini-cli/issues/17906) **False-positive 429 quota errors in headless mode** | Fixed: spurious "capacity exhausted" logs during successful retries polluted CI/CD output. | Closed with fix; reliability win |
| [#15503](https://github.com/google-gemini/gemini-cli/issues/15503) **GitHub colorblind themes** | Accessibility gap for ~8% of male developers; straightforward theming fix pending. | 5 👍; needs champion |
| [#21413](https://github.com/google-gemini/gemini-cli/issues/21413) **Terminal dinosaur game easter egg (/dino)** | Merged: Chrome-inspired ASCII game demonstrates Ink's rendering capabilities. | Closed; fun factor + framework stress test |
| [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) **AST-aware file reads and codebase mapping** | Epic tracking precision improvements to reduce token waste and misaligned reads. Core to next-gen agent capabilities. | 4 comments; maintainer-only workstream |
| [#22819](https://github.com/google-gemini/gemini-cli/issues/22819) **Memory routing: global vs. project** | Critical for agent personalization—distinguishes user preferences from codebase-specific context. | 2 👍; foundational architecture |
| [#24916](https://github.com/google-gemini/gemini-cli/issues/24916) **Permission prompts not persisting** | UX friction: "allow for all future sessions" intermittently fails, breaking flow. | Fresh report; needs reproduction |
| [#24202](https://github.com/google-gemini/gemini-cli/issues/24202) **SSH session text scrambling** | Windows→gLinux SSH users blocked; terminal detection helper proposed in [#24546](https://github.com/google-gemini/gemini-cli/issues/24546). | Enterprise adoption blocker |
| [#23571](https://github.com/google-gemini/gemini-cli/issues/23571) **Tmp scripts scattered across workspace** | Agent hygiene issue: shell execution restrictions cause cleanup debt. | Workflow friction; needs tooling fix |

---

## 4. Key PR Progress

| PR | Contribution | Status |
|----|------------|--------|
| [#25075](https://github.com/google-gemini/gemini-cli/pull/25075) **Automated usage metrics for behavioral evals** | Adds token/turn/cost tracking to evaluation suite—enables efficiency regression detection | Open |
| [#24840](https://github.com/google-gemini/gemini-cli/pull/24840) **Dynamic @ file detection** | Eliminates restart requirement for newly created files; core optimization for agent workflows | Open, under review |
| [#25077](https://github.com/google-gemini/gemini-cli/pull/25077) **Windows sandbox ACL optimization** | Native C# helper replaces icacls.exe spawning; significant init latency reduction | Open |
| [#25076](https://github.com/google-gemini/gemini-cli/pull/25076) **Fix timer leak in generateIntentSummary** | Clears 15s abort timeout on error paths; prevents stale AbortController calls | Open, fixes #25074 |
| [#25049](https://github.com/google-gemini/gemini-cli/pull/25049) **Resolve lifecycle memory leaks** | Terminal buffer + React Fiber cleanup; addresses long-session bloat | Open, critical reliability |
| [#20695](https://github.com/google-gemini/gemini-cli/pull/20695) **Visual regression tests for SettingsDialog** | First VRT implementation; paves way for UI stability | Open, needs review |
| [#25072](https://github.com/google-gemini/gemini-cli/pull/25072) **Favorite models and keyboard cycling** | UX improvement: mark preferred models, cycle with shortcuts | Open, community-requested |
| [#25073](https://github.com/google-gemini/gemini-cli/pull/25073) **Stop suppressing thoughts/text** | Transparency improvement: removes verbosity filtering now that prompts discourage narration | Open |
| [#24752](https://github.com/google-gemini/gemini-cli/pull/24752) **Decoupled ContextManager + Sidecar architecture** | Major refactor for context lifecycle management; part of larger reliability push | Open, foundational |
| [#24945](https://github.com/google-gemini/gemini-cli/pull/24945) **Fix update_topic in confirmation queue** | UI polish: prevents invisible tool from inflating "X of Y" counts | Open |

---

## 5. Feature Request Trends

| Direction | Evidence | Momentum |
|-----------|----------|----------|
| **AST-aware tooling** | #22745, #22746, #24353 | High—multiple maintainer epics; precision and token efficiency |
| **Memory/personalization infrastructure** | #22819, #22809, #23582 | High—global vs. project routing, proactive memory writes, subagent awareness |
| **Accessibility & theming** | #15503 (colorblind), #24915 (border rendering) | Moderate—clear user need, awaiting implementation |
| **Visual/data rendering** | #21230 (diagrams merged), #21413 (easter egg) | Moderate—terminal as rich canvas |
| **Evaluation & observability** | #25075 (metrics), #24353 (component evals) | Growing—operational maturity focus |

---

## 6. Developer Pain Points

| Category | Symptoms | Tracking |
|----------|----------|----------|
| **File system staleness** | `@` menu missing new files, selection lists lagging behind workspace state | #24729, #24981, #24840 (fix in progress) |
| **Memory & performance degradation** | Long sessions cause React Fiber bloat, terminal backbuffer retention, uncleaned timers | #25049, #25076, #25074 |
| **SSH/remote environment fragility** | Text scrambling, encoding issues, detection gaps | #24202, #24546, #20971 (partial) |
| **Permission persistence failures** | "Allow for all future sessions" intermittently ignored | #24916, #19921 (related fix) |
| **Scroll/UI instability** | Momentum bugs, flashing, scrollbar jumps in long chats | #24470, #24438 |
| **Tooling limits & hygiene** | >128 tools cause 400 errors; tmp script scatter; destructive command encouragement | #24246, #23571, #22672 |

---

*Digest compiled from google-gemini/gemini-cli public activity. For corrections or additions, open a discussion in the repository.*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-04-10

---

## 1. Today's Highlights

GitHub shipped **v1.0.22** with critical MCP tooling improvements and rendering optimizations, while the community grapples with widespread **model availability and authentication failures** affecting enterprise and individual users alike. Three high-engagement issues (#1081, #1595, #1703) reveal systemic problems with model listing and policy enforcement that are blocking production workflows. The HTTP/2 GOAWAY race condition (#2421) remains an unsolved infrastructure pain point causing silent premium request waste.

---

## 2. Releases

### [v1.0.22](https://github.com/github/copilot-cli/releases/tag/v1.0.22) — 2026-04-09

| Change | Impact |
|--------|--------|
| MCP JSON schema sanitization | Fixes compatibility breaks with non-standard MCP tool schemas across model providers |
| Large image handling improvements | Resolves crashes/timeouts from MCP/extension tool image payloads |
| Simplified inline renderer | Noticeable performance boost for terminal UI responsiveness |
| Organization contact messaging | Better UX for policy-blocked scenarios |

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|--------------|-------------------|
| [#1081](https://github.com/github/copilot-cli/issues/1081) | `AggregateError: Failed to list models` — complete CLI failure post-auth | **Production blocker**: Users with valid Enterprise subscriptions cannot execute any commands after successful login. 22 comments indicate widespread impact across organizations. | 🔥 8 👍 — users sharing workarounds, no official fix yet |
| [#1703](https://github.com/github/copilot-cli/issues/1703) | CLI shows reduced model list vs. VS Code Copilot (missing Gemini 3.1 Pro, etc.) | **Feature parity gap**: Same org settings, same account, different available models. Undermines CLI as a serious IDE alternative. | 🔥 31 👍 — highest engagement; users documenting exact model discrepancies |
| [#1595](https://github.com/github/copilot-cli/issues/1595) | Sporadic "access denied by Copilot policy" despite valid subscription & remaining quota | **Policy engine reliability**: 40% premium quota remaining but completely blocked. Suggests race condition or caching bug in policy service. | 🔥 8 👍 — enterprise users particularly vocal |
| [#2421](https://github.com/github/copilot-cli/issues/2421) | HTTP/2 GOAWAY race condition causing cascading retries and silent premium waste | **Infrastructure stability**: Consolidates 5 related issues. Users losing 80-100 premium requests per session due to connection pool bugs. | 🔥 16 👍 — technical deep-dive from community; awaiting engineering response |
| [#2597](https://github.com/github/copilot-cli/issues/2597) | Claude Sonnet 4.5 listed but returns 400 error | **Model launch quality**: New model availability announced but non-functional. "Was working, then stopped" suggests deployment rollback issue. | 14 comments — real-time failure reports |
| [#2236](https://github.com/github/copilot-cli/issues/2236) | MCP servers disappear with false "disabled by organization" warning | **MCP reliability regression**: Org-registry MCP servers vanishing weekly. 67 👍 indicates massive affected user base. | ✅ **Closed** — fixed in recent release |
| [#2334](https://github.com/github/copilot-cli/issues/2334) | Bring back `no-alt-screen` mode | **UX regression**: Alt-screen terminal mode breaks scrollback, find, and copy workflows. Power users revolting against forced UI change. | 🔥 16 👍 — sustained demand since March |
| [#2591](https://github.com/github/copilot-cli/issues/2591) | Single session consumes 80-100 premium requests via tool/thinking loops | **Billing transparency crisis**: Users charged exponentially for single prompts. No visibility into request multiplication. | 6 comments — financial impact concerns |
| [#2082](https://github.com/github/copilot-cli/issues/2082) | `ctrl+shift+c` copy broken on Linux | **Platform parity**: Standard terminal shortcut removed without migration path. Ubuntu 24.04 users especially affected. | 14 comments — accessibility concerns |
| [#92](https://github.com/github/copilot-cli/issues/92) | `/ask` mode — chat without agent actions | **Workflow gap**: No way to get pure LLM responses without file edits or command execution. Forces defensive prompting. | 🔥 8 👍 — long-standing request (since Sept 2025) |

---

## 4. Key PR Progress

*Only 1 PR updated in last 24h; expanding to notable recent PRs based on issue context:*

| # | PR | Status | Description |
|---|-----|--------|-------------|
| [#2556](https://github.com/github/copilot-cli/pull/2556) | Developer skill | ✅ Closed | Appears to be skill-leveling documentation or internal tooling; minimal public detail |

*No substantial feature PRs active in 24h window. Engineering focus appears to be on release stabilization (v1.0.22) rather than new feature development.*

---

## 5. Feature Request Trends

| Trend | Evidence | Momentum |
|-------|----------|----------|
| **Non-agentic chat mode** | #92 (`/ask`), #1028 (interruptible reasoning) | High — users want control over when Copilot acts vs. advises |
| **Persistent permission configuration** | #2398 (default config file) | Medium — friction in per-session permission grants |
| **Gemini 3.1 Pro support** | #1664, #1703 | High — explicitly requested, partially blocked by policy bugs |
| **MCP over HTTP (ACP standard)** | #1283 | Early — standards-alignment play for agent interoperability |
| **Terminal UX restoration** | #2334 (no-alt-screen), #2082 (Linux shortcuts) | High — accessibility and power-user workflow preservation |

---

## 6. Developer Pain Points

### 🔴 Critical: Model Availability & Authentication
- **Pattern**: Valid subscriptions → login succeeds → operations fail with policy/auth errors
- **Impact**: Complete workflow blockage, unpredictable behavior between CLI and VS Code
- **Root cause hypothesis**: Caching layer or regional policy service inconsistency

### 🔴 Critical: Silent Premium Request Waste
- **Pattern**: Single prompts consuming 80-100x expected requests via tool loops, retries, or thinking steps
- **Impact**: Unexpected quota exhaustion, billing surprises
- **Key issue**: [#2591](https://github.com/github/copilot-cli/issues/2591), [#2421](https://github.com/github/copilot-cli/issues/2421)

### 🟡 High: MCP Ecosystem Fragility
- **Pattern**: Registry policy fetch failures → false blocking, server disappearance
- **Recent fix**: v1.0.22 schema sanitization addresses symptom; underlying policy service reliability remains concern
- **Ongoing**: [#2552](https://github.com/github/copilot-cli/issues/2552) (prerelease builds), [#2176](https://github.com/github/copilot-cli/issues/2176)

### 🟡 High: Terminal UX Regressions
- **Pattern**: Alt-screen mode forced, standard shortcuts removed, scrollback broken
- **User segment**: Linux power users, tmux/screen workflows
- **Status**: No official acknowledgment of #2334

### 🟢 Medium: Model Version Support Lag
- **Pattern**: New models (Sonnet 4.5, Opus 4.5, Gemini 3.1 Pro) listed but non-functional or missing
- **Gap**: CLI trailing VS Code Copilot by days-to-weeks on model availability

---

*Digest compiled from github.com/github/copilot-cli public activity. For corrections or additions, comment on the tracking issue.*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-04-10

---

## 1. Today's Highlights

The community is heavily focused on **authentication resilience** with four coordinated PRs addressing token refresh failures that force users to re-login multiple times daily. A major **TypeScript rewrite** (#1707) continues gaining attention as a radical architectural shift from Python to Bun + React Ink. Session management UX emerges as a top user pain point, with both an issue request and an active PR addressing CLI-level session discovery.

---

## 2. Releases

*No releases in the last 24 hours.*

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Signal |
|---|-------|--------------|----------------|
| [#1623](https://github.com/MoonshotAI/kimi-cli/issues/1623) | **Kimi Web spontaneous refreshes disrupting workflow** | Breaks long-running coding sessions and causes context loss; affects Windows users on v1.26.0 | 5 comments, 👍 1 — active discussion with reproduction details |
| [#1814](https://github.com/MoonshotAI/kimi-cli/issues/1814) | **Request: `kimi-cli --list-sessions` for cross-directory session discovery** | Solves frequent "forgot which directory has my session" friction; enables `kimi --session` direct resumption | Filed yesterday, immediately picked up by contributor |
| [#1808](https://github.com/MoonshotAI/kimi-cli/issues/1808) | **Agent forgets "no auto-git-push" constraints** | Safety-critical: users' Git workflows being disrupted by ignored persistent instructions | Filed yesterday — indicates prompt persistence gaps |
| [#1809](https://github.com/MoonshotAI/kimi-cli/issues/1809) | **Empty context triggers token limit errors** | False-positive blocking on v1.16.0; suggests miscalculation in context window accounting | Zero comments — needs triage attention |

---

## 4. Key PR Progress

| # | PR | Technical Summary | Status |
|---|-----|-------------------|--------|
| [#1819](https://github.com/MoonshotAI/kimi-cli/pull/1819) | **fix(auth): 401 retry with token refresh** | Core fix for "Authorization failed" errors; adds reactive recovery path for 15-min token expiry. Validated via 16-min real-token experiment. | 🔥 **Open — foundational** |
| [#1821](https://github.com/MoonshotAI/kimi-cli/pull/1821) | **fix(auth): harden token lifecycle** | Dynamic refresh threshold (`max(300s, expires_in * 0.5)`), atomic credential writes, revocation cleanup. Builds on #1819. | 🔥 **Open — hardening** |
| [#1822](https://github.com/MoonshotAI/kimi-cli/pull/1822) | **fix(auth): cross-process file lock** | Multi-instance coordination (terminal + VS Code + web) via `~/.kimi/credentials/kimi-code.json` locking. Prevents race conditions. | 🔥 **Open — coordination** |
| [#1707](https://github.com/MoonshotAI/kimi-cli/pull/1707) | **refactor: Python → Bun + TypeScript + React Ink** | Complete rewrite: 166 TS/TSX files, ~32k LOC, 37 test files. Terminal-native architecture shift. | 🔄 **Open — architectural** |
| [#1818](https://github.com/MoonshotAI/kimi-cli/pull/1818) | **feat: `list-sessions` command** | Direct response to #1814; enables `kimi-cli --list-sessions` for session discovery without entering TUI. | 🆕 **Open — UX** |
| [#1802](https://github.com/MoonshotAI/kimi-cli/pull/1802) | **fix(soul): keep agent loop alive during background tasks** | Prevents premature loop exit when LLM returns text-only while background agents run; adds wait-for-completion mechanism. | 🆕 **Open — reliability** |
| [#1767](https://github.com/MoonshotAI/kimi-cli/pull/1767) | **feat(yolo-mode): Web UI support** | Extends auto-approve mode to web interface; backend API + frontend toggle. | 🔄 **Open — feature parity** |
| [#1816](https://github.com/MoonshotAI/kimi-cli/pull/1816) | **fix(web,mcp): graceful degradation on MCP load failure** | Prevents Web UI worker crash when MCP server connection fails (port conflicts, TUI→Web switching). | 🆕 **Open — stability** |
| [#1815](https://github.com/MoonshotAI/kimi-cli/pull/1815) | **fix(web): Safari IME composition Enter handling** | Prevents premature message send when committing IME candidates on macOS Safari. | 🆕 **Open — i18n/UX** |
| [#1777](https://github.com/MoonshotAI/kimi-cli/pull/1777) | **feat: three-tier rules system** | Hierarchical rule architecture for agent behavior control (likely project/user/session scoping). | 🔄 **Open — governance** |

---

## 5. Feature Request Trends

| Direction | Evidence | Momentum |
|-----------|----------|----------|
| **Session portability & discovery** | #1814 + #1818 | High — issue filed and PR submitted same day |
| **Persistent agent constraints** | #1808 (git push), implied by #1777 rules system | Medium — safety/alignment demand |
| **Web-TUI parity** | #1767 (YOLO mode), #1816 (MCP resilience) | Active — web interface maturation |
| **Cross-platform IME polish** | #1815 (Safari), #1812 (clipboard) | Emerging — international user base growth |

---

## 6. Developer Pain Points

| Pain Point | Frequency | Current Response |
|------------|-----------|----------------|
| **Authentication fatigue** | 🔴 Critical | 4 PRs in 24h (#1819-1822); 15-min token expiry + no retry path identified as root cause |
| **Session context loss** | 🟡 High | Web refresh bug (#1623), directory-forgotten sessions (#1814/#1818) |
| **Agent instruction drift** | 🟡 High | #1808 — safety constraints forgotten mid-session; rules system (#1777) in progress |
| **Multi-instance coordination** | 🟡 High | #1822 addresses file-level races; VS Code + terminal + web concurrency |
| **Clipboard/IME edge cases** | 🟢 Moderate | #1812 (empty clipboard crash), #1815 (Safari IME) — platform-specific polish |

---

*Digest compiled from github.com/MoonshotAI/kimi-cli activity through 2026-04-09.*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-04-10

---

## 1. Today's Highlights

OpenCode shipped **v1.4.2** with critical TUI and Desktop fixes, while the community rallied around a centralized **Memory Megathread** to tackle persistent RSS growth and heap issues. Plugin ecosystem momentum accelerated with multiple PRs for server endpoints, environment variable handling, and PATH composition—signaling growing demand for deeper programmatic integration.

---

## 2. Releases

| Version | Key Changes |
|---------|-------------|
| **[v1.4.2](https://github.com/anomalyco/opencode/releases/tag/v1.4.2)** | **TUI**: Fixed subagents becoming unclickable until task completion; **Desktop**: Eliminated forced loading delay during app connection startup |
| **[v1.4.1](https://github.com/anomalyco/opencode/releases/tag/v1.4.1)** | **Core**: Fixed `clangd` incorrectly selecting build files as project root in C/C++ workspaces; added GitLab Duo permission prompts; **TUI**: Truncated changelog entry suggests ongoing UI polish |

---

## 3. Hot Issues

| Issue | Why It Matters | Community Reaction |
|-------|--------------|-------------------|
| [#20695](https://github.com/anomalyco/opencode/issues/20695) **Memory Megathread** | Centralized coordination for memory leaks causing multi-GB RSS growth and TUI freezes—actively requesting heap snapshots from users | 31 comments, 20 👍; maintainers explicitly banning LLM-generated solutions |
| [#8501](https://github.com/anomalyco/opencode/issues/8501) **Expand pasted text** | High-demand UX improvement—users want to edit collapsed `[Pasted ~N lines]` snippets | 15 comments, **123 👍** (highest in dataset); clear product-market fit |
| [#4357](https://github.com/anomalyco/opencode/issues/4357) **Tool argument descriptions lost** | Breaks custom tool reliability—LLMs can't understand parameters without descriptions | 15 comments; affects plugin developer experience directly |
| [#20368](https://github.com/anomalyco/opencode/issues/20368) **Coordinator shell + fork mode** | Proposes architectural evolution for subagent orchestration—"natural evolution" of current patterns | 9 comments; signals community thinking ahead on agent scaling |
| [#9099](https://github.com/anomalyco/opencode/issues/9099) **Export server URL as env var** | Enables plugin/child process discovery of dynamic ports—ecosystem interoperability gap | 7 comments, 9 👍; foundational for plugin maturity |
| [#20954](https://github.com/anomalyco/opencode/issues/20954) **Copilot models unusable** | Regression affecting paying Copilot subscribers—models return "not supported" despite valid credentials | 6 comments; duplicates #8598 pattern, suggests provider fragility |
| [#15988](https://github.com/anomalyco/opencode/issues/15988) **"Retry Now" button for rate limits** | Quality-of-life improvement for API throttling—users want manual override | 5 comments, 2 👍; small but high-frequency friction point |
| [#12240](https://github.com/anomalyco/opencode/issues/12240) **macOS white screen / orphaned processes** | Production stability issue—`killall` cleanup strategy fails, causing memory accumulation | 5 comments; root cause identified, needs implementation |
| [#21684](https://github.com/anomalyco/opencode/issues/21684) **Session-specific /tmp subdirectory** | Security hardening request—agents requesting `/tmp` access feels unsafe to users | 4 comments; emerging security consciousness in community |
| [#21761](https://github.com/anomalyco/opencode/issues/21761) **SessionSummary hot loop** | Performance regression—repeated full history loading on every `finish-step` | 2 comments; technical debt with measurable impact |

---

## 4. Key PR Progress

| PR | Description | Impact |
|----|-------------|--------|
| [#16981](https://github.com/anomalyco/opencode/pull/16981) **System messages for non-Anthropic providers** | Fixes "Chat template error: System message must be at beginning" for local models (Qwen, etc.) | Unlocks local/self-hosted model adoption |
| [#20764](https://github.com/anomalyco/opencode/pull/20764) **cross-spawn for Windows-safe launch** | Resolves `ENOENT` errors on Windows SDK startup via `child_process.spawn` compatibility | Windows developer experience critical fix |
| [#21777](https://github.com/anomalyco/opencode/pull/21777) **`/tool`, `/status`, `/exec` server endpoints** | Adds three server APIs for plugin session interaction—external tool injection, status reporting, named tool execution | **Major ecosystem enabler**; depends on #21772 |
| [#21772](https://github.com/anomalyco/opencode/pull/21772) **`external` flag for ToolPart** | Enables plugins to mark injected tool results as external, preventing duplicate execution | Prerequisite for server endpoint PR |
| [#21415](https://github.com/anomalyco/opencode/pull/21415) **Cache Copilot plugin, unblock UI** | Moves Copilot provider setup to background, eliminating TUI freeze on startup | Directly addresses #21296 performance regression |
| [#21774](https://github.com/anomalyco/opencode/pull/21774) **Compose plugin PATH instead of stomping** | Fixes `shell.env` hook overwriting system PATH—restores `/usr/bin` etc. | Critical for plugin reliability; closes #21768 |
| [#21776](https://github.com/anomalyco/opencode/pull/21776) **`bash.commands` hook for timeout exemption** | Allows plugins to register commands that skip bash tool timeouts (e.g., long-running builds) | Developer workflow flexibility |
| [#21756](https://github.com/anomalyco/opencode/pull/21756) **`env` parameter for bash tool** | Direct environment variable injection into spawned processes | Closes #21753; plugin ecosystem maturity |
| [#21719](https://github.com/anomalyco/opencode/pull/21719) **Global events + workspace param refactor** | SDK architecture update for dynamic workspace switching | Foundation for multi-workspace support |
| [#18767](https://github.com/anomalyco/opencode/pull/18767) **Mobile touch optimization** | Preserves desktop experience while adding touch-friendly interactions | Expands addressable platform base |

---

## 5. Feature Request Trends

| Trend | Evidence | Momentum |
|-------|----------|----------|
| **Plugin ecosystem APIs** | #21771, #21777, #21776, #21767, #21756, #11065 | **Very high**—multiple PRs in flight for server endpoints, hooks, and environment handling |
| **Security/sandboxing** | #21684 (session tmp), #21733 (filesystem sandbox), #15739 (session ID propagation) | Growing—users want Claude Code-level isolation |
| **Memory/performance tooling** | #20695 (megathread), #21761 (SessionSummary hot loop), #12240 (orphaned processes) | Sustained—technical debt becoming user-visible |
| **Provider reliability** | #8598, #20954 (Copilot issues), #16981 (non-Anthropic fixes) | Ongoing—multi-provider support strain |
| **UX refinements** | #8501 (expand paste), #15988 (retry button), #15141 (markdown rendering) | Steady—polish gaps in daily workflows |

---

## 6. Developer Pain Points

| Pain Point | Frequency | Severity | Tracking |
|------------|-----------|----------|----------|
| **Memory leaks & RSS explosion** | Very high | Critical | #20695 (centralized), #21761, #12240 |
| **Copilot/GitHub provider fragility** | High | High | #8598, #20954, #21415 |
| **Windows compatibility gaps** | Medium-High | Medium | #20764, #21781, #21782 |
| **Plugin PATH/environment handling** | Medium | Medium | #21768, #21774, #21756, #11065 |
| **TUI rendering issues** | Medium | Medium | #12301 (syntax highlighting), #21397 (transparency), #15141 (markdown) |
| **macOS code signing / process management** | Medium | Medium | #15124, #16307, #11225 |

---

*Digest compiled from anomalyco/opencode GitHub activity on 2026-04-10.*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-04-10

## Today's Highlights

The Pi ecosystem saw intense activity around provider integrations and terminal reliability, with 44 issues and 15 PRs updated in 24 hours. Critical fixes landed for Antigravity model deprecation, Claude API rate limiting errors, and Windows-specific MCP transport crashes. Extension developers gained new capabilities including custom working spinners, process PID tracking, and autocomplete provider APIs.

---

## Releases

*No new releases in the last 24 hours.*

---

## Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|--------------|-------------------|
| [#2815](https://github.com/badlogic/pi-mono/issues/2815) | Antigravity model deprecation error | Breaking change for users on older Antigravity versions; blocks all inference | 9 comments, resolved via PR [#2901](https://github.com/badlogic/pi-mono/pull/2901) |
| [#2943](https://github.com/badlogic/pi-mono/issues/2943) | Claude "out of extra usage" errors | False-positive rate limit errors affecting paying Max plan users | 7 comments, 5 upvotes, urgent fix needed |
| [#2744](https://github.com/badlogic/pi-mono/issues/2744) | CRLF line ending breaks edit tool | Windows developers blocked from using core file editing functionality | 5 comments, marked in-progress |
| [#2940](https://github.com/badlogic/pi-mono/issues/2940) | Terminal scrolling/jumping behavior | Disrupts long-running sessions; mirrors upstream Claude Code issues | 4 comments, indicates shared TUI codebase concerns |
| [#2469](https://github.com/badlogic/pi-mono/issues/2469) | WSL clipboard image paste fails | Cross-platform workflow friction for Windows+WSL developers | 3 comments, open since March 20 |
| [#2941](https://github.com/badlogic/pi-mono/issues/2941) | Request for `/effort` shortcut | Thinking effort buried deep in settings; UX friction for power users | 3 comments, quick-win feature request |
| [#2868](https://github.com/badlogic/pi-mono/issues/2868) | Self-identify coding agent via env var | Enables tools/scripts to detect Pi context, preventing recursive loops | 3 comments, merged |
| [#2995](https://github.com/badlogic/pi-mono/issues/2995) | JSON parse error on PHP codebases | Blocking bug for PHP developers; potentially OpenClaw-related | 1 comment, needs investigation |
| [#2987](https://github.com/badlogic/pi-mono/issues/2987) | No timeout for hung tool calls | Overnight test hangs block sessions indefinitely | 1 comment, reliability concern |
| [#2985](https://github.com/badlogic/pi-mono/issues/2985) | GPT-5 credential cooling down | Provider routing failure for Codex users | 1 comment, operational issue |

---

## Key PR Progress

| # | PR | Feature/Fix | Status |
|---|-----|-------------|--------|
| [#2996](https://github.com/badlogic/pi-mono/pull/2996) | OpenAI Codex service tier support | Enables `/fast` mode via `priority` tier; matches existing OpenAI provider | Open |
| [#2989](https://github.com/badlogic/pi-mono/pull/2989) | Ctrl+Alt key matching in tmux | Fixes terminal key protocol handling for tmux users | Open |
| [#2982](https://github.com/badlogic/pi-mono/pull/2982) | IME composition keydown ignore | Prevents premature Enter submission for CJK input users | Open |
| [#2903](https://github.com/badlogic/pi-mono/pull/2903) | Gemma 4 thinking levels | Updates Google provider for new model's reasoning modes | Merged |
| [#2984](https://github.com/badlogic/pi-mono/pull/2984) | Gemini 3.1 Flash Lite Vertex alias | Fixes routing gap between Google and Vertex providers | Merged |
| [#2975](https://github.com/badlogic/pi-mono/pull/2975) | Extension working spinner override | `ctx.ui.setWorkingSpinner()` for custom extension UX | Merged |
| [#2973](https://github.com/badlogic/pi-mono/pull/2973) | Bash exec PID return | Enables process tracking and management in extensions | Merged |
| [#2904](https://github.com/badlogic/pi-mono/pull/2904) | Complete OpenRouter routing fields | Full TypeScript coverage for provider routing options | Merged |
| [#2861](https://github.com/badlogic/pi-mono/pull/2861) | Flash-lite thinking budget fix | Corrects 128→512 minimum budget per Google docs | Merged |
| [#2969](https://github.com/badlogic/pi-mono/pull/2969) | fast-xml-parser security bump | Resolves 16 high-severity CVE findings | Merged |

---

## Feature Request Trends

1. **Thinking/Reasoning Controls** — Multiple requests for easier access to thinking effort settings (`/effort` shortcut, [#2941](https://github.com/badlogic/pi-mono/issues/2941)); model capability query APIs ([#2922](https://github.com/badlogic/pi-mono/issues/2922))

2. **Extension API Expansion** — Custom `@` autocomplete providers ([#2983](https://github.com/badlogic/pi-mono/issues/2983)), working spinner customization ([#2975](https://github.com/badlogic/pi-mono/pull/2975)), PID tracking for process management ([#2973](https://github.com/badlogic/pi-mono/pull/2973))

3. **Cross-Platform Path Handling** — `~` and `$HOME` expansion in settings ([#2986](https://github.com/badlogic/pi-mono/issues/2986)), session CWD mutation ([#2992](https://github.com/badlogic/pi-mono/issues/2992))

4. **Context File Discovery Configurability** — Search scope, filenames, exclusions ([#2717](https://github.com/badlogic/pi-mono/issues/2717))

---

## Developer Pain Points

| Category | Issue | Frequency |
|----------|-------|-----------|
| **Windows Compatibility** | CRLF line endings, WSL clipboard, MCP EPIPE errors, IME input | High — 4+ distinct issues |
| **Provider Reliability** | Claude rate limits, Antigravity deprecation, GPT-5 credential cooling | High — blocking operational issues |
| **Terminal/TUI Stability** | Scrolling/jumping, stack overflow on long sessions, hung tool timeouts | Medium-High — affects daily UX |
| **Configuration Ergonomics** | Buried settings, lack of path expansion, multiple `--append-system-prompt` override | Medium — friction for power users |
| **Unicode/Binary Handling** | ByteString errors on Unicode >255, sanitizeBinaryOutput crashes | Medium — edge cases in production |

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-04-10

## 1. Today's Highlights

The v0.14.2 nightly release landed with critical UI fixes for tool call leaks and input race conditions. The community is actively pushing toward better sub-agent orchestration with parallel execution PRs and new permission controls. A persistent theme emerges around QWEN.md rule adherence—multiple reports indicate the CLI systematically ignores project-specific instructions, creating friction for power users.

---

## 2. Releases

**v0.14.2-nightly.20260409.f208801b0** — [Release Notes](https://github.com/QwenLM/qwen-code/releases/tag/v0.14.2-nightly.20260409.f208801b0)

| PR | Change | Author |
|---|---|---|
| [#2891](https://github.com/QwenLM/qwen-code/pull/2891) | Remove dead `dirs` state and unused hook parameter from `InputPrompt` | @chinesepowered |
| [#2872](https://github.com/QwenLM/qwen-code/pull/2872) | Prevent tool call UI leak and fix Enter/accept buffer race condition | @wenshao |

Both fixes address stability issues in the input handling layer—particularly important for users experiencing truncated responses or unexpected submission behavior during fast-paced editing sessions.

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Signal |
|---|-------|--------------|----------------|
| [#1922](https://github.com/QwenLM/qwen-code/issues/1922) | **Edit tool fails to modify files** (CLOSED) | Regression in v0.10.5 broke core file editing—fixed but indicates test coverage gaps | 12 comments, resolved |
| [#2973](https://github.com/QwenLM/qwen-code/issues/2973) | Poor system prompt adherence | Critical for agent reliability; model ignores explicit instructions | 5 comments, active |
| [#674](https://github.com/QwenLM/qwen-code/issues/674) | CLI ignores QWEN.md rules | Long-standing P1 bug affecting all users with custom rules; 7 months old | 5 comments, 👍 1 |
| [#3037](https://github.com/QwenLM/qwen-code/issues/3037) | `qwen3.6-plus` listed but API rejects it | Model catalog/API drift breaks `/model` selection UX | 4 comments, new |
| [#3053](https://github.com/QwenLM/qwen-code/issues/3053) | Dark theme text invisible in iTerm2 | Accessibility/usability blocker for macOS terminal users | 3 comments, new |
| [#3019](https://github.com/QwenLM/qwen-code/issues/3019) | Subagent skill triggering unreliable | Core agent orchestration feature fails intermittently | 3 comments, v0.14.1 |
| [#3049](https://github.com/QwenLM/qwen-code/issues/3049) | WriteFile fails on large HTML with missing `file_path` | Truncation from `max_tokens` causes malformed tool calls | 2 comments, new |
| [#3043](https://github.com/QwenLM/qwen-code/issues/3043) | Request for `/batch` parallel operations | Gap vs. competitors for large-scale refactoring workflows | 2 comments, P2, 👍 1 |
| [#3047](https://github.com/QwenLM/qwen-code/issues/3047) | "详细" label in UI is meaningless | Polish issue reflecting UX debt in internationalization | 2 comments, new |
| [#3067](https://github.com/QwenLM/qwen-code/issues/3067) | "Allow always" permission not persisting in compact mode | Trust/UX friction—users repeatedly prompted for same approvals | 0 comments, new (has fix PR) |

---

## 4. Key PR Progress

| # | PR | Feature/Fix | Status |
|---|-----|-------------|--------|
| [#3034](https://github.com/QwenLM/qwen-code/pull/3034) | LSP diagnostics caching + document refresh fallback | Eliminates silent LSP failures by caching `publishDiagnostics` and triggering re-analysis | Open |
| [#2911](https://github.com/QwenLM/qwen-code/pull/2911) | ConfigTool for programmatic config read/write | Enables agents to switch models mid-task without user interruption; critical for multi-stage workflows | Open |
| [#2864](https://github.com/QwenLM/qwen-code/pull/2864) | Intelligent tool parallelism (Kind-based batching) | Read-only tools now execute in parallel—major latency win for grep/file read chains | Open |
| [#3064](https://github.com/QwenLM/qwen-code/pull/3064) | `disallowedTools` field for agent definitions | Security/control feature: agents can be restricted from specific tools/MCP servers | Open |
| [#3069](https://github.com/QwenLM/qwen-code/pull/3069) | Persist "Allow always" in compact mode | Fixes [#3067](https://github.com/QwenLM/qwen-code/issues/3067)—permission UX fix | Open |
| [#3066](https://github.com/QwenLM/qwen-code/pull/3066) | Propagate approval mode to sub-agents | Sub-agents inherit parent session approval settings instead of defaulting | Open |
| [#2550](https://github.com/QwenLM/qwen-code/pull/2550) | Fix VS Code input lag in long conversations | `React.memo` optimization for O(n) re-render issue causing 5+ second delays | Open |
| [#2871](https://github.com/QwenLM/qwen-code/pull/2871) | Queue input editing (↑/ESC to pop queued messages) | Allows editing queued messages during streaming—reduces typo waste | Open |
| [#2886](https://github.com/QwenLM/qwen-code/pull/2886) | Agent Team experimental feature | Parallel sub-agent coordination for complex task decomposition | Open |
| [#3045](https://github.com/QwenLM/qwen-code/pull/3045) | Preserve tab characters in pasted content | Fixes data corruption when pasting TSV/Excel data | Open |

---

## 5. Feature Request Trends

| Direction | Evidence | Priority Signal |
|-----------|----------|---------------|
| **Session/chat management** | [#3032](https://github.com/QwenLM/qwen-code/issues/3032) (delete chats), [#2999](https://github.com/QwenLM/qwen-code/issues/2999) (rename sessions), [#3025](https://github.com/QwenLM/qwen-code/issues/3025) (iflow-style `/chat` command) | High—3 requests in 48h |
| **Batch/parallel operations** | [#3043](https://github.com/QwenLM/qwen-code/issues/3043) (`/batch`), [#2864](https://github.com/QwenLM/qwen-code/pull/2864) (tool parallelism) | Emerging—competitive parity need |
| **Better copy/export UX** | [#3052](https://github.com/QwenLM/qwen-code/issues/3052) (response copy button), [#3059](https://github.com/QwenLM/qwen-code/issues/3059) (prompt enhancement) | Polish tier |
| **Sub-agent robustness** | [#3019](https://github.com/QwenLM/qwen-code/issues/3019), [#3067](https://github.com/QwenLM/qwen-code/issues/3067), [#3064](https://github.com/QwenLM/qwen-code/pull/3064), [#3066](https://github.com/QwenLM/qwen-code/pull/3066) | Critical—core architecture |
| **External editor integration** | [#3009](https://github.com/QwenLM/qwen-code/issues/3009) (WSL+VS Code), [#3068](https://github.com/QwenLM/qwen-code/issues/3068) (newline→Enter bug in `/agent create`) | Workflow friction |

---

## 6. Developer Pain Points

| Pain Point | Frequency | Impact | Tracking |
|------------|-----------|--------|----------|
| **QWEN.md rules ignored** | 4+ issues ([#674](https://github.com/QwenLM/qwen-code/issues/674), [#494](https://github.com/QwenLM/qwen-code/issues/494), [#1301](https://github.com/QwenLM/qwen-code/issues/1301), [#2196](https://github.com/QwenLM/qwen-code/issues/2196), [#2973](https://github.com/QwenLM/qwen-code/issues/2973)) | Severe—breaks project customization | Long-standing, P1 tagged |
| **Permission persistence failures** | [#3067](https://github.com/QwenLM/qwen-code/issues/3067) + fix PR | Moderate—repetitive interruptions | In progress |
| **Model selection/API drift** | [#3037](https://github.com/QwenLM/qwen-code/issues/3037) | Moderate—confusing UX | New |
| **Terminal theme compatibility** | [#3053](https://github.com/QwenLM/qwen-code/issues/3053) | Moderate—accessibility | New |
| **Large file/tool call truncation** | [#3049](https://github.com/QwenLM/qwen-code/issues/3049) | Moderate—data loss risk | New |
| **VS Code companion stability** | [#3055](https://github.com/QwenLM/qwen-code/issues/3055), [#2550](https://github.com/QwenLM/qwen-code/pull/2550) |

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*