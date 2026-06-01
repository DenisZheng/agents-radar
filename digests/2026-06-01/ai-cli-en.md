# AI CLI Tools Community Digest 2026-06-01

> Generated: 2026-06-01 02:21 UTC | Tools covered: 8

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

**Date:** 2026-06-01 | **Analyst:** OWL

---

## 1. Ecosystem Overview

The AI CLI tooling landscape in mid-2026 is characterized by intense competition across seven major players, all converging on similar core capabilities—agentic execution, subagent orchestration, MCP integration, and multi-model support—while diverging in platform maturity, target audience, and technical architecture. The ecosystem is in a **hardening phase**: the predominant theme across all tools is not feature novelty but **reliability engineering**—fixing corrupted sessions, runaway token consumption, provider-compatibility bugs, and silent data-loss paths. Claude Code and OpenAI Codex lead in commercial polish and enterprise-readiness investments (cloud-managed config, multi-account profiles), while Pi and OpenCode offer broader provider flexibility at the cost of rougher edges. Qwen Code and Kimi Code are racing to close ecosystem gaps (IDE integrations, observability), and Gemini CLI faces a concentration of agent-execution reliability bugs that undermine trust in its core value proposition. GitHub Copilot CLI occupies a unique niche as the only tool deeply integrated into the GitHub/GitLab DevOps lifecycle, but it is the smallest in scope and community volume.

---

## 2. Activity Comparison

| Metric | Claude Code | OpenAI Codex | Gemini CLI | GitHub Copilot CLI | Kimi Code | OpenCode | Pi |
|---|---|---|---|---|---|---|---|
| **Release Today** | ✅ v2.1.159 (internal only) | ✅ `rust-v0.136.0-alpha.2` | ❌ None | ✅ v1.0.57-4 | ❌ None | ❌ None | ❌ None |
| **Open Hot Issues (top‑10 listed)** | 10 | 10 | 10 | 10 | 10 | 10 | 10 |
| **PRs Active Today** | 0 (several docs closed unmerged) | 10 (multi‑PR stacks in progress) | 7 merged, 3 open | 0 | 2 open | 9 open, 1 merged | 5 open, 15 closed/merged |
| **Top Issue Engagement** | #34229 — 818 👍 / 739 comments | #14593 — 293 👍 / 593 comments | #21409 — 8 👍 / 7 comments | #3529 — 14 👍 (long‑running) | #2208 — 4 comments | #29079 — 48 👍 / 114 comments | #4945 — 24 👍 / 50 comments |
| **Overall Signal** | Moderate volume, high‑impact bugs | Very high volume, megathread‑driven | Moderate volume, reliability‑focused | Low volume, auth‑regression spike | Low‑medium volume, upgrade regressions | High volume, provider diversity pain | Medium volume, provider‑compat focused |

> **Note on methodology:** Each digest reports its top 10 issues. Community engagement is best measured by the disparity between 👍/comment counts and time-open. Codex's #14593 (593 comments on token burn) and Claude Code's #34229 (818 👍 on broken phone verification for 3+ months) represent the highest-engagement pain points across the entire ecosystem.

---

## 3. Shared Feature Directions

The following requirements appear across **three or more** tool communities, indicating convergent ecosystem demand:

| Direction | Tools Exemplifying This Need | Specific Evidence |
|---|---|---|
| **Thinking / reasoning block integrity** | Claude Code 🔴, OpenCode 🔴, Pi 🔴 | Claude Code #63147/#63335: "thinking blocks cannot be modified" permanently wedges sessions. OpenCode merged PR #30046 fixing Anthropic thinking-signature loss. Pi #5223: Anthropic provider munges thinking blocks causing 400 on Opus 4.8. **This is the single most dangerous cross-cutting bug class in the ecosystem.** |
| **Subagent reliability & lifecycle management** | Claude Code 🔴, Codex, Gemini CLI, Kimi Code | Claude Code #64080: subagent fan-out multiplies N×. Codex #25472: rogue subagents with Goal Mode. Gemini #22323: subagents falsely report success after MAX_TURNS. Kimi #2408: subagent timeout silently defaults to 120s despite docs claiming no default. **No tool has fully solved subagent orchestration correctness.** |
| **Token / cost transparency and control** | Codex 🔴, Claude Code 🔴, OpenCode, Qwen Code | Codex #14593: 593 comments on runaway token consumption. Codex #23794: Desktop removed token/context UI. Claude Code #62199 + #64153: silent model switch to 1M context + 46k hidden thinking tokens on simple tasks. **Users universally lack budget predictability.** |
| **Context compaction / session persistence** | Claude Code, Gemini CLI, OpenCode, Qwen Code, Pi | Claude Code #63015: auto-compact never triggers at 100% context. Gemini #27151: `/compress` ACP slash command just shipped. OpenCode #29079: GPT models take too long to respond (latency inflates context). Pi #5044: OOM on resume with large sessions. |
| **MCP governance & safety** | Codex, OpenCode, Qwen Code, GitHub Copilot CLI, Pi | Codex #6465: MCP servers not detected in VS Code extension. Qwen Code #4656: project-scoped MCP with pending-approval state. GitHub Copilot CLI #3602: SDK mutates host `process.env`. **MCP is the fastest-evolving trust frontier.** |
| **Multi-platform parity (Linux, Windows, mobile)** | Codex, OpenCode, GitHub Copilot CLI, Kimi Code | Codex #11023: 367 👍 for Linux desktop. OpenCode #26038: `/exit` in PowerShell exits PowerShell itself. GitHub Copilot CLI #3594: iOS streaming broken. Kimi #2410: Linux CLI input exception. **Cross-platform is consistently under-invested.** |
| **Authentication & session resume robustness** | Claude Code 🔴, Codex 🔴, GitHub Copilot CLI 🔴, Qwen Code 🔴 | Claude Code #34229: phone verification broken for 3+ months (818 👍). Codex #20161: phone-verification gate blocked SSO users. GitHub Copilot CLI #3597: > 8 forced re-logins in 24 hours since v1.0.56. Qwen Code #4493: JetBrains Rider infinite redirect loop. **Auth is the #1 onboarding blocker across the ecosystem.** |
| **Provider role / schema compatibility** | Pi, OpenAI Codex, OpenCode | Pi #5117 + #5229: `developer` role rejected by Qwen and MiniMax on OpenRouter. Codex: multi-agent runtime version drift between parent/child threads. OpenCode #20995 + #21034: Gemma 4 tool-calling failures via Ollama. |

---

## 4. Differentiation Analysis

### By Feature Focus

| Tool | Primary Differentiator | Target User Segment | Technical Architecture |
|---|---|---|---|
| **Claude Code** | Deepest Anthropic model integration; enterprise permissions workflows (dangerously-skip-permissions, hooks as policy gates) | Individual developers + enterprise teams on Anthropic ecosystem | Tightly coupled to Anthropic API; Rust/Node.js harness; 200K–1M context windows |
| **OpenAI Codex** | Desktop app with multi-account profile switcher; cloud-managed config for IT admins; strongest enterprise-readiness pipeline | Enterprise teams, multi-account users, Windows desktop-first developers | Rust core + Electron Desktop; 5-PR cloud-config stack in progress; tight OpenAI model coupling |
| **Gemini CLI** | Google ecosystem integration (Vertex, GCP auth); concurrent file-edit safety; PTY hardening for shell execution | Developers in Google Cloud ecosystem, users prioritizing shell-agent workflows | TypeScript/Node.js; tight Gemini API integration; ACP-native design |
| **GitHub Copilot CLI** | Deep GitHub Actions / PR review integration; hooks-as-policy security model; preToolUse deny semantics (new in v1.0.57-4) | GitHub-native development teams, CI/CD pipeline authors | TypeScript/Node.js; GitHub authentication backbone; smallest surface area |
| **Kimi Code CLI** | Moonshot API / Kimi K2.6 model focus; Chinese market optimization; bilingual community | Chinese-speaking developers, users prioritizing Kimi models | Python (httpx-async); Moonshot provider path; v1.46.0 hardening phase |
| **OpenCode** | Widest provider support (Anthropic, OpenAI, Google, Snowflake Cortex, Ollama, OpenRouter); multi-model flexibility | Provider-agnostic power users, local-model experimentation | Go + TypeScript hybrid; Bubbletea TUI; most provider adapters in ecosystem |
| **Pi** | Most multi-model/provider flexible (9+ providers); strongest hooks/extensions system; hardware-cursor TUI; developer-tooling community (anomalyco) | Advanced developers who switch models frequently; extension authors | TypeScript/Node.js monorepo; provider-agnostic core with per-provider adapters; most active extension ecosystem |

### By Strategic Positioning

- **Vertical integrators** (Claude Code, Codex, Gemini CLI, Copilot CLI): Tightly bound to their model provider's API. Best experience when using the native model, weakest when bridging to others. Competing on reliability, enterprise features, and developer experience polish.
- **Horizontal aggregators** (OpenCode, Pi, Kimi to a degree): Model-agnostic. Competing on provider breadth, customization, and flexibility. Pain concentrates at provider-compatibility edges (role mapping, thinking-block handling, tool-call schemas).

---

## 5. Community Momentum & Maturity

### Activity Tier Classification

**Tier 1 — High Volume, Rapid Iteration:**
- **OpenAI Codex**: 593-comment megathreads, 3-PR profile-switcher stack, 5-PR enterprise cloud-config stack, 10 active PRs. The fastest-moving codebase with the most ambitious architectural changes in flight.
- **OpenCode**: 114 comments on GPT latency alone, 9 active PRs across session management, provider fixes, and TUI improvements. Largest number of concurrent open PRs.

**Tier 2 — Medium Volume, Stability-Focused:**
- **Pi**: 15 closed/merged PRs in the window, aggressive provider-compatibility hardening (role mapping, infinite loop protection, OOM fixes). High iteration velocity with a small but dedicated contributor base.
- **Gemini CLI**: 4 PRs merged today (PTY fixes, concurrent-edit race, `/compress` command), but cluster of serious agent-reliability bugs suggests the codebase may be shipping faster than it can stabilize.
- **Qwen Code**: Nightly release cadence, strong OTel/observability PR contributions from `doudouOUC` (5 PRs). Concentrated in a single feature area (`qwen serve` daemon parity).

