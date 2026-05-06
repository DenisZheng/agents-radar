# AI CLI Tools Community Digest 2026-04-30

> Generated: 2026-04-30 00:20 UTC | Tools covered: 8

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
*Date: 2026-04-30*

---

## 1. Ecosystem Overview

The AI CLI developer tools market has matured into a multi-polar landscape with seven actively maintained alternatives, each backed by distinct commercial or open-source strategies. The sector is characterized by rapid release cadences (multiple tools shipping daily or near-daily), converging feature sets around agent autonomy and IDE integration, and escalating community scrutiny of cost transparency and reliability. A critical inflection point is evident: tools are transitioning from "smart autocomplete" to "autonomous agent orchestration," with background tasks, multi-agent coordination, and granular permission models becoming table stakes. However, this sophistication has introduced systemic fragility—billing misrouting, silent tool dispatch failures, and context window management bugs now dominate issue backlogs across the ecosystem.

---

## 2. Activity Comparison

| Tool | Issues (24h Highlight) | PRs (24h) | Release Status | Release Cadence |
|:---|:---|:---|:---|:---|
| **Claude Code** | 10 hot issues tracked; #13480 (79 comments), #53262 (90👍) | 9 open (3 new), 1 closed | v2.1.123 shipped (OAuth fix) | Rapid patch (3 releases in ~3 days) |
| **OpenAI Codex** | 10 hot issues; #19464 (116👍), #13041 (124👍) | 10 open, 0 closed | 5 alpha releases (α12–α16) in 24h | Extreme velocity (undocumented alphas) |
| **Gemini CLI** | 10 hot issues; #22745 (maintainer EPIC) | 10 tracked (2 closed, 8 open) | v0.42.0-nightly.20260429 | Nightly cadence with bot automation |
| **GitHub Copilot CLI** | 10 hot issues; #1044 (12 comments since Jan) | 3 closed without merge, 0 open merges | v1.0.40-0 shipped | Slower; internal pipeline likely |
| **Kimi Code CLI** | 6 hot issues; #1956, #1745 | 11 active PRs | No release in 24h | Irregular; PR-driven |
| **OpenCode** | 10 hot issues; #20695 (69 comments), #20698 (40 comments) | 10 tracked (2 merged, 8 open) | v1.14.30 shipped | Regular stable releases |
| **Pi** | 10 hot issues; #3984, #3879 (6 upvotes) | 10 tracked (5 merged, 5 open) | No release in 24h | As-needed; community-driven |
| **Qwen Code** | 10 hot issues; #3579 (11 comments), #3724 (community root-cause) | 10 tracked (1 merged, 9 open) | v0.15.5 + 3 pre-releases | Multi-channel (stable/preview/nightly) |

---

## 3. Shared Feature Directions

