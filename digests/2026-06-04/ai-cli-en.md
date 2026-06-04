# AI CLI Tools Community Digest 2026-06-04

> Generated: 2026-06-04 00:48 UTC | Tools covered: 8

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

# AI CLI Tools Ecosystem — Cross-Tool Comparison Report

**Date:** 2026-06-04 | **Analyst:** OWL, ZOO Company

---

## 1. Ecosystem Overview

The AI CLI tool landscape in mid-2026 is characterized by rapid, parallel iteration across at least seven major projects, all converging on a shared vision of agentic development but diverging in architecture, provider strategy, and user experience. Claude Code and OpenAI Codex lead in raw community volume and enterprise mindshare, while Gemini CLI and OpenCode are pushing aggressively on extensibility and multi-provider support. Qwen Code and Kimi Code CLI represent the Chinese ecosystem's push for global relevance, with Qwen Code showing particularly strong momentum in daemon/ACP architecture. Pi occupies a unique niche as a provider-agnostic, multi-model client with deep thinking-block and image-handling capabilities. GitHub Copilot CLI, despite Microsoft's platform advantage, appears to be in a relative lull — no releases today and a growing backlog of Windows/CJK platform bugs that risk eroding developer trust.

---

## 2. Activity Comparison

| Tool | Issues (Active/Hot) | PRs (Active Today) | Release Today | Release Cadence Signal |
|------|---------------------|--------------------|---------------|----------------------|
| **Claude Code** | 10 hot issues | 2 (1 open, 1 closed) | ✅ v2.1.162 | High — frequent patches |
| **OpenAI Codex** | 10 hot issues | 10+ (incl. 7 stacked PRs) | ✅ rust-v0.137.0-α.4/.5 | High — alpha cadence |
| **Gemini CLI** | 10 hot issues | 9 (5 open, 4 closed) | ✅ v0.45.0 + v0.46.0-preview.1 | High — stable + preview tracks |
| **GitHub Copilot CLI** | 10 hot issues | 1 (no description) | ❌ None | Low — no release, quiet PRs |
| **Kimi Code CLI** | 4 open + 3 closed | 1 (closed/merged) | ❌ None | Low — minimal activity |
| **OpenCode** | 10 hot issues | 10 (all open, active) | ❌ None (1.15.x regressions) | Moderate — PR-heavy, no release |
| **Pi** | 10 hot issues | 10 (4 merged, 6 open) | ❌ None | Moderate — PR-heavy, no release |
| **Qwen Code** | 9 hot issues | 10 (all open) | ✅ v0.17.1 + preview + nightly | Very high — triple-track |

**Key takeaway:** Qwen Code and OpenAI Codex show the highest release velocity. OpenCode and Pi have the most PR activity without corresponding releases, suggesting they're in a feature-accumulation phase. Copilot CLI is the quietest across all dimensions.

---

## 3. Shared Feature Directions

The following requirements appear across **three or more** tool communities, indicating convergent market demand:

### 3.1 Context Window Transparency & Management
**Tools:** Claude Code, Copilot CLI, OpenCode, Pi, Qwen Code
- Claude Code: 1M context credit errors, `/compact` failures
- Copilot CLI: MCP schemas consuming 73% of 200k window at session start
- Pi: Image accumulation causing unrecoverable 413 overflow loops
- Qwen Code: Daemon cold-start latency tied to context loading
- **Shared need:** Token accounting visibility, tool/schema budgeting, and smarter compaction that accounts for images and MCP overhead — not just text turns.

