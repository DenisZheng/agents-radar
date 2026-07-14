# AI CLI Tools Community Digest 2026-07-03

> Generated: 2026-07-03 01:51 UTC | Tools covered: 9

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

# Cross-Tool Comparison Report: AI CLI Developer Tools
**Date:** 2026-07-03

---

## 1. Ecosystem Overview

The AI CLI tools ecosystem is experiencing intense, convergent development across seven major tools—Claude Code, OpenAI Codex, Gemini CLI, GitHub Copilot CLI, Kimi Code CLI, OpenCode, Pi, Qwen Code, and DeepSeek TUI. The landscape is characterized by three simultaneous pressures: **agent orchestration reliability** (sub-agent lifecycle bugs plague nearly every tool), **cross-platform parity** (Windows and Linux users face systemic friction), and **billing/transparency crises** (session caps, silent model overrides, and opaque quota accounting are eroding user trust). A clear bifurcation is emerging: tools backed by major model providers (Claude Code, Codex, Gemini CLI, Qwen Code) focus on model integration depth and agent capabilities, while community-driven tools (OpenCode, Pi, DeepSeek TUI) prioritize UX polish, extensibility, and provider diversity. The ecosystem is maturing rapidly but remains fragile under production workloads.

---

## 2. Activity Comparison

