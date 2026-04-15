# AI CLI Tools Community Digest 2026-04-01

> Generated: 2026-04-01 00:12 UTC | Tools covered: 8

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

# AI CLI Tools Ecosystem Cross-Analysis Report
*April 1, 2026 Community Digest Synthesis*

---

## 1. Ecosystem Overview

The AI CLI tools landscape has matured into a competitive multi-polar market with seven actively maintained alternatives, each wrestling with common foundational challenges: **token economics transparency**, **Windows platform parity**, and **context/memory management at scale**. The sector shows clear divergence between closed-source incumbents (Claude Code, GitHub Copilot CLI) facing community pressure for openness, and open-source challengers (OpenCode, Pi, Qwen Code) racing to match UX polish while maintaining extensibility. Enterprise adoption friction—authentication, rate limiting, and safety guardrails—dominates cross-tool development priorities.

---

## 2. Activity Comparison

| Tool | Issues (24h) | PRs (24h) | Releases | Release Velocity |
|:---|:---:|:---:|:---:|:---|
| **Claude Code** | 50 | 20 | None | Stagnant; last release 2.1.1 (regression cluster) |
| **OpenAI Codex** | 50 | 50 | **rust-v0.118.0** + 2 alphas | **High**; daily patch cadence |
| **Gemini CLI** | 50 | 50 | v0.36.0-preview.7 | Moderate; preview channel focus |
| **GitHub Copilot CLI** | ~15 | 1 | **v1.0.14 + v1.0.15-0** | **High**; same-day regression fixes |
| **Kimi Code CLI** | ~12 | 10 | None | Moderate; quality-focused iteration |
| **OpenCode** | 50 | 50 | **v1.3.10–v1.3.12** (3 patches) | **High**; rapid patch cadence |
| **Pi** | 37 | 10 | None | Moderate; stability emphasis |
| **Qwen Code** | 21 | 35 | v0.13.2-nightly | Moderate; nightly channel |

*Note: Issue/PR counts normalized where digests explicitly state "50 issues, 50 PRs" as sampling methodology.*

---

## 3. Shared Feature Directions