### 3.2 Subagent / Multi-Agent Orchestration Reliability
**Tools:** Claude Code, Gemini CLI, OpenCode, Qwen Code
- Claude Code: Background subagents dying on transient rate limits (#65222)
- Gemini CLI: Subagents hanging, misreporting success after MAX_TURNS (#21409, #22323)
- OpenCode: Nested subagent permission prompts silently dropped (#30639)
- Qwen Code: ACP child lifecycle optimization for daemon cold start (#4751)
- **Shared need:** Resilient subagent execution with proper retry, permission propagation, and honest status reporting. This is the #1 trust gap across the ecosystem.

### 3.3 Sandbox / Filesystem Isolation
**Tools:** Claude Code, Copilot CLI, Pi, OpenCode
- Claude Code: Worktree sessions escaping to parent checkout (#59628)
- Copilot CLI: Sandbox mode is the #1 upvoted feature request (👍49, #892)
- Pi: Workspace approval system for untrusted directories (#5332)
- OpenCode: No native sandbox; relies on provider-level restrictions
- **Shared need:** Enterprise-grade filesystem guardrails that prevent agents from reading/writing outside workspace boundaries. This is a prerequisite for regulated-industry adoption.

### 3.4 Multi-Provider / BYOM (Bring Your Own Model)
**Tools:** OpenAI Codex, OpenCode, Pi, Qwen Code, Copilot CLI
- Codex: MCP namespace incompatibility with Ollama/LM Studio/OpenRouter (#26234)
- OpenCode: CommandCode provider request (#26338), SAP AI Core (#30482)
- Pi: MiniMax-M3, Anthropic Vertex, ZAI Coding China, Bedrock Mantle
- Qwen Code: OpenAI-compatible provider prefix corruption bug (#4729)
- Copilot CLI: Generic local model support request (#3624)
- **Shared need:** Provider-agnostic architecture. Developers increasingly refuse to be locked into a single model vendor, and MCP compatibility across providers is a critical gap.

### 3.5 Session Durability & Portability
**Tools:** Claude Code, Kimi Code CLI, OpenCode, Qwen Code
- Claude Code: Session history silently wiped after app update (#64403)
- Kimi Code CLI: Stale system prompts overwriting new skills on resume (#2420)
- OpenCode: Session mobility — moving sessions between directories (#30640)
- Qwen Code: Project-scoped session grouping with shared memory (#2421)
- **Shared need:** Sessions as durable, portable, first-class objects — not ephemeral terminal state. Resume correctness, cross-project memory, and session migration are all facets of this demand.

### 3.6 Voice / Speech-to-Text Input
**Tools:** OpenCode, (emerging in others)
- OpenCode: 👍161 on voice input request (#4695) — the single highest-upvoted feature request across all tools surveyed
- **Shared need:** While only OpenCode has explicit volume today, the demand for hands-free coding input is a natural next step as CLI tools mature into ambient development environments.

---

## 4. Differentiation Analysis

| Dimension | Claude Code | OpenAI Codex | Gemini CLI | Copilot CLI | Kimi Code CLI | OpenCode | Pi | Qwen Code |
|-----------|-------------|-------------|------------|-------------|---------------|----------|-----|-----------|
| **Primary Architecture** | Desktop app + CLI + VS Code ext | Rust-based, multi-crate (exec-server, app-server) | TypeScript/Node, stable + preview tracks | TypeScript/Node, GitHub ecosystem | TypeScript/Node, ACP protocol focus | Effect.ts (Haskell-influenced), plugin-centric | TypeScript, provider-agnostic client | TypeScript/Node, daemon + ACP |
| **Provider Strategy** | Anthropic-only (Claude) | OpenAI-first, expanding to multi-provider | Google Gemini-first | GitHub/Copilot (Microsoft) | Moonshot AI (Kimi) | Multi-provider native | Multi-provider native (broadest catalog) | Alibaba Qwen + OpenAI-compatible |
| **Target User** | Professional developers, Pro/Max subscribers | Rust developers, enterprise, remote execution teams | Google ecosystem developers, preview adopters | GitHub-centric teams, enterprise | Chinese ecosystem developers, ACP IDE users | Power users, plugin developers, Effect.ts community | Multi-model power users, researchers | Alibaba cloud users, daemon/API deployers |
| **Key Differentiator** | Deepest Claude integration, worktree support, 1M context | Noise protocol transport, Protected Data Mode, exec-server | Auto Memory, skill system, AST-aware tools roadmap | GitHub ecosystem integration, enterprise policy | ACP protocol (Zed integration), session model | Voice input demand, plugin extensibility, embedded runtime | Broadest provider catalog, thinking-block handling, image compaction | Daemon architecture, ACP for desktop, OpenTelemetry |
| **Weakest Area** | Billing/credit opacity, Windows reliability | Phone verification, single-account assumption, Linux Desktop gap | Subagent reliability, shell execution stalls | CJK/IME rendering, Windows stability, slow iteration | Low community volume, web UI gaps | 1.15.x regressions, macOS clipboard, startup crashes | Bun compatibility, Windows bash detection, idle CPU | Config corruption bugs, auth flow friction, MCP tool visibility |

### Notable Architectural Divergences

- **Transport layer:** Codex is the only tool investing in Noise protocol for secure remote execution — a significant differentiator for enterprise/remote development scenarios.
- **Runtime philosophy:** OpenCode's Effect.ts foundation gives it a unique functional-programming approach to agent orchestration, while Codex's Rust multi-crate architecture prioritizes performance and safety.
- **Daemon model:** Qwen Code is the most aggressive on the daemon/ACP architecture, explicitly building for desktop client embedding. Codex's exec-server is analogous but focused on remote execution rather than IDE integration.
- **Provider breadth:** Pi supports the widest range of model providers out of the box (Anthropic, OpenAI, Google, MiniMax, ZAI, Bedrock, Vertex), making it the most vendor-neutral option.

---

## 5. Community Momentum & Maturity

### Tier 1: Highest Activity & Momentum
- **OpenAI Codex** — Most structurally active project today: 10+ PRs including a 7-PR stacked series for Noise protocol, Protected Data Mode merged, prompt hooks system, and managed process spawning. The engineering velocity is exceptional, though community pain points (phone verification, single-account) suggest product-market fit gaps.
- **Qwen Code** — Triple-track release cadence (stable/preview/nightly), 10 active PRs, and a single contributor (`doudouOUC`) touching daemon performance, telemetry, ACP lifecycle, and workspace refactoring simultaneously. The project is in a hyperactive growth phase.
- **OpenCode** — 10 active PRs with significant architectural work (embedded v2 session runtime, command registry, session mobility). The 👍161 voice input demand and high engagement on regressions indicate a passionate, if sometimes frustrated, community.

### Tier 2: Strong Activity, Established Base
- **Claude Code** — Largest absolute community (evidenced by comment volumes: 35 comments on #63060, 163 on Codex's #23794). However, PR activity is unusually light today (only 2), and the issue tracker is dominated by recurring billing/credit bugs rather than new feature work. Suggests the team may be heads-down on a larger release.
- **Gemini CLI** — Solid release cadence (stable + preview), meaningful security work (path traversal fix), and active model support updates. Community is engaged but smaller than Claude Code or Codex.
- **Pi** — High PR throughput (10 active, 4 merged) with significant provider expansion and bug fixes. The community is technically sophisticated (detailed thinking-block corruption analysis, image compaction loops) but smaller in absolute size.

### Tier 3: Slower Iteration, Accumulating Debt
- **GitHub Copilot CLI** — No releases, 1 PR with no description, and a growing backlog of CJK/IME rendering bugs, Windows instability, and context window exhaustion issues. The 👍49 sandbox mode request has been open since January. This is the most concerning signal in the ecosystem — Copilot's platform advantage (GitHub + VS Code) is not translating into CLI tool momentum.
- **Kimi Code CLI** — Lowest activity across all metrics. Only 1 PR (closed), 4 open issues with minimal engagement. The project appears to be in maintenance mode or awaiting a larger update cycle.

---

## 6. Trend Signals

### Signal 1: The Context Window Arms Race Is Hitting Practical Limits
Every tool is now grappling with context window exhaustion — not from user code, but from MCP tool schemas, system prompts, images, and tool results. The industry is approaching a tipping point where **context budgeting** (not just context window size) becomes a core product differentiator. Tools that provide transparent token accounting and intelligent compaction (Pi's image-dropping recovery, Claude Code's `/compact`) will win enterprise trust.

### Signal 2: Subagent Reliability Is the Next Battleground
As developers move from single-turn assistance to multi-agent orchestration, the fragility of subagent execution becomes the critical failure mode. Today's digests show P1 bugs in **every tool** that supports subagents. The teams that solve retry logic, permission propagation, honest status reporting, and rate-limit resilience first will capture the automation-focused developer segment.

### Signal 3: Provider Lock-In Is Increasingly Unacceptable
The volume of multi-provider requests — from Codex users wanting Ollama support to Pi adding 4 new providers in one day — signals a market that refuses vendor lock-in. The "one model, one tool" era is ending. Tools with provider-agnostic architectures (Pi, OpenCode) or strong multi-provider roadmaps (Codex, Qwen Code) are better positioned than those tied to a single model family.

### Signal 4: Enterprise Readiness Requires Sandbox + Observability
Three distinct demands — filesystem sandboxing (Copilot CLI, Pi), OpenTelemetry (Qwen Code), and Protected Data Mode (Codex) — are all facets of the same enterprise readiness requirement. Regulated industries (finance, healthcare, government) cannot adopt AI CLI tools without audit trails, access controls, and data isolation. This is the gap between "developer toy" and "enterprise platform."

### Signal 5: The Daemon/ACP Model Is Emerging as the Standard Architecture
Qwen Code's daemon + ACP, Codex's exec-server, and OpenCode's embedded v2 runtime all point to a shared architectural evolution: **the CLI is becoming a thin client over a persistent agent daemon**. This enables IDE embedding, remote execution, session persistence, and multi-client access. Tools that remain purely CLI-process-based (Kimi Code CLI, Copilot CLI) risk architectural obsolescence.

### Signal 6: Internationalization Is a Competitive Liability
CJK/IME rendering bugs dominate Copilot CLI's issue tracker and appear in Gemini CLI and Qwen Code as well. As the AI developer tools market globalizes, **terminal internationalization quality** — not just UI translation — becomes a market access requirement. Tools that fail here will lose the Chinese, Japanese, and Korean developer markets by default.

---

*Report generated by OWL, ZOO Company. Data sourced from official GitHub repositories. All issue/PR references are hyperlinked in the source digests.*

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report

*Data as of 2026-06-04 | Source: [anthropics/skills](https://github.com/anthropics/skills)*

---

## 1. Top Skills Ranking

Ranked by community engagement (comments, 👍 reactions, and discussion activity):

| # | Skill | Author | Status | Engagement |
|---|-------|--------|--------|------------|
| 1 | **skill-quality-analyzer** & **skill-security-analyzer** | eovidiu | 🟡 Open | Most-discussed meta-skills |
| 2 | **document-typography** | PGTBoos | 🟡 Open | Solves universal AI doc quality issue |
| 3 | **agent-creator** | SyedaQurratAI | 🟡 Open | Addresses Issue #1120 + stability fixes |
| 4 | **testing-patterns** | 4444J99 | 🟡 Open | Comprehensive testing stack coverage |
| 5 | **frontend-design** (improved) | justinwetch | 🟡 Open | Clarity overhaul for actionable guidance |
| 6 | **AURELION suite** (kernel, advisor, agent, memory) | Chase-Key | 🟡 Open | Structured cognitive framework |
| 7 | **shodh-memory** | varun29ankuS | 🟡 Open | Persistent context across conversations |
| 8 | **ServiceNow platform** | Vanka07 | 🟡 Open | Broad enterprise platform assistant |

**Key observations:**
- **Meta-skills dominate interest**: Quality analysis, security analysis, and agent creation tools generate the most discussion — the community wants infrastructure to *build and evaluate* skills, not just end-user skills.
- **Document-typography** addresses a pain point that affects *every* AI-generated document (orphan words, widow paragraphs, numbering misalignment) — high universality.
- **AURELION** and **shodh-memory** reflect growing demand for persistent memory and structured cognitive frameworks.

---

## 2. Community Demand Trends

From Issues (sorted by comments and 👍 reactions):

### 🔴 Critical Pain Points
| Issue | Demand | Engagement |
|-------|--------|------------|
| [#228](https://github.com/anthropics/skills/issues/228) Org-wide skill sharing in Claude.ai | Enterprise distribution | 13 comments, 👍 7 |
| [#556](https://github.com/anthropics/skills/issues/556) `run_eval.py` 0% trigger rate | Skill evaluation reliability | 9 comments, 👍 6 |
| [#492](https://github.com/anthropics/skills/issues/492) Security: namespace trust boundary abuse | Trust & security | 7 comments, 👍 2 |
| [#189](https://github.com/anthropics/skills/issues/189) Duplicate skills from plugins | Plugin architecture | 6 comments, 👍 8 |

### 🟡 Feature Requests
| Issue | Demand | Engagement |
|-------|--------|------------|
| [#1220](https://github.com/anthropics/skills/issues/1220) Multi-file preload / inline bundling | Skill architecture | 2 comments |
| [#16](https://github.com/anthropics/skills/issues/16) Expose Skills as MCPs | Interoperability | 4 comments |
| [#29](https://github.com/anthropics/skills/issues/29) AWS Bedrock compatibility | Platform support | 4 comments |

### 📊 Demand Summary
1. **Enterprise distribution**: Org-wide sharing is the #1 requested feature (13 comments)
2. **Skill evaluation/reliability**: `run_eval.py` broken — community can't validate skill quality
3. **Security & trust**: Namespace impersonation is a real concern
4. **Cross-platform support**: Windows compatibility and AWS Bedrock support
5. **MCP integration**: Skills exposed as MCP tools for interoperability

---

## 3. High-Potential Pending Skills

Active PRs with significant community attention that may land soon:

| PR | Skill | Why It Matters | Status |
|----|-------|----------------|--------|
| [#1140](https://github.com/anthropics/skills/pull/1140) | **agent-creator** + eval fixes | Addresses Issue #1120; adds Windows support | 🟡 Open, updated 2026-06-02 |
| [#1099](https://github.com/anthropics/skills/pull/1099) | **skill-creator** Windows fix | Fixes `run_eval.py` crash on Windows | 🟡 Open, updated 2026-05-24 |
| [#1050](https://github.com/anthropics/skills/pull/1050) | **skill-creator** Windows subprocess fix | 1-line fixes for Windows compatibility | 🟡 Open, updated 2026-05-24 |
| [#541](https://github.com/anthropics/skills/pull/541) | **docx** w:id collision fix | Prevents document corruption with tracked changes | 🟡 Open, updated 2026-04-16 |
| [#539](https://github.com/anthropics/skills/pull/539) | **skill-creator** YAML validation | Prevents silent YAML parsing failures | 🟡 Open, updated 2026-04-16 |
| [#514](https://github.com/anthropics/skills/pull/514) | **document-typography** | Universal quality improvement for AI docs | 🟡 Open, updated 2026-03-13 |
| [#723](https://github.com/anthropics/skills/pull/723) | **testing-patterns** | Full testing stack coverage | 🟡 Open, updated 2026-04-21 |

**Notable pattern**: Multiple contributors (especially @Lubrsy706) are systematically fixing the **skill-creator** toolchain — Windows compatibility, YAML validation, and DOCX corruption fixes. These infrastructure improvements are prerequisites for broader skill adoption.

---

## 4. Skills Ecosystem Insight

> **The community's most concentrated demand is for meta-skills and infrastructure — tools to create, evaluate, secure, and distribute skills — rather than end-user skills themselves.**

The top issues (org-wide sharing, eval reliability, namespace security) and top PRs (quality analyzer, security analyzer, agent-creator, skill-creator fixes) all point to a community that has moved past "what skills should exist" to "how do we build a reliable, secure, scalable skills ecosystem."

---

*Report generated by OWL | Data: anthropics/skills as of 2026-06-04*

---

# Claude Code Community Digest — 2026-06-04

---

## 1. Today's Highlights

Claude Code shipped **v2.1.162**, adding a `waitingFor` field to `claude agents --json` and fixing `--tools` behavior for Grep/Glob on native builds. The issue tracker remains dominated by a cluster of **1M context / usage-credits errors** affecting Pro and Max plan users across macOS, Windows, and Linux, with multiple duplicates and high comment volumes. On the PR side, only two pull requests were active in the last 24 hours — a minor typo fix and a closed Socratic mentoring plugin.

---

## 2. Releases

### v2.1.162
- **`claude agents --json` now includes `waitingFor`** — surfaces what a waiting session is blocked on (e.g., permission prompt), improving observability for agent orchestration workflows.
- **`--tools` fix for Grep/Glob** — explicitly listing Grep or Glob now correctly provides the dedicated search tools on native builds with embedded search; previously these names were silently ignored.

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|----------------|--------------------|
| 1 | **[#63060](https://github.com/anthropics/claude-code/issues/63060)** — API Error: Usage credits required for 1M context | The most-commented issue (35 comments, 👍9). Pro/Max users on macOS are hitting a 1M context credit wall even when not explicitly requesting 1M context. Signals a potential regression in how context window billing is enforced. | High frustration; multiple users confirming across platforms. |
| 2 | **[#17149](https://github.com/anthropics/claude-code/issues/17149)** — LSP workspaceSymbol sends empty query parameter | A long-standing Windows bug (since Jan 2026) with 30 comments and 👍20. The LSP `workspaceSymbol` operation sends an empty query, breaking IDE symbol search integration. | Strong community interest; has repro. No fix in sight after 5 months. |
| 3 | **[#63870](https://github.com/anthropics/claude-code/issues/63870)** — Bash tool calls emitted as raw `<invoke>` text instead of executing | 👍10, 7 comments. The model emits malformed tool-call markup — raw `<invoke>` blocks appear in output instead of the Bash tool executing. Reporter provided JSONL evidence with 23 malformed calls in one session. | Particularly alarming because it silently drops commands without error. |
| 4 | **[#52472](https://github.com/anthropics/claude-code/issues/52472)** — Weekly usage limit reset occurring before scheduled reset time | 19 comments. Users report the weekly usage meter resetting ~4 days early, confirmed by `/usage` showing inconsistent reset dates. Affects planning for heavy usage days. | Duplicate reports suggest systemic issue with reset scheduling logic. |
| 5 | **[#59628](https://github.com/anthropics/claude-code/issues/59628)** — Worktree sessions can edit files in parent main checkout with no guardrail | Security-adjacent concern. Claude Code announces it's operating in a git worktree but doesn't enforce path restrictions, allowing `Edit`/`Write` to escape into the parent checkout. | Moderate engagement; important for teams using worktrees for parallel development. |
| 6 | **[#48769](https://github.com/anthropics/claude-code/issues/48769)** — Remote agent GitHub connector: 're-authorize GitHub in settings' error has no resolution path | 👍5, 7 comments. The error message tells users to re-authorize GitHub in settings, but no such path exists in the UI. A dead-end error experience. | Users feel stuck; clear UX gap between error messaging and actual settings. |
| 7 | **[#63634](https://github.com/anthropics/claude-code/issues/63634)** — `/compact` fails with "Usage credits required for 1M context" even after `/model set to Sonnet 4.6` | 5 comments. The compaction process internally requests a 1M context model regardless of the user-set session model, making `/compact` unusable for some users. | Highlights a disconnect between user model selection and internal compaction behavior. |
| 8 | **[#64403](https://github.com/anthropics/claude-code/issues/64403)** — Session history silently wiped after app update — no server-side backup, no export, no warning | Labeled `data-loss`. Users lost session history after a desktop app update with no recovery path. | Low comment count but high severity; data loss is a critical trust issue. |
| 9 | **[#65216](https://github.com/anthropics/claude-code/issues/65216)** — Worktree-relocated background agent sessions crash-loop on reopen | Fresh issue (opened Jun 3). Background agents relocated into git worktrees crash with "No conversation found with session ID" when reopened from the agents view. | New but likely to grow as worktree + background agent usage increases. |
| 10 | **[#65222](https://github.com/anthropics/claude-code/issues/65222)** — Background subagents die permanently on transient rate limits instead of retrying | Fresh issue (opened Jun 4). Background subagents (`run_in_background: true`) treat transient server-side rate limits as fatal errors rather than retrying with backoff. | Important for reliability of long-running background tasks; contradicts expected resilience behavior. |

---

## 4. Key PR Progress

Only **2 pull requests** were updated in the last 24 hours:

| PR | Status | Description |
|----|--------|-------------|
| **[#65223](https://github.com/anthropics/claude-code/pull/65223)** | OPEN | **Spelling fix** — corrects a typo ("reqwest" → "request") in the security guidance plugin. Minor maintenance. |
| **[#22919](https://github.com/anthropics/claude-code/pull/22919)** | CLOSED | **Socratic mentoring plugin** — added a "collab" plugin that transforms Claude into a mentor asking guiding questions instead of writing code directly. Closed without merge. |

> **Note:** PR activity is unusually light. The closed Socratic mentoring plugin (#22919) had been open since February and was closed without merging, suggesting the team may have different plans for guided/mentoring interaction modes.

---

## 5. Feature Request Trends

Distilled from open issues and enhancement requests:

1. **Inline edit popup for VS Code** ([#62180](https://github.com/anthropics/claude-code/issues/62180)) — A Cursor-style `Ctrl+K` inline edit popup for the VS Code extension. Users want faster, more contextual code editing without leaving the editor flow.

2. **Better agent observability** — Partially addressed by v2.1.162's `waitingFor` field. The community wants richer visibility into agent state, blocking conditions, and session lifecycle.

3. **Socratic/mentoring interaction modes** — The closed PR #22919 indicates community interest in guided development modes where Claude teaches rather than implements. This demand likely persists despite the PR closure.

4. **Usage/billing transparency** — Multiple issues around unexpected 1M context charges, early resets, and opaque credit consumption point to a strong demand for clearer usage metering and proactive warnings.

---

## 6. Developer Pain Points

**🔴 1M Context / Usage Credits Errors (Recurring Cluster)**
The single biggest pain point. Issues #63060, #63908, #64349, #64919, #63634, and #62885 all relate to users being blocked by "Usage credits required for 1M context" errors — sometimes when they didn't request 1M context, sometimes during `/compact`, sometimes on Pro plans. This spans macOS, Windows, Linux, and VS Code. The community sees this as a billing enforcement bug or at minimum a deeply confusing UX problem.

**🟡 Silent Tool Execution Failures**
Issue #63870 (Bash calls emitted as raw text) and #64112 (malformed tool-call markup with commands silently dropped) represent a class of bugs where tool invocations fail without clear error feedback. Developers lose work and trust when the agent appears to succeed but commands were never executed.

**🟡 Windows-Specific Reliability**
Issues #17149 (LSP), #49984 (session-env dir locks), #50886 (symlink/OneDrive conflicts), and #36700 (stale marketplace cache) show a pattern of Windows-specific friction. File system semantics, symlinks, and path handling on Windows continue to cause disproportionate pain.

**🟡 Session/Data Loss**
Issue #64403 (silent session history wipe after update) and #59456 (background task stop state not persisting) erode trust in Claude Code as a reliable development environment. Users expect session durability, especially in the desktop app.

**🟡 Worktree Safety**
Issue #59628 highlights that Claude Code doesn't enforce worktree boundaries, creating risk of unintended file modifications in the parent checkout. Teams adopting git worktrees for parallel development need guardrails.

**🟢 Rate Limit Resilience**
Fresh issue #65222 points to background subagents lacking retry logic for transient rate limits — a reliability gap for teams building automated agent pipelines.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-06-04

---

## 1. Today's Highlights

The Codex repository saw a burst of infrastructure-level activity today, with a large stacked PR series landing to bring **Noise protocol support** to the exec-server relay, a **Protected Data Mode** being merged into core/app-server, and a new **managed process spawning crate** introduced. On the community side, **phone verification failures** and **rate-limit/usage-drain bugs** dominate the most active issues, while the long-standing demand for **Linux desktop support** and **multi-account auth** continues to rack up votes.

---

## 2. Releases

Two new Rust alpha releases shipped in the last 24 hours:

- **[rust-v0.137.0-alpha.5](https://github.com/openai/codex/releases/tag/rust-v0.137.0-alpha.5)**
- **[rust-v0.137.0-alpha.4](https://github.com/openai/codex/releases/tag/rust-v0.137.0-alpha.4)**

No detailed release notes were provided in the data; these are incremental alpha builds likely containing the exec-server Noise work and other in-progress features visible in today's PRs.

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|---------------|-------------------|
| [23794](https://github.com/openai/codex/issues/23794) | **Codex Desktop no longer shows visible context/token usage indicator** (CLOSED) | A regression in the Desktop app removed the token/context bar, leaving users blind to how much context window they've consumed mid-session. | 163 comments, 👍160 — the most-reacted issue in the set. Highly visible UX regression. |
| [11023](https://github.com/openai/codex/issues/11023) | **Codex desktop app for Linux** | Linux users have no native Desktop client; many are forced to rely on the CLI or VS Code extension, missing out on app-level features. | 82 comments, 👍454 — the highest upvote count in the entire dataset. A top community priority. |
| [25749](https://github.com/openai/codex/issues/25749) | **Codex requires verification of an inaccessible legacy phone number with no recovery path** | Users locked to an old phone number cannot sign in to Codex despite valid Google OAuth + MFA on their OpenAI account. No replacement flow exists. | 34 comments, 👍17 — a critical auth blocker with no workaround. |
| [25828](https://github.com/openai/codex/issues/25828) | **Codex phone verification bug: unable to send verification code to any phone number** | A separate phone-verification failure (Indonesia) where the SMS send endpoint always errors out, blocking login entirely. | 10 comments — compounds the auth-accessibility concern above. |
| [21527](https://github.com/openai/codex/issues/21527) | **Codex is really too slow** | Users across both the VS Code extension and Desktop app report unacceptably slow model response times. | 25 comments, 👍14 — a recurring performance complaint. |
| [24428](https://github.com/openai/codex/issues/24428) | **Codex CLI responds too slowly, especially on SSE fallback** | CLI users report degraded latency, particularly when the transport falls back from WebSocket to SSE. | 13 comments, 👍25 — suggests a transport-layer regression. |
| [25715](https://github.com/openai/codex/issues/25715) | **Codex App unusably slow with WSL as agent environment** | Windows + WSL2 users experience severe performance degradation when Codex uses the WSL agent. | 11 comments, 👍15 — important for the growing Windows/WSL developer segment. |
| [26234](https://github.com/openai/codex/issues/26234) | **Flatten MCP namespace tools for non-OpenAI Responses API providers** | MCP server tools are never callable when Codex targets Ollama, LM Studio, OpenRouter, or AWS Bedrock due to a proprietary namespace serialization format. | 7 comments, 👍16 — blocks local/offline and multi-provider workflows. |
| [26253](https://github.com/openai/codex/issues/26253) | **Rate limits dropped from 77% to 0 in one minute** | A Spanish-language report of a critical bug where usage limits suddenly reset to zero, potentially indicating a metering error. | 8 comments, 👍2 — urgent if reproducible. |
| [24675](https://github.com/openai/codex/issues/24675) | **Codex Desktop keeps stale app connector link after 401 reauth** | After a connector (e.g., Linear) returns 401, Codex Desktop caches the stale link indefinitely; only manually clearing the local cache fixes it. | 17 comments, 👍11 — a silent auth failure mode that's hard to debug. |

---

## 4. Key PR Progress

| # | PR | Description |
|---|----|-------------|
| [26229](https://github.com/openai/codex/pull/26229) | **Add protected data mode to core and app server** (CLOSED/Merged) | Introduces a `Protected Data Mode` that MCP tool results can activate via a shared marker. While active, connector calls require explicit opt-in. Merges and persists state across resume, fork, thread-store, and rollout paths. |
| [26206](https://github.com/openai/codex/pull/26206) | **Add managed process spawning crate** | New `codex-process` crate at `codex-rs/process` that makes child lifecycle ownership explicit — dropping a handle without joining surfaces cleanup bugs. Addresses process ownership diagnostics. |
| [26239–26247, 26273](https://github.com/openai/codex/pull/26239) | **Exec-server: Noise protocol stack** (stacked PRs, OPEN) | A large stacked PR series (7 PRs) adding Noise protocol support to the exec-server relay: channel foundation, relay wire/transport, provider API, CLI opt-in, remote opt-in, E2E tests, and runtime tests. This is a major transport-layer upgrade for secure remote execution. |
| [26041](https://github.com/openai/codex/pull/26041) | **Add app-server background terminal process APIs** | Adds experimental v2 APIs so Codex Apps can list and terminate background terminals for a loaded thread via the app-server process ID, replacing fragile local process-tree guessing. |
| [26267](https://github.com/openai/codex/pull/26267) | **Add prompt hook runtime** | Establishes a provider-agnostic execution runtime for prompt hooks (model-backed handlers), decoupling `codex-hooks` from core inference details. |
| [26268](https://github.com/openai/codex/pull/26268) | **Expose prompt hooks to clients** | Surfaces prompt hook definitions, models, and `continueOnBlock` behavior through config requirements and `hooks/list`, so clients can review and explain hook behavior to users. |
| [24634](https://github.com/openai/codex/pull/24634) | **Add prompt hooks** | Adds prompt hook configuration fields, including `prompt` handlers, ensuring side-request inference doesn't replace the main conversation's cached WebSocket continuation state. |
| [26272](https://github.com/openai/codex/pull/26272) | **Load plugin hooks without other plugin capabilities** | Optimizes the critical TUI rendering path by loading only hook declarations from plugins instead of eagerly loading every enabled plugin's skills, MCP config, apps, and capability summaries. |
| [25947](https://github.com/openai/codex/pull/25947) | **Add saved image path hint to standalone image generation** | Appends the default saved-image path hint alongside generated image tool output so the model can reference the file in follow-up work. |
| [26013](https://github.com/openai/codex/pull/26013) | **Add terminal visualization instructions** | Injects terminal-specific developer instructions for compact ASCII diagrams, trees, timelines, and tables for CLI and Exec session sources. |

---

## 5. Feature Request Trends

Distilled from the issue tracker, the most-requested feature directions are:

1. **Multi-account / multi-profile auth** — Issues [#4432](https://github.com/openai/codex/issues/4432) (👍102), [#9648](https://github.com/openai/codex/issues/9648) (👍12), [#12029](https://github.com/openai/codex/issues/12029) (👍38), and [#20500](https://github.com/openai/codex/issues/20500) (👍45) all ask for first-class support for multiple ChatGPT/API accounts, `--auth-profile` flags, and per-connector account boundaries. This is the single most upvoted feature category.

2. **Linux Desktop app** — [#11023](https://github.com/openai/codex/issues/11023) (👍454) remains the highest-upvoted issue overall. Demand is broad and sustained.

3. **MCP ecosystem compatibility** — [#26234](https://github.com/openai/codex/issues/26234) (👍16) requests flattening MCP tool namespaces for non-OpenAI providers (Ollama, LM Studio, OpenRouter, Bedrock). [#19425](https://github.com/openai/codex/issues/19425) reports custom stdio MCP tools not being exposed to Desktop threads.

4. **Rate-limit and usage visibility** — [#24080](https://github.com/openai/codex/issues/24080) asks for richer status-line tokens (reset times, balance, plan type). [#20310](https://github.com/openai/codex/issues/20310) requests a `codex status` command. Users want programmatic and visible access to their quota state.

5. **TUI/CLI quality-of-life** — [#12200](https://github.com/openai/codex/issues/12200) (👍22) requests clean multiline/soft-wrap copy. [#25879](https://github.com/openai/codex/issues/25879) proposes iTerm2 tab-status integration for background sessions.

---

## 6. Developer Pain Points

- **Phone verification is a hard blocker.** Multiple issues ([#25749](https://github.com/openai/codex/issues/25749), [#25828](https://github.com/openai/codex/issues/25828), [#25765](https://github.com/openai/codex/issues/25765), [#25820](https://github.com/openai/codex/issues/25820)) report users completely unable to log in due to SMS verification failures, inaccessible legacy numbers, or rate-limited verification endpoints. This disproportionately affects users in certain regions and those who've changed phone numbers.

- **Performance is a persistent complaint.** At least four issues ([#21527](https://github.com/openai/codex/issues/21527), [#24428](https://github.com/openai/codex/issues/24428), [#25715](https://github.com/openai/codex/issues/25715), [#14297](https://github.com/openai/codex/issues/14297)) describe unacceptably slow responses across Desktop, CLI, and WSL environments, with some citing specific regressions after updates.

- **Auth/session state silently breaks.** Issues [#24675](https://github.com/openai/codex/issues/24675) (stale connector links after 401) and [#25810](https://github.com/openai/codex/issues/25810) (sandbox policy not inheriting Full Access state) describe bugs where the app appears to work but is operating with incorrect permissions or stale credentials — difficult to diagnose without internal knowledge.

- **Usage/rate-limit accounting is opaque and potentially buggy.** Users report limits draining while idle ([#24818](https://github.com/openai/codex/issues/24818)), limits dropping to zero suddenly ([#26253](https://github.com/openai/codex/issues/26253)), and limits depleting faster than expected ([#24337](https://github.com/openai/codex/issues/24337)). Combined with the lack of a `status` command, users feel they're flying blind.

- **Single-account assumption is a real-world blocker.** Developers working across personal, corporate, and client accounts cannot use Codex effectively on a shared machine. This is the most upvoted pain point category and shows no sign of abating.

---

*Data source: [github.com/openai/codex](https://github.com/openai/codex) · Digest generated 2026-06-04*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-06-04

---

## 1. Today's Highlights

Gemini CLI shipped **v0.45.0** (stable) and **v0.46.0-preview.1** today, with the headline being the transition to the Gemini 3.5 Flash GA model family and a critical path-traversal security fix in the skill management subsystem. On the issue tracker, agent reliability continues to dominate community attention — subagent hangs, silent success-after-timeout misreporting, and shell-execution stalls are the most-commented pain points. A cluster of Auto Memory quality and security bugs filed by SandyTao520 in early May is also gaining traction.

---

## 2. Releases

| Version | Type | Key Changes |
|---|---|---|
| **v0.45.0** | Stable | Prevents Termux relaunch/resize remount loops (#27110); various housekeeping and nightly-bump cleanups. |
| **v0.46.0-preview.1** | Preview | Cherry-pick patch from #27645 — respects backend definitions for 3.5 Flash and updates auto mode to use 3.5 Flash when the experiment flag is enabled. |

**Full changelog (v0.45.0):** <https://github.com/google-gemini/gemini-cli/releases/tag/v0.45.0>

---

## 3. Hot Issues

Picked by comment count, community 👍, and strategic importance.

### Agent Reliability & Correctness

1. **#21409 — Generalist agent hangs** · 7 comments · 👍8
   The most upvoted issue in the set. Users report the generalist subagent hanging indefinitely on trivial operations (e.g., folder creation). Workaround: instruct the model not to defer to subagents. This is a P1 bug and a core trust issue.
   → <https://github.com/google-gemini/gemini-cli/issues/21409>

2. **#22323 — Subagent reports GOAL success after hitting MAX_TURNS** · 6 comments · 👍2
   The `codebase_investigator` subagent returns `status: "success"` / `Termination Reason: "GOAL"` even when it hit the turn limit without doing any analysis. This silently hides interruptions from the orchestrator.
   → <https://github.com/google-gemini/gemini-cli/issues/22323>

3. **#25166 — Shell command execution gets stuck with "Waiting input"** · 4 comments · 👍3
   After a simple CLI command finishes, Gemini hangs showing the shell as active and "Awaiting user input." Affects even commands that never prompt. P1 core bug.
   → <https://github.com/google-gemini/gemini-cli/issues/25166>

4. **#21968 — Gemini does not use skills and sub-agents enough** · 6 comments
   Anecdotal but widely relatable: the model ignores custom skills and subagents unless explicitly instructed, even when the task is a clear match. Points to a prompt/tool-description quality gap.
   → <https://github.com/google-gemini/gemini-cli/issues/21968>

5. **#22093 — Subagents running without permission since v0.33.0** · 2 comments
   Users who disabled agent mode in all configs found subagents (e.g., generalist) activating after upgrading to v0.33.0. A regression in config-respect behavior.
   → <https://github.com/google-gemini/gemini-cli/issues/22093>

### Auto Memory — Security & Quality Cluster

6. **#26525 — Add deterministic redaction and reduce Auto Memory logging** · 3 comments
   Auto Memory sends transcript content to the extraction model *before* redaction occurs, meaning secrets can reach model context. Calls for deterministic redaction and less verbose logging.
   → <https://github.com/google-gemini/gemini-cli/issues/26525>

7. **#26523 — Surface or quarantine invalid Auto Memory inbox patches** · 3 comments
   The memory inbox silently skips malformed patches; aggregate dismiss only removes valid ones. Invalid `.patch` files accumulate and the background extractor's summary reads all of them.
   → <https://github.com/google-gemini/gemini-cli/issues/26523>

8. **#26522 — Stop Auto Memory from retrying low-signal sessions indefinitely** · 3 comments
   If the extraction agent decides a session looks low-signal and skips it, the session is never marked processed and gets retried forever.
   → <https://github.com/google-gemini/gemini-cli/issues/26522>

### Evaluation & Agent Quality

9. **#24353 — Robust component-level evaluations** · 7 comments
   EPIC tracking the expansion of behavioral eval tests (76 exist so far) across 6 Gemini models. Follows up on #15300. Critical for measuring agent quality regressions.
   → <https://github.com/google-gemini/gemini-cli/issues/24353>

10. **#22745 — Assess impact of AST-aware file reads, search, and mapping** · 7 comments · 👍1
    EPIC investigating whether AST-aware tools can reduce turns and token noise by reading precise method bounds. Could meaningfully improve `codebase_investigator` quality.
    → <https://github.com/google-gemini/gemini-cli/issues/22745>

---

## 4. Key PR Progress

### Security

- **#27659 — Prevent path traversal during skill install, link, and uninstall** *(OPEN)*
  Fixes three path-traversal vulnerabilities in `installSkill`, `linkSkill`, and `uninstallSkill`. The CLI parser previously accepted frontmatter paths that could escape the allowed root. Important for any user installing third-party skills.
  → <https://github.com/google-gemini/gemini-cli/pull/27659>

### Model Support

- **#27645 — Respect backend definitions for 3.5 Flash; update auto mode** *(CLOSED, merged)*
  Ensures the `auto` model alias and flash tier consistently resolve to Gemini 3.5 Flash GA when the experiment flag is active. Cherry-picked into v0.46.0-preview.1.
  → <https://github.com/google-gemini/gemini-cli/pull/27645>

- **#27614 — Add support for Gemini 3.5 Flash model family** *(CLOSED, merged)*
  Adds `gemini-3.5-flash-preview` and `gemini-3.5-flash-lite-preview` constants, configs, and resolution logic.
  → <https://github.com/google-gemini/gemini-cli/pull/27614>

- **#27570 — Transition to Flash GA model when experiment flag is present** *(CLOSED)*
  Replaces legacy Gemini Flash models with `gemini-3.5-flash`, gated by experiment flag and user access logic for safe rollout.
  → <https://github.com/google-gemini/gemini-cli/pull/27570>

### Reliability & Platform Fixes

- **#27572 — Handle tmux false positive background detection** *(OPEN)*
  Fixes incorrect light-terminal-background detection inside tmux (especially via mosh), which caused inappropriate theme switching and compatibility warnings.
  → <https://github.com/google-gemini/gemini-cli/pull/27572>

- **#27619 — Implement atomic update in MCP tool discovery** *(OPEN)*
  Prevents "tool not found" errors during transient network drops by ensuring the MCP tool registry retains the last-known-good state instead of clearing on failure.
  → <https://github.com/google-gemini/gemini-cli/pull/27619>

- **#27639 — Disable auto-update for corporate release paths** *(CLOSED)*
  Detects Google internal/corporate release paths (`/google/bin/`) and disables the auto-update prompt to avoid conflicts with managed deployments.
  → <https://github.com/google-gemini/gemini-cli/pull/27639>

### UX & Quality of Life

- **#25786 — Enhance /copy command with index support and tool result text** *(OPEN, help wanted)*
  Adds `/copy N` to copy the Nth most recent AI response and includes MCP tool output in copyable content. Closes #16341.
  → <https://github.com/google-gemini/gemini-cli/pull/25786>

- **#27505 — Prevent extra spaces on width-0 CJK continuation cells** *(OPEN)*
  Fixes rendering bug injecting spurious spaces between CJK wide characters in shell output, improving cross-platform terminal serialization for international users.
  → <https://github.com/google-gemini/gemini-cli/pull/27505>

---

## 5. Feature Request Trends

| Direction | Evidence |
|---|---|
| **AST-aware codebase tools** | #22745, #22746, #22747 — Three linked EPICs investigating AST-aware file reads, search, and codebase mapping to reduce agent turns and token waste. |
| **Agent self-awareness** | #21432 — Request for the agent to accurately know its own CLI flags, hotkeys, and execution mechanics so it can self-document. |
| **Browser agent resilience** | #22232 — Automatic session takeover and lock recovery for `browser_agent` when using `sessionMode: 'persistent'`. |
| **Enhanced /copy command** | #25786 (PR) / #16341 — Index-based copying and inclusion of tool results in clipboard output. |
| **Remote agent auth & background ops** | #20303 — EPIC for task-level auth, 1P agent support, and background processing in remote agents. |
| **Destructive-behavior guardrails** | #22672 — Agent should discourage or stop dangerous operations (e.g., `git reset --force`) when safer alternatives exist. |

---

## 6. Developer Pain Points

1. **Subagent orchestration is fragile.** Multiple P1 bugs (#21409, #22323, #22093) show that subagents hang, misreport success, and sometimes run when explicitly disabled. This is the single biggest trust gap for users relying on autonomous agent workflows.

2. **Shell execution stalls.** Issue #25166 (👍3) describes a recurring hang where the CLI thinks a finished shell command is still waiting for input. This blocks the entire session and has no visible recovery path.

3. **Auto Memory is a security and reliability concern.** Three issues (#26525, #26523, #26522) filed in a batch reveal that Auto Memory can leak secrets to model context, silently skip invalid patches, and retry low-signal sessions forever. Users enabling Auto Memory are exposed to both data leakage and resource waste.

4. **Skills and subagents are underutilized.** Issue #21968 highlights that the model ignores custom skills unless explicitly told to use them, undermining the extensibility story. This suggests skill descriptions or the tool-prompt injection mechanism needs improvement.

5. **Terminal rendering edge cases.** Issues #21924 (flicker on resize), #24935 (corruption after external editors), and #27505 (CJK spacing) show that terminal UX — especially for international users and external-tool workflows — remains a source of friction.

6. **Config overrides are ignored by subagents.** Issue #22232 reports that `settings.json` overrides (e.g., `maxTurns`) are not respected by the Browser Agent, suggesting config propagation to subagent registries is incomplete.

---

*Data source: [github.com/google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli) · Digest generated 2026-06-04*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-06-04

---

## 1. Today's Highlights

No new releases landed in the last 24 hours, but the issue tracker saw significant activity — 42 issues updated, with a clear concentration of bugs around **CJK/IME input rendering on Windows**, **context-window exhaustion from MCP tool schemas**, and **keyboard input regressions**. The community is also pushing hard for a **sandbox mode** to restrict agent filesystem access, which remains the most-upvoted open feature request.

---

## 2. Releases

**None.** No new versions published in the last 24 hours.

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|---------------|--------------------|
| [#892](https://github.com/github/copilot-cli/issues/892) | **Add sandbox mode to restrict file access** | Enterprise and security-conscious users need guardrails preventing the agent from reading/writing outside the workspace root. This is critical for regulated environments. | 👍 49 — the highest upvote count in the tracker; 10 comments. Remains open since January. |
| [#1481](https://github.com/github/copilot-cli/issues/1481) | **SHIFT+ENTER executes prompt instead of line break** | Violates a near-universal chat-app convention. Forces users to retrain muscle memory or use CTRL+ENTER. | 👍 14, 24 comments. Closed but discussion remains active — signals the fix may be incomplete or reverted. |
| [#3539](https://github.com/github/copilot-cli/issues/3539) | **System/Tools consume 73% of context window (146k/200k)** | With ~10 MCP servers configured, the tool/schema overhead alone fills the context window before the user sends a single message, triggering immediate auto-compaction. | 👍 2, 5 comments. A growing pain as MCP adoption scales. |
| [#3542](https://github.com/github/copilot-cli/issues/3542) | **Enterprise MCP allowlist exceeds token limit → infinite compaction loop** | Related to #3539 but specific to enterprise policy-enforced MCP allowlists. The hard-coded token limit causes a persistent compaction cycle that makes sessions unusable. | 👍 1, 1 comment. Early report but high severity. |
| [#3659](https://github.com/github/copilot-cli/issues/3659) | **CLI cannot execute hooks shipped with plugins (v1.0.57)** | PreToolUse hook exceptions block all prompts. A regression that effectively bricks the CLI for plugin users on Windows. | 0 upvotes, 2 comments. Fresh report — likely needs urgent triage. |
| [#3622](https://github.com/github/copilot-cli/issues/3622) | **Copy to clipboard silently fails on Windows** | Clipboard operations appear to succeed but don't update the system clipboard. Breaks workflows that rely on copying agent output. | 👍 2, 2 comments. Regression from v1.0.48. |
| [#1999](https://github.com/github/copilot-cli/issues/1999) | **Cannot enter `@` on German keyboard (Alt-Gr + Q)** | Makes the CLI effectively unusable for German-layout users since `@` is essential for mentions and paths. | 👍 1, 8 comments. Long-standing issue since March. |
| [#3648](https://github.com/github/copilot-cli/issues/3648) | **Typing Japanese after ASCII corrupts prompt layout** | Mixed CJK/ASCII input causes rendering corruption in the input field. Affects all Japanese users. | 0 upvotes, 1 comment. Closed but likely related to the broader CJK rendering cluster. |
| [#3654](https://github.com/github/copilot-cli/issues/3654) | **CJK characters invisible after Space (cell-based renderer bug)** | Introduced around v1.0.55 when the cell-based terminal renderer became default. Glyphs are reserved 2-cell width but not painted. | 0 upvotes, 1 comment. Part of a pattern of CJK rendering regressions. |
| [#3664](https://github.com/github/copilot-cli/issues/3664) | **preToolUse hook `cwd` field does not expand `~` (tilde)** | Hooks with `"cwd": "~"` resolve against the literal string `~` instead of the home directory, silently blocking all tool calls. | 0 upvotes, 0 comments. Just filed — likely affects many plugin/hook configurations. |

---

## 4. Key PR Progress

Only **1 pull request** was updated in the last 24 hours:

| # | PR | Description |
|---|----|-------------|
| [#3651](https://github.com/github/copilot-cli/pull/3651) | **Create xcopilotcli** | New PR by @XavierMP14. No description or diff available yet — likely a work-in-progress or placeholder. |

*No other PRs were active in the 24-hour window. The contribution pipeline appears quiet relative to the volume of open issues.*

---

## 5. Feature Request Trends

Synthesized from all open and recently updated issues:

1. **Sandbox / Filesystem Isolation** ([#892](https://github.com/github/copilot-cli/issues/892)) — The most-demanded feature. Users want a mode that constrains the agent to the workspace root, preventing access to `~/.ssh`, `~/.aws`, or other sensitive paths outside the project.

2. **Context Window Transparency & Optimization** ([#3539](https://github.com/github/copilot-cli/issues/3539), [#3542](https://github.com/github/copilot-cli/issues/3542), [#3612](https://github.com/github/copilot-cli/issues/3612)) — Users want a breakdown of input vs. output tokens, and they want the tool/schema overhead to be reduced or compressed so MCP-heavy configurations don't immediately exhaust the window.

3. **Generic Local Model Support (BYOM)** ([#3624](https://github.com/github/copilot-cli/issues/3624)) — Users want to register Ollama, LM Studio, llama.cpp, and other OpenAI-compatible local endpoints as model providers, not just Anthropic-specific configurations.

4. **Session Management Improvements** ([#3645](https://github.com/github/copilot-cli/issues/3645), [#2303](https://github.com/github/copilot-cli/issues/2303)) — Auto-naming terminal sessions from conversation context, and the ability to reliably resume old sessions by ID.

5. **Keyboard/Input Standardization** ([#1481](https://github.com/github/copilot-cli/issues/1481), [#45](https://github.com/github/copilot-cli/issues/45), [#3587](https://github.com/github/copilot-cli/issues/3587)) — Aligning keybindings with platform conventions (SHIFT+ENTER for newline, Option/Cmd+Backspace for word/line delete, reliable Ctrl+C cancel).

---

## 6. Developer Pain Points

**CJK/IME Input Rendering — A Systemic Issue**
The single biggest cluster of complaints. At least **6 issues** ([#3648](https://github.com/github/copilot-cli/issues/3648), [#3654](https://github.com/github/copilot-cli/issues/3654), [#3650](https://github.com/github/copilot-cli/issues/3650), [#3536](https://github.com/github/copilot-cli/issues/3536), [#3045](https://github.com/github/copilot-cli/issues/3045), [#1999](https://github.com/github/copilot-cli/issues/1999)) report problems with Chinese, Japanese, and Korean text input — invisible characters, corrupted layout, IME flickering, and dropped glyphs. Many trace to the v1.0.55 cell-based terminal renderer change. This is a **blocking issue for all CJK-language developers**.

**Context Window Exhaustion at Session Start**
Users with multiple MCP servers report that tool schemas alone consume 70–100% of the 200k context window ([#3539](https://github.com/github/copilot-cli/issues/3539), [#3542](https://github.com/github/copilot-cli/issues/3542)). This triggers auto-compaction before any user input, degrading response quality from the first message. As MCP adoption grows, this will affect more users.

**Windows Platform Instability**
Clipboard failures ([#3622](https://github.com/github/copilot-cli/issues/3622)), hook execution crashes ([#3659](https://github.com/github/copilot-cli/issues/3659)), CJK rendering bugs ([#3536](https://github.com/github/copilot-cli/issues/3536)), and even OS-level crashes corrupting session state ([#3593](https://github.com/github/copilot-cli/issues/593)) all point to Windows being a second-class platform in testing coverage.

**Keyboard Binding Regressions**
Multiple reports of previously-working keybindings breaking across versions — Ctrl+C cancel ([#3587](https://github.com/github/copilot-cli/issues/3587)), Esc to interrupt streaming ([#3607](https://github.com/github/copilot-cli/issues/3607)), and SHIFT+ENTER ([#1481](https://github.com/github/copilot-cli/issues/1481)). Each regression forces users to adapt workflows or downgrade.

**Plugin/Hook System Fragility**
Two fresh issues ([#3587](https://github.com/github/copilot-cli/issues/3587), [#3664](https://github.com/github/copilot-cli/issues/3664)) suggest the plugin hook infrastructure has path-resolution and shell-compatibility bugs that silently break tool execution — a critical failure mode for enterprise governance workflows.

---

*Data source: [github.com/github/copilot-cli](https://github.com/github/copilot-cli) · Digest generated 2026-06-04*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-06-04

---

## 1. Today's Highlights

No new releases landed in the past 24 hours. The most technically significant activity centers on **Issue #2420**, where a session-resume bug causes stale system prompts to overwrite freshly generated ones — silently breaking skill and config updates for anyone resuming old sessions. On the UX side, a closed PR (#1848) shipped block-level editing for pasted image/text placeholders, addressing a long-standing friction point raised in Issue #1847.

---

## 2. Releases

**None.** No new versions published in the last 24 hours.

---

## 3. Hot Issues

| # | Status | Title | Why It Matters | Community Signal |
|---|--------|-------|----------------|------------------|
| [#2420](https://github.com/MoonshotAI/kimi-cli/issues/2420) | 🟠 OPEN | Session resume overrides newly generated system prompt | Resuming an old session silently discards new skills and config changes — a correctness bug that can cause confusing, hard-to-debug behavior. | 0 comments so far; likely under-reported. |
| [#2421](https://github.com/MoonshotAI/kimi-cli/issues/2421) | 🟠 OPEN | Need project-level model / session grouping | Requests project-scoped sessions with shared memory/indexing to reduce token usage — a major workflow improvement for multi-session developers. | Early-stage idea; no discussion yet. |
| [#2419](https://github.com/MoonshotAI/kimi-cli/issues/2419) | 🟠 OPEN | Kimi web: cannot copy content from chat boxes | Blocks a basic usability workflow (copy-paste) in the web UI, directly impacting daily productivity. | 0 comments; needs triage. |
| [#2418](https://github.com/MoonshotAI/kimi-cli/issues/2418) | 🟠 OPEN | Replay mode on every session switch is unwanted | Auto-replaying full history on every session switch creates latency and visual noise; users want on-demand replay. | 0 comments; UX friction. |
| [#1847](https://github.com/MoonshotAI/kimi-cli/issues/1847) | ✅ CLOSED | Treat pasted image + text placeholder as a single block | Editing pasted media character-by-character is error-prone. Closed after PR #1848 implemented block-level selection and deletion. | 0 comments; resolved via PR. |
| [#751](https://github.com/MoonshotAI/kimi-cli/issues/751) | ✅ CLOSED | Slash commands should execute immediately on selection | Eliminates the redundant second Enter press. Closed (implementation status unclear from data). | 5 comments; moderate engagement. |
| [#2306](https://github.com/MoonshotAI/kimi-cli/issues/2306) | ✅ CLOSED | APC protocol playback / session history not displaying | Detailed analysis of session history loss in both `kimi acp` (Zed) and `kimi web` modes. Closed after investigation. | 0 comments; likely fixed or documented. |

---

## 4. Key PR Progress

| # | Status | Title | Description |
|---|--------|-------|-------------|
| [#1848](https://github.com/MoonshotAI/kimi-cli/pull/1848) | ✅ CLOSED | `feat(prompt)`: edit image and pasted-text placeholders as blocks | Implements block-level cursor navigation and deletion for mixed media+text placeholders. Directly resolves Issue #1847. Merged/closed on 2026-06-03. |

Only one PR updated in the window — a focused UX fix now shipped.

---

## 5. Feature Request Trends

1. **Project-scoped session management** ([#2421](https://github.com/MoonshotAI/kimi-cli/issues/2421)) — Grouping sessions under projects with shared memory and indexing to cut token costs.
2. **Smarter replay / session-switch behavior** ([#2419](https://github.com/MoonshotAI/kimi-cli/issues/2419), [#2418](https://github.com/MoonshotAI/kimi-cli/issues/2418)) — Users want control over when history replays and the ability to copy from the web UI.
3. **Placeholder/block editing UX** ([#1847](https://github.com/MoonshotAI/kimi-cli/issues/1847) → resolved) — Treating pasted content as atomic blocks rather than raw text.
4. **Session-resume correctness** ([#2420](https://github.com/MoonshotAI/kimi-cli/issues/2420)) — Ensuring resumed sessions pick up new skills and config rather than silently reverting.

---

## 6. Developer Pain Points

- **Silent config/skill loss on resume** — The most critical pain point today. Developers who add skills or update config and then resume an old session get no indication that their changes were ignored. This undermines trust in the tool's state management.
- **Web UI copy-paste broken** — A basic interaction that "just works" in most tools is failing in `kimi web`, forcing workarounds.
- **Forced replay on every switch** — Developers with long session histories face unnecessary latency and visual disruption when navigating between sessions.
- **Placeholder editing friction** — Now resolved via PR #1848, but was a recurring annoyance: deleting or navigating pasted images character-by-character.

---

*Digest generated by OWL for the Kimi Code CLI community. Data source: [github.com/MoonshotAI/kimi-cli](https://github.com/MoonshotAI/kimi-cli).*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-06-04

---

## 1. Today's Highlights

No new releases landed in the last 24 hours, but the issue tracker and PR queue are both very active. The community is rallying around **voice/speech-to-text input** as a top-requested feature, while a wave of recent bug reports points to **regressions in the 1.15.x line** — including startup crashes, runaway CPU usage, and auto-scroll breakage. On the PR side, contributor `literally-dan` is on a tear, shipping fixes for nested subagent permissions, session retry logic, and storage indexing all in one day.

---

## 2. Releases

**None** in the last 24 hours.

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|----------------|--------------------|
| [#1505](https://github.com/anomalyco/opencode/issues/1505) | `shift+enter` keybinding not working (CLOSED) | A core TUI input shortcut has been broken for months; `ctrl+j` works as a workaround but muscle memory is hard to retrain. | 126 comments, 👍101 — one of the most-engaged issues in the repo. |
| [#4695](https://github.com/anomalyco/opencode/issues/4695) | Speech-to-Text voice input feature request | Voice input is the single most upvoted feature request, with multiple duplicate issues (#17425, #30634, #30601) converging on the same ask. | 32 comments, 👍161 — clear signal that the community wants this yesterday. |
| [#28996](https://github.com/anomalyco/opencode/issues/28996) | Crash at start (WezTerm on Debian testing) | Users on popular terminal emulators are hitting hard crashes on launch, blocking all usage. | 13 comments — limited repro details but high severity. |
| [#29992](https://github.com/anomalyco/opencode/issues/29992) | Auto-scroll stops after manual scroll + return to bottom | Breaks the core "watch the assistant work" experience during long generations. | 11 comments, 👍14 — a regression that directly impacts daily UX. |
| [#29548](https://github.com/anomalyco/opencode/issues/29548) | OpenAI provider headers timeout after 10000ms on 1.15.11 | A version regression that silently breaks OpenAI provider for users with slower connections. | 10 comments — workaround exists (`headerTimeout` config) but the default is too aggressive. |
| [#30086](https://github.com/anomalyco/opencode/issues/30086) | High CPU usage in newer versions | Users running multiple sessions see dramatic CPU spikes, making the tool unusable at scale. | 8 comments — performance regressions are a top priority for power users. |
| [#26338](https://github.com/anomalyco/opencode/issues/26338) | Add CommandCode as a provider | Community wants more provider options; CommandCode is a newer entrant gaining traction. | 7 comments, 👍10. |
| [#12800](https://github.com/anomalyco/opencode/issues/12800) | macOS-friendly clipboard fallback | Clipboard is broken on macOS because the helper only looks for `xclip`. A `pbcopy` fallback is trivial but missing. | 7 comments, 👍7 — a quick win for Mac users. |
| [#16610](https://github.com/anomalyco/opencode/issues/16610) | Hangs at startup when inotify instances are exhausted | Linux users with constrained inotify limits hit a silent hang instead of a clear error. | 6 comments, 👍5 — affects CI/container environments. |
| [#30611](https://github.com/anomalyco/opencode/issues/30611) | Sessions fail on transient network errors instead of retrying | Only `ECONNRESET` is retryable; other transient failures kill the session. | 3 comments — already has a fix PR (#30638) in progress. |

---

## 4. Key PR Progress

| # | PR | Author | What It Does |
|---|----|--------|--------------|
| [#30632](https://github.com/anomalyco/opencode/pull/30632) | feat(core): add embedded v2 session runtime and tool foundation | kitlangton | Draft PR building an Effect-native embedded runtime for local-first consumers (e.g., OpenCord). Separates prompt admission from execution and extends the session event model with replay support. |
| [#30624](https://github.com/anomalyco/opencode/pull/30624) | feat(core): add command registry | thdxr | Introduces a location-scoped `CommandV2` registry with ordered transforms, normalizes legacy inline command config, and loads `{command,commands}/**/*.md` definitions through a core config plugin. |
| [#30640](https://github.com/anomalyco/opencode/pull/30639) | feat(core): moving sessions | jlongster | Adds a core control-plane move-session service, TUI `/move` flows, and session move events — enabling users to relocate sessions between project directories. |
| [#30639](https://github.com/anomalyco/opencode/pull/30639) | fix(session): route nested subagent permission prompts to ancestor UI | literally-dan | Fixes the long-standing bug where permission/question prompts from nested subagents were silently dropped because the UI only recognized its direct sessions. Closes #13715 and #7654. |
| [#30638](https://github.com/anomalyco/opencode/pull/30638) | fix(session): classify transport and timeout errors as retryable | literally-dan | Expands retryable error classification beyond `ECONNRESET` to cover broader transient transport failures. Closes #30611. |
| [#30636](https://github.com/anomalyco/opencode/pull/30636) | fix(storage): add session and event indexes | literally-dan | Adds `session(time_updated)` and `event(aggregate_id, seq)` indexes to match query patterns, improving session list and event replay performance. Closes #30609. |
| [#30633](https://github.com/anomalyco/opencode/pull/30633) | fix(session): recover when models emit tool calls as plain text | pebeto | Handles the case where vLLM/llama.cpp models write tool calls as raw text instead of structured calls, preventing session crashes. Closes #24316. |
| [#30644](https://github.com/anomalyco/opencode/pull/30644) | fix(app): improve desktop session tabs | Hona | Reserves close-button width, keeps subagent routes attached to root session tabs, and resolves tab metadata reactively so renames update immediately. |
| [#30019](https://github.com/anomalyco/opencode/pull/30019) | feat(mcp): add TUI notifications for plugins | Shodocan | Adds an MCP/TUI notification bridge so configured MCP servers can communicate with the active TUI session. Closes #30020. |
| [#12633](https://github.com/anomalyco/opencode/pull/12633) | feat(tui): add auto-accept mode for permission requests | thdxr | Toggleable autoedit mode (default `shift+tab`) that auto-accepts edit permissions with a "once" reply while still prompting for other permission types. |

---

## 5. Feature Request Trends

1. **Voice / Speech-to-Text Input** — The dominant feature request by engagement. Issues #4695 (👍161), #17425, #30634, and #30601 all converge on this. The community wants a local-first implementation that doesn't require sending audio to a third-party API.

2. **Plugin Extensibility** — Multiple issues (#17425, #25293, #28037) highlight gaps in the plugin system, particularly around voice input plugins, permission reply handling, and npm cache staleness.

3. **Provider Expansion** — Requests for new providers (CommandCode #26338, SAP AI Core reasoning variants #30482) show the community wants OpenCode to be provider-agnostic.

4. **Configurable Search Paths** — Users want configurable search paths for commands and agents (#14240, #27972), mirroring the existing `.agents/skills` convention.

5. **Agent Presets** — #29626 requests configurable agent presets to avoid reconfiguring subagents for every project.

6. **Session Mobility** — PR #30640 (moving sessions between directories) addresses a workflow need for users who work across multiple project roots.

---

## 6. Developer Pain Points

- **1.15.x Regressions** — The jump from 1.14.x to 1.15.x introduced multiple regressions: OpenAI header timeouts (#29548), high CPU usage (#30086), and auto-scroll breakage (#29992). Users on the bleeding edge are feeling the pain.

- **Nested Subagent UX** — Permission prompts and questions from nested subagents have been silently dropped for a long time (#30635, #13715, #7654). The fix PR (#30639) is a welcome relief.

- **Cross-Platform Clipboard** — macOS users are blocked by an `xclip`-only clipboard helper (#12800). This is a trivial fix that's been open for months.

- **Network Resilience** — Transient network errors kill sessions instead of retrying (#30611). The fix (#30638) is in progress but highlights a gap in error classification.

- **Startup Crashes on Linux** — WezTerm crashes (#28996) and inotify exhaustion hangs (#16610) are blocking Linux users from even launching the tool.

- **Plugin Permission Replies Silently Dropped** — Since v1.14.51, plugin permission replies via SDK client return `200 true` but are silently dropped due to a memoMap mismatch (#28037). This is a critical bug for plugin authors.

- **Ctrl+Z Suspends Instead of Undoing** — On Linux, `Ctrl+Z` sends SIGTSTP and suspends the process instead of performing undo in the text input (#24817). A long-standing terminal handling issue.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-06-04

---

## 1. Today's Highlights

No new releases in the past 24 hours, but the repository saw significant activity on both issues and PRs. The most-discussed issue is a **critical Anthropic/Opus 4.8 adaptive thinking bug** causing mid-session 400 errors, while the PR landscape is dominated by fixes for image-heavy session overflow, workspace approval systems, and several new provider additions (Anthropic Vertex, Amazon Bedrock Mantle, ZAI Coding China).

---

## 2. Releases

**None.** No new versions published in the last 24 hours.

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|---------------|-------------------|
| [#5223](https://github.com/earendil-works/pi/issues/5223) | **Anthropic provider corrupts thinking blocks in multi-turn conversations (Opus 4.8 adaptive thinking)** | This is the most active issue (14 comments, 👍5). Multi-turn sessions with Claude Opus 4.8 fail mid-conversation with a 400 error because the provider modifies thinking blocks in the latest assistant message, violating Anthropic's API contract. This directly breaks a flagship model for all Pi users on Anthropic. | High engagement; users are actively debugging the request payload. |
| [#5271](https://github.com/earendil-works/pi/issues/5271) | **MiniMax-M3 support requested** | MiniMax released M3 with 1M-context MSA and native multimodality. Users want it added to the built-in catalog. | Closed quickly — addressed by PRs/issues below. |
| [#5315](https://github.com/earendil-works/pi/issues/5315) | **Add MiniMax-M3 to built-in model catalog** | The `minimaxDirectSupportedIds` allow-list only includes M2.7 variants. M3 is a significant architecture upgrade. | Closed; implementation merged. |
| [#4666](https://github.com/earendil-works/pi/issues/4666) | **429 Retry-After waits ignore `maxRetryDelayMs`; Esc and `/new` don't recover cleanly** | Rate-limit handling is broken: Pi silently waits beyond the configured cap, and cancellation/recovery paths are buggy. Affects all providers under load. | 7 comments, 👍1 — long-standing reliability concern. |
| [#5103](https://github.com/earendil-works/pi/issues/5103) | **Windows bash detector fails when Git Bash is on PATH but not under `C:\Program Files`** | The bash tool hardcodes a path check instead of trusting PATH resolution. Breaks non-standard Git for Windows installations (e.g., on D: drive). | 5 comments; Windows users are directly impacted. |
| [#5323](https://github.com/earendil-works/pi/issues/5323) | **Improve Vertex + GCP metadata server support** | Pi's Vertex auth check uses synchronous `existsSync` on `GOOGLE_APPLICATION_CREDENTIALS`, ignoring GCP metadata server-based auth (e.g., on GCE, Cloud Run). Breaks cloud-native deployments. | 4 comments; important for GCP users. |
| [#5303](https://github.com/earendil-works/pi/issues/5303) | **Bash tool truncates output when child holds stdout past exit** | Commands like `git commit` with pre-commit hooks (lint-staged) lose output because the 100ms `destroy` timeout in `waitForChildProcess` kills the stream prematurely. | 2 comments; affects real-world workflows constantly. |
| [#5373](https://github.com/earendil-works/pi/issues/5373) | **High idle CPU and syscall rate on large sessions (150k+ tokens)** | Pi consumes ~24% CPU at idle with no UI activity, driven by excessive `epoll_pwait` syscalls. Scalability concern for long sessions. | 1 comment; newly filed, likely to gain traction. |
| [#5369](https://github.com/earendil-works/pi/issues/5369) | **Tool-result images bypass `resizeImage` and have no compaction budget** | Browser screenshots, OS screenshots, and generated images accumulate at full resolution, causing 413 / "prompt too long" loops that can't be compacted. | 1 comment; critical for image-heavy workflows. |
| [#5365](https://github.com/earendil-works/pi/issues/5365) | **Pi installed with Bun uses Node under the hood, crashes on Node 20 deprecation** | Bun-installed Pi still invokes Node internals, causing `TypeError` in `undici` cache storage. Users expect Bun-native execution. | 1 comment; installation/runtime confusion. |

---

## 4. Key PR Progress

| # | PR | Description | Status |
|---|----|-------------|--------|
| [#5376](https://github.com/earendil-works/pi/pull/5376) | **fix(interactive): reload `steeringMode` and `followUpMode` on `/reload`** | `/reload` now re-syncs queue mode settings from `settings.json` to the running `AgentSession`. Previously required a full restart. Related to [#2753](https://github.com/earendil-works/pi/issues/2753). | ✅ Merged |
| [#5370](https://github.com/earendil-works/pi/pull/5370) | **fix(coding-agent): recover from request-size overflow by dropping oldest images** | When image-heavy sessions exceed Anthropic's 32 MB limit (HTTP 413), overflow recovery now drops oldest images instead of failing. Fixes the compaction loop reported in [#5369](https://github.com/earendil-works/pi/issues/5369). | ✅ Merged |
| [#5332](https://github.com/earendil-works/pi/pull/5332) | **feat(config): Approval system for workspaces** | Introduces `.pi.user` as a second extension folder and requires interactive approval of `.pi` / `.pi.user` directories on first load (or `-f` flag). Prevents untrusted workspace extensions from auto-loading. | 🟡 Open |
| [#5262](https://github.com/earendil-works/pi/pull/5262) | **feat(ai): add Anthropic Vertex provider** | Built-in `anthropic-vertex` provider for Claude on Google Cloud Vertex AI. Thin adapter reusing the existing Anthropic Messages streaming path. | 🟡 Open |
| [#5348](https://github.com/earendil-works/pi/pull/5348) | **Add selective `pi-ai` base entrypoints** | Side-effect-free `@earendil-works/pi-ai/base` and `@earendil-works/pi-agent-core/base` entrypoints for selective transport bundling. Enables tree-shaking and custom provider imports without loading all built-ins. | 🟡 Open |
| [#5360](https://github.com/earendil-works/pi/pull/5360) | **fix(coding-agent): isolate tool result status background** | Tool call preview and final result/status are now rendered as separate visual regions, fixing background bleed in the TUI. | ✅ Merged |
| [#5356](https://github.com/earendil-works/pi/pull/5356) | **docs: add containerization guide and Gondolin example** | New documentation for running Pi in containers, with a Gondolin-based example. | ✅ Merged |
| [#5178](https://github.com/earendil-works/pi/pull/5178) | **ai: add custom-header support to Bedrock provider** | Honors `StreamOptions.headers` in the AWS Bedrock provider, closing the gap where Bedrock was the only provider not supporting custom headers. Useful for corporate/proxy gateways. | ✅ Merged |
| [#5345](https://github.com/earendil-works/pi/pull/5345) | **fix(coding-agent): move temporary extension cache** | Temp extensions moved to `~/.pi/agent` (per-user directory), cleaning up the previous platform-inconsistent cache location. | ✅ Merged |
| [#5333](https://github.com/earendil-works/pi/pull/5333) | **feat(ai): add ZAI Coding Plan China provider** | Built-in `zai-coding-cn` provider for `https://open.bigmodel.cn/api/coding/paas/v4`. Closes [#5275](https://github.com/earendil-works/pi/issues/5275). | ✅ Merged |

---

## 5. Feature Request Trends

1. **New provider integrations** — The community is actively requesting and contributing support for new model providers: MiniMax-M3 ([#5271](https://github.com/earendil-works/pi/issues/5271), [#5315](https://github.com/earendil-works/pi/issues/5315)), Anthropic Vertex ([#5300](https://github.com/earendil-works/pi/issues/5300)), Amazon Bedrock Mantle ([#5363](https://github.com/earendil-works/pi/issues/5363)), and ZAI Coding China ([#5333](https://github.com/earendil-works/pi/pull/5333)). The trend is toward covering regional and enterprise-specific endpoints.

2. **MCP structured content support** — [#5364](https://github.com/earendil-works/pi/issues/5364) requests native handling of the `structuredContent` field from MCP servers, which is currently silently discarded. As MCP adoption grows, this becomes more critical.

3. **Remote/SSH execution** — [#5341](https://github.com/earendil-works/pi/issues/5341) proposes running Pi sessions on remote hosts over SSH, routing all OS interactions remotely. This aligns with the containerization guide ([#5356](https://github.com/earendil-works/pi/pull/5356)) and reflects demand for cloud-native development workflows.

4. **Workspace trust and security** — The approval system PR ([#5332](https://github.com/earendil-works/pi/pull/5332)) and the `.pi.user` extension folder reflect a growing focus on workspace security, especially for teams and monorepos.

5. **Slash command extensibility** — [#5367](https://github.com/earendil-works/pi/issues/5367) requests a public API for extensions to execute slash commands programmatically, enabling richer extension ecosystems.

---

## 6. Developer Pain Points

- **Thinking block corruption with Anthropic** ([#5223](https://github.com/earendil-works/pi/issues/5223)) — The most urgent issue. Opus 4.8 adaptive thinking sessions break mid-conversation. This is a showstopper for users relying on Anthropic's latest models.

- **Image accumulation causing unrecoverable context overflow** ([#5369](https://github.com/earendil-works/pi/issues/5369), [#5303](https://github.com/earendil-works/pi/issues/5303)) — Tool-result images bypass resize/compaction, and bash output gets truncated by aggressive child process timeouts. Both issues silently degrade session quality.

- **Large session performance** ([#5373](https://github.com/earendil-works/pi/issues/5373)) — 24% idle CPU on 150k+ token sessions suggests a polling or reactivity loop that doesn't scale. This will compound as context windows grow.

- **Windows platform friction** ([#5103](https://github.com/earendil-works/pi/issues/5103), [#3406](https://github.com/earendil-works/pi/issues/3406)) — Bash detection and terminal resize scroll jumps continue to affect Windows users. The platform feels like a second-class citizen.

- **Bun runtime incompatibility** ([#5365](https://github.com/earendil-works/pi/issues/5365)) — Users installing via Bun expect Bun-native execution but get Node internals, causing crashes. The installation story needs clarification.

- **Rate-limit handling gaps** ([#4666](https://github.com/earendil-works/pi/issues/4666)) — `maxRetryDelayMs` is documented but not enforced, and recovery from rate limits via Esc or `/new` is unreliable. This affects all providers under production load.

---

*Digest generated by OWL for the Pi community. Data source: [github.com/badlogic/pi-mono](https://github.com/badlogic/pi-mono). Coverage: issues and PRs updated in the 24h preceding 2026-06-04.*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-06-04

---

## 1. Today's Highlights

The **v0.17.1** stable release shipped, finalizing the patch that fixes a false "compressed turn" error during mid-turn messages — a rewind reliability improvement contributed by @doudouOUC. The community is actively engaged around **daemon cold-start optimization** (PR #4751 targets a ~2.5s→~1.5s improvement), and a cluster of authentication/UX bugs around settings corruption, IME input, and runtime model-prefix leaking is attracting both issue reports and PRs in parallel. The `doudouOUC` contributor is exceptionally active today, touching daemon performance, telemetry, ACP lifecycle, and workspace refactoring.

---

## 2. Releases

| Version | Summary |
|---|---|
| **v0.17.1** | Stable patch. Fixes false "compressed turn" error when mid-turn messages exist (`fix(rewind)`). Finalizes changes from the 0.17.0 cycle. [PR #4626](https://github.com/QwenLM/qwen-code/pull/4626) |
| **v0.17.0-preview.0** | Preview release. Same rewind fix. [Release](https://github.com/QwenLM/qwen-code/releases/tag/v0.17.0-preview.0) |
| **v0.17.0-nightly.20260603.68408c30c** | Nightly snapshot. Same rewind fix. [Release](https://github.com/QwenLM/qwen-code/releases/tag/v0.17.0-nightly.20260603.68408c30c) |

The headline change across all three is the **rewind fix** — when a session has mid-turn messages (e.g., tool results), the system no longer incorrectly reports a "compressed turn" error during rewind operations.

---

## 3. Hot Issues

### Active / Highly Discussed

| # | Issue | Why It Matters |
|---|---|---|
| [#4493](https://github.com/QwenLM/qwen-code/issues/4493) | Rider IDE can't log in to Qwen Code (infinite redirect loop) | 10 comments. OAuth integration with JetBrains Rider breaks because the web-based auth flow loops indefinitely if the browser is already logged in. Blocks Rust developers from standard-plan Aliyun model access. |
| [#4722](https://github.com/QwenLM/qwen-code/issues/4722) | Statusline shows raw model ID instead of human-readable name | 5 comments. `qwen3-coder-plus` displays rather than "Qwen3 Coder Plus". Additionally, using model ID as a unique key blocks multi-key setups (multiple API keys for the same model). Broad UX concern. |
| [#4554](https://github.com/QwenLM/qwen-code/issues/4554) | Feature: OpenTelemetry coverage for `qwen serve` daemon | 4 comments. Telemetry is increasingly complete for the interactive CLI path but the serve daemon still has an observability gap across HTTP routing, session lifecycle, bridge queueing, and ACP child process management. |
| [#4729](https://github.com/QwenLM/qwen-code/issues/4729) | Runtime snapshot prefix leaks into `settings.model.name`, stacks on restarts | 3 comments. A serious config corruption bug: with OpenAI-compatible providers, `$runtime|openai|…` prefixes accumulate in settings.json on every restart, causing 404 "model does not exist" errors. Active PR #4734 addresses this. |
| [#4747](https://github.com/QwenLM/qwen-code/issues/4747) | Feature: global user-level auto-memory at `~/.qwen/memories/` | 3 comments. Currently auto-memory is per-project, so user preferences and working style must be re-learned for every new project. Cross-project memory (à la Claude's user memory) would significantly improve session continuity. |
| [#4711](https://github.com/QwenLM/qwen-code/issues/4711) | `Body Timeout Error` crashes at 85% for slow self-hosted models | 3 comments. Users with locally-hosted models that exceed the body timeout need a configurable timeout. Related to [#4604](https://github.com/QwenLM/qwen-code/issues/4604) (same root cause, now closed). |
| [#4210](https://github.com/QwenLM/qwen-code/issues/4210) | `/statusline` opens 'statusline-setup' agent instead of StatusLineDialog | 3 comments. Built-in slash command dispatches to the wrong handler in the TUI. Simple but blocking for users trying to configure their status line interactively. |
| [#4743](https://github.com/QwenLM/qwen-code/issues/4743) | Shell command hangs indefinitely (closed) | 4 comments. Shell commands returning `signal 1` then "no output" then hanging. Closed — likely duplicate of a known signal handling issue, but the comment volume signals widespread impact. |
| [#4218](https://github.com/QwenLM/qwen-code/issues/4218) | MCP filesystem server shows connected but tools unavailable | 4 comments. Qwen Studio on Windows reports the MCP server as connected, but the AI model never receives tool definitions. Affects MCP reliability perception across all server types. |

### Discussion / Questions

| # | Issue | Why It Matters |
|---|---|---|
| [#4723](https://github.com/QwenLM/qwen-code/issues/4723) | Does Qwen Code support Rules/Instructions (like Claude Code)? | 2 comments. The community is actively comparing Qwen Code's instructions system to Claude Code's rules and Copilot's instructions. Impacts user onboarding from competing tools. |

---

## 4. Key PR Progress

| # | PR | Status | Description |
|---|---|---|---|
| [#4741](https://github.com/QwenLM/qwen-code/pull/4741) | fix(ui): display model name instead of ID | Open | Adds `getModelDisplayName()` to resolve model IDs to human-readable names in the statusline and startup banner. Directly addresses [#4722](https://github.com/QwenLM/qwen-code/issues/4722). |
| [#4751](https://github.com/QwenLM/qwen-code/pull/4751) | feat(daemon): optimize ACP child lifecycle | Open | Skips unnecessary `relaunch` for ACP children, pre-spawns at boot, adds idle keep-alive. Targets daemon cold start reduction from ~2.5s to ~1.5s. From the daemon performance issue [#4748](https://github.com/QwenLM/qwen-code/issues/4748). |
| [#4563](https://github.com/QwenLM/qwen-code/pull/4563) | refactor(serve): extract DaemonWorkspaceService | Open | Honest session layer (`AcpSessionBridge`) + new `DaemonWorkspaceService` facade for workspace-level operations. Separates concerns in the daemon architecture. |
| [#4734](https://github.com/QwenLM/qwen-code/pull/4734) | fix: strip runtime snapshot prefix before persisting model.name | Open | Prevents `$runtime|openai|…` prefix from corrupting `settings.json` model names. Fixes the config accumulation bug in [#4729](https://github.com/QwenLM/qwen-code/issues/4729). |
| [#4704](https://github.com/QwenLM/qwen-code/pull/4704) | feat(core): honor skill `allowedTools` by auto-approving declared tools | Open | Skills' `allowedTools` frontmatter field was previously read and ignored. This PR makes it functional — declared tools auto-approve for the session, preventing tool permission friction inside skills. |
| [#4677](https://github.com/QwenLM/qwen-code/pull/4677) | fix(cli): vim mode Esc leak, Enter submit, render lag | Open | Fixes three vim mode issues: Esc in INSERT mode leaking to AppContainer, Enter not submitting, render lag. Also implements missing NORMAL mode commands. |
| [#4572](https://github.com/QwenLM/qwen-code/pull/4572) | Harden auto mode self-modification checks | Open | Prevents auto mode from bypassing classifier via workspace edit fast-paths when writing to config, instructions, hooks, skills, MCP config, etc. Security-focused. |
| [#4732](https://github.com/QwenLM/qwen-code/pull/4732) | feat(core): Workflow tool P1 — minimal node:vm sandbox | Open | First implementation tier of [Dynamic Workflows](https://github.com/QwenLM/qwen-code/issues/4721). Runs model-authored JS in a `node:vm` sandbox with sequential `agent()` global. Ports Claude Code's Dynamic Workflows concept. |
| [#4749](https://github.com/QwenLM/qwen-code/pull/4749) | feat(telemetry): daemon OTel metrics and structured logs | Open | Adds 11 OTel metric instruments for the daemon: HTTP rate/latency, session/channel lifecycle, prompt queue, bridge errors, cancellations, active SSE connections. Observability gap from [#4554](https://github.com/QwenLM/qwen-code/issues/4554). |
| [#4728](https://github.com/QwenLM/qwen-code/pull/4728) | feat(acp): support desktop Qwen integration | Open | Expands ACP to provide command, skill, session, and message metadata needed by a desktop client. Keeps desktop application code out of the core repo while enabling richer IDE integrations. |

---

## 5. Feature Request Trends

**Cross-project (global) memory.** [#4747](https://github.com/QwenLM/qwen-code/issues/4747) requests `~/.qwen/memories/` as a global user-level auto-memory store, mirroring Claude Code's user memory. Users want preferences and working style to persist across projects without re-learning.

**Dynamic Workflows / multi-agent orchestration.** [#4721](https://github.com/QwenLM/qwen-code/issues/4721) requests porting Claude Code 2.1.160's Dynamic Workflows as a third tier of multi-agent execution (alongside `/swarm` and sub-agents). PR #4732 is already implementing P1 (sandboxed sequential `agent()`).

**OpenTelemetry for the daemon.** [#4554](https://github.com/QwenLM/qwen-code/issues/4554) highlights that `qwen serve` lacks end-to-end observability. PR #4749 is adding metric instruments. This is becoming production-critical as daemon deployments grow.

**Desktop client / rich IDE integration.** PR #4728 explicitly expands ACP for a desktop client. Combined with Rider login issues [#4493](https://github.com/QwenLM/qwen-code/issues/4493), the community clearly wants Qwen Code to be embeddable beyond the TUI.

**Rule / instructions system.** [#4723](https://github.com/QwenLM/qwen-code/issues/4723) asks whether Qwen Code has a rule system comparable to Claude Code's rules or Copilot's instructions. Users migrating from competing tools expect persistent, session-spanning behavioral guidelines.

**Configurable timeouts.** [#4711](https://github.com/QwenLM/qwen-code/issues/4711) and (closed) [#4604](https://github.com/QwenLM/qwen-code/issues/4604) both hit body timeout limits with slow self-hosted models. A configurable timeout is the unfulfilled ask.

---

## 6. Developer Pain Points

**Settings config corruption.** The runtime snapshot prefix leaking into `model.name` ([#4729](https://github.com/QwenLM/qwen-code/issues/4729)) is a high-severity, hard-to-diagnose bug — it gets worse on every restart, producing opaque 404 errors. PR #4734 is the fix, but affected users may have stale `settings.json` files already. Consider auditing your config if you use OpenAI-compatible providers.

**Daemon cold start latency.** At ~2.5s for boot + first session versus CLI's ~0.7s, the daemon's cold start undermines its value proposition for quick tasks. PRs [#4751](https://github.com/QwenLM/qwen-code/pull/4751) (ACP lifecycle optimization) and the benchmark test in `qwen-daemon-vs-cli-benchmark.test.ts` show the team is treating this as a priority.

**Authentication friction across IDEs and OAuth flows.** Issue [#4493](https://github.com/QwenLM/qwen-code/issues/4493) (Rider), [#4493](https://github.com/QwenLM/qwen-code/issues/4493) (Aliyun token plan), and the broader pattern of users struggling with provider selection and OAuth redirect loops point to auth being a recurring onboarding blocker.

**MCP tool visibility and trust.** Issue [#4218](https://github.com/QwenLM/qwen-code/issues/4218) shows MCP servers reporting as connected while tools remain invisible to the model — a silent failure mode that erodes trust in the MCP ecosystem integration.

**VIM mode input reliability.** Esc key leaking, Enter failing to submit, and render lag ([#4677](https://github.com/QwenLM/qwen-code/pull/4677)) affect power users who rely on modal editing. PR #4677 is a comprehensive fix but is not yet merged.

---

*Digest generated by OWL — ZOO Company, based on data from [github.com/QwenLM/qwen-code](https://github.com/QwenLM/qwen-code). Data snapshot: 2026-06-04.*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/DenisZheng/agents-radar).*