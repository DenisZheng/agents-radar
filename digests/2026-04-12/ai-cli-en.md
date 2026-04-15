# AI CLI Tools Community Digest 2026-04-12

> Generated: 2026-04-12 00:12 UTC | Tools covered: 8

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

 # AI CLI Tools Cross-Ecosystem Analysis — 2026-04-12

## 1. Ecosystem Overview

The AI CLI tooling landscape has matured into a competitive multi-polar market with seven actively developed alternatives. Claude Code and OpenAI Codex lead in raw community engagement and release velocity, while Google Gemini CLI and Qwen Code pursue aggressive feature parity strategies. GitHub Copilot CLI struggles with billing transparency and reliability, whereas smaller players (Kimi, OpenCode, Pi) differentiate through rapid UX iteration and architectural bets (Effect-TS, extension APIs). The sector's primary tension is between **agentic autonomy** (long-running, multi-tool workflows) and **predictable cost control**, with every major tool facing community pressure on both fronts.

---

## 2. Activity Comparison

| Tool | Issues Active (24h) | PRs Active (24h) | Release Status | Notable Activity |
|------|---------------------|------------------|----------------|------------------|
| **Claude Code** | 50 | 7 | No release | `/buddy` removal crisis; model quality debates |
| **OpenAI Codex** | ~15 | ~12 | **v0.120.0 shipped** | Realtime V2, millisecond timestamps, TUI polish |
| **Gemini CLI** | ~10 | ~10 | Nightly (v0.39.0) | UTF-8 fixes, XDG compliance, `/enhance` command |
| **GitHub Copilot CLI** | **35** | **1** | No release | Billing explosion crisis (#2591); limited dev response |
| **Kimi CLI** | ~8 | **8** | No release | Rapid PR velocity: `/delete`, `/loop`, timeout fixes |
| **OpenCode** | ~12 | **10** | No release | Effect-TS migration (6 facade PRs merged) |
| **Pi** | ~10 | **9** | No release | Process leak fixes (90GB RAM bug), model registry hardening |
| **Qwen Code** | **26** | **35** | **v0.14.3-nightly** | Session management PRs, Chinese localization fixes |

---

## 3. Shared Feature Directions

| Requirement | Tools | Specific Needs |
|-------------|-------|--------------|
| **Session lifecycle management** | Kimi (#1783), Qwen (#3093, #3152), OpenCode (#17765) | Delete/rename, reliable resume, duplicate prevention |
| **Timeout configurability** | Kimi (#1761, #1823), Claude Code (implicit in hanging issues) | Approval timeouts, task timeouts, shell command timeouts |
| **MCP/ACP resilience** | Claude Code (#10071, #43789), Gemini (#24246, #25026), Qwen (#3147), OpenCode (#21910) | Reconnection automation, connection health visibility, OAuth token refresh |
| **Billing/cost transparency** | OpenAI Codex (#14593), GitHub Copilot (#2591, #2648), Claude Code (#41158) | Per-session visibility, hard quota stops, token consumption telemetry |
| **Windows platform parity** | OpenCode (#4340, #13984, #16685), Claude Code (#34424, #46529), Gemini (#24202, #25191) | ARM64 support, terminal encoding, session persistence, TUI rendering |
| **"Always allow" permission ergonomics** | OpenAI Codex (#16251), Gemini (#24916), Claude Code (implicit) | Persistent approvals, scoped permissions, reduced flow interruption |
| **Context precision & control** | OpenAI Codex (#17313, #17496), Claude Code (#42796), Qwen (#3109) | Exact percentage indicators, cwd-scoped memory, compression-aware state |

---

## 4. Differentiation Analysis

| Tool | Core Focus | Target User | Technical Approach |
|------|-----------|-------------|------------------|
| **Claude Code** | Companion-oriented UX, subagent orchestration | Full-stack engineers, creative coders | Proprietary closed-source; skills-based architecture; `/buddy` emotional design |
| **OpenAI Codex** | Real-time streaming, large-scale thread management | Enterprise teams, high-volume users | Rust-based performance; Realtime V2; millisecond-precision infrastructure |
| **Gemini CLI** | AST-aware tooling, memory architecture | AI-native developers, Google ecosystem | Maintainer-driven EPICs; tilth/glyph evaluation; global vs. project memory routing |
| **GitHub Copilot CLI** | IDE-adjacent workflow, Copilot subscription leverage | Existing Copilot subscribers, GitHub-centric teams | Thin client to Copilot API; per-request billing; limited local intelligence |
| **Kimi CLI** | Rapid UX iteration, competitive parity | Claude Code migrants, timeout-sensitive workflows | Fast-follow features (`/loop`, `/delete`); configurable timeouts; VSCode integration polish |
| **OpenCode** | Functional programming architecture, protocol flexibility | TypeScript/Effect ecosystem adopters | Effect-TS migration; ACP protocol; OpenTelemetry observability |
| **Pi** | Extension API depth, model registry flexibility | Power users, custom provider integrators | Extension-first architecture; `models.json` customization; process management APIs |
| **Qwen Code** | Chinese market localization, GUI aspirations | Chinese developers, VSCode extension users | i18n depth; multi-platform GUI plans; Qwen model optimization |

---

## 5. Community Momentum & Maturity

| Tier | Tools | Assessment |
|------|-------|------------|
| **High momentum, established** | Claude Code, OpenAI Codex | Largest issue volumes; passionate user bases; occasional trust crises (model degradation, billing) indicate production dependency |
| **High momentum, scaling** | Qwen Code, Kimi CLI | Qwen: 35 PRs in 24h, aggressive Chinese localization; Kimi: 8 PRs addressing exact community requests—responsive but smaller scale |
| **Steady iteration** | Gemini CLI, Pi, OpenCode | Consistent PR velocity; architectural investments (Effect-TS, extension APIs); smaller but engaged communities |
| **Stagnation risk** | GitHub Copilot CLI | 35 issues, 1 PR: high pain-to-response ratio; billing/reliability crises without visible engineering response; dependent on GitHub platform priorities |

**Velocity signals**: Kimi and Qwen show fastest feature-to-PR turnaround (same-day response to `/delete`, `/loop` requests). OpenAI Codex maintains consistent release cadence. Claude Code's community is largest but currently adversarial over feature removals.

---

## 6. Trend Signals

| Trend | Evidence | Strategic Implication |
|-------|----------|----------------------|
| **Agentic workflow cost anxiety** | #14593 (520 comments), #2591 (80-100× quota multiplication), #41158 | Developers treating AI CLI as production infrastructure need predictable economics; "unlimited" tiers creating false expectations |
| **Context as scarce resource** | Exact percentage demands (#17313), compression-aware resume (#3109), remote compaction failures (#14860) | Context window management becoming explicit engineering discipline; tools must expose measurable, controllable boundaries |
| **Platform-native expectations** | Windows ARM64 (#4340), macOS Command key (#2979), XDG compliance (#25181), Ghostty terminal (#25026) | Cross-platform no longer means "works on" but "feels native on"; terminal emulator diversity creating QA burden |
| **Extensibility vs. opinionation tension** | Pi's extension API push, OpenCode's ACP protocol, Claude Code's closed skills | Power users demand customization; vendors resist fragmentation—MCP emerging as uneasy middle ground |
| **Emotional attachment to AI companions** | `/buddy` removal backlash (#45596: 476 upvotes, "No farewell") | Users anthropomorphize tools; feature removals carry relationship-breaking weight beyond functional utility |
| **Post-IPO incentive skepticism** | #43052 ("intentional code sabotage for token consumption/IPO motives") | Economic alignment between vendor and user under scrutiny; transparency demands increasing |

---

*Analysis compiled from 8 community digests covering 2026-04-11 to 2026-04-12 activity.*

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

 # Claude Code Skills Community Highlights Report
**Data as of 2026-04-12 | anthropics/skills**

---

## 1. Top Skills Ranking

| Rank | Skill | PR | Status | Description | Discussion Focus |
|:---|:---|:---|:---|:---|:---|
| 1 | **document-typography** | [#514](https://github.com/anthropics/skills/pull/514) | 🟡 Open | Typographic quality control for AI-generated documents—prevents orphans, widows, and numbering misalignment | Universal pain point; affects every document Claude generates; author argues users rarely ask for good typography but always benefit from it |
| 2 | **frontend-design** | [#210](https://github.com/anthropics/skills/pull/210) | 🟡 Open | Revised guidance for actionable, single-conversation frontend design instructions | Clarity and token efficiency; ensuring instructions are executable within one session |
| 3 | **skill-quality-analyzer + skill-security-analyzer** | [#83](https://github.com/anthropics/skills/pull/83) | 🟡 Open | Meta-skills for evaluating Skill quality (5 dimensions) and security posture | Quality assurance automation for the Skills ecosystem itself |
| 4 | **ODT (OpenDocument)** | [#486](https://github.com/anthropics/skills/pull/486) | 🟡 Open | Create, template-fill, and parse ODT files to HTML—ISO standard ZIP/XML format | Enterprise document workflows; LibreOffice/OnlyOffice integration |
| 5 | **DOCX tracked changes fix** | [#541](https://github.com/anthropics/skills/pull/541) | 🟡 Open | Fixes document corruption from `w:id` collisions between tracked changes and bookmarks | Critical bugfix for OOXML shared ID space handling |
| 6 | **CONTRIBUTING.md** | [#509](https://github.com/anthropics/skills/pull/509) | 🟡 Open | Community health documentation—addresses 25% GitHub community health score | Governance infrastructure; closes [#452](https://github.com/anthropics/skills/issues/452) |
| 7 | **skill-creator validation** | [#539](https://github.com/anthropics/skills/pull/539) | 🟡 Open | Pre-parse YAML validation to catch unquoted descriptions with `:` characters | Developer experience; prevents silent parsing failures |
| 8 | **SAP-RPT-1-OSS predictor** | [#181](https://github.com/anthropics/skills/pull/181) | 🟡 Open | SAP's open-source tabular foundation model for predictive analytics on SAP business data | Enterprise ERP integration; Apache 2.0 model from SAP TechEd 2025 |

---

## 2. Community Demand Trends

From high-engagement Issues, the community's most-anticipated Skill directions:

| Trend | Evidence | Implication |
|:---|:---|:---|
| **Enterprise governance & safety** | [#412](https://github.com/anthropics/skills/issues/412) Agent Governance (4 comments), [#492](https://github.com/anthropics/skills/issues/492) trust boundary concerns | Skills for policy enforcement, threat detection, audit trails in multi-agent systems |
| **Cross-session persistence** | [#522](https://github.com/anthropics/skills/pull/522) plan-task skill (open), [#154](https://github.com/anthropics/skills/pull/154) shodh-memory | State management across Claude Code sessions is a core gap |
| **Testing & quality automation** | [#723](https://github.com/anthropics/skills/pull/723) testing-patterns, [#659](https://github.com/anthropics/skills/pull/659) quality-playbook | Revival of systematic quality engineering via AI |
| **Native platform automation** | [#806](https://github.com/anthropics/skills/pull/806) sensory (macOS AppleScript), [#16](https://github.com/anthropics/skills/issues/16) MCP exposure | Moving beyond screenshot-based computer use to native APIs |
| **Payment & micropayment integration** | [#374](https://github.com/anthropics/skills/pull/374) x402 BSV skill | AI-to-AI economic transactions for service composition |
| **Org-wide skill distribution** | [#228](https://github.com/anthropics/skills/issues/228) (3 comments, 4 👍), [#189](https://github.com/anthropics/skills/issues/189) duplicate skills | Enterprise sharing infrastructure; namespace management |

---

## 3. High-Potential Pending Skills

Active PRs with demonstrated community interest, likely to merge soon:

| Skill | PR | Why It May Land |
|:---|:---|:---|
| **plan-task** | [#522](https://github.com/anthropics/skills/pull/522) | Addresses fundamental session-state limitation; clean Markdown-based persistence |
| **testing-patterns** | [#723](https://github.com/anthropics/skills/pull/723) | Comprehensive coverage (Testing Trophy → E2E); fills critical gap in Claude's dev workflow guidance |
| **quality-playbook** | [#659](https://github.com/anthropics/skills/pull/659) | Unique "requirements-first" testing approach; author has strong quality engineering credentials |
| **sensory (macOS automation)** | [#806](https://github.com/anthropics/skills/pull/806) | Two-tier permission model addresses security concerns; high utility for Mac-based developers |
| **codebase-inventory-audit** | [#147](https://github.com/anthropics/skills/pull/147) | Systematic 10-step technical debt assessment; produces CODEBASE-STATUS.md as single source of truth |

---

## 4. Skills Ecosystem Insight

> **The community's most concentrated demand is for stateful, enterprise-grade workflow orchestration—skills that persist context across sessions, enforce governance boundaries, and integrate with native platform APIs rather than relying on brittle screenshot-based automation.**

This represents a maturation from "single-task capabilities" toward "reliable infrastructure for production AI agent systems."

---

 # Claude Code Community Digest — 2026-04-12

## Today's Highlights

The community is reeling from the abrupt removal of the beloved `/buddy` skill in v2.1.97, sparking a consolidated plea with 476 upvotes and 128 comments. Meanwhile, a highly engaged debate on model quality continues with 289 comments discussing whether February updates degraded Claude's performance on complex engineering tasks. No new releases were published in the last 24 hours.

---

## Releases

*No new releases in the last 24 hours.*

---

## Hot Issues

| Issue | Why It Matters | Community Reaction |
|-------|--------------|-------------------|
| [#42796 — Model degradation in Feb updates](https://github.com/anthropics/claude-code/issues/42796) | **CLOSED** — Massive thread (289 comments, 1,372 👍) debating whether Claude Code became "unusable for complex engineering tasks" after February model updates. Represents ongoing tension between Anthropic's iteration pace and power user expectations. | Intensely polarized; users report conflicting experiences with some claiming recovery and others persistent issues |
| [#45596 — Bring Back Buddy](https://github.com/anthropics/claude-code/issues/45596) | **OPEN** — The `/buddy` skill vanished without changelog notice in v2.1.97. Thousands of developers lost a companion feature integrated into daily workflows. Now the top open issue by engagement. | 476 upvotes, emotionally charged ("No farewell"); community consolidating demands in single thread |
| [#26224 — Hanging/freezing for 5-20+ minutes](https://github.com/anthropics/claude-code/issues/26224) | **OPEN** — Persistent performance regression causing complete workflow interruption. Affects reliability for production use cases. | 71 comments, 96 upvotes; users sharing reproduction patterns, no definitive fix confirmed |
| [#41924 — /buddy command not executing](https://github.com/anthropics/claude-code/issues/41924) | **CLOSED** — Precursor to #45596; early indicator that Buddy functionality was degrading before removal. | Minimal engagement (2 👍), suggesting sudden removal surprised users who hadn't experienced bugs |
| [#40283 — Cowork Dispatch not responding](https://github.com/anthropics/claude-code/issues/40283) | **OPEN** — macOS-specific subagent orchestration failure; blocks multi-agent workflows | 23 comments, ongoing troubleshooting |
| [#10071 — MCP reconnection automation](https://github.com/anthropics/claude-code/issues/10071) | **OPEN** — Long-standing request (since Oct 2025) for resilient MCP handling; critical for production MCP integrations | 34 upvotes, 22 comments; users building workarounds |
| [#43052 — Alleged intentional code sabotage](https://github.com/anthropics/claude-code/issues/43052) | **OPEN** — Extreme user frustration alleging Opus 4.6 "purposely sabotaging code" for token consumption/IPO motives. Flagged as invalid but symptomatic of trust erosion. | 16 comments, 3 upvotes; mostly community pushback on tone |
| [#41158 — Excessive token consumption](https://github.com/anthropics/claude-code/issues/41158) | **OPEN** — Cost control concerns with Opus 4.6; overlaps with #43052's economic anxiety | 13 comments, 5 upvotes |
| [#43789 — MCP OAuth token expiration](https://github.com/anthropics/claude-code/issues/43789) | **OPEN** — Breaks automated pipelines; requires manual `/mcp` reconnect multiple times | 3 comments; pain point for CI/CD workflows |
| [#46797 — Subagent code integration failures](https://github.com/anthropics/claude-code/issues/46797) | **OPEN** — Fresh report (Apr 11) documenting systematic failure mode: subagents "invent new patterns instead of copying existing prior art" | 2 comments; early but describes architectural limitation |

---

## Key PR Progress

| PR | Description | Status |
|----|-------------|--------|
| [#46732 — Enhance README documentation](https://github.com/anthropics/claude-code/pull/46732) | Documentation improvements; contributor-driven clarity enhancements | Open |
| [#46095 — Claude Mythos operating contract for Veriflow immune system](https://github.com/anthropics/claude-code/pull/46095) | Adds "operating contract" framework for AI safety/alignment; duplicate of closed #45721 with author note "Idk what I'm doing" | Open |
| [#46620 — Rafid Prompt Tool](https://github.com/anthropics/claude-code/pull/46620) | Complete Next.js application for AI prompt optimization with Quick Optimise and Deep Build modes | Open |
| [#41447 — Open source Claude Code](https://github.com/anthropics/claude-code/pull/41447) | Community-driven effort to open-source the codebase; references 5 related issues | Open |
| [#45721 — Claude Mythos operating contract](https://github.com/anthropics/claude-code/pull/45721) | **CLOSED** — Precedent attempt at safety framework; author withdrew | Closed |
| [#28714 — Automated issue triage and weekly digest](https://github.com/anthropics/claude-code/pull/28714) | Cost-efficient automation using Haiku 4.5 ($0.001/issue) and Sonnet 4.6 ($0.05/week); includes `ANTHROPIC_BASE_URL` override | Open |
| [#14130 — Update code-review plugin](https://github.com/anthropics/claude-code/pull/14130) | **CLOSED** — Optimizations for claude-code-action: reduced agents (4→2), removed validation pass, added inline committable suggestions | Closed |

---

## Feature Request Trends

**1. Companion/UX Features**
- `/buddy` restoration dominates (#45596); users want persistent ambient assistance, not just task-oriented interaction

**2. Resilient Infrastructure**
- MCP reconnection (#10071, #43789) and automated recovery patterns are repeatedly requested for production reliability

**3. Cost Transparency & Control**
- Telemetry enhancements (#46790), token consumption visibility, and plan tier documentation (#40124) indicate enterprise scaling concerns

**4. Multi-Project Session Management**
- Cross-project session isolation (#46529) and automatic context detection (#46791) for developers working across repositories

**5. Subagent Orchestration**
- Better integration between parent/child agents (#46797) — current architecture produces "siloed" code that doesn't match existing patterns

---

## Developer Pain Points

| Category | Manifestation | Frequency |
|----------|-------------|-----------|
| **Silent Feature Removal** | `/buddy` disappearance without changelog notice (#45596) | Critical incident |
| **Model Quality Volatility** | Perceived degradation in complex reasoning; "brain fog" reports (#42796, #43286) | Ongoing, cyclical |
| **Authentication Fragility** | MCP OAuth tokens expiring, breaking automation (#43789, #10071) | High-frequency operational issue |
| **Cost Unpredictability** | Opus 4.6 token consumption spikes; "extra usage" errors on Max plan (#41158, #44117) | Recurring financial concern |
| **Windows-Second Experience** | Multiple Windows-specific bugs (#34424, #46529, #46711, #46789) suggesting platform parity gaps | Persistent |
| **Plan Mode Erosion** | Reported bypassing of intended guardrails (#42143) | Trust/comprehension issue |

---

*Digest compiled from 50 issues and 7 PRs updated 2026-04-11 to 2026-04-12.*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

 # OpenAI Codex Community Digest — 2026-04-12

## Today's Highlights

The Rust-based Codex CLI hits **v0.120.0** with significant Realtime V2 improvements, including background agent progress streaming and queued follow-up responses. Meanwhile, the team is actively shipping quality-of-life fixes: TUI hook visibility got clearer, stale `/ps` entries now clear properly on `/stop`, and the `codex-tui` binary regained its session resume hint. On the infrastructure side, millisecond-precision timestamps and bidirectional pagination APIs landed to support larger-scale thread management.

---

## Releases

| Version | Highlights |
|---------|-----------|
| **[rust-v0.120.0](https://github.com/openai/codex/releases/tag/rust-v0.120.0)** | Realtime V2 streams background agent progress while work runs; hook activity in TUI separated into live vs. completed for easier scanning |
| rust-v0.121.0-alpha.2 / alpha.1 | Early alpha builds; no detailed notes |
| rust-v0.120.0-alpha.3 | Pre-release stabilization |

---

## Hot Issues

| Issue | Why It Matters | Community Signal |
|-------|--------------|----------------|
| [#14593](https://github.com/openai/codex/issues/14593) **Burning tokens very fast** | 520 comments, 195 👍 — the highest-engagement issue in the repo. Users report rapid token consumption under Business/Pro tiers, suggesting pricing transparency or rate-limit UX problems. | Frustration; demands for usage visibility |
| [#14860](https://github.com/openai/codex/issues/14860) **Error running remote compact task** | Remote context compaction failures block long-running sessions. Affects Linux users on gpt-5.4; 26 comments indicate reproducibility. | Blocking workflow; needs reliability fix |
| [#10070](https://github.com/openai/codex/issues/10070) **Timeout waiting for child process to exit** | Persistent Windows/WSL tool-call hangs dating to v0.92.0; 20 comments show this is a long-tail stability issue. | Recurring pain; platform-specific |
| [#17313](https://github.com/openai/codex/issues/17313) **New progress bar indicator for context remaining is a downgrade** | UX regression: visual meter replaces precise percentage, hurting power users who need exact context budgeting. | 14 👍; clear product feedback |
| [#16857](https://github.com/openai/codex/issues/16857) **High GPU usage while "thinking" due to tiny animation** | macOS app burns GPU on a decorative spinner; performance vs. polish trade-off criticized. | 9 👍; resource-conscious users vocal |
| [#17354](https://github.com/openai/codex/issues/17354) **Thread history wiped in app, present in CLI** | Data loss scare: 2-3 months of history disappeared from App but survives in CLI, eroding trust in sync layer. | Serious; needs investigation |
| [#17496](https://github.com/openai/codex/issues/17496) **Memory read path ignores cwd, injects global memory** | Architecture bug: memory writes respect project boundaries but reads don't, causing context pollution across projects. | Subtle but impactful; correctness issue |
| [#17480](https://github.com/openai/codex/issues/17480) **Interrupted commentary-heavy streams loop visible retries** | Agent retry logic surfaces noisy commentary without progress, wasting tokens and user patience. | Quality-of-life; retry UX |
| [#8852](https://github.com/openai/codex/issues/8852) **Windows TUI missing shaded background for user input** | Visual accessibility gap on Windows PowerShell vs. macOS/Linux; 6 👍, long-standing. | Platform parity request |
| [#15736](https://github.com/openai/codex/issues/15736) **Improve user message contrast in CLI TUI** | Terminal theme variability makes user/assistant messages indistinguishable; 2 👍 but clear UX gap. | Accessibility polish |

---

## Key PR Progress

| PR | Feature / Fix | Status |
|----|-------------|--------|
| [#17499](https://github.com/openai/codex/pull/17499) **Clear-context plan implementation** | Plan Mode can now discard exploratory context and start implementation fresh — critical for complex multi-step workflows | Open |
| [#17472](https://github.com/openai/codex/pull/17472) **Show current GitHub PR in TUI status** | Surfaces PR context in status line via `gh` CLI; reduces context-switching for branch-based work | Open |
| [#17489](https://github.com/openai/codex/pull/17489) **Millisecond-precision unique timestamps** | Enables guaranteed-unique cursors for pagination; foundational for large thread UIs | Open |
| [#17415](https://github.com/openai/codex/pull/17415) **Restore codex-tui resume hint** | Fixes regression where standalone TUI omitted session resume instructions | **Merged** |
| [#17416](https://github.com/openai/codex/pull/17416) **Clear /ps after /stop** | Eliminates stale background process entries in TUI footer | **Merged** |
| [#17404](https://github.com/openai/codex/pull/17404) **Register all MCP tools with namespace** | Unifies deferred vs. direct MCP tool registration; fixes catalog access inconsistency | Open |
| [#16251](https://github.com/openai/codex/pull/16251) **"Always allow" for request_permissions_tool** | Persists permission choices across turns, reducing repetitive prompts | Open |
| [#16387](https://github.com/openai/codex/pull/16387) **ConfigEdit permission profile merge** | Backend support for permission profile merging, unblocking "Always Allow" flows | Open |
| [#15979](https://github.com/openai/codex/pull/15979) **Managed deny-read patterns** | Adds configurable filesystem sandbox deny patterns through config stack | Open |
| [#17266](https://github.com/openai/codex/pull/17266) **Improve hook status rendering** | Reduces TUI noise by keeping transient hook activity out of permanent history unless output exists | **Merged** |

---

## Feature Request Trends

1. **Context Management Precision** — Users want exact percentage indicators back (#17313), better cwd-scoped memory (#17496), and reliable remote compaction (#14860, #13271). The theme: *trustworthy, measurable context boundaries*.

2. **Permission & Approval Ergonomics** — Heavy demand for "Always Allow" persistence (#16251, #17449), clearer sandbox denials (#15979 stack), and reduced approval friction without sacrificing security.

3. **Multi-Agent Observability** — Requests for thread/agent attribution in action rows (#11815), semantic narrative views over raw logs (#13544), and parallel solution evaluation ("multiverse" #13509) signal maturation toward orchestrated workflows.

4. **Cross-Platform Polish** — Windows TUI gaps (#8852, #10070), GPU efficiency (#16857), and App/CLI sync reliability (#17354) show platform equity remains unfinished.

---

## Developer Pain Points

| Category | Symptoms | Root Tensions |
|----------|----------|---------------|
| **Token Economics** | #14593's 520-comment firestorm, fast-burn reports | Opacity in usage; perceived misalignment between cost and value delivered |
| **Context Reliability** | Remote compaction failures, memory scope leaks, history sync gaps | Distributed state (App/CLI/cloud) with inconsistent consistency guarantees |
| **TUI/UX Friction** | Progress bar precision loss, contrast issues, hook noise | Rapid iteration introducing regressions; power-user vs. novice UX splits |
| **Windows Second-Class** | Rendering gaps, process hangs, WSL edge cases | Resource prioritization toward macOS/Linux in development |
| **Agent Retry Loops** | #17480's commentary-heavy retries, #16857's GPU spinner | Retry logic optimized for recovery, not user experience or resource efficiency |

---

*Digest compiled from github.com/openai/codex activity 2026-04-11 to 2026-04-12.*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-04-12

## 1. Today's Highlights

The team shipped a nightly build with critical UTF-8 decoding fixes for API error messages, while community momentum surged around XDG directory support and prompt enhancement workflows. Agent architecture discussions dominated maintainer channels, with AST-aware tooling and memory routing emerging as major investment areas.

---

## 2. Releases

**v0.39.0-nightly.20260411.0957f7d3e** — [Release](https://github.com/google-gemini/gemini-cli/releases/tag/v0.39.0-nightly.20260411.0957f7d3e)

| Change | Author | Impact |
|--------|--------|--------|
| Fix UTF-8 decoding in API error messages | @kimjune01 | Resolves garbled multi-byte character output in error traces |
| Automated documentation audit | @g-samroberts | Infrastructure for keeping docs synchronized |
| UI debugging option | — | Adds observability for terminal rendering issues |

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Signal |
|---|-------|--------------|----------------|
| [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) | AST-aware file reads, search, and mapping | Foundation for precise code navigation; reduces token waste from misaligned reads | 4 comments, maintainer EPIC |
| [#24916](https://github.com/google-gemini/gemini-cli/issues/24916) | Persistent permission prompts on same file | UX friction breaking flow state; "allow for all future sessions" failing | 3 comments, security-tagged |
| [#25171](https://github.com/google-gemini/gemini-cli/issues/25171) | Cannot change response text color (v0.37.1) | Accessibility regression; green-on-black workflows broken | 2 comments, possible duplicate |
| [#24915](https://github.com/google-gemini/gemini-cli/issues/24915) | Thick black borders in prompt bar | Visual polish issue affecting terminal real estate | 1 comment, UI-related |
| [#24202](https://github.com/google-gemini/gemini-cli/issues/24202) | Scrambled text over SSH | Remote development blocker for cloudtop workflows | 1 comment, Windows→gLinux path |
| [#23582](https://github.com/google-gemini/gemini-cli/issues/23582) | Subagents unaware of active approval modes | Architectural gap causing policy/tool definition conflicts | 1 comment, agent core |
| [#22819](https://github.com/google-gemini/gemini-cli/issues/22819) | Memory routing: global vs. project | Critical for personalization without codebase pollution | 1 comment, 2 👍 |
| [#25054](https://github.com/google-gemini/gemini-cli/issues/25054) | `exit_plan_mode` hook regression (PR #22737) | Breaking change for documented GCS archiving pattern | 0 comments, P1 priority |
| [#24246](https://github.com/google-gemini/gemini-cli/issues/24246) | 400 error with >128 tools | Scalability ceiling for complex MCP setups | 0 comments, agent infra |
| [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) | Subagent recovery hides MAX_TURNS interruption | Silent failures corrupting execution tracking | 1 comment, 2 👍 |

---

## 4. Key PR Progress

| # | PR | Feature/Fix | Status |
|---|-----|-------------|--------|
| [#25181](https://github.com/google-gemini/gemini-cli/pull/25181) | XDG config/cache/tmp directories with overrides | Proper freedesktop.org compliance; deprecates `GEMINI_HOME` | Open |
| [#25135](https://github.com/google-gemini/gemini-cli/pull/25135) | `/enhance` command for prompt refinement | LLM-assisted prompt engineering using conversation context | Open |
| [#25186](https://github.com/google-gemini/gemini-cli/pull/25186) | Native `ToolDisplay` property migration | Fixes UI rendering predictability, deprecates `returnDisplay` | Open |
| [#25160](https://github.com/google-gemini/gemini-cli/pull/25160) | Hierarchical `.env` file loading | Mirrors `settings.json` multi-scope behavior | Open |
| [#25191](https://github.com/google-gemini/gemini-cli/pull/25191) | Fix `isBinary()` false positives in PTY mode | Resolves Windows `run_shell_command` empty output | Open |
| [#25187](https://github.com/google-gemini/gemini-cli/pull/25187) | Retry OpenSSL 3.x SSL errors during streaming | Fixes `ERR_SSL_SSL/TLS_ALERT_BAD_RECORD_MAC` stalls | Open |
| [#25026](https://github.com/google-gemini/gemini-cli/pull/25026) | Ghostty/raw-mode OAuth cancellation fix | Unblocks Ghostty/VS Code WSL terminal auth flows | Open |
| [#24685](https://github.com/google-gemini/gemini-cli/pull/24685) | Fix false positive binary detection for U+FFFD | Corrects Rust source file handling | Open |
| [#21523](https://github.com/google-gemini/gemini-cli/pull/21523) | Enter key selection in `/resume` search | UX fix for session restoration workflow | Open |
| [#15504](https://github.com/google-gemini/gemini-cli/pull/15504) | GitHub colorblind themes (protanopia/deuteranopia) | Accessibility from Primer design system | Open |

---

## 5. Feature Request Trends

| Direction | Evidence | Momentum |
|-----------|----------|----------|
| **AST-aware tooling** | #22745, #22746 | High — maintainer EPIC with tool evaluation (tilth/glyph) |
| **Memory/personalization architecture** | #22819, #22809 | High — global vs. project scoping, proactive write triggers |
| **XDG/base directory compliance** | #25181 | Medium — community PR addressing long-standing Linux convention |
| **Prompt engineering assistance** | #25135 | Medium — `/enhance` command for iterative refinement |
| **Theme/accessibility expansion** | #15504, #18753, #25171 | Medium — colorblind support, custom light/dark pairs, color regression fixes |
| **MCP/tool ecosystem scaling** | #24246, #25026 | Medium — >128 tool handling, HTTP method flexibility |

---

## 6. Developer Pain Points

| Pain Point | Manifestations | Severity |
|------------|---------------|----------|
| **Permission fatigue** | #24916 (re-prompting), #23582 (approval mode awareness) | High — breaks autonomous workflows |
| **Terminal environment fragility** | #24202 (SSH), #25191 (PTY), #24935 (external editor corruption), #24917 (React #185) | High — rendering stack instability across contexts |
| **Plan mode regressions** | #25054 (hook breaking change), #25042 (plan content visibility) | Medium — documented patterns failing |
| **Subagent observability gaps** | #22323 (hidden MAX_TURNS), #23571 (tmp script sprawl), #23897 (rejection handling) | Medium — debugging distributed agent execution |
| **Configuration discoverability** | #25160 (.env hierarchy), #25181 (XDG migration) | Low-Medium — power-user ergonomics |

---

*Digest compiled from [google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli) activity through 2026-04-12.*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-04-12

---

## 1. Today's Highlights

No new releases dropped in the last 24 hours, but community activity remains intense with **35 issues updated**, revealing critical pain points around **request quota consumption**, **API reliability**, and **session management**. The most heated discussion centers on [#2591](https://github.com/github/copilot-cli/issues/2591), where a single user session burned through 80-100 premium requests due to per-tool-invocation billing—sparking urgent calls for billing transparency fixes.

---

## 2. Releases

*No new releases in the last 24 hours.*

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|--------------|------------------|
| [#2591](https://github.com/github/copilot-cli/issues/2591) | Single session → infinite premium requests consumed per tool invocation | **Critical billing bug**: Agentic workflows with multiple tool calls are economically unusable; users report 80-100× request multiplication | 18 comments, 9 👍; users demanding immediate triage and quota refunds |
| [#1274](https://github.com/github/copilot-cli/issues/1274) | CLI constantly getting 400 errors for invalid request body | **Blocking reliability issue**: 95% failure rate on code review workflows; unclear if client or server-side | 17 comments, 7 👍; debug logs shared, awaiting GitHub response |
| [#476](https://github.com/github/copilot-cli/issues/476) | Feature request: `Alt+V` to paste image from clipboard | **UX parity gap**: Claude Code has this; Windows users especially disadvantaged for visual debugging | 12 comments, 57 👍; **closed**—likely implemented or merged |
| [#1857](https://github.com/github/copilot-cli/issues/1857) | Allow users to cancel or remove enqueued messages | **Workflow control gap**: `Ctrl+Q` queue is append-only, causing unwanted auto-execution | 6 comments, 13 👍; strong feature request momentum |
| [#2583](https://github.com/github/copilot-cli/issues/2583) | `copilot update` command broken since 1.0.17 | **Infrastructure regression**: Auto-update mechanism failing across platforms | 6 comments; users manually falling back to `winget`/`brew` |
| [#853](https://github.com/github/copilot-cli/issues/853) | `Ctrl+L` clears conversation instead of just screen | **Muscle memory violation**: Violates POSIX terminal conventions | 6 comments; **closed**—fix likely shipped |
| [#892](https://github.com/github/copilot-cli/issues/892) | Add sandbox mode to restrict file access | **Security hardening**: 30 👍 shows enterprise demand for workspace-boundary enforcement | 5 comments, 30 👍; flagged `needs-human` for complex implementation |
| [#2408](https://github.com/github/copilot-cli/issues/2408) | Issues auto-updating CLI | **Update reliability**: Multiple sessions required to reach latest version | 5 comments, 3 👍; suggests update check race condition |
| [#567](https://github.com/github/copilot-cli/issues/567) | Custom instructions truncated at startup | **Context window bug**: ~15 line hard limit breaks agent customization | 5 comments; **closed**—workaround documented |
| [#2637](https://github.com/github/copilot-cli/issues/2637) | BYOK not working in Copilot CLI? | **Enterprise flexibility**: z.ai integration failing with model name mapping errors | 2 comments; early investigation stage |

---

## 4. Key PR Progress

Only **1 PR** updated in the last 24 hours:

| # | PR | Description | Status |
|---|-----|-------------|--------|
| [#2565](https://github.com/github/copilot-cli/pull/2565) | install: guard against duplicate PATH entries on reinstall | Fixes shell profile pollution when installer runs multiple times without restart; switches from `command -v` check to explicit profile parsing | Open, awaiting review |

*Limited PR activity suggests either release freeze or focus on internal stabilization.*

---

## 5. Feature Request Trends

**Emerging patterns from 35 updated issues:**

| Trend | Evidence | Implication |
|-------|----------|-------------|
| **Billing transparency & control** | [#2591](https://github.com/github/copilot-cli/issues/2591), [#2648](https://github.com/github/copilot-cli/issues/2648) | Users need per-session request visibility and quota hard-stops |
| **Input/UX refinements** | [#476](https://github.com/github/copilot-cli/issues/476), [#2644](https://github.com/github/copilot-cli/issues/2644), [#2529](https://github.com/github/copilot-cli/issues/2529) | TUI parity with Claude Code: image paste, text selection, stable input positioning |
| **Session management** | [#1857](https://github.com/github/copilot-cli/issues/1857), [#2649](https://github.com/github/copilot-cli/issues/2649), [#2650](https://github.com/github/copilot-cli/issues/2650) | Queue control, resume reliability, and user notification for blocking prompts |
| **Security boundaries** | [#892](https://github.com/github/copilot-cli/issues/892) | Enterprise sandboxing for filesystem access |
| **Extensibility & observability** | [#2646](https://github.com/github/copilot-cli/issues/2646), [#2645](https://github.com/github/copilot-cli/issues/2645), [#1900](https://github.com/github/copilot-cli/issues/1900) | Multi-agent model visibility, streaming deltas, agent turn visualization |
| **BYOK/Provider flexibility** | [#2637](https://github.com/github/copilot-cli/issues/2637) | Third-party API endpoint support needs polish |

---

## 6. Developer Pain Points

**High-frequency frustrations:**

1. **Unpredictable billing explosion** — [#2591](https://github.com/github/copilot-cli/issues/2591) and [#2648](https://github.com/github/copilot-cli/issues/2648) reveal agentic workflows can silently consume 100× expected quota; no real-time counter or circuit-breaker exists.

2. **Flaky API layer** — [#1274](https://github.com/github/copilot-cli/issues/1274) and [#2641](https://github.com/github/copilot-cli/issues/2641) show persistent 400 errors and transient retry loops breaking trust in production use.

3. **Broken update mechanism** — [#2583](https://github.com/github/copilot-cli/issues/2583) and [#2408](https://github.com/github/copilot-cli/issues/2408) indicate the self-update path has regressed; users manually managing versions.

4. **Session corruption & resume failures** — [#2649](https://github.com/github/copilot-cli/issues/2649) (JSON parsing crash), [#2639](https://github.com/github/copilot-cli/issues/2639) (EPIPE on shutdown) suggest event persistence layer needs hardening.

5. **Hook system limitations** — [#2643](https://github.com/github/copilot-cli/issues/2643), [#2647](https://github.com/github/copilot-cli/issues/2647) show `preToolUse` hooks cannot silently rewrite commands or feed back to agent context—limiting automation use cases.

6. **Missing TUI affordances** — No Shift+select, no image paste, jumping input box—terminal UX lags behind competitors.

---

*Digest compiled from github.com/github/copilot-cli activity 2026-04-11.*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

 # Kimi Code CLI Community Digest — 2026-04-12

## 1. Today's Highlights

The community saw **8 new PRs opened in 24 hours**, with a clear focus on closing long-standing UX gaps: `/delete` for session management, configurable approval timeouts, and `/loop` for scheduled automation. Notably, PR #1841 directly addresses Issue #1752's exact-match completion bug, while PR #1838 fixes the VSCode extension's premature submission problem (#1830) — both demonstrating rapid response to interface friction.

---

## 2. Releases

*No releases in the last 24 hours.*

---

## 3. Hot Issues

| Issue | Why It Matters | Community Signal |
|-------|--------------|----------------|
| [#1783](https://github.com/MoonshotAI/kimi-cli/issues/1783) **/delete command for sessions** | Manual `~/.kimi/sessions/` cleanup is error-prone and poor UX for sensitive data removal | 3 comments, active discussion on alias naming |
| [#1752](https://github.com/MoonshotAI/kimi-cli/issues/1752) **Exact-match slash completion broken** | Blocks power users who know exact commands; breaks muscle memory | 2 comments, confirmed behavior |
| [#1761](https://github.com/MoonshotAI/kimi-cli/issues/1761) **Task timeout parameters ignored** | Breaks long-running automation workflows; regression in v1.30 | 1 comment, production impact |
| [#1830](https://github.com/MoonshotAI/kimi-cli/issues/1830) **VSCode: can't use /skills before typing** | Critical IDE integration bug; blocks skill discovery | 1 comment, screenshot evidence |
| [#1823](https://github.com/MoonshotAI/kimi-cli/issues/1823) **Configurable approval timeout** | 5-minute hard limit interrupts complex review workflows | 👍 1, enterprise-relevant |
| [#1835](https://github.com/MoonshotAI/kimi-cli/issues/1835) **SetTodoList storm persists in 1.31.0** | Regression/ongoing stability issue with tool loop behavior | Fresh report, needs triage |
| [#1833](https://github.com/MoonshotAI/kimi-cli/issues/1833) **/loop command (Claude Code parity)** | Competitive feature gap for scheduled monitoring tasks | Just opened, already has PR |

---

## 4. Key PR Progress

| PR | Feature/Fix | Technical Note |
|----|-------------|--------------|
| [#1843](https://github.com/MoonshotAI/kimi-cli/pull/1843) **MCP tool output truncation** | 100K char budget for MCP results; prevents 500KB+ DOM/base64 context overflow | Catches `ValueError` for unsupported content types |
| [#1842](https://github.com/MoonshotAI/kimi-cli/pull/1842) **Docs sync for new features** | Custom headers, `ReadMediaFile`, `SetTodoList` query/clear modes, sensitive file filtering | Wire protocol updates included |
| [#1841](https://github.com/MoonshotAI/kimi-cli/pull/1841) **Fix exact-match slash completion** | Removes early-return in `SlashCommandCompleter`; `/editor` now shows menu | Test coverage added |
| [#1840](https://github.com/MoonshotAI/kimi-cli/pull/1840) **Normalize `timeout_s` alias** | Shell/ACP tools accept `timeout_s`; rejects `timeout_ms`/`timeoutSeconds` with clear errors | Conflict validation for dual specification |
| [#1839](https://github.com/MoonshotAI/kimi-cli/pull/1839) **`/delete` session command** | Implements #1783; `/remove` alias; blocks deletion of active session | Safety-first design |
| [#1838](https://github.com/MoonshotAI/kimi-cli/pull/1838) **Fix premature /skill submission** | Prevents immediate submit when selecting `/skill:*` without task text | VSCode extension fix |
| [#1837](https://github.com/MoonshotAI/kimi-cli/pull/1837) **Configurable approval timeout** | `approval.timeout_s` in config; `0` = unlimited; `None` = default 300s | Backward compatible |
| [#1836](https://github.com/MoonshotAI/kimi-cli/pull/1836) **YOLO plan review semantics** | Separates interactive feedback from auto-approval; preserves `AskUserQuestion` in shell mode | Print-mode docs clarified |
| [#1834](https://github.com/MoonshotAI/kimi-cli/pull/1834) **`/loop` scheduled execution** | Claude Code parity; interval + prompt repetition in same session | `5m`, `1h` syntax; skill support |
| [#1709](https://github.com/MoonshotAI/kimi-cli/pull/1709) **Tab-expanded diff highlights** | Aligns inline highlight offsets with tab-expanded text | Long-running fix for display accuracy |

---

## 5. Feature Request Trends

| Direction | Evidence | Momentum |
|-----------|----------|----------|
| **Session lifecycle management** | #1783 + PR #1839 | High — merged implementation pending |
| **Timeout configurability** | #1761, #1823 + PRs #1837, #1840 | High — shell, approval, and task timeouts all addressed |
| **Scheduled/looping automation** | #1833 + PR #1834 | Emerging — Claude Code competitive parity |
| **IDE integration polish** | #1830, #1752 + PRs #1838, #1841 | Active — VSCode and completion UX fixes |
| **MCP ecosystem robustness** | #1843 | Steady — output handling, content type safety |

---

## 6. Developer Pain Points

| Pain Point | Manifestation | Resolution Status |
|------------|-------------|-------------------|
| **Timeout rigidity** | Hardcoded 300s approval limit, ignored task timeouts | PRs #1837, #1840 in review; #1761 needs verification |
| **Session hygiene** | No native deletion, manual filesystem traversal | PR #1839 ready |
| **Completion UX inconsistency** | Exact matches fail, skills submit prematurely | PRs #1841, #1838 ready |
| **MCP output explosions** | 500KB+ DOM/base64 stalling context | PR #1843 ready |
| **Tool loop stability** | SetTodoList "storm" regressions | #1835 reported in 1.31.0; needs investigation |

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

 # OpenCode Community Digest — 2026-04-12

## 1. Today's Highlights

The OpenCode team closed multiple critical facade refactor PRs as part of an ongoing migration to Effect-TS, eliminating legacy `makeRuntime` patterns across FileTime, Instruction, SessionRunState, Truncate, Question, and FileWatcher modules. Meanwhile, Windows platform stability remains a top community concern with active issues spanning ARM64 support gaps, session persistence failures, and terminal encoding problems. No new releases were published in the last 24 hours.

---

## 2. Releases

**None** — No new releases in the past 24 hours.

---

## 3. Hot Issues

| # | Title | Why It Matters | Community Signal |
|---|-------|--------------|----------------|
| [#4340](https://github.com/anomalyco/opencode/issues/4340) | Windows arm64 support | Native Windows on ARM is growing (Surface, Copilot+ PCs); current x64 emulation hurts performance. 41 comments, 23 👍 shows pent-up demand from enterprise developers. | Strong demand; closed but likely to resurface |
| [#13984](https://github.com/anomalyco/opencode/issues/13984) | Copy-paste broken in CLI | Fundamental UX regression affecting all platforms. 23 comments suggests this is a daily friction point, not edge case. | High frustration, active triage |
| [#4672](https://github.com/anomalyco/opencode/issues/4672) | GitHub Agent stuck on "Sending Message" | Blocks core GitHub MCP workflow; 18 comments with no resolution pattern indicates systemic reliability issue. | Workflow-blocking, needs investigation |
| [#10119](https://github.com/anomalyco/opencode/issues/10119) | VSCode extension "no data provider" error | New extension launch critical path broken; affects first-run experience and adoption funnel. | Launch blocker, 9 👍 |
| [#16685](https://github.com/anomalyco/opencode/issues/16685) | Kimi K2.5 "Provider returned error" on Windows | Provider-specific failure on major model (Kimi K2.5); Windows + Chinese market combination makes this high-impact. | Regional/platform intersection bug |
| [#1573](https://github.com/anomalyco/opencode/issues/1573) | ASK MODE for token efficiency | 17.7K tokens for "hi" is unsustainable cost-wise; 8 comments suggest this resonates with power users managing API budgets. | Cost/efficiency theme emerging |
| [#6348](https://github.com/anomalyco/opencode/issues/6348) | Edit tool corrupts Windows whitespace | CRLF/LF handling breaks cross-platform collaboration; 7 comments from Windows Git users. | Daily workflow corruption risk |
| [#10237](https://github.com/anomalyco/opencode/issues/10237) | Context-Aware Prompt Enhancement | Feature parity request vs. Kilo Code/Augment; 6 comments, 7 👍 shows competitive pressure. | Feature gap vs. rivals |
| [#21910](https://github.com/anomalyco/opencode/issues/21910) | ACP message duplication on Windows | `opencode acp` core command unreliable; reported as Windows-specific, not reproducible on other ACP clients. | Protocol reliability concern |
| [#17765](https://github.com/anomalyco/opencode/issues/17765) | Windows Desktop loses all session history | Data loss scenario—sessions exist in DB but UI shows empty. 3 comments, likely underreported severity. | Data integrity red flag |

---

## 4. Key PR Progress

| # | Title | What It Does | Status |
|---|-------|------------|--------|
| [#22090](https://github.com/anomalyco/opencode/pull/22090) | Destroy FileTime facade | Completes Effect-TS migration for file timestamp operations; removes 6 legacy facade functions | Merged |
| [#22089](https://github.com/anomalyco/opencode/pull/22089) | Destroy Instruction facade | Eliminates `makeRuntime` from core instruction system; 19/19 tests passing | Merged |
| [#22064](https://github.com/anomalyco/opencode/pull/22064) | Destroy SessionRunState facade | Converts delete-message handler to pure Effect pattern | Merged |
| [#22097](https://github.com/anomalyco/opencode/pull/22097) | Export AI SDK telemetry to OTLP | Adds OpenTelemetry tracing for `ai.*` spans; enables local observability stack integration | Open |
| [#22096](https://github.com/anomalyco/opencode/pull/22096) | RFC 9728 auth flow for webfetch | OAuth support for protected resources in webfetch tool; closes security gap for enterprise MCP servers | Open |
| [#22094](https://github.com/anomalyco/opencode/pull/22094) | Finish small Effect service adoption | Final migration cleanup in config/provider layers; removes direct `Process.spawn()` checks | Open |
| [#22093](https://github.com/anomalyco/opencode/pull/22093) | Destroy Truncate facade, effectify Tool.define | Core tool definition now yields services at define-time; removes runtime leakage | Open |
| [#22092](https://github.com/anomalyco/opencode/pull/22092) | Destroy Question facade | 14 test conversions to Effectful style; interactive prompt system modernized | Open |
| [#22091](https://github.com/anomalyco/opencode/pull/22091) | Destroy FileWatcher facade | Bootstrap and VCS tests migrated to `AppRuntime.runPromise` | Open |
| [#22088](https://github.com/anomalyco/opencode/pull/22088) | RTL text layout support | Logical CSS properties across 10 components; fixes Arabic/Hebrew rendering | Open (needs:compliance) |

---

## 5. Feature Request Trends

**Token Efficiency & Cost Control** — Multiple issues (#1573 ASK MODE, implicit in #10237 prompt enhancement) indicate users are hitting API cost ceilings. Community wants granular control over agent/tool invocation context.

**Windows-First Reliability** — ARM64 support, session persistence, whitespace handling, and terminal encoding issues cluster around Windows as a second-class platform. The gap between "works on macOS/Linux" and "works on Windows" is widening in user perception.

**MCP/ACP Protocol Hardening** — WebSocket exposure (#13388), message deduplication (#21910), and auth flows (#22096) suggest the plugin/agent protocol is maturing under production load.

**Multi-Window/Multi-Session UX** — Repeated Chinese-language requests (#22033, #22034) for multiple GUI windows indicate power-user workflow needs not met by current tab model.

---

## 6. Developer Pain Points

| Pain Point | Evidence | Severity |
|-----------|----------|----------|
| **Session data loss** | #17765 (Windows), #9787 (crashes with corruption) | Critical — erodes trust |
| **Copy-paste fundamentals broken** | #13984 | High — daily friction |
| **Windows terminal encoding** | #22082 (Cyrillic), #9787 (Chinese garbled) | High — internationalization gap |
| **MCP tool output invisible** | #15825 | Medium — debugging blindness |
| **Provider/model-specific failures** | #16685 (Kimi), #22042 (Z.AI Coding Plan) | Medium — reliability lottery |
| **Extension launch failures** | #10119, #22048 (白屏/blank screen) | Medium — adoption barrier |
| **No brew install** | #6640 | Low — distribution friction |

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

 # Pi Community Digest — 2026-04-12

## Today's Highlights

The Pi team landed critical stability fixes for process leaks and TUI crashes, with **singatias** resolving a severe bug where detached bash processes accumulated as orphans consuming 90GB+ RAM. **iRonin** delivered four merged PRs improving the model registry experience, including preservation of custom `models.json` entries and smarter base-model matching. The community continues pushing on CLI performance, macOS keybindings, and extension API surface expansion.

---

## Releases

*No releases in the last 24 hours.*

---

## Hot Issues

| # | Issue | Why It Matters | Community Signal |
|---|-------|--------------|------------------|
| [#2980](https://github.com/badlogic/pi-mono/issues/2980) | Speed up `pi update` | **bjesuiter** identified that `pi update` pays full CLI startup cost before reaching package handling—opportunity for significant UX improvement. | 4 comments, active investigation |
| [#2974](https://github.com/badlogic/pi-mono/issues/2974) | Add `pid` to `BashOperations.exec` return | Extension developers need process lifecycle management (list, kill, monitor); current API blocks building process supervisors. | 3 comments, clear use case |
| [#2979](https://github.com/badlogic/pi-mono/issues/2979) | Super/Meta modifier for macOS Command key | macOS users expect Command-key shortcuts; current keybinding system lacks `super` modifier support entirely. | 3 comments, platform parity gap |
| [#2990](https://github.com/badlogic/pi-mono/issues/2990) | Multiple `--append-system-prompt` should concat | CLI flag behavior violates principle of least surprise—users expect additive, not overriding, semantics. | 2 comments, papercut fix |
| [#3051](https://github.com/badlogic/pi-mono/issues/3051) | bash tool records `grep` exit 1 as `isError: true` | Unix convention mismatch: exit code 1 means "no match," not failure. Causes LLM confusion and retry loops. | 1 comment, correctness issue |
| [#2962](https://github.com/badlogic/pi-mono/issues/2962) | Add `/clone` command | `/fork` behavior creates sessions at parent, not leaf—users want true duplication including final assistant response. | 1 comment, workflow friction |
| [#2970](https://github.com/badlogic/pi-mono/issues/2970) | `fast-xml-parser` vulnerable version pinned | Security: override pins to vulnerable 5.3.8 with two high-severity CVEs. Needs dependency bump. | 1 comment, security risk |
| [#2977](https://github.com/badlogic/pi-mono/issues/2977) | Allow extensions to override main working spinner | Extensions forced to show dual spinners (built-in + custom text); limits polished UX customization. | 1 comment, extension API gap |
| [#2983](https://github.com/badlogic/pi-mono/issues/2983) | Extension API for custom `@` autocomplete | Built-in `@` only does fuzzy file matching; extensions want to contribute context-aware suggestions (issues, docs, etc.). | 1 comment, extensibility request |
| [#3000](https://github.com/badlogic/pi-mono/issues/3000) | `pi update` reinstalls npm packages every time | Redundant 259+ package reinstalls even when up-to-date; significant time waste in update workflow. | 1 comment, performance pain |

---

## Key PR Progress

| # | PR | What It Does | Impact |
|---|-----|--------------|--------|
| [#3056](https://github.com/badlogic/pi-mono/pull/3056) | Kill detached child processes on SIGHUP/SIGTERM | Fixes 90GB+ RAM leak from 811 orphaned processes by tracking PIDs and sending SIGTERM on shutdown. | **Critical stability fix** |
| [#3054](https://github.com/badlogic/pi-mono/pull/3054) | Prevent autocomplete crashes with non-string values | Defensive coding in `CombinedAutocompleteProvider` and fuzzy matching—handles `null`/`undefined` gracefully. | TUI reliability |
| [#3048](https://github.com/badlogic/pi-mono/pull/3048) | `models.json` custom models survive `registerProvider()` | Stores custom models separately before provider replacement; restores after registration. Fixes silent data loss. | User configuration safety |
| [#3047](https://github.com/badlogic/pi-mono/pull/3047) | Allow omitting `apiKey` when provider has stored auth | Removes redundant API key requirement for custom models when `/login` credentials exist in `auth.json`. | UX polish |
| [#3046](https://github.com/badlogic/pi-mono/pull/3046) | Regenerate `models.generated.ts` from live APIs | Adds `qwen/qwen3.6-plus`, `alibaba/qwen3.6-plus`; removes deprecated models. Keeps provider catalog current. | Model availability |
| [#3045](https://github.com/badlogic/pi-mono/pull/3045) | Prefer base model over `:variant` suffixes in partial match | Fixes lexicographic sort where `model:free` incorrectly beat `model`; now prefers exact base matches. | Correct model resolution |
| [#3025](https://github.com/badlogic/pi-mono/pull/3025) | Make RPC `prompt` emit single authoritative response | Eliminates race conditions in agent RPC by awaiting preflight acceptance; adds regression tests. | Agent reliability |
| [#3024](https://github.com/badlogic/pi-mono/pull/3024) | Use `Promise.allSettled` for parallel tool execution | Replaces sequential `await` loop—prevents result loss when parallel tools fail; all results now captured. | Tool execution correctness |
| [#2402](https://github.com/badlogic/pi-mono/pull/2402) | Questionnaire wraps long text instead of truncating | Fixes unreadable prompts on narrow terminals; adds width-change cache invalidation. | TUI accessibility |

---

## Feature Request Trends

**Extension API Expansion** — Dominant theme across [#2974](https://github.com/badlogic/pi-mono/issues/2974), [#2977](https://github.com/badlogic/pi-mono/issues/2977), [#2983](https://github.com/badlogic/pi-mono/issues/2983): developers want deeper hooks into Pi's UI (spinners, autocomplete, process management) and session control (`setCwd`, `pid` tracking).

**CLI Performance & Ergonomics** — `pi update` optimization ([#2980](https://github.com/badlogic/pi-mono/issues/2980)), idempotent npm installs ([#3000](https://github.com/badlogic/pi-mono/issues/3000)), and flag semantics ([#2990](https://github.com/badlogic/pi-mono/issues/2990)) indicate friction in the package management and CLI startup paths.

**Platform Parity** — macOS Command key support ([#2979](https://github.com/badlogic/pi-mono/issues/2979)) highlights ongoing gaps in cross-platform keybinding treatment.

---

## Developer Pain Points

| Category | Symptoms | Frequency |
|----------|----------|-----------|
| **Process Management** | Orphan leaks, no PID tracking, exit code misinterpretation ([#3057](https://github.com/badlogic/pi-mono/issues/3057), [#3051](https://github.com/badlogic/pi-mono/issues/3051), [#2974](https://github.com/badlogic/pi-mono/issues/2974)) | High — 3 related issues |
| **Model Registry UX** | Silent config loss, redundant auth requirements, surprising match behavior ([#3044](https://github.com/badlogic/pi-mono/issues/3044), [#3047](https://github.com/badlogic/pi-mono/issues/3047), [#3042](https://github.com/badlogic/pi-mono/issues/3042)) | High — addressed by 4 PRs this cycle |
| **Update Performance** | Slow startup, redundant reinstalls, non-idempotent operations ([#2980](https://github.com/badlogic/pi-mono/issues/2980), [#3000](https://github.com/badlogic/pi-mono/issues/3000)) | Medium — 2 active issues |
| **TUI Robustness** | Crashes on edge-case data, rendering edge cases ([#3055](https://github.com/badlogic/pi-mono/issues/3055), [#3004](https://github.com/badlogic/pi-mono/issues/3004)) | Medium — defensive fixes landing |
| **Extension Capability Gaps** | Limited UI customization, no custom `@` providers, session manipulation restricted ([#2977](https://github.com/badlogic/pi-mono/issues/2977), [#2983](https://github.com/badlogic/pi-mono/issues/2983), [#2992](https://github.com/badlogic/pi-mono/issues/2992)) | Medium — feature requests accumulating |

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-04-12

## 1. Today's Highlights

The Qwen Code team shipped **v0.14.3-nightly** with critical stability fixes for session resumption and context compression. Community activity surged with **26 active issues** and **35 PRs**, highlighting strong demand for GUI alternatives, GitHub Copilot integration, and improved proxy/MCP handling. Chinese-language users are driving significant feedback around agent naming, terminal UX, and localization gaps.

---

## 2. Releases

| Version | Date | Notes |
|---------|------|-------|
| [v0.14.3-nightly.20260411.55bcec70d](https://github.com/QwenLM/qwen-code/compare/v0.14.3...v0.14.3-nightly.20260411.55bcec70d) | 2026-04-11 | Nightly build; no detailed changelog provided. Full diff available via GitHub compare. |

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Signal |
|---|-------|--------------|----------------|
| [#146](https://github.com/QwenLM/qwen-code/issues/146) | Default OpenAI key/model/URL for all projects | Eliminates repetitive environment variable setup across projects; core DX pain point | 👍 2, active since July 2025 |
| [#3119](https://github.com/QwenLM/qwen-code/issues/3119) | `InternalError.Algo.DataInspectionFailed` on benign input | False-positive content filtering blocking legitimate workflows; affects trust in AI pipeline | Fresh report, needs triage |
| [#3143](https://github.com/QwenLM/qwen-code/issues/3143) | Request for GUI (图形化界面) | Accessibility barrier for non-terminal users; explicit comparison to Claude Code's UX | Chinese community priority |
| [#3140](https://github.com/QwenLM/qwen-code/issues/3140) | `agents.md` vs `qwen.md` compatibility | Migration friction from iFlow CLI; unclear convention adoption | Onboarding friction |
| [#3128](https://github.com/QwenLM/qwen-code/issues/3128) | GitHub Copilot model support | Strategic integration request to leverage existing Copilot subscriptions | Feature gap vs. competitors |
| [#3153](https://github.com/QwenLM/qwen-code/issues/3153) | Cannot stop Qwen after rejecting command | Critical control flow bug—agent ignores user rejection and loops | Zero-day UX failure |
| [#3152](https://github.com/QwenLM/qwen-code/issues/3152) | `/resume` creates duplicate sessions | Breaks session continuity promise; data fragmentation risk | Session management reliability |
| [#3149](https://github.com/QwenLM/qwen-code/issues/3149) | Chinese agent names fail to invoke | I18n bug in core agent registry; ironic gap for Chinese-origin project | Localization quality concern |
| [#3144](https://github.com/QwenLM/qwen-code/issues/3144) | Terminal scroll jitter during streaming | Visual stability degradation; affects readability of long outputs | Polish/QA issue |
| [#3147](https://github.com/QwenLM/qwen-code/issues/3147) | MCP connection indicator always shows disconnected | Observability gap—users cannot verify MCP health despite functional connections | Debugging friction |

---

## 4. Key PR Progress

| # | PR | Feature/Fix | Status |
|---|-----|-------------|--------|
| [#3151](https://github.com/QwenLM/qwen-code/pull/3151) | Fix follow-up suggestions on OpenAI-compatible providers | **Critical fix**: 5 stacked bugs in `fastModel` pipeline causing silent failures; restores suggestion functionality | 🟡 Open |
| [#3146](https://github.com/QwenLM/qwen-code/pull/3146) | `tools.sandboxImage` in settings | Addresses [#577](https://github.com/QwenLM/qwen-code/issues/577)—persistent sandbox image config without CLI flags | 🟡 Open |
| [#3148](https://github.com/QwenLM/qwen-code/pull/3148) | Warn when workspace overrides global `modelProviders` | Prevents confusing configuration merges; improves settings transparency | 🟡 Open |
| [#3103](https://github.com/QwenLM/qwen-code/pull/3103) | Shift+Enter newline across terminals | Universal terminal compatibility for multi-line input; fixes [#241](https://github.com/QwenLM/qwen-code/issues/241) | 🟡 Open |
| [#3093](https://github.com/QwenLM/qwen-code/pull/3093) | Session rename, delete, auto-title | Complete session lifecycle management; CLI/VSCode/WebUI parity | 🟡 Open |
| [#3076](https://github.com/QwenLM/qwen-code/pull/3076) | `run_in_background` for Agent tool | Async sub-agent execution with completion notifications; workflow orchestration enhancement | 🟡 Open |
| [#3132](https://github.com/QwenLM/qwen-code/pull/3132) | Parallelize release workflow validation | CI optimization—faster feedback, reduced duplicate work | 🟡 Open |
| [#3138](https://github.com/QwenLM/qwen-code/pull/3138) | Cap recursive file crawler at 100k entries | **Merged**: Prevents OOM on `@` autocomplete in large workspaces | ✅ Closed |
| [#3136](https://github.com/QwenLM/qwen-code/pull/3136) | Apply proxy settings to `channel start` | **Merged**: Fixes proxy bypass for Telegram/WeChat/DingTalk channels | ✅ Closed |
| [#3109](https://github.com/QwenLM/qwen-code/pull/3109) | Use latest token count on resume | **Merged**: Fixes stale context display after `/compress` + resume | ✅ Closed |

---

## 5. Feature Request Trends

| Trend | Evidence | Implication |
|-------|----------|-------------|
| **GUI/Desktop parity** | [#3143](https://github.com/QwenLM/qwen-code/issues/3143), [#3140](https://github.com/QwenLM/qwen-code/issues/3140) | Terminal-only positioning limits adoption; users expect Claude Code-like accessibility |
| **IDE ecosystem integration** | [#3128](https://github.com/QwenLM/qwen-code/issues/3128) (Copilot), [#2592](https://github.com/QwenLM/qwen-code/pull/2592) (VSCode `/export`), [#2551](https://github.com/QwenLM/qwen-code/pull/2551) (VSCode Plan Mode) | Must meet developers in existing workflows, not replace them |
| **Configuration ergonomics** | [#146](https://github.com/QwenLM/qwen-code/issues/146), [#577](https://github.com/QwenLM/qwen-code/issues/577), [#3142](https://github.com/QwenLM/qwen-code/issues/3142) (`respectGitignore`) | Global defaults, settings.json parity with CLI flags, `.gitignore` awareness |
| **Session management sophistication** | [#3152](https://github.com/QwenLM/qwen-code/issues/3152), [#3093](https://github.com/QwenLM/qwen-code/pull/3093), [#3105](https://github.com/QwenLM/qwen-code/pull/3105) | Named sessions, reliable resume, compression-aware state |
| **Internationalization depth** | [#3149](https://github.com/QwenLM/qwen-code/issues/3149) (Chinese agent names), [#3124](https://github.com/QwenLM/qwen-code/pull/3124) (French locale), [#3141](https://github.com/QwenLM/qwen-code/pull/3141) (i18n for commands) | Beyond translation—proper Unicode handling in identifiers |

---

## 6. Developer Pain Points

| Pain Point | Manifestations | Severity |
|------------|---------------|----------|
| **Session state fragility** | Duplicate sessions on `/resume` ([#3152](https://github.com/QwenLM/qwen-code/issues/3152)), wrong context counts ([#3107](https://github.com/QwenLM/qwen-code/issues/3107)), unstoppable loops after rejection ([#3153](https://github.com/QwenLM/qwen-code/issues/3153)) | 🔴 High—core reliability |
| **Proxy/network configuration gaps** | Channel commands ignore proxy ([#3122](https://github.com/QwenLM/qwen-code/issues/3122), [#3136](https://github.com/QwenLM/qwen-code/pull/3136)), MCP connection status lies ([#3147](https://github.com/QwenLM/qwen-code/issues/3147)) | 🟡 Medium—enterprise/blocking |
| **Content moderation false positives** | `DataInspectionFailed` on benign code ([#3119](https://github.com/QwenLM/qwen-code/issues/3119), [#3145](https://github.com/QwenLM/qwen-code/issues/3145)) | 🟡 Medium—workflow interruption |
| **Terminal UX polish** | Scroll jitter ([#3144](https://github.com/QwenLM/qwen-code/issues/3144)), truncated shell commands ([#3139](https://github.com/QwenLM/qwen-code/issues/3139)), sudo password input unclear ([#3129](https://github.com/QwenLM/qwen-code/issues/3129)) | 🟡 Medium—daily friction |
| **Agent system i18n** | Chinese names break invocation ([#3149](https://github.com/QwenLM/qwen-code/issues/3149)) | 🟡 Medium—embarrassing for origin project |
| **File discovery performance** | `fdir` crawler OOM risk ([#3138](https://github.com/QwenLM/qwen-code/pull/3138)), `@` triggering full scans ([#3137](https://github.com/QwenLM/qwen-code/issues/3137)) | 🟢 Addressed in nightly |

---

*Digest compiled from 26 issues and 35 PRs updated 2026-04-11. Data source: [QwenLM/qwen-code](https://github.com/QwenLM/qwen-code)*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*