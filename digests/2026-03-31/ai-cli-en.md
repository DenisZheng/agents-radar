# AI CLI Tools Community Digest 2026-03-31

> Generated: 2026-03-31 00:11 UTC | Tools covered: 7

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

# AI CLI Tools Ecosystem Cross-Comparison Report — 2026-03-31

## 1. Ecosystem Overview

The AI CLI tools landscape has matured into a competitive six-player market with distinct architectural philosophies. Claude Code and OpenAI Codex dominate mindshare among Western developers, while Gemini CLI, Kimi CLI, and Qwen Code serve regional markets with varying degrees of internationalization. GitHub Copilot CLI leverages unique GitHub integration but struggles with platform parity. All tools face convergent pressures: MCP ecosystem adoption, session durability at scale, and enterprise policy controls. The sector shows signs of consolidation around shared protocols (MCP, OpenAI-compatible APIs) even as vendors differentiate through agent architectures and pricing tiers.

---

## 2. Activity Comparison

| Tool | Issues (24h) | PRs (24h) | Releases | Release Velocity | Notable |
|------|:-----------:|:---------:|:--------:|:--------------:|---------|
| **Claude Code** | 10+ tracked | 10 open | v2.1.88 | Daily patches | Highest engagement on billing/rate limits (#16157: 1,396 comments) |
| **OpenAI Codex** | 10+ tracked | 10 active | None | Stalled | Auth infrastructure focus; 335-comment token burn issue |
| **Gemini CLI** | 10+ tracked | 10 open | None | Paused | Experimental→stable migrations; security incident (#24285) |
| **GitHub Copilot CLI** | 10 tracked | 3 (1 merged) | v1.0.13, v1.0.13-2, v1.0.14-0 | Rapid iteration | Input regression cluster (Shift+Enter, middle-click paste) |
| **Kimi CLI** | 10 tracked | 10 (7 merged) | v1.28.0 | Active | Light theme, async I/O fixes; lowest absolute issue volume |
| **OpenCode** | 50 | 50 | v1.3.7–v1.3.9 | Very rapid | Effect architecture migration; session data loss crisis |
| **Qwen Code** | 28 | 38 | v0.13.2, v0.14.0-preview.2, sdk-ts-v0.1.6 | Steady | Windows permission persistence fix merged |

*Note: Issue/PR counts reflect "active" items with community engagement, not raw totals.*

---

## 3. Shared Feature Directions

| Requirement | Tools | Specific Evidence |
|-------------|-------|-----------------|
| **MCP ecosystem maturity** | Claude Code, OpenAI Codex, Gemini CLI, Kimi CLI, Qwen Code | Claude #1785 (sampling for Max), #37793 (200K tool limit); Codex auth PRs for external providers; Gemini #23923 (sandboxing); Kimi #1663 (image input); Qwen #379, #2758 |
| **Session durability & export** | Claude Code, OpenAI Codex, OpenCode, Qwen Code | Claude #13724 (history invalidation), #40524; Codex #13784 (remote compact), #7801 (SessionID); OpenCode #2987 (data loss); Qwen #2640 (permission persistence) |
| **Fine-grained permissions** | Claude Code, OpenAI Codex, GitHub Copilot CLI, OpenCode | Claude hook system (#40572); Codex #14399; Copilot #14399 analog; OpenCode #7006 |
| **Observability & cost control** | Claude Code, OpenAI Codex, Gemini CLI, Qwen Code | Claude telemetry PRs; Codex #14593 (token burn), #13854; Gemini #24206 (quota display); Qwen #2742 (token consumption) |
| **Headless/CI-CD automation** | OpenAI Codex, Kimi CLI, Qwen Code | Codex #7801; Kimi #1666 (`--plan` flag); Qwen #2731 (cron scheduling) |
| **Windows-native experience** | Claude Code, OpenAI Codex, GitHub Copilot CLI, Kimi CLI, Qwen Code | Codex 8/30 top issues Windows-specific; Copilot #2082, #2413; Qwen #2727, #2688; Kimi #1649 |

---

## 4. Differentiation Analysis

| Dimension | Claude Code | OpenAI Codex | Gemini CLI | GitHub Copilot CLI | Kimi CLI | OpenCode | Qwen Code |
|-----------|:-----------:|:------------:|:----------:|:------------------:|:--------:|:--------:|:---------:|
| **Core Architecture** | Hook-based permission system | Thread-centric with job scheduling | Subagent "Confucius" memory | GitHub-native, IDE parity | Async I/O refactor, skills system | Effect-based functional rewrite | Batch-optimized tool calls |
| **Target User** | Max/Pro Max subscribers ($100-200/mo) | Enterprise GPT 5.4 Pro tiers | Ultra subscribers ($200/mo), researchers | GitHub Enterprise, VS Code users | Allegretto tier, Chinese market | Plugin developers, multi-provider | ModelStudio/Bailian, Chinese enterprise |
| **Key Differentiator** | Deepest IDE integration, subagent recursion | Native `/loop` autonomy, personality system | Planning mode maturity, evaluation infrastructure | GitHub policy engine, Copilot Chat parity | Light theme, web subprocess architecture | Open-source extensibility, Zen pricing | Channels integration (Telegram/WeChat), cron scheduling |
| **Technical Debt Profile** | Rate limit accounting, memory leaks | Windows sandboxing, TUI gap | "Still on it" spinner states, model availability | Input handling regressions, Linux gaps | Write tool instability (addressed) | Session races, plugin loading | Permission persistence, TUI performance |
| **Pricing Pressure Point** | Usage accounting failures (#16157) | Token burn opacity (#14593) | Ultra tier reliability (#24216) | Enterprise entitlement sync (#1595) | Quota restrictions (#1639) | Zen free tier confusion (#14273) | Competitive parity demands (#2721) |

---

## 5. Community Momentum & Maturity

| Tier | Tools | Assessment |
|------|-------|------------|
| **High momentum, maturing** | Claude Code, OpenAI Codex | Largest absolute engagement; shifting from feature velocity to reliability investment. Claude's 1,396-comment billing issue signals scale stress. Codex's auth PR cluster shows enterprise readiness push. |
| **High velocity, proving** | Kimi CLI, OpenCode, Qwen Code | Kimi: 7/10 PRs merged in 24h, focused polish. OpenCode: 50 PRs, aggressive Effect migration, session stability crisis threatens trust. Qwen: Steady cadence, regional feature innovation (Channels, cron). |
| **Incumbent pressure** | Gemini CLI, GitHub Copilot CLI | Gemini: Experimental graduation mode but reliability incidents (#24216, #24285) erode Ultra tier value. Copilot: Rapid patch releases (v1.0.13→13-2→14-0) but regression cluster suggests testing gaps. |

**Community Health Indicators:**
- **Most responsive**: Kimi CLI (high merge rate, focused scope)
- **Most stressed**: Claude Code (billing crisis), OpenCode (data loss)
- **Most experimental**: Gemini CLI (memory services, planning promotion)
- **Most enterprise-blocked**: GitHub Copilot CLI (policy/entitlement bugs)

---

## 6. Trend Signals

| Signal | Evidence | Implication for Developers |
|--------|----------|---------------------------|
| **Agent autonomy over chat** | Codex `/loop`, Qwen cron (#2731), Gemini planning stable, Kimi swarm requests (#1633) | CLI tools evolving from copilots to autonomous workers; plan for supervision, not just interaction |
| **MCP as de facto standard** | Universal adoption pressure; Claude 200K tool limit (#37793) shows scaling pain | Invest in MCP server development; expect token/performance constraints at scale |
| **Cost transparency as competitive vector** | Claude usage accounting crisis, Codex token burn (#14593), Gemini quota hiding (#24206) | Demand per-request logging; treat opaque pricing as vendor risk |
| **Windows as second-class → first-class** | 8+ Codex issues, Copilot input regressions, Qwen permission fixes (#2670) | Windows-native development now table stakes; WSL insufficient |
| **Effect/functional architectures** | OpenCode Effect migration, Kimi async refactor | Industry learning from callback/Promise chaos; expect stability gains in 6-12mo |
| **Regional market fragmentation** | Qwen Channels (WeChat/DingTalk), Kimi Chinese pricing, Gemini evaluation focus | Global teams need multi-tool strategies; no single vendor serves all markets |

---

*Report compiled from 2026-03-31 community digests across seven active repositories.*

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
*Data as of 2026-03-31 | github.com/anthropics/skills*

---

## 1. Top Skills Ranking

| Rank | Skill | PR | Status | Functionality | Discussion Highlights |
|:---|:---|:---|:---|:---|:---|
| 1 | **document-typography** | [#514](https://github.com/anthropics/skills/pull/514) | 🟡 Open | Typographic quality control for AI-generated documents—prevents orphans, widows, and numbering misalignment | Addresses universal pain point affecting every document Claude generates; zero thumbs but high implicit demand |
| 2 | **frontend-design** | [#210](https://github.com/anthropics/skills/pull/210) | 🟡 Open | Revised guidance for actionable, single-conversation frontend design workflows | Focus on token efficiency and executable instructions vs. verbose documentation |
| 3 | **skill-quality-analyzer + skill-security-analyzer** | [#83](https://github.com/anthropics/skills/pull/83) | 🟡 Open | Meta-skills for evaluating Skill structure, documentation, and security posture across five dimensions | First systematic approach to Skill quality assurance; positions Skills as production-grade artifacts |
| 4 | **ODT (OpenDocument)** | [#486](https://github.com/anthropics/skills/pull/486) | 🟡 Open | ISO-standard ODT creation, template filling, and HTML parsing for LibreOffice/OnlyOffice ecosystems | Bridges Claude to enterprise document workflows; addresses vendor lock-in concerns |
| 5 | **SAP-RPT-1-OSS predictor** | [#181](https://github.com/anthropics/skills/pull/181) | 🟡 Open | Integration with SAP's open-source tabular foundation model for predictive analytics on business data | Enterprise ERP integration; signals demand for vertical-specific Skills |
| 6 | **masonry-generate-image-and-videos** | [#335](https://github.com/anthropics/skills/pull/335) | 🟡 Open | CLI wrapper for Imagen 3.0 and Veo 3.1 generation with job management | Media generation orchestration; fills gap in multimodal output pipelines |
| 7 | **testing-patterns** | [#723](https://github.com/anthropics/skills/pull/723) | 🟡 Open | Comprehensive testing stack guidance—Testing Trophy, AAA pattern, React Testing Library, MSW, Playwright | Recently active (March 2026); addresses critical gap in Claude's code quality workflows |
| 8 | **roadmap-pilot** | [#536](https://github.com/anthropics/skills/pull/536) | 🟡 Open | Incremental codebase cleanup autopilot—executes one task per session, persists progress to prevent context overflow | Solves fundamental context window limitation for large refactoring jobs |

---

## 2. Community Demand Trends

Derived from high-engagement Issues, ranked by comment volume and 👍 reactions:

| Trend | Evidence | Demand Signal |
|:---|:---|:---|
| **Skill reliability & debugging** | [#62](https://github.com/anthropics/skills/issues/62) (10 comments), [#556](https://github.com/anthropics/skills/issues/556) (5 comments, 6 👍), [#532](https://github.com/anthropics/skills/issues/532) | Users need visibility into Skill execution, version control, and troubleshooting when Skills fail silently or disappear |
| **Enterprise governance & trust boundaries** | [#492](https://github.com/anthropics/skills/issues/492) (4 comments, 2 👍), [#228](https://github.com/anthropics/skills/issues/228) (3 comments, 3 👍) | Org-wide Skill sharing, namespace verification, and permission management for security-conscious deployments |
| **Skill-as-MCP interoperability** | [#16](https://github.com/anthropics/skills/issues/16) (4 comments) | Community wants Skills exposed via Model Context Protocol for standardized API consumption |
| **Bedrock & multi-platform deployment** | [#29](https://github.com/anthropics/skills/issues/29) (4 comments) | AWS integration demand; Skills currently Claude-Code-centric |
| **Agent governance & safety patterns** | [#412](https://github.com/anthropics/skills/issues/412) (4 comments) | Proactive demand for policy enforcement, threat detection, and audit trails in multi-agent systems |

---

## 3. High-Potential Pending Skills

Active PRs with recent momentum (updated within 30 days) likely to merge:

| Skill | PR | Last Update | Why It May Land Soon |
|:---|:---|:---|:---|
| **testing-patterns** | [#723](https://github.com/anthropics/skills/pull/723) | 2026-03-30 | Most recent activity; fills documented gap; aligns with Claude Code's core code-generation use case |
| **ODT** | [#486](https://github.com/anthropics/skills/pull/486) | 2026-03-26 | Enterprise document format; sustained engagement over 25 days |
| **roadmap-pilot** | [#536](https://github.com/anthropics/skills/pull/536) | 2026-03-26 | Directly addresses context overflow—most upvoted user pain point |
| **CONTRIBUTING.md + PR template** | [#509](https://github.com/anthropics/skills/pull/509), [#512](https://github.com/anthropics/skills/pull/512) | 2026-03-19 | Infrastructure PRs; low risk; community health score currently 25% |
| **document-typography** | [#514](https://github.com/anthropics/skills/pull/514) | 2026-03-13 | Universal applicability; minimal implementation surface area |

---

## 4. Skills Ecosystem Insight

> **The community's concentrated demand is for production-grade reliability infrastructure**—Skills that survive sessions, execute predictably, integrate with enterprise systems (SAP, ODT, SSO), and provide observability when they fail—shifting Claude Code from a conversation tool to a persistent, team-scalable development platform.

---

---

# Claude Code Community Digest — 2026-03-31

## Today's Highlights

Anthropic shipped **v2.1.88** with flicker-free rendering and new hook capabilities for permission handling, while the community grapples with widespread **rate limit and usage accounting issues** affecting Max and Pro Max subscribers. A cluster of high-engagement bugs around API limits, token overflows, and memory leaks continues to dominate issue traffic, alongside emerging concerns about Opus 4.6 response quality degradation.

---

## Releases

**v2.1.88** — [Release notes](https://github.com/anthropics/claude-code/releases/tag/v2.1.88)

| Change | Impact |
|--------|--------|
| `CLAUDE_CODE_NO_FLICKER=1` env var | Opt-in flicker-free alt-screen rendering with virtualized scrollback — addresses long-standing TUX complaints |
| `PermissionDenied` hook | New hook fires after auto-mode classifier denials; return `{retry: true}` to allow model retry — enables custom permission workflows |
| Named sub | (Incomplete in notes — likely related to sub-agent naming/identification) |

---

## Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|--------------|-------------------|
| [#16157](https://github.com/anthropics/claude-code/issues/16157) | **Instant usage limits on Max subscription** — 1,396 comments | The highest-engagement issue in repo history; systemic billing/accounting failure affecting paid users | 635 👍, cross-referenced across multiple duplicates; users reporting work stoppages |
| [#38335](https://github.com/anthropics/claude-code/issues/38335) | **Session limits exhausted abnormally fast since March 23** | Regression window identified; suggests backend accounting change | 163 👍, marked "invalid" but persists as user rallying point |
| [#29579](https://github.com/anthropics/claude-code/issues/29579) | **Rate limit at 16% usage with Max** | Contradicts documented limits; Windows/VSCodium-specific patterns emerging | 76 👍, reproduction confirmed |
| [#24055](https://github.com/anthropics/claude-code/issues/24055) | **32K output token maximum exceeded** | Hard ceiling blocking legitimate long-form outputs; no user-configurable workaround | 80 👍, affects code generation workflows |
| [#8856](https://github.com/anthropics/claude-code/issues/8856) | **Memory leak: /tmp/claude-*-cwd accumulation** | Long-running sessions exhaust disk; WSL2/Linux primary impact | 67 👍, reproduction script provided |
| [#10199](https://github.com/anthropics/claude-code/issues/10199) | **Thinking Block Modification Error (API 400)** | Blocks extended thinking sessions; no clear trigger pattern | 37 👍, oncall-tagged |
| [#40524](https://github.com/anthropics/claude-code/issues/40524) | **Conversation history invalidated on subsequent turns** | Data loss regression; "cost" label suggests billing impact | 75 👍, recent (March 29) |
| [#1785](https://github.com/anthropics/claude-code/issues/1785) | **MCP Sampling support for Max subscriptions** | Cost reduction feature gap; MCP adoption blocker | 101 👍, oldest active enhancement request |
| [#37793](https://github.com/anthropics/claude-code/issues/37793) | **Subagents fail with >200K tool definitions** | Architectural limit hit by power users with many MCP servers | 3 👍, but critical for agent-heavy workflows |
| [#41071](https://github.com/anthropics/claude-code/issues/41071) | **Opus 4.6 max effort producing shallow responses** | Quality regression on $200/month Pro Max plan; undermines premium positioning | 2 👍, early report with detailed metrics |

---

## Key PR Progress

| # | PR | Description | Status |
|---|-----|-------------|--------|
| [#41221](https://github.com/anthropics/claude-code/pull/41221) | **jq-based JSON construction for Statsig logging** | Fixes silent failures from malformed JSON in issue telemetry; replaces brittle sed escaping | Open |
| [#40969](https://github.com/anthropics/claude-code/pull/40969) | **Read issue number from workflow event** | Simplifies triage automation by consuming `$GITHUB_EVENT_PATH` directly | Open |
| [#40572](https://github.com/anthropics/claude-code/pull/40572) | **Global Hookify rules support** | Loads hooks from `~/.claude/` for cross-project rule sharing | Open |
| [#40779](https://github.com/anthropics/claude-code/pull/40779) | **Devcontainer: allow googleapis.com** | Unblocks GCS/BigQuery/Vertex AI inside sandbox firewall | Open |
| [#40776](https://github.com/anthropics/claude-code/pull/40776) | **Security rules for bash validator hook** | Defense-in-depth against shell builtin bypasses (addresses #40730) | Open |
| [#40777](https://github.com/anthropics/claude-code/pull/40777) | **Recommended settings template + limitations docs** | Balanced security/UX configuration with documented pitfalls | Open |
| [#40778](https://github.com/anthropics/claude-code/pull/40778) | **Prevent session URL leakage in commits** | Privacy fix for `/commit` and `/commit-push-pr` commands | Open |
| [#40768](https://github.com/anthropics/claude-code/pull/40768) | **Hardcoded secret detection patterns** | 6 new patterns for GitHub/AWS/Anthropic/OpenAI keys in file edits | Open |
| [#40822](https://github.com/anthropics/claude-code/pull/40822) | **VS Code "Not responding" status bar docs** | Clarifies 60-second timeout vs. normal long operations | Open |
| [#20452](https://github.com/anthropics/claude-code/pull/20452) | **ipset `-exist` flag for allowed-domains** | Idempotent domain addition; fixes script reruns | Open (stale since Jan, updated yesterday) |

---

## Feature Request Trends

| Theme | Evidence | Momentum |
|-------|----------|----------|
| **MCP ecosystem maturity** | [#1785](https://github.com/anthropics/claude-code/issues/1785) (sampling), [#37793](https://github.com/anthropics/claude-code/issues/37793) (token limits), [#34310](https://github.com/anthropics/claude-code/issues/34310) (team context mgmt) | High — architectural limits now blocking adoption |
| **Observability/telemetry** | [#31840](https://github.com/anthropics/claude-code/issues/31840) (remote control state), [#41215](https://github.com/anthropics/claude-code/issues/41215) (JSONL session lifecycle), [#41218](https://github.com/anthropics/claude-code/issues/41218) (hook token counts) | Growing — external tooling integration demand |
| **Notification/UX polish** | [#19976](https://github.com/anthropics/claude-code/issues/19976) (tmux notifications), [#41216](https://github.com/anthropics/claude-code/issues/41216) (remote control labeling) | Moderate — terminal-native experience gaps |
| **Hook system extensibility** | [#40572](https://github.com/anthropics/claude-code/pull/40572) (global rules), [#41218](https://github.com/anthropics/claude-code/issues/41218) (quiet injection), v2.1.88's `PermissionDenied` hook | Active — becoming primary customization surface |

---

## Developer Pain Points

| Pain Point | Frequency | Impact | Tracking |
|------------|-----------|--------|----------|
| **Rate limit / usage accounting failures** | Critical mass | Work stoppage for paid subscribers | [#16157](https://github.com/anthropics/claude-code/issues/16157), [#38335](https://github.com/anthropics/claude-code/issues/38335), [#29579](https://github.com/anthropics/claude-code/issues/29579), [#40078](https://github.com/anthropics/claude-code/issues/40078), [#41212](https://github.com/anthropics/claude-code/issues/41212) |
| **Token/context ceiling hard limits** | High | Abrupt session termination | [#24055](https://github.com/anthropics/claude-code/issues/24055) (32K output), [#37793](https://github.com/anthropics/claude-code/issues/37793) (200K input), [#2038](https://github.com/anthropics/claude-code/issues/2038) (compact loop) |
| **Model quality regression (Opus 4.6)** | Emerging | Erosion of premium tier value | [#41071](https://github.com/anthropics/claude-code/issues/41071), [#41217](https://github.com/anthropics/claude-code/issues/41217) |
| **Packaging/version drift (Homebrew)** | Moderate | Update dead-ends for stable users | [#41194](https://github.com/anthropics/claude-code/issues/41194), [#41140](https://github.com/anthropics/claude-code/issues/41140) |
| **Permission/hook bypasses** | Moderate | Security model circumvention | [#41222](https://github.com/anthropics/claude-code/issues/41222), [#36873](https://github.com/anthropics/claude-code/issues/36873), [#41050](https://github.com/anthropics/claude-code/issues/41050) |
| **Resource leaks (disk/memory)** | Persistent | Long-running session instability | [#8856](https://github.com/anthropics/claude-code/issues/8856) |

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-03-31

---

## 1. Today's Highlights

The Codex repository saw intense activity around authentication infrastructure and telemetry systems, with three related PRs from `bolinfest` landing to support dynamic bearer tokens for custom model providers. A major community pain point around rapid token consumption remains unresolved with 335 comments on the top issue, while Windows-specific stability problems continue to dominate bug reports.

---

## 2. Releases

*No new releases in the last 24 hours.*

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|--------------|-------------------|
| [#14593](https://github.com/openai/codex/issues/14593) | **Burning tokens very fast** — Business tier users report excessive token consumption | Critical cost impact for enterprise users; suggests possible regression in context management or model routing | 🔥 335 comments, 136 👍 — highest engagement in repository history |
| [#13784](https://github.com/openai/codex/issues/13784) | **Error running remote compact task** — Background task failures in v0.111.0 | Breaks long-running sessions and auto-save functionality; affects GPT 5.4 Pro subscribers | 19 comments, 11 👍 — active troubleshooting |
| [#15162](https://github.com/openai/codex/issues/15162) | **"Open in Popup Window" replaces instead of opens multiple** — Regression in macOS app | Disrupts multi-file workflows; regression confirmed fixed then reverted | 11 comments, closed with follow-up needed |
| [#7801](https://github.com/openai/codex/issues/7801) | **SessionID specification for automated workflows** | Key request for CI/CD integration; compares unfavorably to ClaudeCode's native support | 8 comments, 5 👍 — long-standing enhancement |
| [#14399](https://github.com/openai/codex/issues/14399) | **Fine-Grained Permissions** — Between "Default" and "Full access" | Security-conscious teams need middle ground; current binary choice is workflow friction | 6 comments, 2 👍 — well-scoped feature request |
| [#13854](https://github.com/openai/codex/issues/13854) | **Usage counted to wrong models** | Billing transparency issue; users charged for more expensive models than used | 6 comments — potential systemic billing problem |
| [#13724](https://github.com/openai/codex/issues/13724) | **Old threads broken after update** — `invalid_encrypted_content` / org mismatch | Data loss scenario for long-running projects; encryption key rotation issue | 6 comments, 2 👍 — needs migration tooling |
| [#16269](https://github.com/openai/codex/issues/16269) | **CODEX immediately closes on Windows 11** — Crash on startup | Complete usability blocker; started suddenly 3/30 suggesting bad update | 4 comments — emergent regression |
| [#15720](https://github.com/openai/codex/issues/15720) | **Responses dropped in TUI: "OutputTextDelta without active item"** | Silent data loss in terminal UI; affects Enterprise users on GPT 5.4 | 3 comments — debugging in progress |
| [#15179](https://github.com/openai/codex/issues/15179) | **Windows Store app crashes: sandbox ACL setup fails** | Microsoft Store distribution broken; permissions escalation failure | 3 comments — Windows Store specific |

---

## 4. Key PR Progress

| # | PR | Description | Impact |
|---|-----|-------------|--------|
| [#16267](https://github.com/openai/codex/pull/16267) | **core: support dynamic auth tokens for model providers** | Enables short-lived bearer tokens for custom providers; fixes #15189 | Unblocks enterprise SSO and rotating credential workflows |
| [#16277](https://github.com/openai/codex/pull/16277) | **auth: generalize external auth tokens for bearer-only sources** | Decouples `ExternalAuthTokens` from ChatGPT-specific metadata | Cleaner architecture for third-party auth integrations |
| [#16275](https://github.com/openai/codex/pull/16275) | **auth: let AuthManager own external bearer auth** | Consolidates auth state management; enables 401 recovery for external tokens | Reduces auth-related code duplication |
| [#16282](https://github.com/openai/codex/pull/16282) | **Add experimental thread job scheduling and `/loop` support** | Runtime job prompts, model-driven scheduling, self-descheduling | Foundation for autonomous agent loops |
| [#16284](https://github.com/openai/codex/pull/16284) | **Fix TUI app-server permission profile conversions** | Typed mappings instead of lossy JSON; fixes #16283 regression | Restores filesystem/network permission handling in TUI |
| [#16274](https://github.com/openai/codex/pull/16274) | **Add user-defined personalities and app-server personality listing** | `.codex/personalities` directory support with validation/deduping | Customization layer for agent behavior |
| [#15569](https://github.com/openai/codex/pull/15569) | **Handle inline image request caps gracefully** | Enforces 512 MiB / 1,500 image limits with graceful degradation | Prevents upstream API rejections |
| [#15690](https://github.com/openai/codex/pull/15690) | **[codex-analytics] thread events** | Telemetry for thread/start, fork, resume; behind `GeneralAnalytics` flag | Observability foundation for usage analytics |
| [#16273](https://github.com/openai/codex/pull/16273) | **Fix regression: "not available in TUI" error message** | Handles Ctrl+C interrupt during early TUI startup | UX polish for TUI stability |
| [#15893](https://github.com/openai/codex/pull/15893) | **fix: warn when bwrap cannot create user namespaces** | Linux sandboxing diagnostics; suppresses false warnings | Better Linux sandbox troubleshooting |

---

## 5. Feature Request Trends

| Trend | Evidence | Implication |
|-------|----------|-------------|
| **Workflow automation & CI/CD integration** | #7801 (SessionID), #10948 (plan → new thread), #9158 (WakaTime) | Users want Codex as a scriptable backend, not just interactive tool |
| **Permission granularity** | #14399 (fine-grained), #13914 (Windows Sandbox folder access) | Security/compliance teams need policy-driven access control |
| **Multi-window/multi-thread management** | #15162 (popup regression), #10948 (plan implementation) | Complex projects exceed single-context limitations |
| **Windows-native experience** | #13914, #14453, #15047, #15179, #16285 | WSL integration and Windows sandboxing need first-class treatment |
| **Observability & cost control** | #14593 (token burning), #13854 (wrong model billing) | Enterprise adoption blocked by spend transparency |

---

## 6. Developer Pain Points

**Critical Stability (Windows)**
- 8 of top 30 issues are Windows-specific: crashes on startup (#16269), Store ACL failures (#15179), WSL distro handling (#16285), double-paste (#15047), cmake timeout (#14453). Pattern suggests Windows sandboxing and terminal integration need dedicated engineering focus.

**Cost & Billing Transparency**
- #14593's 335-comment thread indicates a systemic issue with token accounting. Related #13854 (wrong model attribution) compounds trust issues. Users cannot debug spend without detailed per-request logging.

**Session Durability**
- Updates break old threads (#13724), remote tasks fail (#13784), and MCP tools disappear (#15508). Long-running agent workflows feel fragile; users request explicit session export/import.

**TUI/CLI Gap vs. App**
- Multiple "not available in TUI" regressions (#16273, #16284) and missing features (#15720 dropped responses) suggest TUI is second-class. Power users on Enterprise tiers particularly affected.

**Authentication Friction**
- Sign-in doesn't persist across updates (#13650), custom providers lack model selectors (#15138), and dynamic tokens were unsupported until today's PRs. Enterprise SSO workflows remain painful.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-03-31

## Today's Highlights

The Gemini CLI team is actively graduating experimental features to stable status, with planning functionality ([`#24282`](https://github.com/google-gemini/gemini-cli/pull/24282)) and memory services ([`#24274`](https://github.com/google-gemini/gemini-cli/pull/24274)) moving toward general availability. Meanwhile, user-facing instability persists, with multiple reports of model access failures and "endless thinking" states affecting paid subscribers. Infrastructure hardening continues with sandbox security improvements and test suite optimizations.

---

## Releases

*No new releases in the last 24 hours.*

---

## Hot Issues

| Issue | Why It Matters | Community Reaction |
|-------|--------------|------------------|
| [**#23316**: Long-Context & Complex Reasoning Coding Evaluation Dataset](https://github.com/google-gemini/gemini-cli/issues/23316) | Strategic initiative to build next-gen benchmarks as SWE-bench saturates; signals Google's investment in agent evaluation infrastructure | 62 comments, 13 👍 — active maintainer discussion on methodology |
| [**#23328**: Optimize test suite output logging](https://github.com/google-gemini/gemini-cli/issues/23328) | Developer productivity blocker — excessive log spam slows CI and local debugging | 61 comments, 18 👍 — high engagement from contributors |
| [**#24216**: ENDLESS THINKING ON ULTRA SUBSCRIPTION**](https://github.com/google-gemini/gemini-cli/issues/24216) | Critical reliability issue affecting $200/month Ultra subscribers; 5-day outage reported | 5 comments, 9 👍 — frustrated tone, escalation risk |
| [**#24222**: Can't use Gemini 3.1 Pro Preview with AI Pro Plan**](https://github.com/google-gemini/gemini-cli/issues/24222) | Tiered access confusion — paying users blocked from models they expect; suggests shadow-banning or quota misconfiguration | 4 comments, 5 👍 — pattern with #22277 |
| [**#22277**: Unable to use Gemini 3.1 Pro**](https://github.com/google-gemini/gemini-cli/issues/22277) | Persistent model availability issue since default switch to 3.1 Pro; "still on it" spinner syndrome | 3 comments, 11 👍 — widely relatable |
| [**#24281**: Severe Performance Degradation & Frustration**](https://github.com/google-gemini/gemini-cli/issues/24281) | Emotional user feedback citing "extreme dissatisfaction" — indicator of trust erosion | 2 comments, 3 👍 — detailed narrative of failures |
| [**#24264**: Cannot talk to ANY model, request stuck forever**](https://github.com/google-gemini/gemini-cli/issues/24264) | Total functionality failure; request for chat history export suggests debugging difficulty | 2 comments, 1 👍 — severity warrants fast response |
| [**#24263**: Remove experimental feature flag for planning**](https://github.com/google-gemini/gemini-cli/issues/24263) | Governance issue — experimental→stable migration path for core UX feature | 1 comment — internal workstream tracking |
| [**#24285**: Gemini CLI replace the local /etc/passwd**](https://github.com/google-gemini/gemini-cli/issues/24285) | **Security incident** — unauthorized system file modification via agent tool use | 0 comments, 0 👍 — requires immediate triage |
| [**#22822**: SDD: Refine `/spec setup` for existing `/conductor` directory**](https://github.com/google-gemini/gemini-cli/issues/22822) | Migration UX for SDD workflow adoption; affects existing conductor users | 2 comments — design doc stage |

---

## Key PR Progress

| PR | Feature / Fix | Status |
|----|-------------|--------|
| [**#24282**: Promote planning feature to stable](https://github.com/google-gemini/gemini-cli/pull/24282) | Graduates `experimental.plan` → `general.plan.enabled` with migration helper | 🔒 Maintainer review |
| [**#24274**: Background memory service for skill extraction](https://github.com/google-gemini/gemini-cli/pull/24274) | "Confucius" subagent auto-extracts reusable skills from session history to `SKILL.md` files | 🔒 Behind `experimentalMemoryManager` flag |
| [**#24286**: Refactor Linux sandbox — fix ARG_MAX, memory leaks, performance](https://github.com/google-gemini/gemini-cli/pull/24286) | Critical stability for large workspaces; bypasses `E2BIG` limit via temp files | Open |
| [**#24284**: Disable tips by default](https://github.com/google-gemini/gemini-cli/pull/24284) | Reduces UI noise for experienced users | Open |
| [**#24206**: Hide model quota in `/stats`, refactor quota display](https://github.com/google-gemini/gemini-cli/pull/24206) | Simplifies metrics UX, removes distracting quota info | Open |
| [**#24283**: Implement `__read` and `__write` sandbox commands](https://github.com/google-gemini/gemini-cli/pull/24283) | Fixes sandbox file I/O failures where literal command names were executed | Open |
| [**#24270**: Add experimental `/btw` side inquiry feature](https://github.com/google-gemini/gemini-cli/pull/24270) | Ephemeral LLM queries without polluting main conversation history | Open |
| [**#24168**: Cap shell output at 10 MB to prevent RangeError crash](https://github.com/google-gemini/gemini-cli/pull/24168) | Prevents crashes from unbounded command output; `help wanted` for edge cases | Open |
| [**#21960**: Clear stale retry/loading state after cancellation](https://github.com/google-gemini/gemini-cli/pull/21960) | Fixes stuck "still on it" spinner post-`Esc` — addresses #21096 | `help wanted` |
| [**#24276**: Switch integration tests to PREVIEW_GEMINI_MODEL**](https://github.com/google-gemini/gemini-cli/pull/24276) | CI infrastructure update for model versioning | Open |

---

## Feature Request Trends

1. **Memory & Personalization**: Persistent project-level memory ([`#22819`](https://github.com/google-gemini/gemini-cli/issues/22819), [`#24272`](https://github.com/google-gemini/gemini-cli/issues/24272), [`#22809`](https://github.com/google-gemini/gemini-cli/issues/22809)) — users want agents that learn preferences and codebase conventions across sessions.

2. **Output Hygiene**: Compact, controllable tool output ([`#14569`](https://github.com/google-gemini/gemini-cli/issues/14569), [`#20974`](https://github.com/google-gemini/gemini-cli/pull/20974), [`#23328`](https://github.com/google-gemini/gemini-cli/issues/23328)) — JSON dumps and verbose logs are repeatedly flagged as UX friction.

3. **Agent Orchestration**: Subagent coordination, approval mode awareness ([`#23582`](https://github.com/google-gemini/gemini-cli/issues/23582)), and task DAG visualization ([`#23320`](https://github.com/google-gemini/gemini-cli/issues/23320)) — maturing from linear checklists to structured workflows.

4. **Security & Sandboxing**: Tool sandboxing ([`#23923`](https://github.com/google-gemini/gemini-cli/pull/23923)), git hook enforcement ([`#23123`](https://github.com/google-gemini/gemini-cli/issues/23123)), and safe object cloning ([`#22863`](https://github.com/google-gemini/gemini-cli/issues/22863)) — growing priority as agent capabilities expand.

---

## Developer Pain Points

| Pain Point | Evidence | Severity |
|------------|----------|----------|
| **Model access unreliability** | [`#24216`](https://github.com/google-gemini/gemini-cli/issues/24216), [`#24222`](https://github.com/google-gemini/gemini-cli/issues/24222), [`#22277`](https://github.com/google-gemini/gemini-cli/issues/22277), [`#24281`](https://github.com/google-gemini/gemini-cli/issues/24281) | 🔴 Critical — paying users affected |
| **Stuck/cancelled request states** | [`#21960`](https://github.com/google-gemini/gemini-cli/pull/21960), [`#24264`](https://github.com/google-gemini/gemini-cli/issues/24264) | 🔴 High — "still on it" spinner is meme-status |
| **Verbose, unfiltered output** | [`#23328`](https://github.com/google-gemini/gemini-cli/issues/23328), [`#14569`](https://github.com/google-gemini/gemini-cli/issues/14569) | 🟡 Medium — daily friction |
| **Temporary file/workspace pollution** | [`#23571`](https://github.com/google-gemini/gemini-cli/issues/23571) | 🟡 Medium — cleanup overhead |
| **Type safety / unsafe code patterns** | [`#22863`](https://github.com/google-gemini/gemini-cli/issues/22863), [`#19739`](https://github.com/google-gemini/gemini-cli/pull/19739), [`#19755`](https://github.com/google-gemini/gemini-cli/pull/19755) | 🟡 Medium — technical debt concern |
| **SSH/terminal compatibility** | [`#24202`](https://github.com/google-gemini/gemini-cli/issues/24202) | 🟡 Medium — Windows/SSH users blocked |

---

*Digest compiled from github.com/google-gemini/gemini-cli activity 2026-03-30 to 2026-03-31.*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-03-31

---

## 1. Today's Highlights

GitHub shipped v1.0.13 with significant performance improvements including parallelized startup and reduced CPU usage during streaming, alongside critical MCP authentication fixes. The community is actively reporting input handling regressions—particularly Shift+Enter behavior changes and broken X11 middle-click paste—suggesting recent UI refactors introduced unintended side effects. Enterprise policy gaps and local LLM integration requests continue to dominate feature discussions.

---

## 2. Releases

| Version | Type | Key Changes |
|---------|------|-------------|
| **v1.0.13** | Stable | Shell cleanup on session end; CPU optimization via spinner/task polling improvements; SDK `exit_plan_mode.requested` event reliability fix; MCP Microsoft Entra ID consent screen fix; grep/glob timeout responsiveness |
| **v1.0.13-2** | Stable patch | Parallelized terminal detection, auth, and git operations for faster startup |
| **v1.0.14-0** | Pre-release | Available for early testing |

[Release v1.0.13](https://github.com/github/copilot-cli/releases/tag/v1.0.13) · [v1.0.14-0](https://github.com/github/copilot-cli/releases/tag/v1.0.14-0)

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Signal |
|---|-------|--------------|----------------|
| [#1595](https://github.com/github/copilot-cli/issues/1595) | Cannot access any model despite valid Enterprise subscription | **Critical enterprise blocker** — users with active subscriptions see "access denied by Copilot policy" even for basic `/models` command; indicates policy/entitlement sync issues | 17 comments, 8 👍 — active triage |
| [#1481](https://github.com/github/copilot-cli/issues/1481) | SHIFT+ENTER executes prompt instead of line break | **UX regression** — violates standard chat conventions; creates muscle memory conflicts with VS Code, Slack, Discord | 16 comments, 10 👍 — duplicate of #2411 filed same day |
| [#2082](https://github.com/github/copilot-cli/issues/2082) | `ctrl+shift+c` copy broken on Linux | **Accessibility regression** — breaks universal Linux terminal convention; workaround (`ctrl+c`, right-click) poorly documented | 11 comments, 3 👍 |
| [#2411](https://github.com/github/copilot-cli/issues/2411) | Shift+Enter should move to next line instead of submit | **Fresh regression in v1.0.14-0** — confirms #1481 is active in latest pre-release; suggests incomplete fix | 2 comments, filed 2026-03-30 |
| [#2413](https://github.com/github/copilot-cli/issues/2413) | Middle-click paste (X11 primary selection) broken since v1.0.11 | **Linux workflow disruption** — breaks standard X11 copy-paste pattern; regression window identified (v1.0.3→v1.0.11) | 1 comment, filed 2026-03-30 |
| [#2408](https://github.com/github/copilot-cli/issues/2408) | Issues auto-updating CLI | **Reliability concern** — update mechanism requires multiple sessions; impacts reproducibility | 2 comments, 2 👍 |
| [#1285](https://github.com/github/copilot-cli/issues/1285) | Organisation level Agent not showing up | **Enterprise adoption blocker** — org-wide agents (.github-private repo) invisible in CLI despite correct configuration | 6 comments, 6 👍 — ongoing since Feb |
| [#997](https://github.com/github/copilot-cli/issues/997) | Syntax error on Linux x64 binary | **Installation failure** — Node.js path resolution issue breaking CLI entirely for some Linux users | 6 comments — persistent since Jan |
| [#1318](https://github.com/github/copilot-cli/issues/1318) | Custom instruction behavior differs from VS Code | **Cross-platform inconsistency** — `.github/instructions` `applyTo` patterns ignored in CLI; breaks workflow portability | 3 comments, 5 👍 |
| [#2283](https://github.com/github/copilot-cli/issues/2283) | Support OpenAI-compatible base URL override | **Vendor lock-in concern** — blocks local/self-hosted LLM routing via LiteLLM, Ollama, headroom; enterprise data residency use case | 2 comments, 1 👍 |

---

## 4. Key PR Progress

| # | PR | Description | Status |
|---|-----|-------------|--------|
| [#2316](https://github.com/github/copilot-cli/pull/2316) | Dev container feature for GitHub CLI | Adds `ghcr.io/devcontainers/features/github-cli:1` to devcontainer configuration | Open — infrastructure |
| [#2380](https://github.com/github/copilot-cli/pull/2380) | install: use EXIT trap for temp directory cleanup | **Reliability fix** — replaces scattered `rm -rf` calls with guaranteed `EXIT` trap cleanup; fixes leaked temp directories on curl/wget/tar failures | **Merged** 2026-03-30 |
| [#2407](https://github.com/github/copilot-cli/pull/2407) | Create Donk | Empty/noise PR | Closed |

*Note: Only 3 PRs active in last 24h; #2380 represents the only substantive merge.*

---

## 5. Feature Request Trends

| Trend | Evidence | Implication |
|-------|----------|-------------|
| **Local/Private LLM Integration** | #2283 (OpenAI base URL), #2366 (Ollama/LM Studio auto-detection), #2399 (sparse checkout for plugins) | Enterprises want data residency and cost control; CLI's closed endpoint model is friction point |
| **Enterprise Policy Controls** | #1671 (disable autopilot policy), #1285 (org agents visibility), #1595 (entitlement enforcement bugs) | Scale deployments need granular admin controls; current policy engine unreliable |
| **Input/Interaction Refinements** | #1481/#2411 (Shift+Enter), #1737 (quick prompt clear), #2227 (auto-share on exit), #2409 (image paste), #2403 (Esc key conflict) | CLI's input model diverging from user expectations; needs configuration layer |
| **Context & Output Management** | #1761 (configurable compaction threshold), #2388 (output truncation), #2412 (table formatting) | Long-running sessions hitting limits; output rendering needs overhaul |
| **Cross-Platform Parity** | #1318 (VS Code instruction sync), #2082/#2413 (Linux clipboard/X11), #2405 (VS Code terminal scroll) | CLI lagging behind IDE integrations on platform-native behaviors |

---

## 6. Developer Pain Points

| Category | Symptoms | Frequency |
|----------|----------|-----------|
| **Input Handling Regressions** | Shift+Enter, middle-click paste, scroll behavior, Esc key conflicts breaking in recent releases | **High** — 5+ issues in 24h |
| **Enterprise Entitlement Reliability** | "Access denied" errors with valid subscriptions, negative request counters, org agents invisible | **High** — blocking production use |
| **Linux-First Bugs** | Binary syntax errors, X11 clipboard, SSH session handling | **Medium-High** — platform testing gaps evident |
| **Opaque Error Handling** | "Transient API error" without context (#2410), MCP auth flows unclear | **Medium** — debuggability concerns |
| **Update Mechanism Friction** | Multi-session updates, version drift between IDE and CLI | **Medium** — #2408, #2401 |
| **Plugin Ecosystem Maturity** | Private Git host credential handling (#2404, #2400), full-repo clones (#2399) | **Emerging** — extensibility growing pains |

---

*Digest compiled from github.com/github/copilot-cli activity 2026-03-30.*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-03-31

---

## 1. Today's Highlights

Kimi CLI v1.28.0 shipped with a complete light theme system, resolving the long-standing dark-background rendering issues on light terminals. The release also hardens the skills system with restored `--skills-dir` override behavior and fixes critical async I/O blocking that caused write tool freezes. Meanwhile, community demand intensifies for agent swarm architectures, structured outputs, and deeper Codex feature parity.

---

## 2. Releases

### [v1.28.0](https://github.com/MoonshotAI/kimi-cli/releases/tag/1.28.0)
| Change | Impact |
|--------|--------|
| `fix(skills): restore --skills-dir override behavior` | Custom skills directories now properly respected again |
| `fix(cli): update --skills-dir help text` | Clarified documentation for directory override |
| `refactor(skills): rename extra_skills_dirs to skills_d` | Internal cleanup for skills configuration |

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Signal |
|---|-------|--------------|----------------|
| [#1564](https://github.com/MoonshotAI/kimi-cli/issues/1564) | Writefile tool errors after v1.25.0 upgrade | Core editing functionality degraded; affects daily coding workflows | 3 comments, active debugging |
| [#1667](https://github.com/MoonshotAI/kimi-cli/issues/1667) | All API keys return 401 despite active Allegretto tier | Subscription/auth system breakage; paying users blocked | 1 comment, high severity |
| [#1641](https://github.com/MoonshotAI/kimi-cli/issues/1641) | Kimi web subprocess mode design discussion | Architectural debate: embedded Python vs. subprocess runtime; contributor offering implementation | 1 comment, technical depth |
| [#1633](https://github.com/MoonshotAI/kimi-cli/issues/1633) | Agent Swarm/Teammates mode (not subagent) | Fundamental limitation in current multi-agent architecture; requests true peer-to-peer agent collaboration | 1 comment, strategic feature gap |
| [#1623](https://github.com/MoonshotAI/kimi-cli/issues/1623) | Kimi Web spontaneous refreshes | UX-breaking instability in web interface | 1 comment, frustration evident |
| [#1666](https://github.com/MoonshotAI/kimi-cli/issues/1666) | Add `--plan` flag and `default_plan_mode` config | Workflow automation gap; no headless plan mode entry | 0 comments, clear use case |
| [#1663](https://github.com/MoonshotAI/kimi-cli/issues/1663) | 400 "text content is empty" on MCP image input | MCP ecosystem integration failure; blocks visual workflows | 0 comments, blocking bug |
| [#1649](https://github.com/MoonshotAI/kimi-cli/issues/1649) | Windows PowerShell executing Linux commands | Cross-platform shell compatibility gap | 0 comments, platform parity issue |
| [#1646](https://github.com/MoonshotAI/kimi-cli/issues/1646) | Add `/review` slash command for code review | High-frequency developer workflow; Codex parity request | 0 comments, productivity feature |
| [#1639](https://github.com/MoonshotAI/kimi-cli/issues/1639) | Quota restrictions on 49 yuan tier | Pricing/trust issue; user threatening churn | 0 comments, business risk |

---

## 4. Key PR Progress

| # | PR | Description | Status |
|---|-----|-------------|--------|
| [#1665](https://github.com/MoonshotAI/kimi-cli/pull/1665) | Add `--plan` flag and `default_plan_mode` config | Enables headless plan mode startup; addresses [#1666](https://github.com/MoonshotAI/kimi-cli/issues/1666) | Open |
| [#1614](https://github.com/MoonshotAI/kimi-cli/pull/1614) | Shell command security analysis in approval workflow | Pre-execution security scanning for dangerous patterns; addresses [#1539](https://github.com/MoonshotAI/kimi-cli/issues/1539) | Open |
| [#1659](https://github.com/MoonshotAI/kimi-cli/pull/1659) | Fix event loop blocking and watcher crash during file write | Root-cause fix for [#1607](https://github.com/MoonshotAI/kimi-cli/issues/1607) write tool freezes; replaces blocking `difflib` with async execution | Merged |
| [#1661](https://github.com/MoonshotAI/kimi-cli/pull/1661) | Light theme support | Complete theme system with auto-detection; resolves [#1636](https://github.com/MoonshotAI/kimi-cli/issues/1636), [#1660](https://github.com/MoonshotAI/kimi-cli/issues/1660) | Merged |
| [#1658](https://github.com/MoonshotAI/kimi-cli/pull/1658) | OAuth error handling for skill execution | Fixes "incorrect API KEY" confusion post-OAuth; resolves [#1635](https://github.com/MoonshotAI/kimi-cli/issues/1635) | Merged |
| [#1654](https://github.com/MoonshotAI/kimi-cli/pull/1654) | Timeout protection for Agent tool and HTTP requests | Prevents indefinite hangs on web search/fetch operations | Merged |
| [#1655](https://github.com/MoonshotAI/kimi-cli/pull/1655) | Replace blocking ripgrepy with async subprocess | Eliminates uninterruptible Grep hangs; token efficiency improvements | Merged |
| [#1657](https://github.com/MoonshotAI/kimi-cli/pull/1657) | Fix ACP crash when `argv[0]` is not "kimi" | Resolves [#1355](https://github.com/MoonshotAI/kimi-cli/issues/1355), [#1629](https://github.com/MoonshotAI/kimi-cli/issues/1629) for JetBrains AI Assistant compatibility | Merged |
| [#1650](https://github.com/MoonshotAI/kimi-cli/pull/1650) | Embedded session runtime for `kimi web` | Implements [#1641](https://github.com/MoonshotAI/kimi-cli/issues/1641) proposal: in-process runtime default, subprocess opt-out | Open |
| [#1656](https://github.com/MoonshotAI/kimi-cli/pull/1656) | Auto-set `reasoning_effort` for OpenAI-compatible APIs | Fixes [#1616](https://github.com/MoonshotAI/kimi-cli/issues/1616) One API 400 errors with Kimi-K2.5 | Merged |

---

## 5. Feature Request Trends

| Trend | Evidence | Implication |
|-------|----------|-------------|
| **Codex Feature Parity** | [#1646](https://github.com/MoonshotAI/kimi-cli/issues/1646) (`/review`), [#1638](https://github.com/MoonshotAI/kimi-cli/issues/1638) (structured outputs), [#1634](https://github.com/MoonshotAI/kimi-cli/issues/1634) (UI feature) | Users evaluating Kimi against OpenAI's reference implementation; parity gaps drive competitive risk |
| **Advanced Agent Architectures** | [#1633](https://github.com/MoonshotAI/kimi-cli/issues/1633) (Agent Swarm), [#1662](https://github.com/MoonshotAI/kimi-cli/issues/1662) (auto-evolving skills via OpenSpace) | Demand moving beyond simple subagents toward autonomous, self-improving systems |
| **Workflow Automation** | [#1666](https://github.com/MoonshotAI/kimi-cli/issues/1666) (headless plan mode), [#1646](https://github.com/MoonshotAI/kimi-cli/issues/1646) (programmatic review) | CLI being integrated into CI/CD and automated pipelines; interactivity constraints are friction |
| **MCP Ecosystem Maturity** | [#1663](https://github.com/MoonshotAI/kimi-cli/issues/1663) (image input handling) | Visual/multimodal MCP tools exposing edge cases in current implementation |

---

## 6. Developer Pain Points

| Pain Point | Frequency | Manifestation |
|------------|-----------|---------------|
| **Write tool instability** | High | [#1564](https://github.com/MoonshotAI/kimi-cli/issues/1564), [#1607](https://github.com/MoonshotAI/kimi-cli/issues/1607) — core editing experience degraded across multiple versions; fix in [#1659](https://github.com/MoonshotAI/kimi-cli/pull/1659) |
| **Async I/O blocking** | High | Multiple PRs ([#1659](https://github.com/MoonshotAI/kimi-cli/pull/1659), [#1655](https://github.com/MoonshotAI/kimi-cli/pull/1655), [#1654](https://github.com/MoonshotAI/kimi-cli/pull/1654)) addressing event loop hangs — systemic architectural debt |
| **Theme/rendering glitches** | Medium | [#1636](https://github.com/MoonshotAI/kimi-cli/issues/1636), [#1660](https://github.com/MoonshotAI/kimi-cli/issues/1660) — hardcoded dark colors breaking light terminals; now resolved |
| **Windows platform gaps** | Medium | [#1649](https://github.com/MoonshotAI/kimi-cli/issues/1649) — shell command compatibility assumptions |
| **Authentication edge cases** | Medium | [#1667](https://github.com/MoonshotAI/kimi-cli/issues/1667), [#1635](https://github.com/MoonshotAI/kimi-cli/issues/1635) — OAuth and tiered quota systems producing confusing errors |
| **Web interface reliability** | Medium | [#1623](https://github.com/MoonshotAI/kimi-cli/issues/1623) — spontaneous refreshes disrupting sessions |

---

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-03-31

---

## 1. Today's Highlights

Three rapid-fire patch releases (v1.3.7–v1.3.9) landed to fix critical plugin loading regressions and add PowerShell support on Windows. The team is aggressively refactoring core services to Effect patterns with three major service migrations in flight. Session stability remains a top concern, with multiple race-condition bugs reported around cancellation and abort handling.

---

## 2. Releases

| Version | Key Changes |
|---------|-------------|
| **v1.3.9** | Fixed plugin entrypoint resolution for paths without leading dot — critical fix for npm plugin loading |
| **v1.3.8** | No notable changes (skippable) |
| **v1.3.7** | PowerShell first-class support on Windows; plugin installs preserve JSONC comments; fixed `OPENCODE_DISABLE_CLAUDE_CODE_PROMPT` for project-level CLAUDE.md; improved variant modal behavior; added theme support |

---

## 3. Hot Issues

| Issue | Why It Matters | Community Reaction |
|-------|--------------|------------------|
| [#2987](https://github.com/anomalyco/opencode/issues/2987) **All sessions are gone after `/compact`** | Data loss bug — `/compact` command appears to corrupt session storage when interrupted. 29 comments indicate widespread impact. | 🔥 High concern; users reporting lost work |
| [#3199](https://github.com/anomalyco/opencode/issues/3199) **Mouse generates garbled text during shell execution** | TUI input corruption when agent runs shell commands — blocks all interaction. | 7 👍, resolved but pattern of TUI instability noted |
| [#14273](https://github.com/anomalyco/opencode/issues/14273) **Zen free models: "Free usage exceeded" with balance** | Billing/quoting logic broken for free-tier Zen models despite positive balance. | Confusion around Zen pricing model |
| [#12741](https://github.com/anomalyco/opencode/issues/12741) **Skills not auto-detected in `~/.agents/skills`** | Docs promise auto-detection that doesn't work — friction for skill developers. | 6 👍, documentation/implementation gap |
| [#5199](https://github.com/anomalyco/opencode/issues/5199) **Add output-style feature like Claude Code** | Major UX gap vs. competitor — users want customizable AI communication styles. | 8 👍, long-standing feature request |
| [#7006](https://github.com/anomalyco/opencode/issues/7006) **`permission.ask` hook defined but never triggered** | New permissions system appears half-implemented — breaks plugin auto-approval use cases. | 8 👍, blocking for plugin developers |
| [#20045](https://github.com/anomalyco/opencode/issues/20045) **Path format inconsistency: `edit` vs `external_directory`** | Agent-level permissions silently fail due to relative/absolute path mismatch. | Subtle but breaking for security configs |
| [#20047](https://github.com/anomalyco/opencode/issues/20047) **OpenRouter `console.warn` bleeds through TUI** | Provider warnings pollute terminal UI — polish issue affecting perceived stability. | Low engagement but quality signal |
| [#17531](https://github.com/anomalyco/opencode/issues/17531) **Copilot auto-titling fails when enterprise disables gpt-5-mini** | Hard dependency on specific model breaks enterprise deployments. | 2 👍, enterprise adoption blocker |
| [#19604](https://github.com/anomalyco/opencode/issues/19604) **Write tool fails silently on large files (~1000+ lines)** | Silent failure mode for core editing functionality — high impact on productivity. | No 👍 yet but critical severity |

---

## 4. Key PR Progress

| PR | Description | Status |
|----|-------------|--------|
| [#20143](https://github.com/anomalyco/opencode/pull/20143) **Effectify SessionRevert service** | Converts session revert to Effect pattern — part of major architectural migration | 🟢 Open, vouched contributor |
| [#20132](https://github.com/anomalyco/opencode/pull/20132) **Effectify Storage service** | Migrates storage to Effect with proper concurrency control (SynchronizedRef, TxReentrantLock) | 🟢 Open, vouched contributor |
| [#20142](https://github.com/anomalyco/opencode/pull/20142) **Effectify SessionSummary service** | Completes Effect migration for session summary generation | 🟢 Open, vouched contributor |
| [#20136](https://github.com/anomalyco/opencode/pull/20136) **GitHub Copilot auto model selection** | "Auto (Best for task)" model that intelligently selects per-request | 🟢 Open, closes #10093 |
| [#20152](https://github.com/anomalyco/opencode/pull/20152) **Experimental `team` tool for parallel subagents** | MVP of parallel sub-agent orchestration — major new capability | 🟢 Open |
| [#20071](https://github.com/anomalyco/opencode/pull/20071) **Fix Windows FileTime false overwrites** | Canonicalizes paths to prevent Windows-specific file conflict bugs | 🟢 Open, closes #18028 |
| [#20150](https://github.com/anomalyco/opencode/pull/20150) **Fix npm plugin main entries without dot prefix** | Resolves #20149 — plugin loading regression fix | 🟢 Open, needs compliance |
| [#20146](https://github.com/anomalyco/opencode/pull/20146) **Hide prompt usage when sidebar visible** | UI polish: deduplicates context display | 🟢 Open, closes #20145 |
| [#15749](https://github.com/anomalyco/opencode/pull/15749) **Plugin session webview bridge** | Enables plugins to expose session UI — major extensibility unlock | 🟢 Open |
| [#18767](https://github.com/anomalyco/opencode/pull/18767) **Mobile touch optimization** | Makes desktop app usable on touch devices | 🟢 Open |

---

## 5. Feature Request Trends

| Direction | Evidence | Momentum |
|-----------|----------|----------|
| **Claude Code parity** | #5199 (output styles), #5199-adjacent requests | High — competitive pressure |
| **Better session management** | #2987 (data loss), #20094/#20095 (cancellation races), #20098 (provider fallback) | Critical — stability investments needed |
| **Plugin ecosystem maturity** | #7006 (permissions), #15749 (webview), #12527/#18585 (metadata), #2513 (virtual tools) | Growing — platform play |
| **Enterprise/team features** | #17531 (Copilot enterprise), #20152 (team tool), #20045 (path permissions) | Emerging — B2B signals |
| **Cross-platform polish** | #11319 (Ubuntu install), #20071 (Windows), #20128 (Android/JuiceSSH) | Steady — expansion friction |

---

## 6. Developer Pain Points

| Pain Point | Frequency | Impact |
|------------|-----------|--------|
| **Session/data loss** | Multiple reports (#2987, #20094-20097) | 🔴 Critical — erodes trust |
| **Plugin loading fragility** | #20139, #20149, #20153, #20140, #20150, v1.3.9 patch | 🔴 Critical — ecosystem blocker |
| **TUI instability** | #3199, #20047, #20128, #13854 | 🟡 High — daily friction |
| **Permission system gaps** | #7006, #20045 | 🟡 High — security/config confusion |
| **Provider/model quirks** | #14273, #17531, #12614, #3444 | 🟡 Moderate — integration debt |
| **Documentation drift** | #12741, #20155, #20154 | 🟢 Moderate — fixable |

---

*Generated from github.com/anomalyco/opencode — 50 issues, 50 PRs, 3 releases in last 24h*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-03-31

---

## 1. Today's Highlights

The Qwen Code team shipped **v0.14.0-preview.2** alongside a stable **v0.13.2** patch, with the TypeScript SDK reaching **v0.1.6**. The release pipeline hit a snag with a failed v0.13.2 workflow (#2751), now resolved. Community activity surged around **permission persistence bugs on Windows** and **TUI performance degradation**, while ambitious feature PRs for **Channels platform integration** (Telegram/WeChat/DingTalk) and **in-session cron scheduling** advanced toward merge.

---

## 2. Releases

| Version | Type | Key Changes |
|---------|------|-------------|
| **[v0.14.0-preview.2](https://github.com/QwenLM/qwen-code/releases/tag/v0.14.0-preview.2)** | Preview | Early access to 0.14 features; full changelog pending |
| **[v0.13.2](https://github.com/QwenLM/qwen-code/releases/tag/v0.13.2)** | Stable | Docs fix: rebranded "Bailian" → "ModelStudio" in README ([PR #2714](https://github.com/QwenLM/qwen-code/pull/2714)) |
| **[sdk-typescript-v0.1.6](https://github.com/QwenLM/qwen-code/releases/tag/sdk-typescript-v0.1.6)** | SDK | Bundles CLI v0.13.1; backfilled npm publication for v0.1.5 |

> **Note:** Release workflow [failed](https://github.com/QwenLM/qwen-code/actions/runs/23737905042) for v0.13.2 initially (#2751), subsequently closed.

---

## 3. Hot Issues

| Issue | Status | Why It Matters |
|-------|--------|--------------|
| **[#2727](https://github.com/QwenLM/qwen-code/issues/2727)** — Shell commands fail with "File not found" on Windows | **CLOSED** | Critical Windows compatibility bug affecting npm/npx execution; 7 comments indicate active community debugging |
| **[#2640](https://github.com/QwenLM/qwen-code/issues/2640)** — Answers not saving in one session | **CLOSED** | Permission persistence failure ("Always allow" ignored); 8 upvotes signal widespread frustration, now resolved |
| **[#2721](https://github.com/QwenLM/qwen-code/issues/2721)** — Request to adopt iflow CLI project | **OPEN** | Community member advocates for absorbing a competing tool perceived as superior; 5 comments, culturally significant for Chinese users |
| **[#2409](https://github.com/QwenLM/qwen-code/issues/2409)** — Subagent parity with Claude Code | **OPEN** | Strategic gap analysis: Qwen Code at ~40-45% feature parity; 4 comments tracking long-term roadmap |
| **[#2688](https://github.com/QwenLM/qwen-code/issues/2688)** — Chinese-English mixed filenames corrupted with inserted spaces | **CLOSED** | Localization bug breaking file operations on Chinese Windows systems; emotionally charged user feedback |
| **[#2730](https://github.com/QwenLM/qwen-code/issues/2730)** — QwenCode refuses to do anything | **OPEN** | Severe regression where agent enters refusal state; 3 comments, needs reproduction details |
| **[#1910](https://github.com/QwenLM/qwen-code/issues/1910)** — Agent lacks knowledge of own config system | **CLOSED** | Meta-cognitive gap: agent cannot assist with its own configuration; 3 comments, 1 upvote, foundational UX issue |
| **[#2722](https://github.com/QwenLM/qwen-code/issues/2722)** — "Edit automatically" bypasses all command approvals in VS Code | **CLOSED** | Security-adjacent UX bug: automatic edits incorrectly escalated to full command execution; 3 comments |
| **[#2736](https://github.com/QwenLM/qwen-code/issues/2736)** — Cannot run `qwen` command; config corruption | **OPEN** | `TypeError: Invalid URL` on startup; user seeking config reset location; 3 comments |
| **[#2757](https://github.com/QwenLM/qwen-code/issues/2757)** — v0.13.2 git commit message generation fails | **OPEN** | Fresh regression in latest stable; 2 comments with screenshots, actively reported |

---

## 4. Key PR Progress

| PR | Author | Feature/Fix |
|----|--------|-------------|
| **[#2670](https://github.com/QwenLM/qwen-code/pull/2670)** — Fix permission persistence on Windows | askadityapandey | **Root cause:** Case-sensitive path comparison on case-insensitive Windows filesystem; fixes "Always allow" options failing between sessions |
| **[#2628](https://github.com/QwenLM/qwen-code/pull/2628)** — Channels platform with Telegram/WeChat/DingTalk | tanzhenxin | Major extensibility feature: plugin-based messaging platform integration for multi-channel agent deployment |
| **[#2731](https://github.com/QwenLM/qwen-code/pull/2731)** — In-session cron scheduling | tanzhenxin | Session-scoped recurring jobs ("loops") for autonomous monitoring of long-running operations; new `schedule_cron_job`/`list_cron_jobs`/`cancel_cron_job` tools |
| **[#2719](https://github.com/QwenLM/qwen-code/pull/2719)** — npm registry support for extensions | tanzhenxin | Enterprise distribution: install extensions via scoped npm packages with private registry authentication |
| **[#2745](https://github.com/QwenLM/qwen-code/pull/2745)** — Normalize proxy URLs without protocol | DennisYu07 | UX fix: auto-prefix `http://` for proxy addresses like `127.0.0.1:7860`; improves compatibility with common tools |
| **[#2568](https://github.com/QwenLM/qwen-code/pull/2568)** — Replace structuredClone with shallow copy | netbrah | **Performance:** Eliminates GC pressure from deep-cloning entire conversation history on every turn; critical for long sessions |
| **[#2573](https://github.com/QwenLM/qwen-code/pull/2573)** — Tool output masking service | netbrah | **Context management:** Replaces old bulky tool outputs with preview snippets, preserving full output on disk; includes token estimation |
| **[#2569](https://github.com/QwenLM/qwen-code/pull/2569)** — Parallelize contiguous read-only tool calls | netbrah | **Performance:** Batches file reads/greps via `Promise.all`; 3-5x speedup for common multi-file access patterns |
| **[#2580](https://github.com/QwenLM/qwen-code/pull/2580)** — `read_many_files` tool for batch reading | netbrah | Reduces tool call overhead 5-10x for multi-file operations; ported from Gemini CLI |
| **[#2581](https://github.com/QwenLM/qwen-code/pull/2581)** — Omission placeholder detector | netbrah | **Safety:** Blocks lazy model outputs like `(rest of methods ...)` in edit/write tools; prevents accidental code deletion |

---

## 5. Feature Request Trends

| Trend | Evidence | Momentum |
|-------|----------|----------|
| **Real-time observability** | [#2742](https://github.com/QwenLM/qwen-code/issues/2742) (token consumption display), [#2725](https://github.com/QwenLM/qwen-code/issues/2725) (screenshot/window capture) | High — developers need visibility into subagent costs and GUI debugging |
| **Claude Code parity** | [#2409](https://github.com/QwenLM/qwen-code/issues/2409) (subagents), implicit comparisons in [#2721](https://github.com/QwenLM/qwen-code/issues/2721) | Sustained — competitive pressure driving roadmap |
| **Planning mode enhancements** | [#2754](https://github.com/QwenLM/qwen-code/issues/2754) (WebFetch in planning), [#2725](https://github.com/QwenLM/qwen-code/issues/2725) (undo/redo, message editing) | Growing — workflow refinement for complex tasks |
| **Cross-platform messaging** | [#2628](https://github.com/QwenLM/qwen-code/pull/2628) (Channels PR) | Active development — enterprise deployment scenarios |
| **Scheduling & automation** | [#2731](https://github.com/QwenLM/qwen-code/pull/2731) (cron), [#2725](https://github.com/QwenLM/qwen-code/issues/2725) | Emerging — shift from interactive to autonomous agent operation |

---

## 6. Developer Pain Points

| Pain Point | Frequency | Issue IDs | Severity |
|------------|-----------|-----------|----------|
| **Permission persistence failures** | Very High | [#2640](https://github.com/QwenLM/qwen-code/issues/2640), [#2700](https://github.com/QwenLM/qwen-code/issues/2700), [#2723](https://github.com/QwenLM/qwen-code/issues/2723), [#2727](https://github.com/QwenLM/qwen-code/issues/2727) | **Critical** — "Always allow" ignored across Windows/Linux; PR [#2670](https://github.com/QwenLM/qwen-code/pull/2670) addresses root cause |
| **TUI performance & UX** | High | [#2748](https://github.com/QwenLM/qwen-code/issues/2748), [#2651](https://github.com/QwenLM/qwen-code/issues/2651), [#2740](https://github.com/QwenLM/qwen-code/issues/2740) | **High** — 3-5s startup, screen flicker, freezes on shell commands |
| **Windows-specific bugs** | High | [#2727](https://github.com/QwenLM/qwen-code/issues/2727), [#2688](https://github.com/QwenLM/qwen-code/issues/2688), [#2746](https://github.com/QwenLM/qwen-code/issues/2746), [#2736](https://github.com/QwenLM/qwen-code/issues/2736) | **High** — path handling, encoding, config corruption |
| **MCP/Tool integration issues** | Medium-High | [#379](https://github.com/QwenLM/qwen-code/issues/379), [#2758](https://github.com/QwenLM/qwen-code/issues/2758), [#2755](https://github.com/QwenLM/qwen-code/issues/2755) | **Medium** — JSON serialization, WASM loading, LSP activation |
| **Model availability/configuration** | Medium | [#2759](https://github.com/QwenLM/qwen-code/issues/2759), [#2736](https://github.com/QwenLM/qwen-code/issues/2736), [#2756](https://github.com/QwenLM/qwen-code/issues/2756) | **Medium** — Qwen3.6 missing, proxy URL errors, streaming timeouts |

---

*Digest compiled from 28 issues and 38 pull requests updated in the last 24 hours.*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*