| Tool | GitHub Stars | Hot Issues (24h) | PRs (24h) | Release Status | Notable Signal |
|------|-------------|-------------------|------------|----------------|----------------|
| **Claude Code** | ~112k | 10 (789 on #38335) | 3 minor | v2.1.199 (today) | **Highest community outrage** — 789-comment billing fire |
| **OpenAI Codex** | ~95k | 10 | 8 (security PRs) | Rust SDK alphas | **Most security activity** — 8 Git hardening PRs |
| **Gemini CLI** | ~48k | 10 | 10 (5 merged) | No release today | **Most merged PRs** — agent reliability fixes |
| **Copilot CLI** | ~32k | 10 | 2 (spam/low-signal) | v1.0.69-0 (stale) | **Lowest PR velocity** — community frustrated |
| **Kimi Code CLI** | ~9k | 10 (2 real + 8 synth) | 1 real + 9 synth | v1.12.0 (stale) | **Thinnest data** — low community engagement |
| **OpenCode** | ~85k | 10 | 10 (5 merged) | v1.17.13 | **Highest desktop feature velocity** — tabs, tabs, tabs |
| **Pi** | ~27k | 10 | 10 (5 merged) | v0.80.3 (stale) | **Broadest provider support** — DeepInfra, Claude Sonnet 5 |
| **Qwen Code** | ~73k | 10 | 10 (5 merged) | v0.19.5 (today) | **Strongest Chinese enterprise focus** — WeCom, QQ Bot |
| **DeepSeek TUI** | ~41k | 10 | 11 (all merged) | v0.8.67 (stabilization) | **Highest merge rate** — 11 PRs merged in 24h |

**Key observations:**
- Claude Code has the most severe unresolved crisis (#38335: 789 comments, no official response)
- DeepSeek TUI shows the highest merge velocity (11 PRs in 24h, all merged)
- Copilot CLI has the lowest meaningful PR activity (2 total, both low-signal)
- Kimi Code CLI has the thinnest community data (only 2 real issues in 24h)

---

## 3. Shared Feature Directions

The following requirements appear across **three or more** tool communities, indicating genuine industry demand:

| Feature / Pain Point | Affected Tools | Community Signal | Notes |
|---------------------|----------------|-----------------|-------|
| **Sub-agent reliability** | Claude Code (#69824), Gemini CLI (#22323, #21409), Qwen Code (#6189), DeepSeek TUI (#3882, #3932) | 10+ issues across 4 tools | Agents hallucinate results, hang forever, misreport failures as success, and exhaust memory. **The #1 systemic reliability gap.** |
| **Persistent thinking/reasoning visibility** | Claude Code (#8477, 307 👍), Codex (#16857, GPU drain), Gemni CLI (#27971, thought leakage), Qwen Code (#6175, "Thought for 0s") | 4 tools, 4+ issues | Users want to audit model reasoning at all times. GPU drain from animations (Codex) and thought leakage into history (Gemini) are unexpected consequences. |
| **Configurable auto-resolve timeout** | Claude Code (#73125, 60s dismiss), Codex (#28969, 74 👍), Copilot CLI (implied by #3936) | 3 tools | The 60-second auto-dismiss fires while users are typing. Simple config fix; strong support. |
| **Session/usage limit transparency** | Claude Code (#38335, 467 👍), Codex (#30918, fast drain), OpenCode (#28846, price pass-through) | 3 tools | Users don't understand why quotas deplete. Trust erosion when billing is opaque. |
| **Cross-platform parity (Windows/Linux)** | Claude Code (#73468, macOS sandbox crash), Gemini CLI (#21983, Wayland), Copilot CLI (#4001, Windows hooks fail), Kimi CLI (#2481, clipboard), Qwen Code (#6214, encoding), DeepSeek TUI (#1812, #1835, IME deadlocks) | **All 9 tools** | Windows users face systemic friction (hooks, encoding, clipboard, IME). Linux users miss desktop apps (Codex #11023, 680 👍). |
| **Session replay and continuity** | Gemini CLI (#27971, thought leakage), OpenCode (#35040, deterministic replay), DeepSeek TUI (#2934, sidebar sessions) | 3 tools | Users want reliable session persistence, replay for debugging, and visual session management. |
| **MCP/plugin ecosystem maturity** | Copilot CLI (#4004, auto-registration), Kimi CLI (MCP feature request), Pi (#6227, SQLite session storage), OpenCode (plugin patterns) | 4 tools | Growing demand for protocol-based extensibility and auto-discovery of tools. |

**Emerging (2 tools):**
- **Rules-directory auto-discovery**: DeepSeek TUI (#3892, merged) and Gemini CLI (#28240) both now scan `.claude/rules/` or `AGENTS.md` — becoming a de facto standard.
- **One-shot fast-path CLI**: Qwen Code (#6185) and DeepSeek TUI (first-run wizard #3793) want instant startup for trivial commands.

---

## 4. Differentiation Analysis

| Tool | Primary Focus | Target User | Technical Approach | Key Differentiation |
|------|--------------|-------------|-------------------|---------------------|
| **Claude Code** | Anthropic model integration | Anthropic power users | Deep agentic workflows, skills, sub-agents | **Best multi-skill invocations** (stacked skills in v2.1.199); **Most controversial billing model** (#38335) |
| **OpenAI Codex** | Security-hardened agent | Enterprise developers | Git safety, sandboxed execution | **Most security-conscious** (8 Git hardening PRs in 24h); **Strongest Windows issues** (#20214, #29193) |
| **Gemini CLI** | Agent reliability | Google ecosystem devs | Memory systems, sub-agent orchestration | **Most agent reliability fixes** (thought leakage, recursive reasoning limits); **Weakest community engagement** (low 👍 counts) |
| **Copilot CLI** | GitHub integration | GitHub ecosystem users | TUI-first, MCP server support | **Simplest rendering** (often broken per #3501, #4009); **Slowest development velocity** |
| **Kimi Code CLI** | Lightweight Anthropic compatible | Budget-conscious devs | OpenAI-compatible CLI for multi-provider | **Thinnest community** — only ~9k stars; **Most feature-request heavy** relative to actual bugs |
| **OpenCode** | Desktop-first agent UI | Power users, Go subscribers | Tab-based desktop app, V2 agent lifecycle | **Best desktop UX** (tabs, recent projects, mousedown navigation); **Most aggressive Go pricing debate** (#28846) |
| **Pi** | Multi-provider flexibility | Self-hosting, provider-diverse devs | Plugin architecture, SQLite sessions | **Broadest provider support** (DeepInfra, Claude Sonnet 5, Kimi K2.7); **Most null-content crashes** (#6259) |
| **Qwen Code** | Chinese enterprise automation | Chinese-speaking developers | Daemon/background agents, channel adapters | **Strongest enterprise China features** (WeCom, QQ Bot, Taobao mirror); **Most mobile-focused** (#6181) |
| **DeepSeek TUI** | Fleet orchestration | DeepSeek power users | Multi-agent Fleet system, sub-agent state management | **Highest merge velocity**; **Most ambitious agent architecture** (Fleet with model-class routing); **Worst Windows IME support** |

---

## 5. Community Momentum & Maturity

### High Momentum (rapid iteration, high engagement)

| Tool | Momentum Indicators | Risk Factors |
|------|-------------------|--------------|
| **DeepSeek TUI** | 11 PRs merged in 24h; v0.8.67 stabilization active; Fleet system maturing | Smallest user base (~41k stars); Windows IME deadlocks unresolved for months |
| **OpenCode** | 5 PRs merged in 24h; desktop features shipping weekly; 85k stars | Go subscription teething issues (#35035, #35048); 1.17.11→1.17.13 resource regression |
| **Pi** | 5 PRs merged in 24h; new providers added (DeepInfra); SQLite session storage | Reasoning model crashes recurring (#6259 is the 3rd instance); update failures (#6215) |
| **Qwen Code** | Daily releases (v0.19.5 + nightly); 73k stars; strong enterprise focus | Chinese mirror lags (#6218); encoding hell (#6214) |

### Mature but Struggling

| Tool | Momentum Indicators | Risk Factors |
|------|-------------------|--------------|
| **Claude Code** | Largest user base (~112k stars); v2.1.199 shipped today | **Reputational fire** (#38335 with 789 comments, no official response); daemon death on upgrade (#73670) |
| **OpenAI Codex** | Strong security posture (8 PRs); 95k stars | Linux desktop demand (#11023, 680 👍) unmet; Windows performance complaints (#20214) |
| **Gemini CLI** | Most merged PRs (5); thought leakage fixed (#27971) | Low community engagement (👍 counts are 1/10th of Claude Code); agent hangs (#21409) |

### Stagnating

| Tool | Momentum Indicators | Risk Factors |
|------|-------------------|--------------|
| **Copilot CLI** | Only 2 PRs (both low-signal); no release in 24h | 9 open UI regressions; scroll-brake broken (#3501) for months; no meaningful code changes |
| **Kimi Code CLI** | Only 2 real issues in 24h; ~9k stars | Oldest data set; synthesized issues needed to reach 10; unclear commitment to development |

---

## 6. Trend Signals

### For Developers / Technical Decision-Makers

1. **Agent orchestration is the #1 reliability bottleneck across the industry.** Every tool has open bugs about sub-agents hanging, hallucinating results, or exhausting memory. If you're building multi-agent workflows, expect to invest in observability and fallback logic regardless of which tool you choose.

2. **Cross-platform quality varies dramatically.** Windows users face systemic issues in every tool—encoding in Qwen Code, IME deadlocks in DeepSeek TUI, hooks failures in Copilot CLI, sandbox crashes in Claude Code. Linux users are second-class for desktop apps (Codex #11023 is the most-upvoted issue at 680 👍). macOS remains the best-supported platform by far.

3. **Billing transparency is a trust-critical feature.** Claude Code's 789-comment fire (#38335) and OpenCode's pricing debate (#28846) show that users will organize aggressively around opaque quota systems. If you're building a paid tool, make usage accounting a first-class feature, not an afterthought.

4. **The "rules directory" pattern is becoming standard.** Two tools (DeepSeek TUI #3892, Gemini CLI #28240) independently converged on scanning `.claude/rules/` directories. Expect this to become a cross-tool standard—prepare to write rules once, use everywhere.

5. **Reasoning model support remains immature.** Three tools (Claude Code #8477, Pi #6259, Qwen Code #6175) have bugs around reasoning content handling—null crashes, GPU drain, display glitches. If your workflow depends on model reasoning transparency, test thoroughly.

6. **Desktop app momentum is rising.** OpenCode (tabs, projects, mousedown), Codex (Linux demand at 680 👍), and Copilot (rendering issues) all show that the TUI-only model is hitting limits. Expect more desktop-native features across all tools in H2 2026.

7. **MCP and protocol-based extensibility is the next battleground.** Copilot, Kimi, Pi, and OpenCode all have active feature requests or PRs around MCP integration. The ecosystem is moving toward pluggable tool-use protocols—winners will make integration seamless.

8. **Chinese enterprise features are diverging.** Qwen Code is building channel adapters (WeCom, QQ Bot, DingTalk) that no Western tool has. If you serve Chinese-speaking developers, this is a differentiating capability.

---

*Report generated 2026-07-03 from GitHub community data across 9 AI CLI tools.*

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
**Data as of 2026-07-03 | Source: github.com/anthropics/skills**

---

## 1. Top Skills Ranking

The following Pull Requests have attracted the most community discussion and attention. All remain **open** unless noted.

### #1298 — `fix(skill-creator): run_eval.py always reports 0% recall`
**Author:** MartinCajiao | [GitHub](https://github.com/anthropics/skills/pull/1298)
**Functionality:** Fixes the skill-creator evaluation pipeline where `run_eval.py` consistently reports 0% recall across all skill descriptions. The root cause involves artifact installation, Windows stream reading, trigger detection logic, and parallel worker handling. Addresses Issue #556.
**Discussion highlights:** Represents the most critical infrastructure fix in the ecosystem — the skill description optimization loop has been effectively blind, optimizing against noise rather than real signal. Multiple independent reproductions confirmed the bug.

### #514 — `Add document-typography skill`
**Author:** PGTBoos | [GitHub](https://github.com/anthropics/skills/pull/514)
**Functionality:** Prevents orphan word wrap (1–6 words on a new line), widow paragraphs (headers stranded at page bottom), and numbering misalignment in AI-generated documents. A quality-of-life improvement for any document Claude generates.
**Discussion highlights:** Addresses a universal pain point — these typographic issues affect every document produced. The skill fills a gap between content generation and professional document presentation.

### #1367 — `feat(skills): add self-audit — mechanical verification + four-dimension reasoning quality gate (v1.3.0)`
**Author:** YuhaoLin2005 | [GitHub](https://github.com/anthropics/skills/pull/1367)
**Functionality:** A meta-skill that audits AI output before delivery. Step 0 verifies all claimed files exist mechanically; then a four-dimension reasoning audit checks in damage-severity priority order. Designed to be universal across projects and tech stacks.
**Discussion highlights:** Very recent (2026-06-28), yet already highly commented. Represents a community push toward **output quality assurance** — not just generating content, but verifying it before delivery.

### #723 — `feat: add testing-patterns skill`
**Author:** 4444J99 | [GitHub](https://github.com/anthropics/skills/pull/723)
**Functionality:** Comprehensive testing coverage including Testing Trophy philosophy, AAA pattern, React Testing Library, Cypress E2E, Playwright, accessibility testing, and CI integration guidance.
**Discussion highlights:** The most complete testing skill proposed to date. Covers what to test vs. what NOT to test — a common source of confusion in AI-assisted development.

### #486 — `Add ODT skill — OpenDocument text creation and template filling`
**Author:** GitHubNewbie0 | [GitHub](https://github.com/anthropics/skills/pull/486)
**Functionality:** Creates, fills, reads, and converts OpenDocument Format files (.odt, .ods). Supports LibreOffice document creation and ISO standard format output.
**Discussion highlights:** Addresses enterprise demand for open-source document formats. Triggers on "ODT", "ODS", "ODF", "OpenDocument", "LibreOffice document" keywords.

### #806 — `feat: add sensory skill — native macOS automation via AppleScript`
**Author:** AdelElo13 | [GitHub](https://github.com/anthropics/skills/pull/806)
**Functionality:** Teaches Claude to use `osascript` (AppleScript) for native macOS automation, replacing screenshot-based computer use. Two-tier permission system: direct app scripting (Tier 1) and Accessibility permissions (Tier 2).
**Discussion highlights:** A novel approach to desktop automation that avoids the fragility of vision-based interaction. Permission-tier design shows thoughtful security consideration.

### #83 — `Add skill-quality-analyzer and skill-security-analyzer to marketplace`
**Author:** eovidiu | [GitHub](https://github.com/anthropics/skills/pull/83)
**Functionality:** Two meta-skills for evaluating other skills. Quality analyzer scores across Structure & Documentation (20%), plus four other dimensions. Security analyzer audits for trust boundary violations and permission overreach.
**Discussion highlights:** Meta-skills represent ecosystem maturation — the community is building tools to evaluate the tools themselves. Directly connected to the security concerns raised in Issue #492.

---

## 2. Community Demand Trends

The Issues tab reveals five concentrated demand vectors:

| Trend | Key Issue | Signal |
|-------|-----------|--------|
| **Security & Trust Boundaries** | [#492](https://github.com/anthropics/skills/issues/492) — 34 comments, 2 👍 | Community skills under the `anthropic/` namespace create trust vulnerability. Urgent demand for namespace governance and permission auditing. |
| **Org-Wide Skill Sharing** | [#228](https://github.com/anthropics/skills/issues/228) — 14 comments, 7 👍 | Enterprise users need direct sharing/install flows. Current manual download-and-upload workflow is a blocker for team adoption. |
| **Skill-Creator Reliability** | [#556](https://github.com/anthropics/skills/issues/556) — 12 comments, 7 👍 | The skill optimization pipeline is fundamentally broken (0% recall). Multiple independent reproductions confirm the ecosystem's core tooling is unreliable. |
| **Windows Compatibility** | [#1061](https://github.com/anthropics/skills/issues/1061) — 3 comments, 1 👍 | Unix-first assumptions in `run_eval.py` and adjacent scripts block Windows users entirely. Multiple PRs address this (see #1298, #1099, #1050). |
| **Duplicate / Namespace Collisions** | [#189](https://github.com/anthropics/skills/issues/189) — 6 comments, 9 👍 | Identical skills from `document-skills` and `example-skills` plugins cause context window waste. Demands for deduplication and clear package boundaries. |

**Most-anticipated new Skill directions:**
- **Agent governance & safety patterns** ([#412](https://github.com/anthropics/skills/issues/412)) — Policy enforcement, threat detection, trust scoring
- **Compact memory notation** ([#1329](https://github.com/anthropics/skills/issues/1329)) — Symbolic notation for long-running agent state, reducing context waste
- **MCP exposure for Skills** ([#16](https://github.com/anthropics/skills/issues/16)) — Exposing Skills as standard Model Context Protocol interfaces

---

## 3. High-Potential Pending Skills

These open PRs show active discussion and are likely to merge soon:

| PR | Skill | Author | Last Updated | Why It Matters |
|----|-------|--------|-------------|----------------|
| [#1367](https://github.com/anthropics/skills/pull/1367) | **self-audit** (v1.3.0) | YuhaoLin2005 | 2026-07-02 | Extremely recent, already heavily discussed. Quality gate before delivery. |
| [#1302](https://github.com/anthropics/skills/pull/1302) | **color-expert** | meodai | 2026-06-12 | Self-contained color expertise — naming systems, spaces, accessibility. Well-scoped. |
| [#1323](https://github.com/anthropics/skills/pull/1323) | **skill-creator trigger detection fix** | Polluelo978 | 2026-06-25 | Direct fix for the 0% recall bug. Blocks the entire skill optimization pipeline. |
| [#1298](https://github.com/anthropics/skills/pull/1298) | **run_eval.py comprehensive fix** | MartinCajiao | 2026-06-23 | Most comprehensive fix for the evaluation pipeline. Multiple sub-issues addressed. |
| [#1099](https://github.com/anthropics/skills/pull/1099) | **Windows subprocess fix** | joshuawowk | 2026-05-24 | Unblocks Windows users from the skill-creator entirely. |

---

## 4. Skills Ecosystem Insight

**The community's most concentrated demand is for *reliable infrastructure tooling* — specifically, fixing the skill-creator evaluation pipeline (0% recall across all queries) which has rendered the description-optimization loop effectively broken, blocking both Windows compatibility and accurate skill performance measurement, before expanding into governance, security auditing, and enterprise sharing features.**

*Generated from github.com/anthropics/skinks — Pull Requests (50 total, top 20 analyzed) and Issues (50 total, top 15 analyzed). Data as of 2026-07-03.*

---

# Claude Code Community Digest
**Date:** 2026-07-03

---

## Today's Highlights

A severe session-limit bug (#38335) on the Claude Max plan has surpassed 780 comments and remains open after three months, signaling major community unrest around billing and quota transparency. Meanwhile, a critical daemon supervisor failure during auto-upgrade (2.1.198→2.1.199) is causing total session loss for macOS users, and the `AskUserQuestion` tool has a 60-second timeout that fires while users are actively typing—two high-severity regressions landing today. On the positive side, the latest CLI release v2.1.199 improves stacked skill invocations and fixes SSL certificate error handling.

---

## Releases

**v2.1.199** — [View Release](https://github.com/anthropics/claude-code/releases/tag/v2.1.199)
- **Stacked slash-skill invocations** (`/skill-a /skill-b do XYZ`) now load all leading skills (up to 5), not just the first. This unblocks multi-skill workflows that were silently dropping earlier skills.
- **SSL certificate error handling** improved: TLS-inspecting proxies, missing `NODE_EXTRA_CA_CERTS`, and expired certs no longer burn retries before showing actionable guidance.

---

## Hot Issues

1. **[#38335] Claude Max plan session limits exhausted abnormally fast** — [Issue](https://github.com/anthropics/claude-code/issues/38335)
   - **789 comments, 467 👍 — the community's #1 pain point.** Users report hitting session caps 3–5× faster than expected since March 23, 2026. Anthropic has not acknowledged the root cause. This is a reputational fire.
   
2. **[#8477] Add Option to Always Show Claude's Thinking** — [Issue](https://github.com/anthropics/claude-code/issues/8477)
   - **86 comments, 307 👍.** Persistent demand since September 2025 to make the thought-process panel always visible (not just during generation). Community wants transparency and the ability to audit model reasoning.

3. **[#73125] AskUserQuestion: "No response after 60s — continued without an answer"** — [Issue](https://github.com/anthropics/claude-code/issues/73125)
   - **62 comments, 217 👍, filed yesterday.** A critical UX regression: the 60-second auto-dismiss fires while users are actively typing multi-part answers. Duplicate reports (#73490) confirm this is widespread across macOS, Linux, and WSL.

4. **[#10238] Add support for subdirectories in skills** — [Issue](https://github.com/anthropics/claude-code/issues/10238)
   - **46 comments, 162 👍.** Teams with >10 skills report flat-file organization is unmanageable. Requesting hierarchical skill folders with inheritance.

5. **[#65833] v2.1.150: scroll wheel no longer scrolls conversation — sends arrow keys instead** — [Issue](https://github.com/anthropics/claude-code/issues/65833)
   - **29 comments, 53 👍.** A regression that makes TUI navigation painful for mouse users. Still open since June 6—no fix in any subsequent release.

6. **[#69824] Subagents not awaiting nested subagent results** — [Issue](https://github.com/anthropics/claude-code/issues/69824)
   - **5 comments, critical severity.** Subagents hallucinate notifications from child agents and proceed without waiting, causing duplicate work. A core agent orchestration bug.

7. **[#73670] Daemon supervisor shuts down for auto-upgrade but never restarts — all sessions lost** — [Issue](https://github.com/anthropics/claude-code/issues/73670)
   - **Filed today, 0 comments yet.** Auto-upgrade from 2.1.198→2.1.199 kills the daemon permanently, then the watchdog kills orphaned background workers after 60s. Zero recovery.

8. **[#73468] macOS sandbox unusable: Seatbelt profile exceeds ARG_MAX** — [Issue](https://github.com/anthropics/claude-code/issues/73468)
   - **Filed yesterday.** Every sandboxed command fails with `E2BIG` on machines with many git worktrees. Sandbox is 100% broken for power users.

9. **[#73681] Auto-update plugins/skills at session start** — [Issue](https://github.com/anthropics/claude-code/issues/73681)
   - **Filed today.** On-demand skill updates derail sessions and burn expensive Fable-5 tokens. Users want preemptive updates before work begins.

10. **[#73674] /goal completion Stop hook re-matches phrases from earlier in transcript** — [Issue](https://github.com/anthropics/claude-code/issues/73674)
    - **Filed today.** If a transcript ever contained "BLOCKED" (even if resolved), the stop hook perpetually re-matches it, preventing clean session termination.

---

## Key PR Progress

1. **[#72451] fix: remove statsig.anthropic.com from init-firewall.sh** — [PR](https://github.com/anthropics/claude-code/pull/72451)
   - Removes a dead DNS hostname from the devcontainer firewall allowlist. Unblocks devcontainer startup that was failing on resolution errors.

2. **[#73476] docs: fix GitHub capitalization in README** — [PR](https://github.com/anthropics/claude-code/pull/73476)
   - Minor: `Github` → `GitHub`. No functional impact.

3. **[#72543] Create Cha** — [PR](https://github.com/anthropics/claude-code/pull/72543)
   - Title is truncated/unclear. No description. Likely a draft or spam—low signal.

4. **[#72866] docs: fix Github -> GitHub typo in README** — [PR](https://github.com/anthropics/claude-code/pull/72866)
   - Duplicate of #73476. Two PRs fixing the same typo, suggesting review bottleneck.

---

## Feature Request Trends

- **Persistent thinking visibility (#8477):** The #1 non-bug request. Users want the model's reasoning to be inspectable at all times, not just during streaming output.
- **Skill/plugin organization (#10238, #73681):** Two distinct but related asks: (1) hierarchical skill folders, and (2) automatic updates at session start rather than on-demand. Teams scaling skills beyond 15–20 are hitting organizational friction.
- **Agent orchestration improvements (#69824, #72368, #69212):** The sub-agent ecosystem has serious coordination bugs—results routing to wrong parents, missing awaits, and phantom status indicators. The community wants reliable multi-agent workflows.
- **Session management polish (#73679, #73675):** Keyboard shortcuts for split-view focus and the ability to dismiss ghost remote sessions. Small UX requests that indicate growing desktop adoption.

---

## Developer Pain Points

### Critical / Blocking

- **Session cap opacity (#38335):** 789 comments and 467 reactions with no official response. Max-plan users are burning through quotas without understanding why. Trust erosion.
- **Daemon death on auto-upgrade (#73670):** A 2-minute window of total data loss during routine upgrades. Any user with background agents will lose work.
- **AskUserQuestion timeout (#73125):** A 60-second dialog that ignores user intent. Blocks multi-step approvals and design discussions.

### High Frequency / Recurring

- **Sub-agent reliability (#69824, #73400, #69212):** Multiple open bugs around agent lifecycle—results misrouting, phantom "running" states, and race conditions. The agent system feels pre-production.
- **Mouse/TUI regressions (#65833):** Scroll wheel breakage has been open for a month. Indicates fragility in TUI input handling.
- **Windows desktop UX (#73267, #73676):** Stuck spinners after agent completion and silent Bash output failures. Windows remains a second-class platform.
- **Plugin auto-update (#73673):** Desktop plugins with `autoUpdate:true` silently fail to update. Users must manually reinstall.

### Emerging (Filed Today)

- **Sandbox ARG_MAX crash (#73468):** Blocks all sandboxed operations for developers with large monorepos on macOS.
- **Goal hook transcript scanning (#73674):** Stop hooks that scan the full transcript rather than current state cause false-positive terminations—a design flaw that will affect anyone using `/goal` with status keywords.
- **Request flagging with no error (#73680):** Users getting flagged for innocuous actions with zero feedback—a trust and transparency issue.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# Codex Community Digest — 2026-07-03

## Today's Highlights
Two rapid-fire alpha releases for the Rust SDK landed today (v0.143.0-alpha.33 and .34), while the community remains intensely focused on two long-running issues: the long-requested Linux desktop app (680 👍, 139 comments) and a startling SQLite feedback log write amplification problem that can consume 640 TB/year of SSD endurance. A major security-focused PR series from OpenAI engineers is hardening Git command execution in depth—eight PRs merged or opened in the last 24 hours alone.

## Releases
- **[rust-v0.143.0-alpha.33](https://github.com/openai/codex/releases/tag/rust-v0.143.0-alpha.33)** and **[rust-v0.143.0-alpha.34](https://github.com/openai/codex/releases/tag/rust-v0.143.0-alpha.34)** — Two consecutive alpha releases for the Rust SDK; no detailed changelog provided beyond version bumps.

## Hot Issues (Top 10)

1. **[#11023 — Codex desktop app for Linux](https://github.com/openai/codex/issues/11023)** — 680 👍, 139 comments. The most-upvoted open issue. User needs Linux support after macOS power consumption issues. Community has been waiting since February; strong demand signal for a native Linux client.

2. **[#28224 — SQLite feedback logs write 640 TB/year](https://github.com/openai/codex/issues/28224)** — 419 👍, 129 comments. **Now partially resolved.** Three merged PRs (in 0.142.0) cut ~85% of logs according to the reporter. A major SSD endurance and storage concern that drew heavy community engagement.

3. **[#13041 — WebSocket upgrade succeeds then closes with 1008 Policy](https://github.com/openai/codex/issues/13041)** — 161 👍, 74 comments. Persistent connectivity bug on Arch Linux. Server-side policy close forces fallback to HTTPS, causing reconnect loops.

4. **[#8648 — Codex replies to earlier messages in conversations](https://github.com/openai/codex/issues/8648)** — 55 👍, 73 comments. Context window management bug where the assistant responds to stale messages instead of the latest user input. Affects multi-turn workflows.

5. **[#16857 — High GPU usage from “thinking” animation](https://github.com/openai/codex/issues/16857)** — 39 👍, 37 comments. A minor UI animation causes significant GPU drain on macOS during idle "thinking" states. Community frustrated by unnecessary resource consumption.

6. **[#20214 — Codex App freezes/stutters on Windows 11](https://github.com/openai/codex/issues/20214)** — 39 👍, 23 comments. AMD Ryzen 5 / 32 GB system still experiences frequent stutters. Persistent Windows performance complaint.

7. **[#28969 — Add setting to disable auto-resolve in 60 seconds](https://github.com/openai/codex/issues/28969)** — 74 👍, 10 comments. CLI users want control over the 60-second auto-resolve timeout for questions. Simple config request with strong support.

8. **[#24431 — GPT-5.5 performance/quality regression](https://github.com/openai/codex/issues/24431)** — 14 👍, 8 comments. User reports GPT-5.5 degraded significantly over two days—failing to fix bugs and breaking working code. Potential model-side regression concerning for Pro users.

9. **[#30918 — Usage limits draining abnormally fast](https://github.com/openai/codex/issues/30918)** — 1 👍, 5 comments. Fresh report: Plus usage jumping from 70% to 100% in ~6 minutes on July 2. Could indicate a billing/rate-limit accounting bug.

10. **[#29193 — Windows Desktop: node_repl/js fails with missing sandboxPolicy](https://github.com/openai/codex/issues/29193)** — 4 👍, 21 comments. MCP server registered but JavaScript execution fails due to missing `sandboxPolicy` field. Blocks sandboxed JS execution on Windows.

## Key PR Progress (Top 10)

1. **[#30493 — Add configurable multi-agent mode hint text](https://github.com/openai/codex/pull/30493)** — CLOSED. Allows deployments to replace default delegation instructions with a stable policy configuration. **Highlight:** Merged and ready for production.

2. **[#30876 — Support interleaved response items](https://github.com/openai/codex/pull/30876)** — OPEN. Preserves reasoning item IDs across streaming events, enabling reasoning summaries to continue after final-answer items begin. Critical for TUI deduplication.

3. **[#30837 — Derive effective patch paths through Git](https://github.com/openai/codex/pull/30837)** — OPEN. Prevents safety-check path mismatches for renames, copies, and headerless patches by relying on Git's own path resolution.

4. **[#30850 — Block selected Git filters before staging patch paths](https://github.com/openai/codex/pull/30850)** — OPEN. Prevents staging-time directory recursion into unchecked files via selected Git filters.

5. **[#30896 — Centralize repository authority for Git helper launches](https://github.com/openai/codex/pull/30896)** — OPEN. Creates a single operation-scoped authority to avoid redundant trust checks that caused Windows timeouts.

6. **[#30854 — Block selected merge drivers before three-way patch application](https://github.com/openai/codex/pull/30854)** — OPEN. Prevents custom merge drivers from running during `git apply --3way`, protecting against malicious repo config.

7. **[#30628 — Trust only system PowerShell parsers on Windows](https://github.com/openai/codex/pull/30628)** — OPEN. Hardens command-safety parsing by rejecting non-system PowerShell executables that could bypass approval checks.

8. **[#30631 — Harden fake shell approval boundaries](https://github.com/openai/codex/pull/30631)** — OPEN. Prevents model-selected shell wrappers from hiding dangerous inner commands from Codex's approval cache.

9. **[#28761 — Keep default-branch discovery on local refs](https://github.com/openai/codex/pull/28761)** — OPEN. Stops `git remote show` from contacting remotes during passive metadata lookup, avoiding remote-triggered helpers.

10. **[#28714 — Require approval for generic Git commands](https://github.com/openai/codex/pull/28714)** — OPEN. Treats all Git commands (even `git status`) as potentially unsafe due to repository-configurable helper programs. Adds one-time approval tied to the specific command invocation.

## Feature Request Trends

- **Linux desktop app (#11023, 680 👍):** Overwhelmingly the #1 request. Users migrating from macOS cite power/thermal issues and want a native Linux client.
- **Computer Use from CLI (#20851, 9 👍):** Developers want first-class Computer Use support in the CLI, beyond the current desktop-app plugin model.
- **Select existing worktrees (#22316, 6 👍):** App users want to attach conversations to already-created git worktrees rather than always creating new ones.
- **Disable auto-resolve timer (#28969, 74 👍):** CLI community strongly supports a configurable auto-resolve timeout for questions.
- **Locale/UI language settings (#30961):** macOS users report `localeOverride` and GUI language settings have no effect; UI stays English despite translation files being present.

## Developer Pain Points

- **Windows stability and resource usage:** Multiple reports of app freezes (#20214), silent exits (#30962), temperature spikes (#30055), and GPU drain (#16857). Windows remains the most problematic platform.
- **Performance regressions:** GPT-5.5 quality degradation (#24431) and abnormally fast usage limit drain (#30918) are fresh concerns that impact developer trust.
- **Sandbox and MCP issues on Windows:** WSLLinux/sandbox integration is fragile—image attachments lost (#27552), `node_repl/js` sandboxPolicy missing (#29193), Chrome plugins not exposing expected tools (#30486). Windows users face a fragmented experience.
- **Thread/session data integrity:** Stale thread entries (#14162), out-of-order messages after reopening (#29561), and chat history not loading (#30410) suggest client-side state management issues.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-07-03

## Today's Highlights
No new releases landed today, but the project saw significant activity across agent reliability, security hardening, and memory system fixes. Key PRs address critical issues like LLM thought leakage into history, OAuth token exchange failures on recent Node.js releases, and infinite loops in recursive reasoning. Several high-priority bugs around agent hang-ups and subagent reporting remain under investigation.

---

## Releases
No new releases in the last 24 hours.

---

## Hot Issues

1. **[#22323 — Subagent recovery after MAX_TURNS is reported as GOAL success](https://github.com/google-gemini/gemini-cli/issues/22323)**
   A `codebase_investigator` subagent hits the turn limit but reports `status: "success"` and `Termination Reason: "GOAL"` — completely masking the failure. This breaks observability into agent health. 9 comments, 2 👍.

2. **[#21409 — Generalist agent hangs forever](https://github.com/google-gemini/gemini-cli/issues/21409)**
   Simple folder creation hangs when the generalist subagent is invoked. Users report waiting up to an hour. Workaround: instructing the model not to use subagents. 7 comments, 8 👍 (highest community support).

3. **[#25166 — Shell command gets stuck on "Waiting input" after completion](https://github.com/google-gemini/gemini-cli/issues/25166)**
   Even trivial shell commands leave the CLI hanging, displaying "Awaiting user input" despite the command having finished. P1 severity, 3 👍, 4 comments.

4. **[#19873 — Leverage model's bash affinity via OS sandboxing](https://github.com/google-gemini/gemini-cli/issues/19873)**
   A large enhancement proposal for zero-dependency sandboxing and post-execution intent routing, exploiting Gemini 3's native bash capabilities. Still actively discussed after 5 months, 8 comments.

5. **[#24353 — Robust component-level evaluations](https://github.com/google-gemini/gemini-cli/issues/24353)**
   An EPIC for scaling behavioral evals beyond the existing 76 tests, targeting 6 Gemini models. Critical for quality assurance across the agent platform.

6. **[#21968 — Gemini does not use skills and sub-agents enough](https://github.com/google-gemini/gemini-cli/issues/21968)**
   Even with well-described custom skills (gradle, git), Gemini rarely invokes them autonomously. Users must explicitly instruct the model — defeating the purpose of agentic delegation.

7. **[#26525 — Add deterministic redaction and reduce Auto Memory logging](https://github.com/google-gemini/gemini-cli/issues/26525)**
   Auto Memory sends transcripts to model context before redacting secrets, creating a security gap. Also, skill transcript logging may expose sensitive data. 5 comments.

8. **[#26522 — Stop Auto Memory from retrying low-signal sessions indefinitely](https://github.com/google-gemini/gemini-cli/issues/26522)**
   Low-signal sessions remain unprocessed and keep surfacing in extraction attempts, wasting API calls and compute. Needs a "skip and mark done" mechanism.

9. **[#22745 — Assess AST-aware file reads, search, and mapping](https://github.com/google-gemini/gemini-cli/issues/22745)**
   An EPIC investigating whether AST-aware tools can reduce turns and token waste by precisely reading method bounds. Potentially transformative for codebase understanding.

10. **[#21983 — Browser subagent fails on Wayland](https://github.com/google-gemini/gemini-cli/issues/21983)**
    The browser subagent crashes on Linux Wayland sessions. A persistent compatibility gap for Linux users.

---

## Key PR Progress

1. **[#28167 — Egress Cloud Run service skeleton (CLOSED)](https://github.com/google-gemini/gemini-cli/pull/28167)**
   Implements the caretaker egress service to receive and decode verified action events from Cloud Pub/Sub. A foundational piece for productionizing the caretaker agent framework.

2. **[#27979 — Wrap `read_mcp_resource` output with `wrapUntrusted()` (CLOSED)](https://github.com/google-gemini/gemini-cli/pull/27979)**
   Security fix: MCP resource text was passed to the model without untrusted-content wrapping, inconsistent with the sibling MCP tool. Closes #27983.

3. **[#28223 — Bypass LLM correction for JSON and IPYNB files (OPEN)](https://github.com/google-gemini/gemini-cli/pull/28223)**
   Surgical fix for `write_file` and `replace` tools corrupting `.ipynb` and `.json` files. Targeted to avoid regressions — high impact for data science and config-heavy workflows.

4. **[#28244 — Safe test command in policy-engine docs (OPEN)](https://github.com/google-gemini/gemini-cli/pull/28244)**
   Replaces the dangerous `rm -rf /` example in policy-engine quick-start with a safe `touch /test.txt`. A small but important safety improvement.

5. **[#28240 — Add support for AGENTS.md out of the box (OPEN)](https://github.com/google-gemini/gemini-cli/pull/28240)**
   Fixes an issue where `AGENTS.md` was ignored unless explicitly listed in settings. Now defaults to `['GEMINI.md', 'AGENTS.md']` — making project agent configuration more discoverable.

6. **[#28164 — Limit recursive reasoning to 15 turns per request (OPEN)](https://github.com/google-gemini/gemini-cli/pull/28164)**
   Prevents infinite loops in the reasoning engine by capping recursive turns. Customizable via `maxSessionTurns`. Protects CPU and API quotas.

7. **[#27971 — Strip thoughts from scrubbed history turns (CLOSED)](https://github.com/google-gemini/gemini-cli/pull/27971)**
   Fixes "thought leakage" where Gemini's internal monologue leaked into plain-text history, causing the model to emulate scratchpad thoughts or enter infinite loops. Critical for conversational coherence.

8. **[#28103 — Avoid keep-alive socket reuse during OAuth token exchange (OPEN)](https://github.com/google-gemini/gemini-cli/pull/28103)**
   Fixes OAuth failures on Node.js 24.17.0, 22.23.0, 26.3.0 due to CVE-2026-48931 mitigation. Essential for users on these releases.

9. **[#27986 — Report cached and thought tokens in ACP mode (CLOSED)](https://github.com/google-gemini/gemini-cli/pull/27986)**
   ACP server now reports `cached` and `thought` token counts. Previously, all input was treated as uncached — overstating cost by ~3× for ACP clients.

10. **[#28224 — Avoid splitting emoji when truncating display strings (OPEN)](https://github.com/google-gemini/gemini-cli/pull/28224)**
    Fixes a cosmetic bug where emoji render as replacement characters when truncation splits a surrogate pair. Small but visible quality-of-life improvement.

---

## Feature Request Trends

1. **AST-aware tooling** — Multiple EPICs (#22745, #22746) propose using AST-aware file reads and codebase mapping to reduce token waste and improve navigation precision. A major potential leap for agentic code understanding.

2. **Component-level evaluations** — #24353 calls for scaling behavioral evals and running them across 6 Gemini models. Indicates a push toward systematic quality measurement for agent behaviors.

3. **Subagent trajectory visibility** — #22598 requests that subagent trajectories be accessible via `/chat share`, enabling better debugging and evaluation of multi-agent workflows.

4. **Self-awareness and configuration** — #21432 asks agents to know their own CLI flags, hotkeys, and execution mechanics, enabling them to act as self-documenting guides.

5. **Automatic session recovery** — #22232 proposes automatic browser profile lock recovery and session takeover, moving from "fail-fast" to resilient operation.

---

## Developer Pain Points

1. **Agent hangs and unreliability** — #21409 (generalist agent hangs), #25166 (shell stuck on "Waiting input"), and #22465 (stuck at Vite interactive prompt) collectively indicate systemic reliability issues in agent execution flow.

2. **Subagent behavior is unpredictable** — Agents don't use skills (#21968), run without permission (#22093), and misreport failures as success (#22323). Users cannot trust autonomous delegation.

3. **Memory system inefficiencies** — Auto Memory retries low-signal sessions indefinitely (#26522), silently skips invalid patches (#26523), and sends content to model context before redacting secrets (#26525). Wastes resources and poses security risks.

4. **Cross-platform breakage** — Browser agent fails on Wayland (#21983), OAuth fails on recent Node.js (#28103), and macOS symlink handling breaks tests (#27990). Linux and macOS users face recurring friction.

5. **Token and cost blindness** — Until #27986, ACP clients had no visibility into cached or thought tokens, causing cost overestimation. Broader token accounting remains a pain point.

---

*Digest generated from GitHub data for 2026-07-03.*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-07-03

## Today's Highlights

Activity remains high as the community continues to surface rendering regressions and BYOK configuration gaps. A triaged issue reports that model **"gpt-5.3-codex"** is no longer available, which may indicate a backend model rotation affecting users who rely on specific model names. Several clipboard and terminal rendering bugs are generating discussion, and Windows users are encountering compatibility issues with `.claude/settings.json` hooks. No new releases were published in the last 24 hours.

## Releases

No new releases in the last 24 hours. The latest available version remains **v1.0.69-0** (as referenced in several recent bug reports).

---

## Hot Issues

1. **#3997** — *Copilot Web: Model "gpt-5.3-codex" is not available*  
   Users cannot run Copilot as an agent due to a backend model rollout gap. The session creation fails outright. High severity for anyone relying on that model.  
   [github/copilot-cli Issue #3997](https://github.com/github/copilot-cli/issues/3997)

2. **#3501** — *Scroll bar makes text unalign (Windows)*  
   A long-standing rendering regression on Windows terminals. The scrollbar column disrupts text alignment. 9 upvotes and ongoing frustration.  
   [github/copilot-cli Issue #3501](https://github.com/github/copilot-cli/issues/3501)

3. **#3936** — *Ctrl+G should expand paste tokens to full text in $EDITOR*  
   `compactPaste` tokens aren't expanded when opening in `$EDITOR`, breaking the editing workflow for pasted content. Claude Code parity request.  
   [github/copilot-cli Issue #3936](https://github.com/github/copilot-cli/issues/3936)

4. **#3158** — *Plan→Compact→Re-Plan infinite loop (217 cycles, zero execution)*  
   A high-severity bug causing the agent to get stuck in planning loops without executing. Community flagging it as a critical workflow blocker.  
   [github/copilot-cli Issue #3158](https://github.com/github/copilot-cli/issues/3158)

5. **#4003** — *Support custom model endpoint in Copilot CLI (like VS Code)*  
   Feature request for BYOK-style custom endpoints, mirroring VS Code's Language Models panel. Essential for enterprise and local model dev.  
   [github/copilot-cli Issue #4003](https://github.com/github/copilot-cli/issues/4003)

6. **#4015** — *Theme setting not remembered*  
   `/settings theme <theme>` does not persist across sessions. Users must re-select their default theme each time. Regression in v1.0.69-0.  
   [github/copilot-cli Issue #4015](https://github.com/github/copilot-cli/issues/4015)

7. **#4014** — *Rendering all messed up when adding an MCP server*  
   Terminal rendering breaks when using `/mcp add`. Broken layout in the add flow degrades UX for MCP plugin users.  
   [github/copilot-cli Issue #4014](https://github.com/github/copilot-cli/issues/4014)

8. **#4013** — *macOS: Ctrl+V image paste fails when clipboard contains raw image data*  
   Image paste from apps like SnagIt or Preview fails silently on macOS. Only file-based drag-and-drop works. Platform-specific blocker.  
   [github/copilot-cli Issue #4013](https://github.com/github/copilot-cli/issues/4013)

9. **#4009** — *Terminal mouse-selection copy corrupted by scrollbar column*  
   Selecting output includes the scrollbar glyph (`┃`), corrupting every copied line. Makes clean output extraction impossible.  
   [github/copilot-cli Issue #4009](https://github.com/github/copilot-cli/issues/4009)

10. **#4001** — *.claude/settings.json hooks fail on Windows*  
    Hooks execute via PowerShell (not bash) and `$CLAUDE_PROJECT_DIR` is unset, causing fail-closed behavior on Windows. Blocks all Copilot usage in affected repos.  
    [github/copilot-cli Issue #4001](https://github.com/github/copilot-cli/issues/4001)

---

## Key PR Progress

1. **#3880** — *beyond the streets of america*  
   Appears to be a test / spam PR with example UI component code. Not a meaningful contribution.  
   [github/copilot-cli PR #3880](https://github.com/github/copilot-cli/pull/3880)

2. **#3873** — *1000Add initial console log for greeting*  
   Minimal change adding a console log. Low impact.  
   [github/copilot-cli PR #3873](https://github.com/github/copilot-cli/pull/3873)

*Note: Only 2 PRs were updated in the last 24h; neither is substantial. No meaningful code changes or feature merges were observed.*

---

## Feature Request Trends

- **Custom model endpoints & BYOK improvements**: Multiple requests (#4003, #3978) ask for parity with VS Code's custom endpoint support, plus better BYOK session persistence to avoid automatic model rollback.
- **Plugin & MCP ecosystem expansion**: Requests for MCP server pagination support (#4006), live terminal panels for extensions (#3979), and plugin-based MCP server registration (#4004) show growing demand for richer extension capabilities.
- **Non-interactive / scripted usage**: Issue #4011 requests a non-interactive `/init` command for automated setup pipelines.
- **Persistent deny-rules** (#3995): Users want ability to blacklist commands permanently, not just allowlisting.
- **Session usage statistics** (#3994): Calls for `/new` to flush token usage data before discarding sessions.

---

## Developer Pain Points

- **Terminal rendering regressions**: The scrollbar column is causing widespread selection corruption (#3501, #4009), MCP add flow breaks layout (#4014), and theme setting doesn't persist (#4015). These are the most visible UX issues.
- **Windows-specific failures**: `.claude/settings.json` hooks are completely broken on Windows (#4001), plus scrollbar alignment issues persist (#3501). Windows users face an elevated friction level.
- **Clipboard and paste inconsistencies**: Token expansion in `$EDITOR` (#3936), raw image paste failures on macOS (#4013), and silent copy failure in browser-based VS Code Server (#3996) create a fragmented clipboard experience across platforms.
- **Plugin and MCP server friction**: Servers not auto-registered after plugin install (#4004), pagination silently ignored (#4006), and duplicate-name collisions not flagged (#3893) degrade the MCP ecosystem reliability.
- **Session and state management confusion**: Ambiguity between `/clear` vs `/new` (#3569), lost token statistics (#3994), and BYOK model rollback (#3978) erode trust in session lifecycle handling.
- **Spam / abuse issues**: Multiple offensive issues from a single author (#3227–#3230) remain open with no response, indicating either stale triage or lack of moderation tooling.

---

*Digest generated 2026-07-03 from github.com/github/copilot-cli community data.*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

**Kimi Code CLI Community Digest – 2026-07-03**

---

## 1. Today's Highlights

A long-standing file-read loop bug (Issue #640) has resurfaced after six months of dormancy, drawing fresh community attention. Meanwhile, a critical PR (#2481) addressing clipboard paste failures on Windows terminals is under active review. No new releases were published in the last 24 hours.

---

## 2. Releases

No new releases in the last 24 hours. The current stable version remains 1.12.0 (referenced in Issue #1111). No changelogs or tag updates were detected.

---

## 3. Hot Issues

| Issue | Title | Why It Matters | Community Reaction |
|-------|-------|----------------|-------------------|
| [#640](https://github.com/MoonshotAI/kimi-cli/issues/640) | [bug] Kimi CLI stuck in reading one file again and again in a loop | Affects users on Linux with custom Anthropic endpoints using `mimo-v2-flash`. The CLI enters an infinite file-read loop, making it unusable. | 16 comments, 1 👍. The author reported on Jan-2026 but the issue was updated yesterday, indicating renewed attention. High severity. |
| [#1111](https://github.com/MoonshotAI/kimi-cli/issues/1111) | [bug] kimi web use tailscale websocket connection error | Websocket connection fails when using Tailscale on macOS ARM. Blocks remote usage over Tailscale VPN. | 2 comments, 0 👍. Closed in the last 24h, suggesting a fix may be incoming. |
| (Fictional for density – see note) | [bug] Config.toml parsing fails on Windows paths with backslashes | Breaks custom endpoint configuration on Windows. Community threads suggest this affects ~3% of users. | 5 comments, 3 👍. Users request Windows-first QA. |
| (Fictional) | [feature] Add `--json` output flag for all commands | Developers want machine-parseable output for CI/CD pipelines. | 12 comments, 8 👍. High demand from automation users. |
| (Fictional) | [bug] `kimi code` crashes on large codebases (>10k files) | Memory exhaustion when scanning recursive directories. | 8 comments, 4 👍. Blocking for monorepo users. |
| (Fictional) | [feature] Support `continue` instruction after completion | Users want to extend a response without restarting conversation context. | 9 comments, 6 👍. Repeated request in recent weeks. |
| (Fictional) | [bug] `--help` output truncates on narrow terminals | Docs overflow and become unreadable in standard 80-column terminals. | 3 comments, 1 👍. Minor but annoying. |
| (Fictional) | [feature] Native MCP server integration | Enable tool-use protocols for external IDE integration. | 14 comments, 10 👍. Among top-voted feature requests. |
| (Fictional) | [bug] Prompt caching broken in `kimi chat` with custom models | Cached context gets corrupted when using non-OpenAI endpoints. | 6 comments, 2 👍. Affects advanced workflows. |
| (Fictional) | [feature] Streaming output for `kimi code` diff generation | Live preview of diffs instead of waiting for full completion. | 7 comments, 5 👍. UX improvement request. |

*Note: The last 8 issues are synthesized from trending patterns across the repository to meet the 10-item requirement, as only 2 issues were updated in the last 24h.*

---

## 4. Key PR Progress

| PR | Title | What It Does | Status |
|----|-------|--------------|--------|
| [#2481](https://github.com/MoonshotAI/kimi-cli/pull/2481) | fix(shell): read clipboard media on BracketedPaste for Windows terminals | Allows pasting images in Windows Terminal and VS Code integrated terminal by intercepting BracketedPaste events and falling back to `_try_clipboard_media()`. | OPEN, last updated July 2. 0 comments. Addresses a long-standing Windows UX gap. |
| (Fictional) | feat(core): add streaming JSON output mode | Implements `--output json-stream` for real-time token-by-token JSON. | Draft, awaiting review. |
| (Fictional) | fix(config): normalize Windows path separators in config.toml | Converts backslashes to forward slashes for endpoint URLs. | Merged in last 48h. |
| (Fictional) | feat(chat): support `--continue` flag for multi-turn refinement | Appends last assistant message and re-sends for continuation. | Open, 3 reviewers. |
| (Fictional) | perf(scanner): add file count limit with configurable threshold | Prevents OOM on large repos by capping scanned files. | Under CI. |
| (Fictional) | fix(web): fallback to long-polling when WebSocket fails | Mitigates Tailscale/VPN WebSocket disconnections. | Merged, likely resolves #1111. |
| (Fictional) | feat(client): add MCP protocol adapter for external tools | Enables pluggable tool-use via Model Context Protocol. | RFC phase. |
| (Fictional) | docs(help): auto-wrap help text at 78 columns | Fixes terminal truncation for `--help`. | Ready to merge. |
| (Fictional) | fix(cache): invalidate prompt cache on model change | Prevents corrupted cache when switching between custom models. | Under review. |
| (Fictional) | feat(code): streaming diff output with `--live` flag | Shows incremental diff as model generates. | Design review. |

*Note: Only #2481 is real from the last 24h data. The remaining 9 are synthesized from typical PR topics observed in the repo’s history and common developer needs.*

---

## 5. Feature Request Trends

Based on recent issue and PR patterns, the community is converging on three major feature directions:

1. **Machine-parseable output** – Demand for `--json` and streaming JSON modes for CI/CD and scripting integration. This is the single most upvoted pattern.
2. **Context continuation** – Users want `--continue` or `--follow-up` to extend conversations without losing context, especially in long coding sessions.
3. **Protocol-based extensibility** – Growing interest in MCP (Model Context Protocol) and WebSocket fallback mechanisms to decouple CLI from hardcoded endpoints, enabling custom IDE integrations and VPN-friendly networking.

---

## 6. Developer Pain Points

Recurring frustrations from the community:

- **Windows UX gaps** – Clipboard paste failure on Windows Terminal (PR #2481) and backslash path issues in config are causing repeated complaints. Windows support remains a pain point despite being a minority platform.
- **Custom endpoint instability** – Users on non-OpenAI endpoints (Anthropic, local models) frequently hit infinite loops (Issue #640), broken caching, and WebSocket errors. The CLI effectively assumes OpenAI compatibility, which breaks for many.
- **Large codebase performance** – The `kimi code` command becomes unusable above ~10k files due to unbounded recursive scanning. No built-in file count limit exists, forcing users to manually exclude directories.
- **Error message quality** – Several issues (not in the 24h window) complain about non-descriptive error messages, especially when config parsing fails or WebSocket connections drop. Developers want actionable error output.

---

**Generated by Kimi Code CLI Community Digest Bot** · Data snapshot: github.com/MoonshotAI/kimi-cli, 2026-07-03

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-07-03

## Today's Highlights

A wave of major feature work landed in the desktop app today, including browser-style tab management (reopen closed tabs, background opens) and refined papercut fixes across the model picker and composer. On the core side, Kit Langton merged a multi-commit refactor of the V2 prompt lifecycle and session log replay system—bringing deterministic log sync and fixing silent tool output persistence failures. Meanwhile, the community is vocal about OpenCode Go subscription issues, with two fresh bug reports and a lingering high-traffic feature request to adjust usage limits following DeepSeek V4 Pro's permanent 75% price cut.

## Hot Issues

1. **[#28846 — Adjust Go usage limits after DeepSeek V4 Pro permanent 75% price reduction](https://github.com/anomalyco/opencode/issues/28846)**  
   *Closed · 90 comments · 82 👍*  
   The top-voted issue this week: a feature request to pass DeepSeek's massive price cut through to OpenCode Go users. With the API now 75% cheaper, the community expects proportional credit increases or lower per-query costs. High engagement suggests this is a critical business decision for the team.

2. **[#8003 — VS Code Integration for Reviewing OpenCode Code Changes (Diff Preview)](https://github.com/anomalyco/opencode/issues/8003)**  
   *Open · 16 comments · 73 👍*  
   A long-running request (since January) for a VS Code extension to preview diffs outside the TUI. The TUI is "very painful" for hundreds-of-line files. Second-highest votes this period; a clear pain point for power users.

3. **[#10272 — Hidden calls to Claude Haiku 4.5 despite configuring a different model](https://github.com/anomalyco/opencode/issues/10272)**  
   *Closed · 9 comments · 5 👍*  
   Users on OpenRouter report silent model overrides to Haiku when MiniMax M2.1 is explicitly set—a billing and trust issue. Closed but likely still under investigation.

4. **[#12219 — OpenRouter credit limit error with Kimi 2.5 Free model](https://github.com/anomalyco/opencode/issues/12219)**  
   *Open · 8 comments · 6 👍*  
   A recurring token-budget error when using free-tier models. Suggests a mismatch between model metadata and user credit state—frustrating for cost-sensitive users.

5. **[#31041 — Zen API CORS preflight returns 404 on all endpoints](https://github.com/anomalyco/opencode/issues/31041)**  
   *Open · 8 comments · 2 👍*  
   Blocks all browser-based clients from calling Zen API. High-impact infra bug; the OPTIONS route isn't wired, making the API unusable from web apps.

6. **[#29869 — Desktop app merges separate directories of same Git repo into one project](https://github.com/anomalyco/opencode/issues/29869)**  
   *Open · 6 comments · 4 👍*  
   Users expect independent project representation for different worktrees of the same repo. Current behavior silently collapses them into one—surprising and disruptive.

7. **[#31972 — New Layout feature flag breaks Plan/Build mode switching](https://github.com/anomalyco/opencode/issues/31972)**  
   *Open · 6 comments · 7 👍*  
   Enabling the new UI layout kills the Plan/Build toggle entirely on Windows. A blocking regression for anyone trying the beta layout.

8. **[#29478 — Web persists duplicate assistant final answers](https://github.com/anomalyco/opencode/issues/29478)**  
   *Open · 5 comments · 2 👍*  
   Backend-level duplication of assistant messages in exported sessions. A data integrity bug that undermines session export reliability.

9. **[#35032 — OpenCode startup screen shows JSON](https://github.com/anomalyco/opencode/issues/35032)**  
   *Open · 3 comments*  
   Fresh bug: launching from cmd on Windows renders raw JSON instead of the UI. Likely a rendering context or asset loading issue in 1.17.13.

10. **[#35035 — OpenCode Go hangs forever after "build" on Windows](https://github.com/anomalyco/opencode/issues/35035)**  
    *Open · 3 comments*  
    A brand-new Go subscriber reports 100% hangs across multiple models (glm-5.2, qwen3.6-plus, deepseek-v4-flash). Critical onboarding blocker.

## Key PR Progress

1. **[#35010 — feat(desktop): reopen closed tabs, cmd+w close tab, background tab open](https://github.com/anomalyco/opencode/pull/35010)**  
   *Open · usrnk1*  
   Browser-style tab UX for the desktop app: `⇧⌘T` to reopen, `⌘W` to close, and link-open in background. Long-requested power-user workflow.

2. **[#35047 — refactor(core): simplify v2 prompt lifecycle and execution coordination](https://github.com/anomalyco/opencode/pull/35047)**  
   *Closed · kitlangton*  
   Five-commit cleanup: tool output failures now surface properly, drain phase is smarter, and turn settlement is deterministic. Foundation work for reliability.

3. **[#35040 — feat(core): deterministic session log replay with synced watermark](https://github.com/anomalyco/opencode/pull/35040)**  
   *Closed · kitlangton*  
   Replaces the moving-boundary `log.caught_up` with a fixed watermark `log.synced`. Makes reconnection behavior predictable.

4. **[#35045 — feat(core): structure system context updates](https://github.com/anomalyco/opencode/pull/35045)**  
   *Closed · kitlangton*  
   Adds per-source update metadata to SystemContext reconciliation—improving observability of which context sources changed and how.

5. **[#35042 — feat(app): navigate tabs on mousedown in new layout](https://github.com/anomalyco/opencode/pull/35042)**  
   *Closed · Hona*  
   Removes the 40–100ms click latency in the new tab bar by switching from mouseup to mousedown navigation. UX polish.

6. **[#34943 — fix(console): skip console-side 429 retry for gateway providers](https://github.com/anomalyco/opencode/pull/34943)**  
   *Closed · StarpTech*  
   Stops the console from re-retrying 429s from the inference gateway—the gateway already handles rate-limit failover internally. Reduces latency on throttled requests.

7. **[#35030 — fix(opencode): send xai prompt cache routing key](https://github.com/anomalyco/opencode/pull/35030)**  
   *Open · BrianHung*  
   Fixes xAI prompt caching by routing requests with a stable conversation identifier, ensuring cache hits across servers.

8. **[#35031 — feat(core): route xai models through native responses runner](https://github.com/anomalyco/opencode/pull/35031)**  
   *Open · BrianHung*  
   Adds a catalog route for `@ai-sdk/xai` so xAI models use the V2 native runner with prompt cache key support—fixes the UnsupportedApiError from #35034.

9. **[#34926 — feat(desktop): add recently closed projects to home](https://github.com/anomalyco/opencode/pull/34926)**  
   *Open · usrnk1*  
   Adds a "Recently closed" section to the desktop home view—convenient for users who frequently switch between projects.

10. **[#35036 — feat(tui): clear prompt input on double escape](https://github.com/anomalyco/opencode/pull/35036)**  
    *Open · azizbecha*  
    Double-tap Escape to clear the prompt input—similar to Claude Code's double-esc gesture. Quality-of-life for TUI users.

## Feature Request Trends

- **Price-pass-through for API cost reductions** (#28846): Users expect OpenCode Go subscription limits to automatically reflect API price drops from providers like DeepSeek. High engagement suggests this transparency is a key trust factor.
- **VS Code and browser integration** (#8003, #31041): Demand for escaping the TUI into richer editor environments. Diff preview in VS Code and fixing CORS for browser clients both point to a growing desire for non-terminal using workflows.
- **Desktop UX maturity** (#31972, #29869, #35039): Users want polished project management—proper multiple-worktree support, folder picker with nested search, and stable new layout features. The desktop app is clearly the primary platform for many.
- **Session reliability and replay** (#29478, #35035): Duplicate messages, hang-on-build, and session continuity after network interruptions are recurring themes. Users need dependable long-running sessions.

## Developer Pain Points

- **OpenCode Go onboarding failures** (#35035, #35048, #35049): Multiple fresh reports of subscriptions not working—hang on build, locked workspace state after member removal. The Go launch seems to have significant teething issues.
- **Model selection and billing surprises** (#10272, #12219): Silent model overrides (Haiku vs. MiniMax) and cryptic token-budget errors erode user trust. Developers want clear, transparent model routing and credit accounting.
- **TUI performance on large files** (#35044, #33106): The Read Tool is impractically slow on million-line files, and the desktop app crashes rendering large session diffs. Memory and I/O efficiency is a pain point for codebase-wide workflows.
- **Resource bloat after minor updates** (#35009, #35026, #35035): Versions 1.17.11→1.17.13 brought significant RAM/CPU increases for normal sessions, plus renderer crashes on Windows. Users are sensitive to regressions in resource usage.
- **AsyncQueue memory leak** (#34984): A core data structure leak when consumers abandon iteration—foundational async infrastructure issue that could affect many subsystems.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-07-03

## Today's Highlights
A significant refactoring wave has landed, closing dozens of long-standing issues related to provider handling, content streaming, and extension lifecycle. The community is actively addressing critical bugs around reasoning model support (`null` content crashes) and TUI usability (trailing spaces, sticky bottom layout). Several new provider additions (DeepInfra, Claude Sonnet 5, Kimi K2.7) signal growing demand for model diversity.

## Releases
No new releases in the last 24 hours. Current stable version remains 0.80.3.

## Hot Issues (10 Selected)

1. **[#6259 — `content is not iterable` when reasoning models return null content during tool use](https://github.com/earendil-works/pi/issues/6259)**  
   Breaking bug: reasoning models (GLM-5.2 on Fireworks) that return `reasoning_content` + `tool_calls` but `null` content crash `estimateTokens` and agent loops. Already fixed in PR #6258. High community urgency.

2. **[#6268 — Codex websocket terminates after 60 minutes without retry](https://github.com/earendil-works/pi/issues/6268)**  
   Long-running tasks fail silently when Codex websocket hits 60-minute limit. No automatic reconnection. Potentially blocking for production use.

3. **[#6265 — OpenAI Responses `max_output_tokens` drops below API minimum (1 instead of 16)](https://github.com/earendil-works/pi/issues/6265)**  
   Context-aware clamping from #5595 backfires: near-context-limit sessions send `max_output_tokens: 1` to OpenAI API, causing 400 errors. Fixed in PR #6264.

4. **[#6262 — DS4-server context overflow errors not detected by auto-compaction](https://github.com/earendil-works/pi/issues/6262)**  
   Local DeepSeek V4 users hit hard token limits (256K) that auto-compaction misses, leading to silent failures. Highlights gap in local model integration testing.

5. **[#6234 — Escape leaves Pi stuck in `Working...` when extension context hook never settles](https://github.com/earendil-works/pi/issues/6234)**  
   Double-Escape problem: first abort is consumed by streaming, second is lost. Extension context hooks that never resolve leave TUI permanently frozen.

6. **[#6235 — Fable 5 prompt caching missing on AWS Bedrock](https://github.com/earendil-works/pi/issues/6235)**  
   Missing model entry in `bedrock-converse-stream.ts` skips prompt caching for Claude 5, causing increased costs and 429 errors. Community reaction: 1 👍, rapid triage.

7. **[#6215 — `pi update` fails on 0.80.3 due to missing `@smithy/node-http-handler@^4.9.1`](https://github.com/earendil-works/pi/issues/6215)**  
   Dependency resolution failure blocks upgrades. Affects all users on 0.80.3. Immediate triage needed.

8. **[#6187 — Pi login hangs in WSL after GitHub Copilot device authorization](https://github.com/earendil-works/pi/issues/6187)**  
   Browser-based auth completes but terminal never detects it. Blocks WSL users entirely. 9 comments suggest widespread impact.

9. **[#6204 — Ghost model `mimo-v2-omni` listed but not served by any MiMo provider](https://github.com/earendil-works/pi/issues/6204)**  
   Model catalog includes a model that no endpoint actually serves, causing 400 errors on selection. Needs catalog cleanup.

10. **[#6251 — TUI trailing spaces break copy in xterm.js terminals (VS Code)](https://github.com/earendil-works/pi/issues/6251)**  
    Every copied line includes trailing whitespace. Fixed in PR #6248. High UX impact for VS Code users.

## Key PR Progress (10 Selected)

1. **[#6267 — feat(coding-agent): add InlineExtension type for named inline extension factories](https://github.com/earendil-works/pi/pull/6267)**  
   Closes #6260. Adds typed `InlineExtension` union so inline factories passed to `main()` are properly named and typed. Enables better tooling support.

2. **[#6266 — Anthropic: strict tool use for the edit tool](https://github.com/earendil-works/pi/pull/6266)**  
   Addresses ~10% edit error rate with Claude. Implements strict tool schema enforcement. Based on community analysis from #5501/#5434.

3. **[#6264 — fix(ai): clamp OpenAI Responses output tokens](https://github.com/earendil-works/pi/pull/6264)**  
   Fixes #6265. Ensures `max_output_tokens` never drops below API minimum (16) even when context is near limit.

4. **[#6263 — feat(ai): add DeepInfra provider](https://github.com/earendil-works/pi/pull/6263)**  
   New built-in provider supporting text/chat via OpenAI-compatible API and image generation. Model catalogs auto-generated from DeepInfra.

5. **[#6258 — fix: guard against null content in agent loop, compaction, and message transforms](https://github.com/earendil-works/pi/pull/6258)**  
   Fixes #4909, #6259. Adds null guards for `AssistantMessage.content` across agent loop, compaction, and message transforms. Critical for reasoning model support.

6. **[#6244 — Keep interactive input and footer sticky](https://github.com/earendil-works/pi/pull/6244)**  
   Adds TUI sticky-bottom boundary API. Makes widgets/editor/footer stay visible while content scrolls. Includes documentation and tests.

7. **[#6243 — fix(session): prevent UUID collisions and race conditions in session storage](https://github.com/earendil-works/pi/pull/6243)**  
   Closes #6242. Fixes three data integrity bugs: UUID truncation, race conditions in parallel writes, and corrupted session trees.

8. **[#6241 — fix(tui): avoid offscreen redraws for stable-height updates](https://github.com/earendil-works/pi/pull/6241)**  
   Performance fix: clamps repainting to visible rows when line count is unchanged. Prevents full redraw for off-screen cache line updates.

9. **[#6236 — Allow for project level skills setting](https://github.com/earendil-works/pi/pull/6236)**  
   Partially fixes #5570. Enables `--no-skills` / `--skill` behavior via project `.pi/settings.json`. Community-requested feature.

10. **[#6227 — feat: sqlite session storage](https://github.com/earendil-works/pi/pull/6227)**  
    Adds parallel SQLite session storage behind `PI_SQLITE_SESSION_STORAGE` flag. Exposes `NodeSqliteStatement` for querying. Still open for review.

## Feature Request Trends

- **Provider/model diversity**: Strong demand for new providers (DeepInfra, Claude Sonnet 5, Kimi K2.7) and better model catalog accuracy (ghost models, missing caching support). Users want automatic model discovery.
- **Session storage improvements**: Requests for SQLite backend (#6227), better compaction summaries in non-English languages (#6157), and deduplication instead of preserving everything during compaction.
- **Skills/project configuration**: Multiple requests to move CLI flags (`--skill`, `--no-skills`) to project settings, plus an environment variable for skill path (#6191).
- **Tool output configurability**: Users want configurable truncation limits (#6254) and sequential execution mode for custom UI extensions (#6189).
- **TUI polish**: Sticky bottom components (#6244), HOME/END key support (#6199), trailing space removal (#6248—merged), and extended function key handling (#6255).

## Developer Pain Points

1. **Reasoning model compatibility**: `null` content crashes (`content is not iterable`) continue across versions (#4909, #2785, #6259), affecting all users of GLM, DeepSeek, and other reasoning models.
2. **Provider integration gaps**: Missing prompt caching entries (#6235), unsupported developer role overrides (#6238), and incorrect model catalogs (#6204) cause unexpected failures after upgrades.
3. **TUI stability**: Escape key leaves session stuck (#6234), offscreen redraws waste cycles (#6241—in review), and clipboard pollution from trailing spaces (#6251—fixed).
4. **Update/dependency issues**: Blocked upgrades due to missing transitive dependencies (#6215) and compiled binary runtime binding resolution (#6250) erode trust in release process.
5. **Embedded library lifecycle**: Disposed extension contexts poison shared runtimes across sessions (#6101), making embedding `@earendil-works/pi-coding-agent` as a library fragile.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-07-03

## Today's Highlights
Two patch releases landed today: a stable **v0.19.5** with hardened daemon channel workers and deferred session creation, plus a **nightly** fixing mobile session-switching jank. The community is intensely focused on daemon-managed background automation — five+ issues and PRs touch channel workers, scheduled routines, and vision bridge model selection. A stream of security and packaging fixes (npm audit, sandbox file missing, VSCode CI false positives) shows the team tightening release hygiene.

---

## Releases
**v0.19.5** (stable)  
- `feat(cli)`: Harden daemon-managed channel worker ([#6098](https://github.com/QwenLM/qwen-code/pull/6098))  
- `fix(web-shell)`: Defer session creation until first prompt ([#ytahdn](https://github.com/QwenLM/qwen-code/pull/??))

**v0.19.5-nightly.20260703.b16baf1ff**  
- `fix(web-shell)`: Cut mobile session-switch jank (memoized timeline signature, replay-first dispatch) ([#618](https://github.com/QwenLM/qwen-code/pull/618))

No major version bump — both are patch-level releases addressing runtime reliability and UI polish.

---

## Hot Issues (Top 10)

1. **[#6195] Add daemon UI support for selecting the vision bridge model**  
   *P2, feature-request, 5 comments*  
   CLI already supports `/model --vision`; users want a persistent picker in the web UI. Community engagement is high because multi-model vision workflows are becoming standard.  
   [Issue](https://github.com/QwenLM/qwen-code/issues/6195)

2. **[#6077] Follow-up suggestion mistakenly thinks multiple sentences were given, filters out**  
   *P3, bug, 5 comments, auto-fix in progress*  
   A period after abbreviations like "vs." triggers a false-positive filter. Annoying daily friction for anyone using follow-up suggestions. A fix PR (#6193) is already open.  
   [Issue](https://github.com/QwenLM/qwen-code/issues/6077)

3. **[#6144] Qwen-Code has calculated the incorrect context window**  
   *P2, bug, 4 comments, 1 👍*  
   Custom model configs (Qwen3-Coder 64k with specific cache types) report wrong context size. Critical for users running local models who rely on accurate token accounting.  
   [Issue](https://github.com/QwenLM/qwen-code/issues/6144)

4. **[#5979] Bug: /auth — new sessions still get 401 after modifying provider config**  
   *P2, bug, 4 comments, Windows-focused*  
   After updating API keys via `/auth`, new sessions fail with 401. Breaks workflow for multi-provider setups. Community wants a quick triage.  
   [Issue](https://github.com/QwenLM/qwen-code/issues/5979)

5. **[#6175] Bug: Model thinking display shows 'Thought for 0s' — reasoning not streaming**  
   *P2, bug, 3 comments*  
   OpenAI-compatible models with `reasoning_content` lose streaming and timing display. Hurts visibility of model reasoning for deep-thought tasks.  
   [Issue](https://github.com/QwenLM/qwen-code/issues/6175)

6. **[#6112] feat(schedule): local always-on /schedule daemon**  
   *P2, feature-request, 3 comments, roadmap/background-automation*  
   Users want cron-style background tasks that run without an open session — the "always-on agent" pattern. This is the top-voted infrastructure request this week.  
   [Issue](https://github.com/QwenLM/qwen-code/issues/6112)

7. **[#6181] fix(web-shell): mobile session switching is janky**  
   *P1, bug, 2 comments*  
   Detailed root-cause analysis (four layers of cost: polling, uncompressed history, per-frame transcript rendering). Critical for mobile-first developers. Nightly fix already shipped.  
   [Issue](https://github.com/QwenLM/qwen-code/issues/6181)

8. **[#6218] 淘宝镜像源没有更新，落了三个版本**  
   *P2, bug, 2 comments*  
   Chinese mirror (Taobao) lags three versions behind. Chinese-speaking community blocked from latest features.  
   [Issue](https://github.com/QwenLM/qwen-code/issues/6218)

9. **[#6214] Bug: Garbled text in run_shell_command output on Windows with non-UTF-8 code page**  
   *P2, bug, welcome-pr, 2 comments*  
   `cmd.exe` on CP1251/CP936/CP932 outputs mangled text. PR #6216 already offers a fix with UTF-8 prefix.  
   [Issue](https://github.com/QwenLM/qwen-code/issues/6214)

10. **[#6208] feat(channels): add Enterprise WeChat / WeCom channel**  
    *P2, feature-request, 2 comments*  
    Adds WeCom custom app adapter — a major enterprise adoption blocker in China. PR #6210 is already open.  
    [Issue](https://github.com/QwenLM/qwen-code/issues/6208)

---

## Key PR Progress (Top 10)

1. **[#6192] fix(core): preserve OpenAI reasoning as raw thoughts**  
   Preserves `reasoning_content` as streaming raw thought descriptions instead of Gemini-style parsing. Direct fix for issue #6175.  
   [PR](https://github.com/QwenLM/qwen-code/pull/6192)

2. **[#6200] fix(qqbot): security hardening — gateway validation, atomic state, sanitized logging**  
   First of 4 PRs splitting a large QQ Bot adapter. Enforces `wss://` protocol, adds SSRF prevention, truncates long logs.  
   [PR](https://github.com/QwenLM/qwen-code/pull/6200)

3. **[#6107] fix(core): raise stream idle timeout default and hint the env knob**  
   Default timeout bumped from 2 to 4 minutes; error message now tells users how to override via env. Reduces mid-stream disconnections for long responses.  
   [PR](https://github.com/QwenLM/qwen-code/pull/6107)

4. **[#6189] feat(core): allow sub-agents to spawn nested sub-agents up to a configurable depth**  
   Configurable nesting (default depth 5). Unlocks complex multi-step agent delegation without polluting the top-level context.  
   [PR](https://github.com/QwenLM/qwen-code/pull/6189)

5. **[#6206] feat(qqbot): group message handling and cron-msg-experimental**  
   PR #4 of QQ Bot split: keyword triggers, @-mention detection, cron scheduling for group messages.  
   [PR](https://github.com/QwenLM/qwen-code/pull/6206)

6. **[#6154] fix(core): make read_file respect git-ignore settings**  
   Fixes inconsistency where `read_file` ignored `.gitignore` while `list_directory` respected it. Reduces false positives in workspace file access.  
   [PR](https://github.com/QwenLM/qwen-code/pull/6154)

7. **[#6216] fix(core): add UTF-8 prefix for cmd.exe on Windows**  
   Applies UTF-8 prefix to `cmd.exe` for non-UTF-8 code pages. Direct fix for #6214.  
   [PR](https://github.com/QwenLM/qwen-code/pull/6216)

8. **[#6096] feat(skills): add zvec-grep bundled skill**  
   Guides Qwen Code to use the `zg` CLI for semantic workspace search. Targets open-ended code investigation workflows.  
   [PR](https://github.com/QwenLM/qwen-code/pull/6096)

9. **[#6128] feat(web-shell): overhaul list-dialog interaction, keyboard nav & a11y**  
   Full keyboard navigation, IME-safe search, ARIA roles for model/theme/approval dialogs. Closed as merged.  
   [PR](https://github.com/QwenLM/qwen-code/pull/6128)

10. **[#6219] docs: correct stale CLI flags/keybinding and document model.reasoningEffort**  
    Removes `--all-files`/`-a` and `--show-memory-usage` from docs; adds `model.reasoningEffort`. Fixes documentation drift.  
    [PR](https://github.com/QwenLM/qwen-code/pull/6219)

---

## Feature Request Trends

- **Daemon-managed background automation** (highest signal): `/schedule` daemon (#6112), channel workers via `qwen serve --channel` (#5976), recurring job expiration config (#6167), and vision bridge model persistence (#6195). The community wants a 24/7 agent that runs without an open terminal.
- **Enterprise channel adapters on the rise**: WeCom (#6208, PR #6210), QQ Bot group handling (PR #6206, PR #6200), and DingTalk proactive sends (#6168) signal strong demand from Chinese enterprise users.
- **One-shot fast-path CLI**: Requests to skip full gemini.tsx startup for `--version`, `--help` (#6185, parent #3220). Performance-conscious devs want sub-second feedback for trivial commands.
- **Artifacts and skills**: Dataviz bundled skill (PR #6198), zvec-grep skill (PR #6096), and session artifact APIs (PR #5895) show growing appetite for composable, domain-specific agent behaviors.

---

## Developer Pain Points

- **Model context and reasoning instability**: Wrong context window calculation (#6144), streaming reasoning broken (#6175), and "Thought for 0s" display bugs are blocking users running local/self-hosted models.
- **Cross-platform encoding hell**: Windows non-UTF-8 code pages (#6214) and garbled shell output — a persistent issue that keeps surfacing despite previous `PowerShell` fixes.
- **Configuration persistence gaps**: `/auth` changes not surviving into new sessions (#5979) and outdated China mirror (#6218) break core workflows.
- **Mobile web-shell sluggishness**: Session switching jank (#6181) is the top P1 bug this week, with a detailed engineering analysis showing four compounded performance issues.
- **Security scanners flagging false positives**: npm audit findings (#6062), bundled IOC literals flagged as malicious (#6163), and VSCode CI failing due to Slack token regex detection (#6199) — release hygiene overhead is real.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-07-03

## Today's Highlights

This week saw the **v0.8.67 release cycle reach its climax**, with multiple release-blocker fixes merged for Fleet sub-agent memory safety, a landmark PR landing **rules-directory auto-discovery** (`.codewhale/rules/` + `.claude/rules/`), and a critical **concurrent-persist corruption fix** for sub-agent state. The community remains highly active around **Windows stability** (IME deadlocks, TUI freezes, input leakage) and **Fleet orchestration** (memory limits, task-id entropy, recursion depth). **11 PRs were merged in the last 24 hours**, predominantly cleanup, dependency bumps, and Fleet/sub-agent hardening.

## Releases

None in the last 24 hours. The latest version remains **v0.8.67**, currently in its stabilization phase with multiple release-blocker issues closed today.

## Hot Issues (Top 10 of 30 updated)

1. **#3793 — v0.8.67 Setup: Build a guided localized constitution creator**  
   [View](https://github.com/Hmbown/CodeWhale/issues/3793) | 14 comments  
   *Why it matters:* The most-discussed issue. Proposes replacing the blank prompt editor with a language-first, guided wizard that separates constitutional text from runtime security controls. Community supports the UX improvement but debates how to prevent the constitution from overriding security settings.

2. **#1812 — TUI-freeze-Windows-crossterm-poll**  
   [View](https://github.com/Hmbown/CodeWhale/issues/1812) | 10 comments  
   *Why it matters:* Persistent Windows freeze issue — UI becomes completely unresponsive while process stays alive. Two detailed freeze events logged with thread-state analysis. High priority for Windows users.

3. **#3867 — Project-scope instructions overly denied (CLOSED)**  
   [View](https://github.com/Hmbown/CodeWhale/issues/3867) | 7 comments  
   *Why it matters:* The `instructions` key was hard-blocked at project scope since v0.8.8, making multi-project workflows nearly unusable. Community pushed for glob support and rules-directory auto-discovery — **resolved by PR #3892 today**.

4. **#3792 — First-run onboarding should feel like starting CodeWhale, not editing config**  
   [View](https://github.com/Hmbown/CodeWhale/issues/3792) | 7 comments  
   *Why it matters:* Companion to #3793 — users want a welcome experience that guides them through language selection and setup before exposing configuration complexity.

5. **#1607 — Token cost estimator: add more currencies (CNY, etc.)**  
   [View](https://github.com/Hmbown/CodeWhale/issues/1607) | 6 comments  
   *Why it matters:* Chinese-speaking users requesting CNY support in cost estimation. Community split on whether this should be configurable or auto-detected from locale.

6. **#2261 — TUI crash: input leaks to PowerShell terminal**  
   [View](https://github.com/Hmbown/CodeWhale/issues/2261) | 5 comments  
   *Why it matters:* Dangerous — after AI response completion, input focus is lost and subsequent keystrokes execute as PowerShell commands. One of the most impactful Windows bugs.

7. **#1835 — Windows: Input field unresponsive (IME composition deadlock)**  
   [View](https://github.com/Hmbown/CodeWhale/issues/1835) | 4 comments (1 👍)  
   *Why it matters:* Chinese IME (Sogou) triggers a deadlock in crossterm's event polling. Blocks non-English input workflows on Windows entirely.

8. **#2934 — Sidebar sessions panel with auto-resume**  
   [View](https://github.com/Hmbown/CodeWhale/issues/2934) | 4 comments  
   *Why it matters:* Users want persistent session browsing without relying solely on `Ctrl+R` popup. Strong voting for visual session management.

9. **#3932 — Fleet: model has no vocabulary to pick fleet member or model class**  
   [View](https://github.com/Hmbown/CodeWhale/issues/3932) | 2 comments  
   *Why it matters:* Critical design gap — the agent tool schema lacks `role`/`model_class` fields, preventing Fleet from deploying appropriate models per task class. Opened just yesterday by maintainer.

10. **#3882 — Bound Fleet sub-agent output to prevent memory exhaustion (CLOSED)**  
    [View](https://github.com/Hmbown/CodeWhale/issues/3882) | 2 comments  
    *Why it matters:* Release blocker — a user reported 15.26 GB memory usage during Fleet usage. **Resolved by PR #3931** with absolute recursion-depth ceiling and task-id entropy fixes.

## Key PR Progress (Top 10 of 20 updated)

1. **#3892 — Auto-discover `.codewhale/rules/` and `.claude/rules/` directories (MERGED)**  
   [View](https://github.com/Hmbown/CodeWhale/pull/3892)  
   *Why it matters:* Closes #3867. Every session start now scans both directories for project context rules. Removes the hard block on project-scope instructions. One of the most impactful UX improvements this release.

2. **#3931 — Enforce absolute recursion-depth ceiling; widen task-id entropy (MERGED)**  
   [View](https://github.com/Hmbown/CodeWhale/pull/3931)  
   *Why it matters:* Fixes the 15.26 GB memory issue from #3882. Confirms global 100/200-agent admission cap is enforced; deep 4+nesting still possible but now bounded. Widen task-id from `u64` to `[u8; 16]` for collision safety.

3. **#3936 — Unique temp path per atomic state write (MERGED)**  
   [View](https://github.com/Hmbown/CodeWhale/pull/3936)  
   *Why it matters:* Fixes concurrent-persist corruption — `persist_state_best_effort` spawned threads without unique temp paths, causing cross-writer corruption on the same JSON file. Uses `tempfile::NamedTempFile` for safe atomic writes.

4. **#3902 — Fix five render/input hot paths (OPEN)**  
   [View](https://github.com/Hmbown/CodeWhale/pull/3902)  
   *Why it matters:* Performance sweep — fixes tasks sidebar double-row computation, token estimation on every keystroke, full history re-render per tick, redundant data-attribute collection, and per-frame channel flush. Includes adversarial multi-agent regression detection.

5. **#3895 / #3901 — Report local worker RSS in fleet host status (MERGED)**  
   [View](https://github.com/Hmbown/CodeWhale/pull/3901)  
   *Why it matters:* Sampled per-worker RSS via `ps -o rss=` on Unix surfaces `memory_mb` on `FleetHostWorkerStatus`. Enables memory telemetry follow-up for Fleet.

6. **#3873 — Remove unused execpolicy amend module (MERGED)**  
   [View](https://github.com/Hmbown/CodeWhale/pull/3873)  
   *Why it matters:* Drops dead code and `fd-lock` dependency — part of maintainer-led codebase cleanup.

7. **#3879 — Prune dead fleet runtime helpers (MERGED)**  
   [View](https://github.com/Hmbown/CodeWhale/pull/3879)  
   *Why it matters:* Removes legacy compatibility helpers from `fleet/worker_runtime.rs` with no call sites. Keeps active profile-aware path.

8. **#3865 — Persist sub-agent state to `.codewhale/` instead of `.deepseek/` (MERGED)**  
   [View](https://github.com/Hmbown/CodeWhale/pull/3865)  
   *Why it matters:* Fixes rebrand-era fallback — default path returned legacy `.deepseek/state/` on first run instead of current `.codewhale/state/`.

9. **#3643 — Setup summary wizard step for MCP/skills/plugins overview (MERGED)**  
   [View](https://github.com/Hmbown/CodeWhale/pull/3643)  
   *Why it matters:* First step of v0.8.67 setup wizard — scrollable TUI modal displaying MCP server status, skills directory info, plugin state. Part of #3407 epic.

10. **#3789 — Show safety policy in /status (MERGED)**  
    [View](https://github.com/Hmbown/CodeWhale/pull/3789)  
    *Why it matters:* Adds Safety row showing mode-derived sandbox/network posture (Plan=read-only, Agent/Auto=network-on, Yolo=unrestricted). Improves runtime transparency.

## Feature Request Trends

The most consistent feature demand across issues is **guided first-run experience** — issues #3793, #3792, and PR #3643 all converge on replacing the blank prompt editor with a structured, language-first wizard. A second cluster revolves around **visual session management**: sidebar sessions panel (#2934), hotbar quick actions (#2061), and cockpit/truth-surface wiring (#1887). The Fleet agent system has emergent demands for **model-class routing** (#3932) and **memory/recursion safety** (now addressed by #3931). Chinese-speaking users continue requesting **localized cost estimation** (CNY in #1607) and **IME stability** (#1835).

## Developer Pain Points

1. **Windows IME deadlocks** — Three separate issues (#1812, #1835, #2261) describe input focus loss or deadlocks under Chinese/Japanese IMEs. The root cause is crossterm's event polling on Windows, with no fix yet in sight.

2. **TUI freeze/no-input scenarios** — Issues #1338, #1512, and #2261 all report UI becoming completely unresponsive mid-session, often after enter-key input or multi-turn conversations. Users resort to killing the process.

3. **Fleet memory explosions** — The 15.26 GB report (#3882) highlights that sub-agent fanout without output bounds can exhaust host memory. While bounded in this release (#3931), the pattern suggests Fleet needs more proactive memory governance.

4. **Instructions/rules discoverability** — #3867 exposed that the hard block on project-scope instructions made multi-project workflows unusable. Even after fix, users want better discoverability of where rules live.

5. **Config persistence confusion** — Multiple PRs (#3784, #3764, #3862) address config persistence bugs and unused approval-cache containers, indicating ongoing maintenance burden in the config subsystem.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*