# AI CLI Tools Community Digest 2026-07-09

> Generated: 2026-07-09 01:50 UTC | Tools covered: 9

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Gemini CLI](https://github.com/google-gemini/gemini-cli)
- [GitHub Copilot CLI](https://github.com/github/copilot-cli)
- [Kimi Code CLI](https://github.com/MoonshotAI/kimi-cli)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Pi](https://github.com/badlogic/pi-mono)
- [Qwen Code](https://github.com/QwenLM/qwen-code)
- [DeepSeek TUI](https://github.com/Hmbown/DeepSeek-TUI)
- [Claude Code Skills](https://github.com/anthropics/skills)

---

## Cross-Tool Comparison

# Cross-Tool Comparison Report: AI CLI Developer Tools Ecosystem
**Analysis Date:** 2026-07-09

---

## 1. Ecosystem Overview

The AI CLI developer tools ecosystem on July 9, 2026 reveals a landscape in active, uneven maturation. The dominant theme across all major tools is **agent reliability degradation** — runaway token consumption, sub-agent loop bugs, and session management gaps are plaguing users regardless of vendor. A clear **platform stratification** exists: Claude Code and OpenAI Codex lead in raw community engagement and feature velocity, while Gemini CLI, Pi, and DeepSeek TUI show rapid iteration on specific architectural improvements (security, agent orchestration, Android support). **Cost transparency** has emerged as a cross-cutting trust issue, with users across Claude Code and Codex reporting billing mismatches and unexplained quota depletion. The ecosystem is collectively struggling with the transition from single-agent to multi-agent architectures, lacking the lifecycle controls and cost-aware orchestration needed for production reliability.

---

## 2. Activity Comparison

| Tool | Open Issues (Top 10) | PRs Active (Top 10) | Release Status | Key Community Size Signal |
|---|---|---|---|---|
| **Claude Code** | 10 (1,710-5,699 total) | 10 active | v2.1.205 (patch) | 70👍 on top issue; 44 comments |
| **OpenAI Codex** | 10 (28224-31676) | 10 active | Rust alpha builds only | 427👍 on top issue; 142 comments |
| **Gemini CLI** | 10 (22323-24246) | 10 active | v0.50.0 stable + v0.51.0-preview | 10 comments on top issue |
| **GitHub Copilot CLI** | 10 (618-4059) | 2 (stale) | No release in 24h | 99👍 on closed feature request |
| **Kimi Code CLI** | 1 active issue | 0 | None | 0👍; low engagement |
| **OpenCode** | 10 (20995-35952) | 10 active | None in 24h | 96👍 on top feature request |
| **Pi** | 10 (5263-6438) | 10 (6 merged) | None in 24h | 6👍 on top issue |
| **Qwen Code** | 10 (6378-6246) | 10 active | v0.19.8 (stable) | 19 comments on top RFC |
| **DeepSeek TUI** | 10 (4092-4238) | 10 (all merged) | v0.8.68 milestone active | 50 comments on execution board |

**Key observations:**
- **OpenAI Codex** has the most intense community engagement by react count (427👍 on SQLite logging issue)
- **DeepSeek TUI** is the fastest iteration cycle: 42 PRs merged in 24 hours
- **Claude Code** and **OpenCode** have the highest volume of open issues, indicating active user bases
- **Kimi Code CLI** is notably quiet: 1 issue, 0 PRs — likely in a maintenance lull or low adoption
- **GitHub Copilot CLI** has the most stale PR pipeline: only 2 PRs, neither substantive

---

## 3. Shared Feature Directions

Five requirements appear across three or more tool communities:

### 3.1 Cost-Aware Agent Orchestration
- **Claude Code:** Runaway tokens (#42249, #55053), parallel agent spawning (#67636), unkillable background agents (#75314)
- **OpenAI Codex:** Paid account limits drain after one prompt (#31668), unexplained quota consumption (#31647)
- **Gemini CLI:** Agent hangs waste API quotas (#21409), recursive reasoning turn limit PR (#28164)
- **OpenCode:** Agent loops 277 times on MCP resource_list (#31942), non-resumable tasks (#35952)
- **DeepSeek TUI:** Parent model burns turns in polling loop (#4097)
- **Common need:** Per-agent token budgets, circuit breakers, kill switches, and billing transparency

### 3.2 Multi-Model / Multi-Provider Routing
- **Claude Code:** Sub-agent billing opacity — Opus billed as Fable (#73597)
- **OpenAI Codex:** Automatic model switching between planning and execution (#2792)
- **Gemini CLI:** >128 tools triggers 400 error (#24246)
- **Pi:** Per-sub-agent provider assignment + LM Studio support (#3965)
- **DeepSeek TUI:** AgentProfile provider routing PR (#4262), custom providers like lm-studio
- **Common need:** Ability to assign different models/providers to sub-agents, with transparent billing

### 3.3 Session Lifecycle Management & Resilience
- **Claude Code:** Session compression transparency (#75924), no kill switch (#75314)
- **OpenAI Codex:** Cross-session MCP auth expiry (#31486 PR), worktree interference (#23515)
- **Gemini CLI:** Settings.json overrides ignored by Browser Agent (#22267)
- **OpenCode:** Tasks not resumable on failure (#35952), session race conditions (V2 refactoring)
- **Pi:** Session settlement bugs (#5886), compaction mid-turn (#6424)
- **Qwen Code:** Multi-workspace daemon support RFC (#6378), session history truncation (#6501)
- **Common need:** Persistent, resumable, inspectable sessions with proper lifecycle controls

### 3.4 Windows Platform Parity
- **Claude Code:** Cowork broken on Windows 11 (#74649), OneDrive cross-device links (#45178)
- **OpenAI Codex:** apply_patch fails from sandbox path (#29072), desktop UI freezes (#31676)
- **Qwen Code:** Extension install fails due to stale temp directories (#6545)
- **DeepSeek TUI:** Android/Termux support (5 issues this week)
- **Common need:** First-class Windows support — not just functional but reliable

### 3.5 Agent Observability & Debugging
- **Claude Code:** Pre-tool-call text dropped from transcripts (#65620)
- **Gemini CLI:** Subagent success masking failures (#22323), bug report lacks subagent context (#21763)
- **OpenCode:** Tokens per second display (#6096)
- **Pi:** Prompt cache miss tracking PR (#6427)
- **DeepSeek TUI:** Startup latency profiling (#3757)
- **Common need:** Visible token usage, agent decision logging, subagent trajectory inspection

---

## 4. Differentiation Analysis

### Feature Focus

| Dimension | Claude Code | OpenAI Codex | Gemini CLI | Pi | DeepSeek TUI |
|---|---|---|---|---|---|
| **Primary strength** | Rich plugin ecosystem, VS Code integration | GPT-5.5 model capability, exec-server observability | Security posture, A2A protocol, tool registry | Provider flexibility, session serialization | High-velocity refactoring, Android support |
| **Weakest area** | Cost controls, Windows support | Tool-calling reliability, Windows stability | Agent reliability (hangs, fake success) | Compaction race conditions, binary breakage | Documentation lag, fleet complexity |
| **Unique features** | Cowork, Advisor, Fable sub-agents | Computer Use, OpenAI Responses API | A2A server, Caretaker triage automation | Novita AI provider, JSONL session headers | Fleet agent profiles, Termux/Android builds |

### Target Users

| Tool | Primary User | Secondary User |
|---|---|---|
| **Claude Code** | Professional developers in Anthropic ecosystem | Teams using Sonnet/Opus models |
| **OpenAI Codex** | GPT-5.5 power users, OpenAI API heavy users | Enterprise with security requirements |
| **Gemini CLI** | Google Cloud developers, security-conscious teams | Multi-provider experimenters |
| **GitHub Copilot CLI** | GitHub ecosystem developers, enterprise BYOK users | IDE extension power users |
| **Kimi Code** | Moonshot AI users (primarily Chinese market) | Enterprise behind corporate proxies |
| **OpenCode** | Open-source enthusiasts, Ollama users | Multi-provider developers |
| **Pi** | Developer tool builders, extension authors | Multi-provider testers |
| **Qwen Code** | QwenLM ecosystem, Chinese developers | Daemon-based CI/CD users |
| **DeepSeek TUI** | Rust developers, terminal purists | Android/Termux mobile developers |

### Technical Approach

- **Claude Code & OpenAI Codex:** Proprietary, closed-source, heavy investment in multi-agent orchestration (Advisor, sub-agents)
- **Gemini CLI:** Open development, strong security focus (SSRF, OAuth, A2A protocol), modular agent architecture
- **Pi:** Extremely extensible, provider-agnostic, JSONL session format enables external tooling
- **DeepSeek TUI:** Rust-based, highest iteration velocity, TUI-first design, Fleet agent profiles for complex routing
- **OpenCode & Qwen Code:** Open-source, multi-provider, support for Ollama and local models
- **Kimi Code:** Minimalist, single-provider (Moonshot AI), low community engagement

---

## 5. Community Momentum & Maturity

### High Momentum (Rapid Iteration, Growing Communities)

| Tool | Evidence |
|---|---|
| **DeepSeek TUI** | 42 PRs merged in 24h, 16+ parallel milestone lanes, first-time contributor feature (tool sandboxing), Android support push |
| **Claude Code** | v2.1.205 patch, 70👍+ issues, active plugin ecosystem (protect-mcp, code-review), sustained high-volume issue tracker |
| **OpenAI Codex** | 427👍 on single issue, Rust alpha builds accelerating, exec-server observability investments, high community engagement |
| **Pi** | 6 PRs merged in 24h, 21 issues closed, strong extension author community, provider diversity growing |

### Steady State (Active but Lower Velocity)

| Tool | Evidence |
|---|---|
| **Gemini CLI** | v0.50.0 stable + preview track, security PRs converging, moderate community engagement (10 comments top issue) |
| **OpenCode** | 10 PRs active, V2 refactoring maturing, strong feature request response (96👍 on usage API) |
| **Qwen Code** | v0.19.8 released, multi-workspace RFC active, moderate issue activity, CI pipeline issues |

### Low Engagement / Stalling

| Tool | Evidence |
|---|---|
| **GitHub Copilot CLI** | 0 releases in 24h, only 2 stale PRs (no descriptions), 99👍 feature request closed without implementation, agent loop bug duplication suggests systemic unresolved issues |
| **Kimi Code CLI** | 1 issue updated in 24h, 0 PRs, 0 releases, 0👍 on open issue — likely lowest adoption or maintenance hiatus |

### Maturity Assessment

| Tool | Maturity Level | Risk Factors |
|---|---|---|
| **Claude Code** | High — established plugin ecosystem, regular releases | Token cost crisis eroding trust, Windows gaps limit enterprise adoption |
| **OpenAI Codex** | High — strong GPT-5.5 integration, enterprise security features | Tool-calling regression critical, Rust alpha indicates instability |
| **GitHub Copilot CLI** | Medium — GitHub ecosystem leverage, but stalled development | PR pipeline near-empty, agent loop bugs unresolved, feature requests closed without action |
| **Gemini CLI** | Medium-High — good release cadence, security maturity | Agent reliability (fake success, hangs) is a fundamental trust issue |
| **Pi** | Medium — fast iteration, extensible, but buggy | Compaction race conditions, binary breakage, provider API mismatches |
| **OpenCode** | Medium — active community, V2 refactoring | V2 instability introducing new bugs, Ollama compatibility regressions |
| **Qwen Code** | Medium — stable releases, growing feature set | Session data integrity issues, CI pipeline opacity, low community reaction |
| **DeepSeek TUI** | Medium-High — very high velocity, strong architecture | Documentation and onboarding gaps, fleet configuration complexity |
| **Kimi Code** | Low — minimal activity, single provider | Visibility suggests very low adoption; enterprise SSL issue is existential blocker |

---

## 6. Trend Signals

### Critical Industry Trends (from community feedback)

**1. Multi-Agent Architecture is Premature for Production**
Every major tool reports agent orchestration failures: runaway spawning, infinite loops, fake success reporting, deadlocked sub-agents. The industry shipped multi-agent before building proper lifecycle controls. **Key signal:** Claude Code's 10-15 parallel agents burning millions of tokens (#67636), Gemini CLI's fake GOAL success (#22323), OpenAI Codex's 277 identical MCP calls (#31942).

**2. Cost Transparency is a Trust Crisis**
Users across Claude Code, OpenAI Codex, and Pi report being billed for sub-agents at rates inconsistent with advertised pricing. **Key signal:** Claude Code's Opus billed as Fable (#73597), Codex paid accounts draining after one prompt (#31668), Pi's Anthropic OAuth missing billing markers (#6421). **Implication:** Without cost-aware defaults and real-time billing visibility, the multi-agent paradigm will face adoption resistance.

**3. Windows is Becoming a Blocking Issue**
Claude Code's Cowork non-functional, Codex's sandbox failures, Copilot's Gatekeeper friction — Windows users are systematically underserved. **Key signal:** 5+ distinct Windows issues across tools, all causing complete workflow blocks in enterprise environments. **Implication:** Tools that solve Windows reliability first will capture enterprise market share.

**4. The "Extensible Agent" Race is On**
Claude Code's plugin system, Pi's extension framework, Gemini CLI's A2A protocol, and DeepSeek TUI's Fleet profiles all represent bets on composable agent architectures. **Key signal:** Claude Code's protect-mcp plugin (Cedar policy gate), Pi's exported InMemorySessionStorage, DeepSeek's AgentProfile routing. **Implication:** Lock-in risk is high — the first tool to build a thriving agent-extension marketplace will define the ecosystem's standard.

**5. CI/CD Integration is the Next Frontier**
Qwen Code's multi-workspace daemon RFC, Gemini CLI's scheduled tasks, DeepSeek TUI's Fleet profiles for automated workflows — tools are evolving from REPL tools to CI/CD pipeline components. **Key signal:** Qwen Code's daemon session persistence PR (#6557), Gemini's Caretaker triage worker (#28306). **Implication:** Agent-as-a-service architecture (daemon, not CLI) will be the platform play of 2026-2027.

**6. Model Diversity is Both a Feature and a Bug**
Users demand multi-provider flexibility but suffer integration failures — OpenCode's Gemma 4 tool calls fail via Ollama, Pi's OpenCode provider 500 errors, Qwen Code's Claude temperature deprecation. **Key signal:** 4+ provider-specific failure issues across tools. **Implication:** The tool that builds the most robust provider abstraction layer (schema validation, error translation, fallback) will win the multi-provider market.

### Reference Value for Developers

| Decision | Recommended Action |
|---|---|
| **Picking a primary tool** | Claude Code for ecosystem depth, DeepSeek TUI for rapid iteration, Pi for extensibility |
| **Avoiding cost surprises** | Set hard token budgets, prefer tools with billing transparency (Pi's prompt cache tracking, OpenCode's usage API request) |
| **Enterprise deployment** | Gemini CLI for security posture, Claude Code for plugin ecosystem — but test Windows support thoroughly |
| **Multi-provider strategy** | Pi or DeepSeek TUI for provider flexibility — but expect integration hiccups |
| **CI/CD integration** | Qwen Code's daemon architecture is ahead; watch for multi-workspace support |
| **Mobile/Android development** | DeepSeek TUI is the only tool with active Termux support |
| **Lowest risk** | Claude Code has the most mature ecosystem despite cost concerns; avoid Kimi Code and monitor GitHub Copilot CLI for signs of revival |

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
**Data source:** github.com/anthropics/skills | **Snapshot:** 2026-07-09

---

## 1. Top Skills Ranking

The community's most-discussed Skills by PR activity (comments/attention) reveal a strong focus on **Skill infrastructure reliability** alongside domain-specific additions.

### 1. `skill-creator` fix — run_eval recall regression (#1298)
- **What it does:** Repairs `run_eval.py` so the description-optimization loop (`run_loop.py`, `improve_description.py`) reports accurate recall instead of 0% for every skill description. Fixes install the eval artifact as a real skill to ensure Claude's tool-trigger matching works. Also addresses Windows stream reading and parallel-worker trigger detection.
- **Discussion highlights:** References Issue #556 (12 comments, 7 👍) and 10+ independent reproductions—this is the most consistently broken component in the ecosystem. The community treats accurate eval as blocking for any skill development workflow.
- **Status:** Open | [PR #1298](https://github.com/anthropics/skills/pull/1298)

### 2. `document-typography` — typographic quality control (#514)
- **What it does:** Prevents orphan word wrap, widow paragraphs, and numbering misalignment in AI-generated documents. Targets pervasive formatting defects users rarely explicitly request.
- **Discussion highlights:** Authors note "every document Claude generates" is affected; community interest centers on whether this should be a core behavior rather than an optional skill.
- **Status:** Open | [PR #514](https://github.com/anthropics/skills/pull/514)

### 3. `self-audit` — mechanical verification + reasoning audit (#1367)
- **What it does:** A universal audit skill that first verifies every claimed output file exists (mechanical check), then runs a four-dimension reasoning quality audit in damage-severity priority order. Claims to work with any project, any tech stack, any model.
- **Discussion highlights:** Proposes v1.3.0 with significant architectural ambition; community discussion focuses on whether the audit dimensions are sufficiently generic.
- **Status:** Open | [PR #1367](https://github.com/anthropics/skills/pull/1367)

### 4. `testing-patterns` — full-stack testing coverage (#723)
- **What it does:** Covers testing philosophy (Trophy model), unit testing (AAA pattern), React component testing (Testing Library), E2E (Playwright), and performance/visual regression testing.
- **Discussion highlights:** Community values the comprehensive approach but questions whether a single skill can effectively cover so many domains without becoming too broad for Claude to follow reliably.
- **Status:** Open | [PR #723](https://github.com/anthropics/skills/pull/723)

### 5. `ODT` — OpenDocument text creation (#486)
- **What it does:** Create, fill, read, and convert OpenDocument Format files (.odt, .ods). Triggers on mentions of ODT, ODS, ODF, OpenDocument, or LibreOffice documents.
- **Discussion highlights:** Addresses a clear gap—no standard ODF support existed; community wants interoperability with existing DOCX/PDF skills.
- **Status:** Open | [PR #486](https://github.com/anthropics/skills/pull/486)

### 6. `skill-quality-analyzer` + `skill-security-analyzer` (#83)
- **What it does:** Meta-skills for evaluating other skills across structure/documentation (20%), correctness, efficiency, and security. The security analyzer specifically checks for trust boundary vulnerabilities.
- **Discussion highlights:** Triggered conversation about whether Anthropic should provide official quality/linting tooling rather than community-maintained meta-skills.
- **Status:** Open | [PR #83](https://github.com/anthropics/skills/pull/83)

### 7. `color-expert` — comprehensive color knowledge (#1302)
- **What it does:** Covers color naming systems (ISCC-NBS, Munsell, XKCD, RAL, Ridgway, CSS named), color spaces with "what to use when" tables, and cultural/accessibility color guidance.
- **Discussion highlights:** Self-contained, well-scoped skill; community appreciates the practical decision tables (OKLCH for scales, OKLAB for gradients).
- **Status:** Open | [PR #1302](https://github.com/anthropics/skills/pull/1302)

### 8. `SAP-RPT-1-OSS predictor` — tabular foundation model (#181)
- **What it does:** Integrates SAP's open-source tabular foundation model for predictive analytics on SAP business data.
- **Discussion highlights:** Niche but high-value for enterprise users; discussion centers on API key management and model-serving latency.
- **Status:** Open | [PR #181](https://github.com/anthropics/skills/pull/181)

---

## 2. Community Demand Trends

From the most-active Issues, the community's most-anticipated new Skill directions include:

| Demand Signal | Issue # | Discussion Depth | Key Request |
|---|---|---|---|
| **Security & trust boundaries** | [#492](https://github.com/anthropics/skills/issues/492) | 34 comments, 2 👍 | Community skills distributed under `anthropic/` namespace enable trust abuse—need namespacing or verification |
| **Org-wide skill sharing** | [#228](https://github.com/anthropics/skills/issues/228) | 14 comments, 7 👍 | Skills should be shareable via library/link rather than manual .skill file distribution |
| **Skill-creator reliability** | [#556](https://github.com/anthropics/skills/issues/556) | 12 comments, 7 👍 | `run_eval.py` 0% trigger rate blocks all skill development—**most critical infrastructure issue** |
| **Memory/state management** | [#1329](https://github.com/anthropics/skills/issues/1329) | 9 comments | Compact symbolic notation for long-running agent state to save context window |
| **Deduplication** | [#189](https://github.com/anthropics/skills/issues/189) | 6 comments, 9 👍 | Installer plugins (document-skills, example-skills) install identical content—high community frustration |
| **Agent governance** | [#412](https://github.com/anthropics/skills/issues/412) | 6 comments | Policy enforcement, threat detection, trust scoring, audit trails for AI agent systems |
| **MCP interoperability** | [#16](https://github.com/anthropics/skills/issues/16) | 4 comments | Expose Skills as MCPs for standardized API signaling |

**Top 3 community asks:**
1. **Reliable Skill-evaluation infrastructure** (Issues #556, #1169, #1061) — the optimization loop is broken across platforms
2. **Security/trust modeling** (#492) — namespace verification for community-contributed skills
3. **Skill management UX** (#228, #189) — sharing, deduplication, installation UX

---

## 3. High-Potential Pending Skills

These PRs have active discussion and are **not yet merged**; they address clear pain points and are likely to land soon:

| Skill | PR | Why It Matters | Blockers |
|---|---|---|---|
| **self-audit** (#1367) | [Link](https://github.com/anthropics/skills/pull/1367) | Universal audit—mechanical file verification + reasoning quality gate. Universal across projects. | Audit dimension coverage debate; v1.3.0 specification |
| **color-expert** (#1302) | [Link](https://github.com/anthropics/skills/pull/1302) | Well-scoped, self-contained, practical. Addresses a clear omission in creative skills. | Minimal—nearing merge |
| **document-typography** (#514) | [Link](https://github.com/anthropics/skills/pull/514) | Fixes widespread "every document" quality defect. High practical value. | Should this be default behavior? |
| **ODT support** (#486) | [Link](https://github.com/anthropics/skills/pull/486) | Fills document-format gap. Enterprise demand. | Integration with existing DOCX/PDF skills |
| **testing-patterns** (#723) | [Link](https://github.com/anthropics/skills/pull/723) | Comprehensive—Trophy model, unit, React, E2E. | Scope breadth (risk of low actionability) |
| **COMPREHENSIVE CONTRIBUTING.md** (#509) | [Link](https://github.com/anthropics/skills/pull/509) | Addresses community health gap—repo scores 25% on health metrics | Minimal—process only |
| **skill-quality-analyzer** (#83) | [Link](https://github.com/anthropics/skills/pull/83) | Meta-skill for quality evaluation; security analyzer included | Should this be official Anthropic tooling? |

---

## 4. Skills Ecosystem Insight

**The community's most concentrated demand is for reliable Skill-development infrastructure**—the `skill-creator` evaluation pipeline (`run_eval.py` recall bugs, Windows compatibility, parallel-worker trigger detection) is the single highest-friction point, with 10+ independent reproductions of 0% recall across all queries, blocking the entire skill optimization workflow.

---

# Claude Code Community Digest — July 9, 2026

## Today's Highlights

A fresh patch (v2.1.205) ships with session transcript tampering protections and JSON schema fixes, but the community remains laser-focused on two persistent pain points: runaway token/credit consumption and platform-specific Cowork reliability issues. Several high-priority agent behavior bugs surfaced this week, including reports of parallel agents spawning uncontrollably and background sessions stuck for 34+ hours, burning millions of tokens with no kill switch.

## Releases

**v2.1.205** — [Release](https://github.com/anthropics/claude-code/releases/tag/v2.1.205)

- Added an auto-mode rule that prevents Claude from tampering with session transcript files
- Fixed `--json-schema` silently producing unstructured output when the schema was invalid, and schemas using the `format` keyword being rejected
- Fixed a message sent while Claude was working being silently dropped

## Hot Issues (Top 10)

1. **[#69238](https://github.com/anthropics/claude-code/issues/69238)** — **No response from API error when Advisor is triggered** (44 comments, 70 👍). Users on Sonnet base models hit "No response from API — Retrying in 2m 25s" errors whenever the Opus 4.8 Advisor sub-agent fires. High community engagement suggests this is a widespread reliability blocker.

2. **[#42249](https://github.com/anthropics/claude-code/issues/42249)** — **Extreme token consumption — quota depleted in minutes with normal usage** (39 comments). A long-running issue (since April) where standard read/edit/git workflows consume tokens 10–50× faster than expected. Still open with no resolution posted; daily limit depletes in ~1 hour.

3. **[#55053](https://github.com/anthropics/claude-code/issues/55053)** — **Sudden 5-hour session window squeeze starting Apr 29** (37 comments). Session window depletion rate increased 5–10× overnight. Sonnet sub-agents launched for trivial tasks are cited as the primary source of acceleration.

4. **[#74649](https://github.com/anthropics/claude-code/issues/74649)** — **Missing HCS services: vfpext — Cowork not working on Windows 11 Pro** (23 comments). Cowork feature blocked on Windows due to missing Hyper-V container services. Users have virtualization fully enabled but the tool reports `unsupported` status.

5. **[#65620](https://github.com/anthropics/claude-code/issues/65620)** — **Pre-tool-call assistant text never emitted (prose stays in thinking)** (18 comments). Regression since ~v2.1.162: text blocks are silently dropped from session transcripts when the model interleaves thinking and text. Affects reproducibility of agent sessions.

6. **[#67506](https://github.com/anthropics/claude-code/issues/67506)** — **Token consumption with Fable 5 not matching its description** (16 comments). Users report that Fable 5 model billing does not align with advertised pricing. Opus sub-agents being billed as Fable is also reported ([#73597](https://github.com/anthropics/claude-code/issues/73597)).

7. **[#45178](https://github.com/anthropics/claude-code/issues/45178)** — **Cowork EXDEV: cross-device link not permitted — Windows 11 + OneDrive** (14 comments). Cowork fails on Windows when OneDrive is present due to file rename operations crossing device boundaries within the same logical directory.

8. **[#64777](https://github.com/anthropics/claude-code/issues/64777)** — **API Error 400 — str is not valid UTF-8: surrogates not allowed** (8 comments). Mid-conversation crash on Windows/VSCode caused by invalid UTF-8 surrogate pairs in request bodies. Related issue [#69781](https://github.com/anthropics/claude-code/issues/69781) affects image attachments on macOS.

9. **[#67636](https://github.com/anthropics/claude-code/issues/67636)** — **Parallel agent spawning causes excessive token consumption before crashing** (5 comments). Claude spawned 10–15 parallel agents for tasks that needed 1–2, burning millions of tokens before the entire batch crashed. Community sentiment: agent orchestration lacks any kind of cost-aware throttling.

10. **[#75314](https://github.com/anthropics/claude-code/issues/75314)** — **10 background Agent tasks stuck running for 34+ hours, no way to cancel** (3 comments). Unkillable background agents consumed ~1M tokens with no session management UI to terminate them. Highlights a critical gap in agent lifecycle controls.

## Key PR Progress (Top 10)

1. **[#75938](https://github.com/anthropics/claude-code/pull/75938)** — **fix(sweep): unstarve markStale via search API** — Fixes the stale-issue labeling pipeline that was only processing the 10 oldest items, leaving all others permanently skipped. Now leverages the GitHub search API for correct pagination.

2. **[#41447](https://github.com/anthropics/claude-code/pull/41447)** — **feat: open source claude code ✨** — A sweeping PR that claims to close multiple foundational issues (including #59, #456, #2846, #22002, #41434). Still open; represents the community's continued interest in an open-source release.

3. **[#75541](https://github.com/anthropics/claude-code/pull/75541)** — **fix(sweep): paginate issue events and honor unlabeled** — Fixes `closeExpired()` in the sweep script which would miss lifecycle labels due to incomplete event pagination, causing premature ticket closure.

4. **[#72014](https://github.com/anthropics/claude-code/pull/72014)** — **Add protect-mcp plugin: fail-closed Cedar policy gate + signed receipts** — A security plugin that sits alongside `security-guidance` but enforces policy before tool execution (fail-closed) and cryptographically signs every decision for offline auditability.

5. **[#68673](https://github.com/anthropics/claude-code/pull/68673)** — **fix(scripts): break pagination when page is not full** — Fixes a subtle pagination bug where the script would stop iterating only on empty pages, missing cases where the last partial page wasn't empty.

6. **[#75537](https://github.com/anthropics/claude-code/pull/75537)** — **fix(hook-development): recognize all five hook handler types** — The plugin development skill and validator only knew 2 of 5 hook handler types. This PR updates both documentation and the schema validator to match the actual product.

7. **[#75529](https://github.com/anthropics/claude-code/pull/75529)** — **docs(code-review plugin): clarify relationship to bundled /code-review skill** — Disambiguates the `code-review` plugin (PR review via `gh`) from the built-in `/code-review` skill (local diff review), and notes the namespaced command to avoid collisions.

8. **[#75392](https://github.com/anthropics/claude-code/issues/75392)** — **[BUG] `claude plugin install --scope project` overwrites `installed_plugins.json`** — Not a PR but a critical regression report: project-scoped plugin installation replaces the entire config file instead of merging, silently dropping all previously installed plugins.

9. **[#75924](https://github.com/anthropics/claude-code/issues/75924)** — **[BUG] Session history visible in UI but inaccessible after context compression** — Users see the full chat history in the scrollback but the model cannot access it post-compression. No warning or opt-out presented to users.

10. **[#75911](https://github.com/anthropics/claude-code/issues/75911)** — **[BUG] Desktop app's worktree pool reclaims directories while session in use** — The background worktree pool reaps git worktrees that active sessions still depend on, causing `detached HEAD` states mid-task — even affecting the main clone.

## Feature Request Trends

1. **Conversation branching / forking** — [#46451](https://github.com/anthropics/claude-code/issues/46451) (closed, 9 👍) requests `/fork` support in the VS Code extension. Users want to explore alternative agent paths without losing the original session thread.

2. **Desktop UI status line** — [#60097](https://github.com/anthropics/claude-code/issues/60097) (9 👍) asks for the desktop app to display the current worktree/cwd name, mirroring the CLI's `statusLine` setting. Currently there is no visual indicator of which directory the agent is operating in.

3. **Live timestamp injection** — [#73800](https://github.com/anthropics/claude-code/issues/73800) requests that the model receive the current timestamp with each user prompt, not just at session start. Sessions that span multiple days cause the model to reason from stale temporal context.

4. **Session management and kill switch** — Multiple issues ([#75314](https://github.com/anthropics/claude-code/issues/75314), [#67636](https://github.com/anthropics/claude-code/issues/67636)) implicitly request user-facing agent lifecycle controls — the ability to view, pause, or terminate background agent tasks from the UI is a major gap.

5. **Context compression transparency** — [#75924](https://github.com/anthropics/claude-code/issues/75924) requests user awareness and opt-out for context compression events, plus a way to restore dropped history.

## Developer Pain Points

- **Runaway token consumption** remains the #1 community frustration. Issues [#42249](https://github.com/anthropics/claude-code/issues/42249), [#55053](https://github.com/anthropics/claude-code/issues/55053), [#67636](https://github.com/anthropics/claude-code/issues/67636), and [#75314](https://github.com/anthropics/claude-code/issues/75314) all describe variants of the same pattern: the tool burns credits far more aggressively than expected, with parallel agent spawning and sub-agent orchestration being the primary culprits. Users report daily limits consumed in minutes to hours.

- **Windows platform gaps** are a recurring theme: Cowork is non-functional on Windows 11 Home and Pro with OneDrive ([#74649](https://github.com/anthropics/claude-code/issues/74649), [#45178](https://github.com/anthropics/claude-code/issues/45178), [#75321](https://github.com/anthropics/claude-code/issues/75321)), IME/CJK input is broken in the background session viewer ([#75920](https://github.com/anthropics/claude-code/issues/75920)), and drive-letter case handling in project keys causes duplicated config entries ([#75855](https://github.com/anthropics/claude-code/issues/75855)).

- **Sub-agent billing opacity** — Users report that Opus sub-agents are billed as Fable ([#73597](https://github.com/anthropics/claude-code/issues/73597)), and Fable 5 consumption does not match its advertised pricing ([#67506](https://github.com/anthropics/claude-code/issues/67506)). This erodes trust in the cost transparency of the tool.

- **No cost-aware agent orchestration** — Claude has no apparent throttling, budgeting, or parallelism limits when spawning sub-agents. [#67636](https://github.com/anthropics/claude-code/issues/67636) documents a case where 15 agents were spawned for a 1-agent task, consuming millions of tokens before crashing.

- **Session transcript integrity** — The regression in [#65620](https://github.com/anthropics/claude-code/issues/65620) (text blocks dropped from transcripts when thinking is interleaved) undermines reproducibility and debugging of agent sessions. Context compression further compounds the problem by making history inaccessible without warning ([#75924](https://github.com/anthropics/claude-code/issues/75924)).

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest
**Date: 2026-07-09**

---

## Today's Highlights

The Codex ecosystem is experiencing a **major tool-calling regression affecting GPT-5.5 on CLI v0.143.0**, with multiple reports of `unsupported call: exec_command` errors across Windows, macOS, and Linux — suggesting a systemic model-behavior or client-parsing defect introduced in the latest release. On the infrastructure side, the team is investing heavily in unifying HTTP client routing, exec-server observability, and DNS proxy support for Linux sandboxes. **Release cadence accelerates** with two Rust alpha builds shipped today, though no stable release is yet available.

---

## Releases

- **`rust-v0.144.0-alpha.1` / `rust-v0.144.0-alpha.2`** ([repo](https://github.com/openai/codex)): Two alpha releases shipped in the last 24 hours. No changelog details provided; likely internal Rust SDK iteration prior to a stable release.

---

## Hot Issues

### 1. [#28224 — SQLite feedback logs write ~640 TB/year](https://github.com/openai/codex/issues/28224)
**Bug / CLI / Performance** — *142 comments, 427 👍*  
Reported massive SSD endurance drain from unbounded log growth. **Now closed** after 85% log reduction via three merged PRs in 0.142.0. Exemplary community–maintainer collaboration.

### 2. [#29072 — Windows `apply_patch` fails from sandbox path](https://github.com/openai/codex/issues/29072)
**Bug / Windows / Sandbox** — *40 comments, 23 👍*  
`codex-windows-sandbox-setup.exe` cannot launch from its package path, breaking `apply_patch` everywhere. A key blocker for Windows users relying on patch workflows.

### 3. [#31520 — CLI update fails: "Could not find Codex package or platform npm release"](https://github.com/openai/codex/issues/31520)
**Bug / CLI** — *12 comments, 24 👍*  
The `curl ... | sh` installer path fails to resolve release assets for `$resolved_version`. New users are stuck on older versions. High urgency for release infrastructure.

### 4. [#31611 — Amazon Linux 2023: `unsupported call: exec_command` regression](https://github.com/openai/codex/issues/31611)
**Bug / CLI / Tool-calls** — *6 comments, 4 👍*  
CLI 0.143.0 breaks basic shell execution on Amazon Linux; downgrading to 0.140.0 works. Suggests a sandbox or tool resolution regression.

### 5. [#31665 — GPT-5.5 sends self-referential namespace on built-in tools](https://github.com/openai/codex/issues/31665)
**Bug / Model Behavior** — *4 comments, 1 👍*  
Model sends `exec_commandexec_command` as concatenated names. Points to a model-side serialization error or a mismatched tool schema version in the CLI.

### 6. [#31609 — GPT-5.5 tool calling regression](https://github.com/openai/codex/issues/31609)
**Bug / CLI / Tool-calls** — *5 comments, 2 👍*  
Confirms the same `exec_command` failure pattern on macOS. Combined with #31665 and #31611, this is the **top critical mass incident** today.

### 7. [#2153 — ChatGPT integration](https://github.com/openai/codex/issues/2153)
**Feature Request / App** — *38 comments, 150 👍*  
Move Codex sessions to ChatGPT (with web search) and back. Long-running request (since Aug 2025) with strong community support. No official response yet.

### 8. [#31668 — Paid accounts: limits drain after one prompt](https://github.com/openai/codex/issues/31668)
**Bug / Rate Limits** — *3 comments, 0 👍*  
Systemic billing/usage-accounting regression across multiple paid accounts. Company monthly credits burned in a single day. Potentially revenue-impacting.

### 9. [#31676 — Windows Desktop UI freezes after typing a prompt](https://github.com/openai/codex/issues/31676)
**Bug / Windows / Performance** — *2 comments, 0 👍*  
Application Hang: Top-level window goes idle/quiesce. Severe UX degradation on Windows.

### 10. [#31639 — `shell_command` fails with double-name](https://github.com/openai/codex/issues/31639)
**Bug / Windows / CLI** — *2 comments, 4 👍*  
Confirms the same `shell_commandshell_command` self-referential namespace pattern on Windows 11 as #31665. Reinforces the GPT-5.5 tool-calling regression theory.

---

## Key PR Progress

### 1. [#31690 — exec-server: trace RPC notifications](https://github.com/openai/codex/pull/31690)
Adds tracing to the `initialized` handshake endpoint, which previously bypassed server observability. Improves debugability of exec-server startup.

### 2. [#31687 — exec-server: align JSON-RPC span attributes](https://github.com/openai/codex/pull/31687)
Standardizes RPC tracing with `rpc.system`, `rpc.method`, and `rpc.request_id` attributes. Enables cross-service query correlation.

### 3. [#31681 — core: move reasoning effort to step context](https://github.com/openai/codex/pull/31681)
Allows reasoning effort to change between model sampling steps. Infrastructure change enabling dynamic model parameter tuning per step.

### 4. [#31689 — exec-server: centralize client RPC spans](https://github.com/openai/codex/pull/31689)
Moves `environment/info` request path into the centralized RPC tracing path, closing an observability gap.

### 5. [#31688 — Preserve fractional WebSocket TBT metric precision](https://github.com/openai/codex/pull/31688)
Keeps sub-millisecond precision for `f64` TBT metrics throughout the pipe; TUI still rounds for display. Performance monitoring improvement.

### 6. [#31486 (CLOSED) — Refresh codex_apps MCP auth](https://github.com/openai/codex/pull/31486)
MCP runtime now recovers from expired ChatGPT bearer tokens in long-lived sessions, matching the Responses path behavior.

### 7. [#31644 — Linux sandbox: route DNS through managed proxy](https://github.com/openai/codex/pull/31644)
Adds a DNS adapter inside bubblewrap namespace that forwards DNS queries through the managed proxy. Native DNS clients now honor HTTP/SOCKS proxy config on Linux.

### 8. [#31361 — Route model discovery through HTTP client factory](https://github.com/openai/codex/pull/31361)
`/models` endpoint now respects `respect_system_proxy` settings. Startup-critical path was bypassing OS proxy policy.

### 9. [#31431 — Ratchet direct `reqwest` dependencies](https://github.com/openai/codex/pull/31431)
Enforces that new crates transitively use `codex-http-client` rather than adding raw `reqwest`. Migration hygiene to enforce proxy consistency.

### 10. [#31672 — Import enabled plugins from known marketplaces](https://github.com/openai/codex/pull/31672)
Discovers and resolves enabled plugins from user-level marketplace registries, supporting file, URL, npm, and inline sources.

---

## Feature Request Trends

1. **Smarter Agent Memory** — Multiple requests for topic-based, user-writable memory directories (issue #19758) and `/memory` command, inspired by Claude Code's memdir and oh-my-codex patterns.

2. **CLI Feature Parity for IDE Extensions** — JetBrains extension lacks `/plan`, `/goal`, and other CLI slash commands, creating a "dumbed down experience" (#22648).

3. **Prompt Aliases** — Request for lightweight `/aliases` command enabling reusable prompt shortcuts (#31666), already implemented in some OSS alternatives.

4. **Computer Use in CLI** — Demand for first-class Computer Use support from the CLI, not just the desktop app (#20851). Currently bundled as an MCP helper.

5. **VS Code Session Cap Increase** — The extension's hard cap on simultaneous sessions limits heavy users (#15368).

6. **Sub-Agent Approval Inheritance** — Allow child agents to inherit parent auto-approval policies for safe recurring commands (#23324).

7. **Plan Mode Mutations** — Users want an opt-in to allow code changes while Plan Mode is enabled, or to use the Question tool without Plan Mode (#31640).

---

## Developer Pain Points

1. **GPT-5.5 Tool-Calling Regression (Critical)** — The dominant pain point today. Multiple reports of `exec_command` failures across platforms (Windows, macOS, Amazon Linux), with evidence of the model sending self-referential tool names. Blocks all automation workflows.

2. **Windows-Specific Instability** — Persistent issues: helper process leaks (#31564), application hangs (#31676), sandbox setup failures (#29072), and Computer Use unavailability (#31549). Windows remains a second-class platform in terms of reliability.

3. **Rate Limit / Billing Regressions** — Paid accounts experiencing systemic quota drain after single prompts (#31668), and unexplained quota consumption on idle subscriptions (#31647). Trust-eroding for paying customers.

4. **Worktree Session Interference** — Codex CLI sessions in sub-worktrees get interrupted when another session is active in the base worktree (#23515). Breaks parallel development workflows.

5. **macOS 27 Beta Incompatibility** — New macOS beta breaks task submission (#31364) and WebSocket initiation (#31671). Early adopters blocked.

6. **Cross-Session MCP Auth Expiry** — Long-lived sessions outlive ChatGPT bearer tokens, breaking MCP tool calls mid-workflow. PR #31486 addresses this but not yet in stable release.

7. **No `/plan` on JetBrains** — IDE extension users lack critical slash commands, forcing context switching to CLI for advanced workflows (#22648).

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-07-09

## Today's Highlights

Two releases landed today: a stable `v0.50.0` and a preview `v0.51.0-preview.0`, bringing a new tool registry and critical CI fixes. Meanwhile, the community continues to surface deep agent reliability bugs, including subagent recovery masking as success and generalist agent hangs that block basic operations. Several high-impact security-focused PRs are converging toward merge.

---

## Releases

### v0.50.0 — Stable Release
**Notable changes:**
- New **tool registry** feature (`Feat/tool registry`)
- CI fixes for release verification: workspace binary shadowing prevented, npm ci ignore scripts handled
- Full changelog: [PR #28322](https://github.com/google-gemini/gemini-cli/pull/28322)

### v0.51.0-preview.0 — Preview Release
- Fix for `no_proxy` test ([#28131](https://github.com/google-gemini/gemini-cli/pull/28131))
- Version bump to nightly track for continued development
- Full changelog: [PR #28320](https://github.com/google-gemini/gemini-cli/pull/28320)

---

## Hot Issues (10 selected)

### 1. 🔥 Subagent recovery after MAX_TURNS falsely reports GOAL success
[#22323](https://github.com/google-gemini/gemini-cli/issues/22323) — P1, Bug
The `codebase_investigator` subagent reports `status: "success"` and `Termination Reason: "GOAL"` even when it hit the max turn limit before doing any work. This hides real interruptions from users. 10 comments, high community engagement — this is a correctness-critical issue for agent observability.

### 2. 🔥 Generalist agent hangs indefinitely
[#21409](https://github.com/google-gemini/gemini-cli/issues/21409) — P1, Bug
Simple commands like folder creation hang forever when deferred to the generalist agent. Users report waiting up to an hour before cancelling. The workaround — telling the model not to use subagents — defeats the purpose of the architecture. 8 👍, 7 comments.

### 3. Shell command execution stuck on "Waiting input" after completion
[#25166](https://github.com/google-gemini/gemini-cli/issues/25166) — P1, Bug, effort/medium
After simple CLI commands finish, the shell remains in "Awaiting user input" state. 3 👍, 4 comments. This blocks automation workflows and is likely related to PTY management.

### 4. Browser agent fails in Wayland
[#21983](https://github.com/google-gemini/gemini-cli/issues/21983) — P1, Bug
Browser subagent crashes in Wayland environments. 1 👍, 4 comments. Linux desktop users are affected — the error path shows `Termination Reason: GOAL` but ends in failure.

### 5. Subagents running without permission since v0.33.0
[#22093](https://github.com/google-gemini/gemini-cli/issues/22093) — P2, Bug
Agents marked as disabled in configuration are still being invoked after auto-update. Users expecting only MCP functionality are surprised by unwanted agent behavior. 2 comments.

### 6. Gemini doesn't use skills/sub-agents enough
[#21968](https://github.com/google-gemini/gemini-cli/issues/21968) — P2, Bug
Custom skills and sub-agents are rarely invoked autonomously, even for highly relevant tasks. Users must explicitly instruct the model to use them — undermining the value of custom agent definitions. 6 comments.

### 7. Auto Memory retries low-signal sessions indefinitely
[#26522](https://github.com/google-gemini/gemini-cli/issues/26522) — P2, Bug
The Auto Memory system only marks sessions as "processed" when the extraction agent successfully reads a transcript. Low-signal sessions that are skipped remain unprocessed and get surfaced repeatedly. 5 comments.

### 8. `settings.json` overrides ignored by Browser Agent
[#22267](https://github.com/google-gemini/gemini-cli/issues/22267) — P2, Bug
Config overrides for `maxTurns` and other settings in `settings.json` are silently ignored by the Browser Agent. The `AgentRegistry` reads and merges settings correctly, but the agent doesn't apply them. 3 comments.

### 9. > 128 tools triggers 400 error
[#24246](https://github.com/google-gemini/gemini-cli/issues/24246) — P2, Bug
When more than 128 tools are available, Gemini CLI encounters a 400 error from the API. Users expect smarter tool scoping/selection rather than an error. 3 comments.

### 10. Bug report lacks subagent context
[#21763](https://github.com/google-gemini/gemini-cli/issues/21763) — P1, Bug
The `/bug` report command only captures the main session, omitting subagent traces. This makes debugging multi-agent interactions nearly impossible. 2 comments.

---

## Key PR Progress (10 selected)

### Security: A2A server workspace trust enforcement
[#28319](https://github.com/google-gemini/gemini-cli/pull/28319) — size/m, OPEN
Fixes a critical RCE vulnerability (b-519269096) by enforcing workspace trust during environment loading in the `a2a-server` backend. Refactors the startup sequence to prevent environment poisoning in untrusted workspaces.

### Security: SSRF protection for OAuth metadata discovery
[#28112](https://github.com/google-gemini/gemini-cli/pull/28112) — size/l, CLOSED
Adds SSRF validation to the OAuth discovery flow in `oauth-utils.ts` and `oauth-provider.ts`, closing a coverage gap relative to `web-fetch.ts`. Fetches from MCP server responses are now validated with `isLoopbackHost()` and `resolveAndValidateDns()`.

### Security: OAuth keep-alive socket reuse fix
[#28103](https://github.com/google-gemini/gemini-cli/pull/28103) — size/m, CLOSED
Fixes "Sign in with Google" failures on Node.js 24.17.0, 22.23.0, and 26.3.0 caused by the June 2026 CVE-2026-48931 security fix for response queue poisoning. Ensures fresh sockets are used for token exchange.

### Core: Limit recursive reasoning turns
[#28164](https://github.com/google-gemini/gemini-cli/pull/28164) — size/m, OPEN
Implements a hard limit of 15 recursive reasoning turns per single user request (customizable via `maxSessionTurns`). Prevents infinite loops that waste local CPU resources and API quotas. Community-requested safeguard.

### Core: Cancel A2A task execution properly
[#28316](https://github.com/google-gemini/gemini-cli/pull/28316) — size/m/l, OPEN
Fixes "ghost executions" where cancelling a task in Agent Mode didn't terminate the underlying stream. Also addresses race conditions, memory leaks, and an unspecified vulnerability.

### Core: Bypass LLM correction for JSON/IPYNB files
[#28223](https://github.com/google-gemini/gemini-cli/pull/28223) — size/m, OPEN
Surgical fix for `write_file` and `replace` tools corrupting `.ipynb` and `.json` files. Bypasses the LLM correction logic that was mangling structured data. Critical for data science workflows.

### CLI: CJK text wrapping and bold syntax fixes
[#28309](https://github.com/google-gemini/gemini-cli/pull/28309) — size/m, OPEN
Fixes hard line-wrapping for CJK text and `__bold__` markdown rendering in the terminal. Text no longer splits awkwardly between `<Box>` components, improving readability for East Asian language users.

### CLI: Emoji-safe string truncation
[#28224](https://github.com/google-gemini/gemini-cli/pull/28224) — size/s, OPEN
`sanitizeForDisplay` now uses proper Unicode-aware truncation instead of `substring()`, preventing surrogate pair splitting that rendered emoji as replacement characters. Small fix, broad visual impact.

### CLI: Parse commented settings.json
[#28219](https://github.com/google-gemini/gemini-cli/pull/28219) — size/s, OPEN
The lightweight CLI parent process can now read comment-bearing `settings.json` files without silently falling back to defaults. Previously, users with comments in their config lost memory auto-configuration.

### Caretaker: Triage worker execution loop
[#28306](https://github.com/google-gemini/gemini-cli/pull/28306) — size/m, OPEN
Implements the Cloud Run Job execution loop for the Caretaker Triage Worker, including Pub/Sub egress action publisher and stubbed LLM triage orchestrator. Infrastructure for automated issue triage.

---

## Feature Request Trends

1. **AST-aware code analysis** — Multiple EPICs ([#22745](https://github.com/google-gemini/gemini-cli/issues/22745), [#22746](https://github.com/google-gemini/gemini-cli/issues/22746)) explore using AST-aware file reads, search, and codebase mapping to reduce token usage and improve navigation precision.

2. **Agent self-awareness & documentation** — [#21432](https://github.com/google-gemini/gemini-cli/issues/21432) requests that the CLI understand its own flags, hotkeys, and configuration to act as its own expert guide. Subagent trajectory visibility via `/chat share` ([#22598](https://github.com/google-gemini/gemini-cli/issues/22598)) is a related request.

3. **Component-level evaluations** — [#24353](https://github.com/google-gemini/gemini-cli/issues/24353) is a comprehensive EPIC for systematic behavioral evaluations, which has grown to 76 tests across 6 Gemini models.

4. **Browser agent resilience** — [#22232](https://github.com/google-gemini/gemini-cli/issues/22232) requests automatic session takeover and lock recovery for persistent browser profiles, moving beyond the current "fail-fast" strategy.

---

## Developer Pain Points

1. **Agent success masking failures** — The most critical pattern: subagents report `"GOAL"` / `"success"` when they actually hit turn limits ([#22323](https://github.com/google-gemini/gemini-cli/issues/22323)). This undermines trust in agent status reporting.

2. **Hangs and stuck states** — Generalist agent hangs ([#21409](https://github.com/google-gemini/gemini-cli/issues/21409)), shell "Waiting input" after completion ([#25166](https://github.com/google-gemini/gemini-cli/issues/25166)), and interactive prompt hangs ([#22465](https://github.com/google-gemini/gemini-cli/issues/22465)) are recurring frustrations that block daily usage.

3. **Configuration disrespect** — Settings in `settings.json` are ignored by the Browser Agent ([#22267](https://github.com/google-gemini/gemini-cli/issues/22267)), subagents run despite being disabled ([#22093](https://github.com/google-gemini/gemini-cli/issues/22093)), and symlinked agent files aren't recognized ([#20079](https://github.com/google-gemini/gemini-cli/issues/20079)).

4. **Destructive behavior risk** — [#22672](https://github.com/google-gemini/gemini-cli/issues/22672) highlights that the agent frequently uses `git reset --force` or destructive commands when safer alternatives exist, especially during complex git operations and database management.

5. **Memory system churn** — Auto Memory retries low-signal sessions indefinitely ([#26522](https://github.com/google-gemini/gemini-cli/issues/26522)), silenty skips invalid patches ([#26523](https://github.com/google-gemini/gemini-cli/issues/26523)), and lacks deterministic redaction ([#26525](https://github.com/google-gemini/gemini-cli/issues/26525)) — creating a trio of bugs that erode confidence in the memory feature.

6. **Tool overflow** — The 400 error with >128 tools ([#24246](https://github.com/google-gemini/gemini-cli/issues/24246)) and the model creating tmp scripts in random directories ([#23571](https://github.com/google-gemini/gemini-cli/issues/23571)) both point to poor tool selection and workspace discipline from the model.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-07-09

---

## Today's Highlights
No new releases landed in the last 24 hours, but the issue tracker shows increasing heat around **agent loop bugs**, **BYOK authentication regressions**, and **enterprise plugin distribution**. A long-standing feature request for custom slash commands (`#618`) remains the most upvoted item by far (99 👍), though closed. Multiple duplicate filings of a **plan→compact→re-plan infinite loop** bug (217 cycles reported) indicate a critical agent stability problem that was apparently fixed in closed issues but not yet confirmed in the latest open triage queue.

---

## Releases
No new releases in the last 24 hours.

---

## Hot Issues (Top 10 Noteworthy)

1. **[#618 — Feature Request: Support custom slash commands from .github/prompts directory](https://github.com/github/copilot-cli/issues/618)** (CLOSED, 32 comments, 99 👍)  
   *Massive community demand* for parity with Copilot's VS Code extension. Users want to define custom slash commands via prompt files in `.github/prompts/`, mirroring Claude Code's workflow. The closure without implementation suggests it may be tracked internally.

2. **[#970 — macOS Gatekeeper blocks Copilot CLI after Homebrew upgrades](https://github.com/github/copilot-cli/issues/970)** (OPEN, 6 comments, 21 👍)  
   Every Homebrew upgrade triggers Apple's malware verification, forcing manual Privacy & Security approval. Critical friction for corporate Mac users under managed security policies.

3. **[#2792 — Automatic model switching between planning and execution](https://github.com/github/copilot-cli/issues/2792)** (OPEN, 4 comments, 14 👍)  
   A power-user request to use a cheaper/faster model for planning and a more capable one for execution. Growing interest in cost-optimized multi-model agent pipelines.

4. **[#3158 — Plan→Compact→Re-Plan infinite loop (217 cycles, zero execution)](https://github.com/github/copilot-cli/issues/3158)** (CLOSED, 4 comments)  
   High-severity agent bug: auto-compaction causes the agent to re-read the summary and re-plan instead of executing. 217 cycles with zero file edits before forced kill. Multiple duplicates (#3144–3157) suggest a systemic issue that may be only partially resolved.

5. **[#4016 — BYOK (COPILOT_PROVIDER_*) rejected in --acp mode](https://github.com/github/copilot-cli/issues/4016)** (OPEN, 1 comment, 2 👍)  
   Regression in v1.0.61–1.0.68: custom providers work in `-p` mode but fail in `--acp --stdio`. Authentication required even when BYOK tokens exist. Blocks enterprise adoption of ACP protocol.

6. **[#4053 — TUI hangs on NFS/GPFS due to SIGCHLD race with Tokio](https://github.com/github/copilot-cli/issues/4053)** (OPEN, 1 comment)  
   On Linux with network file systems, the CLI hangs indefinitely at "Loading: N skills". Root cause appears to be a race condition when spawning `which gh` with 30+ concurrent threads. Blocks users with NFS home directories.

7. **[#2112 — Stale keytar entries cause repeated OAuth popups for MCP servers](https://github.com/github/copilot-cli/issues/2112)** (OPEN, 1 comment, 1 👍)  
   Stale OS keychain tokens trigger a browser OAuth popup on every launch, even when valid file-cached tokens exist. Authentication UX degradation for HTTP MCP server users.

8. **[#4059 — /models does not show extended context pricing](https://github.com/github/copilot-cli/issues/4059)** (OPEN, 1 comment)  
   Triage issue: models with 1M extended context show no way to view their cost sheet in the `/models` UI. Minor but confusing for developers evaluating model costs.

9. **[#4054 — /resume broken for all non-git sessions](https://github.com/github/copilot-cli/issues/4054)** (OPEN, 1 comment)  
   Sessions created outside a git repo store `repository = '/'`, making them impossible to select via the resume picker. A catch-22 that forces context loss for non-git workflows.

10. **[#4039 — Enterprise-managed plugins never synced to disk](https://github.com/github/copilot-cli/issues/4039)** (CLOSED, 0 comments)  
    Plugins registered via enterprise `managed-settings.json` are marked installed in config but files are never downloaded. Blocks enterprise plugin distribution entirely.

---

## Key PR Progress
*(Only 2 PRs were updated in the last 24 hours; neither is substantive.)*

1. **[#4057 — Install](https://github.com/github/copilot-cli/pull/4057)** (OPEN, created 2026-07-08)  
   Single-commit PR with no description. Likely a documentation or CI fix.

2. **[#3708 — Add files via upload](https://github.com/github/copilot-cli/pull/3708)** (OPEN, created 2026-06-07)  
   Stale PR with no description. No engagement from maintainers.

**Note:** The PR pipeline appears quiet; no significant code changes or feature PRs were active in the last 24 hours.

---

## Feature Request Trends

The most-requested feature directions across all recent issues:

- **Custom slash commands / `.github/prompts` support** (#618) — by far the most upvoted request. Users want Claude Code-style extensibility.
- **Multi-model orchestration** (#2792) — automatic switching between planning and execution models. Growing interest in cost-optimized agent pipelines.
- **Enterprise plugin sync** (#4039) — managed plugin files need to actually download to disk. Blocking feature for enterprise rollouts.
- **Persistent session event file handle** (#4063) — `open/append/close` per event causes Windows Defender rescan and high CPU. Performance optimization for event logging.
- **Configurable exit resume hint** (#4066) — after session rename, the exit hint shows alphanumeric ID instead of friendly name. UX polish request.

---

## Developer Pain Points

Recurring frustrations from the community this week:

- **Agent planning loops** — Multiple duplicate reports (at least 10 related issues) of plan→compact→re-plan infinite loops. Auto-compaction triggers a self-reinforcing cycle that can burn through entire sessions without producing any execution. High severity and still generating traction.
- **BYOK authentication regressions** — Custom provider configuration works inconsistently across modes (`-p` vs `--acp`). Users hitting `-32000 Authentication required` despite valid tokens is a recurring pattern.
- **macOS Gatekeeper friction** — Every Homebrew upgrade forces a manual security approval. No workaround for enterprise-managed Macs with locked-down Privacy & Security settings.
- **NFS/GPFS hangs** — The Tokio-based startup with `which gh` spawning fails under concurrent file system access patterns. Users with network home directories cannot use the TUI at all.
- **Non-git session handling** — `/resume` is completely broken for sessions started outside git repos. The git gate in the resume picker creates an unrecoverable catch-22.
- **Stale keychain tokens** — OAuth popups on every launch for MCP server users with expired OS keychain entries. No cache invalidation logic between file and keychain storage.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

**Kimi Code CLI Community Digest**
**Date:** 2026-07-09

---

### Today's Highlights
No new releases or pull requests surfaced in the last 24 hours, indicating a period of active code review or feature maturation. The community's attention remains focused on a persistent SSL certificate interception issue (#2458), which continues to block users in corporate environments with certificate-pinning antivirus software. This single open enhancement request encapsulates a broader developer frustration with network-level security controls.

---

### Releases
*None this period.*

---

### Hot Issues
Only one issue was updated in the last 24 hours, but it represents a critical blocker for enterprise users.

1. **#2458 – Add option to ignore ssl certificate**  
   **Why it matters:** Corporate antivirus often performs Man-in-the-Middle (MiTM) SSL inspection, replacing trusted certificates with its own. This causes `kimi-cli` to fail on login because the expected server certificate does not match the antivirus-issued one. The request is for a `--ignore-ssl-errors` or `--ca-cert` flag to bypass or customize certificate validation.  
   **Community reaction:** The 2 comments (not shown in detail) likely debate security risks vs. pragmatism, but the zero upvotes suggest most users are unaffected or avoidant of the security trade-off.  
   **Link:** [Issue #2458](https://github.com/MoonshotAI/kimi-cli/issues/2458)

---

### Key PR Progress
*No pull requests were updated in the last 24 hours.*

---

### Feature Request Trends
Based on the sole active issue and historical patterns from this repository, the most prominent feature direction is:

- **SSL/TLS flexibility:** A strong, recurring theme is the need to operate in locked-down enterprise environments (antivirus, corporate proxies, self-signed certificates). Users request flags like `--insecure`, `--ca-bundle`, or environment variable support to override certificate validation. This is a common pain point for CLI tools that must integrate with internal networks.

---

### Developer Pain Points
- **Corporate network constraints:** The top developer frustration is network-level SSL interception causing authentication failures. Many developers cannot modify corporate antivirus policies, so they require a CLI-level bypass.
- **Low community engagement on this issue:** Only 2 comments and 0 upvotes suggest either low adoption in enterprise settings or that affected users have found workarounds (e.g., using a VPN or proxy). However, for those impacted, this is a full blocker.
- **No active PRs or releases:** The silence in the last 24 hours may indicate maintainers are reviewing a backlog or that the project is in a stable phase with no urgent bugs. This can worry developers who rely on rapid bug fixes.

---
*Generated by the Kimi CLI community analysis tool based on public GitHub data for 2026-07-09.*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-07-09

## Today's Highlights

A significant batch of compliance-ready fixes landed today from HOYALIM, addressing long-standing issues with project initialization, token tracking, and directory scanning. The community is rallying around two major pain points: Gemma 4 tool calling failures via Ollama and indefinite subagent hangs on bash tool calls. Meanwhile, the V2 refactoring continues to mature, with closed issues around plugin isolation and session resilience.

## Releases

No new releases in the last 24 hours.

## Hot Issues

1. **[#20995 — Gemma 4 (e4b) tool calling fails via Ollama OpenAI-compatible API](https://github.com/anomalyco/opencode/issues/20995)**  
   *30 comments, 47 👍* — The model returns `tool_calls` correctly but OpenCode fails to recognize streaming tool calls. One of the highest-reacted open issues, reflecting growing Gemma 4 adoption and Ollama compatibility concerns.

2. **[#16017 — Go plan usage/balance API endpoint](https://github.com/anomalyco/opencode/issues/16017)**  
   *23 comments, 96 👍* — Users want programmatic access to subscription usage data already visible in the dashboard. The highest-reacted open feature request, indicating strong demand for usage tracking automation.

3. **[#28567 — Full MCP client capabilities (CLOSED)](https://github.com/anomalyco/opencode/issues/28567)**  
   *22 comments, 25 👍* — Closed after significant community discussion. Tracks a gap between OpenCode's MCP client and the latest MCP standard spec—a critical concern as MCP adoption grows.

4. **[#6096 — Tokens per second display](https://github.com/anomalyco/opencode/issues/6096)**  
   *19 comments, 60 👍* — Users want visible TPS metrics per message response. Popular, uncontroversial UX improvement that would help compare model/provider performance.

5. **[#30086 — High CPU usage in newer versions](https://github.com/anomalyco/opencode/issues/30086)**  
   *17 comments, 11 👍* — CPU spiked dramatically ~7 days ago, degrading from 10 concurrent sessions to struggling with 3. Critical performance regression affecting power users.

6. **[#31942 — Agent loops 277 times on MCP resource_list without circuit breaker](https://github.com/anomalyco/opencode/issues/31942)**  
   *2 comments, 0 👍* — An agent made 277 consecutive identical calls searching for a non-existent MCP resource, exhausting workspace token budget. Highlights urgent need for loop detection/circuit breakers.

7. **[#33028 — Subagents hang indefinitely after quick bash tool call](https://github.com/anomalyco/opencode/issues/33028)**  
   *5 comments, 2 👍* — Stream never times out after a bash tool call; affects both glm-5.2 and minimax-m3. Blocks multi-agent workflows.

8. **[#33490 — GLM-5.2 via OpenCode Go rejects `instructions` field](https://github.com/anomalyco/opencode/issues/33490)**  
   *6 comments, 3 👍* — API compatibility issue where OpenCode Go proxy rejects a valid GLM-5.2 field. Affects users on Z.AI (Zhipu) pathway.

9. **[#35326 — opencode web doesn't inherit terminal CWD](https://github.com/anomalyco/opencode/issues/35326)**  
   *4 comments, 0 👍* — Starting from terminal defaults to `/` instead of current directory. Basic UX regression.

10. **[#35952 — Tasks not resumable on failure/freeze](https://github.com/anomalyco/opencode/issues/35952)**  
    *2 comments, 0 👍* — When agents stall mid-job, there's no way to resume from the interruption point. Wastes quota and user time, especially with multiple subscriptions.

## Key PR Progress

1. **[#36001 — Preserve cache prefix across mode switch](https://github.com/anomalyco/opencode/pull/36001)**  
   Fixes system instruction corruption when switching between plan/build modes.

2. **[#35999 — Separate active context tokens from usage totals](https://github.com/anomalyco/opencode/pull/35999)**  
   Resolves two closed issues by fixing mixed token sources in Web/Desktop context UI.

3. **[#35998 — Avoid duplicate project initialization](https://github.com/anomalyco/opencode/pull/35998)**  
   Fixes a race condition where concurrent `InstanceStore` services both started `Project.fromDirectory`.

4. **[#35997 — Batch untracked diff checks](https://github.com/anomalyco/opencode/pull/35997)**  
   Fixes severe performance issue when git repo has no HEAD—was diffing one file at a time.

5. **[#35996 — Avoid symlink traversal during skill discovery](https://github.com/anomalyco/opencode/pull/35996)**  
   Closes two security/fix issues by preventing symlink following in `.claude/skills` discovery.

6. **[#35995 — Bound icon discovery scan](https://github.com/anomalyco/opencode/pull/35995)**  
   Icon discovery now bounded—prevents freezes on large worktrees scanning with `**/favicon.*`.

7. **[#35994 — Avoid per-file directory list rebuild](https://github.com/anomalyco/opencode/pull/35994)**  
   `ripgrepLayer` no longer rebuilds directory index for every file; significant perf boost on large projects.

8. **[#35762 — Restore subagent navigation](https://github.com/anomalyco/opencode/pull/35762)**  
   Fixes three issues: subagent navigation, cancelled subagent handling, and nested child navigation.

9. **[#35985 — Derive reasoning variants from models.dev](https://github.com/anomalyco/opencode/pull/35985)**  
   Moves reasoning variant logic from hardcoded tables to `models.dev` configurations, improving maintainability.

10. **[#35982 — Improve prompt caching across providers](https://github.com/anomalyco/opencode/pull/35982)**  
    Makes prompt caching portable across AI SDK providers—handles camelCase/snake_case mismatches and missing cache usage info.

## Feature Request Trends

The highest-priority feature requests cluster around three themes:

- **API & Usage Visibility** — Users want programmatic access to subscription usage data (#16017, 96 👍), token-per-second metrics (#6096, 60 👍), and configurable session retention policies (#34875).
- **MCP Ecosystem Maturity** — Requests for full MCP client capabilities (#28567), MCP elicitation support (#23066), and circuit breakers for agent loops (#31942) indicate the community is pushing MCP integration to production-grade.
- **Automation & Resiliency** — Auto-resumption after failures (#35952), AWS SSO credential refresh (#1934), and task-based model routing (#35937) reflect a shift toward autonomous, long-running agent workflows.

## Developer Pain Points

- **Ollama/OpenAI compatibility regressions** — Gemma 4 streaming tool calls (#20995), GLM-5.2 field rejection (#33490), and indefinite hangs after bash calls (#33028) suggest integration testing with Ollama is lagging.
- **Agent reliability and resource waste** — Unbounded loops (#31942), non-resumable tasks (#35952), and high CPU regressions (#30086) undermine trust in agent-based automation. Users report losing significant subscription quota to these issues.
- **UI and CLI UX regressions** — CWD not inherited (#35326), copy/paste broken on Linux CLI (#35978, #35977), and unrecoverable AI-deleted files (#35939) degrade everyday usability.
- **V2 instability** — Empty plugin generations on first load (#35556), layout context errors on desktop (#35701), and session race conditions indicate the V2 refactoring is still introducing breakage.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-07-09

## Today's Highlights
A flurry of 21 closed issues and 6 merged PRs landed today, mostly targeting regressions in v0.80.3 and provider compatibility gaps. Key themes include fixing the fork menu double-submit bug, patching clipboard support on Linux/Bun release, updating GitHub Copilot context windows to 1M tokens, and a wave of compactness-related bug reports from a single contributor (#6424-#6426). The community also saw several provider requests (Novita AI, Fable OAuth rate limits) and model catalog fixes for MiMo and DeepSeek V4.

## Releases
No new versions were published in the last 24 hours.

## Hot Issues

1. **#5263 — Make in-session model and thinking-level changes ephemeral by default** [OPEN]  
   *Author: vanvlack | Comments: 5 | 👍: 6*  
   Proposes separating per-session model changes from global defaults via a `/settings` picker. Highly upvoted; addresses confusion where users accidentally overwrite their default model mid-session.  
   https://github.com/earendil-works/pi/issues/5263

2. **#5886 — AgentSession settlement/continuation and assistant-tail lifecycle bugs** [OPEN]  
   *Author: mitsuhiko | Comments: 4 | 👍: 2*  
   Meta-issue for a class of bugs where post-run logic tries to continue an agent from a transcript that's been invalidated. Affects coding agent reliability under heavy tool use.  
   https://github.com/earendil-works/pi/issues/5886

3. **#6204 — mimo-v2-omni is a ghost model on MiMo Token Plan providers** [CLOSED]  
   *Author: kelvinq | Comments: 7*  
   Model catalog lists a model that the actual API endpoints don't serve, returning 400 errors. Community is asking for stricter catalog validation against upstream provider availability.  
   https://github.com/earendil-works/pi/issues/6204

4. **#6303 — Exponential retry backoff has no cap despite maxRetryDelayMs existing** [OPEN]  
   *Author: 2722550596 | Comments: 2 | 👍: 1*  
   Retry logic uses unbounded exponential backoff; attempt 7 waits ~4 minutes. The config parameter `maxRetryDelayMs` exists but is not wired into `_prepareRetry()`.  
   https://github.com/earendil-works/pi/issues/6303

5. **#6378 — "nothing I can do to fix this error" — context length overflow** [OPEN]  
   *Author: elehemika-art | Comments: 2*  
   User hits 400 errors when session exceeds 262K token limit. Suggests need for smarter pre-emptive compaction or user-facing warnings before overflow.  
   https://github.com/earendil-works/pi/issues/6378

6. **#6406 — Read-only ~/.pi/agent fails every credential read with lock file creation** [CLOSED]  
   *Author: glifocat | Comments: 2*  
   Pi attempts to create a lock file even for read-only key access, breaking read-only config setups. Community notes this is a basic filesystem permission design flaw.  
   https://github.com/earendil-works/pi/issues/6406

7. **#6421 — Anthropic OAuth requests need Claude Agent billing marker** [CLOSED]  
   *Author: alexei-led | Comments: 2*  
   OAuth with Claude Max fails with "out of extra usage" despite valid tokens. Root cause: Pi's requests lack the required billing marker for Claude Agent usage.  
   https://github.com/earendil-works/pi/issues/6421

8. **#6424 — Threshold auto-compaction can leave unfinished work idle** [CLOSED]  
   *Author: Blue-B | Comments: 1*  
   Auto-compaction fires mid-turn when assistant pauses with a placeholder, compacting unfinished work into a summary and losing context.  
   https://github.com/earendil-works/pi/issues/6424

9. **#6429 — OpenAI Responses sends max_output_tokens=1 after compaction** [CLOSED]  
   *Author: nrutman | Comments: 1*  
   After auto-compaction, the next request uses max_output_tokens=1 (below minimum 16), causing repeated 400 errors. A regression in compaction token budget calculation.  
   https://github.com/earendil-works/pi/issues/6429

10. **#6438 — OpenCode provider returns 500 for mimo-v2.5-free, but curl works** [CLOSED]  
    *Author: smithyyang | Comments: 1*  
    Provider-specific 500 error suggests Pi may be sending malformed headers or extra parameters that the OpenCode API rejects.  
    https://github.com/earendil-works/pi/issues/6438

## Key PR Progress

1. **#6413 — feat(coding-agent): show git info in local version** [CLOSED]  
   *Author: xl0*  
   Adds Git branch and status information to the local version display. Useful for debugging sessions across branches.  
   https://github.com/earendil-works/pi/pull/6413

2. **#6417 — feat(agent): support custom metadata in JSONL session headers** [CLOSED]  
   *Author: ArcadiaLin*  
   Adds optional `metadata?: Record<string, unknown>` to v3 JSONL session headers, enabling extensions to tag sessions with opaque data that persists across serialization.  
   https://github.com/earendil-works/pi/pull/6417

3. **#6418 — Fix native clipboard in bun release** [CLOSED]  
   *Author: davidbrai*  
   Fixes #6250: copies .node files into the clipboard package and adds xclip fallback for X11. Resolves silent image-paste failures in Linux/Bun binaries.  
   https://github.com/earendil-works/pi/pull/6418

4. **#6427 — feat(coding-agent): add prompt cache miss tracking** [OPEN]  
   *Author: mitsuhiko*  
   Detects and logs prompt cache misses per turn, showing reasons (idle gaps, model switches) in the transcript. Improves observability for token-cost debugging.  
   https://github.com/earendil-works/pi/pull/6427

5. **#6430 — fix fork menu allowing user to double select an entry** [CLOSED]  
   *Author: davidbrai*  
   Closes the fork menu before starting the async fork process, preventing multiple forks when users double-press Enter or extensions delay teardown.  
   https://github.com/earendil-works/pi/pull/6430

6. **#6436 — fix(ai): hide responses reasoning comment markers** [CLOSED]  
   *Author: AlexanderDzhoganov*  
   Strips `<!-- -->` separators from visible OpenAI Responses reasoning summaries while preserving signed reasoning items for replay.  
   https://github.com/earendil-works/pi/pull/6436

7. **#6437 — fix(ai): update Copilot extended context windows** [CLOSED]  
   *Author: tim-hub*  
   Updates GitHub Copilot model metadata to use 1,000,000 token context windows, matching GitHub's June 4 announcement.  
   https://github.com/earendil-works/pi/pull/6437

8. **#6435 — Export the in-memory session storage implementation** [CLOSED]  
   *Author: stack1ng*  
   Exports the internal `InMemorySessionStorage` class, enabling extensions to extend it cleanly instead of resorting to hacky workarounds.  
   https://github.com/earendil-works/pi/pull/6435

9. **#6420 — Add Novita AI as a built-in provider** [CLOSED]  
   *Author: jason-wu-ai*  
   Adds Novita AI as a built-in API-key provider using OpenAI-compatible endpoints. Reduces setup friction for users of that service.  
   https://github.com/earendil-works/pi/pull/6420

10. **#6419 — Stabilize generated image model formatting** [CLOSED]  
    *Author: jason-wu-ai*  
    Refactors the image model generation script to emit Biome-formatted TypeScript directly, replacing fragile `JSON.stringify().replace()` chains.  
    https://github.com/earendil-works/pi/pull/6419

## Feature Request Trends

- **Session & Model Lifecycle Management**: Multiple requests (#5263, #5886, #6424-#6426) center on making model/session changes predictable — ephemeral overrides, safe compaction mid-turn, and pre-compaction on model switch to smaller-context models.
- **Pluggable Storage & Hooks**: Requests for exporting internal storage classes (#6435) and adding pre-startup extension hooks (#6428) indicate growing demand for extension authors to hook into session lifecycle at every stage.
- **Provider Model Catalog Accuracy**: Several issues (#6204, #6438, #6421) flag mismatches between Pi's bundled model catalog and actual provider capabilities, suggesting a need for dynamic or auto-validated provider metadata.
- **Observability & Debugging**: PR #6427 (cache miss tracking) and issue #6303 (retry backoff visibility) reflect community desire for better telemetry around token usage, retry behavior, and provider error details.

## Developer Pain Points

1. **Compaction Race Conditions**: Three related issues from Blue-B (#6424-#6426) describe auto-compaction firing mid-turn, leaving unfinished work idle, overflowing after model switch, or failing on very large sessions. These point to a systemic fragility in compaction heuristics under v0.80.3.
2. **Binary Release Breakage**: Issues #6250 (clipboard on Linux) and #6406 (read-only config lock) show that Bun release binaries have unique breakage paths not caught by development-time testing, particularly around native addons and filesystem assumptions.
3. **Provider-Specific 400/500 Errors**: A cluster of issues (#6204, #6421, #6429, #6438, #6433) all involve provider APIs rejecting Pi's requests due to missing headers, wrong model names, or incorrect token budgets — suggesting Pi's provider abstraction layer needs better validation and error message propagation.
4. **Retry Logic Gaps**: Issue #6303 (unbounded exponential backoff) and #6431 (socket drop not retried) highlight that retry configuration is both over- and under-zealous depending on the failure mode, frustrating users with either long waits or premature termination.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-07-09

## Today's Highlights
The team shipped **v0.19.8** with CLI serve environment isolation, while critical fixes landed for the daemon's subagent infinite loop bug and a Windows extension install failure. A major RFC proposing multi-workspace daemon support continues to attract community attention, signaling growing demand for enterprise-grade session management.

## Releases

### v0.19.8
- **Adds** `qwen serve` environment isolation and total admission control (`feat(cli)`)
- **Documents** WeCom channel integration in the channels overview (`docs(channels)`)
- **Changelog**: https://github.com/QwenLM/qwen-code/releases/tag/v0.19.8

## Hot Issues (10 selected)

1. **#6378 — RFC: Support multiple workspaces in one qwen serve daemon** (OPEN, 19 comments)
   - **Why it matters**: The highest-comment issue today proposes a 1‑daemon → N‑workspace model, a foundational change for CI/CD pipelines and multi-project teams. Community is actively debating backward compatibility and session isolation strategies.
   - https://github.com/QwenLM/qwen-code/issues/6378

2. **#6384 — Hard limit: 0 when env-configured model reserves full context window for output** (OPEN, 5 comments)
   - **Why it matters**: The auto-compaction logic can leave a `hard limit: 0` state, preventing any request from being sent. Affects anyone using environment-configured models with reserved output windows; a PR (#6556) is already open to fix the root cause.
   - https://github.com/QwenLM/qwen-code/issues/6384

3. **#6505 — Subagent reasoning loop repeats identical tool calls indefinitely** (CLOSED, 4 comments)
   - **Why it matters**: A runaway subagent can hammer the same tool call without the main agent's loop detection firing. This is a reliability risk for autonomous workflows and was fixed today, receiving a welcome-pr label.
   - https://github.com/QwenLM/qwen-code/issues/6505

4. **#6414 — VSCode Qwen Code "Failed to connect to Qwen agent"** (OPEN, 4 comments)
   - **Why it matters**: Core VS Code integration instability; users cannot start or maintain a coding session. Needs-triage indicates the team is investigating.
   - https://github.com/QwenLM/qwen-code/issues/6414

5. **#6553 — CI triage action swallows stderr, making failures invisible** (OPEN, 2 comments)
   - **Why it matters**: A silent CI failure mechanism — the Qwen Triage step discards stderr, so API errors or empty model responses appear as success. This hides release-blocking issues.
   - https://github.com/QwenLM/qwen-code/issues/6553

6. **#6554 — Release failed for v0.19.8-nightly** (OPEN, 1 comment)
   - **Why it matters**: The nightly release workflow failed on the `quality` job. A follow-up PR (#6555) applies Prettier formatting to restore compliance.
   - https://github.com/QwenLM/qwen-code/issues/6554

7. **#6519 — Anthropic Claude 4.8+ rejects deprecated `temperature` parameter (400 error)** (CLOSED, 1 comment)
   - **Why it matters**: A breaking API change in Claude models triggers 400 errors. Qwen Code must stop sending `temperature` for these models — a quick-fix candidate for anyone using Anthropic endpoints.
   - https://github.com/QwenLM/qwen-code/issues/6519

8. **#6501 — Session history silently truncated when parentUuid chain has a missing link** (CLOSED, 1 comment)
   - **Why it matters**: Data-integrity bug: partial writes or storage failures can cause `Session.load()` to silently discard large portions of history. Welcome-pr open for community contributions.
   - https://github.com/QwenLM/qwen-code/issues/6501

9. **#6536 — WebShell shows serialized @ references instead of chips** (OPEN, 1 comment)
   - **Why it matters**: UX regression — built-in composer references lose their compact chip rendering after sending, showing raw `@.qwen/` text instead. Core rendering issue for the web shell.
   - https://github.com/QwenLM/qwen-code/issues/6536

10. **#6246 — qwen_code kills itself when asked to stop a Node.js process** (CLOSED, 3 comments)
    - **Why it matters**: A critical safety issue: broad `pgrep`-based selectors can match Qwen Code's own process. A matching fix PR (#6544) landed today.
    - https://github.com/QwenLM/qwen-code/issues/6246

## Key PR Progress (10 selected)

1. **#6556 — fix(core): clamp max_tokens to the context window; retire the output reservation** (OPEN)
   - **What**: Replaces the broken output-reservation logic with dynamic max_tokens clamping. Directly addresses the `hard limit: 0` issue (#6384) and removes a fragile code path.
   - https://github.com/QwenLM/qwen-code/pull/6556

2. **#6557 — feat(daemon): persist session artifacts across restarts** (OPEN)
   - **What**: Squashed replacement for #6259. Implements V2 daemon artifact metadata persistence — restores artifacts after daemon restart, records durable tombstones and snapshots in JSONL.
   - https://github.com/QwenLM/qwen-code/pull/6557

3. **#6535 — feat(scheduled-tasks): add isolated run mode via create_sub_session tool** (OPEN, in-review)
   - **What**: Introduces `create_sub_session` (daemon-only) to spawn fresh top-level sub-sessions for scheduled tasks, preventing context pollution from repeated cron executions.
   - https://github.com/QwenLM/qwen-code/pull/6535

4. **#6555 — fix: apply prettier formatting to restore quality job green** (OPEN)
   - **What**: 74 files with whitespace-only Prettier changes to unblock the nightly release pipeline (#6554). No logic changes.
   - https://github.com/QwenLM/qwen-code/pull/6555

5. **#6525 — feat(serve): Add cursor-paged transcript replay endpoint** (OPEN)
   - **What**: New `GET /session/:id/transcript` endpoint for active persisted sessions, with cursor pagination and active-chain reconstruction from lightweight metadata.
   - https://github.com/QwenLM/qwen-code/pull/6525

6. **#6526 — Fix long session timeline scrolling** (OPEN)
   - **What**: Fixes Web Shell timeline for conversations with many turns — keeps marker list scrollable, current marker visible, and timeline centered in viewport.
   - https://github.com/QwenLM/qwen-code/pull/6526

7. **#6495 — feat(channels): support webhook-triggered channel tasks** (OPEN)
   - **What**: Enables external webhook sources to POST events to `qwen serve`; the channel worker generates and delivers responses to configured chat targets.
   - https://github.com/QwenLM/qwen-code/pull/6495

8. **#6547 — ci(autofix): Add single-target scheduler** (CLOSED)
   - **What**: Replaces the multi-target autofix runner with a 10-minute single-target scheduler that scans existing bot PRs first, avoiding duplicate work.
   - https://github.com/QwenLM/qwen-code/pull/6547

9. **#6545 — fix(extension): clean tempDir before fallback git clone on Windows** (CLOSED)
   - **What**: Fixes `extensions install <git-url>` failures on Windows caused by stale temp directories. Cleans before fallback clone.
   - https://github.com/QwenLM/qwen-code/pull/6545

10. **#6544 — fix(shell): avoid self-kill from pgrep selectors** (CLOSED)
    - **What**: Prevents broad `pgrep`-based process selectors from triggering the self-kill guard. Updates shell tool guidance to prefer `task_stop` or specific PIDs. Closes #6246.
    - https://github.com/QwenLM/qwen-code/pull/6544

## Feature Request Trends

- **Multi-workspace daemon architecture** (#6378) is the dominant request — users want one daemon to serve multiple isolated workspaces for CI/CD, multi-project, and team workflows.
- **Webhook-triggered channel tasks** (#6495) and **QQ Bot group message handling** (#6457) show growing demand for external event-driven automation in channel adapters.
- **Advisor feedback loop** (#6542) proposes a read-only second-opinion reviewer for complex agent tasks — reflecting user desire for built-in quality gates in autonomous workflows.
- **Configurable timeouts for AutoMemory extractors** (#6308) and **vision bridge** (#6524) highlight a pattern: users want control over hardcoded timeouts in background agent processes.
- **Permission/approval mode badge in footer** (#6496) and **reduced UI flicker** (#6402) show attention to UX polish in the interactive CLI and Web Shell.

## Developer Pain Points

- **Session/data integrity issues** — Silent truncation of session history (#6501), shared project memory across worktrees (#6449), and missing payload diagnostics (#6538) erode trust in session persistence.
- **Self-inflicted process termination** (#6246) — a dangerous footgun when broad process selectors (`pgrep node`) match Qwen Code itself. Fix landed but reflects a broader need for safer shell tooling.
- **CI pipeline opacity** (#6553, #6554) — stderr swallowing and format compliance failures causing silent release breaks. Developers need better CI observability and automated format enforcement.
- **Windows-specific failures** (#6545) — Extension installs fail on Windows due to stale temp directories; a persistent friction point for cross-platform users.
- **Model API breakage** — The Anthropic Claude `temperature` deprecation (#6519) is a reminder that Qwen Code must adapt to upstream model API changes without manual intervention.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-07-09

## Today's Highlights

The v0.8.68 milestone is in full swing with **42 PRs merged** in the last 24 hours, spanning Fleet agent profile rearchitecture, Android/Termux support, model catalog consolidation, and performance micro-optimizations. The community's top issue remains the monumental #4092 execution board (50 comments), which serves as the canonical agent packet for the entire milestone. First-time contributor **JayBeest** continues to drive sub-agent tool sandboxing with a comprehensive PR and documentation series.

## Releases

No new releases in the last 24 hours. The project remains on the v0.8.68 milestone track.

## Hot Issues (10 Noteworthy)

1. **[#4092](https://github.com/Hmbown/CodeWhale/issues/4092) — v0.8.68 execution board: lane order, dependencies, and agent protocol (canonical packet)**
   - *50 comments, 0 👍* — The single entry point for all v0.8.68 milestone work. This issue replaces the July 7 triage packet and mandates that every open milestone issue carries exactly one `lane-*` label. Community discussion centers on coordinating across 16+ parallel lanes (fleet, catalog, perf, stopship, etc.) without merge conflicts.

2. **[#4042](https://github.com/Hmbown/CodeWhale/issues/4042) — feat: Environment-level tool sandboxing for sub-agents**
   - *12 comments, CLOSED* — JayBeest's flagship contribution. Documents existing `--disallowed-tools` flag behavior and proposes a phased plan for per-sub-agent tool restrictions. Closed after PR #4096 landed with three companion documentation files.

3. **[#3965](https://github.com/Hmbown/CodeWhale/issues/3965) — Per-sub-agent provider assignment + LM Studio support**
   - *7 comments, CLOSED* — User request for explicit provider routing to individual sub-agents, including custom OpenAI-compatible endpoints. Closed as handled by the Fleet AgentProfile redesign in PR #4262.

4. **[#3488](https://github.com/Hmbown/CodeWhale/issues/3488) — Unicode, CJK, and terminal-width rendering QA**
   - *3 comments, OPEN* — Long-standing (since June 23) QA lane for mixed-width text rendering issues. Community reports CJK characters breaking selector rows and wrapped output. Still open; likely a v0.8.68 late-stage blocker.

5. **[#4227](https://github.com/Hmbown/CodeWhale/issues/4227) — feat: help JayBeest keep up with the CodeWhale tsunami**
   - *2 comments, OPEN* — Lighthearted but serious issue from power user JayBeest requesting a dev-environment setup Skill/automation to deal with the project's "10+ PRs/day" velocity. Signals community fatigue with rebuild overhead.

6. **[#3757](https://github.com/Hmbown/CodeWhale/issues/3757) — Launch is slow; profile and remove startup inefficiency**
   - *3 comments, CLOSED* — Performance issue closed after PR #3761 deferred non-critical startup tasks (stale output pruning, session cleanup) to background maintenance threads. Community reports noticeable improvement on repeated TUI launches.

7. **[#4097](https://github.com/Hmbown/CodeWhale/issues/4097) — Parent model burns turns with peek+sleep polling loop while waiting for sub-agent completion**
   - *1 comment, CLOSED* — Regression from #3183 where parent agents waste tokens in a busy-wait loop instead of passively waiting. Closed as duplicate; fix tracked in v0.8.68 work.

8. **[#3990](https://github.com/Hmbown/CodeWhale/issues/3990) — Slash autocomplete repeats aliases already shown in command label**
   - *1 comment, CLOSED* — UX bug showing duplicate alias info (e.g., `/clear or /qingping` then `(aliases: /qingping)`). Fixed in PR #4254.

9. **[#3986](https://github.com/Hmbown/CodeWhale/issues/3986) — API-key onboarding copy shows wrong config path under CODEWHALE_HOME**
   - *1 comment, CLOSED* — Misleading UI text when `CODEWHALE_HOME` overrides default path. Fixed in PR #4254.

10. **[#4238](https://github.com/Hmbown/CodeWhale/issues/4238) — Make Android sandbox and secret-store behavior explicit**
    - *1 comment, CLOSED* — Ensures Termux builds fail gracefully on unsupported platform features (Landlock, bwrap) and that approval-gated tools work without OS keychain.

## Key PR Progress (10 Important)

1. **[#4264](https://github.com/Hmbown/CodeWhale/pull/4264) — v0.8.68: cache command and regex hot paths**
   - Merged. Caches command group construction and registry entries behind process-lifetime static storage. Adds bounded LRU cache for user-provided regex patterns. Introduces `FastHashMap`/`FastHashSet` for internal maps. Fixes two performance bottlenecks (#4155, #4154).

2. **[#4263](https://github.com/Hmbown/CodeWhale/pull/4263) — v0.8.68 batch: Android updater, Termux docs, perf consts, sub-agent tool sandbox**
   - Merged. Four-lane batch including: Android asset stem fix for self-updater, Termux installation checklist (#4237), string literal constants (#4158), and sub-agent disallowed-tools enforcement.

3. **[#4262](https://github.com/Hmbown/CodeWhale/pull/4262) — fix(fleet): route AgentProfile pins through custom providers**
   - Merged. Makes AgentProfile the canonical surface for per-child provider routing, including user-named OpenAI-compatible providers like `lm-studio`. Solves #3965 without merging the stale alternative PR #3969.

4. **[#4225](https://github.com/Hmbown/CodeWhale/pull/4225) — refactor(localization): extract hardcoded texts into locales files**
   - Merged (hongqitai). Large localization refactor extracting hardcoded strings into locale files with multi-language translations. Adds `tr` macro support for tests in non-English environments.

5. **[#4259](https://github.com/Hmbown/CodeWhale/pull/4259) — fix(fleet): honor AgentProfile route contract**
   - Merged. Carries explicit `AgentProfile.provider` into Fleet worker runtime instead of inheriting parent provider. Adds test coverage for the route precedence hierarchy.

6. **[#4260](https://github.com/Hmbown/CodeWhale/pull/4260) — fix(fleet): persist AgentProfile thinking tier**
   - Merged. Adds TOML support for `reasoning_effort`/thinking tier. Adds interactive `/fleet setup` step for thinking selection. Threads tier through route receipts and worker runtime profiles.

7. **[#4255](https://github.com/Hmbown/CodeWhale/pull/4255) — feat(catalog): Models.dev refresh/snapshot automation**
   - Merged. Implements #4117 with a validate/dry-run-only safety model. Script supports live fetch, provider filtering, sorting, and limit constraints without writing to disk unless explicitly committed.

8. **[#4252](https://github.com/Hmbown/CodeWhale/pull/4252) — feat(tui): six-view model picker catalog browsing**
   - Merged. Implements #4115 with six cyclable views: Configured, Catalog, Recent, Coding, Cheap, Long context. Uses `A` key to cycle. Configured stays conservative; Catalog browses all models; specialty views apply heuristics.

9. **[#4243](https://github.com/Hmbown/CodeWhale/pull/4243) — perf(tui): migrate runtime_threads maps to parking_lot::Mutex**
   - Merged (wuisabel-gif). First-time contributor claim. Migrates four synchronous `std::sync` maps in `RuntimeThreadManager` to `parking_lot::Mutex`. Closes #4149.

10. **[#4254](https://github.com/Hmbown/CodeWhale/pull/4254) — fix(tui): stopship dogfood UX — slash aliases + API-key path**
    - Merged. Fixes two stopship-level UX bugs: duplicate alias display in slash autocomplete (#3990) and misleading config path in API-key onboarding (#3986).

## Feature Request Trends

1. **Per-sub-agent provider routing** — Multiple issues (#3965, #4111, #4136, #4137) converge on the need to assign different providers/models/thinking tiers to individual sub-agents. Now addressed by Fleet AgentProfile redesign.

2. **Live model catalog integration** — Issues #4184, #4186, #4187, #4114, #4188 push for Models.dev as the canonical metadata source, replacing hand-curated bundled data. The six-view picker and refresh automation are initial steps.

3. **Android/Termux support** — Five issues (#4236, #4237, #4238, #4241, #4242) this week cover Android arm64 builds, updater support, sandbox degredation, and QA, suggesting growing mobile developer interest.

4. **Sub-agent tool sandboxing** — #4042 spawned a phased plan for per-environment tool restrictions, now partially implemented. Community wants finer-grained control over what each sub-agent can access.

5. **Localization completeness** — PR #4225 and issue #3488 reflect demand for CJK rendering fixes and locale extraction. Taiwan (zh-Hant) and other locales are still sparse.

## Developer Pain Points

1. **Rebuild overhead at high velocity** — Issue #4227 ("help JayBeest keep up with the tsunami") captures frustration with 10+ PRs/day requiring repeated `cargo build` cycles. Users want automated dev-environment setup skills.

2. **Agent token waste during sub-agent waits** — #4097 reopens a known regression where parent agents burn tokens in polling loops instead of waiting passively. Community considers this a reliability/stopship issue.

3. **Startup latency** — #3757 (closed) highlighted slow launch times. The fix defers non-critical work to background threads, but users with many sessions or stale output spillover still report perceptible delay.

4. **Model/provider metadata confusion** — #4188 notes overlapping sources of truth (bundled JSON, hardcoded configs, live API) causing inconsistent picker behavior. The community strongly prefers a single canonical source (Models.dev).

5. **Fleet configuration complexity** — Issues #3993, #4138, and #4111 reveal confusion between Fleet's roll-based system and the new AgentProfile-first model. Users report setup wizard interleaving list rows with detail copy, and stale "loadout" terminology persisting in UI.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*