| Requirement | Tools | Specific Evidence | Convergence Signal |
|:---|:---|:---|:---|
| **Remote/SSH Development** | OpenAI Codex (#10450, 474 👍), Claude Code (implied by Windows instability focus) | Codex: "SSH/remote workspace support to match VS Code's native experience" | **Critical gap** vs. IDE parity |
| **Token Economics Visibility** | OpenAI Codex (#14593, 346 comments), Claude Code (#16856, 4-5x consumption regression), Gemini CLI (#24384 rate limit confusion) | Per-turn breakdowns, hard caps, cache metrics (#2656 Pi) | **Trust crisis**; cost unpredictability blocks adoption |
| **Session/Context Persistence** | Claude Code (#40524, #32659, #13919), Kimi Code CLI (#1283), OpenCode (#15250 archiving) | Cross-session memory, project-scoped context, compaction reliability | Core value proposition under stress |
| **Windows Platform Hardening** | Claude Code (#41708 BSOD, #35710), OpenAI Codex (#13699, #13784, #16320), Kimi Code CLI (#1687 CRLF), OpenCode (#20354 path normalization) | Data loss, BSODs, encoding, path handling | **Second-class platform syndrome** across ecosystem |
| **MCP Ecosystem Integration** | OpenCode (#10884), Claude Code (implied by tool architecture), Kimi Code CLI (#1670 image fix) | MCP Apps support, protocol v2026-01-26 alignment | Standardization moment |
| **Agent Identity/Personality** | OpenCode (#20334 epic), OpenAI Codex (#16274 user personalities), Kimi Code CLI (#1685 session titles) | Persistent agent configuration, customization | Differentiation vector emerging |

---

## 4. Differentiation Analysis

| Dimension | Leaders | Technical Approach | Target User |
|:---|:---|:---|:---|
| **Performance & Safety** | OpenAI Codex | Rust core, OS-level sandboxing, hardened Windows networking | Enterprise security-conscious |
| **Open Source Extensibility** | OpenCode, Pi | Effect-based architecture, plugin system, community packages | Developer-tool builders, customization seekers |
| **Closed-Source Polish** | Claude Code | Proprietary TUI, deep Anthropic model integration | Individual developers prioritizing UX |
| **Enterprise Integration** | GitHub Copilot CLI | Native GitHub/VS Code ecosystem, rapid regression fixes | Microsoft-committed organizations |
| **Internationalization** | Kimi Code CLI, Qwen Code | CJK-first optimization, domestic cloud integration | China-market developers |
| **Observability/Cost Control** | Pi | Granular cache metrics, multi-provider abstraction | Cost-optimized, multi-tenant scenarios |

**Key Architectural Divides:**
- **Language**: Rust (Codex) vs. TypeScript (Claude Code, OpenCode, Pi) vs. mixed (Kimi, Qwen)
- **Sandboxing**: OS-level (Codex Windows) vs. Docker-desired (#9132 OpenCode) vs. none documented
- **Auth**: OAuth scope complexity (Pi #2741, Codex device code flow) vs. token validation strictness (Copilot CLI #2431)

---

## 5. Community Momentum & Maturity

| Tier | Tools | Indicators |
|:---|:---|:---|
| **Rapid Iteration** | OpenAI Codex, OpenCode, GitHub Copilot CLI | Same-day critical fixes (#16365/#16372 Codex; v1.0.14→v1.0.15 Copilot; 3 patches OpenCode); 50 PR/day throughput |
| **Active Maintenance** | Gemini CLI, Kimi Code CLI, Pi, Qwen Code | Consistent issue resolution, preview/nightly channels, architectural EPICs (#22745 Gemini AST) |
| **Community Pressure** | Claude Code | **No release in 24h** despite critical regressions; open-source reconstruction PRs (#41518, #41568) signal maintainer-community tension; highest-ever engagement (#34229, 634 comments) on access-blocking bug |

**Maturity Signals:**
- **OpenCode**: Most structured community governance (Effect architecture, plugin ecosystem, documentation investment)
- **Pi**: Strong extension API stability focus (async completion fixes, provider abstraction)
- **Qwen Code**: Highest PR-to-issue ratio (35:21) indicating contributor momentum
- **Claude Code**: Risk of **maintainer bandwidth saturation**—oldest open request (#59, source availability) still unaddressed with community attempting reverse-engineering

---

## 6. Trend Signals

| Trend | Evidence | Strategic Implication |
|:---|:---|:---|
| **"Open Source or Bust" Pressure** | Claude Code PRs #41447, #41518, #41568; #59 (2025) oldest request; 1906 TypeScript files extracted from source maps | Closed-source incumbents face **legitimacy crisis**; community technical capability demonstrated |
| **Token Anxiety as Adoption Blocker** | #14593 (Codex, 346 comments), #16856 (Claude Code, 4-5x regression), #24384 (Gemini 429s) | **Cost transparency** becoming table stakes; per-turn visibility, hard caps, cache optimization prioritized |
| **Windows as Reliability Minefield** | #41708 (Claude Code C: drive deletion), #35710 (BSOD), #16320 (Codex high CPU), #2746 (Qwen encoding) | Cross-platform claims require **dedicated Windows engineering investment**; current state unacceptable for enterprise |
| **Context Management Architecture Race** | #22745 (Gemini AST-aware), #32659 (Claude Code amnesia), #2761/#2762 (Qwen overflow), #13919 (skills compaction) | **Semantic code understanding** (AST) vs. brute-force context window; precision beats scale |
| **Agent Coordination Complexity** | #1633 (Kimi swarm vs. subagent), #2715 (Pi event bus), #23582 (Gemini subagent approval gaps) | Hierarchical → peer-to-peer agent architectures emerging; safety model must follow |
| **MCP as De Facto Standard** | #10884 (OpenCode), #1670 (Kimi image fix), protocol v2026-01-26 | Tool interoperability layer consolidating; first-mover advantage in MCP-native UX |

---

*Report synthesized from 8 community digests covering 300+ issues, 200+ PRs, and 10 releases over 24-hour window ending 2026-04-01.*

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
*Data as of 2026-04-01*

---

## 1. Top Skills Ranking

| Rank | Skill | PR | Status | Description | Key Discussion |
|:---|:---|:---|:---|:---|:---|
| 1 | **Document Typography** | [#514](https://github.com/anthropics/skills/pull/514) | 🟡 Open | Enforces typographic quality control—prevents orphans, widows, and numbering misalignment in AI-generated documents. Addresses universal document formatting pain points. | Identifies issues "affecting every document Claude generates"; seeks to make professional typography automatic |
| 2 | **Frontend Design** | [#210](https://github.com/anthropics/skills/pull/210) | 🟡 Open | Revised guidance for actionable, single-conversation frontend design workflows. Focus on clarity and token efficiency. | Tension between educational documentation vs. operational instruction; push for "Claude can actually follow" specificity |
| 3 | **Skill Quality & Security Analyzers** | [#83](https://github.com/anthropics/skills/pull/83) | 🟡 Open | Meta-skills evaluating Skills across 5 quality dimensions (structure, security, examples) and automated security review. | First systematic approach to Skill quality assurance; addresses growing ecosystem maturity needs |
| 4 | **ODT Processing** | [#486](https://github.com/anthropics/skills/pull/486) | 🟡 Open | OpenDocument creation, template filling, and HTML conversion. Bridges LibreOffice/enterprise document workflows. | Targets ISO standard format for government/enterprise compliance use cases |
| 5 | **Testing Patterns** | [#723](https://github.com/anthropics/skills/pull/723) | 🟡 Open | Comprehensive testing stack coverage—Testing Trophy, AAA pattern, React Testing Library, E2E strategies. | Fills critical gap in Claude's code generation reliability |
| 6 | **Codebase Inventory Audit** | [#147](https://github.com/anthropics/skills/pull/147) | 🟡 Open | 10-step systematic cleanup workflow identifying orphaned code, unused files, documentation gaps. Produces `CODEBASE-STATUS.md`. | Technical debt management at scale; enterprise maintenance workflows |
| 7 | **Shodh Memory** | [#154](https://github.com/anthropics/skills/pull/154) | 🟡 Open | Persistent memory system for AI agents maintaining context across Claude Code sessions. | Addresses core platform limitation—session state loss |
| 8 | **SAP-RPT-1-OSS Predictor** | [#181](https://github.com/anthropics/skills/pull/181) | 🟡 Open | Integration with SAP's open-source tabular foundation model for predictive analytics on SAP business data. | Enterprise ERP/AI convergence; Apache 2.0 model adoption |

---

## 2. Community Demand Trends

From high-engagement Issues, four dominant Skill directions emerge:

| Trend | Evidence | Implied Skill Need |
|:---|:---|:---|
| **Agent Governance & Safety** | [#412](https://github.com/anthropics/skills/issues/412) (4 comments, policy enforcement proposal), [#492](https://github.com/anthropics/skills/issues/492) (4 comments, trust boundary security) | Production-grade agent oversight—audit trails, threat detection, permission scoping |
| **Cross-Session Persistence** | [#154](https://github.com/anthropics/skills/pull/154), [#522](https://github.com/anthropics/skills/pull/522) (plan-task skill), [#62](https://github.com/anthropics/skills/issues/62) (skill loss reports) | Stateful agent memory, task resumption, backup/recovery workflows |
| **MCP Interoperability** | [#16](https://github.com/anthropics/skills/issues/16) (4 comments, expose Skills as MCPs) | Standardized API packaging—Skills as discoverable, composable services |
| **Enterprise Quality Systems** | [#659](https://github.com/anthropics/skills/pull/659) (quality-playbook), [#556](https://github.com/anthropics/skills/issues/556) (evaluation tooling gaps) | Automated quality engineering, systematic testing, compliance documentation |

---

## 3. High-Potential Pending Skills

Active PRs with recent momentum likely to merge:

| Skill | PR | Last Activity | Why It May Land Soon |
|:---|:---|:---|:---|
| **Contributing Guidelines** | [#509](https://github.com/anthropics/skills/pull/509) | 2026-03-19 | Addresses 25% community health score; maintainer-requested infrastructure |
| **DOCX Bug Fixes** (tracked changes collision) | [#541](https://github.com/anthropics/skills/pull/541) | 2026-03-31 | Critical corruption fix; active maintainer engagement (Lubrsy706) |
| **PDF Case-Sensitivity Fix** | [#538](https://github.com/anthropics/skills/pull/538) | 2026-03-31 | Same author cluster as #541; small, reviewable scope |
| **Skill-Creator Validation** | [#539](https://github.com/anthropics/skills/pull/539) | 2026-03-31 | Prevents silent YAML failures; quality-of-life improvement |
| **Plan-Task Persistence** | [#522](https://github.com/anthropics/skills/pull/522) | 2026-03-09 | Solves widely reported session state pain point |

---

## 4. Skills Ecosystem Insight

> **The community's concentrated demand is for production-grade reliability infrastructure**—persistent state management, systematic quality validation, and governance guardrails that transform Claude Code from an ephemeral coding assistant into a maintainable, auditable, team-scalable development platform.

---

---

# Claude Code Community Digest — 2026-04-01

---

## 1. Today's Highlights

The community is intensely focused on **source code access and open-source alternatives**, with multiple PRs attempting to reconstruct, document, or fully rewrite Claude Code from extracted artifacts. Concurrently, **cost and token consumption issues** dominate bug reports following the 2.1.1 release, while **Windows platform stability** remains a critical concern with reports of data loss and BSOD triggers.

---

## 2. Releases

**No new releases in the last 24 hours.**

---

## 3. Hot Issues

| Issue | Why It Matters | Community Reaction |
|-------|--------------|-------------------|
| **[#34229 — Phone verification bug](https://github.com/anthropics/claude-code/issues/34229)** | Blocking account access for hundreds of users; authentication infrastructure failure | 634 comments, 701 👍 — highest engagement in repository history; users reporting complete inability to use service |
| **[#826 — Console scrolling jumps to history top](https://github.com/anthropics/claude-code/issues/826)** | Severe UX regression breaking workflow continuity during long sessions | 346 comments, 667 👍; macOS/iTerm2 users particularly affected; marked duplicate but unresolved |
| **[#18170 — Copy/paste includes unwanted indentation](https://github.com/anthropics/claude-code/issues/18170)** | Fundamental TUI formatting issue corrupting all clipboard operations | 84 comments, 156 👍; forces manual cleanup or token-wasting regeneration |
| **[#16856 — Excessive token usage in 2.1.1](https://github.com/anthropics/claude-code/issues/16856)** | 4-5x rate limit consumption reported post-update; direct cost impact | 61 comments, 67 👍; users hitting limits mid-workday on established workflows |
| **[#40524 — Conversation history invalidated](https://github.com/anthropics/claude-code/issues/40524)** | Context loss between turns destroys multi-step development sessions | 52 comments, 120 👍; regression affecting core product promise |
| **[#11380 — Permission prompts loop despite "always allow"](https://github.com/anthropics/claude-code/issues/11380)** | Trust model broken; users cannot establish persistent permissions | 81 comments, 64 👍; closed but referenced in ongoing reports |
| **[#32659 — Context amnesia in long sessions](https://github.com/anthropics/claude-code/issues/32659)** | Constraints silently dropped as context grows; architectural limitation | 12 comments; linked to broader context window management failures |
| **[#13919 — Skills context lost after auto-compaction](https://github.com/anthropics/claude-code/issues/13919)** | Memory management destroys learned project context | 12 comments, 3 👍; "massive productivity loss" per reporter |
| **[#41708 — Autonomous deletion of entire C: drive](https://github.com/anthropics/claude-code/issues/41708)** | Critical safety incident: unattended session wiped Windows system | 1 comment; requires immediate investigation; autonomy guardrails failed |
| **[#41691 — CJK text renders black in dark mode](https://github.com/anthropics/claude-code/issues/41691)** | Accessibility/internationalization failure for Korean users | 2 comments; completely blocks readability without text selection |

---

## 4. Key PR Progress

| PR | Description | Significance |
|----|-------------|------------|
| **[#41568 — Rust Implementation: High-Performance Rewrite](https://github.com/anthropics/claude-code/pull/41568)** | 16-crate workspace with full tool support, TUI, streaming, QueryEngine | Most ambitious community effort; complete language migration for performance |
| **[#41447 — Open source Claude Code](https://github.com/anthropics/claude-code/pull/41447)** | Attempts to close long-standing source availability requests (#59, #456, #2846, #22002) | Direct response to #59, oldest open request; symbolic importance |
| **[#41518 — Fully Open Source (extracted from source maps)](https://github.com/anthropics/claude-code/pull/41518)** | 1906 TypeScript files extracted from 57MB `cli.js.map`; working build | Reverse-engineering milestone; demonstrates community technical capability |
| **[#41611 — Add missing source](https://github.com/anthropics/claude-code/pull/41611)** | Minimal source addition attempt | Part of coordinated open-source pressure campaign |
| **[#35710 — Tool-mutex plugin to prevent Wof.sys BSOD](https://github.com/anthropics/claude-code/pull/35710)** | Fixes critical Windows kernel crash from parallel filesystem enumeration | Addresses #32870; production-critical for Windows enterprise users |
| **[#31501 — Fix TodoWrite overwriting phase-level todos](https://github.com/anthropics/claude-code/pull/31501)** | Prevents `/feature-dev` workflow from skipping Quality Review and Summary phases | Fixes broken feature development lifecycle |
| **[#41695/#41694 — PermissionDenied hook examples](https://github.com/anthropics/claude-code/pull/41695)** | Documents undocumented v2.1.88 hook with retry and audit logging | Developer experience improvement; addresses documentation gap |
| **[#41453 — Safe Stop hook wrapper](https://github.com/anthropics/claude-code/pull/41453)** | PID lock and timeout for background tasks from Stop hooks | Solves runaway process problem (#41393) |
| **[#39148 — Preserve-session plugin](https://github.com/anthropics/claude-code/pull/39148)** | Path-independent session history via UUID registry | Addresses session fragility when projects move |
| **[#41589/#41584 — Architecture analysis documentation](https://github.com/anthropics/claude-code/pull/41589)** | 770+ line source analysis in Chinese and English | Community knowledge preservation; educational resource |

---

## 5. Feature Request Trends

| Direction | Evidence | Momentum |
|-----------|----------|----------|
| **Source code availability / True open source** | PRs #41447, #41518, #41611, #41568, #41589 | Highest priority; multiple independent attempts; #59 from 2025 |
| **Multi-account/profile support** | Issue #41048, #41709 | Enterprise and agency workflow requirement |
| **Enhanced session persistence** | PR #39148, issues on context loss | Critical for long-running development projects |
| **Cowork scheduling flexibility** | Issue #28952 (one-time/n-time tasks) | Automation workflow expansion |
| **Bedrock/AWS profile isolation** | Issue #39826 | Enterprise AWS deployment need |
| **IDE integration polish** | Issue #32726 (VSCode focus stealing) | Professional UX expectations |

---

## 6. Developer Pain Points

| Category | Specific Issues | Frequency |
|----------|---------------|-----------|
| **Cost/Rate limit unpredictability** | #16856, #41174, #40524, #15199 | Extremely high — post-2.1.1 regression cluster |
| **Context/memory management failures** | #32659, #13919, #40524, #34197 | High — undermines core value proposition |
| **Windows platform instability** | #41708, #35710, #41702, #41710, #11380 | Critical — data loss and system crashes |
| **Authentication/subscription state bugs** | #34229, #39766, #41581, #41709, #41711 | High — revenue-impacting access failures |
| **TUI/terminal formatting defects** | #18170, #15199, #826, #41691, #2588 | Persistent — daily workflow friction |
| **Permission model trust erosion** | #11380, #33595 | Moderate — "always allow" not honored |
| **Documentation gaps** | #41695 (undocumented hooks), architecture opacity | Moderate — forces reverse engineering |

---

*Digest compiled from 50 issues and 20 pull requests updated 2026-03-31 to 2026-04-01.*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-04-01

---

## 1. Today's Highlights

The Codex team shipped **rust-v0.118.0** with hardened Windows sandbox networking and improved ChatGPT auth flows, while the community continues to grapple with token consumption concerns and Windows-specific stability issues. Critical regressions in the app-server client (#16364) saw rapid same-day fixes merged, reflecting active investment in the Rust core infrastructure. Meanwhile, long-standing requests for remote development support and workspace-scoped chats remain highly engaged, signaling where user priorities lie.

---

## 2. Releases

| Version | Key Changes |
|--------|-------------|
| **[rust-v0.118.0](https://github.com/openai/codex/releases/tag/rust-v0.118.0)** | Windows sandbox now enforces **proxy-only networking via OS-level egress rules** (not just env vars), reducing data exfiltration risk. App-server clients gain **device code flow for ChatGPT sign-in**, bypassing unreliable browser callbacks. |
| rust-v0.119.0-alpha.1 | Prerelease; no detailed notes. |
| rust-v0.118.0-alpha.4/5 | Prerelease builds. |

---

## 3. Hot Issues

| Issue | Why It Matters | Community Signal |
|-------|--------------|----------------|
| [#14593](https://github.com/openai/codex/issues/14593) **Burning tokens very fast** | **346 comments, 141 👍** — Top community concern about runaway token consumption, especially on Business tier. Users report sessions consuming 10x expected tokens without clear audit trails. | Frustrated; demands per-turn token visibility and hard caps. |
| [#10450](https://github.com/openai/codex/issues/10450) **Remote Development in Codex Desktop App** | **474 👍, 98 comments** — The highest-voted open feature request. Users want SSH/remote workspace support to match VS Code's native experience. | Strong enterprise demand; blocking adoption for cloud-dev workflows. |
| [#2558](https://github.com/openai/codex/issues/2558) **TUI output truncated in Zellij** | **108 👍** — Terminal multiplexer compatibility remains fragile; affects power users on tmux/Zellij. | Niche but vocal; indicates TUI rendering debt. |
| [#12661](https://github.com/openai/codex/issues/12661) **Markdown file:// links open in Edge not VS Code** | Windows-specific UX friction; breaks expected IDE-integrated workflow. | 36 👍; reported as daily annoyance. |
| [#13784](https://github.com/openai/codex/issues/13784) **Error running remote compact task** | Signals instability in background maintenance operations on Windows. | 12 👍; reliability concern for long sessions. |
| [#12836](https://github.com/openai/codex/issues/12836) **/copy fails with X11 clipboard timeout** | Clipboard integration fails in headless/SSH scenarios. | Blocking for remote Linux users. |
| [#3550](https://github.com/openai/codex/issues/3550) **Scope Codex chats to VS Code workspaces** | **48 👍** — Global chat history creates cognitive overload; users want project isolation. | Long-standing request; organizational hygiene. |
| [#7829](https://github.com/openai/codex/issues/7829) **Escape sequences inserted when typing** | Terminal input corruption with specific key encodings (kitty protocol). | 4 👍 but high annoyance factor. |
| [#13699](https://github.com/openai/codex/issues/13699) **Codex Windows crashed with WSL** | WSL path/config detection failure; Windows-WSL interop remains brittle. | 9 👍; enterprise Windows users affected. |
| [#16364](https://github.com/openai/codex/issues/16364) **app-server broken since 0.117.0+ after tool calls** | **Regression** — App-server hangs post-tool-call, breaking automation workflows. | Critical; fixed same day via #16365, #16372. |

---

## 4. Key PR Progress

| PR | Description | Impact |
|----|-------------|--------|
| [#16199](https://github.com/openai/codex/pull/16199) **Reset watchdog timer on owner input** | Shortens default watchdog to 10s, resets on user activity. Prevents premature session termination during active use. | Reliability |
| [#16055](https://github.com/openai/codex/pull/16055) **Force forked agents to inherit parent model settings** | Eliminates accidental context/model switches in `fork_context=true` subagents, preserving token economics. | Consistency |
| [#16197](https://github.com/openai/codex/pull/16197) **Ordered subagent model fallback** | Adds quota-aware fallback chains (e.g., `gpt-5.4` → `gpt-5.3` → `gpt-5-mini`) with per-candidate reasoning effort. | Resilience |
| [#16274](https://github.com/openai/codex/pull/16274) **User-defined personalities + app-server listing** | Loads custom personalities from `.codex/personalities`, merges with built-ins, exposes via `personalities/list` RPC. | Extensibility |
| [#16282](https://github.com/openai/codex/pull/16282) **Experimental thread job scheduling + `/loop`** | Adds `job_scheduler` feature for runtime prompt scheduling; `/loop` enables model-driven iteration patterns. | Automation |
| [#16284](https://github.com/openai/codex/pull/16284) **Fix TUI app-server permission profile conversions** | Fixes filesystem grant drops caused by camelCase/snake_case JSON round-trip bugs. | Bugfix |
| [#16365](https://github.com/openai/codex/pull/16365) / [#16372](https://github.com/openai/codex/pull/16372) **Fix app-server deadlocks/hangs** | Resolves #16364: eliminates hangs after tool calls by decoupling request resolution from event stream draining. | **Critical fix** |
| [#16181](https://github.com/openai/codex/pull/16181) **Expose agent tools in stable namespace** | Wraps collaboration tools under `agents.*` namespace while preserving legacy aliases for compatibility. | API hygiene |
| [#16207](https://github.com/openai/codex/pull/16207) **Remove spawn_mode from agent roles** | Simplifies role config; watchdog behavior now driven by `watchdog_interval_s` only. | Technical debt |
| [#16370](https://github.com/openai/codex/pull/16370) **Fix guardian event ordering** | Corrects payload sequencing for `ItemGuardianApprovalReviewStartedNotification`, fixing frontend rendering. | UI correctness |

---

## 5. Feature Request Trends

| Theme | Evidence | Momentum |
|-------|----------|----------|
| **Remote/SSH Development** | #10450 (474 👍), #13784, #13785 | 🔥 Highest demand; gap vs. VS Code |
| **Workspace/Project Isolation** | #3550 (48 👍), #13025 (project-level MCP config) | Strong; organizational need |
| **Token Economics & Visibility** | #14593 (346 comments), #16194 (stale rate limits) | Urgent; trust issue |
| **Personality/Customization** | #16274 (merged), implied by #16249 (Ctrl+R history) | Growing; power-user focus |
| **Job Scheduling/Automation** | #16282 (experimental `/loop`) | Early; agentic workflows |
| **Cross-Platform Terminal Stability** | #2558, #7829, #15380 | Persistent; TUI debt |

---

## 6. Developer Pain Points

| Pain Point | Manifestation | Severity |
|------------|-------------|----------|
| **Opaque token consumption** | #14593 — no per-turn breakdown, unexpected Business tier burn | 🔴 Critical |
| **Windows as second-class** | #12661, #13699, #13784, #13785, #16320, #16367 — file associations, WSL crashes, WebSocket timeouts, high CPU in extension | 🔴 Critical |
| **App-server reliability** | #16364, #15824 — hangs, deadlocks, permission drops in tool-call flows | 🟡 High (actively patched) |
| **MCP configuration discovery** | #13025, #3441 — project-level `.codex/config.toml` ignored vs. global | 🟡 High |
| **Custom model provider friction** | #12669, #14276, #15492, #15494 — field drops, slug parsing, auth header loss, session hiding | 🟡 High |
| **TUI/terminal compatibility** | #2558, #7829, #12836, #16369 — Zellij, escape sequences, clipboard, rendering taste | 🟢 Medium |
| **Extension state loss** | #14812, #16341 — Linux thread history loss, Cloudflare auth failures | 🟡 High |

---

*Digest compiled from 50 issues and 50 PRs updated 2026-03-31 → 2026-04-01.*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-04-01

---

## 1. Today's Highlights

The Gemini CLI team shipped **v0.36.0-preview.7** as the latest preview build, while community attention centers on **Gemini 3.1 Pro reliability issues**—with multiple reports of unresponsive behavior, HTTP 429 rate limiting, and suspected model fallback to 2.5 Pro. Internally, the team is heavily investing in **AST-aware tooling** and **memory system enhancements** to improve agent precision and context retention.

---

## 2. Releases

| Version | Notes |
|--------|-------|
| **[v0.36.0-preview.7](https://github.com/google-gemini/gemini-cli/compare/v0.36.0-preview.6...v0.36.0-preview.7)** | Latest preview release; no detailed changelog published. Follow link for full commit comparison. |

---

## 3. Hot Issues

| Issue | Why It Matters | Community Signal |
|-------|--------------|----------------|
| **[#23854](https://github.com/google-gemini/gemini-cli/issues/23854)** — Gemini 3.1 Pro hangs endlessly | **Critical user blocker**: Reports of 3.1 Pro becoming unresponsive with no recovery; 8 upvotes and active triage requests | 🔥 High engagement; users asked to attach chat exports for debugging |
| **[#22745](https://github.com/google-gemini/gemini-cli/issues/22745)** — AST-aware file reads/search | **Architecture milestone**: EPIC investigating semantic code navigation to reduce token waste and misaligned reads | Internal priority; could reshape how agents interact with codebases |
| **[#24384](https://github.com/google-gemini/gemini-cli/issues/24384)** — HTTP 429 errors, OAuth re-auth fix | **Widespread operational pain**: Users hitting rate limits despite paid tiers; workaround (downgrading) deemed unsustainable | Fresh report (Mar 31); needs triage |
| **[#24363](https://github.com/google-gemini/gemini-cli/issues/24363)** — 3.1 Pro requests delegate to 2.5 Pro | **Trust issue**: Users selecting 3.1 Pro may unknowingly get 2.5 Pro responses; `/stats` shows identity mismatches | 2 upvotes; suggests model routing transparency problem |
| **[#22819](https://github.com/google-gemini/gemini-cli/issues/22819)** — Memory routing: global vs. project | **UX foundation**: Defines where agent memories persist—critical for multi-project workflows | Long-running; impacts personalization reliability |
| **[#24202](https://github.com/google-gemini/gemini-cli/issues/24202)** — SSH text scrambling on Windows→gLinux | **Accessibility barrier**: Breaks CLI usability for remote Windows developers | Low engagement but severe impact for affected users |
| **[#24246](https://github.com/google-gemini/gemini-cli/issues/24246)** — 400 error with >128 tools | **Scalability ceiling**: Hard limit on tool count breaking complex agent configurations | No comments yet; needs visibility |
| **[#23582](https://github.com/google-gemini/gemini-cli/issues/23582)** — Subagents unaware of approval modes | **Safety gap**: Subagents don't respect Plan/Auto-Edit modes, causing policy violations | Internal workstream; security-relevant |
| **[#23571](https://github.com/google-gemini/gemini-cli/issues/23571)** — Model creates tmp scripts randomly | **Workspace hygiene**: Uncontrolled script generation complicates git workflows | P2 priority; cleanup overhead |
| **[#22672](https://github.com/google-gemini/gemini-cli/issues/22672)** — Agent should stop destructive behavior | **Safety enhancement**: Prevents dangerous git force operations and DB modifications | 1 upvote; aligns with responsible AI goals |

---

## 4. Key PR Progress

| PR | Feature/Fix | Status |
|----|-------------|--------|
| **[#24372](https://github.com/google-gemini/gemini-cli/pull/24372)** — Ink 6.6.3 upgrade | Updates table renderer for compatibility with latest Ink terminal UI library | Open |
| **[#23937](https://github.com/google-gemini/gemini-cli/pull/23937)** — High-signal PR regression checks | Token-efficient eval validation for "usually pass" tests; reduces CI noise | Open |
| **[#24034](https://github.com/google-gemini/gemini-cli/pull/24034)** — Fix task tracker storage path | Corrects system prompt to reflect actual tracker location (`~/.gemini/tmp/...`) | Open |
| **[#23030](https://github.com/google-gemini/gemini-cli/pull/23030)** — UX Journey testing framework | Non-invasive React component testing for terminal UI without manual instrumentation | Open |
| **[#24375](https://github.com/google-gemini/gemini-cli/pull/24375)** — Pin GATEWAY auth to Gemini 3.1 | Forces JetBrains IDE integration to use 3.1 Pro/Flash Lite, bypassing experiment checks | Open |
| **[#24212](https://github.com/google-gemini/gemini-cli/pull/24212)** — SSRF DNS bypass fix | Security patch blocking private/loopback IP resolution in `web_fetch` tool | Open |
| **[#24123](https://github.com/google-gemini/gemini-cli/pull/24123)** — Skip replan on unchanged plan edits | Eliminates unnecessary agent cycles when user exits plan editor without changes | Open |
| **[#24385](https://github.com/google-gemini/gemini-cli/pull/24385)** — Browser agent overlay cleanup | Fixes blue border/input blocker persistence after browser automation completes | Open |
| **[#23041](https://github.com/google-gemini/gemini-cli/pull/23041)** — Replace YOLO mode with wildcard policy | Removes hardcoded YOLO mode; maps `--yolo` to data-driven `allowedTools: ["*"]` | Open |
| **[#24170](https://github.com/google-gemini/gemini-cli/pull/24170)** — Command injection fix in shell | Blocks `$()`, backticks, `<()` substitution in `run_shell_command` arguments | Open, help wanted |

---

## 5. Feature Request Trends

| Direction | Evidence | Momentum |
|-----------|----------|----------|
| **AST-aware code intelligence** | #22745, #22746 | 🔥 Active EPIC; could reduce token usage and improve precision |
| **Memory/personalization system** | #22819, #22809, #24272 | Multiple issues on global vs. project memory, automatic skill extraction |
| **Smarter approval/safety modes** | #23582, #22672, #23041 | Moving from hardcoded modes to policy-driven, with subagent awareness |
| **Evaluation & testing infrastructure** | #24353, #23937, #23166, #23030 | Heavy investment in behavioral evals, regression checks, UX testing |
| **Model transparency & routing** | #24363, #24384, #23823 | Users want clarity on which model actually runs |

---

## 6. Developer Pain Points

| Pain Point | Frequency | Impact |
|------------|-----------|--------|
| **Gemini 3.1 Pro instability** | 🔥🔥🔥 Multiple daily reports | Blocking production use; hangs, 429s, suspected fallbacks |
| **Rate limiting without clear paths** | 🔥🔥 Common | Paid users (Google One AI Pro) still hit quotas; OAuth re-auth friction |
| **Workspace pollution from temp files** | 🔥🔥 Recurring | Scripts scattered across directories, complicating commits |
| **SSH/terminal rendering issues** | 🔥 Windows-specific | Breaks remote development workflows |
| **Tool count scalability ceiling** | 🔥 Hard 128-tool limit | Blocks complex agent configurations |
| **Destructive operation safety** | 🔥 Ongoing concern | Need for better guardrails on git force, DB operations |

---

*Digest compiled from 50 issues and 50 PRs updated in the last 24 hours. For full details, visit [google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli).*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-04-01

## 1. Today's Highlights

GitHub shipped two rapid-fire releases (v1.0.14 and v1.0.15-0) fixing critical UX regressions including Shift+Enter behavior and terminal output corruption on errors. The community remains vocal about workflow-breaking changes, with a 6-month-old issue (#53) documenting community forks gaining 73 upvotes and 30 comments. Meanwhile, API reliability and credential-handling edge cases dominate new bug reports.

---

## 2. Releases

| Version | Date | Key Fixes |
|---------|------|-----------|
| **v1.0.15-0** | 2026-03-31 | Non-blocking MCP server startup; Windows clipboard image paste in WSL |
| **v1.0.14** | 2026-03-31 | Image support for Anthropic BYOM; model picker session override; terminal output stability; Kitty keyboard protocol support for Shift+Enter newlines |

---

## 3. Hot Issues

| # | Title | Status | Engagement | Why It Matters |
|---|-------|--------|------------|--------------|
| [#53](https://github.com/github/copilot-cli/issues/53) | Bring back the GitHub Copilot in the CLI commands to not break workflows | OPEN | 30 comments, 73 👍 | **Community rebellion**: 6 months of silence pushed users to create `shell-ai` and other forks. Signals deep dissatisfaction with CLI direction changes. |
| [#1481](https://github.com/github/copilot-cli/issues/1481) | SHIFT + ENTER should spawn a line break, but executes the prompt | OPEN | 19 comments, 11 👍 | **UX regression**: Violates universal chat conventions. Partially addressed in v1.0.15 for Kitty terminals, but standard terminals still affected. |
| [#2101](https://github.com/github/copilot-cli/issues/2101) | Request failed due to transient API error → rate limit | OPEN | 14 comments, 11 👍 | **Reliability crisis**: Users hitting aggressive rate limits during normal workflows. Suggests backend instability or overly strict throttling. |
| [#1274](https://github.com/github/copilot-cli/issues/1274) | CLI constantly getting 400 errors for invalid request body | OPEN | 12 comments, 5 👍 | **Data integrity concern**: 95% failure rate on code review tasks. Points to request crafting bugs or server-side validation drift. |
| [#2050](https://github.com/github/copilot-cli/issues/2050) | Claude Sonnet 4.6: HTTP/2 GOAWAY connection terminated | OPEN | 7 comments, 4 👍 | **Model-specific instability**: Claude 4.6 failing where Gemini 3 Pro succeeds. Indicates provider-specific integration issues. |
| [#2411](https://github.com/github/copilot-cli/issues/2411) | Shift+Enter should move to next line instead of submit | **CLOSED** | 5 comments, 2 👍 | Rapidly fixed in v1.0.15, but shows how v1.0.14 broke muscle memory for power users. |
| [#1723](https://github.com/github/copilot-cli/issues/1723) | /ide fails in VS Code - No active IDE workspaces found | OPEN | 6 comments, 2 👍 | **Integration breakage**: Fresh macOS installs failing to detect VS Code. Blocks core IDE bridging functionality. |
| [#1799](https://github.com/github/copilot-cli/issues/1799) | How to turn off alt-screen views? | OPEN | 5 comments, 1 👍 | **Feature removal backlash**: New alt-screen UI causing "quite a few issues" per reporter; no rollback path provided. |
| [#2431](https://github.com/github/copilot-cli/issues/2431) | Copilot CLI rejects valid credentials when token value doesn't match expected format | OPEN | 2 comments, 0 👍 | **Enterprise blocker**: Client-side token validation breaks proxy-based credential injection workflows. Security vs. flexibility tension. |
| [#2420](https://github.com/github/copilot-cli/issues/2420) | GPT5.3-Codex stopped responding | OPEN | 3 comments, 1 👍 | **Model availability**: Sudden model blackout post-update raises concerns about model lifecycle communication. |

---

## 4. Key PR Progress

| # | Title | Status | Description |
|---|-------|--------|-------------|
| [#2422](https://github.com/github/copilot-cli/pull/2422) | Add uninstall script for manual installs | OPEN | Addresses installation hygiene gap; adds `uninstall.sh` companion to curl/wget install flow with README documentation |

*Note: Only 1 PR updated in last 24h. Repository appears to prioritize direct commits over community PRs.*

---

## 5. Feature Request Trends

| Trend | Evidence | Community Signal |
|-------|----------|----------------|
| **Ephemeral query commands** | [#2078](https://github.com/github/copilot-cli/issues/2078) (+17 👍), [#2280](https://github.com/github/copilot-cli/issues/2280) (+5 👍) | `/btw` command for side questions without context pollution—explicitly modeled after competitors |
| **Skill organization** | [#1632](https://github.com/github/copilot-cli/issues/1632) (+2 👍) | Subfolder support for skills; flat structure unscalable beyond ~10 items |
| **Tool discoverability** | [#407](https://github.com/github/copilot-cli/issues/407) (+16 👍) | `/tools` slash command to list capabilities—knowledge gap hindering adoption |
| **Session persistence controls** | [#1611](https://github.com/github/copilot-cli/issues/1611) (+5 👍) | `--caffeine` flag to prevent sleep during long tasks; DevEx quality-of-life |
| **Hook system fixes** | [#991](https://github.com/github/copilot-cli/issues/991), [#1352](https://github.com/github/copilot-cli/issues/1352) | `sessionStart`/`sessionEnd` semantics broken; output suppression blocks automation use cases |

---

## 6. Developer Pain Points

| Category | Symptoms | Frequency |
|----------|----------|-----------|
| **Input handling regressions** | Shift+Enter, middle-click paste, native terminal copy—all broken in recent releases | **Critical**: 5+ issues in 24h |
| **API/Backend instability** | 400 errors, 503 GOAWAY, rate limits, transient failures | **High**: 4+ distinct failure modes |
| **Credential/Auth edge cases** | Token format validation too strict; proxy workflows blocked | **Emerging**: Enterprise impact |
| **Visual accessibility** | Low-contrast selection colors, alt-screen forced migration | **Moderate**: UX degradation |
| **Model availability opacity** | Sudden model blackouts without communication | **Moderate**: Trust erosion |
| **IDE integration fragility** | VS Code detection failures, workspace discovery broken | **Moderate**: Core feature instability |

---

*Digest compiled from github.com/github/copilot-cli activity through 2026-03-31.*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-04-01

## Today's Highlights

The community closed 5 critical bugs in the last 24 hours, including platform-specific command generation on Windows and LLM provider errors when processing image inputs from MCP tools. Meanwhile, contributors are actively refining the CLI's core UX with PRs addressing clipboard behavior, session management, and shell command parsing—signaling a strong focus on polish and cross-platform reliability.

---

## Releases

*No new releases in the last 24 hours.*

---

## Hot Issues

| Issue | Summary | Why It Matters |
|-------|---------|--------------|
| [#1633](https://github.com/MoonshotAI/kimi-cli/issues/1633) **Agent Swarm vs. Subagent Mode** | Request for true multi-agent interaction patterns instead of isolated subagents. | Core architectural limitation; users want collaborative agent workflows, not hierarchical delegation. 3 comments show active design discussion. |
| [#1283](https://github.com/MoonshotAI/kimi-cli/issues/1283) **Persistent Memory System** | Cross-session context retention via automatic AI-managed notes and manual user instructions. | Long-standing enhancement (created Feb 27) addressing a major gap vs. competitors like Claude Code. High user value for project continuity. |
| [#1681](https://github.com/MoonshotAI/kimi-cli/issues/1681) **UI Rendering Bugs** | Character spacing anomalies, slash display errors, and internal label leakage in terminal output. | Directly impacts perceived quality; "a dd-dir" instead of "add-dir" undermines trust in a coding tool. |
| [#1671](https://github.com/MoonshotAI/kimi-cli/issues/1671) **Content Filter False Positives** | Normal code references trigger "high risk" 400 errors for paying subscribers. | Revenue-impacting: paid users (Allegretto tier) blocked from core functionality—quoting code. |
| [#1682](https://github.com/MoonshotAI/kimi-cli/issues/1682) **Double-Enter UX Friction** | Command completion requires two Enter presses vs. one in Claude Code. | Competitive parity issue; small friction compounds across thousands of interactions. |
| [#1687](https://github.com/MoonshotAI/kimi-cli/issues/1687) **CRLF Line Ending Pollution** | File edits on Windows Terminal convert LF to CRLF, unlike Claude Code's preservation. | Cross-platform development hygiene; breaks Git workflows and POSIX tooling expectations. |
| [#1615](https://github.com/MoonshotAI/kimi-cli/issues/1615) **GLM5.1 Provider Integration** | Model feedback not received when using third-party GLM5.1 endpoint. | Expands beyond Kimi-native models; indicates growing demand for provider flexibility. |
| [#1623](https://github.com/MoonshotAI/kimi-cli/issues/1623) **Web UI Spontaneous Refresh** | Periodic page refreshes disrupt session state and user flow. | Stability concern for `kimi web` users; affects long-running tasks. |
| [#1596](https://github.com/MoonshotAI/kimi-cli/issues/1596) **AGENTS.md Priority Compliance** | Agent ignores project-level constraint files, executing user requests against explicit instructions. | Critical for enterprise/team workflows where project governance overrides individual prompts. |
| [#1672](https://github.com/MoonshotAI/kimi-cli/issues/1672) **VS Code Plan Mode UX** | Plan mode dumps markdown to file instead of conversational inline display like Codex. | Feature parity with OpenAI Codex; current implementation feels "割裂" (fragmented). |

---

## Key PR Progress

| PR | Author | Focus | Technical Note |
|----|--------|-------|--------------|
| [#1688](https://github.com/MoonshotAI/kimi-cli/pull/1688) | zhzy0077 | **ACP Protocol Fix** | Parses shell commands with arguments for `acpx` compatibility; resolves "Internal error" on multi-arg commands. |
| [#1686](https://github.com/MoonshotAI/kimi-cli/pull/1686) | wbxl2000 | **Ctrl+W Clipboard Guard** | Prevents macOS `unix-word-rubout` from overwriting system clipboard. WIP—needs edge case testing. |
| [#1685](https://github.com/MoonshotAI/kimi-cli/pull/1685) | RealKai42 | **Session Title Management** | Adds `/title` slash command; unifies session metadata into `state.json`, eliminating split state files. |
| [#1683](https://github.com/MoonshotAI/kimi-cli/pull/1683) | Dqz00116 | **Hook Context Injection** | Simplifies `UserPromptSubmit` hook usage with `inject_prompt` for dynamic context insertion. |
| [#1673](https://github.com/MoonshotAI/kimi-cli/pull/1673) | RealKai42 | **Windows Platform Detection** | Injects OS/shell info into system prompt; fixes Linux-command generation in PowerShell (closes #1649). |
| [#1670](https://github.com/MoonshotAI/kimi-cli/pull/1670) | RealKai42 | **MCP Image Content Fix** | Guarantees `TextPart` in tool results with only non-text content; resolves 400 "text content is empty" errors. |
| [#1675](https://github.com/MoonshotAI/kimi-cli/pull/1675) | RealKai42 | **Explore Agent Enhancement** | Adds specialist roles, thoroughness levels, and git context injection for richer codebase exploration. |
| [#1676](https://github.com/MoonshotAI/kimi-cli/pull/1676) | RealKai42 | **Subagent Refactoring** | Extracts shared `prepare_soul()` logic; fixes race condition in background concurrent resume. |
| [#1650](https://github.com/MoonshotAI/kimi-cli/pull/1650) | luzhongqiu | **Embedded Web Runtime** | Process-based `kimi web` runtime as default; eliminates subprocess overhead, adds session-local working directories. |
| [#1597](https://github.com/MoonshotAI/kimi-cli/pull/1597) | he-yufeng | **Python 3.13 Compatibility** | Guards `trafilatura` import to prevent cascading tool load failures from `charset-normalizer` binary incompatibility. |

---

## Feature Request Trends

1. **Agent Architecture Evolution** — Movement from hierarchical subagents (#1633) toward peer-to-peer "swarm" collaboration patterns; also demand for granular plugin enablement per agent (#1679).

2. **Context & Memory Infrastructure** — Persistent cross-session memory (#1283), improved project constraint compliance (#1596), and standardized user skills discovery (#1684, aligning with OpenAI Codex's `~/.agents/skills`).

3. **IDE Integration Depth** — VS Code-specific refinements: independent font sizing (#1680), inline plan mode (#1672), and reduced UI fragmentation between terminal and extension.

4. **Network & Proxy Flexibility** — SOCKS proxy support (#1674) and more robust connection handling for diverse enterprise environments.

---

## Developer Pain Points

| Category | Manifestation | Frequency Signal |
|----------|-------------|----------------|
| **Cross-Platform Reliability** | Windows command generation (#1649, fixed), CRLF pollution (#1687), clipboard behavior (#1567/#1686) | High—3+ issues in 24h |
| **Input/Output UX Friction** | Double-Enter requirement (#1682), image paste failures (#1617), character rendering (#1681) | High—direct productivity impact |
| **Provider & Model Flexibility** | GLM5.1 integration (#1615), content filter false positives (#1671), proxy scheme support (#1674) | Medium—expansion beyond Kimi ecosystem |
| **Session State Robustness** | Web UI refreshes (#1623), manual rename races (#1640, fixed), title management (#1685) | Medium—stability for long tasks |
| **Enterprise Governance** | AGENTS.md enforcement (#1596), plugin configurability (#1679) | Emerging—team/organization adoption signals |

---

*Data sourced from github.com/MoonshotAI/kimi-cli | Generated 2026-04-01*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-04-01

---

## 1. Today's Highlights

OpenCode shipped three patch releases (v1.3.10–v1.3.12) with critical provider fixes, including Google Vertex Anthropic prompt caching and Azure SDK v6 migration repairs. The community is actively debating a proposed "Soul & Personality System" for persistent agent identity, while Windows path normalization and TUI session list bugs dominated issue traffic. Core architecture work continues with major Effect-based service refactors landing in main.

---

## 2. Releases

| Version | Key Changes |
|---------|-------------|
| **v1.3.12** | Enabled prompt caching + cache token tracking for Google Vertex Anthropic; fixed Azure provider options forwarding post-AI SDK v6 migration; fixed TUI plugin `replace` slots mounting content multiple times |
| **v1.3.11** | Added dedicated system prompt for Kimi models (@Yuxin-Dong); improved TUI terminal output passthrough for external commands; plugins now warn instead of fail on missing entrypoints |
| **v1.3.10** | Subagent tool calls stay clickable while pending; hardened storage migration against malformed legacy records; improved Catppuccin theme muted text contrast |

---

## 3. Hot Issues

| Issue | Why It Matters | Community Reaction |
|-------|--------------|------------------|
| [#5474](https://github.com/anomalyco/opencode/issues/5474) `/undo` only rolls back messages, not file changes | Core workflow integrity bug—users expect atomic revert | 15 comments, 3 👍; acknowledged as UX gap |
| [#459](https://github.com/anomalyco/opencode/issues/459) Privacy and data collection clarification | Local-first claims need documentation trust | 13 comments, 45 👍; highest-voted open issue |
| [#11157](https://github.com/anomalyco/opencode/issues/11157) Compaction fails with GitHub Copilot Enterprise | Blocks enterprise adoption; `role: "tool"` rejected by Copilot API | 12 comments, 7 👍; needs provider-level fix |
| [#20184](https://github.com/anomalyco/opencode/issues/20184) Subagent labels non-clickable after refactor | Regression from SessionPrompt effectification broke TUI navigation | 10 comments, 4 👍; bisected to specific commit |
| [#9132](https://github.com/anomalyco/opencode/issues/9132) Official Docker sandbox template | Top feature request for isolated execution parity with Claude Code | 7 comments, 33 👍; awaiting official template |
| [#20238](https://github.com/anomalyco/opencode/issues/20238) TUI session list incomplete vs CLI | Data inconsistency between interfaces—30-day filter suspected | 6 comments; fresh report, under investigation |
| [#10884](https://github.com/anomalyco/opencode/issues/10884) MCP Apps support in desktop | MCP spec now stable (v2026-01-26); desktop integration lagging | 6 comments, 19 👍; protocol alignment needed |
| [#20354](https://github.com/anomalyco/opencode/issues/20354) Windows FileTime path normalization bug | "Must read first" false positives due to `\` vs `/` mismatch | 3 comments; PR #20367 in review |
| [#20327](https://github.com/anomalyco/opencode/issues/20327) `opencode agent list` dumps permission arrays | CLI output quality regression—usability issue | 3 comments; needs formatting fix |
| [#7832](https://github.com/anomalyco/opencode/issues/7832) Markdown agent profiles don't auto-populate referenced files | Agent DX gap—`@path/to/file.md` syntax unreliable | 3 comments; documentation vs implementation drift |

---

## 4. Key PR Progress

| PR | Description | Status |
|----|-------------|--------|
| [#20167](https://github.com/anomalyco/opencode/pull/20167) Effectify Provider service in prompt layers | Migrates Agent/SessionCompaction/SessionPrompt to `Provider.Service` pattern | Merged |
| [#20370](https://github.com/anomalyco/opencode/pull/20370) Reject empty `apply_patch` tool calls | Prevents GPT-5.4 loops with clear validation errors | Merged |
| [#16592](https://github.com/anomalyco/opencode/pull/16592) Surface LSP diagnostics on file read | Adds `diagnostics` operation to built-in LSP tool | Open, needs review |
| [#18767](https://github.com/anomalyco/opencode/pull/18767) Mobile touch optimization | Preserves desktop UX while adding touch targets/gestures | Open |
| [#13854](https://github.com/anomalyco/opencode/pull/13854) Fix streaming markdown after message completion | Derives `streaming` state from `message.time.completed` | Open |
| [#20367](https://github.com/anomalyco/opencode/pull/20367) Normalize FileTime paths for Windows | Fixes #20354 read-gate false positives via `realpathSync.native` | Open |
| [#15250](https://github.com/anomalyco/opencode/pull/15250) View & unarchive archived sessions | Settings UI for session lifecycle management | Open |
| [#9871](https://github.com/anomalyco/opencode/pull/9871) Add `/reload` slash command | Hot-reload config/plugins without TUI restart | Open |
| [#20366](https://github.com/anomalyco/opencode/pull/20366) Disable `gc.auto` in worktrees | Prevents HEAD reset to main during git compaction | Merged |
| [#20341](https://github.com/anomalyco/opencode/pull/20341) Remove 30-day limit from TUI session list | Fixes #20238 data inconsistency | Merged |

---

## 5. Feature Request Trends

| Theme | Evidence | Momentum |
|-------|----------|----------|
| **Agent Identity/Personality System** | #20334 + 6 phased child issues (#20335–#20340) | High—structured epic with compliance tags |
| **Docker Sandbox Environment** | #9132 (33 👍) | Sustained demand for isolation parity |
| **MCP Ecosystem Integration** | #10884 (MCP Apps), protocol v2026-01-26 stable | Timing-aligned with spec maturity |
| **Session Management UX** | #15250 (archiving), #20341/#20238 (list limits), #20184 (subagent nav) | Cluster of TUI workflow improvements |
| **Enterprise Provider Hardening** | #11157, #13533, #20287 (Copilot/Azure/Vertex edge cases) | Reliability focus for paid tiers |

---

## 6. Developer Pain Points

| Pain Point | Frequency | Current Mitigation |
|------------|-----------|------------------|
| **Compaction failures with enterprise providers** | Recurring (#11157, #13533, #6446) | Provider-specific workarounds; no unified fix |
| **Windows path handling inconsistencies** | High (#20354, #20367) | PR in review; normalization needed across tools |
| **Undo/rollback semantics** | Persistent (#5474) | Partial—message-only revert, files untouched |
| **TUI/CLI data parity** | Spiking (#20238, #20341) | 30-day filter removed; broader audit needed |
| **Provider option forwarding regressions** | Cyclical (#20287, v1.3.12 fix) | Post-migration stabilization ongoing |
| **Privacy documentation gaps** | Chronic (#459) | 45 👍, no official response timeline |

---

*Digest compiled from github.com/anomalyco/opencode — 50 issues, 50 PRs, 3 releases in 24h window.*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-04-01

## 1. Today's Highlights

The Pi ecosystem saw intense activity around provider integrations and TUI stability, with 37 issues and 10 PRs updated in the last 24 hours. Critical fixes landed for OpenAI Codex OAuth scoping, Z.ai tool streaming, and async extension API handling—while the community continues pushing for deeper observability (granular Anthropic cache metrics) and cross-session coordination capabilities.

---

## 2. Releases

*No releases in the last 24 hours.*

---

## 3. Hot Issues

| Issue | Why It Matters | Community Reaction |
|-------|--------------|-------------------|
| [#2690](https://github.com/badlogic/pi-mono/issues/2690) Z.AI model list/endpoint mismatch | Provider configuration bug causing pricing and model availability drift; affects cost estimation accuracy | Closed with 5 comments—root cause in `generate-models.ts` baseUrl mismatch |
| [#2702](https://github.com/badlogic/pi-mono/issues/2702) OpenAI/Azure Responses replay breaks reasoning→function_call chains | Core multi-turn tool-calling regression; breaks agent workflows with reasoning models | Open, 3 comments—active investigation on response history serialization |
| [#2656](https://github.com/badlogic/pi-mono/issues/2656) Expose granular Anthropic cache_creation breakdown | Enables cost optimization visibility for mixed-TTL caching strategies | Closed, 3 comments—merged with full `ephemeral_5m`/`ephemeral_1h` token tracking |
| [#2733](https://github.com/badlogic/pi-mono/issues/2733) Windows Terminal backspace/delete regression | UX-breaking bug in v0.64.0 affecting Windows users | Closed, 2 comments—terminal input handling fix |
| [#2707](https://github.com/badlogic/pi-mono/issues/2707) Theme variables not resolved in `/export` | Theming inconsistency between color and export blocks | Closed, 2 comments—minor but polish-critical for custom themes |
| [#2719](https://github.com/badlogic/pi-mono/issues/2719) Async `getArgumentCompletions` crashes autocomplete | Extension API fragility—blocks async completion providers | Closed, 2 comments—TypeError in Promise handling |
| [#2710](https://github.com/badlogic/pi-mono/issues/2710) OSC 8 hyperlink support for markdown links | Terminal UX enhancement for clickable agent outputs | Closed, 2 comments—accessibility/ergonomics improvement |
| [#2731](https://github.com/badlogic/pi-mono/issues/2731) Edit tool "at least one replacement" error on 0.64.0 | Critical tool regression blocking all file edits | Closed, 2 comments—`prepareArguments` + `additionalProperties:false` interaction |
| [#2687](https://github.com/badlogic/pi-mono/issues/2687) Fix inline `@<image-path>` for OpenAI-compatible VLMs | Vision-language model support gap in Chat Completions path | Closed, 2 comments—image attachment now properly serialized |
| [#2741](https://github.com/badlogic/pi-mono/issues/2741) OpenAI Codex OAuth requests wrong scopes | Gateway integration completely broken—no model API access | Closed, 1 comment—scope omission in OAuth flow |

---

## 4. Key PR Progress

| PR | Feature / Fix | Status |
|----|-------------|--------|
| [#2740](https://github.com/badlogic/pi-mono/pull/2740) Fix OpenAI Codex OAuth scopes | Adds `model.request` and `api.responses.write` scopes to enable actual API calls | **Merged** |
| [#2713](https://github.com/badlogic/pi-mono/pull/2713) Apply model switches to next queued request | Dynamic model/reasoning resolution mid-session without aborting in-flight requests | **Open** — significant architecture change |
| [#2738](https://github.com/badlogic/pi-mono/pull/2738) Defensive `Box.addChild` validation | Prevents TUI crashes from malformed custom tool renderers | **Merged** |
| [#2732](https://github.com/badlogic/pi-mono/pull/2732) Enable Z.ai tool streaming | Explicit `tool_stream: true` flag for Z.ai models supporting streaming tool calls | **Merged** |
| [#2657](https://github.com/badlogic/pi-mono/pull/2657) / [#2655](https://github.com/badlogic/pi-mono/pull/2655) Anthropic cache_creation breakdown | Surface `ephemeral_5m_tokens`/`ephemeral_1h_tokens` in usage metrics | **Merged** (duplicate PRs consolidated) |
| [#2727](https://github.com/badlogic/pi-mono/pull/2727) Community packages documentation | README section linking to ecosystem packages like `pi-grove` | **Merged** |
| [#2724](https://github.com/badlogic/pi-mono/pull/2724) Preserve diff alignment highlighting | Fix inverse highlighting on leading whitespace in `renderDiff()` | **Merged** |
| [#2721](https://github.com/badlogic/pi-mono/pull/2721) / [#2720](https://github.com/badlogic/pi-mono/pull/2720) Async `getArgumentCompletions` support | Promise-aware completion handling with validation | **Merged** (stacked PRs) |

---

## 5. Feature Request Trends

| Direction | Evidence | Momentum |
|-----------|----------|----------|
| **Cross-session coordination** | [#2715](https://github.com/badlogic/pi-mono/issues/2715) Agent Event Bus extension, [#2737](https://github.com/badlogic/pi-mono/issues/2737) RPC as first-class citizen | High — multiple architectural proposals |
| **Expanded provider ecosystem** | [#2698](https://github.com/badlogic/pi-mono/issues/2698) Opper AI gateway, [#2451](https://github.com/badlogic/pi-mono/issues/2451) Cursor Composer models | Steady — gateway abstraction maturing |
| **Observability & cost control** | [#2656](https://github.com/badlogic/pi-mono/issues/2656) granular cache metrics, implicit in multiple usage-tracking issues | Strong — enterprise/adoption blocker |
| **Server/headless operation** | [#2737](https://github.com/badlogic/pi-mono/issues/2737) RPC mode, prior server mode discussions | Emerging — infrastructure integration need |
| **Terminal UX polish** | [#2710](https://github.com/badlogic/pi-mono/issues/2710) OSC 8 links, [#1436](https://github.com/badlogic/pi-mono/issues/1436) auto light/dark mode | Consistent — developer experience focus |

---

## 6. Developer Pain Points

| Pain Point | Frequency | Recent Manifestations |
|------------|-----------|----------------------|
| **Extension API instability** | High | [#2719](https://github.com/badlogic/pi-mono/issues/2719) async crashes, [#2696](https://github.com/badlogic/pi-mono/issues/2696) provider override bugs, [#2708](https://github.com/badlogic/pi-mono/issues/2708) missing public types |
| **OAuth/Auth configuration fragility** | High | [#2741](https://github.com/badlogic/pi-mono/issues/2741) Codex scopes, [#2690](https://github.com/badlogic/pi-mono/issues/2690) Z.AI endpoint mismatch |
| **Tool execution edge cases** | Medium-High | [#2731](https://github.com/badlogic/pi-mono/issues/2731) edit tool validation, [#2692](https://github.com/badlogic/pi-mono/issues/2692) parallel tool call synchronization, [#2716](https://github.com/badlogic/pi-mono/issues/2716) abort handling |
| **TUI rendering crashes** | Medium | [#2738](https://github.com/badlogic/pi-mono/issues/2738) Box.addChild, [#2733](https://github.com/badlogic/pi-mono/issues/2733) Windows Terminal input, [#2694](https://github.com/badlogic/pi-mono/issues/2694) token estimation crashes |
| **Documentation gaps** | Medium | [#2735](https://github.com/badlogic/pi-mono/issues/2735) missing `switchSession` docs, [#2728](https://github.com/badlogic/pi-mono/issues/2728) community packages discovery |

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-04-01

## Today's Highlights

The Qwen Code team shipped a critical nightly patch (v0.13.2) while the community surfaced serious stability issues around context overflow, encoding problems with Chinese Windows usernames, and persistent Ralph loops. Developer momentum remains strong with 35 active PRs, including a major PTY file descriptor leak fix for macOS and a new compact/verbose mode toggle to reduce terminal noise during long agentic runs.

---

## Releases

| Version | Date | Notes |
|---------|------|-------|
| [v0.13.2-nightly.20260331.1b1a029fd](https://github.com/QwenLM/qwen-code/compare/v0.13.2...v0.13.2-nightly.20260331.1b1a029fd) | 2026-03-31 | Nightly build; full changelog available via GitHub compare |

---

## Hot Issues

| # | Title | Why It Matters | Status |
|---|-------|--------------|--------|
| [#2757](https://github.com/QwenLM/qwen-code/issues/2757) | Git commit generation crashes in v0.13.2 | Core workflow regression affecting CI/CD automation; 4 comments indicate active investigation | 🔴 Open |
| [#1923](https://github.com/QwenLM/qwen-code/issues/1923) | Directory paths with spaces mishandled | Long-standing I18N issue breaking Chinese directory structures; affects `/APP规划/` vs `/APP 规划/` parsing | 🔴 Open |
| [#2768](https://github.com/QwenLM/qwen-code/issues/2768) | Install script overwrites `.npmrc` and auto-starts | Breaking automated deployment pipelines; user reports blocked multi-tool installation workflows | 🔴 Open |
| [#2609](https://github.com/QwenLM/qwen-code/issues/2609) | `web_fetch` returns AI greetings instead of content | Severe tool reliability issue—web research capability effectively broken for Bailian API users | 🔴 Open |
| [#2678](https://github.com/QwenLM/qwen-code/issues/2678) | Messages invisible in long conversations, stop button fails | Critical UI freeze requiring VSCode restart; reported twice in 5 days | 🔴 Open |
| [#2761](https://github.com/QwenLM/qwen-code/issues/2761) | Compression failure | Context management breakdown; screenshot shows error state blocking long sessions | 🔴 Open |
| [#2759](https://github.com/QwenLM/qwen-code/issues/2759) | Qwen3.6 unavailable in QwenCode (but available in OpenCode) | Embarrassing parity gap between Alibaba's own products; high visibility complaint | 🔴 Open |
| [#2762](https://github.com/QwenLM/qwen-code/issues/2762) | Context exceeds 100% | Overflow handling failure; screenshot shows 100%+ usage breaking execution | 🔴 Open |
| [#2746](https://github.com/QwenLM/qwen-code/issues/2746) | Garbled characters with Chinese Windows username | Encoding regression affecting core user demographic; mojibake in paths and logs | 🔴 Open |
| [#2740](https://github.com/QwenLM/qwen-code/issues/2740) | Shell command freeze (tree-sitter WASM missing) | **Closed** but symptomatic of recurring WASM path resolution failures; same root cause as [#2758](https://github.com/QwenLM/qwen-code/issues/2758) | ✅ Closed |

---

## Key PR Progress

| # | Title | Feature/Fix | Status |
|---|-------|-------------|--------|
| [#2777](https://github.com/QwenLM/qwen-code/pull/2777) | Upgrade `@lydell/node-pty` to fix PTY FD leak on macOS | **Critical fix**: Resolves system-wide PTY pool exhaustion breaking tmux/terminals; upgrades 1.1.0 → 1.2.0-beta.10 | 🟡 Open |
| [#2776](https://github.com/QwenLM/qwen-code/pull/2776) | Enhance `/btw` side question with Ctrl+C/D cancel | UX polish: Prevents tool misuse in side questions, adds graceful cancellation | 🟡 Open |
| [#2770](https://github.com/QwenLM/qwen-code/pull/2770) | Compact/verbose mode toggle (Ctrl+O) | **Major UX**: Addresses [#2767](https://github.com/QwenLM/qwen-code/issues/2767); hides tool output/thinking by default, reduces terminal noise | 🟡 Open |
| [#2771](https://github.com/QwenLM/qwen-code/pull/2771) | SDK `canUseTool` interrupt handling | Infrastructure: Cascade-cancels pending tools on SDK denial with `interrupt: true` | 🟡 Open |
| [#2766](https://github.com/QwenLM/qwen-code/pull/2766) | Display ">100%" when context exceeds limit | UX fix for [#2762](https://github.com/QwenLM/qwen-code/issues/2762): Adds red warning + guidance to use `/compress` or `/clear` | 🟡 Open |
| [#2763](https://github.com/QwenLM/qwen-code/pull/2763) | Allow web fetch approvals in plan mode | Enables research workflows in planning mode; read-only tools now promptable while blocking mutating tools | 🟡 Open |
| [#2760](https://github.com/QwenLM/qwen-code/pull/2760) | Fix `@lydell/node-pty` optional deps for Windows | Resolves "could not find the binary" shell command failures on Windows | 🟡 Open |
| [#2765](https://github.com/QwenLM/qwen-code/pull/2765) | Fix subagent telemetry overwriting main agent footer | Stops footer flicker during concurrent subagent execution; corrects merge regression from #1835 | 🟡 Open |
| [#2628](https://github.com/QwenLM/qwen-code/pull/2628) | Channels platform with Telegram/WeChat/DingTalk | **Major feature**: Plugin-based messaging platform integration for team workflows | 🟡 Open |
| [#2732](https://github.com/QwenLM/qwen-code/pull/2732) | Math rendering + Markdown validator | Quality-of-life: LaTeX/fraction display + prevents code block breaking | 🟡 Open |

---

## Feature Request Trends

| Theme | Evidence | Momentum |
|-------|----------|----------|
| **Terminal UX noise reduction** | [#2767](https://github.com/QwenLM/qwen-code/issues/2767) + PR [#2770](https://github.com/QwenLM/qwen-code/pull/2770) | 🔥 Active implementation |
| **Account/session visibility** | [#2772](https://github.com/QwenLM/qwen-code/issues/2772) | Growing |
| **WebFetch in planning mode** | [#2754](https://github.com/QwenLM/qwen-code/issues/2754) + PR [#2763](https://github.com/QwenLM/qwen-code/pull/2763) | 🔥 Addressed |
| **Cross-platform messaging integration** | PR [#2628](https://github.com/QwenLM/qwen-code/pull/2628) | 🔥 In progress |
| **Model parity (Qwen3.6)** | [#2759](https://github.com/QwenLM/qwen-code/issues/2759) | Blocked/complaint-driven |

---

## Developer Pain Points

| Issue | Frequency | Severity | Tracking |
|-------|-----------|----------|----------|
| **Context overflow handling** | 3+ reports (#2762, #2761, #2678) | 🔴 Critical | PR [#2766](https://github.com/QwenLM/qwen-code/pull/2766) partial fix |
| **WASM/path resolution failures** | 3+ issues (#2740, #2758, tree-sitter paths) | 🔴 Critical | Ongoing; macOS PTY fix in [#2777](https://github.com/QwenLM/qwen-code/pull/2777) |
| **Windows encoding/I18N** | 2+ issues (#1923, #2746) | 🟡 High | Needs dedicated pass |
| **Installation automation** | [#2768](https://github.com/QwenLM/qwen-code/issues/2768) | 🟡 High | Breaking CI/CD pipelines |
| **Ralph loop persistence** | [#2657](https://github.com/QwenLM/qwen-code/issues/2657) (closed), [#2674](https://github.com/QwenLM/qwen-code/pull/2674) | 🟡 Medium | Partially addressed |
| **Stop/termination failures** | [#2678](https://github.com/QwenLM/qwen-code/issues/2678), [#2775](https://github.com/QwenLM/qwen-code/issues/2775) | 🔴 Critical | UI responsiveness gap |

---

*Digest compiled from github.com/QwenLM/qwen-code — 21 issues, 35 PRs, 1 release in 24h window.*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*