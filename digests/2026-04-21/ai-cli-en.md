# AI CLI Tools Community Digest 2026-04-21

> Generated: 2026-04-21 00:16 UTC | Tools covered: 8

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
*Date: 2026-04-21*

---

## 1. Ecosystem Overview

The AI CLI tools landscape has matured into a multi-polar ecosystem where Claude Code, OpenAI Codex, and Gemini CLI lead in enterprise mindshare, while GitHub Copilot CLI, Kimi Code CLI, Qwen Code, OpenCode, and Pi carve out differentiated niches. Today's activity reveals a sector under pressure: all major tools face reliability regressions in recent releases (Bedrock breakages in Claude Code and OpenCode, Windows failures in Codex and Copilot CLI, authentication crises in Qwen Code). Meanwhile, the community is driving convergence around enterprise requirements—AWS/Bedrock support, Windows parity, IDE protocol standardization (ACP), and agent loop control—while vendor-specific differentiation increasingly centers on memory architectures, telemetry depth, and extension ecosystems rather than core model capabilities.

---

## 2. Activity Comparison

| Tool | Issues Updated (24h) | PRs Updated (24h) | Release Status | Notable Activity Pattern |
|:---|:---|:---|:---|:---|
| **Claude Code** | 10+ hot issues | 4 PRs (minimal external) | **v2.1.116 shipped**; critical Bedrock regression | Low external contribution; community pressure for open source (#41447) |
| **OpenAI Codex** | 10 hot issues | 15+ PRs (10+ stacked analytics) | **rust-v0.122.0 shipped** | Heavy internal engineering velocity; systematic telemetry expansion |
| **Gemini CLI** | 10 hot issues | 10 PRs | *No release* | Active memory system refactor; SandyTao520 driving 3 PRs |
| **GitHub Copilot CLI** | 10 hot issues | **0 PRs** | **v1.0.33/v1.0.34 shipped** | Direct-commit release model; minimal community contribution |
| **Kimi Code CLI** | 10 issues | 10 PRs | **v1.37.0 shipped** | Strong community PR velocity; architectural proposals (RalphFlow, `/loop`) |
| **OpenCode** | 10+ hot issues | 10 PRs | **v1.14.19 shipped** | Flurry of provider integration PRs; macOS theme regressions dominant |
| **Pi** | 10 issues | 10 PRs | **v0.68.0 shipped** | 25+ issues/PRs closed in 24h; rapid iteration on extension APIs |
| **Qwen Code** | 10+ hot issues | 10 PRs | **v0.14.5-nightly shipped** | Auth crisis driving urgent VS Code extension overhaul |

---

## 3. Shared Feature Directions

| Requirement | Tools | Specific Needs |
|:---|:---|:---|
| **AWS/Bedrock Enterprise Support** | Claude Code, OpenAI Codex, Pi, OpenCode | First-class provider configs (#18744 Codex, #3456 Pi), dynamic token refresh (`AWS_BEARER_TOKEN_BEDROCK_CMD`), SigV4 auth (#17820 Codex); *regressions* in Claude Code (#51377) and OpenCode (#23110) show fragility |
| **Windows Platform Parity** | OpenAI Codex, GitHub Copilot CLI, Kimi Code CLI, OpenCode, Qwen Code | Install failures (#17432 Codex), silent exits (#1164 Copilot CLI), CRLF corruption (#1952 Kimi), path case-sensitivity (#2670 Qwen), desktop startup (#21256 OpenCode) |
| **Agent Loop Control** | Kimi Code CLI, Claude Code, Gemini CLI | RalphFlow convergence detection (#1960 Kimi), `/loop` intentional repetition (#1834 Kimi), subagent lifecycle (#23534 OpenCode); Gemini's memory refactor (#25716) indirectly addresses context explosion |
| **IDE Protocol Standardization (ACP)** | Kimi Code CLI, Qwen Code, Claude Code | Session history replay (#1956 Kimi), hooks parity (#3248 Qwen), IDE extension session sync; ACP emerging as *de facto* standard for CLI-IDE bridge |
| **Memory/Context Architecture** | Gemini CLI, Claude Code, Kimi Code CLI | Tiered memory (global/project/session/turn in #25716 Gemini), `/resume` optimization (Claude Code v2.1.116), GEMINI.md patch proposals (#25718); tension between autonomy and precision |
| **Telemetry & Cost Transparency** | OpenAI Codex, Claude Code, GitHub Copilot CLI | 10+ stacked analytics PRs in Codex; token burn megathread (#14593, 551 comments); rate limit display bugs (#2839 Copilot CLI); cache TTL configurability (#2603 Claude Code) |
| **Mobile/Remote Session Access** | GitHub Copilot CLI, Claude Code | Phone session monitoring (#1687 Copilot CLI, 34 👍 highest feature request); push notification reliability (#50949 Claude Code) |

---

## 4. Differentiation Analysis

| Dimension | Leaders | Differentiation |
|:---|:---|:---|
| **Telemetry Depth** | **OpenAI Codex** | Systematic instrumentation across tool lifecycle, guardian review, responses API, terminal interactions—clear data-driven optimization strategy; 10+ stacked PRs suggest internal metrics imperative |
| **Extension/White-Label Platform** | **Pi** | `ctx.ui.setWorkingIndicator()`, `before_agent_start` structured APIs, `APP_NAME` branding—positioning as embeddable agent runtime; fastest community PR closure (25+ in 24h) |
| **Memory System Sophistication** | **Gemini CLI** | Prompt-driven memory editing replacing slow subagent (#25716), `confucius` skill extractor (#25718), global/project/session/turn tiering—most architecturally ambitious |
| **Enterprise Policy Integration** | **GitHub Copilot CLI** | Native GitHub Enterprise policy engine (flaky in practice: #1595, #2306); Azure DevOps synergy (#1150); Microsoft ecosystem lock-in |
| **Open Source Community Pressure** | **Claude Code** | Symbolic #41447 "open source Claude Code" PR; minimal external contribution despite high issue volume; closed model creating documentation debt (#38575, coygeek's 6+ doc issues) |
| **Rapid Model Ecosystem Expansion** | **OpenCode, Pi** | Kimi K2.6 (#22408 OpenCode, #3477 Pi), Databricks (#7984 OpenCode), Kiro/AWS (#20491 OpenCode), Open WebUI (#18306 OpenCode), OpenRouter (#3427 Pi)—broadest provider diversity |
| **Agent Architecture Formalization** | **Kimi Code CLI** | RalphFlow proposal (#1960) for convergence detection, `/loop` command (#1834) for intentional repetition—most explicit treatment of loop as first-class primitive |
| **CJK/i18n Focus** | **Qwen Code** | IME composition fixes (#3456), documentation localization (#3240); auth crisis (#3203, 104 comments) reflects large Chinese user base disruption |

---

## 5. Community Momentum & Maturity

| Tier | Tools | Assessment |
|:---|:---|:---|
| **Highest Velocity** | **Pi, Kimi Code CLI** | Pi: 25+ issues/PRs closed in 24h, rapid extension API evolution. Kimi: strong community PRs with architectural ambition (RalphFlow, `/loop`), responsive self-service (#1956 filer submitted fix) |
| **High Engineering, Low External** | **OpenAI Codex, Claude Code** | Codex: massive internal PR velocity (15+ in 24h) but 551-comment token burn megathread shows trust erosion. Claude Code: release regressions (#51377) compound documentation gaps; open-source pressure unaddressed |
| **Active but Fragile** | **Gemini CLI, OpenCode, Qwen Code** | Gemini: memory refactor promising but data loss (#25679) and context explosion (#25688) are critical un-triaged. OpenCode: 1.4.x upgrade instability (#23211, #23110) undermines provider expansion momentum. Qwen: auth crisis (#3203) dominates all other activity |
| **Stagnant External Contribution** | **GitHub Copilot CLI** | Zero PRs in 24h; direct-commit model; Windows instability (#1164) persistent since January; enterprise policy flakiness chronic |

**Maturity Signals**: 
- **Codex** most mature in telemetry/observability infrastructure
- **Pi** most mature in extension API stability and community responsiveness  
- **Claude Code** most mature in core agent UX but regressing in release quality
- **Gemini CLI** architecturally ambitious but execution/reliability gap widening

---

## 6. Trend Signals

| Trend | Evidence | Strategic Implication |
|:---|:---|:---|
| **Enterprise auth as critical path** | Dynamic token refresh patterns (`AWS_BEARER_TOKEN_BEDROCK_CMD` Pi, OAuth→API Key migration Qwen #3398, enterprise policy flakiness Copilot CLI #1595) | Long-running agent sessions incompatible with static credentials; `*_CMD` pattern becoming standard; IAM integration is table stakes |
| **Agent loop control moving from bugfix to architecture** | RalphFlow (#1960 Kimi), `/loop` command (#1834 Kimi), convergence detection proposals; contrast with accidental loops (#1927, #1950) | Industry recognizing unbounded iteration as *design problem*, not implementation bug; formal loop primitives will differentiate next-generation tools |
| **Terminal UX as competitive battleground** | TUI enhancements (side conversations Codex #17022, working indicators Pi #3413, compact mode Qwen #3100), but also widespread regressions (Ghostty white text #23543, theme detection #23196, flicker #3013) | Terminal-native experience now expected at IDE parity; terminal emulator fragmentation creating testing burden |
| **Context/resource management crisis** | Gemini 24GB→>200% context explosion (#25688), Claude Code 40MB+ session optimization (v2.1.116), Codex token burn (#14593), OpenCode compaction settings | Agent "helpfulness" (full scans, persistent memory) colliding with resource reality; surgical precision vs. autonomous breadth tension unresolved |
| **Cross-platform parity as unresolved debt** | Windows consistently behind across all tools; macOS theme detection broken (OpenCode #23196); Linux AppArmor conflicts (Codex #15057); CJK IME (Qwen #3456) | Platform breadth outpacing depth; Windows enterprise market particularly underserved |
| **Documentation-code drift as systemic risk** | coygeek's 6+ doc issues (Claude Code), Qwen auth docs (#3382), OpenCode config examples (#3384) | Release velocity exceeding doc maintenance; automated doc validation needed; production headless users "flying blind" |

---

*Report compiled from 80+ issues, 60+ PRs, and 8 release notes across the AI CLI tools ecosystem.*

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
*Data as of 2026-04-21 | Repository: [anthropics/skills](https://github.com/anthropics/skills)*

---

## 1. Top Skills Ranking

| Rank | Skill | PR | Status | Description | Discussion Focus |
|:---|:---|:---|:---|:---|:---|
| 1 | **Document Typography** | [#514](https://github.com/anthropics/skills/pull/514) | 🟡 Open | Prevents typographic defects in AI-generated documents: orphan word wraps, widow paragraphs, and numbering misalignment | Universal pain point—"affects every document Claude generates"; author argues users rarely ask for good typography but always suffer from bad |
| 2 | **Skill Quality & Security Analyzers** | [#83](https://github.com/anthropics/skills/pull/83) | 🟡 Open | Meta-skills for evaluating Claude Skills across 5 dimensions (structure, security, performance, UX, maintainability) | Enterprise governance angle; positions Skills as production artifacts needing QA |
| 3 | **Frontend Design** | [#210](https://github.com/anthropics/skills/pull/210) | 🟡 Open | Revised skill for actionable, conversation-bounded frontend design guidance | Focus on *actionability*—ensuring every instruction is executable within single conversation |
| 4 | **ODT (OpenDocument)** | [#486](https://github.com/anthropics/skills/pull/486) | 🟡 Open | Create, fill, read, convert ODT/ODS files; parse ODT to HTML | Open-source/ISO standard document format; LibreOffice ecosystem bridge |
| 5 | **DOCX Tracked Changes Fix** | [#541](https://github.com/anthropics/skills/pull/541) | 🟡 Open | Fixes document corruption from `w:id` collisions between tracked changes and existing bookmarks | Deep OOXML expertise; hardcoded ID conflicts in shared ID space |
| 6 | **Testing Patterns** | [#723](https://github.com/anthropics/skills/pull/723) | 🟡 Open | Full testing stack: philosophy (Testing Trophy), unit testing (AAA), React component testing, integration patterns | Comprehensive scope; addresses "what NOT to test" gap |
| 7 | **SAP-RPT-1-OSS Predictor** | [#181](https://github.com/anthropics/skills/pull/181) | 🟡 Open | SAP's open-source tabular foundation model for predictive analytics on SAP business data | Enterprise ERP integration; Apache 2.0 model from SAP TechEd 2025 |
| 8 | **Codebase Inventory Audit** | [#147](https://github.com/anthropics/skills/pull/147) | 🟡 Open | 10-step workflow for identifying orphaned code, unused files, documentation gaps, infrastructure bloat | Outputs `CODEBASE-STATUS.md` as single source of truth |

---

## 2. Community Demand Trends

From high-engagement Issues, the community's most-anticipated Skill directions:

| Trend | Evidence | Representative Issue |
|:---|:---|:---|
| **Org-wide Skill Distribution** | 9 comments, 5 👍 | [#228](https://github.com/anthropics/skills/issues/228) — Shared skill libraries replacing Slack/Teams file sharing |
| **Skill Reliability & Triggering** | 6 comments, 6 👍 | [#556](https://github.com/anthropics/skills/issues/556) — `claude -p` 0% skill trigger rate; evaluation infrastructure broken |
| **Enterprise Security & Trust Boundaries** | 4 comments, 2 👍 | [#492](https://github.com/anthropics/skills/issues/492) — Community skills impersonating `anthropic/` namespace |
| **MCP Interoperability** | 4 comments | [#16](https://github.com/anthropics/skills/issues/16) — Expose Skills as Model Context Protocol servers |
| **Multi-Platform Deployment** | 4 comments | [#29](https://github.com/anthropics/skills/issues/29) — AWS Bedrock compatibility |
| **Skill Lifecycle Management** | 3–10 comments each | [#62](https://github.com/anthropics/skills/issues/62), [#406](https://github.com/anthropics/skills/issues/406), [#403](https://github.com/anthropics/skills/issues/403) — Disappearing skills, upload failures, undeletable versions |

**Emerging pattern**: The community is shifting from *creating* Skills to *operationalizing* them—distribution, governance, reliability, and lifecycle management.

---

## 3. High-Potential Pending Skills

Active PRs with strong engagement that may merge soon:

| Skill | PR | Why It May Land |
|:---|:---|:---|
| **Document Typography** | [#514](https://github.com/anthropics/skills/pull/514) | Addresses universal, daily user pain; no dependencies; narrowly scoped |
| **Skill Quality Analyzer** | [#83](https://github.com/anthropics/skills/pull/83) | Meta-quality tooling aligns with Anthropic's governance needs; enterprise-ready |
| **Testing Patterns** | [#723](https://github.com/anthropics/skills/pull/723) | Fills critical gap in software engineering Skills; comprehensive but structured |
| **ODT Support** | [#486](https://github.com/anthropics/skills/pull/486) | Complements existing DOCX/PDF Skills; open-source format demand |
| **DOCX Bug Fixes** (3x from Lubrsy706) | [#541](https://github.com/anthropics/skills/pull/541), [#539](https://github.com/anthropics/skills/pull/539), [#538](https://github.com/anthropics/skills/pull/538) | Production-critical fixes; author demonstrating sustained maintenance commitment |

---

## 4. Skills Ecosystem Insight

> **The community's most concentrated demand is operational maturity: moving from individual Skill creation to enterprise-grade distribution, governance, and reliability infrastructure—while the most vibrant Skill innovation remains in document processing (DOCX/ODT/PDF typography and generation) and meta-cognitive tooling (quality analysis, testing patterns, persistent memory).**

---

*Report methodology: PRs ranked by comment volume and engagement signals; Issues analyzed for recurring themes and 👍 velocity. All links verified against `github.com/anthropics/skills` as of 2026-04-21.*

---

# Claude Code Community Digest — 2026-04-21

## Today's Highlights

Anthropic shipped **v2.1.116** with significant performance wins for large-session `/resume` (up to 67% faster on 40MB+ sessions) and deferred MCP resource loading. However, the release introduced a **critical regression for Amazon Bedrock users** (`output_config.effort` API error) that is already generating urgent reports. Documentation gaps remain a persistent theme, with prolific contributor `coygeek` filing multiple issues against missing or unclear docs across sessions, tools, permissions, and sub-agents.

---

## Releases

### [v2.1.116](https://github.com/anthropics/claude-code/releases/tag/v2.1.116)
- **Large-session `/resume` performance**: Up to 67% faster on 40MB+ sessions; improved handling of dead-fork entry bloat
- **MCP startup optimization**: `resources/templates/list` now deferred until first `@`-mention, reducing initialization overhead for multi-stdio-server configurations

---

## Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|--------------|-------------------|
| [#45335](https://github.com/anthropics/claude-code/issues/45335) | **Claude Max 5x gift subscription auto-canceled** — account reverted to Free plan after ~1 week with no user action | Revenue/billing trust issue; affects gifted enterprise/credit plans | 🔥 39 comments, 14 👍 — highest engagement; users reporting similar experiences |
| [#12346](https://github.com/anthropics/claude-code/issues/12346) | **GitLab Integration** — repository connection, MRs, mobile access | Major platform gap vs. GitHub; enterprise GitLab users blocked from core workflows | 23 comments, 75 👍 — top-voted open feature request |
| [#2603](https://github.com/anthropics/claude-code/issues/2603) | **1-hour cache support** — currently locked to 5-minute default | Token cost optimization; long-running CI/agent workflows hit rate limits | 14 comments, 27 👍; recurring request since mid-2025 |
| [#48237](https://github.com/anthropics/claude-code/issues/48237) | **Font size adjustment for Code tab in Claude Desktop** | Accessibility and usability blocker for Windows users | 11 comments, 32 👍 |
| [#51377](https://github.com/anthropics/claude-code/issues/51377) | **v2.1.116 Bedrock regression**: `output_config.effort not permitted` | **Release blocker** — enterprise Bedrock deployments completely broken | 6 comments, 2 👍; reported within hours of release |
| [#21242](https://github.com/anthropics/claude-code/issues/21242) | **Write permission prompts loop for skill `.md` files** despite `settings.local.json` authorization | Friction in custom skill development; config system not respected | 9 comments, 12 👍 |
| [#40450](https://github.com/anthropics/claude-code/issues/40450) | **Claude Desktop Code mode crashes immediately** (exit code 1) — CLI works fine | Desktop app reliability gap; macOS-specific agent mode failure | 4 comments, 2 👍 |
| [#50681](https://github.com/anthropics/claude-code/issues/50681) | **`--remote-control` 400 error on image messages** (`cache_control` on empty text block) | Headless/automation workflow breakage; image-in-message pipelines blocked | 3 comments |
| [#38575](https://github.com/anthropics/claude-code/issues/38575) | **Agent SDK session resume docs incomplete** — hook messages can silently corrupt history | Data integrity risk for production headless deployments | 4 comments; detailed technical analysis |
| [#51379](https://github.com/anthropics/claude-code/issues/51379) | **`/btw` overlay blocks permission prompt visibility** | UI layering bug blocking user action in TUI | 2 comments; fresh in v2.1.116 |

---

## Key PR Progress

| # | PR | Description | Status |
|---|-----|-------------|--------|
| [#41447](https://github.com/anthropics/claude-code/pull/41447) | **feat: open source claude code ✨** | Community-driven attempt to open-source; closes multiple long-standing requests (#59, #456, #2846, #22002, #41434) | Open — symbolic/vanity PR, unlikely to merge |
| [#50643](https://github.com/anthropics/claude-code/pull/50643) | **Ethos Aegis project configuration templates** | Third-party CI/CD, security workflow, and branding templates | Open — appears to be misdirected/malicious (wrong repo) |
| [#50638](https://github.com/anthropics/claude-code/pull/50638) | **Claude/fix readme images eu sfj** | Unclear intent; minimal description | Open — likely spam or misdirected |
| [#1](https://github.com/anthropics/claude-code/pull/1) | **Create SECURITY.md** | Baseline security policy | Closed — historical, from Feb 2025 |

> **Note**: Only 4 PRs updated in the last 24h. The repository shows minimal external contribution activity; the "open source Claude Code" PR (#41447) reflects sustained community pressure but no official movement.

---

## Feature Request Trends

1. **Platform expansion**: GitLab integration (#12346) dominates platform requests; mobile push notification reliability (#50949, #48852) signals growing mobile/remote use cases
2. **Caching & cost control**: Configurable cache TTL (#2603) is a perennial ask; users want 1-hour options for agent/CI workloads
3. **Desktop polish**: Font sizing (#48237), TUI fullscreen keybindings (#50503), word-wrap (#51378) — terminal UX refinement
4. **Documentation completeness**: `coygeek` alone filed 6+ doc issues covering permissions syntax, context window circuit breakers, model fallback behavior, worktree mid-session behavior, sub-agent result preservation, and read tool deduplication
5. **Edit tool robustness**: Better failure diagnostics (#51365) and linter race condition handling (#51361)

---

## Developer Pain Points

| Category | Summary | Top Issues |
|----------|---------|-----------|
| **Release regressions** | v2.1.116 broke Bedrock entirely; pattern of API schema mismatches on new releases | #51377 |
| **Permission system friction** | Repeated prompts despite config authorization; skill `.md` editing blocked | #21242, #34277 |
| **Documentation gaps** | Critical behaviors (hooks, caching, fallbacks, worktrees) undocumented or misleading; production headless users flying blind | #38575, #40123, #34280, #34278, #34281, #51376 |
| **Desktop/IDE reliability** | Claude Desktop Code mode crashes vs. CLI working; VS Code extension loses session history | #40450, #51362 |
| **Windows parity** | Font sizing, TUI rendering duplication, permission loops — Windows consistently behind macOS/Linux | #48237, #49985, #21242 |
| **Remote/headless edge cases** | `--remote-control` image handling, mobile push delivery, scheduled task notification context | #50681, #50949, #49756 |

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-04-21

## 1. Today's Highlights

The Codex team shipped **rust-v0.122.0** with improved standalone installs and TUI enhancements for side conversations, while the repo saw intense community activity around **rate limiting and token consumption concerns** — including a 551-comment megathread on runaway token usage. Meanwhile, a major analytics instrumentation push continues across 10+ stacked PRs, and new AWS/Bedrock provider support is nearing merge.

---

## 2. Releases

| Version | Highlights |
|---------|-----------|
| **[rust-v0.122.0](https://github.com/openai/codex/releases/tag/rust-v0.122.0)** | Standalone installs are now more self-contained; `codex app` correctly opens or installs Desktop on Windows and Intel Macs ([#17022](https://github.com/openai/codex/pull/17022), [#18500](https://github.com/openai/codex/pull/18500)). TUI gains `/side` conversation support for quick side questions, plus queued input now handles slash commands and `!` shell prompts. |
| **[rust-v0.122.0-alpha.13](https://github.com/openai/codex/releases/tag/rust-v0.122.0-alpha.13)** | Pre-release; no detailed notes provided. |

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|--------------|-------------------|
| **[#14593](https://github.com/openai/codex/issues/14593)** | **Burning tokens very fast** — Business tier user reports rapid token depletion | The **551-comment megathread** with 230 👍 makes this the most-engaged issue in the tracker; users across tiers report similar unexplained consumption spikes, eroding trust in billing transparency | Sustained pressure for investigation and refunds; comparison threads to other versions' efficiency |
| **[#17615](https://github.com/openai/codex/issues/17615)** | **Azure deployments throwing safety refusals** — "I cannot assist with that request" on benign prompts | Closed but represents a **recurring Azure+content-moderation misconfiguration** pattern affecting enterprise users | 28 comments, 18 👍; users sharing workaround configs |
| **[#17432](https://github.com/openai/codex/issues/17432)** | **Windows npm install broken** — missing `@openai/codex-win32-x64` optional dependency | **Blocking regression** for Windows CLI users on 0.120.0; install succeeds but execution fails immediately | Frustration at missing platform artifacts; manual workarounds circulating |
| **[#15105](https://github.com/openai/codex/issues/15105)** | **All CLI API calls fail with "high demand" error** — remote compaction correlated with total outage | Links infrastructure scaling issues to **complete CLI unavailability** for Pro users over 2+ hours | 10 comments; users questioning reliability commitments |
| **[#18762](https://github.com/openai/codex/issues/18762)** | **"High demand" errors on 0.122.0 / gpt-5.4** — fresh report of capacity-related failures | Shows **persistence of capacity issues** into latest release; Plus tier affected, not just free users | 9 comments; concern that latest version didn't resolve |
| **[#12773](https://github.com/openai/codex/issues/12773)** | **Multi-Window Support for macOS** | Long-standing **#20 most-👍 enhancement** (20 👍) for professional workflows needing parallel project contexts | 12 comments; users comparing to Cursor/windsurf multi-window |
| **[#15057](https://github.com/openai/codex/issues/15057)** | **Linux sandbox fails on Ubuntu with AppArmor** — `bwrap` EPERM on RTM_NEWADDR | **Security/UX conflict**: default Ubuntu hardening breaks Codex's sandbox; affects npm-installed CLI | 8 comments; AppArmor profile workarounds shared |
| **[#18463](https://github.com/openai/codex/issues/18463)** | **Unusual CPU usage (120%+ per process)** — Codex Render processes consuming excessive resources | **Performance regression** persisting across app versions; affects battery life and system responsiveness | 7 comments; detailed version-bisecting by reporter |
| **[#18755](https://github.com/openai/codex/issues/18755)** | **macOS packaging error: SkyComputerUseClient requires macOS 15.0, crashes on 14.x** | **Backward compatibility break** in latest build; excludes users on older but supported macOS versions | 3 comments, 2 👍; surprise at aggressive deployment target |
| **[#18709](https://github.com/openai/codex/issues/18709)** | **IDE extension requires Codex App to be open to load chats** | **Cross-platform integration bug** breaking VS Code extension workflow for Business tier | 6 comments; confusion about architecture dependency |

---

## 4. Key PR Progress

| # | PR | Description | Significance |
|---|-----|-------------|------------|
| **[#18745](https://github.com/openai/codex/pull/18745)** | **Sticky thread environment selections** | Adds `thread/start.environments` for persistent per-thread environment configs that carry through app-server into `SessionConfiguration` | Enables reproducible, project-specific tool/runtime environments without per-turn reconfiguration |
| **[#18744](https://github.com/openai/codex/pull/18744)** | **Built-in Amazon Bedrock model provider** | First-class `amazon-bedrock` provider with Codex-owned defaults for `name`, `base_url`, and `wire_format` | Removes friction for AWS enterprise deployments; no more manual `config.toml` provider definitions |
| **[#17820](https://github.com/openai/codex/pull/17820)** | **AWS SigV4 auth for OpenAI-compatible providers** | SigV4 signing path for Responses API transport to AWS-hosted endpoints (AOA/Mantle) | **Prerequisite for AWS launch path**; enables secure provider routing without custom proxies |
| **[#18748](https://github.com/openai/codex/pull/18748)** / **[#18747](https://github.com/openai/codex/pull/18747)** | **Terminal tool review events + schema** (stacked) | Analytics emission for tool review interactions in terminal | Part of comprehensive telemetry expansion for understanding user trust/override patterns |
| **[#17090](https://github.com/openai/codex/pull/17090)** / **[#17089](https://github.com/openai/codex/pull/17089)** / **[#17088](https://github.com/openai/codex/pull/17088)** | **Tool item lifecycle events + server request/response ingestion** (stacked) | Full analytics pipeline for tool execution telemetry | Enables data-driven improvements to tool selection and execution policies |
| **[#18698](https://github.com/openai/codex/pull/18698)** / **[#18424](https://github.com/openai/codex/pull/18424)** / **[#18423](https://github.com/openai/codex/pull/18423)** / **[#18418](https://github.com/openai/codex/pull/18418)** | **Clippy await-holding lints: enable + document + refactor** (stacked) | Systematic elimination or documentation of lock-holding-across-await patterns | **Code quality hardening** in async Rust core; prevents deadlock classes, improves maintainability |
| **[#18446](https://github.com/openai/codex/pull/18446)** | **Reserve missing preserved paths in Linux/Mac sandbox** | Closes sandbox escape where `.git`/`.agents` absence allowed preserved path creation inside sandbox | **Security fix** for writable workspace initialization edge case |
| **[#18030](https://github.com/openai/codex/pull/18030)** / **[#18029](https://github.com/openai/codex/pull/18029)** / **[#18028](https://github.com/openai/codex/pull/18028)** | **Responses API call analytics** (stacked) | Schema and emission for API call telemetry | Foundation for cost/performance optimization insights |
| **[#17696](https://github.com/openai/codex/pull/17696)** / **[#17695](https://github.com/openai/codex/pull/17695)** / **[#17693](https://github.com/openai/codex/pull/17693)** | **Guardian review analytics: TTFT, truncation, emission** (stacked) | Time-to-first-token and truncation metrics for safety/guardian review path | Critical for understanding latency impact of safety systems |
| **[#15977](https://github.com/openai/codex/pull/15977)** | **Fix exec-policy test: avoid known-safe command** | Corrects test that could pass for wrong reason due to `echo` being in `is_known_safe_command()` | Test hygiene; prevents false confidence in security boundary |

---

## 5. Feature Request Trends

| Direction | Evidence | Momentum |
|-----------|----------|----------|
| **Multi-window / multi-instance workflows** | [#12773](https://github.com/openai/codex/issues/12773) (macOS multi-window, 20 👍), implicit in side-conversation TUI work | Strong — professional users need parallel project contexts; competitors already deliver |
| **Session export / interoperability** | [#18469](https://github.com/openai/codex/issues/18469) (versioned session action export) | Emerging — demand for stable APIs for external tooling, CI integration, audit trails |
| **Enhanced TUI UX (resize, onboarding, scrollback)** | [#5259](https://github.com/openai/codex/issues/5259) (rerender on resize, 28 👍), [#18505](https://github.com/openai/codex/issues/18505) (git trust warnings) | Active — terminal-native experience being polished for production use |
| **Cross-platform parity (Windows especially)** | Multi-window request, [#17432](https://github.com/openai/codex/issues/17432) (install), [#17325](https://github.com/openai/codex/issues/17325) (PowerShell), [#18471](https://github.com/openai/codex/issues/18471) (reconnecting) | **Critical gap** — Windows users disproportionately report blockers vs. macOS/Linux |
| **AWS/enterprise provider ecosystem** | [#18744](https://github.com/openai/codex/pull/18744), [#17820](https://github.com/openai/codex/pull/17820) | **Shipping now** — clear enterprise go-to-market priority |

---

## 6. Developer Pain Points

| Pain Point | Frequency | Impact | Tracker Concentration |
|------------|-----------|--------|----------------------|
| **Rate limiting & token consumption opacity** | 🔥🔥🔥🔥🔥 | **Highest** — billing surprise, workflow interruption, trust erosion | [#14593](https://github.com/openai/codex/issues/14593), [#18692](https://github.com/openai/codex/issues/18692), [#18721](https://github.com/openai/codex/issues/18721), [#18345](https://github.com/openai/codex/issues/18345), [#6761](https://github.com/openai/codex/issues/6761) |
| **"High demand" / capacity errors** | 🔥🔥🔥🔥 | **High** — complete inability to use product, affects paying tiers | [#15105](https://github.com/openai/codex/issues/15105), [#18762](https://github.com/openai/codex/issues/18762), [#6761](https://github.com/openai/codex/issues/6761) |
| **Windows-specific breakages** | 🔥🔥🔥🔥 | **High** — install failures, shell integration, sandbox, reconnect logic | [#17432](https://github.com/openai/codex/issues/17432), [#17325](https://github.com/openai/codex/issues/17325), [#18471](https://github.com/openai/codex/issues/18471), [#18365](https://github.com/openai/codex/issues/18365) |
| **Sandbox / security policy friction** | 🔥🔥🔥 | **Medium-High** — AppArmor conflicts, unnecessary approvals, keychain access | [#15057](https://github.com/openai/codex/issues/15057), [#10695](https://github.com/openai/codex/issues/10695), [#18365](https://github.com/openai/codex/issues/18365), [#18113](https://github.com/openai/codex/issues/18113) |
| **App-Extension integration fragility** | 🔥🔥🔥 | **Medium** — chat loading, session sync, config divergence between CLI/Desktop/IDE | [#18709](https://github.com/openai/codex/issues/18709), [#18712](https://github.com/openai/codex/issues/18712), [#12685](https://github.com/openai/codex/issues/12685) |
| **CPU/performance regressions** | 🔥🔥 | **Medium** — resource consumption, battery drain | [#18463](https://github.com/openai/codex/issues/18463) |
| **macOS version compatibility** | 🔥🔥 | **Medium** — aggressive minimum version requirements | [#18755](https://github.com/openai/codex/issues/18755) |

---

*Digest compiled from 50 issues and 50 PRs updated 2026-04-20 to 2026-04-21.*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-04-21

## Today's Highlights
The Gemini CLI team is actively shipping memory system improvements and shell execution hardening, with three PRs from SandyTao520 landing today to replace the slow MemoryManagerAgent with prompt-driven editing and enable GEMINI.md patch proposals. Meanwhile, community-reported data loss and context explosion issues are escalating, signaling urgent reliability concerns that maintainers have yet to triage.

---

## Releases
*No releases in the last 24 hours.*

---

## Hot Issues

| # | Issue | Why It Matters | Community Signal |
|---|-------|--------------|----------------|
| [#25672](https://github.com/google-gemini/gemini-cli/issues/25672) | Excessive project-wide scanning makes simple code patches fail | **Performance regression**: Even trivial edits trigger full workspace + stdlib + cgo scans, destroying iteration speed for Go developers. | 5 comments, fresh report (Apr 19), no maintainer response yet |
| [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) | Assess impact of AST-aware file reads, search, and mapping | **Strategic EPIC**: Could reduce token waste and misaligned reads by using precise method bounds instead of line-based heuristics. | 5 comments, maintainer-only, linked to tooling investigation |
| [#20885](https://github.com/google-gemini/gemini-cli/issues/20885) | UI recursion/infinite scrolling when expanding large diffs | **Stability bug**: Ctrl+O shortcut crashes terminal UI on macOS/Zed with ~300+ line outputs; blocks code review workflows. | 4 comments, 2+ months old, reproduction confirmed |
| [#25679](https://github.com/google-gemini/gemini-cli/issues/25679) | DATA LOST again and again | **Critical reliability**: Model stripped XML documentation tags despite explicit GEMINI.md mandate for zero data loss. | 3 comments, emotionally charged ("again and again"), urgent triage needed |
| [#25656](https://github.com/google-gemini/gemini-cli/issues/25656) | Markdown rendering issue with LaTeX-style syntax | **Output quality**: Math expressions ($, \, \to) render broken, affecting technical documentation workflows. | 3 comments, "help wanted" label applied |
| [#24916](https://github.com/google-gemini/gemini-cli/issues/24916) | Permission prompts not persisting for same file | **UX friction**: "Allow for all future sessions" intermittently fails, breaking flow state in iterative editing. | 3 comments, security area, no resolution path visible |
| [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) | Shell command execution hangs with "Waiting input" | **Execution reliability**: Simple commands falsely report awaiting input after completion; requires manual intervention. | 2 comments, 3 upvotes, affects core loop |
| [#25688](https://github.com/google-gemini/gemini-cli/issues/25688) | Insanely large context after restart to free RAM | **Resource management**: Restarting to clear 24GB RAM usage ballooned context from ~40% to >200%, with /compress failing due to token exhaustion. | 1 comment, severe operational impact |
| [#23571](https://github.com/google-gemini/gemini-cli/issues/23571) | Model creates tmp scripts in random spots | **Workspace hygiene**: Restricted shell execution causes scattered temporary scripts, complicating git commits. | 2 comments, maintainer-only, workflow disruption |
| [#22819](https://github.com/google-gemini/gemini-cli/issues/22819) | Implement memory routing: global vs. project | **Architecture**: Defines clear separation between user preferences (~/.gemini/) and codebase-specific rules (.gemini/). | 1 comment, 2 upvotes, foundation for memory PRs landing today |

---

## Key PR Progress

| # | PR | Feature/Fix | Status |
|---|-----|-------------|--------|
| [#25498](https://github.com/google-gemini/gemini-cli/pull/25498) | Streamlined `gemini gemma` local model setup | Adds `gemini gemma` command + `gemini gemma logs` for LiteRT server management; enables on-device Gemma workflows | **Closed** (merged) |
| [#25716](https://github.com/google-gemini/gemini-cli/pull/25716) | Replace MemoryManagerAgent with prompt-driven memory editing | **Major refactor**: Eliminates slow subagent; main agent edits markdown directly across 4 tiers (global, project, session, turn) | Open |
| [#25718](https://github.com/google-gemini/gemini-cli/pull/25718) | Skill extractor proposes GEMINI.md patches | Extends `confucius` agent to suggest memory file patches via inbox flow; keeps human review gate | Open |
| [#25720](https://github.com/google-gemini/gemini-cli/pull/25720) | Enhanced shell command validation + core tools allowlist | Recursive sub-command/subshell checking + `tools.core` precision allowlist for policy engine | Open |
| [#25537](https://github.com/google-gemini/gemini-cli/pull/25537) | Newline-based shell command wrapping to fix heredocs | Replaces predictable temp files with `fs.mkdtempSync()`, sets `PAGER=cat`, resolves heredoc breakage | Open |
| [#25712](https://github.com/google-gemini/gemini-cli/pull/25712) | Shell tool rc file support + pager fixes | Brings back `.shellrc` support; explicitly disables interactive pagers to prevent hangs | Open |
| [#25409](https://github.com/google-gemini/gemini-cli/pull/25409) | Wire up ContextManager and AgentChatHistory | Foundational memory architecture change; fixes #25408 | Open |
| [#25344](https://github.com/google-gemini/gemini-cli/pull/25344) | Bounded structural truncation for telemetry | Prevents OOM + Cloud Monitoring "Internal error" from high-cardinality label explosions | Open |
| [#25713](https://github.com/google-gemini/gemini-cli/pull/25713) | Guard against negative column widths in TableRenderer | Fixes `RangeError: Invalid count value: -1` on narrow terminals | Open |
| [#25714](https://github.com/google-gemini/gemini-cli/pull/25714) | Handle ENAMETOOLONG/ENOTDIR in robustRealpath | Defends against path detection crashes when users paste multi-line code into prompt | Open |

---

## Feature Request Trends

1. **AST-Aware Code Intelligence** — Multiple issues (#22745, #22746) explore replacing line-based reads with syntax-tree precision to cut tokens and misalignment. Community expects this to be a major differentiator vs. raw-text competitors.

2. **Memory System Maturity** — Today's PRs (#25716, #25718, #22819) reflect a coordinated push toward structured, tiered memory with clear global/project separation. The shift from subagent-based to prompt-driven editing suggests performance was unacceptable.

3. **Shell Execution Hardening** — Concurrent work on validation (#25720), rc files (#25712), heredoc fixes (#25537), and hang detection (#25166) indicates shell tool reliability is a recognized priority.

4. **Context/Resource Management** — Users need better visibility and control over context growth (#25688), with `/compress` failing at scale.

---

## Developer Pain Points

| Pain Point | Evidence | Severity |
|-----------|----------|----------|
| **Data loss despite explicit instructions** | #25679 (XML docs stripped), #22672 (destructive git operations) | 🔴 Critical |
| **Uncontrollable context explosion** | #25688 (40% → >200%), #25672 (full-project scans for trivial edits) | 🔴 Critical |
| **Shell execution hangs/false input waits** | #25166, #24916 (permission amnesia), #25216 (Windows path crashes) | 🟡 High |
| **UI instability with large outputs** | #20885 (infinite recursion), #25218 (broken table streaming), #24470 (scroll jumping) | 🟡 High |
| **Workspace pollution** | #23571 (random tmp scripts), #25587/#25138 (plan directory nesting) | 🟢 Moderate |
| **Theme/config validation gaps** | #25715 (missing `response` key), #25656 (LaTeX rendering) | 🟢 Moderate |

**Emerging pattern**: The CLI's aggressive "helpfulness"—full scans, automatic edits, persistent memory—is backfiring when users need surgical precision and guaranteed preservation. The tension between agent autonomy and user control remains unresolved.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-04-21

---

## 1. Today's Highlights

Two patch releases landed in the last 24 hours (v1.0.33 and v1.0.34) focused on quality-of-life improvements: slash command aliases (`/bug`, `/continue`, `/export`, etc.), smarter command suggestions for typos, and clearer rate limit messaging. Meanwhile, the issue tracker remains active with 43 updated issues, dominated by enterprise policy flakiness, model capability discrepancies, and persistent Windows platform instability.

---

## 2. Releases

| Version | Date | Key Changes |
|---------|------|-------------|
| **v1.0.34** / v1.0.34-0 | 2026-04-20 | Rate limit error message clarified: now displays "session rate limit" instead of "global rate limit" |
| **v1.0.33** / v1.0.33-0 | 2026-04-20 | Remote session resume auto-inherits `--remote` flag; added `/bug`, `/continue`, `/release-notes`, `/export`, `/reset`, `/upgrade` aliases; slash command picker suggests similar commands for unrecognized/misspelled input; `ctrl+t` reasoning toggle improved |

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|--------------|-------------------|
| [#1595](https://github.com/github/copilot-cli/issues/1595) | **Sporadic enterprise policy blocking prevents model listing** — Users with valid Enterprise subscriptions and remaining premium requests intermittently get "access denied by Copilot policy" on `/models` | Critical for enterprise adoption; policy engine appears non-deterministic | 🔥 27 comments, 10 👍 — active troubleshooting, no resolution |
| [#2725](https://github.com/github/copilot-cli/issues/2725) | **GPT-5.4 model picker hides "Extra High" effort level** — UI shows only Low/Medium/High despite `xhigh` still functioning via direct command | UI/UX inconsistency masking actual capability; breaks user trust in model selection | 🔥 25 comments, 19 👍 — high engagement, users confirming workaround |
| [#1164](https://github.com/github/copilot-cli/issues/1164) | **Windows 11 silent exit on newer versions** — `copilot` commands produce no output, immediate exit; only v0.0.368 works | Platform blocker for Windows enterprise users; zero diagnostic output complicates support | 12 comments, 3 👍 — persistent since January, unresolved |
| [#2739](https://github.com/github/copilot-cli/issues/2739) | **`xhigh` reasoning removed for GPT-5.4 and GPT-5.3-codex** — User reports capability regression in v1.0.27 | Directly impacts power users relying on maximum reasoning depth; perceived as capability downgrade | 4 comments, 6 👍 — strong emotional response ("unacceptable") |
| [#2839](https://github.com/github/copilot-cli/issues/2839) | **Rate limit display completely inconsistent across sessions** — Same user sees 0%, 33%, and ~40% simultaneously vs. GitHub settings showing 60.6% | Erodes trust in billing/usage transparency; affects cost management decisions | 3 comments, 1 👍 — fresh report, likely systemic |
| [#1250](https://github.com/github/copilot-cli/issues/1250) | **Windows silent failure due to `getCACertificates('system')` error** — Root cause identified: system certificate enumeration crash | Technical root cause found; fixable but unaddressed since early February | 4 comments, 4 👍 — diagnostic clarity without resolution |
| [#2306](https://github.com/github/copilot-cli/issues/2306) | **Intermittent "not authorized" for enterprise features** — Recurring 2-3x weekly, self-resolving; `/context` reveals policy check failures | Flaky auth/policy system undermines reliability for enterprise workflows | 5 comments, 3 👍 — pattern suggests caching or propagation issue |
| [#2692](https://github.com/github/copilot-cli/issues/2692) | **Web Search MCP tool fails with Streamable HTTP error** — `github-mcp-server` endpoint errors during agent execution | MCP ecosystem stability concern; affects agent autonomy | 5 comments, 2 👍 — infrastructure/integration issue |
| [#2802](https://github.com/github/copilot-cli/issues/2802) | **[CLOSED] v1.0.31 infinite React/Ink render loop — "Maximum update depth exceeded"** | Terminal UI framework instability; rapid resolution via downgrade | 1 comment — closed, but indicates regression risk in Ink-based renderer |
| [#1687](https://github.com/github/copilot-cli/issues/1687) | **Add access from phone for active sessions** — Request for mobile session monitoring/management | Addresses real remote workflow need; high community demand | 3 comments, **34 👍** — highest-voted feature request in set |

---

## 4. Key PR Progress

**No Pull Requests updated in the last 24 hours.**

The project appears to be releasing via direct commits or internal branches; community contribution velocity is currently low.

---

## 5. Feature Request Trends

| Trend | Evidence | Momentum |
|-------|----------|----------|
| **IDE ecosystem expansion** | [#1641](https://github.com/github/copilot-cli/issues/1641) (IntelliJ `/ide` support), [#1506](https://github.com/github/copilot-cli/issues/1506) (custom agents folder settings parity with VS Code) | Medium — enterprise polyglot IDE environments driving need |
| **Mobile/remote session access** | [#1687](https://github.com/github/copilot-cli/issues/1687) (phone access), [#2751](https://github.com/github/copilot-cli/issues/2751) (organization repo `/remote` resolution) | High — distributed work patterns, 34 👍 on mobile request |
| **Azure DevOps enterprise expansion** | [#1150](https://github.com/github/copilot-cli/issues/1150) (`/delegate` for ADO repos) | Medium — Microsoft ecosystem synergy underutilized |
| **Theming & customization** | [#1504](https://github.com/github/copilot-cli/issues/1504) (custom themes, shareable JSON) | Medium — accessibility and personal workflow preferences |
| **Non-interactive/scripting improvements** | [#2863](https://github.com/github/copilot-cli/issues/2863) (prompt file path parameter), [#2650](https://github.com/github/copilot-cli/issues/2650) (notification when blocking for input) | Growing — CI/CD and automation use cases |

---

## 6. Developer Pain Points

| Pain Point | Frequency | Impact | Representative Issues |
|------------|-----------|--------|----------------------|
| **Windows platform instability** | 🔴 Chronic | Severe — silent failures, no diagnostics | [#1164](https://github.com/github/copilot-cli/issues/1164), [#1250](https://github.com/github/copilot-cli/issues/1250), [#2802](https://github.com/github/copilot-cli/issues/2802) |
| **Enterprise policy/auth flakiness** | 🔴 Chronic | High — blocks core functionality unpredictably | [#1595](https://github.com/github/copilot-cli/issues/1595), [#2306](https://github.com/github/copilot-cli/issues/2306) |
| **Model capability/effort level inconsistencies** | 🟡 Frequent | High — UI lies about available features | [#2725](https://github.com/github/copilot-cli/issues/2725), [#2739](https://github.com/github/copilot-cli/issues/2739), [#2823](https://github.com/github/copilot-cli/issues/2823) |
| **Rate limit/usage transparency** | 🟡 Frequent | Medium — billing trust, cost control | [#2839](https://github.com/github/copilot-cli/issues/2839), [#2797](https://github.com/github/copilot-cli/issues/2797) |
| **Terminal rendering performance at scale** | 🟡 Frequent | Medium — session length degrades UX | [#2625](https://github.com/github/copilot-cli/issues/2625), [#2858](https://github.com/github/copilot-cli/issues/2858) |
| **MCP/tool integration reliability** | 🟢 Emerging | Medium — agent autonomy failures | [#2692](https://github.com/github/copilot-cli/issues/2692), [#2860](https://github.com/github/copilot-cli/issues/2860), [#2816](https://github.com/github/copilot-cli/issues/2816) |

---

*Digest compiled from github.com/github/copilot-cli activity on 2026-04-20 to 2026-04-21.*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-04-21

## Today's Highlights

Version 1.37.0 shipped with managed model auto-refresh and improved one-shot print mode reliability. The community is actively addressing critical loop behavior with two significant architectural proposals: RalphFlow for convergence detection and a `/loop` command for intentional repetition. Meanwhile, ACP protocol gaps and enterprise deployment blockers (admin-less install, PowerShell 7) are drawing sustained attention.

---

## Releases

### [v1.37.0](https://github.com/MoonshotAI/kimi-cli/releases/tag/1.37.0)
- **Auto-refresh managed models** at startup with human-readable `display_name` from API ([PR #1948](https://github.com/MoonshotAI/kimi-cli/pull/1948))
- **Print mode reliability**: waits for background tasks before exiting, with graceful termination logging
- **TOML config docs**: clarified quoted keys for dotted model names ([PR #1870](https://github.com/MoonshotAI/kimi-cli/pull/1870))

---

## Hot Issues

| # | Issue | Why It Matters | Community Signal |
|---|-------|--------------|----------------|
| [#1924](https://github.com/MoonshotAI/kimi-cli/issues/1924) | API rejects all temperature values with "only 0.6 is allowed" | **API-level regression** breaking all SDKs and integrations (OpenAI SDK, curl, Hermes); not CLI-specific but blocks entire ecosystem | 4 comments, zero thumbs—users are confused by the scope mismatch |
| [#1927](https://github.com/MoonshotAI/kimi-cli/issues/1927) | Subagent infinite loop: reads same file hundreds of times | **Core agent reliability**; directly undermines trust in autonomous execution | 4 comments, reproducible on 1.36.0 |
| [#1959](https://github.com/MoonshotAI/kimi-cli/issues/1959) | IPv6 CIDR in `NO_PROXY` crashes startup with `httpx` parsing error | **Enterprise/network edge case**; blocks corporate environments with proxy auto-config | Fresh, no comments yet—likely affects more users silently |
| [#1956](https://github.com/MoonshotAI/kimi-cli/issues/1956) | ACP session history not replayed to IDE clients (Zed, JetBrains) | **Protocol completeness**; ACP integration is useless for real workflows without context continuity | Filed by same user who submitted fix—fast self-service |
| [#1952](https://github.com/MoonshotAI/kimi-cli/issues/1952) | CRLF corruption during `StrReplaceFile` edits | **Cross-platform correctness**; Windows files get silently mangled | Has matching PR #1953—likely to resolve quickly |
| [#1950](https://github.com/MoonshotAI/kimi-cli/issues/1950) | Repeated file reads in task execution | Related to #1927; suggests **broader loop control problem** beyond subagents | K2.6-code-preview specific variant |
| [#1949](https://github.com/MoonshotAI/kimi-cli/issues/1949) | `typing_extensions` import shadowed by local module | **Python import hygiene**; crashes Web UI in contaminated project roots | Has matching PR #1951 |
| [#1947](https://github.com/MoonshotAI/kimi-cli/issues/1947) | OAI-compatible copilot fails with generic error | **Integration fragility**; vague error messages waste debugging time | VS Code extension context—version mismatch suspected |
| [#1946](https://github.com/MoonshotAI/kimi-cli/issues/1946) | `[Pasted X chars]` sent literally instead of content | **Input handling bug**; breaks long-form paste workflows | UX regression, easily reproducible |
| [#1945](https://github.com/MoonshotAI/kimi-cli/issues/1945) | Web UI re-sends historical attachments automatically | **Data/cost leak**; unintended token consumption and context pollution | Web-specific, no CLI equivalent mentioned |

---

## Key PR Progress

| # | PR | What It Does | Status |
|---|-----|-------------|--------|
| [#1960](https://github.com/MoonshotAI/kimi-cli/pull/1960) | **RalphFlow architecture**: ephemeral context + convergence detection | Proposes **formal loop prevention** via isolated iteration contexts and termination heuristics; directly addresses #1927/#1950 class of bugs | Open, needs review |
| [#1834](https://github.com/MoonshotAI/kimi-cli/pull/1834) | **`/loop` command**: scheduled prompt repetition | Intentional repetition with configurable intervals (parity with Claude Code); distinct from accidental loops | Open, 9 days old |
| [#1958](https://github.com/MoonshotAI/kimi-cli/pull/1958) | **Sound notifications** for turn end and approval requests | Accessibility/attention management; needs asset files from maintainers | Open, blocked on assets |
| [#1957](https://github.com/MoonshotAI/kimi-cli/pull/1957) | **ACP `list_sessions` fix**: return all sessions when `cwd` omitted | Fixes #1956; restores IDE session history | Open, paired with issue |
| [#1953](https://github.com/MoonshotAI/kimi-cli/pull/1953) | **Preserve CRLF** during file edits | Matches #1952; cross-platform line ending integrity | Open, targeted fix |
| [#1951](https://github.com/MoonshotAI/kimi-cli/pull/1951) | **Guard web imports** against CWD module shadowing | Resolves #1949; isolates web entrypoint imports from project contamination | Open, clean 34-line fix |
| [#1948](https://github.com/MoonshotAI/kimi-cli/pull/1948) | **Auto-refresh managed models** + `display_name` surfacing | Shipped in 1.37.0; dynamic model discovery for OAuth users | **Merged** |
| [#1943](https://github.com/MoonshotAI/kimi-cli/pull/1943) | **Shift+Enter newline** in interactive prompt | Ergonomic improvement complementing Ctrl+J; xterm + kitty protocol support | **Merged** |
| [#1942](https://github.com/MoonshotAI/kimi-cli/pull/1942) | **MCP config propagation** to subagents + immediate resume | Unblocks MCP tool usage in explore/coder/plan subagents and session restoration | Open, fixes two related gaps |
| [#1935](https://github.com/MoonshotAI/kimi-cli/pull/1935) | **`updatedInput` for PreToolUse hooks**: transparent command rewriting | Enables middleware pattern for hook-based input transformation; aligns with Beta docs | Open, small surface area |

---

## Feature Request Trends

1. **Enterprise/locked-down deployment**: Admin-less installation (#1873) and PowerShell 7 support (#1944) show Windows enterprise environments are underserved
2. **Loop control as first-class concern**: Both accidental loop fixes (#1927, #1950) and intentional loop primitives (#1834, #1960) indicate the agent iteration model needs formalization
3. **ACP/IDE protocol maturity**: Session history (#1956), MCP propagation (#1942), and hook extensibility (#1935) suggest the plugin ecosystem is outgrowing core capabilities
4. **Non-interactive/CI robustness**: Better error messages for missing models (#1954) and one-shot mode improvements (1.37.0) show automation use cases expanding

---

## Developer Pain Points

| Pain Point | Evidence | Severity |
|-----------|----------|----------|
| **Agent loops & wasted context** | #1927, #1950, #1960, #1834 | 🔴 Critical — erodes trust in autonomous mode |
| **Proxy/network environment fragility** | #1959 (IPv6), #1940 (auth failures in VS Code/Cursor) | 🟡 High — blocks corporate adoption |
| **Cross-platform file handling** | #1952 (CRLF), #1949 (import shadowing) | 🟡 High — subtle, hard-to-debug failures |
| **Opaque integration errors** | #1947 (OAI copilot), #1946 (paste placeholder) | 🟡 High — poor error messages waste time |
| **Web UI state management** | #1945 (re-sending attachments) | 🟢 Medium — cost and UX issue |
| **Missing AGENTS.md enforcement** | #1596 (closed without clear resolution) | 🟡 High — project-level constraints ignored |

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-04-21

## Today's Highlights

OpenCode shipped **v1.14.19** with critical fixes for circular session schema dependencies and concurrent file edit preservation, while the community grappled with widespread **theme detection regressions on macOS** affecting multiple terminal emulators. A flurry of provider integration PRs (Databricks, Kiro, Open WebUI) signals expanding enterprise connectivity, though Bedrock configuration loading remains broken in recent 1.4.x builds.

---

## Releases

### [v1.14.19](https://github.com/anomalyco/opencode/releases/tag/v1.14.19)
- **Fixed**: Compiled binaries failing on startup due to circular session schema dependency
- **Renamed**: Compaction setting to `preserve_recent_tokens` for budget controlling verbatim recent turns
- **Improved**: Preserved concurrent edits to the same file instead of letting parallel edits overwrite each other

---

## Hot Issues

| Issue | Why It Matters | Community Reaction |
|-------|--------------|-------------------|
| [#23110](https://github.com/anomalyco/opencode/issues/23110) **Bedrock provider regression in 1.4.7/1.4.8** | Complete provider loading failure from project config—breaks AWS deployments for enterprises that pinned 1.4.6 | 14 comments, 4 👍; confirmed downgrade workaround, no upstream fix yet |
| [#23196](https://github.com/anomalyco/opencode/issues/23196) **macOS theme always renders light variant (OSC 11 broken)** | Broader than #20926; affects all terminals on macOS, making dark mode unusable | 11 comments, 4 👍; linked to multiple related issues, active triage |
| [#23521](https://github.com/anomalyco/opencode/issues/23521) **Default dark mode system theme failed** | Fresh report confirming the macOS theme regression pattern with 14 upvotes—highest visibility | 5 comments, 14 👍; likely duplicate/cluster of #23196 |
| [#23543](https://github.com/anomalyco/opencode/issues/23543) **Ghostty renders code text white on macOS** | Specific terminal compatibility issue in v1.14.19, breaks code readability | 3 comments, 9 👍; regression in latest release |
| [#23211](https://github.com/anomalyco/opencode/issues/23211) **1.4.7+ fails to render UI, loses all config** | Catastrophic upgrade experience—complete session/config loss | 9 comments, 1 👍; severe but lower engagement suggests possible niche trigger |
| [#21079](https://github.com/anomalyco/opencode/issues/21079) **package-lock.json ignores ~/.npmrc registry** | Breaks corporate/private registry workflows; affects reproducible builds | 8 comments, 13 👍; strong community demand for npmrc compliance |
| [#22408](https://github.com/anomalyco/opencode/issues/22408) **Kimi K2.6 integration request** | Moonshot's latest model family; 18 upvotes shows strong demand for cutting-edge model support | 10 comments, 18 👍; highest-feature-request upvote count |
| [#11831](https://github.com/anomalyco/opencode/issues/11831) **YOLO Mode — Auto-approve all permissions** | Power-user workflow optimization; 20 upvotes is highest across all issues | 4 comments, 20 👍; polarizing safety implications, sustained interest |
| [#14462](https://github.com/anomalyco/opencode/issues/14462) **Roslyn LSP as C# alternative** | Microsoft's official LSP vs. community `csharp-ls`—enterprise C# devs want first-party tooling | 12 comments, 7 👍; PR #14463 already open |
| [#23534](https://github.com/anomalyco/opencode/issues/23534) **Sub-agents not killed on cancel** | Resource leak + unexpected side effects in agent orchestration | 2 comments, 0 👍; fresh, potentially serious for agent-heavy workflows |

---

## Key PR Progress

| PR | Status | Description |
|----|--------|-------------|
| [#20602](https://github.com/anomalyco/opencode/pull/20602) | **Open** | Shell-as-config with desktop settings UI—foundational customization layer |
| [#7984](https://github.com/anomalyco/opencode/pull/7984) | **Open** | **Databricks provider**—enterprise AI gateway integration with per-model SDK routing |
| [#18767](https://github.com/anomalyco/opencode/pull/18767) | **Open** | Mobile/touch optimization for OpenCode App—expands beyond desktop |
| [#14463](https://github.com/anomalyco/opencode/pull/14463) | **Open** | **Roslyn LSP opt-in** for C#—pairs with #14462, Microsoft's official server |
| [#22826](https://github.com/anomalyco/opencode/pull/22826) | **Open** | `autotitle: "branch"` config—git branch names as session titles, dev workflow ergonomics |
| [#18306](https://github.com/anomalyco/opencode/pull/18306) | **Open** | **Open WebUI provider**—self-hosted LLM UI integration |
| [#22612](https://github.com/anomalyco/opencode/pull/22612) | **Open** | Fixes NVIDIA NIM numeric tool call IDs (#19947)—Zod coercion approach |
| [#23592](https://github.com/anomalyco/opencode/pull/23592) | **Closed** | *Alternative* numeric tool call ID fix—closed as duplicate/superseded by #22612 |
| [#23586](https://github.com/anomalyco/opencode/pull/23586) | **Open** | Restores auto-accept UI button in prompt input—reverts v1.4.0 UX regression |
| [#20491](https://github.com/anomalyco/opencode/pull/20491) | **Open** | **Kiro (AWS) provider**—expands cloud-native model access |

---

## Feature Request Trends

1. **Model Provider Expansion** — Kimi K2.6 (#22408), Databricks (#7984), Kiro (#20491), Open WebUI (#18306) reflect demand for diverse inference endpoints beyond the Big Three (OpenAI/Anthropic/Google)

2. **Permission & Automation Ergonomics** — YOLO mode (#11831, 20 👍), auto-accept UI restoration (#23586), and automatic provider fallback (#17137) show power users want less friction in trusted environments

3. **Developer Tooling Integration** — Roslyn LSP (#14462), git branch session titles (#22826), custom session IDs (#17344), and markdown preview (#14187) indicate OpenCode is being embedded deeper into existing dev workflows

4. **Mobile & Cross-Platform Polish** — Mobile touch (#18767), Windows stability (#21256, #16685), and terminal compatibility (#23543, #23196) suggest platform breadth is outpacing depth

---

## Developer Pain Points

| Category | Symptoms | Frequency |
|----------|----------|-----------|
| **macOS Terminal Theme Detection** | OSC 11/background color queries failing across Ghostty, Apple Terminal, others; light themes forced in dark environments | **Critical** — 4+ issues in 24h, spanning months (#20926, #23196, #23521, #23543) |
| **1.4.x Upgrade Instability** | Config loss (#23211), provider loading failures (#23110), UI rendering breakage | **High** — pattern of regressions in 1.4.7-1.4.11 window |
| **Enterprise Registry/Proxy Compliance** | `.npmrc` ignored (#21079), private registry auth gaps | **Moderate-High** — 13 👍, blocks corporate adoption |
| **Agent/Sub-agent Lifecycle** | Orphaned processes on cancel (#23534), permission routing broken remotely (#23593) | **Emerging** — agent features maturing, control plane lagging |
| **Windows Desktop Reliability** | Startup failures (#21256), Claude caching broken (#11083), Kimi provider errors (#16685) | **Persistent** — chronic platform-specific issues |
| **Token Budget Transparency** | Tool descriptions consuming 3-4K tokens/message (#11995), compaction settings poorly understood | **Moderate** — cost/performance sensitivity in long sessions |

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-04-21

## Today's Highlights

Pi shipped **v0.68.0** with configurable working indicators for extensions, enabling animated, static, or hidden spinner states via `ctx.ui.setWorkingIndicator()`. The community closed **25+ issues and PRs** in 24 hours, with heavy focus on Bedrock auth reliability, model support expansion (Kimi K2.6), and TUX/TMUX input handling fixes. A major validation refactor to TypeBox 1.x is in progress to resolve long-standing Cloudflare Workers compatibility issues.

---

## Releases

### [v0.68.0](https://github.com/badlogic/pi-mono/releases/tag/v0.68.0)
- **Configurable streaming working indicator for extensions** — Extensions can now customize the TUI working spinner via `ctx.ui.setWorkingIndicator()` with three modes: animated, static, or hidden. Includes documentation updates and example extensions.

---

## Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|--------------|-------------------|
| [#3112](https://github.com/badlogic/pi-mono/issues/3112) | Tool arguments not validated in Cloudflare Workers | Critical security/ reliability gap: LLM tool inputs bypass validation entirely in Workers due to `canUseR...` runtime detection failure. Blocks production CF deployments. | 13 comments, acknowledged as root cause for [#3474](https://github.com/badlogic/pi-mono/pull/3474) TypeBox migration |
| [#3271](https://github.com/badlogic/pi-mono/issues/3271) | Custom session-IDs (prefixed type-IDs) | Enterprise SDK users need deterministic IDs for session tracking across distributed systems; current auto-generation breaks external audit trails. | 9 comments, merged via [#3431](https://github.com/badlogic/pi-mono/pull/3431) fork/duplicate session PR |
| [#2980](https://github.com/badlogic/pi-mono/issues/2980) | Speed up `pi update` | CLI startup cost dominates simple package updates; identified serial npm resolution as bottleneck. Performance PRs welcome. | 8 comments, user-provided profiling data |
| [#534](https://github.com/badlogic/pi-mono/issues/534) | Config folder violates XDG spec on Linux | Long-standing papercut for Linux users; `$HOME/.pi` clutter breaks modern conventions. High 👍 count signals broad impact. | 7 comments, **11 👍** — highest voted issue in dataset |
| [#2361](https://github.com/badlogic/pi-mono/issues/2361) | Antigravity plugin causes bans | Third-party plugin safety boundary unclear; user attribution ambiguous between Pi and OpenCode. Raises policy questions for extension ecosystem. | 7 comments, anecdotal report |
| [#3463](https://github.com/badlogic/pi-mono/issues/3463) | `before_agent_start` needs structured system prompt data | Extension authors rebuilding prompts from raw strings; fragile regex parsing of `event.systemPrompt`. | 5 comments, author volunteered PR → merged as [#3473](https://github.com/badlogic/pi-mono/pull/3473) |
| [#3462](https://github.com/badlogic/pi-mono/issues/3462) | Auto-refreshing Bedrock bearer tokens | Corporate IAM tokens expire mid-session (1hr typical); static `AWS_BEARER_TOKEN_BEDROCK` unusable for long-running agents. | 5 comments, fixed same day in [#3456](https://github.com/badlogic/pi-mono/pull/3456) |
| [#3413](https://github.com/badlogic/pi-mono/issues/3413) / [#2977](https://github.com/badlogic/pi-mono/issues/2977) | Extension-customizable working spinner | Two converging requests for TUI loading state control; hardcoded braille spinner conflicts with extension branding. | 5 + 3 comments, shipped in v0.68.0 |
| [#3451](https://github.com/badlogic/pi-mono/issues/3451) | `Read` tool: accept `file:line` syntax | Daily workflow friction; developers expect editor-standard line-range addressing. Currently fails with file-not-found. | 4 comments, quick UX win |
| [#2616](https://github.com/badlogic/pi-mono/issues/2616) | SessionManager sync-only I/O blocks async persistence | **Still open** — architectural debt forcing sync `appendFileSync`/`readFileSync` throughout session layer. Blocks database-backed deployments. | 3 comments, needs core refactor |

---

## Key PR Progress

| # | PR | Feature / Fix | Status |
|---|-----|-------------|--------|
| [#3474](https://github.com/badlogic/pi-mono/pull/3474) | Migrate to TypeBox v1 with extension compat | Replaces AJV validation; fixes [#3112](https://github.com/badlogic/pi-mono/issues/3112) Cloudflare Workers gap. Maintains legacy extension schema imports. Critical path for edge runtime reliability. | **OPEN** — under review |
| [#3477](https://github.com/badlogic/pi-mono/pull/3477) / [#3470](https://github.com/badlogic/pi-mono/pull/3470) | Add Kimi K2.6 model support | Normalizes `models.dev` entries, regenerates `models.generated.ts` for `opencode-go`, `openrouter`, `vercel-ai-gateway`. Rapid response to model release. | **CLOSED** |
| [#3456](https://github.com/badlogic/pi-mono/pull/3456) | `AWS_BEARER_TOKEN_BEDROCK_CMD` auto-refresh | Executes command per-request for fresh tokens; falls back to static env var. Unblocks enterprise Bedrock deployments. | **CLOSED** |
| [#3473](https://github.com/badlogic/pi-mono/pull/3473) | Expose `BuildSystemPromptOptions` on `before-agent-start` | Structured prompt construction data for extensions; eliminates string parsing fragility. | **CLOSED** |
| [#3457](https://github.com/badlogic/pi-mono/pull/3457) | Shift+Enter newline in tmux | Fixes `\x1b\r` vs `\n` terminal escape sequence handling; removes alt+enter conflict. Unit tested. | **CLOSED** |
| [#3431](https://github.com/badlogic/pi-mono/pull/3431) | Fork position and duplicate session option | Simpler implementation of [#2962](https://github.com/badlogic/pi-mono/issues/2962); enables custom session ID workflows per [#3271](https://github.com/badlogic/pi-mono/issues/3271). | **CLOSED** |
| [#3427](https://github.com/badlogic/pi-mono/pull/3427) | OpenRouter attribution headers | Adds `ModelRegistryOptions` to thread telemetry consent into provider headers. Privacy-respecting app attribution. | **CLOSED** |
| [#3444](https://github.com/badlogic/pi-mono/pull/3444) | `optimizeImage` hook in `StreamOptions` | Pre-provider image compression/resize/re-encoding. Reduces token costs and API failures for large images. | **CLOSED** |
| [#3343](https://github.com/badlogic/pi-mono/pull/3343) | Configurable scoped models and tree filter shortcuts | Makes keybindings rebindable; fixes `buildBuiltinKeybindings()` precedence bug where non-reserved actions overwrote reserved ones. | **CLOSED** |
| [#3443](https://github.com/badlogic/pi-mono/pull/3443) | Guard empty content blocks after Bedrock sanitization | Prevents `ValidationException` when `sanitizeSurrogates()` yields empty strings from Unicode-only or compacted content. | **CLOSED** |

---

## Feature Request Trends

1. **Extension TUI customization** — Working indicators (spinner/color/mode), working messages, and branding surfaces (`APP_NAME` in `/quit`) dominate recent requests. Pi is becoming a platform for wrapped/white-label agents.

2. **Enterprise auth & identity** — Dynamic token refresh (Bedrock `CMD` pattern), custom session IDs, and per-session `cwd` forwarding signal B2B/embedded deployment growth.

3. **Model ecosystem velocity** — Rapid additions (Kimi K2.6, prompt caching for Qwen, Fireworks AI detection, GitHub Copilot "premium requests" cost model) show provider breadth as competitive priority.

4. **Structured extension APIs** — Raw string events (`before_agent_start`) being replaced with typed options; pattern likely to repeat for other lifecycle hooks.

5. **Multimodal expansion** — Video/audio in `prompt` RPC ([#3200](https://github.com/badlogic/pi-mono/issues/3200)) follows image support; Gemma 4 / GPT-4o targeting.

---

## Developer Pain Points

| Pain Point | Frequency | Evidence |
|-----------|-----------|----------|
| **Cloudflare Workers / edge runtime gaps** | High | [#3112](https://github.com/badlogic/pi-mono/issues/3112) validation skip, [#3474](https://github.com/badlogic/pi-mono/pull/3474) TypeBox migration — core architecture assumes Node.js APIs |
| **Sync I/O in session layer** | Persistent | [#2616](https://github.com/badlogic/pi-mono/issues/2616) blocks async persistence; `SessionManager` design debt affects SDK server deployments |
| **Linux/macOS path & config conventions** | Recurring | [#534](https://github.com/badlogic/pi-mono/issues/534) XDG, [#3378](https://github.com/badlogic/pi-mono/issues/3378) Windows pnpm paths — cross-platform install detection fragile |
| **Tmux/terminal emulator input inconsistencies** | Spiky but painful | [#3457](https://github.com/badlogic/pi-mono/pull/3457) shift+enter, [#2778](https://github.com/badlogic/pi-mono/issues/2778) autocomplete `cwd` sensitivity — terminal abstraction leaks |
| **Silent data loss / silent transformations** | Moderate | [#3429](https://github.com/badlogic/pi-mono/issues/3429) images dropped for non-vision models, [#3371](https://github.com/badlogic/pi-mono/issues/3371) streaming flicker — user trust erosion when UI doesn't match model state |
| **Corporate IAM token expiry** | Emerging | [#3462](https://github.com/badlogic/pi-mono/issues/3462) — 1-hour tokens incompatible with long agent sessions; `*_CMD` pattern becoming standard across providers |

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-04-21

## Today's Highlights

The Qwen Code team shipped **v0.14.5-nightly.20260420** with critical ACP integration improvements, including complete hooks support and compact mode UX optimizations. Meanwhile, the community is grappling with widespread **401 authentication errors** following the Qwen OAuth free tier discontinuation on April 15, with over a dozen related issues filed in 24 hours. The VS Code extension is undergoing a major auth overhaul to replace OAuth with Coding Plan and API Key flows.

---

## Releases

### [v0.14.5-nightly.20260420.60a6dfc14](https://github.com/QwenLM/qwen-code/releases/tag/v0.14.5-nightly.20260420.60a6dfc14)

| Change | Author | PR |
|--------|--------|-----|
| Complete hooks support for ACP integration | @DennisYu07 | [#3248](https://github.com/QwenLM/qwen-code/pull/3248) |
| Compact mode UX optimization (shortcuts, settings sync, safety) | @chiga0 | [#3100](https://github.com/QwenLM/qwen-code/pull/3100) |
| HTTP hooks infrastructure | — | — |

The ACP hooks implementation addresses a long-standing gap where the IDE companion path lacked parity with the core execution engine—see [Issue #3108](https://github.com/QwenLM/qwen-code/issues/3108) for background.

---

## Hot Issues

### 1. [Qwen OAuth Free Tier Policy Adjustment](https://github.com/QwenLM/qwen-code/issues/3203) — **104 comments**
The most-discussed issue by an order of magnitude. Proposes slashing free quota from 1,000 to 100 requests/day and phasing out free tier entirely. Community reaction is sharply negative; users are demanding migration paths and clearer communication.

### 2. [API Error 400 InternalError.Algo.InvalidParameter](https://github.com/QwenLM/qwen-code/issues/656) — **8 comments, P1 bug**
A persistent, high-priority bug causing complete API failure for all messages. Originally reported in September 2025 but resurfaced with renewed activity. Indicates potential backend regression affecting core functionality.

### 3. [Bring subagent system to feature parity with Claude Code](https://github.com/QwenLM/qwen-code/issues/2409) — **6 comments, 3 👍**
Strategic feature gap analysis: Qwen Code implements only 40-45% of Claude Code's subagent capabilities. Requested by power users seeking competitive workflow automation.

### 4. [Unable to add OpenAI-compatible local LLM](https://github.com/QwenLM/qwen-code/issues/3384) — **4 comments**
Configuration documentation mismatch blocking self-hosted deployments. User follows official docs for VLLM integration but encounters silent failures—suggests schema validation or provider detection bugs.

### 5. [GLM-5.1 hallucinates missing shell output despite successful execution](https://github.com/QwenLM/qwen-code/issues/3338) — **4 comments**
Cross-provider compatibility issue: Zhipu AI's GLM-5.1 model fails to process tool result payloads correctly. Reproducible with `ls` and `find` commands. Indicates tool response serialization may not conform to GLM's expected format.

### 6. [Authentication docs outdated after free tier discontinuation](https://github.com/QwenLM/qwen-code/issues/3382) — **3 comments, welcome-pr**
Documentation debt causing user confusion. Official docs still describe OAuth free tier flow that ended April 15. PR opportunity flagged.

### 7. [TUI performance and UX improvements](https://github.com/QwenLM/qwen-code/issues/2748) — **2 comments, 2 👍**
Systematic critique of terminal UI: 3-5s startup latency, screen flicker, verbose mode bloat. MCP server configuration exacerbates slowdowns.

### 8. [VS Code Extension: Support all authentication methods](https://github.com/QwenLM/qwen-code/issues/2134) — **2 comments, 1 👍**
Auth parity gap between CLI and VS Code extension. Extension locked to OAuth while CLI supports Coding Plan and API keys—now critical given OAuth deprecation.

### 9. [CJK IME composition text appears at wrong position](https://github.com/QwenLM/qwen-code/issues/3456) — **1 comment**
Terminal input regression for Chinese, Japanese, Korean users. IME composition renders on extra line instead of cursor position—breaks real-time editing feedback.

### 10. [Qwen ACP process fails to start (SIGTERM)](https://github.com/QwenLM/qwen-code/issues/3483) — **1 comment, 1 👍**
Compound failure: 401 auth error cascades into ACP process crash. Exit code `null` with `SIGTERM` suggests uncaught exception during initialization.

---

## Key PR Progress

| PR | Author | Status | Description |
|----|--------|--------|-------------|
| [#3482](https://github.com/QwenLM/qwen-code/pull/3482) | @wenshao | **OPEN** | Reworks session recap rendering: inline history placement, blur threshold setting, aligns with Claude Code `/recap` behavior |
| [#3377](https://github.com/QwenLM/qwen-code/pull/3377) | @LaZzyMan | **OPEN** | Phase 2 slash command multi-mode expansion: 13 commands now work in `non_interactive` and `acp` modes with machine-readable output |
| [#3398](https://github.com/QwenLM/qwen-code/pull/3398) | @yiliang114 | **OPEN** | **Critical:** Replaces discontinued OAuth in VS Code with Coding Plan / API Key interactive setup; mirrors CLI `/auth` flow |
| [#3214](https://github.com/QwenLM/qwen-code/pull/3214) | @scrollDynasty | **OPEN** | Replaces fdir crawler with `git ls-files` + ripgrep fallback for `@` mentions; fixes `.gitignore` respect and large repo performance |
| [#3318](https://github.com/QwenLM/qwen-code/pull/3318) | @doudouOUC | **OPEN** | API preconnect optimization: fire-and-forget HEAD request warms TCP+TLS, saves 100-200ms on first call; smart proxy detection |
| [#3463](https://github.com/QwenLM/qwen-code/pull/3463) | @zhangxy-zju | **OPEN** | Concurrent ACP Agent tool calls: replaces sequential for-loop, closes [#2516](https://github.com/QwenLM/qwen-code/issues/2516) |
| [#3479](https://github.com/QwenLM/qwen-code/pull/3479) | @zhangxy-zju | **OPEN** | Injects plan/subagent/arena system reminders into ACP path; fixes silent plan mode inactivity, closes [#1151](https://github.com/QwenLM/qwen-code/issues/1151) |
| [#3477](https://github.com/QwenLM/qwen-code/pull/3477) | @dreamWB | **OPEN** | Native VS Code webview context menus: copy message, copy all, copy last reply—addresses [#3052](https://github.com/QwenLM/qwen-code/issues/3052) |
| [#3013](https://github.com/QwenLM/qwen-code/pull/3013) | @chiga0 | **OPEN** | `SlicingMaxSizedBox` to prevent terminal flicker on large tool outputs (>500 lines); targets `verboseMode` default pain point |
| [#2670](https://github.com/QwenLM/qwen-code/pull/2670) | @askadityapandey | **OPEN** | Fixes Windows permission persistence: case-sensitive path comparison bug on case-insensitive filesystem |

---

## Feature Request Trends

| Theme | Evidence | Momentum |
|-------|----------|----------|
| **Subagent/Agent system expansion** | [#2409](https://github.com/QwenLM/qwen-code/issues/2409), [#3479](https://github.com/QwenLM/qwen-code/pull/3479), [#3463](https://github.com/QwenLM/qwen-code/pull/3463) | High—explicit parity target with Claude Code |
| **Session management enhancements** | [#3093](https://github.com/QwenLM/qwen-code/pull/3093), [#3482](https://github.com/QwenLM/qwen-code/pull/3482), [#2592](https://github.com/QwenLM/qwen-code/pull/2592) | Medium—rename, delete, export, recap workflows |
| **VS Code extension parity with CLI** | [#2134](https://github.com/QwenLM/qwen-code/issues/2134), [#3398](https://github.com/QwenLM/qwen-code/pull/3398), [#2548](https://github.com/QwenLM/qwen-code/pull/2548), [#3477](https://github.com/QwenLM/qwen-code/pull/3477) | **Critical**—auth gap is blocking users |
| **Local/self-hosted model support** | [#3384](https://github.com/QwenLM/qwen-code/issues/3384), [#3214](https://github.com/QwenLM/qwen-code/pull/3214) | Growing—VLLM, Ollama, custom endpoints |
| **CJK / i18n UX polish** | [#3456](https://github.com/QwenLM/qwen-code/issues/3456), [#3240](https://github.com/QwenLM/qwen-code/issues/3240) | Steady—IME, documentation language defaults |

---

## Developer Pain Points

### 🔴 Authentication Crisis (Highest Frequency)
- **Pattern:** Mass influx of 401 errors since April 15 OAuth discontinuation
- **Impact:** [#3403](https://github.com/QwenLM/qwen-code/issues/3403), [#3417](https://github.com/QwenLM/qwen-code/issues/3417), [#3449](https://github.com/QwenLM/qwen-code/issues/3449), [#3465](https://github.com/QwenLM/qwen-code/issues/3465), [#3483](github.com/QwenLM/qwen-code/issues/3483), and 6+ closed duplicates
- **Root cause:** Token expiry handling, stale OAuth flows in docs, VS Code extension lagging CLI auth options
- **Mitigation in progress:** [#3398](https://github.com/QwenLM/qwen-code/pull/3398) (VS Code auth overhaul), [#3481](https://github.com/QwenLM/qwen-code/pull/3481) (OAuth error handling hardening)

### 🟡 Terminal Performance at Scale
- **Pattern:** Flicker, stutter, slow startup with large outputs or MCP servers
- **Tracking:** [#2748](https://github.com/QwenLM/qwen-code/issues/2748), [#3013](https://github.com/QwenLM/qwen-code/pull/3013)
- **Workaround:** Disable `verboseMode` (non-obvious to users)

### 🟡 Cross-Provider Model Compatibility
- **Pattern:** Third-party models (GLM-5.1, local LLMs) fail on tool response parsing or configuration
- **Tracking:** [#3338](https://github.com/QwenLM/qwen-code/issues/3338), [#3384](https://github.com/QwenLM/qwen-code/issues/3384), [#3342](https://github.com/QwenLM/qwen-code/issues/3342)
- **Gap:** Insufficient provider-agnostic testing for tool result serialization

### 🟢 Documentation-Code Drift
- **Pattern:** Auth docs describe discontinued flows; configuration examples don't match actual schema
- **Tracking:** [#3382](https://github.com/QwenLM/qwen-code/issues/3382), [#3384](https://github.com/QwenLM/qwen-code/issues/3384) (user followed docs exactly)
- **Need:** Automated doc validation against release changes

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*