**Tier 3 — Lower Volume, Consolidation Phase:**
- **Claude Code**: Zero open PRs today; several documentation PRs closed unmerged. The team appears to be heads-down on internal fixes for the extended-thinking and parallel-tool-harness defects. Community frustration building around long-unresolved issues (#34229 phone verification at 3+ months).
- **Kimi Code**: Only 2 open PRs, both from the same external contributor (`wintrover`). Indicates thin maintainer bandwidth relative to issue volume. Community engaged but reliant on volunteer contributions for core fixes.
- **GitHub Copilot CLI**: Active issues but zero PRs updated. Its focus on hooks security tightening (v1.0.57-4 preToolUse deny) suggests deliberate, conservative iteration.

### Maturity Signals

| Tool | Maturity Signal |
|---|---|
| **Codex** | Most enterprise-ready trajectory: multi-account, cloud-config, spend controls, OTel observability — all in active PR |
| **Pi** | Most technically sophisticated extension/loop-protection architecture; merged `AgentHarness` infinite-loop protection, ephemeral model selection, worktree agent extension |
| **Claude Code** | Largest absolute userbase (inferred from issue engagement), but most concerning unreliability signals: parallel tool harness bugs, thinking corruption, auto-compaction regression all unaddressed |
| **OpenCode** | Widest provider matrix but also the most provider-integration bugs (Gemma 4, Anthropic thinking, GPT latency) — breadth creates surface area |

---

## 6. Trend Signals

### Signal 1: "Thinking blocks are the new null pointer"
**Category:** Model-integration correctness | **Confidence:** High

The single most dangerous emergent bug class across the ecosystem. Claude Code (#63147, #63335), OpenCode (merged #30046), and Pi (#5223) all report that multi-turn conversations with reasoning/thinking models enter irreversibly corrupted states when the intermediate thinking blocks are mis-normalized between turns. As the industry shifts toward reasoning-first models, every tool's transcript-handling correctness becomes a critical-path reliability concern. **Recommendation:** Any team building on Anthropic extended-thinking, Gemini thinking, or OpenAI o-series models should implement transcript-validation middleware and session-checkpoint strategies before relying on long-running agent sessions.

### Signal 2: "Subagents are the new microservices"
**Category:** Agent orchestration | **Confidence:** High

Every tool is racing to support subagent fan-out (task decomposition, parallel execution), and every tool has critical bugs in this surface. The failure modes are non-obvious: silent duplication (Claude Code #64080), false success reporting (Gemini #22323), vanishing act/lifecycle opacity (Codex #23700, #25472), phantom timeouts (Kimi #2408). **Subagent orchestration is arguably the least-solved problem in the AI CLI ecosystem.** Teams building production multi-agent pipelines should implement external orchestration verification layers rather than relying on tool-native subagent correctness.

### Signal 3: "Token economics are broken"
**Category:** Cost predictability | **Confidence:** High

Token consumption opacity is the most-engaged complaint across Codex (593 comments, #14593), Claude Code (hidden thinking tokens, silent model upgrades), and OpenCode (provider-specific latency inflating context). The tools are converging on a pattern of hidden cost drivers: silent auto-compaction failures, unannounced context-window upgrades, and chain-of-thought tokens that consume 46k+ on simple tasks (Claude Code #64153). **Recommendation:** Budget-conscious teams should implement external token-tracking/aggregation layers (the OTel/qwen-serve approach from Qwen Code is a step in the right direction) and set hard per-session token budget caps where the tool supports it.

### Signal 4: "Enterprise readiness is the new moat"
**Category:** Platform strategy | **Confidence:** Medium-High

Codex's simultaneous push on multi-account profiles (3-PR stack), cloud-managed config (5-PR stack, enterprise spend controls (#24812)), and Desktop-first UX signals a deliberate enterprise land-grab. Claude Code's hooks-as-policy model (tightened further by Copilot CLI in v1.0.57-4) targets the same regulated-industry buyer. Qwen Code's project-scoped MCP approval gates (#4656) and auto-mode write-surface hardening (#4572) follow the same pattern. **The competition is shifting from "which tool has the best agent" to "which tool can an IT admin deploy to 500 engineers with centralized config and spend controls."**

### Signal 5: "Linux is the new Windows"
**Category:** Platform investment | **Confidence:** Medium

Codex's Linux desktop request (#11023, 367 👍) is the single most-upvoted feature ask on its repo. OpenCode has PowerShell bugs (#26038). Kimi has Linux input exceptions (#2410). Pi has WSL filesystem event gaps (#5044, #5239). Claude Code has a Termux/arm64 regression (#64202). The developer community is increasingly Linux-first (WSL, native Linux, ARM), and **every tool's Linux/mobile experience is under-invested relative to macOS.** 

### Signal 6: "Authentication is the silent killer of adoption"
**Category:** Onboarding | **Confidence:** High

Claude Code's phone verification has been broken for 3+ months (818 👍). Phone verification gates block Codex SSO users. GitHub Copilot CLI's forced re-login regression appeared in v1.0.56. Qwen Code's JetBrains auth dead-end was P1-severity. **Auth is consistently the highest-friction, lowest-iteration-speed surface across all tools.** With OAuth flows proliferating across tools, providers, and platforms, every team should plan for auth regression testing as a first-class CI concern.

---

### Summary Recommendation Matrix

| If You Prioritize... | Consider... | Because... |
|---|---|---|
| Enterprise deployment & centralized management | **OpenAI Codex** (trajectory) or **Claude Code** (currently broadest) | Codex has the most ambitious enterprise feature pipeline; Claude Code has the largest user base |
| Model/provider flexibility | **Pi** or **OpenCode** | Broadest provider adapters; most mature non-lock-in architecture |
| Google Cloud / Vertex ecosystem | **GitHub Copilot CLI** or **Gemini CLI** | Best integration with their respective platform ecosystems |
| Local / open-model experimentation | **OpenCode** (Ollama) or **Pi** (provider-agnostic) | OpenCode has native Ollama support; Pi has the most provider shim coverage |
| Chinese-market model access | **Kimi Code** | Native Moonshot API integration, but expect thinner maintainer bandwidth |
| Hooks / security policy enforcement | **Claude Code** or **GitHub Copilot CLI** | Most mature hooks-as-policy models (Copilot CLI just tightened preToolUse to deny-by-default) |

---

*Report synthesized from community digests for all seven tools as of 2026-06-01. All data sourced from public GitHub repositories. Analysis by OWL.*

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
**Data as of 2026-06-01 | Source: anthropics/skills**

---

## 1. Top Skills Ranking

Ranked by community engagement (comments, reactions, and update activity):

| Rank | Skill | PR | Status | Focus |
|------|-------|--------|--------|-------|
| 1 | **skill-quality-analyzer** & **skill-security-analyzer** | [#83](https://github.com/anthropics/skills/pull/83) | 🟡 OPEN (stalled since Jan) | Meta-skills for evaluating quality & security of other skills |
| 2 | **AURELION suite** (kernel, advisor, agent, memory) | [#444](https://github.com/anthropics/skills/pull/444) | 🟡 OPEN | Cognitive framework for professional knowledge management |
| 3 | **SAP-RPT-1-OSS Predictor** | [#181](https://github.com/anthropics/skills/pull/181) | 🟡 OPEN | SAP tabular foundation model for predictive analytics |
| 4 | **Testing Patterns** | [#723](https://github.com/anthropics/skills/pull/723) | 🟡 OPEN | Comprehensive testing stack: unit, component, philosophy |
| 5 | **ServiceNow Platform** | [#568](https://github.com/anthropics/skills/pull/568) | 🟡 OPEN | Broad ServiceNow platform assistant (ITSM, SecOps, etc.) |
| 6 | **n8n-builder / n8n-debugger** | [#190](https://github.com/anthropics/skills/pull/190) | 🟡 OPEN | n8n workflow building and debugging |
| 7 | **Document Typography** | [#514](https://github.com/anthropics/skills/pull/514) | 🟡 OPEN | Typographic quality control for AI-generated documents |
| 8 | **Codebase Inventory Audit** | [#147](https://github.com/anthropics/skills/pull/147) | 🟡 OPEN | Systematic 10-step cleanup & documentation audit |

**Key observation**: Every single top-ranked PR remains **OPEN**. None have been merged despite months of dormancy, particularly #83 which has been inactive since January despite addressing a critical meta-quality need.

---

## 2. Community Demand Trends

From the Issues data, the most-anticipated directions:

- **Enterprise Integration**: High demand for org-wide skill sharing in Claude.ai ([#228](https://github.com/anthropics/skills/issues/228), 7 reactions) and platform skills (ServiceNow, SAP, SharePoint) — enterprises want out-of-box integrations.
- **Skill Lifecycle Tooling**: Strong interest in gifting skills the same infrastructure as other code: testing (`testing-patterns`), security analysis (`skill-security-analyzer`), quality gates, and optimization loops.
- **Multi-Agent & Memory**: AURELION-like cognitive frameworks ([#444](https://github.com/anthropics/skills/pull/444)) and persistent memory skills ([#154](https://github.com/anthropics/skills/pull/154)) show demand for stateful, cross-session intelligence.
- **Workflow Automation**: n8n-builder/debugger PRs and requests like "Expose Skills as MCPs" ([#16](https://github.com/anthropics/skills/issues/16)) indicate the community views Skills as workflow lego blocks, not just response templates.
- **Security Governance**: Alarm bells on trust boundary abuse — community skills impersonating the `anthropic/` namespace ([#492](https://github.com/anthropics/skills/issues/492)) — pushes toward verification and signing mechanisms.

---

## 3. High-Potential Pending Skills

PRs with active maintenance history and meaningful scope most likely to land next:

| PR | Skill | Why it matters |
|----|-------|----------------|
| [#1140](https://github.com/anthropics/skills/pull/1140) | **agent-creator** | Multi-tool evaluation fixes and new creation meta-skill |
| [#723](https://github.com/anthropics/skills/pull/723) | **testing-patterns** | Full-stack testing guidance with React component coverage |
| [#444](https://github.com/anthropics/skills/pull/444) | **AURELION suite** | 4-skill cognitive framework; updated as recently as May |
| [#1050](https://github.com/anthropics/skills/pull/1050) | **skill-creator Windows fix** | Active since late April; removes platform friction for a core tool |
| [#190](https://github.com/anthropics/skills/pull/190) | **n8n skills + faf-expert** | Workflow automation with production-tested skills |

---

## 4. Skills Ecosystem Insight

> **The community's most concentrated demand is for "Skills about Skills" — meta-tooling for quality assurance, security auditing, lifecycle management, and cross-platform portability — signaling the ecosystem has matured past the "collect new Skills" phase and into the "govern, test, and trust Skills" phase.**

---

### Notable Community Health Signals
- **Stall rate is high**: Top PRs are open since Nov–Mar with little maintainer signal, while critical bugs ([#189](https://github.com/anthropics/skills/issues/189): duplicate skill loading, [#1087](https://github.com/anthropics/skills/issues/1087): plugin vs marketplace mismatch) persist.
- **Windows compatibility** is a clear pain point with multiple parallel PRs ([#1050](https://github.com/anthropics/skills/pull/1050), [#1099](https://github.com/anthropics/skills/pull/1099)) addressing subprocess and encoding bugs.
- **CONTRIBUTING.md** was added ([#509](https://github.com/anthropics/skills/pull/509)) to address a repo community health score of only 25% — a candid signal that community processes need scaffolding.

---

*Analysis generated by OWL. Data sourced from anthropics/skills via GitHub API. All PR/Issue links current as of 2026-06-01.*

---

# Claude Code Community Digest — 2026-06-01

---

## 1. Today's Highlights

Claude Code shipped **v2.1.159** with only internal infrastructure improvements and no user-facing changes. The issue tracker was dominated by expanded thinking session corruption bugs and parallel tool-call harness defects that can permanently wedge or multiply subagent fan-out. A wave of documentation cleanup PRs also closed, addressing long-standing gaps in the Agent View docs.

---

## 2. Releases

| Version | Date | Summary |
|---|---|---|
| **v2.1.159** | 2026-06-01 | Internal infrastructure improvements. No user-facing changes. |

> No feature changes in this release. Users on the cutting edge should regress-test against the known extended-thinking and parallel-tool bugs below, as none were explicitly called out as fixed.

---

## 3. Hot Issues

### 🔴 #34229 — Phone verification broken (👍 818 · 💬 739)
The longest-running and most-engaged bug in the repo. Phone verification for account creation/registration has been broken since mid-March. The extremely high reaction count signals this is a hard blocker for a large number of new users trying to adopt Claude Code.
🔗 <https://github.com/anthropics/claude-code/issues/34229>

### 🔴 #63147 — Resuming extended-thinking session fails with 400 "thinking blocks cannot be modified" (👍 46 · 💬 56)
Sessions that used extended thinking + tool calls can enter a permanently broken state. Every subsequent turn returns a 400 because the API rejects replay of a signed-but-modified thinking block. **This is arguably the highest-impact technical bug** actively affecting users on macOS with subscriptions.
🔗 <https://github.com/anthropics/claude-code/issues/63147>

### 🟠 #63335 — Extended thinking signed block "cannot be modified" permanently wedges session (👍 14 · 💬 14)
Strongly related to #63147; duplicates and corroborates the same failure mode. Multiple reporters independently hitting the same 400 corruption suggests this is a systemic prompt-transcript handling bug, not an edge case.
🔗 <https://github.com/anthropics/claude-code/issues/63335>

### 🟠 #63538 — Model fabricates tool output when parallel batch is partially cancelled (👍 13 · 💬 12)
Distinct from the harness cascade-cancel bug (#22264): the *model itself* hallucinated tool output and even fabricated a user instruction when a parallel tool-call batch returned empty/cancelled results. This is a serious model-integrity issue for Opus 4.8 users.
🔗 <https://github.com/anthropics/claude-code/issues/63538>

### 🟠 #64080 — Harness silently executes duplicated parallel `tool_use` blocks; subagent fan-out multiplies N× (💬 11)
The same batch of parallel subagent `Task` calls is re-emitted and executed multiple times (observed: 6 → 24). This can blow through API quotas and produce non-deterministic behavior in agent pipelines. A critical bug for users building subagent orchestration.
🔗 <https://github.com/anthropics/claude-code/issues/64080>

### 🟠 #14131 — German umlauts (ä, ö, ü) randomly replaced with ASCII substitutes (ae, oe, ue) (👍 21 · 💬 33)
A model-side tokenization/rendering bug that's been open since December 2025. German-speaking users consistently see garbled output, reducing trust in the tool for non-English workflows.
🔗 <https://github.com/anthropics/claude-code/issues/14131>

### 🟡 #63015 — Auto-compact never triggers despite statusline showing "100% context used" (👍 6 · 💬 10)
Regression on v2.1.153 Max subscription in 200K mode. The status bar correctly reports full context, but no compaction fires. Sessions silently grow until they crash with context limit errors.
🔗 <https://github.com/anthropics/claude-code/issues/63015>

### 🟡 #64202 — Regression in v2.1.158: `claude -p` hangs waiting for stdin EOF on Termux/arm64 (💬 2)
Non-interactive mode broke for Android/Termux users in v2.1.158 (last known good: v2.1.157). Important for developers using Claude Code on ARM mobile or headless Android environments.
🔗 <https://github.com/anthropics/claude-code/issues/64202>

### 🟡 #62199 — Default model silently changed to 1M context without notifying Pro users (👍 4 · 💬 14)
Concerns about cost: the switch to a 1M-context model as default may increase token consumption for users on fixed plans. Duplicate-tagged but still generating community discussion around billing transparency.
🔗 <https://github.com/anthropics/claude-code/issues/62199>

### 🟡 #64153 — Opus 4.8 spends 46k hidden tokens on thinking for simple coding turns (💬 5)
"Medium effort" thinking mode consuming disproportionate output tokens for elementary tasks. Directly impacts cost-conscious users and suggests the effort-level calibration needs tuning.
🔗 <https://github.com/anthropics/claude-code/issues/64153>

---

## 4. Key PR Progress

**No pull requests were updated in the last 24 hours.**

Several documentation PRs were closed (not merged) over this window:

- **#59261, #59256, #59593** — All closed (likely resolved separately or abandoned). These had addressed gaps in Agent View docs around background session paths, `dangerously-skip-permissions` dispatch, and MCP/settings persistence across respawn.

The absence of active PRs suggests the team is focused on internal fixes for the extended-thinking and parallel-tool-harness defects surfacing in issues.

---

## 5. Feature Request Trends

| Direction | Evidence |
|---|---|
| **Better JetBrains support** | #61762 — JetBrains plugin lacks ability to set a parent folder as the working directory, limiting multi-module monorepo workflows. |
| **Agent View documentation completeness** | Multiple docs issues (#60411, #63298, #59582, #59261, #59256, #59593) reflect a strong community desire for accurate, complete Agent View docs covering background sessions, effort-level persistence, MCP/settings propagation, and gateway-specific guidance. |
| **Transparency around model/context default changes** | #62199 signals demand for explicit notification when default model or context-window settings change, especially for users on fixed billing plans. |
| **Cost & token efficiency controls** | #64153 and #62199 together show users want finer control over thinking token budgets and more predictable spend. |

---

## 6. Developer Pain Points

1. **Extended thinking session corruption** — The most urgent cluster. Issues #63147 and #63335 report permanent session breakage after using extended thinking with tool calls. Until fixed, affected users' only option is to start a new session, losing all context.

2. **Parallel tool-call harness defects** — #63538 (model fabricates tool output) and #64080 (silently executes duplicated subagent batches) undermine the reliability of autonomous agent workflows. Users building multi-subagent pipelines are particularly exposed.

3. **Auto-compaction regression** — #63015 and #64277 show the auto-compact feature is unreliable on v2.1.153+ (macOS) and v2.1.158 (Linux), removing a critical safety net for long-running sessions.

4. **Onboarding blocked by phone verification** — #34229 (818 👍) has persisted for 3+ months and remains the single largest signal of a broken new-user experience.

5. **Non-English output quality** — #14131 (German umlauts) and #61142 (Korean token corruption "영역") indicate systematic non-English rendering bugs that degrade Claude Code's utility for international developer communities.

6. **Billing/cost surprise anxiety** — Multiple threads (#62199, #64153, #60411 gateway docs) reflect anxiety around opaque cost-driving behaviors, especially hidden thinking tokens and silent model upgrades.

---

*Data source: github.com/anthropics/claude-code · Snapshot: 2026-06-01*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-06-01

---

## 1. Today's Highlights

Codex shipped a new alpha (`rust-v0.136.0-alpha.2`) and the community is intensely focused on a few megathreads: token consumption burn rates ([#14593](https://github.com/openai/codex/issues/14593), 593 comments), the missing context/token usage indicator in Desktop ([#23794](https://github.com/openai/codex/issues/23794)), and auth/login-flow regressions across multiple regions and platforms ([#20161](https://github.com/openai/codex/issues/20161), [#24990](https://github.com/openai/codex/issues/24990)). On the PR side, the internal team is pushing through a multi-account profile-switcher (three PRs in a stack) and a five-PR cloud-managed config rollout, both of which signal significant near-term changes to Codex's architecture.

---

## 2. Releases

**rust-v0.136.0-alpha.2** — [Release notes](https://github.com/openai/codex/releases)
Latest alpha cut. No user-facing changelog was surfaced in the 24-hour window, but the accompanying PRs suggest changes to subagent parent-thread modeling, multi-agent runtime selection, and OTEL observability for the exec-server. Watch the alpha channel for these to stabilize toward a stable release.

---

## 3. Hot Issues

### 🔥 #14593 — Burning tokens very fast
**Status:** OPEN · **Comments:** 593 · **👍:** 261
Business-plan VS Code extension users report runaway token consumption. With the most comments of any open issue in the repo, this is the community's single biggest pain point right now. Expects changes to how context is batched or how extension retry loops are capped.
→ [#14593](https://github.com/openai/codex/issues/14593)

### 🔐 #20161 — Phone number verification doesn't work
**Status:** CLOSED · **Comments:** 177 · **👍:** 110
SSO logins on a second device triggered a phone-verification gate that blocked users who never attached a phone number. Closed after 24 hours of activity — likely a hotfix pushed to auth.
→ [#20161](https://github.com/openai/codex/issues/20161)

### 📊 #23794 — Codex Desktop no longer shows visible context/token usage indicator
**Status:** CLOSED · **Comments:** 160 · **👍:** 156
A recent Desktop update removed the UI element showing remaining context/token budget, leaving power users blind. High engagement suggests this regressions hits enterprise and Pro users hard.
→ [#23794](https://github.com/openai/codex/issues/23794)

### 🧹 #14860 — Error running remote compact task
**Status:** OPEN · **Comments:** 90 · **👍:** 68
Compact (context-summarization) runs fail under certain remote Linux setups on gpt-5.4. Indicates fragility in the remote sandbox when Codex tries to shrink large sessions.
→ [#14860](https://github.com/openai/codex/issues/14860)

### 🚫 #2847 — A way to exclude sensitive files
**Status:** OPEN · **Comments:** 75 · **👍:** 396
Long-standing request (since Aug 2025) for a `.codexignore` mechanism — repo-local and global. Highest like-to-comment ratio in this set; security-conscious teams and regulated-industry users are driving this.
→ [#2847](https://github.com/openai/codex/issues/2847)

### 🐧 #11023 — Codex desktop app for Linux
**Status:** OPEN · **Comments:** 68 · **👍:** 367
The single most-upvoted feature ask on the repo. Linux desktop users cite the macOS app's superiority over CLI-only workflows and want parity.
→ [#11023](https://github.com/openai/codex/issues/11023)

### 🪟 #13993 — Support standalone Windows installer (codex-setup.exe)
**Status:** OPEN · **Comments:** 58 · **👍:** 125
Enterprises, air-gapped environments, and users without Microsoft Store access need a classic `.exe` installer. Another top-voted platform-access request.
→ [#13993](https://github.com/openai/codex/issues/13993)

### 🌐 #6465 — MCP servers not detected in Codex VS Code extension
**Status:** OPEN · **Comments:** 55 · **👍:** 28
MCP servers that work in CLI fail in the VS Code extension. This fractures the MCP ecosystem experience and motivates users to stay on CLI.
→ [#6465](https://github.com/openai/codex/issues/6465)

### 🔧 #8745 — LSP integration (auto-detect + auto-install) for Codex CLI
**Status:** OPEN · **Comments:** 52 · **👍:** 360
Users want Codex CLI to automatically detect the project's language and install/use the right LSP — bringing IDE-level diagnostics and symbol intelligence to terminal workflows. Ties into the broader "CLI should be smarter about the code it edits" trend.
→ [#8745](https://github.com/openai/codex/issues/8745)

### ↩️ #9203 — Please make "/undo" back
**Status:** OPEN · **Comments:** 46 · **👍:** 261
The `/undo` command was removed and users with uncommitted changes are losing work. Strong signal that any destructive operation in Codex needs a reversible escape hatch.
→ [#9203](https://github.com/openai/codex/issues/9203)

---

## 4. Key PR Progress

### 🔀 Profile Switcher Stack (3-PR series)
Three sequential PRs from `dhruvgupta-oai` implement multi-account profile switching in the Desktop app:

- **[#25469](https://github.com/openai/codex/pull/25469)** — `[1/3]` Adds the `accountSession/*` app-server protocol for the Desktop profile switcher and backend account metadata client.
- **[#25470](https://github.com/openai/codex/pull/25470)** — `[2/3]` Adds per-session credential storage slots so saved Desktop sessions keep OAuth creds separate from the active session.
- **[#25383](https://github.com/openai/codex/pull/25383)** — `[3/3]` Wires the shipped Rust app-server lifecycle: `accountSession/add`, `list`, `switch`, `logout`.

**Why it matters:** Multi-account (e.g., personal + work) is a prerequisite for broader enterprise adoption.

### ☁️ Cloud-Managed Config Client (5-PR series)
A stack from `joeflorencio-openai` (PRs [#24619](https://github.com/openai/codex/pull/24619) → [#24622](https://github.com/openai/codex/pull/24622)) that migrates Codex runtime config to a cloud-managed bundle:

- **[#24619](https://github.com/openai/codex/pull/24619) (CLOSED)** — Requirements layer composer.
- **[#24620](https://github.com/openai/codex/pull/24620) (CLOSED)** — Enterprise-managed cloud config as a first-class layer source.
- **[#24621](https://github.com/openai/codex/pull/24621)** — Cloud config bundle transport and cache loader.
- **[#24622](https://github.com/openai/codex/pull/24622)** — Switches runtime to the unified cloud bundle; deletes legacy `codex-cloud-requirements`.

**Why it matters:** Enterprises will be able to centrally manage and roll out Codex configuration — a major step toward IT-admin-friendly deployment.

### 🤖 [#25351](https://github.com/openai/codex/pull/25351) — Lock multi-agent runtime version per thread
Stores the selected multi-agent system at thread creation time so resumed or forked threads don't drift to a newer (and behaviorally different) runtime. Prevents parent/child multi-agent disagreements.
→ [#25351](https://github.com/openai/codex/pull/25351)

### 🤖 [#25427](https://github.com/openai/codex/pull/25427) — Select multi-agent version from model info
The backend model catalog now drives multi-agent runtime selection for models that opt into a specific system, instead of relying solely on client-side feature flags.
→ [#25427](https://github.com/openai/codex/pull/25427)

### 🧬 [#25113](https://github.com/openai/codex/pull/25113) — Store and expose `parent_thread_id` on Threads
Separates the concept of "forked from" from "parent thread" so guardian and review subagents can be tracked correctly. Addresses a data-modeling bug revealed during code review.
→ [#25113](https://github.com/openai/codex/pull/25113)

### 📈 [#24812](https://github.com/openai/codex/pull/24812) — Show enterprise monthly credit limits in `/status`
Adds `spend_control.individual_limit` to the rate-limit snapshot so enterprise plan users can see effective monthly credit limits inline.
→ [#24812](https://github.com/openai/codex/pull/24812)

### 🔍 [#25457](https://github.com/openai/codex/pull/25457) — Cache remote plugin catalog for suggestions
Caches the global remote plugin catalog and warms it at startup so plugin install recommendations are instant and canonical (`plugin@openai-curated-remote` IDs).
→ [#25457](https://github.com/openai/codex/pull/25457)

### 🛡️ [#25450](https://github.com/openai/codex/pull/25450) — Remove `SandboxPolicy` from production core
Codex core now operates on `PermissionProfile` + split filesystem/network policies instead of the legacy `SandboxPolicy` compatibility shim. Technical-debt cleanup that reduces the chance of new code depending on deprecated models.
→ [#25450](https://github.com/openai/codex/pull/25450)

---

## 5. Feature Request Trends

| Trend | Representative Issues |
|---|---|
| **Linux + Windows desktop parity** | [#11023](https://github.com/openai/codex/issues/11023) (Linux Desktop, 367 👍), [#13993](https://github.com/openai/codex/issues/13993) (Standalone Windows installer, 125 👍) |
| **Codex CLI intelligence upgrades** | [#8745](https://github.com/openai/codex/issues/8745) (LSP integration, 360 👍), [#6465](https://github.com/openai/codex/issues/6465) (MCP in extension) |
| **Transparency / observability** | [#23794](https://github.com/openai/codex/issues/23794) (Token/Context UI), [#14593](https://github.com/openai/codex/issues/14593) (Token burn), [#25144](https://github.com/openai/codex/issues/25144) (Disable auto .txt attachment) |
| **Safety & reversibility** | [#2847](https://github.com/openai/codex/issues/2847) (.codexignore, 396 👍), [#9203](https://github.com/openai/codex/issues/9203) (Undo, 261 👍) |
| **Multi-model / multi-agent evolution** | [#24031](https://github.com/openai/codex/issues/24031) (GPT-5.5 1M context), [#25472](https://github.com/openai/codex/issues/25472) (Rogue subagents) |

---

## 6. Developer Pain Points

1. **Unpredictable token consumption** — The single loudest complaint. Users can't predict or control burn rates, especially with long-running sessions or large codebases ([#14593](https://github.com/openai/codex/issues/14593)).

2. **Auth regression surface area** — Phone-verification gates ([#20161](https://github.com/openai/codex/issues/20161)), stale app-connector links after 401s ([#24675](https://github.com/openai/codex/issues/24675)), regional gating on Chrome plugins ([#21598](https://github.com/openai/codex/issues/21598)), GitHub OAuth callback failures on Windows ([#25203](https://github.com/openai/codex/issues/25203)). Login remains fragile across regions, platforms, and OAuth providers.

3. **Desktop rough edges on Windows** — Polling-driven CPU spikes ([#25455](https://github.com/openai/codex/issues/25453)sic → [#25453](https://github.com/openai/codex/issues/25453)), scrollback/rendering inconsistencies ([#10726](https://github.com/openai/codex/issues/10726), [#15380](https://github.com/openai/codex/issues/15380)), settings not persisting ([#20769](https://github.com/openai/codex/issues/20769)), sidebar chat history disappearing ([#21119](https://github.com/openai/codex/issues/21119)).

4. **MCP & config inconsistency between CLI and Desktop** — Project-level MCP servers load in CLI but not Desktop ([#13025](https://github.com/openai/codex/issues/13025)); MCP servers work in CLI but not VS Code extension ([#6465](https://github.com/openai/codex/issues/6465)). A unified config experience is overdue.

5. **Subagent lifecycle opacity** — Stale subagents ([#23700](https://github.com/openai/codex/issues/23700)), "rogue" subagents with Goal Mode ([#25472](https://github.com/openai/codex/issues/25472)), UI-stuck subagent cards ([#23930](https://github.com/openai/codex/issues/23930)). The community needs better introspection and termination guarantees.

6. **Silent destructive behaviors** — `apply_patch` silently overwriting existing files ([#25399](https://github.com/openai/codex/issues/25399)) and the absence of `/undo` ([#9203](https://github.com/openai/codex/issues/9203)) combine into a trust problem: developers are hesitant to let Codex touch uncommitted work.

---

*Digest generated by OWL for the OpenAI Codex community · Data snapshot: 2026-06-01 (UTC)*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-06-01

---

## 1. Today's Highlights

Today's community activity is dominated by **agent reliability issues** — the generalist agent hanging forever (21409), subagents falsely reporting success after hitting MAX_TURNS (22323), and shell commands getting stuck awaiting phantom input (25166). On the PR front, there's meaningful progress: a **concurrent file-edit race condition fix** (27153) landed, PTY dependency upgrades (27147) addressed a macOS fd leak, and a `/compress` ACP slash command (27151) shipped to help long-running sessions stay within context limits.

---

## 2. Releases

**No new releases** in the last 24 hours.

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|---------------|--------------------|
| [**#21409**](https://github.com/google-gemini/gemini-cli/issues/21409) | **Generalist agent hangs indefinitely** | Simple folder-creation tasks hang forever when the agent defers to the generalist subagent. A core reliability bug affecting basic workflows. | 👍8 comments:7 |
| [**#22323**](https://github.com/google-gemini/gemini-cli/issues/22323) | **Subagent reports GOAL success after MAX_TURNS interruption** | `codebase_investigator` silently reports `status: "success"` even when it did zero analysis — masking failures and eroding trust in agent results. | 👍2 · comments:6 |
| [**#25166**](https://github.com/google-gemini/gemini-cli/issues/25166) | **Shell execution stuck on "Waiting input"** | Even trivial shell commands leave the UI in a perpetual input-awaiting state. A core UX blocker for agent-driven shell workflows. | 👍3 · comments:4 |
| [**#24353**](https://github.com/google-gemini/gemini-cli/issues/24353) | **Component-level evaluation EPIC** | Tracks building robust behavioral eval infrastructure (76 tests already exist). Critical for measuring agent quality regressions as the codebase scales. | comments:7 |
| [**#22745**](https://github.com/google-gemini/gemini-cli/issues/22745) | **AST-aware file reads/search/mapping** | Investigating whether AST-aware tools can reduce token noise and misaligned reads — a potential step-change in agent efficiency for large codebases. | 👍1 · comments:7 |
| [**#21968**](https://github.com/google-gemini/gemini-cli/issues/21968) | **Gemini doesn't use skills/sub-agents autonomously** | Users report the model ignores custom skills and sub-agents unless explicitly instructed, undermining a key extensibility feature. | comments:6 |
| [**#26525**](https://github.com/google-gemini/gemini-cli/issues/26525) | **Auto Memory redaction & logging concerns** | Secrets reach model context *before* redaction runs. A security-sensitive issue around the Auto Memory background extraction pipeline. | comments:3 |
| [**#26523**](https://github.com/google-gemini/gemini-cli/issues/26523) | **Invalid Auto Memory inbox patches silently skipped** | Malformed patches are dismissed without surfacing errors, making it hard to debug why memory updates fail. | comments:3 |
| [**#26522**](https://github.com/google-gemini/gemini-cli/issues/26522) | **Auto Memory retries low-signal sessions indefinitely** | Sessions the extractor deems low-signal are never marked processed, causing infinite reprocessing loops. | comments:3 |
| [**#22093**](https://github.com/google-gemini/gemini-cli/issues/22093) | **Subagents running without permission since v0.33.0** | Users with agent mode disabled found subagents activating after upgrading — a regression in permission enforcement. | comments:2 |

---

## 4. Key PR Progress

| # | PR | Description | Status |
|---|----|-------------|--------|
| [**#27153**](https://github.com/google-gemini/gemini-cli/pull/27153) | **Serialize concurrent edits to the same file** | Fixes a race condition where `EditTool` and `WriteFileTool` could silently overwrite each other's changes via unsynchronized read→compute→write cycles. | ✅ Merged |
| [**#27147**](https://github.com/google-gemini/gemini-cli/pull/27147) | **Upgrade PTY dependencies** | Pulls in upstream `node-pty` fix for macOS `/dev/ptmx` fd leak. Updates `@lydell/node-pty` and fallback to `1.2.0-beta.12`. | ✅ Merged |
| [**#27151**](https://github.com/google-gemini/gemini-cli/pull/27151) | **Add `/compress` ACP slash command** | Enables context-window compaction for ACP sessions (previously only worked in TUI). Prevents silent token burn on long-running sessions. | ✅ Merged |
| [**#27154**](https://github.com/google-gemini/gemini-cli/pull/27154) | **Fix PTY memory/fd leak** | Moves `activePtys.delete()` out of a Promise `.then()` to ensure synchronous cleanup of PTY entries and headless terminals. | ✅ Merged |
| [**#27137**](https://github.com/google-gemini/gemini-cli/pull/27137) | **Fix `--skip-trust` to load workspace settings** | The flag was documented to trust the workspace but silently dropped hooks, extensions, and MCP servers from `.gemini/settings.json`. | ✅ Merged |
| [**#27139**](https://github.com/google-gemini/gemini-cli/pull/27139) | **Validate MCP OAuth resources from metadata URL** | Fixes #20017 — derives the expected protected resource from the actual metadata URL, with RFC 9728 path validation and root fallback. | ✅ Merged |
| [**#27553**](https://github.com/google-gemini/gemini-cli/pull/27553) | **Add GATEWAY auth type to `validateAuthMethod`** | `AuthType.GATEWAY` was added for custom base URL routing but the validation function wasn't updated, causing auth failures when `GOOGLE_GEMINI_BASE_URL` is set. | 🟡 Open |
| [**#27371**](https://github.com/google-gemini/gemini-cli/pull/27371) | **Fix `gemini --resume` EBADF crash** | Handles stale PTY file descriptors on session resume by adding `EBADF` to the safely-ignored error codes in `resizePty()`. | ✅ Merged |
| [**#27505**](https://github.com/google-gemini/gemini-cli/pull/27505) | **Fix extra spaces on width-0 CJK continuation cells** | Rendering bug injecting spurious whitespace between CJK characters, causing copy-paste corruption for international users. | 🟡 Open |
| [**#27398**](https://github.com/google-gemini/gemini-cli/pull/27398) | **Accept string `protocolVersion` in ACP initialize** | Normalizes date-style or string protocol versions to the current ACP numeric version, improving interoperability with non-standard ACP clients. | 🟡 Open |

---

## 5. Feature Request Trends

- **Agent self-awareness & autonomy**: Multiple issues (#21432, #21968) push for the agent to better understand its own capabilities — using skills/sub-agents without explicit prompting, accurately reporting CLI flags/hotkeys, and self-diagnosing issues.
- **AST-aware tooling** (#22745, #22746, #22747): A recurring theme investigating whether AST-aware file reads, searches, and codebase mapping can reduce token usage and improve precision for large codebases.
- **Evaluation infrastructure** (#24353, #23166, #23313): Strong demand for robust, non-flaky behavioral evals and component-level test infrastructure to track agent quality over time.
- **Server-driven model management** (#20878): A proposal to centralize model routing via `LoadCodeAssist`, moving away from hardcoded model lists.
- **Browser agent resilience** (#22232, #22267): Requests for automatic session takeover, lock recovery, and proper `settings.json` override support in the browser subagent.
- **Remote/background agents** (#20303): Continued investment in task-level auth, 1P agent support, and background processing for remote agent workflows.

---

## 6. Developer Pain Points

1. **Agent hangs & silent failures** — The most critical and recurring pain point. The generalist agent hanging (21409), shell commands stuck awaiting input (25166), and subagents falsely reporting success (22323) all point to a broader reliability crisis in agent execution and status reporting.

2. **Subagent permission regression** — Users upgrading to v0.33.0 found subagents activating despite agent mode being disabled (22093), breaking trust in configuration enforcement.

3. **Auto Memory quality & security** — A cluster of issues (26525, 26523, 26522, 26516) reveal systemic problems: secrets reaching model context before redaction, silent skipping of invalid patches, and infinite retry loops on low-signal sessions.

4. **PTY/shell execution instability** — Multiple PTY-related bugs (fd leaks, EBADF crashes on resume, stuck input states) suggest the shell execution layer needs continued hardening.

5. **Skills/sub-agents underutilized** — Even when users invest in creating custom skills, the model ignores them unless explicitly told to use them (21968), reducing the value of the extensibility system.

6. **Concurrent file edit races** — The fact that two edits to the same file could silently clobber each other (now fixed in PR #27153) was a significant data-integrity risk that likely caused hard-to-debug issues for users.

---

*Data source: [github.com/google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli) · Digest generated by OWL*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-06-01

---

## 1. Today's Highlights

Version **v1.0.57-4** shipped with a tighter preToolUse hook security model (errors now **deny** tool execution instead of silently allowing it), plus fixes for tmux key handling and @-mention file search. The issue tracker remains active (18 items), with a cluster of authentication/session pain points surfacing after the v1.0.56 upgrade, and a critical call-out for orphaned sessions that can run indefinitely without cleanup.

---

## 2. Releases

### v1.0.57-4

**Added**
- Click a diff line with the mouse to select it in diff mode.

**Improved**
- **preToolUse hook errors now deny the tool call instead of silently allowing execution** — a meaningful security tightening for teams relying on hooks as policy gates.

**Fixed**
- Ctrl+C and other modified keys work correctly inside tmux.
- @-mention file search matches files regardless of query case.

---

## 3. Hot Issues

1. **[#3600](https://github.com/github/copilot-cli/issues/3600) — [Critical] Orphaned sessions running for ~2 months, no way to remove them**
   Flagged as a critical bug and created today. Unlike normal sessions, these orphans can silently consume quota long after they're useful. No workaround is documented, and the community strongly prefers a kill/sweep command. 😟 👍 0 · 2 comments

2. **[#3597](https://github.com/github/copilot-cli/issues/3597) — Constant re-login since v1.0.56 upgrade**
   One user reports > 8 forced re-authentications in 24 hours across two machines. If representative, this is a widespread auth-token regression and the top-priority UX issue this week. 👍 0 · 1 comment

3. **[#3596](https://github.com/github/copilot-cli/issues/3596) — Session resume throws "Not authenticated" when loading `/model`**
   Directly adjacent to #3597 — resumed sessions appear to lose auth context, while new sessions work fine. Confirms a potential resume-path token bug. 👍 1 · 0 comments

4. **[#3594](https://github.com/github/copilot-cli/issues/3594) — 400 websocket_error: ApiIdParam id exceeds 64 chars during iOS streaming**
   Short commands like `go` crash when streaming via iOS because an internal param exceeds 64 characters. Blocks mobile-first users and suggests an ID-generation regression on the server side. 👍 0 · 0 comments

5. **[#3601](https://github.com/github/copilot-cli/issues/3601) — Bash tool drops non-ASCII characters (CJK, accented, emoji)**
   The bash tool runs with `LANG="" LC_CTYPE="C"`, silently stripping any non-ASCII char from command strings and file paths. This quietly breaks multilingual dev environments. 👍 0 · 0 comments

6. **[#3604](https://github.com/github/copilot-cli/issues/3604) — Copilot re-encodes Windows-1252 files as UTF-8 on edit**
   Copilot ignores the original encoding during edits and forces UTF-8, potentially corrupting files in legacy Windows pipelines. No prompt-level workaround found. 👍 0 · 0 comments

7. **[#3602](https://github.com/github/copilot-cli/issues/3602) — `@github/copilot` SDK mutates host `process.env` to inject `safe.bareRepository=explicit`**
   The bundled SDK unconditionally injects `GIT_CONFIG_*` into the host process, polluting env across any child process. Very concerning for security-sensitive or polyglot CI agents. 👍 0 · 0 comments

8. **[#2079](https://github.com/github/copilot-cli/issues/2079) — File search turns case-sensitive on mixed-case input** *(CLOSED)*
   A quirky search UX bug where any uppercase letter silently switches the matcher to case-sensitive. Closed — presumably fixed — but worth confirming you're on the latest build if you hit this. 👍 1 · 1 comment

9. **[#3529](https://github.com/github/copilot-cli/issues/3529) — Copilot error when requesting a PR review ("unable to review this pull request")**
   Customers paying for Copilot Actions see the review request fail entirely in CLI and UI. Low-comment count but directly blocks a paid workflow. 👍 1 · 2 comments

10. **[#1632](https://github.com/github/copilot-cli/issues/1632) — Support subfolders for skills plugins**
    The long-running #1 request (14 👍, 6 comments). With flat-skills-directory limits becoming painful at >10 custom skills, this is a recurring convergence of community demand. 👍 14 · 6 comments

---

## 4. Key PR Progress

No pull requests updated in the last 24 hours. 🔍 Keep an eye on the repo for incoming PRs around session cleanup, auth fixes, and the skill-subfolder refactor.

---

## 5. Feature Request Trends

Trending themes distilled from all open issues:

- **Session lifecycle management** — bulk-delete, list, and orphan cleanup commands are sorely needed (#3600).
- **Plugin & skill organization** — subfolder support for skills (#1632) and native worktree awareness (#2653) keep rising.
- **Multilingual/localization correctness** — non-ASCII preservation in bash (#3601) and Windows-1252 encoding (#3604) indicate that non-Latin workflows are being silently broken.
- **Mobile parity** — iOS remote now shows 404 on free-plan Macs (#3603) and breaks on streaming over long ApiIdParam (#3594), suggesting the mobile pipeline needs hardening.
- **UX for privileged operations** — AutoPilot pausing on confirmation (#3595) and image paste from clipboard (#2675) are underdiscussed but frequent workflow gates.

---

## 6. Developer Pain Points

1. **Auth regression after v1.0.56** — Cumulative evidence from #3597, #3596, and #3202 points to a systemic auth/token issue on session resume and remote connections.
2. **Silent data loss bugs** (#3601, #3604) — CJK/emoji dropped from bash, and Windows-1252 → UTF-8 re-encoding are dangerous because they happen without warning.
3. **Opaque SDK side-effects** (#3602) — Unconditional `process.env` mutation from the bundled SDK breaks isolation expectations and is hard to audit.
4. **No session housekeeping** (#3600) — Running `copilot` agents can spin off long-lived orphans with no purge path, wasting compute quota.
5. **Plugin repo override inconsistency** (now-closed #3088) — CLI subcommand ignoring repo-level marketplace overrides was confusing; worth spreading the word once fixed.

---

> *Generated by · OWL · from `github/copilot-cli` data as of 2026-06-01.*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-06-01

---

## 1. Today's Highlights

Kimi Code CLI saw a burst of 11 issues and 2 pull requests in the final 24 hours of May, concentrated almost entirely around the relatively new **v1.46.0** release. The community is actively engaged in hardening the tool — surfacing timeouts, encoding bugs, and sub-agent issues — rather than requesting brand new capabilities. Two community PRs from `wintrover` target double-encoded JSON in tool-call arguments and HTTP client timeout defaults, suggesting contributors are stepping up to fill gaps left by rapid iteration.

---

## 2. Releases

**New releases in the last 24 hours: None.**

The most recent version referenced across today's activity is **kimi-cli v1.46.0** (released prior to the 24h window), with several reports of regressions around login and input handling tied to this version.

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|---------------|-------------------|
| [2208](https://github.com/MoonshotAI/kimi-cli/issues/2208) | Request for OpenAI-compatible API for use in Cursor | Makes kimi-first models available in the wider IDE/tooling ecosystem — the single biggest wish-list item the community has raised repeatedly. Kimi K2.6 is well-regarded, but accessibility remains a bottleneck. | 👍 0, 4 comments. Active discussion shows clear demand but no maintainer response yet. |
| [2413](https://github.com/MoonshotAI/kimi-cli/issues/2413) | Restarting CLI re-sends historical images, polluting sessions | Indicates that the session-restore logic does not properly deduplicate or scope attached media, directly degrading multi-turn coding workflows that mix text + vision. | Fresh issue (created 2026-06-01). Cross-platform (Ubuntu + Windows 10), suggesting a systemic bug. |
| [2412](https://github.com/MoonshotAI/kimi-cli/issues/2412) | `kimi acp` command completely unresponsive | ACP (likely Agent Communication Protocol) is a core orchestration surface. A total hang with zero output is a critical UX blocker — users get no diagnostic feedback whatsoever. | 👍 0, no comments yet. WSL2 environment; may relate to terminal I/O handling. |
| [2410](https://github.com/MoonshotAI/kimi-cli/issues/2410) | Linux CLI input exception — command requires `sudo` / `su` | v1.46.0 on Linux triggers privilege-escalation prompts mid-flow, breaking automation and scripted usage. | 👍 0, 1 comment. Chinese-language report suggests the issue may be disproportionately affecting non-English locales. |
| [2403](https://github.com/MoonshotAI/kimi-cli/issues/2403) | Login failure after upgrading to v1.46 | A version-upgrade regression affecting authentication is high-severity — if users can't log in, they can't use the tool at all. | 👍 0, 2 comments. Linux user on latest kernel. |
| [2384](https://github.com/MoonshotAI/kimi-cli/issues/2384) | Frequent `ConnectTimeout` on large-context requests (≥120k tokens); `httpx connect_timeout` is not configurable | Long-running coding sessions reliably break. The inability to raise the timeout means power users (large codebases, long plans) are stuck with no workaround without forking. | 👍 0, 1 comment. Bilingual report (EN/CN) with detailed reproduction steps — high-quality issue. |
| [2411](https://github.com/MoonshotAI/kimi-cli/issues/2411) | Increase thinking-lines window size (currently 2 lines → requested 5–10) | The reasoning/thought display is too small to be useful during complex multi-step agent behavior. A simple config option would significantly improve observability. | Fresh issue, no engagement yet. Low-effort, high-impact config change. |
| [2408](https://github.com/MoonshotAI/kimi-cli/issues/2408) | Foreground sub-agent `timeout` silently defaults to 120s despite docs claiming "no default timeout" | Mismatch between advertised behavior and implementation risks silent failures in long-running sub-agent tasks, making debugging very hard. | Fresh issue, no engagement yet. |
| [2406](https://github.com/MoonshotAI/kimi-cli/issues/2406) | Tool-call arguments are double-encoded, breaking array/dict parameters (Moonshot API) | Core tool-use path is broken for several tools (`SetTodoList`, `ExitPlanMode`, `StrReplaceFile`). This is a correctness bug in the Moonshot API integration layer. | Linked to PR #2407 (fix in progress). |
| [2405](https://github.com/MoonshotAI/kimi-cli/issues/2405) | 400 error: assistant message with `tool_calls` not followed by corresponding tool response messages | Protocol-level message ordering or tool-call-ID tracking is off, causing API rejection. This blocks multi-tool-turn agent workflows. | Reported from v0.6.0 (marked as `[bug]` placeholder not actually set). May affect older versions too. |

---

## 4. Key PR Progress

Only **2 PRs** were opened/updated in the last 24 hours:

| # | PR | Description | Impact |
|---|----|-------------|--------|
| [2409](https://github.com/MoonshotAI/kimi-cli/pull/2409) | `fix(kosong): add default 120s timeout to create_openai_client` | `create_openai_client()` in `kosong/chat_provider/openai_common.py` was not passing a `timeout` to `AsyncOpenAI()`, which defaults to **600s**. When an upstream proxy times out earlier (e.g., MiMo API proxy at ~300s), the client silently waits the full 600s. PR adds a sane 120s default. | Directly addresses issue #2384 and the class of silent-timeout bugs. Improves real-world reliability for users behind proxies or with latency-sensitive setups. |
| [2407](https://github.com/MoonshotAI/kimi-cli/pull/2407) | `fix: handle double-encoded JSON in tool call arguments (Moonshot API)` | Fixes **#2406**. Moonshot API returns `function.arguments` with double-encoded JSON for nested types. After `json.loads`, values like `todos` remain as strings, causing Pydantic validation failures. PR handles the inner decode. | Unblocks core tools: `SetTodoList`, `ExitPlanMode`, `StrReplaceFile`. High-priority correctness fix for the Moonshot provider path. |

**Takeaway:** Both PRs target reliability and correctness — nobody is adding features, they're fixing breakage. The fact that community contributors (`wintrover`) are submitting these suggests the maintainers may be stretched thin or awaiting triage bandwidth.

---

## 5. Feature Request Trends

| Direction | Evidence | Signal Strength |
|-----------|----------|-----------------|
| **OpenAI-compatible API endpoint** | Issue #2208 (4 comments, long-lived since May 9) | 🔴 Strong — consistently requested, touches ecosystem integrations (Cursor, etc.) |
| **Configurable thinking/verbosity display** | Issue #2411 | 🟡 Emerging — single request, but aligns with broader industry trend (chain-of-thought visibility) |
| **`/goal` — autonomous mission command** | Issue #2404 | 🟡 Emerging — a single detailed feature request for goal-oriented autonomous execution with milestones and auto-confirmation. Ambitious; no community discussion yet. |
| **Configurable HTTP timeouts / retry behavior** | Issue #2384 + PR #2409 | 🔴 Strong — both an issue and a fixing PR exist, confirming real-world pain |

---

## 6. Developer Pain Points

| Pain Point | Affected Area | Version(s) |
|---|---|---|
| **Upgrade regressions (login, input)** | Auth + Linux terminal I/O | v1.46.0 |
| **Undocumented / misdocumented timeout behavior** | Sub-agents, HTTP clients | v1.44.0, v1.46.0 |
| **Large-context reliability** | Long sessions ≥120k tokens | All versions (configurability gap) |
| **Tool-call encoding correctness** | Moonshot API provider path | All versions (fix in progress via PR) |
| **Zero diagnostic output on failures** | `kimi acp` command | v1.46.0 |
| **Media/session deduplication** | Session restore with images | v1.46.0 |
| **Integration accessibility** | OpenAI-compatible API | All versions (open request since May) |

**Overall sentiment:** The community is constructively engaged but hitting real friction — especially around upgrades breaking previously working flows and the opacity of timeout/error behavior. The double-encoding fix (PR #2407) and timeout fix (PR #2409) addressing overlapping issues from `wintrover` suggest a **single active contributor is doing significant stabilization work** that may deserve maintainer attention.

---

*Digest generated by OWL · Data: GitHub MoonshotAI/kimi-cli · 2026-06-01*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-06-01

---

## 1. Today's Highlights

No new releases landed in the last 24 hours, but the community is highly active across multiple fronts. The most-discussed issue is **GPT model response latency** with 114 comments, while **Gemma 4 tool-calling reliability** via Ollama continues to draw significant attention. On the PR side, contributors are pushing fixes for **session status aggregation**, **SQLite path normalization on Windows**, and **Anthropic thinking-block signature preservation** — all addressing real-world breakage reported by users.

---

## 2. Releases

**None in the last 24 hours.** The latest known version referenced in issues is **v1.15.13**.

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|---------------|-------------------|
| 1 | **[#29079] GPT Models takes too long to respond** | Intermittent multi-minute latency on simple prompts with GPT 5.4/xhigh — undermines trust in production workflows. | 114 comments, 48 👍 — the most active discussion on the repo right now. |
| 2 | **[#20695] Memory Megathread** | Centralizes scattered memory-leak reports; maintainers are asking for heap snapshots rather than LLM-generated guesses. | 83 comments, 60 👍 — high engagement, collaborative debugging. |
| 3 | **[#20995] Gemma 4 (e4b) tool calling fails via Ollama** | Streaming `tool_calls` not recognized when using Ollama's OpenAI-compatible API — blocks local-model users. | 19 comments, 45 👍 — strong demand for Ollama compatibility. |
| 4 | **[#21034] Gemma-4-26b/31b interaction issues / tool loops** | Even with latest tokenizer fixes and patched llama.cpp engines, Gemma 4 variants cause tool loops and failures. | 17 comments, 18 👍 — indicates a systemic provider-integration problem. |
| 5 | **[#29786] Opus 4.8 bug in dev branch** | Sub-agent on the dev branch produces unexpected error messages; signals instability in bleeding-edge builds. | 16 comments, 3 👍 — early-warning signal for upcoming release. |
| 6 | **[#30157] opencode crashes on start with SQLITE_CORRUPT** | Fresh startup crash on v1.15.13 — completely blocks the user. | 3 comments (new today) — urgent, needs triage. |
| 7 | **[#30070] Desktop /MCP panel shows 0/0 while CLI lists connected MCP servers** | Desktop UI doesn't reflect actual MCP server state — sync/data population gap between CLI and Desktop. | 6 comments, 8 👍 — affects Desktop adopters specifically. |
| 8 | **[#28011] Edit tool frequently gets `[Tool execution was interrupted]` after v1.15.x** | Regression from v1.14.x: consecutive edits to the same file consistently fail. | 5 comments — clear version regression, needs bisection. |
| 9 | **[#25940] OpenCode crashes entire terminal session on open** | TUI crash takes down the whole terminal, not just the app — severe UX issue. | 9 comments, 2 👍 — reopened after auto-close, still unresolved. |
| 10 | **[#26038] `/exit` in PowerShell exits PowerShell itself** | Command passthrough bug: OpenCode's `/exit` doesn't scope correctly in PowerShell. | 7 comments, 1 👍 — Windows-specific, affects daily driver workflow. |

---

## 4. Key PR Progress

| # | PR | Description | Status |
|---|----|-------------|--------|
| 1 | **[#30155] fix(session): aggregate status across child directories** | `GET /session/status` now includes sessions in child project directories, not just the selected instance. Closes #30094. | 🟢 Open |
| 2 | **[#29666] fix(opencode): enforce storage path invariants** | Normalizes all session/project paths to forward slashes on Windows (`C:\Repo` → `C:/Repo`), fixing empty session lists caused by path-shape mismatches. | 🟢 Open |
| 3 | **[#30153] feat: save file attachments to disk before model processing** | When a user uploads an image/PDF to a text-only model, the file is now persisted to disk instead of causing an unrecoverable error. | 🟢 Open |
| 4 | **[#30139] feat(core): project copying and tracking paths** | Implements a local project-path and project-copy system with canonical checkout root resolution. Contributor PR from jlongster. | 🟢 Open |
| 5 | **[#30046] fix(session): preserve Anthropic thinking signature across differentModel** | Fixes the `thinking blocks cannot be modified` API error when switching Anthropic models mid-conversation. Closes #22813. | 🟢 Closed (merged) |
| 6 | **[#30145] fix(acp): honor session/cancel by aborting the running turn** | Restores ACP `session/cancel` support — previously rejected with `UnsupportedOperationError`, making it impossible to stop in-flight turns. | 🟢 Open |
| 7 | **[#30051] fix(tui): clarify inline subagent rows** | Renders completed inline subagents as compact `✓` rows instead of verbose `│`/`└` metadata blocks. Improves TUI readability. | 🟢 Open |
| 8 | **[#29901] feat(core): add Snowflake Cortex provider** | Adds Snowflake Cortex as a first-class provider (OpenAI-compatible endpoint with custom auth/model handling). Closes #29900. | 🟢 Open |
| 9 | **[#29928] fix(desktop): collapse full-context git diffs** | Desktop Git Changes now collapses full-file-context patches instead of rendering entire files as diffs. Fixes #29768, #21068. | 🟢 Open |
| 10 | **[#26861] fix(tui): old messages disappearing during long sessions** | Adds lazy-scroll loading (50 messages at a time) when scrolling up, fixing message loss in long sessions. Fixes #7380. | 🟢 Open |

---

## 5. Feature Request Trends

Synthesized from all issues (open and closed) updated in the last 24 hours:

1. **Glob-based rules configuration** ([#4716](https://github.com/anomalyco/opencode/issues/4716), 16 👍) — Users want file-glob-scoped rules (e.g., apply different instructions to `*.test.ts` vs `*.ts`), similar to `.gitignore` patterns. This is the highest-👍 feature request in the set.

2. **System tray minimize-to-tray on Desktop** ([#18134](https://github.com/anomalyco/opencode/issues/18134)) — Windows users expect the close button to minimize to tray rather than exit, matching Slack/Discord/Steam conventions.

3. **"Open in external editor" in the new TUI** ([#30135](https://github.com/anomalyco/opencode/issues/30135)) — The TUI rewrite (Go+Bubbletea → OpenTUI) dropped the ability to open files in an external editor; users want it back.

4. **Auto-accept mode for edit permissions** ([#12633](https://github.com/anomalyco/opencode/pull/12633), PR already open) — A toggleable mode (default `Shift+Tab`) that auto-approves edit permission requests while still prompting for other permission types.

5. **Sticky prompt header in TUI** ([#29086](https://github.com/anomalyco/opencode/pull/29086), PR already open) — Keep the active user prompt visible above the scroll area after it scrolls off-screen.

**Overall direction:** The community is pushing for **Desktop polish** (tray behavior, MCP panel parity), **TUI quality-of-life** (sticky headers, subagent rendering, external editor), and **more granular rule/configuration control**.

---

## 6. Developer Pain Points

Recurring frustrations visible in today's data:

- **Model provider reliability** — GPT latency spikes ([#29079](https://github.com/anomalyco/opencode/issues/29079)), Gemma 4 tool-calling failures via Ollama ([#20995](https://github.com/anomalyco/opencode/issues/20995), [#21034](https://github.com/anomalyco/opencode/issues/21034)), and Anthropic thinking-block signature loss ([#22813](https://github.com/anomalyco/opencode/issues/22813)) all point to **provider integration fragility** as the #1 pain category.

- **v1.15.x regressions** — The edit tool interruption bug ([#28011](https://github.com/anomalyco/opencode/issues/28011)) and file mentions breaking after v1.14.18 ([#23465](https://github.com/anomalyco/opencode/issues/23465)) suggest the v1.15 release introduced regressions that are still being hunted down.

- **Windows-specific issues** — PowerShell `/exit` passthrough ([#26038](https://github.com/anomalyco/opencode/issues/26038)), path separator mismatches ([#29666](https://github.com/anomalyco/opencode/pull/29666)), and terminal-not-recognized errors ([#11405](https://github.com/anomalyco/opencode/issues/11405)) indicate Windows remains a second-class platform.

- **Desktop/CLI parity gaps** — MCP panel showing 0/0 ([#30070](https://github.com/anomalyco/opencode/issues/30070)) and session/project data disappearing after MCP config ([#30151](https://github.com/anomalyco/opencode/issues/30151)) reveal sync and state-management issues unique to the Desktop client.

- **Data loss / corruption** — SQLite corrupt crashes ([#30157](https://github.com/anomalyco/opencode/issues/30157)) and JSON→SQLite migration reruns on non-latest channels ([#16885](https://github.com/anomalyco/opencode/issues/16885)) threaten user trust in session persistence.

- **Memory leaks** — The megathread ([#20695](https://github.com/anomalyco/opencode/issues/20695)) with 83 comments and 60 👍 shows this remains an unresolved systemic concern.

---

*Data source: [github.com/anomalyco/opencode](https://github.com/anomalyco/opencode) · Digest generated by OWL for 2026-06-01*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-06-01

---

## 1. Today's Highlights

No new releases in the last 24 hours. The community remains highly active on the issue and PR front, with the conversation dominated by **provider-specific compatibility bugs** (Anthropic, OpenRouter, Bedrock), **TUI rendering and focus regressions**, and a **cluster of loop-protection and session-management PRs** landing or advancing. The most-discussed issue by far is the persistent `openai-codex` / GPT-5.5 TUI hang ([#4945](https://github.com/badlogic/pi-mono/issues/4945)).

---

## 2. Releases

**None** — no new versions published in the last 24 hours.

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|---------------|-------------------|
| 1 | **[#4945](https://github.com/badlogic/pi-mono/issues/4945) `openai-codex` hangs on `Working…` with zero-usage aborted turns** | The single hottest issue right now (50 comments, 👍24). GPT-5.5 via `openai-codex` silently stalls mid-session with no streamed output, forcing users to press Escape — producing aborted assistant turns that pollute session history. This is a top-of-funnel productivity killer for anyone on Codex. | Heavy engagement; multiple users confirming reproduction across days. Tagged `[possibly-openclaw-clanker]` suggesting internal triage. |
| 2 | **[#5223](https://github.com/badlogic/pi-mono/issues/5223) Anthropic provider munges thinking blocks, causing 400 on Opus 4.8 adaptive thinking** | Multi-turn conversations with Claude Opus 4.8 (`high` reasoning) break mid-session because Pi modifies `thinking`/`redacted_thinking` blocks in the latest assistant message, triggering Anthropic validation errors. This affects every user relying on Anthropic's adaptive-reasoning models. | 8 comments, 👍5. Concise repro steps; seen as a regression in the Anthropic message-normalization path. |
| 3 | **[#5229](https://github.com/badlogic/pi-mono/issues/5229) MiniMax on OpenRouter broken — `unknown variant 'developer'`** | The `developer` role (adopted by Pi for system prompts) is not recognized by MiniMax's OpenRouter endpoint, returning a 400 JSON deserialization error. Part of a growing pattern of provider role-compatibility issues. | 👍1; 2 comments. Likely resolved by the same fix-path as PR [#5221](https://github.com/badlogic/pi-mono/pull/5221). |
| 4 | **[#5117](https://github.com/badlogic/pi-mono/issues/5117) Qwen 3.7 Max on OpenRouter broken — same `developer` role rejection** | MiniMax's sibling issue. OpenRouter's Qwen endpoint rejects the `developer` role; Anthropic requires `system`. Pi's role-mapping layer clearly needs a per-provider override table. | 👍4. Closed — fix likely bundled into the same PR direction as #5221. |
| 5 | **[#4666](https://github.com/badlogic/pi-mono/issues/4666) 429 Retry-After waits ignore `maxRetryDelayMs`; Escape/ `/new` don't recover cleanly** | Rate-limit resilience is broken: Pi silently waits longer than the configured `retry.provider.maxRetryDelayMs` cap, and the user has no clean escape hatch. This is a correctness bug in the retry-backoff loop. | Low engagement so far (👍1) but architecturally important — it's the kind of silent failure that erodes trust. |
| 6 | **[#5261](https://github.com/badlogic/pi-mono/issues/5261) Inject TUI config instead of reading `process.env` inside pi-tui** | Hardcoded `process.env` reads (`PI_HARDWARE_CURSOR`, etc.) inside the `TUI` class couple the render layer to environment variables, making testing and embedding impossible without hacks. Dependency injection is the right pattern. | 5 comments, already driving a closed PR. Good hygiene refactor. |
| 7 | **[#5044](https://github.com/badlogic/pi-mono/issues/5044) OOM on `pi --resume` with large sessions** | `buildSessionInfo` reads entire 200+ MB JSONL files into memory just to list sessions. Users with long-running projects hit OOM. The fix is straightforward: stream instead of `readFile`. | Closed. PR merged or solution in progress. |
| 8 | **[#5199](https://github.com/badlogic/pi-mono/issues/5199) Terrible UX in iTerm2 — slow redraw, content loss** | Long sessions cause 5–10 s full redraws and occasional content disappearance in iTerm2. This is a terminal-performance issue that affects power users disproportionately. | Closed, but pain level is high. Suggests the TUI render loop needs profiling or virtualized rendering. |
| 9 | **[#5259](https://github.com/badlogic/pi-mono/issues/5259) `APPEND_SYSTEM.md` injected as bare text without XML wrapper** | The agent cannot distinguish user-defined global rules from Pi's base system prompt because `APPEND_SYSTEM.md` content arrives as unlabeled plain text. This degrades prompt-injection hygiene. | Closed. Quick fix — wrap in an XML-tagged block with a source label. |
| 10 | **[#5263](https://github.com/badlogic/pi-mono/issues/5263) Make in-session model/thinking-level changes ephemeral by default** | Users changing models mid-session (`Ctrl+P`, `/model`) expect the change to be session-scoped, but it silently overwrites global defaults. This is a UX surprise that breaks workflows. | Open, directly paired with PR [#5270](https://github.com/badlogic/pi-mono/pull/5270). |

---

## 4. Key PR Progress

| # | PR | Description | Status |
|---|----|-------------|--------|
| 1 | **[#5270](https://github.com/badlogic/pi-mono/pull/5270) Ephemeral session model and thinking level selection** | `setModel()`, `cycleModel()`, `setThinkingLevel()`, `cycleThinkingLevel()` now default to session-only. Requires explicit `{ persist: true }` to write global defaults. | **Closed** — merged. |
| 2 | **[#5269](https://github.com/badlogic/pi-mono/pull/5269) `ctx.isInteractive` to distinguish TUI from RPC mode** | Fixes a regression where `hasUI` was set true for RPC mode (because RPC gained prompt features), leaving extensions unable to detect true interactive/TUI mode. Adds `ctx.isInteractive`. | **Open** — active. |
| 3 | **[#5268](https://github.com/badlogic/pi-mono/pull/5268) Render hardware cursor by default so prompt cursor hollows on blur** | Fixes [#3896](https://github.com/badlogic/pi-mono/issues/3896). Switches to hardware cursor rendering so an unfocused Pi window correctly shows a hollow cursor. | **Closed** — merged. |
| 4 | **[#5264](https://github.com/badlogic/pi-mono/pull/5264) Refresh branch footer on WSL `/mnt` repos** | Adds polling for git branch changes from Windows-backed paths in WSL, where filesystem events don't propagate. References [#5052](https://github.com/badlogic/pi-mono/issues/5052). | **Open** — active. |
| 5 | **[#5262](https://github.com/badlogic/pi-mono/pull/5262) Add Anthropic Vertex provider** | New built-in `anthropic-vertex` provider — thin adapter wrapping `AnthropicVertex` SDK into Pi's existing Anthropic streaming path. Expands Claude-on-GCP support. | **Open** — active. |
| 6 | **[#5251](https://github.com/badlogic/pi-mono/pull/5251) Suppress deprecated `temperature` param for Claude Opus 4.7+** | Pi didn't set temperature by default, but some config paths did. Anthropic now rejects non-default `temperature` on Opus 4.7+, so the PR removes it for those models. | **Closed** — merged. |
| 7 | **[#5247](https://github.com/badlogic/pi-mono/pull/5247) Infinite loop protection in AgentHarness** | Adds `maxTurns` cap + unbound tool-call detection to `AgentHarness`. Fixes runaway loops from hallucinated unregistered tool calls ([#5016](https://github.com/badlogic/pi-mono/issues/5016)) and orchestration bugs ([#3960](https://github.com/badlogic/pi-mono/issues/3960)). | **Closed** — merged. |
| 8 | **[#5235](https://github.com/badlogic/pi-mono/pull/5235) Fix TUI overlay focus state** | Overlay becomes unreachable when focus returns to the editor while an overlay is still visible. Fix lives in `pi-tui` state management for overlay visibility/focus ownership. | **Open**, `[inprogress]`. |
| 9 | **[#5257](https://github.com/badlogic/pi-mono/pull/5257) Warn instead of fatal on extension load failures** | Extension loading failures (missing deps, syntax errors) previously called `process.exit(1)`. Now degrades to a warning, letting Pi boot with degraded functionality. | **Closed** — merged. |
| 10 | **[#5246](https://github.com/badlogic/pi-mono/pull/5246) Worktree agent extension example** | Packaged `worktree-agent` extension: creates isolated git worktrees and branches for child Pi agents, with `/worktree-agent` command. Serves as both feature and extension-pattern documentation. | **Closed** — merged. |

---

## 5. Feature Request Trends

From the full issue list, three clear feature-theme clusters emerge:

1. **Session & Model Lifecycle Hygiene** — Expect-session-scoped model/thinking changes ([#5263](https://github.com/badlogic/pi-mono/issues/5263) → merged in [#5270](https://github.com/badlogic/pi-mono/pull/5270)), optional session names on `/new /clone /fork` ([#5256](https://github.com/badlogic/pi-mono/pull/5256) → merged), and named-session warmth. Users want session management to feel intentional, not accidental.

2. **Multi-Select / Richer Extension UI** — [#5025](https://github.com/badlogic/pi-mono/issues/5025) requests a `multi-select-list` component for extensions that need to edit array-typed config (e.g. `models.json`). Extensions are outgrowing the current primitives.

3. **Session Analytics & Visualization** — [#5187](https://github.com/badlogic/pi-mono/issues/5187) proposes a calendar-style heatmap for daily session activity and token consumption. Users increasingly want longitudinal visibility into their Pi usage.

---

## 6. Developer Pain Points

| Pattern | Evidence | Severity |
|---------|----------|----------|
| **`developer` role incompatibility** | [#5117](https://github.com/badlogic/pi-mono/issues/5117) (Qwen), [#5229](https://github.com/badlogic/pi-mono/issues/5229) (MiniMax), [#5221](https://github.com/badlogic/pi-mono/pull/5221) (OpenRouter fix) — three separate providers rejecting `developer`. Needs a per-provider role-mapping table. | **High** — blocks model usage. |
| **Thinking-block corruption across providers** | [#5223](https://github.com/badlogic/pi-mono/issues/5223) (Anthropic Opus 4.8), OpenRouter reasoning instruction mishandling. Pi is normalizing messages across heterogeneous provider schemas and losing fidelity. | **High** — data integrity. |
| **TUI rendering performance** | [#5199](https://github.com/badlogic/pi-mono/issues/5199) (iTerm2 5–10 s redraws), [#3896](https://github.com/badlogic/pi-mono/issues/3896) (cursor state). The render loop is unoptimized for long sessions and doesn't leverage terminal capabilities fully. | **Medium–High** — user-perceived quality. |
| **Silent OOM on session resume** | [#5044](https://github.com/badlogic/pi-mono/issues/5044). Full-file `readFile` on JSONL sessions hits memory walls. Needs streaming. | **Medium** — affects power users. |
| **No infinite loop protection** | [#5248](https://github.com/badlogic/pi-mono/issues/5248), [#5016](https://github.com/badlogic/pi-mono/issues/5016). Hallucinated tool calls can loop forever. Now addressed by [#5247](https://github.com/badlogic/pi-mono/pull/5247). | **Medium** — now fixed. |
| **Extension fragility** | [#5257](https://github.com/badlogic/pi-mono/pull/5257) (load failure → process exit), [#4748](https://github.com/badlogic/pi-mono/issues/4748) (singleton scope bug with `keybindings`). Extension-authoring surface is still rough. | **Medium** — ecosystem health. |
| **WSL filesystem gaps** | [#5052](https://github.com/badlogic/pi-mono/issues/5052) / [#5239](https://github.com/badlogic/pi-mono/issues/5239) (branch footer stale in WSL), [#4920](https://github.com/badlogic/pi-mono/issues/4920) (`nul` vs NUL device on Windows). Cross-platform filesystem semantics remain under-tested. | **Low–Medium** — WSL user subset. |

---

*All data sourced from [github.com/badlogic/pi-mono](https://github.com/badlogic/pi-mono) as of 2026-06-01.*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-06-01

---

## 1. Today's Highlights

The `qwen serve` daemon and observability stack dominates this cycle: multiple PRs and issues from contributor **doudouOUC** push OpenTelemetry coverage into the daemon path, add per-prompt trace IDs, and couple MCP-restart timeouts between the SDK and server. Meanwhile, the community is vocal about authentication dead-ends in JetBrains IDEs, Ollama/local-model reliability, and memory-diagnostics gaps.

---

## 2. Releases

**v0.17.0-nightly.20260601.1c48e4121** ([release](https://github.com/QwenLM/qwen-code/releases/tag/release/v0.17.0-nightly.20260601.1c48e4121), [PR #4626](https://github.com/QwenLM/qwen-code/pull/4626))
- Chore: v0.17.0 release scaffold.
- **Fix**: false "compressed turn" error when mid-turn message occurs during rewind. This directly addresses confusion in session-compression flow and affects long-session users.

---

## 3. Hot Issues

| # | Title & Link | Why It Matters | Community Pulse |
|---|---|---|---|
| **#4657** | [v0.17.0 + Ollama + Qwen 3.6 model can barely complete tasks](https://github.com/QwenLM/qwen-code/issues/4657) | Tasks that previously worked (e.g., generate an HTML ebook) now fail to complete with local Ollama setups. Suggests a regression in tool-call reliability or timeout logic after the recent timeout fix. | No 👍 yet, 3 comments — but this is a **high-severity workflow blocker** for local-LLM users. |
| **#4663** | [Add MiniMax-M3 and checkbox-based MiniMax model selection](https://github.com/QwenLM/qwen-code/issues/4663) | Requests an official MiniMax-M3 model option and replaces the comma-separated free-text input with a checkbox/multi-select UI in the API-key setup flow. Freshly filed today. | 6 comments, 0 👍 — active discussion, UI polish meets model-coverage demand. |
| **#4651** | [Auto-dump memory diagnostics to disk on pressure detection](https://github.com/QwenLM/qwen-code/issues/4651) | Part of #3000 Memory Diagnostics roadmap. Current OOM bugs are hard to triage because `/doctor memory` can't be run after a crash. Want lightweight diagnostics written to `.qwen/<project>/diagnostics/` on hard/critical pressure. | 0 comments, 1 👍 — newest item, aligned with existing roadmap. |
| **#4514** | [Tracking: daemon capability gaps & prioritized backlog (post v0.16-alpha)](https://github.com/QwenLM/qwen-code/issues/4514) | Gap analysis for `qwen serve` HTTP/SSE surface after slash-command passthrough landed. Tracks remaining daemon feature debts. | 10 comments — the most-discussed open issue; central coordination thread for serve-mode work. |
| **#4493** | [Rider cannot log in to Qwen Code](https://github.com/QwenLM/qwen-code/issues/4493) | JetBrains Rider users hit infinite redirect loop on web login and cannot invoke Alibaba Cloud Token Plan models. Auth flow problem scoped to IDE integrations. | 9 comments — high engagement, real adoption blocker for Rider shops. |
| **#4554** | [feat(telemetry): cover qwen serve daemon end-to-end with OpenTelemetry](https://github.com/QwenLM/qwen-code/issues/4554) | Daemon process handles HTTP routing, session lifecycle ACP child management, but still lacks OTel spans. Calls for production-grade observability parity with the interactive CLI path. | 4 comments — pairs with several active PRs (see §4). |
| **#4637** | [P1: discontinued qwen-oauth still returned in authMethods, trapping JetBrains IDE users](https://github.com/QwenLM/qwen-code/issues/4637) | **P1/CLOSED.** Users with `qwen-oauth` selected were trapped in a dead-end auth state in JetBrains IDEs. Fixed within ~24h of filing. | 2 comments, 1 👍 — fast burn-down shows triage responsiveness. |
| **#4609** | [DOMException error when running local models](https://github.com/QwenLM/qwen-code/issues/4609) | `[API Error: Value of "this" must be of DOMException]` when using local Qwen via Ollama. Closed — likely shares root cause with #4657. | 4 comments. |
| **#4619** | [Validate tool_result adjacency in cleanOrphanedToolCalls](https://github.com/QwenLM/qwen-code/issues/4619) | Forwarding OpenAI-format messages to Anthropic-compatible proxies rejected due to orphaned `tool_result` blocks. Closed with fix in PR. | 1 comment — important for multi-provider proxy chains. |
| **#4501** | [Side-query thinking disable doesn't reach qwen3 series](https://github.com/QwenLM/qwen-code/issues/4501) | `enable_thinking` typed check never fires because OpenAI-compatible request body doesn't pre-populate qwen3-specific extensions. Closed. | Root-cause pattern useful for anyone building on DashScope provider. |

---

## 4. Key PR Progress

| # | Title & Link | What It Does | Status |
|---|---|---|---|
| **#4656** | [Add project MCP pending approval](https://github.com/QwenLM/qwen-code/pull/4656) | Introduces project-scoped `.mcp.json` discovery with a **safe pending-approval state**. MCP servers appear in `qwen mcp list` but can't spawn transports or connect until approved. Reduces surprise stdio/process launches from workspace files. | OPEN (qqqys) |
| **#4662** | [Include submodule files in file search](https://github.com/QwenLM/qwen-code/pull/4662) | Extends git-backed file crawler to surface tracked files inside submodules (`git ls-files --cached --recurse-submodules`). Fixes #4568. Regression test included. Tests pass locally. | OPEN (he-yufeng) |
| **#4654** | [Auto-dump memory diagnostics to disk on pressure detection](https://github.com/QwenLM/qwen-code/pull/4654) | Lands the fix for #4651. On `hard`/`critical` pressure events (from #4403 MemoryPressureMonitor), writes lightweight diagnostics JSON to `.qwen/<project>/diagnostics/` **before** cleanup, surviving subsequent OOM crashes. | OPEN (yiliang114) |
| **#4658** | [Enforce SDK/server MCP-restart timeout coupling (#4330)](https://github.com/QwenLM/qwen-code/pull/4658) | Extracts shared constants `MCP_RESTART_SERVER_DEADLINE_MS` (300s) and `MCP_RESTART_CLIENT_HEADROOM_MS` (30s) into `@qwen-code/acp-bridge/mcpTimeouts`. SDK derives its default timeout from the server constant, eliminating independent drift. | OPEN (doudouOUC) |
| **#4661** | [Per-prompt traceId for bounded, renderable traces](https://github.com/QwenLM/qwen-code/pull/4661) | Each interaction gets its own fresh trace root instead of sharing one `SHA-256(sessionId)` session-level traceId. Adds `SessionIdSpanProcessor` stamping `session.id` on all exported spans, enabling cross-span correlation. | OPEN (doudouOUC) |
| **#4660** | [Clear span dedup state after chat compression (#3731)](https://github.com/QwenLM/qwen-code/pull/4660) | Wires `clearDetailedSpanState()` into `GeminiChat.tryCompress()` COMPRESSED branch so post-compaction OTel spans re-emit full system-prompt/tool-schema content instead of hashes. Fixes a trace-quality regression. | OPEN (doudouOUC) |
| **#4655** | [Web Shell UI improvements, subagent rendering, scroll-follow rewrite](https://github.com/QwenLM/qwen-code/pull/4655) | Fixes parallel subagent permission rendering in non-YOLO mode; rewrites `transcriptToMessages` for correct parallel/cancel/background agent handling. Introduces `@tanstack/react-virtual` virtual scrolling for long conversations, reducing DOM node count significantly. | OPEN (ytahdn) |
| **#4653** | [Respect configurable agent ignore files](https://github.com/QwenLM/qwen-code/pull/4653) | Adds `.agentignore` and `.aiignore` (in addition to existing `.qwenignore`) through the same filtering path. Adds a `context_size` counter. Immediately useful when switching between multiple AI-agent tools in one repo. | OPEN (shenyankm) |
| **#4572** | [Harden auto mode self-modification checks](https://github.com/QwenLM/qwen-code/pull/4572) | Prevents Auto Mode from bypassing the classifier when writing to Qwen Code config, instructions, hooks, commands, skills, MCP config, or other persistence surfaces. Splits classifier policy layers. Security-important. | OPEN (qqqys) |
| **#4333** | [Atomic write rollout for credentials, memory, config, JSONL](https://github.com/QwenLM/qwen-code/pull/4333) | Phase 2 of #4095 — replaces remaining bare `fs.writeFile`/`fs.appendFile` in security-sensitive and data-integrity paths. Closes #3681 JSONL session writer durability. Good hygiene for crash-safety. | OPEN (doudouOUC) |

---

## 5. Feature Request Trends

1. **Daemon / `qwen serve` parity.** The cluster of issues (#4514, #4554, #4548, #4501) and PRs (#4563, #4602, #4661, #4660) paints a clear picture: the community wants daemon-mode observability, logging, and session-tracing on par with the interactive CLI path. This is the single strongest thematic thread.

2. **MCP governance and safety.** Project-scoped MCP config (#4656), approval gates, and hard stop on persistent-surface writes from auto mode (#4572) converge on **trust boundaries** for MCP servers in shared repos.

3. **Ignore-file ecosystem.** `.agentignore` / `.aiignore` support (#4653) reflects real-world multi-tool repos — developers juggling Qwen Code alongside Claude Code, Cursor, Aider, etc.

4. **Model/vendor coverage.** MiniMax-M3 addition (#4663) and recent auth fixes for Alibaba Cloud Token Plan (#4493, #4637) show demand for broader provider matrix, especially in the Chinese cloud ecosystem.

5. **Post-crash diagnostics.** Memory-pressure dumps (#4651 / #4654) and oversized-resume fixes (#4363) form a theme around **crash forensics** — users want actionable artifacts, not just V8 native stacks.

---

## 6. Developer Pain Points

| Pain Point | Evidence | Severity |
|---|---|---|
| **Ollama / local-model task failures** | #4657 (tasks don't complete), #3881 (Qwen3.6-27B outputs `/` until token cap), #4609 (DOMException on local model) | 🔴 High — core workflow broken for local users |
| **Auth dead-ends across IDEs** | #4493 (Rider infinite redirect), #4637 (P1: qwen-oauth trap on JetBrains), #4466 (env-var substitution ordering for MCP headers) | 🔴 High — blocks onboarding |
| **Long-session / OOM crashes** | #4651 (need crash-dump diagnostics), #4363 (oversized resume → Invalid string length), #4333 (atomic writes to survive crashes) | 🟠 Medium-High — frequent, data-loss adjacent |
| **Tracing / observability gaps in daemon mode** | #4554, #4501, #4602 (daemon bypasses OTel spans), #4661/PR #4660 (trace scope fixes) | 🟠 Medium — operational, hard to debug in production |
| **MCP restart reliability** | #4330 (SDK/server timeout coupling), #4501 (thinking disable never fires for qwen3), #4658 (shared constants) | 🟠 Medium — integration fragility |
| **UI polish — model/provider onboarding** | #4663 (MiniMax checkbox UI), #4631 (tasks not clearing from UI), #4637 / #4600 (approval-mode visual indicators), #4494 (output-language ignored for side queries) | 🟡 Low-Medium — UX friction, not blockers |

---

*All links point to `github.com/QwenLM/qwen-code`. Data snapshot: 2026-06-01.*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/DenisZheng/agents-radar).*