# AI CLI Tools Community Digest 2026-04-07

> Generated: 2026-04-07 00:12 UTC | Tools covered: 8

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

# AI CLI Tools Ecosystem Report — 2026-04-07

## 1. Ecosystem Overview

The AI CLI tools landscape has matured into a competitive multi-vendor market with seven actively maintained tools, each balancing rapid feature iteration against stability demands. Claude Code and OpenAI Codex lead in enterprise mindshare but face significant community friction around billing transparency and token economics. Google Gemini CLI and GitHub Copilot CLI are consolidating enterprise-focused capabilities, while OpenCode, Pi, Qwen Code, and Kimi CLI pursue differentiated niches through protocol flexibility, extension systems, and regional market optimization. The sector shows convergent pressure toward MCP ecosystem standardization, remote development parity, and production-grade reliability—yet vendors remain split on architectural bets (Python vs. Rust vs. TypeScript runtimes, open vs. closed source).

---

## 2. Activity Comparison

| Tool | Issues (24h) | PRs (24h) | Releases | Release Velocity | Notable |
|------|-------------|-----------|----------|----------------|---------|
| **Claude Code** | 50 | 9 | None | Stable | No releases; heavy issue triage on metering/quality regressions |
| **OpenAI Codex** | 50 | 50 | rust-v0.119.0-alpha.12 | Rapid alpha (daily) | Highest PR velocity; analytics infrastructure focus |
| **Gemini CLI** | ~15 | ~10 | v0.36.0-nightly | Nightly | Security fix landed; enterprise policy breaking changes |
| **GitHub Copilot CLI** | 30+ | 0 | v1.0.19, v1.0.19-0 | Bi-daily patch | Release-focused phase; no public PR activity |
| **Kimi CLI** | ~8 | 4 | None | Stable | Architectural rewrite debate (#1707) |
| **OpenCode** | 50 | 50 | v1.3.16, v1.3.17 | Rapid (2×/24h) | Fastest release cadence; model-specific bug triage |
| **Pi** | ~10 | 10 | None | Stable | 18 merges in 24h; extension system heavy |
| **Qwen Code** | ~10 | 10 | None (nightly failed) | Nightly (unstable) | Subagent system push; review capability upgrade |

---

## 3. Shared Feature Directions

| Requirement | Tools | Specific Needs |
|-------------|-------|--------------|
| **MCP ecosystem maturity** | Claude Code, OpenAI Codex, Gemini CLI, GitHub Copilot CLI, Qwen Code, Kimi CLI | Server lifecycle management (#679, #1769), enterprise policy allowlists (#599), auto-discovery (#2672), cloud/CI access (#43397) |
| **Remote/SSH development parity** | OpenAI Codex (#10450), Claude Code (#26694), Gemini CLI (#24202) | Desktop app SSH remote hosts, terminal fidelity over SSH, detection logic |
| **Token/cost transparency & control** | Claude Code (#38335), OpenAI Codex (#14593, #13733), Gemini CLI (#23264, #12446) | Real-time burn visibility, quota fallback logic, subscription tier recognition |
| **Session management & recovery** | OpenCode (#21236, #6719), Pi (#2888), Qwen Code (#2917, #2933), Claude Code (#30869) | Confirmation dialogs, `/reload`, import/export, timeline introspection |
| **Terminal environment fidelity** | All tools | Windows Terminal paste conflicts (#781, #15051), theme detection (#1770, #6823), scrollback preservation (#42670), color contrast (#547) |
| **Plan/approval mode workflows** | Qwen Code (#2921), OpenAI Codex (#13942), Claude Code (#15898) | Structured approval, persistence, non-interactive policy enforcement |
| **Audio/background notifications** | OpenAI Codex (#3962), Claude Code (implied) | Completion sounds for async workflows |

---

## 4. Differentiation Analysis

| Dimension | Claude Code | OpenAI Codex | Gemini CLI | GitHub Copilot CLI | OpenCode | Pi | Qwen Code | Kimi CLI |
|-----------|-------------|--------------|------------|-------------------|----------|-----|-----------|----------|
| **Runtime** | Proprietary | Rust | Rust | Proprietary | TypeScript | TypeScript | Rust | TypeScript |
| **Source availability** | Closed | Open | Open | Closed | Open | Open | Open | Open |
| **Target user** | Professional engineers | Enterprise/Pro tier | Google Cloud ecosystem | GitHub/Microsoft shops | Multi-model power users | Extension developers | Alibaba Cloud/APAC | Moonshot API users |
| **Architectural bet** | Cowork VMs, tight Anthropic integration | Rust performance, analytics/observability | Enterprise policy engine, ACP protocol | MCP-first, IDE bridge | Plugin ecosystem, ACP, web app | Extension system, timezone-aware agents | Subagent orchestration, `/thinkback` | Cost-optimized context compression |
| **Key differentiator** | Deep reasoning model access | Fast Mode dynamic routing, alarm tool | Auto-memory configuration, policy TOML | Native GitHub integration, OpenTelemetry | Rapid multi-model support, mobile touch | `PI_CODING_AGENT` env detection, Bedrock IAM | Competitive `/review`, deterministic analysis | Incremental session memory proposal |
| **Current vulnerability** | Session metering trust, quality regressions | Token burn rate, Windows stability | Subscription recognition, PTY leaks | MCP server detection, custom instruction drift | Model-specific fragility, data-loss shortcuts | Antigravity deprecation breakage | TUI flickering, legacy Linux support | Async orchestration deadlocks |

---

## 5. Community Momentum & Maturity

| Tier | Tools | Indicators |
|------|-------|------------|
| **High velocity, high friction** | Claude Code, OpenAI Codex | 400+ comment issues, billing/quality crises, emotional community tone; largest absolute engagement but trust erosion |
| **High velocity, consolidating** | OpenCode, Pi | Rapid releases (OpenCode: 2/day), 10–18 daily merges (Pi), active feature expansion with manageable issue load |
| **Measured enterprise pace** | Gemini CLI, GitHub Copilot CLI | Nightly/stable cadence, breaking changes with migration paths, policy/security focus, lower absolute issue volume |
| **Emerging, building** | Qwen Code, Kimi CLI | Smaller issue base but focused architectural pushes (subagents, context compression); language diversity (Chinese, Russian reports) signals geographic expansion |

**Most active communities by engagement depth:** OpenAI Codex (#14593: 450 comments), Claude Code (#38335: 437 comments).  
**Most rapid iteration:** OpenCode (releases), Pi (merges), OpenAI Codex (PR velocity).  
**Highest enterprise maturity signals:** Gemini CLI (policy engine), GitHub Copilot CLI (MCP persistence, OpenTelemetry).

---

## 6. Trend Signals

| Trend | Evidence | Developer Implication |
|-------|----------|----------------------|
| **Billing/trust crisis as competitive vector** | #38335, #14593, #16917 | Users increasingly compare tools on *predictable* cost; opaque metering becomes churn driver |
| **MCP as de facto standard, with gaps** | #43397, #679, #1769, #2672 | Tool vendors must solve cloud/CI MCP access and server lifecycle management to capture automation use cases |
| **Terminal environment heterogeneity exceeds abstraction capacity** | #42670, #781, #24202, #2928, #1770 | Cross-platform CLI development requires deeper terminal emulator partnerships, not just detection heuristics |
| **Context compression as cost architecture** | #1691, #2871, #13733 | Long-session tools face pressure to eliminate O(n²) token patterns; incremental/memory-based approaches emerging |
| **Remote development as table stakes** | #10450 (499 👍), #26694, #10823 | Desktop-first tools without SSH parity risk ceding professional workflows to VS Code Remote competitors |
| **Subagent/parallel execution as next frontier** | #2409, #2929, #2930, #1768 | Single-agent tools face capability ceiling; orchestration reliability (focus conflicts, deadlocks) determines production readiness |
| **Open source as community pressure valve, not strategy** | #41447, #41611, #1707 | Symbolic PRs with zero maintainer response indicate governance gaps; rewrite proposals suggest architectural dissatisfaction |

---

*Report compiled from 8 community digests covering 200+ issues and 150+ PRs, 2026-04-06/07.*

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
*Data as of 2026-04-07*

---

## 1. Top Skills Ranking (Most-Discussed PRs)

| Rank | Skill | Status | Description | Discussion Highlights |
|:---|:---|:---|:---|:---|
| 1 | **[document-typography](https://github.com/anthropics/skills/pull/514)** | OPEN | Typographic quality control for AI-generated documents—prevents orphans, widows, and numbering misalignment | Addresses universal pain point affecting "every document Claude generates"; author notes users rarely ask for good typography but always suffer from bad typography |
| 2 | **[frontend-design](https://github.com/anthropics/skills/pull/210)** | OPEN | Revised frontend-design skill with improved clarity, actionability, and single-conversation execution scope | Focus on token efficiency and "actually followable" instructions; critiques verbose, educational tone of existing skills |
| 3 | **[skill-quality-analyzer + skill-security-analyzer](https://github.com/anthropics/skills/pull/83)** | OPEN | Meta-skills for evaluating Claude Skills across 5 quality dimensions and security posture | First comprehensive quality tooling for the Skills ecosystem itself; 20% weight on structure/documentation signals community maturity |
| 4 | **[ODT](https://github.com/anthropics/skills/pull/486)** | OPEN | OpenDocument text creation, template filling, and ODT-to-HTML parsing (ISO/IEC 26300) | Fills gap between proprietary DOCX and plain text; targets LibreOffice/Collabora/OnlyOffice workflows |
| 5 | **[CONTRIBUTING.md](https://github.com/anthropics/skills/pull/509)** | OPEN | Community health documentation addressing 25% GitHub community health score | Meta-infrastructure; closes [#452](https://github.com/anthropics/skills/issues/452) |
| 6 | **[system documentation/flowcharts](https://github.com/anthropics/skills/pull/95)** | OPEN | Comprehensive evidence management system documentation with architecture diagrams | Unusually thorough for a single PR—includes 4 separate markdown documents covering executive summary through network topology |
| 7 | **[SAP-RPT-1-OSS](https://github.com/anthropics/skills/pull/181)** | OPEN | SAP's open-source tabular foundation model for predictive analytics on SAP business data | Enterprise ERP integration; Apache 2.0 model from SAP TechEd 2025 |
| 8 | **[DOCX tracked changes fix](https://github.com/anthropics/skills/pull/541)** | OPEN | Fixes document corruption from `w:id` collisions between tracked changes and existing bookmarks | Technical depth: identifies shared OOXML ID space across bookmarks, tracked changes, comments, and move ranges |

---

## 2. Community Demand Trends (From Issues)

| Trend | Evidence | Implication |
|:---|:---|:---|
| **Enterprise governance & trust boundaries** | [#492](https://github.com/anthropics/skills/issues/492) (security impersonation risk), [#228](https://github.com/anthropics/skills/issues/228) (org-wide sharing), [#532](https://github.com/anthropics/skills/issues/532) (SSO/enterprise auth) | Skills moving from individual productivity to organizational infrastructure |
| **Testing & quality automation** | [#556](https://github.com/anthropics/skills/issues/556) (0% skill trigger rate in evals), [#202](https://github.com/anthropics/skills/issues/202) (skill-creator best practices) | Demand for validated, measurable Skill performance |
| **Multi-platform deployment** | [#29](https://github.com/anthropics/skills/issues/29) (AWS Bedrock), [#16](https://github.com/anthropics/skills/issues/16) (MCP exposure) | Skills as portable API contracts beyond Claude Code |
| **Skill lifecycle management** | [#62](https://github.com/anthropics/skills/issues/62) (disappearing skills), [#406](https://github.com/anthropics/skills/issues/406), [#403](https://github.com/anthropics/skills/issues/403) (upload/delete failures) | Production reliability expectations |

---

## 3. High-Potential Pending Skills

| Skill | PR | Why It May Land Soon |
|:---|:---|:---|
| **testing-patterns** | [#723](https://github.com/anthropics/skills/pull/723) | Comprehensive coverage (Testing Trophy, AAA pattern, React Testing Library, MSW); addresses [#556](https://github.com/anthropics/skills/issues/556) evaluation gaps |
| **sensory (macOS automation)** | [#806](https://github.com/anthropics/skills/pull/806) | Novel approach: AppleScript instead of screenshot-based computer use; two-tier permission system shows security awareness |
| **quality-playbook** | [#659](https://github.com/anthropics/skills/pull/659) | "AI to make [quality engineering] cheap enough to run on every project"—distinctive value prop vs. code-centric testing tools |
| **codebase-inventory-audit** | [#147](https://github.com/anthropics/skills/pull/147) | Systematic 10-step workflow for technical debt; produces `CODEBASE-STATUS.md` as single source of truth |
| **shodh-memory** | [#154](https://github.com/anthropics/skills/pull/154) | Persistent memory across conversations—addresses core Claude limitation; proactive context retrieval pattern |

---

## 4. Skills Ecosystem Insight

> **The community's most concentrated demand is for production-grade reliability infrastructure**—meta-skills that validate, secure, and govern other skills, plus enterprise authentication and organizational sharing mechanisms, reflecting a shift from experimental personal automation to mission-critical team workflows.

---

---

# Claude Code Community Digest — 2026-04-07

## Today's Highlights

The community continues to grapple with **session limit exhaustion on Max plans** (#38335), now with 437 comments and 346 upvotes as users report abnormal consumption since late March. A **high-engagement model quality discussion** (#42796) was closed after 365 upvotes and extensive feedback on February updates degrading complex engineering performance. Meanwhile, **Cowork VM reliability** (#27801) and **permission system regressions** (#36168) remain unresolved pain points driving significant developer friction.

---

## Releases

*No releases in the last 24 hours.*

---

## Hot Issues

| Issue | Why It Matters | Community Reaction |
|-------|--------------|-------------------|
| [#38335 — Max plan session limits exhausted abnormally fast](https://github.com/anthropics/claude-code/issues/38335) | Critical billing/usage issue affecting paid subscribers; potential metering bug or policy change | 437 comments, 346 👍 — highest engagement issue; users sharing detailed usage logs |
| [#42796 — Unusable for complex engineering tasks with Feb updates](https://github.com/anthropics/claude-code/issues/42796) | **CLOSED** — Model quality regression impacting professional workflows; sparked debate on iterative degradation | 365 👍, 65 comments; closed by maintainers without resolution, frustrated follow-ups |
| [#27801 — Cowork "Failed to start Claude's workspace"](https://github.com/anthropics/claude-code/issues/27801) | Blocks containerized development workflows; VM service instability persists across reboots | 57 comments, ongoing diagnostics; no maintainer response in recent updates |
| [#36168 — Bypass/dangerously skip permissions broken since v2.1.77](https://github.com/anthropics/claude-code/issues/36168) | Regression breaks automation workflows dependent on non-interactive permission modes | 39 comments, 45 👍; macOS/VS Code specific; workaround requests unaddressed |
| [#1302 — Custom terminal themes beyond built-in options](https://github.com/anthropics/claude-code/issues/1302) | Long-standing accessibility/aesthetics request; 6 themes insufficient for diverse terminal environments | 122 👍, 29 comments; active since May 2025; community theme workarounds shared |
| [#26694 — Support macOS as SSH remote host](https://github.com/anthropics/claude-code/issues/26694) | Platform parity gap — Linux-only SSH remotes exclude macOS-heavy development environments | 37 👍, 13 comments; darwin platform detection appears straightforward fix |
| [#42670 — No scrollback access due to alternate screen buffer](https://github.com/anthropics/claude-code/issues/42670) | **Critical UX regression** in v2.1.89+ — destroys native terminal history, breaking review workflows | 9 👍, 4 comments; marked duplicate but root issue persists; terminal emulator conflicts |
| [#41148 — Model ignores review-before-acting after context compression](https://github.com/anthropics/claude-code/issues/41148) | Safety-critical: compressed context summaries treated as user approval for destructive operations | 6 comments; reproducible; no maintainer acknowledgment |
| [#43397 — Cloud scheduled tasks cannot access MCP connectors](https://github.com/anthropics/claude-code/issues/43397) | Blocks serverless/CI Claude Code usage; MCP tools fail to load in cloud sessions | 6 👍, 8 comments; marked duplicate; cloud/web parity gap |
| [#44436 — Cowork fails on Windows with Plan9 share HRESULT 0x80070005](https://github.com/anthropics/claude-code/issues/44436) | Microsoft Store install path broken; permission error on Windows container shares | New issue (2 comments); Windows-specific Cowork fragility |

---

## Key PR Progress

| PR | Description | Status |
|----|-------------|--------|
| [#41661 — Add 14 Revolutionary Claude Code Plugins](https://github.com/anthropics/claude-code/pull/41661) | Security, performance, architecture, fullstack automation plugins; marketplace expansion to 27 plugins | **CLOSED** — likely rejected as promotional/external contribution |
| [#41938 — Linux/macOS Bash script for DevContainer startup](https://github.com/anthropics/claude-code/pull/41938) | Cross-platform parity for DevContainer launch; addresses Windows-only PowerShell limitation | Open, no maintainer response |
| [#44393 — Fix DAYS_BACK env var in backfill-duplicate-comments script](https://github.com/anthropics/claude-code/pull/44393) | Workflow bugfix: script ignored pagination cutoff, causing unnecessary API load | Open, same-day submission |
| [#41611 — Add the missing source to claude code](https://github.com/anthropics/claude-code/pull/41611) | Community pressure for open source continues; minimal description | Open, no engagement |
| [#41447 — Open source claude code ✨](https://github.com/anthropics/claude-code/pull/41447) | Closes 5 longstanding open-source requests; symbolic PR given repository structure | Open, 0 engagement from maintainers |
| [#44159 — Java security patterns for security-guidance plugin](https://github.com/anthropics/claude-code/pull/44159) | Adds SQL injection, XXE, deserialization, JNDI, command injection rules; fixes pattern matching bug | Open, production-ready contribution |
| [#44071 — Capitalize 'Get Started' heading in README](https://github.com/anthropics/claude-code/pull/44071) | Trivial docs fix; indicates low maintainer bandwidth for community PRs | Open |
| [#44055 — Fix YAML block scalars in agent descriptions](https://github.com/anthropics/claude-code/pull/44055) | Fixes `mapping values are not allowed` error in 6 agent files; unquoted colons broke parsing | Open, same-day fix for validated bug |
| [#1 — Create SECURITY.md](https://github.com/anthropics/claude-code/pull/1) | Baseline security policy | **CLOSED** |

---

## Feature Request Trends

**1. Terminal/UX Customization** — Dominant theme: custom themes (#1302), scrollback preservation (#42670), visual distinction for user messages (#34269), and YOLO mode in permission cycling (#15898). Developers want Claude Code to respect native terminal conventions and offer more granular UI control.

**2. Cross-Platform Parity** — macOS SSH remotes (#26694), Windows Cowork stability (#44436), and Linux DevContainer scripts (#41938) highlight uneven feature availability across platforms.

**3. Session/Context Management** — Unarchiving sessions (#30869), hook exit codes (#27244), session-start prevention hooks (#44443), and multi-account switching (#30031) indicate sophisticated workflow integration needs.

**4. Permission & Safety Automation** — `bypassPermissions` regressions (#36168) and review-constraint failures (#41148) show tension between automation and safety guarantees.

---

## Developer Pain Points

| Category | Manifestation | Frequency |
|----------|-------------|-----------|
| **Usage Metering Transparency** | Max plan exhaustion without clear metrics (#38335); no real-time session burn visibility | Critical, ongoing |
| **Model Quality Volatility** | Perceived degradation in reasoning depth; "flip-flopping" between theories (#44445, #42796) | High, emotional |
| **Cowork/Container Reliability** | VM startup failures, Windows share errors, sandbox GPU passthrough gaps (#27801, #44436, #13108) | Persistent |
| **MCP/Integration Gaps** | Cloud tasks lack MCP (#43397), pagination ignored (#39586), LSP dynamic registration broken (#32595) | Moderate, blocking |
| **TUI Regressions** | Alternate screen buffer breaks scrollback (#42670), spinner jitter (#41007), permission path confusion (#28248) | Recent spike |
| **Open Source Frustration** | Multiple symbolic PRs (#41447, #41611) with zero maintainer engagement; community feels unheard | Chronic |

---

*Digest compiled from 50 issues and 9 PRs updated 2026-04-06 to 2026-04-07.*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-04-07

---

## 1. Today's Highlights

The Codex team shipped **rust-v0.119.0-alpha.12** as the latest pre-release, while community attention remains fixated on runaway token consumption—Issue #14593 has ballooned to **450 comments** with users reporting rapid credit burn during background process polling. Meanwhile, a significant push on **analytics infrastructure** and **model capability detection** (Fast Mode support via metadata) suggests the team is prioritizing observability and flexible model routing ahead of broader stability fixes.

---

## 2. Releases

| Version | Notes |
|---------|-------|
| [rust-v0.119.0-alpha.12](https://github.com/openai/codex/releases/tag/rust-v0.119.0-alpha.12) | Pre-release; no detailed changelog provided. Follows rapid alpha iteration pattern. |

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|--------------|------------------|
| [#14593](https://github.com/openai/codex/issues/14593) | **Burning tokens very fast** — Business-tier user reports excessive consumption | **450 comments, 170 👍** — the most engaged issue in the repo; directly impacts cost control and trust | Frustration mounting; users sharing workarounds, demanding transparency on billing logic |
| [#10450](https://github.com/openai/codex/issues/10450) | **Remote Development in Codex Desktop App** — SSH/remote workspace support missing | **499 👍, 103 comments** — critical gap for professional workflows vs. VS Code | Strong consensus this is blocking enterprise adoption; "congratulations but..." tone |
| [#10601](https://github.com/openai/codex/issues/10601) | **Sandbox setup error on Windows** — bwrap/sandbox failures on Windows 10/11 | Persistent Windows compatibility gap; blocks secure execution | 10 👍, 41 comments of debugging attempts; "other provider" subscription noted |
| [#3962](https://github.com/openai/codex/issues/3962) | **Play sound when Codex finishes** — audio notification for long-running tasks | **131 👍** — quality-of-life feature with clear use case (background work) | Broad support; considered table-stakes for async workflows |
| [#14936](https://github.com/openai/codex/issues/14936) | **bwrap: Approval prompt spam** — regression causing per-command approvals | Breaks flow state; sandbox UX degraded from earlier versions | 16 👍, users comparing to previous behavior |
| [#13733](https://github.com/openai/codex/issues/13733) | **Background polling wastes tokens** — each `write_stdin` poll triggers full API round-trip with full history | **Root cause of #14593?** — architectural issue causing O(n²) token burn | Technical analysis appreciated; 9 👍 from power users |
| [#16158](https://github.com/openai/codex/issues/16158) | **App unresponsive for 5 mins after startup** — macOS plugin initialization hang | Pro-tier user blocked at launch; "first time" suggests regression | 2 👍, detailed logs provided |
| [#16006](https://github.com/openai/codex/issues/16006) | **UI flashes 'New Plugin' then reverts to 'Skills'** — state inconsistency on startup | Confusing UX; suggests race condition in plugin system initialization | 5 👍, Windows-specific |
| [#12414](https://github.com/openai/codex/issues/12414) | **Unbounded memory growth on Windows** — idle CLI reaches ~90GB commit | **Critical stability issue** — OOM risk; 0.104.0 specific | 0 👍 but severe; needs urgent attention |
| [#14513](https://github.com/openai/codex/issues/14513) | **Codex stops mid-turn, answers old question** — context/hallucination bug | Breaks task continuity; agent state corruption | 9 👍, "200usd pro" user impacted |

---

## 4. Key PR Progress

| # | PR | Description | Impact |
|---|-----|-------------|--------|
| [#16962](https://github.com/openai/codex/pull/16962) | **Refactor config types into separate crate** | Isolates config macros to reduce compile-time code bloat | Build performance; maintainability |
| [#16949](https://github.com/openai/codex/pull/16949) | **Use model metadata for Fast Mode support** | Adds `supportsFastMode` capability flag; TUI reads metadata instead of hardcoded slugs | Enables dynamic Fast Mode UI across model versions |
| [#16950](https://github.com/openai/codex/pull/16950) | **Preserve accidental /clear recovery via /resume** | Captures displaced thread before `/clear` or `/new`; shows `/resume` hint | **UX win** — reduces catastrophic data loss from miskey |
| [#16912](https://github.com/openai/codex/pull/16912) | **Generate installation_id for analytics** | Persists UUID in `$CODEX_HOME/installation_id`; passes via `client_metadata` | Debugging/traceability; privacy-conscious telemetry |
| [#16953](https://github.com/openai/codex/pull/16953) | **Add alarm tool** | Thread-local alarms for `/loop` scheduling; survives harness restarts | **Major feature** — enables cron-like automation within Codex |
| [#16875](https://github.com/openai/codex/pull/16875) | **Support anyOf and enum in JsonSchema** | Expands structured output schema support; richer function signatures in code mode | Better tool definitions; OpenAI API alignment |
| [#16944](https://github.com/openai/codex/pull/16944) | **Expand tool search to custom MCPs** | Tool discovery now covers user-defined MCP servers, not just built-ins | **MCP ecosystem growth** |
| [#16937](https://github.com/openai/codex/pull/16937) | **Surface remote startup exec approvals** | Plumbs approval flow for remote unified-exec sandbox startup | Security/consistency for remote execution |
| [#16640](https://github.com/openai/codex/pull/16640) | **[codex-analytics] feature plumbing and emittance** | Core-emitted facts for turn config; ingestion from app-server events | **Observability foundation** — part of stacked analytics PRs |
| [#16960](https://github.com/openai/codex/pull/16960) | **Add app-server realtime call creation** | Experimental WebRTC realtime call routing (API key + ChatGPT auth paths) | **Realtime API integration** — voice/interactive features |

---

## 5. Feature Request Trends

| Theme | Evidence | Momentum |
|-------|----------|----------|
| **Remote/SSH development** | #10450 (499 👍), #10823 | **Highest demand** — desktop app seen as incomplete without parity to VS Code Remote |
| **Audio notifications** | #3962 (131 👍) | Established pattern for background-task tools |
| **Markdown export/copy** | #2880 (44 👍) | Documentation/integration workflows |
| **Plan mode by default** | #13942 (5 👍) | Power-user workflow customization |
| **Hook event discrimination** | #16226 | Multi-agent observability needs |
| **MCP ecosystem expansion** | #16944, #16082 | Custom tools becoming first-class |

---

## 6. Developer Pain Points

| Category | Symptoms | Root Issues |
|----------|----------|-------------|
| **Token economics** | #14593, #13733, #16900, #16917 | Background polling with full history; subagent inefficiencies; billing transparency gaps |
| **Windows stability** | #10601, #12414, #14586, #15975, #13659 | Sandbox (bwrap) compatibility; memory leaks; extension loading failures |
| **Context management** | #10823, #11641, #12468, #12790, #10877 | Compaction failures; "ran out of room" errors; Spark-specific issues |
| **Agent coordination** | #14513, #13491, #15723, #16900 | Subagent state inheritance bugs; premature stall detection; wake/signal failures |
| **Startup reliability** | #16158, #16006 | Plugin initialization races; worktree creation timeouts (#16936) |
| **Azure/enterprise gaps** | #16916 | Azure Foundry payload issues; business-tier billing discrepancies (#16917) |

---

*Digest compiled from 50 issues and 50 PRs updated 2026-04-06/07. For real-time updates: [github.com/openai/codex](https://github.com/openai/codex)*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-04-07

---

## 1. Today's Highlights

The v0.36.0 nightly release brings significant performance improvements with terminal serializer optimization and automatic memory configuration. A critical security fix for environment variable redaction landed, while the team actively addresses model override propagation issues in the BeforeModel hook system. Enterprise policy configuration is undergoing breaking changes to require explicit mode declarations for safer defaults.

---

## 2. Releases

**v0.36.0-nightly.20260406.15298b28c**
- **Terminal Serializer Optimization** — Performance improvements for terminal rendering by @jacob314
- **Auto-configure memory** — Dynamic memory configuration eliminating manual tuning
- **Code quality fix** — Eliminated unused error variables in catch blocks by @alisa-alisa

---

## 3. Hot Issues

| Issue | Why It Matters | Community Reaction |
|-------|--------------|-------------------|
| [#16060](https://github.com/google-gemini/gemini-cli/issues/16060) Crash after update to v0.23 — Persistent freezing during long-running conductor sessions, unresponsive to SIGINT | Critical stability regression affecting production workflows | 22 comments, 4 👍 — active investigation needed |
| [#21847](https://github.com/google-gemini/gemini-cli/issues/21847) BeforeModel hook ignores `llm_request.model` override | Breaks custom model routing logic for enterprise users | 15 comments, marked "help wanted" — fix in progress at #24784 |
| [#16369](https://github.com/google-gemini/gemini-cli/issues/16369) MCP resources with huge blob payload crashes CLI — **CLOSED** | Resolved critical MCP server integration failure for document-heavy workflows | 12 comments, resolved |
| [#24734](https://github.com/google-gemini/gemini-cli/issues/24734) OAuth success but 403 PERMISSION_DENIED for Google AI Pro | Subscription recognition failure blocking paid users | 4 comments, 3 👍 — emerging pattern with #12446 |
| [#23264](https://github.com/google-gemini/gemini-cli/issues/23264) gemini-3-flash-preview quota blocks other models | Model fallback logic failure when quota exhausted | 3 comments — impacts cost-conscious users |
| [#12446](https://github.com/google-gemini/gemini-cli/issues/12446) CLI stuck on "auto" model, fails to recognize Google AI Pro | Long-standing subscription tier detection issue | 3 comments, 3 👍 — linked to #24734 |
| [#15051](https://github.com/google-gemini/gemini-cli/issues/15051) Alt+V for direct image paste from clipboard | High-UX feature parity request vs. Codex CLI/Claude Code | 3 comments, 9 👍 — strong community demand |
| [#20394](https://github.com/google-gemini/gemini-cli/issues/20394) Thought chain exposed + infinite loop on image upload | Agent introspection leakage and runaway execution | 4 comments — agent reliability concern |
| [#24796](https://github.com/google-gemini/gemini-cli/issues/24796) Leaking PTYs on macOS — 498 open `/dev/ptmx` handles | Resource exhaustion bug affecting long-running sessions | 2 comments — infrastructure stability |
| [#24749](https://github.com/google-gemini/gemini-cli/issues/24749) Infinite "crazy thinking" after Portuguese prompt — **CLOSED** | Edge case in agent termination logic triggered by specific input | 3 comments, resolved |

---

## 4. Key PR Progress

| PR | Feature/Fix | Significance |
|----|-------------|------------|
| [#24784](https://github.com/google-gemini/gemini-cli/pull/24784) Propagate BeforeModel hook model override end-to-end | Completes #22326 fix; enables reliable model switching via hooks | Critical for enterprise policy workflows |
| [#24758](https://github.com/google-gemini/gemini-cli/pull/24758) **BREAKING**: Require `modes` field in policy TOML rules | Prevents unintended tool behavior from default-all-modes rules | Security hardening with migration impact |
| [#24793](https://github.com/google-gemini/gemini-cli/pull/24793) Selective topic expansion + click-to-expand | Interactive history navigation improvement | UX enhancement for conversation review |
| [#24664](https://github.com/google-gemini/gemini-cli/pull/24664) ACP host input requests for `ask_user`/`exit_plan_mode` | Enables headless ACP clients to handle interactive prompts | Automation/CI integration enabler |
| [#24752](https://github.com/google-gemini/gemini-cli/pull/24752) Decoupled ContextManager and Sidecar architecture | Foundation for #24751 fix; improves agent modularity | Architectural modernization |
| [#24489](https://github.com/google-gemini/gemini-cli/pull/24489) Unified `invoke_subagent` tool + virtual tool aliases | Simplifies subagent delegation, reduces policy duplication | Agent orchestration cleanup |
| [#24677](https://github.com/google-gemini/gemini-cli/pull/24677) Refined tool output formatting for compact mode | Terse search/read tools, consistent listing verbiage | Information density improvement |
| [#24795](https://github.com/google-gemini/gemini-cli/pull/24795) Fix incorrect tmux detection logic | Eliminates false alternate-buffer warnings | Terminal compatibility |
| [#24789](https://github.com/google-gemini/gemini-cli/pull/24789) Dynamic extension plan resolution with lazy init | MRU-based isolation, resolves circular dependencies | Extension system robustness |
| [#24767](https://github.com/google-gemini/gemini-cli/pull/24767) **CLOSED** Respect global environment variable allowlist | Fixed security regression in redaction config loading | Security fix merged |

---

## 5. Feature Request Trends

**Clipboard Integration** — Direct image paste (Alt+V) is the highest-voted open request (#15051, 9 👍), driven by parity with competing tools.

**Model Management** — Strong demand for reliable subscription tier recognition (#12446, #24734) and intelligent quota fallback (#23264).

**Agent Observability** — Multiple issues around thought chain leakage (#20394, #24781) indicate need for cleaner agent introspection boundaries.

**Enterprise Policy** — Active workstream on simplifying TOML rule complexity (#24798, #24769) while making mode declarations mandatory for safety.

---

## 6. Developer Pain Points

| Category | Issue | Frequency |
|----------|-------|-----------|
| **Stability** | Crashes during long sessions (#16060), PTY leaks (#24796), infinite loops (#24749) | High — production blocker |
| **Model/Quota Handling** | Subscription misrecognition, quota exhaustion blocking alternatives | Recurring — billing UX |
| **SSH/Remote** | Scrambled text over SSH (#24202), SSH detection needed (#24546) | Moderate — remote dev friction |
| **Agent Reliability** | Unsafe cloning patterns (#22863), thought leakage (#24781), tmp script sprawl (#23571) | Moderate — code quality |
| **Edit Robustness** | Newline handling failures (#16134) causing syntax errors | Persistent — file operations |
| **Security Config** | Recent regressions in env var redaction (#18302, #24767) now fixed, but fragility noted | Spikes — config loading |

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-04-07

---

## 1. Today's Highlights

GitHub shipped **v1.0.19** with critical MCP (Model Context Protocol) stability improvements—MCP enable/disable states now persist across sessions, and OpenTelemetry monitoring gains finer-grained streaming latency metrics. The release also fixes a long-standing macOS plugin hook execution bug. Meanwhile, the issue tracker shows heavy community activity around MCP server reliability, custom instruction handling, and enterprise policy enforcement, with 30+ issues updated in the past 24 hours signaling active triage ahead of a likely broader release.

---

## 2. Releases

### [v1.0.19](https://github.com/github/copilot-cli/releases/tag/v1.0.19) (2026-04-06)

| Change | Impact |
|--------|--------|
| `/mcp enable` and `/mcp disable` persist across sessions | Eliminates repeated configuration for MCP-heavy workflows |
| OpenTelemetry: subagent spans use `INTERNAL` kind; chat spans add `github.copilot.time_to_first_chunk` | Better observability for streaming performance debugging |
| Plugin hook scripts with missing execute permissions now run correctly on macOS | Fixes silent failures in custom tool integrations |

### [v1.0.19-0](https://github.com/github/copilot-cli/releases/tag/v1.0.19-0) (2026-04-06)

| Change | Impact |
|--------|--------|
| Skip IDE auto-connect when session already in use by another client | Reduces connection contention in multi-client setups |
| Slash command timeline entries include command name (e.g., "Review", "Plan") | Improved session history readability |

---

## 3. Hot Issues

| Issue | Why It Matters | Community Reaction |
|-------|--------------|------------------|
| [#679](https://github.com/github/copilot-cli/issues/679) Local MCP server detection broke in v0.0.359+ | **Critical regression** for MCP-dependent users; 18 comments show deep debugging collaboration | 5 👍; author provided detailed version bisection |
| [#566](https://github.com/github/copilot-cli/issues/566) Auto-update feature request | Long-standing UX gap—users tired of manual version checks | 10 👍; high demand signal |
| [#713](https://github.com/github/copilot-cli/issues/713) Custom instructions not auto-loaded despite docs | **Documentation/implementation drift**—frustrating for users relying on `.github/instructions.md` workflows | 18 👍; significant traction |
| [#599](https://github.com/github/copilot-cli/issues/599) Enterprise MCP policy enforcement | **Blocker for enterprise adoption**—security teams need allowlist controls before CLI deployment | 6 👍; Microsoft employee engagement |
| [#714](https://github.com/github/copilot-cli/issues/714) Session history search | Core productivity gap—users manually grepping JSONL files | 9 👍; detailed feature specification provided |
| [#547](https://github.com/github/copilot-cli/issues/547) / [#562](https://github.com/github/copilot-cli/issues/562) Terminal color contrast bugs (grey on white) | **Accessibility regression** affecting default Mac setups | Multiple reports; workaround: theme overrides |
| [#475](https://github.com/github/copilot-cli/issues/475) WSL terminal setup support | Surprising gap for Microsoft product; blocks Windows developer workflows | 4 👍; vim mode also requested |
| [#688](https://github.com/github/copilot-cli/issues/688) Respect `BASH_ENV`/`~/.bashrc` in bash tool | Safety-critical for users with `rm`→`trash` wrappers and custom functions | 5 👍; detailed use case with safety wrapper example |
| [#670](https://github.com/github/copilot-cli/issues/670) Read user instructions from `~/.github` | Personalization gap—users want dotfile-based preferences alongside repo-level configs | Niche but clear use case |
| [#548](https://github.com/github/copilot-cli/issues/548) Claude Sonnet 4.5 / GPT-5 hangs in long sessions | **Stability regression** in v0.0.355; workaround is version rollback | 5 comments; regression pattern identified |

---

## 4. Key PR Progress

**No open PRs updated in the last 24 hours.** The repository appears to be in a release-focused phase with changes landing directly via tagged releases rather than public PR review. This suggests either:
- Internal development with private branches
- Pre-1.0 stabilization period with reduced community contribution velocity

*Worth monitoring for PR activity resumption post-v1.0 stabilization.*

---

## 5. Feature Request Trends

| Trend | Evidence | Implied Direction |
|-------|----------|-----------------|
| **MCP ecosystem maturity** | #679, #599, #693, #684 | First-class MCP server lifecycle management, enterprise policy gates, multi-agent orchestration |
| **Configuration hierarchy expansion** | #713, #670, #688 | Unified config model: repo → user → enterprise layers; shell environment inheritance |
| **Session observability & recovery** | #714, #641, #574, #707 | Built-in history search, granular execution control (skip vs. deny), streaming resilience |
| **Cross-platform terminal fidelity** | #475, #540, #660 | Native WSL support, keybinding preservation, multiline input ergonomics |
| **Model flexibility without friction** | #844, #684, #638 | Per-request model selection, multi-model workflows, model-specific behavior tuning |

---

## 6. Developer Pain Points

| Pain Point | Frequency | Severity | Current Status |
|------------|-----------|----------|--------------|
| **MCP server reliability & visibility** | Very High | Critical | Partially addressed in v1.0.19 (persistence); status checking still missing |
| **Custom instruction loading inconsistencies** | High | High | Docs/impl mismatch acknowledged; needs reconciliation |
| **Terminal theming/accessibility** | Medium | Medium | Multiple color contrast bugs; no systemic fix apparent |
| **Long-session stability** | Medium | High | Hangs reported across models; regression tracking unclear |
| **Enterprise security/policy gaps** | Medium | Blocking | Active engagement on #599; likely roadmap priority |
| **Shell environment isolation** | Medium | Medium | Bash tool ignores user configs; safety wrappers broken |
| **Manual update friction** | Medium | Low | #566 open since Nov 2025; no committed timeline |

---

*Digest compiled from github.com/github/copilot-cli activity through 2026-04-07 00:00 UTC.*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-04-07

## Today's Highlights

The community is actively tackling CLI stability and cross-platform UX gaps, with two critical fixes landing for MCP server failures and Chat Completions API compliance. A provocative TypeScript/Bun rewrite proposal (#1707) continues to spark architectural debate, while Windows Terminal integration and theme rendering issues highlight persistent terminal environment challenges.

---

## Releases

*No releases in the last 24 hours.*

---

## Hot Issues

| # | Issue | Why It Matters | Community Signal |
|---|-------|--------------|----------------|
| [#781](https://github.com/MoonshotAI/kimi-cli/issues/781) | Windows Terminal Ctrl+V paste conflict for images | Windows users comprise a significant CLI segment; terminal keybinding conflicts block core multimodal workflows | 2 👍, active discussion on Alt+V fallback |
| [#1691](https://github.com/MoonshotAI/kimi-cli/issues/1691) | Incremental session memory for zero-cost context compression | Addresses the #1 operational cost concern for power users—`/compact` LLM calls are expensive and failure-prone at scale | New proposal, seeking maintainer feedback |
| [#1770](https://github.com/MoonshotAI/kimi-cli/issues/1770) | Dark theme illegible on light terminal backgrounds | Accessibility/readability regression affecting GNOME Terminal users; theme detection appears unreliable | Fresh report, no response yet |
| [#1768](https://github.com/MoonshotAI/kimi-cli/issues/1768) | Background multi-agent runs stall CLI → cascade timeouts | Critical reliability issue: async agent orchestration deadlocks the event loop and corrupts provider state | Detailed technical report from source build |
| [#1765](https://github.com/MoonshotAI/kimi-cli/issues/1765) | False "user interrupted" on terminal focus click | UX friction where focus events misclassified as interruption signals | Closed by reporter, but pattern suggests input handling fragility |

---

## Key PR Progress

| # | PR | Description | Status |
|---|-----|-------------|--------|
| [#1771](https://github.com/MoonshotAI/kimi-cli/pull/1771) | Stringify tool message content in Chat Completions | Fixes 400 errors when tool results contain multi-part content; ensures OpenAI API compliance | Open, fixes #1762 |
| [#1769](https://github.com/MoonshotAI/kimi-cli/pull/1769) | Graceful MCP server connection degradation | Prevents worker crashes and "stuck thinking" UI when MCP servers fail to start (port conflicts, etc.) | Open, targets core stability |
| [#1709](https://github.com/MoonshotAI/kimi-cli/pull/1709) | Fix diff inline highlight offset with tabs | Corrects visual misalignment in tab-expanded code diffs—impacts code review accuracy | Open, pending review |
| [#1707](https://github.com/MoonshotAI/kimi-cli/pull/1707) | Complete Python→Bun/TypeScript/React Ink rewrite | 32k LOC rewrite claiming performance and maintainability gains; highly contentious architectural shift | Open, significant community attention |

---

## Feature Request Trends

| Trend | Evidence | Implication |
|-------|----------|-------------|
| **Context cost optimization** | #1691 (incremental memory), historical `/compact` pain points | Users want deterministic, low-latency context management without LLM round-trips |
| **Cross-platform terminal fidelity** | #781 (Windows paste), #1770 (theme detection) | Terminal environment heterogeneity exceeds current abstraction capabilities |
| **Resilient async orchestration** | #1768 (multi-agent stalls), #1769 (MCP degradation) | Production deployments hitting event-loop and connection lifecycle edge cases |

---

## Developer Pain Points

1. **Terminal environment matrix** — Windows Terminal, GNOME Terminal, and others exhibit divergent keybinding, theme, and focus behaviors; current detection heuristics insufficient.

2. **MCP server lifecycle fragility** — Port conflicts and startup failures cascade into opaque UX states ("thinking" spinners, uncaught exceptions).

3. **Context compression economics** — `/compact` is a tax on long sessions; users want amortized, near-zero-cost alternatives.

4. **Async agent coordination** — Background multi-agent patterns trigger event-loop stalls and provider timeouts, suggesting architectural limits in current concurrency model.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-04-07

## Today's Highlights

Two rapid-fire patch releases (v1.3.16–v1.3.17) landed within 24 hours, delivering Azure model options, ACP session configuration exposure, and improved Cloudflare Workers AI onboarding. Meanwhile, the community is actively triaging a wave of model-specific bugs affecting Opus 4.6, Kimi k2.5, and Gemma 4 variants, alongside critical data-loss reports from accidental session deletion shortcuts.

---

## Releases

### v1.3.17
- **Cloudflare Workers AI / AI Gateway**: Now prompts for missing account details and surfaces clear setup errors when required environment variables are absent ([@mchenco](https://github.com/mchenco))
- **TUI**: Restored default kitty keyboard handling on Windows terminals, reverting a problematic workaround

### v1.3.16
- **Azure**: Full support for model options on both chat and responses paths ([@meruiden](https://github.com/meruiden))
- **ACP**: Session model and mode configuration options now exposed through the Agent Communication Protocol ([@georgeharker](https://github.com/georgeharker))
- **UX polish**: Added separating blank line before read tool file contents; fixed output token totals when reasoning tokens are reported

---

## Hot Issues

| Issue | Why It Matters | Community Reaction |
|-------|--------------|-------------------|
| [#13768](https://github.com/anomalyco/opencode/issues/13768) — Opus 4.6 "assistant message prefill" error | Breaks GitHub Copilot + Opus 4.6 workflows; blocking daily use for Anthropic power users | 52 comments, 21 👍 — highest engagement; users sharing session exports to debug |
| [#20650](https://github.com/anomalyco/opencode/issues/20650) — Kimi k2.5 tool calling failures | JSON parsing errors and invalid tool calls render Kimi k2.5 unusable for agentic tasks | 37 comments; active troubleshooting on tokenizer/tool schema compatibility |
| [#13984](https://github.com/anomalyco/opencode/issues/13984) — Copy-paste broken in CLI | Core productivity regression; "copied to clipboard" notification is false positive | 20 comments, 8 👍; cross-platform reports (Windows/Linux) |
| [#21164](https://github.com/anomalyco/opencode/issues/21164) — Qwen 3.6 Plus rate limiting | Alibaba's aggressive throttling kills long-running tasks; no retry/backoff exposed | 17 comments; users requesting configurable request rate limits |
| [#16499](https://github.com/anomalyco/opencode/issues/16499) — GPT-5.4 fast mode (`/fast`) | Missing first-class support for OpenAI's newest latency optimization | 16 comments, 62 👍 — top-voted feature request this cycle |
| [#6823](https://github.com/anomalyco/opencode/issues/6823) — Low contrast CLI colors on macOS Terminal | Accessibility/usability issue for default macOS terminal users | 12 comments, 15 👍; theme override workarounds shared |
| [#6719](https://github.com/anomalyco/opencode/issues/6719) — `/reload` slash command | Config changes currently require full restart; friction for plugin developers | 12 comments, 40 👍; strong consensus on implementation priority |
| [#8501](https://github.com/anomalyco/opencode/issues/8501) — Expand pasted text summaries | Collapsed `[Pasted ~N lines]` blocks can't be edited, forcing manual re-paste | 11 comments, 115 👍 — second-highest voted feature |
| [#21236](https://github.com/anomalyco/opencode/issues/21236) — **CRITICAL**: Ctrl+Shift+Backspace deletes session without confirmation | Data loss from keyboard shortcut collision (Ctrl+Backspace vs. Ctrl+Shift+Backspace) | 2 comments; severity flagged as "critical / data-loss" |
| [#21141](https://github.com/anomalyco/opencode/issues/21141) — v1.3.15 hangs at startup with plugins | Regression blocking plugin users; `superpowers` specifically implicated | 3 comments; workaround is disabling plugins |

---

## Key PR Progress

| PR | Description | Status |
|----|-------------|--------|
| [#21192](https://github.com/anomalyco/opencode/pull/21192) | Fix: Sentence case for theme mode command palette items | Open — UI consistency |
| [#21185](https://github.com/anomalyco/opencode/pull/21185) | Feat: `variant_list` keybind for "Switch model variant" | Open — power-user ergonomics |
| [#15926](https://github.com/anomalyco/opencode/pull/15926) | MCP Apps support: rich iframe UIs for MCP servers | Open — major protocol extension, no feature flag |
| [#18007](https://github.com/anomalyco/opencode/pull/18007) | `session.start` lifecycle hook (`startup`/`resume`/`compact`) | Open — plugin infrastructure |
| [#18767](https://github.com/anomalyco/opencode/pull/18767) | Mobile touch optimization | Open — responsive design overhaul |
| [#13854](https://github.com/anomalyco/opencode/pull/13854) | Fix: Stop streaming markdown after message completes | Open — corrects table rendering bug |
| [#21246](https://github.com/anomalyco/opencode/pull/21246) | Fix: Guard against undefined agents/MCP during bootstrap | Open — fixes [#20588](https://github.com/anomalyco/opencode/issues/20588), [#20628](https://github.com/anomalyco/opencode/issues/20628) |
| [#21243](https://github.com/anomalyco/opencode/pull/21243) | Feat: `basePath` support for web app subpath hosting | Open — enterprise deployment flexibility |
| [#21244](https://github.com/anomalyco/opencode/pull/21244) | Refactor: Unified patches in file diffs (snapshot storage) | Open — VCS efficiency, review surface preservation |
| [#21239](https://github.com/anomalyco/opencode/pull/21239) | Refactor: Full HTTP proxy + workspace adaptor interface change | Open — enables WebSocket support for webapp terminals |

---

## Feature Request Trends

1. **Model Control Surface Expansion** — Fast modes (`/fast`), variant switching keybinds, and rate-limit configuration dominate requests. Users want fine-grained latency/cost tradeoffs without leaving the TUI.

2. **Plugin Lifecycle & Observability** — Strong demand for `/reload`, `session.start` hooks, and pre/post-API call hooks for secret redaction. The plugin ecosystem is maturing and needs production-grade instrumentation.

3. **Data Safety & Session Management** — Multiple requests for confirmation dialogs, session recovery, and export/import. The accidental deletion shortcut ([#21236](https://github.com/anomalyco/opencode/issues/21236)) highlights gap in destructive-action guards.

4. **Cross-Platform Polish** — Windows terminal handling, macOS Terminal contrast, and copy-paste reliability remain friction points for non-VS-Code-terminal users.

---

## Developer Pain Points

| Theme | Evidence | Impact |
|-------|----------|--------|
| **Model-specific fragility** | Opus 4.6 prefill errors, Kimi k2.5 JSON parsing, Gemma 4 tool loops, Qwen rate limits | Users cannot reliably switch models without hitting provider-specific bugs; debugging burden falls on end users |
| **Silent failures & data loss** | Session deletion without confirmation, `opencode run` SQLITE_BUSY crashes, startup hangs | Workflow interruption; potential loss of implementation work |
| **Configuration friction** | No `/reload`, proxy handling broken for npm plugins, missing basePath support | Forces restarts, blocks CI/CD adoption, complicates enterprise deployment |
| **TUI input/editing regressions** | Copy-paste broken, Home/End navigation hijacked, pasted text non-editable | Daily productivity erosion; power users maintaining personal forks |
| **Desktop app reliability** | Blank screen on launch, missing scrollbars, context menu pollution | Desktop users increasingly defaulting to CLI as workaround |

---

*Digest compiled from 50 issues and 50 PRs updated 2026-04-06 to 2026-04-07.*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-04-07

## Today's Highlights
The Pi team merged **18 fixes and features** in the last 24 hours, with heavy focus on **AWS Bedrock IAM authentication**, **extension system robustness**, and **timezone-aware system prompts**. Notably, a long-standing bug where UTC dates caused "yesterday/tomorrow" hallucinations in agents was finally resolved.

---

## Releases
*No releases in the last 24 hours.*

---

## Hot Issues

| Issue | Why It Matters | Status |
|-------|---------------|--------|
| [#2815](https://github.com/badlogic/pi-mono/issues/2815) **Antigravity model deprecation** — Users report complete breakage when selecting Antigravity models, with a hard upgrade message. Blocks workflows for teams relying on these models. | 🔴 **Critical regression** | Open |
| [#2814](https://github.com/badlogic/pi-mono/issues/2814) **UTC date injection causes temporal hallucinations** — Follow-up to #1873; system prompts use UTC hardcoded dates, causing agents to misreport "yesterday" vs "today" in changelogs. Root cause identified, fix pending. | 🟡 **Data integrity** | Open |
| [#2870](https://github.com/badlogic/pi-mono/issues/2870) **XDG Base Directory non-compliance** — Linux users frustrated by home directory clutter. Community-standard fix merged quickly. | 🟢 **Resolved** | Closed |
| [#2869](https://github.com/badlogic/pi-mono/issues/2869) **Dead keys broken in VS Code terminal** — Portuguese/Spanish keyboard layouts fail on Windows. VS Code-specific terminal handling gap. | 🟢 **Resolved** | Closed |
| [#2810](https://github.com/badlogic/pi-mono/issues/2810) **Copilot 413 errors brick sessions permanently** — Image read tool overflows not caught as context limits, causing unrecoverable sessions. | 🟢 **Resolved** | Closed |
| [#2888](https://github.com/badlogic/pi-mono/issues/2888) **Session import crashes to shell** — `/import` command exits process after confirmation. Data loss risk for users migrating sessions. | 🟢 **Resolved** | Closed |
| [#2882](https://github.com/badlogic/pi-mono/issues/2882) **Tool JSON parse errors halt sessions silently** — `edit` tool with JSX/TSX content fails JSON parsing; model never receives error feedback, causing infinite stalls. | 🟢 **Resolved** | Closed |
| [#2880](https://github.com/badlogic/pi-mono/issues/2880) **Bedrock auth fails on EC2 with IMDS** — IAM instance profiles unsupported; blocks enterprise AWS deployments without API keys. | 🟢 **Resolved** | Closed |
| [#2871](https://github.com/badlogic/pi-mono/issues/2871) **Auto-compaction not checked mid-turn** — Context grows unbounded during long tool loops, exceeding 200% of configured window before triggering. | 🟢 **Resolved** | Closed |
| [#2860](https://github.com/badlogic/pi-mono/issues/2860) **sendUserMessage() silently dropped after newSession()** — v0.65.x regression breaks extension command handlers that chain session creation with messages. | 🟡 **Regression** | Open |

---

## Key PR Progress

| PR | Feature / Fix | Status |
|----|-------------|--------|
| [#2887](https://github.com/badlogic/pi-mono/pull/2887) **Remove inline OSC 133 markers from user messages** — Fixes terminal-native apps (like pi-ghost extension) that parse Pi output; strips shell integration artifacts from content. | Open |
| [#2883](https://github.com/badlogic/pi-mono/pull/2883) **ui_prompt event + focus detection for extensions** — Extensions can now signal when awaiting user input, with smart notification suppression when terminal already focused. | Merged |
| [#2879](https://github.com/badlogic/pi-mono/pull/2879) **AWS SDK auth support for Bedrock** — Enables IMDS/IAM role authentication on EC2; removes hard dependency on API keys for enterprise AWS users. | Merged |
| [#2877](https://github.com/badlogic/pi-mono/pull/2877) **Device flow for OpenAI Codex login** — Headless authentication for Termux/SSH environments; user-selectable auth flow with arrow-key UI. | Merged |
| [#2876](https://github.com/badlogic/pi-mono/pull/2876) **Prefer workspace src aliases in extension loader** — Fixes Windows source-run failures where extensions imported undefined classes; prioritizes `src/` over `dist/`. | Merged |
| [#2867](https://github.com/badlogic/pi-mono/pull/2867) **PI_CODING_AGENT environment variable** — Subprocesses can now detect Pi context; enables git hooks and scripts to behave differently when invoked by the agent. | Merged |
| [#2828](https://github.com/badlogic/pi-mono/pull/2828) **Gemma 4 thinking support** — Adds `thinkingLevel` parameter for Gemma-4 models (distinct from Gemini-3's `thinkingBudget`). | Merged |
| [#2826](https://github.com/badlogic/pi-mono/pull/2826) **Local timezone for system prompt dates** — Replaces UTC `toISOString()` with locale-aware formatting; fixes temporal hallucinations in changelog generation. | Merged |
| [#2861](https://github.com/badlogic/pi-mono/pull/2861) **Correct thinking budget for 2.5-flash-lite** — Fixes 128→512 minimum budget mismatch causing API rejections. | Merged |
| [#2859](https://github.com/badlogic/pi-mono/pull/2859) **Update visible custom messages from hidden follow-ups** — Fixes stuck UI cards when extensions send `state:done` updates as hidden messages. | Open |

---

## Feature Request Trends

| Direction | Evidence | Momentum |
|-----------|----------|----------|
| **Extension system maturity** | 5 PRs/Issues on loader aliases, ui_prompt events, focus detection, env variable detection | 🔥 High — active development |
| **Enterprise auth patterns** | IMDS, device flow, OAuth flow selection | 🔥 High — unblocking production deployments |
| **Cross-platform terminal fidelity** | Dead keys, X11/Wayland clipboard, OSC marker handling | 🟡 Medium — polish phase |
| **Model-specific routing fixes** | Gemma 4, 2.5-flash-lite, Antigravity deprecation handling | 🟡 Medium — reactive maintenance |
| **Session lifecycle observability** | session_shutdown reasons, import/export robustness | 🟡 Medium — reliability focus |

---

## Developer Pain Points

| Pain Point | Frequency | Current Mitigation |
|------------|-----------|------------------|
| **Extension development friction on Windows** | Recurring (#2875, #2876) | Workspace src alias fixes merged; documentation needed |
| **Silent failures in tool calling** | High (#2882, #2865, #2810) | Better JSON error propagation merged; schema validation gaps remain |
| **Date/time timezone handling** | Persistent (#2814, #2826) | Local timezone fix merged; UTC hardcoding debt being addressed |
| **AWS Bedrock enterprise auth** | Blocking for teams (#2880, #2879) | **Resolved** — IMDS support merged |
| **Context window management surprises** | Recurring (#2871, #2810) | Mid-turn compaction added; overflow handling improved |
| **Model deprecation breakage** | Critical (#2815) | **Open** — needs graceful fallback or migration path |

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-04-07

---

## 1. Today's Highlights

The community is actively pushing toward **subagent system maturity**, with parallel work on feature parity requests, TUI stability fixes, and input handling serialization. Meanwhile, **code review capabilities** are getting a major overhaul through PR #2932 targeting competitive parity with Copilot Code Review and Claude Code's `/ultrareview`.

---

## 2. Releases

*No releases in the last 24 hours. Nightly build v0.14.1-nightly.20260406.6785a8d90 failed — tracked in [#2925](https://github.com/QwenLM/qwen-code/issues/2925).*

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Signal |
|---|-------|--------------|------------------|
| [#2409](https://github.com/QwenLM/qwen-code/issues/2409) | **Subagent feature parity with Claude Code** | Core strategic gap — only 40-45% of Claude Code's subagent capabilities implemented | 6 comments, 2 👍; active discussion on roadmap priorities |
| [#2929](https://github.com/QwenLM/qwen-code/issues/2929) | **Concurrent subagent confirmation focus conflicts** | Critical UX bug — parallel subagents create input conflicts where one keypress dispatches to all prompts | 1 👍; fresh report with linked PR fix |
| [#2928](https://github.com/QwenLM/qwen-code/issues/2928) | **TUI flickering during parallel subagent execution** | Windows-specific rendering instability affecting perceived reliability | Chinese-language report indicates APAC user base engagement |
| [#2903](https://github.com/QwenLM/qwen-code/issues/2903) | **JetBrains terminal screen flickering** | IDE integration quality issue — JetBrains is a primary professional user segment | 1 👍; needs reproduction details |
| [#2927](https://github.com/QwenLM/qwen-code/issues/2927) | **`git status` bypasses all approval modes** | Security/policy gap — read-only commands should still respect audit expectations in strict modes | Zero engagement yet; security-relevant |
| [#2926](https://github.com/QwenLM/qwen-code/issues/2926) | **GLIBC_2.27 not found on CentOS 7** | Legacy enterprise Linux compatibility blocker — CentOS 7 still prevalent in regulated industries | Installation failure pattern |
| [#2882](https://github.com/QwenLM/qwen-code/issues/2882) | **WeChat integration version error** | China-market-specific auth pathway broken | Russian-language report suggests international user confusion |
| [#2933](https://github.com/QwenLM/qwen-code/issues/2933) | **Add `/rename` command with Ctrl+R** | Session management ergonomics — low-friction UX improvement | Fresh request, no engagement yet |
| [#2800](https://github.com/QwenLM/qwen-code/issues/2800) | **How to view free plan quota** | Documentation/discoverability gap for cost-conscious users | Support-type query with minimal response |
| [#2672](https://github.com/QwenLM/qwen-code/issues/2672) | **Auto-expose MCP tools for web research** | MCP adoption friction — manual configuration barrier for common use cases | Feature request with proposed default behavior |

---

## 4. Key PR Progress

| # | PR | Description | Status |
|---|-----|-------------|--------|
| [#2932](https://github.com/QwenLM/qwen-code/pull/2932) | **Enhanced `/review` with deterministic analysis, autofix, security hardening** | Major competitive upgrade targeting Copilot Code Review and Claude Code `/ultrareview` parity; adds 4-Agent architecture improvements | Open, updated 2026-04-07 |
| [#2930](https://github.com/QwenLM/qwen-code/pull/2930) | **Serialize subagent confirmation focus** | Fixes [#2929](https://github.com/QwenLM/qwen-code/issues/2929) — prevents concurrent input conflicts by queueing focus state | Open, same-day response to issue |
| [#2917](https://github.com/QwenLM/qwen-code/pull/2917) | **Add `/thinkback` command for session timeline review** | Differentiating feature vs. Claude Code (which lacks this); LLM-generated decision/change/fix timeline | Open |
| [#2923](https://github.com/QwenLM/qwen-code/pull/2923) | **Customizable status line with `/statusline`** | Power-user extensibility — shell command output in footer area | Open |
| [#2921](https://github.com/QwenLM/qwen-code/pull/2921) | **Implement `/plan` command for plan mode** | Dedicated access to existing `ApprovalMode.PLAN` with persistence and restoration | Open |
| [#2916](https://github.com/QwenLM/qwen-code/pull/2916) | **Expose `/context` usage in non-interactive/SDK mode** | Enterprise/automation use case — programmatic context window monitoring | Open |
| [#2858](https://github.com/QwenLM/qwen-code/pull/2858) | **Coerce stringified JSON for anyOf/oneOf MCP schemas** | Compatibility fix for LLMs that serialize union types as strings | Open, 3 days active |
| [#2874](https://github.com/QwenLM/qwen-code/pull/2874) + [#2875](https://github.com/QwenLM/qwen-code/pull/2875) | **Force fresh ACP session + harden context-usage display** | VS Code reliability pair — fixes "new session" button no-op and defensive token limit handling | Both open, coordinated |
| [#2770](https://github.com/QwenLM/qwen-code/pull/2770) | **Compact/verbose mode toggle (Ctrl+O)** | Terminal UX cleanliness — hide tool output/thoughts by default, reveal on demand | Open, 6 days |
| [#2771](https://github.com/QwenLM/qwen-code/pull/2771) | **SDK `canUseTool` interrupt handling** | SDK robustness — cascade cancellation when tool use denied | Open, 6 days |

---

## 5. Feature Request Trends

| Trend | Evidence | Implication |
|-------|----------|-------------|
| **Subagent orchestration maturity** | [#2409](https://github.com/QwenLM/qwen-code/issues/2409), [#2929](https://github.com/QwenLM/qwen-code/issues/2929), [#2928](https://github.com/QwenLM/qwen-code/issues/2928), [#2930](https://github.com/QwenLM/qwen-code/pull/2930) | Community expects Claude Code-level parallel agent execution with stable TUI |
| **Session introspection & management** | [#2917](https://github.com/QwenLM/qwen-code/pull/2917), [#2933](https://github.com/QwenLM/qwen-code/issues/2933), [#2923](https://github.com/QwenLM/qwen-code/pull/2923) | Users want visibility into agent decisions and control over session lifecycle |
| **MCP ecosystem ergonomics** | [#2672](https://github.com/QwenLM/qwen-code/issues/2672), [#2858](https://github.com/QwenLM/qwen-code/pull/2858) | Configuration friction reduction and broader tool auto-discovery |
| **Non-interactive/SDK parity** | [#2916](https://github.com/QwenLM/qwen-code/pull/2916), [#2771](https://github.com/QwenLM/qwen-code/pull/2771) | Enterprise automation and CI/CD integration demands |
| **Plan mode as first-class workflow** | [#2921](https://github.com/QwenLM/qwen-code/pull/2921) | Structured approval workflows for high-stakes changes |

---

## 6. Developer Pain Points

| Pain Point | Frequency | Manifestations |
|------------|-----------|--------------|
| **TUI/terminal rendering instability** | High | [#2928](https://github.com/QwenLM/qwen-code/issues/2928), [#2903](https://github.com/QwenLM/qwen-code/issues/2903) — Windows 11 and JetBrains-specific flickering; suggests platform-specific testing gaps |
| **Legacy Linux compatibility** | Medium | [#2926](https://github.com/QwenLM/qwen-code/issues/2926) — GLIBC version constraints blocking CentOS 7/RHEL 7 enterprise deployments |
| **Approval mode consistency** | Medium | [#2927](https://github.com/QwenLM/qwen-code/issues/2927) — `git status` bypass and [#2929](https://github.com/QwenLM/qwen-code/issues/2929) focus conflicts indicate policy enforcement holes |
| **Quota/cost transparency** | Low-Medium | [#2800](https://github.com/QwenLM/qwen-code/issues/2800) — free tier users lack visibility into usage limits |
| **Nightly build reliability** | Low | [#2925](https://github.com/QwenLM/qwen-code/issues/2925) — release automation failure indicates CI/CD hygiene attention needed |

---

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*