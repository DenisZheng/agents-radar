# AI CLI Tools Community Digest 2026-04-25

> Generated: 2026-04-25 00:15 UTC | Tools covered: 8

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
## 2026-04-25 Community Digest Analysis

---

## 1. Ecosystem Overview

The AI CLI tooling landscape has matured into a six-way competitive field with distinct architectural philosophies: Anthropic's Claude Code leads in enterprise CI/CD integration, OpenAI Codex pursues a Rust-rewritten app-server model with heavy safety infrastructure, Google's Gemini CLI emphasizes local-first and offline capabilities, GitHub Copilot CLI leverages its IDE ecosystem integration, while Chinese-market tools (Kimi, Qwen) and the open-source OpenCode/Pi chase feature parity with aggressive iteration. All tools now grapple with shared challenges: MCP ecosystem standardization, session state durability across long-running workflows, and the tension between interactive TUI polish and headless automation demands. The pace of releases is accelerating—four tools shipped same-day patches—indicating heightened competitive pressure and reduced tolerance for regressions.

---

## 2. Activity Comparison

| Tool | Issues (24h) | PRs (24h) | Releases (24h) | Release Velocity | Notable |
|:---|:---|:---|:---|:---|:---|
| **Claude Code** | 50 | 3 | 1 (v2.1.120) | Weekly stable | Critical regression in resume; low external PR activity |
| **OpenAI Codex** | ~15 tracked | 10+ | 3 (rust-v0.125.0 + 2 alphas) | Daily alpha → stable | Highest PR velocity; deep infrastructure work |
| **Gemini CLI** | ~10 tracked | 10 | 2 (v0.40.0-preview.3, v0.39.1) | Daily preview patches | Emergency revert (#25941) shows reactive posture |
| **GitHub Copilot CLI** | 50 | 1 | 3 (v1.0.36, v1.0.36-0, v1.0.36-1) | Same-day patch chain | Release-heavy, PR-light; rapid UX iteration |
| **Kimi Code CLI** | ~10 tracked | 10 | 1 (v1.39.0) | Weekly stable | Strong community PR response (same-day author PRs) |
| **OpenCode** | ~15 tracked | 10 | 2 (v1.14.23–v1.14.24) | Daily patches | DeepSeek stabilization dominates traffic |
| **Pi** | ~10 tracked | 10 | 2 (v0.70.1–v0.70.2) | Same-day patch chain | DeepSeek reasoning fires rapid fixes |
| **Qwen Code** | ~10 tracked | 10 | 1 (v0.15.2) | Weekly stable + nightly | Community policy crisis (#3203) overshadows engineering |

---

## 3. Shared Feature Directions

| Requirement | Tools | Specific Needs | Convergence Signal |
|:---|:---|:---|:---|
| **Headless / CI-CD automation** | Claude Code (`claude ultrareview`), OpenAI Codex (app-server), OpenCode (`opencode run`), Qwen Code (`--json-schema`), Kimi (`yolo`/`afk` modes) | JSON output, non-interactive approval, session resumption, structured schema enforcement | **Strong convergence** — all tools building "agent as backend" |
| **Session state durability** | Claude Code (resume crashes), OpenAI Codex (compaction failures), OpenCode (session archival), Qwen Code (`/branch`, `/rewind`), Kimi (session resume data loss) | Fork/branch/rewind semantics, pagination, hydration reliability | **Emerging standard** — Claude Code's model becoming reference |
| **MCP ecosystem maturity** | Claude Code (ESC kills servers), OpenAI Codex (Guardian routing, lifecycle), Gemini CLI (>128 tools ceiling), Copilot CLI (subagent MCP gaps), Qwen Code (HTTP transport), Kimi (schema divergence) | Lifecycle management, transport diversity (stdio/SSE/HTTP), tool scoping, security review layers | **Fragmented but urgent** — protocol gaps blocking scale |
| **Local / offline operation** | Gemini CLI (Ollama routing), OpenCode (local models), Pi (timeout controls), Qwen Code (local config), Kimi (local model) | Self-hosted inference, privacy-preserving compression, BYOK without cloud dependency | **Differentiation vector** — Gemini leading, others catching up |
| **Permission / safety automation** | Claude Code (`sandbox.excludedCommands`), OpenAI Codex (`PermissionProfile` migration), OpenCode (YOLO mode), Qwen Code (YOLO dangerous-pattern stripping), Kimi (approval notifications) | Granular auto-approve, destructive-operation guards, audit trails | **Converging on "safe YOLO"** — not binary on/off |
| **Cost transparency & control** | Claude Code (double-billing, spike after `/compact`), Qwen Code (token pricing, free tier crisis), Kimi (error token consumption), Pi (context window misalignment) | Per-request breakdowns, quota visibility, error-token refunds, spend caps | **Trust gap** — billing opacity becoming competitive liability |

---

## 4. Differentiation Analysis

| Dimension | Leader | Approach | Target User |
|:---|:---|:---|:---|
| **Enterprise integration depth** | Claude Code | `claude ultrareview` JSON output, Bedrock/AWS focus, sandboxing promises | Enterprise DevOps, security-conscious orgs |
| **Infrastructure / safety engineering** | OpenAI Codex | Rust rewrite, Guardian review layers, `PermissionProfile` system, gRPC telemetry | Large-scale deployments, regulated industries |
| **Local-first / privacy** | Gemini CLI | Ollama routing, offline compression, versioned backups | Privacy-sensitive developers, air-gapped environments |
| **IDE ecosystem lock-in** | GitHub Copilot CLI | VS Code extension parity, GitHub auth integration, `.github/instructions/` | Existing Copilot IDE subscribers |
| **Open-source extensibility** | OpenCode | Plugin event system, background subagents, remote control (`opencode serve`), Roslyn/LSP expansion | Power users, customization-heavy workflows |
| **Provider ecosystem breadth** | Pi | Per-provider retry/timeout controls, 10+ provider adapters, extension API | Multi-model power users, self-hosters |
| **Chinese market / cost efficiency** | Qwen Code, Kimi | Aggressive pricing, local model optimization, i18n depth | China-based developers, budget-conscious users |
| **Agent architecture innovation** | Kimi | RalphFlow convergence detection, ACP notifications, strict schema validation | Research-oriented automation builders |

**Technical approach divergence:**
- **Claude Code / Copilot CLI**: Tightly coupled to proprietary cloud APIs, optimizing for reliability and integration
- **OpenAI Codex / Gemini CLI**: Heavy infrastructure investment (Rust, app-server, memory subsystems) for scale
- **OpenCode / Pi**: Maximal provider flexibility, treating models as interchangeable commodities
- **Qwen / Kimi**: Vertical integration with own model families, optimizing end-to-end stack

---

## 5. Community Momentum & Maturity

| Tier | Tools | Evidence |
|:---|:---|:---|
| **Highest momentum** | OpenAI Codex, Gemini CLI, OpenCode | Codex: 10+ PRs/day, deep architectural refactors; Gemini: daily preview iterations, emergency response; OpenCode: rapid DeepSeek stabilization, active beta PRs merging |
| **Stable mature** | Claude Code, Pi, Kimi | Claude Code: established patterns but low external contribution, regression sensitivity; Pi: consistent same-day fixes, disciplined release cadence; Kimi: responsive community PRs, systematic hardening |
| **Volatile / pressured** | Qwen Code, Copilot CLI | Qwen: policy crisis (#3203, 119 comments) risks community trust; Copilot CLI: release velocity masks low PR activity, platform equity gaps (Windows, Alpine) |

**Maturity indicators:**
- **Claude Code**: Longest-running unresolved bugs (#13480 oversized image, Sept 2025) suggest scaling challenges vs. feature velocity
- **OpenAI Codex**: Stacked 4-PR permission migration (#19393–#19395) indicates systematic technical debt payoff
- **Gemini CLI**: Emergency revert + fix cycle (#25941 → #25943) shows operational maturity in incident response
- **OpenCode**: Same-day DeepSeek fixes (v1.14.24) demonstrate provider-adaptation agility

---

## 6. Trend Signals

| Trend | Evidence | Strategic Value for Developers |
|:---|:---|:---|
| **"Agent as backend" commoditization** | Headless modes, JSON APIs, structured output schemas across 6+ tools | Evaluate tools by automation API completeness, not just chat UX; expect CI-native AI review to become table stakes |
| **MCP as the new plugin standard** | Every tool integrating, but transport/lifecycle gaps persist | Invest in MCP server development; demand HTTP/SSE transport from vendors; watch for protocol governance emergence |
| **Reasoning model adaptation churn** | DeepSeek V4 `reasoning_content` round-trip bugs hit OpenCode, Pi, Qwen, Claude Code simultaneously | Abstract reasoning-content handling in your integrations; expect schema drift with each new reasoning model release |
| **Session management as competitive battleground** | Branch/rewind/fork in Qwen, Claude Code, OpenCode; pagination in Codex; archival in OpenCode | Prioritize tools with durable session primitives for long-running workflows; data loss is becoming unacceptable |
| **Safety vs. velocity tension** | YOLO mode demand (#11831, 20 👍) vs. dangerous-pattern stripping (#3156); Guardian routing (#19467) vs. false flags (#19204) | Design for "safe automation" — granular permission profiles, not binary approve-all; audit trails for compliance |
| **Windows/platform equity as maturity signal** | Chronic gaps in Copilot CLI (PS 5.1, Alpine segfault), Claude Code (Git for Windows dependency removal just now), Gemini (backspace regressions) | Windows and container-native developers should weight platform parity heavily in tool selection; "works on macOS" is no longer sufficient |
| **Token economics transparency as trust factor** | Qwen free tier crisis, Claude Code double-billing, Kimi error-token concerns | Demand per-request cost visibility; budget tooling becoming critical for team adoption |

---

*Report compiled from 8 community digests covering 150+ issues, 50+ PRs, and 15 releases for 2026-04-25.*

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
*Data as of 2026-04-25 | Source: github.com/anthropics/skills*

---

## 1. Top Skills Ranking (Most-Discussed PRs)

| Rank | Skill | PR | Status | Description | Discussion Focus |
|:---|:---|:---|:---|:---|:---|
| 1 | **Document Typography** | [#514](https://github.com/anthropics/skills/pull/514) | 🟡 Open | Typographic quality control for AI-generated documents—prevents orphans, widows, and numbering misalignment | Universal applicability; addresses pain point in every document Claude produces |
| 2 | **Skill Quality & Security Analyzers** | [#83](https://github.com/anthropics/skills/pull/83) | 🟡 Open | Meta-skills evaluating skill structure, documentation, security posture, and best practices | First systematic quality framework for the skills marketplace itself |
| 3 | **Frontend Design** (Improved) | [#210](https://github.com/anthropics/skills/pull/210) | 🟡 Open | Revised for clarity and single-conversation actionability; more specific behavioral steering | Token efficiency vs. comprehensiveness tradeoff |
| 4 | **ODT Skill** | [#486](https://github.com/anthropics/skills/pull/486) | 🟡 Open | OpenDocument creation, template filling, and ODT-to-HTML conversion | Enterprise/open-source document workflow demand |
| 5 | **Skill-Creator Validation** | [#539](https://github.com/anthropics/skills/pull/539) | 🟡 Open | Pre-parse YAML validation to catch unquoted descriptions with special characters | Developer experience; silent failure prevention |
| 6 | **DOCX Tracked Changes Fix** | [#541](https://github.com/anthropics/skills/pull/541) | 🟡 Open | Fixes `w:id` collision causing document corruption when adding tracked changes to bookmarked documents | Technical depth; OOXML shared ID space expertise |
| 7 | **Testing Patterns** | [#723](https://github.com/anthropics/skills/pull/723) | 🟡 Open | Full testing stack: Testing Trophy philosophy, AAA pattern, React Testing Library, integration patterns | Engineering rigor; fills critical gap in code quality skills |
| 8 | **SAP-RPT-1-OSS Predictor** | [#181](https://github.com/anthropics/skills/pull/181) | 🟡 Open | SAP's open-source tabular foundation model for predictive analytics on SAP business data | Enterprise ERP integration; specialized vertical |

---

## 2. Community Demand Trends (From Issues)

| Trend | Evidence | Implication |
|:---|:---|:---|
| **Org-wide Skill Distribution** | [#228](https://github.com/anthropics/skills/issues/228) (9 comments, 5 👍) | Enterprise teams need centralized skill libraries, not file-sharing workarounds |
| **Skills-as-MCPs** | [#16](https://github.com/anthropics/skills/issues/16) (4 comments) | Community wants standardized API packaging—algorithmic-art → `generateAlgorithmArt({...})` |
| **Security & Trust Boundaries** | [#492](https://github.com/anthropics/skills/issues/492) (4 comments, 2 👍) | Namespace impersonation risk demands official verification/attestation |
| **Non-Anthropic API Support** | [#29](https://github.com/anthropics/skills/issues/29) (4 comments) | AWS Bedrock and other providers need skill compatibility |
| **Skill Reliability & Debugging** | [#556](https://github.com/anthropics/skills/issues/556) (6 comments, 6 👍), [#62](https://github.com/anthropics/skills/issues/62) (10 comments) | Zero-trigger eval rates and disappearing skills indicate platform stability gaps |
| **Agent Governance & Safety** | [#412](https://github.com/anthropics/skills/issues/412) (4 comments) | Policy enforcement, threat detection, audit trails for multi-agent systems |

---

## 3. High-Potential Pending Skills

| Skill | PR | Why It May Land Soon | Blocker Risk |
|:---|:---|:---|:---|
| **Document Typography** | [#514](https://github.com/anthropics/skills/pull/514) | Solves universal problem; no external dependencies; clean scope | None apparent |
| **Testing Patterns** | [#723](https://github.com/anthropics/skills/pull/723) | Large, well-structured contribution; fills obvious marketplace gap | Scope review (comprehensive vs. modular) |
| **ServiceNow Platform** | [#568](https://github.com/anthropics/skills/pull/568) | Broad enterprise coverage; actively maintained (updated 2026-04-23) | Breadth may require splitting |
| **Sensory (macOS AppleScript)** | [#806](https://github.com/anthropics/skills/pull/806) | Native automation alternative to screenshot-based computer use; two-tier permission model | Accessibility permission UX complexity |
| **Xiaomi Robot Vacuum (`xiao`)** | [#997](https://github.com/anthropics/skills/pull/997) | Agent-ready CLI design; IoT/home automation expansion | Niche hardware scope |

---

## 4. Skills Ecosystem Insight

> **The community's most concentrated demand is for enterprise-grade reliability and distribution infrastructure**—org-wide sharing, verified namespaces, stable skill persistence, and cross-platform API compatibility—rather than more individual skill varieties, indicating the ecosystem is maturing from content growth to operational scale.

---

---

# Claude Code Community Digest — 2026-04-25

---

## 1. Today's Highlights

Anthropic shipped **v2.1.120** with two significant changes: Windows users no longer need Git for Windows (PowerShell is now the fallback shell), and the new `claude ultrareview [target]` subcommand enables non-interactive code review from CI/scripts with JSON output support. However, the release introduced a critical regression — multiple crash-on-resume bugs (`UKH`/`g9H is not a function`) are hitting Linux and macOS users who rely on `claude --resume` or `claude -c`.

---

## 2. Releases

### [v2.1.120](https://github.com/anthropics/claude-code/releases/tag/v2.1.120)

| Change | Impact |
|--------|--------|
| **Windows shell fallback to PowerShell** | Removes Git for Windows dependency; lowers barrier to entry for Windows developers |
| **`claude ultrareview [target]` CLI subcommand** | Enables CI/CD integration for automated code review; `--json` flag for machine-readable output |

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|--------------|-------------------|
| [#13480](https://github.com/anthropics/claude-code/issues/13480) | **Oversized image permanently breaks conversation** — no recovery without new chat | Data-loss severity; affects core reliability | 58 comments, 62 👍 — longest-running open bug with active repro |
| [#42776](https://github.com/anthropics/claude-code/issues/42776) | **Claude Desktop fails to relaunch on Windows** — orphaned process file lock | Blocks daily workflow for Windows Desktop users | 56 comments, marked `invalid` but persists; community frustrated by dismissal |
| [#10747](https://github.com/anthropics/claude-code/issues/10747) | **Delete/rename chats in VS Code extension** | Basic IDE hygiene feature gap vs. CLI | 40 comments, 50 👍 — high-engagement enhancement, cross-platform parity request |
| [#14362](https://github.com/anthropics/claude-code/issues/14362) | **Sonnet double-billing: consumes both "All models" and "Sonnet-only" quotas** | Direct cost impact for API users | 11 comments, 13 👍; labeled `area:cost` — financial trust issue |
| [#51828](https://github.com/anthropics/claude-code/issues/51828) | **Scrollback duplication on terminal resize persists (2.1.116)** | TUI polish regression affecting readability | 8 comments, 9 👍; VS Code + macOS specific, ongoing since .116 |
| [#49479](https://github.com/anthropics/claude-code/issues/49479) | **ESC during MCP tool call kills all Python stdio MCPs** (regression from 2.1.104) | Breaks MCP ecosystem reliability | 5 comments, 2 👍; marked duplicate but has 30-line repro; urgency in title |
| [#50100](https://github.com/anthropics/claude-code/issues/50100) | **Bedrock: `thinking.type.enabled` error with Opus 4.7** | Blocks latest model access for AWS users | 5 comments, 5 👍; `api:bedrock` + `area:model` — enterprise blocker |
| [#52819](https://github.com/anthropics/claude-code/issues/52819) | **`/ultrareview` crash burns free credit** | New feature reliability + fairness concern | 4 comments, 2 👍; directly tied to v2.1.120 launch |
| [#53012](https://github.com/anthropics/claude-code/issues/53012) | **`sandbox.excludedCommands` network enforcement not exempted** | Security model documentation/implementation gap | 3 comments; `area:sandbox` — trust in sandboxing promises |
| [#53044](https://github.com/anthropics/claude-code/issues/53044) / [#53064](https://github.com/anthropics/claude-code/issues/53064) / [#53041](https://github.com/anthropics/claude-code/issues/53041) / [#53053](https://github.com/anthropics/claude-code/issues/53053) | **Resume crash regression: `UKH`/`g9H is not a function`** | **Critical v2.1.120 regression** — breaks core session continuity | Multiple reports within 24h; workarounds involve interactive `/resume` vs. CLI flags |

---

## 4. Key PR Progress

| # | PR | Description | Status |
|---|-----|-------------|--------|
| [#52668](https://github.com/anthropics/claude-code/pull/52668) | **fix(hookify): include hook-specific output for warnings** | Adds `additionalContext` to Hookify warn actions on PreToolUse/PostToolUse; fixes #40380 | Open — hook system reliability |
| [#52666](https://github.com/anthropics/claude-code/pull/52666) | **docs: fix README brand casing** | `Github` → `GitHub`, `MacOS` → `macOS`; trivial but signals maintenance attention | Open — docs hygiene |
| [#52650](https://github.com/anthropics/claude-code/pull/52650) | **Claude/farm bureau benefits tool** | Opaque title, no description — likely internal feature branch | Open — requires clarification |

*Note: Only 3 PRs updated in the 24h window; low external contributor activity.*

---

## 5. Feature Request Trends

| Trend | Evidence | Momentum |
|-------|----------|----------|
| **Programmatic / headless Claude Code** | [#53049](https://github.com/anthropics/claude-code/issues/53049) (external message injection API), [#47744](https://github.com/anthropics/claude-code/issues/47744) (Team Project knowledge sync API), `claude ultrareview` CLI launch | Strong — CI/CD integration, automation, and "Claude as backend" use cases |
| **VS Code extension parity with CLI** | [#10747](https://github.com/anthropics/claude-code/issues/10747) (chat management), [#53055](https://github.com/anthropics/claude-code/issues/53055) (keybinding fixes) | Moderate — IDE users want full CLI feature set |
| **Bedrock model compatibility agility** | [#50100](https://github.com/anthropics/claude-code/issues/50100), [#51439](https://github.com/anthropics/claude-code/issues/51439), [#51711](https://github.com/anthropics/claude-code/issues/51711) — all `thinking.type` schema mismatches | Urgent — AWS inference profile ARN changes outpace client adaptation |
| **Session resilience & state management** | Resume crash cluster, [#53061](https://github.com/anthropics/claude-code/issues/53061) (branch rename UI staleness) | Critical — fundamental to long-running workflows |

---

## 6. Developer Pain Points

| Pain Point | Frequency | Severity | Tracking |
|------------|-----------|----------|----------|
| **Session resume reliability** | 5+ reports in 24h (v2.1.120 regression) | 🔴 Critical | [#53044](https://github.com/anthropics/claude-code/issues/53044), [#53064](https://github.com/anthropics/claude-code/issues/53064), [#53041](https://github.com/anthropics/claude-code/issues/53041), [#53053](https://github.com/anthropics/claude-code/issues/53053) |
| **Bedrock API schema drift** | 3 related issues | 🔴 High | [#50100](https://github.com/anthropics/claude-code/issues/50100), [#51439](https://github.com/anthropics/claude-code/issues/51439), [#51711](https://github.com/anthropics/claude-code/issues/51711) |
| **`/ultrareview` billing fairness** | 2 reports + feature launch context | 🟡 Medium-High | [#52819](https://github.com/anthropics/claude-code/issues/52819), [#53010](https://github.com/anthropics/claude-code/issues/53010) |
| **MCP ecosystem fragility** | ESC-kills-servers, orphaned subprocesses, silent wedges | 🟡 Medium | [#49479](https://github.com/anthropics/claude-code/issues/49479), [#52859](https://github.com/anthropics/claude-code/issues/52859), [#53059](https://github.com/anthropics/claude-code/issues/53059) |
| **TUI rendering (scrollback/resize)** | Persistent across versions | 🟡 Medium | [#51828](https://github.com/anthropics/claude-code/issues/51828), [#52945](https://github.com/anthropics/claude-code/issues/52945) |
| **Quota/cost transparency** | Double-billing, spike after `/compact` | 🟡 Medium | [#14362](https://github.com/anthropics/claude-code/issues/14362), [#53018](https://github.com/anthropics/claude-code/issues/53018) |

---

*Digest compiled from 50 issues, 3 PRs, and 1 release in the 24h window ending 2026-04-25.*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-04-25

---

## 1. Today's Highlights

The Codex team shipped **rust-v0.125.0** with substantial app-server infrastructure upgrades including Unix socket transport and remote plugin management, while the permissions system undergoes a sweeping modernization across four stacked PRs to replace legacy `SandboxPolicy` with `PermissionProfile`. Meanwhile, the community continues to grapple with **GPT-5.5 context window inconsistencies** and **Windows-specific app stability issues** that dominate the top issue reports.

---

## 2. Releases

| Version | Type | Key Changes |
|---------|------|-------------|
| **[rust-v0.125.0](https://github.com/openai/codex/releases/tag/rust-v0.125.0)** | Stable | Major app-server enhancements: Unix socket transport, pagination-friendly resume/fork, sticky environments, remote thread config/store plumbing, and remote plugin installation/upgrade support. |
| **[rust-v0.126.0-alpha.1](https://github.com/openai/codex/releases/tag/rust-v0.126.0-alpha.1)** | Pre-release | No detailed notes provided. |
| **[rust-v0.125.0-alpha.2](https://github.com/openai/codex/releases/tag/rust-v0.125.0-alpha.2)** / **[alpha.3](https://github.com/openai/codex/releases/tag/rust-v0.125.0-alpha.3)** | Pre-release | Incremental alpha builds leading to v0.125.0 stable. |

---

## 3. Hot Issues

| # | Title | Status | Why It Matters | Community Signal |
|---|-------|--------|--------------|----------------|
| **[#10450](https://github.com/openai/codex/issues/10450)** | Remote Development in Codex Desktop App | 🔴 OPEN | The most-upvoted open feature request (603 👍, 164 comments). Users want VS Code Remote-SSH parity for the desktop app, critical for resource-constrained local machines and server-side development workflows. | Strong demand; referenced as blocker for Mac laptop users seeking Linux alternatives |
| **[#9544](https://github.com/openai/codex/issues/9544)** | Error running remote compact task: stream disconnected before completion | 🟢 CLOSED | Root cause of session corruption during context compaction. Fix validates network resilience for long-running operations. | 38 comments show extensive debugging; closure indicates fix shipped |
| **[#13917](https://github.com/openai/codex/issues/13917)** | Codex desktop on Windows cannot start PowerShell host in session (8009001d) | 🔴 OPEN | Complete blocker for Windows PowerShell workflows — cryptographic provider error prevents shell initialization. | 36 comments, no upvotes suggests reporting friction; affects Go/Pro conversion funnel |
| **[#16857](https://github.com/openai/codex/issues/16857)** | High GPU usage while "thinking" due to tiny useless animation | 🔴 OPEN | Performance regression on Apple Silicon — unnecessary GPU burn for cosmetic animation undermines battery life. | 19 👍, 17 comments; user-provided profiling data |
| **[#14549](https://github.com/openai/codex/issues/14549)** | Windows: Ctrl+M voice dictation shortcut conflicts with window minimize | 🔴 OPEN | Global hotkey collision breaks accessibility feature and standard Windows conventions. | 8 👍, 16 comments; Lenovo hardware specificity noted |
| **[#18341](https://github.com/openai/codex/issues/18341)** | Mac app shows persistent blurred overlay below composer on Intel Mac | 🔴 OPEN | Visual artifact on deprecated Intel architecture suggests rendering pipeline divergence between ARM/x86. | 8 👍; alpha build regression |
| **[#11023](https://github.com/openai/codex/issues/11023)** | Codex desktop app for Linux | 🔴 OPEN | Second-highest feature request (63 👍). Cross-platform parity gap drives users to competing tools. | Explicitly linked to #10450 (Mac thermal issues) as migration motivation |
| **[#18333](https://github.com/openai/codex/issues/18333)** | Codex Desktop repeatedly starts full MCP stacks for new sessions/subagents | 🟢 CLOSED | Severe memory/startup degradation from MCP server lifecycle mismanagement. | 14 comments, 6 👍; marked as regression with fix validated |
| **[#19204](https://github.com/openai/codex/issues/19204)** | Flagged while already being verified | 🔴 OPEN | Safety pipeline race condition creates false-positive blocks on legitimate Pro users. | 18 👍, 13 comments; trust/safety friction |
| **[#19185](https://github.com/openai/codex/issues/19185)** | config.toml context window settings are not respected | 🟢 CLOSED | Configuration system silently ignores user-specified context limits — fundamental contract breakage. | 17 👍, 12 comments; rapid closure suggests hotfix |

---

## 4. Key PR Progress

| # | Title | What It Does | Impact |
|---|-------|--------------|--------|
| **[#19449](https://github.com/openai/codex/pull/19449)** | permissions: remove legacy read-only access modes | Eliminates transitional `ReadOnlyAccess`/`SandboxPolicy` shapes; consolidates partial-read into `FileSystemSandboxPolicy` | Foundation for cleaner security model; reduces policy confusion |
| **[#19393](https://github.com/openai/codex/pull/19393)** – **[#19395](https://github.com/openai/codex/pull/19395)** | permissions: migrate approval/sandbox/core to profiles (3-PR stack) | Complete migration from `SandboxPolicy` to `PermissionProfile` across approval, network, patch-safety, analytics, and app surfaces | Prevents `Disabled`/`External` conflation; enables split filesystem policies |
| **[#19467](https://github.com/openai/codex/pull/19467)** | feat: route MCP elicitations through guardian review | Adds safety review layer for MCP tool approval requests before user prompt emission | Closes security gap in plugin ecosystem; regression tests included |
| **[#19442](https://github.com/openai/codex/pull/19442)** | feat: apply provider capability disables through config layers | Auto-disables Bedrock-incompatible features (apps, plugins, MCP, image gen, web search) via config | Eliminates manual Bedrock launch friction; reduces misconfiguration |
| **[#19456](https://github.com/openai/codex/pull/19456)** | [oai] Add remote plugin uninstall API | Extends plugin management with remote marketplace uninstall by name | Complements v0.125.0 remote plugin install; completes CRUD lifecycle |
| **[#19280](https://github.com/openai/codex/pull/19280)** | [codex] Migrate thread turns list to thread store | Consolidates history loading through `ThreadStore::read_thread` with pagination preservation | Reduces direct rollout path coupling; enables future storage backends |
| **[#19160](https://github.com/openai/codex/pull/19160)** | Make apply_patch streaming parser stateful | Replaces ephemeral streaming parse with stateful progress events; removes public `ParseMode::Streaming` | More reliable diff application UX; internalizes complexity |
| **[#19432](https://github.com/openai/codex/pull/19432)** | [codex] Add token usage to turn tracing spans | Embeds token counts directly in APM traces for slow-turn debugging | Eliminates join against analytics; faster incident response |
| **[#19465](https://github.com/openai/codex/pull/19465)** | Add gRPC feedback log sink | Implements cloud-agent log forwarding boundary beyond local SQLite | Enables fleet-wide telemetry for app-server deployments |
| **[#18075](https://github.com/openai/codex/pull/18075)** | Add goal model tools (3/5) | Introduces `get_goal`/`create_goal`/`update_goal` with token budget controls and registry gating | Foundation for structured, budget-aware agent workflows |

---

## 5. Feature Request Trends

| Direction | Evidence | Momentum |
|-----------|----------|----------|
| **Remote/SSH development parity** | #10450 (603 👍), #11023 (Linux as alternative) | 🔥 Critical mass — highest sustained demand |
| **Linux desktop support** | #11023 (63 👍), explicit Mac-escape motivation | 🟡 Strong; blocked by resource prioritization |
| **1M token context for GPT-5.5** | #19464, #19409 (context catalog mismatch) | 🟡 Emerging; API-model gap creates urgency |
| **Thread storage pagination/cursors** | #15485 (app-server), #19280 (implementation) | 🟢 In progress; infrastructure converging |
| **Configurable safety/review thresholds** | #19204 (false flags), #19467 (Guardian routing) | 🟡 Tension between safety and velocity |

---

## 6. Developer Pain Points

| Category | Symptoms | Frequency |
|----------|----------|-----------|
| **Context compaction failures** | #17508, #19329, #19255, #19286, #19409, #19433 — auto-compact errors, stream disconnects, catalog mismatches | **Very High** — 6+ active issues; affects CLI and App |
| **Windows second-class experience** | #13917 (PowerShell), #14549 (hotkeys), #13846 (network drives), #14703 (worktrees), #16188 (mouse hijack), #14576 (markdown images), #19181 (VS Code flashing) | **High** — platform-specific regressions cluster; no Linux relief valve |
| **Configuration system unreliability** | #19185 (config.toml ignored), #19230 (fast tier default reverted) | **Moderate** — breaks power-user trust |
| **MCP lifecycle/performance** | #18333 (restarts), #18404 (Intel Mac unavailable) | **Moderate** — plugin ecosystem growing pains |
| **Session hydration durability** | #18993, #19397, #19433 — history loss on reload/resume | **Moderate** — undermines long-running workflows |

---

*Digest compiled from github.com/openai/codex activity for 2026-04-24.*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-04-25

## Today's Highlights

The v0.40.0 preview channel sees rapid iteration with preview.3 landing today, while a critical Windows backspace regression triggered an emergency revert and subsequent fix attempts. Community contributions are accelerating around local model integration (Ollama routing) and file safety (versioned backups), reflecting growing demand for offline-capable and damage-resistant agent workflows.

---

## Releases

| Version | Notes |
|--------|-------|
| **[v0.40.0-preview.3](https://github.com/google-gemini/gemini-cli/releases/tag/v0.40.0-preview.3)** | Latest preview in the v0.40 series; [full changelog](https://github.com/google-gemini/gemini-cli/compare/v0.40.0-preview.2...v0.40.0-preview.3) |
| **[v0.39.1](https://github.com/google-gemini/gemini-cli/releases/tag/v0.39.1)** | Patch release following v0.39.0; [full changelog](https://github.com/google-gemini/gemini-cli/compare/v0.39.0...v0.39.1) |

---

## Hot Issues

| # | Title | Why It Matters | Community Signal |
|---|-------|--------------|----------------|
| **[#22745](https://github.com/google-gemini/gemini-cli/issues/22745)** | AST-aware file reads, search, and mapping | EPIC-level investigation into semantic code navigation—could dramatically reduce token waste from misaligned reads and improve multi-turn accuracy. Core to next-gen codebase understanding. | 🔒 Internal; 5 comments, active maintainer discussion |
| **[#24916](https://github.com/google-gemini/gemini-cli/issues/24916)** | Repeated permission prompts on same file | UX friction breaking flow state; "allow for all future sessions" appears unreliable. Directly impacts trust in sandboxing. | 3 comments, no resolution path yet |
| **[#22323](https://github.com/google-gemini/gemini-cli/issues/22323)** | Subagent reports GOAL success after MAX_TURNS hit | Silent failure mode—agents appear successful while actually interrupted. Critical for reliable autonomous workflows. | 3 comments, 2 👍; P1 priority |
| **[#25166](https://github.com/google-gemini/gemini-cli/issues/25166)** | Shell execution hangs at "Waiting input" post-completion | Breaks basic command execution reliability; simple commands falsely claim they need input. | 3 👍, 2 comments; reproducibility concerns |
| **[#23571](https://github.com/google-gemini/gemini-cli/issues/23571)** | Model scatters tmp scripts across workspace | Cleanup burden undermines version control hygiene; restriction-driven workaround creates side effects. | 2 comments; workflow friction |
| **[#22267](https://github.com/google-gemini/gemini-cli/issues/22267)** | Browser Agent ignores settings.json overrides | Configuration system partially broken for browser subagent; `maxTurns` and other overrides silently fail. | 2 comments; config parity gap |
| **[#25951](https://github.com/google-gemini/gemini-cli/issues/25951)** | Backspace deletes word (English) or line (Chinese) | Fresh regression report; input handling broken for CJK and standard text differently. Filed today. | 0 comments; needs triage |
| **[#22819](https://github.com/google-gemini/gemini-cli/issues/22819)** | Memory routing: global vs. project | Foundation for persistent, context-aware agent behavior; separates user preferences from codebase specifics. | 2 👍; architectural direction |
| **[#22672](https://github.com/google-gemini/gemini-cli/issues/22672)** | Agent should stop/discourage destructive behavior | Safety guardrail for `git reset --force`, DB mutations; prevents irreversible operations when safer paths exist. | 1 👍; safety-critical |
| **[#24246](https://github.com/google-gemini/gemini-cli/issues/24246)** | 400 error with >128 tools | Hard ceiling on tool ecosystem growth; agent lacks tool scoping intelligence. Blocks rich MCP integrations. | No engagement yet; infrastructure limit |

---

## Key PR Progress

| # | Title | What It Does | Status |
|---|-------|-----------|--------|
| **[#25947](https://github.com/google-gemini/gemini-cli/pull/25947)** | Versioned pre-write backups with agent-driven restore | Transactional file safety net—enables rollback from destructive edit loops. Session-scoped, native integration. | Open |
| **[#25945](https://github.com/google-gemini/gemini-cli/pull/25945)** | Time-series repo metrics + reflex refactoring | Replaces "processes" with "reflexes," adds time-series analysis, removes critique flow. Architectural cleanup + observability. | Open, P1 |
| **[#25915](https://github.com/google-gemini/gemini-cli/pull/25915)** | Route `/compress` through local Ollama model | Offline compression via local `gemma3:4b`; plain-text sanitization keeps privacy. Major local-first milestone. | Open |
| **[#25950](https://github.com/google-gemini/gemini-cli/pull/25950)** | Fix false command conflicts from home directory | Resolves self-conflict bug when `~/.gemini/commands` equals workspace path. Cherry-pick of long-standing PR #23069. | Open |
| **[#25912](https://github.com/google-gemini/gemini-cli/pull/25912)** | Compact tool output for MCP tools | Extends output compaction (default: on) to MCP tools—parity with native tools, reduces noise. | Open, P1 |
| **[#25426](https://github.com/google-gemini/gemini-cli/pull/25426)** | Revive bundling + 16-core CI speed | Artifact-centric CI, modernized test infra. Unblocks faster iteration at scale. | Open |
| **[#25941](https://github.com/google-gemini/gemini-cli/pull/25941)** | Revert backspace handling to fix Windows regression | Emergency revert: Windows `\b` vs `\x7f` assumption broke normal backspace for node 22 users. **Merged then reverted.** | Closed |
| **[#25943](https://github.com/google-gemini/gemini-cli/pull/25943)** | `modifyOtherKeys` fallback for Ctrl+Backspace | Post-revert fix: restores word-delete without reintroducing the backspace-as-Ctrl-backspace bug. | Open |
| **[#25873](https://github.com/google-gemini/gemini-cli/pull/25873)** | Persist auto-memory scratchpad for skill extraction | Session metadata persistence reduces extractor turns 16.7% (13.2→11.0). Foundation for smarter memory. | Open |
| **[#25944](https://github.com/google-gemini/gemini-cli/pull/25944)** | Re-enable keyboard protocols after terminal clear | `/clear` and Ctrl+L were disabling Kitty/modifyOtherKeys until manual `/terminal-setup`. Fixes shortcut reliability. | Open |

---

## Feature Request Trends

1. **Local-First / Offline Operation** — Ollama routing for compression (#25915), Whisper voice mode (#24174), and general demand to reduce cloud dependency.
2. **Safety & Recoverability** — Versioned backups (#25947), destructive behavior guards (#22672), and permission persistence (#24916) show maturation beyond "move fast" to "don't break things."
3. **AST/Semantic Code Understanding** — #22745 and #22746 signal a shift from text-grepping to structured code navigation, with tilth/glyph as candidate backends.
4. **Memory Architecture** — Global vs. project routing (#22819), proactive memory writes (#22809), and scratchpad persistence (#25873) indicate memory is becoming a first-class subsystem.
5. **Windows Terminal Hardening** — Multiple backspace/keyboard protocol fixes (#25941, #25943, #25862, #25944) show platform parity remains uneven.

---

## Developer Pain Points

| Theme | Evidence | Severity |
|-------|----------|----------|
| **Input handling regressions on Windows** | #25951, #25941, #25862, #25943, #24915 | 🔴 High — actively breaking daily use |
| **Permission fatigue & trust erosion** | #24916, #25823 (closed attempt at permanent approval) | 🟡 Medium — UX drag, workaroundable |
| **Silent agent failures** | #22323 (false success), #25166 (hangs), #23571 (tmp debris) | 🔴 High — undermines automation reliability |
| **Tool ecosystem scaling limits** | #24246 (>128 tools → 400 error) | 🟡 Medium — ceiling on extensibility |
| **SSH/remote session fragility** | #24202 (scrambled text), #24546 (detection needed), #25216 (temp path crashes) | 🟡 Medium — affects cloud development workflows |
| **Streaming/rendering glitches** | #25218 (table incremental render), #24470 (scroll jumps) | 🟢 Lower — polish, accessibility impact |

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-04-25

---

## 1. Today's Highlights

Three rapid-fire patch releases (v1.0.36-0 through v1.0.36-1) landed in 24 hours, delivering UX refinements like double-Esc cancellation safety and a session changes counter, while quietly hardening security by blocking `~/.claude/` agent loading. The issue tracker remains highly active with 50 updated items, dominated by platform-specific bugs on Alpine Linux and Windows PowerShell compatibility, plus emerging friction around MCP server discoverability and custom agent configuration limits.

---

## 2. Releases

| Version | Date | Key Changes |
|---------|------|-------------|
| **v1.0.36** | 2026-04-24 | Subcommand picker selection indicator (❯); clearer multi-license error messages with direct links; `preToolUse.matcher` hook fix ensuring matchers only run on matching tool names |
| **v1.0.36-1** | 2026-04-24 | **Added:** `changes` statusline toggle showing added/removed line counts per session. **Improved:** Double-Esc required to cancel in-flight work (prevents accidental interruption). **Fixed:** Custom instructions in `.gitignored` directories (e.g., `.github/instructions/`) now load correctly |
| **v1.0.36-0** | 2026-04-24 | **Improved:** Claude Opus 4.6 defaults to medium reasoning effort. **Fixed:** Debug log/feedback bundle archiving no longer overwrites existing files; `~/.claude/` custom agents/skills/commands no longer loaded by Copilot CLI (security isolation) |

---

## 3. Hot Issues

| # | Status | Title | Why It Matters | Community Signal |
|---|--------|-------|--------------|----------------|
| [#107](https://github.com/github/copilot-cli/issues/107) | 🔴 OPEN | Tool calls cause Segmentation Fault on Alpine Linux | **Critical platform breakage** — CLI entirely unusable in Docker/Alpine environments, a common CI/devcontainer scenario | 13 comments, 4 👍; active since Sept 2025 with no resolution |
| [#2205](https://github.com/github/copilot-cli/issues/2205) | 🔴 OPEN | Mouse scroll navigates inputs instead of history (Terminator) | **UX regression** — breaks expected terminal behavior; `--no-mouse` doesn't fix it | 8 comments, 5 👍; recent regression |
| [#1680](https://github.com/github/copilot-cli/issues/1680) | 🔴 OPEN | `pwsh.exe` hardcoded in 6 places — CLI unusable on Win11 with PS 5.1 | **Accessibility/platform equity** — blocks enterprise Windows deployments without PowerShell 7; closed issue #411 resurfaced | 5 comments, 8 👍 (highest); explicitly calls out "not_planned" mishandling |
| [#1148](https://github.com/github/copilot-cli/issues/1148) | 🔴 OPEN | CRLF injection on all touched files (Windows) | **Data integrity risk** — silently corrupts LF files, breaks cross-platform workflows, causes spurious diffs | 5 comments, 5 👍; affects v0.0.395 |
| [#254](https://github.com/github/copilot-cli/issues/254) | 🔴 OPEN | Repeated re-login loops with GitHub Business | **Auth reliability** — blocks sustained usage; "more-info-needed" tag suggests under-investigation | 8 comments, 3 👍; persistent since Oct 2025 |
| [#2374](https://github.com/github/copilot-cli/issues/2374) | 🔴 OPEN | Autopilot enters infinite loop | **Agent reliability** — `/plan` → autopilot workflow fails catastrophically | 5 comments; no 👍 but severe impact |
| [#1464](https://github.com/github/copilot-cli/issues/1464) | 🔴 OPEN | Skills beyond ~32 alphabetically unreachable due to token limits | **Scalability ceiling** — hard cap on skill ecosystem growth; silent failure mode | 3 comments, 4 👍; architectural limitation |
| [#2630](https://github.com/github/copilot-cli/issues/2630) | 🔴 OPEN | Custom agent `mcp-servers` not connected in sub-agent/`--prompt` contexts | **MCP ecosystem fragmentation** — breaks composable agent architectures | 3 comments; niche but blocking for advanced users |
| [#2769](https://github.com/github/copilot-cli/issues/2769) | 🟢 CLOSED | Copilot Pro+ weekly rate limit not resetting | **Subscription value** — paid users locked out; closed without clear resolution path | 7 comments, 3 👍; watch for recurrence |
| [#1981](https://github.com/github/copilot-cli/issues/1981) | 🟢 CLOSED | Custom instructions skipped when gitignored | **Config UX inconsistency** — fixed in v1.0.36-1; validates community reporting | 2 comments, 5 👍; rapid fix shows responsiveness |

---

## 4. Key PR Progress

| # | Status | Title | Description | Impact |
|---|--------|-------|-------------|--------|
| [#2957](https://github.com/github/copilot-cli/pull/2957) | 🟡 OPEN | fix: extension bootstrap path mismatch in `launchExtension()` | Resolves SEA cache directory path mismatch (`universal/` vs `darwin-arm64/`) causing extension load failures on macOS/Windows | Unblocks extension ecosystem; fixes [#2890](https://github.com/github/copilot-cli/issues/2890) |

*Note: Only 1 PR updated in the 24h window. The project appears release-heavy, PR-light currently.*

---

## 5. Feature Request Trends

| Trend | Evidence | Momentum |
|-------|----------|----------|
| **Agent model configurability** | [#2904](https://github.com/github/copilot-cli/issues/2904) (reasoning effort in YAML), [#2939](https://github.com/github/copilot-cli/issues/2939) (subagent model override), [#2559](https://github.com/github/copilot-cli/issues/2559) (`COPILOT_MODEL_EFFORT` env var) | 🔥🔥🔥 High — 3 related requests in 2 weeks; Claude SDK parity pressure |
| **MCP server discoverability & management** | [#2956](https://github.com/github/copilot-cli/issues/2956) (disable in `/mcp show` menu), [#2944](https://github.com/github/copilot-cli/issues/2944) (registry browse), [#2938](https://github.com/github/copilot-cli/issues/2938) (repo-level `.mcp.json`) | 🔥🔥🔥 High — MCP is the integration layer; CLI lagging behind IDE experience |
| **Session/workspace management** | [#2966](https://github.com/github/copilot-cli/issues/2966) (concurrent sessions), [#2964](https://github.com/github/copilot-cli/issues/2964) (diff-only review mode), [#2965](https://github.com/github/copilot-cli/issues/2965) (branch display) | 🔥🔥 Medium — power user productivity; competing with Claude Code's session model |
| **Plugin lifecycle control** | [#2714](https://github.com/github/copilot-cli/issues/2714) (toggle enabled/disabled) | 🔥🔥 Medium — parity with Gemini CLI, Claude Code |
| **Git attribution/auditing** | [#975](https://github.com/github/copilot-cli/issues/975) (AI commit attribution) | 🔥 Medium — compliance/adoption concern; closed without implementation |

---

## 6. Developer Pain Points

| Pain Point | Frequency | Severity | Representative Issues |
|------------|-----------|----------|----------------------|
| **Windows as second-class citizen** | Chronic | 🔴 Critical | [#1680](https://github.com/github/copilot-cli/issues/1680) (PS 5.1 blocked), [#1148](https://github.com/github/copilot-cli/issues/1148) (CRLF corruption), [#2953](https://github.com/github/copilot-cli/issues/2953) (winget install fails without admin) |
| **Alpine Linux / container incompatibility** | Persistent | 🔴 Critical | [#107](https://github.com/github/copilot-cli/issues/107) (segfaults), likely musl libc related |
| **Silent configuration failures** | Recurring | 🟡 High | [#1981](https://github.com/github/copilot-cli/issues/1981) (gitignored instructions), [#1464](https://github.com/github/copilot-cli/issues/1464) (skill truncation invisible to users) |
| **Auth/session fragility** | Sporadic | 🟡 High | [#254](https://github.com/github/copilot-cli/issues/254) (re-login loops), [#2769](https://github.com/github/copilot-cli/issues/2769) (rate limit reset failures) |
| **Agent/MCP composability gaps** | Emerging | 🟡 High | [#2630](https://github.com/github/copilot-cli/issues/2630) (MCP in subagents), [#2374](https://github.com/github/copilot-cli/issues/2374) (infinite loops), [#2904](https://github.com/github/copilot-cli/issues/2904) (no per-agent reasoning control) |
| **Terminal rendering regressions** | Recent | 🟡 Medium | [#2205](https://github.com/github/copilot-cli/issues/2205) (scroll behavior), [#2964](https://github.com/github/copilot-cli/issues/2964) (no diff-focused view) |

---

*Digest compiled from github.com/github/copilot-cli activity for 2026-04-24.*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-04-25

---

## 1. Today's Highlights

Version 1.39.0 shipped with thinking preservation controls and shell UX fixes, while the community filed a surge of polish-oriented issues around config robustness, Windows shell compatibility, and token accounting transparency. Notably, three independent PRs addressed production-hardening concerns: BOM-tolerant config parsing, TOCTOU race elimination, and assertion-to-exception conversions for `-O` safe deployments.

---

## 2. Releases

**[kimi-cli 1.39.0](https://github.com/MoonshotAI/kimi-cli/releases/tag/1.39.0)** — Latest stable release with three visible changes:
- **Shell UX fix**: Approval request text input now renders caret correctly in terminal environments ([PR #2005](https://github.com/MoonshotAI/kimi-cli/pull/2005))
- **Thinking preservation**: New `KIMI_MODEL_THINKING_KEEP` environment variable allows users to preserve model reasoning chains that would otherwise be discarded ([PR #2029](https://github.com/MoonshotAI/kimi-cli/pull/2029))
- Additional `feat(sou...)` entry truncated in source data

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Signal |
|---|-------|--------------|----------------|
| **[#1990](https://github.com/MoonshotAI/kimi-cli/issues/1990)** | IDEA terminal crash on message send | JetBrains IDE integration is critical for Java/Kotlin developers; hard crashes block adoption entirely | 4 comments, 0 👍 — needs repro investigation |
| **[#2062](https://github.com/MoonshotAI/kimi-cli/issues/2062)** | `default_skills` config for auto-activating skills | Eliminates repetitive `/skill` commands per session; aligns with CLI automation culture | 2 comments, 1 👍; author already submitted PR #2063 |
| **[#2043](https://github.com/MoonshotAI/kimi-cli/issues/2043)** | UTF-8 BOM in config.toml causes Invalid TOML | Windows editors (Notepad, VS Code) frequently emit BOMs; this is a first-run friction point for Windows users | 1 comment; fix already in PR #2065 |
| **[#2038](https://github.com/MoonshotAI/kimi-cli/issues/2038)** | Git subprocess calls in bottom toolbar cause typing lag | Performance regression at idle prompt; affects perceived responsiveness for power users | 1 comment; well-isolated via binary search |
| **[#2066](https://github.com/MoonshotAI/kimi-cli/issues/2066)** | PowerShell 7 (`pwsh`) support on Windows | PowerShell 5.1 is deprecated; hardcoded path ignores modern Windows toolchain | 0 comments, 0 👍; author provided implementation code |
| **[#2061](https://github.com/MoonshotAI/kimi-cli/issues/2061)** | MCP JSON Schema validation error with `$ref` + `description` | MCP ecosystem interoperability; Moonshot's "flavored JSON Schema" diverges from standard Draft 7/2020 behavior | 0 comments; blocks Unity-MCP adoption |
| **[#2059](https://github.com/MoonshotAI/kimi-cli/issues/2059)** | Error messages consume tokens without value | Transparency and cost-control concern; users paying per-token need predictable billing | 0 comments; pricing/trust issue |
| **[#2058](https://github.com/MoonshotAI/kimi-cli/issues/2058)** | `AGENTS.md` not loaded with custom agent | Breaks agent customization workflow; inconsistent behavior between default and named agents | 0 comments |
| **[#2051](https://github.com/MoonshotAI/kimi-cli/issues/2051)** | Shell transcript hides `/skill:*` and `/flow:*` prompts | Logging/auditability gap; transcript becomes misleading for skill-heavy sessions | 0 comments |
| **[#2049](https://github.com/MoonshotAI/kimi-cli/issues/2049)** | Session history lost on resume despite visual echo | Data loss bug; undermines reliability of `/sessions` resume feature | 0 comments |

---

## 4. Key PR Progress

| # | PR | Description | Status |
|---|-----|-------------|--------|
| **[#2068](https://github.com/MoonshotAI/kimi-cli/pull/2068)** | ACP notification for approval requests | Emits `kimi/approval_required` custom notification before client prompt; enables IDE integrations to react programmatically | Open |
| **[#2067](https://github.com/MoonshotAI/kimi-cli/pull/2067)** | Connection resilience for large contexts | Extends `keepalive_expiry` and retry logic for >130k token contexts on Windows/proxied networks; addresses systemic timeout pattern | Open |
| **[#2065](https://github.com/MoonshotAI/kimi-cli/pull/2065)** | UTF-8 BOM tolerance in config files | Switches config read to `utf-8-sig`; adds regression test; zero behavioral change for clean files | Open |
| **[#2064](https://github.com/MoonshotAI/kimi-cli/pull/2064)** | Respect `KIMI_SHARE_DIR` for plan files | Eliminates hardcoded `~/.kimi/plans`; includes migration for existing data | Open |
| **[#2063](https://github.com/MoonshotAI/kimi-cli/pull/2063)** | `default_skills` auto-activation | Implements #2062; config-driven skill warmup at session start | Open |
| **[#2036](https://github.com/MoonshotAI/kimi-cli/pull/2036)** | Strict schema validation for core tools | Enables OpenAI/Anthropic `strict: true` on Shell, ReadFile, Grep, WriteFile, StrReplaceFile, SetTodoList | Open |
| **[#1960](https://github.com/MoonshotAI/kimi-cli/pull/1960)** | RalphFlow architecture | Ephemeral-context iteration framework with convergence detection; prevents infinite loops in multi-step agent workflows | Open (4 days old, active) |
| **[#2045](https://github.com/MoonshotAI/kimi-cli/pull/2045)** | YOLO/AFK mode orthogonality | Separates auto-approve (`yolo`) from non-interactive (`afk`) semantics; fixes `--yolo` blocking `AskUserQuestion` | Open |
| **[#2050](https://github.com/MoonshotAI/kimi-cli/pull/2050)** | Virtual interface IP detection | Fixes `kimi web --public` 403 via Tailscale/WireGuard/Docker by enumerating all network interfaces | Open |
| **[#2056](https://github.com/MoonshotAI/kimi-cli/pull/2056)** | TOCTOU fix in `WireFile.append_record` | Replaces `exists()` → `stat()` race with atomic `try/except`; production reliability | Open |

---

## 5. Feature Request Trends

| Direction | Evidence | Momentum |
|-----------|----------|----------|
| **Session startup automation** | #2062 / PR #2063 (`default_skills`), implicit demand for agent preset loading | High — author PR'd same day |
| **Windows toolchain modernization** | #2066 (PowerShell 7), #2043 (BOM handling), #2067 (Windows-specific timeouts) | High — platform parity gap |
| **Cost/transparency controls** | #2059 (token consumption on errors), #2039 (quota color fix) | Medium — pricing sensitivity |
| **MCP ecosystem compatibility** | #2061 (schema validation divergence) | Emerging — standard alignment needed |
| **Skill system refinements** | #2062, #2051 (transcript logging), PR #2044 (skill scoping) | Active — core differentiator |

---

## 6. Developer Pain Points

**Configuration fragility** — Multiple intersecting issues: BOM sensitivity (#2043), hardcoded paths (#2064), and schema validation quirks (#2061) suggest the config layer needs systematic hardening for cross-platform deployment.

**Windows as second-class citizen** — PowerShell 5.1 hardcoding (#2066), context-specific timeouts (#2067), and BOM edge cases indicate Windows testing coverage lags behind macOS/Linux. The `utf-8-sig` fix is tactical; strategic investment in Windows CI matrix needed.

**Token economics opacity** — #2059 surfaces fundamental tension: users cannot distinguish "useful inference" from "error overhead" in billing. Without per-request cost breakdowns or error-token refunds, trust erodes for high-volume automation use cases.

**Performance at scale** — #2038 (git lag) and #2067 (large-context drops) reveal two facets of the same problem: background operations and network resilience are not gracefully degraded under load. The toolbar's synchronous subprocess calls are particularly jarring for a tool positioning itself as "fast CLI."

**Agent context reliability** — #2058 (`AGENTS.md` loading) and #2049 (session resume data loss) damage the agent customization narrative. Users investing in bespoke agent configurations encounter silent failures that are hard to debug.

---

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-04-25

---

## 1. Today's Highlights

The OpenCode team shipped two patch releases (v1.14.23–v1.14.24) with critical DeepSeek reasoning fixes and TUI rendering improvements. Meanwhile, the community is actively triaging a cluster of DeepSeek V4 round-tripping bugs that have dominated issue traffic, while several long-running beta PRs for background subagents, auto-accept modes, and remote control capabilities are advancing toward merge.

---

## 2. Releases

### [v1.14.24](https://github.com/anomalyco/opencode/releases/tag/v1.14.24)
- **DeepSeek reasoning fix**: Ensures `reasoning_content` is always included in assistant messages, preventing provider formatting failures on conversation continuation
- **Model config inheritance**: Fixes interleaved-capability fallback for inherited model configs (contribution by [@07akioni](https://github.com/07akioni))
- **Experimental HTTP API**: New endpoint added (details truncated in release notes)

### [v1.14.23](https://github.com/anomalyco/opencode/releases/tag/v1.14.23)
- **Registry respect**: Custom `.npmrc` registry settings now honored for package version checks and updates
- **TUI rendering**: All non-synthetic text blocks in user messages now render, not just the first

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|--------------|-------------------|
| [#6680](https://github.com/anomalyco/opencode/issues/6680) | View archived sessions on desktop | Long-standing UX gap for power users managing many sessions; desktop parity with web | 25 comments, 2 👍 — active discussion on modal design |
| [#24104](https://github.com/anomalyco/opencode/issues/24104) | DeepSeek thinking mode: `reasoning_content` must be passed back | **Closed** — Core bug breaking all multi-turn DeepSeek conversations; fix shipped in v1.14.24 | 19 comments, resolved same day |
| [#24190](https://github.com/anomalyco/opencode/issues/24190) | DeepSeek V4: `reasoning_content` not round-tripped on multi-turn tool calls | Variant of above specifically affecting tool call flows; indicates incomplete fix coverage | 17 comments, 6 👍 — users reporting regression |
| [#14808](https://github.com/anomalyco/opencode/issues/14808) | Plugin event listener for `session.created` not firing | Breaks plugin ecosystem (Engram memory system cited); core event bus reliability | 16 comments, 12 👍 — high engagement, no resolution |
| [#24039](https://github.com/anomalyco/opencode/issues/24039) | Add GPT-5.5 support for OpenAI provider | **Closed** — Rapid provider support for new OpenAI model; shows competitive response time | 16 comments, 12 👍 |
| [#17516](https://github.com/anomalyco/opencode/issues/17516) | `opencode run` hangs after completing tool calls | Blocks CI/automation use cases; process lifecycle bug in headless mode | 13 comments, 6 👍 — reproducible, no fix yet |
| [#19947](https://github.com/anomalyco/opencode/issues/19947) | NVIDIA NIM kimik2.5 returns numeric tool call IDs | Provider compatibility edge case; Zod strictness vs. real-world API variance | 10 comments — niche but blocking for NIM users |
| [#13682](https://github.com/anomalyco/opencode/issues/13682) | Authorization link cannot be clicked or copied in `/connect` | SSH/remote workflow blocker; accessibility gap in TUI link handling | 10 comments, 4 👍 — Ubuntu/Windows cross-platform issue |
| [#12609](https://github.com/anomalyco/opencode/issues/12609) | System prompts force ASCII-only output | Internationalization blocker; non-English users getting garbled output by default | 6 comments, 9 👍 — design philosophy tension |
| [#11831](https://github.com/anomalyco/opencode/issues/11831) | YOLO Mode — Auto-Approve All Permission Prompts | Power user workflow optimization; safety vs. velocity debate | 5 comments, 20 👍 — highest vote count, clear demand |

---

## 4. Key PR Progress

| # | PR | Status | Description |
|---|-----|--------|-------------|
| [#24228](https://github.com/anomalyco/opencode/pull/24228) | Add Roslyn support for Razor and C# scripts | Open | Expands LSP coverage to `.csx` (C# scripts) and Razor templates; fills gap in .NET tooling |
| [#24229](https://github.com/anomalyco/opencode/pull/24229) | Fix lazy session error schema | Open | Defers `MessageV2.Assistant.fields.error` with `Schema.suspend`; fixes circular init crashes in compiled binaries |
| [#24174](https://github.com/anomalyco/opencode/pull/24174) | Add background subagent support | Open | `task(background=true)` for non-blocking subagents with `task_status` polling; major concurrency primitive |
| [#11710](https://github.com/anomalyco/opencode/pull/11710) | Include cleared prompts in history (toggle) | Open | KV-persisted command palette toggle; addresses session auditability requests |
| [#12633](https://github.com/anomalyco/opencode/pull/12633) | Auto-accept mode for permission requests | Open | `shift+tab` toggle for auto-approving edits; directly implements [#11831](https://github.com/anomalyco/opencode/issues/11831) YOLO mode concept |
| [#24149](https://github.com/anomalyco/opencode/pull/24149) | Add scout agent for repo research | Open | Built-in subagent for external docs/dependency source research; managed `repo_clone`/`repo_overview` tools |
| [#23792](https://github.com/anomalyco/opencode/pull/23792) | Load sync state through TanStack Query | Open | Refactors global/per-project sync to shared queries; reduces manual MCP state management |
| [#19545](https://github.com/anomalyco/opencode/pull/19545) | OpenCode remote control + `opencode serve` | Open | Self-hosted relay server for remote control; `--relay-secret` and Tailscale integration |
| [#24218](https://github.com/anomalyco/opencode/pull/24218) | Auto-enable interleaved for reasoning models | Open | Fixes interleaved capability default for `@ai-sdk/openai-compatible` with `reasoning: true` |
| [#23912](https://github.com/anomalyco/opencode/pull/23912) | Make OpenCode web embeddable in iframes at subpath | Open | Enables reverse-proxy iframe embedding; enterprise integration use case |

---

## 5. Feature Request Trends

| Trend | Evidence | Momentum |
|-------|----------|----------|
| **Permission automation / YOLO mode** | [#11831](https://github.com/anomalyco/opencode/issues/11831), [#12633](https://github.com/anomalyco/opencode/pull/12633) | High — 20 👍, active PR |
| **Cross-device session sync & archival** | [#6680](https://github.com/anomalyco/opencode/issues/6680), [#13626](https://github.com/anomalyco/opencode/issues/13626) | Medium — desktop/web parity gaps |
| **Remote/headless operation** | [#19545](https://github.com/anomalyco/opencode/pull/19545), [#17516](https://github.com/anomalyco/opencode/issues/17516) | Growing — `run` hangs block automation |
| **Provider ecosystem expansion** | [#13537](https://github.com/anomalyco/opencode/issues/13537) (Open WebUI), [#24039](https://github.com/anomalyco/opencode/issues/24039) (GPT-5.5), [#22677](https://github.com/anomalyco/opencode/issues/22677) (Qwen) | Steady — new model support is constant demand |
| **Rich media in tool interactions** | [#24199](https://github.com/anomalyco/opencode/issues/24199) (paste images in `questions` tool) | Early — multimodal workflow extension |

---

## 6. Developer Pain Points

| Pain Point | Frequency | Impact | Tracking |
|------------|-----------|--------|----------|
| **DeepSeek reasoning round-trip failures** | Critical cluster — 4 related issues/PRs in 24h | Blocks all multi-turn DeepSeek usage | [#24104](https://github.com/anomalyco/opencode/issues/24104), [#24190](https://github.com/anomalyco/opencode/issues/24190), [#24188](https://github.com/anomalyco/opencode/issues/24188), [#24203](https://github.com/anomalyco/opencode/issues/24203), [#24218](https://github.com/anomalyco/opencode/pull/24218) |
| **Process hangs in headless/CI** | Recurring | Blocks automation adoption | [#17516](https://github.com/anomalyco/opencode/issues/17516) |
| **Plugin event system reliability** | Persistent | Ecosystem trust issue | [#14808](https://github.com/anomalyco/opencode/issues/14808) |
| **TUI shell command inconsistencies** | Sporadic | Daily workflow friction | [#17530](https://github.com/anomalyco/opencode/issues/17530), [#12206](https://github.com/anomalyco/opencode/issues/12206) |
| **WSL/remote environment compatibility** | Recurring | Platform coverage gaps | [#24081](https://github.com/anomalyco/opencode/issues/24081), [#13682](https://github.com/anomalyco/opencode/issues/13682) |
| **Token bloat in system prompts** | Chronic | Cost/performance degradation | [#11995](https://github.com/anomalyco/opencode/issues/11995) |

---

*Digest compiled from github.com/anomalyco/opencode activity on 2026-04-24 to 2026-04-25.*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-04-25

## Today's Highlights

The Pi team shipped two rapid-fire releases (v0.70.1–v0.70.2) to land DeepSeek V4 support and immediately patch provider retry/timeout forwarding bugs. The community is actively stress-testing DeepSeek's reasoning mode, surfacing edge cases around `reasoning_content` propagation that are getting same-day fixes.

---

## Releases

| Version | Summary |
|---------|---------|
| **[v0.70.2](https://github.com/badlogic/pi-mono/releases/tag/v0.70.2)** | Fixed provider retry/timeout forwarding to omit undefined `provider.request.controls`, preventing downstream SDK validation errors like `timeout must be an integer` when `retry.provider.timeoutMs` is unconfigured ([#3627](https://github.com/badlogic/pi-mono/issues/3627)) |
| **[v0.70.1](https://github.com/badlogic/pi-mono/releases/tag/v0.70.1)** | Added DeepSeek provider support with V4 Flash/Pro models and `DEEPSEEK_API_KEY` authentication; introduced per-provider request timeout/retry controls via `retry.provider.{timeoutMs,retries}` |

---

## Hot Issues

| # | Issue | Why It Matters | Community Signal |
|---|-------|--------------|----------------|
| [#3636](https://github.com/badlogic/pi-mono/issues/3636) | **DeepSeek 4: `reasoning_content` must be passed back in thinking mode** — 400 error when model omits reasoning content | Critical blocker for DeepSeek V4 adoption; breaks multi-turn sessions entirely. Forking sessions doesn't help. | 9 comments, rapid triage, closed same day |
| [#2023](https://github.com/badlogic/pi-mono/issues/2023) | **Add `pi.runWhenIdle()` for post-settlement work** | Core architectural gap: extensions can't safely schedule work after agent state settles, causing race conditions in hot-reload scenarios. | 7 comments, `possibly-openclaw-clanker` tag, open since March |
| [#3543](https://github.com/badlogic/pi-mono/issues/3543) | **Remove URL gates around long cache retention** | Enterprise/self-hosted users blocked from using `PI_CACHE_RETENTION=long` due to hardcoded URL allowlists. Duplicate of #1377 suggests persistent neglect. | 5 comments, community PR blocked by permissions |
| [#3630](https://github.com/badlogic/pi-mono/issues/3630) | **LaTeX formatting in markdown rendering** | STEM/ML developers need math rendering for readable model outputs. Pure UX but high-impact for technical users. | 4 comments, positive reception, closed-as-weekend |
| [#3648](https://github.com/badlogic/pi-mono/issues/3648) | **Ctrl-C not captured when macOS IME active** | Input system bug affecting non-English users (Zhuyin, likely CJK broadly). Breaks fundamental interrupt workflow. | 4 comments, well-scoped repro |
| [#3684](https://github.com/badlogic/pi-mono/issues/3684) | **Feature Request: `/retry` command** | OpenAI rate limits cause random failures; users want session recovery without manual reconstruction. Fills operational gap vs. Claude Code. | 3 comments, practical ops need |
| [#3619](https://github.com/badlogic/pi-mono/issues/3619) | **`google-vertex` doesn't forward `model.baseUrl`** | Only Vertex adapter ignores proxy/gateway configuration, breaking enterprise routing consistency. Every other adapter honors it. | 3 comments, clear parity gap |
| [#3675](https://github.com/badlogic/pi-mono/issues/3675) | **Ctrl+G flickers/jumps on long messages** | TUI reliability issue: keyboard shortcut intermittently fails, degrading navigation trust. "Best possible bug" — intermittent. | 3 comments, good repro steps |
| [#3653](https://github.com/badlogic/pi-mono/issues/3653) | **Redesign logo for Pi clarity** | Community design contribution; current logo reads as "R" not "π". Low technical priority but signals brand investment. | 3 comments, constructive, closed-as-weekend |
| [#2144](https://github.com/badlogic/pi-mono/issues/2144) | **Cannot paste images into Pi** | Feature parity gap with Claude Code; multimodal workflow blocker. Clipboard image paste is table-stakes for visual reasoning. | 3 comments, reopened/updated |

---

## Key PR Progress

| # | PR | What It Does | Status |
|---|-----|-------------|--------|
| [#3680](https://github.com/badlogic/pi-mono/pull/3680) | **Add built-in `pi update` command** | Self-updating CLI — `pi update` now updates Pi itself. Intentionally updates on older versions until new version check is wired. | Open |
| [#3678](https://github.com/badlogic/pi-mono/pull/3678) | **Honor Fireworks Anthropic tool compat** | Fixes tool-call failures on all Fireworks models by aligning Anthropic compatibility flags. Collaborative fix with Pi team review. | Open |
| [#3651](https://github.com/badlogic/pi-mono/pull/3651) | **Preserve models when re-registering provider with overrides only** | Edge case: extension B overriding extension A's provider baseURL shouldn't wipe model list. Fixes provider composition bug. | Closed |
| [#1157](https://github.com/badlogic/pi-mono/pull/1157) | **Add Anthropic Vertex AI provider** | New `anthropic-vertex` API type with Google Cloud ADC auth, 4 Claude models. Extracts shared `anthropic-shared.ts` utilities. Major enterprise feature. | Closed |
| [#3669](https://github.com/badlogic/pi-mono/pull/3669) | **Repopulate editor prompt history on `/reload`** | Fixes #3667: `rebuildChatFromMessages()` omitted `populateHistory`, breaking up-arrow recall post-reload. | Closed |
| [#3664](https://github.com/badlogic/pi-mono/pull/3664) | **Fallback for empty Anthropic `tool_use.id`** | Guarantees `normalizeToolCallId` always returns valid `^[a-zA-Z0-9_-]+$` — empty string rejected by Anthropic API. | Closed |
| [#3661](https://github.com/badlogic/pi-mono/pull/3661) | **Add xhigh reasoning support for DeepSeek V4 Pro** | Enables `reasoning_effort=max` via existing `xhigh` → `max` mapping. `supportsXhigh()` now recognizes DeepSeek model IDs. | Closed |
| [#3659](https://github.com/badlogic/pi-mono/pull/3659) | **Inject empty `reasoning_content` for DeepSeek tool-call history** | DeepSeek V4 requires `reasoning_content` field on all assistant messages including tool calls; missing = 400 error. | Closed |
| [#3656](https://github.com/badlogic/pi-mono/pull/3656) | **Preserve actual `reasoning_content` on DeepSeek assistant replay** | Closes #3655: replays prior turn's real reasoning instead of empty string when `requiresReasoningContentOnAssistantMessages` is set. | Closed |
| [#3650](https://github.com/badlogic/pi-mono/pull/3650) | **Omit `tools` field instead of empty array** | DashScope (Aliyun Qwen) rejects `tools: []` as too short; OpenAI/Anthropic tolerate but pattern is latently wrong. Fixes #3649. | Closed |

---

## Feature Request Trends

1. **DeepSeek Ecosystem Integration** — V4 support landed but community is rapidly surfacing reasoning mode edge cases (`reasoning_content` propagation, model switching, xhigh mapping). Expect continued refinement.
2. **Session/Agent Lifecycle Control** — `pi.runWhenIdle()`, programmatic session switching (#3673), `/retry` command, and `/reload` robustness all point to demand for finer-grained agent state management.
3. **Model Selection Persistence** — `persistModelChanges` setting (#3632, #3254) reflects frustration with `/model` and Ctrl+P silently overwriting defaults. Users want ephemeral vs. persistent selection modes.
4. **Enterprise Routing & Proxy Support** — `baseUrl` forwarding gaps (Vertex, Azure Foundry #3638), cache retention URL gates, and timeout/retry configurability show self-hosted/enterprise deployment friction.
5. **Multimodal & Rich Rendering** — Image paste (#2144), LaTeX math (#3630), and clipboard handling (#3620) indicate users expect parity with Claude Code's visual workflows.

---

## Developer Pain Points

| Theme | Evidence | Severity |
|-------|----------|----------|
| **DeepSeek reasoning mode fragility** | #3636, #3668, #3655, #3659, #3656, #3661, #3640, #3635, #3637 | 🔴 Critical — 400 errors break sessions; rapid fire of related PRs shows active stabilization |
| **Provider timeout/retry unconfigurable** | #3627, #3159, #3589 | 🔴 High — 10min default breaks local inference; v0.70.1 partially addresses but gaps remain |
| **TUI input/reliability bugs** | #3648 (IME), #3675 (Ctrl+G flicker), #3599/#3623 (CSI-u paste) | 🟡 Medium — macOS-specific, affects daily UX for international users |
| **Settings mutation without consent** | #3254, #3632 | 🟡 Medium — model selection overwrites defaults silently |
| **Context window/compaction misalignment** | #3647 (GPT 5.4 @ 69%), #3641 (GPT-5.5 @ 272k vs 400k stated) | 🟡 Medium — billing/operational surprise, token accounting trust |
| **Extension API limitations** | #2023, #3673, #3674 | 🟡 Medium — missing lifecycle hooks and UI control primitives |

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-04-25

## Today's Highlights

Qwen Code shipped **v0.15.2** with session auto-titling and critical file-reading fixes, while the community heatedly debated a proposed **90% cut to the OAuth free tier** (1,000 → 100 requests/day). On the engineering front, a performance PR landed that **slashes synchronous I/O on tool hot paths by 91%**, and structured JSON output in headless mode entered review.

---

## Releases

### [v0.15.2](https://github.com/QwenLM/qwen-code/releases/tag/v0.15.2)
Patch release with three changes:
- **Fix:** Empty `pages` parameter in `ReadFile` now treated as unset (resolves edge cases in paginated file reads) — [PR #3559](https://github.com/QwenLM/qwen-code/pull/3559)
- **Feature:** Sessions auto-titled via fast model; new `/rename --auto` flag — [PR #3540](https://github.com/QwenLM/qwen-code/pull/3540)
- **Fix:** i18n sync for Māori (`mi`) translations

Nightly `v0.15.1-nightly.20260424.4e0a37549` contains identical changes.

---

## Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|--------------|-------------------|
| [#3203](https://github.com/QwenLM/qwen-code/issues/3203) | **Qwen OAuth Free Tier Policy Adjustment** — Reduce daily quota from 1,000 to 100 requests, phase out free tier entirely by target date | Most-commented issue (119 comments); directly impacts hobbyists and evaluators; signals monetization pressure | Intense pushback; users requesting grandfathering or extended transition |
| [#3520](https://github.com/QwenLM/qwen-code/issues/3520) | **Tool ran without output or errors** — Silent failures in v0.14.5 with no diagnostic trail | Breaks trust in agent execution; debugging black hole | Active troubleshooting; needs reproducible case |
| [#3579](https://github.com/QwenLM/qwen-code/issues/3579) | **DeepSeek API 400 error: `reasoning_content` must be passed back** — Intermittent failures with `deepseek-v4-flash` in thinking mode | Blocks DeepSeek integration for reasoning-heavy workflows; API compatibility gap | Closed same day; fix likely backported |
| [#3532](https://github.com/QwenLM/qwen-code/issues/3532) | **Local model configuration confusion** — Documented config still triggers auth prompts | Recurring onboarding friction for self-hosters; docs/UX mismatch | Frustration; "照着文档来配置的" (followed docs exactly) |
| [#3595](https://github.com/QwenLM/qwen-code/issues/3595) | **Local Qwen3.6-35B-A3B fails image recognition vs. iFlow CLI** — Same model, different client behavior | Suggests vision pipeline discrepancy in Qwen Code specifically; config or tool-level bug | Comparative debugging with competing tool |
| [#3566](https://github.com/QwenLM/qwen-code/issues/3566) | **`/skills list` triggers React max update depth error** | UI crash loop; skills discovery completely broken | Needs immediate triage; React rendering bug |
| [#3582](https://github.com/QwenLM/qwen-code/issues/3582) | **Improve custom API key setup in `/auth`** — Current flow dumps users to external docs with broken experience | Onboarding bottleneck for BYOK (bring-your-own-key) users; high friction vs. competitors | Well-scoped UX proposal; awaiting implementation |
| [#3597](https://github.com/QwenLM/qwen-code/issues/3597) | **Vision failure with `doubao-seed-2.0-code` via Volcano Engine** — `ReadFile` rejects image input despite model support | Tool-level vision gating inconsistent with MCP wrapper behavior | Workaround identified (use MCP); root cause in system tool validation |
| [#3555](https://github.com/QwenLM/qwen-code/issues/3555) | **Duplicate model IDs across providers break parsing** — Same `glm-5.1` from two OpenAI-compatible endpoints | Multi-provider redundancy is common for reliability; parser limitation | Feature request for disambiguation syntax |
| [#3549](https://github.com/QwenLM/qwen-code/issues/3549) | **ACP mode lacks HTTP MCP transport** — Only stdio supported; HTTP-based MCP servers inaccessible | Blocks enterprise MCP adoption where stdio is impractical | References ACP spec directly; protocol compliance gap |

---

## Key PR Progress

| # | PR | Status | Description |
|---|-----|--------|-------------|
| [#3581](https://github.com/QwenLM/qwen-code/pull/3581) | **perf(core): cut runtime sync I/O on tool hot path by 91%** | ✅ Closed/merged | Eliminates 4 sync `fs` calls per recorded event (`existsSync`/`mkdirSync`/`appendFileSync`); critical for tool-heavy workloads |
| [#3598](https://github.com/QwenLM/qwen-code/pull/3598) | **feat(cli): add `--json-schema` for structured output in headless mode** | 🔄 Open | Enables `qwen -p` with enforced JSON Schema via synthetic `structured_output` tool; terminates session on schema violation |
| [#3576](https://github.com/QwenLM/qwen-code/pull/3576) | **Feat/OpenRouter auth** | 🔄 Open | Browser-based OAuth + model catalog curation; expands provider ecosystem significantly |
| [#3538](https://github.com/QwenLM/qwen-code/pull/3538) | **LLM-generated summary labels for tool-call batches** | 🔄 Open | Adds "why" synthesis to parallel tool execution UI; improves compact mode (`Ctrl+O`) readability |
| [#3600](https://github.com/QwenLM/qwen-code/pull/3600) | **fix(core): handle shell line continuations in command splitting** | 🔄 Open | Fixes [#3158](https://github.com/QwenLM/qwen-code/issues/3158); `\`-continued multiline commands now parsed correctly |
| [#3156](https://github.com/QwenLM/qwen-code/pull/3156) | **feat(permissions): strip dangerous patterns from YOLO auto-approve** | 🔄 Open | Security hardening: `rm -rf /`, `curl -d @/etc/passwd` etc. blocked even in YOLO mode |
| [#3115](https://github.com/QwenLM/qwen-code/pull/3115) | **feat: add commit attribution with per-file AI contribution tracking** | 🔄 Open | Git metadata for AI-authored lines; compliance/audit use case |
| [#3441](https://github.com/QwenLM/qwen-code/pull/3441) | **feat(cli): add conversation rewind with double-ESC and `/rewind`** | 🔄 Open | Non-destructive history rollback; parity with Claude Code `/branch` behavior |
| [#3539](https://github.com/QwenLM/qwen-code/pull/3539) | **feat(session): add `/branch` to fork current conversation** | 🔄 Open | Exploratory divergence without losing original thread; `forkedFrom` metadata |
| [#3562](https://github.com/QwenLM/qwen-code/pull/3562) | **feat(cli): add OSC notification support for iTerm2, Kitty, Ghostty** | 🔄 Open | Rich terminal-native notifications replacing basic bell; progressive enhancement per emulator |

---

## Feature Request Trends

1. **MCP Transport Expansion** — HTTP/SSE support in ACP mode ([#3549](https://github.com/QwenLM/qwen-code/issues/3549), [#3472](https://github.com/QwenLM/qwen-code/issues/3472)) is the dominant protocol ask; stdio-only is seen as limiting.
2. **Cost Transparency** — Native token pricing and per-session spend tracking ([#3585](https://github.com/QwenLM/qwen-code/issues/3585)) requested for multi-provider budgeting.
3. **Conversation Control** — Branching, rewinding, and delegation with isolated context ([#3539](https://github.com/QwenLM/qwen-code/pull/3539), [#3441](https://github.com/QwenLM/qwen-code/pull/3441), [#2332](https://github.com/QwenLM/qwen-code/issues/2332)) — users want Claude Code-level session management.
4. **VSCode Companion Parity** — `/export`, `/skills`, slash command reliability, and copy-to-clipboard still lagging CLI ([#1991](https://github.com/QwenLM/qwen-code/issues/1991), [#2548](https://github.com/QwenLM/qwen-code/pull/2548), [#3052](https://github.com/QwenLM/qwen-code/issues/3052), [#3592](https://github.com/QwenLM/qwen-code/issues/3592)).
5. **Plugin/Extension Architecture** — Formal hook system and auto-install ([#3580](https://github.com/QwenLM/qwen-code/issues/3580)) requested beyond current bundled skills model.

---

## Developer Pain Points

| Theme | Evidence | Severity |
|-------|----------|----------|
| **Auth & Onboarding Friction** | Local model config still prompts for auth ([#3532](https://github.com/QwenLM/qwen-code/issues/3532)); custom API key flow is "broken" ([#3582](https://github.com/QwenLM/qwen-code/issues/3582)); OpenRouter auth gaps ([#3576](https://github.com/QwenLM/qwen-code/pull/3576)) | 🔴 High — blocks first-run success |
| **Free Tier Uncertainty** | 119-comment thread on quota reduction ([#3203](https://github.com/QwenLM/qwen-code/issues/3203)); erodes trust for evaluators and contributors | 🔴 High — community relations risk |
| **Vision Pipeline Inconsistency** | Same model works via MCP but fails via native `ReadFile` ([#3597](https://github.com/QwenLM/qwen-code/issues/3597)); local vision config unclear ([#3595](https://github.com/QwenLM/qwen-code/issues/3595)) | 🟡 Medium — feature parity gap |
| **Provider Configuration Rigidity** | Duplicate model IDs across providers break parser ([#3555](https://github.com/QwenLM/qwen-code/issues/3555)); envKey fallback logic had bug losing settings-sourced keys ([#3495](https://github.com/QwenLM/qwen-code/pull/3495)) | 🟡 Medium — multi-provider resilience |
| **UI/Frontend Stability** | React crash in `/skills list` ([#3566](https://github.com/QwenLM/qwen-code/issues/3566)); VSCode tool-call ordering bugs ([#3571](https://github.com/QwenLM/qwen-code/issues/3571)); slash command trigger quirks ([#3592](https://github.com/QwenLM/qwen-code/issues/3592)) | 🟡 Medium — polish gaps vs. Claude Code |
| **Terminal/Platform Edge Cases** | Ctrl+C lag and escape sequence leakage on exit ([#3528](https://github.com/QwenLM/qwen-code/issues/3528)); RISC-V initialization failure ([#1674](https://github.com/QwenLM/qwen-code/issues/1674)) | 🟢 Lower — niche but persistent |

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*