| Requirement | Tools | Specific Needs |
|:---|:---|:---|
| **Granular permission/safety models** | Claude Code, Kimi, Copilot CLI, OpenCode, Qwen Code | Per-command/directory approval scopes (Kimi #2114, Copilot #1973); split read/write external_directory (OpenCode #5395); plan mode restriction enforcement (OpenCode #6527); unified L3→L4 permission flow (Qwen #3723) |
| **Session portability & management** | Claude Code, Codex, Kimi, Qwen Code | Working directory changes mid-session (Claude #3473); thread deletion (Codex #13018); named save/load/delete (Qwen #3190); session history replay for ACP (Kimi #1956); export formats (Claude #54777) |
| **Background task/agent orchestration** | Qwen Code, Gemini CLI, Claude Code | Phased roadmap with official tracking (Qwen #3634); subagent MAX_TURNS honesty (Gemini #22323); autonomous workflow trust erosion (Gemini #22672) |
| **Context window & compaction transparency** | Codex, Qwen Code, Claude Code | 1M vs. 400K discrepancy (Codex #19464); 983K hard ceiling (Qwen #3652); auto-compaction data loss (Codex #20287); cost-aware model selection (Codex #20218) |
| **MCP integration maturity** | Copilot CLI, Qwen Code, Claude Code | Headless OAuth (Copilot #3039); CLI config management (Qwen v0.15.5); silent MCP failures (Claude #49133); schema exposure guardrails (Kimi #2112) |
| **Enterprise/headless operation** | Copilot CLI, Pi, Qwen Code, Kimi | Credential backends beyond plaintext (Copilot #2071); custom fetch hooks/proxy support (Pi #3987); standalone native binary (Qwen #1276); headless Linux clipboard (Kimi #2115) |
| **Billing transparency & control** | Claude Code, Codex, Copilot CLI | Quota mis-routing to "extra usage" (Claude #53262, #54776); 20× consumption spikes (Claude #54776); autopilot infinite loop cost drain (Copilot #2881); token consumption factors in UI (Codex #20266) |

---

## 4. Differentiation Analysis

| Dimension | Claude Code | OpenAI Codex | Gemini CLI | GitHub Copilot CLI | Kimi Code CLI | OpenCode | Pi | Qwen Code |
|:---|:---|:---|:---|:---|:---|:---|:---|:---|
| **Primary Target** | Enterprise teams, power users | OpenAI ecosystem subscribers, large-codebase developers | Google Cloud/AI Platform users | GitHub ecosystem, VS Code users | APAC developers, IDE integrators | Multi-provider power users, Desktop-first | Provider-agnostic developers, extension builders | Alibaba Cloud users, agent orchestration pioneers |
| **Technical Approach** | Closed source, tight Anthropic model integration | Rust core migration, rapid alpha iteration | Nightly bot-assisted releases, ACP protocol | ACP protocol for IDE bridging, Microsoft security model | "Soul" framework, RalphFlow architecture, ACP focus | Desktop + Web + SDK multi-platform, Bun/Node runtime | Extension-based provider system, self-update | Background task phases, 9-agent review pipeline |
| **Key Differentiator** | Deepest model integration (Sonnet); plan mode | Fastest release velocity; 400K context for GPT-5.5 | Bot-generated maintenance at scale; metrics integrity | Tightest GitHub/VS Code integration; enterprise auth | Granular safety controls; process identity exposure | Multi-provider flexibility; memory performance focus | Provider ecosystem breadth; profile isolation | Native agent team coordination; explicit engineering roadmaps |
| **Critical Weakness** | Billing transparency crisis; silent tool dispatch regression | Undocumented alphas; Windows second-class; context window gaps | Agent reliability (false success); permission fatigue | Low external merge velocity; feature parity gaps | ACP fragility; single-session limits | Memory/Windows stability; DeepSeek reasoning regressions | Self-update fragility; TUI input layer | DeepSeek interoperability; model config overwrites |
| **Open Source** | No | Partial (CLI open, core migrating to Rust) | Yes | No | Yes | Yes | Yes | Yes |

---

## 5. Community Momentum & Maturity

| Tier | Tools | Evidence |
|:---|:---|:---|
| **Highest momentum** | **OpenAI Codex**, **Claude Code**, **Qwen Code** | Codex: 5 alphas/24h, 116👍 on context window issue; Claude: 90👍 billing issue, rapid patch cadence; Qwen: community member @enochday independently root-caused DeepSeek bug with patch, multi-phase background task roadmap with official tracking |
| **Strong momentum** | **Gemini CLI**, **OpenCode**, **Kimi Code CLI** | Gemini: bot-automated PRs, same-day fixes (#26238); OpenCode: active memory megathread moderation, v1.14.30 rapid shipping; Kimi: 11 active PRs, competing proposals for auto-approval (#2114 vs #2095) |
| **Moderate/uncertain momentum** | **Pi**, **GitHub Copilot CLI** | Pi: steady but smaller issue volume, 5 merged PRs; Copilot CLI: 3 PRs closed without merge in 24h, no substantive external merges, suggests internal pipeline or lower external contributor priority |

| Maturity Signal | Leaders | Laggards |
|:---|:---|:---|
| Engineering process transparency | Qwen Code (phased roadmaps #3634), Gemini CLI (bot automation) | Codex (undocumented alphas), Copilot CLI (opaque merge process) |
| Community self-healing | Qwen (@enochday), OpenCode (heap snapshot requests) | Claude Code (billing issues persist), Codex (Windows chronic) |
| Cross-platform stability | OpenCode (multi-platform focus), Kimi (headless Linux fixes) | Codex (Windows environment integrity), Pi (TUI input layer) |

---

## 6. Trend Signals

| Trend | Evidence | Implication for Developers |
|:---|:---|:---|
| **Agent reliability > agent capability** | Gemini #22323 (false GOAL success), Claude #54847 (silent tool stall), OpenCode #6527 (plan mode bypass) — trust erosion is the dominant community sentiment | Prioritize tools with observable, debuggable agent state; demand convergence detection (Kimi #1960) and explicit failure modes |
| **Cost governance as adoption gate** | Claude billing cluster (#53262, #54776, #14362), Copilot autopilot drain (#2881), Codex token transparency (#20218) | Organizations must instrument usage independently; tools without granular cost controls pose operational risk |
| **Context architecture as competitive moat** | Codex 400K/1M gap (#19464), Qwen 983K ceiling (#3652), Claude session corruption (#13480), OpenCode memory megathread (#20695) | Evaluate compaction strategies, not just window size; data loss in long sessions is more damaging than smaller windows |
| **ACP/protocol standardization pressure** | Kimi #1956 (history replay), Copilot #1044 (slash commands in ACP), Claude #49133 (silent MCP failures) | IDE integrations are becoming primary interaction mode; CLI-only tools risk marginalization |
| **Permission model sophistication** | Universal demand for beyond-binary safety (Kimi #2114, Copilot #1973, OpenCode #5395) | Enterprise adoption requires organizational policy layers, not just user-level toggles |
| **Background task/agent team infrastructure** | Qwen Phases A-C (#3634), Kimi RalphFlow (#1960), Gemini subagent honesty (#22323) | Next 12–18 months will determine which tools achieve genuine autonomous operation vs. assisted completion |

---

**Bottom Line:** The AI CLI ecosystem is in a high-velocity consolidation phase where reliability, transparency, and enterprise operability are displacing raw model capability as primary selection criteria. Claude Code and OpenAI Codex lead on user volume and release speed but face acute trust challenges around billing and silent failures. Qwen Code and Kimi Code CLI demonstrate the strongest engineering process maturity for complex feature development. GitHub Copilot CLI's low external merge velocity and feature parity gaps suggest strategic uncertainty. Developers should prioritize tools with demonstrable progress on context preservation, cost governance, and cross-platform stability over headline model specifications.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
*Data as of 2026-04-30 | Repository: [anthropics/skills](https://github.com/anthropics/skills)*

---

## 1. Top Skills Ranking (Most-Discussed PRs)

| Rank | Skill | PR | Status | Description | Discussion Focus |
|:---|:---|:---|:---|:---|:---|
| 1 | **Document Typography** | [#514](https://github.com/anthropics/skills/pull/514) | 🟡 Open | Typographic quality control for AI-generated documents—prevents orphans, widows, and numbering misalignment | Universal pain point; affects every document Claude generates; author argues users rarely ask for good typography but always suffer without it |
| 2 | **PDF Fix (Case-Sensitive References)** | [#538](https://github.com/anthropics/skills/pull/538) | 🟡 Open | Fixes 8 case-sensitivity mismatches in `skills/pdf/SKILL.md` that break on Linux/WSL | Cross-platform compatibility; maintenance quality |
| 3 | **Skill Quality & Security Analyzers** | [#83](https://github.com/anthropics/skills/pull/83) | 🟡 Open | Two meta-skills evaluating Skills across 5 dimensions (structure, security, performance, UX, maintainability) with weighted scoring | Meta-Skill movement; community desire for quality standards |
| 4 | **Frontend Design Clarity** | [#210](https://github.com/anthropics/skills/pull/210) | 🟡 Open | Revised frontend-design skill for single-conversation actionability and behavioral specificity | Instruction design philosophy; token efficiency vs. comprehensiveness |
| 5 | **ODT Skill** | [#486](https://github.com/anthropics/skills/pull/486) | 🟡 Open | OpenDocument creation, template filling, and ODT→HTML parsing for LibreOffice/ISO standard workflows | Open-source document standards; government/enterprise compliance |
| 6 | **YAML Validation Fix** | [#539](https://github.com/anthropics/skills/pull/539) | 🟡 Open | Pre-parse validation catching unquoted `description` fields with `:` that silently corrupt YAML | Developer experience; silent failure modes |
| 7 | **DOCX Bookmark Collision Fix** | [#541](https://github.com/anthropics/skills/pull/541) | 🟡 Open | Prevents document corruption when tracked changes overlap with existing bookmarks via shared `w:id` space | OOXML edge cases; document integrity |
| 8 | **Contributing Guidelines** | [#509](https://github.com/anthropics/skills/pull/509) | 🟡 Open | Adds `CONTRIBUTING.md` to address 25% community health score | Onboarding friction; governance maturity |

---

## 2. Community Demand Trends (From Issues)

| Trend | Evidence | Urgency |
|:---|:---|:---|
| **Org-Wide Skill Sharing** | [#228](https://github.com/anthropics/skills/issues/228) (9 comments, 6 👍) | 🔥 High |
| Enterprise teams need native skill libraries, not Slack/Teams file passing. Direct sharing links or org-scoped repositories requested. | | |
| **Skill Distribution & Trust Boundaries** | [#492](https://github.com/anthropics/skills/issues/492) (4 comments, 2 👍), [#189](https://github.com/anthropics/skills/issues/189) (5 comments, 7 👍) | 🔥 High |
| Namespace confusion (`anthropic/` vs. community), duplicate skills across plugins, and impersonation risks. Community seeks verified publisher badges or separate namespaces. | | |
| **Evaluation & Testing Infrastructure** | [#556](https://github.com/anthropics/skills/issues/556) (6 comments, 6 👍), [#202](https://github.com/anthropics/skills/issues/202) (8 comments, 1 👍) | ⚡ Medium-High |
| `run_eval.py` fails to trigger skills; `skill-creator` needs operational rewrite. Meta-tooling for skill validation is immature. | | |
| **Platform Integration (Bedrock, MCP, SSO)** | [#29](https://github.com/anthropics/skills/issues/29) (4 comments), [#16](https://github.com/anthropics/skills/issues/16) (4 comments), [#532](https://github.com/anthropics/skills/issues/532) (2 comments, 1 👍) | ⚡ Medium |
| AWS Bedrock compatibility, MCP exposure for skill APIs, and enterprise SSO auth flows (no `ANTHROPIC_API_KEY`). Multi-platform deployment friction. | | |
| **Reliability & Data Loss** | [#62](https://github.com/anthropics/skills/issues/62) (10 comments, 1 👍), [#406](https://github.com/anthropics/skills/issues/406) (2 comments, 4 👍), [#403](https://github.com/anthropics/skills/issues/403) (2 comments) | 🔥 High |
| Skills disappearing, 500 errors on upload/delete, 404s on load. Production trust issues for teams building on Claude Code. | | |

---

## 3. High-Potential Pending Skills

These active PRs show strong conceptual alignment with community needs but remain unmerged:

| Skill | PR | Why It May Land Soon |
|:---|:---|:---|
| **Testing Patterns** | [#723](https://github.com/anthropics/skills/pull/723) | Fills critical gap in Claude's code generation workflow; covers Testing Trophy, React Testing Library, E2E patterns—highly requested by engineering teams |
| **Sensory (macOS AppleScript Automation)** | [#806](https://github.com/anthropics/skills/pull/806) | Alternative to screenshot-based computer use; two-tier permission model addresses security concerns; native automation is faster/more reliable |
| **ServiceNow Platform** | [#568](https://github.com/anthropics/skills/pull/568) | Broad enterprise ITSM coverage (ITOM, ITAM, SecOps, FSM, SPM); ServiceNow is dominant in Fortune 500; no competing skill exists |
| **Claude-Obsidian-Reporter** | [#664](https://github.com/anthropics/skills/pull/664) | Personal knowledge management + Git integration; fills developer journaling gap; concrete daily/weekly/monthly report generation |
| **HADS (Human-AI Document Standard)** | [#616](https://github.com/anthropics/skills/pull/616) | Addresses dual-audience documentation problem; lightweight Markdown convention; aligns with "docs for AI first" trend |
| **SAP-RPT-1-OSS Predictor** | [#181](https://github.com/anthropics/skills/pull/181) | First enterprise tabular foundation model skill; SAP data ecosystem; Apache 2.0 open source; niche but high-value vertical |
| **Codebase Inventory Audit** | [#147](https://github.com/anthropics/skills/pull/147) | Technical debt and orphaned code detection; 10-step workflow produces `CODEBASE-STATUS.md`; aligns with maintenance automation demand |

---

## 4. Skills Ecosystem Insight

> **The community's most concentrated demand is for enterprise-grade reliability and distribution infrastructure**—org-wide skill sharing, verified namespaces, SSO-compatible tooling, and anti-fragile upload/sync—while the most vibrant innovation is occurring in vertical document-automation skills (typography, ODT, DOCX fixes) and meta-cognitive tooling (quality analyzers, testing patterns, persistent memory) that make Claude more systematically capable rather than merely conversational.

---

---

# Claude Code Community Digest — 2026-04-30

---

## 1. Today's Highlights

Anthropic shipped **v2.1.123** with a targeted OAuth fix, while the community is actively tracking a **silent tool dispatch regression** spanning three recent releases (2.1.121–2.1.123) that causes local tool calls to stall without errors. Billing and quota issues remain the dominant theme, with multiple high-engagement reports of unexpected usage spikes and routing bugs.

---

## 2. Releases

| Version | Key Changes |
|---------|-------------|
| **[v2.1.123](https://github.com/anthropics/claude-code/releases/tag/v2.1.123)** | Fixed OAuth authentication entering a 401 retry loop when `CLAUDE_CODE_DISABLE_EXPERIMENTAL_BETAS=1` is set. Narrow but critical fix for enterprise environments disabling beta features. |

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|--------------|-------------------|
| [#13480](https://github.com/anthropics/claude-code/issues/13480) | **Oversized image permanently breaks conversation** — no recovery without new chat | Data-loss severity; corrupted session state is unrecoverable | 🔥 79 comments, 78 👍 — longest-running open bug with repro |
| [#53262](https://github.com/anthropics/claude-code/issues/53262) *(closed)* | **`HERMES.md` in git history routes requests to extra billing instead of plan quota** | Silent financial impact; user burned $200 while Max plan sat unused | 64 comments, 90 👍 — highest engagement, now resolved |
| [#895](https://github.com/anthropics/claude-code/issues/895) | **Write tool missing `content` parameter** — intermittent `InputValidationError` | Core tool reliability; suggests prompt-level or parsing fragility | 48 comments, marked duplicate but persists |
| [#54776](https://github.com/anthropics/claude-code/issues/54776) | **100% quota consumed in 1–2 hours** (20x Max plan) | Sudden regression in cost efficiency; business-critical for heavy users | 32 comments, active investigation |
| [#3473](https://github.com/anthropics/claude-code/issues/3473) | **Feature: Change working directory mid-session** | Fundamental workflow limitation for multi-project development | 22 comments, 67 👍 — top enhancement request |
| [#14362](https://github.com/anthropics/claude-code/issues/14362) | **Sonnet consumes both "All models" and "Sonnet-only" quotas simultaneously** | Double-billing bug on Windows; plan selection logic is broken | 13 comments, 14 👍 |
| [#54847](https://github.com/anthropics/claude-code/issues/54847) | **Tool dispatch stalls silently in 2.1.121–2.1.123** | Critical regression; `tool_use` emitted with no `tool_result`, no errors, no disk effects | 3 comments, fresh report — likely to escalate |
| [#52813](https://github.com/anthropics/claude-code/issues/52813) | **Edit tool normalizes `\uXXXX` escapes, breaking exact matches** | Silent data corruption for JS/TS developers with Unicode escapes | 5 comments, has repro |
| [#54856](https://github.com/anthropics/claude-code/issues/54856) | **Path-pattern scanner false-positives on macOS usernames with `.`** | Security UX friction; "always allow" persistence also broken for Bash/Write | 2 comments, has repro |
| [#54811](https://github.com/anthropics/claude-code/issues/54811) *(closed)* | **Resume session outputs minified JS noise instead of error** | Sandboxing regression; poor error surfacing | 4 comments, closed as duplicate |

---

## 4. Key PR Progress

| # | PR | Description | Status |
|---|-----|-------------|--------|
| [#54777](https://github.com/anthropics/claude-code/pull/54777) | **Export-session plugin** — md/json/txt/docx/pdf export with `--last N` | Reads transcript directly; zero model tokens for export | 🆕 Open |
| [#54749](https://github.com/anthropics/claude-code/pull/54749) | **Hookify rules from `~/.claude` global location** | Cross-project rule sharing; project-local overrides global | 🆕 Open |
| [#54551](https://github.com/anthropics/claude-code/pull/54551) | **Inline image rendering in terminal UI** | Feature proposal to close gap vs. web/mobile clients; references #54546 | 🆕 Open |
| [#54531](https://github.com/anthropics/claude-code/pull/54531) | **Fix GitHub API script authentication vulnerability** | HIGH severity fix in `backfill-duplicate-comments.ts` | 🆕 Open |
| [#52666](https://github.com/anthropics/claude-code/pull/52666) | **README brand casing fixes** (GitHub, macOS) | Documentation polish | Open |
| [#54741](https://github.com/anthropics/claude-code/pull/54741) | **Clarify `claude` command purpose in README** | Onboarding friction reduction | 🆕 Open |
| [#41611](https://github.com/anthropics/claude-code/pull/41611) | **Add missing source to Claude Code** | Long-standing open request for source availability | Open (since March) |
| [#20448](https://github.com/anthropics/claude-code/pull/20448) | **Web4-governance plugin** — AI governance with R6 workflow | Niche but elaborate; trust-native infrastructure angle | Open (since January) |
| [#1](https://github.com/anthropics/claude-code/pull/1) | **Create SECURITY.md** | Basic security policy | ✅ Closed |

---

## 5. Feature Request Trends

| Direction | Evidence | Momentum |
|-----------|----------|----------|
| **Session portability** | [#3473](https://github.com/anthropics/claude-code/issues/3473) (cwd change), [#50663](https://github.com/anthropics/claude-code/issues/50663) (resume with original model), [#54777](https://github.com/anthropics/claude-code/pull/54777) (export) | High — core workflow flexibility |
| **Billing transparency & control** | [#53262](https://github.com/anthropics/claude-code/issues/53262), [#54776](https://github.com/anthropics/claude-code/issues/54776), [#14362](https://github.com/anthropics/claude-code/issues/14362), [#52908](https://github.com/anthropics/claude-code/issues/52908) | Critical — trust erosion risk |
| **MCP/debuggability** | [#49133](https://github.com/anthropics/claude-code/issues/49133) (silent MCP failures), [#54829](https://github.com/anthropics/claude-code/issues/54829) (plugin autocomplete) | Growing — ecosystem complexity |
| **TUI/UX refinements** | [#38472](https://github.com/anthropics/claude-code/issues/38472) (plan mode defaults), [#54809](https://github.com/anthropics/claude-code/issues/54809) (suppress follow-ups), [#52640](https://github.com/anthropics/claude-code/issues/52640) (hide thinking blocks) | Steady — polish vs. power-user needs |
| **Cross-client parity** | [#54551](https://github.com/anthropics/claude-code/pull/54551) (inline images), [#54845](https://github.com/anthropics/claude-code/issues/54845) (mobile approval visibility) | Moderate — web/mobile lead TUI |

---

## 6. Developer Pain Points

| Pain Point | Frequency | Impact |
|------------|-----------|--------|
| **Quota/billing surprises** | 5+ issues in top 30 | 🔴 Critical — $200 unexpected charges, 100% consumption in hours, silent routing to "extra usage" |
| **Silent failures & stalls** | [#54847](https://github.com/anthropics/claude-code/issues/54847), [#49133](https://github.com/anthropics/claude-code/issues/49133), [#54411](https://github.com/anthropics/claude-code/issues/54411) | 🔴 High — no errors, no logs, no recovery path |
| **Session state fragility** | [#13480](https://github.com/anthropics/claude-code/issues/13480), [#54851](https://github.com/anthropics/claude-code/issues/54851), [#54799](https://github.com/anthropics/claude-code/issues/54799), [#54811](https://github.com/anthropics/claude-code/issues/54811) | 🟡 High — corruption, resume bugs, context loss |
| **Security scanner UX** | [#54856](https://github.com/anthropics/claude-code/issues/54856) | 🟡 Moderate — false positives, broken "always allow" persistence |
| **Tool-level regressions** | [#52813](https://github.com/anthropics/claude-code/issues/52813), [#895](https://github.com/anthropics/claude-code/issues/895) | 🟡 Moderate — exact-match breaking, parameter omission |

**Bottom line:** The 2.1.121–2.1.123 release window introduced measurable instability in tool dispatch and session reliability. Billing transparency remains the community's top trust issue, with multiple independent reports of quota mis-routing and accelerated consumption.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-04-30

---

## 1. Today's Highlights

The Codex team shipped five rapid-fire Rust alpha releases (v0.126.0-alpha.12–16) in 24 hours, indicating intense iteration on the core runtime. Meanwhile, community attention is converging on GPT-5.5's 400K context limit versus its advertised 1M capability, and Windows users continue to face persistent environment and shell integration problems.

---

## 2. Releases

| Version | Notes |
|---------|-------|
| `rust-v0.126.0-alpha.12` through `rust-v0.126.0-alpha.16` | Five consecutive alpha releases with no detailed changelogs provided. The rapid cadence suggests active bug-fixing or feature integration in the Rust core, but specifics are not yet documented. |

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|--------------|-------------------|
| [#19464](https://github.com/openai/codex/issues/19464) | **Support 1M token context for GPT-5.5 in Codex** | Documents a 2.5× discrepancy between advertised (1M) and actual (400K) context window for GPT-5.5 in Codex, blocking large-codebase workflows. | **85 comments, 116 👍** — highest engagement; users treating as de facto bug report |
| [#13041](https://github.com/openai/codex/issues/13041) | **WebSocket upgrade succeeds then server closes with 1008 Policy** | Core connectivity bug causing transport fallback to HTTPS, degrading real-time performance for Linux users. | **62 comments, 124 👍** — long-running, unresolved since February |
| [#13917](https://github.com/openai/codex/issues/13917) | **Codex desktop on Windows cannot start PowerShell host (8009001d)** | Windows-specific NCRYPT error blocking PowerShell session initialization; now **closed** after fix verification. | 38 comments; resolution validates Windows shell investment |
| [#19220](https://github.com/openai/codex/issues/19220) | **macOS startup failure: unsupported feature `workspace_dependencies`** | App crashes on launch for Pro subscribers due to unhandled feature flag; regression in recent update. | 20 comments; severity high due to total startup failure |
| [#16857](https://github.com/openai/codex/issues/16857) | **High GPU usage while "thinking" due to tiny animation** | macOS GPU pegged by UI animation, causing thermal throttling and battery drain on Apple Silicon. | 19 comments, 21 👍; performance regression with clear repro |
| [#13699](https://github.com/openai/codex/issues/13699) | **Codex Windows crashed with WSL — config location** | WSL path resolution crash for Enterprise users; indicates sandbox/environment boundary failures. | 17 comments, 9 👍; WSL + Windows native interop remains fragile |
| [#8732](https://github.com/openai/codex/issues/8732) | **Add Azure DefaultAzureCredential authentication** | Enterprise security compliance blocker — key-based auth disabled in many Azure environments. | 13 comments, 18 👍; long-standing request since January |
| [#13018](https://github.com/openai/codex/issues/13018) | **Allow deleting threads in Codex app** | Basic data hygiene feature missing; users resorting to manual filesystem deletion. | 12 comments, 65 👍; high 👍/comment ratio signals strong latent demand |
| [#12115](https://github.com/openai/codex/issues/12115) | **Dynamically loading nested AGENTS.md** | Feature parity request vs. Claude Code's directory-local context loading; critical for monorepos. | 11 comments, 38 👍; CLI power-user workflow blocker |
| [#20161](https://github.com/openai/codex/issues/20161) | **Codex need phone number** | SSO auth flow regression forcing unexpected phone verification, breaking enterprise identity flows. | 9 comments; emergent issue with SSO trust boundary |

---

## 4. Key PR Progress

| # | PR | Description | Status |
|---|-----|-------------|--------|
| [#19761](https://github.com/openai/codex/pull/19761) | **Add app-server DeviceCheck helper app prototype** | macOS DeviceCheck token generation from signed app context; hidden CLI probe command for attestation workflows. | Open |
| [#20280](https://github.com/openai/codex/pull/20280) | **Use PowerShell AST parser in exec_command** | Windows exec-policy now parses inner `powershell`/`pwsh` commands for prefix-rule matching while preserving wrapper-level safety heuristics. | Open |
| [#20252](https://github.com/openai/codex/pull/20252) | **Render responsive Markdown tables in TUI** | Adds width-sensitive Markdown table rendering with live terminal resize handling; queues stable blocks for re-render. | Open |
| [#19068](https://github.com/openai/codex/pull/19068) | **Unified mentions in TUI** | Replaces file-only `@mention` with unified popup spanning filesystem, plugins, and skills — major UX consolidation. | Open |
| [#20282](https://github.com/openai/codex/pull/20282) | **Return from side chat on Ctrl-D** | Fixes accidental global quit when exiting ephemeral side conversations; matches expected TUI navigation model. | Open |
| [#20275](https://github.com/openai/codex/pull/20275) | **Show correct Bedrock runtime endpoint in /status** | Resolves stale `base_url` display by surfacing runtime-derived AWS region endpoint for Bedrock Mantle. | Open |
| [#20260](https://github.com/openai/codex/pull/20260) | **Truncate large MCP tool outputs in rollouts** | Caps unbounded MCP payloads in JSONL rollouts; 3 tool calls produced 1GB+ in motivating session. | Open |
| [#19905](https://github.com/openai/codex/pull/19905) | **Add compact lifecycle hooks** | External contribution (Vincent Koc) adding `PreCompact`/`PostCompact` hooks for audit/gating around context compaction. | Open |
| [#19280](https://github.com/openai/codex/pull/19280) | **Migrate thread turns list to thread store** | Backend refactor moving `thread/turns/list` to ThreadStore with pathless-store compatibility and regression coverage. | Open |
| [#20285](https://github.com/openai/codex/pull/20285) | **Split Linux metadata sandbox modules** | Refactors Linux sandbox into focused modules: metadata paths, protected cleanup, and protection logic separation. | Open |

---

## 5. Feature Request Trends

| Direction | Evidence | Momentum |
|-----------|----------|----------|
| **Context window expansion** | #19464 (1M tokens), #20272 (auto-compaction broken), #12115 (nested AGENTS.md) | Critical mass — users hitting architectural limits on large codebases |
| **Thread/session management** | #13018 (delete threads), #11086 (message editing), #20287 (context loss on edit) | Persistent gap vs. Cursor/Claude Code conversational UX |
| **Enterprise auth & compliance** | #8732 (Azure DefaultAzureCredential), #20161 (SSO/phone verification) | Security-team blockers for organizational adoption |
| **Sandbox policy granularity** | #3710 (read vs. write approval policies) | 22 👍 on long-standing request; safety UX refinement |
| **Model cost transparency** | #20218, #20266 (expose token consumption factors in UI) | New theme: cost-aware model selection |

---

## 6. Developer Pain Points

| Category | Symptoms | Frequency |
|----------|----------|-----------|
| **Windows environment integrity** | Missing env vars (#18248), PowerShell startup failures (#13917, #19220), WSL path crashes (#13699), TUI rendering gaps (#8852) | *Highest-frequency platform* — Windows treated as second-class by core runtime |
| **Connectivity & transport reliability** | WebSocket 1008 policy drops (#13041), UTF-8 path header corruption (#19581), non-ASCII workspace failures | Recurring across CLI and app; international users disproportionately affected |
| **Context management fragility** | Compaction data loss (#20287), auto-compaction broken (#20272), 400K vs. 1M window discrepancy (#19464) | Core value proposition undermined for large projects |
| **GPU/performance regressions** | Animation causing thermal throttling (#16857), thread loading stalls (#20171) | macOS-specific but severe for daily driver usage |
| **Auth flow brittleness** | Unexpected phone verification (#20161), Azure credential gaps (#8732) | Enterprise onboarding friction |

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-04-30

## Today's Highlights

The Gemini CLI team shipped a nightly release with improved error handling and an experimental metrics-analysis bot, while community activity surged around output polish, agent reliability, and core UX fixes. Multiple bot-generated PRs landed addressing case-sensitivity in search, topic marker leakage, and backlog hygiene—signaling increased automation in the project's maintenance pipeline.

---

## Releases

**[v0.42.0-nightly.20260429.g6d9911393](https://github.com/google-gemini/gemini-cli/releases/tag/v0.42.0-nightly.20260429.g6d9911393)**
- Transient errors no longer incorrectly marked as terminal, improving retry reliability ([#26066](https://github.com/google-gemini/gemini-cli/pull/26066))
- New experimental bot performs time-series metric analysis and suggests repo management improvements ([#gundermanc](https://github.com/gundermanc))

---

## Hot Issues

| # | Issue | Why It Matters | Community Signal |
|---|-------|--------------|----------------|
| [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) | AST-aware file reads, search, and mapping | Foundation for reducing token waste and misaligned reads—could significantly cut API costs and improve precision | 5 comments, maintainer EPIC |
| [#26237](https://github.com/google-gemini/gemini-cli/issues/26237) | `[active topic]` leaking into CLI output | UX polish failure breaking immersion in topic-narration mode; fixed same day via [#26238](https://github.com/google-gemini/gemini-cli/pull/26238) | 4 comments, P1 priority |
| [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) | Subagent falsely reports GOAL success after MAX_TURNS | Critical reliability issue—agents hide their own failures, corrupting trust in autonomous workflows | 4 comments, 2 upvotes |
| [#24916](https://github.com/google-gemini/gemini-cli/issues/24916) | Permission prompts repeatedly asked for same file | Security UX friction undermining "allow for all future sessions" promise | 3 comments |
| [#24353](https://github.com/google-gemini/gemini-cli/issues/24353) | Robust component-level evaluations | Test infrastructure gap—76 behavioral evals exist but coverage and runtime efficiency need scaling | 3 comments, maintainer EPIC |
| [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) | Shell execution hangs with "Waiting input" | Core execution loop bug breaking basic CLI commands; 3 upvotes show broad impact | 2 comments, 3 upvotes |
| [#23571](https://github.com/google-gemini/gemini-cli/issues/23571) | Model creates tmp scripts scattered across workspace | Cleanup burden for users trying to maintain clean commits; agent hygiene issue | 2 comments |
| [#22267](https://github.com/google-gemini/gemini-cli/issues/22267) | Browser Agent ignores settings.json overrides | Configuration system broken for browser subagent; limits user control | 2 comments |
| [#22819](https://github.com/google-gemini/gemini-cli/issues/22819) | Memory routing: global vs. project | Architectural decision affecting personalization scope and cross-project memory isolation | 1 comment, 2 upvotes |
| [#24246](https://github.com/google-gemini/gemini-cli/issues/24246) | 400 error with >128 tools | Hard limit hit by complex projects; needs intelligent tool scoping | 1 comment |

---

## Key PR Progress

| # | PR | Status | What It Does |
|---|-----|--------|--------------|
| [#26240](https://github.com/google-gemini/gemini-cli/pull/26240) | Metrics Integrity & Standardized Reporting (BT-01) | **Open** | Extracts metrics improvements from sibling PR; establishes reliable health-tracking data |
| [#26238](https://github.com/google-gemini/gemini-cli/pull/26238) | Fix topic marker leakage | **Open** | Stops `[active topic]` from appearing in streamed output; pairs with [#26237](https://github.com/google-gemini/gemini-cli/issues/26237) |
| [#26239](https://github.com/google-gemini/gemini-cli/pull/26239) | Backlog Management & Metrics Integrity | **Open** | Stale issue policy optimization + metrics accuracy; bot-generated maintenance at scale |
| [#26222](https://github.com/google-gemini/gemini-cli/pull/26222) | Refactor ACP to use GeminiClient.sendMessageStream() | **Closed** | Unifies terminal and ACP codepaths; brings compression, token masking, and tracing to ACP sessions |
| [#26073](https://github.com/google-gemini/gemini-cli/pull/26073) | Fix generalist profile issues | **Open** | Resolves remaining problems with the generalist agent profile ([#26072](https://github.com/google-gemini/gemini-cli/issues/26072)) |
| [#26220](https://github.com/google-gemini/gemini-cli/pull/26220) | Discourage unprompted `git add .` | **Open** | Prevents overly broad staging in agent prompts; selective staging by default |
| [#26235](https://github.com/google-gemini/gemini-cli/pull/26235) | Fix GrepTool case-sensitivity inconsistency | **Closed** | Adds `-i` to system `grep` to match `git grep` and JS fallback behavior |
| [#26169](https://github.com/google-gemini/gemini-cli/pull/26169) | Remove unsafe exec() in app.ts | **Open** | Critical security fix for `a2a-server`; replaces unsanitized command execution |
| [#26229](https://github.com/google-gemini/gemini-cli/pull/26229) | Shell tool header wrap on Ctrl+O | **Open** | UI polish: header wraps instead of truncating during shell tool invocation |
| [#18499](https://github.com/google-gemini/gemini-cli/pull/18499) | Voice input with pluggable backend | **Open** | Zero-install Gemini transcription + optional Whisper; long-running community request |

---

## Feature Request Trends

1. **AST-aware tooling** — Multiple issues ([#22745](https://github.com/google-gemini/gemini-cli/issues/22745), [#22746](https://github.com/google-gemini/gemini-cli/issues/22746)) explore parsing-aware navigation to replace brittle text-based search and reduce token consumption.
2. **Memory architecture** — Global vs. project-scoped memory ([#22819](https://github.com/google-gemini/gemini-cli/issues/22819)) and proactive memory writes ([#22809](https://github.com/google-gemini/gemini-cli/issues/22809)) indicate push toward persistent, contextual personalization.
3. **Agent evaluation infrastructure** — Component-level behavioral evals ([#24353](https://github.com/google-gemini/gemini-cli/issues/24353)) and subagent rejection handling ([#23897](https://github.com/google-gemini/gemini-cli/issues/23897)) show investment in measurable agent reliability.
4. **Browser agent hardening** — Session takeover, lock recovery ([#22232](https://github.com/google-gemini/gemini-cli/issues/22232)), and settings respect ([#22267](https://github.com/google-gemini/gemini-cli/issues/22267)) dominate browser automation improvements.
5. **Voice and multimodal input** — [#18499](https://github.com/google-gemini/gemini-cli/pull/18499) represents sustained interest in hands-free interaction modes.

---

## Developer Pain Points

| Theme | Evidence | Severity |
|-------|----------|----------|
| **Agent reliability & honesty** | [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) (false success), [#22672](https://github.com/google-gemini/gemini-cli/issues/22672) (destructive behavior), [#23582](https://github.com/google-gemini/gemini-cli/issues/23582) (approval mode awareness) | High — trust erosion in autonomous workflows |
| **Permission & security UX** | [#24916](https://github.com/google-gemini/gemini-cli/issues/24916) (repeated prompts), [#26153](https://github.com/google-gemini/gemini-cli/pull/26153) (sensitive logging), [#26169](https://github.com/google-gemini/gemini-cli/pull/26169) (unsafe exec) | High — friction and exposure risk |
| **Shell/execution hangs** | [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) (stuck "Waiting input"), [#24202](https://github.com/google-gemini/gemini-cli/issues/24202) (SSH text scrambling) | Medium — breaks core interactive loop |
| **Workspace hygiene** | [#23571](https://github.com/google-gemini/gemini-cli/issues/23571) (scattered tmp files) | Medium — operational cleanup burden |
| **Rendering & accessibility** | [#25218](https://github.com/google-gemini/gemini-cli/issues/25218) (incremental table streaming), [#24470](https://github.com/google-gemini/gemini-cli/issues/24470) (scroll jumps), [#24915](https://github.com/google-gemini/gemini-cli/issues/24915) (visual borders) | Medium — polish gaps affecting screen readers and visual stability |

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-04-30

---

## 1. Today's Highlights

GitHub shipped **v1.0.40-0** with ACP custom agent switching and improved interruption handling, while the community grapples with MCP integration friction and escalating demands for granular permission controls. Fresh issues reveal emerging pain points around headless OAuth, autopilot cost drains, and session management in containerized environments.

---

## 2. Releases

### [v1.0.40-0](https://github.com/github/copilot-cli/releases/tag/v1.0.40-0)

| Category | Change |
|----------|--------|
| **Added** | ACP clients can now list and switch custom agents via the `agent` config option — expands programmatic control for IDE integrations and automation workflows |
| **Improved** | `Ctrl+C` and double-`Esc` now remove pending queued messages **one at a time** instead of clearing all — finer-grained interruption control |
| **Improved** | Slash command suggestions prioritize **prefix matches over fuzzy matches** — reduces cognitive load for common commands |
| **Improved** | Prompt mode (`-p`) now gates repo context appropriately — likely a security/consistency fix for non-interactive usage |

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Signal |
|---|-------|--------------|----------------|
| [#1044](https://github.com/github/copilot-cli/issues/1044) | Add support for slash commands in `copilot --acp` | **ACP parity gap**: Non-interactive ACP clients can't discover or execute slash commands, breaking feature parity with interactive mode. Blocks Zed and other editor integrations. | 12 comments, active since January — long-standing protocol limitation |
| [#1973](https://github.com/github/copilot-cli/issues/1973) | Tool whitelist for Interactive Mode | **Security-productivity tension**: Manual approval for every `cat`/`grep` is exhausting; `/allow-all` is too permissive. Enterprise users need middle-ground policies. | 8 comments, **12 👍** — strong demand for granular permissions |
| [#2282](https://github.com/github/copilot-cli/issues/2282) | Not Able to connect to MCP servers | **MCP adoption blocker**: Windows/Winget installs failing to connect to `github-mcp-server` — indicates packaging or configuration detection issues on Windows. | 7 comments, reproducible reports |
| [#1928](https://github.com/github/copilot-cli/issues/1928) | Allow to pause copilot work | **Session control UX**: No way to halt agent execution mid-stream to inject corrections; users must cancel and restart. | 7 comments, reflects workflow friction |
| [#2643](https://github.com/github/copilot-cli/issues/2643) | `preToolUse` silent rewrite blocked by confirmation dialog | **Plugin API limitation**: Hooks can't silently rewrite commands even with `permissionDecision: allow` — breaks automation use cases. | 5 comments, plugin ecosystem concern |
| [#3039](https://github.com/github/copilot-cli/issues/3039) | MCP OAuth in headless session times out | **Container/CI blocker**: OAuth flows require browser, failing in Docker/ubuntu headless environments — no device-code or token fallback documented. | Fresh (0 comments), critical for server deployments |
| [#2881](https://github.com/github/copilot-cli/issues/2881) | Autopilot mode infinite loop drains premium requests | **Cost/operational risk**: Autopilot can burn through quota with zero progress; no automatic circuit breaker. | 2 comments, severe enough to warrant urgent attention |
| [#2071](https://github.com/github/copilot-cli/issues/2071) | Support `pass` as credential backend for headless servers | **Security hardening**: Plaintext token storage in `~/.copilot/` is unacceptable for production servers; GPG-based `pass` integration requested. | 1 comment, **8 👍** — high value-to-noise ratio |
| [#3019](https://github.com/github/copilot-cli/issues/3019) | Breaking Change: `.vscode/mcp.json` no longer supported | **Cross-tool fragmentation**: Teams maintaining both VS Code and CLI configs now need duplicate MCP configurations — regression from earlier parity. | 1 comment, enterprise workflow impact |
| [#3038](https://github.com/github/copilot-cli/issues/3038) | `/clear` drops custom agent system prompt while keeping UI label | **State consistency bug**: Agent behavior silently reverts to default while UI claims custom agent is active — confusing and error-prone. | Fresh (0 comments), clear reproducibility |

---

## 4. Key PR Progress

> *Note: Only 3 PRs updated in the last 24h; all were closed without merge.*

| # | PR | Assessment |
|---|-----|-----------|
| [#3036](https://github.com/github/copilot-cli/pull/3036) | Create CI workflow with GitHub Actions for main branch | Community contribution for basic CI pipeline; closed. Suggests external interest in build automation, but maintainers may have existing internal pipelines. |
| [#3018](https://github.com/github/copilot-cli/pull/3018) | Update README.md | Spam/low-quality submission (attached unrelated PDF); closed. |
| [#2970](https://github.com/github/copilot-cli/pull/2970) | Create devcontainer.json | Community devcontainer contribution; closed without merge. Indicates interest in standardized development environments. |

**Observation**: No substantive merged PRs in this window. The project's merge velocity appears low for external contributors, or maintainers batch reviews on different cadences.

---

## 5. Feature Request Trends

| Trend | Evidence | Direction |
|-------|----------|-----------|
| **Granular permission models** | #1973, #3032, #1971, #3028 | Move beyond binary `/allow-all` vs. per-prompt approval toward pattern-based allowlists, tool-specific policies, and organizational governance |
| **Headless/server-first operation** | #2071, #3039, #3031, #2994 | Credential management, OAuth alternatives, and remote session handling for containers/CI/CD |
| **ACP protocol completeness** | #1044, #1245, #1244, #1262, #3035 | Non-interactive mode needs slash commands, metadata, `/compact`, `/usage`, and tool-callable equivalents of TUI features |
| **Agent orchestration control** | #1928, #3025, #2758, #839 | Pause/resume, mid-reasoning steering, sub-agent model selection, and proper waiting behavior for specialized agents |
| **MCP integration maturity** | #2282, #3019, #3028, #3039 | Configuration standardization, permission models, and headless authentication for MCP servers |

---

## 6. Developer Pain Points

| Pain Point | Frequency | Severity | Representative Issues |
|------------|-----------|----------|----------------------|
| **Permission fatigue in interactive mode** | Very High | High | #1973, #3032, #1971, #3028 |
| *Constant approvals for safe read-only operations; no granular trust model* |
| **MCP configuration and connectivity** | High | High | #2282, #3019, #3028, #3039 |
| *Windows install failures, config format churn, headless OAuth gaps* |
| **Autopilot unpredictability and cost** | Medium | Critical | #2881, #1928, #3025 |
| *Infinite loops burning premium quota; no pause/steering mechanism* |
| **ACP/interactive feature parity** | High | Medium | #1044, #1245, #3035, #1262 |
| *Non-interactive users locked out of slash commands and session tools* |
| **Credential security in server environments** | Medium | High | #2071, #3039 |
| *Plaintext fallback, browser-dependent OAuth, no `pass`/keyring integration* |
| **Agent state management bugs** | Medium | Medium | #3038, #839, #2367 |
| *`/clear` inconsistency, sub-agent skill access, premature abandonment* |

---

*Digest compiled from github.com/github/copilot-cli activity on 2026-04-29/30. For corrections or additions, open an issue referencing this digest.*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-04-30

## Today's Highlights
The past 24 hours saw a surge in IDE integration and developer experience improvements, with 11 active PRs addressing ACP protocol gaps, granular safety controls, and session observability. Notably, two competing PRs (#2114 and closed #2095) tackle auto-approval granularity, while headless Linux clipboard support and runtime identity exposure signal growing enterprise/remote-dev adoption.

---

## Releases
*No releases in the last 24 hours.*

---

## Hot Issues

| # | Issue | Why It Matters | Reaction |
|---|-------|--------------|----------|
| [#1956](https://github.com/MoonshotAI/kimi-cli/issues/1956) | ACP integration: Session history not replayed to clients | Breaks context continuity for all IDE integrations (Zed, JetBrains); makes kimi-cli a "dumb" agent in multi-turn workflows | 1 comment, no traction yet—critical for ACP adoption |
| [#1745](https://github.com/MoonshotAI/kimi-cli/issues/1745) | Plan mode can't write file in Zed ACP | Plan mode is a core differentiator; failure in Zed undermines cross-IDE reliability | 👍 1, confirmed bug with repro path |
| [#2120](https://github.com/MoonshotAI/kimi-cli/issues/2120) | Tool call safety configuration/parameters | Directly addresses the binary afk/yolo problem; enterprise users need sandboxed execution | Fresh, no comments—high latent demand |
| [#2119](https://github.com/MoonshotAI/kimi-cli/issues/2119) | VS Code plugin: multiple active sessions | Cursor parity request; single-session constraint hurts power-user productivity | Bilingual filing suggests APAC user growth |
| [#2118](https://github.com/MoonshotAI/kimi-cli/issues/2118) | Service degradation: "too stuck to converse" | Reliability perception hit; no follow-up from maintainers visible | Zero engagement—risk of churn if unaddressed |
| [#2116](https://github.com/MoonshotAI/kimi-cli/issues/2116) | Expose runtime identity (PID + session ID) | Blocker for external session managers and IDE plugins; needed for process lifecycle integration | Immediately self-resolved via PR #2082 |

---

## Key PR Progress

| # | PR | Feature / Fix | Status |
|---|-----|-------------|--------|
| [#1933](https://github.com/MoonshotAI/kimi-cli/pull/1933) | `work_dir` override for subagent dispatch | Fixes #1931: subagents can now operate outside parent working directory, enabling safer multi-repo workflows | Open, awaiting review |
| [#1960](https://github.com/MoonshotAI/kimi-cli/pull/1960) | RalphFlow architecture: ephemeral context + convergence detection | Major "soul" framework upgrade: prevents infinite loops via isolated iteration contexts and convergence heuristics | Open, architectural scope |
| [#2115](https://github.com/MoonshotAI/kimi-cli/pull/2115) | Clipboard paste on headless Linux over SSH | Fixes `pyperclip` `DISPLAY` failure; uses fallback for remote dev servers | Open, merged-ready quality |
| [#2082](https://github.com/MoonshotAI/kimi-cli/pull/2082) | Expose runtime identity (PID + session ID) | Enables external tools to map session_id → live process; resolves #2116 | Open, companion to #2083 |
| [#2083](https://github.com/MoonshotAI/kimi-cli/pull/2083) | Dynamic terminal title with CWD + session topic | Regresses #1475 fix; adds topic disambiguation for multi-session tabs | Open, UX polish |
| [#2114](https://github.com/MoonshotAI/kimi-cli/pull/2114) | Granular auto-approval rules in config.toml | Claude Code parity: per-command, per-directory approval scopes; supersedes closed #2095 | Open, community-driven priority |
| [#2097](https://github.com/MoonshotAI/kimi-cli/pull/2097) | `/reload-skills` slash command | Hot-reload skill registry without session restart; cuts iteration friction | Open, soul-level enhancement |
| [#2113](https://github.com/MoonshotAI/kimi-cli/pull/2113) | Wrap shell commands in `bash -c` for ACP `terminal/create` | Fixes shell execution in ACP terminal forwarding; protocol compliance fix | Open, targeted ACP fix |
| [#2112](https://github.com/MoonshotAI/kimi-cli/pull/2112) | MCP schema exposure guardrails | Prevents context overflow from large MCP tool lists; keeps tools registered but selectively exposes | Open, scalability fix |
| [#2080](https://github.com/MoonshotAI/kimi-cli/pull/2080) | `<ToolInput/>` show diff content, not raw JSON | Web UI readability: renders structured diffs instead of serialized JSON blobs | Open, frontend polish |

---

## Feature Request Trends

1. **Granular Safety Controls** — Moving beyond binary afk/yolo to per-command, per-directory approval rules (#2120, #2114). Enterprise and cautious users demand sandboxed execution without friction.
2. **IDE Ecosystem Parity** — Multi-session support (#2119), session history replay (#1956), and plan mode reliability (#1745) show pressure to match Cursor/Claude Code's IDE integration depth.
3. **Observability & Tooling Integration** — Runtime identity (#2116/#2082), dynamic process titles (#2083), and session PID exposure reflect kimi-cli being composed into larger devtool stacks.
4. **Hot-Reload & Iteration Speed** — `/reload-skills` (#2097) and ephemeral context architectures (#1960) target reducing restart/rebuild cycles in agent workflows.

---

## Developer Pain Points

| Pain Point | Evidence | Severity |
|-----------|----------|----------|
| **ACP/IDE integration fragility** | #1956, #1745, #2113 — history loss, plan mode failures, shell forwarding bugs | High — breaks core value prop in external tools |
| **All-or-nothing security model** | #2120, #2114 — afk/yolo is too coarse for teams; no middle ground for trusted directories vs. system paths | High — adoption blocker for orgs |
| **Session management at scale** | #2119, #2118, #2116 — single-session limits, unexplained hangs, opaque process state | Medium-High — power-user friction |
| **Remote/headless environment gaps** | #2115 — clipboard, `DISPLAY` assumptions betray server-side usage patterns | Medium — growing segment |

---

*Digest compiled from [MoonshotAI/kimi-cli](https://github.com/MoonshotAI/kimi-cli) activity on 2026-04-29.*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-04-30

## Today's Highlights

OpenCode shipped v1.14.30 with critical fixes for Desktop session recovery and Azure GPT-5.4 reasoning errors, while the community continues to grapple with persistent memory performance problems and DeepSeek reasoning_content propagation bugs across multi-turn conversations. Security concerns around plan mode permission bypasses remain unresolved despite multiple related issues surfacing.

---

## Releases

**[v1.14.30](https://github.com/anomalyco/opencode/releases/tag/v1.14.30)** — Desktop stability and provider compatibility release
- Fixed missing sessions in Desktop caused by path mismatches, with recovery for existing stored data
- Fixed Azure Responses defaults to prevent reasoning item ordering errors with GPT-5.4
- Improved DeepSeek compatibility for providers with varying model naming conventions
- Added Mistral Medium 3.5 with reasoning support

---

## Hot Issues

| Issue | Why It Matters | Community Reaction |
|-------|-------------|-------------------|
| **[#20695 — Memory Megathread](https://github.com/anomalyco/opencode/issues/20695)** | Centralized tracking for scattered memory leak reports; maintainers explicitly request heap snapshots and warn against LLM-generated solutions | 69 comments, 41 👍 — highest engagement, actively moderated |
| **[#20698 — Azure GPT-5.4 reasoning item ordering](https://github.com/anomalyco/opencode/issues/20698)** | Caused complete crashes after 1-2 tool calls; now fixed in v1.14.30 | 40 comments, closed rapidly after fix confirmation |
| **[#6527 — Plan mode restrictions bypass via sub-agents](https://github.com/anomalyco/opencode/issues/6527)** | Critical security flaw: sub-agents spawned via `task` tool inherit full permissions, explicitly acknowledged by model reasoning | 15 comments, 7 👍, open since Dec 2025 — unresolved security debt |
| **[#16685 — Kimi K2.5 "Provider returned error" on Windows](https://github.com/anomalyco/opencode/issues/16685)** | Persistent provider error specific to Windows Desktop + OpenCode Go; indicates platform-specific instability | 21 comments, 7 👍, closed but pattern continues in #21010 |
| **[#5395 — Split external_directory permission](https://github.com/anomalyco/opencode/issues/5395)** | Core security model limitation: impossible to grant read-only external access; blocks safe reference workflows | 14 comments, 11 👍, open since Dec 2025 |
| **[#23928 — `<`/`<=` operators cutting off responses](https://github.com/anomalyco/opencode/issues/23928)** | Bizarre parser bug causing mid-response truncation; user root-caused to comparison operators | 13 comments, actively investigated |
| **[#16612 — Stale context / repeating previous turns](https://github.com/anomalyco/opencode/issues/16612)** | UX-breaking conversation state bug where assistant responds to prior messages; recovery inconsistent | 11 comments, 7 👍 |
| **[#24261 — DeepSeek reasoning_content lost in multi-turn](https://github.com/anomalyco/opencode/issues/24261)** | DeepSeek V4 Pro thinking mode breaks conversation continuity; fixed but variant persists in #24722, #25000 | 10 comments, 2 👍, pattern of recurring regressions |
| **[#24751 — GPT 5.5 context limits hardcoded](https://github.com/anomalyco/opencode/issues/24751)** | Overrides user configuration; introduced by PR #24212, quickly fixed | 6 comments, 4 👍, closed |
| **[#24916 — Windows VS Code extension crashes and screen artifacts](https://github.com/anomalyco/opencode/issues/24916)** | Severe stability issue in latest 1.14.29; random crashes blocking daily use | 5 comments, reported yesterday |

---

## Key PR Progress

| PR | Status | Description |
|----|--------|-------------|
| **[#25013](https://github.com/anomalyco/opencode/pull/25013)** — Desktop path mismatch fix | **Merged** | Resolves session loss via strong IDs + existing data recovery; shipped in v1.14.30 |
| **[#25021](https://github.com/anomalyco/opencode/pull/25021)** — Deflake runner cancel test | **Merged** | Replaces timing-dependent sleep with Deferred handshake for reliable CI |
| **[#23890](https://github.com/anomalyco/opencode/pull/23890)** — Runtime-aware search service | **Open** | Adds `fff-bun` optimization under Bun, falls back to ripgrep for Node/Desktop; major performance refactor |
| **[#24951](https://github.com/anomalyco/opencode/pull/24951)** — Enable file watcher in web/serve mode | **Open** | Fixes #19182: native file watcher was only watching `.git/HEAD`, missing file changes |
| **[#24865](https://github.com/anomalyco/opencode/pull/24865)** — CORS option for SDK ServerOptions | **Open** | Adds configurable allowed origins to JS SDK server; closes #24715 |
| **[#25020](https://github.com/anomalyco/opencode/pull/25020)** — Stop git worktree discovery on startup | **Open** | Fixes Windows startup hang at "Loading plugins..." in linked worktrees |
| **[#25018](https://github.com/anomalyco/opencode/pull/25018)** — Convert control-plane to Effect | **Open** | Major refactor: workspace lifecycle to Effect services with expanded test coverage |
| **[#25016](https://github.com/anomalyco/opencode/pull/25016)** — Prevent drag-to-select submitting options | **Open** | UX fix for TUI: mouse selection in plan mode questions no longer triggers submission |
| **[#25009](https://github.com/anomalyco/opencode/pull/25009)** — DELETE /project/:id endpoint | **Open** | Cascading project deletion; closes #25004 |
| **[#24740](https://github.com/anomalyco/opencode/pull/24740)** — Batch VCS git show calls | **Open** | Fixes #24739: `/vcs/diff` performance for large refactors by batching instead of per-file processes |

---

## Feature Request Trends

1. **Multimodal context expansion** — Video/audio native support (#10531) and Augment code integration (#10216) signal demand beyond text-code workflows
2. **Granular permission model** — Split `external_directory` into read/write (#5395) and plan mode restriction enforcement (#6527, #24615) reflect mature security requirements
3. **Agent team orchestration** — Explicit asks for agent-teams feature (#15035) and Cursor-style "Add to chat" file workflows (#14679)
4. **Mobile/touch optimization** — Active PR #18767 for responsive app experience
5. **UI polish** — Disable auto-scroll (#7659), sound/animation controls (#22528), and TUX input refinements (#25015, #25016)

---

## Developer Pain Points

| Category | Pattern | Frequency |
|----------|---------|-----------|
| **Memory/Performance** | Heap growth, Bun panics (#24148), process crashes (#24916) | Chronic; #20695 megathread active |
| **DeepSeek reasoning propagation** | `reasoning_content` dropped across tool calls, multi-turn, various providers | **Critical cluster**: #24261, #24722, #25000 — fixes keep regressing |
| **Windows stability** | PTY spawn failures (#24463), package manager version mismatches (#23601), VS Code extension crashes (#24916) | Disproportionately Windows-affected |
| **Permission model gaps** | Plan mode bypasses (#6527, #24615), coarse external_directory (#5395) | Security-sensitive, long-standing |
| **Provider-specific breakages** | Azure reasoning ordering (#20698), GPT-5.5 hardcoded limits (#24751), Kimi errors (#16685, #21010) | Rapid model iteration causing config drift |
| **TUI/Input quirks** | Home/End key conflicts (#14899), contenteditable caret behavior (#25015), drag-to-select submission (#25016) | Terminal UX polish backlog |

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-04-30

## Today's Highlights

The Pi team shipped fixes for critical self-update failures across npm custom prefix, bun, and system-wide installations, alongside improved session reliability with duplicate entry handling and stale tool-call XML recovery. Provider ecosystem expansion continued with Gloo AI and Xiaomi MiMo additions, while DeepSeek V4 model support saw iterative refinements for reasoning effort levels and pricing accuracy.

---

## Releases

*No releases in the last 24 hours.*

---

## Hot Issues

| # | Issue | Why It Matters | Reaction |
|---|-------|--------------|----------|
| [#3984](https://github.com/badlogic/pi-mono/issues/3984) | Deepseek 4pro on fireworks provider broken | Fireworks integration regression blocking a major model-provider combination; user confirmed it works in competing tool (opencode) | 5 comments, resolved same day |
| [#3879](https://github.com/badlogic/pi-mono/issues/3879) | deepseek-v4-flash xhigh thinking level missing | Exposes gap between DeepSeek API capabilities and Pi's abstraction layer; opencode-go compatibility fields also absent | 4 comments, 6 upvotes — high engagement |
| [#3942](https://github.com/badlogic/pi-mono/issues/3942) | `pi update --self` fails with npm `--prefix` | Nix/nodejs users hit wall with new self-update feature; path resolution assumes standard global install | 4 comments, still open |
| [#3959](https://github.com/badlogic/pi-mono/issues/3959) | Mistral API 404 errors | Multiple models and API keys affected — suggests provider-side change or routing misconfiguration | 4 comments, closed |
| [#3956](https://github.com/badlogic/pi-mono/issues/3956) | displayName for extension-registered providers | DX gap: built-in providers get human names, extensions show raw IDs; hurts discoverability in `/login` | 3 comments, closed |
| [#3978](https://github.com/badlogic/pi-mono/issues/3978) | `pi config` hardcodes `~/.pi/agent/` path label | Config UI misrepresents actual resource locations when users customize `PI_CODING_AGENT_DIR`; confusing UX | 3 comments, still open |
| [#3989](https://github.com/badlogic/pi-mono/issues/3989) | Mistral Medium 3.5 support | New model release from Mistral; contributor already tested locally, SDK lacks direct support | 3 comments, closed |
| [#3987](https://github.com/badlogic/pi-mono/issues/3987) | Custom fetch hook in StreamOptions | Enterprise/proxy users need HTTP client customization; currently blocked from intercepting requests | 3 comments, closed as "possibly-openclaw-clanker" |
| [#3944](https://github.com/badlogic/pi-mono/issues/3944) | deepseek-v4-flash missing xhigh in `supportsXhigh()` | Follow-up to #3879 — specific function-level bug identified with root cause and patch location | 3 comments, closed |
| [#3926](https://github.com/badlogic/pi-mono/issues/3926) | Followup handler doesn't clear editor when agent idle | Keyboard-driven workflows (Tab-for-followup) break state consistency; parity gap with Codex | 3 comments, closed |

---

## Key PR Progress

| # | PR | Feature / Fix | Status |
|---|-----|-------------|--------|
| [#3973](https://github.com/badlogic/pi-mono/pull/3973) | Auto-recover stale tool-call text responses | DeepSeek-V4-Flash emits XML-like "DSML" instead of structured tool calls; now auto-detects and queues recovery follow-up | **Merged** |
| [#3991](https://github.com/badlogic/pi-mono/pull/3991) | Handle duplicate session entries | `/tree` hangs from duplicate entry IDs; adds persistence tracking and deduplication with regression tests | **Open** (supersedes #3911) |
| [#3915](https://github.com/badlogic/pi-mono/pull/3915) | Run slash commands from inline autocomplete | Cursor CLI-style mid-text command execution; destructive vs. non-destructive command handling | **Merged** |
| [#3955](https://github.com/badlogic/pi-mono/pull/3955) | Report edit access failures correctly | `edit` tool falsely reported "File not found" for permission errors; now returns proper error codes | **Open** |
| [#3868](https://github.com/badlogic/pi-mono/pull/3868) | Migrate syntax highlighting to Shiki | Replaces custom highlighting with `shiki/core`; lazy loading, cached highlighters, theme integration | **Open** |
| [#3968](https://github.com/badlogic/pi-mono/pull/3968) | Expose routed model on openai-completions | Surfaces actual model (e.g. `anthropic/...`) when OpenRouter `auto` routes differently than requested | **Merged** |
| [#3943](https://github.com/badlogic/pi-mono/pull/3943) | Fix handoff context after compaction | `/handoff` extension now builds from canonical session context instead of raw branch messages | **Merged** |
| [#3986](https://github.com/badlogic/pi-mono/pull/3986) | Add Gloo AI as first-class provider | OAuth2 `client_credentials` flow, 22-model catalog, OpenAI-compatible endpoint | **Merged** |
| [#3963](https://github.com/badlogic/pi-mono/pull/3963) | Add `--profile` and `PI_PROFILE` for isolated state | DX wrapper around `PI_CODING_AGENT_DIR`; enables multiple isolated Pi configurations | **Merged** |
| [#3887](https://github.com/badlogic/pi-mono/pull/3887) | Image content support | `ImageContent` in `AssistantMessage`, Google/OpenRouter image models, Flux support via non-tool-call path | **Open** |

---

## Feature Request Trends

1. **Provider ecosystem expansion** — Gloo AI, Xiaomi MiMo, Cloudflare AI Gateway, Mistral Medium 3.5: demand for first-class provider integrations remains strongest theme
2. **Enterprise/self-hosted configuration** — Custom fetch hooks, `!!` syntax for uncached API keys, command-based key retrieval, proxy cost reporting: organizations running Pi behind gateways need more control
3. **Model capability parity** — DeepSeek reasoning effort levels, OpenRouter model freshness, image generation: keeping pace with rapid upstream API evolution
4. **Session/state management** — Profiles for isolation, duplicate entry handling, handoff context integrity: scaling from single-user to multi-project workflows

---

## Developer Pain Points

| Category | Symptoms | Frequency |
|----------|----------|-----------|
| **Self-update fragility** | Fails with bun, npm `--prefix`, system-wide installs, Nix paths | 4+ issues in 24h; new feature (#3680) hitting edge cases across all package managers |
| **TUI input handling** | Double keypress in Alacritty, backspace rate issues in kitty, focus/blur state | 3 terminal-specific bugs; suggests underlying input layer needs platform abstraction review |
| **Edit tool reliability** | Wrong error messages (permissions → "not found"), escaped backtick/emoji matching failures | 2 issues; core editing primitive degrading on edge-case content |
| **Provider/model staleness** | Missing latest OpenRouter models, pricing mismatches, capability flags out of sync | Recurring; manual catalog maintenance not scaling with release velocity |
| **Path/configuration assumptions** | Hardcoded `~/.pi/agent/` labels, config ignoring actual `PI_CODING_AGENT_DIR` | Configuration layer drift from runtime flexibility |

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-04-30

---

## 1. Today's Highlights

The Qwen Code team shipped **v0.15.5** with critical fixes for DeepSeek V4 `reasoning_content` handling and MCP configuration via CLI, while community member @enochday independently root-caused and patched the persistent DeepSeek 400 error that had generated 6+ duplicate issues. Background task infrastructure continues maturing with `task_stop` shell integration, and the review pipeline is expanding toward 9-agent parallel audits.

---

## 2. Releases

### [v0.15.5](https://github.com/QwenLM/qwen-code/releases/tag/v0.15.5) (Stable)
| Change | Author | Impact |
|--------|--------|--------|
| MCP config as CLI | [@eliird](https://github.com/eliird) | First contribution — enables programmatic MCP server management without manual JSON editing |
| Refresh static header on model switch | [@pomelo-nwu](https://github.com/pomelo-nwu) | Fixes stale UI state when switching between models mid-session |
| Wire background shells into `task_stop` tool | [@wenshao](https://github.com/wenshao) | Completes Phase B of background task lifecycle (see [#3634](https://github.com/QwenLM/qwen-code/issues/3634)) |

*Also released: [v0.15.5-preview.0](https://github.com/QwenLM/qwen-code/releases/tag/v0.15.5-preview.0), [v0.15.3-nightly.20260429](https://github.com/QwenLM/qwen-code/releases/tag/v0.15.3-nightly.20260429.2ee014e34), [v0.15.2-preview.0](https://github.com/QwenLM/qwen-code/releases/tag/v0.15.2-preview.0)*

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|--------------|-------------------|
| [#3579](https://github.com/QwenLM/qwen-code/issues/3579) | **DeepSeek API 400 error — `reasoning_content` must be passed back** | Critical interoperability bug affecting all DeepSeek V4 users in thinking mode; caused cascading duplicates | 11 comments, closed after multi-PR fix campaign (#3590, #3682, #3737, #3747) |
| [#3724](https://github.com/QwenLM/qwen-code/issues/3724) | **Root cause found: `reasoning_content` dropped in `converter.ts`** | Community member @enochday performed independent code analysis identifying two specific loss points in `openaiContentGenerator/converter.ts` | 3 comments, praised as exemplary bug report with patch attached |
| [#3740](https://github.com/QwenLM/qwen-code/issues/3740) | **v0.15.5 overwrites custom OpenAI-compatible models in `settings.json`** | Regression breaking user-configured endpoints outside official Coding Plan list | 8 comments, actively triaged; affects enterprise/self-hosted users |
| [#3652](https://github.com/QwenLM/qwen-code/issues/3652) | **Input length exceeds 983,616 token limit** | Hard ceiling on context window causing failures in long conversations without graceful truncation | 7 comments, no resolution yet; user notes repeating context is productivity-killing |
| [#1002](https://github.com/QwenLM/qwen-code/issues/1002) | **Connection problems / streaming timeout** | Long-standing intermittent connectivity issue, difficult to reproduce, affects reliability perception | 10 comments across lifetime; still open since Nov 2025 |
| [#3634](https://github.com/QwenLM/qwen-code/issues/3634) | **Background task management: roadmap and next steps** | Official tracking issue for background agent architecture; defines Phases A-C | 2 comments, referenced by multiple PRs; signals mature engineering process |
| [#3307](https://github.com/QwenLM/qwen-code/issues/3307) | **Alibaba Cloud Coding Plan "temporarily out of stock"** | External dependency causing user frustration; commercial availability bottleneck | 6 comments, closed as external; users seeking alternatives |
| [#1276](https://github.com/QwenLM/qwen-code/issues/1276) | **Standalone native binary (Node-free, cross-platform)** | Enterprise/CI deployment blocker; Node.js runtime introduces TLS/CA and proxy friction | 4 comments, 3 👍; high-value for restricted environments |
| [#740](https://github.com/QwenLM/qwen-code/issues/740) | **Plan mode: allow MCP tools** | Architectural limitation blocking MCP usage in planning phase; forces workflow workarounds | 2 comments, 1 👍; closed indicating partial resolution |
| [#3638](https://github.com/QwenLM/qwen-code/issues/3638) | **Terminal flickering with GLM-5.0** | Rendering regression causing visual artifacts; affects accessibility | 2 comments, closed via [#3721](https://github.com/QwenLM/qwen-code/pull/3721) |

---

## 4. Key PR Progress

| # | PR | Feature / Fix | Status |
|---|-----|-------------|--------|
| [#3749](https://github.com/QwenLM/qwen-code/pull/3749) | **Stop double-wrapping API errors in non-interactive mode** | Eliminates triple-printed, double-wrapped stderr output for `-p` mode; exits cleanly with non-zero code | Open |
| [#3747](https://github.com/QwenLM/qwen-code/pull/3747) | **Replay DeepSeek `reasoning_content` on *all* assistant turns** | Extends prior fix beyond tool-calling turns; closes remaining gaps from #3729 | **Merged** |
| [#3737](https://github.com/QwenLM/qwen-code/pull/3737) | **Preserve `reasoning_content` in rewind, compression, merge paths** | Completes the #3579 fix trilogy; addresses session mutation edge cases | Open |
| [#3754](https://github.com/QwenLM/qwen-code/pull/3754) | **Expand review pipeline + `qwen review` CLI subcommands** | 9 parallel agents (3 personas), iterative reverse audit, CI integration; 6 cross-platform CLI helpers | Open |
| [#3717](https://github.com/QwenLM/qwen-code/pull/3717) | **FileReadCache with short-circuit for unchanged files** | Eliminates redundant file reads in long sessions; targets config/README re-read patterns | Open |
| [#3684](https://github.com/QwenLM/qwen-code/pull/3684) | **Event monitor tool with throttled stdout streaming (Phase C)** | Token-bucket throttling (burst=5, sustain=1/sec) for long-running shell monitoring | Open |
| [#3723](https://github.com/QwenLM/qwen-code/pull/3723) | **Shared L3→L4 permission flow for tool execution unification** | Unifies permission decisions across Interactive, Non-Interactive, and ACP modes | Open |
| [#3739](https://github.com/QwenLM/qwen-code/pull/3739) | **Background agent resume and continuation** | Persisted recovery for interrupted background agents; transcript-first fork resume | Open |
| [#3645](https://github.com/QwenLM/qwen-code/pull/3645) | **Correct model precedence: argv > settings > auth env vars** | Fixes resolution order; `OPENAI_MODEL`/`QWEN_MODEL` no longer unexpectedly override explicit settings | Open |
| [#3752](https://github.com/QwenLM/qwen-code/pull/3752) | **Persist `/directory add` entries to workspace config** | Eliminates ephemeral directory inclusions; writes to `context.includeDirectories` | Open |

---

## 5. Feature Request Trends

| Direction | Evidence | Momentum |
|-----------|----------|----------|
| **Native / standalone distribution** | [#1276](https://github.com/QwenLM/qwen-code/issues/1276) | High — enterprise CI and proxy-restricted environments need Node-free deployment |
| **Configurable plan directories** | [#3548](https://github.com/QwenLM/qwen-code/issues/3548) | Moderate — parity with Gemini CLI / Claude Code requested |
| **Background task / agent orchestration** | [#3634](https://github.com/QwenLM/qwen-code/issues/3634), [#3471](https://github.com/QwenLM/qwen-code/pull/3471), [#3739](https://github.com/QwenLM/qwen-code/pull/3739) | Strong — active development across Phases A-C with official roadmap |
| **Auto-extracted project skills** | [#3673](https://github.com/QwenLM/qwen-code/pull/3673) | Emerging — threshold-triggered skill generation from conversation patterns |
| **Agent Team parallel coordination** | [#2886](https://github.com/QwenLM/qwen-code/pull/2886) | Experimental — gated behind feature flag, seeking validation |
| **Session management commands** | [#3190](https://github.com/QwenLM/qwen-code/pull/3190) | Moderate — named save/load/delete for chat persistence |

---

## 6. Developer Pain Points

| Pain Point | Frequency | Current Mitigation |
|------------|-----------|------------------|
| **DeepSeek V4 `reasoning_content` handling** | 🔥 Critical (6+ issues, 3 PRs) | Multi-wave fix: #3590 → #3682 → #3729 → #3737 → #3747; community validation needed |
| **Model configuration overwritten on startup** | High ([#3740](https://github.com/QwenLM/qwen-code/issues/3740)) | Under active triage; workaround is manual re-configuration |
| **Streaming disconnections / timeouts (~1 min)** | Chronic ([#1002](https://github.com/QwenLM/qwen-code/issues/1002), [#1111](https://github.com/QwenLM/qwen-code/issues/1111), [#2938](https://github.com/QwenLM/qwen-code/issues/2938)) | No clear root cause; possibly infrastructure-related |
| **Terminal rendering / flickering** | Moderate ([#3638](https://github.com/QwenLM/qwen-code/issues/3638), [#3721](https://github.com/QwenLM/qwen-code/pull/3721)) | Partially addressed with bounded SubAgent display |
| **Context window exhaustion (983k limit)** | Moderate ([#3652](https://github.com/QwenLM/qwen-code/issues/3652)) | No automatic truncation; user must manually start new chat |
| **MCP tooling gaps** | Moderate ([#740](https://github.com/QwenLM/qwen-code/issues/740), [#3718](https://github.com/QwenLM/qwen-code/issues/3718), [#1279](https://github.com/QwenLM/qwen-code/pull/1279)) | CLI config landed; add/remove with headers still buggy |

---

*Digest compiled from github.com/QwenLM/qwen-code activity through 2026-04-30 00:00 UTC.*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*